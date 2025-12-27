if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

Object.assign(SCENARIO[1], {
    "after_school_start": {
        name: "Me",
        text: "(Finally, all classes are over and the bell rings to announce the end of school.)",
        background: "assets/images/background/room_school.png",
        character: null,
        sunset: true,
        next: "after_school_start_2"
    },
    "after_school_start_2": {
        name: "Me",
        text: "(As I pack my bag and try to leave the classroom... the hallway is full of the sound of kids going home.)",
        sunset: true,
        next: "after_school_start_3"
    },
    "after_school_start_3": {
        name: "Me",
        text: "(It's been a long day. What should I do now?)",
        sunset: true,
        choices: [
            { text: "Stop by the student council room where Seoyeon is.", next: "after_seoyeon", condition: "metSeoyeon" },
            { text: "Go check out the student council room.", next: "after_seoyeon", excludeCondition: "metSeoyeon", setFlag: "metSeoyeon" },
            { text: "Head to the library annex where Yuna was.", next: "after_yuna", condition: "metYuna" },
            { text: "Look around the quiet parts of the school more.", next: "after_yuna_new", excludeCondition: "metYuna" },
            { text: "Go see Dain practicing in the gym.", next: "after_dain", condition: "metDain" },
            { text: "Head to the gym where lively sounds are coming from.", next: "after_dain_new", excludeCondition: "metDain" },
            { text: "Stop by the nurse's office to say goodbye to the teacher.", next: "after_nurse", condition: "metNurse" },
            { text: "Go check out the nurse's office.", next: "after_nurse", excludeCondition: "metNurse", setFlag: "metNurse" },
            { text: "I'm tired today, so I'll go straight home.", next: "after_home" }
        ]
    },
    "after_seoyeon": {
        name: "Seoyeon",
        text: "(When I open the student council room door, I see Seoyeon struggling amidst a mountain of documents.)",
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
        text: "\"Oh? {name?}! What brings you here at this time? Don't tell me... were you waiting for me?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Yeah, I wanted to go home together. Can I help?", next: "after_seoyeon_help", setFlag: "helpedSeoyeon", stats: { Seoyeon: { affinity: 10 } } },
            { text: "I just wanted to see your face. Aren't you overdoing it?", next: "after_seoyeon_worry", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Don't get me wrong. I just took a wrong turn.", next: "after_seoyeon_rude", stats: { Seoyeon: { affinity: -20 } } }
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
        text: "\"Ah... really? Then could you leave without disturbing me? I'm a bit busy right now.\"",
        character: "assets/images/characters/seyoun_angry.png",
        next: "after_home"
    },
    "after_seoyeon_help": {
        name: "Seoyeon",
        text: "(She opens her eyes wide as if moved. Soon, she gives me a bright smile and offers me the seat next to her.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "after_seoyeon_help_2"
    },
    "after_seoyeon_help_2": {
        name: "Seoyeon",
        text: "(We feel a strange bond while organizing the documents in silence.)",
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
        text: "(Seoyeon makes a happy expression while drinking a beverage with plenty of whipped cream.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe_2_2"
    },
    "after_seoyeon_cafe_2_2": {
        name: "Seoyeon",
        text: "\"Haah~ I feel like I can finally breathe. Thank you so much for today, {name?}.\"",
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
            { text: "Well, depending on my mood tomorrow? (Teasing)", next: "after_seoyeon_tease", stats: { Seoyeon: { affinity: 7 } } }
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
        text: "\"It's a promise! You can't break it! Then see you tomorrow, {name?}. Get home safe!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "after_home"
    },
    "after_seoyeon_tease": {
        name: "Seoyeon",
        text: "(She pouts her cheeks and glares at me.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "after_seoyeon_tease_2"
    },
    "after_seoyeon_tease_2": {
        name: "Seoyeon",
        text: "\"Hmph... You're really mean! But you still have to come, okay? If you don't, I'll punish you with the authority of the student council president! Hehe, just kidding. See you tomorrow!\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "after_home"
    },
    "after_seoyeon_worry": {
        name: "Seoyeon",
        text: "(She smiles while scratching her head shyly.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_worry_2"
    },
    "after_seoyeon_worry_2": {
        name: "Seoyeon",
        text: "\"Hehe, you caught me. Being the student council president involves more work than I thought. But since you're worrying about me like this, I feel a surge of energy! Wait a moment, I'll finish quickly and let's go together!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe"
    },
    "after_yuna_new": {
        name: "Me",
        text: "(While walking in search of a quiet place in the school, I arrived at the old library annex. There, a girl is sitting by the window where the sunset light seeps in.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_new_2"
    },
    "after_yuna_new_2": {
        name: "???",
        text: "\"Hi? To come all the way here at this time... You're quite unique too. I'm Yuna.\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        setFlag: "metYuna",
        next: "after_yuna_3"
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
        text: "(Even though she knows I've come, she looks out the window for a long time.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_3"
    },
    "after_yuna_3": {
        name: "Yuna",
        text: "\"Ah, {name?}... I like the library after school because it's quieter. What brings you here?\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "yuna_name_share_pre"
    },
    "yuna_name_share_pre": {
        name: "Me",
        text: "\"My name is '{name}'. I want to get closer to you.\"",
        setFlag: "knowsName_Yuna",
        next: "yuna_name_share"
    },
    "yuna_name_share": {
        name: "Yuna",
        text: "(She murmurs my name softly.) \"...{name}. I'll remember it. But names... might not mean much in this school.\"",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_know"
    },
    "after_yuna_know": {
        name: "Yuna",
        text: "(She slowly turns her head and looks at me. A faint smile appears on her lips.)",
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
        text: "\"Okay, since tonight will be long. I'll tell you little by little... very little by little. Follow me.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_yuna_rooftop"
    },
    "after_yuna_rooftop": {
        name: "Yuna",
        text: "(The school seen from the rooftop of the annex is completely different from the daytime.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "after_yuna_rooftop_2"
    },
    "after_yuna_rooftop_2": {
        name: "Yuna",
        text: "(Yuna leans on the railing and gazes into the distance.)",
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
        text: "\"Problems that don't appear on the surface are just festering. The heavy energy that fills this school... didn't you feel that sense of incongruity?\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        choices: [
            { text: "I can go anywhere with you.", next: "after_yuna_together" },
            { text: "Darkness... it's a bit scary.", next: "after_yuna_scared" }
        ]
    },
    "after_yuna_together": {
        name: "Yuna",
        text: "(She grips my hand tightly. She looks at me and gives a sad smile.)",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        next: "after_yuna_together_2"
    },
    "after_yuna_together_2": {
        name: "Yuna",
        text: "\"Foolish words... But I don't dislike that answer. Okay, then... how about we become people who share each other's secrets?\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        next: "yuna_contact_exchange"
    },
    "yuna_contact_exchange": {
        name: "Yuna",
        text: "(Yuna steps away from the rooftop railing and nonchalantly holds out her smartphone.) \"To share secrets... we should at least have a way to contact each other. Leave your number here.\"",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        choices: [
            { text: "Yes, I want to share more secrets with Yuna.", next: "yuna_contact_success", setFlags: ["has_number_yuna", "has_any_contact"] },
            { text: "Sorry, I'm still a bit cautious.", next: "yuna_contact_fail", stats: { Yuna: { affinity: -15 } } }
        ]
    },
    "yuna_contact_success": {
        name: "Yuna",
        text: "(Yuna saves my number and smiles faintly.) \"...Done. Now we're connected. If I call... you have to come anytime.\"",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        stats: { Yuna: { affinity: 15 } },
        next: "after_home"
    },
    "yuna_contact_fail": {
        name: "Yuna",
        text: "(Yuna looks at me with cold eyes and puts her smartphone away.) \"...Okay. I won't force you. But keep in mind that opportunities don't come often.\"",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "after_home"
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
        text: "\"Hehe, I thought so. It's too heavy a story for an ordinary student. Go back for today. Don't try to know any deeper.\"",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "after_home"
    },
    "after_dain_new": {
        name: "Me",
        text: "(Following the lively sounds, I arrived at the gym. There, a girl is practicing volleyball alone.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_new_2"
    },
    "after_dain_new_2": {
        name: "???",
        text: "\"Oh! A new face? Hi! I'm Dain from the volleyball club. You look like you're good at sports, want to help me practice?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        setFlag: "metDain",
        next: "after_dain_3"
    },
    "after_dain": {
        name: "Dain",
        text: "(The gym is full of the heat of practice. Dain is drenched in sweat, spiking the ball.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        sunset: true,
        next: "after_dain_2"
    },
    "after_dain_2": {
        name: "Dain",
        text: "(She discovers me and runs over with a bright smile while wiping her sweat with a towel.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        next: "dain_free_talk"
    },
    "dain_free_talk": {
        type: "free_talk",
        name: "Dain",
        text: "\"Wow, {name?}! It's even better to see you up close! Anything you're curious about? Like sports, or school life!\"",
        context: "A situation where you are talking with Dain, who just finished practice in the gym at sunset after school",
        personality: "The ace of the volleyball club with a cool and easygoing personality. Loves sports, is friendly to the protagonist, and is full of energy.",
        character: "assets/images/characters/dain_nomal.png",
        next: "after_dain_3"
    },
    "after_dain_3": {
        name: "Dain",
        text: "\"Hey, {name?}! You really came! Wait a moment, I'll finish this last set and let's go eat something delicious!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        choices: [
            { text: "Okay, I'll cheer you on! Do your best!", next: "after_dain_cheer", stats: { Dain: { affinity: 10 } } },
            { text: "I'll help you practice. Toss the ball!", next: "after_dain_help", stats: { Dain: { affinity: 15 } } },
            { text: "I'm a bit tired, can we just go now?", next: "after_dain_tired", stats: { Dain: { affinity: -10 } } }
        ]
    },
    "after_dain_tired": {
        name: "Dain",
        text: "(Dain makes a slightly disappointed expression, but soon nods.)",
        character: "assets/images/characters/dain_nomal.png",
        next: "after_dain_tired_2"
    },
    "after_dain_tired_2": {
        name: "Dain",
        text: "\"Oh... right. You must be tired since it's your first day. Sorry, I was too excited. Okay, let's just go home for today. See you tomorrow!\"",
        character: "assets/images/characters/dain_nomal.png",
        next: "after_home"
    },
    "after_dain_cheer": {
        name: "Dain",
        text: "(She smiles energetically and returns to the court.)",
        character: "assets/images/characters/dain_active.png",
        next: "after_dain_end"
    },
    "after_dain_help": {
        name: "Dain",
        text: "(Her eyes sparkle as she hands me the ball.)",
        character: "assets/images/characters/dain_laugh.png",
        next: "after_dain_help_2"
    },
    "after_dain_help_2": {
        name: "Dain",
        text: "\"Oh! You're going to help? Great! Then toss it high toward the net! Here I go!\"",
        character: "assets/images/characters/dain_active.png",
        next: "after_dain_end"
    },
    "after_dain_end": {
        name: "Dain",
        text: "(After a while, Dain finishes her practice and comes over to me.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        sunset: true,
        next: "after_dain_end_2"
    },
    "after_dain_end_2": {
        name: "Dain",
        text: "(Dain, having finished her practice, approaches me while breathing heavily.) \"Phew... phew... Sorry for making you wait! Now, let's go eat the tteokbokki I promised!\"",
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
        text: "\"Kyah~ As expected, tteokbokki after exercise is the best! Thank you so much for coming with me today. I think it tastes twice as good as usual thanks to you!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "after_dain_tteokbokki_3"
    },
    "after_dain_tteokbokki_3": {
        name: "Dain",
        text: "\"Let's... no, let's come to eat together often from now on! It's a promise, okay?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "dain_contact_exchange"
    },
    "dain_contact_exchange": {
        name: "Dain",
        text: "(Dain wipes the tteokbokki sauce and playfully shakes her smartphone.) \"Hey, {name?}! If we want to keep going to eat delicious things together, shouldn't we at least have each other's contact info? Put your number in!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        choices: [
            { text: "Sure! It'll be fun to go on food tours with Dain.", next: "dain_contact_success", setFlags: ["has_number_dain", "has_any_contact"] },
            { 
                text: "Since I'm getting your number... can I call you right now?", 
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
        text: "(Dain blushes and laughs as if flustered.) \"Wh-what! All of a sudden? ...Well, if you want to hear my voice, I guess it's okay. But don't stay on too long! I have to go to practice early tomorrow!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shy.png",
        stats: { Dain: { affinity: 15 } },
        next: "after_home"
    },
    "dain_contact_call_fail": {
        name: "Dain",
        text: "(Dain lets out a hollow laugh as if it's absurd.) \"Ha! You're really bold, aren't you? Calling me as soon as you get my number? Isn't that going too far? Let's get close by exchanging messages first!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_nomal.png",
        stats: { Dain: { affinity: -5 } },
        next: "after_home"
    },
    "dain_contact_success": {
        name: "Dain",
        text: "(Dain laughs coolly and saves my number.) \"Okay! Received! I'll send you a message as soon as I find a good place, so be ready!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        stats: { Dain: { affinity: 15 } },
        next: "after_home"
    },
    "dain_contact_fail": {
        name: "Dain",
        text: "(Dain opens her eyes wide as if it's a bit unexpected, then soon laughs it off energetically.) \"What~ Are you playing hard to get? Okay, okay! I'll work harder and get your number eventually!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_nomal.png",
        night: true,
        next: "after_home"
    },
    "after_nurse": {
        name: "Nurse",
        text: "(When I open the nurse's office door, the teacher is drinking tea by the window and smiles when she sees me.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "after_nurse_2"
    },
    "after_nurse_2": {
        name: "Nurse",
        text: "\"{name?}! Did you come to see me before going home? You're such a good student.\"",
        character: "assets/images/characters/nurse.png",
        next: "nurse_free_talk_after_day1"
    },
    "nurse_free_talk_after_day1": {
        type: "free_talk",
        name: "Nurse",
        text: "\"Now, sit here. I'll give you a cup of warm tea. Do you want to talk to me a bit more before you go?\"",
        context: "A situation where you are having a conversation with the nurse in the nurse's office at sunset before going home.",
        personality: "A mature and seductive 'older sister' style. She adores and takes care of the protagonist.",
        character: "assets/images/characters/nurse.png",
        next: "after_home"
    }
});

