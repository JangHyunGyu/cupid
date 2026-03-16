# CUPID 시나리오 배경/캐릭터 이미지 매핑 가이드

> 모든 시나리오의 배경 이미지와 캐릭터 이미지 매핑 현황 및 근거를 정리한 문서입니다.

---

## 사용 가능한 에셋 목록

### 배경 이미지

| 파일명 | 장소 | 주요 사용처 |
|--------|------|-------------|
| school.png | 학교 교문/외관 | 등교, Day1 프롤로그, Day5 투어 |
| school_hallway.png | 복도 | 이동, 쉬는시간, 방과후 전환 |
| room_school.png | 교실 | 수업, 아침, 담임 히든 |
| top_school.png | 옥상 | 서연 점심, 고백 |
| store.png | 매점 | 다인 점심, Day5 투어 |
| library_old.png | 도서관 | 유나 점심, Day5 투어 |
| yuna_hideout.png | 유나 비밀공간(별관) | 유나 방과후, 고백, Wall |
| teacher_office.png | 교무실/학생회실 | 서연 방과후, 담임 히든 |
| nurse_room.jpg | 보건실 | 보건선생님 히든 루트 전체 |
| gym.png | 체육관 | 다인 방과후, 고백, Wall |
| playground.png | 놀이터/운동장 | (현재 미사용) |
| street.png | 거리/떡볶이집 | 다인 Day2 방과후, Day4 데이트 |
| park.png | 공원 | 서연 Day4 데이트, Wall |
| cafe.png | 카페 | 담임 Day4 히든, 엔딩 |
| bookstore.png | 서점 | 유나 Day4 데이트 |
| arcade.png | 오락실 | 다인 Day4 데이트 |
| room_my.png | 자취방 | 밤 메시지 (Day1~2) |
| student_room.png | 자취방(야간) | 밤 메시지 (Day3~4) |
| school_back.png | 학교 뒷편 | 악몽, 석양 |
| seyoun_room.png | 서연의 방 | TRUE END(서연) |
| school_basement.png | 학교 지하 | (현재 미사용) |
| museum.png | 박물관 | (현재 미사용) |
| nurse_house.png | 보건선생님 집 | (현재 미사용) |
| teacher_room.png | 담임선생님 집 | (현재 미사용) |

### 캐릭터 이미지

| 캐릭터 | 이미지 파일 | 용도 |
|--------|-------------|------|
| **서연** | seyoun_normal.png | 기본 표정 |
| | seyoun_laugh.png | 웃는 표정 |
| | seyoun_shy.png | 수줍은 표정 |
| | seyoun_shy2.png | 더 수줍은 표정 (칭찬 반응) |
| | seyoun_sad.png | 슬픈 표정 |
| | seyoun_cry.png | 우는 표정 |
| | seyoun_angry.png | 화난 표정 |
| | seyoun_pout.png | 삐진 표정 |
| | seyoun_worried.png | 걱정하는 표정 |
| | seyoun_back.png | 뒷모습 (복도 안내) |
| **다인** | dain_normal.png | 기본 표정 |
| | dain_laugh.png | 웃는 표정 |
| | dain_shy.png | 수줍은 표정 |
| | dain_sad.png | 슬픈 표정 |
| | dain_angry.png | 화난 표정 |
| | dain_pout.png | 삐진 표정 |
| | dain_sweat.png | 당황한 표정 |
| | dain_active.png | 활발한 표정 (운동) |
| **유나** | yuna_normal.png | 기본 표정 |
| | yuna_smile.png | 미소 |
| | yuna_shy.png | 수줍은 표정 |
| | yuna_sad.png | 슬픈 표정 |
| | yuna_angry.png | 화난 표정 |
| | yuna_bored.png | 무관심/지루한 표정 |
| **담임선생님** | teacher_normal.png | 기본 표정 |
| | teacher_smile.png | 미소 |
| | teacher_shy.png | 수줍은 표정 |
| | teacher_sad.png | 슬픈 표정 |
| | teacher_angry.png | 화난 표정 |
| **보건선생님** | nurse_normal.png | 기본 표정 |
| | nurse_shy.png | 수줍은 표정 |
| | nurse_angry.png | 화난 표정 |

