if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

Object.assign(SCENARIO[2], {
    "day2_end": {
        name: "Me",
        text: "(The second night is deepening. Is it just my imagination that the school air feels heavier than yesterday?)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_end_2"
    },
    "day2_end_2": {
        name: "Me",
        text: "(What kind of truth will be waiting for me tomorrow...)",
        next: "day2_final"
    },
    "day2_final": {
        name: "System",
        text: "(The scenario developed so far is up to here. Please look forward to the next update!)",
        next: "day2_final"
    }
});
