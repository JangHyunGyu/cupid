if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

Object.assign(SCENARIO[1], {
    "lunch_time": {
        name: "Me",
        text: "(Finally, it's lunch time! Students are rushing to the cafeteria. The sunlight streaming through the window is beautiful. What should I do?)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "lunch_time_2"
    },
    "lunch_time_2": {
        name: "Me",
        text: "(The classroom still feels strange... but I feel a strange excitement. Let's go where my feet take me.)",
        choices: [
            { 
                text: "Go to Seoyeon and ask to have lunch together.", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 40, next: "lunch_seoyeon_high" },
                    { minAffinity: 0, next: "lunch_seoyeon_normal_branch" },
                    { minAffinity: -100, next: "lunch_seoyeon_low" }
                ],
                next: "lunch_seoyeon_normal_branch" 
            },
            { text: "Find a quiet spot to explore the school alone.", next: "lunch_alone" },
            { text: "Follow the energetic sounds from the gym.", next: "lunch_dain" },
            { text: "Go to the nurse's office, feeling a bit tired.", next: "lunch_nurse" },
            { text: "Go to the school store to buy some bread.", next: "lunch_store" },
            { text: "Stay in the classroom and take a nap.", next: "lunch_sleep" }
        ]
    },
    "lunch_seoyeon_high": {
        name: "Seoyeon",
        text: "(She runs to me with a bright smile as soon as she sees me. Her eyes sparkle with anticipation.) \"{name}! I've been looking for you. Let's have lunch together. I'll take you somewhere special!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        setFlag: "metSeoyeon",
        next: "rooftop_1"
    },
    "lunch_seoyeon_low": {
        name: "Seoyeon",
        text: "\"{name}... just in time. The teacher asked me to look after you... if you don't mind, want to have lunch on the rooftop?\"",
        character: "assets/images/characters/seyoun_pout.png",
        setFlag: "metSeoyeon",
        next: "lunch_seoyeon_2_normal"
    },
    "lunch_seoyeon_normal_branch": {
        name: "Seoyeon",
        text: "(When I approach her, she gives me a sweet smile as if she were waiting.)",
        character: "assets/images/characters/seyoun_normal.png",
        setFlag: "metSeoyeon",
        branches: [
            { next: "lunch_seoyeon_2_study", condition: "personality_study" },
            { next: "lunch_seoyeon_2_party", condition: "personality_active" },
            { next: "lunch_seoyeon_2_normal" }
        ]
    },
    "lunch_seoyeon_2_study": {
        name: "Seoyeon",
        text: "\"Transfer student, are you getting used to things? I was just about to look for you. Want to go to the rooftop for lunch?\"",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { text: "Yeah! I wanted to eat with you, Seoyeon.", next: "rooftop_1", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Sorry, I want to be alone today.", next: "lunch_alone", stats: { Seoyeon: { affinity: -10 } } }
        ]
    },
    "lunch_seoyeon_2_party": {
        name: "Seoyeon",
        text: "\"Oh! Transfer student! Already made many friends? How about lunch at our secret rooftop spot?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        choices: [
            { text: "Yeah! I wanted to eat with you, Seoyeon.", next: "rooftop_1", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Sorry, I want to be alone today.", next: "lunch_alone", stats: { Seoyeon: { affinity: -10 } } }
        ]
    },
    "lunch_seoyeon_2_normal": {
        name: "Seoyeon",
        text: "\"Transfer student! I was just about to find you. Want to have lunch on the rooftop?\"",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { text: "Yeah! I wanted to eat with you, Seoyeon.", next: "rooftop_1", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Sorry, I want to be alone today.", next: "lunch_alone", stats: { Seoyeon: { affinity: -10 } } }
        ]
    },
    "rooftop_1": {
        name: "Seoyeon",
        text: "(The rooftop with a cool, pleasant breeze. Seoyeon takes out a lunch box she carefully prepared.)",
        background: "assets/images/background/top_school.png",
        setFlag: "ate_lunch_seoyeon",
        next: "rooftop_1_2"
    },
    "rooftop_1_2": {
        name: "Seoyeon",
        text: "\"Actually... {name}, I was a bit worried if this would suit your taste. I made a little extra for you.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_talk_main"
    },
    "rooftop_talk_main": {
        name: "Me",
        text: "(My heart flutters as she hands me the chopsticks with a shy smile.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_normal.png",
        next: "rooftop_1_2_2"
    },
    "rooftop_1_2_2": {
        name: "Seoyeon",
        text: "\"Ta-da! I made it myself. I thought school lunch might not be great on your first day... I hope you like it.\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_normal.png",
        next: "rooftop_1_3"
    },
    "rooftop_1_3": {
        name: "Seoyeon",
        text: "\"Especially these octopus sausages, they're my specialty! Want to try one?\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { text: "Wow, it looks delicious! You're a cooking genius, Seoyeon.", next: "rooftop_talk_food", stats: { Seoyeon: { affinity: 5 } } },
            {
                text: "Can you... feed me?",
                next: "rooftop_talk_ah_fail",
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 20, next: "rooftop_talk_ah" }
                ],
                stats: { Seoyeon: { affinity: 8 } }
            },
            { text: "I've never seen such a thoughtful lunch box. Thank you.", next: "rooftop_talk_thanks", stats: { Seoyeon: { affinity: 10 } } }
        ]
    },
    "rooftop_talk_ah_fail": {
        name: "Seoyeon",
        text: "(Her expression hardens instantly.) \"Um... that's a bit... {name}, we aren't that close yet. That joke went too far...\"",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: -30 } },
        next: "rooftop_awkward"
    },
    "rooftop_awkward": {
        name: "Me",
        text: "(The atmosphere became awkward. We ate in silence for a while.)",
        next: "rooftop_2"
    },
    "rooftop_talk_food": {
        name: "Seoyeon",
        text: "\"{name}... I'm so glad! I was really nervous because it's my first time giving someone my cooking. Eat up!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_2"
    },
    "rooftop_talk_ah": {
        name: "Seoyeon",
        text: "(Blushing, she carefully brings a sausage to my mouth.) \"...You're really something. Just this once! Okay... 'ah~'\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "rooftop_2"
    },
    "rooftop_talk_thanks": {
        name: "Seoyeon",
        text: "(She smiles shyly and wipes some sauce from the corner of my mouth.) \"I'm the one who should be thankful. Eating with you makes it taste even better.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "rooftop_2"
    },
    "rooftop_2": {
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 0, next: "rooftop_2_normal" },
            { minAffinity: -100, next: "rooftop_2_low" }
        ],
        next: "rooftop_2_normal"
    },
    "rooftop_2_normal": {
        name: "Seoyeon",
        text: "(After finishing the meal, we sit side by side and look at the distant sky. In the gentle silence, she speaks carefully.) \"Um, {name}... actually, I've felt comfortable with you from the moment I first saw you.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "rooftop_free_talk"
    },
    "rooftop_2_low": {
        name: "Seoyeon",
        text: "(After a heavy silence, she speaks.) \"Sorry... I wanted to get to know you better, but conversation seems harder than I thought. Still, thanks for having lunch with me.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "rooftop_free_talk"
    },
    "rooftop_free_talk": {
        type: "free_talk",
        name: "Seoyeon",
        text: "\"Hehe, shall we talk a bit more comfortably? Ask me anything you're curious about.\"",
        context: "A peaceful and romantic atmosphere after having lunch alone with Seoyeon on the school rooftop. Towards the end of the conversation, please have Seoyeon ask why our relationship feels so comfortable.",
        personality: "Honest and kind. Shows deep interest in the protagonist and hopes the relationship progresses.",
        character: "assets/images/characters/seyoun_shy.png",
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 25, next: "rooftop_choices_high" },
            { minAffinity: 0, next: "rooftop_choices" },
            { minAffinity: -100, next: "rooftop_choices_low" }
        ],
        next: "rooftop_choices"
    },
    "rooftop_choices_high": {
        name: "Me",
        text: "(Seoyeon's eyes pierce through me. She asks with a slight smile.) \"{name}, why do you think we clicked so quickly?\"",
        character: "assets/images/characters/seyoun_shy2.png",
        choices: [
            { text: "Maybe... it's fate?", next: "rooftop_destiny_high" },
            { text: "It's because you're so kind and warm.", next: "rooftop_kind_high" },
            { text: "Well, it still feels a bit mysterious.", next: "rooftop_comfortable_high" }
        ]
    },
    "rooftop_choices_low": {
        name: "Me",
        text: "(Seoyeon asks with a slightly awkward smile.) \"Well, why is it so hard for us to talk...? What do you think?\"",
        character: "assets/images/characters/seyoun_pout.png",
        choices: [
            { text: "Maybe it's a prank of fate.", next: "rooftop_destiny_low" },
            { text: "It's just because we're still getting to know each other.", next: "rooftop_kind_low" },
            { text: "I think we just need more time.", next: "rooftop_comfortable_low" }
        ]
    },
    "rooftop_choices": {
        name: "Me",
        text: "(She looks at me, eyes sparkling as she waits for my answer.) \"How is it being with me? Why do you think we got close so fast?\"",
        choices: [
            { text: "Maybe it's fate?", next: "rooftop_destiny_normal" },
            { text: "It's because you treat me so well.", next: "rooftop_kind_normal" },
            { text: "It just happened naturally.", next: "rooftop_comfortable_normal" }
        ]
    },
    "rooftop_destiny_high": {
        name: "Seoyeon",
        text: "(Blushing, she holds my hand tightly. A warm heat is transmitted.) \"I think so too... being like this with {name} feels like a dream. Can we... keep being together like this, like fate?\"",
        character: "assets/images/characters/seyoun_shy2.png",
        stats: { Seoyeon: { affinity: 10 } },
        next: "seyoun_contact_exchange"
    },
    "rooftop_destiny_normal": {
        name: "Seoyeon",
        text: "(Smiling shyly, she gently overlaps her hand on mine.) \"Fate... hehe, that's a bit of an embarrassing word, but I don't dislike it. I feel that way too, somehow.\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 7 } },
        next: "seyoun_contact_exchange"
    },
    "rooftop_destiny_low": {
        name: "Seoyeon",
        text: "(She quickly pulls her hand away, flustered.) \"Fate!? Saying that on the first day... I think you're joking too much. We aren't in that kind of relationship yet.\"",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: -10 } },
        next: "after_school_start"
    },
    "rooftop_kind_high": {
        name: "Seoyeon",
        text: "\"I'm so glad to hear you say that... Knowing you appreciate my feelings gives me great strength.\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 8 } },
        next: "seyoun_contact_exchange"
    },
    "rooftop_kind_normal": {
        name: "Seoyeon",
        text: "\"Hehe, exactly! I put a lot of effort into making you feel comfortable. Thanks for noticing!\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "seyoun_contact_exchange"
    },
    "rooftop_kind_low": {
        name: "Seoyeon",
        text: "\"Yeah, right. We can take our time getting to know each other. Let's go down now.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "after_school_start"
    },
    "rooftop_comfortable_high": {
        name: "Seoyeon",
        text: "(She leans her head slightly on my shoulder.) \"Me too... I feel so at ease with {name}. Like we've known each other for a long time.\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 8 } },
        next: "seyoun_contact_exchange"
    },
    "rooftop_comfortable_normal": {
        name: "Seoyeon",
        text: "\"I'm glad you feel comfortable. Being with you makes me feel like I can set down the burden of being the student council president for a moment. Thank you.\"",
        character: "assets/images/characters/seyoun_normal.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "seyoun_contact_exchange"
    },
    "rooftop_comfortable_low": {
        name: "Seoyeon",
        text: "\"Well, time will tell. Let's go, class is about to start.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "after_school_start"
    },
    "seyoun_contact_exchange": {
        name: "Seoyeon",
        text: "(She hands me her smartphone with a shy smile.) \"Um... could I get your contact info? I want to ask you about lunch menus, and... mostly, I just want to keep in touch.\"",
        character: "assets/images/characters/seyoun_shy.png",
        choices: [
            { text: "Of course! I wanted to talk more with you too, Seoyeon.", next: "seyoun_contact_success", setFlags: ["has_number_seyoun", "has_any_contact"] },
            { text: "Sorry, I think it's a bit too early.", next: "seyoun_contact_fail" }
        ]
    },
    "seyoun_contact_success": {
        name: "Seoyeon",
        text: "(She saves the number with a bright smile.) \"Thanks! I'll message you later. You better reply!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 10 } },
        next: "after_school_start"
    },
    "seyoun_contact_fail": {
        name: "Seoyeon",
        text: "\"Ah... I see. I guess I was too hasty. Sorry! We can just get closer slowly. Let's go!\"",
        stats: { Seoyeon: { affinity: -15 } },
        character: "assets/images/characters/seyoun_pout.png",
        next: "after_school_start"
    },
    "lunch_alone": {
        name: "Me",
        text: "(While quietly exploring the school, I arrived at the Library Annex. Under the yellow sunlight streaming through the window, a girl of mysterious aura was reading alone.)",
        background: "assets/images/background/library_old.png",
        character: null,
        next: "alone_2"
    },
    "alone_2": {
        name: "???",
        text: "(She looks up from her book and stares at me. Her purple eyes pull me in strangely.) \"...Are you lost? People don't usually come here.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "yuna_intro_name_ask"
    },
    "yuna_intro_name_ask": {
        name: "???",
        text: "\"I'm Yuna. What's... your name?\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "yuna_intro_name_share"
    },
    "yuna_intro_name_share": {
        name: "Me",
        text: "\"I'm {name}. I just transferred today.\"",
        setFlag: "knowsName_Yuna",
        next: "yuna_intro_2"
    },
    "yuna_intro_2": {
        name: "Yuna",
        text: "\"{name}... hehe, that's a nice name. But be careful... this school is much more dangerous and mysterious than you think.\"",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "metYuna",
        next: "yuna_free_talk"
    },
    "yuna_free_talk": {
        type: "free_talk",
        name: "Yuna",
        text: "\"...Is there something you're curious about? Or are you curious about the 'real' face of this school?\"",
        context: "Conversing with Yuna, whom you just met in the quiet Library Annex. Yuna is a very mysterious and cold girl. At the end of the conversation, have Yuna ask if you want to know more about her or the school's secrets.",
        personality: "Cold and mysterious atmosphere. Feels a strange scent and destiny from the protagonist.",
        character: "assets/images/characters/yuna_normal.png",
        affinityChar: "Yuna",
        affinityBranches: [
            { minAffinity: 15, next: "yuna_choices_high" },
            { minAffinity: 0, next: "yuna_choices" },
            { minAffinity: -100, next: "yuna_choices_low" }
        ],
        next: "yuna_choices"
    },
    "yuna_choices_high": {
        name: "Me",
        text: "(Yuna's purple eyes pierce through me.) \"{name}, can you handle it? The deep secrets of this school...\"",
        character: "assets/images/characters/yuna_smile.png",
        choices: [
            { text: "With you, I don't care about any secrets.", next: "yuna_secret_high" },
            { text: "Somehow, you feel familiar to me.", next: "yuna_scent_high" },
            { text: "Even if it's dangerous, I can't help being curious about you.", next: "yuna_danger_high" }
        ]
    },
    "yuna_choices_low": {
        name: "Me",
        text: "(Yuna's eyes grow even colder.) \"You should stop. This isn't a place for someone like you...\"",
        character: "assets/images/characters/yuna_angry.png",
        choices: [
            { text: "Secrets? What do you mean by that?", next: "yuna_secret_low" },
            { text: "Who exactly are you?", next: "yuna_scent_low" },
            { text: "You somehow look dangerous. But I can't take my eyes off you.", next: "yuna_danger_low" }
        ]
    },
    "yuna_choices": {
        name: "Me",
        text: "(Yuna flips a page indifferently and asks.) \"Are you curious? About the things this school is hiding...\"",
        choices: [
            { text: "I'm a bit curious about the truth you mentioned.", next: "yuna_secret_normal" },
            { text: "Familiar? Have you seen me before?", next: "yuna_scent_normal" },
            { text: "Well, I'm not sure yet.", next: "yuna_danger_normal" }
        ]
    },
    "yuna_secret_high": {
        name: "Yuna",
        text: "(She brushes against the back of my hand and smiles enchantingly.) \"Don't forget that resolve. Because now we've chosen a path of no return. I'll show you the truth myself.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 10 } },
        next: "after_school_start"
    },
    "yuna_secret_normal": {
        name: "Yuna",
        text: "\"That curiosity might lead you to ruin. But if you're okay with that... come find me anytime. I'll be waiting here in the 'Annex'.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 5 } },
        next: "after_school_start"
    },
    "yuna_secret_low": {
        name: "Yuna",
        text: "\"A coward, I see. Right, that's probably the wise choice for you. Don't ever come back here.\"",
        character: "assets/images/characters/yuna_angry.png",
        stats: { Yuna: { affinity: -10 } },
        next: "after_school_start"
    },
    "yuna_scent_high": {
        name: "Yuna",
        text: "(She leans in close and feels my breath.) \"Exactly... I feel a very nostalgic scent from you. Thank you, {name}. It feels like you've truly come back.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 10 } },
        next: "after_school_start"
    },
    "yuna_scent_normal": {
        name: "Yuna",
        text: "\"You don't remember... No, never mind. You'll find out someday. Why this school called you.\"",
        character: "assets/images/characters/yuna_normal.png",
        stats: { Yuna: { affinity: 3 } },
        next: "after_school_start"
    },
    "yuna_scent_low": {
        name: "Yuna",
        text: "\"My identity? If you knew who I was, you'd probably go mad. Shut up and get out.\"",
        character: "assets/images/characters/yuna_angry.png",
        stats: { Yuna: { affinity: -15 } },
        next: "after_school_start"
    },
    "yuna_danger_high": {
        name: "Yuna",
        text: "(She tilts my chin up and whispers.) \"Like a dangerous moth to a flame... Fine. I'll watch to see how long your light can burn.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 12 } },
        next: "after_school_start"
    },
    "yuna_danger_normal": {
        name: "Yuna",
        text: "\"Being called dangerous is actually a compliment, right? Hehe, not bad. I'll see where your curiosity take you.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 6 } },
        next: "after_school_start"
    },
    "yuna_danger_low": {
        name: "Yuna",
        text: "\"...You really are clueless. Don't test my patience any further.\"",
        character: "assets/images/characters/yuna_angry.png",
        stats: { Yuna: { affinity: -20 } },
        next: "after_school_start"
    },
    "lunch_dain": {
        name: "Me",
        text: "(When I open the gym door, I hear energetic shouts and the sound of a volleyball bouncing. A girl was sweating and focused on her practice.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_normal.png",
        setFlag: "metDain",
        next: "dain_intro"
    },
    "dain_intro": {
        name: "Dain",
        text: "(She sees me and waves with a bright smile.) \"Oh! Transfer student! Perfect timing. Don't just stand there watching, come here and catch this ball! You look like you have good athletic reflexes.\"",
        character: "assets/images/characters/dain_normal.png",
        next: "dain_name_share"
    },
    "dain_name_share": {
        name: "Me",
        text: "\"Me? I'm {name}. It's my first time playing volleyball...\"",
        setFlag: "knowsName_Dain",
        next: "dain_name_share_2"
    },
    "dain_name_share_2": {
        name: "Dain",
        text: "\"{name}? That's a cool name! Don't worry, yours truly Dain will teach you from the basics! Ready?\"",
        character: "assets/images/characters/dain_laugh.png",
        choices: [
            { text: "Okay, let's give it a try!", next: "lunch_dain_play", stats: { Dain: { affinity: 8 } } },
            { text: "I think I'll learn fast if you teach me, Dain.", next: "lunch_dain_teach", stats: { Dain: { affinity: 10 } } }
        ]
    },
    "lunch_dain_play": {
        name: "Dain",
        text: "\"Oh! That's the spirit! Here it comes! (Returning a powerful serve, we spent some time sweating together comfortably)\"",
        character: "assets/images/characters/dain_active.png",
        next: "after_school_start"
    },
    "lunch_dain_teach": {
        name: "Dain",
        text: "\"Ehehe, you know what's up! Great! Let's start Dain's one-on-one special lesson! First, get into position!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "after_school_start"
    },
    "lunch_nurse": {
        name: "Me",
        text: "(Feeling a bit of a headache, I headed to the nurse's office. When I opened the door, a teacher of mature aura greeted me along with the faint scent of aroma.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        setFlag: "metNurse",
        next: "nurse_intro"
    },
    "nurse_intro": {
        name: "Nurse",
        text: "\"Oh my, a cute transfer student? Are you here because you're hurt, or... are you here to see me?\"",
        character: "assets/images/characters/nurse.png",
        next: "nurse_name_share"
    },
    "nurse_name_share": {
        name: "Me",
        text: "\"My name is {name}. I have a headache, maybe because I'm nervous.\"",
        setFlag: "knowsName_Nurse",
        next: "nurse_free_talk_day1"
    },
    "nurse_free_talk_day1": {
        type: "free_talk",
        name: "Nurse",
        text: "\"Big sis... I mean, teacher will make you all better. If you're curious about anything else, feel free to ask.\"",
        context: "Conversing with the nurse whom you just met in the nurse's office. She treats you very attractively and playfully. At the end of the conversation, have her see you off, saying it's time for class.",
        personality: "Mature and relaxed 'big sis' style. Provocative yet kind.",
        character: "assets/images/characters/nurse.png",
        next: "after_school_start"
    },
    "lunch_store": {
        name: "Me",
        text: "(I secured the last chocolate bread from the school store! Just as I'm about to take a bite with joy, I bump into someone.)",
        background: "assets/images/background/store.png",
        next: "lunch_store_teacher"
    },
    "lunch_store_teacher": {
        name: "Homeroom Teacher",
        text: "\"Oh, sorry! ...Wait, isn't that {name}? You like that bread too? Hehe, enjoy!\"",
        character: "assets/images/characters/teacher.png",
        stats: { Teacher: { affinity: 5 } },
        next: "after_school_start"
    },
    "lunch_sleep": {
        name: "Me",
        text: "(A warm afternoon, I fell asleep at my desk. In my dream, someone called my name in a very gentle voice.)",
        next: "lunch_sleep_seoyeon"
    },
    "lunch_sleep_seoyeon": {
        name: "Seoyeon",
        text: "\"{name}... wake up. Class is starting. It was a shame to wake you because you were sleeping so soundly, though. Hehe.\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "after_school_start"
    }
});
