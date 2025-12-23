const SCENARIO = {
    "start": {
        name: "???",
        text: "안녕? 처음 보는 얼굴이네. 이 시간에 교문 앞에 서 있는 걸 보니...",
        background: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1280&h=720&auto=format&fit=crop",
        character: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
        next: "intro_1"
    },
    "intro_1": {
        name: "???",
        text: "혹시 오늘 온다는 그 전학생이니? 나는 학생회장 '서연'이라고 해.",
        choices: [
            { text: "응, 반가워. 길을 좀 헤매고 있었어.", next: "path_friendly_1" },
            { text: "맞긴 한데, 학생회장이 마중까지 나올 줄은 몰랐네.", next: "path_cold_1" }
        ]
    },
    "path_friendly_1": {
        name: "서연",
        text: "후훗, 역시 그랬구나. 우리 학교가 좀 넓긴 하지? 내가 교무실까지 안내해줄게. 따라와!",
        character: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&mood[]=happy",
        next: "hallway_1"
    },
    "path_cold_1": {
        name: "서연",
        text: "아... 마중이라기보다는 순찰 중이었어. 기분 나빴다면 미안해. 교무실은 저쪽 건물 2층이야.",
        character: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&mood[]=sad",
        next: "alone_1"
    },
    "hallway_1": {
        name: "서연",
        text: "복도를 지나면서 학교 시설들을 설명해줄게. 저기 보이는 곳이 우리 학교 자랑인 도서관이야.",
        background: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1280&h=720&auto=format&fit=crop",
        next: "hallway_2"
    },
    "hallway_2": {
        name: "서연",
        text: "너는 어떤 동아리에 관심 있어? 우리 학생회도 항상 새로운 인재를 환영하고 있거든.",
        choices: [
            { text: "학생회에 들어가면 너랑 더 자주 볼 수 있는 거야?", next: "path_flirt" },
            { text: "아직은 잘 모르겠어. 천천히 생각해볼게.", next: "path_normal" }
        ]
    },
    "path_flirt": {
        name: "서연",
        text: "어...? 그, 그건 그렇겠지만... 갑자기 그렇게 물어보면 좀 당황스럽잖아.",
        character: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&mood[]=happy&accessories[]=shades",
        next: "end_demo"
    },
    "path_normal": {
        name: "서연",
        text: "응, 서두를 필요는 없지. 전학 첫날이니까 학교 분위기부터 익히는 게 중요해.",
        next: "end_demo"
    },
    "alone_1": {
        name: "나",
        text: "혼자 가겠다고는 했지만... 생각보다 건물이 복잡하네. 여기가 어디지?",
        background: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1280&h=720&auto=format&fit=crop",
        character: null,
        next: "alone_2"
    },
    "alone_2": {
        name: "???",
        text: "어머, 길을 잃은 어린 양인가요?",
        character: "https://api.dicebear.com/7.x/avataaars/svg?seed=Molly",
        next: "end_demo"
    },
    "end_demo": {
        name: "시스템",
        text: "데모 버전의 시나리오가 여기까지 준비되었습니다. 다음 이야기를 기대해주세요!",
        next: null
    }
};
