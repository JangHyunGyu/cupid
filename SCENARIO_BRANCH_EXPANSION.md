# Cupid 시나리오 분기 확장 설계서

> 작성일: 2026-03-23
> 목적: 유저 피드백 기반 시나리오 분기 확장 설계 (코드 수정 없음, 설계만)

---

## 1. 현재 상태 분석

### 1.1 파일별 선택지(choices) / 호감도 분기 / 조건 분기 요약

| 파일 | choices 수 | affinityBranches | selectByHighestAffinity | branches (플래그) |
|------|-----------|-----------------|------------------------|------------------|
| day1_1_morning.js | 1 | 0 | 0 | 0 |
| day1_2_lunch.js | 3 | 0 | 0 | 0 |
| day1_3_afterschool.js | 2 | 0 | 0 | 5 |
| day1_4_night.js | 0 | 1 | 0 | 3 |
| day2_1_morning.js | 0 | 0 | 0 | 1 |
| day2_2_lunch.js | 4 | 0 | 0 | 4 |
| day2_3_afterschool.js | 4 | 0 | 0 | 1 |
| day2_4_night.js | 1 | 0 | 0 | 4 |
| day3_1_morning.js | 4 | 1 | 0 | 7 |
| day3_2_lunch.js | 2 | 0 | 0 | 4 |
| day3_3_afterschool.js | 5 | 0 | 0 | 6 |
| day3_4_night.js | 1 | 0 | 0 | 3 |
| day4_1_morning.js | 2 | 0 | 1 | 5 |
| day4_2_lunch.js | 3 | 3 | 0 | 0 |
| day4_3_afterschool.js | 3 | 0 | 0 | 3 |
| day4_4_night.js | 4 | 0 | 0 | 2 |
| day5_1_morning.js | 0 | 0 | 1 | 3 |
| day5_2_lunch.js | 0 | 0 | 0 | 2 |
| day5_3_afterschool.js | 1 | 0 | 0 | 5 |
| day5_4_night.js | 1 | 0 | 1 | 3 |
| **합계** | **41** | **5** | **3** | **61** |

### 1.2 현재 엔딩 분기 로직 (`day5_4_night.js` > `ending_start`)

```
ending_start → branches (순서대로 첫 매칭):
  1. homeroom_day5 + !day3_has_multiple_dates → hidden_true_homeroom (담임 TRUE END)
  2. homeroom_day5                           → hidden_good_homeroom (담임 GOOD END)
  3. nurse_day5 + !day3_has_multiple_dates   → hidden_true_nurse (보건 TRUE END)
  4. nurse_day5                              → hidden_good_nurse (보건 GOOD END)
  5. day4_confession_accepted + !day3_has_multiple_dates → day5_ending_true (TRUE END)
  6. day4_confession_accepted                → day5_ending_good (GOOD END)
  7. day5_confessed                          → day5_ending_good (GOOD END)
  8. ending_harem                            → day5_ending_harem (HAREM END)
  9. day3_has_multiple_dates                 → day5_ending_mayhem (MAYHEM END)
  10. day4_waited                            → day5_ending_friend (FRIEND END)
  11. (기본)                                 → day5_ending_alone (ALONE END)
```

**현재 엔딩 종류**: TRUE / GOOD / HAREM / MAYHEM / FRIEND / ALONE + 히든(담임/보건) TRUE/GOOD = **총 8종**

### 1.3 핵심 문제 진단

| 피드백 | 원인 |
|--------|------|
| "선택 영향도가 적다" | Day 1~2에서 선택은 호감도 수치만 바꾸고, 이후 대사/이벤트에 반영되지 않음 |
| "캐릭터 간 갈등이 적다" | 한 캐릭터를 선택해도 다른 캐릭터가 반응하는 장면이 거의 없음. Day 3 발각 이벤트가 유일 |
| "호감도 기반 갈등/선택지 부족" | affinityBranches가 전체 5개뿐. Day 1~2에 0개, Day 3에 1개 |
| "선택 분기 루트가 부족하다" | Day 1~2는 "누구와 시간 보낼지" 선택 후 일직선. 서브 분기 없음 |
| "엔딩이 선택지로만 결정" | ending_start는 플래그(condition) 기반. 호감도 수치 자체는 TRUE END의 `selectByHighestAffinity`에서만 사용 |
| "호감도 대사 분기 부족" | 호감도에 따라 대사가 달라지는 포인트가 Day 4 데이트 칭찬(3곳)과 Day 1 밤(1곳)뿐 |