---

## Day 1 아침 (day1_1_morning)

### 프롤로그 - 교문 도착
| 씬 ID | 배경 | 캐릭터 | 화자 | 장면 설명 |
|--------|------|--------|------|-----------|
| start ~ start_6 | school.png | 없음 | 주인공 | 4월 벚꽃, 전학 첫날 독백 |
| name_input_scene | school.png | 없음 | 시스템 | 이름 입력 |

**배경 근거**: 교문 앞에서 학교를 올려다보는 장면이므로 school.png 사용

### 교문 - 서연 첫 만남
| 씬 ID | 배경 | 캐릭터 | 화자 | 장면 설명 |
|--------|------|--------|------|-----------|
| gate_1 ~ gate_3 | school.png | 없음 | 주인공 | 교문에서 서연 발견 |
| seoyeon_meet_1 ~ 9 | school.png | seyoun_normal/laugh | 서연/주인공 | 학생회장 자기소개, 학교 안내 |
| seoyeon_choice | school.png | seyoun_laugh | 주인공 | 선택지: 작업/농담 |
| choice_flirt_1 ~ 7 | school.png | seyoun_laugh/normal | 서연/주인공 | 작업 루트 대화 |
| choice_joke_1 ~ 3 | school.png | seyoun_laugh/normal | 서연/주인공 | 농담 루트 대화 |

**배경 근거**: 아직 교문 밖이므로 계속 school.png
**캐릭터 근거**: 서연이 말하고 웃으면서 대화하므로 seyoun_normal↔laugh 전환

### 복도 이동
| 씬 ID | 배경 | 캐릭터 | 화자 | 장면 설명 |
|--------|------|--------|------|-----------|
| hallway_1 ~ 2 | school_hallway.png | seyoun_back | 주인공 | 서연 뒷모습 따라 이동 |
| hallway_3 ~ 6 | school_hallway.png | seyoun_normal | 서연/주인공 | 옥상 열쇠 언급 |
| hallway_7 ~ 9 | school_hallway.png | seyoun_shy | 서연 | 수줍은 반응 |
| hallway_10 ~ 12 | school_hallway.png | seyoun_normal | 서연/주인공 | 교실 앞 도착 |
| hallway_13 ~ 14 | school_hallway.png | seyoun_back | 주인공 | 서연 떠남 (met_seoyeon 플래그) |

**배경 근거**: 학교 안으로 들어왔으므로 school_hallway.png로 전환
**캐릭터 근거**: 앞서 걸어가는 서연 → back, 대화 시 → normal, 칭찬에 반응 → shy

### 교실 입장
| 씬 ID | 배경 | 캐릭터 | 화자 | 장면 설명 |
|--------|------|--------|------|-----------|
| classroom_1 ~ 2 | room_school.png | 없음 | 주인공 | 교실 분위기 묘사 |
| classroom_3 ~ 5 | room_school.png | teacher_normal | 담임/주인공 | 전학생 소개 |
| classroom_6 | room_school.png | 없음 | 주인공 | 자리 배정 |
| classroom_dain_1 ~ 2 | room_school.png | dain_normal | 다인 | "옆자리잖아! 나 김다인" |
| classroom_dain_3 | room_school.png | teacher_normal | 담임 | "자리에 앉으렴" |
| classroom_dain_4 ~ 5 | room_school.png | dain_normal | 다인 | 배구부 언급 |
| classroom_yuna_1 ~ 2 | room_school.png | yuna_bored | 주인공 | 창가 유나 묘사 (은백색 머리, 타투) |
| classroom_seat_1 ~ 2 | room_school.png | dain_normal | 주인공 | 다인 옆에 앉음 |
| classroom_minsu_1 ~ 4 | room_school.png | 없음 | 민수/주인공 | 뒷자리 남학생 대화 |
| classroom_dain_talk_1 ~ 8 | room_school.png | dain_normal/laugh | 다인/주인공 | "볼 머신" 수업 대화 |
| classroom_yuna_note_1 ~ 6 | room_school.png | yuna_bored | 주인공 | 유나 쪽지: "시끄러운 자리" |

