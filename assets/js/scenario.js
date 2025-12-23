const SCENARIO = {
    "start": {
        name: "???",
        text: "(따스한 햇살이 내리쬐는 교문 앞. 전학 첫날의 설렘과 긴장감이 교차한다.)\n\n안녕? 처음 보는 얼굴이네. 이 시간에 교문 앞에 서 있는 걸 보니...",
        background: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1280&q=80",
        character: "assets/images/characters/girl1.png",
        next: "intro_1"
    },
    "intro_1": {
        name: "???",
        text: "(그녀가 생긋 웃으며 다가온다. 바람에 살짝 흔들리는 그녀의 머리카락에서 은은한 샴푸 향기가 나는 것 같다.)\n\n혹시 오늘 온다는 그 전학생이니? 나는 학생회장 '서연'이라고 해.",
        choices: [
            { text: "응, 반가워. 길을 좀 헤매고 있었어.", next: "path_friendly_1" },
            { text: "맞긴 한데, 학생회장이 마중까지 나올 줄은 몰랐네.", next: "path_cold_1" }
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
    "hallway_1": {
        name: "서연",
        text: "(서연이의 뒤를 따라 복도를 걷는다. 복도 창문 너머로 학생들의 활기찬 목소리가 들려온다.)\n\n복도를 지나면서 학교 시설들을 설명해줄게. 저기 보이는 곳이 우리 학교 자랑인 도서관이야.",
        background: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1280&q=80",
        next: "hallway_2"
    },
    "hallway_2": {
        name: "서연",
        text: "(그녀가 갑자기 멈춰 서서 나를 돌아본다. 진지한 눈빛에 나도 모르게 침을 꼴깍 삼켰다.)\n\n너는 어떤 동아리에 관심 있어? 우리 학생회도 항상 새로운 인재를 환영하고 있거든.",
        choices: [
            { text: "학생회에 들어가면 너랑 더 자주 볼 수 있는 거야?", next: "path_flirt" },
            { text: "아직은 잘 모르겠어. 천천히 생각해볼게.", next: "path_normal" }
        ]
    },
    "path_flirt": {
        name: "서연",
        text: "(서연이의 얼굴이 순식간에 붉어진다. 당황해서 시선을 피하는 모습이 꽤 귀엽다.)\n\n어...? 그, 그건 그렇겠지만... 갑자기 그렇게 물어보면 좀 당황스럽잖아.",
        character: "assets/images/characters/girl1.png",
        next: "end_demo"
    },
    "path_normal": {
        name: "서연",
        text: "(그녀는 고개를 끄덕이며 다시 앞장서 걷기 시작한다. 조금은 아쉬운 기분이 드는 건 왜일까.)\n\n응, 서두를 필요는 없지. 전학 첫날이니까 학교 분위기부터 익히는 게 중요해.",
        next: "end_demo"
    },
    "alone_1": {
        name: "나",
        text: "(서연이를 보내고 혼자 남겨졌다. 차가운 공기가 피부에 닿자 조금 후회가 밀려온다.)\n\n혼자 가겠다고는 했지만... 생각보다 건물이 복잡하네. 여기가 어디지?",
        background: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1280&q=80",
        character: null,
        next: "alone_2"
    },
    "alone_2": {
        name: "???",
        text: "(뒤에서 들려온 낯선 목소리에 깜짝 놀라 뒤를 돌아보았다. 거기에는 묘한 분위기를 풍기는 소녀가 서 있었다.)\n\n어머, 길을 잃은 어린 양인가요?",
        character: "assets/images/characters/girl2.png",
        next: "end_demo"
    },
    "end_demo": {
        name: "시스템",
        text: "(화면이 서서히 어두워지며 데모가 종료된다.)\n\n데모 버전의 시나리오가 여기까지 준비되었습니다. 다음 이야기를 기대해주세요!",
        next: null
    }
};
