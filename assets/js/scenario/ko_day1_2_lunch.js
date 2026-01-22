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
            { 
                text: "서연이에게 다가가 같이 점심 먹자고 제안한다.", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 40, next: "lunch_seoyeon_high" },
                    { minAffinity: 0, next: "lunch_seoyeon_normal_branch" },
                    { minAffinity: -100, next: "lunch_seoyeon_low" }
                ],
                next: "lunch_seoyeon_normal_branch" 
            },
            { text: "혼자 학교를 둘러보며 조용한 곳에서 먹을 곳을 찾는다.", next: "lunch_alone" },
            { text: "체육관 쪽에서 들려오는 배구공 소리를 따라가 본다.", next: "lunch_dain" },
            { text: "몸이 좀 안 좋은 것 같아 보건실로 간다.", next: "lunch_nurse" },
            { text: "매점에 가서 빵을 사 먹는다.", next: "lunch_store" },
            { text: "피곤하니까 교실에서 잠을 잔다.", next: "lunch_sleep" }
        ]
    },
    "lunch_seoyeon_high": {
        name: "서연",
        text: "(나를 발견하자마자 환하게 웃으며 달려온다. 반가움이 눈에 가득하다.) \"{name}! 한참 찾았잖아. 우리 같이 점심 먹으러 가자. 아주 특별한 곳으로 안내할게!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        setFlag: "met_seoyeon",
        next: "rooftop_1"
    },
    "lunch_seoyeon_low": {
        name: "서연",
        text: "(나를 보더니 살짝 어색한 미소를 짓는다.) \"아, {name}... 마침 잘 됐네. 선생님이 챙겨주라고 하셔서. 괜찮으면 옥상에서 먹을래? 조용하고 좋아.\"",
        character: "assets/images/characters/seyoun_pout.png",
        setFlag: "met_seoyeon",
        next: "lunch_seoyeon_2_normal"
    },
    "lunch_seoyeon_normal_branch": {
        name: "서연",
        text: "(서연에게 다가가자 그녀가 생긋 웃으며 고개를 끄덕인다.)",
        character: "assets/images/characters/seyoun_normal.png",
        setFlag: "met_seoyeon",
        branches: [
            { next: "lunch_seoyeon_2_study", condition: "personality_study" },
            { next: "lunch_seoyeon_2_party", condition: "personality_active" },
            { next: "lunch_seoyeon_2_normal" }
        ]
    },
    "lunch_seoyeon_2_study": {
        name: "서연",
        text: "\"전학생, 조금은 친해진 기분이네? 마침 너를 찾으려던 참이었어. 우리 옥상에서 같이 먹을래?\"",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { text: "웅! 서연이랑 먹고 싶었어.", next: "rooftop_1", stats: { Seoyeon: { affinity: 5 } } },
            { text: "미안, 오늘은 혼자 있고 싶네.", next: "lunch_alone", stats: { Seoyeon: { affinity: -10 } } },
            { text: "옥상? 귀찮게 왜 거기까지 가야 해?", next: "rooftop_talk_rude", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "lunch_seoyeon_2_party": {
        name: "서연",
        text: "\"오, 전학생! 벌써 우리 학교에 완벽 적응한 것 같은데? 우리 옥상 비밀 장소에서 같이 점심 어때?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        choices: [
            { text: "웅! 서연이랑 먹고 싶었어.", next: "rooftop_1", stats: { Seoyeon: { affinity: 5 } } },
            { text: "미안, 오늘은 혼자 있고 싶네.", next: "lunch_alone", stats: { Seoyeon: { affinity: -10 } } },
            { text: "옥상? 귀찮게 왜 거기까지 가야 해?", next: "rooftop_talk_rude", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "lunch_seoyeon_2_normal": {
        name: "서연",
        text: "\"마침 너를 찾으려던 참이었어! 우리 옥상 비밀 장소에서 같이 먹을래?\"",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { text: "웅! 서연이랑 먹고 싶었어.", next: "rooftop_1", stats: { Seoyeon: { affinity: 5 } } },
            { text: "미안, 오늘은 혼자 있고 싶네.", next: "lunch_alone", stats: { Seoyeon: { affinity: -10 } } },
            { text: "옥상? 귀찮게 왜 거기까지 가야 해?", next: "rooftop_talk_rude", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "rooftop_1": {
        name: "서연",
        text: "(시원한 바람이 부는 옥상. 서연이 정성스레 준비한 도시락을 꺼낸다.)",
        background: "assets/images/background/top_school.png",
        setFlag: "ate_lunch_seoyeon",
        next: "rooftop_1_2"
    },
    "rooftop_1_2": {
        name: "서연",
        text: "\"짜잔! 직접 만든 도시락이야. 사실... {name}, 네 입맛에 맞을지 몰라서 좀 걱정했어.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_1_3"
    },
    "rooftop_1_3": {
        name: "나",
        text: "(도시락을 한 입 먹어본다. 정성이 가득 담긴 따뜻한 맛이다.)",
        next: "rooftop_1_4"
    },
    "rooftop_1_4": {
        name: "나",
        text: "\"정말 맛있어! 이걸 직접 만든 거야? 대단하다...\"",
        next: "rooftop_1_5"
    },
    "rooftop_1_5": {
        name: "서연",
        text: "(내 칭찬에 서연이 기쁜 듯 배시시 웃는다.) \"후훗, 다행이다! 맛있게 먹어주니까 나도 기뻐.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "rooftop_talk_main"
    },
    "rooftop_talk_main": {
        text: "(함께 도시락을 먹으며 대화를 나눈다. 그녀가 수줍게 웃는데, 가슴이 두근거린다.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_normal.png",
        next: "rooftop_1_2_2"
    },
    "rooftop_1_2_2": {
        name: "서연",
        text: "\"맛있게 먹어줘서 기뻐! 아, 그리고 이것도 먹어봐. 이건 특별히 신경 써서 준비한 거야.\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_normal.png",
        next: "rooftop_1_2_3"
    },
    "rooftop_1_2_3": {
        name: "서연",
        text: "\"특히 이 문어 소시지는 내 야심작이야! 너 하나 먹어볼래?\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { text: "와, 정말 맛있어 보여! 서연이는 요리 천재구나.", next: "rooftop_talk_food", stats: { Seoyeon: { affinity: 3 } } },
            {
                text: "아... 해줘.",
                next: "rooftop_talk_ah_fail",
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 30, next: "rooftop_talk_ah" }
                ],
                stats: { Seoyeon: { affinity: 3 } }
            },
            { text: "이렇게 정성 가득한 도시락은 처음이야. 고마워.", next: "rooftop_talk_thanks", stats: { Seoyeon: { affinity: 5 } } },
            { text: "별로 맛없어 보이는데... 매점 갈걸.", next: "rooftop_talk_rude", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "rooftop_talk_ah_fail": {
        name: "서연",
        text: "(서연이의 표정이 순식간에 굳어진다. 당황한 듯 젓가락을 내려놓는다.) \"음.. 그건 좀... {name}, 우리 아직 그 정도로 친한 건 아니잖아. 장난이 과해.\"",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: -15 } },
        next: "rooftop_awkward"
    },
    "rooftop_awkward": {
        name: "나",
        text: "(분위기가 순식간에 어색해졌다. 우리는 한동안 말없이 도시락만 먹었다.)",
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
        character: "assets/images/characters/seyoun_normal.png",
        next: "rooftop_talk_thanks_2"
    },
    "rooftop_talk_thanks_2": {
        name: "서연",
        text: "\"고맙긴.. 나야말로 같이 먹어줘서 고마워. 혼자 먹는 것보다 훨씬 맛있는 것 같아. 앞으로도 종종 이렇게 같이 먹어줄래?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "rooftop_2"
    },
    "rooftop_2": {
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 0, next: "rooftop_2_normal" },
            { minAffinity: -100, next: "rooftop_2_low" }
        ],
        next: "rooftop_2_normal"
    },
    "rooftop_2_normal": {
        name: "서연",
        text: "(식사를 마치고 나란히 앉아 먼 하늘을 바라본다. 서연이가 조심스럽게 입을 연다.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "rooftop_2_2"
    },
    "rooftop_2_low": {
        name: "서연",
        text: "(식사를 마친 후, 서연이가 무거운 침묵 끝에 입을 연다. 그녀의 목소리에는 서먹함이 서려 있다.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "rooftop_2_2_low"
    },
    "rooftop_2_2_low": {
        name: "서연",
        text: "\"저기, {name}... 사실 나 오늘 너를 좀 더 알고 싶었는데, 생각보다 대화가 어렵네. 그래도 점심 같이 먹어줘서 고마워.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "rooftop_free_talk"
    },
    "rooftop_2_2": {
        name: "서연",
        text: "\"저기, {name}... 사실 나 오늘 너 처음 봤는데도 왠지 모르게 이야기를 참 편하게 하는 것 같아서 기뻐. 너는 어때?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "rooftop_free_talk"
    },
    "rooftop_free_talk": {
        type: "free_talk",
        name: "서연",
        text: "\"후훗, 갑자기 너무 진지했나? 우리 좀 더 편하게 이야기하자. 나한테 궁금한 거 없어?\"",
        context: "점심시간, 학교 옥상에서 단둘이 도시락을 먹고 난 뒤 평화롭고 로맨틱한 분위기에서 대화를 나누는 상황입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 서연이가 너랑 있으면 왠지 편하고 좋다며, 왜 그런 것 같은지 물어보는 상황으로 이어집니다. 대화의 마지막 턴에만 우리 사이의 특별한 느낌이나 편안함에 대해 언급하며 자연스럽게 질문을 던져주세요.",
        personality: "평소보다 조금 더 대담하고 솔직해진 상태. 주인공이 우리 관계를 어떻게 생각하는지, 왜 편안함을 느끼는지 알고 싶어 함.",
        character: "assets/images/characters/seyoun_shy.png",
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 25, next: "rooftop_choices_high" },
            { minAffinity: 0, next: "rooftop_choices" },
            { minAffinity: -100, next: "rooftop_choices_low" }
        ],
        next: "rooftop_choices"
    },
    "rooftop_choices_high": {
        name: "나",
        text: "(서연이와 대화를 나누다 보니 분위기가 묘해졌다. 그녀는 내 눈을 빤히 바라보며 살며시 미소 짓고 있다. 그녀가 나에게 너랑 있으면 왠지 편하고 좋다며, 왜 그런 것 같은지 물어왔다.)",
        character: "assets/images/characters/seyoun_shy2.png",
        choices: [
            { text: "운명 같은거 아닐까?", next: "rooftop_destiny_high", affinityChar: "Seoyeon" },
            { text: "아마 서연이가 너무 친절하게 대해줘서 그런 게 아닐까?", next: "rooftop_kind_high" },
            { text: "글쎄, 아직은 잘 모르겠어.", next: "rooftop_comfortable_high" }
        ]
    },
    "rooftop_choices_low": {
        name: "나",
        text: "(서연이의 표정이 어둡다. 대화가 잘 풀리지 않은 모양이다. 그녀는 조금 혼란스러운 듯 한숨을 내쉬더니, 그래도 나랑 있으면 편하고 좋은데 왜 그런 것 같은지 물어왔다.)",
        character: "assets/images/characters/seyoun_pout.png",
        choices: [
            { text: "운명 같은거 아닐까?", next: "rooftop_destiny_low", affinityChar: "Seoyeon" },
            { text: "아마 서연이가 너무 친절하게 대해줘서 그런 게 아닐까?", next: "rooftop_kind_low" },
            { text: "글쎄, 아직은 잘 모르겠어.", next: "rooftop_comfortable_low" }
        ]
    },
    "rooftop_choices": {
        name: "나",
        text: "(서연이와 즐겁게 대화를 마쳤다. 그녀는 내 대답을 기다리는 듯 눈을 반짝이며 나를 바라보고 있다. 그녀가 나에게 너랑 있으면 왠지 편하고 좋다며, 왜 그런 것 같은지 물어왔다.)",
        choices: [
            { text: "운명 같은거 아닐까?", next: "rooftop_destiny_normal" },
            { text: "아마 서연이가 너무 친절하게 대해줘서 그런 게 아닐까?", next: "rooftop_kind_normal" },
            { text: "글쎄, 아직은 잘 모르겠어.", next: "rooftop_comfortable_normal" }
        ]
    },
    "rooftop_destiny_high": {
        name: "서연",
        text: "(그녀가 얼굴을 붉히며 내 손을 꼭 잡는다. 손끝이 따뜻하게 맞닿는다.)",
        character: "assets/images/characters/seyoun_shy2.png",
        stats: { Seoyeon: { affinity: 7 } },
        next: "rooftop_destiny_high_2"
    },
    "rooftop_destiny_high_2": {
        name: "서연",
        text: "\"나도 그렇게 생각해... {name}(이)랑 이렇게 있는 거, 정말 꿈만 같아. 우리 앞으로도 계속 이렇게... 운명처럼 함께 할 수 있을까?\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_destiny_normal": {
        name: "서연",
        text: "(그녀가 수줍게 웃으며 살며시 내 손 위에 자신의 손을 포갠다.)",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "rooftop_destiny_normal_2"
    },
    "rooftop_destiny_normal_2": {
        name: "서연",
        text: "\"운명이라니... 후훗, 조금 간지러운 말이지만 나쁘지 않네. 나도 너랑 있으면 그런 기분이 들 때가 있거든.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_destiny_low": {
        name: "서연",
        text: "(그녀가 황급히 손을 빼며 당황한 표정을 짓는다.)",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: -10 } },
        next: "rooftop_destiny_low_2"
    },
    "rooftop_destiny_low_2": {
        name: "서연",
        text: "\"운명? 전학 첫날부터 그런 말을... {name}, 장난이 좀 심한 것 같아. 아직 우리 그럴 사이는 아니잖아.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_kind_high": {
        name: "서연",
        text: "(그녀가 살짝 눈물을 글썽이며 고맙다고 말한다.)",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "rooftop_kind_high_2"
    },
    "rooftop_kind_high_2": {
        name: "서연",
        text: "\"친절하게 대해줘서 고맙다니... 오히려 내가 고마워. 네가 내 호의를 기쁘게 받아줘서, 나도 정말 큰 힘이 됐거든.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_kind_low": {
        name: "서연",
        text: "(그녀가 한숨을 내쉬며 차갑게 대꾸한다.)",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: -5 } },
        next: "rooftop_kind_low_2"
    },
    "rooftop_kind_low_2": {
        name: "서연",
        text: "\"친절하게 대해줬으니까 편하다니... 그냥 호의를 당연하게 받아들이는 거 아냐? 조금 실망스러운 대답이네.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_kind_normal": {
        name: "서연",
        text: "(그녀가 수줍게 웃으며 고개를 끄덕인다.)",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "rooftop_kind_normal_2"
    },
    "rooftop_kind_normal_2": {
        name: "서연",
        text: "\"후훗, 모범생 같은 대답이네. 하지만 정답이야! 내가 널 편안하게 해 줄 수 있어서 다행이다.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_comfortable_high": {
        name: "서연",
        text: "(그녀가 기쁜 듯 내 어깨에 살짝 머리를 기댄다.)",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 6 } },
        next: "rooftop_comfortable_high_2"
    },
    "rooftop_comfortable_high_2": {
        name: "서연",
        text: "\"나도 그래. {name}랑 있으면 정말 마음이 놓여. 오랫동안 알고 지낸 사이처럼... 너도 그렇게 느껴줘서 정말 고마워.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_comfortable_low": {
        name: "서연",
        text: "(그녀가 씁쓸하게 웃으며 고개를 돌린다.)",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: 2 } },
        next: "rooftop_comfortable_low_2"
    },
    "rooftop_comfortable_low_2": {
        name: "서연",
        text: "\"잘 모르겠다니... 아직 나랑 있는 게 불편한 거야? 내가 좀 더 노력해야겠네.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_comfortable_normal": {
        name: "서연",
        text: "(그녀가 만족스러운 듯 고개를 끄덕인다.)",
        character: "assets/images/characters/seyoun_normal.png",
        stats: { Seoyeon: { affinity: 4 } },
        next: "rooftop_comfortable_normal_2"
    },
    "rooftop_comfortable_normal_2": {
        name: "서연",
        text: "\"편안하다니 다행이야. 나도 너랑 있으면 학생회장이라는 짐을 잠시 내려놓을 수 있는 것 같아. 고마워, {name}.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_comfortable": {
        name: "서연",
        text: "(그녀가 만족스러운 듯 고개를 끄덕인다.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "rooftop_comfortable_2"
    },
    "rooftop_comfortable_2": {
        name: "서연",
        text: "\"편안하다니 다행이야. 나도 너랑 있으면 학생회장이라는 짐을 잠시 내려놓을 수 있는 것 같아. 고마워, {name}.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "seyoun_contact_exchange"
    },
    "seyoun_contact_exchange": {
        type: "free_talk",
        name: "서연",
        text: "(서연이가 가방을 챙기다 말고 잠시 머뭇거리더니, 스마트폰을 내민다.)",
        character: "assets/images/characters/seyoun_normal.png",
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 15, next: "seyoun_contact_exchange_high" },
            { minAffinity: 0, next: "seyoun_contact_exchange_normal" },
            { minAffinity: -999, next: "seyoun_contact_exchange_low" }
        ],
        next: "seyoun_contact_exchange_normal"
    },
    "seyoun_contact_exchange_high": {
        name: "서연",
        text: "(서연이가 수줍게 스마트폰을 내민다.) \"저기.. 혹시 괜찮다면, 연락처 알려줄 수 있을까? 앞으로 도시락 메뉴 정할 때 물어보고 싶어서..\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 3 } },
        choices: [
            { text: "물론이지! 나도 서연이랑 더 이야기하고 싶었어.", next: "seyoun_contact_success", setFlags: ["has_number_seyoun", "has_any_contact"] },
            { text: "미안, 아직은 좀 이른 것 같아.", next: "seyoun_contact_fail", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "seyoun_contact_exchange_normal": {
        name: "서연",
        text: "\"저기.. 혹시 연락처 교환해도 될까? 학생회 일로 연락할 일이 있을 수도 있어서..\"",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { text: "물론이지! 나도 서연이랑 더 이야기하고 싶었어.", next: "seyoun_contact_success", setFlags: ["has_number_seyoun", "has_any_contact"] },
            { text: "미안, 아직은 좀 이른 것 같아.", next: "seyoun_contact_fail", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "seyoun_contact_exchange_low": {
        name: "서연",
        text: "(서연이가 내 눈치를 보며 말한다.) \"...저기, 혹시 학생회 일로 연락할 일 있을 수도 있는데, 번호 좀 알려줄 수 있어?\"",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { text: "응, 알겠어.", next: "seyoun_contact_success_cold", setFlags: ["has_number_seyoun", "has_any_contact"] },
            { text: "미안, 아직은 좀 이른 것 같아.", next: "seyoun_contact_fail", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "seyoun_contact_success_cold": {
        name: "서연",
        text: "(그녀가 번호를 저장한다.) \"고마워. 그럼... 필요할 때 연락할게.\"",
        character: "assets/images/characters/seyoun_normal.png",
        stats: { Seoyeon: { affinity: 2 } },
        next: "after_school_start"
    },
    "seyoun_contact_success": {
        name: "서연",
        text: "(그녀가 환하게 웃으며 번호를 저장한다. 그녀의 손가락이 기쁜 듯 바쁘게 움직인다.) \"고마워! 그럼... 나중에 메시지 보낼게. 꼭 답장해줘야 해?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 8 } },
        next: "after_school_start"
    },
    "seyoun_contact_fail": {
        name: "서연",
        text: "(그녀가 조금 시무룩한 표정을 짓더니 이내 애써 미소 지으며 고개를 끄덕인다.) \"아.. 응, 미안! 내가 너무 조급했나 봐. 천천히 친해지면 되지, 그치?\"",
        character: "assets/images/characters/seyoun_normal.png",
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
        character: "assets/images/characters/yuna_normal.png",
        next: "alone_2_2"
    },
    "alone_2_2": {
        name: "???",
        text: "\"...길을 잃었니? 여긴 학생들이 잘 안 오는 곳인데. 용케 여기까지 찾아왔네.\"",
        character: "assets/images/characters/yuna_normal.png",
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
        character: "assets/images/characters/yuna_normal.png",
        next: "yuna_intro_name_share"
    },
    "yuna_intro_name_share": {
        name: "나",
        text: "\"난 {name}(이)야. 오늘 전학 왔어.\"",
        setFlag: "knows_name_yuna",
        next: "yuna_intro_2"
    },
    "yuna_intro_2": {
        name: "유나",
        text: "\"{name}... 후훗, 좋은 이름이네. 이 학교... 겉보기와는 많이 다르거든. 너한테서도.. 왠지 낯익은 분위기가 느껴져.\"",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "met_yuna",
        next: "yuna_free_talk"
    },
    "yuna_free_talk": {
        type: "free_talk",
        name: "유나",
        text: "\"...나한테 궁금한 거라도 있어? 아니면 이 학교에 대해 알고 싶은 거야?\"",
        context: "조용한 도서관 별관, 신비롭고 차가운 분위기의 유나와 처음 만난 상황입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 유나가 자신이나 학교의 비밀에 대해 더 알고 싶은지 물어보는 상황으로 이어집니다. 대화의 마지막 턴에만 더 깊은 이야기를 나눌 준비가 되었는지 확인하는 태도를 보여주세요.",
        personality: "신비롭고 차가우며 비밀이 많은 소녀. 주인공에게 묘한 흥미를 느끼고 있음.",
        character: "assets/images/characters/yuna_normal.png",
        affinityChar: "Yuna",
        affinityBranches: [
            { minAffinity: 15, next: "yuna_choices_high" },
            { minAffinity: 0, next: "yuna_choices" },
            { minAffinity: -100, next: "yuna_choices_low" }
        ],
        next: "yuna_choices"
    },
    "yuna_choices_high": {
        name: "나",
        text: "(유나와 대화를 나누다 보니 그녀의 신비로운 분위기에 점점 빠져드는 기분이다. 그녀는 나를 빤히 바라보며 희미하게 미소 짓더니, 자신에 대해 더 알고 싶은지 물었다.)",
        character: "assets/images/characters/yuna_smile.png",
        choices: [
            { text: "학교가 다르다니? 그게 무슨 소리야?", next: "yuna_secret_high" },
            { text: "낯익다니... 나를 본 적이 있어?", next: "yuna_scent_high" },
            { text: "넌 왠지 위험해 보여. 하지만 눈을 뗄 수가 없어.", next: "yuna_danger_high" }
        ]
    },
    "yuna_choices_low": {
        name: "나",
        text: "(유나의 눈빛이 더욱 싸늘해졌다. 내 태도가 그녀의 심기를 건드린 모양이다. 그녀는 차가운 목소리로 경고하듯 말을 내뱉었다.)",
        character: "assets/images/characters/yuna_angry.png",
        choices: [
            { text: "학교가 다르다니? 그게 무슨 소리야?", next: "yuna_secret_low" },
            { text: "낯익다니... 나를 본 적이 있어?", next: "yuna_scent_low" },
            { text: "넌 왠지 위험해 보여. 하지만 눈을 뗄 수가 없어.", next: "yuna_danger_low" }
        ]
    },
    "yuna_choices": {
        name: "나",
        text: "(유나와의 대화가 일단락되었다. 그녀의 보랏빛 눈동자는 여전히 나를 꿰뚫어 보는 듯한 시선을 유지하고 있다.)",
        choices: [
            { text: "학교가 다르다니? 그게 무슨 소리야?", next: "yuna_secret_normal" },
            { text: "낯익다니... 나를 본 적이 있어?", next: "yuna_scent_normal" },
            { text: "넌 왠지 위험해 보여. 하지만 눈을 뗄 수가 없어.", next: "yuna_danger_normal" }
        ]
    },
    "yuna_secret_high": {
        name: "유나",
        text: "(그녀가 내 손등을 살짝 간질이며 신비스러운 미소를 짓는다.)",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 6 } },
        next: "yuna_secret_high_2"
    },
    "yuna_secret_high_2": {
        name: "유나",
        text: "\"그 눈빛... 정말 마음에 들어. 이 학교 아래 숨겨진 거대한 진실을 알게 되면 넌 어떤 표정을 지을까? 곧 알게 될 거야. 내가 직접 가르쳐줄 테니까.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "yuna_secret_low": {
        name: "유나",
        text: "(그녀가 비웃는 듯한 표정으로 나를 밀쳐낸다.)",
        character: "assets/images/characters/yuna_angry.png",
        next: "yuna_secret_low_2"
    },
    "yuna_secret_low_2": {
        name: "유나",
        text: "\"비밀? 너 같은 애가 감당할 수 있는 수준이 아냐. 괜히 쓸데없는 곳에 머리 들이밀지 말고, 조용히 학교생활이나 해.\"",
        character: "assets/images/characters/yuna_angry.png",
        next: "after_school_start"
    },
    "yuna_secret_normal": {
        name: "유나",
        text: "(그녀가 입가에 묘한 미소를 띠며 책을 덮는다. 그녀의 입술이 내 귓가에 가까이 다가와 속삭인다.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_secret_normal_2"
    },
    "yuna_secret_normal_2": {
        name: "유나",
        text: "\"후훗, 궁금하니? 하지만 비밀은 모르는 게 약일 수도 있어. 학교가 숨기려 하는 이야기들은... 알면 다칠 수도 있거든.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },


    "yuna_scent_high": {
        name: "유나",
        text: "(그녀가 내 얼굴 가까이 다가와 깊게 숨을 들이마신다.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_scent_high_2"
    },
    "yuna_scent_high_2": {
        name: "유나",
        text: "\"역시 느껴져... 네 영혼에서 나는 달콤한 향기. 오랫동안 기다려온 것 같아. {name}, 넌 생각보다 훨씬 더 특별한 존재일지도 몰라.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "yuna_scent_low": {
        name: "유나",
        text: "(그녀가 코를 찡긋하며 불쾌한 내색을 비친다.)",
        character: "assets/images/characters/yuna_angry.png",
        next: "yuna_scent_low_2"
    },
    "yuna_scent_low_2": {
        name: "유나",
        text: "\"착각이었나 보네. 평범한 아이들과 다를 바 없는 불쾌한 냄새뿐이야. 나를 아는 척하지 마.\"",
        character: "assets/images/characters/yuna_angry.png",
        next: "after_school_start"
    },
    "yuna_scent_normal": {
        name: "유나",
        text: "(그녀가 한 걸음 다가와 나를 빤히 바라본다. 그녀가 쓸쓸한 표정으로 중얼거린다.)",
        character: "assets/images/characters/yuna_normal.png",
        next: "yuna_scent_normal_2"
    },
    "yuna_scent_normal_2": {
        name: "유나",
        text: "\"아니, 처음 봐. 하지만 그 눈동자 속에 담긴 '빛'... 참 탐나네. 이 학교의 무기력한 아이들과는 조금 달라 보여. 네가 앞으로 어떻게 변해갈지, 내가 계속 지켜봐도 될까?\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "after_school_start"
    },


    "yuna_danger_high": {
        name: "유나",
        text: "(그녀가 매혹적으로 웃으며 내 턱끝을 살짝 들어올린다.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_danger_high_2"
    },
    "yuna_danger_high_2": {
        name: "유나",
        text: "\"위험한 걸 즐기는 타입이구나? 후훗, 좋아. 내가 널 얼마나 망가뜨릴 수 있을지 궁금해지네. 앞으로의 시간이 정말 기대돼.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "yuna_danger_low": {
        name: "유나",
        text: "(그녀가 싸늘한 눈빛으로 경고한다.)",
        character: "assets/images/characters/yuna_angry.png",
        next: "yuna_danger_low_2"
    },
    "yuna_danger_low_2": {
        name: "유나",
        text: "\"입 조심해. 죽음보다 더한 공포가 뭔지 알고 싶지 않으면. 나한테 서슴없이 다가오다간 뼈도 못 추릴 테니까.\"",
        character: "assets/images/characters/yuna_angry.png",
        next: "after_school_start"
    },
    "yuna_danger_normal": {
        name: "유나",
        text: "(그녀가 차가운 손가락으로 내 뺨을 살짝 스친다. 그녀가 내 눈을 빤히 바라본다. 묘한 미소를 짓는다.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_danger_normal_2"
    },
    "yuna_danger_normal_2": {
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
        name: "담임선생님",
        text: "\"어, 미안해! ...어라, {name} 아니니? 너도 매점에 빵 사러 온 거야?\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "lunch_store_teacher_2"
    },
    "lunch_store_teacher_2": {
        name: "담임선생님",
        text: "\"후훗, 그 빵 정말 맛있지. 나도 그거 사러 왔는데 한발 늦었네. 맛있게 먹으렴!\"",
        character: "assets/images/characters/teacher_normal.png",
        stats: { Teacher: { affinity: 3 } },
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
        text: "\"저기... {name}? 일어나. 수업 시작이야.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "lunch_sleep_seoyeon_2"
    },
    "lunch_sleep_seoyeon_2": {
        name: "서연",
        text: "\"너무 곤히 자길래 깨우기 미안했는데... 수업 놓치면 안 되잖아. 후훗, 이따 방과 후에 보자!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 3 } },
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
        text: "(체육관 문을 열자, 한 소녀가 배구 연습을 하고 있었다. 그녀가 나를 발견하고는 환하게 웃으며 손을 흔든다.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_normal.png",
        setFlag: "met_dain",
        branches: [
            { next: "lunch_dain_3_active", condition: "personality_active" },
            { next: "lunch_dain_3_normal" }
        ]
    },
    "lunch_dain_3_active": {
        name: "???",
        text: "\"에이, 거기 너! 아까 자기소개 때 봤어. 완전 텐션 높던데? 거기서 구경만 하지 말고 이리 와서 한판 붙자! 너 운동 좀 하게 생겼는데?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_normal.png",
        next: "dain_name_share"
    },
    "lunch_dain_3_normal": {
        name: "???",
        text: "\"에이, 거기 너! 거기서 구경만 하지 말고 이리 와서 한판 붙자! 너 운동 좀 하게 생겼는데?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_normal.png",
        next: "dain_name_share"
    },
    "dain_name_share": {
        name: "나",
        text: "\"나? 난 {name}(이)야. 오늘 전학 왔어.\"",
        setFlag: "knows_name_dain",
        next: "dain_name_share_2"
    },
    "dain_name_share_2": {
        name: "다인",
        text: "\"{name}? 멋진 이름이네! 난 배구부 다인이야. 우리 학교에서 나보다 점프력 좋은 사람은 없으니까 긴장하라고!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_normal.png",
        next: "lunch_dain_gym_2"
    },
    "lunch_dain_gym_2": {
        name: "다인",
        text: "\"자, 여기가 내 구역이야! {name}, 준비됐어? 봐주지 않을 거니까 각오하라고!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_normal.png",
        setFlag: "met_dain",
        choices: [
            { text: "좋아, 어디 한번 해보자!", next: "lunch_dain_play" },
            { text: "배구는 잘 못하는데... 가르쳐줄래?", next: "lunch_dain_teach" }
        ]
    },
    "lunch_dain_play": {
        name: "다인",
        text: "\"오! 그 기세야! 자, 간다! (다인이가 강력한 서브를 날린다. 나는 간신히 공을 받아냈다)\"",
        character: "assets/images/characters/dain_active.png",
        stats: { Dain: { affinity: 5 } },
        next: "lunch_dain_end"
    },
    "lunch_dain_teach": {
        name: "다인",
        text: "\"에헤, 걱정 마! 이 다인 님이 기초부터 확실하게 가르쳐줄게. 자, 일단 자세부터 잡아볼까?\"",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Dain: { affinity: 15 } },
        next: "lunch_dain_end"
    },
    "lunch_dain_end": {
        name: "나",
        text: "(그 뒤로 점심시간이 끝날 때까지 다인과 함께 땀을 흘렸다. 전학 첫날부터 이렇게 활기차게 보낼 줄은 몰랐는데... 어느덧 오후 수업도 모두 끝났다.)",
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
        character: "assets/images/characters/nurse_normal.png",
        branches: [
            { next: "nurse_intro", excludeCondition: "knows_name_nurse" },
            { next: "nurse_name_share_pre", condition: "knows_name_nurse" }
        ]
    },
    "nurse_intro": {
        name: "보건선생님",
        text: "\"나는 이곳의 보건 교사야. 애들은 그냥 '선생님'이라고 부르지만.. 너한테는 특별히 내 이름을 알려줄 수도 있는데?\"",
        character: "assets/images/characters/nurse_normal.png",
        setFlag: "met_nurse",
        next: "nurse_name_share_pre"
    },
    "nurse_name_share_pre": {
        name: "나",
        text: "\"제 이름은 '{name}'(이)에요.\"",
        setFlag: "knows_name_nurse",
        branches: [
            { next: "nurse_name_share_study", condition: "personality_study" },
            { next: "nurse_name_share_normal" }
        ]
    },
    "nurse_name_share_study": {
        name: "보건선생님",
        text: "\"{name}... 후훗, 이름만큼이나 눈빛이 참 맑구나. 아까 자기소개 때 보니까 완전 모범생 같던데? 공부하느라 머리가 아픈 거니? 아니면.. 전학 첫날이라 긴장해서 들른 걸까?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "nurse_free_talk_day1"
    },
    "nurse_name_share_normal": {
        name: "보건선생님",
        text: "\"{name}... 후훗, 이름만큼이나 눈빛이 참 맑구나. 어디가 아파서 온 거니? 아니면.. 전학 첫날이라 긴장해서 들른 걸까?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "nurse_free_talk_day1"
    },
    "nurse_free_talk_day1": {
        type: "free_talk",
        name: "보건선생님",
        text: "\"긴장하지 마. 여기서는 편하게 있어도 된단다. 나한테 궁금한 거라도 있니?\"",
        context: "보건실에서 처음 만난 보건선생님과 대화를 나누는 상황입니다. 선생님은 주인공에게 묘한 흥미를 느끼며 도발적인 태도를 보입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 점심시간이 종료되고 방과 후 상황으로 전환됩니다. 대화의 마지막 턴에만 이제 수업 들으러 가야 할 시간이라며 주인공을 배웅해 주세요.",
        personality: "성숙하고 매혹적인 '누님' 스타일. 도발적인 말로 주인공을 놀리는 것을 즐기지만 사실 누구보다 주인공을 아끼고 보호하려 함.",
        character: "assets/images/characters/nurse_normal.png",
        affinityChar: "Nurse",
        affinityBranches: [
            { minAffinity: 15, next: "nurse_day1_end_high" },
            { minAffinity: 0, next: "after_school_start" },
            { minAffinity: -100, next: "nurse_day1_end_low" }
        ],
        next: "after_school_start"
    },
    "nurse_day1_end_high": {
        name: "나",
        text: "(선생님과 대화하다 보니 어느새 수업 시간이 다 되었다. 선생님도 아쉬운 듯 나중에 꼭 다시 놀러 오라고 말씀하셨다. 이제 교실로 돌아가야겠다.)",
        character: "assets/images/characters/nurse_normal.png",
        next: "after_school_start"
    },
    "nurse_day1_end_low": {
        name: "나",
        text: "(선생님의 표정이 굳어졌다. 내 농담이 지나쳤던 모양이다. 선생님은 불쾌한 기색을 내비치며 얼른 교실로 돌아가라고 하셨다.)",
        character: "assets/images/characters/nurse_normal.png",
        next: "after_school_start"
    }
});



