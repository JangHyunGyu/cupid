if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

Object.assign(SCENARIO[2], {
    "day2_lunch_time": {
        name: "Me",
        text: "(Ding-dong-dang-dong~ The long-awaited lunch bell! The classroom is instantly filled with energy.)",
        character: null,
        choices: [
            { text: "Go to Seoyeon and suggest eating lunch together.", next: "day2_lunch_seoyeon" },
            { text: "Head to the library annex backyard as promised with Yuna.", next: "day2_lunch_yuna", condition: "metYuna" },
            { text: "Go to the backyard to see who this Yuna is.", next: "day2_lunch_yuna", excludeCondition: "metYuna" },
            { text: "Go to the gym to see Dain.", next: "day2_lunch_dain", condition: "metDain" },
            { text: "Go to the gym where lively sounds are heard.", next: "day2_lunch_dain", excludeCondition: "metDain" },
            { text: "I feel a bit unwell, so I'll go to the nurse's office.", next: "day2_lunch_nurse" }
        ]
    },
    "day2_lunch_seoyeon": {
        name: "Seoyeon",
        text: "(I open the student council room door to find Seoyeon eating her lunch. She looks up, her eyes widening in a bright welcome.)",
        background: "assets/images/background/student_room.png",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_seoyeon_lunch_talk"
    },
    "day2_seoyeon_lunch_talk": {
        name: "Seoyeon",
        text: "\"{name?}! I was just hoping you'd stop by! Come, sit with me. I actually made some extra sandwiches today.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        choices: [
            { text: "Wow, these look delicious! You're a cooking genius, Seoyeon.", next: "day2_seoyeon_lunch_praise", stats: { Seoyeon: { affinity: 15 } } },
            { text: "Aren't you tired from all the student council work?", next: "day2_seoyeon_lunch_worry", stats: { Seoyeon: { affinity: 10 } } },
            { text: "(Wipe a crumb off her cheek)", next: "day2_seoyeon_lunch_touch", stats: { Seoyeon: { affinity: 20 } } }
        ]
    },
    "day2_seoyeon_lunch_praise": {
        name: "Seoyeon",
        text: "\"Really? I'm glad you like them. I was a bit worried about your taste... Eat as much as you want!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        setFlag: "day2_ate_lunch_seoyeon",
        next: "day2_seoyeon_lunch_end"
    },
    "day2_seoyeon_lunch_worry": {
        name: "Seoyeon",
        text: "\"It's okay. Seeing you enjoy the food makes all the tiredness go away. Really.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        setFlag: "day2_ate_lunch_seoyeon",
        next: "day2_seoyeon_lunch_end"
    },
    "day2_seoyeon_lunch_touch": {
        name: "Seoyeon",
        text: "\"Ah... T-thank you. I must have been eating too fast... (She blushes slightly and looks down)\"",
        character: "assets/images/characters/seyoun_shy.png",
        setFlag: "day2_ate_lunch_seoyeon",
        next: "day2_seoyeon_lunch_end"
    },
    "day2_seoyeon_lunch_end": {
        name: "Me",
        text: "(I returned to the classroom after a pleasant lunch with Seoyeon. The taste of the sandwiches she made lingers pleasantly in my mouth.)",
        next: "day2_afternoon_class"
    },
    "day2_lunch_yuna": {
        name: "Me",
        text: "(The library annex backyard. Yuna stands beneath the shadow of a large tree, looking like a part of the scenery itself.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_talk"
    },
    "day2_yuna_talk": {
        name: "Yuna",
        text: "\"...You came. I wasn't sure if you'd actually show up after reading my note.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_talk_2"
    },
    "day2_yuna_talk_2": {
        name: "Yuna",
        text: "(She stares at me with an unreadable expression, her eyes searching mine.)",
        character: "assets/images/characters/yuna_nomal.png",
        branches: [
            { next: "day2_yuna_talk_2_met", condition: "metYuna" },
            { next: "day2_yuna_talk_2_new" }
        ]
    },
    "day2_yuna_talk_2_met": {
        name: "Yuna",
        text: "\"What I said yesterday... do you remember? About the secrets of this school. There's something I want to show you. Only you.\"",
        character: "assets/images/characters/yuna_nomal.png",
        choices: [
            { text: "What is it? I want to know.", next: "day2_yuna_secret", stats: { Yuna: { affinity: 10 } } },
            { text: "I'm not here for secrets. I just wanted to talk to you.", next: "day2_yuna_normal", stats: { Yuna: { affinity: 8 } } }
        ]
    },
    "day2_yuna_talk_2_new": {
        name: "Yuna",
        text: "\"You... you're curious about me, aren't you? This school hides a very deep secret. And I want to show it to you. Only you.\"",
        character: "assets/images/characters/yuna_nomal.png",
        setFlag: "metYuna",
        choices: [
            { text: "Are you the Yuna who left the note? What's the secret?", next: "day2_yuna_new_name_ask", stats: { Yuna: { affinity: 10 } } },
            { text: "I was just curious after seeing your note. Who are you?", next: "day2_yuna_new_name_ask", stats: { Yuna: { affinity: 5 } } }
        ]
    },
    "day2_yuna_new_name_ask": {
        name: "Yuna",
        text: "\"...By the way, what's your name? I only wrote my name on the note, but I don't know yours yet.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_new_name_share"
    },
    "day2_yuna_new_name_share": {
        name: "Me",
        text: "\"My name is {name}.\"",
        setFlag: "knowsName_Yuna",
        next: "day2_yuna_secret"
    },
    "day2_yuna_secret": {
        name: "Yuna",
        text: "(She takes my hand and leads me toward the old warehouse. A shiver runs down my spine at the coldness of her touch.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_yuna_secret_2"
    },
    "day2_yuna_secret_2": {
        name: "Yuna",
        text: "\"Inside here... are records the school has kept hidden for years. Once you see them... nothing will ever be the same.\"",
        character: "assets/images/characters/yuna_smile.png",
        choices: [
            { text: "Can I see those records too?", next: "day2_yuna_secret_read", stats: { Yuna: { affinity: 15 } } },
            { text: "Isn't it dangerous? It's better to just leave it alone.", next: "day2_yuna_secret_stop", stats: { Yuna: { affinity: -10 } } },
            { text: "Yuna, why are you investigating this?", next: "day2_yuna_secret_why", stats: { Yuna: { affinity: 5 } } }
        ]
    },
    "day2_yuna_secret_read": {
        name: "Yuna",
        text: "\"Hehe, as expected, you're different from the other kids. Fine, but you should be prepared. Truth can sometimes be poison.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_stop": {
        name: "Yuna",
        text: "\"...You're a coward. Well, I understand. For a normal kid, that's a natural reaction. You should leave for today.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_why": {
        name: "Yuna",
        text: "\"Well... should I say it's to find lost memories? Or maybe I just need some excitement in this boring school life.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_normal": {
        name: "Yuna",
        text: "\"...Is that so? You're a strange one. Most people are afraid. Fine, then let's just spend some time together like this.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_lunch_end": {
        name: "Me",
        text: "(I left Yuna and returned to the classroom. Her mysterious words kept echoing in my mind, making it hard to focus on the afternoon classes.)",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_afternoon_class"
    },
    "day2_lunch_dain": {
        name: "Me",
        text: "(I open the gym door to find a girl mid-practice, sweat glistening on her skin. She spots me and runs over with a grin.)",
        character: "assets/images/characters/dain_laugh.png",
        branches: [
            { next: "day2_dain_lunch_talk", condition: "metDain" },
            { next: "day2_lunch_dain_new" }
        ]
    },
    "day2_lunch_dain_new": {
        name: "???",
        text: "\"Oh! A new face! You're the transfer student everyone's talking about, right? I'm Dain from the volleyball club!\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "metDain",
        next: "day2_lunch_dain_new_name_ask"
    },
    "day2_lunch_dain_new_name_ask": {
        name: "Dain",
        text: "\"By the way, what's your name? I feel like I'm the only one who hasn't introduced myself!\"",
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
        text: "\"Oh! {name}? That's a cool name! Great, to celebrate our meeting, lunch is on me today! Let's hit the snack bar!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_dain_store"
    },
    "day2_dain_lunch_talk": {
        name: "Dain",
        text: "\"Oh! You really came! Great, lunch is on me today! Let's hit the snack bar!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_dain_store"
    },
    "day2_dain_store": {
        name: "Me",
        text: "(I headed to the snack bar with Dain. Since it's break time, the front of the store is crowded with kids.)",
        background: "assets/images/background/store.png",
        character: "assets/images/characters/dain_nomal.png",
        choices: [
            { text: "I'll buy yours too. What do you want?", next: "day2_dain_store_buy", stats: { Dain: { affinity: 10 } } },
            { text: "It's so crowded... Should we just go to the rooftop?", next: "day2_dain_store_rooftop", stats: { Dain: { affinity: 5 } } },
            { text: "Dain, look! The last pizza bread! I'll go grab it!", next: "day2_dain_store_race", stats: { Dain: { affinity: 15 } } }
        ]
    },
    "day2_dain_store_buy": {
        name: "Dain",
        text: "\"Hey~ I said it's on me! You're a transfer student, you shouldn't be spending money. I'll treat you today, so just enjoy!\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_rooftop": {
        name: "Dain",
        text: "\"Rooftop? Oh, that sounds good too! It'll taste even better with the cool breeze. Okay, let's just buy the bread and head up!\"",
        character: "assets/images/characters/dain_nomal.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_race": {
        name: "Dain",
        text: "\"Ooh! That's my partner! Okay, let's see who gets it first! Loser buys drinks!\"",
        character: "assets/images/characters/dain_nomal.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_lunch_end": {
        name: "Me",
        text: "(I returned to the classroom after a lively lunch with Dain. Thanks to her bright energy, I feel like I can power through the afternoon classes.)",
        next: "day2_afternoon_class"
    },
    "day2_lunch_nurse": {
        name: "Me",
        text: "(Maybe it's the stress, but my head is throbbing. I find myself walking toward the quiet of the nurse's office.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_talk"
    },
    "day2_lunch_nurse_talk": {
        name: "Nurse",
        text: "\"Oh, hello there. What brings you to the nurse's office during lunch? Are you feeling unwell?\"",
        character: "assets/images/characters/nurse.png",
        branches: [
            { next: "day2_lunch_nurse_met", condition: "metNurse" },
            { next: "day2_lunch_nurse_new" }
        ]
    },
    "day2_lunch_nurse_met": {
        name: "Nurse",
        text: "\"Oh, if it isn't my favorite student. Is something hurting, or did you just come to see my pretty face?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        stats: { Nurse: { affinity: 5 } },
        next: "nurse_free_talk"
    },
    "day2_lunch_nurse_new": {
        name: "Nurse",
        text: "\"Oh, I haven't seen you before. Are you the new transfer student? I'm the school nurse.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        setFlag: "metNurse",
        next: "day2_lunch_nurse_new_name_ask"
    },
    "day2_lunch_nurse_new_name_ask": {
        name: "Nurse",
        text: "\"By the way, what's your name? Won't you tell me? Just between us.\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_new_name_share"
    },
    "day2_lunch_nurse_new_name_share": {
        name: "Me",
        text: "\"My name is {name}.\"",
        setFlag: "knowsName_Nurse",
        next: "nurse_free_talk"
    },
    "nurse_free_talk": {
        type: "free_talk",
        name: "Nurse",
        text: "\"Hehe, don't be so tense. Tell me exactly what's bothering you.\"",
        context: "Alone in the quiet nurse's office with the mature and alluring school nurse.",
        personality: "A mature, seductive 'older sister' type. She enjoys teasing the protagonist but genuinely cares for him.",
        extra_guideline: "As a mature adult, be very flexible and bold in accepting the user's romantic tension or light physical contact. Don't keep your distance; respond actively and allow for maximum PG-13 level reactions.",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_3": {
        name: "Nurse",
        text: "(She leads me to a bed with a gentle smile. The air is filled with the soothing scent of herbs.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "My head hurts a bit.", next: "day2_lunch_nurse_head", stats: { Nurse: { affinity: 5 } } },
            { text: "I just need some rest.", next: "day2_lunch_nurse_rest", stats: { Nurse: { affinity: 5 } } },
            { text: "Is seducing students your hobby or something?", next: "day2_lunch_nurse_trap", stats: { Nurse: { affinity: -30 } } }
        ]
    },
    "day2_lunch_nurse_trap": {
        name: "Nurse",
        text: "(Her smile vanishes instantly. The air in the room grows heavy and cold.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_angry.png",
        next: "day2_lunch_nurse_trap_2"
    },
    "day2_lunch_nurse_trap_2": {
        name: "Nurse",
        text: "\"Oh... {name?}, I think I've been too easy on you. That kind of disrespect isn't a joke to an adult. Please leave. I'm not in the mood for this.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_angry.png",
        next: "day2_afternoon_class"
    },
    "day2_lunch_nurse_head": {
        name: "Nurse",
        text: "\"Sounds like a tension headache. Take this and get some sleep. You'll feel much better when you wake up.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "Can't you feed it to me yourself, teacher?", next: "day2_lunch_nurse_head_tease", stats: { Nurse: { affinity: 10 } } },
            { text: "Thank you. (Take the medicine)", next: "day2_lunch_nurse_sleep", stats: { Nurse: { affinity: 5 } } }
        ]
    },
    "day2_lunch_nurse_head_tease": {
        name: "Nurse",
        text: "\"Oh my... {name?}, you're really something, aren't you? Fine, say 'Ah'. I should give a reward to a good student, right?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_sleep"
    },
    "day2_lunch_nurse_rest": {
        name: "Nurse",
        text: "\"Hehe, we all have those days. Close the curtain and make yourself comfortable. You know... you have such a strong presence. Just being near you makes me feel... warm.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "Next", next: "day2_lunch_nurse_rest_yuna", condition: "metYuna" },
            { text: "Next", next: "day2_lunch_nurse_sleep", excludeCondition: "metYuna" }
        ]
    },
    "day2_lunch_nurse_rest_yuna": {
        name: "Me",
        text: "\"(A strong presence...? Yuna's words flash through my mind. Is there really something strange about this school?)\"",
        background: "assets/images/background/nurse_room.jpg",
        next: "day2_lunch_nurse_sleep"
    },
    "day2_lunch_nurse_sleep": {
        name: "Me",
        text: "(The warmth of the blanket she tucked around me pulls me into a deep, dreamless sleep. The exhaustion of the past two days finally catches up.)",
        background: "assets/images/background/nurse_room.jpg",
        character: null,
        next: "day2_lunch_nurse_sleep_end"
    },
    "day2_lunch_nurse_sleep_end": {
        name: "Me",
        text: "(I wake to find the room bathed in the orange glow of the sunset. I slept through the entire afternoon... I must have been more tired than I thought.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "day2_lunch_nurse_wake_2"
    },
    "day2_lunch_nurse_wake_2": {
        name: "Nurse",
        text: "\"Oh, are you awake now? You slept really sweetly. It's almost time to go home. How is your body?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "nurse_wake_free_talk"
    },
    "nurse_wake_free_talk": {
        type: "free_talk",
        name: "Nurse",
        text: "\"Hehe, you're not fully awake yet. Do you want to talk to me more before going home?\"",
        context: "A situation where the protagonist who just woke up and the nurse are left alone in the nurse's office where the sunset is setting",
        personality: "A languid, sexy, yet kind nurse. A bold personality who feels a strange charm to the protagonist and openly seduces him.",
        extra_guideline: "As a mature adult, openly seduce the protagonist and create a risky atmosphere. Don't be flustered by the user's mature jokes or provocative remarks (sexual jokes, etc.) and respond leisurely, and show a bold and provocative reaction enough to make the protagonist even more flustered. Fully radiate mature charm and pull the romantic tension to the maximum.",
        character: "assets/images/characters/nurse.png",
        next: "nurse_contact_exchange"
    },
    "nurse_contact_exchange": {
        branches: [
            { next: "nurse_contact_already_have", condition: "has_number_nurse" },
            { next: "nurse_contact_ask" }
        ]
    },
    "nurse_contact_already_have": {
        name: "Nurse",
        text: "(The teacher leans her body slightly and whispers.) \"{name?}, we already exchanged numbers, didn't we? You must contact me if you're bored at night. I'll be waiting.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        choices: [
            { text: "Yes, I will.", next: "day2_afternoon_nurse_skip" },
            { 
                text: "Not the number... can I go to your house tonight, teacher?", 
                next: "nurse_contact_home_fail",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 70, next: "nurse_contact_home_success" }
                ]
            }
        ]
    },
    "nurse_contact_ask": {
        name: "Nurse",
        text: "(The teacher leans her body slightly and whispers.) \"{name?}, if you can't sleep at night, do you want to contact me? I'll give you my number.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        choices: [
            { text: "Yes, I want to know.", next: "nurse_contact_success", setFlags: ["has_number_nurse", "has_any_contact"] },
            { 
                text: "Not the number... can I go to your house, teacher?", 
                next: "nurse_contact_home_fail",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 70, next: "nurse_contact_home_success" }
                ]
            },
            { text: "Oh, it's okay.", next: "nurse_contact_fail", stats: { Nurse: { affinity: -10 } } }
        ]
    },
    "nurse_contact_success": {
        name: "Nurse",
        text: "(She smiles seductively and saves my number.) \"Hehe, then I'll be waiting tonight? I might get sulky if you reply late.\"",
        character: "assets/images/characters/nurse.png",
        stats: { Nurse: { affinity: 15 } },
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_success": {
        name: "Nurse",
        text: "(The teacher's eyes widen, then she whispers in my ear with a seductive smile.) \"Oh... {name?}, you're much bolder than I thought? Okay, do you want to come to my house tonight? I'll give you the address. Instead... it's a secret from your parents?\"",
        character: "assets/images/characters/nurse.png",
        stats: { Nurse: { affinity: 30 } },
        setFlags: ["has_number_nurse", "has_any_contact", "invited_nurse_home"],
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_fail": {
        name: "Nurse",
        text: "(The teacher bursts into laughter.) \"Oh my, {name?}! You're really cute. But I think it's a bit early for my house? Let's exchange numbers first.\"",
        character: "assets/images/characters/nurse.png",
        setFlags: ["has_number_nurse", "has_any_contact"],
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_fail": {
        name: "Nurse",
        text: "(The teacher pouts her lips as if a bit disappointed.) \"Tsk... are you playing hard to get? Okay. Tell me if you change your mind later.\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_afternoon_nurse_skip"
    }
});



