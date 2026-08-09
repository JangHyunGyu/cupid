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

## Roleplay Prompt Naturalness and Intensity (Permanent)
- Apply this rule to every prompt addition, modification, consolidation, and deletion in Main FreeTalk, Gallery FreeTalk, and every future character route.
- Preserve each character's distinct voice, register, dialect, honorifics, forms of address, verbal habits, emotional rhythm, and initiative. Never improve formal prompt compliance by making characters rigid, uniform, editor-like, policy-like, or generically AI-assistant-like.
- Do not weaken the established descriptive intensity or concrete physical specificity of an already-underway adult sexual scene merely to make the prose cleaner. Natural Korean and the intended scene intensity must coexist.
- Prefer the smallest targeted instruction. Remove, shorten, or merge redundant and conflicting rules when they create stiffness, repetition, checklist writing, or flattened voices.
- Do not impose a universal phrase list, fixed response template, mandatory dialogue/narration order, or per-reply quota. Shared rules may establish conditional capabilities and boundaries; character canon and the live scene control actual wording, frequency, rhythm, and intensity.
- Treat a prompt change as incomplete if the result becomes less human, less character-specific, less spontaneous, or less intense than the established scene calls for.

## Scenario Continuity, Rivalry Accounting, and Localization (Permanent)
- 과거의 만남, 식사, 약속, 목격, 비밀 공유처럼 이전 선택이나 사건을 사실로 단정하는 대사는 그 사건을 증명하는 플래그 또는 도달 가능한 조건 분기 안에서만 출력한다. 해당 플래그가 없는 경로에는 모순되지 않는 대체 대사를 두고, 같은 변경에 회귀 테스트를 추가한다.
- 메인 히로인 사이의 경쟁 선택지는 영향을 받는 두 사람의 호감도 변화량 합이 정확히 0이 되게 설계한다. 한 사람에게 준 만큼 다른 사람에게서 차감하고, 경쟁 선택지임을 시나리오 데이터에 표시해 자동 테스트가 계속 검증하게 한다.
- 호감도 순위를 이용하는 라이벌 이벤트는 실행 시점의 실제 호감도로 선두와 2위를 계산한다. 동률 처리 순서는 시나리오 데이터에 명시된 순서로 결정해 재현 가능하게 유지하며, 선두가 아닌 루트 캐릭터를 선두라고 단정하는 대사를 출력하지 않는다.
- 시나리오의 구조, 대사, 선택지, 이름, 문맥, 성격 지시를 변경할 때는 지원하는 모든 언어(`ko`, `en`, `ja`, `es`, `fr`, `de`, `pt`)를 같은 변경에서 갱신한다. 한 언어라도 누락되면 시나리오 변경은 미완료로 취급한다.
