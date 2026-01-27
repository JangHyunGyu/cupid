/**
 * ============================================================================
 * CUPID - Day 3 Morning Scenario (English Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: en_day3_1_morning.js
 * 언어: 영문 (English)
 * 일차: Day 3 (3일차)
 * 시간대: Morning (아침)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 플레이어가 전학 온 지 3일째 되는 날 아침입니다.
 * 스마트폰에 각 캐릭터들로부터 주말 약속 메시지가 도착해 있습니다.
 * 플레이어의 선택에 따라 주말 데이트가 확정됩니다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 아침 기상 - 알람에 일어나 하루를 시작
 * 2. 메시지 확인 - 각 캐릭터별 주말 약속 초대 메시지
 * 3. 약속 수락/거절 - 호감도 +5 (수락) 또는 +2 (나중에)
 * 4. 등교 - 복합 약속 시 갈등 가능성 암시
 * 
 *  조건 플래그 설명
 * ----------------------------------------------------------------------------
 * has_any_contact     : 연락처가 있는 캐릭터가 1명 이상 있는지
 * has_number_seyoun   : 서연 연락처 보유 여부
 * has_number_yuna     : 유나 연락처 보유 여부
 * has_number_dain     : 다인 연락처 보유 여부
 * has_number_nurse    : 보건선생님 연락처 보유 여부
 * has_number_teacher  : 담임선생님 연락처 보유 여부
 * 
 *  설정 플래그 설명
 * ----------------------------------------------------------------------------
 * day3_*_weekend_invite   : 해당 캐릭터에게 주말 초대 메시지를 받음
 * day3_*_date_confirmed   : 해당 캐릭터와 주말 약속이 확정됨
 * day3_has_multiple_dates : 여러 캐릭터와 약속이 겹침 (갈등 트리거)
 * 
 *  호감도 변화
 * ----------------------------------------------------------------------------
 * 약속 수락 시: +5
 * 나중에 답장 시: +2
 * 답장 안함: 변화 없음
 * 
 * ============================================================================
 */

// SCENARIO 전역 객체 초기화
// 다른 시나리오 파일과 충돌하지 않도록 존재 여부 확인 후 생성
if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}

// Day 3 시나리오 그룹 초기화
// SCENARIO[3]은 3일차 모든 시나리오를 담는 객체
if (!SCENARIO[3]) {
    SCENARIO[3] = {};
}

