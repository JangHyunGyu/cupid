const SCENARIO = {
    "start": {
        name: "Me",
        text: "(In front of the school gate where the warm spring sunlight shines down. The excitement and tension of the first day of transfer swirl in my heart.)",
        background: "assets/images/background/school.png",
        character: null,
        next: "start_2"
    },
    "start_2": {
        name: "Me",
        text: "(The scratchy feel of the unfamiliar school uniform, the strangeness of the unfamiliar scenery... everything feels so new.)",
        next: "start_3"
    },
    "start_3": {
        name: "Me",
        text: "(My heartbeat sounds so loud it rings in my ears. I take a deep breath and take a step toward the school gate.)",
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
        text: "(She smiles brightly and takes a step closer. A faint scent of lavender tickles the tip of my nose from her long hair swaying slightly in the wind.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "intro_2"
    },
    "intro_2": {
        name: "Me",
        text: "(As her clear eyes stare straight at me, my heart rate speeds up uncontrollably. It feels as if time has stopped.)",
        next: "intro_3"
    },
    "intro_3": {
        name: "Seoyeon",
        text: "\"I'm the student council president, Seoyeon. I came to meet you at the teacher's request. Nice to meet you!\"",
        choices: [
            { text: "Yeah, nice to meet you. The school is so big that I was getting a bit lost.", next: "path_friendly_1" },
            { text: "The student council president herself came to meet me? Am I getting some special treatment?", next: "path_tease_1" },
            { text: "You... are really pretty. (The truth slipped out without me realizing!)", next: "path_blush_1" },
            { text: "(I'm too nervous to speak. I just stare at her blankly...)", next: "path_silent_1" }
        ]
    },
    "path_friendly_1": {
        name: "Seoyeon",
        text: "(At my answer, she smiles as brightly as a flower blooming, looking relieved. The tension that had frozen me seems to melt away at that smile. Her smile is as warm as the spring sunlight. She lightly pulls on my bag strap and leads the way.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "path_friendly_1_2"
    },
    "path_friendly_1_2": {
        name: "Seoyeon",
        text: "\"Hehe, I thought so. Our school can be a bit complicated when you first come, right? I'll guide you perfectly to the faculty office. Just trust me and follow!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1"
    },
    "path_tease_1": {
        name: "Seoyeon",
        text: "(She narrows her eyes slightly and answers playfully. But a pleasant smile still hangs on her lips. A playful light twinkles in her eyes. She puts her index finger to her lips and winks.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "path_tease_1_2"
    },
    "path_tease_1_2": {
        name: "Seoyeon",
        text: "\"Oh my, what a confident transfer student! Rather than special treatment... shall we call it a sense of responsibility as the student council president? But if you think so, I'll pay special attention to you today!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1"
    },
    "path_blush_1": {
        name: "Seoyeon",
        text: "(Seoyeon's face instantly turns as red as a ripe apple. Seeing her avoid my gaze and fiddle with her hair in embarrassment is very fresh and cute. I can see her fingertips trembling slightly. She clears her throat and quickly turns around.)",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "path_blush_1_2"
    },
    "path_blush_1_2": {
        name: "Seoyeon",
        text: "\"Eh...? Wh-what are you saying all of a sudden! Are all transfer students as... sly as you? Just follow me! You'll get in trouble with the teacher if you're late!\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "hallway_1"
    },
    "path_silent_1": {
        name: "Seoyeon",
        text: "(She waves her hand in front of my eyes. As her worried gaze turns toward me, a protective instinct is triggered for some reason. My reflection in her clear eyes looks very foolish. She places her hand on my forehead to check for a fever.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "path_silent_1_2"
    },
    "path_silent_1_2": {
        name: "Seoyeon",
        text: "\"Um... are you okay? You're not sick, are you? Your face looks a bit red... It's better to go to the faculty office first rather than the nurse's office. Should I support you?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1"
    },
    "hallway_1": {
        name: "Seoyeon",
        text: "(I walk down the hallway following Seoyeon. Beyond the hallway windows, the lively voices of students and the sound of whistles from the playground blend together.)",
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
        text: "(Looking at her back, the excitement doesn't seem to fade. Her gait is light and elegant. The hallway is filled with a faint smell of wax and the heat of the children.)",
        character: "assets/images/characters/seyoun_back.png",
        next: "hallway_1_3"
    },
    "hallway_1_3": {
        name: "Seoyeon",
        text: "\"I'll give you a brief explanation of the school facilities as we pass through the hallway. That place you see over there is our school's pride, the library. And over there is...\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "The school is really lively. Seoyeon, do you also do club activities?", next: "hallway_talk_club" },
            { text: "The facilities are good, but it looks even better because of the person guiding me.", next: "hallway_talk_flatter" },
            { text: "(I walk while listening quietly to her explanation.)", next: "hallway_talk_listen" }
        ]
    },
    "hallway_talk_club": {
        name: "Seoyeon",
        text: "(She turns her head toward me as if she's glad. Her eyes sparkle, showing her passion. She speaks proudly, placing her hand on her chest.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_talk_club_2"
    },
    "hallway_talk_club_2": {
        name: "Seoyeon",
        text: "\"Yes! I'm active in the student council, but I'm actually also part of the gardening club. I like taking care of flowers. Touching the soil makes me feel at peace. Come visit our greenhouse later if you have time!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2"
    },
    "hallway_talk_flatter": {
        name: "Seoyeon",
        text: "(She clears her throat shyly and answers. But she doesn't seem to be in a bad mood. A faint blush brushes her cheeks. She grips her bag strap tightly as if embarrassed.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_talk_flatter_2"
    },
    "hallway_talk_flatter_2": {
        name: "Seoyeon",
        text: "\"Really... you speak so beautifully. Actually, I'm always tense because of my position as the student council president, but I feel at ease when I'm with you. I might even want to act like a spoiled child without realizing it... Hehe, just kidding.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_2"
    },
    "hallway_talk_listen": {
        name: "Seoyeon",
        text: "(She seems to like my serious attitude and continues her explanation even more passionately. Her voice is clear and beautiful, making me feel good just by listening. She speaks excitedly, pointing here and there with her finger.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_talk_listen_2"
    },
    "hallway_talk_listen_2": {
        name: "Seoyeon",
        text: "\"Thank you so much for listening to my explanation so well. You seem like a very sincere person! With this attitude, you'll adapt to school life in no time.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2"
    },
    "hallway_2": {
        name: "Seoyeon",
        text: "(She suddenly stops and turns to look at me. I swallowed hard at her serious yet expectant gaze.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2_2"
    },
    "hallway_2_2": {
        name: "Seoyeon",
        text: "(The noise of the hallway fades away, and a silence flows as if only the two of us are left. Her eyes stare intently into mine.)",
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
        text: "(Seoyeon's face turns red once again. While avoiding my gaze in embarrassment, a small smile spreads across her lips. Her fingers fiddle with the hem of her school uniform skirt. She taps the floor with her toes shyly.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "path_flirt_2_2"
    },
    "path_flirt_2_2": {
        name: "Seoyeon",
        text: "\"E-every day... there's so much work! But if you join... I might be a little happy too. I'll be looking forward to it, okay?\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "classroom_1_1"
    },
    "path_club_flower": {
        name: "Seoyeon",
        text: "(She playfully hits my shoulder. It feels like the distance between us has gotten closer. I can feel a pleasant warmth from her touch. She looks up at me with a playful expression.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "path_club_flower_2"
    },
    "path_club_flower_2": {
        name: "Seoyeon",
        text: "\"Hmph... are you really a player? I was worried because the gardening club has few members, but it'll get noisy if someone like you joins. You have to come, okay? It's a promise!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_1_1"
    },
    "path_normal_2": {
        name: "Seoyeon",
        text: "(She nods and starts leading the way again. I feel a bit disappointed.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_back.png",
        next: "classroom_1_1"
    },
    "path_direct_2": {
        name: "Seoyeon",
        text: "(She stares at me blankly, then bursts into a clear laugh. That laughter rings through the hallway like the sound of silver bells. A small tear in the corner of her eye sparkles in the sunlight. She laughs for a long time, holding her stomach.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "path_direct_2_2"
    },
    "path_direct_2_2": {
        name: "Seoyeon",
        text: "\"Hehe, you're really honest, aren't you? About me... well, I might tell you or I might not, depending on how you do in the future. I'll be looking forward to it!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "classroom_1_1"
    },
    "classroom_1_1": {
        name: "Seoyeon",
        text: "(We arrived in front of the classroom door. I can hear the murmuring and laughter of the children inside. Seoyeon lightly taps my shoulder to cheer me on.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_1_2"
    },
    "classroom_1_2": {
        name: "Seoyeon",
        text: "(The place where her touch reached feels hot. She looks into my eyes and gives a small 'fighting' cheer.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_1_3"
    },
    "classroom_1_3": {
        name: "Seoyeon",
        text: "\"Now, this is Class 2-3 where you'll be staying. Don't be nervous. I'm right here, so just do as you usually do. Got it?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_2"
    },
    "classroom_2": {
        name: "Teacher",
        text: "(As I stand in front of the podium, dozens of gazes are fixed on me all at once. Curious eyes, wary eyes... Seoyeon is standing beside me, watching over me with a reassuring smile.)",
        background: "assets/images/background/room_school.png",
        characters: {
            left: "assets/images/characters/teacher.png",
            right: "assets/images/characters/seyoun_laugh.png"
        },
        next: "classroom_2_2"
    },
    "classroom_2_2": {
        name: "Teacher",
        text: "(The air in the classroom feels heavy. The teacher taps the podium to focus attention.)",
        character: "assets/images/characters/teacher.png",
        next: "teacher_free_talk"
    },
    "teacher_free_talk": {
        type: "free_talk",
        name: "Teacher",
        text: "\"Now, before you introduce yourself... do you have any questions for me? Actually, I'm just as nervous as you are. Hehe, I guess a teacher shouldn't be like this, right?\"",
        context: "The situation of having a conversation with the homeroom teacher just before giving the first greeting as a transfer student in front of the podium.",
        personality: "A professional teacher who tries to maintain boundaries, but has a 'clumsy' side and secretly relies on the protagonist for emotional support. She is weak to the protagonist's unexpected maturity.",
        character: "assets/images/characters/teacher.png",
        next: "classroom_2_3"
    },
    "classroom_2_3": {
        name: "Teacher",
        text: "\"Now, everyone pay attention! This is the transfer student who will be joining us from today. Everyone, get along well. Now, shall we have a word of self-introduction?\"",
        character: "assets/images/characters/teacher.png",
        choices: [
            { text: "My name is '{name}'. Nice to meet you!", next: "teacher_name_share", setFlag: "knowsName_Teacher" },
            { text: "Hi! I like exercising and have an active personality!", next: "class_after_active", setFlag: "personality_active" },
            { text: "Nice to meet you. I tend to like reading books quietly.", next: "class_after_quiet", setFlag: "personality_quiet" },
            { text: "I came here to study. I hate being disturbed.", next: "class_after_study", setFlag: "personality_study" }
        ]
    },
    "teacher_name_share": {
        name: "Teacher",
        text: "\"Oh, so your name is {name}. It's a very reliable name. Now, {name}, what kind of style would you like to introduce yourself to your friends?\"",
        character: "assets/images/characters/teacher.png",
        choices: [
            { text: "Introduce actively.", next: "class_after_active", setFlag: "personality_active" },
            { text: "Introduce calmly.", next: "class_after_quiet", setFlag: "personality_quiet" },
            { text: "Introduce socially.", next: "class_after_party", setFlag: "personality_party" }
        ]
    },
    "class_after_active": {
        name: "Kids",
        text: "(Cheers burst out from all over the classroom. Especially the boys sitting in the back seats have their eyes sparkling. Seoyeon also gives a satisfied smile and applauds.)",
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
        text: "\"Oh~ you look like you can exercise? How about a game of volleyball during lunch? Let's see the transfer student's skills!\"",
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
        text: "(The classroom instantly becomes as noisy as a marketplace. Kids are already flocking around me.)",
        character: null,
        next: "class_after_party_2"
    },
    "class_after_party_2": {
        name: "Kids",
        text: "(Seoyeon seems a bit flustered but soon bursts into laughter. The kids are already busy deciding on the menu.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "class_after_party_3"
    },
    "class_after_party_3": {
        name: "Kids",
        text: "\"Wow! The transfer student's personality is really awesome! Okay, today's tteokbokki is on me! Let's go for a full course including karaoke!\"",
        character: null,
        next: "lunch_time"
    },
    "class_after_study": {
        name: "Kids",
        text: "(A cold silence flows through the classroom. The kids seem a bit flustered and whisper while looking at each other.)",
        character: null,
        next: "class_after_study_2"
    },
    "class_after_study_2": {
        name: "Kids",
        text: "(Seoyeon's expression also hardens a bit. For some reason, it feels like a wall has been built. The kids become quiet while watching my reaction.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "class_after_study_3"
    },
    "class_after_study_3": {
        name: "Kids",
        text: "\"Wow... no joke. Is he a total bookworm? It looks like it'll be big trouble if we touch him...\"",
        character: null,
        next: "lunch_time"
    },
    "lunch_time": {
        name: "Me",
        text: "(The morning classes passed by in a blur, and finally, the long-awaited lunch bell rang. The kids rush toward the cafeteria.)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "lunch_time_2"
    },
    "lunch_time_2": {
        name: "Me",
        text: "(What should I do? Through the window, I can already see kids passing a volleyball back and forth on the playground. My stomach clock is ringing loudly.)",
        choices: [
            { text: "Approach Seoyeon and suggest having lunch together.", next: "lunch_seoyeon", setFlag: "metSeoyeon" },
            { text: "Look around the school alone and find a quiet place to eat.", next: "lunch_alone", setFlag: "metYuna" },
            { text: "Go out to the playground and hang out with the lively kids.", next: "lunch_dain", setFlag: "metDain" },
            { text: "Run to the snack bar and buy the legendary 'Chocolate Conch Bread'.", next: "lunch_store" },
            { text: "Stay in the classroom and catch up on some sleep. (I was too restless yesterday...)", next: "lunch_sleep" }
        ]
    },
    "lunch_seoyeon": {
        name: "Seoyeon",
        text: "(As I approach Seoyeon, she takes out a pretty checkered lunch box from her bag as if she had been waiting. Her eyes sparkle as she welcomes me.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "lunch_seoyeon_2"
    },
    "lunch_seoyeon_2": {
        name: "Seoyeon",
        text: "\"I was just about to look for you. We have a secret place on the rooftop, want to eat there together?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_1"
    },
    "rooftop_1": {
        name: "Seoyeon",
        text: "(The school rooftop where a cool breeze blows pleasantly. Seoyeon unfolds a three-tier lunch box she carefully packed. The colorful side dishes look really delicious.)",
        background: "assets/images/background/top_school.png",
        next: "rooftop_1_2"
    },
    "rooftop_1_2": {
        name: "Seoyeon",
        text: "(A savory smell tickles the tip of my nose. She hands me chopsticks and smiles shyly.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_1_2_2"
    },
    "rooftop_1_2_2": {
        name: "Seoyeon",
        text: "\"Here, I made this by waking up early this morning. I don't know if it'll suit your taste...\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_1_3"
    },
    "rooftop_1_3": {
        name: "Seoyeon",
        text: "\"Especially this octopus-shaped sausage is my masterpiece! Want to try one?\"",
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
        text: "(She blushes happily and answers. Her eyes are full of happiness. She feels proud seeing me eat the food she made with gusto.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_talk_food_2"
    },
    "rooftop_talk_food_2": {
        name: "Seoyeon",
        text: "\"Really? I'm glad! Actually, I was worried if you'd like it, so I even lost sleep thinking about the menu yesterday. Eat a lot, there's still plenty left!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_2"
    },
    "rooftop_talk_ah": {
        name: "Seoyeon",
        text: "(Seoyeon's face turns red as if it's about to explode. Her hand holding the chopsticks trembles. Her breathing becomes a bit rough. She looks around and carefully picks up a sausage and brings it to my mouth.)",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "rooftop_talk_ah_2"
    },
    "rooftop_talk_ah_2": {
        name: "Seoyeon",
        text: "\"Wh-wh-what?! You really... say such things so casually... Haa, I really can't with you. Fine, just this once! Say... Ah...\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "rooftop_2"
    },
    "rooftop_talk_thanks": {
        name: "Seoyeon",
        text: "(She gives a soft smile and stares intently into my eyes. I can feel her sincere affection in her gaze. She lightly wipes the sauce from the corner of my mouth with her finger.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_talk_thanks_2"
    },
    "rooftop_talk_thanks_2": {
        name: "Seoyeon",
        text: "\"Thank you for what... I'm the one who's thankful for you eating with me. It seems much more delicious than eating alone. Will you eat with me like this often in the future?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_2"
    },
    "rooftop_2": {
        name: "Seoyeon",
        text: "(After finishing the meal, we sit side by side and look at the distant sky. A peaceful afternoon moment... Seoyeon carefully opens her mouth. Her voice is a bit lower and more serious than usual. She lightly leans her head on my shoulder.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_2_2"
    },
    "rooftop_2_2": {
        name: "Seoyeon",
        text: "\"Um, transfer student... Actually, from the first time I saw you, for some reason... I felt like we were people who had known each other for a long time. How about you?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Me too. It feels like destiny, in a way?", next: "rooftop_destiny" },
            { text: "Maybe it's because Seoyeon treated me so kindly?", next: "rooftop_kind" },
            { text: "Well, I'm not sure yet. But I feel comfortable with you.", next: "rooftop_comfortable" }
        ]
    },
    "rooftop_destiny": {
        name: "Seoyeon",
        text: "(She smiles shyly and gently overlaps her hand on top of mine. A warm heat is transmitted. Her hand is small and soft. She fiddles with my fingers and asks for a promise.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_destiny_2"
    },
    "rooftop_destiny_2": {
        name: "Seoyeon",
        text: "\"Destiny... Hehe, that word sounds really good. Let's make many more happy memories in the future. Is it a promise?\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "after_school_start"
    },
    "rooftop_kind": {
        name: "Seoyeon",
        text: "(She pouts her lips as if slightly sulky. Even that look is lovely. Her eyes shake slightly. She lightly pinches my arm and complains.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "rooftop_kind_2"
    },
    "rooftop_kind_2": {
        name: "Seoyeon",
        text: "\"Hmph... that's such a textbook answer. But well, it's not wrong, so I'll let it slide. I'll look forward to a more honest answer next time, okay?\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "after_school_start"
    },
    "rooftop_comfortable": {
        name: "Seoyeon",
        text: "(She nods as if satisfied. Her expression looks much more comfortable. She lets out a deep sigh and relaxes.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_comfortable_2"
    },
    "rooftop_comfortable_2": {
        name: "Seoyeon",
        text: "\"I'm glad you feel comfortable. I feel like I can put down the burden of being the student council president for a moment when I'm with you. Thank you, transfer student.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_school_start"
    },
    "lunch_alone": {
        name: "Me",
        text: "(Walking down the quiet hallway alone, I arrived at the library annex located in a secluded spot I hadn't seen this morning. The smell of old paper flows through the old wooden door. There, I encountered a girl with a mysterious atmosphere reading a book while leaning against the window. Dust is dancing and sparkling in the sunlight around her.)",
        background: "assets/images/background/library_old.png",
        next: "alone_2"
    },
    "alone_2": {
        name: "???",
        text: "(She speaks in a low voice without taking her eyes off the book. It's a voice that seems cold yet somehow carries a hidden sadness. The air around her seems to have settled coldly. She slowly turns the pages of the book, conscious of me.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "alone_2_2"
    },
    "alone_2_2": {
        name: "???",
        text: "\"...Are you lost? Students don't usually come here. You managed to find it, transfer student.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_intro"
    },
    "yuna_intro": {
        name: "???",
        text: "(She slowly raises her head and looks at me. Deep and mysterious purple eyes quietly observe me. It seems like there's a story in her eyes that others don't know. She closes the book and approaches me.)",
        next: "yuna_intro_2"
    },
    "yuna_intro_2": {
        name: "???",
        text: "\"I'm Yuna. I'm just... someone who likes staying quiet. This school... is very different from how it looks. From you... I feel a somehow familiar atmosphere.\"",
        choices: [
            { text: "My name is '{name}'.", next: "yuna_name_share", setFlag: "knowsName_Yuna" },
            { text: "The school is different? What does that mean?", next: "yuna_secret" },
            { text: "Familiar... have you seen me before?", next: "yuna_scent" },
            { text: "You look somehow dangerous. But I can't take my eyes off you.", next: "yuna_danger" }
        ]
    },
    "yuna_name_share": {
        name: "Yuna",
        text: "\"{name}... It's a name that somehow suits you. I'll remember it. I'm Yuna. I'm just... someone who likes staying quiet.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_intro_3"
    },
    "yuna_intro_3": {
        name: "Yuna",
        text: "\"This school... is very different from how it looks. From you... I feel a somehow familiar atmosphere.\"",
        character: "assets/images/characters/yuna_nomal.png",
        choices: [
            { text: "The school is different? What does that mean?", next: "yuna_secret" },
            { text: "Familiar... have you seen me before?", next: "yuna_scent" },
            { text: "You look somehow dangerous. But I can't take my eyes off you.", next: "yuna_danger" }
        ]
    },
    "yuna_secret": {
        name: "Yuna",
        text: "(She closes the book with a mysterious smile on her lips. The sound of the book closing breaks the silence. She puts her lips close to my ear and whispers.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_secret_2"
    },
    "yuna_secret_2": {
        name: "Yuna",
        text: "\"Hehe, are you curious? But secrets might be better left unknown. The stories the school wants to hide... you might get hurt if you know them.\"",
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
        text: "(She lightly brushes my cheek with her cold finger. The place where her fingertip touched is chilly. She stares intently into my eyes and gives a mysterious smile.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_danger_2"
    },
    "yuna_danger_2": {
        name: "Yuna",
        text: "\"Looking dangerous... Hehe, you're right. But I don't dislike people like you who approach even while knowing it's dangerous. Until you lose that special light... I'll stay by your side.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "lunch_store": {
        name: "Me",
        text: "(I sprinted to the snack bar and secured the last remaining 'Chocolate Conch Bread'! With the feeling of a victor, I take a bite of the bread, and the sweetness of the rich chocolate stimulates my brain. I can hear the hearty laughter of the snack bar lady. I returned to the classroom, holding the bread precious in my arms.)",
        next: "lunch_store_2"
    },
    "lunch_store_2": {
        name: "Me",
        text: "\"Kuu~ as expected, this is the taste! I feel like the fatigue of the first day of transfer is completely gone! To think that bread eaten alone could be this delicious!\"",
        next: "after_school_start"
    },
    "lunch_sleep": {
        name: "Me",
        text: "(I lie face down on the desk and try to sleep. The laughter of the kids heard from afar sounds like a lullaby. My consciousness gradually blurs and I fall into deep darkness. The sunlight coming through the window warms my back. I saw a vision of happily talking with someone in my dream.)",
        background: "assets/images/background/room_school.png",
        next: "lunch_sleep_2"
    },
    "lunch_sleep_2": {
        name: "Me",
        text: "(In my dream, I heard someone calling my name. A very nostalgic and sad voice... But when I opened my eyes, there was no one by my side.)",
        next: "after_school_start"
    },
    "lunch_dain": {
        name: "Me",
        text: "(Going out to the playground, it's full of lively energy. Among them, there's one girl who particularly stands out. With short hair and full of healthy beauty, she is coolly spiking the ball among the kids.)",
        background: "assets/images/background/playground.png",
        next: "lunch_dain_2"
    },
    "lunch_dain_2": {
        name: "???",
        text: "(She discovers me and waves her hand with a bright smile. Her smile is as dazzling as the sun.)",
        background: "assets/images/background/playground.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "lunch_dain_3"
    },
    "lunch_dain_3": {
        name: "???",
        text: "\"Hey, transfer student! Don't just watch from there, come here and let's have a match! You look like you can exercise a bit?\"",
        background: "assets/images/background/playground.png",
        character: "assets/images/characters/dain_nomal.png",
        choices: [
            { text: "My name is '{name}'.", next: "dain_name_share", setFlag: "knowsName_Dain" },
            { text: "I'm not that good at exercise...", next: "lunch_dain_4" },
            { text: "Okay, let's see who's better!", next: "lunch_dain_4" }
        ]
    },
    "dain_name_share": {
        name: "Dain",
        text: "\"{name}? Cool name! It sounds like a name that's good at sports! I'm Dain from the volleyball club. There's no one in our school with a better jump than me, so be prepared!\"",
        background: "assets/images/background/playground.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "lunch_dain_move_gym"
    },
    "lunch_dain_4": {
        name: "Dain",
        text: "\"I'm Dain from the volleyball club. There's no one in our school with a better jump than me, so be prepared!\"",
        background: "assets/images/background/playground.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "lunch_dain_move_gym"
    },
    "lunch_dain_move_gym": {
        name: "Dain",
        text: "\"But it's too hot to play here. Let's go to the gym! There's a proper net there, and I can show you my real skills better!\"",
        background: "assets/images/background/playground.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "lunch_dain_gym"
    },
    "lunch_dain_gym": {
        name: "Me",
        text: "(The gym I arrived at following Dain. The high ceiling, smooth wooden floor, and the cheerful sound of volleyballs bouncing echo around.)",
        background: "assets/images/background/gym.png",
        next: "lunch_dain_gym_2"
    },
    "lunch_dain_gym_2": {
        name: "Dain",
        text: "\"Now, this is my territory! Transfer student, are you ready? I won't go easy on you, so be prepared!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        setFlag: "metDain",
        next: "after_school_start"
    },
    "after_school_start": {
        name: "Me",
        text: "(Before I knew it, all classes ended and the bell announcing after school rang out. The sunset light is coloring the inside of the classroom red.)",
        background: "assets/images/background/room_school.png",
        character: null,
        sunset: true,
        next: "after_school_start_2"
    },
    "after_school_start_2": {
        name: "Me",
        text: "(I'm about to pack my bag and leave the classroom... The hallway is full of the footsteps of kids going home.)",
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
            { text: "Look around the quiet parts of the school more.", next: "after_yuna_new", excludeCondition: "metYuna" },
            { text: "Go see Dain practicing on the playground.", next: "after_dain", condition: "metDain" },
            { text: "Head to the playground where lively sounds are coming from.", next: "after_dain_new", excludeCondition: "metDain" },
            { text: "I'm tired today, so I'll go straight home.", next: "after_home" }
        ]
    },
    "after_dain_new": {
        name: "Me",
        text: "(Heading to the gym, I see kids practicing volleyball while sweating under the window where the sunset light seeps in. Among them, there's one girl who particularly stands out.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_new_intro"
    },
    "after_dain_new_intro": {
        name: "???",
        text: "\"Hi! I'm Dain from the volleyball club. You're that kid who transferred today, right?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        setFlag: "metDain",
        next: "after_dain_2"
    },
    "after_dain": {
        name: "Dain",
        text: "(Arriving at the gym, Dain is jumping high and slamming down a powerful spike. Her healthy energy seems to brighten the surroundings.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_2"
    },
    "after_dain_2": {
        name: "Dain",
        text: "(While practice is briefly stopped, Dain discovers me and runs over while wiping sweat with a towel.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_3"
    },
    "after_dain_3": {
        name: "Dain",
        text: "\"Hey, transfer student! What brings you here? Did you come to watch me practice? Hehe, you haven't fallen for my cool appearance, have you?\"",
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
        text: "(Dain smiles while scrunching her nose shyly. A healthy blush blooms on her face.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_cheer_2"
    },
    "after_dain_cheer_2": {
        name: "Dain",
        text: "\"Wh-what... it's embarrassing if you praise me so suddenly! It's not like I worked hard just for you to hear, so don't get the wrong idea! But... I guess I feel a bit more energized since you're watching...\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        next: "after_dain_end"
    },
    "after_dain_normal": {
        name: "Dain",
        text: "(Dain playfully hits my shoulder. I can feel a pleasant warmth from her touch.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_normal_2"
    },
    "after_dain_normal_2": {
        name: "Dain",
        text: "\"Ayy~ you're not being honest! Well, fine. Since you're here, want to wait until our practice is over? Let's go eat tteokbokki together!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_end"
    },
    "after_dain_end": {
        name: "Me",
        text: "(I sat on the gym stands and watched Dain until her practice was over. Her passion didn't seem to cool down until the sun set and darkness fell.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        sunset: true,
        next: "after_dain_end_2"
    },
    "after_dain_end_2": {
        name: "Dain",
        text: "(After finishing practice, Dain approaches me while panting heavily. The sweat on her forehead sparkles in the sunset light.) \"Phew... phew... sorry for making you wait! Now, let's go eat the tteokbokki we promised!\"",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        setFlag: "datedDainDay1",
        next: "after_dain_tteokbokki"
    },
    "after_dain_tteokbokki": {
        name: "Dain",
        text: "(Dain gives a happy smile while taking a bite of the steaming tteokbokki. Maybe because it's after exercise, it feels more delicious than usual.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "after_dain_tteokbokki_2"
    },
    "after_dain_tteokbokki_2": {
        name: "Dain",
        text: "\"Kya~ as expected, tteokbokki eaten after exercise is the best! Thank you so much for coming with me today. Thanks to you, it feels twice as delicious as usual!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "after_dain_tteokbokki_3"
    },
    "after_dain_tteokbokki_3": {
        name: "Dain",
        text: "\"Let's come eat together often, starting tomorrow... no, from now on! Is it a promise?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "evening_home"
    },
    "after_yuna_new": {
        name: "Me",
        text: "(Looking for a quiet place in the school, I arrived at the old library annex. There, where the sunset light seeps in, a girl is sitting by the window.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_new_2"
    },
    "after_yuna_new_2": {
        name: "???",
        text: "\"Hello? Coming here at this hour... you're quite unique. I'm Yuna.\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        setFlag: "metYuna",
        next: "after_yuna_3"
    },
    "after_seoyeon": {
        name: "Seoyeon",
        text: "(Opening the student council room door, I see Seoyeon struggling among piles of documents.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_2"
    },
    "after_seoyeon_2": {
        name: "Seoyeon",
        text: "(As I enter, she looks up in surprise. Fatigue is evident behind her glasses. She puts down her pen and stretches.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_3"
    },
    "after_seoyeon_3": {
        name: "Seoyeon",
        text: "\"Oh? Transfer student! What brings you here at this hour? Could it be... you were waiting for me?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Yeah, I wanted to go home together. Should I help?", next: "after_seoyeon_help", setFlag: "helpedSeoyeon" },
            { text: "I just came because I wanted to see your face. Aren't you overdoing it?", next: "after_seoyeon_worry" }
        ]
    },
    "after_seoyeon_help": {
        name: "Seoyeon",
        text: "(She opens her eyes wide as if moved. Soon she gives a bright smile and makes room for me beside her. Beside her, the smell of paper and her scent blend together.)",
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
        text: "(After finishing the document organization, we stopped by a small cafe in front of the school. The scent of warm cocoa fills the cafe.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe_2"
    },
    "after_seoyeon_cafe_2": {
        name: "Seoyeon",
        text: "(Seoyeon gives a happy expression while drinking a beverage topped with plenty of whipped cream.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe_2_2"
    },
    "after_seoyeon_cafe_2_2": {
        name: "Seoyeon",
        text: "\"Haa~ I feel like I can live now. Thank you so much today, transfer student.\"",
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
            { text: "Of course. I'll wait tomorrow too.", next: "after_seoyeon_promise" },
            { text: "Well, depending on my mood tomorrow? (Playful)", next: "after_seoyeon_tease" }
        ]
    },
    "after_seoyeon_promise": {
        name: "Seoyeon",
        text: "(She smiles brightly while holding out her pinky finger. The cafe lights sparkle in her eyes. Her laughter blends with the noise in the cafe and sounds sweet.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "after_seoyeon_promise_2"
    },
    "after_seoyeon_promise_2": {
        name: "Seoyeon",
        text: "\"Is it a promise? You can't break it! Then see you tomorrow, transfer student. Get home safely!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "evening_home"
    },
    "after_seoyeon_tease": {
        name: "Seoyeon",
        text: "(She glares at me while puffing out her cheeks. But her eyes are full of playfulness. She bursts into laughter while lightly hitting my arm.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "after_seoyeon_tease_2"
    },
    "after_seoyeon_tease_2": {
        name: "Seoyeon",
        text: "\"Hmph... you're really mean! But you still have to come, okay? If you don't, I'll punish you with the authority of the student council president! Hehe, just kidding. See you tomorrow!\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "evening_home"
    },
    "after_seoyeon_worry": {
        name: "Seoyeon",
        text: "(She smiles while scratching her head shyly. Her smile seems to have cleared some of the fatigue. She seems moved, feeling that my worry is sincere, and her eyes turn red.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_worry_2"
    },
    "after_seoyeon_worry_2": {
        name: "Seoyeon",
        text: "\"Hehe, you caught me. Being the student council president has more work than I thought. But since you're worrying like this, I feel energized! Just wait a bit, I'll finish quickly and let's go together!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe"
    },
    "after_yuna": {
        name: "Yuna",
        text: "(The library annex is darker and quieter than during the day. There, a girl is sitting by the window, looking at the sunset.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_2"
    },
    "after_yuna_2": {
        name: "Yuna",
        text: "(Her profile looks as beautiful and precarious as a painting. Even though she knows I've come, she stares out the window for a long time.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_3"
    },
    "after_yuna_3": {
        name: "Yuna",
        text: "\"Ah, transfer student... I like the library after school because it's quieter. What brings you here?\"",
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
        text: "(She slowly turns her head and looks at me. The red sunset light is reflected in her eyes. A faint smile spreads across her lips.)",
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
        text: "\"Fine, tonight will be long. I'll tell you... little by little. Follow me.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_yuna_rooftop"
    },
    "after_yuna_rooftop": {
        name: "Yuna",
        text: "(The school looked down from the annex rooftop is completely different from during the day. The cold night air wraps around us, and city lights twinkle in the distance.)",
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
        text: "\"Hidden problems are just festering. Haven't you felt that kind of discomfort?\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        choices: [
            { text: "I can go anywhere if I'm with you.", next: "after_yuna_together" },
            { text: "Darkness... it's a bit scary.", next: "after_yuna_scared" }
        ]
    },
    "after_yuna_together": {
        name: "Yuna",
        text: "(She grips my hand tightly. Her hand is still cold, but I can feel a burning desire within it. She looks into my eyes and gives a sad smile.)",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        next: "after_yuna_together_2"
    },
    "after_yuna_together_2": {
        name: "Yuna",
        text: "\"What a foolish thing to say... but I don't hate that answer. Fine, then how about we... become people who share each other's secrets?\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        next: "evening_home"
    },
    "after_yuna_scared": {
        name: "Yuna",
        text: "(She laughs coldly and lets go of my hand. Her gaze becomes indifferent again. She turns her eyes back out the window and pushes me away.)",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "after_yuna_scared_2"
    },
    "after_yuna_scared_2": {
        name: "Yuna",
        text: "\"Hehe, I thought so. It's too heavy a story for an ordinary student. Go back for today. Don't try to know any deeper.\"",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "evening_home"
    },
    "after_yuna_secret": {
        name: "Yuna",
        text: "(She puts her finger to her lips, signaling to be quiet. Her eyes shine sharply. She pulls my collar and brings me close to her.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_yuna_secret_2"
    },
    "after_yuna_secret_2": {
        name: "Yuna",
        text: "\"Shh... even walls have ears. Once you know the truth, you can't go back to your ordinary daily life. If you're okay with that... take my hand.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_yuna_rooftop"
    },
    "after_home": {
        name: "Me",
        text: "(Leaving the school gate, I look back on today. Meeting Seoyeon, and the strange atmosphere I felt throughout the school... A lot happened for the first day of transfer.)",
        background: "assets/images/background/school.png",
        character: null,
        sunset: true,
        next: "after_home_2"
    },
    "after_home_2": {
        name: "Me",
        text: "(Walking down the street where the sunset is falling, I look forward to what will happen tomorrow. Streetlights turn on one by one, preparing for the night.)",
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
        text: "(Returning home and lying on the bed, today's events pass through my mind like a kaleidoscope. Seoyeon's warm smile, Yuna's mysterious eyes...)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        next: "evening_home_2"
    },
    "evening_home_2": {
        name: "Me",
        text: "(Staring at the ceiling, I fall into deep thought. Only the sound of the clock's second hand echoes regularly in the room.)",
        night: true,
        next: "evening_home_2_2"
    },
    "evening_home_2_2": {
        name: "Me",
        text: "(I didn't expect it to be this eventful from the first day of transfer... What kind of things are waiting for me tomorrow?)",
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
        text: "(Dain's healthy laughter seems to linger in my ears. I feel like I can enjoy this unfamiliar school life if I'm with her. I went to sleep looking forward to the tteokbokki I'll eat with her tomorrow.)",
        night: true,
        next: "day2_start"
    },
    "evening_message_seoyeon": {
        name: "Me",
        text: "(I carefully picked up my phone and sent a message to Seoyeon. 'Thank you so much for guiding me today. I think I'll be able to adapt well to the school thanks to you.')",
        night: true,
        next: "evening_message_seoyeon_2"
    },
    "evening_message_seoyeon_2": {
        name: "Me",
        text: "(After a while, the phone vibrated and a reply came. My heart is pounding.)",
        night: true,
        next: "evening_message_seoyeon_2_2"
    },
    "evening_message_seoyeon_2_2": {
        name: "Me",
        text: "\"[Seoyeon]: No, I really enjoyed today too! Thanks to you, I finished the student council work quickly. See you at school tomorrow! Good night~ (Heart emoticon)\"",
        night: true,
        next: "day2_start"
    },
    "evening_think_yuna": {
        name: "Me",
        text: "(The strange atmosphere and rumors I felt throughout the school don't leave my head. The feeling that someone is watching me... What on earth is this school hiding? The darkness outside the window feels deeper than usual. I couldn't fall asleep until late at night.)",
        night: true,
        next: "day2_start"
    },
    "evening_think_yuna_met": {
        name: "Me",
        text: "(Yuna's words about 'the school's secret' don't leave my head. Her cold touch and sad eyes... What on earth does she know? The darkness outside the window feels deeper than usual. I couldn't fall asleep until late at night.)",
        night: true,
        next: "day2_start"
    },
    "evening_sleep": {
        name: "Me",
        text: "(I fell into a deep sleep as soon as I closed my eyes. In my dream, I was running down an endless hallway. I heard someone calling me from afar, but no matter how much I ran, I couldn't reach them. I woke up at dawn sweating coldly.)",
        night: true,
        next: "day2_start"
    },
    "day2_start": {
        name: "Me",
        text: "(I woke up to the sound of the alarm. The morning sunlight shining through the window is dazzling. Yesterday's tension is gone, and I put on the uniform that has become a bit familiar now.)",
        background: "assets/images/background/room_my.png",
        next: "day2_start_2"
    },
    "day2_start_2": {
        name: "Me",
        text: "(My reflection in the mirror looks a bit more confident than yesterday. I packed my bag and left the house.)",
        next: "day2_gate"
    },
    "day2_gate": {
        name: "Seoyeon",
        text: "(Arriving at the school gate, someone waves and runs over from afar. It's Seoyeon!)",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_gate_2"
    },
    "day2_gate_2": {
        name: "Seoyeon",
        text: "(She welcomes me with a lively appearance today as well. It's a fresh smile like a flower with morning dew.)",
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
        text: "(Seoyeon smiles brightly upon hearing Dain's name. Her expression becomes much softer.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_gate_talk_dain_met_2"
    },
    "day2_gate_talk_dain_met_2": {
        name: "Seoyeon",
        text: "\"Ah, Dain! That girl is really lively, isn't she? She's our school's mood maker. If you get close to Dain, school life will become really fun. We're quite close too, so let's all hang out together later!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_classroom"
    },
    "day2_gate_talk_1": {
        name: "Seoyeon",
        text: "(She smiles as if in a good mood and approaches my side. A faint scent of shampoo is carried by the wind.)",
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
        text: "\"I have a feeling something good will happen. Now, shall we go to the classroom together?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_classroom"
    },
    "day2_gate_talk_2": {
        name: "Seoyeon",
        text: "(Seoyeon's face turns slightly red. She avoids my gaze as if embarrassed and tucks her hair behind her ear.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_gate_talk_2_2"
    },
    "day2_gate_talk_2_2": {
        name: "Seoyeon",
        text: "(Her shy appearance shines even more under the morning sun.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_gate_talk_2_2_2"
    },
    "day2_gate_talk_2_2_2": {
        name: "Seoyeon",
        text: "\"Really... saying such things from the morning... you're really something.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_gate_talk_2_3"
    },
    "day2_gate_talk_2_3": {
        name: "Seoyeon",
        text: "\"But thanks. I feel energized seeing your face too.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom"
    },
    "day2_gate_talk_yuna_met": {
        name: "Seoyeon",
        text: "(Seoyeon's expression instantly darkens upon hearing Yuna's name. She looks around and speaks in a lowered voice. A worried light dwells in her eyes.)",
        character: "assets/images/characters/seyoun_worried.png",
        next: "day2_gate_talk_yuna_met_2"
    },
    "day2_gate_talk_yuna_met_2": {
        name: "Seoyeon",
        text: "\"Yuna...? Ah, you met that girl. Yuna has some... mysterious parts. But it would be better not to get too deeply involved. Even the teachers keep their words about her.\"",
        character: "assets/images/characters/seyoun_worried.png",
        next: "day2_classroom"
    },
    "day2_gate_talk_yuna": {
        name: "Seoyeon",
        text: "(Seoyeon's expression instantly darkens upon hearing those words. She looks around and speaks in a lowered voice. A worried light dwells in her eyes.)",
        character: "assets/images/characters/seyoun_worried.png",
        next: "day2_gate_talk_yuna_2"
    },
    "day2_gate_talk_yuna_2": {
        name: "Seoyeon",
        text: "\"Mysterious atmosphere...? Ah, are you talking about Yuna? Yuna has some... mysterious parts. But it would be better not to get too deeply involved. Even the teachers keep their words about her.\"",
        character: "assets/images/characters/seyoun_worried.png",
        next: "day2_classroom"
    },
    "day2_classroom": {
        name: "Me",
        text: "(Entering the classroom, I feel a much more comfortable atmosphere than yesterday. Kids wave and greet me.)",
        background: "assets/images/background/room_school.png",
        character: null,
        choices: [
            { text: "Sit in my seat.", next: "day2_classroom_2", condition: "metYuna" },
            { text: "Sit in my seat.", next: "day2_lesson", excludeCondition: "metYuna" }
        ]
    },
    "day2_classroom_2": {
        name: "Me",
        text: "(As I sit in my seat and take out my books, there's a small note on the desk. It's a note with a faint scent of purple.)",
        choices: [
            { text: "Open the note.", next: "day2_note_open", setFlag: "readNote" },
            { text: "Ignore it and put it in my bag.", next: "day2_note_ignore" }
        ]
    },
    "day2_note_open": {
        name: "Me",
        text: "(Opening the note, neat yet sharp handwriting catches my eye. 'Today at lunch, I'll be waiting at the library annex. I have something to say. - Y' ...Who is it?)",
        next: "day2_note_open_2"
    },
    "day2_note_open_2": {
        name: "Me",
        text: "(What on earth does she have to say to me? My heart starts pounding.)",
        next: "day2_lesson"
    },
    "day2_note_ignore": {
        name: "Me",
        text: "(I tucked the note deep into my bag out of an unknown sense of unease. But throughout class, I couldn't concentrate because I was curious about the contents of the note.)",
        next: "day2_note_ignore_2"
    },
    "day2_note_ignore_2": {
        name: "Me",
        text: "(A strange feeling keeps lingering in my head. Who on earth is the owner of that note?)",
        next: "day2_lesson"
    },
    "day2_lesson": {
        name: "Teacher",
        text: "(A boring math class is continuing. The formulas filling the blackboard look like an alien language.)",
        character: "assets/images/characters/teacher.png",
        next: "day2_lesson_2"
    },
    "day2_lesson_2": {
        name: "Teacher",
        text: "(Lively voices of kids having PE class can be heard from outside the window. I rest my chin on my hand and fall into thought while looking out the window.)",
        character: "assets/images/characters/teacher.png",
        next: "day2_lesson_3"
    },
    "day2_lesson_3": {
        name: "Teacher",
        text: "\"Now, you there, transfer student! Instead of daydreaming, why don't you try solving this problem?\"",
        character: "assets/images/characters/teacher.png",
        choices: [
            { text: "Stand up confidently and solve the problem.", next: "day2_lesson_solve_study", condition: "personality_study" },
            { text: "Stand up confidently and solve the problem.", next: "day2_lesson_solve_active", condition: "personality_active" },
            { text: "Stand up confidently and solve the problem.", next: "day2_lesson_solve_normal", condition: "personality_quiet" },
            { text: "Stand up confidently and solve the problem.", next: "day2_lesson_solve_normal", condition: "personality_party" },
            { text: "Honestly say I don't know.", next: "day2_lesson_fail" }
        ]
    },
    "day2_lesson_solve_active": {
        name: "Kids",
        text: "(I went to the front of the blackboard and solved the problem without hesitation. The sound of chalk echoes rhythmically. When I get the right answer, the kids send admiring applause. Seoyeon also smiles and gives a thumbs up from behind.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_lesson_solve_2_active"
    },
    "day2_lesson_solve_normal": {
        name: "Kids",
        text: "(I went to the front of the blackboard and solved the problem without hesitation. The sound of chalk echoes rhythmically. When I get the right answer, the kids send admiring applause. Seoyeon also smiles and gives a thumbs up from behind.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_lesson_solve_2"
    },
    "day2_lesson_solve_study": {
        name: "Kids",
        text: "(I went to the front of the blackboard and solved the problem without hesitation. The sound of chalk echoes rhythmically. When I get the right answer, the kids send admiring applause. Seoyeon also smiles and gives a thumbs up from behind.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_lesson_solve_2"
    },
    "day2_lesson_solve_2": {
        name: "Kids",
        text: "\"Wow~ the transfer student is good at studying too! Isn't he a total cheat character?\"",
        character: null,
        next: "day2_lunch_choice"
    },
    "day2_lesson_solve_2_active": {
        name: "Kids",
        text: "\"Oh~ transfer student, I thought you were only good at sports, but you're pretty good at studying too? That's unexpected!\"",
        character: null,
        next: "day2_lunch_choice"
    },
    "day2_lesson_fail": {
        name: "Kids",
        text: "(When I scratch my head and say I don't know, a small laugh breaks out in the classroom. The teacher smiles kindly and explains again. Seoyeon looks at me regretfully and mouths that she'll teach me later.)",
        character: null,
        next: "day2_lesson_fail_2"
    },
    "day2_lesson_fail_2": {
        name: "Kids",
        text: "\"It's okay, transfer student! That problem is originally a bit difficult. I'll help you later!\"",
        character: null,
        next: "day2_lunch_choice"
    },
    "day2_lunch_choice": {
        name: "Me",
        text: "(Finally lunch time! My stomach clock is ringing loudly. What should I do today? Seoyeon is already looking at me with her lunch box... The time for choice has come.)",
        choices: [
            { text: "Go to the rooftop with Seoyeon.", next: "day2_lunch_seoyeon" },
            { text: "Go to the library annex as the note said.", next: "day2_lunch_yuna", condition: "readNote" },
            { text: "Head to the library annex where Yuna is.", next: "day2_lunch_yuna", condition: "metYuna", excludeCondition: "readNote" },
            { text: "Head to the quiet library annex.", next: "day2_lunch_yuna_new", excludeCondition: "metYuna" },
            { text: "Go to the gym to play volleyball with Dain.", next: "day2_lunch_volleyball", condition: "metDain" },
            { text: "Go to the gym and play volleyball with the kids.", next: "day2_lunch_volleyball_new", excludeCondition: "metDain" },
            { text: "I don't feel well, so I'll go to the nurse's office.", next: "day2_lunch_nurse" }
        ]
    },
    "day2_lunch_volleyball_new": {
        name: "Me",
        text: "(Going to the gym, I feel a lively energy. A girl is leading the kids and passionately teaching volleyball.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_lunch_volleyball_new_2"
    },
    "day2_lunch_volleyball_new_2": {
        name: "???",
        text: "\"Hey, you there, transfer student! Don't just stand there blankly, come here and how about a game? I'm Dain from the volleyball club!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        setFlag: "metDain",
        next: "day2_lunch_volleyball"
    },
    "day2_lunch_seoyeon": {
        name: "Seoyeon",
        text: "(Going up to the rooftop, Seoyeon takes out a more elaborate lunch box than yesterday. A savory smell stimulates the tip of my nose.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Next", next: "day2_lunch_seoyeon_special", condition: "helpedSeoyeon" },
            { text: "Next", next: "day2_lunch_seoyeon_1_2", excludeCondition: "helpedSeoyeon" }
        ]
    },
    "day2_lunch_seoyeon_special": {
        name: "Seoyeon",
        text: "\"Thanks to you helping with the student council work yesterday, I had some time left, so I prepared it with extra care today. Here, try it!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_lunch_seoyeon_1_3"
    },
    "day2_lunch_seoyeon_1_2": {
        name: "Seoyeon",
        text: "(She looks at me with expectant eyes. As the lunch box full of her care opens, delicious-looking sandwiches reveal themselves.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_lunch_seoyeon_1_2_2"
    },
    "day2_lunch_seoyeon_1_2_2": {
        name: "Seoyeon",
        text: "\"Ta-da! I made sandwiches today. I hurried from the morning thinking you'd like them, transfer student.\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_lunch_seoyeon_2"
    },
    "day2_lunch_seoyeon_1_3": {
        name: "Seoyeon",
        text: "\"Ta-da! Today is a special handmade sandwich. I hurried from the morning thinking you'd like it, transfer student. How is it, does it look delicious?\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_lunch_seoyeon_2"
    },
    "day2_lunch_seoyeon_2": {
        name: "Seoyeon",
        text: "(Taking a bite of the sandwich, the harmony of fresh vegetables and sauce is excellent. Seoyeon smiles happily seeing me eat with gusto.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_lunch_seoyeon_2_2"
    },
    "day2_lunch_seoyeon_2_2": {
        name: "Seoyeon",
        text: "(She lightly wipes the sauce from the corner of my mouth with her finger. For a moment, I thought my heart stopped.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_lunch_seoyeon_2_2_2"
    },
    "day2_lunch_seoyeon_2_2_2": {
        name: "Seoyeon",
        text: "\"Hehe, is it that delicious? Eat slowly. You'll get indigestion.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_lunch_seoyeon_2_3"
    },
    "day2_lunch_seoyeon_2_3": {
        name: "Seoyeon",
        text: "\"Ah, right! There's a school festival this weekend... are you free by any chance?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Of course! I want to see the festival with you, Seoyeon.", next: "day2_festival_promise" },
            { text: "Festival? Sounds fun. Aren't you busy with student council work?", next: "day2_festival_worry" }
        ]
    },
    "day2_festival_promise": {
        name: "Seoyeon",
        text: "(She's so happy that she suddenly grabs my hand. My face heats up at the warm and soft touch. She hurriedly lets go of my hand, surprised by her own action, but her face is still full of smiles.)",
        character: "assets/images/characters/seyoun_shy2.png",
        setFlag: "promisedFestival",
        next: "day2_festival_promise_2"
    },
    "day2_festival_promise_2": {
        name: "Seoyeon",
        text: "\"Really?! It's a promise? Then I'll have to pick out clothes to wear for the festival... Ah, no! It's nothing! Anyway, I'll be looking forward to it!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_afternoon"
    },
    "day2_festival_worry": {
        name: "Seoyeon",
        text: "(She answers bravely, puffing out her chest. But a bit of fatigue is visible in her eyes. She lightly leans her head on my shoulder, as if thankful for my worry. A faint flower scent comes from her hair.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_festival_worry_2"
    },
    "day2_festival_worry_2": {
        name: "Seoyeon",
        text: "\"Yeah, I'll be a bit busy, but... I'll make time to spend with you somehow. With the authority of the student council president! Hehe, just kidding. You'll go with me, right?\"",
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
        text: "(She stares intently at me. It's as if she's trying to see through my heart.)",
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
        text: "\"To have made your way here... are you and I connected after all?\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_1_3"
    },
    "day2_lunch_yuna_1_3": {
        name: "Yuna",
        text: "\"The school's secret... and the link between you and me. I think it's time to tell you about it.\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_2"
    },
    "day2_lunch_yuna_2": {
        name: "Yuna",
        text: "(She takes out an old book and opens it. Inside, an old photograph is tucked.)",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_2_2"
    },
    "day2_lunch_yuna_2_2": {
        name: "Yuna",
        text: "(In the photo, along with the old appearance of our school... a boy who looks exactly like me is standing. I'm overwhelmed with shock and can't speak.)",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_2_3"
    },
    "day2_lunch_yuna_2_3": {
        name: "Yuna",
        text: "\"This boy... do you know who he is? He's a senior who disappeared from this school two years ago.\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_2_4"
    },
    "day2_lunch_yuna_2_4": {
        name: "Yuna",
        text: "(She grips my collar tightly as if she doesn't want to lose me.)",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_2_4_2"
    },
    "day2_lunch_yuna_2_4_2": {
        name: "Yuna",
        text: "\"He stood up against the school's unfair treatment... and was framed and kicked out. You look so much like that senior.\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        choices: [
            { text: "That's impossible! There's no way.", next: "day2_yuna_denial" },
            { text: "That senior...? Then did you know me?", next: "day2_yuna_accept" }
        ]
    },
    "day2_yuna_denial": {
        name: "Yuna",
        text: "(She laughs coldly and puts the photo back in the book. Her gaze becomes indifferent again. She places her hand on my chest and feels my heartbeat. Her touch is as cold as ice.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_yuna_denial_2"
    },
    "day2_yuna_denial_2": {
        name: "Yuna",
        text: "\"It must be hard to believe. But this actually happened. You be careful too. The school won't stay still if you stand out. You might have already caught their eye.\"",
        character: "assets/images/characters/yuna_nomal.png",
        setFlag: "knowsSecret",
        next: "day2_afternoon"
    },
    "day2_yuna_accept": {
        name: "Yuna",
        text: "(Dew forms in her eyes. She softly caresses my cheek and whispers. Her voice trembles faintly. She grips my collar tightly as if she doesn't want to lose me.)",
        character: "assets/images/characters/yuna_sad.png",
        next: "day2_yuna_accept_2"
    },
    "day2_yuna_accept_2": {
        name: "Yuna",
        text: "\"That senior... was someone very precious to me. Seeing you keeps making me think of him... I want to protect you this time. So that you, at least, don't get hurt.\"",
        character: "assets/images/characters/yuna_sad.png",
        setFlag: "knowsSecret",
        next: "day2_afternoon"
    },
    "day2_lunch_volleyball": {
        name: "Me",
        text: "(I ran to the gym and played volleyball, sweating with the kids led by Dain. Receiving and passing the flying ball made my stray thoughts disappear and I felt refreshed. When I succeeded in a powerful spike, Dain hugged me and cheered.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_lunch_volleyball_2"
    },
    "day2_lunch_volleyball_2": {
        name: "Dain",
        text: "\"Wow! Transfer student, your spike skill is awesome! I appoint you as our team's ace! Today was really the best!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_afternoon"
    },
    "day2_lunch_nurse": {
        name: "Me",
        text: "(Perhaps due to the tension accumulated since yesterday, my head is throbbing. I moved my steps to the quiet nurse's office.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_2"
    },
    "day2_lunch_nurse_2": {
        name: "Nurse",
        text: "\"Oh, what a cute transfer student. Your face is red... I wonder if you're sick, or if your heart is fluttering because you saw my face?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_3": {
        name: "Nurse",
        text: "(The nurse guides me to the bed with a warm smile. A cozy herbal scent comes from her touch.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "My head hurts a bit.", next: "day2_lunch_nurse_head" },
            { text: "I just want to rest for a bit.", next: "day2_lunch_nurse_rest" }
        ]
    },
    "day2_lunch_nurse_head": {
        name: "Nurse",
        text: "\"It seems like a tension headache. You must have overdone it since the first day of transfer. Here, take this medicine and sleep for a bit, and you'll feel better.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_sleep"
    },
    "day2_lunch_nurse_rest": {
        name: "Nurse",
        text: "\"Hehe, there are days like that. Our school... has a strong energy. Close the curtain here and rest comfortably.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "Next", next: "day2_lunch_nurse_rest_yuna", condition: "metYuna" },
            { text: "Next", next: "day2_lunch_nurse_sleep", excludeCondition: "metYuna" }
        ]
    },
    "day2_lunch_nurse_rest_yuna": {
        name: "Me",
        text: "\"(Strong energy...? Yuna's words come to mind. Is there really something about this school?)\"",
        background: "assets/images/background/nurse_room.jpg",
        next: "day2_lunch_nurse_sleep"
    },
    "day2_lunch_nurse_sleep": {
        name: "Me",
        text: "(I fell into a deep sleep without realizing it due to the coziness of the blanket the nurse covered me with. In the silence of the nurse's office, I feel yesterday's fatigue being washed away.)",
        background: "assets/images/background/nurse_room.jpg",
        next: "day2_lunch_nurse_wake"
    },
    "day2_lunch_nurse_wake": {
        name: "Me",
        text: "(How long did I sleep... When I open my eyes, the red sunset is seeping through the window. The nurse is sitting at her desk, smiling kindly at me.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "day2_lunch_nurse_wake_2"
    },
    "day2_lunch_nurse_wake_2": {
        name: "Nurse",
        text: "\"Oh, are you awake now? You slept really soundly. It's almost time to go home. How is your body?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "nurse_wake_free_talk"
    },
    "nurse_wake_free_talk": {
        type: "free_talk",
        name: "Nurse",
        text: "\"Hehe, you still have that sleepy face. Want to talk with me a bit more before going home?\"",
        context: "The nurse's office at sunset, a situation where the protagonist and the nurse are left alone after just waking up.",
        personality: "A languid, sexy, yet kind nurse. She feels a strange charm from the protagonist and has a bold personality that openly seduces him.",
        extra_guideline: "As a mature adult, openly seduce the protagonist and create a risky atmosphere. Don't be flustered by the user's mature jokes or provocative remarks, but rather show a bold and provocative reaction enough to fluster the protagonist even more. Fully radiate mature charm and pull the romantic tension to the maximum.",
        character: "assets/images/characters/nurse.png",
        next: "nurse_contact_exchange"
    },
    "nurse_contact_exchange": {
        name: "Nurse",
        text: "(The nurse takes out a smartphone from her gown pocket and leans slightly toward me. Her scent tickles the tip of my nose.) \"Hey, Transfer Student. If you're sick again at night or can't sleep... do you want to contact me? I'll give you my personal number specially.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        choices: [
            { text: "Yes, I'd definitely like to know your number, Teacher.", next: "nurse_contact_success", setFlags: ["has_number_nurse", "has_any_contact"] },
            { text: "Ah... I think it would be a bit rude to contact you outside of school.", next: "nurse_contact_fail" }
        ]
    },
    "nurse_contact_success": {
        name: "Nurse",
        text: "(She takes my smartphone, enters the number herself, and sends a wink.) \"Hehe, good boy. Then... I'll be waiting tonight? Contact me not too late.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "nurse_name_ask"
    },
    "nurse_name_ask": {
        name: "Nurse",
        text: "\"By the way... come to think of it, I haven't heard your name yet? Transfer Student, what's your name?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        choices: [
            { text: "My name is '{name}'.", next: "nurse_name_share", setFlag: "knowsName_Nurse" },
            { text: "Just call me 'Transfer Student'.", next: "day2_afternoon" }
        ]
    },
    "nurse_name_share": {
        name: "Nurse",
        text: "\"{name}... Hehe, even the name is cute. Then {name}, I'll be waiting for your contact tonight?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "day2_afternoon"
    },
    "nurse_contact_fail": {
        name: "Nurse",
        text: "(She bites her lip slightly as if a bit disappointed, but soon regains her relaxed smile.) \"Oh my, you're unexpectedly conservative? Well, that's cute too. Tell me anytime if you change your mind.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "day2_afternoon"
    },
    "day2_afternoon": {
        name: "Me",
        text: "(All afternoon classes ended, and the time for the sunset has come again. It seems like more things happened today than yesterday.)",
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
        text: "(Dain said she has volleyball club practice and ran to the gym, waving her hand lively.)",
        background: "assets/images/background/room_school.png",
        sunset: true,
        next: "day2_afternoon_2"
    },
    "day2_afternoon_2": {
        name: "Me",
        text: "(I'm about to leave the classroom with my bag, but two girls call me at the same time. A strange tension flows in the hallway.)",
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
        text: "\"(Uh... the atmosphere is a bit strange? Who should I go to first?)\"",
        characters: {
            left: "assets/images/characters/seyoun_nomal.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        choices: [
            { text: "Approach Seoyeon.", next: "day2_final_seoyeon" },
            { text: "Approach Yuna.", next: "day2_final_yuna", condition: "metYuna" },
            { text: "Approach the unfamiliar girl.", next: "day2_final_yuna_new", excludeCondition: "metYuna" },
            { text: "Go to Dain waiting in the gym.", next: "day2_final_dain", condition: "metDain" },
            { text: "Pretend not to know both and hurry home.", next: "day2_final_run" }
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
        text: "(As I approach Seoyeon, she smiles as if relieved. But her gaze is sharp, perhaps conscious of the girl standing next to her.)",
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
        text: "(As I approach Seoyeon, she smiles as if relieved. But her gaze is sharp, perhaps conscious of Yuna.)",
        characters: {
            left: "assets/images/characters/seyoun_laugh.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_yuna_react"
    },
    "day2_final_seoyeon_new_yuna": {
        name: "Seoyeon",
        text: "(As I approach Seoyeon, she smiles as if relieved. But her gaze is sharp, perhaps conscious of the girl standing next to her.)",
        characters: {
            left: "assets/images/characters/seyoun_laugh.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_yuna_react"
    },
    "day2_final_seoyeon_yuna_react": {
        name: "Me",
        text: "(As I approach, the girl standing next to her speaks in a low voice.)",
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
        text: "\"...Fine, if that's your choice, there's nothing I can do. But be careful. The stronger the light, the deeper the shadow.\"",
        characters: {
            left: "assets/images/characters/seyoun_pout.png",
            right: "assets/images/characters/yuna_sadsmile.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_2"
    },
    "day2_final_seoyeon_yuna_react_new": {
        name: "???",
        text: "\"...Fine, if that's your choice, there's nothing I can do. But be careful. The stronger the light, the deeper the shadow.\"",
        characters: {
            left: "assets/images/characters/seyoun_pout.png",
            right: "assets/images/characters/yuna_sadsmile.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_2"
    },
    "day2_final_seoyeon_2": {
        name: "Seoyeon",
        text: "(She links her arm with mine and glares at the girl standing next to her. Strength enters her hand.)",
        characters: {
            left: "assets/images/characters/seyoun_pout.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_2_2"
    },
    "day2_final_seoyeon_2_2": {
        name: "Seoyeon",
        text: "\"Transfer student, we have a student council meeting today. Can you come with me?\"",
        characters: {
            left: "assets/images/characters/seyoun_nomal.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_3"
    },
    "day2_final_seoyeon_3": {
        name: "Seoyeon",
        text: "\"There's an important agenda. Yuna, I'll be taking the transfer student with me.\"",
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
        text: "\"(Yuna...? Was that girl's name Yuna? Seoyeon seems to know her.)\"",
        characters: {
            left: "assets/images/characters/seyoun_nomal.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_4"
    },
    "day2_final_seoyeon_4": {
        name: "Me",
        text: "(I headed to the student council room with Seoyeon. The meeting lasted until late, but it wasn't hard as long as I was with her. After the meeting, we walked side by side along the night path, talking about what to wear for the festival.)",
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
        text: "\"Hehe, as expected, you're different from the others.\"",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        next: "day2_final_yuna_3"
    },
    "day2_final_yuna_3": {
        name: "Yuna",
        text: "\"Seoyeon, I'm sorry, but this person has something to talk about with me.\"",
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
        text: "\"About the 'real' face of the school. We should finish the conversation we were having earlier, shouldn't we?\"",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        next: "day2_final_yuna_4"
    },
    "day2_final_yuna_no_secret": {
        name: "Yuna",
        text: "\"There's something you absolutely need to know about our school. It's a very interesting story.\"",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        next: "day2_final_yuna_4"
    },
    "day2_final_yuna_4": {
        name: "Me",
        text: "(Walking down the dark hallway with Yuna, I listened to the truth about the school she was telling me. Her voice was cold, but I could feel a slight tremor in the hand I was holding. Before we knew it, we were standing in front of the school gate, where the darkness was thick.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        next: "day2_ending_pre"
    },
    "day2_final_dain": {
        name: "Me",
        text: "(Leaving behind the stinging gazes of Seoyeon and the girl standing next to her, I walked towards Dain, who was waving from the gym.)",
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
        text: "(Leaving behind the stinging gazes of Seoyeon and Yuna, I walked towards Dain, who was waving from the gym.)",
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
        text: "(Leaving behind the stinging gazes of Seoyeon and the girl standing next to her, I walked towards Dain, who was waving from the gym.)",
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
        text: "\"Wait, transfer student! You said you'd go to the festival with me! But now you're going to Dain...?\"",
        characters: {
            left: "assets/images/characters/seyoun_angry.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        next: "day2_final_dain_betrayal_2"
    },
    "day2_final_dain_betrayal_2": {
        name: "Seoyeon",
        text: "\"Really... that's too much. Was I the only one who was serious? (Thick teardrops begin to fall from Seoyeon's eyes.)\"",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        choices: [
            { text: "Seoyeon, don't cry... I was wrong. I'll go with you.", next: "day2_final_seoyeon_back_dain" },
            { text: "I'm sorry, Seoyeon. But my promise with Dain comes first.", next: "day2_final_dain_react" }
        ]
    },
    "day2_final_seoyeon_back_dain": {
        name: "Dain",
        text: "\"What~ Transfer student! You can't make Seoyeon cry! Fine, I'll let Seoyeon have you today, so you have to play with me tomorrow, okay?\"",
        characters: {
            left: "assets/images/characters/seyoun_shy.png",
            right: "assets/images/characters/dain_nomal.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_2"
    },
    "day2_final_dain_react": {
        name: "Me",
        text: "(I ran to Dain, leaving behind the gazes of Seoyeon and the girl standing next to her. A low voice can be heard from behind.)",
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
        text: "\"Hehe... I guess that kind of energetic type was your preference after all. Seoyeon, it looks like we both got dumped.\"",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_sadsmile.png"
        },
        sunset: true,
        next: "day2_final_dain_start"
    },
    "day2_final_dain_react_yuna_new": {
        name: "???",
        text: "\"Hehe... I guess that kind of energetic type was your preference after all. Seoyeon, it looks like we both got dumped.\"",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_sadsmile.png"
        },
        sunset: true,
        next: "day2_final_dain_start"
    },
    "day2_final_dain_start": {
        name: "Dain",
        text: "(Turning towards the gym, Dain is holding a volleyball and waving at me. Her healthy smile sparkles in the sunset.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "day2_final_dain_2"
    },
    "day2_final_dain_2": {
        name: "Dain",
        text: "\"Hey! Transfer student! I was waiting for you after practice! You didn't forget we were going to eat tteokbokki today, right?\"",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "day2_final_dain_3"
    },
    "day2_final_dain_3": {
        name: "Me",
        text: "(I ran to Dain, leaving behind the gazes of Seoyeon and Yuna. Her energetic energy makes my complicated heart feel relieved in an instant.)",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "day2_final_dain_4"
    },
    "day2_final_dain_4": {
        name: "Me",
        text: "(We ate tteokbokki at the snack bar in front of the school and talked about volleyball. With Dain, it feels like any worry will disappear soon.)",
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
        text: "\"Yesterday and today, eating tteokbokki with you has been the best! Can we... come together tomorrow too?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "day2_ending_pre"
    },
    "day2_final_dain_4_first": {
        name: "Dain",
        text: "\"I think the tteokbokki tastes much better than usual because I'm eating it with you! Can we... come together tomorrow too?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "day2_ending_pre"
    },
    "day2_final_run": {
        name: "Me",
        text: "(The gazes of the two were so scary that I unconsciously ran out the back door as if escaping. I thought I heard someone calling me from behind, but I ran without looking back. My heart feels like it's going to burst. I stepped out of the school gate, panting.)",
        background: "assets/images/background/school.png",
        character: null,
        sunset: true,
        next: "day2_final_run_2"
    },
    "day2_final_run_2": {
        name: "Me",
        text: "\"(Phew... phew... I'm alive. But how do I go to school tomorrow? I'm already worried sick...)\"",
        background: "assets/images/background/school.png",
        sunset: true,
        choices: [
            { text: "Next", next: "day2_final_run_seoyeon", condition: "promisedFestival" },
            { text: "Next", next: "day2_final_run_dain_check", excludeCondition: "promisedFestival" }
        ]
    },
    "day2_final_run_seoyeon": {
        name: "Me",
        text: "\"(I even made a promise to go to the festival with Seoyeon... What if I just run away like this? It's going to be really hard to see her face tomorrow...)\"",
        background: "assets/images/background/school.png",
        sunset: true,
        next: "day2_final_run_dain_check"
    },
    "day2_final_run_dain_check": {
        name: "Me",
        text: "(Catching my breath, I think back on what happened today.)",
        background: "assets/images/background/school.png",
        sunset: true,
        choices: [
            { text: "Next", next: "day2_final_run_dain", condition: "datedDainDay1" },
            { text: "Next", next: "day2_final_run_yuna_check", excludeCondition: "datedDainDay1" }
        ]
    },
    "day2_final_run_dain": {
        name: "Me",
        text: "\"(Come to think of it, I also promised to go eat tteokbokki with Dain... Dain must be waiting in the gym, right? I'm really sorry...)\"",
        background: "assets/images/background/school.png",
        sunset: true,
        next: "day2_final_run_yuna_check"
    },
    "day2_final_run_yuna_check": {
        name: "Me",
        text: "(I step out of the school gate, catching my breath. The shadow of the school stretches long behind my back.)",
        background: "assets/images/background/school.png",
        sunset: true,
        choices: [
            { text: "Next", next: "day2_final_run_yuna", condition: "knowsSecret" },
            { text: "Next", next: "day2_ending_pre", excludeCondition: "knowsSecret" }
        ]
    },
    "day2_final_run_yuna": {
        name: "Me",
        text: "\"(The secret of the school Yuna mentioned... and that desperate look in her eyes saying she would protect me. Is it really right to run away like this?)\"",
        background: "assets/images/background/school.png",
        sunset: true,
        next: "day2_ending_pre"
    },
    "day2_ending_pre": {
        name: "Me",
        text: "(Leaving the school, I look up at the night sky. Countless stars are twinkling and looking down at me. It's only been two days since I transferred... but my life already seems to be caught in a huge whirlpool. What kind of future awaits me?)",
        background: "assets/images/background/school.png",
        character: null,
        night: true,
        next: "home_sequence"
    },
    "home_sequence": {
        name: "Me",
        text: "(I returned home and threw myself onto the bed. My body feels heavy like wet cotton. I took out my phone and looked at the contact list.)",
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
            { text: "Teacher", next: "contact_teacher", condition: "knowsName_Teacher" },
            { text: "Nurse", next: "contact_nurse", condition: "knowsName_Nurse" },
            { text: "Go to sleep", next: "end_demo_real" }
        ]
    },
    "contact_seoyeon": {
        name: "Seoyeon",
        text: "Seoyeon's contact information has been registered. You can now have a free conversation with her.",
        character: "assets/images/characters/seyoun_nomal.png",
        freeTalk: "Seoyeon",
        next: "contact_menu"
    },
    "contact_yuna": {
        name: "Yuna",
        text: "Yuna's contact information has been registered. You can now have a free conversation with her.",
        character: "assets/images/characters/yuna_nomal.png",
        freeTalk: "Yuna",
        next: "contact_menu"
    },
    "contact_dain": {
        name: "Dain",
        text: "Dain's contact information has been registered. You can now have a free conversation with her.",
        character: "assets/images/characters/dain_nomal.png",
        freeTalk: "Dain",
        next: "contact_menu"
    },
    "contact_teacher": {
        name: "Teacher",
        text: "The teacher's contact information has been registered. You can now have a free conversation with her.",
        character: "assets/images/characters/teacher_nomal.png",
        freeTalk: "Teacher",
        next: "contact_menu"
    },
    "contact_nurse": {
        name: "Nurse",
        text: "The nurse's contact information has been registered. You can now have a free conversation with her.",
        character: "assets/images/characters/nurse_nomal.png",
        freeTalk: "Nurse",
        next: "contact_menu"
    },
    "end_demo_real": {
        name: "System",
        text: "(A sweet piano melody flows, leaving a lingering feeling...)",
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
        text: "Congratulations! You have completed all the scenarios of the demo version.\n\nFluttering romance with Seoyeon, mysterious truth with Yuna, and energetic friendship with Dain... Please look forward to what kind of ending your choices will lead to in the full version! Thank you for playing.",
        character: null,
        fade: true,
        choices: [
            { text: "Return to Title", next: "index-en.html" }
        ]
    }
};
