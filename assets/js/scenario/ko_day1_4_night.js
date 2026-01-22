if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

Object.assign(SCENARIO[1], {
    "after_home": {
        name: "나",
        text: "(어둠이 깔린 거리를 지나 방으로 돌아왔어. 오늘 만났던 그녀들의 얼굴이 자꾸만 떠올라.)",
        background: "assets/images/background/room_my.png",
        bgm: "night1.mp3",
        character: null,
        night: true,
        next: "after_home_2"
    },
    "after_home_2": {
        name: "나",
        text: "(침대에 털썩 눕는다. 낯선 천장이 오늘따라 포근하게 느껴지는 건, 기분 탓일까...)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "after_home_3"
    },
    "after_home_3": {
        name: "나",
        text: "(내일은 어떤 일들이 기다리고 있을까? 묘한 설렘에 쉽게 잠이 올 것 같지 않아.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_home"
    },
    "night_home": {
        name: "나",
        text: "(잠들기 전, 습관적으로 스마트폰을 확인한다.)",
        background: "assets/images/background/room_my.png",
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
            { text: "서연이에게 메시지를 보낸다.", next: "night_message_seyoun", condition: "has_number_seyoun", excludeCondition: "sent_msg_day1_seyoun" },
            { text: "유나에게 메시지를 보낸다.", next: "night_message_yuna", condition: "has_number_yuna", excludeCondition: "sent_msg_day1_yuna" },
            { text: "다인이에게 메시지를 보낸다.", next: "night_message_dain", condition: "has_number_dain", excludeCondition: "sent_msg_day1_dain" },
            { text: "보건선생님께 메시지를 보낸다.", next: "night_message_nurse", condition: "has_number_nurse", excludeCondition: "sent_msg_day1_nurse" },
            { text: "담임선생님께 메시지를 보낸다.", next: "night_message_teacher", condition: "has_number_teacher", excludeCondition: "sent_msg_day1_teacher" },
            { text: "호감도 확인하기", next: "day1_check_affinity" },
            { text: "그냥 잠을 잔다.", next: "day1_end" }
        ]
    },
    "day1_check_affinity": {
        name: "시스템",
        text: "현재 캐릭터들과의 호감도 상태입니다.{affinity_list}",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_home_check_contact"
    },
    "night_message_teacher": {
        name: "나",
        text: "(담임선생님께 메시지를 보냈다. '선생님, 오늘 챙겨주셔서 감사해요. 내일 뵐게요!')",
        night: true,
        setFlag: "sent_msg_day1_teacher",
        next: "night_message_teacher_reply"
    },
    "night_message_teacher_reply": {
        name: "담임선생님",
        text: "(다정한 답장.) '어머, {name}이구나? 전학 첫날이라 힘들었을 텐데 기특하네. 푹 쉬고 내일 보자!'",
        night: true,
        stats: { Teacher: { affinity: 3 } },
        next: "night_home_check_contact"
    },
    "night_message_seyoun": {
        name: "나",
        text: "(서연이에게 어떤 메시지를 보낼까?)",
        night: true,
        branches: [
            { next: "night_message_seyoun_lunch", condition: "ate_lunch_seoyeon" },
            { next: "night_message_seyoun_after", condition: "helped_seoyeon" },
            { next: "night_message_seyoun_generic" }
        ]
    },
    "night_message_seyoun_lunch": {
        name: "나",
        text: "(서연이에게 메시지를 보냈다. '오늘 점심 정말 맛있었어. 고마워.')",
        night: true,
        setFlag: "sent_msg_day1_seyoun",
        next: "night_message_seyoun_reply_lunch"
    },
    "night_message_seyoun_after": {
        name: "나",
        text: "(서연이에게 메시지를 보냈다. '오늘 학생회 일 돕는 거 즐거웠어. 내일 봐!')",
        night: true,
        setFlag: "sent_msg_day1_seyoun",
        next: "night_message_seyoun_reply_generic"
    },
    "night_message_seyoun_generic": {
        name: "나",
        text: "(서연이에게 메시지를 보냈다. '오늘 하루 잘 보냈어? 내일 학교에서 보자.')",
        night: true,
        setFlag: "sent_msg_day1_seyoun",
        next: "night_message_seyoun_reply_generic"
    },
    "night_message_seyoun_reply_lunch": {
        name: "서연",
        text: "(징~ 즉각적인 답장.) '정말? 다행이다! 맛있게 먹어줘서 내가 더 고마워. 내일도 기대해줘! 잘 자 {name}.'",
        night: true,
        stats: { Seoyeon: { affinity: 3 } },
        next: "night_home_check_contact"
    },
    "night_message_seyoun_reply_generic": {
        affinityChar: "Seoyeon",
        night: true,
        affinityBranches: [
            { minAffinity: 15, next: "night_message_seyoun_reply_high" },
            { minAffinity: 0, next: "night_message_seyoun_reply_standard" },
            { minAffinity: -100, next: "night_message_seyoun_reply_low" }
        ]
    },
    "night_message_seyoun_reply_standard": {
        name: "서연",
        text: "(징~ 즉각적인 답장.) '나도 정말 즐거웠어! {name} 덕분에 든든해. 내일 학교에서 보자. 잘 자요.'",
        night: true,
        stats: { Seoyeon: { affinity: 3 } },
        next: "night_home_check_contact"
    },
    "night_message_seyoun_reply_high": {
        name: "서연",
        text: "(하트 이모티콘과 함께 온 답장.) '있잖아... 오늘 너랑 같이 보낸 시간, 자꾸 생각나서 큰일이야. 꿈에서라도 보고 싶어. 잘 자야 해, {name}.'",
        night: true,
        stats: { Seoyeon: { affinity: 3 } },
        next: "night_home_check_contact"
    },
    "night_message_seyoun_reply_low": {
        name: "서연",
        text: "(잠시 후 도착한 답장.) '아... 응. 내일 학교에서 보자.'",
        night: true,
        stats: { Seoyeon: { affinity: -5 } },
        next: "night_home_check_contact"
    },
    "night_message_yuna": {
        name: "나",
        text: "(유나에게 메시지를 보냈다. '오늘 즐거웠어. 잘 자.')",
        night: true,
        setFlag: "sent_msg_day1_yuna",
        next: "night_message_yuna_reply"
    },
    "night_message_yuna_reply": {
        affinityChar: "Yuna",
        night: true,
        affinityBranches: [
            { minAffinity: 10, next: "night_message_yuna_reply_high" },
            { minAffinity: 0, next: "night_message_yuna_reply_standard" },
            { minAffinity: -100, next: "night_message_yuna_reply_low" }
        ]
    },
    "night_message_yuna_reply_standard": {
        name: "유나",
        text: "(잠시 후 도착한 답장.) '...응. 너도 잘 자. 내일 학교에서 봐 {name}.'",
        night: true,
        stats: { Yuna: { affinity: 3 } },
        next: "night_home_check_contact"
    },
    "night_message_yuna_reply_high": {
        name: "유나",
        text: "(잠시 후 도착한 답장.) '오늘... 응, 고마웠어. 덕분에 조금 웃을 수 있었던 것 같아. 잘 자.'",
        night: true,
        stats: { Yuna: { affinity: 5 } },
        next: "night_home_check_contact"
    },
    "night_message_yuna_reply_low": {
        name: "유나",
        text: "(답장이 없다. 읽음 표시만 떠 있을 뿐이다.)",
        night: true,
        stats: { Yuna: { affinity: -5 } },
        next: "night_home_check_contact"
    },
    "night_message_dain": {
        name: "나",
        text: "(다인이에게 어떤 메시지를 보낼까?)",
        night: true,
        branches: [
            { next: "night_message_dain_date", condition: "dated_dain_day1" },
            { next: "night_message_dain_generic" }
        ]
    },
    "night_message_dain_date": {
        name: "나",
        text: "(다인이에게 메시지를 보냈다. '오늘 떡볶이 맛있었어! 잘 자.')",
        night: true,
        setFlag: "sent_msg_day1_dain",
        next: "night_message_dain_reply_date"
    },
    "night_message_dain_generic": {
        name: "나",
        text: "(다인이에게 메시지를 보냈다. '오늘 연습하는 거 멋있더라! 내일 봐.')",
        night: true,
        setFlag: "sent_msg_day1_dain",
        next: "night_message_dain_reply_generic"
    },
    "night_message_dain_reply_date": {
        name: "다인",
        text: "(활기찬 답장.) '그치? 내가 맛집은 다 꿰고 있다니까! 푹 자고 내일 보자, {name}! 굿나잇!'",
        night: true,
        stats: { Dain: { affinity: 3 } },
        next: "night_home_check_contact"
    },
    "night_message_dain_reply_generic": {
        affinityChar: "Dain",
        night: true,
        affinityBranches: [
            { minAffinity: 15, next: "night_message_dain_reply_high" },
            { minAffinity: -100, next: "night_message_dain_reply_standard" }
        ]
    },
    "night_message_dain_reply_standard": {
        name: "다인",
        text: "(활기찬 답장.) '오~ 지켜보고 있었냐? 부끄럽게! 하하, 내일은 더 멋진 모습 보여줄게. 잘 자, {name}!'",
        night: true,
        stats: { Dain: { affinity: 3 } },
        next: "night_home_check_contact"
    },
    "night_message_dain_reply_high": {
        name: "다인",
        text: "(활기찬 답장.) '내 활약에 벌써 반한 거야? 후후, 내일은 더 반하게 만들어줄게! 꿈에 나 나와도 놀라지 마~ 잘 자!'",
        night: true,
        stats: { Dain: { affinity: 5 } },
        next: "night_home_check_contact"
    },
    "night_message_nurse": {
        name: "나",
        text: "(보건선생님께 메시지를 보냈다. '선생님, 오늘 감사했어요. 잘 자요.')",
        night: true,
        setFlag: "sent_msg_day1_nurse",
        next: "night_message_nurse_reply"
    },
    "night_message_nurse_reply": {
        affinityChar: "Nurse",
        night: true,
        affinityBranches: [
            { minAffinity: 10, next: "night_message_nurse_reply_high" },
            { minAffinity: -100, next: "night_message_nurse_reply_standard" }
        ]
    },
    "night_message_nurse_reply_standard": {
        name: "보건선생님",
        text: "(매혹적인 답장.) '어머, 정말로 연락했네? 우리 전학생, 정말 착하네. 좋은 꿈 꾸렴, {name}.'",
        night: true,
        stats: { Nurse: { affinity: 3 } },
        next: "night_home_check_contact"
    },
    "night_message_nurse_reply_high": {
        name: "보건선생님",
        text: "(매혹적인 답장.) '어머나... 밤에 이런 메시지라니, 선생님 잠 못 자게 하려는 거니? 장난이야. 너의 다정한 면이 참 좋구나. 잘 자렴.'",
        night: true,
        stats: { Nurse: { affinity: 5 } },
        next: "night_home_check_contact"
    },
    "day1_end": {
        name: "나",
        text: "(눈을 감자 오늘 만난 소녀들의 얼굴이 하나둘씩 스쳐 지나간다. 내일은 그녀들과 더 가까워질 수 있을까...)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        fade: true,
        changeDay: 2,
        next: "day2_start"
    }
});
