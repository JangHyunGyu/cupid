# Cupid 플레이테스트 리포트

> 결정론적 시드: `cupid-full-audit`

## 요약

| 항목 | 값 |
|------|----|
| 탐색 경로 | 9996개 |
| 완료 경로 | 4996개 |
| 엔딩 종류 | 9종 |
| 전체 씬 | 3016개 |

## 엔딩 도달 통계

| 엔딩 | 도달 경로 수 |
|------|-------------|
| `mayhem_8` | 2506 |
| `day5_dain_ending_freetalk_bittersweet` | 936 |
| `day5_nurse_ending_freetalk_bittersweet` | 600 |
| `friend_12` | 344 |
| `day5_yuna_ending_freetalk_bittersweet` | 188 |
| `harem_8` | 147 |
| `confess_fail_5` | 132 |
| `day5_seo_ending_freetalk_bittersweet` | 103 |
| `alone_5` | 40 |

## 경로 상세 (엔딩별 대표 경로)

### alone_5

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_seo_choice`: (선택)
- `after1_jealousy_seo_choice`: (선택)
- `after_end`: (선택)
- `after_hidden_nurse_choice`: (선택)
- `after_nurse_enter_choice`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_yuna_choice`: (선택)
- `hidden_nurse_d2_choice1`: (선택)
- `hidden_nurse_d2_choice2`: (선택)
- `after2_choice`: (선택)
- `after2_yuna_choice`: (선택)
- `night2_choice`: (선택)
- `hidden_nurse_d3_choice1`: (선택)
- `hidden_nurse_d3_choice2`: (선택)
- `morning3_date_seo_choice`: (선택)
- `morning3_date_yuna_choice`: (선택)
- `lunch3_choice`: (선택)
- `after3_choice`: (선택)
- `hidden_nurse_d4_morning_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=-1 유나=16 다인=-3 담임=0 보건=-4

<details>
<summary>씬 타임라인 (572씬)</summary>

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
| 59 | `lunch_seo_1` | 서연 | top_school | seyoun_normal |  |  | *옥상 문을 열쇠로 연다. 바람이 확 불어온다.* |
| 60 | `lunch_seo_1_aff_default` | 서연 | top_school | seyoun_normal |  |  | 앉을 거야? |
| 61 | `lunch_seo_2` | {name} | top_school | seyoun_normal |  |  | *옥상 바닥에는 흙 한 줌 보이지 않는다. 물방울 맺힌 |
| 62 | `lunch_seo_3` | 서연 | top_school | seyoun_normal |  |  | 여기가 내 영역이거든. |
| 63 | `lunch_seo_4` | {name} | top_school | seyoun_normal |  |  | 학생회장 전용 옥상이야? |
| 64 | `lunch_seo_5` | 서연 | top_school | seyoun_normal |  |  | 아무나 데려오는 데는 아닌데. *의자를 하나 펼친다.* |
| 65 | `lunch_seo_6` | {name} | top_school | seyoun_normal |  |  | 첫날부터 예외 적용? 뭔가 수상한데. |
| 66 | `lunch_seo_6_b` | 서연 | top_school | seyoun_laugh |  |  | *의자를 발끝으로 밀어 {name} 쪽에 맞춘다.* 의 |
| 67 | `lunch_seo_8` | 서연 | top_school | seyoun_laugh |  |  | *가방에서 같은 크기의 도시락통 두 개, 2인분을 포개 |
| 68 | `lunch_seo_9` | {name} | top_school | seyoun_normal |  |  | 2인분인데? |
| 69 | `lunch_seo_10` | 서연 | top_school | seyoun_normal |  |  | 학생회 일 하다 보면 밥 먹을 시간이 없어져서. 항상  |
| 70 | `lunch_seo_11` | {name} | top_school | seyoun_normal |  |  | *도시락 뚜껑을 열자 반찬이 줄 맞춰 놓여 있다. 계란 |
| 71 | `lunch_seo_13` | {name} | top_school | seyoun_normal |  |  | 직접 만든 거야? |
| 72 | `lunch_seo_14` | 서연 | top_school | seyoun_normal |  |  | 학생회장이 밥도 못 싸면 말이 안 되지. |
| 73 | `lunch_seo_15` | {name} | top_school | seyoun_normal |  |  | 그건 답이 아닌데. |
| 74 | `lunch_seo_16` | 서연 | top_school | seyoun_normal |  |  | *젓가락을 건넨다.* 먹어. 식으면 맛없어. |
| 75 | `lunch_seo_17` | 서연 | top_school | seyoun_normal |  |  | *대답 대신 밥을 먹는다. 난간 너머로 운동장과 별관  |
| 76 | `lunch_seo_19` | 서연 | top_school | seyoun_normal |  |  | 어때, 이 학교? |
| 77 | `lunch_seo_20` | {name} | top_school | seyoun_normal |  |  | 밥은 맛있어. |
| 78 | `lunch_seo_21` | 서연 | top_school | seyoun_laugh |  |  | *젓가락 끝이 도시락 칸막이를 가볍게 친다.* 학교를  |
| 79 | `lunch_seo_22` | 서연 | top_school | seyoun_laugh |  |  | *계란말이를 집어 내민다.* |
| 80 | `lunch_seo_23` | 서연 | top_school | seyoun_normal |  |  | 한 입만. |
| 81 | `lunch_seo_choice` | 서연 | top_school | seyoun_normal |  |  | *계란말이를 내밀고 있다.* |
| 82 | `lunch_seo_c1_1` | {name} | top_school | seyoun_normal |  |  | *서연의 젓가락에서 계란말이를 받아먹는다.* |
| 83 | `lunch_seo_c1_2` | {name} | top_school | seyoun_normal |  |  | 맛있다. |
| 84 | `lunch_seo_c1_2_b` | 서연 | top_school | seyoun_normal |  |  | *물병을 들어 입가를 가린다. 라벨이 손안에서 구겨진다 |
| 85 | `lunch_seo_c1_3` | 서연 | top_school | seyoun_shy |  |  | 그 정도는 해야지. |
| 86 | `lunch_seo_c1_3_b` | {name} | top_school | seyoun_shy |  |  | *반쯤 접힌 라벨이 물병에 붙어 있다. 서연은 다시 젓 |
| 87 | `lunch_seo_after` | {name} | top_school | seyoun_normal |  |  | *운동장 스피커에서 점심 종료를 알리는 예비음이 울린다 |
| 88 | `lunch_seo_after_2` | 서연 | top_school | seyoun_normal |  |  | 다음에도 점심시간 비워둬. |
| 89 | `lunch_seo_after_3` | {name} | top_school | seyoun_normal |  |  | 초대해 주는 거야? |
| 90 | `lunch_seo_after_4` | 서연 | top_school | seyoun_normal |  |  | 아니. 허가해 주는 거야. |
| 91 | `lunch_seo_after_5` | 서연 | top_school | seyoun_normal |  |  | *도시락 끈을 한 번 묶었다가 더 짧게 조인다.* |
| 92 | `lunch_seo_after_7` | {name} | top_school | seyoun_normal |  |  | *도시락 매듭이 처음보다 단단해져 있다.* |
| 93 | `lunch_seo_freetalk` | 서연 | top_school | seyoun_normal |  |  | *도시락 뚜껑을 정리하고 접이식 의자를 신발 끝으로 한 |
| 94 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *종이 울린다. 점심시간이 끝났다.* |
| 95 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에 |
| 96 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 97 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창 |
| 98 | `after_kakao_5` | {name} | school_hallway | 없음 |  | 🌅 | *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른 |
| 99 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록  |
| 100 | `after1_jealousy_seo_1` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 점심때 어디 갔어? 매점 갔는데 없더라. |
| 101 | `after1_jealousy_seo_2` | {name} | school_hallway | dain_normal |  | 🌅 | *답장창에 '서연이랑'까지 썼다가 지운다. 커서만 다시 |
| 102 | `after1_jealousy_seo_3` | 다인 | school_hallway | dain_pout |  | 🌅 | 옥상에서 내려오는 거 봤거든. 둘이서? |
| 103 | `after1_jealousy_seo_choice` | 다인 | school_hallway | dain_pout |  | 🌅 | *휴대폰을 쥔 손에 힘을 준다.* |
| 104 | `after1_jealousy_seo_honest` | {name} | school_hallway | dain_pout |  | 🌅 | 응, 학생회장이 데려갔어. 도시락도 싸 왔더라. |
| 105 | `after1_jealousy_seo_honest_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 그래? 말이라도 해주지. |
| 106 | `after1_jealousy_seo_yuna` | {name} | school_hallway | dain_normal |  | 🌅 | *가방 옆주머니에 접힌 쪽지가 걸려 있다. 유나의 필체 |
| 107 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *복도를 계속 걷는다.* |
| 108 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도를 걷는데 뒤에서 쿵쿵 발소리.* |
| 109 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 조심! |
| 110 | `after_miss_dain_3` | {name} | school_hallway | dain_normal |  | 🌅 | *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 |
| 111 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 피했다? 반사신경 괜찮은데. |
| 112 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 넌 복도에서 왜 전력질주야? |
| 113 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 늦었거든! 체육관 가야 해. 내일 보자, 전학생! |
| 114 | `after_miss_dain_6_b` | {name} | school_hallway | dain_laugh |  | 🌅 | *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을  |
| 115 | `after_miss_dain_7` | {name} | school_hallway | dain_laugh |  | 🌅 | *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아 |
| 116 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으 |
| 117 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 이거 떨어뜨렸어. |
| 118 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피 |
| 119 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌  |
| 120 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 고마워. |
| 121 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피를 책등 사이에 끼우고 돌아선다.* |
| 122 | `after_miss_yuna_4` | {name} | library_old | yuna_normal |  | 🌅 | *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 |
| 123 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든 |
| 124 | `after_hidden_nurse_intro` | {name} | school_hallway | 없음 |  | 🌅 | *복도 형광등이 흔들려 보여 벽을 짚자 손바닥에 차가운 |
| 125 | `after_hidden_nurse_choice` | {name} | school_hallway | 없음 |  | 🌅 | *아침부터 계속 사람들 틈에 있었다. 발걸음이 보건실  |
| 126 | `after_hidden_nurse_intro_b` | {name} | school_hallway | 없음 |  | 🌅 | *문 앞에 서서 한 번 숨을 고르고 손잡이에 손을 얹는 |
| 127 | `after_nurse_enter_1` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건실 문을 연다. 소독약 냄새. 흰 커튼과 침대,  |
| 128 | `after_nurse_enter_2` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 오, 환자네. |
| 129 | `after_nurse_enter_2_b` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건선생님이 진료 기록지를 한 장 꺼내 윗줄을 펜으로 |
| 130 | `after_nurse_enter_3` | {name} | nurse_room | nurse_normal |  | 🌅 | 좀 어지러워서요. |
| 131 | `after_nurse_enter_4` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 전학생이지? 첫날부터 보건실이면 꽤 빡셌나 보네. 어디 |
| 132 | `after_nurse_enter_4_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 어떻게 알았어요? |
| 133 | `after_nurse_enter_4_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 교복이 뻣뻣하잖아. 풀 냄새도 나고 벚꽃잎도 붙어 있고 |
| 134 | `after_nurse_enter_4_d` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *전자체온계를 건네고 책상 아래에서 혈압계를 꺼낸다.* |
| 135 | `after_nurse_enter_5` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *체온을 확인한 뒤 팔에 혈압계 커프를 감는다.* |
| 136 | `after_nurse_enter_6` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 열은 없고 혈압이 조금 낮네. |
| 137 | `after_nurse_enter_6_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 아침을 좀 대충 먹긴 했어요. |
| 138 | `after_nurse_enter_7` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 그럼 더 그럴 수 있지. 자, 여기 누워. 10분만 쉬 |
| 139 | `after_nurse_enter_7_b` | {name} | nurse_room | nurse_normal |  | 🌅 | *침대에 눕자 얇은 시트가 몸 아래에서 바스락거린다.* |
| 140 | `after_nurse_enter_7_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *커튼을 반쯤 친다.* 물 줄까? 아님 따뜻한 거? |
| 141 | `after_nurse_enter_7_d` | {name} | nurse_room | nurse_normal |  | 🌅 | 물이면 됩니다. |
| 142 | `after_nurse_enter_choice` | {name} | nurse_room | nurse_normal |  | 🌅 | *침대에 눕는다. 커튼 너머로 보건선생님 뒷모습이 보인 |
| 143 | `after_nurse_enter_choice_a` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 눈치 빠른 환자네. 그래도 지금은 네 상태부터 보자. |
| 144 | `after_nurse_enter_8` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 말 길게 할 필요 없어. 어지러울 때는 대답도 천천히  |
| 145 | `after_nurse_enter_8_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 이 정도면 금방 괜찮아질까요? |
| 146 | `after_nurse_enter_8_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *물컵을 건넨다.* 물 마시고 쉬면 한결 나을 거야.  |
| 147 | `after_nurse_enter_8_d` | {name} | nurse_room | nurse_normal |  | 🌅 | *물을 마시며 보건실을 둘러본다. 창가 구석에 손바닥만 |
| 148 | `after_nurse_enter_9_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 저 화분, 선생님이 키우시는 거예요? |
| 149 | `after_nurse_enter_9_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 응, 로즈마리. — 병원에서 일할 때부터 키우던 거야. |
| 150 | `after_nurse_enter_9_d` | {name} | nurse_room | nurse_normal |  | 🌅 | 병원이요? |
| 151 | `after_nurse_enter_9_e` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *서랍 손잡이를 한 번 잡았다가 놓는다.* |
| 152 | `after_nurse_enter_10` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 옛날 얘기야. 학교가 좋아. 여기선 종소리 나면 다들  |
| 153 | `after_nurse_enter_10_b` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *서랍이 닫히며 안쪽의 연두색 노트도 가려진다. 벽시계 |
| 154 | `after_nurse_enter_10_c` | {name} | nurse_room | nurse_normal |  | 🌅 | 감사합니다. 조금 나아졌어요. |
| 155 | `after_nurse_enter_11` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 또 어지러우면 와. 보건실은 늘 열려 있으니까. 대신  |
| 156 | `after_nurse_enter_11_b` | {name} | nurse_room | nurse_angry |  | 🌅 | 혼나요? |
| 157 | `after_nurse_enter_11_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *진료 기록지 위에서 펜을 한 번 굴린다.* 아픈데도  |
| 158 | `after_nurse_enter_11_d` | 보건선생님 | nurse_room | nurse_angry |  | 🌅 | *물컵을 책상에 내려놓는다. 컵 바닥이 낮게 울린다.* |
| 159 | `after_nurse_enter_11_e` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *피곤하다는 말에 목 뒤를 한 번 문지른다.* |
| 160 | `after_nurse_enter_11_f` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 아까 나 피곤해 보인다고 했지? 학생 눈에도 티가 나면 |
| 161 | `after_nurse_enter_11_g` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *진료 기록에 시간을 적고 물컵을 치운다.* |
| 162 | `after_nurse_enter_11_j` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건실 문을 열려는 순간, 뒤에서 보건선생님이 부른다 |
| 163 | `after_nurse_enter_11_k` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 아, 전학생. |
| 164 | `after_nurse_enter_11_l` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 이름이 뭐야? |
| 165 | `after_nurse_enter_11_m` | {name} | nurse_room | nurse_normal |  | 🌅 | {name}입니다. |
| 166 | `after_nurse_enter_12` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 증상 다시 오면 바로 와. 복도에서 버티지 말고. |
| 167 | `after_nurse_enter_12_b` | {name} | nurse_room | nurse_normal |  | 🌅 | *가볍게 인사하고 보건실을 나왔다. 소독약 냄새가 복도 |
| 168 | `after_nurse_freetalk` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *체온계를 케이스에 넣고 진료 기록의 시간을 확인한다. |
| 169 | `night_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄 |
| 170 | `night_start_3` | {name} | room_my | 없음 |  |  | *핸드폰이 울린다. 학교 메신저.* |
| 171 | `night_msg_seo_1` | 서연 | room_my | seyoun_normal | 0.35 |  | *오늘 옥상 어땠어?* |
| 172 | `night_msg_seo_2` | {name} | room_my | seyoun_normal | 0.35 |  | *바람이 좋더라* |
| 173 | `night_msg_seo_3` | 서연 | room_my | seyoun_normal | 0.35 |  | *다음엔 음료 정도는 준비해 놓을게* |
| 174 | `night_msg_seo_4` | 서연 | room_my | seyoun_normal | 0.35 |  | *서비스야* |
| 175 | `night_msg_seo_5` | {name} | room_my | seyoun_normal | 0.35 |  | *'서비스야'를 일부러 한 줄 띄어서 보냈다.* |
| 176 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 다른 알림이 보인다.* |
| 177 | `night_hidden_nurse_1` | {name} | room_my | nurse_normal | 0.35 |  | *학교 건강 관리 앱 알림이 떠 있다. '보건실 기록: |
| 178 | `night_hidden_nurse_2` | {name} | room_my | nurse_normal | 0.35 |  | *마지막 안내를 읽고 침대 옆 물병을 채워 둔다.* |
| 179 | `night_late_transition` | {name} | room_my | 없음 |  |  | *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시 |
| 180 | `night_late_branch` | {name} | room_my | 없음 |  |  | *화면이 밝아진다.* |
| 181 | `night_end_1` | {name} | room_my | 없음 |  |  | *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교 |
| 182 | `night_end_3` | {name} | room_my | 없음 |  |  | *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을  |
| | **Day 2** | | | | | | |
| 183 | `morning2_start` | {name} | room_school | 없음 |  |  | *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.* |
| 184 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 185 | `morning2_dain_1` | {name} | room_school | 없음 |  |  | *교실 문을 여는 순간 손바닥이 등짝을 탁 친다.* |
| 186 | `morning2_dain_2` | 다인 | room_school | dain_normal |  |  | 왔어? 좋은 아침. |
| 187 | `morning2_dain_3` | 다인 | room_school | dain_laugh |  |  | 그 정도로? 체력 관리 좀 해. |
| 188 | `morning2_dain_4` | {name} | room_school | dain_laugh |  |  | 너 아침부터 에너지 과잉 아냐? |
| 189 | `morning2_dain_5` | 다인 | room_school | dain_laugh |  |  | 이게 정상이야! 네가 부족한 거야! |
| 190 | `morning2_dain_6` | 다인 | room_school | dain_laugh |  |  | *아침 조회 전 교실에 다인의 목소리가 먼저 울린다.* |
| 191 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *자리에 앉으려는데 — 책상 위에 접힌 쪽지가 하나 놓 |
| 192 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 193 | `morning2_note_3` | {name} | room_school | yuna_normal | 0.35 |  | *어제와 같은 글씨. 아래쪽에 장소가 적혀 있다. '도 |
| 194 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가다 교실 안을 들여다본다.* 어제 잘 잤 |
| 195 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 학생회장이 교실까지 인사하러 와? |
| 196 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 순찰이야. — 출석률 확인 겸. |
| 197 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | *복도로 돌아가기 직전 클립보드 끝이 문틀에 한 번 닿 |
| 198 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연이 사라진 복도를 바라보는데 — 뒤에서 민수가 돌 |
| 199 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 이틀 만에 학생회장이 인사하러 오냐? 나 1 |
| 200 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 인기가 없는 거 아닐까. |
| 201 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 그건 맞는데 그게 중요한 게 아니잖아. |
| 202 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *다인은 서연의 뒷모습이 교실 안으로 사라질 때까지 바 |
| 203 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 회장님도 우리 전학생한테 관심 있어? 인기 많네! |
| 204 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | '우리' 전학생? |
| 205 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 내가 먼저 봤잖아. 그럼 우리 맞지. 찜한 거. |
| 206 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *쉬는 시간. 복도로 나왔다.* |
| 207 | `morning2_break_1` | {name} | school_hallway | 없음 |  |  | *서연의 클립보드 끝이 책상에 톡 닿는다. 답할 틈도  |
| 208 | `morning2_seo_dust_1` | {name} | school_hallway | seyoun_normal |  |  | *1교시가 끝난 쉬는 시간, 복도에서 서연과 스친다.  |
| 209 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 잠깐. |
| 210 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *손이 {name}의 어깨에 닿는다. 먼지를 두 번 털 |
| 211 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 옷에 뭐 묻었어. |
| 212 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | *서연의 손이 떨어진 자리에서 가방끈이 비뚤어져 있다. |
| 213 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 왜 그래? 먼지잖아. |
| 214 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *어깨의 먼지는 없어졌는데 가방끈을 두 번이나 다시 고 |
| 215 | `morning2_dain_react_2` | {name} | school_hallway | dain_angry |  |  | *서연이 클립보드를 고쳐 끼고 복도로 간다. 뒤에서 다 |
| 216 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 지금 뭐야? 어깨 만진 거야? |
| 217 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 먼지 털어준 거야. |
| 218 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 먼지가 진짜 있긴 했어? |
| 219 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | *대답 대신 가방끈을 고쳐 잡았다. 다인은 그걸 보고도 |
| 220 | `morning2_end` | {name} | school_hallway | seyoun_normal |  |  | *민수 말로는 1년 동안 먼저 인사한 적도 없다던 서연 |
| 221 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *점심. 주머니에는 유나의 쪽지가 있고 복도 끝에서는  |
| 222 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *누구와 함께할까.* |
| 223 | `lunch2_yuna_1` | {name} | yuna_hideout | yuna_normal |  |  | *본관보다 오래된 도서관 별관에는 학생이 거의 없다.  |
| 224 | `lunch2_yuna_intro_check` |  | yuna_hideout | yuna_normal |  |  |  |
| 225 | `lunch2_yuna_3_seo` | 유나 | yuna_hideout | yuna_normal |  |  | 왔네. |
| 226 | `lunch2_yuna_4_seo` | {name} | yuna_hideout | yuna_normal |  |  | 쪽지 받았거든. |
| 227 | `lunch2_yuna_5_seo` | 유나 | yuna_hideout | yuna_normal |  |  | 어제는 회장 옆이더니. |
| 228 | `lunch2_yuna_6_seo` | {name} | yuna_hideout | yuna_normal |  |  | 오늘은 네가 불러서 왔어. |
| 229 | `lunch2_yuna_7_seo` | 유나 | yuna_hideout | yuna_normal |  |  | 의외네. |
| 230 | `lunch2_yuna_8_seo` | {name} | yuna_hideout | yuna_normal |  |  | 그래서 더 와보고 싶었어. |
| 231 | `lunch2_yuna_9` | 유나 | yuna_hideout | yuna_smile |  |  | *책장을 한 장 넘기고 맞은편 소파의 구겨진 쿠션을 손 |
| 232 | `lunch2_yuna_10` | 유나 | yuna_hideout | yuna_normal |  |  | 그래. |
| 233 | `lunch2_yuna_11` | 유나 | yuna_hideout | yuna_normal |  |  | *유나가 별관 안쪽으로 앞장선다. 발소리가 낮게 울리는 |
| 234 | `lunch2_yuna_13` | {name} | yuna_hideout | yuna_normal |  |  | 여기 뭐야? 비밀 독서실? |
| 235 | `lunch2_yuna_14` | 유나 | yuna_hideout | yuna_normal |  |  | 여기 아는 사람 거의 없어. |
| 236 | `lunch2_yuna_15` | 유나 | yuna_hideout | yuna_normal |  |  | *소파에 앉아 가방을 바닥에 내려놓고 한 칸을 비운다. |
| 237 | `lunch2_yuna_16` | 유나 | yuna_hideout | yuna_normal |  |  | 나랑 한 명 더 있었는데. |
| 238 | `lunch2_yuna_17` | {name} | yuna_hideout | yuna_normal |  |  | 있었는데? |
| 239 | `lunch2_yuna_17_b` | 유나 | yuna_hideout | yuna_normal |  |  | *책갈피 끝이 페이지 사이로 천천히 사라진다. 유나는  |
| 240 | `lunch2_yuna_choice` | {name} | yuna_hideout | yuna_normal |  |  | *'있었는데' 뒤에 말이 없다. 유나는 책갈피 끝을 책 |
| 241 | `lunch2_yuna_trap_exclusive` | 유나 | yuna_hideout | yuna_sad |  |  | *책을 자기 쪽으로 당겼다가 천천히 놓는다.* 그건 내 |
| 242 | `lunch2_yuna_c2_1` | {name} | yuna_hideout | yuna_normal |  |  | *옆에 앉자 유나는 자기 책 더미에서 한 권을 꺼내 내 |
| 243 | `lunch2_yuna_c2_3` | 유나 | yuna_hideout | yuna_normal |  |  | 읽어. |
| 244 | `lunch2_yuna_c2_4` | {name} | yuna_hideout | yuna_normal |  |  | *책을 펼친다. 두 사람의 페이지가 번갈아 넘어가고 창 |
| 245 | `lunch2_yuna_c2_6` | 유나 | yuna_hideout | yuna_normal |  |  | 여기가 좋은 이유. |
| 246 | `lunch2_yuna_c2_7` | {name} | yuna_hideout | yuna_normal |  |  | 응? |
| 247 | `lunch2_yuna_c2_8` | 유나 | yuna_hideout | yuna_normal |  |  | 조용해서. — 근데 혼자가 아니어서. |
| 248 | `lunch2_yuna_c2_9` | 유나 | yuna_hideout | yuna_normal |  |  | *책장 쪽으로 돌아서지만 책은 한동안 같은 페이지에 열 |
| 249 | `lunch2_yuna_end` | {name} | yuna_hideout | yuna_normal |  |  | *문을 닫기 전 돌아보자 유나는 '있었는데'에서 멈춘  |
| 250 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *방과후. 핸드폰에 알림이 두 개 와 있다.* |
| 251 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 체육관 와. 오늘은 진짜 내기다. |
| 252 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 학생회실에 올 수 있어? 일손이 부족해서. |
| 253 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게서는 아무 연락이 없다. 가방을 챙기자 주머니 |
| 254 | `after2_nurse_transition` | {name} | school_hallway | 없음 |  | 🌅 | *5교시 체육 뒤, 팔꿈치 밴드 끝이 소매에 걸린다.  |
| 255 | `hidden_nurse_d2_1` | {name} | nurse_room | nurse_normal |  | 🌅 | *소매를 걷자 밴드 한쪽이 들려 있다. 상처에는 피가  |
| 256 | `hidden_nurse_d2_2` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 하루도 안 돼서 밴드가 반품됐네. 앉아 봐. |
| 257 | `hidden_nurse_d2_3` | {name} | nurse_room | nurse_normal |  | 🌅 | 끝이 자꾸 소매에 걸려요. |
| 258 | `hidden_nurse_d2_4` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 어디 보자. |
| 259 | `hidden_nurse_d2_5` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *들뜬 밴드를 떼고 상처 주변을 닦은 뒤 새 밴드를 꺼 |
| 260 | `hidden_nurse_d2_choice1` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건선생님이 팔꿈치를 접었다 펴 보며 밴드 길이를 가 |
| 261 | `hidden_nurse_d2_choice1_b` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 그게 내 일이니까. 대충 붙였다가 수업 중에 떨어지면  |
| 262 | `hidden_nurse_d2_6` | {name} | nurse_room | nurse_normal |  | 🌅 | *밴드를 확인하는데 책상 서랍에서 연두색 노트가 삐져나 |
| 263 | `hidden_nurse_d2_7` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *서랍을 닫는다.* 그건 안 봤지? 됐어. 서류 얘기하 |
| 264 | `hidden_nurse_d2_choice2` | {name} | nurse_room | nurse_shy |  | 🌅 | *서랍 손잡이를 쥔 손마디가 희다.* |
| 265 | `hidden_nurse_d2_choice2_b` | 보건선생님 | nurse_room | nurse_shy |  | 🌅 | *서랍 손잡이에서 손을 뗀다.* 비밀. 이 정도면 충분 |
| 266 | `hidden_nurse_d2_8` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 자, 다 됐어. 오늘은 물 닿지 않게 하고. |
| 267 | `hidden_nurse_d2_9` | {name} | nurse_room | nurse_normal |  | 🌅 | *밴드가 들뜨거나 피가 배면 다시 오라는 안내를 듣고  |
| 268 | `hidden_nurse_d2_freetalk` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *사용한 소독솜을 버리고 밴드 가장자리를 한 번 눌러  |
| 269 | `hidden_nurse_d2_return` | {name} | room_school | 없음 |  | 🌅 | *보건실을 나와 교실로 돌아오니, 방과후 햇빛이 책상  |
| 270 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *어디로 갈까.* |
| 271 | `after2_yuna_1` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *유나한테는 연락이 없지만 도서관으로 향한다. 주머니  |
| 272 | `after2_yuna_1_b` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *별관 복도에는 인기척이 없다. 비밀 독서 공간 문만  |
| 273 | `after2_yuna_2` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *문을 밀자 오래된 경첩이 짧게 운다. 유나는 소파에서 |
| 274 | `after2_yuna_2_b` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | *책 위에 올려 둔 이어폰 한쪽을 옆으로 치운다.* |
| 275 | `after2_yuna_3` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 왔네. |
| 276 | `after2_yuna_4` | {name} | yuna_hideout | yuna_normal |  | 🌅 | 부른 적 없잖아. |
| 277 | `after2_yuna_5` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 불러야 오는 거야? |
| 278 | `after2_yuna_6` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | *검지가 같은 문장 밑을 두 번 따라간다.* |
| 279 | `after2_yuna_7` | {name} | yuna_hideout | yuna_normal |  | 🌅 | 문이 열려 있길래. |
| 280 | `after2_yuna_8` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 우연히. |
| 281 | `after2_yuna_8b` | {name} | yuna_hideout | yuna_shy |  | 🌅 | *안쪽 의자에는 이어폰 한쪽이 이미 놓여 있다. 유나는 |
| 282 | `after2_yuna_8c` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 들어봐. |
| 283 | `after2_yuna_8d` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *이어폰에서 낮은 피아노 곡이 흐른다. 유나는 책을 읽 |
| 284 | `after2_yuna_choice_pre1` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | *이어폰 줄을 한 번 풀어내며 말한다.* 방과후에 여기 |
| 285 | `after2_yuna_choice_pre2` | {name} | yuna_hideout | yuna_normal |  | 🌅 | 응? |
| 286 | `after2_yuna_choice_pre3` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 선배 이후로 없었어. |
| 287 | `after2_yuna_choice_pre3_b` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | *유나가 책 위로 {name}을 바로 본다. 이어폰 줄 |
| 288 | `after2_yuna_choice` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *이어폰 줄이 유나의 손가락 사이에서 한 번 더 감긴다 |
| 289 | `after2_yuna_everyday` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | *이어폰 줄의 매듭을 풀었다가 검지에 다시 감는다.* |
| 290 | `after2_yuna_everyday_b` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 올 거면 와. 말리지는 않을게. |
| 291 | `after2_yuna_everyday_react` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | 근데 매일은 곤란해. 가끔만. |
| 292 | `after2_yuna_everyday_react_b` | {name} | yuna_hideout | yuna_shy |  | 🌅 | *유나는 책갈피를 빼지 않은 채 같은 페이지를 보고 있 |
| 293 | `after2_yuna_end` | {name} | yuna_hideout | yuna_smile |  | 🌅 | *유나와 나란히 앉아 있던 자리에는 이어폰 한쪽이 남아 |
| 294 | `after2_yuna_rival_dain_check` |  | yuna_hideout | 없음 |  | 🌅 |  |
| 295 | `after2_yuna_rival_dain_low` | 다인 | yuna_hideout | dain_laugh |  | 🌅 | 도서관 쪽이었어? 내일 봐! |
| 296 | `after2_yuna_rival_seo_check` |  | yuna_hideout | 없음 |  | 🌅 |  |
| 297 | `after2_yuna_rival_seo_low` | 서연 | yuna_hideout | seyoun_normal |  | 🌅 | 일손은 채웠어. 내일 보자. |
| 298 | `after2_yuna_return` | {name} | school | yuna_smile |  | 🌅 | *도서관 별관을 나서자 복도 자동등이 켜진다.* |
| 299 | `after2_group_yuna_companion` | 유나와 동행 | library_old | 없음 |  | 🌅 | *정리할 자료는 두 묶음인데 남은 시간은 한쪽을 끝내기 |
| 300 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.* |
| 301 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 302 | `minsu_warn_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문을 나서는데 — 민수가 뒤에서 따라온다. |
| 303 | `minsu_warn_1_b` | 민수 | school | minsu_normal |  | 🌅 | *성큼 따라와 옆에 나란히 선다.* |
| 304 | `minsu_warn_2` | 민수 | school | minsu_smirk |  | 🌅 | 야. |
| 305 | `minsu_warn_3` | {name} | school | minsu_smirk |  | 🌅 | 왜? |
| 306 | `minsu_warn_4` | 민수 | school | minsu_smirk |  | 🌅 | 너 요즘 재밌냐? |
| 307 | `minsu_warn_4_b` | {name} | school | minsu_normal |  | 🌅 | *민수는 교문 밖 횡단보도 신호만 보고 있다.* |
| 308 | `minsu_warn_5` | {name} | school | minsu_smirk |  | 🌅 | 갑자기? |
| 309 | `minsu_warn_6` | 민수 | school | minsu_smirk |  | 🌅 | 점심엔 한 명, 방과후엔 또 한 명. 넌 재밌겠지. — |
| 310 | `night2_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저  |
| 311 | `night2_msg_1` | {name} | room_my | 없음 |  |  | *세 명에게서 메시지가 왔다.* |
| 312 | `night2_msg_yuna_specific` | 유나 | room_my | yuna_normal | 0.35 |  | 오늘 그 곡, 좋았어 |
| 313 | `night2_msg_yuna_specific_2` | 유나 | room_my | yuna_normal | 0.35 |  | 다음에 또 들려줘 |
| 314 | `night2_msg_dain_general` | 다인 | room_my | dain_normal | 0.35 |  | 야, 내일 매점 가자! 오늘 못 간 거 아직 아쉽거든! |
| 315 | `night2_msg_dain_general_merge` | 서연 | room_my | seyoun_normal | 0.35 |  | 점심에 옥상 올래? 바람 좋을 거야 |
| 316 | `night2_msg_seo_general_alt` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 옥상 열어둘게. 시간 되면 와 |
| 317 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에  |
| 318 | `night2_choice` | {name} | room_my | 없음 |  |  | *누구에게 먼저 답장할까?* |
| 319 | `night2_reply_yuna_1` | {name} | room_my | yuna_normal | 0.35 |  | 아직 반 정도. 재밌어 |
| 320 | `night2_reply_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | 다행이네 |
| 321 | `night2_reply_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *답장창이 한동안 비어 있다. 그러다 새 말풍선이 올라 |
| 322 | `night2_reply_yuna_4` | 유나 | room_my | yuna_normal | 0.35 |  | 아까 재생목록. 세 번째 곡도 들어봐 |
| 323 | `night2_reply_yuna_5` | {name} | room_my | yuna_normal | 0.35 |  | *유나가 공유한 재생목록을 다시 연다. 세 번째 곡은  |
| 324 | `night2_reply_yuna_6` | 유나 | room_my | yuna_normal | 0.35 |  | 끝까지 들어봐 |
| 325 | `night2_reply_yuna_6_b` | {name} | room_my | yuna_normal | 0.35 |  | *이어폰을 끼고 재생 버튼을 누른다. 피아노 뒤로 낮은 |
| 326 | `night2_reply_yuna_6_c` | {name} | room_my | yuna_normal | 0.35 |  | *곡이 끝나고 재생 화면의 진행 바가 마지막 칸에 멈춘 |
| 327 | `night2_reply_yuna_7` | {name} | room_my | yuna_normal | 0.35 |  | *재생목록 제목 아래에 유나가 남긴 짧은 메모가 보인다 |
| 328 | `night2_reply_yuna_react_default` | 유나 | room_my | yuna_normal | 0.35 |  | 응. 잘 자. |
| 329 | `night2_yuna_freetalk` | 유나 | room_my | yuna_normal | 0.35 | 🌙 | 잠깐. 아직 깨어 있으면... 조금만 더 얘기할래? |
| 330 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 또 다른 알림이 보인다.* |
| 331 | `night2_hidden_nurse_1` | {name} | room_my | nurse_normal | 0.35 |  | *건강 관리 앱 알림. '보건실 기록: 전학생 — 팔꿈 |
| 332 | `night2_hidden_nurse_2` | {name} | room_my | nurse_normal | 0.35 |  | *팔꿈치를 한 번 굽혀 본다. 밴드 모서리는 아직 단단 |
| 333 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 보내고 핸드폰을 내려놓았다.* |
| 334 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이,  |
| 335 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 |
| 336 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *메모장에 줄줄이 남은 보내지 않은 문장. '선생님,  |
| 337 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 메모가 마지막이다. 그 아래 39번째에는 제 |
| 338 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 |
| 339 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로 |
| 340 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보 |
| 341 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화 |
| 342 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 |
| 343 | `night2_end_2_b` | {name} | room_my | 없음 |  |  | *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있 |
| 344 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.* |
| 345 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을  |
| 346 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 |
| | **Day 3** | | | | | | |
| 347 | `morning3_start` | {name} | school | 없음 |  |  | *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯 |
| 348 | `morning3_start_2` | {name} | school | 없음 |  |  | *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군 |
| 349 | `hidden_nurse_d3_check` | {name} | room_school | 없음 |  |  | *쉬는 시간이 끝나간다.* |
| 350 | `hidden_nurse_d3_1` | {name} | nurse_room | nurse_normal |  |  | *아침 종이 친 뒤에도 자리에서 일어나지 못했다. 손등 |
| 351 | `hidden_nurse_d3_1_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 책상에서 몸을 일으킨다.* 어? 오늘은  |
| 352 | `hidden_nurse_d3_1_c` | {name} | nurse_room | nurse_normal |  |  | 아프진 않은데요. |
| 353 | `hidden_nurse_d3_1_d` | 보건선생님 | nurse_room | nurse_normal |  |  | 아프지 않은데 보건실에? |
| 354 | `hidden_nurse_d3_1_e` | {name} | nurse_room | nurse_normal |  |  | 좀 쉬고 싶어서요. |
| 355 | `hidden_nurse_d3_2` | 보건선생님 | nurse_room | nurse_normal |  |  | 어디가 아픈 건 아니고? 표정이 안 좋은데. |
| 356 | `hidden_nurse_d3_3` | {name} | nurse_room | nurse_normal |  |  | 좀 쉬고 싶어서요. 사람 관계가 복잡해져서요. |
| 357 | `hidden_nurse_d3_3_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *컵을 내려놓는다.* |
| 358 | `hidden_nurse_d3_3_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 앉아. |
| 359 | `hidden_nurse_d3_3_d` | 보건선생님 | nurse_room | nurse_normal |  |  | *컵을 책상 안쪽에 놓고 환자용 의자를 침대 앞으로 끌 |
| 360 | `hidden_nurse_d3_4` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님은 커튼을 치고 물컵을 건넨다.* 앉아. 여 |
| 361 | `hidden_nurse_d3_5_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 의자를 침대 쪽으로 당겨 앉는다.* |
| 362 | `hidden_nurse_d3_5_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 비슷해? 그럼 여기 온 건 잘했어. |
| 363 | `hidden_nurse_d3_5_d` | {name} | nurse_room | nurse_normal |  |  | *보건선생님의 엄지가 물컵 가장자리를 한 번 누른다.* |
| 364 | `hidden_nurse_d3_5_e` | {name} | nurse_room | nurse_normal |  |  | 누구한테 말하기 애매한 것들이요. |
| 365 | `hidden_nurse_d3_5_f` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 의자를 끌어와 마주 앉는다.* 사람 관계 |
| 366 | `hidden_nurse_d3_5_g` | {name} | nurse_room | nurse_normal |  |  | 셋 다 신경 쓰이는데 결국 한 명은 정해야 해서요. |
| 367 | `hidden_nurse_d3_5_h` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님은 종이컵을 책상 위에 반듯하게 놓는다.* |
| 368 | `hidden_nurse_d3_5_i` | 보건선생님 | nurse_room | nurse_normal |  |  | 그거 연애 상담이야? |
| 369 | `hidden_nurse_d3_5_j` | {name} | nurse_room | nurse_normal |  |  | 아, 그런 건 아니... |
| 370 | `hidden_nurse_d3_5_k` | 보건선생님 | nurse_room | nurse_normal |  |  | 아니라고 하기엔 얼굴에 다 보여. |
| 371 | `hidden_nurse_d3_5_l` | {name} | nurse_room | nurse_normal |  |  | *책상 위 종이컵만 본다.* |
| 372 | `hidden_nurse_d3_5_m` | 보건선생님 | nurse_room | nurse_normal |  |  | 이게 보건 업무에 들어가나 모르겠네. 그래도 들어줄게. |
| 373 | `hidden_nurse_d3_5_n` | {name} | nurse_room | nurse_normal |  |  | 선생님도 여러 사람 사이에서 헷갈린 적 있어요? |
| 374 | `hidden_nurse_d3_5_o` | 보건선생님 | nurse_room | nurse_normal |  |  | *종이컵 테두리가 엄지 아래에서 접힌다. 보건선생님은  |
| 375 | `hidden_nurse_d3_5_p` | 보건선생님 | nurse_room | nurse_normal |  |  | 있었지. 대학병원에서 일할 때. |
| 376 | `hidden_nurse_d3_5_q` | {name} | nurse_room | nurse_normal |  |  | 대학병원이요? |
| 377 | `hidden_nurse_d3_choice1` | {name} | nurse_room | nurse_normal |  |  | *입만 열었다가 다시 다문다.* |
| 378 | `hidden_nurse_d3_choice1_b` | 보건선생님 | nurse_room | nurse_normal |  |  | 괜찮아. 자세히는 말하지 않을게. |
| 379 | `hidden_nurse_d3_6` | 보건선생님 | nurse_room | nurse_normal |  |  | 대학병원에서 일할 때. 호출벨이 동시에 울리면, 손이  |
| 380 | `hidden_nurse_d3_6_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *물컵을 내려놓는다. 컵 바닥의 물기가 둥글게 번진다. |
| 381 | `hidden_nurse_d3_6_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 그만뒀다기보다, 나왔지. 멋있는 이유 같은 건 없어. |
| 382 | `hidden_nurse_d3_6_d` | 보건선생님 | nurse_room | nurse_normal |  |  | *청진기를 정리하다 노트 서랍을 열려던 손을 거둔다.* |
| 383 | `hidden_nurse_d3_6_e` | 보건선생님 | nurse_room | nurse_normal |  |  | 있었지. 못 살린 환자 한 명. 열일곱 살이었어. 그  |
| 384 | `hidden_nurse_d3_6_f` | {name} | nurse_room | nurse_normal |  |  | *어제 본 연두색 노트가 떠오른다. 첫 장에서 멈춰 있 |
| 385 | `hidden_nurse_d3_7` | 보건선생님 | nurse_room | nurse_normal |  |  | 그래서 학교로 왔어. 여기서는 한 명 한 명 얼굴을 제 |
| 386 | `hidden_nurse_d3_7_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 청진기를 책상 위에 놓고 {name} 쪽 |
| 387 | `hidden_nurse_d3_8` | 보건선생님 | nurse_room | nurse_normal |  |  | 너도 마찬가지야. 다 챙기려고 하지 마. 진짜 중요한  |
| 388 | `hidden_nurse_d3_8_b` | {name} | nurse_room | nurse_normal |  |  | *쥔 종이컵 한쪽이 손가락 모양대로 찌그러진다.* |
| 389 | `hidden_nurse_d3_8_c` | {name} | nurse_room | nurse_normal |  |  | 감사합니다. |
| 390 | `hidden_nurse_d3_8_d` | 보건선생님 | nurse_room | nurse_normal |  |  | 이 정도로 버거우면 참지 말고 말해. 필요하면 상담실도 |
| 391 | `hidden_nurse_d3_8_e` | {name} | nurse_room | nurse_normal |  |  | *상담실 번호가 적힌 안내 카드를 접어 주머니에 넣는다 |
| 392 | `hidden_nurse_d3_8_f` | {name} | nurse_room | 없음 |  |  | *자리에서 일어나 문손잡이를 잡는다. 뒤에서 서랍 여는 |
| 393 | `hidden_nurse_d3_8_g` | {name} | nurse_room | 없음 |  |  | *들뜬 밴드 끝을 손톱으로 누른다. 흔들리는 커튼 너머 |
| 394 | `hidden_nurse_d3_8_h` | {name} | nurse_room | 없음 |  |  | *문손잡이에서 손을 떼고 다시 돌아선다. 서랍 안에서  |
| 395 | `hidden_nurse_d3_choice2` | 보건선생님 | nurse_room | nurse_normal |  |  | *'한 명'에서 말을 멈췄다. 종이컵 가장자리가 손에  |
| 396 | `hidden_nurse_d3_choice2_c` | 보건선생님 | nurse_room | nurse_worried |  |  | 편해지는지는 말하는 사람이 정해. 듣는 사람이 밀어붙이 |
| 397 | `hidden_nurse_d3_9` | 보건선생님 | nurse_room | nurse_normal |  |  | 찾아오는 건 괜찮아. 다만 혼자 다 해결해 주겠다는 약 |
| 398 | `hidden_nurse_d3_9_b` | {name} | nurse_room | nurse_normal |  |  | *종이컵을 내려놓고 안내 카드를 주머니에서 다시 꺼낸다 |
| 399 | `hidden_nurse_d3_9_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 네가 더 버거워지면 담임이나 상담실하고 같이 움직일 거 |
| 400 | `hidden_nurse_d3_9_d` | 보건선생님 | nurse_room | nurse_normal |  |  | 그 전에 누구에게 어디까지 말할지는 너랑 먼저 정하고. |
| 401 | `hidden_nurse_d3_9_e` | {name} | nurse_room | nurse_normal |  |  | *보건선생님이 상담 예약표를 책상 앞으로 밀어 둔다.* |
| 402 | `hidden_nurse_d3_9_f` | {name} | nurse_room | nurse_normal |  |  | *예약표에는 보건실과 상담실 시간이 나란히 적혀 있다. |
| 403 | `hidden_nurse_d3_11` | 보건선생님 | nurse_room | nurse_normal |  |  | 다음 수업 늦겠다. 오늘 한 얘기는 여기까지 정리하고  |
| 404 | `hidden_nurse_d3_freetalk` | 보건선생님 | nurse_room | nurse_normal |  |  | *커튼을 반쯤 닫고 의자를 끌어온다.* 오늘은 농담보다 |
| 405 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | 이번 주말에 시간 있어? 공원에 같이 가자. |
| 406 | `morning3_date_seo_choice` | 서연 | school_hallway | seyoun_normal |  |  | *서연이 교실 문 앞에서 묻는다. 다인이 들고 있던 물 |
| 407 | `morning3_date_seo_decline` | {name} | school_hallway | seyoun_normal |  |  | *서연의 제안을 거절하자 다인이 돌리던 물병 뚜껑을 다 |
| 408 | `morning3_date_seo_decline_b` | {name} | room_school | seyoun_normal |  |  | *교실로 돌아왔다. 수업 하나가 지나고 또 쉬는 시간이 |
| 409 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼  |
| 410 | `morning3_date_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 배구공을 옆구리에 낀 채 이쪽을 보다가 코트로 |
| 411 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다 |
| 412 | `morning3_date_yuna_1_b` | 서연 | room_school | seyoun_normal |  |  | 유나. 쪽지로 물으면 다른 사람은 못 듣잖아. |
| 413 | `morning3_date_yuna_2` | {name} | room_school | yuna_normal |  |  | *'주말. 헌책방. 먼저 잡힌 약속이 있어도, 네가 오 |
| 414 | `morning3_date_yuna_choice` | {name} | room_school | yuna_normal |  |  | *쪽지를 읽는 동안 유나는 서연과 다인을 차례로 본다. |
| 415 | `morning3_date_yuna_decline` | {name} | room_school | yuna_sad |  |  | *쪽지 뒷면에 답을 적어 책 위에 놓는다. 유나는 책갈 |
| 416 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 417 | `morning3_end` | {name} | room_school | 없음 |  |  | *수업 종료 종이 울리고 곧 점심시간이 된다.* |
| 418 | `morning3_end_b` | 유나 | room_school | yuna_normal |  |  | 맛있네. |
| 419 | `lunch3_start` | {name} | room_school | yuna_normal |  |  | *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. |
| 420 | `lunch3_start_2_b` | 다인 | room_school | dain_normal |  |  | *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가 |
| 421 | `lunch3_meal_1` | 다인 | room_school | dain_laugh |  |  | 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고  |
| 422 | `lunch3_meal_2` | {name} | room_school | dain_laugh |  |  | 그건 내 거... |
| 423 | `lunch3_meal_3` | 서연 | room_school | seyoun_normal |  |  | 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점 |
| 424 | `lunch3_meal_4` | {name} | room_school | seyoun_normal |  |  | 점수 매기지 마. |
| 425 | `lunch3_meal_5` | 서연 | room_school | seyoun_normal |  |  | 10점 만점이야. 나쁜 거 아닌데? |
| 426 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다 |
| 427 | `lunch3_meal_7` | {name} | room_school | seyoun_normal |  |  | 유나, 그건 내가 제일 좋아하는 건데. |
| 428 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임 |
| 429 | `lunch3_meal_8` | {name} | room_school | yuna_bored |  |  | *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다. |
| 430 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. |
| 431 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓 |
| 432 | `lunch3_meal_11` | {name} | room_school | yuna_bored |  |  | *누구에게 줄까?* |
| 433 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *마지막 반찬을 누구에게 줄지 고민한다.* |
| 434 | `lunch3_give_yuna_1` | 유나 | room_school | yuna_normal |  |  | 고마워. |
| 435 | `lunch3_yuna_skin_check` |  | room_school | yuna_normal |  |  |  |
| 436 | `lunch3_give_yuna_2_check` |  | room_school | 없음 |  |  |  |
| 437 | `lunch3_give_yuna_seo_affinity` |  | room_school | 없음 |  |  |  |
| 438 | `lunch3_give_yuna_seo_low` | 서연 | room_school | seyoun_normal |  |  | *서연은 자기 도시락을 정리한다.* |
| 439 | `lunch3_give_yuna_3_check` |  | room_school | 없음 |  |  |  |
| 440 | `lunch3_give_yuna_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 빈 물병을 가방에 넣는다.* 난 괜찮아. |
| 441 | `lunch3_end` | {name} | room_school | 없음 |  |  | *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다 |
| 442 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육 |
| 443 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다 |
| 444 | `after3_choice` | {name} | school_hallway | 없음 |  | 🌅 | *어디로 갈까.* |
| 445 | `after3_walk_home` | {name} | school_hallway | 없음 |  | 🌅 | *잡힌 약속은 없다. 휴대폰을 가방에 넣고 교문 쪽으로 |
| 446 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.* |
| 447 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 448 | `after3_group_nurse_companion` | 보건선생님과 동행 | nurse_room | 없음 |  | 🌅 | *건강 점검표와 운동부 물품 상자가 나란히 놓인다. 보 |
| 449 | `after3_group_return` | {name} | school_hallway | 없음 |  | 🌅 | *대화를 마치고 복도로 나온다.* |
| 450 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 451 | `minsu_d3_check` | {name} | school | 없음 |  | 🌅 |  |
| 452 | `minsu_d3_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문 앞에 민수가 서 있다.* |
| 453 | `minsu_d3_2` | 민수 | school | 없음 |  | 🌅 | 봤다. |
| 454 | `minsu_d3_3` | 민수 | school | 없음 |  | 🌅 | 점심때. 그리고 방금 서연 표정도. |
| 455 | `minsu_d3_4` | 민수 | school | 없음 |  | 🌅 | 어제 내가 뭐랬냐. 나중에 셋 다 울면 네 탓이라고 했 |
| 456 | `minsu_d3_5` | 민수 | school | 없음 |  | 🌅 | 옆에서 보기 좀 힘들다. 걔들 다 좋은 애들이야. 네가 |
| 457 | `minsu_d3_5b` | 민수 | school | 없음 |  | 🌅 | *민수는 빨대 포장지를 끝까지 접어 테이블 위에 내려놓 |
| 458 | `minsu_d3_6` | {name} | school | 없음 |  | 🌅 | 맞아. |
| 459 | `minsu_d3_6b` | 민수 | school | 없음 |  | 🌅 | 전 학교에서 뭔 일 있었는지 안 물어볼게. 근데 하나만 |
| 460 | `minsu_d3_7` | 민수 | school | 없음 |  | 🌅 | 거절도 배려야. 안 되는 관계에 계속 여지 주는 것보다 |
| 461 | `minsu_d3_8` | {name} | school | 없음 |  | 🌅 | *거절도 배려다. 전 학교에서 나는 소정이에게 고백할  |
| 462 | `minsu_d3_9` | 민수 | school | 없음 |  | 🌅 | *민수는 더 말하지 않고 끝까지 접은 빨대 포장지를 내 |
| 463 | `minsu_d3_10` | 민수 | school | 없음 |  | 🌅 | 내일 학교에서 보자. 진지하게 생각해. |
| 464 | `night3_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 가방을 의자에 걸어 둔다.* |
| 465 | `night3_start_2` | {name} | room_my | 없음 |  |  | *책상 위에 엎어 둔 핸드폰 화면을 켠다.* |
| 466 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *읽지 않은 메시지가 떠 있다.* |
| 467 | `night3_dream_1` | {name} | school | 없음 |  |  | *꿈속에서 누군가와 나란히 걷는다. 얼굴은 보이지 않고 |
| 468 | `night3_dream_2_b` | {name} | school | 없음 |  |  | *메모장을 닫았다. 내일 보낼 문장은 아직 없다.* |
| 469 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *커튼 사이로 들어온 아침 햇살에 눈을 뜬다. 핸드폰  |
| 470 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *'삭제하시겠습니까?' 확인 창이 뜬다. 손가락이 버튼 |
| 471 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *1초 동안 화면을 내려다본다. 소정이 책상의 낙서와  |
| 472 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *그래. 삭제 버튼에 올린 손가락으로 화면을 누른다.* |
| 473 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼을 누르지 않고 사진을 새 폴더로 옮긴다.  |
| 474 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *'거절도 네가 해야 할 일이야.' 민수의 말이 떠오른 |
| 475 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *갤러리에서 소정이 사진이 사라지고 빈칸만 남는다.* |
| 476 | `night3_faithful_reflect_4_b` | {name} | room_my | 없음 |  |  | *빈 앨범 썸네일 위를 엄지로 문지른다.* |
| 477 | `night3_faithful_reflect_4_c` | {name} | room_my | 없음 |  |  | *핸드폰을 덮자 검은 화면에 갤러리의 빈칸이 겹쳐 보인 |
| 478 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *알람이 울리기 전에 눈을 떴다.* |
| 479 | `night3_end` | {name} | room_my | 없음 |  |  | *방 불을 끄고 핸드폰을 엎어 둔다.* |
| | **Day 4** | | | | | | |
| 480 | `morning4_start` | {name} | room_my | 없음 |  |  | *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다 |
| 481 | `morning4_nightmare_check` |  | room_my | 없음 |  |  |  |
| 482 | `minsu_cheer_1` | {name} | room_my | 없음 |  |  | *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.* |
| 483 | `minsu_cheer_1_b` | 민수 | room_my | minsu_normal | 0.35 |  | *야 오늘 데이트라며?* |
| 484 | `minsu_cheer_1_c` | {name} | room_my | minsu_normal | 0.35 |  | *어떻게 알았어* |
| 485 | `minsu_cheer_1_d` | 민수 | room_my | minsu_normal | 0.35 |  | *다인이가 단톡방에 올림. 내일 약속 있음, 이라고* |
| 486 | `minsu_cheer_2` | 민수 | room_my | minsu_normal | 0.35 |  | 잘하고 와ㅋㅋ |
| 487 | `minsu_cheer_3` | {name} | room_my | minsu_normal | 0.35 |  | 알아. |
| 488 | `minsu_cheer_4_branch` |  | room_my | 없음 |  |  |  |
| 489 | `minsu_cheer_4_ins_single` | {name} | room_my | minsu_normal | 0.35 |  | *핸드폰 캘린더를 본다. 오늘 약속은 하나뿐이다.* |
| 490 | `morning4_start_2` | {name} | room_my | 없음 |  |  | *심호흡하고 약속 메시지를 다시 확인한다.* |
| 491 | `morning4_fallback_msg` | {name} | room_my | 없음 |  |  | *주말 아침. 알림 몇 개를 확인하고 핸드폰을 내려놓는 |
| 492 | `morning4_hidden_check` | {name} | room_my | 없음 |  |  | *주말 아침, 학교 앞 사거리에서 신호를 기다린다.* |
| 493 | `hidden_nurse_d4_morning_1` | {name} | nurse_room | nurse_normal |  |  | *학교 행사 준비일 아침. 예약해 둔 상담 시간에 맞춰 |
| 494 | `hidden_nurse_d4_morning_3` | 보건선생님 | nurse_room | nurse_normal |  |  | 시간 맞춰 왔네. 앉아. |
| 495 | `hidden_nurse_d4_morning_4` | 보건선생님 | nurse_room | nurse_normal |  |  | *상담 기록지를 펼치고 펜을 든다.* |
| 496 | `hidden_nurse_d4_morning_5` | {name} | nurse_room | nurse_normal |  |  | 지난번 상담 마무리하는 거죠? |
| 497 | `hidden_nurse_d4_morning_6` | 보건선생님 | nurse_room | nurse_normal |  |  | 응. 오늘 상태를 확인하고 다음에 도움받을 곳까지 정해 |
| 498 | `hidden_nurse_d4_morning_7` | 보건선생님 | nurse_room | nurse_normal |  |  | *지난 상담에서 적어둔 항목을 하나씩 확인한다.* |
| 499 | `hidden_nurse_d4_morning_8` | 보건선생님 | nurse_room | nurse_normal |  |  | 한 가지 확인할게. |
| 500 | `hidden_nurse_d4_morning_9` | {name} | nurse_room | nurse_normal |  |  | 뭔데요? |
| 501 | `hidden_nurse_d4_morning_10` | 보건선생님 | nurse_room | nurse_normal |  |  | *학교 상담 안내문을 {name} 쪽으로 돌려 놓는다. |
| 502 | `hidden_nurse_d4_morning_11` | 보건선생님 | nurse_room | nurse_normal |  |  | 보건실 말고도 도움을 청할 어른은 정해뒀어? |
| 503 | `hidden_nurse_d4_morning_choice` | {name} | nurse_room | nurse_normal |  |  | *안내문에는 담임 상담, 위클래스, 보호자 연락 순서가 |
| 504 | `hidden_nurse_d4_morning_choice_trap` | 보건선생님 | nurse_room | nurse_worried |  |  | 안 돼. 네가 기대는 어른이 나 하나뿐이면, 내가 없는 |
| 505 | `hidden_nurse_d4_morning_13` | 보건선생님 | nurse_room | nurse_normal |  |  | 네 얘기를 함부로 옮기진 않을게. 다만 다칠 위험이 보 |
| 506 | `hidden_nurse_d4_morning_freetalk` | 보건선생님 | nurse_room | nurse_normal |  |  | *상담 기록지를 덮는다.* 오늘 적은 순서 기억하지?  |
| 507 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 508 | `hidden_nurse_d4_1` | {name} | nurse_room | nurse_normal |  |  | *책상 한쪽에 행사 구급함과 검진 도구가 쌓여 있다.  |
| 509 | `hidden_nurse_d4_low` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 정리 중인 응급키트 지퍼를 닫는다.* 오 |
| 510 | `morning4_end` | {name} | room_my | 없음 |  |  | *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 |
| 511 | `day4_night_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 옷소매에 공원 흙과 학교 먼지가 조금 |
| 512 | `day4_night_branch` | 시스템 | room_my | 없음 |  |  |  |
| 513 | `day4_student_night_branch` |  | room_my | 없음 |  |  |  |
| 514 | `day4_night_reflect` | {name} | room_my | 없음 |  |  | *오늘 주고받은 메시지를 시간순으로 다시 올려 본다.  |
| 515 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 516 | `night_nurse_msg_1` | 보건선생님 | room_my | nurse_normal | 0.35 |  | *학교 건강관리 앱 알림* 오늘 상담 후 상태를 확인해 |
| 517 | `night_nurse_msg_2` | {name} | room_my | nurse_normal | 0.35 |  | *자동 알림 아래에 '안정됨'과 '추가 상담 필요' 두 |
| 518 | `night_nurse_msg_3` | 보건선생님 | room_my | nurse_normal | 0.35 |  | *보건실 안내* 추가 상담이 필요하면 내일 행사 시작  |
| 519 | `night_nurse_msg_4` | 보건선생님 | room_my | nurse_normal | 0.35 |  | *보건실 안내* 늦은 시간에는 답하지 않아도 됩니다.  |
| 520 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *알람을 일요일 오전으로 맞추고 방 불을 끈다. 전하지 |
| 521 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안 시계가 자정 쪽으로 넘어간다. 휴대폰 화면도  |
| | **Day 5** | | | | | | |
| 522 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소 |
| 523 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 524 | `morning5_start_b` | {name} | room_school | 없음 |  |  | *교실에 들어서자 세 가지가 한꺼번에 눈에 들어온다.  |
| 525 | `morning5_start_2_b` | {name} | room_school | 없음 |  |  | *책상 위에 쪽지가 놓여 있다. 서연의 글씨.* |
| 526 | `morning5_mood_check` | 시스템 | room_school | 없음 |  |  |  |
| 527 | `morning5_mood_low` | {name} | room_school | 없음 |  |  | 마지막 날. 잠금화면에 남은 이름 셋을 차례로 누른다. |
| 528 | `morning5_gate` | {name} | school | 없음 |  |  | *교문 앞에서 소매를 걷어 올린다. 손목에 남던 붉은  |
| 529 | `morning5_seo_note_1` | {name} | room_school | seyoun_normal |  |  | *책상 위에 쪽지가 놓여 있다. 서연의 글씨. — '오 |
| 530 | `morning5_seo_note_1_b` | {name} | school_hallway | 없음 |  |  | *복도 문예부 전시 코너를 지나다 게시판의 빈 압정 네 |
| 531 | `morning5_seo_note_1_c` | {name} | school_hallway | 없음 |  |  | *게시판에 단편소설이 붙어 있다. 제목: '도서관에서  |
| 532 | `morning5_yuna_story_1` | {name} | school_hallway | yuna_normal |  |  | *소설 속 인물은 도서관에서 잠든 누군가의 어깨에 담요 |
| 533 | `morning5_yuna_story_2` | {name} | school_hallway | 없음 |  |  | *마지막 문장. '그 사람이 눈을 떴을 때, 나는 이미 |
| 534 | `morning5_yuna_story_4` | {name} | school_hallway | yuna_normal |  |  | *게시판 아래 구석에는 작은 글씨가 남아 있다. '이건 |
| 535 | `morning5_return_class` | {name} | room_school | dain_normal |  |  | *교실로 돌아오니 다인이 기다리고 있다.* |
| 536 | `morning5_dain_1` | 다인 | room_school | dain_normal |  |  | 야, 오늘 체육 이벤트 파트너로 너 써놨어. |
| 537 | `morning5_dain_1_b` | {name} | room_school | dain_normal |  |  | 허락도 없이? |
| 538 | `morning5_dain_2` | 다인 | room_school | dain_laugh |  |  | 늦으면 화낸다? |
| 539 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *행사 준비 시간. 복도를 걷는데 — 빈 교실 앞을 지 |
| 540 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *행사 중간 쉬는 시간. 보건실 앞을 지나간다.* |
| 541 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 542 | `morning5_sojeong_1` | {name} | room_school | 없음 |  |  | *휴대폰 메모 앱을 연다. '소정에게'로 시작하는 빈  |
| 543 | `morning5_sojeong_2` | {name} | room_school | 없음 |  |  | *마흔 번째 초안은 쓰지 않는다. 가장 짧은 문장을 골 |
| 544 | `morning5_sojeong_3` | {name} | room_school | 없음 |  |  | 그때 네 책상과 낙서를 보고도 선생님께 말하지 않았어. |
| 545 | `morning5_sojeong_4` | {name} | room_school | 없음 |  |  | *전송 표시가 뜬다. 읽음 표시는 기다리지 않고 대화방 |
| 546 | `morning5_sojeong_5` | {name} | room_school | 없음 |  |  | *지금 담임에게도 메시지를 보낸다. '전학 오기 전 학 |
| 547 | `morning5_route_branch` |  | room_school | 없음 |  |  |  |
| 548 | `morning5_end` | {name} | room_school | 없음 |  |  | *세 방향에서 온 쪽지와 알림을 책상 위에 나란히 둔다 |
| 549 | `tour_seo_1` | {name} | school | seyoun_normal |  |  | *교문 앞에 나란히 선다. 첫날 서연이 기다리고 있던  |
| 550 | `tour_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *복도 끝에서 서연과 마주친다. 서연은 가방끈을 고쳐  |
| 551 | `after5_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 552 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *행사가 끝나갈 무렵, 복도에서 선택하지 않은 두 사람 |
| 553 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다.* |
| 554 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다. 서연은 잠시 멈췄다가 고개 |
| 555 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 556 | `after5_farewell_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나가 다가온다. 아무 말 없이 책 한 |
| 557 | `after5_farewell_yuna_low` | 유나 | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나와 눈이 마주친다. 유나는 들고 있 |
| 558 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 559 | `after5_farewell_dain_1` | {name} | gym | dain_normal |  | 🌅 | *체육관 앞에서 다인이 걸어온다. 평소보다 보폭이 작다 |
| 560 | `after5_farewell_dain_low` | 다인 | gym | dain_normal |  | 🌅 | *체육관 앞에서 다인이 걸어오다 두 걸음 떨어진 곳에  |
| 561 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *석양이 교정 창문마다 걸린다. 방송실에서 행사 종료  |
| 562 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 563 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 564 | `day5_ending_alone` | {name} | ending_alone | 없음 |  |  | *교문을 나선다. 핸드폰이 울린다. — 아무도 아니다. |
| 565 | `alone_1` | {name} | ending_alone | 없음 |  |  | *5일 동안 받은 메모와 사진을 한 폴더에 모은다. 누 |
| 566 | `alone_2` | {name} | ending_alone | 없음 |  |  | *방 안이 조용하다. 핸드폰 화면에는 대화방 세 개가  |
| 567 | `alone_2_b` | {name} | ending_alone | 없음 |  |  | *답장창을 비워 둔 채 휴대폰을 내려놓는다.* |
| 568 | `alone_4` | {name} | ending_alone | 없음 |  |  | *충전기에 꽂고 아침 알람을 맞춘다. 화면이 꺼진 방에 |
| 569 | `alone_5` | 시스템 | ending_alone | 없음 |  |  | ─── ALONE END ─── |
| 570 | `day5_credits` |  | school | 없음 |  |  |  |
| 571 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### confess_fail_5

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_dain_choice`: (선택)
- `after_end`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_yuna_choice`: (선택)
- `after2_choice`: (선택)
- `night2_choice`: (선택)
- `morning3_date_dain_choice`: (선택)
- `morning3_date_yuna_choice`: (선택)
- `lunch3_choice`: (선택)
- `confess_dain_choice`: (선택)
- `after5_last_chance_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=-3 유나=7 다인=12 담임=0 보건=0

<details>
<summary>씬 타임라인 (490씬)</summary>

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
| 59 | `lunch_dain_1` | 다인 | store | dain_laugh |  |  | 도착. 여기가 매점이야. 일단 고르고 봐. |
| 60 | `lunch_dain_1_aff_default` | 다인 | store | dain_normal |  |  | *매점 안은 점심시간이라 북적거린다. 빵 냄새랑 우유  |
| 61 | `lunch_dain_2` | 다인 | store | dain_normal |  |  | 소보로빵에 딸기우유. 이 조합은 실패한 적 없어. |
| 62 | `lunch_dain_3` | {name} | store | dain_normal |  |  | 근데 진 사람이 사준다며. 뭘 하는 거야? |
| 63 | `lunch_dain_4` | 다인 | store | dain_normal |  |  | 가위바위보. 간단하지. |
| 64 | `lunch_dain_5` | {name} | store | dain_normal |  |  | 당연한 건 아닌데. |
| 65 | `lunch_dain_6` | 다인 | store | dain_normal |  |  | 안 하면 네가 사는 걸로 친다? |
| 66 | `lunch_dain_7` | {name} | store | dain_normal |  |  | 하자. |
| 67 | `lunch_dain_8` | {name} | store | dain_normal |  |  | *가위바위보.* |
| 68 | `lunch_dain_9` | 다인 | store | dain_normal |  |  | 가위— 바위— 보! |
| 69 | `lunch_dain_10` | {name} | store | dain_normal |  |  | *가위. 바위. 보. — 다인이 졌다.* |
| 70 | `lunch_dain_11` | 다인 | store | dain_normal |  |  | 어? 나 졌네. 한 판 더. |
| 71 | `lunch_dain_12` | {name} | store | dain_pout |  |  | 약속은 약속이지. |
| 72 | `lunch_dain_12_b` | 다인 | store | dain_pout |  |  | 아, 알았어. 내가 산다. 이모, 소보로 두 개요. |
| 73 | `lunch_dain_14` | 다인 | store | dain_pout |  |  | *동전을 카운터에 탁탁 놓고 소보로 두 개를 받아 든다 |
| 74 | `lunch_dain_15` | {name} | store | dain_normal |  |  | *매점 한쪽 벤치에 앉아 빵을 먹는다.* |
| 75 | `lunch_dain_16` | 다인 | store | dain_normal |  |  | *빵 봉지를 뜯는다.* 야, 너 운동 진짜 안 해? |
| 76 | `lunch_dain_17` | {name} | store | dain_normal |  |  | 왜, 내 체력이 걱정돼? |
| 77 | `lunch_dain_18` | 다인 | store | dain_laugh |  |  | 아니. 나랑 다니려면 체력부터 봐야지. |
| 78 | `lunch_dain_19` | {name} | store | dain_laugh |  |  | 자기 PR인 줄 알았어. |
| 79 | `lunch_dain_20` | 다인 | store | dain_laugh |  |  | PR? 그게 뭔데. |
| 80 | `lunch_dain_21` | {name} | store | dain_normal |  |  | Personal Record. 운동할 때 쓰는 말인데. |
| 81 | `lunch_dain_22` | 다인 | store | dain_normal |  |  | *딸기우유 팩 옆면이 손가락에 눌려 우그러진다.* |
| 82 | `lunch_dain_23` | 다인 | store | dain_laugh |  |  | 오, 그거 알아? 너 운동 쪽 좀 아네? |
| 83 | `lunch_dain_choice` | 다인 | store | dain_laugh |  |  | *빨대를 문 채 상체를 가까이 기울인다.* |
| 84 | `lunch_dain_c2_1` | 다인 | store | dain_laugh |  |  | 그래도 관심은 있는 거잖아. 오늘 방과후 체육관 와.  |
| 85 | `lunch_dain_after` | {name} | store | dain_laugh |  |  | *빵을 다 먹고 일어서는데.* |
| 86 | `lunch_dain_after_2` | 다인 | store | dain_normal |  |  | 야, {name}. |
| 87 | `lunch_dain_after_3` | {name} | store | dain_normal |  |  | 응? |
| 88 | `lunch_dain_after_4` | 다인 | store | dain_normal |  |  | 전학 와서 첫 식사 파트너가 나다? 나름 역사적인데. |
| 89 | `lunch_dain_after_5` | 다인 | store | dain_normal |  |  | *주먹으로 {name}의 어깨를 툭 치고 그대로 한 번 |
| 90 | `lunch_dain_freetalk` | 다인 | store | dain_normal |  |  | *빵 봉지를 접어 주머니에 넣고 벤치 등받이에 기댄다. |
| 91 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *종이 울린다. 점심시간이 끝났다.* |
| 92 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에 |
| 93 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 94 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창 |
| 95 | `after_kakao_5` | {name} | school_hallway | 없음 |  | 🌅 | *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른 |
| 96 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록  |
| 97 | `after1_jealousy_dain_1` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 점심때 매점에서 다인이랑 같이 있는 거 봤는데. 적응  |
| 98 | `after1_jealousy_dain_2` | {name} | school_hallway | seyoun_laugh |  | 🌅 | *서연은 클립보드를 가슴 앞에 세운 채 답을 기다린다. |
| 99 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *복도를 계속 걷는다.* |
| 100 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도를 걷는데 뒤에서 쿵쿵 발소리.* |
| 101 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 조심! |
| 102 | `after_miss_dain_3` | {name} | school_hallway | dain_normal |  | 🌅 | *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 |
| 103 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 피했다? 반사신경 괜찮은데. |
| 104 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 넌 복도에서 왜 전력질주야? |
| 105 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 늦었거든! 체육관 가야 해. 내일 보자, 전학생! |
| 106 | `after_miss_dain_6_b` | {name} | school_hallway | dain_laugh |  | 🌅 | *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을  |
| 107 | `after_miss_dain_7` | {name} | school_hallway | dain_laugh |  | 🌅 | *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아 |
| 108 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으 |
| 109 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 이거 떨어뜨렸어. |
| 110 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피 |
| 111 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌  |
| 112 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 고마워. |
| 113 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피를 책등 사이에 끼우고 돌아선다.* |
| 114 | `after_miss_yuna_4` | {name} | library_old | yuna_normal |  | 🌅 | *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 |
| 115 | `after_miss_seoyeon_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *하교하려는데 복도에서 서연과 마주친다.* |
| 116 | `after_miss_seoyeon_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 아까 어디 갔어? |
| 117 | `after_miss_seoyeon_3` | {name} | school_hallway | seyoun_normal |  | 🌅 | 어디라니? |
| 118 | `after_miss_seoyeon_4` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 옥상 열어놨는데 안 왔네. — 전학생, 배짱이 있어. |
| 119 | `after_miss_seoyeon_5` | {name} | school_hallway | seyoun_normal |  | 🌅 | 기다린 거야? |
| 120 | `after_miss_seoyeon_6` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 바람 쐬러 올라간 건데 문이 열려 있길래. |
| 121 | `after_miss_seoyeon_7` | {name} | school_hallway | seyoun_normal |  | 🌅 | *서연의 클립보드 맨 위에 내 이름이 남아 있다. 체크 |
| 122 | `after_miss_seoyeon_8` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 내일은 빠지지 마. |
| 123 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든 |
| 124 | `night_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄 |
| 125 | `night_start_3` | {name} | room_my | 없음 |  |  | *핸드폰이 울린다. 학교 메신저.* |
| 126 | `night_msg_dain_1` | 다인 | room_my | dain_normal | 0.35 |  | *가위바위보 리벤지 내일이다* |
| 127 | `night_msg_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | *내일은 리벤지다 ㅋㅋ* |
| 128 | `night_msg_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | *오늘 빵값 아직도 아깝다. 진짜.* |
| 129 | `night_msg_dain_4` | {name} | room_my | dain_normal | 0.35 |  | *세 줄이 거의 동시에 도착했다. 답장창에는 벌써 'ㅋ |
| 130 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 다른 알림이 보인다.* |
| 131 | `night_late_transition` | {name} | room_my | 없음 |  |  | *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시 |
| 132 | `night_late_branch` | {name} | room_my | 없음 |  |  | *화면이 밝아진다.* |
| 133 | `night_dain_late_1` | 다인 | room_my | dain_normal | 0.35 |  | *야 아직 안 잤지?* |
| 134 | `night_dain_late_2` | 다인 | room_my | dain_normal | 0.35 |  | *내일 아침 운동 같이 할 사람 구한다* |
| 135 | `night_dain_late_3` | 다인 | room_my | dain_normal | 0.35 |  | *거절은 안 받음 ㅋㅋ* |
| 136 | `night_dain_late_4` | {name} | room_my | dain_normal | 0.35 |  | *답장창에는 이미 '콜'이 찍혀 있다.* |
| 137 | `night_dain_late_4_b` | {name} | room_my | dain_normal | 0.35 |  | *다인의 메시지 아래에 이모티콘이 줄줄이 붙어 있다.  |
| 138 | `night_end_1` | {name} | room_my | 없음 |  |  | *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교 |
| 139 | `night_end_3` | {name} | room_my | 없음 |  |  | *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을  |
| | **Day 2** | | | | | | |
| 140 | `morning2_start` | {name} | room_school | 없음 |  |  | *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.* |
| 141 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 142 | `morning2_greet_dain_1` | 다인 | room_school | dain_laugh |  |  | 야! 어제 재밌었다, 오늘도 같이 뭐 하자! |
| 143 | `morning2_greet_dain_2` | 다인 | room_school | dain_laugh |  |  | *뒤에서 어깨를 탁 친다.* |
| 144 | `morning2_greet_dain_others` | 서연 | room_school | seyoun_normal |  |  | *클립보드를 넘기며 지나간다.* |
| 145 | `morning2_greet_dain_others_seo` | 서연 | room_school | seyoun_normal |  |  | 에너지 좋다. |
| 146 | `morning2_greet_dain_others_yuna` | {name} | room_school | yuna_bored |  |  | *유나의 펜촉이 쪽지 한가운데 잉크점을 남긴다.* |
| 147 | `morning2_greet_dain_others_2` | {name} | room_school | dain_laugh |  |  | *교실 문이 닫힌 뒤 클립보드 두드리는 소리가 복도에서 |
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
| 163 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *쉬는 시간. 복도로 나왔다.* |
| 164 | `morning2_break_1` | {name} | school_hallway | 없음 |  |  | *서연의 클립보드 끝이 책상에 톡 닿는다. 답할 틈도  |
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
| 180 | `lunch2_yuna_1` | {name} | yuna_hideout | yuna_normal |  |  | *본관보다 오래된 도서관 별관에는 학생이 거의 없다.  |
| 181 | `lunch2_yuna_intro_check` |  | yuna_hideout | yuna_normal |  |  |  |
| 182 | `lunch2_yuna_3` | 유나 | yuna_hideout | yuna_normal |  |  | 왔네. |
| 183 | `lunch2_yuna_4` | {name} | yuna_hideout | yuna_normal |  |  | 쪽지 받았거든. |
| 184 | `lunch2_yuna_5` | 유나 | yuna_hideout | yuna_normal |  |  | 안 올 수도 있었는데. |
| 185 | `lunch2_yuna_6` | {name} | yuna_hideout | yuna_normal |  |  | 왜? |
| 186 | `lunch2_yuna_7` | 유나 | yuna_hideout | yuna_normal |  |  | 시끄러운 애랑 같이 있길래. 그쪽이 더 재밌잖아. |
| 187 | `lunch2_yuna_8` | {name} | yuna_hideout | yuna_normal |  |  | 피난처가 필요할 때도 있어. |
| 188 | `lunch2_yuna_9` | 유나 | yuna_hideout | yuna_smile |  |  | *책장을 한 장 넘기고 맞은편 소파의 구겨진 쿠션을 손 |
| 189 | `lunch2_yuna_10` | 유나 | yuna_hideout | yuna_normal |  |  | 그래. |
| 190 | `lunch2_yuna_11` | 유나 | yuna_hideout | yuna_normal |  |  | *유나가 별관 안쪽으로 앞장선다. 발소리가 낮게 울리는 |
| 191 | `lunch2_yuna_13` | {name} | yuna_hideout | yuna_normal |  |  | 여기 뭐야? 비밀 독서실? |
| 192 | `lunch2_yuna_14` | 유나 | yuna_hideout | yuna_normal |  |  | 여기 아는 사람 거의 없어. |
| 193 | `lunch2_yuna_15` | 유나 | yuna_hideout | yuna_normal |  |  | *소파에 앉아 가방을 바닥에 내려놓고 한 칸을 비운다. |
| 194 | `lunch2_yuna_16` | 유나 | yuna_hideout | yuna_normal |  |  | 나랑 한 명 더 있었는데. |
| 195 | `lunch2_yuna_17` | {name} | yuna_hideout | yuna_normal |  |  | 있었는데? |
| 196 | `lunch2_yuna_17_b` | 유나 | yuna_hideout | yuna_normal |  |  | *책갈피 끝이 페이지 사이로 천천히 사라진다. 유나는  |
| 197 | `lunch2_yuna_choice` | {name} | yuna_hideout | yuna_normal |  |  | *'있었는데' 뒤에 말이 없다. 유나는 책갈피 끝을 책 |
| 198 | `lunch2_yuna_c2_1` | {name} | yuna_hideout | yuna_normal |  |  | *옆에 앉자 유나는 자기 책 더미에서 한 권을 꺼내 내 |
| 199 | `lunch2_yuna_c2_3` | 유나 | yuna_hideout | yuna_normal |  |  | 읽어. |
| 200 | `lunch2_yuna_c2_4` | {name} | yuna_hideout | yuna_normal |  |  | *책을 펼친다. 두 사람의 페이지가 번갈아 넘어가고 창 |
| 201 | `lunch2_yuna_c2_6` | 유나 | yuna_hideout | yuna_normal |  |  | 여기가 좋은 이유. |
| 202 | `lunch2_yuna_c2_7` | {name} | yuna_hideout | yuna_normal |  |  | 응? |
| 203 | `lunch2_yuna_c2_8` | 유나 | yuna_hideout | yuna_normal |  |  | 조용해서. — 근데 혼자가 아니어서. |
| 204 | `lunch2_yuna_c2_9` | 유나 | yuna_hideout | yuna_normal |  |  | *책장 쪽으로 돌아서지만 책은 한동안 같은 페이지에 열 |
| 205 | `lunch2_yuna_end` | {name} | yuna_hideout | yuna_normal |  |  | *문을 닫기 전 돌아보자 유나는 '있었는데'에서 멈춘  |
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
| 232 | `after2_dain_end` | {name} | store | dain_laugh |  | 🌅 | *다인이 떡볶이 컵을 내 쪽으로 밀어 두고 자기 몫 젓 |
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
| 243 | `after2_dain_rival_seo_check` |  | store | 없음 |  | 🌅 |  |
| 244 | `after2_dain_rival_seo_low` | {name} | store | seyoun_normal |  | 🌅 | *서연이 가게 앞을 지나며 두 사람에게 고개를 숙인다. |
| 245 | `after2_dain_rival_yuna_check` |  | store | 없음 |  | 🌅 |  |
| 246 | `after2_dain_rival_yuna_mid` | {name} | store | yuna_normal |  | 🌅 | *가게 앞을 지나던 유나가 이어폰 한쪽을 빼려다 테이블 |
| 247 | `after2_dain_return` | {name} | school | dain_shy |  | 🌅 | *학교로 돌아오는 길. 교문 앞에 다다랐다.* |
| 248 | `after2_group_dain_companion` | 다인과 동행 | gym | 없음 |  | 🌅 | *체육관과 별관에서 들은 설명이 서로 어긋난다. 다인이 |
| 249 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.* |
| 250 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 251 | `night2_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저  |
| 252 | `night2_msg_1` | {name} | room_my | 없음 |  |  | *세 명에게서 메시지가 왔다.* |
| 253 | `night2_msg_dain_specific` | 다인 | room_my | dain_normal | 0.35 |  | 야, 오늘 떡볶이 맛있었다. |
| 254 | `night2_msg_dain_specific_2` | 다인 | room_my | dain_normal | 0.35 |  | 내일도 내기하자. 종목 바꿔서. |
| 255 | `night2_msg_seo_general` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 점심에 옥상 열어놓을게. 와 |
| 256 | `night2_msg_yuna_general` | 유나 | room_my | yuna_normal | 0.35 |  | 내일 별관 올 거야? |
| 257 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에  |
| 258 | `night2_choice` | {name} | room_my | 없음 |  |  | *누구에게 먼저 답장할까?* |
| 259 | `night2_reply_yuna_1` | {name} | room_my | yuna_normal | 0.35 |  | 아직 반 정도. 재밌어 |
| 260 | `night2_reply_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | 다행이네 |
| 261 | `night2_reply_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *답장창이 한동안 비어 있다. 그러다 새 말풍선이 올라 |
| 262 | `night2_reply_yuna_4` | 유나 | room_my | yuna_normal | 0.35 |  | 아까 재생목록. 세 번째 곡도 들어봐 |
| 263 | `night2_reply_yuna_5` | {name} | room_my | yuna_normal | 0.35 |  | *유나가 공유한 재생목록을 다시 연다. 세 번째 곡은  |
| 264 | `night2_reply_yuna_6` | 유나 | room_my | yuna_normal | 0.35 |  | 끝까지 들어봐 |
| 265 | `night2_reply_yuna_6_b` | {name} | room_my | yuna_normal | 0.35 |  | *이어폰을 끼고 재생 버튼을 누른다. 피아노 뒤로 낮은 |
| 266 | `night2_reply_yuna_6_c` | {name} | room_my | yuna_normal | 0.35 |  | *곡이 끝나고 재생 화면의 진행 바가 마지막 칸에 멈춘 |
| 267 | `night2_reply_yuna_7` | {name} | room_my | yuna_normal | 0.35 |  | *재생목록 제목 아래에 유나가 남긴 짧은 메모가 보인다 |
| 268 | `night2_reply_yuna_react_default` | 유나 | room_my | yuna_normal | 0.35 |  | 응. 잘 자. |
| 269 | `night2_yuna_freetalk` | 유나 | room_my | yuna_normal | 0.35 | 🌙 | 잠깐. 아직 깨어 있으면... 조금만 더 얘기할래? |
| 270 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 또 다른 알림이 보인다.* |
| 271 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 보내고 핸드폰을 내려놓았다.* |
| 272 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이,  |
| 273 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 |
| 274 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *메모장에 줄줄이 남은 보내지 않은 문장. '선생님,  |
| 275 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 메모가 마지막이다. 그 아래 39번째에는 제 |
| 276 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 |
| 277 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로 |
| 278 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보 |
| 279 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화 |
| 280 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 |
| 281 | `night2_end_2_b` | {name} | room_my | 없음 |  |  | *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있 |
| 282 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.* |
| 283 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을  |
| 284 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 |
| | **Day 3** | | | | | | |
| 285 | `morning3_start` | {name} | school | 없음 |  |  | *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯 |
| 286 | `morning3_start_2` | {name} | school | 없음 |  |  | *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군 |
| 287 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 288 | `morning3_dain_gate_1` | {name} | school | dain_normal |  |  | *교문 근처에서 다인이 전력으로 달려온다.* |
| 289 | `morning3_dain_gate_cold_1` | 다인 | school | dain_normal |  |  | *다른 친구들과 뛰어간다.* |
| 290 | `morning3_dain_gate_cold_2` | 다인 | school | dain_normal |  |  | 어, 안녕! |
| 291 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실에 들어서자 서연의 펜이 멈추고 다인의 의자가 뒤 |
| 292 | `morning3_react_dain_1` | 서연 | room_school | seyoun_normal |  |  | 아침부터 체력 소모가 심하네. 점심에 도시락 줄까? |
| 293 | `morning3_react_dain_2` | 유나 | room_school | yuna_normal |  |  | *고개를 들지 않은 채 종이 귀퉁이에 짧은 선을 긋는다 |
| 294 | `morning3_date_intro` | {name} | room_school | 없음 |  |  | *1교시가 끝났다. 쉬는 시간마다 누군가 말을 건다.* |
| 295 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *쉬는 시간, 복도로 나왔다. 서연이 먼저 걸음을 맞춘 |
| 296 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | 이번 주말에 시간 있어? 공원에 같이 가자. |
| 297 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끈다. 눈이 마주치 |
| 298 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼  |
| 299 | `morning3_date_dain_2` | 다인 | room_school | dain_normal |  |  | *서연이 아직 교실 문 앞에 서 있다. 다인은 이쪽을  |
| 300 | `morning3_date_dain_choice` | 다인 | room_school | dain_normal |  |  | *서연의 발소리가 멎는다. 다인은 대답을 기다린다.* |
| 301 | `morning3_date_dain_accept` | {name} | room_school | dain_laugh |  |  | *다인과 주말 약속을 잡았다. 다인이 웃자 복도에서 서 |
| 302 | `morning3_date_dain_decline_narr` | 다인 | room_school | dain_laugh |  |  | *다인은 웃으며 자기 자리로 돌아간다. 종이 치기 직전 |
| 303 | `morning3_date_dain_decline_inner_2` | {name} | room_school | dain_laugh |  |  | *다인이 자리로 돌아간 뒤, 종이 치기 직전의 교실만  |
| 304 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다 |
| 305 | `morning3_date_yuna_1_b` | 서연 | room_school | seyoun_normal |  |  | 유나. 쪽지로 물으면 다른 사람은 못 듣잖아. |
| 306 | `morning3_date_yuna_2` | {name} | room_school | yuna_normal |  |  | *'주말. 헌책방. 먼저 잡힌 약속이 있어도, 네가 오 |
| 307 | `morning3_date_yuna_choice` | {name} | room_school | yuna_normal |  |  | *쪽지를 읽는 동안 유나는 서연과 다인을 차례로 본다. |
| 308 | `morning3_date_yuna_accept` | {name} | room_school | yuna_shy |  |  | *쪽지 뒷면에 '갈게'라고 적는다. 유나가 종이를 접는 |
| 309 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 310 | `morning3_multi_from_dain` |  | room_school | 없음 |  |  |  |
| 311 | `morning3_end` | {name} | room_school | 없음 |  |  | *수업 종료 종이 울리고 곧 점심시간이 된다.* |
| 312 | `morning3_end_b` | 유나 | room_school | yuna_normal |  |  | 맛있네. |
| 313 | `lunch3_start` | {name} | room_school | yuna_normal |  |  | *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. |
| 314 | `lunch3_start_2_b` | 다인 | room_school | dain_normal |  |  | *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가 |
| 315 | `lunch3_meal_1` | 다인 | room_school | dain_laugh |  |  | 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고  |
| 316 | `lunch3_meal_2` | {name} | room_school | dain_laugh |  |  | 그건 내 거... |
| 317 | `lunch3_meal_3` | 서연 | room_school | seyoun_normal |  |  | 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점 |
| 318 | `lunch3_meal_4` | {name} | room_school | seyoun_normal |  |  | 점수 매기지 마. |
| 319 | `lunch3_meal_5` | 서연 | room_school | seyoun_normal |  |  | 10점 만점이야. 나쁜 거 아닌데? |
| 320 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다 |
| 321 | `lunch3_meal_7` | {name} | room_school | seyoun_normal |  |  | 유나, 그건 내가 제일 좋아하는 건데. |
| 322 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임 |
| 323 | `lunch3_meal_8` | {name} | room_school | yuna_bored |  |  | *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다. |
| 324 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. |
| 325 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓 |
| 326 | `lunch3_meal_10_d` | 다인 | room_school | dain_laugh |  |  | *"다 같이?" 다인은 웃지만 의자를 당기지 않는다.* |
| 327 | `lunch3_meal_11` | {name} | room_school | yuna_bored |  |  | *누구에게 줄까?* |
| 328 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *마지막 반찬을 누구에게 줄지 고민한다.* |
| 329 | `lunch3_share_1` | {name} | room_school | yuna_bored |  |  | *다 같이 나눠 먹자고 하자 셋이 웃는다. 웃음이 끊긴 |
| 330 | `lunch3_share_solo` | {name} | room_school | yuna_normal |  |  | *셋이 계란말이를 조금씩 나눠 먹는다. 반으로 갈린 마 |
| 331 | `lunch3_end` | {name} | room_school | 없음 |  |  | *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다 |
| 332 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육 |
| 333 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다 |
| 334 | `after3_auto_dain` | {name} | school_hallway | 없음 |  | 🌅 | *다인과 약속이 있다. 체육관으로 간다.* |
| 335 | `after3_rivals_for_dain_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 336 | `after3_rival_seo_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 337 | `after3_rival_seo_affinity` |  | school_hallway | 없음 |  | 🌅 |  |
| 338 | `after3_rival_seo_done` |  | school_hallway | 없음 |  | 🌅 |  |
| 339 | `after3_rival_yuna_check` |  | library_old | 없음 |  | 🌅 |  |
| 340 | `after3_rival_yuna_affinity` |  | library_old | 없음 |  | 🌅 |  |
| 341 | `after3_rival_yuna_done` |  | school_hallway | 없음 |  | 🌅 |  |
| 342 | `after3_dain_affinity_check` |  | gym | 없음 |  | 🌅 |  |
| 343 | `after3_dain_partial_1` | {name} | gym | dain_sweat |  | 🌅 | *체육관 안에서 다인이 무릎 보호대를 고쳐 찬다. 일어 |
| 344 | `after3_dain_partial_2` | 다인 | gym | dain_normal |  | 🌅 | 좀 쉬면 돼. 오늘은 먼저 가. 내일 보자. |
| 345 | `after3_dain_end_first` | 다인 | gym | dain_shy |  | 🌅 | *다인이 주먹으로 어깨를 치고는 바로 손을 주머니에 넣 |
| 346 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.* |
| 347 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 348 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 349 | `minsu_d3_check` | {name} | school | 없음 |  | 🌅 |  |
| 350 | `minsu_d3_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문 앞에 민수가 서 있다.* |
| 351 | `minsu_d3_2` | 민수 | school | 없음 |  | 🌅 | 봤다. |
| 352 | `minsu_d3_3` | 민수 | school | 없음 |  | 🌅 | 점심때. 그리고 방금 서연 표정도. |
| 353 | `minsu_d3_4` | 민수 | school | 없음 |  | 🌅 | 어제 내가 뭐랬냐. 나중에 셋 다 울면 네 탓이라고 했 |
| 354 | `minsu_d3_5` | 민수 | school | 없음 |  | 🌅 | 옆에서 보기 좀 힘들다. 걔들 다 좋은 애들이야. 네가 |
| 355 | `minsu_d3_5b` | 민수 | school | 없음 |  | 🌅 | *민수는 빨대 포장지를 끝까지 접어 테이블 위에 내려놓 |
| 356 | `minsu_d3_6` | {name} | school | 없음 |  | 🌅 | 맞아. |
| 357 | `minsu_d3_6b` | 민수 | school | 없음 |  | 🌅 | 전 학교에서 뭔 일 있었는지 안 물어볼게. 근데 하나만 |
| 358 | `minsu_d3_7` | 민수 | school | 없음 |  | 🌅 | 거절도 배려야. 안 되는 관계에 계속 여지 주는 것보다 |
| 359 | `minsu_d3_8` | {name} | school | 없음 |  | 🌅 | *거절도 배려다. 전 학교에서 나는 소정이에게 고백할  |
| 360 | `minsu_d3_9` | 민수 | school | 없음 |  | 🌅 | *민수는 더 말하지 않고 끝까지 접은 빨대 포장지를 내 |
| 361 | `minsu_d3_10` | 민수 | school | 없음 |  | 🌅 | 내일 학교에서 보자. 진지하게 생각해. |
| 362 | `night3_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 가방을 의자에 걸어 둔다.* |
| 363 | `night3_start_2` | {name} | room_my | 없음 |  |  | *책상 위에 엎어 둔 핸드폰 화면을 켠다.* |
| 364 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *읽지 않은 메시지가 떠 있다.* |
| 365 | `night3_dream_1` | {name} | school | 없음 |  |  | *꿈속에서 누군가와 나란히 걷는다. 얼굴은 보이지 않고 |
| 366 | `night3_dream_2_b` | {name} | school | 없음 |  |  | *메모장을 닫았다. 내일 보낼 문장은 아직 없다.* |
| 367 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *커튼 사이로 들어온 아침 햇살에 눈을 뜬다. 핸드폰  |
| 368 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *'삭제하시겠습니까?' 확인 창이 뜬다. 손가락이 버튼 |
| 369 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *1초 동안 화면을 내려다본다. 소정이 책상의 낙서와  |
| 370 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *그래. 삭제 버튼에 올린 손가락으로 화면을 누른다.* |
| 371 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼을 누르지 않고 사진을 새 폴더로 옮긴다.  |
| 372 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *'거절도 네가 해야 할 일이야.' 민수의 말이 떠오른 |
| 373 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *갤러리에서 소정이 사진이 사라지고 빈칸만 남는다.* |
| 374 | `night3_faithful_reflect_4_b` | {name} | room_my | 없음 |  |  | *빈 앨범 썸네일 위를 엄지로 문지른다.* |
| 375 | `night3_faithful_reflect_4_c` | {name} | room_my | 없음 |  |  | *핸드폰을 덮자 검은 화면에 갤러리의 빈칸이 겹쳐 보인 |
| 376 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *알람이 울리기 전에 눈을 떴다.* |
| 377 | `night3_end` | {name} | room_my | 없음 |  |  | *방 불을 끄고 핸드폰을 엎어 둔다.* |
| | **Day 4** | | | | | | |
| 378 | `morning4_start` | {name} | room_my | 없음 |  |  | *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다 |
| 379 | `morning4_nightmare_check` |  | room_my | 없음 |  |  |  |
| 380 | `minsu_cheer_1` | {name} | room_my | 없음 |  |  | *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.* |
| 381 | `minsu_cheer_1_b` | 민수 | room_my | minsu_normal | 0.35 |  | *야 오늘 데이트라며?* |
| 382 | `minsu_cheer_1_c` | {name} | room_my | minsu_normal | 0.35 |  | *어떻게 알았어* |
| 383 | `minsu_cheer_1_d` | 민수 | room_my | minsu_normal | 0.35 |  | *다인이가 단톡방에 올림. 내일 약속 있음, 이라고* |
| 384 | `minsu_cheer_2` | 민수 | room_my | minsu_normal | 0.35 |  | 잘하고 와ㅋㅋ |
| 385 | `minsu_cheer_3` | {name} | room_my | minsu_normal | 0.35 |  | 알아. |
| 386 | `minsu_cheer_4_branch` |  | room_my | 없음 |  |  |  |
| 387 | `minsu_cheer_4_ins_single` | {name} | room_my | minsu_normal | 0.35 |  | *핸드폰 캘린더를 본다. 오늘 약속은 하나뿐이다.* |
| 388 | `morning4_start_2` | {name} | room_my | 없음 |  |  | *심호흡하고 약속 메시지를 다시 확인한다.* |
| 389 | `morning4_dain_msg_1` | 다인 | room_my | dain_sweat | 0.35 |  | 오늘이다. 체육관 앞 저녁 6시. 아, 왜 이렇게 떨리 |
| 390 | `morning4_hidden_check` | {name} | room_my | 없음 |  |  | *주말 아침, 학교 앞 사거리에서 신호를 기다린다.* |
| 391 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 392 | `morning4_end` | {name} | room_my | 없음 |  |  | *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 |
| 393 | `date_dain_1` | {name} | gym | dain_laugh |  |  | *체육관 앞. 다인이 뛰어온다. 캡모자에 운동복.* |
| 394 | `date_dain_tier_check` |  | gym | 없음 |  |  |  |
| 395 | `date_dain_tentative_1` | 다인 | gym | dain_normal |  |  | 오늘은 오래 놀지 말자. 무릎도 좀 쉬어야 하고. |
| 396 | `date_dain_tentative_2` | {name} | gym | dain_normal |  |  | *자판기 앞에서 음료 하나씩 마신다. 다인은 체육관 문 |
| 397 | `date_dain_tentative_3` | 다인 | street | dain_normal |  |  | 학교에서 봐. 다음 약속은 그때 정하자. |
| 398 | `pre_confess_minsu` | 민수 | street | minsu_smirk | 0.35 |  | 야, 데이트 중이지? 한마디만 할게 |
| 399 | `pre_confess_minsu_2` | 민수 | street | minsu_smirk | 0.35 |  | 말 돌리지 말고 제대로 해 |
| 400 | `pre_confess_callback` | {name} | street | minsu_smirk |  |  | *주머니 속 핸드폰 모서리가 손바닥에 눌린다. 알림은  |
| 401 | `confess_seo_1` | {name} | top_school | 없음 |  | 🌅 | *데이트가 끝났다. 교문 대신 옥상으로 올라왔다.* |
| 402 | `confess_dain_1` | {name} | gym | dain_laugh |  | 🌅 | *데이트가 끝나자 다인이 학교 쪽으로 성큼 앞서간다.* |
| 403 | `confess_dain_2` | 다인 | gym | dain_normal |  | 🌅 | 마지막. 한 군데만 더 가자. |
| 404 | `confess_dain_3` | {name} | gym | dain_normal |  | 🌅 | *빈 체육관. 서쪽 창문의 빛이 첫날 내기했던 코트 선 |
| 405 | `confess_dain_4` | 다인 | gym | dain_normal |  | 🌅 | *공 하나를 두 손으로 쥔다. 손가락 마디가 공 표면에 |
| 406 | `confess_dain_5` | {name} | gym | dain_normal |  | 🌅 | *공이 바닥에 한 번 튄다.* |
| 407 | `confess_dain_choice` | 다인 | gym | dain_sweat |  | 🌅 | *공이 바닥에 한 번 튄다. 다인의 손이 반 박자 늦어 |
| 408 | `confess_dain_no_2` | {name} | gym | dain_normal |  | 🌅 | *토스를 올려준다. 말은 나오지 않는다.* |
| 409 | `confess_dain_no_3` | 다인 | gym | dain_sweat |  | 🌅 | *다인이 배구공을 두 번 튀긴다. 세 번째로 튀어 오른 |
| 410 | `confess_dain_no_4` | 다인 | gym | dain_sad |  | 🌅 | 다음에는 말해. |
| 411 | `confess_dain_no_4_b` | {name} | gym | dain_sad |  | 🌅 | *다인의 목소리가 체육관 천장으로 작게 흩어진다. 손목 |
| 412 | `day4_night_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 옷소매에 공원 흙과 학교 먼지가 조금 |
| 413 | `day4_night_branch` | 시스템 | room_my | 없음 |  |  |  |
| 414 | `day4_student_night_branch` |  | room_my | 없음 |  |  |  |
| 415 | `day4_night_regret` | {name} | room_my | 없음 |  |  | *집으로 돌아온 뒤에도 채팅창에는 입력하다 만 문장이  |
| 416 | `day4_night_regret_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 417 | `day4_night_regret_msg_dain` | 다인 | room_my | dain_normal | 0.35 |  | 야, 오늘 재밌었다. 나 혼자 들뜬 거 아니었지? |
| 418 | `day4_night_regret_reply` | {name} | room_my | 없음 |  |  | *답장을 쓰다 지운다. 입력창에는 받침 하나만 남았다가 |
| 419 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 420 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *알람을 일요일 오전으로 맞추고 방 불을 끈다. 전하지 |
| 421 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안 시계가 자정 쪽으로 넘어간다. 휴대폰 화면도  |
| | **Day 5** | | | | | | |
| 422 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소 |
| 423 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 424 | `morning5_start_b` | {name} | room_school | 없음 |  |  | *교실에 들어서자 세 가지가 한꺼번에 눈에 들어온다.  |
| 425 | `morning5_start_2_b` | {name} | room_school | 없음 |  |  | *책상 위에 쪽지가 놓여 있다. 서연의 글씨.* |
| 426 | `morning5_mood_check` | 시스템 | room_school | 없음 |  |  |  |
| 427 | `morning5_mood_low` | {name} | room_school | 없음 |  |  | 마지막 날. 잠금화면에 남은 이름 셋을 차례로 누른다. |
| 428 | `morning5_gate` | {name} | school | 없음 |  |  | *교문 앞에서 소매를 걷어 올린다. 손목에 남던 붉은  |
| 429 | `morning5_seo_note_1` | {name} | room_school | seyoun_normal |  |  | *책상 위에 쪽지가 놓여 있다. 서연의 글씨. — '오 |
| 430 | `morning5_seo_note_1_b` | {name} | school_hallway | 없음 |  |  | *복도 문예부 전시 코너를 지나다 게시판의 빈 압정 네 |
| 431 | `morning5_seo_note_1_c` | {name} | school_hallway | 없음 |  |  | *게시판에 단편소설이 붙어 있다. 제목: '도서관에서  |
| 432 | `morning5_yuna_story_1` | {name} | school_hallway | yuna_normal |  |  | *소설 속 인물은 도서관에서 잠든 누군가의 어깨에 담요 |
| 433 | `morning5_yuna_story_2` | {name} | school_hallway | 없음 |  |  | *마지막 문장. '그 사람이 눈을 떴을 때, 나는 이미 |
| 434 | `morning5_yuna_story_4` | {name} | school_hallway | yuna_normal |  |  | *게시판 아래 구석에는 작은 글씨가 남아 있다. '이건 |
| 435 | `morning5_return_class` | {name} | room_school | dain_normal |  |  | *교실로 돌아오니 다인이 기다리고 있다.* |
| 436 | `morning5_dain_1` | 다인 | room_school | dain_normal |  |  | 야, 오늘 체육 이벤트 파트너로 너 써놨어. |
| 437 | `morning5_dain_1_b` | {name} | room_school | dain_normal |  |  | 허락도 없이? |
| 438 | `morning5_dain_2` | 다인 | room_school | dain_laugh |  |  | 늦으면 화낸다? |
| 439 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *행사 준비 시간. 복도를 걷는데 — 빈 교실 앞을 지 |
| 440 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *행사 중간 쉬는 시간. 보건실 앞을 지나간다.* |
| 441 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 442 | `morning5_sojeong_1` | {name} | room_school | 없음 |  |  | *휴대폰 메모 앱을 연다. '소정에게'로 시작하는 빈  |
| 443 | `morning5_sojeong_2` | {name} | room_school | 없음 |  |  | *마흔 번째 초안은 쓰지 않는다. 가장 짧은 문장을 골 |
| 444 | `morning5_sojeong_3` | {name} | room_school | 없음 |  |  | 그때 네 책상과 낙서를 보고도 선생님께 말하지 않았어. |
| 445 | `morning5_sojeong_4` | {name} | room_school | 없음 |  |  | *전송 표시가 뜬다. 읽음 표시는 기다리지 않고 대화방 |
| 446 | `morning5_sojeong_5` | {name} | room_school | 없음 |  |  | *지금 담임에게도 메시지를 보낸다. '전학 오기 전 학 |
| 447 | `morning5_route_branch` |  | room_school | 없음 |  |  |  |
| 448 | `morning5_end` | {name} | room_school | 없음 |  |  | *세 방향에서 온 쪽지와 알림을 책상 위에 나란히 둔다 |
| 449 | `tour_dain_1_check` | {name} | gym | 없음 |  |  | *체육관으로 간다.* |
| 450 | `tour_dain_low` | 다인 | gym | dain_normal |  |  | *체육관 문 앞에서 다인을 만난다. 다인은 공을 들고  |
| 451 | `after5_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 452 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *행사가 끝나갈 무렵, 복도에서 선택하지 않은 두 사람 |
| 453 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 454 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다.* |
| 455 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다. 서연은 잠시 멈췄다가 고개 |
| 456 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 457 | `after5_farewell_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나가 다가온다. 아무 말 없이 책 한 |
| 458 | `after5_farewell_yuna_low` | 유나 | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나와 눈이 마주친다. 유나는 들고 있 |
| 459 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 460 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *석양이 교정 창문마다 걸린다. 방송실에서 행사 종료  |
| 461 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 462 | `after5_last_chance_1` | {name} | school_back | 없음 |  | 🌅 | *행사장 스피커 전원이 꺼진다. 갈림길 안내판 아래에서 |
| 463 | `after5_last_chance_2` | {name} | school_back | 없음 |  | 🌅 | *주머니 속 휴대폰을 꺼낸다. 검은 화면에 행사 현수막 |
| 464 | `after5_last_chance_route_check` |  | school_back | 없음 |  | 🌅 |  |
| 465 | `after5_last_chance_dain_history_check` |  | school_back | 없음 |  | 🌅 |  |
| 466 | `after5_last_chance_dain_postponed` | 다인 | school_back | dain_normal |  | 🌅 | 어제 못 끝낸 말, 오늘은 끝까지 들어. |
| 467 | `after5_last_chance_dain_aff_check` |  | school_back | 없음 |  | 🌅 |  |
| 468 | `after5_last_chance_dain_low_1` | {name} | school_back | 없음 |  | 🌅 | 다인아. |
| 469 | `after5_last_chance_dain_low_2` | 다인 | school_back | dain_sad |  | 🌅 | *한 걸음 지나친 뒤 돌아온다. 배구공을 가슴 앞에 안 |
| 470 | `after5_last_chance_choice` | {name} | school_back | 없음 |  | 🌅 | *손바닥 안에서 핸드폰이 눌린다.* |
| 471 | `after5_confess_yes` | {name} | school_back | 없음 |  | 🌅 | *휴대폰을 주머니에 넣고 이름을 부른다.* |
| 472 | `after5_confess_yes_2` | {name} | school_back | 없음 |  | 🌅 | 나, 너한테 할 말이 있어. |
| 473 | `after5_confess_aff_dain` |  | school_back | 없음 |  | 🌅 |  |
| 474 | `after5_confess_react_dain_low` | 다인 | school_back | dain_sad |  | 🌅 | *배구공의 홈을 엄지로 따라간다.* 들었어. 바로 웃기 |
| 475 | `after5_confess_fail_walk_1` | {name} | school_back | 없음 |  | 🌅 | *해가 더 내려앉는다. 같은 쪽으로 걷기만 한다.* |
| 476 | `after5_confess_fail_walk_2` | {name} | park | 없음 |  | 🌅 | *답을 못 낸 채 공원 쪽으로 걸었다.* |
| 477 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 478 | `ending_last_chance_resolve` | 시스템 | park | 없음 |  |  |  |
| 479 | `ending_confessed_aff_check` | 시스템 | park | 없음 |  |  |  |
| 480 | `ending_confessed_aff_dain` | 시스템 | gym | 없음 |  |  |  |
| 481 | `day5_ending_confess_fail` | {name} | park | 없음 |  |  | *공원까지 걸어와 겨우 말했다. 대답을 기다리는 동안  |
| 482 | `confess_fail_cg_dain` | 다인 | ending_confess_fail_dain | 없음 |  |  | *눈가를 훔치고 웃어 보이려 하지만 목소리는 분명하다. |
| 483 | `confess_fail_1` | {name} | ending_bittersweet | 없음 |  |  | *며칠 뒤, 비 오는 학교 정문. 우산 아래서 멀어지는 |
| 484 | `confess_fail_2` | {name} | ending_bittersweet | 없음 |  |  | *그 자리에 선 채 대화방을 연다. 썼다 지운 끝에 한 |
| 485 | `confess_fail_3` | {name} | ending_bittersweet | 없음 |  |  | *'알겠어. 답해줘서 고마워.'를 보내고 휴대폰을 내려 |
| 486 | `confess_fail_4` | {name} | ending_bittersweet | 없음 |  |  | *읽음 표시가 붙는다. 답장은 오지 않는다. 더 보내지 |
| 487 | `confess_fail_5` | 시스템 | ending_bittersweet | 없음 |  |  | ─── CONFESSION REJECTED END ── |
| 488 | `day5_credits` |  | school | 없음 |  |  |  |
| 489 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### day5_dain_ending_freetalk_bittersweet

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_dain_choice`: (선택)
- `after_end`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_yuna_choice`: (선택)
- `after2_choice`: (선택)
- `night2_choice`: (선택)
- `morning3_date_dain_choice`: (선택)
- `morning3_date_yuna_choice`: (선택)
- `lunch3_choice`: (선택)
- `confess_dain_choice`: (선택)
- `wall_dain_glimpse_4_c`: (선택)
- `morning5_caught_dain_by_yuna`: (선택)
- `morning5_counteroffer_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=-3 유나=15 다인=-43 담임=0 보건=0

<details>
<summary>씬 타임라인 (492씬)</summary>

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
| 59 | `lunch_dain_1` | 다인 | store | dain_laugh |  |  | 도착. 여기가 매점이야. 일단 고르고 봐. |
| 60 | `lunch_dain_1_aff_default` | 다인 | store | dain_normal |  |  | *매점 안은 점심시간이라 북적거린다. 빵 냄새랑 우유  |
| 61 | `lunch_dain_2` | 다인 | store | dain_normal |  |  | 소보로빵에 딸기우유. 이 조합은 실패한 적 없어. |
| 62 | `lunch_dain_3` | {name} | store | dain_normal |  |  | 근데 진 사람이 사준다며. 뭘 하는 거야? |
| 63 | `lunch_dain_4` | 다인 | store | dain_normal |  |  | 가위바위보. 간단하지. |
| 64 | `lunch_dain_5` | {name} | store | dain_normal |  |  | 당연한 건 아닌데. |
| 65 | `lunch_dain_6` | 다인 | store | dain_normal |  |  | 안 하면 네가 사는 걸로 친다? |
| 66 | `lunch_dain_7` | {name} | store | dain_normal |  |  | 하자. |
| 67 | `lunch_dain_8` | {name} | store | dain_normal |  |  | *가위바위보.* |
| 68 | `lunch_dain_9` | 다인 | store | dain_normal |  |  | 가위— 바위— 보! |
| 69 | `lunch_dain_10` | {name} | store | dain_normal |  |  | *가위. 바위. 보. — 다인이 졌다.* |
| 70 | `lunch_dain_11` | 다인 | store | dain_normal |  |  | 어? 나 졌네. 한 판 더. |
| 71 | `lunch_dain_12` | {name} | store | dain_pout |  |  | 약속은 약속이지. |
| 72 | `lunch_dain_12_b` | 다인 | store | dain_pout |  |  | 아, 알았어. 내가 산다. 이모, 소보로 두 개요. |
| 73 | `lunch_dain_14` | 다인 | store | dain_pout |  |  | *동전을 카운터에 탁탁 놓고 소보로 두 개를 받아 든다 |
| 74 | `lunch_dain_15` | {name} | store | dain_normal |  |  | *매점 한쪽 벤치에 앉아 빵을 먹는다.* |
| 75 | `lunch_dain_16` | 다인 | store | dain_normal |  |  | *빵 봉지를 뜯는다.* 야, 너 운동 진짜 안 해? |
| 76 | `lunch_dain_17` | {name} | store | dain_normal |  |  | 왜, 내 체력이 걱정돼? |
| 77 | `lunch_dain_18` | 다인 | store | dain_laugh |  |  | 아니. 나랑 다니려면 체력부터 봐야지. |
| 78 | `lunch_dain_19` | {name} | store | dain_laugh |  |  | 자기 PR인 줄 알았어. |
| 79 | `lunch_dain_20` | 다인 | store | dain_laugh |  |  | PR? 그게 뭔데. |
| 80 | `lunch_dain_21` | {name} | store | dain_normal |  |  | Personal Record. 운동할 때 쓰는 말인데. |
| 81 | `lunch_dain_22` | 다인 | store | dain_normal |  |  | *딸기우유 팩 옆면이 손가락에 눌려 우그러진다.* |
| 82 | `lunch_dain_23` | 다인 | store | dain_laugh |  |  | 오, 그거 알아? 너 운동 쪽 좀 아네? |
| 83 | `lunch_dain_choice` | 다인 | store | dain_laugh |  |  | *빨대를 문 채 상체를 가까이 기울인다.* |
| 84 | `lunch_dain_c2_1` | 다인 | store | dain_laugh |  |  | 그래도 관심은 있는 거잖아. 오늘 방과후 체육관 와.  |
| 85 | `lunch_dain_after` | {name} | store | dain_laugh |  |  | *빵을 다 먹고 일어서는데.* |
| 86 | `lunch_dain_after_2` | 다인 | store | dain_normal |  |  | 야, {name}. |
| 87 | `lunch_dain_after_3` | {name} | store | dain_normal |  |  | 응? |
| 88 | `lunch_dain_after_4` | 다인 | store | dain_normal |  |  | 전학 와서 첫 식사 파트너가 나다? 나름 역사적인데. |
| 89 | `lunch_dain_after_5` | 다인 | store | dain_normal |  |  | *주먹으로 {name}의 어깨를 툭 치고 그대로 한 번 |
| 90 | `lunch_dain_freetalk` | 다인 | store | dain_normal |  |  | *빵 봉지를 접어 주머니에 넣고 벤치 등받이에 기댄다. |
| 91 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *종이 울린다. 점심시간이 끝났다.* |
| 92 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에 |
| 93 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 94 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창 |
| 95 | `after_kakao_5` | {name} | school_hallway | 없음 |  | 🌅 | *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른 |
| 96 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록  |
| 97 | `after1_jealousy_dain_1` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 점심때 매점에서 다인이랑 같이 있는 거 봤는데. 적응  |
| 98 | `after1_jealousy_dain_2` | {name} | school_hallway | seyoun_laugh |  | 🌅 | *서연은 클립보드를 가슴 앞에 세운 채 답을 기다린다. |
| 99 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *복도를 계속 걷는다.* |
| 100 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도를 걷는데 뒤에서 쿵쿵 발소리.* |
| 101 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 조심! |
| 102 | `after_miss_dain_3` | {name} | school_hallway | dain_normal |  | 🌅 | *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 |
| 103 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 피했다? 반사신경 괜찮은데. |
| 104 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 넌 복도에서 왜 전력질주야? |
| 105 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 늦었거든! 체육관 가야 해. 내일 보자, 전학생! |
| 106 | `after_miss_dain_6_b` | {name} | school_hallway | dain_laugh |  | 🌅 | *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을  |
| 107 | `after_miss_dain_7` | {name} | school_hallway | dain_laugh |  | 🌅 | *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아 |
| 108 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으 |
| 109 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 이거 떨어뜨렸어. |
| 110 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피 |
| 111 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌  |
| 112 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 고마워. |
| 113 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피를 책등 사이에 끼우고 돌아선다.* |
| 114 | `after_miss_yuna_4` | {name} | library_old | yuna_normal |  | 🌅 | *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 |
| 115 | `after_miss_seoyeon_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *하교하려는데 복도에서 서연과 마주친다.* |
| 116 | `after_miss_seoyeon_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 아까 어디 갔어? |
| 117 | `after_miss_seoyeon_3` | {name} | school_hallway | seyoun_normal |  | 🌅 | 어디라니? |
| 118 | `after_miss_seoyeon_4` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 옥상 열어놨는데 안 왔네. — 전학생, 배짱이 있어. |
| 119 | `after_miss_seoyeon_5` | {name} | school_hallway | seyoun_normal |  | 🌅 | 기다린 거야? |
| 120 | `after_miss_seoyeon_6` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 바람 쐬러 올라간 건데 문이 열려 있길래. |
| 121 | `after_miss_seoyeon_7` | {name} | school_hallway | seyoun_normal |  | 🌅 | *서연의 클립보드 맨 위에 내 이름이 남아 있다. 체크 |
| 122 | `after_miss_seoyeon_8` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 내일은 빠지지 마. |
| 123 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든 |
| 124 | `night_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄 |
| 125 | `night_start_3` | {name} | room_my | 없음 |  |  | *핸드폰이 울린다. 학교 메신저.* |
| 126 | `night_msg_dain_1` | 다인 | room_my | dain_normal | 0.35 |  | *가위바위보 리벤지 내일이다* |
| 127 | `night_msg_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | *내일은 리벤지다 ㅋㅋ* |
| 128 | `night_msg_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | *오늘 빵값 아직도 아깝다. 진짜.* |
| 129 | `night_msg_dain_4` | {name} | room_my | dain_normal | 0.35 |  | *세 줄이 거의 동시에 도착했다. 답장창에는 벌써 'ㅋ |
| 130 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 다른 알림이 보인다.* |
| 131 | `night_late_transition` | {name} | room_my | 없음 |  |  | *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시 |
| 132 | `night_late_branch` | {name} | room_my | 없음 |  |  | *화면이 밝아진다.* |
| 133 | `night_dain_late_1` | 다인 | room_my | dain_normal | 0.35 |  | *야 아직 안 잤지?* |
| 134 | `night_dain_late_2` | 다인 | room_my | dain_normal | 0.35 |  | *내일 아침 운동 같이 할 사람 구한다* |
| 135 | `night_dain_late_3` | 다인 | room_my | dain_normal | 0.35 |  | *거절은 안 받음 ㅋㅋ* |
| 136 | `night_dain_late_4` | {name} | room_my | dain_normal | 0.35 |  | *답장창에는 이미 '콜'이 찍혀 있다.* |
| 137 | `night_dain_late_4_b` | {name} | room_my | dain_normal | 0.35 |  | *다인의 메시지 아래에 이모티콘이 줄줄이 붙어 있다.  |
| 138 | `night_end_1` | {name} | room_my | 없음 |  |  | *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교 |
| 139 | `night_end_3` | {name} | room_my | 없음 |  |  | *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을  |
| | **Day 2** | | | | | | |
| 140 | `morning2_start` | {name} | room_school | 없음 |  |  | *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.* |
| 141 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 142 | `morning2_greet_dain_1` | 다인 | room_school | dain_laugh |  |  | 야! 어제 재밌었다, 오늘도 같이 뭐 하자! |
| 143 | `morning2_greet_dain_2` | 다인 | room_school | dain_laugh |  |  | *뒤에서 어깨를 탁 친다.* |
| 144 | `morning2_greet_dain_others` | 서연 | room_school | seyoun_normal |  |  | *클립보드를 넘기며 지나간다.* |
| 145 | `morning2_greet_dain_others_seo` | 서연 | room_school | seyoun_normal |  |  | 에너지 좋다. |
| 146 | `morning2_greet_dain_others_yuna` | {name} | room_school | yuna_bored |  |  | *유나의 펜촉이 쪽지 한가운데 잉크점을 남긴다.* |
| 147 | `morning2_greet_dain_others_2` | {name} | room_school | dain_laugh |  |  | *교실 문이 닫힌 뒤 클립보드 두드리는 소리가 복도에서 |
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
| 163 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *쉬는 시간. 복도로 나왔다.* |
| 164 | `morning2_break_1` | {name} | school_hallway | 없음 |  |  | *서연의 클립보드 끝이 책상에 톡 닿는다. 답할 틈도  |
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
| 180 | `lunch2_yuna_1` | {name} | yuna_hideout | yuna_normal |  |  | *본관보다 오래된 도서관 별관에는 학생이 거의 없다.  |
| 181 | `lunch2_yuna_intro_check` |  | yuna_hideout | yuna_normal |  |  |  |
| 182 | `lunch2_yuna_3` | 유나 | yuna_hideout | yuna_normal |  |  | 왔네. |
| 183 | `lunch2_yuna_4` | {name} | yuna_hideout | yuna_normal |  |  | 쪽지 받았거든. |
| 184 | `lunch2_yuna_5` | 유나 | yuna_hideout | yuna_normal |  |  | 안 올 수도 있었는데. |
| 185 | `lunch2_yuna_6` | {name} | yuna_hideout | yuna_normal |  |  | 왜? |
| 186 | `lunch2_yuna_7` | 유나 | yuna_hideout | yuna_normal |  |  | 시끄러운 애랑 같이 있길래. 그쪽이 더 재밌잖아. |
| 187 | `lunch2_yuna_8` | {name} | yuna_hideout | yuna_normal |  |  | 피난처가 필요할 때도 있어. |
| 188 | `lunch2_yuna_9` | 유나 | yuna_hideout | yuna_smile |  |  | *책장을 한 장 넘기고 맞은편 소파의 구겨진 쿠션을 손 |
| 189 | `lunch2_yuna_10` | 유나 | yuna_hideout | yuna_normal |  |  | 그래. |
| 190 | `lunch2_yuna_11` | 유나 | yuna_hideout | yuna_normal |  |  | *유나가 별관 안쪽으로 앞장선다. 발소리가 낮게 울리는 |
| 191 | `lunch2_yuna_13` | {name} | yuna_hideout | yuna_normal |  |  | 여기 뭐야? 비밀 독서실? |
| 192 | `lunch2_yuna_14` | 유나 | yuna_hideout | yuna_normal |  |  | 여기 아는 사람 거의 없어. |
| 193 | `lunch2_yuna_15` | 유나 | yuna_hideout | yuna_normal |  |  | *소파에 앉아 가방을 바닥에 내려놓고 한 칸을 비운다. |
| 194 | `lunch2_yuna_16` | 유나 | yuna_hideout | yuna_normal |  |  | 나랑 한 명 더 있었는데. |
| 195 | `lunch2_yuna_17` | {name} | yuna_hideout | yuna_normal |  |  | 있었는데? |
| 196 | `lunch2_yuna_17_b` | 유나 | yuna_hideout | yuna_normal |  |  | *책갈피 끝이 페이지 사이로 천천히 사라진다. 유나는  |
| 197 | `lunch2_yuna_choice` | {name} | yuna_hideout | yuna_normal |  |  | *'있었는데' 뒤에 말이 없다. 유나는 책갈피 끝을 책 |
| 198 | `lunch2_yuna_c2_1` | {name} | yuna_hideout | yuna_normal |  |  | *옆에 앉자 유나는 자기 책 더미에서 한 권을 꺼내 내 |
| 199 | `lunch2_yuna_c2_3` | 유나 | yuna_hideout | yuna_normal |  |  | 읽어. |
| 200 | `lunch2_yuna_c2_4` | {name} | yuna_hideout | yuna_normal |  |  | *책을 펼친다. 두 사람의 페이지가 번갈아 넘어가고 창 |
| 201 | `lunch2_yuna_c2_6` | 유나 | yuna_hideout | yuna_normal |  |  | 여기가 좋은 이유. |
| 202 | `lunch2_yuna_c2_7` | {name} | yuna_hideout | yuna_normal |  |  | 응? |
| 203 | `lunch2_yuna_c2_8` | 유나 | yuna_hideout | yuna_normal |  |  | 조용해서. — 근데 혼자가 아니어서. |
| 204 | `lunch2_yuna_c2_9` | 유나 | yuna_hideout | yuna_normal |  |  | *책장 쪽으로 돌아서지만 책은 한동안 같은 페이지에 열 |
| 205 | `lunch2_yuna_end` | {name} | yuna_hideout | yuna_normal |  |  | *문을 닫기 전 돌아보자 유나는 '있었는데'에서 멈춘  |
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
| 232 | `after2_dain_end` | {name} | store | dain_laugh |  | 🌅 | *다인이 떡볶이 컵을 내 쪽으로 밀어 두고 자기 몫 젓 |
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
| 243 | `after2_dain_rival_seo_check` |  | store | 없음 |  | 🌅 |  |
| 244 | `after2_dain_rival_seo_low` | {name} | store | seyoun_normal |  | 🌅 | *서연이 가게 앞을 지나며 두 사람에게 고개를 숙인다. |
| 245 | `after2_dain_rival_yuna_check` |  | store | 없음 |  | 🌅 |  |
| 246 | `after2_dain_rival_yuna_mid` | {name} | store | yuna_normal |  | 🌅 | *가게 앞을 지나던 유나가 이어폰 한쪽을 빼려다 테이블 |
| 247 | `after2_dain_return` | {name} | school | dain_shy |  | 🌅 | *학교로 돌아오는 길. 교문 앞에 다다랐다.* |
| 248 | `after2_group_dain_companion` | 다인과 동행 | gym | 없음 |  | 🌅 | *체육관과 별관에서 들은 설명이 서로 어긋난다. 다인이 |
| 249 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.* |
| 250 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 251 | `night2_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저  |
| 252 | `night2_msg_1` | {name} | room_my | 없음 |  |  | *세 명에게서 메시지가 왔다.* |
| 253 | `night2_msg_dain_specific` | 다인 | room_my | dain_normal | 0.35 |  | 야, 오늘 떡볶이 맛있었다. |
| 254 | `night2_msg_dain_specific_2` | 다인 | room_my | dain_normal | 0.35 |  | 내일도 내기하자. 종목 바꿔서. |
| 255 | `night2_msg_seo_general` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 점심에 옥상 열어놓을게. 와 |
| 256 | `night2_msg_yuna_general` | 유나 | room_my | yuna_normal | 0.35 |  | 내일 별관 올 거야? |
| 257 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에  |
| 258 | `night2_choice` | {name} | room_my | 없음 |  |  | *누구에게 먼저 답장할까?* |
| 259 | `night2_reply_yuna_1` | {name} | room_my | yuna_normal | 0.35 |  | 아직 반 정도. 재밌어 |
| 260 | `night2_reply_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | 다행이네 |
| 261 | `night2_reply_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *답장창이 한동안 비어 있다. 그러다 새 말풍선이 올라 |
| 262 | `night2_reply_yuna_4` | 유나 | room_my | yuna_normal | 0.35 |  | 아까 재생목록. 세 번째 곡도 들어봐 |
| 263 | `night2_reply_yuna_5` | {name} | room_my | yuna_normal | 0.35 |  | *유나가 공유한 재생목록을 다시 연다. 세 번째 곡은  |
| 264 | `night2_reply_yuna_6` | 유나 | room_my | yuna_normal | 0.35 |  | 끝까지 들어봐 |
| 265 | `night2_reply_yuna_6_b` | {name} | room_my | yuna_normal | 0.35 |  | *이어폰을 끼고 재생 버튼을 누른다. 피아노 뒤로 낮은 |
| 266 | `night2_reply_yuna_6_c` | {name} | room_my | yuna_normal | 0.35 |  | *곡이 끝나고 재생 화면의 진행 바가 마지막 칸에 멈춘 |
| 267 | `night2_reply_yuna_7` | {name} | room_my | yuna_normal | 0.35 |  | *재생목록 제목 아래에 유나가 남긴 짧은 메모가 보인다 |
| 268 | `night2_reply_yuna_react_default` | 유나 | room_my | yuna_normal | 0.35 |  | 응. 잘 자. |
| 269 | `night2_yuna_freetalk` | 유나 | room_my | yuna_normal | 0.35 | 🌙 | 잠깐. 아직 깨어 있으면... 조금만 더 얘기할래? |
| 270 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 또 다른 알림이 보인다.* |
| 271 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 보내고 핸드폰을 내려놓았다.* |
| 272 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이,  |
| 273 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 |
| 274 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *메모장에 줄줄이 남은 보내지 않은 문장. '선생님,  |
| 275 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 메모가 마지막이다. 그 아래 39번째에는 제 |
| 276 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 |
| 277 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로 |
| 278 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보 |
| 279 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화 |
| 280 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 |
| 281 | `night2_end_2_b` | {name} | room_my | 없음 |  |  | *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있 |
| 282 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.* |
| 283 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을  |
| 284 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 |
| | **Day 3** | | | | | | |
| 285 | `morning3_start` | {name} | school | 없음 |  |  | *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯 |
| 286 | `morning3_start_2` | {name} | school | 없음 |  |  | *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군 |
| 287 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 288 | `morning3_dain_gate_1` | {name} | school | dain_normal |  |  | *교문 근처에서 다인이 전력으로 달려온다.* |
| 289 | `morning3_dain_gate_cold_1` | 다인 | school | dain_normal |  |  | *다른 친구들과 뛰어간다.* |
| 290 | `morning3_dain_gate_cold_2` | 다인 | school | dain_normal |  |  | 어, 안녕! |
| 291 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실에 들어서자 서연의 펜이 멈추고 다인의 의자가 뒤 |
| 292 | `morning3_react_dain_1` | 서연 | room_school | seyoun_normal |  |  | 아침부터 체력 소모가 심하네. 점심에 도시락 줄까? |
| 293 | `morning3_react_dain_2` | 유나 | room_school | yuna_normal |  |  | *고개를 들지 않은 채 종이 귀퉁이에 짧은 선을 긋는다 |
| 294 | `morning3_date_intro` | {name} | room_school | 없음 |  |  | *1교시가 끝났다. 쉬는 시간마다 누군가 말을 건다.* |
| 295 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *쉬는 시간, 복도로 나왔다. 서연이 먼저 걸음을 맞춘 |
| 296 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | 이번 주말에 시간 있어? 공원에 같이 가자. |
| 297 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끈다. 눈이 마주치 |
| 298 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼  |
| 299 | `morning3_date_dain_2` | 다인 | room_school | dain_normal |  |  | *서연이 아직 교실 문 앞에 서 있다. 다인은 이쪽을  |
| 300 | `morning3_date_dain_choice` | 다인 | room_school | dain_normal |  |  | *서연의 발소리가 멎는다. 다인은 대답을 기다린다.* |
| 301 | `morning3_date_dain_accept` | {name} | room_school | dain_laugh |  |  | *다인과 주말 약속을 잡았다. 다인이 웃자 복도에서 서 |
| 302 | `morning3_date_dain_decline_narr` | 다인 | room_school | dain_laugh |  |  | *다인은 웃으며 자기 자리로 돌아간다. 종이 치기 직전 |
| 303 | `morning3_date_dain_decline_inner_2` | {name} | room_school | dain_laugh |  |  | *다인이 자리로 돌아간 뒤, 종이 치기 직전의 교실만  |
| 304 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다 |
| 305 | `morning3_date_yuna_1_b` | 서연 | room_school | seyoun_normal |  |  | 유나. 쪽지로 물으면 다른 사람은 못 듣잖아. |
| 306 | `morning3_date_yuna_2` | {name} | room_school | yuna_normal |  |  | *'주말. 헌책방. 먼저 잡힌 약속이 있어도, 네가 오 |
| 307 | `morning3_date_yuna_choice` | {name} | room_school | yuna_normal |  |  | *쪽지를 읽는 동안 유나는 서연과 다인을 차례로 본다. |
| 308 | `morning3_date_yuna_accept` | {name} | room_school | yuna_shy |  |  | *쪽지 뒷면에 '갈게'라고 적는다. 유나가 종이를 접는 |
| 309 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 310 | `morning3_multi_from_dain` |  | room_school | 없음 |  |  |  |
| 311 | `morning3_end` | {name} | room_school | 없음 |  |  | *수업 종료 종이 울리고 곧 점심시간이 된다.* |
| 312 | `morning3_end_b` | 유나 | room_school | yuna_normal |  |  | 맛있네. |
| 313 | `lunch3_start` | {name} | room_school | yuna_normal |  |  | *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. |
| 314 | `lunch3_start_2_b` | 다인 | room_school | dain_normal |  |  | *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가 |
| 315 | `lunch3_meal_1` | 다인 | room_school | dain_laugh |  |  | 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고  |
| 316 | `lunch3_meal_2` | {name} | room_school | dain_laugh |  |  | 그건 내 거... |
| 317 | `lunch3_meal_3` | 서연 | room_school | seyoun_normal |  |  | 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점 |
| 318 | `lunch3_meal_4` | {name} | room_school | seyoun_normal |  |  | 점수 매기지 마. |
| 319 | `lunch3_meal_5` | 서연 | room_school | seyoun_normal |  |  | 10점 만점이야. 나쁜 거 아닌데? |
| 320 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다 |
| 321 | `lunch3_meal_7` | {name} | room_school | seyoun_normal |  |  | 유나, 그건 내가 제일 좋아하는 건데. |
| 322 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임 |
| 323 | `lunch3_meal_8` | {name} | room_school | yuna_bored |  |  | *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다. |
| 324 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. |
| 325 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓 |
| 326 | `lunch3_meal_10_d` | 다인 | room_school | dain_laugh |  |  | *"다 같이?" 다인은 웃지만 의자를 당기지 않는다.* |
| 327 | `lunch3_meal_11` | {name} | room_school | yuna_bored |  |  | *누구에게 줄까?* |
| 328 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *마지막 반찬을 누구에게 줄지 고민한다.* |
| 329 | `lunch3_share_1` | {name} | room_school | yuna_bored |  |  | *다 같이 나눠 먹자고 하자 셋이 웃는다. 웃음이 끊긴 |
| 330 | `lunch3_share_solo` | {name} | room_school | yuna_normal |  |  | *셋이 계란말이를 조금씩 나눠 먹는다. 반으로 갈린 마 |
| 331 | `lunch3_end` | {name} | room_school | 없음 |  |  | *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다 |
| 332 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육 |
| 333 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다 |
| 334 | `after3_auto_dain` | {name} | school_hallway | 없음 |  | 🌅 | *다인과 약속이 있다. 체육관으로 간다.* |
| 335 | `after3_rivals_for_dain_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 336 | `after3_rival_seo_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 337 | `after3_rival_seo_affinity` |  | school_hallway | 없음 |  | 🌅 |  |
| 338 | `after3_rival_seo_done` |  | school_hallway | 없음 |  | 🌅 |  |
| 339 | `after3_rival_yuna_check` |  | library_old | 없음 |  | 🌅 |  |
| 340 | `after3_rival_yuna_affinity` |  | library_old | 없음 |  | 🌅 |  |
| 341 | `after3_rival_yuna_done` |  | school_hallway | 없음 |  | 🌅 |  |
| 342 | `after3_dain_affinity_check` |  | gym | 없음 |  | 🌅 |  |
| 343 | `after3_dain_partial_1` | {name} | gym | dain_sweat |  | 🌅 | *체육관 안에서 다인이 무릎 보호대를 고쳐 찬다. 일어 |
| 344 | `after3_dain_partial_2` | 다인 | gym | dain_normal |  | 🌅 | 좀 쉬면 돼. 오늘은 먼저 가. 내일 보자. |
| 345 | `after3_dain_end_first` | 다인 | gym | dain_shy |  | 🌅 | *다인이 주먹으로 어깨를 치고는 바로 손을 주머니에 넣 |
| 346 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.* |
| 347 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 348 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 349 | `minsu_d3_check` | {name} | school | 없음 |  | 🌅 |  |
| 350 | `minsu_d3_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문 앞에 민수가 서 있다.* |
| 351 | `minsu_d3_2` | 민수 | school | 없음 |  | 🌅 | 봤다. |
| 352 | `minsu_d3_3` | 민수 | school | 없음 |  | 🌅 | 점심때. 그리고 방금 서연 표정도. |
| 353 | `minsu_d3_4` | 민수 | school | 없음 |  | 🌅 | 어제 내가 뭐랬냐. 나중에 셋 다 울면 네 탓이라고 했 |
| 354 | `minsu_d3_5` | 민수 | school | 없음 |  | 🌅 | 옆에서 보기 좀 힘들다. 걔들 다 좋은 애들이야. 네가 |
| 355 | `minsu_d3_5b` | 민수 | school | 없음 |  | 🌅 | *민수는 빨대 포장지를 끝까지 접어 테이블 위에 내려놓 |
| 356 | `minsu_d3_6` | {name} | school | 없음 |  | 🌅 | 맞아. |
| 357 | `minsu_d3_6b` | 민수 | school | 없음 |  | 🌅 | 전 학교에서 뭔 일 있었는지 안 물어볼게. 근데 하나만 |
| 358 | `minsu_d3_7` | 민수 | school | 없음 |  | 🌅 | 거절도 배려야. 안 되는 관계에 계속 여지 주는 것보다 |
| 359 | `minsu_d3_8` | {name} | school | 없음 |  | 🌅 | *거절도 배려다. 전 학교에서 나는 소정이에게 고백할  |
| 360 | `minsu_d3_9` | 민수 | school | 없음 |  | 🌅 | *민수는 더 말하지 않고 끝까지 접은 빨대 포장지를 내 |
| 361 | `minsu_d3_10` | 민수 | school | 없음 |  | 🌅 | 내일 학교에서 보자. 진지하게 생각해. |
| 362 | `night3_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 가방을 의자에 걸어 둔다.* |
| 363 | `night3_start_2` | {name} | room_my | 없음 |  |  | *책상 위에 엎어 둔 핸드폰 화면을 켠다.* |
| 364 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *읽지 않은 메시지가 떠 있다.* |
| 365 | `night3_dream_1` | {name} | school | 없음 |  |  | *꿈속에서 누군가와 나란히 걷는다. 얼굴은 보이지 않고 |
| 366 | `night3_dream_2_b` | {name} | school | 없음 |  |  | *메모장을 닫았다. 내일 보낼 문장은 아직 없다.* |
| 367 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *커튼 사이로 들어온 아침 햇살에 눈을 뜬다. 핸드폰  |
| 368 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *'삭제하시겠습니까?' 확인 창이 뜬다. 손가락이 버튼 |
| 369 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *1초 동안 화면을 내려다본다. 소정이 책상의 낙서와  |
| 370 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *그래. 삭제 버튼에 올린 손가락으로 화면을 누른다.* |
| 371 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼을 누르지 않고 사진을 새 폴더로 옮긴다.  |
| 372 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *'거절도 네가 해야 할 일이야.' 민수의 말이 떠오른 |
| 373 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *갤러리에서 소정이 사진이 사라지고 빈칸만 남는다.* |
| 374 | `night3_faithful_reflect_4_b` | {name} | room_my | 없음 |  |  | *빈 앨범 썸네일 위를 엄지로 문지른다.* |
| 375 | `night3_faithful_reflect_4_c` | {name} | room_my | 없음 |  |  | *핸드폰을 덮자 검은 화면에 갤러리의 빈칸이 겹쳐 보인 |
| 376 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *알람이 울리기 전에 눈을 떴다.* |
| 377 | `night3_end` | {name} | room_my | 없음 |  |  | *방 불을 끄고 핸드폰을 엎어 둔다.* |
| | **Day 4** | | | | | | |
| 378 | `morning4_start` | {name} | room_my | 없음 |  |  | *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다 |
| 379 | `morning4_nightmare_check` |  | room_my | 없음 |  |  |  |
| 380 | `minsu_cheer_1` | {name} | room_my | 없음 |  |  | *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.* |
| 381 | `minsu_cheer_1_b` | 민수 | room_my | minsu_normal | 0.35 |  | *야 오늘 데이트라며?* |
| 382 | `minsu_cheer_1_c` | {name} | room_my | minsu_normal | 0.35 |  | *어떻게 알았어* |
| 383 | `minsu_cheer_1_d` | 민수 | room_my | minsu_normal | 0.35 |  | *다인이가 단톡방에 올림. 내일 약속 있음, 이라고* |
| 384 | `minsu_cheer_2` | 민수 | room_my | minsu_normal | 0.35 |  | 잘하고 와ㅋㅋ |
| 385 | `minsu_cheer_3` | {name} | room_my | minsu_normal | 0.35 |  | 알아. |
| 386 | `minsu_cheer_4_branch` |  | room_my | 없음 |  |  |  |
| 387 | `minsu_cheer_4_ins_single` | {name} | room_my | minsu_normal | 0.35 |  | *핸드폰 캘린더를 본다. 오늘 약속은 하나뿐이다.* |
| 388 | `morning4_start_2` | {name} | room_my | 없음 |  |  | *심호흡하고 약속 메시지를 다시 확인한다.* |
| 389 | `morning4_dain_msg_1` | 다인 | room_my | dain_sweat | 0.35 |  | 오늘이다. 체육관 앞 저녁 6시. 아, 왜 이렇게 떨리 |
| 390 | `morning4_hidden_check` | {name} | room_my | 없음 |  |  | *주말 아침, 학교 앞 사거리에서 신호를 기다린다.* |
| 391 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 392 | `morning4_end` | {name} | room_my | 없음 |  |  | *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 |
| 393 | `date_dain_1` | {name} | gym | dain_laugh |  |  | *체육관 앞. 다인이 뛰어온다. 캡모자에 운동복.* |
| 394 | `date_dain_tier_check` |  | gym | 없음 |  |  |  |
| 395 | `date_dain_tentative_1` | 다인 | gym | dain_normal |  |  | 오늘은 오래 놀지 말자. 무릎도 좀 쉬어야 하고. |
| 396 | `date_dain_tentative_2` | {name} | gym | dain_normal |  |  | *자판기 앞에서 음료 하나씩 마신다. 다인은 체육관 문 |
| 397 | `date_dain_tentative_3` | 다인 | street | dain_normal |  |  | 학교에서 봐. 다음 약속은 그때 정하자. |
| 398 | `pre_confess_minsu` | 민수 | street | minsu_smirk | 0.35 |  | 야, 데이트 중이지? 한마디만 할게 |
| 399 | `pre_confess_minsu_2` | 민수 | street | minsu_smirk | 0.35 |  | 말 돌리지 말고 제대로 해 |
| 400 | `pre_confess_callback` | {name} | street | minsu_smirk |  |  | *주머니 속 핸드폰 모서리가 손바닥에 눌린다. 알림은  |
| 401 | `confess_seo_1` | {name} | top_school | 없음 |  | 🌅 | *데이트가 끝났다. 교문 대신 옥상으로 올라왔다.* |
| 402 | `confess_dain_1` | {name} | gym | dain_laugh |  | 🌅 | *데이트가 끝나자 다인이 학교 쪽으로 성큼 앞서간다.* |
| 403 | `confess_dain_2` | 다인 | gym | dain_normal |  | 🌅 | 마지막. 한 군데만 더 가자. |
| 404 | `confess_dain_3` | {name} | gym | dain_normal |  | 🌅 | *빈 체육관. 서쪽 창문의 빛이 첫날 내기했던 코트 선 |
| 405 | `confess_dain_4` | 다인 | gym | dain_normal |  | 🌅 | *공 하나를 두 손으로 쥔다. 손가락 마디가 공 표면에 |
| 406 | `confess_dain_5` | {name} | gym | dain_normal |  | 🌅 | *공이 바닥에 한 번 튄다.* |
| 407 | `confess_dain_choice` | 다인 | gym | dain_sweat |  | 🌅 | *공이 바닥에 한 번 튄다. 다인의 손이 반 박자 늦어 |
| 408 | `confess_dain_yes_1` | {name} | gym | dain_normal |  | 🌅 | *첫 음절이 빈 체육관 벽에 낮게 돌아온다.* |
| 409 | `confess_dain_yes_2` | {name} | gym | dain_normal |  | 🌅 | *짧은 숨을 고르고 다시 입을 연다.* |
| 410 | `confess_dain_yes_3` | {name} | gym | dain_normal |  | 🌅 | 다인아. 나 — 너한테 할 말이 있어. |
| 411 | `confess_dain_yes_3_b` | {name} | gym | dain_normal |  | 🌅 | 오늘만 말고 다음에도 계속 만나고 싶어. |
| 412 | `confess_dain_yes_4` | {name} | gym | dain_normal |  | 🌅 | *다인이 공을 내려놓는다.* |
| 413 | `confess_dain_yes_5` | {name} | gym | dain_normal |  | 🌅 | 지금 당장 답하라는 건 아니야. |
| 414 | `confess_dain_yes_6` | {name} | gym | dain_laugh |  | 🌅 | 그냥 말해두고 싶었어. |
| 415 | `confess_dain_yes_7` | {name} | gym | dain_shy |  | 🌅 | *체육관 조명이 낮게 웅웅거린다.* |
| 416 | `confess_dain_yes_8` | 다인 | gym | dain_shy |  | 🌅 | *다인의 운동화가 코트 선 위에 나란히 붙는다. 두 손 |
| 417 | `confess_dain_yes_8_b` | {name} | gym | dain_shy |  | 🌅 | *배구공이 발끝에 툭 닿아 옆으로 굴러가도 다인은 쫓지 |
| 418 | `confess_dain_yes_9` | 다인 | gym | dain_shy |  | 🌅 | 잠깐. 나 지금 말 정리가 안 돼. |
| 419 | `confess_dain_yes_9_b` | {name} | gym | dain_shy |  | 🌅 | *다인이 손등으로 눈가를 거칠게 문지른다. 입꼬리는 올 |
| 420 | `confess_dain_yes_10` | 다인 | gym | dain_shy |  | 🌅 | 내일도 와. |
| 421 | `confess_dain_yes_10_b` | 다인 | gym | dain_laugh |  | 🌅 | *공을 다시 끌어안는다. 손등에 힘이 들어간다.* |
| 422 | `day4_night_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 옷소매에 공원 흙과 학교 먼지가 조금 |
| 423 | `day4_night_branch` | 시스템 | room_my | 없음 |  |  |  |
| 424 | `day4_student_night_branch` |  | room_my | 없음 |  |  |  |
| 425 | `wall_dain_rival_rank` | 시스템 | school_back | 없음 |  |  |  |
| 426 | `wall_dain_glimpse_1` | {name} | school_back | 없음 |  |  | *밤 10시, 다인이 기다리는 체육관으로 가던 길. 도 |
| 427 | `wall_dain_glimpse_2` | {name} | yuna_hideout | yuna_sad |  |  | *유나는 열린 책을 앞에 둔 채 창밖만 보고 있다. 책 |
| 428 | `wall_dain_glimpse_4_b` | {name} | school_back | yuna_sad | 0.35 |  | *밤 10시. 유나에게서 메시지가 온다. 바로 아래에는 |
| 429 | `wall_dain_glimpse_4_c` | 유나 | school_back | yuna_normal | 0.35 |  | 전에 나를 봐주던 사람이 말도 없이 사라졌어. 오늘 또 |
| 430 | `day4_student_counteroffer_soft_yuna` | 유나 | yuna_hideout | yuna_normal |  |  | *별관으로 들어가 빈 의자에 앉는다. 유나는 재킷을 벗 |
| 431 | `day4_night_regret` | {name} | room_my | 없음 |  |  | *집으로 돌아온 뒤에도 채팅창에는 입력하다 만 문장이  |
| 432 | `day4_night_regret_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 433 | `day4_night_regret_msg_dain` | 다인 | room_my | dain_normal | 0.35 |  | 야, 오늘 재밌었다. 나 혼자 들뜬 거 아니었지? |
| 434 | `day4_night_regret_reply` | {name} | room_my | 없음 |  |  | *답장을 쓰다 지운다. 입력창에는 받침 하나만 남았다가 |
| 435 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 436 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *알람을 일요일 오전으로 맞추고 방 불을 끈다. 전하지 |
| 437 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안 시계가 자정 쪽으로 넘어간다. 휴대폰 화면도  |
| | **Day 5** | | | | | | |
| 438 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소 |
| 439 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 440 | `morning5_temptation_counteroffer_branch` |  | room_school | 없음 |  |  |  |
| 441 | `morning5_caught_by_yuna_route` |  | room_school | 없음 |  |  |  |
| 442 | `morning5_caught_dain_by_yuna` | 다인 | room_school | dain_sad |  |  | *다인이 건너편 의자를 당기는 순간 유나의 알림이 화면 |
| 443 | `morning5_caught_dain_lie` | 다인 | room_school | dain_angry |  |  | *다인의 눈썹이 올라가지만 웃음은 돌아오지 않는다.*  |
| 444 | `morning5_counteroffer_group_talk` | 두 사람 | room_school | 없음 |  |  | *두 사람의 시선이 한꺼번에 닿는다. 어젯밤은 대체 뭐 |
| 445 | `morning5_counteroffer_choice` | {name} | room_school | 없음 |  |  | *대화가 끝나자 두 사람 모두 답을 기다린다.* |
| 446 | `morning5_counteroffer_choice_tempter` | {name} | room_school | 없음 |  |  | *어젯밤 찾아간 사람을 보고 다른 한 사람에게 고개를  |
| 447 | `morning5_after_counteroffer` | {name} | room_school | 없음 |  |  | *조회 종이 한 장이 교탁 아래로 미끄러진다. 아무도  |
| 448 | `morning5_after_counteroffer_hidden_check` |  | room_school | 없음 |  |  |  |
| 449 | `hidden_nurse_d5_after_co_check` |  | school_hallway | 없음 |  |  |  |
| 450 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 451 | `morning5_sojeong_1` | {name} | room_school | 없음 |  |  | *휴대폰 메모 앱을 연다. '소정에게'로 시작하는 빈  |
| 452 | `morning5_sojeong_2` | {name} | room_school | 없음 |  |  | *마흔 번째 초안은 쓰지 않는다. 가장 짧은 문장을 골 |
| 453 | `morning5_sojeong_3` | {name} | room_school | 없음 |  |  | 그때 네 책상과 낙서를 보고도 선생님께 말하지 않았어. |
| 454 | `morning5_sojeong_4` | {name} | room_school | 없음 |  |  | *전송 표시가 뜬다. 읽음 표시는 기다리지 않고 대화방 |
| 455 | `morning5_sojeong_5` | {name} | room_school | 없음 |  |  | *지금 담임에게도 메시지를 보낸다. '전학 오기 전 학 |
| 456 | `morning5_route_branch` |  | room_school | 없음 |  |  |  |
| 457 | `tour_co_branch` |  | school | 없음 |  |  |  |
| 458 | `tour_co_dain_1` | {name} | gym | dain_sad |  |  | *체육관 불은 켜져 있지만 공은 전부 보관함 안에 있다 |
| 459 | `tour_co_dain_2` | 다인 | gym | dain_sad |  |  | 가위바위보는 내일 하자. 오늘은 그냥 서 있을게. |
| 460 | `tour_co_dain_3` | {name} | gym | dain_angry |  |  | *다인은 손목 보호대 끝을 한 번 잡아당겼다가 천천히  |
| 461 | `after5_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 462 | `after5_co_start` | {name} | school_hallway | 없음 |  | 🌅 | *행사가 끝난 복도에 아침에 마주쳤던 사람들이 다시 모 |
| 463 | `after5_co_abandoned_branch` |  | school_hallway | 없음 |  | 🌅 |  |
| 464 | `after5_co_dain_1` | 다인 | gym | dain_sad |  | 🌅 | *공을 보관함 깊숙이 밀어 넣는다.* 파트너 명단에선  |
| 465 | `after5_co_dain_2` | 다인 | gym | dain_angry |  | 🌅 | 잘 가. 지금은 웃기 좀 그래. |
| 466 | `after5_co_tempter_branch` |  | school_hallway | 없음 |  | 🌅 |  |
| 467 | `after5_co_tempter_yuna_1` | 유나 | library_old | yuna_sad |  | 🌅 | *잠금화면에는 아직 별관 사진이 떠 있다.* 어제 부른 |
| 468 | `after5_co_tempter_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | 지금은 따라가지 마. 그거면 돼. |
| 469 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 470 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다.* |
| 471 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다. 서연은 잠시 멈췄다가 고개 |
| 472 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 473 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 474 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *석양이 교정 창문마다 걸린다. 방송실에서 행사 종료  |
| 475 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 476 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 477 | `ending_counteroffer_bitter` |  | park | 없음 |  |  |  |
| 478 | `ending_counteroffer_choice_tempter` | {name} | park | 없음 |  |  | *한 사람을 골랐다. 시작보다 먼저 정리해야 할 관계가 |
| 479 | `ending_counteroffer_bitter_route` |  | park | 없음 |  |  |  |
| 480 | `co_bitter_dain_1` | {name} | gym | dain_sad |  |  | *다인은 공 없이 체육관 밖에 서 있다.* |
| 481 | `co_bitter_dain_2` | 다인 | gym | dain_sad |  |  | 그날 파트너 명단에서, 내가 지운 거 맞지? |
| 482 | `co_bitter_dain_3` | {name} | ending_bittersweet | 없음 |  |  | *다인은 주먹 대신 손바닥으로 어깨를 툭 치고 지나간다 |
| 483 | `bitter_epilogue_1` | {name} | ending_bittersweet | 없음 |  |  | *졸업 후. 연락이 뜸해졌다. 한 달에 한 번이 두 달 |
| 484 | `bitter_epilogue_2` | {name} | ending_bittersweet | 없음 |  |  | *5일의 기록은 남았다. 마지막 사진에는 둘 사이에 한 |
| 485 | `bitter_epilogue_3` | 시스템 | ending_bittersweet | 없음 |  |  | ─── BITTERSWEET END ─── |
| 486 | `day5_main_ending_freetalk_router` | {name} | park | 없음 |  |  |  |
| 487 | `day5_dain_ending_freetalk_intro` | {name} | gym | dain_laugh |  |  | *마지막 장면이 지나고 익숙한 체육관에 공 튀는 소리만 |
| 488 | `day5_dain_ending_freetalk_router` | {name} | gym | 없음 |  |  |  |
| 489 | `day5_dain_ending_freetalk_bittersweet` | 다인 | gym | dain_normal |  | 🌙 | *닫힌 체육관 문에 기대어 잠시 공 튀는 소리를 듣는다 |
| 490 | `day5_credits` |  | school | 없음 |  |  |  |
| 491 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### day5_nurse_ending_freetalk_bittersweet

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_seo_choice`: (선택)
- `after1_jealousy_seo_choice`: (선택)
- `after_end`: (선택)
- `after_hidden_nurse_choice`: (선택)
- `after_nurse_enter_choice`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_yuna_choice`: (선택)
- `hidden_nurse_d2_choice1`: (선택)
- `hidden_nurse_d2_choice2`: (선택)
- `after2_choice`: (선택)
- `after2_yuna_choice`: (선택)
- `night2_choice`: (선택)
- `hidden_nurse_d3_choice1`: (선택)
- `hidden_nurse_d3_choice2`: (선택)
- `morning3_date_seo_choice`: (선택)
- `morning3_date_yuna_choice`: (선택)
- `lunch3_choice`: (선택)
- `after3_choice`: (선택)
- `hidden_nurse_d4_morning_choice`: (선택)
- `hidden_nurse_d4_name_choice`: (선택)
- `hidden_nurse_d4_choice`: (선택)
- `day4_nurse_yuna_counteroffer`: (선택)
- `morning5_caught_nurse_counteroffer`: (선택)
- `morning5_counteroffer_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=-1 유나=24 다인=-3 담임=0 보건=-37

<details>
<summary>씬 타임라인 (620씬)</summary>

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
| 59 | `lunch_seo_1` | 서연 | top_school | seyoun_normal |  |  | *옥상 문을 열쇠로 연다. 바람이 확 불어온다.* |
| 60 | `lunch_seo_1_aff_default` | 서연 | top_school | seyoun_normal |  |  | 앉을 거야? |
| 61 | `lunch_seo_2` | {name} | top_school | seyoun_normal |  |  | *옥상 바닥에는 흙 한 줌 보이지 않는다. 물방울 맺힌 |
| 62 | `lunch_seo_3` | 서연 | top_school | seyoun_normal |  |  | 여기가 내 영역이거든. |
| 63 | `lunch_seo_4` | {name} | top_school | seyoun_normal |  |  | 학생회장 전용 옥상이야? |
| 64 | `lunch_seo_5` | 서연 | top_school | seyoun_normal |  |  | 아무나 데려오는 데는 아닌데. *의자를 하나 펼친다.* |
| 65 | `lunch_seo_6` | {name} | top_school | seyoun_normal |  |  | 첫날부터 예외 적용? 뭔가 수상한데. |
| 66 | `lunch_seo_6_b` | 서연 | top_school | seyoun_laugh |  |  | *의자를 발끝으로 밀어 {name} 쪽에 맞춘다.* 의 |
| 67 | `lunch_seo_8` | 서연 | top_school | seyoun_laugh |  |  | *가방에서 같은 크기의 도시락통 두 개, 2인분을 포개 |
| 68 | `lunch_seo_9` | {name} | top_school | seyoun_normal |  |  | 2인분인데? |
| 69 | `lunch_seo_10` | 서연 | top_school | seyoun_normal |  |  | 학생회 일 하다 보면 밥 먹을 시간이 없어져서. 항상  |
| 70 | `lunch_seo_11` | {name} | top_school | seyoun_normal |  |  | *도시락 뚜껑을 열자 반찬이 줄 맞춰 놓여 있다. 계란 |
| 71 | `lunch_seo_13` | {name} | top_school | seyoun_normal |  |  | 직접 만든 거야? |
| 72 | `lunch_seo_14` | 서연 | top_school | seyoun_normal |  |  | 학생회장이 밥도 못 싸면 말이 안 되지. |
| 73 | `lunch_seo_15` | {name} | top_school | seyoun_normal |  |  | 그건 답이 아닌데. |
| 74 | `lunch_seo_16` | 서연 | top_school | seyoun_normal |  |  | *젓가락을 건넨다.* 먹어. 식으면 맛없어. |
| 75 | `lunch_seo_17` | 서연 | top_school | seyoun_normal |  |  | *대답 대신 밥을 먹는다. 난간 너머로 운동장과 별관  |
| 76 | `lunch_seo_19` | 서연 | top_school | seyoun_normal |  |  | 어때, 이 학교? |
| 77 | `lunch_seo_20` | {name} | top_school | seyoun_normal |  |  | 밥은 맛있어. |
| 78 | `lunch_seo_21` | 서연 | top_school | seyoun_laugh |  |  | *젓가락 끝이 도시락 칸막이를 가볍게 친다.* 학교를  |
| 79 | `lunch_seo_22` | 서연 | top_school | seyoun_laugh |  |  | *계란말이를 집어 내민다.* |
| 80 | `lunch_seo_23` | 서연 | top_school | seyoun_normal |  |  | 한 입만. |
| 81 | `lunch_seo_choice` | 서연 | top_school | seyoun_normal |  |  | *계란말이를 내밀고 있다.* |
| 82 | `lunch_seo_c1_1` | {name} | top_school | seyoun_normal |  |  | *서연의 젓가락에서 계란말이를 받아먹는다.* |
| 83 | `lunch_seo_c1_2` | {name} | top_school | seyoun_normal |  |  | 맛있다. |
| 84 | `lunch_seo_c1_2_b` | 서연 | top_school | seyoun_normal |  |  | *물병을 들어 입가를 가린다. 라벨이 손안에서 구겨진다 |
| 85 | `lunch_seo_c1_3` | 서연 | top_school | seyoun_shy |  |  | 그 정도는 해야지. |
| 86 | `lunch_seo_c1_3_b` | {name} | top_school | seyoun_shy |  |  | *반쯤 접힌 라벨이 물병에 붙어 있다. 서연은 다시 젓 |
| 87 | `lunch_seo_after` | {name} | top_school | seyoun_normal |  |  | *운동장 스피커에서 점심 종료를 알리는 예비음이 울린다 |
| 88 | `lunch_seo_after_2` | 서연 | top_school | seyoun_normal |  |  | 다음에도 점심시간 비워둬. |
| 89 | `lunch_seo_after_3` | {name} | top_school | seyoun_normal |  |  | 초대해 주는 거야? |
| 90 | `lunch_seo_after_4` | 서연 | top_school | seyoun_normal |  |  | 아니. 허가해 주는 거야. |
| 91 | `lunch_seo_after_5` | 서연 | top_school | seyoun_normal |  |  | *도시락 끈을 한 번 묶었다가 더 짧게 조인다.* |
| 92 | `lunch_seo_after_7` | {name} | top_school | seyoun_normal |  |  | *도시락 매듭이 처음보다 단단해져 있다.* |
| 93 | `lunch_seo_freetalk` | 서연 | top_school | seyoun_normal |  |  | *도시락 뚜껑을 정리하고 접이식 의자를 신발 끝으로 한 |
| 94 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *종이 울린다. 점심시간이 끝났다.* |
| 95 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에 |
| 96 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 97 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창 |
| 98 | `after_kakao_5` | {name} | school_hallway | 없음 |  | 🌅 | *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른 |
| 99 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록  |
| 100 | `after1_jealousy_seo_1` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 점심때 어디 갔어? 매점 갔는데 없더라. |
| 101 | `after1_jealousy_seo_2` | {name} | school_hallway | dain_normal |  | 🌅 | *답장창에 '서연이랑'까지 썼다가 지운다. 커서만 다시 |
| 102 | `after1_jealousy_seo_3` | 다인 | school_hallway | dain_pout |  | 🌅 | 옥상에서 내려오는 거 봤거든. 둘이서? |
| 103 | `after1_jealousy_seo_choice` | 다인 | school_hallway | dain_pout |  | 🌅 | *휴대폰을 쥔 손에 힘을 준다.* |
| 104 | `after1_jealousy_seo_honest` | {name} | school_hallway | dain_pout |  | 🌅 | 응, 학생회장이 데려갔어. 도시락도 싸 왔더라. |
| 105 | `after1_jealousy_seo_honest_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 그래? 말이라도 해주지. |
| 106 | `after1_jealousy_seo_yuna` | {name} | school_hallway | dain_normal |  | 🌅 | *가방 옆주머니에 접힌 쪽지가 걸려 있다. 유나의 필체 |
| 107 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *복도를 계속 걷는다.* |
| 108 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도를 걷는데 뒤에서 쿵쿵 발소리.* |
| 109 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 조심! |
| 110 | `after_miss_dain_3` | {name} | school_hallway | dain_normal |  | 🌅 | *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 |
| 111 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 피했다? 반사신경 괜찮은데. |
| 112 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 넌 복도에서 왜 전력질주야? |
| 113 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 늦었거든! 체육관 가야 해. 내일 보자, 전학생! |
| 114 | `after_miss_dain_6_b` | {name} | school_hallway | dain_laugh |  | 🌅 | *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을  |
| 115 | `after_miss_dain_7` | {name} | school_hallway | dain_laugh |  | 🌅 | *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아 |
| 116 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으 |
| 117 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 이거 떨어뜨렸어. |
| 118 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피 |
| 119 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌  |
| 120 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 고마워. |
| 121 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피를 책등 사이에 끼우고 돌아선다.* |
| 122 | `after_miss_yuna_4` | {name} | library_old | yuna_normal |  | 🌅 | *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 |
| 123 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든 |
| 124 | `after_hidden_nurse_intro` | {name} | school_hallway | 없음 |  | 🌅 | *복도 형광등이 흔들려 보여 벽을 짚자 손바닥에 차가운 |
| 125 | `after_hidden_nurse_choice` | {name} | school_hallway | 없음 |  | 🌅 | *아침부터 계속 사람들 틈에 있었다. 발걸음이 보건실  |
| 126 | `after_hidden_nurse_intro_b` | {name} | school_hallway | 없음 |  | 🌅 | *문 앞에 서서 한 번 숨을 고르고 손잡이에 손을 얹는 |
| 127 | `after_nurse_enter_1` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건실 문을 연다. 소독약 냄새. 흰 커튼과 침대,  |
| 128 | `after_nurse_enter_2` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 오, 환자네. |
| 129 | `after_nurse_enter_2_b` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건선생님이 진료 기록지를 한 장 꺼내 윗줄을 펜으로 |
| 130 | `after_nurse_enter_3` | {name} | nurse_room | nurse_normal |  | 🌅 | 좀 어지러워서요. |
| 131 | `after_nurse_enter_4` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 전학생이지? 첫날부터 보건실이면 꽤 빡셌나 보네. 어디 |
| 132 | `after_nurse_enter_4_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 어떻게 알았어요? |
| 133 | `after_nurse_enter_4_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 교복이 뻣뻣하잖아. 풀 냄새도 나고 벚꽃잎도 붙어 있고 |
| 134 | `after_nurse_enter_4_d` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *전자체온계를 건네고 책상 아래에서 혈압계를 꺼낸다.* |
| 135 | `after_nurse_enter_5` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *체온을 확인한 뒤 팔에 혈압계 커프를 감는다.* |
| 136 | `after_nurse_enter_6` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 열은 없고 혈압이 조금 낮네. |
| 137 | `after_nurse_enter_6_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 아침을 좀 대충 먹긴 했어요. |
| 138 | `after_nurse_enter_7` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 그럼 더 그럴 수 있지. 자, 여기 누워. 10분만 쉬 |
| 139 | `after_nurse_enter_7_b` | {name} | nurse_room | nurse_normal |  | 🌅 | *침대에 눕자 얇은 시트가 몸 아래에서 바스락거린다.* |
| 140 | `after_nurse_enter_7_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *커튼을 반쯤 친다.* 물 줄까? 아님 따뜻한 거? |
| 141 | `after_nurse_enter_7_d` | {name} | nurse_room | nurse_normal |  | 🌅 | 물이면 됩니다. |
| 142 | `after_nurse_enter_choice` | {name} | nurse_room | nurse_normal |  | 🌅 | *침대에 눕는다. 커튼 너머로 보건선생님 뒷모습이 보인 |
| 143 | `after_nurse_enter_choice_a` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 눈치 빠른 환자네. 그래도 지금은 네 상태부터 보자. |
| 144 | `after_nurse_enter_8` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 말 길게 할 필요 없어. 어지러울 때는 대답도 천천히  |
| 145 | `after_nurse_enter_8_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 이 정도면 금방 괜찮아질까요? |
| 146 | `after_nurse_enter_8_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *물컵을 건넨다.* 물 마시고 쉬면 한결 나을 거야.  |
| 147 | `after_nurse_enter_8_d` | {name} | nurse_room | nurse_normal |  | 🌅 | *물을 마시며 보건실을 둘러본다. 창가 구석에 손바닥만 |
| 148 | `after_nurse_enter_9_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 저 화분, 선생님이 키우시는 거예요? |
| 149 | `after_nurse_enter_9_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 응, 로즈마리. — 병원에서 일할 때부터 키우던 거야. |
| 150 | `after_nurse_enter_9_d` | {name} | nurse_room | nurse_normal |  | 🌅 | 병원이요? |
| 151 | `after_nurse_enter_9_e` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *서랍 손잡이를 한 번 잡았다가 놓는다.* |
| 152 | `after_nurse_enter_10` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 옛날 얘기야. 학교가 좋아. 여기선 종소리 나면 다들  |
| 153 | `after_nurse_enter_10_b` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *서랍이 닫히며 안쪽의 연두색 노트도 가려진다. 벽시계 |
| 154 | `after_nurse_enter_10_c` | {name} | nurse_room | nurse_normal |  | 🌅 | 감사합니다. 조금 나아졌어요. |
| 155 | `after_nurse_enter_11` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 또 어지러우면 와. 보건실은 늘 열려 있으니까. 대신  |
| 156 | `after_nurse_enter_11_b` | {name} | nurse_room | nurse_angry |  | 🌅 | 혼나요? |
| 157 | `after_nurse_enter_11_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *진료 기록지 위에서 펜을 한 번 굴린다.* 아픈데도  |
| 158 | `after_nurse_enter_11_d` | 보건선생님 | nurse_room | nurse_angry |  | 🌅 | *물컵을 책상에 내려놓는다. 컵 바닥이 낮게 울린다.* |
| 159 | `after_nurse_enter_11_e` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *피곤하다는 말에 목 뒤를 한 번 문지른다.* |
| 160 | `after_nurse_enter_11_f` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 아까 나 피곤해 보인다고 했지? 학생 눈에도 티가 나면 |
| 161 | `after_nurse_enter_11_g` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *진료 기록에 시간을 적고 물컵을 치운다.* |
| 162 | `after_nurse_enter_11_j` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건실 문을 열려는 순간, 뒤에서 보건선생님이 부른다 |
| 163 | `after_nurse_enter_11_k` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 아, 전학생. |
| 164 | `after_nurse_enter_11_l` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 이름이 뭐야? |
| 165 | `after_nurse_enter_11_m` | {name} | nurse_room | nurse_normal |  | 🌅 | {name}입니다. |
| 166 | `after_nurse_enter_12` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 증상 다시 오면 바로 와. 복도에서 버티지 말고. |
| 167 | `after_nurse_enter_12_b` | {name} | nurse_room | nurse_normal |  | 🌅 | *가볍게 인사하고 보건실을 나왔다. 소독약 냄새가 복도 |
| 168 | `after_nurse_freetalk` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *체온계를 케이스에 넣고 진료 기록의 시간을 확인한다. |
| 169 | `night_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄 |
| 170 | `night_start_3` | {name} | room_my | 없음 |  |  | *핸드폰이 울린다. 학교 메신저.* |
| 171 | `night_msg_seo_1` | 서연 | room_my | seyoun_normal | 0.35 |  | *오늘 옥상 어땠어?* |
| 172 | `night_msg_seo_2` | {name} | room_my | seyoun_normal | 0.35 |  | *바람이 좋더라* |
| 173 | `night_msg_seo_3` | 서연 | room_my | seyoun_normal | 0.35 |  | *다음엔 음료 정도는 준비해 놓을게* |
| 174 | `night_msg_seo_4` | 서연 | room_my | seyoun_normal | 0.35 |  | *서비스야* |
| 175 | `night_msg_seo_5` | {name} | room_my | seyoun_normal | 0.35 |  | *'서비스야'를 일부러 한 줄 띄어서 보냈다.* |
| 176 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 다른 알림이 보인다.* |
| 177 | `night_hidden_nurse_1` | {name} | room_my | nurse_normal | 0.35 |  | *학교 건강 관리 앱 알림이 떠 있다. '보건실 기록: |
| 178 | `night_hidden_nurse_2` | {name} | room_my | nurse_normal | 0.35 |  | *마지막 안내를 읽고 침대 옆 물병을 채워 둔다.* |
| 179 | `night_late_transition` | {name} | room_my | 없음 |  |  | *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시 |
| 180 | `night_late_branch` | {name} | room_my | 없음 |  |  | *화면이 밝아진다.* |
| 181 | `night_end_1` | {name} | room_my | 없음 |  |  | *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교 |
| 182 | `night_end_3` | {name} | room_my | 없음 |  |  | *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을  |
| | **Day 2** | | | | | | |
| 183 | `morning2_start` | {name} | room_school | 없음 |  |  | *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.* |
| 184 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 185 | `morning2_dain_1` | {name} | room_school | 없음 |  |  | *교실 문을 여는 순간 손바닥이 등짝을 탁 친다.* |
| 186 | `morning2_dain_2` | 다인 | room_school | dain_normal |  |  | 왔어? 좋은 아침. |
| 187 | `morning2_dain_3` | 다인 | room_school | dain_laugh |  |  | 그 정도로? 체력 관리 좀 해. |
| 188 | `morning2_dain_4` | {name} | room_school | dain_laugh |  |  | 너 아침부터 에너지 과잉 아냐? |
| 189 | `morning2_dain_5` | 다인 | room_school | dain_laugh |  |  | 이게 정상이야! 네가 부족한 거야! |
| 190 | `morning2_dain_6` | 다인 | room_school | dain_laugh |  |  | *아침 조회 전 교실에 다인의 목소리가 먼저 울린다.* |
| 191 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *자리에 앉으려는데 — 책상 위에 접힌 쪽지가 하나 놓 |
| 192 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 193 | `morning2_note_3` | {name} | room_school | yuna_normal | 0.35 |  | *어제와 같은 글씨. 아래쪽에 장소가 적혀 있다. '도 |
| 194 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가다 교실 안을 들여다본다.* 어제 잘 잤 |
| 195 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 학생회장이 교실까지 인사하러 와? |
| 196 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 순찰이야. — 출석률 확인 겸. |
| 197 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | *복도로 돌아가기 직전 클립보드 끝이 문틀에 한 번 닿 |
| 198 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연이 사라진 복도를 바라보는데 — 뒤에서 민수가 돌 |
| 199 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 이틀 만에 학생회장이 인사하러 오냐? 나 1 |
| 200 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 인기가 없는 거 아닐까. |
| 201 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 그건 맞는데 그게 중요한 게 아니잖아. |
| 202 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *다인은 서연의 뒷모습이 교실 안으로 사라질 때까지 바 |
| 203 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 회장님도 우리 전학생한테 관심 있어? 인기 많네! |
| 204 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | '우리' 전학생? |
| 205 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 내가 먼저 봤잖아. 그럼 우리 맞지. 찜한 거. |
| 206 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *쉬는 시간. 복도로 나왔다.* |
| 207 | `morning2_break_1` | {name} | school_hallway | 없음 |  |  | *서연의 클립보드 끝이 책상에 톡 닿는다. 답할 틈도  |
| 208 | `morning2_seo_dust_1` | {name} | school_hallway | seyoun_normal |  |  | *1교시가 끝난 쉬는 시간, 복도에서 서연과 스친다.  |
| 209 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 잠깐. |
| 210 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *손이 {name}의 어깨에 닿는다. 먼지를 두 번 털 |
| 211 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 옷에 뭐 묻었어. |
| 212 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | *서연의 손이 떨어진 자리에서 가방끈이 비뚤어져 있다. |
| 213 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 왜 그래? 먼지잖아. |
| 214 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *어깨의 먼지는 없어졌는데 가방끈을 두 번이나 다시 고 |
| 215 | `morning2_dain_react_2` | {name} | school_hallway | dain_angry |  |  | *서연이 클립보드를 고쳐 끼고 복도로 간다. 뒤에서 다 |
| 216 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 지금 뭐야? 어깨 만진 거야? |
| 217 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 먼지 털어준 거야. |
| 218 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 먼지가 진짜 있긴 했어? |
| 219 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | *대답 대신 가방끈을 고쳐 잡았다. 다인은 그걸 보고도 |
| 220 | `morning2_end` | {name} | school_hallway | seyoun_normal |  |  | *민수 말로는 1년 동안 먼저 인사한 적도 없다던 서연 |
| 221 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *점심. 주머니에는 유나의 쪽지가 있고 복도 끝에서는  |
| 222 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *누구와 함께할까.* |
| 223 | `lunch2_yuna_1` | {name} | yuna_hideout | yuna_normal |  |  | *본관보다 오래된 도서관 별관에는 학생이 거의 없다.  |
| 224 | `lunch2_yuna_intro_check` |  | yuna_hideout | yuna_normal |  |  |  |
| 225 | `lunch2_yuna_3_seo` | 유나 | yuna_hideout | yuna_normal |  |  | 왔네. |
| 226 | `lunch2_yuna_4_seo` | {name} | yuna_hideout | yuna_normal |  |  | 쪽지 받았거든. |
| 227 | `lunch2_yuna_5_seo` | 유나 | yuna_hideout | yuna_normal |  |  | 어제는 회장 옆이더니. |
| 228 | `lunch2_yuna_6_seo` | {name} | yuna_hideout | yuna_normal |  |  | 오늘은 네가 불러서 왔어. |
| 229 | `lunch2_yuna_7_seo` | 유나 | yuna_hideout | yuna_normal |  |  | 의외네. |
| 230 | `lunch2_yuna_8_seo` | {name} | yuna_hideout | yuna_normal |  |  | 그래서 더 와보고 싶었어. |
| 231 | `lunch2_yuna_9` | 유나 | yuna_hideout | yuna_smile |  |  | *책장을 한 장 넘기고 맞은편 소파의 구겨진 쿠션을 손 |
| 232 | `lunch2_yuna_10` | 유나 | yuna_hideout | yuna_normal |  |  | 그래. |
| 233 | `lunch2_yuna_11` | 유나 | yuna_hideout | yuna_normal |  |  | *유나가 별관 안쪽으로 앞장선다. 발소리가 낮게 울리는 |
| 234 | `lunch2_yuna_13` | {name} | yuna_hideout | yuna_normal |  |  | 여기 뭐야? 비밀 독서실? |
| 235 | `lunch2_yuna_14` | 유나 | yuna_hideout | yuna_normal |  |  | 여기 아는 사람 거의 없어. |
| 236 | `lunch2_yuna_15` | 유나 | yuna_hideout | yuna_normal |  |  | *소파에 앉아 가방을 바닥에 내려놓고 한 칸을 비운다. |
| 237 | `lunch2_yuna_16` | 유나 | yuna_hideout | yuna_normal |  |  | 나랑 한 명 더 있었는데. |
| 238 | `lunch2_yuna_17` | {name} | yuna_hideout | yuna_normal |  |  | 있었는데? |
| 239 | `lunch2_yuna_17_b` | 유나 | yuna_hideout | yuna_normal |  |  | *책갈피 끝이 페이지 사이로 천천히 사라진다. 유나는  |
| 240 | `lunch2_yuna_choice` | {name} | yuna_hideout | yuna_normal |  |  | *'있었는데' 뒤에 말이 없다. 유나는 책갈피 끝을 책 |
| 241 | `lunch2_yuna_trap_exclusive` | 유나 | yuna_hideout | yuna_sad |  |  | *책을 자기 쪽으로 당겼다가 천천히 놓는다.* 그건 내 |
| 242 | `lunch2_yuna_c2_1` | {name} | yuna_hideout | yuna_normal |  |  | *옆에 앉자 유나는 자기 책 더미에서 한 권을 꺼내 내 |
| 243 | `lunch2_yuna_c2_3` | 유나 | yuna_hideout | yuna_normal |  |  | 읽어. |
| 244 | `lunch2_yuna_c2_4` | {name} | yuna_hideout | yuna_normal |  |  | *책을 펼친다. 두 사람의 페이지가 번갈아 넘어가고 창 |
| 245 | `lunch2_yuna_c2_6` | 유나 | yuna_hideout | yuna_normal |  |  | 여기가 좋은 이유. |
| 246 | `lunch2_yuna_c2_7` | {name} | yuna_hideout | yuna_normal |  |  | 응? |
| 247 | `lunch2_yuna_c2_8` | 유나 | yuna_hideout | yuna_normal |  |  | 조용해서. — 근데 혼자가 아니어서. |
| 248 | `lunch2_yuna_c2_9` | 유나 | yuna_hideout | yuna_normal |  |  | *책장 쪽으로 돌아서지만 책은 한동안 같은 페이지에 열 |
| 249 | `lunch2_yuna_end` | {name} | yuna_hideout | yuna_normal |  |  | *문을 닫기 전 돌아보자 유나는 '있었는데'에서 멈춘  |
| 250 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *방과후. 핸드폰에 알림이 두 개 와 있다.* |
| 251 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 체육관 와. 오늘은 진짜 내기다. |
| 252 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 학생회실에 올 수 있어? 일손이 부족해서. |
| 253 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게서는 아무 연락이 없다. 가방을 챙기자 주머니 |
| 254 | `after2_nurse_transition` | {name} | school_hallway | 없음 |  | 🌅 | *5교시 체육 뒤, 팔꿈치 밴드 끝이 소매에 걸린다.  |
| 255 | `hidden_nurse_d2_1` | {name} | nurse_room | nurse_normal |  | 🌅 | *소매를 걷자 밴드 한쪽이 들려 있다. 상처에는 피가  |
| 256 | `hidden_nurse_d2_2` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 하루도 안 돼서 밴드가 반품됐네. 앉아 봐. |
| 257 | `hidden_nurse_d2_3` | {name} | nurse_room | nurse_normal |  | 🌅 | 끝이 자꾸 소매에 걸려요. |
| 258 | `hidden_nurse_d2_4` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 어디 보자. |
| 259 | `hidden_nurse_d2_5` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *들뜬 밴드를 떼고 상처 주변을 닦은 뒤 새 밴드를 꺼 |
| 260 | `hidden_nurse_d2_choice1` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건선생님이 팔꿈치를 접었다 펴 보며 밴드 길이를 가 |
| 261 | `hidden_nurse_d2_choice1_b` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 그게 내 일이니까. 대충 붙였다가 수업 중에 떨어지면  |
| 262 | `hidden_nurse_d2_6` | {name} | nurse_room | nurse_normal |  | 🌅 | *밴드를 확인하는데 책상 서랍에서 연두색 노트가 삐져나 |
| 263 | `hidden_nurse_d2_7` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *서랍을 닫는다.* 그건 안 봤지? 됐어. 서류 얘기하 |
| 264 | `hidden_nurse_d2_choice2` | {name} | nurse_room | nurse_shy |  | 🌅 | *서랍 손잡이를 쥔 손마디가 희다.* |
| 265 | `hidden_nurse_d2_choice2_b` | 보건선생님 | nurse_room | nurse_shy |  | 🌅 | *서랍 손잡이에서 손을 뗀다.* 비밀. 이 정도면 충분 |
| 266 | `hidden_nurse_d2_8` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 자, 다 됐어. 오늘은 물 닿지 않게 하고. |
| 267 | `hidden_nurse_d2_9` | {name} | nurse_room | nurse_normal |  | 🌅 | *밴드가 들뜨거나 피가 배면 다시 오라는 안내를 듣고  |
| 268 | `hidden_nurse_d2_freetalk` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *사용한 소독솜을 버리고 밴드 가장자리를 한 번 눌러  |
| 269 | `hidden_nurse_d2_return` | {name} | room_school | 없음 |  | 🌅 | *보건실을 나와 교실로 돌아오니, 방과후 햇빛이 책상  |
| 270 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *어디로 갈까.* |
| 271 | `after2_yuna_1` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *유나한테는 연락이 없지만 도서관으로 향한다. 주머니  |
| 272 | `after2_yuna_1_b` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *별관 복도에는 인기척이 없다. 비밀 독서 공간 문만  |
| 273 | `after2_yuna_2` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *문을 밀자 오래된 경첩이 짧게 운다. 유나는 소파에서 |
| 274 | `after2_yuna_2_b` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | *책 위에 올려 둔 이어폰 한쪽을 옆으로 치운다.* |
| 275 | `after2_yuna_3` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 왔네. |
| 276 | `after2_yuna_4` | {name} | yuna_hideout | yuna_normal |  | 🌅 | 부른 적 없잖아. |
| 277 | `after2_yuna_5` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 불러야 오는 거야? |
| 278 | `after2_yuna_6` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | *검지가 같은 문장 밑을 두 번 따라간다.* |
| 279 | `after2_yuna_7` | {name} | yuna_hideout | yuna_normal |  | 🌅 | 문이 열려 있길래. |
| 280 | `after2_yuna_8` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 우연히. |
| 281 | `after2_yuna_8b` | {name} | yuna_hideout | yuna_shy |  | 🌅 | *안쪽 의자에는 이어폰 한쪽이 이미 놓여 있다. 유나는 |
| 282 | `after2_yuna_8c` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 들어봐. |
| 283 | `after2_yuna_8d` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *이어폰에서 낮은 피아노 곡이 흐른다. 유나는 책을 읽 |
| 284 | `after2_yuna_choice_pre1` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | *이어폰 줄을 한 번 풀어내며 말한다.* 방과후에 여기 |
| 285 | `after2_yuna_choice_pre2` | {name} | yuna_hideout | yuna_normal |  | 🌅 | 응? |
| 286 | `after2_yuna_choice_pre3` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 선배 이후로 없었어. |
| 287 | `after2_yuna_choice_pre3_b` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | *유나가 책 위로 {name}을 바로 본다. 이어폰 줄 |
| 288 | `after2_yuna_choice` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *이어폰 줄이 유나의 손가락 사이에서 한 번 더 감긴다 |
| 289 | `after2_yuna_everyday` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | *이어폰 줄의 매듭을 풀었다가 검지에 다시 감는다.* |
| 290 | `after2_yuna_everyday_b` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 올 거면 와. 말리지는 않을게. |
| 291 | `after2_yuna_everyday_react` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | 근데 매일은 곤란해. 가끔만. |
| 292 | `after2_yuna_everyday_react_b` | {name} | yuna_hideout | yuna_shy |  | 🌅 | *유나는 책갈피를 빼지 않은 채 같은 페이지를 보고 있 |
| 293 | `after2_yuna_end` | {name} | yuna_hideout | yuna_smile |  | 🌅 | *유나와 나란히 앉아 있던 자리에는 이어폰 한쪽이 남아 |
| 294 | `after2_yuna_rival_dain_check` |  | yuna_hideout | 없음 |  | 🌅 |  |
| 295 | `after2_yuna_rival_dain_low` | 다인 | yuna_hideout | dain_laugh |  | 🌅 | 도서관 쪽이었어? 내일 봐! |
| 296 | `after2_yuna_rival_seo_check` |  | yuna_hideout | 없음 |  | 🌅 |  |
| 297 | `after2_yuna_rival_seo_low` | 서연 | yuna_hideout | seyoun_normal |  | 🌅 | 일손은 채웠어. 내일 보자. |
| 298 | `after2_yuna_return` | {name} | school | yuna_smile |  | 🌅 | *도서관 별관을 나서자 복도 자동등이 켜진다.* |
| 299 | `after2_group_yuna_companion` | 유나와 동행 | library_old | 없음 |  | 🌅 | *정리할 자료는 두 묶음인데 남은 시간은 한쪽을 끝내기 |
| 300 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.* |
| 301 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 302 | `minsu_warn_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문을 나서는데 — 민수가 뒤에서 따라온다. |
| 303 | `minsu_warn_1_b` | 민수 | school | minsu_normal |  | 🌅 | *성큼 따라와 옆에 나란히 선다.* |
| 304 | `minsu_warn_2` | 민수 | school | minsu_smirk |  | 🌅 | 야. |
| 305 | `minsu_warn_3` | {name} | school | minsu_smirk |  | 🌅 | 왜? |
| 306 | `minsu_warn_4` | 민수 | school | minsu_smirk |  | 🌅 | 너 요즘 재밌냐? |
| 307 | `minsu_warn_4_b` | {name} | school | minsu_normal |  | 🌅 | *민수는 교문 밖 횡단보도 신호만 보고 있다.* |
| 308 | `minsu_warn_5` | {name} | school | minsu_smirk |  | 🌅 | 갑자기? |
| 309 | `minsu_warn_6` | 민수 | school | minsu_smirk |  | 🌅 | 점심엔 한 명, 방과후엔 또 한 명. 넌 재밌겠지. — |
| 310 | `night2_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저  |
| 311 | `night2_msg_1` | {name} | room_my | 없음 |  |  | *세 명에게서 메시지가 왔다.* |
| 312 | `night2_msg_yuna_specific` | 유나 | room_my | yuna_normal | 0.35 |  | 오늘 그 곡, 좋았어 |
| 313 | `night2_msg_yuna_specific_2` | 유나 | room_my | yuna_normal | 0.35 |  | 다음에 또 들려줘 |
| 314 | `night2_msg_dain_general` | 다인 | room_my | dain_normal | 0.35 |  | 야, 내일 매점 가자! 오늘 못 간 거 아직 아쉽거든! |
| 315 | `night2_msg_dain_general_merge` | 서연 | room_my | seyoun_normal | 0.35 |  | 점심에 옥상 올래? 바람 좋을 거야 |
| 316 | `night2_msg_seo_general_alt` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 옥상 열어둘게. 시간 되면 와 |
| 317 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에  |
| 318 | `night2_choice` | {name} | room_my | 없음 |  |  | *누구에게 먼저 답장할까?* |
| 319 | `night2_reply_yuna_1` | {name} | room_my | yuna_normal | 0.35 |  | 아직 반 정도. 재밌어 |
| 320 | `night2_reply_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | 다행이네 |
| 321 | `night2_reply_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *답장창이 한동안 비어 있다. 그러다 새 말풍선이 올라 |
| 322 | `night2_reply_yuna_4` | 유나 | room_my | yuna_normal | 0.35 |  | 아까 재생목록. 세 번째 곡도 들어봐 |
| 323 | `night2_reply_yuna_5` | {name} | room_my | yuna_normal | 0.35 |  | *유나가 공유한 재생목록을 다시 연다. 세 번째 곡은  |
| 324 | `night2_reply_yuna_6` | 유나 | room_my | yuna_normal | 0.35 |  | 끝까지 들어봐 |
| 325 | `night2_reply_yuna_6_b` | {name} | room_my | yuna_normal | 0.35 |  | *이어폰을 끼고 재생 버튼을 누른다. 피아노 뒤로 낮은 |
| 326 | `night2_reply_yuna_6_c` | {name} | room_my | yuna_normal | 0.35 |  | *곡이 끝나고 재생 화면의 진행 바가 마지막 칸에 멈춘 |
| 327 | `night2_reply_yuna_7` | {name} | room_my | yuna_normal | 0.35 |  | *재생목록 제목 아래에 유나가 남긴 짧은 메모가 보인다 |
| 328 | `night2_reply_yuna_react_default` | 유나 | room_my | yuna_normal | 0.35 |  | 응. 잘 자. |
| 329 | `night2_yuna_freetalk` | 유나 | room_my | yuna_normal | 0.35 | 🌙 | 잠깐. 아직 깨어 있으면... 조금만 더 얘기할래? |
| 330 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 또 다른 알림이 보인다.* |
| 331 | `night2_hidden_nurse_1` | {name} | room_my | nurse_normal | 0.35 |  | *건강 관리 앱 알림. '보건실 기록: 전학생 — 팔꿈 |
| 332 | `night2_hidden_nurse_2` | {name} | room_my | nurse_normal | 0.35 |  | *팔꿈치를 한 번 굽혀 본다. 밴드 모서리는 아직 단단 |
| 333 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 보내고 핸드폰을 내려놓았다.* |
| 334 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이,  |
| 335 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 |
| 336 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *메모장에 줄줄이 남은 보내지 않은 문장. '선생님,  |
| 337 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 메모가 마지막이다. 그 아래 39번째에는 제 |
| 338 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 |
| 339 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로 |
| 340 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보 |
| 341 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화 |
| 342 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 |
| 343 | `night2_end_2_b` | {name} | room_my | 없음 |  |  | *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있 |
| 344 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.* |
| 345 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을  |
| 346 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 |
| | **Day 3** | | | | | | |
| 347 | `morning3_start` | {name} | school | 없음 |  |  | *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯 |
| 348 | `morning3_start_2` | {name} | school | 없음 |  |  | *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군 |
| 349 | `hidden_nurse_d3_check` | {name} | room_school | 없음 |  |  | *쉬는 시간이 끝나간다.* |
| 350 | `hidden_nurse_d3_1` | {name} | nurse_room | nurse_normal |  |  | *아침 종이 친 뒤에도 자리에서 일어나지 못했다. 손등 |
| 351 | `hidden_nurse_d3_1_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 책상에서 몸을 일으킨다.* 어? 오늘은  |
| 352 | `hidden_nurse_d3_1_c` | {name} | nurse_room | nurse_normal |  |  | 아프진 않은데요. |
| 353 | `hidden_nurse_d3_1_d` | 보건선생님 | nurse_room | nurse_normal |  |  | 아프지 않은데 보건실에? |
| 354 | `hidden_nurse_d3_1_e` | {name} | nurse_room | nurse_normal |  |  | 좀 쉬고 싶어서요. |
| 355 | `hidden_nurse_d3_2` | 보건선생님 | nurse_room | nurse_normal |  |  | 어디가 아픈 건 아니고? 표정이 안 좋은데. |
| 356 | `hidden_nurse_d3_3` | {name} | nurse_room | nurse_normal |  |  | 좀 쉬고 싶어서요. 사람 관계가 복잡해져서요. |
| 357 | `hidden_nurse_d3_3_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *컵을 내려놓는다.* |
| 358 | `hidden_nurse_d3_3_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 앉아. |
| 359 | `hidden_nurse_d3_3_d` | 보건선생님 | nurse_room | nurse_normal |  |  | *컵을 책상 안쪽에 놓고 환자용 의자를 침대 앞으로 끌 |
| 360 | `hidden_nurse_d3_4` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님은 커튼을 치고 물컵을 건넨다.* 앉아. 여 |
| 361 | `hidden_nurse_d3_5_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 의자를 침대 쪽으로 당겨 앉는다.* |
| 362 | `hidden_nurse_d3_5_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 비슷해? 그럼 여기 온 건 잘했어. |
| 363 | `hidden_nurse_d3_5_d` | {name} | nurse_room | nurse_normal |  |  | *보건선생님의 엄지가 물컵 가장자리를 한 번 누른다.* |
| 364 | `hidden_nurse_d3_5_e` | {name} | nurse_room | nurse_normal |  |  | 누구한테 말하기 애매한 것들이요. |
| 365 | `hidden_nurse_d3_5_f` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 의자를 끌어와 마주 앉는다.* 사람 관계 |
| 366 | `hidden_nurse_d3_5_g` | {name} | nurse_room | nurse_normal |  |  | 셋 다 신경 쓰이는데 결국 한 명은 정해야 해서요. |
| 367 | `hidden_nurse_d3_5_h` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님은 종이컵을 책상 위에 반듯하게 놓는다.* |
| 368 | `hidden_nurse_d3_5_i` | 보건선생님 | nurse_room | nurse_normal |  |  | 그거 연애 상담이야? |
| 369 | `hidden_nurse_d3_5_j` | {name} | nurse_room | nurse_normal |  |  | 아, 그런 건 아니... |
| 370 | `hidden_nurse_d3_5_k` | 보건선생님 | nurse_room | nurse_normal |  |  | 아니라고 하기엔 얼굴에 다 보여. |
| 371 | `hidden_nurse_d3_5_l` | {name} | nurse_room | nurse_normal |  |  | *책상 위 종이컵만 본다.* |
| 372 | `hidden_nurse_d3_5_m` | 보건선생님 | nurse_room | nurse_normal |  |  | 이게 보건 업무에 들어가나 모르겠네. 그래도 들어줄게. |
| 373 | `hidden_nurse_d3_5_n` | {name} | nurse_room | nurse_normal |  |  | 선생님도 여러 사람 사이에서 헷갈린 적 있어요? |
| 374 | `hidden_nurse_d3_5_o` | 보건선생님 | nurse_room | nurse_normal |  |  | *종이컵 테두리가 엄지 아래에서 접힌다. 보건선생님은  |
| 375 | `hidden_nurse_d3_5_p` | 보건선생님 | nurse_room | nurse_normal |  |  | 있었지. 대학병원에서 일할 때. |
| 376 | `hidden_nurse_d3_5_q` | {name} | nurse_room | nurse_normal |  |  | 대학병원이요? |
| 377 | `hidden_nurse_d3_choice1` | {name} | nurse_room | nurse_normal |  |  | *입만 열었다가 다시 다문다.* |
| 378 | `hidden_nurse_d3_choice1_b` | 보건선생님 | nurse_room | nurse_normal |  |  | 괜찮아. 자세히는 말하지 않을게. |
| 379 | `hidden_nurse_d3_6` | 보건선생님 | nurse_room | nurse_normal |  |  | 대학병원에서 일할 때. 호출벨이 동시에 울리면, 손이  |
| 380 | `hidden_nurse_d3_6_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *물컵을 내려놓는다. 컵 바닥의 물기가 둥글게 번진다. |
| 381 | `hidden_nurse_d3_6_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 그만뒀다기보다, 나왔지. 멋있는 이유 같은 건 없어. |
| 382 | `hidden_nurse_d3_6_d` | 보건선생님 | nurse_room | nurse_normal |  |  | *청진기를 정리하다 노트 서랍을 열려던 손을 거둔다.* |
| 383 | `hidden_nurse_d3_6_e` | 보건선생님 | nurse_room | nurse_normal |  |  | 있었지. 못 살린 환자 한 명. 열일곱 살이었어. 그  |
| 384 | `hidden_nurse_d3_6_f` | {name} | nurse_room | nurse_normal |  |  | *어제 본 연두색 노트가 떠오른다. 첫 장에서 멈춰 있 |
| 385 | `hidden_nurse_d3_7` | 보건선생님 | nurse_room | nurse_normal |  |  | 그래서 학교로 왔어. 여기서는 한 명 한 명 얼굴을 제 |
| 386 | `hidden_nurse_d3_7_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 청진기를 책상 위에 놓고 {name} 쪽 |
| 387 | `hidden_nurse_d3_8` | 보건선생님 | nurse_room | nurse_normal |  |  | 너도 마찬가지야. 다 챙기려고 하지 마. 진짜 중요한  |
| 388 | `hidden_nurse_d3_8_b` | {name} | nurse_room | nurse_normal |  |  | *쥔 종이컵 한쪽이 손가락 모양대로 찌그러진다.* |
| 389 | `hidden_nurse_d3_8_c` | {name} | nurse_room | nurse_normal |  |  | 감사합니다. |
| 390 | `hidden_nurse_d3_8_d` | 보건선생님 | nurse_room | nurse_normal |  |  | 이 정도로 버거우면 참지 말고 말해. 필요하면 상담실도 |
| 391 | `hidden_nurse_d3_8_e` | {name} | nurse_room | nurse_normal |  |  | *상담실 번호가 적힌 안내 카드를 접어 주머니에 넣는다 |
| 392 | `hidden_nurse_d3_8_f` | {name} | nurse_room | 없음 |  |  | *자리에서 일어나 문손잡이를 잡는다. 뒤에서 서랍 여는 |
| 393 | `hidden_nurse_d3_8_g` | {name} | nurse_room | 없음 |  |  | *들뜬 밴드 끝을 손톱으로 누른다. 흔들리는 커튼 너머 |
| 394 | `hidden_nurse_d3_8_h` | {name} | nurse_room | 없음 |  |  | *문손잡이에서 손을 떼고 다시 돌아선다. 서랍 안에서  |
| 395 | `hidden_nurse_d3_choice2` | 보건선생님 | nurse_room | nurse_normal |  |  | *'한 명'에서 말을 멈췄다. 종이컵 가장자리가 손에  |
| 396 | `hidden_nurse_d3_choice2_c` | 보건선생님 | nurse_room | nurse_worried |  |  | 편해지는지는 말하는 사람이 정해. 듣는 사람이 밀어붙이 |
| 397 | `hidden_nurse_d3_9` | 보건선생님 | nurse_room | nurse_normal |  |  | 찾아오는 건 괜찮아. 다만 혼자 다 해결해 주겠다는 약 |
| 398 | `hidden_nurse_d3_9_b` | {name} | nurse_room | nurse_normal |  |  | *종이컵을 내려놓고 안내 카드를 주머니에서 다시 꺼낸다 |
| 399 | `hidden_nurse_d3_9_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 네가 더 버거워지면 담임이나 상담실하고 같이 움직일 거 |
| 400 | `hidden_nurse_d3_9_d` | 보건선생님 | nurse_room | nurse_normal |  |  | 그 전에 누구에게 어디까지 말할지는 너랑 먼저 정하고. |
| 401 | `hidden_nurse_d3_9_e` | {name} | nurse_room | nurse_normal |  |  | *보건선생님이 상담 예약표를 책상 앞으로 밀어 둔다.* |
| 402 | `hidden_nurse_d3_9_f` | {name} | nurse_room | nurse_normal |  |  | *예약표에는 보건실과 상담실 시간이 나란히 적혀 있다. |
| 403 | `hidden_nurse_d3_11` | 보건선생님 | nurse_room | nurse_normal |  |  | 다음 수업 늦겠다. 오늘 한 얘기는 여기까지 정리하고  |
| 404 | `hidden_nurse_d3_freetalk` | 보건선생님 | nurse_room | nurse_normal |  |  | *커튼을 반쯤 닫고 의자를 끌어온다.* 오늘은 농담보다 |
| 405 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | 이번 주말에 시간 있어? 공원에 같이 가자. |
| 406 | `morning3_date_seo_choice` | 서연 | school_hallway | seyoun_normal |  |  | *서연이 교실 문 앞에서 묻는다. 다인이 들고 있던 물 |
| 407 | `morning3_date_seo_decline` | {name} | school_hallway | seyoun_normal |  |  | *서연의 제안을 거절하자 다인이 돌리던 물병 뚜껑을 다 |
| 408 | `morning3_date_seo_decline_b` | {name} | room_school | seyoun_normal |  |  | *교실로 돌아왔다. 수업 하나가 지나고 또 쉬는 시간이 |
| 409 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼  |
| 410 | `morning3_date_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 배구공을 옆구리에 낀 채 이쪽을 보다가 코트로 |
| 411 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다 |
| 412 | `morning3_date_yuna_1_b` | 서연 | room_school | seyoun_normal |  |  | 유나. 쪽지로 물으면 다른 사람은 못 듣잖아. |
| 413 | `morning3_date_yuna_2` | {name} | room_school | yuna_normal |  |  | *'주말. 헌책방. 먼저 잡힌 약속이 있어도, 네가 오 |
| 414 | `morning3_date_yuna_choice` | {name} | room_school | yuna_normal |  |  | *쪽지를 읽는 동안 유나는 서연과 다인을 차례로 본다. |
| 415 | `morning3_date_yuna_decline` | {name} | room_school | yuna_sad |  |  | *쪽지 뒷면에 답을 적어 책 위에 놓는다. 유나는 책갈 |
| 416 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 417 | `morning3_end` | {name} | room_school | 없음 |  |  | *수업 종료 종이 울리고 곧 점심시간이 된다.* |
| 418 | `morning3_end_b` | 유나 | room_school | yuna_normal |  |  | 맛있네. |
| 419 | `lunch3_start` | {name} | room_school | yuna_normal |  |  | *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. |
| 420 | `lunch3_start_2_b` | 다인 | room_school | dain_normal |  |  | *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가 |
| 421 | `lunch3_meal_1` | 다인 | room_school | dain_laugh |  |  | 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고  |
| 422 | `lunch3_meal_2` | {name} | room_school | dain_laugh |  |  | 그건 내 거... |
| 423 | `lunch3_meal_3` | 서연 | room_school | seyoun_normal |  |  | 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점 |
| 424 | `lunch3_meal_4` | {name} | room_school | seyoun_normal |  |  | 점수 매기지 마. |
| 425 | `lunch3_meal_5` | 서연 | room_school | seyoun_normal |  |  | 10점 만점이야. 나쁜 거 아닌데? |
| 426 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다 |
| 427 | `lunch3_meal_7` | {name} | room_school | seyoun_normal |  |  | 유나, 그건 내가 제일 좋아하는 건데. |
| 428 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임 |
| 429 | `lunch3_meal_8` | {name} | room_school | yuna_bored |  |  | *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다. |
| 430 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. |
| 431 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓 |
| 432 | `lunch3_meal_11` | {name} | room_school | yuna_bored |  |  | *누구에게 줄까?* |
| 433 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *마지막 반찬을 누구에게 줄지 고민한다.* |
| 434 | `lunch3_give_yuna_1` | 유나 | room_school | yuna_normal |  |  | 고마워. |
| 435 | `lunch3_yuna_skin_check` |  | room_school | yuna_normal |  |  |  |
| 436 | `lunch3_give_yuna_2_check` |  | room_school | 없음 |  |  |  |
| 437 | `lunch3_give_yuna_seo_affinity` |  | room_school | 없음 |  |  |  |
| 438 | `lunch3_give_yuna_seo_low` | 서연 | room_school | seyoun_normal |  |  | *서연은 자기 도시락을 정리한다.* |
| 439 | `lunch3_give_yuna_3_check` |  | room_school | 없음 |  |  |  |
| 440 | `lunch3_give_yuna_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 빈 물병을 가방에 넣는다.* 난 괜찮아. |
| 441 | `lunch3_end` | {name} | room_school | 없음 |  |  | *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다 |
| 442 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육 |
| 443 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다 |
| 444 | `after3_choice` | {name} | school_hallway | 없음 |  | 🌅 | *어디로 갈까.* |
| 445 | `after3_walk_home` | {name} | school_hallway | 없음 |  | 🌅 | *잡힌 약속은 없다. 휴대폰을 가방에 넣고 교문 쪽으로 |
| 446 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.* |
| 447 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 448 | `after3_group_nurse_companion` | 보건선생님과 동행 | nurse_room | 없음 |  | 🌅 | *건강 점검표와 운동부 물품 상자가 나란히 놓인다. 보 |
| 449 | `after3_group_return` | {name} | school_hallway | 없음 |  | 🌅 | *대화를 마치고 복도로 나온다.* |
| 450 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 451 | `minsu_d3_check` | {name} | school | 없음 |  | 🌅 |  |
| 452 | `minsu_d3_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문 앞에 민수가 서 있다.* |
| 453 | `minsu_d3_2` | 민수 | school | 없음 |  | 🌅 | 봤다. |
| 454 | `minsu_d3_3` | 민수 | school | 없음 |  | 🌅 | 점심때. 그리고 방금 서연 표정도. |
| 455 | `minsu_d3_4` | 민수 | school | 없음 |  | 🌅 | 어제 내가 뭐랬냐. 나중에 셋 다 울면 네 탓이라고 했 |
| 456 | `minsu_d3_5` | 민수 | school | 없음 |  | 🌅 | 옆에서 보기 좀 힘들다. 걔들 다 좋은 애들이야. 네가 |
| 457 | `minsu_d3_5b` | 민수 | school | 없음 |  | 🌅 | *민수는 빨대 포장지를 끝까지 접어 테이블 위에 내려놓 |
| 458 | `minsu_d3_6` | {name} | school | 없음 |  | 🌅 | 맞아. |
| 459 | `minsu_d3_6b` | 민수 | school | 없음 |  | 🌅 | 전 학교에서 뭔 일 있었는지 안 물어볼게. 근데 하나만 |
| 460 | `minsu_d3_7` | 민수 | school | 없음 |  | 🌅 | 거절도 배려야. 안 되는 관계에 계속 여지 주는 것보다 |
| 461 | `minsu_d3_8` | {name} | school | 없음 |  | 🌅 | *거절도 배려다. 전 학교에서 나는 소정이에게 고백할  |
| 462 | `minsu_d3_9` | 민수 | school | 없음 |  | 🌅 | *민수는 더 말하지 않고 끝까지 접은 빨대 포장지를 내 |
| 463 | `minsu_d3_10` | 민수 | school | 없음 |  | 🌅 | 내일 학교에서 보자. 진지하게 생각해. |
| 464 | `night3_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 가방을 의자에 걸어 둔다.* |
| 465 | `night3_start_2` | {name} | room_my | 없음 |  |  | *책상 위에 엎어 둔 핸드폰 화면을 켠다.* |
| 466 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *읽지 않은 메시지가 떠 있다.* |
| 467 | `night3_dream_1` | {name} | school | 없음 |  |  | *꿈속에서 누군가와 나란히 걷는다. 얼굴은 보이지 않고 |
| 468 | `night3_dream_2_b` | {name} | school | 없음 |  |  | *메모장을 닫았다. 내일 보낼 문장은 아직 없다.* |
| 469 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *커튼 사이로 들어온 아침 햇살에 눈을 뜬다. 핸드폰  |
| 470 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *'삭제하시겠습니까?' 확인 창이 뜬다. 손가락이 버튼 |
| 471 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *1초 동안 화면을 내려다본다. 소정이 책상의 낙서와  |
| 472 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *그래. 삭제 버튼에 올린 손가락으로 화면을 누른다.* |
| 473 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼을 누르지 않고 사진을 새 폴더로 옮긴다.  |
| 474 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *'거절도 네가 해야 할 일이야.' 민수의 말이 떠오른 |
| 475 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *갤러리에서 소정이 사진이 사라지고 빈칸만 남는다.* |
| 476 | `night3_faithful_reflect_4_b` | {name} | room_my | 없음 |  |  | *빈 앨범 썸네일 위를 엄지로 문지른다.* |
| 477 | `night3_faithful_reflect_4_c` | {name} | room_my | 없음 |  |  | *핸드폰을 덮자 검은 화면에 갤러리의 빈칸이 겹쳐 보인 |
| 478 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *알람이 울리기 전에 눈을 떴다.* |
| 479 | `night3_end` | {name} | room_my | 없음 |  |  | *방 불을 끄고 핸드폰을 엎어 둔다.* |
| | **Day 4** | | | | | | |
| 480 | `morning4_start` | {name} | room_my | 없음 |  |  | *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다 |
| 481 | `morning4_nightmare_check` |  | room_my | 없음 |  |  |  |
| 482 | `minsu_cheer_1` | {name} | room_my | 없음 |  |  | *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.* |
| 483 | `minsu_cheer_1_b` | 민수 | room_my | minsu_normal | 0.35 |  | *야 오늘 데이트라며?* |
| 484 | `minsu_cheer_1_c` | {name} | room_my | minsu_normal | 0.35 |  | *어떻게 알았어* |
| 485 | `minsu_cheer_1_d` | 민수 | room_my | minsu_normal | 0.35 |  | *다인이가 단톡방에 올림. 내일 약속 있음, 이라고* |
| 486 | `minsu_cheer_2` | 민수 | room_my | minsu_normal | 0.35 |  | 잘하고 와ㅋㅋ |
| 487 | `minsu_cheer_3` | {name} | room_my | minsu_normal | 0.35 |  | 알아. |
| 488 | `minsu_cheer_4_branch` |  | room_my | 없음 |  |  |  |
| 489 | `minsu_cheer_4_ins_single` | {name} | room_my | minsu_normal | 0.35 |  | *핸드폰 캘린더를 본다. 오늘 약속은 하나뿐이다.* |
| 490 | `morning4_start_2` | {name} | room_my | 없음 |  |  | *심호흡하고 약속 메시지를 다시 확인한다.* |
| 491 | `morning4_fallback_msg` | {name} | room_my | 없음 |  |  | *주말 아침. 알림 몇 개를 확인하고 핸드폰을 내려놓는 |
| 492 | `morning4_hidden_check` | {name} | room_my | 없음 |  |  | *주말 아침, 학교 앞 사거리에서 신호를 기다린다.* |
| 493 | `hidden_nurse_d4_morning_1` | {name} | nurse_room | nurse_normal |  |  | *학교 행사 준비일 아침. 예약해 둔 상담 시간에 맞춰 |
| 494 | `hidden_nurse_d4_morning_3` | 보건선생님 | nurse_room | nurse_normal |  |  | 시간 맞춰 왔네. 앉아. |
| 495 | `hidden_nurse_d4_morning_4` | 보건선생님 | nurse_room | nurse_normal |  |  | *상담 기록지를 펼치고 펜을 든다.* |
| 496 | `hidden_nurse_d4_morning_5` | {name} | nurse_room | nurse_normal |  |  | 지난번 상담 마무리하는 거죠? |
| 497 | `hidden_nurse_d4_morning_6` | 보건선생님 | nurse_room | nurse_normal |  |  | 응. 오늘 상태를 확인하고 다음에 도움받을 곳까지 정해 |
| 498 | `hidden_nurse_d4_morning_7` | 보건선생님 | nurse_room | nurse_normal |  |  | *지난 상담에서 적어둔 항목을 하나씩 확인한다.* |
| 499 | `hidden_nurse_d4_morning_8` | 보건선생님 | nurse_room | nurse_normal |  |  | 한 가지 확인할게. |
| 500 | `hidden_nurse_d4_morning_9` | {name} | nurse_room | nurse_normal |  |  | 뭔데요? |
| 501 | `hidden_nurse_d4_morning_10` | 보건선생님 | nurse_room | nurse_normal |  |  | *학교 상담 안내문을 {name} 쪽으로 돌려 놓는다. |
| 502 | `hidden_nurse_d4_morning_11` | 보건선생님 | nurse_room | nurse_normal |  |  | 보건실 말고도 도움을 청할 어른은 정해뒀어? |
| 503 | `hidden_nurse_d4_morning_choice` | {name} | nurse_room | nurse_normal |  |  | *안내문에는 담임 상담, 위클래스, 보호자 연락 순서가 |
| 504 | `hidden_nurse_d4_morning_choice_a` | {name} | nurse_room | nurse_normal |  |  | 담임이랑 상담실에도 말해볼게요. |
| 505 | `hidden_nurse_d4_morning_12` | 보건선생님 | nurse_room | nurse_normal |  |  | 그래. 혼자 버티는 것보다 훨씬 낫다. |
| 506 | `hidden_nurse_d4_morning_13` | 보건선생님 | nurse_room | nurse_normal |  |  | 네 얘기를 함부로 옮기진 않을게. 다만 다칠 위험이 보 |
| 507 | `hidden_nurse_d4_morning_freetalk` | 보건선생님 | nurse_room | nurse_normal |  |  | *상담 기록지를 덮는다.* 오늘 적은 순서 기억하지?  |
| 508 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 509 | `hidden_nurse_d4_1` | {name} | nurse_room | nurse_normal |  |  | *책상 한쪽에 행사 구급함과 검진 도구가 쌓여 있다.  |
| 510 | `hidden_nurse_d4_1_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 돌아본다.* 어? 진짜 왔어? |
| 511 | `hidden_nurse_d4_2` | 보건선생님 | nurse_room | nurse_normal |  |  | 학교 행사 응급키트 만들 사람을 구했는데 진짜 지원할  |
| 512 | `hidden_nurse_d4_2_b` | {name} | nurse_room | nurse_shy |  |  | 오늘은 환자 말고 봉사자네요. |
| 513 | `hidden_nurse_d4_2_c` | 보건선생님 | nurse_room | nurse_dry_smile |  |  | 오늘은 봉사자. 다치면 그때 다시 환자. |
| 514 | `hidden_nurse_d4_2_d` | {name} | nurse_room | nurse_shy |  |  | *행사 스태프들이 드나드는 사이, 테이블 위에 거즈와  |
| 515 | `hidden_nurse_d4_2_e` | 보건선생님 | nurse_room | nurse_normal |  |  | *빈 파우치를 건넨다.* 거즈 두 장, 소독솜 세 개씩 |
| 516 | `hidden_nurse_d4_2_f` | {name} | nurse_room | nurse_normal |  |  | *파우치마다 준비물을 채운다. 보건선생님은 완성된 키트 |
| 517 | `hidden_nurse_d4_2_g` | 보건선생님 | nurse_room | nurse_tired |  |  | 대학병원에선 이런 준비도 혼자 맡는 날이 많았어. |
| 518 | `hidden_nurse_d4_2_h` | {name} | nurse_room | nurse_shy |  |  | 혼자서요? |
| 519 | `hidden_nurse_d4_3` | {name} | nurse_room | nurse_normal |  |  | 도와준다고 했잖아요. |
| 520 | `hidden_nurse_d4_4` | 보건선생님 | nurse_room | nurse_tired |  |  | 야간 근무 때는 간호사 세 명 몫을 혼자 하는 날도 있 |
| 521 | `hidden_nurse_d4_4_b` | {name} | nurse_room | nurse_normal |  |  | 그래서 번아웃이... |
| 522 | `hidden_nurse_d4_4_c` | 보건선생님 | nurse_room | nurse_tired |  |  | *서류철을 덮는다. 볼펜 끝이 표지 위에서 한 번 미끄 |
| 523 | `hidden_nurse_d4_4_d` | 보건선생님 | nurse_room | nurse_tired |  |  | 그때 나한테 제일 힘들었던 건 일의 양이 아니었어. |
| 524 | `hidden_nurse_d4_4_e` | {name} | nurse_room | nurse_normal |  |  | 그럼 뭐였어요? |
| 525 | `hidden_nurse_d4_4_f` | 보건선생님 | nurse_room | nurse_shy |  |  | 사람 이름보다 병상 번호를 먼저 확인하게 되는 순간이  |
| 526 | `hidden_nurse_d4_4_g` | {name} | nurse_room | nurse_normal |  |  | *서류 맨 위 병상 번호 칸에 펜촉 자국이 남아 있다. |
| 527 | `hidden_nurse_d4_4_h` | 보건선생님 | nurse_room | nurse_normal |  |  | 학교에선 한 명씩 볼 시간이 있잖아. 그래도 내가 못  |
| 528 | `hidden_nurse_d4_4_i` | {name} | nurse_room | nurse_normal |  |  | 연결하는 것도 치료예요? |
| 529 | `hidden_nurse_d4_4_j` | 보건선생님 | nurse_room | nurse_normal |  |  | 그러니까 여기서 막히면 담임이나 상담실도 찾아가. 혼자 |
| 530 | `hidden_nurse_d4_4_k` | {name} | nurse_room | nurse_shy |  |  | *마지막 응급키트의 지퍼를 닫는다. 바깥에서는 다른 봉 |
| 531 | `hidden_nurse_d4_5` | 보건선생님 | nurse_room | nurse_normal |  |  | 그래서 학교로 왔어. 치료보다 먼저 말을 듣는 법을 다 |
| 532 | `hidden_nurse_d4_name_choice` | {name} | nurse_room | nurse_shy |  |  | *보건선생님이 완성된 응급키트 수를 적는다.* |
| 533 | `hidden_nurse_d4_name_choice_a` | 보건선생님 | nurse_room | nurse_normal |  |  | 혼자 참던 학생이 먼저 문을 열고 들어올 때. 그때는  |
| 534 | `hidden_nurse_d4_6` | 보건선생님 | nurse_room | nurse_normal |  |  | 고마워. 덕분에 빨리 끝났어. 별건 아니고. |
| 535 | `hidden_nurse_d4_6_b` | {name} | nurse_room | nurse_normal |  |  | 별거 아닌데요. |
| 536 | `hidden_nurse_d4_6_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 별거 맞아. 대신 봉사 시간은 정확히 적어줄게. |
| 537 | `hidden_nurse_d4_6_d` | {name} | nurse_room | nurse_normal |  |  | *보건선생님이 봉사 확인표에 시작과 종료 시간을 적는다 |
| 538 | `hidden_nurse_d4_choice` | 보건선생님 | nurse_room | nurse_normal |  |  | 남은 건 라벨 붙이기야. 행사 스태프들이 간식 사러 가 |
| 539 | `hidden_nurse_d4_meal_walk` | {name} | store | nurse_normal |  |  | *행사 스태프들과 학교 앞 분식집에 들렀다. 포장 봉투 |
| 540 | `hidden_nurse_d4_meal_1` | 보건선생님 | store | nurse_normal |  |  | 매운맛 누가 골랐어. 물부터 챙겨. |
| 541 | `hidden_nurse_d4_meal_1_b` | {name} | store | nurse_normal |  |  | 선생님이 제일 먼저 드셨잖아요. |
| 542 | `hidden_nurse_d4_meal_1_c` | 보건선생님 | store | nurse_normal |  |  | 확인하려고 먹은 거지. *물을 한 모금 마신다.* 이건 |
| 543 | `hidden_nurse_d4_meal_1b` | {name} | nurse_room | nurse_normal |  |  | *스태프들과 보건실로 돌아와 키트 상자에 라벨을 붙인다 |
| 544 | `hidden_nurse_d4_meal_2` | {name} | nurse_room | nurse_normal |  |  | 병원 얘기할 때랑 지금은 표정이 다르네요. |
| 545 | `hidden_nurse_d4_meal_2_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *라벨 한 장이 상자 모서리에 비뚤게 붙는다.* |
| 546 | `hidden_nurse_d4_meal_3` | 보건선생님 | nurse_room | nurse_normal |  |  | 고맙긴 한데, 선생님 기분까지 네 몫으로 만들진 마. |
| 547 | `hidden_nurse_d4_meal_3_b` | {name} | nurse_room | nurse_normal |  |  | *마지막 라벨을 상자 한가운데에 붙인다.* |
| 548 | `hidden_nurse_d4_meal_3_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 자, 여기까지. 봉사 시간 확인하고 각자 행사장으로 돌 |
| 549 | `hidden_nurse_d4_meal_3_d` | {name} | nurse_room | nurse_normal |  |  | *문을 나서려는데 보건선생님이 확인표를 들고 부른다.* |
| 550 | `hidden_nurse_d4_meal_3_e` | 보건선생님 | nurse_room | nurse_normal |  |  | {name}, 확인표 놓고 간다. |
| 551 | `hidden_nurse_d4_meal_4` | 보건선생님 | nurse_room | nurse_normal |  |  | {name}. 오늘 도와줘서 고마워. 월요일에 봉사 시 |
| 552 | `hidden_nurse_d4_meal_4_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *완성된 응급키트 상자를 행사 담당 교사에게 건넨다.* |
| 553 | `hidden_nurse_d4_freetalk` | 보건선생님 | nurse_room | nurse_normal |  |  | *마지막 응급키트의 지퍼를 닫고 맞은편 의자를 가리킨다 |
| 554 | `morning4_end` | {name} | room_my | 없음 |  |  | *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 |
| 555 | `day4_night_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 옷소매에 공원 흙과 학교 먼지가 조금 |
| 556 | `day4_night_branch` | 시스템 | room_my | 없음 |  |  |  |
| 557 | `day4_adult_nurse_student_rank` |  | room_my | 없음 |  |  |  |
| 558 | `day4_nurse_yuna_counteroffer` | 유나 | yuna_hideout | yuna_sad |  |  | *보건실을 나선 뒤 유나에게서 별관 사진 한 장이 도착 |
| 559 | `day4_adult_counteroffer_accept_yuna` | {name} | event_temptation_yuna | 없음 |  |  | *유나는 {name} 바로 앞까지 다가와 한 손으로 책 |
| 560 | `day4_adult_night_regret_target_branch` |  | room_my | 없음 |  |  |  |
| 561 | `day4_adult_night_regret_nurse` | {name} | room_my | nurse_worried | 0.35 |  | *집에 돌아와 휴대폰을 켜자 보건선생님의 '아까 표정이 |
| 562 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 563 | `night_nurse_msg_1` | 보건선생님 | room_my | nurse_normal | 0.35 |  | *학교 건강관리 앱 알림* 오늘 상담 후 상태를 확인해 |
| 564 | `night_nurse_msg_2` | {name} | room_my | nurse_normal | 0.35 |  | *자동 알림 아래에 '안정됨'과 '추가 상담 필요' 두 |
| 565 | `night_nurse_msg_3` | 보건선생님 | room_my | nurse_normal | 0.35 |  | *보건실 안내* 추가 상담이 필요하면 내일 행사 시작  |
| 566 | `night_nurse_msg_4` | 보건선생님 | room_my | nurse_normal | 0.35 |  | *보건실 안내* 늦은 시간에는 답하지 않아도 됩니다.  |
| 567 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *알람을 일요일 오전으로 맞추고 방 불을 끈다. 전하지 |
| 568 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안 시계가 자정 쪽으로 넘어간다. 휴대폰 화면도  |
| | **Day 5** | | | | | | |
| 569 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소 |
| 570 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 571 | `morning5_temptation_counteroffer_branch` |  | room_school | 없음 |  |  |  |
| 572 | `morning5_caught_nurse_counteroffer` | 보건선생님 | nurse_room | nurse_worried |  |  | *보건실 진료대에 휴대폰을 내려놓는 순간 화면이 켜진다 |
| 573 | `morning5_caught_nurse_lie` | 보건선생님 | nurse_room | nurse_angry |  |  | *보건선생님은 다시 뜬 알림을 확인하고 안경을 벗는다. |
| 574 | `morning5_counteroffer_group_talk` | 두 사람 | room_school | 없음 |  |  | *두 사람의 시선이 한꺼번에 닿는다. 어젯밤은 대체 뭐 |
| 575 | `morning5_counteroffer_choice` | {name} | room_school | 없음 |  |  | *대화가 끝나자 두 사람 모두 답을 기다린다.* |
| 576 | `morning5_counteroffer_choice_lead` | {name} | room_school | 없음 |  |  | *먼저 약속했던 사람 쪽으로 몸을 돌린다.* 어젯밤 내 |
| 577 | `morning5_after_counteroffer` | {name} | room_school | 없음 |  |  | *조회 종이 한 장이 교탁 아래로 미끄러진다. 아무도  |
| 578 | `morning5_after_counteroffer_hidden_check` |  | room_school | 없음 |  |  |  |
| 579 | `hidden_nurse_d5_after_co_check` |  | school_hallway | 없음 |  |  |  |
| 580 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 581 | `morning5_sojeong_1` | {name} | room_school | 없음 |  |  | *휴대폰 메모 앱을 연다. '소정에게'로 시작하는 빈  |
| 582 | `morning5_sojeong_2` | {name} | room_school | 없음 |  |  | *마흔 번째 초안은 쓰지 않는다. 가장 짧은 문장을 골 |
| 583 | `morning5_sojeong_3` | {name} | room_school | 없음 |  |  | 그때 네 책상과 낙서를 보고도 선생님께 말하지 않았어. |
| 584 | `morning5_sojeong_4` | {name} | room_school | 없음 |  |  | *전송 표시가 뜬다. 읽음 표시는 기다리지 않고 대화방 |
| 585 | `morning5_sojeong_5` | {name} | room_school | 없음 |  |  | *지금 담임에게도 메시지를 보낸다. '전학 오기 전 학 |
| 586 | `morning5_route_branch` |  | room_school | 없음 |  |  |  |
| 587 | `tour_co_branch` |  | school | 없음 |  |  |  |
| 588 | `tour_co_event_1` | {name} | school_hallway | 없음 |  |  | *점심 종이 울렸지만 줄은 짧다. 복도에는 도시락 뚜껑 |
| 589 | `tour_co_event_2` | {name} | school_hallway | 없음 |  |  | *행사 조끼 하나가 의자 등받이에 걸려 있다. 누구 것 |
| 590 | `after5_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 591 | `after5_co_start` | {name} | school_hallway | 없음 |  | 🌅 | *행사가 끝난 복도에 아침에 마주쳤던 사람들이 다시 모 |
| 592 | `after5_co_abandoned_branch` |  | school_hallway | 없음 |  | 🌅 |  |
| 593 | `after5_co_nurse_1` | 보건선생님 | nurse_room | nurse_worried |  | 🌅 | *진료 기록을 서랍에 넣는다.* 상담은 여기까지 할게. |
| 594 | `after5_co_nurse_2` | 보건선생님 | nurse_room | nurse_angry |  | 🌅 | 아프면 오늘은 다른 선생님한테 가. 내가 봐 주긴 어려 |
| 595 | `after5_co_tempter_branch` |  | school_hallway | 없음 |  | 🌅 |  |
| 596 | `after5_co_tempter_yuna_1` | 유나 | library_old | yuna_sad |  | 🌅 | *잠금화면에는 아직 별관 사진이 떠 있다.* 어제 부른 |
| 597 | `after5_co_tempter_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | 지금은 따라가지 마. 그거면 돼. |
| 598 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 599 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다.* |
| 600 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다. 서연은 잠시 멈췄다가 고개 |
| 601 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 602 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 603 | `after5_farewell_dain_1` | {name} | gym | dain_normal |  | 🌅 | *체육관 앞에서 다인이 걸어온다. 평소보다 보폭이 작다 |
| 604 | `after5_farewell_dain_low` | 다인 | gym | dain_normal |  | 🌅 | *체육관 앞에서 다인이 걸어오다 두 걸음 떨어진 곳에  |
| 605 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *석양이 교정 창문마다 걸린다. 방송실에서 행사 종료  |
| 606 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 607 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 608 | `ending_counteroffer_bitter` |  | park | 없음 |  |  |  |
| 609 | `ending_counteroffer_choice_lead` | {name} | park | 없음 |  |  | *먼저 약속했던 사람을 선택했다. 사과가 어젯밤의 일을 |
| 610 | `ending_counteroffer_bitter_route` |  | park | 없음 |  |  |  |
| 611 | `co_bitter_nurse_1` | {name} | nurse_room | nurse_worried |  |  | *보건실 문은 열려 있는데 안에는 아무도 없다.* |
| 612 | `co_bitter_nurse_2` | 보건선생님 | nurse_room | nurse_worried |  |  | 차트는 넘겼어. 그날 일은 적지 않았고. |
| 613 | `co_bitter_nurse_3` | {name} | ending_bittersweet_nurse | 없음 |  |  | *안내 카드가 놓였던 창가에는 빈 컵만 남아 있다. 보 |
| 614 | `hidden_bitter_nurse_ending_title` |  | ending_bittersweet_nurse | 없음 |  |  | ─── 보건선생님 BITTERSWEET END ─── |
| 615 | `day5_nurse_ending_freetalk_intro` | {name} | nurse_house | nurse_normal |  |  | *집에서 정리를 마친 그녀가 맞은편 자리를 비워 둔다. |
| 616 | `day5_nurse_ending_freetalk_router` | {name} | nurse_house | 없음 |  |  |  |
| 617 | `day5_nurse_ending_freetalk_bittersweet` | 보건선생님 | nurse_room | nurse_normal |  | 🌙 | *돌려준 쪽지를 연두색 기록 카드 위에 놓는다.* 서운 |
| 618 | `day5_credits` |  | school | 없음 |  |  |  |
| 619 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### day5_seo_ending_freetalk_bittersweet

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_yuna_choice`: (선택)
- `after_end`: (선택)
- `after_hidden_homeroom_choice`: (선택)
- `after_homeroom_honest_choice2`: (선택)
- `hidden_homeroom_d2_choice1`: (선택)
- `hidden_homeroom_d2_choice2`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_yuna_choice`: (선택)
- `after2_choice`: (선택)
- `after2_yuna_choice`: (선택)
- `night2_choice`: (선택)
- `hidden_homeroom_d3_choice`: (선택)
- `morning3_date_seo_choice`: (선택)
- `morning3_date_dain_choice`: (선택)
- `morning3_date_yuna_choice`: (선택)
- `lunch3_choice`: (선택)
- `confess_seo_choice`: (선택)
- `wall_seo_yuna_tempt_2`: (선택)
- `morning5_caught_seoyeon_by_yuna`: (선택)
- `morning5_counteroffer_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=-43 유나=24 다인=-5 담임=9 보건=0

<details>
<summary>씬 타임라인 (570씬)</summary>

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
| 77 | `lunch_yuna_1` | {name} | library_old | yuna_normal |  |  | *유나의 뒷모습을 따라 도서관으로 들어간다. 점심 종이 |
| 78 | `lunch_yuna_1_aff_default` | 유나 | library_old | yuna_normal |  |  | *쪽지는 없다. 유나는 열람실 구석에 먼저 앉아 책을  |
| 79 | `lunch_yuna_2` | 유나 | library_old | yuna_normal |  |  | *열람실 구석에서 책을 편다. 맞은편 의자 다리가 바닥 |
| 80 | `lunch_yuna_4` | 유나 | library_old | yuna_normal |  |  | *책장 한 장이 넘어간다. 유나는 대출 영수증 끝을 접 |
| 81 | `lunch_yuna_5` | {name} | library_old | yuna_normal |  |  | *5초, 다시 10초가 지나도록 유나는 대출 영수증 끝 |
| 82 | `lunch_yuna_5_b` | {name} | library_old | yuna_normal |  |  | 앉아도 돼? |
| 83 | `lunch_yuna_7` | 유나 | library_old | yuna_normal |  |  | *책에서 시선을 떼지 않는다.* 시끄럽지 않으면. |
| 84 | `lunch_yuna_8` | {name} | library_old | yuna_normal |  |  | *유나는 책을 다시 펴면서 맞은편 의자에 놓인 가방만  |
| 85 | `lunch_yuna_10` | {name} | library_old | yuna_normal |  |  | *벽시계 초침과 책장 넘어가는 소리가 엇갈린다. 맞은편 |
| 86 | `lunch_yuna_10_b` | {name} | library_old | yuna_normal |  |  | *유나의 책에는 오래된 책갈피가 끼워져 있고 흐릿한 글 |
| 87 | `lunch_yuna_12` | 유나 | library_old | yuna_normal |  |  | *책등 위로 시선을 올린다.* 그거 3권인데. |
| 88 | `lunch_yuna_13` | {name} | library_old | yuna_normal |  |  | 응? |
| 89 | `lunch_yuna_14` | 유나 | library_old | yuna_normal |  |  | 1권부터 읽어야 해. |
| 90 | `lunch_yuna_15` | {name} | library_old | yuna_normal |  |  | *유나가 자기 옆에 놓인 책을 하나 밀어준다.* |
| 91 | `lunch_yuna_16` | {name} | library_old | yuna_normal |  |  | 고마워. |
| 92 | `lunch_yuna_17` | 유나 | library_old | yuna_normal |  |  | 읽고 돌려줘. |
| 93 | `lunch_yuna_18` | 유나 | library_old | yuna_normal |  |  | *유나는 다시 자기 책을 편다. 빌려준 책은 첫 문장이 |
| 94 | `lunch_yuna_20` | {name} | library_old | yuna_normal |  |  | *종이 울린다.* |
| 95 | `lunch_yuna_21` | {name} | library_old | yuna_normal |  |  | 벌써 종이네. |
| 96 | `lunch_yuna_22` | 유나 | library_old | yuna_normal |  |  | *책갈피를 끼운다.* 조용히 있어줘서. |
| 97 | `lunch_yuna_23` | {name} | library_old | yuna_normal |  |  | 응? |
| 98 | `lunch_yuna_24` | 유나 | library_old | yuna_normal |  |  | 괜찮았어. |
| 99 | `lunch_yuna_25` | 유나 | library_old | yuna_normal |  |  | *유나는 책을 품에 끼고 먼저 나간다. 문이 닫힌 뒤, |
| 100 | `lunch_yuna_choice` | {name} | library_old | yuna_normal |  |  | *유나는 아직 몇 발자국 앞이다. 두고 간 책을 들고  |
| 101 | `lunch_yuna_c2_1` | 유나 | library_old | yuna_normal |  |  | 뭐, 할 게 없으니까. |
| 102 | `lunch_yuna_c2_2` | 유나 | library_old | yuna_normal |  |  | 근데 이 도서관, 나쁘지 않아. 조용해서. |
| 103 | `lunch_yuna_freetalk` | 유나 | library_old | yuna_normal |  |  | *책갈피를 끼우고 표지를 덮는다. 손바닥으로 맞은편 의 |
| 104 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *종이 울린다. 점심시간이 끝났다.* |
| 105 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에 |
| 106 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 107 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창 |
| 108 | `after_kakao_5` | {name} | school_hallway | 없음 |  | 🌅 | *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른 |
| 109 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록  |
| 110 | `after1_jealousy_yuna_1` | 다인 | school_hallway | dain_normal |  | 🌅 | 점심때 도서관 갔다며? 유나랑? |
| 111 | `after1_jealousy_yuna_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 그 애 원래 사람 안 만나는데. |
| 112 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *복도를 계속 걷는다.* |
| 113 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도를 걷는데 뒤에서 쿵쿵 발소리.* |
| 114 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 조심! |
| 115 | `after_miss_dain_3` | {name} | school_hallway | dain_normal |  | 🌅 | *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 |
| 116 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 피했다? 반사신경 괜찮은데. |
| 117 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 넌 복도에서 왜 전력질주야? |
| 118 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 늦었거든! 체육관 가야 해. 내일 보자, 전학생! |
| 119 | `after_miss_dain_6_b` | {name} | school_hallway | dain_laugh |  | 🌅 | *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을  |
| 120 | `after_miss_dain_7` | {name} | school_hallway | dain_laugh |  | 🌅 | *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아 |
| 121 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으 |
| 122 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 이거 떨어뜨렸어. |
| 123 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피 |
| 124 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌  |
| 125 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 고마워. |
| 126 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피를 책등 사이에 끼우고 돌아선다.* |
| 127 | `after_miss_yuna_4` | {name} | library_old | yuna_normal |  | 🌅 | *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 |
| 128 | `after_miss_seoyeon_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *하교하려는데 복도에서 서연과 마주친다.* |
| 129 | `after_miss_seoyeon_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 아까 어디 갔어? |
| 130 | `after_miss_seoyeon_3` | {name} | school_hallway | seyoun_normal |  | 🌅 | 어디라니? |
| 131 | `after_miss_seoyeon_4` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 옥상 열어놨는데 안 왔네. — 전학생, 배짱이 있어. |
| 132 | `after_miss_seoyeon_5` | {name} | school_hallway | seyoun_normal |  | 🌅 | 기다린 거야? |
| 133 | `after_miss_seoyeon_6` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 바람 쐬러 올라간 건데 문이 열려 있길래. |
| 134 | `after_miss_seoyeon_7` | {name} | school_hallway | seyoun_normal |  | 🌅 | *서연의 클립보드 맨 위에 내 이름이 남아 있다. 체크 |
| 135 | `after_miss_seoyeon_8` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 내일은 빠지지 마. |
| 136 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든 |
| 137 | `after_hidden_homeroom_1` | {name} | school_hallway | 없음 |  | 🌅 | *하교하려다 아까 교실에 마지막까지 남아 출석부를 정리 |
| 138 | `after_hidden_homeroom_2` | 담임 | teacher_office | teacher_normal |  | 🌅 | 어, {name}? — 무슨 일? |
| 139 | `after_hidden_homeroom_3` | {name} | teacher_office | teacher_normal |  | 🌅 | *담임이다. 가디건 한쪽 소매가 접혀 있고 출석부 사이 |
| 140 | `after_hidden_homeroom_3_b` | {name} | teacher_office | teacher_normal |  | 🌅 | 아까 하셨던 말씀이 — 계속 남아서요. |
| 141 | `after_hidden_homeroom_3_c` | 담임 | teacher_office | teacher_normal |  | 🌅 | 아, 그거였어? 잘 왔네. 앉아. |
| 142 | `after_hidden_homeroom_4` | 담임 | teacher_office | teacher_normal |  | 🌅 | 잘못한 건 없고. — 전학생이니까. 적응 좀 어때? |
| 143 | `after_hidden_homeroom_choice` | 담임선생님 | teacher_office | teacher_normal |  | 🌅 | *클립보드를 내리고 {name}의 얼굴을 본다.* |
| 144 | `after_homeroom_honest_1` | 담임 | teacher_office | teacher_normal |  | 🌅 | 정신없는 게 정상이야. 첫날부터 여유로우면 그게 더 이 |
| 145 | `after_homeroom_honest_2` | {name} | teacher_office | teacher_normal |  | 🌅 | 선생님도 전학 경험 있어요? |
| 146 | `after_homeroom_honest_3` | 담임 | teacher_office | teacher_normal |  | 🌅 | 비슷한 거. 갑자기 새로운 곳에 던져진 적은 있지. |
| 147 | `after_homeroom_honest_3_b` | 담임선생님 | teacher_office | teacher_normal |  | 🌅 | *클립보드를 뒤집어 쥐고 엄지로 모서리를 문지른다.* |
| 148 | `after_homeroom_honest_4` | 담임 | teacher_office | teacher_normal |  | 🌅 | 적응 못 하겠으면 교무실로 와. 커피 정도는 — 아,  |
| 149 | `after_homeroom_honest_5` | {name} | teacher_office | teacher_normal |  | 🌅 | 선생님이 학생한테 음료수 사주시는 거예요? |
| 150 | `after_homeroom_honest_6` | 담임 | teacher_office | teacher_normal |  | 🌅 | 교육적 관심이야, 뭐. |
| 151 | `after_homeroom_honest_6_b` | 담임선생님 | teacher_office | teacher_normal |  | 🌅 | *엄지로 출석부의 접힌 모서리를 눌러 편다.* |
| 152 | `after_homeroom_honest_choice2` | {name} | teacher_office | teacher_normal |  | 🌅 | *출석부 모서리가 책상에 닿아 있다.* |
| 153 | `after_homeroom_honest_choice2b` | 담임 | teacher_office | teacher_smile |  | 🌅 | *자판기 쪽을 펜 끝으로 가리킨다.* 기대는 마. 자판 |
| 154 | `after_homeroom_honest_choice2b_b` | 담임선생님 | teacher_office | teacher_smile |  | 🌅 | *출석부를 덮는다. 문턱까지 갔다가 다시 {name}을 |
| 155 | `after_homeroom_honest_7` | 담임 | teacher_office | teacher_normal |  | 🌅 | 아, {name}. |
| 156 | `after_homeroom_honest_8` | {name} | teacher_office | teacher_normal |  | 🌅 | 네? |
| 157 | `after_homeroom_honest_9` | 담임 | teacher_office | teacher_normal |  | 🌅 | 적응 못 하면 또 잡으러 올게. |
| 158 | `after_homeroom_honest_9_b` | {name} | teacher_office | teacher_normal |  | 🌅 | *복도 끝에서 출석부 닫히는 소리가 작게 들린다.* |
| 159 | `after_homeroom_honest_10` | 담임선생님 | school_hallway | teacher_normal |  | 🌅 | *담임은 출석부를 품에 끼고 교무실 안으로 들어간다.  |
| 160 | `after_homeroom_freetalk` | 담임 | school_hallway | teacher_normal |  | 🌅 | *담임이 교무실 문을 반쯤 열어 둔 채 출석부를 옆구리 |
| 161 | `night_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄 |
| 162 | `night_start_3` | {name} | room_my | 없음 |  |  | *핸드폰이 울린다. 학교 메신저.* |
| 163 | `night_msg_yuna_1` | 유나 | room_my | yuna_normal | 0.35 |  | *오늘 조용히 있어줘서 괜찮았어* |
| 164 | `night_msg_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | *내일도 자리 비워 놓을게* |
| 165 | `night_msg_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *'자리 비워 놓을게'를 다시 읽는 사이 화면이 먼저  |
| 166 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 다른 알림이 보인다.* |
| 167 | `night_hidden_homeroom_1` | {name} | room_my | teacher_normal | 0.35 |  | *학교 공지 앱에 담임선생님이 올린 글이 보인다. '3 |
| 168 | `night_hidden_homeroom_2` | {name} | room_my | teacher_normal | 0.35 |  | *공지사항을 한 번 더 읽고 화면을 엎어 둔다. 어두워 |
| 169 | `night_late_transition` | {name} | room_my | 없음 |  |  | *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시 |
| 170 | `night_late_branch` | {name} | room_my | 없음 |  |  | *화면이 밝아진다.* |
| 171 | `night_end_1` | {name} | room_my | 없음 |  |  | *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교 |
| 172 | `night_end_3` | {name} | room_my | 없음 |  |  | *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을  |
| | **Day 2** | | | | | | |
| 173 | `morning2_start` | {name} | room_school | 없음 |  |  | *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.* |
| 174 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 175 | `morning2_dain_1` | {name} | room_school | 없음 |  |  | *교실 문을 여는 순간 손바닥이 등짝을 탁 친다.* |
| 176 | `morning2_dain_2` | 다인 | room_school | dain_normal |  |  | 왔어? 좋은 아침. |
| 177 | `morning2_dain_3` | 다인 | room_school | dain_laugh |  |  | 그 정도로? 체력 관리 좀 해. |
| 178 | `morning2_dain_4` | {name} | room_school | dain_laugh |  |  | 너 아침부터 에너지 과잉 아냐? |
| 179 | `morning2_dain_5` | 다인 | room_school | dain_laugh |  |  | 이게 정상이야! 네가 부족한 거야! |
| 180 | `morning2_dain_6` | 다인 | room_school | dain_laugh |  |  | *아침 조회 전 교실에 다인의 목소리가 먼저 울린다.* |
| 181 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *자리에 앉으려는데 — 책상 위에 접힌 쪽지가 하나 놓 |
| 182 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 183 | `morning2_note_3` | {name} | room_school | yuna_normal | 0.35 |  | *어제와 같은 글씨. 아래쪽에 장소가 적혀 있다. '도 |
| 184 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가다 교실 안을 들여다본다.* 어제 잘 잤 |
| 185 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 학생회장이 교실까지 인사하러 와? |
| 186 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 순찰이야. — 출석률 확인 겸. |
| 187 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | *복도로 돌아가기 직전 클립보드 끝이 문틀에 한 번 닿 |
| 188 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연이 사라진 복도를 바라보는데 — 뒤에서 민수가 돌 |
| 189 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 이틀 만에 학생회장이 인사하러 오냐? 나 1 |
| 190 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 인기가 없는 거 아닐까. |
| 191 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 그건 맞는데 그게 중요한 게 아니잖아. |
| 192 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *다인은 서연의 뒷모습이 교실 안으로 사라질 때까지 바 |
| 193 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 회장님도 우리 전학생한테 관심 있어? 인기 많네! |
| 194 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | '우리' 전학생? |
| 195 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 내가 먼저 봤잖아. 그럼 우리 맞지. 찜한 거. |
| 196 | `hidden_homeroom_d2_1` | 담임선생님 | school_hallway | teacher_normal |  |  | 아, {name}. 잠깐 교무실로. |
| 197 | `hidden_homeroom_d2_1_b` | {name} | school_hallway | teacher_normal |  |  | 뭔가 문제라도 있어요? |
| 198 | `hidden_homeroom_d2_1_c` | 담임선생님 | school_hallway | teacher_normal |  |  | 아니, 전학 서류 확인이야. — 행정적인 거. |
| 199 | `hidden_homeroom_d2_2` | {name} | school_hallway | teacher_normal |  |  | *출석부 사이에 꽂힌 전학 서류 모서리가 보인다.* |
| 200 | `hidden_homeroom_d2_2_b` | {name} | teacher_office | teacher_normal |  |  | *담임을 따라 교무실로 간다. 구석 자리 서랍이 반 뼘 |
| 201 | `hidden_homeroom_d2_3` | 담임선생님 | teacher_office | teacher_normal |  |  | 전 학교 성적표 봤는데 국어가 좋았네. 읽는 거 좋아해 |
| 202 | `hidden_homeroom_d2_3_b` | {name} | teacher_office | teacher_normal |  |  | 소설은 좀 읽어요. |
| 203 | `hidden_homeroom_d2_3_c` | 담임선생님 | teacher_office | teacher_normal |  |  | *열린 서랍의 원고지 위에 펜을 가로질러 놓는다.* |
| 204 | `hidden_homeroom_d2_3_d` | 담임선생님 | teacher_office | teacher_normal |  |  | 읽는 건 좋아하고. 쓰는 건? |
| 205 | `hidden_homeroom_d2_3_e` | {name} | teacher_office | teacher_normal |  |  | *성적표 위에 놓인 손가락이 원고지 모서리를 가린다.* |
| 206 | `hidden_homeroom_d2_3_f` | {name} | teacher_office | teacher_normal |  |  | 쓰는 건 잘 모르겠어요. |
| 207 | `hidden_homeroom_d2_3_g` | 담임선생님 | teacher_office | teacher_normal |  |  | *무릎으로 서랍을 밀지만 원고지 모서리에 걸려 끝까지  |
| 208 | `hidden_homeroom_d2_choice1` | {name} | teacher_office | teacher_normal |  |  | *서랍을 닫으려던 담임이 손을 거두고 대답을 기다린다. |
| 209 | `hidden_homeroom_d2_choice1_b` | 담임선생님 | teacher_office | teacher_normal |  |  | *커피잔 손잡이를 한 바퀴 돌린다.* 그래? 좋은 취미 |
| 210 | `hidden_homeroom_d2_5` | 담임선생님 | teacher_office | teacher_normal |  |  | 그래. 뭐, 그냥 물어본 거야. |
| 211 | `hidden_homeroom_d2_6` | {name} | teacher_office | teacher_normal |  |  | *담임은 커피잔을 옆으로 밀고 튀어나온 원고지를 손끝으 |
| 212 | `hidden_homeroom_d2_7` | 담임선생님 | teacher_office | teacher_normal |  |  | 적응은 어때? 어제보다 나아? |
| 213 | `hidden_homeroom_d2_7_b` | {name} | teacher_office | teacher_normal |  |  | 많이요. 반 애들이 좋아서. |
| 214 | `hidden_homeroom_d2_8` | 담임선생님 | teacher_office | teacher_normal |  |  | 다인이가 시끄럽지? — 원래 저래. 근데 소란 피우는  |
| 215 | `hidden_homeroom_d2_8_b` | {name} | teacher_office | teacher_normal |  |  | 아시는 거 보니 다인이가 좀 유명한가 봐요. |
| 216 | `hidden_homeroom_d2_8_c` | 담임선생님 | teacher_office | teacher_normal |  |  | 유명하다기보단 걱정돼서 그렇지. *커피를 한 모금 마신 |
| 217 | `hidden_homeroom_d2_8_d` | {name} | teacher_office | teacher_normal |  |  | *출석부의 다인 이름 옆에서 담임의 펜촉이 멎는다.* |
| 218 | `hidden_homeroom_d2_8_e` | 담임선생님 | teacher_office | teacher_normal |  |  | *커피를 내려놓는다.* 아무튼 너는 별문제 없어. |
| 219 | `hidden_homeroom_d2_8_f` | 담임선생님 | teacher_office | teacher_normal |  |  | *커피잔으로 입을 가린 채, 컵받침을 같은 자리에서 두 |
| 220 | `hidden_homeroom_d2_9` | {name} | teacher_office | teacher_normal |  |  | 감사합니다, 선생님. |
| 221 | `hidden_homeroom_d2_10` | 담임선생님 | teacher_office | teacher_normal |  |  | 담당 학급 관리 항목에 포함되는 거니까. 업무야. |
| 222 | `hidden_homeroom_d2_choice2` | {name} | teacher_office | teacher_normal |  |  | *담임이 컵받침을 같은 자리에서 두 번 돌린다.* |
| 223 | `hidden_homeroom_d2_choice2_a` | 담임선생님 | teacher_office | teacher_shy |  |  | *커피잔으로 입가를 가린다.* 됐네. 가 봐. |
| 224 | `hidden_homeroom_d2_11` | 담임선생님 | teacher_office | teacher_normal |  |  | 전학생이라고 예외 두면 다른 애들이 뭐라 하지. |
| 225 | `hidden_homeroom_d2_11_b` | 담임선생님 | teacher_office | teacher_normal |  |  | *담임은 커피잔을 내려다보며 낮게 말한다.* |
| 226 | `hidden_homeroom_d2_12` | {name} | teacher_office | teacher_normal |  |  | *교무실을 나서며 열린 서랍 쪽을 한 번 돌아본다.* |
| 227 | `hidden_homeroom_d2_freetalk` | 담임선생님 | teacher_office | teacher_normal |  |  | *교무실 문이 닫히자 책상 위 원고를 서랍 쪽으로 밀어 |
| 228 | `morning2_seo_dust_1` | {name} | school_hallway | seyoun_normal |  |  | *1교시가 끝난 쉬는 시간, 복도에서 서연과 스친다.  |
| 229 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 잠깐. |
| 230 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *손이 {name}의 어깨에 닿는다. 먼지를 두 번 털 |
| 231 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 옷에 뭐 묻었어. |
| 232 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | *서연의 손이 떨어진 자리에서 가방끈이 비뚤어져 있다. |
| 233 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 왜 그래? 먼지잖아. |
| 234 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *어깨의 먼지는 없어졌는데 가방끈을 두 번이나 다시 고 |
| 235 | `morning2_dain_react_2` | {name} | school_hallway | dain_angry |  |  | *서연이 클립보드를 고쳐 끼고 복도로 간다. 뒤에서 다 |
| 236 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 지금 뭐야? 어깨 만진 거야? |
| 237 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 먼지 털어준 거야. |
| 238 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 먼지가 진짜 있긴 했어? |
| 239 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | *대답 대신 가방끈을 고쳐 잡았다. 다인은 그걸 보고도 |
| 240 | `morning2_end` | {name} | school_hallway | seyoun_normal |  |  | *민수 말로는 1년 동안 먼저 인사한 적도 없다던 서연 |
| 241 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *점심. 주머니에는 유나의 쪽지가 있고 복도 끝에서는  |
| 242 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *누구와 함께할까.* |
| 243 | `lunch2_yuna_1` | {name} | yuna_hideout | yuna_normal |  |  | *본관보다 오래된 도서관 별관에는 학생이 거의 없다.  |
| 244 | `lunch2_yuna_intro_check` |  | yuna_hideout | yuna_normal |  |  |  |
| 245 | `lunch2_yuna_3_yuna` | 유나 | yuna_hideout | yuna_normal |  |  | 또 왔네. |
| 246 | `lunch2_yuna_4_yuna` | {name} | yuna_hideout | yuna_normal |  |  | 이번엔 쪽지까지 줬잖아. |
| 247 | `lunch2_yuna_5_yuna` | 유나 | yuna_hideout | yuna_normal |  |  | 어제도 조용했는데. 오늘도? |
| 248 | `lunch2_yuna_6_yuna` | {name} | yuna_hideout | yuna_normal |  |  | 어제 편했거든. 그래서 다시 왔어. |
| 249 | `lunch2_yuna_7_yuna` | 유나 | yuna_hideout | yuna_normal |  |  | 그래서. |
| 250 | `lunch2_yuna_8_yuna` | {name} | yuna_hideout | yuna_normal |  |  | 응. 네 옆은 안 불편했어. |
| 251 | `lunch2_yuna_9` | 유나 | yuna_hideout | yuna_smile |  |  | *책장을 한 장 넘기고 맞은편 소파의 구겨진 쿠션을 손 |
| 252 | `lunch2_yuna_10` | 유나 | yuna_hideout | yuna_normal |  |  | 그래. |
| 253 | `lunch2_yuna_11` | 유나 | yuna_hideout | yuna_normal |  |  | *유나가 별관 안쪽으로 앞장선다. 발소리가 낮게 울리는 |
| 254 | `lunch2_yuna_13` | {name} | yuna_hideout | yuna_normal |  |  | 여기 뭐야? 비밀 독서실? |
| 255 | `lunch2_yuna_14` | 유나 | yuna_hideout | yuna_normal |  |  | 여기 아는 사람 거의 없어. |
| 256 | `lunch2_yuna_15` | 유나 | yuna_hideout | yuna_normal |  |  | *소파에 앉아 가방을 바닥에 내려놓고 한 칸을 비운다. |
| 257 | `lunch2_yuna_16` | 유나 | yuna_hideout | yuna_normal |  |  | 나랑 한 명 더 있었는데. |
| 258 | `lunch2_yuna_17` | {name} | yuna_hideout | yuna_normal |  |  | 있었는데? |
| 259 | `lunch2_yuna_17_b` | 유나 | yuna_hideout | yuna_normal |  |  | *책갈피 끝이 페이지 사이로 천천히 사라진다. 유나는  |
| 260 | `lunch2_yuna_choice` | {name} | yuna_hideout | yuna_normal |  |  | *'있었는데' 뒤에 말이 없다. 유나는 책갈피 끝을 책 |
| 261 | `lunch2_yuna_c2_1` | {name} | yuna_hideout | yuna_normal |  |  | *옆에 앉자 유나는 자기 책 더미에서 한 권을 꺼내 내 |
| 262 | `lunch2_yuna_c2_3` | 유나 | yuna_hideout | yuna_normal |  |  | 읽어. |
| 263 | `lunch2_yuna_c2_4` | {name} | yuna_hideout | yuna_normal |  |  | *책을 펼친다. 두 사람의 페이지가 번갈아 넘어가고 창 |
| 264 | `lunch2_yuna_c2_6` | 유나 | yuna_hideout | yuna_normal |  |  | 여기가 좋은 이유. |
| 265 | `lunch2_yuna_c2_7` | {name} | yuna_hideout | yuna_normal |  |  | 응? |
| 266 | `lunch2_yuna_c2_8` | 유나 | yuna_hideout | yuna_normal |  |  | 조용해서. — 근데 혼자가 아니어서. |
| 267 | `lunch2_yuna_c2_9` | 유나 | yuna_hideout | yuna_normal |  |  | *책장 쪽으로 돌아서지만 책은 한동안 같은 페이지에 열 |
| 268 | `lunch2_yuna_end` | {name} | yuna_hideout | yuna_normal |  |  | *문을 닫기 전 돌아보자 유나는 '있었는데'에서 멈춘  |
| 269 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *방과후. 핸드폰에 알림이 두 개 와 있다.* |
| 270 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 체육관 와. 오늘은 진짜 내기다. |
| 271 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 학생회실에 올 수 있어? 일손이 부족해서. |
| 272 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게서는 아무 연락이 없다. 가방을 챙기자 주머니 |
| 273 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *어디로 갈까.* |
| 274 | `after2_yuna_1` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *유나한테는 연락이 없지만 도서관으로 향한다. 주머니  |
| 275 | `after2_yuna_1_b` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *별관 복도에는 인기척이 없다. 비밀 독서 공간 문만  |
| 276 | `after2_yuna_2` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *문을 밀자 오래된 경첩이 짧게 운다. 유나는 소파에서 |
| 277 | `after2_yuna_2_b` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | *책 위에 올려 둔 이어폰 한쪽을 옆으로 치운다.* |
| 278 | `after2_yuna_3` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 왔네. |
| 279 | `after2_yuna_4` | {name} | yuna_hideout | yuna_normal |  | 🌅 | 부른 적 없잖아. |
| 280 | `after2_yuna_5` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 불러야 오는 거야? |
| 281 | `after2_yuna_6` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | *검지가 같은 문장 밑을 두 번 따라간다.* |
| 282 | `after2_yuna_7` | {name} | yuna_hideout | yuna_normal |  | 🌅 | 문이 열려 있길래. |
| 283 | `after2_yuna_8` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 우연히. |
| 284 | `after2_yuna_8b` | {name} | yuna_hideout | yuna_shy |  | 🌅 | *안쪽 의자에는 이어폰 한쪽이 이미 놓여 있다. 유나는 |
| 285 | `after2_yuna_8c` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 들어봐. |
| 286 | `after2_yuna_8d` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *이어폰에서 낮은 피아노 곡이 흐른다. 유나는 책을 읽 |
| 287 | `after2_yuna_choice_pre1` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | *이어폰 줄을 한 번 풀어내며 말한다.* 방과후에 여기 |
| 288 | `after2_yuna_choice_pre2` | {name} | yuna_hideout | yuna_normal |  | 🌅 | 응? |
| 289 | `after2_yuna_choice_pre3` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 선배 이후로 없었어. |
| 290 | `after2_yuna_choice_pre3_b` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | *유나가 책 위로 {name}을 바로 본다. 이어폰 줄 |
| 291 | `after2_yuna_choice` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *이어폰 줄이 유나의 손가락 사이에서 한 번 더 감긴다 |
| 292 | `after2_yuna_trap` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | …여기가 아니라, 내 얘기인 줄 알았는데. |
| 293 | `after2_yuna_trap_react` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | *책갈피가 한 장 앞으로 옮겨간다. 소파 끝의 이어폰을 |
| 294 | `after2_yuna_end` | {name} | yuna_hideout | yuna_smile |  | 🌅 | *유나와 나란히 앉아 있던 자리에는 이어폰 한쪽이 남아 |
| 295 | `after2_yuna_rival_dain_check` |  | yuna_hideout | 없음 |  | 🌅 |  |
| 296 | `after2_yuna_rival_dain_low` | 다인 | yuna_hideout | dain_laugh |  | 🌅 | 도서관 쪽이었어? 내일 봐! |
| 297 | `after2_yuna_rival_seo_check` |  | yuna_hideout | 없음 |  | 🌅 |  |
| 298 | `after2_yuna_rival_seo_low` | 서연 | yuna_hideout | seyoun_normal |  | 🌅 | 일손은 채웠어. 내일 보자. |
| 299 | `after2_yuna_return` | {name} | school | yuna_smile |  | 🌅 | *도서관 별관을 나서자 복도 자동등이 켜진다.* |
| 300 | `after2_group_yuna_companion` | 유나와 동행 | library_old | 없음 |  | 🌅 | *정리할 자료는 두 묶음인데 남은 시간은 한쪽을 끝내기 |
| 301 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.* |
| 302 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 303 | `night2_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저  |
| 304 | `night2_msg_1` | {name} | room_my | 없음 |  |  | *세 명에게서 메시지가 왔다.* |
| 305 | `night2_msg_yuna_specific` | 유나 | room_my | yuna_normal | 0.35 |  | 오늘 그 곡, 좋았어 |
| 306 | `night2_msg_yuna_specific_2` | 유나 | room_my | yuna_normal | 0.35 |  | 다음에 또 들려줘 |
| 307 | `night2_msg_dain_general` | 다인 | room_my | dain_normal | 0.35 |  | 야, 내일 매점 가자! 오늘 못 간 거 아직 아쉽거든! |
| 308 | `night2_msg_dain_general_merge` | 서연 | room_my | seyoun_normal | 0.35 |  | 점심에 옥상 올래? 바람 좋을 거야 |
| 309 | `night2_msg_seo_general_alt` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 옥상 열어둘게. 시간 되면 와 |
| 310 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에  |
| 311 | `night2_choice` | {name} | room_my | 없음 |  |  | *누구에게 먼저 답장할까?* |
| 312 | `night2_reply_yuna_1` | {name} | room_my | yuna_normal | 0.35 |  | 아직 반 정도. 재밌어 |
| 313 | `night2_reply_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | 다행이네 |
| 314 | `night2_reply_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *답장창이 한동안 비어 있다. 그러다 새 말풍선이 올라 |
| 315 | `night2_reply_yuna_4` | 유나 | room_my | yuna_normal | 0.35 |  | 아까 재생목록. 세 번째 곡도 들어봐 |
| 316 | `night2_reply_yuna_5` | {name} | room_my | yuna_normal | 0.35 |  | *유나가 공유한 재생목록을 다시 연다. 세 번째 곡은  |
| 317 | `night2_reply_yuna_6` | 유나 | room_my | yuna_normal | 0.35 |  | 끝까지 들어봐 |
| 318 | `night2_reply_yuna_6_b` | {name} | room_my | yuna_normal | 0.35 |  | *이어폰을 끼고 재생 버튼을 누른다. 피아노 뒤로 낮은 |
| 319 | `night2_reply_yuna_6_c` | {name} | room_my | yuna_normal | 0.35 |  | *곡이 끝나고 재생 화면의 진행 바가 마지막 칸에 멈춘 |
| 320 | `night2_reply_yuna_7` | {name} | room_my | yuna_normal | 0.35 |  | *재생목록 제목 아래에 유나가 남긴 짧은 메모가 보인다 |
| 321 | `night2_reply_yuna_react_default` | 유나 | room_my | yuna_normal | 0.35 |  | 응. 잘 자. |
| 322 | `night2_yuna_freetalk` | 유나 | room_my | yuna_normal | 0.35 | 🌙 | 잠깐. 아직 깨어 있으면... 조금만 더 얘기할래? |
| 323 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 또 다른 알림이 보인다.* |
| 324 | `night2_hidden_homeroom_1` | {name} | room_my | teacher_normal | 0.35 |  | *학교 상담 시스템에 알림이 떴다. '전학생 적응 상담 |
| 325 | `night2_hidden_homeroom_2` | {name} | room_my | teacher_normal | 0.35 |  | *담임 이름 아래에 상담 가능 시간이 함께 적혀 있다. |
| 326 | `night2_hidden_homeroom_3` | {name} | room_my | teacher_normal | 0.35 |  | *예약 버튼을 확인하고 알림을 닫는다.* |
| 327 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 보내고 핸드폰을 내려놓았다.* |
| 328 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이,  |
| 329 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 |
| 330 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *메모장에 줄줄이 남은 보내지 않은 문장. '선생님,  |
| 331 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 메모가 마지막이다. 그 아래 39번째에는 제 |
| 332 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 |
| 333 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로 |
| 334 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보 |
| 335 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화 |
| 336 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 |
| 337 | `night2_end_2_b` | {name} | room_my | 없음 |  |  | *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있 |
| 338 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.* |
| 339 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을  |
| 340 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 |
| | **Day 3** | | | | | | |
| 341 | `morning3_start` | {name} | school | 없음 |  |  | *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯 |
| 342 | `morning3_start_2` | {name} | school | 없음 |  |  | *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군 |
| 343 | `hidden_homeroom_d3_1` | {name} | room_school | teacher_normal |  |  | *쉬는 시간. 빈 교실에서 펜 긁는 소리가 난다. 담임 |
| 344 | `hidden_homeroom_d3_3` | 담임선생님 | room_school | teacher_shy |  |  | *펜촉이 종이 위에 점 하나를 남긴다.* |
| 345 | `hidden_homeroom_d3_3_b` | 담임선생님 | room_school | teacher_shy |  |  | *담임선생님이 손바닥으로 원고를 가리고 종이를 뒤집는다 |
| 346 | `hidden_homeroom_d3_4` | 담임선생님 | room_school | teacher_sad |  |  | 아무것도 아니야. 업무 서류야. 눈치 빠른 건 장점인데 |
| 347 | `hidden_homeroom_d3_4_b` | {name} | room_school | teacher_sad |  |  | *뒤집힌 종이 사이로 손글씨가 빼곡하다. 담임의 손바닥 |
| 348 | `hidden_homeroom_d3_4_c` | 담임선생님 | room_school | teacher_sad |  |  | *담임은 출석부를 원고지 위로 끌어온다. 뒤집힌 종이  |
| 349 | `hidden_homeroom_d3_4_d` | 담임선생님 | room_school | teacher_sad |  |  | 뭘 봐. 쉬는 시간에 여길 왜 와. |
| 350 | `hidden_homeroom_d3_4_e` | {name} | room_school | teacher_sad |  |  | *빼곡한 원고지가 뒤집혀 있다. 물어볼까, 못 본 척할 |
| 351 | `hidden_homeroom_d3_4_f` | {name} | room_school | teacher_sad |  |  | *한 발을 못 떼겠다. 교탁 위 출석부, 성적표 파일, |
| 352 | `hidden_homeroom_d3_4_g` | {name} | room_school | teacher_sad |  |  | *뒤집힌 원고지 아래로 빨간 펜 자국이 비친다. '보류 |
| 353 | `hidden_homeroom_d3_4_h` | {name} | room_school | teacher_sad |  |  | *모른 척할 수도 있었다. 담임은 종이를 덮지 않는다. |
| 354 | `hidden_homeroom_d3_choice` | {name} | room_school | teacher_normal |  |  | *원고지다. 담임이 종이 끝을 손바닥으로 덮는다.* |
| 355 | `hidden_homeroom_d3_hide_1` | 담임선생님 | room_school | teacher_normal |  |  | 그래, 지금은 덮어두자. 공개할 준비가 되면 문예부에  |
| 356 | `hidden_homeroom_d3_end` | 담임선생님 | room_school | teacher_smile |  |  | *원고를 덮고 교탁 옆 창문을 연다. 복도 소음이 잠깐 |
| 357 | `hidden_homeroom_d3_freetalk` | 담임선생님 | room_school | teacher_normal |  |  | *원고지를 파일에 넣는다.* 궁금한 건 이해해. 그래도 |
| 358 | `hidden_nurse_d3_check` | {name} | room_school | 없음 |  |  | *쉬는 시간이 끝나간다.* |
| 359 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | 이번 주말에 시간 있어? 공원에 같이 가자. |
| 360 | `morning3_date_seo_choice` | 서연 | school_hallway | seyoun_normal |  |  | *서연이 교실 문 앞에서 묻는다. 다인이 들고 있던 물 |
| 361 | `morning3_date_seo_accept` | {name} | school_hallway | seyoun_shy |  |  | *서연과 주말 약속을 잡았다. 서연이 교실 문을 닫기도 |
| 362 | `morning3_date_seo_accept_b` | {name} | room_school | seyoun_shy |  |  | *교실로 돌아왔다. 수업 하나가 지나고 또 쉬는 시간이 |
| 363 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼  |
| 364 | `morning3_date_dain_2` | 다인 | room_school | dain_normal |  |  | *서연이 아직 교실 문 앞에 서 있다. 다인은 이쪽을  |
| 365 | `morning3_date_dain_choice` | 다인 | room_school | dain_normal |  |  | *서연의 발소리가 멎는다. 다인은 대답을 기다린다.* |
| 366 | `morning3_date_dain_accept` | {name} | room_school | dain_laugh |  |  | *다인과 주말 약속을 잡았다. 다인이 웃자 복도에서 서 |
| 367 | `morning3_date_dain_decline_narr` | 다인 | room_school | dain_laugh |  |  | *다인은 웃으며 자기 자리로 돌아간다. 종이 치기 직전 |
| 368 | `morning3_date_dain_decline_inner_2` | {name} | room_school | dain_laugh |  |  | *다인이 자리로 돌아간 뒤, 종이 치기 직전의 교실만  |
| 369 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다 |
| 370 | `morning3_date_yuna_1_b` | 서연 | room_school | seyoun_normal |  |  | 유나. 쪽지로 물으면 다른 사람은 못 듣잖아. |
| 371 | `morning3_date_yuna_2` | {name} | room_school | yuna_normal |  |  | *'주말. 헌책방. 먼저 잡힌 약속이 있어도, 네가 오 |
| 372 | `morning3_date_yuna_choice` | {name} | room_school | yuna_normal |  |  | *쪽지를 읽는 동안 유나는 서연과 다인을 차례로 본다. |
| 373 | `morning3_date_yuna_accept` | {name} | room_school | yuna_shy |  |  | *쪽지 뒷면에 '갈게'라고 적는다. 유나가 종이를 접는 |
| 374 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 375 | `morning3_multi_from_seo` |  | room_school | 없음 |  |  |  |
| 376 | `morning3_end` | {name} | room_school | 없음 |  |  | *수업 종료 종이 울리고 곧 점심시간이 된다.* |
| 377 | `morning3_end_b` | 유나 | room_school | yuna_normal |  |  | 맛있네. |
| 378 | `lunch3_start` | {name} | room_school | yuna_normal |  |  | *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. |
| 379 | `lunch3_start_2_b` | 다인 | room_school | dain_normal |  |  | *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가 |
| 380 | `lunch3_meal_1` | 다인 | room_school | dain_laugh |  |  | 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고  |
| 381 | `lunch3_meal_2` | {name} | room_school | dain_laugh |  |  | 그건 내 거... |
| 382 | `lunch3_meal_3` | 서연 | room_school | seyoun_normal |  |  | 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점 |
| 383 | `lunch3_meal_4` | {name} | room_school | seyoun_normal |  |  | 점수 매기지 마. |
| 384 | `lunch3_meal_5` | 서연 | room_school | seyoun_normal |  |  | 10점 만점이야. 나쁜 거 아닌데? |
| 385 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다 |
| 386 | `lunch3_meal_7` | {name} | room_school | seyoun_normal |  |  | 유나, 그건 내가 제일 좋아하는 건데. |
| 387 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임 |
| 388 | `lunch3_meal_8` | {name} | room_school | yuna_bored |  |  | *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다. |
| 389 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. |
| 390 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓 |
| 391 | `lunch3_meal_10_c` | 서연 | room_school | seyoun_normal |  |  | *서연은 계란말이 앞에서 젓가락 끝을 거둔다.* |
| 392 | `lunch3_meal_11` | {name} | room_school | yuna_bored |  |  | *누구에게 줄까?* |
| 393 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *마지막 반찬을 누구에게 줄지 고민한다.* |
| 394 | `lunch3_give_yuna_1` | 유나 | room_school | yuna_normal |  |  | 고마워. |
| 395 | `lunch3_yuna_skin_check` |  | room_school | yuna_normal |  |  |  |
| 396 | `lunch3_give_yuna_2_check` |  | room_school | 없음 |  |  |  |
| 397 | `lunch3_give_yuna_seo_affinity` |  | room_school | 없음 |  |  |  |
| 398 | `lunch3_give_yuna_seo_low` | 서연 | room_school | seyoun_normal |  |  | *서연은 자기 도시락을 정리한다.* |
| 399 | `lunch3_give_yuna_3_check` |  | room_school | 없음 |  |  |  |
| 400 | `lunch3_give_yuna_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 빈 물병을 가방에 넣는다.* 난 괜찮아. |
| 401 | `lunch3_end` | {name} | room_school | 없음 |  |  | *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다 |
| 402 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육 |
| 403 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다 |
| 404 | `after3_auto_seo` | {name} | school_hallway | 없음 |  | 🌅 | *서연과 약속이 있다. 학생회실로 간다.* |
| 405 | `after3_rivals_for_seo_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 406 | `after3_rival_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 407 | `after3_rival_dain_affinity` |  | school_hallway | 없음 |  | 🌅 |  |
| 408 | `after3_rival_dain_done` |  | school_hallway | 없음 |  | 🌅 |  |
| 409 | `after3_rival_yuna_check` |  | library_old | 없음 |  | 🌅 |  |
| 410 | `after3_rival_yuna_affinity` |  | library_old | 없음 |  | 🌅 |  |
| 411 | `after3_rival_yuna_mid` | 유나 | school_hallway | yuna_normal |  | 🌅 | 알겠어. 난 도서관에 있을게. |
| 412 | `after3_rival_yuna_done` |  | school_hallway | 없음 |  | 🌅 |  |
| 413 | `after3_seo_affinity_check` |  | student_room | 없음 |  | 🌅 |  |
| 414 | `after3_seo_partial_1` | {name} | student_room | seyoun_worried |  | 🌅 | *학생회실 문을 열자 서연이 바닥의 클립보드를 줍고 있 |
| 415 | `after3_seo_partial_2` | 서연 | student_room | seyoun_normal |  | 🌅 | 오늘은 혼자 정리할게. 대신 내일은 피하지 마. |
| 416 | `after3_seo_end` | {name} | student_room | seyoun_sad |  | 🌅 | *그 한마디 뒤에 서연은 클립보드를 품에 더 깊이 끌어 |
| 417 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.* |
| 418 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 419 | `after3_group_teacher_companion` | 담임선생님과 동행 | school_event_classroom | 없음 |  | 🌅 | *수업이 끝난 공개 교실. 담임이 행사 원고를 펼치고  |
| 420 | `after3_group_return` | {name} | school_hallway | 없음 |  | 🌅 | *대화를 마치고 복도로 나온다.* |
| 421 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 422 | `minsu_d3_check` | {name} | school | 없음 |  | 🌅 |  |
| 423 | `minsu_d3_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문 앞에 민수가 서 있다.* |
| 424 | `minsu_d3_2` | 민수 | school | 없음 |  | 🌅 | 봤다. |
| 425 | `minsu_d3_3` | 민수 | school | 없음 |  | 🌅 | 점심때. 그리고 방금 서연 표정도. |
| 426 | `minsu_d3_4` | 민수 | school | 없음 |  | 🌅 | 어제 내가 뭐랬냐. 나중에 셋 다 울면 네 탓이라고 했 |
| 427 | `minsu_d3_5` | 민수 | school | 없음 |  | 🌅 | 옆에서 보기 좀 힘들다. 걔들 다 좋은 애들이야. 네가 |
| 428 | `minsu_d3_5b` | 민수 | school | 없음 |  | 🌅 | *민수는 빨대 포장지를 끝까지 접어 테이블 위에 내려놓 |
| 429 | `minsu_d3_6` | {name} | school | 없음 |  | 🌅 | 맞아. |
| 430 | `minsu_d3_6b` | 민수 | school | 없음 |  | 🌅 | 전 학교에서 뭔 일 있었는지 안 물어볼게. 근데 하나만 |
| 431 | `minsu_d3_7` | 민수 | school | 없음 |  | 🌅 | 거절도 배려야. 안 되는 관계에 계속 여지 주는 것보다 |
| 432 | `minsu_d3_8` | {name} | school | 없음 |  | 🌅 | *거절도 배려다. 전 학교에서 나는 소정이에게 고백할  |
| 433 | `minsu_d3_9` | 민수 | school | 없음 |  | 🌅 | *민수는 더 말하지 않고 끝까지 접은 빨대 포장지를 내 |
| 434 | `minsu_d3_10` | 민수 | school | 없음 |  | 🌅 | 내일 학교에서 보자. 진지하게 생각해. |
| 435 | `night3_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 가방을 의자에 걸어 둔다.* |
| 436 | `night3_start_2` | {name} | room_my | 없음 |  |  | *책상 위에 엎어 둔 핸드폰 화면을 켠다.* |
| 437 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *읽지 않은 메시지가 떠 있다.* |
| 438 | `night3_dream_1` | {name} | school | 없음 |  |  | *꿈속에서 누군가와 나란히 걷는다. 얼굴은 보이지 않고 |
| 439 | `night3_dream_2_b` | {name} | school | 없음 |  |  | *메모장을 닫았다. 내일 보낼 문장은 아직 없다.* |
| 440 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *커튼 사이로 들어온 아침 햇살에 눈을 뜬다. 핸드폰  |
| 441 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *'삭제하시겠습니까?' 확인 창이 뜬다. 손가락이 버튼 |
| 442 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *1초 동안 화면을 내려다본다. 소정이 책상의 낙서와  |
| 443 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *그래. 삭제 버튼에 올린 손가락으로 화면을 누른다.* |
| 444 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼을 누르지 않고 사진을 새 폴더로 옮긴다.  |
| 445 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *'거절도 네가 해야 할 일이야.' 민수의 말이 떠오른 |
| 446 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *갤러리에서 소정이 사진이 사라지고 빈칸만 남는다.* |
| 447 | `night3_faithful_reflect_4_b` | {name} | room_my | 없음 |  |  | *빈 앨범 썸네일 위를 엄지로 문지른다.* |
| 448 | `night3_faithful_reflect_4_c` | {name} | room_my | 없음 |  |  | *핸드폰을 덮자 검은 화면에 갤러리의 빈칸이 겹쳐 보인 |
| 449 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *알람이 울리기 전에 눈을 떴다.* |
| 450 | `night3_end` | {name} | room_my | 없음 |  |  | *방 불을 끄고 핸드폰을 엎어 둔다.* |
| | **Day 4** | | | | | | |
| 451 | `morning4_start` | {name} | room_my | 없음 |  |  | *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다 |
| 452 | `morning4_nightmare_check` |  | room_my | 없음 |  |  |  |
| 453 | `minsu_cheer_1` | {name} | room_my | 없음 |  |  | *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.* |
| 454 | `minsu_cheer_1_b` | 민수 | room_my | minsu_normal | 0.35 |  | *야 오늘 데이트라며?* |
| 455 | `minsu_cheer_1_c` | {name} | room_my | minsu_normal | 0.35 |  | *어떻게 알았어* |
| 456 | `minsu_cheer_1_d` | 민수 | room_my | minsu_normal | 0.35 |  | *다인이가 단톡방에 올림. 내일 약속 있음, 이라고* |
| 457 | `minsu_cheer_2` | 민수 | room_my | minsu_normal | 0.35 |  | 잘하고 와ㅋㅋ |
| 458 | `minsu_cheer_3` | {name} | room_my | minsu_normal | 0.35 |  | 알아. |
| 459 | `minsu_cheer_4_branch` |  | room_my | 없음 |  |  |  |
| 460 | `minsu_cheer_4_ins_single` | {name} | room_my | minsu_normal | 0.35 |  | *핸드폰 캘린더를 본다. 오늘 약속은 하나뿐이다.* |
| 461 | `morning4_start_2` | {name} | room_my | 없음 |  |  | *심호흡하고 약속 메시지를 다시 확인한다.* |
| 462 | `morning4_seo_msg_1` | 서연 | room_my | seyoun_pout | 0.35 |  | 늦으면 안 돼. 공원 분수대, 10시. |
| 463 | `morning4_seo_msg_1_b` | {name} | room_my | seyoun_pout | 0.35 |  | *메시지는 거기서 끝나 있다.* |
| 464 | `morning4_seo_msg_1_c` | {name} | room_my | seyoun_pout | 0.35 |  | *분수대 앞에 선다. 시계가 9시 58분을 가리킨다.* |
| 465 | `morning4_hidden_check` | {name} | room_my | 없음 |  |  | *주말 아침, 학교 앞 사거리에서 신호를 기다린다.* |
| 466 | `morning4_manuscript_check` |  | room_my | 없음 |  |  |  |
| 467 | `hidden_homeroom_d4_skip` | {name} | room_my | 없음 |  |  | *정문 안쪽에서 문 닫히는 소리가 난다. 그사이 보행  |
| 468 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 469 | `morning4_end` | {name} | room_my | 없음 |  |  | *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 |
| 470 | `date_seo_1` | {name} | park | seyoun_normal |  |  | *분수대 앞에 서연이 먼저 와 있다. 클립보드는 없고  |
| 471 | `date_seo_tier_check` |  | park | 없음 |  |  |  |
| 472 | `date_seo_tentative_1` | {name} | park | seyoun_normal |  |  | *공원을 한 바퀴 도는 동안 서연은 다음 주 일정만 이 |
| 473 | `date_seo_tentative_2` | 서연 | park | seyoun_normal |  |  | 오늘은 이 정도가 좋겠다. 학교에서는 피하지 않을게. |
| 474 | `date_seo_tentative_3` | {name} | street | 없음 |  |  | *다음 약속은 잡지 않은 채 역 앞에서 헤어진다.* |
| 475 | `pre_confess_minsu` | 민수 | street | minsu_smirk | 0.35 |  | 야, 데이트 중이지? 한마디만 할게 |
| 476 | `pre_confess_minsu_2` | 민수 | street | minsu_smirk | 0.35 |  | 말 돌리지 말고 제대로 해 |
| 477 | `pre_confess_callback` | {name} | street | minsu_smirk |  |  | *주머니 속 핸드폰 모서리가 손바닥에 눌린다. 알림은  |
| 478 | `confess_seo_1` | {name} | top_school | 없음 |  | 🌅 | *데이트가 끝났다. 교문 대신 옥상으로 올라왔다.* |
| 479 | `confess_seo_2` | 서연 | top_school | seyoun_normal |  | 🌅 | 잠깐 올라가자. |
| 480 | `confess_seo_3b` | {name} | top_school | seyoun_normal |  | 🌅 | *옥상 문이 닫히자 계단의 발소리가 끊긴다. 여러 번  |
| 481 | `confess_seo_4` | 서연 | top_school | seyoun_normal |  | 🌅 | *서연은 난간에서 한 걸음 떨어져 선다. 열쇠를 주머니 |
| 482 | `confess_seo_4_b` | {name} | top_school | seyoun_normal |  | 🌅 | *주머니 안쪽에서 접힌 메모가 손가락에 걸린다.* |
| 483 | `confess_seo_5` | {name} | top_school | seyoun_normal |  | 🌅 | *메모를 꺼내지 않는다.* |
| 484 | `confess_seo_choice` | {name} | top_school | seyoun_shy2 |  | 🌅 | *열쇠고리만 서연의 손안에서 짧게 울린다.* |
| 485 | `confess_seo_yes_1` | 서연 | top_school | seyoun_normal |  | 🌅 | *열쇠고리 소리가 뚝 멎는다. 서연이 눈을 맞춘다.* |
| 486 | `confess_seo_yes_2` | {name} | top_school | seyoun_normal |  | 🌅 | *목이 마르다. 주머니 안에서 메모가 접힌다.* |
| 487 | `confess_seo_yes_3` | {name} | top_school | seyoun_normal |  | 🌅 | 오늘 이후에도 너랑 만나고 싶어. |
| 488 | `confess_seo_yes_4` | {name} | top_school | seyoun_normal |  | 🌅 | *서연은 바로 대답하지 않는다. 열쇠고리가 손 안에서  |
| 489 | `confess_seo_yes_5` | {name} | top_school | seyoun_worried |  | 🌅 | 지금 대답 안 해도 돼. |
| 490 | `confess_seo_yes_6` | 서연 | top_school | seyoun_normal |  | 🌅 | 그렇게 말하면 더 생각하게 되잖아. |
| 491 | `confess_seo_yes_7` | {name} | top_school | seyoun_shy2 |  | 🌅 | *난간 아래 운동장 조명이 한 줄 더 켜진다. 서연은  |
| 492 | `confess_seo_yes_8` | 서연 | top_school | seyoun_shy2 |  | 🌅 | 나도 계속 봤어. |
| 493 | `confess_seo_yes_9` | 서연 | top_school | seyoun_shy |  | 🌅 | 네가 어디 앉는지, 언제 말이 줄어드는지. |
| 494 | `confess_seo_yes_10` | 서연 | top_school | seyoun_shy |  | 🌅 | *열쇠가 주머니 안으로 들어간다.* |
| 495 | `confess_seo_yes_11` | 서연 | top_school | seyoun_shy2 |  | 🌅 | 내일 점심. 옥상 열어둘게. |
| 496 | `confess_seo_yes_11_b` | 서연 | top_school | seyoun_shy2 |  | 🌅 | *서연이 계단 쪽으로 걷는다.* |
| 497 | `confess_seo_yes_12` | 서연 | top_school | seyoun_shy2 |  | 🌅 | *두 칸 아래에서 발소리가 끊긴다. 서연은 돌아보지 않 |
| 498 | `day4_night_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 옷소매에 공원 흙과 학교 먼지가 조금 |
| 499 | `day4_night_branch` | 시스템 | room_my | 없음 |  |  |  |
| 500 | `day4_student_night_branch` |  | room_my | 없음 |  |  |  |
| 501 | `wall_seo_rival_rank` | 시스템 | park | 없음 |  |  |  |
| 502 | `wall_seo_yuna_tempt_1` | {name} | yuna_hideout | yuna_sad |  |  | *공원으로 가는 길, 유나에게서 '별관 불은 아직 켜져 |
| 503 | `wall_seo_yuna_tempt_2` | 유나 | yuna_hideout | yuna_sad |  |  | 전에 나를 봐주던 사람이 말도 없이 사라졌어. 오늘 네 |
| 504 | `day4_student_counteroffer_soft_yuna` | 유나 | yuna_hideout | yuna_normal |  |  | *별관으로 들어가 빈 의자에 앉는다. 유나는 재킷을 벗 |
| 505 | `day4_night_regret` | {name} | room_my | 없음 |  |  | *집으로 돌아온 뒤에도 채팅창에는 입력하다 만 문장이  |
| 506 | `day4_night_regret_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 507 | `day4_night_regret_msg_seo` | 서연 | room_my | seyoun_normal | 0.35 |  | 오늘 바람 좋았어. 조금 기다렸어. |
| 508 | `day4_night_regret_reply` | {name} | room_my | 없음 |  |  | *답장을 쓰다 지운다. 입력창에는 받침 하나만 남았다가 |
| 509 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 510 | `night_homeroom_msg_1` | 담임선생님 | room_my | teacher_sad | 0.35 |  | *학교 학습 포털 공지* 문예부 합평용 원고를 올렸어. |
| 511 | `night_homeroom_msg_2` | 담임선생님 | room_my | teacher_normal | 0.35 |  | *학교 학습 포털 공지* 의견을 남기고 싶으면 문예부  |
| 512 | `night_homeroom_msg_3` | {name} | room_my | teacher_normal | 0.35 |  | *밤 9시. 학급 공지 아래로 문예부 학생들의 확인 댓 |
| 513 | `day4_hidden_msg_after_homeroom` | 시스템 | room_my | 없음 |  |  |  |
| 514 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *알람을 일요일 오전으로 맞추고 방 불을 끈다. 전하지 |
| 515 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안 시계가 자정 쪽으로 넘어간다. 휴대폰 화면도  |
| | **Day 5** | | | | | | |
| 516 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소 |
| 517 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 518 | `morning5_temptation_counteroffer_branch` |  | room_school | 없음 |  |  |  |
| 519 | `morning5_caught_by_yuna_route` |  | room_school | 없음 |  |  |  |
| 520 | `morning5_caught_seoyeon_by_yuna` | 서연 | room_school | seyoun_sad |  |  | *서연과 마주 앉은 책상 위에서 휴대폰이 울린다. 유나 |
| 521 | `morning5_caught_seoyeon_honest` | 서연 | room_school | seyoun_sad |  |  | *전부 듣고도 서연은 안경을 벗지 않는다. 렌즈 너머로 |
| 522 | `morning5_counteroffer_group_talk` | 두 사람 | room_school | 없음 |  |  | *두 사람의 시선이 한꺼번에 닿는다. 어젯밤은 대체 뭐 |
| 523 | `morning5_counteroffer_choice` | {name} | room_school | 없음 |  |  | *대화가 끝나자 두 사람 모두 답을 기다린다.* |
| 524 | `morning5_counteroffer_choice_neither` | {name} | room_school | 없음 |  |  | *두 사람 사이에서 한 걸음 물러난다.* 지금은 누구도 |
| 525 | `morning5_after_counteroffer` | {name} | room_school | 없음 |  |  | *조회 종이 한 장이 교탁 아래로 미끄러진다. 아무도  |
| 526 | `morning5_after_counteroffer_hidden_check` |  | room_school | 없음 |  |  |  |
| 527 | `hidden_nurse_d5_after_co_check` |  | school_hallway | 없음 |  |  |  |
| 528 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 529 | `morning5_sojeong_1` | {name} | room_school | 없음 |  |  | *휴대폰 메모 앱을 연다. '소정에게'로 시작하는 빈  |
| 530 | `morning5_sojeong_2` | {name} | room_school | 없음 |  |  | *마흔 번째 초안은 쓰지 않는다. 가장 짧은 문장을 골 |
| 531 | `morning5_sojeong_3` | {name} | room_school | 없음 |  |  | 그때 네 책상과 낙서를 보고도 선생님께 말하지 않았어. |
| 532 | `morning5_sojeong_4` | {name} | room_school | 없음 |  |  | *전송 표시가 뜬다. 읽음 표시는 기다리지 않고 대화방 |
| 533 | `morning5_sojeong_5` | {name} | room_school | 없음 |  |  | *지금 담임에게도 메시지를 보낸다. '전학 오기 전 학 |
| 534 | `morning5_route_branch` |  | room_school | 없음 |  |  |  |
| 535 | `tour_co_branch` |  | school | 없음 |  |  |  |
| 536 | `tour_co_seo_1` | {name} | top_school | seyoun_sad |  |  | *옥상 문은 열려 있다. 서연은 난간으로 가지 않고 문 |
| 537 | `tour_co_seo_2` | 서연 | top_school | seyoun_sad |  |  | 열쇠는 반납했어. 오늘은 여기까지 하자. |
| 538 | `tour_co_seo_3` | {name} | top_school | seyoun_pout |  |  | *돌아서던 서연의 클립보드 모서리가 문틀에 부딪힌다.  |
| 539 | `after5_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 540 | `after5_co_start` | {name} | school_hallway | 없음 |  | 🌅 | *행사가 끝난 복도에 아침에 마주쳤던 사람들이 다시 모 |
| 541 | `after5_co_abandoned_branch` |  | school_hallway | 없음 |  | 🌅 |  |
| 542 | `after5_co_seo_1` | 서연 | school_hallway | seyoun_sad |  | 🌅 | *안경을 고쳐 쓰려다 손을 내린다.* 일정표는 다 돌렸 |
| 543 | `after5_co_seo_2` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 오늘은 더 할 말 없어. 가. |
| 544 | `after5_co_tempter_branch` |  | school_hallway | 없음 |  | 🌅 |  |
| 545 | `after5_co_tempter_yuna_1` | 유나 | library_old | yuna_sad |  | 🌅 | *잠금화면에는 아직 별관 사진이 떠 있다.* 어제 부른 |
| 546 | `after5_co_tempter_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | 지금은 따라가지 마. 그거면 돼. |
| 547 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 548 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 549 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 550 | `after5_farewell_dain_1` | {name} | gym | dain_normal |  | 🌅 | *체육관 앞에서 다인이 걸어온다. 평소보다 보폭이 작다 |
| 551 | `after5_farewell_dain_low` | 다인 | gym | dain_normal |  | 🌅 | *체육관 앞에서 다인이 걸어오다 두 걸음 떨어진 곳에  |
| 552 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *석양이 교정 창문마다 걸린다. 방송실에서 행사 종료  |
| 553 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 554 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 555 | `ending_counteroffer_bitter` |  | park | 없음 |  |  |  |
| 556 | `ending_counteroffer_choice_neither` | {name} | park | 없음 |  |  | *둘 다 붙잡지 않겠다고 말한 뒤, 세 사람의 대화는  |
| 557 | `ending_counteroffer_bitter_route` |  | park | 없음 |  |  |  |
| 558 | `co_bitter_seo_1` | {name} | cafe | seyoun_sad |  |  | *한 달쯤 뒤 다시 찾은 카페에서 서연은 비뚤어진 컵받 |
| 559 | `co_bitter_seo_2` | 서연 | cafe | seyoun_sad |  |  | 그날 알림 말이야. 지웠는데도 자꾸 생각나. |
| 560 | `co_bitter_seo_3` | {name} | ending_bittersweet | 없음 |  |  | *자리에서 일어난 서연은 가방끈을 고쳐 메고 자기 우산 |
| 561 | `bitter_epilogue_1` | {name} | ending_bittersweet | 없음 |  |  | *졸업 후. 연락이 뜸해졌다. 한 달에 한 번이 두 달 |
| 562 | `bitter_epilogue_2` | {name} | ending_bittersweet | 없음 |  |  | *5일의 기록은 남았다. 마지막 사진에는 둘 사이에 한 |
| 563 | `bitter_epilogue_3` | 시스템 | ending_bittersweet | 없음 |  |  | ─── BITTERSWEET END ─── |
| 564 | `day5_main_ending_freetalk_router` | {name} | park | 없음 |  |  |  |
| 565 | `day5_seo_ending_freetalk_intro` | {name} | top_school | seyoun_normal |  |  | *옥상. 열린 문 옆에 화분 빈자리가 있다.* |
| 566 | `day5_seo_ending_freetalk_router` | {name} | top_school | 없음 |  |  |  |
| 567 | `day5_seo_ending_freetalk_bittersweet` | 서연 | cafe | seyoun_normal |  | 🌙 | *식어 버린 커피 옆에서 컵받침 모서리를 맞춘다.* 우 |
| 568 | `day5_credits` |  | school | 없음 |  |  |  |
| 569 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### day5_yuna_ending_freetalk_bittersweet

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_dain_choice`: (선택)
- `after_end`: (선택)
- `after_hidden_nurse_choice`: (선택)
- `after_nurse_enter_choice`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_dain_choice`: (선택)
- `hidden_nurse_d2_choice1`: (선택)
- `hidden_nurse_d2_choice2`: (선택)
- `after2_choice`: (선택)
- `night2_choice`: (선택)
- `hidden_nurse_d3_choice1`: (선택)
- `hidden_nurse_d3_choice2`: (선택)
- `morning3_date_dain_choice`: (선택)
- `morning3_date_yuna_choice`: (선택)
- `lunch3_choice`: (선택)
- `hidden_nurse_d4_morning_choice`: (선택)
- `hidden_nurse_d4_name_choice`: (선택)
- `hidden_nurse_d4_choice`: (선택)
- `confess_yuna_choice`: (선택)
- `day4_nurse_dain_counteroffer`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=-3 유나=8 다인=11 담임=0 보건=-2

<details>
<summary>씬 타임라인 (661씬)</summary>

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
| 59 | `lunch_dain_1` | 다인 | store | dain_laugh |  |  | 도착. 여기가 매점이야. 일단 고르고 봐. |
| 60 | `lunch_dain_1_aff_default` | 다인 | store | dain_normal |  |  | *매점 안은 점심시간이라 북적거린다. 빵 냄새랑 우유  |
| 61 | `lunch_dain_2` | 다인 | store | dain_normal |  |  | 소보로빵에 딸기우유. 이 조합은 실패한 적 없어. |
| 62 | `lunch_dain_3` | {name} | store | dain_normal |  |  | 근데 진 사람이 사준다며. 뭘 하는 거야? |
| 63 | `lunch_dain_4` | 다인 | store | dain_normal |  |  | 가위바위보. 간단하지. |
| 64 | `lunch_dain_5` | {name} | store | dain_normal |  |  | 당연한 건 아닌데. |
| 65 | `lunch_dain_6` | 다인 | store | dain_normal |  |  | 안 하면 네가 사는 걸로 친다? |
| 66 | `lunch_dain_7` | {name} | store | dain_normal |  |  | 하자. |
| 67 | `lunch_dain_8` | {name} | store | dain_normal |  |  | *가위바위보.* |
| 68 | `lunch_dain_9` | 다인 | store | dain_normal |  |  | 가위— 바위— 보! |
| 69 | `lunch_dain_10` | {name} | store | dain_normal |  |  | *가위. 바위. 보. — 다인이 졌다.* |
| 70 | `lunch_dain_11` | 다인 | store | dain_normal |  |  | 어? 나 졌네. 한 판 더. |
| 71 | `lunch_dain_12` | {name} | store | dain_pout |  |  | 약속은 약속이지. |
| 72 | `lunch_dain_12_b` | 다인 | store | dain_pout |  |  | 아, 알았어. 내가 산다. 이모, 소보로 두 개요. |
| 73 | `lunch_dain_14` | 다인 | store | dain_pout |  |  | *동전을 카운터에 탁탁 놓고 소보로 두 개를 받아 든다 |
| 74 | `lunch_dain_15` | {name} | store | dain_normal |  |  | *매점 한쪽 벤치에 앉아 빵을 먹는다.* |
| 75 | `lunch_dain_16` | 다인 | store | dain_normal |  |  | *빵 봉지를 뜯는다.* 야, 너 운동 진짜 안 해? |
| 76 | `lunch_dain_17` | {name} | store | dain_normal |  |  | 왜, 내 체력이 걱정돼? |
| 77 | `lunch_dain_18` | 다인 | store | dain_laugh |  |  | 아니. 나랑 다니려면 체력부터 봐야지. |
| 78 | `lunch_dain_19` | {name} | store | dain_laugh |  |  | 자기 PR인 줄 알았어. |
| 79 | `lunch_dain_20` | 다인 | store | dain_laugh |  |  | PR? 그게 뭔데. |
| 80 | `lunch_dain_21` | {name} | store | dain_normal |  |  | Personal Record. 운동할 때 쓰는 말인데. |
| 81 | `lunch_dain_22` | 다인 | store | dain_normal |  |  | *딸기우유 팩 옆면이 손가락에 눌려 우그러진다.* |
| 82 | `lunch_dain_23` | 다인 | store | dain_laugh |  |  | 오, 그거 알아? 너 운동 쪽 좀 아네? |
| 83 | `lunch_dain_choice` | 다인 | store | dain_laugh |  |  | *빨대를 문 채 상체를 가까이 기울인다.* |
| 84 | `lunch_dain_c2_1` | 다인 | store | dain_laugh |  |  | 그래도 관심은 있는 거잖아. 오늘 방과후 체육관 와.  |
| 85 | `lunch_dain_after` | {name} | store | dain_laugh |  |  | *빵을 다 먹고 일어서는데.* |
| 86 | `lunch_dain_after_2` | 다인 | store | dain_normal |  |  | 야, {name}. |
| 87 | `lunch_dain_after_3` | {name} | store | dain_normal |  |  | 응? |
| 88 | `lunch_dain_after_4` | 다인 | store | dain_normal |  |  | 전학 와서 첫 식사 파트너가 나다? 나름 역사적인데. |
| 89 | `lunch_dain_after_5` | 다인 | store | dain_normal |  |  | *주먹으로 {name}의 어깨를 툭 치고 그대로 한 번 |
| 90 | `lunch_dain_freetalk` | 다인 | store | dain_normal |  |  | *빵 봉지를 접어 주머니에 넣고 벤치 등받이에 기댄다. |
| 91 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *종이 울린다. 점심시간이 끝났다.* |
| 92 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에 |
| 93 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 94 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창 |
| 95 | `after_kakao_5` | {name} | school_hallway | 없음 |  | 🌅 | *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른 |
| 96 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록  |
| 97 | `after1_jealousy_dain_1` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 점심때 매점에서 다인이랑 같이 있는 거 봤는데. 적응  |
| 98 | `after1_jealousy_dain_2` | {name} | school_hallway | seyoun_laugh |  | 🌅 | *서연은 클립보드를 가슴 앞에 세운 채 답을 기다린다. |
| 99 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *복도를 계속 걷는다.* |
| 100 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도를 걷는데 뒤에서 쿵쿵 발소리.* |
| 101 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 조심! |
| 102 | `after_miss_dain_3` | {name} | school_hallway | dain_normal |  | 🌅 | *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 |
| 103 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 피했다? 반사신경 괜찮은데. |
| 104 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 넌 복도에서 왜 전력질주야? |
| 105 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 늦었거든! 체육관 가야 해. 내일 보자, 전학생! |
| 106 | `after_miss_dain_6_b` | {name} | school_hallway | dain_laugh |  | 🌅 | *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을  |
| 107 | `after_miss_dain_7` | {name} | school_hallway | dain_laugh |  | 🌅 | *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아 |
| 108 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으 |
| 109 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 이거 떨어뜨렸어. |
| 110 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피 |
| 111 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌  |
| 112 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 고마워. |
| 113 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피를 책등 사이에 끼우고 돌아선다.* |
| 114 | `after_miss_yuna_4` | {name} | library_old | yuna_normal |  | 🌅 | *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 |
| 115 | `after_miss_seoyeon_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *하교하려는데 복도에서 서연과 마주친다.* |
| 116 | `after_miss_seoyeon_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 아까 어디 갔어? |
| 117 | `after_miss_seoyeon_3` | {name} | school_hallway | seyoun_normal |  | 🌅 | 어디라니? |
| 118 | `after_miss_seoyeon_4` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 옥상 열어놨는데 안 왔네. — 전학생, 배짱이 있어. |
| 119 | `after_miss_seoyeon_5` | {name} | school_hallway | seyoun_normal |  | 🌅 | 기다린 거야? |
| 120 | `after_miss_seoyeon_6` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 바람 쐬러 올라간 건데 문이 열려 있길래. |
| 121 | `after_miss_seoyeon_7` | {name} | school_hallway | seyoun_normal |  | 🌅 | *서연의 클립보드 맨 위에 내 이름이 남아 있다. 체크 |
| 122 | `after_miss_seoyeon_8` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 내일은 빠지지 마. |
| 123 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든 |
| 124 | `after_hidden_nurse_intro` | {name} | school_hallway | 없음 |  | 🌅 | *복도 형광등이 흔들려 보여 벽을 짚자 손바닥에 차가운 |
| 125 | `after_hidden_nurse_choice` | {name} | school_hallway | 없음 |  | 🌅 | *아침부터 계속 사람들 틈에 있었다. 발걸음이 보건실  |
| 126 | `after_hidden_nurse_intro_b` | {name} | school_hallway | 없음 |  | 🌅 | *문 앞에 서서 한 번 숨을 고르고 손잡이에 손을 얹는 |
| 127 | `after_nurse_enter_1` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건실 문을 연다. 소독약 냄새. 흰 커튼과 침대,  |
| 128 | `after_nurse_enter_2` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 오, 환자네. |
| 129 | `after_nurse_enter_2_b` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건선생님이 진료 기록지를 한 장 꺼내 윗줄을 펜으로 |
| 130 | `after_nurse_enter_3` | {name} | nurse_room | nurse_normal |  | 🌅 | 좀 어지러워서요. |
| 131 | `after_nurse_enter_4` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 전학생이지? 첫날부터 보건실이면 꽤 빡셌나 보네. 어디 |
| 132 | `after_nurse_enter_4_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 어떻게 알았어요? |
| 133 | `after_nurse_enter_4_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 교복이 뻣뻣하잖아. 풀 냄새도 나고 벚꽃잎도 붙어 있고 |
| 134 | `after_nurse_enter_4_d` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *전자체온계를 건네고 책상 아래에서 혈압계를 꺼낸다.* |
| 135 | `after_nurse_enter_5` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *체온을 확인한 뒤 팔에 혈압계 커프를 감는다.* |
| 136 | `after_nurse_enter_6` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 열은 없고 혈압이 조금 낮네. |
| 137 | `after_nurse_enter_6_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 아침을 좀 대충 먹긴 했어요. |
| 138 | `after_nurse_enter_7` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 그럼 더 그럴 수 있지. 자, 여기 누워. 10분만 쉬 |
| 139 | `after_nurse_enter_7_b` | {name} | nurse_room | nurse_normal |  | 🌅 | *침대에 눕자 얇은 시트가 몸 아래에서 바스락거린다.* |
| 140 | `after_nurse_enter_7_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *커튼을 반쯤 친다.* 물 줄까? 아님 따뜻한 거? |
| 141 | `after_nurse_enter_7_d` | {name} | nurse_room | nurse_normal |  | 🌅 | 물이면 됩니다. |
| 142 | `after_nurse_enter_choice` | {name} | nurse_room | nurse_normal |  | 🌅 | *침대에 눕는다. 커튼 너머로 보건선생님 뒷모습이 보인 |
| 143 | `after_nurse_enter_trap` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 편해 보였구나. 여긴 조용할수록 긴장하는 곳인데. |
| 144 | `after_nurse_enter_8` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 말 길게 할 필요 없어. 어지러울 때는 대답도 천천히  |
| 145 | `after_nurse_enter_8_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 이 정도면 금방 괜찮아질까요? |
| 146 | `after_nurse_enter_8_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *물컵을 건넨다.* 물 마시고 쉬면 한결 나을 거야.  |
| 147 | `after_nurse_enter_8_d` | {name} | nurse_room | nurse_normal |  | 🌅 | *물을 마시며 보건실을 둘러본다. 창가 구석에 손바닥만 |
| 148 | `after_nurse_enter_9_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 저 화분, 선생님이 키우시는 거예요? |
| 149 | `after_nurse_enter_9_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 응, 로즈마리. — 병원에서 일할 때부터 키우던 거야. |
| 150 | `after_nurse_enter_9_d` | {name} | nurse_room | nurse_normal |  | 🌅 | 병원이요? |
| 151 | `after_nurse_enter_9_e` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *서랍 손잡이를 한 번 잡았다가 놓는다.* |
| 152 | `after_nurse_enter_10` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 옛날 얘기야. 학교가 좋아. 여기선 종소리 나면 다들  |
| 153 | `after_nurse_enter_10_b` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *서랍이 닫히며 안쪽의 연두색 노트도 가려진다. 벽시계 |
| 154 | `after_nurse_enter_10_c` | {name} | nurse_room | nurse_normal |  | 🌅 | 감사합니다. 조금 나아졌어요. |
| 155 | `after_nurse_enter_11` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 또 어지러우면 와. 보건실은 늘 열려 있으니까. 대신  |
| 156 | `after_nurse_enter_11_b` | {name} | nurse_room | nurse_angry |  | 🌅 | 혼나요? |
| 157 | `after_nurse_enter_11_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *진료 기록지 위에서 펜을 한 번 굴린다.* 아픈데도  |
| 158 | `after_nurse_enter_11_d` | 보건선생님 | nurse_room | nurse_angry |  | 🌅 | *물컵을 책상에 내려놓는다. 컵 바닥이 낮게 울린다.* |
| 159 | `after_nurse_enter_11_e` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *피곤하다는 말에 목 뒤를 한 번 문지른다.* |
| 160 | `after_nurse_enter_11_j` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건실 문을 열려는 순간, 뒤에서 보건선생님이 부른다 |
| 161 | `after_nurse_enter_11_k` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 아, 전학생. |
| 162 | `after_nurse_enter_11_l` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 이름이 뭐야? |
| 163 | `after_nurse_enter_11_m` | {name} | nurse_room | nurse_normal |  | 🌅 | {name}입니다. |
| 164 | `after_nurse_enter_12` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 증상 다시 오면 바로 와. 복도에서 버티지 말고. |
| 165 | `after_nurse_enter_12_b` | {name} | nurse_room | nurse_normal |  | 🌅 | *가볍게 인사하고 보건실을 나왔다. 소독약 냄새가 복도 |
| 166 | `after_nurse_freetalk` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *체온계를 케이스에 넣고 진료 기록의 시간을 확인한다. |
| 167 | `night_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄 |
| 168 | `night_start_3` | {name} | room_my | 없음 |  |  | *핸드폰이 울린다. 학교 메신저.* |
| 169 | `night_msg_dain_1` | 다인 | room_my | dain_normal | 0.35 |  | *가위바위보 리벤지 내일이다* |
| 170 | `night_msg_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | *내일은 리벤지다 ㅋㅋ* |
| 171 | `night_msg_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | *오늘 빵값 아직도 아깝다. 진짜.* |
| 172 | `night_msg_dain_4` | {name} | room_my | dain_normal | 0.35 |  | *세 줄이 거의 동시에 도착했다. 답장창에는 벌써 'ㅋ |
| 173 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 다른 알림이 보인다.* |
| 174 | `night_hidden_nurse_1` | {name} | room_my | nurse_normal | 0.35 |  | *학교 건강 관리 앱 알림이 떠 있다. '보건실 기록: |
| 175 | `night_hidden_nurse_2` | {name} | room_my | nurse_normal | 0.35 |  | *마지막 안내를 읽고 침대 옆 물병을 채워 둔다.* |
| 176 | `night_late_transition` | {name} | room_my | 없음 |  |  | *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시 |
| 177 | `night_late_branch` | {name} | room_my | 없음 |  |  | *화면이 밝아진다.* |
| 178 | `night_dain_late_1` | 다인 | room_my | dain_normal | 0.35 |  | *야 아직 안 잤지?* |
| 179 | `night_dain_late_2` | 다인 | room_my | dain_normal | 0.35 |  | *내일 아침 운동 같이 할 사람 구한다* |
| 180 | `night_dain_late_3` | 다인 | room_my | dain_normal | 0.35 |  | *거절은 안 받음 ㅋㅋ* |
| 181 | `night_dain_late_4` | {name} | room_my | dain_normal | 0.35 |  | *답장창에는 이미 '콜'이 찍혀 있다.* |
| 182 | `night_dain_late_4_b` | {name} | room_my | dain_normal | 0.35 |  | *다인의 메시지 아래에 이모티콘이 줄줄이 붙어 있다.  |
| 183 | `night_end_1` | {name} | room_my | 없음 |  |  | *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교 |
| 184 | `night_end_3` | {name} | room_my | 없음 |  |  | *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을  |
| | **Day 2** | | | | | | |
| 185 | `morning2_start` | {name} | room_school | 없음 |  |  | *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.* |
| 186 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 187 | `morning2_greet_dain_1` | 다인 | room_school | dain_laugh |  |  | 야! 어제 재밌었다, 오늘도 같이 뭐 하자! |
| 188 | `morning2_greet_dain_2` | 다인 | room_school | dain_laugh |  |  | *뒤에서 어깨를 탁 친다.* |
| 189 | `morning2_greet_dain_others` | 서연 | room_school | seyoun_normal |  |  | *클립보드를 넘기며 지나간다.* |
| 190 | `morning2_greet_dain_others_seo` | 서연 | room_school | seyoun_normal |  |  | 에너지 좋다. |
| 191 | `morning2_greet_dain_others_yuna` | {name} | room_school | yuna_bored |  |  | *유나의 펜촉이 쪽지 한가운데 잉크점을 남긴다.* |
| 192 | `morning2_greet_dain_others_2` | {name} | room_school | dain_laugh |  |  | *교실 문이 닫힌 뒤 클립보드 두드리는 소리가 복도에서 |
| 193 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *자리에 앉으려는데 — 책상 위에 접힌 쪽지가 하나 놓 |
| 194 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 195 | `morning2_note_3` | {name} | room_school | yuna_normal | 0.35 |  | *어제와 같은 글씨. 아래쪽에 장소가 적혀 있다. '도 |
| 196 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가다 교실 안을 들여다본다.* 어제 잘 잤 |
| 197 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 학생회장이 교실까지 인사하러 와? |
| 198 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 순찰이야. — 출석률 확인 겸. |
| 199 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | *복도로 돌아가기 직전 클립보드 끝이 문틀에 한 번 닿 |
| 200 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연이 사라진 복도를 바라보는데 — 뒤에서 민수가 돌 |
| 201 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 이틀 만에 학생회장이 인사하러 오냐? 나 1 |
| 202 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 인기가 없는 거 아닐까. |
| 203 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 그건 맞는데 그게 중요한 게 아니잖아. |
| 204 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *다인은 서연의 뒷모습이 교실 안으로 사라질 때까지 바 |
| 205 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 회장님도 우리 전학생한테 관심 있어? 인기 많네! |
| 206 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | '우리' 전학생? |
| 207 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 내가 먼저 봤잖아. 그럼 우리 맞지. 찜한 거. |
| 208 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *쉬는 시간. 복도로 나왔다.* |
| 209 | `morning2_break_1` | {name} | school_hallway | 없음 |  |  | *서연의 클립보드 끝이 책상에 톡 닿는다. 답할 틈도  |
| 210 | `morning2_seo_dust_1` | {name} | school_hallway | seyoun_normal |  |  | *1교시가 끝난 쉬는 시간, 복도에서 서연과 스친다.  |
| 211 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 잠깐. |
| 212 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *손이 {name}의 어깨에 닿는다. 먼지를 두 번 털 |
| 213 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 옷에 뭐 묻었어. |
| 214 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | *서연의 손이 떨어진 자리에서 가방끈이 비뚤어져 있다. |
| 215 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 왜 그래? 먼지잖아. |
| 216 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *어깨의 먼지는 없어졌는데 가방끈을 두 번이나 다시 고 |
| 217 | `morning2_dain_react_2` | {name} | school_hallway | dain_angry |  |  | *서연이 클립보드를 고쳐 끼고 복도로 간다. 뒤에서 다 |
| 218 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 지금 뭐야? 어깨 만진 거야? |
| 219 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 먼지 털어준 거야. |
| 220 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 먼지가 진짜 있긴 했어? |
| 221 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | *대답 대신 가방끈을 고쳐 잡았다. 다인은 그걸 보고도 |
| 222 | `morning2_end` | {name} | school_hallway | seyoun_normal |  |  | *민수 말로는 1년 동안 먼저 인사한 적도 없다던 서연 |
| 223 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *점심. 주머니에는 유나의 쪽지가 있고 복도 끝에서는  |
| 224 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *누구와 함께할까.* |
| 225 | `lunch2_dain_1_check` | {name} | school_hallway | 없음 |  |  | *매점 쪽으로 간다.* |
| 226 | `lunch2_dain_1` | {name} | store | dain_normal |  |  | *다인과 매점으로. 어제의 리벤지 가위바위보.* |
| 227 | `lunch2_dain_2` | 다인 | store | dain_normal |  |  | 오늘은 네가 진다. 각오해. |
| 228 | `lunch2_dain_3` | {name} | store | dain_normal |  |  | 어제도 그렇게 말했는데. |
| 229 | `lunch2_dain_4` | 다인 | store | dain_normal |  |  | 어제는 워밍업이었어. |
| 230 | `lunch2_dain_5` | {name} | store | dain_normal |  |  | *가위바위보. — 다인이 또 진다.* |
| 231 | `lunch2_dain_6` | 다인 | store | dain_pout |  |  | 이거 조작 아냐? |
| 232 | `lunch2_dain_7` | {name} | store | dain_pout |  |  | 가위바위보를 어떻게 조작해. |
| 233 | `lunch2_dain_8` | 다인 | store | dain_pout |  |  | 알았어, 알았어. 이모, 소보로 두 개요. |
| 234 | `lunch2_dain_9` | {name} | school_hallway | seyoun_normal |  |  | *빵을 사서 복도 창가 쪽에 선다. 도시락 가방을 든  |
| 235 | `lunch2_dain_10` | {name} | school_hallway | seyoun_pout |  |  | *서연이 다인 옆에 선 나를 한 번 보고 지나간다. 베 |
| 236 | `lunch2_dain_11` | 다인 | school_hallway | dain_normal |  |  | 야, 회장님 왜 저래? 왜 쳐다봐? |
| 237 | `lunch2_dain_12` | {name} | school_hallway | dain_normal |  |  | 모르겠는데. |
| 238 | `lunch2_dain_13` | 다인 | school_hallway | dain_normal |  |  | 흠, 너 혹시 회장님이랑도 친해? |
| 239 | `lunch2_dain_13_b` | 다인 | school_hallway | dain_normal |  |  | *소보로를 크게 한 입 베어 문다. 빵가루가 교복 소매 |
| 240 | `lunch2_dain_choice` | 다인 | school_hallway | dain_normal |  |  | *{name}을 빤히 본다.* |
| 241 | `lunch2_dain_c3_1` | 다인 | school_hallway | dain_shy |  |  | 뭐야, 웃지 마! *소보로를 반으로 갈라 하나 내민다. |
| 242 | `lunch2_dain_c3_2` | 다인 | school_hallway | dain_shy |  |  | *소보로 포장지를 세 번 접어 손가락 두 마디 너비로  |
| 243 | `lunch2_dain_end` | {name} | school_hallway | dain_pout |  |  | *다인이 소보로를 씹는 동안, 서연이 사라진 매점 유리 |
| 244 | `lunch2_dain_end_b` | {name} | playground | 없음 |  |  | *5교시 체육. 운동장에서 달리다 급정거한 옆 녀석과  |
| 245 | `lunch2_dain_end_c` | 체육교사 | playground | 없음 |  |  | 보건실 가서 소독 받고 와. |
| 246 | `lunch2_dain_end_d` | {name} | nurse_room | 없음 |  |  | *보건실 문을 연다. 어제와 같은 소독약 냄새.* |
| 247 | `lunch2_dain_end_e` | 보건선생님 | nurse_room | nurse_normal |  |  | *진료 기록지에서 시선을 든다.* 아, 어제의 전학생. |
| 248 | `lunch2_dain_end_f` | {name} | nurse_room | nurse_normal |  |  | 팔꿈치 좀 까졌는데요. |
| 249 | `lunch2_dain_end_g` | 보건선생님 | nurse_room | nurse_normal |  |  | 또 왔네? 단골 되려고? |
| 250 | `lunch2_dain_end_h` | {name} | nurse_room | nurse_normal |  |  | *장갑 낀 손이 팔꿈치 주변의 먼지부터 훑는다.* |
| 251 | `lunch2_dain_end_i` | 보건선생님 | nurse_room | nurse_normal |  |  | *소독약과 거즈를 꺼내 팔꿈치 아래에 받친다.* |
| 252 | `lunch2_dain_end_j` | 보건선생님 | nurse_room | nurse_normal |  |  | 조금 따가울 거야. 팔 힘 빼고. |
| 253 | `lunch2_dain_end_k` | {name} | nurse_room | nurse_normal |  |  | *소독약 묻은 솜이 상처를 훑는다. 팔꿈치 안쪽이 따끔 |
| 254 | `lunch2_dain_end_l` | 보건선생님 | nurse_room | nurse_normal |  |  | *밴드를 붙인다.* 움직이지 말고. 됐다. |
| 255 | `lunch2_dain_end_nurse_short1` | 보건선생님 | nurse_room | nurse_normal |  |  | 자, 됐다. 다음에는 다치기 전에 주변부터 보고 뛰고. |
| 256 | `lunch2_dain_end_nurse_short2` | {name} | nurse_room | nurse_normal |  |  | *밴드를 붙이고 보건실을 나온다. 팔꿈치를 접어도 끝이 |
| 257 | `lunch2_dain_end_nurse_short3` | {name} | school_hallway | 없음 |  |  | *복도로 나오자 수업 종료 종이 울린다. 새로 붙인 밴 |
| 258 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *방과후. 핸드폰에 알림이 두 개 와 있다.* |
| 259 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 체육관 와. 오늘은 진짜 내기다. |
| 260 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 학생회실에 올 수 있어? 일손이 부족해서. |
| 261 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게서는 아무 연락이 없다. 가방을 챙기자 주머니 |
| 262 | `after2_nurse_transition` | {name} | school_hallway | 없음 |  | 🌅 | *5교시 체육 뒤, 팔꿈치 밴드 끝이 소매에 걸린다.  |
| 263 | `hidden_nurse_d2_1` | {name} | nurse_room | nurse_normal |  | 🌅 | *소매를 걷자 밴드 한쪽이 들려 있다. 상처에는 피가  |
| 264 | `hidden_nurse_d2_2` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 하루도 안 돼서 밴드가 반품됐네. 앉아 봐. |
| 265 | `hidden_nurse_d2_3` | {name} | nurse_room | nurse_normal |  | 🌅 | 끝이 자꾸 소매에 걸려요. |
| 266 | `hidden_nurse_d2_4` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 어디 보자. |
| 267 | `hidden_nurse_d2_5` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *들뜬 밴드를 떼고 상처 주변을 닦은 뒤 새 밴드를 꺼 |
| 268 | `hidden_nurse_d2_choice1` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건선생님이 팔꿈치를 접었다 펴 보며 밴드 길이를 가 |
| 269 | `hidden_nurse_d2_choice1_a` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 응. 관절은 움직여도 안 뜯기게 붙여야 하거든. |
| 270 | `hidden_nurse_d2_6` | {name} | nurse_room | nurse_normal |  | 🌅 | *밴드를 확인하는데 책상 서랍에서 연두색 노트가 삐져나 |
| 271 | `hidden_nurse_d2_7` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *서랍을 닫는다.* 그건 안 봤지? 됐어. 서류 얘기하 |
| 272 | `hidden_nurse_d2_choice2` | {name} | nurse_room | nurse_shy |  | 🌅 | *서랍 손잡이를 쥔 손마디가 희다.* |
| 273 | `hidden_nurse_d2_choice2_b` | 보건선생님 | nurse_room | nurse_shy |  | 🌅 | *서랍 손잡이에서 손을 뗀다.* 비밀. 이 정도면 충분 |
| 274 | `hidden_nurse_d2_8` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 자, 다 됐어. 오늘은 물 닿지 않게 하고. |
| 275 | `hidden_nurse_d2_9` | {name} | nurse_room | nurse_normal |  | 🌅 | *밴드가 들뜨거나 피가 배면 다시 오라는 안내를 듣고  |
| 276 | `hidden_nurse_d2_freetalk` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *사용한 소독솜을 버리고 밴드 가장자리를 한 번 눌러  |
| 277 | `hidden_nurse_d2_return` | {name} | room_school | 없음 |  | 🌅 | *보건실을 나와 교실로 돌아오니, 방과후 햇빛이 책상  |
| 278 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *어디로 갈까.* |
| 279 | `after2_dain_1` | {name} | gym | dain_active |  | 🌅 | *체육관. 다인이 배구 네트 앞에서 준비운동을 하고 있 |
| 280 | `after2_dain_2` | 다인 | gym | dain_sweat |  | 🌅 | 왔어? 늦었어. |
| 281 | `after2_dain_3` | {name} | gym | dain_sweat |  | 🌅 | 5분 전인데. |
| 282 | `after2_dain_4` | 다인 | gym | dain_sweat |  | 🌅 | 나는 10분 전에 왔거든. |
| 283 | `after2_dain_5` | {name} | gym | dain_sweat |  | 🌅 | *빨리 온 쪽이 너. 나는 안 늦었다.* |
| 284 | `after2_dain_6` | 다인 | gym | dain_sweat |  | 🌅 | 자, 내기다! 서브 다섯 번, 세 번 이상 넘기면 네  |
| 285 | `after2_dain_7` | {name} | gym | dain_normal |  | 🌅 | 갑자기 떡볶이? |
| 286 | `after2_dain_8` | 다인 | gym | dain_laugh |  | 🌅 | 배고프거든. |
| 287 | `after2_dain_9` | {name} | gym | dain_normal |  | 🌅 | *첫 서브는 네트에 걸리고 두 번째는 선 안쪽에 떨어진 |
| 288 | `after2_dain_9_b` | 다인 | gym | dain_normal |  | 🌅 | *튕겨 나온 공을 양손으로 받아 든다.* 어? 봐주려고 |
| 289 | `after2_dain_9_c` | 다인 | gym | dain_active |  | 🌅 | *자세를 낮춘다. 공을 든 손에 힘이 들어간다.* |
| 290 | `after2_dain_9_d` | 다인 | gym | dain_active |  | 🌅 | 이번엔 제대로 간다! |
| 291 | `after2_dain_9_e` | {name} | gym | dain_active |  | 🌅 | *랠리가 빠르게 오간다. 다인은 착지할 때마다 왼발부터 |
| 292 | `after2_dain_9_f` | {name} | gym | dain_sweat |  | 🌅 | *점수판은 3:2. 다인은 일어서며 오른쪽 무릎을 한  |
| 293 | `after2_dain_11b` | {name} | street | dain_laugh |  | 🌅 | *체육관을 나와 거리를 걸었다.* |
| 294 | `after2_dain_12` | 다인 | street | dain_laugh |  | 🌅 | 졌네. 근데 좀 치는데? 너 운동 안 한다며. |
| 295 | `after2_dain_13` | {name} | street | dain_laugh |  | 🌅 | 안 한다고는 안 했어. |
| 296 | `after2_dain_14` | 다인 | street | dain_normal |  | 🌅 | *들고 있던 공을 떨어뜨린다.* 뭐야? 속은 거야? |
| 297 | `after2_dain_15` | {name} | street | dain_normal |  | 🌅 | 속인 건 아니고 물어보지도 않았잖아. |
| 298 | `after2_dain_16` | 다인 | street | dain_laugh |  | 🌅 | *주먹을 어깨 높이까지 들었다가 자기 옆구리에 붙인다. |
| 299 | `after2_dain_freetalk` | 다인 | store | dain_normal |  | 🌅 | *가게에 들어서자 다인이 떡볶이 컵을 밀어 놓고 젓가락 |
| 300 | `after2_dain_end` | {name} | store | dain_laugh |  | 🌅 | *다인이 떡볶이 컵을 내 쪽으로 밀어 두고 자기 몫 젓 |
| 301 | `after2_dain_end_b` | {name} | store | dain_laugh |  | 🌅 | *학교 앞 떡볶이집. 다인이 떡볶이를 후후 불며 말한다 |
| 302 | `after2_dain_end_2` | 다인 | store | dain_laugh |  | 🌅 | 야, 너 진짜 운동 좀 아는 거지? |
| 303 | `after2_dain_end_2b` | {name} | store | dain_laugh |  | 🌅 | 조금. |
| 304 | `after2_dain_end_2c` | 다인 | store | dain_laugh |  | 🌅 | 조금이면 저렇게 못 쳐! — 인정해, 잘한다고. |
| 305 | `after2_dain_end_2d` | {name} | store | dain_laugh |  | 🌅 | 다인이가 훨씬 잘하던데. |
| 306 | `after2_dain_end_3` | 다인 | store | dain_laugh |  | 🌅 | *젓가락 끝이 떡볶이 컵 위에서 그대로다.* |
| 307 | `after2_dain_end_3b` | 다인 | store | dain_laugh |  | 🌅 | 당연하지. 나 체육 특기생이었거든. |
| 308 | `after2_dain_end_3c` | {name} | store | dain_laugh |  | 🌅 | *'이었거든'이 끝나자 다인의 젓가락이 종이컵 옆 물컵 |
| 309 | `after2_dain_end_3d` | 다인 | store | dain_laugh |  | 🌅 | 아, 맵다. 물, 물. |
| 310 | `after2_dain_end_3e` | 다인 | store | dain_shy |  | 🌅 | *떡볶이 컵을 {name} 쪽으로 밀어놓고 빈 물병을  |
| 311 | `after2_dain_rival_seo_check` |  | store | 없음 |  | 🌅 |  |
| 312 | `after2_dain_rival_seo_low` | {name} | store | seyoun_normal |  | 🌅 | *서연이 가게 앞을 지나며 두 사람에게 고개를 숙인다. |
| 313 | `after2_dain_rival_yuna_check` |  | store | 없음 |  | 🌅 |  |
| 314 | `after2_dain_rival_yuna_low` | {name} | store | yuna_normal |  | 🌅 | *유나가 유리창 너머로 고개를 한 번 숙이고 별관 쪽으 |
| 315 | `after2_dain_return` | {name} | school | dain_shy |  | 🌅 | *학교로 돌아오는 길. 교문 앞에 다다랐다.* |
| 316 | `after2_group_dain_companion` | 다인과 동행 | gym | 없음 |  | 🌅 | *체육관과 별관에서 들은 설명이 서로 어긋난다. 다인이 |
| 317 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.* |
| 318 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 319 | `night2_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저  |
| 320 | `night2_msg_1` | {name} | room_my | 없음 |  |  | *세 명에게서 메시지가 왔다.* |
| 321 | `night2_msg_dain_specific` | 다인 | room_my | dain_normal | 0.35 |  | 야, 오늘 떡볶이 맛있었다. |
| 322 | `night2_msg_dain_specific_2` | 다인 | room_my | dain_normal | 0.35 |  | 내일도 내기하자. 종목 바꿔서. |
| 323 | `night2_msg_seo_general` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 점심에 옥상 열어놓을게. 와 |
| 324 | `night2_msg_yuna_general` | 유나 | room_my | yuna_normal | 0.35 |  | 내일 별관 올 거야? |
| 325 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에  |
| 326 | `night2_choice` | {name} | room_my | 없음 |  |  | *누구에게 먼저 답장할까?* |
| 327 | `night2_reply_yuna_1` | {name} | room_my | yuna_normal | 0.35 |  | 아직 반 정도. 재밌어 |
| 328 | `night2_reply_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | 다행이네 |
| 329 | `night2_reply_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *답장창이 한동안 비어 있다. 그러다 새 말풍선이 올라 |
| 330 | `night2_reply_yuna_4` | 유나 | room_my | yuna_normal | 0.35 |  | 아까 재생목록. 세 번째 곡도 들어봐 |
| 331 | `night2_reply_yuna_5` | {name} | room_my | yuna_normal | 0.35 |  | *유나가 공유한 재생목록을 다시 연다. 세 번째 곡은  |
| 332 | `night2_reply_yuna_6` | 유나 | room_my | yuna_normal | 0.35 |  | 끝까지 들어봐 |
| 333 | `night2_reply_yuna_6_b` | {name} | room_my | yuna_normal | 0.35 |  | *이어폰을 끼고 재생 버튼을 누른다. 피아노 뒤로 낮은 |
| 334 | `night2_reply_yuna_6_c` | {name} | room_my | yuna_normal | 0.35 |  | *곡이 끝나고 재생 화면의 진행 바가 마지막 칸에 멈춘 |
| 335 | `night2_reply_yuna_7` | {name} | room_my | yuna_normal | 0.35 |  | *재생목록 제목 아래에 유나가 남긴 짧은 메모가 보인다 |
| 336 | `night2_reply_yuna_react_default` | 유나 | room_my | yuna_normal | 0.35 |  | 응. 잘 자. |
| 337 | `night2_yuna_freetalk` | 유나 | room_my | yuna_normal | 0.35 | 🌙 | 잠깐. 아직 깨어 있으면... 조금만 더 얘기할래? |
| 338 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 또 다른 알림이 보인다.* |
| 339 | `night2_hidden_nurse_1` | {name} | room_my | nurse_normal | 0.35 |  | *건강 관리 앱 알림. '보건실 기록: 전학생 — 팔꿈 |
| 340 | `night2_hidden_nurse_2` | {name} | room_my | nurse_normal | 0.35 |  | *팔꿈치를 한 번 굽혀 본다. 밴드 모서리는 아직 단단 |
| 341 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 보내고 핸드폰을 내려놓았다.* |
| 342 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이,  |
| 343 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 |
| 344 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *메모장에 줄줄이 남은 보내지 않은 문장. '선생님,  |
| 345 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 메모가 마지막이다. 그 아래 39번째에는 제 |
| 346 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 |
| 347 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로 |
| 348 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보 |
| 349 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화 |
| 350 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 |
| 351 | `night2_end_2_b` | {name} | room_my | 없음 |  |  | *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있 |
| 352 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.* |
| 353 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을  |
| 354 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 |
| | **Day 3** | | | | | | |
| 355 | `morning3_start` | {name} | school | 없음 |  |  | *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯 |
| 356 | `morning3_start_2` | {name} | school | 없음 |  |  | *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군 |
| 357 | `hidden_nurse_d3_check` | {name} | room_school | 없음 |  |  | *쉬는 시간이 끝나간다.* |
| 358 | `hidden_nurse_d3_1` | {name} | nurse_room | nurse_normal |  |  | *아침 종이 친 뒤에도 자리에서 일어나지 못했다. 손등 |
| 359 | `hidden_nurse_d3_1_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 책상에서 몸을 일으킨다.* 어? 오늘은  |
| 360 | `hidden_nurse_d3_1_c` | {name} | nurse_room | nurse_normal |  |  | 아프진 않은데요. |
| 361 | `hidden_nurse_d3_1_d` | 보건선생님 | nurse_room | nurse_normal |  |  | 아프지 않은데 보건실에? |
| 362 | `hidden_nurse_d3_1_e` | {name} | nurse_room | nurse_normal |  |  | 좀 쉬고 싶어서요. |
| 363 | `hidden_nurse_d3_2` | 보건선생님 | nurse_room | nurse_normal |  |  | 어디가 아픈 건 아니고? 표정이 안 좋은데. |
| 364 | `hidden_nurse_d3_3` | {name} | nurse_room | nurse_normal |  |  | 좀 쉬고 싶어서요. 사람 관계가 복잡해져서요. |
| 365 | `hidden_nurse_d3_3_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *컵을 내려놓는다.* |
| 366 | `hidden_nurse_d3_3_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 앉아. |
| 367 | `hidden_nurse_d3_3_d` | 보건선생님 | nurse_room | nurse_normal |  |  | *컵을 책상 안쪽에 놓고 환자용 의자를 침대 앞으로 끌 |
| 368 | `hidden_nurse_d3_4` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님은 커튼을 치고 물컵을 건넨다.* 앉아. 여 |
| 369 | `hidden_nurse_d3_5_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 의자를 침대 쪽으로 당겨 앉는다.* |
| 370 | `hidden_nurse_d3_5_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 비슷해? 그럼 여기 온 건 잘했어. |
| 371 | `hidden_nurse_d3_5_d` | {name} | nurse_room | nurse_normal |  |  | *보건선생님의 엄지가 물컵 가장자리를 한 번 누른다.* |
| 372 | `hidden_nurse_d3_5_e` | {name} | nurse_room | nurse_normal |  |  | 누구한테 말하기 애매한 것들이요. |
| 373 | `hidden_nurse_d3_5_f` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 의자를 끌어와 마주 앉는다.* 사람 관계 |
| 374 | `hidden_nurse_d3_5_g` | {name} | nurse_room | nurse_normal |  |  | 셋 다 신경 쓰이는데 결국 한 명은 정해야 해서요. |
| 375 | `hidden_nurse_d3_5_h` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님은 종이컵을 책상 위에 반듯하게 놓는다.* |
| 376 | `hidden_nurse_d3_5_i` | 보건선생님 | nurse_room | nurse_normal |  |  | 그거 연애 상담이야? |
| 377 | `hidden_nurse_d3_5_j` | {name} | nurse_room | nurse_normal |  |  | 아, 그런 건 아니... |
| 378 | `hidden_nurse_d3_5_k` | 보건선생님 | nurse_room | nurse_normal |  |  | 아니라고 하기엔 얼굴에 다 보여. |
| 379 | `hidden_nurse_d3_5_l` | {name} | nurse_room | nurse_normal |  |  | *책상 위 종이컵만 본다.* |
| 380 | `hidden_nurse_d3_5_m` | 보건선생님 | nurse_room | nurse_normal |  |  | 이게 보건 업무에 들어가나 모르겠네. 그래도 들어줄게. |
| 381 | `hidden_nurse_d3_5_n` | {name} | nurse_room | nurse_normal |  |  | 선생님도 여러 사람 사이에서 헷갈린 적 있어요? |
| 382 | `hidden_nurse_d3_5_o` | 보건선생님 | nurse_room | nurse_normal |  |  | *종이컵 테두리가 엄지 아래에서 접힌다. 보건선생님은  |
| 383 | `hidden_nurse_d3_5_p` | 보건선생님 | nurse_room | nurse_normal |  |  | 있었지. 대학병원에서 일할 때. |
| 384 | `hidden_nurse_d3_5_q` | {name} | nurse_room | nurse_normal |  |  | 대학병원이요? |
| 385 | `hidden_nurse_d3_choice1` | {name} | nurse_room | nurse_normal |  |  | *입만 열었다가 다시 다문다.* |
| 386 | `hidden_nurse_d3_choice1_b` | 보건선생님 | nurse_room | nurse_normal |  |  | 괜찮아. 자세히는 말하지 않을게. |
| 387 | `hidden_nurse_d3_6` | 보건선생님 | nurse_room | nurse_normal |  |  | 대학병원에서 일할 때. 호출벨이 동시에 울리면, 손이  |
| 388 | `hidden_nurse_d3_6_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *물컵을 내려놓는다. 컵 바닥의 물기가 둥글게 번진다. |
| 389 | `hidden_nurse_d3_6_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 그만뒀다기보다, 나왔지. 멋있는 이유 같은 건 없어. |
| 390 | `hidden_nurse_d3_6_d` | 보건선생님 | nurse_room | nurse_normal |  |  | *청진기를 정리하다 노트 서랍을 열려던 손을 거둔다.* |
| 391 | `hidden_nurse_d3_6_e` | 보건선생님 | nurse_room | nurse_normal |  |  | 있었지. 못 살린 환자 한 명. 열일곱 살이었어. 그  |
| 392 | `hidden_nurse_d3_6_f` | {name} | nurse_room | nurse_normal |  |  | *어제 본 연두색 노트가 떠오른다. 첫 장에서 멈춰 있 |
| 393 | `hidden_nurse_d3_7` | 보건선생님 | nurse_room | nurse_normal |  |  | 그래서 학교로 왔어. 여기서는 한 명 한 명 얼굴을 제 |
| 394 | `hidden_nurse_d3_7_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 청진기를 책상 위에 놓고 {name} 쪽 |
| 395 | `hidden_nurse_d3_8` | 보건선생님 | nurse_room | nurse_normal |  |  | 너도 마찬가지야. 다 챙기려고 하지 마. 진짜 중요한  |
| 396 | `hidden_nurse_d3_8_b` | {name} | nurse_room | nurse_normal |  |  | *쥔 종이컵 한쪽이 손가락 모양대로 찌그러진다.* |
| 397 | `hidden_nurse_d3_8_c` | {name} | nurse_room | nurse_normal |  |  | 감사합니다. |
| 398 | `hidden_nurse_d3_8_d` | 보건선생님 | nurse_room | nurse_normal |  |  | 이 정도로 버거우면 참지 말고 말해. 필요하면 상담실도 |
| 399 | `hidden_nurse_d3_8_e` | {name} | nurse_room | nurse_normal |  |  | *상담실 번호가 적힌 안내 카드를 접어 주머니에 넣는다 |
| 400 | `hidden_nurse_d3_8_f` | {name} | nurse_room | 없음 |  |  | *자리에서 일어나 문손잡이를 잡는다. 뒤에서 서랍 여는 |
| 401 | `hidden_nurse_d3_8_g` | {name} | nurse_room | 없음 |  |  | *들뜬 밴드 끝을 손톱으로 누른다. 흔들리는 커튼 너머 |
| 402 | `hidden_nurse_d3_8_h` | {name} | nurse_room | 없음 |  |  | *문손잡이에서 손을 떼고 다시 돌아선다. 서랍 안에서  |
| 403 | `hidden_nurse_d3_choice2` | 보건선생님 | nurse_room | nurse_normal |  |  | *'한 명'에서 말을 멈췄다. 종이컵 가장자리가 손에  |
| 404 | `hidden_nurse_d3_choice2_c` | 보건선생님 | nurse_room | nurse_worried |  |  | 편해지는지는 말하는 사람이 정해. 듣는 사람이 밀어붙이 |
| 405 | `hidden_nurse_d3_9` | 보건선생님 | nurse_room | nurse_normal |  |  | 찾아오는 건 괜찮아. 다만 혼자 다 해결해 주겠다는 약 |
| 406 | `hidden_nurse_d3_9_b` | {name} | nurse_room | nurse_normal |  |  | *종이컵을 내려놓고 안내 카드를 주머니에서 다시 꺼낸다 |
| 407 | `hidden_nurse_d3_9_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 네가 더 버거워지면 담임이나 상담실하고 같이 움직일 거 |
| 408 | `hidden_nurse_d3_9_d` | 보건선생님 | nurse_room | nurse_normal |  |  | 그 전에 누구에게 어디까지 말할지는 너랑 먼저 정하고. |
| 409 | `hidden_nurse_d3_9_e` | {name} | nurse_room | nurse_normal |  |  | *보건선생님이 상담 예약표를 책상 앞으로 밀어 둔다.* |
| 410 | `hidden_nurse_d3_9_f` | {name} | nurse_room | nurse_normal |  |  | *예약표에는 보건실과 상담실 시간이 나란히 적혀 있다. |
| 411 | `hidden_nurse_d3_11` | 보건선생님 | nurse_room | nurse_normal |  |  | 다음 수업 늦겠다. 오늘 한 얘기는 여기까지 정리하고  |
| 412 | `hidden_nurse_d3_freetalk` | 보건선생님 | nurse_room | nurse_normal |  |  | *커튼을 반쯤 닫고 의자를 끌어온다.* 오늘은 농담보다 |
| 413 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | 이번 주말에 시간 있어? 공원에 같이 가자. |
| 414 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끈다. 눈이 마주치 |
| 415 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼  |
| 416 | `morning3_date_dain_2` | 다인 | room_school | dain_normal |  |  | *서연이 아직 교실 문 앞에 서 있다. 다인은 이쪽을  |
| 417 | `morning3_date_dain_choice` | 다인 | room_school | dain_normal |  |  | *서연의 발소리가 멎는다. 다인은 대답을 기다린다.* |
| 418 | `morning3_date_dain_accept` | {name} | room_school | dain_laugh |  |  | *다인과 주말 약속을 잡았다. 다인이 웃자 복도에서 서 |
| 419 | `morning3_date_dain_decline_narr` | 다인 | room_school | dain_laugh |  |  | *다인은 웃으며 자기 자리로 돌아간다. 종이 치기 직전 |
| 420 | `morning3_date_dain_decline_inner_2` | {name} | room_school | dain_laugh |  |  | *다인이 자리로 돌아간 뒤, 종이 치기 직전의 교실만  |
| 421 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다 |
| 422 | `morning3_date_yuna_1_b` | 서연 | room_school | seyoun_normal |  |  | 유나. 쪽지로 물으면 다른 사람은 못 듣잖아. |
| 423 | `morning3_date_yuna_2` | {name} | room_school | yuna_normal |  |  | *'주말. 헌책방. 먼저 잡힌 약속이 있어도, 네가 오 |
| 424 | `morning3_date_yuna_choice` | {name} | room_school | yuna_normal |  |  | *쪽지를 읽는 동안 유나는 서연과 다인을 차례로 본다. |
| 425 | `morning3_date_yuna_accept` | {name} | room_school | yuna_shy |  |  | *쪽지 뒷면에 '갈게'라고 적는다. 유나가 종이를 접는 |
| 426 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 427 | `morning3_multi_from_yuna` |  | room_school | yuna_shy |  |  |  |
| 428 | `morning3_end` | {name} | room_school | 없음 |  |  | *수업 종료 종이 울리고 곧 점심시간이 된다.* |
| 429 | `morning3_end_b` | 유나 | room_school | yuna_normal |  |  | 맛있네. |
| 430 | `lunch3_start` | {name} | room_school | yuna_normal |  |  | *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. |
| 431 | `lunch3_start_2_b` | 다인 | room_school | dain_normal |  |  | *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가 |
| 432 | `lunch3_meal_1` | 다인 | room_school | dain_laugh |  |  | 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고  |
| 433 | `lunch3_meal_2` | {name} | room_school | dain_laugh |  |  | 그건 내 거... |
| 434 | `lunch3_meal_3` | 서연 | room_school | seyoun_normal |  |  | 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점 |
| 435 | `lunch3_meal_4` | {name} | room_school | seyoun_normal |  |  | 점수 매기지 마. |
| 436 | `lunch3_meal_5` | 서연 | room_school | seyoun_normal |  |  | 10점 만점이야. 나쁜 거 아닌데? |
| 437 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다 |
| 438 | `lunch3_meal_7` | {name} | room_school | seyoun_normal |  |  | 유나, 그건 내가 제일 좋아하는 건데. |
| 439 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임 |
| 440 | `lunch3_meal_8` | {name} | room_school | yuna_bored |  |  | *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다. |
| 441 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. |
| 442 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓 |
| 443 | `lunch3_meal_10_e` | 유나 | room_school | yuna_normal |  |  | *유나는 짧게 끄덕인 뒤 쓰던 쪽지를 접어 주머니에 넣 |
| 444 | `lunch3_meal_11` | {name} | room_school | yuna_bored |  |  | *누구에게 줄까?* |
| 445 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *마지막 반찬을 누구에게 줄지 고민한다.* |
| 446 | `lunch3_share_1` | {name} | room_school | yuna_bored |  |  | *다 같이 나눠 먹자고 하자 셋이 웃는다. 웃음이 끊긴 |
| 447 | `lunch3_share_solo` | {name} | room_school | yuna_normal |  |  | *셋이 계란말이를 조금씩 나눠 먹는다. 반으로 갈린 마 |
| 448 | `lunch3_end` | {name} | room_school | 없음 |  |  | *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다 |
| 449 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육 |
| 450 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다 |
| 451 | `after3_auto_yuna` | {name} | school_hallway | 없음 |  | 🌅 | *유나와 약속이 있다. 도서관 별관으로 간다.* |
| 452 | `after3_rivals_for_yuna_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 453 | `after3_rival_seo_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 454 | `after3_rival_seo_affinity` |  | school_hallway | 없음 |  | 🌅 |  |
| 455 | `after3_rival_seo_done` |  | school_hallway | 없음 |  | 🌅 |  |
| 456 | `after3_rival_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 457 | `after3_rival_dain_affinity` |  | school_hallway | 없음 |  | 🌅 |  |
| 458 | `after3_rival_dain_mid` | 다인 | school_hallway | dain_normal |  | 🌅 | 오케이. 그럼 나 먼저 체육관 갈게. |
| 459 | `after3_rival_dain_done` |  | school_hallway | 없음 |  | 🌅 |  |
| 460 | `after3_yuna_affinity_check` |  | yuna_hideout | 없음 |  | 🌅 |  |
| 461 | `after3_yuna_partial_1` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *별관 문은 열려 있지만 유나는 책을 펼치지 않는다.  |
| 462 | `after3_yuna_partial_2` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | 오늘은 여기까지만. 다음에는 내가 먼저 부를게. |
| 463 | `after3_yuna_end` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | *유나가 노트를 품에 꼭 끌어안는다.* |
| 464 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.* |
| 465 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 466 | `after3_group_nurse_companion` | 보건선생님과 동행 | nurse_room | 없음 |  | 🌅 | *건강 점검표와 운동부 물품 상자가 나란히 놓인다. 보 |
| 467 | `after3_group_return` | {name} | school_hallway | 없음 |  | 🌅 | *대화를 마치고 복도로 나온다.* |
| 468 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 469 | `minsu_d3_check` | {name} | school | 없음 |  | 🌅 |  |
| 470 | `minsu_d3_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문 앞에 민수가 서 있다.* |
| 471 | `minsu_d3_2` | 민수 | school | 없음 |  | 🌅 | 봤다. |
| 472 | `minsu_d3_3` | 민수 | school | 없음 |  | 🌅 | 점심때. 그리고 방금 서연 표정도. |
| 473 | `minsu_d3_4` | 민수 | school | 없음 |  | 🌅 | 어제 내가 뭐랬냐. 나중에 셋 다 울면 네 탓이라고 했 |
| 474 | `minsu_d3_5` | 민수 | school | 없음 |  | 🌅 | 옆에서 보기 좀 힘들다. 걔들 다 좋은 애들이야. 네가 |
| 475 | `minsu_d3_5b` | 민수 | school | 없음 |  | 🌅 | *민수는 빨대 포장지를 끝까지 접어 테이블 위에 내려놓 |
| 476 | `minsu_d3_6` | {name} | school | 없음 |  | 🌅 | 맞아. |
| 477 | `minsu_d3_6b` | 민수 | school | 없음 |  | 🌅 | 전 학교에서 뭔 일 있었는지 안 물어볼게. 근데 하나만 |
| 478 | `minsu_d3_7` | 민수 | school | 없음 |  | 🌅 | 거절도 배려야. 안 되는 관계에 계속 여지 주는 것보다 |
| 479 | `minsu_d3_8` | {name} | school | 없음 |  | 🌅 | *거절도 배려다. 전 학교에서 나는 소정이에게 고백할  |
| 480 | `minsu_d3_9` | 민수 | school | 없음 |  | 🌅 | *민수는 더 말하지 않고 끝까지 접은 빨대 포장지를 내 |
| 481 | `minsu_d3_10` | 민수 | school | 없음 |  | 🌅 | 내일 학교에서 보자. 진지하게 생각해. |
| 482 | `night3_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 가방을 의자에 걸어 둔다.* |
| 483 | `night3_start_2` | {name} | room_my | 없음 |  |  | *책상 위에 엎어 둔 핸드폰 화면을 켠다.* |
| 484 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *읽지 않은 메시지가 떠 있다.* |
| 485 | `night3_dream_1` | {name} | school | 없음 |  |  | *꿈속에서 누군가와 나란히 걷는다. 얼굴은 보이지 않고 |
| 486 | `night3_dream_2_b` | {name} | school | 없음 |  |  | *메모장을 닫았다. 내일 보낼 문장은 아직 없다.* |
| 487 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *커튼 사이로 들어온 아침 햇살에 눈을 뜬다. 핸드폰  |
| 488 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *'삭제하시겠습니까?' 확인 창이 뜬다. 손가락이 버튼 |
| 489 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *1초 동안 화면을 내려다본다. 소정이 책상의 낙서와  |
| 490 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *그래. 삭제 버튼에 올린 손가락으로 화면을 누른다.* |
| 491 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼을 누르지 않고 사진을 새 폴더로 옮긴다.  |
| 492 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *'거절도 네가 해야 할 일이야.' 민수의 말이 떠오른 |
| 493 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *갤러리에서 소정이 사진이 사라지고 빈칸만 남는다.* |
| 494 | `night3_faithful_reflect_4_b` | {name} | room_my | 없음 |  |  | *빈 앨범 썸네일 위를 엄지로 문지른다.* |
| 495 | `night3_faithful_reflect_4_c` | {name} | room_my | 없음 |  |  | *핸드폰을 덮자 검은 화면에 갤러리의 빈칸이 겹쳐 보인 |
| 496 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *알람이 울리기 전에 눈을 떴다.* |
| 497 | `night3_end` | {name} | room_my | 없음 |  |  | *방 불을 끄고 핸드폰을 엎어 둔다.* |
| | **Day 4** | | | | | | |
| 498 | `morning4_start` | {name} | room_my | 없음 |  |  | *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다 |
| 499 | `morning4_nightmare_check` |  | room_my | 없음 |  |  |  |
| 500 | `minsu_cheer_1` | {name} | room_my | 없음 |  |  | *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.* |
| 501 | `minsu_cheer_1_b` | 민수 | room_my | minsu_normal | 0.35 |  | *야 오늘 데이트라며?* |
| 502 | `minsu_cheer_1_c` | {name} | room_my | minsu_normal | 0.35 |  | *어떻게 알았어* |
| 503 | `minsu_cheer_1_d` | 민수 | room_my | minsu_normal | 0.35 |  | *다인이가 단톡방에 올림. 내일 약속 있음, 이라고* |
| 504 | `minsu_cheer_2` | 민수 | room_my | minsu_normal | 0.35 |  | 잘하고 와ㅋㅋ |
| 505 | `minsu_cheer_3` | {name} | room_my | minsu_normal | 0.35 |  | 알아. |
| 506 | `minsu_cheer_4_branch` |  | room_my | 없음 |  |  |  |
| 507 | `minsu_cheer_4_ins_single` | {name} | room_my | minsu_normal | 0.35 |  | *핸드폰 캘린더를 본다. 오늘 약속은 하나뿐이다.* |
| 508 | `morning4_start_2` | {name} | room_my | 없음 |  |  | *심호흡하고 약속 메시지를 다시 확인한다.* |
| 509 | `morning4_yuna_msg_1` | 유나 | room_my | yuna_normal | 0.35 |  | 10시. 역 앞 카페. 늦으면 간다. |
| 510 | `morning4_yuna_msg_1_b` | {name} | room_my | yuna_normal | 0.35 |  | *두 문장뿐이다. '늦으면 간다' 뒤에는 마침표도 없다 |
| 511 | `morning4_yuna_msg_single` | {name} | room_my | yuna_normal | 0.35 |  | *메시지는 짧다. 오늘 약속은 하나뿐이다.* |
| 512 | `morning4_hidden_check` | {name} | room_my | 없음 |  |  | *주말 아침, 학교 앞 사거리에서 신호를 기다린다.* |
| 513 | `hidden_nurse_d4_morning_1` | {name} | nurse_room | nurse_normal |  |  | *학교 행사 준비일 아침. 예약해 둔 상담 시간에 맞춰 |
| 514 | `hidden_nurse_d4_morning_3` | 보건선생님 | nurse_room | nurse_normal |  |  | 시간 맞춰 왔네. 앉아. |
| 515 | `hidden_nurse_d4_morning_4` | 보건선생님 | nurse_room | nurse_normal |  |  | *상담 기록지를 펼치고 펜을 든다.* |
| 516 | `hidden_nurse_d4_morning_5` | {name} | nurse_room | nurse_normal |  |  | 지난번 상담 마무리하는 거죠? |
| 517 | `hidden_nurse_d4_morning_6` | 보건선생님 | nurse_room | nurse_normal |  |  | 응. 오늘 상태를 확인하고 다음에 도움받을 곳까지 정해 |
| 518 | `hidden_nurse_d4_morning_7` | 보건선생님 | nurse_room | nurse_normal |  |  | *지난 상담에서 적어둔 항목을 하나씩 확인한다.* |
| 519 | `hidden_nurse_d4_morning_8` | 보건선생님 | nurse_room | nurse_normal |  |  | 한 가지 확인할게. |
| 520 | `hidden_nurse_d4_morning_9` | {name} | nurse_room | nurse_normal |  |  | 뭔데요? |
| 521 | `hidden_nurse_d4_morning_10` | 보건선생님 | nurse_room | nurse_normal |  |  | *학교 상담 안내문을 {name} 쪽으로 돌려 놓는다. |
| 522 | `hidden_nurse_d4_morning_11` | 보건선생님 | nurse_room | nurse_normal |  |  | 보건실 말고도 도움을 청할 어른은 정해뒀어? |
| 523 | `hidden_nurse_d4_morning_choice` | {name} | nurse_room | nurse_normal |  |  | *안내문에는 담임 상담, 위클래스, 보호자 연락 순서가 |
| 524 | `hidden_nurse_d4_morning_choice_b` | {name} | nurse_room | nurse_normal |  |  | 아직은 잘 모르겠어요. |
| 525 | `hidden_nurse_d4_morning_12` | 보건선생님 | nurse_room | nurse_normal |  |  | 그래. 혼자 버티는 것보다 훨씬 낫다. |
| 526 | `hidden_nurse_d4_morning_13` | 보건선생님 | nurse_room | nurse_normal |  |  | 네 얘기를 함부로 옮기진 않을게. 다만 다칠 위험이 보 |
| 527 | `hidden_nurse_d4_morning_freetalk` | 보건선생님 | nurse_room | nurse_normal |  |  | *상담 기록지를 덮는다.* 오늘 적은 순서 기억하지?  |
| 528 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 529 | `hidden_nurse_d4_1` | {name} | nurse_room | nurse_normal |  |  | *책상 한쪽에 행사 구급함과 검진 도구가 쌓여 있다.  |
| 530 | `hidden_nurse_d4_1_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 돌아본다.* 어? 진짜 왔어? |
| 531 | `hidden_nurse_d4_2` | 보건선생님 | nurse_room | nurse_normal |  |  | 학교 행사 응급키트 만들 사람을 구했는데 진짜 지원할  |
| 532 | `hidden_nurse_d4_2_b` | {name} | nurse_room | nurse_shy |  |  | 오늘은 환자 말고 봉사자네요. |
| 533 | `hidden_nurse_d4_2_c` | 보건선생님 | nurse_room | nurse_dry_smile |  |  | 오늘은 봉사자. 다치면 그때 다시 환자. |
| 534 | `hidden_nurse_d4_2_d` | {name} | nurse_room | nurse_shy |  |  | *행사 스태프들이 드나드는 사이, 테이블 위에 거즈와  |
| 535 | `hidden_nurse_d4_2_e` | 보건선생님 | nurse_room | nurse_normal |  |  | *빈 파우치를 건넨다.* 거즈 두 장, 소독솜 세 개씩 |
| 536 | `hidden_nurse_d4_2_f` | {name} | nurse_room | nurse_normal |  |  | *파우치마다 준비물을 채운다. 보건선생님은 완성된 키트 |
| 537 | `hidden_nurse_d4_2_g` | 보건선생님 | nurse_room | nurse_tired |  |  | 대학병원에선 이런 준비도 혼자 맡는 날이 많았어. |
| 538 | `hidden_nurse_d4_2_h` | {name} | nurse_room | nurse_shy |  |  | 혼자서요? |
| 539 | `hidden_nurse_d4_3` | {name} | nurse_room | nurse_normal |  |  | 도와준다고 했잖아요. |
| 540 | `hidden_nurse_d4_4` | 보건선생님 | nurse_room | nurse_tired |  |  | 야간 근무 때는 간호사 세 명 몫을 혼자 하는 날도 있 |
| 541 | `hidden_nurse_d4_4_b` | {name} | nurse_room | nurse_normal |  |  | 그래서 번아웃이... |
| 542 | `hidden_nurse_d4_4_c` | 보건선생님 | nurse_room | nurse_tired |  |  | *서류철을 덮는다. 볼펜 끝이 표지 위에서 한 번 미끄 |
| 543 | `hidden_nurse_d4_4_d` | 보건선생님 | nurse_room | nurse_tired |  |  | 그때 나한테 제일 힘들었던 건 일의 양이 아니었어. |
| 544 | `hidden_nurse_d4_4_e` | {name} | nurse_room | nurse_normal |  |  | 그럼 뭐였어요? |
| 545 | `hidden_nurse_d4_4_f` | 보건선생님 | nurse_room | nurse_shy |  |  | 사람 이름보다 병상 번호를 먼저 확인하게 되는 순간이  |
| 546 | `hidden_nurse_d4_4_g` | {name} | nurse_room | nurse_normal |  |  | *서류 맨 위 병상 번호 칸에 펜촉 자국이 남아 있다. |
| 547 | `hidden_nurse_d4_4_h` | 보건선생님 | nurse_room | nurse_normal |  |  | 학교에선 한 명씩 볼 시간이 있잖아. 그래도 내가 못  |
| 548 | `hidden_nurse_d4_4_i` | {name} | nurse_room | nurse_normal |  |  | 연결하는 것도 치료예요? |
| 549 | `hidden_nurse_d4_4_j` | 보건선생님 | nurse_room | nurse_normal |  |  | 그러니까 여기서 막히면 담임이나 상담실도 찾아가. 혼자 |
| 550 | `hidden_nurse_d4_4_k` | {name} | nurse_room | nurse_shy |  |  | *마지막 응급키트의 지퍼를 닫는다. 바깥에서는 다른 봉 |
| 551 | `hidden_nurse_d4_5` | 보건선생님 | nurse_room | nurse_normal |  |  | 그래서 학교로 왔어. 치료보다 먼저 말을 듣는 법을 다 |
| 552 | `hidden_nurse_d4_name_choice` | {name} | nurse_room | nurse_shy |  |  | *보건선생님이 완성된 응급키트 수를 적는다.* |
| 553 | `hidden_nurse_d4_name_trap` | 보건선생님 | nurse_room | nurse_normal |  |  | 크게 다치는 일만 일이면 좋겠네. 말 못 하고 버티는  |
| 554 | `hidden_nurse_d4_6` | 보건선생님 | nurse_room | nurse_normal |  |  | 고마워. 덕분에 빨리 끝났어. 별건 아니고. |
| 555 | `hidden_nurse_d4_6_b` | {name} | nurse_room | nurse_normal |  |  | 별거 아닌데요. |
| 556 | `hidden_nurse_d4_6_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 별거 맞아. 대신 봉사 시간은 정확히 적어줄게. |
| 557 | `hidden_nurse_d4_6_d` | {name} | nurse_room | nurse_normal |  |  | *보건선생님이 봉사 확인표에 시작과 종료 시간을 적는다 |
| 558 | `hidden_nurse_d4_choice` | 보건선생님 | nurse_room | nurse_normal |  |  | 남은 건 라벨 붙이기야. 행사 스태프들이 간식 사러 가 |
| 559 | `hidden_nurse_d4_meal_walk` | {name} | store | nurse_normal |  |  | *행사 스태프들과 학교 앞 분식집에 들렀다. 포장 봉투 |
| 560 | `hidden_nurse_d4_meal_1` | 보건선생님 | store | nurse_normal |  |  | 매운맛 누가 골랐어. 물부터 챙겨. |
| 561 | `hidden_nurse_d4_meal_1_b` | {name} | store | nurse_normal |  |  | 선생님이 제일 먼저 드셨잖아요. |
| 562 | `hidden_nurse_d4_meal_1_c` | 보건선생님 | store | nurse_normal |  |  | 확인하려고 먹은 거지. *물을 한 모금 마신다.* 이건 |
| 563 | `hidden_nurse_d4_meal_1b` | {name} | nurse_room | nurse_normal |  |  | *스태프들과 보건실로 돌아와 키트 상자에 라벨을 붙인다 |
| 564 | `hidden_nurse_d4_meal_2` | {name} | nurse_room | nurse_normal |  |  | 병원 얘기할 때랑 지금은 표정이 다르네요. |
| 565 | `hidden_nurse_d4_meal_2_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *라벨 한 장이 상자 모서리에 비뚤게 붙는다.* |
| 566 | `hidden_nurse_d4_meal_3` | 보건선생님 | nurse_room | nurse_normal |  |  | 고맙긴 한데, 선생님 기분까지 네 몫으로 만들진 마. |
| 567 | `hidden_nurse_d4_meal_3_b` | {name} | nurse_room | nurse_normal |  |  | *마지막 라벨을 상자 한가운데에 붙인다.* |
| 568 | `hidden_nurse_d4_meal_3_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 자, 여기까지. 봉사 시간 확인하고 각자 행사장으로 돌 |
| 569 | `hidden_nurse_d4_meal_3_d` | {name} | nurse_room | nurse_normal |  |  | *문을 나서려는데 보건선생님이 확인표를 들고 부른다.* |
| 570 | `hidden_nurse_d4_meal_3_e` | 보건선생님 | nurse_room | nurse_normal |  |  | {name}, 확인표 놓고 간다. |
| 571 | `hidden_nurse_d4_meal_4` | 보건선생님 | nurse_room | nurse_normal |  |  | {name}. 오늘 도와줘서 고마워. 월요일에 봉사 시 |
| 572 | `hidden_nurse_d4_meal_4_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *완성된 응급키트 상자를 행사 담당 교사에게 건넨다.* |
| 573 | `hidden_nurse_d4_freetalk` | 보건선생님 | nurse_room | nurse_normal |  |  | *마지막 응급키트의 지퍼를 닫고 맞은편 의자를 가리킨다 |
| 574 | `morning4_end` | {name} | room_my | 없음 |  |  | *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 |
| 575 | `date_yuna_1` | {name} | cafe | yuna_normal |  |  | *카페 앞. 유나가 벽에 기대어 서 있다. 검은 원피스 |
| 576 | `date_yuna_tier_check` |  | cafe | 없음 |  |  |  |
| 577 | `date_yuna_tentative_1` | 유나 | cafe | yuna_normal |  |  | 오늘은 책 얘기만 하자. |
| 578 | `date_yuna_tentative_2` | {name} | cafe | yuna_normal |  |  | *대화는 이어지지만 유나는 가방 속 오래된 책을 꺼내지 |
| 579 | `date_yuna_tentative_3` | 유나 | street | yuna_normal |  |  | 다음에는 내가 먼저 연락할게. 오늘은 여기까지. |
| 580 | `pre_confess_minsu` | 민수 | street | minsu_smirk | 0.35 |  | 야, 데이트 중이지? 한마디만 할게 |
| 581 | `pre_confess_minsu_2` | 민수 | street | minsu_smirk | 0.35 |  | 말 돌리지 말고 제대로 해 |
| 582 | `pre_confess_callback` | {name} | street | minsu_smirk |  |  | *주머니 속 핸드폰 모서리가 손바닥에 눌린다. 알림은  |
| 583 | `confess_seo_1` | {name} | top_school | 없음 |  | 🌅 | *데이트가 끝났다. 교문 대신 옥상으로 올라왔다.* |
| 584 | `confess_yuna_1` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *카페 간판에 불이 켜질 무렵, 유나가 별관 쪽으로 턱 |
| 585 | `confess_yuna_2` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | ...마지막으로 갈 데가 있어. |
| 586 | `confess_yuna_3b` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *별관 문이 닫히자 복도 소음이 끊긴다. 소파 위 책은 |
| 587 | `confess_yuna_4` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | *소파에 앉아 {name}을 본다. 손에는 책갈피가 끼 |
| 588 | `confess_yuna_5` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *책갈피 끝이 접혀 있다.* |
| 589 | `confess_yuna_choice` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *유나가 책갈피의 접힌 끝을 엄지로 펴 놓고 맞은편 자 |
| 590 | `confess_yuna_yes_1` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *목소리가 작아진다.* |
| 591 | `confess_yuna_yes_2` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *유나의 엄지가 책갈피 모서리에서 떨어진다.* |
| 592 | `confess_yuna_yes_3` | {name} | yuna_hideout | yuna_normal |  | 🌅 | 유나. 너랑 있으면 말을 덜 고르게 돼. |
| 593 | `confess_yuna_yes_3_b` | {name} | yuna_hideout | yuna_normal |  | 🌅 | 그게 편했어. |
| 594 | `confess_yuna_yes_4` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *유나가 책갈피를 내려놓는다.* |
| 595 | `confess_yuna_yes_5` | {name} | yuna_hideout | yuna_normal |  | 🌅 | 오늘 이후에도 계속 보고 싶어. |
| 596 | `confess_yuna_yes_6` | {name} | yuna_hideout | yuna_shy |  | 🌅 | 대답은 지금 안 해도 돼. |
| 597 | `confess_yuna_yes_6_b` | {name} | yuna_hideout | yuna_shy |  | 🌅 | *소파 천이 작게 울린다. 유나가 몸을 바로 세운다.* |
| 598 | `confess_yuna_yes_7` | {name} | yuna_hideout | yuna_shy |  | 🌅 | *책갈피는 소파 위에 놓인 채다.* |
| 599 | `confess_yuna_yes_8` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | *시선은 책장 쪽에 둔 채 옷소매를 꽉 쥔다.* |
| 600 | `confess_yuna_yes_8_b` | {name} | yuna_hideout | yuna_shy |  | 🌅 | *구겨진 소매 끝이 손바닥 안으로 사라진다.* |
| 601 | `confess_yuna_yes_8_c` | 유나 | yuna_hideout | yuna_sad |  | 🌅 | ...먼저 말해. 없어질 거면. |
| 602 | `confess_yuna_yes_9` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | 아무 말 없이 사라지지는 마. |
| 603 | `confess_yuna_yes_9_b` | {name} | yuna_hideout | yuna_shy |  | 🌅 | *소매 끝이 손바닥 안에서 더 구겨진다.* |
| 604 | `day4_night_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 옷소매에 공원 흙과 학교 먼지가 조금 |
| 605 | `day4_night_branch` | 시스템 | room_my | 없음 |  |  |  |
| 606 | `day4_adult_nurse_student_rank` |  | room_my | 없음 |  |  |  |
| 607 | `day4_nurse_dain_counteroffer` | 다인 | gym | dain_sad |  |  | *보건실 문을 닫고 나오자 체육관 비상문 앞에 다인이  |
| 608 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 609 | `night_nurse_msg_1` | 보건선생님 | room_my | nurse_normal | 0.35 |  | *학교 건강관리 앱 알림* 오늘 상담 후 상태를 확인해 |
| 610 | `night_nurse_msg_2` | {name} | room_my | nurse_normal | 0.35 |  | *자동 알림 아래에 '안정됨'과 '추가 상담 필요' 두 |
| 611 | `night_nurse_msg_3` | 보건선생님 | room_my | nurse_normal | 0.35 |  | *보건실 안내* 추가 상담이 필요하면 내일 행사 시작  |
| 612 | `night_nurse_msg_4` | 보건선생님 | room_my | nurse_normal | 0.35 |  | *보건실 안내* 늦은 시간에는 답하지 않아도 됩니다.  |
| 613 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *알람을 일요일 오전으로 맞추고 방 불을 끈다. 전하지 |
| 614 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안 시계가 자정 쪽으로 넘어간다. 휴대폰 화면도  |
| | **Day 5** | | | | | | |
| 615 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소 |
| 616 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 617 | `morning5_temptation_discovery_branch` |  | room_school | 없음 |  |  |  |
| 618 | `morning5_committed_start` |  | room_school | 없음 |  |  |  |
| 619 | `morning5_committed_yuna` | {name} | room_school | yuna_normal |  |  | *새 메모는 없다. 유나는 책갈피를 노트 사이에 끼워  |
| 620 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *행사 준비 시간. 복도를 걷는데 — 빈 교실 앞을 지 |
| 621 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *행사 중간 쉬는 시간. 보건실 앞을 지나간다.* |
| 622 | `hidden_nurse_d5_1` | 보건선생님 | school_hallway | nurse_normal |  |  | 어, {name}. 행사 마지막 날이네. 상담 기록도  |
| 623 | `hidden_nurse_d5_low` | 보건선생님 | school_hallway | nurse_normal |  |  | *보건선생님이 상담실 카드를 내밀려다 다시 서랍에 넣는 |
| 624 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 625 | `morning5_sojeong_1` | {name} | room_school | 없음 |  |  | *휴대폰 메모 앱을 연다. '소정에게'로 시작하는 빈  |
| 626 | `morning5_sojeong_2` | {name} | room_school | 없음 |  |  | *마흔 번째 초안은 쓰지 않는다. 가장 짧은 문장을 골 |
| 627 | `morning5_sojeong_3` | {name} | room_school | 없음 |  |  | 그때 네 책상과 낙서를 보고도 선생님께 말하지 않았어. |
| 628 | `morning5_sojeong_4` | {name} | room_school | 없음 |  |  | *전송 표시가 뜬다. 읽음 표시는 기다리지 않고 대화방 |
| 629 | `morning5_sojeong_5` | {name} | room_school | 없음 |  |  | *지금 담임에게도 메시지를 보낸다. '전학 오기 전 학 |
| 630 | `morning5_route_branch` |  | room_school | 없음 |  |  |  |
| 631 | `morning5_committed_end` | {name} | room_school | 없음 |  |  | *책상 위 쪽지들을 정리하고 이미 고른 방향의 행사 순 |
| 632 | `tour_yuna_1_check` | {name} | yuna_hideout | 없음 |  |  | *도서관 별관으로 간다.* |
| 633 | `tour_yuna_low` | 유나 | yuna_hideout | yuna_normal |  |  | *별관 문은 잠겨 있다. 잠시 뒤 유나에게 짧은 메시지 |
| 634 | `after5_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 635 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *행사가 끝나갈 무렵, 복도에서 선택하지 않은 두 사람 |
| 636 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 637 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다.* |
| 638 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다. 서연은 잠시 멈췄다가 고개 |
| 639 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 640 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 641 | `after5_farewell_dain_1` | {name} | gym | dain_normal |  | 🌅 | *체육관 앞에서 다인이 걸어온다. 평소보다 보폭이 작다 |
| 642 | `after5_farewell_dain_low` | 다인 | gym | dain_normal |  | 🌅 | *체육관 앞에서 다인이 걸어오다 두 걸음 떨어진 곳에  |
| 643 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *석양이 교정 창문마다 걸린다. 방송실에서 행사 종료  |
| 644 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 645 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 646 | `ending_affinity_check` | 시스템 | park | 없음 |  |  |  |
| 647 | `ending_aff_check_yuna` | 시스템 | yuna_hideout | 없음 |  |  |  |
| 648 | `bitter_yuna_1` | {name} | park | 없음 |  |  | *고백은 했다. 유나는 끄덕였지만 손가락은 책갈피 끝을 |
| 649 | `bitter_yuna_2` |  | 없음 | 없음 |  |  |  |
| 650 | `bitter_yuna_2_book` | 유나 | bookstore | yuna_sad |  |  | 가끔 생각나. 서점 지날 때. 그때 좀 더 말할 걸. |
| 651 | `bitter_yuna_3` | {name} | ending_bittersweet | yuna_normal | 0.35 |  | *교문을 나온다. 비가 내린다. 우편함에 유나의 마지막 |
| 652 | `bitter_epilogue_1` | {name} | ending_bittersweet | 없음 |  |  | *졸업 후. 연락이 뜸해졌다. 한 달에 한 번이 두 달 |
| 653 | `bitter_epilogue_2` | {name} | ending_bittersweet | 없음 |  |  | *5일의 기록은 남았다. 마지막 사진에는 둘 사이에 한 |
| 654 | `bitter_epilogue_3` | 시스템 | ending_bittersweet | 없음 |  |  | ─── BITTERSWEET END ─── |
| 655 | `day5_main_ending_freetalk_router` | {name} | park | 없음 |  |  |  |
| 656 | `day5_yuna_ending_freetalk_intro` | {name} | yuna_hideout | yuna_smile |  |  | *에필로그가 끝난 뒤, 두 사람은 다시 학교 별관의 조 |
| 657 | `day5_yuna_ending_freetalk_router` | {name} | yuna_hideout | 없음 |  |  |  |
| 658 | `day5_yuna_ending_freetalk_bittersweet` | 유나 | library_old | yuna_sad |  | 🌙 | *비에 번진 마지막 쪽지를 책 사이에 넣는다.* 끝난  |
| 659 | `day5_credits` |  | school | 없음 |  |  |  |
| 660 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### friend_12

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_dain_choice`: (선택)
- `after_end`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_yuna_choice`: (선택)
- `after2_choice`: (선택)
- `night2_choice`: (선택)
- `morning3_date_dain_choice`: (선택)
- `morning3_date_yuna_choice`: (선택)
- `lunch3_choice`: (선택)
- `confess_dain_choice`: (선택)
- `after5_last_chance_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=-3 유나=7 다인=12 담임=0 보건=0

<details>
<summary>씬 타임라인 (490씬)</summary>

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
| 59 | `lunch_dain_1` | 다인 | store | dain_laugh |  |  | 도착. 여기가 매점이야. 일단 고르고 봐. |
| 60 | `lunch_dain_1_aff_default` | 다인 | store | dain_normal |  |  | *매점 안은 점심시간이라 북적거린다. 빵 냄새랑 우유  |
| 61 | `lunch_dain_2` | 다인 | store | dain_normal |  |  | 소보로빵에 딸기우유. 이 조합은 실패한 적 없어. |
| 62 | `lunch_dain_3` | {name} | store | dain_normal |  |  | 근데 진 사람이 사준다며. 뭘 하는 거야? |
| 63 | `lunch_dain_4` | 다인 | store | dain_normal |  |  | 가위바위보. 간단하지. |
| 64 | `lunch_dain_5` | {name} | store | dain_normal |  |  | 당연한 건 아닌데. |
| 65 | `lunch_dain_6` | 다인 | store | dain_normal |  |  | 안 하면 네가 사는 걸로 친다? |
| 66 | `lunch_dain_7` | {name} | store | dain_normal |  |  | 하자. |
| 67 | `lunch_dain_8` | {name} | store | dain_normal |  |  | *가위바위보.* |
| 68 | `lunch_dain_9` | 다인 | store | dain_normal |  |  | 가위— 바위— 보! |
| 69 | `lunch_dain_10` | {name} | store | dain_normal |  |  | *가위. 바위. 보. — 다인이 졌다.* |
| 70 | `lunch_dain_11` | 다인 | store | dain_normal |  |  | 어? 나 졌네. 한 판 더. |
| 71 | `lunch_dain_12` | {name} | store | dain_pout |  |  | 약속은 약속이지. |
| 72 | `lunch_dain_12_b` | 다인 | store | dain_pout |  |  | 아, 알았어. 내가 산다. 이모, 소보로 두 개요. |
| 73 | `lunch_dain_14` | 다인 | store | dain_pout |  |  | *동전을 카운터에 탁탁 놓고 소보로 두 개를 받아 든다 |
| 74 | `lunch_dain_15` | {name} | store | dain_normal |  |  | *매점 한쪽 벤치에 앉아 빵을 먹는다.* |
| 75 | `lunch_dain_16` | 다인 | store | dain_normal |  |  | *빵 봉지를 뜯는다.* 야, 너 운동 진짜 안 해? |
| 76 | `lunch_dain_17` | {name} | store | dain_normal |  |  | 왜, 내 체력이 걱정돼? |
| 77 | `lunch_dain_18` | 다인 | store | dain_laugh |  |  | 아니. 나랑 다니려면 체력부터 봐야지. |
| 78 | `lunch_dain_19` | {name} | store | dain_laugh |  |  | 자기 PR인 줄 알았어. |
| 79 | `lunch_dain_20` | 다인 | store | dain_laugh |  |  | PR? 그게 뭔데. |
| 80 | `lunch_dain_21` | {name} | store | dain_normal |  |  | Personal Record. 운동할 때 쓰는 말인데. |
| 81 | `lunch_dain_22` | 다인 | store | dain_normal |  |  | *딸기우유 팩 옆면이 손가락에 눌려 우그러진다.* |
| 82 | `lunch_dain_23` | 다인 | store | dain_laugh |  |  | 오, 그거 알아? 너 운동 쪽 좀 아네? |
| 83 | `lunch_dain_choice` | 다인 | store | dain_laugh |  |  | *빨대를 문 채 상체를 가까이 기울인다.* |
| 84 | `lunch_dain_c2_1` | 다인 | store | dain_laugh |  |  | 그래도 관심은 있는 거잖아. 오늘 방과후 체육관 와.  |
| 85 | `lunch_dain_after` | {name} | store | dain_laugh |  |  | *빵을 다 먹고 일어서는데.* |
| 86 | `lunch_dain_after_2` | 다인 | store | dain_normal |  |  | 야, {name}. |
| 87 | `lunch_dain_after_3` | {name} | store | dain_normal |  |  | 응? |
| 88 | `lunch_dain_after_4` | 다인 | store | dain_normal |  |  | 전학 와서 첫 식사 파트너가 나다? 나름 역사적인데. |
| 89 | `lunch_dain_after_5` | 다인 | store | dain_normal |  |  | *주먹으로 {name}의 어깨를 툭 치고 그대로 한 번 |
| 90 | `lunch_dain_freetalk` | 다인 | store | dain_normal |  |  | *빵 봉지를 접어 주머니에 넣고 벤치 등받이에 기댄다. |
| 91 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *종이 울린다. 점심시간이 끝났다.* |
| 92 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에 |
| 93 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 94 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창 |
| 95 | `after_kakao_5` | {name} | school_hallway | 없음 |  | 🌅 | *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른 |
| 96 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록  |
| 97 | `after1_jealousy_dain_1` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 점심때 매점에서 다인이랑 같이 있는 거 봤는데. 적응  |
| 98 | `after1_jealousy_dain_2` | {name} | school_hallway | seyoun_laugh |  | 🌅 | *서연은 클립보드를 가슴 앞에 세운 채 답을 기다린다. |
| 99 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *복도를 계속 걷는다.* |
| 100 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도를 걷는데 뒤에서 쿵쿵 발소리.* |
| 101 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 조심! |
| 102 | `after_miss_dain_3` | {name} | school_hallway | dain_normal |  | 🌅 | *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 |
| 103 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 피했다? 반사신경 괜찮은데. |
| 104 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 넌 복도에서 왜 전력질주야? |
| 105 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 늦었거든! 체육관 가야 해. 내일 보자, 전학생! |
| 106 | `after_miss_dain_6_b` | {name} | school_hallway | dain_laugh |  | 🌅 | *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을  |
| 107 | `after_miss_dain_7` | {name} | school_hallway | dain_laugh |  | 🌅 | *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아 |
| 108 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으 |
| 109 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 이거 떨어뜨렸어. |
| 110 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피 |
| 111 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌  |
| 112 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 고마워. |
| 113 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피를 책등 사이에 끼우고 돌아선다.* |
| 114 | `after_miss_yuna_4` | {name} | library_old | yuna_normal |  | 🌅 | *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 |
| 115 | `after_miss_seoyeon_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *하교하려는데 복도에서 서연과 마주친다.* |
| 116 | `after_miss_seoyeon_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 아까 어디 갔어? |
| 117 | `after_miss_seoyeon_3` | {name} | school_hallway | seyoun_normal |  | 🌅 | 어디라니? |
| 118 | `after_miss_seoyeon_4` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 옥상 열어놨는데 안 왔네. — 전학생, 배짱이 있어. |
| 119 | `after_miss_seoyeon_5` | {name} | school_hallway | seyoun_normal |  | 🌅 | 기다린 거야? |
| 120 | `after_miss_seoyeon_6` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 바람 쐬러 올라간 건데 문이 열려 있길래. |
| 121 | `after_miss_seoyeon_7` | {name} | school_hallway | seyoun_normal |  | 🌅 | *서연의 클립보드 맨 위에 내 이름이 남아 있다. 체크 |
| 122 | `after_miss_seoyeon_8` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 내일은 빠지지 마. |
| 123 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든 |
| 124 | `night_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄 |
| 125 | `night_start_3` | {name} | room_my | 없음 |  |  | *핸드폰이 울린다. 학교 메신저.* |
| 126 | `night_msg_dain_1` | 다인 | room_my | dain_normal | 0.35 |  | *가위바위보 리벤지 내일이다* |
| 127 | `night_msg_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | *내일은 리벤지다 ㅋㅋ* |
| 128 | `night_msg_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | *오늘 빵값 아직도 아깝다. 진짜.* |
| 129 | `night_msg_dain_4` | {name} | room_my | dain_normal | 0.35 |  | *세 줄이 거의 동시에 도착했다. 답장창에는 벌써 'ㅋ |
| 130 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 다른 알림이 보인다.* |
| 131 | `night_late_transition` | {name} | room_my | 없음 |  |  | *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시 |
| 132 | `night_late_branch` | {name} | room_my | 없음 |  |  | *화면이 밝아진다.* |
| 133 | `night_dain_late_1` | 다인 | room_my | dain_normal | 0.35 |  | *야 아직 안 잤지?* |
| 134 | `night_dain_late_2` | 다인 | room_my | dain_normal | 0.35 |  | *내일 아침 운동 같이 할 사람 구한다* |
| 135 | `night_dain_late_3` | 다인 | room_my | dain_normal | 0.35 |  | *거절은 안 받음 ㅋㅋ* |
| 136 | `night_dain_late_4` | {name} | room_my | dain_normal | 0.35 |  | *답장창에는 이미 '콜'이 찍혀 있다.* |
| 137 | `night_dain_late_4_b` | {name} | room_my | dain_normal | 0.35 |  | *다인의 메시지 아래에 이모티콘이 줄줄이 붙어 있다.  |
| 138 | `night_end_1` | {name} | room_my | 없음 |  |  | *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교 |
| 139 | `night_end_3` | {name} | room_my | 없음 |  |  | *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을  |
| | **Day 2** | | | | | | |
| 140 | `morning2_start` | {name} | room_school | 없음 |  |  | *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.* |
| 141 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 142 | `morning2_greet_dain_1` | 다인 | room_school | dain_laugh |  |  | 야! 어제 재밌었다, 오늘도 같이 뭐 하자! |
| 143 | `morning2_greet_dain_2` | 다인 | room_school | dain_laugh |  |  | *뒤에서 어깨를 탁 친다.* |
| 144 | `morning2_greet_dain_others` | 서연 | room_school | seyoun_normal |  |  | *클립보드를 넘기며 지나간다.* |
| 145 | `morning2_greet_dain_others_seo` | 서연 | room_school | seyoun_normal |  |  | 에너지 좋다. |
| 146 | `morning2_greet_dain_others_yuna` | {name} | room_school | yuna_bored |  |  | *유나의 펜촉이 쪽지 한가운데 잉크점을 남긴다.* |
| 147 | `morning2_greet_dain_others_2` | {name} | room_school | dain_laugh |  |  | *교실 문이 닫힌 뒤 클립보드 두드리는 소리가 복도에서 |
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
| 163 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *쉬는 시간. 복도로 나왔다.* |
| 164 | `morning2_break_1` | {name} | school_hallway | 없음 |  |  | *서연의 클립보드 끝이 책상에 톡 닿는다. 답할 틈도  |
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
| 180 | `lunch2_yuna_1` | {name} | yuna_hideout | yuna_normal |  |  | *본관보다 오래된 도서관 별관에는 학생이 거의 없다.  |
| 181 | `lunch2_yuna_intro_check` |  | yuna_hideout | yuna_normal |  |  |  |
| 182 | `lunch2_yuna_3` | 유나 | yuna_hideout | yuna_normal |  |  | 왔네. |
| 183 | `lunch2_yuna_4` | {name} | yuna_hideout | yuna_normal |  |  | 쪽지 받았거든. |
| 184 | `lunch2_yuna_5` | 유나 | yuna_hideout | yuna_normal |  |  | 안 올 수도 있었는데. |
| 185 | `lunch2_yuna_6` | {name} | yuna_hideout | yuna_normal |  |  | 왜? |
| 186 | `lunch2_yuna_7` | 유나 | yuna_hideout | yuna_normal |  |  | 시끄러운 애랑 같이 있길래. 그쪽이 더 재밌잖아. |
| 187 | `lunch2_yuna_8` | {name} | yuna_hideout | yuna_normal |  |  | 피난처가 필요할 때도 있어. |
| 188 | `lunch2_yuna_9` | 유나 | yuna_hideout | yuna_smile |  |  | *책장을 한 장 넘기고 맞은편 소파의 구겨진 쿠션을 손 |
| 189 | `lunch2_yuna_10` | 유나 | yuna_hideout | yuna_normal |  |  | 그래. |
| 190 | `lunch2_yuna_11` | 유나 | yuna_hideout | yuna_normal |  |  | *유나가 별관 안쪽으로 앞장선다. 발소리가 낮게 울리는 |
| 191 | `lunch2_yuna_13` | {name} | yuna_hideout | yuna_normal |  |  | 여기 뭐야? 비밀 독서실? |
| 192 | `lunch2_yuna_14` | 유나 | yuna_hideout | yuna_normal |  |  | 여기 아는 사람 거의 없어. |
| 193 | `lunch2_yuna_15` | 유나 | yuna_hideout | yuna_normal |  |  | *소파에 앉아 가방을 바닥에 내려놓고 한 칸을 비운다. |
| 194 | `lunch2_yuna_16` | 유나 | yuna_hideout | yuna_normal |  |  | 나랑 한 명 더 있었는데. |
| 195 | `lunch2_yuna_17` | {name} | yuna_hideout | yuna_normal |  |  | 있었는데? |
| 196 | `lunch2_yuna_17_b` | 유나 | yuna_hideout | yuna_normal |  |  | *책갈피 끝이 페이지 사이로 천천히 사라진다. 유나는  |
| 197 | `lunch2_yuna_choice` | {name} | yuna_hideout | yuna_normal |  |  | *'있었는데' 뒤에 말이 없다. 유나는 책갈피 끝을 책 |
| 198 | `lunch2_yuna_c2_1` | {name} | yuna_hideout | yuna_normal |  |  | *옆에 앉자 유나는 자기 책 더미에서 한 권을 꺼내 내 |
| 199 | `lunch2_yuna_c2_3` | 유나 | yuna_hideout | yuna_normal |  |  | 읽어. |
| 200 | `lunch2_yuna_c2_4` | {name} | yuna_hideout | yuna_normal |  |  | *책을 펼친다. 두 사람의 페이지가 번갈아 넘어가고 창 |
| 201 | `lunch2_yuna_c2_6` | 유나 | yuna_hideout | yuna_normal |  |  | 여기가 좋은 이유. |
| 202 | `lunch2_yuna_c2_7` | {name} | yuna_hideout | yuna_normal |  |  | 응? |
| 203 | `lunch2_yuna_c2_8` | 유나 | yuna_hideout | yuna_normal |  |  | 조용해서. — 근데 혼자가 아니어서. |
| 204 | `lunch2_yuna_c2_9` | 유나 | yuna_hideout | yuna_normal |  |  | *책장 쪽으로 돌아서지만 책은 한동안 같은 페이지에 열 |
| 205 | `lunch2_yuna_end` | {name} | yuna_hideout | yuna_normal |  |  | *문을 닫기 전 돌아보자 유나는 '있었는데'에서 멈춘  |
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
| 232 | `after2_dain_end` | {name} | store | dain_laugh |  | 🌅 | *다인이 떡볶이 컵을 내 쪽으로 밀어 두고 자기 몫 젓 |
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
| 243 | `after2_dain_rival_seo_check` |  | store | 없음 |  | 🌅 |  |
| 244 | `after2_dain_rival_seo_low` | {name} | store | seyoun_normal |  | 🌅 | *서연이 가게 앞을 지나며 두 사람에게 고개를 숙인다. |
| 245 | `after2_dain_rival_yuna_check` |  | store | 없음 |  | 🌅 |  |
| 246 | `after2_dain_rival_yuna_mid` | {name} | store | yuna_normal |  | 🌅 | *가게 앞을 지나던 유나가 이어폰 한쪽을 빼려다 테이블 |
| 247 | `after2_dain_return` | {name} | school | dain_shy |  | 🌅 | *학교로 돌아오는 길. 교문 앞에 다다랐다.* |
| 248 | `after2_group_dain_companion` | 다인과 동행 | gym | 없음 |  | 🌅 | *체육관과 별관에서 들은 설명이 서로 어긋난다. 다인이 |
| 249 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.* |
| 250 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 251 | `night2_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저  |
| 252 | `night2_msg_1` | {name} | room_my | 없음 |  |  | *세 명에게서 메시지가 왔다.* |
| 253 | `night2_msg_dain_specific` | 다인 | room_my | dain_normal | 0.35 |  | 야, 오늘 떡볶이 맛있었다. |
| 254 | `night2_msg_dain_specific_2` | 다인 | room_my | dain_normal | 0.35 |  | 내일도 내기하자. 종목 바꿔서. |
| 255 | `night2_msg_seo_general` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 점심에 옥상 열어놓을게. 와 |
| 256 | `night2_msg_yuna_general` | 유나 | room_my | yuna_normal | 0.35 |  | 내일 별관 올 거야? |
| 257 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에  |
| 258 | `night2_choice` | {name} | room_my | 없음 |  |  | *누구에게 먼저 답장할까?* |
| 259 | `night2_reply_yuna_1` | {name} | room_my | yuna_normal | 0.35 |  | 아직 반 정도. 재밌어 |
| 260 | `night2_reply_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | 다행이네 |
| 261 | `night2_reply_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *답장창이 한동안 비어 있다. 그러다 새 말풍선이 올라 |
| 262 | `night2_reply_yuna_4` | 유나 | room_my | yuna_normal | 0.35 |  | 아까 재생목록. 세 번째 곡도 들어봐 |
| 263 | `night2_reply_yuna_5` | {name} | room_my | yuna_normal | 0.35 |  | *유나가 공유한 재생목록을 다시 연다. 세 번째 곡은  |
| 264 | `night2_reply_yuna_6` | 유나 | room_my | yuna_normal | 0.35 |  | 끝까지 들어봐 |
| 265 | `night2_reply_yuna_6_b` | {name} | room_my | yuna_normal | 0.35 |  | *이어폰을 끼고 재생 버튼을 누른다. 피아노 뒤로 낮은 |
| 266 | `night2_reply_yuna_6_c` | {name} | room_my | yuna_normal | 0.35 |  | *곡이 끝나고 재생 화면의 진행 바가 마지막 칸에 멈춘 |
| 267 | `night2_reply_yuna_7` | {name} | room_my | yuna_normal | 0.35 |  | *재생목록 제목 아래에 유나가 남긴 짧은 메모가 보인다 |
| 268 | `night2_reply_yuna_react_default` | 유나 | room_my | yuna_normal | 0.35 |  | 응. 잘 자. |
| 269 | `night2_yuna_freetalk` | 유나 | room_my | yuna_normal | 0.35 | 🌙 | 잠깐. 아직 깨어 있으면... 조금만 더 얘기할래? |
| 270 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 또 다른 알림이 보인다.* |
| 271 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 보내고 핸드폰을 내려놓았다.* |
| 272 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이,  |
| 273 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 |
| 274 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *메모장에 줄줄이 남은 보내지 않은 문장. '선생님,  |
| 275 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 메모가 마지막이다. 그 아래 39번째에는 제 |
| 276 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 |
| 277 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로 |
| 278 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보 |
| 279 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화 |
| 280 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 |
| 281 | `night2_end_2_b` | {name} | room_my | 없음 |  |  | *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있 |
| 282 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.* |
| 283 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을  |
| 284 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 |
| | **Day 3** | | | | | | |
| 285 | `morning3_start` | {name} | school | 없음 |  |  | *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯 |
| 286 | `morning3_start_2` | {name} | school | 없음 |  |  | *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군 |
| 287 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 288 | `morning3_dain_gate_1` | {name} | school | dain_normal |  |  | *교문 근처에서 다인이 전력으로 달려온다.* |
| 289 | `morning3_dain_gate_cold_1` | 다인 | school | dain_normal |  |  | *다른 친구들과 뛰어간다.* |
| 290 | `morning3_dain_gate_cold_2` | 다인 | school | dain_normal |  |  | 어, 안녕! |
| 291 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실에 들어서자 서연의 펜이 멈추고 다인의 의자가 뒤 |
| 292 | `morning3_react_dain_1` | 서연 | room_school | seyoun_normal |  |  | 아침부터 체력 소모가 심하네. 점심에 도시락 줄까? |
| 293 | `morning3_react_dain_2` | 유나 | room_school | yuna_normal |  |  | *고개를 들지 않은 채 종이 귀퉁이에 짧은 선을 긋는다 |
| 294 | `morning3_date_intro` | {name} | room_school | 없음 |  |  | *1교시가 끝났다. 쉬는 시간마다 누군가 말을 건다.* |
| 295 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *쉬는 시간, 복도로 나왔다. 서연이 먼저 걸음을 맞춘 |
| 296 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | 이번 주말에 시간 있어? 공원에 같이 가자. |
| 297 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끈다. 눈이 마주치 |
| 298 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼  |
| 299 | `morning3_date_dain_2` | 다인 | room_school | dain_normal |  |  | *서연이 아직 교실 문 앞에 서 있다. 다인은 이쪽을  |
| 300 | `morning3_date_dain_choice` | 다인 | room_school | dain_normal |  |  | *서연의 발소리가 멎는다. 다인은 대답을 기다린다.* |
| 301 | `morning3_date_dain_accept` | {name} | room_school | dain_laugh |  |  | *다인과 주말 약속을 잡았다. 다인이 웃자 복도에서 서 |
| 302 | `morning3_date_dain_decline_narr` | 다인 | room_school | dain_laugh |  |  | *다인은 웃으며 자기 자리로 돌아간다. 종이 치기 직전 |
| 303 | `morning3_date_dain_decline_inner_2` | {name} | room_school | dain_laugh |  |  | *다인이 자리로 돌아간 뒤, 종이 치기 직전의 교실만  |
| 304 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다 |
| 305 | `morning3_date_yuna_1_b` | 서연 | room_school | seyoun_normal |  |  | 유나. 쪽지로 물으면 다른 사람은 못 듣잖아. |
| 306 | `morning3_date_yuna_2` | {name} | room_school | yuna_normal |  |  | *'주말. 헌책방. 먼저 잡힌 약속이 있어도, 네가 오 |
| 307 | `morning3_date_yuna_choice` | {name} | room_school | yuna_normal |  |  | *쪽지를 읽는 동안 유나는 서연과 다인을 차례로 본다. |
| 308 | `morning3_date_yuna_accept` | {name} | room_school | yuna_shy |  |  | *쪽지 뒷면에 '갈게'라고 적는다. 유나가 종이를 접는 |
| 309 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 310 | `morning3_multi_from_dain` |  | room_school | 없음 |  |  |  |
| 311 | `morning3_end` | {name} | room_school | 없음 |  |  | *수업 종료 종이 울리고 곧 점심시간이 된다.* |
| 312 | `morning3_end_b` | 유나 | room_school | yuna_normal |  |  | 맛있네. |
| 313 | `lunch3_start` | {name} | room_school | yuna_normal |  |  | *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. |
| 314 | `lunch3_start_2_b` | 다인 | room_school | dain_normal |  |  | *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가 |
| 315 | `lunch3_meal_1` | 다인 | room_school | dain_laugh |  |  | 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고  |
| 316 | `lunch3_meal_2` | {name} | room_school | dain_laugh |  |  | 그건 내 거... |
| 317 | `lunch3_meal_3` | 서연 | room_school | seyoun_normal |  |  | 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점 |
| 318 | `lunch3_meal_4` | {name} | room_school | seyoun_normal |  |  | 점수 매기지 마. |
| 319 | `lunch3_meal_5` | 서연 | room_school | seyoun_normal |  |  | 10점 만점이야. 나쁜 거 아닌데? |
| 320 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다 |
| 321 | `lunch3_meal_7` | {name} | room_school | seyoun_normal |  |  | 유나, 그건 내가 제일 좋아하는 건데. |
| 322 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임 |
| 323 | `lunch3_meal_8` | {name} | room_school | yuna_bored |  |  | *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다. |
| 324 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. |
| 325 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓 |
| 326 | `lunch3_meal_10_d` | 다인 | room_school | dain_laugh |  |  | *"다 같이?" 다인은 웃지만 의자를 당기지 않는다.* |
| 327 | `lunch3_meal_11` | {name} | room_school | yuna_bored |  |  | *누구에게 줄까?* |
| 328 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *마지막 반찬을 누구에게 줄지 고민한다.* |
| 329 | `lunch3_share_1` | {name} | room_school | yuna_bored |  |  | *다 같이 나눠 먹자고 하자 셋이 웃는다. 웃음이 끊긴 |
| 330 | `lunch3_share_solo` | {name} | room_school | yuna_normal |  |  | *셋이 계란말이를 조금씩 나눠 먹는다. 반으로 갈린 마 |
| 331 | `lunch3_end` | {name} | room_school | 없음 |  |  | *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다 |
| 332 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육 |
| 333 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다 |
| 334 | `after3_auto_dain` | {name} | school_hallway | 없음 |  | 🌅 | *다인과 약속이 있다. 체육관으로 간다.* |
| 335 | `after3_rivals_for_dain_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 336 | `after3_rival_seo_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 337 | `after3_rival_seo_affinity` |  | school_hallway | 없음 |  | 🌅 |  |
| 338 | `after3_rival_seo_done` |  | school_hallway | 없음 |  | 🌅 |  |
| 339 | `after3_rival_yuna_check` |  | library_old | 없음 |  | 🌅 |  |
| 340 | `after3_rival_yuna_affinity` |  | library_old | 없음 |  | 🌅 |  |
| 341 | `after3_rival_yuna_done` |  | school_hallway | 없음 |  | 🌅 |  |
| 342 | `after3_dain_affinity_check` |  | gym | 없음 |  | 🌅 |  |
| 343 | `after3_dain_partial_1` | {name} | gym | dain_sweat |  | 🌅 | *체육관 안에서 다인이 무릎 보호대를 고쳐 찬다. 일어 |
| 344 | `after3_dain_partial_2` | 다인 | gym | dain_normal |  | 🌅 | 좀 쉬면 돼. 오늘은 먼저 가. 내일 보자. |
| 345 | `after3_dain_end_first` | 다인 | gym | dain_shy |  | 🌅 | *다인이 주먹으로 어깨를 치고는 바로 손을 주머니에 넣 |
| 346 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.* |
| 347 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 348 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 349 | `minsu_d3_check` | {name} | school | 없음 |  | 🌅 |  |
| 350 | `minsu_d3_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문 앞에 민수가 서 있다.* |
| 351 | `minsu_d3_2` | 민수 | school | 없음 |  | 🌅 | 봤다. |
| 352 | `minsu_d3_3` | 민수 | school | 없음 |  | 🌅 | 점심때. 그리고 방금 서연 표정도. |
| 353 | `minsu_d3_4` | 민수 | school | 없음 |  | 🌅 | 어제 내가 뭐랬냐. 나중에 셋 다 울면 네 탓이라고 했 |
| 354 | `minsu_d3_5` | 민수 | school | 없음 |  | 🌅 | 옆에서 보기 좀 힘들다. 걔들 다 좋은 애들이야. 네가 |
| 355 | `minsu_d3_5b` | 민수 | school | 없음 |  | 🌅 | *민수는 빨대 포장지를 끝까지 접어 테이블 위에 내려놓 |
| 356 | `minsu_d3_6` | {name} | school | 없음 |  | 🌅 | 맞아. |
| 357 | `minsu_d3_6b` | 민수 | school | 없음 |  | 🌅 | 전 학교에서 뭔 일 있었는지 안 물어볼게. 근데 하나만 |
| 358 | `minsu_d3_7` | 민수 | school | 없음 |  | 🌅 | 거절도 배려야. 안 되는 관계에 계속 여지 주는 것보다 |
| 359 | `minsu_d3_8` | {name} | school | 없음 |  | 🌅 | *거절도 배려다. 전 학교에서 나는 소정이에게 고백할  |
| 360 | `minsu_d3_9` | 민수 | school | 없음 |  | 🌅 | *민수는 더 말하지 않고 끝까지 접은 빨대 포장지를 내 |
| 361 | `minsu_d3_10` | 민수 | school | 없음 |  | 🌅 | 내일 학교에서 보자. 진지하게 생각해. |
| 362 | `night3_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 가방을 의자에 걸어 둔다.* |
| 363 | `night3_start_2` | {name} | room_my | 없음 |  |  | *책상 위에 엎어 둔 핸드폰 화면을 켠다.* |
| 364 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *읽지 않은 메시지가 떠 있다.* |
| 365 | `night3_dream_1` | {name} | school | 없음 |  |  | *꿈속에서 누군가와 나란히 걷는다. 얼굴은 보이지 않고 |
| 366 | `night3_dream_2_b` | {name} | school | 없음 |  |  | *메모장을 닫았다. 내일 보낼 문장은 아직 없다.* |
| 367 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *커튼 사이로 들어온 아침 햇살에 눈을 뜬다. 핸드폰  |
| 368 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *'삭제하시겠습니까?' 확인 창이 뜬다. 손가락이 버튼 |
| 369 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *1초 동안 화면을 내려다본다. 소정이 책상의 낙서와  |
| 370 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *그래. 삭제 버튼에 올린 손가락으로 화면을 누른다.* |
| 371 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼을 누르지 않고 사진을 새 폴더로 옮긴다.  |
| 372 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *'거절도 네가 해야 할 일이야.' 민수의 말이 떠오른 |
| 373 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *갤러리에서 소정이 사진이 사라지고 빈칸만 남는다.* |
| 374 | `night3_faithful_reflect_4_b` | {name} | room_my | 없음 |  |  | *빈 앨범 썸네일 위를 엄지로 문지른다.* |
| 375 | `night3_faithful_reflect_4_c` | {name} | room_my | 없음 |  |  | *핸드폰을 덮자 검은 화면에 갤러리의 빈칸이 겹쳐 보인 |
| 376 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *알람이 울리기 전에 눈을 떴다.* |
| 377 | `night3_end` | {name} | room_my | 없음 |  |  | *방 불을 끄고 핸드폰을 엎어 둔다.* |
| | **Day 4** | | | | | | |
| 378 | `morning4_start` | {name} | room_my | 없음 |  |  | *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다 |
| 379 | `morning4_nightmare_check` |  | room_my | 없음 |  |  |  |
| 380 | `minsu_cheer_1` | {name} | room_my | 없음 |  |  | *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.* |
| 381 | `minsu_cheer_1_b` | 민수 | room_my | minsu_normal | 0.35 |  | *야 오늘 데이트라며?* |
| 382 | `minsu_cheer_1_c` | {name} | room_my | minsu_normal | 0.35 |  | *어떻게 알았어* |
| 383 | `minsu_cheer_1_d` | 민수 | room_my | minsu_normal | 0.35 |  | *다인이가 단톡방에 올림. 내일 약속 있음, 이라고* |
| 384 | `minsu_cheer_2` | 민수 | room_my | minsu_normal | 0.35 |  | 잘하고 와ㅋㅋ |
| 385 | `minsu_cheer_3` | {name} | room_my | minsu_normal | 0.35 |  | 알아. |
| 386 | `minsu_cheer_4_branch` |  | room_my | 없음 |  |  |  |
| 387 | `minsu_cheer_4_ins_single` | {name} | room_my | minsu_normal | 0.35 |  | *핸드폰 캘린더를 본다. 오늘 약속은 하나뿐이다.* |
| 388 | `morning4_start_2` | {name} | room_my | 없음 |  |  | *심호흡하고 약속 메시지를 다시 확인한다.* |
| 389 | `morning4_dain_msg_1` | 다인 | room_my | dain_sweat | 0.35 |  | 오늘이다. 체육관 앞 저녁 6시. 아, 왜 이렇게 떨리 |
| 390 | `morning4_hidden_check` | {name} | room_my | 없음 |  |  | *주말 아침, 학교 앞 사거리에서 신호를 기다린다.* |
| 391 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 392 | `morning4_end` | {name} | room_my | 없음 |  |  | *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 |
| 393 | `date_dain_1` | {name} | gym | dain_laugh |  |  | *체육관 앞. 다인이 뛰어온다. 캡모자에 운동복.* |
| 394 | `date_dain_tier_check` |  | gym | 없음 |  |  |  |
| 395 | `date_dain_tentative_1` | 다인 | gym | dain_normal |  |  | 오늘은 오래 놀지 말자. 무릎도 좀 쉬어야 하고. |
| 396 | `date_dain_tentative_2` | {name} | gym | dain_normal |  |  | *자판기 앞에서 음료 하나씩 마신다. 다인은 체육관 문 |
| 397 | `date_dain_tentative_3` | 다인 | street | dain_normal |  |  | 학교에서 봐. 다음 약속은 그때 정하자. |
| 398 | `pre_confess_minsu` | 민수 | street | minsu_smirk | 0.35 |  | 야, 데이트 중이지? 한마디만 할게 |
| 399 | `pre_confess_minsu_2` | 민수 | street | minsu_smirk | 0.35 |  | 말 돌리지 말고 제대로 해 |
| 400 | `pre_confess_callback` | {name} | street | minsu_smirk |  |  | *주머니 속 핸드폰 모서리가 손바닥에 눌린다. 알림은  |
| 401 | `confess_seo_1` | {name} | top_school | 없음 |  | 🌅 | *데이트가 끝났다. 교문 대신 옥상으로 올라왔다.* |
| 402 | `confess_dain_1` | {name} | gym | dain_laugh |  | 🌅 | *데이트가 끝나자 다인이 학교 쪽으로 성큼 앞서간다.* |
| 403 | `confess_dain_2` | 다인 | gym | dain_normal |  | 🌅 | 마지막. 한 군데만 더 가자. |
| 404 | `confess_dain_3` | {name} | gym | dain_normal |  | 🌅 | *빈 체육관. 서쪽 창문의 빛이 첫날 내기했던 코트 선 |
| 405 | `confess_dain_4` | 다인 | gym | dain_normal |  | 🌅 | *공 하나를 두 손으로 쥔다. 손가락 마디가 공 표면에 |
| 406 | `confess_dain_5` | {name} | gym | dain_normal |  | 🌅 | *공이 바닥에 한 번 튄다.* |
| 407 | `confess_dain_choice` | 다인 | gym | dain_sweat |  | 🌅 | *공이 바닥에 한 번 튄다. 다인의 손이 반 박자 늦어 |
| 408 | `confess_dain_no_2` | {name} | gym | dain_normal |  | 🌅 | *토스를 올려준다. 말은 나오지 않는다.* |
| 409 | `confess_dain_no_3` | 다인 | gym | dain_sweat |  | 🌅 | *다인이 배구공을 두 번 튀긴다. 세 번째로 튀어 오른 |
| 410 | `confess_dain_no_4` | 다인 | gym | dain_sad |  | 🌅 | 다음에는 말해. |
| 411 | `confess_dain_no_4_b` | {name} | gym | dain_sad |  | 🌅 | *다인의 목소리가 체육관 천장으로 작게 흩어진다. 손목 |
| 412 | `day4_night_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 옷소매에 공원 흙과 학교 먼지가 조금 |
| 413 | `day4_night_branch` | 시스템 | room_my | 없음 |  |  |  |
| 414 | `day4_student_night_branch` |  | room_my | 없음 |  |  |  |
| 415 | `day4_night_regret` | {name} | room_my | 없음 |  |  | *집으로 돌아온 뒤에도 채팅창에는 입력하다 만 문장이  |
| 416 | `day4_night_regret_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 417 | `day4_night_regret_msg_dain` | 다인 | room_my | dain_normal | 0.35 |  | 야, 오늘 재밌었다. 나 혼자 들뜬 거 아니었지? |
| 418 | `day4_night_regret_reply` | {name} | room_my | 없음 |  |  | *답장을 쓰다 지운다. 입력창에는 받침 하나만 남았다가 |
| 419 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 420 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *알람을 일요일 오전으로 맞추고 방 불을 끈다. 전하지 |
| 421 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안 시계가 자정 쪽으로 넘어간다. 휴대폰 화면도  |
| | **Day 5** | | | | | | |
| 422 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소 |
| 423 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 424 | `morning5_start_b` | {name} | room_school | 없음 |  |  | *교실에 들어서자 세 가지가 한꺼번에 눈에 들어온다.  |
| 425 | `morning5_start_2_b` | {name} | room_school | 없음 |  |  | *책상 위에 쪽지가 놓여 있다. 서연의 글씨.* |
| 426 | `morning5_mood_check` | 시스템 | room_school | 없음 |  |  |  |
| 427 | `morning5_mood_low` | {name} | room_school | 없음 |  |  | 마지막 날. 잠금화면에 남은 이름 셋을 차례로 누른다. |
| 428 | `morning5_gate` | {name} | school | 없음 |  |  | *교문 앞에서 소매를 걷어 올린다. 손목에 남던 붉은  |
| 429 | `morning5_seo_note_1` | {name} | room_school | seyoun_normal |  |  | *책상 위에 쪽지가 놓여 있다. 서연의 글씨. — '오 |
| 430 | `morning5_seo_note_1_b` | {name} | school_hallway | 없음 |  |  | *복도 문예부 전시 코너를 지나다 게시판의 빈 압정 네 |
| 431 | `morning5_seo_note_1_c` | {name} | school_hallway | 없음 |  |  | *게시판에 단편소설이 붙어 있다. 제목: '도서관에서  |
| 432 | `morning5_yuna_story_1` | {name} | school_hallway | yuna_normal |  |  | *소설 속 인물은 도서관에서 잠든 누군가의 어깨에 담요 |
| 433 | `morning5_yuna_story_2` | {name} | school_hallway | 없음 |  |  | *마지막 문장. '그 사람이 눈을 떴을 때, 나는 이미 |
| 434 | `morning5_yuna_story_4` | {name} | school_hallway | yuna_normal |  |  | *게시판 아래 구석에는 작은 글씨가 남아 있다. '이건 |
| 435 | `morning5_return_class` | {name} | room_school | dain_normal |  |  | *교실로 돌아오니 다인이 기다리고 있다.* |
| 436 | `morning5_dain_1` | 다인 | room_school | dain_normal |  |  | 야, 오늘 체육 이벤트 파트너로 너 써놨어. |
| 437 | `morning5_dain_1_b` | {name} | room_school | dain_normal |  |  | 허락도 없이? |
| 438 | `morning5_dain_2` | 다인 | room_school | dain_laugh |  |  | 늦으면 화낸다? |
| 439 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *행사 준비 시간. 복도를 걷는데 — 빈 교실 앞을 지 |
| 440 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *행사 중간 쉬는 시간. 보건실 앞을 지나간다.* |
| 441 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 442 | `morning5_sojeong_1` | {name} | room_school | 없음 |  |  | *휴대폰 메모 앱을 연다. '소정에게'로 시작하는 빈  |
| 443 | `morning5_sojeong_2` | {name} | room_school | 없음 |  |  | *마흔 번째 초안은 쓰지 않는다. 가장 짧은 문장을 골 |
| 444 | `morning5_sojeong_3` | {name} | room_school | 없음 |  |  | 그때 네 책상과 낙서를 보고도 선생님께 말하지 않았어. |
| 445 | `morning5_sojeong_4` | {name} | room_school | 없음 |  |  | *전송 표시가 뜬다. 읽음 표시는 기다리지 않고 대화방 |
| 446 | `morning5_sojeong_5` | {name} | room_school | 없음 |  |  | *지금 담임에게도 메시지를 보낸다. '전학 오기 전 학 |
| 447 | `morning5_route_branch` |  | room_school | 없음 |  |  |  |
| 448 | `morning5_end` | {name} | room_school | 없음 |  |  | *세 방향에서 온 쪽지와 알림을 책상 위에 나란히 둔다 |
| 449 | `tour_dain_1_check` | {name} | gym | 없음 |  |  | *체육관으로 간다.* |
| 450 | `tour_dain_low` | 다인 | gym | dain_normal |  |  | *체육관 문 앞에서 다인을 만난다. 다인은 공을 들고  |
| 451 | `after5_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 452 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *행사가 끝나갈 무렵, 복도에서 선택하지 않은 두 사람 |
| 453 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 454 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다.* |
| 455 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다. 서연은 잠시 멈췄다가 고개 |
| 456 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 457 | `after5_farewell_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나가 다가온다. 아무 말 없이 책 한 |
| 458 | `after5_farewell_yuna_low` | 유나 | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나와 눈이 마주친다. 유나는 들고 있 |
| 459 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 460 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *석양이 교정 창문마다 걸린다. 방송실에서 행사 종료  |
| 461 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 462 | `after5_last_chance_1` | {name} | school_back | 없음 |  | 🌅 | *행사장 스피커 전원이 꺼진다. 갈림길 안내판 아래에서 |
| 463 | `after5_last_chance_2` | {name} | school_back | 없음 |  | 🌅 | *주머니 속 휴대폰을 꺼낸다. 검은 화면에 행사 현수막 |
| 464 | `after5_last_chance_route_check` |  | school_back | 없음 |  | 🌅 |  |
| 465 | `after5_last_chance_dain_history_check` |  | school_back | 없음 |  | 🌅 |  |
| 466 | `after5_last_chance_dain_postponed` | 다인 | school_back | dain_normal |  | 🌅 | 어제 못 끝낸 말, 오늘은 끝까지 들어. |
| 467 | `after5_last_chance_dain_aff_check` |  | school_back | 없음 |  | 🌅 |  |
| 468 | `after5_last_chance_dain_low_1` | {name} | school_back | 없음 |  | 🌅 | 다인아. |
| 469 | `after5_last_chance_dain_low_2` | 다인 | school_back | dain_sad |  | 🌅 | *한 걸음 지나친 뒤 돌아온다. 배구공을 가슴 앞에 안 |
| 470 | `after5_last_chance_choice` | {name} | school_back | 없음 |  | 🌅 | *손바닥 안에서 핸드폰이 눌린다.* |
| 471 | `after5_confess_no` | {name} | school_back | 없음 |  | 🌅 | *휴대폰 화면을 끄고 입을 다문다.* |
| 472 | `after5_confess_no_2` | {name} | school_back | 없음 |  | 🌅 | *저녁 바람에 행사 안내지가 발치까지 굴러온다. 주워  |
| 473 | `after5_confess_no_2b` | {name} | room_my | 없음 |  | 🌅 | *끝내 돌아서서 집으로 향했다.* |
| 474 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 475 | `ending_last_chance_resolve` | 시스템 | park | 없음 |  |  |  |
| 476 | `day5_ending_friend` | {name} | park | 없음 |  |  | *고백 대신 고맙다는 말을 쓰기로 한다. 입력창에 첫  |
| 477 | `friend_1` | {name} | park | 없음 |  |  | *공원 벤치에 앉아 메시지 창을 연다. 이번에는 입력창 |
| 478 | `friend_2` | {name} | park | 없음 |  |  | *소정이 대화방에 끝내 보내지 못한 문장이 떠오른다.* |
| 479 | `friend_3` | {name} | park | 없음 |  |  | *'지금은 관계를 바꾸자고 말할 자신이 없어. 그래도  |
| 480 | `friend_route_check` | 시스템 | park | 없음 |  |  |  |
| 481 | `friend_4_dain` | {name} | park | 없음 |  |  | *다인에게서 답장이 온다. '응. 그럼 내일은 평소대로 |
| 482 | `friend_5` | {name} | park | 없음 |  |  | *'응.' 짧게 답하고 화면을 끈다.* |
| 483 | `friend_7` | {name} | park | 없음 |  |  | *보낸 메시지 옆에 읽음 표시가 붙는다. 입력창은 비어 |
| 484 | `friend_8` | {name} | ending_friend | 없음 |  |  | *졸업식 날. 핸드폰 갤러리에 이 학교 친구들과 찍은  |
| 485 | `friend_9` | {name} | ending_friend | 없음 |  |  | *사진 파일명은 '졸업식_친구들'. 단체 대화방에도 같 |
| 486 | `friend_10` | {name} | ending_friend | 없음 |  |  | *단체 대화방에 쓴다. '졸업식 끝나고 다 같이 뭐 먹 |
| 487 | `friend_12` | 시스템 | ending_friend | 없음 |  |  | ─── FRIEND END ─── |
| 488 | `day5_credits` |  | school | 없음 |  |  |  |
| 489 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### harem_8

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_dain_choice`: (선택)
- `after_end`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_seo_choice`: (선택)
- `after2_choice`: (선택)
- `after2_seo_choice1`: (선택)
- `after2_seo_choice2`: (선택)
- `night2_choice`: (선택)
- `morning3_date_seo_choice`: (선택)
- `morning3_date_dain_choice`: (선택)
- `morning3_date_yuna_choice`: (선택)
- `lunch3_choice`: (선택)
- `after3_multi_choice`: (선택)
- `after3_choice`: (선택)
- `night3_nightmare_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=10 유나=-4 다인=9 담임=0 보건=0

<details>
<summary>씬 타임라인 (443씬)</summary>

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
| 14 | `choice_joke_1` | 서연 | school | seyoun_laugh |  |  | 공짜야. 대신 나중에 이자 붙어. |
| 15 | `choice_joke_2` | {name} | school | seyoun_laugh |  |  | 무서운 학생회장이네. |
| 16 | `choice_joke_3` | 서연 | school | seyoun_normal |  |  | 적어도 지루하지는 않을 거야. |
| 17 | `hallway_1` | 서연 | school_hallway | seyoun_back |  |  | *복도를 앞서 걷는다. 마주치는 학생들이 먼저 인사할  |
| 18 | `hallway_3` | 서연 | school_hallway | seyoun_normal |  |  | 3학년 건물은 여기, 저쪽이 도서관. 매점은 지하. |
| 19 | `hallway_4` | 서연 | school_hallway | seyoun_normal |  |  | *주머니에서 열쇠를 꺼내 손바닥 위에서 짤랑거린다.* |
| 20 | `hallway_5` | 서연 | school_hallway | seyoun_normal |  |  | 옥상은 원래 잠겨 있어. 학생회장 특권이지. |
| 21 | `hallway_6` | {name} | school_hallway | seyoun_normal |  |  | 비밀 아지트라도 있어? |
| 22 | `hallway_6_b` | 서연 | school_hallway | seyoun_normal |  |  | *열쇠고리 소리가 뚝 끊긴다.* 눈치 빠르네. |
| 23 | `hallway_6_c` | 서연 | school_hallway | seyoun_normal |  |  | *대답 대신 열쇠를 다시 주머니에 넣는다.* |
| 24 | `hallway_7` | 서연 | school_hallway | seyoun_normal |  |  | 아, 점심. 밥 어디서 먹는지 모르지? 같이 가. |
| 25 | `hallway_8` | {name} | school_hallway | seyoun_shy |  |  | *서연은 교실 앞에 서서 문패를 가리킨다.* |
| 26 | `hallway_10` | 서연 | school_hallway | seyoun_normal |  |  | 여기야. 들어가 봐. |
| 27 | `hallway_11` | {name} | school_hallway | seyoun_normal |  |  | 점심때도 안내해 주는 거야? |
| 28 | `hallway_12` | 서연 | school_hallway | seyoun_normal |  |  | 그건 네가 잘하면. |
| 29 | `hallway_13` | 서연 | school_hallway | seyoun_back |  |  | *돌아선 서연이 클립보드를 든 손만 어깨 높이로 한 번 |
| 30 | `hallway_13_b` | {name} | school_hallway | seyoun_back |  |  | *복도 끝으로 멀어질 때까지 걸음이 흐트러지지 않았다. |
| 31 | `classroom_1` | {name} | room_school | 없음 |  |  | *교실 문을 열자 소음이 뚝 끊기고 가까운 책상 의자  |
| 32 | `classroom_2_b` | {name} | room_school | teacher_normal |  |  | *교탁 앞에 담임선생님이 서 있다. 20대 후반. 가디 |
| 33 | `classroom_3` | 담임 | room_school | teacher_normal |  |  | 자, 오늘부터 우리 반에 들어온 전학생이야. 자기소개  |
| 34 | `classroom_3_b` | {name} | room_school | teacher_normal |  |  | {name}입니다. 잘 부탁드립니다. *담임이 출석부의 |
| 35 | `classroom_5_b` | 담임 | room_school | teacher_normal |  |  | 그래, {name}. 외웠어. *출석부에 이름을 덧그으 |
| 36 | `classroom_5_c` | {name} | room_school | teacher_normal |  |  | *담임의 혼잣말은 교실 소음에 묻힌다. 교실 한쪽에서  |
| 37 | `classroom_dain_1` | 다인 | room_school | dain_normal |  |  | 오, 전학생. 우리 반에 새 얼굴 들어왔네! |
| 38 | `classroom_dain_2` | {name} | room_school | dain_normal |  |  | *갈색 숏컷에 배구부 유니폼. 자리에서 반쯤 일어나 손 |
| 39 | `classroom_dain_3` | 담임 | room_school | teacher_normal |  |  | 다인아, 목소리 낮춰. 그리고 교실에서는 유니폼 좀 그 |
| 40 | `classroom_dain_4` | 다인 | room_school | dain_normal |  |  | 쌤, 이게 제일 편하다니까요. 아무튼 전학생, 반갑다. |
| 41 | `classroom_dain_5` | {name} | room_school | dain_normal |  |  | *교실 몇 군데서 웃음이 터진다. 다인은 손을 더 높이 |
| 42 | `classroom_dain_5_b` | 담임선생님 | room_school | teacher_normal |  |  | *출석부 모서리로 교탁을 두 번 두드리고 다인 쪽을 보 |
| 43 | `classroom_dain_5_c` | 담임 | room_school | teacher_normal |  |  | 에너지 좀 아껴. 아직 1교시도 안 시작했어. |
| 44 | `classroom_dain_5_d` | 담임선생님 | room_school | teacher_angry |  |  | *담임은 출석부를 넘긴다.* |
| 45 | `classroom_yuna_1` | {name} | room_school | yuna_bored |  |  | *창가 맨 뒤쪽의 한 여학생은 턱을 괸 채 창밖만 본다 |
| 46 | `classroom_yuna_2` | {name} | room_school | yuna_bored |  |  | *은백색 머리. 붉은 눈. 팔의 타투. 창가 맨 뒤 자 |
| 47 | `classroom_yuna_4` | {name} | room_school | yuna_bored |  |  | *앞줄에서 누군가 속삭인다. '쟤한테 말 걸지 마. 무 |
| 48 | `classroom_seat_1` | 담임선생님 | room_school | teacher_normal |  |  | *빈자리를 가리킨다.* |
| 49 | `classroom_seat_2` | {name} | room_school | dain_normal |  |  | *다인 옆자리다. 의자에 앉기도 전에 다인이 내 책상  |
| 50 | `classroom_minsu_1` | {name} | room_school | minsu_normal |  |  | *자리에 앉으려는데 — 앞자리 남학생이 돌아본다.* |
| 51 | `classroom_minsu_2` | 민수 | room_school | minsu_smirk |  |  | 야, 전학생. 환영한다. — 그리고 조심해. |
| 52 | `classroom_minsu_3` | {name} | room_school | minsu_smirk |  |  | 뭘? |
| 53 | `classroom_minsu_2_b` | 민수 | room_school | minsu_normal |  |  | *다인 쪽으로 턱짓한다.* 체력 관리. |
| 54 | `classroom_dain_talk_1` | {name} | room_school | minsu_normal |  |  | *앞자리 이름표에는 '민수'라고 적혀 있었다.* |
| 55 | `classroom_dain_talk_2` | {name} | room_school | dain_normal |  |  | *자리에 앉자마자 다인이 상체를 기울인다. 책상 두 개 |
| 56 | `classroom_dain_talk_3` | 다인 | room_school | dain_normal |  |  | 야, {name}. 운동 좋아해? |
| 57 | `classroom_dain_talk_4` | {name} | room_school | dain_normal |  |  | 갑자기? |
| 58 | `classroom_dain_talk_5` | 다인 | room_school | dain_normal |  |  | 그냥. 방과후에 리시브 연습 상대가 필요해서. 서브 넣 |
| 59 | `classroom_dain_talk_6` | {name} | room_school | dain_normal |  |  | 나 볼 머신이야? |
| 60 | `classroom_dain_talk_7` | 다인 | room_school | dain_laugh |  |  | 그래도 볼 머신보단 낫겠지. 아마. |
| 61 | `classroom_dain_talk_8` | {name} | room_school | dain_laugh |  |  | *'아마' 뒤에 다인의 시선이 볼 머신 쪽으로 간다.  |
| 62 | `classroom_yuna_note_1` | {name} | room_school | yuna_bored |  |  | *접힌 쪽지가 책상 위로 미끄러져 온다. 뒤를 돌아봐도 |
| 63 | `classroom_yuna_note_3` | {name} | room_school | yuna_bored |  |  | *'시끄러운 자리 걸렸네. — 유나' 연보라색 잉크.  |
| 64 | `classroom_yuna_note_5` | {name} | room_school | yuna_bored |  |  | *유나 쪽을 보자 시선은 여전히 창밖이고 손만 책상 아 |
| 65 | `classroom_yuna_note_6` | {name} | room_school | yuna_bored |  |  | *수업 종이 울리자 유나는 다시 창밖을 보고 다인은 벌 |
| 66 | `lunch_start` | {name} | school_hallway | 없음 |  |  | *점심시간. 학생들로 찬 복도 끝에는 서연의 도시락 가 |
| 67 | `lunch_start_4` | {name} | school_hallway | seyoun_normal |  |  | *복도 끝에서 서연이 눈을 맞추더니 옥상 쪽을 손으로  |
| 68 | `lunch_start_4_b` | {name} | school_hallway | dain_normal |  |  | *옆에서 다인이 팔목을 낚아챈다.* |
| 69 | `lunch_start_5` | 다인 | school_hallway | dain_normal |  |  | 야, 밥 먹었어? 매점 가자. 빵 내기하자, 진 사람이 |
| 70 | `lunch_start_6` | {name} | school_hallway | yuna_normal |  |  | *유나는 가방만 들고 교실을 빠져나가 도서관 방향으로  |
| 71 | `lunch_start_7` | {name} | school_hallway | 없음 |  |  | *복도는 세 갈래다. 옥상, 매점, 도서관. 주머니 안 |
| 72 | `lunch_choice` | {name} | school_hallway | 없음 |  |  | *누구를 따라갈까?* |
| 73 | `lunch_dain_1` | 다인 | store | dain_laugh |  |  | 도착. 여기가 매점이야. 일단 고르고 봐. |
| 74 | `lunch_dain_1_aff_default` | 다인 | store | dain_normal |  |  | *매점 안은 점심시간이라 북적거린다. 빵 냄새랑 우유  |
| 75 | `lunch_dain_2` | 다인 | store | dain_normal |  |  | 소보로빵에 딸기우유. 이 조합은 실패한 적 없어. |
| 76 | `lunch_dain_3` | {name} | store | dain_normal |  |  | 근데 진 사람이 사준다며. 뭘 하는 거야? |
| 77 | `lunch_dain_4` | 다인 | store | dain_normal |  |  | 가위바위보. 간단하지. |
| 78 | `lunch_dain_5` | {name} | store | dain_normal |  |  | 당연한 건 아닌데. |
| 79 | `lunch_dain_6` | 다인 | store | dain_normal |  |  | 안 하면 네가 사는 걸로 친다? |
| 80 | `lunch_dain_7` | {name} | store | dain_normal |  |  | 하자. |
| 81 | `lunch_dain_8` | {name} | store | dain_normal |  |  | *가위바위보.* |
| 82 | `lunch_dain_9` | 다인 | store | dain_normal |  |  | 가위— 바위— 보! |
| 83 | `lunch_dain_10` | {name} | store | dain_normal |  |  | *가위. 바위. 보. — 다인이 졌다.* |
| 84 | `lunch_dain_11` | 다인 | store | dain_normal |  |  | 어? 나 졌네. 한 판 더. |
| 85 | `lunch_dain_12` | {name} | store | dain_pout |  |  | 약속은 약속이지. |
| 86 | `lunch_dain_12_b` | 다인 | store | dain_pout |  |  | 아, 알았어. 내가 산다. 이모, 소보로 두 개요. |
| 87 | `lunch_dain_14` | 다인 | store | dain_pout |  |  | *동전을 카운터에 탁탁 놓고 소보로 두 개를 받아 든다 |
| 88 | `lunch_dain_15` | {name} | store | dain_normal |  |  | *매점 한쪽 벤치에 앉아 빵을 먹는다.* |
| 89 | `lunch_dain_16` | 다인 | store | dain_normal |  |  | *빵 봉지를 뜯는다.* 야, 너 운동 진짜 안 해? |
| 90 | `lunch_dain_17` | {name} | store | dain_normal |  |  | 왜, 내 체력이 걱정돼? |
| 91 | `lunch_dain_18` | 다인 | store | dain_laugh |  |  | 아니. 나랑 다니려면 체력부터 봐야지. |
| 92 | `lunch_dain_19` | {name} | store | dain_laugh |  |  | 자기 PR인 줄 알았어. |
| 93 | `lunch_dain_20` | 다인 | store | dain_laugh |  |  | PR? 그게 뭔데. |
| 94 | `lunch_dain_21` | {name} | store | dain_normal |  |  | Personal Record. 운동할 때 쓰는 말인데. |
| 95 | `lunch_dain_22` | 다인 | store | dain_normal |  |  | *딸기우유 팩 옆면이 손가락에 눌려 우그러진다.* |
| 96 | `lunch_dain_23` | 다인 | store | dain_laugh |  |  | 오, 그거 알아? 너 운동 쪽 좀 아네? |
| 97 | `lunch_dain_choice` | 다인 | store | dain_laugh |  |  | *빨대를 문 채 상체를 가까이 기울인다.* |
| 98 | `lunch_dain_trap_1` | 다인 | store | dain_normal |  |  | 관심 없으면 없다고 해. 맞춰주는 건 더 싫어. |
| 99 | `lunch_dain_after` | {name} | store | dain_laugh |  |  | *빵을 다 먹고 일어서는데.* |
| 100 | `lunch_dain_after_2` | 다인 | store | dain_normal |  |  | 야, {name}. |
| 101 | `lunch_dain_after_3` | {name} | store | dain_normal |  |  | 응? |
| 102 | `lunch_dain_after_4` | 다인 | store | dain_normal |  |  | 전학 와서 첫 식사 파트너가 나다? 나름 역사적인데. |
| 103 | `lunch_dain_after_5` | 다인 | store | dain_normal |  |  | *주먹으로 {name}의 어깨를 툭 치고 그대로 한 번 |
| 104 | `lunch_dain_freetalk` | 다인 | store | dain_normal |  |  | *빵 봉지를 접어 주머니에 넣고 벤치 등받이에 기댄다. |
| 105 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *종이 울린다. 점심시간이 끝났다.* |
| 106 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에 |
| 107 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 108 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창 |
| 109 | `after_kakao_5` | {name} | school_hallway | 없음 |  | 🌅 | *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른 |
| 110 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록  |
| 111 | `after1_jealousy_dain_1` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 점심때 매점에서 다인이랑 같이 있는 거 봤는데. 적응  |
| 112 | `after1_jealousy_dain_2` | {name} | school_hallway | seyoun_laugh |  | 🌅 | *서연은 클립보드를 가슴 앞에 세운 채 답을 기다린다. |
| 113 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *복도를 계속 걷는다.* |
| 114 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도를 걷는데 뒤에서 쿵쿵 발소리.* |
| 115 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 조심! |
| 116 | `after_miss_dain_3` | {name} | school_hallway | dain_normal |  | 🌅 | *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 |
| 117 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 피했다? 반사신경 괜찮은데. |
| 118 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 넌 복도에서 왜 전력질주야? |
| 119 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 늦었거든! 체육관 가야 해. 내일 보자, 전학생! |
| 120 | `after_miss_dain_6_b` | {name} | school_hallway | dain_laugh |  | 🌅 | *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을  |
| 121 | `after_miss_dain_7` | {name} | school_hallway | dain_laugh |  | 🌅 | *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아 |
| 122 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으 |
| 123 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 이거 떨어뜨렸어. |
| 124 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피 |
| 125 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌  |
| 126 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 고마워. |
| 127 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피를 책등 사이에 끼우고 돌아선다.* |
| 128 | `after_miss_yuna_4` | {name} | library_old | yuna_normal |  | 🌅 | *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 |
| 129 | `after_miss_seoyeon_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *하교하려는데 복도에서 서연과 마주친다.* |
| 130 | `after_miss_seoyeon_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 아까 어디 갔어? |
| 131 | `after_miss_seoyeon_3` | {name} | school_hallway | seyoun_normal |  | 🌅 | 어디라니? |
| 132 | `after_miss_seoyeon_4` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 옥상 열어놨는데 안 왔네. — 전학생, 배짱이 있어. |
| 133 | `after_miss_seoyeon_5` | {name} | school_hallway | seyoun_normal |  | 🌅 | 기다린 거야? |
| 134 | `after_miss_seoyeon_6` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 바람 쐬러 올라간 건데 문이 열려 있길래. |
| 135 | `after_miss_seoyeon_7` | {name} | school_hallway | seyoun_normal |  | 🌅 | *서연의 클립보드 맨 위에 내 이름이 남아 있다. 체크 |
| 136 | `after_miss_seoyeon_8` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 내일은 빠지지 마. |
| 137 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든 |
| 138 | `night_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄 |
| 139 | `night_start_3` | {name} | room_my | 없음 |  |  | *핸드폰이 울린다. 학교 메신저.* |
| 140 | `night_msg_dain_1` | 다인 | room_my | dain_normal | 0.35 |  | *가위바위보 리벤지 내일이다* |
| 141 | `night_msg_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | *내일은 리벤지다 ㅋㅋ* |
| 142 | `night_msg_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | *오늘 빵값 아직도 아깝다. 진짜.* |
| 143 | `night_msg_dain_4` | {name} | room_my | dain_normal | 0.35 |  | *세 줄이 거의 동시에 도착했다. 답장창에는 벌써 'ㅋ |
| 144 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 다른 알림이 보인다.* |
| 145 | `night_late_transition` | {name} | room_my | 없음 |  |  | *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시 |
| 146 | `night_late_branch` | {name} | room_my | 없음 |  |  | *화면이 밝아진다.* |
| 147 | `night_end_1` | {name} | room_my | 없음 |  |  | *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교 |
| 148 | `night_end_3` | {name} | room_my | 없음 |  |  | *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을  |
| | **Day 2** | | | | | | |
| 149 | `morning2_start` | {name} | room_school | 없음 |  |  | *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.* |
| 150 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 151 | `morning2_dain_1` | {name} | room_school | 없음 |  |  | *교실 문을 여는 순간 손바닥이 등짝을 탁 친다.* |
| 152 | `morning2_dain_2` | 다인 | room_school | dain_normal |  |  | 왔어? 좋은 아침. |
| 153 | `morning2_dain_3` | 다인 | room_school | dain_laugh |  |  | 그 정도로? 체력 관리 좀 해. |
| 154 | `morning2_dain_4` | {name} | room_school | dain_laugh |  |  | 너 아침부터 에너지 과잉 아냐? |
| 155 | `morning2_dain_5` | 다인 | room_school | dain_laugh |  |  | 이게 정상이야! 네가 부족한 거야! |
| 156 | `morning2_dain_6` | 다인 | room_school | dain_laugh |  |  | *아침 조회 전 교실에 다인의 목소리가 먼저 울린다.* |
| 157 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *자리에 앉으려는데 — 책상 위에 접힌 쪽지가 하나 놓 |
| 158 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 159 | `morning2_note_3` | {name} | room_school | yuna_normal | 0.35 |  | *어제와 같은 글씨. 아래쪽에 장소가 적혀 있다. '도 |
| 160 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가다 교실 안을 들여다본다.* 어제 잘 잤 |
| 161 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 학생회장이 교실까지 인사하러 와? |
| 162 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 순찰이야. — 출석률 확인 겸. |
| 163 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | *복도로 돌아가기 직전 클립보드 끝이 문틀에 한 번 닿 |
| 164 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연이 사라진 복도를 바라보는데 — 뒤에서 민수가 돌 |
| 165 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 이틀 만에 학생회장이 인사하러 오냐? 나 1 |
| 166 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 인기가 없는 거 아닐까. |
| 167 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 그건 맞는데 그게 중요한 게 아니잖아. |
| 168 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *다인은 서연의 뒷모습이 교실 안으로 사라질 때까지 바 |
| 169 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 회장님도 우리 전학생한테 관심 있어? 인기 많네! |
| 170 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | '우리' 전학생? |
| 171 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 내가 먼저 봤잖아. 그럼 우리 맞지. 찜한 거. |
| 172 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *쉬는 시간. 복도로 나왔다.* |
| 173 | `morning2_break_1` | {name} | school_hallway | 없음 |  |  | *서연의 클립보드 끝이 책상에 톡 닿는다. 답할 틈도  |
| 174 | `morning2_seo_dust_1` | {name} | school_hallway | seyoun_normal |  |  | *1교시가 끝난 쉬는 시간, 복도에서 서연과 스친다.  |
| 175 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 잠깐. |
| 176 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *손이 {name}의 어깨에 닿는다. 먼지를 두 번 털 |
| 177 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 옷에 뭐 묻었어. |
| 178 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | *서연의 손이 떨어진 자리에서 가방끈이 비뚤어져 있다. |
| 179 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 왜 그래? 먼지잖아. |
| 180 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *어깨의 먼지는 없어졌는데 가방끈을 두 번이나 다시 고 |
| 181 | `morning2_dain_react_2` | {name} | school_hallway | dain_angry |  |  | *서연이 클립보드를 고쳐 끼고 복도로 간다. 뒤에서 다 |
| 182 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 지금 뭐야? 어깨 만진 거야? |
| 183 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 먼지 털어준 거야. |
| 184 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 먼지가 진짜 있긴 했어? |
| 185 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | *대답 대신 가방끈을 고쳐 잡았다. 다인은 그걸 보고도 |
| 186 | `morning2_end` | {name} | school_hallway | seyoun_normal |  |  | *민수 말로는 1년 동안 먼저 인사한 적도 없다던 서연 |
| 187 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *점심. 주머니에는 유나의 쪽지가 있고 복도 끝에서는  |
| 188 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *누구와 함께할까.* |
| 189 | `lunch2_seo_1_check` | {name} | school_hallway | 없음 |  |  | *옥상으로 올라간다.* |
| 190 | `lunch2_seo_1b` | {name} | top_school | seyoun_normal |  |  | *처음 올라온 옥상이다. 난간 아래에서 운동장 호루라기 |
| 191 | `lunch2_seo_2b_check` |  | top_school | seyoun_normal |  |  |  |
| 192 | `lunch2_seo_2b_dain` | 서연 | top_school | seyoun_normal |  |  | 어제는 매점 쪽이더니. 오늘은 여기까지 왔네. |
| 193 | `lunch2_seo_3b_dain` | {name} | top_school | seyoun_normal |  |  | 어제는 다인이 끌고 갔고 오늘은 내가 올라오고 싶었어. |
| 194 | `lunch2_seo_4b_dain` | 서연 | top_school | seyoun_normal |  |  | 그건 좀 다르네. |
| 195 | `lunch2_seo_5b_dain` | {name} | top_school | seyoun_normal |  |  | 바람도 좋고. 네 도시락도 계속 생각났고. |
| 196 | `lunch2_seo_6b_dain` | 서연 | top_school | seyoun_laugh |  |  | 솔직하네. |
| 197 | `lunch2_seo_7` | {name} | top_school | seyoun_normal |  |  | *서연이 도시락 뚜껑을 여는 순간 옥상 문이 철컥 열린 |
| 198 | `lunch2_seo_9` | 다인 | top_school | dain_normal |  |  | 여기 있었네. 찾았다. 옥상에서 먹는 거면 나도 껴도  |
| 199 | `lunch2_seo_10` | 서연 | top_school | seyoun_normal |  |  | 옥상은 허가제야. 그리고 오늘 점심은 내가 먼저 잡았고 |
| 200 | `lunch2_seo_11` | 다인 | top_school | dain_normal |  |  | 그럼 난 지금부터 끼면 되겠네. 나도 앉는다? |
| 201 | `lunch2_seo_12` | {name} | top_school | dain_normal |  |  | *다인이 빈자리에 바로 앉는다. 서연의 젓가락이 계란말 |
| 202 | `lunch2_seo_13` | 다인 | top_school | dain_normal |  |  | 어제는 나랑 먹었잖아. 하루 만에 회장님 도시락으로 갈 |
| 203 | `lunch2_seo_14` | 서연 | top_school | seyoun_normal |  |  | *다인이 앉으려 하자 빈 의자를 발끝으로 자기 쪽에 붙 |
| 204 | `lunch2_seo_15` | {name} | top_school | seyoun_normal |  |  | 같은 반이잖아. 너희 둘도 이제 아는 사이고. |
| 205 | `lunch2_seo_16` | 서연 | top_school | seyoun_normal |  |  | 친해지는 것하고 양보하는 건 다르지. |
| 206 | `lunch2_seo_17` | 다인 | top_school | dain_normal |  |  | 그럼 나도 양보 안 해. 다음 쉬는 시간에 체육관 와. |
| 207 | `lunch2_seo_19` | 서연 | top_school | seyoun_normal |  |  | {name}, 지금 내 앞에서 다음 약속 잡는 거야? |
| 208 | `lunch2_seo_20` | 서연 | top_school | seyoun_normal |  |  | 대답은 나중에 해. 일단 입가에 뭐 묻었어. 가만있어  |
| 209 | `lunch2_seo_choice` | 서연 | top_school | seyoun_normal |  |  | *물티슈를 감은 손가락이 입가로 다가온다.* |
| 210 | `lunch2_seo_c2_1` | {name} | top_school | seyoun_normal |  |  | *손등으로 입가를 닦는다.* |
| 211 | `lunch2_seo_c2_2` | 서연 | top_school | seyoun_pout |  |  | 직접 닦으면 번지잖아. |
| 212 | `lunch2_seo_c2_3` | 서연 | top_school | seyoun_pout |  |  | *도시락 뚜껑을 맞추는 손이 두 번 미끄러진다. 세 번 |
| 213 | `lunch2_seo_end_c2` | {name} | top_school | seyoun_pout |  |  | *손등에 아직 밥풀 자국이 남아 있다. 서연은 도시락  |
| 214 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *방과후. 핸드폰에 알림이 두 개 와 있다.* |
| 215 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 체육관 와. 오늘은 진짜 내기다. |
| 216 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 학생회실에 올 수 있어? 일손이 부족해서. |
| 217 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게서는 아무 연락이 없다. 가방을 챙기자 주머니 |
| 218 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *어디로 갈까.* |
| 219 | `after2_seo_1` | {name} | student_room | seyoun_sad |  | 🌅 | *학생회실. 서연은 서류 더미 앞에 혼자 앉아 있다.* |
| 220 | `after2_seo_2` | 서연 | student_room | seyoun_normal |  | 🌅 | 와 줬네. — 솔직히 안 올 줄 알았어. |
| 221 | `after2_seo_3` | {name} | student_room | seyoun_laugh |  | 🌅 | 부르면 가는 타입이야. |
| 222 | `after2_seo_4` | 서연 | student_room | seyoun_normal |  | 🌅 | *클립보드 모서리로 빈 의자를 가리킨다.* 순종적이네. |
| 223 | `after2_seo_4_b` | 서연 | student_room | seyoun_sad |  | 🌅 | *클립보드를 {name} 쪽으로 돌린다. 할 일 목록  |
| 224 | `after2_seo_5` | {name} | student_room | seyoun_normal |  | 🌅 | 도와달라고 한 건 너잖아. |
| 225 | `after2_seo_6` | 서연 | student_room | seyoun_normal |  | 🌅 | 부탁이 아니라 기회를 준 거야. |
| 226 | `after2_seo_6_b` | {name} | student_room | seyoun_normal |  | 🌅 | *서류 정리를 시작한다. 행사 예산안, 동아리 신청서. |
| 227 | `after2_seo_7` | 서연 | student_room | seyoun_normal |  | 🌅 | *바로 돌아서지 않고 클립보드를 문 쪽으로 든 채 기다 |
| 228 | `after2_seo_8` | 서연 | student_room | seyoun_normal |  | 🌅 | 이쪽은 날짜순, 저쪽은 동아리별. — 정리하는 건 잘해 |
| 229 | `after2_seo_8a2` | {name} | student_room | seyoun_normal |  | 🌅 | 잘하진 않는데 못하지도 않아. |
| 230 | `after2_seo_8a3` | 서연 | student_room | seyoun_normal |  | 🌅 | 애매하네. |
| 231 | `after2_seo_8a4` | {name} | student_room | seyoun_normal |  | 🌅 | 칭찬이랑 비슷하잖아. 너도 애매하게 하니까. |
| 232 | `after2_seo_8b` | 서연 | student_room | seyoun_normal |  | 🌅 | *서류를 넘기던 손을 놓고 {name} 쪽을 본다.* |
| 233 | `after2_seo_8b2` | 서연 | student_room | seyoun_sad |  | 🌅 | 너, 쓸 만하네. |
| 234 | `after2_seo_8b3` | {name} | student_room | seyoun_normal |  | 🌅 | 그건 칭찬이야? |
| 235 | `after2_seo_8b4` | 서연 | student_room | seyoun_shy |  | 🌅 | 칭찬이야. 받아 둬. |
| 236 | `after2_seo_8b4_b` | 서연 | student_room | seyoun_shy |  | 🌅 | *칭찬이라고 말해놓고 바로 서류를 정리한다. 목을 돌리 |
| 237 | `after2_seo_choice1` | {name} | student_room | seyoun_normal |  | 🌅 | *블라인드 틈으로 들어온 주황색 줄이 서류 위를 가른다 |
| 238 | `after2_seo_neck_worry` | 서연 | student_room | seyoun_normal |  | 🌅 | 괜찮아. 이 정도는 매일이야. |
| 239 | `after2_seo_neck_react` | 서연 | student_room | seyoun_normal |  | 🌅 | *어깨를 돌리다 작게 숨을 들이쉰다.* |
| 240 | `after2_seo_neck_react_b` | {name} | student_room | seyoun_normal |  | 🌅 | 잠깐. 이거 아래에 받쳐 봐. |
| 241 | `after2_seo_neck_react_c` | {name} | student_room | seyoun_normal |  | 🌅 | *한쪽에 쌓인 빈 파일 상자를 서연 앞으로 밀어 놓는다 |
| 242 | `after2_seo_neck_touch` | 서연 | student_room | seyoun_normal |  | 🌅 | 내 서류를 받침대로 쓰겠다고? |
| 243 | `after2_seo_neck_low` | {name} | student_room | seyoun_normal |  | 🌅 | *파일 상자를 두 사람 사이 책상 끝에 내려놓는다.* |
| 244 | `after2_seo_neck_low_b` | {name} | student_room | seyoun_normal |  | 🌅 | 싫으면 말고. |
| 245 | `after2_seo_neck_low_c` | 서연 | student_room | seyoun_worried |  | 🌅 | *상자를 받아 서류 옆에 내려놓는다.* |
| 246 | `after2_seo_neck_low_2` | 서연 | student_room | seyoun_normal |  | 🌅 | 끝나고 써 볼게. |
| 247 | `after2_seo_9` | {name} | student_room | seyoun_normal |  | 🌅 | *블라인드 그림자가 책상 끝까지 길어질 무렵 서류 정리 |
| 248 | `after2_seo_choice2` | {name} | student_room | seyoun_normal |  | 🌅 | *서류 정리가 거의 끝났다.* |
| 249 | `after2_seo_leave` | 서연 | student_room | seyoun_normal |  | 🌅 | *완성된 서류 더미를 양손으로 한 번 눌러 맞춘다.* |
| 250 | `after2_seo_end` | {name} | school_hallway | seyoun_normal |  | 🌅 | *학생회실을 나서자 복도 자동등이 앞에서부터 한 칸씩  |
| 251 | `after2_seo_rival_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 252 | `after2_seo_rival_dain_low` | 다인 | school_hallway | dain_laugh |  | 🌅 | 수고! *공 바구니 너머로 손을 흔들고 체육관 쪽으로  |
| 253 | `after2_seo_rival_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 254 | `after2_seo_rival_yuna_low` | {name} | school_hallway | yuna_normal |  | 🌅 | *계단참의 유나가 한쪽으로 비켜서며 짧게 고개를 숙인다 |
| 255 | `after2_seo_return` | {name} | school | seyoun_normal |  | 🌅 | *학생회실을 나섰다. 교문 쪽으로 걸어간다.* |
| 256 | `after2_group_seoyeon_companion` | 서연과 동행 | student_room | 없음 |  | 🌅 | *서연이 겹쳐 적힌 일정 두 칸을 손끝으로 짚는다. 맞 |
| 257 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.* |
| 258 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 259 | `minsu_warn_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문을 나서는데 — 민수가 뒤에서 따라온다. |
| 260 | `minsu_warn_1_b` | 민수 | school | minsu_normal |  | 🌅 | *성큼 따라와 옆에 나란히 선다.* |
| 261 | `minsu_warn_2` | 민수 | school | minsu_smirk |  | 🌅 | 야. |
| 262 | `minsu_warn_3` | {name} | school | minsu_smirk |  | 🌅 | 왜? |
| 263 | `minsu_warn_4` | 민수 | school | minsu_smirk |  | 🌅 | 너 요즘 재밌냐? |
| 264 | `minsu_warn_4_b` | {name} | school | minsu_normal |  | 🌅 | *민수는 교문 밖 횡단보도 신호만 보고 있다.* |
| 265 | `minsu_warn_5` | {name} | school | minsu_smirk |  | 🌅 | 갑자기? |
| 266 | `minsu_warn_6` | 민수 | school | minsu_smirk |  | 🌅 | 점심엔 한 명, 방과후엔 또 한 명. 넌 재밌겠지. — |
| 267 | `night2_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저  |
| 268 | `night2_msg_1` | {name} | room_my | 없음 |  |  | *세 명에게서 메시지가 왔다.* |
| 269 | `night2_msg_seo_specific` | 서연 | room_my | seyoun_normal | 0.35 |  | 오늘 고마웠어. 덕분에 일찍 끝났어 |
| 270 | `night2_msg_seo_specific_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 다음에도 부를지도 모르니까, 각오해 둬 |
| 271 | `night2_msg_dain_general` | 다인 | room_my | dain_normal | 0.35 |  | 야, 내일 매점 가자! 오늘 못 간 거 아직 아쉽거든! |
| 272 | `night2_msg_dain_general_merge` | 서연 | room_my | seyoun_normal | 0.35 |  | 점심에 옥상 올래? 바람 좋을 거야 |
| 273 | `night2_msg_yuna_general` | 유나 | room_my | yuna_normal | 0.35 |  | 내일 별관 올 거야? |
| 274 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에  |
| 275 | `night2_choice` | {name} | room_my | 없음 |  |  | *누구에게 먼저 답장할까?* |
| 276 | `night2_reply_seo_1` | {name} | room_my | seyoun_normal | 0.35 |  | 부르면 또 갈게 |
| 277 | `night2_reply_seo_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 쉽게 말하네 |
| 278 | `night2_reply_seo_3` | {name} | room_my | seyoun_normal | 0.35 |  | 쉬운 말인데 |
| 279 | `night2_reply_seo_4` | 서연 | room_my | seyoun_normal | 0.35 |  | 점심에 옥상 열어둘게. 늦지 마 |
| 280 | `night2_reply_seo_5` | {name} | room_my | seyoun_normal | 0.35 |  | *서연은 거기서 메시지를 끝냈다.* |
| 281 | `night2_reply_seo_react_default` | 서연 | room_my | seyoun_normal | 0.35 |  | ㅋ 알겠어. 내일 봐. |
| 282 | `night2_seo_freetalk` | 서연 | room_my | seyoun_normal | 0.35 | 🌙 | 아, 잠깐. 아직 안 잤지? |
| 283 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 또 다른 알림이 보인다.* |
| 284 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 보내고 핸드폰을 내려놓았다.* |
| 285 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이,  |
| 286 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 |
| 287 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *메모장에 줄줄이 남은 보내지 않은 문장. '선생님,  |
| 288 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 메모가 마지막이다. 그 아래 39번째에는 제 |
| 289 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 |
| 290 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로 |
| 291 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보 |
| 292 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화 |
| 293 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 |
| 294 | `night2_end_2_b` | {name} | room_my | 없음 |  |  | *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있 |
| 295 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.* |
| 296 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을  |
| 297 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 |
| | **Day 3** | | | | | | |
| 298 | `morning3_start` | {name} | school | 없음 |  |  | *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯 |
| 299 | `morning3_start_2` | {name} | school | 없음 |  |  | *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군 |
| 300 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 301 | `morning3_seo_gate_1` | {name} | school | seyoun_normal |  |  | *교문 앞의 서연은 지각 종이 울리기 직전인데도 발을  |
| 302 | `morning3_seo_gate_cold_1` | 서연 | school | seyoun_normal |  |  | *서연이 지나치다 명찰 쪽으로 눈만 돌린다.* |
| 303 | `morning3_seo_gate_cold_2` | 서연 | school | seyoun_normal |  |  | 전학생. 아직 다니고 있었구나. |
| 304 | `morning3_seo_gate_cold_3` | {name} | school | seyoun_normal |  |  | *평소처럼 이름도 부르지 않았다. 서연의 구두 소리만  |
| 305 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실에 들어서자 서연의 펜이 멈추고 다인의 의자가 뒤 |
| 306 | `morning3_react_seo_1` | 다인 | room_school | dain_normal |  |  | 야, 회장님이랑 같이 왔어? 아침부터? |
| 307 | `morning3_react_seo_2` | 유나 | room_school | yuna_bored |  |  | *창밖을 보던 유나가 유리창에 비친 {name}을 확인 |
| 308 | `morning3_date_intro` | {name} | room_school | 없음 |  |  | *1교시가 끝났다. 쉬는 시간마다 누군가 말을 건다.* |
| 309 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *쉬는 시간, 복도로 나왔다. 서연이 먼저 걸음을 맞춘 |
| 310 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | 이번 주말에 시간 있어? 공원에 같이 가자. |
| 311 | `morning3_date_seo_choice` | 서연 | school_hallway | seyoun_normal |  |  | *서연이 교실 문 앞에서 묻는다. 다인이 들고 있던 물 |
| 312 | `morning3_date_seo_accept` | {name} | school_hallway | seyoun_shy |  |  | *서연과 주말 약속을 잡았다. 서연이 교실 문을 닫기도 |
| 313 | `morning3_date_seo_accept_b` | {name} | room_school | seyoun_shy |  |  | *교실로 돌아왔다. 수업 하나가 지나고 또 쉬는 시간이 |
| 314 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼  |
| 315 | `morning3_date_dain_2` | 다인 | room_school | dain_normal |  |  | *서연이 아직 교실 문 앞에 서 있다. 다인은 이쪽을  |
| 316 | `morning3_date_dain_choice` | 다인 | room_school | dain_normal |  |  | *서연의 발소리가 멎는다. 다인은 대답을 기다린다.* |
| 317 | `morning3_date_dain_accept` | {name} | room_school | dain_laugh |  |  | *다인과 주말 약속을 잡았다. 다인이 웃자 복도에서 서 |
| 318 | `morning3_date_dain_decline_narr` | 다인 | room_school | dain_laugh |  |  | *다인은 웃으며 자기 자리로 돌아간다. 종이 치기 직전 |
| 319 | `morning3_date_dain_decline_inner_2` | {name} | room_school | dain_laugh |  |  | *다인이 자리로 돌아간 뒤, 종이 치기 직전의 교실만  |
| 320 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다 |
| 321 | `morning3_date_yuna_1_b` | 서연 | room_school | seyoun_normal |  |  | 유나. 쪽지로 물으면 다른 사람은 못 듣잖아. |
| 322 | `morning3_date_yuna_2` | {name} | room_school | yuna_normal |  |  | *'주말. 헌책방. 먼저 잡힌 약속이 있어도, 네가 오 |
| 323 | `morning3_date_yuna_choice` | {name} | room_school | yuna_normal |  |  | *쪽지를 읽는 동안 유나는 서연과 다인을 차례로 본다. |
| 324 | `morning3_date_yuna_accept` | {name} | room_school | yuna_shy |  |  | *쪽지 뒷면에 '갈게'라고 적는다. 유나가 종이를 접는 |
| 325 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 326 | `morning3_multi_from_seo` |  | room_school | 없음 |  |  |  |
| 327 | `morning3_set_multiple` | {name} | room_school | 없음 |  |  | *주말 일정이 겹친다. 캘린더 칸이 세 개로 나뉘어 있 |
| 328 | `morning3_end` | {name} | room_school | 없음 |  |  | *수업 종료 종이 울리고 곧 점심시간이 된다.* |
| 329 | `morning3_end_b` | 유나 | room_school | yuna_normal |  |  | 맛있네. |
| 330 | `lunch3_start` | {name} | room_school | yuna_normal |  |  | *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. |
| 331 | `lunch3_start_2_b` | 다인 | room_school | dain_normal |  |  | *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가 |
| 332 | `lunch3_meal_1` | 다인 | room_school | dain_laugh |  |  | 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고  |
| 333 | `lunch3_meal_2` | {name} | room_school | dain_laugh |  |  | 그건 내 거... |
| 334 | `lunch3_meal_3` | 서연 | room_school | seyoun_normal |  |  | 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점 |
| 335 | `lunch3_meal_4` | {name} | room_school | seyoun_normal |  |  | 점수 매기지 마. |
| 336 | `lunch3_meal_5` | 서연 | room_school | seyoun_normal |  |  | 10점 만점이야. 나쁜 거 아닌데? |
| 337 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다 |
| 338 | `lunch3_meal_7` | {name} | room_school | seyoun_normal |  |  | 유나, 그건 내가 제일 좋아하는 건데. |
| 339 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임 |
| 340 | `lunch3_meal_8` | {name} | room_school | yuna_bored |  |  | *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다. |
| 341 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. |
| 342 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓 |
| 343 | `lunch3_meal_10_c` | 서연 | room_school | seyoun_normal |  |  | *서연은 계란말이 앞에서 젓가락 끝을 거둔다.* |
| 344 | `lunch3_meal_11` | {name} | room_school | yuna_bored |  |  | *누구에게 줄까?* |
| 345 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *마지막 반찬을 누구에게 줄지 고민한다.* |
| 346 | `lunch3_share_1` | {name} | room_school | yuna_bored |  |  | *다 같이 나눠 먹자고 하자 셋이 웃는다. 웃음이 끊긴 |
| 347 | `lunch3_harem_1` | {name} | room_school | 없음 |  |  | *셋이 조금씩 나눠 먹는다. 서연은 입꼬리만 올리고 다 |
| 348 | `lunch3_end` | {name} | room_school | 없음 |  |  | *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다 |
| 349 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육 |
| 350 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다 |
| 351 | `after3_multi_choice` | {name} | school_hallway | 없음 |  | 🌅 | *약속이 겹쳤다. 핸드폰에는 서연의 메시지와 다인의 부 |
| 352 | `after3_choice` | {name} | school_hallway | 없음 |  | 🌅 | *어디로 갈까.* |
| 353 | `after3_walk_home` | {name} | school_hallway | 없음 |  | 🌅 | *잡힌 약속은 없다. 휴대폰을 가방에 넣고 교문 쪽으로 |
| 354 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.* |
| 355 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 356 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 357 | `minsu_d3_check` | {name} | school | 없음 |  | 🌅 |  |
| 358 | `minsu_d3_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문 앞에 민수가 서 있다.* |
| 359 | `minsu_d3_2` | 민수 | school | 없음 |  | 🌅 | 봤다. |
| 360 | `minsu_d3_3` | 민수 | school | 없음 |  | 🌅 | 점심때. 그리고 방금 서연 표정도. |
| 361 | `minsu_d3_4` | 민수 | school | 없음 |  | 🌅 | 어제 내가 뭐랬냐. 나중에 셋 다 울면 네 탓이라고 했 |
| 362 | `minsu_d3_5` | 민수 | school | 없음 |  | 🌅 | 옆에서 보기 좀 힘들다. 걔들 다 좋은 애들이야. 네가 |
| 363 | `minsu_d3_5b` | 민수 | school | 없음 |  | 🌅 | *민수는 빨대 포장지를 끝까지 접어 테이블 위에 내려놓 |
| 364 | `minsu_d3_6` | {name} | school | 없음 |  | 🌅 | 맞아. |
| 365 | `minsu_d3_6b` | 민수 | school | 없음 |  | 🌅 | 전 학교에서 뭔 일 있었는지 안 물어볼게. 근데 하나만 |
| 366 | `minsu_d3_7` | 민수 | school | 없음 |  | 🌅 | 거절도 배려야. 안 되는 관계에 계속 여지 주는 것보다 |
| 367 | `minsu_d3_8` | {name} | school | 없음 |  | 🌅 | *거절도 배려다. 전 학교에서 나는 소정이에게 고백할  |
| 368 | `minsu_d3_9` | 민수 | school | 없음 |  | 🌅 | *민수는 더 말하지 않고 끝까지 접은 빨대 포장지를 내 |
| 369 | `minsu_d3_10` | 민수 | school | 없음 |  | 🌅 | 내일 학교에서 보자. 진지하게 생각해. |
| 370 | `night3_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 가방을 의자에 걸어 둔다.* |
| 371 | `night3_start_2` | {name} | room_my | 없음 |  |  | *책상 위에 엎어 둔 핸드폰 화면을 켠다.* |
| 372 | `night3_cheat_msg_1` | {name} | room_my | 없음 |  |  | *방에 돌아오자마자 핸드폰 화면을 켠다.* |
| 373 | `night3_cheat_msg_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 나한테만 그래줘 |
| 374 | `night3_cheat_msg_3` | 서연 | room_my | seyoun_normal | 0.35 |  | 부탁이야 |
| 375 | `night3_cheat_msg_3_b` | 서연 | room_my | seyoun_normal | 0.35 |  | *'부탁'을 쓴 뒤 한참 동안 다음 글자가 이어지지 않 |
| 376 | `night3_cheat_msg_4` | 유나 | room_my | yuna_normal | 0.35 |  | 다 알고 있었어 |
| 377 | `night3_cheat_msg_4_b` | 유나 | room_my | yuna_normal | 0.35 |  | *나도, 걔들도 예비 자리는 싫어.* |
| 378 | `night3_cheat_msg_5` | 유나 | room_my | yuna_normal | 0.35 |  | *내일은 누구한테 갈 건지 정해* |
| 379 | `night3_cheat_msg_6` | 유나 | room_my | yuna_normal | 0.35 |  | 피하지 마. 그것만 |
| 380 | `night3_cheat_msg_dain_1` | 다인 | room_my | dain_normal | 0.35 |  | ㅋㅋ 농담이었으면 좋겠다 |
| 381 | `night3_cheat_msg_7` | 유나 | room_my | dain_normal | 0.35 |  | *유나에게서 말풍선 세 개가 연달아 올라온다.* |
| 382 | `night3_nightmare_1` | {name} | room_my | 없음 |  |  | *불을 끄고 누웠지만 잠이 오지 않는다. 휴대폰 화면만 |
| 383 | `night3_nightmare_2_b` | {name} | room_my | seyoun_sad |  |  | *서연의 대화방을 연다. 마지막 말은 '부탁이야'. 그 |
| 384 | `night3_nightmare_3` | 서연 | room_my | seyoun_sad |  |  | 지금 답하라는 건 아니야. 대신 내일은 피해 가지 마. |
| 385 | `night3_nightmare_3_b` | {name} | room_my | yuna_sad |  |  | *유나가 보낸 세 줄 아래에는 읽음 표시만 붙어 있다. |
| 386 | `night3_nightmare_4` | {name} | room_my | yuna_sad |  |  | *마지막 말풍선에는 '피하지 마. 그것만.'이라고 적혀 |
| 387 | `night3_nightmare_4_b` | {name} | room_my | dain_sad |  |  | *다인의 대화방에는 웃음 표시가 붙은 문장 하나만 와  |
| 388 | `night3_nightmare_5` | {name} | room_my | dain_sad |  |  | *'농담이었으면 좋겠다.' 그 뒤로 새 메시지는 없다. |
| 389 | `night3_nightmare_6` | {name} | room_my | 없음 |  |  | *세 대화방을 차례로 열었다 닫는다. 입력창마다 다른  |
| 390 | `night3_nightmare_choice` | {name} | room_my | 없음 |  |  | *내일 누구에게 먼저 솔직하게 말할까.* |
| 391 | `night3_nightmare_seo` | {name} | room_my | 없음 |  |  | *서연의 입력창에 '내일 얼굴 보고 말할게.'라고 쓰고 |
| 392 | `night3_nightmare_end` | {name} | room_my | 없음 |  |  | *입력창 하나에 문장이 남고 나머지 두 대화방은 닫힌다 |
| 393 | `night3_nightmare_end_3` | {name} | room_my | 없음 |  |  | *새벽 3시까지 잠들지 못한 채 메시지 창을 닫고 갤러 |
| 394 | `night3_cheat_reflect_2` | {name} | room_my | 없음 |  |  | *단체 사진 속 소정이는 카메라를 보고 있다. 그 옆의 |
| 395 | `night3_cheat_reflect_3_b` | {name} | room_my | 없음 |  |  | *사진을 닫고 메시지 목록으로 돌아온다. 조금 전 쓴  |
| 396 | `night3_cheat_reflect_3_c` | {name} | room_my | 없음 |  |  | *메시지 목록을 훑는다. 세 이름 옆에 서로 다른 마지 |
| 397 | `night3_cheat_reflect_3_d` | {name} | room_my | 없음 |  |  | *민수와의 대화방에는 '미룬다고 없어지는 일 아님'이라 |
| 398 | `night3_cheat_reflect_3_e` | {name} | room_my | 없음 |  |  | *세 대화방을 위에서부터 다시 읽는다. 어느 쪽도 닫지 |
| 399 | `night3_cheat_reflect_5` | {name} | room_my | 없음 |  |  | *보내기 버튼에서 손을 떼고 휴대폰을 뒤집어 놓는다.  |
| 400 | `night3_nightmare_end_4` | {name} | room_my | 없음 |  |  | *알람 이름을 '내일 답하기'로 바꾼다.* |
| 401 | `night3_end` | {name} | room_my | 없음 |  |  | *방 불을 끄고 핸드폰을 엎어 둔다.* |
| | **Day 4** | | | | | | |
| 402 | `morning4_start` | {name} | room_my | 없음 |  |  | *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다 |
| 403 | `morning4_nightmare_check` |  | room_my | 없음 |  |  |  |
| 404 | `morning4_nightmare_seo` | {name} | room_my | 없음 |  |  | *알람이 울린다. 핸드폰 화면에 서연의 메시지가 떠 있 |
| 405 | `morning4_nightmare_after` | {name} | room_my | 없음 |  |  | *알림을 다시 확인한다.* |
| 406 | `minsu_cheer_1` | {name} | room_my | 없음 |  |  | *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.* |
| 407 | `minsu_cheer_1_b` | 민수 | room_my | minsu_normal | 0.35 |  | *야 오늘 데이트라며?* |
| 408 | `minsu_cheer_1_c` | {name} | room_my | minsu_normal | 0.35 |  | *어떻게 알았어* |
| 409 | `minsu_cheer_1_d` | 민수 | room_my | minsu_normal | 0.35 |  | *다인이가 단톡방에 올림. 내일 약속 있음, 이라고* |
| 410 | `minsu_cheer_2` | 민수 | room_my | minsu_normal | 0.35 |  | 잘하고 와ㅋㅋ |
| 411 | `minsu_cheer_3` | {name} | room_my | minsu_normal | 0.35 |  | 알아. |
| 412 | `minsu_cheer_4_branch` |  | room_my | 없음 |  |  |  |
| 413 | `minsu_cheer_4_c` | {name} | room_my | minsu_normal | 0.35 |  | *핸드폰 캘린더를 연다. 오전 서연, 오후 유나, 저녁 |
| 414 | `minsu_cheer_4_d` | {name} | room_my | minsu_normal | 0.35 |  | *세 사람의 이름이 한 화면에 놓인다. 캘린더를 잠갔다 |
| 415 | `minsu_cheer_4_e` | {name} | room_my | minsu_normal | 0.35 |  | *세 약속 사이의 이동 시간을 다시 계산하고 캘린더 알 |
| 416 | `morning4_start_2` | {name} | room_my | 없음 |  |  | *심호흡하고 약속 메시지를 다시 확인한다.* |
| 417 | `morning4_fallback_msg` | {name} | room_my | 없음 |  |  | *주말 아침. 알림 몇 개를 확인하고 핸드폰을 내려놓는 |
| 418 | `morning4_hidden_check` | {name} | room_my | 없음 |  |  | *주말 아침, 학교 앞 사거리에서 신호를 기다린다.* |
| 419 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 420 | `morning4_end` | {name} | room_my | 없음 |  |  | *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 |
| 421 | `day4_harem_fallout_1` | {name} | cafe | 없음 |  |  | *세 사람이 있는 단체방에 서연의 메시지가 먼저 올라온 |
| 422 | `day4_harem_fallout_2` | 서연 | cafe | seyoun_normal |  |  | 누구 하나 고르라는 말은 안 할게. 대신 지금처럼 각각 |
| 423 | `day4_harem_fallout_3` | {name} | cafe | 없음 |  |  | *유나는 시간을 갖겠다고 말하고 다인은 그동안 따로 만 |
| 424 | `day4_harem_fallout_4` | {name} | street | 없음 |  |  | 알겠어. 정리할 때까지 누구에게도 따로 연락하지 않을게 |
| | **Day 5** | | | | | | |
| 425 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소 |
| 426 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 427 | `morning5_harem_fallout_1` | {name} | room_school | 없음 |  |  | *행사 동안 세 사람은 필요한 말만 단체방에 남긴다.  |
| 428 | `morning5_harem_fallout_2` | 다인 | room_school | dain_normal |  |  | 오늘 끝나도 따로 만나진 말자. 우리끼리 정한 거, 지 |
| 429 | `morning5_harem_fallout_3` | {name} | school_hallway | 없음 |  |  | *고개를 끄덕인다. 세 사람은 함께 교문을 나가고 나는 |
| 430 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 431 | `day5_ending_harem` | {name} | ending_harem | 없음 |  |  | *대답 대신 세 사람의 이름을 차례로 부른다. 웃음소리 |
| 432 | `harem_1` | 서연 | ending_harem | 없음 |  |  | 솔직한 건 알겠어. 그렇다고 우리 셋이 기다려야 하는  |
| 433 | `harem_1_b` | 유나 | ending_harem | 없음 |  |  | *고개를 숙였다가 서연과 다인을 차례로 본다. 책을 쥔 |
| 434 | `harem_2` | 유나 | ending_harem | 없음 |  |  | 난 시간을 갖고 싶어. |
| 435 | `harem_3` | 다인 | ending_harem | 없음 |  |  | 나도. 네가 정리할 때까지는 따로 안 만날래. |
| 436 | `harem_4` | {name} | ending_harem | 없음 |  |  | 알겠어. 당분간 누구한테도 따로 연락하지 않을게. 미안 |
| 437 | `harem_5` | 서연 | ending_harem | 없음 |  |  | 그럼 한동안 따로 만나지 말자. 연락도 필요한 얘기만  |
| 438 | `harem_6` | {name} | park | 없음 |  |  | *세 사람은 각자 다른 방향으로 걸어가고 {name}은 |
| 439 | `harem_7` | {name} | room_my | 없음 |  |  | *다음 주 캘린더는 비어 있다. 세 사람의 대화방을 음 |
| 440 | `harem_8` | 시스템 | room_my | 없음 |  |  | ─── UNRESOLVED END ─── |
| 441 | `day5_credits` |  | school | 없음 |  |  |  |
| 442 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### mayhem_8

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_dain_choice`: (선택)
- `after_end`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_yuna_choice`: (선택)
- `after2_choice`: (선택)
- `night2_choice`: (선택)
- `morning3_date_dain_choice`: (선택)
- `morning3_date_yuna_choice`: (선택)
- `lunch3_choice`: (선택)
- `lunch3_expose_choice`: (선택)
- `after3_multi_choice`: (선택)
- `after3_choice`: (선택)
- `night3_nightmare_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=-14 유나=13 다인=6 담임=0 보건=0

<details>
<summary>씬 타임라인 (451씬)</summary>

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
| 59 | `lunch_dain_1` | 다인 | store | dain_laugh |  |  | 도착. 여기가 매점이야. 일단 고르고 봐. |
| 60 | `lunch_dain_1_aff_default` | 다인 | store | dain_normal |  |  | *매점 안은 점심시간이라 북적거린다. 빵 냄새랑 우유  |
| 61 | `lunch_dain_2` | 다인 | store | dain_normal |  |  | 소보로빵에 딸기우유. 이 조합은 실패한 적 없어. |
| 62 | `lunch_dain_3` | {name} | store | dain_normal |  |  | 근데 진 사람이 사준다며. 뭘 하는 거야? |
| 63 | `lunch_dain_4` | 다인 | store | dain_normal |  |  | 가위바위보. 간단하지. |
| 64 | `lunch_dain_5` | {name} | store | dain_normal |  |  | 당연한 건 아닌데. |
| 65 | `lunch_dain_6` | 다인 | store | dain_normal |  |  | 안 하면 네가 사는 걸로 친다? |
| 66 | `lunch_dain_7` | {name} | store | dain_normal |  |  | 하자. |
| 67 | `lunch_dain_8` | {name} | store | dain_normal |  |  | *가위바위보.* |
| 68 | `lunch_dain_9` | 다인 | store | dain_normal |  |  | 가위— 바위— 보! |
| 69 | `lunch_dain_10` | {name} | store | dain_normal |  |  | *가위. 바위. 보. — 다인이 졌다.* |
| 70 | `lunch_dain_11` | 다인 | store | dain_normal |  |  | 어? 나 졌네. 한 판 더. |
| 71 | `lunch_dain_12` | {name} | store | dain_pout |  |  | 약속은 약속이지. |
| 72 | `lunch_dain_12_b` | 다인 | store | dain_pout |  |  | 아, 알았어. 내가 산다. 이모, 소보로 두 개요. |
| 73 | `lunch_dain_14` | 다인 | store | dain_pout |  |  | *동전을 카운터에 탁탁 놓고 소보로 두 개를 받아 든다 |
| 74 | `lunch_dain_15` | {name} | store | dain_normal |  |  | *매점 한쪽 벤치에 앉아 빵을 먹는다.* |
| 75 | `lunch_dain_16` | 다인 | store | dain_normal |  |  | *빵 봉지를 뜯는다.* 야, 너 운동 진짜 안 해? |
| 76 | `lunch_dain_17` | {name} | store | dain_normal |  |  | 왜, 내 체력이 걱정돼? |
| 77 | `lunch_dain_18` | 다인 | store | dain_laugh |  |  | 아니. 나랑 다니려면 체력부터 봐야지. |
| 78 | `lunch_dain_19` | {name} | store | dain_laugh |  |  | 자기 PR인 줄 알았어. |
| 79 | `lunch_dain_20` | 다인 | store | dain_laugh |  |  | PR? 그게 뭔데. |
| 80 | `lunch_dain_21` | {name} | store | dain_normal |  |  | Personal Record. 운동할 때 쓰는 말인데. |
| 81 | `lunch_dain_22` | 다인 | store | dain_normal |  |  | *딸기우유 팩 옆면이 손가락에 눌려 우그러진다.* |
| 82 | `lunch_dain_23` | 다인 | store | dain_laugh |  |  | 오, 그거 알아? 너 운동 쪽 좀 아네? |
| 83 | `lunch_dain_choice` | 다인 | store | dain_laugh |  |  | *빨대를 문 채 상체를 가까이 기울인다.* |
| 84 | `lunch_dain_c2_1` | 다인 | store | dain_laugh |  |  | 그래도 관심은 있는 거잖아. 오늘 방과후 체육관 와.  |
| 85 | `lunch_dain_after` | {name} | store | dain_laugh |  |  | *빵을 다 먹고 일어서는데.* |
| 86 | `lunch_dain_after_2` | 다인 | store | dain_normal |  |  | 야, {name}. |
| 87 | `lunch_dain_after_3` | {name} | store | dain_normal |  |  | 응? |
| 88 | `lunch_dain_after_4` | 다인 | store | dain_normal |  |  | 전학 와서 첫 식사 파트너가 나다? 나름 역사적인데. |
| 89 | `lunch_dain_after_5` | 다인 | store | dain_normal |  |  | *주먹으로 {name}의 어깨를 툭 치고 그대로 한 번 |
| 90 | `lunch_dain_freetalk` | 다인 | store | dain_normal |  |  | *빵 봉지를 접어 주머니에 넣고 벤치 등받이에 기댄다. |
| 91 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *종이 울린다. 점심시간이 끝났다.* |
| 92 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에 |
| 93 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 94 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창 |
| 95 | `after_kakao_5` | {name} | school_hallway | 없음 |  | 🌅 | *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른 |
| 96 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록  |
| 97 | `after1_jealousy_dain_1` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 점심때 매점에서 다인이랑 같이 있는 거 봤는데. 적응  |
| 98 | `after1_jealousy_dain_2` | {name} | school_hallway | seyoun_laugh |  | 🌅 | *서연은 클립보드를 가슴 앞에 세운 채 답을 기다린다. |
| 99 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *복도를 계속 걷는다.* |
| 100 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도를 걷는데 뒤에서 쿵쿵 발소리.* |
| 101 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 조심! |
| 102 | `after_miss_dain_3` | {name} | school_hallway | dain_normal |  | 🌅 | *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 |
| 103 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 피했다? 반사신경 괜찮은데. |
| 104 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 넌 복도에서 왜 전력질주야? |
| 105 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 늦었거든! 체육관 가야 해. 내일 보자, 전학생! |
| 106 | `after_miss_dain_6_b` | {name} | school_hallway | dain_laugh |  | 🌅 | *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을  |
| 107 | `after_miss_dain_7` | {name} | school_hallway | dain_laugh |  | 🌅 | *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아 |
| 108 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으 |
| 109 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 이거 떨어뜨렸어. |
| 110 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피 |
| 111 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌  |
| 112 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 고마워. |
| 113 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피를 책등 사이에 끼우고 돌아선다.* |
| 114 | `after_miss_yuna_4` | {name} | library_old | yuna_normal |  | 🌅 | *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 |
| 115 | `after_miss_seoyeon_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *하교하려는데 복도에서 서연과 마주친다.* |
| 116 | `after_miss_seoyeon_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 아까 어디 갔어? |
| 117 | `after_miss_seoyeon_3` | {name} | school_hallway | seyoun_normal |  | 🌅 | 어디라니? |
| 118 | `after_miss_seoyeon_4` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 옥상 열어놨는데 안 왔네. — 전학생, 배짱이 있어. |
| 119 | `after_miss_seoyeon_5` | {name} | school_hallway | seyoun_normal |  | 🌅 | 기다린 거야? |
| 120 | `after_miss_seoyeon_6` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 바람 쐬러 올라간 건데 문이 열려 있길래. |
| 121 | `after_miss_seoyeon_7` | {name} | school_hallway | seyoun_normal |  | 🌅 | *서연의 클립보드 맨 위에 내 이름이 남아 있다. 체크 |
| 122 | `after_miss_seoyeon_8` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 내일은 빠지지 마. |
| 123 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든 |
| 124 | `night_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄 |
| 125 | `night_start_3` | {name} | room_my | 없음 |  |  | *핸드폰이 울린다. 학교 메신저.* |
| 126 | `night_msg_dain_1` | 다인 | room_my | dain_normal | 0.35 |  | *가위바위보 리벤지 내일이다* |
| 127 | `night_msg_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | *내일은 리벤지다 ㅋㅋ* |
| 128 | `night_msg_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | *오늘 빵값 아직도 아깝다. 진짜.* |
| 129 | `night_msg_dain_4` | {name} | room_my | dain_normal | 0.35 |  | *세 줄이 거의 동시에 도착했다. 답장창에는 벌써 'ㅋ |
| 130 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 다른 알림이 보인다.* |
| 131 | `night_late_transition` | {name} | room_my | 없음 |  |  | *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시 |
| 132 | `night_late_branch` | {name} | room_my | 없음 |  |  | *화면이 밝아진다.* |
| 133 | `night_dain_late_1` | 다인 | room_my | dain_normal | 0.35 |  | *야 아직 안 잤지?* |
| 134 | `night_dain_late_2` | 다인 | room_my | dain_normal | 0.35 |  | *내일 아침 운동 같이 할 사람 구한다* |
| 135 | `night_dain_late_3` | 다인 | room_my | dain_normal | 0.35 |  | *거절은 안 받음 ㅋㅋ* |
| 136 | `night_dain_late_4` | {name} | room_my | dain_normal | 0.35 |  | *답장창에는 이미 '콜'이 찍혀 있다.* |
| 137 | `night_dain_late_4_b` | {name} | room_my | dain_normal | 0.35 |  | *다인의 메시지 아래에 이모티콘이 줄줄이 붙어 있다.  |
| 138 | `night_end_1` | {name} | room_my | 없음 |  |  | *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교 |
| 139 | `night_end_3` | {name} | room_my | 없음 |  |  | *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을  |
| | **Day 2** | | | | | | |
| 140 | `morning2_start` | {name} | room_school | 없음 |  |  | *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.* |
| 141 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 142 | `morning2_greet_dain_1` | 다인 | room_school | dain_laugh |  |  | 야! 어제 재밌었다, 오늘도 같이 뭐 하자! |
| 143 | `morning2_greet_dain_2` | 다인 | room_school | dain_laugh |  |  | *뒤에서 어깨를 탁 친다.* |
| 144 | `morning2_greet_dain_others` | 서연 | room_school | seyoun_normal |  |  | *클립보드를 넘기며 지나간다.* |
| 145 | `morning2_greet_dain_others_seo` | 서연 | room_school | seyoun_normal |  |  | 에너지 좋다. |
| 146 | `morning2_greet_dain_others_yuna` | {name} | room_school | yuna_bored |  |  | *유나의 펜촉이 쪽지 한가운데 잉크점을 남긴다.* |
| 147 | `morning2_greet_dain_others_2` | {name} | room_school | dain_laugh |  |  | *교실 문이 닫힌 뒤 클립보드 두드리는 소리가 복도에서 |
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
| 163 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *쉬는 시간. 복도로 나왔다.* |
| 164 | `morning2_break_1` | {name} | school_hallway | 없음 |  |  | *서연의 클립보드 끝이 책상에 톡 닿는다. 답할 틈도  |
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
| 180 | `lunch2_yuna_1` | {name} | yuna_hideout | yuna_normal |  |  | *본관보다 오래된 도서관 별관에는 학생이 거의 없다.  |
| 181 | `lunch2_yuna_intro_check` |  | yuna_hideout | yuna_normal |  |  |  |
| 182 | `lunch2_yuna_3` | 유나 | yuna_hideout | yuna_normal |  |  | 왔네. |
| 183 | `lunch2_yuna_4` | {name} | yuna_hideout | yuna_normal |  |  | 쪽지 받았거든. |
| 184 | `lunch2_yuna_5` | 유나 | yuna_hideout | yuna_normal |  |  | 안 올 수도 있었는데. |
| 185 | `lunch2_yuna_6` | {name} | yuna_hideout | yuna_normal |  |  | 왜? |
| 186 | `lunch2_yuna_7` | 유나 | yuna_hideout | yuna_normal |  |  | 시끄러운 애랑 같이 있길래. 그쪽이 더 재밌잖아. |
| 187 | `lunch2_yuna_8` | {name} | yuna_hideout | yuna_normal |  |  | 피난처가 필요할 때도 있어. |
| 188 | `lunch2_yuna_9` | 유나 | yuna_hideout | yuna_smile |  |  | *책장을 한 장 넘기고 맞은편 소파의 구겨진 쿠션을 손 |
| 189 | `lunch2_yuna_10` | 유나 | yuna_hideout | yuna_normal |  |  | 그래. |
| 190 | `lunch2_yuna_11` | 유나 | yuna_hideout | yuna_normal |  |  | *유나가 별관 안쪽으로 앞장선다. 발소리가 낮게 울리는 |
| 191 | `lunch2_yuna_13` | {name} | yuna_hideout | yuna_normal |  |  | 여기 뭐야? 비밀 독서실? |
| 192 | `lunch2_yuna_14` | 유나 | yuna_hideout | yuna_normal |  |  | 여기 아는 사람 거의 없어. |
| 193 | `lunch2_yuna_15` | 유나 | yuna_hideout | yuna_normal |  |  | *소파에 앉아 가방을 바닥에 내려놓고 한 칸을 비운다. |
| 194 | `lunch2_yuna_16` | 유나 | yuna_hideout | yuna_normal |  |  | 나랑 한 명 더 있었는데. |
| 195 | `lunch2_yuna_17` | {name} | yuna_hideout | yuna_normal |  |  | 있었는데? |
| 196 | `lunch2_yuna_17_b` | 유나 | yuna_hideout | yuna_normal |  |  | *책갈피 끝이 페이지 사이로 천천히 사라진다. 유나는  |
| 197 | `lunch2_yuna_choice` | {name} | yuna_hideout | yuna_normal |  |  | *'있었는데' 뒤에 말이 없다. 유나는 책갈피 끝을 책 |
| 198 | `lunch2_yuna_c2_1` | {name} | yuna_hideout | yuna_normal |  |  | *옆에 앉자 유나는 자기 책 더미에서 한 권을 꺼내 내 |
| 199 | `lunch2_yuna_c2_3` | 유나 | yuna_hideout | yuna_normal |  |  | 읽어. |
| 200 | `lunch2_yuna_c2_4` | {name} | yuna_hideout | yuna_normal |  |  | *책을 펼친다. 두 사람의 페이지가 번갈아 넘어가고 창 |
| 201 | `lunch2_yuna_c2_6` | 유나 | yuna_hideout | yuna_normal |  |  | 여기가 좋은 이유. |
| 202 | `lunch2_yuna_c2_7` | {name} | yuna_hideout | yuna_normal |  |  | 응? |
| 203 | `lunch2_yuna_c2_8` | 유나 | yuna_hideout | yuna_normal |  |  | 조용해서. — 근데 혼자가 아니어서. |
| 204 | `lunch2_yuna_c2_9` | 유나 | yuna_hideout | yuna_normal |  |  | *책장 쪽으로 돌아서지만 책은 한동안 같은 페이지에 열 |
| 205 | `lunch2_yuna_end` | {name} | yuna_hideout | yuna_normal |  |  | *문을 닫기 전 돌아보자 유나는 '있었는데'에서 멈춘  |
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
| 232 | `after2_dain_end` | {name} | store | dain_laugh |  | 🌅 | *다인이 떡볶이 컵을 내 쪽으로 밀어 두고 자기 몫 젓 |
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
| 243 | `after2_dain_rival_seo_check` |  | store | 없음 |  | 🌅 |  |
| 244 | `after2_dain_rival_seo_low` | {name} | store | seyoun_normal |  | 🌅 | *서연이 가게 앞을 지나며 두 사람에게 고개를 숙인다. |
| 245 | `after2_dain_rival_yuna_check` |  | store | 없음 |  | 🌅 |  |
| 246 | `after2_dain_rival_yuna_mid` | {name} | store | yuna_normal |  | 🌅 | *가게 앞을 지나던 유나가 이어폰 한쪽을 빼려다 테이블 |
| 247 | `after2_dain_return` | {name} | school | dain_shy |  | 🌅 | *학교로 돌아오는 길. 교문 앞에 다다랐다.* |
| 248 | `after2_group_dain_companion` | 다인과 동행 | gym | 없음 |  | 🌅 | *체육관과 별관에서 들은 설명이 서로 어긋난다. 다인이 |
| 249 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.* |
| 250 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 251 | `night2_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저  |
| 252 | `night2_msg_1` | {name} | room_my | 없음 |  |  | *세 명에게서 메시지가 왔다.* |
| 253 | `night2_msg_dain_specific` | 다인 | room_my | dain_normal | 0.35 |  | 야, 오늘 떡볶이 맛있었다. |
| 254 | `night2_msg_dain_specific_2` | 다인 | room_my | dain_normal | 0.35 |  | 내일도 내기하자. 종목 바꿔서. |
| 255 | `night2_msg_seo_general` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 점심에 옥상 열어놓을게. 와 |
| 256 | `night2_msg_yuna_general` | 유나 | room_my | yuna_normal | 0.35 |  | 내일 별관 올 거야? |
| 257 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에  |
| 258 | `night2_choice` | {name} | room_my | 없음 |  |  | *누구에게 먼저 답장할까?* |
| 259 | `night2_reply_yuna_1` | {name} | room_my | yuna_normal | 0.35 |  | 아직 반 정도. 재밌어 |
| 260 | `night2_reply_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | 다행이네 |
| 261 | `night2_reply_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *답장창이 한동안 비어 있다. 그러다 새 말풍선이 올라 |
| 262 | `night2_reply_yuna_4` | 유나 | room_my | yuna_normal | 0.35 |  | 아까 재생목록. 세 번째 곡도 들어봐 |
| 263 | `night2_reply_yuna_5` | {name} | room_my | yuna_normal | 0.35 |  | *유나가 공유한 재생목록을 다시 연다. 세 번째 곡은  |
| 264 | `night2_reply_yuna_6` | 유나 | room_my | yuna_normal | 0.35 |  | 끝까지 들어봐 |
| 265 | `night2_reply_yuna_6_b` | {name} | room_my | yuna_normal | 0.35 |  | *이어폰을 끼고 재생 버튼을 누른다. 피아노 뒤로 낮은 |
| 266 | `night2_reply_yuna_6_c` | {name} | room_my | yuna_normal | 0.35 |  | *곡이 끝나고 재생 화면의 진행 바가 마지막 칸에 멈춘 |
| 267 | `night2_reply_yuna_7` | {name} | room_my | yuna_normal | 0.35 |  | *재생목록 제목 아래에 유나가 남긴 짧은 메모가 보인다 |
| 268 | `night2_reply_yuna_react_default` | 유나 | room_my | yuna_normal | 0.35 |  | 응. 잘 자. |
| 269 | `night2_yuna_freetalk` | 유나 | room_my | yuna_normal | 0.35 | 🌙 | 잠깐. 아직 깨어 있으면... 조금만 더 얘기할래? |
| 270 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 또 다른 알림이 보인다.* |
| 271 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 보내고 핸드폰을 내려놓았다.* |
| 272 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이,  |
| 273 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 |
| 274 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *메모장에 줄줄이 남은 보내지 않은 문장. '선생님,  |
| 275 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 메모가 마지막이다. 그 아래 39번째에는 제 |
| 276 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 |
| 277 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로 |
| 278 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보 |
| 279 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화 |
| 280 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 |
| 281 | `night2_end_2_b` | {name} | room_my | 없음 |  |  | *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있 |
| 282 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.* |
| 283 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을  |
| 284 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 |
| | **Day 3** | | | | | | |
| 285 | `morning3_start` | {name} | school | 없음 |  |  | *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯 |
| 286 | `morning3_start_2` | {name} | school | 없음 |  |  | *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군 |
| 287 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 288 | `morning3_dain_gate_1` | {name} | school | dain_normal |  |  | *교문 근처에서 다인이 전력으로 달려온다.* |
| 289 | `morning3_dain_gate_cold_1` | 다인 | school | dain_normal |  |  | *다른 친구들과 뛰어간다.* |
| 290 | `morning3_dain_gate_cold_2` | 다인 | school | dain_normal |  |  | 어, 안녕! |
| 291 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실에 들어서자 서연의 펜이 멈추고 다인의 의자가 뒤 |
| 292 | `morning3_react_dain_1` | 서연 | room_school | seyoun_normal |  |  | 아침부터 체력 소모가 심하네. 점심에 도시락 줄까? |
| 293 | `morning3_react_dain_2` | 유나 | room_school | yuna_normal |  |  | *고개를 들지 않은 채 종이 귀퉁이에 짧은 선을 긋는다 |
| 294 | `morning3_date_intro` | {name} | room_school | 없음 |  |  | *1교시가 끝났다. 쉬는 시간마다 누군가 말을 건다.* |
| 295 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *쉬는 시간, 복도로 나왔다. 서연이 먼저 걸음을 맞춘 |
| 296 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | 이번 주말에 시간 있어? 공원에 같이 가자. |
| 297 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끈다. 눈이 마주치 |
| 298 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼  |
| 299 | `morning3_date_dain_2` | 다인 | room_school | dain_normal |  |  | *서연이 아직 교실 문 앞에 서 있다. 다인은 이쪽을  |
| 300 | `morning3_date_dain_choice` | 다인 | room_school | dain_normal |  |  | *서연의 발소리가 멎는다. 다인은 대답을 기다린다.* |
| 301 | `morning3_date_dain_accept` | {name} | room_school | dain_laugh |  |  | *다인과 주말 약속을 잡았다. 다인이 웃자 복도에서 서 |
| 302 | `morning3_date_dain_decline_narr` | 다인 | room_school | dain_laugh |  |  | *다인은 웃으며 자기 자리로 돌아간다. 종이 치기 직전 |
| 303 | `morning3_date_dain_decline_inner_2` | {name} | room_school | dain_laugh |  |  | *다인이 자리로 돌아간 뒤, 종이 치기 직전의 교실만  |
| 304 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다 |
| 305 | `morning3_date_yuna_1_b` | 서연 | room_school | seyoun_normal |  |  | 유나. 쪽지로 물으면 다른 사람은 못 듣잖아. |
| 306 | `morning3_date_yuna_2` | {name} | room_school | yuna_normal |  |  | *'주말. 헌책방. 먼저 잡힌 약속이 있어도, 네가 오 |
| 307 | `morning3_date_yuna_choice` | {name} | room_school | yuna_normal |  |  | *쪽지를 읽는 동안 유나는 서연과 다인을 차례로 본다. |
| 308 | `morning3_date_yuna_accept` | {name} | room_school | yuna_shy |  |  | *쪽지 뒷면에 '갈게'라고 적는다. 유나가 종이를 접는 |
| 309 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 310 | `morning3_multi_from_dain` |  | room_school | 없음 |  |  |  |
| 311 | `morning3_set_multiple` | {name} | room_school | 없음 |  |  | *주말 일정이 겹친다. 캘린더 칸이 세 개로 나뉘어 있 |
| 312 | `morning3_end` | {name} | room_school | 없음 |  |  | *수업 종료 종이 울리고 곧 점심시간이 된다.* |
| 313 | `morning3_end_b` | 유나 | room_school | yuna_normal |  |  | 맛있네. |
| 314 | `lunch3_start` | {name} | room_school | yuna_normal |  |  | *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. |
| 315 | `lunch3_start_2_b` | 다인 | room_school | dain_normal |  |  | *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가 |
| 316 | `lunch3_meal_1` | 다인 | room_school | dain_laugh |  |  | 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고  |
| 317 | `lunch3_meal_2` | {name} | room_school | dain_laugh |  |  | 그건 내 거... |
| 318 | `lunch3_meal_3` | 서연 | room_school | seyoun_normal |  |  | 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점 |
| 319 | `lunch3_meal_4` | {name} | room_school | seyoun_normal |  |  | 점수 매기지 마. |
| 320 | `lunch3_meal_5` | 서연 | room_school | seyoun_normal |  |  | 10점 만점이야. 나쁜 거 아닌데? |
| 321 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다 |
| 322 | `lunch3_meal_7` | {name} | room_school | seyoun_normal |  |  | 유나, 그건 내가 제일 좋아하는 건데. |
| 323 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임 |
| 324 | `lunch3_meal_8` | {name} | room_school | yuna_bored |  |  | *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다. |
| 325 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. |
| 326 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓 |
| 327 | `lunch3_meal_10_d` | 다인 | room_school | dain_laugh |  |  | *"다 같이?" 다인은 웃지만 의자를 당기지 않는다.* |
| 328 | `lunch3_meal_11` | {name} | room_school | yuna_bored |  |  | *누구에게 줄까?* |
| 329 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *마지막 반찬을 누구에게 줄지 고민한다.* |
| 330 | `lunch3_give_yuna_1` | 유나 | room_school | yuna_normal |  |  | 고마워. |
| 331 | `lunch3_yuna_skin_check` |  | room_school | yuna_normal |  |  |  |
| 332 | `lunch3_give_yuna_2_check` |  | room_school | 없음 |  |  |  |
| 333 | `lunch3_give_yuna_2` | 서연 | room_school | seyoun_pout |  |  | 나한테 줄 줄 알았는데. |
| 334 | `lunch3_yuna_witness_1` | 서연 | room_school | seyoun_normal |  |  | 도서관에서 도시락 냄새 났다더라. 유나랑 있었어? |
| 335 | `lunch3_yuna_witness_2` | {name} | room_school | seyoun_normal |  |  | *유나는 컵 옆면을 손가락으로 한 번 두드리고 서연을  |
| 336 | `lunch3_give_yuna_3` | 다인 | room_school | dain_pout |  |  | 뭐야, 나는? |
| 337 | `lunch3_expose_1` | {name} | room_school | dain_laugh |  |  | *그때 다인이 먼저 입을 연다.* |
| 338 | `lunch3_expose_2` | 다인 | room_school | dain_laugh |  |  | 아 맞다. {name}, 주말에 나랑 오락실 가기로 했 |
| 339 | `lunch3_expose_3` | {name} | room_school | dain_laugh |  |  | *대답을 고르는 사이, 나머지 두 사람의 젓가락이 도시 |
| 340 | `lunch3_expose_4` | {name} | room_school | dain_laugh |  |  | *서연의 젓가락 끝이 도시락 가장자리를 누르고 유나는  |
| 341 | `lunch3_expose_5` | 서연 | room_school | seyoun_sad |  |  | 오락실? |
| 342 | `lunch3_expose_6` | 서연 | room_school | seyoun_sad |  |  | 나한테는 같이 갈 데가 있다고 했는데. |
| 343 | `lunch3_expose_7` | 다인 | room_school | dain_pout |  |  | 잠깐. 나한테도 주말에 같이 놀자고 했는데? |
| 344 | `lunch3_expose_7_b` | {name} | room_school | dain_pout |  |  | *유나는 빵을 내려놓고 봉지 입구를 접는다.* |
| 345 | `lunch3_expose_9` | 유나 | room_school | yuna_normal |  |  | 알고 있었어. |
| 346 | `lunch3_expose_10` | {name} | room_school | yuna_normal |  |  | *젓가락 하나가 도시락 뚜껑에 부딪힌다. 누구도 집어  |
| 347 | `lunch3_expose_11` | 유나 | room_school | yuna_sad |  |  | 거짓말. 나도 몰랐어. |
| 348 | `lunch3_expose_12` | {name} | room_school | yuna_sad |  |  | *젓가락 세 쌍이 도시락 위에 놓인다. 옆 테이블의 민 |
| 349 | `lunch3_expose_14` | 민수 | room_school | minsu_smirk |  |  | 야. 너 진짜 미쳤냐. |
| 350 | `lunch3_expose_15` | {name} | room_school | minsu_smirk |  |  | *입술만 달싹인다. 민수는 손에 든 젓가락을 내려놓는다 |
| 351 | `lunch3_expose_choice` | {name} | room_school | seyoun_angry |  |  | *뭐라고 해야 하지.* |
| 352 | `lunch3_expose_excuse_1` | {name} | room_school | seyoun_angry |  |  | 시간대가 다르니까 괜찮지 않을까? |
| 353 | `lunch3_expose_excuse_2` | 서연 | room_school | seyoun_angry |  |  | 그게 문제라는 걸 모르겠어? |
| 354 | `lunch3_expose_excuse_2_b` | 다인 | room_school | dain_sad |  |  | *다인이 의자를 뒤로 밀고 가방을 든다.* |
| 355 | `lunch3_expose_excuse_3` | 다인 | room_school | dain_sad |  |  | 나도 좀 생각할 시간 줘. |
| 356 | `lunch3_expose_excuse_4` | 다인 | room_school | dain_sad |  |  | *다인은 포장도 뜯지 않은 소보로를 가방에 밀어 넣는다 |
| 357 | `lunch3_end` | {name} | room_school | 없음 |  |  | *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다 |
| 358 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육 |
| 359 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다 |
| 360 | `after3_multi_choice` | {name} | school_hallway | 없음 |  | 🌅 | *약속이 겹쳤다. 핸드폰에는 서연의 메시지와 다인의 부 |
| 361 | `after3_choice` | {name} | school_hallway | 없음 |  | 🌅 | *어디로 갈까.* |
| 362 | `after3_walk_home` | {name} | school_hallway | 없음 |  | 🌅 | *잡힌 약속은 없다. 휴대폰을 가방에 넣고 교문 쪽으로 |
| 363 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.* |
| 364 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 365 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 366 | `minsu_d3_check` | {name} | school | 없음 |  | 🌅 |  |
| 367 | `minsu_d3_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문 앞에 민수가 서 있다.* |
| 368 | `minsu_d3_2` | 민수 | school | 없음 |  | 🌅 | 봤다. |
| 369 | `minsu_d3_3` | 민수 | school | 없음 |  | 🌅 | 점심때. 그리고 방금 서연 표정도. |
| 370 | `minsu_d3_4` | 민수 | school | 없음 |  | 🌅 | 어제 내가 뭐랬냐. 나중에 셋 다 울면 네 탓이라고 했 |
| 371 | `minsu_d3_5` | 민수 | school | 없음 |  | 🌅 | 옆에서 보기 좀 힘들다. 걔들 다 좋은 애들이야. 네가 |
| 372 | `minsu_d3_5b` | 민수 | school | 없음 |  | 🌅 | *민수는 빨대 포장지를 끝까지 접어 테이블 위에 내려놓 |
| 373 | `minsu_d3_6` | {name} | school | 없음 |  | 🌅 | 맞아. |
| 374 | `minsu_d3_6b` | 민수 | school | 없음 |  | 🌅 | 전 학교에서 뭔 일 있었는지 안 물어볼게. 근데 하나만 |
| 375 | `minsu_d3_7` | 민수 | school | 없음 |  | 🌅 | 거절도 배려야. 안 되는 관계에 계속 여지 주는 것보다 |
| 376 | `minsu_d3_8` | {name} | school | 없음 |  | 🌅 | *거절도 배려다. 전 학교에서 나는 소정이에게 고백할  |
| 377 | `minsu_d3_9` | 민수 | school | 없음 |  | 🌅 | *민수는 더 말하지 않고 끝까지 접은 빨대 포장지를 내 |
| 378 | `minsu_d3_10` | 민수 | school | 없음 |  | 🌅 | 내일 학교에서 보자. 진지하게 생각해. |
| 379 | `night3_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 가방을 의자에 걸어 둔다.* |
| 380 | `night3_start_2` | {name} | room_my | 없음 |  |  | *책상 위에 엎어 둔 핸드폰 화면을 켠다.* |
| 381 | `night3_cheat_msg_1` | {name} | room_my | 없음 |  |  | *방에 돌아오자마자 핸드폰 화면을 켠다.* |
| 382 | `night3_cheat_msg_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 나한테만 그래줘 |
| 383 | `night3_cheat_msg_3` | 서연 | room_my | seyoun_normal | 0.35 |  | 부탁이야 |
| 384 | `night3_cheat_msg_3_b` | 서연 | room_my | seyoun_normal | 0.35 |  | *'부탁'을 쓴 뒤 한참 동안 다음 글자가 이어지지 않 |
| 385 | `night3_cheat_msg_4` | 유나 | room_my | yuna_normal | 0.35 |  | 다 알고 있었어 |
| 386 | `night3_cheat_msg_4_b` | 유나 | room_my | yuna_normal | 0.35 |  | *나도, 걔들도 예비 자리는 싫어.* |
| 387 | `night3_cheat_msg_5` | 유나 | room_my | yuna_normal | 0.35 |  | *내일은 누구한테 갈 건지 정해* |
| 388 | `night3_cheat_msg_6` | 유나 | room_my | yuna_normal | 0.35 |  | 피하지 마. 그것만 |
| 389 | `night3_cheat_msg_dain_1` | 다인 | room_my | dain_normal | 0.35 |  | ㅋㅋ 농담이었으면 좋겠다 |
| 390 | `night3_cheat_msg_7` | 유나 | room_my | dain_normal | 0.35 |  | *유나에게서 말풍선 세 개가 연달아 올라온다.* |
| 391 | `night3_nightmare_1` | {name} | room_my | 없음 |  |  | *불을 끄고 누웠지만 잠이 오지 않는다. 휴대폰 화면만 |
| 392 | `night3_nightmare_2_b` | {name} | room_my | seyoun_sad |  |  | *서연의 대화방을 연다. 마지막 말은 '부탁이야'. 그 |
| 393 | `night3_nightmare_3` | 서연 | room_my | seyoun_sad |  |  | 지금 답하라는 건 아니야. 대신 내일은 피해 가지 마. |
| 394 | `night3_nightmare_3_b` | {name} | room_my | yuna_sad |  |  | *유나가 보낸 세 줄 아래에는 읽음 표시만 붙어 있다. |
| 395 | `night3_nightmare_4` | {name} | room_my | yuna_sad |  |  | *마지막 말풍선에는 '피하지 마. 그것만.'이라고 적혀 |
| 396 | `night3_nightmare_4_b` | {name} | room_my | dain_sad |  |  | *다인의 대화방에는 웃음 표시가 붙은 문장 하나만 와  |
| 397 | `night3_nightmare_5` | {name} | room_my | dain_sad |  |  | *'농담이었으면 좋겠다.' 그 뒤로 새 메시지는 없다. |
| 398 | `night3_nightmare_6` | {name} | room_my | 없음 |  |  | *세 대화방을 차례로 열었다 닫는다. 입력창마다 다른  |
| 399 | `night3_nightmare_choice` | {name} | room_my | 없음 |  |  | *내일 누구에게 먼저 솔직하게 말할까.* |
| 400 | `night3_nightmare_dain` | {name} | room_my | 없음 |  |  | *다인의 입력창에 '기다리게 해서 미안해. 내일 말할게 |
| 401 | `night3_nightmare_end` | {name} | room_my | 없음 |  |  | *입력창 하나에 문장이 남고 나머지 두 대화방은 닫힌다 |
| 402 | `night3_nightmare_end_3` | {name} | room_my | 없음 |  |  | *새벽 3시까지 잠들지 못한 채 메시지 창을 닫고 갤러 |
| 403 | `night3_cheat_reflect_2` | {name} | room_my | 없음 |  |  | *단체 사진 속 소정이는 카메라를 보고 있다. 그 옆의 |
| 404 | `night3_cheat_reflect_3_b` | {name} | room_my | 없음 |  |  | *사진을 닫고 메시지 목록으로 돌아온다. 조금 전 쓴  |
| 405 | `night3_cheat_reflect_3_c` | {name} | room_my | 없음 |  |  | *메시지 목록을 훑는다. 세 이름 옆에 서로 다른 마지 |
| 406 | `night3_cheat_reflect_3_d` | {name} | room_my | 없음 |  |  | *민수와의 대화방에는 '미룬다고 없어지는 일 아님'이라 |
| 407 | `night3_cheat_reflect_3_e` | {name} | room_my | 없음 |  |  | *세 대화방을 위에서부터 다시 읽는다. 어느 쪽도 닫지 |
| 408 | `night3_cheat_reflect_5` | {name} | room_my | 없음 |  |  | *보내기 버튼에서 손을 떼고 휴대폰을 뒤집어 놓는다.  |
| 409 | `night3_nightmare_end_4` | {name} | room_my | 없음 |  |  | *알람 이름을 '내일 답하기'로 바꾼다.* |
| 410 | `night3_end` | {name} | room_my | 없음 |  |  | *방 불을 끄고 핸드폰을 엎어 둔다.* |
| | **Day 4** | | | | | | |
| 411 | `morning4_start` | {name} | room_my | 없음 |  |  | *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다 |
| 412 | `morning4_nightmare_check` |  | room_my | 없음 |  |  |  |
| 413 | `morning4_nightmare_dain` | {name} | room_my | 없음 |  |  | *알람이 울린다. 핸드폰 화면에 다인의 메시지가 떠 있 |
| 414 | `morning4_nightmare_after` | {name} | room_my | 없음 |  |  | *알림을 다시 확인한다.* |
| 415 | `minsu_cheer_1` | {name} | room_my | 없음 |  |  | *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.* |
| 416 | `minsu_cheer_1_b` | 민수 | room_my | minsu_normal | 0.35 |  | *야 오늘 데이트라며?* |
| 417 | `minsu_cheer_1_c` | {name} | room_my | minsu_normal | 0.35 |  | *어떻게 알았어* |
| 418 | `minsu_cheer_1_d` | 민수 | room_my | minsu_normal | 0.35 |  | *다인이가 단톡방에 올림. 내일 약속 있음, 이라고* |
| 419 | `minsu_cheer_2` | 민수 | room_my | minsu_normal | 0.35 |  | 잘하고 와ㅋㅋ |
| 420 | `minsu_cheer_3` | {name} | room_my | minsu_normal | 0.35 |  | 알아. |
| 421 | `minsu_cheer_4_branch` |  | room_my | 없음 |  |  |  |
| 422 | `minsu_cheer_4_c` | {name} | room_my | minsu_normal | 0.35 |  | *핸드폰 캘린더를 연다. 오전 서연, 오후 유나, 저녁 |
| 423 | `minsu_cheer_4_d` | {name} | room_my | minsu_normal | 0.35 |  | *세 사람의 이름이 한 화면에 놓인다. 캘린더를 잠갔다 |
| 424 | `minsu_cheer_4_e` | {name} | room_my | minsu_normal | 0.35 |  | *세 약속 사이의 이동 시간을 다시 계산하고 캘린더 알 |
| 425 | `morning4_start_2` | {name} | room_my | 없음 |  |  | *심호흡하고 약속 메시지를 다시 확인한다.* |
| 426 | `morning4_fallback_msg` | {name} | room_my | 없음 |  |  | *주말 아침. 알림 몇 개를 확인하고 핸드폰을 내려놓는 |
| 427 | `morning4_hidden_check` | {name} | room_my | 없음 |  |  | *주말 아침, 학교 앞 사거리에서 신호를 기다린다.* |
| 428 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 429 | `morning4_end` | {name} | room_my | 없음 |  |  | *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 |
| 430 | `day4_caught_fallout_1` | {name} | room_my | 없음 |  |  | *휴대폰 화면에 세 대화방이 나란히 떠 있다. 전날 보 |
| 431 | `day4_caught_fallout_2` | 서연 | room_my | seyoun_sad | 0.35 |  | 당분간 따로 연락하지 마. 필요한 얘기는 단체방에서 할 |
| 432 | `day4_caught_fallout_3` | {name} | room_my | 없음 |  |  | *잠시 뒤 유나가 대화방을 나가고 다인은 약속 일정을  |
| 433 | `day4_caught_fallout_4` | {name} | room_my | 없음 |  |  | *밖으로 나가지 않는다. 해가 기울 때까지 단체방 알림 |
| | **Day 5** | | | | | | |
| 434 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소 |
| 435 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 436 | `morning5_caught_fallout_1` | {name} | room_school | 없음 |  |  | *행사 시작 전 교실. 세 사람의 자리는 서로 떨어져  |
| 437 | `morning5_caught_fallout_2` | {name} | room_school | 없음 |  |  | *유나는 안내 책자를 들고 먼저 나가고 다인은 반대편  |
| 438 | `morning5_caught_fallout_3` | {name} | school_hallway | 없음 |  |  | *행사가 끝날 때까지 셋과 나눈 말은 업무 확인뿐이다. |
| 439 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 440 | `day5_ending_mayhem` | {name} | ending_mayhem | 없음 |  |  | *세 대화방이 모두 읽음으로 멈춰 있다. 답장을 쓰려다 |
| 441 | `mayhem_1` | 서연 | ending_mayhem | 없음 |  |  | *복도에서 {name}을 스쳐 지나간다. 고개를 돌리지 |
| 442 | `mayhem_2` | {name} | ending_mayhem | yuna_normal | 0.35 |  | *유나의 자리가 비어 있었다. 책상 위에 쪽지 한 장. |
| 443 | `mayhem_3` | 다인 | ending_mayhem | 없음 |  |  | *입꼬리를 올리지만 눈은 마주치지 않는다.* "잘 지내 |
| 444 | `mayhem_4` | {name} | ending_mayhem | 없음 |  |  | *세 사람의 등을 봤다. 셋 다 돌아보지 않았다.* |
| 445 | `mayhem_5` | {name} | ending_mayhem | 없음 |  |  | *봄비가 지난 교문 바닥에 벚꽃잎이 눌어붙어 있다. 나 |
| 446 | `mayhem_6` | {name} | ending_mayhem | 없음 |  |  | *대화방마다 읽지 않은 질문이 쌓여 있다.* |
| 447 | `mayhem_7` | {name} | ending_mayhem | 없음 |  |  | *소정이 사진 아래에 있던 미전송 메모를 본다. 보낸  |
| 448 | `mayhem_8` | 시스템 | ending_mayhem | 없음 |  |  | ─── MAYHEM END ─── |
| 449 | `day5_credits` |  | school | 없음 |  |  |  |
| 450 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

## 씬 커버리지

- 전체: 3016개
- 방문: 1963개 (65.1%)
- 미방문: 1054개

**미방문 씬:**
- Day 1: lunch_seo_c2_1, lunch_seo_c2_2, lunch_seo_c2_3, after1_jealousy_seo_lie, after1_jealousy_seo_lie_2, after_dain_skip, after_yuna_skip, after_homeroom_honest_choice2a, after_homeroom_honest_choice2a_b, after_nurse_enter_choice_b, after_nurse_enter_11_h, after_nurse_enter_11_i, after_nurse_skip, night_yuna_late_1, night_yuna_late_2, night_yuna_late_3, night_yuna_late_4, forced_violation_day1_after_seoyeon, forced_violation_day1_seoyeon_apologize, forced_violation_day1_seoyeon_excuse, forced_violation_day1_after_yuna, forced_violation_day1_yuna_apologize, forced_violation_day1_yuna_excuse, forced_violation_day1_after_dain, forced_violation_day1_dain_apologize, forced_violation_day1_dain_excuse, forced_violation_day1_after_teacher, forced_violation_day1_teacher_apologize, forced_violation_day1_teacher_excuse, forced_violation_day1_after_nurse, forced_violation_day1_nurse_apologize, forced_violation_day1_nurse_excuse, forced_violation_day1_resume
- Day 2: morning2_greet_seo_1_gate, morning2_greet_yuna_1, morning2_greet_yuna_2, morning2_greet_yuna_others, morning2_greet_yuna_others_seo, morning2_greet_yuna_others_dain, morning2_greet_yuna_others_2, morning2_break_transition_b, hidden_homeroom_d2_choice1_trap, hidden_homeroom_d2_choice2_b, lunch2_seo_2b, lunch2_seo_trap_1, lunch2_dain_1b, lunch2_dain_1b_seo, lunch2_dain_2b_seo, lunch2_dain_3b_seo, lunch2_dain_4b_seo, lunch2_dain_3b, lunch2_dain_4b, lunch2_yuna_trap_compare, after2_dain_skinship_1, after2_dain_skinship_2, after2_dain_skinship_3, after2_dain_rival_seo_high, after2_dain_rival_yuna_high, after2_seo_neck_high, after2_seo_neck_high_b, after2_seo_neck_high_c, after2_seo_neck_high_2, after2_seo_neck_high_2_b, after2_seo_rival_dain_high, after2_seo_rival_yuna_high, after2_seo_rival_yuna_mid, after2_yuna_quiet, after2_yuna_quiet_react, after2_yuna_skinship_1, after2_yuna_skinship_2, after2_yuna_skinship_3, after2_yuna_rival_dain_high, after2_yuna_rival_dain_mid, after2_yuna_rival_seo_high, after2_yuna_rival_seo_mid, night2_msg_generic, night2_msg_generic_2, night2_msg_generic_3, night2_reply_dain_react_high, night2_reply_yuna_react_high, forced_violation_day2_after_seoyeon, forced_violation_day2_seoyeon_apologize, forced_violation_day2_seoyeon_excuse, forced_violation_day2_after_yuna, forced_violation_day2_yuna_apologize, forced_violation_day2_yuna_excuse, forced_violation_day2_after_dain, forced_violation_day2_dain_apologize, forced_violation_day2_dain_excuse, forced_violation_day2_after_teacher, forced_violation_day2_teacher_apologize, forced_violation_day2_teacher_excuse, forced_violation_day2_after_nurse, forced_violation_day2_nurse_apologize, forced_violation_day2_nurse_excuse, forced_violation_day2_resume
- Day 3: morning3_seo_gate_warm_1, morning3_seo_gate_warm_2, morning3_seo_gate_warm_3, morning3_seo_gate_warm_4, morning3_seo_gate_2, morning3_seo_gate_3, morning3_seo_gate_4, morning3_seo_gate_5, morning3_seo_gate_6, morning3_seo_gate_6_b, morning3_seo_gate_7, morning3_yuna_gate_1, morning3_yuna_gate_warm_1, morning3_yuna_gate_warm_2, morning3_yuna_gate_warm_3, morning3_yuna_gate_warm_4, morning3_yuna_gate_2, morning3_yuna_gate_3, morning3_yuna_gate_4, morning3_yuna_gate_5, morning3_yuna_gate_6, morning3_yuna_gate_6_b, morning3_yuna_gate_7, morning3_yuna_gate_cold_1, morning3_yuna_gate_cold_2, morning3_dain_gate_warm_1, morning3_dain_gate_warm_2, morning3_dain_gate_warm_3, morning3_react_yuna_1, morning3_react_yuna_1_b, morning3_react_yuna_2, morning3_react_yuna_2_b, hidden_nurse_d3_2_b, hidden_nurse_d3_2_c, hidden_nurse_d3_2_d, hidden_nurse_d3_2_e, hidden_nurse_d3_choice1_c, hidden_nurse_d3_choice2_b, morning3_date_dain_decline, hidden_homeroom_d3_low, morning3_date_yuna_low, lunch3_seo_witness_1, lunch3_seo_witness_choice, lunch3_seo_chase_dain_1, lunch3_seo_chase_dain_2, lunch3_seo_chase_dain_2b, lunch3_seo_focus_1, lunch3_seo_focus_2, lunch3_give_seo_yuna_mid, lunch3_dain_skin_1, lunch3_dain_skin_3, lunch3_give_dain_seo_mid, lunch3_give_dain_yuna_mid, lunch3_yuna_skin_1, lunch3_yuna_skin_2, lunch3_yuna_skin_3, lunch3_give_yuna_seo_mid, after3_rival_seo_high, after3_rival_seo_mid, after3_rival_dain_high, after3_rival_yuna_high, after3_seo_1, after3_seo_3, after3_seo_4, after3_seo_5, after3_seo_5_b, after3_seo_6, after3_seo_7, after3_seo_7_b, after3_seo_8, after3_seo_9, after3_seo_choice, after3_seo_pity_trap_1, after3_seo_pity_trap_2, after3_seo_pity_trap_3, after3_seo_pity_trap_4, after3_seo_pity_trap_5, after3_seo_pity_trap_6, after3_seo_pity_trap_7, after3_seo_pity_trap_8, after3_seo_pity_trap_9, after3_seo_pity_trap_10, after3_seo_correct_1, after3_seo_correct_2, after3_seo_correct_3, after3_seo_correct_4, after3_seo_correct_5, after3_seo_correct_6, after3_seo_correct_7, after3_seo_correct_8, after3_seo_correct_9, after3_seo_correct_10, after3_seo_correct_11, after3_seo_correct_12, after3_seo_freetalk, after3_yuna_1, after3_yuna_2, after3_yuna_4, after3_yuna_5_b, after3_yuna_6, after3_yuna_7, after3_yuna_8, after3_yuna_8b, after3_yuna_9, after3_yuna_choice, after3_yuna_decode_trap_1, after3_yuna_decode_trap_2, after3_yuna_decode_trap_3, after3_yuna_decode_trap_4, after3_yuna_decode_trap_5, after3_yuna_decode_trap_6, after3_yuna_decode_trap_7, after3_yuna_decode_trap_8, after3_yuna_decode_trap_9, after3_yuna_decode_trap_10, after3_yuna_decode_trap_11, after3_yuna_correct_1, after3_yuna_correct_2, after3_yuna_correct_3, after3_yuna_correct_4, after3_yuna_correct_5, after3_yuna_correct_6, after3_yuna_correct_7, after3_yuna_correct_8, after3_yuna_correct_9, after3_yuna_correct_10, after3_yuna_correct_11, after3_yuna_correct_12, after3_yuna_freetalk, after3_dain_1, after3_dain_3, after3_dain_4, after3_dain_5, after3_dain_5_b, after3_dain_6, after3_dain_choice, after3_dain_pity_trap_1, after3_dain_pity_trap_2, after3_dain_pity_trap_3, after3_dain_pity_trap_4, after3_dain_pity_trap_5, after3_dain_pity_trap_6, after3_dain_pity_trap_7, after3_dain_pity_trap_8, after3_dain_pity_trap_9, after3_dain_pity_trap_10, after3_dain_correct_1, after3_dain_correct_2, after3_dain_correct_3, after3_dain_correct_4, after3_dain_correct_5, after3_dain_correct_6, after3_dain_correct_7, after3_dain_correct_8, after3_dain_correct_9, after3_dain_correct_10, after3_dain_correct_11, after3_dain_correct_12, after3_dain_dilemma_tell, after3_dain_dilemma_tell_2, after3_dain_dilemma_tell_3, after3_dain_dilemma_tell_4, after3_dain_dilemma_tell_5, after3_dain_dilemma_tell_6, after3_dain_dilemma_tell_7, after3_dain_dilemma_tell_8, after3_dain_dilemma_final, after3_dain_tell_confirm, after3_dain_tell_confirm_2, after3_dain_tell_confirm_3, after3_dain_tell_retreat, after3_dain_choice1, after3_dain_choice1_2, after3_dain_choice1_3, after3_dain_choice1_react, after3_dain_choice1_react2, after3_dain_choice1_react3, after3_dain_freetalk, after3_dain_end_check, after3_dain_end, haeun_warn_1, haeun_warn_1_b, haeun_warn_2, haeun_warn_2_b, haeun_warn_2b, haeun_warn_3, haeun_warn_3_b, haeun_warn_3_c, haeun_warn_4, haeun_warn_4b, haeun_warn_5, haeun_warn_5b, haeun_warn_5c, haeun_warn_5c_b, haeun_warn_6, haeun_warn_6_b, haeun_warn_7, haeun_warn_7_b, haeun_warn_7_c, haeun_freetalk, haeun_affinity_check, haeun_affinity_high_1, haeun_affinity_high_2, haeun_affinity_neutral_1, haeun_affinity_neutral_2, haeun_affinity_low_1, haeun_affinity_low_2, haeun_warn_7_d, haeun_warn_8, haeun_warn_8b, night3_faithful_msg_seo_1, night3_faithful_msg_seo_2, night3_faithful_msg_seo_3, night3_faithful_msg_yuna_1, night3_faithful_msg_yuna_2, night3_faithful_msg_yuna_2_b, night3_faithful_msg_dain_1, night3_faithful_msg_dain_2, night3_faithful_msg_dain_3, night3_dream_seo_bonus, night3_dream_yuna_bonus, night3_dream_dain_bonus, forced_violation_day3_after_seoyeon, forced_violation_day3_seoyeon_apologize, forced_violation_day3_seoyeon_excuse, forced_violation_day3_after_yuna, forced_violation_day3_yuna_apologize, forced_violation_day3_yuna_excuse, forced_violation_day3_after_dain, forced_violation_day3_dain_apologize, forced_violation_day3_dain_excuse, forced_violation_day3_after_teacher, forced_violation_day3_teacher_apologize, forced_violation_day3_teacher_excuse, forced_violation_day3_after_nurse, forced_violation_day3_nurse_apologize, forced_violation_day3_nurse_excuse, forced_violation_day3_after_haeun, forced_violation_day3_haeun_apologize, forced_violation_day3_haeun_excuse, forced_violation_day3_resume
- Day 4: date_seo_high_1, date_seo_high_2, date_seo_compliment_choice, date_seo_pretty_high, date_seo_pretty_high_b, date_seo_pretty_high_2, date_seo_pretty_high_3, date_seo_pretty_high_3_b, date_seo_pretty_high_4, date_seo_pretty_low, date_seo_bright, date_seo_role_trap, date_seo_walk, date_seo_duck, date_seo_duck_2, date_seo_duck_3, date_seo_duck_4, date_seo_flower_b, date_seo_flower_2, date_seo_succulent_2, date_seo_succulent_2_b, date_seo_succulent_3, date_seo_end, date_seo_end_b, date_seo_end_c, date_seo_end_d, date_yuna_high_1, date_yuna_high_2, date_yuna_compliment_choice, date_yuna_pretty_high, date_yuna_pretty_high_2, date_yuna_pretty_high_3, date_yuna_pretty_high_4, date_yuna_pretty_high_5, date_yuna_pretty_high_5_b, date_yuna_pretty_high_5_c, date_yuna_pretty_low, date_yuna_bright, date_yuna_trap, date_yuna_bookstore, date_yuna_bookstore_2, date_yuna_bookstore_2_b, date_yuna_bookstore_3, date_yuna_earphone, date_yuna_earphone_2, date_yuna_earphone_2_b, date_yuna_earphone_3, date_yuna_oldbook, date_yuna_oldbook_b, date_yuna_oldbook_c, date_yuna_oldbook_2, date_yuna_oldbook_3, date_yuna_oldbook_4, date_yuna_end, date_yuna_end_b, date_yuna_end_c, date_dain_high_1, date_dain_high_2, date_dain_2, date_dain_3, date_dain_4, date_dain_compliment_choice, date_dain_pretty_high, date_dain_pretty_high_2, date_dain_pretty_high_3, date_dain_pretty_high_4, date_dain_pretty_low, date_dain_bright, date_dain_to_arcade, date_dain_arcade, date_dain_arcade_2, date_dain_arcade_2_b, date_dain_arcade_3, date_dain_arcade_3_b, date_dain_arcade_3_c, date_dain_rhythm, date_dain_rhythm_2, date_dain_rhythm_3, date_dain_knee, date_dain_knee_2, date_dain_shop, date_dain_shop_2, date_dain_shop_2_b, date_dain_shop_3, date_dain_shop_3_b, date_dain_end, date_dain_end_b, date_dain_end_c, date_seo_low, date_yuna_low, date_dain_low, confess_seo_3, confess_yuna_3, confess_seo_low, confess_yuna_low, confess_dain_low, day4_adult_teacher_student_rank, day4_teacher_seoyeon_counteroffer, day4_teacher_dain_counteroffer, day4_teacher_yuna_counteroffer, day4_nurse_seoyeon_counteroffer, day4_adult_counteroffer_accept_seoyeon, day4_adult_counteroffer_soft_seoyeon, day4_adult_night_regret_teacher, wall_seo_pre_high_1, wall_seo_pre_high_2, wall_seo_skin70_1, wall_seo_skin70_3, wall_seo_skin60_1, wall_seo_skin60_2, wall_seo_glimpse_1, wall_seo_glimpse_2, wall_seo_glimpse_4, wall_dain_pre_high_1, wall_dain_pre_high_2, wall_dain_skin70_1, wall_dain_skin70_2, wall_dain_skin70_3, wall_dain_skin60_1, wall_dain_skin60_2, wall_yuna_pre_high_1, wall_yuna_pre_high_2, wall_yuna_skin70_1, wall_yuna_skin70_2, wall_yuna_skin70_3, wall_yuna_skin60_1, wall_yuna_skin60_2, wall_yuna_glimpse_1, wall_yuna_glimpse_2, wall_yuna_glimpse_3_b, wall_yuna_glimpse_4, day4_night_regret_msg, forced_violation_day4_after_seoyeon, forced_violation_day4_seoyeon_apologize, forced_violation_day4_seoyeon_excuse, forced_violation_day4_after_yuna, forced_violation_day4_yuna_apologize, forced_violation_day4_yuna_excuse, forced_violation_day4_after_dain, forced_violation_day4_dain_apologize, forced_violation_day4_dain_excuse, forced_violation_day4_after_teacher, forced_violation_day4_teacher_apologize, forced_violation_day4_teacher_excuse, forced_violation_day4_after_nurse, forced_violation_day4_nurse_apologize, forced_violation_day4_nurse_excuse, forced_violation_day4_resume
- Day 5: morning5_caught_teacher_counteroffer, morning5_caught_teacher_honest, morning5_caught_teacher_lie, morning5_caught_seoyeon_by_dain, morning5_caught_yuna_by_seoyeon, morning5_mood_high, morning5_mood_mid, morning5_yuna_story_gone, morning5_yuna_story_gone_2, hidden_homeroom_d5_1, hidden_homeroom_d5_1_b, hidden_homeroom_d5_1_c, hidden_homeroom_d5_1_d, hidden_homeroom_d5_1_e, hidden_homeroom_d5_2, hidden_homeroom_d5_3, hidden_homeroom_d5_4, hidden_homeroom_d5_5, hidden_homeroom_d5_choice, hidden_homeroom_d5_praise_trap_1, hidden_homeroom_d5_praise_trap_2, hidden_homeroom_d5_praise_trap_3, hidden_homeroom_d5_praise_trap_4, hidden_homeroom_d5_praise_trap_5, hidden_homeroom_d5_praise_trap_6, hidden_homeroom_d5_praise_trap_7, hidden_homeroom_d5_praise_trap_8, hidden_homeroom_d5_praise_trap_9, hidden_homeroom_d5_praise_trap_10, hidden_homeroom_d5_praise_trap_11, hidden_homeroom_d5_praise_trap_12, hidden_homeroom_d5_correct_1, hidden_homeroom_d5_correct_2, hidden_homeroom_d5_correct_3, hidden_homeroom_d5_correct_4, hidden_homeroom_d5_correct_5, hidden_homeroom_d5_correct_6, hidden_homeroom_d5_correct_7, hidden_homeroom_d5_correct_8, hidden_homeroom_d5_correct_9, hidden_homeroom_d5_correct_10, hidden_homeroom_d5_correct_11, hidden_homeroom_d5_correct_12, hidden_homeroom_d5_correct_13, hidden_homeroom_d5_correct_14, hidden_homeroom_d5_6, hidden_homeroom_d5_6_b, hidden_homeroom_d5_6_c, hidden_homeroom_d5_6_d, hidden_homeroom_d5_6_e, hidden_homeroom_d5_6_f, hidden_homeroom_d5_6_g, hidden_homeroom_d5_6_h, hidden_homeroom_d5_6_i, hidden_homeroom_d5_6_j, hidden_homeroom_d5_6_k, hidden_homeroom_d5_6_l, hidden_homeroom_d5_6_m, hidden_homeroom_d5_6_n, hidden_homeroom_d5_6_o, hidden_homeroom_d5_6_p, hidden_homeroom_d5_6_q, hidden_homeroom_d5_6_r, hidden_homeroom_d5_6_s, hidden_homeroom_d5_6_t, hidden_homeroom_d5_7, hidden_homeroom_d5_7_b, hidden_homeroom_d5_7_c, hidden_homeroom_d5_8, hidden_homeroom_d5_freetalk, hidden_nurse_d5_7_both, hidden_homeroom_d5_low, tour_seo_affinity_check, tour_seo_affinity_80, tour_seo_affinity_60, tour_seo_event_1, tour_seo_event_2, tour_seo_event_3, tour_seo_event_4, tour_seo_event_5, tour_seo_2, tour_seo_3, tour_seo_4, tour_seo_5, tour_seo_6, tour_seo_7, tour_seo_8, tour_seo_9, tour_seo_10, tour_seo_11, tour_seo_12, tour_seo_13, tour_seo_14, tour_seo_freetalk, tour_seo_end, tour_yuna_1, tour_yuna_1b, tour_yuna_affinity_check, tour_yuna_affinity_80, tour_yuna_affinity_60, tour_yuna_event_1, tour_yuna_event_2, tour_yuna_event_3, tour_yuna_event_4, tour_yuna_event_5, tour_yuna_2, tour_yuna_3, tour_yuna_4, tour_yuna_5, tour_yuna_6, tour_yuna_7, tour_yuna_8, tour_yuna_9, tour_yuna_10, tour_yuna_11, tour_yuna_freetalk, tour_yuna_end, tour_yuna_end_2, tour_dain_1, tour_dain_1b, tour_dain_affinity_check, tour_dain_affinity_80, tour_dain_affinity_60, tour_dain_event_1, tour_dain_event_2, tour_dain_event_3, tour_dain_event_4, tour_dain_event_5, tour_dain_2, tour_dain_3, tour_dain_4, tour_dain_5, tour_dain_6, tour_dain_7, tour_dain_8, tour_dain_10, tour_dain_11, tour_dain_11_b, tour_dain_12, tour_dain_13, tour_dain_end, tour_dain_freetalk, tour_dain_end_2, after5_co_teacher_1, after5_co_teacher_2, after5_farewell_seo_affinity_check, after5_farewell_seo_high_1, after5_farewell_seo_high_2, after5_farewell_seo_2, after5_farewell_seo_3, after5_farewell_seo_4, after5_farewell_seo_5, after5_farewell_seo_6, after5_farewell_seo_6_b, after5_farewell_seo_7, after5_farewell_yuna_affinity_check, after5_farewell_yuna_high_1, after5_farewell_yuna_high_2, after5_farewell_yuna_2, after5_farewell_yuna_3, after5_farewell_yuna_4, after5_farewell_yuna_5, after5_farewell_yuna_5b, after5_farewell_dain_affinity_check, after5_farewell_dain_high_1, after5_farewell_dain_high_2, after5_farewell_dain_2, after5_farewell_dain_3, after5_farewell_dain_4, after5_farewell_dain_4_b, after5_farewell_dain_4_c, after5_farewell_dain_4_d, after5_farewell_dain_5, after5_farewell_dain_5b, after5_hidden_teacher_affinity_check, after5_hidden_teacher_high, after5_hidden_teacher_mid, after5_hidden_teacher_low, after5_hidden_nurse_high, after5_hidden_nurse_mid, after5_last_chance_seo_tentative, after5_last_chance_seo_distance, after5_last_chance_2_b, after5_last_chance_2_c, after5_last_chance_2_d, after5_last_chance_2_e, after5_last_chance_2_f, after5_last_chance_2_g, after5_last_chance_2_h, after5_last_chance_2_i, after5_last_chance_2_j, after5_last_chance_dain_tentative, after5_last_chance_dain_distance, after5_last_chance_2_k, after5_last_chance_2_l, after5_last_chance_2_m, after5_last_chance_2_n, after5_last_chance_2_o, after5_last_chance_2_p, after5_last_chance_2_q, after5_last_chance_2_r, after5_last_chance_2_s, after5_last_chance_yuna_tentative, after5_last_chance_yuna_distance, after5_last_chance_yuna_1, after5_last_chance_yuna_2, after5_last_chance_yuna_3, after5_last_chance_yuna_4, after5_last_chance_yuna_5, after5_last_chance_yuna_6, after5_last_chance_yuna_7, after5_confess_react_seo, after5_confess_react_dain, after5_confess_react_yuna, after5_confess_react_yuna_call, after5_confess_react_yuna_b, after5_confess_react_yuna_c, after5_confess_react_yuna_d, after5_confess_react_yuna_e, after5_confess_react_yuna_f, after5_confess_react_yuna_g, after5_confess_react_yuna_h, after5_confess_react_yuna_i, after5_set_harem, after5_harem_commit, after5_harem_walk_1, after5_harem_walk_2, co_bitter_teacher_1, co_bitter_teacher_2, co_bitter_teacher_3, hidden_dual_route_1, hidden_dual_route_choice, hidden_perfect_homeroom_check, hidden_perfect_homeroom_1, hidden_perfect_homeroom_1b, hidden_perfect_homeroom_2, hidden_perfect_homeroom_2b, hidden_perfect_homeroom_2c, hidden_perfect_homeroom_3, hidden_perfect_homeroom_3b, hidden_perfect_homeroom_3c, hidden_perfect_homeroom_3e, hidden_perfect_homeroom_3f, hidden_perfect_homeroom_3g, hidden_perfect_homeroom_4b, hidden_perfect_homeroom_4c, hidden_perfect_homeroom_4d, hidden_perfect_homeroom_4e, hidden_perfect_homeroom_4f, hidden_perfect_homeroom_4g, hidden_perfect_homeroom_ending_title, hidden_perfect_homeroom_5, hidden_perfect_homeroom_ep1, hidden_perfect_homeroom_ep2, hidden_perfect_homeroom_ep3, hidden_perfect_homeroom_ep4, hidden_true_homeroom_1, hidden_true_homeroom_2, hidden_true_homeroom_2_b, hidden_true_homeroom_3, hidden_true_homeroom_3_b, hidden_true_homeroom_3_c, hidden_true_homeroom_4, hidden_true_homeroom_4_b, hidden_true_homeroom_4_c, hidden_true_homeroom_4_d, hidden_true_homeroom_4_e, hidden_true_homeroom_4_f, hidden_true_homeroom_4_g, hidden_true_homeroom_4_h, hidden_true_homeroom_5, hidden_true_homeroom_5_b, hidden_true_homeroom_5_c, hidden_true_homeroom_6, hidden_true_homeroom_6_b, hidden_true_homeroom_7, hidden_true_homeroom_7_b, hidden_true_homeroom_7_c, hidden_true_homeroom_7_d, hidden_true_homeroom_8, hidden_true_homeroom_ending_title, hidden_good_homeroom_1, hidden_good_homeroom_2, hidden_good_homeroom_3, hidden_good_homeroom_4, hidden_good_homeroom_ending_title, hidden_bitter_homeroom_1, hidden_bitter_homeroom_2, hidden_bitter_homeroom_3, hidden_bitter_homeroom_4, hidden_bitter_homeroom_5, hidden_bitter_homeroom_6, hidden_bitter_homeroom_ending_title, hidden_perfect_nurse_1, hidden_perfect_nurse_2, hidden_perfect_nurse_3, hidden_perfect_nurse_3b, hidden_perfect_nurse_4, hidden_perfect_nurse_4b, hidden_perfect_nurse_5, hidden_perfect_nurse_5b, hidden_perfect_nurse_ep1, hidden_perfect_nurse_ending_title, hidden_perfect_nurse_ep2, hidden_perfect_nurse_ep3, hidden_perfect_nurse_ep4, hidden_true_nurse_1, hidden_true_nurse_2, hidden_true_nurse_2_b, hidden_true_nurse_2_c, hidden_true_nurse_2_d, hidden_true_nurse_3, hidden_true_nurse_3_b, hidden_true_nurse_4, hidden_true_nurse_5, hidden_true_nurse_5_b, hidden_true_nurse_5_c, hidden_true_nurse_5_d, hidden_true_nurse_5_e, hidden_true_nurse_5_f, hidden_true_nurse_6, hidden_true_nurse_7, hidden_true_nurse_7_b, hidden_true_nurse_7_c, hidden_true_nurse_7_d, hidden_true_nurse_8, hidden_true_nurse_8_b, hidden_true_nurse_8_c, hidden_true_nurse_8_d, hidden_true_nurse_8_e, hidden_true_nurse_8_f, hidden_true_nurse_8_g, hidden_true_nurse_8_h, hidden_true_nurse_ending_title, hidden_good_nurse_1, hidden_good_nurse_2, hidden_good_nurse_2_b, hidden_good_nurse_2_c, hidden_good_nurse_2_d, hidden_good_nurse_3, hidden_good_nurse_3_b, hidden_good_nurse_4, hidden_good_nurse_ending_title, perfect_seo_1, perfect_seo_1_b, perfect_seo_2, perfect_seo_3, perfect_seo_4, perfect_seo_5, perfect_seo_5_b, perfect_epilogue_1_seo, perfect_epilogue_bridge_seo, perfect_epilogue_2_seo, perfect_epilogue_3_seo, perfect_seo_coda_1, perfect_seo_coda_2, perfect_seo_coda_3, perfect_epilogue_4_seo, true_seo_1, true_seo_2, true_seo_3, true_seo_4, true_seo_5, true_seo_6, true_seo_6b, true_seo_7, true_seo_7_b, true_seo_7b, true_seo_8, true_seo_bridge, true_epilogue_1_seo, perfect_yuna_1, perfect_yuna_2, perfect_yuna_3, perfect_yuna_4, perfect_yuna_5, perfect_epilogue_1_yuna, perfect_epilogue_bridge_yuna, perfect_epilogue_2_yuna, perfect_epilogue_3_yuna, perfect_yuna_coda_1, perfect_yuna_coda_2, perfect_yuna_coda_3, perfect_epilogue_4_yuna, bitter_yuna_2_library, true_yuna_1, true_yuna_2, true_yuna_2_b, true_yuna_2_c, true_yuna_2_d, true_yuna_3, true_yuna_4, true_yuna_5, true_yuna_5_b, true_yuna_6, true_yuna_6b, true_yuna_7, true_yuna_bridge, true_epilogue_1_yuna, perfect_dain_1, perfect_dain_2, perfect_dain_2b, perfect_dain_3, perfect_dain_3b, perfect_dain_4, perfect_dain_5, perfect_epilogue_1_dain, perfect_epilogue_1b_dain, perfect_epilogue_1c_dain, perfect_epilogue_bridge_dain, perfect_epilogue_2_dain, perfect_epilogue_3_dain, perfect_dain_coda_1, perfect_dain_coda_2, perfect_dain_coda_3, perfect_epilogue_4_dain, true_dain_1, true_dain_2, true_dain_2b, true_dain_3, true_dain_4, true_dain_5, true_dain_6, true_dain_7, true_dain_8, true_dain_8b, true_dain_bridge, true_epilogue_1_dain, true_epilogue_2, true_epilogue_3, true_epilogue_4, true_epilogue_4_seo, true_epilogue_4_yuna, true_epilogue_4_dain, true_epilogue_7, day5_ending_good, good_1, good_1b, good_1c, good_1_seo, good_1_seo_b, good_1_seo_c, good_1_seo_d, good_2_seo, good_3_seo, good_4_seo, good_5_seo, good_epilogue_1, good_epilogue_2, good_epilogue_3, good_5_cg_seo, good_1_yuna, good_1_yuna_b, good_1_yuna_b_b, good_2_yuna, good_3_yuna, good_4_yuna, good_5_yuna, good_epilogue_1_yuna, good_epilogue_2_yuna, good_epilogue_3_yuna, good_5_cg_yuna, good_1_dain, good_2_dain, good_3_dain, good_4_dain, good_5_dain, good_epilogue_1_dain, good_epilogue_2_dain, good_epilogue_3_dain, good_5_cg_dain, date_choice_perfect_seo, date_perfect_seo_roof_1, date_perfect_seo_roof_2, date_perfect_seo_roof_3, date_perfect_seo_cafe_1, date_perfect_seo_cafe_2, date_perfect_seo_cafe_3, date_choice_perfect_yuna, date_perfect_yuna_book_1, date_perfect_yuna_book_2, date_perfect_yuna_book_3, date_perfect_yuna_book_4, date_perfect_yuna_roof_1, date_perfect_yuna_roof_2, date_perfect_yuna_roof_3, date_choice_perfect_dain, date_perfect_dain_gym_1, date_perfect_dain_gym_2, date_perfect_dain_gym_3, date_perfect_dain_booth_1, date_perfect_dain_booth_2, date_perfect_dain_booth_3, date_choice_perfect_teacher, date_perfect_teacher_cafe_1, date_perfect_teacher_cafe_2, date_perfect_teacher_cafe_3, date_perfect_teacher_museum_1, date_perfect_teacher_museum_2, date_perfect_teacher_museum_3, date_choice_perfect_nurse, date_perfect_nurse_home_1, date_perfect_nurse_home_2, date_perfect_nurse_home_3, date_perfect_nurse_park_1, date_perfect_nurse_park_2, date_perfect_nurse_park_3, date_choice_true_seo, date_true_seo_1, date_true_seo_2, date_true_seo_alt_1, date_true_seo_alt_2, date_choice_true_yuna, date_true_yuna_book_1, date_true_yuna_book_2, date_true_yuna_roof_1, date_true_yuna_roof_2, date_choice_true_dain, date_true_dain_1, date_true_dain_2, date_true_dain_alt_1, date_true_dain_alt_2, date_choice_true_teacher, date_true_teacher_1, date_true_teacher_2, date_true_teacher_alt_1, date_true_teacher_alt_2, date_choice_true_nurse, date_true_nurse_1, date_true_nurse_2, date_true_nurse_alt_1, date_true_nurse_alt_2, day5_seo_ending_freetalk_perfect, day5_seo_ending_freetalk_true_love, day5_seo_ending_freetalk_good, day5_seo_ending_freetalk_late_good, day5_yuna_ending_freetalk_perfect, day5_yuna_ending_freetalk_true_love, day5_yuna_ending_freetalk_good, day5_yuna_ending_freetalk_late_good, day5_dain_ending_freetalk_perfect, day5_dain_ending_freetalk_true_love, day5_dain_ending_freetalk_good, day5_dain_ending_freetalk_late_good, day5_teacher_ending_freetalk_intro, day5_teacher_ending_freetalk_router, day5_teacher_ending_freetalk_perfect, day5_teacher_ending_freetalk_true_love, day5_teacher_ending_freetalk_good, day5_teacher_ending_freetalk_bittersweet, day5_nurse_ending_freetalk_perfect, day5_nurse_ending_freetalk_true_love, day5_nurse_ending_freetalk_good, forced_violation_day5_after_seoyeon, forced_violation_day5_seoyeon_apologize, forced_violation_day5_seoyeon_excuse, forced_violation_day5_after_yuna, forced_violation_day5_yuna_apologize, forced_violation_day5_yuna_excuse, forced_violation_day5_after_dain, forced_violation_day5_dain_apologize, forced_violation_day5_dain_excuse, forced_violation_day5_after_teacher, forced_violation_day5_teacher_apologize, forced_violation_day5_teacher_excuse, forced_violation_day5_after_nurse, forced_violation_day5_nurse_apologize, forced_violation_day5_nurse_excuse, forced_violation_day5_resume