---

## 2. 확장 설계

---

### A. 호감도 기반 대사 분기 추가

현재 호감도 기반 대사 분기는 4곳뿐이다. Day별 최소 2~3곳을 추가하여 "내가 쌓은 호감도가 대사에 반영된다"는 체감을 높인다.

#### A-1. Day 1 점심 - 선택한 캐릭터의 태도 변화

**위치**: `day1_2_lunch.js`
**삽입 지점**: 각 캐릭터 점심 시퀀스 초반 (lunch_seo_1, lunch_dain_1, lunch_yuna_1 직후)

| 노드 ID | 조건 | 대사 | 비고 |
|---------|------|------|------|
| `lunch_seo_1_aff_check` | affinityBranches, affinityChar: "Seoyeon" | minAffinity 8+: 서연이 자리를 옆으로 당기며 "여기 앉아. 아까 복도에서 한 말, 좀 웃겼거든." / 기본(0+): 서연이 고개만 까딱하며 "...앉을 거야?" | 아침 선택지에서 호감+5를 골랐으면 8 이상 |
| `lunch_dain_1_aff_check` | affinityBranches, affinityChar: "Dain" | minAffinity 5+: "오! 왔어 왔어! 아까 체육 시간에 본 거 맞지? 같이 먹자!" / 기본: "어, 전학생이지? 밥 먹었어?" | 다인은 기본적으로 친근하지만, 호감 있을 때 더 적극적 |
| `lunch_yuna_1_aff_check` | affinityBranches, affinityChar: "Yuna" | minAffinity 5+: 쪽지를 하나 건넨다. "...아까 네가 한 말. 기억나서." / 기본: "..." 쪽지도 없이 자리에 앉아 있다 | 유나는 호감이 있어야 쪽지를 건넴 |

**구현 패턴**:
```json
"lunch_seo_1_aff_check": {
    "background": "assets/images/background/top_school.png",
    "character": "assets/images/characters/seyoun_normal.png",
    "affinityBranches": [
        { "minAffinity": 8, "next": "lunch_seo_1_warm" },
        { "minAffinity": 0, "next": "lunch_seo_1_default" }
    ],
    "affinityChar": "Seoyeon"
}
```

#### A-2. Day 2 아침 - 등교 시 인사 분기

**위치**: `day2_1_morning.js`
**삽입 지점**: 아침 등교 시퀀스 초반 (현재 이 파일에는 choices가 0개로, 완전 일직선)

| 노드 ID | 조건 | 대사 |
|---------|------|------|
| `morning2_seo_greet_check` | Seoyeon 호감 15+ | 서연이 먼저 다가온다. "어제 옥상에서 한 말, 아직 유효한 거지?" / 기본: 서연이 멀리서 눈인사만 한다. 표정은 읽을 수 없다. |
| `morning2_dain_greet_check` | Dain 호감 15+ | 다인이 뒤에서 어깨를 탁 친다. "야! 어제 재밌었다, 오늘도 같이 뭐 하자!" / 기본: 다인이 반 친구들과 웃으며 지나간다. 나를 보고 가볍게 손을 흔든다. |
| `morning2_yuna_greet_check` | Yuna 호감 15+ | 책상 위에 접힌 쪽지가 놓여 있다. "...어제, 고마웠어." / 기본: 유나는 창가 자리에서 책을 읽고 있다. 내가 오는 걸 알고도 모른 척. |

**설계 원칙**: 이 분기는 "호감도가 가장 높은 캐릭터" 기준으로 하나만 출력한다. `affinityBranches`의 다중 캐릭터 분기(char별) 사용.

```json
"morning2_greet_branch": {
    "background": "assets/images/background/room_school.png",
    "character": null,
    "affinityBranches": [
        { "char": "Seoyeon", "minAffinity": 15, "next": "morning2_seo_greet_warm" },
        { "char": "Dain", "minAffinity": 15, "next": "morning2_dain_greet_warm" },
        { "char": "Yuna", "minAffinity": 15, "next": "morning2_yuna_greet_warm" }
    ],
    "next": "morning2_greet_default"
}
```

