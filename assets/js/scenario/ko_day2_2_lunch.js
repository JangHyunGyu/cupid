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
            { text: "몸이 좀 안 좋은 것 같아 보건실로 간다.", next: "day2_lunch_nurse" }
        ]
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
            { text: "와, 정말 맛있어 보여! 서연이는 요리 천재구나.", next: "day2_seoyeon_lunch_praise", stats: { Seoyeon: { affinity: 15 } } },
            { text: "학생회 일 때문에 피곤하진 않아? 너무 무리하는 거 아냐?", next: "day2_seoyeon_lunch_worry", stats: { Seoyeon: { affinity: 10 } } },
            { text: "(서연이 볼에 묻은 빵가루를 떼어준다.)", next: "day2_seoyeon_lunch_touch", stats: { Seoyeon: { affinity: 20 } } }
        ]
    },
    "day2_seoyeon_lunch_praise": {
        name: "서연",
        text: "\"정말? 입맛에 맞을지 걱정했는데 다행이다. 자, 사양 말고 많이 먹어!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_afternoon_class"
    },
    "day2_seoyeon_lunch_worry": {
        name: "서연",
        text: "\"괜찮아. 네가 맛있게 먹어주는 모습 보니까 피곤함이 싹 가시는 것 같아. 정말로.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_afternoon_class"
    },
    "day2_seoyeon_lunch_touch": {
        name: "서연",
        text: "\"아... 고, 고마워. 내가 너무 급하게 먹었나 보네... (서연이의 얼굴이 살짝 붉어진다)\"",
        character: "assets/images/characters/seyoun_shy.png",
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
            { text: "비밀 같은 건 관심 없어. 그냥 너랑 이야기하고 싶어서 온 거야.", next: "day2_yuna_normal", stats: { Yuna: { affinity: 8 } } }
        ]
    },
    "day2_yuna_talk_2_new": {
        name: "유나",
        text: "\"너... 내가 누군지 궁금해서 온 거지? 사실 이 학교에는 아주 깊은 비밀이 있어. 너한테만 보여주고 싶은 게 있는데.\"",
        character: "assets/images/characters/yuna_nomal.png",
        setFlag: "metYuna",
        choices: [
            { text: "네가 쪽지를 남긴 유나야? 비밀이 뭔데?", next: "day2_yuna_new_name_ask", stats: { Yuna: { affinity: 10 } } },
            { text: "그냥 쪽지 보고 궁금해서 와봤어. 넌 누구야?", next: "day2_yuna_new_name_ask", stats: { Yuna: { affinity: 5 } } }
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
        next: "day2_yuna_secret_2"
    },
    "day2_yuna_secret_2": {
        name: "유나",
        text: "\"이 안에는... 학교가 오랫동안 숨겨온 기록들이 있어. 네가 이걸 보면... 모든 게 달라질 거야.\"",
        character: "assets/images/characters/yuna_smile.png",
        choices: [
            { text: "그 기록, 나도 같이 봐도 될까?", next: "day2_yuna_secret_read", stats: { Yuna: { affinity: 15 } } },
            { text: "위험한 거 아냐? 그냥 내버려 두는 게 좋겠어.", next: "day2_yuna_secret_stop", stats: { Yuna: { affinity: -10 } } },
            { text: "유나야, 넌 왜 이런 걸 조사하는 거야?", next: "day2_yuna_secret_why", stats: { Yuna: { affinity: 5 } } }
        ]
    },
    "day2_yuna_secret_read": {
        name: "유나",
        text: "\"후훗, 역시 넌 다른 애들이랑 달라. 좋아, 하지만 각오해야 할 거야. 진실은 때로 독이 되기도 하니까.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_afternoon_class"
    },
    "day2_yuna_secret_stop": {
        name: "유나",
        text: "\"...겁쟁이구나. 뭐, 이해해. 평범한 아이라면 그게 당연한 반응이니까. 오늘은 이만 가봐.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_afternoon_class"
    },
    "day2_yuna_secret_why": {
        name: "유나",
        text: "\"글쎄... 잃어버린 기억을 찾기 위해서라고 해둘까? 아니면 이 지루한 학교생활에 자극이 필요해서일지도.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_afternoon_class"
    },
    "day2_yuna_normal": {
        name: "유나",
        text: "\"...그래? 넌 참 이상한 애야. 다른 애들은 다들 무서워하는데. 좋아, 그럼 오늘은 그냥 이렇게 같이 있자.\"",
        character: "assets/images/characters/yuna_nomal.png",
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
    "day2_lunch_dain_new_name_share": {
        name: "나",
        text: "\"내 이름은 {name}이야.\"",
        setFlag: "knowsName_Dain",
        next: "day2_dain_lunch_talk_new"
    },
    "day2_dain_lunch_talk_new": {
        name: "다인",
        text: "\"오! {name}? 멋진 이름이네! 좋아, 만난 기념으로 오늘 점심은 내가 쏜다! 매점으로 가자!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_dain_store"
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
        choices: [
            { text: "내가 다인이 몫까지 살게. 뭐 먹을래?", next: "day2_dain_store_buy", stats: { Dain: { affinity: 10 } } },
            { text: "사람 진짜 많다... 우리 그냥 옥상 갈까?", next: "day2_dain_store_rooftop", stats: { Dain: { affinity: 5 } } },
            { text: "다인아, 저기 마지막 피자빵이다! 내가 먼저 낚아채올게!", next: "day2_dain_store_race", stats: { Dain: { affinity: 15 } } }
        ]
    },
    "day2_dain_store_buy": {
        name: "다인",
        text: "\"에이~ 내가 쏜다니까! 전학생이 무슨 돈이 있다고 그래? 오늘은 내가 대접할 테니까 그냥 맛있게 먹기나 해!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_afternoon_class"
    },
    "day2_dain_store_rooftop": {
        name: "다인",
        text: "\"옥상? 오, 그것도 좋지! 시원한 바람 맞으면서 먹으면 더 맛있겠다. 좋아, 얼른 빵만 사서 올라가자!\"",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_afternoon_class"
    },
    "day2_dain_store_race": {
        name: "다인",
        text: "\"오호! 역시 내 파트너답다! 좋아, 누가 먼저 낚나 내기하자! 지는 사람이 음료수 쏘기!\"",
        character: "assets/images/characters/dain_nomal.png",
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
        text: "\"어머, 우리 전학생 {name?}이네? 어디가 아픈 걸까, 아니면 내 얼굴 보고 싶어서 설레는 걸까?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        stats: { Nurse: { affinity: 5 } },
        next: "nurse_free_talk"
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
        next: "nurse_free_talk"
    },
    "nurse_free_talk": {
        type: "free_talk",
        name: "보건선생님",
        text: "\"후훗, 긴장하지 마. 어디가 어떻게 불편한지 자세하게 말해줄래?\"",
        context: "조용한 보건실, 성숙하고 매혹적인 보건선생님과 단둘이 있는 상황",
        personality: "성숙하고 매혹적인 '누님' 스타일. 도발적인 말로 주인공을 놀리는 것을 즐기지만 사실 누구보다 주인공을 아끼고 보호하려 함",
        extra_guideline: "성숙한 어른으로서 주인공의 로맨틱한 액션이나 가벼운 스킨십 시도도 매우 유연하고 대담하게 받아주세요. 거리감을 두지 말고 적극적으로 호응하며 PG-13 수위 내에서 최대한의 수위 반응을 허용합니다.",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_3": {
        name: "보건선생님",
        text: "(선생님이 부드러운 미소와 함께 나를 침대로 안내한다. 코끝을 간지럽히는 은은한 약초 향기에 긴장이 풀린다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "머리가 좀 아파요.", next: "day2_lunch_nurse_head", stats: { Nurse: { affinity: 5 } } },
            { text: "그냥 좀 쉬고 싶어요.", next: "day2_lunch_nurse_rest", stats: { Nurse: { affinity: 5 } } },
            { text: "선생님, 이런 식으로 학생들을 유혹하는 게 취미예요?", next: "day2_lunch_nurse_trap", stats: { Nurse: { affinity: -30 } } }
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
            { text: "선생님이 직접 먹여주시면 안 돼요?", next: "day2_lunch_nurse_head_tease", stats: { Nurse: { affinity: 10 } } },
            { text: "감사합니다. (약을 받아 먹는다)", next: "day2_lunch_nurse_sleep", stats: { Nurse: { affinity: 5 } } }
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
        text: "(눈을 뜨니 창밖은 어느새 이글거리는 주황빛 노을로 가득하다. 점심시간에 잠들었는데 벌써 방과 후라니... 얼마나 깊게 잠들었던 걸까.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
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
        context: "노을이 지는 보건실, 방금 잠에서 깨어난 주인공과 보건선생님이 단둘이 남겨진 상황",
        personality: "나른하고 섹시하면서도 다정한 보건선생님. 주인공에게 묘한 매력을 느끼며 대담하게 유혹하는 대범한 성격.",
        extra_guideline: "성숙한 어른으로서 주인공을 대놓고 유혹하며 아슬아슬한 분위기를 조성하세요. 사용자의 성인용 농담이나 도발적인 발언(섹드립 등)에도 당황하지 않고 여유롭게 받아치며, 오히려 주인공을 더 당황하게 만들 정도로 대담하고 도발적인 반응을 보이세요. 성숙한 매력을 한껏 발산하며 로맨틱한 긴장감을 최고치로 끌어올리세요.",
        character: "assets/images/characters/nurse.png",
        next: "nurse_contact_exchange"
    },
    "nurse_contact_exchange": {
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
                    { minAffinity: 70, next: "nurse_contact_home_success" }
                ]
            },
            { text: "아, 괜찮아요.", next: "nurse_contact_fail", stats: { Nurse: { affinity: -10 } } }
        ]
    },
    "nurse_contact_success": {
        name: "보건선생님",
        text: "(그녀가 요염하게 웃으며 번호를 저장한다.) \"후훗, 그럼 나중에 밤에 기다릴게? 답장 늦게 하면 삐질지도 몰라.\"",
        character: "assets/images/characters/nurse.png",
        stats: { Nurse: { affinity: 15 } },
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_success": {
        name: "보건선생님",
        text: "(선생님이 눈을 크게 뜨더니, 이내 요염한 미소를 지으며 내 귓가에 속삭인다.) \"어머... {name?}, 생각보다 훨씬 대담하네? 좋아, 오늘 밤 우리 집으로 올래? 주소 찍어줄게. 대신... 부모님께는 비밀이야?\"",
        character: "assets/images/characters/nurse.png",
        stats: { Nurse: { affinity: 30 } },
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



