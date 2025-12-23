const SCENARIO = {
    "start": {
        name: "???",
        text: "(따스한 햇살이 내리쬐는 교문 앞. 전학 첫날의 설렘과 긴장감이 교차한다.)\n\n안녕? 처음 보는 얼굴이네. 이 시간에 교문 앞에 서 있는 걸 보니...",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/girl1.png",
        next: "intro_1"
    },
    "intro_1": {
        name: "???",
        text: "(그녀가 생긋 웃으며 다가온다. 바람에 살짝 흔들리는 그녀의 머리카락에서 은은한 샴푸 향기가 나는 것 같다.)\n\n혹시 오늘 온다는 그 전학생이니? 나는 학생회장 '서연'이라고 해.",
        choices: [
            { text: "응, 반가워. 길을 좀 헤매고 있었어.", next: "path_friendly_1" },
            { text: "맞긴 한데, 학생회장이 마중까지 나올 줄은 몰랐네.", next: "path_cold_1" },
            { text: "너, 참 예쁘다... (나도 모르게 본심이 튀어나왔다!)", next: "path_blush_1" },
            { text: "(긴장해서 아무 말도 나오지 않는다. 그저 멍하니 그녀를 바라볼 뿐...)", next: "path_silent_1" }
        ]
    },
    "path_friendly_1": {
        name: "서연",
        text: "(나의 대답에 그녀가 안심한 듯 밝게 웃는다.)\n\n후훗, 역시 그랬구나. 우리 학교가 좀 넓긴 하지? 내가 교무실까지 안내해줄게. 따라와!",
        character: "assets/images/characters/girl1.png",
        next: "hallway_1"
    },
    "path_cold_1": {
        name: "서연",
        text: "(그녀의 표정이 순식간에 어색하게 굳어진다. 아차, 너무 까칠하게 말했나...)\n\n아... 마중이라기보다는 순찰 중이었어. 기분 나빴다면 미안해. 교무실은 저쪽 건물 2층이야.",
        character: "assets/images/characters/girl1.png",
        next: "alone_1"
    },
    "path_blush_1": {
        name: "서연",
        text: "(서연이의 얼굴이 순식간에 사과처럼 빨개진다. 당황해서 어쩔 줄 몰라 하는 모습이 무척 신선하다.)\n\n에...? 그, 갑자기 무슨 소리를 하는 거야! 전학생은 다 너처럼 능글맞니? 어서 따라오기나 해!",
        character: "assets/images/characters/girl1.png",
        next: "hallway_1"
    },
    "path_silent_1": {
        name: "서연",
        text: "(그녀가 내 눈앞에서 손을 흔든다. 걱정스러운 눈빛이 나를 향한다.)\n\n저기... 괜찮니? 어디 아픈 건 아니지? 일단 보건실보다는 교무실부터 가는 게 좋겠어. 안내해줄게.",
        character: "assets/images/characters/girl1.png",
        next: "hallway_1"
    },
    "alone_1": {
        name: "나",
        text: "(서연이는 차갑게 가버렸다. 첫날부터 너무 까칠하게 굴었나...)\n\n뭐, 어쩔 수 없지. 일단 알려준 대로 교무실을 찾아가서 선생님을 만나야겠다.",
        background: "assets/images/background/school.png",
        character: null,
        next: "classroom_1_alone"
    },
    "classroom_1_alone": {
        name: "나",
        text: "(선생님께 안내를 받아 교실 문 앞에 도착했다. 안쪽에서 아이들의 웅성거리는 소리가 들려온다.)\n\n후우... 서연이 없이 혼자 들어가려니 아까보다 더 긴장되는걸.",
        background: "assets/images/background/room_school.png",
        next: "classroom_2_alone"
    },
    "hallway_1": {
        name: "서연",
        text: "(서연이의 뒤를 따라 복도를 걷는다. 복도 창문 너머로 학생들의 활기찬 목소리가 들려온다.)\n\n복도를 지나면서 학교 시설들을 설명해줄게. 저기 보이는 곳이 우리 학교 자랑인 도서관이야.",
        background: "assets/images/background/load_school.png",
        next: "hallway_2"
    },
    "hallway_2": {
        name: "서연",
        text: "(그녀가 갑자기 멈춰 서서 나를 돌아본다. 진지한 눈빛에 나도 모르게 침을 꼴깍 삼켰다.)\n\n너는 어떤 동아리에 관심 있어? 우리 학생회도 항상 새로운 인재를 환영하고 있거든.",
        choices: [
            { text: "학생회에 들어가면 너랑 더 자주 볼 수 있는 거야?", next: "path_flirt" },
            { text: "아직은 잘 모르겠어. 천천히 생각해볼게.", next: "path_normal" },
            { text: "도서관 동아리는 어때? 조용히 책 읽는 걸 좋아하거든.", next: "path_library" },
            { text: "동아리보다는 너에 대해 더 알고 싶어. (직구!)", next: "path_direct" }
        ]
    },
    "path_flirt": {
        name: "서연",
        text: "(서연이의 얼굴이 순식간에 붉어진다. 당황해서 시선을 피하는 모습이 꽤 귀엽다.)\n\n어...? 그, 그건 그렇겠지만... 갑자기 그렇게 물어보면 좀 당황스럽잖아.",
        character: "assets/images/characters/girl1.png",
        next: "classroom_1"
    },
    "path_normal": {
        name: "서연",
        text: "(그녀는 고개를 끄덕이며 다시 앞장서 걷기 시작한다. 조금은 아쉬운 기분이 드는 건 왜일까.)\n\n응, 서두를 필요는 없지. 전학 첫날이니까 학교 분위기부터 익히는 게 중요해.",
        next: "classroom_1"
    },
    "path_library": {
        name: "서연",
        text: "(그녀가 의외라는 듯 눈을 크게 뜬다. 하지만 이내 부드러운 미소를 짓는다.)\n\n도서관 동아리? 너랑 잘 어울리는 것 같아. 우리 학교 도서관은 정말 조용하고 아늑하거든. 나중에 같이 가볼래?",
        character: "assets/images/characters/girl1.png",
        next: "classroom_1"
    },
    "path_direct": {
        name: "서연",
        text: "(그녀가 멍하니 나를 바라보다가, 이내 풋 하고 웃음을 터뜨린다.)\n\n후훗, 너 정말 솔직하구나? 나에 대해서라... 글쎄, 그건 네가 학생회에 들어오면 천천히 알려줄 수도 있는데?",
        character: "assets/images/characters/girl1.png",
        next: "classroom_1"
    },
    "classroom_1": {
        name: "서연",
        text: "(교실 문 앞에 도착했다. 안쪽에서 아이들의 웅성거리는 소리가 들려온다.)\n\n자, 여기가 네가 앞으로 지낼 교실이야. 긴장하지 말고, 내가 옆에 있으니까.",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/girl1.png",
        next: "classroom_2"
    },
    "classroom_2": {
        name: "선생님",
        text: "(교탁 앞에 서자 수십 개의 시선이 나에게 꽂힌다. 서연이는 내 옆에서 든든하게 미소 짓고 있다.)\n\n자, 다들 주목! 오늘부터 우리와 함께하게 된 전학생이다. 자기소개 한마디 할까?",
        character: null,
        choices: [
            { text: "안녕, 잘 부탁해! 운동하는 걸 좋아해.", next: "class_after_active" },
            { text: "만나서 반가워. 조용히 지내는 편이야.", next: "class_after_quiet" },
            { text: "빨리 친해지고 싶어! 오늘 방과 후에 다 같이 놀러 갈 사람?", next: "class_after_party" },
            { text: "공부하러 왔어. 방해하지 말아줬으면 좋겠네.", next: "class_after_study" }
        ]
    },
    "classroom_2_alone": {
        name: "선생님",
        text: "(교탁 앞에 서자 수십 개의 시선이 나에게 꽂힌다. 아는 얼굴 하나 없는 교실이 낯설게 느껴진다.)\n\n자, 다들 주목! 오늘부터 우리와 함께하게 된 전학생이다. 자기소개 한마디 할까?",
        character: null,
        choices: [
            { text: "안녕, 잘 부탁해! 운동하는 걸 좋아해.", next: "class_after_active" },
            { text: "만나서 반가워. 조용히 지내는 편이야.", next: "class_after_quiet" },
            { text: "빨리 친해지고 싶어! 오늘 방과 후에 다 같이 놀러 갈 사람?", next: "class_after_party" },
            { text: "공부하러 왔어. 방해하지 말아줬으면 좋겠네.", next: "class_after_study" }
        ]
    },
    "class_after_active": {
        name: "아이들",
        text: "(교실 여기저기서 환호성이 터져 나온다. 활기찬 분위기가 마음에 든다.)\n\n오~ 운동 잘하게 생겼는데? 점심시간에 축구 한 판 고?",
        next: "lunch_time"
    },
    "class_after_quiet": {
        name: "아이들",
        text: "(아이들이 고개를 끄덕이며 차분하게 나를 받아들인다. 부담스럽지 않은 시선이 편안하다.)\n\n그래, 반가워. 모르는 거 있으면 언제든 물어봐.",
        next: "lunch_time"
    },
    "class_after_party": {
        name: "아이들",
        text: "(교실이 순식간에 시끌벅적해진다. 몇몇 아이들이 벌써부터 내 주변으로 몰려든다.)\n\n와! 전학생 성격 진짜 시원시원하네! 좋아, 오늘 노래방 콜?",
        next: "lunch_time"
    },
    "class_after_study": {
        name: "아이들",
        text: "(교실에 잠시 정적이 흐른다. 아이들이 조금 당황한 듯 서로 눈치를 본다.)\n\n아... 그래, 열공해... (왠지 모르게 벽이 생긴 기분이다.)",
        next: "lunch_time"
    },
    "lunch_time": {
        name: "나",
        text: "(어느덧 오전 수업이 끝나고 점심시간이 되었다. 전학 첫날의 점심, 누구와 먹을까?)",
        background: "assets/images/background/load_school.png",
        choices: [
            { text: "서연이에게 같이 먹자고 제안한다.", next: "lunch_seoyeon" },
            { text: "혼자 학교를 둘러보며 먹을 곳을 찾는다.", next: "lunch_alone" },
            { text: "매점에 가서 빵을 사 먹는다. (매점 빵이 그렇게 맛있다던데!)", next: "lunch_store" },
            { text: "교실에서 잠을 잔다. (어제 긴장해서 잠을 설쳤더니 너무 졸려...)", next: "lunch_sleep" }
        ]
    },
    "lunch_seoyeon": {
        name: "서연",
        text: "(서연이에게 다가가자 그녀가 기다렸다는 듯 가방에서 도시락을 꺼낸다.)\n\n아, 같이 먹자고? 마침 나도 혼자 먹기 심심했는데 잘됐다! 옥상으로 갈까?",
        character: "assets/images/characters/girl1.png",
        next: "rooftop_1"
    },
    "rooftop_1": {
        name: "서연",
        text: "(시원한 바람이 부는 학교 옥상. 서연이가 정성스럽게 싸온 도시락을 펼친다.)\n\n자, 이건 내가 직접 만든 거야. 입맛에 맞을지 모르겠네. 한 번 먹어볼래?",
        background: "assets/images/background/top_school.png",
        next: "end_demo"
    },
    "lunch_alone": {
        name: "나",
        text: "(혼자 복도를 걷다 보니 아침에 봤던 그 신비로운 소녀와 다시 마주쳤다.)",
        background: "assets/images/background/load_school.png",
        next: "alone_2"
    },
    "lunch_store": {
        name: "나",
        text: "(매점으로 달려가 가장 인기 있다는 '초코 소라빵'을 쟁취했다! 한 입 베어 물자 달콤함이 입안 가득 퍼진다.)\n\n음~ 역시 소문대로야! 혼자 먹는 빵도 나쁘지 않네.",
        next: "end_demo"
    },
    "lunch_sleep": {
        name: "나",
        text: "(책상에 엎드려 잠을 청한다. 멀리서 아이들의 웃음소리가 들려오지만, 이내 깊은 잠에 빠져들었다.)\n\n(꿈속에서 누군가 나를 부르는 것 같은 기분이 들었다...)",
        next: "end_demo"
    },
    "alone_2": {
        name: "???",
        text: "(그녀는 창가에 기대어 책을 읽고 있다가 나를 발견하고는 살며시 미소 짓는다.)\n\n어머, 다시 만났네요. 전학생 군. 혼자 점심이라니, 외로운 늑대 스타일인가요?",
        character: "assets/images/characters/girl2.png",
        next: "molly_talk_1"
    },
    "molly_talk_1": {
        name: "???",
        text: "(그녀의 보랏빛 눈동자가 나를 꿰뚫어 보는 것 같다. 왠지 모를 긴장감이 흐른다.)\n\n나는 '유나'라고 해요. 이 학교의 비밀을 알고 싶다면, 언제든 나를 찾아오세요.",
        next: "end_demo"
    },
    "end_demo": {
        name: "시스템",
        text: "(화면이 서서히 어두워지며 데모가 종료된다.)\n\n데모 버전의 시나리오가 여기까지 준비되었습니다. 다음 이야기를 기대해주세요!",
        next: null
    }
};
