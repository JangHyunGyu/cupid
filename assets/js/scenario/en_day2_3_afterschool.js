if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

Object.assign(SCENARIO[2], {
    "day2_afternoon_class": {
        name: "Me",
        text: "(School's finally over. The red sunset filtering through the window paints the classroom in a sentimental glow. Is it free time now...?)",
        background: "assets/images/background/room_school.png",
        bgm: "sunset2.mp3",
        character: null,
        sunset: true,
        next: "day2_after_school"
    },
    "day2_afternoon_nurse_skip": {
        name: "Me",
        text: "(I wake up on the infirmary bed to find the sun setting. I skipped all my classes, but waking up after a long nap next to the teacher makes my body feel light.)",
        background: "assets/images/background/nurse_room.jpg",
        bgm: "sunset2.mp3",
        character: null,
        sunset: true,
        setFlag: "woke_up_in_nurse_room",
        next: "day2_after_school"
    },
    "day2_after_school": {
        name: "Me",
        text: "(The hallway feels much more familiar than yesterday. What kind of heart-pounding moments are waiting for me today? Let's go where my heart leads.)",
        sunset: true,
        choices: [
            { text: "Go find Seoyeon to watch the sunset together.", next: "day2_after_seoyeon" },
            { text: "Dive into the school's deep secrets with Yuna.", next: "day2_after_yuna", condition: "met_yuna" },
            { text: "Search for Yuna, the mysterious girl who left the note.", next: "day2_after_yuna", excludeCondition: "met_yuna" },
            { text: "Go help Dain practice, her sweat beads looking beautiful.", next: "day2_after_dain", condition: "met_dain" },
            { text: "Head to the lively gym, searching for Dain's voice.", next: "day2_after_dain", excludeCondition: "met_dain" },
            { text: "Talk more with the teacher who took care of me.", next: "day2_after_nurse_stay", condition: "woke_up_in_nurse_room" },
            { text: "Go to the infirmary, scented with faint medicine, to see the teacher.", next: "day2_after_nurse", excludeCondition: "woke_up_in_nurse_room" },
            { text: "Head to the faculty room to see my kind homeroom teacher.", next: "day2_after_teacher" }
        ]
    },
    "day2_after_nurse_stay": {
        name: "Me",
        text: "(I got up from the infirmary bed and stretched. The teacher is still absorbed in her book.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "day2_after_nurse_3"
    },
    "day2_after_seoyeon": {
        name: "Me",
        text: "(Student Council Room. I started helping Seoyeon organize documents. She kindly explains the work to me, a newcomer.)",
        background: "assets/images/background/student_room.png",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        next: "day2_after_seoyeon_work"
    },
    "day2_after_seoyeon_work": {
        name: "Me",
        text: "(Lost in work with Seoyeon, the window outside is bathed in crimson sunset light. The room is filled only with our breathing and the sound of paper.)",
        background: "assets/images/background/student_room.png",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        next: "day2_after_seoyeon_2"
    },
    "day2_after_seoyeon_2": {
        name: "Seoyeon",
        text: "\"Phew... finished at last. {name}, thank you so much for helping this much. I wouldn't have finished this today without you.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        next: "day2_after_seoyeon_3"
    },
    "day2_after_seoyeon_3": {
        name: "Me",
        text: "(Seoyeon stretches with a soft smile. She looks tired, but her eyes are clearer and more beautiful than ever.)",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        choices: [
            { text: "Seoyeon, why are you always so sincere and hardworking?", next: "day2_seoyeon_why", stats: { Seoyeon: { affinity: 3 } } },
            { 
                text: "Let's rest now. I'll make sure to walk you home.", 
                next: "day2_seoyeon_home",
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 25, next: "day2_seoyeon_home_high" },
                    { minAffinity: 0, next: "day2_seoyeon_home" },
                    { minAffinity: -100, next: "day2_seoyeon_home_low" }
                ],
                stats: { Seoyeon: { affinity: 8 } }
            },
            { 
                text: "Your shoulders look tense. Here, stay still for a second.", 
                next: "day2_seoyeon_massage",
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 25, next: "day2_seoyeon_massage_high" },
                    { minAffinity: 0, next: "day2_seoyeon_massage" },
                    { minAffinity: -100, next: "day2_seoyeon_massage_low" }
                ],
                stats: { Seoyeon: { affinity: 10 } }
            }
        ]
    },
    "day2_seoyeon_why": {
        name: "Seoyeon",
        text: "\"Well... it's just something that needs to be done. And I hope that if I do my best, the school might improve, even if just a little.\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_home_high": {
        name: "Seoyeon",
        text: "\"Really...? (Seoyeon smiles brightly and gently takes my arm) Honestly, I wanted to walk with you, {name}. The sunset is so beautiful...\"",
        character: "assets/images/characters/seyoun_shy2.png",
        sunset: true,
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_home": {
        name: "Seoyeon",
        text: "\"Oh...? Walk me home? Ah... well, I'd be very grateful if you did...\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_home_low": {
        name: "Seoyeon",
        text: "\"Oh.. it's okay, I can go alone. Thanks for helping today though.\"",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        stats: { Seoyeon: { affinity: -8 } },
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_massage_high": {
        name: "Seoyeon",
        text: "\"Mmm... {name}... (Seoyeon happily closes her eyes and leans into it) That feels so good... I didn't know your hands were so warm. Just a little more...\"",
        character: "assets/images/characters/seyoun_shy2.png",
        sunset: true,
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_massage": {
        name: "Seoyeon",
        text: "\"Ah... {name}! So suddenly... (She flinches for a moment, but soon relaxes and closes her eyes) ...That feels great. Thank you.\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_massage_low": {
        name: "Seoyeon",
        text: "(Seoyeon quickly pulls away, looking uncomfortable) \"What was that...? It's a bit uncomfortable.\"",
        character: "assets/images/characters/seyoun_pout.png",
        sunset: true,
        stats: { Seoyeon: { affinity: -10 } },
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_night_talk": {
        name: "Seoyeon",
        text: "\"{name}... thank you so much for today. When I'm with you, all my tired thoughts vanish. Should we... have lunch together tomorrow too?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        setFlag: "day2_met_seoyeon_after",
        next: "day2_seoyeon_dain_encounter"
    },
    "day2_seoyeon_dain_encounter": {
        name: "Me",
        text: "(As we leave the student council room together, we bump into someone in the corridor.)",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        branches: [
            { next: "day2_seoyeon_dain_met", condition: "day2_met_dain_lunch" },
            { next: "day2_seoyeon_dain_new" }
        ]
    },
    "day2_seoyeon_dain_met": {
        name: "Dain",
        text: "\"Oh? You're the one from the snack bar earlier! {name}! Wow, hanging out with the student council president?\"",
        characters: {
            left: "assets/images/characters/seyoun_normal.png",
            right: "assets/images/characters/dain_laugh.png"
        },
        sunset: true,
        next: "day2_seoyeon_dain_react"
    },
    "day2_seoyeon_dain_new": {
        name: "???",
        text: "\"Huh? Are you the transfer student? Whoa, already friends with the council president?\"",
        characters: {
            left: "assets/images/characters/seyoun_normal.png",
            right: "assets/images/characters/dain_laugh.png"
        },
        sunset: true,
        setFlag: "knows_name_dain",
        next: "day2_seoyeon_dain_react"
    },
    "day2_seoyeon_dain_react": {
        name: "Seoyeon",
        text: "\"(Seoyeon looks slightly flustered) ...Dain, right? Hi. We just finished work, so we were heading out.\"",
        characters: {
            left: "assets/images/characters/seyoun_normal.png",
            right: "assets/images/characters/dain_laugh.png"
        },
        sunset: true,
        next: "day2_seoyeon_dain_choice"
    },
    "day2_seoyeon_dain_choice": {
        name: "Dain",
        text: "\"Oh, really? I just finished practice! {name}, hang out with me next time too~!\"",
        characters: {
            left: "assets/images/characters/seyoun_normal.png",
            right: "assets/images/characters/dain_laugh.png"
        },
        sunset: true,
        choices: [
            { text: "Sure, definitely!", next: "day2_seoyeon_dain_yes", stats: { Dain: { affinity: 3 }, Seoyeon: { affinity: -2 } } },
            { text: "I have plans with Seoyeon today, so...", next: "day2_seoyeon_dain_no", stats: { Seoyeon: { affinity: 5 }, Dain: { affinity: -2 } } },
            { text: "(Smile vaguely) It'd be nice to hang out with both of you.", next: "day2_seoyeon_dain_both", stats: { Seoyeon: { affinity: -5 }, Dain: { affinity: -5 } } }
        ]
    },
    "day2_seoyeon_dain_yes": {
        name: "Dain",
        text: "\"It's a promise! See you tomorrow, {name}!\"",
        characters: {
            left: "assets/images/characters/seyoun_normal.png",
            right: "assets/images/characters/dain_laugh.png"
        },
        sunset: true,
        next: "day2_seoyeon_dain_end"
    },
    "day2_seoyeon_dain_no": {
        name: "Dain",
        text: "\"Aww~ That's disappointing. But promise me next time!\"",
        characters: {
            left: "assets/images/characters/seyoun_normal.png",
            right: "assets/images/characters/dain_normal.png"
        },
        sunset: true,
        next: "day2_seoyeon_dain_end"
    },
    "day2_seoyeon_dain_both": {
        name: "Me",
        text: "(Both Seoyeon's and Dain's expressions freeze at the same time. Did I say something wrong...?)",
        characters: {
            left: "assets/images/characters/seyoun_normal.png",
            right: "assets/images/characters/dain_normal.png"
        },
        sunset: true,
        next: "day2_seoyeon_dain_both_2"
    },
    "day2_seoyeon_dain_both_2": {
        name: "Dain",
        text: "\"...What? Both of us? What's that supposed to mean?\"",
        characters: {
            left: "assets/images/characters/seyoun_normal.png",
            right: "assets/images/characters/dain_pout.png"
        },
        sunset: true,
        next: "day2_seoyeon_dain_both_3"
    },
    "day2_seoyeon_dain_both_3": {
        name: "Seoyeon",
        text: "\"(Seoyeon smiles coldly) Heh... {name} sure is popular, huh? The type who says yes to everyone, I guess.\"",
        characters: {
            left: "assets/images/characters/seyoun_normal.png",
            right: "assets/images/characters/dain_pout.png"
        },
        sunset: true,
        next: "day2_seoyeon_dain_both_4"
    },
    "day2_seoyeon_dain_both_4": {
        name: "Dain",
        text: "\"Oh come on, Miss President. But she's got a point though? {name}, you might end up losing both of us like that.\"",
        characters: {
            left: "assets/images/characters/seyoun_normal.png",
            right: "assets/images/characters/dain_normal.png"
        },
        sunset: true,
        next: "day2_seoyeon_dain_both_5"
    },
    "day2_seoyeon_dain_both_5": {
        name: "Me",
        text: "(The two of them exchange glances while staring at me. The atmosphere just got really awkward...)",
        characters: {
            left: "assets/images/characters/seyoun_normal.png",
            right: "assets/images/characters/dain_normal.png"
        },
        sunset: true,
        next: "day2_seoyeon_dain_end"
    },
    "day2_seoyeon_dain_end": {
        name: "Me",
        text: "(Dain waves and walks away. Seoyeon's expression seems slightly stiff for some reason.)",
        sunset: true,
        branches: [
            { next: "day2_end", condition: "has_number_seyoun" },
            { next: "day2_seoyeon_contact_ask" }
        ]
    },
    "day2_seoyeon_contact_ask": {
        name: "Seoyeon",
        text: "\"Oh, right! I haven't asked for your contact info yet. I have a feeling I'll keep wanting to talk to you... Can I have your number?\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        choices: [
            { text: "Sure, contact me anytime. Here's my number.", next: "day2_seoyeon_contact_success", setFlags: ["has_number_seyoun", "has_any_contact"] },
            { text: "Sorry, I'll give it to you when we're a bit closer.", next: "day2_seoyeon_contact_fail" }
        ]
    },
    "day2_seoyeon_contact_success": {
        name: "Seoyeon",
        text: "\"Thank you! I'll definitely message you later. Get home safe!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        stats: { Seoyeon: { affinity: 5 } },
        next: "day2_end"
    },
    "day2_seoyeon_contact_fail": {
        name: "Seoyeon",
        text: "\"Oh... right! I asked too suddenly, didn't I? Sorry. See you at school tomorrow!\"",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        stats: { Seoyeon: { affinity: -10 } },
        next: "day2_end"
    },
    "day2_after_yuna": {
        name: "Me",
        text: "(Library Annex. As I enter the old building, a cool draft of air surrounds me.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        branches: [
            { next: "day2_after_yuna_met", condition: "met_yuna" },
            { next: "day2_after_yuna_new" }
        ]
    },
    "day2_after_yuna_met": {
        name: "Yuna",
        text: "\"You're here. Come, follow me. I have something to show you.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        branches: [
            { next: "day2_after_yuna_follow_again", condition: "visited_warehouse_at_lunch" },
            { next: "day2_after_yuna_follow_new" }
        ]
    },
    "day2_after_yuna_new": {
        name: "???",
        text: "\"You... you came because you're curious about me, right? This school hides a very deep secret.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        setFlag: "met_yuna",
        next: "day2_after_yuna_new_name_ask"
    },
    "day2_after_yuna_new_name_ask": {
        name: "Yuna",
        text: "\"I'm Yuna. What's your name?\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day2_after_yuna_new_name_share"
    },
    "day2_after_yuna_new_name_share": {
        name: "Me",
        text: "\"My name is {name}.\"",
        sunset: true,
        setFlag: "knows_name_yuna",
        next: "day2_after_yuna_new_follow"
    },
    "day2_after_yuna_new_follow": {
        name: "Yuna",
        text: "\"{name}... I'll remember that. Come, follow me. I have something to show only you.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        branches: [
            { next: "day2_after_yuna_follow_again", condition: "visited_warehouse_at_lunch" },
            { next: "day2_after_yuna_follow_new" }
        ]
    },
    "day2_after_yuna_follow_again": {
        name: "Me",
        text: "(I follow Yuna back down to the basement warehouse. The air feels even colder than before. The sunset glow fades as we descend into the shadows.)",
        sunset: true,
        branches: [
            { next: "day2_after_yuna_3_pre_again", condition: "visited_warehouse_at_lunch" },
            { next: "day2_after_yuna_3_pre_new" }
        ]
    },
    "day2_after_yuna_follow_new": {
        name: "Me",
        text: "(I follow Yuna down to a dusty warehouse in the basement. A strange chill hangs in the air. The sunset light barely reaches this deep.)",
        sunset: true,
        branches: [
            { next: "day2_after_yuna_3_pre_again", condition: "visited_warehouse_at_lunch" },
            { next: "day2_after_yuna_3_pre_new" }
        ]
    },
    "day2_after_yuna_3_pre_again": {
        name: "Yuna",
        text: "\"Those symbols we saw earlier... what do you think now? Don't they look even more eerie in this dim light?\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day2_after_yuna_3"
    },
    "day2_after_yuna_3_pre_new": {
        name: "Yuna",
        text: "\"Look, {name}. These patterns on the wall... they match the secrets of this school I've been tracking.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day2_after_yuna_3"
    },
    "day2_after_yuna_3": {
        name: "Me",
        text: "(Yuna points to a crack in the wall. A strange, eye-like symbol is drawn there in reddish ink.)",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        choices: [
            { text: "What does this even mean?", next: "day2_yuna_meaning", stats: { Yuna: { affinity: 4 } } },
            { 
                text: "(Taking Yuna's hand) It's scary, let's get out of here.", 
                next: "day2_yuna_scary",
                affinityChar: "Yuna",
                affinityBranches: [
                    { minAffinity: 20, next: "day2_yuna_scary_high" },
                    { minAffinity: 0, next: "day2_yuna_scary" },
                    { minAffinity: -100, next: "day2_yuna_scary_low" }
                ],
                stats: { Yuna: { affinity: 6 } }
            },
            { text: "This eye... it feels like it's watching us.", next: "day2_yuna_eye", stats: { Yuna: { affinity: 8 } } }
        ]
    },
    "day2_yuna_meaning": {
        name: "Yuna",
        text: "\"Surveillance... or protection. I still don't know who it's for.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day2_yuna_night_talk"
    },
    "day2_yuna_scary_high": {
        name: "Yuna",
        text: "(Yuna holds my hand tightly and smiles softly.) \"...Your hand is warm. It's been a long time since I felt such warmth. Okay, let's go. But... don't let go of my hand.\"",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        stats: { Yuna: { affinity: 5 } },
        next: "day2_yuna_night_talk"
    },
    "day2_yuna_scary": {
        name: "Yuna",
        text: "\"...Your hand is warm. Okay. Let's head back for today.\"",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        next: "day2_yuna_night_talk"
    },
    "day2_yuna_scary_low": {
        name: "Yuna",
        text: "(Yuna coldly pulls her hand away.) \"...Why are you grabbing my hand? Scared? You're quite bold for a coward. Leave alone if you want.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        stats: { Yuna: { affinity: -10 } },
        next: "day2_yuna_night_talk"
    },
    "day2_yuna_eye": {
        name: "Yuna",
        text: "\"Correct. This school might be a giant prison or a laboratory. and we're being tested within it.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "day2_yuna_night_talk"
    },
    "day2_yuna_night_talk": {
        name: "Yuna",
        text: "\"This isn't just graffiti. It's tied to the very purpose of this school. {name}, you've chosen a path with no turning back.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        setFlag: "day2_met_yuna_after",
        next: "day2_yuna_nurse_encounter"
    },
    "day2_yuna_nurse_encounter": {
        name: "Me",
        text: "(As we leave the warehouse with Yuna, we bump into someone in the corridor.)",
        sunset: true,
        branches: [
            { next: "day2_yuna_nurse_met", condition: "met_nurse" },
            { next: "day2_yuna_nurse_new" }
        ]
    },
    "day2_yuna_nurse_met": {
        name: "Nurse",
        text: "\"Oh my, {name}? What are you doing here at this hour? ...And who is this student?\"",
        characters: {
            left: "assets/images/characters/yuna_normal.png",
            right: "assets/images/characters/nurse_normal.png"
        },
        sunset: true,
        next: "day2_yuna_nurse_react"
    },
    "day2_yuna_nurse_new": {
        name: "???",
        text: "\"Hmm? Students at this hour, here? This old warehouse is dangerous...\"",
        characters: {
            left: "assets/images/characters/yuna_normal.png",
            right: "assets/images/characters/nurse_normal.png"
        },
        sunset: true,
        setFlag: "met_nurse",
        next: "day2_yuna_nurse_react"
    },
    "day2_yuna_nurse_react": {
        name: "Yuna",
        text: "\"(Yuna speaks coldly) ...We were just passing by. Don't mind us.\"",
        characters: {
            left: "assets/images/characters/yuna_normal.png",
            right: "assets/images/characters/nurse_normal.png"
        },
        sunset: true,
        next: "day2_yuna_nurse_choice"
    },
    "day2_yuna_nurse_choice": {
        name: "Nurse",
        text: "\"(The nurse looks at Yuna suspiciously) ...Is that so? Hehe, be careful. Dangerous things hide in dark places.\"",
        characters: {
            left: "assets/images/characters/yuna_normal.png",
            right: "assets/images/characters/nurse_normal.png"
        },
        sunset: true,
        choices: [
            { text: "(Hold Yuna's hand) Yes, we'll be careful.", next: "day2_yuna_nurse_protect", stats: { Yuna: { affinity: 5 }, Nurse: { affinity: -2 } } },
            { text: "Ma'am, we were just taking a walk.", next: "day2_yuna_nurse_excuse", stats: { Nurse: { affinity: 3 } } },
            { text: "(Just bow silently)", next: "day2_yuna_nurse_silent", stats: { Yuna: { affinity: 2 } } }
        ]
    },
    "day2_yuna_nurse_protect": {
        name: "Yuna",
        text: "\"(Yuna squeezes my hand slightly) ...Thanks.\"",
        characters: {
            left: "assets/images/characters/yuna_shy.png",
            right: "assets/images/characters/nurse_normal.png"
        },
        sunset: true,
        next: "day2_yuna_nurse_end"
    },
    "day2_yuna_nurse_excuse": {
        name: "Nurse",
        text: "\"Is that so? Hehe, try walking somewhere brighter next time. I worry, you know.\"",
        characters: {
            left: "assets/images/characters/yuna_normal.png",
            right: "assets/images/characters/nurse_normal.png"
        },
        sunset: true,
        next: "day2_yuna_nurse_end"
    },
    "day2_yuna_nurse_silent": {
        name: "Nurse",
        text: "\"(The nurse watches us with a suspicious look, then walks away)\"",
        characters: {
            left: "assets/images/characters/yuna_normal.png",
            right: "assets/images/characters/nurse_normal.png"
        },
        sunset: true,
        next: "day2_yuna_nurse_end"
    },
    "day2_yuna_nurse_end": {
        name: "Yuna",
        text: "\"...That person feels strange. She's not just a normal school nurse. {name}, be careful.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        branches: [
            { next: "day2_end", condition: "has_number_yuna" },
            { next: "day2_yuna_contact_ask" }
        ]
    },
    "day2_yuna_contact_ask": {
        name: "Yuna",
        text: "\"If we're sharing secrets... we need a way to reach each other. Leave your number here.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        choices: [
            { text: "Sure. I want to know everything about you.", next: "day2_yuna_contact_success", setFlags: ["has_number_yuna", "has_any_contact"] },
            { text: "Sorry, I'm still a bit cautious.", next: "day2_yuna_contact_fail", stats: { Yuna: { affinity: -30 } } }
        ]
    },
    "day2_yuna_contact_success": {
        name: "Yuna",
        text: "\"...Done. Now we're connected. When I call... you must come, no matter what.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        stats: { Yuna: { affinity: 8 } },
        next: "day2_end"
    },
    "day2_yuna_contact_fail": {
        name: "Yuna",
        text: "\"...Fine. I won't force you. But remember, opportunities are rare.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day2_end"
    },
    "day2_after_dain": {
        name: "Me",
        text: "(Opening the gym door, the energetic shouts and the sound of volleyballs bouncing greet me.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        branches: [
            { next: "day2_after_dain_met", condition: "met_dain" },
            { next: "day2_after_dain_new" }
        ]
    },
    "day2_after_dain_met": {
        name: "Dain",
        text: "\"Oh! {name}! Perfect timing. Can you help me with practice?\"",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        next: "day2_after_dain_practice"
    },
    "day2_after_dain_practice": {
        name: "Me",
        text: "(Helping Dain with her spikes, I'm soon drenched in sweat. Outside, it has already turned dark.)",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        next: "day2_after_dain_3"
    },
    "day2_after_dain_new": {
        name: "???",
        text: "\"Haa, haa... Your reflexes are insane! We're perfectly in sync for our first time!\"",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        setFlag: "met_dain",
        next: "day2_after_dain_new_name_ask"
    },
    "day2_after_dain_new_name_ask": {
        name: "???",
        text: "\"I'm Dain Jung from Class 2-3! What's your name?\"",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        next: "day2_after_dain_new_name_share"
    },
    "day2_after_dain_new_name_share": {
        name: "Me",
        text: "\"I'm {name}. I'm in Class 2-3, too.\"",
        sunset: true,
        setFlag: "knows_name_dain",
        next: "day2_after_dain_3"
    },
    "day2_after_dain_3": {
        name: "Me",
        text: "(Dain wipes her sweat with a towel and hands me a cold drink.)",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        choices: [
            { text: "It's because you gave me such great tosses.", next: "day2_dain_praise", stats: { Dain: { affinity: 5 } } },
            { text: "Should we have a real match sometime?", next: "day2_dain_match", stats: { Dain: { affinity: 8 } } },
            { text: "Tteokbokki after exercise is the best, right?", next: "day2_dain_food", stats: { Dain: { affinity: 10 } } }
        ]
    },
    "day2_dain_praise": {
        name: "Dain",
        text: "\"Aww, don't be so modest! Anyway, thanks to you, I got some great practice in. Thanks!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        next: "day2_dain_night_talk"
    },
    "day2_dain_match": {
        name: "Dain",
        text: "\"Oh? Confident? Fine, let's make a bet! Loser buys Tteokbokki!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        setFlag: "day2_dain_bet",
        next: "day2_dain_night_talk"
    },
    "day2_dain_food": {
        name: "Dain",
        text: "\"Whoa! You really get it! Tteokbokki with fried sides... man, just thinking about it makes me happy!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        next: "day2_dain_night_talk"
    },
    "day2_dain_night_talk": {
        name: "Dain",
        text: "\"Wow! Your reflexes are no joke. I almost want to recruit you for the team! Great job today, {name}! Get home safe!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        setFlag: "day2_met_dain_after",
        next: "day2_dain_yuna_encounter"
    },
    "day2_dain_yuna_encounter": {
        name: "Me",
        text: "(Just then, I notice someone passing by the gym window. A pale-skinned girl walks quietly down the corridor.)",
        sunset: true,
        next: "day2_dain_yuna_spot"
    },
    "day2_dain_yuna_spot": {
        name: "Dain",
        text: "\"(Dain looks out the window and shivers slightly) That girl... isn't she kind of creepy? She's always wandering around alone like that...\"",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        next: "day2_dain_yuna_choice"
    },
    "day2_dain_yuna_choice": {
        name: "Me",
        text: "(Dain seems uneasy looking at Yuna.)",
        choices: [
            { text: "Yuna? She's just quiet, that's all.", next: "day2_dain_yuna_know", condition: "met_yuna", stats: { Dain: { affinity: 2 }, Yuna: { affinity: 2 } } },
            { text: "Dunno, first time seeing her.", next: "day2_dain_yuna_unknown", excludeCondition: "met_yuna", stats: { Dain: { affinity: 3 } } },
            { text: "You're way brighter and better, Dain!", next: "day2_dain_yuna_compliment", stats: { Dain: { affinity: 5 } } }
        ]
    },
    "day2_dain_yuna_know": {
        name: "Dain",
        text: "\"Huh? You know her? Wow, {name}, you're friends with everyone. But I'm your best friend, right? Right?\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        next: "day2_dain_yuna_end"
    },
    "day2_dain_yuna_unknown": {
        name: "Dain",
        text: "\"Right? She has this different vibe... Anyway, when you're with me, focus only on me!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        next: "day2_dain_yuna_end"
    },
    "day2_dain_yuna_compliment": {
        name: "Dain",
        text: "\"H-hey, what's with that suddenly~! (Dain blushes and playfully hits my shoulder) But thanks! {name}'s the best!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        next: "day2_dain_yuna_end"
    },
    "day2_dain_yuna_end": {
        name: "Me",
        text: "(Yuna disappears into the distance. Dain still seems bothered but quickly returns to her bright expression.)",
        sunset: true,
        branches: [
            { next: "day2_end", condition: "has_number_dain" },
            { next: "day2_dain_contact_ask" }
        ]
    },
    "day2_dain_contact_ask": {
        name: "Dain",
        text: "\"Hey, {name}! If we're going on food tours, we'll need each other's numbers, right? Punch it in!\"",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        choices: [
            { text: "Sure! It'll be fun to explore food places with you.", next: "day2_dain_contact_success", setFlags: ["has_number_dain", "has_any_contact"] },
            { text: "Hmm.. maybe next time.", next: "day2_dain_contact_fail", stats: { Dain: { affinity: -20 } } }
        ]
    },
    "day2_dain_contact_success": {
        name: "Dain",
        text: "\"Contact saved! I'll message you as soon as I find a tasty spot, so be ready!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        stats: { Dain: { affinity: 8 } },
        next: "day2_end"
    },
    "day2_dain_contact_fail": {
        name: "Dain",
        text: "\"What? Playing coy? Fine, fine. I'll work harder until I get your number!\"",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        next: "day2_end"
    },
    "day2_after_nurse": {
        name: "Me",
        text: "(Opening the infirmary door, I see the teacher reading under the gentle scent of herbs.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        branches: [
            { next: "day2_after_nurse_met", condition: "met_nurse" },
            { next: "day2_after_nurse_new" }
        ]
    },
    "day2_after_nurse_met": {
        name: "Nurse",
        text: "\"Oh, {name}. Back again? What's the trouble today? Or... did you just come to see me?\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        affinityChar: "Nurse",
        affinityBranches: [
            { minAffinity: 20, next: "day2_after_nurse_met_high" },
            { minAffinity: 0, next: "day2_after_nurse_met_check" },
            { minAffinity: -100, next: "day2_after_nurse_met_low" }
        ],
        next: "day2_after_nurse_met_check"
    },
    "day2_after_nurse_met_high": {
        name: "Nurse",
        text: "(The teacher looks at me and smiles softly.) \"Hehe, {name}. Seeing you so often makes me start to look forward to it. Come on in.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        stats: { Nurse: { affinity: 3 } },
        branches: [
            { next: "day2_after_nurse_invited", condition: "invited_nurse_home" },
            { next: "day2_after_nurse_3" }
        ]
    },
    "day2_after_nurse_met_check": {
        name: "Nurse",
        text: "\"Oh, {name}. An infirmary visit after school... is something wrong?\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        branches: [
            { next: "day2_after_nurse_invited", condition: "invited_nurse_home" },
            { next: "day2_after_nurse_3" }
        ]
    },
    "day2_after_nurse_met_low": {
        name: "Nurse",
        text: "(The teacher looks at me uncertainly.) \"...It's {name}, right? Are you feeling unwell?\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        branches: [
            { next: "day2_after_nurse_invited", condition: "invited_nurse_home" },
            { next: "day2_after_nurse_3" }
        ]
    },
    "day2_after_nurse_invited": {
        name: "Nurse",
        text: "\"Hehe, {name}. You haven't forgotten our plan to meet at my place this evening, have you? If you're here because you missed me already, I'm truly touched.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "day2_after_nurse_3"
    },
    "day2_after_nurse_new": {
        name: "Nurse",
        text: "\"Oh, a new face? Are you the transfer student? I'm the school nurse.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        setFlag: "met_nurse",
        next: "day2_after_nurse_new_name_ask"
    },
    "day2_after_nurse_new_name_ask": {
        name: "Nurse",
        text: "\"By the way, what's your name? Won't you tell me? Just between us.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "day2_after_nurse_new_name_share"
    },
    "day2_after_nurse_new_name_share": {
        name: "Me",
        text: "\"My name is {name}.\"",
        sunset: true,
        setFlag: "knows_name_nurse",
        next: "day2_after_nurse_3"
    },
    "day2_after_nurse_3": {
        name: "Me",
        text: "(The teacher adjusts her glasses and stares at me intently.)",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        choices: [
            { 
                text: "I came because I missed you.", 
                next: "day2_nurse_miss",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 15, next: "day2_nurse_miss" },
                    { minAffinity: 0, next: "day2_nurse_miss_normal" },
                    { minAffinity: -100, next: "day2_nurse_miss_low" }
                ],
                stats: { Nurse: { affinity: 8 } } 
            },
            { text: "I just wanted some quiet rest.", next: "day2_nurse_rest", stats: { Nurse: { affinity: 3 } } },
            { text: "I love the scent of this room.", next: "day2_nurse_aroma", stats: { Nurse: { affinity: 5 } } }
        ]
    },
    "day2_nurse_miss": {
        name: "Nurse",
        text: "\"Hehe, I like how honest you are. I should give such an honest transfer student a reward, shouldn't I?\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "day2_nurse_night_talk"
    },
    "day2_nurse_miss_normal": {
        name: "Nurse",
        text: "\"Hehe, honesty is good... but saying things like that to a teacher can be misunderstood, {name}. Still, you are quite cute.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "day2_nurse_night_talk"
    },
    "day2_nurse_miss_low": {
        name: "Nurse",
        text: "(The teacher looks at me coldly over her glasses.) \"...I don't think we're quite on such terms yet? Student, keep your jokes appropriate. Just rest here for today.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        stats: { Nurse: { affinity: -8 } },
        next: "day2_nurse_night_talk"
    },
    "day2_nurse_rest": {
        name: "Nurse",
        text: "\"Is that so? Then go ahead and lie down on that bed. I won't disturb you.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "day2_nurse_night_talk"
    },
    "day2_nurse_aroma": {
        name: "Nurse",
        text: "\"Oh, you have sharp senses. This is an aroma oil I blended myself. It's meant to put the mind at ease.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "day2_nurse_night_talk"
    },
    "day2_nurse_night_talk": {
        name: "Nurse",
        text: "(The teacher smiles softly and strokes my hair.) \"Hehe, you came because you wanted more time with me, didn't you? Fine, I'll stay with you a bit longer today, just for you.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "day2_nurse_night_talk_2"
    },
    "day2_nurse_night_talk_2": {
        name: "Me",
        text: "(Chatting with the teacher in the infirmary, the sunset has deepened into dusk. Regretfully, I leave the school, promising to see her again.)",
        background: "assets/images/background/nurse_room.jpg",
        sunset: true,
        setFlag: "day2_met_nurse_after",
        branches: [
            { next: "day2_end", condition: "invited_nurse_home" },
            { next: "day2_nurse_contact_already_have_talk", condition: "has_number_nurse" },
            { next: "day2_nurse_contact_ask" }
        ]
    },
    "day2_nurse_contact_already_have_talk": {
        name: "Nurse",
        text: "\"{name}, we've already exchanged numbers, haven't we? You must contact me if you're bored this evening. I'll be waiting.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        choices: [
            { text: "Yes, I will.", next: "day2_end" },
            { 
                text: "Instead of my number... can I go to your house this evening?", 
                next: "nurse_contact_home_fail_after",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 65, next: "nurse_contact_home_success_after" }
                ]
            }
        ]
    },
    "nurse_contact_home_success_after": {
        name: "Nurse",
        text: "(The teacher's eyes widen, then she whispers in my ear with a seductive smile.) \"Oh... {name}, you're much bolder than I thought. Fine, want to come to my house this evening? I'll send you the address. But... it's a secret from your parents, okay?\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        stats: { Nurse: { affinity: 30 } },
        setFlags: ["invited_nurse_home"],
        next: "day2_end"
    },
    "nurse_contact_home_fail_after": {
        name: "Nurse",
        text: "(The teacher bursts into laughter.) \"Oh my, {name}! You're so cute. But my house is a bit too early, isn't it? Just message me later.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "day2_end"
    },
    "day2_nurse_contact_ask": {
        name: "Nurse",
        text: "\"{name}, why don't you save my number just in case? Contact me anytime you're sick or need someone to talk to.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        choices: [
            { text: "Yes, please!", next: "day2_nurse_contact_success", setFlags: ["has_number_nurse", "has_any_contact"] },
            { text: "It's a bit much for now.", next: "day2_nurse_contact_fail", stats: { Nurse: { affinity: -5 } } }
        ]
    },
    "day2_nurse_contact_success": {
        name: "Nurse",
        text: "\"Hehe, good boy. Then I'll message you later. Have a good evening, {name}.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        stats: { Nurse: { affinity: 10 } },
        next: "day2_end"
    },
    "day2_nurse_contact_fail": {
        name: "Nurse",
        text: "\"Oh, playing hard to get? Fine. Let me know if you change your mind. Get home safe!\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "day2_end"
    },
    "day2_after_teacher": {
        name: "Me",
        text: "(Opening the faculty room door, I see the homeroom teacher working alone under a desk lamp in the empty office.)",
        background: "assets/images/background/teacher_room.png",
        character: "assets/images/characters/teacher_normal.png",
        sunset: true,
        next: "day2_after_teacher_2"
    },
    "day2_after_teacher_2": {
        name: "Homeroom Teacher",
        text: "\"Oh, {name}? What brings you here at this hour? Haven't you gone home yet?\"",
        character: "assets/images/characters/teacher_normal.png",
        sunset: true,
        next: "day2_after_teacher_3"
    },
    "day2_after_teacher_3": {
        name: "Homeroom Teacher",
        text: "\"I have quite a few documents to submit this week... Hehe, I'm showing you such a haggard side of me since your first week.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        choices: [
            { text: "I'll help you. We'll finish much faster together!", next: "day2_after_teacher_work", stats: { Teacher: { affinity: 10 } } },
            { text: "Hang in there! Should I make you a cup of coffee?", next: "day2_after_teacher_coffee", stats: { Teacher: { affinity: 5 } } },
            { text: "Teacher, don't overwork yourself. I'm worried.", next: "day2_after_teacher_worry", stats: { Teacher: { affinity: 8 } } }
        ]
    },
    "day2_after_teacher_work": {
        name: "Me",
        text: "(I sat next to the teacher and started helping her sort the papers. Only the rhythmic sound of turning pages fills the quiet office.)",
        background: "assets/images/background/teacher_room.png",
        character: "assets/images/characters/teacher_normal.png",
        sunset: true,
        next: "day2_after_teacher_work_2"
    },
    "day2_after_teacher_work_2": {
        name: "Homeroom Teacher",
        text: "\"Thank you, {name}. You've been a huge help. I would've been here much longer if I were alone.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "day2_after_teacher_branch"
    },
    "day2_after_teacher_branch": {
        name: "Me",
        text: "(The teacher looks at me quietly, seemingly lost in thought.)",
        sunset: true,
        affinityChar: "Teacher",
        affinityBranches: [
            { minAffinity: 70, next: "day2_after_teacher_special" }
        ],
        next: "day2_after_teacher_normal"
    },
    "day2_after_teacher_special": {
        name: "Homeroom Teacher",
        text: "(The teacher suddenly leans in toward me. I can feel her warm breath and the faint scent of her perfume.)",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "day2_after_teacher_special_2"
    },
    "day2_after_teacher_special_2": {
        name: "Homeroom Teacher",
        text: "\"{name}, I think you're a truly special student. It's only been two days... why do I feel so comfortable, as if we've known each other for years?\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "day2_after_teacher_special_3"
    },
    "day2_after_teacher_special_3": {
        name: "Homeroom Teacher",
        text: "\"As a reward for helping today... I'll drive you home. Shall we talk more in the car?\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        stats: { Teacher: { affinity: 15 } },
        setFlag: "day2_teacher_date",
        next: "day2_end"
    },
    "day2_after_teacher_normal": {
        name: "Homeroom Teacher",
        text: "\"Well, it's late, so you should head home. I'll finish up and leave, too. You did a great job today!\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "day2_end"
    },
    "day2_after_teacher_coffee": {
        name: "Homeroom Teacher",
        text: "\"Oh, coffee? Hehe, thank you for the thought. But I can't have a student prepare it for me. I'll give you a delicious candy instead!\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "day2_after_teacher_normal"
    },
    "day2_after_teacher_worry": {
        name: "Homeroom Teacher",
        text: "\"Thank you for worrying about me. I'm okay! I feel so reassured because {name} is such a kind student.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "day2_after_teacher_normal"
    }
});