#### A-3. Day 2 밤 - 문자 답장 시 호감도 반영

**위치**: `day2_4_night.js`
**삽입 지점**: night2_reply_* 시퀀스 내부 (답장 후 상대 반응)

| 노드 ID | 조건 | 대사 |
|---------|------|------|
| `night2_reply_seo_react` | Seoyeon 30+ | 서연: "[답장이 길어진다] ...너, 생각보다 재밌는 사람이야. 내일 점심 옥상에서 볼래?" / 기본: 서연: "ㅋ 알겠어. 내일 봐." |
| `night2_reply_dain_react` | Dain 30+ | 다인: "야!!!!! 지금 웃겨서 이불킥 했어 진짜ㅋㅋㅋㅋ 내일 꼭 체육관 와!!" / 기본: 다인: "ㅋㅋ 알겠어~ 굿나잇!" |
| `night2_reply_yuna_react` | Yuna 30+ | 유나: "...이 시간에도 답장하는 사람이 있구나. [긴 침묵 후] 내일 도서관에 올래?" / 기본: 유나: "...응. 잘 자." |

#### A-4. Day 3 아침 - 교문 만남 강화 (기존 affinityBranch 확장)

**위치**: `day3_1_morning.js` > `morning3_gate_branch`
**현재 상태**: minAffinity 1로 사실상 무조건 분기됨. 호감도 차이가 대사에 반영 안 됨.

| 노드 ID | 조건 | 대사 |
|---------|------|------|
| `morning3_seo_gate_warm` | Seoyeon 35+ | 서연이 평소와 다르게 교문 앞에서 기다리고 있다. "...일찍 온 거 아니야. 학생회 일이 있어서." (손에 아무것도 없다) |
| `morning3_seo_gate_cold` | Seoyeon 15 미만 | 서연이 지나가다 잠깐 멈춘다. "...전학생. 아직 다니고 있었구나." 톤이 사무적이다. |
| `morning3_dain_gate_warm` | Dain 35+ | 다인이 달려오며 팔짱을 낀다. "야! 늦을 뻔했잖아! 같이 가자!" |
| `morning3_dain_gate_cold` | Dain 15 미만 | 다인이 다른 친구들과 뛰어간다. 나를 보고 "어, 안녕!" 한마디. 그게 끝이다. |
| `morning3_yuna_gate_warm` | Yuna 35+ | 교문 벽에 기대어 서 있던 유나가 쪽지를 건넨다. "...같이 가도 돼?" 쪽지에는 한 글자. "기다렸어." |
| `morning3_yuna_gate_cold` | Yuna 15 미만 | 유나가 먼저 지나간다. 눈이 마주쳤지만, 고개를 돌린다. |

**구현**: 기존 `morning3_seo_gate_1` 등의 앞에 호감도 체크 노드를 삽입.

```json
"morning3_seo_gate_1": {
    "affinityBranches": [
        { "minAffinity": 35, "next": "morning3_seo_gate_warm" },
        { "minAffinity": 15, "next": "morning3_seo_gate_normal" },
        { "minAffinity": 0, "next": "morning3_seo_gate_cold" }
    ],
    "affinityChar": "Seoyeon"
}
```

#### A-5. Day 4 데이트 - 벽 허물기 전 호감도 반영

**위치**: `day4_4_night.js`
**삽입 지점**: 각 캐릭터 벽 허물기 씬 진입 직전

| 노드 ID | 조건 | 대사 |
|---------|------|------|
| `wall_seo_pre_check` | Seoyeon 60+ | 서연이 먼저 입을 연다. "...나 오늘 좀 솔직해져도 돼?" (자발적 개방) / 기본: 서연이 침묵한다. 내가 먼저 말을 꺼내야 한다. |
| `wall_dain_pre_check` | Dain 60+ | 다인이 평소와 다르게 조용하다. "...오늘은 운동 얘기 말고, 다른 얘기 해도 돼?" / 기본: 다인이 억지로 웃는다. "하하, 오늘 재밌었지!" 느낌표가 어색하다. |
| `wall_yuna_pre_check` | Yuna 60+ | 유나가 쪽지 대신 직접 말한다. "...오늘은 쪽지 없이 말할게." 문장이 이미 길다. / 기본: 유나가 쪽지를 건넨다. 아직 말로 하기엔 이르다는 뜻. |

