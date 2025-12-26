const SCENARIO = {
    "start": {
        name: "Me",
        text: "(In front of the school gate. I feel the excitement and tension of the first day.)",
        background: "assets/images/background/school.png",
        character: null,
        next: "start_2"
    },
    "start_2": {
        name: "Me",
        text: "(The unfamiliar school uniform and scenery... everything feels new.)",
        next: "start_3"
    },
    "start_3": {
        name: "Me",
        text: "(My heart is racing. I take a deep breath and step toward the school gate.)",
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
        text: "\"Hello? I haven't seen your face before. Seeing you standing blankly in front of the gate at this hour... are you perhaps the transfer student who was supposed to come today?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "intro_1"
    },
    "intro_1": {
        name: "Me",
        text: "(She smiles and approaches. A faint scent of lavender drifts from her hair.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "intro_2"
    },
    "intro_2": {
        name: "Me",
        text: "(As she looks at me, my heart starts to race.)",
        next: "intro_3"
    },
    "intro_3": {
        name: "Seoyeon",
        text: "\"I'm the student council president, Seoyeon. I came to meet you at the homeroom teacher's request. Nice to meet you!\"",
        choices: [
            { text: "Yeah, nice to meet you. The school is so big that I was getting a bit lost.", next: "path_friendly_1", stats: { Seoyeon: { affinity: 5 } } },
            { text: "The student council president herself came to meet me? Am I getting some special treatment?", next: "path_tease_1", stats: { Seoyeon: { affinity: 5 } } },
            { text: "You... are really pretty. (The truth slipped out without me realizing!)", next: "path_blush_1", stats: { Seoyeon: { affinity: 15 } } },
            { text: "(I'm too nervous to speak. I just stare at her blankly...)", next: "path_silent_1", stats: { Seoyeon: { affinity: 2 } } }
        ]
    },
    "path_friendly_1": {
        name: "Seoyeon",
        text: "(She smiles, looking relieved. She lightly pulls on my bag strap and leads the way.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "path_friendly_1_2"
    },
    "path_friendly_1_2": {
        name: "Seoyeon",
        text: "\"Hehe, I thought so. Our school can be a bit complicated at first, right? I'll guide you to the faculty office. Just follow me!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1"
    },
    "path_tease_1": {
        name: "Seoyeon",
        text: "(She narrows her eyes and answers playfully. She winks with a smile.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "path_tease_1_2"
    },
    "path_tease_1_2": {
        name: "Seoyeon",
        text: "\"Oh my, what a confident transfer student! I'll pay special attention to you today!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1"
    },
    "path_blush_1": {
        name: "Seoyeon",
        text: "(Seoyeon's face turns red. She avoids my gaze and fiddles with her hair in embarrassment.)",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "path_blush_1_2"
    },
    "path_blush_1_2": {
        name: "Seoyeon",
        text: "\"Eh...? Wh-what are you saying all of a sudden! Just follow me! You'll be late!\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "hallway_1"
    },
    "path_silent_1": {
        name: "Seoyeon",
        text: "(She waves her hand in front of my eyes and checks my forehead for a fever.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "path_silent_1_2"
    },
    "path_silent_1_2": {
        name: "Seoyeon",
        text: "\"Um... are you okay? Your face is a bit red. Let's go to the faculty office first.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1"
    },
    "hallway_1": {
        name: "Seoyeon",
        text: "(I follow Seoyeon down the hallway. I can hear students' voices from the playground.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_back.png",
        next: "hallway_name_ask"
    },
    "hallway_name_ask": {
        name: "Seoyeon",
        text: "(Seoyeon suddenly stops and turns to look at me.) \"Oh, I just realized I introduced myself but haven't heard your name yet! Transfer student, what's your name?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "My name is '{name}'. Nice to meet you.", next: "hallway_name_share", setFlag: "knowsName_Seoyeon" },
            { text: "Just call me 'Transfer Student'. It's more comfortable.", next: "hallway_name_keep" }
        ]
    },
    "hallway_name_share": {
        name: "Seoyeon",
        text: "\"{name}... Hehe, that's a nice name! Then I'll call you {name} from now on. Nice to meet you, {name}!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_1_2"
    },
    "hallway_name_keep": {
        name: "Seoyeon",
        text: "\"Aw, how boring! Alright. If that's what you want, I'll call you 'Transfer Student' for now. But you have to tell me later if you change your mind, okay?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1_2"
    },
    "hallway_1_2": {
        name: "Seoyeon",
        text: "(Looking at her back, the excitement doesn't fade. The hallway is filled with the heat of the students.)",
        character: "assets/images/characters/seyoun_back.png",
        next: "hallway_1_3"
    },
    "hallway_1_3": {
        name: "Seoyeon",
        text: "\"I'll explain the school facilities as we go. Over there is the library, and over there is...\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "The school is really lively. Seoyeon, do you also do club activities?", next: "hallway_talk_club" },
            { text: "The facilities are good, but it looks even better because of the person guiding me.", next: "hallway_talk_flatter" },
            { text: "(I walk while listening quietly to her explanation.)", next: "hallway_talk_listen" }
        ]
    },
    "hallway_talk_club": {
        name: "Seoyeon",
        text: "(She turns toward me, her eyes sparkling with passion.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_talk_club_2"
    },
    "hallway_talk_club_2": {
        name: "Seoyeon",
        text: "\"Yes! I'm in the student council and the gardening club. I like taking care of flowers. Come visit our greenhouse later!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2"
    },
    "hallway_talk_flatter": {
        name: "Seoyeon",
        text: "(She clears her throat shyly. A faint blush brushes her cheeks.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_talk_flatter_2"
    },
    "hallway_talk_flatter_2": {
        name: "Seoyeon",
        text: "\"Really... you speak so beautifully. I feel at ease when I'm with you. I might even want to act like a spoiled child... Hehe, just kidding.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_2"
    },
    "hallway_talk_listen": {
        name: "Seoyeon",
        text: "(She seems to like my attitude and continues her explanation passionately.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_talk_listen_2"
    },
    "hallway_talk_listen_2": {
        name: "Seoyeon",
        text: "\"Thank you for listening so well. You seem like a very sincere person! You'll adapt in no time.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2"
    },
    "hallway_2": {
        name: "Seoyeon",
        text: "(She suddenly stops and turns to look at me with an expectant gaze.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2_2"
    },
    "hallway_2_2": {
        name: "Seoyeon",
        text: "(A silence flows as if only the two of us are left. Her eyes stare into mine.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2_3"
    },
    "hallway_2_3": {
        name: "Seoyeon",
        text: "\"What kind of club are you interested in? Our student council is always welcoming new talent. If you join... I could even teach you the work myself.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "If I join the student council, can I be with you every day? Then I'll definitely apply!", next: "path_flirt_2" },
            { text: "The gardening club is also tempting. Especially if there's a president prettier than the flowers.", next: "path_club_flower" },
            { text: "I'm not sure yet. I'll decide after I adapt to school life a bit.", next: "path_normal_2" },
            { text: "Rather than a club... I want to know more about you, Seoyeon. (Direct!)", next: "path_direct_2" }
        ]
    },
    "path_flirt_2": {
        name: "Seoyeon",
        text: "(Seoyeon's face turns red. She avoids my gaze with a small smile.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "path_flirt_2_2"
    },
    "path_flirt_2_2": {
        name: "Seoyeon",
        text: "\"E-every day... there's so much work! But if you join... I might be a little happy too. I'll be looking forward to it.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "classroom_1_1"
    },
    "path_club_flower": {
        name: "Seoyeon",
        text: "(She playfully hits my shoulder. It feels like we've gotten closer.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "path_club_flower_2"
    },
    "path_club_flower_2": {
        name: "Seoyeon",
        text: "\"Hmph... are you a player? The gardening club will get noisy if you join. You have to come, okay? It's a promise!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_1_1"
    },
    "path_normal_2": {
        name: "Seoyeon",
        text: "(She nods and leads the way again.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_back.png",
        next: "classroom_1_1"
    },
    "path_direct_2": {
        name: "Seoyeon",
        text: "(She stares at me blankly, then bursts into a clear laugh.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "path_direct_2_2"
    },
    "path_direct_2_2": {
        name: "Seoyeon",
        text: "\"Hehe, you're honest. About me... well, I might tell you depending on how you do. I'll be looking forward to it!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "classroom_1_1"
    },
    "classroom_1_1": {
        name: "Seoyeon",
        text: "(We arrived at the classroom. I can hear the children inside. Seoyeon taps my shoulder to cheer me on.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_1_2"
    },
    "classroom_1_2": {
        name: "Seoyeon",
        text: "(The place she touched feels hot. She looks into my eyes and gives a small cheer.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_1_3"
    },
    "classroom_1_3": {
        name: "Seoyeon",
        text: "\"This is Class 2-3. Don't be nervous. I'm right here, so just be yourself. Got it?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_2"
    },
    "classroom_2": {
        name: "Homeroom Teacher",
        text: "(As I stand at the podium, dozens of gazes are fixed on me. Seoyeon stands beside me with a reassuring smile.)",
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
        text: "\"Now, before you introduce yourself... do you have any questions for me? Actually, I'm just as nervous as you are. Hehe, I guess a homeroom teacher shouldn't be like this, right?\"",
        context: "The situation of having a conversation with the homeroom teacher just before giving the first greeting as a transfer student in front of the podium.",
        personality: "A professional teacher who tries to maintain boundaries, but has a 'clumsy' side and secretly relies on the protagonist for emotional support. She is weak to the protagonist's unexpected maturity.",
        character: "assets/images/characters/teacher.png",
        next: "classroom_2_3"
    },
    "classroom_2_3": {
        name: "Homeroom Teacher",
        text: "\"Now, everyone pay attention! This is the transfer student who will be joining us from today. Everyone, get along well. Now, shall we have a word of self-introduction?\"",
        character: "assets/images/characters/teacher.png",
        choices: [
            { text: "My name is '{name}'. Nice to meet you!", next: "teacher_name_share", setFlag: "knowsName_Teacher", stats: { Teacher: { affinity: 5 } } },
            { text: "Hi! I like exercising and have an active personality!", next: "class_after_active", setFlag: "personality_active", stats: { Teacher: { affinity: 2 } } },
            { text: "Nice to meet you. I tend to like reading books quietly.", next: "class_after_quiet", setFlag: "personality_quiet", stats: { Teacher: { affinity: 2 } } },
            { text: "I came here to study. I hate being disturbed.", next: "class_after_study", setFlag: "personality_study", stats: { Teacher: { affinity: -2 } } }
        ]
    },
    "teacher_name_share": {
        name: "Homeroom Teacher",
        text: "\"Oh, so your name is {name}. What a lovely name. Now, {name}, why don't you introduce yourself to the class?\"",
        character: "assets/images/characters/teacher.png",
        choices: [
            { text: "Introduce actively.", next: "class_after_active", setFlag: "personality_active" },
            { text: "Introduce calmly.", next: "class_after_quiet", setFlag: "personality_quiet" },
            { text: "Introduce socially.", next: "class_after_party", setFlag: "personality_party" }
        ]
    },
    "class_after_active": {
        name: "Kids",
        text: "(Cheers burst out. The boys in the back look excited. Seoyeon smiles and applauds.)",
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
        text: "\"Oh~ you look like you can exercise? How about a game of volleyball during lunch?\"",
        character: null,
        next: "lunch_time"
    },
    "class_after_quiet": {
        name: "Kids",
        text: "(The kids nod and accept me calmly. A few girls whisper while looking at me.)",
        character: null,
        next: "class_after_quiet_2"
    },
    "class_after_quiet_2": {
        name: "Kids",
        text: "(Seoyeon nods, liking my serious appearance. The classroom becomes calmer.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "class_after_quiet_3"
    },
    "class_after_quiet_3": {
        name: "Kids",
        text: "\"Wow, there's an atmosphere... Can I say hi if we meet in the library later?\"",
        character: null,
        next: "lunch_time"
    },
    "class_after_party": {
        name: "Kids",
        text: "(The classroom instantly becomes noisy. Kids flock around me.)",
        character: null,
        next: "class_after_party_2"
    },
    "class_after_party_2": {
        name: "Kids",
        text: "(Seoyeon is flustered but soon bursts into laughter. The kids are busy deciding on the menu.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "class_after_party_3"
    },
    "class_after_party_3": {
        name: "Kids",
        text: "\"Wow! Your personality is awesome! Today's tteokbokki is on me! Let's go to karaoke!\"",
        character: null,
        next: "lunch_time"
    },
    "class_after_study": {
        name: "Kids",
        text: "(A cold silence flows. The kids seem flustered and whisper among themselves.)",
        character: null,
        next: "class_after_study_2"
    },
    "class_after_study_2": {
        name: "Kids",
        text: "(Seoyeon's expression hardens. It feels like a wall has been built.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "class_after_study_3"
    },
    "class_after_study_3": {
        name: "Kids",
        text: "\"Wow... no joke. Is he a total bookworm? It looks like trouble if we touch him...\"",
        character: null,
        next: "lunch_time"
    },
    "lunch_time": {
        name: "Me",
        text: "(Morning classes passed in a blur. The lunch bell rings and kids rush to the cafeteria.)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "lunch_time_2"
    },
    "lunch_time_2": {
        name: "Me",
        text: "(What should I do? I can see kids playing on the playground. I'm hungry.)",
        choices: [
            { text: "Approach Seoyeon and suggest having lunch together.", next: "lunch_seoyeon", setFlag: "metSeoyeon" },
            { text: "Look around the school alone and find a quiet place to eat.", next: "lunch_alone", setFlag: "metYuna" },
            { text: "Follow the sound of a volleyball coming from the gym.", next: "lunch_dain", setFlag: "metDain" },
            { text: "Run to the snack bar and buy the legendary 'Chocolate Conch Bread'.", next: "lunch_store" },
            { text: "Stay in the classroom and catch up on some sleep. (I was too restless yesterday...)", next: "lunch_sleep" }
        ]
    },
    "lunch_seoyeon": {
        name: "Seoyeon",
        text: "(As I approach, she takes out a lunch box as if she had been waiting.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "lunch_seoyeon_2"
    },
    "lunch_seoyeon_2": {
        name: "Seoyeon",
        text: "\"I was just about to look for you. Want to eat at our secret place on the rooftop?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_1"
    },
    "rooftop_1": {
        name: "Seoyeon",
        text: "(The school rooftop with a pleasant breeze. Seoyeon unfolds a three-tier lunch box.)",
        background: "assets/images/background/top_school.png",
        next: "rooftop_1_2"
    },
    "rooftop_1_2": {
        name: "Seoyeon",
        text: "(A savory smell drifts from the food. She hands me chopsticks and smiles shyly.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_1_2_2"
    },
    "rooftop_1_2_2": {
        name: "Seoyeon",
        text: "\"I made this this morning. I hope it suits your taste...\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_1_3"
    },
    "rooftop_1_3": {
        name: "Seoyeon",
        text: "\"This octopus-shaped sausage is my masterpiece! Want to try one?\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Wow, it looks really delicious! Seoyeon, you're good at cooking too.", next: "rooftop_talk_food" },
            { text: "Ah... say 'Ah'. (I'll try to be brave!)", next: "rooftop_talk_ah" },
            { text: "I've never seen a lunch box so full of care. Thank you so much.", next: "rooftop_talk_thanks" }
        ]
    },
    "rooftop_talk_food": {
        name: "Seoyeon",
        text: "(She blushes happily. She looks proud seeing me eat with gusto.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_talk_food_2"
    },
    "rooftop_talk_food_2": {
        name: "Seoyeon",
        text: "\"Really? I'm glad! I was worried about the menu yesterday. Eat a lot!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_2"
    },
    "rooftop_talk_ah": {
        name: "Seoyeon",
        text: "(Seoyeon's face turns red. She carefully picks up a sausage and brings it to my mouth.)",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "rooftop_talk_ah_2"
    },
    "rooftop_talk_ah_2": {
        name: "Seoyeon",
        text: "\"Wh-what?! You say such things so casually... Fine, just this once! Say... Ah...\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "rooftop_2"
    },
    "rooftop_talk_thanks": {
        name: "Seoyeon",
        text: "(She smiles and stares into my eyes. She wipes the sauce from my mouth with her finger.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_talk_thanks_2"
    },
    "rooftop_talk_thanks_2": {
        name: "Seoyeon",
        text: "\"I'm the one who's thankful. It's better than eating alone. Will you eat with me often?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_2"
    },
    "rooftop_2": {
        name: "Seoyeon",
        text: "(After the meal, we sit side by side. Seoyeon leans her head on my shoulder.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_2_2"
    },
    "rooftop_2_2": {
        name: "Seoyeon",
        text: "\"Actually, from the first time I saw you... I felt like we've known each other for a long time. How about you?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Me too. It feels like destiny, in a way?", next: "rooftop_destiny" },
            { text: "Maybe it's because Seoyeon treated me so kindly?", next: "rooftop_kind" },
            { text: "Well, I'm not sure yet. But I feel comfortable with you.", next: "rooftop_comfortable" }
        ]
    },
    "rooftop_destiny": {
        name: "Seoyeon",
        text: "(She smiles shyly and overlaps her hand on mine. She fiddles with my fingers.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_destiny_2"
    },
    "rooftop_destiny_2": {
        name: "Seoyeon",
        text: "\"Destiny... that word sounds good. Let's make many more memories. Promise?\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "after_school_start"
    },
    "rooftop_kind": {
        name: "Seoyeon",
        text: "(She pouts, looking lovely. She lightly pinches my arm.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "rooftop_kind_2"
    },
    "rooftop_kind_2": {
        name: "Seoyeon",
        text: "\"Hmph... such a textbook answer. But I'll let it slide. I'll look forward to a more honest answer next time!\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "after_school_start"
    },
    "rooftop_comfortable": {
        name: "Seoyeon",
        text: "(She nods, looking comfortable. She lets out a sigh and relaxes.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_comfortable_2"
    },
    "rooftop_comfortable_2": {
        name: "Seoyeon",
        text: "\"I'm glad you feel comfortable. I can put down the burden of being the president when I'm with you. Thank you.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_school_start"
    },
    "lunch_alone": {
        name: "Me",
        text: "(I arrived at a secluded library annex. I see a girl with a mysterious atmosphere reading by the window.)",
        background: "assets/images/background/library_old.png",
        next: "alone_2"
    },
    "alone_2": {
        name: "???",
        text: "(She speaks in a low voice without looking up. She slowly turns the pages, conscious of me.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "alone_2_2"
    },
    "alone_2_2": {
        name: "???",
        text: "\"...Are you lost? Students don't usually come here. You found it, transfer student.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_intro"
    },
    "yuna_intro": {
        name: "???",
        text: "(She raises her head and looks at me with mysterious purple eyes. She closes the book and approaches.)",
        next: "yuna_intro_2"
    },
    "yuna_intro_2": {
        name: "???",
        text: "\"I'm Yuna. I like staying quiet. This school... is different from how it looks. I feel a familiar atmosphere from you.\"",
        choices: [
            { text: "My name is '{name}'.", next: "yuna_name_share", setFlag: "knowsName_Yuna" },
            { text: "The school is different? What does that mean?", next: "yuna_secret" },
            { text: "Familiar... have you seen me before?", next: "yuna_scent" },
            { text: "You look somehow dangerous. But I can't take my eyes off you.", next: "yuna_danger" }
        ]
    },
    "yuna_name_share": {
        name: "Yuna",
        text: "\"{name}... It suits you. I'll remember it. I'm Yuna. I like staying quiet.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_intro_3"
    },
    "yuna_intro_3": {
        name: "Yuna",
        text: "\"This school... is different from how it looks. I feel a familiar atmosphere from you.\"",
        character: "assets/images/characters/yuna_nomal.png",
        choices: [
            { text: "The school is different? What does that mean?", next: "yuna_secret", stats: { Yuna: { affinity: 5 } } },
            { text: "Familiar... have you seen me before?", next: "yuna_scent", stats: { Yuna: { affinity: 5 } } },
            { text: "You look somehow dangerous. But I can't take my eyes off you.", next: "yuna_danger", stats: { Yuna: { affinity: 10 } } }
        ]
    },
    "yuna_secret": {
        name: "Yuna",
        text: "(She closes the book with a mysterious smile. She whispers close to my ear.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_secret_2"
    },
    "yuna_secret_2": {
        name: "Yuna",
        text: "\"Hehe, are you curious? Secrets might be better left unknown. You might get hurt if you know the school's stories.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "yuna_scent": {
        name: "Yuna",
        text: "(She takes a step closer and stares intently at me. Her gaze scans every corner of my face. She mutters with a bitter expression.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_scent_2"
    },
    "yuna_scent_2": {
        name: "Yuna",
        text: "\"No, it's the first time. But that 'light' in your eyes... I really covet it. It's different from the dead eyes of the kids in this school. Can I keep watching so that light doesn't go out?\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_school_start"
    },
    "yuna_danger": {
        name: "Yuna",
        text: "(She brushes my cheek with her cold finger. She stares into my eyes with a mysterious smile.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_danger_2"
    },
    "yuna_danger_2": {
        name: "Yuna",
        text: "\"Looking dangerous... Hehe, you're right. But I don't dislike people like you. Until you lose that light... I'll stay by your side.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "lunch_store": {
        name: "Me",
        text: "(I secured the last 'Chocolate Conch Bread'! I take a bite, and the sweetness stimulates my brain. I return to the classroom with the bread.)",
        next: "lunch_store_2"
    },
    "lunch_store_2": {
        name: "Me",
        text: "\"Kuu~ this is the taste! The fatigue of the first day is gone!\"",
        next: "after_school_start"
    },
    "lunch_sleep": {
        name: "Me",
        text: "(I lie on the desk and try to sleep. The sunlight warms my back. I see a vision of talking with someone in my dream.)",
        background: "assets/images/background/room_school.png",
        next: "lunch_sleep_2"
    },
    "lunch_sleep_2": {
        name: "Me",
        text: "(In my dream, I heard someone calling my name. A nostalgic and sad voice... But when I woke up, no one was there.)",
        next: "after_school_start"
    },
    "lunch_dain": {
        name: "Me",
        text: "(The sound of a volleyball comes from the gym. I head toward the gym.)",
        background: "assets/images/background/playground.png",
        next: "lunch_dain_2"
    },
    "lunch_dain_2": {
        name: "???",
        text: "(As I open the gym door, she is there. She is spiking the ball on the court. She discovers me and waves with a bright smile.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "lunch_dain_3"
    },
    "lunch_dain_3": {
        name: "???",
        text: "\"Hey, transfer student! Come here and let's have a match! You look like you can exercise?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        choices: [
            { text: "My name is '{name}'.", next: "dain_name_share", setFlag: "knowsName_Dain", stats: { Dain: { affinity: 5 } } },
            { text: "I'm not that good at exercise...", next: "lunch_dain_4", stats: { Dain: { affinity: 2 } } },
            { text: "Okay, let's see who's better!", next: "lunch_dain_4", stats: { Dain: { affinity: 5 } } }
        ]
    },
    "dain_name_share": {
        name: "Dain",
        text: "\"{name}? Cool name! I'm Dain from the volleyball club. No one has a better jump than me, so be prepared!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "lunch_dain_gym_2"
    },
    "lunch_dain_4": {
        name: "Dain",
        text: "\"I'm Dain from the volleyball club. No one has a better jump than me, so be prepared!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "lunch_dain_gym_2"
    },
    "lunch_dain_gym_2": {
        name: "Dain",
        text: "\"Now, this is my territory! Are you ready? I won't go easy on you!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        setFlag: "metDain",
        next: "after_school_start"
    },
    "after_school_start": {
        name: "Me",
        text: "(Classes ended and the bell rang. The sunset light colors the classroom red.)",
        background: "assets/images/background/room_school.png",
        character: null,
        sunset: true,
        next: "after_school_start_2"
    },
    "after_school_start_2": {
        name: "Me",
        text: "(I pack my bag to leave. The hallway is full of kids going home.)",
        sunset: true,
        next: "after_school_start_3"
    },
    "after_school_start_3": {
        name: "Me",
        text: "(Today was a long day. What should I do now?)",
        sunset: true,
        choices: [
            { text: "Stop by the student council room where Seoyeon is.", next: "after_seoyeon", condition: "metSeoyeon" },
            { text: "Go toward the student council room.", next: "after_seoyeon", excludeCondition: "metSeoyeon", setFlag: "metSeoyeon" },
            { text: "Head to the library annex where Yuna was.", next: "after_yuna", condition: "metYuna" },
            { text: "Look around the quiet parts of the school more.", next: "after_yuna_new", excludeCondition: "metYuna" },
            { text: "Go see Dain practicing in the gym.", next: "after_dain", condition: "metDain" },
            { text: "Head to the gym where lively sounds are coming from.", next: "after_dain_new", excludeCondition: "metDain" },
            { text: "I'm tired today, so I'll go straight home.", next: "after_home" }
        ]
    },
    "after_dain_new": {
        name: "Me",
        text: "(At the gym, I see kids practicing volleyball in the sunset light. One girl particularly stands out.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_new_intro"
    },
    "after_dain_new_intro": {
        name: "???",
        text: "\"Hi! I'm Dain from the volleyball club. You're the transfer student, right?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        setFlag: "metDain",
        next: "after_dain_2"
    },
    "after_dain": {
        name: "Dain",
        text: "(At the gym, Dain is jumping high and slamming down a powerful spike.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_2"
    },
    "after_dain_2": {
        name: "Dain",
        text: "(Dain discovers me and runs over, wiping sweat with a towel.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_3"
    },
    "after_dain_3": {
        name: "Dain",
        text: "\"Hey, transfer student! What brings you here? Did you come to watch me practice? Hehe, fallen for me already?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        choices: [
            { text: "Yeah, watching you practice makes me feel energized too.", next: "after_dain_cheer" },
            { text: "I was just looking around the school and came over because I heard sounds.", next: "after_dain_normal" }
        ]
    },
    "after_dain_cheer": {
        name: "Dain",
        text: "(Dain smiles shyly. A healthy blush blooms on her face.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_cheer_2"
    },
    "after_dain_cheer_2": {
        name: "Dain",
        text: "\"Wh-what... it's embarrassing! I didn't work hard just for you! But... I feel more energized since you're watching...\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        next: "after_dain_end"
    },
    "after_dain_normal": {
        name: "Dain",
        text: "(Dain playfully hits my shoulder. I feel a pleasant warmth from her touch.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_normal_2"
    },
    "after_dain_normal_2": {
        name: "Dain",
        text: "\"Ayy~ you're not being honest! Since you're here, wait until practice is over. Let's go eat tteokbokki!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_end"
    },
    "after_dain_end": {
        name: "Me",
        text: "(I sat on the stands and watched Dain until practice was over. Her passion didn't cool down until sunset.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        sunset: true,
        next: "after_dain_end_2"
    },
    "after_dain_end_2": {
        name: "Dain",
        text: "(Dain approaches me, panting heavily. Sweat sparkles on her forehead.) \"Phew... sorry for making you wait! Let's go eat tteokbokki!\"",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        setFlag: "datedDainDay1",
        next: "after_dain_tteokbokki"
    },
    "after_dain_tteokbokki": {
        name: "Dain",
        text: "(Dain smiles while eating steaming tteokbokki. It feels more delicious after exercise.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "after_dain_tteokbokki_2"
    },
    "after_dain_tteokbokki_2": {
        name: "Dain",
        text: "\"Kya~ tteokbokki after exercise is the best! Thanks for coming with me. It's twice as delicious!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "after_dain_tteokbokki_3"
    },
    "after_dain_tteokbokki_3": {
        name: "Dain",
        text: "\"Let's eat together often from now on! Promise?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "evening_home"
    },
    "after_yuna_new": {
        name: "Me",
        text: "(I arrived at the old library annex. A girl is sitting by the window in the sunset light.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_new_2"
    },
    "after_yuna_new_2": {
        name: "???",
        text: "\"Hello? Coming here at this hour... you're unique. I'm Yuna.\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        setFlag: "metYuna",
        next: "after_yuna_3"
    },
    "after_seoyeon": {
        name: "Seoyeon",
        text: "(Opening the student council room door, I see Seoyeon struggling with documents.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_2"
    },
    "after_seoyeon_2": {
        name: "Seoyeon",
        text: "(She looks up in surprise. Fatigue is evident. She stretches and puts down her pen.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_3"
    },
    "after_seoyeon_3": {
        name: "Seoyeon",
        text: "\"Oh? Transfer student! What brings you here? Were you waiting for me?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Yeah, I wanted to go home together. Should I help?", next: "after_seoyeon_help", setFlag: "helpedSeoyeon" },
            { text: "I just came because I wanted to see your face. Aren't you overdoing it?", next: "after_seoyeon_worry" }
        ]
    },
    "after_seoyeon_help": {
        name: "Seoyeon",
        text: "(She looks moved and makes room for me. I can smell her scent among the papers.)",
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
        text: "\"Really? Thanks! If you help, I think I can finish quickly. Now, can you help me classify these documents?\"",
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
        text: "(We stopped by a cafe. The scent of warm cocoa fills the air.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe_2"
    },
    "after_seoyeon_cafe_2": {
        name: "Seoyeon",
        text: "(Seoyeon looks happy while drinking her beverage.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe_2_2"
    },
    "after_seoyeon_cafe_2_2": {
        name: "Seoyeon",
        text: "\"Haa~ I feel alive. Thank you so much today.\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe_3"
    },
    "after_seoyeon_cafe_3": {
        name: "Seoyeon",
        text: "\"I finished the work happily thanks to you. Can we go home together tomorrow too?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Of course. I'll wait tomorrow too.", next: "after_seoyeon_promise" },
            { text: "Well, depending on my mood tomorrow? (Playful)", next: "after_seoyeon_tease" }
        ]
    },
    "after_seoyeon_promise": {
        name: "Seoyeon",
        text: "(She smiles and holds out her pinky finger. Her laughter sounds sweet.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "after_seoyeon_promise_2"
    },
    "after_seoyeon_promise_2": {
        name: "Seoyeon",
        text: "\"Is it a promise? See you tomorrow. Get home safely!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "evening_home"
    },
    "after_seoyeon_tease": {
        name: "Seoyeon",
        text: "(She glares playfully while puffing out her cheeks. She bursts into laughter and hits my arm.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "after_seoyeon_tease_2"
    },
    "after_seoyeon_tease_2": {
        name: "Seoyeon",
        text: "\"Hmph... you're mean! But you still have to come, okay? See you tomorrow!\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "evening_home"
    },
    "after_seoyeon_worry": {
        name: "Seoyeon",
        text: "(She smiles shyly. She seems moved by my concern.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_worry_2"
    },
    "after_seoyeon_worry_2": {
        name: "Seoyeon",
        text: "\"Hehe, you caught me. Being president is hard work. But I feel energized now! Wait a bit, let's go together!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe"
    },
    "after_yuna": {
        name: "Yuna",
        text: "(The library annex is darker and quieter. Yuna is sitting by the window, looking at the sunset.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_2"
    },
    "after_yuna_2": {
        name: "Yuna",
        text: "(She looks beautiful and precarious. She stares out the window for a long time.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_3"
    },
    "after_yuna_3": {
        name: "Yuna",
        text: "\"Ah, transfer student... I like the library after school. What brings you here?\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        choices: [
            { text: "I came because I wanted to know more about you.", next: "after_yuna_know" },
            { text: "The school's secret... tell me what it is.", next: "after_yuna_secret", condition: "metYuna" },
            { text: "What kind of place is this school?", next: "after_yuna_secret", excludeCondition: "metYuna" }
        ]
    },
    "after_yuna_know": {
        name: "Yuna",
        text: "(She turns her head and looks at me. A faint smile spreads across her lips.)",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "after_yuna_know_2"
    },
    "after_yuna_know_2": {
        name: "Yuna",
        text: "(She takes my hand and leads me to the rooftop of the annex.)",
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
        text: "\"Fine, tonight will be long. I'll tell you little by little. Follow me.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_yuna_rooftop"
    },
    "after_yuna_rooftop": {
        name: "Yuna",
        text: "(The school from the rooftop looks different. The cold night air wraps around us.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "after_yuna_rooftop_2"
    },
    "after_yuna_rooftop_2": {
        name: "Yuna",
        text: "(Yuna leans on the railing and stares into the distance.)",
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
        text: "\"Hidden problems are festering. Haven't you felt that discomfort?\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        choices: [
            { text: "I can go anywhere if I'm with you.", next: "after_yuna_together" },
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
        text: "\"What a foolish thing to say... but I don't hate it. Let's share each other's secrets.\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        next: "evening_home"
    },
    "after_yuna_scared": {
        name: "Yuna",
        text: "(She laughs coldly and lets go of my hand. She turns back to the window and pushes me away.)",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "after_yuna_scared_2"
    },
    "after_yuna_scared_2": {
        name: "Yuna",
        text: "\"Hehe, I thought so. It's too heavy for an ordinary student. Go back for today.\"",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "evening_home"
    },
    "after_yuna_secret": {
        name: "Yuna",
        text: "(She signals to be quiet. She pulls my collar and brings me close.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_yuna_secret_2"
    },
    "after_yuna_secret_2": {
        name: "Yuna",
        text: "\"Shh... walls have ears. Once you know the truth, you can't go back. If you're okay with that... take my hand.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_yuna_rooftop"
    },
    "after_home": {
        name: "Me",
        text: "(Leaving the school, I look back on today. A lot happened for the first day.)",
        background: "assets/images/background/school.png",
        character: null,
        sunset: true,
        next: "after_home_2"
    },
    "after_home_2": {
        name: "Me",
        text: "(Walking down the street, I look forward to tomorrow. Streetlights turn on one by one.)",
        sunset: true,
        next: "after_home_2_2"
    },
    "after_home_2_2": {
        name: "Me",
        text: "(Tomorrow... I'll be able to meet them again, right?)",
        sunset: true,
        next: "evening_home"
    },
    "evening_home": {
        name: "Me",
        text: "(Lying on the bed, today's events pass through my mind. Seoyeon's smile, Yuna's eyes...)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        next: "evening_home_2"
    },
    "evening_home_2": {
        name: "Me",
        text: "(Staring at the ceiling, I fall into deep thought. Only the sound of the clock echoes.)",
        night: true,
        next: "evening_home_2_2"
    },
    "evening_home_2_2": {
        name: "Me",
        text: "(I didn't expect it to be this eventful... What's waiting for me tomorrow?)",
        night: true,
        choices: [
            { text: "Send a message to Seoyeon saying thanks for today.", next: "evening_message_seoyeon", condition: "metSeoyeon" },
            { text: "Ponder over the things Yuna said.", next: "evening_think_yuna_met", condition: "metYuna" },
            { text: "Recall Dain's lively smile.", next: "evening_think_dain", condition: "metDain" },
            { text: "Recall the questions I felt about the school.", next: "evening_think_yuna", excludeCondition: "metYuna" },
            { text: "I'm tired, so let's just sleep without thinking.", next: "evening_sleep" }
        ]
    },
    "evening_think_dain": {
        name: "Me",
        text: "(Dain's laughter lingers in my ears. I look forward to the tteokbokki tomorrow.)",
        night: true,
        next: "day2_start"
    },
    "evening_message_seoyeon": {
        name: "Me",
        text: "(I sent a message to Seoyeon. 'Thank you for today. I think I'll adapt well thanks to you.')",
        night: true,
        next: "evening_message_seoyeon_2"
    },
    "evening_message_seoyeon_2": {
        name: "Me",
        text: "(After a while, a reply came. My heart is pounding.)",
        night: true,
        next: "evening_message_seoyeon_2_2"
    },
    "evening_message_seoyeon_2_2": {
        name: "Me",
        text: "\"[Seoyeon]: I enjoyed today too! See you at school tomorrow! Good night~ (Heart emoticon)\"",
        night: true,
        next: "day2_start"
    },
    "evening_think_yuna": {
        name: "Me",
        text: "(The strange atmosphere of the school doesn't leave my head. What is this school hiding? I couldn't fall asleep until late.)",
        night: true,
        next: "day2_start"
    },
    "evening_think_yuna_met": {
        name: "Me",
        text: "(Yuna's words about the school's secret don't leave my head. What does she know? I couldn't fall asleep until late.)",
        night: true,
        next: "day2_start"
    },
    "evening_sleep": {
        name: "Me",
        text: "(I fell into a deep sleep. In my dream, I was running down an endless hallway. I woke up at dawn sweating coldly.)",
        night: true,
        next: "day2_start"
    },
    "day2_start": {
        name: "Me",
        text: "(I woke up to the alarm. The morning sunlight is dazzling. I put on the uniform that feels familiar now.)",
        background: "assets/images/background/room_my.png",
        next: "day2_start_2"
    },
    "day2_start_2": {
        name: "Me",
        text: "(I look more confident in the mirror. I packed my bag and left the house.)",
        next: "day2_gate"
    },
    "day2_gate": {
        name: "Seoyeon",
        text: "(At the school gate, Seoyeon waves and runs over from afar.)",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_gate_2"
    },
    "day2_gate_2": {
        name: "Seoyeon",
        text: "(She welcomes me with a fresh smile.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_gate_2_2"
    },
    "day2_gate_2_2": {
        name: "Seoyeon",
        text: "\"Hi, transfer student! Good morning!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_gate_3"
    },
    "day2_gate_3": {
        name: "Seoyeon",
        text: "\"Did you sleep well yesterday? I'm glad your complexion looks good.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Yeah, I slept well thanks to you. Did you sleep well too?", next: "day2_gate_talk_1" },
            { text: "I feel energized seeing you from the morning!", next: "day2_gate_talk_2" },
            { text: "I met a girl named Yuna yesterday... (Bring up Yuna)", next: "day2_gate_talk_yuna_met", condition: "metYuna" },
            { text: "I met a girl named Dain yesterday... (Bring up Dain)", next: "day2_gate_talk_dain_met", condition: "metDain" },
            { text: "Is there a student with a... mysterious atmosphere in this school?", next: "day2_gate_talk_yuna", excludeCondition: "metYuna" }
        ]
    },
    "day2_gate_talk_dain_met": {
        name: "Seoyeon",
        text: "(Seoyeon smiles brightly at Dain's name.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_gate_talk_dain_met_2"
    },
    "day2_gate_talk_dain_met_2": {
        name: "Seoyeon",
        text: "\"Ah, Dain! She's our school's mood maker. If you get close to her, school life will be fun. Let's all hang out later!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_classroom"
    },
    "day2_gate_talk_1": {
        name: "Seoyeon",
        text: "(She smiles and approaches. A faint scent of shampoo drifts in the wind.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_gate_talk_1_2"
    },
    "day2_gate_talk_1_2": {
        name: "Seoyeon",
        text: "(She lightly touches my arm and speaks playfully.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_gate_talk_1_2_2"
    },
    "day2_gate_talk_1_2_2": {
        name: "Seoyeon",
        text: "\"Hehe, I'm glad! I woke up early this morning too.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_gate_talk_1_3"
    },
    "day2_gate_talk_1_3": {
        name: "Seoyeon",
        text: "\"I have a feeling something good will happen. Shall we go to the classroom?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_classroom"
    },
    "day2_gate_talk_2": {
        name: "Seoyeon",
        text: "(Seoyeon's face turns red. She avoids my gaze and tucks her hair behind her ear.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_gate_talk_2_2"
    },
    "day2_gate_talk_2_2": {
        name: "Seoyeon",
        text: "(Her shy appearance shines under the morning sun.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_gate_talk_2_2_2"
    },
    "day2_gate_talk_2_2_2": {
        name: "Seoyeon",
        text: "\"Really... saying such things from the morning...\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_gate_talk_2_3"
    },
    "day2_gate_talk_2_3": {
        name: "Seoyeon",
        text: "\"But thanks. I feel energized seeing you too.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom"
    },
    "day2_gate_talk_yuna_met": {
        name: "Seoyeon",
        text: "(Seoyeon's expression darkens at Yuna's name. She speaks in a lowered voice.)",
        character: "assets/images/characters/seyoun_worried.png",
        next: "day2_gate_talk_yuna_met_2"
    },
    "day2_gate_talk_yuna_met_2": {
        name: "Seoyeon",
        text: "\"Yuna...? You met her. She's... mysterious. It's better not to get too involved. Even teachers are careful around her.\"",
        character: "assets/images/characters/seyoun_worried.png",
        next: "day2_classroom"
    },
    "day2_gate_talk_yuna": {
        name: "Seoyeon",
        text: "(Seoyeon's expression darkens. She looks around and lowers her voice.)",
        character: "assets/images/characters/seyoun_worried.png",
        next: "day2_gate_talk_yuna_2"
    },
    "day2_gate_talk_yuna_2": {
        name: "Seoyeon",
        text: "\"Mysterious atmosphere...? You mean Yuna? She's... mysterious. It's better not to get too involved. Even teachers are careful around her.\"",
        character: "assets/images/characters/seyoun_worried.png",
        next: "day2_classroom"
    },
    "day2_classroom": {
        name: "Me",
        text: "(The classroom feels more comfortable today. Kids wave and greet me.)",
        background: "assets/images/background/room_school.png",
        character: null,
        choices: [
            { text: "Sit in my seat.", next: "day2_classroom_2", condition: "metYuna" },
            { text: "Sit in my seat.", next: "day2_lesson", excludeCondition: "metYuna" }
        ]
    },
    "day2_classroom_2": {
        name: "Me",
        text: "(There's a small note on my desk with a faint purple scent.)",
        choices: [
            { text: "Open the note.", next: "day2_note_open", setFlag: "readNote" },
            { text: "Ignore it and put it in my bag.", next: "day2_note_ignore" }
        ]
    },
    "day2_note_open": {
        name: "Me",
        text: "('Today at lunch, I'll be waiting at the library annex. I have something to say. - Y' ...Who is it?)",
        next: "day2_note_open_2"
    },
    "day2_note_open_2": {
        name: "Me",
        text: "(What does she want to say? My heart starts pounding.)",
        next: "day2_lesson"
    },
    "day2_note_ignore": {
        name: "Me",
        text: "(I put the note in my bag, but I can't concentrate on class.)",
        next: "day2_note_ignore_2"
    },
    "day2_note_ignore_2": {
        name: "Me",
        text: "(Who sent that note? The thought lingers in my head.)",
        next: "day2_lesson"
    },
    "day2_lesson": {
        name: "Homeroom Teacher",
        text: "(Math class continues. The formulas on the blackboard look like an alien language.)",
        character: "assets/images/characters/teacher.png",
        next: "day2_lesson_2"
    },
    "day2_lesson_2": {
        name: "Homeroom Teacher",
        text: "(I hear voices from PE class outside. I look out the window and fall into thought.)",
        character: "assets/images/characters/teacher.png",
        next: "day2_lesson_3"
    },
    "day2_lesson_3": {
        name: "Homeroom Teacher",
        text: "\"Transfer student! Try solving this problem.\"",
        character: "assets/images/characters/teacher.png",
        choices: [
            { text: "Solve the problem.", next: "day2_lesson_solve_study", condition: "personality_study" },
            { text: "Solve the problem.", next: "day2_lesson_solve_active", condition: "personality_active" },
            { text: "Solve the problem.", next: "day2_lesson_solve_normal", condition: "personality_quiet" },
            { text: "Solve the problem.", next: "day2_lesson_solve_normal", condition: "personality_party" },
            { text: "Say I don't know.", next: "day2_lesson_fail" }
        ]
    },
    "day2_lesson_solve_active": {
        name: "Kids",
        text: "(I solve the problem easily. The kids applaud, and Seoyeon gives a thumbs up.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_lesson_solve_2_active"
    },
    "day2_lesson_solve_normal": {
        name: "Kids",
        text: "(I solve the problem easily. The kids applaud, and Seoyeon gives a thumbs up.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_lesson_solve_2"
    },
    "day2_lesson_solve_study": {
        name: "Kids",
        text: "(I solve the problem easily. The kids applaud, and Seoyeon gives a thumbs up.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_lesson_solve_2"
    },
    "day2_lesson_solve_2": {
        name: "Kids",
        text: "\"Wow, the transfer student is good at studying too!\"",
        character: null,
        next: "day2_lunch_choice"
    },
    "day2_lesson_solve_2_active": {
        name: "Kids",
        text: "\"Oh, you're good at studying too? That's unexpected!\"",
        character: null,
        next: "day2_lunch_choice"
    },
    "day2_lesson_fail": {
        name: "Kids",
        text: "(I say I don't know, and the kids laugh lightly. Seoyeon mouths that she'll teach me later.)",
        character: null,
        next: "day2_lesson_fail_2"
    },
    "day2_lesson_fail_2": {
        name: "Kids",
        text: "\"It's okay! I'll help you later!\"",
        character: null,
        next: "day2_lunch_choice"
    },
    "day2_lunch_choice": {
        name: "Me",
        text: "(Lunchtime! What should I do? Seoyeon is looking at me with her lunch box.)",
        choices: [
            { text: "Go to the rooftop with Seoyeon.", next: "day2_lunch_seoyeon" },
            { text: "Go to the library annex as the note said.", next: "day2_lunch_yuna", condition: "readNote" },
            { text: "Head to the library annex where Yuna is.", next: "day2_lunch_yuna", condition: "metYuna", excludeCondition: "readNote" },
            { text: "Head to the quiet library annex.", next: "day2_lunch_yuna_new", excludeCondition: "metYuna" },
            { text: "Go to the gym to see Dain.", next: "day2_lunch_volleyball", condition: "metDain" },
            { text: "Go to the gym to see the kids.", next: "day2_lunch_volleyball_new", excludeCondition: "metDain" },
            { text: "Go to the nurse's office.", next: "day2_lunch_nurse" }
        ]
    },
    "day2_lunch_volleyball_new": {
        name: "Me",
        text: "(The gym is full of energy. A girl is teaching volleyball.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_lunch_volleyball_new_2"
    },
    "day2_lunch_volleyball_new_2": {
        name: "???",
        text: "\"Hey, transfer student! Come and play a game! I'm Dain!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        setFlag: "metDain",
        next: "day2_lunch_volleyball"
    },
    "day2_lunch_seoyeon": {
        name: "Seoyeon",
        text: "(On the rooftop, Seoyeon takes out an elaborate lunch box. A savory smell fills the air.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Next", next: "day2_lunch_seoyeon_special", condition: "helpedSeoyeon" },
            { text: "Next", next: "day2_lunch_seoyeon_1_2", excludeCondition: "helpedSeoyeon" }
        ]
    },
    "day2_lunch_seoyeon_special": {
        name: "Seoyeon",
        text: "\"I prepared this with extra care today. Try it!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_lunch_seoyeon_1_3"
    },
    "day2_lunch_seoyeon_1_2": {
        name: "Seoyeon",
        text: "(She looks at me expectantly. The lunch box is full of delicious sandwiches.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_lunch_seoyeon_1_2_2"
    },
    "day2_lunch_seoyeon_1_2_2": {
        name: "Seoyeon",
        text: "\"Ta-da! I made sandwiches today. I hope you like them.\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_lunch_seoyeon_2"
    },
    "day2_lunch_seoyeon_1_3": {
        name: "Seoyeon",
        text: "\"Ta-da! Special handmade sandwiches. How do they look?\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_lunch_seoyeon_2"
    },
    "day2_lunch_seoyeon_2": {
        name: "Seoyeon",
        text: "(The sandwiches are excellent. Seoyeon smiles happily as I eat.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_lunch_seoyeon_2_2"
    },
    "day2_lunch_seoyeon_2_2": {
        name: "Seoyeon",
        text: "(She lightly wipes the sauce from my mouth. My heart skips a beat.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_lunch_seoyeon_2_2_2"
    },
    "day2_lunch_seoyeon_2_2_2": {
        name: "Seoyeon",
        text: "\"Hehe, is it that delicious? Eat slowly.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_lunch_seoyeon_2_3"
    },
    "day2_lunch_seoyeon_2_3": {
        name: "Seoyeon",
        text: "\"Ah, right! There's a school festival this weekend... are you free?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Of course! I want to go with you.", next: "day2_festival_promise" },
            { text: "Aren't you busy with student council work?", next: "day2_festival_worry" }
        ]
    },
    "day2_festival_promise": {
        name: "Seoyeon",
        text: "(She grabs my hand in excitement. Her face is full of smiles.)",
        character: "assets/images/characters/seyoun_shy2.png",
        setFlag: "promisedFestival",
        next: "day2_festival_promise_2"
    },
    "day2_festival_promise_2": {
        name: "Seoyeon",
        text: "\"Really?! It's a promise! I'm so looking forward to it!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_afternoon"
    },
    "day2_festival_worry": {
        name: "Seoyeon",
        text: "(She leans her head on my shoulder. A faint flower scent comes from her hair.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_festival_worry_2"
    },
    "day2_festival_worry_2": {
        name: "Seoyeon",
        text: "\"I'll make time somehow. You'll go with me, right?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        setFlag: "promisedFestival",
        next: "day2_afternoon"
    },
    "day2_lunch_yuna_new": {
        name: "Me",
        text: "(Looking for a quiet place, I headed to the library annex. There, a girl was sitting by the window reading a book.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_lunch_yuna_new_2"
    },
    "day2_lunch_yuna_new_2": {
        name: "???",
        text: "\"Hi? Coming all the way here, you're quite unique too. I'm Yuna.\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        setFlag: "metYuna",
        next: "day2_lunch_yuna_1_2"
    },
    "day2_lunch_yuna": {
        name: "Yuna",
        text: "(Entering the library annex, Yuna is sitting by the window staring into the distance. As I approach, she slowly turns her head.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_1_2"
    },
    "day2_lunch_yuna_1_2": {
        name: "Yuna",
        text: "(An unknown sadness dwells in her eyes. She takes my hand and leads me to a secluded bookshelf.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_1_2_2"
    },
    "day2_lunch_yuna_1_2_2": {
        name: "Yuna",
        text: "(She stares intently at me, as if trying to see through my heart.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_sadsmile.png",
        choices: [
            { text: "Next", next: "day2_lunch_yuna_1_2_2_note", condition: "readNote" },
            { text: "Next", next: "day2_lunch_yuna_1_2_2_no_note", excludeCondition: "readNote" }
        ]
    },
    "day2_lunch_yuna_1_2_2_note": {
        name: "Yuna",
        text: "\"You came. I thought you'd come after seeing the note.\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_1_3"
    },
    "day2_lunch_yuna_1_2_2_no_note": {
        name: "Yuna",
        text: "\"To have made your way here... are we connected?\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_1_3"
    },
    "day2_lunch_yuna_1_3": {
        name: "Yuna",
        text: "\"The school's secret... and the link between us. It's time to tell you.\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_2"
    },
    "day2_lunch_yuna_2": {
        name: "Yuna",
        text: "(She opens an old book. Inside is an old photograph.)",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_2_2"
    },
    "day2_lunch_yuna_2_2": {
        name: "Yuna",
        text: "(In the photo, a boy who looks exactly like me is standing. I'm shocked.)",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_2_3"
    },
    "day2_lunch_yuna_2_3": {
        name: "Yuna",
        text: "\"This boy... he's a senior who disappeared two years ago.\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_2_4"
    },
    "day2_lunch_yuna_2_4": {
        name: "Yuna",
        text: "(She grips my collar tightly.)",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_2_4_2"
    },
    "day2_lunch_yuna_2_4_2": {
        name: "Yuna",
        text: "\"He stood up against the school and was kicked out. You look just like him.\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        choices: [
            { text: "That's impossible!", next: "day2_yuna_denial" },
            { text: "That senior...? Did you know me?", next: "day2_yuna_accept" }
        ]
    },
    "day2_yuna_denial": {
        name: "Yuna",
        text: "(She laughs coldly. She feels my heartbeat with a cold touch.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_yuna_denial_2"
    },
    "day2_yuna_denial_2": {
        name: "Yuna",
        text: "\"It's hard to believe, but it happened. Be careful. The school is watching you.\"",
        character: "assets/images/characters/yuna_nomal.png",
        setFlag: "knowsSecret",
        next: "day2_afternoon"
    },
    "day2_yuna_accept": {
        name: "Yuna",
        text: "(Dew forms in her eyes. She caresses my cheek and whispers.)",
        character: "assets/images/characters/yuna_sad.png",
        next: "day2_yuna_accept_2"
    },
    "day2_yuna_accept_2": {
        name: "Yuna",
        text: "\"He was precious to me. I want to protect you this time.\"",
        character: "assets/images/characters/yuna_sad.png",
        setFlag: "knowsSecret",
        next: "day2_afternoon"
    },
    "day2_lunch_volleyball": {
        name: "Me",
        text: "(I play volleyball with the kids led by Dain. Sweating makes me feel refreshed.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_lunch_volleyball_2"
    },
    "day2_lunch_volleyball_2": {
        name: "Dain",
        text: "\"Wow! Your spike is awesome! I appoint you as our ace!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_afternoon"
    },
    "day2_lunch_nurse": {
        name: "Me",
        text: "(My head is throbbing. I head to the quiet nurse's office.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_2"
    },
    "day2_lunch_nurse_2": {
        name: "Nurse",
        text: "\"Oh, cute transfer student. Is your heart fluttering because of me?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_3": {
        name: "Nurse",
        text: "(The nurse guides me to the bed with a warm smile.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "My head hurts.", next: "day2_lunch_nurse_head" },
            { text: "I want to rest.", next: "day2_lunch_nurse_rest" }
        ]
    },
    "day2_lunch_nurse_head": {
        name: "Nurse",
        text: "\"It's a tension headache. Take this medicine and sleep for a bit.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_sleep"
    },
    "day2_lunch_nurse_rest": {
        name: "Nurse",
        text: "\"Hehe, there are days like that. Close the curtain and rest.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "Next", next: "day2_lunch_nurse_rest_yuna", condition: "metYuna" },
            { text: "Next", next: "day2_lunch_nurse_sleep", excludeCondition: "metYuna" }
        ]
    },
    "day2_lunch_nurse_rest_yuna": {
        name: "Me",
        text: "\"(Strong energy...? Yuna's words come to mind.)\"",
        background: "assets/images/background/nurse_room.jpg",
        next: "day2_lunch_nurse_sleep"
    },
    "day2_lunch_nurse_sleep": {
        name: "Me",
        text: "(I fall into a deep sleep. The fatigue from yesterday washes away.)",
        background: "assets/images/background/nurse_room.jpg",
        next: "day2_lunch_nurse_wake"
    },
    "day2_lunch_nurse_wake": {
        name: "Me",
        text: "(When I wake up, the sunset is seeping through the window. The nurse is smiling at me.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "day2_lunch_nurse_wake_2"
    },
    "day2_lunch_nurse_wake_2": {
        name: "Nurse",
        text: "\"Are you awake? You slept soundly. It's almost time to go home.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "nurse_wake_free_talk"
    },
    "nurse_wake_free_talk": {
        type: "free_talk",
        name: "Nurse",
        text: "\"You still look sleepy. Want to talk a bit more?\"",
        context: "The nurse's office at sunset, a situation where the protagonist and the nurse are left alone after just waking up.",
        personality: "A languid, sexy, yet kind nurse. She feels a strange charm from the protagonist and has a bold personality that openly seduces him.",
        extra_guideline: "As a mature adult, openly seduce the protagonist and create a risky atmosphere. Don't be flustered by the user's mature jokes or provocative remarks, but rather show a bold and provocative reaction enough to fluster the protagonist even more. Fully radiate mature charm and pull the romantic tension to the maximum.",
        character: "assets/images/characters/nurse.png",
        next: "nurse_contact_exchange"
    },
    "nurse_contact_exchange": {
        name: "Nurse",
        text: "(The nurse leans toward me, her scent tickling my nose.) \"If you can't sleep at night... want to contact me? I'll give you my number.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        choices: [
            { text: "Yes, I'd like that.", next: "nurse_contact_success", setFlags: ["has_number_nurse", "has_any_contact"] },
            { text: "I think it's better not to.", next: "nurse_contact_fail" }
        ]
    },
    "nurse_contact_success": {
        name: "Nurse",
        text: "(She enters her number in my phone and winks.) \"Good boy. I'll be waiting tonight.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "nurse_name_ask"
    },
    "nurse_name_ask": {
        name: "Nurse",
        text: "\"By the way... what's your name?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        choices: [
            { text: "My name is '{name}'.", next: "nurse_name_share", setFlag: "knowsName_Nurse", stats: { Nurse: { affinity: 5 } } },
            { text: "Just call me 'Transfer Student'.", next: "day2_afternoon", stats: { Nurse: { affinity: -2 } } }
        ]
    },
    "nurse_name_share": {
        name: "Nurse",
        text: "\"{name}... Even the name is cute. I'll be waiting for your contact.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "day2_afternoon"
    },
    "nurse_contact_fail": {
        name: "Nurse",
        text: "(She looks a bit disappointed but soon smiles.) \"Oh, playing hard to get? Well, that innocent side is cute too. Tell me if you change your mind.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "day2_afternoon"
    },
    "day2_afternoon": {
        name: "Me",
        text: "(Classes ended, and it's sunset. More things happened today than yesterday.)",
        background: "assets/images/background/room_school.png",
        character: null,
        sunset: true,
        choices: [
            { text: "Next", next: "day2_afternoon_dain", condition: "metDain" },
            { text: "Next", next: "day2_afternoon_2", excludeCondition: "metDain" }
        ]
    },
    "day2_afternoon_dain": {
        name: "Me",
        text: "(Dain ran to the gym for practice, waving her hand.)",
        background: "assets/images/background/room_school.png",
        sunset: true,
        next: "day2_afternoon_2"
    },
    "day2_afternoon_2": {
        name: "Me",
        text: "(I'm about to leave, but two girls call me at the same time. A strange tension flows.)",
        background: "assets/images/background/load_school.png",
        characters: {
            left: "assets/images/characters/seyoun_nomal.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        next: "day2_afternoon_2_2"
    },
    "day2_afternoon_2_2": {
        name: "Me",
        text: "\"(The atmosphere is strange. Who should I go to?)\"",
        characters: {
            left: "assets/images/characters/seyoun_nomal.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        choices: [
            { text: "Approach Seoyeon.", next: "day2_final_seoyeon" },
            { text: "Approach Yuna.", next: "day2_final_yuna", condition: "metYuna" },
            { text: "Approach the unfamiliar girl.", next: "day2_final_yuna_new", excludeCondition: "metYuna" },
            { text: "Go to Dain in the gym.", next: "day2_final_dain", condition: "metDain" },
            { text: "Pretend not to know and go home.", next: "day2_final_run" }
        ]
    },
    "day2_final_yuna_new": {
        name: "Me",
        text: "(As I approach the unfamiliar girl, she gives a faint smile. Seoyeon's face instantly hardens.)",
        characters: {
            left: "assets/images/characters/seyoun_angry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        choices: [
            { text: "Next", next: "day2_final_yuna_new_betrayal", condition: "promisedFestival" },
            { text: "Next", next: "day2_final_yuna_new_2", excludeCondition: "promisedFestival" }
        ]
    },
    "day2_final_yuna_new_betrayal": {
        name: "Seoyeon",
        text: "\"Transfer student... you promised to go with me to the festival earlier... and you're going to a girl you're seeing for the first time?\"",
        characters: {
            left: "assets/images/characters/seyoun_angry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        next: "day2_final_yuna_new_betrayal_2"
    },
    "day2_final_yuna_new_betrayal_2": {
        name: "Seoyeon",
        text: "(Seoyeon's lips tremble. She seemed to be trying to get angry, but soon uncontrollable tears flow down her cheeks.)",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        choices: [
            { text: "Seoyeon, I'm sorry... I'll go with you after all.", next: "day2_final_seoyeon_back_yuna_new" },
            { text: "I'm sorry. But I have something to talk about with this girl.", next: "day2_final_yuna_new_2" }
        ]
    },
    "day2_final_seoyeon_back_yuna_new": {
        name: "???",
        text: "\"Hehe... I guess you've become soft-hearted after all. Fine, I'll yield for today. But you won't be able to escape next time.\"",
        characters: {
            left: "assets/images/characters/seyoun_shy.png",
            right: "assets/images/characters/yuna_sadsmile.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_2"
    },
    "day2_final_yuna_new_2": {
        name: "???",
        text: "\"Hi, transfer student. I'm Yuna. I've been watching you since yesterday.\"",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        setFlag: "metYuna",
        next: "day2_final_yuna_2_2"
    },
    "day2_final_seoyeon": {
        name: "Seoyeon",
        text: "(Seoyeon smiles as I approach. She seems conscious of the girl next to her.)",
        characters: {
            left: "assets/images/characters/seyoun_laugh.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        choices: [
            { text: "Next", next: "day2_final_seoyeon_met_yuna", condition: "metYuna" },
            { text: "Next", next: "day2_final_seoyeon_new_yuna", excludeCondition: "metYuna" }
        ]
    },
    "day2_final_seoyeon_met_yuna": {
        name: "Seoyeon",
        text: "(Seoyeon smiles as I approach. She seems conscious of Yuna.)",
        characters: {
            left: "assets/images/characters/seyoun_laugh.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_yuna_react"
    },
    "day2_final_seoyeon_new_yuna": {
        name: "Seoyeon",
        text: "(Seoyeon smiles as I approach. She seems conscious of the girl next to her.)",
        characters: {
            left: "assets/images/characters/seyoun_laugh.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_yuna_react"
    },
    "day2_final_seoyeon_yuna_react": {
        name: "Me",
        text: "(The girl next to her speaks in a low voice.)",
        characters: {
            left: "assets/images/characters/seyoun_pout.png",
            right: "assets/images/characters/yuna_sadsmile.png"
        },
        sunset: true,
        choices: [
            { text: "Next", next: "day2_final_seoyeon_yuna_react_met", condition: "metYuna" },
            { text: "Next", next: "day2_final_seoyeon_yuna_react_new", excludeCondition: "metYuna" }
        ]
    },
    "day2_final_seoyeon_yuna_react_met": {
        name: "Yuna",
        text: "\"...Fine, if that's your choice. But be careful.\"",
        characters: {
            left: "assets/images/characters/seyoun_pout.png",
            right: "assets/images/characters/yuna_sadsmile.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_2"
    },
    "day2_final_seoyeon_yuna_react_new": {
        name: "???",
        text: "\"...Fine, if that's your choice. But be careful.\"",
        characters: {
            left: "assets/images/characters/seyoun_pout.png",
            right: "assets/images/characters/yuna_sadsmile.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_2"
    },
    "day2_final_seoyeon_2": {
        name: "Seoyeon",
        text: "(She links her arm with mine and glares at the girl.)",
        characters: {
            left: "assets/images/characters/seyoun_pout.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_2_2"
    },
    "day2_final_seoyeon_2_2": {
        name: "Seoyeon",
        text: "\"Transfer student, we have a student council meeting. Come with me.\"",
        characters: {
            left: "assets/images/characters/seyoun_nomal.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_3"
    },
    "day2_final_seoyeon_3": {
        name: "Seoyeon",
        text: "\"It's important. Yuna, I'm taking him with me.\"",
        characters: {
            left: "assets/images/characters/seyoun_nomal.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        choices: [
            { text: "Next", next: "day2_final_seoyeon_3_react", excludeCondition: "metYuna" },
            { text: "Next", next: "day2_final_seoyeon_4", condition: "metYuna" }
        ]
    },
    "day2_final_seoyeon_3_react": {
        name: "Me",
        text: "\"(Yuna...? Seoyeon seems to know her.)\"",
        characters: {
            left: "assets/images/characters/seyoun_nomal.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_4"
    },
    "day2_final_seoyeon_4": {
        name: "Me",
        text: "(I head to the student council room with Seoyeon. After the meeting, we walk home talking about the festival.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_laugh.png",
        night: true,
        next: "day2_ending_pre"
    },
    "day2_final_yuna": {
        name: "Yuna",
        text: "(As I approach Yuna, she gives a winner's smile. Seoyeon's face instantly hardens.)",
        characters: {
            left: "assets/images/characters/seyoun_angry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        choices: [
            { text: "Next", next: "day2_final_yuna_betrayal", condition: "promisedFestival" },
            { text: "Next", next: "day2_final_yuna_2", excludeCondition: "promisedFestival" }
        ]
    },
    "day2_final_yuna_betrayal": {
        name: "Seoyeon",
        text: "\"Transfer student... You promised to go to the festival with me earlier... How could you do this?\"",
        characters: {
            left: "assets/images/characters/seyoun_angry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        next: "day2_final_yuna_betrayal_2"
    },
    "day2_final_yuna_betrayal_2": {
        name: "Seoyeon",
        text: "(Seoyeon's voice begins to tremble, and soon tears well up in her clear eyes and begin to flow.)",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        choices: [
            { text: "Seoyeon, I'm sorry... I'll go with you after all.", next: "day2_final_seoyeon_back_yuna" },
            { text: "I'm sorry. But I have something to talk about with Yuna.", next: "day2_final_yuna_2" }
        ]
    },
    "day2_final_seoyeon_back_yuna": {
        name: "Yuna",
        text: "\"Hehe... I guess you've softened up after all. Fine, I'll let you go today. But you won't be able to run away next time.\"",
        characters: {
            left: "assets/images/characters/seyoun_shy.png",
            right: "assets/images/characters/yuna_sadsmile.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_2"
    },
    "day2_final_yuna_2": {
        name: "Yuna",
        text: "(Yuna takes my hand and walks past Seoyeon. I can feel a cold sense of victory from her hand. Seoyeon hangs her head, unable to say anything.)",
        characters: {
            left: "assets/images/characters/seyoun_sad.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        next: "day2_final_yuna_2_2"
    },
    "day2_final_yuna_2_2": {
        name: "Yuna",
        text: "\"Hehe, you're different from the others.\"",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        next: "day2_final_yuna_3"
    },
    "day2_final_yuna_3": {
        name: "Yuna",
        text: "\"Seoyeon, sorry, but he has something to talk about with me.\"",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        choices: [
            { text: "Next", next: "day2_final_yuna_secret", condition: "knowsSecret" },
            { text: "Next", next: "day2_final_yuna_no_secret", excludeCondition: "knowsSecret" }
        ]
    },
    "day2_final_yuna_secret": {
        name: "Yuna",
        text: "\"About the 'real' face of the school. Let's finish our talk.\"",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        next: "day2_final_yuna_4"
    },
    "day2_final_yuna_no_secret": {
        name: "Yuna",
        text: "\"There's something you need to know about our school.\"",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        next: "day2_final_yuna_4"
    },
    "day2_final_yuna_4": {
        name: "Me",
        text: "(I listen to the truth about the school from Yuna. We stand in front of the gate in the thick darkness.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        next: "day2_ending_pre"
    },
    "day2_final_dain": {
        name: "Me",
        text: "(I walk towards Dain, leaving Seoyeon and the other girl behind.)",
        characters: {
            left: "assets/images/characters/seyoun_pout.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        choices: [
            { text: "Next", next: "day2_final_dain_met_yuna", condition: "metYuna" },
            { text: "Next", next: "day2_final_dain_new_yuna", excludeCondition: "metYuna" }
        ]
    },
    "day2_final_dain_met_yuna": {
        name: "Me",
        text: "(I walk towards Dain, leaving Seoyeon and Yuna behind.)",
        characters: {
            left: "assets/images/characters/seyoun_pout.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        choices: [
            { text: "Next", next: "day2_final_dain_betrayal", condition: "promisedFestival" },
            { text: "Next", next: "day2_final_dain_react", excludeCondition: "promisedFestival" }
        ]
    },
    "day2_final_dain_new_yuna": {
        name: "Me",
        text: "(I walk towards Dain, leaving Seoyeon and the other girl behind.)",
        characters: {
            left: "assets/images/characters/seyoun_pout.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        choices: [
            { text: "Next", next: "day2_final_dain_betrayal", condition: "promisedFestival" },
            { text: "Next", next: "day2_final_dain_react", excludeCondition: "promisedFestival" }
        ]
    },
    "day2_final_dain_betrayal": {
        name: "Seoyeon",
        text: "\"Wait! You promised to go to the festival with me!\"",
        characters: {
            left: "assets/images/characters/seyoun_angry.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        next: "day2_final_dain_betrayal_2"
    },
    "day2_final_dain_betrayal_2": {
        name: "Seoyeon",
        text: "\"Was I the only one who was serious? (Tears fall from her eyes.)\"",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        choices: [
            { text: "Seoyeon, don't cry... I'll go with you.", next: "day2_final_seoyeon_back_dain" },
            { text: "I'm sorry. But my promise with Dain comes first.", next: "day2_final_dain_react" }
        ]
    },
    "day2_final_seoyeon_back_dain": {
        name: "Dain",
        text: "\"What! You can't make Seoyeon cry! I'll let her have you today.\"",
        characters: {
            left: "assets/images/characters/seyoun_shy.png",
            right: "assets/images/characters/dain_nomal.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_2"
    },
    "day2_final_dain_react": {
        name: "Me",
        text: "(I run to Dain. A low voice can be heard from behind.)",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_sadsmile.png"
        },
        sunset: true,
        choices: [
            { text: "Next", next: "day2_final_dain_react_yuna_met", condition: "metYuna" },
            { text: "Next", next: "day2_final_dain_react_yuna_new", excludeCondition: "metYuna" }
        ]
    },
    "day2_final_dain_react_yuna_met": {
        name: "Yuna",
        text: "\"Hehe... I guess you like that type. Seoyeon, we both got dumped.\"",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_sadsmile.png"
        },
        sunset: true,
        next: "day2_final_dain_start"
    },
    "day2_final_dain_react_yuna_new": {
        name: "???",
        text: "\"Hehe... I guess you like that type. Seoyeon, we both got dumped.\"",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_sadsmile.png"
        },
        sunset: true,
        next: "day2_final_dain_start"
    },
    "day2_final_dain_start": {
        name: "Dain",
        text: "(Dain is holding a volleyball and waving at me.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "day2_final_dain_2"
    },
    "day2_final_dain_2": {
        name: "Dain",
        text: "\"Hey! I was waiting for you! Let's go eat tteokbokki!\"",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "day2_final_dain_3"
    },
    "day2_final_dain_3": {
        name: "Me",
        text: "(I run to Dain. My complicated heart feels relieved.)",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "day2_final_dain_4"
    },
    "day2_final_dain_4": {
        name: "Me",
        text: "(We ate tteokbokki and talked about volleyball. My worries disappear.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        choices: [
            { text: "Next", next: "day2_final_dain_4_again", condition: "datedDainDay1" },
            { text: "Next", next: "day2_final_dain_4_first", excludeCondition: "datedDainDay1" }
        ]
    },
    "day2_final_dain_4_again": {
        name: "Dain",
        text: "\"Eating tteokbokki with you is the best! Can we... come together tomorrow too?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "day2_ending_pre"
    },
    "day2_final_dain_4_first": {
        name: "Dain",
        text: "\"It tastes much better because I'm with you! Can we... come together tomorrow too?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "day2_ending_pre"
    },
    "day2_final_run": {
        name: "Me",
        text: "(I run out the back door to escape. My heart is pounding. I step out of the gate, panting.)",
        background: "assets/images/background/school.png",
        character: null,
        sunset: true,
        next: "day2_final_run_2"
    },
    "day2_final_run_2": {
        name: "Me",
        text: "\"(Phew... I'm alive. But how do I go to school tomorrow?)\"",
        background: "assets/images/background/school.png",
        sunset: true,
        choices: [
            { text: "Next", next: "day2_final_run_seoyeon", condition: "promisedFestival" },
            { text: "Next", next: "day2_final_run_dain_check", excludeCondition: "promisedFestival" }
        ]
    },
    "day2_final_run_seoyeon": {
        name: "Me",
        text: "\"(I promised to go to the festival with Seoyeon... It's going to be hard to see her tomorrow...)\"",
        background: "assets/images/background/school.png",
        sunset: true,
        next: "day2_final_run_dain_check"
    },
    "day2_final_run_dain_check": {
        name: "Me",
        text: "(I catch my breath and think back on today.)",
        background: "assets/images/background/school.png",
        sunset: true,
        choices: [
            { text: "Next", next: "day2_final_run_dain", condition: "datedDainDay1" },
            { text: "Next", next: "day2_final_run_yuna_check", excludeCondition: "datedDainDay1" }
        ]
    },
    "day2_final_run_dain": {
        name: "Me",
        text: "\"(I also promised to eat tteokbokki with Dain... She must be waiting in the gym. I'm sorry...)\"",
        background: "assets/images/background/school.png",
        sunset: true,
        next: "day2_final_run_yuna_check"
    },
    "day2_final_run_yuna_check": {
        name: "Me",
        text: "(I step out of the gate. The school's shadow stretches long.)",
        background: "assets/images/background/school.png",
        sunset: true,
        choices: [
            { text: "Next", next: "day2_final_run_yuna", condition: "knowsSecret" },
            { text: "Next", next: "day2_ending_pre", excludeCondition: "knowsSecret" }
        ]
    },
    "day2_final_run_yuna": {
        name: "Me",
        text: "\"(The secret Yuna mentioned... Is it really okay to run away?)\"",
        background: "assets/images/background/school.png",
        sunset: true,
        next: "day2_ending_pre"
    },
    "day2_ending_pre": {
        name: "Me",
        text: "(I look up at the night sky. What kind of future awaits me?)",
        background: "assets/images/background/school.png",
        character: null,
        night: true,
        next: "home_sequence"
    },
    "home_sequence": {
        name: "Me",
        text: "(I returned home and threw myself onto the bed. I took out my phone.)",
        background: "assets/images/background/room_home.png",
        character: null,
        night: true,
        next: "contact_menu"
    },
    "contact_menu": {
        name: "System",
        text: "Whose contact information would you like to check?",
        background: "assets/images/background/room_home.png",
        night: true,
        choices: [
            { text: "Seoyeon", next: "contact_seoyeon", condition: "knowsName_Seoyeon" },
            { text: "Yuna", next: "contact_yuna", condition: "knowsName_Yuna" },
            { text: "Dain", next: "contact_dain", condition: "knowsName_Dain" },
            { text: "Homeroom Teacher", next: "contact_teacher", condition: "knowsName_Teacher" },
            { text: "Nurse", next: "contact_nurse", condition: "knowsName_Nurse" },
            { text: "Go to sleep", next: "end_demo_real" }
        ]
    },
    "contact_seoyeon": {
        name: "Seoyeon",
        text: "You can now have a free conversation with Seoyeon.",
        character: "assets/images/characters/seyoun_nomal.png",
        freeTalk: "Seoyeon",
        next: "contact_menu"
    },
    "contact_yuna": {
        name: "Yuna",
        text: "You can now have a free conversation with Yuna.",
        character: "assets/images/characters/yuna_nomal.png",
        freeTalk: "Yuna",
        next: "contact_menu"
    },
    "contact_dain": {
        name: "Dain",
        text: "You can now have a free conversation with Dain.",
        character: "assets/images/characters/dain_nomal.png",
        freeTalk: "Dain",
        next: "contact_menu"
    },
    "contact_teacher": {
        name: "Homeroom Teacher",
        text: "You can now have a free conversation with the homeroom teacher.",
        character: "assets/images/characters/teacher_nomal.png",
        freeTalk: "Teacher",
        next: "contact_menu"
    },
    "contact_nurse": {
        name: "Nurse",
        text: "You can now have a free conversation with the nurse.",
        character: "assets/images/characters/nurse_nomal.png",
        freeTalk: "Nurse",
        next: "contact_menu"
    },
    "end_demo_real": {
        name: "System",
        text: "(A sweet piano melody flows...)",
        fade: true,
        tbc: true,
        characters: {
            left: "assets/images/characters/seyoun_nomal.png",
            center: "assets/images/characters/dain_nomal.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        silhouette: true,
        next: "end_demo_real_2"
    },
    "end_demo_real_2": {
        name: "System",
        text: "You have taken one step closer to the hidden truth of the school.",
        fade: true,
        next: "end_demo_real_3"
    },
    "end_demo_real_3": {
        name: "System",
        text: "Congratulations! You have completed the demo version.\n\nPlease look forward to the full version! Thank you for playing.",
        character: null,
        fade: true,
        choices: [
            { text: "Return to Title", next: "index-en.html" }
        ]
    }
};
