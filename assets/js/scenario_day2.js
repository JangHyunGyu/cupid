if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}

SCENARIO[2] = {
    "day2_start": {
        name: "나",
        text: "(알람 소리에 눈을 떴다. 전학 이틀째 아침이다.)",
        background: "assets/images/background/room_my.png",
        character: null,
        next: "day2_start_2"
    },
    "day2_start_2": {
        name: "나",
        text: "(어제의 일들이 꿈만 같지만, 책상 위에 놓인 교복이 현실임을 일깨워준다.)",
        next: "day2_start_3"
    },
    "day2_start_3": {
        name: "나",
        text: "(오늘은 또 어떤 일들이 벌어질까? 서둘러 준비하고 학교로 향했다.)",
        next: "day2_school_gate"
    },
    "day2_school_gate": {
        name: "나",
        text: "(교문 앞에 도착하자 어제보다 한결 익숙한 풍경이 나를 반긴다.)",
        background: "assets/images/background/school.png",
        next: "day2_school_gate_2"
    },
    "day2_school_gate_2": {
        name: "나",
        text: "(교문을 통과하려는데, 누군가 내 어깨를 툭 친다.)",
        choices: [
            { text: "뒤를 돌아본다.", next: "day2_meet_someone" }
        ]
    },
    "day2_meet_someone": {
        name: "나",
        text: "(뒤를 돌아보자 그곳에는...)",
        branches: [
            { next: "day2_meet_dain", character: "Dain" },
            { next: "day2_meet_seoyeon", character: "Seoyeon" },
            { next: "day2_meet_teacher" }
        ],
        selectByHighestAffinity: true
    },
    "day2_meet_teacher": {
        name: "담임선생님",
        text: "\"어라, {name?} 아니니? 전학 이틀째인데 벌써 학교에 적응한 모양이구나. 일찍 오는 모습이 보기 좋다.\"",
        character: "assets/images/characters/teacher.png",
        next: "day2_classroom"
    },
    "day2_meet_dain": {
        name: "다인",
        text: "\"여어, {name?}! 좋은 아침! 오늘따라 일찍 왔네?\"",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_dain_talk"
    },
    "day2_meet_seoyeon": {
        name: "서연",
        text: "\"안녕, {name?}! 잘 잤니? 오늘도 일찍 왔구나!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_seoyeon_talk"
    },
    "day2_seoyeon_talk": {
        name: "서연",
        text: "(서연이가 내 눈을 맞추며 살짝 미소 짓는다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        branches: [
            { next: "day2_seoyeon_talk_has_number", condition: "has_number_seyoun" },
            { next: "day2_seoyeon_talk_no_number" }
        ]
    },
    "day2_seoyeon_talk_has_number": {
        name: "서연",
        text: "\"어제는 잘 들어갔어? 연락처 교환하고 나서 메시지 보낼까 말까 고민하다가... 너무 늦은 것 같아서 참았어.\"",
        character: "assets/images/characters/seyoun_shy.png",
        choices: [
            { text: "나도 서연이 메시지 기다렸는데! 지금이라도 보내줘.", next: "day2_seoyeon_happy", stats: { Seoyeon: { affinity: 10 } } },
            { text: "아, 그랬구나. 나도 피곤해서 바로 잠들었어.", next: "day2_seoyeon_normal", stats: { Seoyeon: { affinity: 2 } } }
        ]
    },
    "day2_seoyeon_talk_no_number": {
        name: "서연",
        text: "\"어제는 잘 들어갔어? 전학 첫날이라 걱정 많이 했는데, 오늘 보니까 안심이 되네. 오늘도 힘내자!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom"
    },
    "day2_seoyeon_happy": {
        name: "서연",
        text: "\"정말? 후훗, 그럼 오늘부터는 사소한 거라도 다 공유하기다? 자, 같이 교실로 가자!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom"
    },
    "day2_seoyeon_normal": {
        name: "서연",
        text: "\"그렇지? 전학 첫날이라 많이 피곤했을 거야. 자, 오늘도 힘내서 학교생활 해보자!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_classroom"
    },
    "day2_dain_talk": {
        name: "다인",
        text: "(다인이가 활기차게 내 어깨를 툭 친다.)",
        character: "assets/images/characters/dain_laugh.png",
        branches: [
            { next: "day2_dain_talk_dated", condition: "datedDainDay1" },
            { next: "day2_dain_talk_not_dated" }
        ]
    },
    "day2_dain_talk_dated": {
        name: "다인",
        text: "\"어제 먹은 떡볶이 덕분에 오늘 컨디션 최고야! 너도 그렇지?\"",
        character: "assets/images/characters/dain_laugh.png",
        choices: [
            { text: "응! 나도 다인이 덕분에 푹 잤어.", next: "day2_dain_happy", stats: { Dain: { affinity: 10 } } },
            { text: "난 좀 피곤한데... 다인이는 체력이 정말 좋구나.", next: "day2_dain_normal", stats: { Dain: { affinity: 2 } } }
        ]
    },
    "day2_dain_talk_not_dated": {
        name: "다인",
        text: "\"어제는 잘 들어갔어? 전학 첫날인데 학교 구경은 좀 했나 모르겠네! 오늘도 활기차게 보내자구!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_classroom"
    },
    "day2_dain_happy": {
        name: "다인",
        text: "\"하하! 역시 내 에너지가 좀 넘치긴 하지? 좋아, 오늘 점심시간에도 체육관으로 와! 기다릴게!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_classroom"
    },
    "day2_dain_normal": {
        name: "다인",
        text: "\"에이~ 엄살은! 학교생활 적응하려면 체력이 국력이라구! 자, 어서 교실로 가자!\"",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_classroom"
    },
    "day2_classroom": {
        name: "나",
        text: "(교실에 들어서자 아이들이 어제보다 훨씬 친근하게 인사를 건네온다.)",
        background: "assets/images/background/room_school.png",
        next: "day2_classroom_2"
    },
    "day2_classroom_2": {
        name: "나",
        text: "(자리에 앉아 수업 준비를 하려는데, 책상 위에 작은 쪽지 하나가 놓여 있다.)",
        choices: [
            { text: "쪽지를 확인한다.", next: "day2_check_note" }
        ]
    },
    "day2_check_note": {
        name: "나",
        text: "(쪽지에는 정갈한 글씨체로 이렇게 적혀 있다.)",
        next: "day2_note_content"
    },
    "day2_note_content": {
        name: "시스템",
        text: "\"'점심시간에 도서관 별관 뒤뜰로 와줘. 할 말이 있어.' - 유나\"",
        next: "day2_morning_class"
    },
    "day2_morning_class": {
        name: "나",
        text: "(수업 시간 내내 유나의 쪽지가 머릿속을 떠나지 않는다. 대체 무슨 할 말이 있는 걸까?)",
        branches: [
            { next: "day2_morning_class_yuna_met", condition: "metYuna" },
            { next: "day2_morning_class_yuna_new" }
        ]
    },
    "day2_morning_class_yuna_met": {
        name: "나",
        text: "(어제 만났던 유나... 그녀가 왜 나에게 이런 쪽지를 남긴 걸까? 비밀이라는 게 대체 무엇인지 궁금해진다.)",
        next: "day2_lunch_time"
    },
    "day2_morning_class_yuna_new": {
        name: "나",
        text: "(유나...? 어제는 들어본 적 없는 이름이다. 대체 누구길래 나에게 이런 쪽지를 남긴 걸까?)",
        next: "day2_lunch_time"
    },
    "day2_lunch_time": {
        name: "나",
        text: "(드디어 점심시간 종이 울렸다. 아이들이 급식실로 달려나간다.)",
        choices: [
            { text: "유나와의 약속대로 도서관 별관 뒤뜰로 향한다.", next: "day2_lunch_yuna", condition: "metYuna" },
            { text: "유나라는 애가 누구인지 확인하러 뒤뜰로 간다.", next: "day2_lunch_yuna", excludeCondition: "metYuna" },
            { text: "서연이에게 가서 같이 점심 먹자고 한다.", next: "day2_lunch_seoyeon" },
            { text: "다인이를 보러 체육관으로 간다.", next: "day2_lunch_dain", condition: "metDain" },
            { text: "활기찬 소리가 들리는 체육관 쪽으로 가본다.", next: "day2_lunch_dain", excludeCondition: "metDain" }
        ]
    },
    "day2_lunch_yuna": {
        name: "나",
        text: "(도서관 별관 뒤뜰. 울창한 나무들 사이로 유나가 서 있다.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_talk"
    },
    "day2_yuna_talk": {
        name: "유나",
        text: "\"...왔구나. 쪽지 보고 안 올 줄 알았는데.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_talk_2"
    },
    "day2_yuna_talk_2": {
        name: "유나",
        text: "(유나가 무표정한 얼굴로 나를 빤히 바라본다.)",
        character: "assets/images/characters/yuna_nomal.png",
        branches: [
            { next: "day2_yuna_talk_2_met", condition: "metYuna" },
            { next: "day2_yuna_talk_2_new" }
        ]
    },
    "day2_yuna_talk_2_met": {
        name: "유나",
        text: "\"어제 내가 했던 말... 기억해? 이 학교의 비밀 말이야. 사실 너한테만 보여주고 싶은 게 있어.\"",
        character: "assets/images/characters/yuna_nomal.png",
        choices: [
            { text: "그게 뭔데? 나도 궁금해.", next: "day2_yuna_secret", stats: { Yuna: { affinity: 10 } } },
            { text: "비밀 같은 건 관심 없어. 그냥 너랑 대화하고 싶어서 온 거야.", next: "day2_yuna_normal", stats: { Yuna: { affinity: 5 } } }
        ]
    },
    "day2_yuna_talk_2_new": {
        name: "유나",
        text: "\"너... 내가 누군지 궁금해서 온 거지? 사실 이 학교에는 아주 깊은 비밀이 있어. 너한테만 보여주고 싶은 게 있는데.\"",
        character: "assets/images/characters/yuna_nomal.png",
        choices: [
            { text: "비밀? 그게 뭔데?", next: "day2_yuna_secret", stats: { Yuna: { affinity: 10 } } },
            { text: "그냥 쪽지 보고 궁금해서 와봤어.", next: "day2_yuna_normal", stats: { Yuna: { affinity: 5 } } }
        ]
    },
    "day2_yuna_secret": {
        name: "유나",
        text: "(유나가 내 손을 잡고 낡은 창고 쪽으로 이끈다. 그녀의 손이 어제보다 더 차갑게 느껴진다.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_yuna_secret_2"
    },
    "day2_yuna_secret_2": {
        name: "유나",
        text: "\"이 안에는... 학교가 오랫동안 숨겨온 기록들이 있어. 네가 이걸 보면... 모든 게 달라질 거야.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_afternoon_class"
    },
    "day2_yuna_normal": {
        name: "유나",
        text: "\"...그래? 넌 참 이상한 애야. 다른 애들은 다들 무서워하는데. 좋아, 그럼 오늘은 그냥 이렇게 같이 있자.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_afternoon_class"
    },
    "day2_lunch_seoyeon": {
        name: "서연",
        text: "(서연이가 학생회실에서 도시락을 먹고 있다가 나를 보고 환하게 웃는다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_seoyeon_lunch_talk"
    },
    "day2_seoyeon_lunch_talk": {
        name: "서연",
        text: "\"{name?}! 마침 같이 먹으려고 기다리고 있었어! 자, 여기 앉아.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_afternoon_class"
    },
    "day2_lunch_dain": {
        name: "다인",
        text: "(다인이가 체육관에서 배구 연습을 하다가 나를 발견하고 달려온다.)",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_dain_lunch_talk"
    },
    "day2_dain_lunch_talk": {
        name: "다인",
        text: "\"오! 진짜 왔네? 좋아, 오늘 점심은 내가 쏜다! 매점으로 가자!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_afternoon_class"
    },
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
            { text: "다인이의 배구 연습을 도와준다.", next: "day2_after_dain", condition: "metDain" },
            { text: "체육관에서 들리는 활기찬 소리를 따라가 본다.", next: "day2_after_dain", excludeCondition: "metDain" },
            { text: "유나와 함께 학교의 비밀을 더 파헤친다.", next: "day2_after_yuna", condition: "metYuna" },
            { text: "도서관 별관의 유나를 다시 찾아가 본다.", next: "day2_after_yuna", excludeCondition: "metYuna" }
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
};
