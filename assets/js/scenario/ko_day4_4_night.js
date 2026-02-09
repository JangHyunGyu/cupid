/**
 * ============================================================================
 * CUPID - Day 4 Night Scenario (Korean Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: ko_day4_4_night.js
 * 언어: 한국어 (Korean)
 * 일차: Day 4 (4일차 - 토요일)
 * 시간대: Night (밤 - 데이트 마무리)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 데이트가 끝나고 집으로 돌아온 토요일 밤.
 * 고백 결과에 따라 행복한 밤 또는 고민하는 밤을 보낸다.
 * [유나 루트] 학교 야간 잠입 — 재단 비리 문서 발견, 선배의 죽음의 진실,
 *            주인공을 닮은 선배에 대한 유나의 고백, 함께 싸우겠다는 결의
 * Day 5(일요일)로 이어진다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 귀가 - 데이트 마무리
 * 2. 밤 회상 - 오늘 하루를 돌아보며
 * 3. 취침 - 내일에 대한 기대와 함께
 * [유나 루트]
 * 1. 학교 후문 집결 — 야간 잠입
 * 2. 지하 자료실에서 재단 비자금 장부 발견
 * 3. 이준호 선배의 추락사 진실 — 비리를 은폐한 재단
 * 4. 유나의 동기 고백 — 선배를 닮은 주인공
 * 5. 함께 싸우겠다는 결의
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 고백 수락 시: 추가 +5 (메시지 교환)
 * 
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[4]) {
    SCENARIO[4] = {};
}

Object.assign(SCENARIO[4], {

    // =========================================================================
    // 토요일 밤
    // =========================================================================
    "day4_night_start": {
        name: "나",
        text: "(집에 돌아왔다. 방에 누우니 오늘의 기억이 필름처럼 스쳐 지나간다.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        bgm: "night2.mp3",
        next: "day4_night_branch"
    },
    "day4_night_branch": {
        name: "시스템",
        text: "",
        branches: [
            { next: "day4_night_yuna_sneak", condition: "isDating_Yuna" },
            { next: "day4_night_happy", condition: "day4_confession_accepted" },
            { next: "day4_night_regret", condition: "day4_waited" },
            { next: "day4_night_reflect" }
        ]
    },

    // =========================================================================
    // 유나 루트 — 학교 야간 잠입 & 비리 진실
    // =========================================================================
    "day4_night_yuna_sneak": {
        name: "나",
        text: "(밤 10시. 유나에게서 메시지가 왔다. '학교 후문. 지금 와.')",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        bgm: "mystery.mp3",
        next: "day4_night_yuna_sneak_2"
    },
    "day4_night_yuna_sneak_2": {
        name: "나",
        text: "(심장이 두근거린다. 유나가 말했던 '진실'… 드디어 알게 되는 건가.)",
        night: true,
        next: "day4_night_yuna_arrive"
    },
    "day4_night_yuna_arrive": {
        name: "유나",
        text: "\"…왔어. 늦을 줄 알았는데.\"",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_arrive_2"
    },
    "day4_night_yuna_arrive_2": {
        name: "나",
        text: "(학교 후문. 유나가 가로등 불빛 아래 서 있었다. 표정이 평소보다 더 단단해 보인다.)",
        night: true,
        next: "day4_night_yuna_arrive_3"
    },
    "day4_night_yuna_arrive_3": {
        name: "유나",
        text: "\"…오늘 보여줄 게 있어. 각오는 됐어?\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_choice"
    },
    "day4_night_yuna_choice": {
        name: "나",
        text: "(유나의 눈빛이 심상치 않다.)",
        night: true,
        choices: [
            {
                text: "\"당연하지. 그래서 온 거잖아.\"",
                next: "day4_night_yuna_enter",
                stats: { Yuna: { affinity: 8 } }
            },
            {
                text: "\"…솔직히 좀 무섭긴 해.\"",
                next: "day4_night_yuna_enter_honest",
                stats: { Yuna: { affinity: 5 } }
            }
        ]
    },
    "day4_night_yuna_enter": {
        name: "유나",
        text: "\"…좋아. 따라와.\"",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        next: "day4_night_yuna_corridor"
    },
    "day4_night_yuna_enter_honest": {
        name: "유나",
        text: "\"……솔직한 건 좋아해. 괜찮아, 내가 옆에 있으니까.\"",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        next: "day4_night_yuna_corridor"
    },

    // =========================================================================
    // 학교 야간 잠입
    // =========================================================================
    "day4_night_yuna_corridor": {
        name: "나",
        text: "(유나가 후문 자물쇠를 익숙하게 열었다. 마치 이미 여러 번 해 본 것처럼.)",
        background: "assets/images/background/load_school.png",
        night: true,
        next: "day4_night_yuna_corridor_2"
    },
    "day4_night_yuna_corridor_2": {
        name: "나",
        text: "(텅 빈 학교 복도. 비상등만 희미하게 켜져 있다. 낮에는 시끄러웠던 곳이 지금은 숨소리마저 울릴 것 같다.)",
        night: true,
        next: "day4_night_yuna_corridor_3"
    },
    "day4_night_yuna_corridor_3": {
        name: "유나",
        text: "\"…지하 자료실이야. 학교가 봉인한 구역. 여기에 전부 있어.\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_basement"
    },

    // =========================================================================
    // 지하 자료실 — 비리 문서 발견
    // =========================================================================
    "day4_night_yuna_basement": {
        name: "나",
        text: "(지하로 내려가자 공기가 차갑게 바뀌었다. 먼지 냄새와 함께 오래된 서류 냄새가 코끝을 찔렀다.)",
        background: "assets/images/background/library_old.png",
        night: true,
        next: "day4_night_yuna_basement_2"
    },
    "day4_night_yuna_basement_2": {
        name: "유나",
        text: "\"이 학교 재단… '성진학원'. 겉으로는 교육 명문을 자처하지만, 10년 전부터 조직적으로 비자금을 운영해 왔어.\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_basement_3"
    },
    "day4_night_yuna_basement_3": {
        name: "나",
        text: "\"…비자금?\"",
        night: true,
        next: "day4_night_yuna_basement_4"
    },
    "day4_night_yuna_basement_4": {
        name: "유나",
        text: "\"학생 복지 기금 횡령, 시설 보수비 허위 청구, 기부금 유용… 여기 다 있어.\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_documents"
    },
    "day4_night_yuna_documents": {
        name: "나",
        text: "(유나가 선반에서 낡은 서류 파일을 꺼냈다. 빼곡한 숫자들과 도장들. 이건… 진짜 장부다.)",
        night: true,
        next: "day4_night_yuna_documents_2"
    },
    "day4_night_yuna_documents_2": {
        name: "유나",
        text: "\"특히 이 건물… 본관 동쪽 계단. 3년 전 보수 공사를 했다고 되어 있는데, 실제로는 한 푼도 쓰지 않았어.\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_documents_3"
    },
    "day4_night_yuna_documents_3": {
        name: "유나",
        text: "\"…그리고 그 계단에서, 1년 전에 사고가 일어났어.\"",
        character: "assets/images/characters/yuna_sad.png",
        night: true,
        next: "day4_night_yuna_truth_choice"
    },
    "day4_night_yuna_truth_choice": {
        name: "나",
        text: "(유나의 목소리가 떨리고 있다.)",
        night: true,
        choices: [
            {
                text: "\"…누가 다친 거야?\"",
                next: "day4_night_yuna_senpai_reveal",
                stats: { Yuna: { affinity: 5 } }
            },
            {
                text: "\"유나… 괜찮아?\"",
                next: "day4_night_yuna_senpai_concern",
                stats: { Yuna: { affinity: 10 } }
            }
        ]
    },

    // =========================================================================
    // 선배의 진실
    // =========================================================================
    "day4_night_yuna_senpai_concern": {
        name: "유나",
        text: "\"……괜찮냐고 묻는 사람은, 네가 처음이야.\"",
        character: "assets/images/characters/yuna_sad.png",
        night: true,
        next: "day4_night_yuna_senpai_reveal"
    },
    "day4_night_yuna_senpai_reveal": {
        name: "유나",
        text: "\"…이준호 선배. 당시 학생회장이었어. 재단 비리를 알게 되고, 증거를 모으고 있었지.\"",
        character: "assets/images/characters/yuna_sad.png",
        night: true,
        next: "day4_night_yuna_senpai_2"
    },
    "day4_night_yuna_senpai_2": {
        name: "유나",
        text: "\"선배는… 정의감이 강한 사람이었어. 바보같을 정도로. 누군가 피해를 보고 있으면 절대 그냥 못 넘어가는.\"",
        night: true,
        next: "day4_night_yuna_senpai_3"
    },
    "day4_night_yuna_senpai_3": {
        name: "유나",
        text: "\"그러다 어느 날… 그 동쪽 계단에서 추락했어. 학교는 '실족사'로 처리했고.\"",
        character: "assets/images/characters/yuna_sad.png",
        night: true,
        next: "day4_night_yuna_senpai_4"
    },
    "day4_night_yuna_senpai_4": {
        name: "나",
        text: "\"……실족사? 비리를 조사하던 사람이?\"",
        night: true,
        next: "day4_night_yuna_senpai_5"
    },
    "day4_night_yuna_senpai_5": {
        name: "유나",
        text: "\"…보수도 안 한 낡은 계단 난간이 부러졌대. 재단이 공사비를 횡령하지 않았다면 일어나지 않았을 사고야.\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_senpai_6"
    },
    "day4_night_yuna_senpai_6": {
        name: "유나",
        text: "\"증거를 들고 교육청에 가려던 전날이었어. 우연인지, 아닌지… 아직도 모르겠어.\"",
        night: true,
        next: "day4_night_yuna_senpai_death"
    },
    "day4_night_yuna_senpai_death": {
        name: "유나",
        text: "\"선배는… 며칠 뒤 병원에서 눈을 감았어. 끝내 깨어나지 못했지.\"",
        character: "assets/images/characters/yuna_sad.png",
        night: true,
        next: "day4_night_yuna_silence"
    },
    "day4_night_yuna_silence": {
        name: "나",
        text: "(유나의 손이 떨리고 있었다. 서류를 쥔 손가락 끝이 하얗게 질려 있다.)",
        night: true,
        next: "day4_night_yuna_silence_choice"
    },
    "day4_night_yuna_silence_choice": {
        name: "나",
        text: "(……)",
        night: true,
        choices: [
            {
                text: "유나의 손을 잡는다",
                next: "day4_night_yuna_hand",
                stats: { Yuna: { affinity: 15 } },
                setFlag: "day4_held_yuna_hand"
            },
            {
                text: "\"…계속 말해줘. 듣고 있을게.\"",
                next: "day4_night_yuna_listen",
                stats: { Yuna: { affinity: 10 } }
            }
        ]
    },

    // =========================================================================
    // 유나의 고백 — 선배와 닮은 주인공
    // =========================================================================
    "day4_night_yuna_hand": {
        name: "유나",
        text: "\"…… ッ\"",
        character: "assets/images/characters/yuna_shy.png",
        night: true,
        next: "day4_night_yuna_hand_2"
    },
    "day4_night_yuna_hand_2": {
        name: "나",
        text: "(유나의 손이 차가웠다. 하지만 내 손을 뿌리치지 않았다.)",
        night: true,
        next: "day4_night_yuna_resemblance"
    },
    "day4_night_yuna_listen": {
        name: "유나",
        text: "\"……고마워.\"",
        character: "assets/images/characters/yuna_sad.png",
        night: true,
        next: "day4_night_yuna_resemblance"
    },
    "day4_night_yuna_resemblance": {
        name: "유나",
        text: "\"…사실, 너한테 말해야 할 게 하나 더 있어.\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_resemblance_2"
    },
    "day4_night_yuna_resemblance_2": {
        name: "유나",
        text: "\"처음 네가 전학 왔을 때… 나 숨이 멎을 뻔했어.\"",
        night: true,
        next: "day4_night_yuna_resemblance_3"
    },
    "day4_night_yuna_resemblance_3": {
        name: "나",
        text: "\"…왜?\"",
        night: true,
        next: "day4_night_yuna_resemblance_4"
    },
    "day4_night_yuna_resemblance_4": {
        name: "유나",
        text: "\"너… 준호 선배랑 닮았거든. 눈빛이, 분위기가. 불의를 보면 가만히 못 있는 그런 느낌까지.\"",
        character: "assets/images/characters/yuna_sad.png",
        night: true,
        next: "day4_night_yuna_resemblance_5"
    },
    "day4_night_yuna_resemblance_5": {
        name: "유나",
        text: "\"…그래서 처음엔 무서웠어. 또 같은 일이 반복될까 봐. 너까지 위험해질까 봐.\"",
        night: true,
        next: "day4_night_yuna_resemblance_6"
    },
    "day4_night_yuna_resemblance_6": {
        name: "유나",
        text: "\"그런데 동시에… 네가 옆에 있으면, 선배가 못 다 한 일을 끝낼 수 있을 것 같았어.\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_resemblance_7"
    },
    "day4_night_yuna_resemblance_7": {
        name: "나",
        text: "(그래서였구나. 유나가 처음부터 나에게 관심을 보인 이유. '특별한 빛'이라고 했던 것도… 선배의 그림자였던 걸까.)",
        night: true,
        next: "day4_night_yuna_critical_choice"
    },
    "day4_night_yuna_critical_choice": {
        name: "나",
        text: "(……뭐라고 해야 하지.)",
        night: true,
        choices: [
            {
                text: "\"나는 그 선배가 아니야. 나는 나야. 그래도… 같이 싸울게.\"",
                next: "day4_night_yuna_moved",
                stats: { Yuna: { affinity: 20 } },
                setFlag: "day4_yuna_ally"
            },
            {
                text: "\"선배의 대역이어도 괜찮아. 유나한테 필요한 사람이 되고 싶어.\"",
                next: "day4_night_yuna_touched",
                stats: { Yuna: { affinity: 15 } },
                setFlag: "day4_yuna_ally"
            },
            {
                text: "\"…그래서 나한테 접근한 거야? 선배 대신?\"",
                next: "day4_night_yuna_confronted",
                stats: { Yuna: { affinity: -10 } }
            }
        ]
    },

    // =========================================================================
    // 분기 — 결의
    // =========================================================================
    "day4_night_yuna_moved": {
        name: "유나",
        text: "\"…… 알아. 너는 너야. 처음엔 선배의 그림자를 쫓았을지도 몰라. 그런데 지금은……\"",
        character: "assets/images/characters/yuna_shy.png",
        night: true,
        next: "day4_night_yuna_moved_2"
    },
    "day4_night_yuna_moved_2": {
        name: "유나",
        text: "\"……지금은 네가 보여. 너만.\"",
        character: "assets/images/characters/yuna_shy.png",
        night: true,
        next: "day4_night_yuna_resolve"
    },
    "day4_night_yuna_touched": {
        name: "유나",
        text: "\"바보… 그런 말 하면 어떡해.\"",
        character: "assets/images/characters/yuna_shy.png",
        night: true,
        next: "day4_night_yuna_touched_2"
    },
    "day4_night_yuna_touched_2": {
        name: "유나",
        text: "\"대역 같은 거 아니야. 너는… 이미 너 자신으로 충분해.\"",
        character: "assets/images/characters/yuna_shy.png",
        night: true,
        next: "day4_night_yuna_resolve"
    },
    "day4_night_yuna_confronted": {
        name: "유나",
        text: "\"……\"",
        character: "assets/images/characters/yuna_sad.png",
        night: true,
        next: "day4_night_yuna_confronted_2"
    },
    "day4_night_yuna_confronted_2": {
        name: "유나",
        text: "\"…부정 안 할게. 처음엔 그랬어. 그런데… 함께 시간을 보내면서 바뀌었어. 이건 진심이야.\"",
        character: "assets/images/characters/yuna_sad.png",
        night: true,
        next: "day4_night_yuna_confronted_3"
    },
    "day4_night_yuna_confronted_3": {
        name: "유나",
        text: "\"…믿어주지 않아도, 증명해 볼게.\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        setFlag: "day4_yuna_ally",
        next: "day4_night_yuna_resolve"
    },

    // =========================================================================
    // 결의 & 증거 확보
    // =========================================================================
    "day4_night_yuna_resolve": {
        name: "유나",
        text: "\"…이 서류들, 사본을 떠 놨어. 원본은 여기 그대로 두고.\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_resolve_2"
    },
    "day4_night_yuna_resolve_2": {
        name: "유나",
        text: "\"선배가 못 다 한 일… 이번엔 끝내고 싶어. 교육청에 제보할 거야.\"",
        night: true,
        next: "day4_night_yuna_resolve_3"
    },
    "day4_night_yuna_resolve_3": {
        name: "나",
        text: "(유나의 눈에 결의가 서려 있다. 이건 단순한 호기심이 아니었다. 1년간 혼자 진실을 파헤쳐 온 거다.)",
        night: true,
        next: "day4_night_yuna_resolve_4"
    },
    "day4_night_yuna_resolve_4": {
        name: "유나",
        text: "\"…근데 위험할 수 있어. 재단이 가만히 있진 않을 거야.\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_resolve_5"
    },
    "day4_night_yuna_resolve_5": {
        name: "나",
        text: "\"…같이 하자. 혼자 짊어지지 마.\"",
        night: true,
        next: "day4_night_yuna_resolve_end"
    },
    "day4_night_yuna_resolve_end": {
        name: "유나",
        text: "\"……응.\"",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        setFlag: "day4_yuna_truth_revealed",
        next: "day4_night_yuna_exit"
    },

    // =========================================================================
    // 학교 밖 — 밤하늘 아래
    // =========================================================================
    "day4_night_yuna_exit": {
        name: "나",
        text: "(학교를 빠져나왔다. 찬 밤바람이 불었지만, 옆에 유나가 있어서 덜 추웠다.)",
        background: "assets/images/background/street.png",
        night: true,
        bgm: "night1.mp3",
        next: "day4_night_yuna_exit_2"
    },
    "day4_night_yuna_exit_2": {
        name: "유나",
        text: "\"…오늘, 고마웠어. 혼자 안고 있던 걸 누군가한테 말한 건 처음이야.\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_exit_3"
    },
    "day4_night_yuna_exit_3": {
        name: "유나",
        text: "\"…좀 무거운 하루였지?\"",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        next: "day4_night_yuna_exit_choice"
    },
    "day4_night_yuna_exit_choice": {
        name: "나",
        text: "(밤하늘 아래 유나가 어색하게 웃고 있다.)",
        night: true,
        choices: [
            {
                text: "\"아니. 유나를 더 알게 된 거니까.\"",
                next: "day4_night_yuna_exit_warm",
                stats: { Yuna: { affinity: 10 } }
            },
            {
                text: "\"다음엔 진짜 데이트 하자. 카페 같은 데서.\"",
                next: "day4_night_yuna_exit_promise",
                stats: { Yuna: { affinity: 8 } }
            }
        ]
    },
    "day4_night_yuna_exit_warm": {
        name: "유나",
        text: "\"……그런 말, 반칙이야.\"",
        character: "assets/images/characters/yuna_shy.png",
        night: true,
        next: "day4_night_yuna_farewell"
    },
    "day4_night_yuna_exit_promise": {
        name: "유나",
        text: "\"…카페. 좋아. 이번엔 내가 골라도 돼?\"",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        next: "day4_night_yuna_farewell"
    },
    "day4_night_yuna_farewell": {
        name: "나",
        text: "(유나가 돌아서려다 멈칫했다. 그리고 아주 작은 목소리로 말했다.)",
        night: true,
        next: "day4_night_yuna_farewell_2"
    },
    "day4_night_yuna_farewell_2": {
        name: "유나",
        text: "\"……오늘, 와줘서 고마워. 진짜로.\"",
        character: "assets/images/characters/yuna_shy.png",
        night: true,
        next: "day4_night_yuna_farewell_3"
    },
    "day4_night_yuna_farewell_3": {
        name: "나",
        text: "(밤바람에 유나의 머리카락이 흔들렸다. 이 순간을 오래 기억하고 싶다고 생각했다.)",
        night: true,
        next: "day4_night_yuna_home"
    },
    "day4_night_yuna_home": {
        name: "나",
        text: "(집에 돌아왔다. 오늘 알게 된 것들이 머릿속을 맴돈다. 재단 비리, 선배의 죽음, 그리고 유나의 눈물…)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        next: "day4_night_yuna_home_2"
    },
    "day4_night_yuna_home_2": {
        name: "나",
        text: "(유나가 1년 동안 혼자 짊어져 온 무게. 이제는 내가 함께 들어야 할 차례다.)",
        night: true,
        fade: true,
        next: "day4_final"
    },

    // =========================================================================
    // 고백 성공 루트
    // =========================================================================
    "day4_night_happy": {
        name: "나",
        text: "(…아직도 믿기지 않는다. 나한테도 이런 날이 올 줄이야.)",
        night: true,
        next: "day4_night_happy_2"
    },
    "day4_night_happy_2": {
        name: "나",
        text: "(손을 잡았을 때의 온기, 웃어주던 얼굴, \"나도 좋아해\"라는 말… 전부 꿈만 같다.)",
        night: true,
        next: "day4_night_happy_msg"
    },
    "day4_night_happy_msg": {
        name: "나",
        text: "(핸드폰에 메시지가 왔다. \"오늘 정말 행복했어. 내일도 만나자. 🌙\")",
        night: true,
        next: "day4_night_happy_reply"
    },
    "day4_night_happy_reply": {
        name: "나",
        text: "(\"나도. 내일 꼭 만나자.\" 라고 답장을 보냈다. 심장이 아직도 뛰고 있다.)",
        night: true,
        next: "day4_night_sleep"
    },

    // =========================================================================
    // 고백 보류 루트
    // =========================================================================
    "day4_night_regret": {
        name: "나",
        text: "(…오늘 말할 수 있었는데. 그 석양 아래서, 완벽한 순간이었는데.)",
        night: true,
        next: "day4_night_regret_2"
    },
    "day4_night_regret_2": {
        name: "나",
        text: "(괜찮아. 내일이 있으니까. 내일은 반드시… 마음을 전하자.)",
        night: true,
        next: "day4_night_regret_msg"
    },
    "day4_night_regret_msg": {
        name: "나",
        text: "(핸드폰에 메시지가 왔다. \"오늘 즐거웠어. 내일도 시간 괜찮아?\")",
        night: true,
        next: "day4_night_regret_reply"
    },
    "day4_night_regret_reply": {
        name: "나",
        text: "(\"응, 내일도 만나자.\" 꼭 내일은 말할 거야.)",
        night: true,
        next: "day4_night_sleep"
    },

    // =========================================================================
    // 기본 루트 (약속 없이 온 경우)
    // =========================================================================
    "day4_night_reflect": {
        name: "나",
        text: "(토요일이 이렇게 지나갔다. 내일은… 뭘 하지?)",
        night: true,
        next: "day4_night_sleep"
    },

    // =========================================================================
    // 취침
    // =========================================================================
    "day4_night_sleep": {
        name: "나",
        text: "(눈을 감으면 그 사람의 얼굴이 떠오른다. 이대로 잠들어도 좋겠다.)",
        night: true,
        fade: true,
        next: "day4_final"
    },
    "day4_final": {
        name: "나",
        text: "(토요일 밤이 깊어간다... 내일은 일요일, 마지막 날이다.)",
        background: null,
        character: null,
        night: true,
        fade: true,
        next: "day5_start"
    }
});
