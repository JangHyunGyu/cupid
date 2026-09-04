# Cupid 플레이테스트 리포트

> 결정론적 시드: `cupid-full-audit`

## 요약

| 항목 | 값 |
|------|----|
| 탐색 경로 | 9996개 |
| 완료 경로 | 4996개 |
| 엔딩 종류 | 3종 |
| 전체 씬 | 3016개 |

## 엔딩 도달 통계

| 엔딩 | 도달 경로 수 |
|------|-------------|
| `alone_5` | 4351 |
| `friend_12` | 428 |
| `confess_fail_5` | 217 |

## 경로 상세 (엔딩별 대표 경로)

### alone_5

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_seo_choice`: (선택)
- `after1_jealousy_seo_choice`: (선택)
- `after_end`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_seo_choice`: (선택)
- `after2_choice`: (선택)
- `after2_yuna_choice`: (선택)
- `night2_choice`: (선택)
- `lunch3_choice`: (선택)
- `after3_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=7 유나=7 다인=0 담임=0 보건=0

<details>
<summary>씬 타임라인 (419씬)</summary>

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
| 82 | `lunch_seo_c2_1` | 서연 | top_school | seyoun_normal |  |  | *계란말이를 자기 입에 넣는다. 씹는 동안 젓가락 끝으 |
| 83 | `lunch_seo_c2_2` | 서연 | top_school | seyoun_normal |  |  | 맞네. 맛있어. |
| 84 | `lunch_seo_c2_3` | 서연 | top_school | seyoun_normal |  |  | *도시락 뚜껑의 모서리를 맞추다 두 번 어긋난다. 세  |
| 85 | `lunch_seo_after` | {name} | top_school | seyoun_normal |  |  | *운동장 스피커에서 점심 종료를 알리는 예비음이 울린다 |
| 86 | `lunch_seo_after_2` | 서연 | top_school | seyoun_normal |  |  | 다음에도 점심시간 비워둬. |
| 87 | `lunch_seo_after_3` | {name} | top_school | seyoun_normal |  |  | 초대해 주는 거야? |
| 88 | `lunch_seo_after_4` | 서연 | top_school | seyoun_normal |  |  | 아니. 허가해 주는 거야. |
| 89 | `lunch_seo_after_5` | 서연 | top_school | seyoun_normal |  |  | *도시락 끈을 한 번 묶었다가 더 짧게 조인다.* |
| 90 | `lunch_seo_after_7` | {name} | top_school | seyoun_normal |  |  | *도시락 매듭이 처음보다 단단해져 있다.* |
| 91 | `lunch_seo_freetalk` | 서연 | top_school | seyoun_normal |  |  | *도시락 뚜껑을 정리하고 접이식 의자를 신발 끝으로 한 |
| 92 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *종이 울린다. 점심시간이 끝났다.* |
| 93 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에 |
| 94 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 95 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창 |
| 96 | `after_kakao_5` | {name} | school_hallway | 없음 |  | 🌅 | *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른 |
| 97 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록  |
| 98 | `after1_jealousy_seo_1` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 점심때 어디 갔어? 매점 갔는데 없더라. |
| 99 | `after1_jealousy_seo_2` | {name} | school_hallway | dain_normal |  | 🌅 | *답장창에 '서연이랑'까지 썼다가 지운다. 커서만 다시 |
| 100 | `after1_jealousy_seo_3` | 다인 | school_hallway | dain_pout |  | 🌅 | 옥상에서 내려오는 거 봤거든. 둘이서? |
| 101 | `after1_jealousy_seo_choice` | 다인 | school_hallway | dain_pout |  | 🌅 | *휴대폰을 쥔 손에 힘을 준다.* |
| 102 | `after1_jealousy_seo_lie` | {name} | school_hallway | dain_normal |  | 🌅 | 아니, 그냥 혼자 돌아다녔어. |
| 103 | `after1_jealousy_seo_lie_2` | 다인 | school_hallway | dain_laugh |  | 🌅 | 진짜? 혼자? — 아 그래, 첫날이니까 헤맸겠다! |
| 104 | `after1_jealousy_seo_yuna` | {name} | school_hallway | dain_normal |  | 🌅 | *가방 옆주머니에 접힌 쪽지가 걸려 있다. 유나의 필체 |
| 105 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *복도를 계속 걷는다.* |
| 106 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도를 걷는데 뒤에서 쿵쿵 발소리.* |
| 107 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 조심! |
| 108 | `after_miss_dain_3` | {name} | school_hallway | dain_normal |  | 🌅 | *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 |
| 109 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 피했다? 반사신경 괜찮은데. |
| 110 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 넌 복도에서 왜 전력질주야? |
| 111 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 늦었거든! 체육관 가야 해. 내일 보자, 전학생! |
| 112 | `after_miss_dain_6_b` | {name} | school_hallway | dain_laugh |  | 🌅 | *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을  |
| 113 | `after_miss_dain_7` | {name} | school_hallway | dain_laugh |  | 🌅 | *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아 |
| 114 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으 |
| 115 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 이거 떨어뜨렸어. |
| 116 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피 |
| 117 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌  |
| 118 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 고마워. |
| 119 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피를 책등 사이에 끼우고 돌아선다.* |
| 120 | `after_miss_yuna_4` | {name} | library_old | yuna_normal |  | 🌅 | *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 |
| 121 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든 |
| 122 | `night_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄 |
| 123 | `night_start_3` | {name} | room_my | 없음 |  |  | *핸드폰이 울린다. 학교 메신저.* |
| 124 | `night_msg_seo_1` | 서연 | room_my | seyoun_normal | 0.35 |  | *오늘 옥상 어땠어?* |
| 125 | `night_msg_seo_2` | {name} | room_my | seyoun_normal | 0.35 |  | *바람이 좋더라* |
| 126 | `night_msg_seo_3` | 서연 | room_my | seyoun_normal | 0.35 |  | *다음엔 음료 정도는 준비해 놓을게* |
| 127 | `night_msg_seo_4` | 서연 | room_my | seyoun_normal | 0.35 |  | *서비스야* |
| 128 | `night_msg_seo_5` | {name} | room_my | seyoun_normal | 0.35 |  | *'서비스야'를 일부러 한 줄 띄어서 보냈다.* |
| 129 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 다른 알림이 보인다.* |
| 130 | `night_late_transition` | {name} | room_my | 없음 |  |  | *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시 |
| 131 | `night_late_branch` | {name} | room_my | 없음 |  |  | *화면이 밝아진다.* |
| 132 | `night_end_1` | {name} | room_my | 없음 |  |  | *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교 |
| 133 | `night_end_3` | {name} | room_my | 없음 |  |  | *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을  |
| | **Day 2** | | | | | | |
| 134 | `morning2_start` | {name} | room_school | 없음 |  |  | *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.* |
| 135 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 136 | `morning2_dain_1` | {name} | room_school | 없음 |  |  | *교실 문을 여는 순간 손바닥이 등짝을 탁 친다.* |
| 137 | `morning2_dain_2` | 다인 | room_school | dain_normal |  |  | 왔어? 좋은 아침. |
| 138 | `morning2_dain_3` | 다인 | room_school | dain_laugh |  |  | 그 정도로? 체력 관리 좀 해. |
| 139 | `morning2_dain_4` | {name} | room_school | dain_laugh |  |  | 너 아침부터 에너지 과잉 아냐? |
| 140 | `morning2_dain_5` | 다인 | room_school | dain_laugh |  |  | 이게 정상이야! 네가 부족한 거야! |
| 141 | `morning2_dain_6` | 다인 | room_school | dain_laugh |  |  | *아침 조회 전 교실에 다인의 목소리가 먼저 울린다.* |
| 142 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *자리에 앉으려는데 — 책상 위에 접힌 쪽지가 하나 놓 |
| 143 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 144 | `morning2_note_3` | {name} | room_school | yuna_normal | 0.35 |  | *어제와 같은 글씨. 아래쪽에 장소가 적혀 있다. '도 |
| 145 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가다 교실 안을 들여다본다.* 어제 잘 잤 |
| 146 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 학생회장이 교실까지 인사하러 와? |
| 147 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 순찰이야. — 출석률 확인 겸. |
| 148 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | *복도로 돌아가기 직전 클립보드 끝이 문틀에 한 번 닿 |
| 149 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연이 사라진 복도를 바라보는데 — 뒤에서 민수가 돌 |
| 150 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 이틀 만에 학생회장이 인사하러 오냐? 나 1 |
| 151 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 인기가 없는 거 아닐까. |
| 152 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 그건 맞는데 그게 중요한 게 아니잖아. |
| 153 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *다인은 서연의 뒷모습이 교실 안으로 사라질 때까지 바 |
| 154 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 회장님도 우리 전학생한테 관심 있어? 인기 많네! |
| 155 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | '우리' 전학생? |
| 156 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 내가 먼저 봤잖아. 그럼 우리 맞지. 찜한 거. |
| 157 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *쉬는 시간. 복도로 나왔다.* |
| 158 | `morning2_break_1` | {name} | school_hallway | 없음 |  |  | *서연의 클립보드 끝이 책상에 톡 닿는다. 답할 틈도  |
| 159 | `morning2_seo_dust_1` | {name} | school_hallway | seyoun_normal |  |  | *1교시가 끝난 쉬는 시간, 복도에서 서연과 스친다.  |
| 160 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 잠깐. |
| 161 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *손이 {name}의 어깨에 닿는다. 먼지를 두 번 털 |
| 162 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 옷에 뭐 묻었어. |
| 163 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | *서연의 손이 떨어진 자리에서 가방끈이 비뚤어져 있다. |
| 164 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 왜 그래? 먼지잖아. |
| 165 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *어깨의 먼지는 없어졌는데 가방끈을 두 번이나 다시 고 |
| 166 | `morning2_dain_react_2` | {name} | school_hallway | dain_angry |  |  | *서연이 클립보드를 고쳐 끼고 복도로 간다. 뒤에서 다 |
| 167 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 지금 뭐야? 어깨 만진 거야? |
| 168 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 먼지 털어준 거야. |
| 169 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 먼지가 진짜 있긴 했어? |
| 170 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | *대답 대신 가방끈을 고쳐 잡았다. 다인은 그걸 보고도 |
| 171 | `morning2_end` | {name} | school_hallway | seyoun_normal |  |  | *민수 말로는 1년 동안 먼저 인사한 적도 없다던 서연 |
| 172 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *점심. 주머니에는 유나의 쪽지가 있고 복도 끝에서는  |
| 173 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *누구와 함께할까.* |
| 174 | `lunch2_seo_1_check` | {name} | school_hallway | 없음 |  |  | *옥상으로 올라간다.* |
| 175 | `lunch2_seo_1` | {name} | top_school | seyoun_normal |  |  | *옥상. 어제와 같은 장소. 서연이 도시락을 펼치고 있 |
| 176 | `lunch2_seo_2` | 서연 | top_school | seyoun_normal |  |  | 또 왔네. 맛 들렸나 봐. |
| 177 | `lunch2_seo_3` | {name} | top_school | seyoun_normal |  |  | 밥이 맛있었으니까. |
| 178 | `lunch2_seo_4` | 서연 | top_school | seyoun_laugh |  |  | 밥 때문이야? |
| 179 | `lunch2_seo_5` | {name} | top_school | seyoun_laugh |  |  | 바람도 좋고. |
| 180 | `lunch2_seo_6` | 서연 | top_school | seyoun_normal |  |  | 바람이라. |
| 181 | `lunch2_seo_7` | {name} | top_school | seyoun_normal |  |  | *서연이 도시락 뚜껑을 여는 순간 옥상 문이 철컥 열린 |
| 182 | `lunch2_seo_9` | 다인 | top_school | dain_normal |  |  | 여기 있었네. 찾았다. 옥상에서 먹는 거면 나도 껴도  |
| 183 | `lunch2_seo_10` | 서연 | top_school | seyoun_normal |  |  | 옥상은 허가제야. 그리고 오늘 점심은 내가 먼저 잡았고 |
| 184 | `lunch2_seo_11` | 다인 | top_school | dain_normal |  |  | 그럼 난 지금부터 끼면 되겠네. 나도 앉는다? |
| 185 | `lunch2_seo_12` | {name} | top_school | dain_normal |  |  | *다인이 빈자리에 바로 앉는다. 서연의 젓가락이 계란말 |
| 186 | `lunch2_seo_13b` | 다인 | top_school | dain_normal |  |  | 반가워요, 회장님. 그런데 옆자리는 비었죠? |
| 187 | `lunch2_seo_13b_b` | 서연 | top_school | seyoun_normal |  |  | *서연이 도시락을 {name} 쪽으로 더 붙인다.* 자 |
| 188 | `lunch2_seo_14` | 서연 | top_school | seyoun_normal |  |  | *다인이 앉으려 하자 빈 의자를 발끝으로 자기 쪽에 붙 |
| 189 | `lunch2_seo_15` | {name} | top_school | seyoun_normal |  |  | 같은 반이잖아. 너희 둘도 이제 아는 사이고. |
| 190 | `lunch2_seo_16` | 서연 | top_school | seyoun_normal |  |  | 친해지는 것하고 양보하는 건 다르지. |
| 191 | `lunch2_seo_17` | 다인 | top_school | dain_normal |  |  | 그럼 나도 양보 안 해. 다음 쉬는 시간에 체육관 와. |
| 192 | `lunch2_seo_19` | 서연 | top_school | seyoun_normal |  |  | {name}, 지금 내 앞에서 다음 약속 잡는 거야? |
| 193 | `lunch2_seo_20` | 서연 | top_school | seyoun_normal |  |  | 대답은 나중에 해. 일단 입가에 뭐 묻었어. 가만있어  |
| 194 | `lunch2_seo_choice` | 서연 | top_school | seyoun_normal |  |  | *물티슈를 감은 손가락이 입가로 다가온다.* |
| 195 | `lunch2_seo_c2_1` | {name} | top_school | seyoun_normal |  |  | *손등으로 입가를 닦는다.* |
| 196 | `lunch2_seo_c2_2` | 서연 | top_school | seyoun_pout |  |  | 직접 닦으면 번지잖아. |
| 197 | `lunch2_seo_c2_3` | 서연 | top_school | seyoun_pout |  |  | *도시락 뚜껑을 맞추는 손이 두 번 미끄러진다. 세 번 |
| 198 | `lunch2_seo_end_c2` | {name} | top_school | seyoun_pout |  |  | *손등에 아직 밥풀 자국이 남아 있다. 서연은 도시락  |
| 199 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *방과후. 핸드폰에 알림이 두 개 와 있다.* |
| 200 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 체육관 와. 오늘은 진짜 내기다. |
| 201 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 학생회실에 올 수 있어? 일손이 부족해서. |
| 202 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게서는 아무 연락이 없다. 가방을 챙기자 주머니 |
| 203 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *어디로 갈까.* |
| 204 | `after2_yuna_1` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *유나한테는 연락이 없지만 도서관으로 향한다. 주머니  |
| 205 | `after2_yuna_1_b` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *별관 복도에는 인기척이 없다. 비밀 독서 공간 문만  |
| 206 | `after2_yuna_2` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *문을 밀자 오래된 경첩이 짧게 운다. 유나는 소파에서 |
| 207 | `after2_yuna_2_b` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | *책 위에 올려 둔 이어폰 한쪽을 옆으로 치운다.* |
| 208 | `after2_yuna_3` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 왔네. |
| 209 | `after2_yuna_4` | {name} | yuna_hideout | yuna_normal |  | 🌅 | 부른 적 없잖아. |
| 210 | `after2_yuna_5` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 불러야 오는 거야? |
| 211 | `after2_yuna_6` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | *검지가 같은 문장 밑을 두 번 따라간다.* |
| 212 | `after2_yuna_7` | {name} | yuna_hideout | yuna_normal |  | 🌅 | 문이 열려 있길래. |
| 213 | `after2_yuna_8` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 우연히. |
| 214 | `after2_yuna_8b` | {name} | yuna_hideout | yuna_shy |  | 🌅 | *안쪽 의자에는 이어폰 한쪽이 이미 놓여 있다. 유나는 |
| 215 | `after2_yuna_8c` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 들어봐. |
| 216 | `after2_yuna_8d` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *이어폰에서 낮은 피아노 곡이 흐른다. 유나는 책을 읽 |
| 217 | `after2_yuna_choice_pre1` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | *이어폰 줄을 한 번 풀어내며 말한다.* 방과후에 여기 |
| 218 | `after2_yuna_choice_pre2` | {name} | yuna_hideout | yuna_normal |  | 🌅 | 응? |
| 219 | `after2_yuna_choice_pre3` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 선배 이후로 없었어. |
| 220 | `after2_yuna_choice_pre3_b` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | *유나가 책 위로 {name}을 바로 본다. 이어폰 줄 |
| 221 | `after2_yuna_choice` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *이어폰 줄이 유나의 손가락 사이에서 한 번 더 감긴다 |
| 222 | `after2_yuna_quiet` | 유나 | yuna_hideout | yuna_smile |  | 🌅 | 그래서 여기가 좋은 거야. |
| 223 | `after2_yuna_quiet_react` | 유나 | yuna_hideout | yuna_smile |  | 🌅 | *책갈피가 한 장 뒤로 옮겨간다. 소파 끝의 이어폰은  |
| 224 | `after2_yuna_end` | {name} | yuna_hideout | yuna_smile |  | 🌅 | *유나와 나란히 앉아 있던 자리에는 이어폰 한쪽이 남아 |
| 225 | `after2_yuna_rival_dain_check` |  | yuna_hideout | 없음 |  | 🌅 |  |
| 226 | `after2_yuna_rival_dain_low` | 다인 | yuna_hideout | dain_laugh |  | 🌅 | 도서관 쪽이었어? 내일 봐! |
| 227 | `after2_yuna_rival_seo_check` |  | yuna_hideout | 없음 |  | 🌅 |  |
| 228 | `after2_yuna_rival_seo_low` | 서연 | yuna_hideout | seyoun_normal |  | 🌅 | 일손은 채웠어. 내일 보자. |
| 229 | `after2_yuna_return` | {name} | school | yuna_smile |  | 🌅 | *도서관 별관을 나서자 복도 자동등이 켜진다.* |
| 230 | `after2_group_yuna_companion` | 유나와 동행 | library_old | 없음 |  | 🌅 | *정리할 자료는 두 묶음인데 남은 시간은 한쪽을 끝내기 |
| 231 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.* |
| 232 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 233 | `minsu_warn_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문을 나서는데 — 민수가 뒤에서 따라온다. |
| 234 | `minsu_warn_1_b` | 민수 | school | minsu_normal |  | 🌅 | *성큼 따라와 옆에 나란히 선다.* |
| 235 | `minsu_warn_2` | 민수 | school | minsu_smirk |  | 🌅 | 야. |
| 236 | `minsu_warn_3` | {name} | school | minsu_smirk |  | 🌅 | 왜? |
| 237 | `minsu_warn_4` | 민수 | school | minsu_smirk |  | 🌅 | 너 요즘 재밌냐? |
| 238 | `minsu_warn_4_b` | {name} | school | minsu_normal |  | 🌅 | *민수는 교문 밖 횡단보도 신호만 보고 있다.* |
| 239 | `minsu_warn_5` | {name} | school | minsu_smirk |  | 🌅 | 갑자기? |
| 240 | `minsu_warn_6` | 민수 | school | minsu_smirk |  | 🌅 | 점심엔 한 명, 방과후엔 또 한 명. 넌 재밌겠지. — |
| 241 | `night2_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저  |
| 242 | `night2_msg_1` | {name} | room_my | 없음 |  |  | *세 명에게서 메시지가 왔다.* |
| 243 | `night2_msg_yuna_specific` | 유나 | room_my | yuna_normal | 0.35 |  | 오늘 그 곡, 좋았어 |
| 244 | `night2_msg_yuna_specific_2` | 유나 | room_my | yuna_normal | 0.35 |  | 다음에 또 들려줘 |
| 245 | `night2_msg_dain_general` | 다인 | room_my | dain_normal | 0.35 |  | 야, 내일 매점 가자! 오늘 못 간 거 아직 아쉽거든! |
| 246 | `night2_msg_dain_general_merge` | 서연 | room_my | seyoun_normal | 0.35 |  | 점심에 옥상 올래? 바람 좋을 거야 |
| 247 | `night2_msg_seo_general_alt` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 옥상 열어둘게. 시간 되면 와 |
| 248 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에  |
| 249 | `night2_choice` | {name} | room_my | 없음 |  |  | *누구에게 먼저 답장할까?* |
| 250 | `night2_reply_seo_1` | {name} | room_my | seyoun_normal | 0.35 |  | 부르면 또 갈게 |
| 251 | `night2_reply_seo_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 쉽게 말하네 |
| 252 | `night2_reply_seo_3` | {name} | room_my | seyoun_normal | 0.35 |  | 쉬운 말인데 |
| 253 | `night2_reply_seo_4` | 서연 | room_my | seyoun_normal | 0.35 |  | 점심에 옥상 열어둘게. 늦지 마 |
| 254 | `night2_reply_seo_5` | {name} | room_my | seyoun_normal | 0.35 |  | *서연은 거기서 메시지를 끝냈다.* |
| 255 | `night2_reply_seo_react_default` | 서연 | room_my | seyoun_normal | 0.35 |  | ㅋ 알겠어. 내일 봐. |
| 256 | `night2_seo_freetalk` | 서연 | room_my | seyoun_normal | 0.35 | 🌙 | 아, 잠깐. 아직 안 잤지? |
| 257 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 또 다른 알림이 보인다.* |
| 258 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 보내고 핸드폰을 내려놓았다.* |
| 259 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이,  |
| 260 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 |
| 261 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *메모장에 줄줄이 남은 보내지 않은 문장. '선생님,  |
| 262 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 메모가 마지막이다. 그 아래 39번째에는 제 |
| 263 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 |
| 264 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로 |
| 265 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보 |
| 266 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화 |
| 267 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 |
| 268 | `night2_end_2_b` | {name} | room_my | 없음 |  |  | *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있 |
| 269 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.* |
| 270 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을  |
| 271 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 |
| | **Day 3** | | | | | | |
| 272 | `morning3_start` | {name} | school | 없음 |  |  | *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯 |
| 273 | `morning3_start_2` | {name} | school | 없음 |  |  | *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군 |
| 274 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 275 | `morning3_seo_gate_1` | {name} | school | seyoun_normal |  |  | *교문 앞의 서연은 지각 종이 울리기 직전인데도 발을  |
| 276 | `morning3_seo_gate_cold_1` | 서연 | school | seyoun_normal |  |  | *서연이 지나치다 명찰 쪽으로 눈만 돌린다.* |
| 277 | `morning3_seo_gate_cold_2` | 서연 | school | seyoun_normal |  |  | 전학생. 아직 다니고 있었구나. |
| 278 | `morning3_seo_gate_cold_3` | {name} | school | seyoun_normal |  |  | *평소처럼 이름도 부르지 않았다. 서연의 구두 소리만  |
| 279 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실에 들어서자 서연의 펜이 멈추고 다인의 의자가 뒤 |
| 280 | `morning3_react_seo_1` | 다인 | room_school | dain_normal |  |  | 야, 회장님이랑 같이 왔어? 아침부터? |
| 281 | `morning3_react_seo_2` | 유나 | room_school | yuna_bored |  |  | *창밖을 보던 유나가 유리창에 비친 {name}을 확인 |
| 282 | `morning3_date_intro` | {name} | room_school | 없음 |  |  | *1교시가 끝났다. 쉬는 시간마다 누군가 말을 건다.* |
| 283 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *쉬는 시간, 복도로 나왔다. 서연이 먼저 걸음을 맞춘 |
| 284 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | 이번 주말에 시간 있어? 공원에 같이 가자. |
| 285 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끈다. 눈이 마주치 |
| 286 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼  |
| 287 | `morning3_date_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 배구공을 옆구리에 낀 채 이쪽을 보다가 코트로 |
| 288 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다 |
| 289 | `morning3_date_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 접어 둔 쪽지를 꺼내려다 다시 책갈피 사이에  |
| 290 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 291 | `morning3_end` | {name} | room_school | 없음 |  |  | *수업 종료 종이 울리고 곧 점심시간이 된다.* |
| 292 | `morning3_end_b` | 유나 | room_school | yuna_normal |  |  | 맛있네. |
| 293 | `lunch3_start` | {name} | room_school | yuna_normal |  |  | *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. |
| 294 | `lunch3_start_2_b` | 다인 | room_school | dain_normal |  |  | *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가 |
| 295 | `lunch3_meal_1` | 다인 | room_school | dain_laugh |  |  | 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고  |
| 296 | `lunch3_meal_2` | {name} | room_school | dain_laugh |  |  | 그건 내 거... |
| 297 | `lunch3_meal_3` | 서연 | room_school | seyoun_normal |  |  | 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점 |
| 298 | `lunch3_meal_4` | {name} | room_school | seyoun_normal |  |  | 점수 매기지 마. |
| 299 | `lunch3_meal_5` | 서연 | room_school | seyoun_normal |  |  | 10점 만점이야. 나쁜 거 아닌데? |
| 300 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다 |
| 301 | `lunch3_meal_7` | {name} | room_school | seyoun_normal |  |  | 유나, 그건 내가 제일 좋아하는 건데. |
| 302 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임 |
| 303 | `lunch3_meal_8` | {name} | room_school | yuna_bored |  |  | *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다. |
| 304 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. |
| 305 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓 |
| 306 | `lunch3_meal_11` | {name} | room_school | yuna_bored |  |  | *누구에게 줄까?* |
| 307 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *마지막 반찬을 누구에게 줄지 고민한다.* |
| 308 | `lunch3_share_1` | {name} | room_school | yuna_bored |  |  | *다 같이 나눠 먹자고 하자 셋이 웃는다. 웃음이 끊긴 |
| 309 | `lunch3_share_solo` | {name} | room_school | yuna_normal |  |  | *셋이 계란말이를 조금씩 나눠 먹는다. 반으로 갈린 마 |
| 310 | `lunch3_end` | {name} | room_school | 없음 |  |  | *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다 |
| 311 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육 |
| 312 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다 |
| 313 | `after3_choice` | {name} | school_hallway | 없음 |  | 🌅 | *어디로 갈까.* |
| 314 | `after3_walk_home` | {name} | school_hallway | 없음 |  | 🌅 | *잡힌 약속은 없다. 휴대폰을 가방에 넣고 교문 쪽으로 |
| 315 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.* |
| 316 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 317 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 318 | `minsu_d3_check` | {name} | school | 없음 |  | 🌅 |  |
| 319 | `minsu_d3_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문 앞에 민수가 서 있다.* |
| 320 | `minsu_d3_2` | 민수 | school | 없음 |  | 🌅 | 봤다. |
| 321 | `minsu_d3_3` | 민수 | school | 없음 |  | 🌅 | 점심때. 그리고 방금 서연 표정도. |
| 322 | `minsu_d3_4` | 민수 | school | 없음 |  | 🌅 | 어제 내가 뭐랬냐. 나중에 셋 다 울면 네 탓이라고 했 |
| 323 | `minsu_d3_5` | 민수 | school | 없음 |  | 🌅 | 옆에서 보기 좀 힘들다. 걔들 다 좋은 애들이야. 네가 |
| 324 | `minsu_d3_5b` | 민수 | school | 없음 |  | 🌅 | *민수는 빨대 포장지를 끝까지 접어 테이블 위에 내려놓 |
| 325 | `minsu_d3_6` | {name} | school | 없음 |  | 🌅 | 맞아. |
| 326 | `minsu_d3_6b` | 민수 | school | 없음 |  | 🌅 | 전 학교에서 뭔 일 있었는지 안 물어볼게. 근데 하나만 |
| 327 | `minsu_d3_7` | 민수 | school | 없음 |  | 🌅 | 거절도 배려야. 안 되는 관계에 계속 여지 주는 것보다 |
| 328 | `minsu_d3_8` | {name} | school | 없음 |  | 🌅 | *거절도 배려다. 전 학교에서 나는 소정이에게 고백할  |
| 329 | `minsu_d3_9` | 민수 | school | 없음 |  | 🌅 | *민수는 더 말하지 않고 끝까지 접은 빨대 포장지를 내 |
| 330 | `minsu_d3_10` | 민수 | school | 없음 |  | 🌅 | 내일 학교에서 보자. 진지하게 생각해. |
| 331 | `night3_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 가방을 의자에 걸어 둔다.* |
| 332 | `night3_start_2` | {name} | room_my | 없음 |  |  | *책상 위에 엎어 둔 핸드폰 화면을 켠다.* |
| 333 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *읽지 않은 메시지가 떠 있다.* |
| 334 | `night3_dream_1` | {name} | school | 없음 |  |  | *꿈속에서 누군가와 나란히 걷는다. 얼굴은 보이지 않고 |
| 335 | `night3_dream_2_b` | {name} | school | 없음 |  |  | *메모장을 닫았다. 내일 보낼 문장은 아직 없다.* |
| 336 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *커튼 사이로 들어온 아침 햇살에 눈을 뜬다. 핸드폰  |
| 337 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *'삭제하시겠습니까?' 확인 창이 뜬다. 손가락이 버튼 |
| 338 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *1초 동안 화면을 내려다본다. 소정이 책상의 낙서와  |
| 339 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *그래. 삭제 버튼에 올린 손가락으로 화면을 누른다.* |
| 340 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼을 누르지 않고 사진을 새 폴더로 옮긴다.  |
| 341 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *'거절도 네가 해야 할 일이야.' 민수의 말이 떠오른 |
| 342 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *갤러리에서 소정이 사진이 사라지고 빈칸만 남는다.* |
| 343 | `night3_faithful_reflect_4_b` | {name} | room_my | 없음 |  |  | *빈 앨범 썸네일 위를 엄지로 문지른다.* |
| 344 | `night3_faithful_reflect_4_c` | {name} | room_my | 없음 |  |  | *핸드폰을 덮자 검은 화면에 갤러리의 빈칸이 겹쳐 보인 |
| 345 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *알람이 울리기 전에 눈을 떴다.* |
| 346 | `night3_end` | {name} | room_my | 없음 |  |  | *방 불을 끄고 핸드폰을 엎어 둔다.* |
| | **Day 4** | | | | | | |
| 347 | `morning4_start` | {name} | room_my | 없음 |  |  | *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다 |
| 348 | `morning4_nightmare_check` |  | room_my | 없음 |  |  |  |
| 349 | `minsu_cheer_1` | {name} | room_my | 없음 |  |  | *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.* |
| 350 | `minsu_cheer_1_b` | 민수 | room_my | minsu_normal | 0.35 |  | *야 오늘 데이트라며?* |
| 351 | `minsu_cheer_1_c` | {name} | room_my | minsu_normal | 0.35 |  | *어떻게 알았어* |
| 352 | `minsu_cheer_1_d` | 민수 | room_my | minsu_normal | 0.35 |  | *다인이가 단톡방에 올림. 내일 약속 있음, 이라고* |
| 353 | `minsu_cheer_2` | 민수 | room_my | minsu_normal | 0.35 |  | 잘하고 와ㅋㅋ |
| 354 | `minsu_cheer_3` | {name} | room_my | minsu_normal | 0.35 |  | 알아. |
| 355 | `minsu_cheer_4_branch` |  | room_my | 없음 |  |  |  |
| 356 | `minsu_cheer_4_ins_single` | {name} | room_my | minsu_normal | 0.35 |  | *핸드폰 캘린더를 본다. 오늘 약속은 하나뿐이다.* |
| 357 | `morning4_start_2` | {name} | room_my | 없음 |  |  | *심호흡하고 약속 메시지를 다시 확인한다.* |
| 358 | `morning4_fallback_msg` | {name} | room_my | 없음 |  |  | *주말 아침. 알림 몇 개를 확인하고 핸드폰을 내려놓는 |
| 359 | `morning4_hidden_check` | {name} | room_my | 없음 |  |  | *주말 아침, 학교 앞 사거리에서 신호를 기다린다.* |
| 360 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 361 | `morning4_end` | {name} | room_my | 없음 |  |  | *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 |
| 362 | `day4_night_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 옷소매에 공원 흙과 학교 먼지가 조금 |
| 363 | `day4_night_branch` | 시스템 | room_my | 없음 |  |  |  |
| 364 | `day4_student_night_branch` |  | room_my | 없음 |  |  |  |
| 365 | `day4_night_reflect` | {name} | room_my | 없음 |  |  | *오늘 주고받은 메시지를 시간순으로 다시 올려 본다.  |
| 366 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 367 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *알람을 일요일 오전으로 맞추고 방 불을 끈다. 전하지 |
| 368 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안 시계가 자정 쪽으로 넘어간다. 휴대폰 화면도  |
| | **Day 5** | | | | | | |
| 369 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소 |
| 370 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 371 | `morning5_start_b` | {name} | room_school | 없음 |  |  | *교실에 들어서자 세 가지가 한꺼번에 눈에 들어온다.  |
| 372 | `morning5_start_2_b` | {name} | room_school | 없음 |  |  | *책상 위에 쪽지가 놓여 있다. 서연의 글씨.* |
| 373 | `morning5_mood_check` | 시스템 | room_school | 없음 |  |  |  |
| 374 | `morning5_mood_low` | {name} | room_school | 없음 |  |  | 마지막 날. 잠금화면에 남은 이름 셋을 차례로 누른다. |
| 375 | `morning5_gate` | {name} | school | 없음 |  |  | *교문 앞에서 소매를 걷어 올린다. 손목에 남던 붉은  |
| 376 | `morning5_seo_note_1` | {name} | room_school | seyoun_normal |  |  | *책상 위에 쪽지가 놓여 있다. 서연의 글씨. — '오 |
| 377 | `morning5_seo_note_1_b` | {name} | school_hallway | 없음 |  |  | *복도 문예부 전시 코너를 지나다 게시판의 빈 압정 네 |
| 378 | `morning5_seo_note_1_c` | {name} | school_hallway | 없음 |  |  | *게시판에 단편소설이 붙어 있다. 제목: '도서관에서  |
| 379 | `morning5_yuna_story_1` | {name} | school_hallway | yuna_normal |  |  | *소설 속 인물은 도서관에서 잠든 누군가의 어깨에 담요 |
| 380 | `morning5_yuna_story_2` | {name} | school_hallway | 없음 |  |  | *마지막 문장. '그 사람이 눈을 떴을 때, 나는 이미 |
| 381 | `morning5_yuna_story_4` | {name} | school_hallway | yuna_normal |  |  | *게시판 아래 구석에는 작은 글씨가 남아 있다. '이건 |
| 382 | `morning5_return_class` | {name} | room_school | dain_normal |  |  | *교실로 돌아오니 다인이 기다리고 있다.* |
| 383 | `morning5_dain_1` | 다인 | room_school | dain_normal |  |  | 야, 오늘 체육 이벤트 파트너로 너 써놨어. |
| 384 | `morning5_dain_1_b` | {name} | room_school | dain_normal |  |  | 허락도 없이? |
| 385 | `morning5_dain_2` | 다인 | room_school | dain_laugh |  |  | 늦으면 화낸다? |
| 386 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *행사 준비 시간. 복도를 걷는데 — 빈 교실 앞을 지 |
| 387 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *행사 중간 쉬는 시간. 보건실 앞을 지나간다.* |
| 388 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 389 | `morning5_sojeong_1` | {name} | room_school | 없음 |  |  | *휴대폰 메모 앱을 연다. '소정에게'로 시작하는 빈  |
| 390 | `morning5_sojeong_2` | {name} | room_school | 없음 |  |  | *마흔 번째 초안은 쓰지 않는다. 가장 짧은 문장을 골 |
| 391 | `morning5_sojeong_3` | {name} | room_school | 없음 |  |  | 그때 네 책상과 낙서를 보고도 선생님께 말하지 않았어. |
| 392 | `morning5_sojeong_4` | {name} | room_school | 없음 |  |  | *전송 표시가 뜬다. 읽음 표시는 기다리지 않고 대화방 |
| 393 | `morning5_sojeong_5` | {name} | room_school | 없음 |  |  | *지금 담임에게도 메시지를 보낸다. '전학 오기 전 학 |
| 394 | `morning5_route_branch` |  | room_school | 없음 |  |  |  |
| 395 | `morning5_end` | {name} | room_school | 없음 |  |  | *세 방향에서 온 쪽지와 알림을 책상 위에 나란히 둔다 |
| 396 | `tour_seo_1` | {name} | school | seyoun_normal |  |  | *교문 앞에 나란히 선다. 첫날 서연이 기다리고 있던  |
| 397 | `tour_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *복도 끝에서 서연과 마주친다. 서연은 가방끈을 고쳐  |
| 398 | `after5_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 399 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *행사가 끝나갈 무렵, 복도에서 선택하지 않은 두 사람 |
| 400 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다.* |
| 401 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다. 서연은 잠시 멈췄다가 고개 |
| 402 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 403 | `after5_farewell_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나가 다가온다. 아무 말 없이 책 한 |
| 404 | `after5_farewell_yuna_low` | 유나 | library_old | yuna_normal |  | 🌅 | *도서관 앞에서 유나와 눈이 마주친다. 유나는 들고 있 |
| 405 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 406 | `after5_farewell_dain_1` | {name} | gym | dain_normal |  | 🌅 | *체육관 앞에서 다인이 걸어온다. 평소보다 보폭이 작다 |
| 407 | `after5_farewell_dain_low` | 다인 | gym | dain_normal |  | 🌅 | *체육관 앞에서 다인이 걸어오다 두 걸음 떨어진 곳에  |
| 408 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *석양이 교정 창문마다 걸린다. 방송실에서 행사 종료  |
| 409 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 410 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 411 | `day5_ending_alone` | {name} | ending_alone | 없음 |  |  | *교문을 나선다. 핸드폰이 울린다. — 아무도 아니다. |
| 412 | `alone_1` | {name} | ending_alone | 없음 |  |  | *5일 동안 받은 메모와 사진을 한 폴더에 모은다. 누 |
| 413 | `alone_2` | {name} | ending_alone | 없음 |  |  | *방 안이 조용하다. 핸드폰 화면에는 대화방 세 개가  |
| 414 | `alone_2_b` | {name} | ending_alone | 없음 |  |  | *답장창을 비워 둔 채 휴대폰을 내려놓는다.* |
| 415 | `alone_4` | {name} | ending_alone | 없음 |  |  | *충전기에 꽂고 아침 알람을 맞춘다. 화면이 꺼진 방에 |
| 416 | `alone_5` | 시스템 | ending_alone | 없음 |  |  | ─── ALONE END ─── |
| 417 | `day5_credits` |  | school | 없음 |  |  |  |
| 418 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### confess_fail_5

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_seo_choice`: (선택)
- `after1_jealousy_seo_choice`: (선택)
- `after_end`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_seo_choice`: (선택)
- `after2_choice`: (선택)
- `after2_yuna_choice`: (선택)
- `night2_choice`: (선택)
- `lunch3_choice`: (선택)
- `after3_choice`: (선택)
- `after5_last_chance_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=4 유나=16 다인=-1 담임=0 보건=0

