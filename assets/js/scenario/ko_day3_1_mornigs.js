if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[3]) {
    SCENARIO[3] = {};
}

Object.assign(SCENARIO[3], {
    "day3_start": {
        name: "나",
        text: "(알람 소리에 눈을 뜬다. 전학 온 지 벌써 사흘째... 이제는 아침에 일어나는 것도 조금은 익숙해진 것 같다.)",
        background: "assets/images/background/room_my.png",
        bgm: "intro.mp3",
        character: null,
        next: "day3_start_2"
    },
    "day3_start_2": {
        name: "나",
        text: "(창밖을 보니 오늘은 날씨가 참 좋다. 벌써 금요일이라니... 주말에는 뭘 하지?)",
        next: "day3_start_3"
    },
    "day3_start_3": {
        name: "나",
        text: "(스마트폰을 확인하니 읽지 않은 메시지가 몇 개 쌓여 있다. 누구일까?)",
        branches: [
            { next: "day3_morning_message_check", condition: "has_any_contact" },
            { next: "day3_school_gate" }
        ]
    },
    "day3_morning_message_check": {
        name: "나",
        text: "(메시지를 확인해본다.)",
        choices: [
            { text: "서연이의 메시지 확인", next: "day3_morning_msg_seoyeon", condition: "has_number_seyoun" },
            { text: "유나의 메시지 확인", next: "day3_morning_msg_yuna", condition: "has_number_yuna" },
            { text: "다인이의 메시지 확인", next: "day3_morning_msg_dain", condition: "has_number_dain" },
            { text: "보건선생님의 메시지 확인", next: "day3_morning_msg_nurse", condition: "has_number_nurse" },
            { text: "담임선생님의 메시지 확인", next: "day3_morning_msg_teacher", condition: "has_number_teacher" },
            { text: "나중에 확인하고 학교로 향한다", next: "day3_school_gate" }
        ]
    },
    "day3_morning_msg_seoyeon": {
        name: "서연",
        text: "(새벽 6시에 온 메시지) '좋은 아침! {name}, 오늘도 화이팅! 아, 그리고... 혹시 이번 주말에 시간 있어? 같이 카페 갈래? ☕'",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        setFlag: "day3_seoyeon_weekend_invite",
        next: "day3_morning_msg_seoyeon_choice"
    },
    "day3_morning_msg_seoyeon_choice": {
        name: "나",
        text: "(주말 약속이라니... 어떻게 답장하지?)",
        choices: [
            { text: "좋아! 언제 어디서 만날까?", next: "day3_morning_msg_seoyeon_yes", stats: { Seoyeon: { affinity: 5 } } },
            { text: "생각해보고 학교에서 얘기할게!", next: "day3_morning_msg_seoyeon_later", stats: { Seoyeon: { affinity: 2 } } },
            { text: "답장하지 않고 일단 학교로 간다", next: "day3_school_gate" }
        ]
    },
    "day3_morning_msg_seoyeon_yes": {
        name: "서연",
        text: "(즉각 답장) '정말?! 야호~ 그럼 토요일 오후 2시에 학교 앞 카페 어때? 기대된다! 💕'",
        character: "assets/images/characters/seyoun_laugh.png",
        silhouette: true,
        setFlag: "day3_seoyeon_date_confirmed",
        next: "day3_school_gate"
    },
    "day3_morning_msg_seoyeon_later": {
        name: "서연",
        text: "'응응! 학교에서 이야기하자. 오늘 점심시간에 봐!'",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        next: "day3_school_gate"
    },
    "day3_morning_msg_yuna": {
        name: "유나",
        text: "(새벽 3시에 온 메시지) '...{name}. 주말에 너한테만 보여주고 싶은 곳이 있어. 낮 12시, 학교 뒷문에서 만나자. 꼭 와야 해.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        setFlag: "day3_yuna_weekend_invite",
        next: "day3_morning_msg_yuna_choice"
    },
    "day3_morning_msg_yuna_choice": {
        name: "나",
        text: "(새벽 3시에 메시지라니... 유나는 잠을 안 자나? 어떻게 답장하지?)",
        choices: [
            { text: "응, 알았어. 꼭 갈게.", next: "day3_morning_msg_yuna_yes", stats: { Yuna: { affinity: 5 } } },
            { text: "일단 학교에서 얘기하자.", next: "day3_morning_msg_yuna_later", stats: { Yuna: { affinity: 2 } } },
            { text: "답장하지 않고 일단 학교로 간다", next: "day3_school_gate" }
        ]
    },
    "day3_morning_msg_yuna_yes": {
        name: "유나",
        text: "(한참 후 답장) '...고마워. 기대하고 있을게.'",
        character: "assets/images/characters/yuna_smile.png",
        silhouette: true,
        setFlag: "day3_yuna_date_confirmed",
        next: "day3_school_gate"
    },
    "day3_morning_msg_yuna_later": {
        name: "유나",
        text: "'...그래. 학교에서 보자.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        next: "day3_school_gate"
    },
    "day3_morning_msg_dain": {
        name: "다인",
        text: "(아침 7시에 온 메시지) '야호! {name}! 오늘 체육대회 연습이야! 점심시간에 체육관 올 수 있지? 그리고 토요일 아침 9시에 배구 연습 있는데 와서 응원해줄래? 😆'",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        setFlag: "day3_dain_weekend_invite",
        next: "day3_morning_msg_dain_choice"
    },
    "day3_morning_msg_dain_choice": {
        name: "나",
        text: "(토요일 아침 9시라니... 일찍 일어나야 하는데. 어떻게 답장하지?)",
        choices: [
            { text: "좋아! 꼭 갈게. 응원 열심히 할게!", next: "day3_morning_msg_dain_yes", stats: { Dain: { affinity: 5 } } },
            { text: "생각해보고 학교에서 얘기할게!", next: "day3_morning_msg_dain_later", stats: { Dain: { affinity: 2 } } },
            { text: "답장하지 않고 일단 학교로 간다", next: "day3_school_gate" }
        ]
    },
    "day3_morning_msg_dain_yes": {
        name: "다인",
        text: "'진짜?! 와 대박! 그럼 토요일 9시에 체육관에서 봐! 연습 끝나고 같이 밥 먹자! 🏐'",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        setFlag: "day3_dain_date_confirmed",
        next: "day3_school_gate"
    },
    "day3_morning_msg_dain_later": {
        name: "다인",
        text: "'오케이! 학교에서 봐! 오늘 점심시간에 체육관 와야 해?'",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        next: "day3_school_gate"
    },
    "day3_morning_msg_nurse": {
        name: "보건선생님",
        text: "(어젯밤 11시에 온 메시지) '후훗, {name}. 주말에 시간 있니? 선생님이랑 브런치 어때? 맛있는 거 먹으면서 이야기하자. 물론... 비밀로 해야 해. 😉'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        setFlag: "day3_nurse_weekend_invite",
        next: "day3_morning_msg_nurse_choice"
    },
    "day3_morning_msg_nurse_choice": {
        name: "나",
        text: "(선생님과 단둘이 브런치라니... 심장이 두근거린다. 어떻게 답장하지?)",
        choices: [
            { text: "네! 언제 어디서 만날까요?", next: "day3_morning_msg_nurse_yes", stats: { Nurse: { affinity: 5 } } },
            { text: "생각해보고 학교에서 얘기할게요.", next: "day3_morning_msg_nurse_later", stats: { Nurse: { affinity: 2 } } },
            { text: "답장하지 않고 일단 학교로 간다", next: "day3_school_gate" }
        ]
    },
    "day3_morning_msg_nurse_yes": {
        name: "보건선생님",
        text: "'어머, 정말? 그럼 일요일 11시에 강변 카페로 올래? 주소 보낼게. 기대하고 있을게. 💕'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        setFlag: "day3_nurse_date_confirmed",
        next: "day3_school_gate"
    },
    "day3_morning_msg_nurse_later": {
        name: "보건선생님",
        text: "'알았어. 보건실로 놀러 와. 기다릴게.'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        next: "day3_school_gate"
    },
    "day3_morning_msg_teacher": {
        name: "담임선생님",
        text: "(어젯밤 10시에 온 메시지) '{name}, 주말에 시간 있니? 선생님이 박물관 전시회 티켓이 두 장 생겼는데... 혹시 관심 있으면 같이 갈래?'",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        setFlag: "day3_teacher_weekend_invite",
        next: "day3_morning_msg_teacher_choice"
    },
    "day3_morning_msg_teacher_choice": {
        name: "나",
        text: "(선생님과 박물관이라니... 뭔가 색다른 경험이 될 것 같다. 어떻게 답장하지?)",
        choices: [
            { text: "네! 가고 싶어요. 언제 갈까요?", next: "day3_morning_msg_teacher_yes", stats: { Teacher: { affinity: 5 } } },
            { text: "생각해보고 학교에서 말씀드릴게요.", next: "day3_morning_msg_teacher_later", stats: { Teacher: { affinity: 2 } } },
            { text: "답장하지 않고 일단 학교로 간다", next: "day3_school_gate" }
        ]
    },
    "day3_morning_msg_teacher_yes": {
        name: "담임선생님",
        text: "'정말? 그럼 토요일 오후 3시에 박물관 앞에서 만나자. 기대되네!'",
        character: "assets/images/characters/teacher_smile.png",
        silhouette: true,
        setFlag: "day3_teacher_date_confirmed",
        next: "day3_school_gate"
    },
    "day3_morning_msg_teacher_later": {
        name: "담임선생님",
        text: "'알았어. 학교에서 이야기하자. 오늘 지각하지 마!'",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        next: "day3_school_gate"
    },
    "day3_school_gate": {
        name: "나",
        text: "(교문 앞에 도착했다. 벌써 금요일이라니... 이번 주는 정말 빨리 지나간 것 같다.)",
        background: "assets/images/background/school.png",
        bgm: "daily2.mp3",
        next: "day3_school_gate_2"
    },
    "day3_school_gate_2": {
        name: "나",
        text: "(교문을 통과하려는데, 익숙한 목소리가 들린다.)",
        branches: [
            { next: "day3_morning_encounter_multi", condition: "day3_has_multiple_dates" },
            { next: "day3_morning_encounter_single" }
        ]
    },
    "day3_morning_encounter_multi": {
        name: "나",
        text: "(어라... 저기 여러 명이 나를 기다리고 있는 것 같은데...?)",
        next: "day3_morning_conflict_start"
    },
    "day3_morning_conflict_start": {
        name: "나",
        text: "(주말 약속을 여러 명과 잡은 게... 문제가 될 수도 있겠는데...)",
        next: "day3_1_morning_end"
    },
    "day3_morning_encounter_single": {
        name: "나",
        text: "(평화로운 아침이다. 오늘도 좋은 하루가 될 것 같다.)",
        next: "day3_1_morning_end"
    },
    "day3_1_morning_end": {
        name: "시스템",
        text: "(Day 3 아침 시나리오는 여기까지입니다. 계속 개발 중...)",
        fade: true,
        next: "index.html"
    }
});

// 헬퍼 함수: 여러 명과 주말 약속이 있는지 체크
// 실제 게임 엔진에서 구현 필요
