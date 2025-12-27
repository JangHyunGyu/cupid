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
        sunset: true,
        next: "day2_after_school"
    },
    "day2_afternoon_nurse_skip": {
        name: "Me",
        text: "(I wake up in the nurse's office to find it's already after school. I skipped the entire afternoon, but I feel refreshed.)",
        background: "assets/images/background/nurse_room.jpg",
        sunset: true,
        next: "day2_after_school"
    },
    "day2_after_school": {
        name: "Me",
        text: "(I have a feeling that something even more special will happen today. Where should I go?)",
        sunset: true,
        choices: [
            { text: "Help Seoyeon with student council work.", next: "day2_after_seoyeon" },
            { text: "Uncover more of the school's secrets with Yuna.", next: "day2_after_yuna", condition: "metYuna" },
            { text: "Visit Yuna at the library annex again.", next: "day2_after_yuna", excludeCondition: "metYuna" },
            { text: "Help Dain with volleyball practice.", next: "day2_after_dain", condition: "metDain" },
            { text: "Follow the lively sounds coming from the gym.", next: "day2_after_dain", excludeCondition: "metDain" },
            { text: "Go to the teacher in the nurse's office.", next: "day2_after_nurse" }
        ]
    },
    "day2_after_seoyeon": {
        name: "Me",
        text: "(The student council room. As I help Seoyeon organize documents, the world outside the window slowly fades into darkness.)",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        night: true,
        next: "day2_after_seoyeon_2"
    },
    "day2_after_seoyeon_2": {
        name: "Seoyeon",
        text: "\"Phew... Finally finished. {name?}, thank you so much for staying late. I wouldn't have finished this today without you.\"",
        character: "assets/images/characters/seyoun_smile.png",
        next: "day2_after_seoyeon_3"
    },
    "day2_after_seoyeon_3": {
        name: "Me",
        text: "(Seoyeon stretches and gives me a tired but warm smile. Her eyes are still bright despite the long day.)",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Seoyeon, why do you work so hard?", next: "day2_seoyeon_why", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Let's go now. I'll walk you home.", next: "day2_seoyeon_home", stats: { Seoyeon: { affinity: 15 } } }
        ]
    },
    "day2_seoyeon_why": {
        name: "Seoyeon",
        text: "\"Well... someone has to do it. And I like to think that if I do my best, the school might become a slightly better place.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_home": {
        name: "Seoyeon",
        text: "\"Oh...? Walk me home? Ah... well, I'd be very happy if you did...\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_night_talk": {
        name: "Seoyeon",
        text: "\"{name?}... Thank you so much for today. When I'm with you, all the stress just melts away. Would you... like to have lunch together tomorrow too?\"",
        character: "assets/images/characters/seyoun_smile.png",
        next: "day2_end"
    },
    "day2_after_yuna": {
        name: "Me",
        text: "(I follow Yuna down to a dusty, old warehouse in the basement. A strange chill hangs in the air.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "day2_after_yuna_2"
    },
    "day2_after_yuna_2": {
        name: "Yuna",
        text: "\"Look, {name?}. These patterns on the wall... they're identical to the ones in the book we found yesterday.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_after_yuna_3"
    },
    "day2_after_yuna_3": {
        name: "Me",
        text: "(Yuna points to a crack in the wall. A strange, eye-like symbol is drawn there in a dark, reddish hue.)",
        character: "assets/images/characters/yuna_smile.png",
        choices: [
            { text: "What does this even mean?", next: "day2_yuna_meaning", stats: { Yuna: { affinity: 5 } } },
            { text: "(Taking Yuna's hand) This place is creepy. Let's get out of here.", next: "day2_yuna_scary", stats: { Yuna: { affinity: 10 } } }
        ]
    },
    "day2_yuna_meaning": {
        name: "Yuna",
        text: "\"Surveillance... or perhaps protection. But I still don't know who it's meant for.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_night_talk"
    },
    "day2_yuna_scary": {
        name: "Yuna",
        text: "\"...Your hand is so warm. Okay, let's call it a day.\"",
        character: "assets/images/characters/yuna_shy.png",
        next: "day2_yuna_night_talk"
    },
    "day2_yuna_night_talk": {
        name: "Yuna",
        text: "\"This isn't just graffiti. It's tied to the very foundation of this school. {name?}, you've stepped onto a path from which there is no turning back.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_end"
    },
    "day2_after_dain": {
        name: "Me",
        text: "(Helping Dain with her spikes has left me drenched in sweat, but the physical exertion feels good.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        night: true,
        next: "day2_after_dain_2"
    },
    "day2_after_dain_2": {
        name: "Dain",
        text: "\"Haa, haa... {name?}, you're incredible! I didn't think you'd be able to return all of those!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_after_dain_3"
    },
    "day2_after_dain_3": {
        name: "Me",
        text: "(Dain wipes her forehead with a towel and hands me a sports drink.)",
        character: "assets/images/characters/dain_nomal.png",
        choices: [
            { text: "It's only because your tosses were so good.", next: "day2_dain_praise", stats: { Dain: { affinity: 10 } } },
            { text: "How about a real match sometime?", next: "day2_dain_match", stats: { Dain: { affinity: 15 } } }
        ]
    },
    "day2_dain_praise": {
        name: "Dain",
        text: "\"Hey, don't be so modest! Anyway, I got some great practice in today. Thanks!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_dain_night_talk"
    },
    "day2_dain_match": {
        name: "Dain",
        text: "\"Oh? Confident, are we? Fine, let's make a bet. Loser buys Tteokbokki!\"",
        character: "assets/images/characters/dain_active.png",
        next: "day2_dain_night_talk"
    },
    "day2_dain_night_talk": {
        name: "Dain",
        text: "\"Wow! Your reflexes are insane. I almost want to recruit you for the team! Great work today, {name?}! Get home safe!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_end"
    },
    "day2_after_nurse": {
        name: "Me",
        text: "(I open the door to the nurse's office to find the teacher reading quietly, the air filled with a gentle herbal scent.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "day2_after_nurse_2"
    },
    "day2_after_nurse_2": {
        name: "Nurse",
        text: "\"Oh, {name?}. Back again? What's the matter today? Or... did you just come to see me?\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_after_nurse_3"
    },
    "day2_after_nurse_3": {
        name: "Me",
        text: "(She adjusts her glasses and gives me a knowing look.)",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "I missed you, teacher.", next: "day2_nurse_miss", stats: { Nurse: { affinity: 15 } } },
            { text: "I just wanted some peace and quiet.", next: "day2_nurse_rest", stats: { Nurse: { affinity: 5 } } }
        ]
    },
    "day2_nurse_miss": {
        name: "Nurse",
        text: "\"Hehe, I like an honest boy. I suppose I should reward you for that, shouldn't I?\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_nurse_night_talk"
    },
    "day2_nurse_rest": {
        name: "Nurse",
        text: "\"Is that so? Then go ahead and lie down. I won't bother you.\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_nurse_night_talk"
    },
    "day2_nurse_night_talk": {
        name: "Nurse",
        text: "\"{name?}... You really came. Hehe, you wanted to spend more time with me, didn't you? Fine, I'll stay with you until late today.\"",
        character: "assets/images/characters/nurse.png",
        night: true,
        next: "day2_end"
    }
});