#### A-6. Day 5 아침 - 마지막 날 분위기

**위치**: `day5_1_morning.js`
**삽입 지점**: 등교 시퀀스 (현재 choices가 0개인 일직선 구간)

| 노드 ID | 조건 | 대사 |
|---------|------|------|
| `morning5_mood_check` | 루트 캐릭터 호감 80+ | "마지막 날이다. 이상하게 발걸음이 가볍다. 오늘은 — 말할 수 있을 것 같다." / 호감 50~79: "마지막 날. 아직 확신이 없다. 하지만 가야 한다." / 호감 50 미만: "마지막 날. 5일이 이렇게 빨리 지나갈 줄 몰랐다. ...뭘 한 건지 모르겠다." |

---

### B. 캐릭터 간 갈등/선택 영향도 강화

현재 구조에서는 "A를 선택했을 때 B/C가 반응하는" 장면이 Day 3 양다리 발각 외에는 없다. 아래 설계로 "선택의 무게"를 높인다.

#### B-1. Day 1 점심 선택의 여파 (Day 1 방과후 반영)

**위치**: `day1_3_afterschool.js`
**트리거**: `chose_seoyeon_lunch` / `chose_dain_lunch` / `chose_yuna_lunch` 플래그

| 시나리오 | 노드 ID | 대사 |
|---------|---------|------|
| 서연과 점심 먹음 → 방과후 다인이 반응 | `after1_dain_jealous_1` | 다인: "야, 점심때 어디 갔어? 매점 갔는데 없더라." / 주인공: "학생회장이랑 옥상에서 먹었는데." / 다인: "...옥상? 둘이서?" 목소리가 살짝 높아진다. |
| 서연과 점심 먹음 → 방과후 유나 반응 | `after1_yuna_notice_1` | 유나가 쪽지를 건넨다. "점심때 옥상에서 봤어. ...학생회장이랑 사이 좋아 보였어." 쪽지 끝에 점이 세 개. |
| 다인과 점심 먹음 → 방과후 서연 반응 | `after1_seo_comment_1` | 서연: "점심때 매점에서 다인이랑 같이 있는 거 봤는데. 적응 빠르네." 웃고 있지만 눈이 안 웃는다. |
| 유나와 점심 먹음 → 방과후 다인 반응 | `after1_dain_wonder_1` | 다인: "점심때 도서관 갔다며? 유나랑? ...그 애 원래 사람 안 만나는데." |

**구현 패턴**:
```json
"after1_pre_check": {
    "branches": [
        { "condition": "chose_seoyeon_lunch", "next": "after1_dain_jealous_1" },
        { "condition": "chose_dain_lunch", "next": "after1_seo_comment_1" },
        { "condition": "chose_yuna_lunch", "next": "after1_dain_wonder_1" },
        { "next": "after1_default" }
    ]
}
```

#### B-2. Day 2 점심/방과후 - 연속 선택 반영

**위치**: `day2_3_afterschool.js`
**트리거**: Day 1 점심 + Day 2 점심에서 같은 캐릭터를 연속 선택했는지

| 시나리오 | 노드 ID | 대사 |
|---------|---------|------|
| 서연 2연속 선택 | `after2_seo_consecutive` | 서연: "이틀 연속이네. 우연이야, 아니면 — 의도?" 미소가 달라졌다. 여유가 아니라 기대. |
| 다인 2연속 선택 | `after2_dain_consecutive` | 다인: "또 왔어! 이 정도면 우리 단짝 아냐?!" 어깨동무. 힘이 세다. |
| 유나 2연속 선택 | `after2_yuna_consecutive` | 유나가 평소보다 긴 쪽지를 건넨다. "어제도 왔잖아. ...습관이 되면 곤란한데." 하지만 자리를 비키지 않는다. |
| 다른 캐릭터로 변경 | `after2_switch_reaction` | 어제 선택한 캐릭터가 멀리서 이쪽을 본다. 시선이 마주치면 먼저 고개를 돌린다. |

**필요 플래그**: `day1_lunch_seoyeon`, `day1_lunch_dain`, `day1_lunch_yuna` + Day 2 점심 선택 플래그를 조합.

