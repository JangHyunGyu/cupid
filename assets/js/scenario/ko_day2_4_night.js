if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

Object.assign(SCENARIO[2], {
    "day2_end": {
        name: "나",
        text: "(두 번째 밤이 깊어간다. 창밖의 어둠이 어제보다 더 짙게 느껴지는 건 기분 탓일까...?)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        next: "day2_end_2"
    },
    "day2_end_2": {
        name: "나",
        text: "(침대에 누워 오늘 있었던 일들을 되짚어본다. 유나가 말한 학교의 비밀, 그리고 그녀들과의 시간...)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_home"
    },
    "day2_night_home": {
        name: "나",
        text: "(잠들기 전, 습관적으로 스마트폰을 확인한다.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        branches: [
            { next: "day2_final_scene", excludeCondition: "has_any_contact" },
            { next: "day2_night_home_check_contact" }
        ]
    },
    "day2_night_home_check_contact": {
        name: "나",
        text: "(누군가에게 메시지를 보내볼까...?)",
        background: "assets/images/background/room_my.png",
        night: true,
        choices: [
            { text: "서연이에게 메시지를 보낸다.", next: "day2_night_message_seyoun", condition: "has_number_seyoun" },
            { text: "유나에게 메시지를 보낸다.", next: "day2_night_message_yuna", condition: "has_number_yuna" },
            { text: "다인이에게 메시지를 보낸다.", next: "day2_night_message_dain", condition: "has_number_dain" },
            { text: "보건선생님께 메시지를 보낸다.", next: "day2_night_message_nurse", condition: "has_number_nurse" },
            { text: "호감도 확인하기", next: "day2_check_affinity" },
            { text: "그냥 잠을 청한다.", next: "day2_final_scene" }
        ]
    },
    "day2_check_affinity": {
        name: "시스템",
        text: "현재 캐릭터들과의 호감도 상태입니다.{affinity_list}",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_seyoun": {
        branches: [
            { next: "day2_night_message_seyoun_after", condition: "day2_met_seoyeon_after" },
            { next: "day2_night_message_seyoun_lunch", condition: "day2_ate_lunch_seoyeon" },
            { next: "day2_night_message_seyoun_generic" }
        ]
    },
    "day2_night_message_seyoun_after": {
        name: "나",
        text: "(서연이에게 메시지를 보냈다. '오늘 학생회 일 돕는 거 즐거웠어. 내일 봐!')",
        night: true,
        setFlag: "sent_msg_day2_seyoun",
        next: "day2_night_message_seyoun_reply"
    },
    "day2_night_message_seyoun_lunch": {
        name: "나",
        text: "(서연이에게 메시지를 보냈다. '오늘 점심 샌드위치 정말 맛있었어! 내일 봐.')",
        night: true,
        setFlag: "sent_msg_day2_seyoun",
        next: "day2_night_message_seyoun_reply"
    },
    "day2_night_message_seyoun_generic": {
        name: "나",
        text: "(서연이에게 메시지를 보냈다. '오늘 하루 잘 보냈어? 내일 학교에서 보자.')",
        night: true,
        setFlag: "sent_msg_day2_seyoun",
        next: "day2_night_message_seyoun_reply"
    },
    "day2_night_message_seyoun_reply": {
        name: "서연",
        text: "(징~ 즉각적인 답장.) '나도 정말 즐거웠어! {name?} 덕분에 든든해. 내일 점심 같이 먹는 거 잊지 마! 잘 자요.'",
        night: true,
        stats: { Seoyeon: { affinity: 5 } },
        next: "day2_final_scene"
    },
    "day2_night_message_yuna": {
        branches: [
            { next: "day2_night_message_yuna_met", condition: "day2_met_yuna_after" },
            { next: "day2_night_message_yuna_met", condition: "day2_met_yuna_lunch" },
            { next: "day2_night_message_yuna_generic" }
        ]
    },
    "day2_night_message_yuna_met": {
        name: "나",
        text: "(유나에게 메시지를 보냈다. '오늘 보여준 거... 잊지 않을게. 잘 자.')",
        night: true,
        setFlag: "sent_msg_day2_yuna",
        next: "day2_night_message_yuna_reply"
    },
    "day2_night_message_yuna_generic": {
        name: "나",
        text: "(유나에게 메시지를 보냈다. '오늘 하루는 어땠어? 내일 학교에서 보자.')",
        night: true,
        setFlag: "sent_msg_day2_yuna",
        next: "day2_night_message_yuna_reply"
    },
    "day2_night_message_yuna_reply": {
        name: "유나",
        text: "(잠시 후 도착한 답장.) '...응. 네가 이해해줄 줄 알았어. 꿈속에서도 지켜보고 있을게, {name?}.'",
        night: true,
        stats: { Yuna: { affinity: 5 } },
        next: "day2_final_scene"
    },
    "day2_night_message_dain": {
        branches: [
            { next: "day2_night_message_dain_after", condition: "day2_met_dain_after" },
            { next: "day2_night_message_dain_lunch", condition: "day2_met_dain_lunch" },
            { next: "day2_night_message_dain_generic" }
        ]
    },
    "day2_night_message_dain_after": {
        branches: [
            { next: "day2_night_message_dain_bet", condition: "day2_dain_bet" },
            { next: "day2_night_message_dain_practice" }
        ]
    },
    "day2_night_message_dain_bet": {
        name: "나",
        text: "(다인이에게 메시지를 보냈다. '오늘 연습 수고했어! 내일 떡볶이 내기 잊지 마.')",
        night: true,
        setFlag: "sent_msg_day2_dain",
        next: "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_practice": {
        name: "나",
        text: "(다인이에게 메시지를 보냈다. '오늘 연습 수고했어! 덕분에 즐거웠어. 내일 봐!')",
        night: true,
        setFlag: "sent_msg_day2_dain",
        next: "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_lunch": {
        name: "나",
        text: "(다인이에게 메시지를 보냈다. '오늘 매점에서 본 거 재밌었어! 내일 떡볶이 먹으러 가자.')",
        night: true,
        setFlag: "sent_msg_day2_dain",
        next: "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_generic": {
        name: "나",
        text: "(다인이에게 메시지를 보냈다. '다인아, 오늘 하루 수고했어! 내일 보자.')",
        night: true,
        setFlag: "sent_msg_day2_dain",
        next: "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_reply": {
        name: "다인",
        text: "(활기찬 답장.) '당연하지! 내가 이길 거니까 지갑 준비해둬! 하하, 잘 자, {name?}!'",
        night: true,
        stats: { Dain: { affinity: 5 } },
        next: "day2_final_scene"
    },
    "day2_night_message_nurse": {
        branches: [
            { next: "day2_night_message_nurse_rest", condition: "day2_met_nurse_after" },
            { next: "day2_night_message_nurse_rest", condition: "wokeUpInNurseRoom" },
            { next: "day2_night_message_nurse_generic" }
        ]
    },
    "day2_night_message_nurse_rest": {
        name: "나",
        text: "(보건선생님께 메시지를 보냈다. '선생님, 오늘 감사했어요. 덕분에 잘 쉬었어요.')",
        night: true,
        setFlag: "sent_msg_day2_nurse",
        next: "day2_night_message_nurse_reply"
    },
    "day2_night_message_nurse_generic": {
        name: "나",
        text: "(보건선생님께 메시지를 보냈다. '선생님, 오늘 하루 수고하셨어요. 안녕히 주무세요.')",
        night: true,
        setFlag: "sent_msg_day2_nurse",
        next: "day2_night_message_nurse_reply"
    },
    "day2_night_message_nurse_reply": {
        name: "보건선생님",
        text: "(매혹적인 답장.) '어머, 벌써 내 생각 하는 거니? 후훗, 오늘 푹 자고 내일 또 얼굴 보자. 잘 자요, {name?}.'",
        night: true,
        stats: { Nurse: { affinity: 5 } },
        next: "day2_final_scene"
    },
    "day2_final_scene": {
        name: "나",
        text: "(내일은 또 어떤 진실이 나를 기다리고 있을까... 무거운 눈꺼풀을 닫으며 잠에 빠져든다.)",
        next: "day2_final"
    },
    "day2_final": {
        name: "시스템",
        text: "(현재 개발된 시나리오는 여기까지입니다. 다음 업데이트를 기대해주세요!)",
        next: "day2_final"
    }
});
