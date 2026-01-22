if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

Object.assign(SCENARIO[1], {
    "start": {
        name: "나",
        text: "(따스한 햇살... 오늘부터 이 학교구나. 조금 긴장되는걸.)",
        background: "assets/images/background/school.png",
        bgm: "intro.mp3",
        character: null,
        next: "start_2"
    },
    "start_2": {
        name: "나",
        text: "(낯선 교복, 낯선 풍경... 하지만 왠지 좋은 일이 생길 것만 같아.)",
        next: "start_3"
    },
    "start_3": {
        name: "나",
        text: "(자, 가보자. 새로운 시작이야.)",
        next: "name_input_scene"
    },
    "name_input_scene": {
        type: "input",
        name: "시스템",
        text: "전학생, 당신의 이름은?",
        next: "start_4"
    },
    "start_4": {
        name: "???",
        text: "\"안녕? 못 보던 얼굴이네. 혹시 오늘 온다는... {name}?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "intro_1"
    },
    "intro_1": {
        name: "나",
        text: "(방긋 웃으며 말을 걸어오는 소녀. 은은한 샴푸 향기가 코끝을 스친다.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "intro_2"
    },
    "intro_2": {
        name: "나",
        text: "(눈이 마주치자 나도 모르게 심장이 덜컥한다. 너무 예쁘잖아...)",
        next: "intro_3"
    },
    "intro_3": {
        name: "서연",
        text: "\"학생회장 서연이야. 선생님 부탁으로 마중 나왔지. 잘 부탁해!\"",
        setFlags: ["met_seoyeon", "knows_name_seoyeon"],
        choices: [
            { text: "응, 잘 부탁해! 학교가 엄청 예쁘네.", next: "path_friendly_1", stats: { Seoyeon: { affinity: 3 } } },
            { text: "와... 진짜 예쁘다.", next: "path_blush_1", stats: { Seoyeon: { affinity: 10 } } },
            { text: "학생회장이 이렇게 예뻐도 돼? 반칙 아냐?", next: "path_tease_1", stats: { Seoyeon: { affinity: 7 } } },
            { text: "(눈이 부셔서 한동안 멍하니 바라본다.)", next: "path_silent_1", stats: { Seoyeon: { affinity: 5 } } },
            { text: "아, 그래? 근데 좀 비켜줄래?", next: "path_rude_1", stats: { Seoyeon: { affinity: -30 } } }
        ]
    },
    "path_rude_1": {
        name: "서연",
        text: "(서연의 눈이 커지더니, 이내 아랫입술을 꾹 깨문다.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "path_rude_1_2"
    },
    "path_rude_1_2": {
        name: "서연",
        text: "\"아... 미안. 방해했나 보네. 그래도 안내는 내 일이니까... 따라와.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "hallway_1"
    },
    "path_friendly_1": {
        name: "서연",
        text: "(그녀가 화사하게 웃자 주위가 밝아지는 느낌이다. 긴장이 조금 풀린다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "path_friendly_1_2"
    },
    "path_friendly_1_2": {
        name: "서연",
        text: "\"후훗, 역시? 처음엔 좀 복잡하지. 내가 완벽하게 가이드해줄게. 자, 따라와!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_1"
    },
    "path_tease_1": {
        name: "서연",
        text: "(그녀가 눈을 동그랗게 뜨더니 곧 장난스럽게 윙크한다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "path_tease_1_2"
    },
    "path_tease_1_2": {
        name: "서연",
        text: "\"어머, 첫날부터 작업이야? 합격점 줄게. 그럼 우리 '특별한' 전학생 소년, 따라와 보실까?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_1"
    },
    "path_blush_1": {
        name: "서연",
        text: "(서연의 얼굴이 순식간에 붉게 달아오른다. 시선을 피하며 머리칼을 만진다.)",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "path_blush_1_2"
    },
    "path_blush_1_2": {
        name: "서연",
        text: "\"그, 그렇게 갑자기... 반칙이야. 하여튼 전학생들은... 됐으니까 얼른 따라와!\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "hallway_1"
    },
    "path_silent_1": {
        name: "서연",
        text: "(그녀가 고개를 갸웃하며 내 얼굴 가까이 다가온다. 숨결이 느껴질 것만 같다.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "path_silent_1_2"
    },
    "path_silent_1_2": {
        name: "서연",
        text: "\"응? 왜 그래? 얼굴이 엄청 빨간데... 설마 벌써 나한테 반한 거야? 후훗.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_1"
    },
    "hallway_1": {
        name: "서연",
        text: "(서연이의 뒤를 따라 복도를 걷는다. 창밖으로 아이들의 활기찬 목소리가 들린다.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_back.png",
        next: "hallway_name_ask"
    },
    "hallway_name_ask": {
        name: "서연",
        text: "(서연이가 갑자기 멈춰 서더니 나를 돌아본다.) \"아, 그러고 보니 아까 내가 네 이름을 먼저 말해버렸네. {name}, 맞지? 다시 한번 정식으로 인사할게!\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_name_share"
    },
    "hallway_name_share": {
        name: "나",
        text: "\"응, 맞아. {name}(이)야. 아까는 정신이 없어서 제대로 인사를 못 했네. 잘 부탁해, 서연아.\"",
        setFlag: "knows_name_seoyeon",
        next: "hallway_name_share_2"
    },
    "hallway_name_share_2": {
        name: "서연",
        text: "\"{name}... 후훗, 좋은 이름이다! 그럼 이제부터 {name}이라고 부를게. 잘 부탁해, {name}!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_1_2"
    },
    "hallway_1_2": {
        name: "서연",
        text: "(그녀의 뒷모습을 보며 복도를 걷는다.)",
        character: "assets/images/characters/seyoun_back.png",
        next: "hallway_free_talk"
    },
    "hallway_free_talk": {
        type: "free_talk",
        name: "서연",
        text: "\"아, 그러고 보니 우리 통성명만 하고 제대로 대화는 못 했네? 궁금한 게 있으면 뭐든 물어봐!\"",
        context: "학교 복도를 함께 걸으며 전학생인 주인공과 가벼운 대화를 나누는 상황입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 서연이가 복도를 지나며 학교 시설들을 안내해 주는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 이동하자고 하거나 안내를 시작하겠다는 언급을 해주세요.",
        personality: "친절하고 상냥하며 책임감 강한 학생회장. 전학생인 주인공에게 호감을 느끼고 있음.",
        character: "assets/images/characters/seyoun_normal.png",
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 15, next: "hallway_1_3_high" },
            { minAffinity: 0, next: "hallway_1_3" },
            { minAffinity: -999, next: "hallway_1_3_low" }
        ],
        next: "hallway_1_3"
    },
    "hallway_1_3_high": {
        name: "나",
        text: "(서연과 수다를 떨다 보니 학교 안내가 시작됐다. 시간이 벌써 이렇게... 그녀와 있으면 즐거워.)",
        character: "assets/images/characters/seyoun_laugh.png",
        choices: [
            { 
                text: "학교도 멋지지만, 안내해주는 사람이 좋아서 더 멋져 보여.", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_flatter_high" },
                    { minAffinity: 0, next: "hallway_talk_flatter_normal" },
                    { minAffinity: -999, next: "hallway_talk_flatter_low" }
                ]
            },
            { 
                text: "서연아... 넌 정말 여신 같아. 목소리만 들어도 힐링 된다니까.", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_trap_high" },
                    { minAffinity: 0, next: "hallway_talk_trap_normal" },
                    { minAffinity: -999, next: "hallway_talk_trap_low" }
                ]
            },
            { 
                text: "(설명을 듣는 척하며 그녀의 옆모습을 살짝 훔쳐본다.)", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_listen_high" },
                    { minAffinity: 0, next: "hallway_talk_listen_normal" },
                    { minAffinity: -999, next: "hallway_talk_listen_low" }
                ]
            }
        ]
    },
    "hallway_1_3_low": {
        name: "나",
        text: "(서연이의 표정이 좋지 않다. 대화 도중 내가 무언가 실수를 한 모양이다. 그녀는 차가운 태도로 학교 안내를 시작했다.)",
        character: "assets/images/characters/seyoun_pout.png",
        choices: [
            { 
                text: "학교가 정말 활기차네. 서연이 너도 동아리 활동 하니?", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_club_high" },
                    { minAffinity: 0, next: "hallway_talk_club_normal" },
                    { minAffinity: -999, next: "hallway_talk_club_low" }
                ]
            },
            { 
                text: "시설도 좋지만 안내해주는 사람이 좋아서 더 멋져 보여.", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_flatter_high" },
                    { minAffinity: 0, next: "hallway_talk_flatter_normal" },
                    { minAffinity: -999, next: "hallway_talk_flatter_low" }
                ]
            },
            { 
                text: "세상에, 서연아... 넌 정말 여신 같아. 네 목소리만 들어도 천국에 온 것 같아.", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_trap_high" },
                    { minAffinity: 0, next: "hallway_talk_trap_normal" },
                    { minAffinity: -999, next: "hallway_talk_trap_low" }
                ]
            },
            { 
                text: "(조용히 그녀의 설명을 경청하며 걷는다.)", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_listen_high" },
                    { minAffinity: 0, next: "hallway_talk_listen_normal" },
                    { minAffinity: -999, next: "hallway_talk_listen_low" }
                ]
            }
        ]
    },
    "hallway_1_3": {
        name: "나",
        text: "(서연이의 안내를 받으며 복도를 걷기 시작했다. 그녀는 학교 곳곳을 친절하게 설명해주기 시작했다.)",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { 
                text: "학교가 정말 활기차네. 서연이 너도 동아리 활동 하니?", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_club_high" },
                    { minAffinity: 0, next: "hallway_talk_club_normal" },
                    { minAffinity: -999, next: "hallway_talk_club_low" }
                ]
            },
            { 
                text: "시설도 좋지만 안내해주는 사람이 좋아서 더 멋져 보여.", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_flatter_high" },
                    { minAffinity: 0, next: "hallway_talk_flatter_normal" },
                    { minAffinity: -999, next: "hallway_talk_flatter_low" }
                ]
            },
            { 
                text: "세상에, 서연아... 넌 정말 여신 같아. 네 목소리만 들어도 천국에 온 것 같아.", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_trap_high" },
                    { minAffinity: 0, next: "hallway_talk_trap_normal" },
                    { minAffinity: -999, next: "hallway_talk_trap_low" }
                ]
            },
            { 
                text: "(조용히 그녀의 설명을 경청하며 걷는다.)", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_listen_high" },
                    { minAffinity: 0, next: "hallway_talk_listen_normal" },
                    { minAffinity: -999, next: "hallway_talk_listen_low" }
                ]
            }
        ]
    },
    "hallway_talk_trap_high": {
        name: "서연",
        text: "(서연이가 당황한 듯 멈춰 서서 나를 빤히 바라본다. 그녀의 얼굴이 살짝 붉어지지만, 곧 장난기 섞인 미소를 짓는다.)",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 7 } },
        next: "hallway_talk_trap_high_2"
    },
    "hallway_talk_trap_high_2": {
        name: "서연",
        text: "\"어머, {name}(은)는 겉모습만 보고 사람을 판단하는 스타일인가 보네? 후훗, 그래도 고마워. 여신이라니... 조금 기쁘기도 하고. 하지만 장난이 너무 심하면 못 써!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_2"
    },
    "hallway_talk_trap_low": {
        name: "서연",
        text: "(서연이가 불쾌한 기색을 숨기지 않으며 걸음을 멈춘다. 그녀의 눈빛이 싸늘하게 식어있다.)",
        character: "assets/images/characters/seyoun_angry.png",
        stats: { Seoyeon: { affinity: -10 } },
        next: "hallway_talk_trap_low_2"
    },
    "hallway_talk_trap_low_2": {
        name: "서연",
        text: "\"음... 뭐, 칭찬인 건 알겠는데... 조금 과하지 않니? 우리 아직 처음 만났잖아. 장난은 좀 적당히 해줘.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "hallway_2"
    },
    "hallway_talk_trap_normal": {
        name: "서연",
        text: "(서연이가 당황한 듯 멈춰 서서 나를 빤히 바라본다. 그녀의 눈빛이 조금 차가워진다.)",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: -5 } },
        next: "hallway_talk_trap_normal_2"
    },
    "hallway_talk_trap_normal_2": {
        name: "서연",
        text: "\"음.. 뭐, 고맙긴 한데... 그런 말은 좀 부담스럽네. 우리 아직 만난 지 얼마 안 됐잖아? 장난이 좀 과한 것 같아.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_2"
    },
    "hallway_talk_club_high": {
        name: "서연",
        text: "(그녀가 눈을 반짝이며 즐거운 듯 나를 바라본다. 우리가 비슷한 관심사를 가졌을지도 모른다는 기대감이 엿보인다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "hallway_talk_club_high_2"
    },
    "hallway_talk_club_high_2": {
        name: "서연",
        text: "\"응! 나는 학생회 활동도 하지만 사실 원예부 소속이기도 해. 꽃을 가꾸는 걸 좋아하거든. {name}(은)는 꽃 좋아하니? 나중에 시간 되면 우리 온실에도 꼭 놀러 와! 내가 특별히 안내해줄게.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_2"
    },
    "hallway_talk_club_low": {
        name: "서연",
        text: "(그녀가 사무적인 태도로 고개를 끄덕인다. 표정에는 아무런 감정도 실려있지 않다.)",
        character: "assets/images/characters/seyoun_normal.png",
        stats: { Seoyeon: { affinity: -2 } },
        next: "hallway_talk_club_low_2"
    },
    "hallway_talk_club_low_2": {
        name: "서연",
        text: "\"응. 학생회랑 원예부 활동을 병행하고 있어. 질문은 그것뿐이니? 그럼 계속 안내할게.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_2"
    },
    "hallway_talk_club_normal": {
        name: "서연",
        text: "(그녀가 반가운 듯 나를 바라본다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "hallway_talk_club_normal_2"
    },
    "hallway_talk_club_normal_2": {
        name: "서연",
        text: "\"응! 나는 학생회 활동도 하지만 사실 원예부 소속이기도 해. 꽃을 가꾸는 걸 좋아하거든. 흙을 만지고 있으면 마음이 편안해지거든. 나중에 시간 되면 우리 온실에도 놀러 와!\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_2"
    },
    "hallway_talk_flatter_high": {
        name: "서연",
        text: "(서연이가 정말 기쁜 듯 뺨을 붉히며 배시시 웃는다. 그녀의 눈에 나를 향한 호감이 가득 담겨있다.)",
        character: "assets/images/characters/seyoun_shy2.png",
        stats: { Seoyeon: { affinity: 8 } },
        next: "hallway_talk_flatter_high_2"
    },
    "hallway_talk_flatter_high_2": {
        name: "서연",
        text: "\"정말... 너는 어쩜 말을 그렇게 예쁘게 하니? 사실 전학생인 네가 잘 적응할 수 있을지 걱정했는데, 오히려 내가 위로받는 기분이야. 고마워, {name}. 너랑 있으면 왠지 마음이 정말 편안해져.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_2"
    },
    "hallway_talk_flatter_low": {
        name: "서연",
        text: "(그녀가 싸늘한 표정으로 나를 슬쩍 훑어본다. 입가는 비웃는 듯 살짝 뒤틀려있다.)",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: -5 } },
        next: "hallway_talk_flatter_low_2"
    },
    "hallway_talk_flatter_low_2": {
        name: "서연",
        text: "\"말은 번지르르하게 잘하네. 누구나 할 수 있는 칭찬은 됐어. 지금은 학교 안내 중이니까 내 뒤나 잘 따라와.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "hallway_2"
    },
    "hallway_talk_flatter_normal": {
        name: "서연",
        text: "(그녀가 쑥스러운 듯 뺨을 붉히며 대답한다.)",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "hallway_talk_flatter_normal_2"
    },
    "hallway_talk_flatter_normal_2": {
        name: "서연",
        text: "\"정말... 너는 말을 참 예쁘게 하는구나. 사실 학생회장이라는 자리 때문에 늘 긴장하고 있는데, 너랑 있으면 왠지 마음이 놓여. 나도 모르게 어리광 부리고 싶어질지도 몰라... 후훗, 농담이야.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_2"
    },
    "hallway_talk_listen_high": {
        name: "서연",
        text: "(그녀가 신이 나서 눈을 반짝이며 설명을 이어간다. 내 반응 하나하나에 즐거워하는 모습이다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "hallway_talk_listen_high_2"
    },
    "hallway_talk_listen_high_2": {
        name: "서연",
        text: "\"와, 내 설명을 이렇게 진지하게 들어주다니 정말 감동이야! {name}(은)는 정말 다정하고 성실한 사람인 것 같아. 안내하는 보람이 느껴진다니까! 궁금한 게 더 있으면 언제든 물어봐!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_2"
    },
    "hallway_talk_listen_low": {
        name: "서연",
        text: "(그녀가 기계적으로 설명을 이어간다. 나를 쳐다보지도 않고 허공을 향해 말을 내뱉는 듯한 느낌이다.)",
        character: "assets/images/characters/seyoun_normal.png",
        stats: { Seoyeon: { affinity: -5 } },
        next: "hallway_talk_listen_low_2"
    },
    "hallway_talk_listen_low_2": {
        name: "서연",
        text: "\"대충 알아들었니? 그럼 다음 장소로 이동할게. 멍하니 있지 말고 잘 따라와.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_2"
    },
    "hallway_talk_listen_normal": {
        name: "서연",
        text: "(그녀가 신이 나서 설명을 이어간다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 2 } },
        next: "hallway_talk_listen_normal_2"
    },
    "hallway_talk_listen_normal_2": {
        name: "서연",
        text: "\"내 설명을 이렇게 잘 들어주니 정말 고마워. {name}, 참 성실한 사람인 것 같네! 이런 태도라면 학교생활에 금방 적응할 거야.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_2"
    },
    "hallway_2": {
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 0, next: "hallway_2_normal" },
            { minAffinity: -100, next: "hallway_2_low" }
        ],
        next: "hallway_2_normal"
    },
    "hallway_2_normal": {
        name: "서연",
        text: "(그녀가 갑자기 멈춰 서서 나를 돌아본다.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_2_2"
    },
    "hallway_2_low": {
        name: "서연",
        text: "(서연이가 앞서 걷다가 갑자기 멈춰 서더니, 차가운 눈빛으로 나를 돌아본다.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "hallway_2_2_low"
    },
    "hallway_2_2_low": {
        name: "서연",
        text: "(그녀의 시선에서 거리감이 느껴진다.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "hallway_2_3_low"
    },
    "hallway_2_3_low": {
        name: "서연",
        text: "\"전학 첫날부터 그런 식이면 곤란해. 최소한의 예의는 지켜줬으면 좋겠어.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "hallway_2_2"
    },
    "hallway_2_2": {
        name: "서연",
        text: "(그녀가 내 눈을 뚫어지게 쳐다본다.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_2_3"
    },
    "hallway_2_3": {
        name: "서연",
        text: "\"너는 어떤 동아리에 관심 있어? 우리 학생회도 항상 새로운 인재를 환영하고 있거든. 만약 네가 들어온다면.. 내가 직접 업무를 가르쳐줄 수도 있어.\"",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { text: "학생회에 들어가면 너랑 매일 같이 있을 수 있는 거야? 그럼 무조건 신청할게!", next: "path_flirt_2", stats: { Seoyeon: { affinity: 5 } } },
            { text: "동아리보다는... 서연이 너에 대해 더 알고 싶은데?", next: "path_direct_2", stats: { Seoyeon: { affinity: 6 } } },
            { text: "아직은 잘 모르겠어. 학교생활에 좀 적응하고 나서 결정할게.", next: "path_normal_2", stats: { Seoyeon: { affinity: -10 } } },
            { text: "귀찮게 동아리는 무슨... 그냥 혼자 있을래.", next: "path_rude_2", stats: { Seoyeon: { affinity: -40 } } }
        ]
    },
    "path_rude_2": {
        name: "서연",
        text: "(그녀가 실망한 기색을 감추지 못한다. 어깨가 조금 처진 것 같다.)",
        character: "assets/images/characters/seyoun_pout.png",
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 25, next: "classroom_1_1_high" },
            { minAffinity: 0, next: "classroom_1_1" },
            { minAffinity: -100, next: "classroom_1_1_low" }
        ],
        next: "classroom_1_1"
    },
    "path_flirt_2": {
        name: "서연",
        text: "(서연이의 얼굴이 다시 한번 붉어진다. 당황해서 시선을 피하면서도 입가에는 옅은 미소가 번진다. 그녀의 손끝이 교복 치맛자락을 만지작거린다. 그녀가 수줍은 듯 발끝으로 바닥을 톡톡 친다.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "path_flirt_2_2"
    },
    "path_flirt_2_2": {
        name: "서연",
        text: "\"에, 매일이라니.. 업무가 얼마나 많은데! 그래도 네가 들어온다면.. 나도 조금은 즐거울지도 모르겠네. 기대하고 있을게?\"",
        character: "assets/images/characters/seyoun_shy.png",
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 25, next: "classroom_1_1_high" },
            { minAffinity: 0, next: "classroom_1_1" },
            { minAffinity: -100, next: "classroom_1_1_low" }
        ],
        next: "classroom_1_1"
    },

    "path_normal_2": {
        name: "서연",
        text: "(그녀가 고개를 끄덕이며 다시 앞장서 걷기 시작한다. 조금은 아쉬운 기분이 드는 걸.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_back.png",
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 25, next: "classroom_1_1_high" },
            { minAffinity: 0, next: "classroom_1_1" },
            { minAffinity: -100, next: "classroom_1_1_low" }
        ],
        next: "classroom_1_1"
    },
    "path_direct_2": {
        name: "서연",
        text: "(그녀가 멍하니 나를 바라보다가, 이내 맑고 고운 웃음을 터뜨린다. 그 웃음소리가 마치 은방울 소리처럼 복도에 울려 퍼진다. 그녀의 눈가에 맺힌 작은 눈물이 햇빛에 반짝인다. 그녀가 배를 잡고 한참을 웃는데...)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "path_direct_2_2"
    },
    "path_direct_2_2": {
        name: "서연",
        text: "\"후훗, 너 정말 솔직하구나? 나에 대해서는.. 글쎄, 그건 네가 앞으로 어떻게 하느냐에 따라 알려줄 수도 있고, 아닐 수도 있어. 기대해볼게!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 25, next: "classroom_1_1_high" },
            { minAffinity: 0, next: "classroom_1_1" },
            { minAffinity: -100, next: "classroom_1_1_low" }
        ],
        next: "classroom_1_1"
    },
    "classroom_1_1_high": {
        name: "서연",
        text: "(교실 문 앞에 도착하자 서연이가 내 손을 살포시 맞잡는다. 그녀의 부드러운 감촉에 심장이 쿵쾅거리기 시작한다.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_shy.png",
        next: "classroom_1_2_high"
    },
    "classroom_1_2_high": {
        name: "서연",
        text: "(서연이가 고개를 살짝 숙여 내 귓가에 속삭인다. 달콤한 숨결이 간지럽게 느껴진다.) \"{name}, 너무 긴장하지 마. 내가 항상 네 옆에 있을 거니까. 넌 잘할 수 있어.\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "classroom_1_3_high"
    },
    "classroom_1_3_high": {
        name: "서연",
        text: "\"자, 우리 반이야. ...이건 비밀인데, 선생님께 부탁해서 내 옆자리로 옮겨뒀어. 조금이라도 빨리, 너랑 친해지고 싶어서.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "classroom_2"
    },
    "classroom_1_1_low": {
        name: "서연",
        text: "(교실 문 앞에 도착하자 서연이가 나보다 앞서가며 거리를 둔다. 그녀의 뒷모습이 어쩐지 차갑게만 느껴진다.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_back.png",
        next: "classroom_1_2_low"
    },
    "classroom_1_2_low": {
        name: "서연",
        text: "(그녀가 말없이 문 옆 표지판을 턱 끝으로 가리킨다. 나를 쳐다보지도 않는 태도에 마음 한구석이 서늘해진다.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "classroom_1_3_low"
    },
    "classroom_1_3_low": {
        name: "서연",
        text: "\"여기가 2학년 3반이야. 선생님이 안에서 기다리고 계실 거야. 전학 첫날부터 늦어서 찍히지 말고 어서 들어가 봐.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "classroom_2"
    },
    "classroom_1_1": {
        name: "서연",
        text: "(교실 문 앞에 도착했다. 안쪽에서 아이들의 웅성거리는 소리와 웃음소리가 들려온다. 서연이가 내 어깨를 가볍게 두드리며 응원해준다.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_normal.png",
        next: "classroom_1_2"
    },
    "classroom_1_2": {
        name: "서연",
        text: "(그녀의 손길이 닿은 곳이 화끈거린다. 그녀가 내 눈을 보며 작게 파이팅을 외친다.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "classroom_1_3"
    },
    "classroom_1_3": {
        name: "서연",
        text: "\"자, 여기가 네가 머물게 될 2학년 3반이야. 긴장하지 마. 내가 바로 옆에 있으니까, 넌 그냥 평소대로 하면 돼. 알았지?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "classroom_2"
    },
    "classroom_2": {
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 25, next: "classroom_2_high" },
            { minAffinity: 0, next: "classroom_2_normal" },
            { minAffinity: -100, next: "classroom_2_low" }
        ],
        next: "classroom_2_normal"
    },
    "classroom_2_normal": {
        name: "나",
        text: "(교탁 앞에 서자 수십 개의 시선이 일제히 나에게 꽂힌다. 호기심 어린 눈빛, 경계하는 눈빛... 서연이는 내 옆에서 미소 지으며 나를 지켜보고 있다.)",
        background: "assets/images/background/room_school.png",
        bgm: "daily.mp3",
        characters: {
            left: "assets/images/characters/teacher_normal.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        setFlag: "met_teacher",
        next: "classroom_2_2"
    },
    "classroom_2_high": {
        name: "나",
        text: "(교탁 앞에 서자 수십 개의 시선이 꽂힌다. 서연이는 내 옆에서 든든하게 미소 지으며 나를 응원해주고 있다.)",
        background: "assets/images/background/room_school.png",
        bgm: "daily.mp3",
        characters: {
            left: "assets/images/characters/teacher_normal.png",
            right: "assets/images/characters/seyoun_laugh.png"
        },
        setFlag: "met_teacher",
        next: "classroom_2_2"
    },
    "classroom_2_low": {
        name: "나",
        text: "(교탁 앞에 서자 수십 개의 시선이 꽂힌다. 서연이는 나에게서 조금 떨어진 곳에 차가운 표정으로 서 있다.)",
        background: "assets/images/background/room_school.png",
        bgm: "daily.mp3",
        characters: {
            left: "assets/images/characters/teacher_normal.png",
            right: "assets/images/characters/seyoun_pout.png"
        },
        setFlag: "met_teacher",
        next: "classroom_2_2"
    },
    "classroom_2_2": {
        name: "담임선생님",
        text: "(교실 안의 공기가 무겁게 느껴진다. 담임선생님이 교탁을 탁탁 치며 주의를 집중시킨다.)",
        character: "assets/images/characters/teacher_normal.png",
        next: "teacher_free_talk"
    },
    "teacher_free_talk": {
        type: "free_talk",
        name: "담임선생님",
        text: "\"자, 다들 전학생한테 관심이 아주 많네. 긴장되겠지만 다들 좋은 아이들이니까 너무 걱정하지 마. 자기소개 하기 전에 나한테 궁금한 거라도 있니?\"",
        context: "장소: 2학년 3반 교실 안 교탁 앞. 상황: 담임선생님이 전학생인 주인공을 학생들에게 소개하기 직전의 짧은 대기 시간. 수십 명의 학생들이 우리를 지켜보고 있지만, 이 대화는 오직 주인공과 담임선생님 사이의 대화여야 합니다. 주인공이 학생들 전체에게 인사나 자기소개를 하는 것은 이 대화가 끝난 '이후'의 정식 이벤트이므로, 지금은 절대로 학생들에게 인사를 시키거나 자기소개를 하도록 유도하지 마세요. 오직 선생님과 주인공 사이의 개인적인 질문이나 학교생활 조언, 첫인상 등에 대해서만 이야기하세요. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화의 마지막 턴에만 이제 학생들에게 정식으로 소개해주겠다고 말하며 대화를 마무리해 주세요.",
        personality: "공과 사가 뚜렷한 전문적인 교사지만 사실 허당기가 있고 주인공의 예상치 못한 어른스러운 모습에 가슴 설레어함. 은근히 주인공에게 기대고 싶어 하는 '갭모에'가 있음.",
        character: "assets/images/characters/teacher_smile.png",
        affinityChar: "Teacher",
        affinityBranches: [
            { minAffinity: 10, next: "classroom_2_3_high" },
            { minAffinity: -5, next: "classroom_2_3" },
            { minAffinity: -100, next: "classroom_2_3_low" }
        ],
        next: "classroom_2_3"
    },
    "classroom_2_3_high": {
        name: "나",
        text: "(선생님과 대화를 나누며 긴장을 풀 수 있었다. 선생님도 나를 좋게 봐주신 것 같아 다행이다. 이제 아이들 앞에서 자기소개를 할 차례다.)",
        character: "assets/images/characters/teacher_smile.png",
        choices: [
            { text: "제 이름은 '{name}'입니다. 잘 부탁드려요!", next: "teacher_name_share_high", setFlag: "knows_name_teacher", stats: { Teacher: { affinity: 15 }, Seoyeon: { affinity: -3 } } },
            { text: "좋아! 반 친구들이랑 오늘부터 잘 지내보자.", next: "class_after_party", setFlags: ["personality_active", "knows_name_teacher"], stats: { Teacher: { affinity: 5 } } },
            { text: "안녕! 운동하는 걸 좋아하고 활발한 성격이야!", next: "class_after_active", setFlags: ["personality_active", "knows_name_teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "만나서 반가워. 조용히 지내는 걸 좋아하는 편이야.", next: "class_after_quiet", setFlags: ["personality_quiet", "knows_name_teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "공부하러 왔어. 방해받는 건 질색이니까 적당히 지내자.", next: "class_after_study", setFlags: ["personality_study", "knows_name_teacher"], stats: { Teacher: { affinity: -15 } } }
        ]
    },
    "classroom_2_3_low": {
        name: "나",
        text: "(선생님의 눈빛이 매섭다. 첫인상부터 점수를 깎인 것 같아 마음이 무겁다. 차가운 분위기 속에서 자기소개를 시작해야 한다.)",
        character: "assets/images/characters/teacher_angry.png",
        choices: [
            { text: "제 이름은 '{name}'입니다. 잘 부탁드려요!", next: "teacher_name_share_low", setFlag: "knows_name_teacher", stats: { Teacher: { affinity: 15 }, Seoyeon: { affinity: -3 } } },
            { text: "좋아! 반 친구들이랑 오늘부터 잘 지내보자.", next: "class_after_party", setFlags: ["personality_active", "knows_name_teacher"], stats: { Teacher: { affinity: 5 } } },
            { text: "안녕! 운동하는 걸 좋아하고 활발한 성격이야!", next: "class_after_active", setFlags: ["personality_active", "knows_name_teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "만나서 반가워. 조용히 지내는 걸 좋아하는 편이야.", next: "class_after_quiet", setFlags: ["personality_quiet", "knows_name_teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "공부하러 왔어. 방해받는 건 질색이니까 적당히 지내자.", next: "class_after_study", setFlags: ["personality_study", "knows_name_teacher"], stats: { Teacher: { affinity: -15 } } }
        ]
    },
    "classroom_2_3": {
        name: "나",
        text: "(선생님과의 대화가 끝나고, 드디어 정식으로 반 아이들에게 소개될 시간이 왔다. 수많은 시선이 나에게 집중된다.)",
        character: "assets/images/characters/teacher_normal.png",
        choices: [
            { text: "제 이름은 '{name}'입니다. 잘 부탁드려요!", next: "teacher_name_share_normal", setFlag: "knows_name_teacher", stats: { Teacher: { affinity: 15 }, Seoyeon: { affinity: -3 } } },
            { text: "좋아! 반 친구들이랑 오늘부터 잘 지내보자.", next: "class_after_party", setFlags: ["personality_active", "knows_name_teacher"], stats: { Teacher: { affinity: 5 } } },
            { text: "안녕! 운동하는 걸 좋아하고 활발한 성격이야!", next: "class_after_active", setFlags: ["personality_active", "knows_name_teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "만나서 반가워. 조용히 지내는 걸 좋아하는 편이야.", next: "class_after_quiet", setFlags: ["personality_quiet", "knows_name_teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "공부하러 왔어. 방해받는 건 질색이니까 적당히 지내자.", next: "class_after_study", setFlags: ["personality_study", "knows_name_teacher"], stats: { Teacher: { affinity: -15 } } }
        ]
    },
    "teacher_name_share_high": {
        name: "담임선생님",
        text: "\"(선생님이 흘족한 미소로 나를 바라본다.) 오, {name}... 이름 참 예쁘네. 자, 친구들에게 자기소개 한마디 부탁할게. 다들 환영해줘!\"",
        character: "assets/images/characters/teacher_smile.png",
        next: "class_after_party"
    },
    "teacher_name_share_low": {
        name: "담임선생님",
        text: "\"...자, {name}. 친구들에게 자기소개 짧게 하고 자리로 가렴. 다들 조용히 해.\"",
        character: "assets/images/characters/teacher_angry.png",
        next: "class_after_quiet"
    },
    "teacher_name_share_normal": {
        name: "담임선생님",
        text: "\"자, {name}. 친구들에게 자기소개 한마디 부탁할게.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "class_after_active"
    },

    "class_after_active": {
        name: "아이들",
        text: "(교실 여기저기서 환호성이 터져 나온다. 특히 뒷자리에 앉은 남학생들이 눈을 빛낸다. 서연이도 흐뭇한 미소를 지으며 박수를 쳐준다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "class_after_active_2"
    },
    "class_after_active_2": {
        name: "아이들",
        text: "(아이들은 벌써부터 나를 자기 팀에 영입하려고 수군거린다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "class_after_active_3"
    },
    "class_after_active_3": {
        name: "아이들",
        text: "\"오~ 운동 좀 하나 본데? 점심시간에 배구 한판 어때? 전학생 실력 좀 보자고!\"",
        character: null,
        next: "lunch_time"
    },
    "class_after_quiet": {
        name: "아이들",
        text: "(아이들이 고개를 끄덕이며 차분하게 나를 받아들인다. 몇몇 여학생들이 소곤거리며 나를 쳐다본다.)",
        character: null,
        next: "class_after_quiet_2"
    },
    "class_after_quiet_2": {
        name: "아이들",
        text: "(서연이는 내 진지한 모습이 마음에 드는지 고개를 끄덕인다. 교실 분위기가 한결 차분해진다.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "class_after_quiet_3"
    },
    "class_after_quiet_3": {
        name: "아이들",
        text: "\"와, 왠지 분위기 있다... 나중에 도서관에서 마주치면 인사해도 될까?\"",
        character: null,
        next: "lunch_time"
    },
    "class_after_party": {
        name: "아이들",
        text: "(교실이 순식간에 시장통처럼 시끌벅적해진다. 벌써부터 주변으로 아이들이 몰려든다.)",
        character: null,
        next: "class_after_party_2"
    },
    "class_after_party_2": {
        name: "아이들",
        text: "(서연이는 조금 당황한 듯하지만 이내 웃음을 터뜨린다. 아이들은 벌써 메뉴 정하느라 바쁘다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "class_after_party_3"
    },
    "class_after_party_3": {
        name: "아이들",
        text: "\"와! {name} 성격 진짜 대박 좋아, 오늘 점심은 우리랑 같이 먹자! 맛있는 거 많이 알려줄게!\"",
        character: null,
        next: "lunch_time"
    },
    "class_after_study": {
        name: "아이들",
        text: "(교실에 차가운 정적이 흐른다. 아이들이 조금 당황한 듯 서로 눈치를 보며 수군거린다.)",
        character: null,
        next: "class_after_study_2"
    },
    "class_after_study_2": {
        name: "아이들",
        text: "(서연이의 표정도 조금 굳어진다. 왠지 모를 벽이 생긴 기분이다. 아이들은 내 눈치를 보며 조용해진다.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "class_after_study_3"
    },
    "class_after_study_3": {
        name: "아이들",
        text: "\"와.. 장난 아니네. 완전 공부 벌레인가 봐. 건드리면 큰일 나겠는데...\"",
        character: null,
        next: "lunch_time"
    }
});




