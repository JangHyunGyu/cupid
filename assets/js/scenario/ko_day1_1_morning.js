if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

Object.assign(SCENARIO[1], {
    "start": {
        name: "나",
        text: "(따스한 햇살... 전학 첫날의 긴장감이 온몸을 감싼다.)",
        background: "assets/images/background/school.png",
        character: null,
        next: "start_2"
    },
    "start_2": {
        name: "나",
        text: "(낯선 교복, 낯선 풍경. 모든 게 어색하다.)",
        next: "start_3"
    },
    "start_3": {
        name: "나",
        text: "(후우... 심호흡 한 번. 자, 가보자.)",
        next: "name_input_scene"
    },
    "name_input_scene": {
        type: "input",
        name: "시스템",
        text: "당신의 이름을 입력해주세요.",
        next: "start_4"
    },
    "start_4": {
        name: "???",
        text: "\"안녕? 처음 보는 얼굴이네. 혹시 오늘 전학 온다는... {name?}?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "intro_1"
    },
    "intro_1": {
        name: "나",
        text: "(그녀가 생긋 웃으며 다가온다. 기분 좋은 향기가 난다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "intro_2"
    },
    "intro_2": {
        name: "나",
        text: "(맑은 눈동자가 나를 빤히 바라본다. 조금... 부끄러운걸.)",
        next: "intro_3"
    },
    "intro_3": {
        name: "서연",
        text: "\"나는 학생회장 서연이야. 선생님 부탁으로 마중 나왔어. 잘 부탁해!\"",
        setFlag: "metSeoyeon",
        choices: [
            { text: "응, 잘 부탁해. 학교가 커서 좀 헤매고 있었어.", next: "path_friendly_1", stats: { Seoyeon: { affinity: 5 } } },
            { text: "너... 정말 예쁘다. (나도 모르게 본심이...!)", next: "path_blush_1", stats: { Seoyeon: { affinity: 15 } } },
            { text: "아, 그래? 근데 좀 비켜줄래? 바쁘거든.", next: "path_rude_1", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "path_rude_1": {
        name: "서연",
        text: "(서연이의 표정이 순식간에 굳어진다. 당황한 듯 입술을 깨문다.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "path_rude_1_2"
    },
    "path_rude_1_2": {
        name: "서연",
        text: "\"아... 미안. 방해했나 보네. 하지만 교무실까지는 안내해야 하니까... 따라와.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "hallway_1"
    },
    "path_friendly_1": {
        name: "서연",
        text: "(그녀가 밝게 웃으며 앞장선다. 긴장이 조금 풀리는 기분이다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "path_friendly_1_2"
    },
    "path_friendly_1_2": {
        name: "서연",
        text: "\"후훗, 역시 그랬구나? 처음 오면 좀 복잡하긴 하지. 내가 완벽하게 가이드해줄게. 자, 따라와!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1"
    },
    "path_tease_1": {
        name: "서연",
        text: "(그녀가 장난스럽게 웃으며 윙크를 한다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "path_tease_1_2"
    },
    "path_tease_1_2": {
        name: "서연",
        text: "\"어머, 자신감이 넘치네? 특별 대우라기보다는... 학생회장의 책임감이랄까? 하지만 네가 원한다면, 특별히 신경 써줄게!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1"
    },
    "path_blush_1": {
        name: "서연",
        text: "(서연이의 얼굴이 빨개진다. 당황하며 서둘러 뒤를 돈다.)",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "path_blush_1_2"
    },
    "path_blush_1_2": {
        name: "서연",
        text: "\"에...? 그, 갑자기 무슨 소리를 하는 거야! 전학생은 다 너처럼 이렇게... 능글맞니? 어서 따라오기나 해! 늦으면 담임선생님께 혼난다구!\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "hallway_1"
    },
    "path_silent_1": {
        name: "서연",
        text: "(그녀가 내 눈앞에서 손을 흔들더니, 내 이마에 손을 얹어 열을 확인한다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "path_silent_1_2"
    },
    "path_silent_1_2": {
        name: "서연",
        text: "\"저기... 괜찮니? 어디 아픈 건 아니지? 얼굴이 좀 빨간 것 같은데... 일단 보건실보다는 교무실부터 가는 게 좋겠어. 내가 부축해줄까?\"",
        character: "assets/images/characters/seyoun_nomal.png",
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
        text: "(서연이가 갑자기 멈춰 서더니 나를 돌아본다.) \"아, 그러고 보니 내 소개만 하고 네 이름은 아직 못 들었네! {name?}, 이름이 뭐야?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_name_share"
    },
    "hallway_name_share": {
        name: "나",
        text: "\"내 이름은 '{name}'야. 잘 부탁해.\"",
        setFlag: "knowsName_서연",
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
        text: "\"아, 그러고 보니 우리 통성명만 하고 제대로 대화를 못 했네? 궁금한 거 있으면 뭐든 물어봐!\"",
        context: "학교 복도를 함께 걸으며 전학생인 주인공과 가벼운 대화를 나누는 상황",
        personality: "친절하고 상냥하며 책임감 강한 학생회장. 전학생인 주인공에게 호감을 느끼고 있음.",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1_3"
    },
    "hallway_1_3": {
        name: "서연",
        text: "\"복도를 지나면서 학교 시설들을 간단히 설명해줄게. 저기 보이는 곳이 우리 학교의 자랑인 도서관이야. 그리고 저쪽은...\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "학교가 정말 활기차네. 서연이 너도 동아리 활동 하니?", next: "hallway_talk_club", stats: { Seoyeon: { affinity: 5 } } },
            { text: "시설도 좋지만, 안내해주는 사람이 좋아서 더 멋져 보여.", next: "hallway_talk_flatter", stats: { Seoyeon: { affinity: 10 } } },
            { text: "세상에, 서연아... 넌 정말 여신 같아. 네 목소리만 들어도 천국에 온 것 같아.", next: "hallway_talk_trap", stats: { Seoyeon: { affinity: -15 } } },
            { text: "(조용히 그녀의 설명을 경청하며 걷는다.)", next: "hallway_talk_listen", stats: { Seoyeon: { affinity: 3 } } }
        ]
    },
    "hallway_talk_trap": {
        name: "서연",
        text: "(서연이가 당황한 듯 멈춰 서서 나를 빤히 바라본다. 그녀의 눈빛이 조금 차가워진다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_talk_trap_2"
    },
    "hallway_talk_trap_2": {
        name: "서연",
        text: "\"어... 음, 고맙긴 한데... 그런 말은 좀 부담스럽네. 우리 아직 만난 지 얼마 안 됐잖아? 장난이 좀 심한 것 같아.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2"
    },
    "hallway_talk_club": {
        name: "서연",
        text: "(그녀가 반가운 듯 나를 바라본다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_talk_club_2"
    },
    "hallway_talk_club_2": {
        name: "서연",
        text: "\"응! 나는 학생회 활동도 하지만, 사실 원예부 소속이기도 해. 꽃을 가꾸는 걸 좋아하거든. 흙을 만지고 있으면 마음이 편안해지거든. 나중에 시간 되면 우리 온실에도 놀러 와!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2"
    },
    "hallway_talk_flatter": {
        name: "서연",
        text: "(그녀가 쑥스러운 듯 뺨을 붉히며 대답한다.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_talk_flatter_2"
    },
    "hallway_talk_flatter_2": {
        name: "서연",
        text: "\"정말... 너는 말을 참 예쁘게 하는구나. 사실 학생회장이라는 자리 때문에 늘 긴장하고 사는데, 너랑 있으면 왠지 마음이 놓여. 나도 모르게 어리광 부리고 싶어질지도 몰라... 후훗, 농담이야.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_2"
    },
    "hallway_talk_listen": {
        name: "서연",
        text: "(그녀가 신이 난 듯 설명을 이어간다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_talk_listen_2"
    },
    "hallway_talk_listen_2": {
        name: "서연",
        text: "\"내 설명을 이렇게 잘 들어주니 정말 고마워. {name?}은 참 성실한 사람인 것 같네! 이런 태도라면 학교생활도 금방 적응할 거야.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2"
    },
    "hallway_2": {
        name: "서연",
        text: "(그녀가 갑자기 멈춰 서서 나를 돌아본다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2_2"
    },
    "hallway_2_2": {
        name: "서연",
        text: "(그녀가 내 눈을 뚫어지게 쳐다본다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2_3"
    },
    "hallway_2_3": {
        name: "서연",
        text: "\"너는 어떤 동아리에 관심 있어? 우리 학생회도 항상 새로운 인재를 환영하고 있거든. 만약 네가 들어온다면... 내가 직접 업무를 가르쳐줄 수도 있어.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "학생회에 들어가면 너랑 매일 같이 있을 수 있는 거야? 그럼 무조건 신청할게!", next: "path_flirt_2", stats: { Seoyeon: { affinity: 10 } } },
            { text: "아직은 잘 모르겠어. 학교생활에 좀 적응하고 나서 결정할게.", next: "path_normal_2", stats: { Seoyeon: { affinity: -5 } } },
            { text: "귀찮게 동아리는 무슨... 그냥 혼자 있을래.", next: "path_rude_2", stats: { Seoyeon: { affinity: -25 } } }
        ]
    },
    "path_rude_2": {
        name: "서연",
        text: "(그녀가 실망한 기색을 감추지 못한다. 어깨가 조금 처진 것 같다.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "classroom_1_1"
    },
    "path_flirt_2": {
        name: "서연",
        text: "(서연이의 얼굴이 다시 한번 붉어진다. 당황해서 시선을 피하면서도 입가에는 작은 미소가 번진다. 그녀의 손가락이 교복 치맛자락을 만지작거린다. 그녀는 수줍은 듯 발끝으로 바닥을 톡톡 친다.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "path_flirt_2_2"
    },
    "path_flirt_2_2": {
        name: "서연",
        text: "\"매, 매일이라니... 업무가 얼마나 많은데! 하지만 네가 들어온다면... 나도 조금은 즐거울지도 모르겠네. 기대하고 있을게?\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "classroom_1_1"
    },
    "path_club_flower": {
        name: "서연",
        text: "(그녀가 장난스럽게 내 어깨를 살짝 친다. 거리감이 한층 가까워진 기분이다. 그녀의 손길에서 기분 좋은 온기가 느껴진다. 그녀는 장난기 가득한 표정으로 나를 올려다본다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "path_club_flower_2"
    },
    "path_club_flower_2": {
        name: "서연",
        text: "\"치... 너 정말 선수 아니니? 원예부는 부원이 적어서 걱정이었는데, 너 같은 사람이 들어오면 시끌벅적해지겠어. 꼭 와야 해? 약속한 거다?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_1_1"
    },
    "path_normal_2": {
        name: "서연",
        text: "(그녀는 고개를 끄덕이며 다시 앞장서 걷기 시작한다. 조금은 아쉬운 기분이 드는 건)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_back.png",
        next: "classroom_1_1"
    },
    "path_direct_2": {
        name: "서연",
        text: "(그녀가 멍하니 나를 바라보다가, 이내 풋 하고 맑은 웃음을 터뜨린다. 그 웃음소리가 마치 은방울 소리처럼 복도에 울려 퍼진다. 그녀의 눈가에 맺힌 작은 눈물이 햇빛에 반짝인다. 그녀는 배를 잡고 한참을 웃는다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "path_direct_2_2"
    },
    "path_direct_2_2": {
        name: "서연",
        text: "\"후훗, 너 정말 솔직하구나? 나에 대해서라... 글쎄, 그건 네가 앞으로 어떻게 하느냐에 따라 알려줄 수도 있고, 아닐 수도 있지. 기대해볼게!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "classroom_1_1"
    },
    "classroom_1_1": {
        name: "서연",
        text: "(교실 문 앞에 도착했다. 안쪽에서 아이들의 웅성거리는 소리와 웃음소리가 들려온다. 서연이가 내 어깨를 가볍게 두드리며 응원해준다.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_1_2"
    },
    "classroom_1_2": {
        name: "서연",
        text: "(그녀의 손길이 닿은 곳이 화끈거린다. 그녀는 내 눈을 보며 작게 파이팅을 외친다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_1_3"
    },
    "classroom_1_3": {
        name: "서연",
        text: "\"자, 여기가 네가 앞으로 지낼 2학년 3반이야. 긴장하지 마. 내가 옆에 있으니까, 넌 그냥 평소대로 하면 돼. 알았지?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_2"
    },
    "classroom_2": {
        name: "담임선생님",
        text: "(교탁 앞에 서자 수십 개의 시선이 일제히 나에게 꽂힌다. 호기심 어린 눈빛, 경계하는 눈빛... 서연이는 내 옆에서 든든하게 미소 지으며 나를 지켜봐 주고 있다.)",
        background: "assets/images/background/room_school.png",
        characters: {
            left: "assets/images/characters/teacher.png",
            right: "assets/images/characters/seyoun_laugh.png"
        },
        next: "classroom_2_2"
    },
    "classroom_2_2": {
        name: "담임선생님",
        text: "(교실 안의 공기가 무겁게 느껴진다. 담임선생님이 교탁을 탁탁 치며 주의를 집중시킨다.)",
        character: "assets/images/characters/teacher.png",
        next: "teacher_free_talk"
    },
    "teacher_free_talk": {
        type: "free_talk",
        name: "담임선생님",
        text: "\"자, 다들 너한테 관심이 아주 많네. 긴장되겠지만 다들 좋은 아이들이니까 너무 걱정하지 마. 자기소개 하기 전에 나한테 궁금한 거라도 있니?\"",
        context: "장소: 2학년 3반 교실 안, 교탁 앞. 상황: 담임 선생님이 전학생인 주인공을 학생들에게 소개하기 직전의 짧은 대기 시간. 수십 명의 학생들이 우리를 지켜보고 있음. 이미 교실 정중앙에 들어와 있는 상태이며, 절대 복도가 아님. 교실 안에서 대화를 나누는 중임.",
        personality: "공과 사가 뚜렷한 전문적인 교사지만, 사실 허당끼가 있고 주인공의 예상치 못한 어른스러운 모습에 가슴 설레어 함. 은근히 주인공에게 의지하고 싶어 하는 '갭 모에'가 있음.",
        character: "assets/images/characters/teacher.png",
        next: "classroom_2_3"
    },
    "classroom_2_3": {
        name: "담임선생님",
        text: "\"자, 다들 주목! 오늘부터 우리와 함께하게 된 {name?}이다. 다들 사이좋게 지내도록. 자, 자기소개 한마디 할까?\"",
        character: "assets/images/characters/teacher.png",
        choices: [
            { text: "제 이름은 '{name}'입니다. 잘 부탁드려요!", next: "teacher_name_share", setFlag: "knowsName_담임선생님", stats: { Teacher: { affinity: 5 } } },
            { text: "안녕! 운동하는 걸 좋아하고 활발한 성격이야!", next: "class_after_active", setFlags: ["personality_active", "knowsName_담임선생님"], stats: { Teacher: { affinity: 2 } } },
            { text: "만나서 반가워. 조용히 책 읽는 걸 좋아하는 편이야.", next: "class_after_quiet", setFlags: ["personality_quiet", "knowsName_담임선생님"], stats: { Teacher: { affinity: 2 } } },
            { text: "공부하러 왔어. 방해받는 건 딱 질색이니까 적당히 지내자.", next: "class_after_study", setFlags: ["personality_study", "knowsName_담임선생님"], stats: { Teacher: { affinity: -2 } } }
        ]
    },
    "teacher_name_share": {
        name: "담임선생님",
        text: "\"오, {name}이라고 하는구나. 이름이 참 예쁘네. 자, {name}. 친구들에게 자기소개 한마디 부탁할까?\"",
        character: "assets/images/characters/teacher.png",
        choices: [
            { text: "활발하게 인사한다.", next: "class_after_active", setFlag: "personality_active" },
            { text: "차분하게 인사한다.", next: "class_after_quiet", setFlag: "personality_quiet" },
            { text: "귀찮다는 듯 대충 인사한다.", next: "class_after_study", setFlag: "personality_study", stats: { Teacher: { affinity: -10 } } }
        ]
    },
    "class_after_active": {
        name: "아이들",
        text: "(교실 여기저기서 환호성이 터져 나온다. 특히 뒷자리에 앉은 남학생들이 눈을 빛낸다. 서연이도 흐뭇한 미소를 지으며 박수를 쳐준다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "class_after_active_2"
    },
    "class_after_active_2": {
        name: "아이들",
        text: "(아이들은 벌써부터 나를 팀에 영입하려 수군거린다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "class_after_active_3"
    },
    "class_after_active_3": {
        name: "아이들",
        text: "\"오~ 운동 좀 하나 본데? 점심시간에 배구 한 판 고? 전학생 실력 좀 보자구!\"",
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
        text: "(서연이는 내 진지한 모습이 마음에 든 듯 고개를 끄덕인다. 교실 분위기가 한결 차분해진다.)",
        character: "assets/images/characters/seyoun_nomal.png",
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
        text: "(교실이 순식간에 시장통처럼 시끌벅적해진다. 벌써부터 내 주변으로 아이들이 몰려든다.)",
        character: null,
        next: "class_after_party_2"
    },
    "class_after_party_2": {
        name: "아이들",
        text: "(서연이는 조금 당황한 듯하지만 이내 웃음을 터뜨린다. 아이들은 벌써 메뉴를 정하느라 바쁘다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "class_after_party_3"
    },
    "class_after_party_3": {
        name: "아이들",
        text: "\"와! {name?} 성격 진짜 대박! 좋아, 오늘 떡볶이는 내가 쏜다! 노래방까지 풀코스로 가자!\"",
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
        text: "(서연이의 표정도 조금 굳어진다. 왠지 모르게 벽이 생긴 기분이다. 아이들은 내 눈치를 보며 조용해진다.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "class_after_study_3"
    },
    "class_after_study_3": {
        name: "아이들",
        text: "\"와... 장난 아니네. 완전 공부 벌레인가 봐? 건드리면 큰일 나겠는데...\"",
        character: null,
        next: "lunch_time"
    }
});
