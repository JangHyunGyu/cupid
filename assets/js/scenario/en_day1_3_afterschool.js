if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

Object.assign(SCENARIO[1], {
    "after_school_start": {
        name: "Me",
        text: "(Classes are over! The bell for after school rings out.)",
        background: "assets/images/background/room_school.png",
        character: null,
        sunset: true,
        next: "after_school_start_2"
    },
    "after_school_start_2": {
        name: "Me",
        text: "(I pack my bag and leave the classroom. The hallway is full of kids' lively footsteps.)",
        sunset: true,
        next: "after_school_start_3"
    },
    "after_school_start_3": {
        name: "Me",
        text: "(It's been a long day. Should I go straight home... or find the people I met earlier?)",
        sunset: true,
        choices: [
            { text: "Stop by the student council room where Seoyeon is.", next: "after_seoyeon" },
            { text: "Head to the library annex where Yuna was.", next: "after_yuna", condition: "metYuna" },
            { text: "Look around the quiet parts of the school more.", next: "after_yuna_new", excludeCondition: "metYuna" },
            { text: "Go see Dain practicing in the gym.", next: "after_dain", condition: "metDain" },
            { text: "Head to the gym where lively sounds are coming from.", next: "after_dain_new", excludeCondition: "metDain" },
            { text: "Stop by the nurse's office to say goodbye to the teacher.", next: "after_nurse", condition: "metNurse" },
            { text: "Go check out the nurse's office.", next: "after_nurse_new", excludeCondition: "metNurse" },
            { text: "Go see the homeroom teacher in the faculty room.", next: "after_teacher" },
            { text: "I'm tired today, so I'll go straight home.", next: "after_home" }
        ]
    },
    "after_teacher": {
        name: "Me",
        text: "(When I open the faculty room door, I see the homeroom teacher organizing documents.)",
        background: "assets/images/background/teacher_room.png",
        character: "assets/images/characters/teacher.png",
        sunset: true,
        next: "after_teacher_2"
    },
    "after_teacher_2": {
        name: "Homeroom Teacher",
        text: "\"Oh, {name}! What brings you to the faculty room at this hour?\"",
        character: "assets/images/characters/teacher.png",
        sunset: true,
        next: "after_teacher_3"
    },
    "after_teacher_3": {
        name: "Homeroom Teacher",
        text: "\"Since it's your first day, you must have many questions. Is there anything I can help you with?\"",
        character: "assets/images/characters/teacher.png",
        sunset: true,
        choices: [
            { text: "Aren't you going home, Teacher? Can I help you?", next: "after_teacher_help", stats: { Teacher: { affinity: 5 } } },
            { text: "I just wanted to see your face one more time.", next: "after_teacher_miss", stats: { Teacher: { affinity: 15 } } },
            { text: "I want to know more about the school facilities.", next: "after_teacher_info", stats: { Teacher: { affinity: 3 } } }
        ]
    },
    "after_teacher_help": {
        name: "Homeroom Teacher",
        text: "\"Hehe, thank you for the thought. But this is something I have to do. You should go home and rest, {name}.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "after_teacher_contact"
    },
    "after_teacher_miss": {
        name: "Homeroom Teacher",
        text: "\"Oh my... {name}, you really are something. I'm happy you like me that much... Hehe.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "after_teacher_contact"
    },
    "after_teacher_info": {
        name: "Homeroom Teacher",
        text: "\"Yes, our school has a long history, so there are many hidden places. I'll show you around slowly later.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "after_teacher_contact"
    },
    "after_teacher_contact": {
        name: "Homeroom Teacher",
        text: "\"Ah, right. If anything urgent happens, contact me. I'll give you my number.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        branches: [
            { next: "after_home", condition: "has_number_teacher" },
            { next: "after_teacher_contact_ask" }
        ]
    },
    "after_teacher_contact_ask": {
        name: "Homeroom Teacher",
        text: "\"Here, this is my number. Save it.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        setFlags: ["has_number_teacher", "has_any_contact"],
        stats: { Teacher: { affinity: 5 } },
        next: "after_home"
    },
    "after_seoyeon": {
        name: "Seoyeon",
        text: "(When I open the student council room door, I see Seoyeon struggling amidst a mountain of documents.)",
        background: "assets/images/background/student_room.png",
        character: "assets/images/characters/seyoun_nomal.png",
        sunset: true,
        next: "after_seoyeon_2"
    },
    "after_seoyeon_2": {
        name: "Seoyeon",
        text: "(As I enter, Seoyeon looks up in surprise. She puts down her pen and stretches.)",
        character: "assets/images/characters/seyoun_nomal.png",
        sunset: true,
        next: "after_seoyeon_3"
    },
    "after_seoyeon_3": {
        name: "Seoyeon",
        text: "\"Oh? {name}! What brings you here at this time? Don't tell me... were you waiting for me?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        sunset: true,
        choices: [
            { text: "Yeah, I wanted to go home together. Can I help?", next: "after_seoyeon_help", setFlag: "helpedSeoyeon", stats: { Seoyeon: { affinity: 5 } } },
            { text: "I just wanted to see your face. Aren't you overdoing it?", next: "after_seoyeon_worry", stats: { Seoyeon: { affinity: 3 } } },
            { text: "Don't get me wrong. I just took a wrong turn.", next: "after_seoyeon_rude", stats: { Seoyeon: { affinity: -30 } } }
        ]
    },
    "after_seoyeon_rude": {
        name: "Seoyeon",
        text: "(Seoyeon's expression hardens instantly. She turns her gaze back to the documents.)",
        character: "assets/images/characters/seyoun_angry.png",
        sunset: true,
        next: "after_seoyeon_rude_2"
    },
    "after_seoyeon_rude_2": {
        name: "Seoyeon",
        text: "\"Ah... really? Then could you leave without disturbing me? I'm a bit busy right now.\"",
        character: "assets/images/characters/seyoun_angry.png",
        sunset: true,
        next: "after_home"
    },
    "after_seoyeon_help": {
        name: "Seoyeon",
        text: "(She opens her eyes wide as if moved. Soon, she gives me a bright smile and offers me the seat next to her.)",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        next: "after_seoyeon_help_dialogue"
    },
    "after_seoyeon_help_dialogue": {
        name: "Seoyeon",
        text: "\"Really? Thank you! If you help me, I think I can finish it quickly. Now, can you help me sort these documents?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        next: "after_seoyeon_help_action"
    },
    "after_seoyeon_help_action": {
        name: "Seoyeon",
        text: "(We feel a strange bond while organizing the documents in silence. Before we know it, the window is colored with the sunset.)",
        character: "assets/images/characters/seyoun_nomal.png",
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
        text: "(After finishing the work, we stopped by a small cafe in front of the school.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        sunset: true,
        next: "after_seoyeon_cafe_2"
    },
    "after_seoyeon_cafe_2": {
        name: "Seoyeon",
        text: "(Seoyeon takes a sip of her drink topped with whipped cream, a look of pure bliss on her face.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        sunset: true,
        next: "after_seoyeon_cafe_2_2"
    },
    "after_seoyeon_cafe_2_2": {
        name: "Seoyeon",
        text: "\"Haah~ I feel alive again. Thank you so much for today, {name}.\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        sunset: true,
        next: "after_seoyeon_cafe_3"
    },
    "after_seoyeon_cafe_3": {
        name: "Seoyeon",
        text: "\"Thanks to you, I actually enjoyed finishing the student council work. Could we... walk home together tomorrow too?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        sunset: true,
        choices: [
            { text: "Of course. I'll be waiting for you.", next: "after_seoyeon_promise", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Hmm, depends on my mood? (Tease)", next: "after_seoyeon_tease", stats: { Seoyeon: { affinity: 4 } } }
        ]
    },
    "after_seoyeon_promise": {
        name: "Seoyeon",
        text: "(She beams, holding out her pinky finger with a playful glint in her eyes.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "after_seoyeon_promise_2"
    },
    "after_seoyeon_promise_2": {
        name: "Seoyeon",
        text: "\"It's a promise! No breaking it! See you tomorrow, {name}. Get home safe!\"",
        character: "assets/images/characters/seyoun_shy.png",
        branches: [
            { next: "after_home", condition: "has_number_seyoun" },
            { next: "after_seoyeon_contact_ask" }
        ]
    },
    "after_seoyeon_tease": {
        name: "Seoyeon",
        text: "(She pouts, puffing out her cheeks as she glares at me.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "after_seoyeon_tease_2"
    },
    "after_seoyeon_tease_2": {
        name: "Seoyeon",
        text: "\"Hmph... You're so mean! But you'd better show up. If you don't, I'll use my authority as president to punish you! Hehe, just kidding. See you tomorrow!\"",
        character: "assets/images/characters/seyoun_pout.png",
        branches: [
            { next: "after_home", condition: "has_number_seyoun" },
            { next: "after_seoyeon_contact_ask" }
        ]
    },
    "after_seoyeon_contact_ask": {
        name: "Seoyeon",
        text: "\"Oh, right! We haven't exchanged contact info yet, have we? If you don't mind... could I have your number? I'd love to message you later!\"",
        character: "assets/images/characters/seyoun_shy.png",
        choices: [
            { text: "Sure, here's my number.", next: "after_seoyeon_contact_success", setFlags: ["has_number_seyoun", "has_any_contact"] },
            { text: "Sorry, maybe later.", next: "after_seoyeon_contact_fail" }
        ]
    },
    "after_seoyeon_contact_success": {
        name: "Seoyeon",
        text: "\"Thanks! I'll definitely message you later then. Get home safe!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "after_home"
    },
    "after_seoyeon_contact_fail": {
        name: "Seoyeon",
        text: "\"Oh... okay! I guess I was a bit sudden. Sorry about that. See you at school tomorrow!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        stats: { Seoyeon: { affinity: -10 } },
        next: "after_home"
    },
    "after_seoyeon_worry": {
        name: "Seoyeon",
        text: "(She scratches her head, a shy smile spreading across her face.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_worry_2"
    },
    "after_seoyeon_worry_2": {
        name: "Seoyeon",
        text: "\"Hehe, you caught me. Being president is more work than I bargained for. But knowing you're worried about me... I feel like I can take on anything! Just wait a bit, I'll finish up and we can leave together!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe"
    },
    "after_yuna_new": {
        name: "Me",
        text: "(Searching for a quiet spot, I find myself at the old library annex. In the fading sunset, a girl sits by the window, bathed in a golden glow.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_new_2"
    },
    "after_yuna_new_2": {
        name: "???",
        text: "\"Oh? Coming here at this hour... You're a curious one. I'm Yuna.\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        setFlag: "metYuna",
        next: "after_yuna_3"
    },
    "after_yuna": {
        name: "Yuna",
        text: "(The library annex is even more silent and shadowed than before. A girl sits by the window, her gaze fixed on the setting sun.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_2"
    },
    "after_yuna_2": {
        name: "Yuna",
        text: "(She knows I'm here, yet she continues to stare out the window for a long, quiet moment.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_3"
    },
    "after_yuna_3": {
        name: "Yuna",
        text: "\"Ah, hello... I love how still the library gets after school. What brings you to my sanctuary?\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        branches: [
            { next: "yuna_after_talk", condition: "knowsName_Yuna" },
            { next: "yuna_name_share_pre" }
        ]
    },
    "yuna_after_talk": {
        name: "Yuna",
        text: "\"We meet again, {name}. It's still quiet here... and still heavy. Don't you feel that weight?\"",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "yuna_after_choices"
    },
    "yuna_after_choices": {
        name: "Yuna",
        text: "\"Are you curious about me? Or... did you just come because I'm a novelty?\"",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        choices: [
            { 
                text: "Tell me about the secrets of this school.", 
                next: "after_yuna_secret",
                affinityChar: "Yuna",
                affinityBranches: [
                    { minAffinity: 30, next: "after_yuna_secret_deep" },
                    { maxAffinity: 10, next: "after_yuna_secret_fail" }
                ]
            },
            { text: "Wasn't the lunch delicious today?", next: "after_yuna_boring" },
            { text: "Have you been here since morning?", next: "after_yuna_rude" }
        ]
    },
    "yuna_name_share_pre": {
        name: "Me",
        text: "\"My name is '{name}'. I... I want to get to know you better.\"",
        setFlag: "knowsName_Yuna",
        next: "yuna_name_share"
    },
    "yuna_name_share": {
        name: "Yuna",
        text: "(She whispers my name, testing the sound of it.) \"...{name}. I'll remember that. Though names... they might not mean much in a place like this.\"",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "yuna_after_choices"
    },
    "after_yuna_know": {
        name: "Yuna",
        text: "(She slowly turns to face me, a ghost of a smile playing on her lips.)",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "after_yuna_know_2"
    },
    "after_yuna_know_2": {
        name: "Yuna",
        text: "(She takes my hand, her touch light but firm, and leads me toward the rooftop.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_yuna_know_2_2"
    },
    "after_yuna_know_2_2": {
        name: "Yuna",
        text: "\"You want to know about me...? Hehe, I can't tell if you're brave or just reckless.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_yuna_know_3"
    },
    "after_yuna_know_3": {
        name: "Yuna",
        text: "\"Fine. The night is young. I'll tell you... piece by piece. Follow me.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_yuna_move_rooftop"
    },
    "after_yuna_move_rooftop": {
        name: "Me",
        text: "(I follow her up the creaking stairs to the rooftop, where the cool night air greets us.)",
        background: "assets/images/background/top_school.png",
        character: null,
        night: true,
        next: "after_yuna_rooftop"
    },
    "after_yuna_rooftop": {
        name: "Yuna",
        text: "(From up here, the school looks like a different world entirely, draped in shadows.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "after_yuna_rooftop_2"
    },
    "after_yuna_rooftop_2": {
        name: "Yuna",
        text: "(Yuna leans against the railing, her eyes fixed on me.)",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "after_yuna_rooftop_2_2"
    },
    "after_yuna_rooftop_2_2": {
        name: "Yuna",
        text: "\"People see this school as perfect. But perfection is an illusion.\"",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        next: "after_yuna_rooftop_3"
    },
    "after_yuna_rooftop_3": {
        name: "Yuna",
        text: "\"Beneath the surface, things are rotting. This heavy atmosphere... haven't you felt it? That something is... wrong?\"",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        choices: [
            { text: "If I'm with you, I'm not afraid of anything.", next: "after_yuna_together" },
            { text: "The darkness... it's a bit unsettling.", next: "after_yuna_scared" }
        ]
    },
    "after_yuna_together": {
        name: "Yuna",
        text: "(She squeezes my hand, a sad, knowing smile on her face.)",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        next: "after_yuna_together_2"
    },
    "after_yuna_together_2": {
        name: "Yuna",
        text: "\"What a foolish thing to say... but I don't hate it. Then... shall we become partners in crime? Sharing each other's secrets?\"",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        next: "yuna_contact_exchange"
    },
    "yuna_contact_exchange": {
        name: "Yuna",
        text: "(She steps back from the railing and holds out her phone with a nonchalant air.) \"If we're sharing secrets... we'll need a way to talk. Put your number in.\"",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        choices: [
            { text: "Yes, I want to know everything about you.", next: "yuna_contact_success", setFlags: ["has_number_yuna", "has_any_contact"] },
            { text: "Sorry, I'm not ready for that yet.", next: "yuna_contact_fail", stats: { Yuna: { affinity: -25 } } }
        ]
    },
    "yuna_contact_success": {
        name: "Yuna",
        text: "(She saves the number, a faint smile touching her lips.) \"...Done. We're connected now. When I call... you'd better come.\"",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        stats: { Yuna: { affinity: 15 } },
        next: "after_home"
    },
    "yuna_contact_fail": {
        name: "Yuna",
        text: "(Her gaze turns cold as she tucks her phone away.) \"...I see. I won't force you. But remember, opportunities like this don't come twice.\"",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "after_home"
    },
    "after_yuna_scared": {
        name: "Yuna",
        text: "(She lets out a cold laugh and releases my hand, turning back to the shadows.)",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "after_yuna_scared_2"
    },
    "after_yuna_scared_2": {
        name: "Yuna",
        text: "\"Hehe, of course. It's a heavy burden for a normal student. Go home. Don't try to dig any deeper.\"",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        next: "after_home"
    },
    "after_yuna_secret": {
        name: "Yuna",
        text: "(She puts a finger to her lips, signaling for silence.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_yuna_secret_2"
    },
    "after_yuna_secret_2": {
        name: "Yuna",
        text: "\"Shh... even walls have ears. Once you know the truth, you can never go back to your ordinary life. If you're still okay with that... take my hand.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_yuna_know"
    },
    "after_yuna_secret_deep": {
        name: "Yuna",
        text: "(Yuna closes her book and stares at me. Her eyes seem to glow with a faint, eerie violet light.) \"...The truth? Are you prepared to carry that burden? Fine, if your eyes are sincere... follow me. Promise you won't tell anyone.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 10 } },
        next: "after_yuna_rooftop"
    },
    "after_yuna_secret_fail": {
        name: "Yuna",
        text: "(Yuna gives a cold smile.) \"The truth... Hehe, you look too light to bear its weight. It's fine to be curious, but don't dig too deep. You might get hurt.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: -20 } },
        next: "after_home"
    },
    "after_yuna_boring": {
        name: "Yuna",
        text: "(Yuna sighs as if disappointed and turns her gaze back to her book.)",
        character: "assets/images/characters/yuna_nomal.png",
        stats: { Yuna: { affinity: -10 } },
        next: "after_yuna_boring_2"
    },
    "after_yuna_boring_2": {
        name: "Yuna",
        text: "\"School lunch...? Go talk about such mundane things with the others. I'm busy, so would you mind leaving?\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_home"
    },
    "after_yuna_rude": {
        name: "Yuna",
        text: "(She closes her book and looks at me coldly. The air seems to freeze instantly.)",
        character: "assets/images/characters/yuna_nomal.png",
        stats: { Yuna: { affinity: -15 } },
        next: "after_yuna_rude_2"
    },
    "after_yuna_rude_2": {
        name: "Yuna",
        text: "\"Since morning...? Hehe, you really don't know anything yet. This strange energy enveloping the school... can't you feel it? Ignorance can be a sin sometimes. Get out of my sight.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_home"
    },
    "after_dain_new": {
        name: "Me",
        text: "(Drawn by the sounds of practice, I head to the gym. Through the sunset-lit windows, I see the volleyball team in action. One girl stands out from the rest.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        sunset: true,
        next: "after_dain_new_intro"
    },
    "after_dain_new_intro": {
        name: "???",
        text: "\"Hey there! I'm Dain. You're the new transfer, right?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        setFlag: "metDain",
        next: "after_dain_new_name_ask"
    },
    "after_dain_new_name_ask": {
        name: "Dain",
        text: "\"By the way, what's your name? I realized I haven't asked yet!\"",
        character: "assets/images/characters/dain_sweat.png",
        next: "after_dain_new_name_share"
    },
    "after_dain_new_name_share": {
        name: "Me",
        text: "\"I'm {name}. I'm in Class 2-3.\"",
        setFlag: "knowsName_Dain",
        next: "after_dain_2"
    },
    "after_dain": {
        name: "Dain",
        text: "(In the gym, Dain is mid-air, delivering a powerful spike. Her energy is infectious, lighting up the room.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        sunset: true,
        next: "after_dain_2"
    },
    "after_dain_2": {
        name: "Dain",
        text: "(During a break, she spots me and jogs over, wiping sweat with a towel and grinning.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        next: "dain_free_talk"
    },
    "dain_free_talk": {
        type: "free_talk",
        name: "Dain",
        text: "\"Whoa, {name}! You're even cooler up close! Got any questions for me? Sports, school, anything!\"",
        context: "Talking to Dain in the gym at sunset after her practice. After the conversation, Dain will suggest finishing her last practice set and going to grab something delicious to eat together. At the end of the conversation, please naturally lead into the next situation by mentioning that you need to finish practice or that you're hungry.",
        personality: "The easygoing ace of the volleyball club. Loves sports, friendly, and high-energy.",
        character: "assets/images/characters/dain_nomal.png",
        affinityChar: "Dain",
        affinityBranches: [
            { minAffinity: 20, next: "after_dain_3_high" },
            { minAffinity: -10, next: "after_dain_3" },
            { minAffinity: -100, next: "after_dain_3_low" }
        ],
        next: "after_dain_3"
    },
    "after_dain_3_high": {
        name: "Me",
        text: "(I lost track of time talking to Dain. Her bright energy is infectious. She suggested finishing her last practice set and then going to grab something delicious to eat together.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        choices: [
            { text: "Go for it! I'll be cheering you on!", next: "after_dain_cheer_high", stats: { Dain: { affinity: 5 } } },
            { text: "Need a hand? Toss me the ball!", next: "after_dain_help_high", stats: { Dain: { affinity: 15 } } },
            { text: "I'm pretty beat... can we go now?", next: "after_dain_tired_high", stats: { Dain: { affinity: -20 } } }
        ]
    },
    "after_dain_3_low": {
        name: "Me",
        text: "(Dain doesn't look happy. I must have said something insensitive while she was already exhausted from practice. She bluntly told me she's finishing her last set and that I can wait if I want.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_angry.png",
        sunset: true,
        choices: [
            { text: "Go for it! I'll be cheering you on!", next: "after_dain_cheer_low", stats: { Dain: { affinity: 5 } } },
            { text: "Need a hand? Toss me the ball!", next: "after_dain_help_low", stats: { Dain: { affinity: 5 } } },
            { text: "I'm pretty beat... can we go now?", next: "after_dain_tired_low", stats: { Dain: { affinity: -20 } } }
        ]
    },
    "after_dain_3": {
        name: "Me",
        text: "(I had a pleasant conversation with Dain. She asked me to wait a moment while she finishes her last practice set. We decided to go grab something to eat once she's done.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        choices: [
            { text: "Go for it! I'll be cheering you on!", next: "after_dain_cheer_normal", stats: { Dain: { affinity: 5 } } },
            { text: "Need a hand? Toss me the ball!", next: "after_dain_help_normal", stats: { Dain: { affinity: 15 } } },
            { text: "I'm pretty beat... can we go now?", next: "after_dain_tired_normal", stats: { Dain: { affinity: -20 } } }
        ]
    },
    "after_dain_tired_high": {
        name: "Dain",
        text: "(She can't hide her disappointment and briefly grabs my hand before letting go.)",
        character: "assets/images/characters/dain_shy.png",
        next: "after_dain_tired_high_2"
    },
    "after_dain_tired_high_2": {
        name: "Dain",
        text: "\"{name}, are you really going? I wanted to spend more time together... Ah, no! It's your first day, you must be exhausted. I'm sorry for holding you up. Go home and rest. Let's definitely eat something delicious tomorrow, okay?\"",
        character: "assets/images/characters/dain_shy.png",
        next: "after_home"
    },
    "after_dain_tired_low": {
        name: "Dain",
        text: "(She glares at me with cold eyes and picks up the ball again.)",
        character: "assets/images/characters/dain_angry.png",
        next: "after_dain_tired_low_2"
    },
    "after_dain_tired_low_2": {
        name: "Dain",
        text: "\"Fine, do whatever you want. I feel sorry for holding back a busy person. Go home or whatever.\"",
        character: "assets/images/characters/dain_angry.png",
        next: "after_home"
    },
    "after_dain_tired_normal": {
        name: "Dain",
        text: "(She looks a bit disappointed, but quickly nods with a smile.)",
        character: "assets/images/characters/dain_nomal.png",
        next: "after_dain_tired_normal_2"
    },
    "after_dain_tired_normal_2": {
        name: "Dain",
        text: "\"Oh... right. First day must be exhausting. Sorry, I got carried away. Let's call it a day. See you tomorrow!\"",
        character: "assets/images/characters/dain_nomal.png",
        next: "after_home"
    },
    "after_dain_tired": {
        name: "Dain",
        text: "(She looks a bit disappointed, but quickly nods with a smile.)",
        character: "assets/images/characters/dain_nomal.png",
        next: "after_dain_tired_2"
    },
    "after_dain_tired_2": {
        name: "Dain",
        text: "\"Oh... right. First day must be exhausting. Sorry, I got carried away. Let's call it a day. See you tomorrow!\"",
        character: "assets/images/characters/dain_nomal.png",
        next: "after_home"
    },
    "after_dain_help_high": {
        name: "Dain",
        text: "(Her face turns red as she looks at me with twinkling eyes.)",
        character: "assets/images/characters/dain_shy.png",
        next: "after_dain_help_high_2"
    },
    "after_dain_help_high_2": {
        name: "Dain",
        text: "\"R-really? You're going to help me? I'm so happy! Okay, toss it high to the net! I'll show you my best spike!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "after_dain_normal"
    },
    "after_dain_help_low": {
        name: "Dain",
        text: "(She looks at me with a skeptical expression.)",
        character: "assets/images/characters/dain_angry.png",
        next: "after_dain_help_low_2"
    },
    "after_dain_help_low_2": {
        name: "Dain",
        text: "\"You? Can you even catch the ball? Forget it, you'll just get hurt. Just stay there and watch.\"",
        character: "assets/images/characters/dain_angry.png",
        next: "after_dain_normal"
    },
    "after_dain_help_normal": {
        name: "Dain",
        text: "(Her eyes light up as she tosses me the ball.)",
        character: "assets/images/characters/dain_laugh.png",
        next: "after_dain_help_normal_2"
    },
    "after_dain_help_normal_2": {
        name: "Dain",
        text: "\"Oh! You're in? Awesome! Toss it high to the net! Here I come!\"",
        character: "assets/images/characters/dain_nomal.png",
        next: "after_dain_normal"
    },
    "after_dain_help": {
        name: "Dain",
        text: "(Her eyes light up as she tosses me the ball.)",
        character: "assets/images/characters/dain_laugh.png",
        next: "after_dain_help_2"
    },
    "after_dain_help_2": {
        name: "Dain",
        text: "\"Oh! You're in? Awesome! Toss it high to the net! Here I come!\"",
        character: "assets/images/characters/dain_active.png",
        next: "after_dain_normal"
    },
    "after_dain_cheer_high": {
        name: "Dain",
        text: "(She makes a big heart with her arms, grinning broadly.)",
        character: "assets/images/characters/dain_laugh.png",
        next: "after_dain_cheer_high_2"
    },
    "after_dain_cheer_high_2": {
        name: "Dain",
        text: "\"Hehe, with your support, I feel like I can spike anything! Thanks, {name}! Wait a moment, I'll finish this in style!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "after_dain_normal"
    },
    "after_dain_cheer_low": {
        name: "Dain",
        text: "(She turns around to focus on the ball, ignoring my cheer.)",
        character: "assets/images/characters/dain_nomal.png",
        next: "after_dain_cheer_low_2"
    },
    "after_dain_cheer_low_2": {
        name: "Dain",
        text: "\"...Cheering won't help if you don't mean it. Just stay quiet.\"",
        character: "assets/images/characters/dain_nomal.png",
        next: "after_dain_normal"
    },
    "after_dain_cheer_normal": {
        name: "Dain",
        text: "(She looks a bit flustered, rubbing her nose with a shy grin.)",
        character: "assets/images/characters/dain_nomal.png",
        next: "after_dain_cheer_normal_2"
    },
    "after_dain_cheer_normal_2": {
        name: "Dain",
        text: "\"Hehe, thanks. It's a bit embarrassing but I feel energized. Wait a moment!\"",
        character: "assets/images/characters/dain_nomal.png",
        next: "after_dain_normal"
    },
    "after_dain_cheer": {
        name: "Dain",
        text: "(She looks a bit flustered, rubbing her nose with a shy grin.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_cheer_2"
    },
    "after_dain_cheer_2": {
        name: "Dain",
        text: "\"Wh-what's with the sudden praise? You're making me blush! It's not like I'm trying harder just because you're watching! ...But maybe I am, just a little.\"",
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
        text: "\"Hey~ I guess you're not that good yet. Fine. Since you're here, why don't you wait until practice is over? Let's go grab some tteokbokki together!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_end"
    },
    "after_dain_end": {
        name: "Me",
        text: "(I sit in the stands and watch as Dain finishes her practice with incredible focus.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        next: "after_dain_end_2"
    },
    "after_dain_end_2": {
        name: "Dain",
        text: "(Dain jogs over, catching her breath.) \"Phew... Sorry to keep you waiting! Ready for that tteokbokki?\"",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        setFlag: "datedDainDay1",
        next: "after_dain_tteokbokki"
    },
    "after_dain_tteokbokki": {
        name: "Dain",
        text: "(She takes a bite of the spicy tteokbokki, a look of pure joy on her face.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        next: "after_dain_tteokbokki_2"
    },
    "after_dain_tteokbokki_2": {
        name: "Dain",
        text: "\"Man, nothing beats tteokbokki after a workout! Thanks for coming with me. It tastes way better when I'm not eating alone!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_nomal.png",
        night: true,
        next: "after_dain_tteokbokki_3"
    },
    "after_dain_tteokbokki_3": {
        name: "Dain",
        text: "\"We should... I mean, we should do this more often! Promise?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_nomal.png",
        night: true,
        branches: [
            { next: "after_home", condition: "has_number_dain" },
            { next: "dain_contact_exchange" }
        ]
    },
    "dain_contact_exchange": {
        name: "Dain",
        text: "(She wipes her mouth and playfully waves her phone.) \"Hey, {name}! If we're gonna be food buddies, I'm gonna need your number. Hand it over!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_nomal.png",
        night: true,
        choices: [
            { text: "Sure! I'm always down for a food tour.", next: "dain_contact_success", setFlags: ["has_number_dain", "has_any_contact"] },
            { 
                text: "Can I call you right now? Just to check...", 
                next: "dain_contact_call_fail",
                affinityChar: "Dain",
                affinityBranches: [
                    { minAffinity: 35, next: "dain_contact_call_success" }
                ],
                setFlags: ["has_number_dain", "has_any_contact"]
            },
            { text: "Maybe next time.", next: "dain_contact_fail", stats: { Dain: { affinity: -30 } } }
        ]
    },
    "dain_contact_call_success": {
        name: "Dain",
        text: "(She blushes, looking genuinely surprised.) \"Wh-what! Right now? ...Well, if you really want to hear my voice. But don't keep me up too late! I've got early practice!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shy.png",
        night: true,
        stats: { Dain: { affinity: 20 } },
        next: "after_home"
    },
    "dain_contact_call_fail": {
        name: "Dain",
        text: "(She lets out a laugh, shaking her head.) \"Ha! You're bold, I'll give you that. Calling me already? Let's stick to texting for now, okay?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_nomal.png",
        night: true,
        stats: { Dain: { affinity: -20 } },
        next: "after_home"
    },
    "dain_contact_success": {
        name: "Dain",
        text: "(She grins and saves the number.) \"Got it! I'll hit you up when I find the next great spot. Be ready!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        stats: { Dain: { affinity: 15 } },
        next: "after_home"
    },
    "dain_contact_fail": {
        name: "Dain",
        text: "(She looks surprised for a second, then laughs it off.) \"Playing hard to get, huh? Fine, fine! I'll just have to try harder next time!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_nomal.png",
        night: true,
        next: "after_home"
    },
    "after_nurse": {
        name: "Nurse",
        text: "(I open the door to find the nurse sipping tea by the window. She looks up and offers a warm smile.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "after_nurse_2"
    },
    "after_nurse_new": {
        name: "Me",
        text: "(Feeling a bit drained, I find myself at the nurse's office. The air inside is thick with the scent of herbs, and a mature-looking woman greets me.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "after_nurse_new_2"
    },
    "after_nurse_new_2": {
        name: "Nurse",
        text: "\"Oh? A new face. You must be the transfer student. I'm the school nurse. What brings you here? Not feeling well?\"",
        character: "assets/images/characters/nurse.png",
        setFlag: "metNurse",
        next: "after_nurse_new_name_ask"
    },
    "after_nurse_new_name_ask": {
        name: "Nurse",
        text: "\"By the way, what's your name? Won't you tell me?\"",
        character: "assets/images/characters/nurse.png",
        next: "after_nurse_new_name_share"
    },
    "after_nurse_new_name_share": {
        name: "Me",
        text: "\"My name is {name}.\"",
        setFlag: "knowsName_Nurse",
        next: "nurse_after_day1_contact"
    },
    "after_nurse_2": {
        name: "Nurse",
        text: "\"{name}! Stopping by to say goodbye? What a sweet student you are.\"",
        character: "assets/images/characters/nurse.png",
        next: "nurse_after_day1_contact"
    },
    "nurse_after_day1_contact": {
        name: "Nurse",
        text: "\"Come, sit. I'll pour you some tea. Why don't we chat for a bit before you head home?\"",
        character: "assets/images/characters/nurse.png",
        branches: [
            { next: "nurse_after_day1_contact_already", condition: "has_number_nurse" },
            { next: "nurse_after_day1_contact_choice" }
        ]
    },
    "nurse_after_day1_contact_already": {
        name: "Me",
        text: "(The warm scent of tea reaches my nose. What should I do?)",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "Sure, I'll rest for a bit.", next: "nurse_after_day1_contact_already_stay", stats: { Nurse: { affinity: 5 } } },
            { text: "I'm a bit tired today...", next: "nurse_after_day1_contact_already_leave" }
        ]
    },
    "nurse_after_day1_contact_already_stay": {
        name: "Nurse",
        text: "\"Hehe, how sweet. It must've been a long day, being your first day and all. Take a short break with me.\"",
        character: "assets/images/characters/nurse.png",
        next: "nurse_after_day1_contact_already_stay_2"
    },
    "nurse_after_day1_contact_already_stay_2": {
        name: "Nurse",
        text: "\"...Well, it's about time you head home. Contact me anytime if you need anything, okay?\"",
        character: "assets/images/characters/nurse.png",
        next: "after_home"
    },
    "nurse_after_day1_contact_already_leave": {
        name: "Nurse",
        text: "\"Alright, don't push yourself. Contact me anytime if you need anything, okay? Get home safe.\"",
        character: "assets/images/characters/nurse.png",
        next: "after_home"
    },
    "nurse_after_day1_contact_choice": {
        name: "Me",
        text: "(The warm scent of tea reaches my nose. What should I do?)",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "Sure, I'll rest for a bit.", next: "nurse_after_day1_contact_stay", stats: { Nurse: { affinity: 5 } } },
            { text: "I'm a bit tired today...", next: "nurse_after_day1_contact_2" }
        ]
    },
    "nurse_after_day1_contact_stay": {
        name: "Nurse",
        text: "\"Hehe, how sweet. It must've been a long day, being your first day and all. Take a short break with me.\"",
        character: "assets/images/characters/nurse.png",
        next: "nurse_after_day1_contact_stay_2"
    },
    "nurse_after_day1_contact_stay_2": {
        name: "Nurse",
        text: "\"...Well, it's about time you head home. {name}, just in case, do you want to save my number? Contact me anytime if you're sick or have something on your mind.\"",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "Yes, please tell me!", next: "nurse_after_day1_contact_success", setFlags: ["has_number_nurse", "has_any_contact"] },
            { text: "It's a bit overwhelming for now.", next: "nurse_after_day1_contact_fail", stats: { Nurse: { affinity: -15 } } }
        ]
    },
    "nurse_after_day1_contact_2": {
        name: "Nurse",
        text: "\"Are you leaving already? That's a shame... {name}, just in case, do you want to save my number? Contact me anytime if you're sick or have something on your mind.\"",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "Yes, please tell me!", next: "nurse_after_day1_contact_success", setFlags: ["has_number_nurse", "has_any_contact"] },
            { text: "It's a bit overwhelming for now.", next: "nurse_after_day1_contact_fail", stats: { Nurse: { affinity: -15 } } }
        ]
    },
    "nurse_after_day1_contact_success": {
        name: "Nurse",
        text: "\"Hehe, how diligent. Then I'll contact you tonight, okay? Goodbye, {name}.\"",
        character: "assets/images/characters/nurse.png",
        stats: { Nurse: { affinity: 10 } },
        next: "after_home"
    },
    "nurse_after_day1_contact_fail": {
        name: "Nurse",
        text: "\"Oh, are you playing hard to get? Fine. Let me know if you change your mind later. Get home safe!\"",
        character: "assets/images/characters/nurse.png",
        next: "after_home"
    }
});




