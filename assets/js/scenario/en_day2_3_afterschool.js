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
        text: "(I helped Seoyeon with document organization in the student council room until late. It's already dark outside.)",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        night: true,
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_night_talk": {
        name: "Seoyeon",
        text: "\"{name?}... Thank you so much for today. When I'm with you, I forget all the hard work. Can we... stay together a bit longer?\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_end"
    },
    "day2_after_yuna": {
        name: "Yuna",
        text: "(I discovered strange patterns in the school basement warehouse with Yuna. Yuna's expression becomes serious.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
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
        text: "(I practiced while sweating with Dain in the gym. The ionic drink Dain handed me is cool.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_sweat.png",
        night: true,
        next: "day2_dain_night_talk"
    },
    "day2_dain_night_talk": {
        name: "Dain",
        text: "\"Wow! Your athletic nerves are really great? I'd even want to recruit you to our team! Good job today, {name?}!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_end"
    },
    "day2_after_nurse": {
        name: "Nurse",
        text: "(When I open the door to the nurse's office, the teacher was waiting for me in the room full of sunset light.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
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