**배경 근거**: 교실 안이므로 room_school.png
**캐릭터 근거**:
- classroom_yuna_1~2: 주인공이 유나를 처음 관찰하는 장면 → yuna_bored (무관심하게 창 밖을 보는 모습)
- classroom_dain: 다인이 활발하게 말 걸 때 → dain_normal/laugh
- 민수: 전용 이미지 없는 NPC → null

---

## Day 1 점심 (day1_2_lunch)

### 점심 선택
| 씬 ID | 배경 | 캐릭터 | 화자 | 장면 설명 |
|--------|------|--------|------|-----------|
| lunch_start ~ 4 | school_hallway.png | 없음 | 주인공 | 세 방향 분기 묘사 |
| lunch_start_5 ~ 6 | school_hallway.png | dain_normal | 다인 | "빵 사러 가자!" |
| lunch_start_7 | school_hallway.png | dain_normal | 주인공 | "첫날부터 이런 선택을" |
| lunch_choice | school_hallway.png | 없음 | 주인공 | **3지 선택**: 서연(옥상)/다인(매점)/유나(도서관) |

**배경 근거**: 복도에서 세 방향을 바라보는 장면

### 서연 옥상 루트
| 씬 ID | 배경 | 캐릭터 | 장면 설명 |
|--------|------|--------|-----------|
| lunch_seo_1 ~ 23 | top_school.png | seyoun_normal/laugh/shy | 옥상 도시락, 바람, 서연 미소 |
| lunch_seo_choice | top_school.png | seyoun_shy | 선택지: 한 입 먹여줄까/마저 먹어 |
| lunch_seo_after_1 ~ 7 | top_school.png | seyoun_normal/laugh | 식후 대화 |
| lunch_seo_freetalk | top_school.png | seyoun_normal | **프리토킹** |

**배경 근거**: 서연이 옥상 열쇠를 가지고 있어서 옥상으로 올라감 → top_school.png
**프리토킹 배경 근거**: 직전 씬(lunch_seo_after_7)과 동일한 옥상 배경 유지

### 다인 매점 루트
| 씬 ID | 배경 | 캐릭터 | 장면 설명 |
|--------|------|--------|-----------|
| lunch_dain_1 ~ 23 | store.png | dain_normal/pout/laugh | 매점 벤치, 빵 가위바위보 |
| lunch_dain_choice | store.png | dain_laugh | 선택지: 나눠먹자/니꺼 먹어 |
| lunch_dain_after_1 ~ 6 | store.png | dain_normal/laugh | 식후 수다 |
| lunch_dain_freetalk | store.png | dain_normal | **프리토킹** |

**배경 근거**: 매점으로 이동 → store.png
**프리토킹 배경 근거**: 직전 씬(lunch_dain_after_6)과 동일한 매점 배경 유지

### 유나 도서관 루트
| 씬 ID | 배경 | 캐릭터 | 장면 설명 |
|--------|------|--------|-----------|
| lunch_yuna_1 ~ 26 | library_old.png | yuna_normal | 도서관 정적, 책 공유, "선배" 언급 |
| lunch_yuna_freetalk | library_old.png | yuna_normal | **프리토킹** |

**배경 근거**: 유나가 도서관으로 안내 → library_old.png
**프리토킹 배경 근거**: 직전 씬과 동일한 도서관 배경 유지

---

## Day 1 방과후 (day1_3_afterschool)

