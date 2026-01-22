if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

Object.assign(SCENARIO[2], {
    "day2_start": {
        name: "나",
        text: "(눈을 뜨자마자 어제 만난 얼굴들이 스쳐 지나간다. 전학 이틀째의 아침, 설렘 때문인지 알람이 울리기도 전에 잠에서 깨버렸다.)",
        background: "assets/images/background/room_my.png",
        bgm: "intro.mp3",
        character: null,
        next: "day2_start_2"
    },
    "day2_start_2": {
        name: "나",
        text: "(어제의 일들이 마치 꿈처럼 달콤하게 느껴지지만... 책상 위에 놓인 교복이 이곳이 현실임을 말해준다. 오늘도 좋은 일이 생길 것 같아.)",
        next: "day2_start_3"
    },
    "day2_start_3": {
        name: "나",
        text: "(자, 가보자. 오늘은 또 어떤 떨림이 나를 기다리고 있을까?)",
        next: "day2_school_gate"
    },
    "day2_school_gate": {
        name: "나",
        text: "(교문 앞에 도착하자 어제보다 훨씬 다정하게 느껴지는 풍경이 나를 반긴다. 왠지 모르게 발걸음이 가볍다.)",
        background: "assets/images/background/school.png",
        bgm: "daily2.mp3",
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
            { next: "day2_meet_yuna", character: "Yuna", condition: "met_yuna" },
            { next: "day2_meet_nurse", character: "Nurse", condition: "met_nurse" },
            { next: "day2_meet_dain", character: "Dain", condition: "met_dain" },
            { next: "day2_meet_seoyeon", character: "Seoyeon", condition: "met_seoyeon" },
            { next: "day2_meet_teacher" }
        ],
        selectByHighestAffinity: true
    },
    "day2_meet_yuna": {
        name: "나",
        text: "(교문 옆 커다란 느티나무 아래, 유나가 무심한 표정으로 서 있는 것이 보인다. 그녀는 책을 덮고 나를 가만히 바라본다.)",
        character: "assets/images/characters/yuna_normal.png",
        branches: [
            { next: "day2_yuna_talk_msg", condition: "sent_msg_day1_yuna" },
            { next: "day2_yuna_talk" }
        ]
    },
    "day2_yuna_talk_msg": {
        name: "유나",
        text: "\"...안녕. 어젯밤 메시지... 고마웠어. 덕분에 조금은 따뜻한 밤이었어. 이따가... 쪽지 확인해봐.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_classroom"
    },
    "day2_yuna_talk": {
        name: "유나",
        text: "\"...안녕. 오늘도 그 '빛'은 여전하네. 다행이야. 이따가... 쪽지 확인해봐.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day2_classroom"
    },
    "day2_meet_nurse": {
        affinityChar: "Nurse",
        affinityBranches: [
            { minAffinity: 20, next: "day2_meet_nurse_high" },
            { minAffinity: -5, next: "day2_meet_nurse_standard" },
            { minAffinity: -100, next: "day2_meet_nurse_low" }
        ]
    },
    "day2_meet_nurse_standard": {
        name: "보건선생님",
        text: "\"어머, {name}! 좋은 아침이야. 오늘따라 기운이 넘쳐 보이네?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_nurse_talk"
    },
    "day2_meet_nurse_high": {
        name: "보건선생님",
        text: "(선생님이 나를 보자마자 다가와 옷매무새를 다듬어준다.) \"우리 전학생, 밤새 무슨 꿈을 꿨길래 이렇게 반짝거릴까? 선생님은 네 생각 하느라 조금 늦잠 잤는데 말이야.\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 5 } },
        next: "day2_nurse_talk"
    },
    "day2_meet_nurse_low": {
        name: "보건선생님",
        text: "(선생님이 나를 보자마자 한숨을 내쉬며 고개를 돌린다.) \"어머, 전학생... 아침부터 얼굴 보기가 참 힘드네. 볼일 없으면 교실로 가 줄래?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_classroom"
    },
    "day2_nurse_talk": {
        name: "보건선생님",
        text: "(선생님이 나에게 다가와 살짝 윙크를 한다.)",
        character: "assets/images/characters/nurse_normal.png",
        branches: [
            { next: "day2_nurse_talk_msg", condition: "sent_msg_day1_nurse" },
            { next: "day2_nurse_talk_has_number", condition: "has_number_nurse" },
            { next: "day2_nurse_talk_no_number" }
        ]
    },
    "day2_nurse_talk_msg": {
        name: "보건선생님",
        text: "\"어젯밤에 메시지 보내준 거, 정말 귀엽더라. 덕분에 선생님도 기분 좋게 잠들었어. 오늘도 아프면 언제든 보건실로 오렴.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_classroom"
    },
    "day2_nurse_talk_has_number": {
        name: "보건선생님",
        text: "\"어젯밤에 내 생각 하느라 잠 못 이룬 건 아니지? 후훗, 농담이야. 오늘도 아프면 언제든 보건실로 오렴.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_classroom"
    },
    "day2_nurse_talk_no_number": {
        name: "보건선생님",
        text: "\"전학 이틀째인데 벌써 학교에 익숙해진 모양이네. 오늘도 무리하지 말고, 힘들면 보건실로 놀러 오렴.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_classroom"
    },
    "day2_meet_seoyeon": {
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 25, next: "day2_meet_seoyeon_high" },
            { minAffinity: -5, next: "day2_meet_seoyeon_standard" },
            { minAffinity: -100, next: "day2_meet_seoyeon_low" }
        ]
    },
    "day2_meet_seoyeon_standard": {
        name: "서연",
        text: "\"안녕, {name}! 잘 잤니? 오늘도 일찍 왔구나!\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day2_seoyeon_talk"
    },
    "day2_meet_seoyeon_high": {
        name: "서연",
        text: "(서연이가 교문 앞에서 서성이다가 나를 발견하자마자 환하게 웃으며 달려온다.) \"{name}! 기다리고 있었어! 어젯밤에 잘 잤는지 궁금해서 한숨도 못 잤다니까?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "day2_seoyeon_talk"
    },
    "day2_meet_seoyeon_low": {
        name: "서연",
        text: "(서연이가 나를 발견하자마자 표정을 굳히며 고개를 돌린다.) \"...아, 왔니? 지각은 안 해서 다행이네. 그럼 수고해.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "day2_classroom"
    },
    "day2_seoyeon_talk": {
        name: "서연",
        text: "(서연이는 나와 눈을 맞추며 살짝 미소 짓는다.)",
        character: "assets/images/characters/seyoun_normal.png",
        branches: [
            { next: "day2_seoyeon_talk_msg", condition: "sent_msg_day1_seyoun" },
            { next: "day2_seoyeon_talk_has_number", condition: "has_number_seyoun" },
            { next: "day2_seoyeon_talk_no_number" }
        ]
    },
    "day2_seoyeon_talk_msg": {
        name: "서연",
        text: "\"어제 메시지 정말 고마웠어! 덕분에 푹 잘 수 있었던 것 같아. 우리 오늘도 힘내자!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom"
    },
    "day2_seoyeon_talk_has_number": {
        name: "서연",
        text: "\"어제 잘 들어갔어? 연락처 교환하고 나서 메시지 보낼까 말까 수백 번은 고민했는데... 너무 방해될까 봐 꾹 참았어.\"",
        character: "assets/images/characters/seyoun_shy.png",
        choices: [
            { text: "나도 서연이 메시지 엄청 기다렸는데! 지금이라도 보내줘요.", next: "day2_seoyeon_happy", stats: { Seoyeon: { affinity: 5 } } },
            { text: "아, 그랬구나. 사실 나도 피곤해서 눕자마자 잠들었어.", next: "day2_seoyeon_normal", stats: { Seoyeon: { affinity: 1 } } }
        ]
    },
    "day2_seoyeon_talk_no_number": {
        name: "서연",
        text: "\"어제 잘 들어갔어? 전학 첫날이라 걱정 많이 했는데, 오늘 보니까 안심이 되네. 오늘도 힘내자!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom"
    },
    "day2_seoyeon_happy": {
        name: "서연",
        text: "\"정말? 그럼 오늘부터는 사소한 거라도 다 공유하기다? 자, 같이 교실로 가자!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom"
    },
    "day2_seoyeon_normal": {
        name: "서연",
        text: "\"그렇지? 전학 첫날이라 많이 피곤했을 거야. 자, 오늘도 힘내서 학교생활 해보자!\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day2_classroom"
    },
    "day2_meet_dain": {
        name: "다인",
        text: "\"어어, {name}! 좋은 아침! 오늘따라 일찍 왔네?\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day2_dain_talk"
    },
    "day2_dain_talk": {
        name: "다인",
        text: "(다인이는 활기차게 내 어깨를 툭 친다.)",
        character: "assets/images/characters/dain_laugh.png",
        branches: [
            { next: "day2_dain_talk_msg", condition: "sent_msg_day1_dain" },
            { next: "day2_dain_talk_dated", condition: "dated_dain_day1" },
            { next: "day2_dain_talk_not_dated" }
        ]
    },
    "day2_dain_talk_msg": {
        name: "다인",
        text: "\"어제 메시지 잘 받았어! 너 은근히 다정하더라? 덕분에 기분 좋게 잤어. 오늘도 활기차게 보내자구!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_classroom"
    },
    "day2_dain_talk_dated": {
        name: "다인",
        text: "\"어제 먹은 떡볶이 덕분에 오늘 컨디션 최고야! 너도 그렇지?\"",
        character: "assets/images/characters/dain_laugh.png",
        choices: [
            { text: "응! 나도 다인이 덕분에 잘 잤어.", next: "day2_dain_happy", stats: { Dain: { affinity: 5 } } },
            { text: "난 좀 피곤한데... 다인이는 체력이 정말 좋구나.", next: "day2_dain_normal", stats: { Dain: { affinity: 1 } } }
        ]
    },
    "day2_dain_talk_not_dated": {
        name: "다인",
        text: "\"어제 잘 들어갔어? 전학 첫날인데 학교 구경은 좀 했나 모르겠네! 오늘도 활기차게 보내자구!\"",
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
        character: "assets/images/characters/dain_normal.png",
        next: "day2_classroom"
    },
    "day2_meet_teacher": {
        name: "담임선생님",
        text: "\"어라, {name} 아니니? 전학 이틀째인데 벌써 학교에 적응한 모양이구나. 일찍 오는 모습이 보기 좋다.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day2_teacher_free_talk"
    },
    "day2_teacher_free_talk": {
        type: "free_talk",
        name: "담임선생님",
        text: "\"수업 시작 전까지 시간이 좀 남았네. 나한테 궁금한 거라도 있니?\"",
        context: "교문 앞에서 담임선생님과 마주쳐 교실로 함께 걸어가는 상황입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 선생님이 비상연락망을 위해 주인공의 연락처를 물어보는 상황으로 이어집니다. 대화의 마지막 턴에만 연락처를 물어볼 타이밍을 잡거나, 공적인 용무가 있다는 뉘앙스를 풍겨주세요.",
        personality: "공과 사가 뚜렷하지만 주인공에게는 은근히 약한 모습을 보이는 담임선생님.",
        character: "assets/images/characters/teacher_normal.png",
        affinityChar: "Teacher",
        affinityBranches: [
            { minAffinity: 20, next: "day2_teacher_contact_ask_high" },
            { minAffinity: 0, next: "day2_teacher_contact_ask" },
            { minAffinity: -100, next: "day2_teacher_contact_ask_low" }
        ],
        next: "day2_teacher_contact_ask"
    },
    "day2_teacher_contact_ask_high": {
        name: "나",
        text: "(선생님과 즐겁게 대화를 나누며 교실로 향했다. 선생님은 아침부터 기분이 좋아 보인다며, 비상연락망 작성을 위해 내 연락처를 물어보셨다.)",
        character: "assets/images/characters/teacher_smile.png",
        choices: [
            { text: "네, 여기 제 번호예요.", next: "day2_teacher_contact_success_high", setFlags: ["has_number_teacher", "has_any_contact"] },
            { text: "나중에 교무실 가서 알려드릴게요.", next: "day2_classroom" }
        ]
    },
    "day2_teacher_contact_ask_low": {
        name: "나",
        text: "(선생님의 표정이 굳어졌다. 아침부터 내가 너무 무례하게 굴었나 보다. 선생님은 한숨을 내쉬며 비상연락망 작성을 위해 내 연락처를 알려달라고 하셨다.)",
        character: "assets/images/characters/teacher_angry.png",
        choices: [
            { text: "네, 여기 제 번호예요.", next: "day2_teacher_contact_success_low", setFlags: ["has_number_teacher", "has_any_contact"] },
            { text: "나중에 교무실 가서 알려드릴게요.", next: "day2_classroom" }
        ]
    },
    "day2_teacher_contact_ask": {
        name: "나",
        text: "(선생님과 이런저런 이야기를 나누며 교실로 걸어갔다. 선생님은 비상연락망 작성을 위해 내 연락처가 필요하다며 번호를 물어보셨다.)",
        character: "assets/images/characters/teacher_normal.png",
        choices: [
            { text: "네, 여기 제 번호예요.", next: "day2_teacher_contact_success_normal", setFlags: ["has_number_teacher", "has_any_contact"] },
            { text: "나중에 교무실 가서 알려드릴게요.", next: "day2_classroom" }
        ]
    },
    "day2_teacher_contact_success_high": {
        name: "담임선생님",
        text: "\"{name}, 번호 고마워! 후훗, 비상연락망 핑계로 물어보긴 했지만... 실은 나도 너랑 좀 더 친해지고 싶었거든. 학교생활 힘들면 언제든지 이 번호로 연락해?\"",
        character: "assets/images/characters/teacher_smile.png",
        stats: { Teacher: { affinity: 15 } },
        next: "day2_classroom"
    },
    "day2_teacher_contact_success_low": {
        name: "담임선생님",
        text: "\"...그래, 고맙다. 연락처는 공적인 용도로만 사용할 테니 걱정하지 마. 수업 늦지 않게 어서 들어가 봐.\"",
        character: "assets/images/characters/teacher_angry.png",
        stats: { Teacher: { affinity: 2 } },
        next: "day2_classroom"
    },
    "day2_teacher_contact_success_normal": {
        name: "담임선생님",
        text: "\"고마워. 그럼 무슨 일 있으면 연락할게. 자, 이제 교실로 가자.\"",
        character: "assets/images/characters/teacher_normal.png",
        stats: { Teacher: { affinity: 10 } },
        next: "day2_classroom"
    },

    "day2_classroom": {
        name: "나",
        text: "(교실 문을 열자, 어제보다 훨씬 부드러운 공기가 나를 감싼다. 아이들의 시선에도 호의가 섞여 있다.)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "day2_classroom_2"
    },
    "day2_classroom_2": {
        name: "나",
        text: "(자리에 앉아 가방을 정리하려는데, 책상 구석에 놓인 작은 쪽지가 눈에 들어온다.)",
        choices: [
            { text: "쪽지를 확인한다.", next: "day2_check_note" }
        ]
    },
    "day2_check_note": {
        name: "나",
        text: "(조심스레 쪽지를 펼친다. 정갈하면서도 어딘가 차가운 글씨체가 눈에 띈다.)",
        next: "day2_note_content"
    },
    "day2_note_content": {
        name: "시스템",
        text: "\"'점심시간에 도서관 별관 뒤뜰로 와. 할 말이 있어.' - 유나\"",
        next: "day2_morning_class"
    },
    "day2_morning_class": {
        name: "나",
        text: "(수업 시간 내내 유나의 쪽지가 머릿속을 떠나지 않는다. 대체 무슨 할 말이 있는 걸까?)",
        branches: [
            { next: "day2_morning_class_yuna_msg", condition: "sent_msg_day1_yuna" },
            { next: "day2_morning_class_yuna_met", condition: "met_yuna" },
            { next: "day2_morning_class_yuna_new" }
        ]
    },
    "day2_morning_class_yuna_msg": {
        name: "나",
        text: "(어젯밤 메시지를 주고받았던 유나... 번호도 있는데 왜 굳이 쪽지를 남긴 걸까? 그녀다운 방식이라는 생각에 피식 웃음이 난다.)",
        next: "day2_lunch_time"
    },
    "day2_morning_class_yuna_met": {
        name: "나",
        text: "(어제 만났던 유나... 그녀가 나에게 이런 쪽지를 남긴 걸까? 비밀이라니... 대체 무엇인지 궁금해진다.)",
        next: "day2_lunch_time"
    },
    "day2_morning_class_yuna_new": {
        name: "나",
        text: "(유나...? 어제는 들어보지 못한 이름이다. 대체 누구길래 나에게 이런 쪽지를 남긴 걸까?)",
        next: "day2_lunch_time"
    }
});
