if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

Object.assign(SCENARIO[2], {
    "day2_afternoon_class": {
        name: "Me",
        text: "(The tedious afternoon classes finally end. The classroom is bathed in the orange glow of the sunset. It's finally after school.)",
        background: "assets/images/background/room_school.png",
        character: null,
        sunset: true,
        next: "day2_after_school"
    },
    "day2_afternoon_nurse_skip": {
        name: "Me",
        text: "(I wake up in the nurse's office to find it's already after school. I skipped the entire afternoon, but I feel refreshed.)",
        background: "assets/images/background/nurse_room.jpg",
        character: null,
        sunset: true,
        setFlag: "wokeUpInNurseRoom",
        next: "day2_after_school"
    },
    "day2_after_school": {
        name: "Me",
        text: "(I have a feeling that something even more special will happen today. Where should I go?)",
        sunset: true,
        choices: [
            { text: "Help Seoyeon with student council work.", next: "day2_after_seoyeon" },
            { text: "Uncover more of the school's secrets with Yuna.", next: "day2_after_yuna", condition: "metYuna" },
            { text: "Go to the library annex to find the person who left the note.", next: "day2_after_yuna", excludeCondition: "metYuna" },
            { text: "Help Dain with volleyball practice.", next: "day2_after_dain", condition: "metDain" },
            { text: "Follow the lively sounds coming from the gym.", next: "day2_after_dain", excludeCondition: "metDain" },
            { text: "Stay and talk more with the teacher in the nurse's office.", next: "day2_after_nurse_stay", condition: "wokeUpInNurseRoom" },
            { text: "Go to the teacher in the nurse's office.", next: "day2_after_nurse", excludeCondition: "wokeUpInNurseRoom" },
            { text: "Go to the homeroom teacher in the faculty room.", next: "day2_after_teacher" }
        ]
    },
    "day2_after_nurse_stay": {
        name: "Me",
        text: "(I got up from the nurse's office bed and stretched. The teacher is still reading a book.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "day2_after_nurse_3"
    },
    "day2_after_seoyeon": {
        name: "Me",
        text: "(The student council room. I started organizing documents with Seoyeon. Seoyeon kindly taught me the tasks, as I had just transferred.)",
        background: "assets/images/background/student_room.png",
        character: "assets/images/characters/seyoun_nomal.png",
        sunset: true,
        next: "day2_after_seoyeon_work"
    },
    "day2_after_seoyeon_work": {
        name: "Me",
        text: "(As I focused on organizing documents with Seoyeon, the world outside the window slowly turned dark. The student council room is filled only with the sound of our breathing and the rustling of paper.)",
        background: "assets/images/background/student_room.png",
        character: "assets/images/characters/seyoun_nomal.png",
        night: true,
        next: "day2_after_seoyeon_2"
    },
    "day2_after_seoyeon_2": {
        name: "Seoyeon",
        text: "\"Phew... Finally finished. {name?}, thank you so much for staying late. I wouldn't have finished this today without you.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        night: true,
        next: "day2_after_seoyeon_3"
    },
    "day2_after_seoyeon_3": {
        name: "Me",
        text: "(Seoyeon stretches and gives me a tired but warm smile. Her eyes are still bright despite the long day.)",
        character: "assets/images/characters/seyoun_nomal.png",
        night: true,
        choices: [
            { text: "Seoyeon, why do you work so hard?", next: "day2_seoyeon_why", stats: { Seoyeon: { affinity: 3 } } },
            { 
                text: "Let's go now. I'll walk you home.", 
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
                text: "(Give her a shoulder massage)", 
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
        text: "\"Well... someone has to do it. And I like to think that if I do my best, the school might become a slightly better place.\"",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_home_high": {
        name: "Seoyeon",
        text: "\"Really...? (Seoyeon smiles brightly and gently takes my arm) I actually wanted to walk with {name}. Tonight is so nice...\"",
        character: "assets/images/characters/seyoun_shy2.png",
        night: true,
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_home": {
        name: "Seoyeon",
        text: "\"Oh...? Walk me home? Ah... well, I'd be very happy if you did...\"",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_home_low": {
        name: "Seoyeon",
        text: "\"I'm fine, I can go alone. Thanks for helping today though.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        night: true,
        stats: { Seoyeon: { affinity: -8 } },
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_massage_high": {
        name: "Seoyeon",
        text: "\"Mmm... {name}... (Seoyeon happily closes her eyes and relaxes) That feels so good... I didn't know your hands were so warm. Just a little more...\"",
        character: "assets/images/characters/seyoun_shy2.png",
        night: true,
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_massage": {
        name: "Seoyeon",
        text: "\"Ah... {name?}! If you do that so suddenly... (She flinches for a moment, but then relaxes and closes her eyes) ...That feels good. Thank you.\"",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_massage_low": {
        name: "Seoyeon",
        text: "(Seoyeon quickly pulls away, looking uncomfortable) \"What are you doing... That's uncomfortable.\"",
        character: "assets/images/characters/seyoun_pout.png",
        night: true,
        stats: { Seoyeon: { affinity: -10 } },
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_night_talk": {
        name: "Seoyeon",
        text: "\"{name?}... Thank you so much for today. When I'm with you, all the stress just melts away. Would you... like to have lunch together tomorrow too?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        night: true,
        setFlag: "day2_met_seoyeon_after",
        branches: [
            { next: "day2_end", condition: "has_number_seyoun" },
            { next: "day2_seoyeon_contact_ask" }
        ]
    },
    "day2_seoyeon_contact_ask": {
        name: "Seoyeon",
        text: "\"Oh, right! We haven't exchanged contact info yet, have we? If you don't mind... could you give me your number? I'd like to message you later.\"",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        choices: [
            { text: "Sure, here's my number.", next: "day2_seoyeon_contact_success", setFlags: ["has_number_seyoun", "has_any_contact"] },
            { text: "Sorry, maybe later.", next: "day2_seoyeon_contact_fail" }
        ]
    },
    "day2_seoyeon_contact_success": {
        name: "Seoyeon",
        text: "\"Thank you! I'll definitely message you later. See you!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        night: true,
        stats: { Seoyeon: { affinity: 5 } },
        next: "day2_end"
    },
    "day2_seoyeon_contact_fail": {
        name: "Seoyeon",
        text: "\"Oh... okay! I guess I asked too suddenly. Sorry. See you at school tomorrow!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        night: true,
        stats: { Seoyeon: { affinity: -10 } },
        next: "day2_end"
    },
    "day2_after_yuna": {
        name: "Me",
        text: "(The library annex. As I step into the old building, a cool draft of air surrounds me.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        branches: [
            { next: "day2_after_yuna_met", condition: "metYuna" },
            { next: "day2_after_yuna_new" }
        ]
    },
    "day2_after_yuna_met": {
        name: "Yuna",
        text: "\"You came. Come, follow me. There's something I want to show you.\"",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        branches: [
            { next: "day2_after_yuna_follow_again", condition: "visitedWarehouseAtLunch" },
            { next: "day2_after_yuna_follow_new" }
        ]
    },
    "day2_after_yuna_new": {
        name: "???",
        text: "\"You... you're curious about me, aren't you? This school hides a very deep secret.\"",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        setFlag: "metYuna",
        next: "day2_after_yuna_new_name_ask"
    },
    "day2_after_yuna_new_name_ask": {
        name: "Yuna",
        text: "\"I'm Yuna. What's your name?\"",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "day2_after_yuna_new_name_share"
    },
    "day2_after_yuna_new_name_share": {
        name: "Me",
        text: "\"My name is {name}.\"",
        sunset: true,
        setFlag: "knowsName_Yuna",
        next: "day2_after_yuna_new_follow"
    },
    "day2_after_yuna_new_follow": {
        name: "Yuna",
        text: "\"{name}... I'll remember that. Come, follow me. I have something to show you.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        branches: [
            { next: "day2_after_yuna_follow_again", condition: "visitedWarehouseAtLunch" },
            { next: "day2_after_yuna_follow_new" }
        ]
    },
    "day2_after_yuna_follow_again": {
        name: "Me",
        text: "(I follow Yuna back down to the basement warehouse. The air feels even colder than before. The basement is plunged into pitch-black darkness, as if the light from outside has completely vanished.)",
        night: true,
        branches: [
            { next: "day2_after_yuna_3_pre_again", condition: "visitedWarehouseAtLunch" },
            { next: "day2_after_yuna_3_pre_new" }
        ]
    },
    "day2_after_yuna_follow_new": {
        name: "Me",
        text: "(I follow Yuna down to a dusty, old warehouse in the basement. A strange chill hangs in the air. It seems it has already become completely dark outside.)",
        night: true,
        branches: [
            { next: "day2_after_yuna_3_pre_again", condition: "visitedWarehouseAtLunch" },
            { next: "day2_after_yuna_3_pre_new" }
        ]
    },
    "day2_after_yuna_3_pre_again": {
        name: "Yuna",
        text: "\"Those patterns we saw earlier... what do you think now? Don't they look even more eerie at night?\"",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "day2_after_yuna_3"
    },
    "day2_after_yuna_3_pre_new": {
        name: "Yuna",
        text: "\"Look, {name?}. These patterns on the wall... they match the secrets of this school I've been tracking.\"",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "day2_after_yuna_3"
    },
    "day2_after_yuna_3": {
        name: "Me",
        text: "(Yuna points to a crack in the wall. A strange, eye-like symbol is drawn there in a dark, reddish hue.)",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        choices: [
            { text: "What does this even mean?", next: "day2_yuna_meaning", stats: { Yuna: { affinity: 4 } } },
            { 
                text: "(Taking Yuna's hand) This place is creepy. Let's get out of here.", 
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
        text: "\"Surveillance... or perhaps protection. But I still don't know who it's meant for.\"",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "day2_yuna_night_talk"
    },
    "day2_yuna_scary_high": {
        name: "Yuna",
        text: "(Yuna gently holds my hand and smiles softly.) \"...Your hand is warm. It's been so long since I felt this kind of warmth. Okay, let's go. But... don't let go of my hand.\"",
        character: "assets/images/characters/yuna_shy.png",
        night: true,
        stats: { Yuna: { affinity: 5 } },
        next: "day2_yuna_night_talk"
    },
    "day2_yuna_scary": {
        name: "Yuna",
        text: "\"...Your hand is so warm. Okay, let's call it a day.\"",
        character: "assets/images/characters/yuna_shy.png",
        night: true,
        next: "day2_yuna_night_talk"
    },
    "day2_yuna_scary_low": {
        name: "Yuna",
        text: "(Yuna coldly pulls her hand away.) \"...Why are you grabbing my hand? Scared? How bold for a coward. If you want to leave, go alone.\"",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        stats: { Yuna: { affinity: -10 } },
        next: "day2_yuna_night_talk"
    },
    "day2_yuna_eye": {
        name: "Yuna",
        text: "\"You're right. This school might be a giant prison or a laboratory. And we are the subjects inside.\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        next: "day2_yuna_night_talk"
    },
    "day2_yuna_night_talk": {
        name: "Yuna",
        text: "\"This isn't just graffiti. It's tied to the very foundation of this school. {name?}, you've stepped onto a path from which there is no turning back.\"",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        setFlag: "day2_met_yuna_after",
        branches: [
            { next: "day2_end", condition: "has_number_yuna" },
            { next: "day2_yuna_contact_ask" }
        ]
    },
    "day2_yuna_contact_ask": {
        name: "Yuna",
        text: "\"If we're going to share secrets... we need a way to contact each other. Leave your number here.\"",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        choices: [
            { text: "Sure. I want to know everything about you.", next: "day2_yuna_contact_success", setFlags: ["has_number_yuna", "has_any_contact"] },
            { text: "Sorry, I'm still a bit cautious.", next: "day2_yuna_contact_fail", stats: { Yuna: { affinity: -30 } } }
        ]
    },
    "day2_yuna_contact_success": {
        name: "Yuna",
        text: "\"...Done. Now we're connected. When I call... you must come, no matter what.\"",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        stats: { Yuna: { affinity: 8 } },
        next: "day2_end"
    },
    "day2_yuna_contact_fail": {
        name: "Yuna",
        text: "\"...Fine. I won't force you. But remember, opportunities don't come often.\"",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "day2_end"
    },
    "day2_after_dain": {
        name: "Me",
        text: "(I open the gym door to hear the sound of volleyballs bouncing along with energetic shouts.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        branches: [
            { next: "day2_after_dain_met", condition: "metDain" },
            { next: "day2_after_dain_new" }
        ]
    },
    "day2_after_dain_met": {
        name: "Dain",
        text: "\"Oh! {name?}! You're just in time. Can you help me with my practice?\"",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "day2_after_dain_practice"
    },
    "day2_after_dain_practice": {
        name: "Me",
        text: "(Helping Dain with her spikes has left me drenched in sweat, but the physical exertion feels good. The world outside the window has already turned dark.)",
        character: "assets/images/characters/dain_sweat.png",
        night: true,
        next: "day2_after_dain_3"
    },
    "day2_after_dain_new": {
        name: "???",
        text: "\"Haa, haa... Your reflexes are insane! We've never met, but we're totally in sync!\"",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        setFlag: "metDain",
        next: "day2_after_dain_new_name_ask"
    },
    "day2_after_dain_new_name_ask": {
        name: "???",
        text: "\"I'm Dain Jung from Class 2-3! What's your name?\"",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "day2_after_dain_new_name_share"
    },
    "day2_after_dain_new_name_share": {
        name: "Me",
        text: "\"I'm {name}. I'm in Class 2-3 too.\"",
        sunset: true,
        setFlag: "knowsName_Dain",
        next: "day2_after_dain_3"
    },
    "day2_after_dain_3": {
        name: "Me",
        text: "(Dain wipes her forehead with a towel and hands me a sports drink.)",
        character: "assets/images/characters/dain_nomal.png",
        night: true,
        choices: [
            { text: "It's only because your tosses were so good.", next: "day2_dain_praise", stats: { Dain: { affinity: 5 } } },
            { text: "How about a real match sometime?", next: "day2_dain_match", stats: { Dain: { affinity: 8 } } },
            { text: "Tteokbokki after a workout is the best, right?", next: "day2_dain_food", stats: { Dain: { affinity: 10 } } }
        ]
    },
    "day2_dain_praise": {
        name: "Dain",
        text: "\"Hey, don't be so modest! Anyway, I got some great practice in today. Thanks!\"",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        next: "day2_dain_night_talk"
    },
    "day2_dain_match": {
        name: "Dain",
        text: "\"Oh? Confident, are we? Fine, let's make a bet. Loser buys Tteokbokki!\"",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        setFlag: "day2_dain_bet",
        next: "day2_dain_night_talk"
    },
    "day2_dain_food": {
        name: "Dain",
        text: "\"Whoa! You really know your stuff! Tteokbokki with some fried snacks... man, just thinking about it makes me happy!\"",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        next: "day2_dain_night_talk"
    },
    "day2_dain_night_talk": {
        name: "Dain",
        text: "\"Wow! Your reflexes are insane. I almost want to recruit you for the team! Great work today, {name?}! Get home safe!\"",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        setFlag: "day2_met_dain_after",
        branches: [
            { next: "day2_end", condition: "has_number_dain" },
            { next: "day2_dain_contact_ask" }
        ]
    },
    "day2_dain_contact_ask": {
        name: "Dain",
        text: "\"Hey {name?}! If we're going to keep going on food tours together, we'll need each other's numbers, right? Put yours in!\"",
        character: "assets/images/characters/dain_nomal.png",
        night: true,
        choices: [
            { text: "Sure! It'll be fun to go on food tours with you.", next: "day2_dain_contact_success", setFlags: ["has_number_dain", "has_any_contact"] },
            { text: "Hmm... maybe some other time.", next: "day2_dain_contact_fail", stats: { Dain: { affinity: -20 } } }
        ]
    },
    "day2_dain_contact_success": {
        name: "Dain",
        text: "\"Contact saved! I'll message you as soon as I find a good place, so be ready!\"",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        stats: { Dain: { affinity: 8 } },
        next: "day2_end"
    },
    "day2_dain_contact_fail": {
        name: "Dain",
        text: "\"What~ playing hard to get? Fine, fine. I'll work harder until I get your number!\"",
        character: "assets/images/characters/dain_nomal.png",
        night: true,
        next: "day2_end"
    },
    "day2_after_nurse": {
        name: "Me",
        text: "(I open the door to the nurse's office to find the teacher reading quietly, the air filled with a gentle herbal scent.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        branches: [
            { next: "day2_after_nurse_met", condition: "metNurse" },
            { next: "day2_after_nurse_new" }
        ]
    },
    "day2_after_nurse_met": {
        name: "Nurse",
        text: "\"Oh, {name?}. Back again? What's the matter today? Or... did you just come to see me?\"",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        branches: [
            { next: "day2_after_nurse_invited", condition: "invited_nurse_home" },
            { next: "day2_after_nurse_3" }
        ]
    },
    "day2_after_nurse_invited": {
        name: "Nurse",
        text: "\"Hehe, {name?}. You haven't forgotten our plan to meet at my house tonight, have you? If you ran here because you missed me already, I'm truly touched.\"",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "day2_after_nurse_3"
    },
    "day2_after_nurse_new": {
        name: "Nurse",
        text: "\"Oh, I haven't seen you before. Are you the new transfer student? I'm the school nurse.\"",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        setFlag: "metNurse",
        next: "day2_after_nurse_new_name_ask"
    },
    "day2_after_nurse_new_name_ask": {
        name: "Nurse",
        text: "\"By the way, what's your name? Won't you tell me? Just between us.\"",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "day2_after_nurse_new_name_share"
    },
    "day2_after_nurse_new_name_share": {
        name: "Me",
        text: "\"My name is {name}.\"",
        sunset: true,
        setFlag: "knowsName_Nurse",
        next: "day2_after_nurse_3"
    },
    "day2_after_nurse_3": {
        name: "Me",
        text: "(She adjusts her glasses and gives me a knowing look.)",
        character: "assets/images/characters/nurse.png",
        night: true,
        choices: [
            { text: "I missed you, teacher.", next: "day2_nurse_miss", stats: { Nurse: { affinity: 8 } } },
            { text: "I just wanted some peace and quiet.", next: "day2_nurse_rest", stats: { Nurse: { affinity: 3 } } },
            { text: "The scent in this room is wonderful.", next: "day2_nurse_aroma", stats: { Nurse: { affinity: 5 } } }
        ]
    },
    "day2_nurse_miss": {
        name: "Nurse",
        text: "\"Hehe, I like an honest student. I suppose I should reward you for that, shouldn't I?\"",
        character: "assets/images/characters/nurse.png",
        night: true,
        next: "day2_nurse_night_talk"
    },
    "day2_nurse_rest": {
        name: "Nurse",
        text: "\"Is that so? Then go ahead and lie down. I won't bother you.\"",
        character: "assets/images/characters/nurse.png",
        night: true,
        next: "day2_nurse_night_talk"
    },
    "day2_nurse_aroma": {
        name: "Nurse",
        text: "\"Oh, you have a good nose. This is an aroma oil I blended myself. It helps to relax the mind.\"",
        character: "assets/images/characters/nurse.png",
        night: true,
        next: "day2_nurse_night_talk"
    },
    "day2_nurse_night_talk": {
        name: "Nurse",
        text: "(The teacher smiles softly and strokes my hair.) \"Hehe, so you came because you wanted to spend more time with me? Fine, I'll stay with you until late today, just for you.\"",
        character: "assets/images/characters/nurse.png",
        night: true,
        next: "day2_nurse_night_talk_2"
    },
    "day2_nurse_night_talk_2": {
        name: "Me",
        text: "(After spending some time chatting with the teacher in the nurse's office, it had already grown dark outside. I left the school, looking forward to seeing her again.)",
        background: "assets/images/background/nurse_room.jpg",
        night: true,
        setFlag: "day2_met_nurse_after",
        branches: [
            { next: "day2_end", condition: "invited_nurse_home" },
            { next: "day2_nurse_contact_already_have_talk", condition: "has_number_nurse" },
            { next: "day2_nurse_contact_ask" }
        ]
    },
    "day2_nurse_contact_already_have_talk": {
        name: "Nurse",
        text: "\"{name?}, we already exchanged numbers, didn't we? You must contact me if you're bored at night. I'll be waiting.\"",
        character: "assets/images/characters/nurse.png",
        night: true,
        choices: [
            { text: "Yes, I will.", next: "day2_end" },
            { 
                text: "Not the number... can I go to your house tonight, teacher?", 
                next: "nurse_contact_home_fail_after",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 65, next: "nurse_contact_home_success_after" }
                ]
            }
        ]
    },
    "day2_nurse_contact_ask": {
        name: "Nurse",
        text: "\"{name?}, why don't you save my number just in case? Contact me anytime you're sick or have something on your mind.\"",
        character: "assets/images/characters/nurse.png",
        night: true,
        choices: [
            { text: "Yes, please tell me!", next: "day2_nurse_contact_success", setFlags: ["has_number_nurse", "has_any_contact"] },
            { text: "It's a bit overwhelming for now.", next: "day2_nurse_contact_fail", stats: { Nurse: { affinity: -5 } } }
        ]
    },
    "nurse_contact_home_success_after": {
        name: "Nurse",
        text: "(The teacher's eyes widen, then she whispers in my ear with a seductive smile.) \"Oh... {name?}, you're much bolder than I thought? Okay, do you want to come to my house tonight? I'll give you the address. Instead... it's a secret from your parents?\"",
        character: "assets/images/characters/nurse.png",
        night: true,
        stats: { Nurse: { affinity: 30 } },
        setFlags: ["invited_nurse_home"],
        next: "day2_end"
    },
    "nurse_contact_home_fail_after": {
        name: "Nurse",
        text: "(The teacher bursts into laughter.) \"Oh my, {name?}! You're really cute. But I think it's a bit too early for my house, isn't it? Just message me later.\"",
        character: "assets/images/characters/nurse.png",
        night: true,
        next: "day2_end"
    },
    "day2_nurse_contact_success": {
        name: "Nurse",
        text: "\"Hehe, good boy. I'll message you tonight, okay? Good night, {name?}.\"",
        character: "assets/images/characters/nurse.png",        night: true,        stats: { Nurse: { affinity: 10 } },
        next: "day2_end"
    },
    "day2_nurse_contact_fail": {
        name: "Nurse",
        text: "\"Oh, playing hard to get? Fine. Let me know if you change your mind. Get home safe!\"",
        character: "assets/images/characters/nurse.png",
        night: true,
        next: "day2_end"
    },
    "day2_after_teacher": {
        name: "Me",
        text: "(When I open the faculty room door, I see the homeroom teacher reviewing documents alone under a desk lamp in the empty office.)",
        background: "assets/images/background/teacher_room.png",
        character: "assets/images/characters/teacher.png",
        sunset: true,
        next: "day2_after_teacher_2"
    },
    "day2_after_teacher_2": {
        name: "Homeroom Teacher",
        text: "\"Oh, {name?}? What brings you to the faculty room at this hour? Haven't you gone home yet?\"",
        character: "assets/images/characters/teacher.png",
        sunset: true,
        next: "day2_after_teacher_3"
    },
    "day2_after_teacher_3": {
        name: "Homeroom Teacher",
        text: "\"I have a lot of documents to submit this week... Hehe, I'm showing you such a haggard side of me from the very first week of your transfer.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        choices: [
            { text: "I'll help you. It'll be over soon if we do it together!", next: "day2_after_teacher_work", stats: { Teacher: { affinity: 10 } } },
            { text: "Hang in there, Teacher! Should I make you a cup of coffee?", next: "day2_after_teacher_coffee", stats: { Teacher: { affinity: 5 } } },
            { text: "Teacher, aren't you overdoing it? I'm worried.", next: "day2_after_teacher_worry", stats: { Teacher: { affinity: 8 } } }
        ]
    },
    "day2_after_teacher_work": {
        name: "Me",
        text: "(I sat next to the teacher and started helping her organize the documents. Only the sound of turning pages can be heard regularly in the quiet faculty room.)",
        background: "assets/images/background/teacher_room.png",
        character: "assets/images/characters/teacher.png",
        night: true,
        next: "day2_after_teacher_work_2"
    },
    "day2_after_teacher_work_2": {
        name: "Homeroom Teacher",
        text: "\"Thank you, {name?}. You've been a huge help. I would have had to stay up all night if I did it alone.\"",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        next: "day2_after_teacher_branch"
    },
    "day2_after_teacher_branch": {
        name: "Me",
        text: "(The teacher looks at me quietly, seemingly lost in thought.)",
        night: true,
        affinityChar: "Teacher",
        affinityBranches: [
            { minAffinity: 70, next: "day2_after_teacher_special" }
        ],
        next: "day2_after_teacher_normal"
    },
    "day2_after_teacher_special": {
        name: "Homeroom Teacher",
        text: "(The teacher suddenly leans toward me. I can feel her warm breath along with the faint scent of perfume.)",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        next: "day2_after_teacher_special_2"
    },
    "day2_after_teacher_special_2": {
        name: "Homeroom Teacher",
        text: "\"{name?}, I think you're a very special student. It's only been two days since you transferred... why do I feel so comfortable, like we've known each other for a long time?\"",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        next: "day2_after_teacher_special_3"
    },
    "day2_after_teacher_special_3": {
        name: "Homeroom Teacher",
        text: "\"As a reward for helping me today... I'll drive you home. Shall we talk a bit more in the car?\"",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        stats: { Teacher: { affinity: 15 } },
        setFlag: "day2_teacher_date",
        next: "day2_end"
    },
    "day2_after_teacher_normal": {
        name: "Homeroom Teacher",
        text: "\"Now, it's late, so you should head home. I should finish up and head home too. You did a great job today!\"",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        next: "day2_end"
    },
    "day2_after_teacher_coffee": {
        name: "Homeroom Teacher",
        text: "\"Oh, coffee? Hehe, thank you for the thought. But I can't drink coffee made by a student. Instead, I'll give you a delicious candy!\"",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        next: "day2_after_teacher_normal"
    },
    "day2_after_teacher_worry": {
        name: "Homeroom Teacher",
        text: "\"Thank you for worrying about me. I'm fine! I feel so reassured because {name?} is such a kind student.\"",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        next: "day2_after_teacher_normal"
    }
});



