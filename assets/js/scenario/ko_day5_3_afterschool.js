/**
 * ============================================================================
 * CUPID - Day 5 Afterschool Scenario (Korean Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: ko_day5_3_afterschool.js
 * 언어: 한국어 (Korean)
 * 일차: Day 5 (5일차 - 일요일)
 * 시간대: Afterschool (오후 - 에필로그)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 옥상에서의 에필로그. 엔딩 루트에 따라 다양한 결말이 펼쳐진다.
 * 
 *  엔딩 종류 (6가지)
 * ----------------------------------------------------------------------------
 * 1. 트루 엔딩  : 일편단심(loyalty) + Day4 고백 성공 → 키스씬
 * 2. 굿 엔딩   : Day4 고백 성공 (양다리였음) 또는 Day5 늦은 고백
 * 3. 수라장 엔딩 : 여러 명과 약속 + 고백 안 함 → 수라장
 * 4. 하렘 엔딩  : 여러 명과 약속 + 진심 고백 → 전원 수락
 * 5. 우정 엔딩  : Day4 고백 보류 + Day5에서도 고백 안 함
 * 6. 솔로 엔딩  : 아무와도 데이트 안 함 → 혼자 성장
 * 
 *  조건 플래그 (Condition Flags)
 * ----------------------------------------------------------------------------
 * day4_confession_accepted : Day4에서 고백 수락됨
 * day4_waited              : Day4에서 고백 보류
 * day3_loyalty_bonus       : 단일 약속 (일편단심)
 * day3_has_multiple_dates  : 여러 명과 약속 존재
 * 
 *  설정 플래그 (Set Flags)
 * ----------------------------------------------------------------------------
 * ending_true_love   : 트루 엔딩 도달
 * ending_good        : 굿 엔딩 도달
 * ending_mayhem      : 수라장 엔딩 도달
 * ending_harem       : 하렘 엔딩 도달
 * ending_friend      : 우정 엔딩 도달
 * ending_alone       : 솔로 엔딩 도달
 * day5_confessed     : Day5에서 고백함
 * 
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[5]) {
    SCENARIO[5] = {};
}

Object.assign(SCENARIO[5], {

    // =========================================================================
    // 오후 - 옥상 에필로그 (엔딩 분기)
    // =========================================================================
    "day5_afternoon_start": {
        name: "나",
        text: "(어느새 오후가 되었다. 옥상에서 보는 하늘이 주황빛으로 물들기 시작한다.)",
        background: "assets/images/background/top_school.png",
        bgm: "sunset1.mp3",
        sunset: true,
        next: "day5_afternoon_branch"
    },
    "day5_afternoon_branch": {
        name: "시스템",
        text: "",
        branches: [
            // 트루 엔딩: 일편단심 + 고백 수락
            { next: "day5_true_love_start", condition: "day4_confession_accepted", excludeCondition: "day3_has_multiple_dates" },
            // 굿 엔딩: 양다리였지만 고백 수락
            { next: "day5_good_start", condition: "day4_confession_accepted" },
            // 수라장 엔딩: 여러 명과 약속 + 고백 안 함
            { next: "day5_mayhem_start", condition: "day3_has_multiple_dates" },
            // 우정 엔딩: 고백 보류 상태
            { next: "day5_friend_start", condition: "day4_waited" },
            // 솔로 엔딩: 아무 데이트도 없음
            { next: "day5_alone_start" }
        ]
    },


    // █████████████████████████████████████████████████████████████████████████
    //  엔딩 1: 트루 엔딩 (True Love Ending)
    //  조건: 일편단심 + Day4 고백 성공 → 키스씬
    // █████████████████████████████████████████████████████████████████████████

    "day5_true_love_start": {
        name: "나",
        text: "(석양 아래, 연인과 나란히 서 있다. 이 순간이 영원히 멈췄으면 좋겠다.)",
        sunset: true,
        setFlag: "ending_true_love",
        next: "day5_true_talk_1"
    },
    "day5_true_talk_1": {
        name: "나",
        text: "\"있잖아… 전학 오기 전에는 새 학교가 두려웠어.\"",
        next: "day5_true_talk_2"
    },
    "day5_true_talk_2": {
        name: "나",
        text: "\"근데 지금은… 전학 온 게 내 인생에서 가장 잘한 일인 것 같아.\"",
        next: "day5_true_response"
    },
    "day5_true_response": {
        name: "시스템",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_true_seoyeon", character: "Seoyeon" },
            { next: "day5_true_yuna", character: "Yuna" },
            { next: "day5_true_dain", character: "Dain" },
            { next: "day5_true_nurse", character: "Nurse" },
            { next: "day5_true_teacher", character: "Teacher" }
        ]
    },

    // --- 트루 엔딩 대사 ---
    "day5_true_seoyeon": {
        name: "서연",
        text: "\"나도… 네가 전학 와줘서 정말 다행이야. 앞으로도 쭉… 같이 있자.\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        next: "day5_true_kiss_buildup"
    },
    "day5_true_yuna": {
        name: "유나",
        text: "\"…나는 혼자인 게 편하다고 생각했어. 근데 네가 와서… 달라졌어. 고마워.\"",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        next: "day5_true_kiss_buildup"
    },
    "day5_true_dain": {
        name: "다인",
        text: "\"네가 와서 매일매일이 더 즐거워졌어!! 앞으로도… 계속 응원해줄 거지?!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        next: "day5_true_kiss_buildup"
    },
    "day5_true_nurse": {
        name: "보건선생님",
        text: "\"우리 관계는 쉽지 않겠지만… 너라면 괜찮아. 함께라면 어떤 어려움도 넘을 수 있을 거야.\"",
        character: "assets/images/characters/nurse_shy.png",
        sunset: true,
        next: "day5_true_kiss_buildup"
    },
    "day5_true_teacher": {
        name: "담임선생님",
        text: "\"…솔직히 학생한테 이런 감정 가지면 안 되는 건데. 근데 어쩌겠어, 진짜인걸. …앞으로 잘해봐, 우리.\"",
        character: "assets/images/characters/teacher_shy.png",
        sunset: true,
        next: "day5_true_kiss_buildup"
    },

    // ─── 키스씬 (간접 연출) ───
    "day5_true_kiss_buildup": {
        name: "나",
        text: "(바람이 분다. 석양빛에 물든 그 사람의 얼굴이, 유독 가까이 느껴진다.)",
        sunset: true,
        next: "day5_true_kiss_2"
    },
    "day5_true_kiss_2": {
        name: "나",
        text: "(서로의 눈을 바라본다. 말은 필요 없었다.)",
        sunset: true,
        next: "day5_true_kiss_3"
    },
    "day5_true_kiss_3": {
        name: "나",
        text: "(자연스럽게… 얼굴이 가까워진다.)",
        sunset: true,
        next: "day5_true_kiss_4"
    },
    "day5_true_kiss_4": {
        name: "나",
        text: "(…눈을 감았다.)",
        sunset: true,
        fade: true,
        next: "day5_true_kiss_5"
    },
    "day5_true_kiss_5": {
        name: "나",
        text: "(부드러운 온기가 느껴졌다. 시간이 멈춘 것 같았다.)",
        fade: true,
        next: "day5_true_kiss_6"
    },
    "day5_true_kiss_6": {
        name: "나",
        text: "(……)",
        fade: true,
        next: "day5_true_kiss_after"
    },
    "day5_true_kiss_after": {
        name: "나",
        text: "(눈을 떴을 때, 석양빛 속에서 그 사람이 웃고 있었다. 세상에서 가장 아름다운 미소였다.)",
        sunset: true,
        next: "day5_true_evening_branch"
    },

    // ─── 간접 베드씬: 히로인별 분기 ───
    "day5_true_evening_branch": {
        name: "시스템",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_bed_seoyeon_1", character: "Seoyeon" },
            { next: "day5_bed_yuna_1", character: "Yuna" },
            { next: "day5_bed_dain_1", character: "Dain" },
            { next: "day5_bed_nurse_1", character: "Nurse" },
            { next: "day5_bed_teacher_1", character: "Teacher" }
        ]
    },

    // ─── 서연: 부모님 부재, 서연의 방 ───
    "day5_bed_seoyeon_1": {
        name: "나",
        text: "(해가 졌다. 집까지 바래다주려 했는데… 서연이 내 소매를 잡았다.)",
        night: true,
        next: "day5_bed_seoyeon_2"
    },
    "day5_bed_seoyeon_2": {
        name: "서연",
        text: "\"…저기, 우리 집 부모님 오늘 안 계시거든. 잠깐만… 들어올래?\"",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        next: "day5_bed_seoyeon_3"
    },
    "day5_bed_seoyeon_3": {
        name: "나",
        text: "(조용한 주택가. 서연이 현관문을 열었다. 넓은 거실을 지나 2층 서연의 방으로 올라갔다.)",
        night: true,
        fade: true,
        next: "day5_bed_seoyeon_4"
    },
    "day5_bed_seoyeon_4": {
        name: "나",
        text: "(깔끔하게 정돈된 방. 책장 가득 꽂힌 책들, 책상 위 학생회 서류. 은은한 간접 조명. 서연의 향기가 방 안 가득했다.)",
        background: "assets/images/background/seyoun_room.png",
        night: true,
        fade: true,
        next: "day5_bed_seoyeon_4b"
    },
    "day5_bed_seoyeon_4b": {
        name: "서연",
        text: "\"…부모님 방은 1층이라 괜찮아. 아, 아니 그게 아니라… 그냥, 이리 와서 앉아.\"",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        fade: true,
        next: "day5_bed_seoyeon_5"
    },
    "day5_bed_seoyeon_5": {
        name: "나",
        text: "(나란히 침대 가에 앉았다. 서연의 손이 떨리고 있었다.)",
        night: true,
        fade: true,
        next: "day5_bed_seoyeon_6"
    },
    "day5_bed_seoyeon_6": {
        name: "서연",
        text: "\"…항상 완벽해야 했어. 학생회장이니까. 근데 너한테는… 그냥 나이고 싶어.\"",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        fade: true,
        next: "day5_bed_seoyeon_7"
    },
    "day5_bed_seoyeon_7": {
        name: "나",
        text: "(서연이 내 어깨에 머리를 기댔다. 심장이 터질 것 같았다.)",
        night: true,
        fade: true,
        next: "day5_bed_common_1"
    },

    // ─── 유나: 도서관 별관 비밀 다락방 ───
    "day5_bed_yuna_1": {
        name: "나",
        text: "(해가 졌다. 돌아가려 했는데… 유나가 내 손을 잡았다.)",
        night: true,
        next: "day5_bed_yuna_2"
    },
    "day5_bed_yuna_2": {
        name: "유나",
        text: "\"…아직 안 돼. 보여줄 곳이 있어.\"",
        character: "assets/images/characters/yuna_shy.png",
        night: true,
        next: "day5_bed_yuna_3"
    },
    "day5_bed_yuna_3": {
        name: "나",
        text: "(유나가 이끈 곳은 도서관 별관 꼭대기, 아무도 모르는 다락방이었다.)",
        night: true,
        fade: true,
        next: "day5_bed_yuna_4"
    },
    "day5_bed_yuna_4": {
        name: "나",
        text: "(낡은 소파, 담요 한 장, 작은 창문으로 별이 보였다. 유나만의 비밀 공간.)",
        background: "assets/images/background/yuna_hideout.png",
        night: true,
        fade: true,
        next: "day5_bed_yuna_5"
    },
    "day5_bed_yuna_5": {
        name: "유나",
        text: "\"…여기는 나만 알아. 이제 너도 알게 됐지만.\"",
        character: "assets/images/characters/yuna_shy.png",
        night: true,
        fade: true,
        next: "day5_bed_yuna_6"
    },
    "day5_bed_yuna_6": {
        name: "나",
        text: "(유나가 담요를 펼쳤다. 좁은 소파에 나란히 앉으니 어깨가 닿았다.)",
        night: true,
        fade: true,
        next: "day5_bed_yuna_7"
    },
    "day5_bed_yuna_7": {
        name: "유나",
        text: "\"…가지 마. 오늘은… 여기 있어.\"",
        character: "assets/images/characters/yuna_shy.png",
        night: true,
        fade: true,
        next: "day5_bed_common_1"
    },

    // ─── 다인: 빈 체육관 매트 위 ───
    "day5_bed_dain_1": {
        name: "나",
        text: "(해가 졌다. 다인이 체육관 열쇠를 흔들며 웃었다.)",
        night: true,
        next: "day5_bed_dain_2"
    },
    "day5_bed_dain_2": {
        name: "다인",
        text: "\"야, 나 체육관 창고 열쇠 있거든! 별 보면서 얘기하자!\"",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        next: "day5_bed_dain_3"
    },
    "day5_bed_dain_3": {
        name: "나",
        text: "(아무도 없는 밤의 체육관. 다인이 매트를 깔고 천장의 채광창을 열었다.)",
        background: "assets/images/background/gym.png",
        night: true,
        fade: true,
        next: "day5_bed_dain_4"
    },
    "day5_bed_dain_4": {
        name: "나",
        text: "(매트 위에 나란히 누워 별을 올려다봤다. 다인의 숨소리가 가까이 들렸다.)",
        night: true,
        fade: true,
        next: "day5_bed_dain_5"
    },
    "day5_bed_dain_5": {
        name: "다인",
        text: "\"…야, 나 지금 심장이 엄청 뛰어. 손 여기 대봐.\"",
        character: "assets/images/characters/dain_shy.png",
        night: true,
        fade: true,
        next: "day5_bed_dain_6"
    },
    "day5_bed_dain_6": {
        name: "나",
        text: "(다인의 손이 내 손을 자기 가슴 위에 올려놓았다. 정말로… 빠르게 뛰고 있었다.)",
        night: true,
        fade: true,
        next: "day5_bed_dain_7"
    },
    "day5_bed_dain_7": {
        name: "다인",
        text: "\"…바보, 왜 그렇게 봐. 부끄럽잖아…\"",
        character: "assets/images/characters/dain_shy.png",
        night: true,
        fade: true,
        next: "day5_bed_common_1"
    },

    // ─── 보건선생님: 보건실, 문 잠금 ───
    "day5_bed_nurse_1": {
        name: "나",
        text: "(해가 졌다. 보건선생님이 의미심장하게 웃었다.)",
        night: true,
        next: "day5_bed_nurse_2"
    },
    "day5_bed_nurse_2": {
        name: "보건선생님",
        text: "\"…학교에 아직 아무도 없을 텐데. 잠깐 보건실에 들르지 않을래?\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day5_bed_nurse_3"
    },
    "day5_bed_nurse_3": {
        name: "나",
        text: "(철컥. 보건실 문이 잠기는 소리가 들렸다.)",
        night: true,
        fade: true,
        next: "day5_bed_nurse_4"
    },
    "day5_bed_nurse_4": {
        name: "나",
        text: "(커튼이 쳐진 침대 칸. 소독약 대신, 은은한 향수 냄새가 났다.)",
        background: "assets/images/background/nurse_room.jpg",
        night: true,
        fade: true,
        next: "day5_bed_nurse_5"
    },
    "day5_bed_nurse_5": {
        name: "보건선생님",
        text: "\"여기서는… '선생님'이 아니야. 그냥 한 사람의 여자.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        fade: true,
        next: "day5_bed_nurse_6"
    },
    "day5_bed_nurse_6": {
        name: "나",
        text: "(침대 가에 나란히 앉았다. 선생님의 손이 내 손 위에 올려졌다.)",
        night: true,
        fade: true,
        next: "day5_bed_nurse_7"
    },
    "day5_bed_nurse_7": {
        name: "보건선생님",
        text: "\"…오늘만은 학생도, 선생님도 아니야. 그냥… 우리.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        fade: true,
        next: "day5_bed_common_1"
    },

    // ─── 담임선생님: 선생님의 차 안 → 선생님 자취방 ───
    "day5_bed_teacher_1": {
        name: "나",
        text: "(해가 졌다. 선생님이 차 키를 꺼내 흔들었다.)",
        night: true,
        next: "day5_bed_teacher_2"
    },
    "day5_bed_teacher_2": {
        name: "담임선생님",
        text: "\"…태워다줄게. 늦었으니까.\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day5_bed_teacher_3"
    },
    "day5_bed_teacher_3": {
        name: "나",
        text: "(차가 멈춘 곳은… 내 집이 아니었다. 선생님의 오피스텔 앞이었다.)",
        night: true,
        fade: true,
        next: "day5_bed_teacher_4"
    },
    "day5_bed_teacher_4": {
        name: "담임선생님",
        text: "\"…커피 한 잔만. 마시고 보내줄게. 아마.\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        fade: true,
        next: "day5_bed_teacher_5"
    },
    "day5_bed_teacher_5": {
        name: "나",
        text: "(작지만 깔끔한 오피스텔. 채점 안 된 시험지가 쌓인 책상. 소파에 나란히 앉았다.)",
        background: "assets/images/background/teacher_room.png",
        night: true,
        fade: true,
        next: "day5_bed_teacher_6"
    },
    "day5_bed_teacher_6": {
        name: "담임선생님",
        text: "\"…하, 나 진짜 교사 자격 없다. 학생을 집에 데려오다니.\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        fade: true,
        next: "day5_bed_teacher_7"
    },
    "day5_bed_teacher_7": {
        name: "나",
        text: "(선생님이 머리끈을 풀며 힘없이 웃었다. 커피는… 결국 식었다.)",
        night: true,
        fade: true,
        next: "day5_bed_common_1"
    },

    // ─── 공통: 암전 → 아침 ───
    "day5_bed_common_1": {
        name: "나",
        text: "(서로의 체온이 느껴졌다. 말없이, 자연스럽게— 거리가 사라졌다.)",
        night: true,
        fade: true,
        next: "day5_bed_common_2"
    },
    "day5_bed_common_2": {
        name: "나",
        text: "(……)",
        night: true,
        fade: true,
        next: "day5_bed_common_3"
    },
    "day5_bed_common_3": {
        name: "나",
        text: "(………………)",
        night: true,
        fade: true,
        next: "day5_true_morning"
    },

    // ─── 다음날 아침 ───
    "day5_true_morning": {
        name: "나",
        text: "(눈을 떴다. 창문 사이로 아침 햇살이 들어오고 있었다.)",
        fade: true,
        next: "day5_true_morning_2"
    },
    "day5_true_morning_2": {
        name: "나",
        text: "(옆에서 조용히 잠든 얼굴이 보인다. 어젯밤이… 꿈이 아니었다.)",
        fade: true,
        next: "day5_true_morning_3"
    },
    "day5_true_morning_3": {
        name: "나",
        text: "(살며시 이불을 올려 덮어줬다. 이 사람의 잠든 모습을, 평생 보고 싶다고 생각했다.)",
        fade: true,
        next: "day5_true_final"
    },
    "day5_true_final": {
        name: "나",
        text: "(이 순간을, 이 감정을, 이 온기를— 영원히 잊지 않을 거야.)",
        fade: true,
        next: "day5_ending_true"
    },


    // █████████████████████████████████████████████████████████████████████████
    //  엔딩 2: 굿 엔딩 (Good Ending)
    //  조건: Day4 고백 성공 (양다리 경험) 또는 Day5 늦은 고백
    // █████████████████████████████████████████████████████████████████████████

    "day5_good_start": {
        name: "나",
        text: "(석양 아래, 연인과 나란히 서 있다. 여러 일이 있었지만… 결국 이 사람 곁에 있다.)",
        sunset: true,
        setFlag: "ending_good",
        next: "day5_good_talk_1"
    },
    "day5_good_talk_1": {
        name: "나",
        text: "\"…솔직히 말할게. 나 처음엔 마음이 흔들렸어. 좋은 사람들이 많아서.\"",
        next: "day5_good_talk_2"
    },
    "day5_good_talk_2": {
        name: "나",
        text: "\"근데 결국… 내 마음이 향하는 건 너뿐이었어.\"",
        next: "day5_good_response"
    },
    "day5_good_response": {
        name: "시스템",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_good_seoyeon", character: "Seoyeon" },
            { next: "day5_good_yuna", character: "Yuna" },
            { next: "day5_good_dain", character: "Dain" },
            { next: "day5_good_nurse", character: "Nurse" },
            { next: "day5_good_teacher", character: "Teacher" }
        ]
    },
    "day5_good_seoyeon": {
        name: "서연",
        text: "\"…알고 있었어. 네가 다른 애들한테도 잘해주는 거. 근데 괜찮아. 결국 내 곁에 있으니까.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        next: "day5_good_final"
    },
    "day5_good_yuna": {
        name: "유나",
        text: "\"…흔들렸다는 거 알아. 근데 결국 나한테 온 거잖아. …그것만으로 됐어.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day5_good_final"
    },
    "day5_good_dain": {
        name: "다인",
        text: "\"에이~ 나는 처음부터 알았어! 네가 결국 나한테 올 줄!! 히히!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        next: "day5_good_final"
    },
    "day5_good_nurse": {
        name: "보건선생님",
        text: "\"학생들한테 인기 많은 건 알고 있었어. 후후… 근데 지금 이 순간만큼은 나만 봐.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "day5_good_final"
    },
    "day5_good_teacher": {
        name: "담임선생님",
        text: "\"…바람둥이. 근데 나한테 온 거면 됐어. 앞으로는 나만 봐. 알겠지?\"",
        character: "assets/images/characters/teacher_normal.png",
        sunset: true,
        next: "day5_good_final"
    },
    "day5_good_final": {
        name: "나",
        text: "(나란히 석양을 바라보며 손을 잡았다. 완벽하진 않았지만… 이게 우리의 시작이다.)",
        sunset: true,
        fade: true,
        next: "day5_ending_good"
    },


    // █████████████████████████████████████████████████████████████████████████
    //  엔딩 3: 수라장 엔딩 (Mayhem Ending)
    //  조건: 여러 명과 약속 + 고백 안 함 → 수라장
    // █████████████████████████████████████████████████████████████████████████

    "day5_mayhem_start": {
        name: "나",
        text: "(옥상에 올라왔는데… 어라?)",
        sunset: true,
        setFlag: "ending_mayhem",
        next: "day5_mayhem_2"
    },
    "day5_mayhem_2": {
        name: "나",
        text: "(왜… 왜 다들 여기 있는 거야?!)",
        character: null,
        next: "day5_mayhem_3"
    },
    "day5_mayhem_3": {
        name: "서연",
        text: "\"어머, {name}(이)야! 나도 방금 옥상에 오려던 참이었어~\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day5_mayhem_4"
    },
    "day5_mayhem_4": {
        name: "유나",
        text: "\"…왜 또 서연이가 여기 있어.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day5_mayhem_5"
    },
    "day5_mayhem_5": {
        name: "다인",
        text: "\"야!! 나도 왔어!! 엇, 다들 왜 여기 있어?!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day5_mayhem_6"
    },
    "day5_mayhem_6": {
        name: "나",
        text: "(이건… 수라장이 될 것 같은 예감이…)",
        next: "day5_mayhem_7"
    },
    "day5_mayhem_7": {
        name: "서연",
        text: "\"그나저나 {name}(아/야), 이번 주말에 나랑 약속했던 거 기억하지?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day5_mayhem_8"
    },
    "day5_mayhem_8": {
        name: "유나",
        text: "\"…뭐? 나랑도 약속했는데.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day5_mayhem_9"
    },
    "day5_mayhem_9": {
        name: "다인",
        text: "\"엥?! 야! 나한테도 시간 된다고 했잠아!!\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day5_mayhem_10"
    },
    "day5_mayhem_10": {
        name: "나",
        text: "(세 사람의 시선이 동시에 나를 향한다. …끝났다.)",
        character: null,
        next: "day5_mayhem_11"
    },
    "day5_mayhem_11": {
        name: "서연",
        text: "\"…{name}. 설명 좀 해줄래?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day5_mayhem_12"
    },
    "day5_mayhem_12": {
        name: "나",
        text: "(뭐라고 해야 하지?!)",
        choices: [
            {
                text: "\"다, 다들 좋아하면 안 되나…?\"",
                next: "day5_mayhem_honest"
            },
            {
                text: "\"진심으로 말할게.\"",
                next: "day5_mayhem_confess"
            },
            {
                text: "\"(전력으로 도망친다)\"",
                next: "day5_mayhem_run"
            }
        ]
    },

    // --- 솔직 루트 ---
    "day5_mayhem_honest": {
        name: "나",
        text: "\"사, 사실… 다들 너무 좋은 사람들이라 고르지 못하겠어서…\"",
        next: "day5_mayhem_honest_2"
    },
    "day5_mayhem_honest_2": {
        name: "시스템",
        text: "(침묵이 흐른다.)",
        next: "day5_mayhem_honest_3"
    },
    "day5_mayhem_honest_3": {
        name: "서연",
        text: "\"……하.\"",
        next: "day5_mayhem_honest_4"
    },
    "day5_mayhem_honest_4": {
        name: "유나",
        text: "\"…최악이야.\"",
        next: "day5_mayhem_honest_5"
    },
    "day5_mayhem_honest_5": {
        name: "다인",
        text: "\"너 진짜… 진짜 나빠!!!\"",
        next: "day5_mayhem_final"
    },

    // --- 도주 루트 ---
    "day5_mayhem_run": {
        name: "나",
        text: "(뒤도 돌아보지 않고 옥상 문을 향해 달린다!!)",
        next: "day5_mayhem_run_2"
    },
    "day5_mayhem_run_2": {
        name: "서연",
        text: "\"잠깐, {name}!! 어딜 가는 거야?!\"",
        next: "day5_mayhem_run_3"
    },
    "day5_mayhem_run_3": {
        name: "유나",
        text: "\"…도망치면 더 나쁜 거 알지?\"",
        next: "day5_mayhem_run_4"
    },
    "day5_mayhem_run_4": {
        name: "다인",
        text: "\"야 기다려!! 나 달리기 1등이야!! 도망 못 가!!\"",
        next: "day5_mayhem_run_5"
    },
    "day5_mayhem_run_5": {
        name: "나",
        text: "(계단을 뛰어내려가는 나를 세 사람이 쫓아온다. 왜 다들 이렇게 빠른 거야?!)",
        next: "day5_mayhem_final"
    },

    // --- 진심 고백 루트 (하렘) ---
    "day5_mayhem_confess": {
        name: "나",
        text: "\"…장난이 아니야. 나는 진심으로, 여기 있는 모두를 좋아해.\"",
        sunset: true,
        next: "day5_mayhem_confess_2"
    },
    "day5_mayhem_confess_2": {
        name: "나",
        text: "\"못 고르겠는 게 아니라, 고르고 싶지 않아. 한 사람을 택하면 나머지를 잃잖아.\"",
        sunset: true,
        next: "day5_mayhem_confess_3"
    },
    "day5_mayhem_confess_3": {
        name: "시스템",
        text: "(긴 침묵이 흐른다.)",
        next: "day5_mayhem_confess_seoyeon"
    },
    "day5_mayhem_confess_seoyeon": {
        name: "서연",
        text: "\"…하. 너 진짜 대단하다. 보통 이런 말 하면 뺨 맞는 거 알지?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day5_mayhem_confess_yuna"
    },
    "day5_mayhem_confess_yuna": {
        name: "유나",
        text: "\"…최악이야. 근데… 솔직한 건 인정해.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day5_mayhem_confess_dain"
    },
    "day5_mayhem_confess_dain": {
        name: "다인",
        text: "\"야!! 그게 말이 돼?! …근데 왜 싫지가 않지?!\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day5_mayhem_confess_silence"
    },
    "day5_mayhem_confess_silence": {
        name: "나",
        text: "(세 사람이 서로 눈치를 본다. 기묘한 침묵이 흐른다.)",
        sunset: true,
        next: "day5_mayhem_confess_seoyeon_2"
    },
    "day5_mayhem_confess_seoyeon_2": {
        name: "서연",
        text: "\"…조건이 있어. 나한테 제일 잘해야 해.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day5_mayhem_confess_yuna_2"
    },
    "day5_mayhem_confess_yuna_2": {
        name: "유나",
        text: "\"…나한테 제일 잘해.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day5_mayhem_confess_dain_2"
    },
    "day5_mayhem_confess_dain_2": {
        name: "다인",
        text: "\"나한테!! 제일!! 잘해!!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day5_mayhem_confess_react"
    },
    "day5_mayhem_confess_react": {
        name: "나",
        text: "(…세 사람이 동시에 나를 노려본다. 눈빛이 무섭다.)",
        sunset: true,
        next: "day5_mayhem_confess_final"
    },
    "day5_mayhem_confess_final": {
        name: "나",
        text: "(…이건 어떻게 보면 지옥의 시작일지도 모른다. 하지만 이 순간만큼은— 세상에서 가장 행복한 남자다.)",
        sunset: true,
        fade: true,
        setFlag: "ending_harem",
        next: "day5_ending_harem"
    },

    // --- 수라장 엔딩 마무리 ---
    "day5_mayhem_final": {
        name: "나",
        text: "(석양이 진다. 평화로운 일요일 오후가… 이렇게 끝나는 건가.)",
        sunset: true,
        character: null,
        next: "day5_mayhem_final_2"
    },
    "day5_mayhem_final_2": {
        name: "나",
        text: "(…근데 나쁘지 않은 기분은 뭐지? 이런 소란스러운 일상도… 나름 행복한 것 같다.)",
        sunset: true,
        fade: true,
        next: "day5_ending_mayhem"
    },


    // █████████████████████████████████████████████████████████████████████████
    //  엔딩 4: 우정 엔딩 (Friend Ending)
    //  조건: Day4 고백 보류 + Day5에서도 고백 안 함
    // █████████████████████████████████████████████████████████████████████████

    "day5_friend_start": {
        name: "나",
        text: "(석양이 옥상을 물들인다. 옆에 있는 그 사람의 얼굴을 바라본다.)",
        sunset: true,
        next: "day5_friend_choice"
    },
    "day5_friend_choice": {
        name: "나",
        text: "(마음을 전할 마지막 기회다… 어떻게 할까?)",
        choices: [
            {
                text: "\"할 말이 있어…\" (고백한다)",
                next: "day5_friend_confess",
                setFlag: "day5_confessed"
            },
            {
                text: "\"…좋은 친구여서 다행이야.\" (친구로 남는다)",
                next: "day5_friend_stay"
            }
        ]
    },

    // --- 고백 → 굿 엔딩으로 합류 ---
    "day5_friend_confess": {
        name: "나",
        text: "\"사실… 너를 좋아해. 어제부터 계속 말하려고 했는데, 이제야 용기가 났어.\"",
        sunset: true,
        next: "day5_friend_confess_response"
    },
    "day5_friend_confess_response": {
        name: "시스템",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_late_accept_seoyeon", character: "Seoyeon" },
            { next: "day5_late_accept_yuna", character: "Yuna" },
            { next: "day5_late_accept_dain", character: "Dain" },
            { next: "day5_late_accept_nurse", character: "Nurse" },
            { next: "day5_late_accept_teacher", character: "Teacher" }
        ]
    },
    "day5_late_accept_seoyeon": {
        name: "서연",
        text: "\"…바보. 기다렸잖아, 계속. 나도… 좋아해.\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        stats: { Seoyeon: { affinity: 15 } },
        setFlag: "ending_good",
        next: "day5_good_final"
    },
    "day5_late_accept_yuna": {
        name: "유나",
        text: "\"……늦었어. 진짜 늦었다고. …근데 괜찮아. 나도 같은 마음이니까.\"",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        stats: { Yuna: { affinity: 15 } },
        setFlag: "ending_good",
        next: "day5_good_final"
    },
    "day5_late_accept_dain": {
        name: "다인",
        text: "\"…!! 드디어!! 나 어제부터 얼마나 기다렸는지 알아?! 나도 좋아해, 바보야!!\"",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        stats: { Dain: { affinity: 15 } },
        setFlag: "ending_good",
        next: "day5_good_final"
    },
    "day5_late_accept_nurse": {
        name: "보건선생님",
        text: "\"…드디어 말해주는 거야? 나도… 같은 마음이야. 오래전부터.\"",
        character: "assets/images/characters/nurse_shy.png",
        sunset: true,
        stats: { Nurse: { affinity: 15 } },
        setFlag: "ending_good",
        next: "day5_good_final"
    },
    "day5_late_accept_teacher": {
        name: "담임선생님",
        text: "\"…하, 진짜. 어제 말하지 그랬어. 나 어제 밤새 고민했거든. …나도 좋아해, 이 바보야.\"",
        character: "assets/images/characters/teacher_shy.png",
        sunset: true,
        stats: { Teacher: { affinity: 15 } },
        setFlag: "ending_good",
        next: "day5_good_final"
    },

    // --- 친구로 남는다 ---
    "day5_friend_stay": {
        name: "나",
        text: "\"…이 학교에 와서 너 같은 친구를 만난 게 정말 다행이야.\"",
        sunset: true,
        setFlag: "ending_friend",
        next: "day5_friend_response"
    },
    "day5_friend_response": {
        name: "시스템",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_friend_seoyeon", character: "Seoyeon" },
            { next: "day5_friend_yuna", character: "Yuna" },
            { next: "day5_friend_dain", character: "Dain" },
            { next: "day5_friend_nurse", character: "Nurse" },
            { next: "day5_friend_teacher", character: "Teacher" }
        ]
    },
    "day5_friend_seoyeon": {
        name: "서연",
        text: "\"…응, 나도! 앞으로도 좋은 친구로 지내자. …친구.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        next: "day5_friend_bitter"
    },
    "day5_friend_yuna": {
        name: "유나",
        text: "\"…그래. 친구. …고마워.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day5_friend_bitter"
    },
    "day5_friend_dain": {
        name: "다인",
        text: "\"…응! 너는 최고의 친구야! …최고의… 친구.\"",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        next: "day5_friend_bitter"
    },
    "day5_friend_nurse": {
        name: "보건선생님",
        text: "\"…그래. 좋은 학생이야, 너는. …좋은 학생.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "day5_friend_bitter"
    },
    "day5_friend_teacher": {
        name: "담임선생님",
        text: "\"…그래, 뭐. 교사와 학생이니까 당연한 건데. …당연한 거지.\"",
        character: "assets/images/characters/teacher_normal.png",
        sunset: true,
        next: "day5_friend_bitter"
    },
    "day5_friend_bitter": {
        name: "나",
        text: "(…왠지 그 사람의 미소가 조금 쓸쓸해 보였다. 내 마음 한쪽도 아렸다.)",
        sunset: true,
        character: null,
        next: "day5_friend_final"
    },
    "day5_friend_final": {
        name: "나",
        text: "(이게 맞는 선택이었을까? …모르겠다. 하지만 이것도 하나의 결말이니까.)",
        sunset: true,
        fade: true,
        next: "day5_ending_friend"
    },


    // █████████████████████████████████████████████████████████████████████████
    //  엔딩 5: 솔로 엔딩 (Alone Ending)
    //  조건: 아무와도 데이트/약속 없음
    // █████████████████████████████████████████████████████████████████████████

    "day5_alone_start": {
        name: "나",
        text: "(옥상에서 혼자 석양을 본다. 이 학교에서 보낸 시간이 스쳐 지나간다.)",
        sunset: true,
        setFlag: "ending_alone",
        next: "day5_alone_2"
    },
    "day5_alone_2": {
        name: "나",
        text: "(서연, 유나, 다인, 선생님들… 좋은 사람들이 많았다.)",
        next: "day5_alone_3"
    },
    "day5_alone_3": {
        name: "나",
        text: "(그중 누군가에게 마음을 전했어야 했을까? …아마도.)",
        next: "day5_alone_4"
    },
    "day5_alone_4": {
        name: "나",
        text: "(하지만 후회하진 않아. 이곳에서 보낸 시간 자체가 소중하니까.)",
        next: "day5_alone_5"
    },
    "day5_alone_5": {
        name: "나",
        text: "(혼자지만 외롭지 않다. 전학 오기 전의 나와는 확실히 달라졌어.)",
        next: "day5_alone_6"
    },
    "day5_alone_6": {
        name: "나",
        text: "(내일부터 다시 시작이다. 이번엔… 좀 더 용기를 내보자.)",
        sunset: true,
        fade: true,
        next: "day5_ending_alone"
    }
});
