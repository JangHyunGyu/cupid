# Haeun 감정 단계 선택 장면 (2026-10-02)

하은이 서연과 주인공을 응원하다가 점점 흔들리는 이야기를 선택 장면 4개로 나눈다. 장면 순서는 감정선(응원 → 자각 → 외면과 동요 → 죄책감)을 따른다. 5일차 하은 선택 게이트(45)와 엔딩 기준(100)은 바꾸지 않는다.

| 단계 | 장면 | 위치 | 보상(호감도 Haeun) | 반응 노드 |
| --- | --- | --- | --- | --- |
| 1 응원 | `haeun_cheer_1` → `haeun_cheer_choice` | 3일차 `haeun_warn_6_b` 뒤, `haeun_warn_7` 앞 | +1, +1, -1, -1 | `haeun_cheer_up` / `_down` (`haeun_cheer_seen` 설정) |
| 2 자각 | `day4_haeun_notice_1` → `day4_haeun_notice_choice` | 4일차 `day4_haeun_personal_gate` 뒤, `day4_haeun_personal` 앞 | +1, +1, -1, -1 | `day4_haeun_notice_up` / `_down` |
| 3 외면·동요 | `day5_haeun_waver_1` → `day5_haeun_waver_choice` | 5일차 `day5_haeun_finish` 뒤, `day5_haeun_personal` 앞 | +1, +1, -1, -1 | `day5_haeun_waver_up` / `_down` |
| 4 죄책감 | `day5_haeun_guilt_1` → `day5_haeun_guilt_choice` | 5일차 방과후 `after5_start` 뒤, `day5_haeun_route_gate` 앞 | +1, +1, -1, -1 | `day5_haeun_guilt_up` / `_down` |

- 4개 모두 선택지 4개(플러스 2·마이너스 2), 크기는 모두 ±1로 짝을 이룬다(초기 구현은 +10이었으나 같은 날 사용자 요청으로 축소). 최선 합계는 +4(최악은 -4)이다. 이로써 하은 이론 예산에 +4가 더해진다. 같은 날 '호감도 90 이상 턴당 +2' 규칙이 삭제되어 129가 되었다가, 단계 선택 점수 축소로 하은 최종 예산은 33턴×3 + 선언 20 + 단계 선택 4 = 123이다(110→129→123, 문서·테스트 반영 완료).
- 2 단계 이후는 `haeun_cheer_seen` 플래그가 있어야 열린다. 1 단계는 서연 이벤트(`seoyeon_day3_event`)를 거친 사람만 만난다. 4 단계는 5일차 개인 대화를 마쳤고 호감도 8 이상일 때만 나온다.
- 기존 대사 수정: `day5_haeun_defends`(첫 동요), `day5_haeun_offer_<상대>`와 `day5_haeun_switch_<상대>_haeun`(제안·전환), `day5_haeun_fallback`(죄책감). `day5_ending_haeun_apology_<상대>` 5종이 엔딩 직전(호감도 100) 사과·결단 대사를 맡는다.
- 개인 대화 4곳(`day4_haeun_personal`, `day5_haeun_personal`, `day5_haeun_private_1`, `day5_haeun_private_2`)의 `context`·`personality`에 장면 상황과 단계 지시를 더했다.
- 자유대화 단계 지시는 `FreeTalkSystem._getHaeunStageGuidance`가 캐시 경계 뒤 동적 영역에만 붙인다. `haeun_freetalk`는 응원, 4일차는 자각(응원 플래그 필요), 5일차 개인 대화는 외면·동요, `private_1`·스위치 그룹은 죄책감, `private_2`는 결정 단계다.
- 호감도 기준은 하은이 말하는 모든 장면에 붙는다(2026-10-02 확대, 에셋 2.9.286 / SW cupid-v3.3.205). 대상은 `haeun_freetalk`, 4·5일차 개인 대화, `private_1`·`private_2`, `day4_haeun_concern_<상대>_group_talk`, `day5_haeun_<상대>_group_talk`, `day5_haeun_concern_<상대>_group_talk`, 스위치 그룹이다. 문구는 "높은 점수는 구체적이고 진심 어린 배려에만 준다. 진심이 담긴 말은 +2, 하은의 사정이나 망설임을 짚은 구체적인 배려와 공감은 +3까지 줄 수 있다. 빈말, 형식적인 칭찬, 평범한 예의는 0~+1이다"이며 8개 언어로 있다. 캐시 경계 뒤에만 놓이고, 감점 구간(-50 하한 포함)·게이트 45·엔딩 100·선택지 ±1·한 턴 +3 상한은 그대로다. 엔딩 후 대화(점수 잠금)와 다른 캐릭터에는 붙지 않는다. 테스트는 `tests/haeun-affinity-anchor.test.cjs`다.
- `FLAG_MEMORIES`에 `haeun_cheer_seen`, `day5_haeun_route_offered`, `haeun_switch_declared` 기억을 8개 언어로 더했다.
- 캐리오버 경로(`day4_counteroffer_penalty_deferred`): 5일차 아침 분기가 `morning5_co_haeun_check`(호감도 8 이상이면 `day5_haeun_gate`)를 거친 뒤 기존 `tour_co_branch`로 돌아간다.
- 테스트: `tests/haeun-stage-choices.test.cjs`(대칭·합계·순서·8개 언어·캐리오버 라우팅), `tests/choice-affinity-balance.test.cjs`(선택지 총수 385→401, 일별 선택 화면 수), `tests/haeun-romance.test.cjs`(단계 지시가 캐시 경계 뒤에만 있는지).
