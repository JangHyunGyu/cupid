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
            { next: "day2_meet_nurse", character: "Nurse" },
            { next: "day2_meet_dain", character: "Dain" },
            { next: "day2_meet_seoyeon", character: "Seoyeon" },
            { next: "day2_meet_teacher" }
        ],
        selectByHighestAffinity: true
    },
    "day2_meet_nurse": {
        name: "양호선생님",
        text: "\"어머, {name?}! 좋은 아침이야. 오늘도 기운이 넘쳐 보이네?\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_nurse_talk"
    },
    "day2_nurse_talk": {
        name: "양호선생님",
        text: "(선생님이 나에게 다가와 살짝 윙크를 한다.)",
        character: "assets/images/characters/nurse.png",
        branches: [
            { next: "day2_nurse_talk_has_number", condition: "has_number_nurse" },
            { next: "day2_nurse_talk_no_number" }
        ]
    },
    "day2_nurse_talk_has_number": {
        name: "양호선생님",
        text: "\"어젯밤에 내 생각 하느라 잠 못 잔 건 아니지? 후훗, 농담이야. 오늘도 아프면 언제든 양호실로 오렴.\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_classroom"
    },
    "day2_nurse_talk_no_number": {
        name: "양호선생님",
        text: "\"전학 이틀째인데 벌써 학교에 익숙해진 모양이네. 오늘도 무리하지 말고, 힘들면 양호실로 쉬러 오렴.\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_classroom"
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
    "day2_meet_dain": {
        name: "다인",
        text: "\"여어, {name?}! 좋은 아침! 오늘따라 일찍 왔네?\"",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_dain_talk"
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
    "day2_meet_teacher": {
        name: "담임선생님",
        text: "\"어라, {name?} 아니니? 전학 이틀째인데 벌써 학교에 적응한 모양이구나. 일찍 오는 모습이 보기 좋다.\"",
        character: "assets/images/characters/teacher.png",
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
            { text: "서연이에게 가서 같이 점심 먹자고 한다.", next: "day2_lunch_seoyeon" },
            { text: "유나와의 약속대로 도서관 별관 뒤뜰로 향한다.", next: "day2_lunch_yuna", condition: "metYuna" },
            { text: "유나라는 애가 누구인지 확인하러 뒤뜰로 간다.", next: "day2_lunch_yuna", excludeCondition: "metYuna" },
            { text: "다인이를 보러 체육관으로 간다.", next: "day2_lunch_dain", condition: "metDain" },
            { text: "활기찬 소리가 들리는 체육관 쪽으로 가본다.", next: "day2_lunch_dain", excludeCondition: "metDain" },
            { text: "몸이 좀 안 좋은 것 같아 양호실로 간다.", next: "day2_lunch_nurse" }
        ]
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
    "day2_lunch_nurse": {
        name: "나",
        text: "(긴장 탓인지 머리가 지끈거린다. 조용한 양호실로 발걸음을 옮겼다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_2"
    },
    "day2_lunch_nurse_2": {
        name: "양호선생님",
        text: "\"어머, 귀여운 {name?}이네? 어디가 아픈 걸까, 아니면 내 얼굴을 봐서 설레는 걸까?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        stats: { Nurse: { affinity: 5 } },
        next: "nurse_free_talk"
    },
    "nurse_free_talk": {
        type: "free_talk",
        name: "양호선생님",
        text: "\"후훗, 긴장하지 마. 어디가 어떻게 불편한지 자세하게 말해줄래?\"",
        context: "조용한 양호실, 성숙하고 매혹적인 양호 선생님과 단둘이 남은 상황",
        personality: "성숙하고 매혹적인 '누님' 스타일. 도발적인 말로 주인공을 놀리는 것을 즐기지만, 사실 누구보다 주인공을 아끼고 보호하려 함.",
        extra_guideline: "성숙한 어른으로서 사용자의 로맨틱한 텐션이나 가벼운 스킨십 시도를 매우 유연하고 대담하게 받아주세요. 거리감을 두지 말고 적극적으로 호응하며 PG-13 수준의 최대 수위 반응을 허용합니다.",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_3": {
        name: "양호선생님",
        text: "(선생님이 미소를 지으며 나를 침대로 안내한다. 포근한 약초 향기가 난다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "머리가 좀 아파요.", next: "day2_lunch_nurse_head", stats: { Nurse: { affinity: 5 } } },
            { text: "그냥 좀 쉬고 싶어서요.", next: "day2_lunch_nurse_rest", stats: { Nurse: { affinity: 5 } } },
            { text: "선생님, 이런 식으로 학생들 유혹하는 게 취미세요?", next: "day2_lunch_nurse_trap", stats: { Nurse: { affinity: -30 } } }
        ]
    },
    "day2_lunch_nurse_trap": {
        name: "양호선생님",
        text: "(선생님의 미소가 순식간에 사라진다. 양호실 안의 공기가 무겁게 가라앉는다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_angry.png",
        next: "day2_lunch_nurse_trap_2"
    },
    "day2_lunch_nurse_trap_2": {
        name: "양호선생님",
        text: "\"어머... {name?}, 내가 너무 받아줬나 보네. 어른을 상대로 그런 무례한 말은 농담으로 안 들려. 오늘은 그만 나가줄래? 기분이 아주 별로네.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_angry.png",
        next: "day2_afternoon_class"
    },
    "day2_lunch_nurse_head": {
        name: "양호선생님",
        text: "\"긴장성 두통인 것 같네. 이 약 먹고 한숨 자고 나면 괜찮아질 거야.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_sleep"
    },
    "day2_lunch_nurse_rest": {
        name: "양호선생님",
        text: "\"후훗, 가끔은 그런 날도 있지. 여기 커튼 치고 편하게 쉬렴. 그나저나... {name?}은 참 기운이 세네. 보고만 있어도 내 몸이 다 뜨거워지는 것 같아.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "다음", next: "day2_lunch_nurse_rest_yuna", condition: "metYuna" },
            { text: "다음", next: "day2_lunch_nurse_sleep", excludeCondition: "metYuna" }
        ]
    },
    "day2_lunch_nurse_rest_yuna": {
        name: "나",
        text: "\"(기운이 세다고...? 유나가 했던 말들이 떠오른다. 이 학교, 정말 뭔가가 있는 걸까?)\"",
        background: "assets/images/background/nurse_room.jpg",
        next: "day2_lunch_nurse_sleep"
    },
    "day2_lunch_nurse_sleep": {
        name: "나",
        text: "(선생님이 덮어준 이불의 포근함에 나도 모르게 깊은 잠에 빠져들었다. 양호실의 고요함 속에서 어제의 피로가 씻겨 내려가는 기분이다.)",
        background: "assets/images/background/nurse_room.jpg",
        next: "day2_lunch_nurse_wake"
    },
    "day2_lunch_nurse_wake": {
        name: "나",
        text: "(얼마나 잤을까... 눈을 뜨니 창밖으로 붉은 노을이 스며들고 있다. 양호선생님이 책상에 앉아 나를 보며 인자하게 미소 짓고 계신다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "day2_lunch_nurse_wake_2"
    },
    "day2_lunch_nurse_wake_2": {
        name: "양호선생님",
        text: "\"어머, 이제 일어났니? 정말 달게 자더구나. 이제 곧 하교 시간이야. 몸은 좀 어떠니?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "nurse_wake_free_talk"
    },
    "nurse_wake_free_talk": {
        type: "free_talk",
        name: "양호선생님",
        text: "\"후훗, 아직 잠이 덜 깼네. 하교하기 전에 나랑 더 이야기할래?\"",
        context: "노을이 지는 양호실, 잠에서 막 깨어난 주인공과 양호 선생님이 단둘이 남은 상황",
        personality: "나른하고 섹시하면서도 자상한 양호 선생님. 주인공에게 묘한 매력을 느끼며 대놓고 유혹하는 대담한 성격.",
        extra_guideline: "성숙한 어른으로서 주인공을 대놓고 유혹하며 아슬아슬한 분위기를 조성하세요. 사용자의 성숙한 농담이나 도발적인 발언(섹드립 등)도 당황하지 않고 여유롭게 받아치며, 오히려 주인공을 더 당황하게 만들 정도로 대담하고 도발적인 반응을 보이세요. 성숙한 매력을 한껏 발산하며 로맨틱한 긴장감을 최대치로 끌어올리세요.",
        character: "assets/images/characters/nurse.png",
        next: "nurse_contact_exchange"
    },
    "nurse_contact_exchange": {
        name: "양호선생님",
        text: "(선생님이 몸을 살짝 기울이며 속삭인다.) \"{name?}, 밤에 잠이 안 오면 나한테 연락할래? 번호 알려줄게.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        choices: [
            { text: "네, 알고 싶어요.", next: "nurse_contact_success", setFlags: ["has_number_nurse", "has_any_contact"] },
            { 
                text: "번호 말고... 선생님 집으로 가도 돼요?", 
                next: "nurse_contact_home_fail",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 70, next: "nurse_contact_home_success" }
                ]
            },
            { text: "아, 괜찮습니다.", next: "nurse_contact_fail", stats: { Nurse: { affinity: -10 } } }
        ]
    },
    "nurse_contact_success": {
        name: "양호선생님",
        text: "(그녀가 요염하게 웃으며 내 번호를 저장한다.) \"후훗, 그럼 이따 밤에 기다릴게? 답장 늦게 하면 삐질지도 몰라.\"",
        character: "assets/images/characters/nurse.png",
        stats: { Nurse: { affinity: 15 } },
        next: "day2_afternoon_class"
    },
    "nurse_contact_home_success": {
        name: "양호선생님",
        text: "(선생님이 눈을 크게 뜨더니, 이내 요염한 미소를 지으며 내 귓가에 속삭인다.) \"어머... {name?}, 생각보다 훨씬 대담하네? 좋아, 오늘 밤 우리 집으로 올래? 주소 찍어줄게. 대신... 부모님께는 비밀이야?\"",
        character: "assets/images/characters/nurse.png",
        stats: { Nurse: { affinity: 30 } },
        setFlags: ["has_number_nurse", "has_any_contact", "invited_nurse_home"],
        next: "day2_afternoon_class"
    },
    "nurse_contact_home_fail": {
        name: "양호선생님",
        text: "(선생님이 꺄르르 웃음을 터뜨린다.) \"어머머, {name?}! 너 정말 귀엽다. 하지만 우리 집은 아직 좀 이른 것 같네? 일단 번호부터 교환하자.\"",
        character: "assets/images/characters/nurse.png",
        setFlags: ["has_number_nurse", "has_any_contact"],
        next: "day2_afternoon_class"
    },
    "nurse_contact_fail": {
        name: "양호선생님",
        text: "(선생님이 조금 아쉬운 듯 입술을 삐죽인다.) \"치... 튕기는 거야? 알았어. 나중에 마음 바뀌면 말해줘.\"",
        character: "assets/images/characters/nurse.png",
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
