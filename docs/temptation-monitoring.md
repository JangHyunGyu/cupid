# 유혹 진입 모니터링

2026-09-05 추가. 클라이언트 2.9.207부터 `chatbot-api`의 POST `/cupid-route-events`가
`archerlab_db.cupid_route_events`에 기록한다. 공유 Worker와 스키마는 Harem 저장소의
`assets/js/cupid-route-events.js`, `scripts/sql/cupid-route-events.sql`에 있다.

## 기록 의미

- `day4_entered`, `night_entered`, `morning_entered`: 해당 장면까지 실행된 회차.
- `gate_evaluated`: 실제 선택된 다음 장면, 판정 시점의 5명 호감도, 관련 플래그,
  각 조건의 참/거짓 및 선택 여부. `details_json.reason`이 선택된 조건이다.
  `day4_waited`는 고백 보류, `no_student_route`는 학생 루트 없음,
  `day3_caught_multiple_dates`와 `harem_seed`는 5일차 우선 결말 분기,
  `no_counteroffer_accepted`는 유혹 수락 플래그 없음,
  `affinity_guard`는 개별 장면의 호감도 가드, `rival_selected`는 유혹 상대 선정이다.
- `details_json.wouldFailFormerZeroGate`: 모든 라이벌이 음수여서 **제거 전 0점 조건이면
  막혔을 판정**. 현재는 음수여도 최고 호감도의 라이벌을 선택한다. 동률은 시나리오 순서.
- `offer_entered`: 유혹 선택지가 있는 장면 렌더링 완료. `offer_choice`는 실제 선택이며
  `details_json.accepted`로 수락 여부를 구별한다. 선택 로그 호감도는 선택 효과 적용 후다.
- `freetalk_entered`: 프리토킹 UI 초기화 완료. 특히
  `morning5_counteroffer_group_talk`이 5일차 대면 프리토킹이다.
  실제 메시지 전송·응답 성공은 별도의 `chat_logs`를 확인한다.
- `freetalk_exited`: 해당 프리토킹에서 다음 장면으로 이동. 건너뛰기도 포함한다.
- `scene_checkpoint`: 고백 보류/루트 없음/우선 결말 경로의 도달 확인.

`user_id`는 기존 대화 로그와 같은 기기 ID이고, `run_id`는 저장/이어하기에 보존되며
새 게임에서 바뀐다. 재방문·불러오기는 같은 회차로 집계한다. 재전송은 `event_id`로 중복 제거된다.
`client_time`은 기기 시각, `created_at`은 D1 수신 시각(UTC). 버전과 언어(app_id)를 함께 보관한다.
이름·대화 내용·IP는 이 테이블에 수집하지 않는다. 운영 검증 데이터는 `is_test=1`이다.

로그는 장면을 막지 않는 비동기 전송이다. 기기에 최근 미전송 500건을 보관하고,
실패 시 최대 60초 간격 및 다음 접속 때 재시도한다. 저장소 삭제·네트워크 차단 등으로
미수집될 수 있다. 이후 기록이 없다는 이유만으로 조건 차단이라고 결론내리지 않는다.
종료, 미완료, 수집 실패는 아래 집계의 `unresolved`에 남긴다.
배포 전 기록은 소급 복구되지 않는다. 배포 전 저장을 이어하면 앞쪽 단계가 없는 회차도 생긴다.

## 조회

Harem 저장소에서 실행한다. 조회 파일은 이 Cupid 저장소의 `scripts/sql/temptation-monitoring.sql`.

```powershell
$queryPath = 'C:/workspace/cupid/scripts/sql/temptation-monitoring.sql'
$query = (Get-Content -LiteralPath $queryPath -Encoding UTF8 | Where-Object { $_ -notmatch '^\s*--' }) -join ' '
npx.cmd --no-install wrangler d1 execute archerlab_db --remote --command $query --json
```

`--file`은 SQL 가져오기 요약만 반환할 수 있으므로, 집계 결과를 읽을 때는 위처럼
주석을 제거한 SQL을 `--command`로 전달한다.

최근 7일 기준. 관찰 기간을 바꿀 때 SQL의 `-7 days`를 바꾼다. 회차별 집계를 기본으로 하고,
기기 수를 사용자 수와 동일시하지 않는다. 프리토킹 기록이 있는 기기만 분모로 사용하지 않는다.