<details>
<summary>씬 타임라인 (466씬)</summary>

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
| 82 | `lunch_seo_c2_1` | 서연 | top_school | seyoun_normal |  |  | *계란말이를 자기 입에 넣는다. 씹는 동안 젓가락 끝으 |
| 83 | `lunch_seo_c2_2` | 서연 | top_school | seyoun_normal |  |  | 맞네. 맛있어. |
| 84 | `lunch_seo_c2_3` | 서연 | top_school | seyoun_normal |  |  | *도시락 뚜껑의 모서리를 맞추다 두 번 어긋난다. 세  |
| 85 | `lunch_seo_after` | {name} | top_school | seyoun_normal |  |  | *운동장 스피커에서 점심 종료를 알리는 예비음이 울린다 |
| 86 | `lunch_seo_after_2` | 서연 | top_school | seyoun_normal |  |  | 다음에도 점심시간 비워둬. |
| 87 | `lunch_seo_after_3` | {name} | top_school | seyoun_normal |  |  | 초대해 주는 거야? |
| 88 | `lunch_seo_after_4` | 서연 | top_school | seyoun_normal |  |  | 아니. 허가해 주는 거야. |
| 89 | `lunch_seo_after_5` | 서연 | top_school | seyoun_normal |  |  | *도시락 끈을 한 번 묶었다가 더 짧게 조인다.* |
| 90 | `lunch_seo_after_7` | {name} | top_school | seyoun_normal |  |  | *도시락 매듭이 처음보다 단단해져 있다.* |
| 91 | `lunch_seo_freetalk` | 서연 | top_school | seyoun_normal |  |  | *도시락 뚜껑을 정리하고 접이식 의자를 신발 끝으로 한 |
| 92 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *종이 울린다. 점심시간이 끝났다.* |
| 93 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에 |
| 94 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 95 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창 |
| 96 | `after_kakao_5` | {name} | school_hallway | 없음 |  | 🌅 | *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른 |
| 97 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록  |
| 98 | `after1_jealousy_seo_1` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 점심때 어디 갔어? 매점 갔는데 없더라. |
| 99 | `after1_jealousy_seo_2` | {name} | school_hallway | dain_normal |  | 🌅 | *답장창에 '서연이랑'까지 썼다가 지운다. 커서만 다시 |
| 100 | `after1_jealousy_seo_3` | 다인 | school_hallway | dain_pout |  | 🌅 | 옥상에서 내려오는 거 봤거든. 둘이서? |
| 101 | `after1_jealousy_seo_choice` | 다인 | school_hallway | dain_pout |  | 🌅 | *휴대폰을 쥔 손에 힘을 준다.* |
| 102 | `after1_jealousy_seo_lie` | {name} | school_hallway | dain_normal |  | 🌅 | 아니, 그냥 혼자 돌아다녔어. |
| 103 | `after1_jealousy_seo_lie_2` | 다인 | school_hallway | dain_laugh |  | 🌅 | 진짜? 혼자? — 아 그래, 첫날이니까 헤맸겠다! |
| 104 | `after1_jealousy_seo_yuna` | {name} | school_hallway | dain_normal |  | 🌅 | *가방 옆주머니에 접힌 쪽지가 걸려 있다. 유나의 필체 |
| 105 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *복도를 계속 걷는다.* |
| 106 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도를 걷는데 뒤에서 쿵쿵 발소리.* |
| 107 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 조심! |
| 108 | `after_miss_dain_3` | {name} | school_hallway | dain_normal |  | 🌅 | *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 |
| 109 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 피했다? 반사신경 괜찮은데. |
| 110 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 넌 복도에서 왜 전력질주야? |
| 111 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 늦었거든! 체육관 가야 해. 내일 보자, 전학생! |
| 112 | `after_miss_dain_6_b` | {name} | school_hallway | dain_laugh |  | 🌅 | *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을  |
| 113 | `after_miss_dain_7` | {name} | school_hallway | dain_laugh |  | 🌅 | *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아 |
| 114 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으 |
| 115 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 이거 떨어뜨렸어. |
| 116 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피 |
| 117 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌  |
| 118 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 고마워. |
| 119 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피를 책등 사이에 끼우고 돌아선다.* |
| 120 | `after_miss_yuna_4` | {name} | library_old | yuna_normal |  | 🌅 | *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 |
| 121 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든 |
| 122 | `night_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄 |
| 123 | `night_start_3` | {name} | room_my | 없음 |  |  | *핸드폰이 울린다. 학교 메신저.* |
| 124 | `night_msg_seo_1` | 서연 | room_my | seyoun_normal | 0.35 |  | *오늘 옥상 어땠어?* |
| 125 | `night_msg_seo_2` | {name} | room_my | seyoun_normal | 0.35 |  | *바람이 좋더라* |
| 126 | `night_msg_seo_3` | 서연 | room_my | seyoun_normal | 0.35 |  | *다음엔 음료 정도는 준비해 놓을게* |
| 127 | `night_msg_seo_4` | 서연 | room_my | seyoun_normal | 0.35 |  | *서비스야* |
| 128 | `night_msg_seo_5` | {name} | room_my | seyoun_normal | 0.35 |  | *'서비스야'를 일부러 한 줄 띄어서 보냈다.* |
| 129 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 다른 알림이 보인다.* |
| 130 | `night_late_transition` | {name} | room_my | 없음 |  |  | *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시 |
| 131 | `night_late_branch` | {name} | room_my | 없음 |  |  | *화면이 밝아진다.* |
| 132 | `night_end_1` | {name} | room_my | 없음 |  |  | *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교 |
| 133 | `night_end_3` | {name} | room_my | 없음 |  |  | *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을  |
| | **Day 2** | | | | | | |
| 134 | `morning2_start` | {name} | room_school | 없음 |  |  | *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.* |
| 135 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 136 | `morning2_dain_1` | {name} | room_school | 없음 |  |  | *교실 문을 여는 순간 손바닥이 등짝을 탁 친다.* |
| 137 | `morning2_dain_2` | 다인 | room_school | dain_normal |  |  | 왔어? 좋은 아침. |
| 138 | `morning2_dain_3` | 다인 | room_school | dain_laugh |  |  | 그 정도로? 체력 관리 좀 해. |
| 139 | `morning2_dain_4` | {name} | room_school | dain_laugh |  |  | 너 아침부터 에너지 과잉 아냐? |
| 140 | `morning2_dain_5` | 다인 | room_school | dain_laugh |  |  | 이게 정상이야! 네가 부족한 거야! |
| 141 | `morning2_dain_6` | 다인 | room_school | dain_laugh |  |  | *아침 조회 전 교실에 다인의 목소리가 먼저 울린다.* |
| 142 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *자리에 앉으려는데 — 책상 위에 접힌 쪽지가 하나 놓 |
| 143 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 144 | `morning2_note_3` | {name} | room_school | yuna_normal | 0.35 |  | *어제와 같은 글씨. 아래쪽에 장소가 적혀 있다. '도 |
| 145 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가다 교실 안을 들여다본다.* 어제 잘 잤 |
| 146 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 학생회장이 교실까지 인사하러 와? |
| 147 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 순찰이야. — 출석률 확인 겸. |
| 148 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | *복도로 돌아가기 직전 클립보드 끝이 문틀에 한 번 닿 |
| 149 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연이 사라진 복도를 바라보는데 — 뒤에서 민수가 돌 |
| 150 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 이틀 만에 학생회장이 인사하러 오냐? 나 1 |
| 151 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 인기가 없는 거 아닐까. |
| 152 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 그건 맞는데 그게 중요한 게 아니잖아. |
| 153 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *다인은 서연의 뒷모습이 교실 안으로 사라질 때까지 바 |
| 154 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 회장님도 우리 전학생한테 관심 있어? 인기 많네! |
| 155 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | '우리' 전학생? |
| 156 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 내가 먼저 봤잖아. 그럼 우리 맞지. 찜한 거. |
| 157 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *쉬는 시간. 복도로 나왔다.* |
| 158 | `morning2_break_1` | {name} | school_hallway | 없음 |  |  | *서연의 클립보드 끝이 책상에 톡 닿는다. 답할 틈도  |
| 159 | `morning2_seo_dust_1` | {name} | school_hallway | seyoun_normal |  |  | *1교시가 끝난 쉬는 시간, 복도에서 서연과 스친다.  |
| 160 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 잠깐. |
| 161 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *손이 {name}의 어깨에 닿는다. 먼지를 두 번 털 |
| 162 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 옷에 뭐 묻었어. |
| 163 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | *서연의 손이 떨어진 자리에서 가방끈이 비뚤어져 있다. |
| 164 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 왜 그래? 먼지잖아. |
| 165 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *어깨의 먼지는 없어졌는데 가방끈을 두 번이나 다시 고 |
| 166 | `morning2_dain_react_2` | {name} | school_hallway | dain_angry |  |  | *서연이 클립보드를 고쳐 끼고 복도로 간다. 뒤에서 다 |
| 167 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 지금 뭐야? 어깨 만진 거야? |
| 168 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 먼지 털어준 거야. |
| 169 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 먼지가 진짜 있긴 했어? |
| 170 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | *대답 대신 가방끈을 고쳐 잡았다. 다인은 그걸 보고도 |
| 171 | `morning2_end` | {name} | school_hallway | seyoun_normal |  |  | *민수 말로는 1년 동안 먼저 인사한 적도 없다던 서연 |
| 172 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *점심. 주머니에는 유나의 쪽지가 있고 복도 끝에서는  |
| 173 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *누구와 함께할까.* |
| 174 | `lunch2_seo_1_check` | {name} | school_hallway | 없음 |  |  | *옥상으로 올라간다.* |
| 175 | `lunch2_seo_1` | {name} | top_school | seyoun_normal |  |  | *옥상. 어제와 같은 장소. 서연이 도시락을 펼치고 있 |
| 176 | `lunch2_seo_2` | 서연 | top_school | seyoun_normal |  |  | 또 왔네. 맛 들렸나 봐. |
| 177 | `lunch2_seo_3` | {name} | top_school | seyoun_normal |  |  | 밥이 맛있었으니까. |
| 178 | `lunch2_seo_4` | 서연 | top_school | seyoun_laugh |  |  | 밥 때문이야? |
| 179 | `lunch2_seo_5` | {name} | top_school | seyoun_laugh |  |  | 바람도 좋고. |
| 180 | `lunch2_seo_6` | 서연 | top_school | seyoun_normal |  |  | 바람이라. |
| 181 | `lunch2_seo_7` | {name} | top_school | seyoun_normal |  |  | *서연이 도시락 뚜껑을 여는 순간 옥상 문이 철컥 열린 |
| 182 | `lunch2_seo_9` | 다인 | top_school | dain_normal |  |  | 여기 있었네. 찾았다. 옥상에서 먹는 거면 나도 껴도  |
| 183 | `lunch2_seo_10` | 서연 | top_school | seyoun_normal |  |  | 옥상은 허가제야. 그리고 오늘 점심은 내가 먼저 잡았고 |
| 184 | `lunch2_seo_11` | 다인 | top_school | dain_normal |  |  | 그럼 난 지금부터 끼면 되겠네. 나도 앉는다? |
| 185 | `lunch2_seo_12` | {name} | top_school | dain_normal |  |  | *다인이 빈자리에 바로 앉는다. 서연의 젓가락이 계란말 |
| 186 | `lunch2_seo_13b` | 다인 | top_school | dain_normal |  |  | 반가워요, 회장님. 그런데 옆자리는 비었죠? |
| 187 | `lunch2_seo_13b_b` | 서연 | top_school | seyoun_normal |  |  | *서연이 도시락을 {name} 쪽으로 더 붙인다.* 자 |
| 188 | `lunch2_seo_14` | 서연 | top_school | seyoun_normal |  |  | *다인이 앉으려 하자 빈 의자를 발끝으로 자기 쪽에 붙 |
| 189 | `lunch2_seo_15` | {name} | top_school | seyoun_normal |  |  | 같은 반이잖아. 너희 둘도 이제 아는 사이고. |
| 190 | `lunch2_seo_16` | 서연 | top_school | seyoun_normal |  |  | 친해지는 것하고 양보하는 건 다르지. |
| 191 | `lunch2_seo_17` | 다인 | top_school | dain_normal |  |  | 그럼 나도 양보 안 해. 다음 쉬는 시간에 체육관 와. |
| 192 | `lunch2_seo_19` | 서연 | top_school | seyoun_normal |  |  | {name}, 지금 내 앞에서 다음 약속 잡는 거야? |
| 193 | `lunch2_seo_20` | 서연 | top_school | seyoun_normal |  |  | 대답은 나중에 해. 일단 입가에 뭐 묻었어. 가만있어  |
| 194 | `lunch2_seo_choice` | 서연 | top_school | seyoun_normal |  |  | *물티슈를 감은 손가락이 입가로 다가온다.* |
| 195 | `lunch2_seo_c2_1` | {name} | top_school | seyoun_normal |  |  | *손등으로 입가를 닦는다.* |
| 196 | `lunch2_seo_c2_2` | 서연 | top_school | seyoun_pout |  |  | 직접 닦으면 번지잖아. |
| 197 | `lunch2_seo_c2_3` | 서연 | top_school | seyoun_pout |  |  | *도시락 뚜껑을 맞추는 손이 두 번 미끄러진다. 세 번 |
| 198 | `lunch2_seo_end_c2` | {name} | top_school | seyoun_pout |  |  | *손등에 아직 밥풀 자국이 남아 있다. 서연은 도시락  |
| 199 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *방과후. 핸드폰에 알림이 두 개 와 있다.* |
| 200 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 체육관 와. 오늘은 진짜 내기다. |
| 201 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 학생회실에 올 수 있어? 일손이 부족해서. |
| 202 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게서는 아무 연락이 없다. 가방을 챙기자 주머니 |
| 203 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *어디로 갈까.* |
| 204 | `after2_yuna_1` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *유나한테는 연락이 없지만 도서관으로 향한다. 주머니  |
| 205 | `after2_yuna_1_b` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *별관 복도에는 인기척이 없다. 비밀 독서 공간 문만  |
| 206 | `after2_yuna_2` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *문을 밀자 오래된 경첩이 짧게 운다. 유나는 소파에서 |
| 207 | `after2_yuna_2_b` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | *책 위에 올려 둔 이어폰 한쪽을 옆으로 치운다.* |
| 208 | `after2_yuna_3` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 왔네. |
| 209 | `after2_yuna_4` | {name} | yuna_hideout | yuna_normal |  | 🌅 | 부른 적 없잖아. |
| 210 | `after2_yuna_5` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 불러야 오는 거야? |
| 211 | `after2_yuna_6` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | *검지가 같은 문장 밑을 두 번 따라간다.* |
| 212 | `after2_yuna_7` | {name} | yuna_hideout | yuna_normal |  | 🌅 | 문이 열려 있길래. |
| 213 | `after2_yuna_8` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 우연히. |
| 214 | `after2_yuna_8b` | {name} | yuna_hideout | yuna_shy |  | 🌅 | *안쪽 의자에는 이어폰 한쪽이 이미 놓여 있다. 유나는 |
| 215 | `after2_yuna_8c` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 들어봐. |
| 216 | `after2_yuna_8d` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *이어폰에서 낮은 피아노 곡이 흐른다. 유나는 책을 읽 |
| 217 | `after2_yuna_choice_pre1` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | *이어폰 줄을 한 번 풀어내며 말한다.* 방과후에 여기 |
| 218 | `after2_yuna_choice_pre2` | {name} | yuna_hideout | yuna_normal |  | 🌅 | 응? |
| 219 | `after2_yuna_choice_pre3` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 선배 이후로 없었어. |
| 220 | `after2_yuna_choice_pre3_b` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | *유나가 책 위로 {name}을 바로 본다. 이어폰 줄 |
| 221 | `after2_yuna_choice` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *이어폰 줄이 유나의 손가락 사이에서 한 번 더 감긴다 |
| 222 | `after2_yuna_quiet` | 유나 | yuna_hideout | yuna_smile |  | 🌅 | 그래서 여기가 좋은 거야. |
| 223 | `after2_yuna_quiet_react` | 유나 | yuna_hideout | yuna_smile |  | 🌅 | *책갈피가 한 장 뒤로 옮겨간다. 소파 끝의 이어폰은  |
| 224 | `after2_yuna_end` | {name} | yuna_hideout | yuna_smile |  | 🌅 | *유나와 나란히 앉아 있던 자리에는 이어폰 한쪽이 남아 |
| 225 | `after2_yuna_rival_dain_check` |  | yuna_hideout | 없음 |  | 🌅 |  |
| 226 | `after2_yuna_rival_dain_low` | 다인 | yuna_hideout | dain_laugh |  | 🌅 | 도서관 쪽이었어? 내일 봐! |
| 227 | `after2_yuna_rival_seo_check` |  | yuna_hideout | 없음 |  | 🌅 |  |
| 228 | `after2_yuna_rival_seo_low` | 서연 | yuna_hideout | seyoun_normal |  | 🌅 | 일손은 채웠어. 내일 보자. |
| 229 | `after2_yuna_return` | {name} | school | yuna_smile |  | 🌅 | *도서관 별관을 나서자 복도 자동등이 켜진다.* |
| 230 | `after2_group_yuna_companion` | 유나와 동행 | library_old | 없음 |  | 🌅 | *정리할 자료는 두 묶음인데 남은 시간은 한쪽을 끝내기 |
| 231 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.* |
| 232 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 233 | `minsu_warn_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문을 나서는데 — 민수가 뒤에서 따라온다. |
| 234 | `minsu_warn_1_b` | 민수 | school | minsu_normal |  | 🌅 | *성큼 따라와 옆에 나란히 선다.* |
| 235 | `minsu_warn_2` | 민수 | school | minsu_smirk |  | 🌅 | 야. |
| 236 | `minsu_warn_3` | {name} | school | minsu_smirk |  | 🌅 | 왜? |
| 237 | `minsu_warn_4` | 민수 | school | minsu_smirk |  | 🌅 | 너 요즘 재밌냐? |
| 238 | `minsu_warn_4_b` | {name} | school | minsu_normal |  | 🌅 | *민수는 교문 밖 횡단보도 신호만 보고 있다.* |
| 239 | `minsu_warn_5` | {name} | school | minsu_smirk |  | 🌅 | 갑자기? |
| 240 | `minsu_warn_6` | 민수 | school | minsu_smirk |  | 🌅 | 점심엔 한 명, 방과후엔 또 한 명. 넌 재밌겠지. — |
| 241 | `night2_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저  |
| 242 | `night2_msg_1` | {name} | room_my | 없음 |  |  | *세 명에게서 메시지가 왔다.* |
| 243 | `night2_msg_yuna_specific` | 유나 | room_my | yuna_normal | 0.35 |  | 오늘 그 곡, 좋았어 |
| 244 | `night2_msg_yuna_specific_2` | 유나 | room_my | yuna_normal | 0.35 |  | 다음에 또 들려줘 |
| 245 | `night2_msg_dain_general` | 다인 | room_my | dain_normal | 0.35 |  | 야, 내일 매점 가자! 오늘 못 간 거 아직 아쉽거든! |
| 246 | `night2_msg_dain_general_merge` | 서연 | room_my | seyoun_normal | 0.35 |  | 점심에 옥상 올래? 바람 좋을 거야 |
| 247 | `night2_msg_seo_general_alt` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 옥상 열어둘게. 시간 되면 와 |
| 248 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에  |
| 249 | `night2_choice` | {name} | room_my | 없음 |  |  | *누구에게 먼저 답장할까?* |
| 250 | `night2_reply_yuna_1` | {name} | room_my | yuna_normal | 0.35 |  | 아직 반 정도. 재밌어 |
| 251 | `night2_reply_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | 다행이네 |
| 252 | `night2_reply_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *답장창이 한동안 비어 있다. 그러다 새 말풍선이 올라 |
| 253 | `night2_reply_yuna_4` | 유나 | room_my | yuna_normal | 0.35 |  | 아까 재생목록. 세 번째 곡도 들어봐 |
| 254 | `night2_reply_yuna_5` | {name} | room_my | yuna_normal | 0.35 |  | *유나가 공유한 재생목록을 다시 연다. 세 번째 곡은  |
| 255 | `night2_reply_yuna_6` | 유나 | room_my | yuna_normal | 0.35 |  | 끝까지 들어봐 |
| 256 | `night2_reply_yuna_6_b` | {name} | room_my | yuna_normal | 0.35 |  | *이어폰을 끼고 재생 버튼을 누른다. 피아노 뒤로 낮은 |
| 257 | `night2_reply_yuna_6_c` | {name} | room_my | yuna_normal | 0.35 |  | *곡이 끝나고 재생 화면의 진행 바가 마지막 칸에 멈춘 |
| 258 | `night2_reply_yuna_7` | {name} | room_my | yuna_normal | 0.35 |  | *재생목록 제목 아래에 유나가 남긴 짧은 메모가 보인다 |
| 259 | `night2_reply_yuna_react_default` | 유나 | room_my | yuna_normal | 0.35 |  | 응. 잘 자. |
| 260 | `night2_yuna_freetalk` | 유나 | room_my | yuna_normal | 0.35 | 🌙 | 잠깐. 아직 깨어 있으면... 조금만 더 얘기할래? |
| 261 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 또 다른 알림이 보인다.* |
| 262 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 보내고 핸드폰을 내려놓았다.* |
| 263 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이,  |
| 264 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 |
| 265 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *메모장에 줄줄이 남은 보내지 않은 문장. '선생님,  |
| 266 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 메모가 마지막이다. 그 아래 39번째에는 제 |
| 267 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 |
| 268 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로 |
| 269 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보 |
| 270 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화 |
| 271 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 |
| 272 | `night2_end_2_b` | {name} | room_my | 없음 |  |  | *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있 |
| 273 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.* |
| 274 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을  |
| 275 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 |
| | **Day 3** | | | | | | |
| 276 | `morning3_start` | {name} | school | 없음 |  |  | *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯 |
| 277 | `morning3_start_2` | {name} | school | 없음 |  |  | *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군 |
| 278 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 279 | `morning3_seo_gate_1` | {name} | school | seyoun_normal |  |  | *교문 앞의 서연은 지각 종이 울리기 직전인데도 발을  |
| 280 | `morning3_seo_gate_cold_1` | 서연 | school | seyoun_normal |  |  | *서연이 지나치다 명찰 쪽으로 눈만 돌린다.* |
| 281 | `morning3_seo_gate_cold_2` | 서연 | school | seyoun_normal |  |  | 전학생. 아직 다니고 있었구나. |
| 282 | `morning3_seo_gate_cold_3` | {name} | school | seyoun_normal |  |  | *평소처럼 이름도 부르지 않았다. 서연의 구두 소리만  |
| 283 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실에 들어서자 서연의 펜이 멈추고 다인의 의자가 뒤 |
| 284 | `morning3_react_seo_1` | 다인 | room_school | dain_normal |  |  | 야, 회장님이랑 같이 왔어? 아침부터? |
| 285 | `morning3_react_seo_2` | 유나 | room_school | yuna_bored |  |  | *창밖을 보던 유나가 유리창에 비친 {name}을 확인 |
| 286 | `morning3_date_intro` | {name} | room_school | 없음 |  |  | *1교시가 끝났다. 쉬는 시간마다 누군가 말을 건다.* |
| 287 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *쉬는 시간, 복도로 나왔다. 서연이 먼저 걸음을 맞춘 |
| 288 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | 이번 주말에 시간 있어? 공원에 같이 가자. |
| 289 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끈다. 눈이 마주치 |
| 290 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼  |
| 291 | `morning3_date_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 배구공을 옆구리에 낀 채 이쪽을 보다가 코트로 |
| 292 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다 |
| 293 | `morning3_date_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 접어 둔 쪽지를 꺼내려다 다시 책갈피 사이에  |
| 294 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 295 | `morning3_end` | {name} | room_school | 없음 |  |  | *수업 종료 종이 울리고 곧 점심시간이 된다.* |
| 296 | `morning3_end_b` | 유나 | room_school | yuna_normal |  |  | 맛있네. |
| 297 | `lunch3_start` | {name} | room_school | yuna_normal |  |  | *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. |
| 298 | `lunch3_start_2_b` | 다인 | room_school | dain_normal |  |  | *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가 |
| 299 | `lunch3_meal_1` | 다인 | room_school | dain_laugh |  |  | 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고  |
| 300 | `lunch3_meal_2` | {name} | room_school | dain_laugh |  |  | 그건 내 거... |
| 301 | `lunch3_meal_3` | 서연 | room_school | seyoun_normal |  |  | 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점 |
| 302 | `lunch3_meal_4` | {name} | room_school | seyoun_normal |  |  | 점수 매기지 마. |
| 303 | `lunch3_meal_5` | 서연 | room_school | seyoun_normal |  |  | 10점 만점이야. 나쁜 거 아닌데? |
| 304 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다 |
| 305 | `lunch3_meal_7` | {name} | room_school | seyoun_normal |  |  | 유나, 그건 내가 제일 좋아하는 건데. |
| 306 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임 |
| 307 | `lunch3_meal_8` | {name} | room_school | yuna_bored |  |  | *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다. |
| 308 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. |
| 309 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓 |
| 310 | `lunch3_meal_11` | {name} | room_school | yuna_bored |  |  | *누구에게 줄까?* |
| 311 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *마지막 반찬을 누구에게 줄지 고민한다.* |
| 312 | `lunch3_give_yuna_1` | 유나 | room_school | yuna_normal |  |  | 고마워. |
| 313 | `lunch3_yuna_skin_check` |  | room_school | yuna_normal |  |  |  |
| 314 | `lunch3_give_yuna_2_check` |  | room_school | 없음 |  |  |  |
| 315 | `lunch3_give_yuna_seo_affinity` |  | room_school | 없음 |  |  |  |
| 316 | `lunch3_give_yuna_seo_low` | 서연 | room_school | seyoun_normal |  |  | *서연은 자기 도시락을 정리한다.* |
| 317 | `lunch3_give_yuna_3_check` |  | room_school | 없음 |  |  |  |
| 318 | `lunch3_give_yuna_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 빈 물병을 가방에 넣는다.* 난 괜찮아. |
| 319 | `lunch3_end` | {name} | room_school | 없음 |  |  | *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다 |
| 320 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육 |
| 321 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다 |
| 322 | `after3_choice` | {name} | school_hallway | 없음 |  | 🌅 | *어디로 갈까.* |
| 323 | `after3_rivals_for_yuna_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 324 | `after3_rival_seo_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 325 | `after3_rival_seo_affinity` |  | school_hallway | 없음 |  | 🌅 |  |
| 326 | `after3_rival_seo_done` |  | school_hallway | 없음 |  | 🌅 |  |
| 327 | `after3_rival_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 328 | `after3_rival_dain_affinity` |  | school_hallway | 없음 |  | 🌅 |  |
| 329 | `after3_rival_dain_done` |  | school_hallway | 없음 |  | 🌅 |  |
| 330 | `after3_yuna_affinity_check` |  | yuna_hideout | 없음 |  | 🌅 |  |
| 331 | `after3_yuna_partial_1` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *별관 문은 열려 있지만 유나는 책을 펼치지 않는다.  |
| 332 | `after3_yuna_partial_2` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | 오늘은 여기까지만. 다음에는 내가 먼저 부를게. |
| 333 | `after3_yuna_end` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | *유나가 노트를 품에 꼭 끌어안는다.* |
| 334 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.* |
| 335 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 336 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 337 | `minsu_d3_check` | {name} | school | 없음 |  | 🌅 |  |
| 338 | `minsu_d3_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문 앞에 민수가 서 있다.* |
| 339 | `minsu_d3_2` | 민수 | school | 없음 |  | 🌅 | 봤다. |
| 340 | `minsu_d3_3` | 민수 | school | 없음 |  | 🌅 | 점심때. 그리고 방금 서연 표정도. |
| 341 | `minsu_d3_4` | 민수 | school | 없음 |  | 🌅 | 어제 내가 뭐랬냐. 나중에 셋 다 울면 네 탓이라고 했 |
| 342 | `minsu_d3_5` | 민수 | school | 없음 |  | 🌅 | 옆에서 보기 좀 힘들다. 걔들 다 좋은 애들이야. 네가 |
| 343 | `minsu_d3_5b` | 민수 | school | 없음 |  | 🌅 | *민수는 빨대 포장지를 끝까지 접어 테이블 위에 내려놓 |
| 344 | `minsu_d3_6` | {name} | school | 없음 |  | 🌅 | 맞아. |
| 345 | `minsu_d3_6b` | 민수 | school | 없음 |  | 🌅 | 전 학교에서 뭔 일 있었는지 안 물어볼게. 근데 하나만 |
| 346 | `minsu_d3_7` | 민수 | school | 없음 |  | 🌅 | 거절도 배려야. 안 되는 관계에 계속 여지 주는 것보다 |
| 347 | `minsu_d3_8` | {name} | school | 없음 |  | 🌅 | *거절도 배려다. 전 학교에서 나는 소정이에게 고백할  |
| 348 | `minsu_d3_9` | 민수 | school | 없음 |  | 🌅 | *민수는 더 말하지 않고 끝까지 접은 빨대 포장지를 내 |
| 349 | `minsu_d3_10` | 민수 | school | 없음 |  | 🌅 | 내일 학교에서 보자. 진지하게 생각해. |
| 350 | `night3_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 가방을 의자에 걸어 둔다.* |
| 351 | `night3_start_2` | {name} | room_my | 없음 |  |  | *책상 위에 엎어 둔 핸드폰 화면을 켠다.* |
| 352 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *읽지 않은 메시지가 떠 있다.* |
| 353 | `night3_dream_1` | {name} | school | 없음 |  |  | *꿈속에서 누군가와 나란히 걷는다. 얼굴은 보이지 않고 |
| 354 | `night3_dream_2_b` | {name} | school | 없음 |  |  | *메모장을 닫았다. 내일 보낼 문장은 아직 없다.* |
| 355 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *커튼 사이로 들어온 아침 햇살에 눈을 뜬다. 핸드폰  |
| 356 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *'삭제하시겠습니까?' 확인 창이 뜬다. 손가락이 버튼 |
| 357 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *1초 동안 화면을 내려다본다. 소정이 책상의 낙서와  |
| 358 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *그래. 삭제 버튼에 올린 손가락으로 화면을 누른다.* |
| 359 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼을 누르지 않고 사진을 새 폴더로 옮긴다.  |
| 360 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *'거절도 네가 해야 할 일이야.' 민수의 말이 떠오른 |
| 361 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *갤러리에서 소정이 사진이 사라지고 빈칸만 남는다.* |
| 362 | `night3_faithful_reflect_4_b` | {name} | room_my | 없음 |  |  | *빈 앨범 썸네일 위를 엄지로 문지른다.* |
| 363 | `night3_faithful_reflect_4_c` | {name} | room_my | 없음 |  |  | *핸드폰을 덮자 검은 화면에 갤러리의 빈칸이 겹쳐 보인 |
| 364 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *알람이 울리기 전에 눈을 떴다.* |
| 365 | `night3_end` | {name} | room_my | 없음 |  |  | *방 불을 끄고 핸드폰을 엎어 둔다.* |
| | **Day 4** | | | | | | |
| 366 | `morning4_start` | {name} | room_my | 없음 |  |  | *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다 |
| 367 | `morning4_nightmare_check` |  | room_my | 없음 |  |  |  |
| 368 | `minsu_cheer_1` | {name} | room_my | 없음 |  |  | *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.* |
| 369 | `minsu_cheer_1_b` | 민수 | room_my | minsu_normal | 0.35 |  | *야 오늘 데이트라며?* |
| 370 | `minsu_cheer_1_c` | {name} | room_my | minsu_normal | 0.35 |  | *어떻게 알았어* |
| 371 | `minsu_cheer_1_d` | 민수 | room_my | minsu_normal | 0.35 |  | *다인이가 단톡방에 올림. 내일 약속 있음, 이라고* |
| 372 | `minsu_cheer_2` | 민수 | room_my | minsu_normal | 0.35 |  | 잘하고 와ㅋㅋ |
| 373 | `minsu_cheer_3` | {name} | room_my | minsu_normal | 0.35 |  | 알아. |
| 374 | `minsu_cheer_4_branch` |  | room_my | 없음 |  |  |  |
| 375 | `minsu_cheer_4_ins_single` | {name} | room_my | minsu_normal | 0.35 |  | *핸드폰 캘린더를 본다. 오늘 약속은 하나뿐이다.* |
| 376 | `morning4_start_2` | {name} | room_my | 없음 |  |  | *심호흡하고 약속 메시지를 다시 확인한다.* |
| 377 | `morning4_yuna_msg_1` | 유나 | room_my | yuna_normal | 0.35 |  | 10시. 역 앞 카페. 늦으면 간다. |
| 378 | `morning4_yuna_msg_1_b` | {name} | room_my | yuna_normal | 0.35 |  | *두 문장뿐이다. '늦으면 간다' 뒤에는 마침표도 없다 |
| 379 | `morning4_yuna_msg_single` | {name} | room_my | yuna_normal | 0.35 |  | *메시지는 짧다. 오늘 약속은 하나뿐이다.* |
| 380 | `morning4_hidden_check` | {name} | room_my | 없음 |  |  | *주말 아침, 학교 앞 사거리에서 신호를 기다린다.* |
| 381 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 382 | `morning4_end` | {name} | room_my | 없음 |  |  | *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 |
| 383 | `date_yuna_1` | {name} | cafe | yuna_normal |  |  | *카페 앞. 유나가 벽에 기대어 서 있다. 검은 원피스 |
| 384 | `date_yuna_tier_check` |  | cafe | 없음 |  |  |  |
| 385 | `date_yuna_tentative_1` | 유나 | cafe | yuna_normal |  |  | 오늘은 책 얘기만 하자. |
| 386 | `date_yuna_tentative_2` | {name} | cafe | yuna_normal |  |  | *대화는 이어지지만 유나는 가방 속 오래된 책을 꺼내지 |
| 387 | `date_yuna_tentative_3` | 유나 | street | yuna_normal |  |  | 다음에는 내가 먼저 연락할게. 오늘은 여기까지. |
| 388 | `day4_night_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 옷소매에 공원 흙과 학교 먼지가 조금 |
| 389 | `day4_night_branch` | 시스템 | room_my | 없음 |  |  |  |
| 390 | `day4_student_night_branch` |  | room_my | 없음 |  |  |  |
| 391 | `day4_night_regret` | {name} | room_my | 없음 |  |  | *집으로 돌아온 뒤에도 채팅창에는 입력하다 만 문장이  |
| 392 | `day4_night_regret_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 393 | `day4_night_regret_msg_yuna` | 유나 | room_my | yuna_normal | 0.35 |  | 오늘, 나도 기대했어. 말은 더 줄었지만. |
| 394 | `day4_night_regret_reply` | {name} | room_my | 없음 |  |  | *답장을 쓰다 지운다. 입력창에는 받침 하나만 남았다가 |
| 395 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 396 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *알람을 일요일 오전으로 맞추고 방 불을 끈다. 전하지 |
| 397 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안 시계가 자정 쪽으로 넘어간다. 휴대폰 화면도  |
| | **Day 5** | | | | | | |
| 398 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소 |
| 399 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 400 | `morning5_start_b` | {name} | room_school | 없음 |  |  | *교실에 들어서자 세 가지가 한꺼번에 눈에 들어온다.  |
| 401 | `morning5_start_2_b` | {name} | room_school | 없음 |  |  | *책상 위에 쪽지가 놓여 있다. 서연의 글씨.* |
| 402 | `morning5_mood_check` | 시스템 | room_school | 없음 |  |  |  |
| 403 | `morning5_mood_low` | {name} | room_school | 없음 |  |  | 마지막 날. 잠금화면에 남은 이름 셋을 차례로 누른다. |
| 404 | `morning5_gate` | {name} | school | 없음 |  |  | *교문 앞에서 소매를 걷어 올린다. 손목에 남던 붉은  |
| 405 | `morning5_seo_note_1` | {name} | room_school | seyoun_normal |  |  | *책상 위에 쪽지가 놓여 있다. 서연의 글씨. — '오 |
| 406 | `morning5_seo_note_1_b` | {name} | school_hallway | 없음 |  |  | *복도 문예부 전시 코너를 지나다 게시판의 빈 압정 네 |
| 407 | `morning5_seo_note_1_c` | {name} | school_hallway | 없음 |  |  | *게시판에 단편소설이 붙어 있다. 제목: '도서관에서  |
| 408 | `morning5_yuna_story_1` | {name} | school_hallway | yuna_normal |  |  | *소설 속 인물은 도서관에서 잠든 누군가의 어깨에 담요 |
| 409 | `morning5_yuna_story_2` | {name} | school_hallway | 없음 |  |  | *마지막 문장. '그 사람이 눈을 떴을 때, 나는 이미 |
| 410 | `morning5_yuna_story_4` | {name} | school_hallway | yuna_normal |  |  | *게시판 아래 구석에는 작은 글씨가 남아 있다. '이건 |
| 411 | `morning5_return_class` | {name} | room_school | dain_normal |  |  | *교실로 돌아오니 다인이 기다리고 있다.* |
| 412 | `morning5_dain_1` | 다인 | room_school | dain_normal |  |  | 야, 오늘 체육 이벤트 파트너로 너 써놨어. |
| 413 | `morning5_dain_1_b` | {name} | room_school | dain_normal |  |  | 허락도 없이? |
| 414 | `morning5_dain_2` | 다인 | room_school | dain_laugh |  |  | 늦으면 화낸다? |
| 415 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *행사 준비 시간. 복도를 걷는데 — 빈 교실 앞을 지 |
| 416 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *행사 중간 쉬는 시간. 보건실 앞을 지나간다.* |
| 417 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 418 | `morning5_sojeong_1` | {name} | room_school | 없음 |  |  | *휴대폰 메모 앱을 연다. '소정에게'로 시작하는 빈  |
| 419 | `morning5_sojeong_2` | {name} | room_school | 없음 |  |  | *마흔 번째 초안은 쓰지 않는다. 가장 짧은 문장을 골 |
| 420 | `morning5_sojeong_3` | {name} | room_school | 없음 |  |  | 그때 네 책상과 낙서를 보고도 선생님께 말하지 않았어. |
| 421 | `morning5_sojeong_4` | {name} | room_school | 없음 |  |  | *전송 표시가 뜬다. 읽음 표시는 기다리지 않고 대화방 |
| 422 | `morning5_sojeong_5` | {name} | room_school | 없음 |  |  | *지금 담임에게도 메시지를 보낸다. '전학 오기 전 학 |
| 423 | `morning5_route_branch` |  | room_school | 없음 |  |  |  |
| 424 | `morning5_end` | {name} | room_school | 없음 |  |  | *세 방향에서 온 쪽지와 알림을 책상 위에 나란히 둔다 |
| 425 | `tour_yuna_1_check` | {name} | yuna_hideout | 없음 |  |  | *도서관 별관으로 간다.* |
| 426 | `tour_yuna_low` | 유나 | yuna_hideout | yuna_normal |  |  | *별관 문은 잠겨 있다. 잠시 뒤 유나에게 짧은 메시지 |
| 427 | `after5_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 428 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *행사가 끝나갈 무렵, 복도에서 선택하지 않은 두 사람 |
| 429 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 430 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다.* |
| 431 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다. 서연은 잠시 멈췄다가 고개 |
| 432 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 433 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 434 | `after5_farewell_dain_1` | {name} | gym | dain_normal |  | 🌅 | *체육관 앞에서 다인이 걸어온다. 평소보다 보폭이 작다 |
| 435 | `after5_farewell_dain_low` | 다인 | gym | dain_normal |  | 🌅 | *체육관 앞에서 다인이 걸어오다 두 걸음 떨어진 곳에  |
| 436 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *석양이 교정 창문마다 걸린다. 방송실에서 행사 종료  |
| 437 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 438 | `after5_last_chance_1` | {name} | school_back | 없음 |  | 🌅 | *행사장 스피커 전원이 꺼진다. 갈림길 안내판 아래에서 |
| 439 | `after5_last_chance_2` | {name} | school_back | 없음 |  | 🌅 | *주머니 속 휴대폰을 꺼낸다. 검은 화면에 행사 현수막 |
| 440 | `after5_last_chance_route_check` |  | school_back | 없음 |  | 🌅 |  |
| 441 | `after5_last_chance_yuna_history_check` |  | school_back | 없음 |  | 🌅 |  |
| 442 | `after5_last_chance_yuna_tentative` | 유나 | school_back | yuna_normal |  | 🌅 | 어제는 내가 먼저 연락하겠다고 했는데. 오늘은 네가 왔 |
| 443 | `after5_last_chance_yuna_aff_check` |  | school_back | 없음 |  | 🌅 |  |
| 444 | `after5_last_chance_yuna_low_1` | {name} | school_back | 없음 |  | 🌅 | 유나. |
| 445 | `after5_last_chance_yuna_low_2` | 유나 | school_back | yuna_normal |  | 🌅 | *책장 사이로 돌아본다. 책을 끌어안은 팔에 힘이 들어 |
| 446 | `after5_last_chance_choice` | {name} | school_back | 없음 |  | 🌅 | *손바닥 안에서 핸드폰이 눌린다.* |
| 447 | `after5_confess_yes` | {name} | school_back | 없음 |  | 🌅 | *휴대폰을 주머니에 넣고 이름을 부른다.* |
| 448 | `after5_confess_yes_2` | {name} | school_back | 없음 |  | 🌅 | 나, 너한테 할 말이 있어. |
| 449 | `after5_confess_aff_yuna` |  | school_back | 없음 |  | 🌅 |  |
| 450 | `after5_confess_react_yuna_low` | 유나 | school_back | yuna_sad |  | 🌅 | *쪽지를 접어 쥔다.* 읽었어. 근데 아직 결말은 못  |
| 451 | `after5_confess_fail_walk_1` | {name} | school_back | 없음 |  | 🌅 | *해가 더 내려앉는다. 같은 쪽으로 걷기만 한다.* |
| 452 | `after5_confess_fail_walk_2` | {name} | park | 없음 |  | 🌅 | *답을 못 낸 채 공원 쪽으로 걸었다.* |
| 453 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 454 | `ending_last_chance_resolve` | 시스템 | park | 없음 |  |  |  |
| 455 | `ending_confessed_aff_check` | 시스템 | park | 없음 |  |  |  |
| 456 | `ending_confessed_aff_yuna` | 시스템 | yuna_hideout | 없음 |  |  |  |
| 457 | `day5_ending_confess_fail` | {name} | park | 없음 |  |  | *공원까지 걸어와 겨우 말했다. 대답을 기다리는 동안  |
| 458 | `confess_fail_cg_yuna` | 유나 | ending_confess_fail_yuna | 없음 |  |  | *둘은 공원 출구까지 나란히 걷지만 손은 닿지 않는다. |
| 459 | `confess_fail_1` | {name} | ending_bittersweet | 없음 |  |  | *며칠 뒤, 비 오는 학교 정문. 우산 아래서 멀어지는 |
| 460 | `confess_fail_2` | {name} | ending_bittersweet | 없음 |  |  | *그 자리에 선 채 대화방을 연다. 썼다 지운 끝에 한 |
| 461 | `confess_fail_3` | {name} | ending_bittersweet | 없음 |  |  | *'알겠어. 답해줘서 고마워.'를 보내고 휴대폰을 내려 |
| 462 | `confess_fail_4` | {name} | ending_bittersweet | 없음 |  |  | *읽음 표시가 붙는다. 답장은 오지 않는다. 더 보내지 |
| 463 | `confess_fail_5` | 시스템 | ending_bittersweet | 없음 |  |  | ─── CONFESSION REJECTED END ── |
| 464 | `day5_credits` |  | school | 없음 |  |  |  |
| 465 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### friend_12

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_seo_choice`: (선택)
- `after1_jealousy_seo_choice`: (선택)
- `after_end`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_seo_choice`: (선택)
- `after2_choice`: (선택)
- `after2_yuna_choice`: (선택)
- `night2_choice`: (선택)
- `lunch3_choice`: (선택)
- `after3_choice`: (선택)
- `after5_last_chance_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=4 유나=16 다인=-1 담임=0 보건=0

<details>
<summary>씬 타임라인 (466씬)</summary>

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
| 82 | `lunch_seo_c2_1` | 서연 | top_school | seyoun_normal |  |  | *계란말이를 자기 입에 넣는다. 씹는 동안 젓가락 끝으 |
| 83 | `lunch_seo_c2_2` | 서연 | top_school | seyoun_normal |  |  | 맞네. 맛있어. |
| 84 | `lunch_seo_c2_3` | 서연 | top_school | seyoun_normal |  |  | *도시락 뚜껑의 모서리를 맞추다 두 번 어긋난다. 세  |
| 85 | `lunch_seo_after` | {name} | top_school | seyoun_normal |  |  | *운동장 스피커에서 점심 종료를 알리는 예비음이 울린다 |
| 86 | `lunch_seo_after_2` | 서연 | top_school | seyoun_normal |  |  | 다음에도 점심시간 비워둬. |
| 87 | `lunch_seo_after_3` | {name} | top_school | seyoun_normal |  |  | 초대해 주는 거야? |
| 88 | `lunch_seo_after_4` | 서연 | top_school | seyoun_normal |  |  | 아니. 허가해 주는 거야. |
| 89 | `lunch_seo_after_5` | 서연 | top_school | seyoun_normal |  |  | *도시락 끈을 한 번 묶었다가 더 짧게 조인다.* |
| 90 | `lunch_seo_after_7` | {name} | top_school | seyoun_normal |  |  | *도시락 매듭이 처음보다 단단해져 있다.* |
| 91 | `lunch_seo_freetalk` | 서연 | top_school | seyoun_normal |  |  | *도시락 뚜껑을 정리하고 접이식 의자를 신발 끝으로 한 |
| 92 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *종이 울린다. 점심시간이 끝났다.* |
| 93 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에 |
| 94 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 95 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창 |
| 96 | `after_kakao_5` | {name} | school_hallway | 없음 |  | 🌅 | *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른 |
| 97 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록  |
| 98 | `after1_jealousy_seo_1` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 점심때 어디 갔어? 매점 갔는데 없더라. |
| 99 | `after1_jealousy_seo_2` | {name} | school_hallway | dain_normal |  | 🌅 | *답장창에 '서연이랑'까지 썼다가 지운다. 커서만 다시 |
| 100 | `after1_jealousy_seo_3` | 다인 | school_hallway | dain_pout |  | 🌅 | 옥상에서 내려오는 거 봤거든. 둘이서? |
| 101 | `after1_jealousy_seo_choice` | 다인 | school_hallway | dain_pout |  | 🌅 | *휴대폰을 쥔 손에 힘을 준다.* |
| 102 | `after1_jealousy_seo_lie` | {name} | school_hallway | dain_normal |  | 🌅 | 아니, 그냥 혼자 돌아다녔어. |
| 103 | `after1_jealousy_seo_lie_2` | 다인 | school_hallway | dain_laugh |  | 🌅 | 진짜? 혼자? — 아 그래, 첫날이니까 헤맸겠다! |
| 104 | `after1_jealousy_seo_yuna` | {name} | school_hallway | dain_normal |  | 🌅 | *가방 옆주머니에 접힌 쪽지가 걸려 있다. 유나의 필체 |
| 105 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *복도를 계속 걷는다.* |
| 106 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도를 걷는데 뒤에서 쿵쿵 발소리.* |
| 107 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 조심! |
| 108 | `after_miss_dain_3` | {name} | school_hallway | dain_normal |  | 🌅 | *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 |
| 109 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 피했다? 반사신경 괜찮은데. |
| 110 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 넌 복도에서 왜 전력질주야? |
| 111 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 늦었거든! 체육관 가야 해. 내일 보자, 전학생! |
| 112 | `after_miss_dain_6_b` | {name} | school_hallway | dain_laugh |  | 🌅 | *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을  |
| 113 | `after_miss_dain_7` | {name} | school_hallway | dain_laugh |  | 🌅 | *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아 |
| 114 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으 |
| 115 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 이거 떨어뜨렸어. |
| 116 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피 |
| 117 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌  |
| 118 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 고마워. |
| 119 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *책갈피를 책등 사이에 끼우고 돌아선다.* |
| 120 | `after_miss_yuna_4` | {name} | library_old | yuna_normal |  | 🌅 | *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 |
| 121 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든 |
| 122 | `night_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄 |
| 123 | `night_start_3` | {name} | room_my | 없음 |  |  | *핸드폰이 울린다. 학교 메신저.* |
| 124 | `night_msg_seo_1` | 서연 | room_my | seyoun_normal | 0.35 |  | *오늘 옥상 어땠어?* |
| 125 | `night_msg_seo_2` | {name} | room_my | seyoun_normal | 0.35 |  | *바람이 좋더라* |
| 126 | `night_msg_seo_3` | 서연 | room_my | seyoun_normal | 0.35 |  | *다음엔 음료 정도는 준비해 놓을게* |
| 127 | `night_msg_seo_4` | 서연 | room_my | seyoun_normal | 0.35 |  | *서비스야* |
| 128 | `night_msg_seo_5` | {name} | room_my | seyoun_normal | 0.35 |  | *'서비스야'를 일부러 한 줄 띄어서 보냈다.* |
| 129 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 다른 알림이 보인다.* |
| 130 | `night_late_transition` | {name} | room_my | 없음 |  |  | *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시 |
| 131 | `night_late_branch` | {name} | room_my | 없음 |  |  | *화면이 밝아진다.* |
| 132 | `night_end_1` | {name} | room_my | 없음 |  |  | *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교 |
| 133 | `night_end_3` | {name} | room_my | 없음 |  |  | *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을  |
| | **Day 2** | | | | | | |
| 134 | `morning2_start` | {name} | room_school | 없음 |  |  | *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.* |
| 135 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 136 | `morning2_dain_1` | {name} | room_school | 없음 |  |  | *교실 문을 여는 순간 손바닥이 등짝을 탁 친다.* |
| 137 | `morning2_dain_2` | 다인 | room_school | dain_normal |  |  | 왔어? 좋은 아침. |
| 138 | `morning2_dain_3` | 다인 | room_school | dain_laugh |  |  | 그 정도로? 체력 관리 좀 해. |
| 139 | `morning2_dain_4` | {name} | room_school | dain_laugh |  |  | 너 아침부터 에너지 과잉 아냐? |
| 140 | `morning2_dain_5` | 다인 | room_school | dain_laugh |  |  | 이게 정상이야! 네가 부족한 거야! |
| 141 | `morning2_dain_6` | 다인 | room_school | dain_laugh |  |  | *아침 조회 전 교실에 다인의 목소리가 먼저 울린다.* |
| 142 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *자리에 앉으려는데 — 책상 위에 접힌 쪽지가 하나 놓 |
| 143 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 144 | `morning2_note_3` | {name} | room_school | yuna_normal | 0.35 |  | *어제와 같은 글씨. 아래쪽에 장소가 적혀 있다. '도 |
| 145 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가다 교실 안을 들여다본다.* 어제 잘 잤 |
| 146 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 학생회장이 교실까지 인사하러 와? |
| 147 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 순찰이야. — 출석률 확인 겸. |
| 148 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | *복도로 돌아가기 직전 클립보드 끝이 문틀에 한 번 닿 |
| 149 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연이 사라진 복도를 바라보는데 — 뒤에서 민수가 돌 |
| 150 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 이틀 만에 학생회장이 인사하러 오냐? 나 1 |
| 151 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 인기가 없는 거 아닐까. |
| 152 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 그건 맞는데 그게 중요한 게 아니잖아. |
| 153 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *다인은 서연의 뒷모습이 교실 안으로 사라질 때까지 바 |
| 154 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 회장님도 우리 전학생한테 관심 있어? 인기 많네! |
| 155 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | '우리' 전학생? |
| 156 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 내가 먼저 봤잖아. 그럼 우리 맞지. 찜한 거. |
| 157 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *쉬는 시간. 복도로 나왔다.* |
| 158 | `morning2_break_1` | {name} | school_hallway | 없음 |  |  | *서연의 클립보드 끝이 책상에 톡 닿는다. 답할 틈도  |
| 159 | `morning2_seo_dust_1` | {name} | school_hallway | seyoun_normal |  |  | *1교시가 끝난 쉬는 시간, 복도에서 서연과 스친다.  |
| 160 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 잠깐. |
| 161 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *손이 {name}의 어깨에 닿는다. 먼지를 두 번 털 |
| 162 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 옷에 뭐 묻었어. |
| 163 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | *서연의 손이 떨어진 자리에서 가방끈이 비뚤어져 있다. |
| 164 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 왜 그래? 먼지잖아. |
| 165 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *어깨의 먼지는 없어졌는데 가방끈을 두 번이나 다시 고 |
| 166 | `morning2_dain_react_2` | {name} | school_hallway | dain_angry |  |  | *서연이 클립보드를 고쳐 끼고 복도로 간다. 뒤에서 다 |
| 167 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 지금 뭐야? 어깨 만진 거야? |
| 168 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 먼지 털어준 거야. |
| 169 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 먼지가 진짜 있긴 했어? |
| 170 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | *대답 대신 가방끈을 고쳐 잡았다. 다인은 그걸 보고도 |
| 171 | `morning2_end` | {name} | school_hallway | seyoun_normal |  |  | *민수 말로는 1년 동안 먼저 인사한 적도 없다던 서연 |
| 172 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *점심. 주머니에는 유나의 쪽지가 있고 복도 끝에서는  |
| 173 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *누구와 함께할까.* |
| 174 | `lunch2_seo_1_check` | {name} | school_hallway | 없음 |  |  | *옥상으로 올라간다.* |
| 175 | `lunch2_seo_1` | {name} | top_school | seyoun_normal |  |  | *옥상. 어제와 같은 장소. 서연이 도시락을 펼치고 있 |
| 176 | `lunch2_seo_2` | 서연 | top_school | seyoun_normal |  |  | 또 왔네. 맛 들렸나 봐. |
| 177 | `lunch2_seo_3` | {name} | top_school | seyoun_normal |  |  | 밥이 맛있었으니까. |
| 178 | `lunch2_seo_4` | 서연 | top_school | seyoun_laugh |  |  | 밥 때문이야? |
| 179 | `lunch2_seo_5` | {name} | top_school | seyoun_laugh |  |  | 바람도 좋고. |
| 180 | `lunch2_seo_6` | 서연 | top_school | seyoun_normal |  |  | 바람이라. |
| 181 | `lunch2_seo_7` | {name} | top_school | seyoun_normal |  |  | *서연이 도시락 뚜껑을 여는 순간 옥상 문이 철컥 열린 |
| 182 | `lunch2_seo_9` | 다인 | top_school | dain_normal |  |  | 여기 있었네. 찾았다. 옥상에서 먹는 거면 나도 껴도  |
| 183 | `lunch2_seo_10` | 서연 | top_school | seyoun_normal |  |  | 옥상은 허가제야. 그리고 오늘 점심은 내가 먼저 잡았고 |
| 184 | `lunch2_seo_11` | 다인 | top_school | dain_normal |  |  | 그럼 난 지금부터 끼면 되겠네. 나도 앉는다? |
| 185 | `lunch2_seo_12` | {name} | top_school | dain_normal |  |  | *다인이 빈자리에 바로 앉는다. 서연의 젓가락이 계란말 |
| 186 | `lunch2_seo_13b` | 다인 | top_school | dain_normal |  |  | 반가워요, 회장님. 그런데 옆자리는 비었죠? |
| 187 | `lunch2_seo_13b_b` | 서연 | top_school | seyoun_normal |  |  | *서연이 도시락을 {name} 쪽으로 더 붙인다.* 자 |
| 188 | `lunch2_seo_14` | 서연 | top_school | seyoun_normal |  |  | *다인이 앉으려 하자 빈 의자를 발끝으로 자기 쪽에 붙 |
| 189 | `lunch2_seo_15` | {name} | top_school | seyoun_normal |  |  | 같은 반이잖아. 너희 둘도 이제 아는 사이고. |
| 190 | `lunch2_seo_16` | 서연 | top_school | seyoun_normal |  |  | 친해지는 것하고 양보하는 건 다르지. |
| 191 | `lunch2_seo_17` | 다인 | top_school | dain_normal |  |  | 그럼 나도 양보 안 해. 다음 쉬는 시간에 체육관 와. |
| 192 | `lunch2_seo_19` | 서연 | top_school | seyoun_normal |  |  | {name}, 지금 내 앞에서 다음 약속 잡는 거야? |
| 193 | `lunch2_seo_20` | 서연 | top_school | seyoun_normal |  |  | 대답은 나중에 해. 일단 입가에 뭐 묻었어. 가만있어  |
| 194 | `lunch2_seo_choice` | 서연 | top_school | seyoun_normal |  |  | *물티슈를 감은 손가락이 입가로 다가온다.* |
| 195 | `lunch2_seo_c2_1` | {name} | top_school | seyoun_normal |  |  | *손등으로 입가를 닦는다.* |
| 196 | `lunch2_seo_c2_2` | 서연 | top_school | seyoun_pout |  |  | 직접 닦으면 번지잖아. |
| 197 | `lunch2_seo_c2_3` | 서연 | top_school | seyoun_pout |  |  | *도시락 뚜껑을 맞추는 손이 두 번 미끄러진다. 세 번 |
| 198 | `lunch2_seo_end_c2` | {name} | top_school | seyoun_pout |  |  | *손등에 아직 밥풀 자국이 남아 있다. 서연은 도시락  |
| 199 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *방과후. 핸드폰에 알림이 두 개 와 있다.* |
| 200 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 체육관 와. 오늘은 진짜 내기다. |
| 201 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 학생회실에 올 수 있어? 일손이 부족해서. |
| 202 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게서는 아무 연락이 없다. 가방을 챙기자 주머니 |
| 203 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *어디로 갈까.* |
| 204 | `after2_yuna_1` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *유나한테는 연락이 없지만 도서관으로 향한다. 주머니  |
| 205 | `after2_yuna_1_b` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *별관 복도에는 인기척이 없다. 비밀 독서 공간 문만  |
| 206 | `after2_yuna_2` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *문을 밀자 오래된 경첩이 짧게 운다. 유나는 소파에서 |
| 207 | `after2_yuna_2_b` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | *책 위에 올려 둔 이어폰 한쪽을 옆으로 치운다.* |
| 208 | `after2_yuna_3` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 왔네. |
| 209 | `after2_yuna_4` | {name} | yuna_hideout | yuna_normal |  | 🌅 | 부른 적 없잖아. |
| 210 | `after2_yuna_5` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 불러야 오는 거야? |
| 211 | `after2_yuna_6` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | *검지가 같은 문장 밑을 두 번 따라간다.* |
| 212 | `after2_yuna_7` | {name} | yuna_hideout | yuna_normal |  | 🌅 | 문이 열려 있길래. |
| 213 | `after2_yuna_8` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 우연히. |
| 214 | `after2_yuna_8b` | {name} | yuna_hideout | yuna_shy |  | 🌅 | *안쪽 의자에는 이어폰 한쪽이 이미 놓여 있다. 유나는 |
| 215 | `after2_yuna_8c` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 들어봐. |
| 216 | `after2_yuna_8d` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *이어폰에서 낮은 피아노 곡이 흐른다. 유나는 책을 읽 |
| 217 | `after2_yuna_choice_pre1` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | *이어폰 줄을 한 번 풀어내며 말한다.* 방과후에 여기 |
| 218 | `after2_yuna_choice_pre2` | {name} | yuna_hideout | yuna_normal |  | 🌅 | 응? |
| 219 | `after2_yuna_choice_pre3` | 유나 | yuna_hideout | yuna_normal |  | 🌅 | 선배 이후로 없었어. |
| 220 | `after2_yuna_choice_pre3_b` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | *유나가 책 위로 {name}을 바로 본다. 이어폰 줄 |
| 221 | `after2_yuna_choice` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *이어폰 줄이 유나의 손가락 사이에서 한 번 더 감긴다 |
| 222 | `after2_yuna_quiet` | 유나 | yuna_hideout | yuna_smile |  | 🌅 | 그래서 여기가 좋은 거야. |
| 223 | `after2_yuna_quiet_react` | 유나 | yuna_hideout | yuna_smile |  | 🌅 | *책갈피가 한 장 뒤로 옮겨간다. 소파 끝의 이어폰은  |
| 224 | `after2_yuna_end` | {name} | yuna_hideout | yuna_smile |  | 🌅 | *유나와 나란히 앉아 있던 자리에는 이어폰 한쪽이 남아 |
| 225 | `after2_yuna_rival_dain_check` |  | yuna_hideout | 없음 |  | 🌅 |  |
| 226 | `after2_yuna_rival_dain_low` | 다인 | yuna_hideout | dain_laugh |  | 🌅 | 도서관 쪽이었어? 내일 봐! |
| 227 | `after2_yuna_rival_seo_check` |  | yuna_hideout | 없음 |  | 🌅 |  |
| 228 | `after2_yuna_rival_seo_low` | 서연 | yuna_hideout | seyoun_normal |  | 🌅 | 일손은 채웠어. 내일 보자. |
| 229 | `after2_yuna_return` | {name} | school | yuna_smile |  | 🌅 | *도서관 별관을 나서자 복도 자동등이 켜진다.* |
| 230 | `after2_group_yuna_companion` | 유나와 동행 | library_old | 없음 |  | 🌅 | *정리할 자료는 두 묶음인데 남은 시간은 한쪽을 끝내기 |
| 231 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.* |
| 232 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 233 | `minsu_warn_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문을 나서는데 — 민수가 뒤에서 따라온다. |
| 234 | `minsu_warn_1_b` | 민수 | school | minsu_normal |  | 🌅 | *성큼 따라와 옆에 나란히 선다.* |
| 235 | `minsu_warn_2` | 민수 | school | minsu_smirk |  | 🌅 | 야. |
| 236 | `minsu_warn_3` | {name} | school | minsu_smirk |  | 🌅 | 왜? |
| 237 | `minsu_warn_4` | 민수 | school | minsu_smirk |  | 🌅 | 너 요즘 재밌냐? |
| 238 | `minsu_warn_4_b` | {name} | school | minsu_normal |  | 🌅 | *민수는 교문 밖 횡단보도 신호만 보고 있다.* |
| 239 | `minsu_warn_5` | {name} | school | minsu_smirk |  | 🌅 | 갑자기? |
| 240 | `minsu_warn_6` | 민수 | school | minsu_smirk |  | 🌅 | 점심엔 한 명, 방과후엔 또 한 명. 넌 재밌겠지. — |
| 241 | `night2_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저  |
| 242 | `night2_msg_1` | {name} | room_my | 없음 |  |  | *세 명에게서 메시지가 왔다.* |
| 243 | `night2_msg_yuna_specific` | 유나 | room_my | yuna_normal | 0.35 |  | 오늘 그 곡, 좋았어 |
| 244 | `night2_msg_yuna_specific_2` | 유나 | room_my | yuna_normal | 0.35 |  | 다음에 또 들려줘 |
| 245 | `night2_msg_dain_general` | 다인 | room_my | dain_normal | 0.35 |  | 야, 내일 매점 가자! 오늘 못 간 거 아직 아쉽거든! |
| 246 | `night2_msg_dain_general_merge` | 서연 | room_my | seyoun_normal | 0.35 |  | 점심에 옥상 올래? 바람 좋을 거야 |
| 247 | `night2_msg_seo_general_alt` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 옥상 열어둘게. 시간 되면 와 |
| 248 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에  |
| 249 | `night2_choice` | {name} | room_my | 없음 |  |  | *누구에게 먼저 답장할까?* |
| 250 | `night2_reply_yuna_1` | {name} | room_my | yuna_normal | 0.35 |  | 아직 반 정도. 재밌어 |
| 251 | `night2_reply_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | 다행이네 |
| 252 | `night2_reply_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *답장창이 한동안 비어 있다. 그러다 새 말풍선이 올라 |
| 253 | `night2_reply_yuna_4` | 유나 | room_my | yuna_normal | 0.35 |  | 아까 재생목록. 세 번째 곡도 들어봐 |
| 254 | `night2_reply_yuna_5` | {name} | room_my | yuna_normal | 0.35 |  | *유나가 공유한 재생목록을 다시 연다. 세 번째 곡은  |
| 255 | `night2_reply_yuna_6` | 유나 | room_my | yuna_normal | 0.35 |  | 끝까지 들어봐 |
| 256 | `night2_reply_yuna_6_b` | {name} | room_my | yuna_normal | 0.35 |  | *이어폰을 끼고 재생 버튼을 누른다. 피아노 뒤로 낮은 |
| 257 | `night2_reply_yuna_6_c` | {name} | room_my | yuna_normal | 0.35 |  | *곡이 끝나고 재생 화면의 진행 바가 마지막 칸에 멈춘 |
| 258 | `night2_reply_yuna_7` | {name} | room_my | yuna_normal | 0.35 |  | *재생목록 제목 아래에 유나가 남긴 짧은 메모가 보인다 |
| 259 | `night2_reply_yuna_react_default` | 유나 | room_my | yuna_normal | 0.35 |  | 응. 잘 자. |
| 260 | `night2_yuna_freetalk` | 유나 | room_my | yuna_normal | 0.35 | 🌙 | 잠깐. 아직 깨어 있으면... 조금만 더 얘기할래? |
| 261 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 알림 사이에 — 또 다른 알림이 보인다.* |
| 262 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 보내고 핸드폰을 내려놓았다.* |
| 263 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이,  |
| 264 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 |
| 265 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *메모장에 줄줄이 남은 보내지 않은 문장. '선생님,  |
| 266 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 메모가 마지막이다. 그 아래 39번째에는 제 |
| 267 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 |
| 268 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로 |
| 269 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보 |
| 270 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화 |
| 271 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 |
| 272 | `night2_end_2_b` | {name} | room_my | 없음 |  |  | *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있 |
| 273 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.* |
| 274 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을  |
| 275 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 |
| | **Day 3** | | | | | | |
| 276 | `morning3_start` | {name} | school | 없음 |  |  | *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯 |
| 277 | `morning3_start_2` | {name} | school | 없음 |  |  | *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군 |
| 278 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 279 | `morning3_seo_gate_1` | {name} | school | seyoun_normal |  |  | *교문 앞의 서연은 지각 종이 울리기 직전인데도 발을  |
| 280 | `morning3_seo_gate_cold_1` | 서연 | school | seyoun_normal |  |  | *서연이 지나치다 명찰 쪽으로 눈만 돌린다.* |
| 281 | `morning3_seo_gate_cold_2` | 서연 | school | seyoun_normal |  |  | 전학생. 아직 다니고 있었구나. |
| 282 | `morning3_seo_gate_cold_3` | {name} | school | seyoun_normal |  |  | *평소처럼 이름도 부르지 않았다. 서연의 구두 소리만  |
| 283 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실에 들어서자 서연의 펜이 멈추고 다인의 의자가 뒤 |
| 284 | `morning3_react_seo_1` | 다인 | room_school | dain_normal |  |  | 야, 회장님이랑 같이 왔어? 아침부터? |
| 285 | `morning3_react_seo_2` | 유나 | room_school | yuna_bored |  |  | *창밖을 보던 유나가 유리창에 비친 {name}을 확인 |
| 286 | `morning3_date_intro` | {name} | room_school | 없음 |  |  | *1교시가 끝났다. 쉬는 시간마다 누군가 말을 건다.* |
| 287 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *쉬는 시간, 복도로 나왔다. 서연이 먼저 걸음을 맞춘 |
| 288 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | 이번 주말에 시간 있어? 공원에 같이 가자. |
| 289 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끈다. 눈이 마주치 |
| 290 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼  |
| 291 | `morning3_date_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 배구공을 옆구리에 낀 채 이쪽을 보다가 코트로 |
| 292 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다 |
| 293 | `morning3_date_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 접어 둔 쪽지를 꺼내려다 다시 책갈피 사이에  |
| 294 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 295 | `morning3_end` | {name} | room_school | 없음 |  |  | *수업 종료 종이 울리고 곧 점심시간이 된다.* |
| 296 | `morning3_end_b` | 유나 | room_school | yuna_normal |  |  | 맛있네. |
| 297 | `lunch3_start` | {name} | room_school | yuna_normal |  |  | *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. |
| 298 | `lunch3_start_2_b` | 다인 | room_school | dain_normal |  |  | *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가 |
| 299 | `lunch3_meal_1` | 다인 | room_school | dain_laugh |  |  | 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고  |
| 300 | `lunch3_meal_2` | {name} | room_school | dain_laugh |  |  | 그건 내 거... |
| 301 | `lunch3_meal_3` | 서연 | room_school | seyoun_normal |  |  | 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점 |
| 302 | `lunch3_meal_4` | {name} | room_school | seyoun_normal |  |  | 점수 매기지 마. |
| 303 | `lunch3_meal_5` | 서연 | room_school | seyoun_normal |  |  | 10점 만점이야. 나쁜 거 아닌데? |
| 304 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다 |
| 305 | `lunch3_meal_7` | {name} | room_school | seyoun_normal |  |  | 유나, 그건 내가 제일 좋아하는 건데. |
| 306 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임 |
| 307 | `lunch3_meal_8` | {name} | room_school | yuna_bored |  |  | *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다. |
| 308 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. |
| 309 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓 |
| 310 | `lunch3_meal_11` | {name} | room_school | yuna_bored |  |  | *누구에게 줄까?* |
| 311 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *마지막 반찬을 누구에게 줄지 고민한다.* |
| 312 | `lunch3_give_yuna_1` | 유나 | room_school | yuna_normal |  |  | 고마워. |
| 313 | `lunch3_yuna_skin_check` |  | room_school | yuna_normal |  |  |  |
| 314 | `lunch3_give_yuna_2_check` |  | room_school | 없음 |  |  |  |
| 315 | `lunch3_give_yuna_seo_affinity` |  | room_school | 없음 |  |  |  |
| 316 | `lunch3_give_yuna_seo_low` | 서연 | room_school | seyoun_normal |  |  | *서연은 자기 도시락을 정리한다.* |
| 317 | `lunch3_give_yuna_3_check` |  | room_school | 없음 |  |  |  |
| 318 | `lunch3_give_yuna_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 빈 물병을 가방에 넣는다.* 난 괜찮아. |
| 319 | `lunch3_end` | {name} | room_school | 없음 |  |  | *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다 |
| 320 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육 |
| 321 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다 |
| 322 | `after3_choice` | {name} | school_hallway | 없음 |  | 🌅 | *어디로 갈까.* |
| 323 | `after3_rivals_for_yuna_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 324 | `after3_rival_seo_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 325 | `after3_rival_seo_affinity` |  | school_hallway | 없음 |  | 🌅 |  |
| 326 | `after3_rival_seo_done` |  | school_hallway | 없음 |  | 🌅 |  |
| 327 | `after3_rival_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 328 | `after3_rival_dain_affinity` |  | school_hallway | 없음 |  | 🌅 |  |
| 329 | `after3_rival_dain_done` |  | school_hallway | 없음 |  | 🌅 |  |
| 330 | `after3_yuna_affinity_check` |  | yuna_hideout | 없음 |  | 🌅 |  |
| 331 | `after3_yuna_partial_1` | {name} | yuna_hideout | yuna_normal |  | 🌅 | *별관 문은 열려 있지만 유나는 책을 펼치지 않는다.  |
| 332 | `after3_yuna_partial_2` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | 오늘은 여기까지만. 다음에는 내가 먼저 부를게. |
| 333 | `after3_yuna_end` | 유나 | yuna_hideout | yuna_shy |  | 🌅 | *유나가 노트를 품에 꼭 끌어안는다.* |
| 334 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.* |
| 335 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 336 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 337 | `minsu_d3_check` | {name} | school | 없음 |  | 🌅 |  |
| 338 | `minsu_d3_1` | {name} | school | 없음 |  | 🌅 | *하교길. 교문 앞에 민수가 서 있다.* |
| 339 | `minsu_d3_2` | 민수 | school | 없음 |  | 🌅 | 봤다. |
| 340 | `minsu_d3_3` | 민수 | school | 없음 |  | 🌅 | 점심때. 그리고 방금 서연 표정도. |
| 341 | `minsu_d3_4` | 민수 | school | 없음 |  | 🌅 | 어제 내가 뭐랬냐. 나중에 셋 다 울면 네 탓이라고 했 |
| 342 | `minsu_d3_5` | 민수 | school | 없음 |  | 🌅 | 옆에서 보기 좀 힘들다. 걔들 다 좋은 애들이야. 네가 |
| 343 | `minsu_d3_5b` | 민수 | school | 없음 |  | 🌅 | *민수는 빨대 포장지를 끝까지 접어 테이블 위에 내려놓 |
| 344 | `minsu_d3_6` | {name} | school | 없음 |  | 🌅 | 맞아. |
| 345 | `minsu_d3_6b` | 민수 | school | 없음 |  | 🌅 | 전 학교에서 뭔 일 있었는지 안 물어볼게. 근데 하나만 |
| 346 | `minsu_d3_7` | 민수 | school | 없음 |  | 🌅 | 거절도 배려야. 안 되는 관계에 계속 여지 주는 것보다 |
| 347 | `minsu_d3_8` | {name} | school | 없음 |  | 🌅 | *거절도 배려다. 전 학교에서 나는 소정이에게 고백할  |
| 348 | `minsu_d3_9` | 민수 | school | 없음 |  | 🌅 | *민수는 더 말하지 않고 끝까지 접은 빨대 포장지를 내 |
| 349 | `minsu_d3_10` | 민수 | school | 없음 |  | 🌅 | 내일 학교에서 보자. 진지하게 생각해. |
| 350 | `night3_start` | {name} | room_my | 없음 |  |  | *방에 돌아와 가방을 의자에 걸어 둔다.* |
| 351 | `night3_start_2` | {name} | room_my | 없음 |  |  | *책상 위에 엎어 둔 핸드폰 화면을 켠다.* |
| 352 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *읽지 않은 메시지가 떠 있다.* |
| 353 | `night3_dream_1` | {name} | school | 없음 |  |  | *꿈속에서 누군가와 나란히 걷는다. 얼굴은 보이지 않고 |
| 354 | `night3_dream_2_b` | {name} | school | 없음 |  |  | *메모장을 닫았다. 내일 보낼 문장은 아직 없다.* |
| 355 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *커튼 사이로 들어온 아침 햇살에 눈을 뜬다. 핸드폰  |
| 356 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *'삭제하시겠습니까?' 확인 창이 뜬다. 손가락이 버튼 |
| 357 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *1초 동안 화면을 내려다본다. 소정이 책상의 낙서와  |
| 358 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *그래. 삭제 버튼에 올린 손가락으로 화면을 누른다.* |
| 359 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼을 누르지 않고 사진을 새 폴더로 옮긴다.  |
| 360 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *'거절도 네가 해야 할 일이야.' 민수의 말이 떠오른 |
| 361 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *갤러리에서 소정이 사진이 사라지고 빈칸만 남는다.* |
| 362 | `night3_faithful_reflect_4_b` | {name} | room_my | 없음 |  |  | *빈 앨범 썸네일 위를 엄지로 문지른다.* |
| 363 | `night3_faithful_reflect_4_c` | {name} | room_my | 없음 |  |  | *핸드폰을 덮자 검은 화면에 갤러리의 빈칸이 겹쳐 보인 |
| 364 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *알람이 울리기 전에 눈을 떴다.* |
| 365 | `night3_end` | {name} | room_my | 없음 |  |  | *방 불을 끄고 핸드폰을 엎어 둔다.* |
| | **Day 4** | | | | | | |
| 366 | `morning4_start` | {name} | room_my | 없음 |  |  | *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다 |
| 367 | `morning4_nightmare_check` |  | room_my | 없음 |  |  |  |
| 368 | `minsu_cheer_1` | {name} | room_my | 없음 |  |  | *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.* |
| 369 | `minsu_cheer_1_b` | 민수 | room_my | minsu_normal | 0.35 |  | *야 오늘 데이트라며?* |
| 370 | `minsu_cheer_1_c` | {name} | room_my | minsu_normal | 0.35 |  | *어떻게 알았어* |
| 371 | `minsu_cheer_1_d` | 민수 | room_my | minsu_normal | 0.35 |  | *다인이가 단톡방에 올림. 내일 약속 있음, 이라고* |
| 372 | `minsu_cheer_2` | 민수 | room_my | minsu_normal | 0.35 |  | 잘하고 와ㅋㅋ |
| 373 | `minsu_cheer_3` | {name} | room_my | minsu_normal | 0.35 |  | 알아. |
| 374 | `minsu_cheer_4_branch` |  | room_my | 없음 |  |  |  |
| 375 | `minsu_cheer_4_ins_single` | {name} | room_my | minsu_normal | 0.35 |  | *핸드폰 캘린더를 본다. 오늘 약속은 하나뿐이다.* |
| 376 | `morning4_start_2` | {name} | room_my | 없음 |  |  | *심호흡하고 약속 메시지를 다시 확인한다.* |
| 377 | `morning4_yuna_msg_1` | 유나 | room_my | yuna_normal | 0.35 |  | 10시. 역 앞 카페. 늦으면 간다. |
| 378 | `morning4_yuna_msg_1_b` | {name} | room_my | yuna_normal | 0.35 |  | *두 문장뿐이다. '늦으면 간다' 뒤에는 마침표도 없다 |
| 379 | `morning4_yuna_msg_single` | {name} | room_my | yuna_normal | 0.35 |  | *메시지는 짧다. 오늘 약속은 하나뿐이다.* |
| 380 | `morning4_hidden_check` | {name} | room_my | 없음 |  |  | *주말 아침, 학교 앞 사거리에서 신호를 기다린다.* |
| 381 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 382 | `morning4_end` | {name} | room_my | 없음 |  |  | *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 |
| 383 | `date_yuna_1` | {name} | cafe | yuna_normal |  |  | *카페 앞. 유나가 벽에 기대어 서 있다. 검은 원피스 |
| 384 | `date_yuna_tier_check` |  | cafe | 없음 |  |  |  |
| 385 | `date_yuna_tentative_1` | 유나 | cafe | yuna_normal |  |  | 오늘은 책 얘기만 하자. |
| 386 | `date_yuna_tentative_2` | {name} | cafe | yuna_normal |  |  | *대화는 이어지지만 유나는 가방 속 오래된 책을 꺼내지 |
| 387 | `date_yuna_tentative_3` | 유나 | street | yuna_normal |  |  | 다음에는 내가 먼저 연락할게. 오늘은 여기까지. |
| 388 | `day4_night_start` | {name} | room_my | 없음 |  |  | *집에 돌아왔다. 옷소매에 공원 흙과 학교 먼지가 조금 |
| 389 | `day4_night_branch` | 시스템 | room_my | 없음 |  |  |  |
| 390 | `day4_student_night_branch` |  | room_my | 없음 |  |  |  |
| 391 | `day4_night_regret` | {name} | room_my | 없음 |  |  | *집으로 돌아온 뒤에도 채팅창에는 입력하다 만 문장이  |
| 392 | `day4_night_regret_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 393 | `day4_night_regret_msg_yuna` | 유나 | room_my | yuna_normal | 0.35 |  | 오늘, 나도 기대했어. 말은 더 줄었지만. |
| 394 | `day4_night_regret_reply` | {name} | room_my | 없음 |  |  | *답장을 쓰다 지운다. 입력창에는 받침 하나만 남았다가 |
| 395 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 396 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *알람을 일요일 오전으로 맞추고 방 불을 끈다. 전하지 |
| 397 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안 시계가 자정 쪽으로 넘어간다. 휴대폰 화면도  |
| | **Day 5** | | | | | | |
| 398 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소 |
| 399 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 400 | `morning5_start_b` | {name} | room_school | 없음 |  |  | *교실에 들어서자 세 가지가 한꺼번에 눈에 들어온다.  |
| 401 | `morning5_start_2_b` | {name} | room_school | 없음 |  |  | *책상 위에 쪽지가 놓여 있다. 서연의 글씨.* |
| 402 | `morning5_mood_check` | 시스템 | room_school | 없음 |  |  |  |
| 403 | `morning5_mood_low` | {name} | room_school | 없음 |  |  | 마지막 날. 잠금화면에 남은 이름 셋을 차례로 누른다. |
| 404 | `morning5_gate` | {name} | school | 없음 |  |  | *교문 앞에서 소매를 걷어 올린다. 손목에 남던 붉은  |
| 405 | `morning5_seo_note_1` | {name} | room_school | seyoun_normal |  |  | *책상 위에 쪽지가 놓여 있다. 서연의 글씨. — '오 |
| 406 | `morning5_seo_note_1_b` | {name} | school_hallway | 없음 |  |  | *복도 문예부 전시 코너를 지나다 게시판의 빈 압정 네 |
| 407 | `morning5_seo_note_1_c` | {name} | school_hallway | 없음 |  |  | *게시판에 단편소설이 붙어 있다. 제목: '도서관에서  |
| 408 | `morning5_yuna_story_1` | {name} | school_hallway | yuna_normal |  |  | *소설 속 인물은 도서관에서 잠든 누군가의 어깨에 담요 |
| 409 | `morning5_yuna_story_2` | {name} | school_hallway | 없음 |  |  | *마지막 문장. '그 사람이 눈을 떴을 때, 나는 이미 |
| 410 | `morning5_yuna_story_4` | {name} | school_hallway | yuna_normal |  |  | *게시판 아래 구석에는 작은 글씨가 남아 있다. '이건 |
| 411 | `morning5_return_class` | {name} | room_school | dain_normal |  |  | *교실로 돌아오니 다인이 기다리고 있다.* |
| 412 | `morning5_dain_1` | 다인 | room_school | dain_normal |  |  | 야, 오늘 체육 이벤트 파트너로 너 써놨어. |
| 413 | `morning5_dain_1_b` | {name} | room_school | dain_normal |  |  | 허락도 없이? |
| 414 | `morning5_dain_2` | 다인 | room_school | dain_laugh |  |  | 늦으면 화낸다? |
| 415 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *행사 준비 시간. 복도를 걷는데 — 빈 교실 앞을 지 |
| 416 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *행사 중간 쉬는 시간. 보건실 앞을 지나간다.* |
| 417 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 418 | `morning5_sojeong_1` | {name} | room_school | 없음 |  |  | *휴대폰 메모 앱을 연다. '소정에게'로 시작하는 빈  |
| 419 | `morning5_sojeong_2` | {name} | room_school | 없음 |  |  | *마흔 번째 초안은 쓰지 않는다. 가장 짧은 문장을 골 |
| 420 | `morning5_sojeong_3` | {name} | room_school | 없음 |  |  | 그때 네 책상과 낙서를 보고도 선생님께 말하지 않았어. |
| 421 | `morning5_sojeong_4` | {name} | room_school | 없음 |  |  | *전송 표시가 뜬다. 읽음 표시는 기다리지 않고 대화방 |
| 422 | `morning5_sojeong_5` | {name} | room_school | 없음 |  |  | *지금 담임에게도 메시지를 보낸다. '전학 오기 전 학 |
| 423 | `morning5_route_branch` |  | room_school | 없음 |  |  |  |
| 424 | `morning5_end` | {name} | room_school | 없음 |  |  | *세 방향에서 온 쪽지와 알림을 책상 위에 나란히 둔다 |
| 425 | `tour_yuna_1_check` | {name} | yuna_hideout | 없음 |  |  | *도서관 별관으로 간다.* |
| 426 | `tour_yuna_low` | 유나 | yuna_hideout | yuna_normal |  |  | *별관 문은 잠겨 있다. 잠시 뒤 유나에게 짧은 메시지 |
| 427 | `after5_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 428 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *행사가 끝나갈 무렵, 복도에서 선택하지 않은 두 사람 |
| 429 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 430 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다.* |
| 431 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *복도에서 서연과 마주친다. 서연은 잠시 멈췄다가 고개 |
| 432 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 433 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 434 | `after5_farewell_dain_1` | {name} | gym | dain_normal |  | 🌅 | *체육관 앞에서 다인이 걸어온다. 평소보다 보폭이 작다 |
| 435 | `after5_farewell_dain_low` | 다인 | gym | dain_normal |  | 🌅 | *체육관 앞에서 다인이 걸어오다 두 걸음 떨어진 곳에  |
| 436 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *석양이 교정 창문마다 걸린다. 방송실에서 행사 종료  |
| 437 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 438 | `after5_last_chance_1` | {name} | school_back | 없음 |  | 🌅 | *행사장 스피커 전원이 꺼진다. 갈림길 안내판 아래에서 |
| 439 | `after5_last_chance_2` | {name} | school_back | 없음 |  | 🌅 | *주머니 속 휴대폰을 꺼낸다. 검은 화면에 행사 현수막 |
| 440 | `after5_last_chance_route_check` |  | school_back | 없음 |  | 🌅 |  |
| 441 | `after5_last_chance_yuna_history_check` |  | school_back | 없음 |  | 🌅 |  |
| 442 | `after5_last_chance_yuna_tentative` | 유나 | school_back | yuna_normal |  | 🌅 | 어제는 내가 먼저 연락하겠다고 했는데. 오늘은 네가 왔 |
| 443 | `after5_last_chance_yuna_aff_check` |  | school_back | 없음 |  | 🌅 |  |
| 444 | `after5_last_chance_yuna_low_1` | {name} | school_back | 없음 |  | 🌅 | 유나. |
| 445 | `after5_last_chance_yuna_low_2` | 유나 | school_back | yuna_normal |  | 🌅 | *책장 사이로 돌아본다. 책을 끌어안은 팔에 힘이 들어 |
| 446 | `after5_last_chance_choice` | {name} | school_back | 없음 |  | 🌅 | *손바닥 안에서 핸드폰이 눌린다.* |
| 447 | `after5_confess_no` | {name} | school_back | 없음 |  | 🌅 | *휴대폰 화면을 끄고 입을 다문다.* |
| 448 | `after5_confess_no_2` | {name} | school_back | 없음 |  | 🌅 | *저녁 바람에 행사 안내지가 발치까지 굴러온다. 주워  |
| 449 | `after5_confess_no_2b` | {name} | room_my | 없음 |  | 🌅 | *끝내 돌아서서 집으로 향했다.* |
| 450 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 451 | `ending_last_chance_resolve` | 시스템 | park | 없음 |  |  |  |
| 452 | `day5_ending_friend` | {name} | park | 없음 |  |  | *고백 대신 고맙다는 말을 쓰기로 한다. 입력창에 첫  |
| 453 | `friend_1` | {name} | park | 없음 |  |  | *공원 벤치에 앉아 메시지 창을 연다. 이번에는 입력창 |
| 454 | `friend_2` | {name} | park | 없음 |  |  | *소정이 대화방에 끝내 보내지 못한 문장이 떠오른다.* |
| 455 | `friend_3` | {name} | park | 없음 |  |  | *'지금은 관계를 바꾸자고 말할 자신이 없어. 그래도  |
| 456 | `friend_route_check` | 시스템 | park | 없음 |  |  |  |
| 457 | `friend_4_yuna` | {name} | park | 없음 |  |  | *유나에게서 답장이 온다. '읽었어. ...내일 보자. |
| 458 | `friend_5` | {name} | park | 없음 |  |  | *'응.' 짧게 답하고 화면을 끈다.* |
| 459 | `friend_7` | {name} | park | 없음 |  |  | *보낸 메시지 옆에 읽음 표시가 붙는다. 입력창은 비어 |
| 460 | `friend_8` | {name} | ending_friend | 없음 |  |  | *졸업식 날. 핸드폰 갤러리에 이 학교 친구들과 찍은  |
| 461 | `friend_9` | {name} | ending_friend | 없음 |  |  | *사진 파일명은 '졸업식_친구들'. 단체 대화방에도 같 |
| 462 | `friend_10` | {name} | ending_friend | 없음 |  |  | *단체 대화방에 쓴다. '졸업식 끝나고 다 같이 뭐 먹 |
| 463 | `friend_12` | 시스템 | ending_friend | 없음 |  |  | ─── FRIEND END ─── |
| 464 | `day5_credits` |  | school | 없음 |  |  |  |
| 465 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

