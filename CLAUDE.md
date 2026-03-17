# Cupid 프로젝트 규칙

## 코드 수정 후 필수 작업
- JS/HTML 코드를 수정한 후에는 반드시 `node validate.js`를 실행하여 검증할 것
- 에러가 0건이 될 때까지 수정을 반복할 것
- index.html(KO) 인라인 JS를 수정하면 index-en/es/ja/fr/de.html에도 동일하게 반영할 것
- game.html(KO) 수정 시 game-en/es/ja/fr/de.html에도 동일하게 반영할 것
- gallery.html(KO) 수정 시 gallery-en/es/ja/fr/de.html에도 동일하게 반영할 것

## 코드 패턴 규칙
- `localStorage.getItem(...) || 기본값` 사용 금지 → `!== null ? parseFloat(...) : 기본값` 또는 `??` 사용
- `soundManager.xxx()` 호출 시 반드시 `if (typeof soundManager !== 'undefined')` 또는 `if (window.soundManager)` 가드 사용
- DOM 접근 시 `.firstChild` 대신 `.querySelector('img')` 등 명시적 선택자 사용
- `||` 대신 `??` 사용 (0, false, "" 가 유효한 값일 수 있는 경우)

## i18n 캐릭터명 규칙
- "한글명(English)" 형식 사용 금지
- en/fr/de/es: 영문명 사용 (Seoyeon, Dain, Yuna 등)
- ja: 카타카나 사용 (ソヨン, ダイン, ユナ 등)
- ko: 한글명 사용 (서연, 다인, 유나 등)

## 시나리오 작성 규칙

### 대사 스타일
- 유치/오글/올드/중2병/일본식 번역체 절대 금지
- 감정은 직접 서술하지 말고 행동/디테일로 보여줄 것
- 2020년대 트렌디한 한국 드라마 감성: 짧고 위트 있고 여백이 있는 스타일
- "심장이 미친 듯이 뛴다", "운명인 것 같아" 같은 진부한 표현 금지
- 일본식 번역체 금지 (ex: "~인 걸", "~란 말이야?!", "바, 바보!")
- 번역은 원어민 수준. 직역 금지, 각 언어의 자연스러운 표현으로

### 캐릭터/이미지 규칙
- 대화 시퀀스 중간 나레이션에는 대화 상대 캐릭터 유지 (깜빡임 방지). 진짜 혼자인 상황만 null
- 메신저/밤 문자 씬에서는 캐릭터 반투명: `"characters": { "center": { "src": "url", "opacity": 0.35 } }`
- night:true라고 무조건 투명하게 하지 말 것 — 밤에 직접 만나는 씬은 100% 불투명
- 존재하지 않는 이미지 경로 사용 금지 — 반드시 실제 파일 확인 후 사용
- CHARACTER_IMAGE_PROMPTS.md 참조: 담임=여성, 서연=안경+검은머리, 유나=타투+붉은눈, 보건=안경+청진기
- 프리토킹 톤 Day별 차별화 (밝음→그림자→진지→여운)
- 입버릇/반복 대사 빈도 관리 (캐치프레이즈화 방지)

### 동기화 체크리스트
- 시나리오 JS 수정 → 번역 파일 6개 언어 확인 → SCENARIO.md 반영
- SCENARIO.md 수정 → 시나리오 JS + 번역 파일에 반영
- 캐릭터/배경 이미지 추가/변경 → CHARACTER_IMAGE_PROMPTS.md 업데이트
- 일괄 스크립트 사용 시 ID 중복 매칭 주의 — 맥락 판단 필요한 작업은 직접 하나씩 검토

## 기술 환경
- 웹 브라우저 기반 게임 — localStorage, URL, HTML/CSS/JS만 사용
- exe, 설치 폴더, 파일 시스템 접근 절대 불가
