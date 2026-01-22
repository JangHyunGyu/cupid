if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

Object.assign(SCENARIO[2], {
    "day2_end": {
        name: "나",
        text: "(학교에서의 두 번째 밤. 창밖의 어둠이 어제보다 훨씬 깊고 비밀스럽게 느껴진다. 가습기 돌아가는 소리만이 정막을 채운다.)",
        background: "assets/images/background/room_my.png",
        bgm: "night2.mp3",
        character: null,
        night: true,
        next: "day2_end_2"
    },
    "day2_end_2": {
        name: "나",
        text: "(침대에 가만히 누워 오늘 있었던 일들을 천천히 되짚어본다. 유나가 속삭인 비밀, 그리고 가슴 뛰던 만남들...)",
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
        character: null,
        night: true,
        choices: [
            { text: "서연이에게 메시지를 보낸다.", next: "day2_night_message_seyoun", condition: "has_number_seyoun", excludeCondition: "sent_msg_day2_seyoun" },
            { text: "유나에게 메시지를 보낸다.", next: "day2_night_message_yuna", condition: "has_number_yuna", excludeCondition: "sent_msg_day2_yuna" },
            { text: "다인이에게 메시지를 보낸다.", next: "day2_night_message_dain", condition: "has_number_dain", excludeCondition: "sent_msg_day2_dain" },
            { text: "보건선생님께 메시지를 보낸다.", next: "day2_night_message_nurse", condition: "has_number_nurse", excludeCondition: "sent_msg_day2_nurse" },
            { text: "담임선생님께 메시지를 보낸다.", next: "day2_night_message_teacher", condition: "has_number_teacher", excludeCondition: "sent_msg_day2_teacher" },
            { text: "보건선생님 댁으로 향한다.", next: "day2_night_nurse_home", condition: "invited_nurse_home" },
            { text: "호감도 확인하기", next: "day2_check_affinity" },
            { text: "그냥 잠을 청한다.", next: "day2_final_scene" }
        ]
    },
    "day2_night_nurse_home": {
        name: "나",
        text: "(선생님이 알려준 주소로 향했다. 학교 근처의 조용한 오피스텔이다.)",
        background: "assets/images/background/nurse_house.png",
        character: null,
        night: true,
        next: "day2_night_nurse_home_2"
    },
    "day2_night_nurse_home_2": {
        name: "보건선생님",
        text: "\"어머, 정말로 왔네? 어서 들어오렴. 밖이 많이 춥지?\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day2_night_nurse_home_3"
    },
    "day2_night_nurse_home_3": {
        name: "보건선생님",
        text: "\"자, 여기 앉으렴. 따뜻한 차 한 잔 줄게. 우리 전학생이랑 단둘이 있으니까... 왠지 기분이 묘하네?\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day2_night_nurse_home_4"
    },
    "day2_night_nurse_home_4": {
        name: "보건선생님",
        text: null,
        background: "assets/images/background/nurse_home_event1.png",
        character: null,
        next: "day2_night_nurse_home_5"
    },
    "day2_night_nurse_home_5": {
        name: "나",
        text: "(선생님과 단둘이 남겨진 방... 심장 소리가 귓가에 울릴 정도로 크게 들려온다. 그녀의 향기가 코끝을 간지럽히고, 밤은 점점 깊어만 간다.)",
        background: "assets/images/background/nurse_house.png",
        character: null,
        night: true,
        fade: true,
        next: "day2_final"
    },
    "day2_check_affinity": {
        name: "시스템",
        text: "현재 캐릭터들과의 호감도 상태입니다.{affinity_list}",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_seyoun": {
        name: "나",
        text: "(서연이에게 어떤 메시지를 보낼까?)",
        branches: [
            { next: "day2_night_message_seyoun_after", condition: "day2_met_seoyeon_after" },
            { next: "day2_night_message_seyoun_lunch", condition: "day2_ate_lunch_seoyeon" },
            { next: "day2_night_message_seyoun_generic" }
        ]
    },
    "day2_night_message_seyoun_after": {
        name: "나",
        text: "(서연이에게 메시지를 보냈다. '오늘 밤 노을부터 야근(?)까지, 너랑 함께해서 정말 행복했어. 내일 봐!')",
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
        type: "free_talk",
        maxTurns: 10,
        name: "서연",
        text: "(징~ 즉각적인 답장.) '나도 정말 즐거웠어! {name} 덕분에 든든해. 내일 점심 같이 먹는 거 잊지 마! 잘 자요.'",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        context: "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황입니다. 서연이는 주인공의 메시지에 기뻐하며 답장을 보낸 상태입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
        night: true,
        stats: { Seoyeon: { affinity: 3 } },
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 25, next: "day2_night_message_seyoun_reply_high" },
            { minAffinity: 0, next: "day2_night_message_seyoun_reply_normal" },
            { minAffinity: -100, next: "day2_night_message_seyoun_reply_low" }
        ],
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_seyoun_reply_high": {
        name: "나",
        text: "(서연이와의 대화는 언제나 즐겁다. 그녀의 다정한 말투에서 진심이 느껴져 가방을 챙기는 손길이 가볍다. 내일 점심시간이 벌써부터 기다려진다.)",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_seyoun_reply_normal": {
        name: "나",
        text: "(서연이와 무난하게 대화를 마쳤다. 내일 점심 약속을 잊지 말아야겠다.)",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_seyoun_reply_low": {
        name: "나",
        text: "(서연이의 반응이 평소보다 조금 사무적으로 느껴진다. 내가 무언가 실수한 걸까? 내일은 좀 더 조심스럽게 다가가야겠다.)",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_yuna": {
        name: "나",
        text: "(유나에게 어떤 메시지를 보낼까?)",
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
        type: "free_talk",
        maxTurns: 10,
        name: "유나",
        text: "(잠시 후 도착한 답장.) '...응. 네가 이해해줄 줄 알았어. 꿈속에서도 지켜보고 있을게, {name}.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        context: "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황입니다. 유나는 주인공의 메시지에 짧지만 깊은 여운이 담긴 답장을 보낸 상태입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
        night: true,
        stats: { Yuna: { affinity: 3 } },
        affinityChar: "Yuna",
        affinityBranches: [
            { minAffinity: 25, next: "day2_night_message_yuna_reply_high" },
            { minAffinity: 0, next: "day2_night_message_yuna_reply_normal" },
            { minAffinity: -100, next: "day2_night_message_yuna_reply_low" }
        ],
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_yuna_reply_high": {
        name: "나",
        text: "(유나의 신비로운 분위기에 점점 빠져드는 것 같다. '꿈속에서도 지켜보겠다'는 그녀의 말이 무섭기보다는 묘하게 안심이 된다. 정말로 꿈에서 그녀를 만날 수 있을 것만 같다.)",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_yuna_reply_normal": {
        name: "나",
        text: "(유나와의 대화는 여전히 난해하지만, 조금은 가까워진 기분이다. 그녀가 말한 비밀들이 머릿속을 맴돈다.)",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_yuna_reply_low": {
        name: "나",
        text: "(유나의 태도가 너무나 차갑고 기괴하다. 그녀의 세계에 발을 들이는 것이 정말 옳은 선택인지, 한기가 느껴진다.)",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_dain": {
        name: "나",
        text: "(다인이에게 어떤 메시지를 보낼까?)",
        branches: [
            { next: "day2_night_message_dain_after", condition: "day2_met_dain_after" },
            { next: "day2_night_message_dain_lunch", condition: "day2_met_dain_lunch" },
            { next: "day2_night_message_dain_generic" }
        ]
    },
    "day2_night_message_dain_after": {
        name: "나",
        text: "(방과 후 연습 때 일이 생각난다. 어떤 메시지를 보낼까?)",
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
        type: "free_talk",
        maxTurns: 10,
        name: "다인",
        text: "(활기찬 답장.) '당연하지! 내가 이길 거니까 지갑 준비해둬! 하하, 잘 자, {name}!'",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        context: "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황입니다. 다인이는 주인공의 메시지에 활기차게 답장을 보낸 상태입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
        night: true,
        stats: { Dain: { affinity: 3 } },
        affinityChar: "Dain",
        affinityBranches: [
            { minAffinity: 25, next: "day2_night_message_dain_reply_high" },
            { minAffinity: 0, next: "day2_night_message_dain_reply_normal" },
            { minAffinity: -100, next: "day2_night_message_dain_reply_low" }
        ],
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_dain_reply_high": {
        name: "나",
        text: "(다인이의 활기찬 에너지 덕분에 나까지 기운이 난다. '지갑 준비해둬'라며 장난치는 모습이 눈앞에 선하다. 내일 떡볶이 내기는 그녀를 위해서라도 꼭 져줘야 할까?)",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_dain_reply_normal": {
        name: "나",
        text: "(다인이와 즐겁게 대화를 마쳤다. 내일 떡볶이 내기에서 지지 않도록 마음의 준비를 해야겠다.)",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_dain_reply_low": {
        name: "나",
        text: "(다인이의 반응이 평소보다 무미건조하다. 내가 보낸 메시지가 귀찮았던 건 아닐지, 핸드폰을 든 손이 어색해진다.)",
        character: "assets/images/characters/dain_sad.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_nurse": {
        name: "나",
        text: "(보건선생님께 어떤 메시지를 보낼까?)",
        branches: [
            { next: "day2_night_message_nurse_rest", condition: "day2_met_nurse_after" },
            { next: "day2_night_message_nurse_rest", condition: "woke_up_in_nurse_room" },
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
        type: "free_talk",
        maxTurns: 10,
        name: "보건선생님",
        text: "(매혹적인 답장.) '어머, 벌써 내 생각 하는 거니? 후훗, 오늘 푹 자고 내일 또 얼굴 보자. 잘 자요, {name}.'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        context: "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황입니다. 보건선생님은 주인공의 메시지에 장난스럽고 매혹적인 답장을 보낸 상태입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
        night: true,
        stats: { Nurse: { affinity: 3 } },
        affinityChar: "Nurse",
        affinityBranches: [
            { minAffinity: 40, next: "day2_night_message_nurse_reply_high" },
            { minAffinity: 0, next: "day2_night_message_nurse_reply_normal" },
            { minAffinity: -100, next: "day2_night_message_nurse_reply_low" }
        ],
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_nurse_reply_high": {
        name: "나",
        text: "(선생님의 매혹적인 말투가 귓가에 맴도는 것 같다. 화면 너머로 그녀의 미소가 보이는 듯해 심장이 떨린다. 내일은 무슨 일이 있어도 보건실에 들러야겠다.)",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_nurse_reply_normal": {
        name: "나",
        text: "(선생님과 무사히 연락을 마쳤다. 내일 학교에서 뵈면 반갑게 인사드려야겠다.)",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_nurse_reply_low": {
        name: "나",
        text: "(선생님의 답장이 너무나 사무적이다. 단순히 학생 중 한 명으로만 대하시는 것 같아 씁쓸한 기분이 든다.)",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_teacher": {
        name: "나",
        text: "(담임선생님께 메시지를 보냈다. '선생님, 오늘 하루 수고하셨습니다. 안녕히 주무세요.')",
        night: true,
        setFlag: "sent_msg_day2_teacher",
        next: "day2_night_message_teacher_reply"
    },
    "day2_night_message_teacher_reply": {
        type: "free_talk",
        maxTurns: 10,
        name: "담임선생님",
        text: "(조금 늦게 도착한 답장.) '어머, {name}. 이 시간에 메시지라니 조금 놀랐네. 그래도 걱정해줘서 고마워. 너도 푹 자고 내일 지각하지 마렴.'",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        context: "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황입니다. 담임선생님은 주인공의 메시지에 조금 당황하면서도 고마워하며 답장을 보낸 상태입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
        night: true,
        stats: { Teacher: { affinity: 3 } },
        affinityChar: "Teacher",
        affinityBranches: [
            { minAffinity: 25, next: "day2_night_message_teacher_reply_high" },
            { minAffinity: 0, next: "day2_night_message_teacher_reply_normal" },
            { minAffinity: -100, next: "day2_night_message_teacher_reply_low" }
        ],
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_teacher_reply_high": {
        name: "나",
        text: "(선생님의 다정한 답장에 마음이 따뜻해진다. 학생으로서가 아니라, 조금은 한 명의 인격체로 존중받는 기분이 들어 내일 학교 가는 길이 기다려진다.)",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_teacher_reply_normal": {
        name: "나",
        text: "(선생님과 무사히 연락을 마쳤다. 내일은 지각하지 않도록 주의해야겠다.)",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_teacher_reply_low": {
        name: "나",
        text: "(선생님의 답장이 짧고 엄격하다. 사적인 시간에 연락한 것이 큰 실례였던 것 같아 후회가 밀려온다.)",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_final_scene": {
        name: "나",
        text: "(내일은 또 어떤 진실이 나를 기다리고 있을까... 무거운 눈꺼풀을 닫으며 잠에 빠져든다.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        fade: true,
        next: "day2_final"
    },
    "day2_final": {
        name: "시스템",
        text: "(현재 개발된 시나리오는 여기까지입니다. 다음 업데이트를 기대해주세요!)",
        background: null,
        character: null,
        fade: true,
        choices: [
            { text: "처음부터 다시 시작하기", next: "index.html" }
        ]
    }
});
