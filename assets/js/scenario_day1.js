if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}

SCENARIO[1] = {
    "start": {
        name: "나",
        text: "(따스한 햇살이 내리쬐는 교문 앞. 전학 첫날의 긴장감이 느껴진다.)",
        background: "assets/images/background/school.png",
        character: null,
        next: "start_2"
    },
    "start_2": {
        name: "나",
        text: "(낯선 교복과 풍경... 모든 것이 생경하다.)",
        next: "start_3"
    },
    "start_3": {
        name: "나",
        text: "(심호흡을 하며 교문을 향해 한 걸음을 내디뎠다.)",
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
        text: "\"안녕? 처음 보는 얼굴이네. 이 시간에 교문 앞에 멍하니 서 있는 걸 보니... 혹시 오늘 온다는 그 {name?}이니?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "intro_1"
    },
    "intro_1": {
        name: "나",
        text: "(그녀가 웃으며 다가온다. 은은한 향기가 느껴진다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "intro_2"
    },
    "intro_2": {
        name: "나",
        text: "(그녀의 맑은 눈동자가 나를 빤히 바라본다.)",
        next: "intro_3"
    },
    "intro_3": {
        name: "서연",
        text: "\"나는 학생회장 '서연'이라고 해. 담임선생님께 부탁받아서 널 마중 나왔어. 만나서 반가워!\"",
        setFlag: "metSeoyeon",
        choices: [
            { text: "응, 반가워. 학교가 너무 커서 길을 좀 헤매고 있었어.", next: "path_friendly_1", stats: { Seoyeon: { affinity: 5 } } },
            { text: "너... 정말 예쁘다. (나도 모르게 본심이 튀어나와 버렸다!)", next: "path_blush_1", stats: { Seoyeon: { affinity: 15 } } },
            { text: "아, 그래? 근데 좀 비켜줄래? 나 바쁘거든.", next: "path_rude_1", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "path_rude_1": {
        name: "서연",
        text: "(서연이의 표정이 순식간에 굳어진다. 그녀는 당황한 듯 입술을 깨문다.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "path_rude_1_2"
    },
    "path_rude_1_2": {
        name: "서연",
        text: "\"아... 미안. 내가 방해했나 보네. 하지만 교무실까지는 안내해야 하니까... 따라와.\"",
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
        text: "\"후훗, 역시 그랬구나. 우리 학교가 처음 오면 좀 복잡하긴 하지? 내가 교무실까지 완벽하게 가이드해줄게. 자, 나만 믿고 따라와!\"",
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
        text: "\"어머, 자신감이 넘치는 {name?}이네? 특별 대우라기보다는... 학생회장으로서의 책임감이랄까? 하지만 네가 그렇게 생각한다면, 오늘 하루는 특별히 신경 써줄게!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1"
    },
    "path_blush_1": {
        name: "서연",
        text: "(서연이의 얼굴이 빨개진다. 그녀는 당황하며 서둘러 뒤를 돈다.)",
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
    },
    "lunch_time": {
        name: "나",
        text: "(정신없이 오전 수업이 지나가고, 드디어 기다리던 점심시간 종이 울렸다. 아이들이 우르르 급식실로 향한다.)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "lunch_time_2"
    },
    "lunch_time_2": {
        name: "나",
        text: "(점심시간이다. 창밖 운동장에는 아이들이 뛰어놀고 있다.)",
        choices: [
            { text: "서연이에게 다가가 같이 점심 먹자고 제안한다.", next: "lunch_seoyeon", setFlag: "metSeoyeon" },
            { text: "혼자 학교를 둘러보며 조용한 곳에서 먹을 곳을 찾는다.", next: "lunch_alone", setFlag: "metYuna" },
            { text: "체육관 쪽에서 들려오는 배구공 소리를 따라가 본다.", next: "lunch_dain", setFlag: "metDain" }
        ]
    },
    "lunch_seoyeon": {
        name: "서연",
        text: "(서연이에게 다가가자 그녀가 반갑게 나를 맞이한다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "lunch_seoyeon_2"
    },
    "lunch_seoyeon_2": {
        name: "서연",
        text: "\"마침 널 찾으려던 참이었어. 우리 옥상에 비밀 장소가 있는데, 거기서 같이 먹을래?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "응! 서연이랑 같이 먹고 싶었어.", next: "rooftop_1", stats: { Seoyeon: { affinity: 10 } } },
            { text: "음... 다른 애들이랑 먹기로 했는데. (거절)", next: "lunch_alone", stats: { Seoyeon: { affinity: -15 } } },
            { text: "옥상? 귀찮게 거기까지 가야 해?", next: "rooftop_talk_rude", stats: { Seoyeon: { affinity: -25 } } }
        ]
    },
    "rooftop_1": {
        name: "서연",
        text: "(시원한 바람이 부는 옥상. 서연이가 도시락을 펼친다.)",
        background: "assets/images/background/top_school.png",
        next: "rooftop_1_2"
    },
    "rooftop_1_2": {
        name: "서연",
        text: "(그녀가 젓가락을 건네며 수줍게 웃는다.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_1_2_2"
    },
    "rooftop_1_2_2": {
        name: "서연",
        text: "\"자, 이건 내가 오늘 아침에 일찍 일어나서 만든 거야. 네 입맛에 맞을지 모르겠네...\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_1_3"
    },
    "rooftop_1_3": {
        name: "서연",
        text: "\"특히 이 문어 모양 소시지는 내 회심의 역작이야! 한 번 먹어볼래?\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "와, 정말 맛있어 보여! 서연이는 요리도 잘하는구나.", next: "rooftop_talk_food", stats: { Seoyeon: { affinity: 5 } } },
            { 
                text: "아... 아 해줘. (용기를 내어 본다!)", 
                next: "rooftop_talk_ah_fail", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 40, next: "rooftop_talk_ah" }
                ],
                stats: { Seoyeon: { affinity: 5 } } 
            },
            { text: "이렇게 정성 가득한 도시락은 처음이야. 정말 고마워.", next: "rooftop_talk_thanks", stats: { Seoyeon: { affinity: 10 } } },
            { text: "별로 맛없어 보이는데... 그냥 매점 가서 빵이나 사 먹을걸.", next: "rooftop_talk_rude", stats: { Seoyeon: { affinity: -30 } } }
        ]
    },
    "rooftop_talk_ah_fail": {
        name: "서연",
        text: "(서연이의 얼굴이 순식간에 굳어진다. 그녀는 당황한 듯 젓가락을 내려놓는다.) \"어... 그건 좀... {name?}, 우리 아직 그 정도로 친한 건 아니지 않아? 장난이 좀 심한 것 같아.\"",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: -15 } },
        next: "rooftop_2"
    },
    "rooftop_talk_rude": {
        name: "서연",
        text: "(서연이의 손이 미세하게 떨린다. 그녀는 억지로 미소를 지어 보이지만, 눈가가 촉촉해진다.)",
        character: "assets/images/characters/seyoun_sad.png",
        next: "rooftop_2"
    },
    "rooftop_talk_food": {
        name: "서연",
        text: "(그녀가 기쁜 듯 뺨을 붉히며 대답한다.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_talk_food_2"
    },
    "rooftop_talk_food_2": {
        name: "서연",
        text: "\"정말? 다행이다! 사실 {name?}이 좋아할지 걱정돼서 어제 메뉴 고민하느라 잠도 설쳤거든. 많이 먹어, 아직 많이 남았으니까!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_2"
    },
    "rooftop_talk_ah": {
        name: "서연",
        text: "(서연이의 얼굴이 빨개진다. 그녀는 조심스럽게 소시지를 내 입으로 가져온다.)",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "rooftop_talk_ah_2"
    },
    "rooftop_talk_ah_2": {
        name: "서연",
        text: "\"뭐, 뭐뭐뭐라고?! 너 정말... 그런 소리를 아무렇지도 않게... 하아, 정말 못 말린다니까. 자, 이번 한 번뿐이야! 아... 해...\"",
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
        text: "\"고맙긴... 나야말로 같이 먹어줘서 고마워. 혼자 먹는 것보다 훨씬 맛있는 것 같아. 앞으로도 종종 이렇게 같이 먹어줄래?\"",
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
        text: "\"저기, {name?}... 사실 나, 처음 널 봤을 때부터 왠지 모르게... 예전부터 알고 지냈던 사이 같은 기분이 들었어. 너는 어때?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_free_talk"
    },
    "rooftop_free_talk": {
        type: "free_talk",
        name: "서연",
        text: "\"후훗, 갑자기 너무 진지했나? 우리 좀 더 편하게 이야기하자. 넌 어떤 스타일의 사람을 좋아해?\"",
        context: "점심시간, 학교 옥상에서 단둘이 도시락을 먹고 난 뒤 나른하고 로맨틱한 분위기에서 대화를 나누는 상황",
        personality: "평소보다 조금 더 대담하고 솔직해진 상태. 주인공의 취향이나 생각에 대해 깊이 알고 싶어 함.",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_choices"
    },
    "rooftop_choices": {
        name: "서연",
        text: "(그녀가 내 대답을 기다리며 눈을 반짝인다.)",
        choices: [
            { text: "나도 그래. 왠지 운명 같은 느낌이랄까?", next: "rooftop_destiny", stats: { Seoyeon: { affinity: 10 } } },
            { text: "아마 서연이가 너무 친절하게 대해줘서 그런 거 아닐까?", next: "rooftop_kind", stats: { Seoyeon: { affinity: 5 } } },
            { text: "글쎄, 난 아직 잘 모르겠어. 하지만 너랑 있으면 편안해.", next: "rooftop_comfortable", stats: { Seoyeon: { affinity: 7 } } }
        ]
    },
    "rooftop_destiny": {
        name: "서연",
        text: "(그녀가 수줍게 웃으며 내 손 위에 자신의 손을 살며시 겹친다.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_destiny_2"
    },
    "rooftop_destiny_2": {
        name: "서연",
        text: "\"운명... 후훗, 그 말 참 듣기 좋다. 우리, 앞으로 더 즐거운 추억 많이 만들자. 약속이야?\"",
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
        text: "\"치... 너무 정석적인 대답이잖아. 하지만 뭐, 틀린 말은 아니니까 봐줄게. 앞으로는 좀 더 솔직한 대답 기대할게?\"",
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
        text: "\"편안하다니 다행이야. 나도 너랑 있으면 학생회장이라는 짐을 잠시 내려놓을 수 있는 것 같아. 고마워, {name?}.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "seyoun_contact_exchange"
    },
    "seyoun_contact_exchange": {
        name: "서연",
        text: "(서연이가 가방을챙기다 말고 잠시 머뭇거리더니, 수줍게 스마트폰을 내민다.) \"저기... 혹시 괜찮다면, 연락처 알려줄 수 있을까? 앞으로 도시락 메뉴 정할 때 물어보고 싶어서...\"",
        character: "assets/images/characters/seyoun_shy.png",
        choices: [
            { text: "물론이지! 나도 서연이랑 더 이야기하고 싶었어.", next: "seyoun_contact_success", setFlags: ["has_number_seyoun", "has_any_contact"] },
            { text: "미안, 아직은 좀 이른 것 같아.", next: "seyoun_contact_fail", stats: { Seoyeon: { affinity: -10 } } }
        ]
    },
    "seyoun_contact_success": {
        name: "서연",
        text: "(그녀가 환하게 웃으며 내 번호를 저장한다. 그녀의 손가락이 기쁜 듯 바쁘게 움직인다.) \"고마워! 그럼... 나중에 메시지 보낼게. 꼭 답장해줘야 해?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 15 } },
        next: "after_school_start"
    },
    "seyoun_contact_fail": {
        name: "서연",
        text: "(그녀가 조금 시무룩한 표정을 짓지만, 이내 애써 미소 지으며 고개를 끄덕인다.) \"아... 응, 미안! 내가 너무 성급했나 봐. 천천히 친해지면 되지, 그치?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_school_start"
    },
    "lunch_alone": {
        name: "나",
        text: "(혼자 조용한 복도를 걷다 보니, 도서관 별관에 도착했다. 그곳에서 창가에 기대어 책을 읽고 있는 소녀와 마주쳤다.)",
        background: "assets/images/background/library_old.png",
        next: "alone_2"
    },
    "alone_2": {
        name: "???",
        text: "(그녀는 책에서 눈을 떼지 않은 채 나지막한 목소리로 말을 건넨다.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "alone_2_2"
    },
    "alone_2_2": {
        name: "???",
        text: "\"...길을 잃었어? 여긴 학생들이 잘 안 오는 곳인데. 용케 찾았네, {name?}.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_intro"
    },
    "yuna_intro": {
        name: "???",
        text: "(그녀가 천천히 고개를 들어 나를 바라본다. 깊고 신비로운 보랏빛 눈동자가 나를 조용히 관찰한다.)",
        next: "yuna_intro_2"
    },
    "yuna_intro_2": {
        name: "???",
        text: "\"난 '유나'라고 해. 그냥... 조용히 지내는 걸 좋아하는 사람이야. 이 학교... 겉보기와는 많이 다르거든. 너한테서는... 왠지 낯익은 분위기가 느껴져.\"",
        setFlag: "metYuna",
        next: "yuna_free_talk"
    },
    "yuna_free_talk": {
        type: "free_talk",
        name: "유나",
        text: "\"...나한테 궁금한 거라도 있어? 아니면, 이 학교에 대해 알고 싶은 거야?\"",
        context: "조용한 도서관 별관, 신비롭고 차가운 분위기의 유나와 처음 만난 상황",
        personality: "신비롭고 차가우며 비밀이 많은 소녀. 주인공에게 묘한 흥미를 느끼고 있음.",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_choices"
    },
    "yuna_choices": {
        name: "유나",
        text: "(그녀의 보랏빛 눈동자가 나를 꿰뚫어 보는 듯하다.)",
        choices: [
            { text: "학교가 다르다니? 그게 무슨 소리야?", next: "yuna_secret", stats: { Yuna: { affinity: 5 } } },
            { text: "낯익다니... 나를 본 적 있어?", next: "yuna_scent", stats: { Yuna: { affinity: 5 } } },
            { text: "너, 왠지 위험해 보여. 하지만 눈을 뗄 수가 없어.", next: "yuna_danger", stats: { Yuna: { affinity: 10 } } }
        ]
    },
    "yuna_secret": {
        name: "유나",
        text: "(그녀가 입가에 묘한 미소를 띠며 책을 덮는다. 그녀는 내 귓가에 입술을 가까이 대고 속삭인다.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_secret_2"
    },
    "yuna_secret_2": {
        name: "유나",
        text: "\"후훗, 궁금해? 하지만 비밀은 모르는 게 약일 수도 있어. 학교가 숨기고 싶어 하는 이야기들은... 알면 다칠 수도 있거든.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "yuna_scent": {
        name: "유나",
        text: "(그녀가 한 걸음 다가와 나를 빤히 바라본다. 그녀는 씁쓸한 표정으로 중얼거린다.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_scent_2"
    },
    "yuna_scent_2": {
        name: "유나",
        text: "\"아니, 처음 봐. 하지만 네 눈동자 속의 그 '빛'... 정말 탐나네. 이 학교의 죽어있는 아이들과는 달라. 그 빛이 꺼지지 않게 내가 계속 지켜봐도 될까?\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_school_start"
    },
    "yuna_danger": {
        name: "유나",
        text: "(그녀가 차가운 손가락으로 내 뺨을 살짝 스친다. 그녀는 내 눈을 빤히 바라보며 묘한 미소를 짓는다.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_danger_2"
    },
    "yuna_danger_2": {
        name: "유나",
        text: "\"위험해 보인다니... 후훗, 정답이야. 하지만 위험한 걸 알면서도 다가오는 너 같은 사람, 싫지 않아. 네가 그 특별한 빛을 잃을 때까지... 곁에 있어줄게.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "lunch_store": {
        name: "나",
        text: "(매점에서 마지막 남은 '초코 소라빵'을 쟁취했다! 승리자의 기분으로 빵을 한 입 베어 물자, 달콤함이 입안 가득 퍼진다.)",
        next: "lunch_store_2"
    },
    "lunch_store_2": {
        name: "나",
        text: "\"크으~ 역시 이 맛이야! 전학 첫날의 피로가 싹 가시는 기분인걸?\"",
        next: "after_school_start"
    },
    "lunch_sleep": {
        name: "나",
        text: "(책상에 엎드려 잠을 청한다. 창가로 들어오는 햇살이 등을 따뜻하게 데워준다.)",
        next: "lunch_sleep_2"
    },
    "lunch_sleep_2": {
        name: "나",
        text: "(꿈속에서 누군가 내 이름을 부르는 소리가 들렸다. 아주 그립고도 슬픈 목소리... 하지만 눈을 떴을 때 내 곁에는 아무도 없었다.)",
        next: "after_school_start"
    },
    "lunch_dain": {
        name: "나",
        text: "(체육관 쪽에서 배구공이 튀는 소리가 들려온다. 나는 소리를 따라 체육관으로 향했다.)",
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
        text: "\"어이, {name?}! 거기서 구경만 하지 말고 이리 와서 한 판 붙자! 너, 운동 좀 하게 생겼는데?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "dain_name_share"
    },
    "dain_name_share": {
        name: "나",
        text: "\"내 이름은 '{name}'야.\"",
        setFlag: "knowsName_다인",
        next: "dain_name_share_2"
    },
    "dain_name_share_2": {
        name: "다인",
        text: "\"{name}? 멋진 이름이네! 난 배구부 다인이야. 우리 학교에서 나보다 점프력 좋은 사람은 없으니까 긴장하라구!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "lunch_dain_gym_2"
    },
    "lunch_dain_gym_2": {
        name: "다인",
        text: "\"자, 여기가 내 구역이야! {name?}, 준비됐어? 살살 봐주지 않을 거니까 각오하라구!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        setFlag: "metDain",
        next: "after_school_start"
    },
    "after_school_start": {
        name: "나",
        text: "(어느덧 모든 수업이 끝나고 방과 후를 알리는 종소리가 울려 퍼진다.)",
        background: "assets/images/background/room_school.png",
        character: null,
        sunset: true,
        next: "after_school_start_2"
    },
    "after_school_start_2": {
        name: "나",
        text: "(가방을 챙겨 교실을 나서려는데... 복도에는 하교하는 아이들의 발소리가 가득하다.)",
        sunset: true,
        next: "after_school_start_3"
    },
    "after_school_start_3": {
        name: "나",
        text: "(오늘 하루도 참 길었네. 이제 어떻게 할까?)",
        sunset: true,
        choices: [
            { text: "서연이가 있는 학생회실에 들러본다.", next: "after_seoyeon", condition: "metSeoyeon" },
            { text: "학생회실 쪽을 한 번 가본다.", next: "after_seoyeon", excludeCondition: "metSeoyeon", setFlag: "metSeoyeon" },
            { text: "유나가 있던 도서관 별관으로 향한다.", next: "after_yuna", condition: "metYuna" },
            { text: "학교의 조용한 곳을 좀 더 둘러본다.", next: "after_yuna_new", excludeCondition: "metYuna" },
            { text: "체육관에서 연습 중인 다인이를 보러 간다.", next: "after_dain", condition: "metDain" },
            { text: "활기찬 소리가 들리는 체육관으로 향한다.", next: "after_dain_new", excludeCondition: "metDain" },
            { text: "오늘은 피곤하니 바로 집으로 돌아간다.", next: "after_home" }
        ]
    },
    "after_dain_new": {
        name: "나",
        text: "(체육관으로 향하자 노을빛이 스며드는 창가 아래에서 땀 흘리며 배구 연습을 하는 아이들이 보인다. 그중에서도 유독 눈에 띄는 한 소녀가 있다.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        sunset: true,
        next: "after_dain_new_intro"
    },
    "after_dain_new_intro": {
        name: "???",
        text: "\"안녕! 난 배구부 다인이야. 너 오늘 전학 온 그 애 맞지?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        setFlag: "metDain",
        next: "after_dain_2"
    },
    "after_dain": {
        name: "다인",
        text: "(체육관에 도착하자 다인이가 높게 뛰어올라 강력한 스파이크를 내리꽂고 있다. 그녀의 건강한 에너지가 주변을 밝히는 것 같다.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        sunset: true,
        next: "after_dain_2"
    },
    "after_dain_2": {
        name: "다인",
        text: "(연습이 잠시 멈춘 사이, 다인이가 나를 발견하고는 수건으로 땀을 닦으며 달려온다.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        next: "dain_free_talk"
    },
    "dain_free_talk": {
        type: "free_talk",
        name: "다인",
        text: "\"와, {name?}! 가까이서 보니까 더 반가운데? 나한테 궁금한 거 없어? 운동이라든가, 학교생활이라든가!\"",
        context: "방과 후 노을 지는 체육관, 연습을 마친 다인과 대화를 나누는 상황",
        personality: "털털하고 시원시원한 성격의 배구부 에이스. 운동을 사랑하며 주인공에게 호의적이고 에너지가 넘침.",
        character: "assets/images/characters/dain_nomal.png",
        next: "after_dain_3"
    },
    "after_dain_3": {
        name: "다인",
        text: "\"후훗, {name?}! 내 연습하는 모습 보니까 어때? 나 좀 멋있지 않아? 반하기라도 한 건 아니지?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        choices: [
            { text: "응, 다인이 연습하는 거 보니까 나도 힘이 나는 것 같아.", next: "after_dain_cheer", stats: { Dain: { affinity: 10 } } },
            { text: "응, 정말 멋있더라. 배구하는 모습에 눈을 뗄 수가 없었어.", next: "after_dain_cheer", stats: { Dain: { affinity: 15 } } },
            { text: "다인아, 땀 흘리는 모습이 정말 섹시해. 우리 지금 단둘이 있는데...", next: "after_dain_trap", stats: { Dain: { affinity: -20 } } },
            { text: "시끄러워서 와봤어. 연습 좀 조용히 하면 안 돼?", next: "after_dain_rude", stats: { Dain: { affinity: -30 } } }
        ]
    },
    "after_dain_trap": {
        name: "다인",
        text: "(다인이의 얼굴이 순식간에 홍당무처럼 빨개지더니, 이내 화난 표정으로 바뀐다.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        next: "after_dain_trap_2"
    },
    "after_dain_trap_2": {
        name: "다인",
        text: "\"뭐, 뭐뭐뭐... 무슨 소릴 하는 거야, 이 변태야! 너 진짜 실망이다! 당장 나가! 안 나가면 배구공으로 스파이크 날려버릴 줄 알아!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_angry.png",
        sunset: true,
        next: "after_home"
    },
    "after_dain_rude": {
        name: "다인",
        text: "(다인이의 표정이 순식간에 굳어진다. 그녀는 배구공을 꽉 쥐며 나를 노려본다.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_angry.png",
        sunset: true,
        next: "after_dain_rude_2"
    },
    "after_dain_rude_2": {
        name: "다인",
        text: "\"뭐...? 시끄러워? 하, 어이가 없네. 연습 방해하지 말고 당장 나가! 너 같은 애한테 보여줄 모습 따윈 없으니까!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_angry.png",
        sunset: true,
        next: "after_home"
    },
    "after_dain_cheer": {
        name: "다인",
        text: "(다인이가 쑥스러운 듯 코끝을 찡긋하며 웃는다.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_cheer_2"
    },
    "after_dain_cheer_2": {
        name: "다인",
        text: "\"뭐, 뭐야... 갑자기 그렇게 칭찬하면 부끄럽잖아! 딱히 너 들으라고 열심히 한 건 아니니까 착각하지 마! 그래도... 네가 봐주니까 좀 더 힘이 나는 것 같기도 하고...\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        next: "after_dain_end"
    },
    "after_dain_normal": {
        name: "다인",
        text: "(다인이가 장난스럽게 내 어깨를 툭 친다.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_normal_2"
    },
    "after_dain_normal_2": {
        name: "다인",
        text: "\"에이~ 솔직하지 못하긴! 뭐, 좋아. 온 김에 우리 연습 끝날 때까지 좀 기다려줄래? 같이 떡볶이라도 먹으러 가자!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_end"
    },
    "after_dain_end": {
        name: "나",
        text: "(다인이의 연습이 끝날 때까지 체육관 스탠드에 앉아 그녀를 지켜보았다.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        sunset: true,
        next: "after_dain_end_2"
    },
    "after_dain_end_2": {
        name: "다인",
        text: "(연습을 마친 다인이가 거친 숨을 몰아쉬며 나에게 다가온다.) \"하아... 하아... 기다리게 해서 미안! 자, 약속했던 떡볶이 먹으러 가자!\"",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        setFlag: "datedDainDay1",
        next: "after_dain_tteokbokki"
    },
    "after_dain_tteokbokki": {
        name: "다인",
        text: "(김이 모락모락 나는 떡볶이를 한 입 베어 물며 다인이가 행복한 미소를 짓는다.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "after_dain_tteokbokki_2"
    },
    "after_dain_tteokbokki_2": {
        name: "다인",
        text: "\"캬~ 역시 운동 끝나고 먹는 떡볶이가 최고라니까! 오늘 같이 와줘서 정말 고마워. 덕분에 평소보다 두 배는 더 맛있는 것 같아!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "after_dain_tteokbokki_3"
    },
    "after_dain_tteokbokki_3": {
        name: "다인",
        text: "\"우리 내일도... 아니, 앞으로도 자주 같이 먹으러 오자! 약속이다?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "dain_contact_exchange"
    },
    "dain_contact_exchange": {
        name: "다인",
        text: "(다인이가 떡볶이 국물을 닦으며 장난스럽게 스마트폰을 흔들어 보인다.) \"야, {name?}! 우리 앞으로도 같이 맛있는 거 먹으러 다니려면 연락처 정도는 있어야 하지 않겠어? 번호 찍어봐!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        choices: [
            { text: "좋아! 다인이랑 맛집 탐방 다니면 재밌겠다.", next: "dain_contact_success", setFlags: ["has_number_dain", "has_any_contact"] },
            { 
                text: "번호 따는 김에... 지금 바로 전화해도 돼?", 
                next: "dain_contact_call_fail",
                affinityChar: "Dain",
                affinityBranches: [
                    { minAffinity: 50, next: "dain_contact_call_success" }
                ],
                setFlags: ["has_number_dain", "has_any_contact"]
            },
            { text: "음... 나중에 기회 되면 알려줄게.", next: "dain_contact_fail", stats: { Dain: { affinity: -10 } } }
        ]
    },
    "dain_contact_call_success": {
        name: "다인",
        text: "(다인이가 얼굴을 붉히며 당황한 듯 웃는다.) \"뭐, 뭐야! 갑자기? ...뭐, 목소리 듣고 싶다면 안 될 건 없지만. 대신 너무 오래 하진 마! 나 내일 연습 일찍 가야 하니까!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shy.png",
        stats: { Dain: { affinity: 15 } },
        next: "after_home"
    },
    "dain_contact_call_fail": {
        name: "다인",
        text: "(다인이가 어이없다는 듯 헛웃음을 터뜨린다.) \"하! 너 진짜 대담하네? 번호 받자마자 전화라니, 너무 앞서가는 거 아냐? 일단 메시지부터 주고받으면서 친해지자고!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_nomal.png",
        stats: { Dain: { affinity: -5 } },
        next: "after_home"
    },
    "dain_contact_success": {
        name: "다인",
        text: "(다인이가 시원하게 웃으며 내 번호를 저장한다.) \"오케이! 접수 완료! 내가 맛있는 데 찾으면 바로 메시지 날릴 테니까 대기 타고 있어라?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        stats: { Dain: { affinity: 15 } },
        next: "after_home"
    },
    "dain_contact_fail": {
        name: "다인",
        text: "(다인이가 조금 의외라는 듯 눈을 동그랗게 뜨더니, 이내 씩씩하게 웃어넘긴다.) \"뭐야~ 튕기는 거야? 알았어, 알았어! 내가 더 노력해서 네 번호 따고 만다!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_nomal.png",
        night: true,
        next: "after_home"
    },
    "after_yuna_new": {
        name: "나",
        text: "(학교의 조용한 곳을 찾아 걷다 보니, 낡은 도서관 별관에 도착했다. 노을빛이 스며드는 그곳에는 한 소녀가 창가에 앉아 있다.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_new_2"
    },
    "after_yuna_new_2": {
        name: "???",
        text: "\"안녕? 이 시간에 여기까지 오다니... 너도 참 특이하네. 나는 유나라고 해.\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        setFlag: "metYuna",
        next: "after_yuna_3"
    },
    "after_seoyeon": {
        name: "서연",
        text: "(학생회실 문을 열자, 산더미처럼 쌓인 서류들 사이에서 고군분투하고 있는 서연이가 보인다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_2"
    },
    "after_seoyeon_2": {
        name: "서연",
        text: "(내가 들어오자 그녀가 깜짝 놀라며 고개를 든다. 그녀는 펜을 내려놓고 기지개를 켠다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_3"
    },
    "after_seoyeon_3": {
        name: "서연",
        text: "\"어? {name?}! 이 시간에 어쩐 일이야? 설마... 나 기다려준 거야?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "응, 같이 하교하고 싶어서. 도와줄까?", next: "after_seoyeon_help", setFlag: "helpedSeoyeon", stats: { Seoyeon: { affinity: 10 } } },
            { text: "그냥 얼굴 보고 싶어서 왔어. 너무 무리하는 거 아냐?", next: "after_seoyeon_worry", stats: { Seoyeon: { affinity: 5 } } },
            { text: "착각하지 마. 그냥 길을 잘못 든 것뿐이야.", next: "after_seoyeon_rude", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "after_seoyeon_rude": {
        name: "서연",
        text: "(서연이의 표정이 순식간에 굳어진다. 그녀는 다시 서류로 시선을 돌린다.)",
        character: "assets/images/characters/seyoun_angry.png",
        next: "after_seoyeon_rude_2"
    },
    "after_seoyeon_rude_2": {
        name: "서연",
        text: "\"아... 그래? 그럼 방해하지 말고 나가줄래? 나 지금 좀 바쁘거든.\"",
        character: "assets/images/characters/seyoun_angry.png",
        next: "after_home"
    },
    "after_seoyeon_help": {
        name: "서연",
        text: "(그녀가 감동한 듯 눈을 크게 뜬다. 이내 환한 미소를 지으며 내 옆자리를 내어준다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "after_seoyeon_help_2"
    },
    "after_seoyeon_help_2": {
        name: "서연",
        text: "(우리는 말없이 서류를 정리하며 묘한 유대감을 느낀다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_help_2_2"
    },
    "after_seoyeon_help_2_2": {
        name: "서연",
        text: "\"정말? 고마워! 네가 도와준다면 금방 끝낼 수 있을 것 같아. 자, 이 서류들 분류하는 것 좀 도와줄래?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "after_seoyeon_help_3"
    },
    "after_seoyeon_help_3": {
        name: "서연",
        text: "\"우리... 끝나고 같이 맛있는 거 먹으러 가자!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "after_seoyeon_cafe"
    },
    "after_seoyeon_cafe": {
        name: "서연",
        text: "(서류 정리를 마치고 우리는 학교 앞 작은 카페에 들렀다.)",
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
        text: "\"네 덕분에 학생회 일도 즐겁게 마무리할 수 있었어. 우리... 내일도 같이 하교할 수 있을까?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "물론이지. 내일도 기다릴게.", next: "after_seoyeon_promise", stats: { Seoyeon: { affinity: 10 } } },
            { text: "글쎄, 내일 기분 봐서? (장난)", next: "after_seoyeon_tease", stats: { Seoyeon: { affinity: 7 } } }
        ]
    },
    "after_seoyeon_promise": {
        name: "서연",
        text: "(그녀가 새끼손가락을 내밀며 환하게 웃는다.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "after_seoyeon_promise_2"
    },
    "after_seoyeon_promise_2": {
        name: "서연",
        text: "\"약속한 거다? 어기면 안 돼! 그럼 내일 봐, {name?}. 조심히 들어가!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "after_home"
    },
    "after_seoyeon_tease": {
        name: "서연",
        text: "(그녀가 볼을 빵빵하게 부풀리며 나를 째려본다.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "after_seoyeon_tease_2"
    },
    "after_seoyeon_tease_2": {
        name: "서연",
        text: "\"치... 정말 못됐다니까! 그래도 꼭 와야 해? 안 오면 학생회장의 권한으로 벌을 줄 테니까! 후훗, 농담이야. 내일 봐!\"",
        character: "assets/images/characters/seyoun_pout.png",
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
        text: "\"헤헤, 들켰네. 학생회장이라는 게 생각보다 할 일이 많거든. 하지만 네가 이렇게 걱정해주니까 힘이 불끈 솟는걸? 조금만 기다려줘, 금방 끝내고 같이 가자!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe"
    },
    "after_yuna": {
        name: "유나",
        text: "(도서관 별관은 낮보다 더 어둡고 고요하다. 그곳에는 한 소녀가 창가에 앉아 노을을 바라보고 있다.)",
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
        text: "\"아, {name?}... 방과 후의 도서관은 더 고요해서 좋아. 넌 무슨 일로 온 거야?\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "yuna_name_share_pre"
    },
    "yuna_name_share_pre": {
        name: "나",
        text: "\"내 이름은 '{name}'야. 너랑 친해지고 싶어.\"",
        setFlag: "knowsName_유나",
        next: "yuna_name_share"
    },
    "after_yuna_secret_deep": {
        name: "유나",
        text: "(유나가 책을 덮고 나를 빤히 바라본다. 그녀의 눈동자가 보랏빛으로 기묘하게 빛나는 것 같다.) \"...진실? 그걸 감당할 준비가 됐어? 좋아, 네가 그 정도로 진심이라면... 따라와. 아무에게도 말하지 않겠다고 약속해.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 20 } },
        next: "after_yuna_rooftop"
    },
    "after_yuna_secret_fail": {
        name: "유나",
        text: "(유나가 차가운 미소를 짓는다.) \"진실이라... 후훗, 넌 아직 그 무게를 견디기엔 너무 가벼워 보여. 궁금해하는 건 자유지만, 너무 깊이 파고들지 마. 다칠 수도 있으니까.\"",
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
        text: "\"급식...? 그런 세속적인 이야기는 다른 애들이랑 해. 난 지금 바쁘니까 방해하지 말고 나가줄래?\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_home"
    },
    "after_yuna_rude": {
        name: "유나",
        text: "(그녀가 책을 덮으며 나를 차갑게 쳐다본다. 공기가 순식간에 얼어붙는 것 같다.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_yuna_rude_2"
    },
    "after_yuna_rude_2": {
        name: "유나",
        text: "\"음침하다고...? 후훗, 넌 아직 아무것도 모르는구나. 이 학교를 감싸고 있는 이 기묘한 기운... 넌 느껴지지 않아? 무지함은 때로 죄가 되기도 하지. 당장 내 눈앞에서 사라져.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_home"
    },
    "yuna_name_share": {
        name: "유나",
        text: "(그녀가 내 이름을 나지막이 읊조린다.) \"...{name}. 기억해둘게. 하지만 이름 같은 건... 이 학교에선 큰 의미가 없을지도 몰라.\"",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_know"
    },
    "after_yuna_know": {
        name: "유나",
        text: "(그녀가 천천히 고개를 돌려 나를 바라본다. 그녀의 입가에 희미한 미소가 번진다.)",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "after_yuna_know_2"
    },
    "after_yuna_know_2": {
        name: "유나",
        text: "(그녀는 내 손을 잡고 별관 옥상으로 나를 이끈다.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_yuna_know_2_2"
    },
    "after_yuna_know_2_2": {
        name: "유나",
        text: "\"나에 대해...? 후훗, 용감한 건지 무모한 건지 모르겠네.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_yuna_know_3"
    },
    "after_yuna_know_3": {
        name: "유나",
        text: "\"좋아, 오늘 밤은 길 테니까. 조금씩... 아주 조금씩 알려줄게. 따라와.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_yuna_rooftop"
    },
    "after_yuna_rooftop": {
        name: "유나",
        text: "(별관 옥상에서 내려다보는 학교는 낮과는 전혀 다른 모습이다.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "after_yuna_rooftop_2"
    },
    "after_yuna_rooftop_2": {
        name: "유나",
        text: "(유나는 난간에 기대어 먼 곳을 응시한다.)",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "after_yuna_rooftop_2_2"
    },
    "after_yuna_rooftop_2_2": {
        name: "유나",
        text: "\"사람들은 이 학교가 완벽하다고 생각하지. 하지만 완벽한 건 없어.\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        next: "after_yuna_rooftop_3"
    },
    "after_yuna_rooftop_3": {
        name: "유나",
        text: "\"겉으로 드러나지 않은 문제들이 곪아가고 있을 뿐이야. 이 학교를 가득 채운 무거운 기운... 넌 그런 위화감, 못 느꼈어?\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        choices: [
            { text: "너와 함께라면 어디든 갈 수 있어.", next: "after_yuna_together" },
            { text: "어둠이라니... 좀 무서운데.", next: "after_yuna_scared" }
        ]
    },
    "after_yuna_together": {
        name: "유나",
        text: "(그녀가 내 손을 꽉 쥔다. 그녀는 내 눈을 보며 슬픈 미소를 짓는다.)",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        next: "after_yuna_together_2"
    },
    "after_yuna_together_2": {
        name: "유나",
        text: "\"바보 같은 소리... 하지만 그 대답, 싫지 않아. 좋아, 그럼 우리... 서로의 비밀을 공유하는 사이가 되는 건 어때?\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        next: "yuna_contact_exchange"
    },
    "yuna_contact_exchange": {
        name: "유나",
        text: "(유나가 옥상 난간에서 몸을 떼며 무심하게 스마트폰을 내민다.) \"비밀을 공유하려면... 연락할 수단 정도는 있어야겠지. 네 번호, 여기에 남겨줘.\"",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        choices: [
            { text: "응, 유나랑 더 많은 비밀을 나누고 싶어.", next: "yuna_contact_success", setFlags: ["has_number_yuna", "has_any_contact"] },
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
        text: "(그녀가 손가락을 입술에 갖다 대며 조용히 하라는 신호를 보낸다.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_yuna_secret_2"
    },
    "after_yuna_secret_2": {
        name: "유나",
        text: "\"쉿... 벽에도 귀가 있는 법이야. 진실을 알게 되면 넌 더 이상 평범한 일상으로 돌아갈 수 없어. 그래도 괜찮다면... 내 손을 잡아.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_yuna_rooftop"
    },
    "after_home": {
        name: "나",
        text: "(교문을 나서며 오늘 하루를 되돌아본다. 전학 첫날치고는 정말 많은 일이 있었다.)",
        background: "assets/images/background/school.png",
        character: null,
        sunset: true,
        next: "after_home_2"
    },
    "after_home_2": {
        name: "나",
        text: "(노을이 지는 거리를 걸으며 내일은 또 어떤 일이 벌어질지 기대해본다.)",
        sunset: true,
        next: "after_home_2_2"
    },
    "after_home_2_2": {
        name: "나",
        text: "(내일도... 그녀들을 만날 수 있겠지?)",
        sunset: true,
        next: "evening_home"
    },
    "night_home": {
        name: "나",
        text: "(어두워진 거리를 걸으며 집으로 향한다. 가로등 불빛이 길게 늘어진다.)",
        background: "assets/images/background/school.png",
        character: null,
        night: true,
        next: "evening_home"
    },
    "evening_home": {
        name: "나",
        text: "(집에 돌아와 침대에 눕자 오늘 하루의 일들이 주마등처럼 스쳐 지나간다.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        next: "evening_home_2"
    },
    "evening_home_2": {
        name: "나",
        text: "(천장을 바라보며 나는 깊은 생각에 잠긴다.)",
        night: true,
        next: "evening_home_2_2"
    },
    "evening_home_2_2": {
        name: "나",
        text: "(전학 첫날부터 이렇게 파란만장할 줄이야... 내일은 또 어떤 일이 기다리고 있을까?)",
        night: true,
        choices: [
            { text: "서연이의 다정한 미소를 떠올려 본다.", next: "evening_think_seoyeon", condition: "metSeoyeon" },
            { text: "유나가 했던 말들을 곱씹어 본다.", next: "evening_think_yuna_met", condition: "metYuna" },
            { text: "다인이의 활기찬 미소를 떠올려 본다.", next: "evening_think_dain", condition: "metDain" },
            { text: "학교에 대해 느꼈던 의문점들을 떠올려 본다.", next: "evening_think_yuna", excludeCondition: "metYuna" },
            { text: "피곤하니 아무 생각 말고 잠이나 자자.", next: "evening_sleep" }
        ]
    },
    "evening_think_seoyeon": {
        name: "나",
        text: "(서연이의 다정한 미소와 목소리가 머릿속을 떠나지 않는다. 그녀 덕분에 낯선 학교생활에 조금은 자신감이 생기는 기분이다.)",
        night: true,
        next: "evening_sleep"
    },
    "evening_think_dain": {
        name: "나",
        text: "(다인이의 건강한 웃음소리가 귓가에 맴도는 것 같다. 나는 내일 그녀와 함께 먹을 떡볶이를 기대하며 잠을 청했다.)",
        night: true,
        next: "evening_sleep"
    },
    "evening_think_yuna": {
        name: "나",
        text: "(학교 곳곳에서 느껴졌던 기묘한 분위기와 소문들이 머릿속을 떠나지 않는다. 대체 이 학교는 무엇을 숨기고 있는 걸까?)",
        night: true,
        next: "evening_sleep"
    },
    "evening_think_yuna_met": {
        name: "나",
        text: "(유나가 했던 '학교의 비밀'이라는 말이 머릿속을 떠나지 않는다. 그녀는 대체 무엇을 알고 있는 걸까?)",
        night: true,
        next: "evening_sleep"
    },
    "evening_sleep": {
        name: "나",
        text: "(눈을 감자마자 깊은 잠에 빠져들었다. 꿈속에서 나는 끝없는 복도를 달리고 있었다.)",
        night: true,
        changeDay: 2,
        next: "day2_start"
    }
};
