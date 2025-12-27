if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

Object.assign(SCENARIO[1], {
    "after_school_start": {
        name: "Me",
        text: "(The afternoon classes are all over. The school is dyed in the orange of the sunset.)",
        background: "assets/images/background/room_school_sunset.png",
        character: null,
        next: "after_school_choices"
    },
    "after_school_choices": {
        name: "Me",
        text: "(What should I do after school?)",
        choices: [
            { text: "Go to the student council room to see Seoyeon.", next: "after_school_seyoun", condition: "metSeoyeon" },
            { text: "Go to the library annex to see Yuna.", next: "after_school_yuna", condition: "metYuna" },
            { text: "Go to the gym to see Dain.", next: "after_school_dain", condition: "metDain" },
            { text: "Go to the nurse's office to see the teacher.", next: "after_school_nurse", condition: "metNurse" },
            { text: "Just go home and rest.", next: "go_home_day1" }
        ]
    },
    "after_school_seyoun": {
        name: "Seoyeon",
        text: "(Seoyeon is organizing documents in the student council room. She looks a bit tired.)",
        background: "assets/images/background/room_school_sunset.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_school_seyoun_2"
    },
    "after_school_seyoun_2": {
        name: "Seoyeon",
        text: "\"Oh, {name?}! You came to see me? I'm almost done with this, so wait a moment. I'll buy you something delicious on the way home!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 10 } },
        next: "go_home_day1"
    },
    "after_school_yuna": {
        name: "Yuna",
        text: "(Yuna is still reading a book in the library annex. She doesn't even look at me, but she seems to know I'm here.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_school_yuna_2"
    },
    "after_school_yuna_2": {
        name: "Yuna",
        text: "\"...You came back. You're a strange person. Most people run away when they see me. Do you want to read this book together?\"",
        character: "assets/images/characters/yuna_nomal.png",
        stats: { Yuna: { affinity: 10 } },
        next: "go_home_day1"
    },
    "after_school_dain": {
        name: "Dain",
        text: "(Dain is practicing volleyball alone in the gym. She's drenched in sweat, but her eyes are sparkling.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "after_school_dain_2"
    },
    "after_school_dain_2": {
        name: "Dain",
        text: "\"Oh! {name?}! You came to cheer me on? Great! Watch my spike! If I succeed, you have to buy me a drink!\"",
        character: "assets/images/characters/dain_nomal.png",
        stats: { Dain: { affinity: 10 } },
        next: "go_home_day1"
    },
    "after_school_nurse": {
        name: "Nurse",
        text: "(The nurse is organizing medicine in the nurse's office. She smiles as she sees me.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        next: "after_school_nurse_2"
    },
    "after_school_nurse_2": {
        name: "Nurse",
        text: "\"Oh, our cute student is here again? Did you miss me that much? Hehe, come here. I'll give you a special candy.\"",
        character: "assets/images/characters/nurse.png",
        stats: { Nurse: { affinity: 10 } },
        next: "go_home_day1"
    },
    "go_home_day1": {
        name: "Me",
        text: "(The sun has set and it's dark. I should go home now.)",
        background: "assets/images/background/street_night.png",
        next: "night_start"
    }
});
