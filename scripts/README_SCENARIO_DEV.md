# 📚 Cupid 시나리오 개발 가이드

## 🎯 목적

시나리오 파일이 점점 복잡해지면서 **노드 끊김**, **유령 노드**, **깨진 참조** 같은 문제를 한눈에 파악하기 어려워졌습니다. 이 가이드는 개발자가 더 쉽게 시나리오를 관리하고 검증할 수 있도록 돕습니다.

---

## 🛠️ 개발 도구

### 1. **quick_scenario_check.ps1** - 빠른 검증 도구

시나리오 파일의 노드 연결 상태를 즉시 체크합니다.

```powershell
# 한국어 파일 전체 체크
.\quick_scenario_check.ps1

# 영어 파일 체크
.\quick_scenario_check.ps1 -Pattern "en_*.js"

# 특정 파일만 체크
.\quick_scenario_check.ps1 -Pattern "ko_day1_*.js"
```

**출력 예시:**
```
[ko_day1_2_lunch.js]
  Total Nodes: 118
  Referenced Nodes: 171

  Ghost Nodes (unreferenced):
    - rooftop_comfortable

  Dead Ends (no next node):
    - lunch_seoyeon_high
    - rooftop_1_2
```

**문제 유형:**
- 🔴 **Dead Ends** - next가 없어서 진행이 멈추는 노드
- 🟣 **Ghost Nodes** - 어디서도 참조하지 않는 도달 불가 노드  
- 🔴 **Broken References** - 존재하지 않는 노드를 참조

---

## 📋 시나리오 파일 작성 규칙

### ✅ 권장 구조

```javascript
Object.assign(SCENARIO[1], {
    // 1. 시작 노드는 반드시 "start"
    "start": {
        name: "나",
        text: "시작 텍스트",
        background: "assets/images/background/school.png",
        bgm: "intro.mp3",
        next: "scene_2"  // ✅ 다음 노드 명시
    },
    
    // 2. 중간 노드는 반드시 next 또는 choices 있어야 함
    "scene_2": {
        name: "서연",
        text: "대화 내용",
        next: "scene_3"  // ✅
    },
    
    // 3. 분기 노드
    "scene_3": {
        name: "나",
        text: "선택지 전 대사",
        choices: [
            { text: "선택 1", next: "path_a" },  // ✅
            { text: "선택 2", next: "path_b" }   // ✅
        ]
    },
    
    // 4. 종료 노드 (다른 파일로 전환)
    "ending_scene": {
        name: "나",
        text: "마지막 대사",
        next: "lunch_time"  // ✅ 다음 씬으로 전환
    }
});
```

### ❌ 피해야 할 패턴

```javascript
// ❌ Dead End - next가 없음
"broken_scene": {
    name: "서연",
    text: "여기서 끝?"
    // next가 없음! 게임이 멈춤
},

// ❌ Ghost Node - 어디서도 참조 안함
"unused_scene": {  // 어떤 next도 이 노드를 가리키지 않음
    name: "유나",
    text: "플레이어가 절대 볼 수 없는 대사",
    next: "somewhere"
},

// ❌ Broken Reference - 존재하지 않는 노드 참조
"typo_scene": {
    name: "나",
    text: "다음은?",
    next: "scne_4"  // 오타! "scene_4"여야 함
}
```

---

## 🎨 노드 명명 규칙

가독성을 위한 일관된 명명 규칙:

```javascript
// ✅ 좋은 예시
"start"                      // 시작 노드
"intro_1", "intro_2"        // 순차 진행
"hallway_choice"            // 선택지
"hallway_talk_high"         // 조건 분기 (호감도 높음)
"hallway_talk_low"          // 조건 분기 (호감도 낮음)
"seoyeon_path_1"           // 캐릭터별 루트
"lunch_time"               // 씬 전환 노드

// ❌ 나쁜 예시
"a", "b", "c"              // 의미 파악 불가
"temp_node"                // 임시 노드는 나중에 제거 필요
"asdf"                     // 무의미한 이름
```

---

## 🔍 검증 워크플로우

### 작업 전
```powershell
# 현재 상태 체크
.\quick_scenario_check.ps1 > before.txt
```

### 작업 중
1. 노드 추가/수정
2. 저장 후 즉시 체크
```powershell
.\quick_scenario_check.ps1 -Pattern "ko_day1_2_lunch.js"
```

### 작업 후
```powershell
# 전체 체크
.\quick_scenario_check.ps1

# 문제가 없으면 커밋
git add .
git commit -m "feat: day1 lunch scenario completed"
```

---

## 🐛 일반적인 문제 해결

### 1. Dead End 발견 시

**문제:**
```javascript
"scene_end": {
    name: "나",
    text: "끝?"
    // next가 없음!
}
```

**해결:**
```javascript
"scene_end": {
    name: "나",
    text: "끝?",
    next: "lunch_time"  // ✅ 다음 씬으로 연결
}
```

### 2. Ghost Node 발견 시

**문제:**
```javascript
"hidden_scene": {  // 어디서도 참조 안함
    name: "서연",
    text: "숨겨진 대사",
    next: "somewhere"
}
```

**해결 방법 A - 연결:**
```javascript
"previous_scene": {
    name: "나",
    text: "이전 씬",
    next: "hidden_scene"  // ✅ 연결 추가
}
```

