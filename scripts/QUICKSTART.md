# 🚀 Cupid 시나리오 도구 - 빠른 시작 가이드

## 📦 설치된 도구

### 1️⃣ **quick_scenario_check.ps1** - 시나리오 검증기
시나리오 파일의 문제점을 빠르게 찾아줍니다.

### 2️⃣ **scenario_visualizer.ps1** - 플로우 차트 생성기
시나리오의 흐름을 시각적으로 보여줍니다.

---

## 🎯 사용법

### 기본 검증 (가장 많이 사용)

```powershell
cd c:\workspace\cupid\scripts
.\quick_scenario_check.ps1
```

**결과:**
```
[day1_2_lunch.js]
  Total Nodes: 118
  Referenced Nodes: 171

  Ghost Nodes (unreferenced):
    - rooftop_comfortable

  Dead Ends (no next node):
    - lunch_seoyeon_high
    - rooftop_1_2
```

---

### 특정 파일만 검증

```powershell
# 하나의 파일만
.\quick_scenario_check.ps1 -Pattern "day1_2_lunch.js"

# 특정 패턴
.\quick_scenario_check.ps1 -Pattern "day1_*.js"
.\quick_scenario_check.ps1 -Pattern "day4_*.js"
```

---

### 플로우 차트 생성 🎨

```powershell
# 기본 모드 (모든 노드 표시)
.\scenario_visualizer.ps1 -FileName "day1_1_morning.js"

# 간소화 모드 (선택지와 중요 노드만)
.\scenario_visualizer.ps1 -FileName "day1_1_morning.js" -Simplified
```

**생성 파일:** `scenario_flow_day1_1_morning.js.md`

이 파일을:
- VS Code에서 Markdown Preview로 보기 (Ctrl+Shift+V)
- GitHub에 올려서 보기
- https://mermaid.live 에 붙여넣어서 보기

---

## 🛠️ 일반적인 작업 흐름

### 새 시나리오 작성 시

```powershell
# 1. 작업 전 현재 상태 확인
.\quick_scenario_check.ps1 > before_check.txt

# 2. 시나리오 작성...
# (파일 수정)

# 3. 작성 후 검증
.\quick_scenario_check.ps1 -Pattern "작성한_파일.js"

# 4. 문제 없으면 전체 검증
.\quick_scenario_check.ps1

# 5. 시각화 (선택)
.\scenario_visualizer.ps1 -FileName "작성한_파일.js" -Simplified
```

---

### 기존 시나리오 수정 시

```powershell
# 1. 문제점 파악
.\quick_scenario_check.ps1 -Pattern "수정할_파일.js"

# 2. 플로우 차트로 구조 확인
.\scenario_visualizer.ps1 -FileName "수정할_파일.js" -Simplified

# 3. 수정...

# 4. 재검증
.\quick_scenario_check.ps1 -Pattern "수정할_파일.js"
```

---

## 🐛 문제 해결

### "스크립트 실행 불가" 오류

```powershell
# 이렇게 실행:
powershell -ExecutionPolicy Bypass -File .\quick_scenario_check.ps1
```

### 생성된 차트가 안 보임

1. **VS Code 사용:**
   - Markdown 파일 열기
   - `Ctrl + Shift + V` (미리보기)
   - Mermaid 확장 설치: `Markdown Preview Mermaid Support`

2. **온라인 뷰어:**
   - https://mermaid.live 접속
   - 생성된 `.md` 파일에서 mermaid 코드 복사
   - 붙여넣기

---

## 📊 출력 파일

실행 후 생성되는 파일들:

```
cupid/
├── all_nodes.txt                           # 모든 노드 목록
├── scenario_flow_*.md                      # 플로우 차트
└── scripts/
    ├── quick_scenario_check.ps1            # 검증 도구
    ├── scenario_visualizer.ps1             # 시각화 도구
    ├── README_SCENARIO_DEV.md              # 상세 가이드
    └── QUICKSTART.md                       # 이 파일
```

---

## ⚡ 단축키 (추천)

PowerShell에 alias 추가:

```powershell
# PowerShell 프로필 열기
notepad $PROFILE

# 아래 내용 추가:
function Check-Scenario { 
    Set-Location c:\workspace\cupid\scripts
    .\quick_scenario_check.ps1 @args 
}
function Viz-Scenario { 
    Set-Location c:\workspace\cupid\scripts
    .\scenario_visualizer.ps1 @args 
}

Set-Alias -Name scheck -Value Check-Scenario
Set-Alias -Name sviz -Value Viz-Scenario

# 저장 후 PowerShell 재시작
```

이제 어디서든:
```powershell
scheck
sviz -FileName "day1_1_morning.js" -Simplified
```

---

## 💡 팁

1. **작업 전 항상 검증**
   ```powershell
   .\quick_scenario_check.ps1
   ```

2. **Dead End가 많으면**
   - 의도적인 종료 노드인지 확인
   - 아니면 `next` 속성 추가

3. **Ghost Node 발견 시**
   - 미사용 코드 → 삭제
   - 사용할 코드 → 어딘가에서 참조 추가

4. **Broken Reference는 즉시 수정**
   - 오타 확인
   - 노드 존재 확인

---

## 🎮 실전 예시

### 예시 1: Day 1 점심 시나리오 검증

```powershell
PS> .\quick_scenario_check.ps1 -Pattern "day1_2_lunch.js"

[day1_2_lunch.js]
  Total Nodes: 118
  
  Ghost Nodes:
    - rooftop_comfortable    # ← 이 노드가 문제!
  
  Dead Ends:
    - lunch_seoyeon_high    # ← next 속성 필요
```

**해결:**
1. `rooftop_comfortable` 노드를 찾아서 어디선가 참조하거나 삭제
2. `lunch_seoyeon_high` 노드에 `next: "rooftop_1"` 추가

---

### 예시 2: 플로우 차트로 구조 파악

```powershell
PS> .\scenario_visualizer.ps1 -FileName "day1_1_morning.js" -Simplified
```

생성된 차트에서:
- 🟢 녹색 = 시작점
- 🟡 노란색 = 선택지
- 🔵 파란색 = 호감도 분기
- 🔴 분홍색 = 종료/씬 전환

---

## 📚 더 자세한 정보

**상세 가이드:** `README_SCENARIO_DEV.md`
- 노드 작성 규칙
- 명명 규칙
- 문제 해결 방법
- 구조 개선 제안

---

## ❓ FAQ

**Q: Dead End가 100개 이상인데 괜찮나요?**  
A: 대부분 씬 전환 노드 (`lunch_time`, `after_school` 등)라면 정상입니다.

**Q: Ghost Node는 무조건 나쁜가요?**  
A: 네, 플레이어가 절대 볼 수 없는 코드입니다. 삭제하거나 연결하세요.

**Q: Broken Reference는?**  
A: 즉시 수정 필요! 게임이 깨질 수 있습니다.

**Q: 차트가 너무 복잡해요**  
A: `-Simplified` 옵션을 사용하세요. 주요 노드만 보여줍니다.

---

## 🎉 끝!

이제 시나리오를 더 쉽게 관리할 수 있습니다!

**문제가 있으면:**
1. 이 가이드 다시 읽기
2. `README_SCENARIO_DEV.md` 확인
3. 팀원에게 문의

**Happy Coding! 🚀**
