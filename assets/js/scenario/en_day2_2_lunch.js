if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

Object.assign(SCENARIO[2], {
    "day2_lunch_time": {
        name: "Me",
        text: "(Ding-dong-dang-dong! Finally, lunch break. The classroom is buzzing with energy, and my heart starts to race.)",
        character: null,
        choices: [
            { text: "Go to see Seoyeon and her radiant smile.", next: "day2_lunch_seoyeon" },
            { text: "Head to the library annex backyard as promised.", next: "day2_lunch_yuna", condition: "metYuna" },
            { text: "Find out who left that mysterious note.", next: "day2_lunch_yuna", excludeCondition: "metYuna" },
            { text: "Go to the gym to see Dain.", next: "day2_lunch_dain", condition: "metDain" },
            { text: "Follow the lively sounds from the gymnasium.", next: "day2_lunch_dain", excludeCondition: "metDain" },
            { text: "I need some rest. Heading to the nurse's office.", next: "day2_lunch_nurse" },
            { text: "Go to the faculty room to see the teacher.", next: "day2_lunch_teacher" }
        ]
    },
    "day2_lunch_teacher": {
        name: "Me",
        text: "(I open the faculty room door. My teacher, who was about to eat, smiles warmly when she sees me.)",
        background: "assets/images/background/teacher_room.png",
        character: "assets/images/characters/teacher_smile.png",
        next: "day2_lunch_teacher_2"
    },
    "day2_lunch_teacher_2": {
        name: "Teacher",
        text: "\"Oh, {name}! Did you have a good lunch? I was just about to start mine.\"",
        character: "assets/images/characters/teacher.png",
        next: "day2_lunch_teacher_3"
    },
    "day2_lunch_teacher_3": {
        name: "Teacher",
        text: "\"Did you come all this way just to eat with me? Hehe, just kidding.\"",
        character: "assets/images/characters/teacher_smile.png",
        choices: [
            { text: "Actually, yes. Can I sit next to you?", next: "day2_lunch_teacher_eat", stats: { Teacher: { affinity: 15 } } },
            { text: "Your lunch looks so good, I couldn't resist.", next: "day2_lunch_teacher_food", stats: { Teacher: { affinity: 5 } } },
            { text: "I was just passing by and thought of you.", next: "day2_lunch_teacher_pass", stats: { Teacher: { affinity: 3 } } }
        ]
    },
    "day2_lunch_teacher_eat": {
        name: "Teacher",
        text: "\"My, my... you're a bold student, aren't you? Fine, I'll share some. Here, say 'Ah~'.\"",
        character: "assets/images/characters/teacher_smile.png",
        next: "day2_lunch_teacher_end"
    },
    "day2_lunch_teacher_food": {
        name: "Teacher",
        text: "\"Hehe, my mother is quite the cook. I'd love to let you taste her cooking properly sometime.\"",
        character: "assets/images/characters/teacher_smile.png",
        next: "day2_lunch_teacher_end"
    },
    "day2_lunch_teacher_pass": {
        name: "Teacher",
        text: "\"Is that so? Well, thank you for stopping by. Have a great lunch break!\"",
        character: "assets/images/characters/teacher.png",
        next: "day2_lunch_teacher_end"
    },
    "day2_lunch_teacher_end": {
        name: "Me",
        text: "(After a brief but sweet chat, I head back. Her gentle smile stays with me.)",
        next: "day2_afternoon_class"
    },
    "day2_lunch_seoyeon": {
        name: "Seoyeon",
        text: "(I open the student council room. Seoyeon, eating her lunch, blinks in surprise and then beams.)",
        background: "assets/images/background/student_room.png",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_seoyeon_lunch_talk"
    },
    "day2_seoyeon_lunch_talk": {
        name: "Seoyeon",
        text: "\"{name}! I was just hoping you'd come. Sit here. I made some extra sandwiches today.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        choices: [
            { text: "They look amazing! You're a natural, Seoyeon.", next: "day2_seoyeon_lunch_praise", stats: { Seoyeon: { affinity: 8 } } },
            { text: "Aren't you tired from all the work? Don't overdo it.", next: "day2_seoyeon_lunch_worry", stats: { Seoyeon: { affinity: 5 } } },
            { text: "You've got a crumb... hold still. (Wipe it off)", next: "day2_seoyeon_lunch_touch", stats: { Seoyeon: { affinity: 10 } } }
        ]
    },
    "day2_seoyeon_lunch_praise": {
        name: "Seoyeon",
        text: "\"Really? I was worried they might not be to your taste. Eat up!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        setFlag: "day2_ate_lunch_seoyeon",
        next: "day2_seoyeon_lunch_end"
    },
    "day2_seoyeon_lunch_worry": {
        name: "Seoyeon",
        text: "\"I'm okay. Seeing you enjoy the food makes all the fatigue disappear. Truly.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        setFlag: "day2_ate_lunch_seoyeon",
        next: "day2_seoyeon_lunch_end"
    },
    "day2_seoyeon_lunch_touch": {
        name: "Seoyeon",
        text: "\"Ah... T-thank you. I must have been eating too greedily... (She blushes slightly)\"",
        character: "assets/images/characters/seyoun_shy.png",
        setFlag: "day2_ate_lunch_seoyeon",
        next: "day2_seoyeon_lunch_end"
    },
    "day2_seoyeon_lunch_end": {
        name: "Me",
        text: "(After a lovely lunch with her, I return. The taste of her sandwiches is still lingering sweet.)",
        next: "day2_afternoon_class"
    },
    "day2_lunch_yuna": {
        name: "Me",
        text: "(The library annex backyard. Under the deep shadows, Yuna stands like part of the scenery.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_talk"
    },
    "day2_yuna_talk": {
        name: "Yuna",
        text: "\"...You came. I didn't think you'd actually show up for a note.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_talk_2"
    },
    "day2_yuna_talk_2": {
        name: "Yuna",
        text: "(She gazes at me with an unreadable expression.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_free_talk"
    },
    "day2_yuna_free_talk": {
        type: "free_talk",
        name: "Yuna",
        text: "\"...Do you have questions for me? Or do you want to know more about this school?\"",
        context: "Quiet library annex backyard, private conversation with the mysterious Yuna. Keep the conversation going actively until it's finished. After the conversation, Yuna will talk about the school's secrets and suggest that there is something she only wants to show the protagonist. ONLY at the final turn of the conversation, please create a mysterious atmosphere and stimulate the protagonist's curiosity.",
        personality: "Mysterious, cold, and secretive. She feels a strange interest in the protagonist.",
        character: "assets/images/characters/yuna_nomal.png",
        affinityChar: "Yuna",
        affinityBranches: [
            { minAffinity: 20, next: "day2_yuna_talk_branch_high" },
            { minAffinity: 0, next: "day2_yuna_talk_branch" },
            { minAffinity: -100, next: "day2_yuna_talk_branch_low" }
        ],
        next: "day2_yuna_talk_branch"
    },
    "day2_yuna_talk_branch_high": {
        name: "Me",
        text: "(Yuna's expression softens as she looks at me.)",
        branches: [
            { next: "day2_yuna_talk_2_met_high", condition: "metYuna" },
            { next: "day2_yuna_talk_2_new_high" }
        ]
    },
    "day2_yuna_talk_branch_low": {
        name: "Me",
        text: "(Yuna gazes at me with cold, disappointed eyes.)",
        branches: [
            { next: "day2_yuna_talk_2_met_low", condition: "metYuna" },
            { next: "day2_yuna_talk_2_new_low" }
        ]
    },
    "day2_yuna_talk_2_met_high": {
        name: "Me",
        text: "(Yuna says she feels at ease talking to me. She mentions the 'secret' and says there's something she only wants to show me.)",
        character: "assets/images/characters/yuna_smile.png",
        choices: [
            { text: "What is it? I'm curious.", next: "day2_yuna_secret_high", stats: { Yuna: { affinity: 5 } } },
            { text: "I'm more interested in talking to you.", next: "day2_yuna_normal_high", stats: { Yuna: { affinity: 4 } } }
        ]
    },
    "day2_yuna_talk_2_met_low": {
        name: "Me",
        text: "(Yuna's gaze is icy. She says I might not handle the truth, but tells me to follow her anyway since we promised.)",
        character: "assets/images/characters/yuna_nomal.png",
        choices: [
            { text: "Show me. I can handle it.", next: "day2_yuna_secret_low", stats: { Yuna: { affinity: 5 } } },
            { text: "I'm not interested in secrets. I'll pass.", next: "day2_yuna_normal_low", stats: { Yuna: { affinity: 4 } } }
        ]
    },
    "day2_yuna_talk_2_new_high": {
        name: "Me",
        text: "(Yuna says she feels a strange pull toward me. She mentions a deep secret in this school and wants to show me.)",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "metYuna",
        choices: [
            { text: "Are you the Yuna from the note? What secret?", next: "day2_yuna_new_name_ask_high", stats: { Yuna: { affinity: 5 } } },
            { text: "I just came because of the note. Who are you?", next: "day2_yuna_new_name_ask_high", stats: { Yuna: { affinity: 3 } } }
        ]
    },
    "day2_yuna_talk_2_new_low": {
        name: "Me",
        text: "(Yuna's eyes are cold. She says I don't look like I can handle the truth, but tells me to follow her since I'm here.)",
        character: "assets/images/characters/yuna_nomal.png",
        setFlag: "metYuna",
        choices: [
            { text: "What's the secret? Show me.", next: "day2_yuna_new_name_ask_low", stats: { Yuna: { affinity: 5 } } },
            { text: "I'm leaving. This feels weird.", next: "day2_yuna_new_name_ask_low", stats: { Yuna: { affinity: 3 } } }
        ]
    },
    "day2_yuna_talk_branch": {
        name: "Me",
        text: "(Yuna looks at me and begins to speak.)",
        branches: [
            { next: "day2_yuna_talk_2_met_normal", condition: "metYuna" },
            { next: "day2_yuna_talk_2_new_normal" }
        ]
    },
    "day2_yuna_talk_2_met_normal": {
        name: "Me",
        text: "(Yuna mentions the secret she told me yesterday and says she has something to show me.)",
        character: "assets/images/characters/yuna_nomal.png",
        choices: [
            { text: "What is it? I want to see.", next: "day2_yuna_secret_normal", stats: { Yuna: { affinity: 5 } } },
            { text: "I just wanted to talk to you.", next: "day2_yuna_normal_normal", stats: { Yuna: { affinity: 4 } } }
        ]
    },
    "day2_yuna_talk_2_new_normal": {
        name: "Me",
        text: "(Yuna says I must be curious about her. She offers to show me a deep secret of the school.)",
        character: "assets/images/characters/yuna_nomal.png",
        setFlag: "metYuna",
        choices: [
            { text: "Who are you? And what secret?", next: "day2_yuna_new_name_ask_normal", stats: { Yuna: { affinity: 5 } } }
        ]
    },
    "day2_yuna_new_name_ask_high": {
        name: "Yuna",
        text: "(She bows her head shyly.) \"...By the way, what's your name? I felt drawn to you enough to share this secret. I want to know you.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_yuna_new_name_share_high"
    },
    "day2_yuna_new_name_share_high": {
        name: "Me",
        text: "\"My name is {name}.\"",
        setFlag: "knowsName_Yuna",
        next: "day2_yuna_secret_high"
    },
    "day2_yuna_new_name_ask_low": {
        name: "Yuna",
        text: "(She asks coldly.) \"...I should probably know your name before we go further. What is it?\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_new_name_share_low"
    },
    "day2_yuna_new_name_share_low": {
        name: "Me",
        text: "\"My name is {name}.\"",
        setFlag: "knowsName_Yuna",
        next: "day2_yuna_secret_low"
    },
    "day2_yuna_new_name_ask_normal": {
        name: "Yuna",
        text: "\"...I forgot to ask your name. I only wrote mine on the note.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_new_name_share_normal"
    },
    "day2_yuna_new_name_share_normal": {
        name: "Me",
        text: "\"My name is {name}.\"",
        setFlag: "knowsName_Yuna",
        next: "day2_yuna_secret_normal"
    },
    "day2_yuna_secret_high": {
        name: "Yuna",
        text: "(Yuna gently interlocks her fingers with mine. I can feel her heart through her warm hand.)",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "visitedWarehouseAtLunch",
        next: "day2_yuna_secret_2_high"
    },
    "day2_yuna_secret_2_high": {
        name: "Yuna",
        text: "\"I think... you're the one who can share this burden with me. {name}, will you follow me? The world ahead is different from what you know.\"",
        character: "assets/images/characters/yuna_smile.png",
        choices: [
            { text: "I'll be with you. Let's see it together.", next: "day2_yuna_secret_read_high", stats: { Yuna: { affinity: 20 } } },
            { text: "I'm sorry, I can't handle this yet.", next: "day2_yuna_secret_stop_high", stats: { Yuna: { affinity: -10 } } }
        ]
    },
    "day2_yuna_secret_low": {
        name: "Yuna",
        text: "(Yuna grabs my sleeve and pulls me forward.)",
        character: "assets/images/characters/yuna_nomal.png",
        setFlag: "visitedWarehouseAtLunch",
        next: "day2_yuna_secret_2_low"
    },
    "day2_yuna_secret_2_low": {
        name: "Yuna",
        text: "\"Just watch. Not like you'll understand, but you're here already. Don't get in my way.\"",
        character: "assets/images/characters/yuna_nomal.png",
        choices: [
            { text: "Show me. what is it?", next: "day2_yuna_secret_read_low", stats: { Yuna: { affinity: 5 } } },
            { text: "I'm out. This is too dangerous.", next: "day2_yuna_secret_stop_low", stats: { Yuna: { affinity: -20 } } }
        ]
    },
    "day2_yuna_secret_normal": {
        name: "Yuna",
        text: "(Yuna leads me toward the old warehouse. Her cold touch makes me shiver.)",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "visitedWarehouseAtLunch",
        next: "day2_yuna_secret_2_normal"
    },
    "day2_yuna_secret_2_normal": {
        name: "Yuna",
        text: "\"Inside are records the school has hidden for a long time. Once you see them... everything will change.\"",
        character: "assets/images/characters/yuna_smile.png",
        choices: [
            { text: "Can I see them too?", next: "day2_yuna_secret_read", stats: { Yuna: { affinity: 15 } } },
            { text: "Is it safe? Maybe we should leave it.", next: "day2_yuna_secret_stop", stats: { Yuna: { affinity: -20 } } },
            { text: "Why are you doing this, Yuna?", next: "day2_yuna_secret_why", stats: { Yuna: { affinity: 3 } } }
        ]
    },
    "day2_yuna_secret_read": {
        type: "free_talk",
        affinityChar: "Yuna",
        affinityBranches: [
            { minAffinity: 25, next: "day2_yuna_secret_read_high" },
            { minAffinity: -999, next: "day2_yuna_secret_read_low" }
        ]
    },
    "day2_yuna_secret_read_high": {
        name: "Yuna",
        text: "\"Thank you, {name}. With you, I'm not afraid. Shall we?\"",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_read_low": {
        name: "Yuna",
        text: "\"You really want to see? Don't regret it. I won't help you if you start crying.\"",
        character: "assets/images/characters/yuna_nomal.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_stop_high": {
        name: "Yuna",
        text: "\"...I see. You must be scared. I understand. Tell me if you change your mind later.\"",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_stop_low": {
        name: "Yuna",
        text: "\"I knew it. You're a coward. Don't show your face again.\"",
        character: "assets/images/characters/yuna_nomal.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_why_high": {
        name: "Yuna",
        text: "\"Curious? Honestly... I'm not sure. But since the day you transferred, I had a feeling you'd be the one. Funny, right?\"",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_why_low": {
        name: "Yuna",
        text: "\"What's it to you? Just watch or leave. No need to poke your nose into my business.\"",
        character: "assets/images/characters/yuna_nomal.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_normal_high": {
        name: "Yuna",
        text: "\"You came just to talk to me...? Hehe, you really say sweet things. Fine, stay with me a little longer then.\"",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_normal_low": {
        name: "Yuna",
        text: "\"To talk? Pathetic. Don't waste my time and get lost.\"",
        character: "assets/images/characters/yuna_nomal.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_normal_normal": {
        name: "Yuna",
        text: "\"...Is that so? You're a strange one. Most people are afraid. Fine, let's just stay like this for today.\"",
        character: "assets/images/characters/yuna_nomal.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_lunch_end": {
        name: "Me",
        text: "(I head back. Her mysterious words haunt me, making it hard to focus on class.)",
        next: "day2_afternoon_class"
    },
    "day2_lunch_dain": {
        name: "Me",
        text: "(I open the gym. Dain, practicing hard, runs over with a wide grin.)",
        character: "assets/images/characters/dain_laugh.png",
        branches: [
            { next: "day2_dain_lunch_talk", condition: "metDain" },
            { next: "day2_lunch_dain_new" }
        ]
    },
    "day2_lunch_dain_new": {
        name: "???",
        text: "\"Oh! A new face! You're the transfer student, right? I'm Dain from the volleyball club!\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "metDain",
        next: "day2_lunch_dain_new_name_ask"
    },
    "day2_lunch_dain_new_name_ask": {
        name: "Dain",
        text: "\"By the way, what's your name? I'm the only one who didn't introduce myself properly!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_lunch_dain_new_name_share"
    },
    "day2_lunch_dain_new_name_share": {
        name: "Me",
        text: "\"My name is {name}.\"",
        setFlag: "knowsName_Dain",
        next: "day2_dain_lunch_talk_new"
    },
    "day2_dain_lunch_talk_new": {
        name: "Dain",
        text: "\"Oh! {name}? Cool name! Great, to celebrate, lunch is on me! Let's go to the snack bar!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_dain_store"
    },
    "day2_dain_lunch_talk": {
        name: "Dain",
        text: "\"Oh! You really came! Great, lunch is on me today! Let's go to the snack bar!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_dain_store"
    },
    "day2_dain_store": {
        name: "Me",
        text: "(We head to the snack bar. It's packed with students.)",
        background: "assets/images/background/store.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_dain_free_talk"
    },
    "day2_dain_free_talk": {
        type: "free_talk",
        name: "Dain",
        text: "\"Wow, it's crowded! Right? Let's chat while we wait. Anything you want to know?\"",
        context: "In front of the crowded school store, standing in line with Dain to buy snacks. Keep the conversation going actively until it's finished. After the conversation, you will choose snacks at the store. ONLY at the final turn of the conversation, please naturally lead into the next situation by mentioning that it's almost our turn or by deciding what to eat.",
        personality: "Easygoing and energetic volleyball ace. She enjoys spending time with the protagonist.",
        character: "assets/images/characters/dain_nomal.png",
        affinityChar: "Dain",
        affinityBranches: [
            { minAffinity: 25, next: "day2_dain_store_choices_high" },
            { minAffinity: 0, next: "day2_dain_store_choices" },
            { minAffinity: -100, next: "day2_dain_store_choices_low" }
        ],
        next: "day2_dain_store_choices"
    },
    "day2_dain_store_choices_high": {
        name: "Me",
        text: "(Waiting wasn't boring at all with Dain. It was finally our turn, and she told me to pick whatever I wanted.)",
        character: "assets/images/characters/dain_laugh.png",
        choices: [
            { text: "I'll buy yours too. What do you want?", next: "day2_dain_store_buy_high", stats: { Dain: { affinity: 5 } } },
            { text: "It's so crowded... Let's just go to the rooftop.", next: "day2_dain_store_rooftop_high", stats: { Dain: { affinity: 3 } } },
            { text: "Dain, look! Last pizza bread! I'll get it!", next: "day2_dain_store_race_high", stats: { Dain: { affinity: 8 } } }
        ]
    },
    "day2_dain_store_choices_low": {
        name: "Me",
        text: "(Dain seems grumpy. I must have been too prickly. She sighs and tells me to just pick something fast.)",
        character: "assets/images/characters/dain_sad.png",
        choices: [
            { text: "I'll buy yours. What do you want?", next: "day2_dain_store_buy_low", stats: { Dain: { affinity: 5 } } },
            { text: "Too crowded. Rooftop?", next: "day2_dain_store_rooftop_low", stats: { Dain: { affinity: 3 } } },
            { text: "I'll grab that bread over there!", next: "day2_dain_store_race_low", stats: { Dain: { affinity: 8 } } }
        ]
    },
    "day2_dain_store_choices": {
        name: "Me",
        text: "(Our turn came. Dain asks what I want to eat.)",
        choices: [
            { text: "I'll buy yours. What do you want?", next: "day2_dain_store_buy_normal", stats: { Dain: { affinity: 5 } } },
            { text: "It's crowded. Let's go to the rooftop.", next: "day2_dain_store_rooftop_normal", stats: { Dain: { affinity: 3 } } },
            { text: "I'll get the pizza bread!", next: "day2_dain_store_race_normal", stats: { Dain: { affinity: 8 } } }
        ]
    },
    "day2_dain_store_buy_high": {
        name: "Dain",
        text: "\"Hey~ {name}! I said it's on me! Hehe, but thanks. How about you buy today, and I'll buy something even better tomorrow? Deal!\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_buy_low": {
        name: "Dain",
        text: "\"...You're buying? Fine, whatever. Just get me a milk too.\"",
        character: "assets/images/characters/dain_angry.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_buy_normal": {
        name: "Dain",
        text: "\"Hey, I said it's on me! Just enjoy it today, okay?\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_rooftop_high": {
        name: "Dain",
        text: "\"Rooftop? Great idea! It'll be more private too. Let's go!\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_rooftop_low": {
        name: "Dain",
        text: "\"...Fine. Let's just go. It's too noisy here anyway.\"",
        character: "assets/images/characters/dain_sad.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_rooftop_normal": {
        name: "Dain",
        text: "\"Good thinking. Let's get out of this crowd and head up!\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_race_high": {
        name: "Dain",
        text: "\"Haha! Look at you go! Okay, I'll get the drinks then! Meet you at the table!\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_race_low": {
        name: "Dain",
        text: "\"...Suit yourself. Don't trip.\"",
        character: "assets/images/characters/dain_sad.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_race_normal": {
        name: "Dain",
        text: "\"Oh! Then I'll get the milk! Good luck!\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_lunch_end": {
        name: "Me",
        text: "(After a quick lunch with Dain, I head back. Her energy is contagious.)",
        next: "day2_afternoon_class"
    },
    "day2_lunch_nurse": {
        name: "Me",
        text: "(I visit the nurse's office. She greeted me with a seductive smile.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_2"
    },
    "day2_lunch_nurse_2": {
        name: "Nurse",
        text: "\"{name}! Tired already? You can rest here as long as you want.\"",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "Can I take a short nap here?", next: "day2_lunch_nurse_sleep", stats: { Nurse: { affinity: 10 } } },
            { text: "I just wanted to see you for a moment.", next: "day2_lunch_nurse_talk", stats: { Nurse: { affinity: 5 } } }
        ]
    },
    "day2_lunch_nurse_sleep": {
        name: "Nurse",
        text: "\"Of course. Lie down. I'll make sure no one disturbs your sleep.\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_end"
    },
    "day2_lunch_nurse_talk": {
        name: "Nurse",
        text: "\"Hehe, you're so sweet. Want to talk to me instead of resting? That's fine too.\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_end"
    },
    "day2_lunch_nurse_end": {
        name: "Me",
        text: "(After a peaceful time in the nurse's office, I head back. I feel much more relaxed.)",
        next: "day2_afternoon_class"
    },
    "day2_afternoon_class": {
        name: "Me",
        text: "(The afternoon classes drag on, but I can't stop thinking about what happened earlier.)",
        background: "assets/images/background/room_school.png",
        next: "day2_afterschool_start"
    }
});
