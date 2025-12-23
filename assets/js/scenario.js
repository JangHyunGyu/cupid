const SCENARIO = {
    "start": {
        name: "???",
        text: "안녕? 처음 보는 얼굴이네.",
        background: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1280&h=720&auto=format&fit=crop",
        character: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
        next: "intro_1"
    },
    "intro_1": {
        name: "???",
        text: "나는 이 학교의 학생회장이야. 너는 전학생이니?",
        choices: [
            { text: "응, 오늘 전학 왔어.", next: "path_friendly" },
            { text: "그건 왜 물어봐?", next: "path_cold" }
        ]
    },
    "path_friendly": {
        name: "학생회장",
        text: "그렇구나! 반가워. 내가 학교 안내를 도와줄게.",
        character: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&mood[]=happy",
        next: "end_demo"
    },
    "path_cold": {
        name: "학생회장",
        text: "아... 미안. 그냥 궁금해서 물어봤어.",
        character: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&mood[]=sad",
        next: "end_demo"
    },
    "end_demo": {
        name: "시스템",
        text: "데모 버전이 끝났습니다. 본편을 기대해주세요!",
        next: null
    }
};