### 카카오톡 & 놓친 캐릭터 보충
| 씬 ID | 배경 | 캐릭터 | 장면 설명 |
|--------|------|--------|-----------|
| after_kakao_1 ~ 5 | school_hallway.png | 없음 | 전학교 단톡방, 소정이 남친 |
| after_miss_dain_1 ~ 7 | school_hallway.png | dain_normal/laugh | 다인 못 만났을 때 보충 |
| after_miss_yuna_1 ~ 4 | school_hallway.png | yuna_normal | 유나 못 만났을 때 보충 |
| after_miss_seoyeon_1 ~ 8 | school_hallway.png | seyoun_normal/pout | 서연 못 만났을 때 보충 |

**배경 근거**: 방과후 복도를 걸으면서 벌어지는 이벤트

### 히든: 담임선생님 상담
| 씬 ID | 배경 | 캐릭터 | 장면 설명 |
|--------|------|--------|-----------|
| after_hidden_homeroom_1 ~ 4 | school_hallway.png | teacher_normal | 복도에서 담임 호출 |
| after_homeroom_honest_1 ~ 10 | school_hallway.png | teacher_normal/smile/shy | "선생님이 이러면 안 되는데" |
| after_homeroom_freetalk | school_hallway.png | teacher_normal | **프리토킹** |

**배경 근거**: 복도에서 마주침 → school_hallway.png

### 히든: 보건선생님 첫 만남
| 씬 ID | 배경 | 캐릭터 | 장면 설명 |
|--------|------|--------|-----------|
| after_nurse_enter_1 ~ 12 | nurse_room.jpg | nurse_normal | 보건실 방문, 파스, "만져보고 싶었어" |
| after_nurse_freetalk | nurse_room.jpg | nurse_normal | **프리토킹** |

**배경 근거**: 보건실 안에서의 대화 → nurse_room.jpg

---

## Day 1 밤 (day1_4_night)

### 밤 메시지
| 씬 ID | 배경 | 캐릭터 | 특이사항 |
|--------|------|--------|----------|
| night_start ~ end | room_my.png | 없음 또는 캐릭터(opacity: 0.35) | **night: true** |
| night_msg_seo_1 ~ 5 | room_my.png | seyoun_normal (0.35) | 서연 메시지 |
| night_msg_dain_1 ~ 4 | room_my.png | dain_normal (0.35) | 다인 메시지 |
| night_msg_yuna_1 ~ 3 | room_my.png | yuna_normal (0.35) | 유나 메시지 |
| night_seo/dain/yuna_freetalk | room_my.png | 캐릭터 | **프리토킹, night: true** |

**배경 근거**: 밤에 자취방에서 핸드폰 보는 장면 → room_my.png
**캐릭터 투명도 근거**: 밤에 핸드폰으로 메시지를 주고받는 상황이라 캐릭터를 실물이 아닌 "떠올리는 이미지"로 표현 → opacity: 0.35
**night 플래그 근거**: 밤 장면이므로 CSS 야간 필터(어두운 블루톤) 적용 필요

---

## Day 2 아침 (day2_1_morning)

| 씬 ID | 배경 | 캐릭터 | 화자 | 장면 설명 |
|--------|------|--------|------|-----------|
| morning2_start ~ 2 | room_school.png | 없음 | 주인공 | 등교, 교실 도착 |
| morning2_dain_1 ~ 6 | room_school.png | dain_normal/laugh | 다인 | 등짝 인사 |
| morning2_note_1 ~ 3 | room_school.png | 없음 | 주인공 | 유나 쪽지 |
| morning2_seo_1 ~ 5 | room_school.png | seyoun_normal/laugh | 서연 | 아침 인사 |
| morning2_minsu_1 ~ 3 | room_school.png | 없음 | 민수 | 민수 대화 |
| morning2_dain_claim_1 ~ 6 | room_school.png | 없음/dain_laugh | 다인 | "내가 먼저 친구했지" |
| morning2_break_1 | school_hallway.png | 없음 | 주인공 | 쉬는시간, 복도로 |
| morning2_seo_dust_1 ~ 6 | school_hallway.png | seyoun_normal | 서연 | 어깨 먼지 터는 씬 |
| morning2_dain_react_1 ~ 6 | school_hallway.png | 없음/dain_normal | 다인 | 다인 질투 반응 |
| morning2_haeun_1 ~ 7 | school_hallway.png | 없음 | 하은/주인공 | "서연 선배가 요즘 달라졌어" |

