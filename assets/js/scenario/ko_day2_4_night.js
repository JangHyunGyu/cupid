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
        background: "assets/images/background/room_night.png",
        night: true,
        next: "day2_end_2"
    },
    "day2_end_2": {
        name: "나",
        text: "(침대에 누워 오늘 있었던 일들을 생각한다. 유나가 말한 비밀, 그리고 양호실에서의 시간...)",
        night: true,
        next: "day2_night_home"
    },
    "day2_night_home": {
        name: "나",
        text: "(잠들기 전, 스마트폰을 확인해본다.)",
        background: "assets/images/background/room_night.png",
        character: null,
        night: true,
        branches: [
            { next: "day2_final_scene", excludeCondition: "has_any_contact" },
            { next: "day2_night_home_check_contact" }
        ]
    },
    "day2_night_home_check_contact": {
        name: "나",
        text: "(메시지를 보내볼까...?)",
        night: true,
        choices: [
            { text: "서연이에게 메시지를 보내본다.", next: "day2_night_message_seyoun", condition: "has_number_seyoun" },
            { text: "유나에게 메시지를 보내본다.", next: "day2_night_message_yuna", condition: "has_number_yuna" },
            { text: "다인이에게 메시지를 보내본다.", next: "day2_night_message_dain", condition: "has_number_dain" },
            { text: "양호선생님께 메시지를 보내본다.", next: "day2_night_message_nurse", condition: "has_number_nurse" },
            { text: "그냥 잠을 청한다.", next: "day2_final_scene" }
        ]
    },
    "day2_night_message_seyoun": {
        name: "나",
        text: "(서연이에게 '오늘 학생회 일 돕는 거 즐거웠어. 내일 봐!'라고 메시지를 보냈다.)",
        night: true,
        next: "day2_night_message_seyoun_reply"
    },
    "day2_night_message_seyoun_reply": {
        name: "서연",
        text: "(답장이 왔다.) '나도 정말 즐거웠어! {name?} 덕분에 든든해. 내일 점심 같이 먹는 거 잊지 마! 잘 자.'",
        night: true,
        stats: { Seoyeon: { affinity: 5 } },
        next: "day2_final_scene"
    },
    "day2_night_message_yuna": {
        name: "나",
        text: "(유나에게 '오늘 보여준 거... 잊지 않을게. 잘 자.'라고 메시지를 보냈다.)",
        night: true,
        next: "day2_night_message_yuna_reply"
    },
    "day2_night_message_yuna_reply": {
        name: "유나",
        text: "(잠시 후 답장이 왔다.) '...응. 너라면 이해해줄 줄 알았어. 꿈속에서도 널 지켜보고 있을게.'",
        night: true,
        stats: { Yuna: { affinity: 5 } },
        next: "day2_final_scene"
    },
    "day2_night_message_dain": {
        name: "나",
        text: "(다인이에게 '오늘 연습 수고했어! 내일 떡볶이 내기 잊지 마.'라고 메시지를 보냈다.)",
        night: true,
        next: "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_reply": {
        name: "다인",
        text: "(바로 답장이 왔다.) '당연하지! 내가 이길 거니까 지갑 딱 대고 있어! 하하, 잘 자!'",
        night: true,
        stats: { Dain: { affinity: 5 } },
        next: "day2_final_scene"
    },
    "day2_night_message_nurse": {
        name: "나",
        text: "(양호선생님께 '선생님, 오늘 감사했어요. 덕분에 푹 잤어요.'라고 메시지를 보냈다.)",
        night: true,
        next: "day2_night_message_nurse_reply"
    },
    "day2_night_message_nurse_reply": {
        name: "양호선생님",
        text: "(답장이 왔다.) '어머, 벌써 내 생각 하는 거니? 후훗, 오늘 푹 쉬고 내일 또 얼굴 보자. 잘 자, {name?}.'",
        night: true,
        stats: { Nurse: { affinity: 5 } },
        next: "day2_final_scene"
    },
    "day2_final_scene": {
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
