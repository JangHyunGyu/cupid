# 갤러리 프리토킹 팁 (2026-10-05)

공개 섹션: 갤러리의 `💡 팁` 탭(모든 언어 `gallery*.html`)과 레이어 팝업.

- 데이터: `assets/js/gallery-tips-data.js` (ko, en, es, ja, fr, de, pt, zh 동일 구조)
- 렌더러/팝업: `assets/js/gallery-ui-tips.js`, 스타일: `assets/css/gallery.css` 끝부분
- 검증: `tests/gallery-tips.test.cjs`(데이터·수치·언어·마크업), `tests/e2e/gallery-tips.spec.cjs`(포커스 트랩, ESC, 배경 클릭, 스크롤 잠금, 390px 넘침 없음)
- 수치 근거: 턴당 +3(그룹은 캐릭터별 독립, `GROUP_FREE_TALK_PER_CHARACTER_TURN_GAIN_MAX = 3`), 그룹 건너뛰기 -20(`GROUP_FREE_TALK_SKIP_AFFINITY_PENALTY`), 장면 턴 3/5(`maxTurns`), 엔딩 후 점수 고정(AGENTS.md). 수치가 바뀌면 팁과 테스트를 함께 고친다.
- 스포일러: 하은 팁은 캐릭터를 만나기 전까지 `???` 잠금 행. 담임·보건 팁은 공개 SEO 가이드에 이미 소개된 범위의 성향만 다룬다. 내부 프롬프트 문장은 옮기지 않았다(테스트가 문장 복사를 막는다).

## 한국어 윤문 기록 (humanize-korean, light 경로)

- 원문: `01_input.txt`, 최종문: `final.md` (같은 run 디렉터리, 이 저장소 밖 `/workspace/cupid-tips-humanize/_workspace/2026-10-05-001-ff91`)
- 점검: `verify_gates.py` 변경률 4.2%(경고 30% 미만), 서법 소실 0, 연결어미 쉼표 z +3.63 → +0.61, 판정 OK(수렴)
- 외래어: 퍼펙트(PERFECT)처럼 한글(원어)로 적고 AI만 약어로 둔다. 일본어 UI는 일본어만 쓴다(AI 표기 제외).
