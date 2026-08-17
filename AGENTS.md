# Cupid Repository Instructions

## Main-Only Git and Deployment (Permanent)
- 이 저장소에서는 브랜치를 새로 만들지 않는다.
- 모든 `git commit`, `git push`, 운영 배포는 반드시 `main` 브랜치에서만 수행한다.
- 현재 브랜치가 `main`이 아니면 커밋·푸시·배포를 중단하고 사용자에게 알린다. 기능 브랜치나 `agent/*` 브랜치에서 작업을 게시하지 않는다.
- 커밋 직전과 푸시 직전에 각각 `git branch --show-current`로 `main`인지 다시 확인한다.
- 운영 배포 직전에는 작업 트리가 깨끗하고 `HEAD`가 `origin/main`과 같은지 확인한다.
- 별도 브랜치나 Pull Request를 만들지 않고 `main`에 직접 커밋하고 푸시한다.


## Context Cache Verification (Permanent)
- Run `npm run cache:check` after every file modification in this repository, including unrelated UI, scenario, localization, media, and documentation changes.
- Keep common language/output rules, character canon, voice, medium, and other durable route guidance before the single `===CACHE_BOUNDARY===`. Keep player name, affinity, location, current scene context, game/social memory, repetition guards, incident state, and all other live turn data after it unless a value is deliberately session-stable and covered by the stable fingerprint.
- Main FreeTalk and Gallery FreeTalk must both fingerprint the exact stable prefix in `x-cache-key`. Stable changes must split cache lineage; dynamic changes must not.
- Any new character route, prompt builder, AI endpoint, retry/failover path, language, summary, or gallery mode must gain cache regression coverage in the same change.
- Preserve cached/miss token reporting from the shared Harem OpenRouter Worker. Cache-check failures block completion and must not be bypassed or weakened.

## Affinity Balance and Legacy Rebalance (Permanent)
- 모든 연애 캐릭터의 PERFECT 엔딩 기준은 호감도 100이다.
- 개인·그룹 프리토킹 양수 보상에는 회차 누적 상한을 두지 않는다. 본편 적용 상한은 캐릭터당 한 턴 +3, 현재 호감도 90 이상에서는 +2이며 실제 저장 호감도는 100에서 제한한다.
- 최적 선택지와 엔딩 판정 전 개인·그룹 프리토킹을 모두 합친 이론 최대는 서연·유나·다인·담임·보건 모두 정확히 120으로 유지한다. 엔딩 뒤 프리토킹까지 포함한 이론 최대는 모두 130이다.
- 최적 선택지 합계는 서연 77, 유나 77, 다인 78, 담임 75, 보건 75다. 시나리오 보상이나 프리토킹 기회를 바꾸면 위 120/130 불변 조건과 자동 회귀 테스트를 같은 변경에서 갱신한다.
- `affinityRebalanceVersion` 일회성 마이그레이션은 기존 100점 본편·갤러리 기록을 99로 낮추고, 해당 캐릭터의 퍼펙트 완료 표식·퍼펙트 CG·100점 캐릭터 해금을 다시 잠근다. 이미 마이그레이션된 저장에서 새로 달성한 100점은 다시 내리지 않는다.

## Image Asset Generation (Permanent)
- 새 배경, 이벤트 CG, 캐릭터 이미지 등 생성형 이미지 자산이 필요할 때는 반드시 Higgsfield MCP를 사용한다.
- Higgsfield MCP를 사용할 수 없거나 생성이 실패하면 다른 이미지 생성기로 임의 대체하지 말고 사용자에게 상황을 알린다.
- 프로젝트용 생성 이미지는 기존 캐릭터 외형과 화풍을 참조해 일관성을 확인하고, 최종 파일을 저장소 안에 저장한 뒤 실제 시나리오 또는 갤러리 연결까지 검증한다.

## Roleplay Prompt Naturalness and Intensity (Permanent)
- Apply this rule to every prompt addition, modification, consolidation, and deletion in Main FreeTalk, Gallery FreeTalk, and every future character route.
- Preserve each character's distinct voice, register, dialect, honorifics, forms of address, verbal habits, emotional rhythm, and initiative. Never improve formal prompt compliance by making characters rigid, uniform, editor-like, policy-like, or generically AI-assistant-like.
- Do not weaken the established descriptive intensity or concrete physical specificity of an already-underway adult sexual scene merely to make the prose cleaner. Natural Korean and the intended scene intensity must coexist.
- Prefer the smallest targeted instruction. Remove, shorten, or merge redundant and conflicting rules when they create stiffness, repetition, checklist writing, or flattened voices.
- Do not impose a universal phrase list, fixed response template, mandatory dialogue/narration order, or per-reply quota. Shared rules may establish conditional capabilities and boundaries; character canon and the live scene control actual wording, frequency, rhythm, and intensity.
- Treat a prompt change as incomplete if the result becomes less human, less character-specific, less spontaneous, or less intense than the established scene calls for.

## Scenario Continuity, Rivalry Accounting, and Localization (Permanent)
- 과거의 만남, 식사, 약속, 목격, 비밀 공유처럼 이전 선택이나 사건을 사실로 단정하는 대사는 그 사건을 증명하는 플래그 또는 도달 가능한 조건 분기 안에서만 출력한다. 해당 플래그가 없는 경로에는 모순되지 않는 대체 대사를 두고, 같은 변경에 회귀 테스트를 추가한다.
- 메인 히로인 사이의 경쟁 선택지는 한 사람의 상승이 다른 사람의 손실을 동반하는 트레이드오프를 기본으로 삼되, 변화량을 반드시 1:1로 맞추지는 않는다. 배신·약속 위반처럼 관계 손상이 큰 선택은 얻는 호감보다 잃는 호감이 더 커야 하며, 두 사람의 변화량 합이 양수가 되지 않게 한다. 경쟁 선택지임을 시나리오 데이터에 표시해 자동 테스트가 계속 검증하게 한다.
- 호감도 순위를 이용하는 라이벌 이벤트는 실행 시점의 실제 호감도로 선두와 2위를 계산한다. 동률 처리 순서는 시나리오 데이터에 명시된 순서로 결정해 재현 가능하게 유지하며, 선두가 아닌 루트 캐릭터를 선두라고 단정하는 대사를 출력하지 않는다.
- 시나리오의 구조, 대사, 선택지, 이름, 문맥, 성격 지시를 변경할 때는 지원하는 모든 언어(`ko`, `en`, `ja`, `es`, `fr`, `de`, `pt`)를 같은 변경에서 갱신한다. 한 언어라도 누락되면 시나리오 변경은 미완료로 취급한다.
