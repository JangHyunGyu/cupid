if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

Object.assign(SCENARIO[2], {
    "day2_afternoon_class": {
        name: "나",
        text: "(지루한 오후 수업이 끝나고 교실에는 노을빛이 스며든다. 드디어 방과 후다.)",
        background: "assets/images/background/room_school.png",
        character: null,
        sunset: true,
        next: "day2_after_school"
    },
    "day2_afternoon_nurse_skip": {
        name: "나",
        text: "(보건실에서 한참 자고 일어났더니 벌써 방과 후다. 수업은 통째로 빼먹었지만 몸은 한결 가볍다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: null,
        sunset: true,
        next: "day2_after_school"
    },
    "day2_after_school": {
        name: "나",
        text: "(오늘은 어제보다 더 특별한 일이 생길 것 같은 예감이 든다. 어디로 가볼까?)",
        sunset: true,
        choices: [
            { text: "서연이와 함께 학생회 일을 돕는다.", next: "day2_after_seoyeon" },
            { text: "유나와 함께 학교의 비밀을 파헤친다.", next: "day2_after_yuna", condition: "metYuna" },
            { text: "도서관 별관으로 쪽지를 남긴 사람을 찾아가 본다.", next: "day2_after_yuna", excludeCondition: "metYuna" },
            { text: "다인이의 배구 연습을 도와준다.", next: "day2_after_dain", condition: "metDain" },
            { text: "체육관에서 들리는 활기찬 소리를 따라가 본다.", next: "day2_after_dain", excludeCondition: "metDain" },
            { text: "보건실에 있는 선생님을 찾아간다.", next: "day2_after_nurse" }
        ]
    },
    "day2_after_seoyeon": {
        name: "나",
        text: "(학생회실. 서연이와 함께 서류를 정리하다 보니 어느새 창밖이 어두워졌다.)",
        background: "assets/images/background/student_room.png",
        character: "assets/images/characters/seyoun_nomal.png",
        night: true,
        next: "day2_after_seoyeon_2"
    },
    "day2_after_seoyeon_2": {
        name: "서연",
        text: "\"휴... 드디어 끝났네. {name?}, 늦게까지 도와줘서 정말 고마워. 너 아니었으면 오늘 안에 다 못 끝냈을 거야.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_after_seoyeon_3"
    },
    "day2_after_seoyeon_3": {
        name: "나",
        text: "(서연이가 기지개를 켜며 살짝 웃는다. 피곤해 보이지만 눈빛은 맑다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "서연이는 왜 그렇게 열심히야?", next: "day2_seoyeon_why", stats: { Seoyeon: { affinity: 5 } } },
            { text: "이제 그만 가자. 집까지 데려다줄게.", next: "day2_seoyeon_home", stats: { Seoyeon: { affinity: 15 } } },
            { text: "(어깨를 주물러준다)", next: "day2_seoyeon_massage", stats: { Seoyeon: { affinity: 20 } } }
        ]
    },
    "day2_seoyeon_why": {
        name: "서연",
        text: "\"음... 그냥, 누군가는 해야 할 일이니까. 그리고 내가 최선을 다하면 학교가 조금이라도 좋아지지 않을까 싶어서.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_home": {
        name: "서연",
        text: "\"어...? 데려다준다고? 아... 음, 그래주면 나야 고맙지만...\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_massage": {
        name: "서연",
        text: "\"앗... {name?}! 갑자기 이러면... (서연의 몸이 움찔하더니 이내 긴장을 풀고 눈을 감는다) ...시원하다. 고마워.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_night_talk": {
        name: "서연",
        text: "\"{name?}... 오늘 정말 고마웠어. 너랑 있으면 힘든 일도 다 잊게 돼. 우리... 내일도 같이 점심 먹을래?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_seoyeon_contact_check"
    },
    "day2_seoyeon_contact_check": {
        branches: [
            { next: "day2_end", condition: "has_number_seyoun" },
            { next: "day2_seoyeon_contact_ask" }
        ]
    },
    "day2_seoyeon_contact_ask": {
        name: "서연",
        text: "\"아, 맞다! 우리 아직 연락처 교환 안 했지? 괜찮다면... 번호 알려줄 수 있어? 나중에 메시지 하고 싶어서.\"",
        character: "assets/images/characters/seyoun_shy.png",
        choices: [
            { text: "응, 좋아. 여기 내 번호야.", next: "day2_seoyeon_contact_success", setFlags: ["has_number_seyoun", "has_any_contact"] },
            { text: "미안, 번호는 좀... 나중에 알려줄게.", next: "day2_seoyeon_contact_fail" }
        ]
    },
    "day2_seoyeon_contact_success": {
        name: "서연",
        text: "\"고마워! 그럼 진짜로 나중에 연락할게. 잘 가!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 10 } },
        next: "day2_end"
    },
    "day2_seoyeon_contact_fail": {
        name: "서연",
        text: "\"아... 응, 알았어! 내가 너무 갑자기 물어봤지? 미안해. 그럼 내일 학교에서 봐!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_end"
    },
    "day2_after_yuna": {
        name: "나",
        text: "(도서관 별관. 낡은 건물 안으로 들어서자 서늘한 공기가 나를 감싼다.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        branches: [
            { next: "day2_after_yuna_met", condition: "metYuna" },
            { next: "day2_after_yuna_new" }
        ]
    },
    "day2_after_yuna_met": {
        name: "유나",
        text: "\"왔구나. 자, 나를 따라와. 보여줄 게 있어.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_after_yuna_follow"
    },
    "day2_after_yuna_new": {
        name: "유나",
        text: "\"너... 내가 누군지 궁금해서 온 거지? 사실 이 학교에는 아주 깊은 비밀이 있어.\"",
        character: "assets/images/characters/yuna_nomal.png",
        setFlag: "metYuna",
        next: "day2_after_yuna_new_name_ask"
    },
    "day2_after_yuna_new_name_ask": {
        name: "유나",
        text: "\"난 유나야. 네 이름은 뭐야?\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_after_yuna_new_name_share"
    },
    "day2_after_yuna_new_name_share": {
        name: "나",
        text: "\"내 이름은 {name}이야.\"",
        setFlag: "knowsName_Yuna",
        next: "day2_after_yuna_new_follow"
    },
    "day2_after_yuna_new_follow": {
        name: "유나",
        text: "\"{name}... 기억해둘게. 자, 나를 따라와. 너한테만 보여줄 게 있으니까.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_after_yuna_follow"
    },
    "day2_after_yuna_follow": {
        name: "나",
        text: "(유나를 따라 지하실의 먼지 쌓인 창고로 내려갔다. 기묘한 한기가 감도는 곳이다.)",
        next: "day2_after_yuna_3_pre"
    },
    "day2_after_yuna_3_pre": {
        name: "유나",
        text: "\"봐, {name?}. 이 벽에 새겨진 문양들... 내가 추적해온 이 학교의 비밀들과 일치해.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_after_yuna_3"
    },
    "day2_after_yuna_3": {
        name: "나",
        text: "(유나가 손가락으로 벽의 틈새를 가리킨다. 그곳에는 붉은색으로 기묘한 눈 모양이 그려져 있다.)",
        character: "assets/images/characters/yuna_smile.png",
        choices: [
            { text: "이게 대체 뭘 의미하는 거야?", next: "day2_yuna_meaning", stats: { Yuna: { affinity: 8 } } },
            { text: "(유나의 손을 잡으며) 무서우니까 이제 나가자.", next: "day2_yuna_scary", stats: { Yuna: { affinity: 12 } } },
            { text: "이 눈... 꼭 우리를 지켜보고 있는 것 같아.", next: "day2_yuna_eye", stats: { Yuna: { affinity: 15 } } }
        ]
    },
    "day2_yuna_meaning": {
        name: "유나",
        text: "\"감시... 아니면 보호. 누구를 위한 것인지는 아직 알 수 없어.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_night_talk"
    },
    "day2_yuna_scary": {
        name: "유나",
        text: "\"...손이 따뜻하네. 알았어. 오늘은 이만 돌아가자.\"",
        character: "assets/images/characters/yuna_shy.png",
        next: "day2_yuna_night_talk"
    },
    "day2_yuna_eye": {
        name: "유나",
        text: "\"정답이야. 이 학교는 거대한 감옥이나 실험실일지도 몰라. 그리고 우린 그 안에서 무언가를 시험받고 있는 거고.\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_yuna_night_talk"
    },
    "day2_yuna_night_talk": {
        name: "유나",
        text: "\"이건... 단순한 낙서가 아니야. 이 학교의 설립 목적과 관련이 있어. {name?}, 넌 이제 돌이킬 수 없는 길을 선택한 거야.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_yuna_contact_check"
    },
    "day2_yuna_contact_check": {
        branches: [
            { next: "day2_end", condition: "has_number_yuna" },
            { next: "day2_yuna_contact_ask" }
        ]
    },
    "day2_yuna_contact_ask": {
        name: "유나",
        text: "\"비밀을 공유하려면... 연락할 수단은 있어야겠지. 네 번호, 여기에 남겨줘.\"",
        character: "assets/images/characters/yuna_nomal.png",
        choices: [
            { text: "응, 좋아. 너에 대해 모든 걸 알고 싶어.", next: "day2_yuna_contact_success", setFlags: ["has_number_yuna", "has_any_contact"] },
            { text: "미안, 아직은 좀 조심스러워.", next: "day2_yuna_contact_fail", stats: { Yuna: { affinity: -15 } } }
        ]
    },
    "day2_yuna_contact_success": {
        name: "유나",
        text: "\"...됐어. 이제 우린 연결된 거야. 내가 부르면... 언제든 와줘야 해.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 15 } },
        next: "day2_end"
    },
    "day2_yuna_contact_fail": {
        name: "유나",
        text: "\"...그래. 억지로 강요하진 않아. 하지만 기회는 자주 오지 않는다는 걸 명심해.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_end"
    },
    "day2_after_dain": {
        name: "나",
        text: "(체육관 문을 열자, 활기찬 기합 소리와 함께 배구공 튀기는 소리가 들려온다.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        night: true,
        branches: [
            { next: "day2_after_dain_met", condition: "metDain" },
            { next: "day2_after_dain_new" }
        ]
    },
    "day2_after_dain_met": {
        name: "다인",
        text: "\"오! {name?}! 마침 잘 왔다. 나 연습하는 것 좀 도와줄래?\"",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_after_dain_practice"
    },
    "day2_after_dain_practice": {
        name: "나",
        text: "(다인이의 스파이크 연습을 도와주다 보니 어느새 온몸이 땀으로 젖었다. 하지만 기분만은 상쾌하다.)",
        character: "assets/images/characters/dain_sweat.png",
        next: "day2_after_dain_3"
    },
    "day2_after_dain_new": {
        name: "다인",
        text: "\"하아, 하아... 너 운동 신경 진짜 대박이다! 처음 보는데 호흡이 척척 맞네!\"",
        character: "assets/images/characters/dain_sweat.png",
        setFlag: "metDain",
        next: "day2_after_dain_new_name_ask"
    },
    "day2_after_dain_new_name_ask": {
        name: "다인",
        text: "\"난 2학년 3반 정다인이야! 네 이름은 뭐야?\"",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_after_dain_new_name_share"
    },
    "day2_after_dain_new_name_share": {
        name: "나",
        text: "\"난 {name}이고 나도 2학년 3반이야.\"",
        setFlag: "knowsName_Dain",
        next: "day2_after_dain_3"
    },
    "day2_after_dain_3": {
        name: "나",
        text: "(다인이가 수건으로 땀을 닦으며 나에게 시원한 음료수를 건넨다.)",
        character: "assets/images/characters/dain_nomal.png",
        choices: [
            { text: "다인이가 토스를 잘 올려줘서 그렇지.", next: "day2_dain_praise", stats: { Dain: { affinity: 10 } } },
            { text: "나중에 정식으로 한판 붙어볼까?", next: "day2_dain_match", stats: { Dain: { affinity: 15 } } },
            { text: "운동 후에 먹는 떡볶이가 최고지? 그치?", next: "day2_dain_food", stats: { Dain: { affinity: 20 } } }
        ]
    },
    "day2_dain_praise": {
        name: "다인",
        text: "\"에이, 겸손하긴! 아무튼 오늘 덕분에 연습 잘 됐어. 고마워!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_dain_night_talk"
    },
    "day2_dain_match": {
        name: "다인",
        text: "\"오? 자신만만인데? 좋아, 내기 걸고 한판 하는 거다? 지는 사람이 떡볶이 쏘기!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_dain_night_talk"
    },
    "day2_dain_food": {
        name: "다인",
        text: "\"와! 너 좀 뭘 아는구나? 떡볶이에 튀김까지 곁들이면... 크, 생각만 해도 행복하다!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_dain_night_talk"
    },
    "day2_dain_night_talk": {
        name: "다인",
        text: "\"와! 너 운동 신경 진짜 대박이다. 우리 팀으로 영입하고 싶을 정도야! 오늘 고생했어, {name?}! 조심해서 들어가!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_dain_contact_check"
    },
    "day2_dain_contact_check": {
        branches: [
            { next: "day2_end", condition: "has_number_dain" },
            { next: "day2_dain_contact_ask" }
        ]
    },
    "day2_dain_contact_ask": {
        name: "다인",
        text: "\"야 {name?}! 우리 앞으로도 같이 맛있는 거 먹으러 다니려면 연락처는 있어야겠지? 번호 찍어줘!\"",
        character: "assets/images/characters/dain_nomal.png",
        choices: [
            { text: "좋아! 다인이랑 맛집 탐방 다니면 재밌겠다.", next: "day2_dain_contact_success", setFlags: ["has_number_dain", "has_any_contact"] },
            { text: "음.. 나중에 기회 되면 알려줄게.", next: "day2_dain_contact_fail", stats: { Dain: { affinity: -10 } } }
        ]
    },
    "day2_dain_contact_success": {
        name: "다인",
        text: "\"연락처 전송 완료! 내가 맛있는 곳 찾으면 바로 메시지 보낼 테니까 대기하고 있어!\"",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Dain: { affinity: 15 } },
        next: "day2_end"
    },
    "day2_dain_contact_fail": {
        name: "다인",
        text: "\"뭐야~ 튕기는 거야? 알았어, 알았어. 내가 더 노력해서 네 번호 따고 만다!\"",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_end"
    },
    "day2_after_nurse": {
        name: "나",
        text: "(보건실 문을 열자, 은은한 허브 향기와 함께 선생님이 책을 읽고 있는 모습이 보인다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        branches: [
            { next: "day2_after_nurse_met", condition: "metNurse" },
            { next: "day2_after_nurse_new" }
        ]
    },
    "day2_after_nurse_met": {
        name: "보건선생님",
        text: "\"어머, {name?}. 또 왔네? 오늘은 어디가 아파서 온 걸까? 아니면... 그냥 내 얼굴 보러 온 거야?\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_after_nurse_3"
    },
    "day2_after_nurse_new": {
        name: "보건선생님",
        text: "\"어머, 처음 보는 얼굴이네? 이번에 전학 온 학생이니? 나는 보건선생님이야.\"",
        character: "assets/images/characters/nurse.png",
        setFlag: "metNurse",
        next: "day2_after_nurse_new_name_ask"
    },
    "day2_after_nurse_new_name_ask": {
        name: "보건선생님",
        text: "\"그러고 보니 이름이 뭐야? 선생님한테만 살짝 알려줄래?\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_after_nurse_new_name_share"
    },
    "day2_after_nurse_new_name_share": {
        name: "나",
        text: "\"제 이름은 {name}이에요.\"",
        setFlag: "knowsName_Nurse",
        next: "day2_after_nurse_3"
    },
    "day2_after_nurse_3": {
        name: "나",
        text: "(선생님이 안경을 고쳐 쓰며 나를 빤히 바라본다.)",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "선생님이 보고 싶어서 왔어요.", next: "day2_nurse_miss", stats: { Nurse: { affinity: 15 } } },
            { text: "그냥 조용히 쉬고 싶어서요.", next: "day2_nurse_rest", stats: { Nurse: { affinity: 5 } } },
            { text: "이 방에서 나는 향기가 너무 좋아요.", next: "day2_nurse_aroma", stats: { Nurse: { affinity: 10 } } }
        ]
    },
    "day2_nurse_miss": {
        name: "보건선생님",
        text: "\"후훗, 솔직해서 좋네. 그렇게 솔직한 우리 전학생에겐 상을 줘야겠지?\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_nurse_night_talk"
    },
    "day2_nurse_rest": {
        name: "보건선생님",
        text: "\"그래? 그럼 저기 침대에 가서 누워 있어. 내가 방해 안 할게.\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_nurse_night_talk"
    },
    "day2_nurse_aroma": {
        name: "보건선생님",
        text: "\"어머, 눈썰미가 좋네. 이건 내가 직접 블렌딩한 아로마 오일이야. 마음을 편안하게 해주지.\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_nurse_night_talk"
    },
    "day2_nurse_night_talk": {
        name: "보건선생님",
        text: "(선생님이 부드러운 미소를 지으며 내 머리를 쓰다듬는다) \"후훗, 나랑 더 있고 싶어서 온 거구나? 좋아, 오늘은 특별히 늦게까지 같이 있어줄게.\"",
        character: "assets/images/characters/nurse.png",
        night: true,
        next: "day2_nurse_night_talk_2"
    },
    "day2_nurse_night_talk_2": {
        name: "나",
        text: "(선생님과 함께 보건실에서 도란도란 이야기를 나누다 보니 어느새 밖이 캄캄해졌다. 아쉽지만 다음을 기약하며 학교를 나섰다.)",
        background: "assets/images/background/nurse_room.jpg",
        night: true,
        next: "day2_nurse_contact_check"
    },
    "day2_nurse_contact_check": {
        branches: [
            { next: "day2_end", condition: "has_number_nurse" },
            { next: "day2_nurse_contact_ask" }
        ]
    },
    "day2_nurse_contact_ask": {
        name: "보건선생님",
        text: "\"{name?}, 혹시 모르니까 내 번호 저장해둘래? 아프거나 고민 있으면 언제든 연락해.\"",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "네, 알려주세요!", next: "day2_nurse_contact_success", setFlags: ["has_number_nurse", "has_any_contact"] },
            { text: "아직은 좀 부담스러워요.", next: "day2_nurse_contact_fail", stats: { Nurse: { affinity: -5 } } }
        ]
    },
    "day2_nurse_contact_success": {
        name: "보건선생님",
        text: "\"후훗, 착하네. 그럼 나중에 밤에 연락할게? 잘 가, {name?}.\"",
        character: "assets/images/characters/nurse.png",
        stats: { Nurse: { affinity: 10 } },
        next: "day2_end"
    },
    "day2_nurse_contact_fail": {
        name: "보건선생님",
        text: "\"어머, 튕기는 거야? 알았어. 나중에 마음 바뀌면 말해줘. 조심해서 들어가!\"",
        character: "assets/images/characters/nurse.png",        next: "day2_end"
    }
});



