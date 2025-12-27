if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

Object.assign(SCENARIO[2], {
    "day2_end": {
        name: "나",
        text: "(이틀째 밤이 깊어간다. 학교의 공기가 어제보다 더 무겁게 느껴지는 건 기분 탓일까?)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_end_2"
    },
    "day2_end_2": {
        name: "나",
        text: "(내일은 또 어떤 진실이 나를 기다리고 있을까...)",
        next: "day2_final"
    },
    "day2_final": {
        name: "시스템",
        text: "(현재 개발된 시나리오는 여기까지입니다. 다음 업데이트를 기대해주세요!)",
        next: "day2_final"
    }
});