**해결 방법 B - 제거:**
```javascript
// 미사용 노드는 삭제
```

### 3. Broken Reference 발견 시

**문제:**
```javascript
"scene_a": {
    name: "나",
    text: "다음은?",
    next: "scne_b"  // ❌ 오타!
}
```

**해결:**
```javascript
"scene_a": {
    name: "나",
    text: "다음은?",
    next: "scene_b"  // ✅ 올바른 이름
}
```

---

## 📊 노드 통계

현재 Cupid 시나리오 현황 (2026-01-29 기준):

| 파일 | 노드 수 | Dead Ends | Ghost Nodes | Broken Refs |
|------|---------|-----------|-------------|-------------|
| ko_day1_1_morning.js | 97 | 29 | 0 | 0 |
| ko_day1_2_lunch.js | 118 | 38 | 1 | 0 |
| ko_day1_3_afterschool.js | 125 | 33 | 0 | 1 |
| ko_day1_4_night.js | 34 | 14 | 1 | 0 |
| ko_day2_1_morning.js | 50 | 9 | 0 | 0 |
| ko_day2_2_lunch.js | 146 | 43 | 0 | 0 |
| ko_day2_3_afterschool.js | 117 | 57 | 0 | 0 |
| ko_day2_4_night.js | 49 | 6 | 0 | 1 |
| ko_day3_1_morning.js | 30 | 5 | 0 | 1 |

**총계:** 766 노드, 234 Dead Ends, 2 Ghost Nodes, 3 Broken Refs

---

## 💡 개선 제안

### 현재 구조의 문제점

1. **파일이 너무 김** (1000줄 이상)
2. **노드 ID가 불규칙함**
3. **Dead End가 너무 많음** (대부분 의도적이지만 확인 필요)

### 개선 방향

#### Option 1: 파일 분할
```
ko_day1_2_lunch.js  (현재 933줄)
  ↓
ko_day1_2_lunch_seoyeon.js  (서연 루트)
ko_day1_2_lunch_yuna.js     (유나 루트)
ko_day1_2_lunch_dain.js     (다인 루트)
ko_day1_2_lunch_etc.js      (기타)
```

#### Option 2: 노드 그룹화
```javascript
// 캐릭터별로 prefix 사용
const SEOYEON_NODES = {
    "seoyeon_lunch_1": { ... },
    "seoyeon_lunch_2": { ... },
    // ...
};

const YUNA_NODES = {
    "yuna_lunch_1": { ... },
    "yuna_lunch_2": { ... },
    // ...
};

Object.assign(SCENARIO[1], SEOYEON_NODES, YUNA_NODES, ...);
```

#### Option 3: 구조화된 주석
```javascript
/**
 * ============================================================================
 * [SEOYEON ROUTE] Rooftop Lunch Date
 * ============================================================================
 * Entry Points: lunch_seoyeon_high, lunch_seoyeon_normal, lunch_seoyeon_low
 * Exit Points: after_school_start
 * Flags Set: ate_lunch_seoyeon, has_number_seyoun
 * Stats: Seoyeon +5~+15
 * ============================================================================
 */
Object.assign(SCENARIO[1], {
    "lunch_seoyeon_high": { ... },
    // ...
});
```

---

## 🚀 빠른 참조

### 자주 쓰는 명령어

```powershell
# 전체 체크
.\quick_scenario_check.ps1

# 특정 파일만
.\quick_scenario_check.ps1 -Pattern "ko_day1_2_lunch.js"

# 모든 노드 목록 생성 (all_nodes.txt에 저장됨)
.\quick_scenario_check.ps1
```

### 노드 타입별 예시

```javascript
// 일반 노드
"node_id": {
    name: "캐릭터명",
    text: "대사",
    character: "이미지경로",
    next: "다음_노드"
}

// 선택지 노드
"choice_node": {
    name: "나",
    text: "질문",
    choices: [
        { text: "답변1", next: "path1", stats: { Seoyeon: { affinity: 5 } } },
        { text: "답변2", next: "path2" }
    ]
}

// 호감도 분기 노드
"affinity_check": {
    name: "서연",
    text: "반응",
    affinityChar: "Seoyeon",
    affinityBranches: [
        { minAffinity: 40, next: "high_route" },
        { minAffinity: 0, next: "normal_route" },
        { minAffinity: -100, next: "low_route" }
    ],
    next: "normal_route"  // 기본값
}

// 조건 분기 노드
"condition_check": {
    name: "나",
    text: "생각중...",
    branches: [
        { next: "special_path", condition: "special_flag" },
        { next: "normal_path" }
    ]
}

// 입력 노드
"name_input": {
    type: "input",
    name: "시스템",
    text: "이름을 입력하세요",
    next: "after_input"
}

// 종료 노드 (다음 씬으로 전환)
"end_scene": {
    name: "나",
    text: "점심시간 끝!",
    next: "lunch_time"  // 다음 시간대로
}
```

---

## 📞 도움말

문제가 생기면:
1. `quick_scenario_check.ps1` 실행
2. 오류 메시지 확인
3. 이 가이드에서 해결 방법 찾기
4. 여전히 문제면 팀원에게 문의

---

**Happy Scenario Writing! 🎮✨**