#### B-3. Day 2 밤 문자 - 선택하지 않은 캐릭터의 반응

**위치**: `day2_4_night.js`
**트리거**: night2_choice에서 특정 캐릭터에게 답장 → 다른 캐릭터의 "읽씹" 연출

| 시나리오 | 노드 ID | 대사 |
|---------|---------|------|
| 다인에게 답장 → 서연/유나 | `night2_unread_seo` | (다음날 아침) 서연의 메시지가 읽음 처리되어 있다. 답장은 없다. 읽기만 했다. |
| 서연에게 답장 → 다인 | `night2_unread_dain` | (다음날 아침) 다인: "어제 문자 봤어? 답장 없길래 잠든 줄 알았어 ㅋㅋ" 웃고 있지만. |
| 유나에게 답장 → 서연/다인 | `night2_unread_others` | (다음날 아침) 서연과 다인의 메시지에 답장하지 못했다. 핸드폰을 열 때마다 알림이 눈에 밟힌다. |

**삽입 위치**: Day 3 아침 시퀀스(`day3_1_morning.js`) 초반에 분기 삽입.

#### B-4. Day 3 점심 - 도시락 나눠주기의 파급

**위치**: `day3_2_lunch.js` > `lunch3_choice` 이후
**현재**: 도시락을 누구에게 줄지 선택(서연/다인/유나/나눠먹기). 이후 발각 이벤트는 있지만, 선택한 대상 외 캐릭터의 즉각 반응이 없음.

| 시나리오 | 노드 ID | 대사 |
|---------|---------|------|
| 서연에게 도시락 → 다인 목격 | `lunch3_dain_saw_seo` | 다인이 교실 문 앞에서 멈춰 선다. 서연이 도시락을 받는 모습을 본다. "...아." 돌아간다. |
| 다인에게 도시락 → 유나 목격 | `lunch3_yuna_saw_dain` | 유나가 복도를 지나가다 체육관 안을 본다. 다인이 웃고 있다. 유나는 발걸음을 빠르게 한다. |
| 유나에게 도시락 → 서연이 알게 됨 | `lunch3_seo_heard_yuna` | 서연: "도서관에서 도시락 냄새 났다더라. ...유나랑?" 표정이 무감정하다. 그게 더 무섭다. |
| 나눠먹기 선택 | `lunch3_share_reaction` | 셋이 한 자리에. 서연과 다인이 미묘하게 시선전. 유나만 조용히 먹는다. 공기가 무겁다. |

#### B-5. Day 3 방과후 - 루트 확정 직후 탈락 캐릭터 반응

**위치**: `day3_3_afterschool.js` > `after3_choice` 직후
**현재**: after3_choice에서 route_seoyeon/route_yuna/route_dain 플래그 세팅. 선택한 캐릭터와의 이벤트만 진행.

| 시나리오 | 노드 ID | 대사 |
|---------|---------|------|
| 서연 루트 확정 → 다인 | `after3_dain_rejected` | 복도에서 다인과 마주친다. 평소의 에너지가 없다. "...오늘 체육관 안 올 거지?" 마침표. 느낌표가 없다. |
| 서연 루트 확정 → 유나 | `after3_yuna_rejected` | 도서관 옆을 지나간다. 유나의 자리가 비어 있다. 쪽지가 하나 남아 있다. "...알겠어." |
| 다인 루트 확정 → 서연 | `after3_seo_rejected` | 서연이 클립보드를 정리하고 있다. "학생회 일이 바빠서. 점심은 따로 먹을게." 웃고 있다. 연습한 웃음. |
| 유나 루트 확정 → 다인 | `after3_dain_rejected_yuna` | 다인이 체육관에서 혼자 공을 치고 있다. 나를 보고 "아, 안녕!" 하지만 얼굴을 돌린다. 눈이 빨갛다. |

**삽입**: after3_seo_1 / after3_yuna_1 / after3_dain_1 진입 전에 "탈락 캐릭터 반응" 씬을 1~2개 삽입.

#### B-6. Day 4 밤 - 벽 허물기 도중 다른 캐릭터 언급

**위치**: `day4_4_night.js` > 각 wall 시퀀스 중간
**현재**: 벽 허물기 씬에서 대상 캐릭터와의 1:1 대화만 존재.

