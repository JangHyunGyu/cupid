if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

Object.assign(SCENARIO[1], {
    "after_home": {
        name: "나",
        text: "(어느덧 해가 지고 어둠이 깔린 거리를 지나 집으로 돌아왔다. 전학 첫날... 참 긴 하루였다.)",
        background: "assets/images/background/room_night.png",
        character: null,
        night: true,
        next: "after_home_2"
    },
    "after_home_2": {
        name: "나",
        text: "(침대에 몸을 던진다. 천장을 바라보며 오늘 있었던 일들을 되짚어본다. 낯선 학교, 그리고 새로운 만남들...)",
        night: true,
        next: "after_home_3"
    },
    "after_home_3": {
        name: "나",
        text: "(내일은 또 어떤 일들이 기다리고 있을까? 묘한 설렘과 함께 무거운 눈꺼풀을 닫는다.)",
        night: true,
        next: "night_home"
    },
    "night_home": {
        name: "나",
        text: "(잠들기 전, 습관적으로 스마트폰을 확인한다.)",
        background: "assets/images/background/room_night.png",
        character: null,
        night: true,
        branches: [
            { next: "day1_end", excludeCondition: "has_any_contact" },
            { next: "night_home_check_contact" }
        ]
    },
    "night_home_check_contact": {
        name: "나",
        text: "(오늘 연락처를 교환했던가...?)",
        night: true,
        choices: [
            { text: "서연이에게 메시지를 보낸다.", next: "night_message_seyoun", condition: "has_number_seyoun" },
            { text: "유나에게 메시지를 보낸다.", next: "night_message_yuna", condition: "has_number_yuna" },
            { text: "다인이에게 메시지를 보낸다.", next: "night_message_dain", condition: "has_number_dain" },
            { text: "호감도 확인하기", next: "day1_check_affinity" },
            { text: "그냥 잠을 청한다.", next: "day1_end" }
        ]
    },
    "day1_check_affinity": {
        name: "시스템",
        text: "현재 캐릭터들과의 호감도 상태입니다.{affinity_list}",
        background: "assets/images/background/room_night.png",
        night: true,
        next: "night_home_check_contact"
    },
    "night_message_seyoun": {
        name: "나",
        text: "(서연이에게 메시지를 보냈다. '오늘 도시락 정말 맛있었어. 고마워!')",
        night: true,
        next: "night_message_seyoun_reply"
    },
    "night_message_seyoun_reply": {
        name: "서연",
        text: "(지리릭— 즉각적인 답장.) '정말? 다행이다! 맛있게 먹어줘서 내가 더 고마워. 내일도 기대해! 잘 자, {name?}.'",
        night: true,
        stats: { Seoyeon: { affinity: 5 } },
        next: "day1_end"
    },
    "night_message_yuna": {
        name: "나",
        text: "(유나에게 메시지를 보냈다. '오늘 즐거웠어. 잘 자.')",
        night: true,
        next: "night_message_yuna_reply"
    },
    "night_message_yuna_reply": {
        name: "유나",
        text: "(잠시 후 도착한 답장.) '...응. 너도 잘 자. 내일 학교에서 봐.'",
        night: true,
        stats: { Yuna: { affinity: 5 } },
        next: "day1_end"
    },
    "night_message_dain": {
        name: "나",
        text: "(다인이에게 메시지를 보냈다. '오늘 떡볶이 맛있었어! 잘 자.')",
        night: true,
        next: "night_message_dain_reply"
    },
    "night_message_dain_reply": {
        name: "다인",
        text: "(활기찬 답장.) '그치? 내가 맛집은 꽉 잡고 있다니까! 너도 푹 쉬고 내일 보자! 굿나잇!'",
        night: true,
        stats: { Dain: { affinity: 5 } },
        next: "day1_end"
    },
    "day1_end": {
        name: "나",
        text: "(눈을 감자 오늘 만난 소녀들의 얼굴이 하나둘씩 스쳐 지나간다. 내일은 그녀들과 더 가까워질 수 있을까...)",
        background: "assets/images/background/black.png",
        character: null,
        changeDay: 2,
        next: "day2_start"
    }
});
