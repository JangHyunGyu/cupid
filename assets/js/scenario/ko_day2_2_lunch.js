if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

Object.assign(SCENARIO[2], {
    "day2_lunch_time": {
        name: "나",
        text: "(딩동댕동! 드디어 기다리던 점심시간이다. 교실 안은 활기로 가득 차고, 내 심장도 조금씩 빠르게 뛰기 시작한다.)",
        character: null,
        choices: [
            { text: "화사한 미소가 생각나는 서연이에게 간다.", next: "day2_lunch_seoyeon" },
            { text: "유나와의 약속, 도서관 별관 뒤뜰로 향한다.", next: "day2_lunch_yuna", condition: "met_yuna" },
            { text: "비밀스러운 쪽지를 남긴 유나를 확인하러 간다.", next: "day2_lunch_yuna", excludeCondition: "met_yuna" },
            { text: "활기가 넘치는 체육관, 다인을 확인하러 간다.", next: "day2_lunch_dain", condition: "met_dain" },
            { text: "시끌벅적한 체육관 쪽으로 발길을 옮긴다.", next: "day2_lunch_dain", excludeCondition: "met_dain" },
            { text: "조금 휴식이 필요한 것 같아 보건실로 간다.", next: "day2_lunch_nurse" },
            { text: "다정한 담임선생님이 계신 교무실로 향한다.", next: "day2_lunch_teacher" }
        ]
    },
    "day2_lunch_teacher": {
        name: "나",
        text: "(교무실 문을 열자, 도시락을 드시려던 담임선생님이 나를 보고 반갑게 웃으신다.)",
        background: "assets/images/background/teacher_room.png",
        character: "assets/images/characters/teacher_smile.png",
        next: "day2_lunch_teacher_2"
    },
    "day2_lunch_teacher_2": {
        name: "담임선생님",
        text: "\"어머, {name}! 점심은 맛있게 먹었니? 선생님은 이제 막 먹으려던 참이야.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day2_lunch_teacher_3"
    },
    "day2_lunch_teacher_3": {
        name: "담임선생님",
        text: "\"혹시 선생님이랑 같이 점심 먹고 싶어서 온 거니? 후훗, 농담이야.\"",
        character: "assets/images/characters/teacher_smile.png",
        choices: [
            { text: "네, 선생님이랑 같이 먹으려고 왔어요. 옆에 앉아도 될까요?", next: "day2_lunch_teacher_eat", stats: { Teacher: { affinity: 15 } } },
            { text: "선생님 도시락이 멀리서 봐도 너무 맛있어 보여서요.", next: "day2_lunch_teacher_food", stats: { Teacher: { affinity: 5 } } },
            { text: "아니요, 그냥 지나가다가 선생님 생각나서 들렀어요.", next: "day2_lunch_teacher_pass", stats: { Teacher: { affinity: 3 } } }
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
        text: "\"후훗, 우리 어머니가 솜씨가 좀 좋으시거든. 나중에 기회 되면 {name}한테도 맛 보여주고 싶네.\"",
        character: "assets/images/characters/teacher_smile.png",
        next: "day2_lunch_teacher_end"
    },
    "day2_lunch_teacher_pass": {
        name: "담임선생님",
        text: "\"그래? 그래도 이렇게 들러주니 고맙네. 남은 점심시간 즐겁게 보내렴!\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day2_lunch_teacher_end"
    },
    "day2_lunch_teacher_end": {
        name: "나",
        text: "(선생님과 짧지만 즐거운 대화를 나누고 교실로 돌아왔다. 선생님의 다정한 미소가 계속 생각난다.)",
        character: null,
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
        text: "\"{name}! 마침 오길 기다리고 있었어. 우리 여기 앉아. 오늘 샌드위치를 좀 넉넉하게 만들었거든.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        choices: [
            { text: "와, 정말 맛있어 보여! 서연이는 요리 천재구나.", next: "day2_seoyeon_lunch_praise", stats: { Seoyeon: { affinity: 8 } } },
            { text: "학생회 일 때문에 피곤하진 않아? 너무 무리하지 않았으면 좋겠어.", next: "day2_seoyeon_lunch_worry", stats: { Seoyeon: { affinity: 5 } } },
            { text: "입가에 빵가루 묻었어. 자, 가만히 있어 봐.", next: "day2_seoyeon_lunch_touch", stats: { Seoyeon: { affinity: 10 } } }
        ]
    },
    "day2_seoyeon_lunch_praise": {
        name: "서연",
        text: "\"정말? 입맛에 맞을지 걱정했는데 다행이다. 자, 사양 말고 많이 먹어!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        setFlag: "day2_ate_lunch_seoyeon",
        next: "day2_seoyeon_lunch_dain_event"
    },
    "day2_seoyeon_lunch_worry": {
        name: "서연",
        text: "\"괜찮아. 네가 맛있게 먹어주는 모습 보니까 피곤함이 싹 가시는 것 같아. 정말로.\"",
        character: "assets/images/characters/seyoun_normal.png",
        setFlag: "day2_ate_lunch_seoyeon",
        next: "day2_seoyeon_lunch_dain_event"
    },
    "day2_seoyeon_lunch_touch": {
        name: "서연",
        text: "\"아... 고, 고마워. 내가 너무 급하게 먹었나 보네... (서연이의 얼굴이 살짝 붉어진다)\"",
        character: "assets/images/characters/seyoun_shy.png",
        setFlag: "day2_ate_lunch_seoyeon",
        next: "day2_seoyeon_lunch_dain_event"
    },
    "day2_seoyeon_lunch_dain_event": {
        name: "나",
        text: "(그때, 학생회실 창문 너머로 누군가 지나가며 손을 흔든다.)",
        character: "assets/images/characters/seyoun_normal.png",
        branches: [
            { next: "day2_seoyeon_lunch_dain_known", condition: "met_dain" },
            { next: "day2_seoyeon_lunch_dain_unknown" }
        ]
    },
    "day2_seoyeon_lunch_dain_known": {
        name: "다인",
        text: "\"어? {name}이다! 야호~! 나중에 보자!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_seoyeon_lunch_dain_react"
    },
    "day2_seoyeon_lunch_dain_unknown": {
        name: "???",
        text: "\"어? 저 애 누구지? 학생회실에 왠 남학생이... 아무튼 안녕~!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_seoyeon_lunch_dain_react"
    },
    "day2_seoyeon_lunch_dain_react": {
        name: "나",
        text: "(문득 서연이를 돌아보니, 아까와는 다른 묘한 표정을 짓고 있다.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day2_seoyeon_lunch_dain_ask"
    },
    "day2_seoyeon_lunch_dain_ask": {
        name: "서연",
        text: "\"...저 애, 배구부 정다인이야. {name}, 혹시 친해?\"",
        character: "assets/images/characters/seyoun_normal.png",
        branches: [
            { next: "day2_seoyeon_dain_yes", condition: "met_dain" },
            { next: "day2_seoyeon_dain_no" }
        ]
    },
    "day2_seoyeon_dain_yes": {
        name: "나",
        text: "(서연이의 질문에 어떻게 대답할까 고민된다.)",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { text: "응, 어제 만났어. 밝고 재밌는 애더라.", next: "day2_seoyeon_dain_honest", stats: { Seoyeon: { affinity: -3 }, Dain: { affinity: 2 } } },
            { text: "그냥 아는 사이야. 서연이가 더 중요해.", next: "day2_seoyeon_dain_deny", stats: { Seoyeon: { affinity: 5 }, Dain: { affinity: -2 } } },
            { text: "왜? 혹시 질투하는 거야?", next: "day2_seoyeon_dain_tease", stats: { Seoyeon: { affinity: 3 } } }
        ]
    },
    "day2_seoyeon_dain_no": {
        name: "나",
        text: "\"(정다인... 기억해두자.) 아니, 처음 보는 애야. 왜?\"",
        character: "assets/images/characters/seyoun_normal.png",
        setFlag: "knows_name_dain",
        next: "day2_seoyeon_dain_no_react"
    },
    "day2_seoyeon_dain_no_react": {
        name: "서연",
        text: "\"아, 아니야. 그냥 물어본 거야. (서연이가 안도하는 듯 미소 짓는다) ...그럼, 우리 밥 계속 먹자!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_seoyeon_lunch_end"
    },
    "day2_seoyeon_dain_honest": {
        name: "서연",
        text: "\"...그렇구나. (서연이가 잠시 창밖을 바라보다가 미소를 짓는다) 좋은 친구가 많으면 좋지. 나도... 더 노력해야겠네.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day2_seoyeon_lunch_end"
    },
    "day2_seoyeon_dain_deny": {
        name: "서연",
        text: "\"(서연이의 표정이 살짝 밝아진다) ...그래? 후훗, 그런 말 들으니까 기분이 좋네. 고마워, {name}.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_seoyeon_lunch_end"
    },
    "day2_seoyeon_dain_tease": {
        name: "서연",
        text: "\"지, 질투?! 아니거든! 그냥... 궁금해서 물어본 거야! (서연이가 얼굴을 붉히며 고개를 돌린다)\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_seoyeon_lunch_end"
    },
    "day2_seoyeon_lunch_end": {
        name: "나",
        text: "(서연이와 즐거운 점심시간을 보내고 교실로 돌아왔다. 그녀가 직접 만든 샌드위치의 여운이 입안에 기분 좋게 남아있다.)",
        character: null,
        next: "day2_afternoon_class"
    },
    "day2_lunch_yuna": {
        name: "나",
        text: "(도서관 별관 뒤뜰. 울창한 나무 그림자 아래, 유나가 마치 풍경의 일부처럼 서 있다.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_normal.png",
        next: "day2_yuna_talk"
    },
    "day2_yuna_talk": {
        name: "유나",
        text: "\"...왔구나. 쪽지 보고 진짜 올 줄은 몰랐는데.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day2_yuna_talk_2"
    },
    "day2_yuna_talk_2": {
        name: "유나",
        text: "(유나가 무표정한 얼굴로 나를 빤히 바라본다.)",
        character: "assets/images/characters/yuna_normal.png",
        next: "day2_yuna_free_talk"
    },
    "day2_yuna_free_talk": {
        type: "free_talk",
        name: "유나",
        text: "\"...나한테 궁금한 거라도 있어? 아니면 이 학교에 대해 더 알고 싶은 거야?\"",
        context: "조용한 도서관 별관 뒤뜰, 신비로운 분위기의 유나와 단둘이 대화를 나누는 상황입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 유나가 학교의 비밀에 대해 이야기하며 주인공에게만 보여주고 싶은 것이 있다고 제안하는 상황으로 이어집니다. 대화의 마지막 턴에만 비밀스러운 분위기를 조성하며 주인공의 호기심을 자극해 주세요.",
        personality: "신비롭고 차가우며 비밀이 많은 소녀. 주인공에게 묘한 흥미를 느끼고 있음.",
        character: "assets/images/characters/yuna_normal.png",
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
        character: "assets/images/characters/yuna_smile.png",
        branches: [
            { next: "day2_yuna_talk_2_met_high", condition: "met_yuna" },
            { next: "day2_yuna_talk_2_new_high" }
        ]
    },
    "day2_yuna_talk_branch_low": {
        name: "나",
        text: "(유나가 차갑고 실망스러운 눈빛으로 나를 바라본다.)",
        character: "assets/images/characters/yuna_normal.png",
        branches: [
            { next: "day2_yuna_talk_2_met_low", condition: "met_yuna" },
            { next: "day2_yuna_talk_2_new_low" }
        ]
    },
    "day2_yuna_talk_2_met_high": {
        name: "나",
        text: "(유나는 나와 대화하며 마음이 편안해졌다고 말했다. 그리고 어제 말했던 학교의 비밀에 대해, 나에게만 보여주고 싶은 것이 있다며 제안해 왔다.)",
        character: "assets/images/characters/yuna_smile.png",
        choices: [
            { text: "그게 뭔데? 나도 궁금해.", next: "day2_yuna_secret_high", stats: { Yuna: { affinity: 5 } } },
            { text: "비밀 같은 건 관심 없어. 그냥 너랑 이야기하고 싶어서 온 거야.", next: "day2_yuna_normal_high", stats: { Yuna: { affinity: 4 } } }
        ]
    },
    "day2_yuna_talk_2_met_low": {
        name: "나",
        text: "(유나의 눈빛이 더욱 차가워졌다. 내 무례한 태도 때문에 진실을 감당할 수 없을 거라며 독설을 내뱉었지만, 어제 약속했으니 일단 따라오라고 했다.)",
        character: "assets/images/characters/yuna_normal.png",
        choices: [
            { text: "그게 뭔데? 나도 궁금해.", next: "day2_yuna_secret_low", stats: { Yuna: { affinity: 5 } } },
            { text: "비밀 같은 건 관심 없어. 그냥 너랑 이야기하고 싶어서 온 거야.", next: "day2_yuna_normal_low", stats: { Yuna: { affinity: 4 } } }
        ]
    },
    "day2_yuna_talk_2_new_high": {
        name: "나",
        text: "(유나는 나와 대화하며 기분이 묘하다고 말했다. 그리고 이 학교에는 아주 깊은 비밀이 있다며, 나에게만 보여주고 싶은 것이 있다고 제안했다.)",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "met_yuna",
        choices: [
            { text: "네가 쪽지를 남긴 유나야? 비밀이 뭔데?", next: "day2_yuna_new_name_ask_high", stats: { Yuna: { affinity: 5 } } },
            { text: "그냥 쪽지 보고 궁금해서 와봤어. 넌 누구야?", next: "day2_yuna_new_name_ask_high", stats: { Yuna: { affinity: 3 } } }
        ]
    },
    "day2_yuna_talk_2_new_low": {
        name: "나",
        text: "(유나의 눈빛이 더욱 차가워졌다. 내 무례한 태도 때문에 진실을 감당할 수 없을 거라며 독설을 내뱉었지만, 여기까지 왔으니 일단 따라오라고 했다.)",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "met_yuna",
        choices: [
            { text: "네가 쪽지를 남긴 유나야? 비밀이 뭔데?", next: "day2_yuna_new_name_ask_low", stats: { Yuna: { affinity: 5 } } },
            { text: "그냥 쪽지 보고 궁금해서 와봤어. 넌 누구야?", next: "day2_yuna_new_name_ask_low", stats: { Yuna: { affinity: 3 } } }
        ]
    },
    "day2_yuna_talk_branch": {
        name: "나",
        text: "(유나가 나를 바라보며 입을 열기 시작한다.)",
        character: "assets/images/characters/yuna_normal.png",
        branches: [
            { next: "day2_yuna_talk_2_met_normal", condition: "met_yuna" },
            { next: "day2_yuna_talk_2_new_normal" }
        ]
    },
    "day2_yuna_talk_2_met_normal": {
        name: "나",
        text: "(유나는 어제 말했던 학교의 비밀에 대해 언급하며, 나에게만 보여주고 싶은 것이 있다고 말했다.)",
        character: "assets/images/characters/yuna_normal.png",
        choices: [
            { text: "그게 뭔데? 나도 궁금해.", next: "day2_yuna_secret_normal", stats: { Yuna: { affinity: 5 } } },
            { text: "비밀 같은 건 관심 없어. 그냥 너랑 이야기하고 싶어서 온 거야.", next: "day2_yuna_normal_normal", stats: { Yuna: { affinity: 4 } } }
        ]
    },
    "day2_yuna_talk_2_new_normal": {
        name: "나",
        text: "(유나는 내가 그녀의 정체를 궁금해할 거라며, 이 학교의 깊은 비밀을 나에게만 보여주겠다고 제안했다.)",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "met_yuna",
        choices: [
            { text: "네가 쪽지를 남긴 유나야? 비밀이 뭔데?", next: "day2_yuna_new_name_ask_normal", stats: { Yuna: { affinity: 5 } } },
            { text: "그냥 쪽지 보고 궁금해서 와봤어. 넌 누구야?", next: "day2_yuna_new_name_ask_normal", stats: { Yuna: { affinity: 3 } } }
        ]
    },
    "day2_yuna_new_name_ask_high": {
        name: "유나",
        text: "(그녀가 조금 수줍은 듯 고개를 숙이며 묻는다.) \"...그러고 보니, 네 이름은 뭐야? 나도 모르게 비밀을 공유할 정도로 너한테 끌렸나 봐. 네 이름을 알고 싶어.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_yuna_new_name_share_high"
    },
    "day2_yuna_new_name_share_high": {
        name: "나",
        text: "\"내 이름은 {name}(이)야.\"",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "knows_name_yuna",
        next: "day2_yuna_secret_high"
    },
    "day2_yuna_new_name_ask_low": {
        name: "유나",
        text: "(그녀가 쌀쌀맞게 묻는다.) \"...이름이라도 알아야 나중에 원망을 듣든 말든 할 거 아냐. 네 이름, 뭐라고 불러야 해?\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day2_yuna_new_name_share_low"
    },
    "day2_yuna_new_name_share_low": {
        name: "나",
        text: "\"내 이름은 {name}(이)야.\"",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "knows_name_yuna",
        next: "day2_yuna_secret_low"
    },
    "day2_yuna_new_name_ask_normal": {
        name: "유나",
        text: "\"...그러고 보니, 네 이름은 뭐야? 쪽지엔 내 이름만 적어두고 네 이름은 차마 못 적었거든.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day2_yuna_new_name_share_normal"
    },
    "day2_yuna_new_name_share_normal": {
        name: "나",
        text: "\"내 이름은 {name}(이)야.\"",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "knows_name_yuna",
        next: "day2_yuna_secret_normal"
    },


    "day2_yuna_secret_high": {
        name: "유나",
        text: "(유나가 조심스럽게 내 손을 깍지 껴 잡는다. 온기가 전해지는 그녀의 손에서 진심이 느껴진다.)",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "visited_warehouse_at_lunch",
        next: "day2_yuna_secret_2_high"
    },
    "day2_yuna_secret_2_high": {
        name: "유나",
        text: "\"너라면... 이 무거운 진실을 함께 짊어져 줄 수 있을 것 같아. {name}, 나를 믿고 따라와 줄 수 있어? 이 뒤의 세상은 이전과 전혀 다를 거야.\"",
        character: "assets/images/characters/yuna_smile.png",
        choices: [
            { text: "응, 내가 함께할게. 같이 보자.", next: "day2_yuna_secret_read_high", stats: { Yuna: { affinity: 20 } } },
            { text: "미안, 이건 좀 무리인 것 같아.", next: "day2_yuna_secret_stop_high", stats: { Yuna: { affinity: -10 } } }
        ]
    },
    "day2_yuna_secret_low": {
        name: "유나",
        text: "(유나가 내 소매를 거칠게 잡아 끈다.)",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "visited_warehouse_at_lunch",
        next: "day2_yuna_secret_2_low"
    },
    "day2_yuna_secret_2_low": {
        name: "유나",
        text: "\"그냥 구경이나 해. 네가 뭘 알겠냐마는... 여기까지 왔으니까 어쩔 수 없지. 방해만 하지 마.\"",
        character: "assets/images/characters/yuna_normal.png",
        choices: [
            { text: "그게 뭔데? 나도 궁금해.", next: "day2_yuna_secret_read_low", stats: { Yuna: { affinity: 5 } } },
            { text: "그만둘래. 너무 위험해 보여.", next: "day2_yuna_secret_stop_low", stats: { Yuna: { affinity: -20 } } }
        ]
    },
    "day2_yuna_secret_normal": {
        name: "유나",
        text: "(유나가 내 손을 잡고 낡은 창고 쪽으로 이끈다. 손끝에서 전해지는 차가운 감촉에 몸이 떨렸다.)",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "visited_warehouse_at_lunch",
        next: "day2_yuna_secret_2_normal"
    },
    "day2_yuna_secret_2_normal": {
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
        type: "free_talk",
        affinityChar: "Yuna",
        affinityBranches: [
            { minAffinity: 25, next: "day2_yuna_secret_read_high" },
            { minAffinity: -999, next: "day2_yuna_secret_read_low" }
        ]
    },
    "day2_yuna_secret_stop": {
        type: "free_talk",
        affinityChar: "Yuna",
        affinityBranches: [
            { minAffinity: 25, next: "day2_yuna_secret_stop_high" },
            { minAffinity: -999, next: "day2_yuna_secret_stop_low" }
        ]
    },
    "day2_yuna_secret_why": {
        type: "free_talk",
        affinityChar: "Yuna",
        affinityBranches: [
            { minAffinity: 25, next: "day2_yuna_secret_why_high" },
            { minAffinity: -999, next: "day2_yuna_secret_why_low" }
        ]
    },
    "day2_yuna_secret_why_high": {
        name: "유나",
        text: "\"그게 궁금해? 사실... 나도 잘 모르겠어. 그냥 네가 전학 온 날부터, 왠지 너라면 내 이야기를 들어줄 것 같다는 예감이 들었거든. 우습지?\"",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_why_low": {
        name: "유나",
        text: "\"네가 알아서 뭐 하게? 호기심은 고양이를 죽인다는 말도 몰라? 그냥 입 닥치고 구경이나 하든가, 아니면 꺼져.\"",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_read_high": {
        name: "유나",
        text: "\"고마워, {name}. 너랑 함께라면 더 이상 두렵지 않아. 자, 그럼 같이 열어볼까?\"",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_read_low": {
        name: "유나",
        text: "\"진짜 볼 거야? 후회하지 마. 네가 울고불고 매달려도 난 모르는 일이니까.\"",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_stop_high": {
        name: "유나",
        text: "\"...그래? 많이 무서운가 보네. 이해해. 대신 나중에라도 생각이 바뀌면 다시 말해줘.\"",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_stop_low": {
        name: "유나",
        text: "\"그럴 줄 알았어. 입만 살았지 실제론 아무것도 못 하는 겁쟁이. 다시는 내 앞에 나타나지 마.\"",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_normal_high": {
        name: "유나",
        text: "\"나랑 이야기하고 싶어서 왔다고...? 후훗, 너 정말 사랑스러운 소리를 잘하는구나. 좋아, 그럼 오늘은 이대로 좀 더 같이 있어주겠니?\"",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_normal_low": {
        name: "유나",
        text: "\"나랑 떠들러 여기까지 왔다고? 한심하네. 내 시간 낭비하지 말고 저리 비켜.\"",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_normal_normal": {
        name: "유나",
        text: "\"...그래? 넌 참 이상한 애야. 다른 애들은 다들 무서워하는데. 좋아, 그럼 오늘은 그냥 이렇게 같이 있자.\"",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },

    "day2_yuna_lunch_end": {
        name: "나",
        text: "(유나와 헤어져 교실로 돌아왔다. 그녀가 했던 기묘한 말들이 머릿속을 맴돌아 오후 수업에 집중하기가 힘들었다.)",
        character: null,
        next: "day2_afternoon_class"
    },
    "day2_lunch_dain": {
        name: "나",
        text: "(체육관 문을 열자, 땀방울을 휘날리며 연습하던 한 여학생이 나를 발견하고 달려온다.)",
        character: "assets/images/characters/dain_laugh.png",
        branches: [
            { next: "day2_dain_lunch_talk", condition: "met_dain" },
            { next: "day2_lunch_dain_new" }
        ]
    },
    "day2_lunch_dain_new": {
        name: "???",
        text: "\"오! 처음 보는 얼굴인데? 너 새로 전학 온 애 맞지? 나 배구부 다인이야!\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "met_dain",
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
        text: "\"내 이름은 {name}(이)야.\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "knows_name_dain",
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
        character: "assets/images/characters/dain_normal.png",
        next: "day2_dain_store_seoyeon"
    },
    "day2_dain_store_seoyeon": {
        name: "나",
        text: "(그때, 매점 반대편에서 익숙한 얼굴이 보인다. 서연이가 음료수를 사고 있다.)",
        character: "assets/images/characters/dain_normal.png",
        next: "day2_dain_store_seoyeon_2"
    },
    "day2_dain_store_seoyeon_2": {
        name: "다인",
        text: "\"오? 저 애... 학생회장 아니야? 뭔가 범접 불가의 아우라가 느껴지는데. {name}, 혹시 아는 사이야?\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day2_dain_store_seoyeon_approach"
    },
    "day2_dain_store_seoyeon_approach": {
        name: "나",
        text: "(그때, 서연이가 우리를 발견하고 다가온다.)",
        character: "assets/images/characters/seyoun_normal.png",
        branches: [
            { next: "day2_dain_seoyeon_both_met", condition: "day2_ate_lunch_seoyeon" },
            { next: "day2_dain_seoyeon_both_new" }
        ]
    },
    "day2_dain_seoyeon_both_met": {
        name: "서연",
        text: "\"어? {name}! 여기서 보네. 아까 밥 맛있게 먹었어? (다인을 보며) ...?\"",
        characters: {
            left: "assets/images/characters/dain_normal.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        next: "day2_dain_seoyeon_tension"
    },
    "day2_dain_seoyeon_both_new": {
        name: "서연",
        text: "\"어머, 전학생? 여기서 보네. 나 서연이야. (다인을 보며) ...?\"",
        characters: {
            left: "assets/images/characters/dain_normal.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        next: "day2_dain_seoyeon_tension"
    },
    "day2_dain_seoyeon_tension": {
        name: "다인",
        text: "\"(다인이 살짝 경계하는 표정을 짓는다) 어, 학생회장님. 안녕하세요? 저희 지금 점심 마무리 중인데...\"",
        characters: {
            left: "assets/images/characters/dain_normal.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        next: "day2_dain_seoyeon_tension_2"
    },
    "day2_dain_seoyeon_tension_2": {
        name: "서연",
        text: "\"(서연이가 빙그레 웃는다) 후훗, 그래? 재미있게 먹어. {name}, 나중에 학생회실에도 놀러 와?\"",
        characters: {
            left: "assets/images/characters/dain_normal.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        next: "day2_dain_seoyeon_choice"
    },
    "day2_dain_seoyeon_choice": {
        name: "나",
        text: "(서연이와 다인이 나를 두고 묘하게 신경전을 벌이는 것 같다. 어떻게 대답하지?)",
        characters: {
            left: "assets/images/characters/dain_normal.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        choices: [
            { text: "응, 서연아! 나중에 꼭 갈게.", next: "day2_dain_seoyeon_favor_seoyeon", stats: { Seoyeon: { affinity: 5 }, Dain: { affinity: -5 } } },
            { text: "오늘은 다인이랑 약속이 있어서... 다음에!", next: "day2_dain_seoyeon_favor_dain", stats: { Dain: { affinity: 5 }, Seoyeon: { affinity: -3 } } },
            { text: "(애매하게 웃으며) 둘 다 만나면 좋겠는데.", next: "day2_dain_seoyeon_favor_both", stats: { Seoyeon: { affinity: -5 }, Dain: { affinity: -5 } } }
        ]
    },
    "day2_dain_seoyeon_favor_seoyeon": {
        name: "다인",
        text: "\"(다인이 살짝 생무룩한 표정으로) ....흥, 그래? 나랑 있으면서 벌써 다른 약속?\"",
        character: "assets/images/characters/dain_pout.png",
        next: "day2_dain_seoyeon_favor_seoyeon_2"
    },
    "day2_dain_seoyeon_favor_seoyeon_2": {
        name: "서연",
        text: "\"(서연이가 흐뭇하게 웃는다) 후훗, 고마워 {name}. 그럼 나중에 보자.\"",
        characters: {
            left: "assets/images/characters/dain_pout.png",
            right: "assets/images/characters/seyoun_laugh.png"
        },
        next: "day2_dain_seoyeon_end"
    },
    "day2_dain_seoyeon_favor_dain": {
        name: "다인",
        text: "\"(다인이 환하게 웃으며 내 팔을 감싼다) 들었지? 오늘은 {name}이 내 거야!\"",
        characters: {
            left: "assets/images/characters/dain_laugh.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        next: "day2_dain_seoyeon_favor_dain_2"
    },
    "day2_dain_seoyeon_favor_dain_2": {
        name: "서연",
        text: "\"(서연이가 살짝 굳은 표정으로) ...그래, 재미있게 놀아. 나중에 보자, {name}.\"",
        characters: {
            left: "assets/images/characters/dain_laugh.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        next: "day2_dain_seoyeon_end"
    },
    "day2_dain_seoyeon_favor_both": {
        name: "나",
        text: "(순간 두 사람의 표정이 동시에 굳는다.)",
        characters: {
            left: "assets/images/characters/dain_normal.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        next: "day2_dain_seoyeon_favor_both_2"
    },
    "day2_dain_seoyeon_favor_both_2": {
        name: "다인",
        text: "\"...둘 다? 하, 역시 인기 많은 타입이야?\"",
        characters: {
            left: "assets/images/characters/dain_pout.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        next: "day2_dain_seoyeon_favor_both_3"
    },
    "day2_dain_seoyeon_favor_both_3": {
        name: "서연",
        text: "\"(서연이가 차갑게 웃는다) 후훗... 여기저기 다 좋다고 하고 다니면 나중에 두 명 다 잃을 수도 있어.\"",
        characters: {
            left: "assets/images/characters/dain_pout.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        next: "day2_dain_seoyeon_favor_both_4"
    },
    "day2_dain_seoyeon_favor_both_4": {
        name: "다인",
        text: "\"(다인이 놀란 눈으로 서연을 본다) 헉, 학생회장님 의외로 직설적이시네? 근데 나도 동감.\"",
        characters: {
            left: "assets/images/characters/dain_normal.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        next: "day2_dain_seoyeon_favor_both_5"
    },
    "day2_dain_seoyeon_favor_both_5": {
        name: "나",
        text: "(두 사람이 서로를 의식하며 나를 바라본다. 분위기가 싸해졌다...)",
        characters: {
            left: "assets/images/characters/dain_normal.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        next: "day2_dain_seoyeon_end"
    },
    "day2_dain_seoyeon_end": {
        name: "나",
        text: "(서연이가 손을 흔들며 멀어졌다. 다인이 나를 똑바로 바라보더니 다시 웃었다.)",
        character: "assets/images/characters/dain_normal.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_free_talk"
    },
    "day2_dain_free_talk": {
        type: "free_talk",
        name: "다인",
        text: "\"와, 사람 진짜 많다! 그치? 기다리는 동안 나랑 수다나 떨자. 나한테 궁금한 거 없어?\"",
        context: "점심시간, 학생들로 북적이는 학교 매점 앞, 다인과 함께 간식을 사기 위해 줄을 서서 대화를 나누는 상황입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 매점에서 간식을 고르는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 우리 차례가 다 되어 간다거나, 무엇을 먹을지 결정하자는 등의 이야기를 하며 자연스럽게 다음 상황으로 유도해 주세요.",
        personality: "털털하고 시원시원한 성격의 배구부 에이스. 주인공과 함께 있는 시간을 즐거워함.",
        character: "assets/images/characters/dain_normal.png",
        affinityChar: "Dain",
        affinityBranches: [
            { minAffinity: 25, next: "day2_dain_store_choices_high" },
            { minAffinity: 0, next: "day2_dain_store_choices" },
            { minAffinity: -100, next: "day2_dain_store_choices_low" }
        ],
        next: "day2_dain_store_choices"
    },
    "day2_dain_store_choices_high": {
        name: "나",
        text: "(다인이와 수다를 떨다 보니 줄 서는 게 전혀 지루하지 않았다. 어느덧 우리 차례가 되었고, 다인이는 기분이 좋은지 자기가 쏘겠다며 메뉴를 골라보라고 했다.)",
        character: "assets/images/characters/dain_laugh.png",
        choices: [
            { text: "내가 다인이 몫까지 살게. 뭐 먹을래?", next: "day2_dain_store_buy_high", stats: { Dain: { affinity: 5 } } },
            { text: "사람 진짜 많다... 우리 그냥 옥상 갈까?", next: "day2_dain_store_rooftop_high", stats: { Dain: { affinity: 3 } } },
            { text: "다인아, 저기 마지막 피자빵이다! 내가 먼저 낚아채올게!", next: "day2_dain_store_race_high", stats: { Dain: { affinity: 8 } } }
        ]
    },
    "day2_dain_store_choices_low": {
        name: "나",
        text: "(다인이의 기분이 상한 것 같다. 줄 서느라 피곤한 그녀에게 내가 너무 까칠하게 굴었나 보다. 그녀는 한숨을 내쉬며 얼른 뭐 먹을지나 고르라고 말했다.)",
        character: "assets/images/characters/dain_sad.png",
        choices: [
            { text: "내가 다인이 몫까지 살게. 뭐 먹을래?", next: "day2_dain_store_buy_low", stats: { Dain: { affinity: 5 } } },
            { text: "사람 진짜 많다... 우리 그냥 옥상 갈까?", next: "day2_dain_store_rooftop_low", stats: { Dain: { affinity: 3 } } },
            { text: "다인아, 저기 마지막 피자빵이다! 내가 먼저 낚아채올게!", next: "day2_dain_store_race_low", stats: { Dain: { affinity: 8 } } }
        ]
    },
    "day2_dain_store_choices": {
        name: "나",
        text: "(다인이와 이야기를 나누는 사이 어느덧 우리 차례가 되었다. 다인이는 무엇을 먹을지 물어보았다.)",
        character: "assets/images/characters/dain_normal.png",
        choices: [
            { text: "내가 다인이 몫까지 살게. 뭐 먹을래?", next: "day2_dain_store_buy_normal", stats: { Dain: { affinity: 5 } } },
            { text: "사람 진짜 많다... 우리 그냥 옥상 갈까?", next: "day2_dain_store_rooftop_normal", stats: { Dain: { affinity: 3 } } },
            { text: "다인아, 저기 마지막 피자빵이다! 내가 먼저 낚아채올게!", next: "day2_dain_store_race_normal", stats: { Dain: { affinity: 8 } } }
        ]
    },
    "day2_dain_store_buy_high": {
        name: "다인",
        text: "\"에이~ {name}! 네가 왜 사? 내가 쏜다고 했잖아! 후훗, 그래도 마음은 정말 고마워. 그럼 오늘은 네가 사고, 내일은 내가 더 맛있는 거 사줄게! 약속!\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_buy_low": {
        name: "다인",
        text: "\"됐어. 내가 산다고 했으면 끝이지, 무슨 말이 그렇게 많아? 그냥 받아 먹기나 해.\"",
        character: "assets/images/characters/dain_angry.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_buy_normal": {
        name: "다인",
        text: "\"에이~ 내가 쏜다니까! 전학생이 무슨 돈이 있다고 그래? 오늘은 내가 대접할 테니까 그냥 맛있게 먹기나 해!\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },

    "day2_dain_store_rooftop_high": {
        name: "다인",
        text: "\"오! 옥상 데이트?! 좋아 좋아! 단둘이 오붓하게 먹으면 더 꿀맛이겠는걸? 자, 얼른 사서 올라가자!\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_rooftop_low": {
        name: "다인",
        text: "\"옥상까지 언제가... 귀찮게. 그냥 대충 여기서 먹고 말자.\"",
        character: "assets/images/characters/dain_angry.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_rooftop_normal": {
        name: "다인",
        text: "\"옥상? 오, 그것도 좋지! 시원한 바람 맞으면서 먹으면 더 맛있겠다. 좋아, 얼른 빵만 사서 올라가자!\"",
        character: "assets/images/characters/dain_normal.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },

    "day2_dain_store_race_high": {
        name: "다인",
        text: "\"오호! 승부욕 발동인가? 좋아! {name}, 나도 안 봐준다? 지는 사람이 오늘 점심 다 내기! 하나, 둘, 셋!\"",
        character: "assets/images/characters/dain_active.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_race_low": {
        name: "다인",
        text: "\"나 지금 그럴 기분 아니거든... 시끄러우니까 조용히 좀 해.\"",
        character: "assets/images/characters/dain_sad.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_race_normal": {
        name: "다인",
        text: "\"오호! 역시 내 파트너답다! 좋아, 누가 먼저 낚나 내기하자! 지는 사람이 음료수 쏘기!\"",
        character: "assets/images/characters/dain_normal.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },

    "day2_dain_lunch_end": {
        name: "나",
        text: "(다인이와 시끌벅적하게 점심을 먹고 교실로 돌아왔다. 그녀의 밝은 에너지 덕분에 오후 수업도 힘낼 수 있을 것 같다.)",
        character: null,
        next: "day2_afternoon_class"
    },
    "day2_lunch_nurse": {
        name: "나",
        text: "(긴장 탓인지 머리가 지끈거린다. 나도 모르게 조용한 보건실로 발걸음을 옮겼다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_lunch_nurse_talk"
    },
    "day2_lunch_nurse_talk": {
        name: "보건선생님",
        text: "\"어머, 안녕? 점심시간에 보건실이라니, 어디가 아픈 거니?\"",
        character: "assets/images/characters/nurse_normal.png",
        branches: [
            { next: "day2_lunch_nurse_met", condition: "met_nurse" },
            { next: "day2_lunch_nurse_new" }
        ]
    },
    "day2_lunch_nurse_met": {
        name: "보건선생님",
        text: "\"어머, 우리 {name}이네? 어디가 아픈 걸까, 아니면 내 얼굴 보고 싶어서 설레는 걸까?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        affinityChar: "Nurse",
        affinityBranches: [
            { minAffinity: 15, next: "day2_lunch_nurse_met_high" },
            { minAffinity: 0, next: "day2_lunch_nurse_met_normal" },
            { minAffinity: -100, next: "day2_lunch_nurse_met_low" }
        ],
        stats: { Nurse: { affinity: 6 } },
        next: "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_met_high": {
        name: "보건선생님",
        text: "(선생님이 내 얼굴을 보며 은근히 미소 짓는다.) \"후훗, {name}. 너 또 왔구나? 세상에... 선생님을 이렇게 자주 찾아오는 학생은 너밖에 없어.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 5 } },
        next: "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_met_normal": {
        name: "보건선생님",
        text: "\"어머, {name}. 점심시간에 보건실이라니... 어디 아픈 거야?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_met_low": {
        name: "보건선생님",
        text: "(선생님이 날 보더니 잘 모르겠다는 듯 고개를 기울인다.) \"어... {name}, 맞지? 어디 아픈 거야? 들어와.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_new": {
        name: "보건선생님",
        text: "\"어머, 처음 보는 얼굴이네? 새로 전학 온 학생이니? 나는 보건선생님이야.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        setFlag: "met_nurse",
        next: "day2_lunch_nurse_new_name_ask"
    },
    "day2_lunch_nurse_new_name_ask": {
        name: "보건선생님",
        text: "\"그러고 보니 이름이 뭐야? 선생님한테만 살짝 알려줄래?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_lunch_nurse_new_name_share"
    },
    "day2_lunch_nurse_new_name_share": {
        name: "나",
        text: "\"제 이름은 {name}(이)에요.\"",
        character: "assets/images/characters/nurse_normal.png",
        setFlag: "knows_name_nurse",
        next: "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_3": {
        name: "보건선생님",
        text: "(선생님이 부드러운 미소와 함께 나를 침대로 안내한다. 코끝을 간지럽히는 은은한 약초 향기에 긴장이 풀린다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_lunch_nurse_4"
    },
    "day2_lunch_nurse_4": {
        name: "보건선생님",
        text: "\"자, 여기 편하게 누우렴. 선생님이 어디가 불편한지 봐줄게.\"",
        character: "assets/images/characters/nurse_normal.png",
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
        text: "\"어머... {name}, 내가 너무 받아줬나 보네. 어른에게 그런 무례한 말은 농담으로 안 들려. 오늘은 그만 나가줄래? 기분이 아주 별로네.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_angry.png",
        next: "day2_afternoon_class"
    },
    "day2_lunch_nurse_head": {
        name: "보건선생님",
        text: "\"긴장성 두통인 것 같네. 이거 먹고 한숨 푹 자고 나면 괜찮아질 거야.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        choices: [
            { text: "선생님이 직접 먹여주시면 안 돼요?", next: "day2_lunch_nurse_head_tease", stats: { Nurse: { affinity: 5 } } },
            { text: "감사합니다. (약을 받아 먹는다)", next: "day2_lunch_nurse_sleep", stats: { Nurse: { affinity: 3 } } }
        ]
    },
    "day2_lunch_nurse_head_tease": {
        name: "보건선생님",
        text: "\"어머... {name}, 넌 정말 못 말리겠구나? 좋아, 아 해봐. 착한 학생한테는 상을 줘야지?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_lunch_nurse_sleep"
    },
    "day2_lunch_nurse_rest": {
        name: "보건선생님",
        text: "\"후훗, 가끔은 그런 날도 있지. 여기 커튼 치고 편안하게 쉬렴. 그나저나... {name}한테선 기운이 넘치네. 보고만 있어도 내 몸이 다 뜨거워지는 것 같아.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        choices: [
            { text: "다음", next: "day2_lunch_nurse_rest_yuna", condition: "met_yuna" },
            { text: "다음", next: "day2_lunch_nurse_sleep", excludeCondition: "met_yuna" }
        ]
    },
    "day2_lunch_nurse_rest_yuna": {
        name: "나",
        text: "\"(기운이 넘친다니...? 유나가 했던 말들이 떠오른다. 이 학교, 정말 뭔가가 있는 걸까?)\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_lunch_nurse_sleep"
    },
    "day2_lunch_nurse_sleep": {
        name: "나",
        text: "(선생님이 덮어준 이불의 온기에 나도 모르게 의식이 흐려진다. 전학 이틀간의 피로가 한꺼번에 밀려오는 기분이다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: null,
        next: "day2_lunch_nurse_sleep_teacher"
    },
    "day2_lunch_nurse_sleep_teacher": {
        name: "보건선생님",
        text: "(희미하게 선생님의 목소리가 들린다.) \"... 네, 담임 선생님. {name} 학생이 상태가 좋지 않아서 오후 수업은 좀 쉬게 했어요.\"",
        background: "assets/images/background/nurse_room.jpg",
        characters: {
            left: "assets/images/characters/nurse_normal.png",
            right: { src: "assets/images/characters/teacher_normal.png", opacity: 0.4 }
        },
        next: "day2_lunch_nurse_sleep_teacher_2"
    },
    "day2_lunch_nurse_sleep_teacher_2": {
        name: "보건선생님",
        text: "(목소리가 살짝 낮아진다.) \"...네? 직접 데리러 오시겠다고요? 후훗, 괜찮아요. 여기는 제 영역이니까요. 제가 책임지고 잘 돌봐드릴게요.\"",
        background: "assets/images/background/nurse_room.jpg",
        characters: {
            left: "assets/images/characters/nurse_normal.png",
            right: { src: "assets/images/characters/teacher_normal.png", opacity: 0.4 }
        },
        next: "day2_lunch_nurse_sleep_teacher_3"
    },
    "day2_lunch_nurse_sleep_teacher_3": {
        name: "보건선생님",
        text: "(전화를 끊는 소리가 들린다.) \"...후훗, 담임 선생님도 참. 자기 학생이라고 신경 쓰시는 건 좋은데... 보건실에서는 내가 법이야.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
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
        character: null,
        sunset: true,
        next: "day2_lunch_nurse_wake_2"
    },
    "day2_lunch_nurse_wake_2": {
        name: "보건선생님",
        text: "\"(선생님이 부드러운 미소를 띤다.) 어머, 이제 일어났니? 정말 달게 자더구나. 오후 수업은 담임 선생님한테 미리 말씀드려뒀으니까 걱정 마. 이제 곧 하교 시간이야. 몸은 좀 어때?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "nurse_wake_free_talk"
    },
    "nurse_wake_free_talk": {
        type: "free_talk",
        name: "보건선생님",
        text: "\"후훗, 아직 잠이 덜 깼네. 집에 가기 전에 나랑 좀 더 이야기할래?\"",
        context: "노을이 지는 보건실, 방금 잠에서 깨어난 주인공과 보건선생님이 단둘이 남겨진 상황입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 보건선생님이 주인공에게 연락처를 알려주거나 밤에 연락하라고 유혹하는 상황으로 이어집니다. 대화의 마지막 턴에만 하교 시간이 다 되었음을 알리며 아쉬운 분위기를 연출하거나, 개인적인 연락을 유도하는 발언을 해주세요.",
        personality: "나른하고 섹시하면서도 다정한 보건선생님. 주인공에게 묘한 매력을 느끼며 대담하게 유혹하는 대범한 성격.",
        extra_guideline: "성숙한 어른으로서 주인공을 대놓고 유혹하며 아슬아슬한 분위기를 조성하세요. 사용자의 성인용 농담이나 도발적인 발언(섹드립 등)에도 당황하지 않고 여유롭게 받아치며, 오히려 주인공을 더 당황하게 만들 정도로 대담하고 도발적인 반응을 보이세요. 성숙한 매력을 한껏 발산하며 로맨틱한 긴장감을 최고치로 끌어올리세요.",
        character: "assets/images/characters/nurse_normal.png",
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
        character: "assets/images/characters/nurse_normal.png",
        branches: [
            { next: "nurse_contact_already_have_high", condition: "has_number_nurse" },
            { next: "nurse_contact_ask_high" }
        ]
    },
    "nurse_contact_exchange_low": {
        name: "나",
        text: "(보건선생님이 조금은 피곤한 기색으로 나를 바라본다.)",
        character: "assets/images/characters/nurse_normal.png",
        branches: [
            { next: "nurse_contact_already_have_low", condition: "has_number_nurse" },
            { next: "nurse_contact_ask_low" }
        ]
    },
    "nurse_contact_already_have_high": {
        name: "나",
        text: "(선생님은 이미 번호를 교환했다는 사실을 상기시키며 내 귓가에 속삭였다. 오늘 밤 내 목소리가 듣고 싶을 것 같다며, 꼭 연락하라는 당부를 남겼다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        choices: [
            { text: "네, 그럴게요.", next: "day2_afternoon_nurse_skip" },
            {
                text: "번호 말고... 오늘 밤 선생님 집으로 가면 안 돼요?",
                next: "nurse_contact_home_fail_high",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 40, next: "nurse_contact_home_success_high" }
                ]
            }
        ]
    },
    "nurse_contact_already_have_low": {
        name: "나",
        text: "(선생님은 이미 번호를 교환했지만, 내 무례한 태도 때문에 연락하지 않는 게 나을지도 모르겠다며 차갑게 말했다. 그리고는 이제 그만 가보라며 나를 배웅했다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        choices: [
            { text: "네, 그럴게요.", next: "day2_afternoon_nurse_skip" },
            {
                text: "번호 말고... 오늘 밤 선생님 집으로 가면 안 돼요?",
                next: "nurse_contact_home_fail_low",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 40, next: "nurse_contact_home_success_low" }
                ]
            }
        ]
    },
    "nurse_contact_ask_high": {
        name: "나",
        text: "(선생님은 나와 더 이야기하고 싶다며 내 손을 살며시 잡았다. 밤에 잠이 안 오면 연락하라며 자신의 번호를 알려주겠다고 제안했다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        choices: [
            { text: "네, 알고 싶어요.", next: "nurse_contact_success_high", setFlags: ["has_number_nurse", "has_any_contact"] },
            {
                text: "번호 말고... 선생님 집으로 가면 안 돼요?",
                next: "nurse_contact_home_fail_high",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 40, next: "nurse_contact_home_success_high" }
                ]
            }
        ]
    },
    "nurse_contact_ask_low": {
        name: "나",
        text: "(선생님은 내가 정말 손이 많이 가는 학생이라며 한숨을 내쉬었다. 비상시를 위해 번호는 알려주겠지만, 장난칠 생각은 하지 말라며 엄포를 놓았다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        choices: [
            { text: "네, 알고 싶어요.", next: "nurse_contact_success_low", setFlags: ["has_number_nurse", "has_any_contact"] },
            {
                text: "번호 말고... 선생님 집으로 가면 안 돼요?",
                next: "nurse_contact_home_fail_low",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 40, next: "nurse_contact_home_success_low" }
                ]
            }
        ]
    },
    "nurse_contact_exchange": {
        name: "나",
        text: "(보건선생님이 나를 바라보며 입을 연다.)",
        character: "assets/images/characters/nurse_normal.png",
        branches: [
            { next: "nurse_contact_already_have", condition: "has_number_nurse" },
            { next: "nurse_contact_ask" }
        ]
    },
    "nurse_contact_already_have": {
        name: "나",
        text: "(선생님은 이미 번호를 교환했다는 사실을 상기시키며 몸을 살짝 기울여 속삭였다. 밤에 심심하면 꼭 연락하라며 기다리겠다고 말했다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        choices: [
            { text: "네, 그럴게요.", next: "day2_afternoon_nurse_skip" },
            {
                text: "번호 말고... 오늘 밤 선생님 집으로 가면 안 돼요?",
                next: "nurse_contact_home_fail",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 40, next: "nurse_contact_home_success" }
                ]
            }
        ]
    },
    "nurse_contact_ask": {
        name: "나",
        text: "(선생님은 몸을 살짝 기울여 속삭이며, 밤에 잠이 안 오면 연락하라며 자신의 번호를 알려주겠다고 제안했다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        choices: [
            { text: "네, 알고 싶어요.", next: "nurse_contact_success", setFlags: ["has_number_nurse", "has_any_contact"] },
            {
                text: "번호 말고... 선생님 집으로 가면 안 돼요?",
                next: "nurse_contact_home_fail",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 40, next: "nurse_contact_home_success" }
                ]
            },
            { text: "아, 괜찮아요.", next: "nurse_contact_fail", stats: { Nurse: { affinity: -20 } } }
        ]
    },
    "nurse_contact_success_high": {
        name: "보건선생님",
        text: "(그녀가 내 손등에 자신의 번호를 적어주며 윙크한다.) \"후훗, 자 이 번호... 잃어버리면 안 돼? 오늘 밤, 네가 어떤 메시지를 보낼지 벌써부터 기대되네.\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 15 } },
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_success_low": {
        name: "보건선생님",
        text: "\"...자 여기. 비상시에만 써. 새벽에 헛소리 보냈다간 바로 차단할 테니까 조심하고.\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 5 } },
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_success": {
        name: "보건선생님",
        text: "(그녀가 요염하게 웃으며 번호를 저장한다.) \"후훗, 그럼 나중에 밤에 기다릴게? 답장 늦게 하면 삐질지도 몰라.\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 18 } },
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_success_high": {
        name: "보건선생님",
        text: "(그녀가 내 목을 감싸 안으며 귓가에 뜨거운 숨결을 내뱉는다.) \"어머... {name}. 정말 참을성이 없구나? 좋아, 오늘 밤... 선생님 비밀의 방으로 널 초대할게. 단둘이서... 아주 깊은 이야기를 나눠보자.\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 20 } },
        setFlags: ["has_number_nurse", "has_any_contact", "invited_nurse_home"],
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_success_low": {
        name: "보건선생님",
        text: "\"...너 지금 제정신이니? 어디서 감히 선생님한테 그런 농담을... 오늘 당장 반성문 써와. 번호는 알려주겠지만, 집 근처엔 얼신도 하지 마.\"",
        character: "assets/images/characters/nurse_angry.png",
        stats: { Nurse: { affinity: -10 } },
        setFlags: ["has_number_nurse", "has_any_contact"],
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_success": {
        name: "보건선생님",
        text: "(선생님이 눈을 크게 뜨더니, 이내 요염한 미소를 지으며 내 귓가에 속삭인다.) \"어머... {name}, 생각보다 훨씬 대담하네? 좋아, 오늘 밤 우리 집으로 올래? 주소 찍어줄게. 대신... 부모님께는 비밀이야?\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 15 } },
        setFlags: ["has_number_nurse", "has_any_contact", "invited_nurse_home"],
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_fail_high": {
        name: "보건선생님",
        text: "(선생님이 내 뺨을 살짝 꼬집으며 웃는다.) \"후훗, 정말 적극적이네! 하지만 오늘은 선생님도 준비가 좀 필요해서... 일단 번호로 아쉬움을 달래보자?\"",
        character: "assets/images/characters/nurse_normal.png",
        setFlags: ["has_number_nurse", "has_any_contact"],
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_fail_low": {
        name: "보건선생님",
        text: "\"말조심해. 한 번만 더 그런 소리 하면 보건실 근처에도 못 오게 할 거야.\"",
        character: "assets/images/characters/nurse_angry.png",
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_fail": {
        name: "보건선생님",
        text: "(선생님이 꺄르르 웃음을 터뜨린다.) \"어머나 {name}! 넌 정말 귀엽다. 하지만 우리 집은 아직 좀 이른 것 같네? 일단 번호부터 교환하자.\"",
        character: "assets/images/characters/nurse_normal.png",
        setFlags: ["has_number_nurse", "has_any_contact"],
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_fail": {
        name: "보건선생님",
        text: "(선생님이 조금 아쉬운 듯 입술을 삐죽인다.) \"쳇... 튕기는 거야? 알았어. 나중에 마음 바뀌면 말해줘.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_afternoon_nurse_skip"
    }
});



