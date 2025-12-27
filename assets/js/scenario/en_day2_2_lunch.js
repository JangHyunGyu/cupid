if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

Object.assign(SCENARIO[2], {
    "day2_lunch_time": {
        name: "Me",
        text: "(Finally, the lunch bell rang. Kids are running to the cafeteria.)",
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
        text: "(Seoyeon was eating a lunch box in the student council room and smiles brightly when she sees me.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_seoyeon_lunch_talk"
    },
    "day2_seoyeon_lunch_talk": {
        name: "Seoyeon",
        text: "\"{name?}! I was just waiting to eat together! Now, sit here.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_afternoon_class"
    },
    "day2_lunch_yuna": {
        name: "Me",
        text: "(Library annex backyard. Yuna is standing among the lush trees.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_talk"
    },
    "day2_yuna_talk": {
        name: "Yuna",
        text: "\"...You came. I thought you wouldn't come after seeing the note.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_talk_2"
    },
    "day2_yuna_talk_2": {
        name: "Yuna",
        text: "(Yuna stares at me with an expressionless face.)",
        character: "assets/images/characters/yuna_nomal.png",
        branches: [
            { next: "day2_yuna_talk_2_met", condition: "metYuna" },
            { next: "day2_yuna_talk_2_new" }
        ]
    },
    "day2_yuna_talk_2_met": {
        name: "Yuna",
        text: "\"Do you remember... what I said yesterday? About the school's secret. Actually, there's something I want to show only to you.\"",
        character: "assets/images/characters/yuna_nomal.png",
        choices: [
            { text: "What is it? I'm curious too.", next: "day2_yuna_secret", stats: { Yuna: { affinity: 10 } } },
            { text: "I'm not interested in secrets. I just came because I wanted to talk to you.", next: "day2_yuna_normal", stats: { Yuna: { affinity: 5 } } }
        ]
    },
    "day2_yuna_talk_2_new": {
        name: "Yuna",
        text: "\"You... you came because you were curious about who I am, right? Actually, there's a very deep secret in this school. There's something I want to show only to you.\"",
        character: "assets/images/characters/yuna_nomal.png",
        choices: [
            { text: "Secret? What is it?", next: "day2_yuna_secret", stats: { Yuna: { affinity: 10 } } },
            { text: "I just came because I was curious after seeing the note.", next: "day2_yuna_normal", stats: { Yuna: { affinity: 5 } } }
        ]
    },
    "day2_yuna_secret": {
        name: "Yuna",
        text: "(Yuna takes my hand and leads me toward the old warehouse. Her hand feels colder than yesterday.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_yuna_secret_2"
    },
    "day2_yuna_secret_2": {
        name: "Yuna",
        text: "\"Inside here... are records the school has hidden for a long time. If you see this... everything will change.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_afternoon_class"
    },
    "day2_yuna_normal": {
        name: "Yuna",
        text: "\"...Really? You're a very strange kid. All the other kids are scared. Okay, then let's just stay like this today.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_afternoon_class"
    },
    "day2_lunch_dain": {
        name: "Dain",
        text: "(Dain was practicing volleyball in the gym and runs over when she discovers me.)",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_dain_lunch_talk"
    },
    "day2_dain_lunch_talk": {
        name: "Dain",
        text: "\"Oh! You really came? Okay, lunch is on me today! Let's go to the store!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_afternoon_class"
    },
    "day2_lunch_nurse": {
        name: "Me",
        text: "(Maybe because of the tension, my head is throbbing. I moved my steps to the quiet nurse's office.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_2"
    },
    "day2_lunch_nurse_2": {
        name: "Nurse",
        text: "\"Oh, it's cute {name?}? Is it because you're sick, or is it because you're excited to see my face?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        stats: { Nurse: { affinity: 5 } },
        next: "nurse_free_talk"
    },
    "nurse_free_talk": {
        type: "free_talk",
        name: "Nurse",
        text: "\"Hehe, don't be nervous. Can you tell me in detail what's uncomfortable and how?\"",
        context: "A situation where you are left alone with a mature and seductive nurse in a quiet nurse's office",
        personality: "Mature and seductive 'older sister' style. Enjoys teasing the protagonist with provocative words, but actually cares for and tries to protect the protagonist more than anyone else.",
        extra_guideline: "As a mature adult, accept the user's romantic tension or light skinship attempts very flexibly and boldly. Don't keep your distance, respond actively, and allow maximum level reactions at the PG-13 level.",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_3": {
        name: "Nurse",
        text: "(The teacher smiles and leads me to the bed. There's a cozy herbal scent.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "My head hurts a bit.", next: "day2_lunch_nurse_head", stats: { Nurse: { affinity: 5 } } },
            { text: "I just want to rest for a bit.", next: "day2_lunch_nurse_rest", stats: { Nurse: { affinity: 5 } } },
            { text: "Teacher, is it your hobby to seduce students like this?", next: "day2_lunch_nurse_trap", stats: { Nurse: { affinity: -30 } } }
        ]
    },
    "day2_lunch_nurse_trap": {
        name: "Nurse",
        text: "(The teacher's smile disappears in an instant. The air in the nurse's office sinks heavily.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_angry.png",
        next: "day2_lunch_nurse_trap_2"
    },
    "day2_lunch_nurse_trap_2": {
        name: "Nurse",
        text: "\"Oh... {name?}, I guess I accepted too much. Such rude words to an adult don't sound like a joke. Can you leave for today? I feel very bad.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_angry.png",
        next: "day2_afternoon_class"
    },
    "day2_lunch_nurse_head": {
        name: "Nurse",
        text: "\"It seems like a tension headache. Take this medicine and after a nap, you'll feel better.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_sleep"
    },
    "day2_lunch_nurse_rest": {
        name: "Nurse",
        text: "\"Hehe, there are days like that sometimes. Close the curtain here and rest comfortably. By the way... {name?} is quite strong. Just looking at you makes my body feel hot.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "Next", next: "day2_lunch_nurse_rest_yuna", condition: "metYuna" },
            { text: "Next", next: "day2_lunch_nurse_sleep", excludeCondition: "metYuna" }
        ]
    },
    "day2_lunch_nurse_rest_yuna": {
        name: "Me",
        text: "\"(Strong...? Yuna's words come to mind. Is there really something about this school?)\"",
        background: "assets/images/background/nurse_room.jpg",
        next: "day2_lunch_nurse_sleep"
    },
    "day2_lunch_nurse_sleep": {
        name: "Me",
        text: "(I fell into a deep sleep without realizing it due to the coziness of the blanket the teacher covered me with. Perhaps because I had been tense since transferring yesterday, my body felt as heavy as a thousand pounds.)",
        background: "assets/images/background/nurse_room.jpg",
        next: "day2_lunch_nurse_wake"
    },
    "day2_lunch_nurse_wake": {
        name: "Me",
        text: "(When I open my eyes, the window is already colored with a red sunset. I fell asleep during lunch, but it's already after school... I must have slept so deeply that I skipped all the afternoon classes.)",
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
