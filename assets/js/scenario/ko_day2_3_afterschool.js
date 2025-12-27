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
    "day2_afternoon_nurse_skip": {
        name: "나",
        text: "(양호실에서 푹 쉬고 나니 벌써 방과 후 시간이다. 오후 수업은 통째로 빼먹었지만, 몸은 한결 가볍다.)",
        background: "assets/images/background/nurse_room.jpg",
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
        text: "(서연이와 함께 학생회실에서 서류를 정리하다 보니 어느덧 창밖이 어두워졌다.)",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        night: true,
        next: "day2_after_seoyeon_2"
    },
    "day2_after_seoyeon_2": {
        name: "서연",
        text: "\"휴... 드디어 끝났다. {name?}, 늦게까지 도와줘서 정말 고마워. 너 아니었으면 오늘 안에 다 못 끝냈을 거야.\"",
        character: "assets/images/characters/seyoun_smile.png",
        next: "day2_after_seoyeon_3"
    },
    "day2_after_seoyeon_3": {
        name: "서연",
        text: "(서연이가 기지개를 켜며 살짝 웃는다. 피곤해 보이지만 눈빛은 맑다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "서연아, 넌 왜 이렇게 열심히 해?", next: "day2_seoyeon_why", stats: { Seoyeon: { affinity: 5 } } },
            { text: "이제 그만 가자. 내가 집까지 데려다줄게.", next: "day2_seoyeon_home", stats: { Seoyeon: { affinity: 15 } } }
        ]
    },
    "day2_seoyeon_why": {
        name: "서연",
        text: "\"음... 그냥, 누군가는 해야 할 일이니까. 그리고 내가 잘하면 학교가 조금은 더 좋아지지 않을까 싶어서.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_home": {
        name: "서연",
        text: "\"어...? 데려다준다고? 아... 그, 그래주면 나야 고맙지만...\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_night_talk": {
        name: "서연",
        text: "\"{name?}... 오늘 정말 고마웠어. 너랑 있으면 힘든 일도 다 잊게 돼. 우리... 내일도 같이 점심 먹을래?\"",
        character: "assets/images/characters/seyoun_smile.png",
        next: "day2_end"
    },
    "day2_after_yuna": {
        name: "유나",
        text: "(유나를 따라 학교 지하의 낡은 창고로 내려갔다. 먼지 냄새와 함께 기묘한 한기가 느껴진다.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "day2_after_yuna_2"
    },
    "day2_after_yuna_2": {
        name: "유나",
        text: "\"봐, {name?}. 이 벽에 새겨진 문양들... 어제 도서관에서 봤던 책의 내용과 일치해.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_after_yuna_3"
    },
    "day2_after_yuna_3": {
        name: "유나",
        text: "(유나가 손가락으로 벽의 틈새를 가리킨다. 그곳에는 붉은색으로 기묘한 눈 모양이 그려져 있다.)",
        character: "assets/images/characters/yuna_smile.png",
        choices: [
            { text: "이게 대체 뭘 의미하는 거야?", next: "day2_yuna_meaning", stats: { Yuna: { affinity: 5 } } },
            { text: "(유나의 손을 잡으며) 무서우니까 이제 나가자.", next: "day2_yuna_scary", stats: { Yuna: { affinity: 10 } } }
        ]
    },
    "day2_yuna_meaning": {
        name: "유나",
        text: "\"감시... 혹은 보호. 하지만 누구를 위한 것인지는 아직 알 수 없어.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_night_talk"
    },
    "day2_yuna_scary": {
        name: "유나",
        text: "\"...손이 따뜻하네. 알았어, 오늘은 이만 돌아가자.\"",
        character: "assets/images/characters/yuna_shy.png",
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
        text: "(다인이의 스파이크 연습을 도와주다 보니 온몸이 땀으로 젖었다. 하지만 기분은 상쾌하다.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        night: true,
        next: "day2_after_dain_2"
    },
    "day2_after_dain_2": {
        name: "다인",
        text: "\"하아, 하아... {name?}, 너 진짜 대단하다! 내 공을 그렇게 다 받아낼 줄은 몰랐어!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_after_dain_3"
    },
    "day2_after_dain_3": {
        name: "다인",
        text: "(다인이가 수건으로 땀을 닦으며 나에게 이온 음료를 건넨다.)",
        character: "assets/images/characters/dain_nomal.png",
        choices: [
            { text: "다인이 네가 잘 때려줘서 그렇지.", next: "day2_dain_praise", stats: { Dain: { affinity: 10 } } },
            { text: "나중에 정식으로 한판 붙어볼까?", next: "day2_dain_match", stats: { Dain: { affinity: 15 } } }
        ]
    },
    "day2_dain_praise": {
        name: "다인",
        text: "\"에이, 겸손하긴! 아무튼 오늘 덕분에 연습 제대로 했어. 고마워!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_dain_night_talk"
    },
    "day2_dain_match": {
        name: "다인",
        text: "\"오~ 자신만만한데? 좋아, 내기 걸고 한판 하는 거다? 지는 사람이 떡볶이 쏘기!\"",
        character: "assets/images/characters/dain_active.png",
        next: "day2_dain_night_talk"
    },
    "day2_dain_night_talk": {
        name: "다인",
        text: "\"와! 너 운동 신경 진짜 대박인데? 우리 팀으로 영입하고 싶을 정도야! 오늘 고생했어, {name?}! 조심히 들어가!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_end"
    },
    "day2_after_nurse": {
        name: "양호선생님",
        text: "(양호실 문을 열자, 은은한 아로마 향기와 함께 선생님이 책을 읽고 있는 모습이 보였다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "day2_after_nurse_2"
    },
    "day2_after_nurse_2": {
        name: "양호선생님",
        text: "\"어머, {name?}. 또 왔네? 오늘은 어디가 아파서 온 걸까? 아니면... 그냥 내 얼굴 보러 온 거야?\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_after_nurse_3"
    },
    "day2_after_nurse_3": {
        name: "양호선생님",
        text: "(선생님이 안경을 고쳐 쓰며 나를 빤히 바라본다.)",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "선생님이 보고 싶어서 왔어요.", next: "day2_nurse_miss", stats: { Nurse: { affinity: 15 } } },
            { text: "그냥 조용히 쉬고 싶어서요.", next: "day2_nurse_rest", stats: { Nurse: { affinity: 5 } } }
        ]
    },
    "day2_nurse_miss": {
        name: "양호선생님",
        text: "\"후훗, 솔직해서 좋네. 그런 아이는 상을 줘야겠지?\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_nurse_night_talk"
    },
    "day2_nurse_rest": {
        name: "양호선생님",
        text: "\"그래? 그럼 저기 침대에 누워 있어. 내가 방해 안 할게.\"",
        character: "assets/images/characters/nurse.png",
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
