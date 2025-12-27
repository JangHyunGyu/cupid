if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

Object.assign(SCENARIO[2], {
    "day2_afternoon_class": {
        name: "나",
        text: "(오후 수업도 무사히 끝났다. 이제 방과 후 시간이다.)",
        background: "assets/images/background/room_school.png",
        sunset: true,
        next: "day2_after_school"
    },
    "day2_after_school": {
        name: "나",
        text: "(오늘은 어제보다 더 특별한 일이 생길 것 같은 예감이 든다.)",
        sunset: true,
        choices: [
            { text: "서연이와 함께 학생회 일을 돕는다.", next: "day2_after_seoyeon" },
            { text: "유나와 함께 학교의 비밀을 더 파헤친다.", next: "day2_after_yuna", condition: "metYuna" },
            { text: "도서관 별관의 유나를 다시 찾아가 본다.", next: "day2_after_yuna", excludeCondition: "metYuna" },
            { text: "다인이의 배구 연습을 도와준다.", next: "day2_after_dain", condition: "metDain" },
            { text: "체육관에서 들리는 활기찬 소리를 따라가 본다.", next: "day2_after_dain", excludeCondition: "metDain" },
            { text: "양호실에 있는 선생님을 찾아간다.", next: "day2_after_nurse" }
        ]
    },
    "day2_after_seoyeon": {
        name: "서연",
        text: "(서연이와 함께 늦게까지 학생회실에서 서류 정리를 했다. 밖은 이미 어두워졌다.)",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        night: true,
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_night_talk": {
        name: "서연",
        text: "\"{name?}... 오늘 정말 고마웠어. 너랑 있으면 힘든 일도 다 잊게 돼. 우리... 조금만 더 같이 있을까?\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_end"
    },
    "day2_after_yuna": {
        name: "유나",
        text: "(유나와 함께 학교 지하 창고에서 기묘한 문양들을 발견했다. 유나의 표정이 진지해진다.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "day2_yuna_night_talk"
    },
    "day2_yuna_night_talk": {
        name: "유나",
        text: "\"이건... 단순한 낙서가 아니야. 이 학교의 설립 목적과 관련이 있어. {name?}, 넌 이제 돌이킬 수 없는 길을 선택한 거야.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_end"
    },
    "day2_after_dain": {
        name: "다인",
        text: "(다인이와 함께 체육관에서 땀을 흘리며 연습했다. 다인이가 건네준 이온 음료가 시원하다.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_sweat.png",
        night: true,
        next: "day2_dain_night_talk"
    },
    "day2_dain_night_talk": {
        name: "다인",
        text: "\"와! 너 운동 신경 진짜 대박인데? 우리 팀으로 영입하고 싶을 정도야! 오늘 고생했어, {name?}!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_end"
    },
    "day2_after_nurse": {
        name: "양호선생님",
        text: "(양호실 문을 열자, 노을빛이 가득한 방 안에서 선생님이 나를 기다리고 있었다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "day2_nurse_night_talk"
    },
    "day2_nurse_night_talk": {
        name: "양호선생님",
        text: "\"{name?}... 정말 왔네? 후훗, 나랑 더 있고 싶어서 온 거지? 좋아, 오늘은 특별히 늦게까지 같이 있어줄게.\"",
        character: "assets/images/characters/nurse.png",
        night: true,
        next: "day2_end"
    }
});