// Day 3 아침 시나리오 데이터 추가
Object.assign(SCENARIO[3], {

    // =========================================================================
    //  아침 기상 시퀀스 (Wake Up Sequence)
    // =========================================================================
    // 플레이어가 알람 소리에 일어나는 장면
    // 전학 온 지 3일째, 점점 적응하고 있는 느낌

    "day3_start": {
        name: "Me",                              // 화자: 플레이어 (나)
        text: "(I wake up to the alarm. It's already my third day since transferring... I think I'm getting used to waking up in the morning.)",
        background: "assets/images/background/room_my.png",  // 배경: 내 방
        bgm: "intro.mp3",                        // 배경음악: 인트로
        character: null,                         // 캐릭터 이미지 없음 (독백)
        next: "day3_start_2"                     // 다음 씬으로 이동
    },

    "day3_start_2": {
        name: "Me",
        text: "(Looking outside, the weather is really nice today. It's already Friday... what should I do this weekend?)",
        next: "day3_start_3"
    },

    "day3_start_3": {
        name: "Me",
        text: "(I check my smartphone and there are several unread messages. I wonder who they're from?)",
        // branches: 조건에 따라 다른 경로로 분기
        // 첫 번째 조건이 참이면 해당 next로, 아니면 다음 조건 검사
        branches: [
            {
                next: "day3_morning_message_check",
                condition: "has_any_contact"     // 연락처가 있으면 메시지 확인
            },
            {
                next: "day3_school_gate"          // 없으면 바로 등교
            }
        ]
    },

    // =========================================================================
    //  메시지 확인 선택지 (Message Selection)
    // =========================================================================
    // 플레이어가 어떤 캐릭터의 메시지를 먼저 확인할지 선택
    // condition: 해당 캐릭터 연락처가 있어야 선택지 표시

    "day3_morning_message_check": {
        name: "Me",
        text: "(Let me check the messages.)",
        // choices: 플레이어 선택지 (선택에 따라 다른 경로)
        choices: [
            {
                text: "Check Seoyeon's message",       // 선택지 텍스트
                next: "day3_morning_msg_seoyeon",     // 선택 시 이동할 씬
                condition: "has_number_seyoun"        // 서연 연락처 필요
            },
            {
                text: "Check Yuna's message",
                next: "day3_morning_msg_yuna",
                condition: "has_number_yuna"
            },
            {
                text: "Check Dain's message",
                next: "day3_morning_msg_dain",
                condition: "has_number_dain"
            },
            {
                text: "Check the nurse's message",
                next: "day3_morning_msg_nurse",
                condition: "has_number_nurse"
            },
            {
                text: "Check the teacher's message",
                next: "day3_morning_msg_teacher",
                condition: "has_number_teacher"
            },
            {
                text: "Check later and head to school",
                next: "day3_school_gate"              // 조건 없음 (항상 표시)
            }
        ]
    },

    // =========================================================================
    //  서연 메시지 시퀀스 (Seoyeon's Message)
    // =========================================================================
    // 서연: 밝고 활발한 성격, 카페 데이트 제안
    // 메시지 시간: 새벽 6시 (아침형 인간)

    "day3_morning_msg_seoyeon": {
        name: "Seoyeon",
        text: "(Message from 6 AM) 'Good morning! {name}, fighting today! Oh, and... do you have time this weekend? Want to go to a café together? ☕'",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,                        // 실루엣으로 표시 (미해금 시)
        setFlag: "day3_seoyeon_weekend_invite",  // 플래그 설정: 서연 초대 받음
        next: "day3_morning_msg_seoyeon_choice"
    },

    "day3_morning_msg_seoyeon_choice": {
        name: "Me",
        text: "(A weekend date... how should I reply?)",
        choices: [
            {
                text: "Sure! When and where?",
                next: "day3_morning_msg_seoyeon_yes",
                stats: { Seoyeon: { affinity: 5 } }  // 호감도 +5
            },
            {
                text: "Let me think about it. I'll tell you at school!",
                next: "day3_morning_msg_seoyeon_later",
                stats: { Seoyeon: { affinity: 2 } }  // 호감도 +2
            },
            {
                text: "Don't reply and head to school",
                next: "day3_school_gate"             // 호감도 변화 없음
            }
        ]
    },

    "day3_morning_msg_seoyeon_yes": {
        name: "Seoyeon",
        text: "(Instant reply) 'Really?! Yay~ How about the café in front of school at 2 PM on Saturday? I'm so excited! '",
        character: "assets/images/characters/seyoun_laugh.png",  // 웃는 표정
        silhouette: true,
        setFlag: "day3_seoyeon_date_confirmed",  // 플래그: 약속 확정!
        next: "day3_school_gate"
    },

    "day3_morning_msg_seoyeon_later": {
        name: "Seoyeon",
        text: "'Okay! Let's talk at school. See you at lunch!'",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        next: "day3_school_gate"
    },

    // =========================================================================
    //  유나 메시지 시퀀스 (Yuna's Message)
    // =========================================================================
    // 유나: 미스터리한 성격, 비밀 장소 제안
    // 메시지 시간: 새벽 3시 (밤형 인간, 수면 장애 암시)

    "day3_morning_msg_yuna": {
        name: "Yuna",
        text: "(Message from 3 AM) '...{name}. There's a place I want to show only you this weekend. Meet me at the school back gate at noon. You have to come.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        setFlag: "day3_yuna_weekend_invite",
        next: "day3_morning_msg_yuna_choice"
    },

    "day3_morning_msg_yuna_choice": {
        name: "Me",
        text: "(A message at 3 AM... Does Yuna not sleep? How should I reply?)",
        choices: [
            {
                text: "Okay, I'll definitely be there.",
                next: "day3_morning_msg_yuna_yes",
                stats: { Yuna: { affinity: 5 } }
            },
            {
                text: "Let's talk about it at school.",
                next: "day3_morning_msg_yuna_later",
                stats: { Yuna: { affinity: 2 } }
            },
            {
                text: "Don't reply and head to school",
                next: "day3_school_gate"
            }
        ]
    },

    "day3_morning_msg_yuna_yes": {
        name: "Yuna",
        text: "(Reply after a while) '...Thank you. I'll be waiting.'",
        character: "assets/images/characters/yuna_smile.png",    // 희미한 미소
        silhouette: true,
        setFlag: "day3_yuna_date_confirmed",
        next: "day3_school_gate"
    },

    "day3_morning_msg_yuna_later": {
        name: "Yuna",
        text: "'...Okay. See you at school.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        next: "day3_school_gate"
    },

    // =========================================================================
    //  다인 메시지 시퀀스 (Dain's Message)
    // =========================================================================
    // 다인: 스포츠 소녀, 배구 연습 응원 요청
    // 메시지 시간: 아침 7시 (건강한 아침형)

    "day3_morning_msg_dain": {
        name: "Dain",
        text: "(Message from 7 AM) 'Hey! {name}! We have sports day practice today! Can you come to the gym at lunch? Also, we have volleyball practice at 9 AM on Saturday. Want to come cheer? 😆'",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        setFlag: "day3_dain_weekend_invite",
        next: "day3_morning_msg_dain_choice"
    },

    "day3_morning_msg_dain_choice": {
        name: "Me",
        text: "(9 AM on Saturday... That's early. How should I reply?)",
        choices: [
            {
                text: "Sure! I'll definitely be there. I'll cheer my best!",
                next: "day3_morning_msg_dain_yes",
                stats: { Dain: { affinity: 5 } }
            },
            {
                text: "Let me think about it. I'll tell you at school!",
                next: "day3_morning_msg_dain_later",
                stats: { Dain: { affinity: 2 } }
            },
            {
                text: "Don't reply and head to school",
                next: "day3_school_gate"
            }
        ]
    },

    "day3_morning_msg_dain_yes": {
        name: "Dain",
        text: "'Really?! Awesome! See you at the gym at 9 on Saturday! Let's grab lunch after practice! '",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        setFlag: "day3_dain_date_confirmed",
        next: "day3_school_gate"
    },

    "day3_morning_msg_dain_later": {
        name: "Dain",
        text: "'Okay! See you at school! Are you coming to the gym at lunch?'",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        next: "day3_school_gate"
    },

    // =========================================================================
    //  보건선생님 메시지 시퀀스 (Nurse's Message)
    // =========================================================================
    // 보건선생님: 성숙한 매력, 비밀 브런치 제안
    // 메시지 시간: 밤 11시 (금지된 관계 암시)

    "day3_morning_msg_nurse": {
        name: "Nurse",
        text: "(Message from 11 PM last night) 'Hehe, {name}. Do you have time this weekend? How about brunch with me? Let's eat something delicious and chat. Of course... it has to be a secret. 😉'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        setFlag: "day3_nurse_weekend_invite",
        next: "day3_morning_msg_nurse_choice"
    },

    "day3_morning_msg_nurse_choice": {
        name: "Me",
        text: "(Brunch alone with the teacher... My heart is racing. How should I reply?)",
        choices: [
            {
                text: "Yes! When and where shall we meet?",
                next: "day3_morning_msg_nurse_yes",
                stats: { Nurse: { affinity: 5 } }
            },
            {
                text: "I'll think about it and tell you at school.",
                next: "day3_morning_msg_nurse_later",
                stats: { Nurse: { affinity: 2 } }
            },
            {
                text: "Don't reply and head to school",
                next: "day3_school_gate"
            }
        ]
    },

    "day3_morning_msg_nurse_yes": {
        name: "Nurse",
        text: "'Oh my, really? Then come to the café by the river at 11 on Sunday? I'll send you the address. I'll be looking forward to it. '",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        setFlag: "day3_nurse_date_confirmed",
        next: "day3_school_gate"
    },

    "day3_morning_msg_nurse_later": {
        name: "Nurse",
        text: "'Alright. Come visit the nurse's office. I'll be waiting.'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        next: "day3_school_gate"
    },

    // =========================================================================
    //  담임선생님 메시지 시퀀스 (Teacher's Message)
    // =========================================================================
    // 담임선생님: 지적인 매력, 박물관 데이트 제안
    // 메시지 시간: 밤 10시 (사려 깊은 시간대)

    "day3_morning_msg_teacher": {
        name: "Teacher",
        text: "(Message from 10 PM last night) '{name}, do you have time this weekend? I got two tickets to a museum exhibition... Would you like to go together if you're interested?'",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        setFlag: "day3_teacher_weekend_invite",
        next: "day3_morning_msg_teacher_choice"
    },

    "day3_morning_msg_teacher_choice": {
        name: "Me",
        text: "(A museum with the teacher... It sounds like a unique experience. How should I reply?)",
        choices: [
            {
                text: "Yes! I'd love to go. When?",
                next: "day3_morning_msg_teacher_yes",
                stats: { Teacher: { affinity: 5 } }
            },
            {
                text: "I'll think about it and tell you at school.",
                next: "day3_morning_msg_teacher_later",
                stats: { Teacher: { affinity: 2 } }
            },
            {
                text: "Don't reply and head to school",
                next: "day3_school_gate"
            }
        ]
    },

    "day3_morning_msg_teacher_yes": {
        name: "Teacher",
        text: "'Really? Then let's meet in front of the museum at 3 PM on Saturday. I'm looking forward to it!'",
        character: "assets/images/characters/teacher_smile.png",
        silhouette: true,
        setFlag: "day3_teacher_date_confirmed",
        next: "day3_school_gate"
    },

    "day3_morning_msg_teacher_later": {
        name: "Teacher",
        text: "'Okay. Let's talk at school. Don't be late today!'",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        next: "day3_school_gate"
    },

    // =========================================================================
    //  등교 시퀀스 (Going to School)
    // =========================================================================
    // 메시지 확인 후 학교로 향하는 장면
    // 여러 약속이 잡혀 있으면 갈등 상황 발생

    "day3_school_gate": {
        name: "Me",
        text: "(I arrive at the school gate. It's already Friday... This week really flew by.)",
        background: "assets/images/background/school.png",  // 배경: 학교 정문
        bgm: "daily2.mp3",                                  // 배경음악: 일상
        next: "day3_school_gate_2"
    },

    "day3_school_gate_2": {
        name: "Me",
        text: "(Just as I'm about to enter through the gate, I hear a familiar voice.)",
        branches: [
            {
                next: "day3_morning_encounter_multi",
                condition: "day3_has_multiple_dates"  // 여러 명과 약속 시
            },
            {
                next: "day3_morning_encounter_single" // 한 명 또는 없음
            }
        ]
    },

    // =========================================================================
    //  복합 약속 갈등 시퀀스 (Multiple Dates Conflict)
    // =========================================================================
    // 여러 캐릭터와 주말 약속을 잡았을 때 발생하는 갈등
    // 추후 시나리오에서 선택 강요 또는 수라장 전개

    "day3_morning_encounter_multi": {
        name: "Me",
        text: "(Huh... It looks like several people are waiting for me over there...?)",
        next: "day3_morning_conflict_start"
    },

    "day3_morning_conflict_start": {
        name: "Me",
        text: "(Making weekend plans with multiple people... this could be a problem...)",
        next: "day3_1_morning_end"
    },

    "day3_morning_encounter_single": {
        name: "Me",
        text: "(It's a peaceful morning. I feel like today will be a good day.)",
        next: "day3_1_morning_end"
    },

    // =========================================================================
    //  시나리오 종료 (End of Scenario)
    // =========================================================================
    // Day 3 아침 시나리오 종료
    // 개발 중인 콘텐츠이므로 메인 화면으로 돌아감

    "day3_1_morning_end": {
        name: "System",
        text: "(Day 3 morning scenario ends here. Development continues...)",
        fade: true,                              // 페이드 아웃 효과
        next: "index-en.html"                    // 영문 메인 페이지로 이동
    }
});

// ============================================================================
// TODO: 개발 예정 사항
// ============================================================================
// - betrayed 플래그 기반 분기 추가 (배신 루트)
// - 각 캐릭터별 질투/갈등 이벤트
// - 주말 데이트 시나리오 (day3_2_saturday.js 예정)
// - 호감도에 따른 특별 대화 추가