**하은 씬 캐릭터 근거**: 하은은 학생회 부회장이지만 전용 이미지가 없는 NPC → character: null
(이전에 다인 이미지로 잘못 매핑되어 있었음 → 수정 완료)

### 히든: 담임 Day2
| 씬 ID | 배경 | 캐릭터 | 장면 설명 |
|--------|------|--------|-----------|
| hidden_homeroom_d2_1 ~ 2 | school_hallway.png | teacher_normal | 복도에서 호출 |
| hidden_homeroom_d2_3 ~ 12 | teacher_office.png | teacher_normal | 교무실 상담 |

**배경 전환 근거**: 복도에서 호출 → 교무실로 이동

---

## Day 2 점심 (day2_2_lunch)

### 3지 선택
- **유나 루트**: yuna_hideout.png → 비밀 독서 공간 발견
- **서연 루트**: top_school.png → 옥상에 다인 난입, 입가 밥풀
- **다인 루트**: store.png → 또 가위바위보

**배경 근거**: 각 캐릭터의 고유 장소 (점심마다 같은 장소에서 먹는 패턴)

---

## Day 2 방과후 (day2_3_afterschool)

### 3지 선택
| 루트 | 배경 | 캐릭터 | 장면 설명 |
|------|------|--------|-----------|
| 다인 | gym.png → street.png | dain_normal/laugh/active | 체육관 배구 → 떡볶이 |
| 서연 | teacher_office.png | seyoun_normal/laugh | 학생회실 서류 정리 |
| 유나 | yuna_hideout.png | yuna_normal/smile | 별관 이어폰 공유 |

### 프리토킹 배경
| 프리토킹 | 배경 | 매핑 근거 |
|----------|------|-----------|
| after2_dain_freetalk | street.png | 직전 씬(after2_dain_16)이 거리에서 떡볶이 먹는 장면 |
| after3_seo_freetalk (Day3) | teacher_office.png | 직전 씬이 학생회실 |
| after3_yuna_freetalk (Day3) | yuna_hideout.png | 직전 씬이 별관 |
| after3_dain_freetalk (Day3) | gym.png | 직전 씬이 체육관 |

**after2_dain_freetalk 수정 이유**: 원래 gym.png이었으나, 시나리오 흐름상 체육관→거리(떡볶이집)로 이동한 후 프리토킹이 시작되므로 street.png으로 수정

---

## Day 2 밤 (day2_4_night)

| 씬 | 배경 | 캐릭터 | 특이사항 |
|----|------|--------|----------|
| night2_msg_1 ~ 7 | room_my.png | 캐릭터(0.35) | **night: true** |
| night2_seo/dain/yuna_freetalk | room_my.png | 캐릭터 | **night: true** (추가됨) |

**night 플래그 추가 이유**: 프리토킹으로 전환 시 night 필터가 해제되어 갑자기 낮처럼 밝아지는 문제 → `"night": true` 추가

---

## Day 3 아침 (day3_1_morning)

### 등교 동행 (호감도 기반 분기)
| 최고 호감 캐릭터 | 배경 | 캐릭터 | 장면 설명 |
|-----------------|------|--------|-----------|
| 서연 | school.png | seyoun_normal/laugh | 교문 대기, 지각 동행 |
| 다인 | school.png | dain_normal/laugh | 전력질주, 손잡고 달리기 |
| 유나 | school.png | yuna_normal | 빵 나눠먹기 |