| 시나리오 | 노드 ID | 대사 |
|---------|---------|------|
| 서연 벽 허물기 중 | `wall_seo_mention_others` | 서연: "...다인이 요즘 힘들어 보여. 네가 원인인 거 알아?" / 주인공: "..." / 서연: "난 괜찮아. 내가 먼저 선택받았으니까. — 그래도 좀 걸리긴 해." |
| 다인 벽 허물기 중 | `wall_dain_mention_others` | 다인: "서연이가 나한테 뭐라 그랬는지 알아? ...아무 말도 안 했어. 그게 더 무서웠어." |
| 유나 벽 허물기 중 | `wall_yuna_mention_others` | 유나: "...다인이 울고 있었어. 보건실에서." 짧은 침묵. "네가 고른 게 나라서. ...미안해야 하는 건 나인데." |

---

### C. 엔딩에 호감도 반영

현재 엔딩은 **플래그 기반**이다. 호감도 수치 자체는 `selectByHighestAffinity`(누가 제일 높은지)에만 사용되고, **얼마나 높은지**는 반영되지 않는다.

#### C-1. 현재 엔딩 분기 문제점

```
현재:
  day4_confession_accepted + !day3_has_multiple_dates → TRUE END
  day4_confession_accepted (양다리) → GOOD END

문제: 호감도 95로 TRUE END 진입하든, 호감도 40으로 진입하든 동일한 엔딩.
```

#### C-2. 호감도 임계값 기반 엔딩 차별화 설계

**변경할 노드**: `ending_start`의 branches 로직 + `day5_ending_true` 진입부

```
[제안하는 새 엔딩 분기]

ending_start → branches:
  1~4. 히든 루트 (기존 유지)

  5. day4_confession_accepted + !day3_has_multiple_dates + 호감도 80+ → PERFECT END (신규)
  6. day4_confession_accepted + !day3_has_multiple_dates + 호감도 60~79 → TRUE END (기존)
  7. day4_confession_accepted + !day3_has_multiple_dates + 호감도 40~59 → GOOD END (기존 + 변형)
  8. day4_confession_accepted + !day3_has_multiple_dates + 호감도 40 미만 → BITTERSWEET END (신규)

  9. day4_confession_accepted + day3_has_multiple_dates → GOOD END (기존)
  10. day5_confessed + 호감도 50+ → GOOD END
  11. day5_confessed + 호감도 50 미만 → FRIEND END (고백했지만 호감도 부족)

  12. ending_harem → HAREM END (기존)
  13. day3_has_multiple_dates → MAYHEM END (기존)
  14. day4_waited → FRIEND END (기존)
  15. (기본) → ALONE END (기존)
```

#### C-3. 신규 엔딩 상세

##### PERFECT END (호감도 80+)

**노드 ID**: `day5_ending_perfect`
**진입 조건**: `day4_confession_accepted` + `!day3_has_multiple_dates` + 루트 캐릭터 호감도 80 이상
**구현**:
```json
"day5_ending_perfect_check": {
    "background": null,
    "character": null,
    "night": true,
    "affinityBranches": [
        { "minAffinity": 80, "next": "day5_ending_perfect" },
        { "minAffinity": 60, "next": "day5_ending_true" },
        { "minAffinity": 40, "next": "day5_ending_good" },
        { "minAffinity": 0, "next": "day5_ending_bittersweet" }
    ],
    "affinityChar": "#{route_character}"
}
```

| 캐릭터 | 장소 | 핵심 연출 |
|--------|------|----------|
| 서연 | 옥상 정원 | 서연이 직접 가꾼 화분 사이에서, 처음으로 안경을 벗고 운다. "연습 안 한 표정이야, 이거." |
| 유나 | 아지트 | 유나가 소설 한 편을 건넨다. 제목이 주인공 이름이다. "...다 읽고 나면 말해줘. 그게 내 대답이야." |
| 다인 | 체육관 | 다인이 마지막 서브를 날린다. 붕대를 풀면서. "이게 마지막 토스야. — 근데 시작이기도 해." 느낌표가 없다. 처음으로. |

**기존 TRUE END와의 차이**:
- TRUE END: 에필로그 공유 씬 (`true_epilogue_1~7`) 사용
- PERFECT END: 캐릭터별 고유 에필로그 추가 (졸업 후 / 1년 후 장면)

