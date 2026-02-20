/**
 * ============================================================================
 * CUPID - Day 4 Afterschool Scenario (Korean Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: ko_day4_3_afterschool.js
 * 언어: 한국어 (Korean)
 * 일차: Day 4 (4일차 - 토요일)
 * 시간대: Afterschool (오후 - 데이트 하이라이트)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 데이트의 하이라이트. 함께 거리를 걸으며 추억을 쌓고,
 * 캐릭터별 특별한 장소를 방문한 뒤,
 * 석양을 배경으로 감정이 최고조에 달한다.
 * 고백을 할 것인지 선택하는 중요한 분기점.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 오후 산책 - 거리 구경, 시장, 길거리 간식
 * 2. 특별한 장소 방문 - 캐릭터별 고유 장소에서 추억 만들기
 * 3. 석양 씬 - 감정 최고조, 분위기 묘사
 * 4. 고백 선택 - 마음을 전하는 순간
 * 5. 고백 수락 - 캐릭터별 로맨틱 모먼트
 * 6. 고백 보류 - 아쉬운 귀가, 미련
 * 
 *  설정 플래그 (Set Flags)
 * ----------------------------------------------------------------------------
 * day4_confessed           : 고백함
 * day4_confession_accepted : 고백 수락됨
 * day4_waited              : 고백을 미룸
 * isDating_Seoyeon         : 서연과 사귀기 시작
 * isDating_Yuna            : 유나와 사귀기 시작
 * isDating_Dain            : 다인과 사귀기 시작
 * isDating_Nurse           : 보건선생님과 사귀기 시작
 * isDating_Teacher         : 담임선생님과 사귀기 시작
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 특별한 장소: 선택에 따라 +3~5
 * 고백 성공 시: 최고 호감도 히로인 +20
 * 고백 보류 시: +5
 * 
 *  노드 수: 81개
 * 
 *  진입/퇴장
 * ----------------------------------------------------------------------------
 * Entry: day4_afternoon_start
 * Exit:  day4_after_confess → next: "day4_night_start"
 *        day4_wait_end      → next: "day4_night_start"
 * 
 * ============================================================================
 */

// SCENARIO 전역 객체 초기화
if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}

// Day 4 시나리오 그룹 초기화
if (!SCENARIO[4]) {
    SCENARIO[4] = {};
}

/**
 * [Day 4 - Afterschool] 씬 데이터 정의
 */