### 주말 데이트 제안 (순차 3회)
- room_school.png에서 각 캐릭터가 차례로 제안
- 2개 이상 수락 시 → day3_has_multiple_dates (양다리 플래그)

---

## Day 3 점심 (day3_2_lunch)

### 삼자 합석 & 폭로
| 씬 | 배경 | 캐릭터 | 장면 설명 |
|----|------|--------|-----------|
| lunch3_meal_1 ~ 8 | room_school.png | 다인/서연/유나 교대 | 3인 합석 도시락 |
| lunch3_expose_1 ~ 15 | room_school.png | 다인/서연/유나 | 양다리 폭로 (조건부) |

**캐릭터 교대 근거**: 세 명이 함께 있는 장면에서 현재 말하는 캐릭터의 이미지를 표시

---

## Day 3 방과후 (day3_3_afterschool)

### 루트 확정 선택
| 루트 | 배경 | 캐릭터 | 장면 설명 | 프리토킹 배경 |
|------|------|--------|-----------|--------------|
| 서연 | teacher_office.png | seyoun_normal/cry | 학생회실 무방비 모습 | teacher_office.png |
| 유나 | yuna_hideout.png | yuna_normal/shy | 소설 발견 | yuna_hideout.png |
| 다인 | gym.png | dain_normal/sad/shy | 무릎 부상 목격 | gym.png |

**프리토킹 배경 수정 이유**:
- after3_seo_freetalk: school_hallway → teacher_office (직전 씬이 학생회실)
- after3_yuna_freetalk: school_hallway → yuna_hideout (직전 씬이 별관)
- after3_dain_freetalk: playground → gym (직전 씬이 체육관)

---

## Day 3 밤 (day3_4_night)

| 루트 | 배경 | 캐릭터 | 특이사항 |
|------|------|--------|----------|
| 성실 루트 | student_room.png | 캐릭터(0.35) | night: true, 선택 캐릭터 메시지 |
| 양다리 루트 | school_back.png | 없음 | 악몽 씬, mystery.mp3 |

**배경 변경 근거**: Day3부터 student_room.png 사용 (Day1~2의 room_my.png과 구분 — 시간 경과에 따른 방 분위기 변화)

---

## Day 4 아침 (day4_1_morning)

| 씬 | 배경 | 캐릭터 | 장면 설명 |
|----|------|--------|-----------|
| 일반 | student_room.png | 없음 | 주말, 데이트 준비 |
| 담임 히든 | cafe.png | teacher_normal/smile | 카페에서 원고 전달 |
| 보건 히든 | nurse_room.jpg | nurse_normal | 건강검진 도움 |

---

## Day 4 점심 (day4_2_lunch) - 데이트

### 서연 데이트
| 씬 | 배경 | 캐릭터 | 장면 설명 |
|----|------|--------|-----------|
| date_seo_1 ~ end | park.png | seyoun_normal/shy/shy2/laugh | 공원 산책, 다육이 선물 |
| date_seo_freetalk | park.png | seyoun_normal | **프리토킹** |

**프리토킹 배경 수정 이유**: school_hallway → park (직전 씬 date_seo_succulent_3이 공원)

### 유나 데이트
| 씬 | 배경 | 캐릭터 | 장면 설명 |
|----|------|--------|-----------|
| date_yuna_1 ~ 5 | cafe.png | yuna_normal/smile | 카페에서 시작 |
| date_yuna_6 ~ end | bookstore.png | yuna_normal/shy/smile | 서점 이동, 이어폰 |
| date_yuna_freetalk | bookstore.png | yuna_normal | **프리토킹** |

**프리토킹 배경 수정 이유**: library_old → bookstore (직전 씬 date_yuna_oldbook_4이 서점)