##### BITTERSWEET END (호감도 40 미만)

**노드 ID**: `day5_ending_bittersweet`
**진입 조건**: `day4_confession_accepted` + `!day3_has_multiple_dates` + 루트 캐릭터 호감도 40 미만
**컨셉**: 고백은 받아들여졌지만, 관계가 충분히 깊어지지 않았다. 졸업 후 자연스럽게 멀어지는 결말.

| 캐릭터 | 핵심 대사 |
|--------|----------|
| 서연 | "...우리 잘 될 줄 알았는데. 나도 너도, 뭔가 한 발짝씩 부족했던 것 같아." |
| 유나 | "...가끔 생각나. 도서관 냄새 맡으면. 그때 좀 더 말할 걸." |
| 다인 | "재밌었어, 진짜로! ...근데 재밌기만 했던 것 같아. 그게 좀 아쉬워." 느낌표가 돌아왔다. 하지만 마지막 문장에는 없다. |

##### Day 5 고백 + 호감도 부족 → FRIEND END 변형

**노드 ID**: `day5_ending_confess_fail`
**진입 조건**: `day5_confessed` + 루트 캐릭터 호감도 50 미만
**컨셉**: 마지막 날 고백했지만, 쌓인 관계가 부족해 "좋은 친구"로 끝남.

| 핵심 대사 (공통) |
|----------------|
| "...고마워. 진짜로. 근데 나는 아직 — 5일은 너무 짧았나 봐." |

#### C-4. 호감도 수치별 엔딩 도달 경로 시뮬레이션

최적 선택 시 호감도 적립 추정치 (한 캐릭터 집중):

| 구간 | 호감도 변동 | 누적 |
|------|-----------|------|
| Day 1 아침 선택 | +5 | 5 |
| Day 1 점심 선택 + 서브선택 | +5 | 10 |
| Day 1 밤 (affinityBranch) | +5 | 15 |
| Day 2 점심 선택 + 서브선택 | +8 | 23 |
| Day 2 방과후 선택 + 서브선택 | +8~13 | 31~36 |
| Day 2 밤 답장 | +5 | 36~41 |
| Day 3 아침 데이트 수락 | +5 | 41~46 |
| Day 3 점심 도시락 | +5~10 | 46~56 |
| Day 3 방과후 루트선택 + 서브선택 | +10 | 56~66 |
| Day 4 데이트 칭찬 | +5~10 | 61~76 |
| Day 4 밤 벽 허물기 | +10~20 | 71~96 |

- 최적 플레이: ~90~96 도달 가능 → PERFECT END
- 중간 플레이: ~60~75 → TRUE END
- 산만한 플레이: ~40~55 → GOOD END (호감도 반영)
- 최소 플레이: ~20~35 → BITTERSWEET END

이 범위는 현재 호감도 적립 구조와 양립하므로 기존 수치를 크게 변경할 필요 없다.

#### C-5. 엔딩 분기 구현을 위한 기술 요구사항

현재 `ending_start`의 branches는 **플래그 조건만** 지원한다. 호감도 임계값을 반영하려면:

**방법 1**: `ending_start` → 중간 노드 → affinityBranches
```
ending_start
  → condition: day4_confession_accepted + !day3_has_multiple_dates
  → next: "ending_affinity_check"

"ending_affinity_check": {
    "affinityBranches": [
        { "minAffinity": 80, "next": "day5_ending_perfect" },
        { "minAffinity": 60, "next": "day5_ending_true" },
        { "minAffinity": 40, "next": "day5_ending_good" },
        { "minAffinity": 0, "next": "day5_ending_bittersweet" }
    ],
    "affinityChar": "#{route_character}"
}
```

**방법 2**: SceneRenderer에 `minAffinity`/`maxAffinity` 조건을 branches에 추가 지원
```json
{
    "condition": "day4_confession_accepted",
    "excludeCondition": "day3_has_multiple_dates",
    "minAffinity": 80,
    "affinityChar": "#{route_character}",
    "next": "day5_ending_perfect"
}
```

**추천**: 방법 1. 기존 엔진 변경 없이 중간 노드 삽입만으로 구현 가능.

