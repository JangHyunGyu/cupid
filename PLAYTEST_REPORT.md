# Cupid 플레이테스트 리포트

> 결정론적 시드: `cupid-full-audit`

## 요약

| 항목 | 값 |
|------|----|
| 탐색 경로 | 9996개 |
| 완료 경로 | 4996개 |
| 엔딩 종류 | 10종 |
| 전체 씬 | 2818개 |

## 엔딩 도달 통계

| 엔딩 | 도달 경로 수 |
|------|-------------|
| `friend_12` | 2864 |
| `confess_fail_5` | 1298 |
| `day5_seo_ending_freetalk_good` | 247 |
| `day5_dain_ending_freetalk_good` | 216 |
| `day5_seo_ending_freetalk_true_love` | 164 |
| `day5_dain_ending_freetalk_late_good` | 88 |
| `day5_seo_ending_freetalk_late_good` | 56 |
| `day5_dain_ending_freetalk_bittersweet` | 34 |
| `day5_dain_ending_freetalk_true_love` | 25 |
| `day5_seo_ending_freetalk_bittersweet` | 4 |

## 경로 상세 (엔딩별 대표 경로)

### confess_fail_5

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_yuna_choice`: (선택)
- `after_end`: (선택)
- `after_hidden_homeroom_choice`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_seo_choice`: (선택)
- `after2_choice`: (선택)
- `night2_choice`: (선택)
- `lunch3_choice`: (선택)
- `after3_choice`: (선택)
- `after3_dain_choice`: (선택)
- `after5_last_chance_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=-6 유나=0 다인=-11 담임=-2 보건=0

<details>
<summary>씬 타임라인 (475씬)</summary>

| # | 씬 ID | 화자 | 배경 | 캐릭터 | OP | 밤 | 대사 (앞 30자) |
|---|--------|------|------|--------|----|----|----------------|
| | **Day 1** | | | | | | |
| 1 | `start` | {name} | school | 없음 |  |  | *4월의 교문 앞. 밟힌 꽃잎이 드문드문 붙어 있다.  |
| 2 | `start_3` | {name} | school | 없음 |  |  | *주머니에서 핸드폰이 울리고 예전 학교 단체 카톡방에  |
| 3 | `name_input_scene` | 시스템 | school | 없음 |  |  | 전학생, 당신의 이름은? |
| 4 | `gate_1` | {name} | school | 없음 |  |  | *낯선 교문 앞, 내 교복만 아직 접힌 선이 선명하다. |
| 5 | `seoyeon_meet_1` | 서연 | school | seyoun_normal |  |  | 전학생? {name} 맞지? |
| 6 | `seoyeon_meet_2` | 서연 | school | seyoun_normal |  |  | *{name}의 이름을 한 번 더 확인한 뒤 클립보드  |
| 7 | `seoyeon_meet_3` | {name} | school | seyoun_normal |  |  | 맞는데. 어떻게 알았어? |
| 8 | `seoyeon_meet_4` | 서연 | school | seyoun_normal |  |  | 학생회장. 전학생 안내는 내 담당이야. |
| 9 | `seoyeon_meet_5` | 서연 | school | seyoun_normal |  |  | 따라와. 15분 안에 끝낼게. |
| 10 | `seoyeon_meet_6` | {name} | school | seyoun_normal |  |  | 학생회장이 직접? 과분한데. |
| 11 | `seoyeon_meet_7` | 서연 | school | seyoun_normal |  |  | 과분한 건지 아닌 건지는 내가 정해. |
| 12 | `seoyeon_meet_8` | {name} | school | seyoun_normal |  |  | *서연은 이미 교문 안쪽으로 걸음을 옮겼다. 안내 파일 |
| 13 | `seoyeon_choice` | {name} | school | seyoun_normal |  |  | *어떻게 반응할까?* |
| 14 | `choice_dismiss_1` | 서연 | school | seyoun_normal |  |  | *구두 굽이 교문 앞 보도블록을 짧게 긁는다. 몸은 앞 |
| 15 | `choice_dismiss_2` | 서연 | school | seyoun_normal |  |  | 그래? 그럼 최소한 교실 번호는 외워. 3학년 2반,  |
| 16 | `choice_dismiss_3` | 서연 | school_hallway | seyoun_normal |  |  | *클립보드를 팔 안쪽에 끼우고 교문 안쪽으로 걸어간다. |
| 17 | `classroom_1` | {name} | room_school | 없음 |  |  | *교실 문을 열자 소음이 뚝 끊기고 가까운 책상 의자  |
| 18 | `classroom_2_b` | {name} | room_school | teacher_normal |  |  | *교탁 앞에 담임선생님이 서 있다. 20대 후반. 가디 |
| 19 | `classroom_3` | 담임 | room_school | teacher_normal |  |  | 자, 오늘부터 우리 반에 들어온 전학생이야. 자기소개  |
| 20 | `classroom_3_b` | {name} | room_school | teacher_normal |  |  | {name}입니다. 잘 부탁드립니다. *담임이 출석부의 |
| 21 | `classroom_5_b` | 담임 | room_school | teacher_normal |  |  | 그래, {name}. 외웠어. *출석부에 이름을 덧그으 |
| 22 | `classroom_5_c` | {name} | room_school | teacher_normal |  |  | *담임의 혼잣말은 교실 소음에 묻힌다. 교실 한쪽에서  |
| 23 | `classroom_dain_1` | 다인 | room_school | dain_normal |  |  | 오, 전학생. 우리 반에 새 얼굴 들어왔네! |
| 24 | `classroom_dain_2` | {name} | room_school | dain_normal |  |  | *갈색 숏컷에 배구부 유니폼. 자리에서 반쯤 일어나 손 |
| 25 | `classroom_dain_3` | 담임 | room_school | teacher_normal |  |  | 다인아, 목소리 낮춰. 그리고 교실에서는 유니폼 좀 그 |
| 26 | `classroom_dain_4` | 다인 | room_school | dain_normal |  |  | 쌤, 이게 제일 편하다니까요. 아무튼 전학생, 반갑다. |
| 27 | `classroom_dain_5` | {name} | room_school | dain_normal |  |  | *교실 몇 군데서 웃음이 터진다. 다인은 손을 더 높이 |
| 28 | `classroom_dain_5_b` | 담임선생님 | room_school | teacher_normal |  |  | *출석부 모서리로 교탁을 두 번 두드리고 다인 쪽을 보 |
| 29 | `classroom_dain_5_c` | 담임 | room_school | teacher_normal |  |  | 에너지 좀 아껴. 아직 1교시도 안 시작했어. |
| 30 | `classroom_dain_5_d` | 담임선생님 | room_school | teacher_angry |  |  | *담임은 출석부를 넘긴다.* |
| 31 | `classroom_yuna_1` | {name} | room_school | yuna_bored |  |  | *창가 맨 뒤쪽의 한 여학생은 턱을 괸 채 창밖만 본다 |
| 32 | `classroom_yuna_2` | {name} | room_school | yuna_bored |  |  | *은백색 머리. 붉은 눈. 팔의 타투. 창가 맨 뒤 자 |
| 33 | `classroom_yuna_4` | {name} | room_school | yuna_bored |  |  | *앞줄에서 누군가 속삭인다. '쟤한테 말 걸지 마. 무 |
| 34 | `classroom_seat_1` | 담임선생님 | room_school | teacher_normal |  |  | *빈자리를 가리킨다.* |
| 35 | `classroom_seat_2` | {name} | room_school | dain_normal |  |  | *다인 옆자리다. 의자에 앉기도 전에 다인이 내 책상  |
| 36 | `classroom_minsu_1` | {name} | room_school | minsu_normal |  |  | *자리에 앉으려는데 — 앞자리 남학생이 돌아본다.* |
| 37 | `classroom_minsu_2` | 민수 | room_school | minsu_smirk |  |  | 야, 전학생. 환영한다. — 그리고 조심해. |
| 38 | `classroom_minsu_3` | {name} | room_school | minsu_smirk |  |  | 뭘? |
| 39 | `classroom_minsu_2_b` | 민수 | room_school | minsu_normal |  |  | *다인 쪽으로 턱짓한다.* 체력 관리. |
| 40 | `classroom_dain_talk_1` | {name} | room_school | minsu_normal |  |  | *앞자리 이름표에는 '민수'라고 적혀 있었다.* |
| 41 | `classroom_dain_talk_2` | {name} | room_school | dain_normal |  |  | *자리에 앉자마자 다인이 상체를 기울인다. 책상 두 개 |
| 42 | `classroom_dain_talk_3` | 다인 | room_school | dain_normal |  |  | 야, {name}. 운동 좋아해? |
| 43 | `classroom_dain_talk_4` | {name} | room_school | dain_normal |  |  | 갑자기? |
| 44 | `classroom_dain_talk_5` | 다인 | room_school | dain_normal |  |  | 그냥. 방과후에 리시브 연습 상대가 필요해서. 서브 넣 |
| 45 | `classroom_dain_talk_6` | {name} | room_school | dain_normal |  |  | 나 볼 머신이야? |
| 46 | `classroom_dain_talk_7` | 다인 | room_school | dain_laugh |  |  | 그래도 볼 머신보단 낫겠지. 아마. |
| 47 | `classroom_dain_talk_8` | {name} | room_school | dain_laugh |  |  | *'아마' 뒤에 다인의 시선이 볼 머신 쪽으로 간다.  |
| 48 | `classroom_yuna_note_1` | {name} | room_school | yuna_bored |  |  | *접힌 쪽지가 책상 위로 미끄러져 온다. 뒤를 돌아봐도 |
| 49 | `classroom_yuna_note_3` | {name} | room_school | yuna_bored |  |  | *'시끄러운 자리 걸렸네. — 유나' 연보라색 잉크.  |
| 50 | `classroom_yuna_note_5` | {name} | room_school | yuna_bored |  |  | *유나 쪽을 보자 시선은 여전히 창밖이고 손만 책상 아 |
| 51 | `classroom_yuna_note_6` | {name} | room_school | yuna_bored |  |  | *수업 종이 울리자 유나는 다시 창밖을 보고 다인은 벌 |
| 52 | `lunch_start` | {name} | school_hallway | 없음 |  |  | *점심시간. 학생들로 찬 복도 끝에는 서연의 도시락 가 |
| 53 | `lunch_start_4` | {name} | school_hallway | seyoun_normal |  |  | *복도 끝에서 서연이 눈을 맞추더니 옥상 쪽을 손으로  |
| 54 | `lunch_start_4_b` | {name} | school_hallway | dain_normal |  |  | *옆에서 다인이 팔목을 낚아챈다.* |
| 55 | `lunch_start_5` | 다인 | school_hallway | dain_normal |  |  | 야, 밥 먹었어? 매점 가자. 빵 내기하자, 진 사람이 |
| 56 | `lunch_start_6` | {name} | school_hallway | yuna_normal |  |  | *유나는 가방만 들고 교실을 빠져나가 도서관 방향으로  |
| 57 | `lunch_start_7` | {name} | school_hallway | 없음 |  |  | *복도는 세 갈래다. 옥상, 매점, 도서관. 주머니 안 |
| 58 | `lunch_choice` | {name} | school_hallway | 없음 |  |  | *누구를 따라갈까?* |
| 59 | `lunch_yuna_1` | {name} | library_old | yuna_normal |  |  | *유나의 뒷모습을 따라 도서관으로 들어간다. 점심 종이 |
| 60 | `lunch_yuna_1_aff_default` | 유나 | library_old | yuna_normal |  |  | *쪽지는 없다. 유나는 열람실 구석에 먼저 앉아 책을  |
| 61 | `lunch_yuna_2` | 유나 | library_old | yuna_normal |  |  | *열람실 구석에서 책을 편다. 맞은편 의자 다리가 바닥 |
| 62 | `lunch_yuna_4` | 유나 | library_old | yuna_normal |  |  | *책장 한 장이 넘어간다. 유나는 대출 영수증 끝을 접 |
| 63 | `lunch_yuna_5` | {name} | library_old | yuna_normal |  |  | *5초, 다시 10초가 지나도록 유나는 대출 영수증 끝 |
| 64 | `lunch_yuna_5_b` | {name} | library_old | yuna_normal |  |  | 앉아도 돼? |
| 65 | `lunch_yuna_7` | 유나 | library_old | yuna_normal |  |  | *책에서 시선을 떼지 않는다.* 시끄럽지 않으면. |
| 66 | `lunch_yuna_8` | {name} | library_old | yuna_normal |  |  | *유나는 책을 다시 펴면서 맞은편 의자에 놓인 가방만  |
| 67 | `lunch_yuna_10` | {name} | library_old | yuna_normal |  |  | *벽시계 초침과 책장 넘어가는 소리가 엇갈린다. 맞은편 |
| 68 | `lunch_yuna_10_b` | {name} | library_old | yuna_normal |  |  | *유나의 책에는 오래된 책갈피가 끼워져 있고 흐릿한 글 |
| 69 | `lunch_yuna_12` | 유나 | library_old | yuna_normal |  |  | *책등 위로 시선을 올린다.* 그거 3권인데. |
| 70 | `lunch_yuna_13` | {name} | library_old | yuna_normal |  |  | 응? |
| 71 | `lunch_yuna_14` | 유나 | library_old | yuna_normal |  |  | 1권부터 읽어야 해. |
| 72 | `lunch_yuna_15` | {name} | library_old | yuna_normal |  |  | *유나가 자기 옆에 놓인 책을 하나 밀어준다.* |
| 73 | `lunch_yuna_16` | {name} | library_old | yuna_normal |  |  | 고마워. |
| 74 | `lunch_yuna_17` | 유나 | library_old | yuna_normal |  |  | 읽고 돌려줘. |
| 75 | `lunch_yuna_18` | 유나 | library_old | yuna_normal |  |  | *유나는 다시 자기 책을 편다. 빌려준 책은 첫 문장이 |
| 76 | `lunch_yuna_20` | {name} | library_old | yuna_normal |  |  | *종이 울린다.* |
| 77 | `lunch_yuna_21` | {name} | library_old | yuna_normal |  |  | 벌써 종이네. |
| 78 | `lunch_yuna_22` | 유나 | library_old | yuna_normal |  |  | *책갈피를 끼운다.* 조용히 있어줘서. |
| 79 | `lunch_yuna_23` | {name} | library_old | yuna_normal |  |  | 응? |
| 80 | `lunch_yuna_24` | 유나 | library_old | yuna_normal |  |  | 괜찮았어. |
| 81 | `lunch_yuna_25` | 유나 | library_old | yuna_normal |  |  | *유나는 책을 품에 끼고 먼저 나간다. 문이 닫힌 뒤, |
| 82 | `lunch_yuna_choice` | {name} | library_old | yuna_normal |  |  | *유나는 아직 몇 발자국 앞이다. 두고 간 책을 들고  |
| 83 | `lunch_yuna_c1_1` | 유나 | library_old | yuna_normal |  |  | 이거? 꽤 괜찮아. 빌려줄까? |
| 84 | `lunch_yuna_c1_2` | 유나 | library_old | yuna_smile |  |  | 다 읽으면 얘기하자. 감상이 궁금해. |
| 85 | `lunch_yuna_freetalk` | 유나 | library_old | yuna_normal |  |  | *책갈피를 끼우고 표지를 덮는다. 손바닥으로 맞은편 의 |
| 86 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *종이 울린다. 점심시간이 끝났다.* |
| 87 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에 |
| 88 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 89 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창 |
| 90 | `after_kakao_5` | {name} | school_hallway | 없음 |  | 🌅 | *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른 |
| 91 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록  |
| 92 | `after1_jealousy_yuna_1` | 다인 | school_hallway | dain_normal |  | 🌅 | 점심때 도서관 갔다며? 유나랑? |
| 93 | `after1_jealousy_yuna_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 그 애 원래 사람 안 만나는데. |
| 94 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *복도를 계속 걷는다.* |
| 95 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도를 걷는데 뒤에서 쿵쿵 발소리.* |
| 96 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 조심! |
| 97 | `after_miss_dain_3` | {name} | school_hallway | dain_normal |  | 🌅 | *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 |
| 98 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 피했다? 반사신경 괜찮은데. |
| 99 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 넌 복도에서 왜 전력질주야? |
| 100 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 늦었거든! 체육관 가야 해. 내일 보자, 전학생! |
| 101 | `after_miss_dain_6_b` | {name} | school_hallway | dain_laugh |  | 🌅 | *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을  |
| 102 | `after_miss_dain_7` | {name} | school_hallway | dain_laugh |  | 🌅 | *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아 |
| 103 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으 |
| 104 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 이거 떨어뜨렸어. |
| 105 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피 |
| 106 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌  |
| 107 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 고마워. |
| 108 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피를 책등 사이에 끼우고 돌아선다.* |
| 109 | `after_miss_yuna_4` | {name} | library_old | yuna_normal |  | 🌅 | *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 |
| 110 | `after_miss_seoyeon_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *하교하려는데 복도에서 서연과 마주친다.* |
| 111 | `after_miss_seoyeon_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 아까 어디 갔어? |
| 112 | `after_miss_seoyeon_3` | {name} | school_hallway | seyoun_normal |  | 🌅 | 어디라니? |
| 113 | `after_miss_seoyeon_4` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 옥상 열어놨는데 안 왔네. — 전학생, 배짱이 있어. |
| 114 | `after_miss_seoyeon_5` | {name} | school_hallway | seyoun_normal |  | 🌅 | 기다린 거야? |
| 115 | `after_miss_seoyeon_6` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 바람 쐬러 올라간 건데 문이 열려 있길래. |
| 116 | `after_miss_seoyeon_7` | {name} | school_hallway | seyoun_normal |  | 🌅 | *서연의 클립보드 맨 위에 내 이름이 남아 있다. 체크 |
| 117 | `after_miss_seoyeon_8` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 내일은 빠지지 마. |
| 118 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든 |
| 119 | `after_hidden_homeroom_1` | {name} | school_hallway | 없음 |  | 🌅 | *하교하려다 아까 교실에 마지막까지 남아 출석부를 정리 |
| 120 | `after_hidden_homeroom_2` | 담임 | teacher_office | teacher_normal |  | 🌅 | 어, {name}? — 무슨 일? |
| 121 | `after_hidden_homeroom_3` | {name} | teacher_office | teacher_normal |  | 🌅 | *담임이다. 가디건 한쪽 소매가 접혀 있고 출석부 사이 |
| 122 | `after_hidden_homeroom_3_b` | {name} | teacher_office | teacher_normal |  | 🌅 | 아까 하셨던 말씀이 — 계속 남아서요. |
| 123 | `after_hidden_homeroom_3_c` | 담임 | teacher_office | teacher_normal |  | 🌅 | 아, 그거였어? 잘 왔네. 앉아. |
| 124 | `after_hidden_homeroom_4` | 담임 | teacher_office | teacher_normal |  | 🌅 | 잘못한 건 없고. — 전학생이니까. 적응 좀 어때? |
| 125 | `after_hidden_homeroom_choice` | 담임선생님 | teacher_office | teacher_normal |  | 🌅 | *클립보드를 내리고 {name}의 얼굴을 본다.* |
| 126 | `after_homeroom_choice_trap` | 담임선생님 | teacher_office | teacher_worried |  | 🌅 | *클립보드가 다시 가슴 앞에 선다.* 특별 취급이 아니 |
| 127 | `after_homeroom_ok_6` | 담임선생님 | teacher_office | teacher_normal |  | 🌅 | *담임은 다시 책상 쪽으로 돌아선다. 짧게 인사하고 교 |
| 128 | `night_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄 |
| 129 | `night_start_3` | {name} | room_my | 없음 |  |  | *핸드폰이 울린다. 학교 메신저.* |
| 130 | `night_msg_yuna_1` | 유나 | room_my | yuna_normal | 0.35 |  | *오늘 조용히 있어줘서 괜찮았어* |
| 131 | `night_msg_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | *내일도 자리 비워 놓을게* |
| 132 | `night_msg_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *'자리 비워 놓을게'를 다시 읽는 사이 화면이 먼저  |
| 133 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 다른 알림이 보인다.* |
| 134 | `night_hidden_homeroom_1` | {name} | room_my | teacher_normal | 0.35 |  | *학교 공지 앱에 담임선생님이 올린 글이 보인다. '3 |
| 135 | `night_hidden_homeroom_2` | {name} | room_my | teacher_normal | 0.35 |  | *공지사항을 한 번 더 읽고 화면을 엎어 둔다. 어두워 |
| 136 | `night_late_transition` | {name} | room_my | 없음 |  |  | *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시 |
| 137 | `night_late_branch` | {name} | room_my | 없음 |  |  | *화면이 밝아진다.* |
| 138 | `night_end_1` | {name} | room_my | 없음 |  |  | *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교 |
| 139 | `night_end_3` | {name} | room_my | 없음 |  |  | *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을  |
| | **Day 2** | | | | | | |
| 140 | `morning2_start` | {name} | room_school | 없음 |  |  | *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.* |
| 141 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 142 | `morning2_dain_1` | {name} | room_school | 없음 |  |  | *교실 문을 여는 순간 손바닥이 등짝을 탁 친다.* |
| 143 | `morning2_dain_2` | 다인 | room_school | dain_normal |  |  | 왔어? 좋은 아침. |
| 144 | `morning2_dain_3` | 다인 | room_school | dain_laugh |  |  | 그 정도로? 체력 관리 좀 해. |
| 145 | `morning2_dain_4` | {name} | room_school | dain_laugh |  |  | 너 아침부터 에너지 과잉 아냐? |
| 146 | `morning2_dain_5` | 다인 | room_school | dain_laugh |  |  | 이게 정상이야! 네가 부족한 거야! |
| 147 | `morning2_dain_6` | 다인 | room_school | dain_laugh |  |  | *아침 조회 전 교실에 다인의 목소리가 먼저 울린다.* |
| 148 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *자리에 앉으려는데 — 책상 위에 접힌 쪽지가 하나 놓 |
| 149 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 150 | `morning2_note_3` | {name} | room_school | yuna_normal | 0.35 |  | *어제와 같은 글씨. 아래쪽에 장소가 적혀 있다. '도 |
| 151 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가다 교실 안을 들여다본다.* 어제 잘 잤 |
| 152 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 학생회장이 교실까지 인사하러 와? |
| 153 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 순찰이야. — 출석률 확인 겸. |
| 154 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | *복도로 돌아가기 직전 클립보드 끝이 문틀에 한 번 닿 |
| 155 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연이 사라진 복도를 바라보는데 — 뒤에서 민수가 돌 |
| 156 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 이틀 만에 학생회장이 인사하러 오냐? 나 1 |
| 157 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 인기가 없는 거 아닐까. |
| 158 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 그건 맞는데 그게 중요한 게 아니잖아. |
| 159 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *다인은 서연의 뒷모습이 교실 안으로 사라질 때까지 바 |
| 160 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 회장님도 우리 전학생한테 관심 있어? 인기 많네! |
| 161 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | '우리' 전학생? |
| 162 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 내가 먼저 봤잖아. 그럼 우리 맞지. 찜한 거. |
| 163 | `hidden_homeroom_d2_1` | 담임선생님 | school_hallway | teacher_normal |  |  | 아, {name}. 잠깐 교무실로. |
| 164 | `hidden_homeroom_d2_low` | 담임선생님 | teacher_office | teacher_normal |  |  | *교무실 문 앞에서 담임과 마주친다. 담임은 들고 있던 |
| 165 | `morning2_seo_dust_1` | {name} | school_hallway | seyoun_normal |  |  | *1교시가 끝난 쉬는 시간, 복도에서 서연과 스친다.  |
| 166 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 잠깐. |
| 167 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *손이 {name}의 어깨에 닿는다. 먼지를 두 번 털 |
| 168 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 옷에 뭐 묻었어. |
| 169 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | *서연의 손이 떨어진 자리에서 가방끈이 비뚤어져 있다. |
| 170 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 왜 그래? 먼지잖아. |
| 171 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *어깨의 먼지는 없어졌는데 가방끈을 두 번이나 다시 고 |
| 172 | `morning2_dain_react_2` | {name} | school_hallway | dain_angry |  |  | *서연이 클립보드를 고쳐 끼고 복도로 간다. 뒤에서 다 |
| 173 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 지금 뭐야? 어깨 만진 거야? |
| 174 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 먼지 털어준 거야. |
| 175 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 먼지가 진짜 있긴 했어? |
| 176 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | *대답 대신 가방끈을 고쳐 잡았다. 다인은 그걸 보고도 |
| 177 | `morning2_end` | {name} | school_hallway | seyoun_normal |  |  | *민수 말로는 1년 동안 먼저 인사한 적도 없다던 서연 |
| 178 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *점심. 주머니에는 유나의 쪽지가 있고 복도 끝에서는  |
| 179 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *누구와 함께할까.* |
| 180 | `lunch2_seo_1_check` | {name} | school_hallway | 없음 |  |  | *옥상으로 올라간다.* |
| 181 | `lunch2_seo_1b` | {name} | top_school | seyoun_normal |  |  | *처음 올라온 옥상이다. 난간 아래에서 운동장 호루라기 |
| 182 | `lunch2_seo_2b_check` |  | top_school | seyoun_normal |  |  |  |
| 183 | `lunch2_seo_2b_yuna` | 서연 | top_school | seyoun_normal |  |  | 쪽지까지 받고도 옥상으로 왔네. |
| 184 | `lunch2_seo_3b_yuna` | {name} | top_school | seyoun_normal |  |  | 어제는 조용한 쪽이었으니까, 오늘은 네 쪽이 궁금했어. |
| 185 | `lunch2_seo_4b_yuna` | 서연 | top_school | seyoun_normal |  |  | 내 쪽? |
| 186 | `lunch2_seo_5b_yuna` | {name} | top_school | seyoun_normal |  |  | 여기 바람이랑, 회장님 도시락이 어떤 조합인지 궁금했거 |
| 187 | `lunch2_seo_6b_yuna` | 서연 | top_school | seyoun_laugh |  |  | *도시락 뚜껑 끝을 젓가락으로 톡 친다.* 그거, 이상 |
| 188 | `lunch2_seo_7` | {name} | top_school | seyoun_normal |  |  | *서연이 도시락 뚜껑을 여는 순간 옥상 문이 철컥 열린 |
| 189 | `lunch2_seo_9` | 다인 | top_school | dain_normal |  |  | 여기 있었네. 찾았다. 오늘도 나 빼고 먹으려고? |
| 190 | `lunch2_seo_10` | 서연 | top_school | seyoun_normal |  |  | 옥상은 허가제야. 그리고 오늘 점심은 내가 먼저 잡았고 |
| 191 | `lunch2_seo_11` | 다인 | top_school | dain_normal |  |  | 그럼 난 지금부터 끼면 되겠네. 나도 앉는다? |
| 192 | `lunch2_seo_12` | {name} | top_school | dain_normal |  |  | *다인이 빈자리에 바로 앉는다. 서연의 젓가락이 계란말 |
| 193 | `lunch2_seo_13b` | 다인 | top_school | dain_normal |  |  | 반가워요, 회장님. 그런데 옆자리는 비었죠? |
| 194 | `lunch2_seo_13b_b` | 서연 | top_school | seyoun_normal |  |  | *서연이 도시락을 {name} 쪽으로 더 붙인다.* 자 |
| 195 | `lunch2_seo_14` | 서연 | top_school | seyoun_normal |  |  | *다인이 앉으려 하자 빈 의자를 발끝으로 자기 쪽에 붙 |
| 196 | `lunch2_seo_15` | {name} | top_school | seyoun_normal |  |  | 같은 반이잖아. 너희 둘도 이제 아는 사이고. |
| 197 | `lunch2_seo_16` | 서연 | top_school | seyoun_normal |  |  | 친해지는 것하고 양보하는 건 다르지. |
| 198 | `lunch2_seo_17` | 다인 | top_school | dain_normal |  |  | 그럼 나도 양보 안 해. 다음 쉬는 시간에 체육관 와. |
| 199 | `lunch2_seo_19` | 서연 | top_school | seyoun_normal |  |  | {name}, 지금 내 앞에서 다음 약속 잡는 거야? |
| 200 | `lunch2_seo_20` | 서연 | top_school | seyoun_normal |  |  | 대답은 나중에 해. 일단 입가에 뭐 묻었어. 가만있어  |
| 201 | `lunch2_seo_choice` | 서연 | top_school | seyoun_normal |  |  | *물티슈를 감은 손가락이 입가로 다가온다.* |
| 202 | `lunch2_seo_c2_1` | {name} | top_school | seyoun_normal |  |  | *손등으로 입가를 닦는다.* |
| 203 | `lunch2_seo_c2_2` | 서연 | top_school | seyoun_pout |  |  | 직접 닦으면 번지잖아. |
| 204 | `lunch2_seo_c2_3` | 서연 | top_school | seyoun_pout |  |  | *도시락 뚜껑을 맞추는 손이 두 번 미끄러진다. 세 번 |
| 205 | `lunch2_seo_end_c2` | {name} | top_school | seyoun_pout |  |  | *손등에 아직 밥풀 자국이 남아 있다. 서연은 도시락  |
| 206 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *방과후. 핸드폰에 알림이 두 개 와 있다.* |
| 207 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 체육관 와. 오늘은 진짜 내기다. |
| 208 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 학생회실에 올 수 있어? 일손이 부족해서. |
| 209 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게서는 아무 연락이 없다. 가방을 챙기자 주머니 |
| 210 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *어디로 갈까.* |
| 211 | `after2_dain_1` | {name} | gym | dain_active |  | 🌅 | *체육관. 다인이 배구 네트 앞에서 준비운동을 하고 있 |
| 212 | `after2_dain_2` | 다인 | gym | dain_sweat |  | 🌅 | 왔어? 늦었어. |
| 213 | `after2_dain_3` | {name} | gym | dain_sweat |  | 🌅 | 5분 전인데. |
| 214 | `after2_dain_4` | 다인 | gym | dain_sweat |  | 🌅 | 나는 10분 전에 왔거든. |
| 215 | `after2_dain_5` | {name} | gym | dain_sweat |  | 🌅 | *빨리 온 쪽이 너. 나는 안 늦었다.* |
| 216 | `after2_dain_6` | 다인 | gym | dain_sweat |  | 🌅 | 자, 내기다! 서브 다섯 번, 세 번 이상 넘기면 네  |
| 217 | `after2_dain_7` | {name} | gym | dain_normal |  | 🌅 | 갑자기 떡볶이? |
| 218 | `after2_dain_8` | 다인 | gym | dain_laugh |  | 🌅 | 배고프거든. |
| 219 | `after2_dain_9` | {name} | gym | dain_normal |  | 🌅 | *첫 서브는 네트에 걸리고 두 번째는 선 안쪽에 떨어진 |
| 220 | `after2_dain_9_b` | 다인 | gym | dain_normal |  | 🌅 | *튕겨 나온 공을 양손으로 받아 든다.* 어? 봐주려고 |
| 221 | `after2_dain_9_c` | 다인 | gym | dain_active |  | 🌅 | *자세를 낮춘다. 공을 든 손에 힘이 들어간다.* |
| 222 | `after2_dain_9_d` | 다인 | gym | dain_active |  | 🌅 | 이번엔 제대로 간다! |
| 223 | `after2_dain_9_e` | {name} | gym | dain_active |  | 🌅 | *랠리가 빠르게 오간다. 다인은 착지할 때마다 왼발부터 |
| 224 | `after2_dain_9_f` | {name} | gym | dain_sweat |  | 🌅 | *점수판은 3:2. 다인은 일어서며 오른쪽 무릎을 한  |
| 225 | `after2_dain_11b` | {name} | street | dain_laugh |  | 🌅 | *체육관을 나와 거리를 걸었다.* |
| 226 | `after2_dain_12` | 다인 | street | dain_laugh |  | 🌅 | 졌네. 근데 좀 치는데? 너 운동 안 한다며. |
| 227 | `after2_dain_13` | {name} | street | dain_laugh |  | 🌅 | 안 한다고는 안 했어. |
| 228 | `after2_dain_14` | 다인 | street | dain_normal |  | 🌅 | *들고 있던 공을 떨어뜨린다.* 뭐야? 속은 거야? |
| 229 | `after2_dain_15` | {name} | street | dain_normal |  | 🌅 | 속인 건 아니고 물어보지도 않았잖아. |
| 230 | `after2_dain_16` | 다인 | street | dain_laugh |  | 🌅 | *주먹을 어깨 높이까지 들었다가 자기 옆구리에 붙인다. |
| 231 | `after2_dain_freetalk` | 다인 | store | dain_normal |  | 🌅 | *가게에 들어서자 다인이 떡볶이 컵을 밀어 놓고 젓가락 |
| 232 | `after2_dain_end_first` | {name} | store | dain_laugh |  | 🌅 | *다인이 떡볶이 컵 두 개를 탁 내려놓고 젓가락 포장을 |
| 233 | `after2_dain_end_b` | {name} | store | dain_laugh |  | 🌅 | *학교 앞 떡볶이집. 다인이 떡볶이를 후후 불며 말한다 |
| 234 | `after2_dain_end_2` | 다인 | store | dain_laugh |  | 🌅 | 야, 너 진짜 운동 좀 아는 거지? |
| 235 | `after2_dain_end_2b` | {name} | store | dain_laugh |  | 🌅 | 조금. |
| 236 | `after2_dain_end_2c` | 다인 | store | dain_laugh |  | 🌅 | 조금이면 저렇게 못 쳐! — 인정해, 잘한다고. |
| 237 | `after2_dain_end_2d` | {name} | store | dain_laugh |  | 🌅 | 다인이가 훨씬 잘하던데. |
| 238 | `after2_dain_end_3` | 다인 | store | dain_laugh |  | 🌅 | *젓가락 끝이 떡볶이 컵 위에서 그대로다.* |
| 239 | `after2_dain_end_3b` | 다인 | store | dain_laugh |  | 🌅 | 당연하지. 나 체육 특기생이었거든. |
| 240 | `after2_dain_end_3c` | {name} | store | dain_laugh |  | 🌅 | *'이었거든'이 끝나자 다인의 젓가락이 종이컵 옆 물컵 |
| 241 | `after2_dain_end_3d` | 다인 | store | dain_laugh |  | 🌅 | 아, 맵다. 물, 물. |
| 242 | `after2_dain_end_3e` | 다인 | store | dain_shy |  | 🌅 | *떡볶이 컵을 {name} 쪽으로 밀어놓고 빈 물병을  |
| 243 | `after2_dain_return` | {name} | school | dain_shy |  | 🌅 | *학교로 돌아오는 길. 교문 앞에 다다랐다.* |
| 244 | `after2_group_dain_companion` | 다인과 동행 | gym | 없음 |  | 🌅 | *체육관과 별관에서 들은 설명이 서로 어긋난다. 다인이 |
| 245 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.* |
| 246 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 247 | `minsu_warn_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문을 나서는데 — 민수가 뒤에서 따라온다. |
| 248 | `minsu_warn_1_b` | 민수 | school | minsu_normal |  | 🌅 | *성큼 따라와 옆에 나란히 선다.* |
| 249 | `minsu_warn_2` | 민수 | school | minsu_smirk |  | 🌅 | 야. |
| 250 | `minsu_warn_3` | {name} | school | minsu_smirk |  | 🌅 | 왜? |
| 251 | `minsu_warn_4` | 민수 | school | minsu_smirk |  | 🌅 | 너 요즘 재밌냐? |
| 252 | `minsu_warn_4_b` | {name} | school | minsu_normal |  | 🌅 | *민수는 교문 밖 횡단보도 신호만 보고 있다.* |
| 253 | `minsu_warn_5` | {name} | school | minsu_smirk |  | 🌅 | 갑자기? |
| 254 | `minsu_warn_6` | 민수 | school | minsu_smirk |  | 🌅 | 서연이, 다인이, 유나. 셋 다 너한테 웃더라. — 뭐 |
| 255 | `minsu_warn_15_b` | 다인 | school | dain_normal | 0.35 | 🌅 | 내일도 내기하자. 종목 바꿔서. |
| 256 | `minsu_warn_15_c` | 서연 | school | seyoun_normal | 0.35 | 🌅 | 내일 점심에 옥상 열어놓을게. 와 |
| 257 | `night2_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저  |
| 258 | `night2_msg_1` | {name} | room_my | 없음 |  |  | *세 명에게서 메시지가 왔다.* |
| 259 | `night2_msg_dain_specific` | 다인 | room_my | dain_normal | 0.35 |  | 야, 오늘 떡볶이 맛있었다. |
| 260 | `night2_msg_dain_specific_2` | 다인 | room_my | dain_normal | 0.35 |  | 내일도 내기하자. 종목 바꿔서. |
| 261 | `night2_msg_seo_general` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 점심에 옥상 열어놓을게. 와 |
| 262 | `night2_msg_yuna_general` | 유나 | room_my | yuna_normal | 0.35 |  | 내일 별관 올 거야? |
| 263 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에  |
| 264 | `night2_choice` | {name} | room_my | 없음 |  |  | *누구에게 먼저 답장할까?* |
| 265 | `night2_reply_dain_1` | {name} | room_my | dain_normal | 0.35 |  | 떡볶이 매웠어 ㅋㅋ |
| 266 | `night2_reply_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | 매운 거 못 먹는 거야? |
| 267 | `night2_reply_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | 내일은 순한 맛으로 가자. |
| 268 | `night2_reply_dain_4` | 다인 | room_my | dain_normal | 0.35 |  | 아 근데 순한 맛은 떡볶이가 아니지ㅋㅋ |
| 269 | `night2_reply_dain_5` | {name} | room_my | dain_normal | 0.35 |  | *또 세 줄 연속이다.* |
| 270 | `night2_reply_dain_react_default` | 다인 | room_my | dain_normal | 0.35 |  | ㅋㅋ 알겠어. 굿나잇! |
| 271 | `night2_dain_freetalk` | 다인 | room_my | dain_normal | 0.35 | 🌙 | 잠깐, 진짜 자기 전에. 오늘 제일 재밌었던 건 뭐였어 |
| 272 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 또 다른 알림이 보인다.* |
| 273 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 보내고 핸드폰을 내려놓았다.* |
| 274 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이,  |
| 275 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 |
| 276 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *메모장에 줄줄이 남은 보내지 않은 문장. '선생님,  |
| 277 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 메모가 마지막이다. 그 아래 39번째에는 제 |
| 278 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 |
| 279 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로 |
| 280 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보 |
| 281 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화 |
| 282 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 |
| 283 | `night2_end_2_b` | {name} | room_my | 없음 |  |  | *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있 |
| 284 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.* |
| 285 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을  |
| 286 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 |
| | **Day 3** | | | | | | |
| 287 | `morning3_start` | {name} | school | 없음 |  |  | *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯 |
| 288 | `morning3_start_2` | {name} | school | 없음 |  |  | *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군 |
| 289 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 290 | `morning3_dain_gate_1` | {name} | school | dain_normal |  |  | *교문 근처에서 다인이 전력으로 달려온다.* |
| 291 | `morning3_dain_gate_cold_1` | 다인 | school | dain_normal |  |  | *다른 친구들과 뛰어간다.* |
| 292 | `morning3_dain_gate_cold_2` | 다인 | school | dain_normal |  |  | 어, 안녕! |
| 293 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실에 들어서자 서연의 펜이 멈추고 다인의 의자가 뒤 |
| 294 | `morning3_react_dain_1` | 서연 | room_school | seyoun_normal |  |  | 아침부터 체력 소모가 심하네. 점심에 도시락 줄까? |
| 295 | `morning3_react_dain_2` | 유나 | room_school | yuna_normal |  |  | *고개를 들지 않은 채 종이 귀퉁이에 짧은 선을 긋는다 |
| 296 | `morning3_date_intro` | {name} | room_school | 없음 |  |  | *1교시가 끝났다. 쉬는 시간마다 누군가 말을 건다.* |
| 297 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *쉬는 시간, 복도로 나왔다. 서연이 먼저 걸음을 맞춘 |
| 298 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | 이번 주말에 시간 있어? 공원에 같이 가자. |
| 299 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끈다. 눈이 마주치 |
| 300 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼  |
| 301 | `morning3_date_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 배구공을 옆구리에 낀 채 이쪽을 보다가 코트로 |
| 302 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다 |
| 303 | `morning3_date_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 접어 둔 쪽지를 꺼내려다 다시 책갈피 사이에  |
| 304 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 305 | `morning3_end` | {name} | room_school | 없음 |  |  | *수업 종료 종이 울리고 곧 점심시간이 된다.* |
| 306 | `morning3_end_b` | 유나 | room_school | yuna_normal |  |  | 맛있네. |
| 307 | `lunch3_start` | {name} | room_school | yuna_normal |  |  | *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. |
| 308 | `lunch3_start_2_b` | 다인 | room_school | dain_normal |  |  | *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가 |
| 309 | `lunch3_meal_1` | 다인 | room_school | dain_laugh |  |  | 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고  |
| 310 | `lunch3_meal_2` | {name} | room_school | dain_laugh |  |  | 그건 내 거... |
| 311 | `lunch3_meal_3` | 서연 | room_school | seyoun_normal |  |  | 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점 |
| 312 | `lunch3_meal_4` | {name} | room_school | seyoun_normal |  |  | 점수 매기지 마. |
| 313 | `lunch3_meal_5` | 서연 | room_school | seyoun_normal |  |  | 10점 만점이야. 나쁜 거 아닌데? |
| 314 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다 |
| 315 | `lunch3_meal_7` | {name} | room_school | seyoun_normal |  |  | 유나, 그건 내가 제일 좋아하는 건데. |
| 316 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임 |
| 317 | `lunch3_meal_8` | {name} | room_school | yuna_bored |  |  | *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다. |
| 318 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. |
| 319 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓 |
| 320 | `lunch3_meal_11` | {name} | room_school | yuna_bored |  |  | *누구에게 줄까?* |
| 321 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *마지막 반찬을 누구에게 줄지 고민한다.* |
| 322 | `lunch3_share_1` | {name} | room_school | yuna_bored |  |  | *다 같이 나눠 먹자고 하자 셋이 웃는다. 웃음이 끊긴 |
| 323 | `lunch3_share_solo` | {name} | room_school | yuna_normal |  |  | *셋이 계란말이를 조금씩 나눠 먹는다. 반으로 갈린 마 |
| 324 | `lunch3_end` | {name} | room_school | 없음 |  |  | *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다 |
| 325 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육 |
| 326 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다 |
| 327 | `after3_choice` | {name} | school_hallway | 없음 |  | 🌅 | *어디로 갈까.* |
| 328 | `after3_reject_for_dain_1` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *웃고 있다. 클립보드의 종이 모서리를 맞춘다.* |
| 329 | `after3_reject_for_dain_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 오늘은 할 일이 좀 있어서. 먼저 갈게. |
| 330 | `after3_reject_for_dain_2b` | {name} | yuna_hideout | 없음 |  | 🌅 | *유나의 아지트로 걸어간다.* |
| 331 | `after3_reject_for_dain_3` | {name} | library_old | yuna_normal | 0.35 | 🌅 | *도서관에 쪽지가 없다. 유나의 가방도 없다. 자리에  |
| 332 | `after3_reject_for_dain_3b` | {name} | school_hallway | 없음 |  | 🌅 | *복도로 돌아왔다. 바닥에 유나가 두고 간 물 자국이  |
| 333 | `after3_dain_1` | {name} | gym | dain_sweat |  | 🌅 | *체육관에서 다인이 혼자 스트레칭 중이다. 가볍게 뛰어 |
| 334 | `after3_dain_3` | {name} | dain_hurt_event1 | 없음 |  | 🌅 | 다인! |
| 335 | `after3_dain_4` | 다인 | gym | dain_sweat |  | 🌅 | 괜찮아. 그냥 좀 삐끗한 거야. |
| 336 | `after3_dain_5` | {name} | gym | dain_sweat |  | 🌅 | 괜찮아 보이진 않는데. |
| 337 | `after3_dain_5_b` | 다인 | gym | dain_sweat |  | 🌅 | 진짜 괜찮아. 별거 아니야. |
| 338 | `after3_dain_6` | 다인 | gym | dain_sad |  | 🌅 | *말을 마친 뒤에야 다인이 크게 웃는다.* |
| 339 | `after3_dain_choice` | 다인 | gym | dain_sad |  | 🌅 | *다인이 벤치에 앉아 무릎 한곳만 계속 문지른다.* |
| 340 | `after3_dain_pity_trap_1` | 다인 | gym | dain_sad |  | 🌅 | *다인은 무릎 위에 손바닥을 붙인 채 나를 올려다본다. |
| 341 | `after3_dain_pity_trap_2` | 다인 | gym | dain_sad |  | 🌅 | 무리. |
| 342 | `after3_dain_pity_trap_3` | 다인 | gym | dain_angry |  | 🌅 | 야. 무리한 거 아니야. 이거 그냥 자세 잘못 잡아서  |
| 343 | `after3_dain_pity_trap_4` | {name} | gym | dain_angry |  | 🌅 | *다인이 가방을 들고 일어서다 오른쪽 다리에 다시 힘을 |
| 344 | `after3_dain_pity_trap_5` | 다인 | gym | dain_sad |  | 🌅 | 너까지 그렇게 보지 마. |
| 345 | `after3_dain_pity_trap_6` | {name} | gym | dain_sad |  | 🌅 | 그렇게라니? |
| 346 | `after3_dain_pity_trap_7` | 다인 | gym | dain_sad |  | 🌅 | 보건실에서 보는 얼굴로. |
| 347 | `after3_dain_pity_trap_8` | 다인 | gym | dain_sad |  | 🌅 | *체육관 문 쪽으로 걸어간다. 평소처럼 뛰지 않는다.  |
| 348 | `after3_dain_pity_trap_9` | 다인 | gym | dain_sad |  | 🌅 | 코치도 그래. 부모도 그래. 다 그래. 너만은 안 그럴 |
| 349 | `after3_dain_pity_trap_10` | {name} | gym | 없음 |  | 🌅 | *체육관 문이 닫힌다. 쾅, 이 아니다. 살그머니. 바 |
| 350 | `after3_dain_end_check` | 다인 | gym | dain_normal |  | 🌅 | *주먹으로 어깨를 가볍게 친다.* |
| 351 | `after3_dain_end` | 다인 | gym | dain_shy |  | 🌅 | *다인의 주먹이 어깨에 닿지만 어제처럼 몸이 밀리지는  |
| 352 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.* |
| 353 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 354 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 355 | `minsu_d3_check` | {name} | school | 없음 |  | 🌅 |  |
| 356 | `minsu_d3_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문 앞에 민수가 서 있다.* |
| 357 | `minsu_d3_2` | 민수 | school | 없음 |  | 🌅 | 봤다. |
| 358 | `minsu_d3_3` | 민수 | school | 없음 |  | 🌅 | 점심때. 그리고 방금 서연 표정도. |
| 359 | `minsu_d3_4` | 민수 | school | 없음 |  | 🌅 | 어제 내가 뭐랬냐. 나중에 셋 다 울면 네 탓이라고 했 |
| 360 | `minsu_d3_5` | 민수 | school | 없음 |  | 🌅 | 옆에서 보기 좀 힘들다. 걔들 다 좋은 애들이야. 네가 |
| 361 | `minsu_d3_5b` | 민수 | school | 없음 |  | 🌅 | *민수는 빨대 포장지를 끝까지 접어 테이블 위에 내려놓 |
| 362 | `minsu_d3_6` | {name} | school | 없음 |  | 🌅 | 맞아. |
| 363 | `minsu_d3_6b` | 민수 | school | 없음 |  | 🌅 | 전 학교에서 뭔 일 있었는지 안 물어볼게. 근데 하나만 |
| 364 | `minsu_d3_7` | 민수 | school | 없음 |  | 🌅 | 거절도 배려야. 안 되는 관계에 계속 여지 주는 것보다 |
| 365 | `minsu_d3_8` | {name} | school | 없음 |  | 🌅 | *거절도 배려다. 전 학교에서 나는 소정이에게 고백할  |
| 366 | `minsu_d3_9` | 민수 | school | 없음 |  | 🌅 | *민수는 더 말하지 않고 끝까지 접은 빨대 포장지를 내 |
| 367 | `minsu_d3_10` | 민수 | school | 없음 |  | 🌅 | 내일 학교에서 보자. 진지하게 생각해. |
| 368 | `night3_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 가방을 의자에 걸어 둔다.* |
| 369 | `night3_start_2` | {name} | room_my | 없음 |  |  | *책상 위에 엎어 둔 핸드폰 화면을 켠다.* |
| 370 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *읽지 않은 메시지가 떠 있다.* |
| 371 | `night3_faithful_msg_dain_1` | 다인 | room_my | dain_normal | 0.35 |  | 발목 괜찮냐고 물어볼 거면 직접 와서 물어봐ㅋㅋ |
| 372 | `night3_faithful_msg_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | 아 근데 고마워 |
| 373 | `night3_faithful_msg_dain_3` | {name} | room_my | dain_normal | 0.35 |  | *'ㅋㅋ'와 다음 문장 사이가 비어 있다. 다인의 새  |
| 374 | `night3_dream_1` | {name} | school | 없음 |  |  | *꿈속에서 누군가와 나란히 걷는다. 얼굴은 보이지 않고 |
| 375 | `night3_dream_2_b` | {name} | school | 없음 |  |  | *메모장을 닫았다. 내일 보낼 문장은 아직 없다.* |
| 376 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *커튼 사이로 들어온 아침 햇살에 눈을 뜬다. 핸드폰  |
| 377 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *'삭제하시겠습니까?' 확인 창이 뜬다. 손가락이 버튼 |
| 378 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *1초 동안 화면을 내려다본다. 소정이 책상의 낙서와  |
| 379 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *그래. 삭제 버튼에 올린 손가락으로 화면을 누른다.* |
| 380 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼을 누르지 않고 사진을 새 폴더로 옮긴다.  |
| 381 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *'거절도 네가 해야 할 일이야.' 민수의 말이 떠오른 |
| 382 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *갤러리에서 소정이 사진이 사라지고 빈칸만 남는다.* |
| 383 | `night3_faithful_reflect_4_b` | {name} | room_my | 없음 |  |  | *빈 앨범 썸네일 위를 엄지로 문지른다.* |
| 384 | `night3_faithful_reflect_4_c` | {name} | room_my | 없음 |  |  | *핸드폰을 덮자 검은 화면에 갤러리의 빈칸이 겹쳐 보인 |
| 385 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *알람이 울리기 전에 눈을 떴다.* |
| 386 | `night3_dream_dain_bonus` | {name} | room_my | 없음 |  |  | *눈을 감자 체육관 바닥에 공 튀는 소리가 떠오른다.* |
| 387 | `night3_end` | {name} | room_my | 없음 |  |  | *방 불을 끄고 핸드폰을 엎어 둔다.* |
| | **Day 4** | | | | | | |
| 388 | `morning4_start` | {name} | room_my | 없음 |  |  | *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다 |
| 389 | `morning4_nightmare_check` |  | room_my | 없음 |  |  |  |
| 390 | `minsu_cheer_1` | {name} | room_my | 없음 |  |  | *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.* |
| 391 | `minsu_cheer_1_b` | 민수 | room_my | minsu_normal | 0.35 |  | *야 오늘 데이트라며?* |
| 392 | `minsu_cheer_1_c` | {name} | room_my | minsu_normal | 0.35 |  | *어떻게 알았어* |
| 393 | `minsu_cheer_1_d` | 민수 | room_my | minsu_normal | 0.35 |  | *다인이가 단톡방에 올림. 내일 약속 있음, 이라고* |
| 394 | `minsu_cheer_2` | 민수 | room_my | minsu_normal | 0.35 |  | 잘하고 와ㅋㅋ |
| 395 | `minsu_cheer_3` | {name} | room_my | minsu_normal | 0.35 |  | 알아. |
| 396 | `minsu_cheer_4_branch` |  | room_my | 없음 |  |  |  |
| 397 | `minsu_cheer_4_ins_single` | {name} | room_my | minsu_normal | 0.35 |  | *핸드폰 캘린더를 본다. 오늘 약속은 하나뿐이다.* |
| 398 | `morning4_start_2` | {name} | room_my | 없음 |  |  | *심호흡하고 약속 메시지를 다시 확인한다.* |
| 399 | `morning4_dain_msg_1` | 다인 | room_my | dain_sweat | 0.35 |  | 오늘이다. 체육관 앞 저녁 6시. 아, 왜 이렇게 떨리 |
| 400 | `morning4_hidden_check` | {name} | room_my | 없음 |  |  | *주말 아침, 학교 앞 사거리에서 신호를 기다린다.* |
| 401 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 402 | `morning4_end` | {name} | room_my | 없음 |  |  | *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 |
| 403 | `date_dain_1` | {name} | gym | dain_laugh |  |  | *체육관 앞. 다인이 뛰어온다. 캡모자에 운동복.* |
| 404 | `date_dain_low` | 다인 | gym | dain_normal |  |  | *체육관 앞에서 다인이 공 가방 끈을 고쳐 멘다.* 오 |
| 405 | `day4_night_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 옷소매에 공원 흙과 학교 먼지가 조금 |
| 406 | `day4_night_branch` | 시스템 | room_my | 없음 |  |  |  |
| 407 | `day4_student_night_branch` |  | room_my | 없음 |  |  |  |
| 408 | `day4_night_regret` | {name} | room_my | 없음 |  |  | *집으로 돌아온 뒤에도 채팅창에는 입력하다 만 문장이  |
| 409 | `day4_night_regret_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 410 | `day4_night_regret_msg_dain` | 다인 | room_my | dain_normal | 0.35 |  | 야, 오늘 재밌었다. 나 혼자 들뜬 거 아니었지? |
| 411 | `day4_night_regret_reply` | {name} | room_my | 없음 |  |  | *답장을 쓰다 지운다. 입력창에는 받침 하나만 남았다가 |
| 412 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 413 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *알람을 일요일 오전으로 맞추고 방 불을 끈다. 전하지 |
| 414 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안 시계가 자정 쪽으로 넘어간다. 휴대폰 화면도  |
| | **Day 5** | | | | | | |
| 415 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소 |
| 416 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 417 | `morning5_start_b` | {name} | room_school | 없음 |  |  | *교실에 들어서자 세 가지가 한꺼번에 눈에 들어온다.  |
| 418 | `morning5_start_2_b` | {name} | room_school | 없음 |  |  | *책상 위에 쪽지가 놓여 있다. 서연의 글씨.* |
| 419 | `morning5_mood_check` | 시스템 | room_school | 없음 |  |  |  |
| 420 | `morning5_mood_low` | {name} | room_school | 없음 |  |  | 마지막 날. 잠금화면에 남은 이름 셋을 차례로 누른다. |
| 421 | `morning5_gate` | {name} | school | 없음 |  |  | *교문 앞에서 소매를 걷어 올린다. 손목에 남던 붉은  |
| 422 | `morning5_seo_note_1` | {name} | room_school | seyoun_normal |  |  | *책상 위에 쪽지가 놓여 있다. 서연의 글씨. — '오 |
| 423 | `morning5_seo_note_1_b` | {name} | school_hallway | 없음 |  |  | *복도 문예부 전시 코너를 지나다 게시판의 빈 압정 네 |
| 424 | `morning5_seo_note_1_c` | {name} | school_hallway | 없음 |  |  | *게시판에 단편소설이 붙어 있다. 제목: '도서관에서  |
| 425 | `morning5_yuna_story_1` | {name} | school_hallway | yuna_normal |  |  | *소설 속 인물은 도서관에서 잠든 누군가의 어깨에 담요 |
| 426 | `morning5_yuna_story_2` | {name} | school_hallway | 없음 |  |  | *마지막 문장. '그 사람이 눈을 떴을 때, 나는 이미 |
| 427 | `morning5_yuna_story_4` | {name} | school_hallway | yuna_normal |  |  | *게시판 아래 구석에는 작은 글씨가 남아 있다. '이건 |
| 428 | `morning5_return_class` | {name} | room_school | dain_normal |  |  | *교실로 돌아오니 다인이 기다리고 있다.* |
| 429 | `morning5_dain_1` | 다인 | room_school | dain_normal |  |  | 야, 오늘 체육 이벤트 파트너로 너 써놨어. |
| 430 | `morning5_dain_1_b` | {name} | room_school | dain_normal |  |  | 허락도 없이? |
| 431 | `morning5_dain_2` | 다인 | room_school | dain_laugh |  |  | 늦으면 화낸다? |
| 432 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *행사 준비 시간. 복도를 걷는데 — 빈 교실 앞을 지 |
| 433 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *행사 중간 쉬는 시간. 보건실 앞을 지나간다.* |
| 434 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 435 | `morning5_end` | {name} | room_school | 없음 |  |  | *세 방향에서 온 쪽지와 알림을 책상 위에 나란히 둔다 |
| 436 | `tour_dain_1_check` | {name} | gym | 없음 |  |  | *체육관으로 간다.* |
| 437 | `tour_dain_low` | 다인 | gym | dain_normal |  |  | *체육관 문 앞에서 다인을 만난다. 다인은 공을 들고  |
| 438 | `after5_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 439 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *행사가 끝나갈 무렵, 복도에서 선택하지 않은 두 사람 |
| 440 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 441 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다.* |
| 442 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다. 서연은 잠시 멈췄다가 고개 |
| 443 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 444 | `after5_farewell_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나가 다가온다. 아무 말 없이 책 한 |
| 445 | `after5_farewell_yuna_low` | 유나 | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나와 눈이 마주친다. 유나는 들고 있 |
| 446 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 447 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *석양이 교정 창문마다 걸린다. 방송실에서 행사 종료  |
| 448 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 449 | `after5_last_chance_1` | {name} | school_back | 없음 |  | 🌅 | *행사장 스피커 전원이 꺼진다. 갈림길 안내판 아래에서 |
| 450 | `after5_last_chance_2` | {name} | school_back | 없음 |  | 🌅 | *주머니 속 휴대폰을 꺼낸다. 검은 화면에 행사 현수막 |
| 451 | `after5_last_chance_route_check` |  | school_back | 없음 |  | 🌅 |  |
| 452 | `after5_last_chance_dain_aff_check` |  | school_back | 없음 |  | 🌅 |  |
| 453 | `after5_last_chance_dain_low_1` | {name} | school_back | 없음 |  | 🌅 | 다인아. |
| 454 | `after5_last_chance_dain_low_2` | 다인 | school_back | dain_sad |  | 🌅 | *한 걸음 지나친 뒤 돌아온다. 배구공을 가슴 앞에 안 |
| 455 | `after5_last_chance_choice` | {name} | school_back | 없음 |  | 🌅 | *손바닥 안에서 핸드폰이 눌린다.* |
| 456 | `after5_confess_yes` | {name} | school_back | 없음 |  | 🌅 | *휴대폰을 주머니에 넣고 이름을 부른다.* |
| 457 | `after5_confess_yes_2` | {name} | school_back | 없음 |  | 🌅 | 나, 너한테 할 말이 있어. |
| 458 | `after5_confess_aff_dain` |  | school_back | 없음 |  | 🌅 |  |
| 459 | `after5_confess_react_dain_low` | 다인 | school_back | dain_sad |  | 🌅 | *배구공의 홈을 엄지로 따라간다.* 들었어. 바로 웃기 |
| 460 | `after5_confess_fail_walk_1` | {name} | school_back | 없음 |  | 🌅 | *해가 더 내려앉는다. 같은 쪽으로 걷기만 한다.* |
| 461 | `after5_confess_fail_walk_2` | {name} | park | 없음 |  | 🌅 | *답을 못 낸 채 공원 쪽으로 걸었다.* |
| 462 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 463 | `ending_last_chance_resolve` | 시스템 | park | 없음 |  |  |  |
| 464 | `ending_confessed_aff_check` | 시스템 | park | 없음 |  |  |  |
| 465 | `ending_confessed_aff_dain` | 시스템 | gym | 없음 |  |  |  |
| 466 | `day5_ending_confess_fail` | {name} | park | 없음 |  |  | *공원까지 걸어와 겨우 말했다. 대답을 기다리는 동안  |
| 467 | `confess_fail_cg_dain` | 다인 | ending_confess_fail_dain | 없음 |  |  | *눈가를 훔치고 웃어 보이려 하지만 목소리는 분명하다. |
| 468 | `confess_fail_1` | {name} | ending_bittersweet | 없음 |  |  | *며칠 뒤, 비 오는 학교 정문. 우산 아래서 멀어지는 |
| 469 | `confess_fail_2` | {name} | ending_bittersweet | 없음 |  |  | *그 자리에 선 채 대화방을 연다. 썼다 지운 끝에 한 |
| 470 | `confess_fail_3` | {name} | ending_bittersweet | 없음 |  |  | *'알겠어. 답해줘서 고마워.'를 보내고 휴대폰을 내려 |
| 471 | `confess_fail_4` | {name} | ending_bittersweet | 없음 |  |  | *읽음 표시가 붙는다. 답장은 오지 않는다. 더 보내지 |
| 472 | `confess_fail_5` | 시스템 | ending_bittersweet | 없음 |  |  | ─── FRIEND END (고백 실패) ─── |
| 473 | `day5_credits` |  | school | 없음 |  |  |  |
| 474 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### day5_dain_ending_freetalk_bittersweet

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_dain_choice`: (선택)
- `after_end`: (선택)
- `after_hidden_nurse_choice`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_seo_choice`: (선택)
- `after2_choice`: (선택)
- `night2_choice`: (선택)
- `morning3_date_dain_choice`: (선택)
- `lunch3_choice`: (선택)
- `after3_dain_choice`: (선택)
- `after3_dain_dilemma_final`: (선택)
- `date_dain_compliment_choice`: (선택)
- `confess_dain_choice`: (선택)
- `wall_dain_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=5 유나=-8 다인=36 담임=0 보건=0

<details>
<summary>씬 타임라인 (593씬)</summary>

| # | 씬 ID | 화자 | 배경 | 캐릭터 | OP | 밤 | 대사 (앞 30자) |
|---|--------|------|------|--------|----|----|----------------|
| | **Day 1** | | | | | | |
| 1 | `start` | {name} | school | 없음 |  |  | *4월의 교문 앞. 밟힌 꽃잎이 드문드문 붙어 있다.  |
| 2 | `start_3` | {name} | school | 없음 |  |  | *주머니에서 핸드폰이 울리고 예전 학교 단체 카톡방에  |
| 3 | `name_input_scene` | 시스템 | school | 없음 |  |  | 전학생, 당신의 이름은? |
| 4 | `gate_1` | {name} | school | 없음 |  |  | *낯선 교문 앞, 내 교복만 아직 접힌 선이 선명하다. |
| 5 | `seoyeon_meet_1` | 서연 | school | seyoun_normal |  |  | 전학생? {name} 맞지? |
| 6 | `seoyeon_meet_2` | 서연 | school | seyoun_normal |  |  | *{name}의 이름을 한 번 더 확인한 뒤 클립보드  |
| 7 | `seoyeon_meet_3` | {name} | school | seyoun_normal |  |  | 맞는데. 어떻게 알았어? |
| 8 | `seoyeon_meet_4` | 서연 | school | seyoun_normal |  |  | 학생회장. 전학생 안내는 내 담당이야. |
| 9 | `seoyeon_meet_5` | 서연 | school | seyoun_normal |  |  | 따라와. 15분 안에 끝낼게. |
| 10 | `seoyeon_meet_6` | {name} | school | seyoun_normal |  |  | 학생회장이 직접? 과분한데. |
| 11 | `seoyeon_meet_7` | 서연 | school | seyoun_normal |  |  | 과분한 건지 아닌 건지는 내가 정해. |
| 12 | `seoyeon_meet_8` | {name} | school | seyoun_normal |  |  | *서연은 이미 교문 안쪽으로 걸음을 옮겼다. 안내 파일 |
| 13 | `seoyeon_choice` | {name} | school | seyoun_normal |  |  | *어떻게 반응할까?* |
| 14 | `choice_flirt_1` | 서연 | school | seyoun_normal |  |  | *서연의 구두가 반 바퀴 돌아선다. 안경테 위로 한쪽  |
| 15 | `choice_flirt_2` | 서연 | school | seyoun_laugh |  |  | 첫날부터 말은 잘하네. 이름은 금방 외우겠다. |
| 16 | `choice_flirt_3` | {name} | school | seyoun_laugh |  |  | 점수제야? |
| 17 | `choice_flirt_4` | 서연 | school | seyoun_normal |  |  | 아직 분위기 파악은 안 됐나 봐. 나쁘진 않아. |
| 18 | `choice_flirt_5` | {name} | school | seyoun_normal |  |  | 영광인데? |
| 19 | `choice_flirt_6` | 서연 | school | seyoun_normal |  |  | 아직 영광인지 재앙인지 모르는 거지. |
| 20 | `choice_flirt_7` | 서연 | school | seyoun_laugh |  |  | *앞서 걷는다. 한 번 뒤돌아보고 {name}의 발소리 |
| 21 | `hallway_1` | 서연 | school_hallway | seyoun_back |  |  | *복도를 앞서 걷는다. 마주치는 학생들이 먼저 인사할  |
| 22 | `hallway_3` | 서연 | school_hallway | seyoun_normal |  |  | 3학년 건물은 여기, 저쪽이 도서관. 매점은 지하. |
| 23 | `hallway_4` | 서연 | school_hallway | seyoun_normal |  |  | *주머니에서 열쇠를 꺼내 손바닥 위에서 짤랑거린다.* |
| 24 | `hallway_5` | 서연 | school_hallway | seyoun_normal |  |  | 옥상은 원래 잠겨 있어. 학생회장 특권이지. |
| 25 | `hallway_6` | {name} | school_hallway | seyoun_normal |  |  | 비밀 아지트라도 있어? |
| 26 | `hallway_6_b` | 서연 | school_hallway | seyoun_normal |  |  | *열쇠고리 소리가 뚝 끊긴다.* 눈치 빠르네. |
| 27 | `hallway_6_c` | 서연 | school_hallway | seyoun_normal |  |  | *대답 대신 열쇠를 다시 주머니에 넣는다.* |
| 28 | `hallway_7` | 서연 | school_hallway | seyoun_normal |  |  | 아, 점심. 밥 어디서 먹는지 모르지? 같이 가. |
| 29 | `hallway_8` | {name} | school_hallway | seyoun_shy |  |  | *서연은 교실 앞에 서서 문패를 가리킨다.* |
| 30 | `hallway_10` | 서연 | school_hallway | seyoun_normal |  |  | 여기야. 들어가 봐. |
| 31 | `hallway_11` | {name} | school_hallway | seyoun_normal |  |  | 점심때도 안내해 주는 거야? |
| 32 | `hallway_12` | 서연 | school_hallway | seyoun_normal |  |  | 그건 네가 잘하면. |
| 33 | `hallway_13` | 서연 | school_hallway | seyoun_back |  |  | *돌아선 서연이 클립보드를 든 손만 어깨 높이로 한 번 |
| 34 | `hallway_13_b` | {name} | school_hallway | seyoun_back |  |  | *복도 끝으로 멀어질 때까지 걸음이 흐트러지지 않았다. |
| 35 | `classroom_1` | {name} | room_school | 없음 |  |  | *교실 문을 열자 소음이 뚝 끊기고 가까운 책상 의자  |
| 36 | `classroom_2_b` | {name} | room_school | teacher_normal |  |  | *교탁 앞에 담임선생님이 서 있다. 20대 후반. 가디 |
| 37 | `classroom_3` | 담임 | room_school | teacher_normal |  |  | 자, 오늘부터 우리 반에 들어온 전학생이야. 자기소개  |
| 38 | `classroom_3_b` | {name} | room_school | teacher_normal |  |  | {name}입니다. 잘 부탁드립니다. *담임이 출석부의 |
| 39 | `classroom_5_b` | 담임 | room_school | teacher_normal |  |  | 그래, {name}. 외웠어. *출석부에 이름을 덧그으 |
| 40 | `classroom_5_c` | {name} | room_school | teacher_normal |  |  | *담임의 혼잣말은 교실 소음에 묻힌다. 교실 한쪽에서  |
| 41 | `classroom_dain_1` | 다인 | room_school | dain_normal |  |  | 오, 전학생. 우리 반에 새 얼굴 들어왔네! |
| 42 | `classroom_dain_2` | {name} | room_school | dain_normal |  |  | *갈색 숏컷에 배구부 유니폼. 자리에서 반쯤 일어나 손 |
| 43 | `classroom_dain_3` | 담임 | room_school | teacher_normal |  |  | 다인아, 목소리 낮춰. 그리고 교실에서는 유니폼 좀 그 |
| 44 | `classroom_dain_4` | 다인 | room_school | dain_normal |  |  | 쌤, 이게 제일 편하다니까요. 아무튼 전학생, 반갑다. |
| 45 | `classroom_dain_5` | {name} | room_school | dain_normal |  |  | *교실 몇 군데서 웃음이 터진다. 다인은 손을 더 높이 |
| 46 | `classroom_dain_5_b` | 담임선생님 | room_school | teacher_normal |  |  | *출석부 모서리로 교탁을 두 번 두드리고 다인 쪽을 보 |
| 47 | `classroom_dain_5_c` | 담임 | room_school | teacher_normal |  |  | 에너지 좀 아껴. 아직 1교시도 안 시작했어. |
| 48 | `classroom_dain_5_d` | 담임선생님 | room_school | teacher_angry |  |  | *담임은 출석부를 넘긴다.* |
| 49 | `classroom_yuna_1` | {name} | room_school | yuna_bored |  |  | *창가 맨 뒤쪽의 한 여학생은 턱을 괸 채 창밖만 본다 |
| 50 | `classroom_yuna_2` | {name} | room_school | yuna_bored |  |  | *은백색 머리. 붉은 눈. 팔의 타투. 창가 맨 뒤 자 |
| 51 | `classroom_yuna_4` | {name} | room_school | yuna_bored |  |  | *앞줄에서 누군가 속삭인다. '쟤한테 말 걸지 마. 무 |
| 52 | `classroom_seat_1` | 담임선생님 | room_school | teacher_normal |  |  | *빈자리를 가리킨다.* |
| 53 | `classroom_seat_2` | {name} | room_school | dain_normal |  |  | *다인 옆자리다. 의자에 앉기도 전에 다인이 내 책상  |
| 54 | `classroom_minsu_1` | {name} | room_school | minsu_normal |  |  | *자리에 앉으려는데 — 앞자리 남학생이 돌아본다.* |
| 55 | `classroom_minsu_2` | 민수 | room_school | minsu_smirk |  |  | 야, 전학생. 환영한다. — 그리고 조심해. |
| 56 | `classroom_minsu_3` | {name} | room_school | minsu_smirk |  |  | 뭘? |
| 57 | `classroom_minsu_2_b` | 민수 | room_school | minsu_normal |  |  | *다인 쪽으로 턱짓한다.* 체력 관리. |
| 58 | `classroom_dain_talk_1` | {name} | room_school | minsu_normal |  |  | *앞자리 이름표에는 '민수'라고 적혀 있었다.* |
| 59 | `classroom_dain_talk_2` | {name} | room_school | dain_normal |  |  | *자리에 앉자마자 다인이 상체를 기울인다. 책상 두 개 |
| 60 | `classroom_dain_talk_3` | 다인 | room_school | dain_normal |  |  | 야, {name}. 운동 좋아해? |
| 61 | `classroom_dain_talk_4` | {name} | room_school | dain_normal |  |  | 갑자기? |
| 62 | `classroom_dain_talk_5` | 다인 | room_school | dain_normal |  |  | 그냥. 방과후에 리시브 연습 상대가 필요해서. 서브 넣 |
| 63 | `classroom_dain_talk_6` | {name} | room_school | dain_normal |  |  | 나 볼 머신이야? |
| 64 | `classroom_dain_talk_7` | 다인 | room_school | dain_laugh |  |  | 그래도 볼 머신보단 낫겠지. 아마. |
| 65 | `classroom_dain_talk_8` | {name} | room_school | dain_laugh |  |  | *'아마' 뒤에 다인의 시선이 볼 머신 쪽으로 간다.  |
| 66 | `classroom_yuna_note_1` | {name} | room_school | yuna_bored |  |  | *접힌 쪽지가 책상 위로 미끄러져 온다. 뒤를 돌아봐도 |
| 67 | `classroom_yuna_note_3` | {name} | room_school | yuna_bored |  |  | *'시끄러운 자리 걸렸네. — 유나' 연보라색 잉크.  |
| 68 | `classroom_yuna_note_5` | {name} | room_school | yuna_bored |  |  | *유나 쪽을 보자 시선은 여전히 창밖이고 손만 책상 아 |
| 69 | `classroom_yuna_note_6` | {name} | room_school | yuna_bored |  |  | *수업 종이 울리자 유나는 다시 창밖을 보고 다인은 벌 |
| 70 | `lunch_start` | {name} | school_hallway | 없음 |  |  | *점심시간. 학생들로 찬 복도 끝에는 서연의 도시락 가 |
| 71 | `lunch_start_4` | {name} | school_hallway | seyoun_normal |  |  | *복도 끝에서 서연이 눈을 맞추더니 옥상 쪽을 손으로  |
| 72 | `lunch_start_4_b` | {name} | school_hallway | dain_normal |  |  | *옆에서 다인이 팔목을 낚아챈다.* |
| 73 | `lunch_start_5` | 다인 | school_hallway | dain_normal |  |  | 야, 밥 먹었어? 매점 가자. 빵 내기하자, 진 사람이 |
| 74 | `lunch_start_6` | {name} | school_hallway | yuna_normal |  |  | *유나는 가방만 들고 교실을 빠져나가 도서관 방향으로  |
| 75 | `lunch_start_7` | {name} | school_hallway | 없음 |  |  | *복도는 세 갈래다. 옥상, 매점, 도서관. 주머니 안 |
| 76 | `lunch_choice` | {name} | school_hallway | 없음 |  |  | *누구를 따라갈까?* |
| 77 | `lunch_dain_1` | 다인 | store | dain_laugh |  |  | 도착. 여기가 매점이야. 일단 고르고 봐. |
| 78 | `lunch_dain_1_aff_default` | 다인 | store | dain_normal |  |  | *매점 안은 점심시간이라 북적거린다. 빵 냄새랑 우유  |
| 79 | `lunch_dain_2` | 다인 | store | dain_normal |  |  | 소보로빵에 딸기우유. 이 조합은 실패한 적 없어. |
| 80 | `lunch_dain_3` | {name} | store | dain_normal |  |  | 근데 진 사람이 사준다며. 뭘 하는 거야? |
| 81 | `lunch_dain_4` | 다인 | store | dain_normal |  |  | 가위바위보. 간단하지. |
| 82 | `lunch_dain_5` | {name} | store | dain_normal |  |  | 당연한 건 아닌데. |
| 83 | `lunch_dain_6` | 다인 | store | dain_normal |  |  | 안 하면 네가 사는 걸로 친다? |
| 84 | `lunch_dain_7` | {name} | store | dain_normal |  |  | 하자. |
| 85 | `lunch_dain_8` | {name} | store | dain_normal |  |  | *가위바위보.* |
| 86 | `lunch_dain_9` | 다인 | store | dain_normal |  |  | 가위— 바위— 보! |
| 87 | `lunch_dain_10` | {name} | store | dain_normal |  |  | *가위. 바위. 보. — 다인이 졌다.* |
| 88 | `lunch_dain_11` | 다인 | store | dain_normal |  |  | 어? 나 졌네. 한 판 더. |
| 89 | `lunch_dain_12` | {name} | store | dain_pout |  |  | 약속은 약속이지. |
| 90 | `lunch_dain_12_b` | 다인 | store | dain_pout |  |  | 아, 알았어. 내가 산다. 이모, 소보로 두 개요. |
| 91 | `lunch_dain_14` | 다인 | store | dain_pout |  |  | *동전을 카운터에 탁탁 놓고 소보로 두 개를 받아 든다 |
| 92 | `lunch_dain_15` | {name} | store | dain_normal |  |  | *매점 한쪽 벤치에 앉아 빵을 먹는다.* |
| 93 | `lunch_dain_16` | 다인 | store | dain_normal |  |  | *빵 봉지를 뜯는다.* 야, 너 운동 진짜 안 해? |
| 94 | `lunch_dain_17` | {name} | store | dain_normal |  |  | 왜, 내 체력이 걱정돼? |
| 95 | `lunch_dain_18` | 다인 | store | dain_laugh |  |  | 아니. 나랑 다니려면 체력부터 봐야지. |
| 96 | `lunch_dain_19` | {name} | store | dain_laugh |  |  | 자기 PR인 줄 알았어. |
| 97 | `lunch_dain_20` | 다인 | store | dain_laugh |  |  | PR? 그게 뭔데. |
| 98 | `lunch_dain_21` | {name} | store | dain_normal |  |  | Personal Record. 운동할 때 쓰는 말인데. |
| 99 | `lunch_dain_22` | 다인 | store | dain_normal |  |  | *딸기우유 팩 옆면이 손가락에 눌려 우그러진다.* |
| 100 | `lunch_dain_23` | 다인 | store | dain_laugh |  |  | 오, 그거 알아? 너 운동 쪽 좀 아네? |
| 101 | `lunch_dain_choice` | 다인 | store | dain_laugh |  |  | *빨대를 문 채 상체를 가까이 기울인다.* |
| 102 | `lunch_dain_c1_1` | 다인 | store | dain_laugh |  |  | 좋아. 그럼 방과후 체육관 와. 워밍업부터 보자, 콜? |
| 103 | `lunch_dain_c1_2` | {name} | store | dain_laugh |  |  | *다인의 웃음소리가 매점 소음 위로 튄다. 의자가 뒤로 |
| 104 | `lunch_dain_after` | {name} | store | dain_laugh |  |  | *빵을 다 먹고 일어서는데.* |
| 105 | `lunch_dain_after_2` | 다인 | store | dain_normal |  |  | 야, {name}. |
| 106 | `lunch_dain_after_3` | {name} | store | dain_normal |  |  | 응? |
| 107 | `lunch_dain_after_4` | 다인 | store | dain_normal |  |  | 전학 와서 첫 식사 파트너가 나다? 나름 역사적인데. |
| 108 | `lunch_dain_after_5` | 다인 | store | dain_normal |  |  | *주먹으로 {name}의 어깨를 툭 치고 그대로 한 번 |
| 109 | `lunch_dain_freetalk` | 다인 | store | dain_normal |  |  | *빵 봉지를 접어 주머니에 넣고 벤치 등받이에 기댄다. |
| 110 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *종이 울린다. 점심시간이 끝났다.* |
| 111 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에 |
| 112 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 113 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창 |
| 114 | `after_kakao_5` | {name} | school_hallway | 없음 |  | 🌅 | *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른 |
| 115 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록  |
| 116 | `after1_jealousy_dain_1` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 점심때 매점에서 다인이랑 같이 있는 거 봤는데. 적응  |
| 117 | `after1_jealousy_dain_2` | {name} | school_hallway | seyoun_laugh |  | 🌅 | *서연은 클립보드를 가슴 앞에 세운 채 답을 기다린다. |
| 118 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *복도를 계속 걷는다.* |
| 119 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도를 걷는데 뒤에서 쿵쿵 발소리.* |
| 120 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 조심! |
| 121 | `after_miss_dain_3` | {name} | school_hallway | dain_normal |  | 🌅 | *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 |
| 122 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 피했다? 반사신경 괜찮은데. |
| 123 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 넌 복도에서 왜 전력질주야? |
| 124 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 늦었거든! 체육관 가야 해. 내일 보자, 전학생! |
| 125 | `after_miss_dain_6_b` | {name} | school_hallway | dain_laugh |  | 🌅 | *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을  |
| 126 | `after_miss_dain_7` | {name} | school_hallway | dain_laugh |  | 🌅 | *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아 |
| 127 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으 |
| 128 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 이거 떨어뜨렸어. |
| 129 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피 |
| 130 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌  |
| 131 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 고마워. |
| 132 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피를 책등 사이에 끼우고 돌아선다.* |
| 133 | `after_miss_yuna_4` | {name} | library_old | yuna_normal |  | 🌅 | *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 |
| 134 | `after_miss_seoyeon_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *하교하려는데 복도에서 서연과 마주친다.* |
| 135 | `after_miss_seoyeon_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 아까 어디 갔어? |
| 136 | `after_miss_seoyeon_3` | {name} | school_hallway | seyoun_normal |  | 🌅 | 어디라니? |
| 137 | `after_miss_seoyeon_4` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 옥상 열어놨는데 안 왔네. — 전학생, 배짱이 있어. |
| 138 | `after_miss_seoyeon_5` | {name} | school_hallway | seyoun_normal |  | 🌅 | 기다린 거야? |
| 139 | `after_miss_seoyeon_6` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 바람 쐬러 올라간 건데 문이 열려 있길래. |
| 140 | `after_miss_seoyeon_7` | {name} | school_hallway | seyoun_normal |  | 🌅 | *서연의 클립보드 맨 위에 내 이름이 남아 있다. 체크 |
| 141 | `after_miss_seoyeon_8` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 내일은 빠지지 마. |
| 142 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든 |
| 143 | `after_hidden_nurse_intro` | {name} | school_hallway | 없음 |  | 🌅 | *복도 형광등이 흔들려 보여 벽을 짚자 손바닥에 차가운 |
| 144 | `after_hidden_nurse_choice` | {name} | school_hallway | 없음 |  | 🌅 | *아침부터 계속 사람들 틈에 있었다. 발걸음이 보건실  |
| 145 | `after_nurse_skip` | {name} | school_hallway | 없음 |  | 🌅 | *교문 쪽으로 걷는다.* |
| 146 | `night_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄 |
| 147 | `night_start_3` | {name} | room_my | 없음 |  |  | *핸드폰이 울린다. 학교 메신저.* |
| 148 | `night_msg_dain_1` | 다인 | room_my | dain_normal | 0.35 |  | *가위바위보 리벤지 내일이다* |
| 149 | `night_msg_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | *내일은 리벤지다 ㅋㅋ* |
| 150 | `night_msg_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | *오늘 빵값 아직도 아깝다. 진짜.* |
| 151 | `night_msg_dain_4` | {name} | room_my | dain_normal | 0.35 |  | *세 줄이 거의 동시에 도착했다. 답장창에는 벌써 'ㅋ |
| 152 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 다른 알림이 보인다.* |
| 153 | `night_late_transition` | {name} | room_my | 없음 |  |  | *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시 |
| 154 | `night_late_branch` | {name} | room_my | 없음 |  |  | *화면이 밝아진다.* |
| 155 | `night_dain_late_1` | 다인 | room_my | dain_normal | 0.35 |  | *야 아직 안 잤지?* |
| 156 | `night_dain_late_2` | 다인 | room_my | dain_normal | 0.35 |  | *내일 아침 운동 같이 할 사람 구한다* |
| 157 | `night_dain_late_3` | 다인 | room_my | dain_normal | 0.35 |  | *거절은 안 받음 ㅋㅋ* |
| 158 | `night_dain_late_4` | {name} | room_my | dain_normal | 0.35 |  | *답장창에는 이미 '콜'이 찍혀 있다.* |
| 159 | `night_dain_late_4_b` | {name} | room_my | dain_normal | 0.35 |  | *다인의 메시지 아래에 이모티콘이 줄줄이 붙어 있다.  |
| 160 | `night_end_1` | {name} | room_my | 없음 |  |  | *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교 |
| 161 | `night_end_3` | {name} | room_my | 없음 |  |  | *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을  |
| | **Day 2** | | | | | | |
| 162 | `morning2_start` | {name} | room_school | 없음 |  |  | *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.* |
| 163 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 164 | `morning2_greet_dain_1` | 다인 | room_school | dain_laugh |  |  | 야! 어제 재밌었다, 오늘도 같이 뭐 하자! |
| 165 | `morning2_greet_dain_2` | 다인 | room_school | dain_laugh |  |  | *뒤에서 어깨를 탁 친다.* |
| 166 | `morning2_greet_dain_others` | 서연 | room_school | seyoun_normal |  |  | *클립보드를 넘기며 지나간다.* |
| 167 | `morning2_greet_dain_others_seo` | 서연 | room_school | seyoun_normal |  |  | 에너지 좋다. |
| 168 | `morning2_greet_dain_others_yuna` | {name} | room_school | yuna_bored |  |  | *유나의 펜촉이 쪽지 한가운데 잉크점을 남긴다.* |
| 169 | `morning2_greet_dain_others_2` | {name} | room_school | dain_laugh |  |  | *교실 문이 닫힌 뒤 클립보드 두드리는 소리가 복도에서 |
| 170 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *자리에 앉으려는데 — 책상 위에 접힌 쪽지가 하나 놓 |
| 171 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 172 | `morning2_note_3` | {name} | room_school | yuna_normal | 0.35 |  | *어제와 같은 글씨. 아래쪽에 장소가 적혀 있다. '도 |
| 173 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가다 교실 안을 들여다본다.* 어제 잘 잤 |
| 174 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 학생회장이 교실까지 인사하러 와? |
| 175 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 순찰이야. — 출석률 확인 겸. |
| 176 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | *복도로 돌아가기 직전 클립보드 끝이 문틀에 한 번 닿 |
| 177 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연이 사라진 복도를 바라보는데 — 뒤에서 민수가 돌 |
| 178 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 이틀 만에 학생회장이 인사하러 오냐? 나 1 |
| 179 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 인기가 없는 거 아닐까. |
| 180 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 그건 맞는데 그게 중요한 게 아니잖아. |
| 181 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *다인은 서연의 뒷모습이 교실 안으로 사라질 때까지 바 |
| 182 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 회장님도 우리 전학생한테 관심 있어? 인기 많네! |
| 183 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | '우리' 전학생? |
| 184 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 내가 먼저 봤잖아. 그럼 우리 맞지. 찜한 거. |
| 185 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *쉬는 시간. 복도로 나왔다.* |
| 186 | `morning2_break_1` | {name} | school_hallway | 없음 |  |  | *서연의 클립보드 끝이 책상에 톡 닿는다. 답할 틈도  |
| 187 | `morning2_seo_dust_1` | {name} | school_hallway | seyoun_normal |  |  | *1교시가 끝난 쉬는 시간, 복도에서 서연과 스친다.  |
| 188 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 잠깐. |
| 189 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *손이 {name}의 어깨에 닿는다. 먼지를 두 번 털 |
| 190 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 옷에 뭐 묻었어. |
| 191 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | *서연의 손이 떨어진 자리에서 가방끈이 비뚤어져 있다. |
| 192 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 왜 그래? 먼지잖아. |
| 193 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *어깨의 먼지는 없어졌는데 가방끈을 두 번이나 다시 고 |
| 194 | `morning2_dain_react_2` | {name} | school_hallway | dain_angry |  |  | *서연이 클립보드를 고쳐 끼고 복도로 간다. 뒤에서 다 |
| 195 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 지금 뭐야? 어깨 만진 거야? |
| 196 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 먼지 털어준 거야. |
| 197 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 먼지가 진짜 있긴 했어? |
| 198 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | *대답 대신 가방끈을 고쳐 잡았다. 다인은 그걸 보고도 |
| 199 | `morning2_end` | {name} | school_hallway | seyoun_normal |  |  | *민수 말로는 1년 동안 먼저 인사한 적도 없다던 서연 |
| 200 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *점심. 주머니에는 유나의 쪽지가 있고 복도 끝에서는  |
| 201 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *누구와 함께할까.* |
| 202 | `lunch2_seo_1_check` | {name} | school_hallway | 없음 |  |  | *옥상으로 올라간다.* |
| 203 | `lunch2_seo_1b` | {name} | top_school | seyoun_normal |  |  | *처음 올라온 옥상이다. 난간 아래에서 운동장 호루라기 |
| 204 | `lunch2_seo_2b_check` |  | top_school | seyoun_normal |  |  |  |
| 205 | `lunch2_seo_2b_dain` | 서연 | top_school | seyoun_normal |  |  | 어제는 매점 쪽이더니. 오늘은 여기까지 왔네. |
| 206 | `lunch2_seo_3b_dain` | {name} | top_school | seyoun_normal |  |  | 어제는 다인이 끌고 갔고 오늘은 내가 올라오고 싶었어. |
| 207 | `lunch2_seo_4b_dain` | 서연 | top_school | seyoun_normal |  |  | 그건 좀 다르네. |
| 208 | `lunch2_seo_5b_dain` | {name} | top_school | seyoun_normal |  |  | 바람도 좋고. 네 도시락도 계속 생각났고. |
| 209 | `lunch2_seo_6b_dain` | 서연 | top_school | seyoun_laugh |  |  | 솔직하네. |
| 210 | `lunch2_seo_7` | {name} | top_school | seyoun_normal |  |  | *서연이 도시락 뚜껑을 여는 순간 옥상 문이 철컥 열린 |
| 211 | `lunch2_seo_9` | 다인 | top_school | dain_normal |  |  | 여기 있었네. 찾았다. 오늘도 나 빼고 먹으려고? |
| 212 | `lunch2_seo_10` | 서연 | top_school | seyoun_normal |  |  | 옥상은 허가제야. 그리고 오늘 점심은 내가 먼저 잡았고 |
| 213 | `lunch2_seo_11` | 다인 | top_school | dain_normal |  |  | 그럼 난 지금부터 끼면 되겠네. 나도 앉는다? |
| 214 | `lunch2_seo_12` | {name} | top_school | dain_normal |  |  | *다인이 빈자리에 바로 앉는다. 서연의 젓가락이 계란말 |
| 215 | `lunch2_seo_13` | 다인 | top_school | dain_normal |  |  | 어제는 나랑 먹었잖아. 하루 만에 회장님 도시락으로 갈 |
| 216 | `lunch2_seo_14` | 서연 | top_school | seyoun_normal |  |  | *다인이 앉으려 하자 빈 의자를 발끝으로 자기 쪽에 붙 |
| 217 | `lunch2_seo_15` | {name} | top_school | seyoun_normal |  |  | 같은 반이잖아. 너희 둘도 이제 아는 사이고. |
| 218 | `lunch2_seo_16` | 서연 | top_school | seyoun_normal |  |  | 친해지는 것하고 양보하는 건 다르지. |
| 219 | `lunch2_seo_17` | 다인 | top_school | dain_normal |  |  | 그럼 나도 양보 안 해. 다음 쉬는 시간에 체육관 와. |
| 220 | `lunch2_seo_19` | 서연 | top_school | seyoun_normal |  |  | {name}, 지금 내 앞에서 다음 약속 잡는 거야? |
| 221 | `lunch2_seo_20` | 서연 | top_school | seyoun_normal |  |  | 대답은 나중에 해. 일단 입가에 뭐 묻었어. 가만있어  |
| 222 | `lunch2_seo_choice` | 서연 | top_school | seyoun_normal |  |  | *물티슈를 감은 손가락이 입가로 다가온다.* |
| 223 | `lunch2_seo_c1_1` | 서연 | top_school | seyoun_normal |  |  | *물티슈로 밥풀을 떼어내고 사용한 쪽을 안으로 접는다. |
| 224 | `lunch2_seo_c1_2` | 서연 | top_school | seyoun_normal |  |  | 됐어. |
| 225 | `lunch2_seo_c1_2_b` | 다인 | top_school | dain_normal |  |  | *다인은 도시락으로 뻗던 손을 공중에 둔 채 둘을 번갈 |
| 226 | `lunch2_seo_c1_3` | 다인 | top_school | dain_normal |  |  | 밥풀을 직접 떼어줘요? |
| 227 | `lunch2_seo_c1_3_b` | 서연 | top_school | seyoun_normal |  |  | *물티슈를 네모로 접는다.* 밥풀이었어. |
| 228 | `lunch2_seo_c1_4` | 서연 | top_school | seyoun_shy |  |  | 그게 다야. |
| 229 | `lunch2_seo_c1_5` | {name} | top_school | seyoun_shy |  |  | *서연은 물병을 집어 들지만 뚜껑은 열지 않는다. 라벨 |
| 230 | `lunch2_seo_end_c1` | {name} | top_school | seyoun_shy |  |  | *다인이 접이식 의자 다리를 운동화 끝으로 두 번 건드 |
| 231 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *방과후. 핸드폰에 알림이 두 개 와 있다.* |
| 232 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 체육관 와. 오늘은 진짜 내기다. |
| 233 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 학생회실에 올 수 있어? 일손이 부족해서. |
| 234 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게서는 아무 연락이 없다. 가방을 챙기자 주머니 |
| 235 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *어디로 갈까.* |
| 236 | `after2_dain_1` | {name} | gym | dain_active |  | 🌅 | *체육관. 다인이 배구 네트 앞에서 준비운동을 하고 있 |
| 237 | `after2_dain_2` | 다인 | gym | dain_sweat |  | 🌅 | 왔어? 늦었어. |
| 238 | `after2_dain_3` | {name} | gym | dain_sweat |  | 🌅 | 5분 전인데. |
| 239 | `after2_dain_4` | 다인 | gym | dain_sweat |  | 🌅 | 나는 10분 전에 왔거든. |
| 240 | `after2_dain_5` | {name} | gym | dain_sweat |  | 🌅 | *빨리 온 쪽이 너. 나는 안 늦었다.* |
| 241 | `after2_dain_6` | 다인 | gym | dain_sweat |  | 🌅 | 자, 내기다! 서브 다섯 번, 세 번 이상 넘기면 네  |
| 242 | `after2_dain_7` | {name} | gym | dain_normal |  | 🌅 | 갑자기 떡볶이? |
| 243 | `after2_dain_8` | 다인 | gym | dain_laugh |  | 🌅 | 배고프거든. |
| 244 | `after2_dain_9` | {name} | gym | dain_normal |  | 🌅 | *첫 서브는 네트에 걸리고 두 번째는 선 안쪽에 떨어진 |
| 245 | `after2_dain_9_b` | 다인 | gym | dain_normal |  | 🌅 | *튕겨 나온 공을 양손으로 받아 든다.* 어? 봐주려고 |
| 246 | `after2_dain_9_c` | 다인 | gym | dain_active |  | 🌅 | *자세를 낮춘다. 공을 든 손에 힘이 들어간다.* |
| 247 | `after2_dain_9_d` | 다인 | gym | dain_active |  | 🌅 | 이번엔 제대로 간다! |
| 248 | `after2_dain_9_e` | {name} | gym | dain_active |  | 🌅 | *랠리가 빠르게 오간다. 다인은 착지할 때마다 왼발부터 |
| 249 | `after2_dain_9_f` | {name} | gym | dain_sweat |  | 🌅 | *점수판은 3:2. 다인은 일어서며 오른쪽 무릎을 한  |
| 250 | `after2_dain_11b` | {name} | street | dain_laugh |  | 🌅 | *체육관을 나와 거리를 걸었다.* |
| 251 | `after2_dain_12` | 다인 | street | dain_laugh |  | 🌅 | 졌네. 근데 좀 치는데? 너 운동 안 한다며. |
| 252 | `after2_dain_13` | {name} | street | dain_laugh |  | 🌅 | 안 한다고는 안 했어. |
| 253 | `after2_dain_14` | 다인 | street | dain_normal |  | 🌅 | *들고 있던 공을 떨어뜨린다.* 뭐야? 속은 거야? |
| 254 | `after2_dain_15` | {name} | street | dain_normal |  | 🌅 | 속인 건 아니고 물어보지도 않았잖아. |
| 255 | `after2_dain_16` | 다인 | street | dain_laugh |  | 🌅 | *주먹을 어깨 높이까지 들었다가 자기 옆구리에 붙인다. |
| 256 | `after2_dain_freetalk` | 다인 | store | dain_normal |  | 🌅 | *가게에 들어서자 다인이 떡볶이 컵을 밀어 놓고 젓가락 |
| 257 | `after2_dain_end` | {name} | store | dain_laugh |  | 🌅 | *다인이 떡볶이 컵을 내 쪽으로 밀어 두고 자기 몫 젓 |
| 258 | `after2_dain_end_b` | {name} | store | dain_laugh |  | 🌅 | *학교 앞 떡볶이집. 다인이 떡볶이를 후후 불며 말한다 |
| 259 | `after2_dain_end_2` | 다인 | store | dain_laugh |  | 🌅 | 야, 너 진짜 운동 좀 아는 거지? |
| 260 | `after2_dain_end_2b` | {name} | store | dain_laugh |  | 🌅 | 조금. |
| 261 | `after2_dain_end_2c` | 다인 | store | dain_laugh |  | 🌅 | 조금이면 저렇게 못 쳐! — 인정해, 잘한다고. |
| 262 | `after2_dain_end_2d` | {name} | store | dain_laugh |  | 🌅 | 다인이가 훨씬 잘하던데. |
| 263 | `after2_dain_end_3` | 다인 | store | dain_laugh |  | 🌅 | *젓가락 끝이 떡볶이 컵 위에서 그대로다.* |
| 264 | `after2_dain_end_3b` | 다인 | store | dain_laugh |  | 🌅 | 당연하지. 나 체육 특기생이었거든. |
| 265 | `after2_dain_end_3c` | {name} | store | dain_laugh |  | 🌅 | *'이었거든'이 끝나자 다인의 젓가락이 종이컵 옆 물컵 |
| 266 | `after2_dain_end_3d` | 다인 | store | dain_laugh |  | 🌅 | 아, 맵다. 물, 물. |
| 267 | `after2_dain_end_3e` | 다인 | store | dain_shy |  | 🌅 | *떡볶이 컵을 {name} 쪽으로 밀어놓고 빈 물병을  |
| 268 | `after2_dain_return` | {name} | school | dain_shy |  | 🌅 | *학교로 돌아오는 길. 교문 앞에 다다랐다.* |
| 269 | `after2_group_dain_companion` | 다인과 동행 | gym | 없음 |  | 🌅 | *체육관과 별관에서 들은 설명이 서로 어긋난다. 다인이 |
| 270 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.* |
| 271 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 272 | `night2_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저  |
| 273 | `night2_msg_1` | {name} | room_my | 없음 |  |  | *세 명에게서 메시지가 왔다.* |
| 274 | `night2_msg_dain_specific` | 다인 | room_my | dain_normal | 0.35 |  | 야, 오늘 떡볶이 맛있었다. |
| 275 | `night2_msg_dain_specific_2` | 다인 | room_my | dain_normal | 0.35 |  | 내일도 내기하자. 종목 바꿔서. |
| 276 | `night2_msg_seo_general` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 점심에 옥상 열어놓을게. 와 |
| 277 | `night2_msg_yuna_general` | 유나 | room_my | yuna_normal | 0.35 |  | 내일 별관 올 거야? |
| 278 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에  |
| 279 | `night2_choice` | {name} | room_my | 없음 |  |  | *누구에게 먼저 답장할까?* |
| 280 | `night2_reply_seo_1` | {name} | room_my | seyoun_normal | 0.35 |  | 부르면 또 갈게 |
| 281 | `night2_reply_seo_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 쉽게 말하네 |
| 282 | `night2_reply_seo_3` | {name} | room_my | seyoun_normal | 0.35 |  | 쉬운 말인데 |
| 283 | `night2_reply_seo_4` | 서연 | room_my | seyoun_normal | 0.35 |  | 점심에 옥상 열어둘게. 늦지 마 |
| 284 | `night2_reply_seo_5` | {name} | room_my | seyoun_normal | 0.35 |  | *서연은 거기서 메시지를 끝냈다.* |
| 285 | `night2_reply_seo_react_default` | 서연 | room_my | seyoun_normal | 0.35 |  | ㅋ 알겠어. 내일 봐. |
| 286 | `night2_seo_freetalk` | 서연 | room_my | seyoun_normal | 0.35 | 🌙 | 아, 잠깐. 아직 안 잤지? |
| 287 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 또 다른 알림이 보인다.* |
| 288 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 보내고 핸드폰을 내려놓았다.* |
| 289 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이,  |
| 290 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 |
| 291 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *메모장에 줄줄이 남은 보내지 않은 문장. '선생님,  |
| 292 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 메모가 마지막이다. 그 아래 39번째에는 제 |
| 293 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 |
| 294 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로 |
| 295 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보 |
| 296 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화 |
| 297 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 |
| 298 | `night2_end_2_b` | {name} | room_my | 없음 |  |  | *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있 |
| 299 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.* |
| 300 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을  |
| 301 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 |
| | **Day 3** | | | | | | |
| 302 | `morning3_start` | {name} | school | 없음 |  |  | *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯 |
| 303 | `morning3_start_2` | {name} | school | 없음 |  |  | *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군 |
| 304 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 305 | `morning3_seo_gate_1` | {name} | school | seyoun_normal |  |  | *교문 앞의 서연은 지각 종이 울리기 직전인데도 발을  |
| 306 | `morning3_seo_gate_cold_1` | 서연 | school | seyoun_normal |  |  | *서연이 지나치다 명찰 쪽으로 눈만 돌린다.* |
| 307 | `morning3_seo_gate_cold_2` | 서연 | school | seyoun_normal |  |  | 전학생. 아직 다니고 있었구나. |
| 308 | `morning3_seo_gate_cold_3` | {name} | school | seyoun_normal |  |  | *평소처럼 이름도 부르지 않았다. 서연의 구두 소리만  |
| 309 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실에 들어서자 서연의 펜이 멈추고 다인의 의자가 뒤 |
| 310 | `morning3_react_seo_1` | 다인 | room_school | dain_normal |  |  | 야, 회장님이랑 같이 왔어? 아침부터? |
| 311 | `morning3_react_seo_2` | 유나 | room_school | yuna_bored |  |  | *창밖을 보던 유나가 유리창에 비친 {name}을 확인 |
| 312 | `morning3_date_intro` | {name} | room_school | 없음 |  |  | *1교시가 끝났다. 쉬는 시간마다 누군가 말을 건다.* |
| 313 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *쉬는 시간, 복도로 나왔다. 서연이 먼저 걸음을 맞춘 |
| 314 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | 이번 주말에 시간 있어? 공원에 같이 가자. |
| 315 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끈다. 눈이 마주치 |
| 316 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼  |
| 317 | `morning3_date_dain_2` | 다인 | room_school | dain_normal |  |  | *서연이 아직 교실 문 앞에 서 있다. 다인은 이쪽을  |
| 318 | `morning3_date_dain_choice` | 다인 | room_school | dain_normal |  |  | *서연의 발소리가 멎는다. 다인은 대답을 기다린다.* |
| 319 | `morning3_date_dain_accept` | {name} | room_school | dain_laugh |  |  | *다인과 주말 약속을 잡았다. 다인이 웃자 복도에서 서 |
| 320 | `morning3_date_dain_decline_narr` | 다인 | room_school | dain_laugh |  |  | *다인은 웃으며 자기 자리로 돌아간다. 종이 치기 직전 |
| 321 | `morning3_date_dain_decline_inner_2` | {name} | room_school | dain_laugh |  |  | *다인이 자리로 돌아간 뒤, 종이 치기 직전의 교실만  |
| 322 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다 |
| 323 | `morning3_date_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 접어 둔 쪽지를 꺼내려다 다시 책갈피 사이에  |
| 324 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 325 | `morning3_multi_from_dain` |  | room_school | 없음 |  |  |  |
| 326 | `morning3_end` | {name} | room_school | 없음 |  |  | *수업 종료 종이 울리고 곧 점심시간이 된다.* |
| 327 | `morning3_end_b` | 유나 | room_school | yuna_normal |  |  | 맛있네. |
| 328 | `lunch3_start` | {name} | room_school | yuna_normal |  |  | *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. |
| 329 | `lunch3_start_2_b` | 다인 | room_school | dain_normal |  |  | *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가 |
| 330 | `lunch3_meal_1` | 다인 | room_school | dain_laugh |  |  | 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고  |
| 331 | `lunch3_meal_2` | {name} | room_school | dain_laugh |  |  | 그건 내 거... |
| 332 | `lunch3_meal_3` | 서연 | room_school | seyoun_normal |  |  | 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점 |
| 333 | `lunch3_meal_4` | {name} | room_school | seyoun_normal |  |  | 점수 매기지 마. |
| 334 | `lunch3_meal_5` | 서연 | room_school | seyoun_normal |  |  | 10점 만점이야. 나쁜 거 아닌데? |
| 335 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다 |
| 336 | `lunch3_meal_7` | {name} | room_school | seyoun_normal |  |  | 유나, 그건 내가 제일 좋아하는 건데. |
| 337 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임 |
| 338 | `lunch3_meal_8` | {name} | room_school | yuna_bored |  |  | *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다. |
| 339 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. |
| 340 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓 |
| 341 | `lunch3_meal_10_d` | 다인 | room_school | dain_laugh |  |  | *"다 같이?" 다인은 웃지만 의자를 당기지 않는다.* |
| 342 | `lunch3_meal_11` | {name} | room_school | yuna_bored |  |  | *누구에게 줄까?* |
| 343 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *마지막 반찬을 누구에게 줄지 고민한다.* |
| 344 | `lunch3_share_1` | {name} | room_school | yuna_bored |  |  | *다 같이 나눠 먹자고 하자 셋이 웃는다. 웃음이 끊긴 |
| 345 | `lunch3_share_solo` | {name} | room_school | yuna_normal |  |  | *셋이 계란말이를 조금씩 나눠 먹는다. 반으로 갈린 마 |
| 346 | `lunch3_end` | {name} | room_school | 없음 |  |  | *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다 |
| 347 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육 |
| 348 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다 |
| 349 | `after3_auto_dain` | {name} | school_hallway | 없음 |  | 🌅 | *다인과 약속이 있다. 체육관으로 간다.* |
| 350 | `after3_reject_for_dain_1` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *웃고 있다. 클립보드의 종이 모서리를 맞춘다.* |
| 351 | `after3_reject_for_dain_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 오늘은 할 일이 좀 있어서. 먼저 갈게. |
| 352 | `after3_reject_for_dain_2b` | {name} | yuna_hideout | 없음 |  | 🌅 | *유나의 아지트로 걸어간다.* |
| 353 | `after3_reject_for_dain_3` | {name} | library_old | yuna_normal | 0.35 | 🌅 | *도서관에 쪽지가 없다. 유나의 가방도 없다. 자리에  |
| 354 | `after3_reject_for_dain_3b` | {name} | school_hallway | 없음 |  | 🌅 | *복도로 돌아왔다. 바닥에 유나가 두고 간 물 자국이  |
| 355 | `after3_dain_1` | {name} | gym | dain_sweat |  | 🌅 | *체육관에서 다인이 혼자 스트레칭 중이다. 가볍게 뛰어 |
| 356 | `after3_dain_3` | {name} | dain_hurt_event1 | 없음 |  | 🌅 | 다인! |
| 357 | `after3_dain_4` | 다인 | gym | dain_sweat |  | 🌅 | 괜찮아. 그냥 좀 삐끗한 거야. |
| 358 | `after3_dain_5` | {name} | gym | dain_sweat |  | 🌅 | 괜찮아 보이진 않는데. |
| 359 | `after3_dain_5_b` | 다인 | gym | dain_sweat |  | 🌅 | 진짜 괜찮아. 별거 아니야. |
| 360 | `after3_dain_6` | 다인 | gym | dain_sad |  | 🌅 | *말을 마친 뒤에야 다인이 크게 웃는다.* |
| 361 | `after3_dain_choice` | 다인 | gym | dain_sad |  | 🌅 | *다인이 벤치에 앉아 무릎 한곳만 계속 문지른다.* |
| 362 | `after3_dain_correct_1` | 다인 | gym | dain_sad |  | 🌅 | *다인은 무릎을 감싸던 손을 떼지도 못한 채 나를 본다 |
| 363 | `after3_dain_correct_2` | 다인 | gym | dain_normal |  | 🌅 | 야. |
| 364 | `after3_dain_correct_3` | {name} | gym | dain_normal |  | 🌅 | 왜. |
| 365 | `after3_dain_correct_4` | 다인 | gym | dain_shy |  | 🌅 | 너 좀 이상해. |
| 366 | `after3_dain_correct_5` | {name} | gym | dain_shy |  | 🌅 | 이상한 게 좋은 거야 나쁜 거야. |
| 367 | `after3_dain_correct_6` | 다인 | gym | dain_shy |  | 🌅 | 몰라. 근데 잠깐만 여기 있어. 지금 혼자 있기는 좀  |
| 368 | `after3_dain_correct_7` | 다인 | gym | dain_sad |  | 🌅 | *벤치 안쪽으로 자리를 내준다. 배구공은 발끝으로 밀어 |
| 369 | `after3_dain_correct_8` | 다인 | gym | dain_laugh |  | 🌅 | 그냥 얘기나 하자. |
| 370 | `after3_dain_correct_9` | {name} | gym | 없음 |  | 🌅 | *옆에 앉자 다인은 배구공을 발끝으로 코트 경계선까지  |
| 371 | `after3_dain_correct_10` | 다인 | gym | dain_laugh |  | 🌅 | 나 원래 이런 얘기 잘 안 하거든. 뭐부터 말해야 하지 |
| 372 | `after3_dain_correct_11` | 다인 | gym | dain_sweat |  | 🌅 | *다인은 오른쪽 다리를 펴다가 얼굴을 찡그리고 다시 굽 |
| 373 | `after3_dain_correct_12` | {name} | gym | dain_sad |  | 🌅 | 무릎 얘기부터 하자. |
| 374 | `after3_dain_dilemma_tell` | 다인 | gym | dain_normal |  | 🌅 | 뭐? |
| 375 | `after3_dain_dilemma_tell_2` | {name} | gym | dain_sad |  | 🌅 | 무릎. 아까부터 계속 문지르잖아. 이건 오늘 삐끗한 게 |
| 376 | `after3_dain_dilemma_tell_3` | {name} | gym | dain_sad |  | 🌅 | *다인은 입을 다물고 무릎 위 손가락만 접었다 편다.* |
| 377 | `after3_dain_dilemma_tell_4` | 다인 | gym | dain_sad |  | 🌅 | 알면서 왜 말해. 다음 주 대회인 거 알잖아. |
| 378 | `after3_dain_dilemma_tell_5` | {name} | gym | dain_sad |  | 🌅 | 대회보다 네 무릎이 더 중요해. |
| 379 | `after3_dain_dilemma_tell_6` | 다인 | gym | dain_angry |  | 🌅 | 그건 네가 정하는 게 아니야. |
| 380 | `after3_dain_dilemma_tell_7` | 다인 | gym | dain_angry |  | 🌅 | *다인이 일어나 신발끈을 묶으려 몸을 숙이자 무릎에서  |
| 381 | `after3_dain_dilemma_tell_8` | 다인 | gym | dain_sad |  | 🌅 | 제발. 이것만은 아무한테도 말하지 마. |
| 382 | `after3_dain_dilemma_final` | 다인 | gym | dain_sad |  | 🌅 | *다인은 젖은 눈가를 닦지 않는다. 마지막 말 뒤에 늘 |
| 383 | `after3_dain_tell_retreat` | 다인 | gym | dain_sad |  | 🌅 | *다인은 숨을 길게 뱉고 발끝으로 굴러온 공을 세운다. |
| 384 | `after3_dain_choice1` | {name} | gym | dain_sad |  | 🌅 | *대답을 재촉하지 않고 옆에 앉는다. 다인은 운동화 끈 |
| 385 | `after3_dain_choice1_2` | 다인 | gym | dain_sad |  | 🌅 | 왜 안 물어봐? |
| 386 | `after3_dain_choice1_3` | {name} | gym | dain_shy |  | 🌅 | 네가 준비되면 먼저 말한다고 했잖아. |
| 387 | `after3_dain_choice1_react` | 다인 | gym | dain_shy |  | 🌅 | *다인은 입술을 깨물다 웃음을 흘리고 손등으로 눈가를  |
| 388 | `after3_dain_choice1_react2` | 다인 | gym | dain_shy |  | 🌅 | 맞아. 지금 물었으면 또 괜찮다고 했을 거야. |
| 389 | `after3_dain_choice1_react3` | 다인 | gym | dain_shy |  | 🌅 | 고마워. 보건실 갈 때... 옆에 있어 줘. |
| 390 | `after3_dain_freetalk` | 다인 | gym | dain_normal |  | 🌅 | *다인은 손목 보호대를 고쳐 매다 입꼬리가 반 박자 늦 |
| 391 | `after3_dain_end_check` | 다인 | gym | dain_normal |  | 🌅 | *주먹으로 어깨를 가볍게 친다.* |
| 392 | `after3_dain_end` | 다인 | gym | dain_shy |  | 🌅 | *다인의 주먹이 어깨에 닿지만 어제처럼 몸이 밀리지는  |
| 393 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.* |
| 394 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 395 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 396 | `minsu_d3_check` | {name} | school | 없음 |  | 🌅 |  |
| 397 | `minsu_d3_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문 앞에 민수가 서 있다.* |
| 398 | `minsu_d3_2` | 민수 | school | 없음 |  | 🌅 | 봤다. |
| 399 | `minsu_d3_3` | 민수 | school | 없음 |  | 🌅 | 점심때. 그리고 방금 서연 표정도. |
| 400 | `minsu_d3_4` | 민수 | school | 없음 |  | 🌅 | 어제 내가 뭐랬냐. 나중에 셋 다 울면 네 탓이라고 했 |
| 401 | `minsu_d3_5` | 민수 | school | 없음 |  | 🌅 | 옆에서 보기 좀 힘들다. 걔들 다 좋은 애들이야. 네가 |
| 402 | `minsu_d3_5b` | 민수 | school | 없음 |  | 🌅 | *민수는 빨대 포장지를 끝까지 접어 테이블 위에 내려놓 |
| 403 | `minsu_d3_6` | {name} | school | 없음 |  | 🌅 | 맞아. |
| 404 | `minsu_d3_6b` | 민수 | school | 없음 |  | 🌅 | 전 학교에서 뭔 일 있었는지 안 물어볼게. 근데 하나만 |
| 405 | `minsu_d3_7` | 민수 | school | 없음 |  | 🌅 | 거절도 배려야. 안 되는 관계에 계속 여지 주는 것보다 |
| 406 | `minsu_d3_8` | {name} | school | 없음 |  | 🌅 | *거절도 배려다. 전 학교에서 나는 소정이에게 고백할  |
| 407 | `minsu_d3_9` | 민수 | school | 없음 |  | 🌅 | *민수는 더 말하지 않고 끝까지 접은 빨대 포장지를 내 |
| 408 | `minsu_d3_10` | 민수 | school | 없음 |  | 🌅 | 내일 학교에서 보자. 진지하게 생각해. |
| 409 | `night3_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 가방을 의자에 걸어 둔다.* |
| 410 | `night3_start_2` | {name} | room_my | 없음 |  |  | *책상 위에 엎어 둔 핸드폰 화면을 켠다.* |
| 411 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *읽지 않은 메시지가 떠 있다.* |
| 412 | `night3_faithful_msg_dain_1` | 다인 | room_my | dain_normal | 0.35 |  | 발목 괜찮냐고 물어볼 거면 직접 와서 물어봐ㅋㅋ |
| 413 | `night3_faithful_msg_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | 아 근데 고마워 |
| 414 | `night3_faithful_msg_dain_3` | {name} | room_my | dain_normal | 0.35 |  | *'ㅋㅋ'와 다음 문장 사이가 비어 있다. 다인의 새  |
| 415 | `night3_dream_1` | {name} | school | 없음 |  |  | *꿈속에서 누군가와 나란히 걷는다. 얼굴은 보이지 않고 |
| 416 | `night3_dream_2_b` | {name} | school | 없음 |  |  | *메모장을 닫았다. 내일 보낼 문장은 아직 없다.* |
| 417 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *커튼 사이로 들어온 아침 햇살에 눈을 뜬다. 핸드폰  |
| 418 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *'삭제하시겠습니까?' 확인 창이 뜬다. 손가락이 버튼 |
| 419 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *1초 동안 화면을 내려다본다. 소정이 책상의 낙서와  |
| 420 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *그래. 삭제 버튼에 올린 손가락으로 화면을 누른다.* |
| 421 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼을 누르지 않고 사진을 새 폴더로 옮긴다.  |
| 422 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *'거절도 네가 해야 할 일이야.' 민수의 말이 떠오른 |
| 423 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *갤러리에서 소정이 사진이 사라지고 빈칸만 남는다.* |
| 424 | `night3_faithful_reflect_4_b` | {name} | room_my | 없음 |  |  | *빈 앨범 썸네일 위를 엄지로 문지른다.* |
| 425 | `night3_faithful_reflect_4_c` | {name} | room_my | 없음 |  |  | *핸드폰을 덮자 검은 화면에 갤러리의 빈칸이 겹쳐 보인 |
| 426 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *알람이 울리기 전에 눈을 떴다.* |
| 427 | `night3_dream_dain_bonus` | {name} | room_my | 없음 |  |  | *눈을 감자 체육관 바닥에 공 튀는 소리가 떠오른다.* |
| 428 | `night3_end` | {name} | room_my | 없음 |  |  | *방 불을 끄고 핸드폰을 엎어 둔다.* |
| | **Day 4** | | | | | | |
| 429 | `morning4_start` | {name} | room_my | 없음 |  |  | *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다 |
| 430 | `morning4_nightmare_check` |  | room_my | 없음 |  |  |  |
| 431 | `minsu_cheer_1` | {name} | room_my | 없음 |  |  | *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.* |
| 432 | `minsu_cheer_1_b` | 민수 | room_my | minsu_normal | 0.35 |  | *야 오늘 데이트라며?* |
| 433 | `minsu_cheer_1_c` | {name} | room_my | minsu_normal | 0.35 |  | *어떻게 알았어* |
| 434 | `minsu_cheer_1_d` | 민수 | room_my | minsu_normal | 0.35 |  | *다인이가 단톡방에 올림. 내일 약속 있음, 이라고* |
| 435 | `minsu_cheer_2` | 민수 | room_my | minsu_normal | 0.35 |  | 잘하고 와ㅋㅋ |
| 436 | `minsu_cheer_3` | {name} | room_my | minsu_normal | 0.35 |  | 알아. |
| 437 | `minsu_cheer_4_branch` |  | room_my | 없음 |  |  |  |
| 438 | `minsu_cheer_4_ins_single` | {name} | room_my | minsu_normal | 0.35 |  | *핸드폰 캘린더를 본다. 오늘 약속은 하나뿐이다.* |
| 439 | `morning4_start_2` | {name} | room_my | 없음 |  |  | *심호흡하고 약속 메시지를 다시 확인한다.* |
| 440 | `morning4_dain_msg_1` | 다인 | room_my | dain_sweat | 0.35 |  | 오늘이다. 체육관 앞 저녁 6시. 아, 왜 이렇게 떨리 |
| 441 | `morning4_hidden_check` | {name} | room_my | 없음 |  |  | *주말 아침, 학교 앞 사거리에서 신호를 기다린다.* |
| 442 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 443 | `morning4_end` | {name} | room_my | 없음 |  |  | *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 |
| 444 | `date_dain_1` | {name} | gym | dain_laugh |  |  | *체육관 앞. 다인이 뛰어온다. 캡모자에 운동복.* |
| 445 | `date_dain_2` | 다인 | gym | dain_laugh |  |  | 왔다. 늦을 뻔했지? |
| 446 | `date_dain_3` | {name} | gym | dain_laugh |  |  | 10분 일찍 왔는데. |
| 447 | `date_dain_4` | 다인 | gym | dain_normal |  |  | 나는 20분 전에 왔거든. |
| 448 | `date_dain_compliment_choice` | {name} | gym | dain_normal |  |  | *다인이 모자챙을 한 번 눌러 쓰고 기다린다.* |
| 449 | `date_dain_bright` | 다인 | gym | dain_laugh |  |  | *웃던 다인이 모자챙을 한 번 더 눌러쓴다.* ...그 |
| 450 | `date_dain_to_arcade` | {name} | arcade | dain_laugh |  |  | *오락실로 향했다.* |
| 451 | `date_dain_arcade` | {name} | arcade | dain_normal |  |  | *리듬게임 기계 앞에 선다. 화면이 깜빡인다.* |
| 452 | `date_dain_arcade_2` | 다인 | arcade | dain_normal |  |  | 자, 내기다. 진 사람이 음료수. |
| 453 | `date_dain_arcade_2_b` | {name} | arcade | dain_normal |  |  | 또 내기? |
| 454 | `date_dain_arcade_3` | 다인 | arcade | dain_normal |  |  | 내기 없으면 재미없잖아. |
| 455 | `date_dain_arcade_3_b` | {name} | arcade | dain_normal |  |  | *리듬게임이 시작되자 다인의 손이 먼저 박자를 잡는다. |
| 456 | `date_dain_arcade_3_c` | 다인 | arcade | dain_normal |  |  | *자리에서 벌떡 일어난다.* 풀콤보. 봤어? |
| 457 | `date_dain_rhythm` | 다인 | arcade | dain_laugh |  |  | *화면의 점수를 가리킨다.* 이 스코어, 역대 2등이야 |
| 458 | `date_dain_rhythm_2` | {name} | arcade | dain_normal |  |  | 대단해. |
| 459 | `date_dain_rhythm_3` | 다인 | arcade | dain_laugh |  |  | 당연하지. 이건 무릎 안 써도 되니까. |
| 460 | `date_dain_knee` | {name} | arcade | dain_laugh |  |  | *'무릎 안 써도 되니까.' 다인은 말끝에 웃고는 쇼윈 |
| 461 | `date_dain_knee_2` | {name} | street | dain_sweat |  |  | *오락실을 나와 스포츠용품점 앞을 지난다. 다인이 배구 |
| 462 | `date_dain_shop` | 다인 | street | dain_normal |  |  | *쇼윈도 안 배구화의 끈을 눈으로 따라간다. 모자챙 아 |
| 463 | `date_dain_shop_2` | {name} | street | dain_normal |  |  | 다인? |
| 464 | `date_dain_shop_2_b` | 다인 | street | dain_normal |  |  | *진열대 반대쪽으로 턱을 돌린다.* 아무것도 아냐! 가 |
| 465 | `date_dain_shop_3` | 다인 | street | dain_laugh |  |  | *두 손을 주머니에 찔러 넣고 앞서 걷는다.* 쳐다보지 |
| 466 | `date_dain_shop_3_b` | 다인 | street | dain_normal |  |  | *보폭을 더 넓힌다.* 한 번만 더 물으면 진짜 먼저  |
| 467 | `date_dain_end` | {name} | street | dain_sweat |  |  | *다인은 웃지만 캡모자 아래 시선은 여전히 쇼윈도에 머 |
| 468 | `date_dain_end_b` | 다인 | street | dain_normal |  |  | 야. |
| 469 | `date_dain_end_c` | 다인 | street | dain_sweat |  |  | 오늘 재밌었어. ...그냥 하는 말 아니야. |
| 470 | `pre_confess_minsu` | 민수 | street | minsu_smirk | 0.35 |  | 야, 데이트 중이지? 한마디만 할게 |
| 471 | `pre_confess_minsu_2` | 민수 | street | minsu_smirk | 0.35 |  | 말 돌리지 말고 제대로 해 |
| 472 | `pre_confess_callback` | {name} | street | minsu_smirk |  |  | *주머니 속 핸드폰 모서리가 손바닥에 눌린다. 알림은  |
| 473 | `confess_seo_1` | {name} | top_school | 없음 |  | 🌅 | *데이트가 끝났다. 교문 대신 옥상으로 올라왔다.* |
| 474 | `confess_dain_1` | {name} | gym | dain_laugh |  | 🌅 | *데이트가 끝나자 다인이 학교 쪽으로 성큼 앞서간다.* |
| 475 | `confess_dain_2` | 다인 | gym | dain_normal |  | 🌅 | 마지막. 한 군데만 더 가자. |
| 476 | `confess_dain_3` | {name} | gym | dain_normal |  | 🌅 | *빈 체육관. 서쪽 창문의 빛이 첫날 내기했던 코트 선 |
| 477 | `confess_dain_4` | 다인 | gym | dain_normal |  | 🌅 | *공 하나를 두 손으로 쥔다. 손가락 마디가 공 표면에 |
| 478 | `confess_dain_5` | {name} | gym | dain_normal |  | 🌅 | *공이 바닥에 한 번 튄다.* |
| 479 | `confess_dain_choice` | 다인 | gym | dain_sweat |  | 🌅 | *공이 바닥에 한 번 튄다. 다인의 손이 반 박자 늦어 |
| 480 | `confess_dain_yes_1` | {name} | gym | dain_normal |  | 🌅 | *첫 음절이 빈 체육관 벽에 낮게 돌아온다.* |
| 481 | `confess_dain_yes_2` | {name} | gym | dain_normal |  | 🌅 | *짧은 숨을 고르고 다시 입을 연다.* |
| 482 | `confess_dain_yes_3` | {name} | gym | dain_normal |  | 🌅 | 다인아. 나 — 너한테 할 말이 있어. |
| 483 | `confess_dain_yes_3_b` | {name} | gym | dain_normal |  | 🌅 | 오늘만 말고 다음에도 계속 만나고 싶어. |
| 484 | `confess_dain_yes_4` | {name} | gym | dain_normal |  | 🌅 | *다인이 공을 내려놓는다.* |
| 485 | `confess_dain_yes_5` | {name} | gym | dain_normal |  | 🌅 | 지금 당장 답하라는 건 아니야. |
| 486 | `confess_dain_yes_6` | {name} | gym | dain_laugh |  | 🌅 | 그냥 말해두고 싶었어. |
| 487 | `confess_dain_yes_7` | {name} | gym | dain_shy |  | 🌅 | *체육관 조명이 낮게 웅웅거린다.* |
| 488 | `confess_dain_yes_8` | 다인 | gym | dain_shy |  | 🌅 | *다인의 운동화가 코트 선 위에 나란히 붙는다. 두 손 |
| 489 | `confess_dain_yes_8_b` | {name} | gym | dain_shy |  | 🌅 | *배구공이 발끝에 툭 닿아 옆으로 굴러가도 다인은 쫓지 |
| 490 | `confess_dain_yes_9` | 다인 | gym | dain_shy |  | 🌅 | 잠깐. 나 지금 말 정리가 안 돼. |
| 491 | `confess_dain_yes_9_b` | {name} | gym | dain_shy |  | 🌅 | *다인이 손등으로 눈가를 거칠게 문지른다. 입꼬리는 올 |
| 492 | `confess_dain_yes_10` | 다인 | gym | dain_shy |  | 🌅 | 내일도 와. |
| 493 | `confess_dain_yes_10_b` | 다인 | gym | dain_laugh |  | 🌅 | *공을 다시 끌어안는다. 손등에 힘이 들어간다.* |
| 494 | `day4_night_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 옷소매에 공원 흙과 학교 먼지가 조금 |
| 495 | `day4_night_branch` | 시스템 | room_my | 없음 |  |  |  |
| 496 | `day4_student_night_branch` |  | room_my | 없음 |  |  |  |
| 497 | `wall_dain_1` | {name} | room_my | 없음 |  |  | *밤 10시. 다인에게서 메시지.* |
| 498 | `wall_dain_pre_low_1` | 다인 | room_my | dain_sweat | 0.35 |  | *웃는다. 손은 무릎 보호대를 꽉 누르고 있다.* |
| 499 | `wall_dain_pre_low_2` | 다인 | room_my | dain_normal | 0.35 |  | 하하, 오늘 재밌었지! |
| 500 | `wall_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | 야, 지금 시간 돼? |
| 501 | `wall_dain_2_b` | 다인 | room_my | dain_normal | 0.35 |  | *학교 오면 안 되지?* |
| 502 | `wall_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | 그냥 와. 체육관 뒷문 열어놨어. |
| 503 | `wall_dain_4` | {name} | gym | dain_laugh |  |  | *비상등만 켜진 체육관. 다인은 혼자 배구공을 튀긴다. |
| 504 | `wall_dain_5` | 다인 | gym | dain_laugh |  |  | 왔어? 늦었잖아. |
| 505 | `wall_dain_6` | {name} | gym | dain_laugh |  |  | 밤에 학교에 왜 있어? |
| 506 | `wall_dain_7` | 다인 | gym | dain_laugh |  |  | 가끔 몰래 들어와. 연습하려고. |
| 507 | `wall_dain_7_b` | 다인 | gym | dain_laugh |  |  | *배구공을 내민다.* |
| 508 | `wall_dain_8` | 다인 | gym | dain_laugh |  |  | 토스 올려줘. 한 번만. |
| 509 | `wall_dain_8_b` | {name} | gym | dain_laugh |  |  | *공을 든 손이 허리 아래에 머문 사이, 다인이 한 발 |
| 510 | `wall_dain_9` | {name} | gym | dain_sad |  |  | *체육관 바닥에 공이 굴러간다.* |
| 511 | `wall_dain_10` | 다인 | gym | dain_sad |  |  | 아, 아냐. 괜찮아. 그냥 삐끗한 거야. 별거 아... |
| 512 | `wall_dain_11` | {name} | gym | dain_sweat |  |  | *무릎을 잡은 손이 하얗게 질려 있다.* |
| 513 | `wall_dain_12` | {name} | gym | dain_sad |  |  | 다인. 괜찮지 않잖아. |
| 514 | `wall_dain_12_b` | 다인 | gym | dain_sad |  |  | 괜찮아. 진짜로. |
| 515 | `wall_dain_12_c` | {name} | gym | dain_normal |  |  | *바닥을 구르던 공이 벽에 닿아 낮은 소리를 낸다.* |
| 516 | `wall_dain_13` | {name} | gym | dain_sad |  |  | *아무 말 없이 옆에 앉는다. 다인이 입을 다물자 체육 |
| 517 | `wall_dain_14` | 다인 | gym | dain_sad |  |  | ...전방 십자인대. |
| 518 | `wall_dain_14_b` | 다인 | gym | dain_sad |  |  | *배구공을 보지 않는다.* |
| 519 | `wall_dain_15` | 다인 | gym | dain_sad |  |  | 작년 여름이야. |
| 520 | `wall_dain_16` | 다인 | gym | dain_sad |  |  | *입꼬리가 내려간다. 시선은 코트 바닥의 흰 선에 머문 |
| 521 | `wall_dain_16_b` | 다인 | gym | dain_sad |  |  | 수술했는데 담당 의료진이 — 되게 조심스럽게 말하더라. |
| 522 | `wall_dain_17` | 다인 | gym | dain_sad |  |  | 수술 끝나고 의사 선생님이 종이에 선을 그어줬어. '일 |
| 523 | `wall_dain_18` | 다인 | gym | dain_sad |  |  | 병원에서 나오는데 엄마가 울고 있었어. — 나는 못 울 |
| 524 | `wall_dain_18_b` | 다인 | gym | dain_sad |  |  | 실감난 건 — 체육관 사물함 정리할 때였어. |
| 525 | `wall_dain_18_c` | {name} | gym | dain_sad |  |  | *체육관 비상등이 한 번 깜빡인다. 다인의 손톱이 공  |
| 526 | `wall_dain_18_d` | 다인 | gym | dain_sad |  |  | *공 표면의 홈을 엄지로 문지른다.* 그래서. |
| 527 | `wall_dain_19` | 다인 | gym | dain_sad |  |  | 아무한테도 말 안 했어. 부모님한테도. '다인이가 안  |
| 528 | `wall_dain_19_b` | 다인 | gym | dain_sad |  |  | *유니폼 앞자락을 꽉 쥔다.* |
| 529 | `wall_dain_20` | 다인 | gym | dain_sad |  |  | 학교에서 '에너지 넘치네!' 소리 들을 때마다 가슴팍부 |
| 530 | `wall_dain_20_b` | 다인 | gym | dain_sad |  |  | 숨을 쉬어도 끝까지 안 들어왔어. |
| 531 | `wall_dain_21` | 다인 | gym | dain_sad |  |  | 오늘도 그랬어. 데이트하면서 뛰어다니고 네 옆에서 밝은 |
| 532 | `wall_dain_22` | 다인 | gym | dain_sad |  |  | 근데 네 앞에서까지 아픈 모습 보이면, 나한테 남는 게 |
| 533 | `wall_dain_22_b` | {name} | gym | dain_sad |  |  | *다인 옆 코트 선 바깥에 앉는다. 바닥에 놓인 배구공 |
| 534 | `wall_dain_choice` | 다인 | gym | dain_sad |  |  | *배구공 고무가 가슴팍에 눌려 찌그러진다. 어깨가 짧게 |
| 535 | `wall_dain_lastspike_1` | {name} | gym | dain_sad |  |  | *다인의 품에서 공을 받아 든다. 다인은 앉아 있고 { |
| 536 | `wall_dain_lastspike_2` | 다인 | gym | dain_normal |  |  | *공 보관함을 보다가 다인이 고개를 든다.* 잠깐. 왜 |
| 537 | `wall_dain_lastspike_3` | {name} | gym | dain_laugh |  |  | 멈출게. 지금 필요한 게 뭔지 네가 말해줘. |
| 538 | `wall_dain_lastspike_3_b` | 다인 | gym | dain_sweat |  |  | *무릎 보호대를 풀었다가 압박이 가지 않게 다시 고쳐  |
| 539 | `wall_dain_lastspike_3_c` | {name} | gym | dain_sweat |  |  | 응. 이번에는 검사 결과도 끝까지 듣고. |
| 540 | `wall_dain_lastspike_4` | 다인 | gym | dain_sad |  |  | 프로는 아직 모르겠어. 그래도 계속 숨기면서 뛰는 건  |
| 541 | `wall_dain_lastspike_4_b` | 다인 | gym | dain_sad |  |  | *휴대폰에서 정형외과 예약 화면을 연다. 가장 빠른 날 |
| 542 | `wall_dain_lastspike_5` | 다인 | gym | dain_sad |  |  | 내일 엄마랑 코치한테도 말할게. |
| 543 | `wall_dain_lastspike_6` | 다인 | gym | dain_sad |  |  | 병원 가는 날, 같이 가 줄래? |
| 544 | `wall_dain_farewell_1` | 다인 | gym | dain_sad |  |  | *{name}이 공을 보관함에 넣는 동안, 벤치를 짚고 |
| 545 | `wall_dain_farewell_2` | {name} | school_back | dain_normal |  |  | *다인과 체육관을 나온다. 학교 후문 쪽을 지나가는데. |
| 546 | `wall_dain_mention_1` | 다인 | school_back | dain_sad |  |  | 서연이가 나한테 뭐라 그랬는지 알아? 아무 말도 안 했 |
| 547 | `wall_dain_mention_2` | 다인 | school_back | dain_sad |  |  | 말이라도 해주면 싸울 수 있는데. 아무 말도 안 하면  |
| 548 | `wall_dain_mention_3` | 다인 | school_back | dain_normal |  |  | *한 걸음이 끊긴다. 다시 걸을 때는 보폭을 줄여 {n |
| 549 | `wall_dain_skin_check` |  | school_back | dain_normal |  |  |  |
| 550 | `wall_dain_freetalk` | 다인 | school_back | dain_normal |  | 🌙 | *숨을 길게 내쉬고 {name} 곁에 보폭을 맞춘다.* |
| 551 | `wall_dain_rival_rank` | 시스템 | school_back | 없음 |  |  |  |
| 552 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 553 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *알람을 일요일 오전으로 맞추고 방 불을 끈다. 전하지 |
| 554 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안 시계가 자정 쪽으로 넘어간다. 휴대폰 화면도  |
| | **Day 5** | | | | | | |
| 555 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소 |
| 556 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 557 | `morning5_temptation_discovery_branch` |  | room_school | 없음 |  |  |  |
| 558 | `morning5_committed_start` |  | room_school | 없음 |  |  |  |
| 559 | `morning5_committed_dain` | {name} | room_school | dain_normal |  |  | *다인이 체육관 쪽에서 손목 보호대를 고쳐 맨다. 서연 |
| 560 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *행사 준비 시간. 복도를 걷는데 — 빈 교실 앞을 지 |
| 561 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *행사 중간 쉬는 시간. 보건실 앞을 지나간다.* |
| 562 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 563 | `morning5_committed_end` | {name} | room_school | 없음 |  |  | *책상 위 쪽지들을 정리하고 이미 고른 방향의 행사 순 |
| 564 | `tour_dain_1_check` | {name} | gym | 없음 |  |  | *체육관으로 간다.* |
| 565 | `tour_dain_low` | 다인 | gym | dain_normal |  |  | *체육관 문 앞에서 다인을 만난다. 다인은 공을 들고  |
| 566 | `after5_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 567 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *행사가 끝나갈 무렵, 복도에서 선택하지 않은 두 사람 |
| 568 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 569 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다.* |
| 570 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다. 서연은 잠시 멈췄다가 고개 |
| 571 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 572 | `after5_farewell_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나가 다가온다. 아무 말 없이 책 한 |
| 573 | `after5_farewell_yuna_low` | 유나 | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나와 눈이 마주친다. 유나는 들고 있 |
| 574 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 575 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *석양이 교정 창문마다 걸린다. 방송실에서 행사 종료  |
| 576 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 577 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 578 | `ending_affinity_check` | 시스템 | park | 없음 |  |  |  |
| 579 | `ending_aff_check_dain` | 시스템 | gym | 없음 |  |  |  |
| 580 | `bitter_dain_1` | {name} | park | 없음 |  |  | *고백은 했다. 한 달쯤 지나서, 체육관 앞에서 기다리 |
| 581 | `bitter_dain_2` | 다인 | gym | dain_normal |  |  | 재밌었어! ...근데, 재밌기만 했어. 그게 좀 아쉬워 |
| 582 | `bitter_dain_3` | {name} | ending_bittersweet | 없음 |  |  | *체육관을 나왔다. 비가 내린다. 닫힌 문 너머로 공  |
| 583 | `bitter_dain_3_b` | {name} | ending_bittersweet | 없음 |  |  | *교문 밖으로 나왔다. 비가 내린다. — 우산은 없다. |
| 584 | `bitter_epilogue_1` | {name} | ending_bittersweet | 없음 |  |  | *졸업 후. 연락이 뜸해졌다. 한 달에 한 번이 두 달 |
| 585 | `bitter_epilogue_2` | {name} | ending_bittersweet | 없음 |  |  | *5일의 기록은 남았다. 마지막 사진에는 둘 사이에 한 |
| 586 | `bitter_epilogue_3` | 시스템 | ending_bittersweet | 없음 |  |  | ─── BITTERSWEET END ─── |
| 587 | `day5_main_ending_freetalk_router` | {name} | park | 없음 |  |  |  |
| 588 | `day5_dain_ending_freetalk_intro` | {name} | gym | dain_laugh |  |  | *마지막 장면이 지나고 익숙한 체육관에 공 튀는 소리만 |
| 589 | `day5_dain_ending_freetalk_router` | {name} | gym | 없음 |  |  |  |
| 590 | `day5_dain_ending_freetalk_bittersweet` | 다인 | gym | dain_normal |  | 🌙 | *닫힌 체육관 문에 기대어 잠시 공 튀는 소리를 듣는다 |
| 591 | `day5_credits` |  | school | 없음 |  |  |  |
| 592 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### day5_dain_ending_freetalk_good

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_dain_choice`: (선택)
- `after_end`: (선택)
- `after_hidden_nurse_choice`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_seo_choice`: (선택)
- `after2_choice`: (선택)
- `night2_choice`: (선택)
- `morning3_date_dain_choice`: (선택)
- `lunch3_choice`: (선택)
- `after3_dain_choice`: (선택)
- `after3_dain_dilemma_final`: (선택)
- `date_dain_compliment_choice`: (선택)
- `confess_dain_choice`: (선택)
- `wall_dain_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=5 유나=-8 다인=55 담임=0 보건=0

<details>
<summary>씬 타임라인 (610씬)</summary>

| # | 씬 ID | 화자 | 배경 | 캐릭터 | OP | 밤 | 대사 (앞 30자) |
|---|--------|------|------|--------|----|----|----------------|
| | **Day 1** | | | | | | |
| 1 | `start` | {name} | school | 없음 |  |  | *4월의 교문 앞. 밟힌 꽃잎이 드문드문 붙어 있다.  |
| 2 | `start_3` | {name} | school | 없음 |  |  | *주머니에서 핸드폰이 울리고 예전 학교 단체 카톡방에  |
| 3 | `name_input_scene` | 시스템 | school | 없음 |  |  | 전학생, 당신의 이름은? |
| 4 | `gate_1` | {name} | school | 없음 |  |  | *낯선 교문 앞, 내 교복만 아직 접힌 선이 선명하다. |
| 5 | `seoyeon_meet_1` | 서연 | school | seyoun_normal |  |  | 전학생? {name} 맞지? |
| 6 | `seoyeon_meet_2` | 서연 | school | seyoun_normal |  |  | *{name}의 이름을 한 번 더 확인한 뒤 클립보드  |
| 7 | `seoyeon_meet_3` | {name} | school | seyoun_normal |  |  | 맞는데. 어떻게 알았어? |
| 8 | `seoyeon_meet_4` | 서연 | school | seyoun_normal |  |  | 학생회장. 전학생 안내는 내 담당이야. |
| 9 | `seoyeon_meet_5` | 서연 | school | seyoun_normal |  |  | 따라와. 15분 안에 끝낼게. |
| 10 | `seoyeon_meet_6` | {name} | school | seyoun_normal |  |  | 학생회장이 직접? 과분한데. |
| 11 | `seoyeon_meet_7` | 서연 | school | seyoun_normal |  |  | 과분한 건지 아닌 건지는 내가 정해. |
| 12 | `seoyeon_meet_8` | {name} | school | seyoun_normal |  |  | *서연은 이미 교문 안쪽으로 걸음을 옮겼다. 안내 파일 |
| 13 | `seoyeon_choice` | {name} | school | seyoun_normal |  |  | *어떻게 반응할까?* |
| 14 | `choice_flirt_1` | 서연 | school | seyoun_normal |  |  | *서연의 구두가 반 바퀴 돌아선다. 안경테 위로 한쪽  |
| 15 | `choice_flirt_2` | 서연 | school | seyoun_laugh |  |  | 첫날부터 말은 잘하네. 이름은 금방 외우겠다. |
| 16 | `choice_flirt_3` | {name} | school | seyoun_laugh |  |  | 점수제야? |
| 17 | `choice_flirt_4` | 서연 | school | seyoun_normal |  |  | 아직 분위기 파악은 안 됐나 봐. 나쁘진 않아. |
| 18 | `choice_flirt_5` | {name} | school | seyoun_normal |  |  | 영광인데? |
| 19 | `choice_flirt_6` | 서연 | school | seyoun_normal |  |  | 아직 영광인지 재앙인지 모르는 거지. |
| 20 | `choice_flirt_7` | 서연 | school | seyoun_laugh |  |  | *앞서 걷는다. 한 번 뒤돌아보고 {name}의 발소리 |
| 21 | `hallway_1` | 서연 | school_hallway | seyoun_back |  |  | *복도를 앞서 걷는다. 마주치는 학생들이 먼저 인사할  |
| 22 | `hallway_3` | 서연 | school_hallway | seyoun_normal |  |  | 3학년 건물은 여기, 저쪽이 도서관. 매점은 지하. |
| 23 | `hallway_4` | 서연 | school_hallway | seyoun_normal |  |  | *주머니에서 열쇠를 꺼내 손바닥 위에서 짤랑거린다.* |
| 24 | `hallway_5` | 서연 | school_hallway | seyoun_normal |  |  | 옥상은 원래 잠겨 있어. 학생회장 특권이지. |
| 25 | `hallway_6` | {name} | school_hallway | seyoun_normal |  |  | 비밀 아지트라도 있어? |
| 26 | `hallway_6_b` | 서연 | school_hallway | seyoun_normal |  |  | *열쇠고리 소리가 뚝 끊긴다.* 눈치 빠르네. |
| 27 | `hallway_6_c` | 서연 | school_hallway | seyoun_normal |  |  | *대답 대신 열쇠를 다시 주머니에 넣는다.* |
| 28 | `hallway_7` | 서연 | school_hallway | seyoun_normal |  |  | 아, 점심. 밥 어디서 먹는지 모르지? 같이 가. |
| 29 | `hallway_8` | {name} | school_hallway | seyoun_shy |  |  | *서연은 교실 앞에 서서 문패를 가리킨다.* |
| 30 | `hallway_10` | 서연 | school_hallway | seyoun_normal |  |  | 여기야. 들어가 봐. |
| 31 | `hallway_11` | {name} | school_hallway | seyoun_normal |  |  | 점심때도 안내해 주는 거야? |
| 32 | `hallway_12` | 서연 | school_hallway | seyoun_normal |  |  | 그건 네가 잘하면. |
| 33 | `hallway_13` | 서연 | school_hallway | seyoun_back |  |  | *돌아선 서연이 클립보드를 든 손만 어깨 높이로 한 번 |
| 34 | `hallway_13_b` | {name} | school_hallway | seyoun_back |  |  | *복도 끝으로 멀어질 때까지 걸음이 흐트러지지 않았다. |
| 35 | `classroom_1` | {name} | room_school | 없음 |  |  | *교실 문을 열자 소음이 뚝 끊기고 가까운 책상 의자  |
| 36 | `classroom_2_b` | {name} | room_school | teacher_normal |  |  | *교탁 앞에 담임선생님이 서 있다. 20대 후반. 가디 |
| 37 | `classroom_3` | 담임 | room_school | teacher_normal |  |  | 자, 오늘부터 우리 반에 들어온 전학생이야. 자기소개  |
| 38 | `classroom_3_b` | {name} | room_school | teacher_normal |  |  | {name}입니다. 잘 부탁드립니다. *담임이 출석부의 |
| 39 | `classroom_5_b` | 담임 | room_school | teacher_normal |  |  | 그래, {name}. 외웠어. *출석부에 이름을 덧그으 |
| 40 | `classroom_5_c` | {name} | room_school | teacher_normal |  |  | *담임의 혼잣말은 교실 소음에 묻힌다. 교실 한쪽에서  |
| 41 | `classroom_dain_1` | 다인 | room_school | dain_normal |  |  | 오, 전학생. 우리 반에 새 얼굴 들어왔네! |
| 42 | `classroom_dain_2` | {name} | room_school | dain_normal |  |  | *갈색 숏컷에 배구부 유니폼. 자리에서 반쯤 일어나 손 |
| 43 | `classroom_dain_3` | 담임 | room_school | teacher_normal |  |  | 다인아, 목소리 낮춰. 그리고 교실에서는 유니폼 좀 그 |
| 44 | `classroom_dain_4` | 다인 | room_school | dain_normal |  |  | 쌤, 이게 제일 편하다니까요. 아무튼 전학생, 반갑다. |
| 45 | `classroom_dain_5` | {name} | room_school | dain_normal |  |  | *교실 몇 군데서 웃음이 터진다. 다인은 손을 더 높이 |
| 46 | `classroom_dain_5_b` | 담임선생님 | room_school | teacher_normal |  |  | *출석부 모서리로 교탁을 두 번 두드리고 다인 쪽을 보 |
| 47 | `classroom_dain_5_c` | 담임 | room_school | teacher_normal |  |  | 에너지 좀 아껴. 아직 1교시도 안 시작했어. |
| 48 | `classroom_dain_5_d` | 담임선생님 | room_school | teacher_angry |  |  | *담임은 출석부를 넘긴다.* |
| 49 | `classroom_yuna_1` | {name} | room_school | yuna_bored |  |  | *창가 맨 뒤쪽의 한 여학생은 턱을 괸 채 창밖만 본다 |
| 50 | `classroom_yuna_2` | {name} | room_school | yuna_bored |  |  | *은백색 머리. 붉은 눈. 팔의 타투. 창가 맨 뒤 자 |
| 51 | `classroom_yuna_4` | {name} | room_school | yuna_bored |  |  | *앞줄에서 누군가 속삭인다. '쟤한테 말 걸지 마. 무 |
| 52 | `classroom_seat_1` | 담임선생님 | room_school | teacher_normal |  |  | *빈자리를 가리킨다.* |
| 53 | `classroom_seat_2` | {name} | room_school | dain_normal |  |  | *다인 옆자리다. 의자에 앉기도 전에 다인이 내 책상  |
| 54 | `classroom_minsu_1` | {name} | room_school | minsu_normal |  |  | *자리에 앉으려는데 — 앞자리 남학생이 돌아본다.* |
| 55 | `classroom_minsu_2` | 민수 | room_school | minsu_smirk |  |  | 야, 전학생. 환영한다. — 그리고 조심해. |
| 56 | `classroom_minsu_3` | {name} | room_school | minsu_smirk |  |  | 뭘? |
| 57 | `classroom_minsu_2_b` | 민수 | room_school | minsu_normal |  |  | *다인 쪽으로 턱짓한다.* 체력 관리. |
| 58 | `classroom_dain_talk_1` | {name} | room_school | minsu_normal |  |  | *앞자리 이름표에는 '민수'라고 적혀 있었다.* |
| 59 | `classroom_dain_talk_2` | {name} | room_school | dain_normal |  |  | *자리에 앉자마자 다인이 상체를 기울인다. 책상 두 개 |
| 60 | `classroom_dain_talk_3` | 다인 | room_school | dain_normal |  |  | 야, {name}. 운동 좋아해? |
| 61 | `classroom_dain_talk_4` | {name} | room_school | dain_normal |  |  | 갑자기? |
| 62 | `classroom_dain_talk_5` | 다인 | room_school | dain_normal |  |  | 그냥. 방과후에 리시브 연습 상대가 필요해서. 서브 넣 |
| 63 | `classroom_dain_talk_6` | {name} | room_school | dain_normal |  |  | 나 볼 머신이야? |
| 64 | `classroom_dain_talk_7` | 다인 | room_school | dain_laugh |  |  | 그래도 볼 머신보단 낫겠지. 아마. |
| 65 | `classroom_dain_talk_8` | {name} | room_school | dain_laugh |  |  | *'아마' 뒤에 다인의 시선이 볼 머신 쪽으로 간다.  |
| 66 | `classroom_yuna_note_1` | {name} | room_school | yuna_bored |  |  | *접힌 쪽지가 책상 위로 미끄러져 온다. 뒤를 돌아봐도 |
| 67 | `classroom_yuna_note_3` | {name} | room_school | yuna_bored |  |  | *'시끄러운 자리 걸렸네. — 유나' 연보라색 잉크.  |
| 68 | `classroom_yuna_note_5` | {name} | room_school | yuna_bored |  |  | *유나 쪽을 보자 시선은 여전히 창밖이고 손만 책상 아 |
| 69 | `classroom_yuna_note_6` | {name} | room_school | yuna_bored |  |  | *수업 종이 울리자 유나는 다시 창밖을 보고 다인은 벌 |
| 70 | `lunch_start` | {name} | school_hallway | 없음 |  |  | *점심시간. 학생들로 찬 복도 끝에는 서연의 도시락 가 |
| 71 | `lunch_start_4` | {name} | school_hallway | seyoun_normal |  |  | *복도 끝에서 서연이 눈을 맞추더니 옥상 쪽을 손으로  |
| 72 | `lunch_start_4_b` | {name} | school_hallway | dain_normal |  |  | *옆에서 다인이 팔목을 낚아챈다.* |
| 73 | `lunch_start_5` | 다인 | school_hallway | dain_normal |  |  | 야, 밥 먹었어? 매점 가자. 빵 내기하자, 진 사람이 |
| 74 | `lunch_start_6` | {name} | school_hallway | yuna_normal |  |  | *유나는 가방만 들고 교실을 빠져나가 도서관 방향으로  |
| 75 | `lunch_start_7` | {name} | school_hallway | 없음 |  |  | *복도는 세 갈래다. 옥상, 매점, 도서관. 주머니 안 |
| 76 | `lunch_choice` | {name} | school_hallway | 없음 |  |  | *누구를 따라갈까?* |
| 77 | `lunch_dain_1` | 다인 | store | dain_laugh |  |  | 도착. 여기가 매점이야. 일단 고르고 봐. |
| 78 | `lunch_dain_1_aff_default` | 다인 | store | dain_normal |  |  | *매점 안은 점심시간이라 북적거린다. 빵 냄새랑 우유  |
| 79 | `lunch_dain_2` | 다인 | store | dain_normal |  |  | 소보로빵에 딸기우유. 이 조합은 실패한 적 없어. |
| 80 | `lunch_dain_3` | {name} | store | dain_normal |  |  | 근데 진 사람이 사준다며. 뭘 하는 거야? |
| 81 | `lunch_dain_4` | 다인 | store | dain_normal |  |  | 가위바위보. 간단하지. |
| 82 | `lunch_dain_5` | {name} | store | dain_normal |  |  | 당연한 건 아닌데. |
| 83 | `lunch_dain_6` | 다인 | store | dain_normal |  |  | 안 하면 네가 사는 걸로 친다? |
| 84 | `lunch_dain_7` | {name} | store | dain_normal |  |  | 하자. |
| 85 | `lunch_dain_8` | {name} | store | dain_normal |  |  | *가위바위보.* |
| 86 | `lunch_dain_9` | 다인 | store | dain_normal |  |  | 가위— 바위— 보! |
| 87 | `lunch_dain_10` | {name} | store | dain_normal |  |  | *가위. 바위. 보. — 다인이 졌다.* |
| 88 | `lunch_dain_11` | 다인 | store | dain_normal |  |  | 어? 나 졌네. 한 판 더. |
| 89 | `lunch_dain_12` | {name} | store | dain_pout |  |  | 약속은 약속이지. |
| 90 | `lunch_dain_12_b` | 다인 | store | dain_pout |  |  | 아, 알았어. 내가 산다. 이모, 소보로 두 개요. |
| 91 | `lunch_dain_14` | 다인 | store | dain_pout |  |  | *동전을 카운터에 탁탁 놓고 소보로 두 개를 받아 든다 |
| 92 | `lunch_dain_15` | {name} | store | dain_normal |  |  | *매점 한쪽 벤치에 앉아 빵을 먹는다.* |
| 93 | `lunch_dain_16` | 다인 | store | dain_normal |  |  | *빵 봉지를 뜯는다.* 야, 너 운동 진짜 안 해? |
| 94 | `lunch_dain_17` | {name} | store | dain_normal |  |  | 왜, 내 체력이 걱정돼? |
| 95 | `lunch_dain_18` | 다인 | store | dain_laugh |  |  | 아니. 나랑 다니려면 체력부터 봐야지. |
| 96 | `lunch_dain_19` | {name} | store | dain_laugh |  |  | 자기 PR인 줄 알았어. |
| 97 | `lunch_dain_20` | 다인 | store | dain_laugh |  |  | PR? 그게 뭔데. |
| 98 | `lunch_dain_21` | {name} | store | dain_normal |  |  | Personal Record. 운동할 때 쓰는 말인데. |
| 99 | `lunch_dain_22` | 다인 | store | dain_normal |  |  | *딸기우유 팩 옆면이 손가락에 눌려 우그러진다.* |
| 100 | `lunch_dain_23` | 다인 | store | dain_laugh |  |  | 오, 그거 알아? 너 운동 쪽 좀 아네? |
| 101 | `lunch_dain_choice` | 다인 | store | dain_laugh |  |  | *빨대를 문 채 상체를 가까이 기울인다.* |
| 102 | `lunch_dain_c1_1` | 다인 | store | dain_laugh |  |  | 좋아. 그럼 방과후 체육관 와. 워밍업부터 보자, 콜? |
| 103 | `lunch_dain_c1_2` | {name} | store | dain_laugh |  |  | *다인의 웃음소리가 매점 소음 위로 튄다. 의자가 뒤로 |
| 104 | `lunch_dain_after` | {name} | store | dain_laugh |  |  | *빵을 다 먹고 일어서는데.* |
| 105 | `lunch_dain_after_2` | 다인 | store | dain_normal |  |  | 야, {name}. |
| 106 | `lunch_dain_after_3` | {name} | store | dain_normal |  |  | 응? |
| 107 | `lunch_dain_after_4` | 다인 | store | dain_normal |  |  | 전학 와서 첫 식사 파트너가 나다? 나름 역사적인데. |
| 108 | `lunch_dain_after_5` | 다인 | store | dain_normal |  |  | *주먹으로 {name}의 어깨를 툭 치고 그대로 한 번 |
| 109 | `lunch_dain_freetalk` | 다인 | store | dain_normal |  |  | *빵 봉지를 접어 주머니에 넣고 벤치 등받이에 기댄다. |
| 110 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *종이 울린다. 점심시간이 끝났다.* |
| 111 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에 |
| 112 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 113 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창 |
| 114 | `after_kakao_5` | {name} | school_hallway | 없음 |  | 🌅 | *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른 |
| 115 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록  |
| 116 | `after1_jealousy_dain_1` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 점심때 매점에서 다인이랑 같이 있는 거 봤는데. 적응  |
| 117 | `after1_jealousy_dain_2` | {name} | school_hallway | seyoun_laugh |  | 🌅 | *서연은 클립보드를 가슴 앞에 세운 채 답을 기다린다. |
| 118 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *복도를 계속 걷는다.* |
| 119 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도를 걷는데 뒤에서 쿵쿵 발소리.* |
| 120 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 조심! |
| 121 | `after_miss_dain_3` | {name} | school_hallway | dain_normal |  | 🌅 | *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 |
| 122 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 피했다? 반사신경 괜찮은데. |
| 123 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 넌 복도에서 왜 전력질주야? |
| 124 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 늦었거든! 체육관 가야 해. 내일 보자, 전학생! |
| 125 | `after_miss_dain_6_b` | {name} | school_hallway | dain_laugh |  | 🌅 | *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을  |
| 126 | `after_miss_dain_7` | {name} | school_hallway | dain_laugh |  | 🌅 | *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아 |
| 127 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으 |
| 128 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 이거 떨어뜨렸어. |
| 129 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피 |
| 130 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌  |
| 131 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 고마워. |
| 132 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피를 책등 사이에 끼우고 돌아선다.* |
| 133 | `after_miss_yuna_4` | {name} | library_old | yuna_normal |  | 🌅 | *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 |
| 134 | `after_miss_seoyeon_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *하교하려는데 복도에서 서연과 마주친다.* |
| 135 | `after_miss_seoyeon_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 아까 어디 갔어? |
| 136 | `after_miss_seoyeon_3` | {name} | school_hallway | seyoun_normal |  | 🌅 | 어디라니? |
| 137 | `after_miss_seoyeon_4` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 옥상 열어놨는데 안 왔네. — 전학생, 배짱이 있어. |
| 138 | `after_miss_seoyeon_5` | {name} | school_hallway | seyoun_normal |  | 🌅 | 기다린 거야? |
| 139 | `after_miss_seoyeon_6` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 바람 쐬러 올라간 건데 문이 열려 있길래. |
| 140 | `after_miss_seoyeon_7` | {name} | school_hallway | seyoun_normal |  | 🌅 | *서연의 클립보드 맨 위에 내 이름이 남아 있다. 체크 |
| 141 | `after_miss_seoyeon_8` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 내일은 빠지지 마. |
| 142 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든 |
| 143 | `after_hidden_nurse_intro` | {name} | school_hallway | 없음 |  | 🌅 | *복도 형광등이 흔들려 보여 벽을 짚자 손바닥에 차가운 |
| 144 | `after_hidden_nurse_choice` | {name} | school_hallway | 없음 |  | 🌅 | *아침부터 계속 사람들 틈에 있었다. 발걸음이 보건실  |
| 145 | `after_nurse_skip` | {name} | school_hallway | 없음 |  | 🌅 | *교문 쪽으로 걷는다.* |
| 146 | `night_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄 |
| 147 | `night_start_3` | {name} | room_my | 없음 |  |  | *핸드폰이 울린다. 학교 메신저.* |
| 148 | `night_msg_dain_1` | 다인 | room_my | dain_normal | 0.35 |  | *가위바위보 리벤지 내일이다* |
| 149 | `night_msg_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | *내일은 리벤지다 ㅋㅋ* |
| 150 | `night_msg_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | *오늘 빵값 아직도 아깝다. 진짜.* |
| 151 | `night_msg_dain_4` | {name} | room_my | dain_normal | 0.35 |  | *세 줄이 거의 동시에 도착했다. 답장창에는 벌써 'ㅋ |
| 152 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 다른 알림이 보인다.* |
| 153 | `night_late_transition` | {name} | room_my | 없음 |  |  | *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시 |
| 154 | `night_late_branch` | {name} | room_my | 없음 |  |  | *화면이 밝아진다.* |
| 155 | `night_dain_late_1` | 다인 | room_my | dain_normal | 0.35 |  | *야 아직 안 잤지?* |
| 156 | `night_dain_late_2` | 다인 | room_my | dain_normal | 0.35 |  | *내일 아침 운동 같이 할 사람 구한다* |
| 157 | `night_dain_late_3` | 다인 | room_my | dain_normal | 0.35 |  | *거절은 안 받음 ㅋㅋ* |
| 158 | `night_dain_late_4` | {name} | room_my | dain_normal | 0.35 |  | *답장창에는 이미 '콜'이 찍혀 있다.* |
| 159 | `night_dain_late_4_b` | {name} | room_my | dain_normal | 0.35 |  | *다인의 메시지 아래에 이모티콘이 줄줄이 붙어 있다.  |
| 160 | `night_end_1` | {name} | room_my | 없음 |  |  | *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교 |
| 161 | `night_end_3` | {name} | room_my | 없음 |  |  | *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을  |
| | **Day 2** | | | | | | |
| 162 | `morning2_start` | {name} | room_school | 없음 |  |  | *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.* |
| 163 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 164 | `morning2_greet_dain_1` | 다인 | room_school | dain_laugh |  |  | 야! 어제 재밌었다, 오늘도 같이 뭐 하자! |
| 165 | `morning2_greet_dain_2` | 다인 | room_school | dain_laugh |  |  | *뒤에서 어깨를 탁 친다.* |
| 166 | `morning2_greet_dain_others` | 서연 | room_school | seyoun_normal |  |  | *클립보드를 넘기며 지나간다.* |
| 167 | `morning2_greet_dain_others_seo` | 서연 | room_school | seyoun_normal |  |  | 에너지 좋다. |
| 168 | `morning2_greet_dain_others_yuna` | {name} | room_school | yuna_bored |  |  | *유나의 펜촉이 쪽지 한가운데 잉크점을 남긴다.* |
| 169 | `morning2_greet_dain_others_2` | {name} | room_school | dain_laugh |  |  | *교실 문이 닫힌 뒤 클립보드 두드리는 소리가 복도에서 |
| 170 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *자리에 앉으려는데 — 책상 위에 접힌 쪽지가 하나 놓 |
| 171 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 172 | `morning2_note_3` | {name} | room_school | yuna_normal | 0.35 |  | *어제와 같은 글씨. 아래쪽에 장소가 적혀 있다. '도 |
| 173 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가다 교실 안을 들여다본다.* 어제 잘 잤 |
| 174 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 학생회장이 교실까지 인사하러 와? |
| 175 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 순찰이야. — 출석률 확인 겸. |
| 176 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | *복도로 돌아가기 직전 클립보드 끝이 문틀에 한 번 닿 |
| 177 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연이 사라진 복도를 바라보는데 — 뒤에서 민수가 돌 |
| 178 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 이틀 만에 학생회장이 인사하러 오냐? 나 1 |
| 179 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 인기가 없는 거 아닐까. |
| 180 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 그건 맞는데 그게 중요한 게 아니잖아. |
| 181 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *다인은 서연의 뒷모습이 교실 안으로 사라질 때까지 바 |
| 182 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 회장님도 우리 전학생한테 관심 있어? 인기 많네! |
| 183 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | '우리' 전학생? |
| 184 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 내가 먼저 봤잖아. 그럼 우리 맞지. 찜한 거. |
| 185 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *쉬는 시간. 복도로 나왔다.* |
| 186 | `morning2_break_1` | {name} | school_hallway | 없음 |  |  | *서연의 클립보드 끝이 책상에 톡 닿는다. 답할 틈도  |
| 187 | `morning2_seo_dust_1` | {name} | school_hallway | seyoun_normal |  |  | *1교시가 끝난 쉬는 시간, 복도에서 서연과 스친다.  |
| 188 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 잠깐. |
| 189 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *손이 {name}의 어깨에 닿는다. 먼지를 두 번 털 |
| 190 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 옷에 뭐 묻었어. |
| 191 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | *서연의 손이 떨어진 자리에서 가방끈이 비뚤어져 있다. |
| 192 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 왜 그래? 먼지잖아. |
| 193 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *어깨의 먼지는 없어졌는데 가방끈을 두 번이나 다시 고 |
| 194 | `morning2_dain_react_2` | {name} | school_hallway | dain_angry |  |  | *서연이 클립보드를 고쳐 끼고 복도로 간다. 뒤에서 다 |
| 195 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 지금 뭐야? 어깨 만진 거야? |
| 196 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 먼지 털어준 거야. |
| 197 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 먼지가 진짜 있긴 했어? |
| 198 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | *대답 대신 가방끈을 고쳐 잡았다. 다인은 그걸 보고도 |
| 199 | `morning2_end` | {name} | school_hallway | seyoun_normal |  |  | *민수 말로는 1년 동안 먼저 인사한 적도 없다던 서연 |
| 200 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *점심. 주머니에는 유나의 쪽지가 있고 복도 끝에서는  |
| 201 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *누구와 함께할까.* |
| 202 | `lunch2_seo_1_check` | {name} | school_hallway | 없음 |  |  | *옥상으로 올라간다.* |
| 203 | `lunch2_seo_1b` | {name} | top_school | seyoun_normal |  |  | *처음 올라온 옥상이다. 난간 아래에서 운동장 호루라기 |
| 204 | `lunch2_seo_2b_check` |  | top_school | seyoun_normal |  |  |  |
| 205 | `lunch2_seo_2b_dain` | 서연 | top_school | seyoun_normal |  |  | 어제는 매점 쪽이더니. 오늘은 여기까지 왔네. |
| 206 | `lunch2_seo_3b_dain` | {name} | top_school | seyoun_normal |  |  | 어제는 다인이 끌고 갔고 오늘은 내가 올라오고 싶었어. |
| 207 | `lunch2_seo_4b_dain` | 서연 | top_school | seyoun_normal |  |  | 그건 좀 다르네. |
| 208 | `lunch2_seo_5b_dain` | {name} | top_school | seyoun_normal |  |  | 바람도 좋고. 네 도시락도 계속 생각났고. |
| 209 | `lunch2_seo_6b_dain` | 서연 | top_school | seyoun_laugh |  |  | 솔직하네. |
| 210 | `lunch2_seo_7` | {name} | top_school | seyoun_normal |  |  | *서연이 도시락 뚜껑을 여는 순간 옥상 문이 철컥 열린 |
| 211 | `lunch2_seo_9` | 다인 | top_school | dain_normal |  |  | 여기 있었네. 찾았다. 오늘도 나 빼고 먹으려고? |
| 212 | `lunch2_seo_10` | 서연 | top_school | seyoun_normal |  |  | 옥상은 허가제야. 그리고 오늘 점심은 내가 먼저 잡았고 |
| 213 | `lunch2_seo_11` | 다인 | top_school | dain_normal |  |  | 그럼 난 지금부터 끼면 되겠네. 나도 앉는다? |
| 214 | `lunch2_seo_12` | {name} | top_school | dain_normal |  |  | *다인이 빈자리에 바로 앉는다. 서연의 젓가락이 계란말 |
| 215 | `lunch2_seo_13` | 다인 | top_school | dain_normal |  |  | 어제는 나랑 먹었잖아. 하루 만에 회장님 도시락으로 갈 |
| 216 | `lunch2_seo_14` | 서연 | top_school | seyoun_normal |  |  | *다인이 앉으려 하자 빈 의자를 발끝으로 자기 쪽에 붙 |
| 217 | `lunch2_seo_15` | {name} | top_school | seyoun_normal |  |  | 같은 반이잖아. 너희 둘도 이제 아는 사이고. |
| 218 | `lunch2_seo_16` | 서연 | top_school | seyoun_normal |  |  | 친해지는 것하고 양보하는 건 다르지. |
| 219 | `lunch2_seo_17` | 다인 | top_school | dain_normal |  |  | 그럼 나도 양보 안 해. 다음 쉬는 시간에 체육관 와. |
| 220 | `lunch2_seo_19` | 서연 | top_school | seyoun_normal |  |  | {name}, 지금 내 앞에서 다음 약속 잡는 거야? |
| 221 | `lunch2_seo_20` | 서연 | top_school | seyoun_normal |  |  | 대답은 나중에 해. 일단 입가에 뭐 묻었어. 가만있어  |
| 222 | `lunch2_seo_choice` | 서연 | top_school | seyoun_normal |  |  | *물티슈를 감은 손가락이 입가로 다가온다.* |
| 223 | `lunch2_seo_c1_1` | 서연 | top_school | seyoun_normal |  |  | *물티슈로 밥풀을 떼어내고 사용한 쪽을 안으로 접는다. |
| 224 | `lunch2_seo_c1_2` | 서연 | top_school | seyoun_normal |  |  | 됐어. |
| 225 | `lunch2_seo_c1_2_b` | 다인 | top_school | dain_normal |  |  | *다인은 도시락으로 뻗던 손을 공중에 둔 채 둘을 번갈 |
| 226 | `lunch2_seo_c1_3` | 다인 | top_school | dain_normal |  |  | 밥풀을 직접 떼어줘요? |
| 227 | `lunch2_seo_c1_3_b` | 서연 | top_school | seyoun_normal |  |  | *물티슈를 네모로 접는다.* 밥풀이었어. |
| 228 | `lunch2_seo_c1_4` | 서연 | top_school | seyoun_shy |  |  | 그게 다야. |
| 229 | `lunch2_seo_c1_5` | {name} | top_school | seyoun_shy |  |  | *서연은 물병을 집어 들지만 뚜껑은 열지 않는다. 라벨 |
| 230 | `lunch2_seo_end_c1` | {name} | top_school | seyoun_shy |  |  | *다인이 접이식 의자 다리를 운동화 끝으로 두 번 건드 |
| 231 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *방과후. 핸드폰에 알림이 두 개 와 있다.* |
| 232 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 체육관 와. 오늘은 진짜 내기다. |
| 233 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 학생회실에 올 수 있어? 일손이 부족해서. |
| 234 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게서는 아무 연락이 없다. 가방을 챙기자 주머니 |
| 235 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *어디로 갈까.* |
| 236 | `after2_dain_1` | {name} | gym | dain_active |  | 🌅 | *체육관. 다인이 배구 네트 앞에서 준비운동을 하고 있 |
| 237 | `after2_dain_2` | 다인 | gym | dain_sweat |  | 🌅 | 왔어? 늦었어. |
| 238 | `after2_dain_3` | {name} | gym | dain_sweat |  | 🌅 | 5분 전인데. |
| 239 | `after2_dain_4` | 다인 | gym | dain_sweat |  | 🌅 | 나는 10분 전에 왔거든. |
| 240 | `after2_dain_5` | {name} | gym | dain_sweat |  | 🌅 | *빨리 온 쪽이 너. 나는 안 늦었다.* |
| 241 | `after2_dain_6` | 다인 | gym | dain_sweat |  | 🌅 | 자, 내기다! 서브 다섯 번, 세 번 이상 넘기면 네  |
| 242 | `after2_dain_7` | {name} | gym | dain_normal |  | 🌅 | 갑자기 떡볶이? |
| 243 | `after2_dain_8` | 다인 | gym | dain_laugh |  | 🌅 | 배고프거든. |
| 244 | `after2_dain_9` | {name} | gym | dain_normal |  | 🌅 | *첫 서브는 네트에 걸리고 두 번째는 선 안쪽에 떨어진 |
| 245 | `after2_dain_9_b` | 다인 | gym | dain_normal |  | 🌅 | *튕겨 나온 공을 양손으로 받아 든다.* 어? 봐주려고 |
| 246 | `after2_dain_9_c` | 다인 | gym | dain_active |  | 🌅 | *자세를 낮춘다. 공을 든 손에 힘이 들어간다.* |
| 247 | `after2_dain_9_d` | 다인 | gym | dain_active |  | 🌅 | 이번엔 제대로 간다! |
| 248 | `after2_dain_9_e` | {name} | gym | dain_active |  | 🌅 | *랠리가 빠르게 오간다. 다인은 착지할 때마다 왼발부터 |
| 249 | `after2_dain_9_f` | {name} | gym | dain_sweat |  | 🌅 | *점수판은 3:2. 다인은 일어서며 오른쪽 무릎을 한  |
| 250 | `after2_dain_11b` | {name} | street | dain_laugh |  | 🌅 | *체육관을 나와 거리를 걸었다.* |
| 251 | `after2_dain_12` | 다인 | street | dain_laugh |  | 🌅 | 졌네. 근데 좀 치는데? 너 운동 안 한다며. |
| 252 | `after2_dain_13` | {name} | street | dain_laugh |  | 🌅 | 안 한다고는 안 했어. |
| 253 | `after2_dain_14` | 다인 | street | dain_normal |  | 🌅 | *들고 있던 공을 떨어뜨린다.* 뭐야? 속은 거야? |
| 254 | `after2_dain_15` | {name} | street | dain_normal |  | 🌅 | 속인 건 아니고 물어보지도 않았잖아. |
| 255 | `after2_dain_16` | 다인 | street | dain_laugh |  | 🌅 | *주먹을 어깨 높이까지 들었다가 자기 옆구리에 붙인다. |
| 256 | `after2_dain_freetalk` | 다인 | store | dain_normal |  | 🌅 | *가게에 들어서자 다인이 떡볶이 컵을 밀어 놓고 젓가락 |
| 257 | `after2_dain_end` | {name} | store | dain_laugh |  | 🌅 | *다인이 떡볶이 컵을 내 쪽으로 밀어 두고 자기 몫 젓 |
| 258 | `after2_dain_end_b` | {name} | store | dain_laugh |  | 🌅 | *학교 앞 떡볶이집. 다인이 떡볶이를 후후 불며 말한다 |
| 259 | `after2_dain_end_2` | 다인 | store | dain_laugh |  | 🌅 | 야, 너 진짜 운동 좀 아는 거지? |
| 260 | `after2_dain_end_2b` | {name} | store | dain_laugh |  | 🌅 | 조금. |
| 261 | `after2_dain_end_2c` | 다인 | store | dain_laugh |  | 🌅 | 조금이면 저렇게 못 쳐! — 인정해, 잘한다고. |
| 262 | `after2_dain_end_2d` | {name} | store | dain_laugh |  | 🌅 | 다인이가 훨씬 잘하던데. |
| 263 | `after2_dain_end_3` | 다인 | store | dain_laugh |  | 🌅 | *젓가락 끝이 떡볶이 컵 위에서 그대로다.* |
| 264 | `after2_dain_end_3b` | 다인 | store | dain_laugh |  | 🌅 | 당연하지. 나 체육 특기생이었거든. |
| 265 | `after2_dain_end_3c` | {name} | store | dain_laugh |  | 🌅 | *'이었거든'이 끝나자 다인의 젓가락이 종이컵 옆 물컵 |
| 266 | `after2_dain_end_3d` | 다인 | store | dain_laugh |  | 🌅 | 아, 맵다. 물, 물. |
| 267 | `after2_dain_end_3e` | 다인 | store | dain_shy |  | 🌅 | *떡볶이 컵을 {name} 쪽으로 밀어놓고 빈 물병을  |
| 268 | `after2_dain_return` | {name} | school | dain_shy |  | 🌅 | *학교로 돌아오는 길. 교문 앞에 다다랐다.* |
| 269 | `after2_group_dain_companion` | 다인과 동행 | gym | 없음 |  | 🌅 | *체육관과 별관에서 들은 설명이 서로 어긋난다. 다인이 |
| 270 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.* |
| 271 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 272 | `night2_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저  |
| 273 | `night2_msg_1` | {name} | room_my | 없음 |  |  | *세 명에게서 메시지가 왔다.* |
| 274 | `night2_msg_dain_specific` | 다인 | room_my | dain_normal | 0.35 |  | 야, 오늘 떡볶이 맛있었다. |
| 275 | `night2_msg_dain_specific_2` | 다인 | room_my | dain_normal | 0.35 |  | 내일도 내기하자. 종목 바꿔서. |
| 276 | `night2_msg_seo_general` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 점심에 옥상 열어놓을게. 와 |
| 277 | `night2_msg_yuna_general` | 유나 | room_my | yuna_normal | 0.35 |  | 내일 별관 올 거야? |
| 278 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에  |
| 279 | `night2_choice` | {name} | room_my | 없음 |  |  | *누구에게 먼저 답장할까?* |
| 280 | `night2_reply_seo_1` | {name} | room_my | seyoun_normal | 0.35 |  | 부르면 또 갈게 |
| 281 | `night2_reply_seo_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 쉽게 말하네 |
| 282 | `night2_reply_seo_3` | {name} | room_my | seyoun_normal | 0.35 |  | 쉬운 말인데 |
| 283 | `night2_reply_seo_4` | 서연 | room_my | seyoun_normal | 0.35 |  | 점심에 옥상 열어둘게. 늦지 마 |
| 284 | `night2_reply_seo_5` | {name} | room_my | seyoun_normal | 0.35 |  | *서연은 거기서 메시지를 끝냈다.* |
| 285 | `night2_reply_seo_react_default` | 서연 | room_my | seyoun_normal | 0.35 |  | ㅋ 알겠어. 내일 봐. |
| 286 | `night2_seo_freetalk` | 서연 | room_my | seyoun_normal | 0.35 | 🌙 | 아, 잠깐. 아직 안 잤지? |
| 287 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 또 다른 알림이 보인다.* |
| 288 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 보내고 핸드폰을 내려놓았다.* |
| 289 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이,  |
| 290 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 |
| 291 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *메모장에 줄줄이 남은 보내지 않은 문장. '선생님,  |
| 292 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 메모가 마지막이다. 그 아래 39번째에는 제 |
| 293 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 |
| 294 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로 |
| 295 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보 |
| 296 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화 |
| 297 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 |
| 298 | `night2_end_2_b` | {name} | room_my | 없음 |  |  | *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있 |
| 299 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.* |
| 300 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을  |
| 301 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 |
| | **Day 3** | | | | | | |
| 302 | `morning3_start` | {name} | school | 없음 |  |  | *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯 |
| 303 | `morning3_start_2` | {name} | school | 없음 |  |  | *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군 |
| 304 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 305 | `morning3_seo_gate_1` | {name} | school | seyoun_normal |  |  | *교문 앞의 서연은 지각 종이 울리기 직전인데도 발을  |
| 306 | `morning3_seo_gate_cold_1` | 서연 | school | seyoun_normal |  |  | *서연이 지나치다 명찰 쪽으로 눈만 돌린다.* |
| 307 | `morning3_seo_gate_cold_2` | 서연 | school | seyoun_normal |  |  | 전학생. 아직 다니고 있었구나. |
| 308 | `morning3_seo_gate_cold_3` | {name} | school | seyoun_normal |  |  | *평소처럼 이름도 부르지 않았다. 서연의 구두 소리만  |
| 309 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실에 들어서자 서연의 펜이 멈추고 다인의 의자가 뒤 |
| 310 | `morning3_react_seo_1` | 다인 | room_school | dain_normal |  |  | 야, 회장님이랑 같이 왔어? 아침부터? |
| 311 | `morning3_react_seo_2` | 유나 | room_school | yuna_bored |  |  | *창밖을 보던 유나가 유리창에 비친 {name}을 확인 |
| 312 | `morning3_date_intro` | {name} | room_school | 없음 |  |  | *1교시가 끝났다. 쉬는 시간마다 누군가 말을 건다.* |
| 313 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *쉬는 시간, 복도로 나왔다. 서연이 먼저 걸음을 맞춘 |
| 314 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | 이번 주말에 시간 있어? 공원에 같이 가자. |
| 315 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끈다. 눈이 마주치 |
| 316 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼  |
| 317 | `morning3_date_dain_2` | 다인 | room_school | dain_normal |  |  | *서연이 아직 교실 문 앞에 서 있다. 다인은 이쪽을  |
| 318 | `morning3_date_dain_choice` | 다인 | room_school | dain_normal |  |  | *서연의 발소리가 멎는다. 다인은 대답을 기다린다.* |
| 319 | `morning3_date_dain_accept` | {name} | room_school | dain_laugh |  |  | *다인과 주말 약속을 잡았다. 다인이 웃자 복도에서 서 |
| 320 | `morning3_date_dain_decline_narr` | 다인 | room_school | dain_laugh |  |  | *다인은 웃으며 자기 자리로 돌아간다. 종이 치기 직전 |
| 321 | `morning3_date_dain_decline_inner_2` | {name} | room_school | dain_laugh |  |  | *다인이 자리로 돌아간 뒤, 종이 치기 직전의 교실만  |
| 322 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다 |
| 323 | `morning3_date_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 접어 둔 쪽지를 꺼내려다 다시 책갈피 사이에  |
| 324 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 325 | `morning3_multi_from_dain` |  | room_school | 없음 |  |  |  |
| 326 | `morning3_end` | {name} | room_school | 없음 |  |  | *수업 종료 종이 울리고 곧 점심시간이 된다.* |
| 327 | `morning3_end_b` | 유나 | room_school | yuna_normal |  |  | 맛있네. |
| 328 | `lunch3_start` | {name} | room_school | yuna_normal |  |  | *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. |
| 329 | `lunch3_start_2_b` | 다인 | room_school | dain_normal |  |  | *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가 |
| 330 | `lunch3_meal_1` | 다인 | room_school | dain_laugh |  |  | 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고  |
| 331 | `lunch3_meal_2` | {name} | room_school | dain_laugh |  |  | 그건 내 거... |
| 332 | `lunch3_meal_3` | 서연 | room_school | seyoun_normal |  |  | 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점 |
| 333 | `lunch3_meal_4` | {name} | room_school | seyoun_normal |  |  | 점수 매기지 마. |
| 334 | `lunch3_meal_5` | 서연 | room_school | seyoun_normal |  |  | 10점 만점이야. 나쁜 거 아닌데? |
| 335 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다 |
| 336 | `lunch3_meal_7` | {name} | room_school | seyoun_normal |  |  | 유나, 그건 내가 제일 좋아하는 건데. |
| 337 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임 |
| 338 | `lunch3_meal_8` | {name} | room_school | yuna_bored |  |  | *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다. |
| 339 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. |
| 340 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓 |
| 341 | `lunch3_meal_10_d` | 다인 | room_school | dain_laugh |  |  | *"다 같이?" 다인은 웃지만 의자를 당기지 않는다.* |
| 342 | `lunch3_meal_11` | {name} | room_school | yuna_bored |  |  | *누구에게 줄까?* |
| 343 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *마지막 반찬을 누구에게 줄지 고민한다.* |
| 344 | `lunch3_share_1` | {name} | room_school | yuna_bored |  |  | *다 같이 나눠 먹자고 하자 셋이 웃는다. 웃음이 끊긴 |
| 345 | `lunch3_share_solo` | {name} | room_school | yuna_normal |  |  | *셋이 계란말이를 조금씩 나눠 먹는다. 반으로 갈린 마 |
| 346 | `lunch3_end` | {name} | room_school | 없음 |  |  | *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다 |
| 347 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육 |
| 348 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다 |
| 349 | `after3_auto_dain` | {name} | school_hallway | 없음 |  | 🌅 | *다인과 약속이 있다. 체육관으로 간다.* |
| 350 | `after3_reject_for_dain_1` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *웃고 있다. 클립보드의 종이 모서리를 맞춘다.* |
| 351 | `after3_reject_for_dain_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 오늘은 할 일이 좀 있어서. 먼저 갈게. |
| 352 | `after3_reject_for_dain_2b` | {name} | yuna_hideout | 없음 |  | 🌅 | *유나의 아지트로 걸어간다.* |
| 353 | `after3_reject_for_dain_3` | {name} | library_old | yuna_normal | 0.35 | 🌅 | *도서관에 쪽지가 없다. 유나의 가방도 없다. 자리에  |
| 354 | `after3_reject_for_dain_3b` | {name} | school_hallway | 없음 |  | 🌅 | *복도로 돌아왔다. 바닥에 유나가 두고 간 물 자국이  |
| 355 | `after3_dain_1` | {name} | gym | dain_sweat |  | 🌅 | *체육관에서 다인이 혼자 스트레칭 중이다. 가볍게 뛰어 |
| 356 | `after3_dain_3` | {name} | dain_hurt_event1 | 없음 |  | 🌅 | 다인! |
| 357 | `after3_dain_4` | 다인 | gym | dain_sweat |  | 🌅 | 괜찮아. 그냥 좀 삐끗한 거야. |
| 358 | `after3_dain_5` | {name} | gym | dain_sweat |  | 🌅 | 괜찮아 보이진 않는데. |
| 359 | `after3_dain_5_b` | 다인 | gym | dain_sweat |  | 🌅 | 진짜 괜찮아. 별거 아니야. |
| 360 | `after3_dain_6` | 다인 | gym | dain_sad |  | 🌅 | *말을 마친 뒤에야 다인이 크게 웃는다.* |
| 361 | `after3_dain_choice` | 다인 | gym | dain_sad |  | 🌅 | *다인이 벤치에 앉아 무릎 한곳만 계속 문지른다.* |
| 362 | `after3_dain_correct_1` | 다인 | gym | dain_sad |  | 🌅 | *다인은 무릎을 감싸던 손을 떼지도 못한 채 나를 본다 |
| 363 | `after3_dain_correct_2` | 다인 | gym | dain_normal |  | 🌅 | 야. |
| 364 | `after3_dain_correct_3` | {name} | gym | dain_normal |  | 🌅 | 왜. |
| 365 | `after3_dain_correct_4` | 다인 | gym | dain_shy |  | 🌅 | 너 좀 이상해. |
| 366 | `after3_dain_correct_5` | {name} | gym | dain_shy |  | 🌅 | 이상한 게 좋은 거야 나쁜 거야. |
| 367 | `after3_dain_correct_6` | 다인 | gym | dain_shy |  | 🌅 | 몰라. 근데 잠깐만 여기 있어. 지금 혼자 있기는 좀  |
| 368 | `after3_dain_correct_7` | 다인 | gym | dain_sad |  | 🌅 | *벤치 안쪽으로 자리를 내준다. 배구공은 발끝으로 밀어 |
| 369 | `after3_dain_correct_8` | 다인 | gym | dain_laugh |  | 🌅 | 그냥 얘기나 하자. |
| 370 | `after3_dain_correct_9` | {name} | gym | 없음 |  | 🌅 | *옆에 앉자 다인은 배구공을 발끝으로 코트 경계선까지  |
| 371 | `after3_dain_correct_10` | 다인 | gym | dain_laugh |  | 🌅 | 나 원래 이런 얘기 잘 안 하거든. 뭐부터 말해야 하지 |
| 372 | `after3_dain_correct_11` | 다인 | gym | dain_sweat |  | 🌅 | *다인은 오른쪽 다리를 펴다가 얼굴을 찡그리고 다시 굽 |
| 373 | `after3_dain_correct_12` | {name} | gym | dain_sad |  | 🌅 | 무릎 얘기부터 하자. |
| 374 | `after3_dain_dilemma_tell` | 다인 | gym | dain_normal |  | 🌅 | 뭐? |
| 375 | `after3_dain_dilemma_tell_2` | {name} | gym | dain_sad |  | 🌅 | 무릎. 아까부터 계속 문지르잖아. 이건 오늘 삐끗한 게 |
| 376 | `after3_dain_dilemma_tell_3` | {name} | gym | dain_sad |  | 🌅 | *다인은 입을 다물고 무릎 위 손가락만 접었다 편다.* |
| 377 | `after3_dain_dilemma_tell_4` | 다인 | gym | dain_sad |  | 🌅 | 알면서 왜 말해. 다음 주 대회인 거 알잖아. |
| 378 | `after3_dain_dilemma_tell_5` | {name} | gym | dain_sad |  | 🌅 | 대회보다 네 무릎이 더 중요해. |
| 379 | `after3_dain_dilemma_tell_6` | 다인 | gym | dain_angry |  | 🌅 | 그건 네가 정하는 게 아니야. |
| 380 | `after3_dain_dilemma_tell_7` | 다인 | gym | dain_angry |  | 🌅 | *다인이 일어나 신발끈을 묶으려 몸을 숙이자 무릎에서  |
| 381 | `after3_dain_dilemma_tell_8` | 다인 | gym | dain_sad |  | 🌅 | 제발. 이것만은 아무한테도 말하지 마. |
| 382 | `after3_dain_dilemma_final` | 다인 | gym | dain_sad |  | 🌅 | *다인은 젖은 눈가를 닦지 않는다. 마지막 말 뒤에 늘 |
| 383 | `after3_dain_tell_retreat` | 다인 | gym | dain_sad |  | 🌅 | *다인은 숨을 길게 뱉고 발끝으로 굴러온 공을 세운다. |
| 384 | `after3_dain_choice1` | {name} | gym | dain_sad |  | 🌅 | *대답을 재촉하지 않고 옆에 앉는다. 다인은 운동화 끈 |
| 385 | `after3_dain_choice1_2` | 다인 | gym | dain_sad |  | 🌅 | 왜 안 물어봐? |
| 386 | `after3_dain_choice1_3` | {name} | gym | dain_shy |  | 🌅 | 네가 준비되면 먼저 말한다고 했잖아. |
| 387 | `after3_dain_choice1_react` | 다인 | gym | dain_shy |  | 🌅 | *다인은 입술을 깨물다 웃음을 흘리고 손등으로 눈가를  |
| 388 | `after3_dain_choice1_react2` | 다인 | gym | dain_shy |  | 🌅 | 맞아. 지금 물었으면 또 괜찮다고 했을 거야. |
| 389 | `after3_dain_choice1_react3` | 다인 | gym | dain_shy |  | 🌅 | 고마워. 보건실 갈 때... 옆에 있어 줘. |
| 390 | `after3_dain_freetalk` | 다인 | gym | dain_normal |  | 🌅 | *다인은 손목 보호대를 고쳐 매다 입꼬리가 반 박자 늦 |
| 391 | `after3_dain_end_check` | 다인 | gym | dain_normal |  | 🌅 | *주먹으로 어깨를 가볍게 친다.* |
| 392 | `after3_dain_end` | 다인 | gym | dain_shy |  | 🌅 | *다인의 주먹이 어깨에 닿지만 어제처럼 몸이 밀리지는  |
| 393 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.* |
| 394 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 395 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 396 | `minsu_d3_check` | {name} | school | 없음 |  | 🌅 |  |
| 397 | `minsu_d3_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문 앞에 민수가 서 있다.* |
| 398 | `minsu_d3_2` | 민수 | school | 없음 |  | 🌅 | 봤다. |
| 399 | `minsu_d3_3` | 민수 | school | 없음 |  | 🌅 | 점심때. 그리고 방금 서연 표정도. |
| 400 | `minsu_d3_4` | 민수 | school | 없음 |  | 🌅 | 어제 내가 뭐랬냐. 나중에 셋 다 울면 네 탓이라고 했 |
| 401 | `minsu_d3_5` | 민수 | school | 없음 |  | 🌅 | 옆에서 보기 좀 힘들다. 걔들 다 좋은 애들이야. 네가 |
| 402 | `minsu_d3_5b` | 민수 | school | 없음 |  | 🌅 | *민수는 빨대 포장지를 끝까지 접어 테이블 위에 내려놓 |
| 403 | `minsu_d3_6` | {name} | school | 없음 |  | 🌅 | 맞아. |
| 404 | `minsu_d3_6b` | 민수 | school | 없음 |  | 🌅 | 전 학교에서 뭔 일 있었는지 안 물어볼게. 근데 하나만 |
| 405 | `minsu_d3_7` | 민수 | school | 없음 |  | 🌅 | 거절도 배려야. 안 되는 관계에 계속 여지 주는 것보다 |
| 406 | `minsu_d3_8` | {name} | school | 없음 |  | 🌅 | *거절도 배려다. 전 학교에서 나는 소정이에게 고백할  |
| 407 | `minsu_d3_9` | 민수 | school | 없음 |  | 🌅 | *민수는 더 말하지 않고 끝까지 접은 빨대 포장지를 내 |
| 408 | `minsu_d3_10` | 민수 | school | 없음 |  | 🌅 | 내일 학교에서 보자. 진지하게 생각해. |
| 409 | `night3_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 가방을 의자에 걸어 둔다.* |
| 410 | `night3_start_2` | {name} | room_my | 없음 |  |  | *책상 위에 엎어 둔 핸드폰 화면을 켠다.* |
| 411 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *읽지 않은 메시지가 떠 있다.* |
| 412 | `night3_faithful_msg_dain_1` | 다인 | room_my | dain_normal | 0.35 |  | 발목 괜찮냐고 물어볼 거면 직접 와서 물어봐ㅋㅋ |
| 413 | `night3_faithful_msg_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | 아 근데 고마워 |
| 414 | `night3_faithful_msg_dain_3` | {name} | room_my | dain_normal | 0.35 |  | *'ㅋㅋ'와 다음 문장 사이가 비어 있다. 다인의 새  |
| 415 | `night3_dream_1` | {name} | school | 없음 |  |  | *꿈속에서 누군가와 나란히 걷는다. 얼굴은 보이지 않고 |
| 416 | `night3_dream_2_b` | {name} | school | 없음 |  |  | *메모장을 닫았다. 내일 보낼 문장은 아직 없다.* |
| 417 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *커튼 사이로 들어온 아침 햇살에 눈을 뜬다. 핸드폰  |
| 418 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *'삭제하시겠습니까?' 확인 창이 뜬다. 손가락이 버튼 |
| 419 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *1초 동안 화면을 내려다본다. 소정이 책상의 낙서와  |
| 420 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *그래. 삭제 버튼에 올린 손가락으로 화면을 누른다.* |
| 421 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼을 누르지 않고 사진을 새 폴더로 옮긴다.  |
| 422 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *'거절도 네가 해야 할 일이야.' 민수의 말이 떠오른 |
| 423 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *갤러리에서 소정이 사진이 사라지고 빈칸만 남는다.* |
| 424 | `night3_faithful_reflect_4_b` | {name} | room_my | 없음 |  |  | *빈 앨범 썸네일 위를 엄지로 문지른다.* |
| 425 | `night3_faithful_reflect_4_c` | {name} | room_my | 없음 |  |  | *핸드폰을 덮자 검은 화면에 갤러리의 빈칸이 겹쳐 보인 |
| 426 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *알람이 울리기 전에 눈을 떴다.* |
| 427 | `night3_dream_dain_bonus` | {name} | room_my | 없음 |  |  | *눈을 감자 체육관 바닥에 공 튀는 소리가 떠오른다.* |
| 428 | `night3_end` | {name} | room_my | 없음 |  |  | *방 불을 끄고 핸드폰을 엎어 둔다.* |
| | **Day 4** | | | | | | |
| 429 | `morning4_start` | {name} | room_my | 없음 |  |  | *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다 |
| 430 | `morning4_nightmare_check` |  | room_my | 없음 |  |  |  |
| 431 | `minsu_cheer_1` | {name} | room_my | 없음 |  |  | *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.* |
| 432 | `minsu_cheer_1_b` | 민수 | room_my | minsu_normal | 0.35 |  | *야 오늘 데이트라며?* |
| 433 | `minsu_cheer_1_c` | {name} | room_my | minsu_normal | 0.35 |  | *어떻게 알았어* |
| 434 | `minsu_cheer_1_d` | 민수 | room_my | minsu_normal | 0.35 |  | *다인이가 단톡방에 올림. 내일 약속 있음, 이라고* |
| 435 | `minsu_cheer_2` | 민수 | room_my | minsu_normal | 0.35 |  | 잘하고 와ㅋㅋ |
| 436 | `minsu_cheer_3` | {name} | room_my | minsu_normal | 0.35 |  | 알아. |
| 437 | `minsu_cheer_4_branch` |  | room_my | 없음 |  |  |  |
| 438 | `minsu_cheer_4_ins_single` | {name} | room_my | minsu_normal | 0.35 |  | *핸드폰 캘린더를 본다. 오늘 약속은 하나뿐이다.* |
| 439 | `morning4_start_2` | {name} | room_my | 없음 |  |  | *심호흡하고 약속 메시지를 다시 확인한다.* |
| 440 | `morning4_dain_msg_1` | 다인 | room_my | dain_sweat | 0.35 |  | 오늘이다. 체육관 앞 저녁 6시. 아, 왜 이렇게 떨리 |
| 441 | `morning4_hidden_check` | {name} | room_my | 없음 |  |  | *주말 아침, 학교 앞 사거리에서 신호를 기다린다.* |
| 442 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 443 | `morning4_end` | {name} | room_my | 없음 |  |  | *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 |
| 444 | `date_dain_1` | {name} | gym | dain_laugh |  |  | *체육관 앞. 다인이 뛰어온다. 캡모자에 운동복.* |
| 445 | `date_dain_2` | 다인 | gym | dain_laugh |  |  | 왔다. 늦을 뻔했지? |
| 446 | `date_dain_3` | {name} | gym | dain_laugh |  |  | 10분 일찍 왔는데. |
| 447 | `date_dain_4` | 다인 | gym | dain_normal |  |  | 나는 20분 전에 왔거든. |
| 448 | `date_dain_compliment_choice` | {name} | gym | dain_normal |  |  | *다인이 모자챙을 한 번 눌러 쓰고 기다린다.* |
| 449 | `date_dain_pretty_low` | 다인 | gym | dain_shy |  |  | 뭐야, 갑자기. ...고맙긴 한데. |
| 450 | `date_dain_to_arcade` | {name} | arcade | dain_laugh |  |  | *오락실로 향했다.* |
| 451 | `date_dain_arcade` | {name} | arcade | dain_normal |  |  | *리듬게임 기계 앞에 선다. 화면이 깜빡인다.* |
| 452 | `date_dain_arcade_2` | 다인 | arcade | dain_normal |  |  | 자, 내기다. 진 사람이 음료수. |
| 453 | `date_dain_arcade_2_b` | {name} | arcade | dain_normal |  |  | 또 내기? |
| 454 | `date_dain_arcade_3` | 다인 | arcade | dain_normal |  |  | 내기 없으면 재미없잖아. |
| 455 | `date_dain_arcade_3_b` | {name} | arcade | dain_normal |  |  | *리듬게임이 시작되자 다인의 손이 먼저 박자를 잡는다. |
| 456 | `date_dain_arcade_3_c` | 다인 | arcade | dain_normal |  |  | *자리에서 벌떡 일어난다.* 풀콤보. 봤어? |
| 457 | `date_dain_rhythm` | 다인 | arcade | dain_laugh |  |  | *화면의 점수를 가리킨다.* 이 스코어, 역대 2등이야 |
| 458 | `date_dain_rhythm_2` | {name} | arcade | dain_normal |  |  | 대단해. |
| 459 | `date_dain_rhythm_3` | 다인 | arcade | dain_laugh |  |  | 당연하지. 이건 무릎 안 써도 되니까. |
| 460 | `date_dain_knee` | {name} | arcade | dain_laugh |  |  | *'무릎 안 써도 되니까.' 다인은 말끝에 웃고는 쇼윈 |
| 461 | `date_dain_knee_2` | {name} | street | dain_sweat |  |  | *오락실을 나와 스포츠용품점 앞을 지난다. 다인이 배구 |
| 462 | `date_dain_shop` | 다인 | street | dain_normal |  |  | *쇼윈도 안 배구화의 끈을 눈으로 따라간다. 모자챙 아 |
| 463 | `date_dain_shop_2` | {name} | street | dain_normal |  |  | 다인? |
| 464 | `date_dain_shop_2_b` | 다인 | street | dain_normal |  |  | *진열대 반대쪽으로 턱을 돌린다.* 아무것도 아냐! 가 |
| 465 | `date_dain_shop_3` | 다인 | street | dain_laugh |  |  | *두 손을 주머니에 찔러 넣고 앞서 걷는다.* 쳐다보지 |
| 466 | `date_dain_shop_3_b` | 다인 | street | dain_normal |  |  | *보폭을 더 넓힌다.* 한 번만 더 물으면 진짜 먼저  |
| 467 | `date_dain_end` | {name} | street | dain_sweat |  |  | *다인은 웃지만 캡모자 아래 시선은 여전히 쇼윈도에 머 |
| 468 | `date_dain_end_b` | 다인 | street | dain_normal |  |  | 야. |
| 469 | `date_dain_end_c` | 다인 | street | dain_sweat |  |  | 오늘 재밌었어. ...그냥 하는 말 아니야. |
| 470 | `pre_confess_minsu` | 민수 | street | minsu_smirk | 0.35 |  | 야, 데이트 중이지? 한마디만 할게 |
| 471 | `pre_confess_minsu_2` | 민수 | street | minsu_smirk | 0.35 |  | 말 돌리지 말고 제대로 해 |
| 472 | `pre_confess_callback` | {name} | street | minsu_smirk |  |  | *주머니 속 핸드폰 모서리가 손바닥에 눌린다. 알림은  |
| 473 | `confess_seo_1` | {name} | top_school | 없음 |  | 🌅 | *데이트가 끝났다. 교문 대신 옥상으로 올라왔다.* |
| 474 | `confess_dain_1` | {name} | gym | dain_laugh |  | 🌅 | *데이트가 끝나자 다인이 학교 쪽으로 성큼 앞서간다.* |
| 475 | `confess_dain_2` | 다인 | gym | dain_normal |  | 🌅 | 마지막. 한 군데만 더 가자. |
| 476 | `confess_dain_3` | {name} | gym | dain_normal |  | 🌅 | *빈 체육관. 서쪽 창문의 빛이 첫날 내기했던 코트 선 |
| 477 | `confess_dain_4` | 다인 | gym | dain_normal |  | 🌅 | *공 하나를 두 손으로 쥔다. 손가락 마디가 공 표면에 |
| 478 | `confess_dain_5` | {name} | gym | dain_normal |  | 🌅 | *공이 바닥에 한 번 튄다.* |
| 479 | `confess_dain_choice` | 다인 | gym | dain_sweat |  | 🌅 | *공이 바닥에 한 번 튄다. 다인의 손이 반 박자 늦어 |
| 480 | `confess_dain_yes_1` | {name} | gym | dain_normal |  | 🌅 | *첫 음절이 빈 체육관 벽에 낮게 돌아온다.* |
| 481 | `confess_dain_yes_2` | {name} | gym | dain_normal |  | 🌅 | *짧은 숨을 고르고 다시 입을 연다.* |
| 482 | `confess_dain_yes_3` | {name} | gym | dain_normal |  | 🌅 | 다인아. 나 — 너한테 할 말이 있어. |
| 483 | `confess_dain_yes_3_b` | {name} | gym | dain_normal |  | 🌅 | 오늘만 말고 다음에도 계속 만나고 싶어. |
| 484 | `confess_dain_yes_4` | {name} | gym | dain_normal |  | 🌅 | *다인이 공을 내려놓는다.* |
| 485 | `confess_dain_yes_5` | {name} | gym | dain_normal |  | 🌅 | 지금 당장 답하라는 건 아니야. |
| 486 | `confess_dain_yes_6` | {name} | gym | dain_laugh |  | 🌅 | 그냥 말해두고 싶었어. |
| 487 | `confess_dain_yes_7` | {name} | gym | dain_shy |  | 🌅 | *체육관 조명이 낮게 웅웅거린다.* |
| 488 | `confess_dain_yes_8` | 다인 | gym | dain_shy |  | 🌅 | *다인의 운동화가 코트 선 위에 나란히 붙는다. 두 손 |
| 489 | `confess_dain_yes_8_b` | {name} | gym | dain_shy |  | 🌅 | *배구공이 발끝에 툭 닿아 옆으로 굴러가도 다인은 쫓지 |
| 490 | `confess_dain_yes_9` | 다인 | gym | dain_shy |  | 🌅 | 잠깐. 나 지금 말 정리가 안 돼. |
| 491 | `confess_dain_yes_9_b` | {name} | gym | dain_shy |  | 🌅 | *다인이 손등으로 눈가를 거칠게 문지른다. 입꼬리는 올 |
| 492 | `confess_dain_yes_10` | 다인 | gym | dain_shy |  | 🌅 | 내일도 와. |
| 493 | `confess_dain_yes_10_b` | 다인 | gym | dain_laugh |  | 🌅 | *공을 다시 끌어안는다. 손등에 힘이 들어간다.* |
| 494 | `day4_night_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 옷소매에 공원 흙과 학교 먼지가 조금 |
| 495 | `day4_night_branch` | 시스템 | room_my | 없음 |  |  |  |
| 496 | `day4_student_night_branch` |  | room_my | 없음 |  |  |  |
| 497 | `wall_dain_1` | {name} | room_my | 없음 |  |  | *밤 10시. 다인에게서 메시지.* |
| 498 | `wall_dain_pre_low_1` | 다인 | room_my | dain_sweat | 0.35 |  | *웃는다. 손은 무릎 보호대를 꽉 누르고 있다.* |
| 499 | `wall_dain_pre_low_2` | 다인 | room_my | dain_normal | 0.35 |  | 하하, 오늘 재밌었지! |
| 500 | `wall_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | 야, 지금 시간 돼? |
| 501 | `wall_dain_2_b` | 다인 | room_my | dain_normal | 0.35 |  | *학교 오면 안 되지?* |
| 502 | `wall_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | 그냥 와. 체육관 뒷문 열어놨어. |
| 503 | `wall_dain_4` | {name} | gym | dain_laugh |  |  | *비상등만 켜진 체육관. 다인은 혼자 배구공을 튀긴다. |
| 504 | `wall_dain_5` | 다인 | gym | dain_laugh |  |  | 왔어? 늦었잖아. |
| 505 | `wall_dain_6` | {name} | gym | dain_laugh |  |  | 밤에 학교에 왜 있어? |
| 506 | `wall_dain_7` | 다인 | gym | dain_laugh |  |  | 가끔 몰래 들어와. 연습하려고. |
| 507 | `wall_dain_7_b` | 다인 | gym | dain_laugh |  |  | *배구공을 내민다.* |
| 508 | `wall_dain_8` | 다인 | gym | dain_laugh |  |  | 토스 올려줘. 한 번만. |
| 509 | `wall_dain_8_b` | {name} | gym | dain_laugh |  |  | *공을 든 손이 허리 아래에 머문 사이, 다인이 한 발 |
| 510 | `wall_dain_9` | {name} | gym | dain_sad |  |  | *체육관 바닥에 공이 굴러간다.* |
| 511 | `wall_dain_10` | 다인 | gym | dain_sad |  |  | 아, 아냐. 괜찮아. 그냥 삐끗한 거야. 별거 아... |
| 512 | `wall_dain_11` | {name} | gym | dain_sweat |  |  | *무릎을 잡은 손이 하얗게 질려 있다.* |
| 513 | `wall_dain_12` | {name} | gym | dain_sad |  |  | 다인. 괜찮지 않잖아. |
| 514 | `wall_dain_12_b` | 다인 | gym | dain_sad |  |  | 괜찮아. 진짜로. |
| 515 | `wall_dain_12_c` | {name} | gym | dain_normal |  |  | *바닥을 구르던 공이 벽에 닿아 낮은 소리를 낸다.* |
| 516 | `wall_dain_13` | {name} | gym | dain_sad |  |  | *아무 말 없이 옆에 앉는다. 다인이 입을 다물자 체육 |
| 517 | `wall_dain_14` | 다인 | gym | dain_sad |  |  | ...전방 십자인대. |
| 518 | `wall_dain_14_b` | 다인 | gym | dain_sad |  |  | *배구공을 보지 않는다.* |
| 519 | `wall_dain_15` | 다인 | gym | dain_sad |  |  | 작년 여름이야. |
| 520 | `wall_dain_16` | 다인 | gym | dain_sad |  |  | *입꼬리가 내려간다. 시선은 코트 바닥의 흰 선에 머문 |
| 521 | `wall_dain_16_b` | 다인 | gym | dain_sad |  |  | 수술했는데 담당 의료진이 — 되게 조심스럽게 말하더라. |
| 522 | `wall_dain_17` | 다인 | gym | dain_sad |  |  | 수술 끝나고 의사 선생님이 종이에 선을 그어줬어. '일 |
| 523 | `wall_dain_18` | 다인 | gym | dain_sad |  |  | 병원에서 나오는데 엄마가 울고 있었어. — 나는 못 울 |
| 524 | `wall_dain_18_b` | 다인 | gym | dain_sad |  |  | 실감난 건 — 체육관 사물함 정리할 때였어. |
| 525 | `wall_dain_18_c` | {name} | gym | dain_sad |  |  | *체육관 비상등이 한 번 깜빡인다. 다인의 손톱이 공  |
| 526 | `wall_dain_18_d` | 다인 | gym | dain_sad |  |  | *공 표면의 홈을 엄지로 문지른다.* 그래서. |
| 527 | `wall_dain_19` | 다인 | gym | dain_sad |  |  | 아무한테도 말 안 했어. 부모님한테도. '다인이가 안  |
| 528 | `wall_dain_19_b` | 다인 | gym | dain_sad |  |  | *유니폼 앞자락을 꽉 쥔다.* |
| 529 | `wall_dain_20` | 다인 | gym | dain_sad |  |  | 학교에서 '에너지 넘치네!' 소리 들을 때마다 가슴팍부 |
| 530 | `wall_dain_20_b` | 다인 | gym | dain_sad |  |  | 숨을 쉬어도 끝까지 안 들어왔어. |
| 531 | `wall_dain_21` | 다인 | gym | dain_sad |  |  | 오늘도 그랬어. 데이트하면서 뛰어다니고 네 옆에서 밝은 |
| 532 | `wall_dain_22` | 다인 | gym | dain_sad |  |  | 근데 네 앞에서까지 아픈 모습 보이면, 나한테 남는 게 |
| 533 | `wall_dain_22_b` | {name} | gym | dain_sad |  |  | *다인 옆 코트 선 바깥에 앉는다. 바닥에 놓인 배구공 |
| 534 | `wall_dain_choice` | 다인 | gym | dain_sad |  |  | *배구공 고무가 가슴팍에 눌려 찌그러진다. 어깨가 짧게 |
| 535 | `wall_dain_cry_1` | 다인 | dain_depression_event1 | 없음 |  |  | *코트 위에 주저앉았다. 배구공을 껴안고 울기 시작했다 |
| 536 | `wall_dain_cry_2` | 다인 | gym | dain_sad |  |  | *배구공 위로 몸을 접는다. 공의 고무 표면에 물방울이 |
| 537 | `wall_dain_cry_3` | 다인 | gym | dain_sad |  |  | 혼자서 매일 아침 무릎에 붕대 감았어. |
| 538 | `wall_dain_cry_4` | 다인 | gym | dain_sad |  |  | 핸드폰 알람에도 적어놨어. '오늘도 웃어.' |
| 539 | `wall_dain_cry_5` | 다인 | gym | dain_sad |  |  | 그거 보고 거울 앞에서 입꼬리부터 올렸어. 매일. |
| 540 | `wall_dain_cry_6` | 다인 | gym | dain_sad |  |  | *알람 제목 '오늘도 웃어'를 지운다. 빈칸에 '엄마한 |
| 541 | `wall_dain_farewell_1` | 다인 | gym | dain_sad |  |  | *{name}이 공을 보관함에 넣는 동안, 벤치를 짚고 |
| 542 | `wall_dain_farewell_2` | {name} | school_back | dain_normal |  |  | *다인과 체육관을 나온다. 학교 후문 쪽을 지나가는데. |
| 543 | `wall_dain_mention_1` | 다인 | school_back | dain_sad |  |  | 서연이가 나한테 뭐라 그랬는지 알아? 아무 말도 안 했 |
| 544 | `wall_dain_mention_2` | 다인 | school_back | dain_sad |  |  | 말이라도 해주면 싸울 수 있는데. 아무 말도 안 하면  |
| 545 | `wall_dain_mention_3` | 다인 | school_back | dain_normal |  |  | *한 걸음이 끊긴다. 다시 걸을 때는 보폭을 줄여 {n |
| 546 | `wall_dain_skin_check` |  | school_back | dain_normal |  |  |  |
| 547 | `wall_dain_freetalk` | 다인 | school_back | dain_normal |  | 🌙 | *숨을 길게 내쉬고 {name} 곁에 보폭을 맞춘다.* |
| 548 | `wall_dain_rival_rank` | 시스템 | school_back | 없음 |  |  |  |
| 549 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 550 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *알람을 일요일 오전으로 맞추고 방 불을 끈다. 전하지 |
| 551 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안 시계가 자정 쪽으로 넘어간다. 휴대폰 화면도  |
| | **Day 5** | | | | | | |
| 552 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소 |
| 553 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 554 | `morning5_temptation_discovery_branch` |  | room_school | 없음 |  |  |  |
| 555 | `morning5_committed_start` |  | room_school | 없음 |  |  |  |
| 556 | `morning5_committed_dain` | {name} | room_school | dain_normal |  |  | *다인이 체육관 쪽에서 손목 보호대를 고쳐 맨다. 서연 |
| 557 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *행사 준비 시간. 복도를 걷는데 — 빈 교실 앞을 지 |
| 558 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *행사 중간 쉬는 시간. 보건실 앞을 지나간다.* |
| 559 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 560 | `morning5_committed_end` | {name} | room_school | 없음 |  |  | *책상 위 쪽지들을 정리하고 이미 고른 방향의 행사 순 |
| 561 | `tour_dain_1_check` | {name} | gym | 없음 |  |  | *체육관으로 간다.* |
| 562 | `tour_dain_1` | {name} | gym | 없음 |  |  | *체육관. 첫 내기를 했던 라인 옆에 어젯밤 정리한 공 |
| 563 | `tour_dain_2` | 다인 | gym | dain_normal |  |  | *다인은 배구공 하나를 옆구리에 낀 채 코트 한가운데  |
| 564 | `tour_dain_3` | 다인 | gym | dain_laugh |  |  | 야, 마지막 가위바위보 할래? |
| 565 | `tour_dain_4` | {name} | gym | dain_normal |  |  | 또 질 거면서. |
| 566 | `tour_dain_5` | 다인 | gym | dain_laugh |  |  | 이번엔 이긴다. |
| 567 | `tour_dain_6` | {name} | gym | dain_normal |  |  | *가위바위보. — 다인이 졌다.* |
| 568 | `tour_dain_7` | 다인 | gym | dain_laugh |  |  | 왜 또 졌지. |
| 569 | `tour_dain_8` | {name} | gym | dain_normal |  |  | *다인은 미간을 찌푸린 채 입꼬리를 누르지 못한다. 한 |
| 570 | `tour_dain_10` | 다인 | gym | dain_sad |  |  | 프로는 아직 모르겠지만. |
| 571 | `tour_dain_11` | {name} | gym | dain_sad |  |  | *공이 코트 선을 따라 굴러간다. 다인이 다음 말을 꺼 |
| 572 | `tour_dain_11_b` | 다인 | gym | dain_normal |  |  | 예전엔 배구가 빠지면 나도 텅 비는 줄 알았거든. 근데 |
| 573 | `tour_dain_12` | 다인 | gym | dain_sad |  |  | 뭐가 달라졌는지는 몰라. 근데 코트 밖에서도 할 말이  |
| 574 | `tour_dain_13` | {name} | gym | dain_normal |  |  | 뭐가 달라진 건데? |
| 575 | `tour_dain_end` | 다인 | gym | dain_shy |  |  | 혼자 있지는 않잖아. |
| 576 | `tour_dain_freetalk` | 다인 | gym | dain_normal |  |  | *굴러온 배구공을 운동화 밑으로 눌러 세운다.* 마지막 |
| 577 | `tour_dain_end_2` | {name} | gym | dain_shy |  |  | *다인은 무릎 대신 배구공 표면을 손바닥으로 굴린다.* |
| 578 | `after5_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 579 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *행사가 끝나갈 무렵, 복도에서 선택하지 않은 두 사람 |
| 580 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 581 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다.* |
| 582 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다. 서연은 잠시 멈췄다가 고개 |
| 583 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 584 | `after5_farewell_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나가 다가온다. 아무 말 없이 책 한 |
| 585 | `after5_farewell_yuna_low` | 유나 | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나와 눈이 마주친다. 유나는 들고 있 |
| 586 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 587 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *석양이 교정 창문마다 걸린다. 방송실에서 행사 종료  |
| 588 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 589 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 590 | `ending_affinity_check` | 시스템 | park | 없음 |  |  |  |
| 591 | `ending_aff_check_dain` | 시스템 | gym | 없음 |  |  |  |
| 592 | `day5_ending_good` | {name} | park | 없음 |  |  | *고백 후에도 달라진 건 많지 않았다. 일정이 하나 더 |
| 593 | `good_1` | {name} | park | 없음 |  |  | *며칠 동안 대화가 자꾸 끊겼다. 그래도 연락은 끊기지 |
| 594 | `good_1b` | {name} | park | 없음 |  |  | *둘은 같은 길로 나왔다.* |
| 595 | `good_1c` | {name} | park | 없음 |  |  | *벚꽃잎이 신발 앞에 붙었다가, 다음 걸음에 떨어진다. |
| 596 | `good_1_dain` | 다인 | park | dain_pout |  |  | 야, 우리 사이 아직 다 풀린 건 아니야. 그래도 무릎 |
| 597 | `good_2_dain` | {name} | school | dain_pout |  |  | *학교 교문 앞. 다인이 접어 둔 재활 안내지를 내민다 |
| 598 | `good_3_dain` | {name} | school | dain_pout |  |  | *안내지를 받는다. 다인은 그걸 보고서야 웃는다.* |
| 599 | `good_4_dain` | 다인 | school | dain_normal |  |  | 오늘은 안 괜찮아. 그러니까 천천히 가자. |
| 600 | `good_5_dain` | {name} | ending_good_dain | 없음 |  |  | *다인이 먼저 주먹을 내밀고 기다린다. 다른 손에 든  |
| 601 | `good_epilogue_1_dain` | {name} | ending_good_dain | 없음 |  |  | *다인에게서 메시지가 왔다. '내일 아침 재활 산책 같 |
| 602 | `good_epilogue_2_dain` | {name} | ending_good_dain | 없음 |  |  | *짧은 질문 하나가 화면에 오래 남는다.* |
| 603 | `good_epilogue_3_dain` | {name} | ending_good_dain | 없음 |  |  | *답장을 보냈다. '콜. 속도는 네가 정해.'* |
| 604 | `good_5_cg_dain` | 시스템 | ending_good_dain | 없음 |  |  | ─── GOOD END ─── |
| 605 | `day5_dain_ending_freetalk_intro` | {name} | gym | dain_laugh |  |  | *마지막 장면이 지나고 익숙한 체육관에 공 튀는 소리만 |
| 606 | `day5_dain_ending_freetalk_router` | {name} | gym | 없음 |  |  |  |
| 607 | `day5_dain_ending_freetalk_good` | 다인 | park | dain_normal |  | 🌙 | *재활 산책 안내지에 적힌 '속도는 내가 정하기'를 톡 |
| 608 | `day5_credits` |  | school | 없음 |  |  |  |
| 609 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### day5_dain_ending_freetalk_late_good

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_dain_choice`: (선택)
- `after_end`: (선택)
- `after_hidden_nurse_choice`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_seo_choice`: (선택)
- `after2_choice`: (선택)
- `night2_choice`: (선택)
- `morning3_date_dain_choice`: (선택)
- `lunch3_choice`: (선택)
- `after3_dain_choice`: (선택)
- `after3_dain_dilemma_final`: (선택)
- `date_dain_compliment_choice`: (선택)
- `confess_dain_choice`: (선택)
- `after5_last_chance_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=5 유나=-8 다인=45 담임=0 보건=0

<details>
<summary>씬 타임라인 (579씬)</summary>

| # | 씬 ID | 화자 | 배경 | 캐릭터 | OP | 밤 | 대사 (앞 30자) |
|---|--------|------|------|--------|----|----|----------------|
| | **Day 1** | | | | | | |
| 1 | `start` | {name} | school | 없음 |  |  | *4월의 교문 앞. 밟힌 꽃잎이 드문드문 붙어 있다.  |
| 2 | `start_3` | {name} | school | 없음 |  |  | *주머니에서 핸드폰이 울리고 예전 학교 단체 카톡방에  |
| 3 | `name_input_scene` | 시스템 | school | 없음 |  |  | 전학생, 당신의 이름은? |
| 4 | `gate_1` | {name} | school | 없음 |  |  | *낯선 교문 앞, 내 교복만 아직 접힌 선이 선명하다. |
| 5 | `seoyeon_meet_1` | 서연 | school | seyoun_normal |  |  | 전학생? {name} 맞지? |
| 6 | `seoyeon_meet_2` | 서연 | school | seyoun_normal |  |  | *{name}의 이름을 한 번 더 확인한 뒤 클립보드  |
| 7 | `seoyeon_meet_3` | {name} | school | seyoun_normal |  |  | 맞는데. 어떻게 알았어? |
| 8 | `seoyeon_meet_4` | 서연 | school | seyoun_normal |  |  | 학생회장. 전학생 안내는 내 담당이야. |
| 9 | `seoyeon_meet_5` | 서연 | school | seyoun_normal |  |  | 따라와. 15분 안에 끝낼게. |
| 10 | `seoyeon_meet_6` | {name} | school | seyoun_normal |  |  | 학생회장이 직접? 과분한데. |
| 11 | `seoyeon_meet_7` | 서연 | school | seyoun_normal |  |  | 과분한 건지 아닌 건지는 내가 정해. |
| 12 | `seoyeon_meet_8` | {name} | school | seyoun_normal |  |  | *서연은 이미 교문 안쪽으로 걸음을 옮겼다. 안내 파일 |
| 13 | `seoyeon_choice` | {name} | school | seyoun_normal |  |  | *어떻게 반응할까?* |
| 14 | `choice_flirt_1` | 서연 | school | seyoun_normal |  |  | *서연의 구두가 반 바퀴 돌아선다. 안경테 위로 한쪽  |
| 15 | `choice_flirt_2` | 서연 | school | seyoun_laugh |  |  | 첫날부터 말은 잘하네. 이름은 금방 외우겠다. |
| 16 | `choice_flirt_3` | {name} | school | seyoun_laugh |  |  | 점수제야? |
| 17 | `choice_flirt_4` | 서연 | school | seyoun_normal |  |  | 아직 분위기 파악은 안 됐나 봐. 나쁘진 않아. |
| 18 | `choice_flirt_5` | {name} | school | seyoun_normal |  |  | 영광인데? |
| 19 | `choice_flirt_6` | 서연 | school | seyoun_normal |  |  | 아직 영광인지 재앙인지 모르는 거지. |
| 20 | `choice_flirt_7` | 서연 | school | seyoun_laugh |  |  | *앞서 걷는다. 한 번 뒤돌아보고 {name}의 발소리 |
| 21 | `hallway_1` | 서연 | school_hallway | seyoun_back |  |  | *복도를 앞서 걷는다. 마주치는 학생들이 먼저 인사할  |
| 22 | `hallway_3` | 서연 | school_hallway | seyoun_normal |  |  | 3학년 건물은 여기, 저쪽이 도서관. 매점은 지하. |
| 23 | `hallway_4` | 서연 | school_hallway | seyoun_normal |  |  | *주머니에서 열쇠를 꺼내 손바닥 위에서 짤랑거린다.* |
| 24 | `hallway_5` | 서연 | school_hallway | seyoun_normal |  |  | 옥상은 원래 잠겨 있어. 학생회장 특권이지. |
| 25 | `hallway_6` | {name} | school_hallway | seyoun_normal |  |  | 비밀 아지트라도 있어? |
| 26 | `hallway_6_b` | 서연 | school_hallway | seyoun_normal |  |  | *열쇠고리 소리가 뚝 끊긴다.* 눈치 빠르네. |
| 27 | `hallway_6_c` | 서연 | school_hallway | seyoun_normal |  |  | *대답 대신 열쇠를 다시 주머니에 넣는다.* |
| 28 | `hallway_7` | 서연 | school_hallway | seyoun_normal |  |  | 아, 점심. 밥 어디서 먹는지 모르지? 같이 가. |
| 29 | `hallway_8` | {name} | school_hallway | seyoun_shy |  |  | *서연은 교실 앞에 서서 문패를 가리킨다.* |
| 30 | `hallway_10` | 서연 | school_hallway | seyoun_normal |  |  | 여기야. 들어가 봐. |
| 31 | `hallway_11` | {name} | school_hallway | seyoun_normal |  |  | 점심때도 안내해 주는 거야? |
| 32 | `hallway_12` | 서연 | school_hallway | seyoun_normal |  |  | 그건 네가 잘하면. |
| 33 | `hallway_13` | 서연 | school_hallway | seyoun_back |  |  | *돌아선 서연이 클립보드를 든 손만 어깨 높이로 한 번 |
| 34 | `hallway_13_b` | {name} | school_hallway | seyoun_back |  |  | *복도 끝으로 멀어질 때까지 걸음이 흐트러지지 않았다. |
| 35 | `classroom_1` | {name} | room_school | 없음 |  |  | *교실 문을 열자 소음이 뚝 끊기고 가까운 책상 의자  |
| 36 | `classroom_2_b` | {name} | room_school | teacher_normal |  |  | *교탁 앞에 담임선생님이 서 있다. 20대 후반. 가디 |
| 37 | `classroom_3` | 담임 | room_school | teacher_normal |  |  | 자, 오늘부터 우리 반에 들어온 전학생이야. 자기소개  |
| 38 | `classroom_3_b` | {name} | room_school | teacher_normal |  |  | {name}입니다. 잘 부탁드립니다. *담임이 출석부의 |
| 39 | `classroom_5_b` | 담임 | room_school | teacher_normal |  |  | 그래, {name}. 외웠어. *출석부에 이름을 덧그으 |
| 40 | `classroom_5_c` | {name} | room_school | teacher_normal |  |  | *담임의 혼잣말은 교실 소음에 묻힌다. 교실 한쪽에서  |
| 41 | `classroom_dain_1` | 다인 | room_school | dain_normal |  |  | 오, 전학생. 우리 반에 새 얼굴 들어왔네! |
| 42 | `classroom_dain_2` | {name} | room_school | dain_normal |  |  | *갈색 숏컷에 배구부 유니폼. 자리에서 반쯤 일어나 손 |
| 43 | `classroom_dain_3` | 담임 | room_school | teacher_normal |  |  | 다인아, 목소리 낮춰. 그리고 교실에서는 유니폼 좀 그 |
| 44 | `classroom_dain_4` | 다인 | room_school | dain_normal |  |  | 쌤, 이게 제일 편하다니까요. 아무튼 전학생, 반갑다. |
| 45 | `classroom_dain_5` | {name} | room_school | dain_normal |  |  | *교실 몇 군데서 웃음이 터진다. 다인은 손을 더 높이 |
| 46 | `classroom_dain_5_b` | 담임선생님 | room_school | teacher_normal |  |  | *출석부 모서리로 교탁을 두 번 두드리고 다인 쪽을 보 |
| 47 | `classroom_dain_5_c` | 담임 | room_school | teacher_normal |  |  | 에너지 좀 아껴. 아직 1교시도 안 시작했어. |
| 48 | `classroom_dain_5_d` | 담임선생님 | room_school | teacher_angry |  |  | *담임은 출석부를 넘긴다.* |
| 49 | `classroom_yuna_1` | {name} | room_school | yuna_bored |  |  | *창가 맨 뒤쪽의 한 여학생은 턱을 괸 채 창밖만 본다 |
| 50 | `classroom_yuna_2` | {name} | room_school | yuna_bored |  |  | *은백색 머리. 붉은 눈. 팔의 타투. 창가 맨 뒤 자 |
| 51 | `classroom_yuna_4` | {name} | room_school | yuna_bored |  |  | *앞줄에서 누군가 속삭인다. '쟤한테 말 걸지 마. 무 |
| 52 | `classroom_seat_1` | 담임선생님 | room_school | teacher_normal |  |  | *빈자리를 가리킨다.* |
| 53 | `classroom_seat_2` | {name} | room_school | dain_normal |  |  | *다인 옆자리다. 의자에 앉기도 전에 다인이 내 책상  |
| 54 | `classroom_minsu_1` | {name} | room_school | minsu_normal |  |  | *자리에 앉으려는데 — 앞자리 남학생이 돌아본다.* |
| 55 | `classroom_minsu_2` | 민수 | room_school | minsu_smirk |  |  | 야, 전학생. 환영한다. — 그리고 조심해. |
| 56 | `classroom_minsu_3` | {name} | room_school | minsu_smirk |  |  | 뭘? |
| 57 | `classroom_minsu_2_b` | 민수 | room_school | minsu_normal |  |  | *다인 쪽으로 턱짓한다.* 체력 관리. |
| 58 | `classroom_dain_talk_1` | {name} | room_school | minsu_normal |  |  | *앞자리 이름표에는 '민수'라고 적혀 있었다.* |
| 59 | `classroom_dain_talk_2` | {name} | room_school | dain_normal |  |  | *자리에 앉자마자 다인이 상체를 기울인다. 책상 두 개 |
| 60 | `classroom_dain_talk_3` | 다인 | room_school | dain_normal |  |  | 야, {name}. 운동 좋아해? |
| 61 | `classroom_dain_talk_4` | {name} | room_school | dain_normal |  |  | 갑자기? |
| 62 | `classroom_dain_talk_5` | 다인 | room_school | dain_normal |  |  | 그냥. 방과후에 리시브 연습 상대가 필요해서. 서브 넣 |
| 63 | `classroom_dain_talk_6` | {name} | room_school | dain_normal |  |  | 나 볼 머신이야? |
| 64 | `classroom_dain_talk_7` | 다인 | room_school | dain_laugh |  |  | 그래도 볼 머신보단 낫겠지. 아마. |
| 65 | `classroom_dain_talk_8` | {name} | room_school | dain_laugh |  |  | *'아마' 뒤에 다인의 시선이 볼 머신 쪽으로 간다.  |
| 66 | `classroom_yuna_note_1` | {name} | room_school | yuna_bored |  |  | *접힌 쪽지가 책상 위로 미끄러져 온다. 뒤를 돌아봐도 |
| 67 | `classroom_yuna_note_3` | {name} | room_school | yuna_bored |  |  | *'시끄러운 자리 걸렸네. — 유나' 연보라색 잉크.  |
| 68 | `classroom_yuna_note_5` | {name} | room_school | yuna_bored |  |  | *유나 쪽을 보자 시선은 여전히 창밖이고 손만 책상 아 |
| 69 | `classroom_yuna_note_6` | {name} | room_school | yuna_bored |  |  | *수업 종이 울리자 유나는 다시 창밖을 보고 다인은 벌 |
| 70 | `lunch_start` | {name} | school_hallway | 없음 |  |  | *점심시간. 학생들로 찬 복도 끝에는 서연의 도시락 가 |
| 71 | `lunch_start_4` | {name} | school_hallway | seyoun_normal |  |  | *복도 끝에서 서연이 눈을 맞추더니 옥상 쪽을 손으로  |
| 72 | `lunch_start_4_b` | {name} | school_hallway | dain_normal |  |  | *옆에서 다인이 팔목을 낚아챈다.* |
| 73 | `lunch_start_5` | 다인 | school_hallway | dain_normal |  |  | 야, 밥 먹었어? 매점 가자. 빵 내기하자, 진 사람이 |
| 74 | `lunch_start_6` | {name} | school_hallway | yuna_normal |  |  | *유나는 가방만 들고 교실을 빠져나가 도서관 방향으로  |
| 75 | `lunch_start_7` | {name} | school_hallway | 없음 |  |  | *복도는 세 갈래다. 옥상, 매점, 도서관. 주머니 안 |
| 76 | `lunch_choice` | {name} | school_hallway | 없음 |  |  | *누구를 따라갈까?* |
| 77 | `lunch_dain_1` | 다인 | store | dain_laugh |  |  | 도착. 여기가 매점이야. 일단 고르고 봐. |
| 78 | `lunch_dain_1_aff_default` | 다인 | store | dain_normal |  |  | *매점 안은 점심시간이라 북적거린다. 빵 냄새랑 우유  |
| 79 | `lunch_dain_2` | 다인 | store | dain_normal |  |  | 소보로빵에 딸기우유. 이 조합은 실패한 적 없어. |
| 80 | `lunch_dain_3` | {name} | store | dain_normal |  |  | 근데 진 사람이 사준다며. 뭘 하는 거야? |
| 81 | `lunch_dain_4` | 다인 | store | dain_normal |  |  | 가위바위보. 간단하지. |
| 82 | `lunch_dain_5` | {name} | store | dain_normal |  |  | 당연한 건 아닌데. |
| 83 | `lunch_dain_6` | 다인 | store | dain_normal |  |  | 안 하면 네가 사는 걸로 친다? |
| 84 | `lunch_dain_7` | {name} | store | dain_normal |  |  | 하자. |
| 85 | `lunch_dain_8` | {name} | store | dain_normal |  |  | *가위바위보.* |
| 86 | `lunch_dain_9` | 다인 | store | dain_normal |  |  | 가위— 바위— 보! |
| 87 | `lunch_dain_10` | {name} | store | dain_normal |  |  | *가위. 바위. 보. — 다인이 졌다.* |
| 88 | `lunch_dain_11` | 다인 | store | dain_normal |  |  | 어? 나 졌네. 한 판 더. |
| 89 | `lunch_dain_12` | {name} | store | dain_pout |  |  | 약속은 약속이지. |
| 90 | `lunch_dain_12_b` | 다인 | store | dain_pout |  |  | 아, 알았어. 내가 산다. 이모, 소보로 두 개요. |
| 91 | `lunch_dain_14` | 다인 | store | dain_pout |  |  | *동전을 카운터에 탁탁 놓고 소보로 두 개를 받아 든다 |
| 92 | `lunch_dain_15` | {name} | store | dain_normal |  |  | *매점 한쪽 벤치에 앉아 빵을 먹는다.* |
| 93 | `lunch_dain_16` | 다인 | store | dain_normal |  |  | *빵 봉지를 뜯는다.* 야, 너 운동 진짜 안 해? |
| 94 | `lunch_dain_17` | {name} | store | dain_normal |  |  | 왜, 내 체력이 걱정돼? |
| 95 | `lunch_dain_18` | 다인 | store | dain_laugh |  |  | 아니. 나랑 다니려면 체력부터 봐야지. |
| 96 | `lunch_dain_19` | {name} | store | dain_laugh |  |  | 자기 PR인 줄 알았어. |
| 97 | `lunch_dain_20` | 다인 | store | dain_laugh |  |  | PR? 그게 뭔데. |
| 98 | `lunch_dain_21` | {name} | store | dain_normal |  |  | Personal Record. 운동할 때 쓰는 말인데. |
| 99 | `lunch_dain_22` | 다인 | store | dain_normal |  |  | *딸기우유 팩 옆면이 손가락에 눌려 우그러진다.* |
| 100 | `lunch_dain_23` | 다인 | store | dain_laugh |  |  | 오, 그거 알아? 너 운동 쪽 좀 아네? |
| 101 | `lunch_dain_choice` | 다인 | store | dain_laugh |  |  | *빨대를 문 채 상체를 가까이 기울인다.* |
| 102 | `lunch_dain_c1_1` | 다인 | store | dain_laugh |  |  | 좋아. 그럼 방과후 체육관 와. 워밍업부터 보자, 콜? |
| 103 | `lunch_dain_c1_2` | {name} | store | dain_laugh |  |  | *다인의 웃음소리가 매점 소음 위로 튄다. 의자가 뒤로 |
| 104 | `lunch_dain_after` | {name} | store | dain_laugh |  |  | *빵을 다 먹고 일어서는데.* |
| 105 | `lunch_dain_after_2` | 다인 | store | dain_normal |  |  | 야, {name}. |
| 106 | `lunch_dain_after_3` | {name} | store | dain_normal |  |  | 응? |
| 107 | `lunch_dain_after_4` | 다인 | store | dain_normal |  |  | 전학 와서 첫 식사 파트너가 나다? 나름 역사적인데. |
| 108 | `lunch_dain_after_5` | 다인 | store | dain_normal |  |  | *주먹으로 {name}의 어깨를 툭 치고 그대로 한 번 |
| 109 | `lunch_dain_freetalk` | 다인 | store | dain_normal |  |  | *빵 봉지를 접어 주머니에 넣고 벤치 등받이에 기댄다. |
| 110 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *종이 울린다. 점심시간이 끝났다.* |
| 111 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에 |
| 112 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 113 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창 |
| 114 | `after_kakao_5` | {name} | school_hallway | 없음 |  | 🌅 | *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른 |
| 115 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록  |
| 116 | `after1_jealousy_dain_1` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 점심때 매점에서 다인이랑 같이 있는 거 봤는데. 적응  |
| 117 | `after1_jealousy_dain_2` | {name} | school_hallway | seyoun_laugh |  | 🌅 | *서연은 클립보드를 가슴 앞에 세운 채 답을 기다린다. |
| 118 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *복도를 계속 걷는다.* |
| 119 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도를 걷는데 뒤에서 쿵쿵 발소리.* |
| 120 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 조심! |
| 121 | `after_miss_dain_3` | {name} | school_hallway | dain_normal |  | 🌅 | *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 |
| 122 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 피했다? 반사신경 괜찮은데. |
| 123 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 넌 복도에서 왜 전력질주야? |
| 124 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 늦었거든! 체육관 가야 해. 내일 보자, 전학생! |
| 125 | `after_miss_dain_6_b` | {name} | school_hallway | dain_laugh |  | 🌅 | *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을  |
| 126 | `after_miss_dain_7` | {name} | school_hallway | dain_laugh |  | 🌅 | *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아 |
| 127 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으 |
| 128 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 이거 떨어뜨렸어. |
| 129 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피 |
| 130 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌  |
| 131 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 고마워. |
| 132 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피를 책등 사이에 끼우고 돌아선다.* |
| 133 | `after_miss_yuna_4` | {name} | library_old | yuna_normal |  | 🌅 | *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 |
| 134 | `after_miss_seoyeon_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *하교하려는데 복도에서 서연과 마주친다.* |
| 135 | `after_miss_seoyeon_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 아까 어디 갔어? |
| 136 | `after_miss_seoyeon_3` | {name} | school_hallway | seyoun_normal |  | 🌅 | 어디라니? |
| 137 | `after_miss_seoyeon_4` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 옥상 열어놨는데 안 왔네. — 전학생, 배짱이 있어. |
| 138 | `after_miss_seoyeon_5` | {name} | school_hallway | seyoun_normal |  | 🌅 | 기다린 거야? |
| 139 | `after_miss_seoyeon_6` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 바람 쐬러 올라간 건데 문이 열려 있길래. |
| 140 | `after_miss_seoyeon_7` | {name} | school_hallway | seyoun_normal |  | 🌅 | *서연의 클립보드 맨 위에 내 이름이 남아 있다. 체크 |
| 141 | `after_miss_seoyeon_8` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 내일은 빠지지 마. |
| 142 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든 |
| 143 | `after_hidden_nurse_intro` | {name} | school_hallway | 없음 |  | 🌅 | *복도 형광등이 흔들려 보여 벽을 짚자 손바닥에 차가운 |
| 144 | `after_hidden_nurse_choice` | {name} | school_hallway | 없음 |  | 🌅 | *아침부터 계속 사람들 틈에 있었다. 발걸음이 보건실  |
| 145 | `after_nurse_skip` | {name} | school_hallway | 없음 |  | 🌅 | *교문 쪽으로 걷는다.* |
| 146 | `night_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄 |
| 147 | `night_start_3` | {name} | room_my | 없음 |  |  | *핸드폰이 울린다. 학교 메신저.* |
| 148 | `night_msg_dain_1` | 다인 | room_my | dain_normal | 0.35 |  | *가위바위보 리벤지 내일이다* |
| 149 | `night_msg_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | *내일은 리벤지다 ㅋㅋ* |
| 150 | `night_msg_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | *오늘 빵값 아직도 아깝다. 진짜.* |
| 151 | `night_msg_dain_4` | {name} | room_my | dain_normal | 0.35 |  | *세 줄이 거의 동시에 도착했다. 답장창에는 벌써 'ㅋ |
| 152 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 다른 알림이 보인다.* |
| 153 | `night_late_transition` | {name} | room_my | 없음 |  |  | *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시 |
| 154 | `night_late_branch` | {name} | room_my | 없음 |  |  | *화면이 밝아진다.* |
| 155 | `night_dain_late_1` | 다인 | room_my | dain_normal | 0.35 |  | *야 아직 안 잤지?* |
| 156 | `night_dain_late_2` | 다인 | room_my | dain_normal | 0.35 |  | *내일 아침 운동 같이 할 사람 구한다* |
| 157 | `night_dain_late_3` | 다인 | room_my | dain_normal | 0.35 |  | *거절은 안 받음 ㅋㅋ* |
| 158 | `night_dain_late_4` | {name} | room_my | dain_normal | 0.35 |  | *답장창에는 이미 '콜'이 찍혀 있다.* |
| 159 | `night_dain_late_4_b` | {name} | room_my | dain_normal | 0.35 |  | *다인의 메시지 아래에 이모티콘이 줄줄이 붙어 있다.  |
| 160 | `night_end_1` | {name} | room_my | 없음 |  |  | *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교 |
| 161 | `night_end_3` | {name} | room_my | 없음 |  |  | *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을  |
| | **Day 2** | | | | | | |
| 162 | `morning2_start` | {name} | room_school | 없음 |  |  | *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.* |
| 163 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 164 | `morning2_greet_dain_1` | 다인 | room_school | dain_laugh |  |  | 야! 어제 재밌었다, 오늘도 같이 뭐 하자! |
| 165 | `morning2_greet_dain_2` | 다인 | room_school | dain_laugh |  |  | *뒤에서 어깨를 탁 친다.* |
| 166 | `morning2_greet_dain_others` | 서연 | room_school | seyoun_normal |  |  | *클립보드를 넘기며 지나간다.* |
| 167 | `morning2_greet_dain_others_seo` | 서연 | room_school | seyoun_normal |  |  | 에너지 좋다. |
| 168 | `morning2_greet_dain_others_yuna` | {name} | room_school | yuna_bored |  |  | *유나의 펜촉이 쪽지 한가운데 잉크점을 남긴다.* |
| 169 | `morning2_greet_dain_others_2` | {name} | room_school | dain_laugh |  |  | *교실 문이 닫힌 뒤 클립보드 두드리는 소리가 복도에서 |
| 170 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *자리에 앉으려는데 — 책상 위에 접힌 쪽지가 하나 놓 |
| 171 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 172 | `morning2_note_3` | {name} | room_school | yuna_normal | 0.35 |  | *어제와 같은 글씨. 아래쪽에 장소가 적혀 있다. '도 |
| 173 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가다 교실 안을 들여다본다.* 어제 잘 잤 |
| 174 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 학생회장이 교실까지 인사하러 와? |
| 175 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 순찰이야. — 출석률 확인 겸. |
| 176 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | *복도로 돌아가기 직전 클립보드 끝이 문틀에 한 번 닿 |
| 177 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연이 사라진 복도를 바라보는데 — 뒤에서 민수가 돌 |
| 178 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 이틀 만에 학생회장이 인사하러 오냐? 나 1 |
| 179 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 인기가 없는 거 아닐까. |
| 180 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 그건 맞는데 그게 중요한 게 아니잖아. |
| 181 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *다인은 서연의 뒷모습이 교실 안으로 사라질 때까지 바 |
| 182 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 회장님도 우리 전학생한테 관심 있어? 인기 많네! |
| 183 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | '우리' 전학생? |
| 184 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 내가 먼저 봤잖아. 그럼 우리 맞지. 찜한 거. |
| 185 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *쉬는 시간. 복도로 나왔다.* |
| 186 | `morning2_break_1` | {name} | school_hallway | 없음 |  |  | *서연의 클립보드 끝이 책상에 톡 닿는다. 답할 틈도  |
| 187 | `morning2_seo_dust_1` | {name} | school_hallway | seyoun_normal |  |  | *1교시가 끝난 쉬는 시간, 복도에서 서연과 스친다.  |
| 188 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 잠깐. |
| 189 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *손이 {name}의 어깨에 닿는다. 먼지를 두 번 털 |
| 190 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 옷에 뭐 묻었어. |
| 191 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | *서연의 손이 떨어진 자리에서 가방끈이 비뚤어져 있다. |
| 192 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 왜 그래? 먼지잖아. |
| 193 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *어깨의 먼지는 없어졌는데 가방끈을 두 번이나 다시 고 |
| 194 | `morning2_dain_react_2` | {name} | school_hallway | dain_angry |  |  | *서연이 클립보드를 고쳐 끼고 복도로 간다. 뒤에서 다 |
| 195 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 지금 뭐야? 어깨 만진 거야? |
| 196 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 먼지 털어준 거야. |
| 197 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 먼지가 진짜 있긴 했어? |
| 198 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | *대답 대신 가방끈을 고쳐 잡았다. 다인은 그걸 보고도 |
| 199 | `morning2_end` | {name} | school_hallway | seyoun_normal |  |  | *민수 말로는 1년 동안 먼저 인사한 적도 없다던 서연 |
| 200 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *점심. 주머니에는 유나의 쪽지가 있고 복도 끝에서는  |
| 201 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *누구와 함께할까.* |
| 202 | `lunch2_seo_1_check` | {name} | school_hallway | 없음 |  |  | *옥상으로 올라간다.* |
| 203 | `lunch2_seo_1b` | {name} | top_school | seyoun_normal |  |  | *처음 올라온 옥상이다. 난간 아래에서 운동장 호루라기 |
| 204 | `lunch2_seo_2b_check` |  | top_school | seyoun_normal |  |  |  |
| 205 | `lunch2_seo_2b_dain` | 서연 | top_school | seyoun_normal |  |  | 어제는 매점 쪽이더니. 오늘은 여기까지 왔네. |
| 206 | `lunch2_seo_3b_dain` | {name} | top_school | seyoun_normal |  |  | 어제는 다인이 끌고 갔고 오늘은 내가 올라오고 싶었어. |
| 207 | `lunch2_seo_4b_dain` | 서연 | top_school | seyoun_normal |  |  | 그건 좀 다르네. |
| 208 | `lunch2_seo_5b_dain` | {name} | top_school | seyoun_normal |  |  | 바람도 좋고. 네 도시락도 계속 생각났고. |
| 209 | `lunch2_seo_6b_dain` | 서연 | top_school | seyoun_laugh |  |  | 솔직하네. |
| 210 | `lunch2_seo_7` | {name} | top_school | seyoun_normal |  |  | *서연이 도시락 뚜껑을 여는 순간 옥상 문이 철컥 열린 |
| 211 | `lunch2_seo_9` | 다인 | top_school | dain_normal |  |  | 여기 있었네. 찾았다. 오늘도 나 빼고 먹으려고? |
| 212 | `lunch2_seo_10` | 서연 | top_school | seyoun_normal |  |  | 옥상은 허가제야. 그리고 오늘 점심은 내가 먼저 잡았고 |
| 213 | `lunch2_seo_11` | 다인 | top_school | dain_normal |  |  | 그럼 난 지금부터 끼면 되겠네. 나도 앉는다? |
| 214 | `lunch2_seo_12` | {name} | top_school | dain_normal |  |  | *다인이 빈자리에 바로 앉는다. 서연의 젓가락이 계란말 |
| 215 | `lunch2_seo_13` | 다인 | top_school | dain_normal |  |  | 어제는 나랑 먹었잖아. 하루 만에 회장님 도시락으로 갈 |
| 216 | `lunch2_seo_14` | 서연 | top_school | seyoun_normal |  |  | *다인이 앉으려 하자 빈 의자를 발끝으로 자기 쪽에 붙 |
| 217 | `lunch2_seo_15` | {name} | top_school | seyoun_normal |  |  | 같은 반이잖아. 너희 둘도 이제 아는 사이고. |
| 218 | `lunch2_seo_16` | 서연 | top_school | seyoun_normal |  |  | 친해지는 것하고 양보하는 건 다르지. |
| 219 | `lunch2_seo_17` | 다인 | top_school | dain_normal |  |  | 그럼 나도 양보 안 해. 다음 쉬는 시간에 체육관 와. |
| 220 | `lunch2_seo_19` | 서연 | top_school | seyoun_normal |  |  | {name}, 지금 내 앞에서 다음 약속 잡는 거야? |
| 221 | `lunch2_seo_20` | 서연 | top_school | seyoun_normal |  |  | 대답은 나중에 해. 일단 입가에 뭐 묻었어. 가만있어  |
| 222 | `lunch2_seo_choice` | 서연 | top_school | seyoun_normal |  |  | *물티슈를 감은 손가락이 입가로 다가온다.* |
| 223 | `lunch2_seo_c1_1` | 서연 | top_school | seyoun_normal |  |  | *물티슈로 밥풀을 떼어내고 사용한 쪽을 안으로 접는다. |
| 224 | `lunch2_seo_c1_2` | 서연 | top_school | seyoun_normal |  |  | 됐어. |
| 225 | `lunch2_seo_c1_2_b` | 다인 | top_school | dain_normal |  |  | *다인은 도시락으로 뻗던 손을 공중에 둔 채 둘을 번갈 |
| 226 | `lunch2_seo_c1_3` | 다인 | top_school | dain_normal |  |  | 밥풀을 직접 떼어줘요? |
| 227 | `lunch2_seo_c1_3_b` | 서연 | top_school | seyoun_normal |  |  | *물티슈를 네모로 접는다.* 밥풀이었어. |
| 228 | `lunch2_seo_c1_4` | 서연 | top_school | seyoun_shy |  |  | 그게 다야. |
| 229 | `lunch2_seo_c1_5` | {name} | top_school | seyoun_shy |  |  | *서연은 물병을 집어 들지만 뚜껑은 열지 않는다. 라벨 |
| 230 | `lunch2_seo_end_c1` | {name} | top_school | seyoun_shy |  |  | *다인이 접이식 의자 다리를 운동화 끝으로 두 번 건드 |
| 231 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *방과후. 핸드폰에 알림이 두 개 와 있다.* |
| 232 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 체육관 와. 오늘은 진짜 내기다. |
| 233 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 학생회실에 올 수 있어? 일손이 부족해서. |
| 234 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게서는 아무 연락이 없다. 가방을 챙기자 주머니 |
| 235 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *어디로 갈까.* |
| 236 | `after2_dain_1` | {name} | gym | dain_active |  | 🌅 | *체육관. 다인이 배구 네트 앞에서 준비운동을 하고 있 |
| 237 | `after2_dain_2` | 다인 | gym | dain_sweat |  | 🌅 | 왔어? 늦었어. |
| 238 | `after2_dain_3` | {name} | gym | dain_sweat |  | 🌅 | 5분 전인데. |
| 239 | `after2_dain_4` | 다인 | gym | dain_sweat |  | 🌅 | 나는 10분 전에 왔거든. |
| 240 | `after2_dain_5` | {name} | gym | dain_sweat |  | 🌅 | *빨리 온 쪽이 너. 나는 안 늦었다.* |
| 241 | `after2_dain_6` | 다인 | gym | dain_sweat |  | 🌅 | 자, 내기다! 서브 다섯 번, 세 번 이상 넘기면 네  |
| 242 | `after2_dain_7` | {name} | gym | dain_normal |  | 🌅 | 갑자기 떡볶이? |
| 243 | `after2_dain_8` | 다인 | gym | dain_laugh |  | 🌅 | 배고프거든. |
| 244 | `after2_dain_9` | {name} | gym | dain_normal |  | 🌅 | *첫 서브는 네트에 걸리고 두 번째는 선 안쪽에 떨어진 |
| 245 | `after2_dain_9_b` | 다인 | gym | dain_normal |  | 🌅 | *튕겨 나온 공을 양손으로 받아 든다.* 어? 봐주려고 |
| 246 | `after2_dain_9_c` | 다인 | gym | dain_active |  | 🌅 | *자세를 낮춘다. 공을 든 손에 힘이 들어간다.* |
| 247 | `after2_dain_9_d` | 다인 | gym | dain_active |  | 🌅 | 이번엔 제대로 간다! |
| 248 | `after2_dain_9_e` | {name} | gym | dain_active |  | 🌅 | *랠리가 빠르게 오간다. 다인은 착지할 때마다 왼발부터 |
| 249 | `after2_dain_9_f` | {name} | gym | dain_sweat |  | 🌅 | *점수판은 3:2. 다인은 일어서며 오른쪽 무릎을 한  |
| 250 | `after2_dain_11b` | {name} | street | dain_laugh |  | 🌅 | *체육관을 나와 거리를 걸었다.* |
| 251 | `after2_dain_12` | 다인 | street | dain_laugh |  | 🌅 | 졌네. 근데 좀 치는데? 너 운동 안 한다며. |
| 252 | `after2_dain_13` | {name} | street | dain_laugh |  | 🌅 | 안 한다고는 안 했어. |
| 253 | `after2_dain_14` | 다인 | street | dain_normal |  | 🌅 | *들고 있던 공을 떨어뜨린다.* 뭐야? 속은 거야? |
| 254 | `after2_dain_15` | {name} | street | dain_normal |  | 🌅 | 속인 건 아니고 물어보지도 않았잖아. |
| 255 | `after2_dain_16` | 다인 | street | dain_laugh |  | 🌅 | *주먹을 어깨 높이까지 들었다가 자기 옆구리에 붙인다. |
| 256 | `after2_dain_freetalk` | 다인 | store | dain_normal |  | 🌅 | *가게에 들어서자 다인이 떡볶이 컵을 밀어 놓고 젓가락 |
| 257 | `after2_dain_end` | {name} | store | dain_laugh |  | 🌅 | *다인이 떡볶이 컵을 내 쪽으로 밀어 두고 자기 몫 젓 |
| 258 | `after2_dain_end_b` | {name} | store | dain_laugh |  | 🌅 | *학교 앞 떡볶이집. 다인이 떡볶이를 후후 불며 말한다 |
| 259 | `after2_dain_end_2` | 다인 | store | dain_laugh |  | 🌅 | 야, 너 진짜 운동 좀 아는 거지? |
| 260 | `after2_dain_end_2b` | {name} | store | dain_laugh |  | 🌅 | 조금. |
| 261 | `after2_dain_end_2c` | 다인 | store | dain_laugh |  | 🌅 | 조금이면 저렇게 못 쳐! — 인정해, 잘한다고. |
| 262 | `after2_dain_end_2d` | {name} | store | dain_laugh |  | 🌅 | 다인이가 훨씬 잘하던데. |
| 263 | `after2_dain_end_3` | 다인 | store | dain_laugh |  | 🌅 | *젓가락 끝이 떡볶이 컵 위에서 그대로다.* |
| 264 | `after2_dain_end_3b` | 다인 | store | dain_laugh |  | 🌅 | 당연하지. 나 체육 특기생이었거든. |
| 265 | `after2_dain_end_3c` | {name} | store | dain_laugh |  | 🌅 | *'이었거든'이 끝나자 다인의 젓가락이 종이컵 옆 물컵 |
| 266 | `after2_dain_end_3d` | 다인 | store | dain_laugh |  | 🌅 | 아, 맵다. 물, 물. |
| 267 | `after2_dain_end_3e` | 다인 | store | dain_shy |  | 🌅 | *떡볶이 컵을 {name} 쪽으로 밀어놓고 빈 물병을  |
| 268 | `after2_dain_return` | {name} | school | dain_shy |  | 🌅 | *학교로 돌아오는 길. 교문 앞에 다다랐다.* |
| 269 | `after2_group_dain_companion` | 다인과 동행 | gym | 없음 |  | 🌅 | *체육관과 별관에서 들은 설명이 서로 어긋난다. 다인이 |
| 270 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.* |
| 271 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 272 | `night2_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저  |
| 273 | `night2_msg_1` | {name} | room_my | 없음 |  |  | *세 명에게서 메시지가 왔다.* |
| 274 | `night2_msg_dain_specific` | 다인 | room_my | dain_normal | 0.35 |  | 야, 오늘 떡볶이 맛있었다. |
| 275 | `night2_msg_dain_specific_2` | 다인 | room_my | dain_normal | 0.35 |  | 내일도 내기하자. 종목 바꿔서. |
| 276 | `night2_msg_seo_general` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 점심에 옥상 열어놓을게. 와 |
| 277 | `night2_msg_yuna_general` | 유나 | room_my | yuna_normal | 0.35 |  | 내일 별관 올 거야? |
| 278 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에  |
| 279 | `night2_choice` | {name} | room_my | 없음 |  |  | *누구에게 먼저 답장할까?* |
| 280 | `night2_reply_seo_1` | {name} | room_my | seyoun_normal | 0.35 |  | 부르면 또 갈게 |
| 281 | `night2_reply_seo_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 쉽게 말하네 |
| 282 | `night2_reply_seo_3` | {name} | room_my | seyoun_normal | 0.35 |  | 쉬운 말인데 |
| 283 | `night2_reply_seo_4` | 서연 | room_my | seyoun_normal | 0.35 |  | 점심에 옥상 열어둘게. 늦지 마 |
| 284 | `night2_reply_seo_5` | {name} | room_my | seyoun_normal | 0.35 |  | *서연은 거기서 메시지를 끝냈다.* |
| 285 | `night2_reply_seo_react_default` | 서연 | room_my | seyoun_normal | 0.35 |  | ㅋ 알겠어. 내일 봐. |
| 286 | `night2_seo_freetalk` | 서연 | room_my | seyoun_normal | 0.35 | 🌙 | 아, 잠깐. 아직 안 잤지? |
| 287 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 또 다른 알림이 보인다.* |
| 288 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 보내고 핸드폰을 내려놓았다.* |
| 289 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이,  |
| 290 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 |
| 291 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *메모장에 줄줄이 남은 보내지 않은 문장. '선생님,  |
| 292 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 메모가 마지막이다. 그 아래 39번째에는 제 |
| 293 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 |
| 294 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로 |
| 295 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보 |
| 296 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화 |
| 297 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 |
| 298 | `night2_end_2_b` | {name} | room_my | 없음 |  |  | *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있 |
| 299 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.* |
| 300 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을  |
| 301 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 |
| | **Day 3** | | | | | | |
| 302 | `morning3_start` | {name} | school | 없음 |  |  | *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯 |
| 303 | `morning3_start_2` | {name} | school | 없음 |  |  | *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군 |
| 304 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 305 | `morning3_seo_gate_1` | {name} | school | seyoun_normal |  |  | *교문 앞의 서연은 지각 종이 울리기 직전인데도 발을  |
| 306 | `morning3_seo_gate_cold_1` | 서연 | school | seyoun_normal |  |  | *서연이 지나치다 명찰 쪽으로 눈만 돌린다.* |
| 307 | `morning3_seo_gate_cold_2` | 서연 | school | seyoun_normal |  |  | 전학생. 아직 다니고 있었구나. |
| 308 | `morning3_seo_gate_cold_3` | {name} | school | seyoun_normal |  |  | *평소처럼 이름도 부르지 않았다. 서연의 구두 소리만  |
| 309 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실에 들어서자 서연의 펜이 멈추고 다인의 의자가 뒤 |
| 310 | `morning3_react_seo_1` | 다인 | room_school | dain_normal |  |  | 야, 회장님이랑 같이 왔어? 아침부터? |
| 311 | `morning3_react_seo_2` | 유나 | room_school | yuna_bored |  |  | *창밖을 보던 유나가 유리창에 비친 {name}을 확인 |
| 312 | `morning3_date_intro` | {name} | room_school | 없음 |  |  | *1교시가 끝났다. 쉬는 시간마다 누군가 말을 건다.* |
| 313 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *쉬는 시간, 복도로 나왔다. 서연이 먼저 걸음을 맞춘 |
| 314 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | 이번 주말에 시간 있어? 공원에 같이 가자. |
| 315 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끈다. 눈이 마주치 |
| 316 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼  |
| 317 | `morning3_date_dain_2` | 다인 | room_school | dain_normal |  |  | *서연이 아직 교실 문 앞에 서 있다. 다인은 이쪽을  |
| 318 | `morning3_date_dain_choice` | 다인 | room_school | dain_normal |  |  | *서연의 발소리가 멎는다. 다인은 대답을 기다린다.* |
| 319 | `morning3_date_dain_accept` | {name} | room_school | dain_laugh |  |  | *다인과 주말 약속을 잡았다. 다인이 웃자 복도에서 서 |
| 320 | `morning3_date_dain_decline_narr` | 다인 | room_school | dain_laugh |  |  | *다인은 웃으며 자기 자리로 돌아간다. 종이 치기 직전 |
| 321 | `morning3_date_dain_decline_inner_2` | {name} | room_school | dain_laugh |  |  | *다인이 자리로 돌아간 뒤, 종이 치기 직전의 교실만  |
| 322 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다 |
| 323 | `morning3_date_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 접어 둔 쪽지를 꺼내려다 다시 책갈피 사이에  |
| 324 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 325 | `morning3_multi_from_dain` |  | room_school | 없음 |  |  |  |
| 326 | `morning3_end` | {name} | room_school | 없음 |  |  | *수업 종료 종이 울리고 곧 점심시간이 된다.* |
| 327 | `morning3_end_b` | 유나 | room_school | yuna_normal |  |  | 맛있네. |
| 328 | `lunch3_start` | {name} | room_school | yuna_normal |  |  | *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. |
| 329 | `lunch3_start_2_b` | 다인 | room_school | dain_normal |  |  | *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가 |
| 330 | `lunch3_meal_1` | 다인 | room_school | dain_laugh |  |  | 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고  |
| 331 | `lunch3_meal_2` | {name} | room_school | dain_laugh |  |  | 그건 내 거... |
| 332 | `lunch3_meal_3` | 서연 | room_school | seyoun_normal |  |  | 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점 |
| 333 | `lunch3_meal_4` | {name} | room_school | seyoun_normal |  |  | 점수 매기지 마. |
| 334 | `lunch3_meal_5` | 서연 | room_school | seyoun_normal |  |  | 10점 만점이야. 나쁜 거 아닌데? |
| 335 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다 |
| 336 | `lunch3_meal_7` | {name} | room_school | seyoun_normal |  |  | 유나, 그건 내가 제일 좋아하는 건데. |
| 337 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임 |
| 338 | `lunch3_meal_8` | {name} | room_school | yuna_bored |  |  | *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다. |
| 339 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. |
| 340 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓 |
| 341 | `lunch3_meal_10_d` | 다인 | room_school | dain_laugh |  |  | *"다 같이?" 다인은 웃지만 의자를 당기지 않는다.* |
| 342 | `lunch3_meal_11` | {name} | room_school | yuna_bored |  |  | *누구에게 줄까?* |
| 343 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *마지막 반찬을 누구에게 줄지 고민한다.* |
| 344 | `lunch3_share_1` | {name} | room_school | yuna_bored |  |  | *다 같이 나눠 먹자고 하자 셋이 웃는다. 웃음이 끊긴 |
| 345 | `lunch3_share_solo` | {name} | room_school | yuna_normal |  |  | *셋이 계란말이를 조금씩 나눠 먹는다. 반으로 갈린 마 |
| 346 | `lunch3_end` | {name} | room_school | 없음 |  |  | *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다 |
| 347 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육 |
| 348 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다 |
| 349 | `after3_auto_dain` | {name} | school_hallway | 없음 |  | 🌅 | *다인과 약속이 있다. 체육관으로 간다.* |
| 350 | `after3_reject_for_dain_1` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *웃고 있다. 클립보드의 종이 모서리를 맞춘다.* |
| 351 | `after3_reject_for_dain_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 오늘은 할 일이 좀 있어서. 먼저 갈게. |
| 352 | `after3_reject_for_dain_2b` | {name} | yuna_hideout | 없음 |  | 🌅 | *유나의 아지트로 걸어간다.* |
| 353 | `after3_reject_for_dain_3` | {name} | library_old | yuna_normal | 0.35 | 🌅 | *도서관에 쪽지가 없다. 유나의 가방도 없다. 자리에  |
| 354 | `after3_reject_for_dain_3b` | {name} | school_hallway | 없음 |  | 🌅 | *복도로 돌아왔다. 바닥에 유나가 두고 간 물 자국이  |
| 355 | `after3_dain_1` | {name} | gym | dain_sweat |  | 🌅 | *체육관에서 다인이 혼자 스트레칭 중이다. 가볍게 뛰어 |
| 356 | `after3_dain_3` | {name} | dain_hurt_event1 | 없음 |  | 🌅 | 다인! |
| 357 | `after3_dain_4` | 다인 | gym | dain_sweat |  | 🌅 | 괜찮아. 그냥 좀 삐끗한 거야. |
| 358 | `after3_dain_5` | {name} | gym | dain_sweat |  | 🌅 | 괜찮아 보이진 않는데. |
| 359 | `after3_dain_5_b` | 다인 | gym | dain_sweat |  | 🌅 | 진짜 괜찮아. 별거 아니야. |
| 360 | `after3_dain_6` | 다인 | gym | dain_sad |  | 🌅 | *말을 마친 뒤에야 다인이 크게 웃는다.* |
| 361 | `after3_dain_choice` | 다인 | gym | dain_sad |  | 🌅 | *다인이 벤치에 앉아 무릎 한곳만 계속 문지른다.* |
| 362 | `after3_dain_correct_1` | 다인 | gym | dain_sad |  | 🌅 | *다인은 무릎을 감싸던 손을 떼지도 못한 채 나를 본다 |
| 363 | `after3_dain_correct_2` | 다인 | gym | dain_normal |  | 🌅 | 야. |
| 364 | `after3_dain_correct_3` | {name} | gym | dain_normal |  | 🌅 | 왜. |
| 365 | `after3_dain_correct_4` | 다인 | gym | dain_shy |  | 🌅 | 너 좀 이상해. |
| 366 | `after3_dain_correct_5` | {name} | gym | dain_shy |  | 🌅 | 이상한 게 좋은 거야 나쁜 거야. |
| 367 | `after3_dain_correct_6` | 다인 | gym | dain_shy |  | 🌅 | 몰라. 근데 잠깐만 여기 있어. 지금 혼자 있기는 좀  |
| 368 | `after3_dain_correct_7` | 다인 | gym | dain_sad |  | 🌅 | *벤치 안쪽으로 자리를 내준다. 배구공은 발끝으로 밀어 |
| 369 | `after3_dain_correct_8` | 다인 | gym | dain_laugh |  | 🌅 | 그냥 얘기나 하자. |
| 370 | `after3_dain_correct_9` | {name} | gym | 없음 |  | 🌅 | *옆에 앉자 다인은 배구공을 발끝으로 코트 경계선까지  |
| 371 | `after3_dain_correct_10` | 다인 | gym | dain_laugh |  | 🌅 | 나 원래 이런 얘기 잘 안 하거든. 뭐부터 말해야 하지 |
| 372 | `after3_dain_correct_11` | 다인 | gym | dain_sweat |  | 🌅 | *다인은 오른쪽 다리를 펴다가 얼굴을 찡그리고 다시 굽 |
| 373 | `after3_dain_correct_12` | {name} | gym | dain_sad |  | 🌅 | 무릎 얘기부터 하자. |
| 374 | `after3_dain_dilemma_tell` | 다인 | gym | dain_normal |  | 🌅 | 뭐? |
| 375 | `after3_dain_dilemma_tell_2` | {name} | gym | dain_sad |  | 🌅 | 무릎. 아까부터 계속 문지르잖아. 이건 오늘 삐끗한 게 |
| 376 | `after3_dain_dilemma_tell_3` | {name} | gym | dain_sad |  | 🌅 | *다인은 입을 다물고 무릎 위 손가락만 접었다 편다.* |
| 377 | `after3_dain_dilemma_tell_4` | 다인 | gym | dain_sad |  | 🌅 | 알면서 왜 말해. 다음 주 대회인 거 알잖아. |
| 378 | `after3_dain_dilemma_tell_5` | {name} | gym | dain_sad |  | 🌅 | 대회보다 네 무릎이 더 중요해. |
| 379 | `after3_dain_dilemma_tell_6` | 다인 | gym | dain_angry |  | 🌅 | 그건 네가 정하는 게 아니야. |
| 380 | `after3_dain_dilemma_tell_7` | 다인 | gym | dain_angry |  | 🌅 | *다인이 일어나 신발끈을 묶으려 몸을 숙이자 무릎에서  |
| 381 | `after3_dain_dilemma_tell_8` | 다인 | gym | dain_sad |  | 🌅 | 제발. 이것만은 아무한테도 말하지 마. |
| 382 | `after3_dain_dilemma_final` | 다인 | gym | dain_sad |  | 🌅 | *다인은 젖은 눈가를 닦지 않는다. 마지막 말 뒤에 늘 |
| 383 | `after3_dain_tell_retreat` | 다인 | gym | dain_sad |  | 🌅 | *다인은 숨을 길게 뱉고 발끝으로 굴러온 공을 세운다. |
| 384 | `after3_dain_choice1` | {name} | gym | dain_sad |  | 🌅 | *대답을 재촉하지 않고 옆에 앉는다. 다인은 운동화 끈 |
| 385 | `after3_dain_choice1_2` | 다인 | gym | dain_sad |  | 🌅 | 왜 안 물어봐? |
| 386 | `after3_dain_choice1_3` | {name} | gym | dain_shy |  | 🌅 | 네가 준비되면 먼저 말한다고 했잖아. |
| 387 | `after3_dain_choice1_react` | 다인 | gym | dain_shy |  | 🌅 | *다인은 입술을 깨물다 웃음을 흘리고 손등으로 눈가를  |
| 388 | `after3_dain_choice1_react2` | 다인 | gym | dain_shy |  | 🌅 | 맞아. 지금 물었으면 또 괜찮다고 했을 거야. |
| 389 | `after3_dain_choice1_react3` | 다인 | gym | dain_shy |  | 🌅 | 고마워. 보건실 갈 때... 옆에 있어 줘. |
| 390 | `after3_dain_freetalk` | 다인 | gym | dain_normal |  | 🌅 | *다인은 손목 보호대를 고쳐 매다 입꼬리가 반 박자 늦 |
| 391 | `after3_dain_end_check` | 다인 | gym | dain_normal |  | 🌅 | *주먹으로 어깨를 가볍게 친다.* |
| 392 | `after3_dain_end` | 다인 | gym | dain_shy |  | 🌅 | *다인의 주먹이 어깨에 닿지만 어제처럼 몸이 밀리지는  |
| 393 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.* |
| 394 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 395 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 396 | `minsu_d3_check` | {name} | school | 없음 |  | 🌅 |  |
| 397 | `minsu_d3_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문 앞에 민수가 서 있다.* |
| 398 | `minsu_d3_2` | 민수 | school | 없음 |  | 🌅 | 봤다. |
| 399 | `minsu_d3_3` | 민수 | school | 없음 |  | 🌅 | 점심때. 그리고 방금 서연 표정도. |
| 400 | `minsu_d3_4` | 민수 | school | 없음 |  | 🌅 | 어제 내가 뭐랬냐. 나중에 셋 다 울면 네 탓이라고 했 |
| 401 | `minsu_d3_5` | 민수 | school | 없음 |  | 🌅 | 옆에서 보기 좀 힘들다. 걔들 다 좋은 애들이야. 네가 |
| 402 | `minsu_d3_5b` | 민수 | school | 없음 |  | 🌅 | *민수는 빨대 포장지를 끝까지 접어 테이블 위에 내려놓 |
| 403 | `minsu_d3_6` | {name} | school | 없음 |  | 🌅 | 맞아. |
| 404 | `minsu_d3_6b` | 민수 | school | 없음 |  | 🌅 | 전 학교에서 뭔 일 있었는지 안 물어볼게. 근데 하나만 |
| 405 | `minsu_d3_7` | 민수 | school | 없음 |  | 🌅 | 거절도 배려야. 안 되는 관계에 계속 여지 주는 것보다 |
| 406 | `minsu_d3_8` | {name} | school | 없음 |  | 🌅 | *거절도 배려다. 전 학교에서 나는 소정이에게 고백할  |
| 407 | `minsu_d3_9` | 민수 | school | 없음 |  | 🌅 | *민수는 더 말하지 않고 끝까지 접은 빨대 포장지를 내 |
| 408 | `minsu_d3_10` | 민수 | school | 없음 |  | 🌅 | 내일 학교에서 보자. 진지하게 생각해. |
| 409 | `night3_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 가방을 의자에 걸어 둔다.* |
| 410 | `night3_start_2` | {name} | room_my | 없음 |  |  | *책상 위에 엎어 둔 핸드폰 화면을 켠다.* |
| 411 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *읽지 않은 메시지가 떠 있다.* |
| 412 | `night3_faithful_msg_dain_1` | 다인 | room_my | dain_normal | 0.35 |  | 발목 괜찮냐고 물어볼 거면 직접 와서 물어봐ㅋㅋ |
| 413 | `night3_faithful_msg_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | 아 근데 고마워 |
| 414 | `night3_faithful_msg_dain_3` | {name} | room_my | dain_normal | 0.35 |  | *'ㅋㅋ'와 다음 문장 사이가 비어 있다. 다인의 새  |
| 415 | `night3_dream_1` | {name} | school | 없음 |  |  | *꿈속에서 누군가와 나란히 걷는다. 얼굴은 보이지 않고 |
| 416 | `night3_dream_2_b` | {name} | school | 없음 |  |  | *메모장을 닫았다. 내일 보낼 문장은 아직 없다.* |
| 417 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *커튼 사이로 들어온 아침 햇살에 눈을 뜬다. 핸드폰  |
| 418 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *'삭제하시겠습니까?' 확인 창이 뜬다. 손가락이 버튼 |
| 419 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *1초 동안 화면을 내려다본다. 소정이 책상의 낙서와  |
| 420 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *그래. 삭제 버튼에 올린 손가락으로 화면을 누른다.* |
| 421 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼을 누르지 않고 사진을 새 폴더로 옮긴다.  |
| 422 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *'거절도 네가 해야 할 일이야.' 민수의 말이 떠오른 |
| 423 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *갤러리에서 소정이 사진이 사라지고 빈칸만 남는다.* |
| 424 | `night3_faithful_reflect_4_b` | {name} | room_my | 없음 |  |  | *빈 앨범 썸네일 위를 엄지로 문지른다.* |
| 425 | `night3_faithful_reflect_4_c` | {name} | room_my | 없음 |  |  | *핸드폰을 덮자 검은 화면에 갤러리의 빈칸이 겹쳐 보인 |
| 426 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *알람이 울리기 전에 눈을 떴다.* |
| 427 | `night3_dream_dain_bonus` | {name} | room_my | 없음 |  |  | *눈을 감자 체육관 바닥에 공 튀는 소리가 떠오른다.* |
| 428 | `night3_end` | {name} | room_my | 없음 |  |  | *방 불을 끄고 핸드폰을 엎어 둔다.* |
| | **Day 4** | | | | | | |
| 429 | `morning4_start` | {name} | room_my | 없음 |  |  | *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다 |
| 430 | `morning4_nightmare_check` |  | room_my | 없음 |  |  |  |
| 431 | `minsu_cheer_1` | {name} | room_my | 없음 |  |  | *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.* |
| 432 | `minsu_cheer_1_b` | 민수 | room_my | minsu_normal | 0.35 |  | *야 오늘 데이트라며?* |
| 433 | `minsu_cheer_1_c` | {name} | room_my | minsu_normal | 0.35 |  | *어떻게 알았어* |
| 434 | `minsu_cheer_1_d` | 민수 | room_my | minsu_normal | 0.35 |  | *다인이가 단톡방에 올림. 내일 약속 있음, 이라고* |
| 435 | `minsu_cheer_2` | 민수 | room_my | minsu_normal | 0.35 |  | 잘하고 와ㅋㅋ |
| 436 | `minsu_cheer_3` | {name} | room_my | minsu_normal | 0.35 |  | 알아. |
| 437 | `minsu_cheer_4_branch` |  | room_my | 없음 |  |  |  |
| 438 | `minsu_cheer_4_ins_single` | {name} | room_my | minsu_normal | 0.35 |  | *핸드폰 캘린더를 본다. 오늘 약속은 하나뿐이다.* |
| 439 | `morning4_start_2` | {name} | room_my | 없음 |  |  | *심호흡하고 약속 메시지를 다시 확인한다.* |
| 440 | `morning4_dain_msg_1` | 다인 | room_my | dain_sweat | 0.35 |  | 오늘이다. 체육관 앞 저녁 6시. 아, 왜 이렇게 떨리 |
| 441 | `morning4_hidden_check` | {name} | room_my | 없음 |  |  | *주말 아침, 학교 앞 사거리에서 신호를 기다린다.* |
| 442 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 443 | `morning4_end` | {name} | room_my | 없음 |  |  | *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 |
| 444 | `date_dain_1` | {name} | gym | dain_laugh |  |  | *체육관 앞. 다인이 뛰어온다. 캡모자에 운동복.* |
| 445 | `date_dain_2` | 다인 | gym | dain_laugh |  |  | 왔다. 늦을 뻔했지? |
| 446 | `date_dain_3` | {name} | gym | dain_laugh |  |  | 10분 일찍 왔는데. |
| 447 | `date_dain_4` | 다인 | gym | dain_normal |  |  | 나는 20분 전에 왔거든. |
| 448 | `date_dain_compliment_choice` | {name} | gym | dain_normal |  |  | *다인이 모자챙을 한 번 눌러 쓰고 기다린다.* |
| 449 | `date_dain_bright` | 다인 | gym | dain_laugh |  |  | *웃던 다인이 모자챙을 한 번 더 눌러쓴다.* ...그 |
| 450 | `date_dain_to_arcade` | {name} | arcade | dain_laugh |  |  | *오락실로 향했다.* |
| 451 | `date_dain_arcade` | {name} | arcade | dain_normal |  |  | *리듬게임 기계 앞에 선다. 화면이 깜빡인다.* |
| 452 | `date_dain_arcade_2` | 다인 | arcade | dain_normal |  |  | 자, 내기다. 진 사람이 음료수. |
| 453 | `date_dain_arcade_2_b` | {name} | arcade | dain_normal |  |  | 또 내기? |
| 454 | `date_dain_arcade_3` | 다인 | arcade | dain_normal |  |  | 내기 없으면 재미없잖아. |
| 455 | `date_dain_arcade_3_b` | {name} | arcade | dain_normal |  |  | *리듬게임이 시작되자 다인의 손이 먼저 박자를 잡는다. |
| 456 | `date_dain_arcade_3_c` | 다인 | arcade | dain_normal |  |  | *자리에서 벌떡 일어난다.* 풀콤보. 봤어? |
| 457 | `date_dain_rhythm` | 다인 | arcade | dain_laugh |  |  | *화면의 점수를 가리킨다.* 이 스코어, 역대 2등이야 |
| 458 | `date_dain_rhythm_2` | {name} | arcade | dain_normal |  |  | 대단해. |
| 459 | `date_dain_rhythm_3` | 다인 | arcade | dain_laugh |  |  | 당연하지. 이건 무릎 안 써도 되니까. |
| 460 | `date_dain_knee` | {name} | arcade | dain_laugh |  |  | *'무릎 안 써도 되니까.' 다인은 말끝에 웃고는 쇼윈 |
| 461 | `date_dain_knee_2` | {name} | street | dain_sweat |  |  | *오락실을 나와 스포츠용품점 앞을 지난다. 다인이 배구 |
| 462 | `date_dain_shop` | 다인 | street | dain_normal |  |  | *쇼윈도 안 배구화의 끈을 눈으로 따라간다. 모자챙 아 |
| 463 | `date_dain_shop_2` | {name} | street | dain_normal |  |  | 다인? |
| 464 | `date_dain_shop_2_b` | 다인 | street | dain_normal |  |  | *진열대 반대쪽으로 턱을 돌린다.* 아무것도 아냐! 가 |
| 465 | `date_dain_shop_3` | 다인 | street | dain_laugh |  |  | *두 손을 주머니에 찔러 넣고 앞서 걷는다.* 쳐다보지 |
| 466 | `date_dain_shop_3_b` | 다인 | street | dain_normal |  |  | *보폭을 더 넓힌다.* 한 번만 더 물으면 진짜 먼저  |
| 467 | `date_dain_end` | {name} | street | dain_sweat |  |  | *다인은 웃지만 캡모자 아래 시선은 여전히 쇼윈도에 머 |
| 468 | `date_dain_end_b` | 다인 | street | dain_normal |  |  | 야. |
| 469 | `date_dain_end_c` | 다인 | street | dain_sweat |  |  | 오늘 재밌었어. ...그냥 하는 말 아니야. |
| 470 | `pre_confess_minsu` | 민수 | street | minsu_smirk | 0.35 |  | 야, 데이트 중이지? 한마디만 할게 |
| 471 | `pre_confess_minsu_2` | 민수 | street | minsu_smirk | 0.35 |  | 말 돌리지 말고 제대로 해 |
| 472 | `pre_confess_callback` | {name} | street | minsu_smirk |  |  | *주머니 속 핸드폰 모서리가 손바닥에 눌린다. 알림은  |
| 473 | `confess_seo_1` | {name} | top_school | 없음 |  | 🌅 | *데이트가 끝났다. 교문 대신 옥상으로 올라왔다.* |
| 474 | `confess_dain_1` | {name} | gym | dain_laugh |  | 🌅 | *데이트가 끝나자 다인이 학교 쪽으로 성큼 앞서간다.* |
| 475 | `confess_dain_2` | 다인 | gym | dain_normal |  | 🌅 | 마지막. 한 군데만 더 가자. |
| 476 | `confess_dain_3` | {name} | gym | dain_normal |  | 🌅 | *빈 체육관. 서쪽 창문의 빛이 첫날 내기했던 코트 선 |
| 477 | `confess_dain_4` | 다인 | gym | dain_normal |  | 🌅 | *공 하나를 두 손으로 쥔다. 손가락 마디가 공 표면에 |
| 478 | `confess_dain_5` | {name} | gym | dain_normal |  | 🌅 | *공이 바닥에 한 번 튄다.* |
| 479 | `confess_dain_choice` | 다인 | gym | dain_sweat |  | 🌅 | *공이 바닥에 한 번 튄다. 다인의 손이 반 박자 늦어 |
| 480 | `confess_dain_no_1` | {name} | gym | dain_normal |  | 🌅 | ...한 판 더 할까? |
| 481 | `confess_dain_no_2` | {name} | gym | dain_normal |  | 🌅 | *토스를 올려준다. 말은 나오지 않는다.* |
| 482 | `confess_dain_no_3` | 다인 | gym | dain_sweat |  | 🌅 | *다인이 배구공을 두 번 튀긴다. 세 번째로 튀어 오른 |
| 483 | `confess_dain_no_4` | 다인 | gym | dain_sad |  | 🌅 | 다음에는 말해. |
| 484 | `confess_dain_no_4_b` | {name} | gym | dain_sad |  | 🌅 | *다인의 목소리가 체육관 천장으로 작게 흩어진다. 손목 |
| 485 | `day4_night_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 옷소매에 공원 흙과 학교 먼지가 조금 |
| 486 | `day4_night_branch` | 시스템 | room_my | 없음 |  |  |  |
| 487 | `day4_student_night_branch` |  | room_my | 없음 |  |  |  |
| 488 | `day4_night_regret` | {name} | room_my | 없음 |  |  | *집으로 돌아온 뒤에도 채팅창에는 입력하다 만 문장이  |
| 489 | `day4_night_regret_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 490 | `day4_night_regret_msg_dain` | 다인 | room_my | dain_normal | 0.35 |  | 야, 오늘 재밌었다. 나 혼자 들뜬 거 아니었지? |
| 491 | `day4_night_regret_reply` | {name} | room_my | 없음 |  |  | *답장을 쓰다 지운다. 입력창에는 받침 하나만 남았다가 |
| 492 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 493 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *알람을 일요일 오전으로 맞추고 방 불을 끈다. 전하지 |
| 494 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안 시계가 자정 쪽으로 넘어간다. 휴대폰 화면도  |
| | **Day 5** | | | | | | |
| 495 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소 |
| 496 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 497 | `morning5_start_b` | {name} | room_school | 없음 |  |  | *교실에 들어서자 세 가지가 한꺼번에 눈에 들어온다.  |
| 498 | `morning5_start_2_b` | {name} | room_school | 없음 |  |  | *책상 위에 쪽지가 놓여 있다. 서연의 글씨.* |
| 499 | `morning5_mood_check` | 시스템 | room_school | 없음 |  |  |  |
| 500 | `morning5_mood_low` | {name} | room_school | 없음 |  |  | 마지막 날. 잠금화면에 남은 이름 셋을 차례로 누른다. |
| 501 | `morning5_gate` | {name} | school | 없음 |  |  | *교문 앞에서 소매를 걷어 올린다. 손목에 남던 붉은  |
| 502 | `morning5_seo_note_1` | {name} | room_school | seyoun_normal |  |  | *책상 위에 쪽지가 놓여 있다. 서연의 글씨. — '오 |
| 503 | `morning5_seo_note_1_b` | {name} | school_hallway | 없음 |  |  | *복도 문예부 전시 코너를 지나다 게시판의 빈 압정 네 |
| 504 | `morning5_seo_note_1_c` | {name} | school_hallway | 없음 |  |  | *게시판에 단편소설이 붙어 있다. 제목: '도서관에서  |
| 505 | `morning5_yuna_story_1` | {name} | school_hallway | yuna_normal |  |  | *소설 속 인물은 도서관에서 잠든 누군가의 어깨에 담요 |
| 506 | `morning5_yuna_story_2` | {name} | school_hallway | 없음 |  |  | *마지막 문장. '그 사람이 눈을 떴을 때, 나는 이미 |
| 507 | `morning5_yuna_story_4` | {name} | school_hallway | yuna_normal |  |  | *게시판 아래 구석에는 작은 글씨가 남아 있다. '이건 |
| 508 | `morning5_return_class` | {name} | room_school | dain_normal |  |  | *교실로 돌아오니 다인이 기다리고 있다.* |
| 509 | `morning5_dain_1` | 다인 | room_school | dain_normal |  |  | 야, 오늘 체육 이벤트 파트너로 너 써놨어. |
| 510 | `morning5_dain_1_b` | {name} | room_school | dain_normal |  |  | 허락도 없이? |
| 511 | `morning5_dain_2` | 다인 | room_school | dain_laugh |  |  | 늦으면 화낸다? |
| 512 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *행사 준비 시간. 복도를 걷는데 — 빈 교실 앞을 지 |
| 513 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *행사 중간 쉬는 시간. 보건실 앞을 지나간다.* |
| 514 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 515 | `morning5_end` | {name} | room_school | 없음 |  |  | *세 방향에서 온 쪽지와 알림을 책상 위에 나란히 둔다 |
| 516 | `tour_dain_1_check` | {name} | gym | 없음 |  |  | *체육관으로 간다.* |
| 517 | `tour_dain_1` | {name} | gym | 없음 |  |  | *체육관. 첫 내기를 했던 라인 옆에 어젯밤 정리한 공 |
| 518 | `tour_dain_2` | 다인 | gym | dain_normal |  |  | *다인은 배구공 하나를 옆구리에 낀 채 코트 한가운데  |
| 519 | `tour_dain_3` | 다인 | gym | dain_laugh |  |  | 야, 마지막 가위바위보 할래? |
| 520 | `tour_dain_4` | {name} | gym | dain_normal |  |  | 또 질 거면서. |
| 521 | `tour_dain_5` | 다인 | gym | dain_laugh |  |  | 이번엔 이긴다. |
| 522 | `tour_dain_6` | {name} | gym | dain_normal |  |  | *가위바위보. — 다인이 졌다.* |
| 523 | `tour_dain_7` | 다인 | gym | dain_laugh |  |  | 왜 또 졌지. |
| 524 | `tour_dain_8` | {name} | gym | dain_normal |  |  | *다인은 미간을 찌푸린 채 입꼬리를 누르지 못한다. 한 |
| 525 | `tour_dain_10` | 다인 | gym | dain_sad |  |  | 프로는 아직 모르겠지만. |
| 526 | `tour_dain_11` | {name} | gym | dain_sad |  |  | *공이 코트 선을 따라 굴러간다. 다인이 다음 말을 꺼 |
| 527 | `tour_dain_11_b` | 다인 | gym | dain_normal |  |  | 예전엔 배구가 빠지면 나도 텅 비는 줄 알았거든. 근데 |
| 528 | `tour_dain_12` | 다인 | gym | dain_sad |  |  | 뭐가 달라졌는지는 몰라. 근데 코트 밖에서도 할 말이  |
| 529 | `tour_dain_13` | {name} | gym | dain_normal |  |  | 뭐가 달라진 건데? |
| 530 | `tour_dain_end` | 다인 | gym | dain_shy |  |  | 혼자 있지는 않잖아. |
| 531 | `tour_dain_freetalk` | 다인 | gym | dain_normal |  |  | *굴러온 배구공을 운동화 밑으로 눌러 세운다.* 마지막 |
| 532 | `tour_dain_end_2` | {name} | gym | dain_shy |  |  | *다인은 무릎 대신 배구공 표면을 손바닥으로 굴린다.* |
| 533 | `after5_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 534 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *행사가 끝나갈 무렵, 복도에서 선택하지 않은 두 사람 |
| 535 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 536 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다.* |
| 537 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다. 서연은 잠시 멈췄다가 고개 |
| 538 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 539 | `after5_farewell_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나가 다가온다. 아무 말 없이 책 한 |
| 540 | `after5_farewell_yuna_low` | 유나 | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나와 눈이 마주친다. 유나는 들고 있 |
| 541 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 542 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *석양이 교정 창문마다 걸린다. 방송실에서 행사 종료  |
| 543 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 544 | `after5_last_chance_1` | {name} | school_back | 없음 |  | 🌅 | *행사장 스피커 전원이 꺼진다. 갈림길 안내판 아래에서 |
| 545 | `after5_last_chance_2` | {name} | school_back | 없음 |  | 🌅 | *주머니 속 휴대폰을 꺼낸다. 검은 화면에 행사 현수막 |
| 546 | `after5_last_chance_route_check` |  | school_back | 없음 |  | 🌅 |  |
| 547 | `after5_last_chance_dain_aff_check` |  | school_back | 없음 |  | 🌅 |  |
| 548 | `after5_last_chance_dain_low_1` | {name} | school_back | 없음 |  | 🌅 | 다인아. |
| 549 | `after5_last_chance_dain_low_2` | 다인 | school_back | dain_sad |  | 🌅 | *한 걸음 지나친 뒤 돌아온다. 배구공을 가슴 앞에 안 |
| 550 | `after5_last_chance_choice` | {name} | school_back | 없음 |  | 🌅 | *손바닥 안에서 핸드폰이 눌린다.* |
| 551 | `after5_confess_yes` | {name} | school_back | 없음 |  | 🌅 | *휴대폰을 주머니에 넣고 이름을 부른다.* |
| 552 | `after5_confess_yes_2` | {name} | school_back | 없음 |  | 🌅 | 나, 너한테 할 말이 있어. |
| 553 | `after5_confess_aff_dain` |  | school_back | 없음 |  | 🌅 |  |
| 554 | `after5_confess_react_dain_low` | 다인 | school_back | dain_sad |  | 🌅 | *배구공의 홈을 엄지로 따라간다.* 들었어. 바로 웃기 |
| 555 | `after5_confess_fail_walk_1` | {name} | school_back | 없음 |  | 🌅 | *해가 더 내려앉는다. 같은 쪽으로 걷기만 한다.* |
| 556 | `after5_confess_fail_walk_2` | {name} | park | 없음 |  | 🌅 | *답을 못 낸 채 공원 쪽으로 걸었다.* |
| 557 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 558 | `ending_last_chance_resolve` | 시스템 | park | 없음 |  |  |  |
| 559 | `ending_confessed_aff_check` | 시스템 | park | 없음 |  |  |  |
| 560 | `ending_confessed_aff_dain` | 시스템 | gym | 없음 |  |  |  |
| 561 | `day5_ending_good` | {name} | park | 없음 |  |  | *고백 후에도 달라진 건 많지 않았다. 일정이 하나 더 |
| 562 | `good_1` | {name} | park | 없음 |  |  | *며칠 동안 대화가 자꾸 끊겼다. 그래도 연락은 끊기지 |
| 563 | `good_1b` | {name} | park | 없음 |  |  | *둘은 같은 길로 나왔다.* |
| 564 | `good_1c` | {name} | park | 없음 |  |  | *벚꽃잎이 신발 앞에 붙었다가, 다음 걸음에 떨어진다. |
| 565 | `good_1_dain` | 다인 | park | dain_pout |  |  | 야, 우리 사이 아직 다 풀린 건 아니야. 그래도 무릎 |
| 566 | `good_2_dain` | {name} | school | dain_pout |  |  | *학교 교문 앞. 다인이 접어 둔 재활 안내지를 내민다 |
| 567 | `good_3_dain` | {name} | school | dain_pout |  |  | *안내지를 받는다. 다인은 그걸 보고서야 웃는다.* |
| 568 | `good_4_dain` | 다인 | school | dain_normal |  |  | 오늘은 안 괜찮아. 그러니까 천천히 가자. |
| 569 | `good_5_dain` | {name} | ending_good_dain | 없음 |  |  | *다인이 먼저 주먹을 내밀고 기다린다. 다른 손에 든  |
| 570 | `good_epilogue_1_dain` | {name} | ending_good_dain | 없음 |  |  | *다인에게서 메시지가 왔다. '내일 아침 재활 산책 같 |
| 571 | `good_epilogue_2_dain` | {name} | ending_good_dain | 없음 |  |  | *짧은 질문 하나가 화면에 오래 남는다.* |
| 572 | `good_epilogue_3_dain` | {name} | ending_good_dain | 없음 |  |  | *답장을 보냈다. '콜. 속도는 네가 정해.'* |
| 573 | `good_5_cg_dain` | 시스템 | ending_good_dain | 없음 |  |  | ─── GOOD END ─── |
| 574 | `day5_dain_ending_freetalk_intro` | {name} | gym | dain_laugh |  |  | *마지막 장면이 지나고 익숙한 체육관에 공 튀는 소리만 |
| 575 | `day5_dain_ending_freetalk_router` | {name} | gym | 없음 |  |  |  |
| 576 | `day5_dain_ending_freetalk_late_good` | 다인 | park | dain_laugh |  | 🌙 | *마지막 날의 고백을 떠올리며 주먹을 내밀고 웃는다.* |
| 577 | `day5_credits` |  | school | 없음 |  |  |  |
| 578 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### day5_dain_ending_freetalk_true_love

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_dain_choice`: (선택)
- `after_end`: (선택)
- `after_hidden_nurse_choice`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_seo_choice`: (선택)
- `after2_choice`: (선택)
- `night2_choice`: (선택)
- `morning3_date_dain_choice`: (선택)
- `lunch3_choice`: (선택)
- `after3_dain_choice`: (선택)
- `after3_dain_dilemma_final`: (선택)
- `date_dain_compliment_choice`: (선택)
- `confess_dain_choice`: (선택)
- `wall_dain_choice`: (선택)
- `date_choice_true_dain`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=2 유나=-11 다인=60 담임=0 보건=0

<details>
<summary>씬 타임라인 (622씬)</summary>

| # | 씬 ID | 화자 | 배경 | 캐릭터 | OP | 밤 | 대사 (앞 30자) |
|---|--------|------|------|--------|----|----|----------------|
| | **Day 1** | | | | | | |
| 1 | `start` | {name} | school | 없음 |  |  | *4월의 교문 앞. 밟힌 꽃잎이 드문드문 붙어 있다.  |
| 2 | `start_3` | {name} | school | 없음 |  |  | *주머니에서 핸드폰이 울리고 예전 학교 단체 카톡방에  |
| 3 | `name_input_scene` | 시스템 | school | 없음 |  |  | 전학생, 당신의 이름은? |
| 4 | `gate_1` | {name} | school | 없음 |  |  | *낯선 교문 앞, 내 교복만 아직 접힌 선이 선명하다. |
| 5 | `seoyeon_meet_1` | 서연 | school | seyoun_normal |  |  | 전학생? {name} 맞지? |
| 6 | `seoyeon_meet_2` | 서연 | school | seyoun_normal |  |  | *{name}의 이름을 한 번 더 확인한 뒤 클립보드  |
| 7 | `seoyeon_meet_3` | {name} | school | seyoun_normal |  |  | 맞는데. 어떻게 알았어? |
| 8 | `seoyeon_meet_4` | 서연 | school | seyoun_normal |  |  | 학생회장. 전학생 안내는 내 담당이야. |
| 9 | `seoyeon_meet_5` | 서연 | school | seyoun_normal |  |  | 따라와. 15분 안에 끝낼게. |
| 10 | `seoyeon_meet_6` | {name} | school | seyoun_normal |  |  | 학생회장이 직접? 과분한데. |
| 11 | `seoyeon_meet_7` | 서연 | school | seyoun_normal |  |  | 과분한 건지 아닌 건지는 내가 정해. |
| 12 | `seoyeon_meet_8` | {name} | school | seyoun_normal |  |  | *서연은 이미 교문 안쪽으로 걸음을 옮겼다. 안내 파일 |
| 13 | `seoyeon_choice` | {name} | school | seyoun_normal |  |  | *어떻게 반응할까?* |
| 14 | `choice_flirt_1` | 서연 | school | seyoun_normal |  |  | *서연의 구두가 반 바퀴 돌아선다. 안경테 위로 한쪽  |
| 15 | `choice_flirt_2` | 서연 | school | seyoun_laugh |  |  | 첫날부터 말은 잘하네. 이름은 금방 외우겠다. |
| 16 | `choice_flirt_3` | {name} | school | seyoun_laugh |  |  | 점수제야? |
| 17 | `choice_flirt_4` | 서연 | school | seyoun_normal |  |  | 아직 분위기 파악은 안 됐나 봐. 나쁘진 않아. |
| 18 | `choice_flirt_5` | {name} | school | seyoun_normal |  |  | 영광인데? |
| 19 | `choice_flirt_6` | 서연 | school | seyoun_normal |  |  | 아직 영광인지 재앙인지 모르는 거지. |
| 20 | `choice_flirt_7` | 서연 | school | seyoun_laugh |  |  | *앞서 걷는다. 한 번 뒤돌아보고 {name}의 발소리 |
| 21 | `hallway_1` | 서연 | school_hallway | seyoun_back |  |  | *복도를 앞서 걷는다. 마주치는 학생들이 먼저 인사할  |
| 22 | `hallway_3` | 서연 | school_hallway | seyoun_normal |  |  | 3학년 건물은 여기, 저쪽이 도서관. 매점은 지하. |
| 23 | `hallway_4` | 서연 | school_hallway | seyoun_normal |  |  | *주머니에서 열쇠를 꺼내 손바닥 위에서 짤랑거린다.* |
| 24 | `hallway_5` | 서연 | school_hallway | seyoun_normal |  |  | 옥상은 원래 잠겨 있어. 학생회장 특권이지. |
| 25 | `hallway_6` | {name} | school_hallway | seyoun_normal |  |  | 비밀 아지트라도 있어? |
| 26 | `hallway_6_b` | 서연 | school_hallway | seyoun_normal |  |  | *열쇠고리 소리가 뚝 끊긴다.* 눈치 빠르네. |
| 27 | `hallway_6_c` | 서연 | school_hallway | seyoun_normal |  |  | *대답 대신 열쇠를 다시 주머니에 넣는다.* |
| 28 | `hallway_7` | 서연 | school_hallway | seyoun_normal |  |  | 아, 점심. 밥 어디서 먹는지 모르지? 같이 가. |
| 29 | `hallway_8` | {name} | school_hallway | seyoun_shy |  |  | *서연은 교실 앞에 서서 문패를 가리킨다.* |
| 30 | `hallway_10` | 서연 | school_hallway | seyoun_normal |  |  | 여기야. 들어가 봐. |
| 31 | `hallway_11` | {name} | school_hallway | seyoun_normal |  |  | 점심때도 안내해 주는 거야? |
| 32 | `hallway_12` | 서연 | school_hallway | seyoun_normal |  |  | 그건 네가 잘하면. |
| 33 | `hallway_13` | 서연 | school_hallway | seyoun_back |  |  | *돌아선 서연이 클립보드를 든 손만 어깨 높이로 한 번 |
| 34 | `hallway_13_b` | {name} | school_hallway | seyoun_back |  |  | *복도 끝으로 멀어질 때까지 걸음이 흐트러지지 않았다. |
| 35 | `classroom_1` | {name} | room_school | 없음 |  |  | *교실 문을 열자 소음이 뚝 끊기고 가까운 책상 의자  |
| 36 | `classroom_2_b` | {name} | room_school | teacher_normal |  |  | *교탁 앞에 담임선생님이 서 있다. 20대 후반. 가디 |
| 37 | `classroom_3` | 담임 | room_school | teacher_normal |  |  | 자, 오늘부터 우리 반에 들어온 전학생이야. 자기소개  |
| 38 | `classroom_3_b` | {name} | room_school | teacher_normal |  |  | {name}입니다. 잘 부탁드립니다. *담임이 출석부의 |
| 39 | `classroom_5_b` | 담임 | room_school | teacher_normal |  |  | 그래, {name}. 외웠어. *출석부에 이름을 덧그으 |
| 40 | `classroom_5_c` | {name} | room_school | teacher_normal |  |  | *담임의 혼잣말은 교실 소음에 묻힌다. 교실 한쪽에서  |
| 41 | `classroom_dain_1` | 다인 | room_school | dain_normal |  |  | 오, 전학생. 우리 반에 새 얼굴 들어왔네! |
| 42 | `classroom_dain_2` | {name} | room_school | dain_normal |  |  | *갈색 숏컷에 배구부 유니폼. 자리에서 반쯤 일어나 손 |
| 43 | `classroom_dain_3` | 담임 | room_school | teacher_normal |  |  | 다인아, 목소리 낮춰. 그리고 교실에서는 유니폼 좀 그 |
| 44 | `classroom_dain_4` | 다인 | room_school | dain_normal |  |  | 쌤, 이게 제일 편하다니까요. 아무튼 전학생, 반갑다. |
| 45 | `classroom_dain_5` | {name} | room_school | dain_normal |  |  | *교실 몇 군데서 웃음이 터진다. 다인은 손을 더 높이 |
| 46 | `classroom_dain_5_b` | 담임선생님 | room_school | teacher_normal |  |  | *출석부 모서리로 교탁을 두 번 두드리고 다인 쪽을 보 |
| 47 | `classroom_dain_5_c` | 담임 | room_school | teacher_normal |  |  | 에너지 좀 아껴. 아직 1교시도 안 시작했어. |
| 48 | `classroom_dain_5_d` | 담임선생님 | room_school | teacher_angry |  |  | *담임은 출석부를 넘긴다.* |
| 49 | `classroom_yuna_1` | {name} | room_school | yuna_bored |  |  | *창가 맨 뒤쪽의 한 여학생은 턱을 괸 채 창밖만 본다 |
| 50 | `classroom_yuna_2` | {name} | room_school | yuna_bored |  |  | *은백색 머리. 붉은 눈. 팔의 타투. 창가 맨 뒤 자 |
| 51 | `classroom_yuna_4` | {name} | room_school | yuna_bored |  |  | *앞줄에서 누군가 속삭인다. '쟤한테 말 걸지 마. 무 |
| 52 | `classroom_seat_1` | 담임선생님 | room_school | teacher_normal |  |  | *빈자리를 가리킨다.* |
| 53 | `classroom_seat_2` | {name} | room_school | dain_normal |  |  | *다인 옆자리다. 의자에 앉기도 전에 다인이 내 책상  |
| 54 | `classroom_minsu_1` | {name} | room_school | minsu_normal |  |  | *자리에 앉으려는데 — 앞자리 남학생이 돌아본다.* |
| 55 | `classroom_minsu_2` | 민수 | room_school | minsu_smirk |  |  | 야, 전학생. 환영한다. — 그리고 조심해. |
| 56 | `classroom_minsu_3` | {name} | room_school | minsu_smirk |  |  | 뭘? |
| 57 | `classroom_minsu_2_b` | 민수 | room_school | minsu_normal |  |  | *다인 쪽으로 턱짓한다.* 체력 관리. |
| 58 | `classroom_dain_talk_1` | {name} | room_school | minsu_normal |  |  | *앞자리 이름표에는 '민수'라고 적혀 있었다.* |
| 59 | `classroom_dain_talk_2` | {name} | room_school | dain_normal |  |  | *자리에 앉자마자 다인이 상체를 기울인다. 책상 두 개 |
| 60 | `classroom_dain_talk_3` | 다인 | room_school | dain_normal |  |  | 야, {name}. 운동 좋아해? |
| 61 | `classroom_dain_talk_4` | {name} | room_school | dain_normal |  |  | 갑자기? |
| 62 | `classroom_dain_talk_5` | 다인 | room_school | dain_normal |  |  | 그냥. 방과후에 리시브 연습 상대가 필요해서. 서브 넣 |
| 63 | `classroom_dain_talk_6` | {name} | room_school | dain_normal |  |  | 나 볼 머신이야? |
| 64 | `classroom_dain_talk_7` | 다인 | room_school | dain_laugh |  |  | 그래도 볼 머신보단 낫겠지. 아마. |
| 65 | `classroom_dain_talk_8` | {name} | room_school | dain_laugh |  |  | *'아마' 뒤에 다인의 시선이 볼 머신 쪽으로 간다.  |
| 66 | `classroom_yuna_note_1` | {name} | room_school | yuna_bored |  |  | *접힌 쪽지가 책상 위로 미끄러져 온다. 뒤를 돌아봐도 |
| 67 | `classroom_yuna_note_3` | {name} | room_school | yuna_bored |  |  | *'시끄러운 자리 걸렸네. — 유나' 연보라색 잉크.  |
| 68 | `classroom_yuna_note_5` | {name} | room_school | yuna_bored |  |  | *유나 쪽을 보자 시선은 여전히 창밖이고 손만 책상 아 |
| 69 | `classroom_yuna_note_6` | {name} | room_school | yuna_bored |  |  | *수업 종이 울리자 유나는 다시 창밖을 보고 다인은 벌 |
| 70 | `lunch_start` | {name} | school_hallway | 없음 |  |  | *점심시간. 학생들로 찬 복도 끝에는 서연의 도시락 가 |
| 71 | `lunch_start_4` | {name} | school_hallway | seyoun_normal |  |  | *복도 끝에서 서연이 눈을 맞추더니 옥상 쪽을 손으로  |
| 72 | `lunch_start_4_b` | {name} | school_hallway | dain_normal |  |  | *옆에서 다인이 팔목을 낚아챈다.* |
| 73 | `lunch_start_5` | 다인 | school_hallway | dain_normal |  |  | 야, 밥 먹었어? 매점 가자. 빵 내기하자, 진 사람이 |
| 74 | `lunch_start_6` | {name} | school_hallway | yuna_normal |  |  | *유나는 가방만 들고 교실을 빠져나가 도서관 방향으로  |
| 75 | `lunch_start_7` | {name} | school_hallway | 없음 |  |  | *복도는 세 갈래다. 옥상, 매점, 도서관. 주머니 안 |
| 76 | `lunch_choice` | {name} | school_hallway | 없음 |  |  | *누구를 따라갈까?* |
| 77 | `lunch_dain_1` | 다인 | store | dain_laugh |  |  | 도착. 여기가 매점이야. 일단 고르고 봐. |
| 78 | `lunch_dain_1_aff_default` | 다인 | store | dain_normal |  |  | *매점 안은 점심시간이라 북적거린다. 빵 냄새랑 우유  |
| 79 | `lunch_dain_2` | 다인 | store | dain_normal |  |  | 소보로빵에 딸기우유. 이 조합은 실패한 적 없어. |
| 80 | `lunch_dain_3` | {name} | store | dain_normal |  |  | 근데 진 사람이 사준다며. 뭘 하는 거야? |
| 81 | `lunch_dain_4` | 다인 | store | dain_normal |  |  | 가위바위보. 간단하지. |
| 82 | `lunch_dain_5` | {name} | store | dain_normal |  |  | 당연한 건 아닌데. |
| 83 | `lunch_dain_6` | 다인 | store | dain_normal |  |  | 안 하면 네가 사는 걸로 친다? |
| 84 | `lunch_dain_7` | {name} | store | dain_normal |  |  | 하자. |
| 85 | `lunch_dain_8` | {name} | store | dain_normal |  |  | *가위바위보.* |
| 86 | `lunch_dain_9` | 다인 | store | dain_normal |  |  | 가위— 바위— 보! |
| 87 | `lunch_dain_10` | {name} | store | dain_normal |  |  | *가위. 바위. 보. — 다인이 졌다.* |
| 88 | `lunch_dain_11` | 다인 | store | dain_normal |  |  | 어? 나 졌네. 한 판 더. |
| 89 | `lunch_dain_12` | {name} | store | dain_pout |  |  | 약속은 약속이지. |
| 90 | `lunch_dain_12_b` | 다인 | store | dain_pout |  |  | 아, 알았어. 내가 산다. 이모, 소보로 두 개요. |
| 91 | `lunch_dain_14` | 다인 | store | dain_pout |  |  | *동전을 카운터에 탁탁 놓고 소보로 두 개를 받아 든다 |
| 92 | `lunch_dain_15` | {name} | store | dain_normal |  |  | *매점 한쪽 벤치에 앉아 빵을 먹는다.* |
| 93 | `lunch_dain_16` | 다인 | store | dain_normal |  |  | *빵 봉지를 뜯는다.* 야, 너 운동 진짜 안 해? |
| 94 | `lunch_dain_17` | {name} | store | dain_normal |  |  | 왜, 내 체력이 걱정돼? |
| 95 | `lunch_dain_18` | 다인 | store | dain_laugh |  |  | 아니. 나랑 다니려면 체력부터 봐야지. |
| 96 | `lunch_dain_19` | {name} | store | dain_laugh |  |  | 자기 PR인 줄 알았어. |
| 97 | `lunch_dain_20` | 다인 | store | dain_laugh |  |  | PR? 그게 뭔데. |
| 98 | `lunch_dain_21` | {name} | store | dain_normal |  |  | Personal Record. 운동할 때 쓰는 말인데. |
| 99 | `lunch_dain_22` | 다인 | store | dain_normal |  |  | *딸기우유 팩 옆면이 손가락에 눌려 우그러진다.* |
| 100 | `lunch_dain_23` | 다인 | store | dain_laugh |  |  | 오, 그거 알아? 너 운동 쪽 좀 아네? |
| 101 | `lunch_dain_choice` | 다인 | store | dain_laugh |  |  | *빨대를 문 채 상체를 가까이 기울인다.* |
| 102 | `lunch_dain_c1_1` | 다인 | store | dain_laugh |  |  | 좋아. 그럼 방과후 체육관 와. 워밍업부터 보자, 콜? |
| 103 | `lunch_dain_c1_2` | {name} | store | dain_laugh |  |  | *다인의 웃음소리가 매점 소음 위로 튄다. 의자가 뒤로 |
| 104 | `lunch_dain_after` | {name} | store | dain_laugh |  |  | *빵을 다 먹고 일어서는데.* |
| 105 | `lunch_dain_after_2` | 다인 | store | dain_normal |  |  | 야, {name}. |
| 106 | `lunch_dain_after_3` | {name} | store | dain_normal |  |  | 응? |
| 107 | `lunch_dain_after_4` | 다인 | store | dain_normal |  |  | 전학 와서 첫 식사 파트너가 나다? 나름 역사적인데. |
| 108 | `lunch_dain_after_5` | 다인 | store | dain_normal |  |  | *주먹으로 {name}의 어깨를 툭 치고 그대로 한 번 |
| 109 | `lunch_dain_freetalk` | 다인 | store | dain_normal |  |  | *빵 봉지를 접어 주머니에 넣고 벤치 등받이에 기댄다. |
| 110 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *종이 울린다. 점심시간이 끝났다.* |
| 111 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에 |
| 112 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 113 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창 |
| 114 | `after_kakao_5` | {name} | school_hallway | 없음 |  | 🌅 | *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른 |
| 115 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록  |
| 116 | `after1_jealousy_dain_1` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 점심때 매점에서 다인이랑 같이 있는 거 봤는데. 적응  |
| 117 | `after1_jealousy_dain_2` | {name} | school_hallway | seyoun_laugh |  | 🌅 | *서연은 클립보드를 가슴 앞에 세운 채 답을 기다린다. |
| 118 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *복도를 계속 걷는다.* |
| 119 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도를 걷는데 뒤에서 쿵쿵 발소리.* |
| 120 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 조심! |
| 121 | `after_miss_dain_3` | {name} | school_hallway | dain_normal |  | 🌅 | *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 |
| 122 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 피했다? 반사신경 괜찮은데. |
| 123 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 넌 복도에서 왜 전력질주야? |
| 124 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 늦었거든! 체육관 가야 해. 내일 보자, 전학생! |
| 125 | `after_miss_dain_6_b` | {name} | school_hallway | dain_laugh |  | 🌅 | *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을  |
| 126 | `after_miss_dain_7` | {name} | school_hallway | dain_laugh |  | 🌅 | *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아 |
| 127 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으 |
| 128 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 이거 떨어뜨렸어. |
| 129 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피 |
| 130 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌  |
| 131 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 고마워. |
| 132 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피를 책등 사이에 끼우고 돌아선다.* |
| 133 | `after_miss_yuna_4` | {name} | library_old | yuna_normal |  | 🌅 | *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 |
| 134 | `after_miss_seoyeon_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *하교하려는데 복도에서 서연과 마주친다.* |
| 135 | `after_miss_seoyeon_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 아까 어디 갔어? |
| 136 | `after_miss_seoyeon_3` | {name} | school_hallway | seyoun_normal |  | 🌅 | 어디라니? |
| 137 | `after_miss_seoyeon_4` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 옥상 열어놨는데 안 왔네. — 전학생, 배짱이 있어. |
| 138 | `after_miss_seoyeon_5` | {name} | school_hallway | seyoun_normal |  | 🌅 | 기다린 거야? |
| 139 | `after_miss_seoyeon_6` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 바람 쐬러 올라간 건데 문이 열려 있길래. |
| 140 | `after_miss_seoyeon_7` | {name} | school_hallway | seyoun_normal |  | 🌅 | *서연의 클립보드 맨 위에 내 이름이 남아 있다. 체크 |
| 141 | `after_miss_seoyeon_8` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 내일은 빠지지 마. |
| 142 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든 |
| 143 | `after_hidden_nurse_intro` | {name} | school_hallway | 없음 |  | 🌅 | *복도 형광등이 흔들려 보여 벽을 짚자 손바닥에 차가운 |
| 144 | `after_hidden_nurse_choice` | {name} | school_hallway | 없음 |  | 🌅 | *아침부터 계속 사람들 틈에 있었다. 발걸음이 보건실  |
| 145 | `after_nurse_skip` | {name} | school_hallway | 없음 |  | 🌅 | *교문 쪽으로 걷는다.* |
| 146 | `night_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄 |
| 147 | `night_start_3` | {name} | room_my | 없음 |  |  | *핸드폰이 울린다. 학교 메신저.* |
| 148 | `night_msg_dain_1` | 다인 | room_my | dain_normal | 0.35 |  | *가위바위보 리벤지 내일이다* |
| 149 | `night_msg_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | *내일은 리벤지다 ㅋㅋ* |
| 150 | `night_msg_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | *오늘 빵값 아직도 아깝다. 진짜.* |
| 151 | `night_msg_dain_4` | {name} | room_my | dain_normal | 0.35 |  | *세 줄이 거의 동시에 도착했다. 답장창에는 벌써 'ㅋ |
| 152 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 다른 알림이 보인다.* |
| 153 | `night_late_transition` | {name} | room_my | 없음 |  |  | *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시 |
| 154 | `night_late_branch` | {name} | room_my | 없음 |  |  | *화면이 밝아진다.* |
| 155 | `night_dain_late_1` | 다인 | room_my | dain_normal | 0.35 |  | *야 아직 안 잤지?* |
| 156 | `night_dain_late_2` | 다인 | room_my | dain_normal | 0.35 |  | *내일 아침 운동 같이 할 사람 구한다* |
| 157 | `night_dain_late_3` | 다인 | room_my | dain_normal | 0.35 |  | *거절은 안 받음 ㅋㅋ* |
| 158 | `night_dain_late_4` | {name} | room_my | dain_normal | 0.35 |  | *답장창에는 이미 '콜'이 찍혀 있다.* |
| 159 | `night_dain_late_4_b` | {name} | room_my | dain_normal | 0.35 |  | *다인의 메시지 아래에 이모티콘이 줄줄이 붙어 있다.  |
| 160 | `night_end_1` | {name} | room_my | 없음 |  |  | *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교 |
| 161 | `night_end_3` | {name} | room_my | 없음 |  |  | *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을  |
| | **Day 2** | | | | | | |
| 162 | `morning2_start` | {name} | room_school | 없음 |  |  | *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.* |
| 163 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 164 | `morning2_greet_dain_1` | 다인 | room_school | dain_laugh |  |  | 야! 어제 재밌었다, 오늘도 같이 뭐 하자! |
| 165 | `morning2_greet_dain_2` | 다인 | room_school | dain_laugh |  |  | *뒤에서 어깨를 탁 친다.* |
| 166 | `morning2_greet_dain_others` | 서연 | room_school | seyoun_normal |  |  | *클립보드를 넘기며 지나간다.* |
| 167 | `morning2_greet_dain_others_seo` | 서연 | room_school | seyoun_normal |  |  | 에너지 좋다. |
| 168 | `morning2_greet_dain_others_yuna` | {name} | room_school | yuna_bored |  |  | *유나의 펜촉이 쪽지 한가운데 잉크점을 남긴다.* |
| 169 | `morning2_greet_dain_others_2` | {name} | room_school | dain_laugh |  |  | *교실 문이 닫힌 뒤 클립보드 두드리는 소리가 복도에서 |
| 170 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *자리에 앉으려는데 — 책상 위에 접힌 쪽지가 하나 놓 |
| 171 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 172 | `morning2_note_3` | {name} | room_school | yuna_normal | 0.35 |  | *어제와 같은 글씨. 아래쪽에 장소가 적혀 있다. '도 |
| 173 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가다 교실 안을 들여다본다.* 어제 잘 잤 |
| 174 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 학생회장이 교실까지 인사하러 와? |
| 175 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 순찰이야. — 출석률 확인 겸. |
| 176 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | *복도로 돌아가기 직전 클립보드 끝이 문틀에 한 번 닿 |
| 177 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연이 사라진 복도를 바라보는데 — 뒤에서 민수가 돌 |
| 178 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 이틀 만에 학생회장이 인사하러 오냐? 나 1 |
| 179 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 인기가 없는 거 아닐까. |
| 180 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 그건 맞는데 그게 중요한 게 아니잖아. |
| 181 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *다인은 서연의 뒷모습이 교실 안으로 사라질 때까지 바 |
| 182 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 회장님도 우리 전학생한테 관심 있어? 인기 많네! |
| 183 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | '우리' 전학생? |
| 184 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 내가 먼저 봤잖아. 그럼 우리 맞지. 찜한 거. |
| 185 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *쉬는 시간. 복도로 나왔다.* |
| 186 | `morning2_break_1` | {name} | school_hallway | 없음 |  |  | *서연의 클립보드 끝이 책상에 톡 닿는다. 답할 틈도  |
| 187 | `morning2_seo_dust_1` | {name} | school_hallway | seyoun_normal |  |  | *1교시가 끝난 쉬는 시간, 복도에서 서연과 스친다.  |
| 188 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 잠깐. |
| 189 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *손이 {name}의 어깨에 닿는다. 먼지를 두 번 털 |
| 190 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 옷에 뭐 묻었어. |
| 191 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | *서연의 손이 떨어진 자리에서 가방끈이 비뚤어져 있다. |
| 192 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 왜 그래? 먼지잖아. |
| 193 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *어깨의 먼지는 없어졌는데 가방끈을 두 번이나 다시 고 |
| 194 | `morning2_dain_react_2` | {name} | school_hallway | dain_angry |  |  | *서연이 클립보드를 고쳐 끼고 복도로 간다. 뒤에서 다 |
| 195 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 지금 뭐야? 어깨 만진 거야? |
| 196 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 먼지 털어준 거야. |
| 197 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 먼지가 진짜 있긴 했어? |
| 198 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | *대답 대신 가방끈을 고쳐 잡았다. 다인은 그걸 보고도 |
| 199 | `morning2_end` | {name} | school_hallway | seyoun_normal |  |  | *민수 말로는 1년 동안 먼저 인사한 적도 없다던 서연 |
| 200 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *점심. 주머니에는 유나의 쪽지가 있고 복도 끝에서는  |
| 201 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *누구와 함께할까.* |
| 202 | `lunch2_seo_1_check` | {name} | school_hallway | 없음 |  |  | *옥상으로 올라간다.* |
| 203 | `lunch2_seo_1b` | {name} | top_school | seyoun_normal |  |  | *처음 올라온 옥상이다. 난간 아래에서 운동장 호루라기 |
| 204 | `lunch2_seo_2b_check` |  | top_school | seyoun_normal |  |  |  |
| 205 | `lunch2_seo_2b_dain` | 서연 | top_school | seyoun_normal |  |  | 어제는 매점 쪽이더니. 오늘은 여기까지 왔네. |
| 206 | `lunch2_seo_3b_dain` | {name} | top_school | seyoun_normal |  |  | 어제는 다인이 끌고 갔고 오늘은 내가 올라오고 싶었어. |
| 207 | `lunch2_seo_4b_dain` | 서연 | top_school | seyoun_normal |  |  | 그건 좀 다르네. |
| 208 | `lunch2_seo_5b_dain` | {name} | top_school | seyoun_normal |  |  | 바람도 좋고. 네 도시락도 계속 생각났고. |
| 209 | `lunch2_seo_6b_dain` | 서연 | top_school | seyoun_laugh |  |  | 솔직하네. |
| 210 | `lunch2_seo_7` | {name} | top_school | seyoun_normal |  |  | *서연이 도시락 뚜껑을 여는 순간 옥상 문이 철컥 열린 |
| 211 | `lunch2_seo_9` | 다인 | top_school | dain_normal |  |  | 여기 있었네. 찾았다. 오늘도 나 빼고 먹으려고? |
| 212 | `lunch2_seo_10` | 서연 | top_school | seyoun_normal |  |  | 옥상은 허가제야. 그리고 오늘 점심은 내가 먼저 잡았고 |
| 213 | `lunch2_seo_11` | 다인 | top_school | dain_normal |  |  | 그럼 난 지금부터 끼면 되겠네. 나도 앉는다? |
| 214 | `lunch2_seo_12` | {name} | top_school | dain_normal |  |  | *다인이 빈자리에 바로 앉는다. 서연의 젓가락이 계란말 |
| 215 | `lunch2_seo_13` | 다인 | top_school | dain_normal |  |  | 어제는 나랑 먹었잖아. 하루 만에 회장님 도시락으로 갈 |
| 216 | `lunch2_seo_14` | 서연 | top_school | seyoun_normal |  |  | *다인이 앉으려 하자 빈 의자를 발끝으로 자기 쪽에 붙 |
| 217 | `lunch2_seo_15` | {name} | top_school | seyoun_normal |  |  | 같은 반이잖아. 너희 둘도 이제 아는 사이고. |
| 218 | `lunch2_seo_16` | 서연 | top_school | seyoun_normal |  |  | 친해지는 것하고 양보하는 건 다르지. |
| 219 | `lunch2_seo_17` | 다인 | top_school | dain_normal |  |  | 그럼 나도 양보 안 해. 다음 쉬는 시간에 체육관 와. |
| 220 | `lunch2_seo_19` | 서연 | top_school | seyoun_normal |  |  | {name}, 지금 내 앞에서 다음 약속 잡는 거야? |
| 221 | `lunch2_seo_20` | 서연 | top_school | seyoun_normal |  |  | 대답은 나중에 해. 일단 입가에 뭐 묻었어. 가만있어  |
| 222 | `lunch2_seo_choice` | 서연 | top_school | seyoun_normal |  |  | *물티슈를 감은 손가락이 입가로 다가온다.* |
| 223 | `lunch2_seo_c1_1` | 서연 | top_school | seyoun_normal |  |  | *물티슈로 밥풀을 떼어내고 사용한 쪽을 안으로 접는다. |
| 224 | `lunch2_seo_c1_2` | 서연 | top_school | seyoun_normal |  |  | 됐어. |
| 225 | `lunch2_seo_c1_2_b` | 다인 | top_school | dain_normal |  |  | *다인은 도시락으로 뻗던 손을 공중에 둔 채 둘을 번갈 |
| 226 | `lunch2_seo_c1_3` | 다인 | top_school | dain_normal |  |  | 밥풀을 직접 떼어줘요? |
| 227 | `lunch2_seo_c1_3_b` | 서연 | top_school | seyoun_normal |  |  | *물티슈를 네모로 접는다.* 밥풀이었어. |
| 228 | `lunch2_seo_c1_4` | 서연 | top_school | seyoun_shy |  |  | 그게 다야. |
| 229 | `lunch2_seo_c1_5` | {name} | top_school | seyoun_shy |  |  | *서연은 물병을 집어 들지만 뚜껑은 열지 않는다. 라벨 |
| 230 | `lunch2_seo_end_c1` | {name} | top_school | seyoun_shy |  |  | *다인이 접이식 의자 다리를 운동화 끝으로 두 번 건드 |
| 231 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *방과후. 핸드폰에 알림이 두 개 와 있다.* |
| 232 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 체육관 와. 오늘은 진짜 내기다. |
| 233 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 학생회실에 올 수 있어? 일손이 부족해서. |
| 234 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게서는 아무 연락이 없다. 가방을 챙기자 주머니 |
| 235 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *어디로 갈까.* |
| 236 | `after2_dain_1` | {name} | gym | dain_active |  | 🌅 | *체육관. 다인이 배구 네트 앞에서 준비운동을 하고 있 |
| 237 | `after2_dain_2` | 다인 | gym | dain_sweat |  | 🌅 | 왔어? 늦었어. |
| 238 | `after2_dain_3` | {name} | gym | dain_sweat |  | 🌅 | 5분 전인데. |
| 239 | `after2_dain_4` | 다인 | gym | dain_sweat |  | 🌅 | 나는 10분 전에 왔거든. |
| 240 | `after2_dain_5` | {name} | gym | dain_sweat |  | 🌅 | *빨리 온 쪽이 너. 나는 안 늦었다.* |
| 241 | `after2_dain_6` | 다인 | gym | dain_sweat |  | 🌅 | 자, 내기다! 서브 다섯 번, 세 번 이상 넘기면 네  |
| 242 | `after2_dain_7` | {name} | gym | dain_normal |  | 🌅 | 갑자기 떡볶이? |
| 243 | `after2_dain_8` | 다인 | gym | dain_laugh |  | 🌅 | 배고프거든. |
| 244 | `after2_dain_9` | {name} | gym | dain_normal |  | 🌅 | *첫 서브는 네트에 걸리고 두 번째는 선 안쪽에 떨어진 |
| 245 | `after2_dain_9_b` | 다인 | gym | dain_normal |  | 🌅 | *튕겨 나온 공을 양손으로 받아 든다.* 어? 봐주려고 |
| 246 | `after2_dain_9_c` | 다인 | gym | dain_active |  | 🌅 | *자세를 낮춘다. 공을 든 손에 힘이 들어간다.* |
| 247 | `after2_dain_9_d` | 다인 | gym | dain_active |  | 🌅 | 이번엔 제대로 간다! |
| 248 | `after2_dain_9_e` | {name} | gym | dain_active |  | 🌅 | *랠리가 빠르게 오간다. 다인은 착지할 때마다 왼발부터 |
| 249 | `after2_dain_9_f` | {name} | gym | dain_sweat |  | 🌅 | *점수판은 3:2. 다인은 일어서며 오른쪽 무릎을 한  |
| 250 | `after2_dain_11b` | {name} | street | dain_laugh |  | 🌅 | *체육관을 나와 거리를 걸었다.* |
| 251 | `after2_dain_12` | 다인 | street | dain_laugh |  | 🌅 | 졌네. 근데 좀 치는데? 너 운동 안 한다며. |
| 252 | `after2_dain_13` | {name} | street | dain_laugh |  | 🌅 | 안 한다고는 안 했어. |
| 253 | `after2_dain_14` | 다인 | street | dain_normal |  | 🌅 | *들고 있던 공을 떨어뜨린다.* 뭐야? 속은 거야? |
| 254 | `after2_dain_15` | {name} | street | dain_normal |  | 🌅 | 속인 건 아니고 물어보지도 않았잖아. |
| 255 | `after2_dain_16` | 다인 | street | dain_laugh |  | 🌅 | *주먹을 어깨 높이까지 들었다가 자기 옆구리에 붙인다. |
| 256 | `after2_dain_freetalk` | 다인 | store | dain_normal |  | 🌅 | *가게에 들어서자 다인이 떡볶이 컵을 밀어 놓고 젓가락 |
| 257 | `after2_dain_end` | {name} | store | dain_laugh |  | 🌅 | *다인이 떡볶이 컵을 내 쪽으로 밀어 두고 자기 몫 젓 |
| 258 | `after2_dain_end_b` | {name} | store | dain_laugh |  | 🌅 | *학교 앞 떡볶이집. 다인이 떡볶이를 후후 불며 말한다 |
| 259 | `after2_dain_end_2` | 다인 | store | dain_laugh |  | 🌅 | 야, 너 진짜 운동 좀 아는 거지? |
| 260 | `after2_dain_end_2b` | {name} | store | dain_laugh |  | 🌅 | 조금. |
| 261 | `after2_dain_end_2c` | 다인 | store | dain_laugh |  | 🌅 | 조금이면 저렇게 못 쳐! — 인정해, 잘한다고. |
| 262 | `after2_dain_end_2d` | {name} | store | dain_laugh |  | 🌅 | 다인이가 훨씬 잘하던데. |
| 263 | `after2_dain_end_3` | 다인 | store | dain_laugh |  | 🌅 | *젓가락 끝이 떡볶이 컵 위에서 그대로다.* |
| 264 | `after2_dain_end_3b` | 다인 | store | dain_laugh |  | 🌅 | 당연하지. 나 체육 특기생이었거든. |
| 265 | `after2_dain_end_3c` | {name} | store | dain_laugh |  | 🌅 | *'이었거든'이 끝나자 다인의 젓가락이 종이컵 옆 물컵 |
| 266 | `after2_dain_end_3d` | 다인 | store | dain_laugh |  | 🌅 | 아, 맵다. 물, 물. |
| 267 | `after2_dain_end_3e` | 다인 | store | dain_shy |  | 🌅 | *떡볶이 컵을 {name} 쪽으로 밀어놓고 빈 물병을  |
| 268 | `after2_dain_return` | {name} | school | dain_shy |  | 🌅 | *학교로 돌아오는 길. 교문 앞에 다다랐다.* |
| 269 | `after2_group_dain_companion` | 다인과 동행 | gym | 없음 |  | 🌅 | *체육관과 별관에서 들은 설명이 서로 어긋난다. 다인이 |
| 270 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.* |
| 271 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 272 | `night2_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저  |
| 273 | `night2_msg_1` | {name} | room_my | 없음 |  |  | *세 명에게서 메시지가 왔다.* |
| 274 | `night2_msg_dain_specific` | 다인 | room_my | dain_normal | 0.35 |  | 야, 오늘 떡볶이 맛있었다. |
| 275 | `night2_msg_dain_specific_2` | 다인 | room_my | dain_normal | 0.35 |  | 내일도 내기하자. 종목 바꿔서. |
| 276 | `night2_msg_seo_general` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 점심에 옥상 열어놓을게. 와 |
| 277 | `night2_msg_yuna_general` | 유나 | room_my | yuna_normal | 0.35 |  | 내일 별관 올 거야? |
| 278 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에  |
| 279 | `night2_choice` | {name} | room_my | 없음 |  |  | *누구에게 먼저 답장할까?* |
| 280 | `night2_reply_seo_1` | {name} | room_my | seyoun_normal | 0.35 |  | 부르면 또 갈게 |
| 281 | `night2_reply_seo_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 쉽게 말하네 |
| 282 | `night2_reply_seo_3` | {name} | room_my | seyoun_normal | 0.35 |  | 쉬운 말인데 |
| 283 | `night2_reply_seo_4` | 서연 | room_my | seyoun_normal | 0.35 |  | 점심에 옥상 열어둘게. 늦지 마 |
| 284 | `night2_reply_seo_5` | {name} | room_my | seyoun_normal | 0.35 |  | *서연은 거기서 메시지를 끝냈다.* |
| 285 | `night2_reply_seo_react_default` | 서연 | room_my | seyoun_normal | 0.35 |  | ㅋ 알겠어. 내일 봐. |
| 286 | `night2_seo_freetalk` | 서연 | room_my | seyoun_normal | 0.35 | 🌙 | 아, 잠깐. 아직 안 잤지? |
| 287 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 또 다른 알림이 보인다.* |
| 288 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 보내고 핸드폰을 내려놓았다.* |
| 289 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이,  |
| 290 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 |
| 291 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *메모장에 줄줄이 남은 보내지 않은 문장. '선생님,  |
| 292 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 메모가 마지막이다. 그 아래 39번째에는 제 |
| 293 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 |
| 294 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로 |
| 295 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보 |
| 296 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화 |
| 297 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 |
| 298 | `night2_end_2_b` | {name} | room_my | 없음 |  |  | *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있 |
| 299 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.* |
| 300 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을  |
| 301 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 |
| | **Day 3** | | | | | | |
| 302 | `morning3_start` | {name} | school | 없음 |  |  | *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯 |
| 303 | `morning3_start_2` | {name} | school | 없음 |  |  | *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군 |
| 304 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 305 | `morning3_seo_gate_1` | {name} | school | seyoun_normal |  |  | *교문 앞의 서연은 지각 종이 울리기 직전인데도 발을  |
| 306 | `morning3_seo_gate_cold_1` | 서연 | school | seyoun_normal |  |  | *서연이 지나치다 명찰 쪽으로 눈만 돌린다.* |
| 307 | `morning3_seo_gate_cold_2` | 서연 | school | seyoun_normal |  |  | 전학생. 아직 다니고 있었구나. |
| 308 | `morning3_seo_gate_cold_3` | {name} | school | seyoun_normal |  |  | *평소처럼 이름도 부르지 않았다. 서연의 구두 소리만  |
| 309 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실에 들어서자 서연의 펜이 멈추고 다인의 의자가 뒤 |
| 310 | `morning3_react_seo_1` | 다인 | room_school | dain_normal |  |  | 야, 회장님이랑 같이 왔어? 아침부터? |
| 311 | `morning3_react_seo_2` | 유나 | room_school | yuna_bored |  |  | *창밖을 보던 유나가 유리창에 비친 {name}을 확인 |
| 312 | `morning3_date_intro` | {name} | room_school | 없음 |  |  | *1교시가 끝났다. 쉬는 시간마다 누군가 말을 건다.* |
| 313 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *쉬는 시간, 복도로 나왔다. 서연이 먼저 걸음을 맞춘 |
| 314 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | 이번 주말에 시간 있어? 공원에 같이 가자. |
| 315 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끈다. 눈이 마주치 |
| 316 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼  |
| 317 | `morning3_date_dain_2` | 다인 | room_school | dain_normal |  |  | *서연이 아직 교실 문 앞에 서 있다. 다인은 이쪽을  |
| 318 | `morning3_date_dain_choice` | 다인 | room_school | dain_normal |  |  | *서연의 발소리가 멎는다. 다인은 대답을 기다린다.* |
| 319 | `morning3_date_dain_accept` | {name} | room_school | dain_laugh |  |  | *다인과 주말 약속을 잡았다. 다인이 웃자 복도에서 서 |
| 320 | `morning3_date_dain_decline_narr` | 다인 | room_school | dain_laugh |  |  | *다인은 웃으며 자기 자리로 돌아간다. 종이 치기 직전 |
| 321 | `morning3_date_dain_decline_inner_2` | {name} | room_school | dain_laugh |  |  | *다인이 자리로 돌아간 뒤, 종이 치기 직전의 교실만  |
| 322 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다 |
| 323 | `morning3_date_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 접어 둔 쪽지를 꺼내려다 다시 책갈피 사이에  |
| 324 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 325 | `morning3_multi_from_dain` |  | room_school | 없음 |  |  |  |
| 326 | `morning3_end` | {name} | room_school | 없음 |  |  | *수업 종료 종이 울리고 곧 점심시간이 된다.* |
| 327 | `morning3_end_b` | 유나 | room_school | yuna_normal |  |  | 맛있네. |
| 328 | `lunch3_start` | {name} | room_school | yuna_normal |  |  | *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. |
| 329 | `lunch3_start_2_b` | 다인 | room_school | dain_normal |  |  | *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가 |
| 330 | `lunch3_meal_1` | 다인 | room_school | dain_laugh |  |  | 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고  |
| 331 | `lunch3_meal_2` | {name} | room_school | dain_laugh |  |  | 그건 내 거... |
| 332 | `lunch3_meal_3` | 서연 | room_school | seyoun_normal |  |  | 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점 |
| 333 | `lunch3_meal_4` | {name} | room_school | seyoun_normal |  |  | 점수 매기지 마. |
| 334 | `lunch3_meal_5` | 서연 | room_school | seyoun_normal |  |  | 10점 만점이야. 나쁜 거 아닌데? |
| 335 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다 |
| 336 | `lunch3_meal_7` | {name} | room_school | seyoun_normal |  |  | 유나, 그건 내가 제일 좋아하는 건데. |
| 337 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임 |
| 338 | `lunch3_meal_8` | {name} | room_school | yuna_bored |  |  | *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다. |
| 339 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. |
| 340 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓 |
| 341 | `lunch3_meal_10_d` | 다인 | room_school | dain_laugh |  |  | *"다 같이?" 다인은 웃지만 의자를 당기지 않는다.* |
| 342 | `lunch3_meal_11` | {name} | room_school | yuna_bored |  |  | *누구에게 줄까?* |
| 343 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *마지막 반찬을 누구에게 줄지 고민한다.* |
| 344 | `lunch3_give_dain_1` | 다인 | room_school | dain_laugh |  |  | 진짜? 고마워. {name}, 너 센스 있다. |
| 345 | `lunch3_dain_skin_check` |  | room_school | dain_laugh |  |  |  |
| 346 | `lunch3_give_dain_2` | 서연 | room_school | seyoun_pout |  |  | 참나. 내가 점수까지 매겨줬는데. |
| 347 | `lunch3_dain_witness_1` | {name} | school_hallway | yuna_sad |  |  | *유나가 복도에서 체육관 안을 본다. 다인의 웃음소리가 |
| 348 | `lunch3_dain_witness_2b` | {name} | room_school | yuna_sad |  |  | *교실로 돌아왔다.* |
| 349 | `lunch3_give_dain_3` | 유나 | room_school | yuna_sad |  |  | *유나는 빵 봉지 입구를 말아 쥔 채 창밖을 본다.* |
| 350 | `lunch3_end` | {name} | room_school | 없음 |  |  | *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다 |
| 351 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육 |
| 352 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다 |
| 353 | `after3_auto_dain` | {name} | school_hallway | 없음 |  | 🌅 | *다인과 약속이 있다. 체육관으로 간다.* |
| 354 | `after3_reject_for_dain_1` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *웃고 있다. 클립보드의 종이 모서리를 맞춘다.* |
| 355 | `after3_reject_for_dain_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 오늘은 할 일이 좀 있어서. 먼저 갈게. |
| 356 | `after3_reject_for_dain_2b` | {name} | yuna_hideout | 없음 |  | 🌅 | *유나의 아지트로 걸어간다.* |
| 357 | `after3_reject_for_dain_3` | {name} | library_old | yuna_normal | 0.35 | 🌅 | *도서관에 쪽지가 없다. 유나의 가방도 없다. 자리에  |
| 358 | `after3_reject_for_dain_3b` | {name} | school_hallway | 없음 |  | 🌅 | *복도로 돌아왔다. 바닥에 유나가 두고 간 물 자국이  |
| 359 | `after3_dain_1` | {name} | gym | dain_sweat |  | 🌅 | *체육관에서 다인이 혼자 스트레칭 중이다. 가볍게 뛰어 |
| 360 | `after3_dain_3` | {name} | dain_hurt_event1 | 없음 |  | 🌅 | 다인! |
| 361 | `after3_dain_4` | 다인 | gym | dain_sweat |  | 🌅 | 괜찮아. 그냥 좀 삐끗한 거야. |
| 362 | `after3_dain_5` | {name} | gym | dain_sweat |  | 🌅 | 괜찮아 보이진 않는데. |
| 363 | `after3_dain_5_b` | 다인 | gym | dain_sweat |  | 🌅 | 진짜 괜찮아. 별거 아니야. |
| 364 | `after3_dain_6` | 다인 | gym | dain_sad |  | 🌅 | *말을 마친 뒤에야 다인이 크게 웃는다.* |
| 365 | `after3_dain_choice` | 다인 | gym | dain_sad |  | 🌅 | *다인이 벤치에 앉아 무릎 한곳만 계속 문지른다.* |
| 366 | `after3_dain_correct_1` | 다인 | gym | dain_sad |  | 🌅 | *다인은 무릎을 감싸던 손을 떼지도 못한 채 나를 본다 |
| 367 | `after3_dain_correct_2` | 다인 | gym | dain_normal |  | 🌅 | 야. |
| 368 | `after3_dain_correct_3` | {name} | gym | dain_normal |  | 🌅 | 왜. |
| 369 | `after3_dain_correct_4` | 다인 | gym | dain_shy |  | 🌅 | 너 좀 이상해. |
| 370 | `after3_dain_correct_5` | {name} | gym | dain_shy |  | 🌅 | 이상한 게 좋은 거야 나쁜 거야. |
| 371 | `after3_dain_correct_6` | 다인 | gym | dain_shy |  | 🌅 | 몰라. 근데 잠깐만 여기 있어. 지금 혼자 있기는 좀  |
| 372 | `after3_dain_correct_7` | 다인 | gym | dain_sad |  | 🌅 | *벤치 안쪽으로 자리를 내준다. 배구공은 발끝으로 밀어 |
| 373 | `after3_dain_correct_8` | 다인 | gym | dain_laugh |  | 🌅 | 그냥 얘기나 하자. |
| 374 | `after3_dain_correct_9` | {name} | gym | 없음 |  | 🌅 | *옆에 앉자 다인은 배구공을 발끝으로 코트 경계선까지  |
| 375 | `after3_dain_correct_10` | 다인 | gym | dain_laugh |  | 🌅 | 나 원래 이런 얘기 잘 안 하거든. 뭐부터 말해야 하지 |
| 376 | `after3_dain_correct_11` | 다인 | gym | dain_sweat |  | 🌅 | *다인은 오른쪽 다리를 펴다가 얼굴을 찡그리고 다시 굽 |
| 377 | `after3_dain_correct_12` | {name} | gym | dain_sad |  | 🌅 | 무릎 얘기부터 하자. |
| 378 | `after3_dain_dilemma_tell` | 다인 | gym | dain_normal |  | 🌅 | 뭐? |
| 379 | `after3_dain_dilemma_tell_2` | {name} | gym | dain_sad |  | 🌅 | 무릎. 아까부터 계속 문지르잖아. 이건 오늘 삐끗한 게 |
| 380 | `after3_dain_dilemma_tell_3` | {name} | gym | dain_sad |  | 🌅 | *다인은 입을 다물고 무릎 위 손가락만 접었다 편다.* |
| 381 | `after3_dain_dilemma_tell_4` | 다인 | gym | dain_sad |  | 🌅 | 알면서 왜 말해. 다음 주 대회인 거 알잖아. |
| 382 | `after3_dain_dilemma_tell_5` | {name} | gym | dain_sad |  | 🌅 | 대회보다 네 무릎이 더 중요해. |
| 383 | `after3_dain_dilemma_tell_6` | 다인 | gym | dain_angry |  | 🌅 | 그건 네가 정하는 게 아니야. |
| 384 | `after3_dain_dilemma_tell_7` | 다인 | gym | dain_angry |  | 🌅 | *다인이 일어나 신발끈을 묶으려 몸을 숙이자 무릎에서  |
| 385 | `after3_dain_dilemma_tell_8` | 다인 | gym | dain_sad |  | 🌅 | 제발. 이것만은 아무한테도 말하지 마. |
| 386 | `after3_dain_dilemma_final` | 다인 | gym | dain_sad |  | 🌅 | *다인은 젖은 눈가를 닦지 않는다. 마지막 말 뒤에 늘 |
| 387 | `after3_dain_tell_retreat` | 다인 | gym | dain_sad |  | 🌅 | *다인은 숨을 길게 뱉고 발끝으로 굴러온 공을 세운다. |
| 388 | `after3_dain_choice1` | {name} | gym | dain_sad |  | 🌅 | *대답을 재촉하지 않고 옆에 앉는다. 다인은 운동화 끈 |
| 389 | `after3_dain_choice1_2` | 다인 | gym | dain_sad |  | 🌅 | 왜 안 물어봐? |
| 390 | `after3_dain_choice1_3` | {name} | gym | dain_shy |  | 🌅 | 네가 준비되면 먼저 말한다고 했잖아. |
| 391 | `after3_dain_choice1_react` | 다인 | gym | dain_shy |  | 🌅 | *다인은 입술을 깨물다 웃음을 흘리고 손등으로 눈가를  |
| 392 | `after3_dain_choice1_react2` | 다인 | gym | dain_shy |  | 🌅 | 맞아. 지금 물었으면 또 괜찮다고 했을 거야. |
| 393 | `after3_dain_choice1_react3` | 다인 | gym | dain_shy |  | 🌅 | 고마워. 보건실 갈 때... 옆에 있어 줘. |
| 394 | `after3_dain_freetalk` | 다인 | gym | dain_normal |  | 🌅 | *다인은 손목 보호대를 고쳐 매다 입꼬리가 반 박자 늦 |
| 395 | `after3_dain_end_check` | 다인 | gym | dain_normal |  | 🌅 | *주먹으로 어깨를 가볍게 친다.* |
| 396 | `after3_dain_end` | 다인 | gym | dain_shy |  | 🌅 | *다인의 주먹이 어깨에 닿지만 어제처럼 몸이 밀리지는  |
| 397 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.* |
| 398 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 399 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 400 | `minsu_d3_check` | {name} | school | 없음 |  | 🌅 |  |
| 401 | `minsu_d3_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문 앞에 민수가 서 있다.* |
| 402 | `minsu_d3_2` | 민수 | school | 없음 |  | 🌅 | 봤다. |
| 403 | `minsu_d3_3` | 민수 | school | 없음 |  | 🌅 | 점심때. 그리고 방금 서연 표정도. |
| 404 | `minsu_d3_4` | 민수 | school | 없음 |  | 🌅 | 어제 내가 뭐랬냐. 나중에 셋 다 울면 네 탓이라고 했 |
| 405 | `minsu_d3_5` | 민수 | school | 없음 |  | 🌅 | 옆에서 보기 좀 힘들다. 걔들 다 좋은 애들이야. 네가 |
| 406 | `minsu_d3_5b` | 민수 | school | 없음 |  | 🌅 | *민수는 빨대 포장지를 끝까지 접어 테이블 위에 내려놓 |
| 407 | `minsu_d3_6` | {name} | school | 없음 |  | 🌅 | 맞아. |
| 408 | `minsu_d3_6b` | 민수 | school | 없음 |  | 🌅 | 전 학교에서 뭔 일 있었는지 안 물어볼게. 근데 하나만 |
| 409 | `minsu_d3_7` | 민수 | school | 없음 |  | 🌅 | 거절도 배려야. 안 되는 관계에 계속 여지 주는 것보다 |
| 410 | `minsu_d3_8` | {name} | school | 없음 |  | 🌅 | *거절도 배려다. 전 학교에서 나는 소정이에게 고백할  |
| 411 | `minsu_d3_9` | 민수 | school | 없음 |  | 🌅 | *민수는 더 말하지 않고 끝까지 접은 빨대 포장지를 내 |
| 412 | `minsu_d3_10` | 민수 | school | 없음 |  | 🌅 | 내일 학교에서 보자. 진지하게 생각해. |
| 413 | `night3_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 가방을 의자에 걸어 둔다.* |
| 414 | `night3_start_2` | {name} | room_my | 없음 |  |  | *책상 위에 엎어 둔 핸드폰 화면을 켠다.* |
| 415 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *읽지 않은 메시지가 떠 있다.* |
| 416 | `night3_faithful_msg_dain_1` | 다인 | room_my | dain_normal | 0.35 |  | 발목 괜찮냐고 물어볼 거면 직접 와서 물어봐ㅋㅋ |
| 417 | `night3_faithful_msg_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | 아 근데 고마워 |
| 418 | `night3_faithful_msg_dain_3` | {name} | room_my | dain_normal | 0.35 |  | *'ㅋㅋ'와 다음 문장 사이가 비어 있다. 다인의 새  |
| 419 | `night3_dream_1` | {name} | school | 없음 |  |  | *꿈속에서 누군가와 나란히 걷는다. 얼굴은 보이지 않고 |
| 420 | `night3_dream_2_b` | {name} | school | 없음 |  |  | *메모장을 닫았다. 내일 보낼 문장은 아직 없다.* |
| 421 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *커튼 사이로 들어온 아침 햇살에 눈을 뜬다. 핸드폰  |
| 422 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *'삭제하시겠습니까?' 확인 창이 뜬다. 손가락이 버튼 |
| 423 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *1초 동안 화면을 내려다본다. 소정이 책상의 낙서와  |
| 424 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *그래. 삭제 버튼에 올린 손가락으로 화면을 누른다.* |
| 425 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼을 누르지 않고 사진을 새 폴더로 옮긴다.  |
| 426 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *'거절도 네가 해야 할 일이야.' 민수의 말이 떠오른 |
| 427 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *갤러리에서 소정이 사진이 사라지고 빈칸만 남는다.* |
| 428 | `night3_faithful_reflect_4_b` | {name} | room_my | 없음 |  |  | *빈 앨범 썸네일 위를 엄지로 문지른다.* |
| 429 | `night3_faithful_reflect_4_c` | {name} | room_my | 없음 |  |  | *핸드폰을 덮자 검은 화면에 갤러리의 빈칸이 겹쳐 보인 |
| 430 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *알람이 울리기 전에 눈을 떴다.* |
| 431 | `night3_dream_dain_bonus` | {name} | room_my | 없음 |  |  | *눈을 감자 체육관 바닥에 공 튀는 소리가 떠오른다.* |
| 432 | `night3_end` | {name} | room_my | 없음 |  |  | *방 불을 끄고 핸드폰을 엎어 둔다.* |
| | **Day 4** | | | | | | |
| 433 | `morning4_start` | {name} | room_my | 없음 |  |  | *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다 |
| 434 | `morning4_nightmare_check` |  | room_my | 없음 |  |  |  |
| 435 | `minsu_cheer_1` | {name} | room_my | 없음 |  |  | *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.* |
| 436 | `minsu_cheer_1_b` | 민수 | room_my | minsu_normal | 0.35 |  | *야 오늘 데이트라며?* |
| 437 | `minsu_cheer_1_c` | {name} | room_my | minsu_normal | 0.35 |  | *어떻게 알았어* |
| 438 | `minsu_cheer_1_d` | 민수 | room_my | minsu_normal | 0.35 |  | *다인이가 단톡방에 올림. 내일 약속 있음, 이라고* |
| 439 | `minsu_cheer_2` | 민수 | room_my | minsu_normal | 0.35 |  | 잘하고 와ㅋㅋ |
| 440 | `minsu_cheer_3` | {name} | room_my | minsu_normal | 0.35 |  | 알아. |
| 441 | `minsu_cheer_4_branch` |  | room_my | 없음 |  |  |  |
| 442 | `minsu_cheer_4_ins_single` | {name} | room_my | minsu_normal | 0.35 |  | *핸드폰 캘린더를 본다. 오늘 약속은 하나뿐이다.* |
| 443 | `morning4_start_2` | {name} | room_my | 없음 |  |  | *심호흡하고 약속 메시지를 다시 확인한다.* |
| 444 | `morning4_dain_msg_1` | 다인 | room_my | dain_sweat | 0.35 |  | 오늘이다. 체육관 앞 저녁 6시. 아, 왜 이렇게 떨리 |
| 445 | `morning4_hidden_check` | {name} | room_my | 없음 |  |  | *주말 아침, 학교 앞 사거리에서 신호를 기다린다.* |
| 446 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 447 | `morning4_end` | {name} | room_my | 없음 |  |  | *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 |
| 448 | `date_dain_1` | {name} | gym | dain_laugh |  |  | *체육관 앞. 다인이 뛰어온다. 캡모자에 운동복.* |
| 449 | `date_dain_2` | 다인 | gym | dain_laugh |  |  | 왔다. 늦을 뻔했지? |
| 450 | `date_dain_3` | {name} | gym | dain_laugh |  |  | 10분 일찍 왔는데. |
| 451 | `date_dain_4` | 다인 | gym | dain_normal |  |  | 나는 20분 전에 왔거든. |
| 452 | `date_dain_compliment_choice` | {name} | gym | dain_normal |  |  | *다인이 모자챙을 한 번 눌러 쓰고 기다린다.* |
| 453 | `date_dain_pretty_low` | 다인 | gym | dain_shy |  |  | 뭐야, 갑자기. ...고맙긴 한데. |
| 454 | `date_dain_to_arcade` | {name} | arcade | dain_laugh |  |  | *오락실로 향했다.* |
| 455 | `date_dain_arcade` | {name} | arcade | dain_normal |  |  | *리듬게임 기계 앞에 선다. 화면이 깜빡인다.* |
| 456 | `date_dain_arcade_2` | 다인 | arcade | dain_normal |  |  | 자, 내기다. 진 사람이 음료수. |
| 457 | `date_dain_arcade_2_b` | {name} | arcade | dain_normal |  |  | 또 내기? |
| 458 | `date_dain_arcade_3` | 다인 | arcade | dain_normal |  |  | 내기 없으면 재미없잖아. |
| 459 | `date_dain_arcade_3_b` | {name} | arcade | dain_normal |  |  | *리듬게임이 시작되자 다인의 손이 먼저 박자를 잡는다. |
| 460 | `date_dain_arcade_3_c` | 다인 | arcade | dain_normal |  |  | *자리에서 벌떡 일어난다.* 풀콤보. 봤어? |
| 461 | `date_dain_rhythm` | 다인 | arcade | dain_laugh |  |  | *화면의 점수를 가리킨다.* 이 스코어, 역대 2등이야 |
| 462 | `date_dain_rhythm_2` | {name} | arcade | dain_normal |  |  | 대단해. |
| 463 | `date_dain_rhythm_3` | 다인 | arcade | dain_laugh |  |  | 당연하지. 이건 무릎 안 써도 되니까. |
| 464 | `date_dain_knee` | {name} | arcade | dain_laugh |  |  | *'무릎 안 써도 되니까.' 다인은 말끝에 웃고는 쇼윈 |
| 465 | `date_dain_knee_2` | {name} | street | dain_sweat |  |  | *오락실을 나와 스포츠용품점 앞을 지난다. 다인이 배구 |
| 466 | `date_dain_shop` | 다인 | street | dain_normal |  |  | *쇼윈도 안 배구화의 끈을 눈으로 따라간다. 모자챙 아 |
| 467 | `date_dain_shop_2` | {name} | street | dain_normal |  |  | 다인? |
| 468 | `date_dain_shop_2_b` | 다인 | street | dain_normal |  |  | *진열대 반대쪽으로 턱을 돌린다.* 아무것도 아냐! 가 |
| 469 | `date_dain_shop_3` | 다인 | street | dain_laugh |  |  | *두 손을 주머니에 찔러 넣고 앞서 걷는다.* 쳐다보지 |
| 470 | `date_dain_shop_3_b` | 다인 | street | dain_normal |  |  | *보폭을 더 넓힌다.* 한 번만 더 물으면 진짜 먼저  |
| 471 | `date_dain_end` | {name} | street | dain_sweat |  |  | *다인은 웃지만 캡모자 아래 시선은 여전히 쇼윈도에 머 |
| 472 | `date_dain_end_b` | 다인 | street | dain_normal |  |  | 야. |
| 473 | `date_dain_end_c` | 다인 | street | dain_sweat |  |  | 오늘 재밌었어. ...그냥 하는 말 아니야. |
| 474 | `pre_confess_minsu` | 민수 | street | minsu_smirk | 0.35 |  | 야, 데이트 중이지? 한마디만 할게 |
| 475 | `pre_confess_minsu_2` | 민수 | street | minsu_smirk | 0.35 |  | 말 돌리지 말고 제대로 해 |
| 476 | `pre_confess_callback` | {name} | street | minsu_smirk |  |  | *주머니 속 핸드폰 모서리가 손바닥에 눌린다. 알림은  |
| 477 | `confess_seo_1` | {name} | top_school | 없음 |  | 🌅 | *데이트가 끝났다. 교문 대신 옥상으로 올라왔다.* |
| 478 | `confess_dain_1` | {name} | gym | dain_laugh |  | 🌅 | *데이트가 끝나자 다인이 학교 쪽으로 성큼 앞서간다.* |
| 479 | `confess_dain_2` | 다인 | gym | dain_normal |  | 🌅 | 마지막. 한 군데만 더 가자. |
| 480 | `confess_dain_3` | {name} | gym | dain_normal |  | 🌅 | *빈 체육관. 서쪽 창문의 빛이 첫날 내기했던 코트 선 |
| 481 | `confess_dain_4` | 다인 | gym | dain_normal |  | 🌅 | *공 하나를 두 손으로 쥔다. 손가락 마디가 공 표면에 |
| 482 | `confess_dain_5` | {name} | gym | dain_normal |  | 🌅 | *공이 바닥에 한 번 튄다.* |
| 483 | `confess_dain_choice` | 다인 | gym | dain_sweat |  | 🌅 | *공이 바닥에 한 번 튄다. 다인의 손이 반 박자 늦어 |
| 484 | `confess_dain_yes_1` | {name} | gym | dain_normal |  | 🌅 | *첫 음절이 빈 체육관 벽에 낮게 돌아온다.* |
| 485 | `confess_dain_yes_2` | {name} | gym | dain_normal |  | 🌅 | *짧은 숨을 고르고 다시 입을 연다.* |
| 486 | `confess_dain_yes_3` | {name} | gym | dain_normal |  | 🌅 | 다인아. 나 — 너한테 할 말이 있어. |
| 487 | `confess_dain_yes_3_b` | {name} | gym | dain_normal |  | 🌅 | 오늘만 말고 다음에도 계속 만나고 싶어. |
| 488 | `confess_dain_yes_4` | {name} | gym | dain_normal |  | 🌅 | *다인이 공을 내려놓는다.* |
| 489 | `confess_dain_yes_5` | {name} | gym | dain_normal |  | 🌅 | 지금 당장 답하라는 건 아니야. |
| 490 | `confess_dain_yes_6` | {name} | gym | dain_laugh |  | 🌅 | 그냥 말해두고 싶었어. |
| 491 | `confess_dain_yes_7` | {name} | gym | dain_shy |  | 🌅 | *체육관 조명이 낮게 웅웅거린다.* |
| 492 | `confess_dain_yes_8` | 다인 | gym | dain_shy |  | 🌅 | *다인의 운동화가 코트 선 위에 나란히 붙는다. 두 손 |
| 493 | `confess_dain_yes_8_b` | {name} | gym | dain_shy |  | 🌅 | *배구공이 발끝에 툭 닿아 옆으로 굴러가도 다인은 쫓지 |
| 494 | `confess_dain_yes_9` | 다인 | gym | dain_shy |  | 🌅 | 잠깐. 나 지금 말 정리가 안 돼. |
| 495 | `confess_dain_yes_9_b` | {name} | gym | dain_shy |  | 🌅 | *다인이 손등으로 눈가를 거칠게 문지른다. 입꼬리는 올 |
| 496 | `confess_dain_yes_10` | 다인 | gym | dain_shy |  | 🌅 | 내일도 와. |
| 497 | `confess_dain_yes_10_b` | 다인 | gym | dain_laugh |  | 🌅 | *공을 다시 끌어안는다. 손등에 힘이 들어간다.* |
| 498 | `day4_night_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 옷소매에 공원 흙과 학교 먼지가 조금 |
| 499 | `day4_night_branch` | 시스템 | room_my | 없음 |  |  |  |
| 500 | `day4_student_night_branch` |  | room_my | 없음 |  |  |  |
| 501 | `wall_dain_1` | {name} | room_my | 없음 |  |  | *밤 10시. 다인에게서 메시지.* |
| 502 | `wall_dain_pre_low_1` | 다인 | room_my | dain_sweat | 0.35 |  | *웃는다. 손은 무릎 보호대를 꽉 누르고 있다.* |
| 503 | `wall_dain_pre_low_2` | 다인 | room_my | dain_normal | 0.35 |  | 하하, 오늘 재밌었지! |
| 504 | `wall_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | 야, 지금 시간 돼? |
| 505 | `wall_dain_2_b` | 다인 | room_my | dain_normal | 0.35 |  | *학교 오면 안 되지?* |
| 506 | `wall_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | 그냥 와. 체육관 뒷문 열어놨어. |
| 507 | `wall_dain_4` | {name} | gym | dain_laugh |  |  | *비상등만 켜진 체육관. 다인은 혼자 배구공을 튀긴다. |
| 508 | `wall_dain_5` | 다인 | gym | dain_laugh |  |  | 왔어? 늦었잖아. |
| 509 | `wall_dain_6` | {name} | gym | dain_laugh |  |  | 밤에 학교에 왜 있어? |
| 510 | `wall_dain_7` | 다인 | gym | dain_laugh |  |  | 가끔 몰래 들어와. 연습하려고. |
| 511 | `wall_dain_7_b` | 다인 | gym | dain_laugh |  |  | *배구공을 내민다.* |
| 512 | `wall_dain_8` | 다인 | gym | dain_laugh |  |  | 토스 올려줘. 한 번만. |
| 513 | `wall_dain_8_b` | {name} | gym | dain_laugh |  |  | *공을 든 손이 허리 아래에 머문 사이, 다인이 한 발 |
| 514 | `wall_dain_9` | {name} | gym | dain_sad |  |  | *체육관 바닥에 공이 굴러간다.* |
| 515 | `wall_dain_10` | 다인 | gym | dain_sad |  |  | 아, 아냐. 괜찮아. 그냥 삐끗한 거야. 별거 아... |
| 516 | `wall_dain_11` | {name} | gym | dain_sweat |  |  | *무릎을 잡은 손이 하얗게 질려 있다.* |
| 517 | `wall_dain_12` | {name} | gym | dain_sad |  |  | 다인. 괜찮지 않잖아. |
| 518 | `wall_dain_12_b` | 다인 | gym | dain_sad |  |  | 괜찮아. 진짜로. |
| 519 | `wall_dain_12_c` | {name} | gym | dain_normal |  |  | *바닥을 구르던 공이 벽에 닿아 낮은 소리를 낸다.* |
| 520 | `wall_dain_13` | {name} | gym | dain_sad |  |  | *아무 말 없이 옆에 앉는다. 다인이 입을 다물자 체육 |
| 521 | `wall_dain_14` | 다인 | gym | dain_sad |  |  | ...전방 십자인대. |
| 522 | `wall_dain_14_b` | 다인 | gym | dain_sad |  |  | *배구공을 보지 않는다.* |
| 523 | `wall_dain_15` | 다인 | gym | dain_sad |  |  | 작년 여름이야. |
| 524 | `wall_dain_16` | 다인 | gym | dain_sad |  |  | *입꼬리가 내려간다. 시선은 코트 바닥의 흰 선에 머문 |
| 525 | `wall_dain_16_b` | 다인 | gym | dain_sad |  |  | 수술했는데 담당 의료진이 — 되게 조심스럽게 말하더라. |
| 526 | `wall_dain_17` | 다인 | gym | dain_sad |  |  | 수술 끝나고 의사 선생님이 종이에 선을 그어줬어. '일 |
| 527 | `wall_dain_18` | 다인 | gym | dain_sad |  |  | 병원에서 나오는데 엄마가 울고 있었어. — 나는 못 울 |
| 528 | `wall_dain_18_b` | 다인 | gym | dain_sad |  |  | 실감난 건 — 체육관 사물함 정리할 때였어. |
| 529 | `wall_dain_18_c` | {name} | gym | dain_sad |  |  | *체육관 비상등이 한 번 깜빡인다. 다인의 손톱이 공  |
| 530 | `wall_dain_18_d` | 다인 | gym | dain_sad |  |  | *공 표면의 홈을 엄지로 문지른다.* 그래서. |
| 531 | `wall_dain_19` | 다인 | gym | dain_sad |  |  | 아무한테도 말 안 했어. 부모님한테도. '다인이가 안  |
| 532 | `wall_dain_19_b` | 다인 | gym | dain_sad |  |  | *유니폼 앞자락을 꽉 쥔다.* |
| 533 | `wall_dain_20` | 다인 | gym | dain_sad |  |  | 학교에서 '에너지 넘치네!' 소리 들을 때마다 가슴팍부 |
| 534 | `wall_dain_20_b` | 다인 | gym | dain_sad |  |  | 숨을 쉬어도 끝까지 안 들어왔어. |
| 535 | `wall_dain_21` | 다인 | gym | dain_sad |  |  | 오늘도 그랬어. 데이트하면서 뛰어다니고 네 옆에서 밝은 |
| 536 | `wall_dain_22` | 다인 | gym | dain_sad |  |  | 근데 네 앞에서까지 아픈 모습 보이면, 나한테 남는 게 |
| 537 | `wall_dain_22_b` | {name} | gym | dain_sad |  |  | *다인 옆 코트 선 바깥에 앉는다. 바닥에 놓인 배구공 |
| 538 | `wall_dain_choice` | 다인 | gym | dain_sad |  |  | *배구공 고무가 가슴팍에 눌려 찌그러진다. 어깨가 짧게 |
| 539 | `wall_dain_cry_1` | 다인 | dain_depression_event1 | 없음 |  |  | *코트 위에 주저앉았다. 배구공을 껴안고 울기 시작했다 |
| 540 | `wall_dain_cry_2` | 다인 | gym | dain_sad |  |  | *배구공 위로 몸을 접는다. 공의 고무 표면에 물방울이 |
| 541 | `wall_dain_cry_3` | 다인 | gym | dain_sad |  |  | 혼자서 매일 아침 무릎에 붕대 감았어. |
| 542 | `wall_dain_cry_4` | 다인 | gym | dain_sad |  |  | 핸드폰 알람에도 적어놨어. '오늘도 웃어.' |
| 543 | `wall_dain_cry_5` | 다인 | gym | dain_sad |  |  | 그거 보고 거울 앞에서 입꼬리부터 올렸어. 매일. |
| 544 | `wall_dain_cry_6` | 다인 | gym | dain_sad |  |  | *알람 제목 '오늘도 웃어'를 지운다. 빈칸에 '엄마한 |
| 545 | `wall_dain_farewell_1` | 다인 | gym | dain_sad |  |  | *{name}이 공을 보관함에 넣는 동안, 벤치를 짚고 |
| 546 | `wall_dain_farewell_2` | {name} | school_back | dain_normal |  |  | *다인과 체육관을 나온다. 학교 후문 쪽을 지나가는데. |
| 547 | `wall_dain_mention_1` | 다인 | school_back | dain_sad |  |  | 서연이가 나한테 뭐라 그랬는지 알아? 아무 말도 안 했 |
| 548 | `wall_dain_mention_2` | 다인 | school_back | dain_sad |  |  | 말이라도 해주면 싸울 수 있는데. 아무 말도 안 하면  |
| 549 | `wall_dain_mention_3` | 다인 | school_back | dain_normal |  |  | *한 걸음이 끊긴다. 다시 걸을 때는 보폭을 줄여 {n |
| 550 | `wall_dain_skin_check` |  | school_back | dain_normal |  |  |  |
| 551 | `wall_dain_freetalk` | 다인 | school_back | dain_normal |  | 🌙 | *숨을 길게 내쉬고 {name} 곁에 보폭을 맞춘다.* |
| 552 | `wall_dain_rival_rank` | 시스템 | school_back | 없음 |  |  |  |
| 553 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 554 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *알람을 일요일 오전으로 맞추고 방 불을 끈다. 전하지 |
| 555 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안 시계가 자정 쪽으로 넘어간다. 휴대폰 화면도  |
| | **Day 5** | | | | | | |
| 556 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소 |
| 557 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 558 | `morning5_temptation_discovery_branch` |  | room_school | 없음 |  |  |  |
| 559 | `morning5_committed_start` |  | room_school | 없음 |  |  |  |
| 560 | `morning5_committed_dain` | {name} | room_school | dain_normal |  |  | *다인이 체육관 쪽에서 손목 보호대를 고쳐 맨다. 서연 |
| 561 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *행사 준비 시간. 복도를 걷는데 — 빈 교실 앞을 지 |
| 562 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *행사 중간 쉬는 시간. 보건실 앞을 지나간다.* |
| 563 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 564 | `morning5_committed_end` | {name} | room_school | 없음 |  |  | *책상 위 쪽지들을 정리하고 이미 고른 방향의 행사 순 |
| 565 | `tour_dain_1_check` | {name} | gym | 없음 |  |  | *체육관으로 간다.* |
| 566 | `tour_dain_1` | {name} | gym | 없음 |  |  | *체육관. 첫 내기를 했던 라인 옆에 어젯밤 정리한 공 |
| 567 | `tour_dain_2` | 다인 | gym | dain_normal |  |  | *다인은 배구공 하나를 옆구리에 낀 채 코트 한가운데  |
| 568 | `tour_dain_3` | 다인 | gym | dain_laugh |  |  | 야, 마지막 가위바위보 할래? |
| 569 | `tour_dain_4` | {name} | gym | dain_normal |  |  | 또 질 거면서. |
| 570 | `tour_dain_5` | 다인 | gym | dain_laugh |  |  | 이번엔 이긴다. |
| 571 | `tour_dain_6` | {name} | gym | dain_normal |  |  | *가위바위보. — 다인이 졌다.* |
| 572 | `tour_dain_7` | 다인 | gym | dain_laugh |  |  | 왜 또 졌지. |
| 573 | `tour_dain_8` | {name} | gym | dain_normal |  |  | *다인은 미간을 찌푸린 채 입꼬리를 누르지 못한다. 한 |
| 574 | `tour_dain_10` | 다인 | gym | dain_sad |  |  | 프로는 아직 모르겠지만. |
| 575 | `tour_dain_11` | {name} | gym | dain_sad |  |  | *공이 코트 선을 따라 굴러간다. 다인이 다음 말을 꺼 |
| 576 | `tour_dain_11_b` | 다인 | gym | dain_normal |  |  | 예전엔 배구가 빠지면 나도 텅 비는 줄 알았거든. 근데 |
| 577 | `tour_dain_12` | 다인 | gym | dain_sad |  |  | 뭐가 달라졌는지는 몰라. 근데 코트 밖에서도 할 말이  |
| 578 | `tour_dain_13` | {name} | gym | dain_normal |  |  | 뭐가 달라진 건데? |
| 579 | `tour_dain_end` | 다인 | gym | dain_shy |  |  | 혼자 있지는 않잖아. |
| 580 | `tour_dain_freetalk` | 다인 | gym | dain_normal |  |  | *굴러온 배구공을 운동화 밑으로 눌러 세운다.* 마지막 |
| 581 | `tour_dain_end_2` | {name} | gym | dain_shy |  |  | *다인은 무릎 대신 배구공 표면을 손바닥으로 굴린다.* |
| 582 | `after5_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 583 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *행사가 끝나갈 무렵, 복도에서 선택하지 않은 두 사람 |
| 584 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 585 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다.* |
| 586 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다. 서연은 잠시 멈췄다가 고개 |
| 587 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 588 | `after5_farewell_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나가 다가온다. 아무 말 없이 책 한 |
| 589 | `after5_farewell_yuna_low` | 유나 | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나와 눈이 마주친다. 유나는 들고 있 |
| 590 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 591 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *석양이 교정 창문마다 걸린다. 방송실에서 행사 종료  |
| 592 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 593 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 594 | `ending_affinity_check` | 시스템 | park | 없음 |  |  |  |
| 595 | `ending_aff_check_dain` | 시스템 | gym | 없음 |  |  |  |
| 596 | `true_dain_1` | {name} | gym | 없음 |  |  | *행사가 끝난 체육관. 벽에 기대 나란히 앉아 있다.  |
| 597 | `true_dain_2` | 다인 | gym | dain_shy |  |  | *휴대폰을 {name} 쪽으로 내민다.* |
| 598 | `true_dain_2b` | {name} | gym | dain_shy |  |  | *월요일 오후 4시 30분, 재활 진료 예약 완료.* |
| 599 | `true_dain_3` | 다인 | gym | dain_normal |  |  | 코치랑 부모님한테도 말했어. 엄청 혼났는데... 그래도 |
| 600 | `true_dain_4` | {name} | gym | dain_normal |  |  | *예약 화면 아래에 스포츠 방송 동아리 지원서가 함께  |
| 601 | `true_dain_5` | {name} | gym | dain_shy |  |  | 둘 다 해볼 거야? |
| 602 | `true_dain_6` | 다인 | gym | dain_shy |  |  | 몰라. 둘 다 해보고 내가 더 재밌는 쪽 고를래. |
| 603 | `true_dain_7` | {name} | gym | dain_laugh |  |  | 그럼 첫 방송은 내가 볼게. |
| 604 | `true_dain_8` | 다인 | gym | dain_laugh |  |  | 말 바꾸기 없기야. 재미없어도 끝까지 봐. |
| 605 | `true_dain_8b` | 다인 | gym | dain_laugh |  |  | *배구공을 품에 안은 채 새끼손가락을 내민다.* |
| 606 | `true_dain_bridge` | {name} | ending_true_dain | 없음 |  |  | *약속을 확인한 뒤 다인이 묻는다. "잠깐 기대도 돼? |
| 607 | `true_epilogue_1_dain` | {name} | ending_true_dain | 없음 |  |  | *다인은 그날 처음으로 '괜찮아' 대신 다음 진료 날짜 |
| 608 | `date_choice_true_dain` | 다인 | gym | dain_laugh |  |  | *체육관 벤치에 앉은 다인이 옆자리를 두드린다.* 나랑 |
| 609 | `date_true_dain_alt_1` | 다인 | dain_broadcast_booth | dain_laugh |  |  | 스위치만 만져 볼게. 켜지는 않을 거야. |
| 610 | `date_true_dain_alt_2` | {name} | dain_broadcast_booth | dain_laugh |  |  | *다인이 헤드셋을 벗어 테이블 위에 거꾸로 내려놓는다. |
| 611 | `true_epilogue_2` | {name} | school | 없음 |  |  | *졸업식 날, 교복은 뻣뻣했다. 벚꽃은 코만 자극했다. |
| 612 | `true_epilogue_3` | {name} | school | 없음 |  |  | *달력에는 5칸만 지나 있었다.* |
| 613 | `true_epilogue_4` |  | 없음 | 없음 |  |  |  |
| 614 | `true_epilogue_4_dain` | {name} | park | 없음 |  |  | *다인의 아침 알람은 '웃어' 대신 재활 스트레칭 시간 |
| 615 | `true_epilogue_7` | 시스템 | park | 없음 |  |  | ─── TRUE LOVE END ─── |
| 616 | `day5_main_ending_freetalk_router` | {name} | park | 없음 |  |  |  |
| 617 | `day5_dain_ending_freetalk_intro` | {name} | gym | dain_laugh |  |  | *마지막 장면이 지나고 익숙한 체육관에 공 튀는 소리만 |
| 618 | `day5_dain_ending_freetalk_router` | {name} | gym | 없음 |  |  |  |
| 619 | `day5_dain_ending_freetalk_true_love` | 다인 | gym | dain_shy |  | 🌙 | *재활 예약 화면과 방송 동아리 지원서를 번갈아 보여  |
| 620 | `day5_credits` |  | school | 없음 |  |  |  |
| 621 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### day5_seo_ending_freetalk_bittersweet

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_seo_choice`: (선택)
- `after1_jealousy_seo_choice`: (선택)
- `after_end`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_seo_choice`: (선택)
- `after2_choice`: (선택)
- `after2_seo_choice1`: (선택)
- `after2_seo_choice2`: (선택)
- `night2_choice`: (선택)
- `morning3_date_seo_choice`: (선택)
- `lunch3_choice`: (선택)
- `after3_choice`: (선택)
- `after3_seo_choice`: (선택)
- `date_seo_compliment_choice`: (선택)
- `confess_seo_choice`: (선택)
- `wall_seo_hug_choice`: (선택)
- `wall_seo_line_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=39 유나=-8 다인=-4 담임=0 보건=0

<details>
<summary>씬 타임라인 (563씬)</summary>

| # | 씬 ID | 화자 | 배경 | 캐릭터 | OP | 밤 | 대사 (앞 30자) |
|---|--------|------|------|--------|----|----|----------------|
| | **Day 1** | | | | | | |
| 1 | `start` | {name} | school | 없음 |  |  | *4월의 교문 앞. 밟힌 꽃잎이 드문드문 붙어 있다.  |
| 2 | `start_3` | {name} | school | 없음 |  |  | *주머니에서 핸드폰이 울리고 예전 학교 단체 카톡방에  |
| 3 | `name_input_scene` | 시스템 | school | 없음 |  |  | 전학생, 당신의 이름은? |
| 4 | `gate_1` | {name} | school | 없음 |  |  | *낯선 교문 앞, 내 교복만 아직 접힌 선이 선명하다. |
| 5 | `seoyeon_meet_1` | 서연 | school | seyoun_normal |  |  | 전학생? {name} 맞지? |
| 6 | `seoyeon_meet_2` | 서연 | school | seyoun_normal |  |  | *{name}의 이름을 한 번 더 확인한 뒤 클립보드  |
| 7 | `seoyeon_meet_3` | {name} | school | seyoun_normal |  |  | 맞는데. 어떻게 알았어? |
| 8 | `seoyeon_meet_4` | 서연 | school | seyoun_normal |  |  | 학생회장. 전학생 안내는 내 담당이야. |
| 9 | `seoyeon_meet_5` | 서연 | school | seyoun_normal |  |  | 따라와. 15분 안에 끝낼게. |
| 10 | `seoyeon_meet_6` | {name} | school | seyoun_normal |  |  | 학생회장이 직접? 과분한데. |
| 11 | `seoyeon_meet_7` | 서연 | school | seyoun_normal |  |  | 과분한 건지 아닌 건지는 내가 정해. |
| 12 | `seoyeon_meet_8` | {name} | school | seyoun_normal |  |  | *서연은 이미 교문 안쪽으로 걸음을 옮겼다. 안내 파일 |
| 13 | `seoyeon_choice` | {name} | school | seyoun_normal |  |  | *어떻게 반응할까?* |
| 14 | `choice_flirt_1` | 서연 | school | seyoun_normal |  |  | *서연의 구두가 반 바퀴 돌아선다. 안경테 위로 한쪽  |
| 15 | `choice_flirt_2` | 서연 | school | seyoun_laugh |  |  | 첫날부터 말은 잘하네. 이름은 금방 외우겠다. |
| 16 | `choice_flirt_3` | {name} | school | seyoun_laugh |  |  | 점수제야? |
| 17 | `choice_flirt_4` | 서연 | school | seyoun_normal |  |  | 아직 분위기 파악은 안 됐나 봐. 나쁘진 않아. |
| 18 | `choice_flirt_5` | {name} | school | seyoun_normal |  |  | 영광인데? |
| 19 | `choice_flirt_6` | 서연 | school | seyoun_normal |  |  | 아직 영광인지 재앙인지 모르는 거지. |
| 20 | `choice_flirt_7` | 서연 | school | seyoun_laugh |  |  | *앞서 걷는다. 한 번 뒤돌아보고 {name}의 발소리 |
| 21 | `hallway_1` | 서연 | school_hallway | seyoun_back |  |  | *복도를 앞서 걷는다. 마주치는 학생들이 먼저 인사할  |
| 22 | `hallway_3` | 서연 | school_hallway | seyoun_normal |  |  | 3학년 건물은 여기, 저쪽이 도서관. 매점은 지하. |
| 23 | `hallway_4` | 서연 | school_hallway | seyoun_normal |  |  | *주머니에서 열쇠를 꺼내 손바닥 위에서 짤랑거린다.* |
| 24 | `hallway_5` | 서연 | school_hallway | seyoun_normal |  |  | 옥상은 원래 잠겨 있어. 학생회장 특권이지. |
| 25 | `hallway_6` | {name} | school_hallway | seyoun_normal |  |  | 비밀 아지트라도 있어? |
| 26 | `hallway_6_b` | 서연 | school_hallway | seyoun_normal |  |  | *열쇠고리 소리가 뚝 끊긴다.* 눈치 빠르네. |
| 27 | `hallway_6_c` | 서연 | school_hallway | seyoun_normal |  |  | *대답 대신 열쇠를 다시 주머니에 넣는다.* |
| 28 | `hallway_7` | 서연 | school_hallway | seyoun_normal |  |  | 아, 점심. 밥 어디서 먹는지 모르지? 같이 가. |
| 29 | `hallway_8` | {name} | school_hallway | seyoun_shy |  |  | *서연은 교실 앞에 서서 문패를 가리킨다.* |
| 30 | `hallway_10` | 서연 | school_hallway | seyoun_normal |  |  | 여기야. 들어가 봐. |
| 31 | `hallway_11` | {name} | school_hallway | seyoun_normal |  |  | 점심때도 안내해 주는 거야? |
| 32 | `hallway_12` | 서연 | school_hallway | seyoun_normal |  |  | 그건 네가 잘하면. |
| 33 | `hallway_13` | 서연 | school_hallway | seyoun_back |  |  | *돌아선 서연이 클립보드를 든 손만 어깨 높이로 한 번 |
| 34 | `hallway_13_b` | {name} | school_hallway | seyoun_back |  |  | *복도 끝으로 멀어질 때까지 걸음이 흐트러지지 않았다. |
| 35 | `classroom_1` | {name} | room_school | 없음 |  |  | *교실 문을 열자 소음이 뚝 끊기고 가까운 책상 의자  |
| 36 | `classroom_2_b` | {name} | room_school | teacher_normal |  |  | *교탁 앞에 담임선생님이 서 있다. 20대 후반. 가디 |
| 37 | `classroom_3` | 담임 | room_school | teacher_normal |  |  | 자, 오늘부터 우리 반에 들어온 전학생이야. 자기소개  |
| 38 | `classroom_3_b` | {name} | room_school | teacher_normal |  |  | {name}입니다. 잘 부탁드립니다. *담임이 출석부의 |
| 39 | `classroom_5_b` | 담임 | room_school | teacher_normal |  |  | 그래, {name}. 외웠어. *출석부에 이름을 덧그으 |
| 40 | `classroom_5_c` | {name} | room_school | teacher_normal |  |  | *담임의 혼잣말은 교실 소음에 묻힌다. 교실 한쪽에서  |
| 41 | `classroom_dain_1` | 다인 | room_school | dain_normal |  |  | 오, 전학생. 우리 반에 새 얼굴 들어왔네! |
| 42 | `classroom_dain_2` | {name} | room_school | dain_normal |  |  | *갈색 숏컷에 배구부 유니폼. 자리에서 반쯤 일어나 손 |
| 43 | `classroom_dain_3` | 담임 | room_school | teacher_normal |  |  | 다인아, 목소리 낮춰. 그리고 교실에서는 유니폼 좀 그 |
| 44 | `classroom_dain_4` | 다인 | room_school | dain_normal |  |  | 쌤, 이게 제일 편하다니까요. 아무튼 전학생, 반갑다. |
| 45 | `classroom_dain_5` | {name} | room_school | dain_normal |  |  | *교실 몇 군데서 웃음이 터진다. 다인은 손을 더 높이 |
| 46 | `classroom_dain_5_b` | 담임선생님 | room_school | teacher_normal |  |  | *출석부 모서리로 교탁을 두 번 두드리고 다인 쪽을 보 |
| 47 | `classroom_dain_5_c` | 담임 | room_school | teacher_normal |  |  | 에너지 좀 아껴. 아직 1교시도 안 시작했어. |
| 48 | `classroom_dain_5_d` | 담임선생님 | room_school | teacher_angry |  |  | *담임은 출석부를 넘긴다.* |
| 49 | `classroom_yuna_1` | {name} | room_school | yuna_bored |  |  | *창가 맨 뒤쪽의 한 여학생은 턱을 괸 채 창밖만 본다 |
| 50 | `classroom_yuna_2` | {name} | room_school | yuna_bored |  |  | *은백색 머리. 붉은 눈. 팔의 타투. 창가 맨 뒤 자 |
| 51 | `classroom_yuna_4` | {name} | room_school | yuna_bored |  |  | *앞줄에서 누군가 속삭인다. '쟤한테 말 걸지 마. 무 |
| 52 | `classroom_seat_1` | 담임선생님 | room_school | teacher_normal |  |  | *빈자리를 가리킨다.* |
| 53 | `classroom_seat_2` | {name} | room_school | dain_normal |  |  | *다인 옆자리다. 의자에 앉기도 전에 다인이 내 책상  |
| 54 | `classroom_minsu_1` | {name} | room_school | minsu_normal |  |  | *자리에 앉으려는데 — 앞자리 남학생이 돌아본다.* |
| 55 | `classroom_minsu_2` | 민수 | room_school | minsu_smirk |  |  | 야, 전학생. 환영한다. — 그리고 조심해. |
| 56 | `classroom_minsu_3` | {name} | room_school | minsu_smirk |  |  | 뭘? |
| 57 | `classroom_minsu_2_b` | 민수 | room_school | minsu_normal |  |  | *다인 쪽으로 턱짓한다.* 체력 관리. |
| 58 | `classroom_dain_talk_1` | {name} | room_school | minsu_normal |  |  | *앞자리 이름표에는 '민수'라고 적혀 있었다.* |
| 59 | `classroom_dain_talk_2` | {name} | room_school | dain_normal |  |  | *자리에 앉자마자 다인이 상체를 기울인다. 책상 두 개 |
| 60 | `classroom_dain_talk_3` | 다인 | room_school | dain_normal |  |  | 야, {name}. 운동 좋아해? |
| 61 | `classroom_dain_talk_4` | {name} | room_school | dain_normal |  |  | 갑자기? |
| 62 | `classroom_dain_talk_5` | 다인 | room_school | dain_normal |  |  | 그냥. 방과후에 리시브 연습 상대가 필요해서. 서브 넣 |
| 63 | `classroom_dain_talk_6` | {name} | room_school | dain_normal |  |  | 나 볼 머신이야? |
| 64 | `classroom_dain_talk_7` | 다인 | room_school | dain_laugh |  |  | 그래도 볼 머신보단 낫겠지. 아마. |
| 65 | `classroom_dain_talk_8` | {name} | room_school | dain_laugh |  |  | *'아마' 뒤에 다인의 시선이 볼 머신 쪽으로 간다.  |
| 66 | `classroom_yuna_note_1` | {name} | room_school | yuna_bored |  |  | *접힌 쪽지가 책상 위로 미끄러져 온다. 뒤를 돌아봐도 |
| 67 | `classroom_yuna_note_3` | {name} | room_school | yuna_bored |  |  | *'시끄러운 자리 걸렸네. — 유나' 연보라색 잉크.  |
| 68 | `classroom_yuna_note_5` | {name} | room_school | yuna_bored |  |  | *유나 쪽을 보자 시선은 여전히 창밖이고 손만 책상 아 |
| 69 | `classroom_yuna_note_6` | {name} | room_school | yuna_bored |  |  | *수업 종이 울리자 유나는 다시 창밖을 보고 다인은 벌 |
| 70 | `lunch_start` | {name} | school_hallway | 없음 |  |  | *점심시간. 학생들로 찬 복도 끝에는 서연의 도시락 가 |
| 71 | `lunch_start_4` | {name} | school_hallway | seyoun_normal |  |  | *복도 끝에서 서연이 눈을 맞추더니 옥상 쪽을 손으로  |
| 72 | `lunch_start_4_b` | {name} | school_hallway | dain_normal |  |  | *옆에서 다인이 팔목을 낚아챈다.* |
| 73 | `lunch_start_5` | 다인 | school_hallway | dain_normal |  |  | 야, 밥 먹었어? 매점 가자. 빵 내기하자, 진 사람이 |
| 74 | `lunch_start_6` | {name} | school_hallway | yuna_normal |  |  | *유나는 가방만 들고 교실을 빠져나가 도서관 방향으로  |
| 75 | `lunch_start_7` | {name} | school_hallway | 없음 |  |  | *복도는 세 갈래다. 옥상, 매점, 도서관. 주머니 안 |
| 76 | `lunch_choice` | {name} | school_hallway | 없음 |  |  | *누구를 따라갈까?* |
| 77 | `lunch_seo_1` | 서연 | top_school | seyoun_normal |  |  | *옥상 문을 열쇠로 연다. 바람이 확 불어온다.* |
| 78 | `lunch_seo_1_aff_default` | 서연 | top_school | seyoun_normal |  |  | 앉을 거야? |
| 79 | `lunch_seo_2` | {name} | top_school | seyoun_normal |  |  | *옥상 바닥에는 흙 한 줌 보이지 않는다. 물방울 맺힌 |
| 80 | `lunch_seo_3` | 서연 | top_school | seyoun_normal |  |  | 여기가 내 영역이거든. |
| 81 | `lunch_seo_4` | {name} | top_school | seyoun_normal |  |  | 학생회장 전용 옥상이야? |
| 82 | `lunch_seo_5` | 서연 | top_school | seyoun_normal |  |  | 아무나 데려오는 데는 아닌데. *의자를 하나 펼친다.* |
| 83 | `lunch_seo_6` | {name} | top_school | seyoun_normal |  |  | 첫날부터 예외 적용? 뭔가 수상한데. |
| 84 | `lunch_seo_6_b` | 서연 | top_school | seyoun_laugh |  |  | *의자를 발끝으로 밀어 {name} 쪽에 맞춘다.* 의 |
| 85 | `lunch_seo_8` | 서연 | top_school | seyoun_laugh |  |  | *가방에서 같은 크기의 도시락통 두 개, 2인분을 포개 |
| 86 | `lunch_seo_9` | {name} | top_school | seyoun_normal |  |  | 2인분인데? |
| 87 | `lunch_seo_10` | 서연 | top_school | seyoun_normal |  |  | 학생회 일 하다 보면 밥 먹을 시간이 없어져서. 항상  |
| 88 | `lunch_seo_11` | {name} | top_school | seyoun_normal |  |  | *도시락 뚜껑을 열자 반찬이 줄 맞춰 놓여 있다. 계란 |
| 89 | `lunch_seo_13` | {name} | top_school | seyoun_normal |  |  | 직접 만든 거야? |
| 90 | `lunch_seo_14` | 서연 | top_school | seyoun_normal |  |  | 학생회장이 밥도 못 싸면 말이 안 되지. |
| 91 | `lunch_seo_15` | {name} | top_school | seyoun_normal |  |  | 그건 답이 아닌데. |
| 92 | `lunch_seo_16` | 서연 | top_school | seyoun_normal |  |  | *젓가락을 건넨다.* 먹어. 식으면 맛없어. |
| 93 | `lunch_seo_17` | 서연 | top_school | seyoun_normal |  |  | *대답 대신 밥을 먹는다. 난간 너머로 운동장과 별관  |
| 94 | `lunch_seo_19` | 서연 | top_school | seyoun_normal |  |  | 어때, 이 학교? |
| 95 | `lunch_seo_20` | {name} | top_school | seyoun_normal |  |  | 밥은 맛있어. |
| 96 | `lunch_seo_21` | 서연 | top_school | seyoun_laugh |  |  | *젓가락 끝이 도시락 칸막이를 가볍게 친다.* 학교를  |
| 97 | `lunch_seo_22` | 서연 | top_school | seyoun_laugh |  |  | *계란말이를 집어 내민다.* |
| 98 | `lunch_seo_23` | 서연 | top_school | seyoun_normal |  |  | 한 입만. |
| 99 | `lunch_seo_choice` | 서연 | top_school | seyoun_normal |  |  | *계란말이를 내밀고 있다.* |
| 100 | `lunch_seo_c1_1` | {name} | top_school | seyoun_normal |  |  | *서연의 젓가락에서 계란말이를 받아먹는다.* |
| 101 | `lunch_seo_c1_2` | {name} | top_school | seyoun_normal |  |  | 맛있다. |
| 102 | `lunch_seo_c1_2_b` | 서연 | top_school | seyoun_normal |  |  | *물병을 들어 입가를 가린다. 라벨이 손안에서 구겨진다 |
| 103 | `lunch_seo_c1_3` | 서연 | top_school | seyoun_shy |  |  | 그 정도는 해야지. |
| 104 | `lunch_seo_c1_3_b` | {name} | top_school | seyoun_shy |  |  | *반쯤 접힌 라벨이 물병에 붙어 있다. 서연은 다시 젓 |
| 105 | `lunch_seo_after` | {name} | top_school | seyoun_normal |  |  | *운동장 스피커에서 점심 종료를 알리는 예비음이 울린다 |
| 106 | `lunch_seo_after_2` | 서연 | top_school | seyoun_normal |  |  | 다음에도 점심시간 비워둬. |
| 107 | `lunch_seo_after_3` | {name} | top_school | seyoun_normal |  |  | 초대해 주는 거야? |
| 108 | `lunch_seo_after_4` | 서연 | top_school | seyoun_normal |  |  | 아니. 허가해 주는 거야. |
| 109 | `lunch_seo_after_5` | 서연 | top_school | seyoun_normal |  |  | *도시락 끈을 한 번 묶었다가 더 짧게 조인다.* |
| 110 | `lunch_seo_after_7` | {name} | top_school | seyoun_normal |  |  | *도시락 매듭이 처음보다 단단해져 있다.* |
| 111 | `lunch_seo_freetalk` | 서연 | top_school | seyoun_normal |  |  | *도시락 뚜껑을 정리하고 접이식 의자를 신발 끝으로 한 |
| 112 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *종이 울린다. 점심시간이 끝났다.* |
| 113 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에 |
| 114 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 115 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창 |
| 116 | `after_kakao_5` | {name} | school_hallway | 없음 |  | 🌅 | *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른 |
| 117 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록  |
| 118 | `after1_jealousy_seo_1` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 점심때 어디 갔어? 매점 갔는데 없더라. |
| 119 | `after1_jealousy_seo_2` | {name} | school_hallway | dain_normal |  | 🌅 | *답장창에 '서연이랑'까지 썼다가 지운다. 커서만 다시 |
| 120 | `after1_jealousy_seo_3` | 다인 | school_hallway | dain_pout |  | 🌅 | 옥상에서 내려오는 거 봤거든. 둘이서? |
| 121 | `after1_jealousy_seo_choice` | 다인 | school_hallway | dain_pout |  | 🌅 | *휴대폰을 쥔 손에 힘을 준다.* |
| 122 | `after1_jealousy_seo_lie` | {name} | school_hallway | dain_normal |  | 🌅 | 아니, 그냥 혼자 돌아다녔어. |
| 123 | `after1_jealousy_seo_lie_2` | 다인 | school_hallway | dain_laugh |  | 🌅 | 진짜? 혼자? — 아 그래, 첫날이니까 헤맸겠다! |
| 124 | `after1_jealousy_seo_yuna` | {name} | school_hallway | dain_normal |  | 🌅 | *가방 옆주머니에 접힌 쪽지가 걸려 있다. 유나의 필체 |
| 125 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *복도를 계속 걷는다.* |
| 126 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도를 걷는데 뒤에서 쿵쿵 발소리.* |
| 127 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 조심! |
| 128 | `after_miss_dain_3` | {name} | school_hallway | dain_normal |  | 🌅 | *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 |
| 129 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 피했다? 반사신경 괜찮은데. |
| 130 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 넌 복도에서 왜 전력질주야? |
| 131 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 늦었거든! 체육관 가야 해. 내일 보자, 전학생! |
| 132 | `after_miss_dain_6_b` | {name} | school_hallway | dain_laugh |  | 🌅 | *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을  |
| 133 | `after_miss_dain_7` | {name} | school_hallway | dain_laugh |  | 🌅 | *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아 |
| 134 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으 |
| 135 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 이거 떨어뜨렸어. |
| 136 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피 |
| 137 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌  |
| 138 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 고마워. |
| 139 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피를 책등 사이에 끼우고 돌아선다.* |
| 140 | `after_miss_yuna_4` | {name} | library_old | yuna_normal |  | 🌅 | *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 |
| 141 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든 |
| 142 | `night_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄 |
| 143 | `night_start_3` | {name} | room_my | 없음 |  |  | *핸드폰이 울린다. 학교 메신저.* |
| 144 | `night_msg_seo_1` | 서연 | room_my | seyoun_normal | 0.35 |  | *오늘 옥상 어땠어?* |
| 145 | `night_msg_seo_2` | {name} | room_my | seyoun_normal | 0.35 |  | *바람이 좋더라* |
| 146 | `night_msg_seo_3` | 서연 | room_my | seyoun_normal | 0.35 |  | *다음엔 음료 정도는 준비해 놓을게* |
| 147 | `night_msg_seo_4` | 서연 | room_my | seyoun_normal | 0.35 |  | *서비스야* |
| 148 | `night_msg_seo_5` | {name} | room_my | seyoun_normal | 0.35 |  | *'서비스야'를 일부러 한 줄 띄어서 보냈다.* |
| 149 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 다른 알림이 보인다.* |
| 150 | `night_late_transition` | {name} | room_my | 없음 |  |  | *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시 |
| 151 | `night_late_branch` | {name} | room_my | 없음 |  |  | *화면이 밝아진다.* |
| 152 | `night_seo_late_1` | 서연 | room_my | seyoun_normal | 0.35 |  | *내일 학교에서 봐.* |
| 153 | `night_seo_late_2` | 서연 | room_my | seyoun_normal | 0.35 |  | *안 오면 찾으러 갈 거야* |
| 154 | `night_seo_late_3` | {name} | room_my | seyoun_normal | 0.35 |  | *휴대폰을 내려놓자 잠금화면에 내일 등교 시간이 남는다 |
| 155 | `night_end_1` | {name} | room_my | 없음 |  |  | *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교 |
| 156 | `night_end_3` | {name} | room_my | 없음 |  |  | *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을  |
| | **Day 2** | | | | | | |
| 157 | `morning2_start` | {name} | room_school | 없음 |  |  | *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.* |
| 158 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 159 | `morning2_greet_seo_1` |  | 없음 | 없음 |  |  |  |
| 160 | `morning2_greet_seo_1_roof` | 서연 | room_school | seyoun_normal |  |  | 어제 옥상에서 한 말, 아직 유효한 거지? |
| 161 | `morning2_greet_seo_2` | {name} | room_school | seyoun_normal |  |  | *클립보드를 오늘도 팔 안쪽에 붙인 서연이 먼저 다가온 |
| 162 | `morning2_greet_seo_others_2` | {name} | room_school | seyoun_normal |  |  | *서연이 클립보드를 한 번 두드린다.* |
| 163 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *자리에 앉으려는데 — 책상 위에 접힌 쪽지가 하나 놓 |
| 164 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 165 | `morning2_note_3` | {name} | room_school | yuna_normal | 0.35 |  | *어제와 같은 글씨. 아래쪽에 장소가 적혀 있다. '도 |
| 166 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가다 교실 안을 들여다본다.* 어제 잘 잤 |
| 167 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 학생회장이 교실까지 인사하러 와? |
| 168 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 순찰이야. — 출석률 확인 겸. |
| 169 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | *복도로 돌아가기 직전 클립보드 끝이 문틀에 한 번 닿 |
| 170 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연이 사라진 복도를 바라보는데 — 뒤에서 민수가 돌 |
| 171 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 이틀 만에 학생회장이 인사하러 오냐? 나 1 |
| 172 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 인기가 없는 거 아닐까. |
| 173 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 그건 맞는데 그게 중요한 게 아니잖아. |
| 174 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *다인은 서연의 뒷모습이 교실 안으로 사라질 때까지 바 |
| 175 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 회장님도 우리 전학생한테 관심 있어? 인기 많네! |
| 176 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | '우리' 전학생? |
| 177 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 내가 먼저 봤잖아. 그럼 우리 맞지. 찜한 거. |
| 178 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *쉬는 시간. 복도로 나왔다.* |
| 179 | `morning2_break_1` | {name} | school_hallway | 없음 |  |  | *서연의 클립보드 끝이 책상에 톡 닿는다. 답할 틈도  |
| 180 | `morning2_seo_dust_1` | {name} | school_hallway | seyoun_normal |  |  | *1교시가 끝난 쉬는 시간, 복도에서 서연과 스친다.  |
| 181 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 잠깐. |
| 182 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *손이 {name}의 어깨에 닿는다. 먼지를 두 번 털 |
| 183 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 옷에 뭐 묻었어. |
| 184 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | *서연의 손이 떨어진 자리에서 가방끈이 비뚤어져 있다. |
| 185 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 왜 그래? 먼지잖아. |
| 186 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *어깨의 먼지는 없어졌는데 가방끈을 두 번이나 다시 고 |
| 187 | `morning2_dain_react_2` | {name} | school_hallway | dain_angry |  |  | *서연이 클립보드를 고쳐 끼고 복도로 간다. 뒤에서 다 |
| 188 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 지금 뭐야? 어깨 만진 거야? |
| 189 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 먼지 털어준 거야. |
| 190 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 먼지가 진짜 있긴 했어? |
| 191 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | *대답 대신 가방끈을 고쳐 잡았다. 다인은 그걸 보고도 |
| 192 | `morning2_end` | {name} | school_hallway | seyoun_normal |  |  | *민수 말로는 1년 동안 먼저 인사한 적도 없다던 서연 |
| 193 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *점심. 주머니에는 유나의 쪽지가 있고 복도 끝에서는  |
| 194 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *누구와 함께할까.* |
| 195 | `lunch2_seo_1_check` | {name} | school_hallway | 없음 |  |  | *옥상으로 올라간다.* |
| 196 | `lunch2_seo_1` | {name} | top_school | seyoun_normal |  |  | *옥상. 어제와 같은 장소. 서연이 도시락을 펼치고 있 |
| 197 | `lunch2_seo_2` | 서연 | top_school | seyoun_normal |  |  | 또 왔네. 맛 들렸나 봐. |
| 198 | `lunch2_seo_3` | {name} | top_school | seyoun_normal |  |  | 밥이 맛있었으니까. |
| 199 | `lunch2_seo_4` | 서연 | top_school | seyoun_laugh |  |  | 밥 때문이야? |
| 200 | `lunch2_seo_5` | {name} | top_school | seyoun_laugh |  |  | 바람도 좋고. |
| 201 | `lunch2_seo_6` | 서연 | top_school | seyoun_normal |  |  | 바람이라. |
| 202 | `lunch2_seo_7` | {name} | top_school | seyoun_normal |  |  | *서연이 도시락 뚜껑을 여는 순간 옥상 문이 철컥 열린 |
| 203 | `lunch2_seo_9` | 다인 | top_school | dain_normal |  |  | 여기 있었네. 찾았다. 오늘도 나 빼고 먹으려고? |
| 204 | `lunch2_seo_10` | 서연 | top_school | seyoun_normal |  |  | 옥상은 허가제야. 그리고 오늘 점심은 내가 먼저 잡았고 |
| 205 | `lunch2_seo_11` | 다인 | top_school | dain_normal |  |  | 그럼 난 지금부터 끼면 되겠네. 나도 앉는다? |
| 206 | `lunch2_seo_12` | {name} | top_school | dain_normal |  |  | *다인이 빈자리에 바로 앉는다. 서연의 젓가락이 계란말 |
| 207 | `lunch2_seo_13b` | 다인 | top_school | dain_normal |  |  | 반가워요, 회장님. 그런데 옆자리는 비었죠? |
| 208 | `lunch2_seo_13b_b` | 서연 | top_school | seyoun_normal |  |  | *서연이 도시락을 {name} 쪽으로 더 붙인다.* 자 |
| 209 | `lunch2_seo_14` | 서연 | top_school | seyoun_normal |  |  | *다인이 앉으려 하자 빈 의자를 발끝으로 자기 쪽에 붙 |
| 210 | `lunch2_seo_15` | {name} | top_school | seyoun_normal |  |  | 같은 반이잖아. 너희 둘도 이제 아는 사이고. |
| 211 | `lunch2_seo_16` | 서연 | top_school | seyoun_normal |  |  | 친해지는 것하고 양보하는 건 다르지. |
| 212 | `lunch2_seo_17` | 다인 | top_school | dain_normal |  |  | 그럼 나도 양보 안 해. 다음 쉬는 시간에 체육관 와. |
| 213 | `lunch2_seo_19` | 서연 | top_school | seyoun_normal |  |  | {name}, 지금 내 앞에서 다음 약속 잡는 거야? |
| 214 | `lunch2_seo_20` | 서연 | top_school | seyoun_normal |  |  | 대답은 나중에 해. 일단 입가에 뭐 묻었어. 가만있어  |
| 215 | `lunch2_seo_choice` | 서연 | top_school | seyoun_normal |  |  | *물티슈를 감은 손가락이 입가로 다가온다.* |
| 216 | `lunch2_seo_c1_1` | 서연 | top_school | seyoun_normal |  |  | *물티슈로 밥풀을 떼어내고 사용한 쪽을 안으로 접는다. |
| 217 | `lunch2_seo_c1_2` | 서연 | top_school | seyoun_normal |  |  | 됐어. |
| 218 | `lunch2_seo_c1_2_b` | 다인 | top_school | dain_normal |  |  | *다인은 도시락으로 뻗던 손을 공중에 둔 채 둘을 번갈 |
| 219 | `lunch2_seo_c1_3` | 다인 | top_school | dain_normal |  |  | 밥풀을 직접 떼어줘요? |
| 220 | `lunch2_seo_c1_3_b` | 서연 | top_school | seyoun_normal |  |  | *물티슈를 네모로 접는다.* 밥풀이었어. |
| 221 | `lunch2_seo_c1_4` | 서연 | top_school | seyoun_shy |  |  | 그게 다야. |
| 222 | `lunch2_seo_c1_5` | {name} | top_school | seyoun_shy |  |  | *서연은 물병을 집어 들지만 뚜껑은 열지 않는다. 라벨 |
| 223 | `lunch2_seo_end_c1` | {name} | top_school | seyoun_shy |  |  | *다인이 접이식 의자 다리를 운동화 끝으로 두 번 건드 |
| 224 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *방과후. 핸드폰에 알림이 두 개 와 있다.* |
| 225 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 체육관 와. 오늘은 진짜 내기다. |
| 226 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 학생회실에 올 수 있어? 일손이 부족해서. |
| 227 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게서는 아무 연락이 없다. 가방을 챙기자 주머니 |
| 228 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *어디로 갈까.* |
| 229 | `after2_seo_1` | {name} | student_room | seyoun_sad |  | 🌅 | *학생회실. 서연은 서류 더미 앞에 혼자 앉아 있다.* |
| 230 | `after2_seo_2` | 서연 | student_room | seyoun_normal |  | 🌅 | 와 줬네. — 솔직히 안 올 줄 알았어. |
| 231 | `after2_seo_3` | {name} | student_room | seyoun_laugh |  | 🌅 | 부르면 가는 타입이야. |
| 232 | `after2_seo_4` | 서연 | student_room | seyoun_normal |  | 🌅 | *클립보드 모서리로 빈 의자를 가리킨다.* 순종적이네. |
| 233 | `after2_seo_4_b` | 서연 | student_room | seyoun_sad |  | 🌅 | *클립보드를 {name} 쪽으로 돌린다. 할 일 목록  |
| 234 | `after2_seo_5` | {name} | student_room | seyoun_normal |  | 🌅 | 도와달라고 한 건 너잖아. |
| 235 | `after2_seo_6` | 서연 | student_room | seyoun_normal |  | 🌅 | 부탁이 아니라 기회를 준 거야. |
| 236 | `after2_seo_6_b` | {name} | student_room | seyoun_normal |  | 🌅 | *서류 정리를 시작한다. 행사 예산안, 동아리 신청서. |
| 237 | `after2_seo_7` | 서연 | student_room | seyoun_normal |  | 🌅 | *바로 돌아서지 않고 클립보드를 문 쪽으로 든 채 기다 |
| 238 | `after2_seo_8` | 서연 | student_room | seyoun_normal |  | 🌅 | 이쪽은 날짜순, 저쪽은 동아리별. — 정리하는 건 잘해 |
| 239 | `after2_seo_8a2` | {name} | student_room | seyoun_normal |  | 🌅 | 잘하진 않는데 못하지도 않아. |
| 240 | `after2_seo_8a3` | 서연 | student_room | seyoun_normal |  | 🌅 | 애매하네. |
| 241 | `after2_seo_8a4` | {name} | student_room | seyoun_normal |  | 🌅 | 칭찬이랑 비슷하잖아. 너도 애매하게 하니까. |
| 242 | `after2_seo_8b` | 서연 | student_room | seyoun_normal |  | 🌅 | *서류를 넘기던 손을 놓고 {name} 쪽을 본다.* |
| 243 | `after2_seo_8b2` | 서연 | student_room | seyoun_sad |  | 🌅 | 너, 쓸 만하네. |
| 244 | `after2_seo_8b3` | {name} | student_room | seyoun_normal |  | 🌅 | 그건 칭찬이야? |
| 245 | `after2_seo_8b4` | 서연 | student_room | seyoun_shy |  | 🌅 | 칭찬이야. 받아 둬. |
| 246 | `after2_seo_8b4_b` | 서연 | student_room | seyoun_shy |  | 🌅 | *칭찬이라고 말해놓고 바로 서류를 정리한다. 목을 돌리 |
| 247 | `after2_seo_choice1` | {name} | student_room | seyoun_normal |  | 🌅 | *블라인드 틈으로 들어온 주황색 줄이 서류 위를 가른다 |
| 248 | `after2_seo_sunset_joke` | 서연 | student_room | seyoun_shy2 |  | 🌅 | *안경이 코끝으로 조금 내려오고 펜 끝이 날짜 칸 밖으 |
| 249 | `after2_seo_sunset_joke_b` | 서연 | student_room | seyoun_normal |  | 🌅 | *서류 끝을 세워 입가를 가리는 사이 펜 뚜껑이 책상  |
| 250 | `after2_seo_sunset_react` | 서연 | student_room | seyoun_shy2 |  | 🌅 | 그런 말을 그렇게 툭 던지면, 받아 적을 시간도 없잖아 |
| 251 | `after2_seo_sunset_react_b` | 서연 | student_room | seyoun_normal |  | 🌅 | *서류 끝으로 입가를 가린 채 창틀의 주황색 줄을 펜  |
| 252 | `after2_seo_9` | {name} | student_room | seyoun_normal |  | 🌅 | *블라인드 그림자가 책상 끝까지 길어질 무렵 서류 정리 |
| 253 | `after2_seo_choice2` | {name} | student_room | seyoun_normal |  | 🌅 | *서류 정리가 거의 끝났다.* |
| 254 | `after2_seo_leave` | 서연 | student_room | seyoun_normal |  | 🌅 | *완성된 서류 더미를 양손으로 한 번 눌러 맞춘다.* |
| 255 | `after2_seo_end` | {name} | school_hallway | seyoun_normal |  | 🌅 | *학생회실을 나서자 복도 자동등이 앞에서부터 한 칸씩  |
| 256 | `after2_seo_skinship_1` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *서연이 손을 뻗어 옷깃의 먼지를 떼는 순간 손등이 목 |
| 257 | `after2_seo_skinship_2` | 서연 | school_hallway | seyoun_shy |  | 🌅 | *손가락이 셔츠 깃에 닿은 채 떨어지지 않는다. 청소  |
| 258 | `after2_seo_skinship_3` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 먼지 묻었어. |
| 259 | `after2_seo_return` | {name} | school | seyoun_normal |  | 🌅 | *학생회실을 나섰다. 교문 쪽으로 걸어간다.* |
| 260 | `after2_group_seoyeon_companion` | 서연과 동행 | student_room | 없음 |  | 🌅 | *서연이 겹쳐 적힌 일정 두 칸을 손끝으로 짚는다. 맞 |
| 261 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.* |
| 262 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 263 | `night2_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저  |
| 264 | `night2_msg_1` | {name} | room_my | 없음 |  |  | *세 명에게서 메시지가 왔다.* |
| 265 | `night2_msg_seo_specific` | 서연 | room_my | seyoun_normal | 0.35 |  | 오늘 고마웠어. 덕분에 일찍 끝났어 |
| 266 | `night2_msg_seo_specific_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 다음에도 부를지도 모르니까, 각오해 둬 |
| 267 | `night2_msg_dain_general` | 다인 | room_my | dain_normal | 0.35 |  | 야, 내일 매점 가자! 오늘 못 간 거 아직 아쉽거든! |
| 268 | `night2_msg_dain_general_merge` | 서연 | room_my | seyoun_normal | 0.35 |  | 점심에 옥상 올래? 바람 좋을 거야 |
| 269 | `night2_msg_yuna_general` | 유나 | room_my | yuna_normal | 0.35 |  | 내일 별관 올 거야? |
| 270 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에  |
| 271 | `night2_choice` | {name} | room_my | 없음 |  |  | *누구에게 먼저 답장할까?* |
| 272 | `night2_reply_dain_1` | {name} | room_my | dain_normal | 0.35 |  | 떡볶이 매웠어 ㅋㅋ |
| 273 | `night2_reply_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | 매운 거 못 먹는 거야? |
| 274 | `night2_reply_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | 내일은 순한 맛으로 가자. |
| 275 | `night2_reply_dain_4` | 다인 | room_my | dain_normal | 0.35 |  | 아 근데 순한 맛은 떡볶이가 아니지ㅋㅋ |
| 276 | `night2_reply_dain_5` | {name} | room_my | dain_normal | 0.35 |  | *또 세 줄 연속이다.* |
| 277 | `night2_reply_dain_react_default` | 다인 | room_my | dain_normal | 0.35 |  | ㅋㅋ 알겠어. 굿나잇! |
| 278 | `night2_dain_freetalk` | 다인 | room_my | dain_normal | 0.35 | 🌙 | 잠깐, 진짜 자기 전에. 오늘 제일 재밌었던 건 뭐였어 |
| 279 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 또 다른 알림이 보인다.* |
| 280 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 보내고 핸드폰을 내려놓았다.* |
| 281 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이,  |
| 282 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 |
| 283 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *메모장에 줄줄이 남은 보내지 않은 문장. '선생님,  |
| 284 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 메모가 마지막이다. 그 아래 39번째에는 제 |
| 285 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 |
| 286 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로 |
| 287 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보 |
| 288 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화 |
| 289 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 |
| 290 | `night2_end_2_b` | {name} | room_my | 없음 |  |  | *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있 |
| 291 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.* |
| 292 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을  |
| 293 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 |
| | **Day 3** | | | | | | |
| 294 | `morning3_start` | {name} | school | 없음 |  |  | *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯 |
| 295 | `morning3_start_2` | {name} | school | 없음 |  |  | *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군 |
| 296 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 297 | `morning3_seo_gate_1` | {name} | school | seyoun_normal |  |  | *교문 앞의 서연은 지각 종이 울리기 직전인데도 발을  |
| 298 | `morning3_seo_gate_2` | 서연 | school | seyoun_normal |  |  | 늦었네. |
| 299 | `morning3_seo_gate_3` | {name} | school | seyoun_normal |  |  | 서연? 왜 여기 있어? |
| 300 | `morning3_seo_gate_4` | 서연 | school | seyoun_normal |  |  | 지각하면 어때. 혼자 혼나는 것보단 낫잖아. |
| 301 | `morning3_seo_gate_5` | {name} | school | seyoun_laugh |  |  | 그건 아닌데. |
| 302 | `morning3_seo_gate_6` | 서연 | school | seyoun_normal |  |  | 농담이야. 같이 늦은 이유는 내가 설명할게. |
| 303 | `morning3_seo_gate_6_b` | 서연 | school | seyoun_normal |  |  | *서연은 학생회 일정표를 꺼내 교문 담당 교사에게 보여 |
| 304 | `morning3_seo_gate_7` | 서연 | school | seyoun_normal |  |  | *확인 도장을 받은 일정표를 접고 교문 안으로 들어간다 |
| 305 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실에 들어서자 서연의 펜이 멈추고 다인의 의자가 뒤 |
| 306 | `morning3_react_seo_1` | 다인 | room_school | dain_normal |  |  | 야, 회장님이랑 같이 왔어? 아침부터? |
| 307 | `morning3_react_seo_2` | 유나 | room_school | yuna_bored |  |  | *창밖을 보던 유나가 유리창에 비친 {name}을 확인 |
| 308 | `morning3_date_intro` | {name} | room_school | 없음 |  |  | *1교시가 끝났다. 쉬는 시간마다 누군가 말을 건다.* |
| 309 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *쉬는 시간, 복도로 나왔다. 서연이 먼저 걸음을 맞춘 |
| 310 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | 이번 주말에 시간 있어? 공원에 같이 가자. |
| 311 | `morning3_date_seo_choice` | 서연 | school_hallway | seyoun_normal |  |  | *서연이 교실 문 앞에서 묻는다. 다인이 들고 있던 물 |
| 312 | `morning3_date_seo_decline` | {name} | school_hallway | seyoun_normal |  |  | *서연의 제안을 거절하자 다인이 돌리던 물병 뚜껑을 다 |
| 313 | `morning3_date_seo_decline_b` | {name} | room_school | seyoun_normal |  |  | *교실로 돌아왔다. 수업 하나가 지나고 또 쉬는 시간이 |
| 314 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼  |
| 315 | `morning3_date_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 배구공을 옆구리에 낀 채 이쪽을 보다가 코트로 |
| 316 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다 |
| 317 | `morning3_date_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 접어 둔 쪽지를 꺼내려다 다시 책갈피 사이에  |
| 318 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 319 | `morning3_end` | {name} | room_school | 없음 |  |  | *수업 종료 종이 울리고 곧 점심시간이 된다.* |
| 320 | `morning3_end_b` | 유나 | room_school | yuna_normal |  |  | 맛있네. |
| 321 | `lunch3_start` | {name} | room_school | yuna_normal |  |  | *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. |
| 322 | `lunch3_start_2_b` | 다인 | room_school | dain_normal |  |  | *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가 |
| 323 | `lunch3_meal_1` | 다인 | room_school | dain_laugh |  |  | 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고  |
| 324 | `lunch3_meal_2` | {name} | room_school | dain_laugh |  |  | 그건 내 거... |
| 325 | `lunch3_meal_3` | 서연 | room_school | seyoun_normal |  |  | 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점 |
| 326 | `lunch3_meal_4` | {name} | room_school | seyoun_normal |  |  | 점수 매기지 마. |
| 327 | `lunch3_meal_5` | 서연 | room_school | seyoun_normal |  |  | 10점 만점이야. 나쁜 거 아닌데? |
| 328 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다 |
| 329 | `lunch3_meal_7` | {name} | room_school | seyoun_normal |  |  | 유나, 그건 내가 제일 좋아하는 건데. |
| 330 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임 |
| 331 | `lunch3_meal_8` | {name} | room_school | yuna_bored |  |  | *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다. |
| 332 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. |
| 333 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓 |
| 334 | `lunch3_meal_11` | {name} | room_school | yuna_bored |  |  | *누구에게 줄까?* |
| 335 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *마지막 반찬을 누구에게 줄지 고민한다.* |
| 336 | `lunch3_share_1` | {name} | room_school | yuna_bored |  |  | *다 같이 나눠 먹자고 하자 셋이 웃는다. 웃음이 끊긴 |
| 337 | `lunch3_share_solo` | {name} | room_school | yuna_normal |  |  | *셋이 계란말이를 조금씩 나눠 먹는다. 반으로 갈린 마 |
| 338 | `lunch3_end` | {name} | room_school | 없음 |  |  | *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다 |
| 339 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육 |
| 340 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다 |
| 341 | `after3_choice` | {name} | school_hallway | 없음 |  | 🌅 | *어디로 갈까.* |
| 342 | `after3_reject_for_seo_1` | {name} | school_hallway | dain_sad |  | 🌅 | *복도에서 마주친 다인은 먼저 손을 흔들지 않고 운동화 |
| 343 | `after3_reject_for_seo_2` | 다인 | school_hallway | dain_sad |  | 🌅 | 오늘 체육관 안 올 거지? |
| 344 | `after3_reject_for_seo_3` | {name} | library_old | yuna_sad | 0.35 | 🌅 | *도서관 옆을 지나자 유나 자리에 연보라색 쪽지 하나만 |
| 345 | `after3_reject_for_seo_3b` | {name} | library_old | 없음 |  | 🌅 | *유나의 책이 없다. 늘 책상에 두던 1권도, 빌려주겠 |
| 346 | `after3_reject_for_seo_3c` | {name} | library_old | 없음 |  | 🌅 | *책갈피도, 빌려주겠다던 2권도 없다. 책상 위에는 유 |
| 347 | `after3_reject_for_seo_4` | {name} | school_hallway | 없음 |  | 🌅 | *복도로 나왔다. 다인의 문장 끝은 조용했고 유나의 자 |
| 348 | `after3_seo_1` | {name} | student_room | seyoun_sad |  | 🌅 | *학생회실 문을 열자 서연이 책상에 엎드린 채다. 바닥 |
| 349 | `after3_seo_3` | 서연 | student_room | seyoun_sad |  | 🌅 | *문 여는 소리에 서연이 몸을 일으킨다. 눈 밑의 화장 |
| 350 | `after3_seo_4` | 서연 | student_room | seyoun_sad |  | 🌅 | *서연이 바닥의 클립보드를 발끝으로 책상 밑에 밀어 넣 |
| 351 | `after3_seo_5` | {name} | student_room | seyoun_sad |  | 🌅 | 서연? |
| 352 | `after3_seo_5_b` | 서연 | student_room | seyoun_normal |  | 🌅 | *서연이 손가락으로 머리카락을 빗어 내린다.* 봤어? |
| 353 | `after3_seo_6` | 서연 | student_room | seyoun_sad |  | 🌅 | *서연이 헛기침을 한 번 한다.* 아무것도 아니야. 잊 |
| 354 | `after3_seo_7` | {name} | student_room | seyoun_sad |  | 🌅 | 뭘 봤다고. |
| 355 | `after3_seo_7_b` | 서연 | student_room | seyoun_sad |  | 🌅 | *서연이 손등으로 번진 화장을 가린다.* 이런 거 보여 |
| 356 | `after3_seo_8` | 서연 | student_room | seyoun_sad |  | 🌅 | 이런 모습. 비밀로 해줘. |
| 357 | `after3_seo_9` | 서연 | student_room | seyoun_sad |  | 🌅 | *서연은 허리를 세우고 클립보드를 무릎 위에 올린다.  |
| 358 | `after3_seo_choice` | 서연 | student_room | seyoun_sad |  | 🌅 | 오늘 본 건 여기까지만 해줘. 대신 지금은 평소처럼 대 |
| 359 | `after3_seo_correct_1` | 서연 | student_room | seyoun_sad |  | 🌅 | *클립보드 가장자리가 손안에서 휘어진다. 서연은 다음  |
| 360 | `after3_seo_correct_2` | {name} | student_room | seyoun_worried |  | 🌅 | *허리를 굽혀 펜을 줍는 척 책상 밑을 더듬는다. 일부 |
| 361 | `after3_seo_correct_3` | {name} | student_room | seyoun_normal |  | 🌅 | 어, 여기 있네. 회장님 학생회실은 펜이 잘 없어지는  |
| 362 | `after3_seo_correct_4` | {name} | student_room | seyoun_worried |  | 🌅 | *몸을 일으키자 서연이 화장 자국을 닦던 손등에 검은  |
| 363 | `after3_seo_correct_5` | 서연 | student_room | seyoun_normal |  | 🌅 | 학생회실 펜 없어지는 거 진짜 미스터리야. 1년에 30 |
| 364 | `after3_seo_correct_6` | {name} | student_room | seyoun_normal |  | 🌅 | 학생회장이 그것도 못 잡아? |
| 365 | `after3_seo_correct_7` | 서연 | student_room | seyoun_laugh |  | 🌅 | *서연의 코웃음이 짧게 샌다.* 잡으면 학생들이 학생회 |
| 366 | `after3_seo_correct_8` | {name} | student_room | seyoun_pout |  | 🌅 | *서연이 안경을 고쳐 쓰는 동안에도 쓸데없는 펜 이야기 |
| 367 | `after3_seo_correct_9` | 서연 | student_room | seyoun_normal |  | 🌅 | {name}. |
| 368 | `after3_seo_correct_10` | {name} | student_room | seyoun_normal |  | 🌅 | 응. |
| 369 | `after3_seo_correct_11` | 서연 | student_room | seyoun_shy |  | 🌅 | 펜 줍는 거. 다음에도 가끔 줍게. |
| 370 | `after3_seo_correct_12` | {name} | student_room | 없음 |  | 🌅 | *서연은 다음 주 학생회 일정표를 접어 내 쪽으로 밀었 |
| 371 | `after3_seo_freetalk` | 서연 | student_room | seyoun_normal |  | 🌅 | *클립보드를 품에 안은 채 {name}을 본다.* 할  |
| 372 | `after3_seo_end` | {name} | student_room | seyoun_sad |  | 🌅 | *그 한마디 뒤에 서연은 클립보드를 품에 더 깊이 끌어 |
| 373 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.* |
| 374 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 375 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 376 | `haeun_warn_1` | {name} | school_hallway | 없음 |  | 🌅 | *학생회실을 나오자 빈 복도 끝에 누군가 기다리고 있다 |
| 377 | `haeun_warn_1_b` | 하은 | school_hallway | haeun_normal |  | 🌅 | *하은이 벽에 기대 학생회 팔찌를 만지작거린다.* |
| 378 | `haeun_warn_2` | 하은 | school_hallway | haeun_normal |  | 🌅 | {name} 씨. |
| 379 | `haeun_warn_2_b` | {name} | school_hallway | haeun_normal |  | 🌅 | 하은? 왜 여기서? |
| 380 | `haeun_warn_2b` | {name} | school_hallway | haeun_normal |  | 🌅 | 응. |
| 381 | `haeun_warn_3` | 하은 | school_hallway | haeun_normal |  | 🌅 | 선배, 서연 선배 방금 봤어요? |
| 382 | `haeun_warn_3_b` | 하은 | school_hallway | haeun_normal |  | 🌅 | 선배가 울었어요. |
| 383 | `haeun_warn_3_c` | {name} | school_hallway | haeun_normal |  | 🌅 | *뭐?* |
| 384 | `haeun_warn_4` | 하은 | school_hallway | haeun_normal |  | 🌅 | 학생회실 뒤 화장실에서 잠깐 봤어요. 저한테는 괜찮다고 |
| 385 | `haeun_warn_4b` | {name} | school_hallway | haeun_normal |  | 🌅 | 울었다고? |
| 386 | `haeun_warn_5` | {name} | school_hallway | haeun_normal |  | 🌅 | *하은은 빈 복도를 확인한 뒤 목소리를 더 낮춘다.* |
| 387 | `haeun_warn_5b` | 하은 | school_hallway | haeun_normal |  | 🌅 | 말 걸지 말라고 했는데 세면대 앞에서 한참 나오지 않았 |
| 388 | `haeun_warn_5c` | {name} | school_hallway | haeun_normal |  | 🌅 | *복도 끝 화장실 쪽을 돌아본다.* |
| 389 | `haeun_warn_5c_b` | 서연 | school_hallway | seyoun_sad |  | 🌅 | 네가 다른 애들한테도 나한테 하듯 웃는 게 좀 싫었어. |
| 390 | `haeun_warn_6` | 하은 | school_hallway | haeun_normal |  | 🌅 | 제가 따라가면 또 괜찮다고 할 거예요. {name} 씨 |
| 391 | `haeun_warn_6_b` | 하은 | school_hallway | haeun_normal |  | 🌅 | *하은은 학생회 팔찌를 손목 안쪽으로 돌린다.* |
| 392 | `haeun_warn_7` | 하은 | school_hallway | haeun_worried |  | 🌅 | 참견인 거 알아요. 그래도 오늘만은 모른 척하지 말아  |
| 393 | `haeun_warn_7_b` | 하은 | school_hallway | haeun_worried |  | 🌅 | *하은이 입술을 다문다. 학생회 팔찌의 고리를 만지며  |
| 394 | `haeun_warn_7_c` | 하은 | school_hallway | haeun_normal |  | 🌅 | 설득하라는 건 아니에요. 그냥 혼자 두지만 말아 주세요 |
| 395 | `haeun_freetalk` | 하은 | school_hallway | haeun_worried |  | 🌅 | *하은은 돌아서지 않고 주인공을 똑바로 본다.* "…대 |
| 396 | `haeun_warn_7_d` | 하은 | school_hallway | haeun_worried |  | 🌅 | *하은이 복도 끝으로 사라진 뒤, 벽걸이에는 서연의 학 |
| 397 | `haeun_warn_8` | {name} | school_hallway | haeun_worried |  | 🌅 | *하은이 떠난 뒤 학생회실 문을 두드린다. 대답은 없지 |
| 398 | `haeun_warn_8b` | {name} | school | haeun_worried |  | 🌅 | *학교 앞으로 나왔다.* |
| 399 | `night3_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 가방을 의자에 걸어 둔다.* |
| 400 | `night3_start_2` | {name} | room_my | 없음 |  |  | *책상 위에 엎어 둔 핸드폰 화면을 켠다.* |
| 401 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *읽지 않은 메시지가 떠 있다.* |
| 402 | `night3_faithful_msg_seo_1` | 서연 | room_my | seyoun_normal | 0.35 |  | 오늘 본 거, 비밀이야 |
| 403 | `night3_faithful_msg_seo_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 근데 또 와도 돼 |
| 404 | `night3_faithful_msg_seo_3` | {name} | room_my | seyoun_normal | 0.35 |  | *메시지를 끝까지 읽고 화면을 끈다. 방 안에서 휴대폰 |
| 405 | `night3_dream_1` | {name} | school | 없음 |  |  | *꿈속에서 누군가와 나란히 걷는다. 얼굴은 보이지 않고 |
| 406 | `night3_dream_2_b` | {name} | school | 없음 |  |  | *메모장을 닫았다. 내일 보낼 문장은 아직 없다.* |
| 407 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *커튼 사이로 들어온 아침 햇살에 눈을 뜬다. 핸드폰  |
| 408 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *'삭제하시겠습니까?' 확인 창이 뜬다. 손가락이 버튼 |
| 409 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *1초 동안 화면을 내려다본다. 소정이 책상의 낙서와  |
| 410 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *그래. 삭제 버튼에 올린 손가락으로 화면을 누른다.* |
| 411 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼을 누르지 않고 사진을 새 폴더로 옮긴다.  |
| 412 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *'거절도 네가 해야 할 일이야.' 민수의 말이 떠오른 |
| 413 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *갤러리에서 소정이 사진이 사라지고 빈칸만 남는다.* |
| 414 | `night3_faithful_reflect_4_b` | {name} | room_my | 없음 |  |  | *빈 앨범 썸네일 위를 엄지로 문지른다.* |
| 415 | `night3_faithful_reflect_4_c` | {name} | room_my | 없음 |  |  | *핸드폰을 덮자 검은 화면에 갤러리의 빈칸이 겹쳐 보인 |
| 416 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *알람이 울리기 전에 눈을 떴다.* |
| 417 | `night3_dream_seo_bonus` | {name} | room_my | 없음 |  |  | *눈을 감자 옥상 난간이 먼저 떠오른다.* |
| 418 | `night3_end` | {name} | room_my | 없음 |  |  | *방 불을 끄고 핸드폰을 엎어 둔다.* |
| | **Day 4** | | | | | | |
| 419 | `morning4_start` | {name} | room_my | 없음 |  |  | *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다 |
| 420 | `morning4_nightmare_check` |  | room_my | 없음 |  |  |  |
| 421 | `minsu_cheer_1` | {name} | room_my | 없음 |  |  | *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.* |
| 422 | `minsu_cheer_1_b` | 민수 | room_my | minsu_normal | 0.35 |  | *야 오늘 데이트라며?* |
| 423 | `minsu_cheer_1_c` | {name} | room_my | minsu_normal | 0.35 |  | *어떻게 알았어* |
| 424 | `minsu_cheer_1_d` | 민수 | room_my | minsu_normal | 0.35 |  | *다인이가 단톡방에 올림. 내일 약속 있음, 이라고* |
| 425 | `minsu_cheer_2` | 민수 | room_my | minsu_normal | 0.35 |  | 잘하고 와ㅋㅋ |
| 426 | `minsu_cheer_3` | {name} | room_my | minsu_normal | 0.35 |  | 알아. |
| 427 | `minsu_cheer_4_branch` |  | room_my | 없음 |  |  |  |
| 428 | `minsu_cheer_4_ins_single` | {name} | room_my | minsu_normal | 0.35 |  | *핸드폰 캘린더를 본다. 오늘 약속은 하나뿐이다.* |
| 429 | `morning4_start_2` | {name} | room_my | 없음 |  |  | *심호흡하고 약속 메시지를 다시 확인한다.* |
| 430 | `morning4_seo_msg_1` | 서연 | room_my | seyoun_pout | 0.35 |  | 늦으면 안 돼. 공원 분수대, 10시. |
| 431 | `morning4_seo_msg_1_b` | {name} | room_my | seyoun_pout | 0.35 |  | *메시지는 거기서 끝나 있다.* |
| 432 | `morning4_seo_msg_1_c` | {name} | room_my | seyoun_pout | 0.35 |  | *분수대 앞에 선다. 시계가 9시 58분을 가리킨다.* |
| 433 | `morning4_hidden_check` | {name} | room_my | 없음 |  |  | *주말 아침, 학교 앞 사거리에서 신호를 기다린다.* |
| 434 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 435 | `morning4_end` | {name} | room_my | 없음 |  |  | *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 |
| 436 | `date_seo_1` | {name} | park | seyoun_normal |  |  | *분수대 앞에 서연이 먼저 와 있다. 클립보드는 없고  |
| 437 | `date_seo_compliment_choice` | {name} | park | seyoun_normal |  |  | *서연의 가방끈이 손가락에 한 번 더 감긴다.* |
| 438 | `date_seo_role_trap` | 서연 | park | seyoun_normal |  |  | *가방끈에서 손을 뗀다.* 오늘은 학생회장으로 나온 거 |
| 439 | `date_seo_walk` | {name} | park | seyoun_normal |  |  | *공원을 산책한다. 오리들에게 빵을 던져준다.* |
| 440 | `date_seo_duck` | 서연 | park | seyoun_normal |  |  | 이 애들은 단순해서 좋다. 빵 주면 따라오고 안 주면  |
| 441 | `date_seo_duck_2` | {name} | park | seyoun_normal |  |  | 사람도 그런 거 아냐? |
| 442 | `date_seo_duck_3` | 서연 | park | seyoun_normal |  |  | 사람은 빵 줘도 안 올 때가 있으니까. |
| 443 | `date_seo_duck_4` | 서연 | park | seyoun_normal |  |  | *빵 부스러기가 가라앉는 물가를 보고 있었다. 꽃집 앞 |
| 444 | `date_seo_flower_b` | 서연 | park | seyoun_normal |  |  | *꽃집 유리문 쪽으로 발끝을 돌린다.* 들어가 볼까? |
| 445 | `date_seo_flower_2` | 서연 | park | seyoun_normal |  |  | *꽃집 문을 밀자 종이 울린다. 서연은 진열대를 한 바 |
| 446 | `date_seo_succulent_2` | 서연 | park | seyoun_normal |  |  | 이건 관리하기 쉬워. 물 안 줘도 잘 살아. |
| 447 | `date_seo_succulent_2_b` | {name} | park | seyoun_normal |  |  | 나한테 주는 거야? |
| 448 | `date_seo_succulent_3` | 서연 | park | seyoun_laugh |  |  | 키울 수 있으면. — 못 키우면 내가 다시 가져갈 거니 |
| 449 | `date_seo_end` | 서연 | park | seyoun_worried |  |  | *화분을 내민다. 흙이 든 작은 화분이 손바닥에 닿았다 |
| 450 | `date_seo_end_b` | {name} | street | seyoun_normal |  |  | *공원을 나서 거리를 걸었다.* |
| 451 | `date_seo_end_c` | 서연 | street | seyoun_normal |  |  | *화분 포장지가 손안에서 작게 바스락거린다.* 오늘. |
| 452 | `date_seo_end_d` | 서연 | street | seyoun_shy |  |  | 오늘 괜찮았어. |
| 453 | `pre_confess_minsu` | 민수 | street | minsu_smirk | 0.35 |  | 야, 데이트 중이지? 한마디만 할게 |
| 454 | `pre_confess_minsu_2` | 민수 | street | minsu_smirk | 0.35 |  | 말 돌리지 말고 제대로 해 |
| 455 | `pre_confess_callback` | {name} | street | minsu_smirk |  |  | *주머니 속 핸드폰 모서리가 손바닥에 눌린다. 알림은  |
| 456 | `confess_seo_1` | {name} | top_school | 없음 |  | 🌅 | *데이트가 끝났다. 교문 대신 옥상으로 올라왔다.* |
| 457 | `confess_seo_2` | 서연 | top_school | seyoun_normal |  | 🌅 | 잠깐 올라가자. |
| 458 | `confess_seo_3` | {name} | top_school | seyoun_normal |  | 🌅 | *옥상. 난간 아래 운동장 조명이 켜져 있다. 첫날 서 |
| 459 | `confess_seo_4` | 서연 | top_school | seyoun_normal |  | 🌅 | *서연은 난간에서 한 걸음 떨어져 선다. 열쇠를 주머니 |
| 460 | `confess_seo_4_b` | {name} | top_school | seyoun_normal |  | 🌅 | *주머니 안쪽에서 접힌 메모가 손가락에 걸린다.* |
| 461 | `confess_seo_5` | {name} | top_school | seyoun_normal |  | 🌅 | *메모를 꺼내지 않는다.* |
| 462 | `confess_seo_choice` | {name} | top_school | seyoun_shy2 |  | 🌅 | *열쇠고리만 서연의 손안에서 짧게 울린다.* |
| 463 | `confess_seo_yes_1` | 서연 | top_school | seyoun_normal |  | 🌅 | *열쇠고리 소리가 뚝 멎는다. 서연이 눈을 맞춘다.* |
| 464 | `confess_seo_yes_2` | {name} | top_school | seyoun_normal |  | 🌅 | *목이 마르다. 주머니 안에서 메모가 접힌다.* |
| 465 | `confess_seo_yes_3` | {name} | top_school | seyoun_normal |  | 🌅 | 오늘 이후에도 너랑 만나고 싶어. |
| 466 | `confess_seo_yes_4` | {name} | top_school | seyoun_normal |  | 🌅 | *서연은 바로 대답하지 않는다. 열쇠고리가 손 안에서  |
| 467 | `confess_seo_yes_5` | {name} | top_school | seyoun_worried |  | 🌅 | 지금 대답 안 해도 돼. |
| 468 | `confess_seo_yes_6` | 서연 | top_school | seyoun_normal |  | 🌅 | 그렇게 말하면 더 생각하게 되잖아. |
| 469 | `confess_seo_yes_7` | {name} | top_school | seyoun_shy2 |  | 🌅 | *난간 아래 운동장 조명이 한 줄 더 켜진다. 서연은  |
| 470 | `confess_seo_yes_8` | 서연 | top_school | seyoun_shy2 |  | 🌅 | 나도 계속 봤어. |
| 471 | `confess_seo_yes_9` | 서연 | top_school | seyoun_shy |  | 🌅 | 네가 어디 앉는지, 언제 말이 줄어드는지. |
| 472 | `confess_seo_yes_10` | 서연 | top_school | seyoun_shy |  | 🌅 | *열쇠가 주머니 안으로 들어간다.* |
| 473 | `confess_seo_yes_11` | 서연 | top_school | seyoun_shy2 |  | 🌅 | 내일 점심. 옥상 열어둘게. |
| 474 | `confess_seo_yes_11_b` | 서연 | top_school | seyoun_shy2 |  | 🌅 | *서연이 계단 쪽으로 걷는다.* |
| 475 | `confess_seo_yes_12` | 서연 | top_school | seyoun_shy2 |  | 🌅 | *두 칸 아래에서 발소리가 끊긴다. 서연은 돌아보지 않 |
| 476 | `day4_night_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 옷소매에 공원 흙과 학교 먼지가 조금 |
| 477 | `day4_night_branch` | 시스템 | room_my | 없음 |  |  |  |
| 478 | `day4_student_night_branch` |  | room_my | 없음 |  |  |  |
| 479 | `wall_seo_1` | {name} | room_my | 없음 |  |  | *밤 10시. 서연에게서 전화가 온다. 목소리에 웃음기 |
| 480 | `wall_seo_pre_low_1` | {name} | room_my | seyoun_worried | 0.35 |  | *서연의 대화방에는 마지막 메시지 이후 새 알림이 없다 |
| 481 | `wall_seo_pre_low_1b` | {name} | room_my | seyoun_pout | 0.35 |  | *'서연아, 지금 괜찮아?' 문자를 보낸다. 1분 뒤  |
| 482 | `wall_seo_pre_low_2` | 서연 | room_my | seyoun_sad | 0.35 |  | 문자 봤어. 잠깐 통화 괜찮아? |
| 483 | `wall_seo_2` | 서연 | room_my | seyoun_sad | 0.35 |  | 지금 나올 수 있어? 공원. 미안, 갑자기. |
| 484 | `wall_seo_to_park` | {name} | park | seyoun_normal |  |  | *집을 나서 공원으로 향했다.* |
| 485 | `wall_seo_3` | {name} | park | seyoun_sad |  |  | *공원 벤치에 서연이 앉아 있다. 화장 끝이 조금 번져 |
| 486 | `wall_seo_4` | {name} | park | seyoun_sad |  |  | 서연. 무슨 일이야? |
| 487 | `wall_seo_5` | 서연 | park | seyoun_sad |  |  | ...앉아. |
| 488 | `wall_seo_6` | {name} | park | seyoun_sad |  |  | *옆에 앉는다. 서연은 가로등 불빛이 길게 걸린 안경알 |
| 489 | `wall_seo_7` | 서연 | park | seyoun_sad |  |  | 오늘 엄마한테 전화 왔어. |
| 490 | `wall_seo_7_b` | {name} | park | seyoun_sad |  |  | *공원 도로로 자동차 한 대가 지나간다. 서연은 무릎  |
| 491 | `wall_seo_8` | 서연 | park | seyoun_sad |  |  | 아빠랑 또 싸웠대. |
| 492 | `wall_seo_9` | 서연 | park | seyoun_sad |  |  | *웃다가 금방 입꼬리를 내린다.* |
| 493 | `wall_seo_9_b` | 서연 | park | seyoun_sad |  |  | 우리 집 겉으로는 멀쩡해 보이지? 넓은 집, 좋은 차, |
| 494 | `wall_seo_9_c` | 서연 | park | seyoun_sad |  |  | 근데 엄마 아빠는 1년째 같은 지붕 아래서 남남이야.  |
| 495 | `wall_seo_9_d` | {name} | park | seyoun_sad |  |  | *벤치 아래로 마른 잎 하나가 굴러와 서연의 운동화 앞 |
| 496 | `wall_seo_10` | 서연 | park | seyoun_sad |  |  | 그래서 집에서도 학교에서도 웃었어. 그게 제일 편했거든 |
| 497 | `wall_seo_11` | 서연 | park | seyoun_cry |  |  | 엄마가 그랬어. '네가 무너지면 집도 무너진다'고. |
| 498 | `wall_seo_11_b` | 서연 | park | seyoun_cry |  |  | *입을 다문다. 목이 한 번 움직인다.* |
| 499 | `wall_seo_12` | 서연 | park | seyoun_cry |  |  | 열 살 때. — 열 살짜리한테 그런 말 하는 거야. |
| 500 | `wall_seo_13` | 서연 | park | seyoun_cry |  |  | 그때부터 거울 앞에서 표정 맞췄어. 안 맞으면 다시. |
| 501 | `wall_seo_14` | 서연 | park | seyoun_cry |  |  | 칭찬받을 때마다 거울 앞에서 몇 번 맞췄는지부터 셌어. |
| 502 | `wall_seo_14_b` | 서연 | park | seyoun_sad |  |  | ...근데 너는. |
| 503 | `wall_seo_14_c` | 서연 | park | seyoun_cry |  |  | *말끝이 끊기며 무릎 위 손가락이 서로 파고든다. 안경 |
| 504 | `wall_seo_14_d` | {name} | park | seyoun_cry |  |  | *눈물이 소리 없이 흘러내린다. 손등에 화장 자국이 번 |
| 505 | `wall_seo_hug_choice` | 서연 | park | seyoun_cry |  |  | *번진 화장이 손등에 남아 있고 서연의 어깨가 호흡마다 |
| 506 | `wall_seo_hug_1` | {name} | park | seyoun_cry |  |  | *서연을 안자 어깨에 얼굴을 묻는다. 교복 셔츠 위로  |
| 507 | `wall_seo_hug_2_b` | 서연 | park | seyoun_cry |  |  | 누구 앞에서 우는 거, 오래됐어. |
| 508 | `wall_seo_hug_2_c` | 서연 | park | seyoun_cry |  |  | 8년. — 그동안 혼자 화장실에서만 울었거든. |
| 509 | `wall_seo_hug_3` | 서연 | park | seyoun_cry |  |  | *숨이 어깨에 짧게 부딪힌다.* |
| 510 | `wall_seo_line_choice` | 서연 | park | seyoun_cry |  |  | *손등으로 눈가를 훔친다. 번진 화장 자국이 더 넓어진 |
| 511 | `wall_seo_line_react_3` | 서연 | park | seyoun_cry |  |  | 아는 척하지 마. |
| 512 | `wall_seo_line_react_3_b` | 서연 | park | seyoun_cry |  |  | *눈물을 닦는다.* |
| 513 | `wall_seo_after_line` | 서연 | park | seyoun_sad |  |  | 잠깐만. 물티슈 있어? |
| 514 | `wall_seo_after_line_2` | 서연 | park | seyoun_sad |  |  | *서연이 손등을 내려다본다. 화장이 번져 있다.* |
| 515 | `wall_seo_after_line_3` | {name} | park | seyoun_normal |  |  | 있어. |
| 516 | `wall_seo_after_line_4` | 서연 | park | seyoun_sad |  |  | *주머니에서 꺼낸 물티슈를 받아 든다.* |
| 517 | `wall_seo_after_line_4_b` | 서연 | park | seyoun_sad |  |  | *눈 밑을 닦는다.* |
| 518 | `wall_seo_after_line_5` | 서연 | park | seyoun_normal |  |  | 이제 좀 낫네. 내일은 내가 챙겨야겠다. |
| 519 | `wall_seo_skin_check` |  | park | seyoun_normal |  |  |  |
| 520 | `wall_seo_freetalk` | 서연 | park | seyoun_normal |  | 🌙 | *젖은 눈가를 손등으로 닦고 {name} 쪽을 본다.* |
| 521 | `wall_seo_rival_rank` | 시스템 | park | 없음 |  |  |  |
| 522 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 523 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *알람을 일요일 오전으로 맞추고 방 불을 끈다. 전하지 |
| 524 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안 시계가 자정 쪽으로 넘어간다. 휴대폰 화면도  |
| | **Day 5** | | | | | | |
| 525 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소 |
| 526 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 527 | `morning5_temptation_discovery_branch` |  | room_school | 없음 |  |  |  |
| 528 | `morning5_committed_start` |  | room_school | 없음 |  |  |  |
| 529 | `morning5_committed_seo` | {name} | room_school | seyoun_normal |  |  | *책상 위에 새 쪽지는 없다. 서연의 클립보드는 오늘도 |
| 530 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *행사 준비 시간. 복도를 걷는데 — 빈 교실 앞을 지 |
| 531 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *행사 중간 쉬는 시간. 보건실 앞을 지나간다.* |
| 532 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 533 | `morning5_committed_end` | {name} | room_school | 없음 |  |  | *책상 위 쪽지들을 정리하고 이미 고른 방향의 행사 순 |
| 534 | `tour_seo_1` | {name} | school | seyoun_normal |  |  | *교문 앞에 나란히 선다. 첫날 서연이 기다리고 있던  |
| 535 | `tour_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *복도 끝에서 서연과 마주친다. 서연은 가방끈을 고쳐  |
| 536 | `after5_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 537 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *행사가 끝나갈 무렵, 복도에서 선택하지 않은 두 사람 |
| 538 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 539 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 540 | `after5_farewell_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나가 다가온다. 아무 말 없이 책 한 |
| 541 | `after5_farewell_yuna_low` | 유나 | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나와 눈이 마주친다. 유나는 들고 있 |
| 542 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 543 | `after5_farewell_dain_1` | {name} | gym | dain_normal |  | 🌅 | *체육관 앞에서 다인이 걸어온다. 평소보다 보폭이 작다 |
| 544 | `after5_farewell_dain_low` | 다인 | gym | dain_normal |  | 🌅 | *체육관 앞에서 다인이 걸어오다 두 걸음 떨어진 곳에  |
| 545 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *석양이 교정 창문마다 걸린다. 방송실에서 행사 종료  |
| 546 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 547 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 548 | `ending_affinity_check` | 시스템 | park | 없음 |  |  |  |
| 549 | `ending_aff_check_seo` | 시스템 | top_school | 없음 |  |  |  |
| 550 | `bitter_seo_1` | {name} | park | 없음 |  |  | *한 달쯤 지나, 학교 앞 카페에서 만나자는 연락이 왔 |
| 551 | `bitter_seo_2` | 서연 | cafe | seyoun_normal |  |  | 우리, 너무 조심했어. |
| 552 | `bitter_seo_2_b` | {name} | cafe | seyoun_normal |  |  | *서연은 컵받침 모서리를 맞춘다. 주문한 커피는 반도  |
| 553 | `bitter_seo_3` | {name} | ending_bittersweet | 없음 |  |  | *카페를 나왔다. 비가 내린다. 우산은 하나고 버스 정 |
| 554 | `bitter_epilogue_1` | {name} | ending_bittersweet | 없음 |  |  | *졸업 후. 연락이 뜸해졌다. 한 달에 한 번이 두 달 |
| 555 | `bitter_epilogue_2` | {name} | ending_bittersweet | 없음 |  |  | *5일의 기록은 남았다. 마지막 사진에는 둘 사이에 한 |
| 556 | `bitter_epilogue_3` | 시스템 | ending_bittersweet | 없음 |  |  | ─── BITTERSWEET END ─── |
| 557 | `day5_main_ending_freetalk_router` | {name} | park | 없음 |  |  |  |
| 558 | `day5_seo_ending_freetalk_intro` | {name} | top_school | seyoun_normal |  |  | *옥상. 열린 문 옆에 화분 빈자리가 있다.* |
| 559 | `day5_seo_ending_freetalk_router` | {name} | top_school | 없음 |  |  |  |
| 560 | `day5_seo_ending_freetalk_bittersweet` | 서연 | cafe | seyoun_normal |  | 🌙 | *식어 버린 커피 옆에서 컵받침 모서리를 맞춘다.* 우 |
| 561 | `day5_credits` |  | school | 없음 |  |  |  |
| 562 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### day5_seo_ending_freetalk_good

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_seo_choice`: (선택)
- `after1_jealousy_seo_choice`: (선택)
- `after_end`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_seo_choice`: (선택)
- `after2_choice`: (선택)
- `after2_seo_choice1`: (선택)
- `after2_seo_choice2`: (선택)
- `night2_choice`: (선택)
- `morning3_date_seo_choice`: (선택)
- `lunch3_choice`: (선택)
- `after3_choice`: (선택)
- `after3_seo_choice`: (선택)
- `date_seo_compliment_choice`: (선택)
- `confess_seo_choice`: (선택)
- `wall_seo_hug_choice`: (선택)
- `wall_seo_line_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=52 유나=-8 다인=-4 담임=0 보건=0

<details>
<summary>씬 타임라인 (584씬)</summary>

| # | 씬 ID | 화자 | 배경 | 캐릭터 | OP | 밤 | 대사 (앞 30자) |
|---|--------|------|------|--------|----|----|----------------|
| | **Day 1** | | | | | | |
| 1 | `start` | {name} | school | 없음 |  |  | *4월의 교문 앞. 밟힌 꽃잎이 드문드문 붙어 있다.  |
| 2 | `start_3` | {name} | school | 없음 |  |  | *주머니에서 핸드폰이 울리고 예전 학교 단체 카톡방에  |
| 3 | `name_input_scene` | 시스템 | school | 없음 |  |  | 전학생, 당신의 이름은? |
| 4 | `gate_1` | {name} | school | 없음 |  |  | *낯선 교문 앞, 내 교복만 아직 접힌 선이 선명하다. |
| 5 | `seoyeon_meet_1` | 서연 | school | seyoun_normal |  |  | 전학생? {name} 맞지? |
| 6 | `seoyeon_meet_2` | 서연 | school | seyoun_normal |  |  | *{name}의 이름을 한 번 더 확인한 뒤 클립보드  |
| 7 | `seoyeon_meet_3` | {name} | school | seyoun_normal |  |  | 맞는데. 어떻게 알았어? |
| 8 | `seoyeon_meet_4` | 서연 | school | seyoun_normal |  |  | 학생회장. 전학생 안내는 내 담당이야. |
| 9 | `seoyeon_meet_5` | 서연 | school | seyoun_normal |  |  | 따라와. 15분 안에 끝낼게. |
| 10 | `seoyeon_meet_6` | {name} | school | seyoun_normal |  |  | 학생회장이 직접? 과분한데. |
| 11 | `seoyeon_meet_7` | 서연 | school | seyoun_normal |  |  | 과분한 건지 아닌 건지는 내가 정해. |
| 12 | `seoyeon_meet_8` | {name} | school | seyoun_normal |  |  | *서연은 이미 교문 안쪽으로 걸음을 옮겼다. 안내 파일 |
| 13 | `seoyeon_choice` | {name} | school | seyoun_normal |  |  | *어떻게 반응할까?* |
| 14 | `choice_flirt_1` | 서연 | school | seyoun_normal |  |  | *서연의 구두가 반 바퀴 돌아선다. 안경테 위로 한쪽  |
| 15 | `choice_flirt_2` | 서연 | school | seyoun_laugh |  |  | 첫날부터 말은 잘하네. 이름은 금방 외우겠다. |
| 16 | `choice_flirt_3` | {name} | school | seyoun_laugh |  |  | 점수제야? |
| 17 | `choice_flirt_4` | 서연 | school | seyoun_normal |  |  | 아직 분위기 파악은 안 됐나 봐. 나쁘진 않아. |
| 18 | `choice_flirt_5` | {name} | school | seyoun_normal |  |  | 영광인데? |
| 19 | `choice_flirt_6` | 서연 | school | seyoun_normal |  |  | 아직 영광인지 재앙인지 모르는 거지. |
| 20 | `choice_flirt_7` | 서연 | school | seyoun_laugh |  |  | *앞서 걷는다. 한 번 뒤돌아보고 {name}의 발소리 |
| 21 | `hallway_1` | 서연 | school_hallway | seyoun_back |  |  | *복도를 앞서 걷는다. 마주치는 학생들이 먼저 인사할  |
| 22 | `hallway_3` | 서연 | school_hallway | seyoun_normal |  |  | 3학년 건물은 여기, 저쪽이 도서관. 매점은 지하. |
| 23 | `hallway_4` | 서연 | school_hallway | seyoun_normal |  |  | *주머니에서 열쇠를 꺼내 손바닥 위에서 짤랑거린다.* |
| 24 | `hallway_5` | 서연 | school_hallway | seyoun_normal |  |  | 옥상은 원래 잠겨 있어. 학생회장 특권이지. |
| 25 | `hallway_6` | {name} | school_hallway | seyoun_normal |  |  | 비밀 아지트라도 있어? |
| 26 | `hallway_6_b` | 서연 | school_hallway | seyoun_normal |  |  | *열쇠고리 소리가 뚝 끊긴다.* 눈치 빠르네. |
| 27 | `hallway_6_c` | 서연 | school_hallway | seyoun_normal |  |  | *대답 대신 열쇠를 다시 주머니에 넣는다.* |
| 28 | `hallway_7` | 서연 | school_hallway | seyoun_normal |  |  | 아, 점심. 밥 어디서 먹는지 모르지? 같이 가. |
| 29 | `hallway_8` | {name} | school_hallway | seyoun_shy |  |  | *서연은 교실 앞에 서서 문패를 가리킨다.* |
| 30 | `hallway_10` | 서연 | school_hallway | seyoun_normal |  |  | 여기야. 들어가 봐. |
| 31 | `hallway_11` | {name} | school_hallway | seyoun_normal |  |  | 점심때도 안내해 주는 거야? |
| 32 | `hallway_12` | 서연 | school_hallway | seyoun_normal |  |  | 그건 네가 잘하면. |
| 33 | `hallway_13` | 서연 | school_hallway | seyoun_back |  |  | *돌아선 서연이 클립보드를 든 손만 어깨 높이로 한 번 |
| 34 | `hallway_13_b` | {name} | school_hallway | seyoun_back |  |  | *복도 끝으로 멀어질 때까지 걸음이 흐트러지지 않았다. |
| 35 | `classroom_1` | {name} | room_school | 없음 |  |  | *교실 문을 열자 소음이 뚝 끊기고 가까운 책상 의자  |
| 36 | `classroom_2_b` | {name} | room_school | teacher_normal |  |  | *교탁 앞에 담임선생님이 서 있다. 20대 후반. 가디 |
| 37 | `classroom_3` | 담임 | room_school | teacher_normal |  |  | 자, 오늘부터 우리 반에 들어온 전학생이야. 자기소개  |
| 38 | `classroom_3_b` | {name} | room_school | teacher_normal |  |  | {name}입니다. 잘 부탁드립니다. *담임이 출석부의 |
| 39 | `classroom_5_b` | 담임 | room_school | teacher_normal |  |  | 그래, {name}. 외웠어. *출석부에 이름을 덧그으 |
| 40 | `classroom_5_c` | {name} | room_school | teacher_normal |  |  | *담임의 혼잣말은 교실 소음에 묻힌다. 교실 한쪽에서  |
| 41 | `classroom_dain_1` | 다인 | room_school | dain_normal |  |  | 오, 전학생. 우리 반에 새 얼굴 들어왔네! |
| 42 | `classroom_dain_2` | {name} | room_school | dain_normal |  |  | *갈색 숏컷에 배구부 유니폼. 자리에서 반쯤 일어나 손 |
| 43 | `classroom_dain_3` | 담임 | room_school | teacher_normal |  |  | 다인아, 목소리 낮춰. 그리고 교실에서는 유니폼 좀 그 |
| 44 | `classroom_dain_4` | 다인 | room_school | dain_normal |  |  | 쌤, 이게 제일 편하다니까요. 아무튼 전학생, 반갑다. |
| 45 | `classroom_dain_5` | {name} | room_school | dain_normal |  |  | *교실 몇 군데서 웃음이 터진다. 다인은 손을 더 높이 |
| 46 | `classroom_dain_5_b` | 담임선생님 | room_school | teacher_normal |  |  | *출석부 모서리로 교탁을 두 번 두드리고 다인 쪽을 보 |
| 47 | `classroom_dain_5_c` | 담임 | room_school | teacher_normal |  |  | 에너지 좀 아껴. 아직 1교시도 안 시작했어. |
| 48 | `classroom_dain_5_d` | 담임선생님 | room_school | teacher_angry |  |  | *담임은 출석부를 넘긴다.* |
| 49 | `classroom_yuna_1` | {name} | room_school | yuna_bored |  |  | *창가 맨 뒤쪽의 한 여학생은 턱을 괸 채 창밖만 본다 |
| 50 | `classroom_yuna_2` | {name} | room_school | yuna_bored |  |  | *은백색 머리. 붉은 눈. 팔의 타투. 창가 맨 뒤 자 |
| 51 | `classroom_yuna_4` | {name} | room_school | yuna_bored |  |  | *앞줄에서 누군가 속삭인다. '쟤한테 말 걸지 마. 무 |
| 52 | `classroom_seat_1` | 담임선생님 | room_school | teacher_normal |  |  | *빈자리를 가리킨다.* |
| 53 | `classroom_seat_2` | {name} | room_school | dain_normal |  |  | *다인 옆자리다. 의자에 앉기도 전에 다인이 내 책상  |
| 54 | `classroom_minsu_1` | {name} | room_school | minsu_normal |  |  | *자리에 앉으려는데 — 앞자리 남학생이 돌아본다.* |
| 55 | `classroom_minsu_2` | 민수 | room_school | minsu_smirk |  |  | 야, 전학생. 환영한다. — 그리고 조심해. |
| 56 | `classroom_minsu_3` | {name} | room_school | minsu_smirk |  |  | 뭘? |
| 57 | `classroom_minsu_2_b` | 민수 | room_school | minsu_normal |  |  | *다인 쪽으로 턱짓한다.* 체력 관리. |
| 58 | `classroom_dain_talk_1` | {name} | room_school | minsu_normal |  |  | *앞자리 이름표에는 '민수'라고 적혀 있었다.* |
| 59 | `classroom_dain_talk_2` | {name} | room_school | dain_normal |  |  | *자리에 앉자마자 다인이 상체를 기울인다. 책상 두 개 |
| 60 | `classroom_dain_talk_3` | 다인 | room_school | dain_normal |  |  | 야, {name}. 운동 좋아해? |
| 61 | `classroom_dain_talk_4` | {name} | room_school | dain_normal |  |  | 갑자기? |
| 62 | `classroom_dain_talk_5` | 다인 | room_school | dain_normal |  |  | 그냥. 방과후에 리시브 연습 상대가 필요해서. 서브 넣 |
| 63 | `classroom_dain_talk_6` | {name} | room_school | dain_normal |  |  | 나 볼 머신이야? |
| 64 | `classroom_dain_talk_7` | 다인 | room_school | dain_laugh |  |  | 그래도 볼 머신보단 낫겠지. 아마. |
| 65 | `classroom_dain_talk_8` | {name} | room_school | dain_laugh |  |  | *'아마' 뒤에 다인의 시선이 볼 머신 쪽으로 간다.  |
| 66 | `classroom_yuna_note_1` | {name} | room_school | yuna_bored |  |  | *접힌 쪽지가 책상 위로 미끄러져 온다. 뒤를 돌아봐도 |
| 67 | `classroom_yuna_note_3` | {name} | room_school | yuna_bored |  |  | *'시끄러운 자리 걸렸네. — 유나' 연보라색 잉크.  |
| 68 | `classroom_yuna_note_5` | {name} | room_school | yuna_bored |  |  | *유나 쪽을 보자 시선은 여전히 창밖이고 손만 책상 아 |
| 69 | `classroom_yuna_note_6` | {name} | room_school | yuna_bored |  |  | *수업 종이 울리자 유나는 다시 창밖을 보고 다인은 벌 |
| 70 | `lunch_start` | {name} | school_hallway | 없음 |  |  | *점심시간. 학생들로 찬 복도 끝에는 서연의 도시락 가 |
| 71 | `lunch_start_4` | {name} | school_hallway | seyoun_normal |  |  | *복도 끝에서 서연이 눈을 맞추더니 옥상 쪽을 손으로  |
| 72 | `lunch_start_4_b` | {name} | school_hallway | dain_normal |  |  | *옆에서 다인이 팔목을 낚아챈다.* |
| 73 | `lunch_start_5` | 다인 | school_hallway | dain_normal |  |  | 야, 밥 먹었어? 매점 가자. 빵 내기하자, 진 사람이 |
| 74 | `lunch_start_6` | {name} | school_hallway | yuna_normal |  |  | *유나는 가방만 들고 교실을 빠져나가 도서관 방향으로  |
| 75 | `lunch_start_7` | {name} | school_hallway | 없음 |  |  | *복도는 세 갈래다. 옥상, 매점, 도서관. 주머니 안 |
| 76 | `lunch_choice` | {name} | school_hallway | 없음 |  |  | *누구를 따라갈까?* |
| 77 | `lunch_seo_1` | 서연 | top_school | seyoun_normal |  |  | *옥상 문을 열쇠로 연다. 바람이 확 불어온다.* |
| 78 | `lunch_seo_1_aff_default` | 서연 | top_school | seyoun_normal |  |  | 앉을 거야? |
| 79 | `lunch_seo_2` | {name} | top_school | seyoun_normal |  |  | *옥상 바닥에는 흙 한 줌 보이지 않는다. 물방울 맺힌 |
| 80 | `lunch_seo_3` | 서연 | top_school | seyoun_normal |  |  | 여기가 내 영역이거든. |
| 81 | `lunch_seo_4` | {name} | top_school | seyoun_normal |  |  | 학생회장 전용 옥상이야? |
| 82 | `lunch_seo_5` | 서연 | top_school | seyoun_normal |  |  | 아무나 데려오는 데는 아닌데. *의자를 하나 펼친다.* |
| 83 | `lunch_seo_6` | {name} | top_school | seyoun_normal |  |  | 첫날부터 예외 적용? 뭔가 수상한데. |
| 84 | `lunch_seo_6_b` | 서연 | top_school | seyoun_laugh |  |  | *의자를 발끝으로 밀어 {name} 쪽에 맞춘다.* 의 |
| 85 | `lunch_seo_8` | 서연 | top_school | seyoun_laugh |  |  | *가방에서 같은 크기의 도시락통 두 개, 2인분을 포개 |
| 86 | `lunch_seo_9` | {name} | top_school | seyoun_normal |  |  | 2인분인데? |
| 87 | `lunch_seo_10` | 서연 | top_school | seyoun_normal |  |  | 학생회 일 하다 보면 밥 먹을 시간이 없어져서. 항상  |
| 88 | `lunch_seo_11` | {name} | top_school | seyoun_normal |  |  | *도시락 뚜껑을 열자 반찬이 줄 맞춰 놓여 있다. 계란 |
| 89 | `lunch_seo_13` | {name} | top_school | seyoun_normal |  |  | 직접 만든 거야? |
| 90 | `lunch_seo_14` | 서연 | top_school | seyoun_normal |  |  | 학생회장이 밥도 못 싸면 말이 안 되지. |
| 91 | `lunch_seo_15` | {name} | top_school | seyoun_normal |  |  | 그건 답이 아닌데. |
| 92 | `lunch_seo_16` | 서연 | top_school | seyoun_normal |  |  | *젓가락을 건넨다.* 먹어. 식으면 맛없어. |
| 93 | `lunch_seo_17` | 서연 | top_school | seyoun_normal |  |  | *대답 대신 밥을 먹는다. 난간 너머로 운동장과 별관  |
| 94 | `lunch_seo_19` | 서연 | top_school | seyoun_normal |  |  | 어때, 이 학교? |
| 95 | `lunch_seo_20` | {name} | top_school | seyoun_normal |  |  | 밥은 맛있어. |
| 96 | `lunch_seo_21` | 서연 | top_school | seyoun_laugh |  |  | *젓가락 끝이 도시락 칸막이를 가볍게 친다.* 학교를  |
| 97 | `lunch_seo_22` | 서연 | top_school | seyoun_laugh |  |  | *계란말이를 집어 내민다.* |
| 98 | `lunch_seo_23` | 서연 | top_school | seyoun_normal |  |  | 한 입만. |
| 99 | `lunch_seo_choice` | 서연 | top_school | seyoun_normal |  |  | *계란말이를 내밀고 있다.* |
| 100 | `lunch_seo_c1_1` | {name} | top_school | seyoun_normal |  |  | *서연의 젓가락에서 계란말이를 받아먹는다.* |
| 101 | `lunch_seo_c1_2` | {name} | top_school | seyoun_normal |  |  | 맛있다. |
| 102 | `lunch_seo_c1_2_b` | 서연 | top_school | seyoun_normal |  |  | *물병을 들어 입가를 가린다. 라벨이 손안에서 구겨진다 |
| 103 | `lunch_seo_c1_3` | 서연 | top_school | seyoun_shy |  |  | 그 정도는 해야지. |
| 104 | `lunch_seo_c1_3_b` | {name} | top_school | seyoun_shy |  |  | *반쯤 접힌 라벨이 물병에 붙어 있다. 서연은 다시 젓 |
| 105 | `lunch_seo_after` | {name} | top_school | seyoun_normal |  |  | *운동장 스피커에서 점심 종료를 알리는 예비음이 울린다 |
| 106 | `lunch_seo_after_2` | 서연 | top_school | seyoun_normal |  |  | 다음에도 점심시간 비워둬. |
| 107 | `lunch_seo_after_3` | {name} | top_school | seyoun_normal |  |  | 초대해 주는 거야? |
| 108 | `lunch_seo_after_4` | 서연 | top_school | seyoun_normal |  |  | 아니. 허가해 주는 거야. |
| 109 | `lunch_seo_after_5` | 서연 | top_school | seyoun_normal |  |  | *도시락 끈을 한 번 묶었다가 더 짧게 조인다.* |
| 110 | `lunch_seo_after_7` | {name} | top_school | seyoun_normal |  |  | *도시락 매듭이 처음보다 단단해져 있다.* |
| 111 | `lunch_seo_freetalk` | 서연 | top_school | seyoun_normal |  |  | *도시락 뚜껑을 정리하고 접이식 의자를 신발 끝으로 한 |
| 112 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *종이 울린다. 점심시간이 끝났다.* |
| 113 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에 |
| 114 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 115 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창 |
| 116 | `after_kakao_5` | {name} | school_hallway | 없음 |  | 🌅 | *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른 |
| 117 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록  |
| 118 | `after1_jealousy_seo_1` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 점심때 어디 갔어? 매점 갔는데 없더라. |
| 119 | `after1_jealousy_seo_2` | {name} | school_hallway | dain_normal |  | 🌅 | *답장창에 '서연이랑'까지 썼다가 지운다. 커서만 다시 |
| 120 | `after1_jealousy_seo_3` | 다인 | school_hallway | dain_pout |  | 🌅 | 옥상에서 내려오는 거 봤거든. 둘이서? |
| 121 | `after1_jealousy_seo_choice` | 다인 | school_hallway | dain_pout |  | 🌅 | *휴대폰을 쥔 손에 힘을 준다.* |
| 122 | `after1_jealousy_seo_lie` | {name} | school_hallway | dain_normal |  | 🌅 | 아니, 그냥 혼자 돌아다녔어. |
| 123 | `after1_jealousy_seo_lie_2` | 다인 | school_hallway | dain_laugh |  | 🌅 | 진짜? 혼자? — 아 그래, 첫날이니까 헤맸겠다! |
| 124 | `after1_jealousy_seo_yuna` | {name} | school_hallway | dain_normal |  | 🌅 | *가방 옆주머니에 접힌 쪽지가 걸려 있다. 유나의 필체 |
| 125 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *복도를 계속 걷는다.* |
| 126 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도를 걷는데 뒤에서 쿵쿵 발소리.* |
| 127 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 조심! |
| 128 | `after_miss_dain_3` | {name} | school_hallway | dain_normal |  | 🌅 | *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 |
| 129 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 피했다? 반사신경 괜찮은데. |
| 130 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 넌 복도에서 왜 전력질주야? |
| 131 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 늦었거든! 체육관 가야 해. 내일 보자, 전학생! |
| 132 | `after_miss_dain_6_b` | {name} | school_hallway | dain_laugh |  | 🌅 | *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을  |
| 133 | `after_miss_dain_7` | {name} | school_hallway | dain_laugh |  | 🌅 | *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아 |
| 134 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으 |
| 135 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 이거 떨어뜨렸어. |
| 136 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피 |
| 137 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌  |
| 138 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 고마워. |
| 139 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피를 책등 사이에 끼우고 돌아선다.* |
| 140 | `after_miss_yuna_4` | {name} | library_old | yuna_normal |  | 🌅 | *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 |
| 141 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든 |
| 142 | `night_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄 |
| 143 | `night_start_3` | {name} | room_my | 없음 |  |  | *핸드폰이 울린다. 학교 메신저.* |
| 144 | `night_msg_seo_1` | 서연 | room_my | seyoun_normal | 0.35 |  | *오늘 옥상 어땠어?* |
| 145 | `night_msg_seo_2` | {name} | room_my | seyoun_normal | 0.35 |  | *바람이 좋더라* |
| 146 | `night_msg_seo_3` | 서연 | room_my | seyoun_normal | 0.35 |  | *다음엔 음료 정도는 준비해 놓을게* |
| 147 | `night_msg_seo_4` | 서연 | room_my | seyoun_normal | 0.35 |  | *서비스야* |
| 148 | `night_msg_seo_5` | {name} | room_my | seyoun_normal | 0.35 |  | *'서비스야'를 일부러 한 줄 띄어서 보냈다.* |
| 149 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 다른 알림이 보인다.* |
| 150 | `night_late_transition` | {name} | room_my | 없음 |  |  | *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시 |
| 151 | `night_late_branch` | {name} | room_my | 없음 |  |  | *화면이 밝아진다.* |
| 152 | `night_seo_late_1` | 서연 | room_my | seyoun_normal | 0.35 |  | *내일 학교에서 봐.* |
| 153 | `night_seo_late_2` | 서연 | room_my | seyoun_normal | 0.35 |  | *안 오면 찾으러 갈 거야* |
| 154 | `night_seo_late_3` | {name} | room_my | seyoun_normal | 0.35 |  | *휴대폰을 내려놓자 잠금화면에 내일 등교 시간이 남는다 |
| 155 | `night_end_1` | {name} | room_my | 없음 |  |  | *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교 |
| 156 | `night_end_3` | {name} | room_my | 없음 |  |  | *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을  |
| | **Day 2** | | | | | | |
| 157 | `morning2_start` | {name} | room_school | 없음 |  |  | *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.* |
| 158 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 159 | `morning2_greet_seo_1` |  | 없음 | 없음 |  |  |  |
| 160 | `morning2_greet_seo_1_roof` | 서연 | room_school | seyoun_normal |  |  | 어제 옥상에서 한 말, 아직 유효한 거지? |
| 161 | `morning2_greet_seo_2` | {name} | room_school | seyoun_normal |  |  | *클립보드를 오늘도 팔 안쪽에 붙인 서연이 먼저 다가온 |
| 162 | `morning2_greet_seo_others_2` | {name} | room_school | seyoun_normal |  |  | *서연이 클립보드를 한 번 두드린다.* |
| 163 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *자리에 앉으려는데 — 책상 위에 접힌 쪽지가 하나 놓 |
| 164 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 165 | `morning2_note_3` | {name} | room_school | yuna_normal | 0.35 |  | *어제와 같은 글씨. 아래쪽에 장소가 적혀 있다. '도 |
| 166 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가다 교실 안을 들여다본다.* 어제 잘 잤 |
| 167 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 학생회장이 교실까지 인사하러 와? |
| 168 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 순찰이야. — 출석률 확인 겸. |
| 169 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | *복도로 돌아가기 직전 클립보드 끝이 문틀에 한 번 닿 |
| 170 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연이 사라진 복도를 바라보는데 — 뒤에서 민수가 돌 |
| 171 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 이틀 만에 학생회장이 인사하러 오냐? 나 1 |
| 172 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 인기가 없는 거 아닐까. |
| 173 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 그건 맞는데 그게 중요한 게 아니잖아. |
| 174 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *다인은 서연의 뒷모습이 교실 안으로 사라질 때까지 바 |
| 175 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 회장님도 우리 전학생한테 관심 있어? 인기 많네! |
| 176 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | '우리' 전학생? |
| 177 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 내가 먼저 봤잖아. 그럼 우리 맞지. 찜한 거. |
| 178 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *쉬는 시간. 복도로 나왔다.* |
| 179 | `morning2_break_1` | {name} | school_hallway | 없음 |  |  | *서연의 클립보드 끝이 책상에 톡 닿는다. 답할 틈도  |
| 180 | `morning2_seo_dust_1` | {name} | school_hallway | seyoun_normal |  |  | *1교시가 끝난 쉬는 시간, 복도에서 서연과 스친다.  |
| 181 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 잠깐. |
| 182 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *손이 {name}의 어깨에 닿는다. 먼지를 두 번 털 |
| 183 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 옷에 뭐 묻었어. |
| 184 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | *서연의 손이 떨어진 자리에서 가방끈이 비뚤어져 있다. |
| 185 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 왜 그래? 먼지잖아. |
| 186 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *어깨의 먼지는 없어졌는데 가방끈을 두 번이나 다시 고 |
| 187 | `morning2_dain_react_2` | {name} | school_hallway | dain_angry |  |  | *서연이 클립보드를 고쳐 끼고 복도로 간다. 뒤에서 다 |
| 188 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 지금 뭐야? 어깨 만진 거야? |
| 189 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 먼지 털어준 거야. |
| 190 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 먼지가 진짜 있긴 했어? |
| 191 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | *대답 대신 가방끈을 고쳐 잡았다. 다인은 그걸 보고도 |
| 192 | `morning2_end` | {name} | school_hallway | seyoun_normal |  |  | *민수 말로는 1년 동안 먼저 인사한 적도 없다던 서연 |
| 193 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *점심. 주머니에는 유나의 쪽지가 있고 복도 끝에서는  |
| 194 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *누구와 함께할까.* |
| 195 | `lunch2_seo_1_check` | {name} | school_hallway | 없음 |  |  | *옥상으로 올라간다.* |
| 196 | `lunch2_seo_1` | {name} | top_school | seyoun_normal |  |  | *옥상. 어제와 같은 장소. 서연이 도시락을 펼치고 있 |
| 197 | `lunch2_seo_2` | 서연 | top_school | seyoun_normal |  |  | 또 왔네. 맛 들렸나 봐. |
| 198 | `lunch2_seo_3` | {name} | top_school | seyoun_normal |  |  | 밥이 맛있었으니까. |
| 199 | `lunch2_seo_4` | 서연 | top_school | seyoun_laugh |  |  | 밥 때문이야? |
| 200 | `lunch2_seo_5` | {name} | top_school | seyoun_laugh |  |  | 바람도 좋고. |
| 201 | `lunch2_seo_6` | 서연 | top_school | seyoun_normal |  |  | 바람이라. |
| 202 | `lunch2_seo_7` | {name} | top_school | seyoun_normal |  |  | *서연이 도시락 뚜껑을 여는 순간 옥상 문이 철컥 열린 |
| 203 | `lunch2_seo_9` | 다인 | top_school | dain_normal |  |  | 여기 있었네. 찾았다. 오늘도 나 빼고 먹으려고? |
| 204 | `lunch2_seo_10` | 서연 | top_school | seyoun_normal |  |  | 옥상은 허가제야. 그리고 오늘 점심은 내가 먼저 잡았고 |
| 205 | `lunch2_seo_11` | 다인 | top_school | dain_normal |  |  | 그럼 난 지금부터 끼면 되겠네. 나도 앉는다? |
| 206 | `lunch2_seo_12` | {name} | top_school | dain_normal |  |  | *다인이 빈자리에 바로 앉는다. 서연의 젓가락이 계란말 |
| 207 | `lunch2_seo_13b` | 다인 | top_school | dain_normal |  |  | 반가워요, 회장님. 그런데 옆자리는 비었죠? |
| 208 | `lunch2_seo_13b_b` | 서연 | top_school | seyoun_normal |  |  | *서연이 도시락을 {name} 쪽으로 더 붙인다.* 자 |
| 209 | `lunch2_seo_14` | 서연 | top_school | seyoun_normal |  |  | *다인이 앉으려 하자 빈 의자를 발끝으로 자기 쪽에 붙 |
| 210 | `lunch2_seo_15` | {name} | top_school | seyoun_normal |  |  | 같은 반이잖아. 너희 둘도 이제 아는 사이고. |
| 211 | `lunch2_seo_16` | 서연 | top_school | seyoun_normal |  |  | 친해지는 것하고 양보하는 건 다르지. |
| 212 | `lunch2_seo_17` | 다인 | top_school | dain_normal |  |  | 그럼 나도 양보 안 해. 다음 쉬는 시간에 체육관 와. |
| 213 | `lunch2_seo_19` | 서연 | top_school | seyoun_normal |  |  | {name}, 지금 내 앞에서 다음 약속 잡는 거야? |
| 214 | `lunch2_seo_20` | 서연 | top_school | seyoun_normal |  |  | 대답은 나중에 해. 일단 입가에 뭐 묻었어. 가만있어  |
| 215 | `lunch2_seo_choice` | 서연 | top_school | seyoun_normal |  |  | *물티슈를 감은 손가락이 입가로 다가온다.* |
| 216 | `lunch2_seo_c1_1` | 서연 | top_school | seyoun_normal |  |  | *물티슈로 밥풀을 떼어내고 사용한 쪽을 안으로 접는다. |
| 217 | `lunch2_seo_c1_2` | 서연 | top_school | seyoun_normal |  |  | 됐어. |
| 218 | `lunch2_seo_c1_2_b` | 다인 | top_school | dain_normal |  |  | *다인은 도시락으로 뻗던 손을 공중에 둔 채 둘을 번갈 |
| 219 | `lunch2_seo_c1_3` | 다인 | top_school | dain_normal |  |  | 밥풀을 직접 떼어줘요? |
| 220 | `lunch2_seo_c1_3_b` | 서연 | top_school | seyoun_normal |  |  | *물티슈를 네모로 접는다.* 밥풀이었어. |
| 221 | `lunch2_seo_c1_4` | 서연 | top_school | seyoun_shy |  |  | 그게 다야. |
| 222 | `lunch2_seo_c1_5` | {name} | top_school | seyoun_shy |  |  | *서연은 물병을 집어 들지만 뚜껑은 열지 않는다. 라벨 |
| 223 | `lunch2_seo_end_c1` | {name} | top_school | seyoun_shy |  |  | *다인이 접이식 의자 다리를 운동화 끝으로 두 번 건드 |
| 224 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *방과후. 핸드폰에 알림이 두 개 와 있다.* |
| 225 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 체육관 와. 오늘은 진짜 내기다. |
| 226 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 학생회실에 올 수 있어? 일손이 부족해서. |
| 227 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게서는 아무 연락이 없다. 가방을 챙기자 주머니 |
| 228 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *어디로 갈까.* |
| 229 | `after2_seo_1` | {name} | student_room | seyoun_sad |  | 🌅 | *학생회실. 서연은 서류 더미 앞에 혼자 앉아 있다.* |
| 230 | `after2_seo_2` | 서연 | student_room | seyoun_normal |  | 🌅 | 와 줬네. — 솔직히 안 올 줄 알았어. |
| 231 | `after2_seo_3` | {name} | student_room | seyoun_laugh |  | 🌅 | 부르면 가는 타입이야. |
| 232 | `after2_seo_4` | 서연 | student_room | seyoun_normal |  | 🌅 | *클립보드 모서리로 빈 의자를 가리킨다.* 순종적이네. |
| 233 | `after2_seo_4_b` | 서연 | student_room | seyoun_sad |  | 🌅 | *클립보드를 {name} 쪽으로 돌린다. 할 일 목록  |
| 234 | `after2_seo_5` | {name} | student_room | seyoun_normal |  | 🌅 | 도와달라고 한 건 너잖아. |
| 235 | `after2_seo_6` | 서연 | student_room | seyoun_normal |  | 🌅 | 부탁이 아니라 기회를 준 거야. |
| 236 | `after2_seo_6_b` | {name} | student_room | seyoun_normal |  | 🌅 | *서류 정리를 시작한다. 행사 예산안, 동아리 신청서. |
| 237 | `after2_seo_7` | 서연 | student_room | seyoun_normal |  | 🌅 | *바로 돌아서지 않고 클립보드를 문 쪽으로 든 채 기다 |
| 238 | `after2_seo_8` | 서연 | student_room | seyoun_normal |  | 🌅 | 이쪽은 날짜순, 저쪽은 동아리별. — 정리하는 건 잘해 |
| 239 | `after2_seo_8a2` | {name} | student_room | seyoun_normal |  | 🌅 | 잘하진 않는데 못하지도 않아. |
| 240 | `after2_seo_8a3` | 서연 | student_room | seyoun_normal |  | 🌅 | 애매하네. |
| 241 | `after2_seo_8a4` | {name} | student_room | seyoun_normal |  | 🌅 | 칭찬이랑 비슷하잖아. 너도 애매하게 하니까. |
| 242 | `after2_seo_8b` | 서연 | student_room | seyoun_normal |  | 🌅 | *서류를 넘기던 손을 놓고 {name} 쪽을 본다.* |
| 243 | `after2_seo_8b2` | 서연 | student_room | seyoun_sad |  | 🌅 | 너, 쓸 만하네. |
| 244 | `after2_seo_8b3` | {name} | student_room | seyoun_normal |  | 🌅 | 그건 칭찬이야? |
| 245 | `after2_seo_8b4` | 서연 | student_room | seyoun_shy |  | 🌅 | 칭찬이야. 받아 둬. |
| 246 | `after2_seo_8b4_b` | 서연 | student_room | seyoun_shy |  | 🌅 | *칭찬이라고 말해놓고 바로 서류를 정리한다. 목을 돌리 |
| 247 | `after2_seo_choice1` | {name} | student_room | seyoun_normal |  | 🌅 | *블라인드 틈으로 들어온 주황색 줄이 서류 위를 가른다 |
| 248 | `after2_seo_sunset_joke` | 서연 | student_room | seyoun_shy2 |  | 🌅 | *안경이 코끝으로 조금 내려오고 펜 끝이 날짜 칸 밖으 |
| 249 | `after2_seo_sunset_joke_b` | 서연 | student_room | seyoun_normal |  | 🌅 | *서류 끝을 세워 입가를 가리는 사이 펜 뚜껑이 책상  |
| 250 | `after2_seo_sunset_react` | 서연 | student_room | seyoun_shy2 |  | 🌅 | 그런 말을 그렇게 툭 던지면, 받아 적을 시간도 없잖아 |
| 251 | `after2_seo_sunset_react_b` | 서연 | student_room | seyoun_normal |  | 🌅 | *서류 끝으로 입가를 가린 채 창틀의 주황색 줄을 펜  |
| 252 | `after2_seo_9` | {name} | student_room | seyoun_normal |  | 🌅 | *블라인드 그림자가 책상 끝까지 길어질 무렵 서류 정리 |
| 253 | `after2_seo_choice2` | {name} | student_room | seyoun_normal |  | 🌅 | *서류 정리가 거의 끝났다.* |
| 254 | `after2_seo_leave` | 서연 | student_room | seyoun_normal |  | 🌅 | *완성된 서류 더미를 양손으로 한 번 눌러 맞춘다.* |
| 255 | `after2_seo_end` | {name} | school_hallway | seyoun_normal |  | 🌅 | *학생회실을 나서자 복도 자동등이 앞에서부터 한 칸씩  |
| 256 | `after2_seo_skinship_1` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *서연이 손을 뻗어 옷깃의 먼지를 떼는 순간 손등이 목 |
| 257 | `after2_seo_skinship_2` | 서연 | school_hallway | seyoun_shy |  | 🌅 | *손가락이 셔츠 깃에 닿은 채 떨어지지 않는다. 청소  |
| 258 | `after2_seo_skinship_3` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 먼지 묻었어. |
| 259 | `after2_seo_return` | {name} | school | seyoun_normal |  | 🌅 | *학생회실을 나섰다. 교문 쪽으로 걸어간다.* |
| 260 | `after2_group_seoyeon_companion` | 서연과 동행 | student_room | 없음 |  | 🌅 | *서연이 겹쳐 적힌 일정 두 칸을 손끝으로 짚는다. 맞 |
| 261 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.* |
| 262 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 263 | `night2_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저  |
| 264 | `night2_msg_1` | {name} | room_my | 없음 |  |  | *세 명에게서 메시지가 왔다.* |
| 265 | `night2_msg_seo_specific` | 서연 | room_my | seyoun_normal | 0.35 |  | 오늘 고마웠어. 덕분에 일찍 끝났어 |
| 266 | `night2_msg_seo_specific_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 다음에도 부를지도 모르니까, 각오해 둬 |
| 267 | `night2_msg_dain_general` | 다인 | room_my | dain_normal | 0.35 |  | 야, 내일 매점 가자! 오늘 못 간 거 아직 아쉽거든! |
| 268 | `night2_msg_dain_general_merge` | 서연 | room_my | seyoun_normal | 0.35 |  | 점심에 옥상 올래? 바람 좋을 거야 |
| 269 | `night2_msg_yuna_general` | 유나 | room_my | yuna_normal | 0.35 |  | 내일 별관 올 거야? |
| 270 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에  |
| 271 | `night2_choice` | {name} | room_my | 없음 |  |  | *누구에게 먼저 답장할까?* |
| 272 | `night2_reply_dain_1` | {name} | room_my | dain_normal | 0.35 |  | 떡볶이 매웠어 ㅋㅋ |
| 273 | `night2_reply_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | 매운 거 못 먹는 거야? |
| 274 | `night2_reply_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | 내일은 순한 맛으로 가자. |
| 275 | `night2_reply_dain_4` | 다인 | room_my | dain_normal | 0.35 |  | 아 근데 순한 맛은 떡볶이가 아니지ㅋㅋ |
| 276 | `night2_reply_dain_5` | {name} | room_my | dain_normal | 0.35 |  | *또 세 줄 연속이다.* |
| 277 | `night2_reply_dain_react_default` | 다인 | room_my | dain_normal | 0.35 |  | ㅋㅋ 알겠어. 굿나잇! |
| 278 | `night2_dain_freetalk` | 다인 | room_my | dain_normal | 0.35 | 🌙 | 잠깐, 진짜 자기 전에. 오늘 제일 재밌었던 건 뭐였어 |
| 279 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 또 다른 알림이 보인다.* |
| 280 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 보내고 핸드폰을 내려놓았다.* |
| 281 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이,  |
| 282 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 |
| 283 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *메모장에 줄줄이 남은 보내지 않은 문장. '선생님,  |
| 284 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 메모가 마지막이다. 그 아래 39번째에는 제 |
| 285 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 |
| 286 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로 |
| 287 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보 |
| 288 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화 |
| 289 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 |
| 290 | `night2_end_2_b` | {name} | room_my | 없음 |  |  | *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있 |
| 291 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.* |
| 292 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을  |
| 293 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 |
| | **Day 3** | | | | | | |
| 294 | `morning3_start` | {name} | school | 없음 |  |  | *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯 |
| 295 | `morning3_start_2` | {name} | school | 없음 |  |  | *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군 |
| 296 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 297 | `morning3_seo_gate_1` | {name} | school | seyoun_normal |  |  | *교문 앞의 서연은 지각 종이 울리기 직전인데도 발을  |
| 298 | `morning3_seo_gate_2` | 서연 | school | seyoun_normal |  |  | 늦었네. |
| 299 | `morning3_seo_gate_3` | {name} | school | seyoun_normal |  |  | 서연? 왜 여기 있어? |
| 300 | `morning3_seo_gate_4` | 서연 | school | seyoun_normal |  |  | 지각하면 어때. 혼자 혼나는 것보단 낫잖아. |
| 301 | `morning3_seo_gate_5` | {name} | school | seyoun_laugh |  |  | 그건 아닌데. |
| 302 | `morning3_seo_gate_6` | 서연 | school | seyoun_normal |  |  | 농담이야. 같이 늦은 이유는 내가 설명할게. |
| 303 | `morning3_seo_gate_6_b` | 서연 | school | seyoun_normal |  |  | *서연은 학생회 일정표를 꺼내 교문 담당 교사에게 보여 |
| 304 | `morning3_seo_gate_7` | 서연 | school | seyoun_normal |  |  | *확인 도장을 받은 일정표를 접고 교문 안으로 들어간다 |
| 305 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실에 들어서자 서연의 펜이 멈추고 다인의 의자가 뒤 |
| 306 | `morning3_react_seo_1` | 다인 | room_school | dain_normal |  |  | 야, 회장님이랑 같이 왔어? 아침부터? |
| 307 | `morning3_react_seo_2` | 유나 | room_school | yuna_bored |  |  | *창밖을 보던 유나가 유리창에 비친 {name}을 확인 |
| 308 | `morning3_date_intro` | {name} | room_school | 없음 |  |  | *1교시가 끝났다. 쉬는 시간마다 누군가 말을 건다.* |
| 309 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *쉬는 시간, 복도로 나왔다. 서연이 먼저 걸음을 맞춘 |
| 310 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | 이번 주말에 시간 있어? 공원에 같이 가자. |
| 311 | `morning3_date_seo_choice` | 서연 | school_hallway | seyoun_normal |  |  | *서연이 교실 문 앞에서 묻는다. 다인이 들고 있던 물 |
| 312 | `morning3_date_seo_decline` | {name} | school_hallway | seyoun_normal |  |  | *서연의 제안을 거절하자 다인이 돌리던 물병 뚜껑을 다 |
| 313 | `morning3_date_seo_decline_b` | {name} | room_school | seyoun_normal |  |  | *교실로 돌아왔다. 수업 하나가 지나고 또 쉬는 시간이 |
| 314 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼  |
| 315 | `morning3_date_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 배구공을 옆구리에 낀 채 이쪽을 보다가 코트로 |
| 316 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다 |
| 317 | `morning3_date_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 접어 둔 쪽지를 꺼내려다 다시 책갈피 사이에  |
| 318 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 319 | `morning3_end` | {name} | room_school | 없음 |  |  | *수업 종료 종이 울리고 곧 점심시간이 된다.* |
| 320 | `morning3_end_b` | 유나 | room_school | yuna_normal |  |  | 맛있네. |
| 321 | `lunch3_start` | {name} | room_school | yuna_normal |  |  | *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. |
| 322 | `lunch3_start_2_b` | 다인 | room_school | dain_normal |  |  | *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가 |
| 323 | `lunch3_meal_1` | 다인 | room_school | dain_laugh |  |  | 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고  |
| 324 | `lunch3_meal_2` | {name} | room_school | dain_laugh |  |  | 그건 내 거... |
| 325 | `lunch3_meal_3` | 서연 | room_school | seyoun_normal |  |  | 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점 |
| 326 | `lunch3_meal_4` | {name} | room_school | seyoun_normal |  |  | 점수 매기지 마. |
| 327 | `lunch3_meal_5` | 서연 | room_school | seyoun_normal |  |  | 10점 만점이야. 나쁜 거 아닌데? |
| 328 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다 |
| 329 | `lunch3_meal_7` | {name} | room_school | seyoun_normal |  |  | 유나, 그건 내가 제일 좋아하는 건데. |
| 330 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임 |
| 331 | `lunch3_meal_8` | {name} | room_school | yuna_bored |  |  | *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다. |
| 332 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. |
| 333 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓 |
| 334 | `lunch3_meal_11` | {name} | room_school | yuna_bored |  |  | *누구에게 줄까?* |
| 335 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *마지막 반찬을 누구에게 줄지 고민한다.* |
| 336 | `lunch3_share_1` | {name} | room_school | yuna_bored |  |  | *다 같이 나눠 먹자고 하자 셋이 웃는다. 웃음이 끊긴 |
| 337 | `lunch3_share_solo` | {name} | room_school | yuna_normal |  |  | *셋이 계란말이를 조금씩 나눠 먹는다. 반으로 갈린 마 |
| 338 | `lunch3_end` | {name} | room_school | 없음 |  |  | *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다 |
| 339 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육 |
| 340 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다 |
| 341 | `after3_choice` | {name} | school_hallway | 없음 |  | 🌅 | *어디로 갈까.* |
| 342 | `after3_reject_for_seo_1` | {name} | school_hallway | dain_sad |  | 🌅 | *복도에서 마주친 다인은 먼저 손을 흔들지 않고 운동화 |
| 343 | `after3_reject_for_seo_2` | 다인 | school_hallway | dain_sad |  | 🌅 | 오늘 체육관 안 올 거지? |
| 344 | `after3_reject_for_seo_3` | {name} | library_old | yuna_sad | 0.35 | 🌅 | *도서관 옆을 지나자 유나 자리에 연보라색 쪽지 하나만 |
| 345 | `after3_reject_for_seo_3b` | {name} | library_old | 없음 |  | 🌅 | *유나의 책이 없다. 늘 책상에 두던 1권도, 빌려주겠 |
| 346 | `after3_reject_for_seo_3c` | {name} | library_old | 없음 |  | 🌅 | *책갈피도, 빌려주겠다던 2권도 없다. 책상 위에는 유 |
| 347 | `after3_reject_for_seo_4` | {name} | school_hallway | 없음 |  | 🌅 | *복도로 나왔다. 다인의 문장 끝은 조용했고 유나의 자 |
| 348 | `after3_seo_1` | {name} | student_room | seyoun_sad |  | 🌅 | *학생회실 문을 열자 서연이 책상에 엎드린 채다. 바닥 |
| 349 | `after3_seo_3` | 서연 | student_room | seyoun_sad |  | 🌅 | *문 여는 소리에 서연이 몸을 일으킨다. 눈 밑의 화장 |
| 350 | `after3_seo_4` | 서연 | student_room | seyoun_sad |  | 🌅 | *서연이 바닥의 클립보드를 발끝으로 책상 밑에 밀어 넣 |
| 351 | `after3_seo_5` | {name} | student_room | seyoun_sad |  | 🌅 | 서연? |
| 352 | `after3_seo_5_b` | 서연 | student_room | seyoun_normal |  | 🌅 | *서연이 손가락으로 머리카락을 빗어 내린다.* 봤어? |
| 353 | `after3_seo_6` | 서연 | student_room | seyoun_sad |  | 🌅 | *서연이 헛기침을 한 번 한다.* 아무것도 아니야. 잊 |
| 354 | `after3_seo_7` | {name} | student_room | seyoun_sad |  | 🌅 | 뭘 봤다고. |
| 355 | `after3_seo_7_b` | 서연 | student_room | seyoun_sad |  | 🌅 | *서연이 손등으로 번진 화장을 가린다.* 이런 거 보여 |
| 356 | `after3_seo_8` | 서연 | student_room | seyoun_sad |  | 🌅 | 이런 모습. 비밀로 해줘. |
| 357 | `after3_seo_9` | 서연 | student_room | seyoun_sad |  | 🌅 | *서연은 허리를 세우고 클립보드를 무릎 위에 올린다.  |
| 358 | `after3_seo_choice` | 서연 | student_room | seyoun_sad |  | 🌅 | 오늘 본 건 여기까지만 해줘. 대신 지금은 평소처럼 대 |
| 359 | `after3_seo_correct_1` | 서연 | student_room | seyoun_sad |  | 🌅 | *클립보드 가장자리가 손안에서 휘어진다. 서연은 다음  |
| 360 | `after3_seo_correct_2` | {name} | student_room | seyoun_worried |  | 🌅 | *허리를 굽혀 펜을 줍는 척 책상 밑을 더듬는다. 일부 |
| 361 | `after3_seo_correct_3` | {name} | student_room | seyoun_normal |  | 🌅 | 어, 여기 있네. 회장님 학생회실은 펜이 잘 없어지는  |
| 362 | `after3_seo_correct_4` | {name} | student_room | seyoun_worried |  | 🌅 | *몸을 일으키자 서연이 화장 자국을 닦던 손등에 검은  |
| 363 | `after3_seo_correct_5` | 서연 | student_room | seyoun_normal |  | 🌅 | 학생회실 펜 없어지는 거 진짜 미스터리야. 1년에 30 |
| 364 | `after3_seo_correct_6` | {name} | student_room | seyoun_normal |  | 🌅 | 학생회장이 그것도 못 잡아? |
| 365 | `after3_seo_correct_7` | 서연 | student_room | seyoun_laugh |  | 🌅 | *서연의 코웃음이 짧게 샌다.* 잡으면 학생들이 학생회 |
| 366 | `after3_seo_correct_8` | {name} | student_room | seyoun_pout |  | 🌅 | *서연이 안경을 고쳐 쓰는 동안에도 쓸데없는 펜 이야기 |
| 367 | `after3_seo_correct_9` | 서연 | student_room | seyoun_normal |  | 🌅 | {name}. |
| 368 | `after3_seo_correct_10` | {name} | student_room | seyoun_normal |  | 🌅 | 응. |
| 369 | `after3_seo_correct_11` | 서연 | student_room | seyoun_shy |  | 🌅 | 펜 줍는 거. 다음에도 가끔 줍게. |
| 370 | `after3_seo_correct_12` | {name} | student_room | 없음 |  | 🌅 | *서연은 다음 주 학생회 일정표를 접어 내 쪽으로 밀었 |
| 371 | `after3_seo_freetalk` | 서연 | student_room | seyoun_normal |  | 🌅 | *클립보드를 품에 안은 채 {name}을 본다.* 할  |
| 372 | `after3_seo_end` | {name} | student_room | seyoun_sad |  | 🌅 | *그 한마디 뒤에 서연은 클립보드를 품에 더 깊이 끌어 |
| 373 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.* |
| 374 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 375 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 376 | `haeun_warn_1` | {name} | school_hallway | 없음 |  | 🌅 | *학생회실을 나오자 빈 복도 끝에 누군가 기다리고 있다 |
| 377 | `haeun_warn_1_b` | 하은 | school_hallway | haeun_normal |  | 🌅 | *하은이 벽에 기대 학생회 팔찌를 만지작거린다.* |
| 378 | `haeun_warn_2` | 하은 | school_hallway | haeun_normal |  | 🌅 | {name} 씨. |
| 379 | `haeun_warn_2_b` | {name} | school_hallway | haeun_normal |  | 🌅 | 하은? 왜 여기서? |
| 380 | `haeun_warn_2b` | {name} | school_hallway | haeun_normal |  | 🌅 | 응. |
| 381 | `haeun_warn_3` | 하은 | school_hallway | haeun_normal |  | 🌅 | 선배, 서연 선배 방금 봤어요? |
| 382 | `haeun_warn_3_b` | 하은 | school_hallway | haeun_normal |  | 🌅 | 선배가 울었어요. |
| 383 | `haeun_warn_3_c` | {name} | school_hallway | haeun_normal |  | 🌅 | *뭐?* |
| 384 | `haeun_warn_4` | 하은 | school_hallway | haeun_normal |  | 🌅 | 학생회실 뒤 화장실에서 잠깐 봤어요. 저한테는 괜찮다고 |
| 385 | `haeun_warn_4b` | {name} | school_hallway | haeun_normal |  | 🌅 | 울었다고? |
| 386 | `haeun_warn_5` | {name} | school_hallway | haeun_normal |  | 🌅 | *하은은 빈 복도를 확인한 뒤 목소리를 더 낮춘다.* |
| 387 | `haeun_warn_5b` | 하은 | school_hallway | haeun_normal |  | 🌅 | 말 걸지 말라고 했는데 세면대 앞에서 한참 나오지 않았 |
| 388 | `haeun_warn_5c` | {name} | school_hallway | haeun_normal |  | 🌅 | *복도 끝 화장실 쪽을 돌아본다.* |
| 389 | `haeun_warn_5c_b` | 서연 | school_hallway | seyoun_sad |  | 🌅 | 네가 다른 애들한테도 나한테 하듯 웃는 게 좀 싫었어. |
| 390 | `haeun_warn_6` | 하은 | school_hallway | haeun_normal |  | 🌅 | 제가 따라가면 또 괜찮다고 할 거예요. {name} 씨 |
| 391 | `haeun_warn_6_b` | 하은 | school_hallway | haeun_normal |  | 🌅 | *하은은 학생회 팔찌를 손목 안쪽으로 돌린다.* |
| 392 | `haeun_warn_7` | 하은 | school_hallway | haeun_worried |  | 🌅 | 참견인 거 알아요. 그래도 오늘만은 모른 척하지 말아  |
| 393 | `haeun_warn_7_b` | 하은 | school_hallway | haeun_worried |  | 🌅 | *하은이 입술을 다문다. 학생회 팔찌의 고리를 만지며  |
| 394 | `haeun_warn_7_c` | 하은 | school_hallway | haeun_normal |  | 🌅 | 설득하라는 건 아니에요. 그냥 혼자 두지만 말아 주세요 |
| 395 | `haeun_freetalk` | 하은 | school_hallway | haeun_worried |  | 🌅 | *하은은 돌아서지 않고 주인공을 똑바로 본다.* "…대 |
| 396 | `haeun_warn_7_d` | 하은 | school_hallway | haeun_worried |  | 🌅 | *하은이 복도 끝으로 사라진 뒤, 벽걸이에는 서연의 학 |
| 397 | `haeun_warn_8` | {name} | school_hallway | haeun_worried |  | 🌅 | *하은이 떠난 뒤 학생회실 문을 두드린다. 대답은 없지 |
| 398 | `haeun_warn_8b` | {name} | school | haeun_worried |  | 🌅 | *학교 앞으로 나왔다.* |
| 399 | `night3_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 가방을 의자에 걸어 둔다.* |
| 400 | `night3_start_2` | {name} | room_my | 없음 |  |  | *책상 위에 엎어 둔 핸드폰 화면을 켠다.* |
| 401 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *읽지 않은 메시지가 떠 있다.* |
| 402 | `night3_faithful_msg_seo_1` | 서연 | room_my | seyoun_normal | 0.35 |  | 오늘 본 거, 비밀이야 |
| 403 | `night3_faithful_msg_seo_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 근데 또 와도 돼 |
| 404 | `night3_faithful_msg_seo_3` | {name} | room_my | seyoun_normal | 0.35 |  | *메시지를 끝까지 읽고 화면을 끈다. 방 안에서 휴대폰 |
| 405 | `night3_dream_1` | {name} | school | 없음 |  |  | *꿈속에서 누군가와 나란히 걷는다. 얼굴은 보이지 않고 |
| 406 | `night3_dream_2_b` | {name} | school | 없음 |  |  | *메모장을 닫았다. 내일 보낼 문장은 아직 없다.* |
| 407 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *커튼 사이로 들어온 아침 햇살에 눈을 뜬다. 핸드폰  |
| 408 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *'삭제하시겠습니까?' 확인 창이 뜬다. 손가락이 버튼 |
| 409 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *1초 동안 화면을 내려다본다. 소정이 책상의 낙서와  |
| 410 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *그래. 삭제 버튼에 올린 손가락으로 화면을 누른다.* |
| 411 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼을 누르지 않고 사진을 새 폴더로 옮긴다.  |
| 412 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *'거절도 네가 해야 할 일이야.' 민수의 말이 떠오른 |
| 413 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *갤러리에서 소정이 사진이 사라지고 빈칸만 남는다.* |
| 414 | `night3_faithful_reflect_4_b` | {name} | room_my | 없음 |  |  | *빈 앨범 썸네일 위를 엄지로 문지른다.* |
| 415 | `night3_faithful_reflect_4_c` | {name} | room_my | 없음 |  |  | *핸드폰을 덮자 검은 화면에 갤러리의 빈칸이 겹쳐 보인 |
| 416 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *알람이 울리기 전에 눈을 떴다.* |
| 417 | `night3_dream_seo_bonus` | {name} | room_my | 없음 |  |  | *눈을 감자 옥상 난간이 먼저 떠오른다.* |
| 418 | `night3_end` | {name} | room_my | 없음 |  |  | *방 불을 끄고 핸드폰을 엎어 둔다.* |
| | **Day 4** | | | | | | |
| 419 | `morning4_start` | {name} | room_my | 없음 |  |  | *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다 |
| 420 | `morning4_nightmare_check` |  | room_my | 없음 |  |  |  |
| 421 | `minsu_cheer_1` | {name} | room_my | 없음 |  |  | *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.* |
| 422 | `minsu_cheer_1_b` | 민수 | room_my | minsu_normal | 0.35 |  | *야 오늘 데이트라며?* |
| 423 | `minsu_cheer_1_c` | {name} | room_my | minsu_normal | 0.35 |  | *어떻게 알았어* |
| 424 | `minsu_cheer_1_d` | 민수 | room_my | minsu_normal | 0.35 |  | *다인이가 단톡방에 올림. 내일 약속 있음, 이라고* |
| 425 | `minsu_cheer_2` | 민수 | room_my | minsu_normal | 0.35 |  | 잘하고 와ㅋㅋ |
| 426 | `minsu_cheer_3` | {name} | room_my | minsu_normal | 0.35 |  | 알아. |
| 427 | `minsu_cheer_4_branch` |  | room_my | 없음 |  |  |  |
| 428 | `minsu_cheer_4_ins_single` | {name} | room_my | minsu_normal | 0.35 |  | *핸드폰 캘린더를 본다. 오늘 약속은 하나뿐이다.* |
| 429 | `morning4_start_2` | {name} | room_my | 없음 |  |  | *심호흡하고 약속 메시지를 다시 확인한다.* |
| 430 | `morning4_seo_msg_1` | 서연 | room_my | seyoun_pout | 0.35 |  | 늦으면 안 돼. 공원 분수대, 10시. |
| 431 | `morning4_seo_msg_1_b` | {name} | room_my | seyoun_pout | 0.35 |  | *메시지는 거기서 끝나 있다.* |
| 432 | `morning4_seo_msg_1_c` | {name} | room_my | seyoun_pout | 0.35 |  | *분수대 앞에 선다. 시계가 9시 58분을 가리킨다.* |
| 433 | `morning4_hidden_check` | {name} | room_my | 없음 |  |  | *주말 아침, 학교 앞 사거리에서 신호를 기다린다.* |
| 434 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 435 | `morning4_end` | {name} | room_my | 없음 |  |  | *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 |
| 436 | `date_seo_1` | {name} | park | seyoun_normal |  |  | *분수대 앞에 서연이 먼저 와 있다. 클립보드는 없고  |
| 437 | `date_seo_compliment_choice` | {name} | park | seyoun_normal |  |  | *서연의 가방끈이 손가락에 한 번 더 감긴다.* |
| 438 | `date_seo_role_trap` | 서연 | park | seyoun_normal |  |  | *가방끈에서 손을 뗀다.* 오늘은 학생회장으로 나온 거 |
| 439 | `date_seo_walk` | {name} | park | seyoun_normal |  |  | *공원을 산책한다. 오리들에게 빵을 던져준다.* |
| 440 | `date_seo_duck` | 서연 | park | seyoun_normal |  |  | 이 애들은 단순해서 좋다. 빵 주면 따라오고 안 주면  |
| 441 | `date_seo_duck_2` | {name} | park | seyoun_normal |  |  | 사람도 그런 거 아냐? |
| 442 | `date_seo_duck_3` | 서연 | park | seyoun_normal |  |  | 사람은 빵 줘도 안 올 때가 있으니까. |
| 443 | `date_seo_duck_4` | 서연 | park | seyoun_normal |  |  | *빵 부스러기가 가라앉는 물가를 보고 있었다. 꽃집 앞 |
| 444 | `date_seo_flower_b` | 서연 | park | seyoun_normal |  |  | *꽃집 유리문 쪽으로 발끝을 돌린다.* 들어가 볼까? |
| 445 | `date_seo_flower_2` | 서연 | park | seyoun_normal |  |  | *꽃집 문을 밀자 종이 울린다. 서연은 진열대를 한 바 |
| 446 | `date_seo_succulent_2` | 서연 | park | seyoun_normal |  |  | 이건 관리하기 쉬워. 물 안 줘도 잘 살아. |
| 447 | `date_seo_succulent_2_b` | {name} | park | seyoun_normal |  |  | 나한테 주는 거야? |
| 448 | `date_seo_succulent_3` | 서연 | park | seyoun_laugh |  |  | 키울 수 있으면. — 못 키우면 내가 다시 가져갈 거니 |
| 449 | `date_seo_end` | 서연 | park | seyoun_worried |  |  | *화분을 내민다. 흙이 든 작은 화분이 손바닥에 닿았다 |
| 450 | `date_seo_end_b` | {name} | street | seyoun_normal |  |  | *공원을 나서 거리를 걸었다.* |
| 451 | `date_seo_end_c` | 서연 | street | seyoun_normal |  |  | *화분 포장지가 손안에서 작게 바스락거린다.* 오늘. |
| 452 | `date_seo_end_d` | 서연 | street | seyoun_shy |  |  | 오늘 괜찮았어. |
| 453 | `pre_confess_minsu` | 민수 | street | minsu_smirk | 0.35 |  | 야, 데이트 중이지? 한마디만 할게 |
| 454 | `pre_confess_minsu_2` | 민수 | street | minsu_smirk | 0.35 |  | 말 돌리지 말고 제대로 해 |
| 455 | `pre_confess_callback` | {name} | street | minsu_smirk |  |  | *주머니 속 핸드폰 모서리가 손바닥에 눌린다. 알림은  |
| 456 | `confess_seo_1` | {name} | top_school | 없음 |  | 🌅 | *데이트가 끝났다. 교문 대신 옥상으로 올라왔다.* |
| 457 | `confess_seo_2` | 서연 | top_school | seyoun_normal |  | 🌅 | 잠깐 올라가자. |
| 458 | `confess_seo_3` | {name} | top_school | seyoun_normal |  | 🌅 | *옥상. 난간 아래 운동장 조명이 켜져 있다. 첫날 서 |
| 459 | `confess_seo_4` | 서연 | top_school | seyoun_normal |  | 🌅 | *서연은 난간에서 한 걸음 떨어져 선다. 열쇠를 주머니 |
| 460 | `confess_seo_4_b` | {name} | top_school | seyoun_normal |  | 🌅 | *주머니 안쪽에서 접힌 메모가 손가락에 걸린다.* |
| 461 | `confess_seo_5` | {name} | top_school | seyoun_normal |  | 🌅 | *메모를 꺼내지 않는다.* |
| 462 | `confess_seo_choice` | {name} | top_school | seyoun_shy2 |  | 🌅 | *열쇠고리만 서연의 손안에서 짧게 울린다.* |
| 463 | `confess_seo_yes_1` | 서연 | top_school | seyoun_normal |  | 🌅 | *열쇠고리 소리가 뚝 멎는다. 서연이 눈을 맞춘다.* |
| 464 | `confess_seo_yes_2` | {name} | top_school | seyoun_normal |  | 🌅 | *목이 마르다. 주머니 안에서 메모가 접힌다.* |
| 465 | `confess_seo_yes_3` | {name} | top_school | seyoun_normal |  | 🌅 | 오늘 이후에도 너랑 만나고 싶어. |
| 466 | `confess_seo_yes_4` | {name} | top_school | seyoun_normal |  | 🌅 | *서연은 바로 대답하지 않는다. 열쇠고리가 손 안에서  |
| 467 | `confess_seo_yes_5` | {name} | top_school | seyoun_worried |  | 🌅 | 지금 대답 안 해도 돼. |
| 468 | `confess_seo_yes_6` | 서연 | top_school | seyoun_normal |  | 🌅 | 그렇게 말하면 더 생각하게 되잖아. |
| 469 | `confess_seo_yes_7` | {name} | top_school | seyoun_shy2 |  | 🌅 | *난간 아래 운동장 조명이 한 줄 더 켜진다. 서연은  |
| 470 | `confess_seo_yes_8` | 서연 | top_school | seyoun_shy2 |  | 🌅 | 나도 계속 봤어. |
| 471 | `confess_seo_yes_9` | 서연 | top_school | seyoun_shy |  | 🌅 | 네가 어디 앉는지, 언제 말이 줄어드는지. |
| 472 | `confess_seo_yes_10` | 서연 | top_school | seyoun_shy |  | 🌅 | *열쇠가 주머니 안으로 들어간다.* |
| 473 | `confess_seo_yes_11` | 서연 | top_school | seyoun_shy2 |  | 🌅 | 내일 점심. 옥상 열어둘게. |
| 474 | `confess_seo_yes_11_b` | 서연 | top_school | seyoun_shy2 |  | 🌅 | *서연이 계단 쪽으로 걷는다.* |
| 475 | `confess_seo_yes_12` | 서연 | top_school | seyoun_shy2 |  | 🌅 | *두 칸 아래에서 발소리가 끊긴다. 서연은 돌아보지 않 |
| 476 | `day4_night_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 옷소매에 공원 흙과 학교 먼지가 조금 |
| 477 | `day4_night_branch` | 시스템 | room_my | 없음 |  |  |  |
| 478 | `day4_student_night_branch` |  | room_my | 없음 |  |  |  |
| 479 | `wall_seo_1` | {name} | room_my | 없음 |  |  | *밤 10시. 서연에게서 전화가 온다. 목소리에 웃음기 |
| 480 | `wall_seo_pre_low_1` | {name} | room_my | seyoun_worried | 0.35 |  | *서연의 대화방에는 마지막 메시지 이후 새 알림이 없다 |
| 481 | `wall_seo_pre_low_1b` | {name} | room_my | seyoun_pout | 0.35 |  | *'서연아, 지금 괜찮아?' 문자를 보낸다. 1분 뒤  |
| 482 | `wall_seo_pre_low_2` | 서연 | room_my | seyoun_sad | 0.35 |  | 문자 봤어. 잠깐 통화 괜찮아? |
| 483 | `wall_seo_2` | 서연 | room_my | seyoun_sad | 0.35 |  | 지금 나올 수 있어? 공원. 미안, 갑자기. |
| 484 | `wall_seo_to_park` | {name} | park | seyoun_normal |  |  | *집을 나서 공원으로 향했다.* |
| 485 | `wall_seo_3` | {name} | park | seyoun_sad |  |  | *공원 벤치에 서연이 앉아 있다. 화장 끝이 조금 번져 |
| 486 | `wall_seo_4` | {name} | park | seyoun_sad |  |  | 서연. 무슨 일이야? |
| 487 | `wall_seo_5` | 서연 | park | seyoun_sad |  |  | ...앉아. |
| 488 | `wall_seo_6` | {name} | park | seyoun_sad |  |  | *옆에 앉는다. 서연은 가로등 불빛이 길게 걸린 안경알 |
| 489 | `wall_seo_7` | 서연 | park | seyoun_sad |  |  | 오늘 엄마한테 전화 왔어. |
| 490 | `wall_seo_7_b` | {name} | park | seyoun_sad |  |  | *공원 도로로 자동차 한 대가 지나간다. 서연은 무릎  |
| 491 | `wall_seo_8` | 서연 | park | seyoun_sad |  |  | 아빠랑 또 싸웠대. |
| 492 | `wall_seo_9` | 서연 | park | seyoun_sad |  |  | *웃다가 금방 입꼬리를 내린다.* |
| 493 | `wall_seo_9_b` | 서연 | park | seyoun_sad |  |  | 우리 집 겉으로는 멀쩡해 보이지? 넓은 집, 좋은 차, |
| 494 | `wall_seo_9_c` | 서연 | park | seyoun_sad |  |  | 근데 엄마 아빠는 1년째 같은 지붕 아래서 남남이야.  |
| 495 | `wall_seo_9_d` | {name} | park | seyoun_sad |  |  | *벤치 아래로 마른 잎 하나가 굴러와 서연의 운동화 앞 |
| 496 | `wall_seo_10` | 서연 | park | seyoun_sad |  |  | 그래서 집에서도 학교에서도 웃었어. 그게 제일 편했거든 |
| 497 | `wall_seo_11` | 서연 | park | seyoun_cry |  |  | 엄마가 그랬어. '네가 무너지면 집도 무너진다'고. |
| 498 | `wall_seo_11_b` | 서연 | park | seyoun_cry |  |  | *입을 다문다. 목이 한 번 움직인다.* |
| 499 | `wall_seo_12` | 서연 | park | seyoun_cry |  |  | 열 살 때. — 열 살짜리한테 그런 말 하는 거야. |
| 500 | `wall_seo_13` | 서연 | park | seyoun_cry |  |  | 그때부터 거울 앞에서 표정 맞췄어. 안 맞으면 다시. |
| 501 | `wall_seo_14` | 서연 | park | seyoun_cry |  |  | 칭찬받을 때마다 거울 앞에서 몇 번 맞췄는지부터 셌어. |
| 502 | `wall_seo_14_b` | 서연 | park | seyoun_sad |  |  | ...근데 너는. |
| 503 | `wall_seo_14_c` | 서연 | park | seyoun_cry |  |  | *말끝이 끊기며 무릎 위 손가락이 서로 파고든다. 안경 |
| 504 | `wall_seo_14_d` | {name} | park | seyoun_cry |  |  | *눈물이 소리 없이 흘러내린다. 손등에 화장 자국이 번 |
| 505 | `wall_seo_hug_choice` | 서연 | park | seyoun_cry |  |  | *번진 화장이 손등에 남아 있고 서연의 어깨가 호흡마다 |
| 506 | `wall_seo_hug_1` | {name} | park | seyoun_cry |  |  | *서연을 안자 어깨에 얼굴을 묻는다. 교복 셔츠 위로  |
| 507 | `wall_seo_hug_2_b` | 서연 | park | seyoun_cry |  |  | 누구 앞에서 우는 거, 오래됐어. |
| 508 | `wall_seo_hug_2_c` | 서연 | park | seyoun_cry |  |  | 8년. — 그동안 혼자 화장실에서만 울었거든. |
| 509 | `wall_seo_hug_3` | 서연 | park | seyoun_cry |  |  | *숨이 어깨에 짧게 부딪힌다.* |
| 510 | `wall_seo_line_choice` | 서연 | park | seyoun_cry |  |  | *손등으로 눈가를 훔친다. 번진 화장 자국이 더 넓어진 |
| 511 | `wall_seo_line_react_1` | 서연 | park | seyoun_cry |  |  | *손등의 화장 자국을 내려다본다.* |
| 512 | `wall_seo_after_line` | 서연 | park | seyoun_sad |  |  | 잠깐만. 물티슈 있어? |
| 513 | `wall_seo_after_line_2` | 서연 | park | seyoun_sad |  |  | *서연이 손등을 내려다본다. 화장이 번져 있다.* |
| 514 | `wall_seo_after_line_3` | {name} | park | seyoun_normal |  |  | 있어. |
| 515 | `wall_seo_after_line_4` | 서연 | park | seyoun_sad |  |  | *주머니에서 꺼낸 물티슈를 받아 든다.* |
| 516 | `wall_seo_after_line_4_b` | 서연 | park | seyoun_sad |  |  | *눈 밑을 닦는다.* |
| 517 | `wall_seo_after_line_5` | 서연 | park | seyoun_normal |  |  | 이제 좀 낫네. 내일은 내가 챙겨야겠다. |
| 518 | `wall_seo_skin_check` |  | park | seyoun_normal |  |  |  |
| 519 | `wall_seo_freetalk` | 서연 | park | seyoun_normal |  | 🌙 | *젖은 눈가를 손등으로 닦고 {name} 쪽을 본다.* |
| 520 | `wall_seo_rival_rank` | 시스템 | park | 없음 |  |  |  |
| 521 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 522 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *알람을 일요일 오전으로 맞추고 방 불을 끈다. 전하지 |
| 523 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안 시계가 자정 쪽으로 넘어간다. 휴대폰 화면도  |
| | **Day 5** | | | | | | |
| 524 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소 |
| 525 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 526 | `morning5_temptation_discovery_branch` |  | room_school | 없음 |  |  |  |
| 527 | `morning5_committed_start` |  | room_school | 없음 |  |  |  |
| 528 | `morning5_committed_seo` | {name} | room_school | seyoun_normal |  |  | *책상 위에 새 쪽지는 없다. 서연의 클립보드는 오늘도 |
| 529 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *행사 준비 시간. 복도를 걷는데 — 빈 교실 앞을 지 |
| 530 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *행사 중간 쉬는 시간. 보건실 앞을 지나간다.* |
| 531 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 532 | `morning5_committed_end` | {name} | room_school | 없음 |  |  | *책상 위 쪽지들을 정리하고 이미 고른 방향의 행사 순 |
| 533 | `tour_seo_1` | {name} | school | seyoun_normal |  |  | *교문 앞에 나란히 선다. 첫날 서연이 기다리고 있던  |
| 534 | `tour_seo_2` | 서연 | school | seyoun_normal |  |  | 여기서 처음 만났지. |
| 535 | `tour_seo_3` | {name} | school | seyoun_normal |  |  | 그때 '과분한데'라고 하니까 — 혼날 뻔했지. |
| 536 | `tour_seo_4` | 서연 | school | seyoun_laugh |  |  | 혼내진 않았잖아. 그때부터 보고 있었어. |
| 537 | `tour_seo_5` | {name} | school | seyoun_normal |  |  | 첫날부터? |
| 538 | `tour_seo_6` | 서연 | school | seyoun_shy |  |  | 바람 때문에 잘못 들었을 수도 있어. |
| 539 | `tour_seo_7` | {name} | school | seyoun_shy |  |  | *바람은 불지 않는다.* |
| 540 | `tour_seo_8` | {name} | school | seyoun_normal |  |  | *서연이 가방 안쪽에서 작은 금속 열쇠고리를 꺼낸다.  |
| 541 | `tour_seo_9` | 서연 | school | seyoun_normal |  |  | 이거. |
| 542 | `tour_seo_10` | {name} | school | seyoun_normal |  |  | 옥상 열쇠...는 아니네. |
| 543 | `tour_seo_11` | 서연 | school | seyoun_normal |  |  | 학생회 기념품이야. 진짜 열쇠는 오늘 반납해야 하니까. |
| 544 | `tour_seo_12` | 서연 | school | seyoun_normal |  |  | *열쇠고리를 건넨다. 손이 스치자 서연은 가방끈을 다시 |
| 545 | `tour_seo_13` | {name} | school | seyoun_normal |  |  | 그럼 다음부터 옥상은 어떻게 올라가? |
| 546 | `tour_seo_14` | 서연 | school | seyoun_shy |  |  | 나한테 말해. 정식으로 빌려서 같이 열면 되잖아. |
| 547 | `tour_seo_freetalk` | 서연 | top_school | seyoun_normal |  |  | *옥상 난간에 손을 얹고 학교를 내려다본다.* 마지막  |
| 548 | `tour_seo_end` | {name} | school | seyoun_shy |  |  | *서연이 건넨 열쇠고리를 주머니에 넣는다. 진짜 옥상  |
| 549 | `after5_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 550 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *행사가 끝나갈 무렵, 복도에서 선택하지 않은 두 사람 |
| 551 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 552 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 553 | `after5_farewell_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나가 다가온다. 아무 말 없이 책 한 |
| 554 | `after5_farewell_yuna_low` | 유나 | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나와 눈이 마주친다. 유나는 들고 있 |
| 555 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 556 | `after5_farewell_dain_1` | {name} | gym | dain_normal |  | 🌅 | *체육관 앞에서 다인이 걸어온다. 평소보다 보폭이 작다 |
| 557 | `after5_farewell_dain_low` | 다인 | gym | dain_normal |  | 🌅 | *체육관 앞에서 다인이 걸어오다 두 걸음 떨어진 곳에  |
| 558 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *석양이 교정 창문마다 걸린다. 방송실에서 행사 종료  |
| 559 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 560 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 561 | `ending_affinity_check` | 시스템 | park | 없음 |  |  |  |
| 562 | `ending_aff_check_seo` | 시스템 | top_school | 없음 |  |  |  |
| 563 | `day5_ending_good` | {name} | park | 없음 |  |  | *고백 후에도 달라진 건 많지 않았다. 일정이 하나 더 |
| 564 | `good_1` | {name} | park | 없음 |  |  | *며칠 동안 대화가 자꾸 끊겼다. 그래도 연락은 끊기지 |
| 565 | `good_1b` | {name} | park | 없음 |  |  | *둘은 같은 길로 나왔다.* |
| 566 | `good_1c` | {name} | park | 없음 |  |  | *벚꽃잎이 신발 앞에 붙었다가, 다음 걸음에 떨어진다. |
| 567 | `good_1_seo` | 서연 | park | seyoun_normal |  |  | 천천히 하자. |
| 568 | `good_1_seo_b` | 서연 | park | seyoun_normal |  |  | *서연이 {name}의 소매 끝에 붙은 꽃잎을 떼어낸다 |
| 569 | `good_1_seo_c` | 서연 | park | seyoun_normal |  |  | *서연은 반 걸음 늦춰 걷는다.* |
| 570 | `good_1_seo_d` | {name} | park | seyoun_normal |  |  | *발걸음이 나란해진다.* |
| 571 | `good_2_seo` | {name} | park | seyoun_normal |  |  | *벚꽃길 끝. 서연이 횡단보도 앞에서 멈춘다.* |
| 572 | `good_3_seo` | 서연 | park | seyoun_normal |  |  | 신호 바뀐다. |
| 573 | `good_4_seo` | {name} | park | seyoun_normal |  |  | *서연이 먼저 건넌다. 중간쯤에서 걸음을 늦춘다.* |
| 574 | `good_5_seo` | {name} | ending_good_seoyeon | 없음 |  |  | *건너편에서 다음 일정을 정했다. 시간과 장소만 말했다 |
| 575 | `good_epilogue_1` | {name} | ending_good_seoyeon | 없음 |  |  | *서연의 문자가 온다. '내일 점심, 옥상. 이번엔 정 |
| 576 | `good_epilogue_2` | {name} | ending_good_seoyeon | 없음 |  |  | *사진 속 사용대장 정오 칸에 두 사람의 이름이 있다. |
| 577 | `good_epilogue_3` | {name} | ending_good_seoyeon | 없음 |  |  | *다음 날 서연은 빌린 열쇠로 문을 열고 바로 반납함에 |
| 578 | `good_5_cg_seo` | 시스템 | ending_good_seoyeon | 없음 |  |  | ─── GOOD END ─── |
| 579 | `day5_seo_ending_freetalk_intro` | {name} | top_school | seyoun_normal |  |  | *옥상. 열린 문 옆에 화분 빈자리가 있다.* |
| 580 | `day5_seo_ending_freetalk_router` | {name} | top_school | 없음 |  |  |  |
| 581 | `day5_seo_ending_freetalk_good` | 서연 | top_school | seyoun_normal |  | 🌙 | *정식으로 예약한 옥상 문을 열고 사용대장을 확인한다. |
| 582 | `day5_credits` |  | school | 없음 |  |  |  |
| 583 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### day5_seo_ending_freetalk_late_good

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_seo_choice`: (선택)
- `after1_jealousy_seo_choice`: (선택)
- `after_end`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_seo_choice`: (선택)
- `after2_choice`: (선택)
- `after2_seo_choice1`: (선택)
- `after2_seo_choice2`: (선택)
- `night2_choice`: (선택)
- `morning3_date_seo_choice`: (선택)
- `lunch3_choice`: (선택)
- `after3_choice`: (선택)
- `after3_seo_choice`: (선택)
- `date_seo_compliment_choice`: (선택)
- `confess_seo_choice`: (선택)
- `after5_last_chance_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=43 유나=-8 다인=-4 담임=0 보건=0

<details>
<summary>씬 타임라인 (562씬)</summary>

| # | 씬 ID | 화자 | 배경 | 캐릭터 | OP | 밤 | 대사 (앞 30자) |
|---|--------|------|------|--------|----|----|----------------|
| | **Day 1** | | | | | | |
| 1 | `start` | {name} | school | 없음 |  |  | *4월의 교문 앞. 밟힌 꽃잎이 드문드문 붙어 있다.  |
| 2 | `start_3` | {name} | school | 없음 |  |  | *주머니에서 핸드폰이 울리고 예전 학교 단체 카톡방에  |
| 3 | `name_input_scene` | 시스템 | school | 없음 |  |  | 전학생, 당신의 이름은? |
| 4 | `gate_1` | {name} | school | 없음 |  |  | *낯선 교문 앞, 내 교복만 아직 접힌 선이 선명하다. |
| 5 | `seoyeon_meet_1` | 서연 | school | seyoun_normal |  |  | 전학생? {name} 맞지? |
| 6 | `seoyeon_meet_2` | 서연 | school | seyoun_normal |  |  | *{name}의 이름을 한 번 더 확인한 뒤 클립보드  |
| 7 | `seoyeon_meet_3` | {name} | school | seyoun_normal |  |  | 맞는데. 어떻게 알았어? |
| 8 | `seoyeon_meet_4` | 서연 | school | seyoun_normal |  |  | 학생회장. 전학생 안내는 내 담당이야. |
| 9 | `seoyeon_meet_5` | 서연 | school | seyoun_normal |  |  | 따라와. 15분 안에 끝낼게. |
| 10 | `seoyeon_meet_6` | {name} | school | seyoun_normal |  |  | 학생회장이 직접? 과분한데. |
| 11 | `seoyeon_meet_7` | 서연 | school | seyoun_normal |  |  | 과분한 건지 아닌 건지는 내가 정해. |
| 12 | `seoyeon_meet_8` | {name} | school | seyoun_normal |  |  | *서연은 이미 교문 안쪽으로 걸음을 옮겼다. 안내 파일 |
| 13 | `seoyeon_choice` | {name} | school | seyoun_normal |  |  | *어떻게 반응할까?* |
| 14 | `choice_flirt_1` | 서연 | school | seyoun_normal |  |  | *서연의 구두가 반 바퀴 돌아선다. 안경테 위로 한쪽  |
| 15 | `choice_flirt_2` | 서연 | school | seyoun_laugh |  |  | 첫날부터 말은 잘하네. 이름은 금방 외우겠다. |
| 16 | `choice_flirt_3` | {name} | school | seyoun_laugh |  |  | 점수제야? |
| 17 | `choice_flirt_4` | 서연 | school | seyoun_normal |  |  | 아직 분위기 파악은 안 됐나 봐. 나쁘진 않아. |
| 18 | `choice_flirt_5` | {name} | school | seyoun_normal |  |  | 영광인데? |
| 19 | `choice_flirt_6` | 서연 | school | seyoun_normal |  |  | 아직 영광인지 재앙인지 모르는 거지. |
| 20 | `choice_flirt_7` | 서연 | school | seyoun_laugh |  |  | *앞서 걷는다. 한 번 뒤돌아보고 {name}의 발소리 |
| 21 | `hallway_1` | 서연 | school_hallway | seyoun_back |  |  | *복도를 앞서 걷는다. 마주치는 학생들이 먼저 인사할  |
| 22 | `hallway_3` | 서연 | school_hallway | seyoun_normal |  |  | 3학년 건물은 여기, 저쪽이 도서관. 매점은 지하. |
| 23 | `hallway_4` | 서연 | school_hallway | seyoun_normal |  |  | *주머니에서 열쇠를 꺼내 손바닥 위에서 짤랑거린다.* |
| 24 | `hallway_5` | 서연 | school_hallway | seyoun_normal |  |  | 옥상은 원래 잠겨 있어. 학생회장 특권이지. |
| 25 | `hallway_6` | {name} | school_hallway | seyoun_normal |  |  | 비밀 아지트라도 있어? |
| 26 | `hallway_6_b` | 서연 | school_hallway | seyoun_normal |  |  | *열쇠고리 소리가 뚝 끊긴다.* 눈치 빠르네. |
| 27 | `hallway_6_c` | 서연 | school_hallway | seyoun_normal |  |  | *대답 대신 열쇠를 다시 주머니에 넣는다.* |
| 28 | `hallway_7` | 서연 | school_hallway | seyoun_normal |  |  | 아, 점심. 밥 어디서 먹는지 모르지? 같이 가. |
| 29 | `hallway_8` | {name} | school_hallway | seyoun_shy |  |  | *서연은 교실 앞에 서서 문패를 가리킨다.* |
| 30 | `hallway_10` | 서연 | school_hallway | seyoun_normal |  |  | 여기야. 들어가 봐. |
| 31 | `hallway_11` | {name} | school_hallway | seyoun_normal |  |  | 점심때도 안내해 주는 거야? |
| 32 | `hallway_12` | 서연 | school_hallway | seyoun_normal |  |  | 그건 네가 잘하면. |
| 33 | `hallway_13` | 서연 | school_hallway | seyoun_back |  |  | *돌아선 서연이 클립보드를 든 손만 어깨 높이로 한 번 |
| 34 | `hallway_13_b` | {name} | school_hallway | seyoun_back |  |  | *복도 끝으로 멀어질 때까지 걸음이 흐트러지지 않았다. |
| 35 | `classroom_1` | {name} | room_school | 없음 |  |  | *교실 문을 열자 소음이 뚝 끊기고 가까운 책상 의자  |
| 36 | `classroom_2_b` | {name} | room_school | teacher_normal |  |  | *교탁 앞에 담임선생님이 서 있다. 20대 후반. 가디 |
| 37 | `classroom_3` | 담임 | room_school | teacher_normal |  |  | 자, 오늘부터 우리 반에 들어온 전학생이야. 자기소개  |
| 38 | `classroom_3_b` | {name} | room_school | teacher_normal |  |  | {name}입니다. 잘 부탁드립니다. *담임이 출석부의 |
| 39 | `classroom_5_b` | 담임 | room_school | teacher_normal |  |  | 그래, {name}. 외웠어. *출석부에 이름을 덧그으 |
| 40 | `classroom_5_c` | {name} | room_school | teacher_normal |  |  | *담임의 혼잣말은 교실 소음에 묻힌다. 교실 한쪽에서  |
| 41 | `classroom_dain_1` | 다인 | room_school | dain_normal |  |  | 오, 전학생. 우리 반에 새 얼굴 들어왔네! |
| 42 | `classroom_dain_2` | {name} | room_school | dain_normal |  |  | *갈색 숏컷에 배구부 유니폼. 자리에서 반쯤 일어나 손 |
| 43 | `classroom_dain_3` | 담임 | room_school | teacher_normal |  |  | 다인아, 목소리 낮춰. 그리고 교실에서는 유니폼 좀 그 |
| 44 | `classroom_dain_4` | 다인 | room_school | dain_normal |  |  | 쌤, 이게 제일 편하다니까요. 아무튼 전학생, 반갑다. |
| 45 | `classroom_dain_5` | {name} | room_school | dain_normal |  |  | *교실 몇 군데서 웃음이 터진다. 다인은 손을 더 높이 |
| 46 | `classroom_dain_5_b` | 담임선생님 | room_school | teacher_normal |  |  | *출석부 모서리로 교탁을 두 번 두드리고 다인 쪽을 보 |
| 47 | `classroom_dain_5_c` | 담임 | room_school | teacher_normal |  |  | 에너지 좀 아껴. 아직 1교시도 안 시작했어. |
| 48 | `classroom_dain_5_d` | 담임선생님 | room_school | teacher_angry |  |  | *담임은 출석부를 넘긴다.* |
| 49 | `classroom_yuna_1` | {name} | room_school | yuna_bored |  |  | *창가 맨 뒤쪽의 한 여학생은 턱을 괸 채 창밖만 본다 |
| 50 | `classroom_yuna_2` | {name} | room_school | yuna_bored |  |  | *은백색 머리. 붉은 눈. 팔의 타투. 창가 맨 뒤 자 |
| 51 | `classroom_yuna_4` | {name} | room_school | yuna_bored |  |  | *앞줄에서 누군가 속삭인다. '쟤한테 말 걸지 마. 무 |
| 52 | `classroom_seat_1` | 담임선생님 | room_school | teacher_normal |  |  | *빈자리를 가리킨다.* |
| 53 | `classroom_seat_2` | {name} | room_school | dain_normal |  |  | *다인 옆자리다. 의자에 앉기도 전에 다인이 내 책상  |
| 54 | `classroom_minsu_1` | {name} | room_school | minsu_normal |  |  | *자리에 앉으려는데 — 앞자리 남학생이 돌아본다.* |
| 55 | `classroom_minsu_2` | 민수 | room_school | minsu_smirk |  |  | 야, 전학생. 환영한다. — 그리고 조심해. |
| 56 | `classroom_minsu_3` | {name} | room_school | minsu_smirk |  |  | 뭘? |
| 57 | `classroom_minsu_2_b` | 민수 | room_school | minsu_normal |  |  | *다인 쪽으로 턱짓한다.* 체력 관리. |
| 58 | `classroom_dain_talk_1` | {name} | room_school | minsu_normal |  |  | *앞자리 이름표에는 '민수'라고 적혀 있었다.* |
| 59 | `classroom_dain_talk_2` | {name} | room_school | dain_normal |  |  | *자리에 앉자마자 다인이 상체를 기울인다. 책상 두 개 |
| 60 | `classroom_dain_talk_3` | 다인 | room_school | dain_normal |  |  | 야, {name}. 운동 좋아해? |
| 61 | `classroom_dain_talk_4` | {name} | room_school | dain_normal |  |  | 갑자기? |
| 62 | `classroom_dain_talk_5` | 다인 | room_school | dain_normal |  |  | 그냥. 방과후에 리시브 연습 상대가 필요해서. 서브 넣 |
| 63 | `classroom_dain_talk_6` | {name} | room_school | dain_normal |  |  | 나 볼 머신이야? |
| 64 | `classroom_dain_talk_7` | 다인 | room_school | dain_laugh |  |  | 그래도 볼 머신보단 낫겠지. 아마. |
| 65 | `classroom_dain_talk_8` | {name} | room_school | dain_laugh |  |  | *'아마' 뒤에 다인의 시선이 볼 머신 쪽으로 간다.  |
| 66 | `classroom_yuna_note_1` | {name} | room_school | yuna_bored |  |  | *접힌 쪽지가 책상 위로 미끄러져 온다. 뒤를 돌아봐도 |
| 67 | `classroom_yuna_note_3` | {name} | room_school | yuna_bored |  |  | *'시끄러운 자리 걸렸네. — 유나' 연보라색 잉크.  |
| 68 | `classroom_yuna_note_5` | {name} | room_school | yuna_bored |  |  | *유나 쪽을 보자 시선은 여전히 창밖이고 손만 책상 아 |
| 69 | `classroom_yuna_note_6` | {name} | room_school | yuna_bored |  |  | *수업 종이 울리자 유나는 다시 창밖을 보고 다인은 벌 |
| 70 | `lunch_start` | {name} | school_hallway | 없음 |  |  | *점심시간. 학생들로 찬 복도 끝에는 서연의 도시락 가 |
| 71 | `lunch_start_4` | {name} | school_hallway | seyoun_normal |  |  | *복도 끝에서 서연이 눈을 맞추더니 옥상 쪽을 손으로  |
| 72 | `lunch_start_4_b` | {name} | school_hallway | dain_normal |  |  | *옆에서 다인이 팔목을 낚아챈다.* |
| 73 | `lunch_start_5` | 다인 | school_hallway | dain_normal |  |  | 야, 밥 먹었어? 매점 가자. 빵 내기하자, 진 사람이 |
| 74 | `lunch_start_6` | {name} | school_hallway | yuna_normal |  |  | *유나는 가방만 들고 교실을 빠져나가 도서관 방향으로  |
| 75 | `lunch_start_7` | {name} | school_hallway | 없음 |  |  | *복도는 세 갈래다. 옥상, 매점, 도서관. 주머니 안 |
| 76 | `lunch_choice` | {name} | school_hallway | 없음 |  |  | *누구를 따라갈까?* |
| 77 | `lunch_seo_1` | 서연 | top_school | seyoun_normal |  |  | *옥상 문을 열쇠로 연다. 바람이 확 불어온다.* |
| 78 | `lunch_seo_1_aff_default` | 서연 | top_school | seyoun_normal |  |  | 앉을 거야? |
| 79 | `lunch_seo_2` | {name} | top_school | seyoun_normal |  |  | *옥상 바닥에는 흙 한 줌 보이지 않는다. 물방울 맺힌 |
| 80 | `lunch_seo_3` | 서연 | top_school | seyoun_normal |  |  | 여기가 내 영역이거든. |
| 81 | `lunch_seo_4` | {name} | top_school | seyoun_normal |  |  | 학생회장 전용 옥상이야? |
| 82 | `lunch_seo_5` | 서연 | top_school | seyoun_normal |  |  | 아무나 데려오는 데는 아닌데. *의자를 하나 펼친다.* |
| 83 | `lunch_seo_6` | {name} | top_school | seyoun_normal |  |  | 첫날부터 예외 적용? 뭔가 수상한데. |
| 84 | `lunch_seo_6_b` | 서연 | top_school | seyoun_laugh |  |  | *의자를 발끝으로 밀어 {name} 쪽에 맞춘다.* 의 |
| 85 | `lunch_seo_8` | 서연 | top_school | seyoun_laugh |  |  | *가방에서 같은 크기의 도시락통 두 개, 2인분을 포개 |
| 86 | `lunch_seo_9` | {name} | top_school | seyoun_normal |  |  | 2인분인데? |
| 87 | `lunch_seo_10` | 서연 | top_school | seyoun_normal |  |  | 학생회 일 하다 보면 밥 먹을 시간이 없어져서. 항상  |
| 88 | `lunch_seo_11` | {name} | top_school | seyoun_normal |  |  | *도시락 뚜껑을 열자 반찬이 줄 맞춰 놓여 있다. 계란 |
| 89 | `lunch_seo_13` | {name} | top_school | seyoun_normal |  |  | 직접 만든 거야? |
| 90 | `lunch_seo_14` | 서연 | top_school | seyoun_normal |  |  | 학생회장이 밥도 못 싸면 말이 안 되지. |
| 91 | `lunch_seo_15` | {name} | top_school | seyoun_normal |  |  | 그건 답이 아닌데. |
| 92 | `lunch_seo_16` | 서연 | top_school | seyoun_normal |  |  | *젓가락을 건넨다.* 먹어. 식으면 맛없어. |
| 93 | `lunch_seo_17` | 서연 | top_school | seyoun_normal |  |  | *대답 대신 밥을 먹는다. 난간 너머로 운동장과 별관  |
| 94 | `lunch_seo_19` | 서연 | top_school | seyoun_normal |  |  | 어때, 이 학교? |
| 95 | `lunch_seo_20` | {name} | top_school | seyoun_normal |  |  | 밥은 맛있어. |
| 96 | `lunch_seo_21` | 서연 | top_school | seyoun_laugh |  |  | *젓가락 끝이 도시락 칸막이를 가볍게 친다.* 학교를  |
| 97 | `lunch_seo_22` | 서연 | top_school | seyoun_laugh |  |  | *계란말이를 집어 내민다.* |
| 98 | `lunch_seo_23` | 서연 | top_school | seyoun_normal |  |  | 한 입만. |
| 99 | `lunch_seo_choice` | 서연 | top_school | seyoun_normal |  |  | *계란말이를 내밀고 있다.* |
| 100 | `lunch_seo_c1_1` | {name} | top_school | seyoun_normal |  |  | *서연의 젓가락에서 계란말이를 받아먹는다.* |
| 101 | `lunch_seo_c1_2` | {name} | top_school | seyoun_normal |  |  | 맛있다. |
| 102 | `lunch_seo_c1_2_b` | 서연 | top_school | seyoun_normal |  |  | *물병을 들어 입가를 가린다. 라벨이 손안에서 구겨진다 |
| 103 | `lunch_seo_c1_3` | 서연 | top_school | seyoun_shy |  |  | 그 정도는 해야지. |
| 104 | `lunch_seo_c1_3_b` | {name} | top_school | seyoun_shy |  |  | *반쯤 접힌 라벨이 물병에 붙어 있다. 서연은 다시 젓 |
| 105 | `lunch_seo_after` | {name} | top_school | seyoun_normal |  |  | *운동장 스피커에서 점심 종료를 알리는 예비음이 울린다 |
| 106 | `lunch_seo_after_2` | 서연 | top_school | seyoun_normal |  |  | 다음에도 점심시간 비워둬. |
| 107 | `lunch_seo_after_3` | {name} | top_school | seyoun_normal |  |  | 초대해 주는 거야? |
| 108 | `lunch_seo_after_4` | 서연 | top_school | seyoun_normal |  |  | 아니. 허가해 주는 거야. |
| 109 | `lunch_seo_after_5` | 서연 | top_school | seyoun_normal |  |  | *도시락 끈을 한 번 묶었다가 더 짧게 조인다.* |
| 110 | `lunch_seo_after_7` | {name} | top_school | seyoun_normal |  |  | *도시락 매듭이 처음보다 단단해져 있다.* |
| 111 | `lunch_seo_freetalk` | 서연 | top_school | seyoun_normal |  |  | *도시락 뚜껑을 정리하고 접이식 의자를 신발 끝으로 한 |
| 112 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *종이 울린다. 점심시간이 끝났다.* |
| 113 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에 |
| 114 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 115 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창 |
| 116 | `after_kakao_5` | {name} | school_hallway | 없음 |  | 🌅 | *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른 |
| 117 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록  |
| 118 | `after1_jealousy_seo_1` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 점심때 어디 갔어? 매점 갔는데 없더라. |
| 119 | `after1_jealousy_seo_2` | {name} | school_hallway | dain_normal |  | 🌅 | *답장창에 '서연이랑'까지 썼다가 지운다. 커서만 다시 |
| 120 | `after1_jealousy_seo_3` | 다인 | school_hallway | dain_pout |  | 🌅 | 옥상에서 내려오는 거 봤거든. 둘이서? |
| 121 | `after1_jealousy_seo_choice` | 다인 | school_hallway | dain_pout |  | 🌅 | *휴대폰을 쥔 손에 힘을 준다.* |
| 122 | `after1_jealousy_seo_lie` | {name} | school_hallway | dain_normal |  | 🌅 | 아니, 그냥 혼자 돌아다녔어. |
| 123 | `after1_jealousy_seo_lie_2` | 다인 | school_hallway | dain_laugh |  | 🌅 | 진짜? 혼자? — 아 그래, 첫날이니까 헤맸겠다! |
| 124 | `after1_jealousy_seo_yuna` | {name} | school_hallway | dain_normal |  | 🌅 | *가방 옆주머니에 접힌 쪽지가 걸려 있다. 유나의 필체 |
| 125 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *복도를 계속 걷는다.* |
| 126 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도를 걷는데 뒤에서 쿵쿵 발소리.* |
| 127 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 조심! |
| 128 | `after_miss_dain_3` | {name} | school_hallway | dain_normal |  | 🌅 | *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 |
| 129 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 피했다? 반사신경 괜찮은데. |
| 130 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 넌 복도에서 왜 전력질주야? |
| 131 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 늦었거든! 체육관 가야 해. 내일 보자, 전학생! |
| 132 | `after_miss_dain_6_b` | {name} | school_hallway | dain_laugh |  | 🌅 | *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을  |
| 133 | `after_miss_dain_7` | {name} | school_hallway | dain_laugh |  | 🌅 | *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아 |
| 134 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으 |
| 135 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 이거 떨어뜨렸어. |
| 136 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피 |
| 137 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌  |
| 138 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 고마워. |
| 139 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피를 책등 사이에 끼우고 돌아선다.* |
| 140 | `after_miss_yuna_4` | {name} | library_old | yuna_normal |  | 🌅 | *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 |
| 141 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든 |
| 142 | `night_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄 |
| 143 | `night_start_3` | {name} | room_my | 없음 |  |  | *핸드폰이 울린다. 학교 메신저.* |
| 144 | `night_msg_seo_1` | 서연 | room_my | seyoun_normal | 0.35 |  | *오늘 옥상 어땠어?* |
| 145 | `night_msg_seo_2` | {name} | room_my | seyoun_normal | 0.35 |  | *바람이 좋더라* |
| 146 | `night_msg_seo_3` | 서연 | room_my | seyoun_normal | 0.35 |  | *다음엔 음료 정도는 준비해 놓을게* |
| 147 | `night_msg_seo_4` | 서연 | room_my | seyoun_normal | 0.35 |  | *서비스야* |
| 148 | `night_msg_seo_5` | {name} | room_my | seyoun_normal | 0.35 |  | *'서비스야'를 일부러 한 줄 띄어서 보냈다.* |
| 149 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 다른 알림이 보인다.* |
| 150 | `night_late_transition` | {name} | room_my | 없음 |  |  | *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시 |
| 151 | `night_late_branch` | {name} | room_my | 없음 |  |  | *화면이 밝아진다.* |
| 152 | `night_seo_late_1` | 서연 | room_my | seyoun_normal | 0.35 |  | *내일 학교에서 봐.* |
| 153 | `night_seo_late_2` | 서연 | room_my | seyoun_normal | 0.35 |  | *안 오면 찾으러 갈 거야* |
| 154 | `night_seo_late_3` | {name} | room_my | seyoun_normal | 0.35 |  | *휴대폰을 내려놓자 잠금화면에 내일 등교 시간이 남는다 |
| 155 | `night_end_1` | {name} | room_my | 없음 |  |  | *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교 |
| 156 | `night_end_3` | {name} | room_my | 없음 |  |  | *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을  |
| | **Day 2** | | | | | | |
| 157 | `morning2_start` | {name} | room_school | 없음 |  |  | *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.* |
| 158 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 159 | `morning2_greet_seo_1` |  | 없음 | 없음 |  |  |  |
| 160 | `morning2_greet_seo_1_roof` | 서연 | room_school | seyoun_normal |  |  | 어제 옥상에서 한 말, 아직 유효한 거지? |
| 161 | `morning2_greet_seo_2` | {name} | room_school | seyoun_normal |  |  | *클립보드를 오늘도 팔 안쪽에 붙인 서연이 먼저 다가온 |
| 162 | `morning2_greet_seo_others_2` | {name} | room_school | seyoun_normal |  |  | *서연이 클립보드를 한 번 두드린다.* |
| 163 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *자리에 앉으려는데 — 책상 위에 접힌 쪽지가 하나 놓 |
| 164 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 165 | `morning2_note_3` | {name} | room_school | yuna_normal | 0.35 |  | *어제와 같은 글씨. 아래쪽에 장소가 적혀 있다. '도 |
| 166 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가다 교실 안을 들여다본다.* 어제 잘 잤 |
| 167 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 학생회장이 교실까지 인사하러 와? |
| 168 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 순찰이야. — 출석률 확인 겸. |
| 169 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | *복도로 돌아가기 직전 클립보드 끝이 문틀에 한 번 닿 |
| 170 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연이 사라진 복도를 바라보는데 — 뒤에서 민수가 돌 |
| 171 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 이틀 만에 학생회장이 인사하러 오냐? 나 1 |
| 172 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 인기가 없는 거 아닐까. |
| 173 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 그건 맞는데 그게 중요한 게 아니잖아. |
| 174 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *다인은 서연의 뒷모습이 교실 안으로 사라질 때까지 바 |
| 175 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 회장님도 우리 전학생한테 관심 있어? 인기 많네! |
| 176 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | '우리' 전학생? |
| 177 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 내가 먼저 봤잖아. 그럼 우리 맞지. 찜한 거. |
| 178 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *쉬는 시간. 복도로 나왔다.* |
| 179 | `morning2_break_1` | {name} | school_hallway | 없음 |  |  | *서연의 클립보드 끝이 책상에 톡 닿는다. 답할 틈도  |
| 180 | `morning2_seo_dust_1` | {name} | school_hallway | seyoun_normal |  |  | *1교시가 끝난 쉬는 시간, 복도에서 서연과 스친다.  |
| 181 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 잠깐. |
| 182 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *손이 {name}의 어깨에 닿는다. 먼지를 두 번 털 |
| 183 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 옷에 뭐 묻었어. |
| 184 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | *서연의 손이 떨어진 자리에서 가방끈이 비뚤어져 있다. |
| 185 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 왜 그래? 먼지잖아. |
| 186 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *어깨의 먼지는 없어졌는데 가방끈을 두 번이나 다시 고 |
| 187 | `morning2_dain_react_2` | {name} | school_hallway | dain_angry |  |  | *서연이 클립보드를 고쳐 끼고 복도로 간다. 뒤에서 다 |
| 188 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 지금 뭐야? 어깨 만진 거야? |
| 189 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 먼지 털어준 거야. |
| 190 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 먼지가 진짜 있긴 했어? |
| 191 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | *대답 대신 가방끈을 고쳐 잡았다. 다인은 그걸 보고도 |
| 192 | `morning2_end` | {name} | school_hallway | seyoun_normal |  |  | *민수 말로는 1년 동안 먼저 인사한 적도 없다던 서연 |
| 193 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *점심. 주머니에는 유나의 쪽지가 있고 복도 끝에서는  |
| 194 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *누구와 함께할까.* |
| 195 | `lunch2_seo_1_check` | {name} | school_hallway | 없음 |  |  | *옥상으로 올라간다.* |
| 196 | `lunch2_seo_1` | {name} | top_school | seyoun_normal |  |  | *옥상. 어제와 같은 장소. 서연이 도시락을 펼치고 있 |
| 197 | `lunch2_seo_2` | 서연 | top_school | seyoun_normal |  |  | 또 왔네. 맛 들렸나 봐. |
| 198 | `lunch2_seo_3` | {name} | top_school | seyoun_normal |  |  | 밥이 맛있었으니까. |
| 199 | `lunch2_seo_4` | 서연 | top_school | seyoun_laugh |  |  | 밥 때문이야? |
| 200 | `lunch2_seo_5` | {name} | top_school | seyoun_laugh |  |  | 바람도 좋고. |
| 201 | `lunch2_seo_6` | 서연 | top_school | seyoun_normal |  |  | 바람이라. |
| 202 | `lunch2_seo_7` | {name} | top_school | seyoun_normal |  |  | *서연이 도시락 뚜껑을 여는 순간 옥상 문이 철컥 열린 |
| 203 | `lunch2_seo_9` | 다인 | top_school | dain_normal |  |  | 여기 있었네. 찾았다. 오늘도 나 빼고 먹으려고? |
| 204 | `lunch2_seo_10` | 서연 | top_school | seyoun_normal |  |  | 옥상은 허가제야. 그리고 오늘 점심은 내가 먼저 잡았고 |
| 205 | `lunch2_seo_11` | 다인 | top_school | dain_normal |  |  | 그럼 난 지금부터 끼면 되겠네. 나도 앉는다? |
| 206 | `lunch2_seo_12` | {name} | top_school | dain_normal |  |  | *다인이 빈자리에 바로 앉는다. 서연의 젓가락이 계란말 |
| 207 | `lunch2_seo_13b` | 다인 | top_school | dain_normal |  |  | 반가워요, 회장님. 그런데 옆자리는 비었죠? |
| 208 | `lunch2_seo_13b_b` | 서연 | top_school | seyoun_normal |  |  | *서연이 도시락을 {name} 쪽으로 더 붙인다.* 자 |
| 209 | `lunch2_seo_14` | 서연 | top_school | seyoun_normal |  |  | *다인이 앉으려 하자 빈 의자를 발끝으로 자기 쪽에 붙 |
| 210 | `lunch2_seo_15` | {name} | top_school | seyoun_normal |  |  | 같은 반이잖아. 너희 둘도 이제 아는 사이고. |
| 211 | `lunch2_seo_16` | 서연 | top_school | seyoun_normal |  |  | 친해지는 것하고 양보하는 건 다르지. |
| 212 | `lunch2_seo_17` | 다인 | top_school | dain_normal |  |  | 그럼 나도 양보 안 해. 다음 쉬는 시간에 체육관 와. |
| 213 | `lunch2_seo_19` | 서연 | top_school | seyoun_normal |  |  | {name}, 지금 내 앞에서 다음 약속 잡는 거야? |
| 214 | `lunch2_seo_20` | 서연 | top_school | seyoun_normal |  |  | 대답은 나중에 해. 일단 입가에 뭐 묻었어. 가만있어  |
| 215 | `lunch2_seo_choice` | 서연 | top_school | seyoun_normal |  |  | *물티슈를 감은 손가락이 입가로 다가온다.* |
| 216 | `lunch2_seo_c1_1` | 서연 | top_school | seyoun_normal |  |  | *물티슈로 밥풀을 떼어내고 사용한 쪽을 안으로 접는다. |
| 217 | `lunch2_seo_c1_2` | 서연 | top_school | seyoun_normal |  |  | 됐어. |
| 218 | `lunch2_seo_c1_2_b` | 다인 | top_school | dain_normal |  |  | *다인은 도시락으로 뻗던 손을 공중에 둔 채 둘을 번갈 |
| 219 | `lunch2_seo_c1_3` | 다인 | top_school | dain_normal |  |  | 밥풀을 직접 떼어줘요? |
| 220 | `lunch2_seo_c1_3_b` | 서연 | top_school | seyoun_normal |  |  | *물티슈를 네모로 접는다.* 밥풀이었어. |
| 221 | `lunch2_seo_c1_4` | 서연 | top_school | seyoun_shy |  |  | 그게 다야. |
| 222 | `lunch2_seo_c1_5` | {name} | top_school | seyoun_shy |  |  | *서연은 물병을 집어 들지만 뚜껑은 열지 않는다. 라벨 |
| 223 | `lunch2_seo_end_c1` | {name} | top_school | seyoun_shy |  |  | *다인이 접이식 의자 다리를 운동화 끝으로 두 번 건드 |
| 224 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *방과후. 핸드폰에 알림이 두 개 와 있다.* |
| 225 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 체육관 와. 오늘은 진짜 내기다. |
| 226 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 학생회실에 올 수 있어? 일손이 부족해서. |
| 227 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게서는 아무 연락이 없다. 가방을 챙기자 주머니 |
| 228 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *어디로 갈까.* |
| 229 | `after2_seo_1` | {name} | student_room | seyoun_sad |  | 🌅 | *학생회실. 서연은 서류 더미 앞에 혼자 앉아 있다.* |
| 230 | `after2_seo_2` | 서연 | student_room | seyoun_normal |  | 🌅 | 와 줬네. — 솔직히 안 올 줄 알았어. |
| 231 | `after2_seo_3` | {name} | student_room | seyoun_laugh |  | 🌅 | 부르면 가는 타입이야. |
| 232 | `after2_seo_4` | 서연 | student_room | seyoun_normal |  | 🌅 | *클립보드 모서리로 빈 의자를 가리킨다.* 순종적이네. |
| 233 | `after2_seo_4_b` | 서연 | student_room | seyoun_sad |  | 🌅 | *클립보드를 {name} 쪽으로 돌린다. 할 일 목록  |
| 234 | `after2_seo_5` | {name} | student_room | seyoun_normal |  | 🌅 | 도와달라고 한 건 너잖아. |
| 235 | `after2_seo_6` | 서연 | student_room | seyoun_normal |  | 🌅 | 부탁이 아니라 기회를 준 거야. |
| 236 | `after2_seo_6_b` | {name} | student_room | seyoun_normal |  | 🌅 | *서류 정리를 시작한다. 행사 예산안, 동아리 신청서. |
| 237 | `after2_seo_7` | 서연 | student_room | seyoun_normal |  | 🌅 | *바로 돌아서지 않고 클립보드를 문 쪽으로 든 채 기다 |
| 238 | `after2_seo_8` | 서연 | student_room | seyoun_normal |  | 🌅 | 이쪽은 날짜순, 저쪽은 동아리별. — 정리하는 건 잘해 |
| 239 | `after2_seo_8a2` | {name} | student_room | seyoun_normal |  | 🌅 | 잘하진 않는데 못하지도 않아. |
| 240 | `after2_seo_8a3` | 서연 | student_room | seyoun_normal |  | 🌅 | 애매하네. |
| 241 | `after2_seo_8a4` | {name} | student_room | seyoun_normal |  | 🌅 | 칭찬이랑 비슷하잖아. 너도 애매하게 하니까. |
| 242 | `after2_seo_8b` | 서연 | student_room | seyoun_normal |  | 🌅 | *서류를 넘기던 손을 놓고 {name} 쪽을 본다.* |
| 243 | `after2_seo_8b2` | 서연 | student_room | seyoun_sad |  | 🌅 | 너, 쓸 만하네. |
| 244 | `after2_seo_8b3` | {name} | student_room | seyoun_normal |  | 🌅 | 그건 칭찬이야? |
| 245 | `after2_seo_8b4` | 서연 | student_room | seyoun_shy |  | 🌅 | 칭찬이야. 받아 둬. |
| 246 | `after2_seo_8b4_b` | 서연 | student_room | seyoun_shy |  | 🌅 | *칭찬이라고 말해놓고 바로 서류를 정리한다. 목을 돌리 |
| 247 | `after2_seo_choice1` | {name} | student_room | seyoun_normal |  | 🌅 | *블라인드 틈으로 들어온 주황색 줄이 서류 위를 가른다 |
| 248 | `after2_seo_sunset_joke` | 서연 | student_room | seyoun_shy2 |  | 🌅 | *안경이 코끝으로 조금 내려오고 펜 끝이 날짜 칸 밖으 |
| 249 | `after2_seo_sunset_joke_b` | 서연 | student_room | seyoun_normal |  | 🌅 | *서류 끝을 세워 입가를 가리는 사이 펜 뚜껑이 책상  |
| 250 | `after2_seo_sunset_react` | 서연 | student_room | seyoun_shy2 |  | 🌅 | 그런 말을 그렇게 툭 던지면, 받아 적을 시간도 없잖아 |
| 251 | `after2_seo_sunset_react_b` | 서연 | student_room | seyoun_normal |  | 🌅 | *서류 끝으로 입가를 가린 채 창틀의 주황색 줄을 펜  |
| 252 | `after2_seo_9` | {name} | student_room | seyoun_normal |  | 🌅 | *블라인드 그림자가 책상 끝까지 길어질 무렵 서류 정리 |
| 253 | `after2_seo_choice2` | {name} | student_room | seyoun_normal |  | 🌅 | *서류 정리가 거의 끝났다.* |
| 254 | `after2_seo_leave` | 서연 | student_room | seyoun_normal |  | 🌅 | *완성된 서류 더미를 양손으로 한 번 눌러 맞춘다.* |
| 255 | `after2_seo_end` | {name} | school_hallway | seyoun_normal |  | 🌅 | *학생회실을 나서자 복도 자동등이 앞에서부터 한 칸씩  |
| 256 | `after2_seo_skinship_1` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *서연이 손을 뻗어 옷깃의 먼지를 떼는 순간 손등이 목 |
| 257 | `after2_seo_skinship_2` | 서연 | school_hallway | seyoun_shy |  | 🌅 | *손가락이 셔츠 깃에 닿은 채 떨어지지 않는다. 청소  |
| 258 | `after2_seo_skinship_3` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 먼지 묻었어. |
| 259 | `after2_seo_return` | {name} | school | seyoun_normal |  | 🌅 | *학생회실을 나섰다. 교문 쪽으로 걸어간다.* |
| 260 | `after2_group_seoyeon_companion` | 서연과 동행 | student_room | 없음 |  | 🌅 | *서연이 겹쳐 적힌 일정 두 칸을 손끝으로 짚는다. 맞 |
| 261 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.* |
| 262 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 263 | `night2_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저  |
| 264 | `night2_msg_1` | {name} | room_my | 없음 |  |  | *세 명에게서 메시지가 왔다.* |
| 265 | `night2_msg_seo_specific` | 서연 | room_my | seyoun_normal | 0.35 |  | 오늘 고마웠어. 덕분에 일찍 끝났어 |
| 266 | `night2_msg_seo_specific_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 다음에도 부를지도 모르니까, 각오해 둬 |
| 267 | `night2_msg_dain_general` | 다인 | room_my | dain_normal | 0.35 |  | 야, 내일 매점 가자! 오늘 못 간 거 아직 아쉽거든! |
| 268 | `night2_msg_dain_general_merge` | 서연 | room_my | seyoun_normal | 0.35 |  | 점심에 옥상 올래? 바람 좋을 거야 |
| 269 | `night2_msg_yuna_general` | 유나 | room_my | yuna_normal | 0.35 |  | 내일 별관 올 거야? |
| 270 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에  |
| 271 | `night2_choice` | {name} | room_my | 없음 |  |  | *누구에게 먼저 답장할까?* |
| 272 | `night2_reply_dain_1` | {name} | room_my | dain_normal | 0.35 |  | 떡볶이 매웠어 ㅋㅋ |
| 273 | `night2_reply_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | 매운 거 못 먹는 거야? |
| 274 | `night2_reply_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | 내일은 순한 맛으로 가자. |
| 275 | `night2_reply_dain_4` | 다인 | room_my | dain_normal | 0.35 |  | 아 근데 순한 맛은 떡볶이가 아니지ㅋㅋ |
| 276 | `night2_reply_dain_5` | {name} | room_my | dain_normal | 0.35 |  | *또 세 줄 연속이다.* |
| 277 | `night2_reply_dain_react_default` | 다인 | room_my | dain_normal | 0.35 |  | ㅋㅋ 알겠어. 굿나잇! |
| 278 | `night2_dain_freetalk` | 다인 | room_my | dain_normal | 0.35 | 🌙 | 잠깐, 진짜 자기 전에. 오늘 제일 재밌었던 건 뭐였어 |
| 279 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 또 다른 알림이 보인다.* |
| 280 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 보내고 핸드폰을 내려놓았다.* |
| 281 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이,  |
| 282 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 |
| 283 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *메모장에 줄줄이 남은 보내지 않은 문장. '선생님,  |
| 284 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 메모가 마지막이다. 그 아래 39번째에는 제 |
| 285 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 |
| 286 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로 |
| 287 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보 |
| 288 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화 |
| 289 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 |
| 290 | `night2_end_2_b` | {name} | room_my | 없음 |  |  | *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있 |
| 291 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.* |
| 292 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을  |
| 293 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 |
| | **Day 3** | | | | | | |
| 294 | `morning3_start` | {name} | school | 없음 |  |  | *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯 |
| 295 | `morning3_start_2` | {name} | school | 없음 |  |  | *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군 |
| 296 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 297 | `morning3_seo_gate_1` | {name} | school | seyoun_normal |  |  | *교문 앞의 서연은 지각 종이 울리기 직전인데도 발을  |
| 298 | `morning3_seo_gate_2` | 서연 | school | seyoun_normal |  |  | 늦었네. |
| 299 | `morning3_seo_gate_3` | {name} | school | seyoun_normal |  |  | 서연? 왜 여기 있어? |
| 300 | `morning3_seo_gate_4` | 서연 | school | seyoun_normal |  |  | 지각하면 어때. 혼자 혼나는 것보단 낫잖아. |
| 301 | `morning3_seo_gate_5` | {name} | school | seyoun_laugh |  |  | 그건 아닌데. |
| 302 | `morning3_seo_gate_6` | 서연 | school | seyoun_normal |  |  | 농담이야. 같이 늦은 이유는 내가 설명할게. |
| 303 | `morning3_seo_gate_6_b` | 서연 | school | seyoun_normal |  |  | *서연은 학생회 일정표를 꺼내 교문 담당 교사에게 보여 |
| 304 | `morning3_seo_gate_7` | 서연 | school | seyoun_normal |  |  | *확인 도장을 받은 일정표를 접고 교문 안으로 들어간다 |
| 305 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실에 들어서자 서연의 펜이 멈추고 다인의 의자가 뒤 |
| 306 | `morning3_react_seo_1` | 다인 | room_school | dain_normal |  |  | 야, 회장님이랑 같이 왔어? 아침부터? |
| 307 | `morning3_react_seo_2` | 유나 | room_school | yuna_bored |  |  | *창밖을 보던 유나가 유리창에 비친 {name}을 확인 |
| 308 | `morning3_date_intro` | {name} | room_school | 없음 |  |  | *1교시가 끝났다. 쉬는 시간마다 누군가 말을 건다.* |
| 309 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *쉬는 시간, 복도로 나왔다. 서연이 먼저 걸음을 맞춘 |
| 310 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | 이번 주말에 시간 있어? 공원에 같이 가자. |
| 311 | `morning3_date_seo_choice` | 서연 | school_hallway | seyoun_normal |  |  | *서연이 교실 문 앞에서 묻는다. 다인이 들고 있던 물 |
| 312 | `morning3_date_seo_decline` | {name} | school_hallway | seyoun_normal |  |  | *서연의 제안을 거절하자 다인이 돌리던 물병 뚜껑을 다 |
| 313 | `morning3_date_seo_decline_b` | {name} | room_school | seyoun_normal |  |  | *교실로 돌아왔다. 수업 하나가 지나고 또 쉬는 시간이 |
| 314 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼  |
| 315 | `morning3_date_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 배구공을 옆구리에 낀 채 이쪽을 보다가 코트로 |
| 316 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다 |
| 317 | `morning3_date_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 접어 둔 쪽지를 꺼내려다 다시 책갈피 사이에  |
| 318 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 319 | `morning3_end` | {name} | room_school | 없음 |  |  | *수업 종료 종이 울리고 곧 점심시간이 된다.* |
| 320 | `morning3_end_b` | 유나 | room_school | yuna_normal |  |  | 맛있네. |
| 321 | `lunch3_start` | {name} | room_school | yuna_normal |  |  | *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. |
| 322 | `lunch3_start_2_b` | 다인 | room_school | dain_normal |  |  | *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가 |
| 323 | `lunch3_meal_1` | 다인 | room_school | dain_laugh |  |  | 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고  |
| 324 | `lunch3_meal_2` | {name} | room_school | dain_laugh |  |  | 그건 내 거... |
| 325 | `lunch3_meal_3` | 서연 | room_school | seyoun_normal |  |  | 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점 |
| 326 | `lunch3_meal_4` | {name} | room_school | seyoun_normal |  |  | 점수 매기지 마. |
| 327 | `lunch3_meal_5` | 서연 | room_school | seyoun_normal |  |  | 10점 만점이야. 나쁜 거 아닌데? |
| 328 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다 |
| 329 | `lunch3_meal_7` | {name} | room_school | seyoun_normal |  |  | 유나, 그건 내가 제일 좋아하는 건데. |
| 330 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임 |
| 331 | `lunch3_meal_8` | {name} | room_school | yuna_bored |  |  | *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다. |
| 332 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. |
| 333 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓 |
| 334 | `lunch3_meal_11` | {name} | room_school | yuna_bored |  |  | *누구에게 줄까?* |
| 335 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *마지막 반찬을 누구에게 줄지 고민한다.* |
| 336 | `lunch3_share_1` | {name} | room_school | yuna_bored |  |  | *다 같이 나눠 먹자고 하자 셋이 웃는다. 웃음이 끊긴 |
| 337 | `lunch3_share_solo` | {name} | room_school | yuna_normal |  |  | *셋이 계란말이를 조금씩 나눠 먹는다. 반으로 갈린 마 |
| 338 | `lunch3_end` | {name} | room_school | 없음 |  |  | *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다 |
| 339 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육 |
| 340 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다 |
| 341 | `after3_choice` | {name} | school_hallway | 없음 |  | 🌅 | *어디로 갈까.* |
| 342 | `after3_reject_for_seo_1` | {name} | school_hallway | dain_sad |  | 🌅 | *복도에서 마주친 다인은 먼저 손을 흔들지 않고 운동화 |
| 343 | `after3_reject_for_seo_2` | 다인 | school_hallway | dain_sad |  | 🌅 | 오늘 체육관 안 올 거지? |
| 344 | `after3_reject_for_seo_3` | {name} | library_old | yuna_sad | 0.35 | 🌅 | *도서관 옆을 지나자 유나 자리에 연보라색 쪽지 하나만 |
| 345 | `after3_reject_for_seo_3b` | {name} | library_old | 없음 |  | 🌅 | *유나의 책이 없다. 늘 책상에 두던 1권도, 빌려주겠 |
| 346 | `after3_reject_for_seo_3c` | {name} | library_old | 없음 |  | 🌅 | *책갈피도, 빌려주겠다던 2권도 없다. 책상 위에는 유 |
| 347 | `after3_reject_for_seo_4` | {name} | school_hallway | 없음 |  | 🌅 | *복도로 나왔다. 다인의 문장 끝은 조용했고 유나의 자 |
| 348 | `after3_seo_1` | {name} | student_room | seyoun_sad |  | 🌅 | *학생회실 문을 열자 서연이 책상에 엎드린 채다. 바닥 |
| 349 | `after3_seo_3` | 서연 | student_room | seyoun_sad |  | 🌅 | *문 여는 소리에 서연이 몸을 일으킨다. 눈 밑의 화장 |
| 350 | `after3_seo_4` | 서연 | student_room | seyoun_sad |  | 🌅 | *서연이 바닥의 클립보드를 발끝으로 책상 밑에 밀어 넣 |
| 351 | `after3_seo_5` | {name} | student_room | seyoun_sad |  | 🌅 | 서연? |
| 352 | `after3_seo_5_b` | 서연 | student_room | seyoun_normal |  | 🌅 | *서연이 손가락으로 머리카락을 빗어 내린다.* 봤어? |
| 353 | `after3_seo_6` | 서연 | student_room | seyoun_sad |  | 🌅 | *서연이 헛기침을 한 번 한다.* 아무것도 아니야. 잊 |
| 354 | `after3_seo_7` | {name} | student_room | seyoun_sad |  | 🌅 | 뭘 봤다고. |
| 355 | `after3_seo_7_b` | 서연 | student_room | seyoun_sad |  | 🌅 | *서연이 손등으로 번진 화장을 가린다.* 이런 거 보여 |
| 356 | `after3_seo_8` | 서연 | student_room | seyoun_sad |  | 🌅 | 이런 모습. 비밀로 해줘. |
| 357 | `after3_seo_9` | 서연 | student_room | seyoun_sad |  | 🌅 | *서연은 허리를 세우고 클립보드를 무릎 위에 올린다.  |
| 358 | `after3_seo_choice` | 서연 | student_room | seyoun_sad |  | 🌅 | 오늘 본 건 여기까지만 해줘. 대신 지금은 평소처럼 대 |
| 359 | `after3_seo_correct_1` | 서연 | student_room | seyoun_sad |  | 🌅 | *클립보드 가장자리가 손안에서 휘어진다. 서연은 다음  |
| 360 | `after3_seo_correct_2` | {name} | student_room | seyoun_worried |  | 🌅 | *허리를 굽혀 펜을 줍는 척 책상 밑을 더듬는다. 일부 |
| 361 | `after3_seo_correct_3` | {name} | student_room | seyoun_normal |  | 🌅 | 어, 여기 있네. 회장님 학생회실은 펜이 잘 없어지는  |
| 362 | `after3_seo_correct_4` | {name} | student_room | seyoun_worried |  | 🌅 | *몸을 일으키자 서연이 화장 자국을 닦던 손등에 검은  |
| 363 | `after3_seo_correct_5` | 서연 | student_room | seyoun_normal |  | 🌅 | 학생회실 펜 없어지는 거 진짜 미스터리야. 1년에 30 |
| 364 | `after3_seo_correct_6` | {name} | student_room | seyoun_normal |  | 🌅 | 학생회장이 그것도 못 잡아? |
| 365 | `after3_seo_correct_7` | 서연 | student_room | seyoun_laugh |  | 🌅 | *서연의 코웃음이 짧게 샌다.* 잡으면 학생들이 학생회 |
| 366 | `after3_seo_correct_8` | {name} | student_room | seyoun_pout |  | 🌅 | *서연이 안경을 고쳐 쓰는 동안에도 쓸데없는 펜 이야기 |
| 367 | `after3_seo_correct_9` | 서연 | student_room | seyoun_normal |  | 🌅 | {name}. |
| 368 | `after3_seo_correct_10` | {name} | student_room | seyoun_normal |  | 🌅 | 응. |
| 369 | `after3_seo_correct_11` | 서연 | student_room | seyoun_shy |  | 🌅 | 펜 줍는 거. 다음에도 가끔 줍게. |
| 370 | `after3_seo_correct_12` | {name} | student_room | 없음 |  | 🌅 | *서연은 다음 주 학생회 일정표를 접어 내 쪽으로 밀었 |
| 371 | `after3_seo_freetalk` | 서연 | student_room | seyoun_normal |  | 🌅 | *클립보드를 품에 안은 채 {name}을 본다.* 할  |
| 372 | `after3_seo_end` | {name} | student_room | seyoun_sad |  | 🌅 | *그 한마디 뒤에 서연은 클립보드를 품에 더 깊이 끌어 |
| 373 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.* |
| 374 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 375 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 376 | `haeun_warn_1` | {name} | school_hallway | 없음 |  | 🌅 | *학생회실을 나오자 빈 복도 끝에 누군가 기다리고 있다 |
| 377 | `haeun_warn_1_b` | 하은 | school_hallway | haeun_normal |  | 🌅 | *하은이 벽에 기대 학생회 팔찌를 만지작거린다.* |
| 378 | `haeun_warn_2` | 하은 | school_hallway | haeun_normal |  | 🌅 | {name} 씨. |
| 379 | `haeun_warn_2_b` | {name} | school_hallway | haeun_normal |  | 🌅 | 하은? 왜 여기서? |
| 380 | `haeun_warn_2b` | {name} | school_hallway | haeun_normal |  | 🌅 | 응. |
| 381 | `haeun_warn_3` | 하은 | school_hallway | haeun_normal |  | 🌅 | 선배, 서연 선배 방금 봤어요? |
| 382 | `haeun_warn_3_b` | 하은 | school_hallway | haeun_normal |  | 🌅 | 선배가 울었어요. |
| 383 | `haeun_warn_3_c` | {name} | school_hallway | haeun_normal |  | 🌅 | *뭐?* |
| 384 | `haeun_warn_4` | 하은 | school_hallway | haeun_normal |  | 🌅 | 학생회실 뒤 화장실에서 잠깐 봤어요. 저한테는 괜찮다고 |
| 385 | `haeun_warn_4b` | {name} | school_hallway | haeun_normal |  | 🌅 | 울었다고? |
| 386 | `haeun_warn_5` | {name} | school_hallway | haeun_normal |  | 🌅 | *하은은 빈 복도를 확인한 뒤 목소리를 더 낮춘다.* |
| 387 | `haeun_warn_5b` | 하은 | school_hallway | haeun_normal |  | 🌅 | 말 걸지 말라고 했는데 세면대 앞에서 한참 나오지 않았 |
| 388 | `haeun_warn_5c` | {name} | school_hallway | haeun_normal |  | 🌅 | *복도 끝 화장실 쪽을 돌아본다.* |
| 389 | `haeun_warn_5c_b` | 서연 | school_hallway | seyoun_sad |  | 🌅 | 네가 다른 애들한테도 나한테 하듯 웃는 게 좀 싫었어. |
| 390 | `haeun_warn_6` | 하은 | school_hallway | haeun_normal |  | 🌅 | 제가 따라가면 또 괜찮다고 할 거예요. {name} 씨 |
| 391 | `haeun_warn_6_b` | 하은 | school_hallway | haeun_normal |  | 🌅 | *하은은 학생회 팔찌를 손목 안쪽으로 돌린다.* |
| 392 | `haeun_warn_7` | 하은 | school_hallway | haeun_worried |  | 🌅 | 참견인 거 알아요. 그래도 오늘만은 모른 척하지 말아  |
| 393 | `haeun_warn_7_b` | 하은 | school_hallway | haeun_worried |  | 🌅 | *하은이 입술을 다문다. 학생회 팔찌의 고리를 만지며  |
| 394 | `haeun_warn_7_c` | 하은 | school_hallway | haeun_normal |  | 🌅 | 설득하라는 건 아니에요. 그냥 혼자 두지만 말아 주세요 |
| 395 | `haeun_freetalk` | 하은 | school_hallway | haeun_worried |  | 🌅 | *하은은 돌아서지 않고 주인공을 똑바로 본다.* "…대 |
| 396 | `haeun_warn_7_d` | 하은 | school_hallway | haeun_worried |  | 🌅 | *하은이 복도 끝으로 사라진 뒤, 벽걸이에는 서연의 학 |
| 397 | `haeun_warn_8` | {name} | school_hallway | haeun_worried |  | 🌅 | *하은이 떠난 뒤 학생회실 문을 두드린다. 대답은 없지 |
| 398 | `haeun_warn_8b` | {name} | school | haeun_worried |  | 🌅 | *학교 앞으로 나왔다.* |
| 399 | `night3_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 가방을 의자에 걸어 둔다.* |
| 400 | `night3_start_2` | {name} | room_my | 없음 |  |  | *책상 위에 엎어 둔 핸드폰 화면을 켠다.* |
| 401 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *읽지 않은 메시지가 떠 있다.* |
| 402 | `night3_faithful_msg_seo_1` | 서연 | room_my | seyoun_normal | 0.35 |  | 오늘 본 거, 비밀이야 |
| 403 | `night3_faithful_msg_seo_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 근데 또 와도 돼 |
| 404 | `night3_faithful_msg_seo_3` | {name} | room_my | seyoun_normal | 0.35 |  | *메시지를 끝까지 읽고 화면을 끈다. 방 안에서 휴대폰 |
| 405 | `night3_dream_1` | {name} | school | 없음 |  |  | *꿈속에서 누군가와 나란히 걷는다. 얼굴은 보이지 않고 |
| 406 | `night3_dream_2_b` | {name} | school | 없음 |  |  | *메모장을 닫았다. 내일 보낼 문장은 아직 없다.* |
| 407 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *커튼 사이로 들어온 아침 햇살에 눈을 뜬다. 핸드폰  |
| 408 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *'삭제하시겠습니까?' 확인 창이 뜬다. 손가락이 버튼 |
| 409 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *1초 동안 화면을 내려다본다. 소정이 책상의 낙서와  |
| 410 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *그래. 삭제 버튼에 올린 손가락으로 화면을 누른다.* |
| 411 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼을 누르지 않고 사진을 새 폴더로 옮긴다.  |
| 412 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *'거절도 네가 해야 할 일이야.' 민수의 말이 떠오른 |
| 413 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *갤러리에서 소정이 사진이 사라지고 빈칸만 남는다.* |
| 414 | `night3_faithful_reflect_4_b` | {name} | room_my | 없음 |  |  | *빈 앨범 썸네일 위를 엄지로 문지른다.* |
| 415 | `night3_faithful_reflect_4_c` | {name} | room_my | 없음 |  |  | *핸드폰을 덮자 검은 화면에 갤러리의 빈칸이 겹쳐 보인 |
| 416 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *알람이 울리기 전에 눈을 떴다.* |
| 417 | `night3_dream_seo_bonus` | {name} | room_my | 없음 |  |  | *눈을 감자 옥상 난간이 먼저 떠오른다.* |
| 418 | `night3_end` | {name} | room_my | 없음 |  |  | *방 불을 끄고 핸드폰을 엎어 둔다.* |
| | **Day 4** | | | | | | |
| 419 | `morning4_start` | {name} | room_my | 없음 |  |  | *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다 |
| 420 | `morning4_nightmare_check` |  | room_my | 없음 |  |  |  |
| 421 | `minsu_cheer_1` | {name} | room_my | 없음 |  |  | *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.* |
| 422 | `minsu_cheer_1_b` | 민수 | room_my | minsu_normal | 0.35 |  | *야 오늘 데이트라며?* |
| 423 | `minsu_cheer_1_c` | {name} | room_my | minsu_normal | 0.35 |  | *어떻게 알았어* |
| 424 | `minsu_cheer_1_d` | 민수 | room_my | minsu_normal | 0.35 |  | *다인이가 단톡방에 올림. 내일 약속 있음, 이라고* |
| 425 | `minsu_cheer_2` | 민수 | room_my | minsu_normal | 0.35 |  | 잘하고 와ㅋㅋ |
| 426 | `minsu_cheer_3` | {name} | room_my | minsu_normal | 0.35 |  | 알아. |
| 427 | `minsu_cheer_4_branch` |  | room_my | 없음 |  |  |  |
| 428 | `minsu_cheer_4_ins_single` | {name} | room_my | minsu_normal | 0.35 |  | *핸드폰 캘린더를 본다. 오늘 약속은 하나뿐이다.* |
| 429 | `morning4_start_2` | {name} | room_my | 없음 |  |  | *심호흡하고 약속 메시지를 다시 확인한다.* |
| 430 | `morning4_seo_msg_1` | 서연 | room_my | seyoun_pout | 0.35 |  | 늦으면 안 돼. 공원 분수대, 10시. |
| 431 | `morning4_seo_msg_1_b` | {name} | room_my | seyoun_pout | 0.35 |  | *메시지는 거기서 끝나 있다.* |
| 432 | `morning4_seo_msg_1_c` | {name} | room_my | seyoun_pout | 0.35 |  | *분수대 앞에 선다. 시계가 9시 58분을 가리킨다.* |
| 433 | `morning4_hidden_check` | {name} | room_my | 없음 |  |  | *주말 아침, 학교 앞 사거리에서 신호를 기다린다.* |
| 434 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 435 | `morning4_end` | {name} | room_my | 없음 |  |  | *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 |
| 436 | `date_seo_1` | {name} | park | seyoun_normal |  |  | *분수대 앞에 서연이 먼저 와 있다. 클립보드는 없고  |
| 437 | `date_seo_compliment_choice` | {name} | park | seyoun_normal |  |  | *서연의 가방끈이 손가락에 한 번 더 감긴다.* |
| 438 | `date_seo_role_trap` | 서연 | park | seyoun_normal |  |  | *가방끈에서 손을 뗀다.* 오늘은 학생회장으로 나온 거 |
| 439 | `date_seo_walk` | {name} | park | seyoun_normal |  |  | *공원을 산책한다. 오리들에게 빵을 던져준다.* |
| 440 | `date_seo_duck` | 서연 | park | seyoun_normal |  |  | 이 애들은 단순해서 좋다. 빵 주면 따라오고 안 주면  |
| 441 | `date_seo_duck_2` | {name} | park | seyoun_normal |  |  | 사람도 그런 거 아냐? |
| 442 | `date_seo_duck_3` | 서연 | park | seyoun_normal |  |  | 사람은 빵 줘도 안 올 때가 있으니까. |
| 443 | `date_seo_duck_4` | 서연 | park | seyoun_normal |  |  | *빵 부스러기가 가라앉는 물가를 보고 있었다. 꽃집 앞 |
| 444 | `date_seo_flower_b` | 서연 | park | seyoun_normal |  |  | *꽃집 유리문 쪽으로 발끝을 돌린다.* 들어가 볼까? |
| 445 | `date_seo_flower_2` | 서연 | park | seyoun_normal |  |  | *꽃집 문을 밀자 종이 울린다. 서연은 진열대를 한 바 |
| 446 | `date_seo_succulent_2` | 서연 | park | seyoun_normal |  |  | 이건 관리하기 쉬워. 물 안 줘도 잘 살아. |
| 447 | `date_seo_succulent_2_b` | {name} | park | seyoun_normal |  |  | 나한테 주는 거야? |
| 448 | `date_seo_succulent_3` | 서연 | park | seyoun_laugh |  |  | 키울 수 있으면. — 못 키우면 내가 다시 가져갈 거니 |
| 449 | `date_seo_end` | 서연 | park | seyoun_worried |  |  | *화분을 내민다. 흙이 든 작은 화분이 손바닥에 닿았다 |
| 450 | `date_seo_end_b` | {name} | street | seyoun_normal |  |  | *공원을 나서 거리를 걸었다.* |
| 451 | `date_seo_end_c` | 서연 | street | seyoun_normal |  |  | *화분 포장지가 손안에서 작게 바스락거린다.* 오늘. |
| 452 | `date_seo_end_d` | 서연 | street | seyoun_shy |  |  | 오늘 괜찮았어. |
| 453 | `pre_confess_minsu` | 민수 | street | minsu_smirk | 0.35 |  | 야, 데이트 중이지? 한마디만 할게 |
| 454 | `pre_confess_minsu_2` | 민수 | street | minsu_smirk | 0.35 |  | 말 돌리지 말고 제대로 해 |
| 455 | `pre_confess_callback` | {name} | street | minsu_smirk |  |  | *주머니 속 핸드폰 모서리가 손바닥에 눌린다. 알림은  |
| 456 | `confess_seo_1` | {name} | top_school | 없음 |  | 🌅 | *데이트가 끝났다. 교문 대신 옥상으로 올라왔다.* |
| 457 | `confess_seo_2` | 서연 | top_school | seyoun_normal |  | 🌅 | 잠깐 올라가자. |
| 458 | `confess_seo_3` | {name} | top_school | seyoun_normal |  | 🌅 | *옥상. 난간 아래 운동장 조명이 켜져 있다. 첫날 서 |
| 459 | `confess_seo_4` | 서연 | top_school | seyoun_normal |  | 🌅 | *서연은 난간에서 한 걸음 떨어져 선다. 열쇠를 주머니 |
| 460 | `confess_seo_4_b` | {name} | top_school | seyoun_normal |  | 🌅 | *주머니 안쪽에서 접힌 메모가 손가락에 걸린다.* |
| 461 | `confess_seo_5` | {name} | top_school | seyoun_normal |  | 🌅 | *메모를 꺼내지 않는다.* |
| 462 | `confess_seo_choice` | {name} | top_school | seyoun_shy2 |  | 🌅 | *열쇠고리만 서연의 손안에서 짧게 울린다.* |
| 463 | `confess_seo_no_1` | {name} | top_school | seyoun_normal |  | 🌅 | 조금 더 있다 갈래. |
| 464 | `confess_seo_no_2` | {name} | top_school | seyoun_worried |  | 🌅 | *서연이 난간 쪽으로 반 걸음 비켜 자리를 내준다.* |
| 465 | `confess_seo_no_3` | 서연 | top_school | seyoun_worried |  | 🌅 | *둘 다 운동장을 내려다본다. 조명이 하나 더 켜진다. |
| 466 | `confess_seo_no_4` | 서연 | top_school | seyoun_sad |  | 🌅 | 내일 점심, 시간 되면 와. |
| 467 | `confess_seo_no_4_b` | {name} | top_school | seyoun_sad |  | 🌅 | *계단을 내려가는 동안 메모는 주머니 안에 그대로 있었 |
| 468 | `day4_night_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 옷소매에 공원 흙과 학교 먼지가 조금 |
| 469 | `day4_night_branch` | 시스템 | room_my | 없음 |  |  |  |
| 470 | `day4_student_night_branch` |  | room_my | 없음 |  |  |  |
| 471 | `day4_night_regret` | {name} | room_my | 없음 |  |  | *집으로 돌아온 뒤에도 채팅창에는 입력하다 만 문장이  |
| 472 | `day4_night_regret_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 473 | `day4_night_regret_msg_seo` | 서연 | room_my | seyoun_normal | 0.35 |  | 오늘 바람 좋았어. 조금 기다렸어. |
| 474 | `day4_night_regret_reply` | {name} | room_my | 없음 |  |  | *답장을 쓰다 지운다. 입력창에는 받침 하나만 남았다가 |
| 475 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 476 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *알람을 일요일 오전으로 맞추고 방 불을 끈다. 전하지 |
| 477 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안 시계가 자정 쪽으로 넘어간다. 휴대폰 화면도  |
| | **Day 5** | | | | | | |
| 478 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소 |
| 479 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 480 | `morning5_start_b` | {name} | room_school | 없음 |  |  | *교실에 들어서자 세 가지가 한꺼번에 눈에 들어온다.  |
| 481 | `morning5_start_2_b` | {name} | room_school | 없음 |  |  | *책상 위에 쪽지가 놓여 있다. 서연의 글씨.* |
| 482 | `morning5_mood_check` | 시스템 | room_school | 없음 |  |  |  |
| 483 | `morning5_mood_low` | {name} | room_school | 없음 |  |  | 마지막 날. 잠금화면에 남은 이름 셋을 차례로 누른다. |
| 484 | `morning5_gate` | {name} | school | 없음 |  |  | *교문 앞에서 소매를 걷어 올린다. 손목에 남던 붉은  |
| 485 | `morning5_seo_note_1` | {name} | room_school | seyoun_normal |  |  | *책상 위에 쪽지가 놓여 있다. 서연의 글씨. — '오 |
| 486 | `morning5_seo_note_1_b` | {name} | school_hallway | 없음 |  |  | *복도 문예부 전시 코너를 지나다 게시판의 빈 압정 네 |
| 487 | `morning5_yuna_story_gone` | {name} | school_hallway | 없음 |  |  | *게시판에는 압정 자국만 남아 있다. 소설이 붙었다 떼 |
| 488 | `morning5_yuna_story_gone_2` | {name} | school_hallway | 없음 |  |  | *도서관의 빈자리, 사라진 책갈피, 붙이지 않은 소설. |
| 489 | `morning5_return_class` | {name} | room_school | dain_normal |  |  | *교실로 돌아오니 다인이 기다리고 있다.* |
| 490 | `morning5_dain_1` | 다인 | room_school | dain_normal |  |  | 야, 오늘 체육 이벤트 파트너로 너 써놨어. |
| 491 | `morning5_dain_1_b` | {name} | room_school | dain_normal |  |  | 허락도 없이? |
| 492 | `morning5_dain_2` | 다인 | room_school | dain_laugh |  |  | 늦으면 화낸다? |
| 493 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *행사 준비 시간. 복도를 걷는데 — 빈 교실 앞을 지 |
| 494 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *행사 중간 쉬는 시간. 보건실 앞을 지나간다.* |
| 495 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 496 | `morning5_end` | {name} | room_school | 없음 |  |  | *세 방향에서 온 쪽지와 알림을 책상 위에 나란히 둔다 |
| 497 | `tour_seo_1` | {name} | school | seyoun_normal |  |  | *교문 앞에 나란히 선다. 첫날 서연이 기다리고 있던  |
| 498 | `tour_seo_2` | 서연 | school | seyoun_normal |  |  | 여기서 처음 만났지. |
| 499 | `tour_seo_3` | {name} | school | seyoun_normal |  |  | 그때 '과분한데'라고 하니까 — 혼날 뻔했지. |
| 500 | `tour_seo_4` | 서연 | school | seyoun_laugh |  |  | 혼내진 않았잖아. 그때부터 보고 있었어. |
| 501 | `tour_seo_5` | {name} | school | seyoun_normal |  |  | 첫날부터? |
| 502 | `tour_seo_6` | 서연 | school | seyoun_shy |  |  | 바람 때문에 잘못 들었을 수도 있어. |
| 503 | `tour_seo_7` | {name} | school | seyoun_shy |  |  | *바람은 불지 않는다.* |
| 504 | `tour_seo_8` | {name} | school | seyoun_normal |  |  | *서연이 가방 안쪽에서 작은 금속 열쇠고리를 꺼낸다.  |
| 505 | `tour_seo_9` | 서연 | school | seyoun_normal |  |  | 이거. |
| 506 | `tour_seo_10` | {name} | school | seyoun_normal |  |  | 옥상 열쇠...는 아니네. |
| 507 | `tour_seo_11` | 서연 | school | seyoun_normal |  |  | 학생회 기념품이야. 진짜 열쇠는 오늘 반납해야 하니까. |
| 508 | `tour_seo_12` | 서연 | school | seyoun_normal |  |  | *열쇠고리를 건넨다. 손이 스치자 서연은 가방끈을 다시 |
| 509 | `tour_seo_13` | {name} | school | seyoun_normal |  |  | 그럼 다음부터 옥상은 어떻게 올라가? |
| 510 | `tour_seo_14` | 서연 | school | seyoun_shy |  |  | 나한테 말해. 정식으로 빌려서 같이 열면 되잖아. |
| 511 | `tour_seo_freetalk` | 서연 | top_school | seyoun_normal |  |  | *옥상 난간에 손을 얹고 학교를 내려다본다.* 마지막  |
| 512 | `tour_seo_end` | {name} | school | seyoun_shy |  |  | *서연이 건넨 열쇠고리를 주머니에 넣는다. 진짜 옥상  |
| 513 | `after5_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 514 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *행사가 끝나갈 무렵, 복도에서 선택하지 않은 두 사람 |
| 515 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 516 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 517 | `after5_farewell_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나가 다가온다. 아무 말 없이 책 한 |
| 518 | `after5_farewell_yuna_low` | 유나 | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나와 눈이 마주친다. 유나는 들고 있 |
| 519 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 520 | `after5_farewell_dain_1` | {name} | gym | dain_normal |  | 🌅 | *체육관 앞에서 다인이 걸어온다. 평소보다 보폭이 작다 |
| 521 | `after5_farewell_dain_low` | 다인 | gym | dain_normal |  | 🌅 | *체육관 앞에서 다인이 걸어오다 두 걸음 떨어진 곳에  |
| 522 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *석양이 교정 창문마다 걸린다. 방송실에서 행사 종료  |
| 523 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 524 | `after5_last_chance_1` | {name} | school_back | 없음 |  | 🌅 | *행사장 스피커 전원이 꺼진다. 갈림길 안내판 아래에서 |
| 525 | `after5_last_chance_2` | {name} | school_back | 없음 |  | 🌅 | *주머니 속 휴대폰을 꺼낸다. 검은 화면에 행사 현수막 |
| 526 | `after5_last_chance_route_check` |  | school_back | 없음 |  | 🌅 |  |
| 527 | `after5_last_chance_seo_aff_check` |  | school_back | 없음 |  | 🌅 |  |
| 528 | `after5_last_chance_seo_low_1` | {name} | school_back | 없음 |  | 🌅 | 서연아. |
| 529 | `after5_last_chance_seo_low_2` | 서연 | school_back | seyoun_sad |  | 🌅 | *돌아본다. 발끝은 출구 쪽에 반쯤 남아 있다.* 왜. |
| 530 | `after5_last_chance_choice` | {name} | school_back | 없음 |  | 🌅 | *손바닥 안에서 핸드폰이 눌린다.* |
| 531 | `after5_confess_yes` | {name} | school_back | 없음 |  | 🌅 | *휴대폰을 주머니에 넣고 이름을 부른다.* |
| 532 | `after5_confess_yes_2` | {name} | school_back | 없음 |  | 🌅 | 나, 너한테 할 말이 있어. |
| 533 | `after5_confess_aff_seo` |  | school_back | 없음 |  | 🌅 |  |
| 534 | `after5_confess_react_seo_low` | 서연 | school_back | seyoun_sad |  | 🌅 | *횡단보도 신호가 한 번 바뀔 때까지 말이 없다.* 들 |
| 535 | `after5_confess_fail_walk_1` | {name} | school_back | 없음 |  | 🌅 | *해가 더 내려앉는다. 같은 쪽으로 걷기만 한다.* |
| 536 | `after5_confess_fail_walk_2` | {name} | park | 없음 |  | 🌅 | *답을 못 낸 채 공원 쪽으로 걸었다.* |
| 537 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 538 | `ending_last_chance_resolve` | 시스템 | park | 없음 |  |  |  |
| 539 | `ending_confessed_aff_check` | 시스템 | park | 없음 |  |  |  |
| 540 | `ending_confessed_aff_seo` | 시스템 | top_school | 없음 |  |  |  |
| 541 | `day5_ending_good` | {name} | park | 없음 |  |  | *고백 후에도 달라진 건 많지 않았다. 일정이 하나 더 |
| 542 | `good_1` | {name} | park | 없음 |  |  | *며칠 동안 대화가 자꾸 끊겼다. 그래도 연락은 끊기지 |
| 543 | `good_1b` | {name} | park | 없음 |  |  | *둘은 같은 길로 나왔다.* |
| 544 | `good_1c` | {name} | park | 없음 |  |  | *벚꽃잎이 신발 앞에 붙었다가, 다음 걸음에 떨어진다. |
| 545 | `good_1_seo` | 서연 | park | seyoun_normal |  |  | 천천히 하자. |
| 546 | `good_1_seo_b` | 서연 | park | seyoun_normal |  |  | *서연이 {name}의 소매 끝에 붙은 꽃잎을 떼어낸다 |
| 547 | `good_1_seo_c` | 서연 | park | seyoun_normal |  |  | *서연은 반 걸음 늦춰 걷는다.* |
| 548 | `good_1_seo_d` | {name} | park | seyoun_normal |  |  | *발걸음이 나란해진다.* |
| 549 | `good_2_seo` | {name} | park | seyoun_normal |  |  | *벚꽃길 끝. 서연이 횡단보도 앞에서 멈춘다.* |
| 550 | `good_3_seo` | 서연 | park | seyoun_normal |  |  | 신호 바뀐다. |
| 551 | `good_4_seo` | {name} | park | seyoun_normal |  |  | *서연이 먼저 건넌다. 중간쯤에서 걸음을 늦춘다.* |
| 552 | `good_5_seo` | {name} | ending_good_seoyeon | 없음 |  |  | *건너편에서 다음 일정을 정했다. 시간과 장소만 말했다 |
| 553 | `good_epilogue_1` | {name} | ending_good_seoyeon | 없음 |  |  | *서연의 문자가 온다. '내일 점심, 옥상. 이번엔 정 |
| 554 | `good_epilogue_2` | {name} | ending_good_seoyeon | 없음 |  |  | *사진 속 사용대장 정오 칸에 두 사람의 이름이 있다. |
| 555 | `good_epilogue_3` | {name} | ending_good_seoyeon | 없음 |  |  | *다음 날 서연은 빌린 열쇠로 문을 열고 바로 반납함에 |
| 556 | `good_5_cg_seo` | 시스템 | ending_good_seoyeon | 없음 |  |  | ─── GOOD END ─── |
| 557 | `day5_seo_ending_freetalk_intro` | {name} | top_school | seyoun_normal |  |  | *옥상. 열린 문 옆에 화분 빈자리가 있다.* |
| 558 | `day5_seo_ending_freetalk_router` | {name} | top_school | 없음 |  |  |  |
| 559 | `day5_seo_ending_freetalk_late_good` | 서연 | park | seyoun_laugh |  | 🌙 | *공원 길에서 걸음을 늦추고 옆자리를 맞춘다.* 마지막 |
| 560 | `day5_credits` |  | school | 없음 |  |  |  |
| 561 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### day5_seo_ending_freetalk_true_love

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_seo_choice`: (선택)
- `after1_jealousy_seo_choice`: (선택)
- `after_end`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_seo_choice`: (선택)
- `after2_choice`: (선택)
- `after2_seo_choice1`: (선택)
- `after2_seo_choice2`: (선택)
- `night2_choice`: (선택)
- `morning3_date_seo_choice`: (선택)
- `lunch3_choice`: (선택)
- `after3_choice`: (선택)
- `after3_seo_choice`: (선택)
- `date_seo_compliment_choice`: (선택)
- `confess_seo_choice`: (선택)
- `wall_seo_hug_choice`: (선택)
- `wall_seo_line_choice`: (선택)
- `date_choice_true_seo`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=60 유나=-8 다인=-4 담임=0 보건=0

<details>
<summary>씬 타임라인 (590씬)</summary>

| # | 씬 ID | 화자 | 배경 | 캐릭터 | OP | 밤 | 대사 (앞 30자) |
|---|--------|------|------|--------|----|----|----------------|
| | **Day 1** | | | | | | |
| 1 | `start` | {name} | school | 없음 |  |  | *4월의 교문 앞. 밟힌 꽃잎이 드문드문 붙어 있다.  |
| 2 | `start_3` | {name} | school | 없음 |  |  | *주머니에서 핸드폰이 울리고 예전 학교 단체 카톡방에  |
| 3 | `name_input_scene` | 시스템 | school | 없음 |  |  | 전학생, 당신의 이름은? |
| 4 | `gate_1` | {name} | school | 없음 |  |  | *낯선 교문 앞, 내 교복만 아직 접힌 선이 선명하다. |
| 5 | `seoyeon_meet_1` | 서연 | school | seyoun_normal |  |  | 전학생? {name} 맞지? |
| 6 | `seoyeon_meet_2` | 서연 | school | seyoun_normal |  |  | *{name}의 이름을 한 번 더 확인한 뒤 클립보드  |
| 7 | `seoyeon_meet_3` | {name} | school | seyoun_normal |  |  | 맞는데. 어떻게 알았어? |
| 8 | `seoyeon_meet_4` | 서연 | school | seyoun_normal |  |  | 학생회장. 전학생 안내는 내 담당이야. |
| 9 | `seoyeon_meet_5` | 서연 | school | seyoun_normal |  |  | 따라와. 15분 안에 끝낼게. |
| 10 | `seoyeon_meet_6` | {name} | school | seyoun_normal |  |  | 학생회장이 직접? 과분한데. |
| 11 | `seoyeon_meet_7` | 서연 | school | seyoun_normal |  |  | 과분한 건지 아닌 건지는 내가 정해. |
| 12 | `seoyeon_meet_8` | {name} | school | seyoun_normal |  |  | *서연은 이미 교문 안쪽으로 걸음을 옮겼다. 안내 파일 |
| 13 | `seoyeon_choice` | {name} | school | seyoun_normal |  |  | *어떻게 반응할까?* |
| 14 | `choice_flirt_1` | 서연 | school | seyoun_normal |  |  | *서연의 구두가 반 바퀴 돌아선다. 안경테 위로 한쪽  |
| 15 | `choice_flirt_2` | 서연 | school | seyoun_laugh |  |  | 첫날부터 말은 잘하네. 이름은 금방 외우겠다. |
| 16 | `choice_flirt_3` | {name} | school | seyoun_laugh |  |  | 점수제야? |
| 17 | `choice_flirt_4` | 서연 | school | seyoun_normal |  |  | 아직 분위기 파악은 안 됐나 봐. 나쁘진 않아. |
| 18 | `choice_flirt_5` | {name} | school | seyoun_normal |  |  | 영광인데? |
| 19 | `choice_flirt_6` | 서연 | school | seyoun_normal |  |  | 아직 영광인지 재앙인지 모르는 거지. |
| 20 | `choice_flirt_7` | 서연 | school | seyoun_laugh |  |  | *앞서 걷는다. 한 번 뒤돌아보고 {name}의 발소리 |
| 21 | `hallway_1` | 서연 | school_hallway | seyoun_back |  |  | *복도를 앞서 걷는다. 마주치는 학생들이 먼저 인사할  |
| 22 | `hallway_3` | 서연 | school_hallway | seyoun_normal |  |  | 3학년 건물은 여기, 저쪽이 도서관. 매점은 지하. |
| 23 | `hallway_4` | 서연 | school_hallway | seyoun_normal |  |  | *주머니에서 열쇠를 꺼내 손바닥 위에서 짤랑거린다.* |
| 24 | `hallway_5` | 서연 | school_hallway | seyoun_normal |  |  | 옥상은 원래 잠겨 있어. 학생회장 특권이지. |
| 25 | `hallway_6` | {name} | school_hallway | seyoun_normal |  |  | 비밀 아지트라도 있어? |
| 26 | `hallway_6_b` | 서연 | school_hallway | seyoun_normal |  |  | *열쇠고리 소리가 뚝 끊긴다.* 눈치 빠르네. |
| 27 | `hallway_6_c` | 서연 | school_hallway | seyoun_normal |  |  | *대답 대신 열쇠를 다시 주머니에 넣는다.* |
| 28 | `hallway_7` | 서연 | school_hallway | seyoun_normal |  |  | 아, 점심. 밥 어디서 먹는지 모르지? 같이 가. |
| 29 | `hallway_8` | {name} | school_hallway | seyoun_shy |  |  | *서연은 교실 앞에 서서 문패를 가리킨다.* |
| 30 | `hallway_10` | 서연 | school_hallway | seyoun_normal |  |  | 여기야. 들어가 봐. |
| 31 | `hallway_11` | {name} | school_hallway | seyoun_normal |  |  | 점심때도 안내해 주는 거야? |
| 32 | `hallway_12` | 서연 | school_hallway | seyoun_normal |  |  | 그건 네가 잘하면. |
| 33 | `hallway_13` | 서연 | school_hallway | seyoun_back |  |  | *돌아선 서연이 클립보드를 든 손만 어깨 높이로 한 번 |
| 34 | `hallway_13_b` | {name} | school_hallway | seyoun_back |  |  | *복도 끝으로 멀어질 때까지 걸음이 흐트러지지 않았다. |
| 35 | `classroom_1` | {name} | room_school | 없음 |  |  | *교실 문을 열자 소음이 뚝 끊기고 가까운 책상 의자  |
| 36 | `classroom_2_b` | {name} | room_school | teacher_normal |  |  | *교탁 앞에 담임선생님이 서 있다. 20대 후반. 가디 |
| 37 | `classroom_3` | 담임 | room_school | teacher_normal |  |  | 자, 오늘부터 우리 반에 들어온 전학생이야. 자기소개  |
| 38 | `classroom_3_b` | {name} | room_school | teacher_normal |  |  | {name}입니다. 잘 부탁드립니다. *담임이 출석부의 |
| 39 | `classroom_5_b` | 담임 | room_school | teacher_normal |  |  | 그래, {name}. 외웠어. *출석부에 이름을 덧그으 |
| 40 | `classroom_5_c` | {name} | room_school | teacher_normal |  |  | *담임의 혼잣말은 교실 소음에 묻힌다. 교실 한쪽에서  |
| 41 | `classroom_dain_1` | 다인 | room_school | dain_normal |  |  | 오, 전학생. 우리 반에 새 얼굴 들어왔네! |
| 42 | `classroom_dain_2` | {name} | room_school | dain_normal |  |  | *갈색 숏컷에 배구부 유니폼. 자리에서 반쯤 일어나 손 |
| 43 | `classroom_dain_3` | 담임 | room_school | teacher_normal |  |  | 다인아, 목소리 낮춰. 그리고 교실에서는 유니폼 좀 그 |
| 44 | `classroom_dain_4` | 다인 | room_school | dain_normal |  |  | 쌤, 이게 제일 편하다니까요. 아무튼 전학생, 반갑다. |
| 45 | `classroom_dain_5` | {name} | room_school | dain_normal |  |  | *교실 몇 군데서 웃음이 터진다. 다인은 손을 더 높이 |
| 46 | `classroom_dain_5_b` | 담임선생님 | room_school | teacher_normal |  |  | *출석부 모서리로 교탁을 두 번 두드리고 다인 쪽을 보 |
| 47 | `classroom_dain_5_c` | 담임 | room_school | teacher_normal |  |  | 에너지 좀 아껴. 아직 1교시도 안 시작했어. |
| 48 | `classroom_dain_5_d` | 담임선생님 | room_school | teacher_angry |  |  | *담임은 출석부를 넘긴다.* |
| 49 | `classroom_yuna_1` | {name} | room_school | yuna_bored |  |  | *창가 맨 뒤쪽의 한 여학생은 턱을 괸 채 창밖만 본다 |
| 50 | `classroom_yuna_2` | {name} | room_school | yuna_bored |  |  | *은백색 머리. 붉은 눈. 팔의 타투. 창가 맨 뒤 자 |
| 51 | `classroom_yuna_4` | {name} | room_school | yuna_bored |  |  | *앞줄에서 누군가 속삭인다. '쟤한테 말 걸지 마. 무 |
| 52 | `classroom_seat_1` | 담임선생님 | room_school | teacher_normal |  |  | *빈자리를 가리킨다.* |
| 53 | `classroom_seat_2` | {name} | room_school | dain_normal |  |  | *다인 옆자리다. 의자에 앉기도 전에 다인이 내 책상  |
| 54 | `classroom_minsu_1` | {name} | room_school | minsu_normal |  |  | *자리에 앉으려는데 — 앞자리 남학생이 돌아본다.* |
| 55 | `classroom_minsu_2` | 민수 | room_school | minsu_smirk |  |  | 야, 전학생. 환영한다. — 그리고 조심해. |
| 56 | `classroom_minsu_3` | {name} | room_school | minsu_smirk |  |  | 뭘? |
| 57 | `classroom_minsu_2_b` | 민수 | room_school | minsu_normal |  |  | *다인 쪽으로 턱짓한다.* 체력 관리. |
| 58 | `classroom_dain_talk_1` | {name} | room_school | minsu_normal |  |  | *앞자리 이름표에는 '민수'라고 적혀 있었다.* |
| 59 | `classroom_dain_talk_2` | {name} | room_school | dain_normal |  |  | *자리에 앉자마자 다인이 상체를 기울인다. 책상 두 개 |
| 60 | `classroom_dain_talk_3` | 다인 | room_school | dain_normal |  |  | 야, {name}. 운동 좋아해? |
| 61 | `classroom_dain_talk_4` | {name} | room_school | dain_normal |  |  | 갑자기? |
| 62 | `classroom_dain_talk_5` | 다인 | room_school | dain_normal |  |  | 그냥. 방과후에 리시브 연습 상대가 필요해서. 서브 넣 |
| 63 | `classroom_dain_talk_6` | {name} | room_school | dain_normal |  |  | 나 볼 머신이야? |
| 64 | `classroom_dain_talk_7` | 다인 | room_school | dain_laugh |  |  | 그래도 볼 머신보단 낫겠지. 아마. |
| 65 | `classroom_dain_talk_8` | {name} | room_school | dain_laugh |  |  | *'아마' 뒤에 다인의 시선이 볼 머신 쪽으로 간다.  |
| 66 | `classroom_yuna_note_1` | {name} | room_school | yuna_bored |  |  | *접힌 쪽지가 책상 위로 미끄러져 온다. 뒤를 돌아봐도 |
| 67 | `classroom_yuna_note_3` | {name} | room_school | yuna_bored |  |  | *'시끄러운 자리 걸렸네. — 유나' 연보라색 잉크.  |
| 68 | `classroom_yuna_note_5` | {name} | room_school | yuna_bored |  |  | *유나 쪽을 보자 시선은 여전히 창밖이고 손만 책상 아 |
| 69 | `classroom_yuna_note_6` | {name} | room_school | yuna_bored |  |  | *수업 종이 울리자 유나는 다시 창밖을 보고 다인은 벌 |
| 70 | `lunch_start` | {name} | school_hallway | 없음 |  |  | *점심시간. 학생들로 찬 복도 끝에는 서연의 도시락 가 |
| 71 | `lunch_start_4` | {name} | school_hallway | seyoun_normal |  |  | *복도 끝에서 서연이 눈을 맞추더니 옥상 쪽을 손으로  |
| 72 | `lunch_start_4_b` | {name} | school_hallway | dain_normal |  |  | *옆에서 다인이 팔목을 낚아챈다.* |
| 73 | `lunch_start_5` | 다인 | school_hallway | dain_normal |  |  | 야, 밥 먹었어? 매점 가자. 빵 내기하자, 진 사람이 |
| 74 | `lunch_start_6` | {name} | school_hallway | yuna_normal |  |  | *유나는 가방만 들고 교실을 빠져나가 도서관 방향으로  |
| 75 | `lunch_start_7` | {name} | school_hallway | 없음 |  |  | *복도는 세 갈래다. 옥상, 매점, 도서관. 주머니 안 |
| 76 | `lunch_choice` | {name} | school_hallway | 없음 |  |  | *누구를 따라갈까?* |
| 77 | `lunch_seo_1` | 서연 | top_school | seyoun_normal |  |  | *옥상 문을 열쇠로 연다. 바람이 확 불어온다.* |
| 78 | `lunch_seo_1_aff_default` | 서연 | top_school | seyoun_normal |  |  | 앉을 거야? |
| 79 | `lunch_seo_2` | {name} | top_school | seyoun_normal |  |  | *옥상 바닥에는 흙 한 줌 보이지 않는다. 물방울 맺힌 |
| 80 | `lunch_seo_3` | 서연 | top_school | seyoun_normal |  |  | 여기가 내 영역이거든. |
| 81 | `lunch_seo_4` | {name} | top_school | seyoun_normal |  |  | 학생회장 전용 옥상이야? |
| 82 | `lunch_seo_5` | 서연 | top_school | seyoun_normal |  |  | 아무나 데려오는 데는 아닌데. *의자를 하나 펼친다.* |
| 83 | `lunch_seo_6` | {name} | top_school | seyoun_normal |  |  | 첫날부터 예외 적용? 뭔가 수상한데. |
| 84 | `lunch_seo_6_b` | 서연 | top_school | seyoun_laugh |  |  | *의자를 발끝으로 밀어 {name} 쪽에 맞춘다.* 의 |
| 85 | `lunch_seo_8` | 서연 | top_school | seyoun_laugh |  |  | *가방에서 같은 크기의 도시락통 두 개, 2인분을 포개 |
| 86 | `lunch_seo_9` | {name} | top_school | seyoun_normal |  |  | 2인분인데? |
| 87 | `lunch_seo_10` | 서연 | top_school | seyoun_normal |  |  | 학생회 일 하다 보면 밥 먹을 시간이 없어져서. 항상  |
| 88 | `lunch_seo_11` | {name} | top_school | seyoun_normal |  |  | *도시락 뚜껑을 열자 반찬이 줄 맞춰 놓여 있다. 계란 |
| 89 | `lunch_seo_13` | {name} | top_school | seyoun_normal |  |  | 직접 만든 거야? |
| 90 | `lunch_seo_14` | 서연 | top_school | seyoun_normal |  |  | 학생회장이 밥도 못 싸면 말이 안 되지. |
| 91 | `lunch_seo_15` | {name} | top_school | seyoun_normal |  |  | 그건 답이 아닌데. |
| 92 | `lunch_seo_16` | 서연 | top_school | seyoun_normal |  |  | *젓가락을 건넨다.* 먹어. 식으면 맛없어. |
| 93 | `lunch_seo_17` | 서연 | top_school | seyoun_normal |  |  | *대답 대신 밥을 먹는다. 난간 너머로 운동장과 별관  |
| 94 | `lunch_seo_19` | 서연 | top_school | seyoun_normal |  |  | 어때, 이 학교? |
| 95 | `lunch_seo_20` | {name} | top_school | seyoun_normal |  |  | 밥은 맛있어. |
| 96 | `lunch_seo_21` | 서연 | top_school | seyoun_laugh |  |  | *젓가락 끝이 도시락 칸막이를 가볍게 친다.* 학교를  |
| 97 | `lunch_seo_22` | 서연 | top_school | seyoun_laugh |  |  | *계란말이를 집어 내민다.* |
| 98 | `lunch_seo_23` | 서연 | top_school | seyoun_normal |  |  | 한 입만. |
| 99 | `lunch_seo_choice` | 서연 | top_school | seyoun_normal |  |  | *계란말이를 내밀고 있다.* |
| 100 | `lunch_seo_c1_1` | {name} | top_school | seyoun_normal |  |  | *서연의 젓가락에서 계란말이를 받아먹는다.* |
| 101 | `lunch_seo_c1_2` | {name} | top_school | seyoun_normal |  |  | 맛있다. |
| 102 | `lunch_seo_c1_2_b` | 서연 | top_school | seyoun_normal |  |  | *물병을 들어 입가를 가린다. 라벨이 손안에서 구겨진다 |
| 103 | `lunch_seo_c1_3` | 서연 | top_school | seyoun_shy |  |  | 그 정도는 해야지. |
| 104 | `lunch_seo_c1_3_b` | {name} | top_school | seyoun_shy |  |  | *반쯤 접힌 라벨이 물병에 붙어 있다. 서연은 다시 젓 |
| 105 | `lunch_seo_after` | {name} | top_school | seyoun_normal |  |  | *운동장 스피커에서 점심 종료를 알리는 예비음이 울린다 |
| 106 | `lunch_seo_after_2` | 서연 | top_school | seyoun_normal |  |  | 다음에도 점심시간 비워둬. |
| 107 | `lunch_seo_after_3` | {name} | top_school | seyoun_normal |  |  | 초대해 주는 거야? |
| 108 | `lunch_seo_after_4` | 서연 | top_school | seyoun_normal |  |  | 아니. 허가해 주는 거야. |
| 109 | `lunch_seo_after_5` | 서연 | top_school | seyoun_normal |  |  | *도시락 끈을 한 번 묶었다가 더 짧게 조인다.* |
| 110 | `lunch_seo_after_7` | {name} | top_school | seyoun_normal |  |  | *도시락 매듭이 처음보다 단단해져 있다.* |
| 111 | `lunch_seo_freetalk` | 서연 | top_school | seyoun_normal |  |  | *도시락 뚜껑을 정리하고 접이식 의자를 신발 끝으로 한 |
| 112 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *종이 울린다. 점심시간이 끝났다.* |
| 113 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에 |
| 114 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 115 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창 |
| 116 | `after_kakao_5` | {name} | school_hallway | 없음 |  | 🌅 | *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른 |
| 117 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록  |
| 118 | `after1_jealousy_seo_1` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 점심때 어디 갔어? 매점 갔는데 없더라. |
| 119 | `after1_jealousy_seo_2` | {name} | school_hallway | dain_normal |  | 🌅 | *답장창에 '서연이랑'까지 썼다가 지운다. 커서만 다시 |
| 120 | `after1_jealousy_seo_3` | 다인 | school_hallway | dain_pout |  | 🌅 | 옥상에서 내려오는 거 봤거든. 둘이서? |
| 121 | `after1_jealousy_seo_choice` | 다인 | school_hallway | dain_pout |  | 🌅 | *휴대폰을 쥔 손에 힘을 준다.* |
| 122 | `after1_jealousy_seo_lie` | {name} | school_hallway | dain_normal |  | 🌅 | 아니, 그냥 혼자 돌아다녔어. |
| 123 | `after1_jealousy_seo_lie_2` | 다인 | school_hallway | dain_laugh |  | 🌅 | 진짜? 혼자? — 아 그래, 첫날이니까 헤맸겠다! |
| 124 | `after1_jealousy_seo_yuna` | {name} | school_hallway | dain_normal |  | 🌅 | *가방 옆주머니에 접힌 쪽지가 걸려 있다. 유나의 필체 |
| 125 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *복도를 계속 걷는다.* |
| 126 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도를 걷는데 뒤에서 쿵쿵 발소리.* |
| 127 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 조심! |
| 128 | `after_miss_dain_3` | {name} | school_hallway | dain_normal |  | 🌅 | *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 |
| 129 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 피했다? 반사신경 괜찮은데. |
| 130 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 넌 복도에서 왜 전력질주야? |
| 131 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 늦었거든! 체육관 가야 해. 내일 보자, 전학생! |
| 132 | `after_miss_dain_6_b` | {name} | school_hallway | dain_laugh |  | 🌅 | *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을  |
| 133 | `after_miss_dain_7` | {name} | school_hallway | dain_laugh |  | 🌅 | *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아 |
| 134 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으 |
| 135 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 이거 떨어뜨렸어. |
| 136 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피 |
| 137 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌  |
| 138 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 고마워. |
| 139 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피를 책등 사이에 끼우고 돌아선다.* |
| 140 | `after_miss_yuna_4` | {name} | library_old | yuna_normal |  | 🌅 | *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 |
| 141 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든 |
| 142 | `night_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄 |
| 143 | `night_start_3` | {name} | room_my | 없음 |  |  | *핸드폰이 울린다. 학교 메신저.* |
| 144 | `night_msg_seo_1` | 서연 | room_my | seyoun_normal | 0.35 |  | *오늘 옥상 어땠어?* |
| 145 | `night_msg_seo_2` | {name} | room_my | seyoun_normal | 0.35 |  | *바람이 좋더라* |
| 146 | `night_msg_seo_3` | 서연 | room_my | seyoun_normal | 0.35 |  | *다음엔 음료 정도는 준비해 놓을게* |
| 147 | `night_msg_seo_4` | 서연 | room_my | seyoun_normal | 0.35 |  | *서비스야* |
| 148 | `night_msg_seo_5` | {name} | room_my | seyoun_normal | 0.35 |  | *'서비스야'를 일부러 한 줄 띄어서 보냈다.* |
| 149 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 다른 알림이 보인다.* |
| 150 | `night_late_transition` | {name} | room_my | 없음 |  |  | *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시 |
| 151 | `night_late_branch` | {name} | room_my | 없음 |  |  | *화면이 밝아진다.* |
| 152 | `night_seo_late_1` | 서연 | room_my | seyoun_normal | 0.35 |  | *내일 학교에서 봐.* |
| 153 | `night_seo_late_2` | 서연 | room_my | seyoun_normal | 0.35 |  | *안 오면 찾으러 갈 거야* |
| 154 | `night_seo_late_3` | {name} | room_my | seyoun_normal | 0.35 |  | *휴대폰을 내려놓자 잠금화면에 내일 등교 시간이 남는다 |
| 155 | `night_end_1` | {name} | room_my | 없음 |  |  | *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교 |
| 156 | `night_end_3` | {name} | room_my | 없음 |  |  | *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을  |
| | **Day 2** | | | | | | |
| 157 | `morning2_start` | {name} | room_school | 없음 |  |  | *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.* |
| 158 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 159 | `morning2_greet_seo_1` |  | 없음 | 없음 |  |  |  |
| 160 | `morning2_greet_seo_1_roof` | 서연 | room_school | seyoun_normal |  |  | 어제 옥상에서 한 말, 아직 유효한 거지? |
| 161 | `morning2_greet_seo_2` | {name} | room_school | seyoun_normal |  |  | *클립보드를 오늘도 팔 안쪽에 붙인 서연이 먼저 다가온 |
| 162 | `morning2_greet_seo_others_2` | {name} | room_school | seyoun_normal |  |  | *서연이 클립보드를 한 번 두드린다.* |
| 163 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *자리에 앉으려는데 — 책상 위에 접힌 쪽지가 하나 놓 |
| 164 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 165 | `morning2_note_3` | {name} | room_school | yuna_normal | 0.35 |  | *어제와 같은 글씨. 아래쪽에 장소가 적혀 있다. '도 |
| 166 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가다 교실 안을 들여다본다.* 어제 잘 잤 |
| 167 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 학생회장이 교실까지 인사하러 와? |
| 168 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 순찰이야. — 출석률 확인 겸. |
| 169 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | *복도로 돌아가기 직전 클립보드 끝이 문틀에 한 번 닿 |
| 170 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연이 사라진 복도를 바라보는데 — 뒤에서 민수가 돌 |
| 171 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 이틀 만에 학생회장이 인사하러 오냐? 나 1 |
| 172 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 인기가 없는 거 아닐까. |
| 173 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 그건 맞는데 그게 중요한 게 아니잖아. |
| 174 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *다인은 서연의 뒷모습이 교실 안으로 사라질 때까지 바 |
| 175 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 회장님도 우리 전학생한테 관심 있어? 인기 많네! |
| 176 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | '우리' 전학생? |
| 177 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 내가 먼저 봤잖아. 그럼 우리 맞지. 찜한 거. |
| 178 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *쉬는 시간. 복도로 나왔다.* |
| 179 | `morning2_break_1` | {name} | school_hallway | 없음 |  |  | *서연의 클립보드 끝이 책상에 톡 닿는다. 답할 틈도  |
| 180 | `morning2_seo_dust_1` | {name} | school_hallway | seyoun_normal |  |  | *1교시가 끝난 쉬는 시간, 복도에서 서연과 스친다.  |
| 181 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 잠깐. |
| 182 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *손이 {name}의 어깨에 닿는다. 먼지를 두 번 털 |
| 183 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 옷에 뭐 묻었어. |
| 184 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | *서연의 손이 떨어진 자리에서 가방끈이 비뚤어져 있다. |
| 185 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 왜 그래? 먼지잖아. |
| 186 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *어깨의 먼지는 없어졌는데 가방끈을 두 번이나 다시 고 |
| 187 | `morning2_dain_react_2` | {name} | school_hallway | dain_angry |  |  | *서연이 클립보드를 고쳐 끼고 복도로 간다. 뒤에서 다 |
| 188 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 지금 뭐야? 어깨 만진 거야? |
| 189 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 먼지 털어준 거야. |
| 190 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 먼지가 진짜 있긴 했어? |
| 191 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | *대답 대신 가방끈을 고쳐 잡았다. 다인은 그걸 보고도 |
| 192 | `morning2_end` | {name} | school_hallway | seyoun_normal |  |  | *민수 말로는 1년 동안 먼저 인사한 적도 없다던 서연 |
| 193 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *점심. 주머니에는 유나의 쪽지가 있고 복도 끝에서는  |
| 194 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *누구와 함께할까.* |
| 195 | `lunch2_seo_1_check` | {name} | school_hallway | 없음 |  |  | *옥상으로 올라간다.* |
| 196 | `lunch2_seo_1` | {name} | top_school | seyoun_normal |  |  | *옥상. 어제와 같은 장소. 서연이 도시락을 펼치고 있 |
| 197 | `lunch2_seo_2` | 서연 | top_school | seyoun_normal |  |  | 또 왔네. 맛 들렸나 봐. |
| 198 | `lunch2_seo_3` | {name} | top_school | seyoun_normal |  |  | 밥이 맛있었으니까. |
| 199 | `lunch2_seo_4` | 서연 | top_school | seyoun_laugh |  |  | 밥 때문이야? |
| 200 | `lunch2_seo_5` | {name} | top_school | seyoun_laugh |  |  | 바람도 좋고. |
| 201 | `lunch2_seo_6` | 서연 | top_school | seyoun_normal |  |  | 바람이라. |
| 202 | `lunch2_seo_7` | {name} | top_school | seyoun_normal |  |  | *서연이 도시락 뚜껑을 여는 순간 옥상 문이 철컥 열린 |
| 203 | `lunch2_seo_9` | 다인 | top_school | dain_normal |  |  | 여기 있었네. 찾았다. 오늘도 나 빼고 먹으려고? |
| 204 | `lunch2_seo_10` | 서연 | top_school | seyoun_normal |  |  | 옥상은 허가제야. 그리고 오늘 점심은 내가 먼저 잡았고 |
| 205 | `lunch2_seo_11` | 다인 | top_school | dain_normal |  |  | 그럼 난 지금부터 끼면 되겠네. 나도 앉는다? |
| 206 | `lunch2_seo_12` | {name} | top_school | dain_normal |  |  | *다인이 빈자리에 바로 앉는다. 서연의 젓가락이 계란말 |
| 207 | `lunch2_seo_13b` | 다인 | top_school | dain_normal |  |  | 반가워요, 회장님. 그런데 옆자리는 비었죠? |
| 208 | `lunch2_seo_13b_b` | 서연 | top_school | seyoun_normal |  |  | *서연이 도시락을 {name} 쪽으로 더 붙인다.* 자 |
| 209 | `lunch2_seo_14` | 서연 | top_school | seyoun_normal |  |  | *다인이 앉으려 하자 빈 의자를 발끝으로 자기 쪽에 붙 |
| 210 | `lunch2_seo_15` | {name} | top_school | seyoun_normal |  |  | 같은 반이잖아. 너희 둘도 이제 아는 사이고. |
| 211 | `lunch2_seo_16` | 서연 | top_school | seyoun_normal |  |  | 친해지는 것하고 양보하는 건 다르지. |
| 212 | `lunch2_seo_17` | 다인 | top_school | dain_normal |  |  | 그럼 나도 양보 안 해. 다음 쉬는 시간에 체육관 와. |
| 213 | `lunch2_seo_19` | 서연 | top_school | seyoun_normal |  |  | {name}, 지금 내 앞에서 다음 약속 잡는 거야? |
| 214 | `lunch2_seo_20` | 서연 | top_school | seyoun_normal |  |  | 대답은 나중에 해. 일단 입가에 뭐 묻었어. 가만있어  |
| 215 | `lunch2_seo_choice` | 서연 | top_school | seyoun_normal |  |  | *물티슈를 감은 손가락이 입가로 다가온다.* |
| 216 | `lunch2_seo_c1_1` | 서연 | top_school | seyoun_normal |  |  | *물티슈로 밥풀을 떼어내고 사용한 쪽을 안으로 접는다. |
| 217 | `lunch2_seo_c1_2` | 서연 | top_school | seyoun_normal |  |  | 됐어. |
| 218 | `lunch2_seo_c1_2_b` | 다인 | top_school | dain_normal |  |  | *다인은 도시락으로 뻗던 손을 공중에 둔 채 둘을 번갈 |
| 219 | `lunch2_seo_c1_3` | 다인 | top_school | dain_normal |  |  | 밥풀을 직접 떼어줘요? |
| 220 | `lunch2_seo_c1_3_b` | 서연 | top_school | seyoun_normal |  |  | *물티슈를 네모로 접는다.* 밥풀이었어. |
| 221 | `lunch2_seo_c1_4` | 서연 | top_school | seyoun_shy |  |  | 그게 다야. |
| 222 | `lunch2_seo_c1_5` | {name} | top_school | seyoun_shy |  |  | *서연은 물병을 집어 들지만 뚜껑은 열지 않는다. 라벨 |
| 223 | `lunch2_seo_end_c1` | {name} | top_school | seyoun_shy |  |  | *다인이 접이식 의자 다리를 운동화 끝으로 두 번 건드 |
| 224 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *방과후. 핸드폰에 알림이 두 개 와 있다.* |
| 225 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 체육관 와. 오늘은 진짜 내기다. |
| 226 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 학생회실에 올 수 있어? 일손이 부족해서. |
| 227 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게서는 아무 연락이 없다. 가방을 챙기자 주머니 |
| 228 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *어디로 갈까.* |
| 229 | `after2_seo_1` | {name} | student_room | seyoun_sad |  | 🌅 | *학생회실. 서연은 서류 더미 앞에 혼자 앉아 있다.* |
| 230 | `after2_seo_2` | 서연 | student_room | seyoun_normal |  | 🌅 | 와 줬네. — 솔직히 안 올 줄 알았어. |
| 231 | `after2_seo_3` | {name} | student_room | seyoun_laugh |  | 🌅 | 부르면 가는 타입이야. |
| 232 | `after2_seo_4` | 서연 | student_room | seyoun_normal |  | 🌅 | *클립보드 모서리로 빈 의자를 가리킨다.* 순종적이네. |
| 233 | `after2_seo_4_b` | 서연 | student_room | seyoun_sad |  | 🌅 | *클립보드를 {name} 쪽으로 돌린다. 할 일 목록  |
| 234 | `after2_seo_5` | {name} | student_room | seyoun_normal |  | 🌅 | 도와달라고 한 건 너잖아. |
| 235 | `after2_seo_6` | 서연 | student_room | seyoun_normal |  | 🌅 | 부탁이 아니라 기회를 준 거야. |
| 236 | `after2_seo_6_b` | {name} | student_room | seyoun_normal |  | 🌅 | *서류 정리를 시작한다. 행사 예산안, 동아리 신청서. |
| 237 | `after2_seo_7` | 서연 | student_room | seyoun_normal |  | 🌅 | *바로 돌아서지 않고 클립보드를 문 쪽으로 든 채 기다 |
| 238 | `after2_seo_8` | 서연 | student_room | seyoun_normal |  | 🌅 | 이쪽은 날짜순, 저쪽은 동아리별. — 정리하는 건 잘해 |
| 239 | `after2_seo_8a2` | {name} | student_room | seyoun_normal |  | 🌅 | 잘하진 않는데 못하지도 않아. |
| 240 | `after2_seo_8a3` | 서연 | student_room | seyoun_normal |  | 🌅 | 애매하네. |
| 241 | `after2_seo_8a4` | {name} | student_room | seyoun_normal |  | 🌅 | 칭찬이랑 비슷하잖아. 너도 애매하게 하니까. |
| 242 | `after2_seo_8b` | 서연 | student_room | seyoun_normal |  | 🌅 | *서류를 넘기던 손을 놓고 {name} 쪽을 본다.* |
| 243 | `after2_seo_8b2` | 서연 | student_room | seyoun_sad |  | 🌅 | 너, 쓸 만하네. |
| 244 | `after2_seo_8b3` | {name} | student_room | seyoun_normal |  | 🌅 | 그건 칭찬이야? |
| 245 | `after2_seo_8b4` | 서연 | student_room | seyoun_shy |  | 🌅 | 칭찬이야. 받아 둬. |
| 246 | `after2_seo_8b4_b` | 서연 | student_room | seyoun_shy |  | 🌅 | *칭찬이라고 말해놓고 바로 서류를 정리한다. 목을 돌리 |
| 247 | `after2_seo_choice1` | {name} | student_room | seyoun_normal |  | 🌅 | *블라인드 틈으로 들어온 주황색 줄이 서류 위를 가른다 |
| 248 | `after2_seo_sunset_joke` | 서연 | student_room | seyoun_shy2 |  | 🌅 | *안경이 코끝으로 조금 내려오고 펜 끝이 날짜 칸 밖으 |
| 249 | `after2_seo_sunset_joke_b` | 서연 | student_room | seyoun_normal |  | 🌅 | *서류 끝을 세워 입가를 가리는 사이 펜 뚜껑이 책상  |
| 250 | `after2_seo_sunset_react` | 서연 | student_room | seyoun_shy2 |  | 🌅 | 그런 말을 그렇게 툭 던지면, 받아 적을 시간도 없잖아 |
| 251 | `after2_seo_sunset_react_b` | 서연 | student_room | seyoun_normal |  | 🌅 | *서류 끝으로 입가를 가린 채 창틀의 주황색 줄을 펜  |
| 252 | `after2_seo_9` | {name} | student_room | seyoun_normal |  | 🌅 | *블라인드 그림자가 책상 끝까지 길어질 무렵 서류 정리 |
| 253 | `after2_seo_choice2` | {name} | student_room | seyoun_normal |  | 🌅 | *서류 정리가 거의 끝났다.* |
| 254 | `after2_seo_leave` | 서연 | student_room | seyoun_normal |  | 🌅 | *완성된 서류 더미를 양손으로 한 번 눌러 맞춘다.* |
| 255 | `after2_seo_end` | {name} | school_hallway | seyoun_normal |  | 🌅 | *학생회실을 나서자 복도 자동등이 앞에서부터 한 칸씩  |
| 256 | `after2_seo_skinship_1` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *서연이 손을 뻗어 옷깃의 먼지를 떼는 순간 손등이 목 |
| 257 | `after2_seo_skinship_2` | 서연 | school_hallway | seyoun_shy |  | 🌅 | *손가락이 셔츠 깃에 닿은 채 떨어지지 않는다. 청소  |
| 258 | `after2_seo_skinship_3` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 먼지 묻었어. |
| 259 | `after2_seo_return` | {name} | school | seyoun_normal |  | 🌅 | *학생회실을 나섰다. 교문 쪽으로 걸어간다.* |
| 260 | `after2_group_seoyeon_companion` | 서연과 동행 | student_room | 없음 |  | 🌅 | *서연이 겹쳐 적힌 일정 두 칸을 손끝으로 짚는다. 맞 |
| 261 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.* |
| 262 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 263 | `night2_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저  |
| 264 | `night2_msg_1` | {name} | room_my | 없음 |  |  | *세 명에게서 메시지가 왔다.* |
| 265 | `night2_msg_seo_specific` | 서연 | room_my | seyoun_normal | 0.35 |  | 오늘 고마웠어. 덕분에 일찍 끝났어 |
| 266 | `night2_msg_seo_specific_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 다음에도 부를지도 모르니까, 각오해 둬 |
| 267 | `night2_msg_dain_general` | 다인 | room_my | dain_normal | 0.35 |  | 야, 내일 매점 가자! 오늘 못 간 거 아직 아쉽거든! |
| 268 | `night2_msg_dain_general_merge` | 서연 | room_my | seyoun_normal | 0.35 |  | 점심에 옥상 올래? 바람 좋을 거야 |
| 269 | `night2_msg_yuna_general` | 유나 | room_my | yuna_normal | 0.35 |  | 내일 별관 올 거야? |
| 270 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에  |
| 271 | `night2_choice` | {name} | room_my | 없음 |  |  | *누구에게 먼저 답장할까?* |
| 272 | `night2_reply_dain_1` | {name} | room_my | dain_normal | 0.35 |  | 떡볶이 매웠어 ㅋㅋ |
| 273 | `night2_reply_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | 매운 거 못 먹는 거야? |
| 274 | `night2_reply_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | 내일은 순한 맛으로 가자. |
| 275 | `night2_reply_dain_4` | 다인 | room_my | dain_normal | 0.35 |  | 아 근데 순한 맛은 떡볶이가 아니지ㅋㅋ |
| 276 | `night2_reply_dain_5` | {name} | room_my | dain_normal | 0.35 |  | *또 세 줄 연속이다.* |
| 277 | `night2_reply_dain_react_default` | 다인 | room_my | dain_normal | 0.35 |  | ㅋㅋ 알겠어. 굿나잇! |
| 278 | `night2_dain_freetalk` | 다인 | room_my | dain_normal | 0.35 | 🌙 | 잠깐, 진짜 자기 전에. 오늘 제일 재밌었던 건 뭐였어 |
| 279 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 또 다른 알림이 보인다.* |
| 280 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 보내고 핸드폰을 내려놓았다.* |
| 281 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이,  |
| 282 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 |
| 283 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *메모장에 줄줄이 남은 보내지 않은 문장. '선생님,  |
| 284 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 메모가 마지막이다. 그 아래 39번째에는 제 |
| 285 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 |
| 286 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로 |
| 287 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보 |
| 288 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화 |
| 289 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 |
| 290 | `night2_end_2_b` | {name} | room_my | 없음 |  |  | *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있 |
| 291 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.* |
| 292 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을  |
| 293 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 |
| | **Day 3** | | | | | | |
| 294 | `morning3_start` | {name} | school | 없음 |  |  | *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯 |
| 295 | `morning3_start_2` | {name} | school | 없음 |  |  | *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군 |
| 296 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 297 | `morning3_seo_gate_1` | {name} | school | seyoun_normal |  |  | *교문 앞의 서연은 지각 종이 울리기 직전인데도 발을  |
| 298 | `morning3_seo_gate_2` | 서연 | school | seyoun_normal |  |  | 늦었네. |
| 299 | `morning3_seo_gate_3` | {name} | school | seyoun_normal |  |  | 서연? 왜 여기 있어? |
| 300 | `morning3_seo_gate_4` | 서연 | school | seyoun_normal |  |  | 지각하면 어때. 혼자 혼나는 것보단 낫잖아. |
| 301 | `morning3_seo_gate_5` | {name} | school | seyoun_laugh |  |  | 그건 아닌데. |
| 302 | `morning3_seo_gate_6` | 서연 | school | seyoun_normal |  |  | 농담이야. 같이 늦은 이유는 내가 설명할게. |
| 303 | `morning3_seo_gate_6_b` | 서연 | school | seyoun_normal |  |  | *서연은 학생회 일정표를 꺼내 교문 담당 교사에게 보여 |
| 304 | `morning3_seo_gate_7` | 서연 | school | seyoun_normal |  |  | *확인 도장을 받은 일정표를 접고 교문 안으로 들어간다 |
| 305 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실에 들어서자 서연의 펜이 멈추고 다인의 의자가 뒤 |
| 306 | `morning3_react_seo_1` | 다인 | room_school | dain_normal |  |  | 야, 회장님이랑 같이 왔어? 아침부터? |
| 307 | `morning3_react_seo_2` | 유나 | room_school | yuna_bored |  |  | *창밖을 보던 유나가 유리창에 비친 {name}을 확인 |
| 308 | `morning3_date_intro` | {name} | room_school | 없음 |  |  | *1교시가 끝났다. 쉬는 시간마다 누군가 말을 건다.* |
| 309 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *쉬는 시간, 복도로 나왔다. 서연이 먼저 걸음을 맞춘 |
| 310 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | 이번 주말에 시간 있어? 공원에 같이 가자. |
| 311 | `morning3_date_seo_choice` | 서연 | school_hallway | seyoun_normal |  |  | *서연이 교실 문 앞에서 묻는다. 다인이 들고 있던 물 |
| 312 | `morning3_date_seo_decline` | {name} | school_hallway | seyoun_normal |  |  | *서연의 제안을 거절하자 다인이 돌리던 물병 뚜껑을 다 |
| 313 | `morning3_date_seo_decline_b` | {name} | room_school | seyoun_normal |  |  | *교실로 돌아왔다. 수업 하나가 지나고 또 쉬는 시간이 |
| 314 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼  |
| 315 | `morning3_date_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 배구공을 옆구리에 낀 채 이쪽을 보다가 코트로 |
| 316 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다 |
| 317 | `morning3_date_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 접어 둔 쪽지를 꺼내려다 다시 책갈피 사이에  |
| 318 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 319 | `morning3_end` | {name} | room_school | 없음 |  |  | *수업 종료 종이 울리고 곧 점심시간이 된다.* |
| 320 | `morning3_end_b` | 유나 | room_school | yuna_normal |  |  | 맛있네. |
| 321 | `lunch3_start` | {name} | room_school | yuna_normal |  |  | *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. |
| 322 | `lunch3_start_2_b` | 다인 | room_school | dain_normal |  |  | *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가 |
| 323 | `lunch3_meal_1` | 다인 | room_school | dain_laugh |  |  | 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고  |
| 324 | `lunch3_meal_2` | {name} | room_school | dain_laugh |  |  | 그건 내 거... |
| 325 | `lunch3_meal_3` | 서연 | room_school | seyoun_normal |  |  | 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점 |
| 326 | `lunch3_meal_4` | {name} | room_school | seyoun_normal |  |  | 점수 매기지 마. |
| 327 | `lunch3_meal_5` | 서연 | room_school | seyoun_normal |  |  | 10점 만점이야. 나쁜 거 아닌데? |
| 328 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다 |
| 329 | `lunch3_meal_7` | {name} | room_school | seyoun_normal |  |  | 유나, 그건 내가 제일 좋아하는 건데. |
| 330 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임 |
| 331 | `lunch3_meal_8` | {name} | room_school | yuna_bored |  |  | *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다. |
| 332 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. |
| 333 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓 |
| 334 | `lunch3_meal_11` | {name} | room_school | yuna_bored |  |  | *누구에게 줄까?* |
| 335 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *마지막 반찬을 누구에게 줄지 고민한다.* |
| 336 | `lunch3_share_1` | {name} | room_school | yuna_bored |  |  | *다 같이 나눠 먹자고 하자 셋이 웃는다. 웃음이 끊긴 |
| 337 | `lunch3_share_solo` | {name} | room_school | yuna_normal |  |  | *셋이 계란말이를 조금씩 나눠 먹는다. 반으로 갈린 마 |
| 338 | `lunch3_end` | {name} | room_school | 없음 |  |  | *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다 |
| 339 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육 |
| 340 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다 |
| 341 | `after3_choice` | {name} | school_hallway | 없음 |  | 🌅 | *어디로 갈까.* |
| 342 | `after3_reject_for_seo_1` | {name} | school_hallway | dain_sad |  | 🌅 | *복도에서 마주친 다인은 먼저 손을 흔들지 않고 운동화 |
| 343 | `after3_reject_for_seo_2` | 다인 | school_hallway | dain_sad |  | 🌅 | 오늘 체육관 안 올 거지? |
| 344 | `after3_reject_for_seo_3` | {name} | library_old | yuna_sad | 0.35 | 🌅 | *도서관 옆을 지나자 유나 자리에 연보라색 쪽지 하나만 |
| 345 | `after3_reject_for_seo_3b` | {name} | library_old | 없음 |  | 🌅 | *유나의 책이 없다. 늘 책상에 두던 1권도, 빌려주겠 |
| 346 | `after3_reject_for_seo_3c` | {name} | library_old | 없음 |  | 🌅 | *책갈피도, 빌려주겠다던 2권도 없다. 책상 위에는 유 |
| 347 | `after3_reject_for_seo_4` | {name} | school_hallway | 없음 |  | 🌅 | *복도로 나왔다. 다인의 문장 끝은 조용했고 유나의 자 |
| 348 | `after3_seo_1` | {name} | student_room | seyoun_sad |  | 🌅 | *학생회실 문을 열자 서연이 책상에 엎드린 채다. 바닥 |
| 349 | `after3_seo_3` | 서연 | student_room | seyoun_sad |  | 🌅 | *문 여는 소리에 서연이 몸을 일으킨다. 눈 밑의 화장 |
| 350 | `after3_seo_4` | 서연 | student_room | seyoun_sad |  | 🌅 | *서연이 바닥의 클립보드를 발끝으로 책상 밑에 밀어 넣 |
| 351 | `after3_seo_5` | {name} | student_room | seyoun_sad |  | 🌅 | 서연? |
| 352 | `after3_seo_5_b` | 서연 | student_room | seyoun_normal |  | 🌅 | *서연이 손가락으로 머리카락을 빗어 내린다.* 봤어? |
| 353 | `after3_seo_6` | 서연 | student_room | seyoun_sad |  | 🌅 | *서연이 헛기침을 한 번 한다.* 아무것도 아니야. 잊 |
| 354 | `after3_seo_7` | {name} | student_room | seyoun_sad |  | 🌅 | 뭘 봤다고. |
| 355 | `after3_seo_7_b` | 서연 | student_room | seyoun_sad |  | 🌅 | *서연이 손등으로 번진 화장을 가린다.* 이런 거 보여 |
| 356 | `after3_seo_8` | 서연 | student_room | seyoun_sad |  | 🌅 | 이런 모습. 비밀로 해줘. |
| 357 | `after3_seo_9` | 서연 | student_room | seyoun_sad |  | 🌅 | *서연은 허리를 세우고 클립보드를 무릎 위에 올린다.  |
| 358 | `after3_seo_choice` | 서연 | student_room | seyoun_sad |  | 🌅 | 오늘 본 건 여기까지만 해줘. 대신 지금은 평소처럼 대 |
| 359 | `after3_seo_correct_1` | 서연 | student_room | seyoun_sad |  | 🌅 | *클립보드 가장자리가 손안에서 휘어진다. 서연은 다음  |
| 360 | `after3_seo_correct_2` | {name} | student_room | seyoun_worried |  | 🌅 | *허리를 굽혀 펜을 줍는 척 책상 밑을 더듬는다. 일부 |
| 361 | `after3_seo_correct_3` | {name} | student_room | seyoun_normal |  | 🌅 | 어, 여기 있네. 회장님 학생회실은 펜이 잘 없어지는  |
| 362 | `after3_seo_correct_4` | {name} | student_room | seyoun_worried |  | 🌅 | *몸을 일으키자 서연이 화장 자국을 닦던 손등에 검은  |
| 363 | `after3_seo_correct_5` | 서연 | student_room | seyoun_normal |  | 🌅 | 학생회실 펜 없어지는 거 진짜 미스터리야. 1년에 30 |
| 364 | `after3_seo_correct_6` | {name} | student_room | seyoun_normal |  | 🌅 | 학생회장이 그것도 못 잡아? |
| 365 | `after3_seo_correct_7` | 서연 | student_room | seyoun_laugh |  | 🌅 | *서연의 코웃음이 짧게 샌다.* 잡으면 학생들이 학생회 |
| 366 | `after3_seo_correct_8` | {name} | student_room | seyoun_pout |  | 🌅 | *서연이 안경을 고쳐 쓰는 동안에도 쓸데없는 펜 이야기 |
| 367 | `after3_seo_correct_9` | 서연 | student_room | seyoun_normal |  | 🌅 | {name}. |
| 368 | `after3_seo_correct_10` | {name} | student_room | seyoun_normal |  | 🌅 | 응. |
| 369 | `after3_seo_correct_11` | 서연 | student_room | seyoun_shy |  | 🌅 | 펜 줍는 거. 다음에도 가끔 줍게. |
| 370 | `after3_seo_correct_12` | {name} | student_room | 없음 |  | 🌅 | *서연은 다음 주 학생회 일정표를 접어 내 쪽으로 밀었 |
| 371 | `after3_seo_freetalk` | 서연 | student_room | seyoun_normal |  | 🌅 | *클립보드를 품에 안은 채 {name}을 본다.* 할  |
| 372 | `after3_seo_end` | {name} | student_room | seyoun_sad |  | 🌅 | *그 한마디 뒤에 서연은 클립보드를 품에 더 깊이 끌어 |
| 373 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.* |
| 374 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 375 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 376 | `haeun_warn_1` | {name} | school_hallway | 없음 |  | 🌅 | *학생회실을 나오자 빈 복도 끝에 누군가 기다리고 있다 |
| 377 | `haeun_warn_1_b` | 하은 | school_hallway | haeun_normal |  | 🌅 | *하은이 벽에 기대 학생회 팔찌를 만지작거린다.* |
| 378 | `haeun_warn_2` | 하은 | school_hallway | haeun_normal |  | 🌅 | {name} 씨. |
| 379 | `haeun_warn_2_b` | {name} | school_hallway | haeun_normal |  | 🌅 | 하은? 왜 여기서? |
| 380 | `haeun_warn_2b` | {name} | school_hallway | haeun_normal |  | 🌅 | 응. |
| 381 | `haeun_warn_3` | 하은 | school_hallway | haeun_normal |  | 🌅 | 선배, 서연 선배 방금 봤어요? |
| 382 | `haeun_warn_3_b` | 하은 | school_hallway | haeun_normal |  | 🌅 | 선배가 울었어요. |
| 383 | `haeun_warn_3_c` | {name} | school_hallway | haeun_normal |  | 🌅 | *뭐?* |
| 384 | `haeun_warn_4` | 하은 | school_hallway | haeun_normal |  | 🌅 | 학생회실 뒤 화장실에서 잠깐 봤어요. 저한테는 괜찮다고 |
| 385 | `haeun_warn_4b` | {name} | school_hallway | haeun_normal |  | 🌅 | 울었다고? |
| 386 | `haeun_warn_5` | {name} | school_hallway | haeun_normal |  | 🌅 | *하은은 빈 복도를 확인한 뒤 목소리를 더 낮춘다.* |
| 387 | `haeun_warn_5b` | 하은 | school_hallway | haeun_normal |  | 🌅 | 말 걸지 말라고 했는데 세면대 앞에서 한참 나오지 않았 |
| 388 | `haeun_warn_5c` | {name} | school_hallway | haeun_normal |  | 🌅 | *복도 끝 화장실 쪽을 돌아본다.* |
| 389 | `haeun_warn_5c_b` | 서연 | school_hallway | seyoun_sad |  | 🌅 | 네가 다른 애들한테도 나한테 하듯 웃는 게 좀 싫었어. |
| 390 | `haeun_warn_6` | 하은 | school_hallway | haeun_normal |  | 🌅 | 제가 따라가면 또 괜찮다고 할 거예요. {name} 씨 |
| 391 | `haeun_warn_6_b` | 하은 | school_hallway | haeun_normal |  | 🌅 | *하은은 학생회 팔찌를 손목 안쪽으로 돌린다.* |
| 392 | `haeun_warn_7` | 하은 | school_hallway | haeun_worried |  | 🌅 | 참견인 거 알아요. 그래도 오늘만은 모른 척하지 말아  |
| 393 | `haeun_warn_7_b` | 하은 | school_hallway | haeun_worried |  | 🌅 | *하은이 입술을 다문다. 학생회 팔찌의 고리를 만지며  |
| 394 | `haeun_warn_7_c` | 하은 | school_hallway | haeun_normal |  | 🌅 | 설득하라는 건 아니에요. 그냥 혼자 두지만 말아 주세요 |
| 395 | `haeun_freetalk` | 하은 | school_hallway | haeun_worried |  | 🌅 | *하은은 돌아서지 않고 주인공을 똑바로 본다.* "…대 |
| 396 | `haeun_warn_7_d` | 하은 | school_hallway | haeun_worried |  | 🌅 | *하은이 복도 끝으로 사라진 뒤, 벽걸이에는 서연의 학 |
| 397 | `haeun_warn_8` | {name} | school_hallway | haeun_worried |  | 🌅 | *하은이 떠난 뒤 학생회실 문을 두드린다. 대답은 없지 |
| 398 | `haeun_warn_8b` | {name} | school | haeun_worried |  | 🌅 | *학교 앞으로 나왔다.* |
| 399 | `night3_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 가방을 의자에 걸어 둔다.* |
| 400 | `night3_start_2` | {name} | room_my | 없음 |  |  | *책상 위에 엎어 둔 핸드폰 화면을 켠다.* |
| 401 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *읽지 않은 메시지가 떠 있다.* |
| 402 | `night3_faithful_msg_seo_1` | 서연 | room_my | seyoun_normal | 0.35 |  | 오늘 본 거, 비밀이야 |
| 403 | `night3_faithful_msg_seo_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 근데 또 와도 돼 |
| 404 | `night3_faithful_msg_seo_3` | {name} | room_my | seyoun_normal | 0.35 |  | *메시지를 끝까지 읽고 화면을 끈다. 방 안에서 휴대폰 |
| 405 | `night3_dream_1` | {name} | school | 없음 |  |  | *꿈속에서 누군가와 나란히 걷는다. 얼굴은 보이지 않고 |
| 406 | `night3_dream_2_b` | {name} | school | 없음 |  |  | *메모장을 닫았다. 내일 보낼 문장은 아직 없다.* |
| 407 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *커튼 사이로 들어온 아침 햇살에 눈을 뜬다. 핸드폰  |
| 408 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *'삭제하시겠습니까?' 확인 창이 뜬다. 손가락이 버튼 |
| 409 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *1초 동안 화면을 내려다본다. 소정이 책상의 낙서와  |
| 410 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *그래. 삭제 버튼에 올린 손가락으로 화면을 누른다.* |
| 411 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼을 누르지 않고 사진을 새 폴더로 옮긴다.  |
| 412 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *'거절도 네가 해야 할 일이야.' 민수의 말이 떠오른 |
| 413 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *갤러리에서 소정이 사진이 사라지고 빈칸만 남는다.* |
| 414 | `night3_faithful_reflect_4_b` | {name} | room_my | 없음 |  |  | *빈 앨범 썸네일 위를 엄지로 문지른다.* |
| 415 | `night3_faithful_reflect_4_c` | {name} | room_my | 없음 |  |  | *핸드폰을 덮자 검은 화면에 갤러리의 빈칸이 겹쳐 보인 |
| 416 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *알람이 울리기 전에 눈을 떴다.* |
| 417 | `night3_dream_seo_bonus` | {name} | room_my | 없음 |  |  | *눈을 감자 옥상 난간이 먼저 떠오른다.* |
| 418 | `night3_end` | {name} | room_my | 없음 |  |  | *방 불을 끄고 핸드폰을 엎어 둔다.* |
| | **Day 4** | | | | | | |
| 419 | `morning4_start` | {name} | room_my | 없음 |  |  | *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다 |
| 420 | `morning4_nightmare_check` |  | room_my | 없음 |  |  |  |
| 421 | `minsu_cheer_1` | {name} | room_my | 없음 |  |  | *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.* |
| 422 | `minsu_cheer_1_b` | 민수 | room_my | minsu_normal | 0.35 |  | *야 오늘 데이트라며?* |
| 423 | `minsu_cheer_1_c` | {name} | room_my | minsu_normal | 0.35 |  | *어떻게 알았어* |
| 424 | `minsu_cheer_1_d` | 민수 | room_my | minsu_normal | 0.35 |  | *다인이가 단톡방에 올림. 내일 약속 있음, 이라고* |
| 425 | `minsu_cheer_2` | 민수 | room_my | minsu_normal | 0.35 |  | 잘하고 와ㅋㅋ |
| 426 | `minsu_cheer_3` | {name} | room_my | minsu_normal | 0.35 |  | 알아. |
| 427 | `minsu_cheer_4_branch` |  | room_my | 없음 |  |  |  |
| 428 | `minsu_cheer_4_ins_single` | {name} | room_my | minsu_normal | 0.35 |  | *핸드폰 캘린더를 본다. 오늘 약속은 하나뿐이다.* |
| 429 | `morning4_start_2` | {name} | room_my | 없음 |  |  | *심호흡하고 약속 메시지를 다시 확인한다.* |
| 430 | `morning4_seo_msg_1` | 서연 | room_my | seyoun_pout | 0.35 |  | 늦으면 안 돼. 공원 분수대, 10시. |
| 431 | `morning4_seo_msg_1_b` | {name} | room_my | seyoun_pout | 0.35 |  | *메시지는 거기서 끝나 있다.* |
| 432 | `morning4_seo_msg_1_c` | {name} | room_my | seyoun_pout | 0.35 |  | *분수대 앞에 선다. 시계가 9시 58분을 가리킨다.* |
| 433 | `morning4_hidden_check` | {name} | room_my | 없음 |  |  | *주말 아침, 학교 앞 사거리에서 신호를 기다린다.* |
| 434 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 435 | `morning4_end` | {name} | room_my | 없음 |  |  | *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 |
| 436 | `date_seo_1` | {name} | park | seyoun_normal |  |  | *분수대 앞에 서연이 먼저 와 있다. 클립보드는 없고  |
| 437 | `date_seo_compliment_choice` | {name} | park | seyoun_normal |  |  | *서연의 가방끈이 손가락에 한 번 더 감긴다.* |
| 438 | `date_seo_bright` | 서연 | park | seyoun_laugh |  |  | 당연하지. 오늘 좀 신경 썼거든. |
| 439 | `date_seo_walk` | {name} | park | seyoun_normal |  |  | *공원을 산책한다. 오리들에게 빵을 던져준다.* |
| 440 | `date_seo_duck` | 서연 | park | seyoun_normal |  |  | 이 애들은 단순해서 좋다. 빵 주면 따라오고 안 주면  |
| 441 | `date_seo_duck_2` | {name} | park | seyoun_normal |  |  | 사람도 그런 거 아냐? |
| 442 | `date_seo_duck_3` | 서연 | park | seyoun_normal |  |  | 사람은 빵 줘도 안 올 때가 있으니까. |
| 443 | `date_seo_duck_4` | 서연 | park | seyoun_normal |  |  | *빵 부스러기가 가라앉는 물가를 보고 있었다. 꽃집 앞 |
| 444 | `date_seo_flower_b` | 서연 | park | seyoun_normal |  |  | *꽃집 유리문 쪽으로 발끝을 돌린다.* 들어가 볼까? |
| 445 | `date_seo_flower_2` | 서연 | park | seyoun_normal |  |  | *꽃집 문을 밀자 종이 울린다. 서연은 진열대를 한 바 |
| 446 | `date_seo_succulent_2` | 서연 | park | seyoun_normal |  |  | 이건 관리하기 쉬워. 물 안 줘도 잘 살아. |
| 447 | `date_seo_succulent_2_b` | {name} | park | seyoun_normal |  |  | 나한테 주는 거야? |
| 448 | `date_seo_succulent_3` | 서연 | park | seyoun_laugh |  |  | 키울 수 있으면. — 못 키우면 내가 다시 가져갈 거니 |
| 449 | `date_seo_end` | 서연 | park | seyoun_worried |  |  | *화분을 내민다. 흙이 든 작은 화분이 손바닥에 닿았다 |
| 450 | `date_seo_end_b` | {name} | street | seyoun_normal |  |  | *공원을 나서 거리를 걸었다.* |
| 451 | `date_seo_end_c` | 서연 | street | seyoun_normal |  |  | *화분 포장지가 손안에서 작게 바스락거린다.* 오늘. |
| 452 | `date_seo_end_d` | 서연 | street | seyoun_shy |  |  | 오늘 괜찮았어. |
| 453 | `pre_confess_minsu` | 민수 | street | minsu_smirk | 0.35 |  | 야, 데이트 중이지? 한마디만 할게 |
| 454 | `pre_confess_minsu_2` | 민수 | street | minsu_smirk | 0.35 |  | 말 돌리지 말고 제대로 해 |
| 455 | `pre_confess_callback` | {name} | street | minsu_smirk |  |  | *주머니 속 핸드폰 모서리가 손바닥에 눌린다. 알림은  |
| 456 | `confess_seo_1` | {name} | top_school | 없음 |  | 🌅 | *데이트가 끝났다. 교문 대신 옥상으로 올라왔다.* |
| 457 | `confess_seo_2` | 서연 | top_school | seyoun_normal |  | 🌅 | 잠깐 올라가자. |
| 458 | `confess_seo_3` | {name} | top_school | seyoun_normal |  | 🌅 | *옥상. 난간 아래 운동장 조명이 켜져 있다. 첫날 서 |
| 459 | `confess_seo_4` | 서연 | top_school | seyoun_normal |  | 🌅 | *서연은 난간에서 한 걸음 떨어져 선다. 열쇠를 주머니 |
| 460 | `confess_seo_4_b` | {name} | top_school | seyoun_normal |  | 🌅 | *주머니 안쪽에서 접힌 메모가 손가락에 걸린다.* |
| 461 | `confess_seo_5` | {name} | top_school | seyoun_normal |  | 🌅 | *메모를 꺼내지 않는다.* |
| 462 | `confess_seo_choice` | {name} | top_school | seyoun_shy2 |  | 🌅 | *열쇠고리만 서연의 손안에서 짧게 울린다.* |
| 463 | `confess_seo_yes_1` | 서연 | top_school | seyoun_normal |  | 🌅 | *열쇠고리 소리가 뚝 멎는다. 서연이 눈을 맞춘다.* |
| 464 | `confess_seo_yes_2` | {name} | top_school | seyoun_normal |  | 🌅 | *목이 마르다. 주머니 안에서 메모가 접힌다.* |
| 465 | `confess_seo_yes_3` | {name} | top_school | seyoun_normal |  | 🌅 | 오늘 이후에도 너랑 만나고 싶어. |
| 466 | `confess_seo_yes_4` | {name} | top_school | seyoun_normal |  | 🌅 | *서연은 바로 대답하지 않는다. 열쇠고리가 손 안에서  |
| 467 | `confess_seo_yes_5` | {name} | top_school | seyoun_worried |  | 🌅 | 지금 대답 안 해도 돼. |
| 468 | `confess_seo_yes_6` | 서연 | top_school | seyoun_normal |  | 🌅 | 그렇게 말하면 더 생각하게 되잖아. |
| 469 | `confess_seo_yes_7` | {name} | top_school | seyoun_shy2 |  | 🌅 | *난간 아래 운동장 조명이 한 줄 더 켜진다. 서연은  |
| 470 | `confess_seo_yes_8` | 서연 | top_school | seyoun_shy2 |  | 🌅 | 나도 계속 봤어. |
| 471 | `confess_seo_yes_9` | 서연 | top_school | seyoun_shy |  | 🌅 | 네가 어디 앉는지, 언제 말이 줄어드는지. |
| 472 | `confess_seo_yes_10` | 서연 | top_school | seyoun_shy |  | 🌅 | *열쇠가 주머니 안으로 들어간다.* |
| 473 | `confess_seo_yes_11` | 서연 | top_school | seyoun_shy2 |  | 🌅 | 내일 점심. 옥상 열어둘게. |
| 474 | `confess_seo_yes_11_b` | 서연 | top_school | seyoun_shy2 |  | 🌅 | *서연이 계단 쪽으로 걷는다.* |
| 475 | `confess_seo_yes_12` | 서연 | top_school | seyoun_shy2 |  | 🌅 | *두 칸 아래에서 발소리가 끊긴다. 서연은 돌아보지 않 |
| 476 | `day4_night_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 옷소매에 공원 흙과 학교 먼지가 조금 |
| 477 | `day4_night_branch` | 시스템 | room_my | 없음 |  |  |  |
| 478 | `day4_student_night_branch` |  | room_my | 없음 |  |  |  |
| 479 | `wall_seo_1` | {name} | room_my | 없음 |  |  | *밤 10시. 서연에게서 전화가 온다. 목소리에 웃음기 |
| 480 | `wall_seo_pre_low_1` | {name} | room_my | seyoun_worried | 0.35 |  | *서연의 대화방에는 마지막 메시지 이후 새 알림이 없다 |
| 481 | `wall_seo_pre_low_1b` | {name} | room_my | seyoun_pout | 0.35 |  | *'서연아, 지금 괜찮아?' 문자를 보낸다. 1분 뒤  |
| 482 | `wall_seo_pre_low_2` | 서연 | room_my | seyoun_sad | 0.35 |  | 문자 봤어. 잠깐 통화 괜찮아? |
| 483 | `wall_seo_2` | 서연 | room_my | seyoun_sad | 0.35 |  | 지금 나올 수 있어? 공원. 미안, 갑자기. |
| 484 | `wall_seo_to_park` | {name} | park | seyoun_normal |  |  | *집을 나서 공원으로 향했다.* |
| 485 | `wall_seo_3` | {name} | park | seyoun_sad |  |  | *공원 벤치에 서연이 앉아 있다. 화장 끝이 조금 번져 |
| 486 | `wall_seo_4` | {name} | park | seyoun_sad |  |  | 서연. 무슨 일이야? |
| 487 | `wall_seo_5` | 서연 | park | seyoun_sad |  |  | ...앉아. |
| 488 | `wall_seo_6` | {name} | park | seyoun_sad |  |  | *옆에 앉는다. 서연은 가로등 불빛이 길게 걸린 안경알 |
| 489 | `wall_seo_7` | 서연 | park | seyoun_sad |  |  | 오늘 엄마한테 전화 왔어. |
| 490 | `wall_seo_7_b` | {name} | park | seyoun_sad |  |  | *공원 도로로 자동차 한 대가 지나간다. 서연은 무릎  |
| 491 | `wall_seo_8` | 서연 | park | seyoun_sad |  |  | 아빠랑 또 싸웠대. |
| 492 | `wall_seo_9` | 서연 | park | seyoun_sad |  |  | *웃다가 금방 입꼬리를 내린다.* |
| 493 | `wall_seo_9_b` | 서연 | park | seyoun_sad |  |  | 우리 집 겉으로는 멀쩡해 보이지? 넓은 집, 좋은 차, |
| 494 | `wall_seo_9_c` | 서연 | park | seyoun_sad |  |  | 근데 엄마 아빠는 1년째 같은 지붕 아래서 남남이야.  |
| 495 | `wall_seo_9_d` | {name} | park | seyoun_sad |  |  | *벤치 아래로 마른 잎 하나가 굴러와 서연의 운동화 앞 |
| 496 | `wall_seo_10` | 서연 | park | seyoun_sad |  |  | 그래서 집에서도 학교에서도 웃었어. 그게 제일 편했거든 |
| 497 | `wall_seo_11` | 서연 | park | seyoun_cry |  |  | 엄마가 그랬어. '네가 무너지면 집도 무너진다'고. |
| 498 | `wall_seo_11_b` | 서연 | park | seyoun_cry |  |  | *입을 다문다. 목이 한 번 움직인다.* |
| 499 | `wall_seo_12` | 서연 | park | seyoun_cry |  |  | 열 살 때. — 열 살짜리한테 그런 말 하는 거야. |
| 500 | `wall_seo_13` | 서연 | park | seyoun_cry |  |  | 그때부터 거울 앞에서 표정 맞췄어. 안 맞으면 다시. |
| 501 | `wall_seo_14` | 서연 | park | seyoun_cry |  |  | 칭찬받을 때마다 거울 앞에서 몇 번 맞췄는지부터 셌어. |
| 502 | `wall_seo_14_b` | 서연 | park | seyoun_sad |  |  | ...근데 너는. |
| 503 | `wall_seo_14_c` | 서연 | park | seyoun_cry |  |  | *말끝이 끊기며 무릎 위 손가락이 서로 파고든다. 안경 |
| 504 | `wall_seo_14_d` | {name} | park | seyoun_cry |  |  | *눈물이 소리 없이 흘러내린다. 손등에 화장 자국이 번 |
| 505 | `wall_seo_hug_choice` | 서연 | park | seyoun_cry |  |  | *번진 화장이 손등에 남아 있고 서연의 어깨가 호흡마다 |
| 506 | `wall_seo_hug_1` | {name} | park | seyoun_cry |  |  | *서연을 안자 어깨에 얼굴을 묻는다. 교복 셔츠 위로  |
| 507 | `wall_seo_hug_2_b` | 서연 | park | seyoun_cry |  |  | 누구 앞에서 우는 거, 오래됐어. |
| 508 | `wall_seo_hug_2_c` | 서연 | park | seyoun_cry |  |  | 8년. — 그동안 혼자 화장실에서만 울었거든. |
| 509 | `wall_seo_hug_3` | 서연 | park | seyoun_cry |  |  | *숨이 어깨에 짧게 부딪힌다.* |
| 510 | `wall_seo_line_choice` | 서연 | park | seyoun_cry |  |  | *손등으로 눈가를 훔친다. 번진 화장 자국이 더 넓어진 |
| 511 | `wall_seo_line_react_2` | 서연 | park | seyoun_cry |  |  | 응. |
| 512 | `wall_seo_after_line` | 서연 | park | seyoun_sad |  |  | 잠깐만. 물티슈 있어? |
| 513 | `wall_seo_after_line_2` | 서연 | park | seyoun_sad |  |  | *서연이 손등을 내려다본다. 화장이 번져 있다.* |
| 514 | `wall_seo_after_line_3` | {name} | park | seyoun_normal |  |  | 있어. |
| 515 | `wall_seo_after_line_4` | 서연 | park | seyoun_sad |  |  | *주머니에서 꺼낸 물티슈를 받아 든다.* |
| 516 | `wall_seo_after_line_4_b` | 서연 | park | seyoun_sad |  |  | *눈 밑을 닦는다.* |
| 517 | `wall_seo_after_line_5` | 서연 | park | seyoun_normal |  |  | 이제 좀 낫네. 내일은 내가 챙겨야겠다. |
| 518 | `wall_seo_skin_check` |  | park | seyoun_normal |  |  |  |
| 519 | `wall_seo_freetalk` | 서연 | park | seyoun_normal |  | 🌙 | *젖은 눈가를 손등으로 닦고 {name} 쪽을 본다.* |
| 520 | `wall_seo_rival_rank` | 시스템 | park | 없음 |  |  |  |
| 521 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 522 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *알람을 일요일 오전으로 맞추고 방 불을 끈다. 전하지 |
| 523 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안 시계가 자정 쪽으로 넘어간다. 휴대폰 화면도  |
| | **Day 5** | | | | | | |
| 524 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소 |
| 525 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 526 | `morning5_temptation_discovery_branch` |  | room_school | 없음 |  |  |  |
| 527 | `morning5_committed_start` |  | room_school | 없음 |  |  |  |
| 528 | `morning5_committed_seo` | {name} | room_school | seyoun_normal |  |  | *책상 위에 새 쪽지는 없다. 서연의 클립보드는 오늘도 |
| 529 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *행사 준비 시간. 복도를 걷는데 — 빈 교실 앞을 지 |
| 530 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *행사 중간 쉬는 시간. 보건실 앞을 지나간다.* |
| 531 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 532 | `morning5_committed_end` | {name} | room_school | 없음 |  |  | *책상 위 쪽지들을 정리하고 이미 고른 방향의 행사 순 |
| 533 | `tour_seo_1` | {name} | school | seyoun_normal |  |  | *교문 앞에 나란히 선다. 첫날 서연이 기다리고 있던  |
| 534 | `tour_seo_2` | 서연 | school | seyoun_normal |  |  | 여기서 처음 만났지. |
| 535 | `tour_seo_3` | {name} | school | seyoun_normal |  |  | 그때 '과분한데'라고 하니까 — 혼날 뻔했지. |
| 536 | `tour_seo_4` | 서연 | school | seyoun_laugh |  |  | 혼내진 않았잖아. 그때부터 보고 있었어. |
| 537 | `tour_seo_5` | {name} | school | seyoun_normal |  |  | 첫날부터? |
| 538 | `tour_seo_6` | 서연 | school | seyoun_shy |  |  | 바람 때문에 잘못 들었을 수도 있어. |
| 539 | `tour_seo_7` | {name} | school | seyoun_shy |  |  | *바람은 불지 않는다.* |
| 540 | `tour_seo_8` | {name} | school | seyoun_normal |  |  | *서연이 가방 안쪽에서 작은 금속 열쇠고리를 꺼낸다.  |
| 541 | `tour_seo_9` | 서연 | school | seyoun_normal |  |  | 이거. |
| 542 | `tour_seo_10` | {name} | school | seyoun_normal |  |  | 옥상 열쇠...는 아니네. |
| 543 | `tour_seo_11` | 서연 | school | seyoun_normal |  |  | 학생회 기념품이야. 진짜 열쇠는 오늘 반납해야 하니까. |
| 544 | `tour_seo_12` | 서연 | school | seyoun_normal |  |  | *열쇠고리를 건넨다. 손이 스치자 서연은 가방끈을 다시 |
| 545 | `tour_seo_13` | {name} | school | seyoun_normal |  |  | 그럼 다음부터 옥상은 어떻게 올라가? |
| 546 | `tour_seo_14` | 서연 | school | seyoun_shy |  |  | 나한테 말해. 정식으로 빌려서 같이 열면 되잖아. |
| 547 | `tour_seo_freetalk` | 서연 | top_school | seyoun_normal |  |  | *옥상 난간에 손을 얹고 학교를 내려다본다.* 마지막  |
| 548 | `tour_seo_end` | {name} | school | seyoun_shy |  |  | *서연이 건넨 열쇠고리를 주머니에 넣는다. 진짜 옥상  |
| 549 | `after5_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 550 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *행사가 끝나갈 무렵, 복도에서 선택하지 않은 두 사람 |
| 551 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 552 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 553 | `after5_farewell_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나가 다가온다. 아무 말 없이 책 한 |
| 554 | `after5_farewell_yuna_low` | 유나 | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나와 눈이 마주친다. 유나는 들고 있 |
| 555 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 556 | `after5_farewell_dain_1` | {name} | gym | dain_normal |  | 🌅 | *체육관 앞에서 다인이 걸어온다. 평소보다 보폭이 작다 |
| 557 | `after5_farewell_dain_low` | 다인 | gym | dain_normal |  | 🌅 | *체육관 앞에서 다인이 걸어오다 두 걸음 떨어진 곳에  |
| 558 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *석양이 교정 창문마다 걸린다. 방송실에서 행사 종료  |
| 559 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 560 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 561 | `ending_affinity_check` | 시스템 | park | 없음 |  |  |  |
| 562 | `ending_aff_check_seo` | 시스템 | top_school | 없음 |  |  |  |
| 563 | `true_seo_1` | {name} | seyoun_room | 없음 |  |  | *서연의 방. 책상 위에는 파일철과 화분 세 개가 놓여 |
| 564 | `true_seo_2` | {name} | seyoun_room | 없음 |  |  | *화분 받침 아래에 접힌 종이가 끼워져 있다.* |
| 565 | `true_seo_3` | 서연 | seyoun_room | seyoun_normal |  |  | 앉아. 의자는 저쪽. |
| 566 | `true_seo_4` | {name} | seyoun_room | seyoun_normal |  |  | *의자를 당기자 바닥이 작게 긁힌다.* |
| 567 | `true_seo_5` | 서연 | seyoun_room | seyoun_laugh |  |  | 집에서는 말이 길어지면 피곤해져. |
| 568 | `true_seo_6` | 서연 | seyoun_room | seyoun_laugh |  |  | *서연이 화분 받침 아래 종이를 빼낸다.* |
| 569 | `true_seo_6b` | 서연 | seyoun_room | seyoun_shy |  |  | 그래서 적어 뒀어. 까먹지 않으려고. |
| 570 | `true_seo_7` | 서연 | seyoun_room | seyoun_shy |  |  | 읽지는 마. 아직. |
| 571 | `true_seo_7_b` | 서연 | seyoun_room | seyoun_shy |  |  | *종이는 다시 받침 아래로 들어간다.* |
| 572 | `true_seo_7b` | {name} | seyoun_room | seyoun_shy |  |  | *서연이 컵 두 개를 책상 위에 놓는다.* |
| 573 | `true_seo_8` | {name} | seyoun_room | seyoun_shy |  |  | *컵 하나가 {name} 쪽으로 밀려온다.* |
| 574 | `true_seo_bridge` | {name} | ending_true_seoyeon | 없음 |  |  | *방문은 조금 열려 있다.* |
| 575 | `true_epilogue_1_seo` | {name} | ending_true_seoyeon | 없음 |  |  | *5일이었다. 서연의 책상 위 물건 위치를 외우기까지. |
| 576 | `date_choice_true_seo` | 서연 | cafe | seyoun_shy |  |  | 나가기 전에 잠깐 들를래? |
| 577 | `date_true_seo_1` | 서연 | cafe | seyoun_shy |  |  | 컵은 네가 옮겨. 받침은 내가 맞출게. |
| 578 | `date_true_seo_2` | {name} | cafe | seyoun_laugh |  |  | *창밖으로 버스가 지나가도 서연은 시계를 확인하지 않는 |
| 579 | `true_epilogue_2` | {name} | school | 없음 |  |  | *졸업식 날, 교복은 뻣뻣했다. 벚꽃은 코만 자극했다. |
| 580 | `true_epilogue_3` | {name} | school | 없음 |  |  | *달력에는 5칸만 지나 있었다.* |
| 581 | `true_epilogue_4` |  | 없음 | 없음 |  |  |  |
| 582 | `true_epilogue_4_seo` | {name} | park | 없음 |  |  | *어머니의 전화는 여전히 짧다. 거울 앞 메모도 그대로 |
| 583 | `true_epilogue_7` | 시스템 | park | 없음 |  |  | ─── TRUE LOVE END ─── |
| 584 | `day5_main_ending_freetalk_router` | {name} | park | 없음 |  |  |  |
| 585 | `day5_seo_ending_freetalk_intro` | {name} | top_school | seyoun_normal |  |  | *옥상. 열린 문 옆에 화분 빈자리가 있다.* |
| 586 | `day5_seo_ending_freetalk_router` | {name} | top_school | 없음 |  |  |  |
| 587 | `day5_seo_ending_freetalk_true_love` | 서연 | seyoun_room | seyoun_shy |  | 🌙 | *화분 받침 아래 메모를 꺼내지 않고 컵 하나를 밀어  |
| 588 | `day5_credits` |  | school | 없음 |  |  |  |
| 589 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### friend_12

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_yuna_choice`: (선택)
- `after_end`: (선택)
- `after_hidden_homeroom_choice`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_seo_choice`: (선택)
- `after2_choice`: (선택)
- `night2_choice`: (선택)
- `lunch3_choice`: (선택)
- `after3_choice`: (선택)
- `after3_dain_choice`: (선택)
- `after5_last_chance_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=-6 유나=0 다인=-11 담임=-2 보건=0

<details>
<summary>씬 타임라인 (475씬)</summary>

| # | 씬 ID | 화자 | 배경 | 캐릭터 | OP | 밤 | 대사 (앞 30자) |
|---|--------|------|------|--------|----|----|----------------|
| | **Day 1** | | | | | | |
| 1 | `start` | {name} | school | 없음 |  |  | *4월의 교문 앞. 밟힌 꽃잎이 드문드문 붙어 있다.  |
| 2 | `start_3` | {name} | school | 없음 |  |  | *주머니에서 핸드폰이 울리고 예전 학교 단체 카톡방에  |
| 3 | `name_input_scene` | 시스템 | school | 없음 |  |  | 전학생, 당신의 이름은? |
| 4 | `gate_1` | {name} | school | 없음 |  |  | *낯선 교문 앞, 내 교복만 아직 접힌 선이 선명하다. |
| 5 | `seoyeon_meet_1` | 서연 | school | seyoun_normal |  |  | 전학생? {name} 맞지? |
| 6 | `seoyeon_meet_2` | 서연 | school | seyoun_normal |  |  | *{name}의 이름을 한 번 더 확인한 뒤 클립보드  |
| 7 | `seoyeon_meet_3` | {name} | school | seyoun_normal |  |  | 맞는데. 어떻게 알았어? |
| 8 | `seoyeon_meet_4` | 서연 | school | seyoun_normal |  |  | 학생회장. 전학생 안내는 내 담당이야. |
| 9 | `seoyeon_meet_5` | 서연 | school | seyoun_normal |  |  | 따라와. 15분 안에 끝낼게. |
| 10 | `seoyeon_meet_6` | {name} | school | seyoun_normal |  |  | 학생회장이 직접? 과분한데. |
| 11 | `seoyeon_meet_7` | 서연 | school | seyoun_normal |  |  | 과분한 건지 아닌 건지는 내가 정해. |
| 12 | `seoyeon_meet_8` | {name} | school | seyoun_normal |  |  | *서연은 이미 교문 안쪽으로 걸음을 옮겼다. 안내 파일 |
| 13 | `seoyeon_choice` | {name} | school | seyoun_normal |  |  | *어떻게 반응할까?* |
| 14 | `choice_dismiss_1` | 서연 | school | seyoun_normal |  |  | *구두 굽이 교문 앞 보도블록을 짧게 긁는다. 몸은 앞 |
| 15 | `choice_dismiss_2` | 서연 | school | seyoun_normal |  |  | 그래? 그럼 최소한 교실 번호는 외워. 3학년 2반,  |
| 16 | `choice_dismiss_3` | 서연 | school_hallway | seyoun_normal |  |  | *클립보드를 팔 안쪽에 끼우고 교문 안쪽으로 걸어간다. |
| 17 | `classroom_1` | {name} | room_school | 없음 |  |  | *교실 문을 열자 소음이 뚝 끊기고 가까운 책상 의자  |
| 18 | `classroom_2_b` | {name} | room_school | teacher_normal |  |  | *교탁 앞에 담임선생님이 서 있다. 20대 후반. 가디 |
| 19 | `classroom_3` | 담임 | room_school | teacher_normal |  |  | 자, 오늘부터 우리 반에 들어온 전학생이야. 자기소개  |
| 20 | `classroom_3_b` | {name} | room_school | teacher_normal |  |  | {name}입니다. 잘 부탁드립니다. *담임이 출석부의 |
| 21 | `classroom_5_b` | 담임 | room_school | teacher_normal |  |  | 그래, {name}. 외웠어. *출석부에 이름을 덧그으 |
| 22 | `classroom_5_c` | {name} | room_school | teacher_normal |  |  | *담임의 혼잣말은 교실 소음에 묻힌다. 교실 한쪽에서  |
| 23 | `classroom_dain_1` | 다인 | room_school | dain_normal |  |  | 오, 전학생. 우리 반에 새 얼굴 들어왔네! |
| 24 | `classroom_dain_2` | {name} | room_school | dain_normal |  |  | *갈색 숏컷에 배구부 유니폼. 자리에서 반쯤 일어나 손 |
| 25 | `classroom_dain_3` | 담임 | room_school | teacher_normal |  |  | 다인아, 목소리 낮춰. 그리고 교실에서는 유니폼 좀 그 |
| 26 | `classroom_dain_4` | 다인 | room_school | dain_normal |  |  | 쌤, 이게 제일 편하다니까요. 아무튼 전학생, 반갑다. |
| 27 | `classroom_dain_5` | {name} | room_school | dain_normal |  |  | *교실 몇 군데서 웃음이 터진다. 다인은 손을 더 높이 |
| 28 | `classroom_dain_5_b` | 담임선생님 | room_school | teacher_normal |  |  | *출석부 모서리로 교탁을 두 번 두드리고 다인 쪽을 보 |
| 29 | `classroom_dain_5_c` | 담임 | room_school | teacher_normal |  |  | 에너지 좀 아껴. 아직 1교시도 안 시작했어. |
| 30 | `classroom_dain_5_d` | 담임선생님 | room_school | teacher_angry |  |  | *담임은 출석부를 넘긴다.* |
| 31 | `classroom_yuna_1` | {name} | room_school | yuna_bored |  |  | *창가 맨 뒤쪽의 한 여학생은 턱을 괸 채 창밖만 본다 |
| 32 | `classroom_yuna_2` | {name} | room_school | yuna_bored |  |  | *은백색 머리. 붉은 눈. 팔의 타투. 창가 맨 뒤 자 |
| 33 | `classroom_yuna_4` | {name} | room_school | yuna_bored |  |  | *앞줄에서 누군가 속삭인다. '쟤한테 말 걸지 마. 무 |
| 34 | `classroom_seat_1` | 담임선생님 | room_school | teacher_normal |  |  | *빈자리를 가리킨다.* |
| 35 | `classroom_seat_2` | {name} | room_school | dain_normal |  |  | *다인 옆자리다. 의자에 앉기도 전에 다인이 내 책상  |
| 36 | `classroom_minsu_1` | {name} | room_school | minsu_normal |  |  | *자리에 앉으려는데 — 앞자리 남학생이 돌아본다.* |
| 37 | `classroom_minsu_2` | 민수 | room_school | minsu_smirk |  |  | 야, 전학생. 환영한다. — 그리고 조심해. |
| 38 | `classroom_minsu_3` | {name} | room_school | minsu_smirk |  |  | 뭘? |
| 39 | `classroom_minsu_2_b` | 민수 | room_school | minsu_normal |  |  | *다인 쪽으로 턱짓한다.* 체력 관리. |
| 40 | `classroom_dain_talk_1` | {name} | room_school | minsu_normal |  |  | *앞자리 이름표에는 '민수'라고 적혀 있었다.* |
| 41 | `classroom_dain_talk_2` | {name} | room_school | dain_normal |  |  | *자리에 앉자마자 다인이 상체를 기울인다. 책상 두 개 |
| 42 | `classroom_dain_talk_3` | 다인 | room_school | dain_normal |  |  | 야, {name}. 운동 좋아해? |
| 43 | `classroom_dain_talk_4` | {name} | room_school | dain_normal |  |  | 갑자기? |
| 44 | `classroom_dain_talk_5` | 다인 | room_school | dain_normal |  |  | 그냥. 방과후에 리시브 연습 상대가 필요해서. 서브 넣 |
| 45 | `classroom_dain_talk_6` | {name} | room_school | dain_normal |  |  | 나 볼 머신이야? |
| 46 | `classroom_dain_talk_7` | 다인 | room_school | dain_laugh |  |  | 그래도 볼 머신보단 낫겠지. 아마. |
| 47 | `classroom_dain_talk_8` | {name} | room_school | dain_laugh |  |  | *'아마' 뒤에 다인의 시선이 볼 머신 쪽으로 간다.  |
| 48 | `classroom_yuna_note_1` | {name} | room_school | yuna_bored |  |  | *접힌 쪽지가 책상 위로 미끄러져 온다. 뒤를 돌아봐도 |
| 49 | `classroom_yuna_note_3` | {name} | room_school | yuna_bored |  |  | *'시끄러운 자리 걸렸네. — 유나' 연보라색 잉크.  |
| 50 | `classroom_yuna_note_5` | {name} | room_school | yuna_bored |  |  | *유나 쪽을 보자 시선은 여전히 창밖이고 손만 책상 아 |
| 51 | `classroom_yuna_note_6` | {name} | room_school | yuna_bored |  |  | *수업 종이 울리자 유나는 다시 창밖을 보고 다인은 벌 |
| 52 | `lunch_start` | {name} | school_hallway | 없음 |  |  | *점심시간. 학생들로 찬 복도 끝에는 서연의 도시락 가 |
| 53 | `lunch_start_4` | {name} | school_hallway | seyoun_normal |  |  | *복도 끝에서 서연이 눈을 맞추더니 옥상 쪽을 손으로  |
| 54 | `lunch_start_4_b` | {name} | school_hallway | dain_normal |  |  | *옆에서 다인이 팔목을 낚아챈다.* |
| 55 | `lunch_start_5` | 다인 | school_hallway | dain_normal |  |  | 야, 밥 먹었어? 매점 가자. 빵 내기하자, 진 사람이 |
| 56 | `lunch_start_6` | {name} | school_hallway | yuna_normal |  |  | *유나는 가방만 들고 교실을 빠져나가 도서관 방향으로  |
| 57 | `lunch_start_7` | {name} | school_hallway | 없음 |  |  | *복도는 세 갈래다. 옥상, 매점, 도서관. 주머니 안 |
| 58 | `lunch_choice` | {name} | school_hallway | 없음 |  |  | *누구를 따라갈까?* |
| 59 | `lunch_yuna_1` | {name} | library_old | yuna_normal |  |  | *유나의 뒷모습을 따라 도서관으로 들어간다. 점심 종이 |
| 60 | `lunch_yuna_1_aff_default` | 유나 | library_old | yuna_normal |  |  | *쪽지는 없다. 유나는 열람실 구석에 먼저 앉아 책을  |
| 61 | `lunch_yuna_2` | 유나 | library_old | yuna_normal |  |  | *열람실 구석에서 책을 편다. 맞은편 의자 다리가 바닥 |
| 62 | `lunch_yuna_4` | 유나 | library_old | yuna_normal |  |  | *책장 한 장이 넘어간다. 유나는 대출 영수증 끝을 접 |
| 63 | `lunch_yuna_5` | {name} | library_old | yuna_normal |  |  | *5초, 다시 10초가 지나도록 유나는 대출 영수증 끝 |
| 64 | `lunch_yuna_5_b` | {name} | library_old | yuna_normal |  |  | 앉아도 돼? |
| 65 | `lunch_yuna_7` | 유나 | library_old | yuna_normal |  |  | *책에서 시선을 떼지 않는다.* 시끄럽지 않으면. |
| 66 | `lunch_yuna_8` | {name} | library_old | yuna_normal |  |  | *유나는 책을 다시 펴면서 맞은편 의자에 놓인 가방만  |
| 67 | `lunch_yuna_10` | {name} | library_old | yuna_normal |  |  | *벽시계 초침과 책장 넘어가는 소리가 엇갈린다. 맞은편 |
| 68 | `lunch_yuna_10_b` | {name} | library_old | yuna_normal |  |  | *유나의 책에는 오래된 책갈피가 끼워져 있고 흐릿한 글 |
| 69 | `lunch_yuna_12` | 유나 | library_old | yuna_normal |  |  | *책등 위로 시선을 올린다.* 그거 3권인데. |
| 70 | `lunch_yuna_13` | {name} | library_old | yuna_normal |  |  | 응? |
| 71 | `lunch_yuna_14` | 유나 | library_old | yuna_normal |  |  | 1권부터 읽어야 해. |
| 72 | `lunch_yuna_15` | {name} | library_old | yuna_normal |  |  | *유나가 자기 옆에 놓인 책을 하나 밀어준다.* |
| 73 | `lunch_yuna_16` | {name} | library_old | yuna_normal |  |  | 고마워. |
| 74 | `lunch_yuna_17` | 유나 | library_old | yuna_normal |  |  | 읽고 돌려줘. |
| 75 | `lunch_yuna_18` | 유나 | library_old | yuna_normal |  |  | *유나는 다시 자기 책을 편다. 빌려준 책은 첫 문장이 |
| 76 | `lunch_yuna_20` | {name} | library_old | yuna_normal |  |  | *종이 울린다.* |
| 77 | `lunch_yuna_21` | {name} | library_old | yuna_normal |  |  | 벌써 종이네. |
| 78 | `lunch_yuna_22` | 유나 | library_old | yuna_normal |  |  | *책갈피를 끼운다.* 조용히 있어줘서. |
| 79 | `lunch_yuna_23` | {name} | library_old | yuna_normal |  |  | 응? |
| 80 | `lunch_yuna_24` | 유나 | library_old | yuna_normal |  |  | 괜찮았어. |
| 81 | `lunch_yuna_25` | 유나 | library_old | yuna_normal |  |  | *유나는 책을 품에 끼고 먼저 나간다. 문이 닫힌 뒤, |
| 82 | `lunch_yuna_choice` | {name} | library_old | yuna_normal |  |  | *유나는 아직 몇 발자국 앞이다. 두고 간 책을 들고  |
| 83 | `lunch_yuna_c1_1` | 유나 | library_old | yuna_normal |  |  | 이거? 꽤 괜찮아. 빌려줄까? |
| 84 | `lunch_yuna_c1_2` | 유나 | library_old | yuna_smile |  |  | 다 읽으면 얘기하자. 감상이 궁금해. |
| 85 | `lunch_yuna_freetalk` | 유나 | library_old | yuna_normal |  |  | *책갈피를 끼우고 표지를 덮는다. 손바닥으로 맞은편 의 |
| 86 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *종이 울린다. 점심시간이 끝났다.* |
| 87 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에 |
| 88 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 89 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창 |
| 90 | `after_kakao_5` | {name} | school_hallway | 없음 |  | 🌅 | *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른 |
| 91 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록  |
| 92 | `after1_jealousy_yuna_1` | 다인 | school_hallway | dain_normal |  | 🌅 | 점심때 도서관 갔다며? 유나랑? |
| 93 | `after1_jealousy_yuna_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 그 애 원래 사람 안 만나는데. |
| 94 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *복도를 계속 걷는다.* |
| 95 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도를 걷는데 뒤에서 쿵쿵 발소리.* |
| 96 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 조심! |
| 97 | `after_miss_dain_3` | {name} | school_hallway | dain_normal |  | 🌅 | *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 |
| 98 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 피했다? 반사신경 괜찮은데. |
| 99 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 넌 복도에서 왜 전력질주야? |
| 100 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 늦었거든! 체육관 가야 해. 내일 보자, 전학생! |
| 101 | `after_miss_dain_6_b` | {name} | school_hallway | dain_laugh |  | 🌅 | *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을  |
| 102 | `after_miss_dain_7` | {name} | school_hallway | dain_laugh |  | 🌅 | *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아 |
| 103 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으 |
| 104 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 이거 떨어뜨렸어. |
| 105 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피 |
| 106 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌  |
| 107 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 고마워. |
| 108 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피를 책등 사이에 끼우고 돌아선다.* |
| 109 | `after_miss_yuna_4` | {name} | library_old | yuna_normal |  | 🌅 | *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 |
| 110 | `after_miss_seoyeon_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *하교하려는데 복도에서 서연과 마주친다.* |
| 111 | `after_miss_seoyeon_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 아까 어디 갔어? |
| 112 | `after_miss_seoyeon_3` | {name} | school_hallway | seyoun_normal |  | 🌅 | 어디라니? |
| 113 | `after_miss_seoyeon_4` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 옥상 열어놨는데 안 왔네. — 전학생, 배짱이 있어. |
| 114 | `after_miss_seoyeon_5` | {name} | school_hallway | seyoun_normal |  | 🌅 | 기다린 거야? |
| 115 | `after_miss_seoyeon_6` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 바람 쐬러 올라간 건데 문이 열려 있길래. |
| 116 | `after_miss_seoyeon_7` | {name} | school_hallway | seyoun_normal |  | 🌅 | *서연의 클립보드 맨 위에 내 이름이 남아 있다. 체크 |
| 117 | `after_miss_seoyeon_8` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 내일은 빠지지 마. |
| 118 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든 |
| 119 | `after_hidden_homeroom_1` | {name} | school_hallway | 없음 |  | 🌅 | *하교하려다 아까 교실에 마지막까지 남아 출석부를 정리 |
| 120 | `after_hidden_homeroom_2` | 담임 | teacher_office | teacher_normal |  | 🌅 | 어, {name}? — 무슨 일? |
| 121 | `after_hidden_homeroom_3` | {name} | teacher_office | teacher_normal |  | 🌅 | *담임이다. 가디건 한쪽 소매가 접혀 있고 출석부 사이 |
| 122 | `after_hidden_homeroom_3_b` | {name} | teacher_office | teacher_normal |  | 🌅 | 아까 하셨던 말씀이 — 계속 남아서요. |
| 123 | `after_hidden_homeroom_3_c` | 담임 | teacher_office | teacher_normal |  | 🌅 | 아, 그거였어? 잘 왔네. 앉아. |
| 124 | `after_hidden_homeroom_4` | 담임 | teacher_office | teacher_normal |  | 🌅 | 잘못한 건 없고. — 전학생이니까. 적응 좀 어때? |
| 125 | `after_hidden_homeroom_choice` | 담임선생님 | teacher_office | teacher_normal |  | 🌅 | *클립보드를 내리고 {name}의 얼굴을 본다.* |
| 126 | `after_homeroom_choice_trap` | 담임선생님 | teacher_office | teacher_worried |  | 🌅 | *클립보드가 다시 가슴 앞에 선다.* 특별 취급이 아니 |
| 127 | `after_homeroom_ok_6` | 담임선생님 | teacher_office | teacher_normal |  | 🌅 | *담임은 다시 책상 쪽으로 돌아선다. 짧게 인사하고 교 |
| 128 | `night_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄 |
| 129 | `night_start_3` | {name} | room_my | 없음 |  |  | *핸드폰이 울린다. 학교 메신저.* |
| 130 | `night_msg_yuna_1` | 유나 | room_my | yuna_normal | 0.35 |  | *오늘 조용히 있어줘서 괜찮았어* |
| 131 | `night_msg_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | *내일도 자리 비워 놓을게* |
| 132 | `night_msg_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *'자리 비워 놓을게'를 다시 읽는 사이 화면이 먼저  |
| 133 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 다른 알림이 보인다.* |
| 134 | `night_hidden_homeroom_1` | {name} | room_my | teacher_normal | 0.35 |  | *학교 공지 앱에 담임선생님이 올린 글이 보인다. '3 |
| 135 | `night_hidden_homeroom_2` | {name} | room_my | teacher_normal | 0.35 |  | *공지사항을 한 번 더 읽고 화면을 엎어 둔다. 어두워 |
| 136 | `night_late_transition` | {name} | room_my | 없음 |  |  | *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시 |
| 137 | `night_late_branch` | {name} | room_my | 없음 |  |  | *화면이 밝아진다.* |
| 138 | `night_end_1` | {name} | room_my | 없음 |  |  | *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교 |
| 139 | `night_end_3` | {name} | room_my | 없음 |  |  | *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을  |
| | **Day 2** | | | | | | |
| 140 | `morning2_start` | {name} | room_school | 없음 |  |  | *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.* |
| 141 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 142 | `morning2_dain_1` | {name} | room_school | 없음 |  |  | *교실 문을 여는 순간 손바닥이 등짝을 탁 친다.* |
| 143 | `morning2_dain_2` | 다인 | room_school | dain_normal |  |  | 왔어? 좋은 아침. |
| 144 | `morning2_dain_3` | 다인 | room_school | dain_laugh |  |  | 그 정도로? 체력 관리 좀 해. |
| 145 | `morning2_dain_4` | {name} | room_school | dain_laugh |  |  | 너 아침부터 에너지 과잉 아냐? |
| 146 | `morning2_dain_5` | 다인 | room_school | dain_laugh |  |  | 이게 정상이야! 네가 부족한 거야! |
| 147 | `morning2_dain_6` | 다인 | room_school | dain_laugh |  |  | *아침 조회 전 교실에 다인의 목소리가 먼저 울린다.* |
| 148 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *자리에 앉으려는데 — 책상 위에 접힌 쪽지가 하나 놓 |
| 149 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 150 | `morning2_note_3` | {name} | room_school | yuna_normal | 0.35 |  | *어제와 같은 글씨. 아래쪽에 장소가 적혀 있다. '도 |
| 151 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가다 교실 안을 들여다본다.* 어제 잘 잤 |
| 152 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 학생회장이 교실까지 인사하러 와? |
| 153 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 순찰이야. — 출석률 확인 겸. |
| 154 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | *복도로 돌아가기 직전 클립보드 끝이 문틀에 한 번 닿 |
| 155 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연이 사라진 복도를 바라보는데 — 뒤에서 민수가 돌 |
| 156 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 이틀 만에 학생회장이 인사하러 오냐? 나 1 |
| 157 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 인기가 없는 거 아닐까. |
| 158 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 그건 맞는데 그게 중요한 게 아니잖아. |
| 159 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *다인은 서연의 뒷모습이 교실 안으로 사라질 때까지 바 |
| 160 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 회장님도 우리 전학생한테 관심 있어? 인기 많네! |
| 161 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | '우리' 전학생? |
| 162 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 내가 먼저 봤잖아. 그럼 우리 맞지. 찜한 거. |
| 163 | `hidden_homeroom_d2_1` | 담임선생님 | school_hallway | teacher_normal |  |  | 아, {name}. 잠깐 교무실로. |
| 164 | `hidden_homeroom_d2_low` | 담임선생님 | teacher_office | teacher_normal |  |  | *교무실 문 앞에서 담임과 마주친다. 담임은 들고 있던 |
| 165 | `morning2_seo_dust_1` | {name} | school_hallway | seyoun_normal |  |  | *1교시가 끝난 쉬는 시간, 복도에서 서연과 스친다.  |
| 166 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 잠깐. |
| 167 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *손이 {name}의 어깨에 닿는다. 먼지를 두 번 털 |
| 168 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 옷에 뭐 묻었어. |
| 169 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | *서연의 손이 떨어진 자리에서 가방끈이 비뚤어져 있다. |
| 170 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 왜 그래? 먼지잖아. |
| 171 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *어깨의 먼지는 없어졌는데 가방끈을 두 번이나 다시 고 |
| 172 | `morning2_dain_react_2` | {name} | school_hallway | dain_angry |  |  | *서연이 클립보드를 고쳐 끼고 복도로 간다. 뒤에서 다 |
| 173 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 지금 뭐야? 어깨 만진 거야? |
| 174 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 먼지 털어준 거야. |
| 175 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 먼지가 진짜 있긴 했어? |
| 176 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | *대답 대신 가방끈을 고쳐 잡았다. 다인은 그걸 보고도 |
| 177 | `morning2_end` | {name} | school_hallway | seyoun_normal |  |  | *민수 말로는 1년 동안 먼저 인사한 적도 없다던 서연 |
| 178 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *점심. 주머니에는 유나의 쪽지가 있고 복도 끝에서는  |
| 179 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *누구와 함께할까.* |
| 180 | `lunch2_seo_1_check` | {name} | school_hallway | 없음 |  |  | *옥상으로 올라간다.* |
| 181 | `lunch2_seo_1b` | {name} | top_school | seyoun_normal |  |  | *처음 올라온 옥상이다. 난간 아래에서 운동장 호루라기 |
| 182 | `lunch2_seo_2b_check` |  | top_school | seyoun_normal |  |  |  |
| 183 | `lunch2_seo_2b_yuna` | 서연 | top_school | seyoun_normal |  |  | 쪽지까지 받고도 옥상으로 왔네. |
| 184 | `lunch2_seo_3b_yuna` | {name} | top_school | seyoun_normal |  |  | 어제는 조용한 쪽이었으니까, 오늘은 네 쪽이 궁금했어. |
| 185 | `lunch2_seo_4b_yuna` | 서연 | top_school | seyoun_normal |  |  | 내 쪽? |
| 186 | `lunch2_seo_5b_yuna` | {name} | top_school | seyoun_normal |  |  | 여기 바람이랑, 회장님 도시락이 어떤 조합인지 궁금했거 |
| 187 | `lunch2_seo_6b_yuna` | 서연 | top_school | seyoun_laugh |  |  | *도시락 뚜껑 끝을 젓가락으로 톡 친다.* 그거, 이상 |
| 188 | `lunch2_seo_7` | {name} | top_school | seyoun_normal |  |  | *서연이 도시락 뚜껑을 여는 순간 옥상 문이 철컥 열린 |
| 189 | `lunch2_seo_9` | 다인 | top_school | dain_normal |  |  | 여기 있었네. 찾았다. 오늘도 나 빼고 먹으려고? |
| 190 | `lunch2_seo_10` | 서연 | top_school | seyoun_normal |  |  | 옥상은 허가제야. 그리고 오늘 점심은 내가 먼저 잡았고 |
| 191 | `lunch2_seo_11` | 다인 | top_school | dain_normal |  |  | 그럼 난 지금부터 끼면 되겠네. 나도 앉는다? |
| 192 | `lunch2_seo_12` | {name} | top_school | dain_normal |  |  | *다인이 빈자리에 바로 앉는다. 서연의 젓가락이 계란말 |
| 193 | `lunch2_seo_13b` | 다인 | top_school | dain_normal |  |  | 반가워요, 회장님. 그런데 옆자리는 비었죠? |
| 194 | `lunch2_seo_13b_b` | 서연 | top_school | seyoun_normal |  |  | *서연이 도시락을 {name} 쪽으로 더 붙인다.* 자 |
| 195 | `lunch2_seo_14` | 서연 | top_school | seyoun_normal |  |  | *다인이 앉으려 하자 빈 의자를 발끝으로 자기 쪽에 붙 |
| 196 | `lunch2_seo_15` | {name} | top_school | seyoun_normal |  |  | 같은 반이잖아. 너희 둘도 이제 아는 사이고. |
| 197 | `lunch2_seo_16` | 서연 | top_school | seyoun_normal |  |  | 친해지는 것하고 양보하는 건 다르지. |
| 198 | `lunch2_seo_17` | 다인 | top_school | dain_normal |  |  | 그럼 나도 양보 안 해. 다음 쉬는 시간에 체육관 와. |
| 199 | `lunch2_seo_19` | 서연 | top_school | seyoun_normal |  |  | {name}, 지금 내 앞에서 다음 약속 잡는 거야? |
| 200 | `lunch2_seo_20` | 서연 | top_school | seyoun_normal |  |  | 대답은 나중에 해. 일단 입가에 뭐 묻었어. 가만있어  |
| 201 | `lunch2_seo_choice` | 서연 | top_school | seyoun_normal |  |  | *물티슈를 감은 손가락이 입가로 다가온다.* |
| 202 | `lunch2_seo_c2_1` | {name} | top_school | seyoun_normal |  |  | *손등으로 입가를 닦는다.* |
| 203 | `lunch2_seo_c2_2` | 서연 | top_school | seyoun_pout |  |  | 직접 닦으면 번지잖아. |
| 204 | `lunch2_seo_c2_3` | 서연 | top_school | seyoun_pout |  |  | *도시락 뚜껑을 맞추는 손이 두 번 미끄러진다. 세 번 |
| 205 | `lunch2_seo_end_c2` | {name} | top_school | seyoun_pout |  |  | *손등에 아직 밥풀 자국이 남아 있다. 서연은 도시락  |
| 206 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *방과후. 핸드폰에 알림이 두 개 와 있다.* |
| 207 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 체육관 와. 오늘은 진짜 내기다. |
| 208 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 학생회실에 올 수 있어? 일손이 부족해서. |
| 209 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게서는 아무 연락이 없다. 가방을 챙기자 주머니 |
| 210 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *어디로 갈까.* |
| 211 | `after2_dain_1` | {name} | gym | dain_active |  | 🌅 | *체육관. 다인이 배구 네트 앞에서 준비운동을 하고 있 |
| 212 | `after2_dain_2` | 다인 | gym | dain_sweat |  | 🌅 | 왔어? 늦었어. |
| 213 | `after2_dain_3` | {name} | gym | dain_sweat |  | 🌅 | 5분 전인데. |
| 214 | `after2_dain_4` | 다인 | gym | dain_sweat |  | 🌅 | 나는 10분 전에 왔거든. |
| 215 | `after2_dain_5` | {name} | gym | dain_sweat |  | 🌅 | *빨리 온 쪽이 너. 나는 안 늦었다.* |
| 216 | `after2_dain_6` | 다인 | gym | dain_sweat |  | 🌅 | 자, 내기다! 서브 다섯 번, 세 번 이상 넘기면 네  |
| 217 | `after2_dain_7` | {name} | gym | dain_normal |  | 🌅 | 갑자기 떡볶이? |
| 218 | `after2_dain_8` | 다인 | gym | dain_laugh |  | 🌅 | 배고프거든. |
| 219 | `after2_dain_9` | {name} | gym | dain_normal |  | 🌅 | *첫 서브는 네트에 걸리고 두 번째는 선 안쪽에 떨어진 |
| 220 | `after2_dain_9_b` | 다인 | gym | dain_normal |  | 🌅 | *튕겨 나온 공을 양손으로 받아 든다.* 어? 봐주려고 |
| 221 | `after2_dain_9_c` | 다인 | gym | dain_active |  | 🌅 | *자세를 낮춘다. 공을 든 손에 힘이 들어간다.* |
| 222 | `after2_dain_9_d` | 다인 | gym | dain_active |  | 🌅 | 이번엔 제대로 간다! |
| 223 | `after2_dain_9_e` | {name} | gym | dain_active |  | 🌅 | *랠리가 빠르게 오간다. 다인은 착지할 때마다 왼발부터 |
| 224 | `after2_dain_9_f` | {name} | gym | dain_sweat |  | 🌅 | *점수판은 3:2. 다인은 일어서며 오른쪽 무릎을 한  |
| 225 | `after2_dain_11b` | {name} | street | dain_laugh |  | 🌅 | *체육관을 나와 거리를 걸었다.* |
| 226 | `after2_dain_12` | 다인 | street | dain_laugh |  | 🌅 | 졌네. 근데 좀 치는데? 너 운동 안 한다며. |
| 227 | `after2_dain_13` | {name} | street | dain_laugh |  | 🌅 | 안 한다고는 안 했어. |
| 228 | `after2_dain_14` | 다인 | street | dain_normal |  | 🌅 | *들고 있던 공을 떨어뜨린다.* 뭐야? 속은 거야? |
| 229 | `after2_dain_15` | {name} | street | dain_normal |  | 🌅 | 속인 건 아니고 물어보지도 않았잖아. |
| 230 | `after2_dain_16` | 다인 | street | dain_laugh |  | 🌅 | *주먹을 어깨 높이까지 들었다가 자기 옆구리에 붙인다. |
| 231 | `after2_dain_freetalk` | 다인 | store | dain_normal |  | 🌅 | *가게에 들어서자 다인이 떡볶이 컵을 밀어 놓고 젓가락 |
| 232 | `after2_dain_end_first` | {name} | store | dain_laugh |  | 🌅 | *다인이 떡볶이 컵 두 개를 탁 내려놓고 젓가락 포장을 |
| 233 | `after2_dain_end_b` | {name} | store | dain_laugh |  | 🌅 | *학교 앞 떡볶이집. 다인이 떡볶이를 후후 불며 말한다 |
| 234 | `after2_dain_end_2` | 다인 | store | dain_laugh |  | 🌅 | 야, 너 진짜 운동 좀 아는 거지? |
| 235 | `after2_dain_end_2b` | {name} | store | dain_laugh |  | 🌅 | 조금. |
| 236 | `after2_dain_end_2c` | 다인 | store | dain_laugh |  | 🌅 | 조금이면 저렇게 못 쳐! — 인정해, 잘한다고. |
| 237 | `after2_dain_end_2d` | {name} | store | dain_laugh |  | 🌅 | 다인이가 훨씬 잘하던데. |
| 238 | `after2_dain_end_3` | 다인 | store | dain_laugh |  | 🌅 | *젓가락 끝이 떡볶이 컵 위에서 그대로다.* |
| 239 | `after2_dain_end_3b` | 다인 | store | dain_laugh |  | 🌅 | 당연하지. 나 체육 특기생이었거든. |
| 240 | `after2_dain_end_3c` | {name} | store | dain_laugh |  | 🌅 | *'이었거든'이 끝나자 다인의 젓가락이 종이컵 옆 물컵 |
| 241 | `after2_dain_end_3d` | 다인 | store | dain_laugh |  | 🌅 | 아, 맵다. 물, 물. |
| 242 | `after2_dain_end_3e` | 다인 | store | dain_shy |  | 🌅 | *떡볶이 컵을 {name} 쪽으로 밀어놓고 빈 물병을  |
| 243 | `after2_dain_return` | {name} | school | dain_shy |  | 🌅 | *학교로 돌아오는 길. 교문 앞에 다다랐다.* |
| 244 | `after2_group_dain_companion` | 다인과 동행 | gym | 없음 |  | 🌅 | *체육관과 별관에서 들은 설명이 서로 어긋난다. 다인이 |
| 245 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.* |
| 246 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 247 | `minsu_warn_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문을 나서는데 — 민수가 뒤에서 따라온다. |
| 248 | `minsu_warn_1_b` | 민수 | school | minsu_normal |  | 🌅 | *성큼 따라와 옆에 나란히 선다.* |
| 249 | `minsu_warn_2` | 민수 | school | minsu_smirk |  | 🌅 | 야. |
| 250 | `minsu_warn_3` | {name} | school | minsu_smirk |  | 🌅 | 왜? |
| 251 | `minsu_warn_4` | 민수 | school | minsu_smirk |  | 🌅 | 너 요즘 재밌냐? |
| 252 | `minsu_warn_4_b` | {name} | school | minsu_normal |  | 🌅 | *민수는 교문 밖 횡단보도 신호만 보고 있다.* |
| 253 | `minsu_warn_5` | {name} | school | minsu_smirk |  | 🌅 | 갑자기? |
| 254 | `minsu_warn_6` | 민수 | school | minsu_smirk |  | 🌅 | 서연이, 다인이, 유나. 셋 다 너한테 웃더라. — 뭐 |
| 255 | `minsu_warn_15_b` | 다인 | school | dain_normal | 0.35 | 🌅 | 내일도 내기하자. 종목 바꿔서. |
| 256 | `minsu_warn_15_c` | 서연 | school | seyoun_normal | 0.35 | 🌅 | 내일 점심에 옥상 열어놓을게. 와 |
| 257 | `night2_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저  |
| 258 | `night2_msg_1` | {name} | room_my | 없음 |  |  | *세 명에게서 메시지가 왔다.* |
| 259 | `night2_msg_dain_specific` | 다인 | room_my | dain_normal | 0.35 |  | 야, 오늘 떡볶이 맛있었다. |
| 260 | `night2_msg_dain_specific_2` | 다인 | room_my | dain_normal | 0.35 |  | 내일도 내기하자. 종목 바꿔서. |
| 261 | `night2_msg_seo_general` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 점심에 옥상 열어놓을게. 와 |
| 262 | `night2_msg_yuna_general` | 유나 | room_my | yuna_normal | 0.35 |  | 내일 별관 올 거야? |
| 263 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에  |
| 264 | `night2_choice` | {name} | room_my | 없음 |  |  | *누구에게 먼저 답장할까?* |
| 265 | `night2_reply_dain_1` | {name} | room_my | dain_normal | 0.35 |  | 떡볶이 매웠어 ㅋㅋ |
| 266 | `night2_reply_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | 매운 거 못 먹는 거야? |
| 267 | `night2_reply_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | 내일은 순한 맛으로 가자. |
| 268 | `night2_reply_dain_4` | 다인 | room_my | dain_normal | 0.35 |  | 아 근데 순한 맛은 떡볶이가 아니지ㅋㅋ |
| 269 | `night2_reply_dain_5` | {name} | room_my | dain_normal | 0.35 |  | *또 세 줄 연속이다.* |
| 270 | `night2_reply_dain_react_default` | 다인 | room_my | dain_normal | 0.35 |  | ㅋㅋ 알겠어. 굿나잇! |
| 271 | `night2_dain_freetalk` | 다인 | room_my | dain_normal | 0.35 | 🌙 | 잠깐, 진짜 자기 전에. 오늘 제일 재밌었던 건 뭐였어 |
| 272 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 또 다른 알림이 보인다.* |
| 273 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 보내고 핸드폰을 내려놓았다.* |
| 274 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이,  |
| 275 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 |
| 276 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *메모장에 줄줄이 남은 보내지 않은 문장. '선생님,  |
| 277 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 메모가 마지막이다. 그 아래 39번째에는 제 |
| 278 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 |
| 279 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로 |
| 280 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보 |
| 281 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화 |
| 282 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 |
| 283 | `night2_end_2_b` | {name} | room_my | 없음 |  |  | *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있 |
| 284 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.* |
| 285 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을  |
| 286 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 |
| | **Day 3** | | | | | | |
| 287 | `morning3_start` | {name} | school | 없음 |  |  | *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯 |
| 288 | `morning3_start_2` | {name} | school | 없음 |  |  | *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군 |
| 289 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 290 | `morning3_dain_gate_1` | {name} | school | dain_normal |  |  | *교문 근처에서 다인이 전력으로 달려온다.* |
| 291 | `morning3_dain_gate_cold_1` | 다인 | school | dain_normal |  |  | *다른 친구들과 뛰어간다.* |
| 292 | `morning3_dain_gate_cold_2` | 다인 | school | dain_normal |  |  | 어, 안녕! |
| 293 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실에 들어서자 서연의 펜이 멈추고 다인의 의자가 뒤 |
| 294 | `morning3_react_dain_1` | 서연 | room_school | seyoun_normal |  |  | 아침부터 체력 소모가 심하네. 점심에 도시락 줄까? |
| 295 | `morning3_react_dain_2` | 유나 | room_school | yuna_normal |  |  | *고개를 들지 않은 채 종이 귀퉁이에 짧은 선을 긋는다 |
| 296 | `morning3_date_intro` | {name} | room_school | 없음 |  |  | *1교시가 끝났다. 쉬는 시간마다 누군가 말을 건다.* |
| 297 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *쉬는 시간, 복도로 나왔다. 서연이 먼저 걸음을 맞춘 |
| 298 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | 이번 주말에 시간 있어? 공원에 같이 가자. |
| 299 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끈다. 눈이 마주치 |
| 300 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼  |
| 301 | `morning3_date_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 배구공을 옆구리에 낀 채 이쪽을 보다가 코트로 |
| 302 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다 |
| 303 | `morning3_date_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 접어 둔 쪽지를 꺼내려다 다시 책갈피 사이에  |
| 304 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 305 | `morning3_end` | {name} | room_school | 없음 |  |  | *수업 종료 종이 울리고 곧 점심시간이 된다.* |
| 306 | `morning3_end_b` | 유나 | room_school | yuna_normal |  |  | 맛있네. |
| 307 | `lunch3_start` | {name} | room_school | yuna_normal |  |  | *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. |
| 308 | `lunch3_start_2_b` | 다인 | room_school | dain_normal |  |  | *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가 |
| 309 | `lunch3_meal_1` | 다인 | room_school | dain_laugh |  |  | 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고  |
| 310 | `lunch3_meal_2` | {name} | room_school | dain_laugh |  |  | 그건 내 거... |
| 311 | `lunch3_meal_3` | 서연 | room_school | seyoun_normal |  |  | 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점 |
| 312 | `lunch3_meal_4` | {name} | room_school | seyoun_normal |  |  | 점수 매기지 마. |
| 313 | `lunch3_meal_5` | 서연 | room_school | seyoun_normal |  |  | 10점 만점이야. 나쁜 거 아닌데? |
| 314 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다 |
| 315 | `lunch3_meal_7` | {name} | room_school | seyoun_normal |  |  | 유나, 그건 내가 제일 좋아하는 건데. |
| 316 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임 |
| 317 | `lunch3_meal_8` | {name} | room_school | yuna_bored |  |  | *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다. |
| 318 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. |
| 319 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓 |
| 320 | `lunch3_meal_11` | {name} | room_school | yuna_bored |  |  | *누구에게 줄까?* |
| 321 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *마지막 반찬을 누구에게 줄지 고민한다.* |
| 322 | `lunch3_share_1` | {name} | room_school | yuna_bored |  |  | *다 같이 나눠 먹자고 하자 셋이 웃는다. 웃음이 끊긴 |
| 323 | `lunch3_share_solo` | {name} | room_school | yuna_normal |  |  | *셋이 계란말이를 조금씩 나눠 먹는다. 반으로 갈린 마 |
| 324 | `lunch3_end` | {name} | room_school | 없음 |  |  | *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다 |
| 325 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육 |
| 326 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다 |
| 327 | `after3_choice` | {name} | school_hallway | 없음 |  | 🌅 | *어디로 갈까.* |
| 328 | `after3_reject_for_dain_1` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *웃고 있다. 클립보드의 종이 모서리를 맞춘다.* |
| 329 | `after3_reject_for_dain_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 오늘은 할 일이 좀 있어서. 먼저 갈게. |
| 330 | `after3_reject_for_dain_2b` | {name} | yuna_hideout | 없음 |  | 🌅 | *유나의 아지트로 걸어간다.* |
| 331 | `after3_reject_for_dain_3` | {name} | library_old | yuna_normal | 0.35 | 🌅 | *도서관에 쪽지가 없다. 유나의 가방도 없다. 자리에  |
| 332 | `after3_reject_for_dain_3b` | {name} | school_hallway | 없음 |  | 🌅 | *복도로 돌아왔다. 바닥에 유나가 두고 간 물 자국이  |
| 333 | `after3_dain_1` | {name} | gym | dain_sweat |  | 🌅 | *체육관에서 다인이 혼자 스트레칭 중이다. 가볍게 뛰어 |
| 334 | `after3_dain_3` | {name} | dain_hurt_event1 | 없음 |  | 🌅 | 다인! |
| 335 | `after3_dain_4` | 다인 | gym | dain_sweat |  | 🌅 | 괜찮아. 그냥 좀 삐끗한 거야. |
| 336 | `after3_dain_5` | {name} | gym | dain_sweat |  | 🌅 | 괜찮아 보이진 않는데. |
| 337 | `after3_dain_5_b` | 다인 | gym | dain_sweat |  | 🌅 | 진짜 괜찮아. 별거 아니야. |
| 338 | `after3_dain_6` | 다인 | gym | dain_sad |  | 🌅 | *말을 마친 뒤에야 다인이 크게 웃는다.* |
| 339 | `after3_dain_choice` | 다인 | gym | dain_sad |  | 🌅 | *다인이 벤치에 앉아 무릎 한곳만 계속 문지른다.* |
| 340 | `after3_dain_pity_trap_1` | 다인 | gym | dain_sad |  | 🌅 | *다인은 무릎 위에 손바닥을 붙인 채 나를 올려다본다. |
| 341 | `after3_dain_pity_trap_2` | 다인 | gym | dain_sad |  | 🌅 | 무리. |
| 342 | `after3_dain_pity_trap_3` | 다인 | gym | dain_angry |  | 🌅 | 야. 무리한 거 아니야. 이거 그냥 자세 잘못 잡아서  |
| 343 | `after3_dain_pity_trap_4` | {name} | gym | dain_angry |  | 🌅 | *다인이 가방을 들고 일어서다 오른쪽 다리에 다시 힘을 |
| 344 | `after3_dain_pity_trap_5` | 다인 | gym | dain_sad |  | 🌅 | 너까지 그렇게 보지 마. |
| 345 | `after3_dain_pity_trap_6` | {name} | gym | dain_sad |  | 🌅 | 그렇게라니? |
| 346 | `after3_dain_pity_trap_7` | 다인 | gym | dain_sad |  | 🌅 | 보건실에서 보는 얼굴로. |
| 347 | `after3_dain_pity_trap_8` | 다인 | gym | dain_sad |  | 🌅 | *체육관 문 쪽으로 걸어간다. 평소처럼 뛰지 않는다.  |
| 348 | `after3_dain_pity_trap_9` | 다인 | gym | dain_sad |  | 🌅 | 코치도 그래. 부모도 그래. 다 그래. 너만은 안 그럴 |
| 349 | `after3_dain_pity_trap_10` | {name} | gym | 없음 |  | 🌅 | *체육관 문이 닫힌다. 쾅, 이 아니다. 살그머니. 바 |
| 350 | `after3_dain_end_check` | 다인 | gym | dain_normal |  | 🌅 | *주먹으로 어깨를 가볍게 친다.* |
| 351 | `after3_dain_end` | 다인 | gym | dain_shy |  | 🌅 | *다인의 주먹이 어깨에 닿지만 어제처럼 몸이 밀리지는  |
| 352 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.* |
| 353 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 354 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 355 | `minsu_d3_check` | {name} | school | 없음 |  | 🌅 |  |
| 356 | `minsu_d3_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문 앞에 민수가 서 있다.* |
| 357 | `minsu_d3_2` | 민수 | school | 없음 |  | 🌅 | 봤다. |
| 358 | `minsu_d3_3` | 민수 | school | 없음 |  | 🌅 | 점심때. 그리고 방금 서연 표정도. |
| 359 | `minsu_d3_4` | 민수 | school | 없음 |  | 🌅 | 어제 내가 뭐랬냐. 나중에 셋 다 울면 네 탓이라고 했 |
| 360 | `minsu_d3_5` | 민수 | school | 없음 |  | 🌅 | 옆에서 보기 좀 힘들다. 걔들 다 좋은 애들이야. 네가 |
| 361 | `minsu_d3_5b` | 민수 | school | 없음 |  | 🌅 | *민수는 빨대 포장지를 끝까지 접어 테이블 위에 내려놓 |
| 362 | `minsu_d3_6` | {name} | school | 없음 |  | 🌅 | 맞아. |
| 363 | `minsu_d3_6b` | 민수 | school | 없음 |  | 🌅 | 전 학교에서 뭔 일 있었는지 안 물어볼게. 근데 하나만 |
| 364 | `minsu_d3_7` | 민수 | school | 없음 |  | 🌅 | 거절도 배려야. 안 되는 관계에 계속 여지 주는 것보다 |
| 365 | `minsu_d3_8` | {name} | school | 없음 |  | 🌅 | *거절도 배려다. 전 학교에서 나는 소정이에게 고백할  |
| 366 | `minsu_d3_9` | 민수 | school | 없음 |  | 🌅 | *민수는 더 말하지 않고 끝까지 접은 빨대 포장지를 내 |
| 367 | `minsu_d3_10` | 민수 | school | 없음 |  | 🌅 | 내일 학교에서 보자. 진지하게 생각해. |
| 368 | `night3_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 가방을 의자에 걸어 둔다.* |
| 369 | `night3_start_2` | {name} | room_my | 없음 |  |  | *책상 위에 엎어 둔 핸드폰 화면을 켠다.* |
| 370 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *읽지 않은 메시지가 떠 있다.* |
| 371 | `night3_faithful_msg_dain_1` | 다인 | room_my | dain_normal | 0.35 |  | 발목 괜찮냐고 물어볼 거면 직접 와서 물어봐ㅋㅋ |
| 372 | `night3_faithful_msg_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | 아 근데 고마워 |
| 373 | `night3_faithful_msg_dain_3` | {name} | room_my | dain_normal | 0.35 |  | *'ㅋㅋ'와 다음 문장 사이가 비어 있다. 다인의 새  |
| 374 | `night3_dream_1` | {name} | school | 없음 |  |  | *꿈속에서 누군가와 나란히 걷는다. 얼굴은 보이지 않고 |
| 375 | `night3_dream_2_b` | {name} | school | 없음 |  |  | *메모장을 닫았다. 내일 보낼 문장은 아직 없다.* |
| 376 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *커튼 사이로 들어온 아침 햇살에 눈을 뜬다. 핸드폰  |
| 377 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *'삭제하시겠습니까?' 확인 창이 뜬다. 손가락이 버튼 |
| 378 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *1초 동안 화면을 내려다본다. 소정이 책상의 낙서와  |
| 379 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *그래. 삭제 버튼에 올린 손가락으로 화면을 누른다.* |
| 380 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼을 누르지 않고 사진을 새 폴더로 옮긴다.  |
| 381 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *'거절도 네가 해야 할 일이야.' 민수의 말이 떠오른 |
| 382 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *갤러리에서 소정이 사진이 사라지고 빈칸만 남는다.* |
| 383 | `night3_faithful_reflect_4_b` | {name} | room_my | 없음 |  |  | *빈 앨범 썸네일 위를 엄지로 문지른다.* |
| 384 | `night3_faithful_reflect_4_c` | {name} | room_my | 없음 |  |  | *핸드폰을 덮자 검은 화면에 갤러리의 빈칸이 겹쳐 보인 |
| 385 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *알람이 울리기 전에 눈을 떴다.* |
| 386 | `night3_dream_dain_bonus` | {name} | room_my | 없음 |  |  | *눈을 감자 체육관 바닥에 공 튀는 소리가 떠오른다.* |
| 387 | `night3_end` | {name} | room_my | 없음 |  |  | *방 불을 끄고 핸드폰을 엎어 둔다.* |
| | **Day 4** | | | | | | |
| 388 | `morning4_start` | {name} | room_my | 없음 |  |  | *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다 |
| 389 | `morning4_nightmare_check` |  | room_my | 없음 |  |  |  |
| 390 | `minsu_cheer_1` | {name} | room_my | 없음 |  |  | *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.* |
| 391 | `minsu_cheer_1_b` | 민수 | room_my | minsu_normal | 0.35 |  | *야 오늘 데이트라며?* |
| 392 | `minsu_cheer_1_c` | {name} | room_my | minsu_normal | 0.35 |  | *어떻게 알았어* |
| 393 | `minsu_cheer_1_d` | 민수 | room_my | minsu_normal | 0.35 |  | *다인이가 단톡방에 올림. 내일 약속 있음, 이라고* |
| 394 | `minsu_cheer_2` | 민수 | room_my | minsu_normal | 0.35 |  | 잘하고 와ㅋㅋ |
| 395 | `minsu_cheer_3` | {name} | room_my | minsu_normal | 0.35 |  | 알아. |
| 396 | `minsu_cheer_4_branch` |  | room_my | 없음 |  |  |  |
| 397 | `minsu_cheer_4_ins_single` | {name} | room_my | minsu_normal | 0.35 |  | *핸드폰 캘린더를 본다. 오늘 약속은 하나뿐이다.* |
| 398 | `morning4_start_2` | {name} | room_my | 없음 |  |  | *심호흡하고 약속 메시지를 다시 확인한다.* |
| 399 | `morning4_dain_msg_1` | 다인 | room_my | dain_sweat | 0.35 |  | 오늘이다. 체육관 앞 저녁 6시. 아, 왜 이렇게 떨리 |
| 400 | `morning4_hidden_check` | {name} | room_my | 없음 |  |  | *주말 아침, 학교 앞 사거리에서 신호를 기다린다.* |
| 401 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 402 | `morning4_end` | {name} | room_my | 없음 |  |  | *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 |
| 403 | `date_dain_1` | {name} | gym | dain_laugh |  |  | *체육관 앞. 다인이 뛰어온다. 캡모자에 운동복.* |
| 404 | `date_dain_low` | 다인 | gym | dain_normal |  |  | *체육관 앞에서 다인이 공 가방 끈을 고쳐 멘다.* 오 |
| 405 | `day4_night_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 옷소매에 공원 흙과 학교 먼지가 조금 |
| 406 | `day4_night_branch` | 시스템 | room_my | 없음 |  |  |  |
| 407 | `day4_student_night_branch` |  | room_my | 없음 |  |  |  |
| 408 | `day4_night_regret` | {name} | room_my | 없음 |  |  | *집으로 돌아온 뒤에도 채팅창에는 입력하다 만 문장이  |
| 409 | `day4_night_regret_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 410 | `day4_night_regret_msg_dain` | 다인 | room_my | dain_normal | 0.35 |  | 야, 오늘 재밌었다. 나 혼자 들뜬 거 아니었지? |
| 411 | `day4_night_regret_reply` | {name} | room_my | 없음 |  |  | *답장을 쓰다 지운다. 입력창에는 받침 하나만 남았다가 |
| 412 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 413 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *알람을 일요일 오전으로 맞추고 방 불을 끈다. 전하지 |
| 414 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안 시계가 자정 쪽으로 넘어간다. 휴대폰 화면도  |
| | **Day 5** | | | | | | |
| 415 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소 |
| 416 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 417 | `morning5_start_b` | {name} | room_school | 없음 |  |  | *교실에 들어서자 세 가지가 한꺼번에 눈에 들어온다.  |
| 418 | `morning5_start_2_b` | {name} | room_school | 없음 |  |  | *책상 위에 쪽지가 놓여 있다. 서연의 글씨.* |
| 419 | `morning5_mood_check` | 시스템 | room_school | 없음 |  |  |  |
| 420 | `morning5_mood_low` | {name} | room_school | 없음 |  |  | 마지막 날. 잠금화면에 남은 이름 셋을 차례로 누른다. |
| 421 | `morning5_gate` | {name} | school | 없음 |  |  | *교문 앞에서 소매를 걷어 올린다. 손목에 남던 붉은  |
| 422 | `morning5_seo_note_1` | {name} | room_school | seyoun_normal |  |  | *책상 위에 쪽지가 놓여 있다. 서연의 글씨. — '오 |
| 423 | `morning5_seo_note_1_b` | {name} | school_hallway | 없음 |  |  | *복도 문예부 전시 코너를 지나다 게시판의 빈 압정 네 |
| 424 | `morning5_seo_note_1_c` | {name} | school_hallway | 없음 |  |  | *게시판에 단편소설이 붙어 있다. 제목: '도서관에서  |
| 425 | `morning5_yuna_story_1` | {name} | school_hallway | yuna_normal |  |  | *소설 속 인물은 도서관에서 잠든 누군가의 어깨에 담요 |
| 426 | `morning5_yuna_story_2` | {name} | school_hallway | 없음 |  |  | *마지막 문장. '그 사람이 눈을 떴을 때, 나는 이미 |
| 427 | `morning5_yuna_story_4` | {name} | school_hallway | yuna_normal |  |  | *게시판 아래 구석에는 작은 글씨가 남아 있다. '이건 |
| 428 | `morning5_return_class` | {name} | room_school | dain_normal |  |  | *교실로 돌아오니 다인이 기다리고 있다.* |
| 429 | `morning5_dain_1` | 다인 | room_school | dain_normal |  |  | 야, 오늘 체육 이벤트 파트너로 너 써놨어. |
| 430 | `morning5_dain_1_b` | {name} | room_school | dain_normal |  |  | 허락도 없이? |
| 431 | `morning5_dain_2` | 다인 | room_school | dain_laugh |  |  | 늦으면 화낸다? |
| 432 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *행사 준비 시간. 복도를 걷는데 — 빈 교실 앞을 지 |
| 433 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *행사 중간 쉬는 시간. 보건실 앞을 지나간다.* |
| 434 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 435 | `morning5_end` | {name} | room_school | 없음 |  |  | *세 방향에서 온 쪽지와 알림을 책상 위에 나란히 둔다 |
| 436 | `tour_dain_1_check` | {name} | gym | 없음 |  |  | *체육관으로 간다.* |
| 437 | `tour_dain_low` | 다인 | gym | dain_normal |  |  | *체육관 문 앞에서 다인을 만난다. 다인은 공을 들고  |
| 438 | `after5_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 439 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *행사가 끝나갈 무렵, 복도에서 선택하지 않은 두 사람 |
| 440 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 441 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다.* |
| 442 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다. 서연은 잠시 멈췄다가 고개 |
| 443 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 444 | `after5_farewell_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나가 다가온다. 아무 말 없이 책 한 |
| 445 | `after5_farewell_yuna_low` | 유나 | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나와 눈이 마주친다. 유나는 들고 있 |
| 446 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 447 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *석양이 교정 창문마다 걸린다. 방송실에서 행사 종료  |
| 448 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 449 | `after5_last_chance_1` | {name} | school_back | 없음 |  | 🌅 | *행사장 스피커 전원이 꺼진다. 갈림길 안내판 아래에서 |
| 450 | `after5_last_chance_2` | {name} | school_back | 없음 |  | 🌅 | *주머니 속 휴대폰을 꺼낸다. 검은 화면에 행사 현수막 |
| 451 | `after5_last_chance_route_check` |  | school_back | 없음 |  | 🌅 |  |
| 452 | `after5_last_chance_dain_aff_check` |  | school_back | 없음 |  | 🌅 |  |
| 453 | `after5_last_chance_dain_low_1` | {name} | school_back | 없음 |  | 🌅 | 다인아. |
| 454 | `after5_last_chance_dain_low_2` | 다인 | school_back | dain_sad |  | 🌅 | *한 걸음 지나친 뒤 돌아온다. 배구공을 가슴 앞에 안 |
| 455 | `after5_last_chance_choice` | {name} | school_back | 없음 |  | 🌅 | *손바닥 안에서 핸드폰이 눌린다.* |
| 456 | `after5_confess_no` | {name} | school_back | 없음 |  | 🌅 | *휴대폰 화면을 끄고 입을 다문다.* |
| 457 | `after5_confess_no_2` | {name} | school_back | 없음 |  | 🌅 | *저녁 바람에 행사 안내지가 발치까지 굴러온다. 주워  |
| 458 | `after5_confess_no_2b` | {name} | room_my | 없음 |  | 🌅 | *끝내 돌아서서 집으로 향했다.* |
| 459 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 460 | `ending_last_chance_resolve` | 시스템 | park | 없음 |  |  |  |
| 461 | `day5_ending_friend` | {name} | park | 없음 |  |  | *고백 대신 고맙다는 말을 쓰기로 한다. 입력창에 첫  |
| 462 | `friend_1` | {name} | park | 없음 |  |  | *공원 벤치에 앉아 메시지 창을 연다. 이번에는 입력창 |
| 463 | `friend_2` | {name} | park | 없음 |  |  | *소정이 대화방에 끝내 보내지 못한 문장이 떠오른다.* |
| 464 | `friend_3` | {name} | park | 없음 |  |  | *'지금은 관계를 바꾸자고 말할 자신이 없어. 그래도  |
| 465 | `friend_route_check` | 시스템 | park | 없음 |  |  |  |
| 466 | `friend_4_dain` | {name} | park | 없음 |  |  | *다인에게서 답장이 온다. '응. 그럼 내일은 평소대로 |
| 467 | `friend_5` | {name} | park | 없음 |  |  | *'응.' 짧게 답하고 화면을 끈다.* |
| 468 | `friend_7` | {name} | park | 없음 |  |  | *보낸 메시지 옆에 읽음 표시가 붙는다. 입력창은 비어 |
| 469 | `friend_8` | {name} | ending_friend | 없음 |  |  | *졸업식 날. 핸드폰 갤러리에 이 학교 친구들과 찍은  |
| 470 | `friend_9` | {name} | ending_friend | 없음 |  |  | *사진 파일명은 '졸업식_친구들'. 단체 대화방에도 같 |
| 471 | `friend_10` | {name} | ending_friend | 없음 |  |  | *단체 대화방에 쓴다. '졸업식 끝나고 다 같이 뭐 먹 |
| 472 | `friend_12` | 시스템 | ending_friend | 없음 |  |  | ─── FRIEND END ─── |
| 473 | `day5_credits` |  | school | 없음 |  |  |  |
| 474 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

## 씬 커버리지

- 전체: 2818개
- 방문: 1590개 (56.4%)
- 미방문: 1229개

**미방문 씬:**
- Day 1: lunch_seo_1_aff_high, lunch_dain_c2_1, lunch_dain_trap_1, after_dain_skip, after_yuna_skip, after_homeroom_honest_1, after_homeroom_honest_2, after_homeroom_honest_3, after_homeroom_honest_3_b, after_homeroom_honest_4, after_homeroom_honest_5, after_homeroom_honest_6, after_homeroom_honest_6_b, after_homeroom_honest_choice2, after_homeroom_honest_choice2a, after_homeroom_honest_choice2a_b, after_homeroom_honest_choice2b, after_homeroom_honest_choice2b_b, after_homeroom_honest_7, after_homeroom_honest_8, after_homeroom_honest_9, after_homeroom_honest_9_b, after_homeroom_honest_10, after_homeroom_freetalk, after_nurse_enter_trap, night_yuna_late_1, night_yuna_late_2, night_yuna_late_3, night_yuna_late_4, forced_violation_day1_after_seoyeon, forced_violation_day1_seoyeon_apologize, forced_violation_day1_seoyeon_excuse, forced_violation_day1_after_yuna, forced_violation_day1_yuna_apologize, forced_violation_day1_yuna_excuse, forced_violation_day1_after_dain, forced_violation_day1_dain_apologize, forced_violation_day1_dain_excuse, forced_violation_day1_after_teacher, forced_violation_day1_teacher_apologize, forced_violation_day1_teacher_excuse, forced_violation_day1_after_nurse, forced_violation_day1_nurse_apologize, forced_violation_day1_nurse_excuse, forced_violation_day1_resume
- Day 2: morning2_greet_seo_1_gate, morning2_greet_yuna_1, morning2_greet_yuna_2, morning2_greet_yuna_others, morning2_greet_yuna_others_seo, morning2_greet_yuna_others_dain, morning2_greet_yuna_others_2, morning2_break_transition_b, hidden_homeroom_d2_1_b, hidden_homeroom_d2_1_c, hidden_homeroom_d2_2, hidden_homeroom_d2_2_b, hidden_homeroom_d2_3, hidden_homeroom_d2_3_b, hidden_homeroom_d2_3_c, hidden_homeroom_d2_3_d, hidden_homeroom_d2_3_e, hidden_homeroom_d2_3_f, hidden_homeroom_d2_3_g, hidden_homeroom_d2_choice1, hidden_homeroom_d2_choice1_a, hidden_homeroom_d2_choice1_b, hidden_homeroom_d2_choice1_trap, hidden_homeroom_d2_5, hidden_homeroom_d2_6, hidden_homeroom_d2_7, hidden_homeroom_d2_7_b, hidden_homeroom_d2_8, hidden_homeroom_d2_8_b, hidden_homeroom_d2_8_c, hidden_homeroom_d2_8_d, hidden_homeroom_d2_8_e, hidden_homeroom_d2_8_f, hidden_homeroom_d2_9, hidden_homeroom_d2_10, hidden_homeroom_d2_choice2, hidden_homeroom_d2_choice2_trap, hidden_homeroom_d2_choice2_a, hidden_homeroom_d2_choice2_b, hidden_homeroom_d2_11, hidden_homeroom_d2_11_b, hidden_homeroom_d2_12, hidden_homeroom_d2_freetalk, lunch2_seo_2b, lunch2_dain_1b, lunch2_dain_1b_yuna, lunch2_dain_2b_yuna, lunch2_dain_3b_yuna, lunch2_dain_4b_yuna, lunch2_dain_3b, lunch2_dain_4b, lunch2_yuna_3, lunch2_yuna_4, lunch2_yuna_5, lunch2_yuna_6, lunch2_yuna_7, lunch2_yuna_8, lunch2_yuna_c2_1, lunch2_yuna_c2_3, lunch2_yuna_c2_4, lunch2_yuna_c2_6, lunch2_yuna_c2_7, lunch2_yuna_c2_8, lunch2_yuna_c2_9, hidden_nurse_d2_2, hidden_nurse_d2_3, hidden_nurse_d2_4, hidden_nurse_d2_5, hidden_nurse_d2_choice1, hidden_nurse_d2_choice1_a, hidden_nurse_d2_choice1_b, hidden_nurse_d2_6, hidden_nurse_d2_7, hidden_nurse_d2_choice2, hidden_nurse_d2_choice2_a, hidden_nurse_d2_choice2_b, hidden_nurse_d2_8, hidden_nurse_d2_9, hidden_nurse_d2_freetalk, hidden_nurse_d2_return, after2_dain_skinship_1, after2_dain_skinship_2, after2_dain_skinship_3, after2_seo_neck_high, after2_seo_neck_high_b, after2_seo_neck_high_c, after2_seo_neck_high_2, after2_seo_neck_high_2_b, after2_yuna_quiet, after2_yuna_quiet_react, after2_yuna_trap, after2_yuna_trap_react, after2_yuna_skinship_1, after2_yuna_skinship_2, after2_yuna_skinship_3, night2_msg_generic, night2_msg_generic_2, night2_msg_generic_3, night2_reply_dain_react_high, night2_reply_yuna_react_high, night2_hidden_homeroom_1, night2_hidden_homeroom_2, night2_hidden_homeroom_3, night2_hidden_nurse_1, night2_hidden_nurse_2, forced_violation_day2_after_seoyeon, forced_violation_day2_seoyeon_apologize, forced_violation_day2_seoyeon_excuse, forced_violation_day2_after_yuna, forced_violation_day2_yuna_apologize, forced_violation_day2_yuna_excuse, forced_violation_day2_after_dain, forced_violation_day2_dain_apologize, forced_violation_day2_dain_excuse, forced_violation_day2_after_teacher, forced_violation_day2_teacher_apologize, forced_violation_day2_teacher_excuse, forced_violation_day2_after_nurse, forced_violation_day2_nurse_apologize, forced_violation_day2_nurse_excuse, forced_violation_day2_resume
- Day 3: morning3_yuna_gate_warm_1, morning3_yuna_gate_warm_2, morning3_yuna_gate_warm_3, morning3_yuna_gate_warm_4, morning3_yuna_gate_cold_1, morning3_yuna_gate_cold_2, morning3_dain_gate_warm_1, morning3_dain_gate_warm_2, morning3_dain_gate_warm_3, hidden_homeroom_d3_1, hidden_homeroom_d3_3, hidden_homeroom_d3_3_b, hidden_homeroom_d3_4, hidden_homeroom_d3_4_b, hidden_homeroom_d3_4_c, hidden_homeroom_d3_4_d, hidden_homeroom_d3_4_e, hidden_homeroom_d3_4_f, hidden_homeroom_d3_4_g, hidden_homeroom_d3_4_h, hidden_homeroom_d3_choice, hidden_homeroom_d3_reveal_1, hidden_homeroom_d3_reveal_1_b, hidden_homeroom_d3_reveal_1_c, hidden_homeroom_d3_reveal_1_d, hidden_homeroom_d3_reveal_1_e, hidden_homeroom_d3_reveal_1_f, hidden_homeroom_d3_reveal_2, hidden_homeroom_d3_reveal_2_b, hidden_homeroom_d3_reveal_2_c, hidden_homeroom_d3_reveal_2_d, hidden_homeroom_d3_reveal_2_e, hidden_homeroom_d3_reveal_2_f, hidden_homeroom_d3_reveal_3, hidden_homeroom_d3_reveal_3_b, hidden_homeroom_d3_reveal_3_c, hidden_homeroom_d3_reveal_4, hidden_homeroom_d3_reveal_4_b, hidden_homeroom_d3_reveal_4_c, hidden_homeroom_d3_reveal_4_d, hidden_homeroom_d3_reveal_4_e, hidden_homeroom_d3_reveal_4_f, hidden_homeroom_d3_reveal_4_g, hidden_homeroom_d3_reveal_choice, hidden_homeroom_d3_reveal_choice_trap, hidden_homeroom_d3_reveal_choice_a, hidden_homeroom_d3_reveal_choice_b, hidden_homeroom_d3_reveal_5, hidden_homeroom_d3_reveal_6, hidden_homeroom_d3_reveal_6_b, hidden_homeroom_d3_reveal_6_c, hidden_homeroom_d3_reveal_6_d, hidden_homeroom_d3_reveal_6_e, hidden_homeroom_d3_reveal_6_f, hidden_homeroom_d3_reveal_6_g, hidden_homeroom_d3_hide_1, hidden_homeroom_d3_end, hidden_homeroom_d3_freetalk, hidden_nurse_d3_check, hidden_nurse_d3_1, hidden_nurse_d3_1_b, hidden_nurse_d3_1_c, hidden_nurse_d3_1_d, hidden_nurse_d3_1_e, hidden_nurse_d3_2, hidden_nurse_d3_2_b, hidden_nurse_d3_2_c, hidden_nurse_d3_2_d, hidden_nurse_d3_2_e, hidden_nurse_d3_3, hidden_nurse_d3_3_b, hidden_nurse_d3_3_c, hidden_nurse_d3_3_d, hidden_nurse_d3_4, hidden_nurse_d3_5_b, hidden_nurse_d3_5_c, hidden_nurse_d3_5_d, hidden_nurse_d3_5_e, hidden_nurse_d3_5_f, hidden_nurse_d3_5_g, hidden_nurse_d3_5_h, hidden_nurse_d3_5_i, hidden_nurse_d3_5_j, hidden_nurse_d3_5_k, hidden_nurse_d3_5_l, hidden_nurse_d3_5_m, hidden_nurse_d3_5_n, hidden_nurse_d3_5_o, hidden_nurse_d3_5_p, hidden_nurse_d3_5_q, hidden_nurse_d3_choice1, hidden_nurse_d3_choice1_a, hidden_nurse_d3_choice1_b, hidden_nurse_d3_choice1_c, hidden_nurse_d3_6, hidden_nurse_d3_6_b, hidden_nurse_d3_6_c, hidden_nurse_d3_6_d, hidden_nurse_d3_6_e, hidden_nurse_d3_6_f, hidden_nurse_d3_7, hidden_nurse_d3_7_b, hidden_nurse_d3_8, hidden_nurse_d3_8_b, hidden_nurse_d3_8_c, hidden_nurse_d3_8_d, hidden_nurse_d3_8_e, hidden_nurse_d3_8_f, hidden_nurse_d3_8_g, hidden_nurse_d3_8_h, hidden_nurse_d3_choice2, hidden_nurse_d3_choice2_a, hidden_nurse_d3_choice2_b, hidden_nurse_d3_choice2_c, hidden_nurse_d3_9, hidden_nurse_d3_9_b, hidden_nurse_d3_9_c, hidden_nurse_d3_9_d, hidden_nurse_d3_9_e, hidden_nurse_d3_9_f, hidden_nurse_d3_11, hidden_nurse_d3_freetalk, morning3_date_yuna_decline, morning3_set_multiple, hidden_homeroom_d3_low, hidden_nurse_d3_low, lunch3_dain_skin_1, lunch3_dain_skin_3, lunch3_yuna_skin_1, lunch3_yuna_skin_2, lunch3_yuna_skin_3, lunch3_expose_1, lunch3_expose_2, lunch3_expose_3, lunch3_expose_4, lunch3_expose_5, lunch3_expose_6, lunch3_expose_7, lunch3_expose_7_b, lunch3_expose_9, lunch3_expose_10, lunch3_expose_11, lunch3_expose_12, lunch3_expose_14, lunch3_expose_15, lunch3_expose_choice, lunch3_expose_honest_1, lunch3_expose_honest_2, lunch3_expose_honest_3, lunch3_expose_honest_4, lunch3_expose_honest_4_b, lunch3_expose_honest_5, lunch3_expose_honest_6, lunch3_expose_honest_7, lunch3_expose_excuse_1, lunch3_expose_excuse_2, lunch3_expose_excuse_2_b, lunch3_expose_excuse_3, lunch3_expose_excuse_4, lunch3_expose_run_1, lunch3_expose_run_2, lunch3_harem_1, after3_multi_choice, after3_confront_1, after3_confront_2, after3_confront_3, after3_confront_4, after3_confront_5, after3_confront_5_b, after3_confront_5_c, after3_confront_6, after3_confront_choice, after3_confront_admit, after3_confront_admit_b, after3_confront_admit_2, after3_confront_admit_3, after3_confront_admit_4, after3_confront_admit_4_b, after3_confront_admit_5, after3_confront_admit_6, after3_confront_excuse, after3_confront_excuse_b, after3_confront_excuse_2, after3_confront_excuse_2_b, after3_confront_lie_b, after3_confront_lie, after3_confront_lie_2, after3_confront_lie_2_b, after3_confront_end, after3_group_teacher_companion, after3_group_nurse_companion, after3_group_return, night3_cheat_msg_1, night3_cheat_msg_2, night3_cheat_msg_3, night3_cheat_msg_3_b, night3_cheat_msg_4, night3_cheat_msg_4_b, night3_cheat_msg_5, night3_cheat_msg_6, night3_cheat_msg_dain_1, night3_cheat_msg_7, night3_nightmare_1, night3_nightmare_2_b, night3_nightmare_3, night3_nightmare_3_b, night3_nightmare_4, night3_nightmare_4_b, night3_nightmare_5, night3_nightmare_6, night3_nightmare_choice, night3_nightmare_seo, night3_nightmare_yuna, night3_nightmare_dain, night3_nightmare_end, night3_nightmare_end_3, night3_cheat_reflect_2, night3_cheat_reflect_3_b, night3_cheat_reflect_3_c, night3_cheat_reflect_3_d, night3_cheat_reflect_3_e, night3_cheat_reflect_5, night3_nightmare_end_4, forced_violation_day3_after_seoyeon, forced_violation_day3_seoyeon_apologize, forced_violation_day3_seoyeon_excuse, forced_violation_day3_after_yuna, forced_violation_day3_yuna_apologize, forced_violation_day3_yuna_excuse, forced_violation_day3_after_dain, forced_violation_day3_dain_apologize, forced_violation_day3_dain_excuse, forced_violation_day3_after_teacher, forced_violation_day3_teacher_apologize, forced_violation_day3_teacher_excuse, forced_violation_day3_after_nurse, forced_violation_day3_nurse_apologize, forced_violation_day3_nurse_excuse, forced_violation_day3_after_haeun, forced_violation_day3_haeun_apologize, forced_violation_day3_haeun_excuse, forced_violation_day3_resume
- Day 4: morning4_nightmare_seo, morning4_nightmare_yuna, morning4_nightmare_dain, morning4_nightmare_after, minsu_cheer_4_c, minsu_cheer_4_d, minsu_cheer_4_e, morning4_fallback_msg, morning4_manuscript_check, hidden_homeroom_d4_skip, hidden_homeroom_d4_1, hidden_homeroom_d4_1_b, hidden_homeroom_d4_2, hidden_homeroom_d4_3, hidden_homeroom_d4_3_b, hidden_homeroom_d4_3_c, hidden_homeroom_d4_3_d, hidden_homeroom_d4_3_e, hidden_homeroom_d4_4, hidden_homeroom_d4_4_b, hidden_homeroom_d4_4_c, hidden_homeroom_d4_4_d, hidden_homeroom_d4_4_e, hidden_homeroom_d4_5, hidden_homeroom_d4_5_b, hidden_homeroom_d4_5_c, hidden_homeroom_d4_5_d, hidden_homeroom_d4_choice, hidden_homeroom_d4_choice_trap, hidden_homeroom_d4_cafe_1, hidden_homeroom_d4_cafe_1_b, hidden_homeroom_d4_cafe_1_c, hidden_homeroom_d4_cafe_1_d, hidden_homeroom_d4_cafe_1_e, hidden_homeroom_d4_cafe_1_f, hidden_homeroom_d4_cafe_2, hidden_homeroom_d4_cafe_2_b, hidden_homeroom_d4_cafe_2_c, hidden_homeroom_d4_cafe_2_d, hidden_homeroom_d4_cafe_2_e, hidden_homeroom_d4_cafe_3, hidden_homeroom_d4_cafe_choice, hidden_homeroom_d4_cafe_choice_a, hidden_homeroom_d4_cafe_choice_b, hidden_homeroom_d4_cafe_trap, hidden_homeroom_d4_cafe_4, hidden_homeroom_d4_cafe_4_b, hidden_homeroom_d4_cafe_5, hidden_homeroom_d4_cafe_5_b, hidden_homeroom_d4_cafe_5_c, hidden_homeroom_d4_cafe_5_d, hidden_homeroom_d4_cafe_5_e, hidden_homeroom_d4_cafe_5_f, hidden_homeroom_d4_cafe_5_g, hidden_homeroom_d4_cafe_5_h, hidden_homeroom_d4_cafe_6, hidden_homeroom_d4_cafe_6_b, hidden_homeroom_d4_freetalk, hidden_homeroom_d4_decline, hidden_homeroom_d4_decline_b, hidden_nurse_d4_morning_1, hidden_nurse_d4_morning_3, hidden_nurse_d4_morning_4, hidden_nurse_d4_morning_5, hidden_nurse_d4_morning_6, hidden_nurse_d4_morning_7, hidden_nurse_d4_morning_8, hidden_nurse_d4_morning_9, hidden_nurse_d4_morning_10, hidden_nurse_d4_morning_11, hidden_nurse_d4_morning_choice, hidden_nurse_d4_morning_choice_trap, hidden_nurse_d4_morning_choice_a, hidden_nurse_d4_morning_choice_b, hidden_nurse_d4_morning_12, hidden_nurse_d4_morning_13, hidden_nurse_d4_morning_freetalk, hidden_nurse_d4_1, hidden_nurse_d4_1_b, hidden_nurse_d4_2, hidden_nurse_d4_2_b, hidden_nurse_d4_2_c, hidden_nurse_d4_2_d, hidden_nurse_d4_2_e, hidden_nurse_d4_2_f, hidden_nurse_d4_2_g, hidden_nurse_d4_2_h, hidden_nurse_d4_3, hidden_nurse_d4_4, hidden_nurse_d4_4_b, hidden_nurse_d4_4_c, hidden_nurse_d4_4_d, hidden_nurse_d4_4_e, hidden_nurse_d4_4_f, hidden_nurse_d4_4_g, hidden_nurse_d4_4_h, hidden_nurse_d4_4_i, hidden_nurse_d4_4_j, hidden_nurse_d4_4_k, hidden_nurse_d4_5, hidden_nurse_d4_name_choice, hidden_nurse_d4_name_choice_a, hidden_nurse_d4_name_choice_b, hidden_nurse_d4_name_trap, hidden_nurse_d4_6, hidden_nurse_d4_6_b, hidden_nurse_d4_6_c, hidden_nurse_d4_6_d, hidden_nurse_d4_choice, hidden_nurse_d4_meal_walk, hidden_nurse_d4_meal_1, hidden_nurse_d4_meal_1_b, hidden_nurse_d4_meal_1_c, hidden_nurse_d4_meal_1b, hidden_nurse_d4_meal_2, hidden_nurse_d4_meal_2_b, hidden_nurse_d4_meal_3, hidden_nurse_d4_meal_3_b, hidden_nurse_d4_meal_3_c, hidden_nurse_d4_meal_3_d, hidden_nurse_d4_meal_3_e, hidden_nurse_d4_meal_4, hidden_nurse_d4_meal_4_b, hidden_nurse_d4_pass, hidden_nurse_d4_trap, hidden_nurse_d4_freetalk, hidden_homeroom_d4_low, hidden_nurse_d4_low, confess_seo_3b, confess_yuna_2, confess_yuna_3, confess_yuna_3b, confess_yuna_4, confess_yuna_5, confess_yuna_choice, confess_yuna_yes_1, confess_yuna_yes_2, confess_yuna_yes_3, confess_yuna_yes_3_b, confess_yuna_yes_4, confess_yuna_yes_5, confess_yuna_yes_6, confess_yuna_yes_6_b, confess_yuna_yes_7, confess_yuna_yes_8, confess_yuna_yes_8_b, confess_yuna_yes_8_c, confess_yuna_yes_9, confess_yuna_yes_9_b, confess_yuna_no_1, confess_yuna_no_2, confess_yuna_no_3, confess_yuna_no_4, confess_yuna_no_4_b, day4_adult_teacher_overall_rank, day4_adult_nurse_flag_check, day4_adult_nurse_overall_rank, day4_adult_teacher_student_rank, day4_adult_nurse_student_rank, day4_teacher_seoyeon_counteroffer, day4_teacher_dain_counteroffer, day4_teacher_yuna_counteroffer, day4_nurse_seoyeon_counteroffer, day4_nurse_dain_counteroffer, day4_nurse_yuna_counteroffer, day4_adult_counteroffer_accept_seoyeon, day4_adult_counteroffer_accept_dain, day4_adult_counteroffer_accept_yuna, day4_adult_night_regret_target_branch, day4_adult_night_regret_teacher, day4_adult_night_regret_nurse, wall_seo_pre_high_1, wall_seo_pre_high_2, wall_seo_skin70_1, wall_seo_skin70_3, wall_seo_glimpse_1, wall_seo_glimpse_2, wall_seo_glimpse_4, wall_seo_yuna_tempt_1, wall_seo_yuna_tempt_2, wall_seo_yuna_tempt_accept, wall_dain_pre_high_1, wall_dain_pre_high_2, wall_dain_skin70_1, wall_dain_skin70_2, wall_dain_skin70_3, wall_dain_skin60_1, wall_dain_skin60_2, wall_dain_glimpse_1, wall_dain_glimpse_2, wall_dain_glimpse_4, wall_dain_glimpse_4_b, wall_dain_glimpse_4_c, wall_dain_seo_tempt_1, wall_dain_seo_tempt_2, wall_dain_seo_tempt_accept, wall_yuna_1, wall_yuna_pre_high_1, wall_yuna_pre_high_2, wall_yuna_pre_low_1, wall_yuna_pre_low_2, wall_yuna_2, wall_yuna_3, wall_yuna_4, wall_yuna_6, wall_yuna_7, wall_yuna_8, wall_yuna_9, wall_yuna_9_b, wall_yuna_10, wall_yuna_11, wall_yuna_12, wall_yuna_13, wall_yuna_14, wall_yuna_14_b, wall_yuna_14_c, wall_yuna_14_d, wall_yuna_14_e, wall_yuna_14_f, wall_yuna_14_g, wall_yuna_14_h, wall_yuna_15, wall_yuna_16, wall_yuna_16_b, wall_yuna_choice, wall_yuna_moved_1, wall_yuna_moved_2, wall_yuna_moved_3, wall_yuna_moved_4, wall_yuna_moved_5, wall_yuna_moved_5_b, wall_yuna_skin_check, wall_yuna_skin70_1, wall_yuna_skin70_2, wall_yuna_skin70_3, wall_yuna_skin60_1, wall_yuna_skin60_2, wall_yuna_sub_1, wall_yuna_sub_2, wall_yuna_reject_1, wall_yuna_reject_1_b, wall_yuna_reject_2, wall_yuna_reject_3, wall_yuna_freetalk, wall_yuna_rival_rank, wall_yuna_glimpse_1, wall_yuna_glimpse_2, wall_yuna_glimpse_3_b, wall_yuna_glimpse_4, wall_yuna_dain_tempt_1, wall_yuna_dain_tempt_2, wall_yuna_dain_tempt_accept, day4_night_regret_msg, day4_night_reflect, night_homeroom_msg_1, night_homeroom_msg_2, night_homeroom_msg_3, day4_hidden_msg_after_homeroom, night_nurse_msg_1, night_nurse_msg_2, night_nurse_msg_3, night_nurse_msg_4, forced_violation_day4_after_seoyeon, forced_violation_day4_seoyeon_apologize, forced_violation_day4_seoyeon_excuse, forced_violation_day4_after_yuna, forced_violation_day4_yuna_apologize, forced_violation_day4_yuna_excuse, forced_violation_day4_after_dain, forced_violation_day4_dain_apologize, forced_violation_day4_dain_excuse, forced_violation_day4_after_teacher, forced_violation_day4_teacher_apologize, forced_violation_day4_teacher_excuse, forced_violation_day4_after_nurse, forced_violation_day4_nurse_apologize, forced_violation_day4_nurse_excuse, forced_violation_day4_resume
- Day 5: morning5_temptation_counteroffer_branch, morning5_caught_teacher_counteroffer, morning5_caught_nurse_counteroffer, morning5_caught_teacher_honest, morning5_caught_teacher_lie, morning5_caught_nurse_honest, morning5_caught_nurse_lie, morning5_caught_by_seoyeon_route, morning5_caught_by_yuna_route, morning5_caught_by_dain_route, morning5_caught_seoyeon_by_dain, morning5_caught_seoyeon_by_yuna, morning5_caught_dain_by_seoyeon, morning5_caught_dain_by_yuna, morning5_caught_yuna_by_seoyeon, morning5_caught_yuna_by_dain, morning5_caught_seoyeon_honest, morning5_caught_seoyeon_lie, morning5_caught_dain_honest, morning5_caught_dain_lie, morning5_caught_yuna_honest, morning5_caught_yuna_lie, morning5_counteroffer_group_talk, morning5_after_counteroffer, morning5_after_counteroffer_hidden_check, hidden_nurse_d5_after_co_check, morning5_mood_high, morning5_committed_yuna, hidden_homeroom_d5_1, hidden_homeroom_d5_1_b, hidden_homeroom_d5_1_c, hidden_homeroom_d5_1_d, hidden_homeroom_d5_1_e, hidden_homeroom_d5_2, hidden_homeroom_d5_3, hidden_homeroom_d5_4, hidden_homeroom_d5_5, hidden_homeroom_d5_choice, hidden_homeroom_d5_praise_trap_1, hidden_homeroom_d5_praise_trap_2, hidden_homeroom_d5_praise_trap_3, hidden_homeroom_d5_praise_trap_4, hidden_homeroom_d5_praise_trap_5, hidden_homeroom_d5_praise_trap_6, hidden_homeroom_d5_praise_trap_7, hidden_homeroom_d5_praise_trap_8, hidden_homeroom_d5_praise_trap_9, hidden_homeroom_d5_praise_trap_10, hidden_homeroom_d5_praise_trap_11, hidden_homeroom_d5_praise_trap_12, hidden_homeroom_d5_correct_1, hidden_homeroom_d5_correct_2, hidden_homeroom_d5_correct_3, hidden_homeroom_d5_correct_4, hidden_homeroom_d5_correct_5, hidden_homeroom_d5_correct_6, hidden_homeroom_d5_correct_7, hidden_homeroom_d5_correct_8, hidden_homeroom_d5_correct_9, hidden_homeroom_d5_correct_10, hidden_homeroom_d5_correct_11, hidden_homeroom_d5_correct_12, hidden_homeroom_d5_correct_13, hidden_homeroom_d5_correct_14, hidden_homeroom_d5_6, hidden_homeroom_d5_6_b, hidden_homeroom_d5_6_c, hidden_homeroom_d5_6_d, hidden_homeroom_d5_6_e, hidden_homeroom_d5_6_f, hidden_homeroom_d5_6_g, hidden_homeroom_d5_6_h, hidden_homeroom_d5_6_i, hidden_homeroom_d5_6_j, hidden_homeroom_d5_6_k, hidden_homeroom_d5_6_l, hidden_homeroom_d5_6_m, hidden_homeroom_d5_6_n, hidden_homeroom_d5_6_o, hidden_homeroom_d5_6_p, hidden_homeroom_d5_6_q, hidden_homeroom_d5_6_r, hidden_homeroom_d5_6_s, hidden_homeroom_d5_6_t, hidden_homeroom_d5_7, hidden_homeroom_d5_7_b, hidden_homeroom_d5_7_c, hidden_homeroom_d5_8, hidden_homeroom_d5_freetalk, hidden_nurse_d5_1, hidden_nurse_d5_1_b, hidden_nurse_d5_1_c, hidden_nurse_d5_1_d, hidden_nurse_d5_1_e, hidden_nurse_d5_1_f, hidden_nurse_d5_2_b, hidden_nurse_d5_2_c, hidden_nurse_d5_3, hidden_nurse_d5_3_b, hidden_nurse_d5_3_c, hidden_nurse_d5_3_d, hidden_nurse_d5_3_e, hidden_nurse_d5_3_f, hidden_nurse_d5_3_g, hidden_nurse_d5_3_h, hidden_nurse_d5_3_i, hidden_nurse_d5_4, hidden_nurse_d5_4_b, hidden_nurse_d5_4_c, hidden_nurse_d5_4_d, hidden_nurse_d5_5, hidden_nurse_d5_choice, hidden_nurse_d5_choice_a, hidden_nurse_d5_choice_a_b, hidden_nurse_d5_choice_b, hidden_nurse_d5_choice_trap, hidden_nurse_d5_choice_b_b, hidden_nurse_d5_choice_b_c, hidden_nurse_d5_choice_b_d, hidden_nurse_d5_choice_b_e, hidden_nurse_d5_choice_b_f, hidden_nurse_d5_choice_b_g, hidden_nurse_d5_6, hidden_nurse_d5_6_b, hidden_nurse_d5_6_c, hidden_nurse_d5_flag_check, hidden_nurse_d5_7, hidden_nurse_d5_7_both, hidden_nurse_d5_freetalk, hidden_homeroom_d5_low, hidden_nurse_d5_low, tour_co_branch, tour_co_event_1, tour_co_event_2, tour_co_seo_1, tour_co_seo_2, tour_co_seo_3, tour_co_yuna_1, tour_co_yuna_2, tour_co_yuna_3, tour_co_dain_1, tour_co_dain_2, tour_co_dain_3, tour_yuna_1, tour_yuna_1b, tour_yuna_2, tour_yuna_3, tour_yuna_4, tour_yuna_5, tour_yuna_6, tour_yuna_7, tour_yuna_8, tour_yuna_9, tour_yuna_10, tour_yuna_11, tour_yuna_freetalk, tour_yuna_end, tour_yuna_end_2, after5_co_start, after5_co_abandoned_branch, after5_co_seo_1, after5_co_seo_2, after5_co_yuna_1, after5_co_yuna_2, after5_co_dain_1, after5_co_dain_2, after5_co_teacher_1, after5_co_teacher_2, after5_co_nurse_1, after5_co_nurse_2, after5_co_tempter_branch, after5_co_tempter_seo_1, after5_co_tempter_seo_2, after5_co_tempter_yuna_1, after5_co_tempter_yuna_2, after5_co_tempter_dain_1, after5_co_tempter_dain_2, after5_farewell_seo_2, after5_farewell_seo_3, after5_farewell_seo_4, after5_farewell_seo_5, after5_farewell_seo_6, after5_farewell_seo_6_b, after5_farewell_seo_7, after5_farewell_yuna_2, after5_farewell_yuna_3, after5_farewell_yuna_4, after5_farewell_yuna_5, after5_farewell_yuna_5b, after5_farewell_dain_2, after5_farewell_dain_3, after5_farewell_dain_4, after5_farewell_dain_4_b, after5_farewell_dain_4_c, after5_farewell_dain_4_d, after5_farewell_dain_5, after5_farewell_dain_5b, after5_hidden_farewell_1, after5_hidden_farewell_3, after5_hidden_farewell_3b, after5_hidden_route_choice_check, after5_hidden_route_choice, after5_last_chance_yuna_1, after5_last_chance_yuna_2, after5_last_chance_yuna_3, after5_last_chance_yuna_4, after5_last_chance_yuna_5, after5_last_chance_yuna_6, after5_last_chance_yuna_7, after5_confess_react_yuna, after5_confess_react_yuna_call, after5_confess_react_yuna_b, after5_confess_react_yuna_c, after5_confess_react_yuna_d, after5_confess_react_yuna_e, after5_confess_react_yuna_f, after5_confess_react_yuna_g, after5_confess_react_yuna_h, after5_confess_react_yuna_i, after5_set_harem, after5_harem_commit, after5_harem_walk_1, after5_harem_walk_2, ending_counteroffer_bitter, co_bitter_seo_1, co_bitter_seo_2, co_bitter_seo_3, co_bitter_yuna_1, co_bitter_yuna_2, co_bitter_yuna_3, co_bitter_dain_1, co_bitter_dain_2, co_bitter_dain_3, co_bitter_teacher_1, co_bitter_teacher_2, co_bitter_teacher_3, co_bitter_nurse_1, co_bitter_nurse_2, co_bitter_nurse_3, friend_4, day5_ending_mayhem, mayhem_1, mayhem_2, mayhem_3, mayhem_4, mayhem_5, mayhem_6, mayhem_7, mayhem_8, day5_ending_harem, harem_1, harem_1_b, harem_2, harem_3, harem_4, harem_5, harem_6, harem_7, harem_8, hidden_dual_route_1, hidden_dual_route_choice, hidden_perfect_homeroom_check, hidden_perfect_homeroom_1, hidden_perfect_homeroom_1b, hidden_perfect_homeroom_2, hidden_perfect_homeroom_2b, hidden_perfect_homeroom_2c, hidden_perfect_homeroom_3, hidden_perfect_homeroom_3b, hidden_perfect_homeroom_3c, hidden_perfect_homeroom_3e, hidden_perfect_homeroom_3f, hidden_perfect_homeroom_3g, hidden_perfect_homeroom_4b, hidden_perfect_homeroom_4c, hidden_perfect_homeroom_4d, hidden_perfect_homeroom_4e, hidden_perfect_homeroom_4f, hidden_perfect_homeroom_4g, hidden_perfect_homeroom_ending_title, hidden_perfect_homeroom_5, hidden_perfect_homeroom_ep1, hidden_perfect_homeroom_ep2, hidden_perfect_homeroom_ep3, hidden_perfect_homeroom_ep4, hidden_true_homeroom_1, hidden_true_homeroom_2, hidden_true_homeroom_2_b, hidden_true_homeroom_3, hidden_true_homeroom_3_b, hidden_true_homeroom_3_c, hidden_true_homeroom_4, hidden_true_homeroom_4_b, hidden_true_homeroom_4_c, hidden_true_homeroom_4_d, hidden_true_homeroom_4_e, hidden_true_homeroom_4_f, hidden_true_homeroom_4_g, hidden_true_homeroom_4_h, hidden_true_homeroom_5, hidden_true_homeroom_5_b, hidden_true_homeroom_5_c, hidden_true_homeroom_6, hidden_true_homeroom_6_b, hidden_true_homeroom_7, hidden_true_homeroom_7_b, hidden_true_homeroom_7_c, hidden_true_homeroom_7_d, hidden_true_homeroom_8, hidden_true_homeroom_ending_title, hidden_good_homeroom_1, hidden_good_homeroom_2, hidden_good_homeroom_3, hidden_good_homeroom_4, hidden_good_homeroom_ending_title, hidden_bitter_homeroom_1, hidden_bitter_homeroom_2, hidden_bitter_homeroom_3, hidden_bitter_homeroom_4, hidden_bitter_homeroom_5, hidden_bitter_homeroom_6, hidden_bitter_homeroom_ending_title, hidden_perfect_nurse_check, hidden_perfect_nurse_1, hidden_perfect_nurse_2, hidden_perfect_nurse_3, hidden_perfect_nurse_3b, hidden_perfect_nurse_4, hidden_perfect_nurse_4b, hidden_perfect_nurse_5, hidden_perfect_nurse_5b, hidden_perfect_nurse_ep1, hidden_perfect_nurse_ending_title, hidden_perfect_nurse_ep2, hidden_perfect_nurse_ep3, hidden_perfect_nurse_ep4, hidden_true_nurse_1, hidden_true_nurse_2, hidden_true_nurse_2_b, hidden_true_nurse_2_c, hidden_true_nurse_2_d, hidden_true_nurse_3, hidden_true_nurse_3_b, hidden_true_nurse_4, hidden_true_nurse_5, hidden_true_nurse_5_b, hidden_true_nurse_5_c, hidden_true_nurse_5_d, hidden_true_nurse_5_e, hidden_true_nurse_5_f, hidden_true_nurse_6, hidden_true_nurse_7, hidden_true_nurse_7_b, hidden_true_nurse_7_c, hidden_true_nurse_7_d, hidden_true_nurse_8, hidden_true_nurse_8_b, hidden_true_nurse_8_c, hidden_true_nurse_8_d, hidden_true_nurse_8_e, hidden_true_nurse_8_f, hidden_true_nurse_8_g, hidden_true_nurse_8_h, hidden_true_nurse_ending_title, hidden_good_nurse_1, hidden_good_nurse_2, hidden_good_nurse_2_b, hidden_good_nurse_2_c, hidden_good_nurse_2_d, hidden_good_nurse_3, hidden_good_nurse_3_b, hidden_good_nurse_4, hidden_good_nurse_ending_title, hidden_bitter_nurse_1, hidden_bitter_nurse_2, hidden_bitter_nurse_3, hidden_bitter_nurse_4, hidden_bitter_nurse_5, hidden_bitter_nurse_6, hidden_bitter_nurse_7, hidden_bitter_nurse_ending_title, perfect_seo_1, perfect_seo_1_b, perfect_seo_2, perfect_seo_3, perfect_seo_4, perfect_seo_5, perfect_seo_5_b, perfect_epilogue_1_seo, perfect_epilogue_bridge_seo, perfect_epilogue_2_seo, perfect_epilogue_3_seo, perfect_epilogue_4_seo, ending_aff_check_yuna, perfect_yuna_1, perfect_yuna_2, perfect_yuna_3, perfect_yuna_4, perfect_yuna_5, perfect_epilogue_1_yuna, perfect_epilogue_bridge_yuna, perfect_epilogue_2_yuna, perfect_epilogue_3_yuna, perfect_epilogue_4_yuna, bitter_yuna_1, bitter_yuna_2, bitter_yuna_2_library, bitter_yuna_2_book, bitter_yuna_3, true_yuna_1, true_yuna_2, true_yuna_2_b, true_yuna_2_c, true_yuna_2_d, true_yuna_3, true_yuna_4, true_yuna_5, true_yuna_5_b, true_yuna_6, true_yuna_6b, true_yuna_7, true_yuna_bridge, true_epilogue_1_yuna, perfect_dain_1, perfect_dain_2, perfect_dain_2b, perfect_dain_3, perfect_dain_3b, perfect_dain_4, perfect_dain_5, perfect_epilogue_1_dain, perfect_epilogue_1b_dain, perfect_epilogue_1c_dain, perfect_epilogue_bridge_dain, perfect_epilogue_2_dain, perfect_epilogue_3_dain, perfect_epilogue_4_dain, true_epilogue_4_yuna, good_1_yuna, good_1_yuna_b, good_1_yuna_b_b, good_2_yuna, good_3_yuna, good_4_yuna, good_5_yuna, good_epilogue_1_yuna, good_epilogue_2_yuna, good_epilogue_3_yuna, good_5_cg_yuna, day5_ending_alone, alone_1, alone_2, alone_2_b, alone_4, alone_5, date_choice_perfect_seo, date_perfect_seo_roof_1, date_perfect_seo_roof_2, date_perfect_seo_roof_3, date_perfect_seo_cafe_1, date_perfect_seo_cafe_2, date_perfect_seo_cafe_3, date_choice_perfect_yuna, date_perfect_yuna_book_1, date_perfect_yuna_book_2, date_perfect_yuna_book_3, date_perfect_yuna_book_4, date_perfect_yuna_roof_1, date_perfect_yuna_roof_2, date_perfect_yuna_roof_3, date_choice_perfect_dain, date_perfect_dain_gym_1, date_perfect_dain_gym_2, date_perfect_dain_gym_3, date_perfect_dain_booth_1, date_perfect_dain_booth_2, date_perfect_dain_booth_3, date_choice_perfect_teacher, date_perfect_teacher_cafe_1, date_perfect_teacher_cafe_2, date_perfect_teacher_cafe_3, date_perfect_teacher_museum_1, date_perfect_teacher_museum_2, date_perfect_teacher_museum_3, date_choice_perfect_nurse, date_perfect_nurse_home_1, date_perfect_nurse_home_2, date_perfect_nurse_home_3, date_perfect_nurse_park_1, date_perfect_nurse_park_2, date_perfect_nurse_park_3, date_choice_true_yuna, date_true_yuna_book_1, date_true_yuna_book_2, date_true_yuna_roof_1, date_true_yuna_roof_2, date_choice_true_teacher, date_true_teacher_1, date_true_teacher_2, date_true_teacher_alt_1, date_true_teacher_alt_2, date_choice_true_nurse, date_true_nurse_1, date_true_nurse_2, date_true_nurse_alt_1, date_true_nurse_alt_2, day5_seo_ending_freetalk_perfect, day5_yuna_ending_freetalk_intro, day5_yuna_ending_freetalk_router, day5_yuna_ending_freetalk_perfect, day5_yuna_ending_freetalk_true_love, day5_yuna_ending_freetalk_good, day5_yuna_ending_freetalk_bittersweet, day5_yuna_ending_freetalk_late_good, day5_dain_ending_freetalk_perfect, day5_teacher_ending_freetalk_intro, day5_teacher_ending_freetalk_router, day5_teacher_ending_freetalk_perfect, day5_teacher_ending_freetalk_true_love, day5_teacher_ending_freetalk_good, day5_teacher_ending_freetalk_bittersweet, day5_nurse_ending_freetalk_intro, day5_nurse_ending_freetalk_router, day5_nurse_ending_freetalk_perfect, day5_nurse_ending_freetalk_true_love, day5_nurse_ending_freetalk_good, day5_nurse_ending_freetalk_bittersweet, forced_violation_day5_after_seoyeon, forced_violation_day5_seoyeon_apologize, forced_violation_day5_seoyeon_excuse, forced_violation_day5_after_yuna, forced_violation_day5_yuna_apologize, forced_violation_day5_yuna_excuse, forced_violation_day5_after_dain, forced_violation_day5_dain_apologize, forced_violation_day5_dain_excuse, forced_violation_day5_after_teacher, forced_violation_day5_teacher_apologize, forced_violation_day5_teacher_excuse, forced_violation_day5_after_nurse, forced_violation_day5_nurse_apologize, forced_violation_day5_nurse_excuse, forced_violation_day5_resume
