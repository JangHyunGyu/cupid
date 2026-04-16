# Cupid 프로젝트 규칙

## API 키 보안 (절대 위반 금지)
- **API 키, 시크릿, 토큰을 코드 파일에 절대 하드코딩하지 말 것** — 이전에 18개 파일에 키가 유출되어 차단당한 사고 발생
- 반드시 `.env` 파일에서 읽어올 것 (`fs.readFileSync('.env')` 또는 `dotenv` 사용)
- `.gitignore`에 `.env` 포함 여부 항상 확인
- 스크립트 생성 시 키 값을 변수에 직접 대입하는 코드 절대 금지

## 코드 작성 원칙 (최우선)
- **코드를 수정하거나 설명하기 전에 관련 코드를 끝까지 꼼꼼히 읽을 것** — 대충 훑고 추측으로 답하지 말 것
- **"아마 ~일 것이다", "~일 수 있습니다" 같은 추측 금지** — 코드를 직접 확인한 후 사실만 말할 것
- **문제를 보고하거나 원인을 분석할 때는 실제 실행 흐름을 끝까지 추적할 것** — 함수 호출 체인, 변수가 어디서 세팅되고 어디서 쓰이는지 전부 확인
- **유저가 지적하기 전에 스스로 문제를 발견할 것** — 지적받고 나서야 자세히 보는 것은 금지
- **확인된 사실만 말할 것** — 관련 코드를 끝까지 추적 완료한 후에만 답변. 추적 전에 추측성 답변 절대 금지
- **SCENARIO.md / 시나리오 JS / 대용량 파일 진단 시 grep만으로 결론 내리지 말 것** — "플래그가 부족하다", "~가 1종뿐이다", "복잡도가 충분하다/부족하다" 같은 진단을 내리려면 반드시 해당 파일을 처음부터 끝까지 Read로 통독한 뒤에 말할 것. 일부만 보고 전체를 단정하는 것은 거짓말과 같음
- **읽지 않은 부분에 대해서는 "안 읽었다"고 명시할 것** — "전체적으로 ~한 것 같다" 같은 추정형 진단 금지. 읽은 범위와 안 읽은 범위를 구분해서 보고할 것

## 코드 수정 후 필수 작업
- JS/HTML 코드를 수정한 후에는 반드시 `node validate.js`를 실행하여 검증할 것
- 에러가 0건이 될 때까지 수정을 반복할 것 — **기존 에러도 "기존 이슈"로 넘기지 말고 즉시 수정**
- index.html(KO) 인라인 JS를 수정하면 index-en/es/ja/fr/de.html에도 동일하게 반영할 것
- game.html(KO) 수정 시 game-en/es/ja/fr/de.html에도 동일하게 반영할 것
- gallery.html(KO) 수정 시 gallery-en/es/ja/fr/de.html에도 동일하게 반영할 것

## 강제 리로드 패턴 금지 (영구)

- `CURRENT_VERSION` 상수를 HTML에 박고 `fetch('version.json')` 결과와 비교해 `window.location.reload(true)`를 호출하는 패턴 **절대 재도입 금지**
- 두 번 재발한 사고: 2026-04-08 (8391e62 롤백), 2026-04-14 (bc7b165) — 4/15~4/16 GA4 engagement가 16분 → 13초로 폭락, 유저가 게임 시작도 못 하는 상태로 이틀간 라이브됨
- 2026-04-16 전면 제거 완료: `1bae5ab` (index-*.html 7개), `491d972` (game-*.html 7개 + version.json 삭제)
- 캐시 무효화는 기존 수단으로 충분: `?v=ASSET_VERSION` 쿼리스트링 / `<meta http-equiv="Cache-Control" content="no-cache">` / SW `updateViaCache: 'none'`
- 설계 결함: CURRENT_VERSION이 HTML에 박혀있어 reload해도 값이 안 바뀜 → 불일치 시 무한 루프 불가피

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

### SCENARIO.md → 코드 변환 핵심 원칙
- **SCENARIO.md의 조건부 텍스트("~라면", "~일 때", "~루트일 때" 등)를 절대 하나의 텍스트 블록에 그대로 넣지 말 것** — 반드시 시나리오 JS에서 `branches` 분기로 구현하고, 각 조건에 맞는 별도 씬 노드를 만들어 해당 캐릭터가 직접 말하도록 할 것
- SCENARIO.md는 "설계 문서"이지 "복붙용 텍스트"가 아니다 — 조건분기, 캐릭터 지정, 연출 지시를 코드 구조로 변환해야 한다
- 예시: `*서연이라면: "대사A" / 유나라면: "대사B"*` → `branches: [{ condition: "route_seoyeon", next: "node_seo" }, ...]` + 각 노드에 해당 캐릭터 name/character 지정

### 대사 스타일
- 유치/오글/올드/중2병/일본식 번역체 절대 금지
- 감정은 직접 서술하지 말고 행동/디테일로 보여줄 것
- 2020년대 트렌디한 한국 드라마 감성: 짧고 위트 있고 여백이 있는 스타일
- "심장이 미친 듯이 뛴다", "운명인 것 같아" 같은 진부한 표현 금지
- 일본식 번역체 금지 (ex: "~인 걸", "~란 말이야?!", "바, 바보!")
- 번역은 원어민 수준. 직역 금지, 각 언어의 자연스러운 표현으로
- **지문/행동 묘사는 반드시 `*이탤릭*` 형식** — `(괄호)` 형식 사용 금지
  - 올바른 예: `*피식 웃는다.* "어제 문자 봤어?"`
  - 잘못된 예: `(피식 웃으며) "어제 문자 봤어?"`

