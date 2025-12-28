if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

Object.assign(SCENARIO[1], {
    "lunch_time": {
        name: "나",
        text: "(오전 수업 끝! 드디어 기다리던 점심시간이다. 아이들이 급식실로 달려간다.)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "lunch_time_2"
    },
    "lunch_time_2": {
        name: "나",
        text: "(점심시간... 창밖 운동장에는 아이들이 뛰어놀고 있다. 나는 어떡할까?)",
        choices: [
            { text: "서연이에게 다가가 같이 점심 먹자고 제안한다.", next: "lunch_seoyeon" },
            { text: "혼자 학교를 둘러보며 조용한 곳에서 먹을 곳을 찾는다.", next: "lunch_alone" },
            { text: "체육관 쪽에서 들려오는 배구공 소리를 따라가 본다.", next: "lunch_dain" },
            { text: "몸이 좀 안 좋은 것 같아 보건실로 간다.", next: "lunch_nurse" }
        ]
    },
    "lunch_seoyeon": {
        name: "서연",
        text: "(서연이에게 다가가자 그녀가 환하게 웃으며 나를 반긴다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        setFlag: "metSeoyeon",
        next: "lunch_seoyeon_2"
    },
    "lunch_seoyeon_2": {
        name: "서연",
        text: "\"마침 너를 찾으려던 참이었어! 우리 옥상 비밀 장소에서 같이 먹을래?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "응! 서연이랑 같이 먹고 싶었어.", next: "rooftop_1", stats: { Seoyeon: { affinity: 10 } } },
            { text: "음.. 다른 애들이랑 먹기로 해서. (거절)", next: "lunch_alone", stats: { Seoyeon: { affinity: -15 } } },
            { text: "옥상? 귀찮게 거기까지 가야 해?", next: "rooftop_talk_rude", stats: { Seoyeon: { affinity: -25 } } }
        ]
    },
    "rooftop_1": {
        name: "서연",
        text: "(시원한 바람이 부는 옥상. 서연이는 정성스레 준비한 도시락을 꺼낸다.)",
        background: "assets/images/background/top_school.png",
        next: "rooftop_1_2"
    },
    "rooftop_1_2": {
        name: "서연",
        text: "(그녀가 젓가락을 건네며 수줍게 웃는데, 가슴이 두근거린다.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_1_2_2"
    },
    "rooftop_1_2_2": {
        name: "서연",
        text: "\"자, 이건 내가 오늘 좀 넉넉하게 준비한 도시락이야. 전학 첫날이라 급식이 입에 맞을지 모를 것 같아서.. 네 입맛에 맞을지 모르겠네.\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_1_3"
    },
    "rooftop_1_3": {
        name: "서연",
        text: "\"특히 이 문어 소시지는 내 야심작이야! 너 하나 먹어볼래?\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "와, 정말 맛있어 보여! 서연이는 요리 천재구나.", next: "rooftop_talk_food", stats: { Seoyeon: { affinity: 5 } } },
            { 
                text: "아... 해줘. (용기 내어 본다!)", 
                next: "rooftop_talk_ah_fail", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 40, next: "rooftop_talk_ah" }
                ],
                stats: { Seoyeon: { affinity: 5 } } 
            },
            { text: "이렇게 정성 가득한 도시락은 처음이야. 고마워.", next: "rooftop_talk_thanks", stats: { Seoyeon: { affinity: 10 } } },
            { text: "별로 맛없어 보이는데... 매점 갈걸.", next: "rooftop_talk_rude", stats: { Seoyeon: { affinity: -30 } } }
        ]
    },
    "rooftop_talk_ah_fail": {
        name: "서연",
        text: "(서연이의 표정이 순식간에 굳어진다. 당황한 듯 젓가락을 내려놓는다.) \"음.. 그건 좀... {name}, 우리 아직 그 정도로 친한 건 아니잖아. 장난이 과해.\"",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: -15 } },
        next: "rooftop_2"
    },
    "rooftop_talk_rude": {
        name: "서연",
        text: "(서연이의 손이 미세하게 떨린다. 억지로 미소 지으려 하지만 눈가가 촉촉해진다.)",
        character: "assets/images/characters/seyoun_sad.png",
        next: "rooftop_2"
    },
    "rooftop_talk_food": {
        name: "서연",
        text: "(그녀가 기쁜 듯 뺨을 붉힌다.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_talk_food_2"
    },
    "rooftop_talk_food_2": {
        name: "서연",
        text: "\"정말? 다행이다! 사실 누군가에게 내 요리를 대접하는 건 처음이라 조금 긴장했거든. 많이 먹어, 아직 많이 남았으니까!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_2"
    },
    "rooftop_talk_ah": {
        name: "서연",
        text: "(서연이의 얼굴이 빨개진다. 그녀가 조심스럽게 소시지를 내 입으로 가져온다.)",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "rooftop_talk_ah_2"
    },
    "rooftop_talk_ah_2": {
        name: "서연",
        text: "\"에, 뭐뭐뭐라고?! 너 정말... 그런 소리를 아무렇지도 않게... 좋아, 정말 못 말린다니까. 딱 이번 한 번뿐이야! 자.. 아..\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "rooftop_2"
    },
    "rooftop_talk_thanks": {
        name: "서연",
        text: "(그녀가 미소를 지으며 내 입가에 묻은 소스를 닦아준다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_talk_thanks_2"
    },
    "rooftop_talk_thanks_2": {
        name: "서연",
        text: "\"고맙긴.. 나야말로 같이 먹어줘서 고마워. 혼자 먹는 것보다 훨씬 맛있는 것 같아. 앞으로도 종종 이렇게 같이 먹어줄래?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_2"
    },
    "rooftop_2": {
        name: "서연",
        text: "(식사를 마치고 나란히 앉아 먼 하늘을 바라본다. 서연이가 조심스럽게 입을 연다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_2_2"
    },
    "rooftop_2_2": {
        name: "서연",
        text: "\"저기, {name}... 사실 나 오늘 너 처음 봤는데도 왠지 모르게 이야기를 참 편하게 하는 것 같아서 기뻐. 너는 어때?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_free_talk"
    },
    "rooftop_free_talk": {
        type: "free_talk",
        name: "서연",
        text: "\"후훗, 갑자기 너무 진지했나? 우리 좀 더 편하게 이야기하자. 너는 어떤 스타일의 사람을 좋아해?\"",
        context: "점심시간, 학교 옥상에서 단둘이 도시락을 먹고 난 뒤 평화롭고 로맨틱한 분위기에서 대화를 나누는 상황",
        personality: "평소보다 조금 더 대담하고 솔직해진 상태. 주인공의 취향이나 생각에 대해 깊이 알고 싶어 함.",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_choices"
    },
    "rooftop_choices": {
        name: "서연",
        text: "(그녀가 내 대답을 기다리며 눈을 반짝인다.)",
        choices: [
            { text: "나도 그래. 왠지 운명 같은 느낌이랄까?", next: "rooftop_destiny", stats: { Seoyeon: { affinity: 10 } } },
            { text: "아마 서연이가 너무 친절하게 대해줘서 그런 게 아닐까?", next: "rooftop_kind", stats: { Seoyeon: { affinity: 5 } } },
            { text: "글쎄, 아직은 잘 모르겠어. 하지만 너랑 있으면 편안해.", next: "rooftop_comfortable", stats: { Seoyeon: { affinity: 7 } } }
        ]
    },
    "rooftop_destiny": {
        name: "서연",
        text: "(그녀가 수줍게 웃으며 살며시 내 손 위에 자신의 손을 포갠다.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_destiny_2"
    },
    "rooftop_destiny_2": {
        name: "서연",
        text: "\"운명... 후훗, 참 듣기 좋다. 우리, 앞으로도 즐거운 추억 많이 만들자. 약속이야?\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_kind": {
        name: "서연",
        text: "(그녀가 살짝 토라진 듯 입술을 내민다.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "rooftop_kind_2"
    },
    "rooftop_kind_2": {
        name: "서연",
        text: "\"흥.. 너무 정석적인 답변이잖아. 그래도 틀린 말은 아니니까 봐줄게. 앞으로는 좀 더 솔직한 대답 기대할게?\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_comfortable": {
        name: "서연",
        text: "(그녀가 만족스러운 듯 고개를 끄덕인다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_comfortable_2"
    },
    "rooftop_comfortable_2": {
        name: "서연",
        text: "\"편안하다니 다행이야. 나도 너랑 있으면 학생회장이라는 짐을 잠시 내려놓을 수 있는 것 같아. 고마워, {name}.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "seyoun_contact_exchange"
    },
    "seyoun_contact_exchange": {
        name: "서연",
        text: "(서연이가 가방을 챙기다 말고 잠시 머뭇거리더니, 수줍게 스마트폰을 내민다.) \"저기.. 혹시 괜찮다면, 연락처 알려줄 수 있을까? 앞으로 도시락 메뉴 정할 때 물어보고 싶어서..\"",
        character: "assets/images/characters/seyoun_shy.png",
        choices: [
            { text: "물론이지! 나도 서연이랑 더 이야기하고 싶었어.", next: "seyoun_contact_success", setFlags: ["has_number_seyoun", "has_any_contact"] },
            { text: "미안, 아직은 좀 이른 것 같아.", next: "seyoun_contact_fail", stats: { Seoyeon: { affinity: -10 } } }
        ]
    },
    "seyoun_contact_success": {
        name: "서연",
        text: "(그녀가 환하게 웃으며 번호를 저장한다. 그녀의 손가락이 기쁜 듯 바쁘게 움직인다.) \"고마워! 그럼... 나중에 메시지 보낼게. 꼭 답장해줘야 해?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 15 } },
        next: "after_school_start"
    },
    "seyoun_contact_fail": {
        name: "서연",
        text: "(그녀가 조금 시무룩한 표정을 짓더니 이내 애써 미소 지으며 고개를 끄덕인다.) \"아.. 응, 미안! 내가 너무 조급했나 봐. 천천히 친해지면 되지, 그치?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_school_start"
    },
    "lunch_alone": {
        name: "나",
        text: "(혼자 조용히 복도를 걷다 보니, 도서관 별관에 도착했다. 그곳에서 창가에 기대어 책을 읽고 있는 소녀와 마주쳤다.)",
        background: "assets/images/background/library_old.png",
        character: null,
        next: "alone_2"
    },
    "alone_2": {
        name: "???",
        text: "(그녀가 읽고 있던 책에서 시선을 떼어 나를 빤히 바라본다. 그녀가 나지막한 목소리로 말을 건넨다.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "alone_2_2"
    },
    "alone_2_2": {
        name: "???",
        text: "\"...길을 잃었니? 여긴 학생들이 잘 안 오는 곳인데. 용케 여기까지 찾아왔네.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_intro"
    },
    "yuna_intro": {
        name: "???",
        text: "(그녀의 깊고 신비로운 보랏빛 눈동자가 나를 조용히 관찰한다. 마치 내 영혼까지 꿰뚫어 보려는 듯한 시선이다.)",
        next: "yuna_intro_name_ask"
    },
    "yuna_intro_name_ask": {
        name: "???",
        text: "\"난 '유나'라고 해. 너는... 이름이 뭐야?\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_intro_name_share"
    },
    "yuna_intro_name_share": {
        name: "나",
        text: "\"난 {name}이야. 오늘 전학 왔어.\"",
        setFlag: "knowsName_Yuna",
        next: "yuna_intro_2"
    },
    "yuna_intro_2": {
        name: "유나",
        text: "\"{name}... 후훗, 좋은 이름이네. 이 학교... 겉보기와는 많이 다르거든. 너한테서도.. 왠지 낯익은 분위기가 느껴져.\"",
        setFlag: "metYuna",
        next: "yuna_free_talk"
    },
    "yuna_free_talk": {
        type: "free_talk",
        name: "유나",
        text: "\"...나한테 궁금한 거라도 있어? 아니면 이 학교에 대해 알고 싶은 거야?\"",
        context: "조용한 도서관 별관, 신비롭고 차가운 분위기의 유나와 처음 만난 상황",
        personality: "신비롭고 차가우며 비밀이 많은 소녀. 주인공에게 묘한 흥미를 느끼고 있음.",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_choices"
    },
    "yuna_choices": {
        name: "유나",
        text: "(그녀의 보랏빛 눈동자가 나를 꿰뚫어 보는 듯하다.)",
        choices: [
            { text: "학교가 다르다니? 그게 무슨 소리야?", next: "yuna_secret", stats: { Yuna: { affinity: 8 } } },
            { text: "낯익다니... 나를 본 적이 있어?", next: "yuna_scent", stats: { Yuna: { affinity: 8 } } },
            { text: "넌 왠지 위험해 보여. 하지만 눈을 뗄 수가 없어.", next: "yuna_danger", stats: { Yuna: { affinity: 12 } } }
        ]
    },
    "yuna_secret": {
        name: "유나",
        text: "(그녀가 입가에 묘한 미소를 띠며 책을 덮는다. 그녀의 입술이 내 귓가에 가까이 다가와 속삭인다.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_secret_2"
    },
    "yuna_secret_2": {
        name: "유나",
        text: "\"후훗, 궁금하니? 하지만 비밀은 모르는 게 약일 수도 있어. 학교가 숨기려 하는 이야기들은... 알면 다칠 수도 있거든.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "yuna_scent": {
        name: "유나",
        text: "(그녀가 한 걸음 다가와 나를 빤히 바라본다. 그녀가 쓸쓸한 표정으로 중얼거린다.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_scent_2"
    },
    "yuna_scent_2": {
        name: "유나",
        text: "\"아니, 처음 봐. 하지만 그 눈동자 속에 담긴 '빛'... 참 탐나네. 이 학교의 무기력한 아이들과는 조금 달라 보여. 네가 앞으로 어떻게 변해갈지, 내가 계속 지켜봐도 될까?\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_school_start"
    },
    "yuna_danger": {
        name: "유나",
        text: "(그녀가 차가운 손가락으로 내 뺨을 살짝 스친다. 그녀가 내 눈을 빤히 바라본다. 묘한 미소를 짓는다.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_danger_2"
    },
    "yuna_danger_2": {
        name: "유나",
        text: "\"위험해 보인다니... 후훗, 정답이야. 하지만 위험한 걸 알면서도 다가오는 너 같은 사람, 나쁘지 않아. 네가 그 특별한 빛을 잃을 때까지... 곁에 있어줄게.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "lunch_store": {
        name: "나",
        text: "(매점에서 마지막 '초코 소라빵'을 쟁취했다! 승리자의 기분으로 빵을 크게 한입 베어 물자, 달콤함이 입안 가득 퍼진다.)",
        background: "assets/images/background/store.png",
        next: "lunch_store_2"
    },
    "lunch_store_2": {
        name: "나",
        text: "(기분 좋게 빵을 먹으며 돌아가는데 누군가와 어깨를 부딪혔다.)",
        next: "lunch_store_teacher"
    },
    "lunch_store_teacher": {
        name: "담임 선생님",
        text: "\"어, 미안해! ...어라, {name} 아니니? 너도 매점에 빵 사러 온 거야?\"",
        character: "assets/images/characters/teacher.png",
        next: "lunch_store_teacher_2"
    },
    "lunch_store_teacher_2": {
        name: "담임 선생님",
        text: "\"후훗, 그 빵 정말 맛있지. 나도 그거 사러 왔는데 한발 늦었네. 맛있게 먹으렴!\"",
        character: "assets/images/characters/teacher.png",
        stats: { Teacher: { affinity: 5 } },
        next: "after_school_start"
    },
    "lunch_sleep": {
        name: "나",
        text: "(책상에 엎드려 잠을 청한다. 창가로 들어오는 햇살이 등을 따뜻하게 데워준다.)",
        next: "lunch_sleep_2"
    },
    "lunch_sleep_2": {
        name: "나",
        text: "(꿈속에서 누군가 내 이름을 부르는 소리가 들렸다. 아주 그립고도 슬픈 목소리...)",
        next: "lunch_sleep_3"
    },
    "lunch_sleep_3": {
        name: "나",
        text: "(눈을 뜨자, 누군가 내 얼굴을 빤히 내려다보고 있었다.)",
        next: "lunch_sleep_seoyeon"
    },
    "lunch_sleep_seoyeon": {
        name: "서연",
        text: "\"아, 깼어? 미안... 너무 곤히 자길래 깨우기 미안해서.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "lunch_sleep_seoyeon_2"
    },
    "lunch_sleep_seoyeon_2": {
        name: "서연",
        text: "\"피곤해 보이는데 좀 더 자도 돼. 내가 망 봐줄게!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "after_school_start"
    },
    "lunch_dain": {
        name: "나",
        text: "(체육관 쪽에서 배구공 튀기는 소리가 들려온다. 나는 소리를 따라 체육관으로 향했다.)",
        background: "assets/images/background/playground.png",
        next: "lunch_dain_2"
    },
    "lunch_dain_2": {
        name: "???",
        text: "(체육관 문을 열자, 그곳에 그녀가 있었다. 그녀가 나를 발견하고는 환하게 웃으며 손을 흔든다.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        setFlag: "metDain",
        next: "lunch_dain_3"
    },
    "lunch_dain_3": {
        name: "???",
        text: "\"에이, 거기 너! 거기서 구경만 하지 말고 이리 와서 한판 붙자! 너 운동 좀 하게 생겼는데?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "dain_name_share"
    },
    "dain_name_share": {
        name: "나",
        text: "\"나? 난 {name}이야. 오늘 전학 왔어.\"",
        setFlag: "knowsName_Dain",
        next: "dain_name_share_2"
    },
    "dain_name_share_2": {
        name: "다인",
        text: "\"{name}? 멋진 이름이네! 난 배구부 다인이야. 우리 학교에서 나보다 점프력 좋은 사람은 없으니까 긴장하라고!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "lunch_dain_gym_2"
    },
    "lunch_dain_gym_2": {
        name: "다인",
        text: "\"자, 여기가 내 구역이야! {name}, 준비됐어? 봐주지 않을 거니까 각오하라고!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        setFlag: "metDain",
        choices: [
            { text: "좋아, 어디 한번 해보자!", next: "lunch_dain_play", stats: { Dain: { affinity: 10 } } },
            { text: "배구는 잘 못하는데... 가르쳐줄래?", next: "lunch_dain_teach", stats: { Dain: { affinity: 15 } } }
        ]
    },
    "lunch_dain_play": {
        name: "다인",
        text: "\"오! 그 기세야! 자, 간다! (다인이가 강력한 서브를 날린다. 나는 간신히 공을 받아냈다)\"",
        character: "assets/images/characters/dain_active.png",
        next: "after_school_start"
    },
    "lunch_dain_teach": {
        name: "다인",
        text: "\"에헤, 걱정 마! 이 다인 님이 기초부터 확실하게 가르쳐줄게. 자, 일단 자세부터 잡아볼까?\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "after_school_start"
    },
    "lunch_nurse": {
        name: "나",
        text: "(전학 첫날이라 그런지 긴장 탓에 머리가 조금 지끈거린다. 나는 조용히 보건실로 향했다.)",
        background: "assets/images/background/nurse_room.jpg",
        next: "lunch_nurse_2"
    },
    "lunch_nurse_2": {
        name: "???",
        text: "\"어머, 처음 보는 얼굴이네? 우리 학교에 이렇게 귀여운 학생이 있었나?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        next: "nurse_intro"
    },
    "nurse_intro": {
        name: "보건 선생님",
        text: "\"나는 이곳의 보건 교사야. 애들은 그냥 '선생님'이라고 부르지만.. 너한테는 특별히 내 이름을 알려줄 수도 있는데?\"",
        character: "assets/images/characters/nurse.png",
        setFlag: "metNurse",
        next: "nurse_name_share_pre"
    },
    "nurse_name_share_pre": {
        name: "나",
        text: "\"제 이름은 '{name}'이에요.\"",
        setFlag: "knowsName_Nurse",
        next: "nurse_name_share"
    },
    "nurse_name_share": {
        name: "보건 선생님",
        text: "\"{name}... 후훗, 이름만큼이나 눈빛이 참 맑구나. 어디가 아파서 온 거니? 아니면.. 전학 첫날이라 긴장해서 들른 걸까?\"",
        character: "assets/images/characters/nurse.png",
        next: "nurse_free_talk_day1"
    },
    "nurse_free_talk_day1": {
        type: "free_talk",
        name: "보건 선생님",
        text: "\"긴장하지 마. 여기서는 편하게 있어도 된단다. 나한테 궁금한 거라도 있니?\"",
        context: "보건실에서 처음 만난 보건 선생님과 대화를 나누는 상황. 선생님은 주인공에게 묘한 흥미를 느끼며 도발적인 태도를 보임.",
        personality: "성숙하고 매혹적인 '누님' 스타일. 도발적인 말로 주인공을 놀리는 것을 즐기지만 사실 누구보다 주인공을 아끼고 보호하려 함.",
        character: "assets/images/characters/nurse.png",
        next: "after_school_start"
    }
});