## 씬 커버리지

- 전체: 3016개
- 방문: 1146개 (38.0%)
- 미방문: 1871개

**미방문 씬:**
- Day 1: lunch_dain_c2_1, lunch_dain_trap_1, after_dain_skip, after_yuna_skip, after_homeroom_honest_choice2a, after_homeroom_honest_choice2a_b, after_nurse_enter_choice_b, after_nurse_enter_11_h, after_nurse_enter_11_i, night_yuna_late_1, night_yuna_late_2, night_yuna_late_3, night_yuna_late_4, forced_violation_day1_after_seoyeon, forced_violation_day1_seoyeon_apologize, forced_violation_day1_seoyeon_excuse, forced_violation_day1_after_yuna, forced_violation_day1_yuna_apologize, forced_violation_day1_yuna_excuse, forced_violation_day1_after_dain, forced_violation_day1_dain_apologize, forced_violation_day1_dain_excuse, forced_violation_day1_after_teacher, forced_violation_day1_teacher_apologize, forced_violation_day1_teacher_excuse, forced_violation_day1_after_nurse, forced_violation_day1_nurse_apologize, forced_violation_day1_nurse_excuse, forced_violation_day1_resume
- Day 2: morning2_greet_seo_1_gate, morning2_greet_yuna_1, morning2_greet_yuna_2, morning2_greet_yuna_others, morning2_greet_yuna_others_seo, morning2_greet_yuna_others_dain, morning2_greet_yuna_others_2, morning2_break_transition_b, hidden_homeroom_d2_1_b, hidden_homeroom_d2_1_c, hidden_homeroom_d2_2, hidden_homeroom_d2_2_b, hidden_homeroom_d2_3, hidden_homeroom_d2_3_b, hidden_homeroom_d2_3_c, hidden_homeroom_d2_3_d, hidden_homeroom_d2_3_e, hidden_homeroom_d2_3_f, hidden_homeroom_d2_3_g, hidden_homeroom_d2_choice1, hidden_homeroom_d2_choice1_a, hidden_homeroom_d2_choice1_b, hidden_homeroom_d2_choice1_trap, hidden_homeroom_d2_5, hidden_homeroom_d2_6, hidden_homeroom_d2_7, hidden_homeroom_d2_7_b, hidden_homeroom_d2_8, hidden_homeroom_d2_8_b, hidden_homeroom_d2_8_c, hidden_homeroom_d2_8_d, hidden_homeroom_d2_8_e, hidden_homeroom_d2_8_f, hidden_homeroom_d2_9, hidden_homeroom_d2_10, hidden_homeroom_d2_choice2, hidden_homeroom_d2_choice2_trap, hidden_homeroom_d2_choice2_a, hidden_homeroom_d2_choice2_b, hidden_homeroom_d2_11, hidden_homeroom_d2_11_b, hidden_homeroom_d2_12, hidden_homeroom_d2_freetalk, lunch2_seo_2b, lunch2_seo_2b_dain, lunch2_seo_3b_dain, lunch2_seo_4b_dain, lunch2_seo_5b_dain, lunch2_seo_6b_dain, lunch2_seo_13, lunch2_seo_trap_1, lunch2_dain_1b, lunch2_dain_3b, lunch2_dain_4b, lunch2_dain_end_d, lunch2_dain_end_e, lunch2_dain_end_g, lunch2_dain_end_h, lunch2_dain_end_nurse_short1, lunch2_dain_end_nurse_short2, lunch2_dain_end_nurse_short3, lunch2_yuna_3, lunch2_yuna_4, lunch2_yuna_5, lunch2_yuna_6, lunch2_yuna_7, lunch2_yuna_8, lunch2_yuna_trap_exclusive, hidden_nurse_d2_2, hidden_nurse_d2_3, hidden_nurse_d2_4, hidden_nurse_d2_5, hidden_nurse_d2_choice1, hidden_nurse_d2_choice1_a, hidden_nurse_d2_choice1_b, hidden_nurse_d2_6, hidden_nurse_d2_7, hidden_nurse_d2_choice2, hidden_nurse_d2_choice2_a, hidden_nurse_d2_choice2_b, hidden_nurse_d2_8, hidden_nurse_d2_9, hidden_nurse_d2_freetalk, hidden_nurse_d2_return, after2_dain_skinship_1, after2_dain_skinship_2, after2_dain_skinship_3, after2_dain_rival_seo_high, after2_dain_rival_yuna_high, after2_dain_rival_yuna_mid, after2_seo_neck_high, after2_seo_neck_high_b, after2_seo_neck_high_c, after2_seo_neck_high_2, after2_seo_neck_high_2_b, after2_seo_rival_dain_high, after2_seo_rival_yuna_high, after2_seo_rival_yuna_mid, after2_yuna_skinship_1, after2_yuna_skinship_2, after2_yuna_skinship_3, after2_yuna_rival_dain_high, after2_yuna_rival_seo_high, after2_yuna_rival_seo_mid, night2_msg_generic, night2_msg_generic_2, night2_msg_generic_3, night2_reply_dain_react_high, night2_reply_yuna_react_high, night2_hidden_homeroom_1, night2_hidden_homeroom_2, night2_hidden_homeroom_3, night2_hidden_nurse_1, night2_hidden_nurse_2, forced_violation_day2_after_seoyeon, forced_violation_day2_seoyeon_apologize, forced_violation_day2_seoyeon_excuse, forced_violation_day2_after_yuna, forced_violation_day2_yuna_apologize, forced_violation_day2_yuna_excuse, forced_violation_day2_after_dain, forced_violation_day2_dain_apologize, forced_violation_day2_dain_excuse, forced_violation_day2_after_teacher, forced_violation_day2_teacher_apologize, forced_violation_day2_teacher_excuse, forced_violation_day2_after_nurse, forced_violation_day2_nurse_apologize, forced_violation_day2_nurse_excuse, forced_violation_day2_resume
- Day 3: morning3_seo_gate_warm_1, morning3_seo_gate_warm_2, morning3_seo_gate_warm_3, morning3_seo_gate_warm_4, morning3_yuna_gate_warm_1, morning3_yuna_gate_warm_2, morning3_yuna_gate_warm_3, morning3_yuna_gate_warm_4, morning3_dain_gate_warm_1, morning3_dain_gate_warm_2, morning3_dain_gate_warm_3, hidden_homeroom_d3_1, hidden_homeroom_d3_3, hidden_homeroom_d3_3_b, hidden_homeroom_d3_4, hidden_homeroom_d3_4_b, hidden_homeroom_d3_4_c, hidden_homeroom_d3_4_d, hidden_homeroom_d3_4_e, hidden_homeroom_d3_4_f, hidden_homeroom_d3_4_g, hidden_homeroom_d3_4_h, hidden_homeroom_d3_choice, hidden_homeroom_d3_reveal_1, hidden_homeroom_d3_reveal_1_b, hidden_homeroom_d3_reveal_1_c, hidden_homeroom_d3_reveal_1_d, hidden_homeroom_d3_reveal_1_e, hidden_homeroom_d3_reveal_1_f, hidden_homeroom_d3_reveal_2, hidden_homeroom_d3_reveal_2_b, hidden_homeroom_d3_reveal_2_c, hidden_homeroom_d3_reveal_2_d, hidden_homeroom_d3_reveal_2_e, hidden_homeroom_d3_reveal_2_f, hidden_homeroom_d3_reveal_3, hidden_homeroom_d3_reveal_3_b, hidden_homeroom_d3_reveal_3_c, hidden_homeroom_d3_reveal_4, hidden_homeroom_d3_reveal_4_b, hidden_homeroom_d3_reveal_4_c, hidden_homeroom_d3_reveal_4_d, hidden_homeroom_d3_reveal_4_e, hidden_homeroom_d3_reveal_4_f, hidden_homeroom_d3_reveal_4_g, hidden_homeroom_d3_reveal_choice, hidden_homeroom_d3_reveal_choice_trap, hidden_homeroom_d3_reveal_choice_a, hidden_homeroom_d3_reveal_choice_b, hidden_homeroom_d3_reveal_5, hidden_homeroom_d3_reveal_6, hidden_homeroom_d3_reveal_6_b, hidden_homeroom_d3_reveal_6_c, hidden_homeroom_d3_reveal_6_d, hidden_homeroom_d3_reveal_6_e, hidden_homeroom_d3_reveal_6_f, hidden_homeroom_d3_reveal_6_g, hidden_homeroom_d3_hide_1, hidden_homeroom_d3_end, hidden_homeroom_d3_freetalk, hidden_nurse_d3_check, hidden_nurse_d3_1, hidden_nurse_d3_1_b, hidden_nurse_d3_1_c, hidden_nurse_d3_1_d, hidden_nurse_d3_1_e, hidden_nurse_d3_2, hidden_nurse_d3_2_b, hidden_nurse_d3_2_c, hidden_nurse_d3_2_d, hidden_nurse_d3_2_e, hidden_nurse_d3_3, hidden_nurse_d3_3_b, hidden_nurse_d3_3_c, hidden_nurse_d3_3_d, hidden_nurse_d3_4, hidden_nurse_d3_5_b, hidden_nurse_d3_5_c, hidden_nurse_d3_5_d, hidden_nurse_d3_5_e, hidden_nurse_d3_5_f, hidden_nurse_d3_5_g, hidden_nurse_d3_5_h, hidden_nurse_d3_5_i, hidden_nurse_d3_5_j, hidden_nurse_d3_5_k, hidden_nurse_d3_5_l, hidden_nurse_d3_5_m, hidden_nurse_d3_5_n, hidden_nurse_d3_5_o, hidden_nurse_d3_5_p, hidden_nurse_d3_5_q, hidden_nurse_d3_choice1, hidden_nurse_d3_choice1_a, hidden_nurse_d3_choice1_b, hidden_nurse_d3_choice1_c, hidden_nurse_d3_6, hidden_nurse_d3_6_b, hidden_nurse_d3_6_c, hidden_nurse_d3_6_d, hidden_nurse_d3_6_e, hidden_nurse_d3_6_f, hidden_nurse_d3_7, hidden_nurse_d3_7_b, hidden_nurse_d3_8, hidden_nurse_d3_8_b, hidden_nurse_d3_8_c, hidden_nurse_d3_8_d, hidden_nurse_d3_8_e, hidden_nurse_d3_8_f, hidden_nurse_d3_8_g, hidden_nurse_d3_8_h, hidden_nurse_d3_choice2, hidden_nurse_d3_choice2_a, hidden_nurse_d3_choice2_b, hidden_nurse_d3_choice2_c, hidden_nurse_d3_9, hidden_nurse_d3_9_b, hidden_nurse_d3_9_c, hidden_nurse_d3_9_d, hidden_nurse_d3_9_e, hidden_nurse_d3_9_f, hidden_nurse_d3_11, hidden_nurse_d3_freetalk, morning3_set_multiple, hidden_homeroom_d3_low, hidden_nurse_d3_low, lunch3_give_seo_2, lunch3_seo_witness_1, lunch3_seo_witness_choice, lunch3_seo_chase_dain_1, lunch3_seo_chase_dain_2, lunch3_seo_chase_dain_2b, lunch3_seo_focus_1, lunch3_seo_focus_2, lunch3_give_seo_3, lunch3_dain_skin_1, lunch3_dain_skin_3, lunch3_give_dain_2, lunch3_dain_witness_1, lunch3_dain_witness_2b, lunch3_give_dain_3, lunch3_yuna_skin_1, lunch3_yuna_skin_2, lunch3_yuna_skin_3, lunch3_give_yuna_2, lunch3_yuna_witness_1, lunch3_yuna_witness_2, lunch3_give_yuna_3, lunch3_expose_1, lunch3_expose_2, lunch3_expose_3, lunch3_expose_4, lunch3_expose_5, lunch3_expose_6, lunch3_expose_7, lunch3_expose_7_b, lunch3_expose_9, lunch3_expose_10, lunch3_expose_11, lunch3_expose_12, lunch3_expose_14, lunch3_expose_15, lunch3_expose_choice, lunch3_expose_honest_1, lunch3_expose_honest_2, lunch3_expose_honest_3, lunch3_expose_honest_4, lunch3_expose_honest_4_b, lunch3_expose_honest_5, lunch3_expose_honest_6, lunch3_expose_honest_7, lunch3_expose_excuse_1, lunch3_expose_excuse_2, lunch3_expose_excuse_2_b, lunch3_expose_excuse_3, lunch3_expose_excuse_4, lunch3_expose_run_1, lunch3_expose_run_2, lunch3_harem_1, after3_multi_choice, after3_rival_seo_promised_dispatch, after3_rival_seo_high, after3_rival_dain_promised_dispatch, after3_rival_dain_high, after3_rival_yuna_promised_dispatch, after3_rival_yuna_high, after3_reject_for_seo_1, after3_reject_for_seo_2, after3_reject_for_seo_3, after3_reject_for_seo_3b, after3_reject_for_seo_3c, after3_reject_for_seo_4, after3_seo_correct_1, after3_seo_correct_2, after3_seo_correct_3, after3_seo_correct_4, after3_seo_correct_5, after3_seo_correct_6, after3_seo_correct_7, after3_seo_correct_8, after3_seo_correct_9, after3_seo_correct_10, after3_seo_correct_11, after3_seo_correct_12, after3_seo_freetalk, after3_reject_for_yuna_1, after3_reject_for_yuna_2, after3_reject_for_yuna_walk_gym, after3_reject_for_yuna_3, after3_reject_for_yuna_3_dain, after3_reject_for_yuna_3_react, after3_reject_for_yuna_4, after3_yuna_1, after3_yuna_2, after3_yuna_4, after3_yuna_5_b, after3_yuna_6, after3_yuna_7, after3_yuna_8, after3_yuna_8b, after3_yuna_9, after3_yuna_choice, after3_yuna_decode_trap_1, after3_yuna_decode_trap_2, after3_yuna_decode_trap_3, after3_yuna_decode_trap_4, after3_yuna_decode_trap_5, after3_yuna_decode_trap_6, after3_yuna_decode_trap_7, after3_yuna_decode_trap_8, after3_yuna_decode_trap_9, after3_yuna_decode_trap_10, after3_yuna_decode_trap_11, after3_yuna_correct_1, after3_yuna_correct_2, after3_yuna_correct_3, after3_yuna_correct_4, after3_yuna_correct_5, after3_yuna_correct_6, after3_yuna_correct_7, after3_yuna_correct_8, after3_yuna_correct_9, after3_yuna_correct_10, after3_yuna_correct_11, after3_yuna_correct_12, after3_yuna_freetalk, after3_reject_for_dain_1, after3_reject_for_dain_2, after3_reject_for_dain_2b, after3_reject_for_dain_3, after3_reject_for_dain_3b, after3_dain_1, after3_dain_3, after3_dain_4, after3_dain_5, after3_dain_5_b, after3_dain_6, after3_dain_choice, after3_dain_pity_trap_1, after3_dain_pity_trap_2, after3_dain_pity_trap_3, after3_dain_pity_trap_4, after3_dain_pity_trap_5, after3_dain_pity_trap_6, after3_dain_pity_trap_7, after3_dain_pity_trap_8, after3_dain_pity_trap_9, after3_dain_pity_trap_10, after3_dain_correct_1, after3_dain_correct_2, after3_dain_correct_3, after3_dain_correct_4, after3_dain_correct_5, after3_dain_correct_6, after3_dain_correct_7, after3_dain_correct_8, after3_dain_correct_9, after3_dain_correct_10, after3_dain_correct_11, after3_dain_correct_12, after3_dain_dilemma_tell, after3_dain_dilemma_tell_2, after3_dain_dilemma_tell_3, after3_dain_dilemma_tell_4, after3_dain_dilemma_tell_5, after3_dain_dilemma_tell_6, after3_dain_dilemma_tell_7, after3_dain_dilemma_tell_8, after3_dain_dilemma_final, after3_dain_tell_confirm, after3_dain_tell_confirm_2, after3_dain_tell_confirm_3, after3_dain_tell_retreat, after3_dain_choice1, after3_dain_choice1_2, after3_dain_choice1_3, after3_dain_choice1_react, after3_dain_choice1_react2, after3_dain_choice1_react3, after3_dain_freetalk, after3_dain_end_check, after3_dain_end, after3_confront_1, after3_confront_2, after3_confront_3, after3_confront_4, after3_confront_5, after3_confront_5_b, after3_confront_5_c, after3_confront_6, after3_confront_choice, after3_confront_admit, after3_confront_admit_b, after3_confront_admit_2, after3_confront_admit_3, after3_confront_admit_4, after3_confront_admit_4_b, after3_confront_admit_5, after3_confront_admit_6, after3_confront_excuse, after3_confront_excuse_b, after3_confront_excuse_2, after3_confront_excuse_2_b, after3_confront_lie_b, after3_confront_lie, after3_confront_lie_2, after3_confront_lie_2_b, after3_confront_end, after3_group_teacher_companion, after3_group_nurse_companion, after3_group_return, haeun_affinity_high_1, haeun_affinity_high_2, haeun_affinity_low_1, haeun_affinity_low_2, night3_faithful_msg_yuna_1, night3_faithful_msg_yuna_2, night3_faithful_msg_yuna_2_b, night3_faithful_msg_dain_1, night3_faithful_msg_dain_2, night3_faithful_msg_dain_3, night3_dream_yuna_bonus, night3_dream_dain_bonus, night3_cheat_msg_1, night3_cheat_msg_2, night3_cheat_msg_3, night3_cheat_msg_3_b, night3_cheat_msg_4, night3_cheat_msg_4_b, night3_cheat_msg_5, night3_cheat_msg_6, night3_cheat_msg_dain_1, night3_cheat_msg_7, night3_nightmare_1, night3_nightmare_2_b, night3_nightmare_3, night3_nightmare_3_b, night3_nightmare_4, night3_nightmare_4_b, night3_nightmare_5, night3_nightmare_6, night3_nightmare_choice, night3_nightmare_seo, night3_nightmare_yuna, night3_nightmare_dain, night3_nightmare_end, night3_nightmare_end_3, night3_cheat_reflect_2, night3_cheat_reflect_3_b, night3_cheat_reflect_3_c, night3_cheat_reflect_3_d, night3_cheat_reflect_3_e, night3_cheat_reflect_5, night3_nightmare_end_4, forced_violation_day3_after_seoyeon, forced_violation_day3_seoyeon_apologize, forced_violation_day3_seoyeon_excuse, forced_violation_day3_after_yuna, forced_violation_day3_yuna_apologize, forced_violation_day3_yuna_excuse, forced_violation_day3_after_dain, forced_violation_day3_dain_apologize, forced_violation_day3_dain_excuse, forced_violation_day3_after_teacher, forced_violation_day3_teacher_apologize, forced_violation_day3_teacher_excuse, forced_violation_day3_after_nurse, forced_violation_day3_nurse_apologize, forced_violation_day3_nurse_excuse, forced_violation_day3_after_haeun, forced_violation_day3_haeun_apologize, forced_violation_day3_haeun_excuse, forced_violation_day3_resume
- Day 4: morning4_nightmare_seo, morning4_nightmare_yuna, morning4_nightmare_dain, morning4_nightmare_after, minsu_cheer_4_c, minsu_cheer_4_d, minsu_cheer_4_e, morning4_manuscript_check, hidden_homeroom_d4_skip, hidden_homeroom_d4_1, hidden_homeroom_d4_1_b, hidden_homeroom_d4_2, hidden_homeroom_d4_3, hidden_homeroom_d4_3_b, hidden_homeroom_d4_3_c, hidden_homeroom_d4_3_d, hidden_homeroom_d4_3_e, hidden_homeroom_d4_4, hidden_homeroom_d4_4_b, hidden_homeroom_d4_4_c, hidden_homeroom_d4_4_d, hidden_homeroom_d4_4_e, hidden_homeroom_d4_5, hidden_homeroom_d4_5_b, hidden_homeroom_d4_5_c, hidden_homeroom_d4_5_d, hidden_homeroom_d4_choice, hidden_homeroom_d4_choice_trap, hidden_homeroom_d4_cafe_1, hidden_homeroom_d4_cafe_1_b, hidden_homeroom_d4_cafe_1_c, hidden_homeroom_d4_cafe_1_d, hidden_homeroom_d4_cafe_1_e, hidden_homeroom_d4_cafe_1_f, hidden_homeroom_d4_cafe_2, hidden_homeroom_d4_cafe_2_b, hidden_homeroom_d4_cafe_2_c, hidden_homeroom_d4_cafe_2_d, hidden_homeroom_d4_cafe_2_e, hidden_homeroom_d4_cafe_3, hidden_homeroom_d4_cafe_choice, hidden_homeroom_d4_cafe_choice_a, hidden_homeroom_d4_cafe_choice_b, hidden_homeroom_d4_cafe_trap, hidden_homeroom_d4_cafe_4, hidden_homeroom_d4_cafe_4_b, hidden_homeroom_d4_cafe_5, hidden_homeroom_d4_cafe_5_b, hidden_homeroom_d4_cafe_5_c, hidden_homeroom_d4_cafe_5_d, hidden_homeroom_d4_cafe_5_e, hidden_homeroom_d4_cafe_5_f, hidden_homeroom_d4_cafe_5_g, hidden_homeroom_d4_cafe_5_h, hidden_homeroom_d4_cafe_6, hidden_homeroom_d4_cafe_6_b, hidden_homeroom_d4_freetalk, hidden_homeroom_d4_decline, hidden_homeroom_d4_decline_b, hidden_nurse_d4_morning_1, hidden_nurse_d4_morning_3, hidden_nurse_d4_morning_4, hidden_nurse_d4_morning_5, hidden_nurse_d4_morning_6, hidden_nurse_d4_morning_7, hidden_nurse_d4_morning_8, hidden_nurse_d4_morning_9, hidden_nurse_d4_morning_10, hidden_nurse_d4_morning_11, hidden_nurse_d4_morning_choice, hidden_nurse_d4_morning_choice_trap, hidden_nurse_d4_morning_choice_a, hidden_nurse_d4_morning_choice_b, hidden_nurse_d4_morning_12, hidden_nurse_d4_morning_13, hidden_nurse_d4_morning_freetalk, hidden_nurse_d4_1, hidden_nurse_d4_1_b, hidden_nurse_d4_2, hidden_nurse_d4_2_b, hidden_nurse_d4_2_c, hidden_nurse_d4_2_d, hidden_nurse_d4_2_e, hidden_nurse_d4_2_f, hidden_nurse_d4_2_g, hidden_nurse_d4_2_h, hidden_nurse_d4_3, hidden_nurse_d4_4, hidden_nurse_d4_4_b, hidden_nurse_d4_4_c, hidden_nurse_d4_4_d, hidden_nurse_d4_4_e, hidden_nurse_d4_4_f, hidden_nurse_d4_4_g, hidden_nurse_d4_4_h, hidden_nurse_d4_4_i, hidden_nurse_d4_4_j, hidden_nurse_d4_4_k, hidden_nurse_d4_5, hidden_nurse_d4_name_choice, hidden_nurse_d4_name_choice_a, hidden_nurse_d4_name_choice_b, hidden_nurse_d4_name_trap, hidden_nurse_d4_6, hidden_nurse_d4_6_b, hidden_nurse_d4_6_c, hidden_nurse_d4_6_d, hidden_nurse_d4_choice, hidden_nurse_d4_meal_walk, hidden_nurse_d4_meal_1, hidden_nurse_d4_meal_1_b, hidden_nurse_d4_meal_1_c, hidden_nurse_d4_meal_1b, hidden_nurse_d4_meal_2, hidden_nurse_d4_meal_2_b, hidden_nurse_d4_meal_3, hidden_nurse_d4_meal_3_b, hidden_nurse_d4_meal_3_c, hidden_nurse_d4_meal_3_d, hidden_nurse_d4_meal_3_e, hidden_nurse_d4_meal_4, hidden_nurse_d4_meal_4_b, hidden_nurse_d4_pass, hidden_nurse_d4_trap, hidden_nurse_d4_freetalk, hidden_homeroom_d4_low, hidden_nurse_d4_low, date_seo_high_1, date_seo_high_2, date_seo_compliment_choice, date_seo_pretty_high, date_seo_pretty_high_b, date_seo_pretty_high_2, date_seo_pretty_high_3, date_seo_pretty_high_3_b, date_seo_pretty_high_4, date_seo_pretty_low, date_seo_bright, date_seo_role_trap, date_seo_walk, date_seo_duck, date_seo_duck_2, date_seo_duck_3, date_seo_duck_4, date_seo_flower_b, date_seo_flower_2, date_seo_succulent_2, date_seo_succulent_2_b, date_seo_succulent_3, date_seo_end, date_seo_end_b, date_seo_end_c, date_seo_end_d, date_yuna_high_1, date_yuna_high_2, date_yuna_compliment_choice, date_yuna_pretty_high, date_yuna_pretty_high_2, date_yuna_pretty_high_3, date_yuna_pretty_high_4, date_yuna_pretty_high_5, date_yuna_pretty_high_5_b, date_yuna_pretty_high_5_c, date_yuna_pretty_low, date_yuna_bright, date_yuna_trap, date_yuna_bookstore, date_yuna_bookstore_2, date_yuna_bookstore_2_b, date_yuna_bookstore_3, date_yuna_earphone, date_yuna_earphone_2, date_yuna_earphone_2_b, date_yuna_earphone_3, date_yuna_oldbook, date_yuna_oldbook_b, date_yuna_oldbook_c, date_yuna_oldbook_2, date_yuna_oldbook_3, date_yuna_oldbook_4, date_yuna_end, date_yuna_end_b, date_yuna_end_c, date_dain_high_1, date_dain_high_2, date_dain_2, date_dain_3, date_dain_4, date_dain_compliment_choice, date_dain_pretty_high, date_dain_pretty_high_2, date_dain_pretty_high_3, date_dain_pretty_high_4, date_dain_pretty_low, date_dain_bright, date_dain_to_arcade, date_dain_arcade, date_dain_arcade_2, date_dain_arcade_2_b, date_dain_arcade_3, date_dain_arcade_3_b, date_dain_arcade_3_c, date_dain_rhythm, date_dain_rhythm_2, date_dain_rhythm_3, date_dain_knee, date_dain_knee_2, date_dain_shop, date_dain_shop_2, date_dain_shop_2_b, date_dain_shop_3, date_dain_shop_3_b, date_dain_end, date_dain_end_b, date_dain_end_c, pre_confess_minsu, pre_confess_minsu_2, pre_confess_callback, day4_caught_fallout_1, day4_caught_fallout_2, day4_caught_fallout_3, day4_caught_fallout_4, day4_harem_fallout_1, day4_harem_fallout_2, day4_harem_fallout_3, day4_harem_fallout_4, date_seo_low, date_yuna_low, date_dain_low, confess_seo_1, confess_seo_2, confess_seo_3, confess_seo_3b, confess_seo_4, confess_seo_4_b, confess_seo_5, confess_seo_choice, confess_seo_yes_1, confess_seo_yes_2, confess_seo_yes_3, confess_seo_yes_4, confess_seo_yes_5, confess_seo_yes_6, confess_seo_yes_7, confess_seo_yes_8, confess_seo_yes_9, confess_seo_yes_10, confess_seo_yes_11, confess_seo_yes_11_b, confess_seo_yes_12, confess_seo_no_1, confess_seo_no_2, confess_seo_no_3, confess_seo_no_4, confess_seo_no_4_b, confess_yuna_1, confess_yuna_2, confess_yuna_3, confess_yuna_3b, confess_yuna_4, confess_yuna_5, confess_yuna_choice, confess_yuna_yes_1, confess_yuna_yes_2, confess_yuna_yes_3, confess_yuna_yes_3_b, confess_yuna_yes_4, confess_yuna_yes_5, confess_yuna_yes_6, confess_yuna_yes_6_b, confess_yuna_yes_7, confess_yuna_yes_8, confess_yuna_yes_8_b, confess_yuna_yes_8_c, confess_yuna_yes_9, confess_yuna_yes_9_b, confess_yuna_no_1, confess_yuna_no_2, confess_yuna_no_3, confess_yuna_no_4, confess_yuna_no_4_b, confess_dain_1, confess_dain_2, confess_dain_3, confess_dain_3b, confess_dain_4, confess_dain_5, confess_dain_choice, confess_dain_yes_1, confess_dain_yes_2, confess_dain_yes_3, confess_dain_yes_3_b, confess_dain_yes_4, confess_dain_yes_5, confess_dain_yes_6, confess_dain_yes_7, confess_dain_yes_8, confess_dain_yes_8_b, confess_dain_yes_9, confess_dain_yes_9_b, confess_dain_yes_10, confess_dain_yes_10_b, confess_dain_no_1, confess_dain_no_2, confess_dain_no_3, confess_dain_no_4, confess_dain_no_4_b, confess_seo_low, confess_yuna_low, confess_dain_low, day4_adult_teacher_student_rank, day4_adult_nurse_student_rank, day4_teacher_seoyeon_counteroffer, day4_teacher_dain_counteroffer, day4_teacher_yuna_counteroffer, day4_nurse_seoyeon_counteroffer, day4_nurse_dain_counteroffer, day4_nurse_yuna_counteroffer, day4_adult_counteroffer_accept_seoyeon, day4_adult_counteroffer_accept_dain, day4_adult_counteroffer_accept_yuna, day4_adult_counteroffer_soft_seoyeon, day4_adult_counteroffer_soft_dain, day4_adult_counteroffer_soft_yuna, day4_adult_counteroffer_soft_return_home, day4_adult_night_regret_target_branch, day4_adult_night_regret_teacher, day4_adult_night_regret_nurse, wall_seo_1, wall_seo_pre_high_1, wall_seo_pre_high_2, wall_seo_pre_low_1, wall_seo_pre_low_1b, wall_seo_pre_low_2, wall_seo_2, wall_seo_to_park, wall_seo_3, wall_seo_4, wall_seo_5, wall_seo_6, wall_seo_7, wall_seo_7_b, wall_seo_8, wall_seo_9, wall_seo_9_b, wall_seo_9_c, wall_seo_9_d, wall_seo_10, wall_seo_11, wall_seo_11_b, wall_seo_12, wall_seo_13, wall_seo_14, wall_seo_14_b, wall_seo_14_c, wall_seo_14_d, wall_seo_hug_choice, wall_seo_hug_1, wall_seo_hug_2_b, wall_seo_hug_2_c, wall_seo_hug_3, wall_seo_pinky_1, wall_seo_pinky_2, wall_seo_pinky_3, wall_seo_pinky_4, wall_seo_pinky_5, wall_seo_pinky_5_b, wall_seo_line_choice, wall_seo_line_react_1, wall_seo_line_react_2, wall_seo_line_react_3, wall_seo_line_react_3_b, wall_seo_after_line, wall_seo_after_line_2, wall_seo_after_line_3, wall_seo_after_line_4, wall_seo_after_line_4_b, wall_seo_after_line_5, wall_seo_skin_check, wall_seo_skin70_1, wall_seo_skin70_3, wall_seo_skin60_1, wall_seo_skin60_2, wall_seo_freetalk, wall_seo_rival_rank, wall_seo_glimpse_1, wall_seo_glimpse_2, wall_seo_glimpse_4, wall_seo_yuna_tempt_1, wall_seo_yuna_tempt_2, wall_seo_yuna_tempt_accept, wall_dain_1, wall_dain_pre_high_1, wall_dain_pre_high_2, wall_dain_pre_low_1, wall_dain_pre_low_2, wall_dain_2, wall_dain_2_b, wall_dain_3, wall_dain_4, wall_dain_5, wall_dain_6, wall_dain_7, wall_dain_7_b, wall_dain_8, wall_dain_8_b, wall_dain_9, wall_dain_10, wall_dain_11, wall_dain_12, wall_dain_12_b, wall_dain_12_c, wall_dain_13, wall_dain_14, wall_dain_14_b, wall_dain_15, wall_dain_16, wall_dain_16_b, wall_dain_17, wall_dain_18, wall_dain_18_b, wall_dain_18_c, wall_dain_18_d, wall_dain_19, wall_dain_19_b, wall_dain_20, wall_dain_20_b, wall_dain_21, wall_dain_22, wall_dain_22_b, wall_dain_choice, wall_dain_newdream_1, wall_dain_newdream_2_b, wall_dain_newdream_3, wall_dain_newdream_4, wall_dain_newdream_5, wall_dain_newdream_6, wall_dain_newdream_7, wall_dain_newdream_8, wall_dain_cry_1, wall_dain_cry_2, wall_dain_cry_3, wall_dain_cry_4, wall_dain_cry_5, wall_dain_cry_6, wall_dain_lastspike_1, wall_dain_lastspike_2, wall_dain_lastspike_3, wall_dain_lastspike_3_b, wall_dain_lastspike_3_c, wall_dain_lastspike_4, wall_dain_lastspike_4_b, wall_dain_lastspike_5, wall_dain_lastspike_6, wall_dain_farewell_1, wall_dain_farewell_2, wall_dain_mention_1, wall_dain_mention_2, wall_dain_mention_3, wall_dain_skin_check, wall_dain_skin70_1, wall_dain_skin70_2, wall_dain_skin70_3, wall_dain_skin60_1, wall_dain_skin60_2, wall_dain_freetalk, wall_dain_rival_rank, wall_dain_glimpse_1, wall_dain_glimpse_2, wall_dain_glimpse_4, wall_dain_glimpse_4_b, wall_dain_glimpse_4_c, wall_dain_seo_tempt_1, wall_dain_seo_tempt_2, wall_dain_seo_tempt_accept, wall_yuna_1, wall_yuna_pre_high_1, wall_yuna_pre_high_2, wall_yuna_pre_low_1, wall_yuna_pre_low_2, wall_yuna_2, wall_yuna_3, wall_yuna_4, wall_yuna_6, wall_yuna_7, wall_yuna_8, wall_yuna_9, wall_yuna_9_b, wall_yuna_10, wall_yuna_11, wall_yuna_12, wall_yuna_13, wall_yuna_14, wall_yuna_14_b, wall_yuna_14_c, wall_yuna_14_d, wall_yuna_14_e, wall_yuna_14_f, wall_yuna_14_g, wall_yuna_14_h, wall_yuna_15, wall_yuna_16, wall_yuna_16_b, wall_yuna_choice, wall_yuna_moved_1, wall_yuna_moved_2, wall_yuna_moved_3, wall_yuna_moved_4, wall_yuna_moved_5, wall_yuna_moved_5_b, wall_yuna_skin_check, wall_yuna_skin70_1, wall_yuna_skin70_2, wall_yuna_skin70_3, wall_yuna_skin60_1, wall_yuna_skin60_2, wall_yuna_sub_1, wall_yuna_sub_2, wall_yuna_reject_1, wall_yuna_reject_1_b, wall_yuna_reject_2, wall_yuna_reject_3, wall_yuna_freetalk, wall_yuna_rival_rank, wall_yuna_glimpse_1, wall_yuna_glimpse_2, wall_yuna_glimpse_3_b, wall_yuna_glimpse_4, wall_yuna_dain_tempt_1, wall_yuna_dain_tempt_2, wall_yuna_dain_tempt_accept, day4_student_counteroffer_soft_seoyeon, day4_student_counteroffer_soft_dain, day4_student_counteroffer_soft_yuna, day4_student_return_home, day4_night_regret_msg, night_homeroom_msg_1, night_homeroom_msg_2, night_homeroom_msg_3, day4_hidden_msg_after_homeroom, night_nurse_msg_1, night_nurse_msg_2, night_nurse_msg_3, night_nurse_msg_4, forced_violation_day4_after_seoyeon, forced_violation_day4_seoyeon_apologize, forced_violation_day4_seoyeon_excuse, forced_violation_day4_after_yuna, forced_violation_day4_yuna_apologize, forced_violation_day4_yuna_excuse, forced_violation_day4_after_dain, forced_violation_day4_dain_apologize, forced_violation_day4_dain_excuse, forced_violation_day4_after_teacher, forced_violation_day4_teacher_apologize, forced_violation_day4_teacher_excuse, forced_violation_day4_after_nurse, forced_violation_day4_nurse_apologize, forced_violation_day4_nurse_excuse, forced_violation_day4_resume
- Day 5: morning5_caught_fallout_1, morning5_caught_fallout_2, morning5_caught_fallout_3, morning5_harem_fallout_1, morning5_harem_fallout_2, morning5_harem_fallout_3, morning5_temptation_discovery_branch, morning5_temptation_counteroffer_branch, morning5_caught_teacher_counteroffer, morning5_caught_nurse_counteroffer, morning5_caught_teacher_honest, morning5_caught_teacher_lie, morning5_caught_nurse_honest, morning5_caught_nurse_lie, morning5_caught_by_seoyeon_route, morning5_caught_by_yuna_route, morning5_caught_by_dain_route, morning5_caught_seoyeon_by_dain, morning5_caught_seoyeon_by_yuna, morning5_caught_dain_by_seoyeon, morning5_caught_dain_by_yuna, morning5_caught_yuna_by_seoyeon, morning5_caught_yuna_by_dain, morning5_caught_seoyeon_honest, morning5_caught_seoyeon_lie, morning5_caught_dain_honest, morning5_caught_dain_lie, morning5_caught_yuna_honest, morning5_caught_yuna_lie, morning5_counteroffer_group_talk, morning5_counteroffer_choice, morning5_counteroffer_choice_lead, morning5_counteroffer_choice_tempter, morning5_counteroffer_choice_neither, morning5_after_counteroffer, morning5_after_counteroffer_hidden_check, hidden_nurse_d5_after_co_check, morning5_mood_high, morning5_mood_mid, morning5_yuna_story_gone, morning5_yuna_story_gone_2, morning5_committed_start, morning5_committed_seo, morning5_committed_yuna, morning5_committed_dain, hidden_homeroom_d5_1, hidden_homeroom_d5_1_b, hidden_homeroom_d5_1_c, hidden_homeroom_d5_1_d, hidden_homeroom_d5_1_e, hidden_homeroom_d5_2, hidden_homeroom_d5_3, hidden_homeroom_d5_4, hidden_homeroom_d5_5, hidden_homeroom_d5_choice, hidden_homeroom_d5_praise_trap_1, hidden_homeroom_d5_praise_trap_2, hidden_homeroom_d5_praise_trap_3, hidden_homeroom_d5_praise_trap_4, hidden_homeroom_d5_praise_trap_5, hidden_homeroom_d5_praise_trap_6, hidden_homeroom_d5_praise_trap_7, hidden_homeroom_d5_praise_trap_8, hidden_homeroom_d5_praise_trap_9, hidden_homeroom_d5_praise_trap_10, hidden_homeroom_d5_praise_trap_11, hidden_homeroom_d5_praise_trap_12, hidden_homeroom_d5_correct_1, hidden_homeroom_d5_correct_2, hidden_homeroom_d5_correct_3, hidden_homeroom_d5_correct_4, hidden_homeroom_d5_correct_5, hidden_homeroom_d5_correct_6, hidden_homeroom_d5_correct_7, hidden_homeroom_d5_correct_8, hidden_homeroom_d5_correct_9, hidden_homeroom_d5_correct_10, hidden_homeroom_d5_correct_11, hidden_homeroom_d5_correct_12, hidden_homeroom_d5_correct_13, hidden_homeroom_d5_correct_14, hidden_homeroom_d5_6, hidden_homeroom_d5_6_b, hidden_homeroom_d5_6_c, hidden_homeroom_d5_6_d, hidden_homeroom_d5_6_e, hidden_homeroom_d5_6_f, hidden_homeroom_d5_6_g, hidden_homeroom_d5_6_h, hidden_homeroom_d5_6_i, hidden_homeroom_d5_6_j, hidden_homeroom_d5_6_k, hidden_homeroom_d5_6_l, hidden_homeroom_d5_6_m, hidden_homeroom_d5_6_n, hidden_homeroom_d5_6_o, hidden_homeroom_d5_6_p, hidden_homeroom_d5_6_q, hidden_homeroom_d5_6_r, hidden_homeroom_d5_6_s, hidden_homeroom_d5_6_t, hidden_homeroom_d5_7, hidden_homeroom_d5_7_b, hidden_homeroom_d5_7_c, hidden_homeroom_d5_8, hidden_homeroom_d5_freetalk, hidden_nurse_d5_1, hidden_nurse_d5_1_b, hidden_nurse_d5_1_c, hidden_nurse_d5_1_d, hidden_nurse_d5_1_e, hidden_nurse_d5_1_f, hidden_nurse_d5_2_b, hidden_nurse_d5_2_c, hidden_nurse_d5_3, hidden_nurse_d5_3_b, hidden_nurse_d5_3_c, hidden_nurse_d5_3_d, hidden_nurse_d5_3_e, hidden_nurse_d5_3_f, hidden_nurse_d5_3_g, hidden_nurse_d5_3_h, hidden_nurse_d5_3_i, hidden_nurse_d5_4, hidden_nurse_d5_4_b, hidden_nurse_d5_4_c, hidden_nurse_d5_4_d, hidden_nurse_d5_5, hidden_nurse_d5_choice, hidden_nurse_d5_choice_a, hidden_nurse_d5_choice_a_b, hidden_nurse_d5_choice_b, hidden_nurse_d5_choice_trap, hidden_nurse_d5_choice_b_b, hidden_nurse_d5_choice_b_c, hidden_nurse_d5_choice_b_d, hidden_nurse_d5_choice_b_e, hidden_nurse_d5_choice_b_f, hidden_nurse_d5_choice_b_g, hidden_nurse_d5_6, hidden_nurse_d5_6_b, hidden_nurse_d5_6_c, hidden_nurse_d5_flag_check, hidden_nurse_d5_7, hidden_nurse_d5_7_both, hidden_nurse_d5_freetalk, morning5_committed_end, hidden_homeroom_d5_low, hidden_nurse_d5_low, tour_co_branch, tour_co_event_1, tour_co_event_2, tour_co_seo_1, tour_co_seo_2, tour_co_seo_3, tour_co_yuna_1, tour_co_yuna_2, tour_co_yuna_3, tour_co_dain_1, tour_co_dain_2, tour_co_dain_3, tour_seo_affinity_check, tour_seo_affinity_80, tour_seo_affinity_60, tour_seo_event_1, tour_seo_event_2, tour_seo_event_3, tour_seo_event_4, tour_seo_event_5, tour_seo_2, tour_seo_3, tour_seo_4, tour_seo_5, tour_seo_6, tour_seo_7, tour_seo_8, tour_seo_9, tour_seo_10, tour_seo_11, tour_seo_12, tour_seo_13, tour_seo_14, tour_seo_freetalk, tour_seo_end, tour_yuna_1, tour_yuna_1b, tour_yuna_affinity_check, tour_yuna_affinity_80, tour_yuna_affinity_60, tour_yuna_event_1, tour_yuna_event_2, tour_yuna_event_3, tour_yuna_event_4, tour_yuna_event_5, tour_yuna_2, tour_yuna_3, tour_yuna_4, tour_yuna_5, tour_yuna_6, tour_yuna_7, tour_yuna_8, tour_yuna_9, tour_yuna_10, tour_yuna_11, tour_yuna_freetalk, tour_yuna_end, tour_yuna_end_2, tour_dain_1, tour_dain_1b, tour_dain_affinity_check, tour_dain_affinity_80, tour_dain_affinity_60, tour_dain_event_1, tour_dain_event_2, tour_dain_event_3, tour_dain_event_4, tour_dain_event_5, tour_dain_2, tour_dain_3, tour_dain_4, tour_dain_5, tour_dain_6, tour_dain_7, tour_dain_8, tour_dain_10, tour_dain_11, tour_dain_11_b, tour_dain_12, tour_dain_13, tour_dain_end, tour_dain_freetalk, tour_dain_end_2, after5_co_start, after5_co_abandoned_branch, after5_co_seo_1, after5_co_seo_2, after5_co_yuna_1, after5_co_yuna_2, after5_co_dain_1, after5_co_dain_2, after5_co_teacher_1, after5_co_teacher_2, after5_co_nurse_1, after5_co_nurse_2, after5_co_tempter_branch, after5_co_tempter_seo_1, after5_co_tempter_seo_2, after5_co_tempter_yuna_1, after5_co_tempter_yuna_2, after5_co_tempter_dain_1, after5_co_tempter_dain_2, after5_farewell_seo_affinity_check, after5_farewell_seo_high_1, after5_farewell_seo_high_2, after5_farewell_seo_2, after5_farewell_seo_3, after5_farewell_seo_4, after5_farewell_seo_5, after5_farewell_seo_6, after5_farewell_seo_6_b, after5_farewell_seo_7, after5_farewell_yuna_affinity_check, after5_farewell_yuna_high_1, after5_farewell_yuna_high_2, after5_farewell_yuna_2, after5_farewell_yuna_3, after5_farewell_yuna_4, after5_farewell_yuna_5, after5_farewell_yuna_5b, after5_farewell_dain_affinity_check, after5_farewell_dain_high_1, after5_farewell_dain_high_2, after5_farewell_dain_2, after5_farewell_dain_3, after5_farewell_dain_4, after5_farewell_dain_4_b, after5_farewell_dain_4_c, after5_farewell_dain_4_d, after5_farewell_dain_5, after5_farewell_dain_5b, after5_hidden_route_choice_check, after5_hidden_route_choice, after5_hidden_teacher_affinity_check, after5_hidden_teacher_high, after5_hidden_teacher_mid, after5_hidden_teacher_low, after5_hidden_nurse_affinity_check, after5_hidden_nurse_high, after5_hidden_nurse_mid, after5_hidden_nurse_low, after5_hidden_return_to_park, after5_last_chance_seo_postponed, after5_last_chance_seo_distance, after5_last_chance_2_b, after5_last_chance_2_c, after5_last_chance_2_d, after5_last_chance_2_e, after5_last_chance_2_f, after5_last_chance_2_g, after5_last_chance_2_h, after5_last_chance_2_i, after5_last_chance_2_j, after5_last_chance_dain_postponed, after5_last_chance_dain_distance, after5_last_chance_2_k, after5_last_chance_2_l, after5_last_chance_2_m, after5_last_chance_2_n, after5_last_chance_2_o, after5_last_chance_2_p, after5_last_chance_2_q, after5_last_chance_2_r, after5_last_chance_2_s, after5_last_chance_yuna_postponed, after5_last_chance_yuna_distance, after5_last_chance_yuna_1, after5_last_chance_yuna_2, after5_last_chance_yuna_3, after5_last_chance_yuna_4, after5_last_chance_yuna_5, after5_last_chance_yuna_6, after5_last_chance_yuna_7, after5_confess_react_seo, after5_confess_react_dain, after5_confess_react_yuna, after5_confess_react_yuna_call, after5_confess_react_yuna_b, after5_confess_react_yuna_c, after5_confess_react_yuna_d, after5_confess_react_yuna_e, after5_confess_react_yuna_f, after5_confess_react_yuna_g, after5_confess_react_yuna_h, after5_confess_react_yuna_i, after5_set_harem, after5_harem_commit, after5_harem_walk_1, after5_harem_walk_2, ending_counteroffer_bitter, ending_counteroffer_choice_lead, ending_counteroffer_choice_tempter, ending_counteroffer_choice_neither, ending_counteroffer_bitter_route, co_bitter_seo_1, co_bitter_seo_2, co_bitter_seo_3, co_bitter_yuna_1, co_bitter_yuna_2, co_bitter_yuna_3, co_bitter_dain_1, co_bitter_dain_2, co_bitter_dain_3, co_bitter_teacher_1, co_bitter_teacher_2, co_bitter_teacher_3, co_bitter_nurse_1, co_bitter_nurse_2, co_bitter_nurse_3, friend_4, day5_ending_mayhem, mayhem_1, mayhem_2, mayhem_3, mayhem_4, mayhem_5, mayhem_6, mayhem_7, mayhem_8, day5_ending_harem, harem_1, harem_1_b, harem_2, harem_3, harem_4, harem_5, harem_6, harem_7, harem_8, hidden_dual_route_1, hidden_dual_route_choice, hidden_perfect_homeroom_check, hidden_perfect_homeroom_1, hidden_perfect_homeroom_1b, hidden_perfect_homeroom_2, hidden_perfect_homeroom_2b, hidden_perfect_homeroom_2c, hidden_perfect_homeroom_3, hidden_perfect_homeroom_3b, hidden_perfect_homeroom_3c, hidden_perfect_homeroom_3e, hidden_perfect_homeroom_3f, hidden_perfect_homeroom_3g, hidden_perfect_homeroom_4b, hidden_perfect_homeroom_4c, hidden_perfect_homeroom_4d, hidden_perfect_homeroom_4e, hidden_perfect_homeroom_4f, hidden_perfect_homeroom_4g, hidden_perfect_homeroom_ending_title, hidden_perfect_homeroom_5, hidden_perfect_homeroom_ep1, hidden_perfect_homeroom_ep2, hidden_perfect_homeroom_ep3, hidden_perfect_homeroom_ep4, hidden_true_homeroom_1, hidden_true_homeroom_2, hidden_true_homeroom_2_b, hidden_true_homeroom_3, hidden_true_homeroom_3_b, hidden_true_homeroom_3_c, hidden_true_homeroom_4, hidden_true_homeroom_4_b, hidden_true_homeroom_4_c, hidden_true_homeroom_4_d, hidden_true_homeroom_4_e, hidden_true_homeroom_4_f, hidden_true_homeroom_4_g, hidden_true_homeroom_4_h, hidden_true_homeroom_5, hidden_true_homeroom_5_b, hidden_true_homeroom_5_c, hidden_true_homeroom_6, hidden_true_homeroom_6_b, hidden_true_homeroom_7, hidden_true_homeroom_7_b, hidden_true_homeroom_7_c, hidden_true_homeroom_7_d, hidden_true_homeroom_8, hidden_true_homeroom_ending_title, hidden_good_homeroom_1, hidden_good_homeroom_2, hidden_good_homeroom_3, hidden_good_homeroom_4, hidden_good_homeroom_ending_title, hidden_bitter_homeroom_1, hidden_bitter_homeroom_2, hidden_bitter_homeroom_3, hidden_bitter_homeroom_4, hidden_bitter_homeroom_5, hidden_bitter_homeroom_6, hidden_bitter_homeroom_ending_title, hidden_perfect_nurse_check, hidden_perfect_nurse_1, hidden_perfect_nurse_2, hidden_perfect_nurse_3, hidden_perfect_nurse_3b, hidden_perfect_nurse_4, hidden_perfect_nurse_4b, hidden_perfect_nurse_5, hidden_perfect_nurse_5b, hidden_perfect_nurse_ep1, hidden_perfect_nurse_ending_title, hidden_perfect_nurse_ep2, hidden_perfect_nurse_ep3, hidden_perfect_nurse_ep4, hidden_true_nurse_1, hidden_true_nurse_2, hidden_true_nurse_2_b, hidden_true_nurse_2_c, hidden_true_nurse_2_d, hidden_true_nurse_3, hidden_true_nurse_3_b, hidden_true_nurse_4, hidden_true_nurse_5, hidden_true_nurse_5_b, hidden_true_nurse_5_c, hidden_true_nurse_5_d, hidden_true_nurse_5_e, hidden_true_nurse_5_f, hidden_true_nurse_6, hidden_true_nurse_7, hidden_true_nurse_7_b, hidden_true_nurse_7_c, hidden_true_nurse_7_d, hidden_true_nurse_8, hidden_true_nurse_8_b, hidden_true_nurse_8_c, hidden_true_nurse_8_d, hidden_true_nurse_8_e, hidden_true_nurse_8_f, hidden_true_nurse_8_g, hidden_true_nurse_8_h, hidden_true_nurse_ending_title, hidden_good_nurse_1, hidden_good_nurse_2, hidden_good_nurse_2_b, hidden_good_nurse_2_c, hidden_good_nurse_2_d, hidden_good_nurse_3, hidden_good_nurse_3_b, hidden_good_nurse_4, hidden_good_nurse_ending_title, hidden_bitter_nurse_1, hidden_bitter_nurse_2, hidden_bitter_nurse_3, hidden_bitter_nurse_4, hidden_bitter_nurse_5, hidden_bitter_nurse_6, hidden_bitter_nurse_7, hidden_bitter_nurse_ending_title, ending_affinity_check, ending_aff_check_seo, perfect_seo_1, perfect_seo_1_b, perfect_seo_2, perfect_seo_3, perfect_seo_4, perfect_seo_5, perfect_seo_5_b, perfect_epilogue_1_seo, perfect_epilogue_bridge_seo, perfect_epilogue_2_seo, perfect_epilogue_3_seo, perfect_seo_coda_1, perfect_seo_coda_2, perfect_seo_coda_3, perfect_epilogue_4_seo, bitter_seo_1, bitter_seo_2, bitter_seo_2_b, bitter_seo_3, true_seo_1, true_seo_2, true_seo_3, true_seo_4, true_seo_5, true_seo_6, true_seo_6b, true_seo_7, true_seo_7_b, true_seo_7b, true_seo_8, true_seo_bridge, true_epilogue_1_seo, ending_aff_check_yuna, perfect_yuna_1, perfect_yuna_2, perfect_yuna_3, perfect_yuna_4, perfect_yuna_5, perfect_epilogue_1_yuna, perfect_epilogue_bridge_yuna, perfect_epilogue_2_yuna, perfect_epilogue_3_yuna, perfect_yuna_coda_1, perfect_yuna_coda_2, perfect_yuna_coda_3, perfect_epilogue_4_yuna, bitter_yuna_1, bitter_yuna_2, bitter_yuna_2_library, bitter_yuna_2_book, bitter_yuna_3, true_yuna_1, true_yuna_2, true_yuna_2_b, true_yuna_2_c, true_yuna_2_d, true_yuna_3, true_yuna_4, true_yuna_5, true_yuna_5_b, true_yuna_6, true_yuna_6b, true_yuna_7, true_yuna_bridge, true_epilogue_1_yuna, ending_aff_check_dain, perfect_dain_1, perfect_dain_2, perfect_dain_2b, perfect_dain_3, perfect_dain_3b, perfect_dain_4, perfect_dain_5, perfect_epilogue_1_dain, perfect_epilogue_1b_dain, perfect_epilogue_1c_dain, perfect_epilogue_bridge_dain, perfect_epilogue_2_dain, perfect_epilogue_3_dain, perfect_dain_coda_1, perfect_dain_coda_2, perfect_dain_coda_3, perfect_epilogue_4_dain, bitter_dain_1, bitter_dain_2, bitter_dain_3, bitter_dain_3_b, bitter_epilogue_1, bitter_epilogue_2, bitter_epilogue_3, true_dain_1, true_dain_2, true_dain_2b, true_dain_3, true_dain_4, true_dain_5, true_dain_6, true_dain_7, true_dain_8, true_dain_8b, true_dain_bridge, true_epilogue_1_dain, true_epilogue_2, true_epilogue_3, true_epilogue_4, true_epilogue_4_seo, true_epilogue_4_yuna, true_epilogue_4_dain, true_epilogue_7, day5_ending_good, good_1, good_1b, good_1c, good_1_seo, good_1_seo_b, good_1_seo_c, good_1_seo_d, good_2_seo, good_3_seo, good_4_seo, good_5_seo, good_epilogue_1, good_epilogue_2, good_epilogue_3, good_5_cg_seo, good_1_yuna, good_1_yuna_b, good_1_yuna_b_b, good_2_yuna, good_3_yuna, good_4_yuna, good_5_yuna, good_epilogue_1_yuna, good_epilogue_2_yuna, good_epilogue_3_yuna, good_5_cg_yuna, good_1_dain, good_2_dain, good_3_dain, good_4_dain, good_5_dain, good_epilogue_1_dain, good_epilogue_2_dain, good_epilogue_3_dain, good_5_cg_dain, date_choice_perfect_seo, date_perfect_seo_roof_1, date_perfect_seo_roof_2, date_perfect_seo_roof_3, date_perfect_seo_cafe_1, date_perfect_seo_cafe_2, date_perfect_seo_cafe_3, date_choice_perfect_yuna, date_perfect_yuna_book_1, date_perfect_yuna_book_2, date_perfect_yuna_book_3, date_perfect_yuna_book_4, date_perfect_yuna_roof_1, date_perfect_yuna_roof_2, date_perfect_yuna_roof_3, date_choice_perfect_dain, date_perfect_dain_gym_1, date_perfect_dain_gym_2, date_perfect_dain_gym_3, date_perfect_dain_booth_1, date_perfect_dain_booth_2, date_perfect_dain_booth_3, date_choice_perfect_teacher, date_perfect_teacher_cafe_1, date_perfect_teacher_cafe_2, date_perfect_teacher_cafe_3, date_perfect_teacher_museum_1, date_perfect_teacher_museum_2, date_perfect_teacher_museum_3, date_choice_perfect_nurse, date_perfect_nurse_home_1, date_perfect_nurse_home_2, date_perfect_nurse_home_3, date_perfect_nurse_park_1, date_perfect_nurse_park_2, date_perfect_nurse_park_3, date_choice_true_seo, date_true_seo_1, date_true_seo_2, date_true_seo_alt_1, date_true_seo_alt_2, date_choice_true_yuna, date_true_yuna_book_1, date_true_yuna_book_2, date_true_yuna_roof_1, date_true_yuna_roof_2, date_choice_true_dain, date_true_dain_1, date_true_dain_2, date_true_dain_alt_1, date_true_dain_alt_2, date_choice_true_teacher, date_true_teacher_1, date_true_teacher_2, date_true_teacher_alt_1, date_true_teacher_alt_2, date_choice_true_nurse, date_true_nurse_1, date_true_nurse_2, date_true_nurse_alt_1, date_true_nurse_alt_2, day5_main_ending_freetalk_router, day5_seo_ending_freetalk_intro, day5_seo_ending_freetalk_router, day5_seo_ending_freetalk_perfect, day5_seo_ending_freetalk_true_love, day5_seo_ending_freetalk_good, day5_seo_ending_freetalk_bittersweet, day5_seo_ending_freetalk_late_good, day5_yuna_ending_freetalk_intro, day5_yuna_ending_freetalk_router, day5_yuna_ending_freetalk_perfect, day5_yuna_ending_freetalk_true_love, day5_yuna_ending_freetalk_good, day5_yuna_ending_freetalk_bittersweet, day5_yuna_ending_freetalk_late_good, day5_dain_ending_freetalk_intro, day5_dain_ending_freetalk_router, day5_dain_ending_freetalk_perfect, day5_dain_ending_freetalk_true_love, day5_dain_ending_freetalk_good, day5_dain_ending_freetalk_bittersweet, day5_dain_ending_freetalk_late_good, day5_teacher_ending_freetalk_intro, day5_teacher_ending_freetalk_router, day5_teacher_ending_freetalk_perfect, day5_teacher_ending_freetalk_true_love, day5_teacher_ending_freetalk_good, day5_teacher_ending_freetalk_bittersweet, day5_nurse_ending_freetalk_intro, day5_nurse_ending_freetalk_router, day5_nurse_ending_freetalk_perfect, day5_nurse_ending_freetalk_true_love, day5_nurse_ending_freetalk_good, day5_nurse_ending_freetalk_bittersweet, forced_violation_day5_after_seoyeon, forced_violation_day5_seoyeon_apologize, forced_violation_day5_seoyeon_excuse, forced_violation_day5_after_yuna, forced_violation_day5_yuna_apologize, forced_violation_day5_yuna_excuse, forced_violation_day5_after_dain, forced_violation_day5_dain_apologize, forced_violation_day5_dain_excuse, forced_violation_day5_after_teacher, forced_violation_day5_teacher_apologize, forced_violation_day5_teacher_excuse, forced_violation_day5_after_nurse, forced_violation_day5_nurse_apologize, forced_violation_day5_nurse_excuse, forced_violation_day5_resume