`#{route_character}` 치환은 현재 미지원이므로, 실제 구현 시에는 `selectByHighestAffinity: true`와 조합하여 루트 캐릭터를 자동 감지하거나, route_seoyeon/route_yuna/route_dain 플래그별로 3개 분기를 두는 방식이 현실적이다:

```json
"ending_affinity_check": {
    "branches": [
        { "condition": "route_seoyeon", "next": "ending_aff_check_seo" },
        { "condition": "route_yuna", "next": "ending_aff_check_yuna" },
        { "condition": "route_dain", "next": "ending_aff_check_dain" }
    ]
},
"ending_aff_check_seo": {
    "affinityBranches": [
        { "minAffinity": 80, "next": "perfect_seo_1" },
        { "minAffinity": 60, "next": "true_seo_1" },
        { "minAffinity": 40, "next": "good_1" },
        { "minAffinity": 0, "next": "bittersweet_seo_1" }
    ],
    "affinityChar": "Seoyeon"
}
```

---

## 3. 구현 우선순위

| 순위 | 항목 | 난이도 | 영향도 | 설명 |
|------|------|--------|--------|------|
| 1 | C-2. 엔딩 호감도 반영 | 중 | 최상 | 플레이어 만족도에 가장 직접적. 중간노드 삽입 + 신규 엔딩 씬 |
| 2 | B-5. 루트 확정 후 탈락 캐릭터 반응 | 하 | 상 | 2~3개 씬 삽입만으로 감정 밀도 대폭 상승 |
| 3 | A-2. Day 2 아침 호감도 인사 | 하 | 상 | 기존 일직선 구간에 분기 추가. 체감 효과 큼 |
| 4 | B-1. Day 1 점심 여파 | 중 | 상 | "어제 선택이 오늘에 영향" 최초 체감 포인트 |
| 5 | A-4. Day 3 아침 교문 강화 | 하 | 중 | 기존 affinityBranch 확장. 최소 수정 |
| 6 | B-4. Day 3 점심 도시락 파급 | 중 | 중 | 갈등 밀도 강화 |
| 7 | A-5. Day 4 벽 허물기 전 분기 | 하 | 중 | 몰입감 강화 |
| 8 | B-6. Day 4 벽 허물기 중 타 캐릭터 언급 | 하 | 중 | 죄책감/긴장감 |
| 9 | A-3. Day 2 밤 문자 호감도 반영 | 하 | 중 | 소소하지만 세밀한 체감 |
| 10 | A-1. Day 1 점심 호감도 태도 | 하 | 중하 | Day 1은 호감도 누적이 적어 분기 폭이 좁음 |
| 11 | A-6. Day 5 아침 분위기 | 하 | 중하 | 나레이션 분기라 가볍게 추가 가능 |
| 12 | B-2. Day 2 연속 선택 반영 | 중 | 중하 | 플래그 조합이 복잡 |
| 13 | B-3. Day 2 밤 미답장 반영 | 중 | 중하 | Day 3 아침에 삽입 필요 |

---

## 4. 예상 작업량

| 카테고리 | 신규 씬 노드 | 신규 분기 노드 | i18n 키 (6개 언어) |
|---------|------------|--------------|-------------------|
| A. 호감도 대사 분기 | ~30 | ~12 | ~180 |
| B. 갈등/영향도 | ~25 | ~10 | ~150 |
| C. 엔딩 호감도 반영 | ~40 (PERFECT/BITTERSWEET) | ~6 | ~240 |
| **합계** | **~95** | **~28** | **~570** |

---

## 5. 주의사항

1. **validate.js 통과 필수**: 모든 신규 노드는 UNREACHABLE/DEAD-END 0건이어야 함
2. **호감도 수치 밸런스**: 신규 분기 추가 시 기존 호감도 적립량과 임계값의 균형 재검증 필요
3. **대사 스타일 준수**: CLAUDE.md의 대사 규칙(유치/오글 금지, 2020년대 드라마 감성) 엄격 준수
4. **i18n 동기화**: 신규 씬 추가 시 6개 언어 번역 JSON 동시 작업
5. **기존 플래그 충돌 방지**: 신규 플래그명은 기존과 겹치지 않도록 네이밍 규칙 준수
6. **캐릭터 대사 원칙**: 서연은 행동으로, 유나는 문장 길이로, 다인은 느낌표 유무로 감정 표현
