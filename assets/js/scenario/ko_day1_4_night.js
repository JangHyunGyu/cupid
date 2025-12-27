if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

Object.assign(SCENARIO[1], {
    "after_home": {
        name: "나",
        text: "(어느덧 해가 지고 어둠이 깔린 거리를 지나 집으로 돌아왔다.)",
        background: "assets/images/background/room_night.png",
        character: null,
        night: true,
        next: "after_home_2"
    },
    "after_home_2": {
        name: "나",
        text: "(침대에 누워 오늘 하루를 되돌아본다. 전학 첫날부터 정말 많은 일이 있었어.)",
        night: true,
        next: "after_home_3"
    },
    "after_home_3": {
        name: "나",
        text: "(내일은 또 어떤 일들이 기다리고 있을까? 설레는 마음을 안고 잠을 청한다.)",
        night: true,
        next: "night_home"
    },
    "night_home": {
        name: "나",
        text: "(잠들기 전, 스마트폰을 확인해본다.)",
        background: "assets/images/background/room_night.png",
        character: null,
        night: true,
        next: "night_home_check_contact"
    },
    "night_home_check_contact": {
        name: "나",
        text: "(오늘 연락처를 받은 사람이 있었나...?)",
        night: true,
        choices: [
            { text: "유나에게 메시지를 보내본다.", next: "night_message_yuna", condition: "has_number_yuna" },
            { text: "다인이에게 메시지를 보내본다.", next: "night_message_dain", condition: "has_number_dain" },
            { text: "그냥 잠을 청한다.", next: "day1_end" }
        ],
        excludeCondition: "has_any_contact",
        next: "day1_end"
    },
    "night_message_yuna": {
        name: "나",
        text: "(유나에게 '오늘 즐거웠어. 잘 자.'라고 메시지를 보냈다.)",
        night: true,
        next: "night_message_yuna_reply"
    },
    "night_message_yuna_reply": {
        name: "유나",
        text: "(잠시 후, 답장이 왔다.) '...응. 너도 잘 자. 내일 학교에서 봐.'",
        night: true,
        stats: { Yuna: { affinity: 5 } },
        next: "day1_end"
    },
    "night_message_dain": {
        name: "나",
        text: "(다인이에게 '오늘 떡볶이 맛있었어! 잘 자.'라고 메시지를 보냈다.)",
        night: true,
        next: "night_message_dain_reply"
    },
    "night_message_dain_reply": {
        name: "다인",
        text: "(거의 바로 답장이 왔다.) '그치? 내가 맛집은 꽉 잡고 있다니까! 너도 푹 쉬고 내일 보자! 굿나잇!'",
        night: true,
        stats: { Dain: { affinity: 5 } },
        next: "day1_end"
    },
    "day1_end": {
        name: "나",
        text: "(눈을 감자 오늘 만난 소녀들의 얼굴이 하나둘씩 떠오른다. 내일은 그녀들과 더 가까워질 수 있을까...)",
        background: "assets/images/background/black.png",
        character: null,
        next: "day2_start"
    }
});
