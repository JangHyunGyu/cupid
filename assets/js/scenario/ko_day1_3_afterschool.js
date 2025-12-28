if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

Object.assign(SCENARIO[1], {
    "after_school_start": {
        name: "나",
        text: "(수업 끝! 방과 후를 알리는 종소리가 울려 퍼진다.)",
        background: "assets/images/background/room_school.png",
        character: null,
        sunset: true,
        next: "after_school_start_2"
    },
    "after_school_start_2": {
        name: "나",
        text: "(가방을 챙겨 교실을 나선다. 복도에는 아이들의 활기찬 발소리로 가득하다.)",
        sunset: true,
        next: "after_school_start_3"
    },
    "after_school_start_3": {
        name: "나",
        text: "(오늘 하루도 길었네. 바로 집에 갈까... 아니면 아까 만났던 애들을 찾아가 볼까?)",
        sunset: true,
        choices: [
            { text: "서연이가 있는 학생회실을 들러본다.", next: "after_seoyeon" },
            { text: "유나가 있던 도서관 별관 쪽으로 향한다.", next: "after_yuna", condition: "metYuna" },
            { text: "학교의 조용한 곳을 좀 더 둘러본다.", next: "after_yuna_new", excludeCondition: "metYuna" },
            { text: "체육관에서 연습 중인 다인을 보러 간다.", next: "after_dain", condition: "metDain" },
            { text: "활기찬 소리가 들리는 체육관으로 향한다.", next: "after_dain_new", excludeCondition: "metDain" },
            { text: "보건실에 들러 선생님께 인사하고 간다.", next: "after_nurse", condition: "metNurse" },
            { text: "보건실 쪽을 가본다.", next: "after_nurse_new", excludeCondition: "metNurse" },
            { text: "오늘은 피곤하니 바로 집으로 돌아간다.", next: "after_home" }
        ]
    },
    "after_seoyeon": {
        name: "서연",
        text: "(학생회실 문을 열자, 서류 더미 속에서 고군분투하는 서연이가 보인다.)",
        background: "assets/images/background/student_room.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_2"
    },
    "after_seoyeon_2": {
        name: "서연",
        text: "(내가 들어서자 서연이가 깜짝 놀라며 고개를 든다. 펜을 내려놓고 기지개를 켜는 그녀.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_3"
    },
    "after_seoyeon_3": {
        name: "서연",
        text: "\"어? {name?}! 이 시간에 어쩐 일이야? 설마... 나 기다린 거야?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "응, 같이 가고 싶어서. 도와줄까?", next: "after_seoyeon_help", setFlag: "helpedSeoyeon", stats: { Seoyeon: { affinity: 10 } } },
            { text: "그냥 얼굴 보고 싶어서. 너무 무리하는 거 아냐?", next: "after_seoyeon_worry", stats: { Seoyeon: { affinity: 5 } } },
            { text: "착각하지 마. 그냥 길을 잘못 든 거야.", next: "after_seoyeon_rude", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "after_seoyeon_rude": {
        name: "서연",
        text: "(서연이의 표정이 순식간에 굳어진다. 다시 서류로 시선을 돌리는 그녀.)",
        character: "assets/images/characters/seyoun_angry.png",
        next: "after_seoyeon_rude_2"
    },
    "after_seoyeon_rude_2": {
        name: "서연",
        text: "\"아... 그래? 그럼 방해하지 말고 나가줄래? 나 좀 바쁘거든.\"",
        character: "assets/images/characters/seyoun_angry.png",
        next: "after_home"
    },
    "after_seoyeon_help": {
        name: "서연",
        text: "(그녀가 감동한 듯 눈을 크게 뜬다. 이내 환하게 웃으며 옆자리를 내어준다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "after_seoyeon_help_dialogue"
    },
    "after_seoyeon_help_dialogue": {
        name: "서연",
        text: "\"정말? 고마워! 네가 도와주면 금방 끝날 것 같아. 자, 이것 좀 정리해줄래?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "after_seoyeon_help_action"
    },
    "after_seoyeon_help_action": {
        name: "서연",
        text: "(말없이 서류를 정리하며 느껴지는 묘한 유대감. 창밖은 어느새 노을빛이다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_help_3"
    },
    "after_seoyeon_help_3": {
        name: "서연",
        text: "\"우리... 이거 다 하고 맛있는 거 먹으러 가자!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "after_seoyeon_cafe"
    },
    "after_seoyeon_cafe": {
        name: "서연",
        text: "(서류 정리를 마치고 학교 앞 작은 카페에 들렀다.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe_2"
    },
    "after_seoyeon_cafe_2": {
        name: "서연",
        text: "(서연이는 생크림이 듬뿍 올라간 음료를 마시며 행복한 표정을 짓는다.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe_2_2"
    },
    "after_seoyeon_cafe_2_2": {
        name: "서연",
        text: "\"하아~ 이제야 좀 살 것 같아. 오늘 정말 고마웠어, {name?}.\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe_3"
    },
    "after_seoyeon_cafe_3": {
        name: "서연",
        text: "\"덕분에 학생회 일도 즐겁게 마무리할 수 있었어. 우리... 내일도 같이 학교에서 나갈래?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "물론이지. 내일을 기다릴게.", next: "after_seoyeon_promise", stats: { Seoyeon: { affinity: 10 } } },
            { text: "글쎄, 내일 기분 봐서? (장난)", next: "after_seoyeon_tease", stats: { Seoyeon: { affinity: 7 } } }
        ]
    },
    "after_seoyeon_promise": {
        name: "서연",
        text: "(그녀가 새끼손가락을 내밀며 환하게 웃는데...)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "after_seoyeon_promise_2"
    },
    "after_seoyeon_promise_2": {
        name: "서연",
        text: "\"약속한 거다? 어기기 없기! 그럼 내일 봐 {name?}. 조심해서 들어가!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "after_seoyeon_contact_check"
    },
    "after_seoyeon_tease": {
        name: "서연",
        text: "(그녀가 볼을 빵빵하게 부풀리며 나를 째려본다.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "after_seoyeon_tease_2"
    },
    "after_seoyeon_tease_2": {
        name: "서연",
        text: "\"흥... 정말 못됐어! 그래도 꼭 와야 해. 안 오면 학생회장으로서 아주 무서운...? 농담이야. 내일 봐!\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "after_seoyeon_contact_check"
    },
    "after_seoyeon_contact_check": {
        branches: [
            { next: "after_home", condition: "has_number_seyoun" },
            { next: "after_seoyeon_contact_ask" }
        ]
    },
    "after_seoyeon_contact_ask": {
        name: "서연",
        text: "\"아, 맞다! 우리 아직 연락처 교환 안 했지? 괜찮다면... 번호 알려줄 수 있어? 나중에 메시지 하고 싶어서.\"",
        character: "assets/images/characters/seyoun_shy.png",
        choices: [
            { text: "응, 좋아. 여기 내 번호야.", next: "after_seoyeon_contact_success", setFlags: ["has_number_seyoun", "has_any_contact"] },
            { text: "미안, 번호는 좀... 나중에 알려줄게.", next: "after_seoyeon_contact_fail" }
        ]
    },
    "after_seoyeon_contact_success": {
        name: "서연",
        text: "\"고마워! 그럼 진짜로 나중에 연락할게. 잘 가!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 10 } },
        next: "after_home"
    },
    "after_seoyeon_contact_fail": {
        name: "서연",
        text: "\"아... 응, 알았어! 내가 너무 갑자기 물어봤지? 미안해. 그럼 내일 학교에서 봐!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_home"
    },
    "after_seoyeon_worry": {
        name: "서연",
        text: "(그녀가 쑥스러운 듯 머리를 긁적이며 웃는다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_worry_2"
    },
    "after_seoyeon_worry_2": {
        name: "서연",
        text: "\"헤헤, 들켰네. 학생회장이라는 게 생각보다 할 일이 많거든. 그래도 네가 이렇게 걱정해주니까 힘이 불끈 나는걸? 조금만 기다려줘, 금방 끝내고 같이 가자!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe"
    },
    "after_yuna_new": {
        name: "나",
        text: "(학교의 조용한 곳을 찾아 걷다 보니, 어느새 도서관 별관에 도착했다. 노을빛이 스며드는 그곳에는 한 소녀가 창가에 앉아 있다.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_new_2"
    },
    "after_yuna_new_2": {
        name: "???",
        text: "\"어? 이 시간에 여기까지 오다니... 너도 참 특이하네. 나는 유나라고 해.\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        setFlag: "metYuna",
        next: "after_yuna_3"
    },
    "after_yuna": {
        name: "유나",
        text: "(도서관 별관은 아까보다 더 어둡고 고요하다. 그곳에는 한 소녀가 창가에 앉아 노을을 바라보고 있다.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_2"
    },
    "after_yuna_2": {
        name: "유나",
        text: "(그녀는 내가 온 것을 알면서도 한참 동안 창밖만 바라본다.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_3"
    },
    "after_yuna_3": {
        name: "유나",
        text: "\"아, 안녕... 방과 후의 도서관은 참 고요해서 좋아. 넌 무슨 일로 온 거야?\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "yuna_name_share_pre"
    },
    "yuna_name_share_pre": {
        name: "나",
        text: "\"내 이름은 '{name}'이야. 너랑 친해지고 싶어.\"",
        setFlag: "knowsName_Yuna",
        next: "yuna_name_share"
    },
    "yuna_name_share": {
        name: "유나",
        text: "(그녀가 내 이름을 나지막이 읊조린다.) \"...{name}. 기억해둘게. 하지만 이런 학교에선 이름 같은 건... 아무 의미가 없을지도 몰라.\"",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_know"
    },
    "after_yuna_know": {
        name: "유나",
        text: "(그녀가 천천히 고개를 돌려 나를 바라본다. 그녀의 입가에 옅은 미소가 번진다.)",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "after_yuna_know_2"
    },
    "after_yuna_know_2": {
        name: "유나",
        text: "(그녀가 내 손을 잡고 별관 옥상으로 나를 이끈다.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_yuna_know_2_2"
    },
    "after_yuna_know_2_2": {
        name: "유나",
        text: "\"나에 대해 알고 싶어...? 후훗, 용감한 건지 무모한 건지 모르겠네.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_yuna_know_3"
    },
    "after_yuna_know_3": {
        name: "유나",
        text: "\"좋아. 오늘 밤은 기니까 조금씩... 아주 조금씩 알려줄게. 따라와.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_yuna_move_rooftop"
    },
    "after_yuna_move_rooftop": {
        name: "나",
        text: "(그녀를 따라 삐걱거리는 계단을 올라갔다. 어느새 차가운 밤공기가 느껴지는 옥상에 도착했다.)",
        background: "assets/images/background/top_school.png",
        character: null,
        night: true,
        next: "after_yuna_rooftop"
    },
    "after_yuna_rooftop": {
        name: "유나",
        text: "(별관 옥상에서 내려다보는 학교는 아까와는 전혀 다른 모습이다.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "after_yuna_rooftop_2"
    },
    "after_yuna_rooftop_2": {
        name: "유나",
        text: "(유나는 난간에 기대 나를 빤히 바라본다.)",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "after_yuna_rooftop_2_2"
    },
    "after_yuna_rooftop_2_2": {
        name: "유나",
        text: "\"사람들은 이 학교가 완벽하다고 생각하지. 하지만 완벽은 환상일 뿐이야.\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        next: "after_yuna_rooftop_3"
    },
    "after_yuna_rooftop_3": {
        name: "유나",
        text: "\"겉으로는 드러나지 않는 문제들이 곪아가고 있을 뿐이지. 이 학교를 가득 채운 무거운 기운... 넌 그런 변화를 못 느꼈어?\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        choices: [
            { text: "너와 함께라면 어디든 괜찮아.", next: "after_yuna_together" },
            { text: "어둠이라니... 좀 무서운데.", next: "after_yuna_scared" }
        ]
    },
    "after_yuna_together": {
        name: "유나",
        text: "(그녀가 내 손을 꽉 쥔다. 그녀의 눈을 보며 슬픈 미소를 짓는데...)",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        next: "after_yuna_together_2"
    },
    "after_yuna_together_2": {
        name: "유나",
        text: "\"바보 같은 소리... 하지만 싫지 않아. 좋아, 그럼 우리... 서로의 비밀을 공유하는 사이가 되는 건 어때?\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        next: "yuna_contact_exchange"
    },
    "yuna_contact_exchange": {
        name: "유나",
        text: "(유나가 난간 쪽에서 몸을 떼며 무심하게 스마트폰을 내민다.) \"비밀을 공유하려면... 연락할 수단은 있어야겠지. 네 번호, 여기에 남겨줘.\"",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        choices: [
            { text: "응, 좋아. 너에 대해 모든 걸 알고 싶어.", next: "yuna_contact_success", setFlags: ["has_number_yuna", "has_any_contact"] },
            { text: "미안, 아직은 좀 조심스러워.", next: "yuna_contact_fail", stats: { Yuna: { affinity: -15 } } }
        ]
    },
    "yuna_contact_success": {
        name: "유나",
        text: "(유나가 내 번호를 저장하고는 희미하게 미소 짓는다.) \"...됐어. 이제 우린 연결된 거야. 내가 부르면... 언제든 와줘야 해.\"",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        stats: { Yuna: { affinity: 15 } },
        next: "night_home"
    },
    "yuna_contact_fail": {
        name: "유나",
        text: "(유나가 차가운 눈빛으로 나를 바라보더니 스마트폰을 집어넣는다.) \"...그래. 억지로 강요하진 않아. 하지만 기회는 자주 오지 않는다는 걸 명심해.\"",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "night_home"
    },
    "after_yuna_scared": {
        name: "유나",
        text: "(그녀가 차갑게 웃으며 내 손을 놓는다. 그녀는 다시 창밖으로 시선을 돌리며 나를 밀어낸다.)",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "after_yuna_scared_2"
    },
    "after_yuna_scared_2": {
        name: "유나",
        text: "\"후훗, 역시 그렇겠지. 평범한 학생에게는 너무 무거운 이야기니까. 오늘은 이만 돌아가. 더 이상 깊이 알려고 하지 마.\"",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "night_home"
    },
    "after_yuna_secret": {
        name: "유나",
        text: "(그녀가 검지 손가락을 입술에 갖다 대며 조용히 하라는 신호를 보낸다.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_yuna_secret_2"
    },
    "after_yuna_secret_2": {
        name: "유나",
        text: "\"쉿... 벽에도 귀가 있는 법이야. 진실을 알게 되면 더 이상 평범한 일상으로 돌아갈 수 없어. 그래도 괜찮다면... 내 손을 잡아.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_yuna_rooftop"
    },
    "after_yuna_secret_deep": {
        name: "유나",
        text: "(유나가 책을 덮고 나를 빤히 바라본다. 그녀의 눈동자가 보랏빛으로 기묘하게 빛나는 것 같다.) \"...진실? 그걸 감당할 준비는 됐어? 좋아, 네 눈빛도 진심이라면... 따라와. 아무에게도 말하지 않겠다고 약속해.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 20 } },
        next: "after_yuna_rooftop"
    },
    "after_yuna_secret_fail": {
        name: "유나",
        text: "(유나가 차가운 미소를 짓는다.) \"진실이라... 후훗, 넌 아직 그 무게를 견디기엔 너무 가벼워 보여. 궁금해하는 건 자유지만, 너무 깊이 파고들진 마. 다칠 수도 있으니까.\"",
        character: "assets/images/characters/yuna_nomal.png",
        stats: { Yuna: { affinity: -10 } },
        next: "after_home"
    },
    "after_yuna_boring": {
        name: "유나",
        text: "(유나가 한심하다는 듯 한숨을 내쉬며 다시 책으로 시선을 돌린다.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_yuna_boring_2"
    },
    "after_yuna_boring_2": {
        name: "유나",
        text: "\"급식...? 그런 세속적인 이야기는 다른 애들이랑 해. 난 바쁘니까 방해하지 말고 나가줄래?\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_home"
    },
    "after_yuna_rude": {
        name: "유나",
        text: "(그녀가 책을 덮고 나를 차갑게 쳐다본다. 공기가 순식간에 얼어붙는 것 같다.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_yuna_rude_2"
    },
    "after_yuna_rude_2": {
        name: "유나",
        text: "\"아침부터라니...? 후훗, 넌 아직 아무것도 모르고 있구나. 이 학교를 감싸고 있는 이 기묘한 기운... 넌 느껴지지 않아? 무지함은 때로 죄가 되기도 해. 당장 내 앞에서 사라져.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_home"
    },
    "after_dain_new": {
        name: "나",
        text: "(체육관으로 향하는 노을빛이 스며드는 창문 아래에서 한 소녀가 배구 연습을 하는 다인이 보인다. 그중에서도 유독 눈에 띄는 한 소녀가 있다.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        sunset: true,
        next: "after_dain_new_intro"
    },
    "after_dain_new_intro": {
        name: "???",
        text: "\"안녕! 나 배구부 다인이야. 너 오늘 전학 온 애 맞지?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        setFlag: "metDain",
        next: "after_dain_new_name_ask"
    },
    "after_dain_new_name_ask": {
        name: "다인",
        text: "\"그러고 보니 이름이 뭐야? 나만 성급하게 물어본 것 같네!\"",
        character: "assets/images/characters/dain_sweat.png",
        next: "after_dain_new_name_share"
    },
    "after_dain_new_name_share": {
        name: "나",
        text: "\"나 {name}이고 나 2학년 3반이야.\"",
        setFlag: "knowsName_Dain",
        next: "after_dain_2"
    },
    "after_dain": {
        name: "다인",
        text: "(체육관에 도착하자 다인이는 높게 뛰어올라 강력한 스파이크를 내리꽂고 있다. 그녀의 건강한 에너지가 주변을 밝히는 것 같다.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        sunset: true,
        next: "after_dain_2"
    },
    "after_dain_2": {
        name: "다인",
        text: "(연습을 잠시 멈춘 사이, 다인이는 나를 발견하고는 수건으로 땀을 닦으며 달려온다.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        next: "dain_free_talk"
    },
    "dain_free_talk": {
        type: "free_talk",
        name: "다인",
        text: "\"와, {name?}! 가까이서 보니까 더 반가운데? 나한테 궁금한 거 있어? 운동이라든가, 학교생활이라든가!\"",
        context: "방과 후 노을 지는 체육관, 연습을 마친 다인과 대화를 나누는 상황",
        personality: "털털하고 시원시원한 성격의 배구부 에이스. 운동을 사랑하며 주인공에게 호의적이고 에너지가 넘침.",
        character: "assets/images/characters/dain_nomal.png",
        next: "after_dain_3"
    },
    "after_dain_3": {
        name: "다인",
        text: "\"어이, {name?}! 잠깐만 기다려! 나 마지막 세트만 끝내고 같이 맛있는 거 먹으러 가자!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        choices: [
            { text: "좋아, 내가 응원할게! 파이팅!", next: "after_dain_cheer", stats: { Dain: { affinity: 10 } } },
            { text: "나도 연습 도와줄게. 공 던져줘!", next: "after_dain_help", stats: { Dain: { affinity: 15 } } },
            { text: "오늘은 좀 피곤한데, 그냥 집에 가면 안 돼?", next: "after_dain_tired", stats: { Dain: { affinity: -10 } } }
        ]
    },
    "after_dain_tired": {
        name: "다인",
        text: "(다인이는 살짝 아쉬운 표정을 짓더니 이내 고개를 끄덕인다.)",
        character: "assets/images/characters/dain_nomal.png",
        next: "after_dain_tired_2"
    },
    "after_dain_tired_2": {
        name: "다인",
        text: "\"아... 맞다. 전학 첫날이라 피곤하겠구나. 미안, 내가 너무 신났나 봐. 그래, 오늘은 이만 들어가 봐. 내일 봐!\"",
        character: "assets/images/characters/dain_nomal.png",
        next: "after_home"
    },
    "after_dain_help": {
        name: "다인",
        text: "(그녀의 눈이 반짝이며 나에게 공을 건넨다.)",
        character: "assets/images/characters/dain_laugh.png",
        next: "after_dain_help_2"
    },
    "after_dain_help_2": {
        name: "다인",
        text: "\"오! 도와주겠다고? 좋아! 그럼 네트 쪽으로 높게 띄워줘! 간다!\"",
        character: "assets/images/characters/dain_active.png",
        next: "after_dain_end"
    },
    "after_dain_cheer": {
        name: "다인",
        text: "(다인이는 쑥스러운 듯 코끝을 찡긋하며 웃는다.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_cheer_2"
    },
    "after_dain_cheer_2": {
        name: "다인",
        text: "\"뭐, 뭐야... 갑자기 그렇게 칭찬하면 부끄럽잖아! 딱히 네가 보고 있다고 열심히 하는 건 아니니까 착각하지 마. 그래도... 네가 봐주니까 좀 더 힘이 나는 것 같기도 하고...\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        next: "after_dain_end"
    },
    "after_dain_normal": {
        name: "다인",
        text: "(다인이는 장난스럽게 내 어깨를 툭 친다.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_normal_2"
    },
    "after_dain_normal_2": {
        name: "다인",
        text: "\"에이~ 아직은 잘 못하나 보네. 좋아. 이왕 김에 우리 연습 끝날 때까지 좀 기다려줄래? 같이 떡볶이라도 먹으러 가자!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_end"
    },
    "after_dain_end": {
        name: "나",
        text: "(다인의 연습이 끝날 때까지 체육관 스탠드에 앉아 그녀를 지켜보았다.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        next: "after_dain_end_2"
    },
    "after_dain_end_2": {
        name: "다인",
        text: "(연습을 마친 다인이는 거친 숨을 몰아쉬며 나에게 달려온다.) \"후아... 후아... 기다리게 해서 미안! 자, 약속했던 떡볶이 먹으러 가자!\"",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        setFlag: "datedDainDay1",
        next: "after_dain_tteokbokki"
    },
    "after_dain_tteokbokki": {
        name: "다인",
        text: "(김이 모락모락 나는 떡볶이를 크게 베어 물며 다인이는 행복한 미소를 짓는다.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "after_dain_tteokbokki_2"
    },
    "after_dain_tteokbokki_2": {
        name: "다인",
        text: "\"와, 역시 운동 끝나고 먹는 떡볶이가 최고라니까! 오늘 같이 와줘서 정말 고마워. 덕분에 평소보다 백 배는 더 맛있는 것 같아!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "after_dain_tteokbokki_3"
    },
    "after_dain_tteokbokki_3": {
        name: "다인",
        text: "\"우리 내일도.. 아니, 앞으로도 자주 같이 먹으러 오자! 약속이다?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "dain_contact_exchange"
    },
    "dain_contact_exchange": {
        name: "다인",
        text: "(다인이는 떡볶이 국물을 닦으며 장난스럽게 스마트폰을 흔들어 보인다.) \"야 {name?}! 우리 앞으로도 같이 맛있는 거 먹으러 다니려면 연락처는 있어야겠지? 번호 찍어줘!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        choices: [
            { text: "좋아! 다인이랑 맛집 탐방 다니면 재밌겠다.", next: "dain_contact_success", setFlags: ["has_number_dain", "has_any_contact"] },
            { 
                text: "번호 따는 김에.. 지금 바로 전화해도 돼?", 
                next: "dain_contact_call_fail",
                affinityChar: "Dain",
                affinityBranches: [
                    { minAffinity: 40, next: "dain_contact_call_success" }
                ],
                setFlags: ["has_number_dain", "has_any_contact"]
            },
            { text: "음.. 나중에 기회 되면 알려줄게.", next: "dain_contact_fail", stats: { Dain: { affinity: -10 } } }
        ]
    },
    "dain_contact_call_success": {
        name: "다인",
        text: "(다인이는 얼굴을 붉히며 당황한 듯 웃는다.) \"뭐, 뭐야! 갑자기... 내 목소리 듣고 싶다니... 너무 설레게 하는 거 아냐? 나 내일 연습 일찍 가야 하니까 너무 오래 하진 마!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shy.png",
        stats: { Dain: { affinity: 15 } },
        next: "after_home"
    },
    "dain_contact_call_fail": {
        name: "다인",
        text: "(다인이는 어이없다는 듯 웃음을 터뜨린다.) \"야, 너 진짜 웃긴다. 번호 받자마자 전화하니, 너무 서두르는 거 아냐? 일단 메시지부터 주고받으면서 친해지자고!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_nomal.png",
        stats: { Dain: { affinity: -5 } },
        next: "after_home"
    },
    "dain_contact_success": {
        name: "다인",
        text: "(다인이는 시원하게 웃으며 번호를 저장한다.) \"연락처 전송 완료! 내가 맛있는 곳 찾으면 바로 메시지 보낼 테니까 대기하고 있어!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        stats: { Dain: { affinity: 15 } },
        next: "after_home"
    },
    "dain_contact_fail": {
        name: "다인",
        text: "(다인이는 조금 의외라는 듯 입술을 삐죽이게 하더니 이내 씩씩하게 웃어넘긴다.) \"뭐야~ 튕기는 거야? 알았어, 알았어. 내가 더 노력해서 네 번호 따고 만다!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_nomal.png",
        night: true,
        next: "after_home"
    },
    "after_nurse": {
        name: "보건선생님",
        text: "(보건실 문을 열자, 선생님이 창가에서 차를 마시고 있다가 나를 보고 미소 짓는다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "after_nurse_2"
    },
    "after_nurse_new": {
        name: "나",
        text: "(나도 모르게 몸이 나른해져 보건실 쪽으로 발걸음을 옮겼다. 문을 열자 은은한 약초 향기와 함께 성숙한 분위기의 선생님이 나를 맞이한다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        sunset: true,
        next: "after_nurse_new_2"
    },
    "after_nurse_new_2": {
        name: "보건선생님",
        text: "\"어머, 처음 보는 얼굴이네? 오늘 전학 온 학생이니? 나는 보건 선생님이야. 어디가 아파서 온 걸까?\"",
        character: "assets/images/characters/nurse.png",
        setFlag: "metNurse",
        next: "after_nurse_new_name_ask"
    },
    "after_nurse_new_name_ask": {
        name: "보건선생님",
        text: "\"그러고 보니 이름이 뭐야? 선생님한테만 살짝 알려줄래?\"",
        character: "assets/images/characters/nurse.png",
        next: "after_nurse_new_name_share"
    },
    "after_nurse_new_name_share": {
        name: "나",
        text: "\"제 이름은 {name}이에요.\"",
        setFlag: "knowsName_Nurse",
        next: "nurse_free_talk_after_day1"
    },
    "after_nurse_2": {
        name: "보건선생님",
        text: "\"{name?}! 학교 가기 전에 나 보러 온 거니? 정말 착한 학생이네.\"",
        character: "assets/images/characters/nurse.png",
        next: "nurse_free_talk_after_day1"
    },
    "nurse_free_talk_after_day1": {
        type: "free_talk",
        name: "보건선생님",
        text: "\"자, 여기 앉으렴. 따뜻한 차 한 잔 줄게. 나랑 좀 더 이야기하고 갈래?\"",
        context: "방과 후 노을 지는 보건실, 학교 보건 선생님과 단둘이 대화를 나누는 상황",
        personality: "성숙하고 매혹적인 '누님' 스타일. 주인공을 귀여워하며 챙겨줌.",
        character: "assets/images/characters/nurse.png",
        next: "nurse_after_day1_contact"
    },
    "nurse_after_day1_contact": {
        name: "보건선생님",
        text: "\"벌써 가려고? 아쉽네... {name?}, 혹시 모르니까 내 번호 저장해둘래? 아프거나 고민 있으면 언제든 연락해.\"",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "네, 알려주세요!", next: "nurse_after_day1_contact_success", setFlags: ["has_number_nurse", "has_any_contact"] },
            { text: "아직은 좀 부담스러워요.", next: "nurse_after_day1_contact_fail", stats: { Nurse: { affinity: -5 } } }
        ]
    },
    "nurse_after_day1_contact_success": {
        name: "보건선생님",
        text: "\"후훗, 착하네. 그럼 나중에 밤에 연락할게? 잘 가, {name?}.\"",
        character: "assets/images/characters/nurse.png",
        stats: { Nurse: { affinity: 10 } },
        next: "after_home"
    },
    "nurse_after_day1_contact_fail": {
        name: "보건선생님",
        text: "\"어머, 튕기는 거야? 알았어. 나중에 마음 바뀌면 말해줘. 조심해서 들어가!\"",
        character: "assets/images/characters/nurse.png",
        next: "after_home"
    }
});