### 다인 데이트
| 씬 | 배경 | 캐릭터 | 장면 설명 |
|----|------|--------|-----------|
| date_dain_1 ~ 5 | gym.png | dain_normal/laugh | 체육관에서 시작 |
| date_dain_6 ~ 9 | arcade.png | dain_laugh/active | 오락실 리듬게임 |
| date_dain_10 ~ end | street.png | dain_normal/laugh | 거리 스포츠용품점 |
| date_dain_freetalk | street.png | dain_normal | **프리토킹** |

**프리토킹 배경 수정 이유**: playground → street (직전 씬 date_dain_shop_3이 거리)

---

## Day 4 방과후 (day4_3_afterschool) - 고백

| 루트 | 배경 | 캐릭터 | 특이사항 |
|------|------|--------|----------|
| 서연 | top_school.png | seyoun_normal/shy/cry | **sunset: true** |
| 유나 | yuna_hideout.png | yuna_normal/shy/sad | **sunset: true** |
| 다인 | gym.png | dain_normal/shy/laugh | **sunset: true** |

**sunset 근거**: 방과후 석양 시간대, 고백의 분위기를 위한 노을 필터

---

## Day 4 밤 (day4_4_night) - Wall 씬

### 서연 Wall
| 씬 | 배경 | 캐릭터 | 장면 설명 |
|----|------|--------|-----------|
| night4_seo_wall_1 ~ end | park.png | seyoun_normal/sad/cry | 부모 불화 트라우마, **night: true** |

**배경 근거**: 낮에 데이트했던 공원에서 밤에 다시 만남

### 다인 Wall
| 씬 | 배경 | 캐릭터 | 장면 설명 |
|----|------|--------|-----------|
| night4_dain_wall_1 ~ end | gym.png | dain_normal/sad/angry | 무릎 부상, 꿈 상실, **night: true** |

**배경 근거**: 다인의 상징적 장소인 체육관에서 밤에 고백

### 유나 Wall
| 씬 | 배경 | 캐릭터 | 장면 설명 |
|----|------|--------|-----------|
| night4_yuna_wall_1 ~ end | yuna_hideout.png | yuna_normal/sad | 이준호 선배 편지, **night: true** |

**배경 근거**: 유나의 비밀 공간에서 과거를 고백

---

## Day 5 아침 (day5_1_morning)

| 씬 | 배경 | 캐릭터 | 장면 설명 |
|----|------|--------|-----------|
| morning5_start ~ end | room_school.png | 없음/각 캐릭터 | 마지막 날 행사, 세 방향 신호 |
| 담임 히든 | room_school.png | teacher_normal | 7년의 원고 전달 |
| 보건 히든 | nurse_room.jpg | nurse_normal | 밴드에 "카페에서 만나자" |

---

## Day 5 점심 (day5_2_lunch) - 추억 투어

| 루트 | 배경 | 캐릭터 | 프리토킹 배경 | 매핑 근거 |
|------|------|--------|--------------|-----------|
| 서연 | school.png | seyoun_normal/laugh/shy | school.png | 교문 첫 만남 회상 장소 |
| 유나 | library_old.png | yuna_normal/shy | library_old.png | 도서관 첫 만남 회상 장소 |
| 다인 | store.png | dain_normal/laugh/sad | store.png | 매점 첫 만남 회상 장소 |

**프리토킹 배경 수정 이유**:
- tour_seo_freetalk: top_school → school (직전 씬 tour_seo_10이 교문 앞)
- tour_dain_freetalk: gym → store (직전 씬 tour_dain_10이 매점)

---

## Day 5 방과후 (day5_3_afterschool) - 작별

| 장면 | 배경 | 캐릭터 | 특이사항 |
|------|------|--------|----------|
| 미선택 서연 작별 | school_hallway.png | seyoun_normal/sad | sunset: true |
| 미선택 유나 작별 | yuna_hideout.png | yuna_normal | |
| 미선택 다인 작별 | gym.png | dain_normal/sad | |
| 마지막 고백 기회 | 각 캐릭터 장소 | 각 캐릭터 | Day4 미고백 시 |

---

## Day 5 밤 (day5_4_night) - 엔딩