### 캐릭터/이미지 규칙
- 대화 시퀀스 중간 나레이션에는 대화 상대 캐릭터 유지 (깜빡임 방지). 진짜 혼자인 상황만 null
- 메신저/밤 문자 씬에서는 캐릭터 반투명: `"characters": { "center": { "src": "url", "opacity": 0.35 } }`
- night:true라고 무조건 투명하게 하지 말 것 — 밤에 직접 만나는 씬은 100% 불투명
- 존재하지 않는 이미지 경로 사용 금지 — 반드시 실제 파일 확인 후 사용
- PROMPTS_READY.md 참조: 담임=여성, 서연=안경+검은머리, 유나=타투+붉은눈, 보건=안경+청진기
- 프리토킹 톤 Day별 차별화 (밝음→그림자→진지→여운)
- 입버릇/반복 대사 빈도 관리 (캐치프레이즈화 방지)

### 동기화 체크리스트 (하나가 바뀌면 전부 동기화)
- **시나리오 JS 수정** → i18n 번역 JSON 6개 언어 → SCENARIO.md → 관련 이미지 확인
- **SCENARIO.md 수정** → 시나리오 JS → i18n 번역 JSON 6개 언어
- **캐릭터/배경 이미지 추가/변경** → PROMPTS_READY.md → SCENARIO.md → 시나리오 JS → gallery-data.js
- **index.html 인라인 JS 수정** → index-en/es/ja/fr/de.html 전부 동일 반영
- **game.html 수정** → game-en/es/ja/fr/de.html 전부 동일 반영
- **gallery.html 수정** → gallery-en/es/ja/fr/de.html 전부 동일 반영
- **CSS 수정** → 모든 HTML의 style.css?v= 버전 통일
- **JS 모듈 버전** → loaders/config.js, game-loader.js, gallery-loader.js, modules/config.js(ASSET_VERSION) 4곳 통일
- 일괄 스크립트 사용 시 ID 중복 매칭 주의 — 맥락 판단 필요한 작업은 직접 하나씩 검토

## 반응형 UI 필수 검증
- UI/CSS 수정 시 `npx serve -l 3001 -s .`로 로컬 서버를 띄워 실시간 확인 (배포 전 반드시 로컬에서 검증)
- 반드시 아래 5가지 뷰포트에서 레이아웃 깨짐·겹침·잘림 확인:
  - PC (1280px+)
  - 태블릿 가로 (1024px)
  - 태블릿 세로 (768px)
  - 모바일 세로 (375px)
  - 모바일 가로 (667px × 375px)
- fixed/absolute 요소는 모든 뷰포트에서 다른 요소와 겹치지 않는지 확인
- 기존 UI 요소와 중복되는 요소가 없는지 확인 (같은 기능의 버튼이 2개 이상 존재 금지)

## 번역테이블 (translation_review)
- `translation_review_day{1~5}.json` — 씬별 번역 상태 추적 파일 (번역테이블)
- 구조: `{ section: { nodeId: { _ko_text_preview, en: { _reviewed, _score, _issues }, ja: {...}, ... } } }`
- `_reviewed: false` = 미검토, `_issues` = 문제 사유
- 대사 수정 시 해당 씬의 `_ko_text_preview` 갱신 + 5개 언어 `_reviewed: false` 마킹
- 다국어 번역 일괄 적용: `fix_translation_deviations.js` 패턴으로 스크립트 작성 후 `node` 실행

## 시나리오 수정 작업 순서
1. **SCENARIO.md 먼저 수정** — 시나리오 문서에서 대사/구조 변경을 확정
2. **시나리오 JS 반영** — `assets/js/scenario/day*_*.js`에 씬 추가/라우팅 변경
3. **i18n 6개 언어 동기화** — `assets/js/i18n/{ko,en,ja,es,fr,de}/day*_*.json` 전부 반영 (번역 스크립트 사용 권장)
4. **translation_review 갱신** — `translation_review_day{1~5}.json`의 `_ko_text_preview` + `_reviewed` 업데이트
5. **`node validate.js` 실행** — 0 데드엔드, UNREACHABLE 확인
5. 씬 제거 시 고아 씬을 남기지 말고 완전 삭제 (UNREACHABLE 경고 방지)
6. 씬 삽입 시 기존 체인의 `next`를 새 씬으로 변경하고, 새 씬의 마지막 `next`가 원래 목적지를 가리키는지 확인

## 이미지 생성 규칙
- **배경 이미지**: Imagen 4 Ultra (1순위) → Imagen 4 (2순위), **1:1 비율 (1024x1024)**, `assets/images/background/`
- **이벤트 CG**: Imagen 4 Ultra → Imagen 4, **1:1 비율 (1024x1024)**, `assets/images/background/`
- **캐릭터 레퍼런스(_normal)**: Imagen 4 Ultra → Imagen 4, **1:1 비율 (1024x1024)**, `assets/images/characters/`
- **캐릭터 표정/행동 변형**: 레퍼런스 이미지 + Gemini 3.1 Flash Lite Image (편집), 동일 비율 유지
- 프롬프트에 "anime visual novel style" 사용, 텍스트/워터마크 금지 지시 필수
- API 키: `.env.txt` (workspace 루트)
- 캐릭터 외형 참조: `PROMPTS_READY.md`
- **기존 이미지 비율 절대 변경 금지** — 배경 1024x1024, 캐릭터 1024x1024, CG 1024x1024

## 기술 환경
- 웹 브라우저 기반 게임 — localStorage, URL, HTML/CSS/JS만 사용
- exe, 설치 폴더, 파일 시스템 접근 절대 불가
