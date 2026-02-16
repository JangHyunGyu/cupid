/**
 * ============================================================================
 * CUPID - Day 5 Night Scenario (Korean Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: ko_day5_4_night.js
 * 언어: 한국어 (Korean)
 * 일차: Day 5 (5일차 - 일요일)
 * 시간대: Night (밤 - 엔딩 & 크레딧)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 이야기의 마지막. 엔딩 타입별 나레이션 후 화면이 어두워지며
 * 엔딩 크레딧이 올라간다.
 * 
 *  엔딩별 나레이션
 * ----------------------------------------------------------------------------
 * 1. 트루 엔딩  : 진정한 사랑을 찾은 이야기
 * 2. 굿 엔딩   : 우여곡절 끝에 이룬 사랑
 * 3. 수라장 엔딩 : 소란스럽지만 즐거운 일상
 * 4. 하렘 엔딩  : 모두와 사귀는 황홀한 날들
 * 5. 우정 엔딩  : 전하지 못한 마음, 쓸쓸한 우정
 * 6. 솔로 엔딩  : 혼자지만 성장한 나
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

    // █████████████████████████████████████████████████████████████████████████
    //  트루 엔딩 나레이션
    // █████████████████████████████████████████████████████████████████████████
    "day5_ending_true": {
        name: "나",
        text: "(그렇게, 나의 전학 이야기는 막을 내린다.)",
        background: null,
        character: null,
        night: true,
        bgm: null,
        fade: true,
        next: "day5_ending_true_2"
    },
    "day5_ending_true_2": {
        name: "나",
        text: "(새로운 학교에서 만난 단 한 사람.)",
        night: true,
        fade: true,
        bgm: "ending.mp3",
        next: "day5_ending_true_3"
    },
    "day5_ending_true_3": {
        name: "나",
        text: "(처음 만난 그 순간부터, 지금 이 순간까지— 한 번도 흔들린 적 없었다.)",
        night: true,
        fade: true,
        next: "day5_ending_true_4"
    },
    "day5_ending_true_4": {
        name: "나",
        text: "(기억나. 복도에서 처음 눈이 마주쳤던 그 순간. 시간이 멈춘 것 같았다.)",
        night: true,
        fade: true,
        next: "day5_ending_true_5"
    },
    "day5_ending_true_5": {
        name: "나",
        text: "(그때는 몰랐다. 그 짧은 눈빛 하나가, 내 인생의 방향을 바꿔놓을 줄은.)",
        night: true,
        fade: true,
        next: "day5_ending_true_6"
    },
    "day5_ending_true_6": {
        name: "나",
        text: "(사랑에 빠진 순간은 정확히 알 수 없다. 다만— 어느 날 문득, 그 사람 없는 내일이 상상되지 않았다.)",
        night: true,
        fade: true,
        next: "day5_ending_true_7"
    },
    "day5_ending_true_7": {
        name: "나",
        text: "(아직도 입술에 남아있는 온기처럼, 이 감정은 영원히 사라지지 않을 거다.)",
        night: true,
        fade: true,
        next: "day5_ending_true_8"
    },
    "day5_ending_true_8": {
        name: "나",
        text: "(누구는 이런 감정에도 유통기한이 있다고 말하겠지.)",
        night: true,
        fade: true,
        next: "day5_ending_true_9"
    },
    "day5_ending_true_9": {
        name: "나",
        text: "(하지만 나는 안다. 이건 식는 게 아니라, 스며드는 거라는 걸.)",
        night: true,
        fade: true,
        next: "day5_ending_true_10"
    },
    "day5_ending_true_10": {
        name: "나",
        text: "(내일도, 모레도, 일 년 뒤에도— 이 사람 곁에서 걸어가는 내가 보인다.)",
        night: true,
        fade: true,
        next: "day5_ending_true_11"
    },
    "day5_ending_true_11": {
        name: "나",
        text: "(약속하자. 어떤 계절이 와도, 우리의 이야기는 여기서 끝나지 않는다고.)",
        night: true,
        fade: true,
        next: "day5_ending_true_12"
    },
    "day5_ending_true_12": {
        name: "나",
        text: "(누군가를 온전히 사랑한다는 건— 세상의 모든 불확실함 속에서, 단 하나의 확신을 품는 일이다.)",
        night: true,
        fade: true,
        next: "day5_ending_true_13"
    },
    "day5_ending_true_13": {
        name: "시스템",
        text: "─── TRUE LOVE END ───",
        night: true,
        fade: true,
        next: "day5_credits"
    },

    // █████████████████████████████████████████████████████████████████████████
    //  굿 엔딩 나레이션
    // █████████████████████████████████████████████████████████████████████████
    "day5_ending_good": {
        name: "나",
        text: "(그렇게, 나의 전학 이야기는 막을 내린다.)",
        background: null,
        character: null,
        night: true,
        bgm: null,
        fade: true,
        next: "day5_ending_good_2"
    },
    "day5_ending_good_2": {
        name: "나",
        text: "(마음이 흔들리기도 했고, 실수도 했다.)",
        night: true,
        fade: true,
        bgm: "ending.mp3",
        next: "day5_ending_good_3"
    },
    "day5_ending_good_3": {
        name: "나",
        text: "(하지만 결국— 진짜 마음이 향하는 곳을 찾았다.)",
        night: true,
        fade: true,
        next: "day5_ending_good_4"
    },
    "day5_ending_good_4": {
        name: "나",
        text: "(돌이켜보면, 다른 사람의 마음에 무심했던 적도 있었다.)",
        night: true,
        fade: true,
        next: "day5_ending_good_5"
    },
    "day5_ending_good_5": {
        name: "나",
        text: "(누군가에게는 희망을 줬다가 거둬들인 셈이 되었을지도 모른다. 그게 미안하다.)",
        night: true,
        fade: true,
        next: "day5_ending_good_6"
    },
    "day5_ending_good_6": {
        name: "나",
        text: "(하지만 그 흔들림이 있었기에, 진짜 마음이 뭔지 알게 됐다.)",
        night: true,
        fade: true,
        next: "day5_ending_good_7"
    },
    "day5_ending_good_7": {
        name: "나",
        text: "(완벽하지 않아도 괜찮다. 이게 우리의 시작이니까.)",
        night: true,
        fade: true,
        next: "day5_ending_good_8"
    },
    "day5_ending_good_8": {
        name: "나",
        text: "(길을 잃었던 게 아니었다. 그냥 도착하는 데 시간이 좀 걸렸을 뿐.)",
        night: true,
        fade: true,
        next: "day5_ending_good_9"
    },
    "day5_ending_good_9": {
        name: "나",
        text: "(망설임이 없었다면, 지금 이 확신도 없었을 거다.)",
        night: true,
        fade: true,
        next: "day5_ending_good_10"
    },
    "day5_ending_good_10": {
        name: "나",
        text: "(불완전한 사랑도 사랑이다. 아니, 어쩌면 불완전하기에 더 소중한 건지도 모른다.)",
        night: true,
        fade: true,
        next: "day5_ending_good_11"
    },
    "day5_ending_good_11": {
        name: "나",
        text: "(앞으로도 실수하겠지. 부딪히겠지. 하지만 이 사람과 함께라면, 함께 넘어지고 함께 일어설 수 있다.)",
        night: true,
        fade: true,
        next: "day5_ending_good_12"
    },
    "day5_ending_good_12": {
        name: "나",
        text: "(그래서 괜찮다. 이 대답은, 오래 걸린 만큼 쉽게 변하지 않을 테니까.)",
        night: true,
        fade: true,
        next: "day5_ending_good_13"
    },
    "day5_ending_good_13": {
        name: "시스템",
        text: "─── GOOD END ───",
        night: true,
        fade: true,
        next: "day5_credits"
    },

    // █████████████████████████████████████████████████████████████████████████
    //  수라장 엔딩 나레이션
    // █████████████████████████████████████████████████████████████████████████
    "day5_ending_mayhem": {
        name: "나",
        text: "(그렇게, 나의 전학 이야기는… 끝난 건가?)",
        background: null,
        character: null,
        night: true,
        bgm: null,
        fade: true,
        next: "day5_ending_mayhem_2"
    },
    "day5_ending_mayhem_2": {
        name: "나",
        text: "(하나의 별만 바라보기엔, 밤하늘이 너무 아름다웠다.)",
        night: true,
        fade: true,
        bgm: "ending.mp3",
        next: "day5_ending_mayhem_3"
    },
    "day5_ending_mayhem_3": {
        name: "나",
        text: "(…라고 변명해봐야 쫓기는 건 변하지 않겠지.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_4"
    },
    "day5_ending_mayhem_4": {
        name: "나",
        text: "(어느 날은 교실 뒤에서 동시에 세 개의 도시락이 나왔다. 그날, 나는 진심으로 큰일이라고 생각했다.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_5"
    },
    "day5_ending_mayhem_5": {
        name: "나",
        text: "(\"저 사람이 네 여자친구야?\" \"아니, 내가!\" \"무슨 소리, 나인데?\" … 그날 복도는 전쟁터가 됐다.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_6"
    },
    "day5_ending_mayhem_6": {
        name: "나",
        text: "(나는 그 틈을 타 몰래 옥상으로 도망쳤다. 인생에서 그렇게 빨리 달려본 건 처음이었다.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_7"
    },
    "day5_ending_mayhem_7": {
        name: "나",
        text: "(…근데 옥상에도 한 명이 나를 기다리고 있었다. 역시, 도망칠 곳은 없었다.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_8"
    },
    "day5_ending_mayhem_8": {
        name: "나",
        text: "(어쩌면 욕심일지도 모른다. 모두를 소중히 여기고 싶다는 마음은.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_9"
    },
    "day5_ending_mayhem_9": {
        name: "나",
        text: "(하지만 바람은 한 방향으로만 부는 법이 없고, 별은 하나만 빛나지 않는다.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_10"
    },
    "day5_ending_mayhem_10": {
        name: "나",
        text: "(이런 소란스러운 매일이… 솔직히 나쁘지 않다. 내일은 또 어떤 수라장이 펼쳐질까.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_11"
    },
    "day5_ending_mayhem_11": {
        name: "나",
        text: "(다시 태어나도 같은 선택을 할 거냐고? …대답은 안 하겠다. 근데 이 웃음은 진짜다.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_12"
    },
    "day5_ending_mayhem_12": {
        name: "나",
        text: "(결론은 없다. 근데 뭐… 이 소란스러운 매일이 나의 이야기다.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_13"
    },
    "day5_ending_mayhem_13": {
        name: "시스템",
        text: "─── MAYHEM END ───",
        night: true,
        fade: true,
        next: "day5_credits"
    },

    // █████████████████████████████████████████████████████████████████████████
    //  하렘 엔딩 나레이션
    // █████████████████████████████████████████████████████████████████████████
    "day5_ending_harem": {
        name: "나",
        text: "(그렇게, 나의 전학 이야기는— 끝나지 않았다.)",
        background: null,
        character: null,
        night: true,
        bgm: null,
        fade: true,
        next: "day5_ending_harem_2"
    },
    "day5_ending_harem_2": {
        name: "나",
        text: "(세 명의 여자친구. 말도 안 되는 현실이 눈앞에 펼쳐졌다.)",
        night: true,
        fade: true,
        bgm: "ending.mp3",
        next: "day5_ending_harem_3"
    },
    "day5_ending_harem_3": {
        name: "나",
        text: "(매일이 전쟁이다. 누구한테 제일 잘하느냐를 두고 날마다 전투가 벌어진다.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_4"
    },
    "day5_ending_harem_4": {
        name: "나",
        text: "(월요일엔 같이 등교하는 순서, 화요일엔 도시락, 수요일엔 귀가길… 한 주의 스케줄은 외교 전쟁이다.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_5"
    },
    "day5_ending_harem_5": {
        name: "나",
        text: "(그중 한 명은 조용히 웃으며 날 지켜보고, 한 명은 당당하게 팔짱을 끼고, 한 명은 뒤에서 몰래 손을 잡는다.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_6"
    },
    "day5_ending_harem_6": {
        name: "나",
        text: "(각자의 매력이 너무 다르다. 그래서 비교할 수가 없고, 그래서 포기할 수도 없다.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_7"
    },
    "day5_ending_harem_7": {
        name: "나",
        text: "(하지만 이상하게도… 세 사람 다 웃고 있다. 나도 웃고 있다.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_8"
    },
    "day5_ending_harem_8": {
        name: "나",
        text: "(욕심이라 불러도 좋다. 이 마음에 거짓이 없다면.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_9"
    },
    "day5_ending_harem_9": {
        name: "나",
        text: "(후회는 없다. 반성은… 내일의 나한테 맡기자.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_10"
    },
    "day5_ending_harem_10": {
        name: "나",
        text: "(물론, 이 균형이 언제까지 유지될지는 아무도 모른다. 오늘도 미묘한 신경전이 있었고.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_11"
    },
    "day5_ending_harem_11": {
        name: "나",
        text: "(하지만 그 긴장감마저 즐기는 나는, 어쩌면 이미 돌이킬 수 없는 사람인지도.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_12"
    },
    "day5_ending_harem_12": {
        name: "나",
        text: "(내일도 바쁘겠지. 모레는 더 바쁘겠지. 하지만— 이 눈부신 날들을, 나는 사랑한다.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_13"
    },
    "day5_ending_harem_13": {
        name: "시스템",
        text: "─── HAREM END ───",
        night: true,
        fade: true,
        next: "day5_credits"
    },

    // █████████████████████████████████████████████████████████████████████████
    //  우정 엔딩 나레이션
    // █████████████████████████████████████████████████████████████████████████
    "day5_ending_friend": {
        name: "나",
        text: "(그렇게, 나의 전학 이야기는 막을 내린다.)",
        background: null,
        character: null,
        night: true,
        bgm: null,
        fade: true,
        next: "day5_ending_friend_2"
    },
    "day5_ending_friend_2": {
        name: "나",
        text: "(마음을 전하지 못했다. 아니, 전하지 않았다.)",
        night: true,
        fade: true,
        bgm: "ending.mp3",
        next: "day5_ending_friend_3"
    },
    "day5_ending_friend_3": {
        name: "나",
        text: "(\"친구\"라는 말 뒤에 숨긴 감정이, 가끔 밤에 떠오를지도 모른다.)",
        night: true,
        fade: true,
        next: "day5_ending_friend_4"
    },
    "day5_ending_friend_4": {
        name: "나",
        text: "(기억난다. 그날 옥상에서, 바람에 날린 머리카락을 넘기던 그 손끝.)",
        night: true,
        fade: true,
        next: "day5_ending_friend_5"
    },
    "day5_ending_friend_5": {
        name: "나",
        text: "(그때 \"좋아해\"라고 말했더라면, 지금 이 밤은 달랐을까.)",
        night: true,
        fade: true,
        next: "day5_ending_friend_6"
    },
    "day5_ending_friend_6": {
        name: "나",
        text: "(말하지 못한 감정은 사라지는 게 아니다. 마음 깊은 곳에서 조용히 빛나고 있을 뿐.)",
        night: true,
        fade: true,
        next: "day5_ending_friend_7"
    },
    "day5_ending_friend_7": {
        name: "나",
        text: "(때로는 가장 가까운 거리가, 가장 먼 거리이기도 하다. '친구'라는 이름의 거리.)",
        night: true,
        fade: true,
        next: "day5_ending_friend_8"
    },
    "day5_ending_friend_8": {
        name: "나",
        text: "(그래도 나쁘지만은 않다. 옆에서 웃는 모습을 볼 수 있으니까. 그것만으로도 하루가 버텨지니까.)",
        night: true,
        fade: true,
        next: "day5_ending_friend_9"
    },
    "day5_ending_friend_9": {
        name: "나",
        text: "(어쩌면 이건 비겁함이 아니라, 조용한 용기인지도 모른다. 사랑을 품은 채 곁에 머무르는 일.)",
        night: true,
        fade: true,
        next: "day5_ending_friend_10"
    },
    "day5_ending_friend_10": {
        name: "나",
        text: "(그래도… 후회하지 않아. 용기를 낼 수 있는 다음 기회가, 언젠가 올 테니까.)",
        night: true,
        fade: true,
        next: "day5_ending_friend_11"
    },
    "day5_ending_friend_11": {
        name: "나",
        text: "(언젠가— 이 마음을 말할 수 있는 날이 오면, 그때는 망설이지 않겠다.)",
        night: true,
        fade: true,
        next: "day5_ending_friend_12"
    },
    "day5_ending_friend_12": {
        name: "나",
        text: "(어떤 이야기는 끝맺지 않아서 더 오래 남는다. 이 계절이, 그렇게 기억될 거다.)",
        night: true,
        fade: true,
        next: "day5_ending_friend_13"
    },
    "day5_ending_friend_13": {
        name: "시스템",
        text: "─── FRIEND END ───",
        night: true,
        fade: true,
        next: "day5_credits"
    },

    // █████████████████████████████████████████████████████████████████████████
    //  솔로 엔딩 나레이션
    // █████████████████████████████████████████████████████████████████████████
    "day5_ending_alone": {
        name: "나",
        text: "(그렇게, 나의 전학 이야기는 막을 내린다.)",
        background: null,
        character: null,
        night: true,
        bgm: null,
        fade: true,
        next: "day5_ending_alone_2"
    },
    "day5_ending_alone_2": {
        name: "나",
        text: "(특별한 누군가는 생기지 않았다. 하지만 이 학교에서 보낸 시간은 소중했다.)",
        night: true,
        fade: true,
        bgm: "ending.mp3",
        next: "day5_ending_alone_3"
    },
    "day5_ending_alone_3": {
        name: "나",
        text: "(전학 오기 전, 아무것도 할 수 없었던 나와는 달라졌으니까.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_4"
    },
    "day5_ending_alone_4": {
        name: "나",
        text: "(이 학교에서 배운 건 연애가 아니었다. 나 자신과 마주하는 법이었다.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_5"
    },
    "day5_ending_alone_5": {
        name: "나",
        text: "(교실의 웃음소리, 쉬는 시간의 잡담, 체육 시간의 햇살— 그 모든 평범한 것들이 의미 있었다.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_6"
    },
    "day5_ending_alone_6": {
        name: "나",
        text: "(고독은 벌이 아니다. 자기 자신과 마주하는 시간이다.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_7"
    },
    "day5_ending_alone_7": {
        name: "나",
        text: "(누군가를 사랑하기 전에, 먼저 나 자신을 이해해야 한다는 걸 배웠다.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_8"
    },
    "day5_ending_alone_8": {
        name: "나",
        text: "(혼자라서 외로운 게 아니다. 혼자이기에 비로소 들리는 것들이 있다.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_9"
    },
    "day5_ending_alone_9": {
        name: "나",
        text: "(바람 소리, 발걸음 소리, 내 심장 소리. 그 고요한 리듬 속에서 나는 자라고 있었다.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_10"
    },
    "day5_ending_alone_10": {
        name: "나",
        text: "(다음엔… 좀 더 용기를 내자. 분명 다시 기회가 올 거야.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_11"
    },
    "day5_ending_alone_11": {
        name: "나",
        text: "(서두르지 않아도 된다. 나만의 속도로, 나만의 길을 걸으면 되니까.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_12"
    },
    "day5_ending_alone_12": {
        name: "나",
        text: "(혼자 걷는 밤길도 나쁘지 않다. 별이 유난히 밝은 건, 어둠 덕분이니까.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_13"
    },
    "day5_ending_alone_13": {
        name: "시스템",
        text: "─── ALONE END ───",
        night: true,
        fade: true,
        next: "day5_credits"
    },

    // █████████████████████████████████████████████████████████████████████████
    //  공통: 엔딩 크레딧
    // █████████████████████████████████████████████████████████████████████████
    "day5_credits": {
        name: "",
        text: "",
        background: null,
        character: null,
        night: true,
        fade: true,
        type: "credits",
        next: "day5_ending_restart"
    },

    // =========================================================================
    // 엔딩 크레딧 후 - 다시 시작
    // =========================================================================
    "day5_ending_restart": {
        name: "시스템",
        text: "",
        background: null,
        character: null,
        fade: true,
        choices: [
            { text: "처음부터 다시 시작하기", next: "index.html" }
        ]
    }
});