### TRUE LOVE END 장소

| 캐릭터 | 배경 | 매핑 근거 |
|--------|------|-----------|
| 서연 | seyoun_room.png | 서연의 방 — 화분(다육이), 새끼손가락 약속 |
| 유나 | yuna_hideout.png | 비밀 공간 — "세 번째 별", 첫 만남의 장소 |
| 다인 | gym.png | 체육관 매트 위 — 심장 소리, 새 출발 |
| 담임 | cafe.png | 졸업 후 카페 — 학생/선생 관계 종료 후 |
| 보건 | cafe.png | 카페 — 밴드 없이, 원피스 차림 |

---

## 수정 이력

| 수정 내용 | 수정 파일 | 이유 |
|-----------|----------|------|
| 하은 씬 character: dain→null | day2_1_morning.js | 하은은 NPC로 전용 이미지 없음. 다인 이미지가 잘못 표시됨 |
| 유나 묘사 씬 character: dain→yuna_bored | day1_1_morning.js | 주인공이 유나를 관찰하는 장면인데 다인 이미지가 표시됨 |
| 밤 프리토킹 night:true 추가 | day1_4_night.js, day2_4_night.js | 프리토킹 진입 시 야간 필터가 해제되는 문제 |
| lunch_dain_freetalk 배경 | day1_2_lunch.js | playground→store (매점에서 먹는 장면) |
| after2_dain_freetalk 배경 | day2_3_afterschool.js | gym→street (체육관 후 거리 떡볶이집) |
| after3_seo_freetalk 배경 | day3_3_afterschool.js | school_hallway→teacher_office (학생회실) |
| after3_yuna_freetalk 배경 | day3_3_afterschool.js | school_hallway→yuna_hideout (별관) |
| after3_dain_freetalk 배경 | day3_3_afterschool.js | playground→gym (체육관) |
| date_seo_freetalk 배경 | day4_2_lunch.js | school_hallway→park (공원 데이트) |
| date_yuna_freetalk 배경 | day4_2_lunch.js | library_old→bookstore (서점 데이트) |
| date_dain_freetalk 배경 | day4_2_lunch.js | playground→street (거리 데이트) |
| tour_seo_freetalk 배경 | day5_2_lunch.js | top_school→school (교문 투어) |
| tour_dain_freetalk 배경 | day5_2_lunch.js | gym→store (매점 투어) |

---

## 매핑 원칙

### 배경 이미지 매핑 원칙
1. **장소 연속성**: 프리토킹 배경은 반드시 직전 씬의 배경과 일치해야 함
2. **시간대 일관성**: 밤 장면은 반드시 `night: true` 플래그 포함
3. **캐릭터 고유 장소**: 각 캐릭터는 상징적인 장소가 있음
   - 서연: 옥상(top_school), 학생회실(teacher_office), 공원(park)
   - 유나: 도서관(library_old), 별관(yuna_hideout), 서점(bookstore)
   - 다인: 매점(store), 체육관(gym), 거리(street)
   - 담임: 교무실(teacher_office), 카페(cafe)
   - 보건: 보건실(nurse_room)

### 캐릭터 이미지 매핑 원칙
1. **화자 일치**: 대사를 하는 캐릭터의 이미지를 표시 (i18n name과 character 이미지 일치)
2. **NPC는 null**: 전용 이미지가 없는 NPC(하은, 민수 등)는 `character: null`
3. **표정 문맥 매칭**: 대화 내용에 맞는 표정 사용
   - 일상 대화 → normal
   - 유쾌한 농담 → laugh
   - 칭찬/고백 반응 → shy
   - 갈등/슬픔 → sad/cry
   - 질투/분노 → angry/pout
4. **지문(나레이션)**: 주인공이 캐릭터를 관찰하는 지문에서는 해당 캐릭터 이미지 유지
5. **투명도**: 밤 메시지 장면에서 캐릭터는 opacity: 0.35 (떠올리는 이미지 표현)
