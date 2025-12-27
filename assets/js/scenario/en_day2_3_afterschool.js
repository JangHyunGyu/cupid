if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

Object.assign(SCENARIO[2], {
    "day2_afternoon_class": {
        name: "Me",
        text: "(Afternoon classes also ended safely. Now it's after school time.)",
        background: "assets/images/background/room_school.png",
        sunset: true,
        next: "day2_after_school"
    },
    "day2_afternoon_nurse_skip": {
        name: "Me",
        text: "(After resting well in the nurse's office, it's already after school. I skipped all the afternoon classes, but my body feels much lighter.)",
        background: "assets/images/background/nurse_room.jpg",
        sunset: true,
        next: "day2_after_school"
    },
    "day2_after_school": {
        name: "Me",
        text: "(I have a feeling that something more special will happen today than yesterday.)",
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
        name: "Seoyeon",
        text: "(As I was organizing documents with Seoyeon in the student council room, it suddenly became dark outside.)",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        night: true,
        next: "day2_after_seoyeon_2"
    },
    "day2_after_seoyeon_2": {
        name: "Seoyeon",
        text: "\"Phew... Finally finished. {name?}, thank you so much for helping until late. I wouldn't have finished it all today without you.\"",
        character: "assets/images/characters/seyoun_smile.png",
        next: "day2_after_seoyeon_3"
    },
    "day2_after_seoyeon_3": {
        name: "Seoyeon",
        text: "(Seoyeon stretches and smiles slightly. She looks tired, but her eyes are clear.)",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Seoyeon, why do you work so hard?", next: "day2_seoyeon_why", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Let's go now. I'll walk you home.", next: "day2_seoyeon_home", stats: { Seoyeon: { affinity: 15 } } }
        ]
    },
    "day2_seoyeon_why": {
        name: "Seoyeon",
        text: "\"Well... just because someone has to do it. And I thought if I do well, the school might get a little better.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_home": {
        name: "Seoyeon",
        text: "\"Oh...? Walk me home? Ah... well, I'd be grateful if you did...\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_night_talk": {
        name: "Seoyeon",
        text: "\"{name?}... Thank you so much for today. When I'm with you, I forget all the hard work. Do you... want to have lunch together tomorrow too?\"",
        character: "assets/images/characters/seyoun_smile.png",
        next: "day2_end"
    },
    "day2_after_yuna": {
        name: "Yuna",
        text: "(I followed Yuna down to the old warehouse in the school basement. I feel a strange chill along with the smell of dust.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "day2_after_yuna_2"
    },
    "day2_after_yuna_2": {
        name: "Yuna",
        text: "\"Look, {name?}. These patterns engraved on the wall... they match the contents of the book I saw in the library yesterday.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_after_yuna_3"
    },
    "day2_after_yuna_3": {
        name: "Yuna",
        text: "(Yuna points to a gap in the wall with her finger. There is a strange eye shape drawn in red there.)",
        character: "assets/images/characters/yuna_smile.png",
        choices: [
            { text: "What on earth does this mean?", next: "day2_yuna_meaning", stats: { Yuna: { affinity: 5 } } },
            { text: "(Holding Yuna's hand) It's scary, so let's go out now.", next: "day2_yuna_scary", stats: { Yuna: { affinity: 10 } } }
        ]
    },
    "day2_yuna_meaning": {
        name: "Yuna",
        text: "\"Surveillance... or protection. But it's not yet clear who it's for.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_night_talk"
    },
    "day2_yuna_scary": {
        name: "Yuna",
        text: "\"...Your hand is warm. Okay, let's go back for today.\"",
        character: "assets/images/characters/yuna_shy.png",
        next: "day2_yuna_night_talk"
    },
    "day2_yuna_night_talk": {
        name: "Yuna",
        text: "\"This... is not just a scribble. It's related to the purpose of this school's establishment. {name?}, you've now chosen a path you can't turn back from.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_end"
    },
    "day2_after_dain": {
        name: "Dain",
        text: "(As I helped Dain with spike practice, my whole body was soaked with sweat. But I feel refreshed.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        night: true,
        next: "day2_after_dain_2"
    },
    "day2_after_dain_2": {
        name: "Dain",
        text: "\"Haa, haa... {name?}, you're really amazing! I didn't know you'd be able to take all my balls like that!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_after_dain_3"
    },
    "day2_after_dain_3": {
        name: "Dain",
        text: "(Dain wipes her sweat with a towel and hands me an ionic drink.)",
        character: "assets/images/characters/dain_nomal.png",
        choices: [
            { text: "It's because you hit it well, Dain.", next: "day2_dain_praise", stats: { Dain: { affinity: 10 } } },
            { text: "Shall we have a formal match later?", next: "day2_dain_match", stats: { Dain: { affinity: 15 } } }
        ]
    },
    "day2_dain_praise": {
        name: "Dain",
        text: "\"Hey, don't be so humble! Anyway, thanks to you, I practiced properly today. Thank you!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_dain_night_talk"
    },
    "day2_dain_match": {
        name: "Dain",
        text: "\"Oh~ you're confident? Okay, let's have a match with a bet? The loser buys Tteokbokki!\"",
        character: "assets/images/characters/dain_active.png",
        next: "day2_dain_night_talk"
    },
    "day2_dain_night_talk": {
        name: "Dain",
        text: "\"Wow! Your athletic nerves are really great? I'd even want to recruit you to our team! Good job today, {name?}! Get home safely!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_end"
    },
    "day2_after_nurse": {
        name: "Nurse",
        text: "(When I open the door to the nurse's office, I see the teacher reading a book with a faint aroma scent.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "day2_after_nurse_2"
    },
    "day2_after_nurse_2": {
        name: "Nurse",
        text: "\"Oh, {name?}. You came again? Where does it hurt today? Or... did you just come to see my face?\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_after_nurse_3"
    },
    "day2_after_nurse_3": {
        name: "Nurse",
        text: "(The teacher fixes her glasses and stares at me.)",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "I came because I missed you, teacher.", next: "day2_nurse_miss", stats: { Nurse: { affinity: 15 } } },
            { text: "I just want to rest quietly.", next: "day2_nurse_rest", stats: { Nurse: { affinity: 5 } } }
        ]
    },
    "day2_nurse_miss": {
        name: "Nurse",
        text: "\"Hehe, I like that you're honest. I should give a prize to such a child, right?\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_nurse_night_talk"
    },
    "day2_nurse_rest": {
        name: "Nurse",
        text: "\"Really? Then lie down on that bed over there. I won't disturb you.\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_nurse_night_talk"
    },
    "day2_nurse_night_talk": {
        name: "Nurse",
        text: "\"{name?}... You really came? Hehe, you came because you wanted to be with me more, right? Okay, I'll stay with you until late today specially.\"",
        character: "assets/images/characters/nurse.png",
        night: true,
        next: "day2_end"
    }
});
