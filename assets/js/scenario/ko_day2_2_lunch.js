if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

Object.assign(SCENARIO[2], {
    "day2_lunch_time": {
        name: "나",
        text: "(딩동댕동~ 기다리고 기다리던 점심시간! 교실 안은 순식간에 활기로 가득 찼다.)",
        character: null,
        choices: [
            { text: "서연이에게 가서 같이 점심 먹자고 한다.", next: "day2_lunch_seoyeon" },
            { text: "유나와의 약속대로 도서관 별관 뒤뜰로 향한다.", next: "day2_lunch_yuna", condition: "metYuna" },
            { text: "유나는 대체 누구인지 확인하러 뒤뜰로 간다.", next: "day2_lunch_yuna", excludeCondition: "metYuna" },
            { text: "다인을 보러 체육관으로 간다.", next: "day2_lunch_dain", condition: "metDain" },
            { text: "활기찬 소리가 들리는 체육관 쪽으로 가본다.", next: "day2_lunch_dain", excludeCondition: "metDain" },
            { text: "몸이 좀 안 좋은 것 같아 보건실로 간다.", next: "day2_lunch_nurse" },
            { text: "교무실에 계신 담임선생님을 찾아간다.", next: "day2_lunch_teacher" }
        ]
    },
    "day2_lunch_teacher": {
        name: "나",
        text: "(교무실 문을 열자, 도시락을 드시려던 담임선생님이 나를 보고 반갑게 웃으신다.)",
        background: "assets/images/background/teacher_room.png",
        character: "assets/images/characters/teacher.png",
        next: "day2_lunch_teacher_2"
    },
    "day2_lunch_teacher_2": {
        name: "담임선생님",
        text: "\"어머, {name?}! 점심은 맛있게 먹었니? 선생님은 이제 막 먹으려던 참이야.\"",
        character: "assets/images/characters/teacher.png",
        next: "day2_lunch_teacher_3"
    },
    "day2_lunch_teacher_3": {
        name: "담임선생님",
        text: "\"혹시 선생님이랑 같이 점심 먹고 싶어서 온 거니? 후훗, 농담이야.\"",
        character: "assets/images/characters/teacher_smile.png",
        choices: [
            { text: "네, 선생님이랑 같이 먹고 싶어요! (옆에 앉는다)", next: "day2_lunch_teacher_eat", stats: { Teacher: { affinity: 15 } } },
            { text: "선생님 도시락이 너무 맛있어 보여서요.", next: "day2_lunch_teacher_food", stats: { Teacher: { affinity: 5 } } },
            { text: "아니요, 그냥 지나가다가 들렀어요.", next: "day2_lunch_teacher_pass", stats: { Teacher: { affinity: 3 } } }
        ]
    },
    "day2_lunch_teacher_eat": {
        name: "담임선생님",
        text: "\"어머나... 정말 대담한 학생이네? 좋아, 선생님 도시락 반찬 좀 나눠줄게. 자, 아~ 해보렴.\"",
        character: "assets/images/characters/teacher_smile.png",
        next: "day2_lunch_teacher_end"
    },
    "day2_lunch_teacher_food": {
        name: "담임선생님",
        text: "\"후훗, 우리 어머니가 솜씨가 좀 좋으시거든. 나중에 기회 되면 {name?}한테도 맛 보여주고 싶네.\"",
        character: "assets/images/characters/teacher_smile.png",
        next: "day2_lunch_teacher_end"
    },
    "day2_lunch_teacher_pass": {
        name: "담임선생님",
        text: "\"그래? 그래도 이렇게 들러주니 고맙네. 남은 점심시간 즐겁게 보내렴!\"",
        character: "assets/images/characters/teacher.png",
        next: "day2_lunch_teacher_end"
    },
    "day2_lunch_teacher_end": {
        name: "나",
        text: "(선생님과 짧지만 즐거운 대화를 나누고 교실로 돌아왔다. 선생님의 다정한 미소가 계속 생각난다.)",
        next: "day2_afternoon_class"
    },
    "day2_lunch_seoyeon": {
        name: "서연",
        text: "(학생회실 문을 열자, 도시락을 먹던 서연이가 눈을 동그랗게 뜨며 나를 반긴다.)",
        background: "assets/images/background/student_room.png",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_seoyeon_lunch_talk"
    },
    "day2_seoyeon_lunch_talk": {
        name: "서연",
        text: "\"{name?}! 마침 오길 기다리고 있었어. 우리 여기 앉아. 오늘 샌드위치를 좀 넉넉하게 만들었거든.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        choices: [
            { text: "와, 정말 맛있어 보여! 서연이는 요리 천재구나.", next: "day2_seoyeon_lunch_praise", stats: { Seoyeon: { affinity: 8 } } },
            { text: "학생회 일 때문에 피곤하진 않아? 너무 무리하는 거 아냐?", next: "day2_seoyeon_lunch_worry", stats: { Seoyeon: { affinity: 5 } } },
            { text: "(서연이 볼에 묻은 빵가루를 떼어준다.)", next: "day2_seoyeon_lunch_touch", stats: { Seoyeon: { affinity: 10 } } }
        ]
    },
    "day2_seoyeon_lunch_praise": {
        name: "서연",
        text: "\"정말? 입맛에 맞을지 걱정했는데 다행이다. 자, 사양 말고 많이 먹어!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        setFlag: "day2_ate_lunch_seoyeon",
        next: "day2_seoyeon_lunch_end"
    },
    "day2_seoyeon_lunch_worry": {
        name: "서연",
        text: "\"괜찮아. 네가 맛있게 먹어주는 모습 보니까 피곤함이 싹 가시는 것 같아. 정말로.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        setFlag: "day2_ate_lunch_seoyeon",
        next: "day2_seoyeon_lunch_end"
    },
    "day2_seoyeon_lunch_touch": {
        name: "서연",
        text: "\"아... 고, 고마워. 내가 너무 급하게 먹었나 보네... (서연이의 얼굴이 살짝 붉어진다)\"",
        character: "assets/images/characters/seyoun_shy.png",
        setFlag: "day2_ate_lunch_seoyeon",
        next: "day2_seoyeon_lunch_end"
    },
    "day2_seoyeon_lunch_end": {
        name: "나",
        text: "(서연이와 즐거운 점심시간을 보내고 교실로 돌아왔다. 그녀가 직접 만든 샌드위치의 여운이 입안에 기분 좋게 남아있다.)",
        next: "day2_afternoon_class"
    },
    "day2_lunch_yuna": {
        name: "나",
        text: "(도서관 별관 뒤뜰. 울창한 나무 그림자 아래, 유나가 마치 풍경의 일부처럼 서 있다.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_talk"
    },
    "day2_yuna_talk": {
        name: "유나",
        text: "\"...왔구나. 쪽지 보고 진짜 올 줄은 몰랐는데.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_talk_2"
    },
    "day2_yuna_talk_2": {
        name: "유나",
        text: "(유나가 무표정한 얼굴로 나를 빤히 바라본다.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_free_talk"
    },
    "day2_yuna_free_talk": {
        type: "free_talk",
        name: "유나",
        text: "\"...나한테 궁금한 거라도 있어? 아니면 이 학교에 대해 더 알고 싶은 거야?\"",
        context: "조용한 도서관 별관 뒤뜰, 신비로운 분위기의 유나와 단둘이 대화를 나누는 상황. 대화가 끝나면 유나가 학교의 비밀에 대해 이야기하며 주인공에게만 보여주고 싶은 것이 있다고 제안하는 상황으로 이어집니다. 대화 마무리 시점에 비밀스러운 분위기를 조성하며 주인공의 호기심을 자극해 주세요.",
        personality: "신비롭고 차가우며 비밀이 많은 소녀. 주인공에게 묘한 흥미를 느끼고 있음.",
        character: "assets/images/characters/yuna_nomal.png",
        affinityChar: "Yuna",
        affinityBranches: [
            { minAffinity: 20, next: "day2_yuna_talk_branch_high" },
            { minAffinity: 0, next: "day2_yuna_talk_branch" },
            { minAffinity: -100, next: "day2_yuna_talk_branch_low" }
        ],
        next: "day2_yuna_talk_branch"
    },
    "day2_yuna_talk_branch_high": {
        name: "나",
        text: "(유나가 평소보다 조금은 부드러워진 표정으로 나를 바라본다.)",
        branches: [
            { next: "day2_yuna_talk_2_met_high", condition: "metYuna" },
            { next: "day2_yuna_talk_2_new_high" }
        ]
    },
    "day2_yuna_talk_branch_low": {
        name: "나",
        text: "(유나가 차갑고 실망스러운 눈빛으로 나를 바라본다.)",
        branches: [
            { next: "day2_yuna_talk_2_met_low", condition: "metYuna" },
            { next: "day2_yuna_talk_2_new_low" }
        ]
    },
    "day2_yuna_talk_2_met_high": {
        name: "유나",
        text: "(유나가 나를 보며 희미하게 미소 짓는다.) \"{name}... 너랑 얘기하니까 마음이 편안해져. 어제 내가 했던 말... 기억해? 이 학교의 비밀 말이야. 사실 너한테만 보여주고 싶은 게 있어.\"",
        character: "assets/images/characters/yuna_smile.png",
        choices: [
            { text: "그게 뭔데? 나도 궁금해.", next: "day2_yuna_secret", stats: { Yuna: { affinity: 5 } } },
            { text: "비밀 같은 건 관심 없어. 그냥 너랑 이야기하고 싶어서 온 거야.", next: "day2_yuna_normal", stats: { Yuna: { affinity: 4 } } }
        ]
    },
    "day2_yuna_talk_2_met_low": {
        name: "유나",
        text: "(유나의 눈빛이 더욱 차가워진다.) \"{name}. 넌 정말 무례하고 어리석구나. 그런 태도로는 진실을 감당할 수 없을 거야. ...하지만 어제 약속했으니 보여주긴 하겠어. 따라와.\"",
        character: "assets/images/characters/yuna_nomal.png",
        choices: [
            { text: "그게 뭔데? 나도 궁금해.", next: "day2_yuna_secret", stats: { Yuna: { affinity: 5 } } },
            { text: "비밀 같은 건 관심 없어. 그냥 너랑 이야기하고 싶어서 온 거야.", next: "day2_yuna_normal", stats: { Yuna: { affinity: 4 } } }
        ]
    },
    "day2_yuna_talk_2_new_high": {
        name: "유나",
        text: "(유나가 나를 보며 희미하게 미소 짓는다.) \"{name}... 너랑 얘기하니까 기분이 묘해. 사실 이 학교에는 아주 깊은 비밀이 있어. 너한테만 보여주고 싶은 게 있는데.\"",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "metYuna",
        choices: [
            { text: "네가 쪽지를 남긴 유나야? 비밀이 뭔데?", next: "day2_yuna_new_name_ask", stats: { Yuna: { affinity: 5 } } },
            { text: "그냥 쪽지 보고 궁금해서 와봤어. 넌 누구야?", next: "day2_yuna_new_name_ask", stats: { Yuna: { affinity: 3 } } }
        ]
    },
    "day2_yuna_talk_2_new_low": {
        name: "유나",
        text: "(유나의 눈빛이 더욱 차가워진다.) \"{name}. 넌 정말 무례하고 어리석구나. 그런 태도로는 진실을 감당할 수 없을 거야. ...하지만 네가 여기까지 왔으니 보여주긴 하겠어. 따라와.\"",
        character: "assets/images/characters/yuna_nomal.png",
        setFlag: "metYuna",
        choices: [
            { text: "네가 쪽지를 남긴 유나야? 비밀이 뭔데?", next: "day2_yuna_new_name_ask", stats: { Yuna: { affinity: 5 } } },
            { text: "그냥 쪽지 보고 궁금해서 와봤어. 넌 누구야?", next: "day2_yuna_new_name_ask", stats: { Yuna: { affinity: 3 } } }
        ]
    },
    "day2_yuna_talk_branch": {
        name: "나",
        text: "(유나가 나를 바라보며 입을 열기 시작한다.)",
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
            { text: "그게 뭔데? 나도 궁금해.", next: "day2_yuna_secret", stats: { Yuna: { affinity: 5 } } },
            { text: "비밀 같은 건 관심 없어. 그냥 너랑 이야기하고 싶어서 온 거야.", next: "day2_yuna_normal", stats: { Yuna: { affinity: 4 } } }
        ]
    },
    "day2_yuna_talk_2_new": {
        name: "유나",
        text: "\"너... 내가 누군지 궁금해서 온 거지? 사실 이 학교에는 아주 깊은 비밀이 있어. 너한테만 보여주고 싶은 게 있는데.\"",
        character: "assets/images/characters/yuna_nomal.png",
        setFlag: "metYuna",
        choices: [
            { text: "네가 쪽지를 남긴 유나야? 비밀이 뭔데?", next: "day2_yuna_new_name_ask", stats: { Yuna: { affinity: 5 } } },
            { text: "그냥 쪽지 보고 궁금해서 와봤어. 넌 누구야?", next: "day2_yuna_new_name_ask", stats: { Yuna: { affinity: 3 } } }
        ]
    },
    "day2_yuna_new_name_ask": {
        name: "유나",
        text: "\"...그러고 보니, 네 이름은 뭐야? 쪽지엔 내 이름만 적어두고 네 이름은 차마 못 적었거든.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_new_name_share"
    },
    "day2_yuna_new_name_share": {
        name: "나",
        text: "\"내 이름은 {name}이야.\"",
        setFlag: "knowsName_Yuna",
        next: "day2_yuna_secret"
    },
    "day2_yuna_secret": {
        name: "유나",
        text: "(유나가 내 손을 잡고 낡은 창고 쪽으로 이끈다. 손끝에서 전해지는 차가운 감촉에 몸이 떨렸다.)",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "visitedWarehouseAtLunch",
        branches: [
            { next: "day2_yuna_secret_2", condition: "visitedWarehouseAtLunch" }, // 이미 방문한 적이 있다면 (로직상 세분화 가능)
            { next: "day2_yuna_secret_2" }
        ]
    },
    "day2_yuna_secret_2": {
        name: "유나",
        text: "\"이 안에는... 학교가 오랫동안 숨겨온 기록들이 있어. 네가 이걸 보면... 모든 게 달라질 거야.\"",
        character: "assets/images/characters/yuna_smile.png",
        choices: [
            { text: "그 기록, 나도 같이 봐도 될까?", next: "day2_yuna_secret_read", stats: { Yuna: { affinity: 15 } } },
            { text: "위험한 거 아냐? 그냥 내버려 두는 게 좋겠어.", next: "day2_yuna_secret_stop", stats: { Yuna: { affinity: -20 } } },
            { text: "유나야, 넌 왜 이런 걸 조사하는 거야?", next: "day2_yuna_secret_why", stats: { Yuna: { affinity: 3 } } }
        ]
    },
    "day2_yuna_secret_read": {
        name: "유나",
        text: "\"후훗, 역시 넌 다른 애들이랑 달라. 좋아, 하지만 각오해야 할 거야. 진실은 때로 독이 되기도 하니까.\"",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_stop": {
        name: "유나",
        text: "\"...겁쟁이구나. 뭐, 이해해. 평범한 아이라면 그게 당연한 반응이니까. 오늘은 이만 가봐.\"",
        character: "assets/images/characters/yuna_nomal.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_why": {
        name: "유나",
        text: "\"글쎄... 잃어버린 기억을 찾기 위해서라고 해둘까? 아니면 이 지루한 학교생활에 자극이 필요해서일지도.\"",
        character: "assets/images/characters/yuna_nomal.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_normal": {
        name: "유나",
        text: "\"...그래? 넌 참 이상한 애야. 다른 애들은 다들 무서워하는데. 좋아, 그럼 오늘은 그냥 이렇게 같이 있자.\"",
        character: "assets/images/characters/yuna_nomal.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_lunch_end": {
        name: "나",
        text: "(유나와 헤어져 교실로 돌아왔다. 그녀가 했던 기묘한 말들이 머릿속을 맴돌아 오후 수업에 집중하기가 힘들었다.)",
        next: "day2_afternoon_class"
    },
    "day2_lunch_dain": {
        name: "나",
        text: "(체육관 문을 열자, 땀방울을 휘날리며 연습하던 한 여학생이 나를 발견하고 달려온다.)",
        character: "assets/images/characters/dain_laugh.png",
        branches: [
            { next: "day2_dain_lunch_talk", condition: "metDain" },
            { next: "day2_lunch_dain_new" }
        ]
    },
    "day2_lunch_dain_new": {
        name: "???",
        text: "\"오! 처음 보는 얼굴인데? 너 새로 전학 온 애 맞지? 나 배구부 다인이야!\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "metDain",
        next: "day2_lunch_dain_new_name_ask"
    },
    "day2_lunch_dain_new_name_ask": {
        name: "다인",
        text: "\"그러고 보니 이름이 뭐야? 나만 성급하게 물어본 것 같네!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_lunch_dain_new_name_share"
    },
    "day2_dain_lunch_talk_new": {
        name: "다인",
        text: "\"오! {name}? 멋진 이름이네! 좋아, 만난 기념으로 오늘 점심은 내가 쏜다! 매점으로 가자!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_dain_store"
    },
    "day2_lunch_dain_new_name_share": {
        name: "나",
        text: "\"내 이름은 {name}이야.\"",
        setFlag: "knowsName_Dain",
        next: "day2_dain_lunch_talk_new"
    },
    "day2_dain_lunch_talk": {
        name: "다인",
        text: "\"오! 진짜 왔네? 좋아, 오늘 점심은 내가 쏜다! 매점으로 가자!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_dain_store"
    },
    "day2_dain_store": {
        name: "나",
        text: "(다인이와 함께 매점으로 향했다. 쉬는 시간이라 그런지 매점 앞은 아이들로 북적거린다.)",
        background: "assets/images/background/store.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_dain_free_talk"
    },
    "day2_dain_free_talk": {
        type: "free_talk",
        name: "다인",
        text: "\"와, 사람 진짜 많다! 그치? 기다리는 동안 나랑 수다나 떨자. 나한테 궁금한 거 없어?\"",
        context: "북적이는 학교 매점 앞, 다인과 함께 간식을 사기 위해 줄을 서서 대화를 나누는 상황. 대화가 끝나면 매점에서 간식을 고르는 상황으로 이어집니다. 대화 마무리 시점에 이제 우리 차례가 다 되어 간다거나, 무엇을 먹을지 결정하자는 등의 이야기를 하며 자연스럽게 다음 상황으로 유도해 주세요.",
        personality: "털털하고 시원시원한 성격의 배구부 에이스. 주인공과 함께 있는 시간을 즐거워함.",
        character: "assets/images/characters/dain_nomal.png",
        affinityChar: "Dain",
        affinityBranches: [
            { minAffinity: 25, next: "day2_dain_store_choices_high" },
            { minAffinity: 0, next: "day2_dain_store_choices" },
            { minAffinity: -100, next: "day2_dain_store_choices_low" }
        ],
        next: "day2_dain_store_choices"
    },
    "day2_dain_store_choices_high": {
        name: "다인",
        text: "\"와, {name?}! 너랑 얘기하니까 줄 서는 것도 하나도 안 지루하다! 자, 이제 우리 차례야. 뭐 먹을래? 내가 쏠게!\"",
        character: "assets/images/characters/dain_laugh.png",
        choices: [
            { text: "내가 다인이 몫까지 살게. 뭐 먹을래?", next: "day2_dain_store_buy", stats: { Dain: { affinity: 5 } } },
            { text: "사람 진짜 많다... 우리 그냥 옥상 갈까?", next: "day2_dain_store_rooftop", stats: { Dain: { affinity: 3 } } },
            { text: "다인아, 저기 마지막 피자빵이다! 내가 먼저 낚아채올게!", next: "day2_dain_store_race", stats: { Dain: { affinity: 8 } } }
        ]
    },
    "day2_dain_store_choices_low": {
        name: "다인",
        text: "\"...{name?}. 너 아까부터 좀 까칠하다? 매점 줄 서는 것도 힘든데 기분까지 잡치게... 하아, 됐다. 뭐 먹을지나 골라.\"",
        character: "assets/images/characters/dain_angry.png",
        choices: [
            { text: "내가 다인이 몫까지 살게. 뭐 먹을래?", next: "day2_dain_store_buy", stats: { Dain: { affinity: 5 } } },
            { text: "사람 진짜 많다... 우리 그냥 옥상 갈까?", next: "day2_dain_store_rooftop", stats: { Dain: { affinity: 3 } } },
            { text: "다인아, 저기 마지막 피자빵이다! 내가 먼저 낚아채올게!", next: "day2_dain_store_race", stats: { Dain: { affinity: 8 } } }
        ]
    },
    "day2_dain_store_choices": {
        name: "다인",
        text: "\"자, 우리 차례다. 뭐 먹을래?\"",
        choices: [
            { text: "내가 다인이 몫까지 살게. 뭐 먹을래?", next: "day2_dain_store_buy", stats: { Dain: { affinity: 5 } } },
            { text: "사람 진짜 많다... 우리 그냥 옥상 갈까?", next: "day2_dain_store_rooftop", stats: { Dain: { affinity: 3 } } },
            { text: "다인아, 저기 마지막 피자빵이다! 내가 먼저 낚아채올게!", next: "day2_dain_store_race", stats: { Dain: { affinity: 8 } } }
        ]
    },
    "day2_dain_store_buy": {
        name: "다인",
        text: "\"에이~ 내가 쏜다니까! 전학생이 무슨 돈이 있다고 그래? 오늘은 내가 대접할 테니까 그냥 맛있게 먹기나 해!\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_rooftop": {
        name: "다인",
        text: "\"옥상? 오, 그것도 좋지! 시원한 바람 맞으면서 먹으면 더 맛있겠다. 좋아, 얼른 빵만 사서 올라가자!\"",
        character: "assets/images/characters/dain_nomal.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_race": {
        name: "다인",
        text: "\"오호! 역시 내 파트너답다! 좋아, 누가 먼저 낚나 내기하자! 지는 사람이 음료수 쏘기!\"",
        character: "assets/images/characters/dain_nomal.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_lunch_end": {
        name: "나",
        text: "(다인이와 시끌벅적하게 점심을 먹고 교실로 돌아왔다. 그녀의 밝은 에너지 덕분에 오후 수업도 힘낼 수 있을 것 같다.)",
        next: "day2_afternoon_class"
    },
    "day2_lunch_nurse": {
        name: "나",
        text: "(긴장 탓인지 머리가 지끈거린다. 나도 모르게 조용한 보건실로 발걸음을 옮겼다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_talk"
    },
    "day2_lunch_nurse_talk": {
        name: "보건선생님",
        text: "\"어머, 안녕? 점심시간에 보건실이라니, 어디가 아픈 거니?\"",
        character: "assets/images/characters/nurse.png",
        branches: [
            { next: "day2_lunch_nurse_met", condition: "metNurse" },
            { next: "day2_lunch_nurse_new" }
        ]
    },
    "day2_lunch_nurse_met": {
        name: "보건선생님",
        text: "\"어머, 우리 {name?}이네? 어디가 아픈 걸까, 아니면 내 얼굴 보고 싶어서 설레는 걸까?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        stats: { Nurse: { affinity: 6 } },
        next: "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_new": {
        name: "보건선생님",
        text: "\"어머, 처음 보는 얼굴이네? 새로 전학 온 학생이니? 나는 보건선생님이야.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        setFlag: "metNurse",
        next: "day2_lunch_nurse_new_name_ask"
    },
    "day2_lunch_nurse_new_name_ask": {
        name: "보건선생님",
        text: "\"그러고 보니 이름이 뭐야? 선생님한테만 살짝 알려줄래?\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_new_name_share"
    },
    "day2_lunch_nurse_new_name_share": {
        name: "나",
        text: "\"제 이름은 {name}이에요.\"",
        setFlag: "knowsName_Nurse",
        next: "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_3": {
        name: "보건선생님",
        text: "(선생님이 부드러운 미소와 함께 나를 침대로 안내한다. 코끝을 간지럽히는 은은한 약초 향기에 긴장이 풀린다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_4"
    },
    "day2_lunch_nurse_4": {
        name: "보건선생님",
        text: "\"자, 여기 편하게 누우렴. 선생님이 어디가 불편한지 봐줄게.\"",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "머리가 좀 아파요.", next: "day2_lunch_nurse_head", stats: { Nurse: { affinity: 3 } } },
            { text: "그냥 좀 쉬고 싶어요.", next: "day2_lunch_nurse_rest", stats: { Nurse: { affinity: 3 } } },
            { text: "선생님, 이런 식으로 학생들을 유혹하는 게 취미예요?", next: "day2_lunch_nurse_trap", stats: { Nurse: { affinity: -50 } } }
        ]
    },
    "day2_lunch_nurse_trap": {
        name: "보건선생님",
        text: "(선생님의 입가에서 미소가 순식간에 증발한다. 보건실 안의 공기가 얼어붙듯 무겁게 가라앉는다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_angry.png",
        next: "day2_lunch_nurse_trap_2"
    },
    "day2_lunch_nurse_trap_2": {
        name: "보건선생님",
        text: "\"어머... {name?}, 내가 너무 받아줬나 보네. 어른에게 그런 무례한 말은 농담으로 안 들려. 오늘은 그만 나가줄래? 기분이 아주 별로네.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_angry.png",
        next: "day2_afternoon_class"
    },
    "day2_lunch_nurse_head": {
        name: "보건선생님",
        text: "\"긴장성 두통인 것 같네. 이거 먹고 한숨 푹 자고 나면 괜찮아질 거야.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "선생님이 직접 먹여주시면 안 돼요?", next: "day2_lunch_nurse_head_tease", stats: { Nurse: { affinity: 5 } } },
            { text: "감사합니다. (약을 받아 먹는다)", next: "day2_lunch_nurse_sleep", stats: { Nurse: { affinity: 3 } } }
        ]
    },
    "day2_lunch_nurse_head_tease": {
        name: "보건선생님",
        text: "\"어머... {name?}, 넌 정말 못 말리겠구나? 좋아, 아 해봐. 착한 학생한테는 상을 줘야지?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_sleep"
    },
    "day2_lunch_nurse_rest": {
        name: "보건선생님",
        text: "\"후훗, 가끔은 그런 날도 있지. 여기 커튼 치고 편안하게 쉬렴. 그나저나... {name?}한테선 기운이 넘치네. 보고만 있어도 내 몸이 다 뜨거워지는 것 같아.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "다음", next: "day2_lunch_nurse_rest_yuna", condition: "metYuna" },
            { text: "다음", next: "day2_lunch_nurse_sleep", excludeCondition: "metYuna" }
        ]
    },
    "day2_lunch_nurse_rest_yuna": {
        name: "나",
        text: "\"(기운이 넘친다니...? 유나가 했던 말들이 떠오른다. 이 학교, 정말 뭔가가 있는 걸까?)\"",
        background: "assets/images/background/nurse_room.jpg",
        next: "day2_lunch_nurse_sleep"
    },
    "day2_lunch_nurse_sleep": {
        name: "나",
        text: "(선생님이 덮어준 이불의 온기에 나도 모르게 의식이 흐려진다. 전학 이틀간의 피로가 한꺼번에 밀려오는 기분이다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: null,
        next: "day2_lunch_nurse_sleep_end"
    },
    "day2_lunch_nurse_sleep_end": {
        name: "나",
        text: "(...어느새 주변이 조용해졌다. 서서히 의식이 돌아오며 눈을 뜬다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: null,
        next: "day2_lunch_nurse_wake_1"
    },
    "day2_lunch_nurse_wake_1": {
        name: "나",
        text: "(창밖은 어느새 이글거리는 주황빛 노을로 가득하다. 점심시간에 잠들었는데 벌써 방과 후라니... 얼마나 깊게 잠들었던 걸까.)",
        background: "assets/images/background/nurse_room.jpg",
        sunset: true,
        next: "day2_lunch_nurse_wake_2"
    },
    "day2_lunch_nurse_wake_2": {
        name: "보건선생님",
        text: "\"어머, 이제 일어났니? 정말 달게 자더구나. 이제 곧 하교 시간이야. 몸은 좀 어때?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "nurse_wake_free_talk"
    },
    "nurse_wake_free_talk": {
        type: "free_talk",
        name: "보건선생님",
        text: "\"후훗, 아직 잠이 덜 깼네. 집에 가기 전에 나랑 좀 더 이야기할래?\"",
        context: "노을이 지는 보건실, 방금 잠에서 깨어난 주인공과 보건선생님이 단둘이 남겨진 상황. 대화가 끝나면 보건선생님이 주인공에게 연락처를 알려주거나 밤에 연락하라고 유혹하는 상황으로 이어집니다. 대화 마무리 시점에 하교 시간이 다 되었음을 알리며 아쉬운 분위기를 연출하거나, 개인적인 연락을 유도하는 발언을 해주세요.",
        personality: "나른하고 섹시하면서도 다정한 보건선생님. 주인공에게 묘한 매력을 느끼며 대담하게 유혹하는 대범한 성격.",
        extra_guideline: "성숙한 어른으로서 주인공을 대놓고 유혹하며 아슬아슬한 분위기를 조성하세요. 사용자의 성인용 농담이나 도발적인 발언(섹드립 등)에도 당황하지 않고 여유롭게 받아치며, 오히려 주인공을 더 당황하게 만들 정도로 대담하고 도발적인 반응을 보이세요. 성숙한 매력을 한껏 발산하며 로맨틱한 긴장감을 최고치로 끌어올리세요.",
        character: "assets/images/characters/nurse.png",
        affinityChar: "Nurse",
        affinityBranches: [
            { minAffinity: 40, next: "nurse_contact_exchange_high" },
            { minAffinity: 0, next: "nurse_contact_exchange" },
            { minAffinity: -100, next: "nurse_contact_exchange_low" }
        ],
        next: "nurse_contact_exchange"
    },
    "nurse_contact_exchange_high": {
        name: "나",
        text: "(보건선생님이 장난스러우면서도 유혹적인 미소로 나를 바라본다.)",
        branches: [
            { next: "nurse_contact_already_have_high", condition: "has_number_nurse" },
            { next: "nurse_contact_ask_high" }
        ]
    },
    "nurse_contact_exchange_low": {
        name: "나",
        text: "(보건선생님이 조금은 피곤한 기색으로 나를 바라본다.)",
        branches: [
            { next: "nurse_contact_already_have_low", condition: "has_number_nurse" },
            { next: "nurse_contact_ask_low" }
        ]
    },
    "nurse_contact_already_have_high": {
        name: "보건선생님",
        text: "(선생님이 몸을 살짝 기울이며 내 귓가에 속삭인다.) \"{name?}, 우리 이미 번호 교환했었지? 사실... 오늘 밤엔 네 목소리가 정말 듣고 싶을 것 같아. 꼭 연락해야 해?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        choices: [
            { text: "네, 그럴게요.", next: "day2_afternoon_nurse_skip" },
            {
                text: "번호 말고... 오늘 밤 선생님 집으로 가면 안 돼요?",
                next: "nurse_contact_home_fail",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 50, next: "nurse_contact_home_success" }
                ]
            }
        ]
    },
    "nurse_contact_already_have_low": {
        name: "보건선생님",
        text: "(선생님이 차가운 미소를 지으며 말한다.) \"{name?}, 우리 이미 번호 교환했었지? 하지만 그런 무례한 태도라면 연락 안 하는 게 나을지도 모르겠네. 이제 그만 가보렴.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        choices: [
            { text: "네, 그럴게요.", next: "day2_afternoon_nurse_skip" },
            {
                text: "번호 말고... 오늘 밤 선생님 집으로 가면 안 돼요?",
                next: "nurse_contact_home_fail",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 50, next: "nurse_contact_home_success" }
                ]
            }
        ]
    },
    "nurse_contact_ask_high": {
        name: "보건선생님",
        text: "(선생님이 내 손을 살며시 잡으며 속삭인다.) \"{name?}, 너랑 더 얘기하고 싶은데... 밤에 잠이 안 오면 나한테 연락할래? 번호 알려줄게.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        choices: [
            { text: "네, 알고 싶어요.", next: "nurse_contact_success", setFlags: ["has_number_nurse", "has_any_contact"] },
            {
                text: "번호 말고... 선생님 집으로 가면 안 돼요?",
                next: "nurse_contact_home_fail",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 50, next: "nurse_contact_home_success" }
                ]
            }
        ]
    },
    "nurse_contact_ask_low": {
        name: "보건선생님",
        text: "(선생님이 한숨을 내쉬며 말한다.) \"{name?}. 너 정말 손이 많이 가는 학생이구나. 비상시를 위해서 번호는 알려주겠지만, 장난칠 생각은 하지 마렴.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        choices: [
            { text: "네, 알고 싶어요.", next: "nurse_contact_success", setFlags: ["has_number_nurse", "has_any_contact"] },
            {
                text: "번호 말고... 선생님 집으로 가면 안 돼요?",
                next: "nurse_contact_home_fail",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 50, next: "nurse_contact_home_success" }
                ]
            }
        ]
    },
    "nurse_contact_exchange": {
        name: "나",
        text: "(보건선생님이 나를 바라보며 입을 연다.)",
        branches: [
            { next: "nurse_contact_already_have", condition: "has_number_nurse" },
            { next: "nurse_contact_ask" }
        ]
    },
    "nurse_contact_already_have": {
        name: "보건선생님",
        text: "(선생님이 몸을 살짝 기울이며 속삭인다.) \"{name?}, 우리 이미 번호 교환했었지? 밤에 심심하면 꼭 연락해야 해? 기다릴 테니까.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        choices: [
            { text: "네, 그럴게요.", next: "day2_afternoon_nurse_skip" },
            {
                text: "번호 말고... 오늘 밤 선생님 집으로 가면 안 돼요?",
                next: "nurse_contact_home_fail",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 50, next: "nurse_contact_home_success" }
                ]
            }
        ]
    },
    "nurse_contact_ask": {
        name: "보건선생님",
        text: "(선생님이 몸을 살짝 기울이며 속삭인다.) \"{name?}, 밤에 잠이 안 오면 나한테 연락할래? 번호 알려줄게.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        choices: [
            { text: "네, 알고 싶어요.", next: "nurse_contact_success", setFlags: ["has_number_nurse", "has_any_contact"] },
            {
                text: "번호 말고... 선생님 집으로 가면 안 돼요?",
                next: "nurse_contact_home_fail",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 50, next: "nurse_contact_home_success" }
                ]
            },
            { text: "아, 괜찮아요.", next: "nurse_contact_fail", stats: { Nurse: { affinity: -20 } } }
        ]
    },
    "nurse_contact_success": {
        name: "보건선생님",
        text: "(그녀가 요염하게 웃으며 번호를 저장한다.) \"후훗, 그럼 나중에 밤에 기다릴게? 답장 늦게 하면 삐질지도 몰라.\"",
        character: "assets/images/characters/nurse.png",
        stats: { Nurse: { affinity: 18 } },
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_success": {
        name: "보건선생님",
        text: "(선생님이 눈을 크게 뜨더니, 이내 요염한 미소를 지으며 내 귓가에 속삭인다.) \"어머... {name?}, 생각보다 훨씬 대담하네? 좋아, 오늘 밤 우리 집으로 올래? 주소 찍어줄게. 대신... 부모님께는 비밀이야?\"",
        character: "assets/images/characters/nurse.png",
        stats: { Nurse: { affinity: 15 } },
        setFlags: ["has_number_nurse", "has_any_contact", "invited_nurse_home"],
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_fail": {
        name: "보건선생님",
        text: "(선생님이 꺄르르 웃음을 터뜨린다.) \"어머나 {name?}! 넌 정말 귀엽다. 하지만 우리 집은 아직 좀 이른 것 같네? 일단 번호부터 교환하자.\"",
        character: "assets/images/characters/nurse.png",
        setFlags: ["has_number_nurse", "has_any_contact"],
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_fail": {
        name: "보건선생님",
        text: "(선생님이 조금 아쉬운 듯 입술을 삐죽인다.) \"쳇... 튕기는 거야? 알았어. 나중에 마음 바뀌면 말해줘.\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_afternoon_nurse_skip"
    }
});