Object.assign(SCENARIO[4], {

    // =========================================================================
    // 1. 오후 시작 — 함께 걷기 (10 노드)
    // =========================================================================

    "day4_afternoon_start": {
        name: "나",
        text: "(카페를 나와 함께 거리를 걸었다. 어느새 오후가 되었다.)",
        background: "assets/images/background/street.png",
        bgm: "sunset2.mp3",
        sunset: true,
        next: "day4_walk_together"
    },

    "day4_walk_together": {
        name: "나",
        background: "assets/images/background/street.png",
        text: "(나란히 걸으며 주변을 둘러본다. 주말이라 거리에 사람이 꽤 많다. 웃음소리, 음악 소리, 달콤한 냄새가 뒤섞인다.)",
        next: "day4_walk_street"
    },

    "day4_walk_street": {
        name: "나",
        background: "assets/images/background/street.png",
        text: "(쇼윈도에 비친 우리 모습이 보인다. 마치 진짜 커플처럼… 심장이 뜀박질한다.)",
        next: "day4_walk_market"
    },

    "day4_walk_market": {
        name: "나",
        background: "assets/images/background/street.png",
        text: "(골목 안쪽에 작은 시장이 보인다. 맛있는 냄새가 바람에 실려온다. 군침이 돈다.)",
        next: "day4_walk_food_choice"
    },

    "day4_walk_food_choice": {
        name: "나",
        background: "assets/images/background/street.png",
        text: "(길거리 음식 노점이 눈에 들어온다. 어떻게 할까?)",
        choices: [
            {
                text: "\"하나 사서 나눠 먹을래?\"",
                next: "day4_walk_food_share"
            },
            {
                text: "\"맛있겠다… 좀만 구경하자.\"",
                next: "day4_walk_food_look"
            }
        ]
    },

    "day4_walk_food_share": {
        name: "나",
        background: "assets/images/background/street.png",
        text: "(붕어빵을 하나 사서 반으로 나눴다. 따끈한 김이 모락모락 올라온다. \"자, 반.\" 건네는 손이 살짝 떨렸다.)",
        next: "day4_walk_close"
    },

    "day4_walk_food_look": {
        name: "나",
        background: "assets/images/background/street.png",
        text: "(노점 앞에서 이것저것 구경하다가 어깨가 스쳤다. 심장이 덜컹한다. 모른 척했지만, 귀까지 빨개진 것 같다.)",
        next: "day4_walk_close"
    },

    "day4_walk_close": {
        name: "나",
        background: "assets/images/background/street.png",
        text: "(나란히 걸으며 다시 큰길로 나왔다. 어느새 거리가 좀 한산해졌다. 석양빛이 건물 사이로 길게 드리워진다.)",
        sunset: true,
        next: "day4_walk_feelings"
    },

    "day4_walk_feelings": {
        name: "나",
        background: "assets/images/background/street.png",
        text: "(이렇게 같이 걷는 것만으로도 이렇게 행복하다니. 옆에 있는 사람의 얼굴을 몰래 훔쳐본다. 뭔가… 말로 표현할 수 없는 감정이 차오른다.)",
        next: "day4_afternoon_walk"
    },

    "day4_afternoon_walk": {
        name: "나",
        background: "assets/images/background/street.png",
        text: "(나란히 걷는 게 이렇게 좋은 거였나. 손끝이 스칠 때마다 심장이 쿵쾅거린다.)",
        next: "day4_special_notice"
    },

    // =========================================================================
    // 2. 특별한 장소 방문 — 캐릭터별 고유 장소 (13 노드)
    // =========================================================================

    "day4_special_notice": {
        name: "나",
        background: "assets/images/background/street.png",
        text: "(걷다 보니 골목 안쪽에 분위기 있는 가게들이 눈에 들어왔다. 상대방이 한 곳을 가리켰다.)",
        next: "day4_special_visit"
    },

    "day4_special_visit": {
        name: "시스템",
        background: "assets/images/background/street.png",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_special_seoyeon", character: "Seoyeon" },
            { next: "day4_special_yuna", character: "Yuna" },
            { next: "day4_special_dain", character: "Dain" },
            { next: "day4_special_nurse", character: "Nurse" },
            { next: "day4_special_teacher", character: "Teacher" }
        ]
    },

    // --- 서연: 꽃집 ---
    "day4_special_seoyeon": {
        name: "서연",
        text: "\"저기 봐, 꽃집이다! 잠깐 들어가 보자!\"",
        background: "assets/images/background/store.png",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day4_special_seoyeon_react"
    },

    "day4_special_seoyeon_react": {
        name: "나",
        text: "(서연이가 꽃들 사이에서 환하게 웃으며 작은 꽃 한 송이를 골라 내 앞에 내밀었다. \"이거, 너 줄게. 꽃말이… 비밀이야.\")",
        background: "assets/images/background/store.png",
        character: "assets/images/characters/seyoun_shy.png",
        choices: [
            {
                text: "\"서연이가 더 예뻐.\"",
                next: "day4_afternoon_special",
                stats: { Seoyeon: { affinity: 5 } }
            },
            {
                text: "\"고마워, 소중히 간직할게.\"",
                next: "day4_afternoon_special",
                stats: { Seoyeon: { affinity: 3 } }
            }
        ]
    },

    // --- 유나: 헌책방 ---
    "day4_special_yuna": {
        name: "유나",
        text: "\"…저기, 헌책방이다. 잠깐 들어가도 돼?\"",
        background: "assets/images/background/bookstore.png",
        character: "assets/images/characters/yuna_normal.png",
        next: "day4_special_yuna_react"
    },

    "day4_special_yuna_react": {
        name: "나",
        text: "(유나가 낡은 책장 사이에서 한 권의 책을 조심스럽게 꺼냈다. \"이 책… 같이 읽고 싶었어.\" 유나의 눈이 부드럽게 빛났다.)",
        background: "assets/images/background/bookstore.png",
        character: "assets/images/characters/yuna_smile.png",
        choices: [
            {
                text: "\"같이 읽자. 매일 한 장씩.\"",
                next: "day4_afternoon_special",
                stats: { Yuna: { affinity: 5 } }
            },
            {
                text: "\"유나가 고른 거라면 분명 좋은 책이겠지.\"",
                next: "day4_afternoon_special",
                stats: { Yuna: { affinity: 3 } }
            }
        ]
    },

    // --- 다인: 스포츠용품점 ---
    "day4_special_dain": {
        name: "다인",
        text: "\"오! 스포츠용품점이다!! 잠깐만, 나 봐야 할 거 있어!\"",
        background: "assets/images/background/store.png",
        character: "assets/images/characters/dain_laugh.png",
        next: "day4_special_dain_react"
    },

    "day4_special_dain_react": {
        name: "나",
        text: "(다인이가 커플 손목밴드를 들고 신나게 뛰어왔다. \"이거 봐, 커플 밴드! 우리 하나씩 하자!\" 얼굴이 살짝 붉어져 있다.)",
        background: "assets/images/background/store.png",
        character: "assets/images/characters/dain_shy.png",
        choices: [
            {
                text: "\"좋아! 맞춰서 하자.\"",
                next: "day4_afternoon_special",
                stats: { Dain: { affinity: 5 } }
            },
            {
                text: "\"다인이가 골라줘, 센스 있으니까.\"",
                next: "day4_afternoon_special",
                stats: { Dain: { affinity: 3 } }
            }
        ]
    },

    // --- 보건선생님: 앤티크 숍 ---
    "day4_special_nurse": {
        name: "보건선생님",
        text: "\"어머, 저기 앤티크 숍이네. 같이 구경해 볼까?\"",
        background: "assets/images/background/store.png",
        character: "assets/images/characters/nurse_normal.png",
        next: "day4_special_nurse_react"
    },

    "day4_special_nurse_react": {
        name: "나",
        text: "(선생님이 빈티지 브로치를 들어 햇빛에 비춰보며 미소 지었다. \"이거 예쁘지 않아? 왠지… 오래 간직하고 싶은 느낌.\")",
        background: "assets/images/background/store.png",
        character: "assets/images/characters/nurse_shy.png",
        choices: [
            {
                text: "\"선생님한테 잘 어울릴 것 같아요. 제가 사드릴까요?\"",
                next: "day4_afternoon_special",
                stats: { Nurse: { affinity: 5 } }
            },
            {
                text: "\"좋은 눈 가지셨네요. 진짜 예뻐요.\"",
                next: "day4_afternoon_special",
                stats: { Nurse: { affinity: 3 } }
            }
        ]
    },

    // --- 담임선생님: 문구점 ---
    "day4_special_teacher": {
        name: "담임선생님",
        text: "\"잠깐, 저기 문구점 좀 들러도 될까? 펜이 하나 필요한데.\"",
        background: "assets/images/background/store.png",
        character: "assets/images/characters/teacher_normal.png",
        next: "day4_special_teacher_react"
    },

    "day4_special_teacher_react": {
        name: "나",
        text: "(선생님이 펜을 고르더니 잠시 멈칫하며 하나를 더 집었다. \"…이건 네 거. 수업 시간에 열심히 필기해. …선물이야.\" 고개를 돌렸지만 귀끝이 붉었다.)",
        background: "assets/images/background/store.png",
        character: "assets/images/characters/teacher_shy.png",
        choices: [
            {
                text: "\"감사합니다. 매일 쓸게요.\"",
                next: "day4_afternoon_special",
                stats: { Teacher: { affinity: 5 } }
            },
            {
                text: "\"선생님이 골라준 거라 더 특별하네요.\"",
                next: "day4_afternoon_special",
                stats: { Teacher: { affinity: 3 } }
            }
        ]
    },

    // --- 공통 합류 ---
    "day4_afternoon_special": {
        name: "나",
        character: null,
        text: "(특별한 시간이었다. \"저기, 강변 공원 가볼래?\" 상대방이 먼저 제안했다.)",
        background: "assets/images/background/park.png",
        sunset: true,
        next: "day4_afternoon_park"
    },

    // =========================================================================
    // 3. 강변 공원 — 석양 씬 확장 (10 노드)
    // =========================================================================

    "day4_afternoon_park": {
        name: "나",
        background: "assets/images/background/park.png",
        character: null,
        text: "(강변 공원에 도착하니 석양이 물 위에 반짝이고 있었다. 마치 영화 속 한 장면 같았다.)",
        next: "day4_sunset_approach"
    },

    "day4_sunset_approach": {
        name: "나",
        background: "assets/images/background/park.png",
        character: null,
        text: "(강변을 따라 천천히 걷는다. 수면 위로 석양빛이 일렁이며 금빛 물결을 만든다. 시간이 점점 느려지는 것 같다.)",
        sunset: true,
        next: "day4_sunset_colors"
    },

    "day4_sunset_colors": {
        name: "나",
        background: "assets/images/background/park.png",
        character: null,
        text: "(하늘이 주황에서 분홍으로, 다시 보라빛으로 물들어 간다. 이런 하늘을 본 건 태어나서 처음인 것 같다.)",
        sunset: true,
        next: "day4_sunset_wind"
    },

    "day4_sunset_wind": {
        name: "나",
        background: "assets/images/background/park.png",
        character: null,
        text: "(따뜻한 바람이 스친다. 강가에서 불어오는 바람에 실려 풀냄새와 물냄새가 섞인다. 잔잔한 물소리가 배경음악처럼 흐른다.)",
        sunset: true,
        next: "day4_sunset_stare"
    },

    "day4_sunset_stare": {
        name: "시스템",
        background: "assets/images/background/park.png",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_sunset_stare_seoyeon", character: "Seoyeon" },
            { next: "day4_sunset_stare_yuna", character: "Yuna" },
            { next: "day4_sunset_stare_dain", character: "Dain" },
            { next: "day4_sunset_stare_nurse", character: "Nurse" },
            { next: "day4_sunset_stare_teacher", character: "Teacher" }
        ]
    },

    "day4_sunset_stare_seoyeon": {
        name: "나",
        text: "(서연이가 난간에 팔을 기대고 석양을 바라보고 있다. 바람에 머리카락이 흩날린다. 노을빛에 물든 그 옆모습이… 너무 예쁘다.)",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        next: "day4_afternoon_sunset"
    },

    "day4_sunset_stare_yuna": {
        name: "나",
        text: "(유나가 조용히 석양을 바라보고 있다. 평소의 무표정한 얼굴이 부드럽게 풀어져 있다. 이런 표정은… 처음이다.)",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day4_afternoon_sunset"
    },

    "day4_sunset_stare_dain": {
        name: "나",
        text: "(다인이가 \"와…\" 하고 작게 탄성을 질렀다. 평소 활발한 모습과 달리 가만히 석양을 바라보는 모습이 새삼 어른스럽다.)",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        next: "day4_afternoon_sunset"
    },

    "day4_sunset_stare_nurse": {
        name: "나",
        text: "(선생님이 눈을 가늘게 뜨고 석양을 바라보고 있다. 노을빛에 물든 그 모습이 마치 한 폭의 그림 같다.)",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "day4_afternoon_sunset"
    },

    "day4_sunset_stare_teacher": {
        name: "나",
        text: "(선생님이 조용히 난간에 기대어 강을 내려다보고 있다. 평소의 엄격한 모습은 온데간데없고, 부드러운 미소가 번지고 있다.)",
        character: "assets/images/characters/teacher_normal.png",
        sunset: true,
        next: "day4_afternoon_sunset"
    },

    // =========================================================================
    // 4. 석양 씬 — 감정 최고조 (4 노드)
    // =========================================================================

    "day4_afternoon_sunset": {
        name: "나",
        character: null,
        text: "(석양빛이 그 사람의 얼굴을 비추고 있다. 이상하게 말이 나오질 않는다.)",
        bgm: "confession.mp3",
        sunset: true,
        next: "day4_afternoon_silence"
    },

    "day4_afternoon_silence": {
        name: "나",
        character: null,
        text: "(……)",
        sunset: true,
        next: "day4_afternoon_feeling"
    },

    "day4_afternoon_feeling": {
        name: "나",
        character: null,
        text: "(이 감정이 뭔지 이제는 확실히 알 것 같다. 전학 온 첫날부터 지금까지… 쭉 느끼고 있었던 거다.)",
        sunset: true,
        next: "day4_confession_choice"
    },

    // =========================================================================
    // 5. 고백 선택 (1 노드)
    // =========================================================================

    "day4_confession_choice": {
        name: "나",
        character: null,
        text: "(지금 이 순간… 마음을 전할까?)",
        sunset: true,
        choices: [
            {
                text: "\"할 말이 있어…\"  (고백한다)",
                next: "day4_confess",
                setFlag: "day4_confessed"
            },
            {
                text: "\"…이 풍경 진짜 예쁘다.\"  (아직은 아니야)",
                next: "day4_wait",
                setFlag: "day4_waited"
            }
        ]
    },

    // =========================================================================
    // 6. 고백 루트 — 감정 빌드업 + 캐릭터별 고유 대사 (12 노드)
    // =========================================================================

    "day4_confess": {
        name: "나",
        character: null,
        text: "\"사실… 전학 오고 나서 매일 생각한 사람이 있어.\"",
        sunset: true,
        next: "day4_confess_heartbeat"
    },

    "day4_confess_heartbeat": {
        name: "나",
        character: null,
        text: "(심장이 미친 듯이 뛴다. 쿵, 쿵, 쿵. 이 소리가 상대방에게도 들리는 건 아닐까.)",
        sunset: true,
        next: "day4_confess_2"
    },

    "day4_confess_2": {
        name: "나",
        character: null,
        text: "\"처음엔 그냥 좋은 사람이라고 생각했는데… 이제는 확실해.\"",
        sunset: true,
        next: "day4_confess_breathe"
    },

    "day4_confess_breathe": {
        name: "나",
        character: null,
        text: "(숨을 깊이 들이마셨다. 손을 꽉 쥐었다. 지금 아니면… 평생 후회할 것 같다.)",
        sunset: true,
        next: "day4_confess_3"
    },

    "day4_confess_3": {
        name: "나",
        character: null,
        text: "\"나… 좋아해. 진심으로.\"",
        sunset: true,
        next: "day4_confess_silence"
    },

    "day4_confess_silence": {
        name: "나",
        character: null,
        text: "(말이 끝나자 정적이 흘렀다. 석양빛에 물든 세상이 멈춘 것처럼 느껴졌다. 1초가 1시간처럼 길게 느껴진다.)",
        sunset: true,
        next: "day4_confess_response"
    },

    "day4_confess_response": {
        name: "시스템",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_confess_to_seoyeon", character: "Seoyeon" },
            { next: "day4_confess_to_yuna", character: "Yuna" },
            { next: "day4_confess_to_dain", character: "Dain" },
            { next: "day4_confess_to_nurse", character: "Nurse" },
            { next: "day4_confess_to_teacher", character: "Teacher" }
        ]
    },

    // --- 캐릭터별 고유 고백 대사 ---

    "day4_confess_to_seoyeon": {
        name: "나",
        text: "\"서연아... 네가 웃을 때마다 내 세상의 축이 조금씩 기울어지는 기분이었어. 더 이상은 모른 척할 수가 없어. 널 좋아해.\"",
        character: "assets/images/characters/seyoun_shy2.png",
        sunset: true,
        next: "day4_accept_seoyeon"
    },

    "day4_confess_to_yuna": {
        name: "나",
        text: "\"유나야... 네 차가운 표정 뒤에 숨겨진 온기를 알게 된 순간부터, 내 시선은 늘 너를 향해 있었어. 널 좋아해.\"",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        next: "day4_accept_yuna"
    },

    "day4_confess_to_dain": {
        name: "나",
        text: "\"다인아… 네가 웃으면 나도 모르게 웃게 돼. 네 밝은 에너지가 나한테 전염되는 것 같아. 언제부턴가 네가 없으면 허전해.\"",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        next: "day4_accept_dain"
    },

    "day4_confess_to_nurse": {
        name: "나",
        text: "\"선생님… 아니, 이건 학생으로서가 아니라 한 사람으로서 하는 말이에요. 선생님을 좋아합니다. 진심이에요.\"",
        character: "assets/images/characters/nurse_shy.png",
        sunset: true,
        next: "day4_accept_nurse"
    },

    "day4_confess_to_teacher": {
        name: "나",
        text: "\"선생님… 선생님이 엄격할 때도, 웃을 때도, 전부 다 좋았어요. 이 마음은 선생님만을 향한 진심이에요.\"",
        character: "assets/images/characters/teacher_shy.png",
        sunset: true,
        next: "day4_accept_teacher"
    },

    // =========================================================================
    // 7. 고백 수락 — 캐릭터별 로맨틱 모먼트 (15 노드)
    // =========================================================================

    // --- 서연 수락 ---
    "day4_accept_seoyeon": {
        name: "서연",
        text: "\"...바보. 내가 얼마나 기다렸는지 알아? 네가 그 말을 해주지 않으면, 내가 먼저 해버릴 참이었어.\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        stats: { Seoyeon: { affinity: 20 } },
        setFlags: ["day4_confession_accepted", "isDating_Seoyeon"],
        next: "day4_accept_seoyeon_moment"
    },

    "day4_accept_seoyeon_moment": {
        name: "나",
        text: "(서연이의 눈가에 눈물이 맺혀 있다. 석양빛에 반짝이는 그 눈물이… 세상에서 가장 아름다운 보석 같다.)",
        character: "assets/images/characters/seyoun_shy2.png",
        sunset: true,
        next: "day4_accept_seoyeon_close"
    },

    "day4_accept_seoyeon_close": {
        name: "서연",
        text: "\"…손, 잡아도 돼?\"  (서연이가 조심스럽게 내 손을 감싸 쥐었다. 따뜻하고, 조금 떨리고 있었다.)",
        character: "assets/images/characters/seyoun_shy2.png",
        sunset: true,
        next: "day4_after_confess"
    },

    // --- 유나 수락 ---
    "day4_accept_yuna": {
        name: "유나",
        text: "\"...네가 내 선을 넘어왔을 때부터, 이미 내 세상은 너로 가득 차 있었어. 책임져, 평생.\"",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        stats: { Yuna: { affinity: 20 } },
        setFlags: ["day4_confession_accepted", "isDating_Yuna"],
        next: "day4_accept_yuna_moment"
    },

    "day4_accept_yuna_moment": {
        name: "나",
        text: "(유나가 고개를 살짝 숙였다. 귀끝까지 빨개진 게 보인다. 평소와 전혀 다른 모습에 심장이 터질 것 같다.)",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        next: "day4_accept_yuna_close"
    },

    "day4_accept_yuna_close": {
        name: "유나",
        text: "\"…가만히 있어.\"  (유나가 내 옆에 바짝 붙어 섰다. 어깨가 닿는다. 작은 온기가 전해져 온다.)",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        next: "day4_after_confess"
    },

    // --- 다인 수락 ---
    "day4_accept_dain": {
        name: "다인",
        text: "\"……엥?! 진, 진짜?! 나도!! 나도 너 좋아해!! 우와아아!!\"",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        stats: { Dain: { affinity: 20 } },
        setFlags: ["day4_confession_accepted", "isDating_Dain"],
        next: "day4_accept_dain_moment"
    },

    "day4_accept_dain_moment": {
        name: "나",
        text: "(다인이가 두 팔로 내 팔을 꽉 잡았다. 얼굴은 빨갛게 상기되어 있지만 눈은 반짝반짝 빛나고 있다.)",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        next: "day4_accept_dain_close"
    },

    "day4_accept_dain_close": {
        name: "다인",
        text: "\"헤헤, 우리 이제 사귀는 거지?! 진짜?! 아 심장 터져!!\"  (다인이가 펄쩍펄쩍 뛰며 내 손을 잡고 흔들었다.)",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        next: "day4_after_confess"
    },

    // --- 보건선생님 수락 ---
    "day4_accept_nurse": {
        name: "보건선생님",
        text: "\"…알고 있었어. 네 눈을 보면 다 알 수 있었거든. …나도 같은 마음이야.\"",
        character: "assets/images/characters/nurse_shy.png",
        sunset: true,
        stats: { Nurse: { affinity: 20 } },
        setFlags: ["day4_confession_accepted", "isDating_Nurse"],
        next: "day4_accept_nurse_moment"
    },

    "day4_accept_nurse_moment": {
        name: "나",
        text: "(선생님이 한 걸음 가까이 다가왔다. 은은한 향기가 코끝을 스친다. 심장이 멎을 것 같다.)",
        character: "assets/images/characters/nurse_shy.png",
        sunset: true,
        next: "day4_accept_nurse_close"
    },

    "day4_accept_nurse_close": {
        name: "보건선생님",
        text: "\"비밀이야, 우리만의.\"  (선생님이 내 손을 살며시 잡았다. 부드럽고 따뜻한 손이… 떨리고 있었다.)",
        character: "assets/images/characters/nurse_shy.png",
        sunset: true,
        next: "day4_after_confess"
    },

    // --- 담임선생님 수락 ---
    "day4_accept_teacher": {
        name: "담임선생님",
        text: "\"…하, 진짜 너는. 학생이 선생한테 이런 말 하면 안 되는 거 알지? …근데 나도 같은 마음이야, 바보.\"",
        character: "assets/images/characters/teacher_shy.png",
        sunset: true,
        stats: { Teacher: { affinity: 20 } },
        setFlags: ["day4_confession_accepted", "isDating_Teacher"],
        next: "day4_accept_teacher_moment"
    },

    "day4_accept_teacher_moment": {
        name: "나",
        text: "(선생님의 눈이 흔들리고 있다. 빈틈없던 사람의 이런 모습은… 나만 볼 수 있는 거겠지.)",
        character: "assets/images/characters/teacher_shy.png",
        sunset: true,
        next: "day4_accept_teacher_close"
    },

    "day4_accept_teacher_close": {
        name: "담임선생님",
        text: "\"…이것만.\"  (선생님이 내 새끼손가락에 자신의 새끼손가락을 걸었다. \"학교에서는… 비밀이야.\")",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "day4_after_confess"
    },

    // =========================================================================
    // 8. 고백 후 — 종료 (1 노드)
    // =========================================================================

    "day4_after_confess": {
        name: "나",
        character: null,
        text: "(석양 아래, 두 사람의 그림자가 하나로 겹쳐진다. 세상에서 가장 행복한 순간이었다.)",
        sunset: true,
        fade: true,
        next: "day4_night_start"
    },

    // =========================================================================
    // 9. 고백 보류 루트 — 감정 갈등과 아쉬운 귀가 (16 노드)
    // =========================================================================

    "day4_wait": {
        name: "나",
        character: null,
        text: "\"…이 풍경, 진짜 예쁘다.\"",
        sunset: true,
        next: "day4_wait_conflict"
    },

    "day4_wait_conflict": {
        name: "나",
        character: null,
        text: "(하고 싶은 말이 목 끝까지 올라왔는데… 결국 삼켰다. 아직… 아직은 때가 아니야.)",
        sunset: true,
        next: "day4_wait_walk"
    },

    "day4_wait_walk": {
        name: "나",
        character: null,
        text: "(나란히 강변길을 걸었다. 아무 말도 하지 않았지만, 이상하게 불편하지 않은 침묵이었다.)",
        sunset: true,
        next: "day4_wait_talk"
    },

    "day4_wait_talk": {
        name: "나",
        character: null,
        text: "\"…오늘 진짜 재밌었어. 고마워.\"",
        sunset: true,
        next: "day4_wait_linger"
    },

    "day4_wait_linger": {
        name: "나",
        character: null,
        text: "(저기 보이는 건널목에서 헤어져야 한다. 한 발짝을 내딛기가 이렇게 어려울 줄이야.)",
        sunset: true,
        next: "day4_wait_feelings"
    },

    "day4_wait_feelings": {
        name: "나",
        character: null,
        text: "(아까 삼킨 말이 다시 올라왔다. '좋아해.' 세 글자가 심장 안에서 벽을 두드리고 있다.)",
        sunset: true,
        next: "day4_wait_response"
    },

    "day4_wait_response": {
        name: "시스템",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_wait_seoyeon", character: "Seoyeon" },
            { next: "day4_wait_yuna", character: "Yuna" },
            { next: "day4_wait_dain", character: "Dain" },
            { next: "day4_wait_nurse", character: "Nurse" },
            { next: "day4_wait_teacher", character: "Teacher" }
        ]
    },

    "day4_wait_seoyeon": {
        name: "서연",
        text: "\"나도! 또 만나자… 그치?\"  (서연이가 환하게 웃었지만, 눈 속 어딘가에 아쉬움이 비쳤다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        stats: { Seoyeon: { affinity: 5 } },
        next: "day4_wait_goodbye"
    },

    "day4_wait_yuna": {
        name: "유나",
        text: "\"…응. 나쁘지 않았어. …다음에 또 하자.\"  (유나가 살짝 고개를 돌렸다. 혹시 표정을 감추려는 걸까.)",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        stats: { Yuna: { affinity: 5 } },
        next: "day4_wait_goodbye"
    },

    "day4_wait_dain": {
        name: "다인",
        text: "\"당연 재밌었지!! 다음에 또 가자!!\"  (다인이가 밝게 웃었지만, 잠깐 입술을 깨무는 게 보였다.)",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        stats: { Dain: { affinity: 5 } },
        next: "day4_wait_goodbye"
    },

    "day4_wait_nurse": {
        name: "보건선생님",
        text: "\"즐거운 시간이었어. …다음에 또 만날까?\"  (선생님의 미소가 평소보다 살짝 약해 보였다.)",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        stats: { Nurse: { affinity: 5 } },
        next: "day4_wait_goodbye"
    },

    "day4_wait_teacher": {
        name: "담임선생님",
        text: "\"…뭐, 나쁘지 않았네. 다음에 또 불러. 나가줄게.\"  (선생님이 웃었지만, 돌아서는 발걸음이 느렸다.)",
        character: "assets/images/characters/teacher_normal.png",
        sunset: true,
        stats: { Teacher: { affinity: 5 } },
        next: "day4_wait_goodbye"
    },

    "day4_wait_goodbye": {
        name: "나",
        character: null,
        text: "(인사를 나누고 발걸음을 돌렸다. 뒤를 돌아보고 싶었지만… 참았다.)",
        sunset: true,
        next: "day4_wait_regret"
    },

    "day4_wait_regret": {
        name: "나",
        character: null,
        text: "(도저히 참을 수가 없어서 뒤를 돌아봤다. 상대방도 뒤를 돌아보고 있었다. 눈이 마주친 순간, 서로 황급히 고개를 돌렸다.)",
        sunset: true,
        next: "day4_wait_home"
    },

    "day4_wait_home": {
        name: "나",
        character: null,
        text: "(집으로 돌아가는 길. 오늘 하지 못한 말이 가슴 한구석에 무겁게 남아있다. '다음에는 꼭… 꼭 말하자.')",
        sunset: true,
        next: "day4_wait_end"
    },

    "day4_wait_end": {
        name: "나",
        character: null,
        text: "(마음속에는… 하지 못한 말이 맴돌았다.)",
        sunset: true,
        fade: true,
        next: "day4_night_start"
    }

});
