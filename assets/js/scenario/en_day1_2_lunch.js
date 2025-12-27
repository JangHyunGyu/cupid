if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

Object.assign(SCENARIO[1], {
    "lunch_time": {
        name: "Me",
        text: "(Morning classes are over! Finally, the long-awaited lunch time. Kids are rushing to the cafeteria.)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "lunch_time_2"
    },
    "lunch_time_2": {
        name: "Me",
        text: "(Lunch time... Kids are playing on the field outside. What should I do?)",
        choices: [
            { text: "Approach Seoyeon and suggest eating lunch together.", next: "lunch_seoyeon" },
            { text: "Look around the school alone and find a quiet place to eat.", next: "lunch_alone" },
            { text: "Follow the sound of a volleyball from the gym.", next: "lunch_dain" },
            { text: "I don't feel well, so I go to the nurse's office.", next: "lunch_nurse" }
        ]
    },
    "lunch_seoyeon": {
        name: "Seoyeon",
        text: "(As I approach Seoyeon, she welcomes me with a bright smile.)",
        character: "assets/images/characters/seyoun_nomal.png",
        setFlag: "metSeoyeon",
        next: "lunch_seoyeon_2"
    },
    "lunch_seoyeon_2": {
        name: "Seoyeon",
        text: "\"I was just looking for you! We have a secret spot on the rooftop, want to eat there together?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Yeah! I wanted to eat with you, Seoyeon.", next: "rooftop_1", stats: { Seoyeon: { affinity: 10 } } },
            { text: "Um... I promised to eat with others. (Decline)", next: "lunch_alone", stats: { Seoyeon: { affinity: -15 } } },
            { text: "Rooftop? Do I have to go all the way there? It's a hassle.", next: "rooftop_talk_rude", stats: { Seoyeon: { affinity: -25 } } }
        ]
    },
    "rooftop_1": {
        name: "Seoyeon",
        text: "(The rooftop with a cool breeze. Seoyeon takes out a lunch box she prepared with care.)",
        background: "assets/images/background/top_school.png",
        next: "rooftop_1_2"
    },
    "rooftop_1_2": {
        name: "Seoyeon",
        text: "(She hands me chopsticks and smiles shyly. My heart flutters a bit.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_1_2_2"
    },
    "rooftop_1_2_2": {
        name: "Seoyeon",
        text: "\"Here, I woke up early this morning to make this. I hope it suits your taste...\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_1_3"
    },
    "rooftop_1_3": {
        name: "Seoyeon",
        text: "\"Especially these octopus-shaped sausages, they're my masterpiece! Want to try one?\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Wow, it looks delicious! You're a great cook, Seoyeon.", next: "rooftop_talk_food", stats: { Seoyeon: { affinity: 5 } } },
            { 
                text: "Say 'Ah'... (Gathering courage!)", 
                next: "rooftop_talk_ah_fail", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 40, next: "rooftop_talk_ah" }
                ],
                stats: { Seoyeon: { affinity: 5 } } 
            },
            { text: "I've never had such a heartfelt lunch box. Thank you.", next: "rooftop_talk_thanks", stats: { Seoyeon: { affinity: 10 } } },
            { text: "It doesn't look that good... I should've just gone to the snack bar.", next: "rooftop_talk_rude", stats: { Seoyeon: { affinity: -30 } } }
        ]
    },
    "rooftop_talk_ah_fail": {
        name: "Seoyeon",
        text: "(Seoyeon's face hardens instantly. She puts down her chopsticks, looking flustered.) \"Um... that's a bit... {name?}, we're not that close yet, are we? I think the joke went too far.\"",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: -15 } },
        next: "rooftop_2"
    },
    "rooftop_talk_rude": {
        name: "Seoyeon",
        text: "(Seoyeon's hand trembles slightly. She tries to force a smile, but her eyes get watery.)",
        character: "assets/images/characters/seyoun_sad.png",
        next: "rooftop_2"
    },
    "rooftop_talk_food": {
        name: "Seoyeon",
        text: "(She blushes happily.)",
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
        text: "\"...Are you lost? Students don't usually come here. You managed to find your way here.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_intro"
    },
    "yuna_intro": {
        name: "???",
        text: "(She slowly raises her head and looks at me. Her deep and mysterious purple eyes quietly observe me.)",
        next: "yuna_intro_name_ask"
    },
    "yuna_intro_name_ask": {
        name: "???",
        text: "\"I'm Yuna. And you... what's your name?\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_intro_name_share"
    },
    "yuna_intro_name_share": {
        name: "Me",
        text: "\"I'm {name}. I just transferred today.\"",
        setFlag: "knowsName_유나",
        next: "yuna_intro_2"
    },
    "yuna_intro_2": {
        name: "Yuna",
        text: "\"{name}... Hehe, that's a nice name. This school... is very different from how it looks. From you... somehow I feel a familiar atmosphere.\"",
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
        background: "assets/images/background/store.png",
        next: "lunch_store_2"
    },
    "lunch_store_2": {
        name: "Me",
        text: "(As I turn around happily eating my bread, I bump into someone.)",
        next: "lunch_store_teacher"
    },
    "lunch_store_teacher": {
        name: "Homeroom Teacher",
        text: "\"Oh, sorry! ...Wait, isn't that {name?}? Did you come to the store to buy bread too?\"",
        character: "assets/images/characters/teacher.png",
        next: "lunch_store_teacher_2"
    },
    "lunch_store_teacher_2": {
        name: "Homeroom Teacher",
        text: "\"Hehe, that bread is really delicious. I came to buy it too, but I guess I was a bit late. Enjoy!\"",
        character: "assets/images/characters/teacher.png",
        stats: { Teacher: { affinity: 5 } },
        next: "after_school_start"
    },
    "lunch_sleep": {
        name: "Me",
        text: "(I lie face down on the desk and try to sleep. The sunlight coming through the window warms my back.)",
        next: "lunch_sleep_2"
    },
    "lunch_sleep_2": {
        name: "Me",
        text: "(In my dream, I heard someone calling my name. A very nostalgic and sad voice...)",
        next: "lunch_sleep_3"
    },
    "lunch_sleep_3": {
        name: "Me",
        text: "(When I opened my eyes, someone was staring intently at my face.)",
        next: "lunch_sleep_seoyeon"
    },
    "lunch_sleep_seoyeon": {
        name: "Seoyeon",
        text: "\"Ah, you're awake? Sorry... You were sleeping so soundly that I felt bad waking you up.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "lunch_sleep_seoyeon_2"
    },
    "lunch_sleep_seoyeon_2": {
        name: "Seoyeon",
        text: "\"You look tired, so you can sleep more. I'll keep watch for you!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 5 } },
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
        text: "\"Hey, you there! Don't just watch from there, come here and let's have a game! You look like you're good at sports?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "dain_name_share"
    },
    "dain_name_share": {
        name: "Me",
        text: "\"Me? I'm {name}. I just transferred today.\"",
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
        choices: [
            { text: "Alright, let's do this!", next: "lunch_dain_play", stats: { Dain: { affinity: 10 } } },
            { text: "I'm not great at volleyball... can you teach me?", next: "lunch_dain_teach", stats: { Dain: { affinity: 15 } } }
        ]
    },
    "lunch_dain_play": {
        name: "Dain",
        text: "\"Oh! That's the spirit! Here I come! (Dain sends a powerful serve. I barely manage to return it)\"",
        character: "assets/images/characters/dain_active.png",
        next: "after_school_start"
    },
    "lunch_dain_teach": {
        name: "Dain",
        text: "\"Hehe, don't worry! I, Dain, will teach you from the basics. Now, let's start with your posture!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "after_school_start"
    },
    "lunch_nurse": {
        name: "Me",
        text: "(Maybe because it's my first day, my head is throbbing a bit due to tension. I headed to the quiet nurse's office.)",
        background: "assets/images/background/nurse_room.jpg",
        next: "lunch_nurse_2"
    },
    "lunch_nurse_2": {
        name: "???",
        text: "\"Oh, a new face? Was there such a cute student in our school?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        next: "nurse_intro"
    },
    "nurse_intro": {
        name: "Nurse",
        text: "\"I'm the nurse here. Everyone just calls me 'Teacher'... but I could tell you my name specially?\"",
        character: "assets/images/characters/nurse.png",        setFlag: "metNurse",        next: "nurse_name_share_pre"
    },
    "nurse_name_share_pre": {
        name: "Me",
        text: "\"My name is '{name}'.\"",
        setFlag: "knowsName_양호선생님",
        next: "nurse_name_share"
    },
    "nurse_name_share": {
        name: "Nurse",
        text: "\"{name}... Hehe, your eyes are as clear as your name. Why did you come here? Are you sick? Or... did you just want to see me?\"",
        character: "assets/images/characters/nurse.png",
        next: "nurse_free_talk_day1"
    },
    "nurse_free_talk_day1": {
        type: "free_talk",
        name: "Nurse",
        text: "\"Don't be nervous. You can be comfortable here. Do you have anything you're curious about?\"",
        context: "A situation where you talk to the nurse you met for the first time in the nurse's office. The teacher shows a provocative attitude, feeling a strange interest in the protagonist.",
        personality: "Mature and seductive 'older sister' style. Enjoys teasing the protagonist with provocative words, but actually cares for and tries to protect the protagonist more than anyone else.",
        character: "assets/images/characters/nurse.png",
        next: "after_school_start"
    }
});
