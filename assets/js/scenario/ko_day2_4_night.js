if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

Object.assign(SCENARIO[2], {
    "day2_end": {
        name: "나",
        text: "(두 번째 밤이 깊어간다. 창밖의 어둠이 어제보다 더 짙게 느껴지는 건 기분 탓일까...?)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        next: "day2_end_2"
    },
    "day2_end_2": {
        name: "나",
        text: "(침대에 누워 오늘 있었던 일들을 되짚어본다. 유나가 말한 학교의 비밀, 그리고 그녀들과의 시간...)",
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
        character: "assets/images/characters/nurse.png",
        night: true,
        next: "day2_night_nurse_home_3"
    },
    "day2_night_nurse_home_3": {
        name: "보건선생님",
        text: "\"자, 여기 앉으렴. 따뜻한 차 한 잔 줄게. 우리 전학생이랑 단둘이 있으니까... 왠지 기분이 묘하네?\"",
        character: "assets/images/characters/nurse.png",
        night: true,
        next: "day2_night_nurse_home_4"
    },
    "day2_night_nurse_home_4": {
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
        text: "(서연이에게 메시지를 보냈다. '오늘 학생회 일 돕는 거 즐거웠어. 내일 봐!')",
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
        character: "assets/images/characters/seyoun_nomal.png",
        silhouette: true,
        context: "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황. 서연이는 주인공의 메시지에 기뻐하며 답장을 보낸 상태. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화 마무리 시점에 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
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
        name: "서연",
        text: "(징~ 즉각적인 답장.) '나도 정말 즐거웠어! {name} 덕분에 든든해. 사실... 네 메시지 기다리고 있었어. 내일 점심 같이 먹는 거 잊지 마! 잘 자, {name}.'",
        character: "assets/images/characters/seyoun_nomal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_seyoun_reply_normal": {
        name: "서연",
        text: "(징~ 즉각적인 답장.) '나도 정말 즐거웠어! {name} 덕분에 든든해. 내일 점심 같이 먹는 거 잊지 마! 잘 자요.'",
        character: "assets/images/characters/seyoun_nomal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_seyoun_reply_low": {
        name: "서연",
        text: "(잠시 후 답장이 온다.) '...응. 오늘 좀 피곤해서, 일단 잘게. 내일 봐.'",
        character: "assets/images/characters/seyoun_nomal.png",
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
        character: "assets/images/characters/yuna_nomal.png",
        silhouette: true,
        context: "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황. 유나는 주인공의 메시지에 짧지만 깊은 여운이 담긴 답장을 보낸 상태. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화 마무리 시점에 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
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
        name: "유나",
        text: "(바로 답장이 온다.) '...기다리고 있었어. 네가 먼저 연락해줘서 기뻐. 꿈속에서도 지켜보고 있을게, {name}. 잘 자.'",
        character: "assets/images/characters/yuna_nomal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_yuna_reply_normal": {
        name: "유나",
        text: "(잠시 후 도착한 답장.) '...응. 네가 이해해줄 줄 알았어. 꿈속에서도 지켜보고 있을게, {name}.'",
        character: "assets/images/characters/yuna_nomal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_yuna_reply_low": {
        name: "유나",
        text: "(한참 후에 답장이 온다.) '...왜 연락한 거야? 바쁘니까 귀찮게 하지 마. 잘 자.'",
        character: "assets/images/characters/yuna_nomal.png",
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
        character: "assets/images/characters/dain_nomal.png",
        silhouette: true,
        context: "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황. 다인이는 주인공의 메시지에 활기차게 답장을 보낸 상태. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화 마무리 시점에 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
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
        name: "다인",
        text: "(활기찬 답장.) '당연하지! 내가 이길 거니까 지갑 준비해둬! 하하, 사실 나도 네 생각하고 있었어. 잘 자, {name}! 내일 보자!'",
        character: "assets/images/characters/dain_nomal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_dain_reply_normal": {
        name: "다인",
        text: "(활기찬 답장.) '당연하지! 내가 이길 거니까 지갑 준비해둬! 하하, 잘 자, {name}!'",
        character: "assets/images/characters/dain_nomal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_dain_reply_low": {
        name: "다인",
        text: "(짧은 답장.) '...응. 피곤해서 일단 잘게. 내일 봐.'",
        character: "assets/images/characters/dain_nomal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_nurse": {
        name: "나",
        text: "(보건선생님께 어떤 메시지를 보낼까?)",
        branches: [
            { next: "day2_night_message_nurse_rest", condition: "day2_met_nurse_after" },
            { next: "day2_night_message_nurse_rest", condition: "wokeUpInNurseRoom" },
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
        character: "assets/images/characters/nurse.png",
        silhouette: true,
        context: "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황. 보건선생님은 주인공의 메시지에 장난스럽고 매혹적인 답장을 보낸 상태. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화 마무리 시점에 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
        night: true,
        stats: { Nurse: { affinity: 3 } },
        affinityChar: "Nurse",
        affinityBranches: [
            { minAffinity: 40, next: "day2_night_message_nurse_reply_high" },
            { minAffinity: 0, next: "day2_night_message_nurse_reply_normal" },
            { minAffinity: -100, next: "day2_night_message_nurse_reply_low" }
        ],
        next: "day2_final_scene"
    },
    "day2_night_message_nurse_reply_high": {
        name: "보건선생님",
        text: "(매혹적인 답장.) '어머, 벌써 내 생각 하는 거니? 사실 나도 네 생각하고 있었어. 후훗, 오늘 푹 자고 내일 또 얼굴 보자. 잘 자요, {name}.'",
        character: "assets/images/characters/nurse.png",
        silhouette: true,
        night: true,
        next: "day2_final_scene"
    },
    "day2_night_message_nurse_reply_normal": {
        name: "보건선생님",
        text: "(매혹적인 답장.) '어머, 벌써 내 생각 하는 거니? 후훗, 오늘 푹 자고 내일 또 얼굴 보자. 잘 자요, {name}.'",
        character: "assets/images/characters/nurse.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_nurse_reply_low": {
        name: "보건선생님",
        text: "(차가운 답장.) '...늦었네. 이 시간에 메시지 보내지 마. 잘 자.'",
        character: "assets/images/characters/nurse.png",
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
        character: "assets/images/characters/teacher.png",
        silhouette: true,
        context: "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황. 담임선생님은 주인공의 메시지에 조금 당황하면서도 고마워하며 답장을 보낸 상태. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화 마무리 시점에 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
        night: true,
        stats: { Teacher: { affinity: 3 } },
        affinityChar: "Teacher",
        affinityBranches: [
            { minAffinity: 25, next: "day2_night_message_teacher_reply_high" },
            { minAffinity: 0, next: "day2_night_message_teacher_reply_normal" },
            { minAffinity: -100, next: "day2_night_message_teacher_reply_low" }
        ],
        next: "day2_final_scene"
    },
    "day2_night_message_teacher_reply_high": {
        name: "담임선생님",
        text: "(바로 답장이 온다.) '어머, {name}. 나도 오늘 생각하고 있었어. 메시지 고마워. 푹 자고 내일 보자. 잘 자요.'",
        character: "assets/images/characters/teacher.png",
        silhouette: true,
        night: true,
        next: "day2_final_scene"
    },
    "day2_night_message_teacher_reply_normal": {
        name: "담임선생님",
        text: "(조금 늦게 도착한 답장.) '어머, {name}. 이 시간에 메시지라니 조금 놀랐네. 그래도 걱정해줘서 고마워. 너도 푹 자고 내일 지각하지 마렴.'",
        character: "assets/images/characters/teacher.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_teacher_reply_low": {
        name: "담임선생님",
        text: "(짧은 답장.) '...늦었어. 얼른 자렴. 내일 봐.'",
        character: "assets/images/characters/teacher.png",
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
