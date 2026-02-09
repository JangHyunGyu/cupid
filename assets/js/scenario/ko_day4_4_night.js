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
            { next: "day4_night_seoyeon_call", condition: "isDating_Seoyeon" },
            { next: "day4_night_dain_gym", condition: "isDating_Dain" },
            { next: "day4_night_teacher_call", condition: "isDating_Teacher" },
            { next: "day4_night_nurse_msg", condition: "isDating_Nurse" },
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
    // 서연 루트 — 완벽함의 무게, 서연의 진짜 모습
    // =========================================================================
    "day4_night_seoyeon_call": {
        name: "나",
        text: "(밤 9시. 서연에게서 전화가 왔다.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        bgm: "night1.mp3",
        next: "day4_night_seoyeon_call_2"
    },
    "day4_night_seoyeon_call_2": {
        name: "서연",
        text: "\"…저기, 나인데. 바쁘지 않으면… 잠깐 나올 수 있어?\"",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        next: "day4_night_seoyeon_call_3"
    },
    "day4_night_seoyeon_call_3": {
        name: "나",
        text: "(서연의 목소리가 평소와 다르다. 웃음기가 없고, 어딘가 떨리는 것 같다.)",
        night: true,
        next: "day4_night_seoyeon_call_4"
    },
    "day4_night_seoyeon_call_4": {
        name: "서연",
        text: "\"…우리 집 앞 공원 알지? 거기서 기다릴게.\"",
        night: true,
        next: "day4_night_seoyeon_park"
    },
    "day4_night_seoyeon_park": {
        name: "나",
        text: "(공원에 도착했다. 벤치에 서연이 혼자 앉아 있었다. 평소의 단정한 교복 대신 편한 옷차림이다.)",
        background: "assets/images/background/park.png",
        character: "assets/images/characters/seyoun_sad.png",
        night: true,
        next: "day4_night_seoyeon_park_2"
    },
    "day4_night_seoyeon_park_2": {
        name: "서연",
        text: "\"…왔구나. 갑자기 불러서 미안해.\"",
        character: "assets/images/characters/seyoun_sad.png",
        night: true,
        next: "day4_night_seoyeon_park_3"
    },
    "day4_night_seoyeon_park_3": {
        name: "나",
        text: "(서연의 눈이 빨갛다. …울었던 건가?)",
        night: true,
        choices: [
            {
                text: "\"무슨 일이야? 괜찮아?\"",
                next: "day4_night_seoyeon_concern",
                stats: { Seoyeon: { affinity: 5 } }
            },
            {
                text: "아무 말 없이 옆에 앉는다",
                next: "day4_night_seoyeon_silent_sit",
                stats: { Seoyeon: { affinity: 8 } }
            }
        ]
    },
    "day4_night_seoyeon_concern": {
        name: "서연",
        text: "\"……괜찮다고 하면 거짓말이겠지.\"",
        character: "assets/images/characters/seyoun_sad.png",
        night: true,
        next: "day4_night_seoyeon_open"
    },
    "day4_night_seoyeon_silent_sit": {
        name: "서연",
        text: "\"…… 고마워. 그냥 옆에 있어 주는 거, 제일 좋아.\"",
        character: "assets/images/characters/seyoun_sad.png",
        night: true,
        next: "day4_night_seoyeon_open"
    },

    // =========================================================================
    // 서연의 고백 — 완벽함의 감옥
    // =========================================================================
    "day4_night_seoyeon_open": {
        name: "서연",
        text: "\"…오늘 엄마한테 전화가 왔어. 아빠랑 또 싸웠대.\"",
        character: "assets/images/characters/seyoun_sad.png",
        night: true,
        next: "day4_night_seoyeon_open_2"
    },
    "day4_night_seoyeon_open_2": {
        name: "서연",
        text: "\"우리 집… 겉으로는 멀쩡해 보이지? 넓은 집, 좋은 차, 학생회장 딸.\"",
        night: true,
        next: "day4_night_seoyeon_open_3"
    },
    "day4_night_seoyeon_open_3": {
        name: "서연",
        text: "\"근데 사실… 엄마 아빠는 1년째 같은 지붕 아래서 남남이야. 이혼 서류만 안 냈을 뿐.\"",
        character: "assets/images/characters/seyoun_sad.png",
        night: true,
        next: "day4_night_seoyeon_open_4"
    },
    "day4_night_seoyeon_open_4": {
        name: "나",
        text: "\"……서연.\"",
        night: true,
        next: "day4_night_seoyeon_open_5"
    },
    "day4_night_seoyeon_open_5": {
        name: "서연",
        text: "\"엄마가 말했어. '너라도 완벽해야 이 집이 유지된다'고. 그래서… 학생회장도, 성적도, 전부 놓을 수가 없었어.\"",
        character: "assets/images/characters/seyoun_cry.png",
        night: true,
        next: "day4_night_seoyeon_open_6"
    },
    "day4_night_seoyeon_open_6": {
        name: "서연",
        text: "\"모두한테 웃어야 했어. '서연이는 항상 밝구나', '서연이는 뭐든 잘하네'. 그 말이… 점점 감옥 같았어.\"",
        night: true,
        next: "day4_night_seoyeon_open_7"
    },
    "day4_night_seoyeon_open_7": {
        name: "서연",
        text: "\"웃는 게 아니라 웃음을 '하고' 있었어. 매일.\"",
        character: "assets/images/characters/seyoun_cry.png",
        night: true,
        next: "day4_night_seoyeon_tear"
    },
    "day4_night_seoyeon_tear": {
        name: "나",
        text: "(서연의 눈에서 눈물이 흘러내렸다. 가로등 불빛에 반짝이는 눈물을 보는 건 처음이다.)",
        night: true,
        next: "day4_night_seoyeon_tear_choice"
    },
    "day4_night_seoyeon_tear_choice": {
        name: "나",
        text: "(서연이 울고 있다. 처음 보는 모습이다.)",
        night: true,
        choices: [
            {
                text: "서연을 안아준다",
                next: "day4_night_seoyeon_hug",
                stats: { Seoyeon: { affinity: 15 } },
                setFlag: "day4_hugged_seoyeon"
            },
            {
                text: "새끼손가락을 내민다",
                next: "day4_night_seoyeon_pinky",
                stats: { Seoyeon: { affinity: 20 } },
                setFlag: "day4_pinky_seoyeon"
            }
        ]
    },
    "day4_night_seoyeon_hug": {
        name: "서연",
        text: "\"…… ッ\"",
        character: "assets/images/characters/seyoun_cry.png",
        night: true,
        next: "day4_night_seoyeon_hug_2"
    },
    "day4_night_seoyeon_hug_2": {
        name: "나",
        text: "(서연이 내 가슴에 얼굴을 묻었다. 작은 어깨가 떨리고 있었다.)",
        night: true,
        next: "day4_night_seoyeon_hug_3"
    },
    "day4_night_seoyeon_hug_3": {
        name: "서연",
        text: "\"…이렇게 울어본 거, 정말 오랜만이야. 누구 앞에서 우는 건… 처음이고.\"",
        character: "assets/images/characters/seyoun_cry.png",
        night: true,
        next: "day4_night_seoyeon_real"
    },
    "day4_night_seoyeon_pinky": {
        name: "나",
        text: "\"약속할게. 서연이 울고 싶을 때, 나한테 울어도 돼.\"",
        night: true,
        next: "day4_night_seoyeon_pinky_2"
    },
    "day4_night_seoyeon_pinky_2": {
        name: "서연",
        text: "\"…… 새끼손가락?\"",
        character: "assets/images/characters/seyoun_cry.png",
        night: true,
        next: "day4_night_seoyeon_pinky_3"
    },
    "day4_night_seoyeon_pinky_3": {
        name: "나",
        text: "(서연이 떨리는 손으로 새끼손가락을 걸었다. 그리고 참았던 울음이 터져 나왔다.)",
        night: true,
        next: "day4_night_seoyeon_pinky_4"
    },
    "day4_night_seoyeon_pinky_4": {
        name: "서연",
        text: "\"…바보야, 왜 이렇게… 나한테 잘해주는 건데……\"",
        character: "assets/images/characters/seyoun_cry.png",
        night: true,
        next: "day4_night_seoyeon_real"
    },

    // =========================================================================
    // 서연의 진짜 모습
    // =========================================================================
    "day4_night_seoyeon_real": {
        name: "서연",
        text: "\"…사실 오늘 데이트하면서도 무서웠어. 내가 이렇게 행복해도 되나. 이 행복도 곧 무너지는 거 아닌가.\"",
        character: "assets/images/characters/seyoun_sad.png",
        night: true,
        next: "day4_night_seoyeon_real_2"
    },
    "day4_night_seoyeon_real_2": {
        name: "서연",
        text: "\"넌… 완벽하지 않은 나도 괜찮아?\"",
        character: "assets/images/characters/seyoun_sad.png",
        night: true,
        next: "day4_night_seoyeon_real_choice"
    },
    "day4_night_seoyeon_real_choice": {
        name: "나",
        text: "(서연이 떨리는 눈으로 나를 올려다보고 있다.)",
        night: true,
        choices: [
            {
                text: "\"완벽한 서연보다, 지금 이 서연이 더 좋아.\"",
                next: "day4_night_seoyeon_accept",
                stats: { Seoyeon: { affinity: 20 } }
            },
            {
                text: "\"학생회장 서연이 아니라, 그냥 서연이가 내 여자친구야.\"",
                next: "day4_night_seoyeon_gf",
                stats: { Seoyeon: { affinity: 15 } }
            },
            {
                text: "\"솔직히 완벽한 줄만 알았어. 하지만… 이런 모습도 보여줘서 고마워.\"",
                next: "day4_night_seoyeon_honest",
                stats: { Seoyeon: { affinity: 10 } }
            }
        ]
    },
    "day4_night_seoyeon_accept": {
        name: "서연",
        text: "\"……정말?\"",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        next: "day4_night_seoyeon_accept_2"
    },
    "day4_night_seoyeon_accept_2": {
        name: "서연",
        text: "\"…그 말, 평생 잊지 않을 거야. 잊으면… 새끼손가락 걸었으니까.\"",
        character: "assets/images/characters/seyoun_shy2.png",
        night: true,
        next: "day4_night_seoyeon_resolve"
    },
    "day4_night_seoyeon_gf": {
        name: "서연",
        text: "\"여, 여자친구……\"",
        character: "assets/images/characters/seyoun_shy2.png",
        night: true,
        next: "day4_night_seoyeon_gf_2"
    },
    "day4_night_seoyeon_gf_2": {
        name: "서연",
        text: "\"…아, 심장이 두근거려서 죽을 것 같아. 그런 말 갑자기 하면 어떡해……\"",
        character: "assets/images/characters/seyoun_shy2.png",
        night: true,
        next: "day4_night_seoyeon_resolve"
    },
    "day4_night_seoyeon_honest": {
        name: "서연",
        text: "\"…… 고마워. 진심이지?\"",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        next: "day4_night_seoyeon_honest_2"
    },
    "day4_night_seoyeon_honest_2": {
        name: "서연",
        text: "\"앞으로는… 너한테만은 연기 안 할게. 약속해.\"",
        character: "assets/images/characters/seyoun_normal.png",
        night: true,
        next: "day4_night_seoyeon_resolve"
    },

    // =========================================================================
    // 서연의 결의 — 자기 자신을 되찾겠다는 결심
    // =========================================================================
    "day4_night_seoyeon_resolve": {
        name: "서연",
        text: "\"…있잖아. 나 결심했어.\"",
        character: "assets/images/characters/seyoun_normal.png",
        night: true,
        next: "day4_night_seoyeon_resolve_2"
    },
    "day4_night_seoyeon_resolve_2": {
        name: "서연",
        text: "\"엄마한테 말할 거야. 나는 '완벽한 딸'이기 전에 나 자신이고 싶다고.\"",
        night: true,
        next: "day4_night_seoyeon_resolve_3"
    },
    "day4_night_seoyeon_resolve_3": {
        name: "서연",
        text: "\"무섭지만… 이제 혼자가 아니니까.\"",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        next: "day4_night_seoyeon_resolve_4"
    },
    "day4_night_seoyeon_resolve_4": {
        name: "나",
        text: "\"같이 가자. 어디든.\"",
        night: true,
        next: "day4_night_seoyeon_resolve_end"
    },
    "day4_night_seoyeon_resolve_end": {
        name: "서연",
        text: "\"……응.\"",
        character: "assets/images/characters/seyoun_shy2.png",
        night: true,
        setFlag: "day4_seoyeon_real_self",
        next: "day4_night_seoyeon_farewell"
    },

    // =========================================================================
    // 서연과의 이별 — 밤 산책
    // =========================================================================
    "day4_night_seoyeon_farewell": {
        name: "나",
        text: "(공원을 나와 집 앞까지 함께 걸었다. 서연이 내 팔에 살짝 기대어 걸었다.)",
        background: "assets/images/background/street.png",
        night: true,
        next: "day4_night_seoyeon_farewell_2"
    },
    "day4_night_seoyeon_farewell_2": {
        name: "서연",
        text: "\"…오늘 못난 모습 보여줬는데, 도망 안 갔네.\"",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        next: "day4_night_seoyeon_farewell_3"
    },
    "day4_night_seoyeon_farewell_3": {
        name: "나",
        text: "\"도망은. 오히려 더 좋아졌는데?\"",
        night: true,
        next: "day4_night_seoyeon_farewell_4"
    },
    "day4_night_seoyeon_farewell_4": {
        name: "서연",
        text: "\"……반칙이야, 진짜.\"",
        character: "assets/images/characters/seyoun_shy2.png",
        night: true,
        next: "day4_night_seoyeon_farewell_5"
    },
    "day4_night_seoyeon_farewell_5": {
        name: "나",
        text: "(서연이 돌아서면서 작은 목소리로 말했다.)",
        night: true,
        next: "day4_night_seoyeon_farewell_6"
    },
    "day4_night_seoyeon_farewell_6": {
        name: "서연",
        text: "\"…오늘, 처음으로 '내가 나여도 괜찮다'고 느꼈어. 고마워.\"",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        next: "day4_night_seoyeon_home"
    },
    "day4_night_seoyeon_home": {
        name: "나",
        text: "(집에 돌아왔다. 서연의 눈물이 자꾸 떠오른다. 완벽했던 학생회장의 진짜 모습… 그 무거운 짐을 나눠 들고 싶다.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        next: "day4_night_seoyeon_home_2"
    },
    "day4_night_seoyeon_home_2": {
        name: "나",
        text: "(내일은… 서연이 웃는 이유가 '연기'가 아니라 '진심'이 되도록 해주고 싶다.)",
        night: true,
        fade: true,
        next: "day4_final"
    },

    // =========================================================================
    // 다인 루트 — 꿈의 대가, 무릎의 비밀
    // =========================================================================
    "day4_night_dain_gym": {
        name: "나",
        text: "(밤 9시 반. 다인에게서 메시지가 왔다. '야 지금 시간 돼?ㅋㅋ 학교 오면 안 되지??')",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        bgm: "night1.mp3",
        next: "day4_night_dain_gym_2"
    },
    "day4_night_dain_gym_2": {
        name: "나",
        text: "(곧바로 또 메시지가 왔다. '아 그냥 와ㅋㅋ 체육관 뒷문 열어놨음!')",
        night: true,
        next: "day4_night_dain_gym_3"
    },
    "day4_night_dain_gym_3": {
        name: "나",
        text: "(다인이 이 시간에 학교 체육관이라니. 뭔가 이상한데… 가보자.)",
        night: true,
        next: "day4_night_dain_arrive"
    },
    "day4_night_dain_arrive": {
        name: "나",
        text: "(체육관에 들어서자, 비상등만 켜진 어두운 코트 위에 다인이 혼자 배구공을 튀기고 있었다.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_normal.png",
        night: true,
        next: "day4_night_dain_arrive_2"
    },
    "day4_night_dain_arrive_2": {
        name: "다인",
        text: "\"오! 진짜 왔어?! 헤헤, 역시 내 남자친구!\"",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        next: "day4_night_dain_arrive_3"
    },
    "day4_night_dain_arrive_3": {
        name: "나",
        text: "(그런데… 뭔가 이상하다. 다인이 평소보다 더 힘껏 웃고 있는 것 같다.)",
        night: true,
        next: "day4_night_dain_spike"
    },
    "day4_night_dain_spike": {
        name: "다인",
        text: "\"토스 올려줘! 한 번만! 내 스파이크 보여줄게!!\"",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        next: "day4_night_dain_spike_2"
    },
    "day4_night_dain_spike_2": {
        name: "나",
        text: "(다인에게 토스를 올려줬다. 다인이 높이 뛰어올라 스파이크를 내리찍는다.)",
        night: true,
        next: "day4_night_dain_spike_3"
    },
    "day4_night_dain_spike_3": {
        name: "나",
        text: "(착지하는 순간— 다인이 오른쪽 무릎을 움켜잡고 쪼그려 앉았다.)",
        night: true,
        next: "day4_night_dain_hurt"
    },
    "day4_night_dain_hurt": {
        name: "다인",
        text: "\"…… ッ!!\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_hurt_2"
    },
    "day4_night_dain_hurt_2": {
        name: "나",
        text: "\"다인!!\"",
        night: true,
        next: "day4_night_dain_hurt_3"
    },
    "day4_night_dain_hurt_3": {
        name: "다인",
        text: "\"아, 아냐!! 괜찮아!! 그냥 삐끗한 거야 ㅋㅋ 별거 아…\"",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        next: "day4_night_dain_hurt_4"
    },
    "day4_night_dain_hurt_4": {
        name: "나",
        text: "(다인이 웃고 있지만, 무릎을 잡은 손이 하얗게 질려 있다.)",
        night: true,
        choices: [
            {
                text: "\"거짓말하지 마. 어디 봐.\"",
                next: "day4_night_dain_check",
                stats: { Dain: { affinity: 8 } }
            },
            {
                text: "\"다인. 괜찮지 않잖아.\"",
                next: "day4_night_dain_serious",
                stats: { Dain: { affinity: 10 } }
            }
        ]
    },

    // =========================================================================
    // 다인의 비밀 — 무릎 부상
    // =========================================================================
    "day4_night_dain_check": {
        name: "나",
        text: "(다인의 무릎을 보려 하자, 다인이 화들짝 뒤로 물러났다.)",
        night: true,
        next: "day4_night_dain_secret"
    },
    "day4_night_dain_serious": {
        name: "다인",
        text: "\"……\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_secret"
    },
    "day4_night_dain_secret": {
        name: "다인",
        text: "\"…… 알았어. 숨기려 했는데.\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_secret_2"
    },
    "day4_night_dain_secret_2": {
        name: "나",
        text: "(다인이 무릎 보호대를 걷어 올렸다. 무릎이 심하게 부어 있었다.)",
        night: true,
        next: "day4_night_dain_secret_3"
    },
    "day4_night_dain_secret_3": {
        name: "다인",
        text: "\"…전방 십자인대. 작년에 다쳤어. 수술했는데… 완치가 안 됐어.\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_secret_4"
    },
    "day4_night_dain_secret_4": {
        name: "나",
        text: "\"……작년에?\"",
        night: true,
        next: "day4_night_dain_secret_5"
    },
    "day4_night_dain_secret_5": {
        name: "다인",
        text: "\"의사 선생님이 그랬어. '일상생활은 괜찮지만, 이전처럼 뛰는 건 무리'라고.\"",
        night: true,
        next: "day4_night_dain_secret_6"
    },
    "day4_night_dain_secret_6": {
        name: "다인",
        text: "\"체육대 진학도, 프로 선수도… 다 물 건너갔어.\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_dream"
    },

    // =========================================================================
    // 다인의 꿈과 좌절
    // =========================================================================
    "day4_night_dain_dream": {
        name: "나",
        text: "(…배구가 전부였던 다인에게, 그건 사형선고나 마찬가지였을 거다.)",
        night: true,
        next: "day4_night_dain_dream_2"
    },
    "day4_night_dain_dream_2": {
        name: "다인",
        text: "\"…맨날 밝은 척 웃은 거, 알아? 아무도 모르게.\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_dream_3"
    },
    "day4_night_dain_dream_3": {
        name: "다인",
        text: "\"'다인이는 항상 에너지 넘치네!' 그 말 들을 때마다… 진짜 웃긴다. 속으론 매일 무릎이 불타는 것 같은데.\"",
        night: true,
        next: "day4_night_dain_dream_4"
    },
    "day4_night_dain_dream_4": {
        name: "다인",
        text: "\"오늘 너랑 데이트하면서 뛰어다닐 때도… 사실 아팠어. 근데 티 내고 싶지 않았어.\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_dream_5"
    },
    "day4_night_dain_dream_5": {
        name: "다인",
        text: "\"포기해야 하는 건 알아. 근데… 그냥 한 번만 더 뛰고 싶었어. 이 코트에서.\"",
        night: true,
        next: "day4_night_dain_cry"
    },
    "day4_night_dain_cry": {
        name: "나",
        text: "(다인이 배구공을 꼭 안고 고개를 숙였다. 어깨가 떨리고 있었다. 항상 밝기만 했던 다인이… 울고 있다.)",
        night: true,
        next: "day4_night_dain_cry_choice"
    },
    "day4_night_dain_cry_choice": {
        name: "나",
        text: "(……뭐라고 해야 하지.)",
        night: true,
        choices: [
            {
                text: "\"다인의 꿈이 배구만은 아닐 거야. 새로운 꿈 같이 찾자.\"",
                next: "day4_night_dain_future",
                stats: { Dain: { affinity: 15 } }
            },
            {
                text: "\"울어도 돼. 밝은 척 안 해도 돼. 나한테는.\"",
                next: "day4_night_dain_tears_ok",
                stats: { Dain: { affinity: 20 } },
                setFlag: "day4_dain_tears"
            },
            {
                text: "\"…한 번 더 토스 올려줄까? 마지막으로.\"",
                next: "day4_night_dain_last_spike",
                stats: { Dain: { affinity: 12 } }
            }
        ]
    },
    "day4_night_dain_future": {
        name: "다인",
        text: "\"…새로운 꿈?\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_future_2"
    },
    "day4_night_dain_future_2": {
        name: "다인",
        text: "\"…코치라든가, 트레이너라든가… 그런 거 생각해 본 적은 있어. 가르치는 건 좋아하니까.\"",
        character: "assets/images/characters/dain_normal.png",
        night: true,
        next: "day4_night_dain_future_3"
    },
    "day4_night_dain_future_3": {
        name: "나",
        text: "\"다인이면 세상에서 제일 열정적인 코치 될 거야.\"",
        night: true,
        next: "day4_night_dain_future_4"
    },
    "day4_night_dain_future_4": {
        name: "다인",
        text: "\"…바보, 갑자기 그런 말 하면 울잖아……\"",
        character: "assets/images/characters/dain_shy.png",
        night: true,
        next: "day4_night_dain_resolve"
    },
    "day4_night_dain_tears_ok": {
        name: "다인",
        text: "\"……\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_tears_ok_2"
    },
    "day4_night_dain_tears_ok_2": {
        name: "다인",
        text: "\"…… 이 바보야…… 그런 말 하면…… 진짜 울잖아……!!\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_tears_ok_3"
    },
    "day4_night_dain_tears_ok_3": {
        name: "나",
        text: "(다인이 내 가슴팍에 얼굴을 파묻고 엉엉 울기 시작했다. 체육관에 울음소리가 울려 퍼졌다.)",
        night: true,
        next: "day4_night_dain_tears_ok_4"
    },
    "day4_night_dain_tears_ok_4": {
        name: "다인",
        text: "\"…아무한테도 말 못 했어…… 혼자서 매일…… 무서웠단 말이야……\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_resolve"
    },
    "day4_night_dain_last_spike": {
        name: "다인",
        text: "\"…… 마지막?\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_last_spike_2"
    },
    "day4_night_dain_last_spike_2": {
        name: "나",
        text: "\"마지막이 아니라, '새로운 시작 전의 마지막 한 발'이야.\"",
        night: true,
        next: "day4_night_dain_last_spike_3"
    },
    "day4_night_dain_last_spike_3": {
        name: "나",
        text: "(토스를 올려줬다. 다인이 이를 악물고 뛰어올라 최고의 스파이크를 내리찍었다. 착지와 함께 무릎을 잡았지만… 웃고 있었다.)",
        night: true,
        next: "day4_night_dain_last_spike_4"
    },
    "day4_night_dain_last_spike_4": {
        name: "다인",
        text: "\"…ㅋㅋ 아프다. 근데… 시원하다.\"",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        next: "day4_night_dain_last_spike_5"
    },
    "day4_night_dain_last_spike_5": {
        name: "다인",
        text: "\"…고마워. 이걸로 진짜 보내줄 수 있을 것 같아.\"",
        character: "assets/images/characters/dain_shy.png",
        night: true,
        next: "day4_night_dain_resolve"
    },

    // =========================================================================
    // 다인의 결의 — 새로운 길
    // =========================================================================
    "day4_night_dain_resolve": {
        name: "다인",
        text: "\"…야.\"",
        character: "assets/images/characters/dain_normal.png",
        night: true,
        next: "day4_night_dain_resolve_2"
    },
    "day4_night_dain_resolve_2": {
        name: "다인",
        text: "\"나 결심했어. 주치의 선생님한테 제대로 이야기하고, 재활에 집중할 거야.\"",
        night: true,
        next: "day4_night_dain_resolve_3"
    },
    "day4_night_dain_resolve_3": {
        name: "다인",
        text: "\"뛸 수 없어도… 이 코트가 내 자리인 건 변하지 않으니까.\"",
        character: "assets/images/characters/dain_normal.png",
        night: true,
        next: "day4_night_dain_resolve_4"
    },
    "day4_night_dain_resolve_4": {
        name: "나",
        text: "\"코트 밖에서도 다인은 다인이야.\"",
        night: true,
        next: "day4_night_dain_resolve_end"
    },
    "day4_night_dain_resolve_end": {
        name: "다인",
        text: "\"…… 너 진짜 남자친구 맞다, 인정.\"",
        character: "assets/images/characters/dain_shy.png",
        night: true,
        setFlag: "day4_dain_truth_revealed",
        next: "day4_night_dain_farewell"
    },

    // =========================================================================
    // 다인과의 이별 — 체육관 앞
    // =========================================================================
    "day4_night_dain_farewell": {
        name: "나",
        text: "(체육관을 나왔다. 밤 공기가 차갑지만, 다인이 내 팔짱을 끼고 걸었다.)",
        background: "assets/images/background/street.png",
        night: true,
        next: "day4_night_dain_farewell_2"
    },
    "day4_night_dain_farewell_2": {
        name: "다인",
        text: "\"…야. 나 오늘 완전 폼 구겼다. 울고불고 난리법석.\"",
        character: "assets/images/characters/dain_pout.png",
        night: true,
        next: "day4_night_dain_farewell_3"
    },
    "day4_night_dain_farewell_3": {
        name: "나",
        text: "\"그 모습도 좋았는데?\"",
        night: true,
        next: "day4_night_dain_farewell_4"
    },
    "day4_night_dain_farewell_4": {
        name: "다인",
        text: "\"…ㅎ, 변태 아냐? 우는 여자친구 보면서 '좋았다'니.\"",
        character: "assets/images/characters/dain_pout.png",
        night: true,
        next: "day4_night_dain_farewell_5"
    },
    "day4_night_dain_farewell_5": {
        name: "다인",
        text: "\"…근데, 고마워. 진짜로. 네가 아니었으면 영영 혼자 안고 갔을 거야.\"",
        character: "assets/images/characters/dain_shy.png",
        night: true,
        next: "day4_night_dain_farewell_6"
    },
    "day4_night_dain_farewell_6": {
        name: "다인",
        text: "\"…내일부터는 진짜로 웃을게. 가짜 말고, 진짜로.\"",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        next: "day4_night_dain_home"
    },
    "day4_night_dain_home": {
        name: "나",
        text: "(집에 돌아왔다. 체육관에서의 다인의 눈물이 떠오른다. 항상 밝기만 했던 다인이 감추고 있던 아픔… 그 무게가 가슴에 남아 있다.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        next: "day4_night_dain_home_2"
    },
    "day4_night_dain_home_2": {
        name: "나",
        text: "(내일은 다인이 진심으로 웃을 수 있는 하루가 되길. 옆에서 지켜봐 줘야지.)",
        night: true,
        fade: true,
        next: "day4_final"
    },

    // =========================================================================
    // 담임선생님 루트 — 비밀의 무게, 선생님이 아닌 여자로서
    // =========================================================================
    "day4_night_teacher_call": {
        name: "나",
        text: "(밤 9시. 선생님한테 전화가 왔다.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        bgm: "night1.mp3",
        next: "day4_night_teacher_call_2"
    },
    "day4_night_teacher_call_2": {
        name: "담임선생님",
        text: "\"…여보세요? 나야. 지금… 시간 괜찮아?\"",
        character: "assets/images/characters/teacher_normal.png",
        night: true,
        next: "day4_night_teacher_call_3"
    },
    "day4_night_teacher_call_3": {
        name: "나",
        text: "(선생님 목소리가 평소와 다르다. 교실에서의 당당한 목소리가 아니라… 어딘가 지쳐 있는 느낌.)",
        night: true,
        next: "day4_night_teacher_call_4"
    },
    "day4_night_teacher_call_4": {
        name: "담임선생님",
        text: "\"…학교 근처 카페 알지? 거기서 잠깐 볼 수 있을까.\"",
        night: true,
        next: "day4_night_teacher_cafe"
    },
    "day4_night_teacher_cafe": {
        name: "나",
        text: "(카페에 도착했다. 구석 자리에 선생님이 앉아 있었다. 평소 정장 차림이 아니라 캐주얼한 옷을 입고 있었다.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_cafe_2"
    },
    "day4_night_teacher_cafe_2": {
        name: "담임선생님",
        text: "\"…와줘서 고마워. 갑자기 불러서 미안해.\"",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_cafe_3"
    },
    "day4_night_teacher_cafe_3": {
        name: "나",
        text: "(선생님 눈이 붉다. …울었던 건가?)",
        night: true,
        choices: [
            {
                text: "\"무슨 일 있었어요?\"",
                next: "day4_night_teacher_concern",
                stats: { Teacher: { affinity: 5 } }
            },
            {
                text: "커피를 건네며 조용히 기다린다",
                next: "day4_night_teacher_wait",
                stats: { Teacher: { affinity: 8 } }
            }
        ]
    },
    "day4_night_teacher_concern": {
        name: "담임선생님",
        text: "\"…일이라기보다는, 오늘 좀 많이 생각을 했어.\"",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_open"
    },
    "day4_night_teacher_wait": {
        name: "담임선생님",
        text: "\"…고마워. 이렇게 아무 말 없이 옆에 있어주는 거… 네가 참 좋아.\"",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_open"
    },

    // =========================================================================
    // 담임선생님의 고백 — 비밀의 무게
    // =========================================================================
    "day4_night_teacher_open": {
        name: "담임선생님",
        text: "\"…오늘 교무회의에서 교감 선생님이 그러시더라. '학생과 개인적으로 친하게 지내는 건 조심해야 한다'고.\"",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_open_2"
    },
    "day4_night_teacher_open_2": {
        name: "담임선생님",
        text: "\"직접적으로 우리 얘기를 한 건 아닐 수도 있어. 하지만… 심장이 멈추는 줄 알았어.\"",
        night: true,
        next: "day4_night_teacher_open_3"
    },
    "day4_night_teacher_open_3": {
        name: "담임선생님",
        text: "\"나… 선생이잖아. 너의 담임이잖아. 이러면 안 되는 거 알아.\"",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_open_4"
    },
    "day4_night_teacher_open_4": {
        name: "나",
        text: "\"……선생님.\"",
        night: true,
        next: "day4_night_teacher_open_5"
    },
    "day4_night_teacher_open_5": {
        name: "담임선생님",
        text: "\"근데 돌아가는 길에 자꾸 네 생각이 나는 거야. '지금 뭐 하고 있을까', '밥은 먹었을까'…\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_open_6"
    },
    "day4_night_teacher_open_6": {
        name: "담임선생님",
        text: "\"교사로서 자격이 없는 걸까. 아니면… 이 마음이 진짜라서 이러는 걸까.\"",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_tear"
    },
    "day4_night_teacher_tear": {
        name: "나",
        text: "(선생님이 커피잔을 꼭 쥐고 고개를 숙였다. 어깨가 미세하게 떨리고 있었다.)",
        night: true,
        next: "day4_night_teacher_tear_2"
    },
    "day4_night_teacher_tear_2": {
        name: "담임선생님",
        text: "\"…하하, 미안. 선생이 학생 앞에서 이러면 안 되는데.\"",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_tear_choice"
    },
    "day4_night_teacher_tear_choice": {
        name: "나",
        text: "(선생님의 눈가에 눈물이 맺혀 있다.)",
        night: true,
        choices: [
            {
                text: "손을 잡는다",
                next: "day4_night_teacher_hold",
                stats: { Teacher: { affinity: 15 } },
                setFlag: "day4_held_teacher_hand"
            },
            {
                text: "\"지금은 선생님이 아니라, 한 사람의 여자로 봐도 돼요\"",
                next: "day4_night_teacher_woman",
                stats: { Teacher: { affinity: 20 } },
                setFlag: "day4_teacher_as_woman"
            }
        ]
    },
    "day4_night_teacher_hold": {
        name: "담임선생님",
        text: "\"…… !\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_hold_2"
    },
    "day4_night_teacher_hold_2": {
        name: "나",
        text: "(테이블 밑으로 선생님의 손을 잡았다. 차가웠던 손이 점점 따뜻해졌다.)",
        night: true,
        next: "day4_night_teacher_hold_3"
    },
    "day4_night_teacher_hold_3": {
        name: "담임선생님",
        text: "\"…여기서 이러면 안 되는데. 누가 볼 수도 있잖아.\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_hold_4"
    },
    "day4_night_teacher_hold_4": {
        name: "담임선생님",
        text: "\"…근데 놓기 싫다.\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_real"
    },
    "day4_night_teacher_woman": {
        name: "담임선생님",
        text: "\"…뭐?\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_woman_2"
    },
    "day4_night_teacher_woman_2": {
        name: "나",
        text: "\"선생님이기 전에, 한 명의 사람이잖아요. 울고 싶을 때 울어도 되는 거예요.\"",
        night: true,
        next: "day4_night_teacher_woman_3"
    },
    "day4_night_teacher_woman_3": {
        name: "담임선생님",
        text: "\"……너, 진짜.\"",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_woman_4"
    },
    "day4_night_teacher_woman_4": {
        name: "담임선생님",
        text: "\"…그런 말 하면 진짜 울어버린다, 바보야.\"",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_real"
    },

    // =========================================================================
    // 담임선생님의 진심 — 교사와 여자 사이
    // =========================================================================
    "day4_night_teacher_real": {
        name: "담임선생님",
        text: "\"…있잖아. 나 처음 교사 됐을 때, '절대 학생한테 감정 갖지 말자' 그렇게 다짐했었어.\"",
        character: "assets/images/characters/teacher_normal.png",
        night: true,
        next: "day4_night_teacher_real_2"
    },
    "day4_night_teacher_real_2": {
        name: "담임선생님",
        text: "\"근데 너는… 어느 순간부터 그 다짐을 무너뜨리더라.\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_real_3"
    },
    "day4_night_teacher_real_3": {
        name: "담임선생님",
        text: "\"지각해서 혼냈는데 오히려 웃으면서 '선생님 오늘 좀 피곤해 보여요, 괜찮아요?' 그러잖아.\"",
        night: true,
        next: "day4_night_teacher_real_4"
    },
    "day4_night_teacher_real_4": {
        name: "담임선생님",
        text: "\"그때부터… 자꾸 신경 쓰이기 시작했어.\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_real_choice"
    },
    "day4_night_teacher_real_choice": {
        name: "나",
        text: "(선생님이 떨리는 목소리로 진심을 말하고 있다.)",
        night: true,
        choices: [
            {
                text: "\"졸업하면 당당하게 옆에 있을게요\"",
                next: "day4_night_teacher_graduate",
                stats: { Teacher: { affinity: 20 } }
            },
            {
                text: "\"지금 이 순간이 소중해요. 그걸로 충분해요\"",
                next: "day4_night_teacher_present",
                stats: { Teacher: { affinity: 15 } }
            },
            {
                text: "\"선생님이 힘들면 그만둬도 괜찮아요\"",
                next: "day4_night_teacher_give_up",
                stats: { Teacher: { affinity: 5 } }
            }
        ]
    },
    "day4_night_teacher_graduate": {
        name: "담임선생님",
        text: "\"…졸업하면?\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_graduate_2"
    },
    "day4_night_teacher_graduate_2": {
        name: "담임선생님",
        text: "\"…그때까지 기다려 줄 거야?\"",
        night: true,
        next: "day4_night_teacher_graduate_3"
    },
    "day4_night_teacher_graduate_3": {
        name: "나",
        text: "\"기다리는 게 아니라, 그때까지 더 멋진 사람이 돼서 올게요.\"",
        night: true,
        next: "day4_night_teacher_graduate_4"
    },
    "day4_night_teacher_graduate_4": {
        name: "담임선생님",
        text: "\"…하, 진짜. 나보다 훨씬 어른스러운 거 아니야.\"",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        next: "day4_night_teacher_resolve"
    },
    "day4_night_teacher_present": {
        name: "담임선생님",
        text: "\"…지금 이 순간?\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_present_2"
    },
    "day4_night_teacher_present_2": {
        name: "나",
        text: "\"내일 걱정은 내일 해요. 지금은 그냥 같이 있고 싶어요.\"",
        night: true,
        next: "day4_night_teacher_present_3"
    },
    "day4_night_teacher_present_3": {
        name: "담임선생님",
        text: "\"…그래, 맞아. 지금 이 시간이 소중한 거지.\"",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        next: "day4_night_teacher_resolve"
    },
    "day4_night_teacher_give_up": {
        name: "담임선생님",
        text: "\"…그만두라고?\"",
        character: "assets/images/characters/teacher_angry.png",
        night: true,
        next: "day4_night_teacher_give_up_2"
    },
    "day4_night_teacher_give_up_2": {
        name: "담임선생님",
        text: "\"…바보. 그만두고 싶어서 고민하는 게 아니야.\"",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_give_up_3"
    },
    "day4_night_teacher_give_up_3": {
        name: "담임선생님",
        text: "\"너를 좋아하는 마음이 진짜라서… 그래서 무서운 거야.\"",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_resolve"
    },

    // =========================================================================
    // 담임선생님의 다짐
    // =========================================================================
    "day4_night_teacher_resolve": {
        name: "담임선생님",
        text: "\"…있잖아.\"",
        character: "assets/images/characters/teacher_normal.png",
        night: true,
        next: "day4_night_teacher_resolve_2"
    },
    "day4_night_teacher_resolve_2": {
        name: "담임선생님",
        text: "\"나 결심했어. 이 마음을 부끄러워하지 않기로.\"",
        night: true,
        next: "day4_night_teacher_resolve_3"
    },
    "day4_night_teacher_resolve_3": {
        name: "담임선생님",
        text: "\"교실에서는 너의 선생님이지만… 이 시간만큼은 그냥 '나'로 있을게.\"",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        next: "day4_night_teacher_resolve_4"
    },
    "day4_night_teacher_resolve_4": {
        name: "나",
        text: "\"그 모습이 더 좋아요.\"",
        night: true,
        next: "day4_night_teacher_resolve_end"
    },
    "day4_night_teacher_resolve_end": {
        name: "담임선생님",
        text: "\"…고마워. 진짜 고마워.\"",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        setFlag: "day4_teacher_secret_shared",
        next: "day4_night_teacher_farewell"
    },

    // =========================================================================
    // 담임선생님과의 헤어짐 — 밤거리
    // =========================================================================
    "day4_night_teacher_farewell": {
        name: "나",
        text: "(카페를 나왔다. 밤거리를 나란히 걸었다. 학교 밖에서 이렇게 걷는 건 처음이다.)",
        background: "assets/images/background/street.png",
        night: true,
        next: "day4_night_teacher_farewell_2"
    },
    "day4_night_teacher_farewell_2": {
        name: "담임선생님",
        text: "\"…신기하다. 학교 밖에서 같이 걸으니까 진짜 연인 같아.\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_farewell_3"
    },
    "day4_night_teacher_farewell_3": {
        name: "나",
        text: "\"연인 맞잖아요.\"",
        night: true,
        next: "day4_night_teacher_farewell_4"
    },
    "day4_night_teacher_farewell_4": {
        name: "담임선생님",
        text: "\"…!! 그, 그런 말 갑자기 하면 심장에 안 좋다고.\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_farewell_5"
    },
    "day4_night_teacher_farewell_5": {
        name: "담임선생님",
        text: "\"…내일 학교에서 보면 또 '선생님' 모드로 돌아갈게. 미리 사과할게, 쌀쌀맞아도 이해해줘.\"",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        next: "day4_night_teacher_farewell_6"
    },
    "day4_night_teacher_farewell_6": {
        name: "담임선생님",
        text: "\"…근데 마음만은 항상 너한테 있을 거야. 알지?\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_home"
    },
    "day4_night_teacher_home": {
        name: "나",
        text: "(집에 돌아왔다. 카페에서의 선생님 모습이 떠오른다. 항상 당당하고 완벽했던 선생님이… 한 명의 여자로서 보여준 눈물과 떨림.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        next: "day4_night_teacher_home_2"
    },
    "day4_night_teacher_home_2": {
        name: "나",
        text: "(이 비밀은 무겁지만… 그만큼 소중하다. 선생님의 그 마음을 절대 가볍게 여기지 않을 거다.)",
        night: true,
        fade: true,
        next: "day4_final"
    },

    // =========================================================================
    // 보건선생님 루트 — 가면 뒤의 외로움, 진짜 따뜻함
    // =========================================================================
    "day4_night_nurse_msg": {
        name: "나",
        text: "(밤 10시. 보건선생님한테 메시지가 왔다. '자기야~ 아직 안 잤지? ㅎㅎ 심심한데 나올래~?')",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        bgm: "night1.mp3",
        next: "day4_night_nurse_msg_2"
    },
    "day4_night_nurse_msg_2": {
        name: "나",
        text: "(…평소처럼 장난스러운 메시지인데, 왜 이 시간에? 뭔가 이상하다.)",
        night: true,
        next: "day4_night_nurse_msg_3"
    },
    "day4_night_nurse_msg_3": {
        name: "나",
        text: "(곧바로 답장했다. '어디로 가면 돼요?')",
        night: true,
        next: "day4_night_nurse_msg_4"
    },
    "day4_night_nurse_msg_4": {
        name: "나",
        text: "('우리 학교 보건실 ㅋㅋ 뒷문 열어놨어~' …보건실에서?)",
        night: true,
        next: "day4_night_nurse_arrive"
    },
    "day4_night_nurse_arrive": {
        name: "나",
        text: "(학교에 도착했다. 보건실 문을 열자, 작은 스탠드 하나만 켜진 어두운 방 안에 선생님이 있었다.)",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day4_night_nurse_arrive_2"
    },
    "day4_night_nurse_arrive_2": {
        name: "보건선생님",
        text: "\"어머~ 진짜 왔네? 착한 남자친구~\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day4_night_nurse_arrive_3"
    },
    "day4_night_nurse_arrive_3": {
        name: "나",
        text: "(평소처럼 장난스럽게 웃고 있는데… 눈 밑에 다크서클이 짙다. 그리고 책상 위에 빈 커피캔이 여러 개.)",
        night: true,
        choices: [
            {
                text: "\"선생님, 많이 피곤해 보여요\"",
                next: "day4_night_nurse_tired",
                stats: { Nurse: { affinity: 8 } }
            },
            {
                text: "\"진짜 이유가 뭐예요?\"",
                next: "day4_night_nurse_real_reason",
                stats: { Nurse: { affinity: 5 } }
            }
        ]
    },
    "day4_night_nurse_tired": {
        name: "보건선생님",
        text: "\"에? 그래~? 아하하, 요즘 좀 바빠서~ 괜찮아 괜찮아~\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day4_night_nurse_mask"
    },
    "day4_night_nurse_real_reason": {
        name: "보건선생님",
        text: "\"…진짜 이유? 그냥 보고 싶었으니까~\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day4_night_nurse_mask"
    },

    // =========================================================================
    // 보건선생님의 가면 — 장난 뒤의 외로움
    // =========================================================================
    "day4_night_nurse_mask": {
        name: "나",
        text: "(선생님이 웃고 있지만, 어딘가 무리하고 있다는 느낌이 든다.)",
        night: true,
        next: "day4_night_nurse_mask_2"
    },
    "day4_night_nurse_mask_2": {
        name: "보건선생님",
        text: "\"…있잖아, 오늘 학교에서 좀 힘든 일이 있었어.\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day4_night_nurse_mask_3"
    },
    "day4_night_nurse_mask_3": {
        name: "보건선생님",
        text: "\"다른 선생님들이 그러더라. '보건 선생님은 항상 밝아서 좋겠다, 고민 없어 보인다'고.\"",
        night: true,
        next: "day4_night_nurse_mask_4"
    },
    "day4_night_nurse_mask_4": {
        name: "보건선생님",
        text: "\"…고민 없어 보인다. 하하. 그 말이 제일 아팠어.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_mask_5"
    },
    "day4_night_nurse_mask_5": {
        name: "보건선생님",
        text: "\"나도 힘든데… 아무도 안 물어보더라. '괜찮아?' 한마디.\"",
        night: true,
        next: "day4_night_nurse_mask_6"
    },
    "day4_night_nurse_mask_6": {
        name: "보건선생님",
        text: "\"보건실에 아이들이 올 때마다 웃어주고, 다독여주고. 근데… 나는 누가 다독여주지?\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_lonely"
    },
    "day4_night_nurse_lonely": {
        name: "보건선생님",
        text: "\"…집에 가면 아무도 없어. 혼자 사니까.\"",
        night: true,
        next: "day4_night_nurse_lonely_2"
    },
    "day4_night_nurse_lonely_2": {
        name: "보건선생님",
        text: "\"그래서… 자꾸 학교에 늦게까지 남게 되더라. 이 보건실이라도 있으면 외롭지 않으니까.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_lonely_3"
    },
    "day4_night_nurse_lonely_3": {
        name: "나",
        text: "(선생님이 웃음을 멈췄다. 처음으로 장난기 없는, 진짜 얼굴을 보여주고 있다.)",
        night: true,
        next: "day4_night_nurse_lonely_choice"
    },
    "day4_night_nurse_lonely_choice": {
        name: "나",
        text: "(선생님의 진짜 모습이 보인다. 뭐라고 해야 할까.)",
        night: true,
        choices: [
            {
                text: "옆에 앉아서 안아준다",
                next: "day4_night_nurse_hug",
                stats: { Nurse: { affinity: 20 } },
                setFlag: "day4_hugged_nurse"
            },
            {
                text: "\"이제는 제가 선생님을 돌봐드릴게요\"",
                next: "day4_night_nurse_care",
                stats: { Nurse: { affinity: 15 } },
                setFlag: "day4_nurse_cared"
            }
        ]
    },
    "day4_night_nurse_hug": {
        name: "보건선생님",
        text: "\"……!!\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_hug_2"
    },
    "day4_night_nurse_hug_2": {
        name: "보건선생님",
        text: "\"…야, 갑자기… 뭐야…\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_hug_3"
    },
    "day4_night_nurse_hug_3": {
        name: "나",
        text: "(선생님이 처음에는 당황했지만… 곧 내 옷을 꼭 쥐었다.)",
        night: true,
        next: "day4_night_nurse_hug_4"
    },
    "day4_night_nurse_hug_4": {
        name: "보건선생님",
        text: "\"…이상해. 내가 남한테 안기고 싶었던 적이 있었나.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_hug_5"
    },
    "day4_night_nurse_hug_5": {
        name: "보건선생님",
        text: "\"…조금만 이러고 있자. 조금만.\"",
        night: true,
        next: "day4_night_nurse_truth"
    },
    "day4_night_nurse_care": {
        name: "보건선생님",
        text: "\"…뭐? 네가 나를?\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_care_2"
    },
    "day4_night_nurse_care_2": {
        name: "나",
        text: "\"선생님은 항상 다른 사람을 돌보잖아요. 이제는 돌봄 받을 차례예요.\"",
        night: true,
        next: "day4_night_nurse_care_3"
    },
    "day4_night_nurse_care_3": {
        name: "보건선생님",
        text: "\"…하하. 어쩜 이렇게 정곡을 찌르니.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_care_4"
    },
    "day4_night_nurse_care_4": {
        name: "보건선생님",
        text: "\"…진짜 그래줄 거야?\"",
        night: true,
        next: "day4_night_nurse_truth"
    },

    // =========================================================================
    // 보건선생님의 진심 — 가면을 벗다
    // =========================================================================
    "day4_night_nurse_truth": {
        name: "보건선생님",
        text: "\"…사실 나, 보건 교사가 된 이유가 있어.\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day4_night_nurse_truth_2"
    },
    "day4_night_nurse_truth_2": {
        name: "보건선생님",
        text: "\"고등학교 때, 친한 친구가 아파서 오래 결석했거든. 그때 보건실 선생님이 정말 잘 챙겨줬어.\"",
        night: true,
        next: "day4_night_nurse_truth_3"
    },
    "day4_night_nurse_truth_3": {
        name: "보건선생님",
        text: "\"나도 그런 사람이 되고 싶었어. 아픈 아이들의 편이 되어주는 사람.\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day4_night_nurse_truth_4"
    },
    "day4_night_nurse_truth_4": {
        name: "보건선생님",
        text: "\"근데 막상 되고 보니까… '보건 선생님은 장난이나 치는 사람' 취급이더라.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_truth_5"
    },
    "day4_night_nurse_truth_5": {
        name: "보건선생님",
        text: "\"진지하게 굴면 분위기 망친다고 하니까… 자연스럽게 웃음으로 감추게 됐어.\"",
        night: true,
        next: "day4_night_nurse_truth_6"
    },
    "day4_night_nurse_truth_6": {
        name: "보건선생님",
        text: "\"…너한테도 그랬어. 장난치면서 다가갔지. 진심을 보여주는 게… 무서웠으니까.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_truth_choice"
    },
    "day4_night_nurse_truth_choice": {
        name: "나",
        text: "(선생님의 목소리가 떨리고 있다.)",
        night: true,
        choices: [
            {
                text: "\"장난치는 선생님도, 지금의 선생님도 다 좋아요\"",
                next: "day4_night_nurse_accept_all",
                stats: { Nurse: { affinity: 20 } }
            },
            {
                text: "\"진심을 보여줘서 고마워요\"",
                next: "day4_night_nurse_thanks",
                stats: { Nurse: { affinity: 15 } }
            },
            {
                text: "\"이제 안 무서워해도 돼요. 제가 있으니까\"",
                next: "day4_night_nurse_safe",
                stats: { Nurse: { affinity: 18 } }
            }
        ]
    },
    "day4_night_nurse_accept_all": {
        name: "보건선생님",
        text: "\"…다 좋다고?\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_accept_all_2"
    },
    "day4_night_nurse_accept_all_2": {
        name: "보건선생님",
        text: "\"…야, 그런 말 하면 진짜 반하잖아.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_accept_all_3"
    },
    "day4_night_nurse_accept_all_3": {
        name: "보건선생님",
        text: "\"…아, 이미 반했구나. 하하.\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day4_night_nurse_resolve"
    },
    "day4_night_nurse_thanks": {
        name: "보건선생님",
        text: "\"…고맙다고? 내가?\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_thanks_2"
    },
    "day4_night_nurse_thanks_2": {
        name: "보건선생님",
        text: "\"…너한테 진심을 보여주는 게 이렇게 편할 줄 몰랐어.\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day4_night_nurse_resolve"
    },
    "day4_night_nurse_safe": {
        name: "보건선생님",
        text: "\"…안 무서워해도 된다고?\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_safe_2"
    },
    "day4_night_nurse_safe_2": {
        name: "보건선생님",
        text: "\"…너 진짜 반칙이다. 나이만 어리지, 완전 어른이잖아.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_resolve"
    },

    // =========================================================================
    // 보건선생님의 다짐 — 진짜 웃음
    // =========================================================================
    "day4_night_nurse_resolve": {
        name: "보건선생님",
        text: "\"…있잖아.\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day4_night_nurse_resolve_2"
    },
    "day4_night_nurse_resolve_2": {
        name: "보건선생님",
        text: "\"이제부터 너한테는 가면 안 쓸게. 웃을 때 진짜로 웃고, 슬플 때 슬프다고 말할게.\"",
        night: true,
        next: "day4_night_nurse_resolve_3"
    },
    "day4_night_nurse_resolve_3": {
        name: "보건선생님",
        text: "\"너라면… 진짜 나를 받아줄 수 있을 것 같아.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_resolve_4"
    },
    "day4_night_nurse_resolve_4": {
        name: "나",
        text: "\"당연하죠. 그 모습이 제일 예뻐요.\"",
        night: true,
        next: "day4_night_nurse_resolve_end"
    },
    "day4_night_nurse_resolve_end": {
        name: "보건선생님",
        text: "\"……!! 야, 진짜 심장 터지겠다.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        setFlag: "day4_nurse_mask_off",
        next: "day4_night_nurse_farewell"
    },

    // =========================================================================
    // 보건선생님과의 헤어짐 — 학교 밖
    // =========================================================================
    "day4_night_nurse_farewell": {
        name: "나",
        text: "(보건실을 나와서 학교 밖으로 걸었다. 선생님이 내 팔짱을 끼었다.)",
        background: "assets/images/background/street.png",
        night: true,
        next: "day4_night_nurse_farewell_2"
    },
    "day4_night_nurse_farewell_2": {
        name: "보건선생님",
        text: "\"…오늘 나 많이 찌질했지? 맨날 장난만 치던 사람이 갑자기 울보가 됐으니까.\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day4_night_nurse_farewell_3"
    },
    "day4_night_nurse_farewell_3": {
        name: "나",
        text: "\"찌질한 게 아니라 솔직한 거예요.\"",
        night: true,
        next: "day4_night_nurse_farewell_4"
    },
    "day4_night_nurse_farewell_4": {
        name: "보건선생님",
        text: "\"…하. 진짜 너 때문에 미치겠다. 이런 애한테 반하다니.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_farewell_5"
    },
    "day4_night_nurse_farewell_5": {
        name: "보건선생님",
        text: "\"…내일 보건실 오면 특별 서비스 해줄게. 뭐냐고? 비밀~\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day4_night_nurse_farewell_6"
    },
    "day4_night_nurse_farewell_6": {
        name: "보건선생님",
        text: "\"…농담이야. 그냥… 내일도 보고 싶을 거야. 그것만 알아줘.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_home"
    },
    "day4_night_nurse_home": {
        name: "나",
        text: "(집에 돌아왔다. 보건실에서 본 선생님의 진짜 얼굴이 떠오른다. 항상 장난치며 웃던 사람이… 사실은 가장 외로웠던 사람.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        next: "day4_night_nurse_home_2"
    },
    "day4_night_nurse_home_2": {
        name: "나",
        text: "(이제는 선생님이 혼자가 아니다. 내가 옆에 있으니까. 내일은 진짜 웃음을 볼 수 있겠지.)",
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
