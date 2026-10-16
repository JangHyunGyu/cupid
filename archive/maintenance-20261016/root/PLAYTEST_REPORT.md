# Cupid 플레이테스트 리포트

> 결정론적 시드: `cupid-default`

## 요약

| 항목 | 값 |
|------|----|
| 탐색 경로 | 9996개 |
| 완료 경로 | 4996개 |
| 엔딩 종류 | 10종 |
| 전체 씬 | 3393개 |

## 엔딩 도달 통계

| 엔딩 | 도달 경로 수 |
|------|-------------|
| `alone_5` | 3158 |
| `friend_12` | 911 |
| `confess_fail_5` | 278 |
| `day5_dain_ending_freetalk_bittersweet` | 264 |
| `day5_teacher_ending_freetalk_bittersweet` | 239 |
| `day5_yuna_ending_freetalk_bittersweet` | 96 |
| `day5_nurse_ending_freetalk_bittersweet` | 27 |
| `day5_teacher_ending_freetalk_good` | 20 |
| `day5_nurse_ending_freetalk_good` | 2 |
| `day5_nurse_ending_freetalk_true_love` | 1 |

## 경로 상세 (엔딩별 대표 경로)

### alone_5

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_yuna_choice`: (선택)
- `after_end`: (선택)
- `lunch2_choice`: (선택)
- `after2_choice`: (선택)
- `night2_choice`: (선택)
- `lunch3_choice`: (선택)
- `after3_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=6 유나=12 다인=3 담임=0 보건=0

<details>
<summary>씬 타임라인 (384씬)</summary>

| # | 씬 ID | 화자 | 배경 | 캐릭터 | OP | 밤 | 대사 (앞 30자) |
|---|--------|------|------|--------|----|----|----------------|
| | **Day 1** | | | | | | |
| 1 | `start` | {name} | school | 없음 |  |  | *4월의 벚꽃잎이 흩날리는 교문 앞. 아직 풀기가 가시 |
| 2 | `start_again` | {name} | school | 없음 |  |  | *순간 울컥 치미는 현기증에 차가운 교문 기둥을 짚어선 |
| 3 | `start_3` | {name} | school | 없음 |  |  | *주머니 속 휴대폰이 짧게 떨린다. 예전 학교 단체방  |
| 4 | `name_input_scene` | 시스템 | school | 없음 |  |  | 전학생, 이름이 뭐야? |
| 5 | `gate_1` | {name} | school | 없음 |  |  | *교문 그늘 아래 서 있던 긴 생머리의 여학생이 안경테 |
| 6 | `seoyeon_meet_1` | 서연 | school | seyoun_normal |  |  | 혹시 오늘 온 전학생? {name} 맞지? |
| 7 | `seoyeon_meet_2` | 서연 | school | seyoun_normal |  |  | 가슴팍 명찰도 {name}이네. 반가워. *단정한 손끝 |
| 8 | `seoyeon_meet_3` | {name} | school | seyoun_normal |  |  | 맞는데. 내 얼굴은 어떻게 한 번에 알아봤어? |
| 9 | `seoyeon_meet_4` | 서연 | school | seyoun_normal |  |  | 학생회장이거든. 새로 온 전학생 맞이하는 것도 내 몫이 |
| 10 | `seoyeon_meet_5` | 서연 | school | seyoun_normal |  |  | 이쪽으로 따라와. 조회 시작하기 전에 15분 안으로 학 |
| 11 | `seoyeon_meet_6` | {name} | school | seyoun_normal |  |  | 첫날부터 학생회장이 직접 안내라니 좀 떨리는데. |
| 12 | `seoyeon_meet_7` | 서연 | school | seyoun_normal |  |  | 원래 내가 맡은 일이니까 괜히 어렵게 생각할 것 없어. |
| 13 | `seoyeon_meet_8` | 서연 | school | seyoun_normal |  |  | 자, 가자. *몸을 돌리는 서연의 교복 셔츠 깃에서 햇 |
| 14 | `seoyeon_choice` | {name} | school | seyoun_normal |  |  | *앞서 걷는 서연의 단정한 뒷모습을 보며 입을 연다.* |
| 15 | `choice_flirt_1` | 서연 | school | seyoun_normal |  |  | *걸음을 멈추고 반쯤 돌아서더니 맑은 안경알 너머로 눈 |
| 16 | `choice_flirt_2` | 서연 | school | seyoun_laugh |  |  | 전학 첫날부터 농담할 여유도 있네. 덕분에 네 이름은  |
| 17 | `choice_flirt_3` | {name} | school | seyoun_laugh |  |  | 오, 혹시 첫인상 점수라도 매기는 중이야? |
| 18 | `choice_flirt_4` | 서연 | school | seyoun_normal |  |  | 글쎄, 아직 학교 분위기는 잘 모르는 모양이지만 첫인상 |
| 19 | `choice_flirt_5` | {name} | school | seyoun_normal |  |  | 학생회장님한테 후한 점수라니 영광인데? |
| 20 | `choice_flirt_6` | 서연 | school | seyoun_normal |  |  | 일주일 뒤에도 그렇게 여유롭게 웃을 수 있을지 두고 볼 |
| 21 | `choice_flirt_7` | 서연 | school | seyoun_laugh |  |  | 늦겠다, 이리 따라와 {name}. *살짝 붉어진 귓바 |
| 22 | `hallway_1` | 서연 | school_hallway | seyoun_back |  |  | 지나가는 애들한테 인사받느라 걸음 늦출 필요 없어. 그 |
| 23 | `hallway_3` | 서연 | school_hallway | seyoun_normal |  |  | 지금 걷는 본관이 3학년 건물이고 창밖 건너편이 도서관 |
| 24 | `hallway_4` | 서연 | school_hallway | seyoun_normal |  |  | 그리고 이건 아무한테나 안 보여주는 건데. *재킷 주머 |
| 25 | `hallway_5` | 서연 | school_hallway | seyoun_normal |  |  | 원래 우리 학교 옥상은 평소엔 잠겨 있거든. 이 열쇠는 |
| 26 | `hallway_6` | {name} | school_hallway | seyoun_normal |  |  | 옥상에 너만의 비밀 아지트라도 숨겨 둔 거야? |
| 27 | `hallway_6_b` | 서연 | school_hallway | seyoun_normal |  |  | *맑게 울리던 열쇠고리 소리가 손안에서 뚝 멎는다.*  |
| 28 | `hallway_6_c` | 서연 | school_hallway | seyoun_normal |  |  | *입꼬리를 살짝 올린 채 대답 대신 열쇠를 다시 주머니 |
| 29 | `hallway_7` | 서연 | school_hallway | seyoun_normal |  |  | 맞다, 오늘 점심시간. 아직 어디서 밥 먹을지 못 정했 |
| 30 | `hallway_8` | {name} | school_hallway | seyoun_shy |  |  | *어느새 걸음을 멈춘 서연이 아침 햇살이 비치는 교실  |
| 31 | `hallway_10` | 서연 | school_hallway | seyoun_normal |  |  | 다 왔다, 여기가 네 교실이야. 얼른 들어가 봐. |
| 32 | `hallway_11` | {name} | school_hallway | seyoun_normal |  |  | 점심때도 일대일로 안내해 주는 거야? |
| 33 | `hallway_12` | 서연 | school_hallway | seyoun_normal |  |  | 글쎄, 오늘 오전 수업 잘 버티는 거 봐서. |
| 34 | `hallway_13` | 서연 | school_hallway | seyoun_back |  |  | *돌아서던 서연이 클립보드를 어깨 높이로 가볍게 들어  |
| 35 | `hallway_13_b` | {name} | school_hallway | seyoun_back |  |  | *단정한 구두 소리를 남기며 복도 저편으로 멀어지는 서 |
| 36 | `classroom_1` | {name} | room_school | 없음 |  |  | *드르륵, 교실 앞문을 열자 왁자지껄하던 공기 위로 수 |
| 37 | `classroom_2_b` | {name} | room_school | teacher_normal |  |  | *교탁 앞에는 20대 후반쯤 되어 보이는 담임선생님이  |
| 38 | `classroom_3` | 담임 | room_school | teacher_normal |  |  | 자, 다들 주목. 오늘부터 우리 반 식구가 된 전학생이 |
| 39 | `classroom_3_b` | {name} | room_school | teacher_normal |  |  | 오늘 전학 온 {name}입니다. 잘 부탁드립니다. * |
| 40 | `classroom_5_b` | 담임 | room_school | teacher_normal |  |  | 그래, {name}. 우리 반에 온 걸 환영해. 급할  |
| 41 | `classroom_5_c` | {name} | room_school | teacher_normal |  |  | *낯선 교실 공기에 섞여 내 숨소리가 잦아드는 사이 교 |
| 42 | `classroom_dain_1` | 다인 | room_school | dain_normal |  |  | 오, 전학생! 드디어 우리 반에도 새 얼굴이 들어왔네! |
| 43 | `classroom_dain_2` | 다인 | room_school | yuna_normal |  |  | 이쪽 봐, 이쪽! *산뜻한 갈색 숏컷에 활동적인 배구부 |
| 44 | `classroom_dain_3` | 담임 | room_school | teacher_normal |  |  | 다인아, 아침부터 목소리 좀 낮추자. 그리고 교실 안에 |
| 45 | `classroom_dain_4` | 다인 | room_school | yuna_normal |  |  | 에이, 쌤도 참. 이게 세상에서 제일 편하단 말이에요! |
| 46 | `classroom_dain_5` | 다인 | room_school | yuna_normal |  |  | 네 자리는 여기야, 여기! *아이들의 웃음소리 사이로  |
| 47 | `classroom_dain_5_b` | 담임선생님 | room_school | teacher_normal |  |  | 다인아, 적어도 출석 부르는 동안만이라도 진정 좀 하자 |
| 48 | `classroom_dain_5_c` | 담임 | room_school | teacher_normal |  |  | 지금부터 그 에너지를 다 쓰면 어떡해. 아직 1교시 종 |
| 49 | `classroom_dain_5_d` | 담임선생님 | room_school | teacher_angry |  |  | *담임은 작게 고개를 저으며 출석부 다음 장을 부드럽게 |
| 50 | `classroom_yuna_1` | {name} | room_school | yuna_bored |  |  | *소란스러운 교실 풍경과 동떨어진 창가 맨 뒷자리, 봄 |
| 51 | `classroom_yuna_2` |  | 없음 | 없음 |  |  |  |
| 52 | `classroom_yuna_4` | {name} | room_school | yuna_bored |  |  | *앞줄에 앉은 학생 하나가 내 소매를 스치며 작게 속삭 |
| 53 | `classroom_seat_1` | 담임선생님 | room_school | teacher_normal |  |  | *출석부를 덮은 담임이 창가 쪽에서 한 줄 건너편 빈자 |
| 54 | `classroom_seat_2` | 다인 | room_school | yuna_normal |  |  | 오, 딱 내 옆자리네? 멀뚱히 서 있지 말고 얼른 와서 |
| 55 | `classroom_minsu_1` | {name} | room_school | minsu_normal |  |  | *가방을 내려놓고 의자를 빼려는데 앞자리에 앉아 있던  |
| 56 | `classroom_minsu_2` | 민수 | room_school | minsu_smirk |  |  | 야, 전학생. 우리 반에 온 걸 환영한다. 그리고 미리 |
| 57 | `classroom_minsu_3` | {name} | room_school | minsu_smirk |  |  | 갑자기 무슨 각오? |
| 58 | `classroom_minsu_2_b` | 민수 | room_school | minsu_normal |  |  | *옆자리의 다인을 향해 슬쩍 턱짓하며 씨익 웃는다.*  |
| 59 | `classroom_dain_talk_1` | {name} | room_school | minsu_normal |  |  | *장난스럽게 돌아앉는 앞자리 남학생의 교복 명찰에는 ' |
| 60 | `classroom_dain_talk_2` | 다인 | room_school | yuna_normal |  |  | 저 녀석 말은 신경 쓰지 마! 그보다 나 궁금한 거 하 |
| 61 | `classroom_dain_talk_3` | 다인 | room_school | yuna_normal |  |  | 야, {name}. 너 평소에 몸 움직이는 거나 운동  |
| 62 | `classroom_dain_talk_4` | {name} | room_school | yuna_normal |  |  | 운동은 왜, 갑자기? |
| 63 | `classroom_dain_talk_5` | 다인 | room_school | yuna_normal |  |  | 아니, 오늘 방과후에 리시브 연습을 좀 더 하고 싶은데 |
| 64 | `classroom_dain_talk_6` | {name} | room_school | yuna_normal |  |  | 전학생을 첫날부터 인간 볼 머신으로 쓰려고? |
| 65 | `classroom_dain_talk_7` | 다인 | room_school | yuna_normal |  |  | 에이, 설마! 그래도 기계보다는 사람이랑 호흡 맞추는  |
| 66 | `classroom_dain_talk_8` | 다인 | room_school | yuna_normal |  |  | 어때, 같이 해 볼래? *다인의 따뜻한 검지가 내 책상 |
| 67 | `classroom_yuna_note_1` | {name} | room_school | yuna_bored |  |  | *그때 뒷자리에서 반듯하게 접힌 종이쪽지 하나가 책상  |
| 68 | `classroom_yuna_note_3` | 유나 | room_school | yuna_bored |  |  | *조심스럽게 펼치자 은은한 연보라색 잉크 글씨와 모서리 |
| 69 | `classroom_yuna_note_5` | {name} | room_school | yuna_bored |  |  | *내가 고개를 들자 창가 햇살에 비치던 유나의 하얀 손 |
| 70 | `classroom_yuna_note_6` | {name} | room_school | yuna_bored |  |  | *1교시 시작을 알리는 종소리가 교실 안을 메운다. 창 |
| 71 | `lunch_start` | {name} | school_hallway | 없음 |  |  | *점심시간을 알리는 종소리와 함께 교실 공기가 들뜬다. |
| 72 | `lunch_start_4` | 서연 | school_hallway | seyoun_normal |  |  | 아까 말한 대로 옥상 올라올 거지? *계단참에서 걸음을 |
| 73 | `lunch_start_4_b` | {name} | school_hallway | dain_normal |  |  | *대답하려는 순간 옆에서 다가온 다인의 따뜻한 손바닥이 |
| 74 | `lunch_start_5` | 다인 | school_hallway | dain_normal |  |  | 야, 아직 점심 안 먹었지? 나랑 매점 뛰어가자. 빵  |
| 75 | `lunch_start_6` | 유나 | school_hallway | yuna_normal |  |  | 난 도서관 갈 건데. *내 옆을 스쳐 지나가며 가방끈을 |
| 76 | `lunch_start_7` | {name} | school_hallway | 없음 |  |  | *바람 부는 옥상과 달콤한 빵 냄새가 나는 매점, 그리 |
| 77 | `lunch_choice` | {name} | school_hallway | 없음 |  |  | *첫날의 점심시간, 누구의 발걸음을 따라갈까?* |
| 78 | `lunch_yuna_1` | {name} | library_old | yuna_normal |  |  | *복도의 소음이 멀어지는 계단을 지나 유나의 뒤를 따라 |
| 79 | `lunch_yuna_1_aff_default` | 유나 | library_old | yuna_normal |  |  | *따로 건네는 쪽지는 없었다. 유나는 햇살이 비스듬히  |
| 80 | `lunch_yuna_2` | 유나 | library_old | yuna_normal |  |  | 의자 끌 때 소리 나지 않게 살살. *하얀 검지로 펼쳐 |
| 81 | `lunch_yuna_4` | 유나 | library_old | yuna_normal |  |  | 잠깐만 기다려. *끼워 두었던 대출 영수증 끝을 반듯하 |
| 82 | `lunch_yuna_5` | {name} | library_old | yuna_normal |  |  | *5초, 다시 10초가 고요하게 흐른다. 유나는 접힌  |
| 83 | `lunch_yuna_5_b` | {name} | library_old | yuna_normal |  |  | 옆자리 비었으면 앉아도 돼? |
| 84 | `lunch_yuna_7` | 유나 | library_old | yuna_normal |  |  | *활자에서 눈을 떼지 않은 채 나직이 속삭인다.* 옆에 |
| 85 | `lunch_yuna_8` | 유나 | library_old | yuna_normal |  |  | 가방 내렸어. 이쪽 앉아. *옆 의자에서 자기 가방을  |
| 86 | `lunch_yuna_10` | {name} | library_old | yuna_normal |  |  | *나란히 앉은 책상 위로 벽시계 초침 소리와 종이 스치 |
| 87 | `lunch_yuna_10_b` | {name} | library_old | yuna_normal |  |  | *유나의 손끝이 낡은 책갈피에 적힌 흐릿한 글씨를 슬쩍 |
| 88 | `lunch_yuna_12` | 유나 | library_old | yuna_normal |  |  | *책장 너머로 붉은빛이 감도는 눈동자가 천천히 올라온다 |
| 89 | `lunch_yuna_13` | {name} | library_old | yuna_normal |  |  | 어? 진짜네. |
| 90 | `lunch_yuna_14` | 유나 | library_old | yuna_normal |  |  | 그 시리즈는 1권부터 차례대로 읽어야 이해돼. |
| 91 | `lunch_yuna_15` | 유나 | library_old | yuna_normal |  |  | 여기 있어. 이걸로 먼저 읽어. *자기 손옆에 쌓아 두 |
| 92 | `lunch_yuna_16` | {name} | library_old | yuna_normal |  |  | 빌려주는 거야? 고마워. |
| 93 | `lunch_yuna_17` | 유나 | library_old | yuna_normal |  |  | 다 읽으면 나한테 다시 돌려줘. |
| 94 | `lunch_yuna_18` | 유나 | library_old | yuna_normal |  |  | 그럼 이제 각자 읽자. *책상 하나를 사이에 두고 나란 |
| 95 | `lunch_yuna_20` | {name} | library_old | yuna_normal |  |  | *한참 만에 고개를 들자 창가 햇살을 등진 유나가 책  |
| 96 | `lunch_yuna_21` | {name} | library_old | yuna_normal |  |  | 왜 그래, 나한테 할 말 있어? |
| 97 | `lunch_yuna_22` | 유나 | library_old | yuna_normal |  |  | *유나가 얇은 책갈피를 페이지 사이에 끼워 넣는다.*  |
| 98 | `lunch_yuna_23` | {name} | library_old | yuna_normal |  |  | 그게 왜? |
| 99 | `lunch_yuna_24` | 유나 | library_old | yuna_normal |  |  | 생각보다 편했어. |
| 100 | `lunch_yuna_25` | 유나 | library_old | yuna_normal |  |  | *유나의 시선이 내가 쥔 책 표지를 스쳐 내 눈동자에  |
| 101 | `lunch_yuna_choice` | {name} | library_old | yuna_normal |  |  | *읽던 책을 천천히 덮으며 유나와 시선을 맞춘다.* |
| 102 | `lunch_yuna_c1_1` | 유나 | library_old | yuna_normal |  |  | 응, 급하게 넘기지 말고 1권부터 천천히 읽어 봐. 뒤 |
| 103 | `lunch_yuna_c1_2` | 유나 | library_old | yuna_smile |  |  | 마지막 장까지 다 읽으면 말해 줘. 네가 어떻게 읽었는 |
| 104 | `lunch_yuna_freetalk` | 유나 | library_old | yuna_normal |  |  | *유나가 덮은 책 표지 위로 하얀 두 손을 가만히 포갠 |
| 105 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *5교시 수업을 알리는 차임벨이 울려 퍼지며 짧고도 설 |
| 106 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *붉은 노을이 스며드는 방과후 복도. 주머니 속에서 진 |
| 107 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 108 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 그 가벼운 마지막 한 줄에 시선이  |
| 109 | `after_kakao_5` |  | 없음 | 없음 |  | 🌅 |  |
| 110 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *한참을 망설이다 조용히 단체방 나가기를 누른다. 텅  |
| 111 | `after1_jealousy_yuna_1` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 너 점심시간에 도서관 갔다 왔다며? 그것도 유나랑 |
| 112 | `after1_jealousy_yuna_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 신기하네, 걔 원래 옆에 누가 오는 거 진짜 싫어하거든 |
| 113 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *휴대폰을 주머니에 넣고 석양이 길게 드리운 복도를 따 |
| 114 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도 모퉁이를 돌려는데 등 뒤에서 운동화 바닥이 마룻 |
| 115 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 거기 앞 조심해! |
| 116 | `after_miss_dain_3` | 다인 | school_hallway | dain_normal |  | 🌅 | 휴, 아슬아슬하게 비켜 줬네! *내 어깨를 스치며 바람 |
| 117 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 방금 반사신경 꽤 괜찮았는데? 역시 운동 좀 해  |
| 118 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 하마터면 부딪힐 뻔했잖아. 복도에서 웬 전력질주야? |
| 119 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 배구부 집합 시간 늦었거든! 지금 당장 체육관 뛰어가야 |
| 120 | `after_miss_dain_6_b` | {name} | school_hallway | dain_pain |  | 🌅 | *돌아서서 두어 걸음 내딛던 다인이 순간 걸음을 멈추고 |
| 121 | `after_miss_dain_7` | 다인 | school_hallway | dain_laugh |  | 🌅 | 참, 내 이름 다인이야! 내일 와서 이름 까먹으면 안  |
| 122 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞 복도를 지나는데 붉은 눈동자의 여학생이 소 |
| 123 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 방금 책 사이에서 이거 떨어졌어. |
| 124 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *바닥에 내려앉은 낡은 책갈피를 조심스레 주워 건넨다. |
| 125 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | 다행이다, 모서리 안 구겨졌네. *하얀 손가락으로 책갈 |
| 126 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 주워 줘서 고마워. |
| 127 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *소중한 것을 감추듯 책갈피를 책등 깊숙이 끼워 넣고는 |
| 128 | `after_miss_yuna_4` |  | 없음 | 없음 |  | 🌅 |  |
| 129 | `after_miss_seoyeon_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *가방을 메고 신발장으로 내려가려는데 계단 앞 복도에서 |
| 130 | `after_miss_seoyeon_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 너 아까 점심시간에 어디 갔었어? |
| 131 | `after_miss_seoyeon_3` | {name} | school_hallway | seyoun_normal |  | 🌅 | 점심시간에 어디라니? |
| 132 | `after_miss_seoyeon_4` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 일부러 옥상 문까지 열어 두고 있었는데 끝까지 안 올라 |
| 133 | `after_miss_seoyeon_5` | {name} | school_hallway | seyoun_normal |  | 🌅 | 설마 옥상에서 계속 나 기다린 거야? |
| 134 | `after_miss_seoyeon_6` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 기다리긴 누가 기다려, 내 도시락 먼저 먹고 있었지.  |
| 135 | `after_miss_seoyeon_7` | {name} | school_hallway | seyoun_normal |  | 🌅 | *서연은 클립보드를 가슴께로 끌어안으며 시선을 살짝 피 |
| 136 | `after_miss_seoyeon_8` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 내일 점심엔 다른 데로 새지 마. |
| 137 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교를 알리는 안내 방송이 끝난 뒤 노을빛만 남은 복 |
| 138 | `night_start` | {name} | room_my | 없음 |  |  | *집으로 돌아와 아직 낯선 새 교복을 옷걸이에 걸어 두 |
| 139 | `night_start_3` | {name} | room_my | 없음 |  |  | *고요한 방 안, 머리맡에 둔 휴대폰이 짧게 진동하며  |
| 140 | `night_msg_yuna_1` | 유나 | room_my | yuna_normal | 0.35 |  | 오늘 점심엔 옆에서 조용히 있어 줘서 고마웠어 |
| 141 | `night_msg_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | 내일도 내 옆자리 비워 놓을게 |
| 142 | `night_msg_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *짧고 담백한 '내 옆자리 비워 놓을게'라는 문장을 몇 |
| 143 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 대화창을 닫으려는데 상단 알림 바에 학교 앱  |
| 144 | `night_late_transition` | {name} | room_my | 없음 |  |  | *불을 끄고 막 눈을 감으려는데 정적을 깨고 휴대폰이  |
| 145 | `night_late_branch` | {name} | room_my | 없음 |  |  | *어두운 방 안, 손에 쥔 액정 화면이 하얗게 빛을 낸 |
| 146 | `night_end_1` | {name} | room_my | 없음 |  |  | *휴대폰을 내려놓고 어두운 천장을 올려다본다. 옷걸이에 |
| 147 | `night_end_3` | {name} | room_my | 없음 |  |  | *연락처에 나란히 저장된 새로운 이름들을 한 번 더 눈 |
| | **Day 2** | | | | | | |
| 148 | `morning2_start` | {name} | room_school | 없음 |  |  | *전학 온 지 이틀째 아침. 교복 소매에 남았던 빳빳한 |
| 149 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 150 | `morning2_greet_none_tone` |  | room_school | 없음 |  |  |  |
| 151 | `morning2_greet_none_1` | {name} | room_school | 없음 |  |  | *교실 문을 열고 들어서도 먼저 다가오는 사람은 없다. |
| 152 | `morning2_greet_none_2` | {name} | room_school | yuna_normal |  |  | *서연은 교탁 앞에서 출석부만 넘기고 다인은 반대편 친 |
| 153 | `morning2_yuna_seen` | 유나 | room_school | yuna_normal |  |  | ...너 혹시 전학 오기 전에도 이 학교에 와 본 적  |
| 154 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *가방을 걸고 자리에 앉으려는데 책상 한가운데에 정갈하 |
| 155 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 156 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가던 서연이 열린 교실 앞문 틈으로 고개를 |
| 157 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 바쁜 학생회장이 아침부터 남의 교실 앞까지 직접 인사하 |
| 158 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 교무실에 서류 갖다주러 가는 길에 잠깐 멈춘 거야. 그 |
| 159 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | 얼굴 확인했으니까 이제 간다. 아침 조회 늦지 말고.  |
| 160 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연의 긴 머리카락이 사라진 복도 쪽을 바라보고 있는 |
| 161 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 온 지 이틀 만에 학생회장님이 직접 문 앞까 |
| 162 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 그건 그냥 네가 인기가 없는 게 아닐까. |
| 163 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 뼈 때리지 마라, 사실이긴 한데 지금 그게 핵심이 아니 |
| 164 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *복도 유리창 너머로 클립보드를 가슴에 안은 서연이 귓 |
| 165 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 오호, 도도한 회장님도 우리 전학생한테 꽤 관심 있나  |
| 166 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | 방금 '우리' 전학생이라고 했어? |
| 167 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 당연하지, 같은 반에다 바로 옆자리 짝꿍이잖아! 그 정 |
| 168 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *1교시가 끝나고 시끌벅적한 교실 열기를 식히려 복도  |
| 169 | `morning2_seo_dust_1` | 서연 | school_hallway | seyoun_normal |  |  | 너 1교시 수업 듣는 동안 대체 뭘 한 거야. *쉬는  |
| 170 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 움직이지 말고 잠깐 가만히 있어 봐. |
| 171 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *한 걸음 다가선 서연의 하얀 손끝이 내 교복 어깨에  |
| 172 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 어깨에 분필 가루 같은 게 묻어 있었어. |
| 173 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | 말도 없이 갑자기 손이 훅 들어와서 놀랐잖아. *괜히  |
| 174 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 뭘 그렇게까지 놀라? 그냥 먼지 털어 준 건데. |
| 175 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *분명 먼지는 다 털어 냈는데도 서연의 손끝이 닿았던  |
| 176 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 방금 그거 뭐야? 학생회장이 네 어깨 만진 거 맞 |
| 177 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 만진 게 아니라 어깨에 묻은 먼지 털어 준 거야. |
| 178 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 수상한데, 거기 진짜로 먼지가 붙어 있긴 했어? |
| 179 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | 진짜로 먼지 털어 준 것뿐이라니까. 왜 눈을 그렇게 뜨 |
| 180 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *아침에 받은 유나의 쪽지를 손안에 쥔다. 수업 사이마 |
| 181 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *이틀째 점심시간, 누구의 곁으로 향할까.* |
| 182 | `lunch2_yuna_1` | {name} | annex_exhibit_hallway | yuna_normal |  |  | *인적이 끊긴 낡은 도서관 별관. 서늘한 그늘이 내려앉 |
| 183 | `lunch2_yuna_intro_check` |  | annex_exhibit_hallway | yuna_normal |  |  |  |
| 184 | `lunch2_yuna_3_yuna_aff` |  | annex_exhibit_hallway | 없음 |  |  |  |
| 185 | `lunch2_yuna_3_cool` | 유나 | annex_exhibit_hallway | yuna_bored |  |  | *말없이 책갈피만 끼워 넣고 가방을 치워 옆자리를 비운 |
| 186 | `lunch2_yuna_cool_cont` | {name} | annex_exhibit_hallway | yuna_bored |  |  | *고요한 방 안에서 내 책장만 한 장 넘어간다. 유나는 |
| 187 | `lunch2_yuna_end` | {name} | yuna_hideout_day.webp | yuna_normal |  |  | *별관 문을 닫기 전 마지막으로 돌아보자 유나는 아까  |
| 188 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *종례가 끝난 방과 후 교실. 쉬는 시간마다 꺼냈던 휴 |
| 189 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 당장 체육관으로 튀어 와! 오늘은 진짜 제대로 된 내기 |
| 190 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 방과후에 학생회실로 잠깐 와 줄 수 있어? 오늘따라 일 |
| 191 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게선 따로 온 메시지가 없다. 대신 주머니 속  |
| 192 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *석양이 물들기 시작하는 방과후, 어디로 발걸음을 옮길 |
| 193 | `after2_dain_1` | {name} | gym | dain_active |  | 🌅 | *체육관 문을 열자 마룻바닥 울리는 소리와 함께 배구  |
| 194 | `after2_dain_tone` |  | gym | 없음 |  | 🌅 |  |
| 195 | `after2_dain_cool_1` | 다인 | gym | dain_normal |  | 🌅 | 왔으면 바닥에 흩어진 공부터 주워 줘. 잡담은 연습 끝 |
| 196 | `after2_dain_cool_cont` | {name} | gym | dain_normal |  | 🌅 | *코트 구석의 공들을 주워 바구니에 담는다. 다인은 먼 |
| 197 | `after2_dain_neg_leave` | {name} | snack_shop.webp | 없음 |  | 🌅 | *무거운 공기가 내려앉은 체육관 문을 나와 혼자 매점  |
| 198 | `after2_dain_rival_seo_check` |  | snack_shop.webp | 없음 |  | 🌅 |  |
| 199 | `after2_dain_rival_seo_low` | {name} | snack_shop.webp | seyoun_normal |  | 🌅 | *서연이 분식집 앞에서 유리창 너머 두 사람에게 가볍게 |
| 200 | `after2_dain_rival_yuna_check` |  | snack_shop.webp | 없음 |  | 🌅 |  |
| 201 | `after2_dain_rival_yuna_mid` | {name} | snack_shop.webp | yuna_normal |  | 🌅 | *분식집 앞을 걷던 유나가 나를 보고 귀에서 이어폰 한 |
| 202 | `after2_group_dain_companion` | 다인 | gym | 없음 |  | 🌅 | *체육관에서 공 수레를 잡는다.* 창고 쪽은 행사 자료 |
| 203 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *미묘한 여운이 감도는 대화를 마치고 가방을 고쳐 멘  |
| 204 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 205 | `minsu_warn_1` | {name} | school | 없음 |  | 🌅 | *노을이 지는 하교길. 교문을 막 나서는데 등 뒤에서  |
| 206 | `minsu_warn_1_b` | 민수 | school | minsu_normal |  | 🌅 | *내 보폭에 맞춰 옆에 나란히 서더니 주머니에 두 손을 |
| 207 | `minsu_warn_2` | 민수 | school | minsu_smirk |  | 🌅 | 야, 전학생. |
| 208 | `minsu_warn_3` | {name} | school | minsu_smirk |  | 🌅 | 응? 왜 불러? |
| 209 | `minsu_warn_4` | 민수 | school | minsu_smirk |  | 🌅 | 너 요즘 학교 다니는 거 꽤 재밌냐? |
| 210 | `minsu_warn_4_b` | {name} | school | minsu_normal |  | 🌅 | *민수는 내 쪽을 보지 않고 교문 건너편 깜빡이는 횡단 |
| 211 | `minsu_warn_5` | {name} | school | minsu_smirk |  | 🌅 | 갑자기 그게 무슨 소리야? |
| 212 | `minsu_warn_6` | 민수 | school | minsu_smirk |  | 🌅 | 점심엔 한 명, 방과후엔 또 한 명. 넌 재밌겠지. — |
| 213 | `night2_start` | {name} | room_my | 없음 |  |  | *따뜻한 물로 샤워를 마치고 젖은 머리를 털며 침대에  |
| 214 | `night2_msg_1` |  | 없음 | 없음 |  |  |  |
| 215 | `night2_msg_generic` | 다인 | room_my | dain_normal | 0.35 |  | 야 내일 아침에 교실에서 보자 늦지 마! |
| 216 | `night2_msg_generic_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 점심엔 옥상 열어 놓을게 |
| 217 | `night2_msg_generic_3` |  | 없음 | 없음 |  |  |  |
| 218 | `night2_msg_generic_3_established` | 유나 | room_my | yuna_normal | 0.35 |  | 내가 빌려준 책, 어디까지 읽었어? |
| 219 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *나란히 도착한 대화방 세 개를 번갈아 바라본다. 누구 |
| 220 | `night2_choice` | {name} | room_my | 없음 |  |  | *세 개의 말풍선 중 누구에게 가장 먼저 답장을 보낼까 |
| 221 | `night2_reply_seo_1` | {name} | room_my | seyoun_normal | 0.35 |  | 네가 부르면 언제든 또 갈게 |
| 222 | `night2_reply_seo_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 나중에 후회할 말을 참 쉽게 하네 |
| 223 | `night2_reply_seo_3` | {name} | room_my | seyoun_normal | 0.35 |  | 진심이니까 하기 쉬운 말인데 |
| 224 | `night2_reply_seo_4` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 점심에도 옥상 문 열어 둘 테니까 늦지 말고 와 |
| 225 | `night2_reply_seo_5` | {name} | room_my | seyoun_normal | 0.35 |  | *더 덧붙이는 인사 없이 서연은 딱 거기서 대화를 마무 |
| 226 | `night2_reply_seo_react_default` | 서연 | room_my | seyoun_normal | 0.35 |  | ㅋ 알겠어. 늦지 않게 자고 내일 봐. |
| 227 | `night2_seo_freetalk` | 서연 | room_my | seyoun_normal | 0.35 | 🌙 | 아, 잠깐. 아직 안 잤지? |
| 228 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 창을 정리하려는데 상단 알림 목록 사이에 학교 |
| 229 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 마치고 길게 숨을 내쉬며 베개 옆으로 휴대폰을 |
| 230 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *남은 두 사람에게도 답장을 보내려다 손가락이 굳는다. |
| 231 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *사진첩 스크롤을 끝까지 내리자 나타난 3개월 전 봄  |
| 232 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *차마 전송 버튼을 누르지 못했던 문장들이 휴대폰 메모 |
| 233 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 임시 저장 메모가 마지막 문장이다. 그 아래 |
| 234 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *떨리는 엄지손가락을 사진 아래 휴지통 삭제 아이콘 위 |
| 235 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *다시 켠 메신저 목록에는 아직 내가 답하지 못한 두  |
| 236 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *방금 닫았던 소정이의 사진을 한 번 더 열어 본다.  |
| 237 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *가슴 한구석이 묵직하게 내려앉아 끝내 나머지 두 개의 |
| 238 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면 위로 세 사람의 이름이 나란히 쌓여 있다.  |
| 239 | `night2_end_2_b` |  | 없음 | 없음 |  |  |  |
| 240 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *액정 불빛이 완전히 꺼진 뒤에도 미지근한 열기가 남은 |
| 241 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *잠이 오지 않아 부엌으로 나와 불을 켠다. 내일 싸  |
| 242 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *서툰 손길로 부쳐 낸 계란말이와 소시지, 김과 밥을  |
| | **Day 3** | | | | | | |
| 243 | `morning3_start` | {name} | school | 없음 |  |  | *전학 사흘째, 금요일 아침. 밤늦도록 깜빡이는 메시지 |
| 244 | `morning3_start_2` | {name} | school | 없음 |  |  | *어깨에 멘 가방끈을 꽉 쥐고 숨이 턱 끝까지 차오르도 |
| 245 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 246 | `morning3_seo_gate_1` | {name} | school | seyoun_normal |  |  | 서연? 종 울리기 직전인데 안 들어가고 왜 아직 여기  |
| 247 | `morning3_seo_gate_cold_1` | 서연 | school | seyoun_normal |  |  | *서연이 내 옆을 스쳐 지나가며 교복 명찰 쪽으로만 차 |
| 248 | `morning3_seo_gate_cold_2` | 서연 | school | seyoun_normal |  |  | 전학생. 오늘도 아슬아슬하게 다니네. |
| 249 | `morning3_seo_gate_cold_3` | {name} | school | 없음 |  |  | *이름조차 부르지 않는 목소리 뒤로 단정한 구두 굽 소 |
| 250 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실 뒷문을 열자마자 세 방향에서 공기가 미묘하게 굳 |
| 251 | `morning3_react_seo_1` | 다인 | room_school | dain_normal |  |  | 오호, 뭐야? 아침부터 학생회장님이랑 나란히 등교하신  |
| 252 | `morning3_react_seo_2` | 유나 | room_school | yuna_bored |  |  | *창밖을 내다보던 유나가 유리창에 비친 내 옆의 서연을 |
| 253 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *잠시 숨을 돌리려 나온 복도. 기다렸다는 듯 서연이  |
| 254 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | *복도 창가에서 서연이 반 걸음 다가서며 목소리를 낮춘 |
| 255 | `morning3_date_seo_skip` |  | school_hallway | 없음 |  |  |  |
| 256 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끄고는 눈이 마주치 |
| 257 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 자, 그럼 이제 내 차례지! 이번 주말에 나랑 오락실  |
| 258 | `morning3_date_dain_skip` |  | room_school | 없음 |  |  |  |
| 259 | `morning3_date_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 이쪽을 흘끗 보다가 가방 지퍼를 끝까지 당겨  |
| 260 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심시간 직전, 유나가 소리 없이 다가와 네모나게 접 |
| 261 | `morning3_date_yuna_skip` |  | room_school | 없음 |  |  |  |
| 262 | `morning3_date_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 접어 둔 쪽지 끝을 만지작거리다 다시 책갈피  |
| 263 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 264 | `morning3_end` | {name} | room_school | 없음 |  |  | *오전 마지막 수업을 끝내는 종이 울리고 폭풍 전야 같 |
| 265 | `morning3_end_b` |  | 없음 | 없음 |  |  |  |
| 266 | `lunch3_start` | 유나 | room_school | yuna_normal |  |  | 내 빵도 반 나눠 먹어. *사흘째 점심, 교실에서 책상 |
| 267 | `lunch3_start_2_b` | 다인 | room_school | yuna_normal |  |  | 이 계란말이, 내가 먼저 먹어도 되는 거지? 일단 맛부 |
| 268 | `lunch3_meal_1` | 다인 | room_school | yuna_normal |  |  | 오, 간 딱 맞는데! 회장님도 얼른 드세요. 오늘은 옆 |
| 269 | `lunch3_meal_2` | {name} | room_school | yuna_normal |  |  | 잠깐만, 그건 내 도시락 반찬인데. |
| 270 | `lunch3_meal_3` | 서연 | room_school | yuna_normal |  |  | *서연이 내 도시락에서 계란말이 한 조각을 집어 맛본다 |
| 271 | `lunch3_meal_4` | {name} | room_school | yuna_normal |  |  | 남의 점심 반찬에 냉정하게 점수 매기지 마. |
| 272 | `lunch3_meal_5` | 서연 | room_school | yuna_normal |  |  | *서연의 입꼬리가 얄밉게 올라간다.* 10점 만점에 6 |
| 273 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *말없이 지켜보던 유나가 젓가락을 뻗어 도시락 한가운데 |
| 274 | `lunch3_meal_7` | {name} | room_school | yuna_normal |  |  | 유나야, 그 칼집 낸 소시지는 내가 제일 아껴 둔 건데 |
| 275 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *유나가 소시지를 천천히 베어 물며 맞은편의 다인을 바 |
| 276 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | 어, 잠깐만! 그건 마지막 남은 조각이야. *내 외침과 |
| 277 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *텅 빈 도시락통 한가운데에 노릇하게 구워진 마지막 계 |
| 278 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *숨소리조차 잦아든 식탁 위, 마지막 반찬을 건넬 사람 |
| 279 | `lunch3_share_tone` |  | room_school | 없음 |  |  |  |
| 280 | `lunch3_share_1` | {name} | room_school | yuna_bored |  |  | 싸우지 말고 똑같이 잘라서 나눠 먹자. 그러면 공평하잖 |
| 281 | `lunch3_share_solo` | {name} | room_school | yuna_normal |  |  | *마지막 한 조각까지 사이좋게 나눠 먹고 나서도 세 사 |
| 282 | `lunch3_end` | {name} | room_school | 없음 |  |  | *점심시간 종료를 알리는 종소리에 각자 도시락을 덮는다 |
| 283 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과 후, 노을빛 복도 갈림길에 선다. 사흘째 지나는 |
| 284 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *주머니 속 휴대폰을 만지작거린다. 엉켜 버린 주말 약 |
| 285 | `after3_choice` | {name} | school_hallway | 없음 |  | 🌅 | *석양이 물드는 복도 끝, 어디로 발걸음을 옮길까.* |
| 286 | `after3_walk_home` | {name} | school_hallway | 없음 |  | 🌅 | *오늘은 누구에게도 섣불리 말을 붙일 자신이 없다. 무 |
| 287 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *길었던 방과 후 시간이 끝났다. 복도 천장의 형광등이 |
| 288 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 289 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 290 | `minsu_d3_check` | {name} | 없음 | 없음 |  | 🌅 |  |
| 291 | `night3_start` | {name} | room_my | 없음 |  |  | *금요일 밤, 지친 몸으로 방에 돌아와 교복 차림으로  |
| 292 | `night3_start_2` | {name} | room_my | 없음 |  |  | *불도 켜지 않은 방 안, 책상 위에 엎어 두었던 휴대 |
| 293 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *어두운 천장 아래로 휴대폰 불빛이 번진다. 도착해 있 |
| 294 | `night3_dream_1` | {name} | room_my | 없음 |  |  | *스탠드 조명을 끄려다 휴대폰을 한 번 더 집어 든다. |
| 295 | `night3_dream_2_b` | {name} | room_my | 없음 |  |  | *머리맡에 휴대폰을 내려놓는다. 내일 아침 마주 보며  |
| 296 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *잠들기 전, 휴대폰 갤러리 깊숙한 곳에서 예전 학교의 |
| 297 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *화면에 '이 사진을 삭제하시겠습니까?'라는 확인 창이 |
| 298 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *푸르스름한 액정 빛을 가만히 내려다본다. 소정이의 책 |
| 299 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *확인 창에서 조용히 취소를 누른다. 사진 한 장을 지 |
| 300 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼 대신 이동 메뉴를 눌러 사진을 새 폴더로  |
| 301 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *사진 아래에 짧은 메모를 남긴다. 소정이에게 끝내 건 |
| 302 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *새로 만든 폴더 안에 사진 한 장이 조용히 자리 잡는 |
| 303 | `night3_faithful_reflect_4_b` |  | 없음 | 없음 |  |  |  |
| 304 | `night3_faithful_reflect_4_c` |  | 없음 | 없음 |  |  |  |
| 305 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 내일 아침 알람을 맞춘다. 휴대폰을 내 |
| 306 | `night3_end` | {name} | room_my | 없음 |  |  | *금요일 시간표가 적힌 교과서를 덮고 스탠드 불을 완전 |
| | **Day 4** | | | | | | |
| 307 | `morning4_start` | {name} | room_my_day.webp | 없음 |  |  | *넷째 날, 토요일 아침. 커튼 틈으로 스며든 주말 햇 |
| 308 | `morning4_date_plan_check` |  | 없음 | 없음 |  |  |  |
| 309 | `morning4_fallback_msg` | {name} | room_my_day.webp | 없음 |  |  | *주말 아침의 고요한 방 안. 밤새 온 알림을 정리하고 |
| 310 | `morning4_hidden_check` | {name} | street | 없음 |  |  | *이른 아침 공기를 가르며 학교 앞 사거리 횡단보도에서 |
| 311 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 312 | `day4_haeun_gate` |  | 없음 | 없음 |  |  |  |
| 313 | `day4_haeun_trust_check` |  | 없음 | 없음 |  |  |  |
| 314 | `day4_haeun_personal_gate` |  | 없음 | 없음 |  |  |  |
| 315 | `morning4_end` | {name} | room_my_day.webp | 없음 |  |  | *집으로 돌아와 거울 앞에서 셔츠 깃과 머리카락을 정돈 |
| 316 | `day4_date_branch` |  | 없음 | 없음 |  |  |  |
| 317 | `day4_night_start` | {name} | school | 없음 |  |  | *어스름이 짙게 깔린 학교를 나서서 집으로 돌아갈 시간 |
| 318 | `day4_night_branch` | 시스템 | 없음 | 없음 |  |  |  |
| 319 | `day4_student_night_branch` | {name} | room_my | 없음 |  |  | *집으로 돌아와 침대 맡에 가방을 내려놓는다. 충전기  |
| 320 | `day4_night_reflect` | {name} | room_my | 없음 |  |  | *침대에 누워 오늘 하루 동안 주고받은 메시지들을 시간 |
| 321 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 322 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *일요일 아침 알람을 맞춰 두고 방 안의 스탠드 불을  |
| 323 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안의 시계 바늘이 자정을 넘어 다섯째 날로 향한다 |
| | **Day 5** | | | | | | |
| 324 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날, 일요일 아침. 교문 너머로 축제 현수막이 |
| 325 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 326 | `morning5_start_b` |  | 없음 | 없음 |  |  |  |
| 327 | `morning5_start_2_b` |  | 없음 | 없음 |  |  |  |
| 328 | `morning5_mood_check` | 시스템 | room_school | 없음 |  |  |  |
| 329 | `morning5_mood_low` | {name} | room_school | 없음 |  |  | *전학 온 첫 주가 저물어 간다. 휴대폰 잠금화면에 나 |
| 330 | `morning5_gate` |  | 없음 | 없음 |  |  |  |
| 331 | `morning5_seo_note_1` | 서연 | room_school | seyoun_normal | 0.35 |  | *내 책상 한가운데, 모서리를 반듯하게 맞춘 쪽지 한  |
| 332 | `morning5_seo_note_1_b` | {name} | school_hallway | 없음 |  |  | *복도 창가를 따라 꾸며진 문예부 전시 코너를 지나다가 |
| 333 | `morning5_seo_note_1_c` | {name} | school_hallway | 없음 |  |  | *문예부 게시판 한켠에 단편소설 원고 몇 장이 압정으로 |
| 334 | `morning5_yuna_story_1` | {name} | school_hallway | yuna_normal | 0.35 |  | *원고 속 화자는 오후의 도서관 책상에 엎드려 잠든 누 |
| 335 | `morning5_yuna_story_2` | {name} | school_hallway | 없음 |  |  | *원고의 맨 끝 문장에 시선이 닿는다. '그 사람이 눈 |
| 336 | `morning5_yuna_story_4` | {name} | school_hallway | yuna_normal | 0.35 |  | *원고지 맨 아래 여백 구석에는 연필로 아주 작게 덧붙 |
| 337 | `morning5_return_class` | {name} | room_school | dain_normal |  |  | *복도 끝에서 교실로 돌아오자, 문가에 등을 기댄 채  |
| 338 | `morning5_dain_1` | 다인 | room_school | dain_normal |  |  | *내 어깨를 가볍게 툭 치며 장난스럽게 웃는다.* 야, |
| 339 | `morning5_dain_1_b` | {name} | room_school | dain_normal |  |  | 내 허락도 안 받고 마음대로 적어 놓으면 어떡해? |
| 340 | `morning5_dain_2` | 다인 | room_school | dain_laugh |  |  | *포니테일이 흔들리도록 고개를 휙 젖히며 볼에 바람을  |
| 341 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *축제 준비로 복도가 소란스러운 틈을 지나, 문이 반쯤 |
| 342 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *오전 행사 준비가 한차례 숨을 고르는 쉬는 시간. 소 |
| 343 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 344 | `morning5_sojeong_1` | {name} | room_school | 없음 |  |  | *조용한 창가에 서서 휴대폰 메모 앱을 연다. 이전 학 |
| 345 | `morning5_sojeong_2` | {name} | room_school | 없음 |  |  | *더 이상 나를 변호하기 위한 마흔 번째 초안은 만들지 |
| 346 | `morning5_sojeong_3` | {name} | room_school | 없음 |  |  | 그때 네 책상 위에 적힌 낙서들을 두 눈으로 보고도 선 |
| 347 | `morning5_sojeong_4` | {name} | room_school | 없음 |  |  | *말풍선 옆에 작은 전송 완료 표시가 뜬다. 숫자 1이 |
| 348 | `morning5_sojeong_5` | {name} | room_school | 없음 |  |  | 전학 오기 전 학교에서 제가 모른 척 지나쳤던 일에 대 |
| 349 | `morning5_route_branch` |  | room_school | 없음 |  |  |  |
| 350 | `morning5_end` | {name} | room_school | 없음 |  |  | *책상 위에 놓인 쪽지들을 소중히 추려 모으고 휴대폰  |
| 351 | `day5_haeun_gate` |  | 없음 | 없음 |  |  |  |
| 352 | `day5_haeun_trust_check` |  | 없음 | 없음 |  |  |  |
| 353 | `day5_haeun_resume` |  | 없음 | 없음 |  |  |  |
| 354 | `tour_seo_1` | {name} | school | seyoun_normal |  |  | *점심 햇살이 쏟아지는 교문 앞에 서연과 나란히 멈춰  |
| 355 | `tour_seo_skip` |  | school | 없음 |  |  |  |
| 356 | `tour_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *점심시간의 소란스러운 복도 끝에서 서연과 마주친다.  |
| 357 | `after5_start` |  | 없음 | 없음 |  | 🌅 |  |
| 358 | `day5_haeun_guilt_gate` |  | 없음 | 없음 |  | 🌅 |  |
| 359 | `day5_haeun_route_gate` |  | 없음 | 없음 |  | 🌅 |  |
| 360 | `after5_original_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 361 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *소란스럽던 축제가 막을 내릴 무렵, 노을이 스며드는  |
| 362 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *축제 마지막 순서가 끝나 가는 복도 창가에서, 홀로  |
| 363 | `after5_farewell_seo_skip` |  | school_hallway | 없음 |  | 🌅 |  |
| 364 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *오후의 그림자가 길어진 복도에서 서연과 마주친다. 서 |
| 365 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 366 | `after5_farewell_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지날 무렵, 문가에서 기다리고 있던 유나 |
| 367 | `after5_farewell_yuna_skip` |  | school_hallway | 없음 |  | 🌅 |  |
| 368 | `after5_farewell_yuna_low` | 유나 | library_old | yuna_normal |  | 🌅 | *도서관 앞 복도에서 유나와 눈이 마주친다. 유나는 읽 |
| 369 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 370 | `after5_farewell_dain_1` | {name} | school_back | dain_normal |  | 🌅 | *체육관 입구 쪽에서 다인이 걸어 나온다. 언제나 성큼 |
| 371 | `after5_farewell_dain_skip` |  | school_hallway | 없음 |  | 🌅 |  |
| 372 | `after5_farewell_dain_low` | 다인 | school_back | dain_normal |  | 🌅 | *체육관 앞길에서 걸어오던 다인이 두 걸음 떨어진 자리 |
| 373 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *붉은 석양이 길게 내려앉은 교정 위로, 축제의 끝을  |
| 374 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 375 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 376 | `day5_ending_alone` | {name} | school | 없음 |  |  | *홀로 걸어 나온 교문 밖에서 휴대폰이 짧게 진동한다. |
| 377 | `alone_1` | {name} | ending_alone | 없음 |  |  | *전학 온 뒤 닷새 동안 받았던 쪽지들과 사진들을 서랍 |
| 378 | `alone_2` | {name} | ending_alone | 없음 |  |  | *불 꺼진 조용한 방 안. 메신저 상단에 고정해 둔 세 |
| 379 | `alone_2_b` | {name} | ending_alone | 없음 |  |  | *아무 글자도 적지 못한 빈 입력창을 닫고 책상 위에  |
| 380 | `alone_4` | {name} | ending_alone | 없음 |  |  | *충전 케이블을 꽂고 내일 아침 등교 알람을 맞춘다.  |
| 381 | `alone_5` | 시스템 | ending_alone | 없음 |  |  | ─── ALONE END ─── |
| 382 | `day5_credits` |  | school | 없음 |  |  |  |
| 383 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### confess_fail_5

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_yuna_choice`: (선택)
- `after_end`: (선택)
- `lunch2_choice`: (선택)
- `after2_choice`: (선택)
- `night2_choice`: (선택)
- `morning3_date_yuna_choice`: (선택)
- `lunch3_choice`: (선택)
- `confess_yuna_choice`: (선택)
- `wall_yuna_glimpse_3_b`: (선택)
- `wall_yuna_choice`: (선택)
- `after5_last_chance_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=-7 유나=22 다인=-1 담임=0 보건=0

<details>
<summary>씬 타임라인 (493씬)</summary>

| # | 씬 ID | 화자 | 배경 | 캐릭터 | OP | 밤 | 대사 (앞 30자) |
|---|--------|------|------|--------|----|----|----------------|
| | **Day 1** | | | | | | |
| 1 | `start` | {name} | school | 없음 |  |  | *4월의 벚꽃잎이 흩날리는 교문 앞. 아직 풀기가 가시 |
| 2 | `start_again` | {name} | school | 없음 |  |  | *순간 울컥 치미는 현기증에 차가운 교문 기둥을 짚어선 |
| 3 | `start_3` | {name} | school | 없음 |  |  | *주머니 속 휴대폰이 짧게 떨린다. 예전 학교 단체방  |
| 4 | `name_input_scene` | 시스템 | school | 없음 |  |  | 전학생, 이름이 뭐야? |
| 5 | `gate_1` | {name} | school | 없음 |  |  | *교문 그늘 아래 서 있던 긴 생머리의 여학생이 안경테 |
| 6 | `seoyeon_meet_1` | 서연 | school | seyoun_normal |  |  | 혹시 오늘 온 전학생? {name} 맞지? |
| 7 | `seoyeon_meet_2` | 서연 | school | seyoun_normal |  |  | 가슴팍 명찰도 {name}이네. 반가워. *단정한 손끝 |
| 8 | `seoyeon_meet_3` | {name} | school | seyoun_normal |  |  | 맞는데. 내 얼굴은 어떻게 한 번에 알아봤어? |
| 9 | `seoyeon_meet_4` | 서연 | school | seyoun_normal |  |  | 학생회장이거든. 새로 온 전학생 맞이하는 것도 내 몫이 |
| 10 | `seoyeon_meet_5` | 서연 | school | seyoun_normal |  |  | 이쪽으로 따라와. 조회 시작하기 전에 15분 안으로 학 |
| 11 | `seoyeon_meet_6` | {name} | school | seyoun_normal |  |  | 첫날부터 학생회장이 직접 안내라니 좀 떨리는데. |
| 12 | `seoyeon_meet_7` | 서연 | school | seyoun_normal |  |  | 원래 내가 맡은 일이니까 괜히 어렵게 생각할 것 없어. |
| 13 | `seoyeon_meet_8` | 서연 | school | seyoun_normal |  |  | 자, 가자. *몸을 돌리는 서연의 교복 셔츠 깃에서 햇 |
| 14 | `seoyeon_choice` | {name} | school | seyoun_normal |  |  | *앞서 걷는 서연의 단정한 뒷모습을 보며 입을 연다.* |
| 15 | `choice_flirt_1` | 서연 | school | seyoun_normal |  |  | *걸음을 멈추고 반쯤 돌아서더니 맑은 안경알 너머로 눈 |
| 16 | `choice_flirt_2` | 서연 | school | seyoun_laugh |  |  | 전학 첫날부터 농담할 여유도 있네. 덕분에 네 이름은  |
| 17 | `choice_flirt_3` | {name} | school | seyoun_laugh |  |  | 오, 혹시 첫인상 점수라도 매기는 중이야? |
| 18 | `choice_flirt_4` | 서연 | school | seyoun_normal |  |  | 글쎄, 아직 학교 분위기는 잘 모르는 모양이지만 첫인상 |
| 19 | `choice_flirt_5` | {name} | school | seyoun_normal |  |  | 학생회장님한테 후한 점수라니 영광인데? |
| 20 | `choice_flirt_6` | 서연 | school | seyoun_normal |  |  | 일주일 뒤에도 그렇게 여유롭게 웃을 수 있을지 두고 볼 |
| 21 | `choice_flirt_7` | 서연 | school | seyoun_laugh |  |  | 늦겠다, 이리 따라와 {name}. *살짝 붉어진 귓바 |
| 22 | `hallway_1` | 서연 | school_hallway | seyoun_back |  |  | 지나가는 애들한테 인사받느라 걸음 늦출 필요 없어. 그 |
| 23 | `hallway_3` | 서연 | school_hallway | seyoun_normal |  |  | 지금 걷는 본관이 3학년 건물이고 창밖 건너편이 도서관 |
| 24 | `hallway_4` | 서연 | school_hallway | seyoun_normal |  |  | 그리고 이건 아무한테나 안 보여주는 건데. *재킷 주머 |
| 25 | `hallway_5` | 서연 | school_hallway | seyoun_normal |  |  | 원래 우리 학교 옥상은 평소엔 잠겨 있거든. 이 열쇠는 |
| 26 | `hallway_6` | {name} | school_hallway | seyoun_normal |  |  | 옥상에 너만의 비밀 아지트라도 숨겨 둔 거야? |
| 27 | `hallway_6_b` | 서연 | school_hallway | seyoun_normal |  |  | *맑게 울리던 열쇠고리 소리가 손안에서 뚝 멎는다.*  |
| 28 | `hallway_6_c` | 서연 | school_hallway | seyoun_normal |  |  | *입꼬리를 살짝 올린 채 대답 대신 열쇠를 다시 주머니 |
| 29 | `hallway_7` | 서연 | school_hallway | seyoun_normal |  |  | 맞다, 오늘 점심시간. 아직 어디서 밥 먹을지 못 정했 |
| 30 | `hallway_8` | {name} | school_hallway | seyoun_shy |  |  | *어느새 걸음을 멈춘 서연이 아침 햇살이 비치는 교실  |
| 31 | `hallway_10` | 서연 | school_hallway | seyoun_normal |  |  | 다 왔다, 여기가 네 교실이야. 얼른 들어가 봐. |
| 32 | `hallway_11` | {name} | school_hallway | seyoun_normal |  |  | 점심때도 일대일로 안내해 주는 거야? |
| 33 | `hallway_12` | 서연 | school_hallway | seyoun_normal |  |  | 글쎄, 오늘 오전 수업 잘 버티는 거 봐서. |
| 34 | `hallway_13` | 서연 | school_hallway | seyoun_back |  |  | *돌아서던 서연이 클립보드를 어깨 높이로 가볍게 들어  |
| 35 | `hallway_13_b` | {name} | school_hallway | seyoun_back |  |  | *단정한 구두 소리를 남기며 복도 저편으로 멀어지는 서 |
| 36 | `classroom_1` | {name} | room_school | 없음 |  |  | *드르륵, 교실 앞문을 열자 왁자지껄하던 공기 위로 수 |
| 37 | `classroom_2_b` | {name} | room_school | teacher_normal |  |  | *교탁 앞에는 20대 후반쯤 되어 보이는 담임선생님이  |
| 38 | `classroom_3` | 담임 | room_school | teacher_normal |  |  | 자, 다들 주목. 오늘부터 우리 반 식구가 된 전학생이 |
| 39 | `classroom_3_b` | {name} | room_school | teacher_normal |  |  | 오늘 전학 온 {name}입니다. 잘 부탁드립니다. * |
| 40 | `classroom_5_b` | 담임 | room_school | teacher_normal |  |  | 그래, {name}. 우리 반에 온 걸 환영해. 급할  |
| 41 | `classroom_5_c` | {name} | room_school | teacher_normal |  |  | *낯선 교실 공기에 섞여 내 숨소리가 잦아드는 사이 교 |
| 42 | `classroom_dain_1` | 다인 | room_school | dain_normal |  |  | 오, 전학생! 드디어 우리 반에도 새 얼굴이 들어왔네! |
| 43 | `classroom_dain_2` | 다인 | room_school | yuna_normal |  |  | 이쪽 봐, 이쪽! *산뜻한 갈색 숏컷에 활동적인 배구부 |
| 44 | `classroom_dain_3` | 담임 | room_school | teacher_normal |  |  | 다인아, 아침부터 목소리 좀 낮추자. 그리고 교실 안에 |
| 45 | `classroom_dain_4` | 다인 | room_school | yuna_normal |  |  | 에이, 쌤도 참. 이게 세상에서 제일 편하단 말이에요! |
| 46 | `classroom_dain_5` | 다인 | room_school | yuna_normal |  |  | 네 자리는 여기야, 여기! *아이들의 웃음소리 사이로  |
| 47 | `classroom_dain_5_b` | 담임선생님 | room_school | teacher_normal |  |  | 다인아, 적어도 출석 부르는 동안만이라도 진정 좀 하자 |
| 48 | `classroom_dain_5_c` | 담임 | room_school | teacher_normal |  |  | 지금부터 그 에너지를 다 쓰면 어떡해. 아직 1교시 종 |
| 49 | `classroom_dain_5_d` | 담임선생님 | room_school | teacher_angry |  |  | *담임은 작게 고개를 저으며 출석부 다음 장을 부드럽게 |
| 50 | `classroom_yuna_1` | {name} | room_school | yuna_bored |  |  | *소란스러운 교실 풍경과 동떨어진 창가 맨 뒷자리, 봄 |
| 51 | `classroom_yuna_2` |  | 없음 | 없음 |  |  |  |
| 52 | `classroom_yuna_4` | {name} | room_school | yuna_bored |  |  | *앞줄에 앉은 학생 하나가 내 소매를 스치며 작게 속삭 |
| 53 | `classroom_seat_1` | 담임선생님 | room_school | teacher_normal |  |  | *출석부를 덮은 담임이 창가 쪽에서 한 줄 건너편 빈자 |
| 54 | `classroom_seat_2` | 다인 | room_school | yuna_normal |  |  | 오, 딱 내 옆자리네? 멀뚱히 서 있지 말고 얼른 와서 |
| 55 | `classroom_minsu_1` | {name} | room_school | minsu_normal |  |  | *가방을 내려놓고 의자를 빼려는데 앞자리에 앉아 있던  |
| 56 | `classroom_minsu_2` | 민수 | room_school | minsu_smirk |  |  | 야, 전학생. 우리 반에 온 걸 환영한다. 그리고 미리 |
| 57 | `classroom_minsu_3` | {name} | room_school | minsu_smirk |  |  | 갑자기 무슨 각오? |
| 58 | `classroom_minsu_2_b` | 민수 | room_school | minsu_normal |  |  | *옆자리의 다인을 향해 슬쩍 턱짓하며 씨익 웃는다.*  |
| 59 | `classroom_dain_talk_1` | {name} | room_school | minsu_normal |  |  | *장난스럽게 돌아앉는 앞자리 남학생의 교복 명찰에는 ' |
| 60 | `classroom_dain_talk_2` | 다인 | room_school | yuna_normal |  |  | 저 녀석 말은 신경 쓰지 마! 그보다 나 궁금한 거 하 |
| 61 | `classroom_dain_talk_3` | 다인 | room_school | yuna_normal |  |  | 야, {name}. 너 평소에 몸 움직이는 거나 운동  |
| 62 | `classroom_dain_talk_4` | {name} | room_school | yuna_normal |  |  | 운동은 왜, 갑자기? |
| 63 | `classroom_dain_talk_5` | 다인 | room_school | yuna_normal |  |  | 아니, 오늘 방과후에 리시브 연습을 좀 더 하고 싶은데 |
| 64 | `classroom_dain_talk_6` | {name} | room_school | yuna_normal |  |  | 전학생을 첫날부터 인간 볼 머신으로 쓰려고? |
| 65 | `classroom_dain_talk_7` | 다인 | room_school | yuna_normal |  |  | 에이, 설마! 그래도 기계보다는 사람이랑 호흡 맞추는  |
| 66 | `classroom_dain_talk_8` | 다인 | room_school | yuna_normal |  |  | 어때, 같이 해 볼래? *다인의 따뜻한 검지가 내 책상 |
| 67 | `classroom_yuna_note_1` | {name} | room_school | yuna_bored |  |  | *그때 뒷자리에서 반듯하게 접힌 종이쪽지 하나가 책상  |
| 68 | `classroom_yuna_note_3` | 유나 | room_school | yuna_bored |  |  | *조심스럽게 펼치자 은은한 연보라색 잉크 글씨와 모서리 |
| 69 | `classroom_yuna_note_5` | {name} | room_school | yuna_bored |  |  | *내가 고개를 들자 창가 햇살에 비치던 유나의 하얀 손 |
| 70 | `classroom_yuna_note_6` | {name} | room_school | yuna_bored |  |  | *1교시 시작을 알리는 종소리가 교실 안을 메운다. 창 |
| 71 | `lunch_start` | {name} | school_hallway | 없음 |  |  | *점심시간을 알리는 종소리와 함께 교실 공기가 들뜬다. |
| 72 | `lunch_start_4` | 서연 | school_hallway | seyoun_normal |  |  | 아까 말한 대로 옥상 올라올 거지? *계단참에서 걸음을 |
| 73 | `lunch_start_4_b` | {name} | school_hallway | dain_normal |  |  | *대답하려는 순간 옆에서 다가온 다인의 따뜻한 손바닥이 |
| 74 | `lunch_start_5` | 다인 | school_hallway | dain_normal |  |  | 야, 아직 점심 안 먹었지? 나랑 매점 뛰어가자. 빵  |
| 75 | `lunch_start_6` | 유나 | school_hallway | yuna_normal |  |  | 난 도서관 갈 건데. *내 옆을 스쳐 지나가며 가방끈을 |
| 76 | `lunch_start_7` | {name} | school_hallway | 없음 |  |  | *바람 부는 옥상과 달콤한 빵 냄새가 나는 매점, 그리 |
| 77 | `lunch_choice` | {name} | school_hallway | 없음 |  |  | *첫날의 점심시간, 누구의 발걸음을 따라갈까?* |
| 78 | `lunch_yuna_1` | {name} | library_old | yuna_normal |  |  | *복도의 소음이 멀어지는 계단을 지나 유나의 뒤를 따라 |
| 79 | `lunch_yuna_1_aff_default` | 유나 | library_old | yuna_normal |  |  | *따로 건네는 쪽지는 없었다. 유나는 햇살이 비스듬히  |
| 80 | `lunch_yuna_2` | 유나 | library_old | yuna_normal |  |  | 의자 끌 때 소리 나지 않게 살살. *하얀 검지로 펼쳐 |
| 81 | `lunch_yuna_4` | 유나 | library_old | yuna_normal |  |  | 잠깐만 기다려. *끼워 두었던 대출 영수증 끝을 반듯하 |
| 82 | `lunch_yuna_5` | {name} | library_old | yuna_normal |  |  | *5초, 다시 10초가 고요하게 흐른다. 유나는 접힌  |
| 83 | `lunch_yuna_5_b` | {name} | library_old | yuna_normal |  |  | 옆자리 비었으면 앉아도 돼? |
| 84 | `lunch_yuna_7` | 유나 | library_old | yuna_normal |  |  | *활자에서 눈을 떼지 않은 채 나직이 속삭인다.* 옆에 |
| 85 | `lunch_yuna_8` | 유나 | library_old | yuna_normal |  |  | 가방 내렸어. 이쪽 앉아. *옆 의자에서 자기 가방을  |
| 86 | `lunch_yuna_10` | {name} | library_old | yuna_normal |  |  | *나란히 앉은 책상 위로 벽시계 초침 소리와 종이 스치 |
| 87 | `lunch_yuna_10_b` | {name} | library_old | yuna_normal |  |  | *유나의 손끝이 낡은 책갈피에 적힌 흐릿한 글씨를 슬쩍 |
| 88 | `lunch_yuna_12` | 유나 | library_old | yuna_normal |  |  | *책장 너머로 붉은빛이 감도는 눈동자가 천천히 올라온다 |
| 89 | `lunch_yuna_13` | {name} | library_old | yuna_normal |  |  | 어? 진짜네. |
| 90 | `lunch_yuna_14` | 유나 | library_old | yuna_normal |  |  | 그 시리즈는 1권부터 차례대로 읽어야 이해돼. |
| 91 | `lunch_yuna_15` | 유나 | library_old | yuna_normal |  |  | 여기 있어. 이걸로 먼저 읽어. *자기 손옆에 쌓아 두 |
| 92 | `lunch_yuna_16` | {name} | library_old | yuna_normal |  |  | 빌려주는 거야? 고마워. |
| 93 | `lunch_yuna_17` | 유나 | library_old | yuna_normal |  |  | 다 읽으면 나한테 다시 돌려줘. |
| 94 | `lunch_yuna_18` | 유나 | library_old | yuna_normal |  |  | 그럼 이제 각자 읽자. *책상 하나를 사이에 두고 나란 |
| 95 | `lunch_yuna_20` | {name} | library_old | yuna_normal |  |  | *한참 만에 고개를 들자 창가 햇살을 등진 유나가 책  |
| 96 | `lunch_yuna_21` | {name} | library_old | yuna_normal |  |  | 왜 그래, 나한테 할 말 있어? |
| 97 | `lunch_yuna_22` | 유나 | library_old | yuna_normal |  |  | *유나가 얇은 책갈피를 페이지 사이에 끼워 넣는다.*  |
| 98 | `lunch_yuna_23` | {name} | library_old | yuna_normal |  |  | 그게 왜? |
| 99 | `lunch_yuna_24` | 유나 | library_old | yuna_normal |  |  | 생각보다 편했어. |
| 100 | `lunch_yuna_25` | 유나 | library_old | yuna_normal |  |  | *유나의 시선이 내가 쥔 책 표지를 스쳐 내 눈동자에  |
| 101 | `lunch_yuna_choice` | {name} | library_old | yuna_normal |  |  | *읽던 책을 천천히 덮으며 유나와 시선을 맞춘다.* |
| 102 | `lunch_yuna_c1_1` | 유나 | library_old | yuna_normal |  |  | 응, 급하게 넘기지 말고 1권부터 천천히 읽어 봐. 뒤 |
| 103 | `lunch_yuna_c1_2` | 유나 | library_old | yuna_smile |  |  | 마지막 장까지 다 읽으면 말해 줘. 네가 어떻게 읽었는 |
| 104 | `lunch_yuna_freetalk` | 유나 | library_old | yuna_normal |  |  | *유나가 덮은 책 표지 위로 하얀 두 손을 가만히 포갠 |
| 105 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *5교시 수업을 알리는 차임벨이 울려 퍼지며 짧고도 설 |
| 106 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *붉은 노을이 스며드는 방과후 복도. 주머니 속에서 진 |
| 107 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 108 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 그 가벼운 마지막 한 줄에 시선이  |
| 109 | `after_kakao_5` |  | 없음 | 없음 |  | 🌅 |  |
| 110 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *한참을 망설이다 조용히 단체방 나가기를 누른다. 텅  |
| 111 | `after1_jealousy_yuna_1` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 너 점심시간에 도서관 갔다 왔다며? 그것도 유나랑 |
| 112 | `after1_jealousy_yuna_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 신기하네, 걔 원래 옆에 누가 오는 거 진짜 싫어하거든 |
| 113 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *휴대폰을 주머니에 넣고 석양이 길게 드리운 복도를 따 |
| 114 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도 모퉁이를 돌려는데 등 뒤에서 운동화 바닥이 마룻 |
| 115 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 거기 앞 조심해! |
| 116 | `after_miss_dain_3` | 다인 | school_hallway | dain_normal |  | 🌅 | 휴, 아슬아슬하게 비켜 줬네! *내 어깨를 스치며 바람 |
| 117 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 방금 반사신경 꽤 괜찮았는데? 역시 운동 좀 해  |
| 118 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 하마터면 부딪힐 뻔했잖아. 복도에서 웬 전력질주야? |
| 119 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 배구부 집합 시간 늦었거든! 지금 당장 체육관 뛰어가야 |
| 120 | `after_miss_dain_6_b` | {name} | school_hallway | dain_pain |  | 🌅 | *돌아서서 두어 걸음 내딛던 다인이 순간 걸음을 멈추고 |
| 121 | `after_miss_dain_7` | 다인 | school_hallway | dain_laugh |  | 🌅 | 참, 내 이름 다인이야! 내일 와서 이름 까먹으면 안  |
| 122 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞 복도를 지나는데 붉은 눈동자의 여학생이 소 |
| 123 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 방금 책 사이에서 이거 떨어졌어. |
| 124 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *바닥에 내려앉은 낡은 책갈피를 조심스레 주워 건넨다. |
| 125 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | 다행이다, 모서리 안 구겨졌네. *하얀 손가락으로 책갈 |
| 126 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 주워 줘서 고마워. |
| 127 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *소중한 것을 감추듯 책갈피를 책등 깊숙이 끼워 넣고는 |
| 128 | `after_miss_yuna_4` |  | 없음 | 없음 |  | 🌅 |  |
| 129 | `after_miss_seoyeon_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *가방을 메고 신발장으로 내려가려는데 계단 앞 복도에서 |
| 130 | `after_miss_seoyeon_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 너 아까 점심시간에 어디 갔었어? |
| 131 | `after_miss_seoyeon_3` | {name} | school_hallway | seyoun_normal |  | 🌅 | 점심시간에 어디라니? |
| 132 | `after_miss_seoyeon_4` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 일부러 옥상 문까지 열어 두고 있었는데 끝까지 안 올라 |
| 133 | `after_miss_seoyeon_5` | {name} | school_hallway | seyoun_normal |  | 🌅 | 설마 옥상에서 계속 나 기다린 거야? |
| 134 | `after_miss_seoyeon_6` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 기다리긴 누가 기다려, 내 도시락 먼저 먹고 있었지.  |
| 135 | `after_miss_seoyeon_7` | {name} | school_hallway | seyoun_normal |  | 🌅 | *서연은 클립보드를 가슴께로 끌어안으며 시선을 살짝 피 |
| 136 | `after_miss_seoyeon_8` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 내일 점심엔 다른 데로 새지 마. |
| 137 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교를 알리는 안내 방송이 끝난 뒤 노을빛만 남은 복 |
| 138 | `night_start` | {name} | room_my | 없음 |  |  | *집으로 돌아와 아직 낯선 새 교복을 옷걸이에 걸어 두 |
| 139 | `night_start_3` | {name} | room_my | 없음 |  |  | *고요한 방 안, 머리맡에 둔 휴대폰이 짧게 진동하며  |
| 140 | `night_msg_yuna_1` | 유나 | room_my | yuna_normal | 0.35 |  | 오늘 점심엔 옆에서 조용히 있어 줘서 고마웠어 |
| 141 | `night_msg_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | 내일도 내 옆자리 비워 놓을게 |
| 142 | `night_msg_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *짧고 담백한 '내 옆자리 비워 놓을게'라는 문장을 몇 |
| 143 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 대화창을 닫으려는데 상단 알림 바에 학교 앱  |
| 144 | `night_late_transition` | {name} | room_my | 없음 |  |  | *불을 끄고 막 눈을 감으려는데 정적을 깨고 휴대폰이  |
| 145 | `night_late_branch` | {name} | room_my | 없음 |  |  | *어두운 방 안, 손에 쥔 액정 화면이 하얗게 빛을 낸 |
| 146 | `night_end_1` | {name} | room_my | 없음 |  |  | *휴대폰을 내려놓고 어두운 천장을 올려다본다. 옷걸이에 |
| 147 | `night_end_3` | {name} | room_my | 없음 |  |  | *연락처에 나란히 저장된 새로운 이름들을 한 번 더 눈 |
| | **Day 2** | | | | | | |
| 148 | `morning2_start` | {name} | room_school | 없음 |  |  | *전학 온 지 이틀째 아침. 교복 소매에 남았던 빳빳한 |
| 149 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 150 | `morning2_greet_none_tone` |  | room_school | 없음 |  |  |  |
| 151 | `morning2_greet_none_1` | {name} | room_school | 없음 |  |  | *교실 문을 열고 들어서도 먼저 다가오는 사람은 없다. |
| 152 | `morning2_greet_none_2` | {name} | room_school | yuna_normal |  |  | *서연은 교탁 앞에서 출석부만 넘기고 다인은 반대편 친 |
| 153 | `morning2_yuna_seen` | 유나 | room_school | yuna_normal |  |  | ...너 혹시 전학 오기 전에도 이 학교에 와 본 적  |
| 154 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *가방을 걸고 자리에 앉으려는데 책상 한가운데에 정갈하 |
| 155 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 156 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가던 서연이 열린 교실 앞문 틈으로 고개를 |
| 157 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 바쁜 학생회장이 아침부터 남의 교실 앞까지 직접 인사하 |
| 158 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 교무실에 서류 갖다주러 가는 길에 잠깐 멈춘 거야. 그 |
| 159 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | 얼굴 확인했으니까 이제 간다. 아침 조회 늦지 말고.  |
| 160 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연의 긴 머리카락이 사라진 복도 쪽을 바라보고 있는 |
| 161 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 온 지 이틀 만에 학생회장님이 직접 문 앞까 |
| 162 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 그건 그냥 네가 인기가 없는 게 아닐까. |
| 163 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 뼈 때리지 마라, 사실이긴 한데 지금 그게 핵심이 아니 |
| 164 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *복도 유리창 너머로 클립보드를 가슴에 안은 서연이 귓 |
| 165 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 오호, 도도한 회장님도 우리 전학생한테 꽤 관심 있나  |
| 166 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | 방금 '우리' 전학생이라고 했어? |
| 167 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 당연하지, 같은 반에다 바로 옆자리 짝꿍이잖아! 그 정 |
| 168 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *1교시가 끝나고 시끌벅적한 교실 열기를 식히려 복도  |
| 169 | `morning2_seo_dust_1` | 서연 | school_hallway | seyoun_normal |  |  | 너 1교시 수업 듣는 동안 대체 뭘 한 거야. *쉬는  |
| 170 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 움직이지 말고 잠깐 가만히 있어 봐. |
| 171 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *한 걸음 다가선 서연의 하얀 손끝이 내 교복 어깨에  |
| 172 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 어깨에 분필 가루 같은 게 묻어 있었어. |
| 173 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | 말도 없이 갑자기 손이 훅 들어와서 놀랐잖아. *괜히  |
| 174 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 뭘 그렇게까지 놀라? 그냥 먼지 털어 준 건데. |
| 175 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *분명 먼지는 다 털어 냈는데도 서연의 손끝이 닿았던  |
| 176 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 방금 그거 뭐야? 학생회장이 네 어깨 만진 거 맞 |
| 177 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 만진 게 아니라 어깨에 묻은 먼지 털어 준 거야. |
| 178 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 수상한데, 거기 진짜로 먼지가 붙어 있긴 했어? |
| 179 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | 진짜로 먼지 털어 준 것뿐이라니까. 왜 눈을 그렇게 뜨 |
| 180 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *아침에 받은 유나의 쪽지를 손안에 쥔다. 수업 사이마 |
| 181 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *이틀째 점심시간, 누구의 곁으로 향할까.* |
| 182 | `lunch2_yuna_1` | {name} | annex_exhibit_hallway | yuna_normal |  |  | *인적이 끊긴 낡은 도서관 별관. 서늘한 그늘이 내려앉 |
| 183 | `lunch2_yuna_intro_check` |  | annex_exhibit_hallway | yuna_normal |  |  |  |
| 184 | `lunch2_yuna_3_yuna_aff` |  | annex_exhibit_hallway | 없음 |  |  |  |
| 185 | `lunch2_yuna_3_cool` | 유나 | annex_exhibit_hallway | yuna_bored |  |  | *말없이 책갈피만 끼워 넣고 가방을 치워 옆자리를 비운 |
| 186 | `lunch2_yuna_cool_cont` | {name} | annex_exhibit_hallway | yuna_bored |  |  | *고요한 방 안에서 내 책장만 한 장 넘어간다. 유나는 |
| 187 | `lunch2_yuna_end` | {name} | yuna_hideout_day.webp | yuna_normal |  |  | *별관 문을 닫기 전 마지막으로 돌아보자 유나는 아까  |
| 188 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *종례가 끝난 방과 후 교실. 쉬는 시간마다 꺼냈던 휴 |
| 189 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 당장 체육관으로 튀어 와! 오늘은 진짜 제대로 된 내기 |
| 190 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 방과후에 학생회실로 잠깐 와 줄 수 있어? 오늘따라 일 |
| 191 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게선 따로 온 메시지가 없다. 대신 주머니 속  |
| 192 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *석양이 물들기 시작하는 방과후, 어디로 발걸음을 옮길 |
| 193 | `after2_yuna_1` | {name} | annex_exhibit_hallway | 없음 |  | 🌅 | *아침에 받았던 쪽지를 떠올리며 인적 드문 도서관 별관 |
| 194 | `after2_yuna_1_b` | {name} | annex_exhibit_hallway | 없음 |  | 🌅 | *노을이 비스듬히 스며든 별관 복도에는 인기척 하나 없 |
| 195 | `after2_yuna_2` | {name} | yuna_hideout_day.webp | yuna_normal |  | 🌅 | *문을 밀자 경첩이 나직이 삐걱거린다. 안쪽 소파에 깊 |
| 196 | `after2_yuna_tone` |  | yuna_hideout_day.webp | 없음 |  | 🌅 |  |
| 197 | `after2_yuna_cool_1` | 유나 | yuna_hideout_day.webp | yuna_bored |  | 🌅 | *소파 위 이어폰 한쪽만 슬쩍 치운다.* 옆에서 책 읽 |
| 198 | `after2_yuna_cool_cont` | {name} | yuna_hideout_day.webp | yuna_bored |  | 🌅 | *펼쳐진 책 한 페이지를 조용히 내려 읽는다. 유나는  |
| 199 | `after2_yuna_rival_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 200 | `after2_yuna_rival_dain_low` | 다인 | school_hallway | dain_laugh |  | 🌅 | 도서관 별관 쪽에 있었구나? 조심히 들어가고 내일 봐! |
| 201 | `after2_yuna_rival_seo_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 202 | `after2_yuna_rival_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 부족하던 일손은 다른 부원들로 채웠어. 내일 보자. |
| 203 | `after2_group_yuna_companion` | 유나 | library_old | 없음 |  | 🌅 | *별관 책상에 자료 두 묶음이 놓인다.* 한쪽을 끝내기 |
| 204 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *미묘한 여운이 감도는 대화를 마치고 가방을 고쳐 멘  |
| 205 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 206 | `minsu_warn_1` | {name} | school | 없음 |  | 🌅 | *노을이 지는 하교길. 교문을 막 나서는데 등 뒤에서  |
| 207 | `minsu_warn_1_b` | 민수 | school | minsu_normal |  | 🌅 | *내 보폭에 맞춰 옆에 나란히 서더니 주머니에 두 손을 |
| 208 | `minsu_warn_2` | 민수 | school | minsu_smirk |  | 🌅 | 야, 전학생. |
| 209 | `minsu_warn_3` | {name} | school | minsu_smirk |  | 🌅 | 응? 왜 불러? |
| 210 | `minsu_warn_4` | 민수 | school | minsu_smirk |  | 🌅 | 너 요즘 학교 다니는 거 꽤 재밌냐? |
| 211 | `minsu_warn_4_b` | {name} | school | minsu_normal |  | 🌅 | *민수는 내 쪽을 보지 않고 교문 건너편 깜빡이는 횡단 |
| 212 | `minsu_warn_5` | {name} | school | minsu_smirk |  | 🌅 | 갑자기 그게 무슨 소리야? |
| 213 | `minsu_warn_6` | 민수 | school | minsu_smirk |  | 🌅 | 점심엔 한 명, 방과후엔 또 한 명. 넌 재밌겠지. — |
| 214 | `night2_start` | {name} | room_my | 없음 |  |  | *따뜻한 물로 샤워를 마치고 젖은 머리를 털며 침대에  |
| 215 | `night2_msg_1` |  | 없음 | 없음 |  |  |  |
| 216 | `night2_msg_generic` | 다인 | room_my | dain_normal | 0.35 |  | 야 내일 아침에 교실에서 보자 늦지 마! |
| 217 | `night2_msg_generic_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 점심엔 옥상 열어 놓을게 |
| 218 | `night2_msg_generic_3` |  | 없음 | 없음 |  |  |  |
| 219 | `night2_msg_generic_3_established` | 유나 | room_my | yuna_normal | 0.35 |  | 내가 빌려준 책, 어디까지 읽었어? |
| 220 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *나란히 도착한 대화방 세 개를 번갈아 바라본다. 누구 |
| 221 | `night2_choice` | {name} | room_my | 없음 |  |  | *세 개의 말풍선 중 누구에게 가장 먼저 답장을 보낼까 |
| 222 | `night2_reply_yuna_1` |  | 없음 | 없음 |  |  |  |
| 223 | `night2_reply_yuna_1_established` | {name} | room_my | yuna_normal | 0.35 |  | 아까 빌려준 책 벌써 반쯤 읽었어. 꽤 재밌더라 |
| 224 | `night2_reply_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | 응, 다 읽고 나면 네 감상은 어떤지 꼭 듣고 싶어. |
| 225 | `night2_reply_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *한동안 입력 창이 고요하게 비어 있다가 조심스럽게 새 |
| 226 | `night2_reply_yuna_4` |  | 없음 | 없음 |  |  |  |
| 227 | `night2_reply_yuna_4_first` | 유나 | room_my | yuna_normal | 0.35 |  | 내가 아끼는 재생목록 하나 보낼게. 세 번째 곡부터 들 |
| 228 | `night2_reply_yuna_5` | {name} | room_my | yuna_normal | 0.35 |  | *유나가 공유해 준 심야 재생목록 링크를 연다. 나열된 |
| 229 | `night2_reply_yuna_6` | 유나 | room_my | yuna_normal | 0.35 |  | 그 곡은 마지막 음까지 끝까지 들어 봐 |
| 230 | `night2_reply_yuna_6_b` | {name} | room_my | yuna_normal | 0.35 |  | *양쪽 귀에 이어폰을 꽂고 재생 버튼을 누른다. 낮고  |
| 231 | `night2_reply_yuna_6_c` | {name} | room_my | yuna_normal | 0.35 |  | *긴 여운을 남기며 마지막 화음이 잦아들고 화면 속 재 |
| 232 | `night2_reply_yuna_7` | {name} | room_my | yuna_normal | 0.35 |  | *재생목록 제목 바로 아래에 유나가 적어 둔 한 줄짜리 |
| 233 | `night2_reply_yuna_react_default` | 유나 | room_my | yuna_normal | 0.35 |  | 응, 들어 줘서 고마워. 잘 자. |
| 234 | `night2_yuna_freetalk` | 유나 | room_my | yuna_normal | 0.35 | 🌙 | 잠깐. 아직 깨어 있으면... 조금만 더 얘기할래? |
| 235 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 창을 정리하려는데 상단 알림 목록 사이에 학교 |
| 236 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 마치고 길게 숨을 내쉬며 베개 옆으로 휴대폰을 |
| 237 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *남은 두 사람에게도 답장을 보내려다 손가락이 굳는다. |
| 238 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *사진첩 스크롤을 끝까지 내리자 나타난 3개월 전 봄  |
| 239 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *차마 전송 버튼을 누르지 못했던 문장들이 휴대폰 메모 |
| 240 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 임시 저장 메모가 마지막 문장이다. 그 아래 |
| 241 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *떨리는 엄지손가락을 사진 아래 휴지통 삭제 아이콘 위 |
| 242 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *다시 켠 메신저 목록에는 아직 내가 답하지 못한 두  |
| 243 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *방금 닫았던 소정이의 사진을 한 번 더 열어 본다.  |
| 244 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *가슴 한구석이 묵직하게 내려앉아 끝내 나머지 두 개의 |
| 245 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면 위로 세 사람의 이름이 나란히 쌓여 있다.  |
| 246 | `night2_end_2_b` |  | 없음 | 없음 |  |  |  |
| 247 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *액정 불빛이 완전히 꺼진 뒤에도 미지근한 열기가 남은 |
| 248 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *잠이 오지 않아 부엌으로 나와 불을 켠다. 내일 싸  |
| 249 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *서툰 손길로 부쳐 낸 계란말이와 소시지, 김과 밥을  |
| | **Day 3** | | | | | | |
| 250 | `morning3_start` | {name} | school | 없음 |  |  | *전학 사흘째, 금요일 아침. 밤늦도록 깜빡이는 메시지 |
| 251 | `morning3_start_2` | {name} | school | 없음 |  |  | *어깨에 멘 가방끈을 꽉 쥐고 숨이 턱 끝까지 차오르도 |
| 252 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 253 | `morning3_seo_gate_1` | {name} | school | seyoun_normal |  |  | 서연? 종 울리기 직전인데 안 들어가고 왜 아직 여기  |
| 254 | `morning3_seo_gate_cold_1` | 서연 | school | seyoun_normal |  |  | *서연이 내 옆을 스쳐 지나가며 교복 명찰 쪽으로만 차 |
| 255 | `morning3_seo_gate_cold_2` | 서연 | school | seyoun_normal |  |  | 전학생. 오늘도 아슬아슬하게 다니네. |
| 256 | `morning3_seo_gate_cold_3` | {name} | school | 없음 |  |  | *이름조차 부르지 않는 목소리 뒤로 단정한 구두 굽 소 |
| 257 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실 뒷문을 열자마자 세 방향에서 공기가 미묘하게 굳 |
| 258 | `morning3_react_seo_1` | 다인 | room_school | dain_normal |  |  | 오호, 뭐야? 아침부터 학생회장님이랑 나란히 등교하신  |
| 259 | `morning3_react_seo_2` | 유나 | room_school | yuna_bored |  |  | *창밖을 내다보던 유나가 유리창에 비친 내 옆의 서연을 |
| 260 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *잠시 숨을 돌리려 나온 복도. 기다렸다는 듯 서연이  |
| 261 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | *복도 창가에서 서연이 반 걸음 다가서며 목소리를 낮춘 |
| 262 | `morning3_date_seo_skip` |  | school_hallway | 없음 |  |  |  |
| 263 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끄고는 눈이 마주치 |
| 264 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 자, 그럼 이제 내 차례지! 이번 주말에 나랑 오락실  |
| 265 | `morning3_date_dain_skip` |  | room_school | 없음 |  |  |  |
| 266 | `morning3_date_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 이쪽을 흘끗 보다가 가방 지퍼를 끝까지 당겨  |
| 267 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심시간 직전, 유나가 소리 없이 다가와 네모나게 접 |
| 268 | `morning3_date_yuna_1_b` | 서연 | room_school | seyoun_normal |  |  | 유나야. 그렇게 쪽지로만 말을 걸면 옆에 있는 사람들은 |
| 269 | `morning3_date_yuna_2` | 유나 | room_school | yuna_normal |  |  | *펼쳐 본 쪽지에는 연보라색 잉크로 또렷한 글씨가 적혀 |
| 270 | `morning3_date_yuna_choice` | 유나 | room_school | yuna_normal |  |  | 다 들리게 말하는 게 공평하다면 지금 직접 말할게. 난 |
| 271 | `morning3_date_yuna_accept` | {name} | room_school | yuna_shy |  |  | *쪽지 뒷면에 답을 적어 건네자 유나는 문장을 끝까지  |
| 272 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 273 | `morning3_multi_from_yuna` |  | room_school | yuna_shy |  |  |  |
| 274 | `morning3_end` | {name} | room_school | 없음 |  |  | *오전 마지막 수업을 끝내는 종이 울리고 폭풍 전야 같 |
| 275 | `morning3_end_b` |  | 없음 | 없음 |  |  |  |
| 276 | `lunch3_start` | 유나 | room_school | yuna_normal |  |  | 내 빵도 반 나눠 먹어. *사흘째 점심, 교실에서 책상 |
| 277 | `lunch3_start_2_b` | 다인 | room_school | yuna_normal |  |  | 이 계란말이, 내가 먼저 먹어도 되는 거지? 일단 맛부 |
| 278 | `lunch3_meal_1` | 다인 | room_school | yuna_normal |  |  | 오, 간 딱 맞는데! 회장님도 얼른 드세요. 오늘은 옆 |
| 279 | `lunch3_meal_2` | {name} | room_school | yuna_normal |  |  | 잠깐만, 그건 내 도시락 반찬인데. |
| 280 | `lunch3_meal_3` | 서연 | room_school | yuna_normal |  |  | *서연이 내 도시락에서 계란말이 한 조각을 집어 맛본다 |
| 281 | `lunch3_meal_4` | {name} | room_school | yuna_normal |  |  | 남의 점심 반찬에 냉정하게 점수 매기지 마. |
| 282 | `lunch3_meal_5` | 서연 | room_school | yuna_normal |  |  | *서연의 입꼬리가 얄밉게 올라간다.* 10점 만점에 6 |
| 283 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *말없이 지켜보던 유나가 젓가락을 뻗어 도시락 한가운데 |
| 284 | `lunch3_meal_7` | {name} | room_school | yuna_normal |  |  | 유나야, 그 칼집 낸 소시지는 내가 제일 아껴 둔 건데 |
| 285 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *유나가 소시지를 천천히 베어 물며 맞은편의 다인을 바 |
| 286 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | 어, 잠깐만! 그건 마지막 남은 조각이야. *내 외침과 |
| 287 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *텅 빈 도시락통 한가운데에 노릇하게 구워진 마지막 계 |
| 288 | `lunch3_meal_10_e` |  | 없음 | 없음 |  |  |  |
| 289 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *숨소리조차 잦아든 식탁 위, 마지막 반찬을 건넬 사람 |
| 290 | `lunch3_give_yuna_aff` |  | room_school | 없음 |  |  |  |
| 291 | `lunch3_give_yuna_1` | 유나 | room_school | yuna_normal |  |  | *유나의 눈동자가 작게 흔들리더니 이내 옅은 미소가 번 |
| 292 | `lunch3_yuna_skin_check` |  | room_school | yuna_normal |  |  |  |
| 293 | `lunch3_give_yuna_2_check` |  | room_school | 없음 |  |  |  |
| 294 | `lunch3_give_yuna_seo_affinity` |  | room_school | 없음 |  |  |  |
| 295 | `lunch3_give_yuna_seo_low` | 서연 | room_school | seyoun_normal |  |  | *서연은 말없이 자기 도시락통과 수저집을 정리한다.* |
| 296 | `lunch3_give_yuna_3_check` |  | room_school | 없음 |  |  |  |
| 297 | `lunch3_give_yuna_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 빈 물병을 가방 옆주머니에 꽂아 넣는다.* 난 |
| 298 | `lunch3_end` | {name} | room_school | 없음 |  |  | *점심시간 종료를 알리는 종소리에 각자 도시락을 덮는다 |
| 299 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과 후, 노을빛 복도 갈림길에 선다. 사흘째 지나는 |
| 300 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *주머니 속 휴대폰을 만지작거린다. 엉켜 버린 주말 약 |
| 301 | `after3_auto_yuna` | {name} | school_hallway | 없음 |  | 🌅 | *점심시간 내내 말없이 책갈피만 만지작거리던 유나의 손 |
| 302 | `after3_rivals_for_yuna_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 303 | `after3_rival_seo_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 304 | `after3_rival_seo_affinity` |  | school_hallway | 없음 |  | 🌅 |  |
| 305 | `after3_rival_seo_cool` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 방과 후 일정이 바뀐 모양이네. *서연은 클립보드 페이 |
| 306 | `after3_rival_seo_done` |  | school_hallway | 없음 |  | 🌅 |  |
| 307 | `after3_rival_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 308 | `after3_rival_dain_affinity` |  | school_hallway | 없음 |  | 🌅 |  |
| 309 | `after3_rival_dain_cool` | 다인 | school_hallway | dain_normal |  | 🌅 | 오늘 체육관 코스는 패스구나. *다인은 배구공 가방 끈 |
| 310 | `after3_rival_dain_done` |  | school_hallway | 없음 |  | 🌅 |  |
| 311 | `after3_yuna_affinity_check` |  | yuna_hideout_day.webp | 없음 |  | 🌅 |  |
| 312 | `after3_yuna_partial_1` | {name} | yuna_hideout_day.webp | yuna_normal |  | 🌅 | *별관 문은 열려 있지만 유나는 노트를 펼치지 않는다. |
| 313 | `after3_yuna_partial_2` | 유나 | yuna_hideout_day.webp | yuna_shy |  | 🌅 | 오늘은 여기까지만 할래. 다음에 이야기하고 싶어지면 그 |
| 314 | `after3_yuna_end` |  | 없음 | 없음 |  | 🌅 |  |
| 315 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *길었던 방과 후 시간이 끝났다. 복도 천장의 형광등이 |
| 316 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 317 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 318 | `minsu_d3_check` | {name} | 없음 | 없음 |  | 🌅 |  |
| 319 | `night3_start` | {name} | room_my | 없음 |  |  | *금요일 밤, 지친 몸으로 방에 돌아와 교복 차림으로  |
| 320 | `night3_start_2` | {name} | room_my | 없음 |  |  | *불도 켜지 않은 방 안, 책상 위에 엎어 두었던 휴대 |
| 321 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *어두운 천장 아래로 휴대폰 불빛이 번진다. 도착해 있 |
| 322 | `night3_dream_1` | {name} | room_my | 없음 |  |  | *스탠드 조명을 끄려다 휴대폰을 한 번 더 집어 든다. |
| 323 | `night3_dream_2_b` | {name} | room_my | 없음 |  |  | *머리맡에 휴대폰을 내려놓는다. 내일 아침 마주 보며  |
| 324 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *잠들기 전, 휴대폰 갤러리 깊숙한 곳에서 예전 학교의 |
| 325 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *화면에 '이 사진을 삭제하시겠습니까?'라는 확인 창이 |
| 326 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *푸르스름한 액정 빛을 가만히 내려다본다. 소정이의 책 |
| 327 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *확인 창에서 조용히 취소를 누른다. 사진 한 장을 지 |
| 328 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼 대신 이동 메뉴를 눌러 사진을 새 폴더로  |
| 329 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *사진 아래에 짧은 메모를 남긴다. 소정이에게 끝내 건 |
| 330 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *새로 만든 폴더 안에 사진 한 장이 조용히 자리 잡는 |
| 331 | `night3_faithful_reflect_4_b` |  | 없음 | 없음 |  |  |  |
| 332 | `night3_faithful_reflect_4_c` |  | 없음 | 없음 |  |  |  |
| 333 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 내일 아침 알람을 맞춘다. 휴대폰을 내 |
| 334 | `night3_end` | {name} | room_my | 없음 |  |  | *금요일 시간표가 적힌 교과서를 덮고 스탠드 불을 완전 |
| | **Day 4** | | | | | | |
| 335 | `morning4_start` | {name} | room_my_day.webp | 없음 |  |  | *넷째 날, 토요일 아침. 커튼 틈으로 스며든 주말 햇 |
| 336 | `morning4_date_plan_check` |  | 없음 | 없음 |  |  |  |
| 337 | `morning4_nightmare_check` |  | room_my_day.webp | 없음 |  |  |  |
| 338 | `minsu_cheer_1` | {name} | room_my_day.webp | 없음 |  |  | *잠금을 풀자마자 메신저 맨 윗줄에서 민수의 이름이 반 |
| 339 | `minsu_cheer_1_b` | 민수 | room_my_day.webp | minsu_normal | 0.35 |  | 야 너 오늘 주말 데이트라며? |
| 340 | `minsu_cheer_1_c` | {name} | room_my_day.webp | minsu_normal | 0.35 |  | 그걸 네가 어떻게 알았어 |
| 341 | `minsu_cheer_1_d` | 민수 | room_my_day.webp | minsu_normal | 0.35 |  | 교실에서 금요일 내내 주말 약속 잡느라 정신없더니 모를 |
| 342 | `minsu_cheer_2` | 민수 | room_my_day.webp | minsu_normal | 0.35 |  | 옷 좀 제대로 입어라. 분위기 망치지 말고 잘하고 와ㅋ |
| 343 | `minsu_cheer_3` | {name} | room_my_day.webp | minsu_normal | 0.35 |  | 알아서 할게. |
| 344 | `minsu_cheer_4_branch` |  | room_my_day.webp | 없음 |  |  |  |
| 345 | `minsu_cheer_4_ins_single` | {name} | room_my_day.webp | minsu_normal | 0.35 |  | *캘린더 앱을 열어 본다. 토요일 칸에 적힌 단 하나의 |
| 346 | `morning4_start_2` | {name} | room_my_day.webp | 없음 |  |  | *창문을 열어 선선한 아침 공기를 들이마신다. 주중에  |
| 347 | `morning4_yuna_msg_1` | 유나 | room_my_day.webp | yuna_normal | 0.35 |  | 10시. 역 앞 카페. 늦으면 그냥 간다 |
| 348 | `morning4_yuna_msg_1_b` | {name} | room_my_day.webp | yuna_normal | 0.35 |  | *짧은 두 줄 끝에 마침표조차 없지만 괜히 먼저 와서  |
| 349 | `morning4_yuna_msg_single` | {name} | room_my_day.webp | yuna_normal | 0.35 |  | *담백한 문장 너머로 유나의 나직한 목소리가 들리는 듯 |
| 350 | `morning4_hidden_check` | {name} | street | 없음 |  |  | *이른 아침 공기를 가르며 학교 앞 사거리 횡단보도에서 |
| 351 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 352 | `day4_haeun_gate` |  | 없음 | 없음 |  |  |  |
| 353 | `day4_haeun_trust_check` |  | 없음 | 없음 |  |  |  |
| 354 | `day4_haeun_personal_gate` |  | 없음 | 없음 |  |  |  |
| 355 | `morning4_end` | {name} | room_my_day.webp | 없음 |  |  | *집으로 돌아와 거울 앞에서 셔츠 깃과 머리카락을 정돈 |
| 356 | `day4_date_branch` |  | 없음 | 없음 |  |  |  |
| 357 | `date_yuna_1` | {name} | cafe | yuna_date_normal.webp |  |  | *역 앞 카페 테라스 그늘에 서 있는 유나가 한눈에 들 |
| 358 | `date_yuna_tier_check` |  | cafe | 없음 |  |  |  |
| 359 | `date_yuna_tentative_1` | 유나 | cafe | yuna_date_normal.webp |  |  | 오늘은 다른 사적인 얘기 말고 그냥 책 얘기만 조금 하 |
| 360 | `date_yuna_tentative_2` | {name} | cafe | yuna_date_normal.webp |  |  | *조용히 대화는 이어지지만 유나는 가방 안에 넣어 온  |
| 361 | `date_yuna_tentative_3` | 유나 | street | yuna_date_normal.webp |  |  | 마음이 정리되면 다음번엔 내가 먼저 연락할게. 오늘은  |
| 362 | `pre_confess_minsu` | 민수 | street | minsu_smirk | 0.35 |  | 야, 지금 한창 데이트 중이지? 친구로서 딱 한마디만  |
| 363 | `pre_confess_minsu_2` | 민수 | street | minsu_smirk | 0.35 |  | 어설프게 말 돌리지 말고 오늘 네 마음 제대로 전해라 |
| 364 | `pre_confess_callback` | {name} | street | 없음 |  |  | *바지 주머니 속 휴대폰을 쥔 손바닥에 땀이 밴다. 꺼 |
| 365 | `confess_seo_1` | {name} | school | 없음 |  | 🌅 | *저녁노을이 길게 그림자를 드리울 무렵, 데이트를 마치 |
| 366 | `confess_yuna_1` | {name} | cafe | yuna_date_normal.webp |  | 🌅 | *거리의 카페 간판들에 하나둘 주황빛 불이 켜질 무렵, |
| 367 | `confess_yuna_2` | 유나 | cafe | yuna_date_normal.webp |  | 🌅 | 헤어지기 전에 마지막으로 너랑 꼭 가고 싶은 데가 있어 |
| 368 | `confess_yuna_3` | {name} | yuna_hideout_day.webp | yuna_date_normal.webp |  | 🌅 | *유나를 따라 들어선 별관 구석의 비밀 독서 공간. 유 |
| 369 | `confess_yuna_4` | 유나 | yuna_hideout_day.webp | yuna_date_normal.webp |  | 🌅 | 이리 와서 내 옆에 앉아. 오늘은 굳이 책을 펼치지 않 |
| 370 | `confess_yuna_5` | {name} | yuna_hideout_day.webp | yuna_date_normal.webp |  | 🌅 | *유나의 바로 옆자리에 앉자 낡은 소파 쿠션이 푹 꺼지 |
| 371 | `confess_yuna_choice` | {name} | yuna_hideout_day.webp | yuna_date_normal.webp |  | 🌅 | *유나가 접힌 책갈피 모서리를 엄지로 천천히 펴면서 내 |
| 372 | `confess_yuna_no_2` | 유나 | yuna_hideout_day.webp | yuna_date_shy.webp |  | 🌅 | *유나가 말없이 책갈피를 덮인 책갈피 틈으로 깊숙이 밀 |
| 373 | `confess_yuna_no_3` | {name} | yuna_hideout_day.webp | yuna_date_normal.webp |  | 🌅 | 유나야, 무릎 위에 둔 그 책은 아직 다 못 읽은 거야 |
| 374 | `confess_yuna_no_4` | 유나 | yuna_hideout_day.webp | yuna_date_sad.webp |  | 🌅 | 응. 가장 중요한 결말은 아직 못 봤어. |
| 375 | `confess_yuna_no_4_b` | {name} | yuna_hideout_day.webp | yuna_date_sad.webp |  | 🌅 | *자리에서 일어나 문 쪽으로 세 걸음쯤 멀어졌을 때,  |
| 376 | `day4_night_start` | {name} | school | 없음 |  |  | *어스름이 짙게 깔린 학교를 나서서 집으로 돌아갈 시간 |
| 377 | `day4_night_branch` | 시스템 | 없음 | 없음 |  |  |  |
| 378 | `day4_student_visit_branch` |  | 없음 | 없음 |  |  |  |
| 379 | `day4_student_night_branch` | {name} | room_my | 없음 |  |  | *집으로 돌아와 침대 맡에 가방을 내려놓는다. 충전기  |
| 380 | `day4_waited_night_branch` |  | 없음 | 없음 |  |  |  |
| 381 | `day4_waited_yuna_invite` | 유나 | room_my | yuna_normal | 0.35 |  | 열 시에 학교 후문 가로등 아래로 와 줘. 밤바람 쐬면 |
| 382 | `day4_waited_yuna_promise` | {name} | room_my | 없음 |  |  | 응, 열 시에 학교 후문에서 보자. *유나에게 답장을  |
| 383 | `wall_yuna_rival_rank` | 시스템 | yuna_hideout | 없음 |  |  |  |
| 384 | `wall_yuna_glimpse_1` | {name} | school_back | 없음 |  |  | *밤 10시, 유나와 만나기로 한 학교 후문으로 걸어가 |
| 385 | `wall_yuna_glimpse_2` | {name} | school_back | seyoun_pout |  |  | *서연은 휴대폰을 주머니에 넣었다 꺼내기를 반복한다.  |
| 386 | `wall_yuna_glimpse_3_b` | 서연 | school_back | seyoun_normal |  |  | 지금 이대로 집에 들어가면 또 거울 앞에서 웃는 얼굴부 |
| 387 | `wall_yuna_2` | {name} | school_back | yuna_normal |  |  | *창백한 후문 가로등 불빛 아래에 유나가 서 있다. 두 |
| 388 | `wall_yuna_3` | 유나 | school_back | yuna_normal |  |  | 숨소리가 들려서 네가 오는 줄 알았어. 이쪽으로 따라와 |
| 389 | `wall_yuna_4` | 유나 | yuna_hideout | yuna_normal |  |  | 별관 안쪽 자료 보관실이야. *유나가 좁고 어두운 서가 |
| 390 | `wall_yuna_6` | 유나 | yuna_hideout | yuna_normal |  |  | 이 편지, 정확히 일 년 전에 이 자리에서 받은 거야. |
| 391 | `wall_yuna_7` | {name} | yuna_hideout | yuna_sad |  |  | *빛바랜 봉투 안에서 접힌 편지지가 나온다. 단정한 필 |
| 392 | `wall_yuna_8` | {name} | yuna_hideout | yuna_sad |  |  | 이준호라면 누구야? |
| 393 | `wall_yuna_9` | 유나 | yuna_hideout | yuna_sad |  |  | 일 년 전까지 이 자료실에 나랑 단둘이 오던 문예부 선 |
| 394 | `wall_yuna_9_b` | 유나 | yuna_hideout | yuna_sad |  |  | *유나가 떨리는 손끝으로 낡은 편지지를 책상 모서리에  |
| 395 | `wall_yuna_10` | 유나 | yuna_hideout | yuna_sad |  |  | 중학교 내내 나는 교실에서 투명인간이었어. 반 애들 누 |
| 396 | `wall_yuna_11` | 유나 | yuna_hideout | yuna_sad |  |  | 고등학생이 돼서도 똑같았는데 그 선배가 처음이었어. 우 |
| 397 | `wall_yuna_12` | 유나 | yuna_hideout | yuna_sad |  |  | *평소라면 몇 번이고 말을 멈췄을 유나가 숨 한 번 고 |
| 398 | `wall_yuna_13` | 유나 | yuna_hideout | yuna_normal |  |  | 그런데 어느 날 아침에 나와 보니까 소리도 없이 전학을 |
| 399 | `wall_yuna_14` | 유나 | yuna_hideout | yuna_sad |  |  | 내가 이 자리에 숨 쉬고 있다는 걸 알아주던 단 한 사 |
| 400 | `wall_yuna_14_b` | 유나 | yuna_hideout | yuna_sad |  |  | 그 뒤로 일 년 동안 매일같이 혼자 이 어두운 자료실을 |
| 401 | `wall_yuna_14_c` | 유나 | yuna_hideout | yuna_normal |  |  | 아무리 책장을 다 뒤져 봐도 끝내 아무것도 없었어. |
| 402 | `wall_yuna_14_d` | 유나 | yuna_hideout | yuna_normal |  |  | *유나가 젖어 드는 붉은 눈동자를 들어 어둠 속에서 나 |
| 403 | `wall_yuna_14_e` | 유나 | yuna_hideout | yuna_normal |  |  | 그러다 전학 온 첫날 네가 이 조용한 도서관 구석까지  |
| 404 | `wall_yuna_14_f` | 유나 | yuna_hideout | yuna_sad |  |  | 네가 풍기는 다정한 공기가 그 선배랑 너무 닮아 있었어 |
| 405 | `wall_yuna_14_g` | 유나 | yuna_hideout | yuna_sad |  |  | 이번에도 마음 주며 친해졌다가 어느 날 갑자기 네가 사 |
| 406 | `wall_yuna_14_h` | {name} | yuna_hideout | yuna_normal |  |  | 도망치지 않고 네 옆에서 다 듣고 있어, 유나야. *낡 |
| 407 | `wall_yuna_15` | 유나 | yuna_hideout | yuna_shy |  |  | *유나의 시선이 일 년 전 편지 날짜에 깊게 박힌다.* |
| 408 | `wall_yuna_16` | 유나 | yuna_hideout | yuna_sad |  |  | 그런데 너는 내가 밀어내도 매일같이 다시 찾아왔어. 재 |
| 409 | `wall_yuna_16_b` | 유나 | yuna_hideout | yuna_sad |  |  | 내일도 네가 올까 봐 기다리는 시간조차 무서웠는데 솔직 |
| 410 | `wall_yuna_choice` | 유나 | yuna_hideout | yuna_sad |  |  | 이런 내 마음 다 듣고 나니까 네 생각은 어때. *유나 |
| 411 | `wall_yuna_sub_1` | 유나 | yuna_hideout | yuna_sad |  |  | 맞아. 애초에 지나간 사람과 지금 내 옆에 있는 너를  |
| 412 | `wall_yuna_sub_2` | 유나 | yuna_hideout | yuna_smile |  |  | 고마워. 이 편지는 이제 다시 봉투에 넣어 둘게. *유 |
| 413 | `wall_yuna_freetalk` | 유나 | yuna_hideout | yuna_normal |  | 🌙 | *독서실 책상 앞으로 돌아온 유나가 낡은 편지를 접어  |
| 414 | `day4_student_return_home` | {name} | room_my | 없음 |  |  | *밤의 만남을 마치고 여운이 가시지 않은 걸음으로 집으 |
| 415 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 416 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *일요일 아침 알람을 맞춰 두고 방 안의 스탠드 불을  |
| 417 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안의 시계 바늘이 자정을 넘어 다섯째 날로 향한다 |
| | **Day 5** | | | | | | |
| 418 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날, 일요일 아침. 교문 너머로 축제 현수막이 |
| 419 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 420 | `morning5_start_b` |  | 없음 | 없음 |  |  |  |
| 421 | `morning5_start_2_b` |  | 없음 | 없음 |  |  |  |
| 422 | `morning5_mood_check` | 시스템 | room_school | 없음 |  |  |  |
| 423 | `morning5_mood_low` | {name} | room_school | 없음 |  |  | *전학 온 첫 주가 저물어 간다. 휴대폰 잠금화면에 나 |
| 424 | `morning5_gate` |  | 없음 | 없음 |  |  |  |
| 425 | `morning5_seo_note_1` | 서연 | room_school | seyoun_normal | 0.35 |  | *내 책상 한가운데, 모서리를 반듯하게 맞춘 쪽지 한  |
| 426 | `morning5_seo_note_1_b` | {name} | school_hallway | 없음 |  |  | *복도 창가를 따라 꾸며진 문예부 전시 코너를 지나다가 |
| 427 | `morning5_seo_note_1_c` | {name} | school_hallway | 없음 |  |  | *문예부 게시판 한켠에 단편소설 원고 몇 장이 압정으로 |
| 428 | `morning5_yuna_story_1` | {name} | school_hallway | yuna_normal | 0.35 |  | *원고 속 화자는 오후의 도서관 책상에 엎드려 잠든 누 |
| 429 | `morning5_yuna_story_2` | {name} | school_hallway | 없음 |  |  | *원고의 맨 끝 문장에 시선이 닿는다. '그 사람이 눈 |
| 430 | `morning5_yuna_story_4` | {name} | school_hallway | yuna_normal | 0.35 |  | *원고지 맨 아래 여백 구석에는 연필로 아주 작게 덧붙 |
| 431 | `morning5_return_class` | {name} | room_school | dain_normal |  |  | *복도 끝에서 교실로 돌아오자, 문가에 등을 기댄 채  |
| 432 | `morning5_dain_1` | 다인 | room_school | dain_normal |  |  | *내 어깨를 가볍게 툭 치며 장난스럽게 웃는다.* 야, |
| 433 | `morning5_dain_1_b` | {name} | room_school | dain_normal |  |  | 내 허락도 안 받고 마음대로 적어 놓으면 어떡해? |
| 434 | `morning5_dain_2` | 다인 | room_school | dain_laugh |  |  | *포니테일이 흔들리도록 고개를 휙 젖히며 볼에 바람을  |
| 435 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *축제 준비로 복도가 소란스러운 틈을 지나, 문이 반쯤 |
| 436 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *오전 행사 준비가 한차례 숨을 고르는 쉬는 시간. 소 |
| 437 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 438 | `morning5_sojeong_1` | {name} | room_school | 없음 |  |  | *조용한 창가에 서서 휴대폰 메모 앱을 연다. 이전 학 |
| 439 | `morning5_sojeong_2` | {name} | room_school | 없음 |  |  | *더 이상 나를 변호하기 위한 마흔 번째 초안은 만들지 |
| 440 | `morning5_sojeong_3` | {name} | room_school | 없음 |  |  | 그때 네 책상 위에 적힌 낙서들을 두 눈으로 보고도 선 |
| 441 | `morning5_sojeong_4` | {name} | room_school | 없음 |  |  | *말풍선 옆에 작은 전송 완료 표시가 뜬다. 숫자 1이 |
| 442 | `morning5_sojeong_5` | {name} | room_school | 없음 |  |  | 전학 오기 전 학교에서 제가 모른 척 지나쳤던 일에 대 |
| 443 | `morning5_route_branch` |  | room_school | 없음 |  |  |  |
| 444 | `morning5_end` | {name} | room_school | 없음 |  |  | *책상 위에 놓인 쪽지들을 소중히 추려 모으고 휴대폰  |
| 445 | `day5_haeun_gate` |  | 없음 | 없음 |  |  |  |
| 446 | `day5_haeun_trust_check` |  | 없음 | 없음 |  |  |  |
| 447 | `day5_haeun_resume` |  | 없음 | 없음 |  |  |  |
| 448 | `tour_yuna_1_check` | {name} | yuna_hideout_day.webp | 없음 |  |  | *점심시간의 북적거림을 뒤로하고 도서관 별관으로 발걸음 |
| 449 | `tour_yuna_skip` |  | yuna_hideout_day.webp | 없음 |  |  |  |
| 450 | `tour_yuna_low` | 유나 | annex_exhibit_hallway | yuna_normal | 0.35 |  | *굳게 잠긴 별관 문 앞에서 걸음을 멈춘 지 얼마 지나 |
| 451 | `after5_start` |  | 없음 | 없음 |  | 🌅 |  |
| 452 | `day5_haeun_guilt_gate` |  | 없음 | 없음 |  | 🌅 |  |
| 453 | `day5_haeun_route_gate` |  | 없음 | 없음 |  | 🌅 |  |
| 454 | `after5_original_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 455 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *소란스럽던 축제가 막을 내릴 무렵, 노을이 스며드는  |
| 456 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 457 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *축제 마지막 순서가 끝나 가는 복도 창가에서, 홀로  |
| 458 | `after5_farewell_seo_skip` |  | school_hallway | 없음 |  | 🌅 |  |
| 459 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *오후의 그림자가 길어진 복도에서 서연과 마주친다. 서 |
| 460 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 461 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 462 | `after5_farewell_dain_1` | {name} | school_back | dain_normal |  | 🌅 | *체육관 입구 쪽에서 다인이 걸어 나온다. 언제나 성큼 |
| 463 | `after5_farewell_dain_skip` |  | school_hallway | 없음 |  | 🌅 |  |
| 464 | `after5_farewell_dain_low` | 다인 | school_back | dain_normal |  | 🌅 | *체육관 앞길에서 걸어오던 다인이 두 걸음 떨어진 자리 |
| 465 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *붉은 석양이 길게 내려앉은 교정 위로, 축제의 끝을  |
| 466 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 467 | `after5_last_chance_1` | {name} | school_back | 없음 |  | 🌅 | *지지직거리는 끝음과 함께 교정의 방송 스피커가 완전히 |
| 468 | `after5_last_chance_2` | {name} | school_back | 없음 |  | 🌅 | *주머니 속 휴대폰을 만지작거리다 꺼내 든다. 불 꺼진 |
| 469 | `after5_last_chance_route_check` |  | school_back | 없음 |  | 🌅 |  |
| 470 | `after5_last_chance_yuna_aff_check` |  | school_back | 없음 |  | 🌅 |  |
| 471 | `after5_last_chance_yuna_low_1` | {name} | school_back | 없음 |  | 🌅 | 유나야. |
| 472 | `after5_last_chance_yuna_low_2` | 유나 | school_back | yuna_normal |  | 🌅 | *유나가 발걸음을 멈추고 돌아본다. 책을 감싸 안은 가 |
| 473 | `after5_last_chance_choice` | {name} | school_back | 없음 |  | 🌅 | *노을빛이 깊게 내려앉은 눈동자를 똑바로 마주 보며 목 |
| 474 | `after5_confess_yes` | {name} | school_back | 없음 |  | 🌅 | *가쁘게 뛰는 숨을 깊게 들이마시고 세상에서 가장 또렷 |
| 475 | `after5_confess_yes_2` | {name} | school_back | 없음 |  | 🌅 | 좋아해. 그냥 친한 친구로 남고 싶지 않을 만큼. 너무 |
| 476 | `after5_confess_aff_yuna` |  | school_back | 없음 |  | 🌅 |  |
| 477 | `after5_confess_react_yuna_low` | 유나 | school_back | yuna_sad |  | 🌅 | *유나가 품 안의 책을 하얗게 질릴 만큼 꼭 쥔다.*  |
| 478 | `after5_confess_fail_walk_1` | {name} | school_back | 없음 |  | 🌅 | *붉은 해가 지평선 아래로 더 무겁게 내려앉는다. 어색 |
| 479 | `after5_confess_fail_walk_2` | {name} | park | 없음 |  | 🌅 | *끝내 마땅한 답을 찾지 못한 채 저녁 어스름이 깔린  |
| 480 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 481 | `ending_last_chance_resolve` | 시스템 | park | 없음 |  |  |  |
| 482 | `ending_confessed_aff_check` | 시스템 | park | 없음 |  |  |  |
| 483 | `ending_confessed_aff_yuna` | 시스템 | yuna_hideout_day.webp | 없음 |  |  |  |
| 484 | `day5_ending_confess_fail` | {name} | park | 없음 |  |  | *모든 말을 쏟아낸 뒤, 저녁 어스름이 내려앉은 공원  |
| 485 | `confess_fail_cg_yuna` | 유나 | ending_confess_fail_yuna | 없음 |  |  | *공원 출구 앞, 유나는 내 눈 대신 흔들리는 가로등  |
| 486 | `confess_fail_1` | {name} | ending_bittersweet | 없음 |  |  | *며칠 뒤 봄비가 추적추적 내리는 하굣길 교문 앞. 우 |
| 487 | `confess_fail_2` | {name} | ending_bittersweet | 없음 |  |  | *메신저 입력창에 긴 문장을 썼다가 지우기를 반복한 끝 |
| 488 | `confess_fail_3` | {name} | ending_bittersweet | 없음 |  |  | 그날 솔직하게 답해 줘서 고마웠어. *전송 버튼을 누르 |
| 489 | `confess_fail_4` | {name} | ending_bittersweet | 없음 |  |  | *잠시 뒤 숫자 1이 사라지며 읽음 표시가 남는다. 답 |
| 490 | `confess_fail_5` | 시스템 | ending_bittersweet | 없음 |  |  | ─── CONFESSION REJECTED END ── |
| 491 | `day5_credits` |  | school | 없음 |  |  |  |
| 492 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### day5_dain_ending_freetalk_bittersweet

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_dain_choice`: (선택)
- `after_end`: (선택)
- `after_hidden_nurse_choice`: (선택)
- `lunch2_choice`: (선택)
- `lunch2_dain_choice`: (선택)
- `after2_choice`: (선택)
- `night2_choice`: (선택)
- `morning3_date_dain_choice`: (선택)
- `lunch3_choice`: (선택)
- `confess_dain_choice`: (선택)
- `wall_dain_seo_tempt_2`: (선택)
- `morning5_caught_dain_by_seoyeon`: (선택)
- `morning5_counteroffer_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=7 유나=-1 다인=-24 담임=0 보건=-4

<details>
<summary>씬 타임라인 (492씬)</summary>

| # | 씬 ID | 화자 | 배경 | 캐릭터 | OP | 밤 | 대사 (앞 30자) |
|---|--------|------|------|--------|----|----|----------------|
| | **Day 1** | | | | | | |
| 1 | `start` | {name} | school | 없음 |  |  | *4월의 벚꽃잎이 흩날리는 교문 앞. 아직 풀기가 가시 |
| 2 | `start_again` | {name} | school | 없음 |  |  | *순간 울컥 치미는 현기증에 차가운 교문 기둥을 짚어선 |
| 3 | `start_3` | {name} | school | 없음 |  |  | *주머니 속 휴대폰이 짧게 떨린다. 예전 학교 단체방  |
| 4 | `name_input_scene` | 시스템 | school | 없음 |  |  | 전학생, 이름이 뭐야? |
| 5 | `gate_1` | {name} | school | 없음 |  |  | *교문 그늘 아래 서 있던 긴 생머리의 여학생이 안경테 |
| 6 | `seoyeon_meet_1` | 서연 | school | seyoun_normal |  |  | 혹시 오늘 온 전학생? {name} 맞지? |
| 7 | `seoyeon_meet_2` | 서연 | school | seyoun_normal |  |  | 가슴팍 명찰도 {name}이네. 반가워. *단정한 손끝 |
| 8 | `seoyeon_meet_3` | {name} | school | seyoun_normal |  |  | 맞는데. 내 얼굴은 어떻게 한 번에 알아봤어? |
| 9 | `seoyeon_meet_4` | 서연 | school | seyoun_normal |  |  | 학생회장이거든. 새로 온 전학생 맞이하는 것도 내 몫이 |
| 10 | `seoyeon_meet_5` | 서연 | school | seyoun_normal |  |  | 이쪽으로 따라와. 조회 시작하기 전에 15분 안으로 학 |
| 11 | `seoyeon_meet_6` | {name} | school | seyoun_normal |  |  | 첫날부터 학생회장이 직접 안내라니 좀 떨리는데. |
| 12 | `seoyeon_meet_7` | 서연 | school | seyoun_normal |  |  | 원래 내가 맡은 일이니까 괜히 어렵게 생각할 것 없어. |
| 13 | `seoyeon_meet_8` | 서연 | school | seyoun_normal |  |  | 자, 가자. *몸을 돌리는 서연의 교복 셔츠 깃에서 햇 |
| 14 | `seoyeon_choice` | {name} | school | seyoun_normal |  |  | *앞서 걷는 서연의 단정한 뒷모습을 보며 입을 연다.* |
| 15 | `choice_dismiss_1` | 서연 | school | seyoun_normal |  |  | 첫날인데 정말 혼자 찾아가도 괜찮겠어, {name}?  |
| 16 | `choice_dismiss_2` | 서연 | school | seyoun_normal |  |  | 네가 그렇다면 억지로 끌고 사진 않을게. 대신 교실 위 |
| 17 | `choice_dismiss_3` | 서연 | school | seyoun_back |  |  | *클립보드를 품에 고쳐 안은 채 흔들림 없는 걸음으로  |
| 18 | `classroom_1` | {name} | room_school | 없음 |  |  | *드르륵, 교실 앞문을 열자 왁자지껄하던 공기 위로 수 |
| 19 | `classroom_2_b` | {name} | room_school | teacher_normal |  |  | *교탁 앞에는 20대 후반쯤 되어 보이는 담임선생님이  |
| 20 | `classroom_3` | 담임 | room_school | teacher_normal |  |  | 자, 다들 주목. 오늘부터 우리 반 식구가 된 전학생이 |
| 21 | `classroom_3_b` | {name} | room_school | teacher_normal |  |  | 오늘 전학 온 {name}입니다. 잘 부탁드립니다. * |
| 22 | `classroom_5_b` | 담임 | room_school | teacher_normal |  |  | 그래, {name}. 우리 반에 온 걸 환영해. 급할  |
| 23 | `classroom_5_c` | {name} | room_school | teacher_normal |  |  | *낯선 교실 공기에 섞여 내 숨소리가 잦아드는 사이 교 |
| 24 | `classroom_dain_1` | 다인 | room_school | dain_normal |  |  | 오, 전학생! 드디어 우리 반에도 새 얼굴이 들어왔네! |
| 25 | `classroom_dain_2` | 다인 | room_school | yuna_normal |  |  | 이쪽 봐, 이쪽! *산뜻한 갈색 숏컷에 활동적인 배구부 |
| 26 | `classroom_dain_3` | 담임 | room_school | teacher_normal |  |  | 다인아, 아침부터 목소리 좀 낮추자. 그리고 교실 안에 |
| 27 | `classroom_dain_4` | 다인 | room_school | yuna_normal |  |  | 에이, 쌤도 참. 이게 세상에서 제일 편하단 말이에요! |
| 28 | `classroom_dain_5` | 다인 | room_school | yuna_normal |  |  | 네 자리는 여기야, 여기! *아이들의 웃음소리 사이로  |
| 29 | `classroom_dain_5_b` | 담임선생님 | room_school | teacher_normal |  |  | 다인아, 적어도 출석 부르는 동안만이라도 진정 좀 하자 |
| 30 | `classroom_dain_5_c` | 담임 | room_school | teacher_normal |  |  | 지금부터 그 에너지를 다 쓰면 어떡해. 아직 1교시 종 |
| 31 | `classroom_dain_5_d` | 담임선생님 | room_school | teacher_angry |  |  | *담임은 작게 고개를 저으며 출석부 다음 장을 부드럽게 |
| 32 | `classroom_yuna_1` | {name} | room_school | yuna_bored |  |  | *소란스러운 교실 풍경과 동떨어진 창가 맨 뒷자리, 봄 |
| 33 | `classroom_yuna_2` |  | 없음 | 없음 |  |  |  |
| 34 | `classroom_yuna_4` | {name} | room_school | yuna_bored |  |  | *앞줄에 앉은 학생 하나가 내 소매를 스치며 작게 속삭 |
| 35 | `classroom_seat_1` | 담임선생님 | room_school | teacher_normal |  |  | *출석부를 덮은 담임이 창가 쪽에서 한 줄 건너편 빈자 |
| 36 | `classroom_seat_2` | 다인 | room_school | yuna_normal |  |  | 오, 딱 내 옆자리네? 멀뚱히 서 있지 말고 얼른 와서 |
| 37 | `classroom_minsu_1` | {name} | room_school | minsu_normal |  |  | *가방을 내려놓고 의자를 빼려는데 앞자리에 앉아 있던  |
| 38 | `classroom_minsu_2` | 민수 | room_school | minsu_smirk |  |  | 야, 전학생. 우리 반에 온 걸 환영한다. 그리고 미리 |
| 39 | `classroom_minsu_3` | {name} | room_school | minsu_smirk |  |  | 갑자기 무슨 각오? |
| 40 | `classroom_minsu_2_b` | 민수 | room_school | minsu_normal |  |  | *옆자리의 다인을 향해 슬쩍 턱짓하며 씨익 웃는다.*  |
| 41 | `classroom_dain_talk_1` | {name} | room_school | minsu_normal |  |  | *장난스럽게 돌아앉는 앞자리 남학생의 교복 명찰에는 ' |
| 42 | `classroom_dain_talk_2` | 다인 | room_school | yuna_normal |  |  | 저 녀석 말은 신경 쓰지 마! 그보다 나 궁금한 거 하 |
| 43 | `classroom_dain_talk_3` | 다인 | room_school | yuna_normal |  |  | 야, {name}. 너 평소에 몸 움직이는 거나 운동  |
| 44 | `classroom_dain_talk_4` | {name} | room_school | yuna_normal |  |  | 운동은 왜, 갑자기? |
| 45 | `classroom_dain_talk_5` | 다인 | room_school | yuna_normal |  |  | 아니, 오늘 방과후에 리시브 연습을 좀 더 하고 싶은데 |
| 46 | `classroom_dain_talk_6` | {name} | room_school | yuna_normal |  |  | 전학생을 첫날부터 인간 볼 머신으로 쓰려고? |
| 47 | `classroom_dain_talk_7` | 다인 | room_school | yuna_normal |  |  | 에이, 설마! 그래도 기계보다는 사람이랑 호흡 맞추는  |
| 48 | `classroom_dain_talk_8` | 다인 | room_school | yuna_normal |  |  | 어때, 같이 해 볼래? *다인의 따뜻한 검지가 내 책상 |
| 49 | `classroom_yuna_note_1` | {name} | room_school | yuna_bored |  |  | *그때 뒷자리에서 반듯하게 접힌 종이쪽지 하나가 책상  |
| 50 | `classroom_yuna_note_3` | 유나 | room_school | yuna_bored |  |  | *조심스럽게 펼치자 은은한 연보라색 잉크 글씨와 모서리 |
| 51 | `classroom_yuna_note_5` | {name} | room_school | yuna_bored |  |  | *내가 고개를 들자 창가 햇살에 비치던 유나의 하얀 손 |
| 52 | `classroom_yuna_note_6` | {name} | room_school | yuna_bored |  |  | *1교시 시작을 알리는 종소리가 교실 안을 메운다. 창 |
| 53 | `lunch_start` | {name} | school_hallway | 없음 |  |  | *점심시간을 알리는 종소리와 함께 교실 공기가 들뜬다. |
| 54 | `lunch_start_4` | 서연 | school_hallway | seyoun_normal |  |  | 아까 말한 대로 옥상 올라올 거지? *계단참에서 걸음을 |
| 55 | `lunch_start_4_b` | {name} | school_hallway | dain_normal |  |  | *대답하려는 순간 옆에서 다가온 다인의 따뜻한 손바닥이 |
| 56 | `lunch_start_5` | 다인 | school_hallway | dain_normal |  |  | 야, 아직 점심 안 먹었지? 나랑 매점 뛰어가자. 빵  |
| 57 | `lunch_start_6` | 유나 | school_hallway | yuna_normal |  |  | 난 도서관 갈 건데. *내 옆을 스쳐 지나가며 가방끈을 |
| 58 | `lunch_start_7` | {name} | school_hallway | 없음 |  |  | *바람 부는 옥상과 달콤한 빵 냄새가 나는 매점, 그리 |
| 59 | `lunch_choice` | {name} | school_hallway | 없음 |  |  | *첫날의 점심시간, 누구의 발걸음을 따라갈까?* |
| 60 | `lunch_dain_1` | 다인 | store | dain_laugh |  |  | 휴, 일등으로 도착! 여기가 우리 학교 매점이야. 줄  |
| 61 | `lunch_dain_1_aff_default` | 다인 | store | dain_normal |  |  | 갓 구운 빵 냄새 장난 아니지? 사람은 좀 북적거려도  |
| 62 | `lunch_dain_2` | 다인 | store | dain_normal |  |  | 바삭한 소보로빵에 시원한 딸기우유! 이 조합은 언제 먹 |
| 63 | `lunch_dain_3` | {name} | store | dain_normal |  |  | 근데 아까 진 사람이 빵 사기로 했잖아. 무슨 내기로  |
| 64 | `lunch_dain_4` | 다인 | store | dain_normal |  |  | 당연히 가위바위보 단판 승부지. 깔끔하잖아! |
| 65 | `lunch_dain_5` | {name} | store | dain_normal |  |  | 가위바위보에 목숨 거는 사람은 또 처음 보네. |
| 66 | `lunch_dain_6` | 다인 | store | dain_normal |  |  | 지금 쫄아서 빼면 무조건 네가 사는 걸로 친다? |
| 67 | `lunch_dain_7` | {name} | store | dain_normal |  |  | 누가 뺀대? 당장 덤벼. |
| 68 | `lunch_dain_8` | {name} | store | dain_normal |  |  | *다인과 마주 선 채 주먹을 쥐고 숨을 고른다.* |
| 69 | `lunch_dain_9` | 다인 | store | dain_normal |  |  | 안 내면 진다, 가위, 바위, 보! |
| 70 | `lunch_dain_10` | {name} | store | dain_normal |  |  | *내 주먹 앞으로 다인의 활짝 펴진 가위가 멈춘다. 다 |
| 71 | `lunch_dain_11` | 다인 | store | dain_normal |  |  | 헐, 내가 졌네? 잠깐만, 원래 삼세판인 거 알지? 한 |
| 72 | `lunch_dain_12` | {name} | store | dain_pout |  |  | 방금 단판 승부라고 외친 사람이 누구더라. |
| 73 | `lunch_dain_12_b` | 다인 | store | dain_pout |  |  | 아, 진짜 얄미워! 알았어, 깔끔하게 내가 쏜다! 이모 |
| 74 | `lunch_dain_14` | 다인 | store | dain_pout |  |  | *계산대 위에 동전을 경쾌하게 내려놓고 따뜻한 소보로빵 |
| 75 | `lunch_dain_15` | {name} | store | dain_normal |  |  | *매점 옆 등나무 그늘 벤치에 나란히 앉아 빵 봉지를  |
| 76 | `lunch_dain_16` | 다인 | store | dain_normal |  |  | *빵 봉지를 시원하게 뜯으며 내 쪽을 빤히 본다.* 야 |
| 77 | `lunch_dain_17` | {name} | store | dain_normal |  |  | 왜, 내가 금방 지칠까 봐 걱정돼? |
| 78 | `lunch_dain_18` | 다인 | store | dain_laugh |  |  | 걱정은 무슨! 앞으로 내 옆에 붙어 다니려면 기본 체력 |
| 79 | `lunch_dain_19` | {name} | store | dain_laugh |  |  | 은근슬쩍 자기 자랑하는 줄 알았네. |
| 80 | `lunch_dain_20` | 다인 | store | dain_laugh |  |  | 자랑? 내 홍보 말하는 거야, 아니면 운동 신기록 말하 |
| 81 | `lunch_dain_21` | {name} | store | dain_normal |  |  | 지금은 홍보 쪽이지. 옆자리에서 같이 뛰어놀 체력 좋은 |
| 82 | `lunch_dain_22` | 다인 | store | dain_normal |  |  | *다인의 손에 들린 분홍빛 딸기우유 팩 모서리가 작게  |
| 83 | `lunch_dain_23` | 다인 | store | dain_laugh |  |  | 크흠, 단번에 들켰네. 그래서 진짜로 운동 신경은 좀  |
| 84 | `lunch_dain_choice` | 다인 | store | dain_laugh |  |  | *빨대를 입에 문 다인이 내 눈을 들여다보며 어깨가 닿 |
| 85 | `lunch_dain_c1_1` | 다인 | store | dain_laugh |  |  | 오, 자신 있다는 거지? 그럼 오늘 방과후에 체육관으로 |
| 86 | `lunch_dain_c1_2` | 다인 | store | dain_laugh |  |  | 야, 진짜 벌써부터 기대된다! *신나서 웃으며 벤치에서 |
| 87 | `lunch_dain_after` | {name} | store | dain_laugh |  |  | *남은 빵 부스러기를 털어내고 벤치에서 일어서려는데 다 |
| 88 | `lunch_dain_after_2` | 다인 | store | dain_normal |  |  | 야, {name}. |
| 89 | `lunch_dain_after_3` | {name} | store | dain_normal |  |  | 응? 왜? |
| 90 | `lunch_dain_after_4` | 다인 | store | dain_normal |  |  | 너 이 학교 전학 와서 첫 번째로 밥 먹은 친구가 바로 |
| 91 | `lunch_dain_after_5` | 다인 | store | dain_normal |  |  | *장난스레 쥔 주먹으로 내 어깨를 툭 치더니 탄력 있는 |
| 92 | `lunch_dain_freetalk` | 다인 | store | dain_normal |  |  | *빈 빵 봉지를 작게 접어 주머니에 찔러 넣고 벤치 등 |
| 93 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *5교시 수업을 알리는 차임벨이 울려 퍼지며 짧고도 설 |
| 94 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *붉은 노을이 스며드는 방과후 복도. 주머니 속에서 진 |
| 95 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 96 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 그 가벼운 마지막 한 줄에 시선이  |
| 97 | `after_kakao_5` |  | 없음 | 없음 |  | 🌅 |  |
| 98 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *한참을 망설이다 조용히 단체방 나가기를 누른다. 텅  |
| 99 | `after1_jealousy_dain_1` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 아까 점심때 매점 벤치에서 다인이랑 같이 있던데. 첫날 |
| 100 | `after1_jealousy_dain_2` | {name} | school_hallway | seyoun_laugh |  | 🌅 | *서연이 품에 안은 클립보드 모서리를 반듯하게 고쳐 잡 |
| 101 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *휴대폰을 주머니에 넣고 석양이 길게 드리운 복도를 따 |
| 102 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도 모퉁이를 돌려는데 등 뒤에서 운동화 바닥이 마룻 |
| 103 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 거기 앞 조심해! |
| 104 | `after_miss_dain_3` | 다인 | school_hallway | dain_normal |  | 🌅 | 휴, 아슬아슬하게 비켜 줬네! *내 어깨를 스치며 바람 |
| 105 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 방금 반사신경 꽤 괜찮았는데? 역시 운동 좀 해  |
| 106 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 하마터면 부딪힐 뻔했잖아. 복도에서 웬 전력질주야? |
| 107 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 배구부 집합 시간 늦었거든! 지금 당장 체육관 뛰어가야 |
| 108 | `after_miss_dain_6_b` | {name} | school_hallway | dain_pain |  | 🌅 | *돌아서서 두어 걸음 내딛던 다인이 순간 걸음을 멈추고 |
| 109 | `after_miss_dain_7` | 다인 | school_hallway | dain_laugh |  | 🌅 | 참, 내 이름 다인이야! 내일 와서 이름 까먹으면 안  |
| 110 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞 복도를 지나는데 붉은 눈동자의 여학생이 소 |
| 111 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 방금 책 사이에서 이거 떨어졌어. |
| 112 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *바닥에 내려앉은 낡은 책갈피를 조심스레 주워 건넨다. |
| 113 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | 다행이다, 모서리 안 구겨졌네. *하얀 손가락으로 책갈 |
| 114 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 주워 줘서 고마워. |
| 115 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *소중한 것을 감추듯 책갈피를 책등 깊숙이 끼워 넣고는 |
| 116 | `after_miss_yuna_4` |  | 없음 | 없음 |  | 🌅 |  |
| 117 | `after_miss_seoyeon_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *가방을 메고 신발장으로 내려가려는데 계단 앞 복도에서 |
| 118 | `after_miss_seoyeon_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 너 아까 점심시간에 어디 갔었어? |
| 119 | `after_miss_seoyeon_3` | {name} | school_hallway | seyoun_normal |  | 🌅 | 점심시간에 어디라니? |
| 120 | `after_miss_seoyeon_4` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 일부러 옥상 문까지 열어 두고 있었는데 끝까지 안 올라 |
| 121 | `after_miss_seoyeon_5` | {name} | school_hallway | seyoun_normal |  | 🌅 | 설마 옥상에서 계속 나 기다린 거야? |
| 122 | `after_miss_seoyeon_6` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 기다리긴 누가 기다려, 내 도시락 먼저 먹고 있었지.  |
| 123 | `after_miss_seoyeon_7` | {name} | school_hallway | seyoun_normal |  | 🌅 | *서연은 클립보드를 가슴께로 끌어안으며 시선을 살짝 피 |
| 124 | `after_miss_seoyeon_8` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 내일 점심엔 다른 데로 새지 마. |
| 125 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교를 알리는 안내 방송이 끝난 뒤 노을빛만 남은 복 |
| 126 | `after_hidden_nurse_intro` | {name} | school_hallway | 없음 |  | 🌅 | *갑자기 핑 도는 어지럼증에 차가운 복도 벽을 짚고 멈 |
| 127 | `after_hidden_nurse_choice` | {name} | school_hallway | 없음 |  | 🌅 | *아침부터 낯선 시선과 소음 속에 부대낀 피로가 한꺼번 |
| 128 | `after_hidden_nurse_intro_b` | {name} | school_hallway | 없음 |  | 🌅 | *가쁜 숨을 한 번 골라 쉬고 서늘한 금속 문손잡이를  |
| 129 | `after_nurse_d1_aff` |  | nurse_room | 없음 |  | 🌅 |  |
| 130 | `after_nurse_d1_cool` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *진료 차트를 덮으며 시선을 든다.* 지금은 퇴근 전  |
| 131 | `night_start` | {name} | room_my | 없음 |  |  | *집으로 돌아와 아직 낯선 새 교복을 옷걸이에 걸어 두 |
| 132 | `night_start_3` | {name} | room_my | 없음 |  |  | *고요한 방 안, 머리맡에 둔 휴대폰이 짧게 진동하며  |
| 133 | `night_msg_dain_1` | 다인 | room_my | dain_normal | 0.35 |  | 야 내가 가위바위보 단판에서 질 줄은 꿈에도 몰랐다 |
| 134 | `night_msg_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | 내일 점심엔 무조건 리벤지 매치다 각오해 ㅋㅋ |
| 135 | `night_msg_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | 아 오늘 뜯긴 소보로빵 값 생각할수록 아깝네 진짜! |
| 136 | `night_msg_dain_4` | {name} | room_my | dain_normal | 0.35 |  | *숨 쉴 틈도 없이 세 줄이 연달아 날아온다. 나도 모 |
| 137 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 대화창을 닫으려는데 상단 알림 바에 학교 앱  |
| 138 | `night_late_transition` | {name} | room_my | 없음 |  |  | *불을 끄고 막 눈을 감으려는데 정적을 깨고 휴대폰이  |
| 139 | `night_late_branch` | {name} | room_my | 없음 |  |  | *어두운 방 안, 손에 쥔 액정 화면이 하얗게 빛을 낸 |
| 140 | `night_dain_late_1` | 다인 | room_my | dain_normal | 0.35 |  | 야 너 설마 벌써 자는 거 아니지? |
| 141 | `night_dain_late_2` | 다인 | room_my | dain_normal | 0.35 |  | 내일 아침 일찍 운동장 나와서 몸 풀 사람 선착순 한  |
| 142 | `night_dain_late_3` | 다인 | room_my | dain_normal | 0.35 |  | 참고로 거절은 절대 안 받음 ㅋㅋ |
| 143 | `night_dain_late_4` | {name} | room_my | dain_normal | 0.35 |  | *어이없어서 웃음이 새어 나오는데 내 손가락은 벌써 답 |
| 144 | `night_dain_late_4_b` | {name} | room_my | dain_normal | 0.35 |  | *다인의 메시지 아래로 신난 강아지 같은 이모티콘들이  |
| 145 | `night_end_1` | {name} | room_my | 없음 |  |  | *휴대폰을 내려놓고 어두운 천장을 올려다본다. 옷걸이에 |
| 146 | `night_end_3` | {name} | room_my | 없음 |  |  | *연락처에 나란히 저장된 새로운 이름들을 한 번 더 눈 |
| | **Day 2** | | | | | | |
| 147 | `morning2_start` | {name} | room_school | 없음 |  |  | *전학 온 지 이틀째 아침. 교복 소매에 남았던 빳빳한 |
| 148 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 149 | `morning2_greet_dain_1` |  | 없음 | 없음 |  |  |  |
| 150 | `morning2_greet_dain_1_fun` | 다인 | room_school | yuna_normal |  |  | 야, 어제 진짜 재밌었지! 오늘도 나랑 같이 신나는 거 |
| 151 | `morning2_greet_dain_2` | 다인 | room_school | yuna_normal |  |  | 야, 너 아직 잠 덜 깼어? 얼른 이쪽 봐, 아침부터  |
| 152 | `morning2_greet_dain_others` | {name} | room_school | yuna_normal |  |  | 다인아, 아침 조회 시작하기도 전에 기운 다 빠지겠다. |
| 153 | `morning2_greet_dain_others_seo` | 서연 | room_school | yuna_normal |  |  | 아침부터 에너지가 넘치네. |
| 154 | `morning2_greet_dain_others_yuna` | {name} | room_school | yuna_bored |  |  | *뒷자리 유나가 쥐고 있던 만년필 끝이 멈칫하며 하얀  |
| 155 | `morning2_yuna_seen` | 유나 | room_school | yuna_normal |  |  | ...너 혹시 전학 오기 전에도 이 학교에 와 본 적  |
| 156 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *가방을 걸고 자리에 앉으려는데 책상 한가운데에 정갈하 |
| 157 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 158 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가던 서연이 열린 교실 앞문 틈으로 고개를 |
| 159 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 바쁜 학생회장이 아침부터 남의 교실 앞까지 직접 인사하 |
| 160 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 교무실에 서류 갖다주러 가는 길에 잠깐 멈춘 거야. 그 |
| 161 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | 얼굴 확인했으니까 이제 간다. 아침 조회 늦지 말고.  |
| 162 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연의 긴 머리카락이 사라진 복도 쪽을 바라보고 있는 |
| 163 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 온 지 이틀 만에 학생회장님이 직접 문 앞까 |
| 164 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 그건 그냥 네가 인기가 없는 게 아닐까. |
| 165 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 뼈 때리지 마라, 사실이긴 한데 지금 그게 핵심이 아니 |
| 166 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *복도 유리창 너머로 클립보드를 가슴에 안은 서연이 귓 |
| 167 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 오호, 도도한 회장님도 우리 전학생한테 꽤 관심 있나  |
| 168 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | 방금 '우리' 전학생이라고 했어? |
| 169 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 당연하지, 같은 반에다 바로 옆자리 짝꿍이잖아! 그 정 |
| 170 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *1교시가 끝나고 시끌벅적한 교실 열기를 식히려 복도  |
| 171 | `morning2_seo_dust_1` | 서연 | school_hallway | seyoun_normal |  |  | 너 1교시 수업 듣는 동안 대체 뭘 한 거야. *쉬는  |
| 172 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 움직이지 말고 잠깐 가만히 있어 봐. |
| 173 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *한 걸음 다가선 서연의 하얀 손끝이 내 교복 어깨에  |
| 174 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 어깨에 분필 가루 같은 게 묻어 있었어. |
| 175 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | 말도 없이 갑자기 손이 훅 들어와서 놀랐잖아. *괜히  |
| 176 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 뭘 그렇게까지 놀라? 그냥 먼지 털어 준 건데. |
| 177 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *분명 먼지는 다 털어 냈는데도 서연의 손끝이 닿았던  |
| 178 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 방금 그거 뭐야? 학생회장이 네 어깨 만진 거 맞 |
| 179 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 만진 게 아니라 어깨에 묻은 먼지 털어 준 거야. |
| 180 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 수상한데, 거기 진짜로 먼지가 붙어 있긴 했어? |
| 181 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | 진짜로 먼지 털어 준 것뿐이라니까. 왜 눈을 그렇게 뜨 |
| 182 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *아침에 받은 유나의 쪽지를 손안에 쥔다. 수업 사이마 |
| 183 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *이틀째 점심시간, 누구의 곁으로 향할까.* |
| 184 | `lunch2_dain_1_check` | {name} | school_hallway | 없음 |  |  | *다인의 활기찬 발걸음에 맞춰 지하 매점 쪽으로 내려간 |
| 185 | `lunch2_dain_1` | {name} | store | dain_normal |  |  | *다인과 다시 찾은 매점 앞. 어제의 패배를 설욕하겠다 |
| 186 | `lunch2_dain_tone` |  | store | 없음 |  |  |  |
| 187 | `lunch2_dain_2` | 다인 | store | dain_normal |  |  | 어제 밤새 이미지 트레이닝 끝냈다. 오늘은 무조건 네가 |
| 188 | `lunch2_dain_3` | {name} | store | dain_normal |  |  | 어제 매점 들어올 때도 똑같이 큰소리쳤던 것 같은데. |
| 189 | `lunch2_dain_4` | 다인 | store | dain_normal |  |  | 에이, 어제는 전학생 기 살려 주려는 가벼운 워밍업이었 |
| 190 | `lunch2_dain_5` | {name} | store | dain_normal |  |  | *기합 소리와 함께 뻗은 가위바위보. 오늘도 다인의 손 |
| 191 | `lunch2_dain_6` | 다인 | store | dain_pout |  |  | 잠깐만, 이거 진짜 사기나 조작 아니야? 너 내 눈 보 |
| 192 | `lunch2_dain_7` | {name} | store | dain_pout |  |  | 단판 가위바위보를 무슨 수로 조작해. |
| 193 | `lunch2_dain_8` | 다인 | store | dain_pout |  |  | 으아, 알았어 알았다고! 승복한다! 이모님, 여기 소보 |
| 194 | `lunch2_dain_9` | {name} | school_hallway | seyoun_normal |  |  | 사람 많으니까 이쪽 창가에 기대서 먹자. *따뜻한 빵  |
| 195 | `lunch2_dain_11` | 다인 | school_hallway | dain_normal |  |  | 야, 방금 학생회장님 왜 저래? 우리 쪽을 왜 그렇게  |
| 196 | `lunch2_dain_12` | {name} | school_hallway | dain_normal |  |  | 글쎄, 그냥 지나가다 본 거 아닐까. |
| 197 | `lunch2_dain_13` | 다인 | school_hallway | dain_normal |  |  | 흐음, 수상한데. 너 혹시 나 몰래 회장님이랑도 엄청  |
| 198 | `lunch2_dain_choice` | 다인 | school_hallway | dain_normal |  |  | {name}, 내가 방금 물어봤잖아. 네 대답 듣기 전 |
| 199 | `lunch2_dain_c2_1` | 다인 | school_hallway | dain_normal |  |  | 학교 안내받은 정도라... 그래, 네가 그렇다면 그런  |
| 200 | `lunch2_dain_end` | {name} | school_hallway | dain_pout |  |  | *다인이 부루퉁하게 남은 빵을 씹는 동안 서연이 스쳐  |
| 201 | `lunch2_dain_end_b` | {name} | playground | 없음 |  |  | *오후 5교시 체육 시간, 공을 쫓던 옆 반 학생과 강 |
| 202 | `lunch2_dain_end_c` | 체육교사 | playground | 없음 |  |  | 상처에 흙 들어갔겠다. 빨리 보건실 가서 소독부터 받고 |
| 203 | `lunch2_dain_end_ins4_first` | {name} | nurse_room | 없음 |  |  | *조심스레 보건실 문을 열자 서늘하고 알싸한 소독약 냄 |
| 204 | `lunch2_dain_end_ins5_first` | 보건선생님 | nurse_room | nurse_normal |  |  | *진료 기록지를 덮으며 안경 너머로 나를 바라본다.*  |
| 205 | `lunch2_dain_end_f` | {name} | nurse_room | nurse_normal |  |  | 체육 시간에 넘어져서 팔꿈치가 좀 까졌어요. |
| 206 | `lunch2_dain_end_ins7_first` | 보건선생님 | nurse_room | nurse_normal |  |  | 낯선 운동장에서 뛰다 보면 다칠 수도 있지. 이리 와서 |
| 207 | `lunch2_dain_end_i` | {name} | nurse_room | nurse_normal |  |  | 팔꿈치 아래에 수건까지 받치는 거예요? 생각보다 처치  |
| 208 | `lunch2_dain_end_j` | 보건선생님 | nurse_room | nurse_normal |  |  | 소독약 닿으면 조금 따가울 거야. 어깨랑 팔에 힘 쭉  |
| 209 | `lunch2_dain_end_l` | 보건선생님 | nurse_room | nurse_normal |  |  | *상처 위로 숨결을 가볍게 불어 준 뒤 방수 밴드를 밀 |
| 210 | `lunch2_dain_end_m` | {name} | nurse_room | nurse_normal |  |  | 벌써 다 붙인 거예요? 관절 자리라 팔 접으면 밴드가  |
| 211 | `lunch2_dain_end_n` | 보건선생님 | nurse_room | nurse_normal |  |  | 지금 천천히 한 번 접어 봐. 살이 당기거나 따갑지는  |
| 212 | `lunch2_dain_end_o` | {name} | nurse_room | nurse_normal |  |  | *선생님이 잡아 준 대로 팔을 깊게 접었다 펴 보지만  |
| 213 | `lunch2_dain_end_p` | 보건선생님 | nurse_room | nurse_normal |  |  | 옛날에 병원에서 익힌 작은 요령이야. 움직임 많은 관절 |
| 214 | `lunch2_dain_end_q` |  | 없음 | 없음 |  |  |  |
| 215 | `lunch2_dain_end_r` | {name} | nurse_room | nurse_normal |  |  | *가위를 넣으려 열린 책상 서랍 속으로 빛바랜 연두색  |
| 216 | `lunch2_dain_end_s` | 보건선생님 | nurse_room | nurse_normal |  |  | *닫힌 서랍 쪽을 한 번 내려다보더니 내 눈을 똑바로  |
| 217 | `lunch2_dain_end_t` | {name} | nurse_room | nurse_normal |  |  | *장난스레 코코아 이야기를 건네는 뒤에도 선생님의 하얀 |
| 218 | `lunch2_dain_end_u` | 보건선생님 | nurse_room | nurse_normal |  |  | *이내 손잡이에서 힘을 빼고 가운 주머니에 손을 넣는다 |
| 219 | `lunch2_dain_end_v` |  | 없음 | 없음 |  |  |  |
| 220 | `lunch2_dain_end_w` | 보건선생님 | nurse_room | nurse_normal |  |  | 자, 처치 끝났으니 얼른 교실로 가 봐. 오늘 밤 샤워 |
| 221 | `lunch2_dain_end_x` | {name} | nurse_room | nurse_normal |  |  | 내일도 보건실 와서 새 밴드로 갈아야 해요? |
| 222 | `lunch2_dain_end_y` | 보건선생님 | nurse_room | nurse_normal |  |  | 무조건 매일 갈 필요는 없어. 내일 아침 상처 상태 보 |
| 223 | `lunch2_dain_end_z` | 보건선생님 | nurse_room | nurse_normal |  |  | 모서리가 들뜨거나 진물이 배면 바로 나한테 오고 말짱하 |
| 224 | `lunch2_dain_end_c2` | 보건선생님 | nurse_room | nurse_normal |  |  | 남은 체육 수업 중에 상처가 쓰리면 참지 말고 선생님께 |
| 225 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *종례가 끝난 방과 후 교실. 쉬는 시간마다 꺼냈던 휴 |
| 226 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 당장 체육관으로 튀어 와! 오늘은 진짜 제대로 된 내기 |
| 227 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 방과후에 학생회실로 잠깐 와 줄 수 있어? 오늘따라 일 |
| 228 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게선 따로 온 메시지가 없다. 대신 주머니 속  |
| 229 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *석양이 물들기 시작하는 방과후, 어디로 발걸음을 옮길 |
| 230 | `after2_seo_1` | {name} | student_room | seyoun_sad |  | 🌅 | *방과후의 고요한 학생회실. 긴 회의용 책상 위 서류  |
| 231 | `after2_seo_tone` |  | student_room | 없음 |  | 🌅 |  |
| 232 | `after2_seo_cool_1` | 서연 | student_room | seyoun_normal |  | 🌅 | 왔으면 여기 표시된 목록부터 분류해 줘. *사무적인 손 |
| 233 | `after2_seo_cool_work` | {name} | student_room | seyoun_normal |  | 🌅 | *말없이 서류 분류를 시작한다. 봄 학기 행사 예산안부 |
| 234 | `after2_seo_9` | {name} | student_room | seyoun_normal |  | 🌅 | *창가의 블라인드 그림자가 책상 끝까지 길게 누울 무렵 |
| 235 | `after2_seo_leave` | 서연 | student_room | seyoun_normal |  | 🌅 | *가지런히 정돈된 서류 더미 위를 두 손으로 가볍게 눌 |
| 236 | `after2_seo_end` |  | 없음 | 없음 |  | 🌅 |  |
| 237 | `after2_seo_rival_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 238 | `after2_seo_rival_dain_mid` | 다인 | school_hallway | dain_normal |  | 🌅 | *밀고 오던 공 바구니를 세운다.* 이제 다 끝났어?  |
| 239 | `after2_seo_rival_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 240 | `after2_seo_rival_yuna_low` | {name} | school_hallway | yuna_normal |  | 🌅 | *계단참에 서 있던 유나가 옆으로 비켜서며 짧게 눈인사 |
| 241 | `after2_group_seoyeon_companion` | 서연 | student_room | 없음 |  | 🌅 | *학생회실에서 겹친 일정 두 칸을 짚는다.* 둘 다 네 |
| 242 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *미묘한 여운이 감도는 대화를 마치고 가방을 고쳐 멘  |
| 243 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 244 | `minsu_warn_1` | {name} | school | 없음 |  | 🌅 | *노을이 지는 하교길. 교문을 막 나서는데 등 뒤에서  |
| 245 | `minsu_warn_1_b` | 민수 | school | minsu_normal |  | 🌅 | *내 보폭에 맞춰 옆에 나란히 서더니 주머니에 두 손을 |
| 246 | `minsu_warn_2` | 민수 | school | minsu_smirk |  | 🌅 | 야, 전학생. |
| 247 | `minsu_warn_3` | {name} | school | minsu_smirk |  | 🌅 | 응? 왜 불러? |
| 248 | `minsu_warn_4` | 민수 | school | minsu_smirk |  | 🌅 | 너 요즘 학교 다니는 거 꽤 재밌냐? |
| 249 | `minsu_warn_4_b` | {name} | school | minsu_normal |  | 🌅 | *민수는 내 쪽을 보지 않고 교문 건너편 깜빡이는 횡단 |
| 250 | `minsu_warn_5` | {name} | school | minsu_smirk |  | 🌅 | 갑자기 그게 무슨 소리야? |
| 251 | `minsu_warn_6` | 민수 | school | minsu_smirk |  | 🌅 | 점심엔 한 명, 방과후엔 또 한 명. 넌 재밌겠지. — |
| 252 | `night2_start` | {name} | room_my | 없음 |  |  | *따뜻한 물로 샤워를 마치고 젖은 머리를 털며 침대에  |
| 253 | `night2_msg_1` |  | 없음 | 없음 |  |  |  |
| 254 | `night2_msg_seo_specific` | 서연 | room_my | seyoun_normal | 0.35 |  | 오늘 학생회실 와서 도와준 거 고마웠어. 네 덕분에 평 |
| 255 | `night2_msg_seo_specific_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 일 잘하는 거 알았으니까 다음에도 또 부를지 몰라. 미 |
| 256 | `night2_msg_dain_general` | 다인 | room_my | dain_normal | 0.35 |  | 야 내일 점심엔 무조건 매점 같이 가자! |
| 257 | `night2_msg_dain_general_merge` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 점심에 옥상 올라올래? 내일도 바람 꽤 선선할 거 |
| 258 | `night2_msg_yuna_general` | 유나 | room_my | yuna_normal | 0.35 |  | 내일도 도서관 별관 쪽으로 올 거야? |
| 259 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *나란히 도착한 대화방 세 개를 번갈아 바라본다. 누구 |
| 260 | `night2_choice` | {name} | room_my | 없음 |  |  | *세 개의 말풍선 중 누구에게 가장 먼저 답장을 보낼까 |
| 261 | `night2_reply_dain_1` |  | 없음 | 없음 |  |  |  |
| 262 | `night2_reply_dain_1_first` | {name} | room_my | dain_normal | 0.35 |  | 내일 학교 앞에서 떡볶이 먹을래? 난 매운 건 좀 약한 |
| 263 | `night2_reply_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | 어라 너 설마 매운 거 잘 못 먹는 체질이야? |
| 264 | `night2_reply_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | 그럼 내일은 너 맞춰서 제일 순한 맛으로 시켜 줄게. |
| 265 | `night2_reply_dain_4` | 다인 | room_my | dain_normal | 0.35 |  | 아 근데 솔직히 안 매운 건 떡볶이라고 부르면 안 되지 |
| 266 | `night2_reply_dain_5` | {name} | room_my | dain_normal | 0.35 |  | *오늘 밤에도 다인다운 경쾌한 말풍선이 세 줄 연속으로 |
| 267 | `night2_reply_dain_react_default` | 다인 | room_my | dain_normal | 0.35 |  | ㅋㅋ 오케이 알겠어. 오늘 푹 자고 굿나잇! |
| 268 | `night2_dain_freetalk` | 다인 | room_my | dain_normal | 0.35 | 🌙 | 잠깐, 진짜 자기 전에. 오늘 제일 재밌었던 건 뭐였어 |
| 269 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 창을 정리하려는데 상단 알림 목록 사이에 학교 |
| 270 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 마치고 길게 숨을 내쉬며 베개 옆으로 휴대폰을 |
| 271 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *남은 두 사람에게도 답장을 보내려다 손가락이 굳는다. |
| 272 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *사진첩 스크롤을 끝까지 내리자 나타난 3개월 전 봄  |
| 273 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *차마 전송 버튼을 누르지 못했던 문장들이 휴대폰 메모 |
| 274 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 임시 저장 메모가 마지막 문장이다. 그 아래 |
| 275 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *떨리는 엄지손가락을 사진 아래 휴지통 삭제 아이콘 위 |
| 276 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *다시 켠 메신저 목록에는 아직 내가 답하지 못한 두  |
| 277 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *방금 닫았던 소정이의 사진을 한 번 더 열어 본다.  |
| 278 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *가슴 한구석이 묵직하게 내려앉아 끝내 나머지 두 개의 |
| 279 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면 위로 세 사람의 이름이 나란히 쌓여 있다.  |
| 280 | `night2_end_2_b` |  | 없음 | 없음 |  |  |  |
| 281 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *액정 불빛이 완전히 꺼진 뒤에도 미지근한 열기가 남은 |
| 282 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *잠이 오지 않아 부엌으로 나와 불을 켠다. 내일 싸  |
| 283 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *서툰 손길로 부쳐 낸 계란말이와 소시지, 김과 밥을  |
| | **Day 3** | | | | | | |
| 284 | `morning3_start` | {name} | school | 없음 |  |  | *전학 사흘째, 금요일 아침. 밤늦도록 깜빡이는 메시지 |
| 285 | `morning3_start_2` | {name} | school | 없음 |  |  | *어깨에 멘 가방끈을 꽉 쥐고 숨이 턱 끝까지 차오르도 |
| 286 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 287 | `morning3_dain_gate_1` | {name} | school | dain_normal |  |  | *교문 모퉁이 저편에서 다인이 포니테일을 휘날리며 전력 |
| 288 | `morning3_dain_gate_2` | 다인 | school | dain_normal |  |  | 야, 종 치기 직전이다! 얼른 뛰어! |
| 289 | `morning3_dain_gate_3` | 다인 | school | dain_normal |  |  | 자, 내 손 잡아! 같이 출발선 끊어야 제맛이지, 나만 |
| 290 | `morning3_dain_gate_4` | {name} | school | dain_normal |  |  | 손잡다 넘어질라. 나란히 뛰자. |
| 291 | `morning3_dain_gate_4_b` | 다인 | school | dain_normal |  |  | 좋아, 대신 한 발짝도 뒤처지기 없기다! |
| 292 | `morning3_dain_gate_5` | {name} | school | dain_normal |  |  | *다인과 어깨를 나란히 하고 바람을 가르며 달린다. 닫 |
| 293 | `morning3_dain_gate_5_b` | 다인 | school | dain_pain |  |  | 읏, 잠깐만. 아냐, 아무것도 아니니까 빨리 들어가자! |
| 294 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실 뒷문을 열자마자 세 방향에서 공기가 미묘하게 굳 |
| 295 | `morning3_react_dain_1` | 서연 | room_school | seyoun_normal |  |  | 아침부터 둘이 숨차게 뛰어왔네. 체력 소모가 심했으면  |
| 296 | `morning3_react_dain_2` | 유나 | room_school | yuna_normal |  |  | *유나는 고개를 숙인 채 노트 귀퉁이에 짧고 진한 직선 |
| 297 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *잠시 숨을 돌리려 나온 복도. 기다렸다는 듯 서연이  |
| 298 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | *복도 창가에서 서연이 반 걸음 다가서며 목소리를 낮춘 |
| 299 | `morning3_date_seo_skip` |  | school_hallway | 없음 |  |  |  |
| 300 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끄고는 눈이 마주치 |
| 301 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 자, 그럼 이제 내 차례지! 이번 주말에 나랑 오락실  |
| 302 | `morning3_date_dain_2` | 다인 | room_school | dain_normal |  |  | 난 다 들리게 물어본 거야. 쪽지보다 낫지? *다인이  |
| 303 | `morning3_date_dain_choice` | 다인 | room_school | dain_normal |  |  | 오락실 싫어하는 거 아니면 나랑도 시간 내 줘. 회장님 |
| 304 | `morning3_date_dain_accept` | {name} | room_school | dain_laugh |  |  | 좋아, 주말에 오락실에서 보자. *다인이 세상을 다 가 |
| 305 | `morning3_date_dain_decline_narr` | 다인 | room_school | dain_laugh |  |  | 알았어, 다음 수업 준비나 하자! *짐짓 씩씩하게 웃으 |
| 306 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심시간 직전, 유나가 소리 없이 다가와 네모나게 접 |
| 307 | `morning3_date_yuna_skip` |  | room_school | 없음 |  |  |  |
| 308 | `morning3_date_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 접어 둔 쪽지 끝을 만지작거리다 다시 책갈피  |
| 309 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 310 | `morning3_multi_from_dain` |  | room_school | 없음 |  |  |  |
| 311 | `morning3_end` | {name} | room_school | 없음 |  |  | *오전 마지막 수업을 끝내는 종이 울리고 폭풍 전야 같 |
| 312 | `morning3_end_b` |  | 없음 | 없음 |  |  |  |
| 313 | `lunch3_start` | 유나 | room_school | yuna_normal |  |  | 내 빵도 반 나눠 먹어. *사흘째 점심, 교실에서 책상 |
| 314 | `lunch3_start_2_b` | 다인 | room_school | yuna_normal |  |  | 이 계란말이, 내가 먼저 먹어도 되는 거지? 일단 맛부 |
| 315 | `lunch3_meal_1` | 다인 | room_school | yuna_normal |  |  | 오, 간 딱 맞는데! 회장님도 얼른 드세요. 오늘은 옆 |
| 316 | `lunch3_meal_2` | {name} | room_school | yuna_normal |  |  | 잠깐만, 그건 내 도시락 반찬인데. |
| 317 | `lunch3_meal_3` | 서연 | room_school | yuna_normal |  |  | *서연이 내 도시락에서 계란말이 한 조각을 집어 맛본다 |
| 318 | `lunch3_meal_4` | {name} | room_school | yuna_normal |  |  | 남의 점심 반찬에 냉정하게 점수 매기지 마. |
| 319 | `lunch3_meal_5` | 서연 | room_school | yuna_normal |  |  | *서연의 입꼬리가 얄밉게 올라간다.* 10점 만점에 6 |
| 320 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *말없이 지켜보던 유나가 젓가락을 뻗어 도시락 한가운데 |
| 321 | `lunch3_meal_7` | {name} | room_school | yuna_normal |  |  | 유나야, 그 칼집 낸 소시지는 내가 제일 아껴 둔 건데 |
| 322 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *유나가 소시지를 천천히 베어 물며 맞은편의 다인을 바 |
| 323 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | 어, 잠깐만! 그건 마지막 남은 조각이야. *내 외침과 |
| 324 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *텅 빈 도시락통 한가운데에 노릇하게 구워진 마지막 계 |
| 325 | `lunch3_meal_10_d` |  | 없음 | 없음 |  |  |  |
| 326 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *숨소리조차 잦아든 식탁 위, 마지막 반찬을 건넬 사람 |
| 327 | `lunch3_give_dain_aff` |  | room_school | 없음 |  |  |  |
| 328 | `lunch3_give_dain_1` | 다인 | room_school | dain_laugh |  |  | 진짜 나 주는 거야? 고마워! 역시 {name}, 내  |
| 329 | `lunch3_dain_skin_check` |  | room_school | dain_laugh |  |  |  |
| 330 | `lunch3_give_dain_2_check` |  | room_school | 없음 |  |  |  |
| 331 | `lunch3_give_dain_seo_affinity` |  | room_school | 없음 |  |  |  |
| 332 | `lunch3_give_dain_seo_low` | 서연 | room_school | seyoun_normal |  |  | *서연은 남은 반찬을 단정하게 정리하며 짧게 고개만 끄 |
| 333 | `lunch3_give_dain_3_check` |  | room_school | 없음 |  |  |  |
| 334 | `lunch3_give_dain_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 빈 빵 봉지를 접어 넣고 물을 한 모금 삼킨다 |
| 335 | `lunch3_end` | {name} | room_school | 없음 |  |  | *점심시간 종료를 알리는 종소리에 각자 도시락을 덮는다 |
| 336 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과 후, 노을빛 복도 갈림길에 선다. 사흘째 지나는 |
| 337 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *주머니 속 휴대폰을 만지작거린다. 엉켜 버린 주말 약 |
| 338 | `after3_auto_dain` | {name} | school_hallway | 없음 |  | 🌅 | *아침에 교문 앞에서 반 박자 늦게 따라붙던 다인의 오 |
| 339 | `after3_rivals_for_dain_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 340 | `after3_rival_seo_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 341 | `after3_rival_seo_affinity` |  | school_hallway | 없음 |  | 🌅 |  |
| 342 | `after3_rival_seo_cool` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 방과 후 일정이 바뀐 모양이네. *서연은 클립보드 페이 |
| 343 | `after3_rival_seo_done` |  | school_hallway | 없음 |  | 🌅 |  |
| 344 | `after3_rival_yuna_check` |  | library_old | 없음 |  | 🌅 |  |
| 345 | `after3_rival_yuna_affinity` |  | library_old | 없음 |  | 🌅 |  |
| 346 | `after3_rival_yuna_cool` | 유나 | library_old | yuna_bored |  | 🌅 | *유나는 쪽지 한 장 남기지 않고 별관 문을 조용히 닫 |
| 347 | `after3_rival_yuna_done` |  | school_hallway | 없음 |  | 🌅 |  |
| 348 | `after3_dain_affinity_check` |  | gym | 없음 |  | 🌅 |  |
| 349 | `after3_dain_partial_1` | {name} | gym | dain_sweat |  | 🌅 | *체육관 벤치에서 다인이 오른쪽 무릎 보호대를 고쳐 찬 |
| 350 | `after3_dain_partial_2` | 다인 | gym | dain_normal |  | 🌅 | 조금만 앉아서 쉬면 금방 나아. 오늘은 신경 쓰지 말고 |
| 351 | `after3_dain_end_first` | 다인 | gym | dain_shy |  | 🌅 | *다인이 내 어깨를 주먹으로 가볍게 툭 치고는 쑥스러운 |
| 352 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *길었던 방과 후 시간이 끝났다. 복도 천장의 형광등이 |
| 353 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 354 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 355 | `minsu_d3_check` | {name} | 없음 | 없음 |  | 🌅 |  |
| 356 | `night3_start` | {name} | room_my | 없음 |  |  | *금요일 밤, 지친 몸으로 방에 돌아와 교복 차림으로  |
| 357 | `night3_start_2` | {name} | room_my | 없음 |  |  | *불도 켜지 않은 방 안, 책상 위에 엎어 두었던 휴대 |
| 358 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *어두운 천장 아래로 휴대폰 불빛이 번진다. 도착해 있 |
| 359 | `night3_dream_1` | {name} | room_my | 없음 |  |  | *스탠드 조명을 끄려다 휴대폰을 한 번 더 집어 든다. |
| 360 | `night3_dream_2_b` | {name} | room_my | 없음 |  |  | *머리맡에 휴대폰을 내려놓는다. 내일 아침 마주 보며  |
| 361 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *잠들기 전, 휴대폰 갤러리 깊숙한 곳에서 예전 학교의 |
| 362 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *화면에 '이 사진을 삭제하시겠습니까?'라는 확인 창이 |
| 363 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *푸르스름한 액정 빛을 가만히 내려다본다. 소정이의 책 |
| 364 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *확인 창에서 조용히 취소를 누른다. 사진 한 장을 지 |
| 365 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼 대신 이동 메뉴를 눌러 사진을 새 폴더로  |
| 366 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *사진 아래에 짧은 메모를 남긴다. 소정이에게 끝내 건 |
| 367 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *새로 만든 폴더 안에 사진 한 장이 조용히 자리 잡는 |
| 368 | `night3_faithful_reflect_4_b` |  | 없음 | 없음 |  |  |  |
| 369 | `night3_faithful_reflect_4_c` |  | 없음 | 없음 |  |  |  |
| 370 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 내일 아침 알람을 맞춘다. 휴대폰을 내 |
| 371 | `night3_end` | {name} | room_my | 없음 |  |  | *금요일 시간표가 적힌 교과서를 덮고 스탠드 불을 완전 |
| | **Day 4** | | | | | | |
| 372 | `morning4_start` | {name} | room_my_day.webp | 없음 |  |  | *넷째 날, 토요일 아침. 커튼 틈으로 스며든 주말 햇 |
| 373 | `morning4_date_plan_check` |  | 없음 | 없음 |  |  |  |
| 374 | `morning4_nightmare_check` |  | room_my_day.webp | 없음 |  |  |  |
| 375 | `minsu_cheer_1` | {name} | room_my_day.webp | 없음 |  |  | *잠금을 풀자마자 메신저 맨 윗줄에서 민수의 이름이 반 |
| 376 | `minsu_cheer_1_b` | 민수 | room_my_day.webp | minsu_normal | 0.35 |  | 야 너 오늘 주말 데이트라며? |
| 377 | `minsu_cheer_1_c` | {name} | room_my_day.webp | minsu_normal | 0.35 |  | 그걸 네가 어떻게 알았어 |
| 378 | `minsu_cheer_1_d` | 민수 | room_my_day.webp | minsu_normal | 0.35 |  | 교실에서 금요일 내내 주말 약속 잡느라 정신없더니 모를 |
| 379 | `minsu_cheer_2` | 민수 | room_my_day.webp | minsu_normal | 0.35 |  | 옷 좀 제대로 입어라. 분위기 망치지 말고 잘하고 와ㅋ |
| 380 | `minsu_cheer_3` | {name} | room_my_day.webp | minsu_normal | 0.35 |  | 알아서 할게. |
| 381 | `minsu_cheer_4_branch` |  | room_my_day.webp | 없음 |  |  |  |
| 382 | `minsu_cheer_4_ins_single` | {name} | room_my_day.webp | minsu_normal | 0.35 |  | *캘린더 앱을 열어 본다. 토요일 칸에 적힌 단 하나의 |
| 383 | `morning4_start_2` | {name} | room_my_day.webp | 없음 |  |  | *창문을 열어 선선한 아침 공기를 들이마신다. 주중에  |
| 384 | `morning4_dain_msg_1` | 다인 | room_my_day.webp | dain_sweat | 0.35 |  | 드디어 오늘이다! 체육관 앞 10시 잊지 않았지? 아  |
| 385 | `morning4_hidden_check` | {name} | street | 없음 |  |  | *이른 아침 공기를 가르며 학교 앞 사거리 횡단보도에서 |
| 386 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 387 | `day4_haeun_gate` |  | 없음 | 없음 |  |  |  |
| 388 | `day4_haeun_trust_check` |  | 없음 | 없음 |  |  |  |
| 389 | `day4_haeun_personal_gate` |  | 없음 | 없음 |  |  |  |
| 390 | `morning4_end` | {name} | room_my_day.webp | 없음 |  |  | *집으로 돌아와 거울 앞에서 셔츠 깃과 머리카락을 정돈 |
| 391 | `day4_date_branch` |  | 없음 | 없음 |  |  |  |
| 392 | `date_dain_1` | {name} | school_back | dain_date_laugh.webp |  |  | *주말 아침의 체육관 앞. 가벼운 크롭 트랙 집업에 슬 |
| 393 | `date_dain_tier_check` |  | school_back | 없음 |  |  |  |
| 394 | `date_dain_tentative_1` | 다인 | school_back | dain_date_normal.webp |  |  | 미안한데 오늘은 멀리 안 가고 잠깐만 있다가 들어갈래. |
| 395 | `date_dain_tentative_2` | {name} | school_back | dain_date_normal.webp |  |  | *체육관 옆 자판기 앞에서 캔 음료를 하나씩 뽑아 마신 |
| 396 | `date_dain_tentative_3` | 다인 | street | dain_date_normal.webp |  |  | 월요일에 학교에서 보자. 다음에 다시 만날지는 그때 가 |
| 397 | `pre_confess_minsu` | 민수 | street | minsu_smirk | 0.35 |  | 야, 지금 한창 데이트 중이지? 친구로서 딱 한마디만  |
| 398 | `pre_confess_minsu_2` | 민수 | street | minsu_smirk | 0.35 |  | 어설프게 말 돌리지 말고 오늘 네 마음 제대로 전해라 |
| 399 | `pre_confess_callback` | {name} | street | 없음 |  |  | *바지 주머니 속 휴대폰을 쥔 손바닥에 땀이 밴다. 꺼 |
| 400 | `confess_seo_1` | {name} | school | 없음 |  | 🌅 | *저녁노을이 길게 그림자를 드리울 무렵, 데이트를 마치 |
| 401 | `confess_dain_1` | {name} | school_back | dain_date_laugh.webp |  | 🌅 | *시내 데이트가 끝나갈 무렵, 다인이 무언가 결심한 듯 |
| 402 | `confess_dain_2` | 다인 | school_back | dain_date_normal.webp |  | 🌅 | 집에 들어가기 전에 마지막으로 딱 한 군데만 더 들렀다 |
| 403 | `confess_dain_3` | {name} | gym | dain_date_normal.webp |  | 🌅 | *다인의 뒤를 따라 주말 저녁의 텅 빈 체육관 안으로  |
| 404 | `confess_dain_4` | 다인 | gym | dain_date_normal.webp |  | 🌅 | 걱정 마, 이 시간에 연습하러 온 건 아니니까. 대신  |
| 405 | `confess_dain_5` |  | 없음 | 없음 |  | 🌅 |  |
| 406 | `confess_dain_choice` | 다인 | gym | dain_date_sweat.webp |  | 🌅 | *손에서 미끄러진 배구공이 마룻바닥에 쿵 튀어 오르고  |
| 407 | `confess_dain_no_2` | {name} | gym | dain_date_normal.webp |  | 🌅 | *다인과 코트 구석 벤치에 나란히 앉는다. 목구멍까지  |
| 408 | `confess_dain_no_3` | 다인 | gym | dain_date_sweat.webp |  | 🌅 | *다인이 앉은 채로 배구공을 바닥에 두 번 튕긴다. 세 |
| 409 | `confess_dain_no_4` | 다인 | gym | dain_date_sad.webp |  | 🌅 | 다음번에 단둘이 올 때는, 방금 삼킨 말 꼭 해 줘. |
| 410 | `confess_dain_no_4_b` | {name} | gym | dain_date_sad.webp |  | 🌅 | *다인이 고개를 숙인 채 손목 보호대의 벨크로를 찌르르 |
| 411 | `day4_night_start` | {name} | school | 없음 |  |  | *어스름이 짙게 깔린 학교를 나서서 집으로 돌아갈 시간 |
| 412 | `day4_night_branch` | 시스템 | 없음 | 없음 |  |  |  |
| 413 | `day4_student_visit_branch` |  | 없음 | 없음 |  |  |  |
| 414 | `day4_student_night_branch` | {name} | room_my | 없음 |  |  | *집으로 돌아와 침대 맡에 가방을 내려놓는다. 충전기  |
| 415 | `day4_waited_night_branch` |  | 없음 | 없음 |  |  |  |
| 416 | `day4_waited_dain_invite` | 다인 | room_my | dain_normal | 0.35 |  | 야, 지금 집이야? 열 시에 학교 체육관으로 잠깐만 와 |
| 417 | `day4_waited_dain_promise` | {name} | room_my | 없음 |  |  | 알겠어, 열 시까지 체육관으로 갈게. *답장을 보내자  |
| 418 | `wall_dain_rival_rank` | 시스템 | school_back | 없음 |  |  |  |
| 419 | `wall_dain_seo_tempt_1` | {name} | school_back | seyoun_pout |  |  | *다인이 기다리는 체육관으로 향하는데 옥상 계단 입구  |
| 420 | `wall_dain_seo_tempt_2` | 서연 | school_back | seyoun_sad |  |  | 지금 이대로 집에 들어가면 또 거울 앞에서 웃는 얼굴부 |
| 421 | `wall_dain_seo_tempt_accept` | 서연 | event_temptation_seoyeon | 없음 |  |  | *옥상문이 닫히자 서연은 말없이 블라우스 단추를 풀고  |
| 422 | `day4_temptation_seoyeon_freetalk` | 서연 | event_temptation_seoyeon | 없음 |  | 🌙 | *내 손을 자기 맨가슴 위에서 조금도 놓아주지 않은 채 |
| 423 | `day4_temptation_return_home` | {name} | room_my | 없음 |  |  | *온몸에 밴 뜨거운 열기와 숨결을 채 식히지 못한 채  |
| 424 | `day4_adult_night_regret_target_branch` |  | room_my | 없음 |  |  |  |
| 425 | `day4_night_regret` | {name} | room_my | 없음 |  |  | *늦은 밤 방 안으로 돌아와 침대에 걸터앉았지만 메신저 |
| 426 | `day4_night_regret_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 427 | `day4_night_regret_msg_dain` | 다인 | room_my | dain_normal | 0.35 |  | 체육관 뒷문에서 아직 기다리고 있어. 오늘 못 오는 거 |
| 428 | `day4_night_regret_reply` | {name} | room_my | 없음 |  |  | *몇 번이고 자판을 쳤다가 지우기를 반복한 끝에 입력창 |
| 429 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 430 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *일요일 아침 알람을 맞춰 두고 방 안의 스탠드 불을  |
| 431 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안의 시계 바늘이 자정을 넘어 다섯째 날로 향한다 |
| | **Day 5** | | | | | | |
| 432 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날, 일요일 아침. 교문 너머로 축제 현수막이 |
| 433 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 434 | `morning5_temptation_counteroffer_branch` |  | room_school | 없음 |  |  |  |
| 435 | `morning5_caught_by_seoyeon_route` |  | room_school | 없음 |  |  |  |
| 436 | `morning5_caught_dain_by_seoyeon` | 다인 | room_school | dain_sad |  |  | *다인이 내 책상 옆에 바짝 다가서던 순간, 휴대폰 액 |
| 437 | `morning5_caught_dain_honest` | 다인 | room_school | dain_sad |  |  | *다인은 손목 보호대 끝을 거칠게 잡아당겼다가 툭 놓는 |
| 438 | `morning5_counteroffer_gather` | {name} | room_school | 없음 |  |  | *어젯밤 함께 남아 있던 상대에게 메시지를 보내 아침  |
| 439 | `morning5_counteroffer_group_talk` | 두 사람 | room_school | 없음 |  |  | *축제 안내 방송을 앞둔 어수선한 교실 한복판, 어젯밤 |
| 440 | `morning5_counteroffer_choice` | {name} | room_school | 없음 |  |  | *숨 막히는 해명이 끝나자, 두 사람의 시선이 내 입술 |
| 441 | `morning5_counteroffer_choice_lead` | {name} | room_school | 없음 |  |  | *먼저 약속했던 사람 쪽으로 똑바로 몸을 돌려 고개를  |
| 442 | `morning5_after_counteroffer` | {name} | room_school | 없음 |  |  | *교탁 모서리에 놓여 있던 조회 유인물 한 장이 바람에 |
| 443 | `morning5_after_counteroffer_hidden_check` |  | room_school | 없음 |  |  |  |
| 444 | `hidden_nurse_d5_after_co_check` |  | school_hallway | 없음 |  |  |  |
| 445 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 446 | `morning5_sojeong_1` | {name} | room_school | 없음 |  |  | *조용한 창가에 서서 휴대폰 메모 앱을 연다. 이전 학 |
| 447 | `morning5_sojeong_2` | {name} | room_school | 없음 |  |  | *더 이상 나를 변호하기 위한 마흔 번째 초안은 만들지 |
| 448 | `morning5_sojeong_3` | {name} | room_school | 없음 |  |  | 그때 네 책상 위에 적힌 낙서들을 두 눈으로 보고도 선 |
| 449 | `morning5_sojeong_4` | {name} | room_school | 없음 |  |  | *말풍선 옆에 작은 전송 완료 표시가 뜬다. 숫자 1이 |
| 450 | `morning5_sojeong_5` | {name} | room_school | 없음 |  |  | 전학 오기 전 학교에서 제가 모른 척 지나쳤던 일에 대 |
| 451 | `morning5_route_branch` |  | room_school | 없음 |  |  |  |
| 452 | `morning5_co_haeun_check` |  | room_school | 없음 |  |  |  |
| 453 | `tour_co_branch` |  | school | 없음 |  |  |  |
| 454 | `tour_co_dain_1` | {name} | gym | dain_sad |  |  | *체육관 천장의 조명은 눈부시게 켜져 있지만 코트 위를 |
| 455 | `tour_co_dain_2` | 다인 | gym | dain_sad |  |  | 가위바위보는... 다음에 하자. 미안, 오늘은 그냥 혼 |
| 456 | `tour_co_dain_3` | {name} | gym | dain_angry |  |  | *다인은 습관처럼 손목 보호대 끝을 세게 잡아당겼다가, |
| 457 | `after5_start` |  | 없음 | 없음 |  | 🌅 |  |
| 458 | `day5_haeun_guilt_gate` |  | 없음 | 없음 |  | 🌅 |  |
| 459 | `day5_haeun_route_gate` |  | 없음 | 없음 |  | 🌅 |  |
| 460 | `after5_original_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 461 | `after5_co_start` | {name} | school_hallway | 없음 |  | 🌅 | *축제 인파가 빠져나간 방과 후 복도에, 오늘 아침 숨 |
| 462 | `after5_co_abandoned_branch` |  | school_hallway | 없음 |  | 🌅 |  |
| 463 | `after5_co_dain_1` | 다인 | gym | dain_sad |  | 🌅 | *다인이 배구공을 보관함 가장 깊은 구석으로 밀어 넣는 |
| 464 | `after5_co_dain_2` | 다인 | gym | dain_angry |  | 🌅 | 잘 가라. 지금은 네 얼굴 보고 웃어 주기가 좀 그래. |
| 465 | `after5_co_tempter_branch` |  | school_hallway | 없음 |  | 🌅 |  |
| 466 | `after5_co_tempter_seo_1` | 서연 | school_hallway | seyoun_sad |  | 🌅 | *서연이 만지작거리던 옥상 열쇠고리를 주머니에 넣는다. |
| 467 | `after5_co_tempter_seo_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 그래도 오늘 이 자리에서는 내가 먼저 널 붙잡지 않을게 |
| 468 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 469 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 470 | `after5_farewell_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지날 무렵, 문가에서 기다리고 있던 유나 |
| 471 | `after5_farewell_yuna_skip` |  | school_hallway | 없음 |  | 🌅 |  |
| 472 | `after5_farewell_yuna_low` | 유나 | library_old | yuna_normal |  | 🌅 | *도서관 앞 복도에서 유나와 눈이 마주친다. 유나는 읽 |
| 473 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 474 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *붉은 석양이 길게 내려앉은 교정 위로, 축제의 끝을  |
| 475 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 476 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 477 | `ending_counteroffer_bitter` |  | park | 없음 |  |  |  |
| 478 | `ending_counteroffer_choice_lead` | {name} | park | 없음 |  |  | *돌고 돌아 원래 약속했던 사람을 선택했지만 뒤늦은 사 |
| 479 | `ending_counteroffer_bitter_route` |  | park | 없음 |  |  |  |
| 480 | `co_bitter_dain_1` | {name} | school_back | dain_sad |  |  | *오후의 체육관 문밖, 다인은 배구공도 들지 않은 채  |
| 481 | `co_bitter_dain_2` | 다인 | school_back | dain_sad |  |  | 축제 날 아침에 파트너 명단에서 네 이름 지웠던 거.. |
| 482 | `co_bitter_dain_3` | {name} | ending_bittersweet | 없음 |  |  | *다인은 예전처럼 장난스럽게 주먹을 부딪치는 대신, 편 |
| 483 | `bitter_epilogue_1` | {name} | ending_bittersweet | 없음 |  |  | *졸업 후 계절이 바뀌면서 서로의 연락은 조금씩 뜸해졌 |
| 484 | `bitter_epilogue_2` | {name} | ending_bittersweet | 없음 |  |  | *전학 첫 주 닷새 동안의 눈부신 기록은 사진첩 속에  |
| 485 | `bitter_epilogue_3` | 시스템 | ending_bittersweet | 없음 |  |  | ─── BITTERSWEET END ─── |
| 486 | `day5_main_ending_freetalk_router` | {name} | park | 없음 |  |  |  |
| 487 | `day5_dain_ending_freetalk_intro` |  | 없음 | 없음 |  |  |  |
| 488 | `day5_dain_ending_freetalk_router` | {name} | gym | 없음 |  |  |  |
| 489 | `day5_dain_ending_freetalk_bittersweet` | 다인 | gym | dain_normal |  | 🌙 | *굳게 닫힌 체육관 문에 등을 기대어 서서, 안쪽에서  |
| 490 | `day5_credits` |  | school | 없음 |  |  |  |
| 491 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### day5_nurse_ending_freetalk_bittersweet

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_yuna_choice`: (선택)
- `after_end`: (선택)
- `after_hidden_nurse_choice`: (선택)
- `after_nurse_enter_choice`: (선택)
- `lunch2_choice`: (선택)
- `hidden_nurse_d2_choice1`: (선택)
- `hidden_nurse_d2_choice2`: (선택)
- `after2_choice`: (선택)
- `night2_choice`: (선택)
- `hidden_nurse_d3_choice1`: (선택)
- `hidden_nurse_d3_choice2`: (선택)
- `lunch3_choice`: (선택)
- `after3_choice`: (선택)
- `hidden_nurse_d4_morning_choice`: (선택)
- `hidden_nurse_d4_name_choice`: (선택)
- `hidden_nurse_d4_choice`: (선택)
- `day4_nurse_dain_counteroffer`: (선택)
- `morning5_caught_nurse_counteroffer`: (선택)
- `morning5_counteroffer_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=8 유나=4 다인=17 담임=0 보건=-23

<details>
<summary>씬 타임라인 (578씬)</summary>

| # | 씬 ID | 화자 | 배경 | 캐릭터 | OP | 밤 | 대사 (앞 30자) |
|---|--------|------|------|--------|----|----|----------------|
| | **Day 1** | | | | | | |
| 1 | `start` | {name} | school | 없음 |  |  | *4월의 벚꽃잎이 흩날리는 교문 앞. 아직 풀기가 가시 |
| 2 | `start_again` | {name} | school | 없음 |  |  | *순간 울컥 치미는 현기증에 차가운 교문 기둥을 짚어선 |
| 3 | `start_3` | {name} | school | 없음 |  |  | *주머니 속 휴대폰이 짧게 떨린다. 예전 학교 단체방  |
| 4 | `name_input_scene` | 시스템 | school | 없음 |  |  | 전학생, 이름이 뭐야? |
| 5 | `gate_1` | {name} | school | 없음 |  |  | *교문 그늘 아래 서 있던 긴 생머리의 여학생이 안경테 |
| 6 | `seoyeon_meet_1` | 서연 | school | seyoun_normal |  |  | 혹시 오늘 온 전학생? {name} 맞지? |
| 7 | `seoyeon_meet_2` | 서연 | school | seyoun_normal |  |  | 가슴팍 명찰도 {name}이네. 반가워. *단정한 손끝 |
| 8 | `seoyeon_meet_3` | {name} | school | seyoun_normal |  |  | 맞는데. 내 얼굴은 어떻게 한 번에 알아봤어? |
| 9 | `seoyeon_meet_4` | 서연 | school | seyoun_normal |  |  | 학생회장이거든. 새로 온 전학생 맞이하는 것도 내 몫이 |
| 10 | `seoyeon_meet_5` | 서연 | school | seyoun_normal |  |  | 이쪽으로 따라와. 조회 시작하기 전에 15분 안으로 학 |
| 11 | `seoyeon_meet_6` | {name} | school | seyoun_normal |  |  | 첫날부터 학생회장이 직접 안내라니 좀 떨리는데. |
| 12 | `seoyeon_meet_7` | 서연 | school | seyoun_normal |  |  | 원래 내가 맡은 일이니까 괜히 어렵게 생각할 것 없어. |
| 13 | `seoyeon_meet_8` | 서연 | school | seyoun_normal |  |  | 자, 가자. *몸을 돌리는 서연의 교복 셔츠 깃에서 햇 |
| 14 | `seoyeon_choice` | {name} | school | seyoun_normal |  |  | *앞서 걷는 서연의 단정한 뒷모습을 보며 입을 연다.* |
| 15 | `choice_flirt_1` | 서연 | school | seyoun_normal |  |  | *걸음을 멈추고 반쯤 돌아서더니 맑은 안경알 너머로 눈 |
| 16 | `choice_flirt_2` | 서연 | school | seyoun_laugh |  |  | 전학 첫날부터 농담할 여유도 있네. 덕분에 네 이름은  |
| 17 | `choice_flirt_3` | {name} | school | seyoun_laugh |  |  | 오, 혹시 첫인상 점수라도 매기는 중이야? |
| 18 | `choice_flirt_4` | 서연 | school | seyoun_normal |  |  | 글쎄, 아직 학교 분위기는 잘 모르는 모양이지만 첫인상 |
| 19 | `choice_flirt_5` | {name} | school | seyoun_normal |  |  | 학생회장님한테 후한 점수라니 영광인데? |
| 20 | `choice_flirt_6` | 서연 | school | seyoun_normal |  |  | 일주일 뒤에도 그렇게 여유롭게 웃을 수 있을지 두고 볼 |
| 21 | `choice_flirt_7` | 서연 | school | seyoun_laugh |  |  | 늦겠다, 이리 따라와 {name}. *살짝 붉어진 귓바 |
| 22 | `hallway_1` | 서연 | school_hallway | seyoun_back |  |  | 지나가는 애들한테 인사받느라 걸음 늦출 필요 없어. 그 |
| 23 | `hallway_3` | 서연 | school_hallway | seyoun_normal |  |  | 지금 걷는 본관이 3학년 건물이고 창밖 건너편이 도서관 |
| 24 | `hallway_4` | 서연 | school_hallway | seyoun_normal |  |  | 그리고 이건 아무한테나 안 보여주는 건데. *재킷 주머 |
| 25 | `hallway_5` | 서연 | school_hallway | seyoun_normal |  |  | 원래 우리 학교 옥상은 평소엔 잠겨 있거든. 이 열쇠는 |
| 26 | `hallway_6` | {name} | school_hallway | seyoun_normal |  |  | 옥상에 너만의 비밀 아지트라도 숨겨 둔 거야? |
| 27 | `hallway_6_b` | 서연 | school_hallway | seyoun_normal |  |  | *맑게 울리던 열쇠고리 소리가 손안에서 뚝 멎는다.*  |
| 28 | `hallway_6_c` | 서연 | school_hallway | seyoun_normal |  |  | *입꼬리를 살짝 올린 채 대답 대신 열쇠를 다시 주머니 |
| 29 | `hallway_7` | 서연 | school_hallway | seyoun_normal |  |  | 맞다, 오늘 점심시간. 아직 어디서 밥 먹을지 못 정했 |
| 30 | `hallway_8` | {name} | school_hallway | seyoun_shy |  |  | *어느새 걸음을 멈춘 서연이 아침 햇살이 비치는 교실  |
| 31 | `hallway_10` | 서연 | school_hallway | seyoun_normal |  |  | 다 왔다, 여기가 네 교실이야. 얼른 들어가 봐. |
| 32 | `hallway_11` | {name} | school_hallway | seyoun_normal |  |  | 점심때도 일대일로 안내해 주는 거야? |
| 33 | `hallway_12` | 서연 | school_hallway | seyoun_normal |  |  | 글쎄, 오늘 오전 수업 잘 버티는 거 봐서. |
| 34 | `hallway_13` | 서연 | school_hallway | seyoun_back |  |  | *돌아서던 서연이 클립보드를 어깨 높이로 가볍게 들어  |
| 35 | `hallway_13_b` | {name} | school_hallway | seyoun_back |  |  | *단정한 구두 소리를 남기며 복도 저편으로 멀어지는 서 |
| 36 | `classroom_1` | {name} | room_school | 없음 |  |  | *드르륵, 교실 앞문을 열자 왁자지껄하던 공기 위로 수 |
| 37 | `classroom_2_b` | {name} | room_school | teacher_normal |  |  | *교탁 앞에는 20대 후반쯤 되어 보이는 담임선생님이  |
| 38 | `classroom_3` | 담임 | room_school | teacher_normal |  |  | 자, 다들 주목. 오늘부터 우리 반 식구가 된 전학생이 |
| 39 | `classroom_3_b` | {name} | room_school | teacher_normal |  |  | 오늘 전학 온 {name}입니다. 잘 부탁드립니다. * |
| 40 | `classroom_5_b` | 담임 | room_school | teacher_normal |  |  | 그래, {name}. 우리 반에 온 걸 환영해. 급할  |
| 41 | `classroom_5_c` | {name} | room_school | teacher_normal |  |  | *낯선 교실 공기에 섞여 내 숨소리가 잦아드는 사이 교 |
| 42 | `classroom_dain_1` | 다인 | room_school | dain_normal |  |  | 오, 전학생! 드디어 우리 반에도 새 얼굴이 들어왔네! |
| 43 | `classroom_dain_2` | 다인 | room_school | yuna_normal |  |  | 이쪽 봐, 이쪽! *산뜻한 갈색 숏컷에 활동적인 배구부 |
| 44 | `classroom_dain_3` | 담임 | room_school | teacher_normal |  |  | 다인아, 아침부터 목소리 좀 낮추자. 그리고 교실 안에 |
| 45 | `classroom_dain_4` | 다인 | room_school | yuna_normal |  |  | 에이, 쌤도 참. 이게 세상에서 제일 편하단 말이에요! |
| 46 | `classroom_dain_5` | 다인 | room_school | yuna_normal |  |  | 네 자리는 여기야, 여기! *아이들의 웃음소리 사이로  |
| 47 | `classroom_dain_5_b` | 담임선생님 | room_school | teacher_normal |  |  | 다인아, 적어도 출석 부르는 동안만이라도 진정 좀 하자 |
| 48 | `classroom_dain_5_c` | 담임 | room_school | teacher_normal |  |  | 지금부터 그 에너지를 다 쓰면 어떡해. 아직 1교시 종 |
| 49 | `classroom_dain_5_d` | 담임선생님 | room_school | teacher_angry |  |  | *담임은 작게 고개를 저으며 출석부 다음 장을 부드럽게 |
| 50 | `classroom_yuna_1` | {name} | room_school | yuna_bored |  |  | *소란스러운 교실 풍경과 동떨어진 창가 맨 뒷자리, 봄 |
| 51 | `classroom_yuna_2` |  | 없음 | 없음 |  |  |  |
| 52 | `classroom_yuna_4` | {name} | room_school | yuna_bored |  |  | *앞줄에 앉은 학생 하나가 내 소매를 스치며 작게 속삭 |
| 53 | `classroom_seat_1` | 담임선생님 | room_school | teacher_normal |  |  | *출석부를 덮은 담임이 창가 쪽에서 한 줄 건너편 빈자 |
| 54 | `classroom_seat_2` | 다인 | room_school | yuna_normal |  |  | 오, 딱 내 옆자리네? 멀뚱히 서 있지 말고 얼른 와서 |
| 55 | `classroom_minsu_1` | {name} | room_school | minsu_normal |  |  | *가방을 내려놓고 의자를 빼려는데 앞자리에 앉아 있던  |
| 56 | `classroom_minsu_2` | 민수 | room_school | minsu_smirk |  |  | 야, 전학생. 우리 반에 온 걸 환영한다. 그리고 미리 |
| 57 | `classroom_minsu_3` | {name} | room_school | minsu_smirk |  |  | 갑자기 무슨 각오? |
| 58 | `classroom_minsu_2_b` | 민수 | room_school | minsu_normal |  |  | *옆자리의 다인을 향해 슬쩍 턱짓하며 씨익 웃는다.*  |
| 59 | `classroom_dain_talk_1` | {name} | room_school | minsu_normal |  |  | *장난스럽게 돌아앉는 앞자리 남학생의 교복 명찰에는 ' |
| 60 | `classroom_dain_talk_2` | 다인 | room_school | yuna_normal |  |  | 저 녀석 말은 신경 쓰지 마! 그보다 나 궁금한 거 하 |
| 61 | `classroom_dain_talk_3` | 다인 | room_school | yuna_normal |  |  | 야, {name}. 너 평소에 몸 움직이는 거나 운동  |
| 62 | `classroom_dain_talk_4` | {name} | room_school | yuna_normal |  |  | 운동은 왜, 갑자기? |
| 63 | `classroom_dain_talk_5` | 다인 | room_school | yuna_normal |  |  | 아니, 오늘 방과후에 리시브 연습을 좀 더 하고 싶은데 |
| 64 | `classroom_dain_talk_6` | {name} | room_school | yuna_normal |  |  | 전학생을 첫날부터 인간 볼 머신으로 쓰려고? |
| 65 | `classroom_dain_talk_7` | 다인 | room_school | yuna_normal |  |  | 에이, 설마! 그래도 기계보다는 사람이랑 호흡 맞추는  |
| 66 | `classroom_dain_talk_8` | 다인 | room_school | yuna_normal |  |  | 어때, 같이 해 볼래? *다인의 따뜻한 검지가 내 책상 |
| 67 | `classroom_yuna_note_1` | {name} | room_school | yuna_bored |  |  | *그때 뒷자리에서 반듯하게 접힌 종이쪽지 하나가 책상  |
| 68 | `classroom_yuna_note_3` | 유나 | room_school | yuna_bored |  |  | *조심스럽게 펼치자 은은한 연보라색 잉크 글씨와 모서리 |
| 69 | `classroom_yuna_note_5` | {name} | room_school | yuna_bored |  |  | *내가 고개를 들자 창가 햇살에 비치던 유나의 하얀 손 |
| 70 | `classroom_yuna_note_6` | {name} | room_school | yuna_bored |  |  | *1교시 시작을 알리는 종소리가 교실 안을 메운다. 창 |
| 71 | `lunch_start` | {name} | school_hallway | 없음 |  |  | *점심시간을 알리는 종소리와 함께 교실 공기가 들뜬다. |
| 72 | `lunch_start_4` | 서연 | school_hallway | seyoun_normal |  |  | 아까 말한 대로 옥상 올라올 거지? *계단참에서 걸음을 |
| 73 | `lunch_start_4_b` | {name} | school_hallway | dain_normal |  |  | *대답하려는 순간 옆에서 다가온 다인의 따뜻한 손바닥이 |
| 74 | `lunch_start_5` | 다인 | school_hallway | dain_normal |  |  | 야, 아직 점심 안 먹었지? 나랑 매점 뛰어가자. 빵  |
| 75 | `lunch_start_6` | 유나 | school_hallway | yuna_normal |  |  | 난 도서관 갈 건데. *내 옆을 스쳐 지나가며 가방끈을 |
| 76 | `lunch_start_7` | {name} | school_hallway | 없음 |  |  | *바람 부는 옥상과 달콤한 빵 냄새가 나는 매점, 그리 |
| 77 | `lunch_choice` | {name} | school_hallway | 없음 |  |  | *첫날의 점심시간, 누구의 발걸음을 따라갈까?* |
| 78 | `lunch_yuna_1` | {name} | library_old | yuna_normal |  |  | *복도의 소음이 멀어지는 계단을 지나 유나의 뒤를 따라 |
| 79 | `lunch_yuna_1_aff_default` | 유나 | library_old | yuna_normal |  |  | *따로 건네는 쪽지는 없었다. 유나는 햇살이 비스듬히  |
| 80 | `lunch_yuna_2` | 유나 | library_old | yuna_normal |  |  | 의자 끌 때 소리 나지 않게 살살. *하얀 검지로 펼쳐 |
| 81 | `lunch_yuna_4` | 유나 | library_old | yuna_normal |  |  | 잠깐만 기다려. *끼워 두었던 대출 영수증 끝을 반듯하 |
| 82 | `lunch_yuna_5` | {name} | library_old | yuna_normal |  |  | *5초, 다시 10초가 고요하게 흐른다. 유나는 접힌  |
| 83 | `lunch_yuna_5_b` | {name} | library_old | yuna_normal |  |  | 옆자리 비었으면 앉아도 돼? |
| 84 | `lunch_yuna_7` | 유나 | library_old | yuna_normal |  |  | *활자에서 눈을 떼지 않은 채 나직이 속삭인다.* 옆에 |
| 85 | `lunch_yuna_8` | 유나 | library_old | yuna_normal |  |  | 가방 내렸어. 이쪽 앉아. *옆 의자에서 자기 가방을  |
| 86 | `lunch_yuna_10` | {name} | library_old | yuna_normal |  |  | *나란히 앉은 책상 위로 벽시계 초침 소리와 종이 스치 |
| 87 | `lunch_yuna_10_b` | {name} | library_old | yuna_normal |  |  | *유나의 손끝이 낡은 책갈피에 적힌 흐릿한 글씨를 슬쩍 |
| 88 | `lunch_yuna_12` | 유나 | library_old | yuna_normal |  |  | *책장 너머로 붉은빛이 감도는 눈동자가 천천히 올라온다 |
| 89 | `lunch_yuna_13` | {name} | library_old | yuna_normal |  |  | 어? 진짜네. |
| 90 | `lunch_yuna_14` | 유나 | library_old | yuna_normal |  |  | 그 시리즈는 1권부터 차례대로 읽어야 이해돼. |
| 91 | `lunch_yuna_15` | 유나 | library_old | yuna_normal |  |  | 여기 있어. 이걸로 먼저 읽어. *자기 손옆에 쌓아 두 |
| 92 | `lunch_yuna_16` | {name} | library_old | yuna_normal |  |  | 빌려주는 거야? 고마워. |
| 93 | `lunch_yuna_17` | 유나 | library_old | yuna_normal |  |  | 다 읽으면 나한테 다시 돌려줘. |
| 94 | `lunch_yuna_18` | 유나 | library_old | yuna_normal |  |  | 그럼 이제 각자 읽자. *책상 하나를 사이에 두고 나란 |
| 95 | `lunch_yuna_20` | {name} | library_old | yuna_normal |  |  | *한참 만에 고개를 들자 창가 햇살을 등진 유나가 책  |
| 96 | `lunch_yuna_21` | {name} | library_old | yuna_normal |  |  | 왜 그래, 나한테 할 말 있어? |
| 97 | `lunch_yuna_22` | 유나 | library_old | yuna_normal |  |  | *유나가 얇은 책갈피를 페이지 사이에 끼워 넣는다.*  |
| 98 | `lunch_yuna_23` | {name} | library_old | yuna_normal |  |  | 그게 왜? |
| 99 | `lunch_yuna_24` | 유나 | library_old | yuna_normal |  |  | 생각보다 편했어. |
| 100 | `lunch_yuna_25` | 유나 | library_old | yuna_normal |  |  | *유나의 시선이 내가 쥔 책 표지를 스쳐 내 눈동자에  |
| 101 | `lunch_yuna_choice` | {name} | library_old | yuna_normal |  |  | *읽던 책을 천천히 덮으며 유나와 시선을 맞춘다.* |
| 102 | `lunch_yuna_c2_1` | 유나 | library_old | yuna_normal |  |  | 교실에 있어 봤자 딱히 할 일도 없으니까. |
| 103 | `lunch_yuna_c2_2` | 유나 | library_old | yuna_normal |  |  | 그래도 이 구석 자리는 꽤 마음에 들어. 아무도 안 찾 |
| 104 | `lunch_yuna_freetalk` | 유나 | library_old | yuna_normal |  |  | *유나가 덮은 책 표지 위로 하얀 두 손을 가만히 포갠 |
| 105 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *5교시 수업을 알리는 차임벨이 울려 퍼지며 짧고도 설 |
| 106 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *붉은 노을이 스며드는 방과후 복도. 주머니 속에서 진 |
| 107 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 108 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 그 가벼운 마지막 한 줄에 시선이  |
| 109 | `after_kakao_5` |  | 없음 | 없음 |  | 🌅 |  |
| 110 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *한참을 망설이다 조용히 단체방 나가기를 누른다. 텅  |
| 111 | `after1_jealousy_yuna_1` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 너 점심시간에 도서관 갔다 왔다며? 그것도 유나랑 |
| 112 | `after1_jealousy_yuna_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 신기하네, 걔 원래 옆에 누가 오는 거 진짜 싫어하거든 |
| 113 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *휴대폰을 주머니에 넣고 석양이 길게 드리운 복도를 따 |
| 114 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도 모퉁이를 돌려는데 등 뒤에서 운동화 바닥이 마룻 |
| 115 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 거기 앞 조심해! |
| 116 | `after_miss_dain_3` | 다인 | school_hallway | dain_normal |  | 🌅 | 휴, 아슬아슬하게 비켜 줬네! *내 어깨를 스치며 바람 |
| 117 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 방금 반사신경 꽤 괜찮았는데? 역시 운동 좀 해  |
| 118 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 하마터면 부딪힐 뻔했잖아. 복도에서 웬 전력질주야? |
| 119 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 배구부 집합 시간 늦었거든! 지금 당장 체육관 뛰어가야 |
| 120 | `after_miss_dain_6_b` | {name} | school_hallway | dain_pain |  | 🌅 | *돌아서서 두어 걸음 내딛던 다인이 순간 걸음을 멈추고 |
| 121 | `after_miss_dain_7` | 다인 | school_hallway | dain_laugh |  | 🌅 | 참, 내 이름 다인이야! 내일 와서 이름 까먹으면 안  |
| 122 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞 복도를 지나는데 붉은 눈동자의 여학생이 소 |
| 123 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 방금 책 사이에서 이거 떨어졌어. |
| 124 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *바닥에 내려앉은 낡은 책갈피를 조심스레 주워 건넨다. |
| 125 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | 다행이다, 모서리 안 구겨졌네. *하얀 손가락으로 책갈 |
| 126 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 주워 줘서 고마워. |
| 127 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *소중한 것을 감추듯 책갈피를 책등 깊숙이 끼워 넣고는 |
| 128 | `after_miss_yuna_4` |  | 없음 | 없음 |  | 🌅 |  |
| 129 | `after_miss_seoyeon_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *가방을 메고 신발장으로 내려가려는데 계단 앞 복도에서 |
| 130 | `after_miss_seoyeon_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 너 아까 점심시간에 어디 갔었어? |
| 131 | `after_miss_seoyeon_3` | {name} | school_hallway | seyoun_normal |  | 🌅 | 점심시간에 어디라니? |
| 132 | `after_miss_seoyeon_4` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 일부러 옥상 문까지 열어 두고 있었는데 끝까지 안 올라 |
| 133 | `after_miss_seoyeon_5` | {name} | school_hallway | seyoun_normal |  | 🌅 | 설마 옥상에서 계속 나 기다린 거야? |
| 134 | `after_miss_seoyeon_6` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 기다리긴 누가 기다려, 내 도시락 먼저 먹고 있었지.  |
| 135 | `after_miss_seoyeon_7` | {name} | school_hallway | seyoun_normal |  | 🌅 | *서연은 클립보드를 가슴께로 끌어안으며 시선을 살짝 피 |
| 136 | `after_miss_seoyeon_8` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 내일 점심엔 다른 데로 새지 마. |
| 137 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교를 알리는 안내 방송이 끝난 뒤 노을빛만 남은 복 |
| 138 | `after_hidden_nurse_intro` | {name} | school_hallway | 없음 |  | 🌅 | *갑자기 핑 도는 어지럼증에 차가운 복도 벽을 짚고 멈 |
| 139 | `after_hidden_nurse_choice` | {name} | school_hallway | 없음 |  | 🌅 | *아침부터 낯선 시선과 소음 속에 부대낀 피로가 한꺼번 |
| 140 | `after_hidden_nurse_intro_b` | {name} | school_hallway | 없음 |  | 🌅 | *가쁜 숨을 한 번 골라 쉬고 서늘한 금속 문손잡이를  |
| 141 | `after_nurse_d1_aff` |  | nurse_room | 없음 |  | 🌅 |  |
| 142 | `after_nurse_enter_1` | {name} | nurse_room | nurse_normal |  | 🌅 | *문을 열자 알싸한 소독약 냄새 위로 은은하고 달콤한  |
| 143 | `after_nurse_enter_2` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 어라, 방과후에 늦은 손님이네. |
| 144 | `after_nurse_enter_2_b` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건선생님이 새 진료 기록지 한 장을 끌어당겨 가느다 |
| 145 | `after_nurse_enter_3` | {name} | nurse_room | nurse_normal |  | 🌅 | 갑자기 속이 좀 울렁거리고 어지러워서요. |
| 146 | `after_nurse_enter_4` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 오늘 온 전학생 맞지? 첫날부터 보건실 찾을 정도면 하 |
| 147 | `after_nurse_enter_4_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 제가 전학생인 건 어떻게 바로 아셨어요? |
| 148 | `after_nurse_enter_4_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 일단 처음 보는 잘생긴 얼굴이기도 하고 교복 재킷에 접 |
| 149 | `after_nurse_enter_4_d` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *여유로운 눈웃음을 지으며 전자체온계를 건네더니 책상  |
| 150 | `after_nurse_enter_5` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *체온계 숫자를 확인한 뒤 내 소매를 걷어 올리고 서늘 |
| 151 | `after_nurse_enter_6` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 다행히 열은 없는데 혈압이 평소보다 살짝 떨어져 있네. |
| 152 | `after_nurse_enter_6_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 사실 오늘 아침에 긴장해서 밥을 거의 못 먹고 나왔거든 |
| 153 | `after_nurse_enter_7` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 빈속에 온종일 신경 썼으니 어지러울 수밖에. 자, 저쪽 |
| 154 | `after_nurse_enter_7_b` | {name} | nurse_room | nurse_normal |  | 🌅 | *안쪽 침대에 몸을 뉘자 빳빳하게 풀 먹인 하얀 시트가 |
| 155 | `after_nurse_enter_7_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *선생님이 침대 둘레의 커튼을 반쯤 끌어 노을빛을 가려 |
| 156 | `after_nurse_enter_7_d` | {name} | nurse_room | nurse_normal |  | 🌅 | 그냥 미지근한 물 한 잔이면 충분해요. |
| 157 | `after_nurse_enter_choice` | {name} | nurse_room | nurse_normal |  | 🌅 | *반쯤 닫힌 하얀 커튼 너머로 기록지를 작성하는 보건선 |
| 158 | `after_nurse_enter_trap` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 학생들이 없을 땐 일지도 정리하고 약품 재고도 맞춰야  |
| 159 | `after_nurse_enter_8` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 무리해서 말 길게 이어 갈 필요 없어. 현기증 날 때는 |
| 160 | `after_nurse_enter_8_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 이렇게 잠깐 누워 있으면 금방 가라앉을까요? |
| 161 | `after_nurse_enter_8_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *커튼 틈으로 다가와 종이컵에 담긴 물을 건네며 내 손 |
| 162 | `after_nurse_enter_8_d` | {name} | nurse_room | nurse_normal |  | 🌅 | *물을 한 모금 머금고 고요한 보건실 안을 둘러본다.  |
| 163 | `after_nurse_enter_9_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 창가에 있는 저 초록색 화분도 선생님이 직접 키우시는  |
| 164 | `after_nurse_enter_9_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 응, 로즈마리야. 내가 예전에 대학병원에서 일할 때부터 |
| 165 | `after_nurse_enter_9_d` | {name} | nurse_room | nurse_normal |  | 🌅 | 학교 오시기 전엔 큰 병원에 계셨어요? |
| 166 | `after_nurse_enter_9_e` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *선생님의 가느다란 손가락이 책상 서랍 손잡이를 한 번 |
| 167 | `after_nurse_enter_10` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 다 지나간 옛날얘기야. 난 지금 이 학교가 훨씬 좋아. |
| 168 | `after_nurse_enter_10_b` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 자, 약속한 10분 지났네. 이제 속은 좀 어때? *진 |
| 169 | `after_nurse_enter_10_c` | {name} | nurse_room | nurse_normal |  | 🌅 | 덕분에 많이 가라앉았어요. 감사합니다. |
| 170 | `after_nurse_enter_11` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 다행이네. 앞으로도 어지러우면 언제든 찾아와, 보건실  |
| 171 | `after_nurse_enter_11_b` | {name} | nurse_room | nurse_angry |  | 🌅 | 환자를 혼내기도 하세요? |
| 172 | `after_nurse_enter_11_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *진료 기록지 위에서 볼펜을 데구루루 굴리며 눈을 가늘 |
| 173 | `after_nurse_enter_11_d` | 보건선생님 | nurse_room | nurse_angry |  | 🌅 | *빈 종이컵을 받아 책상 위에 내려놓자 나지막하고 둔탁 |
| 174 | `after_nurse_enter_11_e` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *아까 내가 건넸던 말이 떠올랐는지 가운 깃 너머로 하 |
| 175 | `after_nurse_enter_11_j` |  | 없음 | 없음 |  | 🌅 |  |
| 176 | `after_nurse_enter_11_k` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 아, 맞다 전학생. |
| 177 | `after_nurse_enter_11_l` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 차트에 적어야 하는데 네 이름이 뭐야? |
| 178 | `after_nurse_enter_11_m` | {name} | nurse_room | nurse_normal |  | 🌅 | 3학년 2반 {name}입니다. |
| 179 | `after_nurse_enter_12` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 차트에 잘 적어 둘게. 가다가 또 현기증 나면 복도에서 |
| 180 | `after_nurse_enter_12_b` | {name} | nurse_room | nurse_normal |  | 🌅 | *침대에서 내려서려는데 보건선생님이 벽시계를 한 번 확 |
| 181 | `after_nurse_freetalk` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *체온계를 케이스에 넣고 진료 기록의 시간을 확인한다. |
| 182 | `night_start` | {name} | room_my | 없음 |  |  | *집으로 돌아와 아직 낯선 새 교복을 옷걸이에 걸어 두 |
| 183 | `night_start_3` | {name} | room_my | 없음 |  |  | *고요한 방 안, 머리맡에 둔 휴대폰이 짧게 진동하며  |
| 184 | `night_msg_yuna_1` | 유나 | room_my | yuna_normal | 0.35 |  | 오늘 점심엔 옆에서 조용히 있어 줘서 고마웠어 |
| 185 | `night_msg_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | 내일도 내 옆자리 비워 놓을게 |
| 186 | `night_msg_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *짧고 담백한 '내 옆자리 비워 놓을게'라는 문장을 몇 |
| 187 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 대화창을 닫으려는데 상단 알림 바에 학교 앱  |
| 188 | `night_hidden_nurse_1` | {name} | room_my | nurse_normal | 0.35 |  | *학교 건강 관리 앱에 새 알림이 떠 있다. '보건실  |
| 189 | `night_hidden_nurse_2` | {name} | room_my | nurse_normal | 0.35 |  | *보건선생님의 나긋한 목소리가 귓가에 들리는 듯해 일어 |
| 190 | `night_late_transition` | {name} | room_my | 없음 |  |  | *불을 끄고 막 눈을 감으려는데 정적을 깨고 휴대폰이  |
| 191 | `night_late_branch` | {name} | room_my | 없음 |  |  | *어두운 방 안, 손에 쥔 액정 화면이 하얗게 빛을 낸 |
| 192 | `night_end_1` | {name} | room_my | 없음 |  |  | *휴대폰을 내려놓고 어두운 천장을 올려다본다. 옷걸이에 |
| 193 | `night_end_3` | {name} | room_my | 없음 |  |  | *연락처에 나란히 저장된 새로운 이름들을 한 번 더 눈 |
| | **Day 2** | | | | | | |
| 194 | `morning2_start` | {name} | room_school | 없음 |  |  | *전학 온 지 이틀째 아침. 교복 소매에 남았던 빳빳한 |
| 195 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 196 | `morning2_greet_none_tone` |  | room_school | 없음 |  |  |  |
| 197 | `morning2_greet_none_1` | {name} | room_school | 없음 |  |  | *교실 문을 열고 들어서도 먼저 다가오는 사람은 없다. |
| 198 | `morning2_greet_none_2` | {name} | room_school | yuna_normal |  |  | *서연은 교탁 앞에서 출석부만 넘기고 다인은 반대편 친 |
| 199 | `morning2_yuna_seen` | 유나 | room_school | yuna_normal |  |  | ...너 혹시 전학 오기 전에도 이 학교에 와 본 적  |
| 200 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *가방을 걸고 자리에 앉으려는데 책상 한가운데에 정갈하 |
| 201 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 202 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가던 서연이 열린 교실 앞문 틈으로 고개를 |
| 203 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 바쁜 학생회장이 아침부터 남의 교실 앞까지 직접 인사하 |
| 204 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 교무실에 서류 갖다주러 가는 길에 잠깐 멈춘 거야. 그 |
| 205 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | 얼굴 확인했으니까 이제 간다. 아침 조회 늦지 말고.  |
| 206 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연의 긴 머리카락이 사라진 복도 쪽을 바라보고 있는 |
| 207 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 온 지 이틀 만에 학생회장님이 직접 문 앞까 |
| 208 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 그건 그냥 네가 인기가 없는 게 아닐까. |
| 209 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 뼈 때리지 마라, 사실이긴 한데 지금 그게 핵심이 아니 |
| 210 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *복도 유리창 너머로 클립보드를 가슴에 안은 서연이 귓 |
| 211 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 오호, 도도한 회장님도 우리 전학생한테 꽤 관심 있나  |
| 212 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | 방금 '우리' 전학생이라고 했어? |
| 213 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 당연하지, 같은 반에다 바로 옆자리 짝꿍이잖아! 그 정 |
| 214 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *1교시가 끝나고 시끌벅적한 교실 열기를 식히려 복도  |
| 215 | `morning2_seo_dust_1` | 서연 | school_hallway | seyoun_normal |  |  | 너 1교시 수업 듣는 동안 대체 뭘 한 거야. *쉬는  |
| 216 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 움직이지 말고 잠깐 가만히 있어 봐. |
| 217 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *한 걸음 다가선 서연의 하얀 손끝이 내 교복 어깨에  |
| 218 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 어깨에 분필 가루 같은 게 묻어 있었어. |
| 219 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | 말도 없이 갑자기 손이 훅 들어와서 놀랐잖아. *괜히  |
| 220 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 뭘 그렇게까지 놀라? 그냥 먼지 털어 준 건데. |
| 221 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *분명 먼지는 다 털어 냈는데도 서연의 손끝이 닿았던  |
| 222 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 방금 그거 뭐야? 학생회장이 네 어깨 만진 거 맞 |
| 223 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 만진 게 아니라 어깨에 묻은 먼지 털어 준 거야. |
| 224 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 수상한데, 거기 진짜로 먼지가 붙어 있긴 했어? |
| 225 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | 진짜로 먼지 털어 준 것뿐이라니까. 왜 눈을 그렇게 뜨 |
| 226 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *아침에 받은 유나의 쪽지를 손안에 쥔다. 수업 사이마 |
| 227 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *이틀째 점심시간, 누구의 곁으로 향할까.* |
| 228 | `lunch2_dain_1_check` | {name} | school_hallway | 없음 |  |  | *다인의 활기찬 발걸음에 맞춰 지하 매점 쪽으로 내려간 |
| 229 | `lunch2_dain_1b_yuna` | {name} | store | dain_normal |  |  | *다인의 어깨에 떠밀리듯 시끌벅적한 매점 인파 속으로  |
| 230 | `lunch2_dain_1b_yuna_aff` |  | store | 없음 |  |  |  |
| 231 | `lunch2_dain_2_cool` | 다인 | store | dain_normal |  |  | 왔으면 뒤에 줄이나 서. 오늘 빵값은 네가 내는 거 알 |
| 232 | `lunch2_dain_cool_cont` | {name} | store | dain_normal |  |  | *소보로빵 두 개를 집어 계산을 마친다. 다인은 말없이 |
| 233 | `lunch2_dain_cool_leave` | {name} | school_hallway | 없음 |  |  | *계산을 마치고 매점 밖 복도로 나오자 다인은 뒤도 돌 |
| 234 | `lunch2_dain_end_b` | {name} | playground | 없음 |  |  | *오후 5교시 체육 시간, 공을 쫓던 옆 반 학생과 강 |
| 235 | `lunch2_dain_end_c` | 체육교사 | playground | 없음 |  |  | 상처에 흙 들어갔겠다. 빨리 보건실 가서 소독부터 받고 |
| 236 | `lunch2_dain_end_d` | {name} | nurse_room | 없음 |  |  | *조심스레 보건실 문을 열고 들어선다. 어제 맡았던 알 |
| 237 | `lunch2_dain_end_e` | 보건선생님 | nurse_room | nurse_normal |  |  | *진료 기록지를 정리하다 고개를 든 선생님의 눈매가 부 |
| 238 | `lunch2_dain_end_f` | {name} | nurse_room | nurse_normal |  |  | 체육 시간에 넘어져서 팔꿈치가 좀 까졌어요. |
| 239 | `lunch2_dain_end_g` | 보건선생님 | nurse_room | nurse_normal |  |  | 이틀 연속으로 찾아오다니, 벌써 내 보건실 단골이라도  |
| 240 | `lunch2_dain_end_i` | {name} | nurse_room | nurse_normal |  |  | 팔꿈치 아래에 수건까지 받치는 거예요? 생각보다 처치  |
| 241 | `lunch2_dain_end_j` | 보건선생님 | nurse_room | nurse_normal |  |  | 소독약 닿으면 조금 따가울 거야. 어깨랑 팔에 힘 쭉  |
| 242 | `lunch2_dain_end_l` | 보건선생님 | nurse_room | nurse_normal |  |  | *상처 위로 숨결을 가볍게 불어 준 뒤 방수 밴드를 밀 |
| 243 | `lunch2_dain_end_nurse_short1` | 보건선생님 | nurse_room | nurse_normal |  |  | 자, 다 됐다. 다음부턴 공만 보고 뛰지 말고 주변 사 |
| 244 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *종례가 끝난 방과 후 교실. 쉬는 시간마다 꺼냈던 휴 |
| 245 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 당장 체육관으로 튀어 와! 오늘은 진짜 제대로 된 내기 |
| 246 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 방과후에 학생회실로 잠깐 와 줄 수 있어? 오늘따라 일 |
| 247 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게선 따로 온 메시지가 없다. 대신 주머니 속  |
| 248 | `after2_nurse_transition` | {name} | school_hallway | 없음 |  | 🌅 | *아까 5교시 체육 시간 뒤에 붙였던 팔꿈치 밴드 모서 |
| 249 | `hidden_nurse_d2_1` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건실에 들러 소매를 걷어 올리자 밴드 한쪽 끝이 반 |
| 250 | `hidden_nurse_d2_2` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 어라, 붙인 지 반나절도 안 돼서 밴드가 반품 들어왔네 |
| 251 | `hidden_nurse_d2_3` | {name} | nurse_room | nurse_normal |  | 🌅 | 움직이다 보니까 밴드 끝이 자꾸 셔츠 소매에 걸려서요. |
| 252 | `hidden_nurse_d2_4` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 팔 이쪽으로 내밀어 봐, 어디 보자. |
| 253 | `hidden_nurse_d2_5` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *선생님의 서늘한 손끝이 들뜬 밴드를 조심스레 떼어 내 |
| 254 | `hidden_nurse_d2_choice1` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건선생님이 내 손목을 감싸 쥐고 팔꿈치를 천천히 접 |
| 255 | `hidden_nurse_d2_choice1_b` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 당연하지, 이게 내 일이니까. 대충 붙여서 보냈다가 수 |
| 256 | `hidden_nurse_d2_6` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건선생님이 새 밴드 포장지를 휴지통에 버린다. 아까 |
| 257 | `hidden_nurse_d2_7` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *서랍 쪽으로 향한 내 시선을 눈치채고 가느다란 손바닥 |
| 258 | `hidden_nurse_d2_choice2` | {name} | nurse_room | nurse_shy |  | 🌅 | *서랍 손잡이를 감싼 선생님의 하얀 손마디에 미세한 힘 |
| 259 | `hidden_nurse_d2_choice2_a` | 보건선생님 | nurse_room | nurse_shy |  | 🌅 | *닫힌 서랍 앞면을 검지로 톡톡 두드린다.* 아까 코코 |
| 260 | `hidden_nurse_d2_8` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 자, 훨씬 단단하게 붙였어. 오늘 밤엔 진짜로 물 닿지 |
| 261 | `hidden_nurse_d2_9` |  | 없음 | 없음 |  | 🌅 |  |
| 262 | `hidden_nurse_d2_freetalk` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *사용한 소독솜을 버리고 밴드 가장자리를 한 번 눌러  |
| 263 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *석양이 물들기 시작하는 방과후, 어디로 발걸음을 옮길 |
| 264 | `after2_yuna_1` | {name} | annex_exhibit_hallway | 없음 |  | 🌅 | *아침에 받았던 쪽지를 떠올리며 인적 드문 도서관 별관 |
| 265 | `after2_yuna_1_b` | {name} | annex_exhibit_hallway | 없음 |  | 🌅 | *노을이 비스듬히 스며든 별관 복도에는 인기척 하나 없 |
| 266 | `after2_yuna_2` | {name} | yuna_hideout_day.webp | yuna_normal |  | 🌅 | *문을 밀자 경첩이 나직이 삐걱거린다. 안쪽 소파에 깊 |
| 267 | `after2_yuna_tone` |  | yuna_hideout_day.webp | 없음 |  | 🌅 |  |
| 268 | `after2_yuna_cool_1` | 유나 | yuna_hideout_day.webp | yuna_bored |  | 🌅 | *소파 위 이어폰 한쪽만 슬쩍 치운다.* 옆에서 책 읽 |
| 269 | `after2_yuna_cool_cont` | {name} | yuna_hideout_day.webp | yuna_bored |  | 🌅 | *펼쳐진 책 한 페이지를 조용히 내려 읽는다. 유나는  |
| 270 | `after2_yuna_rival_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 271 | `after2_yuna_rival_dain_low` | 다인 | school_hallway | dain_laugh |  | 🌅 | 도서관 별관 쪽에 있었구나? 조심히 들어가고 내일 봐! |
| 272 | `after2_yuna_rival_seo_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 273 | `after2_yuna_rival_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 부족하던 일손은 다른 부원들로 채웠어. 내일 보자. |
| 274 | `after2_group_yuna_companion` | 유나 | library_old | 없음 |  | 🌅 | *별관 책상에 자료 두 묶음이 놓인다.* 한쪽을 끝내기 |
| 275 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *미묘한 여운이 감도는 대화를 마치고 가방을 고쳐 멘  |
| 276 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 277 | `minsu_warn_1` | {name} | school | 없음 |  | 🌅 | *노을이 지는 하교길. 교문을 막 나서는데 등 뒤에서  |
| 278 | `minsu_warn_1_b` | 민수 | school | minsu_normal |  | 🌅 | *내 보폭에 맞춰 옆에 나란히 서더니 주머니에 두 손을 |
| 279 | `minsu_warn_2` | 민수 | school | minsu_smirk |  | 🌅 | 야, 전학생. |
| 280 | `minsu_warn_3` | {name} | school | minsu_smirk |  | 🌅 | 응? 왜 불러? |
| 281 | `minsu_warn_4` | 민수 | school | minsu_smirk |  | 🌅 | 너 요즘 학교 다니는 거 꽤 재밌냐? |
| 282 | `minsu_warn_4_b` | {name} | school | minsu_normal |  | 🌅 | *민수는 내 쪽을 보지 않고 교문 건너편 깜빡이는 횡단 |
| 283 | `minsu_warn_5` | {name} | school | minsu_smirk |  | 🌅 | 갑자기 그게 무슨 소리야? |
| 284 | `minsu_warn_6` | 민수 | school | minsu_smirk |  | 🌅 | 점심엔 한 명, 방과후엔 또 한 명. 넌 재밌겠지. — |
| 285 | `night2_start` | {name} | room_my | 없음 |  |  | *따뜻한 물로 샤워를 마치고 젖은 머리를 털며 침대에  |
| 286 | `night2_msg_1` |  | 없음 | 없음 |  |  |  |
| 287 | `night2_msg_generic` | 다인 | room_my | dain_normal | 0.35 |  | 야 내일 아침에 교실에서 보자 늦지 마! |
| 288 | `night2_msg_generic_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 점심엔 옥상 열어 놓을게 |
| 289 | `night2_msg_generic_3` |  | 없음 | 없음 |  |  |  |
| 290 | `night2_msg_generic_3_established` | 유나 | room_my | yuna_normal | 0.35 |  | 내가 빌려준 책, 어디까지 읽었어? |
| 291 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *나란히 도착한 대화방 세 개를 번갈아 바라본다. 누구 |
| 292 | `night2_choice` | {name} | room_my | 없음 |  |  | *세 개의 말풍선 중 누구에게 가장 먼저 답장을 보낼까 |
| 293 | `night2_reply_dain_1` |  | 없음 | 없음 |  |  |  |
| 294 | `night2_reply_dain_1_first` | {name} | room_my | dain_normal | 0.35 |  | 내일 학교 앞에서 떡볶이 먹을래? 난 매운 건 좀 약한 |
| 295 | `night2_reply_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | 어라 너 설마 매운 거 잘 못 먹는 체질이야? |
| 296 | `night2_reply_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | 그럼 내일은 너 맞춰서 제일 순한 맛으로 시켜 줄게. |
| 297 | `night2_reply_dain_4` | 다인 | room_my | dain_normal | 0.35 |  | 아 근데 솔직히 안 매운 건 떡볶이라고 부르면 안 되지 |
| 298 | `night2_reply_dain_5` | {name} | room_my | dain_normal | 0.35 |  | *오늘 밤에도 다인다운 경쾌한 말풍선이 세 줄 연속으로 |
| 299 | `night2_reply_dain_react_default` | 다인 | room_my | dain_normal | 0.35 |  | ㅋㅋ 오케이 알겠어. 오늘 푹 자고 굿나잇! |
| 300 | `night2_dain_freetalk` | 다인 | room_my | dain_normal | 0.35 | 🌙 | 잠깐, 진짜 자기 전에. 오늘 제일 재밌었던 건 뭐였어 |
| 301 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 창을 정리하려는데 상단 알림 목록 사이에 학교 |
| 302 | `night2_hidden_nurse_1` | {name} | room_my | nurse_normal | 0.35 |  | *건강 관리 앱 알림이 떠 있다. '보건실 기록: 전학 |
| 303 | `night2_hidden_nurse_2` | {name} | room_my | nurse_normal | 0.35 |  | *이불 위에서 팔꿈치를 천천히 한 번 굽혀 본다. 선생 |
| 304 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 마치고 길게 숨을 내쉬며 베개 옆으로 휴대폰을 |
| 305 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *남은 두 사람에게도 답장을 보내려다 손가락이 굳는다. |
| 306 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *사진첩 스크롤을 끝까지 내리자 나타난 3개월 전 봄  |
| 307 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *차마 전송 버튼을 누르지 못했던 문장들이 휴대폰 메모 |
| 308 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 임시 저장 메모가 마지막 문장이다. 그 아래 |
| 309 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *떨리는 엄지손가락을 사진 아래 휴지통 삭제 아이콘 위 |
| 310 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *다시 켠 메신저 목록에는 아직 내가 답하지 못한 두  |
| 311 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *방금 닫았던 소정이의 사진을 한 번 더 열어 본다.  |
| 312 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *가슴 한구석이 묵직하게 내려앉아 끝내 나머지 두 개의 |
| 313 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면 위로 세 사람의 이름이 나란히 쌓여 있다.  |
| 314 | `night2_end_2_b` |  | 없음 | 없음 |  |  |  |
| 315 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *액정 불빛이 완전히 꺼진 뒤에도 미지근한 열기가 남은 |
| 316 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *잠이 오지 않아 부엌으로 나와 불을 켠다. 내일 싸  |
| 317 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *서툰 손길로 부쳐 낸 계란말이와 소시지, 김과 밥을  |
| | **Day 3** | | | | | | |
| 318 | `morning3_start` | {name} | school | 없음 |  |  | *전학 사흘째, 금요일 아침. 밤늦도록 깜빡이는 메시지 |
| 319 | `morning3_start_2` | {name} | school | 없음 |  |  | *어깨에 멘 가방끈을 꽉 쥐고 숨이 턱 끝까지 차오르도 |
| 320 | `hidden_nurse_d3_check` | {name} | room_school | 없음 |  |  | *쉬는 시간이 끝나 가고 복도 끝에서 발소리가 분주해진 |
| 321 | `hidden_nurse_d3_1` | {name} | nurse_room | nurse_normal |  |  | *다음 쉬는 시간, 무거운 발걸음으로 보건실 문을 연다 |
| 322 | `hidden_nurse_d3_1_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *차트를 정리하던 보건선생님이 고개를 들고 가운 자락을 |
| 323 | `hidden_nurse_d3_1_c` | {name} | nurse_room | nurse_normal |  |  | 몸이 다쳐서 온 건 아닌데요. |
| 324 | `hidden_nurse_d3_1_d` | 보건선생님 | nurse_room | nurse_normal |  |  | *선생님이 내 쪽으로 반 걸음 다가오며 눈썹을 살짝 올 |
| 325 | `hidden_nurse_d3_1_e` | {name} | nurse_room | nurse_normal |  |  | 교실 공기가 좀 숨 막혀서요. 잠깐만 쉬었다 가고 싶습 |
| 326 | `hidden_nurse_d3_2` | 보건선생님 | nurse_room | nurse_normal |  |  | 열이 나는 건 아니고? 얼굴빛이 영 가라앉아 있는데. |
| 327 | `hidden_nurse_d3_3` | {name} | nurse_room | nurse_normal |  |  | 조금만 조용히 숨 돌리고 싶어서요. 사람 관계가 자꾸  |
| 328 | `hidden_nurse_d3_3_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 들고 있던 머그컵을 책상 위에 소리 없이 |
| 329 | `hidden_nurse_d3_3_c` |  | 없음 | 없음 |  |  |  |
| 330 | `hidden_nurse_d3_3_d` |  | 없음 | 없음 |  |  |  |
| 331 | `hidden_nurse_d3_4` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님은 침대 쪽 커튼을 반쯤 치고 따뜻한 물이  |
| 332 | `hidden_nurse_d3_5_b` |  | 없음 | 없음 |  |  |  |
| 333 | `hidden_nurse_d3_5_c` |  | 없음 | 없음 |  |  |  |
| 334 | `hidden_nurse_d3_5_d` | {name} | nurse_room | nurse_normal |  |  | *컵을 건네는 보건선생님의 따뜻한 손끝이 내 손등을 스 |
| 335 | `hidden_nurse_d3_5_e` | {name} | nurse_room | nurse_normal |  |  | 같은 반 애들한테는 꺼내기 어려운 이야기들이 자꾸 쌓여 |
| 336 | `hidden_nurse_d3_5_f` |  | 없음 | 없음 |  |  |  |
| 337 | `hidden_nurse_d3_5_g` | {name} | nurse_room | nurse_normal |  |  | 누군가를 상처 주거나 실망시킬까 봐, 정작 해야 할 대 |
| 338 | `hidden_nurse_d3_5_h` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 자기 몫의 종이컵을 책상 모서리에 반듯하 |
| 339 | `hidden_nurse_d3_5_i` | 보건선생님 | nurse_room | nurse_normal |  |  | 듣자 하니 그거, 연애 상담 같은데? |
| 340 | `hidden_nurse_d3_5_j` | {name} | nurse_room | nurse_normal |  |  | 아, 꼭 그런 거창한 건 아니고요. |
| 341 | `hidden_nurse_d3_5_k` | 보건선생님 | nurse_room | nurse_normal |  |  | *선생님이 작게 소리 내어 웃는다.* 아니라고 잡아떼기 |
| 342 | `hidden_nurse_d3_5_m` | 보건선생님 | nurse_room | nurse_normal |  |  | 이게 정식 보건 업무에 들어가는진 모르겠지만 오늘만 특 |
| 343 | `hidden_nurse_d3_5_n` | {name} | nurse_room | nurse_normal |  |  | 선생님도 주변 사람들을 다 챙기려다가 도저히 감당이 안 |
| 344 | `hidden_nurse_d3_5_o` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님의 속눈썹이 파르르 떨리며 창밖으로 시선이  |
| 345 | `hidden_nurse_d3_5_p` | 보건선생님 | nurse_room | nurse_normal |  |  | 있었지. 학교로 오기 전, 대학병원 병동에서 일할 때. |
| 346 | `hidden_nurse_d3_5_q` | {name} | nurse_room | nurse_normal |  |  | 대학병원에서 근무하셨어요? |
| 347 | `hidden_nurse_d3_choice1` | {name} | nurse_room | nurse_normal |  |  | *가운 주머니에 손을 넣는 선생님의 옆모습이 유난히 고 |
| 348 | `hidden_nurse_d3_choice1_b` | 보건선생님 | nurse_room | nurse_normal |  |  | 배려해 줘서 고마워. 내가 감당할 수 있는 만큼만 짧게 |
| 349 | `hidden_nurse_d3_6` | 보건선생님 | nurse_room | nurse_normal |  |  | 대학병원 병동에선 호출벨이 사방에서 동시에 울리면 어느 |
| 350 | `hidden_nurse_d3_6_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *선생님이 물컵을 내려놓자 유리판 위로 둥근 물기 자국 |
| 351 | `hidden_nurse_d3_6_c` | 보건선생님 | nurse_room | nurse_sad |  |  | 모두에게 좋은 간호사이고 싶었는데 그 욕심 때문에 나  |
| 352 | `hidden_nurse_d3_6_d` | {name} | nurse_room | nurse_sad |  |  | 학교로 옮기시기 전에 그 병원에서 결정적인 일이 있었던 |
| 353 | `hidden_nurse_d3_6_e` | 보건선생님 | nurse_room | nurse_sad |  |  | 있었어. 끝내 살리지 못한 환자가 한 명 있었거든. 딱 |
| 354 | `hidden_nurse_d3_6_f` | {name} | nurse_room | nurse_sad |  |  | *전에 서랍 틈으로 보았던 연두색 노트가 스친다. 첫  |
| 355 | `hidden_nurse_d3_7` | 보건선생님 | nurse_room | nurse_normal |  |  | 그래서 이 학교로 왔어. 여기선 호출벨에 쫓기지 않고  |
| 356 | `hidden_nurse_d3_7_b` |  | 없음 | 없음 |  |  |  |
| 357 | `hidden_nurse_d3_8` | 보건선생님 | nurse_room | nurse_normal |  |  | 그러니까 너도 네가 감당할 수 있는 마음부터 솔직하게  |
| 358 | `hidden_nurse_d3_8_c` | {name} | nurse_room | nurse_normal |  |  | 조언 고맙습니다, 선생님. |
| 359 | `hidden_nurse_d3_8_d` | 보건선생님 | nurse_room | nurse_normal |  |  | 혼자 정리하기 버거우면 언제든 다시 말해. 필요하면 전 |
| 360 | `hidden_nurse_d3_8_e` | {name} | nurse_room | nurse_normal |  |  | *선생님이 건넨 상담실 안내 카드를 반으로 접어 교복  |
| 361 | `hidden_nurse_d3_8_f` | {name} | nurse_room | 없음 |  |  | *자리에서 일어나 보건실 문손잡이를 잡는다. 등 뒤에서 |
| 362 | `hidden_nurse_d3_8_h` | {name} | nurse_room | 없음 |  |  | 선생님, 저 잠깐만요. *차마 문을 열지 못하고 돌아선 |
| 363 | `hidden_nurse_d3_choice2` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 서랍을 천천히 닫으며 나를 올려다본다.  |
| 364 | `hidden_nurse_d3_choice2_a` | 보건선생님 | nurse_room | nurse_normal |  |  | 응. 그 상태에서 억지로 버티다간 다른 환자 앞에서도  |
| 365 | `hidden_nurse_d3_9` | 보건선생님 | nurse_room | nurse_normal |  |  | 답답할 때 찾아오는 건 언제든 환영이야. 다만 내가 네 |
| 366 | `hidden_nurse_d3_9_b` | {name} | nurse_room | nurse_normal |  |  | *빈 종이컵을 내려놓고 주머니에 넣었던 안내 카드를 다 |
| 367 | `hidden_nurse_d3_9_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 네가 혼자 감당하기 어려운 선을 넘으면 그땐 담임선생님 |
| 368 | `hidden_nurse_d3_9_d` | 보건선생님 | nurse_room | nurse_normal |  |  | 물론 그 전에 누구에게 어디까지 공유할지는 반드시 너랑 |
| 369 | `hidden_nurse_d3_9_f` | {name} | nurse_room | nurse_normal |  |  | *예약표에는 보건실과 상담실의 빈 시간대가 나란히 적혀 |
| 370 | `hidden_nurse_d3_11` | 보건선생님 | nurse_room | nurse_normal |  |  | 다음 수업 종 치기 전까지 아직 몇 분 남았네. 더 묻 |
| 371 | `hidden_nurse_d3_freetalk` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 커튼을 반쯤 여미고 내 맞은편으로 바짝  |
| 372 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | *복도 창가에서 서연이 반 걸음 다가서며 목소리를 낮춘 |
| 373 | `morning3_date_seo_skip` |  | school_hallway | 없음 |  |  |  |
| 374 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끄고는 눈이 마주치 |
| 375 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 자, 그럼 이제 내 차례지! 이번 주말에 나랑 오락실  |
| 376 | `morning3_date_dain_skip` |  | room_school | 없음 |  |  |  |
| 377 | `morning3_date_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 이쪽을 흘끗 보다가 가방 지퍼를 끝까지 당겨  |
| 378 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심시간 직전, 유나가 소리 없이 다가와 네모나게 접 |
| 379 | `morning3_date_yuna_skip` |  | room_school | 없음 |  |  |  |
| 380 | `morning3_date_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 접어 둔 쪽지 끝을 만지작거리다 다시 책갈피  |
| 381 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 382 | `morning3_end` | {name} | room_school | 없음 |  |  | *오전 마지막 수업을 끝내는 종이 울리고 폭풍 전야 같 |
| 383 | `morning3_end_b` |  | 없음 | 없음 |  |  |  |
| 384 | `lunch3_start` | 유나 | room_school | yuna_normal |  |  | 내 빵도 반 나눠 먹어. *사흘째 점심, 교실에서 책상 |
| 385 | `lunch3_start_2_b` | 다인 | room_school | yuna_normal |  |  | 이 계란말이, 내가 먼저 먹어도 되는 거지? 일단 맛부 |
| 386 | `lunch3_meal_1` | 다인 | room_school | yuna_normal |  |  | 오, 간 딱 맞는데! 회장님도 얼른 드세요. 오늘은 옆 |
| 387 | `lunch3_meal_2` | {name} | room_school | yuna_normal |  |  | 잠깐만, 그건 내 도시락 반찬인데. |
| 388 | `lunch3_meal_3` | 서연 | room_school | yuna_normal |  |  | *서연이 내 도시락에서 계란말이 한 조각을 집어 맛본다 |
| 389 | `lunch3_meal_4` | {name} | room_school | yuna_normal |  |  | 남의 점심 반찬에 냉정하게 점수 매기지 마. |
| 390 | `lunch3_meal_5` | 서연 | room_school | yuna_normal |  |  | *서연의 입꼬리가 얄밉게 올라간다.* 10점 만점에 6 |
| 391 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *말없이 지켜보던 유나가 젓가락을 뻗어 도시락 한가운데 |
| 392 | `lunch3_meal_7` | {name} | room_school | yuna_normal |  |  | 유나야, 그 칼집 낸 소시지는 내가 제일 아껴 둔 건데 |
| 393 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *유나가 소시지를 천천히 베어 물며 맞은편의 다인을 바 |
| 394 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | 어, 잠깐만! 그건 마지막 남은 조각이야. *내 외침과 |
| 395 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *텅 빈 도시락통 한가운데에 노릇하게 구워진 마지막 계 |
| 396 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *숨소리조차 잦아든 식탁 위, 마지막 반찬을 건넬 사람 |
| 397 | `lunch3_give_seo_aff` |  | room_school | 없음 |  |  |  |
| 398 | `lunch3_give_seo_cool` | 서연 | room_school | seyoun_normal |  |  | 고마워, 잘 먹을게. |
| 399 | `lunch3_seo_skin_check` |  | room_school | seyoun_normal |  |  |  |
| 400 | `lunch3_give_seo_2_check` |  | room_school | 없음 |  |  |  |
| 401 | `lunch3_give_seo_dain_affinity` |  | room_school | 없음 |  |  |  |
| 402 | `lunch3_give_seo_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 자기 몫의 빵을 다 삼키고 물병 뚜껑을 잠근다 |
| 403 | `lunch3_give_seo_3_check` |  | room_school | 없음 |  |  |  |
| 404 | `lunch3_give_seo_yuna_affinity` |  | room_school | 없음 |  |  |  |
| 405 | `lunch3_give_seo_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 별다른 내색 없이 남은 빵 조각을 마저 입에  |
| 406 | `lunch3_end` | {name} | room_school | 없음 |  |  | *점심시간 종료를 알리는 종소리에 각자 도시락을 덮는다 |
| 407 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과 후, 노을빛 복도 갈림길에 선다. 사흘째 지나는 |
| 408 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *주머니 속 휴대폰을 만지작거린다. 엉켜 버린 주말 약 |
| 409 | `after3_choice` | {name} | school_hallway | 없음 |  | 🌅 | *석양이 물드는 복도 끝, 어디로 발걸음을 옮길까.* |
| 410 | `after3_walk_home` | {name} | school_hallway | 없음 |  | 🌅 | *오늘은 누구에게도 섣불리 말을 붙일 자신이 없다. 무 |
| 411 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *길었던 방과 후 시간이 끝났다. 복도 천장의 형광등이 |
| 412 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 413 | `after3_group_nurse_companion` | 보건선생님 | nurse_room | 없음 |  | 🌅 | *보건실 책상 위에 운동부 건강 점검표와 응급 비품 상 |
| 414 | `after3_group_return` | {name} | school_hallway | 없음 |  | 🌅 | *남은 일손 돕기를 마치고 저물어 가는 복도로 나온다. |
| 415 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 416 | `minsu_d3_check` | {name} | 없음 | 없음 |  | 🌅 |  |
| 417 | `night3_start` | {name} | room_my | 없음 |  |  | *금요일 밤, 지친 몸으로 방에 돌아와 교복 차림으로  |
| 418 | `night3_start_2` | {name} | room_my | 없음 |  |  | *불도 켜지 않은 방 안, 책상 위에 엎어 두었던 휴대 |
| 419 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *어두운 천장 아래로 휴대폰 불빛이 번진다. 도착해 있 |
| 420 | `night3_dream_1` | {name} | room_my | 없음 |  |  | *스탠드 조명을 끄려다 휴대폰을 한 번 더 집어 든다. |
| 421 | `night3_dream_2_b` | {name} | room_my | 없음 |  |  | *머리맡에 휴대폰을 내려놓는다. 내일 아침 마주 보며  |
| 422 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *잠들기 전, 휴대폰 갤러리 깊숙한 곳에서 예전 학교의 |
| 423 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *화면에 '이 사진을 삭제하시겠습니까?'라는 확인 창이 |
| 424 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *푸르스름한 액정 빛을 가만히 내려다본다. 소정이의 책 |
| 425 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *확인 창에서 조용히 취소를 누른다. 사진 한 장을 지 |
| 426 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼 대신 이동 메뉴를 눌러 사진을 새 폴더로  |
| 427 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *사진 아래에 짧은 메모를 남긴다. 소정이에게 끝내 건 |
| 428 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *새로 만든 폴더 안에 사진 한 장이 조용히 자리 잡는 |
| 429 | `night3_faithful_reflect_4_b` |  | 없음 | 없음 |  |  |  |
| 430 | `night3_faithful_reflect_4_c` |  | 없음 | 없음 |  |  |  |
| 431 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 내일 아침 알람을 맞춘다. 휴대폰을 내 |
| 432 | `night3_end` | {name} | room_my | 없음 |  |  | *금요일 시간표가 적힌 교과서를 덮고 스탠드 불을 완전 |
| | **Day 4** | | | | | | |
| 433 | `morning4_start` | {name} | room_my_day.webp | 없음 |  |  | *넷째 날, 토요일 아침. 커튼 틈으로 스며든 주말 햇 |
| 434 | `morning4_date_plan_check` |  | 없음 | 없음 |  |  |  |
| 435 | `morning4_fallback_msg` | {name} | room_my_day.webp | 없음 |  |  | *주말 아침의 고요한 방 안. 밤새 온 알림을 정리하고 |
| 436 | `morning4_hidden_check` | {name} | street | 없음 |  |  | *이른 아침 공기를 가르며 학교 앞 사거리 횡단보도에서 |
| 437 | `hidden_nurse_d4_morning_1` | {name} | nurse_room | nurse_normal |  |  | 선생님, 지난번에 잡아 주신 상담 시간에 맞춰 왔어요. |
| 438 | `hidden_nurse_d4_morning_3` | 보건선생님 | nurse_room | nurse_normal |  |  | 약속 시간 딱 맞춰서 왔네. 이쪽 의자에 편하게 앉아. |
| 439 | `hidden_nurse_d4_morning_4` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 차분한 손길로 상담 기록지를 펼치고 볼펜 |
| 440 | `hidden_nurse_d4_morning_5` | {name} | nurse_room | nurse_normal |  |  | 지난번에 나눴던 상담 내용 마무리하는 자리 맞죠? |
| 441 | `hidden_nurse_d4_morning_6` | 보건선생님 | nurse_room | nurse_normal |  |  | 응. 그사이 컨디션이 어땠는지 살피고 앞으로 힘들 때  |
| 442 | `hidden_nurse_d4_morning_7` | 보건선생님 | nurse_room | nurse_normal |  |  | *선생님의 시선이 지난 상담 때 꼼꼼히 적어 둔 체크리 |
| 443 | `hidden_nurse_d4_morning_8` | 보건선생님 | nurse_room | nurse_normal |  |  | 기록 닫기 전에 한 가지만 확실히 짚고 넘어가자. |
| 444 | `hidden_nurse_d4_morning_9` | {name} | nurse_room | nurse_normal |  |  | 어떤 건데요? |
| 445 | `hidden_nurse_d4_morning_10` | 보건선생님 | nurse_room | nurse_normal |  |  | *학교 상담 지원 안내문을 내 눈앞으로 반듯하게 돌려  |
| 446 | `hidden_nurse_d4_morning_11` | 보건선생님 | nurse_room | nurse_normal |  |  | 보건실 문이 닫혀 있을 때에도 네가 망설이지 않고 도움 |
| 447 | `hidden_nurse_d4_morning_choice` | {name} | nurse_room | nurse_normal |  |  | *인쇄된 안내문 종이 위로 담임 교사 상담, 위클래스  |
| 448 | `hidden_nurse_d4_morning_choice_b` | {name} | nurse_room | nurse_normal |  |  | 아직은 누구한테 말해야 할지 잘 모르겠어요. |
| 449 | `hidden_nurse_d4_morning_12` | 보건선생님 | nurse_room | nurse_normal |  |  | 처음부터 혼자 고르기 막막하면 선생님이랑 같이 추려 보 |
| 450 | `hidden_nurse_d4_morning_13` | 보건선생님 | nurse_room | nurse_normal |  |  | 네가 털어놓은 속마음을 허락 없이 남에게 옮기진 않아. |
| 451 | `hidden_nurse_d4_morning_freetalk` | 보건선생님 | nurse_room | nurse_normal |  |  | *상담 기록지 파일철을 부드럽게 덮는다.* 방금 같이  |
| 452 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 453 | `hidden_nurse_d4_1` | {name} | nurse_room | nurse_normal |  |  | *보건실 긴 책상 위로 학교 행사에 쓸 구급함과 소독  |
| 454 | `hidden_nurse_d4_1_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *선생님이 눈을 동그랗게 뜨며 몸을 돌린다.* 어라,  |
| 455 | `hidden_nurse_d4_2` | 보건선생님 | nurse_room | nurse_normal |  |  | 행사장에 비치할 응급키트 포장할 손이 모자라서 공고를  |
| 456 | `hidden_nurse_d4_2_b` | {name} | nurse_room | nurse_shy |  |  | 이번엔 아파서 온 환자 말고 일손 돕는 봉사자 자격이니 |
| 457 | `hidden_nurse_d4_2_c` | 보건선생님 | nurse_room | nurse_dry_smile |  |  | 좋아, 지금은 든든한 봉사자. 작업하다가 종이에 손이라 |
| 458 | `hidden_nurse_d4_2_d` | {name} | nurse_room | nurse_shy |  |  | 멸균 거즈랑 알코올 스왑은 손 닿기 편하게 이쪽에 분류 |
| 459 | `hidden_nurse_d4_2_e` | 보건선생님 | nurse_room | nurse_normal |  |  | *투명한 지퍼 파우치 묶음을 내 앞으로 건넨다.* 거즈 |
| 460 | `hidden_nurse_d4_2_f` | {name} | nurse_room | nurse_normal |  |  | 이 줄 파우치는 수량 맞춰서 다 채웠어요. 빠진 거 없 |
| 461 | `hidden_nurse_d4_2_g` | 보건선생님 | nurse_room | nurse_tired |  |  | 예전에 대학병원 병동에 있을 땐 이런 물품 준비도 밤새 |
| 462 | `hidden_nurse_d4_2_h` | {name} | nurse_room | nurse_shy |  |  | 그 많은 걸 혼자서 다 하셨다고요? |
| 463 | `hidden_nurse_d4_3` | {name} | nurse_room | nurse_normal |  |  | 옆에서 거들어 주는 동료들이 있다고 하셨잖아요. |
| 464 | `hidden_nurse_d4_4` | 보건선생님 | nurse_room | nurse_tired |  |  | 응급 환자가 몰리는 야간 당직 때는 간호사 세 명 몫의 |
| 465 | `hidden_nurse_d4_4_b` | {name} | nurse_room | nurse_normal |  |  | 그러다 몸이 축나서 번아웃이 오신 거군요. |
| 466 | `hidden_nurse_d4_4_c` | 보건선생님 | nurse_room | nurse_tired |  |  | 잠 못 자고 바빴던 것도 사실이긴 해. 하지만 단순히  |
| 467 | `hidden_nurse_d4_4_d` | 보건선생님 | nurse_room | nurse_tired |  |  | 그 시절 나를 제일 숨 막히게 했던 건 끝없는 업무량이 |
| 468 | `hidden_nurse_d4_4_e` | {name} | nurse_room | nurse_normal |  |  | 업무량이 아니면 뭐가 그렇게 힘드셨는데요? |
| 469 | `hidden_nurse_d4_4_f` | 보건선생님 | nurse_room | nurse_tired |  |  | 환자 얼굴이나 이름보다 차트에 적힌 병상 번호와 바이탈 |
| 470 | `hidden_nurse_d4_4_g` |  | 없음 | 없음 |  |  |  |
| 471 | `hidden_nurse_d4_4_h` | 보건선생님 | nurse_room | nurse_normal |  |  | 학교 보건실에서는 찾아오는 아이들 눈을 한 명씩 똑바로 |
| 472 | `hidden_nurse_d4_4_i` | {name} | nurse_room | nurse_normal |  |  | 누군가에게 연결해 주는 일도 치료에 포함되는 거예요? |
| 473 | `hidden_nurse_d4_4_j` | 보건선생님 | nurse_room | nurse_normal |  |  | 당연하지. 그러니까 너도 혼자 감당하기 버거운 일이 생 |
| 474 | `hidden_nurse_d4_4_k` | {name} | nurse_room | nurse_shy |  |  | 마지막 응급키트 지퍼까지 다 잠갔어요. *묵직해진 구급 |
| 475 | `hidden_nurse_d4_5` | 보건선생님 | nurse_room | nurse_normal |  |  | 그래서 화려한 대학병원 대신 학교로 왔어. 약을 건네기 |
| 476 | `hidden_nurse_d4_name_choice` | {name} | nurse_room | nurse_shy |  |  | *보건선생님이 안경을 고쳐 쓰며 수량 확인표에 완성된  |
| 477 | `hidden_nurse_d4_name_choice_a` | 보건선생님 | nurse_room | nurse_normal |  |  | 복도에서 서성거리며 혼자 참던 학생이 용기 내서 보건실 |
| 478 | `hidden_nurse_d4_6` | 보건선생님 | nurse_room | nurse_normal |  |  | 네가 옆에서 손 맞춰 준 덕분에 예상보다 훨씬 일찍 끝 |
| 479 | `hidden_nurse_d4_6_b` | {name} | nurse_room | nurse_normal |  |  | 방금 들은 건 절대 별거 아닌 얘기가 아닌데요. |
| 480 | `hidden_nurse_d4_6_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 네가 그렇게 진지하게 들어 주니까 괜히 부끄럽잖아. 대 |
| 481 | `hidden_nurse_d4_6_d` | {name} | nurse_room | nurse_normal |  |  | *선생님이 봉사 활동 확인서 양식에 시작 시각과 종료  |
| 482 | `hidden_nurse_d4_choice` | 보건선생님 | nurse_room | nurse_normal |  |  | 이제 상자 겉면에 부서별 라벨 붙이는 작업만 남았네.  |
| 483 | `hidden_nurse_d4_meal_walk` | {name} | snack_shop.webp | nurse_normal |  |  | 스태프 인원수대로 포장된 거 맞죠? *학교 앞 분식집에 |
| 484 | `hidden_nurse_d4_meal_1` | 보건선생님 | snack_shop.webp | nurse_normal |  |  | 잠깐, 이 매운맛 떡볶이 누가 골랐어. 얼른 냉수부터  |
| 485 | `hidden_nurse_d4_meal_1_b` | {name} | snack_shop.webp | nurse_normal |  |  | 방금 선생님이 제일 먼저 집어 드셨잖아요. |
| 486 | `hidden_nurse_d4_meal_1_c` | 보건선생님 | snack_shop.webp | nurse_normal |  |  | 학생들 먹이기 전에 맵기 정도를 점검하려고 먼저 맛본  |
| 487 | `hidden_nurse_d4_meal_1b` | {name} | nurse_room | nurse_normal |  |  | *간식을 마저 비운 스태프들과 함께 보건실로 돌아와 키 |
| 488 | `hidden_nurse_d4_meal_2` | {name} | nurse_room | nurse_normal |  |  | 아까 대학병원 시절 얘기하실 때랑은 얼굴 표정이 완전히 |
| 489 | `hidden_nurse_d4_meal_2_b` | {name} | nurse_room | nurse_normal |  |  | *선생님 얼굴을 쳐다보며 말하다가 손끝의 라벨 한 장이 |
| 490 | `hidden_nurse_d4_meal_3` | 보건선생님 | nurse_room | nurse_normal |  |  | 그치? 옛날생각 하느라 나도 모르게 표정이 굳어 있었나 |
| 491 | `hidden_nurse_d4_meal_3_b` | {name} | nurse_room | nurse_normal |  |  | *선생님이 떼어 낸 라벨을 내가 이어받아 마지막 상자  |
| 492 | `hidden_nurse_d4_meal_3_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 좋아, 준비 작업은 여기까지. 다들 봉사 시간 기재된  |
| 493 | `hidden_nurse_d4_meal_3_d` | {name} | nurse_room | nurse_normal |  |  | *가방을 챙겨 보건실 문을 나서려는데 선생님이 서류 한 |
| 494 | `hidden_nurse_d4_meal_3_e` | 보건선생님 | nurse_room | nurse_normal |  |  | {name}, 제일 중요한 봉사 확인표 놓고 가잖아. |
| 495 | `hidden_nurse_d4_meal_4` | 보건선생님 | nurse_room | nurse_normal |  |  | {name}. 주말 아침부터 옆에서 같이 손 맞춰 줘서 |
| 496 | `hidden_nurse_d4_meal_4_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *선생님이 가벼운 미소를 남기고 완성된 응급키트 상자를 |
| 497 | `hidden_nurse_d4_freetalk` | 보건선생님 | nurse_room | nurse_normal |  |  | *마지막 응급키트 지퍼를 닫아 상자에 넣은 뒤 맞은편  |
| 498 | `day4_haeun_gate` |  | 없음 | 없음 |  |  |  |
| 499 | `day4_haeun_trust_check` |  | 없음 | 없음 |  |  |  |
| 500 | `day4_haeun_personal_gate` |  | 없음 | 없음 |  |  |  |
| 501 | `morning4_end` | {name} | room_my_day.webp | 없음 |  |  | *집으로 돌아와 거울 앞에서 셔츠 깃과 머리카락을 정돈 |
| 502 | `day4_date_branch` |  | 없음 | 없음 |  |  |  |
| 503 | `day4_night_start` | {name} | school | 없음 |  |  | *어스름이 짙게 깔린 학교를 나서서 집으로 돌아갈 시간 |
| 504 | `day4_night_branch` | 시스템 | 없음 | 없음 |  |  |  |
| 505 | `day4_nurse_checkin` | {name} | school | 없음 |  |  | *주말 행사 준비로 학교에 남았던 학생들에게 보건선생님 |
| 506 | `day4_adult_nurse_student_rank` |  | 없음 | 없음 |  |  |  |
| 507 | `day4_nurse_dain_counteroffer` | 다인 | school_back | dain_sad |  |  | *교문으로 빠져나가는 길목, 불 꺼진 체육관 계단 앞에 |
| 508 | `day4_adult_counteroffer_accept_dain` | 다인 | event_temptation_dain | 없음 |  |  | *손에서 놓친 마지막 배구공이 어두운 마룻바닥을 타고  |
| 509 | `day4_temptation_dain_freetalk` | 다인 | event_temptation_dain | 없음 |  | 🌙 | *땀에 젖은 유니폼 앞자락을 아래로 당긴 채 내 코앞에 |
| 510 | `day4_temptation_return_home` | {name} | room_my | 없음 |  |  | *온몸에 밴 뜨거운 열기와 숨결을 채 식히지 못한 채  |
| 511 | `day4_adult_night_regret_target_branch` |  | room_my | 없음 |  |  |  |
| 512 | `day4_adult_night_regret_nurse` | 보건선생님 | room_my | nurse_worried | 0.35 |  | *뒤늦게 집에 돌아와 휴대폰 화면을 켠다. 아무 일 없 |
| 513 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 514 | `night_nurse_msg_1` | 보건선생님 | room_my | nurse_normal | 0.35 |  | *학교 건강관리 앱 알림* 주말 상담 이후 현재 컨디션 |
| 515 | `night_nurse_msg_2` | {name} | room_my | nurse_normal | 0.35 |  | *자동 발송된 안내 문구 아래로 '한결 안정됨'과 '추 |
| 516 | `night_nurse_msg_3` | 보건선생님 | room_my | nurse_normal | 0.35 |  | *보건실 안내 문구* 추가 면담이 필요한 학생은 내일  |
| 517 | `night_nurse_msg_4` | 보건선생님 | room_my | nurse_normal | 0.35 |  | *보건실 안내 문구* 심야 시간에는 개별 답장을 보내지 |
| 518 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *일요일 아침 알람을 맞춰 두고 방 안의 스탠드 불을  |
| 519 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안의 시계 바늘이 자정을 넘어 다섯째 날로 향한다 |
| | **Day 5** | | | | | | |
| 520 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날, 일요일 아침. 교문 너머로 축제 현수막이 |
| 521 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 522 | `morning5_temptation_counteroffer_branch` |  | room_school | 없음 |  |  |  |
| 523 | `morning5_caught_nurse_counteroffer` | 보건선생님 | nurse_room | nurse_worried |  |  | *보건선생님이 휴대폰 화면에 뜬 학교 앱의 미확인 알림 |
| 524 | `morning5_caught_nurse_honest` | 보건선생님 | nurse_room | nurse_worried |  |  | *보건선생님은 내 설명을 다 듣고 나서야 열린 기록지를 |
| 525 | `morning5_counteroffer_gather` | {name} | room_school | 없음 |  |  | *어젯밤 함께 남아 있던 상대에게 메시지를 보내 아침  |
| 526 | `morning5_counteroffer_group_talk` | 두 사람 | room_school | 없음 |  |  | *축제 안내 방송을 앞둔 어수선한 교실 한복판, 어젯밤 |
| 527 | `morning5_counteroffer_choice` | {name} | room_school | 없음 |  |  | *숨 막히는 해명이 끝나자, 두 사람의 시선이 내 입술 |
| 528 | `morning5_counteroffer_choice_lead` | {name} | room_school | 없음 |  |  | *먼저 약속했던 사람 쪽으로 똑바로 몸을 돌려 고개를  |
| 529 | `morning5_after_counteroffer` | {name} | room_school | 없음 |  |  | *교탁 모서리에 놓여 있던 조회 유인물 한 장이 바람에 |
| 530 | `morning5_after_counteroffer_hidden_check` |  | room_school | 없음 |  |  |  |
| 531 | `hidden_nurse_d5_after_co_check` |  | school_hallway | 없음 |  |  |  |
| 532 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 533 | `morning5_sojeong_1` | {name} | room_school | 없음 |  |  | *조용한 창가에 서서 휴대폰 메모 앱을 연다. 이전 학 |
| 534 | `morning5_sojeong_2` | {name} | room_school | 없음 |  |  | *더 이상 나를 변호하기 위한 마흔 번째 초안은 만들지 |
| 535 | `morning5_sojeong_3` | {name} | room_school | 없음 |  |  | 그때 네 책상 위에 적힌 낙서들을 두 눈으로 보고도 선 |
| 536 | `morning5_sojeong_4` | {name} | room_school | 없음 |  |  | *말풍선 옆에 작은 전송 완료 표시가 뜬다. 숫자 1이 |
| 537 | `morning5_sojeong_5` | {name} | room_school | 없음 |  |  | 전학 오기 전 학교에서 제가 모른 척 지나쳤던 일에 대 |
| 538 | `morning5_route_branch` |  | room_school | 없음 |  |  |  |
| 539 | `morning5_co_haeun_check` |  | room_school | 없음 |  |  |  |
| 540 | `tour_co_branch` |  | school | 없음 |  |  |  |
| 541 | `tour_co_event_1` | {name} | school_hallway | 없음 |  |  | *점심시간을 알리는 종소리가 울려 퍼졌지만 배식 줄은  |
| 542 | `tour_co_event_2` | {name} | school_hallway | 없음 |  |  | *빈 의자 등받이 위에 주인 잃은 축제 진행 요원 조끼 |
| 543 | `after5_start` |  | 없음 | 없음 |  | 🌅 |  |
| 544 | `day5_haeun_guilt_gate` |  | 없음 | 없음 |  | 🌅 |  |
| 545 | `day5_haeun_route_gate` |  | 없음 | 없음 |  | 🌅 |  |
| 546 | `after5_original_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 547 | `after5_co_start` | {name} | school_hallway | 없음 |  | 🌅 | *축제 인파가 빠져나간 방과 후 복도에, 오늘 아침 숨 |
| 548 | `after5_co_abandoned_branch` |  | school_hallway | 없음 |  | 🌅 |  |
| 549 | `after5_co_nurse_1` | 보건선생님 | nurse_room | nurse_worried |  | 🌅 | *보건선생님이 진료 기록 차트를 서랍에 넣고 닫는다.* |
| 550 | `after5_co_nurse_2` | 보건선생님 | nurse_room | nurse_angry |  | 🌅 | 몸이 아플 땐 언제든 보건실로 오고 남은 이야기는 다음 |
| 551 | `after5_co_tempter_branch` |  | school_hallway | 없음 |  | 🌅 |  |
| 552 | `after5_co_tempter_dain_1` | 다인 | gym | dain_sad |  | 🌅 | *다인이 느슨하게 풀린 무릎 테이핑 끝을 손바닥으로 꾹 |
| 553 | `after5_co_tempter_dain_2` | 다인 | gym | dain_normal |  | 🌅 | ...그러니까 오늘은 내가 먼저 네 이름 부르지 않을게 |
| 554 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 555 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *축제 마지막 순서가 끝나 가는 복도 창가에서, 홀로  |
| 556 | `after5_farewell_seo_skip` |  | school_hallway | 없음 |  | 🌅 |  |
| 557 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *오후의 그림자가 길어진 복도에서 서연과 마주친다. 서 |
| 558 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 559 | `after5_farewell_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지날 무렵, 문가에서 기다리고 있던 유나 |
| 560 | `after5_farewell_yuna_skip` |  | school_hallway | 없음 |  | 🌅 |  |
| 561 | `after5_farewell_yuna_low` | 유나 | library_old | yuna_normal |  | 🌅 | *도서관 앞 복도에서 유나와 눈이 마주친다. 유나는 읽 |
| 562 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 563 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *붉은 석양이 길게 내려앉은 교정 위로, 축제의 끝을  |
| 564 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 565 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 566 | `ending_counteroffer_bitter` |  | park | 없음 |  |  |  |
| 567 | `ending_counteroffer_choice_lead` | {name} | park | 없음 |  |  | *돌고 돌아 원래 약속했던 사람을 선택했지만 뒤늦은 사 |
| 568 | `ending_counteroffer_bitter_route` |  | park | 없음 |  |  |  |
| 569 | `co_bitter_nurse_1` | {name} | nurse_room | nurse_worried |  |  | *반쯤 열린 보건실 문 앞에서 걸음을 멈춘다. 차트를  |
| 570 | `co_bitter_nurse_2` | 보건선생님 | nurse_room | nurse_worried |  |  | 네 초기 상담 기록은 모두 공식적으로 마무리했어. 앞으 |
| 571 | `co_bitter_nurse_3` | {name} | ending_bittersweet_nurse | 없음 |  |  | *보건선생님이 테이블 위의 빈 종이컵을 치우고 자기 책 |
| 572 | `hidden_bitter_nurse_ending_title` |  | ending_bittersweet_nurse | 없음 |  |  | ─── 보건선생님 BITTERSWEET END ─── |
| 573 | `day5_nurse_ending_freetalk_intro` | {name} | nurse_house | nurse_home_normal.webp |  |  | *아늑한 거실 정리를 마친 주원이 소파의 내 바로 옆자 |
| 574 | `day5_nurse_ending_freetalk_router` | {name} | nurse_house | 없음 |  |  |  |
| 575 | `day5_nurse_ending_freetalk_bittersweet` | 보건선생님 | nurse_room | nurse_normal |  | 🌙 | *되돌려준 연락처 쪽지를 연두색 기록 카드 위에 가만히 |
| 576 | `day5_credits` |  | school | 없음 |  |  |  |
| 577 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### day5_nurse_ending_freetalk_good

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_yuna_choice`: (선택)
- `after_end`: (선택)
- `after_hidden_nurse_choice`: (선택)
- `after_nurse_enter_choice`: (선택)
- `lunch2_choice`: (선택)
- `hidden_nurse_d2_choice1`: (선택)
- `hidden_nurse_d2_choice2`: (선택)
- `after2_choice`: (선택)
- `night2_choice`: (선택)
- `hidden_nurse_d3_choice1`: (선택)
- `hidden_nurse_d3_choice2`: (선택)
- `lunch3_choice`: (선택)
- `after3_choice`: (선택)
- `hidden_nurse_d4_morning_choice`: (선택)
- `hidden_nurse_d4_name_choice`: (선택)
- `hidden_nurse_d4_choice`: (선택)
- `day4_nurse_dain_counteroffer`: (선택)
- `hidden_nurse_d5_choice`: (선택)
- `after5_hidden_route_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=8 유나=4 다인=3 담임=0 보건=46

<details>
<summary>씬 타임라인 (619씬)</summary>

| # | 씬 ID | 화자 | 배경 | 캐릭터 | OP | 밤 | 대사 (앞 30자) |
|---|--------|------|------|--------|----|----|----------------|
| | **Day 1** | | | | | | |
| 1 | `start` | {name} | school | 없음 |  |  | *4월의 벚꽃잎이 흩날리는 교문 앞. 아직 풀기가 가시 |
| 2 | `start_again` | {name} | school | 없음 |  |  | *순간 울컥 치미는 현기증에 차가운 교문 기둥을 짚어선 |
| 3 | `start_3` | {name} | school | 없음 |  |  | *주머니 속 휴대폰이 짧게 떨린다. 예전 학교 단체방  |
| 4 | `name_input_scene` | 시스템 | school | 없음 |  |  | 전학생, 이름이 뭐야? |
| 5 | `gate_1` | {name} | school | 없음 |  |  | *교문 그늘 아래 서 있던 긴 생머리의 여학생이 안경테 |
| 6 | `seoyeon_meet_1` | 서연 | school | seyoun_normal |  |  | 혹시 오늘 온 전학생? {name} 맞지? |
| 7 | `seoyeon_meet_2` | 서연 | school | seyoun_normal |  |  | 가슴팍 명찰도 {name}이네. 반가워. *단정한 손끝 |
| 8 | `seoyeon_meet_3` | {name} | school | seyoun_normal |  |  | 맞는데. 내 얼굴은 어떻게 한 번에 알아봤어? |
| 9 | `seoyeon_meet_4` | 서연 | school | seyoun_normal |  |  | 학생회장이거든. 새로 온 전학생 맞이하는 것도 내 몫이 |
| 10 | `seoyeon_meet_5` | 서연 | school | seyoun_normal |  |  | 이쪽으로 따라와. 조회 시작하기 전에 15분 안으로 학 |
| 11 | `seoyeon_meet_6` | {name} | school | seyoun_normal |  |  | 첫날부터 학생회장이 직접 안내라니 좀 떨리는데. |
| 12 | `seoyeon_meet_7` | 서연 | school | seyoun_normal |  |  | 원래 내가 맡은 일이니까 괜히 어렵게 생각할 것 없어. |
| 13 | `seoyeon_meet_8` | 서연 | school | seyoun_normal |  |  | 자, 가자. *몸을 돌리는 서연의 교복 셔츠 깃에서 햇 |
| 14 | `seoyeon_choice` | {name} | school | seyoun_normal |  |  | *앞서 걷는 서연의 단정한 뒷모습을 보며 입을 연다.* |
| 15 | `choice_flirt_1` | 서연 | school | seyoun_normal |  |  | *걸음을 멈추고 반쯤 돌아서더니 맑은 안경알 너머로 눈 |
| 16 | `choice_flirt_2` | 서연 | school | seyoun_laugh |  |  | 전학 첫날부터 농담할 여유도 있네. 덕분에 네 이름은  |
| 17 | `choice_flirt_3` | {name} | school | seyoun_laugh |  |  | 오, 혹시 첫인상 점수라도 매기는 중이야? |
| 18 | `choice_flirt_4` | 서연 | school | seyoun_normal |  |  | 글쎄, 아직 학교 분위기는 잘 모르는 모양이지만 첫인상 |
| 19 | `choice_flirt_5` | {name} | school | seyoun_normal |  |  | 학생회장님한테 후한 점수라니 영광인데? |
| 20 | `choice_flirt_6` | 서연 | school | seyoun_normal |  |  | 일주일 뒤에도 그렇게 여유롭게 웃을 수 있을지 두고 볼 |
| 21 | `choice_flirt_7` | 서연 | school | seyoun_laugh |  |  | 늦겠다, 이리 따라와 {name}. *살짝 붉어진 귓바 |
| 22 | `hallway_1` | 서연 | school_hallway | seyoun_back |  |  | 지나가는 애들한테 인사받느라 걸음 늦출 필요 없어. 그 |
| 23 | `hallway_3` | 서연 | school_hallway | seyoun_normal |  |  | 지금 걷는 본관이 3학년 건물이고 창밖 건너편이 도서관 |
| 24 | `hallway_4` | 서연 | school_hallway | seyoun_normal |  |  | 그리고 이건 아무한테나 안 보여주는 건데. *재킷 주머 |
| 25 | `hallway_5` | 서연 | school_hallway | seyoun_normal |  |  | 원래 우리 학교 옥상은 평소엔 잠겨 있거든. 이 열쇠는 |
| 26 | `hallway_6` | {name} | school_hallway | seyoun_normal |  |  | 옥상에 너만의 비밀 아지트라도 숨겨 둔 거야? |
| 27 | `hallway_6_b` | 서연 | school_hallway | seyoun_normal |  |  | *맑게 울리던 열쇠고리 소리가 손안에서 뚝 멎는다.*  |
| 28 | `hallway_6_c` | 서연 | school_hallway | seyoun_normal |  |  | *입꼬리를 살짝 올린 채 대답 대신 열쇠를 다시 주머니 |
| 29 | `hallway_7` | 서연 | school_hallway | seyoun_normal |  |  | 맞다, 오늘 점심시간. 아직 어디서 밥 먹을지 못 정했 |
| 30 | `hallway_8` | {name} | school_hallway | seyoun_shy |  |  | *어느새 걸음을 멈춘 서연이 아침 햇살이 비치는 교실  |
| 31 | `hallway_10` | 서연 | school_hallway | seyoun_normal |  |  | 다 왔다, 여기가 네 교실이야. 얼른 들어가 봐. |
| 32 | `hallway_11` | {name} | school_hallway | seyoun_normal |  |  | 점심때도 일대일로 안내해 주는 거야? |
| 33 | `hallway_12` | 서연 | school_hallway | seyoun_normal |  |  | 글쎄, 오늘 오전 수업 잘 버티는 거 봐서. |
| 34 | `hallway_13` | 서연 | school_hallway | seyoun_back |  |  | *돌아서던 서연이 클립보드를 어깨 높이로 가볍게 들어  |
| 35 | `hallway_13_b` | {name} | school_hallway | seyoun_back |  |  | *단정한 구두 소리를 남기며 복도 저편으로 멀어지는 서 |
| 36 | `classroom_1` | {name} | room_school | 없음 |  |  | *드르륵, 교실 앞문을 열자 왁자지껄하던 공기 위로 수 |
| 37 | `classroom_2_b` | {name} | room_school | teacher_normal |  |  | *교탁 앞에는 20대 후반쯤 되어 보이는 담임선생님이  |
| 38 | `classroom_3` | 담임 | room_school | teacher_normal |  |  | 자, 다들 주목. 오늘부터 우리 반 식구가 된 전학생이 |
| 39 | `classroom_3_b` | {name} | room_school | teacher_normal |  |  | 오늘 전학 온 {name}입니다. 잘 부탁드립니다. * |
| 40 | `classroom_5_b` | 담임 | room_school | teacher_normal |  |  | 그래, {name}. 우리 반에 온 걸 환영해. 급할  |
| 41 | `classroom_5_c` | {name} | room_school | teacher_normal |  |  | *낯선 교실 공기에 섞여 내 숨소리가 잦아드는 사이 교 |
| 42 | `classroom_dain_1` | 다인 | room_school | dain_normal |  |  | 오, 전학생! 드디어 우리 반에도 새 얼굴이 들어왔네! |
| 43 | `classroom_dain_2` | 다인 | room_school | yuna_normal |  |  | 이쪽 봐, 이쪽! *산뜻한 갈색 숏컷에 활동적인 배구부 |
| 44 | `classroom_dain_3` | 담임 | room_school | teacher_normal |  |  | 다인아, 아침부터 목소리 좀 낮추자. 그리고 교실 안에 |
| 45 | `classroom_dain_4` | 다인 | room_school | yuna_normal |  |  | 에이, 쌤도 참. 이게 세상에서 제일 편하단 말이에요! |
| 46 | `classroom_dain_5` | 다인 | room_school | yuna_normal |  |  | 네 자리는 여기야, 여기! *아이들의 웃음소리 사이로  |
| 47 | `classroom_dain_5_b` | 담임선생님 | room_school | teacher_normal |  |  | 다인아, 적어도 출석 부르는 동안만이라도 진정 좀 하자 |
| 48 | `classroom_dain_5_c` | 담임 | room_school | teacher_normal |  |  | 지금부터 그 에너지를 다 쓰면 어떡해. 아직 1교시 종 |
| 49 | `classroom_dain_5_d` | 담임선생님 | room_school | teacher_angry |  |  | *담임은 작게 고개를 저으며 출석부 다음 장을 부드럽게 |
| 50 | `classroom_yuna_1` | {name} | room_school | yuna_bored |  |  | *소란스러운 교실 풍경과 동떨어진 창가 맨 뒷자리, 봄 |
| 51 | `classroom_yuna_2` |  | 없음 | 없음 |  |  |  |
| 52 | `classroom_yuna_4` | {name} | room_school | yuna_bored |  |  | *앞줄에 앉은 학생 하나가 내 소매를 스치며 작게 속삭 |
| 53 | `classroom_seat_1` | 담임선생님 | room_school | teacher_normal |  |  | *출석부를 덮은 담임이 창가 쪽에서 한 줄 건너편 빈자 |
| 54 | `classroom_seat_2` | 다인 | room_school | yuna_normal |  |  | 오, 딱 내 옆자리네? 멀뚱히 서 있지 말고 얼른 와서 |
| 55 | `classroom_minsu_1` | {name} | room_school | minsu_normal |  |  | *가방을 내려놓고 의자를 빼려는데 앞자리에 앉아 있던  |
| 56 | `classroom_minsu_2` | 민수 | room_school | minsu_smirk |  |  | 야, 전학생. 우리 반에 온 걸 환영한다. 그리고 미리 |
| 57 | `classroom_minsu_3` | {name} | room_school | minsu_smirk |  |  | 갑자기 무슨 각오? |
| 58 | `classroom_minsu_2_b` | 민수 | room_school | minsu_normal |  |  | *옆자리의 다인을 향해 슬쩍 턱짓하며 씨익 웃는다.*  |
| 59 | `classroom_dain_talk_1` | {name} | room_school | minsu_normal |  |  | *장난스럽게 돌아앉는 앞자리 남학생의 교복 명찰에는 ' |
| 60 | `classroom_dain_talk_2` | 다인 | room_school | yuna_normal |  |  | 저 녀석 말은 신경 쓰지 마! 그보다 나 궁금한 거 하 |
| 61 | `classroom_dain_talk_3` | 다인 | room_school | yuna_normal |  |  | 야, {name}. 너 평소에 몸 움직이는 거나 운동  |
| 62 | `classroom_dain_talk_4` | {name} | room_school | yuna_normal |  |  | 운동은 왜, 갑자기? |
| 63 | `classroom_dain_talk_5` | 다인 | room_school | yuna_normal |  |  | 아니, 오늘 방과후에 리시브 연습을 좀 더 하고 싶은데 |
| 64 | `classroom_dain_talk_6` | {name} | room_school | yuna_normal |  |  | 전학생을 첫날부터 인간 볼 머신으로 쓰려고? |
| 65 | `classroom_dain_talk_7` | 다인 | room_school | yuna_normal |  |  | 에이, 설마! 그래도 기계보다는 사람이랑 호흡 맞추는  |
| 66 | `classroom_dain_talk_8` | 다인 | room_school | yuna_normal |  |  | 어때, 같이 해 볼래? *다인의 따뜻한 검지가 내 책상 |
| 67 | `classroom_yuna_note_1` | {name} | room_school | yuna_bored |  |  | *그때 뒷자리에서 반듯하게 접힌 종이쪽지 하나가 책상  |
| 68 | `classroom_yuna_note_3` | 유나 | room_school | yuna_bored |  |  | *조심스럽게 펼치자 은은한 연보라색 잉크 글씨와 모서리 |
| 69 | `classroom_yuna_note_5` | {name} | room_school | yuna_bored |  |  | *내가 고개를 들자 창가 햇살에 비치던 유나의 하얀 손 |
| 70 | `classroom_yuna_note_6` | {name} | room_school | yuna_bored |  |  | *1교시 시작을 알리는 종소리가 교실 안을 메운다. 창 |
| 71 | `lunch_start` | {name} | school_hallway | 없음 |  |  | *점심시간을 알리는 종소리와 함께 교실 공기가 들뜬다. |
| 72 | `lunch_start_4` | 서연 | school_hallway | seyoun_normal |  |  | 아까 말한 대로 옥상 올라올 거지? *계단참에서 걸음을 |
| 73 | `lunch_start_4_b` | {name} | school_hallway | dain_normal |  |  | *대답하려는 순간 옆에서 다가온 다인의 따뜻한 손바닥이 |
| 74 | `lunch_start_5` | 다인 | school_hallway | dain_normal |  |  | 야, 아직 점심 안 먹었지? 나랑 매점 뛰어가자. 빵  |
| 75 | `lunch_start_6` | 유나 | school_hallway | yuna_normal |  |  | 난 도서관 갈 건데. *내 옆을 스쳐 지나가며 가방끈을 |
| 76 | `lunch_start_7` | {name} | school_hallway | 없음 |  |  | *바람 부는 옥상과 달콤한 빵 냄새가 나는 매점, 그리 |
| 77 | `lunch_choice` | {name} | school_hallway | 없음 |  |  | *첫날의 점심시간, 누구의 발걸음을 따라갈까?* |
| 78 | `lunch_yuna_1` | {name} | library_old | yuna_normal |  |  | *복도의 소음이 멀어지는 계단을 지나 유나의 뒤를 따라 |
| 79 | `lunch_yuna_1_aff_default` | 유나 | library_old | yuna_normal |  |  | *따로 건네는 쪽지는 없었다. 유나는 햇살이 비스듬히  |
| 80 | `lunch_yuna_2` | 유나 | library_old | yuna_normal |  |  | 의자 끌 때 소리 나지 않게 살살. *하얀 검지로 펼쳐 |
| 81 | `lunch_yuna_4` | 유나 | library_old | yuna_normal |  |  | 잠깐만 기다려. *끼워 두었던 대출 영수증 끝을 반듯하 |
| 82 | `lunch_yuna_5` | {name} | library_old | yuna_normal |  |  | *5초, 다시 10초가 고요하게 흐른다. 유나는 접힌  |
| 83 | `lunch_yuna_5_b` | {name} | library_old | yuna_normal |  |  | 옆자리 비었으면 앉아도 돼? |
| 84 | `lunch_yuna_7` | 유나 | library_old | yuna_normal |  |  | *활자에서 눈을 떼지 않은 채 나직이 속삭인다.* 옆에 |
| 85 | `lunch_yuna_8` | 유나 | library_old | yuna_normal |  |  | 가방 내렸어. 이쪽 앉아. *옆 의자에서 자기 가방을  |
| 86 | `lunch_yuna_10` | {name} | library_old | yuna_normal |  |  | *나란히 앉은 책상 위로 벽시계 초침 소리와 종이 스치 |
| 87 | `lunch_yuna_10_b` | {name} | library_old | yuna_normal |  |  | *유나의 손끝이 낡은 책갈피에 적힌 흐릿한 글씨를 슬쩍 |
| 88 | `lunch_yuna_12` | 유나 | library_old | yuna_normal |  |  | *책장 너머로 붉은빛이 감도는 눈동자가 천천히 올라온다 |
| 89 | `lunch_yuna_13` | {name} | library_old | yuna_normal |  |  | 어? 진짜네. |
| 90 | `lunch_yuna_14` | 유나 | library_old | yuna_normal |  |  | 그 시리즈는 1권부터 차례대로 읽어야 이해돼. |
| 91 | `lunch_yuna_15` | 유나 | library_old | yuna_normal |  |  | 여기 있어. 이걸로 먼저 읽어. *자기 손옆에 쌓아 두 |
| 92 | `lunch_yuna_16` | {name} | library_old | yuna_normal |  |  | 빌려주는 거야? 고마워. |
| 93 | `lunch_yuna_17` | 유나 | library_old | yuna_normal |  |  | 다 읽으면 나한테 다시 돌려줘. |
| 94 | `lunch_yuna_18` | 유나 | library_old | yuna_normal |  |  | 그럼 이제 각자 읽자. *책상 하나를 사이에 두고 나란 |
| 95 | `lunch_yuna_20` | {name} | library_old | yuna_normal |  |  | *한참 만에 고개를 들자 창가 햇살을 등진 유나가 책  |
| 96 | `lunch_yuna_21` | {name} | library_old | yuna_normal |  |  | 왜 그래, 나한테 할 말 있어? |
| 97 | `lunch_yuna_22` | 유나 | library_old | yuna_normal |  |  | *유나가 얇은 책갈피를 페이지 사이에 끼워 넣는다.*  |
| 98 | `lunch_yuna_23` | {name} | library_old | yuna_normal |  |  | 그게 왜? |
| 99 | `lunch_yuna_24` | 유나 | library_old | yuna_normal |  |  | 생각보다 편했어. |
| 100 | `lunch_yuna_25` | 유나 | library_old | yuna_normal |  |  | *유나의 시선이 내가 쥔 책 표지를 스쳐 내 눈동자에  |
| 101 | `lunch_yuna_choice` | {name} | library_old | yuna_normal |  |  | *읽던 책을 천천히 덮으며 유나와 시선을 맞춘다.* |
| 102 | `lunch_yuna_c2_1` | 유나 | library_old | yuna_normal |  |  | 교실에 있어 봤자 딱히 할 일도 없으니까. |
| 103 | `lunch_yuna_c2_2` | 유나 | library_old | yuna_normal |  |  | 그래도 이 구석 자리는 꽤 마음에 들어. 아무도 안 찾 |
| 104 | `lunch_yuna_freetalk` | 유나 | library_old | yuna_normal |  |  | *유나가 덮은 책 표지 위로 하얀 두 손을 가만히 포갠 |
| 105 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *5교시 수업을 알리는 차임벨이 울려 퍼지며 짧고도 설 |
| 106 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *붉은 노을이 스며드는 방과후 복도. 주머니 속에서 진 |
| 107 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 108 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 그 가벼운 마지막 한 줄에 시선이  |
| 109 | `after_kakao_5` |  | 없음 | 없음 |  | 🌅 |  |
| 110 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *한참을 망설이다 조용히 단체방 나가기를 누른다. 텅  |
| 111 | `after1_jealousy_yuna_1` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 너 점심시간에 도서관 갔다 왔다며? 그것도 유나랑 |
| 112 | `after1_jealousy_yuna_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 신기하네, 걔 원래 옆에 누가 오는 거 진짜 싫어하거든 |
| 113 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *휴대폰을 주머니에 넣고 석양이 길게 드리운 복도를 따 |
| 114 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도 모퉁이를 돌려는데 등 뒤에서 운동화 바닥이 마룻 |
| 115 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 거기 앞 조심해! |
| 116 | `after_miss_dain_3` | 다인 | school_hallway | dain_normal |  | 🌅 | 휴, 아슬아슬하게 비켜 줬네! *내 어깨를 스치며 바람 |
| 117 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 방금 반사신경 꽤 괜찮았는데? 역시 운동 좀 해  |
| 118 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 하마터면 부딪힐 뻔했잖아. 복도에서 웬 전력질주야? |
| 119 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 배구부 집합 시간 늦었거든! 지금 당장 체육관 뛰어가야 |
| 120 | `after_miss_dain_6_b` | {name} | school_hallway | dain_pain |  | 🌅 | *돌아서서 두어 걸음 내딛던 다인이 순간 걸음을 멈추고 |
| 121 | `after_miss_dain_7` | 다인 | school_hallway | dain_laugh |  | 🌅 | 참, 내 이름 다인이야! 내일 와서 이름 까먹으면 안  |
| 122 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞 복도를 지나는데 붉은 눈동자의 여학생이 소 |
| 123 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 방금 책 사이에서 이거 떨어졌어. |
| 124 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *바닥에 내려앉은 낡은 책갈피를 조심스레 주워 건넨다. |
| 125 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | 다행이다, 모서리 안 구겨졌네. *하얀 손가락으로 책갈 |
| 126 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 주워 줘서 고마워. |
| 127 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *소중한 것을 감추듯 책갈피를 책등 깊숙이 끼워 넣고는 |
| 128 | `after_miss_yuna_4` |  | 없음 | 없음 |  | 🌅 |  |
| 129 | `after_miss_seoyeon_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *가방을 메고 신발장으로 내려가려는데 계단 앞 복도에서 |
| 130 | `after_miss_seoyeon_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 너 아까 점심시간에 어디 갔었어? |
| 131 | `after_miss_seoyeon_3` | {name} | school_hallway | seyoun_normal |  | 🌅 | 점심시간에 어디라니? |
| 132 | `after_miss_seoyeon_4` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 일부러 옥상 문까지 열어 두고 있었는데 끝까지 안 올라 |
| 133 | `after_miss_seoyeon_5` | {name} | school_hallway | seyoun_normal |  | 🌅 | 설마 옥상에서 계속 나 기다린 거야? |
| 134 | `after_miss_seoyeon_6` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 기다리긴 누가 기다려, 내 도시락 먼저 먹고 있었지.  |
| 135 | `after_miss_seoyeon_7` | {name} | school_hallway | seyoun_normal |  | 🌅 | *서연은 클립보드를 가슴께로 끌어안으며 시선을 살짝 피 |
| 136 | `after_miss_seoyeon_8` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 내일 점심엔 다른 데로 새지 마. |
| 137 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교를 알리는 안내 방송이 끝난 뒤 노을빛만 남은 복 |
| 138 | `after_hidden_nurse_intro` | {name} | school_hallway | 없음 |  | 🌅 | *갑자기 핑 도는 어지럼증에 차가운 복도 벽을 짚고 멈 |
| 139 | `after_hidden_nurse_choice` | {name} | school_hallway | 없음 |  | 🌅 | *아침부터 낯선 시선과 소음 속에 부대낀 피로가 한꺼번 |
| 140 | `after_hidden_nurse_intro_b` | {name} | school_hallway | 없음 |  | 🌅 | *가쁜 숨을 한 번 골라 쉬고 서늘한 금속 문손잡이를  |
| 141 | `after_nurse_d1_aff` |  | nurse_room | 없음 |  | 🌅 |  |
| 142 | `after_nurse_enter_1` | {name} | nurse_room | nurse_normal |  | 🌅 | *문을 열자 알싸한 소독약 냄새 위로 은은하고 달콤한  |
| 143 | `after_nurse_enter_2` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 어라, 방과후에 늦은 손님이네. |
| 144 | `after_nurse_enter_2_b` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건선생님이 새 진료 기록지 한 장을 끌어당겨 가느다 |
| 145 | `after_nurse_enter_3` | {name} | nurse_room | nurse_normal |  | 🌅 | 갑자기 속이 좀 울렁거리고 어지러워서요. |
| 146 | `after_nurse_enter_4` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 오늘 온 전학생 맞지? 첫날부터 보건실 찾을 정도면 하 |
| 147 | `after_nurse_enter_4_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 제가 전학생인 건 어떻게 바로 아셨어요? |
| 148 | `after_nurse_enter_4_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 일단 처음 보는 잘생긴 얼굴이기도 하고 교복 재킷에 접 |
| 149 | `after_nurse_enter_4_d` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *여유로운 눈웃음을 지으며 전자체온계를 건네더니 책상  |
| 150 | `after_nurse_enter_5` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *체온계 숫자를 확인한 뒤 내 소매를 걷어 올리고 서늘 |
| 151 | `after_nurse_enter_6` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 다행히 열은 없는데 혈압이 평소보다 살짝 떨어져 있네. |
| 152 | `after_nurse_enter_6_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 사실 오늘 아침에 긴장해서 밥을 거의 못 먹고 나왔거든 |
| 153 | `after_nurse_enter_7` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 빈속에 온종일 신경 썼으니 어지러울 수밖에. 자, 저쪽 |
| 154 | `after_nurse_enter_7_b` | {name} | nurse_room | nurse_normal |  | 🌅 | *안쪽 침대에 몸을 뉘자 빳빳하게 풀 먹인 하얀 시트가 |
| 155 | `after_nurse_enter_7_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *선생님이 침대 둘레의 커튼을 반쯤 끌어 노을빛을 가려 |
| 156 | `after_nurse_enter_7_d` | {name} | nurse_room | nurse_normal |  | 🌅 | 그냥 미지근한 물 한 잔이면 충분해요. |
| 157 | `after_nurse_enter_choice` | {name} | nurse_room | nurse_normal |  | 🌅 | *반쯤 닫힌 하얀 커튼 너머로 기록지를 작성하는 보건선 |
| 158 | `after_nurse_enter_trap` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 학생들이 없을 땐 일지도 정리하고 약품 재고도 맞춰야  |
| 159 | `after_nurse_enter_8` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 무리해서 말 길게 이어 갈 필요 없어. 현기증 날 때는 |
| 160 | `after_nurse_enter_8_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 이렇게 잠깐 누워 있으면 금방 가라앉을까요? |
| 161 | `after_nurse_enter_8_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *커튼 틈으로 다가와 종이컵에 담긴 물을 건네며 내 손 |
| 162 | `after_nurse_enter_8_d` | {name} | nurse_room | nurse_normal |  | 🌅 | *물을 한 모금 머금고 고요한 보건실 안을 둘러본다.  |
| 163 | `after_nurse_enter_9_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 창가에 있는 저 초록색 화분도 선생님이 직접 키우시는  |
| 164 | `after_nurse_enter_9_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 응, 로즈마리야. 내가 예전에 대학병원에서 일할 때부터 |
| 165 | `after_nurse_enter_9_d` | {name} | nurse_room | nurse_normal |  | 🌅 | 학교 오시기 전엔 큰 병원에 계셨어요? |
| 166 | `after_nurse_enter_9_e` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *선생님의 가느다란 손가락이 책상 서랍 손잡이를 한 번 |
| 167 | `after_nurse_enter_10` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 다 지나간 옛날얘기야. 난 지금 이 학교가 훨씬 좋아. |
| 168 | `after_nurse_enter_10_b` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 자, 약속한 10분 지났네. 이제 속은 좀 어때? *진 |
| 169 | `after_nurse_enter_10_c` | {name} | nurse_room | nurse_normal |  | 🌅 | 덕분에 많이 가라앉았어요. 감사합니다. |
| 170 | `after_nurse_enter_11` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 다행이네. 앞으로도 어지러우면 언제든 찾아와, 보건실  |
| 171 | `after_nurse_enter_11_b` | {name} | nurse_room | nurse_angry |  | 🌅 | 환자를 혼내기도 하세요? |
| 172 | `after_nurse_enter_11_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *진료 기록지 위에서 볼펜을 데구루루 굴리며 눈을 가늘 |
| 173 | `after_nurse_enter_11_d` | 보건선생님 | nurse_room | nurse_angry |  | 🌅 | *빈 종이컵을 받아 책상 위에 내려놓자 나지막하고 둔탁 |
| 174 | `after_nurse_enter_11_e` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *아까 내가 건넸던 말이 떠올랐는지 가운 깃 너머로 하 |
| 175 | `after_nurse_enter_11_j` |  | 없음 | 없음 |  | 🌅 |  |
| 176 | `after_nurse_enter_11_k` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 아, 맞다 전학생. |
| 177 | `after_nurse_enter_11_l` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 차트에 적어야 하는데 네 이름이 뭐야? |
| 178 | `after_nurse_enter_11_m` | {name} | nurse_room | nurse_normal |  | 🌅 | 3학년 2반 {name}입니다. |
| 179 | `after_nurse_enter_12` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 차트에 잘 적어 둘게. 가다가 또 현기증 나면 복도에서 |
| 180 | `after_nurse_enter_12_b` | {name} | nurse_room | nurse_normal |  | 🌅 | *침대에서 내려서려는데 보건선생님이 벽시계를 한 번 확 |
| 181 | `after_nurse_freetalk` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *체온계를 케이스에 넣고 진료 기록의 시간을 확인한다. |
| 182 | `night_start` | {name} | room_my | 없음 |  |  | *집으로 돌아와 아직 낯선 새 교복을 옷걸이에 걸어 두 |
| 183 | `night_start_3` | {name} | room_my | 없음 |  |  | *고요한 방 안, 머리맡에 둔 휴대폰이 짧게 진동하며  |
| 184 | `night_msg_yuna_1` | 유나 | room_my | yuna_normal | 0.35 |  | 오늘 점심엔 옆에서 조용히 있어 줘서 고마웠어 |
| 185 | `night_msg_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | 내일도 내 옆자리 비워 놓을게 |
| 186 | `night_msg_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *짧고 담백한 '내 옆자리 비워 놓을게'라는 문장을 몇 |
| 187 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 대화창을 닫으려는데 상단 알림 바에 학교 앱  |
| 188 | `night_hidden_nurse_1` | {name} | room_my | nurse_normal | 0.35 |  | *학교 건강 관리 앱에 새 알림이 떠 있다. '보건실  |
| 189 | `night_hidden_nurse_2` | {name} | room_my | nurse_normal | 0.35 |  | *보건선생님의 나긋한 목소리가 귓가에 들리는 듯해 일어 |
| 190 | `night_late_transition` | {name} | room_my | 없음 |  |  | *불을 끄고 막 눈을 감으려는데 정적을 깨고 휴대폰이  |
| 191 | `night_late_branch` | {name} | room_my | 없음 |  |  | *어두운 방 안, 손에 쥔 액정 화면이 하얗게 빛을 낸 |
| 192 | `night_end_1` | {name} | room_my | 없음 |  |  | *휴대폰을 내려놓고 어두운 천장을 올려다본다. 옷걸이에 |
| 193 | `night_end_3` | {name} | room_my | 없음 |  |  | *연락처에 나란히 저장된 새로운 이름들을 한 번 더 눈 |
| | **Day 2** | | | | | | |
| 194 | `morning2_start` | {name} | room_school | 없음 |  |  | *전학 온 지 이틀째 아침. 교복 소매에 남았던 빳빳한 |
| 195 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 196 | `morning2_greet_none_tone` |  | room_school | 없음 |  |  |  |
| 197 | `morning2_greet_none_1` | {name} | room_school | 없음 |  |  | *교실 문을 열고 들어서도 먼저 다가오는 사람은 없다. |
| 198 | `morning2_greet_none_2` | {name} | room_school | yuna_normal |  |  | *서연은 교탁 앞에서 출석부만 넘기고 다인은 반대편 친 |
| 199 | `morning2_yuna_seen` | 유나 | room_school | yuna_normal |  |  | ...너 혹시 전학 오기 전에도 이 학교에 와 본 적  |
| 200 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *가방을 걸고 자리에 앉으려는데 책상 한가운데에 정갈하 |
| 201 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 202 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가던 서연이 열린 교실 앞문 틈으로 고개를 |
| 203 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 바쁜 학생회장이 아침부터 남의 교실 앞까지 직접 인사하 |
| 204 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 교무실에 서류 갖다주러 가는 길에 잠깐 멈춘 거야. 그 |
| 205 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | 얼굴 확인했으니까 이제 간다. 아침 조회 늦지 말고.  |
| 206 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연의 긴 머리카락이 사라진 복도 쪽을 바라보고 있는 |
| 207 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 온 지 이틀 만에 학생회장님이 직접 문 앞까 |
| 208 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 그건 그냥 네가 인기가 없는 게 아닐까. |
| 209 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 뼈 때리지 마라, 사실이긴 한데 지금 그게 핵심이 아니 |
| 210 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *복도 유리창 너머로 클립보드를 가슴에 안은 서연이 귓 |
| 211 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 오호, 도도한 회장님도 우리 전학생한테 꽤 관심 있나  |
| 212 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | 방금 '우리' 전학생이라고 했어? |
| 213 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 당연하지, 같은 반에다 바로 옆자리 짝꿍이잖아! 그 정 |
| 214 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *1교시가 끝나고 시끌벅적한 교실 열기를 식히려 복도  |
| 215 | `morning2_seo_dust_1` | 서연 | school_hallway | seyoun_normal |  |  | 너 1교시 수업 듣는 동안 대체 뭘 한 거야. *쉬는  |
| 216 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 움직이지 말고 잠깐 가만히 있어 봐. |
| 217 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *한 걸음 다가선 서연의 하얀 손끝이 내 교복 어깨에  |
| 218 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 어깨에 분필 가루 같은 게 묻어 있었어. |
| 219 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | 말도 없이 갑자기 손이 훅 들어와서 놀랐잖아. *괜히  |
| 220 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 뭘 그렇게까지 놀라? 그냥 먼지 털어 준 건데. |
| 221 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *분명 먼지는 다 털어 냈는데도 서연의 손끝이 닿았던  |
| 222 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 방금 그거 뭐야? 학생회장이 네 어깨 만진 거 맞 |
| 223 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 만진 게 아니라 어깨에 묻은 먼지 털어 준 거야. |
| 224 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 수상한데, 거기 진짜로 먼지가 붙어 있긴 했어? |
| 225 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | 진짜로 먼지 털어 준 것뿐이라니까. 왜 눈을 그렇게 뜨 |
| 226 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *아침에 받은 유나의 쪽지를 손안에 쥔다. 수업 사이마 |
| 227 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *이틀째 점심시간, 누구의 곁으로 향할까.* |
| 228 | `lunch2_dain_1_check` | {name} | school_hallway | 없음 |  |  | *다인의 활기찬 발걸음에 맞춰 지하 매점 쪽으로 내려간 |
| 229 | `lunch2_dain_1b_yuna` | {name} | store | dain_normal |  |  | *다인의 어깨에 떠밀리듯 시끌벅적한 매점 인파 속으로  |
| 230 | `lunch2_dain_1b_yuna_aff` |  | store | 없음 |  |  |  |
| 231 | `lunch2_dain_2_cool` | 다인 | store | dain_normal |  |  | 왔으면 뒤에 줄이나 서. 오늘 빵값은 네가 내는 거 알 |
| 232 | `lunch2_dain_cool_cont` | {name} | store | dain_normal |  |  | *소보로빵 두 개를 집어 계산을 마친다. 다인은 말없이 |
| 233 | `lunch2_dain_cool_leave` | {name} | school_hallway | 없음 |  |  | *계산을 마치고 매점 밖 복도로 나오자 다인은 뒤도 돌 |
| 234 | `lunch2_dain_end_b` | {name} | playground | 없음 |  |  | *오후 5교시 체육 시간, 공을 쫓던 옆 반 학생과 강 |
| 235 | `lunch2_dain_end_c` | 체육교사 | playground | 없음 |  |  | 상처에 흙 들어갔겠다. 빨리 보건실 가서 소독부터 받고 |
| 236 | `lunch2_dain_end_d` | {name} | nurse_room | 없음 |  |  | *조심스레 보건실 문을 열고 들어선다. 어제 맡았던 알 |
| 237 | `lunch2_dain_end_e` | 보건선생님 | nurse_room | nurse_normal |  |  | *진료 기록지를 정리하다 고개를 든 선생님의 눈매가 부 |
| 238 | `lunch2_dain_end_f` | {name} | nurse_room | nurse_normal |  |  | 체육 시간에 넘어져서 팔꿈치가 좀 까졌어요. |
| 239 | `lunch2_dain_end_g` | 보건선생님 | nurse_room | nurse_normal |  |  | 이틀 연속으로 찾아오다니, 벌써 내 보건실 단골이라도  |
| 240 | `lunch2_dain_end_i` | {name} | nurse_room | nurse_normal |  |  | 팔꿈치 아래에 수건까지 받치는 거예요? 생각보다 처치  |
| 241 | `lunch2_dain_end_j` | 보건선생님 | nurse_room | nurse_normal |  |  | 소독약 닿으면 조금 따가울 거야. 어깨랑 팔에 힘 쭉  |
| 242 | `lunch2_dain_end_l` | 보건선생님 | nurse_room | nurse_normal |  |  | *상처 위로 숨결을 가볍게 불어 준 뒤 방수 밴드를 밀 |
| 243 | `lunch2_dain_end_nurse_short1` | 보건선생님 | nurse_room | nurse_normal |  |  | 자, 다 됐다. 다음부턴 공만 보고 뛰지 말고 주변 사 |
| 244 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *종례가 끝난 방과 후 교실. 쉬는 시간마다 꺼냈던 휴 |
| 245 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 당장 체육관으로 튀어 와! 오늘은 진짜 제대로 된 내기 |
| 246 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 방과후에 학생회실로 잠깐 와 줄 수 있어? 오늘따라 일 |
| 247 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게선 따로 온 메시지가 없다. 대신 주머니 속  |
| 248 | `after2_nurse_transition` | {name} | school_hallway | 없음 |  | 🌅 | *아까 5교시 체육 시간 뒤에 붙였던 팔꿈치 밴드 모서 |
| 249 | `hidden_nurse_d2_1` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건실에 들러 소매를 걷어 올리자 밴드 한쪽 끝이 반 |
| 250 | `hidden_nurse_d2_2` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 어라, 붙인 지 반나절도 안 돼서 밴드가 반품 들어왔네 |
| 251 | `hidden_nurse_d2_3` | {name} | nurse_room | nurse_normal |  | 🌅 | 움직이다 보니까 밴드 끝이 자꾸 셔츠 소매에 걸려서요. |
| 252 | `hidden_nurse_d2_4` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 팔 이쪽으로 내밀어 봐, 어디 보자. |
| 253 | `hidden_nurse_d2_5` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *선생님의 서늘한 손끝이 들뜬 밴드를 조심스레 떼어 내 |
| 254 | `hidden_nurse_d2_choice1` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건선생님이 내 손목을 감싸 쥐고 팔꿈치를 천천히 접 |
| 255 | `hidden_nurse_d2_choice1_b` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 당연하지, 이게 내 일이니까. 대충 붙여서 보냈다가 수 |
| 256 | `hidden_nurse_d2_6` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건선생님이 새 밴드 포장지를 휴지통에 버린다. 아까 |
| 257 | `hidden_nurse_d2_7` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *서랍 쪽으로 향한 내 시선을 눈치채고 가느다란 손바닥 |
| 258 | `hidden_nurse_d2_choice2` | {name} | nurse_room | nurse_shy |  | 🌅 | *서랍 손잡이를 감싼 선생님의 하얀 손마디에 미세한 힘 |
| 259 | `hidden_nurse_d2_choice2_a` | 보건선생님 | nurse_room | nurse_shy |  | 🌅 | *닫힌 서랍 앞면을 검지로 톡톡 두드린다.* 아까 코코 |
| 260 | `hidden_nurse_d2_8` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 자, 훨씬 단단하게 붙였어. 오늘 밤엔 진짜로 물 닿지 |
| 261 | `hidden_nurse_d2_9` |  | 없음 | 없음 |  | 🌅 |  |
| 262 | `hidden_nurse_d2_freetalk` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *사용한 소독솜을 버리고 밴드 가장자리를 한 번 눌러  |
| 263 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *석양이 물들기 시작하는 방과후, 어디로 발걸음을 옮길 |
| 264 | `after2_yuna_1` | {name} | annex_exhibit_hallway | 없음 |  | 🌅 | *아침에 받았던 쪽지를 떠올리며 인적 드문 도서관 별관 |
| 265 | `after2_yuna_1_b` | {name} | annex_exhibit_hallway | 없음 |  | 🌅 | *노을이 비스듬히 스며든 별관 복도에는 인기척 하나 없 |
| 266 | `after2_yuna_2` | {name} | yuna_hideout_day.webp | yuna_normal |  | 🌅 | *문을 밀자 경첩이 나직이 삐걱거린다. 안쪽 소파에 깊 |
| 267 | `after2_yuna_tone` |  | yuna_hideout_day.webp | 없음 |  | 🌅 |  |
| 268 | `after2_yuna_cool_1` | 유나 | yuna_hideout_day.webp | yuna_bored |  | 🌅 | *소파 위 이어폰 한쪽만 슬쩍 치운다.* 옆에서 책 읽 |
| 269 | `after2_yuna_cool_cont` | {name} | yuna_hideout_day.webp | yuna_bored |  | 🌅 | *펼쳐진 책 한 페이지를 조용히 내려 읽는다. 유나는  |
| 270 | `after2_yuna_rival_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 271 | `after2_yuna_rival_dain_low` | 다인 | school_hallway | dain_laugh |  | 🌅 | 도서관 별관 쪽에 있었구나? 조심히 들어가고 내일 봐! |
| 272 | `after2_yuna_rival_seo_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 273 | `after2_yuna_rival_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 부족하던 일손은 다른 부원들로 채웠어. 내일 보자. |
| 274 | `after2_group_yuna_companion` | 유나 | library_old | 없음 |  | 🌅 | *별관 책상에 자료 두 묶음이 놓인다.* 한쪽을 끝내기 |
| 275 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *미묘한 여운이 감도는 대화를 마치고 가방을 고쳐 멘  |
| 276 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 277 | `minsu_warn_1` | {name} | school | 없음 |  | 🌅 | *노을이 지는 하교길. 교문을 막 나서는데 등 뒤에서  |
| 278 | `minsu_warn_1_b` | 민수 | school | minsu_normal |  | 🌅 | *내 보폭에 맞춰 옆에 나란히 서더니 주머니에 두 손을 |
| 279 | `minsu_warn_2` | 민수 | school | minsu_smirk |  | 🌅 | 야, 전학생. |
| 280 | `minsu_warn_3` | {name} | school | minsu_smirk |  | 🌅 | 응? 왜 불러? |
| 281 | `minsu_warn_4` | 민수 | school | minsu_smirk |  | 🌅 | 너 요즘 학교 다니는 거 꽤 재밌냐? |
| 282 | `minsu_warn_4_b` | {name} | school | minsu_normal |  | 🌅 | *민수는 내 쪽을 보지 않고 교문 건너편 깜빡이는 횡단 |
| 283 | `minsu_warn_5` | {name} | school | minsu_smirk |  | 🌅 | 갑자기 그게 무슨 소리야? |
| 284 | `minsu_warn_6` | 민수 | school | minsu_smirk |  | 🌅 | 점심엔 한 명, 방과후엔 또 한 명. 넌 재밌겠지. — |
| 285 | `night2_start` | {name} | room_my | 없음 |  |  | *따뜻한 물로 샤워를 마치고 젖은 머리를 털며 침대에  |
| 286 | `night2_msg_1` |  | 없음 | 없음 |  |  |  |
| 287 | `night2_msg_generic` | 다인 | room_my | dain_normal | 0.35 |  | 야 내일 아침에 교실에서 보자 늦지 마! |
| 288 | `night2_msg_generic_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 점심엔 옥상 열어 놓을게 |
| 289 | `night2_msg_generic_3` |  | 없음 | 없음 |  |  |  |
| 290 | `night2_msg_generic_3_established` | 유나 | room_my | yuna_normal | 0.35 |  | 내가 빌려준 책, 어디까지 읽었어? |
| 291 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *나란히 도착한 대화방 세 개를 번갈아 바라본다. 누구 |
| 292 | `night2_choice` | {name} | room_my | 없음 |  |  | *세 개의 말풍선 중 누구에게 가장 먼저 답장을 보낼까 |
| 293 | `night2_reply_dain_1` |  | 없음 | 없음 |  |  |  |
| 294 | `night2_reply_dain_1_first` | {name} | room_my | dain_normal | 0.35 |  | 내일 학교 앞에서 떡볶이 먹을래? 난 매운 건 좀 약한 |
| 295 | `night2_reply_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | 어라 너 설마 매운 거 잘 못 먹는 체질이야? |
| 296 | `night2_reply_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | 그럼 내일은 너 맞춰서 제일 순한 맛으로 시켜 줄게. |
| 297 | `night2_reply_dain_4` | 다인 | room_my | dain_normal | 0.35 |  | 아 근데 솔직히 안 매운 건 떡볶이라고 부르면 안 되지 |
| 298 | `night2_reply_dain_5` | {name} | room_my | dain_normal | 0.35 |  | *오늘 밤에도 다인다운 경쾌한 말풍선이 세 줄 연속으로 |
| 299 | `night2_reply_dain_react_default` | 다인 | room_my | dain_normal | 0.35 |  | ㅋㅋ 오케이 알겠어. 오늘 푹 자고 굿나잇! |
| 300 | `night2_dain_freetalk` | 다인 | room_my | dain_normal | 0.35 | 🌙 | 잠깐, 진짜 자기 전에. 오늘 제일 재밌었던 건 뭐였어 |
| 301 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 창을 정리하려는데 상단 알림 목록 사이에 학교 |
| 302 | `night2_hidden_nurse_1` | {name} | room_my | nurse_normal | 0.35 |  | *건강 관리 앱 알림이 떠 있다. '보건실 기록: 전학 |
| 303 | `night2_hidden_nurse_2` | {name} | room_my | nurse_normal | 0.35 |  | *이불 위에서 팔꿈치를 천천히 한 번 굽혀 본다. 선생 |
| 304 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 마치고 길게 숨을 내쉬며 베개 옆으로 휴대폰을 |
| 305 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *남은 두 사람에게도 답장을 보내려다 손가락이 굳는다. |
| 306 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *사진첩 스크롤을 끝까지 내리자 나타난 3개월 전 봄  |
| 307 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *차마 전송 버튼을 누르지 못했던 문장들이 휴대폰 메모 |
| 308 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 임시 저장 메모가 마지막 문장이다. 그 아래 |
| 309 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *떨리는 엄지손가락을 사진 아래 휴지통 삭제 아이콘 위 |
| 310 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *다시 켠 메신저 목록에는 아직 내가 답하지 못한 두  |
| 311 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *방금 닫았던 소정이의 사진을 한 번 더 열어 본다.  |
| 312 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *가슴 한구석이 묵직하게 내려앉아 끝내 나머지 두 개의 |
| 313 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면 위로 세 사람의 이름이 나란히 쌓여 있다.  |
| 314 | `night2_end_2_b` |  | 없음 | 없음 |  |  |  |
| 315 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *액정 불빛이 완전히 꺼진 뒤에도 미지근한 열기가 남은 |
| 316 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *잠이 오지 않아 부엌으로 나와 불을 켠다. 내일 싸  |
| 317 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *서툰 손길로 부쳐 낸 계란말이와 소시지, 김과 밥을  |
| | **Day 3** | | | | | | |
| 318 | `morning3_start` | {name} | school | 없음 |  |  | *전학 사흘째, 금요일 아침. 밤늦도록 깜빡이는 메시지 |
| 319 | `morning3_start_2` | {name} | school | 없음 |  |  | *어깨에 멘 가방끈을 꽉 쥐고 숨이 턱 끝까지 차오르도 |
| 320 | `hidden_nurse_d3_check` | {name} | room_school | 없음 |  |  | *쉬는 시간이 끝나 가고 복도 끝에서 발소리가 분주해진 |
| 321 | `hidden_nurse_d3_1` | {name} | nurse_room | nurse_normal |  |  | *다음 쉬는 시간, 무거운 발걸음으로 보건실 문을 연다 |
| 322 | `hidden_nurse_d3_1_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *차트를 정리하던 보건선생님이 고개를 들고 가운 자락을 |
| 323 | `hidden_nurse_d3_1_c` | {name} | nurse_room | nurse_normal |  |  | 몸이 다쳐서 온 건 아닌데요. |
| 324 | `hidden_nurse_d3_1_d` | 보건선생님 | nurse_room | nurse_normal |  |  | *선생님이 내 쪽으로 반 걸음 다가오며 눈썹을 살짝 올 |
| 325 | `hidden_nurse_d3_1_e` | {name} | nurse_room | nurse_normal |  |  | 교실 공기가 좀 숨 막혀서요. 잠깐만 쉬었다 가고 싶습 |
| 326 | `hidden_nurse_d3_2` | 보건선생님 | nurse_room | nurse_normal |  |  | 열이 나는 건 아니고? 얼굴빛이 영 가라앉아 있는데. |
| 327 | `hidden_nurse_d3_3` | {name} | nurse_room | nurse_normal |  |  | 조금만 조용히 숨 돌리고 싶어서요. 사람 관계가 자꾸  |
| 328 | `hidden_nurse_d3_3_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 들고 있던 머그컵을 책상 위에 소리 없이 |
| 329 | `hidden_nurse_d3_3_c` |  | 없음 | 없음 |  |  |  |
| 330 | `hidden_nurse_d3_3_d` |  | 없음 | 없음 |  |  |  |
| 331 | `hidden_nurse_d3_4` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님은 침대 쪽 커튼을 반쯤 치고 따뜻한 물이  |
| 332 | `hidden_nurse_d3_5_b` |  | 없음 | 없음 |  |  |  |
| 333 | `hidden_nurse_d3_5_c` |  | 없음 | 없음 |  |  |  |
| 334 | `hidden_nurse_d3_5_d` | {name} | nurse_room | nurse_normal |  |  | *컵을 건네는 보건선생님의 따뜻한 손끝이 내 손등을 스 |
| 335 | `hidden_nurse_d3_5_e` | {name} | nurse_room | nurse_normal |  |  | 같은 반 애들한테는 꺼내기 어려운 이야기들이 자꾸 쌓여 |
| 336 | `hidden_nurse_d3_5_f` |  | 없음 | 없음 |  |  |  |
| 337 | `hidden_nurse_d3_5_g` | {name} | nurse_room | nurse_normal |  |  | 누군가를 상처 주거나 실망시킬까 봐, 정작 해야 할 대 |
| 338 | `hidden_nurse_d3_5_h` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 자기 몫의 종이컵을 책상 모서리에 반듯하 |
| 339 | `hidden_nurse_d3_5_i` | 보건선생님 | nurse_room | nurse_normal |  |  | 듣자 하니 그거, 연애 상담 같은데? |
| 340 | `hidden_nurse_d3_5_j` | {name} | nurse_room | nurse_normal |  |  | 아, 꼭 그런 거창한 건 아니고요. |
| 341 | `hidden_nurse_d3_5_k` | 보건선생님 | nurse_room | nurse_normal |  |  | *선생님이 작게 소리 내어 웃는다.* 아니라고 잡아떼기 |
| 342 | `hidden_nurse_d3_5_m` | 보건선생님 | nurse_room | nurse_normal |  |  | 이게 정식 보건 업무에 들어가는진 모르겠지만 오늘만 특 |
| 343 | `hidden_nurse_d3_5_n` | {name} | nurse_room | nurse_normal |  |  | 선생님도 주변 사람들을 다 챙기려다가 도저히 감당이 안 |
| 344 | `hidden_nurse_d3_5_o` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님의 속눈썹이 파르르 떨리며 창밖으로 시선이  |
| 345 | `hidden_nurse_d3_5_p` | 보건선생님 | nurse_room | nurse_normal |  |  | 있었지. 학교로 오기 전, 대학병원 병동에서 일할 때. |
| 346 | `hidden_nurse_d3_5_q` | {name} | nurse_room | nurse_normal |  |  | 대학병원에서 근무하셨어요? |
| 347 | `hidden_nurse_d3_choice1` | {name} | nurse_room | nurse_normal |  |  | *가운 주머니에 손을 넣는 선생님의 옆모습이 유난히 고 |
| 348 | `hidden_nurse_d3_choice1_b` | 보건선생님 | nurse_room | nurse_normal |  |  | 배려해 줘서 고마워. 내가 감당할 수 있는 만큼만 짧게 |
| 349 | `hidden_nurse_d3_6` | 보건선생님 | nurse_room | nurse_normal |  |  | 대학병원 병동에선 호출벨이 사방에서 동시에 울리면 어느 |
| 350 | `hidden_nurse_d3_6_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *선생님이 물컵을 내려놓자 유리판 위로 둥근 물기 자국 |
| 351 | `hidden_nurse_d3_6_c` | 보건선생님 | nurse_room | nurse_sad |  |  | 모두에게 좋은 간호사이고 싶었는데 그 욕심 때문에 나  |
| 352 | `hidden_nurse_d3_6_d` | {name} | nurse_room | nurse_sad |  |  | 학교로 옮기시기 전에 그 병원에서 결정적인 일이 있었던 |
| 353 | `hidden_nurse_d3_6_e` | 보건선생님 | nurse_room | nurse_sad |  |  | 있었어. 끝내 살리지 못한 환자가 한 명 있었거든. 딱 |
| 354 | `hidden_nurse_d3_6_f` | {name} | nurse_room | nurse_sad |  |  | *전에 서랍 틈으로 보았던 연두색 노트가 스친다. 첫  |
| 355 | `hidden_nurse_d3_7` | 보건선생님 | nurse_room | nurse_normal |  |  | 그래서 이 학교로 왔어. 여기선 호출벨에 쫓기지 않고  |
| 356 | `hidden_nurse_d3_7_b` |  | 없음 | 없음 |  |  |  |
| 357 | `hidden_nurse_d3_8` | 보건선생님 | nurse_room | nurse_normal |  |  | 그러니까 너도 네가 감당할 수 있는 마음부터 솔직하게  |
| 358 | `hidden_nurse_d3_8_c` | {name} | nurse_room | nurse_normal |  |  | 조언 고맙습니다, 선생님. |
| 359 | `hidden_nurse_d3_8_d` | 보건선생님 | nurse_room | nurse_normal |  |  | 혼자 정리하기 버거우면 언제든 다시 말해. 필요하면 전 |
| 360 | `hidden_nurse_d3_8_e` | {name} | nurse_room | nurse_normal |  |  | *선생님이 건넨 상담실 안내 카드를 반으로 접어 교복  |
| 361 | `hidden_nurse_d3_8_f` | {name} | nurse_room | 없음 |  |  | *자리에서 일어나 보건실 문손잡이를 잡는다. 등 뒤에서 |
| 362 | `hidden_nurse_d3_8_h` | {name} | nurse_room | 없음 |  |  | 선생님, 저 잠깐만요. *차마 문을 열지 못하고 돌아선 |
| 363 | `hidden_nurse_d3_choice2` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 서랍을 천천히 닫으며 나를 올려다본다.  |
| 364 | `hidden_nurse_d3_choice2_a` | 보건선생님 | nurse_room | nurse_normal |  |  | 응. 그 상태에서 억지로 버티다간 다른 환자 앞에서도  |
| 365 | `hidden_nurse_d3_9` | 보건선생님 | nurse_room | nurse_normal |  |  | 답답할 때 찾아오는 건 언제든 환영이야. 다만 내가 네 |
| 366 | `hidden_nurse_d3_9_b` | {name} | nurse_room | nurse_normal |  |  | *빈 종이컵을 내려놓고 주머니에 넣었던 안내 카드를 다 |
| 367 | `hidden_nurse_d3_9_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 네가 혼자 감당하기 어려운 선을 넘으면 그땐 담임선생님 |
| 368 | `hidden_nurse_d3_9_d` | 보건선생님 | nurse_room | nurse_normal |  |  | 물론 그 전에 누구에게 어디까지 공유할지는 반드시 너랑 |
| 369 | `hidden_nurse_d3_9_f` | {name} | nurse_room | nurse_normal |  |  | *예약표에는 보건실과 상담실의 빈 시간대가 나란히 적혀 |
| 370 | `hidden_nurse_d3_11` | 보건선생님 | nurse_room | nurse_normal |  |  | 다음 수업 종 치기 전까지 아직 몇 분 남았네. 더 묻 |
| 371 | `hidden_nurse_d3_freetalk` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 커튼을 반쯤 여미고 내 맞은편으로 바짝  |
| 372 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | *복도 창가에서 서연이 반 걸음 다가서며 목소리를 낮춘 |
| 373 | `morning3_date_seo_skip` |  | school_hallway | 없음 |  |  |  |
| 374 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끄고는 눈이 마주치 |
| 375 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 자, 그럼 이제 내 차례지! 이번 주말에 나랑 오락실  |
| 376 | `morning3_date_dain_skip` |  | room_school | 없음 |  |  |  |
| 377 | `morning3_date_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 이쪽을 흘끗 보다가 가방 지퍼를 끝까지 당겨  |
| 378 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심시간 직전, 유나가 소리 없이 다가와 네모나게 접 |
| 379 | `morning3_date_yuna_skip` |  | room_school | 없음 |  |  |  |
| 380 | `morning3_date_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 접어 둔 쪽지 끝을 만지작거리다 다시 책갈피  |
| 381 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 382 | `morning3_end` | {name} | room_school | 없음 |  |  | *오전 마지막 수업을 끝내는 종이 울리고 폭풍 전야 같 |
| 383 | `morning3_end_b` |  | 없음 | 없음 |  |  |  |
| 384 | `lunch3_start` | 유나 | room_school | yuna_normal |  |  | 내 빵도 반 나눠 먹어. *사흘째 점심, 교실에서 책상 |
| 385 | `lunch3_start_2_b` | 다인 | room_school | yuna_normal |  |  | 이 계란말이, 내가 먼저 먹어도 되는 거지? 일단 맛부 |
| 386 | `lunch3_meal_1` | 다인 | room_school | yuna_normal |  |  | 오, 간 딱 맞는데! 회장님도 얼른 드세요. 오늘은 옆 |
| 387 | `lunch3_meal_2` | {name} | room_school | yuna_normal |  |  | 잠깐만, 그건 내 도시락 반찬인데. |
| 388 | `lunch3_meal_3` | 서연 | room_school | yuna_normal |  |  | *서연이 내 도시락에서 계란말이 한 조각을 집어 맛본다 |
| 389 | `lunch3_meal_4` | {name} | room_school | yuna_normal |  |  | 남의 점심 반찬에 냉정하게 점수 매기지 마. |
| 390 | `lunch3_meal_5` | 서연 | room_school | yuna_normal |  |  | *서연의 입꼬리가 얄밉게 올라간다.* 10점 만점에 6 |
| 391 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *말없이 지켜보던 유나가 젓가락을 뻗어 도시락 한가운데 |
| 392 | `lunch3_meal_7` | {name} | room_school | yuna_normal |  |  | 유나야, 그 칼집 낸 소시지는 내가 제일 아껴 둔 건데 |
| 393 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *유나가 소시지를 천천히 베어 물며 맞은편의 다인을 바 |
| 394 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | 어, 잠깐만! 그건 마지막 남은 조각이야. *내 외침과 |
| 395 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *텅 빈 도시락통 한가운데에 노릇하게 구워진 마지막 계 |
| 396 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *숨소리조차 잦아든 식탁 위, 마지막 반찬을 건넬 사람 |
| 397 | `lunch3_give_seo_aff` |  | room_school | 없음 |  |  |  |
| 398 | `lunch3_give_seo_cool` | 서연 | room_school | seyoun_normal |  |  | 고마워, 잘 먹을게. |
| 399 | `lunch3_seo_skin_check` |  | room_school | seyoun_normal |  |  |  |
| 400 | `lunch3_give_seo_2_check` |  | room_school | 없음 |  |  |  |
| 401 | `lunch3_give_seo_dain_affinity` |  | room_school | 없음 |  |  |  |
| 402 | `lunch3_give_seo_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 자기 몫의 빵을 다 삼키고 물병 뚜껑을 잠근다 |
| 403 | `lunch3_give_seo_3_check` |  | room_school | 없음 |  |  |  |
| 404 | `lunch3_give_seo_yuna_affinity` |  | room_school | 없음 |  |  |  |
| 405 | `lunch3_give_seo_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 별다른 내색 없이 남은 빵 조각을 마저 입에  |
| 406 | `lunch3_end` | {name} | room_school | 없음 |  |  | *점심시간 종료를 알리는 종소리에 각자 도시락을 덮는다 |
| 407 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과 후, 노을빛 복도 갈림길에 선다. 사흘째 지나는 |
| 408 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *주머니 속 휴대폰을 만지작거린다. 엉켜 버린 주말 약 |
| 409 | `after3_choice` | {name} | school_hallway | 없음 |  | 🌅 | *석양이 물드는 복도 끝, 어디로 발걸음을 옮길까.* |
| 410 | `after3_walk_home` | {name} | school_hallway | 없음 |  | 🌅 | *오늘은 누구에게도 섣불리 말을 붙일 자신이 없다. 무 |
| 411 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *길었던 방과 후 시간이 끝났다. 복도 천장의 형광등이 |
| 412 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 413 | `after3_group_nurse_companion` | 보건선생님 | nurse_room | 없음 |  | 🌅 | *보건실 책상 위에 운동부 건강 점검표와 응급 비품 상 |
| 414 | `after3_group_return` | {name} | school_hallway | 없음 |  | 🌅 | *남은 일손 돕기를 마치고 저물어 가는 복도로 나온다. |
| 415 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 416 | `minsu_d3_check` | {name} | 없음 | 없음 |  | 🌅 |  |
| 417 | `night3_start` | {name} | room_my | 없음 |  |  | *금요일 밤, 지친 몸으로 방에 돌아와 교복 차림으로  |
| 418 | `night3_start_2` | {name} | room_my | 없음 |  |  | *불도 켜지 않은 방 안, 책상 위에 엎어 두었던 휴대 |
| 419 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *어두운 천장 아래로 휴대폰 불빛이 번진다. 도착해 있 |
| 420 | `night3_dream_1` | {name} | room_my | 없음 |  |  | *스탠드 조명을 끄려다 휴대폰을 한 번 더 집어 든다. |
| 421 | `night3_dream_2_b` | {name} | room_my | 없음 |  |  | *머리맡에 휴대폰을 내려놓는다. 내일 아침 마주 보며  |
| 422 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *잠들기 전, 휴대폰 갤러리 깊숙한 곳에서 예전 학교의 |
| 423 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *화면에 '이 사진을 삭제하시겠습니까?'라는 확인 창이 |
| 424 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *푸르스름한 액정 빛을 가만히 내려다본다. 소정이의 책 |
| 425 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *확인 창에서 조용히 취소를 누른다. 사진 한 장을 지 |
| 426 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼 대신 이동 메뉴를 눌러 사진을 새 폴더로  |
| 427 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *사진 아래에 짧은 메모를 남긴다. 소정이에게 끝내 건 |
| 428 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *새로 만든 폴더 안에 사진 한 장이 조용히 자리 잡는 |
| 429 | `night3_faithful_reflect_4_b` |  | 없음 | 없음 |  |  |  |
| 430 | `night3_faithful_reflect_4_c` |  | 없음 | 없음 |  |  |  |
| 431 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 내일 아침 알람을 맞춘다. 휴대폰을 내 |
| 432 | `night3_end` | {name} | room_my | 없음 |  |  | *금요일 시간표가 적힌 교과서를 덮고 스탠드 불을 완전 |
| | **Day 4** | | | | | | |
| 433 | `morning4_start` | {name} | room_my_day.webp | 없음 |  |  | *넷째 날, 토요일 아침. 커튼 틈으로 스며든 주말 햇 |
| 434 | `morning4_date_plan_check` |  | 없음 | 없음 |  |  |  |
| 435 | `morning4_fallback_msg` | {name} | room_my_day.webp | 없음 |  |  | *주말 아침의 고요한 방 안. 밤새 온 알림을 정리하고 |
| 436 | `morning4_hidden_check` | {name} | street | 없음 |  |  | *이른 아침 공기를 가르며 학교 앞 사거리 횡단보도에서 |
| 437 | `hidden_nurse_d4_morning_1` | {name} | nurse_room | nurse_normal |  |  | 선생님, 지난번에 잡아 주신 상담 시간에 맞춰 왔어요. |
| 438 | `hidden_nurse_d4_morning_3` | 보건선생님 | nurse_room | nurse_normal |  |  | 약속 시간 딱 맞춰서 왔네. 이쪽 의자에 편하게 앉아. |
| 439 | `hidden_nurse_d4_morning_4` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 차분한 손길로 상담 기록지를 펼치고 볼펜 |
| 440 | `hidden_nurse_d4_morning_5` | {name} | nurse_room | nurse_normal |  |  | 지난번에 나눴던 상담 내용 마무리하는 자리 맞죠? |
| 441 | `hidden_nurse_d4_morning_6` | 보건선생님 | nurse_room | nurse_normal |  |  | 응. 그사이 컨디션이 어땠는지 살피고 앞으로 힘들 때  |
| 442 | `hidden_nurse_d4_morning_7` | 보건선생님 | nurse_room | nurse_normal |  |  | *선생님의 시선이 지난 상담 때 꼼꼼히 적어 둔 체크리 |
| 443 | `hidden_nurse_d4_morning_8` | 보건선생님 | nurse_room | nurse_normal |  |  | 기록 닫기 전에 한 가지만 확실히 짚고 넘어가자. |
| 444 | `hidden_nurse_d4_morning_9` | {name} | nurse_room | nurse_normal |  |  | 어떤 건데요? |
| 445 | `hidden_nurse_d4_morning_10` | 보건선생님 | nurse_room | nurse_normal |  |  | *학교 상담 지원 안내문을 내 눈앞으로 반듯하게 돌려  |
| 446 | `hidden_nurse_d4_morning_11` | 보건선생님 | nurse_room | nurse_normal |  |  | 보건실 문이 닫혀 있을 때에도 네가 망설이지 않고 도움 |
| 447 | `hidden_nurse_d4_morning_choice` | {name} | nurse_room | nurse_normal |  |  | *인쇄된 안내문 종이 위로 담임 교사 상담, 위클래스  |
| 448 | `hidden_nurse_d4_morning_choice_b` | {name} | nurse_room | nurse_normal |  |  | 아직은 누구한테 말해야 할지 잘 모르겠어요. |
| 449 | `hidden_nurse_d4_morning_12` | 보건선생님 | nurse_room | nurse_normal |  |  | 처음부터 혼자 고르기 막막하면 선생님이랑 같이 추려 보 |
| 450 | `hidden_nurse_d4_morning_13` | 보건선생님 | nurse_room | nurse_normal |  |  | 네가 털어놓은 속마음을 허락 없이 남에게 옮기진 않아. |
| 451 | `hidden_nurse_d4_morning_freetalk` | 보건선생님 | nurse_room | nurse_normal |  |  | *상담 기록지 파일철을 부드럽게 덮는다.* 방금 같이  |
| 452 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 453 | `hidden_nurse_d4_1` | {name} | nurse_room | nurse_normal |  |  | *보건실 긴 책상 위로 학교 행사에 쓸 구급함과 소독  |
| 454 | `hidden_nurse_d4_1_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *선생님이 눈을 동그랗게 뜨며 몸을 돌린다.* 어라,  |
| 455 | `hidden_nurse_d4_2` | 보건선생님 | nurse_room | nurse_normal |  |  | 행사장에 비치할 응급키트 포장할 손이 모자라서 공고를  |
| 456 | `hidden_nurse_d4_2_b` | {name} | nurse_room | nurse_shy |  |  | 이번엔 아파서 온 환자 말고 일손 돕는 봉사자 자격이니 |
| 457 | `hidden_nurse_d4_2_c` | 보건선생님 | nurse_room | nurse_dry_smile |  |  | 좋아, 지금은 든든한 봉사자. 작업하다가 종이에 손이라 |
| 458 | `hidden_nurse_d4_2_d` | {name} | nurse_room | nurse_shy |  |  | 멸균 거즈랑 알코올 스왑은 손 닿기 편하게 이쪽에 분류 |
| 459 | `hidden_nurse_d4_2_e` | 보건선생님 | nurse_room | nurse_normal |  |  | *투명한 지퍼 파우치 묶음을 내 앞으로 건넨다.* 거즈 |
| 460 | `hidden_nurse_d4_2_f` | {name} | nurse_room | nurse_normal |  |  | 이 줄 파우치는 수량 맞춰서 다 채웠어요. 빠진 거 없 |
| 461 | `hidden_nurse_d4_2_g` | 보건선생님 | nurse_room | nurse_tired |  |  | 예전에 대학병원 병동에 있을 땐 이런 물품 준비도 밤새 |
| 462 | `hidden_nurse_d4_2_h` | {name} | nurse_room | nurse_shy |  |  | 그 많은 걸 혼자서 다 하셨다고요? |
| 463 | `hidden_nurse_d4_3` | {name} | nurse_room | nurse_normal |  |  | 옆에서 거들어 주는 동료들이 있다고 하셨잖아요. |
| 464 | `hidden_nurse_d4_4` | 보건선생님 | nurse_room | nurse_tired |  |  | 응급 환자가 몰리는 야간 당직 때는 간호사 세 명 몫의 |
| 465 | `hidden_nurse_d4_4_b` | {name} | nurse_room | nurse_normal |  |  | 그러다 몸이 축나서 번아웃이 오신 거군요. |
| 466 | `hidden_nurse_d4_4_c` | 보건선생님 | nurse_room | nurse_tired |  |  | 잠 못 자고 바빴던 것도 사실이긴 해. 하지만 단순히  |
| 467 | `hidden_nurse_d4_4_d` | 보건선생님 | nurse_room | nurse_tired |  |  | 그 시절 나를 제일 숨 막히게 했던 건 끝없는 업무량이 |
| 468 | `hidden_nurse_d4_4_e` | {name} | nurse_room | nurse_normal |  |  | 업무량이 아니면 뭐가 그렇게 힘드셨는데요? |
| 469 | `hidden_nurse_d4_4_f` | 보건선생님 | nurse_room | nurse_tired |  |  | 환자 얼굴이나 이름보다 차트에 적힌 병상 번호와 바이탈 |
| 470 | `hidden_nurse_d4_4_g` |  | 없음 | 없음 |  |  |  |
| 471 | `hidden_nurse_d4_4_h` | 보건선생님 | nurse_room | nurse_normal |  |  | 학교 보건실에서는 찾아오는 아이들 눈을 한 명씩 똑바로 |
| 472 | `hidden_nurse_d4_4_i` | {name} | nurse_room | nurse_normal |  |  | 누군가에게 연결해 주는 일도 치료에 포함되는 거예요? |
| 473 | `hidden_nurse_d4_4_j` | 보건선생님 | nurse_room | nurse_normal |  |  | 당연하지. 그러니까 너도 혼자 감당하기 버거운 일이 생 |
| 474 | `hidden_nurse_d4_4_k` | {name} | nurse_room | nurse_shy |  |  | 마지막 응급키트 지퍼까지 다 잠갔어요. *묵직해진 구급 |
| 475 | `hidden_nurse_d4_5` | 보건선생님 | nurse_room | nurse_normal |  |  | 그래서 화려한 대학병원 대신 학교로 왔어. 약을 건네기 |
| 476 | `hidden_nurse_d4_name_choice` | {name} | nurse_room | nurse_shy |  |  | *보건선생님이 안경을 고쳐 쓰며 수량 확인표에 완성된  |
| 477 | `hidden_nurse_d4_name_choice_a` | 보건선생님 | nurse_room | nurse_normal |  |  | 복도에서 서성거리며 혼자 참던 학생이 용기 내서 보건실 |
| 478 | `hidden_nurse_d4_6` | 보건선생님 | nurse_room | nurse_normal |  |  | 네가 옆에서 손 맞춰 준 덕분에 예상보다 훨씬 일찍 끝 |
| 479 | `hidden_nurse_d4_6_b` | {name} | nurse_room | nurse_normal |  |  | 방금 들은 건 절대 별거 아닌 얘기가 아닌데요. |
| 480 | `hidden_nurse_d4_6_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 네가 그렇게 진지하게 들어 주니까 괜히 부끄럽잖아. 대 |
| 481 | `hidden_nurse_d4_6_d` | {name} | nurse_room | nurse_normal |  |  | *선생님이 봉사 활동 확인서 양식에 시작 시각과 종료  |
| 482 | `hidden_nurse_d4_choice` | 보건선생님 | nurse_room | nurse_normal |  |  | 이제 상자 겉면에 부서별 라벨 붙이는 작업만 남았네.  |
| 483 | `hidden_nurse_d4_meal_walk` | {name} | snack_shop.webp | nurse_normal |  |  | 스태프 인원수대로 포장된 거 맞죠? *학교 앞 분식집에 |
| 484 | `hidden_nurse_d4_meal_1` | 보건선생님 | snack_shop.webp | nurse_normal |  |  | 잠깐, 이 매운맛 떡볶이 누가 골랐어. 얼른 냉수부터  |
| 485 | `hidden_nurse_d4_meal_1_b` | {name} | snack_shop.webp | nurse_normal |  |  | 방금 선생님이 제일 먼저 집어 드셨잖아요. |
| 486 | `hidden_nurse_d4_meal_1_c` | 보건선생님 | snack_shop.webp | nurse_normal |  |  | 학생들 먹이기 전에 맵기 정도를 점검하려고 먼저 맛본  |
| 487 | `hidden_nurse_d4_meal_1b` | {name} | nurse_room | nurse_normal |  |  | *간식을 마저 비운 스태프들과 함께 보건실로 돌아와 키 |
| 488 | `hidden_nurse_d4_meal_2` | {name} | nurse_room | nurse_normal |  |  | 아까 대학병원 시절 얘기하실 때랑은 얼굴 표정이 완전히 |
| 489 | `hidden_nurse_d4_meal_2_b` | {name} | nurse_room | nurse_normal |  |  | *선생님 얼굴을 쳐다보며 말하다가 손끝의 라벨 한 장이 |
| 490 | `hidden_nurse_d4_meal_3` | 보건선생님 | nurse_room | nurse_normal |  |  | 그치? 옛날생각 하느라 나도 모르게 표정이 굳어 있었나 |
| 491 | `hidden_nurse_d4_meal_3_b` | {name} | nurse_room | nurse_normal |  |  | *선생님이 떼어 낸 라벨을 내가 이어받아 마지막 상자  |
| 492 | `hidden_nurse_d4_meal_3_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 좋아, 준비 작업은 여기까지. 다들 봉사 시간 기재된  |
| 493 | `hidden_nurse_d4_meal_3_d` | {name} | nurse_room | nurse_normal |  |  | *가방을 챙겨 보건실 문을 나서려는데 선생님이 서류 한 |
| 494 | `hidden_nurse_d4_meal_3_e` | 보건선생님 | nurse_room | nurse_normal |  |  | {name}, 제일 중요한 봉사 확인표 놓고 가잖아. |
| 495 | `hidden_nurse_d4_meal_4` | 보건선생님 | nurse_room | nurse_normal |  |  | {name}. 주말 아침부터 옆에서 같이 손 맞춰 줘서 |
| 496 | `hidden_nurse_d4_meal_4_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *선생님이 가벼운 미소를 남기고 완성된 응급키트 상자를 |
| 497 | `hidden_nurse_d4_freetalk` | 보건선생님 | nurse_room | nurse_normal |  |  | *마지막 응급키트 지퍼를 닫아 상자에 넣은 뒤 맞은편  |
| 498 | `day4_haeun_gate` |  | 없음 | 없음 |  |  |  |
| 499 | `day4_haeun_trust_check` |  | 없음 | 없음 |  |  |  |
| 500 | `day4_haeun_personal_gate` |  | 없음 | 없음 |  |  |  |
| 501 | `morning4_end` | {name} | room_my_day.webp | 없음 |  |  | *집으로 돌아와 거울 앞에서 셔츠 깃과 머리카락을 정돈 |
| 502 | `day4_date_branch` |  | 없음 | 없음 |  |  |  |
| 503 | `day4_night_start` | {name} | school | 없음 |  |  | *어스름이 짙게 깔린 학교를 나서서 집으로 돌아갈 시간 |
| 504 | `day4_night_branch` | 시스템 | 없음 | 없음 |  |  |  |
| 505 | `day4_nurse_checkin` | {name} | school | 없음 |  |  | *주말 행사 준비로 학교에 남았던 학생들에게 보건선생님 |
| 506 | `day4_adult_nurse_student_rank` |  | 없음 | 없음 |  |  |  |
| 507 | `day4_nurse_dain_counteroffer` | 다인 | school_back | dain_sad |  |  | *교문으로 빠져나가는 길목, 불 꺼진 체육관 계단 앞에 |
| 508 | `day4_adult_return_home` | {name} | room_my | 없음 |  |  | *집에 무사히 도착해 학교 앱의 귀가 확인 버튼을 누른 |
| 509 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 510 | `night_nurse_msg_1` | 보건선생님 | room_my | nurse_normal | 0.35 |  | *학교 건강관리 앱 알림* 주말 상담 이후 현재 컨디션 |
| 511 | `night_nurse_msg_2` | {name} | room_my | nurse_normal | 0.35 |  | *자동 발송된 안내 문구 아래로 '한결 안정됨'과 '추 |
| 512 | `night_nurse_msg_3` | 보건선생님 | room_my | nurse_normal | 0.35 |  | *보건실 안내 문구* 추가 면담이 필요한 학생은 내일  |
| 513 | `night_nurse_msg_4` | 보건선생님 | room_my | nurse_normal | 0.35 |  | *보건실 안내 문구* 심야 시간에는 개별 답장을 보내지 |
| 514 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *일요일 아침 알람을 맞춰 두고 방 안의 스탠드 불을  |
| 515 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안의 시계 바늘이 자정을 넘어 다섯째 날로 향한다 |
| | **Day 5** | | | | | | |
| 516 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날, 일요일 아침. 교문 너머로 축제 현수막이 |
| 517 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 518 | `morning5_start_b` |  | 없음 | 없음 |  |  |  |
| 519 | `morning5_start_2_b` |  | 없음 | 없음 |  |  |  |
| 520 | `morning5_mood_check` | 시스템 | room_school | 없음 |  |  |  |
| 521 | `morning5_mood_low` | {name} | room_school | 없음 |  |  | *전학 온 첫 주가 저물어 간다. 휴대폰 잠금화면에 나 |
| 522 | `morning5_gate` |  | 없음 | 없음 |  |  |  |
| 523 | `morning5_seo_note_1` | 서연 | room_school | seyoun_normal | 0.35 |  | *내 책상 한가운데, 모서리를 반듯하게 맞춘 쪽지 한  |
| 524 | `morning5_seo_note_1_b` | {name} | school_hallway | 없음 |  |  | *복도 창가를 따라 꾸며진 문예부 전시 코너를 지나다가 |
| 525 | `morning5_seo_note_1_c` | {name} | school_hallway | 없음 |  |  | *문예부 게시판 한켠에 단편소설 원고 몇 장이 압정으로 |
| 526 | `morning5_yuna_story_1` | {name} | school_hallway | yuna_normal | 0.35 |  | *원고 속 화자는 오후의 도서관 책상에 엎드려 잠든 누 |
| 527 | `morning5_yuna_story_2` | {name} | school_hallway | 없음 |  |  | *원고의 맨 끝 문장에 시선이 닿는다. '그 사람이 눈 |
| 528 | `morning5_yuna_story_4` | {name} | school_hallway | yuna_normal | 0.35 |  | *원고지 맨 아래 여백 구석에는 연필로 아주 작게 덧붙 |
| 529 | `morning5_return_class` | {name} | room_school | dain_normal |  |  | *복도 끝에서 교실로 돌아오자, 문가에 등을 기댄 채  |
| 530 | `morning5_dain_1` | 다인 | room_school | dain_normal |  |  | *내 어깨를 가볍게 툭 치며 장난스럽게 웃는다.* 야, |
| 531 | `morning5_dain_1_b` | {name} | room_school | dain_normal |  |  | 내 허락도 안 받고 마음대로 적어 놓으면 어떡해? |
| 532 | `morning5_dain_2` | 다인 | room_school | dain_laugh |  |  | *포니테일이 흔들리도록 고개를 휙 젖히며 볼에 바람을  |
| 533 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *축제 준비로 복도가 소란스러운 틈을 지나, 문이 반쯤 |
| 534 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *오전 행사 준비가 한차례 숨을 고르는 쉬는 시간. 소 |
| 535 | `hidden_nurse_d5_1` | 보건선생님 | school_hallway | nurse_normal |  |  | 어, {name} 왔구나. 축제도 이제 끝자락이네. 그 |
| 536 | `hidden_nurse_d5_1_b` | {name} | school_hallway | nurse_normal |  |  | *보건선생님이 차트 파일을 열어 내 이름이 적힌 상담  |
| 537 | `hidden_nurse_d5_1_c` | 보건선생님 | school_hallway | nurse_normal |  |  | 지금 컨디션까지만 체크하면 이번 한 주 동안의 초기 상 |
| 538 | `hidden_nurse_d5_1_d` | {name} | school_hallway | nurse_normal |  |  | ...그럼 이제 보건실엔 따로 안 들러도 되는 거예요? |
| 539 | `hidden_nurse_d5_1_e` | 보건선생님 | school_hallway | nurse_normal |  |  | *차트에서 눈을 떼고 내 눈을 가만히 바라본다.* 몸이 |
| 540 | `hidden_nurse_d5_1_f` | {name} | school_hallway | nurse_normal |  |  | *상담 기록지 맨 아래 칸에는 보건실 방문 절차와 위클 |
| 541 | `hidden_nurse_d5_2_b` |  | 없음 | 없음 |  |  |  |
| 542 | `hidden_nurse_d5_2_c` |  | 없음 | 없음 |  |  |  |
| 543 | `hidden_nurse_d5_3` | {name} | school_hallway | nurse_normal |  |  | 선생님, 상담 확인서 받으러 들렀어요. |
| 544 | `hidden_nurse_d5_3_b` | {name} | school_hallway | nurse_normal |  |  | 약속한 시간 맞춰 온 건데 괜히 일거리만 늘려 드린 건 |
| 545 | `hidden_nurse_d5_3_c` | 보건선생님 | school_hallway | nurse_normal |  |  | 약속한 시간에 제 발로 도움을 받으러 오는 학생은 언제 |
| 546 | `hidden_nurse_d5_3_d` |  | 없음 | 없음 |  |  |  |
| 547 | `hidden_nurse_d5_3_e` |  | 없음 | 없음 |  |  |  |
| 548 | `hidden_nurse_d5_3_f` | 보건선생님 | school_hallway | nurse_normal |  |  | *책상 한켠의 하얀 플라스틱 상자를 열어 응급처치 안내 |
| 549 | `hidden_nurse_d5_3_g` |  | 없음 | 없음 |  |  |  |
| 550 | `hidden_nurse_d5_3_h` |  | 없음 | 없음 |  |  |  |
| 551 | `hidden_nurse_d5_3_i` |  | 없음 | 없음 |  |  |  |
| 552 | `hidden_nurse_d5_4` | 보건선생님 | school_hallway | nurse_normal |  |  | 축제 기간 동안 비상 응급키트는 체육관 정문 쪽에 비치 |
| 553 | `hidden_nurse_d5_4_b` | {name} | school_hallway | nurse_normal |  |  | 선생님. |
| 554 | `hidden_nurse_d5_4_c` | {name} | school_hallway | nurse_normal |  |  | *확인서 하단 네모 칸에 '상담 종결, 필요 시 재예약 |
| 555 | `hidden_nurse_d5_4_d` | 보건선생님 | school_hallway | nurse_normal |  |  | 자, 이걸로 마지막 확인 절차도 끝. |
| 556 | `hidden_nurse_d5_5` | 보건선생님 | school_hallway | nurse_normal |  |  | {name}. 가는 길에 이 응급처치 안내 카드도 하나 |
| 557 | `hidden_nurse_d5_choice` | {name} | school_hallway | nurse_normal |  |  | *빳빳한 카드 앞면에는 기본 응급처치 순서가, 뒷면에는 |
| 558 | `hidden_nurse_d5_choice_a` | {name} | school_hallway | nurse_normal |  |  | 잘 챙겨 둘게요. 다칠 일 없으면 그냥 가방 안주머니에 |
| 559 | `hidden_nurse_d5_choice_a_b` | 보건선생님 | school_hallway | nurse_normal |  |  | 그럼. 꺼내 쓸 일이 없는 게 제일 좋고 혹시라도 숨이 |
| 560 | `hidden_nurse_d5_6` | 보건선생님 | school_hallway | nurse_normal |  |  | *그제야 안심한 듯 눈매가 부드럽게 풀린다.* 그렇게만 |
| 561 | `hidden_nurse_d5_6_b` |  | 없음 | 없음 |  |  |  |
| 562 | `hidden_nurse_d5_6_c` | {name} | school_hallway | nurse_normal |  |  | *카드 맨 아랫줄에 작은 고딕체로 인쇄된 문장이 눈에  |
| 563 | `hidden_nurse_d5_flag_check` |  | school_hallway | 없음 |  |  |  |
| 564 | `hidden_nurse_d5_7` |  | school_hallway | 없음 |  |  |  |
| 565 | `hidden_nurse_d5_freetalk` | 보건선생님 | school_hallway | nurse_normal |  |  | *정리된 상담 기록지를 캐비닛 파일에 꽂아 넣는다.*  |
| 566 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 567 | `morning5_sojeong_1` | {name} | room_school | 없음 |  |  | *조용한 창가에 서서 휴대폰 메모 앱을 연다. 이전 학 |
| 568 | `morning5_sojeong_2` | {name} | room_school | 없음 |  |  | *더 이상 나를 변호하기 위한 마흔 번째 초안은 만들지 |
| 569 | `morning5_sojeong_3` | {name} | room_school | 없음 |  |  | 그때 네 책상 위에 적힌 낙서들을 두 눈으로 보고도 선 |
| 570 | `morning5_sojeong_4` | {name} | room_school | 없음 |  |  | *말풍선 옆에 작은 전송 완료 표시가 뜬다. 숫자 1이 |
| 571 | `morning5_sojeong_5` | {name} | room_school | 없음 |  |  | 전학 오기 전 학교에서 제가 모른 척 지나쳤던 일에 대 |
| 572 | `morning5_route_branch` |  | room_school | 없음 |  |  |  |
| 573 | `morning5_end` | {name} | room_school | 없음 |  |  | *책상 위에 놓인 쪽지들을 소중히 추려 모으고 휴대폰  |
| 574 | `day5_haeun_gate` |  | 없음 | 없음 |  |  |  |
| 575 | `day5_haeun_trust_check` |  | 없음 | 없음 |  |  |  |
| 576 | `day5_haeun_resume` |  | 없음 | 없음 |  |  |  |
| 577 | `tour_seo_1` | {name} | school | seyoun_normal |  |  | *점심 햇살이 쏟아지는 교문 앞에 서연과 나란히 멈춰  |
| 578 | `tour_seo_skip` |  | school | 없음 |  |  |  |
| 579 | `tour_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *점심시간의 소란스러운 복도 끝에서 서연과 마주친다.  |
| 580 | `after5_start` |  | 없음 | 없음 |  | 🌅 |  |
| 581 | `day5_haeun_guilt_gate` |  | 없음 | 없음 |  | 🌅 |  |
| 582 | `day5_haeun_route_gate` |  | 없음 | 없음 |  | 🌅 |  |
| 583 | `after5_original_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 584 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *소란스럽던 축제가 막을 내릴 무렵, 노을이 스며드는  |
| 585 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *축제 마지막 순서가 끝나 가는 복도 창가에서, 홀로  |
| 586 | `after5_farewell_seo_skip` |  | school_hallway | 없음 |  | 🌅 |  |
| 587 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *오후의 그림자가 길어진 복도에서 서연과 마주친다. 서 |
| 588 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 589 | `after5_farewell_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지날 무렵, 문가에서 기다리고 있던 유나 |
| 590 | `after5_farewell_yuna_skip` |  | school_hallway | 없음 |  | 🌅 |  |
| 591 | `after5_farewell_yuna_low` | 유나 | library_old | yuna_normal |  | 🌅 | *도서관 앞 복도에서 유나와 눈이 마주친다. 유나는 읽 |
| 592 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 593 | `after5_farewell_dain_1` | {name} | school_back | dain_normal |  | 🌅 | *체육관 입구 쪽에서 다인이 걸어 나온다. 언제나 성큼 |
| 594 | `after5_farewell_dain_skip` |  | school_hallway | 없음 |  | 🌅 |  |
| 595 | `after5_farewell_dain_low` | 다인 | school_back | dain_normal |  | 🌅 | *체육관 앞길에서 걸어오던 다인이 두 걸음 떨어진 자리 |
| 596 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *붉은 석양이 길게 내려앉은 교정 위로, 축제의 끝을  |
| 597 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 598 | `after5_hidden_route_choice_check` | {name} | school_back | 없음 |  | 🌅 | *노을이 물든 교문 앞, 친구들과 약속한 공원으로 향하 |
| 599 | `after5_hidden_route_choice` | {name} | school_back | 없음 |  | 🌅 | *공원으로 향하는 가로수길과 교사동으로 돌아가는 복도가 |
| 600 | `after5_hidden_nurse_affinity_check` |  | nurse_room | 없음 |  | 🌅 |  |
| 601 | `after5_hidden_nurse_mid` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *응급처치 카드 뒷면에 인쇄된 상담 예약 QR 코드를  |
| 602 | `after5_hidden_return_to_park` | {name} | park | 없음 |  | 🌅 | *교내의 마지막 뒷정리를 모두 마치고 학교 밖 공원으로 |
| 603 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 604 | `hidden_perfect_nurse_check` |  | nurse_room | 없음 |  |  |  |
| 605 | `hidden_good_nurse_1` | 보건선생님 | nurse_room | nurse_normal |  |  | *졸업식 행사가 모두 끝난 뒤, 마지막으로 조용한 보건 |
| 606 | `hidden_good_nurse_2` | 보건선생님 | nurse_room | nurse_normal |  |  | 졸업 인사하러 들른 거면 이리 와서 잠깐 앉아. 너한테 |
| 607 | `hidden_good_nurse_2_b` | {name} | nurse_room | nurse_normal |  |  | 그동안 제 이야기 들어 주시고 돌봐 주셔서 정말 감사했 |
| 608 | `hidden_good_nurse_2_c` | 보건선생님 | nurse_room | nurse_normal |  |  | *그녀가 잠시 말을 고르듯 내 얼굴을 바라보다가 다정하 |
| 609 | `hidden_good_nurse_2_d` | 보건선생님 | nurse_room | nurse_normal |  |  | *책상 서랍에서 손때 묻은 연두색 노트를 꺼내어 맨 마 |
| 610 | `hidden_good_nurse_3` | {name} | nurse_room | nurse_normal |  |  | *주원은 오늘 날짜 옆에 또박또박 '졸업, 이상 없음' |
| 611 | `hidden_good_nurse_3_b` | 보건선생님 | nurse_room | nurse_normal |  |  | 잘 가렴. 혹시라도 언젠가 길에서 우연히 마주치면, 그 |
| 612 | `hidden_good_nurse_4` | {name} | ending_good_nurse | 없음 |  |  | *햇살이 비치는 창가에 선 주원에게 정중히 고개를 숙여 |
| 613 | `hidden_good_nurse_ending_title` |  | ending_good_nurse | 없음 |  |  | ─── 보건선생님 GOOD END ─── |
| 614 | `day5_nurse_ending_freetalk_intro` | {name} | nurse_house | nurse_home_normal.webp |  |  | *아늑한 거실 정리를 마친 주원이 소파의 내 바로 옆자 |
| 615 | `day5_nurse_ending_freetalk_router` | {name} | nurse_house | 없음 |  |  |  |
| 616 | `day5_nurse_ending_freetalk_good` | 보건선생님 | nurse_room | nurse_normal |  | 🌙 | *연두색 상담 노트 마지막 줄에 '졸업, 이상 없음'을 |
| 617 | `day5_credits` |  | school | 없음 |  |  |  |
| 618 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### day5_nurse_ending_freetalk_true_love

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_seo_choice`: (선택)
- `after1_jealousy_seo_choice`: (선택)
- `after_end`: (선택)
- `after_hidden_nurse_choice`: (선택)
- `after_nurse_enter_choice`: (선택)
- `lunch2_choice`: (선택)
- `hidden_nurse_d2_choice1`: (선택)
- `hidden_nurse_d2_choice2`: (선택)
- `after2_choice`: (선택)
- `night2_choice`: (선택)
- `hidden_nurse_d3_choice1`: (선택)
- `hidden_nurse_d3_choice2`: (선택)
- `lunch3_choice`: (선택)
- `after3_choice`: (선택)
- `hidden_nurse_d4_morning_choice`: (선택)
- `hidden_nurse_d4_name_choice`: (선택)
- `hidden_nurse_d4_choice`: (선택)
- `day4_nurse_seoyeon_counteroffer`: (선택)
- `hidden_nurse_d5_choice`: (선택)
- `after5_hidden_route_choice`: (선택)
- `date_choice_true_nurse`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=6 유나=5 다인=4 담임=0 보건=73

<details>
<summary>씬 타임라인 (645씬)</summary>

| # | 씬 ID | 화자 | 배경 | 캐릭터 | OP | 밤 | 대사 (앞 30자) |
|---|--------|------|------|--------|----|----|----------------|
| | **Day 1** | | | | | | |
| 1 | `start` | {name} | school | 없음 |  |  | *4월의 벚꽃잎이 흩날리는 교문 앞. 아직 풀기가 가시 |
| 2 | `start_again` | {name} | school | 없음 |  |  | *순간 울컥 치미는 현기증에 차가운 교문 기둥을 짚어선 |
| 3 | `start_3` | {name} | school | 없음 |  |  | *주머니 속 휴대폰이 짧게 떨린다. 예전 학교 단체방  |
| 4 | `name_input_scene` | 시스템 | school | 없음 |  |  | 전학생, 이름이 뭐야? |
| 5 | `gate_1` | {name} | school | 없음 |  |  | *교문 그늘 아래 서 있던 긴 생머리의 여학생이 안경테 |
| 6 | `seoyeon_meet_1` | 서연 | school | seyoun_normal |  |  | 혹시 오늘 온 전학생? {name} 맞지? |
| 7 | `seoyeon_meet_2` | 서연 | school | seyoun_normal |  |  | 가슴팍 명찰도 {name}이네. 반가워. *단정한 손끝 |
| 8 | `seoyeon_meet_3` | {name} | school | seyoun_normal |  |  | 맞는데. 내 얼굴은 어떻게 한 번에 알아봤어? |
| 9 | `seoyeon_meet_4` | 서연 | school | seyoun_normal |  |  | 학생회장이거든. 새로 온 전학생 맞이하는 것도 내 몫이 |
| 10 | `seoyeon_meet_5` | 서연 | school | seyoun_normal |  |  | 이쪽으로 따라와. 조회 시작하기 전에 15분 안으로 학 |
| 11 | `seoyeon_meet_6` | {name} | school | seyoun_normal |  |  | 첫날부터 학생회장이 직접 안내라니 좀 떨리는데. |
| 12 | `seoyeon_meet_7` | 서연 | school | seyoun_normal |  |  | 원래 내가 맡은 일이니까 괜히 어렵게 생각할 것 없어. |
| 13 | `seoyeon_meet_8` | 서연 | school | seyoun_normal |  |  | 자, 가자. *몸을 돌리는 서연의 교복 셔츠 깃에서 햇 |
| 14 | `seoyeon_choice` | {name} | school | seyoun_normal |  |  | *앞서 걷는 서연의 단정한 뒷모습을 보며 입을 연다.* |
| 15 | `choice_flirt_1` | 서연 | school | seyoun_normal |  |  | *걸음을 멈추고 반쯤 돌아서더니 맑은 안경알 너머로 눈 |
| 16 | `choice_flirt_2` | 서연 | school | seyoun_laugh |  |  | 전학 첫날부터 농담할 여유도 있네. 덕분에 네 이름은  |
| 17 | `choice_flirt_3` | {name} | school | seyoun_laugh |  |  | 오, 혹시 첫인상 점수라도 매기는 중이야? |
| 18 | `choice_flirt_4` | 서연 | school | seyoun_normal |  |  | 글쎄, 아직 학교 분위기는 잘 모르는 모양이지만 첫인상 |
| 19 | `choice_flirt_5` | {name} | school | seyoun_normal |  |  | 학생회장님한테 후한 점수라니 영광인데? |
| 20 | `choice_flirt_6` | 서연 | school | seyoun_normal |  |  | 일주일 뒤에도 그렇게 여유롭게 웃을 수 있을지 두고 볼 |
| 21 | `choice_flirt_7` | 서연 | school | seyoun_laugh |  |  | 늦겠다, 이리 따라와 {name}. *살짝 붉어진 귓바 |
| 22 | `hallway_1` | 서연 | school_hallway | seyoun_back |  |  | 지나가는 애들한테 인사받느라 걸음 늦출 필요 없어. 그 |
| 23 | `hallway_3` | 서연 | school_hallway | seyoun_normal |  |  | 지금 걷는 본관이 3학년 건물이고 창밖 건너편이 도서관 |
| 24 | `hallway_4` | 서연 | school_hallway | seyoun_normal |  |  | 그리고 이건 아무한테나 안 보여주는 건데. *재킷 주머 |
| 25 | `hallway_5` | 서연 | school_hallway | seyoun_normal |  |  | 원래 우리 학교 옥상은 평소엔 잠겨 있거든. 이 열쇠는 |
| 26 | `hallway_6` | {name} | school_hallway | seyoun_normal |  |  | 옥상에 너만의 비밀 아지트라도 숨겨 둔 거야? |
| 27 | `hallway_6_b` | 서연 | school_hallway | seyoun_normal |  |  | *맑게 울리던 열쇠고리 소리가 손안에서 뚝 멎는다.*  |
| 28 | `hallway_6_c` | 서연 | school_hallway | seyoun_normal |  |  | *입꼬리를 살짝 올린 채 대답 대신 열쇠를 다시 주머니 |
| 29 | `hallway_7` | 서연 | school_hallway | seyoun_normal |  |  | 맞다, 오늘 점심시간. 아직 어디서 밥 먹을지 못 정했 |
| 30 | `hallway_8` | {name} | school_hallway | seyoun_shy |  |  | *어느새 걸음을 멈춘 서연이 아침 햇살이 비치는 교실  |
| 31 | `hallway_10` | 서연 | school_hallway | seyoun_normal |  |  | 다 왔다, 여기가 네 교실이야. 얼른 들어가 봐. |
| 32 | `hallway_11` | {name} | school_hallway | seyoun_normal |  |  | 점심때도 일대일로 안내해 주는 거야? |
| 33 | `hallway_12` | 서연 | school_hallway | seyoun_normal |  |  | 글쎄, 오늘 오전 수업 잘 버티는 거 봐서. |
| 34 | `hallway_13` | 서연 | school_hallway | seyoun_back |  |  | *돌아서던 서연이 클립보드를 어깨 높이로 가볍게 들어  |
| 35 | `hallway_13_b` | {name} | school_hallway | seyoun_back |  |  | *단정한 구두 소리를 남기며 복도 저편으로 멀어지는 서 |
| 36 | `classroom_1` | {name} | room_school | 없음 |  |  | *드르륵, 교실 앞문을 열자 왁자지껄하던 공기 위로 수 |
| 37 | `classroom_2_b` | {name} | room_school | teacher_normal |  |  | *교탁 앞에는 20대 후반쯤 되어 보이는 담임선생님이  |
| 38 | `classroom_3` | 담임 | room_school | teacher_normal |  |  | 자, 다들 주목. 오늘부터 우리 반 식구가 된 전학생이 |
| 39 | `classroom_3_b` | {name} | room_school | teacher_normal |  |  | 오늘 전학 온 {name}입니다. 잘 부탁드립니다. * |
| 40 | `classroom_5_b` | 담임 | room_school | teacher_normal |  |  | 그래, {name}. 우리 반에 온 걸 환영해. 급할  |
| 41 | `classroom_5_c` | {name} | room_school | teacher_normal |  |  | *낯선 교실 공기에 섞여 내 숨소리가 잦아드는 사이 교 |
| 42 | `classroom_dain_1` | 다인 | room_school | dain_normal |  |  | 오, 전학생! 드디어 우리 반에도 새 얼굴이 들어왔네! |
| 43 | `classroom_dain_2` | 다인 | room_school | yuna_normal |  |  | 이쪽 봐, 이쪽! *산뜻한 갈색 숏컷에 활동적인 배구부 |
| 44 | `classroom_dain_3` | 담임 | room_school | teacher_normal |  |  | 다인아, 아침부터 목소리 좀 낮추자. 그리고 교실 안에 |
| 45 | `classroom_dain_4` | 다인 | room_school | yuna_normal |  |  | 에이, 쌤도 참. 이게 세상에서 제일 편하단 말이에요! |
| 46 | `classroom_dain_5` | 다인 | room_school | yuna_normal |  |  | 네 자리는 여기야, 여기! *아이들의 웃음소리 사이로  |
| 47 | `classroom_dain_5_b` | 담임선생님 | room_school | teacher_normal |  |  | 다인아, 적어도 출석 부르는 동안만이라도 진정 좀 하자 |
| 48 | `classroom_dain_5_c` | 담임 | room_school | teacher_normal |  |  | 지금부터 그 에너지를 다 쓰면 어떡해. 아직 1교시 종 |
| 49 | `classroom_dain_5_d` | 담임선생님 | room_school | teacher_angry |  |  | *담임은 작게 고개를 저으며 출석부 다음 장을 부드럽게 |
| 50 | `classroom_yuna_1` | {name} | room_school | yuna_bored |  |  | *소란스러운 교실 풍경과 동떨어진 창가 맨 뒷자리, 봄 |
| 51 | `classroom_yuna_2` |  | 없음 | 없음 |  |  |  |
| 52 | `classroom_yuna_4` | {name} | room_school | yuna_bored |  |  | *앞줄에 앉은 학생 하나가 내 소매를 스치며 작게 속삭 |
| 53 | `classroom_seat_1` | 담임선생님 | room_school | teacher_normal |  |  | *출석부를 덮은 담임이 창가 쪽에서 한 줄 건너편 빈자 |
| 54 | `classroom_seat_2` | 다인 | room_school | yuna_normal |  |  | 오, 딱 내 옆자리네? 멀뚱히 서 있지 말고 얼른 와서 |
| 55 | `classroom_minsu_1` | {name} | room_school | minsu_normal |  |  | *가방을 내려놓고 의자를 빼려는데 앞자리에 앉아 있던  |
| 56 | `classroom_minsu_2` | 민수 | room_school | minsu_smirk |  |  | 야, 전학생. 우리 반에 온 걸 환영한다. 그리고 미리 |
| 57 | `classroom_minsu_3` | {name} | room_school | minsu_smirk |  |  | 갑자기 무슨 각오? |
| 58 | `classroom_minsu_2_b` | 민수 | room_school | minsu_normal |  |  | *옆자리의 다인을 향해 슬쩍 턱짓하며 씨익 웃는다.*  |
| 59 | `classroom_dain_talk_1` | {name} | room_school | minsu_normal |  |  | *장난스럽게 돌아앉는 앞자리 남학생의 교복 명찰에는 ' |
| 60 | `classroom_dain_talk_2` | 다인 | room_school | yuna_normal |  |  | 저 녀석 말은 신경 쓰지 마! 그보다 나 궁금한 거 하 |
| 61 | `classroom_dain_talk_3` | 다인 | room_school | yuna_normal |  |  | 야, {name}. 너 평소에 몸 움직이는 거나 운동  |
| 62 | `classroom_dain_talk_4` | {name} | room_school | yuna_normal |  |  | 운동은 왜, 갑자기? |
| 63 | `classroom_dain_talk_5` | 다인 | room_school | yuna_normal |  |  | 아니, 오늘 방과후에 리시브 연습을 좀 더 하고 싶은데 |
| 64 | `classroom_dain_talk_6` | {name} | room_school | yuna_normal |  |  | 전학생을 첫날부터 인간 볼 머신으로 쓰려고? |
| 65 | `classroom_dain_talk_7` | 다인 | room_school | yuna_normal |  |  | 에이, 설마! 그래도 기계보다는 사람이랑 호흡 맞추는  |
| 66 | `classroom_dain_talk_8` | 다인 | room_school | yuna_normal |  |  | 어때, 같이 해 볼래? *다인의 따뜻한 검지가 내 책상 |
| 67 | `classroom_yuna_note_1` | {name} | room_school | yuna_bored |  |  | *그때 뒷자리에서 반듯하게 접힌 종이쪽지 하나가 책상  |
| 68 | `classroom_yuna_note_3` | 유나 | room_school | yuna_bored |  |  | *조심스럽게 펼치자 은은한 연보라색 잉크 글씨와 모서리 |
| 69 | `classroom_yuna_note_5` | {name} | room_school | yuna_bored |  |  | *내가 고개를 들자 창가 햇살에 비치던 유나의 하얀 손 |
| 70 | `classroom_yuna_note_6` | {name} | room_school | yuna_bored |  |  | *1교시 시작을 알리는 종소리가 교실 안을 메운다. 창 |
| 71 | `lunch_start` | {name} | school_hallway | 없음 |  |  | *점심시간을 알리는 종소리와 함께 교실 공기가 들뜬다. |
| 72 | `lunch_start_4` | 서연 | school_hallway | seyoun_normal |  |  | 아까 말한 대로 옥상 올라올 거지? *계단참에서 걸음을 |
| 73 | `lunch_start_4_b` | {name} | school_hallway | dain_normal |  |  | *대답하려는 순간 옆에서 다가온 다인의 따뜻한 손바닥이 |
| 74 | `lunch_start_5` | 다인 | school_hallway | dain_normal |  |  | 야, 아직 점심 안 먹었지? 나랑 매점 뛰어가자. 빵  |
| 75 | `lunch_start_6` | 유나 | school_hallway | yuna_normal |  |  | 난 도서관 갈 건데. *내 옆을 스쳐 지나가며 가방끈을 |
| 76 | `lunch_start_7` | {name} | school_hallway | 없음 |  |  | *바람 부는 옥상과 달콤한 빵 냄새가 나는 매점, 그리 |
| 77 | `lunch_choice` | {name} | school_hallway | 없음 |  |  | *첫날의 점심시간, 누구의 발걸음을 따라갈까?* |
| 78 | `lunch_seo_1` | 서연 | top_school | seyoun_normal |  |  | *철컥, 서연이 작은 열쇠로 무거운 철문을 열자마자 4 |
| 79 | `lunch_seo_1_aff_high` | 서연 | top_school | seyoun_laugh |  |  | 이리 와서 앉아. 아까 아침 복도에서 네가 했던 농담, |
| 80 | `lunch_seo_2` | {name} | top_school | seyoun_normal |  |  | 옥상 구석 화분들도 다 네가 가꾸는 거야? *햇살 드는 |
| 81 | `lunch_seo_3` | 서연 | top_school | seyoun_normal |  |  | 응, 여긴 아무도 안 올라오는 내 전용 휴식처거든. |
| 82 | `lunch_seo_4` | {name} | top_school | seyoun_normal |  |  | 학교 옥상을 통째로 쓰다니 학생회장 특권이 꽤 대단한데 |
| 83 | `lunch_seo_5` | 서연 | top_school | seyoun_normal |  |  | 원래는 다른 사람한테 절대 안 열어 주는 곳이야. *접 |
| 84 | `lunch_seo_6` | {name} | top_school | seyoun_normal |  |  | 전학 첫날부터 특별 대우라니, 나중에 무슨 일을 시키려 |
| 85 | `lunch_seo_6_b` | 서연 | top_school | seyoun_laugh |  |  | *구두 끝으로 의자 다리를 살짝 밀어 내 쪽에 간격을  |
| 86 | `lunch_seo_8` | 서연 | top_school | seyoun_laugh |  |  | *무릎 위에 올려 둔 가방에서 꼭 2인분은 될 법한 파 |
| 87 | `lunch_seo_9` | {name} | top_school | seyoun_normal |  |  | 잠깐, 이거 아무리 봐도 2인분인데? |
| 88 | `lunch_seo_10` | 서연 | top_school | seyoun_normal |  |  | 학생회 회의가 길어지면 제때 밥 챙겨 먹기 힘들 때가  |
| 89 | `lunch_seo_11` | {name} | top_school | seyoun_normal |  |  | 노릇하게 말아낸 계란말이에 문어 모양 소시지, 주먹밥까 |
| 90 | `lunch_seo_13` | {name} | top_school | seyoun_normal |  |  | 이거 설마 아침에 네가 직접 만든 거야? |
| 91 | `lunch_seo_14` | 서연 | top_school | seyoun_normal |  |  | 학생회장이 자기 점심 도시락 하나 못 챙기면 체면이 안 |
| 92 | `lunch_seo_15` | {name} | top_school | seyoun_normal |  |  | 체면 얘기 말고 내 몫까지 일부러 싸 온 건지 물어본  |
| 93 | `lunch_seo_16` | 서연 | top_school | seyoun_normal |  |  | *대답 대신 나무젓가락 한 벌을 내 손에 쥐여 주며 시 |
| 94 | `lunch_seo_17` | 서연 | top_school | seyoun_normal |  |  | 그럼 내가 먼저 맛본다. *난간 너머로 햇살 가득한 운 |
| 95 | `lunch_seo_19` | 서연 | top_school | seyoun_normal |  |  | 오전 내내 있어 보니까 어때, 우리 학교? |
| 96 | `lunch_seo_20` | {name} | top_school | seyoun_normal |  |  | 일단 점심 도시락이 엄청 맛있어. |
| 97 | `lunch_seo_21` | 서연 | top_school | seyoun_laugh |  |  | *서연의 젓가락 끝이 도시락 칸막이를 톡 건드리며 작게 |
| 98 | `lunch_seo_22` | 서연 | top_school | seyoun_laugh |  |  | *잠시 망설이던 서연이 가장 모양이 예쁜 계란말이 한  |
| 99 | `lunch_seo_23` | 서연 | top_school | seyoun_normal |  |  | 자, 이것도 먹어 봐. 딱 한 입만 주는 거야. |
| 100 | `lunch_seo_choice` | 서연 | top_school | seyoun_normal |  |  | *젓가락 끝의 노란 계란말이가 내 입술 앞 한 뼘 거리 |
| 101 | `lunch_seo_c1_1` | {name} | top_school | seyoun_normal |  |  | *몸을 살짝 기울여 서연이 내민 젓가락 끝에서 폭신하고 |
| 102 | `lunch_seo_c1_2` | {name} | top_school | seyoun_normal |  |  | 진짜 맛있다. 간도 딱 맞는데. |
| 103 | `lunch_seo_c1_2_b` | 서연 | top_school | seyoun_normal |  |  | 급하게 삼키지 말고 천천히 좀 씹어. *물병을 들어 자 |
| 104 | `lunch_seo_c1_3` | 서연 | top_school | seyoun_shy |  |  | 내가 만든 건데 그 정도 맛은 나야지. |
| 105 | `lunch_seo_c1_3_b` | {name} | top_school | seyoun_shy |  |  | *모서리가 반쯤 접힌 물병 라벨을 만지작거리던 서연이  |
| 106 | `lunch_seo_after` | {name} | top_school | seyoun_normal |  |  | *불어오는 바람을 타고 운동장 쪽에서 공 차는 소리와  |
| 107 | `lunch_seo_after_2` | 서연 | top_school | seyoun_normal |  |  | 내일도 점심시간에 딴 약속 잡지 말고 비워 둬. |
| 108 | `lunch_seo_after_3` | {name} | top_school | seyoun_normal |  |  | 내일도 회장님 전용 옥상에 초대해 주는 거야? |
| 109 | `lunch_seo_after_4` | 서연 | top_school | seyoun_normal |  |  | 거창하게 초대라기보단 그냥 같이 밥 먹자는 뜻이야. 종 |
| 110 | `lunch_seo_after_5` | 서연 | top_school | seyoun_normal |  |  | *도시락 보자기 매듭을 단정하게 묶어 쥐며 내 쪽을 흘 |
| 111 | `lunch_seo_after_7` |  | 없음 | 없음 |  |  |  |
| 112 | `lunch_seo_freetalk` | 서연 | top_school | seyoun_normal |  |  | *도시락 통을 가방에 넣고 접이식 의자를 내 쪽으로 반 |
| 113 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *5교시 수업을 알리는 차임벨이 울려 퍼지며 짧고도 설 |
| 114 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *붉은 노을이 스며드는 방과후 복도. 주머니 속에서 진 |
| 115 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 116 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 그 가벼운 마지막 한 줄에 시선이  |
| 117 | `after_kakao_5` |  | 없음 | 없음 |  | 🌅 |  |
| 118 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *한참을 망설이다 조용히 단체방 나가기를 누른다. 텅  |
| 119 | `after1_jealousy_seo_1` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 너 아까 점심때 어디로 새 버렸어? 매점 가서 아 |
| 120 | `after1_jealousy_seo_2` | {name} | school_hallway | dain_normal |  | 🌅 | *입력창에 적어 넣던 '서연이랑'이라는 네 글자를 엄지 |
| 121 | `after1_jealousy_seo_3` | 다인 | school_hallway | dain_pout |  | 🌅 | 계단 쪽에서 학생회장이랑 둘이 내려오는 거 다 봤거든. |
| 122 | `after1_jealousy_seo_choice` | 다인 | school_hallway | dain_pout |  | 🌅 | *다인의 연이은 메시지에 휴대폰을 쥔 손끝에 저도 모르 |
| 123 | `after1_jealousy_seo_honest` | {name} | school_hallway | dain_pout |  | 🌅 | 응, 아침에 학교 안내해 주면서 학생회장이 옥상으로 불 |
| 124 | `after1_jealousy_seo_honest_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 그랬어? 치, 먼저 간다고 한마디라도 해주지 그랬냐. |
| 125 | `after1_jealousy_seo_yuna` | 유나 | school_hallway | dain_normal |  | 🌅 | *가방 옆주머니에 꽂혀 있던 접힌 쪽지를 펼친다. 연보 |
| 126 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *휴대폰을 주머니에 넣고 석양이 길게 드리운 복도를 따 |
| 127 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도 모퉁이를 돌려는데 등 뒤에서 운동화 바닥이 마룻 |
| 128 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 거기 앞 조심해! |
| 129 | `after_miss_dain_3` | 다인 | school_hallway | dain_normal |  | 🌅 | 휴, 아슬아슬하게 비켜 줬네! *내 어깨를 스치며 바람 |
| 130 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 방금 반사신경 꽤 괜찮았는데? 역시 운동 좀 해  |
| 131 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 하마터면 부딪힐 뻔했잖아. 복도에서 웬 전력질주야? |
| 132 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 배구부 집합 시간 늦었거든! 지금 당장 체육관 뛰어가야 |
| 133 | `after_miss_dain_6_b` | {name} | school_hallway | dain_pain |  | 🌅 | *돌아서서 두어 걸음 내딛던 다인이 순간 걸음을 멈추고 |
| 134 | `after_miss_dain_7` | 다인 | school_hallway | dain_laugh |  | 🌅 | 참, 내 이름 다인이야! 내일 와서 이름 까먹으면 안  |
| 135 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞 복도를 지나는데 붉은 눈동자의 여학생이 소 |
| 136 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 방금 책 사이에서 이거 떨어졌어. |
| 137 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *바닥에 내려앉은 낡은 책갈피를 조심스레 주워 건넨다. |
| 138 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | 다행이다, 모서리 안 구겨졌네. *하얀 손가락으로 책갈 |
| 139 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 주워 줘서 고마워. |
| 140 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *소중한 것을 감추듯 책갈피를 책등 깊숙이 끼워 넣고는 |
| 141 | `after_miss_yuna_4` |  | 없음 | 없음 |  | 🌅 |  |
| 142 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교를 알리는 안내 방송이 끝난 뒤 노을빛만 남은 복 |
| 143 | `after_hidden_nurse_intro` | {name} | school_hallway | 없음 |  | 🌅 | *갑자기 핑 도는 어지럼증에 차가운 복도 벽을 짚고 멈 |
| 144 | `after_hidden_nurse_choice` | {name} | school_hallway | 없음 |  | 🌅 | *아침부터 낯선 시선과 소음 속에 부대낀 피로가 한꺼번 |
| 145 | `after_hidden_nurse_intro_b` | {name} | school_hallway | 없음 |  | 🌅 | *가쁜 숨을 한 번 골라 쉬고 서늘한 금속 문손잡이를  |
| 146 | `after_nurse_d1_aff` |  | nurse_room | 없음 |  | 🌅 |  |
| 147 | `after_nurse_enter_1` | {name} | nurse_room | nurse_normal |  | 🌅 | *문을 열자 알싸한 소독약 냄새 위로 은은하고 달콤한  |
| 148 | `after_nurse_enter_2` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 어라, 방과후에 늦은 손님이네. |
| 149 | `after_nurse_enter_2_b` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건선생님이 새 진료 기록지 한 장을 끌어당겨 가느다 |
| 150 | `after_nurse_enter_3` | {name} | nurse_room | nurse_normal |  | 🌅 | 갑자기 속이 좀 울렁거리고 어지러워서요. |
| 151 | `after_nurse_enter_4` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 오늘 온 전학생 맞지? 첫날부터 보건실 찾을 정도면 하 |
| 152 | `after_nurse_enter_4_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 제가 전학생인 건 어떻게 바로 아셨어요? |
| 153 | `after_nurse_enter_4_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 일단 처음 보는 잘생긴 얼굴이기도 하고 교복 재킷에 접 |
| 154 | `after_nurse_enter_4_d` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *여유로운 눈웃음을 지으며 전자체온계를 건네더니 책상  |
| 155 | `after_nurse_enter_5` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *체온계 숫자를 확인한 뒤 내 소매를 걷어 올리고 서늘 |
| 156 | `after_nurse_enter_6` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 다행히 열은 없는데 혈압이 평소보다 살짝 떨어져 있네. |
| 157 | `after_nurse_enter_6_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 사실 오늘 아침에 긴장해서 밥을 거의 못 먹고 나왔거든 |
| 158 | `after_nurse_enter_7` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 빈속에 온종일 신경 썼으니 어지러울 수밖에. 자, 저쪽 |
| 159 | `after_nurse_enter_7_b` | {name} | nurse_room | nurse_normal |  | 🌅 | *안쪽 침대에 몸을 뉘자 빳빳하게 풀 먹인 하얀 시트가 |
| 160 | `after_nurse_enter_7_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *선생님이 침대 둘레의 커튼을 반쯤 끌어 노을빛을 가려 |
| 161 | `after_nurse_enter_7_d` | {name} | nurse_room | nurse_normal |  | 🌅 | 그냥 미지근한 물 한 잔이면 충분해요. |
| 162 | `after_nurse_enter_choice` | {name} | nurse_room | nurse_normal |  | 🌅 | *반쯤 닫힌 하얀 커튼 너머로 기록지를 작성하는 보건선 |
| 163 | `after_nurse_enter_choice_a` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 어라, 남 걱정할 처지가 아닌데 눈치까지 빠른 환자네. |
| 164 | `after_nurse_enter_8` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 무리해서 말 길게 이어 갈 필요 없어. 현기증 날 때는 |
| 165 | `after_nurse_enter_8_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 이렇게 잠깐 누워 있으면 금방 가라앉을까요? |
| 166 | `after_nurse_enter_8_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *커튼 틈으로 다가와 종이컵에 담긴 물을 건네며 내 손 |
| 167 | `after_nurse_enter_8_d` | {name} | nurse_room | nurse_normal |  | 🌅 | *물을 한 모금 머금고 고요한 보건실 안을 둘러본다.  |
| 168 | `after_nurse_enter_9_b` | {name} | nurse_room | nurse_normal |  | 🌅 | 창가에 있는 저 초록색 화분도 선생님이 직접 키우시는  |
| 169 | `after_nurse_enter_9_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 응, 로즈마리야. 내가 예전에 대학병원에서 일할 때부터 |
| 170 | `after_nurse_enter_9_d` | {name} | nurse_room | nurse_normal |  | 🌅 | 학교 오시기 전엔 큰 병원에 계셨어요? |
| 171 | `after_nurse_enter_9_e` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *선생님의 가느다란 손가락이 책상 서랍 손잡이를 한 번 |
| 172 | `after_nurse_enter_10` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 다 지나간 옛날얘기야. 난 지금 이 학교가 훨씬 좋아. |
| 173 | `after_nurse_enter_10_b` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 자, 약속한 10분 지났네. 이제 속은 좀 어때? *진 |
| 174 | `after_nurse_enter_10_c` | {name} | nurse_room | nurse_normal |  | 🌅 | 덕분에 많이 가라앉았어요. 감사합니다. |
| 175 | `after_nurse_enter_11` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 다행이네. 앞으로도 어지러우면 언제든 찾아와, 보건실  |
| 176 | `after_nurse_enter_11_b` | {name} | nurse_room | nurse_angry |  | 🌅 | 환자를 혼내기도 하세요? |
| 177 | `after_nurse_enter_11_c` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *진료 기록지 위에서 볼펜을 데구루루 굴리며 눈을 가늘 |
| 178 | `after_nurse_enter_11_d` | 보건선생님 | nurse_room | nurse_angry |  | 🌅 | *빈 종이컵을 받아 책상 위에 내려놓자 나지막하고 둔탁 |
| 179 | `after_nurse_enter_11_e` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *아까 내가 건넸던 말이 떠올랐는지 가운 깃 너머로 하 |
| 180 | `after_nurse_enter_11_f` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 참, 아까 내가 더 피곤해 보인다고 했었지? 전학생 눈 |
| 181 | `after_nurse_enter_11_g` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *진료 기록지 끝 칸에 반듯한 글씨로 처치 시간을 적고 |
| 182 | `after_nurse_enter_11_j` |  | 없음 | 없음 |  | 🌅 |  |
| 183 | `after_nurse_enter_11_k` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 아, 맞다 전학생. |
| 184 | `after_nurse_enter_11_l` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 차트에 적어야 하는데 네 이름이 뭐야? |
| 185 | `after_nurse_enter_11_m` | {name} | nurse_room | nurse_normal |  | 🌅 | 3학년 2반 {name}입니다. |
| 186 | `after_nurse_enter_12` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 차트에 잘 적어 둘게. 가다가 또 현기증 나면 복도에서 |
| 187 | `after_nurse_enter_12_b` | {name} | nurse_room | nurse_normal |  | 🌅 | *침대에서 내려서려는데 보건선생님이 벽시계를 한 번 확 |
| 188 | `after_nurse_freetalk` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *체온계를 케이스에 넣고 진료 기록의 시간을 확인한다. |
| 189 | `night_start` | {name} | room_my | 없음 |  |  | *집으로 돌아와 아직 낯선 새 교복을 옷걸이에 걸어 두 |
| 190 | `night_start_3` | {name} | room_my | 없음 |  |  | *고요한 방 안, 머리맡에 둔 휴대폰이 짧게 진동하며  |
| 191 | `night_msg_seo_1` | 서연 | room_my | seyoun_normal | 0.35 |  | 오늘 점심때 올라왔던 옥상, 어땠어? |
| 192 | `night_msg_seo_2` | {name} | room_my | seyoun_normal | 0.35 |  | *바람도 시원하고 도시락도 맛있었어* |
| 193 | `night_msg_seo_3` | 서연 | room_my | seyoun_normal | 0.35 |  | 다행이네. 내일은 마실 음료도 시원한 걸로 챙겨 둘게 |
| 194 | `night_msg_seo_4` | 서연 | room_my | seyoun_normal | 0.35 |  | 전학생 특별 서비스야 |
| 195 | `night_msg_seo_5` | {name} | room_my | seyoun_normal | 0.35 |  | *망설이다 덧붙인 듯 한 줄 아래 따로 도착한 '전학생 |
| 196 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 대화창을 닫으려는데 상단 알림 바에 학교 앱  |
| 197 | `night_hidden_nurse_1` | {name} | room_my | nurse_normal | 0.35 |  | *학교 건강 관리 앱에 새 알림이 떠 있다. '보건실  |
| 198 | `night_hidden_nurse_2` | {name} | room_my | nurse_normal | 0.35 |  | *보건선생님의 나긋한 목소리가 귓가에 들리는 듯해 일어 |
| 199 | `night_late_transition` | {name} | room_my | 없음 |  |  | *불을 끄고 막 눈을 감으려는데 정적을 깨고 휴대폰이  |
| 200 | `night_late_branch` | {name} | room_my | 없음 |  |  | *어두운 방 안, 손에 쥔 액정 화면이 하얗게 빛을 낸 |
| 201 | `night_seo_late_1` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 아침에도 늦지 말고 학교에서 봐. |
| 202 | `night_seo_late_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 제시간에 안 보이면 내가 직접 찾으러 갈 거야 |
| 203 | `night_seo_late_3` | {name} | room_my | seyoun_normal | 0.35 |  | *짧은 인사를 남기고 휴대폰을 머리맡에 내려놓는다. 꺼 |
| 204 | `night_end_1` | {name} | room_my | 없음 |  |  | *휴대폰을 내려놓고 어두운 천장을 올려다본다. 옷걸이에 |
| 205 | `night_end_3` | {name} | room_my | 없음 |  |  | *연락처에 나란히 저장된 새로운 이름들을 한 번 더 눈 |
| | **Day 2** | | | | | | |
| 206 | `morning2_start` | {name} | room_school | 없음 |  |  | *전학 온 지 이틀째 아침. 교복 소매에 남았던 빳빳한 |
| 207 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 208 | `morning2_greet_seo_1` |  | 없음 | 없음 |  |  |  |
| 209 | `morning2_greet_seo_1_roof` | 서연 | room_school | yuna_normal |  |  | 어제 옥상에서 나랑 한 약속, 잊지 않고 그대로 비워  |
| 210 | `morning2_greet_seo_2` | 서연 | room_school | yuna_normal |  |  | 오늘은 꽤 일찍 나왔네. 이제 교실 찾아오는 길은 안  |
| 211 | `morning2_greet_seo_others_2` | {name} | room_school | yuna_normal |  |  | *서연이 긴 손가락으로 클립보드 뒷면을 톡 두드리며 내 |
| 212 | `morning2_yuna_seen` | 유나 | room_school | yuna_normal |  |  | ...너 혹시 전학 오기 전에도 이 학교에 와 본 적  |
| 213 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *가방을 걸고 자리에 앉으려는데 책상 한가운데에 정갈하 |
| 214 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 215 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가던 서연이 열린 교실 앞문 틈으로 고개를 |
| 216 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 바쁜 학생회장이 아침부터 남의 교실 앞까지 직접 인사하 |
| 217 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 교무실에 서류 갖다주러 가는 길에 잠깐 멈춘 거야. 그 |
| 218 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | 얼굴 확인했으니까 이제 간다. 아침 조회 늦지 말고.  |
| 219 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연의 긴 머리카락이 사라진 복도 쪽을 바라보고 있는 |
| 220 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 온 지 이틀 만에 학생회장님이 직접 문 앞까 |
| 221 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 그건 그냥 네가 인기가 없는 게 아닐까. |
| 222 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 뼈 때리지 마라, 사실이긴 한데 지금 그게 핵심이 아니 |
| 223 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *복도 유리창 너머로 클립보드를 가슴에 안은 서연이 귓 |
| 224 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 오호, 도도한 회장님도 우리 전학생한테 꽤 관심 있나  |
| 225 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | 방금 '우리' 전학생이라고 했어? |
| 226 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 당연하지, 같은 반에다 바로 옆자리 짝꿍이잖아! 그 정 |
| 227 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *1교시가 끝나고 시끌벅적한 교실 열기를 식히려 복도  |
| 228 | `morning2_seo_dust_1` | 서연 | school_hallway | seyoun_normal |  |  | 너 1교시 수업 듣는 동안 대체 뭘 한 거야. *쉬는  |
| 229 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 움직이지 말고 잠깐 가만히 있어 봐. |
| 230 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *한 걸음 다가선 서연의 하얀 손끝이 내 교복 어깨에  |
| 231 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 어깨에 분필 가루 같은 게 묻어 있었어. |
| 232 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | 말도 없이 갑자기 손이 훅 들어와서 놀랐잖아. *괜히  |
| 233 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 뭘 그렇게까지 놀라? 그냥 먼지 털어 준 건데. |
| 234 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *분명 먼지는 다 털어 냈는데도 서연의 손끝이 닿았던  |
| 235 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 방금 그거 뭐야? 학생회장이 네 어깨 만진 거 맞 |
| 236 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 만진 게 아니라 어깨에 묻은 먼지 털어 준 거야. |
| 237 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 수상한데, 거기 진짜로 먼지가 붙어 있긴 했어? |
| 238 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | 진짜로 먼지 털어 준 것뿐이라니까. 왜 눈을 그렇게 뜨 |
| 239 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *아침에 받은 유나의 쪽지를 손안에 쥔다. 수업 사이마 |
| 240 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *이틀째 점심시간, 누구의 곁으로 향할까.* |
| 241 | `lunch2_yuna_1` | {name} | annex_exhibit_hallway | yuna_normal |  |  | *인적이 끊긴 낡은 도서관 별관. 서늘한 그늘이 내려앉 |
| 242 | `lunch2_yuna_intro_check` |  | annex_exhibit_hallway | yuna_normal |  |  |  |
| 243 | `lunch2_yuna_3_seo_aff` |  | annex_exhibit_hallway | 없음 |  |  |  |
| 244 | `lunch2_yuna_3_cool` | 유나 | annex_exhibit_hallway | yuna_bored |  |  | *말없이 책갈피만 끼워 넣고 가방을 치워 옆자리를 비운 |
| 245 | `lunch2_yuna_cool_cont` | {name} | annex_exhibit_hallway | yuna_bored |  |  | *고요한 방 안에서 내 책장만 한 장 넘어간다. 유나는 |
| 246 | `lunch2_yuna_end` | {name} | yuna_hideout_day.webp | yuna_normal |  |  | *별관 문을 닫기 전 마지막으로 돌아보자 유나는 아까  |
| 247 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *종례가 끝난 방과 후 교실. 쉬는 시간마다 꺼냈던 휴 |
| 248 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 당장 체육관으로 튀어 와! 오늘은 진짜 제대로 된 내기 |
| 249 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 방과후에 학생회실로 잠깐 와 줄 수 있어? 오늘따라 일 |
| 250 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게선 따로 온 메시지가 없다. 대신 주머니 속  |
| 251 | `after2_nurse_transition` | {name} | school_hallway | 없음 |  | 🌅 | *아까 5교시 체육 시간 뒤에 붙였던 팔꿈치 밴드 모서 |
| 252 | `hidden_nurse_d2_1` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건실에 들러 소매를 걷어 올리자 밴드 한쪽 끝이 반 |
| 253 | `hidden_nurse_d2_2` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 어라, 붙인 지 반나절도 안 돼서 밴드가 반품 들어왔네 |
| 254 | `hidden_nurse_d2_3` | {name} | nurse_room | nurse_normal |  | 🌅 | 움직이다 보니까 밴드 끝이 자꾸 셔츠 소매에 걸려서요. |
| 255 | `hidden_nurse_d2_4` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 팔 이쪽으로 내밀어 봐, 어디 보자. |
| 256 | `hidden_nurse_d2_5` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *선생님의 서늘한 손끝이 들뜬 밴드를 조심스레 떼어 내 |
| 257 | `hidden_nurse_d2_choice1` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건선생님이 내 손목을 감싸 쥐고 팔꿈치를 천천히 접 |
| 258 | `hidden_nurse_d2_choice1_a` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 응, 늘 움직이는 관절 부위는 피부 결을 따라 붙여야  |
| 259 | `hidden_nurse_d2_6` | {name} | nurse_room | nurse_normal |  | 🌅 | *보건선생님이 새 밴드 포장지를 휴지통에 버린다. 아까 |
| 260 | `hidden_nurse_d2_7` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *서랍 쪽으로 향한 내 시선을 눈치채고 가느다란 손바닥 |
| 261 | `hidden_nurse_d2_choice2` | {name} | nurse_room | nurse_shy |  | 🌅 | *서랍 손잡이를 감싼 선생님의 하얀 손마디에 미세한 힘 |
| 262 | `hidden_nurse_d2_choice2_a` | 보건선생님 | nurse_room | nurse_shy |  | 🌅 | *닫힌 서랍 앞면을 검지로 톡톡 두드린다.* 아까 코코 |
| 263 | `hidden_nurse_d2_8` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | 자, 훨씬 단단하게 붙였어. 오늘 밤엔 진짜로 물 닿지 |
| 264 | `hidden_nurse_d2_9` |  | 없음 | 없음 |  | 🌅 |  |
| 265 | `hidden_nurse_d2_freetalk` | 보건선생님 | nurse_room | nurse_normal |  | 🌅 | *사용한 소독솜을 버리고 밴드 가장자리를 한 번 눌러  |
| 266 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *석양이 물들기 시작하는 방과후, 어디로 발걸음을 옮길 |
| 267 | `after2_dain_1` | {name} | gym | dain_active |  | 🌅 | *체육관 문을 열자 마룻바닥 울리는 소리와 함께 배구  |
| 268 | `after2_dain_tone` |  | gym | 없음 |  | 🌅 |  |
| 269 | `after2_dain_cool_1` | 다인 | gym | dain_normal |  | 🌅 | 왔으면 바닥에 흩어진 공부터 주워 줘. 잡담은 연습 끝 |
| 270 | `after2_dain_cool_cont` | {name} | gym | dain_normal |  | 🌅 | *코트 구석의 공들을 주워 바구니에 담는다. 다인은 먼 |
| 271 | `after2_dain_neg_leave` | {name} | snack_shop.webp | 없음 |  | 🌅 | *무거운 공기가 내려앉은 체육관 문을 나와 혼자 매점  |
| 272 | `after2_dain_rival_seo_check` |  | snack_shop.webp | 없음 |  | 🌅 |  |
| 273 | `after2_dain_rival_seo_mid` | {name} | snack_shop.webp | seyoun_normal |  | 🌅 | *가게 앞을 지나가던 서연이 창문 너머로 우리 테이블을 |
| 274 | `after2_dain_rival_yuna_check` |  | snack_shop.webp | 없음 |  | 🌅 |  |
| 275 | `after2_dain_rival_yuna_low` | {name} | snack_shop.webp | yuna_normal |  | 🌅 | *유나가 유리창 너머로 짧게 눈인사만 건네고는 도서관  |
| 276 | `after2_group_dain_companion` | 다인 | gym | 없음 |  | 🌅 | *체육관에서 공 수레를 잡는다.* 창고 쪽은 행사 자료 |
| 277 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *미묘한 여운이 감도는 대화를 마치고 가방을 고쳐 멘  |
| 278 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 279 | `minsu_warn_1` | {name} | school | 없음 |  | 🌅 | *노을이 지는 하교길. 교문을 막 나서는데 등 뒤에서  |
| 280 | `minsu_warn_1_b` | 민수 | school | minsu_normal |  | 🌅 | *내 보폭에 맞춰 옆에 나란히 서더니 주머니에 두 손을 |
| 281 | `minsu_warn_2` | 민수 | school | minsu_smirk |  | 🌅 | 야, 전학생. |
| 282 | `minsu_warn_3` | {name} | school | minsu_smirk |  | 🌅 | 응? 왜 불러? |
| 283 | `minsu_warn_4` | 민수 | school | minsu_smirk |  | 🌅 | 너 요즘 학교 다니는 거 꽤 재밌냐? |
| 284 | `minsu_warn_4_b` | {name} | school | minsu_normal |  | 🌅 | *민수는 내 쪽을 보지 않고 교문 건너편 깜빡이는 횡단 |
| 285 | `minsu_warn_5` | {name} | school | minsu_smirk |  | 🌅 | 갑자기 그게 무슨 소리야? |
| 286 | `minsu_warn_6` | 민수 | school | minsu_smirk |  | 🌅 | 점심엔 한 명, 방과후엔 또 한 명. 넌 재밌겠지. — |
| 287 | `night2_start` | {name} | room_my | 없음 |  |  | *따뜻한 물로 샤워를 마치고 젖은 머리를 털며 침대에  |
| 288 | `night2_msg_1` |  | 없음 | 없음 |  |  |  |
| 289 | `night2_msg_generic` | 다인 | room_my | dain_normal | 0.35 |  | 야 내일 아침에 교실에서 보자 늦지 마! |
| 290 | `night2_msg_generic_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 점심엔 옥상 열어 놓을게 |
| 291 | `night2_msg_generic_3` |  | 없음 | 없음 |  |  |  |
| 292 | `night2_msg_generic_3_first` | 유나 | room_my | yuna_normal | 0.35 |  | 넌 평소에 어떤 책 주로 읽어? |
| 293 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *나란히 도착한 대화방 세 개를 번갈아 바라본다. 누구 |
| 294 | `night2_choice` | {name} | room_my | 없음 |  |  | *세 개의 말풍선 중 누구에게 가장 먼저 답장을 보낼까 |
| 295 | `night2_reply_dain_1` |  | 없음 | 없음 |  |  |  |
| 296 | `night2_reply_dain_1_first` | {name} | room_my | dain_normal | 0.35 |  | 내일 학교 앞에서 떡볶이 먹을래? 난 매운 건 좀 약한 |
| 297 | `night2_reply_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | 어라 너 설마 매운 거 잘 못 먹는 체질이야? |
| 298 | `night2_reply_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | 그럼 내일은 너 맞춰서 제일 순한 맛으로 시켜 줄게. |
| 299 | `night2_reply_dain_4` | 다인 | room_my | dain_normal | 0.35 |  | 아 근데 솔직히 안 매운 건 떡볶이라고 부르면 안 되지 |
| 300 | `night2_reply_dain_5` | {name} | room_my | dain_normal | 0.35 |  | *오늘 밤에도 다인다운 경쾌한 말풍선이 세 줄 연속으로 |
| 301 | `night2_reply_dain_react_default` | 다인 | room_my | dain_normal | 0.35 |  | ㅋㅋ 오케이 알겠어. 오늘 푹 자고 굿나잇! |
| 302 | `night2_dain_freetalk` | 다인 | room_my | dain_normal | 0.35 | 🌙 | 잠깐, 진짜 자기 전에. 오늘 제일 재밌었던 건 뭐였어 |
| 303 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 창을 정리하려는데 상단 알림 목록 사이에 학교 |
| 304 | `night2_hidden_nurse_1` | {name} | room_my | nurse_normal | 0.35 |  | *건강 관리 앱 알림이 떠 있다. '보건실 기록: 전학 |
| 305 | `night2_hidden_nurse_2` | {name} | room_my | nurse_normal | 0.35 |  | *이불 위에서 팔꿈치를 천천히 한 번 굽혀 본다. 선생 |
| 306 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 마치고 길게 숨을 내쉬며 베개 옆으로 휴대폰을 |
| 307 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *남은 두 사람에게도 답장을 보내려다 손가락이 굳는다. |
| 308 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *사진첩 스크롤을 끝까지 내리자 나타난 3개월 전 봄  |
| 309 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *차마 전송 버튼을 누르지 못했던 문장들이 휴대폰 메모 |
| 310 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 임시 저장 메모가 마지막 문장이다. 그 아래 |
| 311 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *떨리는 엄지손가락을 사진 아래 휴지통 삭제 아이콘 위 |
| 312 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *다시 켠 메신저 목록에는 아직 내가 답하지 못한 두  |
| 313 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *방금 닫았던 소정이의 사진을 한 번 더 열어 본다.  |
| 314 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *가슴 한구석이 묵직하게 내려앉아 끝내 나머지 두 개의 |
| 315 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면 위로 세 사람의 이름이 나란히 쌓여 있다.  |
| 316 | `night2_end_2_b` |  | 없음 | 없음 |  |  |  |
| 317 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *액정 불빛이 완전히 꺼진 뒤에도 미지근한 열기가 남은 |
| 318 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *잠이 오지 않아 부엌으로 나와 불을 켠다. 내일 싸  |
| 319 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *서툰 손길로 부쳐 낸 계란말이와 소시지, 김과 밥을  |
| | **Day 3** | | | | | | |
| 320 | `morning3_start` | {name} | school | 없음 |  |  | *전학 사흘째, 금요일 아침. 밤늦도록 깜빡이는 메시지 |
| 321 | `morning3_start_2` | {name} | school | 없음 |  |  | *어깨에 멘 가방끈을 꽉 쥐고 숨이 턱 끝까지 차오르도 |
| 322 | `hidden_nurse_d3_check` | {name} | room_school | 없음 |  |  | *쉬는 시간이 끝나 가고 복도 끝에서 발소리가 분주해진 |
| 323 | `hidden_nurse_d3_1` | {name} | nurse_room | nurse_normal |  |  | *다음 쉬는 시간, 무거운 발걸음으로 보건실 문을 연다 |
| 324 | `hidden_nurse_d3_1_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *차트를 정리하던 보건선생님이 고개를 들고 가운 자락을 |
| 325 | `hidden_nurse_d3_1_c` | {name} | nurse_room | nurse_normal |  |  | 몸이 다쳐서 온 건 아닌데요. |
| 326 | `hidden_nurse_d3_1_d` | 보건선생님 | nurse_room | nurse_normal |  |  | *선생님이 내 쪽으로 반 걸음 다가오며 눈썹을 살짝 올 |
| 327 | `hidden_nurse_d3_1_e` | {name} | nurse_room | nurse_normal |  |  | 교실 공기가 좀 숨 막혀서요. 잠깐만 쉬었다 가고 싶습 |
| 328 | `hidden_nurse_d3_2` | 보건선생님 | nurse_room | nurse_normal |  |  | 열이 나는 건 아니고? 얼굴빛이 영 가라앉아 있는데. |
| 329 | `hidden_nurse_d3_3` | {name} | nurse_room | nurse_normal |  |  | 조금만 조용히 숨 돌리고 싶어서요. 사람 관계가 자꾸  |
| 330 | `hidden_nurse_d3_3_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 들고 있던 머그컵을 책상 위에 소리 없이 |
| 331 | `hidden_nurse_d3_3_c` |  | 없음 | 없음 |  |  |  |
| 332 | `hidden_nurse_d3_3_d` |  | 없음 | 없음 |  |  |  |
| 333 | `hidden_nurse_d3_4` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님은 침대 쪽 커튼을 반쯤 치고 따뜻한 물이  |
| 334 | `hidden_nurse_d3_5_b` |  | 없음 | 없음 |  |  |  |
| 335 | `hidden_nurse_d3_5_c` |  | 없음 | 없음 |  |  |  |
| 336 | `hidden_nurse_d3_5_d` | {name} | nurse_room | nurse_normal |  |  | *컵을 건네는 보건선생님의 따뜻한 손끝이 내 손등을 스 |
| 337 | `hidden_nurse_d3_5_e` | {name} | nurse_room | nurse_normal |  |  | 같은 반 애들한테는 꺼내기 어려운 이야기들이 자꾸 쌓여 |
| 338 | `hidden_nurse_d3_5_f` |  | 없음 | 없음 |  |  |  |
| 339 | `hidden_nurse_d3_5_g` | {name} | nurse_room | nurse_normal |  |  | 누군가를 상처 주거나 실망시킬까 봐, 정작 해야 할 대 |
| 340 | `hidden_nurse_d3_5_h` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 자기 몫의 종이컵을 책상 모서리에 반듯하 |
| 341 | `hidden_nurse_d3_5_i` | 보건선생님 | nurse_room | nurse_normal |  |  | 듣자 하니 그거, 연애 상담 같은데? |
| 342 | `hidden_nurse_d3_5_j` | {name} | nurse_room | nurse_normal |  |  | 아, 꼭 그런 거창한 건 아니고요. |
| 343 | `hidden_nurse_d3_5_k` | 보건선생님 | nurse_room | nurse_normal |  |  | *선생님이 작게 소리 내어 웃는다.* 아니라고 잡아떼기 |
| 344 | `hidden_nurse_d3_5_m` | 보건선생님 | nurse_room | nurse_normal |  |  | 이게 정식 보건 업무에 들어가는진 모르겠지만 오늘만 특 |
| 345 | `hidden_nurse_d3_5_n` | {name} | nurse_room | nurse_normal |  |  | 선생님도 주변 사람들을 다 챙기려다가 도저히 감당이 안 |
| 346 | `hidden_nurse_d3_5_o` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님의 속눈썹이 파르르 떨리며 창밖으로 시선이  |
| 347 | `hidden_nurse_d3_5_p` | 보건선생님 | nurse_room | nurse_normal |  |  | 있었지. 학교로 오기 전, 대학병원 병동에서 일할 때. |
| 348 | `hidden_nurse_d3_5_q` | {name} | nurse_room | nurse_normal |  |  | 대학병원에서 근무하셨어요? |
| 349 | `hidden_nurse_d3_choice1` | {name} | nurse_room | nurse_normal |  |  | *가운 주머니에 손을 넣는 선생님의 옆모습이 유난히 고 |
| 350 | `hidden_nurse_d3_choice1_a` | 보건선생님 | nurse_room | nurse_normal |  |  | 너한테는 한 번쯤 말해도 괜찮을 것 같아. 나 스스로도 |
| 351 | `hidden_nurse_d3_6` | 보건선생님 | nurse_room | nurse_normal |  |  | 대학병원 병동에선 호출벨이 사방에서 동시에 울리면 어느 |
| 352 | `hidden_nurse_d3_6_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *선생님이 물컵을 내려놓자 유리판 위로 둥근 물기 자국 |
| 353 | `hidden_nurse_d3_6_c` | 보건선생님 | nurse_room | nurse_sad |  |  | 모두에게 좋은 간호사이고 싶었는데 그 욕심 때문에 나  |
| 354 | `hidden_nurse_d3_6_d` | {name} | nurse_room | nurse_sad |  |  | 학교로 옮기시기 전에 그 병원에서 결정적인 일이 있었던 |
| 355 | `hidden_nurse_d3_6_e` | 보건선생님 | nurse_room | nurse_sad |  |  | 있었어. 끝내 살리지 못한 환자가 한 명 있었거든. 딱 |
| 356 | `hidden_nurse_d3_6_f` | {name} | nurse_room | nurse_sad |  |  | *전에 서랍 틈으로 보았던 연두색 노트가 스친다. 첫  |
| 357 | `hidden_nurse_d3_7` | 보건선생님 | nurse_room | nurse_normal |  |  | 그래서 이 학교로 왔어. 여기선 호출벨에 쫓기지 않고  |
| 358 | `hidden_nurse_d3_7_b` |  | 없음 | 없음 |  |  |  |
| 359 | `hidden_nurse_d3_8` | 보건선생님 | nurse_room | nurse_normal |  |  | 그러니까 너도 네가 감당할 수 있는 마음부터 솔직하게  |
| 360 | `hidden_nurse_d3_8_c` | {name} | nurse_room | nurse_normal |  |  | 조언 고맙습니다, 선생님. |
| 361 | `hidden_nurse_d3_8_d` | 보건선생님 | nurse_room | nurse_normal |  |  | 혼자 정리하기 버거우면 언제든 다시 말해. 필요하면 전 |
| 362 | `hidden_nurse_d3_8_e` | {name} | nurse_room | nurse_normal |  |  | *선생님이 건넨 상담실 안내 카드를 반으로 접어 교복  |
| 363 | `hidden_nurse_d3_8_f` | {name} | nurse_room | 없음 |  |  | *자리에서 일어나 보건실 문손잡이를 잡는다. 등 뒤에서 |
| 364 | `hidden_nurse_d3_8_h` | {name} | nurse_room | 없음 |  |  | 선생님, 저 잠깐만요. *차마 문을 열지 못하고 돌아선 |
| 365 | `hidden_nurse_d3_choice2` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 서랍을 천천히 닫으며 나를 올려다본다.  |
| 366 | `hidden_nurse_d3_choice2_a` | 보건선생님 | nurse_room | nurse_normal |  |  | 응. 그 상태에서 억지로 버티다간 다른 환자 앞에서도  |
| 367 | `hidden_nurse_d3_9` | 보건선생님 | nurse_room | nurse_normal |  |  | 답답할 때 찾아오는 건 언제든 환영이야. 다만 내가 네 |
| 368 | `hidden_nurse_d3_9_b` | {name} | nurse_room | nurse_normal |  |  | *빈 종이컵을 내려놓고 주머니에 넣었던 안내 카드를 다 |
| 369 | `hidden_nurse_d3_9_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 네가 혼자 감당하기 어려운 선을 넘으면 그땐 담임선생님 |
| 370 | `hidden_nurse_d3_9_d` | 보건선생님 | nurse_room | nurse_normal |  |  | 물론 그 전에 누구에게 어디까지 공유할지는 반드시 너랑 |
| 371 | `hidden_nurse_d3_9_f` | {name} | nurse_room | nurse_normal |  |  | *예약표에는 보건실과 상담실의 빈 시간대가 나란히 적혀 |
| 372 | `hidden_nurse_d3_11` | 보건선생님 | nurse_room | nurse_normal |  |  | 다음 수업 종 치기 전까지 아직 몇 분 남았네. 더 묻 |
| 373 | `hidden_nurse_d3_freetalk` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 커튼을 반쯤 여미고 내 맞은편으로 바짝  |
| 374 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | *복도 창가에서 서연이 반 걸음 다가서며 목소리를 낮춘 |
| 375 | `morning3_date_seo_skip` |  | school_hallway | 없음 |  |  |  |
| 376 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끄고는 눈이 마주치 |
| 377 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 자, 그럼 이제 내 차례지! 이번 주말에 나랑 오락실  |
| 378 | `morning3_date_dain_skip` |  | room_school | 없음 |  |  |  |
| 379 | `morning3_date_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 이쪽을 흘끗 보다가 가방 지퍼를 끝까지 당겨  |
| 380 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심시간 직전, 유나가 소리 없이 다가와 네모나게 접 |
| 381 | `morning3_date_yuna_skip` |  | room_school | 없음 |  |  |  |
| 382 | `morning3_date_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 접어 둔 쪽지 끝을 만지작거리다 다시 책갈피  |
| 383 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 384 | `morning3_end` | {name} | room_school | 없음 |  |  | *오전 마지막 수업을 끝내는 종이 울리고 폭풍 전야 같 |
| 385 | `morning3_end_b` |  | 없음 | 없음 |  |  |  |
| 386 | `lunch3_start` | 유나 | room_school | yuna_normal |  |  | 내 빵도 반 나눠 먹어. *사흘째 점심, 교실에서 책상 |
| 387 | `lunch3_start_2_b` | 다인 | room_school | yuna_normal |  |  | 이 계란말이, 내가 먼저 먹어도 되는 거지? 일단 맛부 |
| 388 | `lunch3_meal_1` | 다인 | room_school | yuna_normal |  |  | 오, 간 딱 맞는데! 회장님도 얼른 드세요. 오늘은 옆 |
| 389 | `lunch3_meal_2` | {name} | room_school | yuna_normal |  |  | 잠깐만, 그건 내 도시락 반찬인데. |
| 390 | `lunch3_meal_3` | 서연 | room_school | yuna_normal |  |  | *서연이 내 도시락에서 계란말이 한 조각을 집어 맛본다 |
| 391 | `lunch3_meal_4` | {name} | room_school | yuna_normal |  |  | 남의 점심 반찬에 냉정하게 점수 매기지 마. |
| 392 | `lunch3_meal_5` | 서연 | room_school | yuna_normal |  |  | *서연의 입꼬리가 얄밉게 올라간다.* 10점 만점에 6 |
| 393 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *말없이 지켜보던 유나가 젓가락을 뻗어 도시락 한가운데 |
| 394 | `lunch3_meal_7` | {name} | room_school | yuna_normal |  |  | 유나야, 그 칼집 낸 소시지는 내가 제일 아껴 둔 건데 |
| 395 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *유나가 소시지를 천천히 베어 물며 맞은편의 다인을 바 |
| 396 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | 어, 잠깐만! 그건 마지막 남은 조각이야. *내 외침과 |
| 397 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *텅 빈 도시락통 한가운데에 노릇하게 구워진 마지막 계 |
| 398 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *숨소리조차 잦아든 식탁 위, 마지막 반찬을 건넬 사람 |
| 399 | `lunch3_give_seo_aff` |  | room_school | 없음 |  |  |  |
| 400 | `lunch3_give_seo_cool` | 서연 | room_school | seyoun_normal |  |  | 고마워, 잘 먹을게. |
| 401 | `lunch3_seo_skin_check` |  | room_school | seyoun_normal |  |  |  |
| 402 | `lunch3_give_seo_2_check` |  | room_school | 없음 |  |  |  |
| 403 | `lunch3_give_seo_dain_affinity` |  | room_school | 없음 |  |  |  |
| 404 | `lunch3_give_seo_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 자기 몫의 빵을 다 삼키고 물병 뚜껑을 잠근다 |
| 405 | `lunch3_give_seo_3_check` |  | room_school | 없음 |  |  |  |
| 406 | `lunch3_give_seo_yuna_affinity` |  | room_school | 없음 |  |  |  |
| 407 | `lunch3_give_seo_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 별다른 내색 없이 남은 빵 조각을 마저 입에  |
| 408 | `lunch3_end` | {name} | room_school | 없음 |  |  | *점심시간 종료를 알리는 종소리에 각자 도시락을 덮는다 |
| 409 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과 후, 노을빛 복도 갈림길에 선다. 사흘째 지나는 |
| 410 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *주머니 속 휴대폰을 만지작거린다. 엉켜 버린 주말 약 |
| 411 | `after3_choice` | {name} | school_hallway | 없음 |  | 🌅 | *석양이 물드는 복도 끝, 어디로 발걸음을 옮길까.* |
| 412 | `after3_rivals_for_seo_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 413 | `after3_seo_skip` |  | student_room | 없음 |  | 🌅 |  |
| 414 | `after3_seo_low_1` | 서연 | student_room | seyoun_normal |  | 🌅 | *서연은 학생회실 문을 반쯤만 연 채 복도 쪽으로 나선 |
| 415 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *길었던 방과 후 시간이 끝났다. 복도 천장의 형광등이 |
| 416 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 417 | `after3_group_nurse_companion` | 보건선생님 | nurse_room | 없음 |  | 🌅 | *보건실 책상 위에 운동부 건강 점검표와 응급 비품 상 |
| 418 | `after3_group_return` | {name} | school_hallway | 없음 |  | 🌅 | *남은 일손 돕기를 마치고 저물어 가는 복도로 나온다. |
| 419 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 420 | `minsu_d3_check` | {name} | 없음 | 없음 |  | 🌅 |  |
| 421 | `night3_start` | {name} | room_my | 없음 |  |  | *금요일 밤, 지친 몸으로 방에 돌아와 교복 차림으로  |
| 422 | `night3_start_2` | {name} | room_my | 없음 |  |  | *불도 켜지 않은 방 안, 책상 위에 엎어 두었던 휴대 |
| 423 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *어두운 천장 아래로 휴대폰 불빛이 번진다. 도착해 있 |
| 424 | `night3_dream_1` | {name} | room_my | 없음 |  |  | *스탠드 조명을 끄려다 휴대폰을 한 번 더 집어 든다. |
| 425 | `night3_dream_2_b` | {name} | room_my | 없음 |  |  | *머리맡에 휴대폰을 내려놓는다. 내일 아침 마주 보며  |
| 426 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *잠들기 전, 휴대폰 갤러리 깊숙한 곳에서 예전 학교의 |
| 427 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *화면에 '이 사진을 삭제하시겠습니까?'라는 확인 창이 |
| 428 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *푸르스름한 액정 빛을 가만히 내려다본다. 소정이의 책 |
| 429 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *확인 창에서 조용히 취소를 누른다. 사진 한 장을 지 |
| 430 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼 대신 이동 메뉴를 눌러 사진을 새 폴더로  |
| 431 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *사진 아래에 짧은 메모를 남긴다. 소정이에게 끝내 건 |
| 432 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *새로 만든 폴더 안에 사진 한 장이 조용히 자리 잡는 |
| 433 | `night3_faithful_reflect_4_b` |  | 없음 | 없음 |  |  |  |
| 434 | `night3_faithful_reflect_4_c` |  | 없음 | 없음 |  |  |  |
| 435 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 내일 아침 알람을 맞춘다. 휴대폰을 내 |
| 436 | `night3_end` | {name} | room_my | 없음 |  |  | *금요일 시간표가 적힌 교과서를 덮고 스탠드 불을 완전 |
| | **Day 4** | | | | | | |
| 437 | `morning4_start` | {name} | room_my_day.webp | 없음 |  |  | *넷째 날, 토요일 아침. 커튼 틈으로 스며든 주말 햇 |
| 438 | `morning4_date_plan_check` |  | 없음 | 없음 |  |  |  |
| 439 | `morning4_fallback_msg` | {name} | room_my_day.webp | 없음 |  |  | *주말 아침의 고요한 방 안. 밤새 온 알림을 정리하고 |
| 440 | `morning4_hidden_check` | {name} | street | 없음 |  |  | *이른 아침 공기를 가르며 학교 앞 사거리 횡단보도에서 |
| 441 | `hidden_nurse_d4_morning_1` | {name} | nurse_room | nurse_normal |  |  | 선생님, 지난번에 잡아 주신 상담 시간에 맞춰 왔어요. |
| 442 | `hidden_nurse_d4_morning_3` | 보건선생님 | nurse_room | nurse_normal |  |  | 약속 시간 딱 맞춰서 왔네. 이쪽 의자에 편하게 앉아. |
| 443 | `hidden_nurse_d4_morning_4` | 보건선생님 | nurse_room | nurse_normal |  |  | *보건선생님이 차분한 손길로 상담 기록지를 펼치고 볼펜 |
| 444 | `hidden_nurse_d4_morning_5` | {name} | nurse_room | nurse_normal |  |  | 지난번에 나눴던 상담 내용 마무리하는 자리 맞죠? |
| 445 | `hidden_nurse_d4_morning_6` | 보건선생님 | nurse_room | nurse_normal |  |  | 응. 그사이 컨디션이 어땠는지 살피고 앞으로 힘들 때  |
| 446 | `hidden_nurse_d4_morning_7` | 보건선생님 | nurse_room | nurse_normal |  |  | *선생님의 시선이 지난 상담 때 꼼꼼히 적어 둔 체크리 |
| 447 | `hidden_nurse_d4_morning_8` | 보건선생님 | nurse_room | nurse_normal |  |  | 기록 닫기 전에 한 가지만 확실히 짚고 넘어가자. |
| 448 | `hidden_nurse_d4_morning_9` | {name} | nurse_room | nurse_normal |  |  | 어떤 건데요? |
| 449 | `hidden_nurse_d4_morning_10` | 보건선생님 | nurse_room | nurse_normal |  |  | *학교 상담 지원 안내문을 내 눈앞으로 반듯하게 돌려  |
| 450 | `hidden_nurse_d4_morning_11` | 보건선생님 | nurse_room | nurse_normal |  |  | 보건실 문이 닫혀 있을 때에도 네가 망설이지 않고 도움 |
| 451 | `hidden_nurse_d4_morning_choice` | {name} | nurse_room | nurse_normal |  |  | *인쇄된 안내문 종이 위로 담임 교사 상담, 위클래스  |
| 452 | `hidden_nurse_d4_morning_choice_a` | {name} | nurse_room | nurse_normal |  |  | 담임선생님이랑 상담실 쪽에도 말씀드려 볼게요. |
| 453 | `hidden_nurse_d4_morning_12` | 보건선생님 | nurse_room | nurse_normal |  |  | 처음부터 혼자 고르기 막막하면 선생님이랑 같이 추려 보 |
| 454 | `hidden_nurse_d4_morning_13` | 보건선생님 | nurse_room | nurse_normal |  |  | 네가 털어놓은 속마음을 허락 없이 남에게 옮기진 않아. |
| 455 | `hidden_nurse_d4_morning_freetalk` | 보건선생님 | nurse_room | nurse_normal |  |  | *상담 기록지 파일철을 부드럽게 덮는다.* 방금 같이  |
| 456 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 457 | `hidden_nurse_d4_1` | {name} | nurse_room | nurse_normal |  |  | *보건실 긴 책상 위로 학교 행사에 쓸 구급함과 소독  |
| 458 | `hidden_nurse_d4_1_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *선생님이 눈을 동그랗게 뜨며 몸을 돌린다.* 어라,  |
| 459 | `hidden_nurse_d4_2` | 보건선생님 | nurse_room | nurse_normal |  |  | 행사장에 비치할 응급키트 포장할 손이 모자라서 공고를  |
| 460 | `hidden_nurse_d4_2_b` | {name} | nurse_room | nurse_shy |  |  | 이번엔 아파서 온 환자 말고 일손 돕는 봉사자 자격이니 |
| 461 | `hidden_nurse_d4_2_c` | 보건선생님 | nurse_room | nurse_dry_smile |  |  | 좋아, 지금은 든든한 봉사자. 작업하다가 종이에 손이라 |
| 462 | `hidden_nurse_d4_2_d` | {name} | nurse_room | nurse_shy |  |  | 멸균 거즈랑 알코올 스왑은 손 닿기 편하게 이쪽에 분류 |
| 463 | `hidden_nurse_d4_2_e` | 보건선생님 | nurse_room | nurse_normal |  |  | *투명한 지퍼 파우치 묶음을 내 앞으로 건넨다.* 거즈 |
| 464 | `hidden_nurse_d4_2_f` | {name} | nurse_room | nurse_normal |  |  | 이 줄 파우치는 수량 맞춰서 다 채웠어요. 빠진 거 없 |
| 465 | `hidden_nurse_d4_2_g` | 보건선생님 | nurse_room | nurse_tired |  |  | 예전에 대학병원 병동에 있을 땐 이런 물품 준비도 밤새 |
| 466 | `hidden_nurse_d4_2_h` | {name} | nurse_room | nurse_shy |  |  | 그 많은 걸 혼자서 다 하셨다고요? |
| 467 | `hidden_nurse_d4_3` | {name} | nurse_room | nurse_normal |  |  | 옆에서 거들어 주는 동료들이 있다고 하셨잖아요. |
| 468 | `hidden_nurse_d4_4` | 보건선생님 | nurse_room | nurse_tired |  |  | 응급 환자가 몰리는 야간 당직 때는 간호사 세 명 몫의 |
| 469 | `hidden_nurse_d4_4_b` | {name} | nurse_room | nurse_normal |  |  | 그러다 몸이 축나서 번아웃이 오신 거군요. |
| 470 | `hidden_nurse_d4_4_c` | 보건선생님 | nurse_room | nurse_tired |  |  | 잠 못 자고 바빴던 것도 사실이긴 해. 하지만 단순히  |
| 471 | `hidden_nurse_d4_4_d` | 보건선생님 | nurse_room | nurse_tired |  |  | 그 시절 나를 제일 숨 막히게 했던 건 끝없는 업무량이 |
| 472 | `hidden_nurse_d4_4_e` | {name} | nurse_room | nurse_normal |  |  | 업무량이 아니면 뭐가 그렇게 힘드셨는데요? |
| 473 | `hidden_nurse_d4_4_f` | 보건선생님 | nurse_room | nurse_tired |  |  | 환자 얼굴이나 이름보다 차트에 적힌 병상 번호와 바이탈 |
| 474 | `hidden_nurse_d4_4_g` |  | 없음 | 없음 |  |  |  |
| 475 | `hidden_nurse_d4_4_h` | 보건선생님 | nurse_room | nurse_normal |  |  | 학교 보건실에서는 찾아오는 아이들 눈을 한 명씩 똑바로 |
| 476 | `hidden_nurse_d4_4_i` | {name} | nurse_room | nurse_normal |  |  | 누군가에게 연결해 주는 일도 치료에 포함되는 거예요? |
| 477 | `hidden_nurse_d4_4_j` | 보건선생님 | nurse_room | nurse_normal |  |  | 당연하지. 그러니까 너도 혼자 감당하기 버거운 일이 생 |
| 478 | `hidden_nurse_d4_4_k` | {name} | nurse_room | nurse_shy |  |  | 마지막 응급키트 지퍼까지 다 잠갔어요. *묵직해진 구급 |
| 479 | `hidden_nurse_d4_5` | 보건선생님 | nurse_room | nurse_normal |  |  | 그래서 화려한 대학병원 대신 학교로 왔어. 약을 건네기 |
| 480 | `hidden_nurse_d4_name_choice` | {name} | nurse_room | nurse_shy |  |  | *보건선생님이 안경을 고쳐 쓰며 수량 확인표에 완성된  |
| 481 | `hidden_nurse_d4_name_choice_a` | 보건선생님 | nurse_room | nurse_normal |  |  | 복도에서 서성거리며 혼자 참던 학생이 용기 내서 보건실 |
| 482 | `hidden_nurse_d4_6` | 보건선생님 | nurse_room | nurse_normal |  |  | 네가 옆에서 손 맞춰 준 덕분에 예상보다 훨씬 일찍 끝 |
| 483 | `hidden_nurse_d4_6_b` | {name} | nurse_room | nurse_normal |  |  | 방금 들은 건 절대 별거 아닌 얘기가 아닌데요. |
| 484 | `hidden_nurse_d4_6_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 네가 그렇게 진지하게 들어 주니까 괜히 부끄럽잖아. 대 |
| 485 | `hidden_nurse_d4_6_d` | {name} | nurse_room | nurse_normal |  |  | *선생님이 봉사 활동 확인서 양식에 시작 시각과 종료  |
| 486 | `hidden_nurse_d4_choice` | 보건선생님 | nurse_room | nurse_normal |  |  | 이제 상자 겉면에 부서별 라벨 붙이는 작업만 남았네.  |
| 487 | `hidden_nurse_d4_meal_walk` | {name} | snack_shop.webp | nurse_normal |  |  | 스태프 인원수대로 포장된 거 맞죠? *학교 앞 분식집에 |
| 488 | `hidden_nurse_d4_meal_1` | 보건선생님 | snack_shop.webp | nurse_normal |  |  | 잠깐, 이 매운맛 떡볶이 누가 골랐어. 얼른 냉수부터  |
| 489 | `hidden_nurse_d4_meal_1_b` | {name} | snack_shop.webp | nurse_normal |  |  | 방금 선생님이 제일 먼저 집어 드셨잖아요. |
| 490 | `hidden_nurse_d4_meal_1_c` | 보건선생님 | snack_shop.webp | nurse_normal |  |  | 학생들 먹이기 전에 맵기 정도를 점검하려고 먼저 맛본  |
| 491 | `hidden_nurse_d4_meal_1b` | {name} | nurse_room | nurse_normal |  |  | *간식을 마저 비운 스태프들과 함께 보건실로 돌아와 키 |
| 492 | `hidden_nurse_d4_meal_2` | {name} | nurse_room | nurse_normal |  |  | 아까 대학병원 시절 얘기하실 때랑은 얼굴 표정이 완전히 |
| 493 | `hidden_nurse_d4_meal_2_b` | {name} | nurse_room | nurse_normal |  |  | *선생님 얼굴을 쳐다보며 말하다가 손끝의 라벨 한 장이 |
| 494 | `hidden_nurse_d4_meal_3` | 보건선생님 | nurse_room | nurse_normal |  |  | 그치? 옛날생각 하느라 나도 모르게 표정이 굳어 있었나 |
| 495 | `hidden_nurse_d4_meal_3_b` | {name} | nurse_room | nurse_normal |  |  | *선생님이 떼어 낸 라벨을 내가 이어받아 마지막 상자  |
| 496 | `hidden_nurse_d4_meal_3_c` | 보건선생님 | nurse_room | nurse_normal |  |  | 좋아, 준비 작업은 여기까지. 다들 봉사 시간 기재된  |
| 497 | `hidden_nurse_d4_meal_3_d` | {name} | nurse_room | nurse_normal |  |  | *가방을 챙겨 보건실 문을 나서려는데 선생님이 서류 한 |
| 498 | `hidden_nurse_d4_meal_3_e` | 보건선생님 | nurse_room | nurse_normal |  |  | {name}, 제일 중요한 봉사 확인표 놓고 가잖아. |
| 499 | `hidden_nurse_d4_meal_4` | 보건선생님 | nurse_room | nurse_normal |  |  | {name}. 주말 아침부터 옆에서 같이 손 맞춰 줘서 |
| 500 | `hidden_nurse_d4_meal_4_b` | 보건선생님 | nurse_room | nurse_normal |  |  | *선생님이 가벼운 미소를 남기고 완성된 응급키트 상자를 |
| 501 | `hidden_nurse_d4_freetalk` | 보건선생님 | nurse_room | nurse_normal |  |  | *마지막 응급키트 지퍼를 닫아 상자에 넣은 뒤 맞은편  |
| 502 | `day4_haeun_gate` |  | 없음 | 없음 |  |  |  |
| 503 | `day4_haeun_trust_check` |  | 없음 | 없음 |  |  |  |
| 504 | `day4_haeun_personal_gate` |  | 없음 | 없음 |  |  |  |
| 505 | `morning4_end` | {name} | room_my_day.webp | 없음 |  |  | *집으로 돌아와 거울 앞에서 셔츠 깃과 머리카락을 정돈 |
| 506 | `day4_date_branch` |  | 없음 | 없음 |  |  |  |
| 507 | `day4_night_start` | {name} | school | 없음 |  |  | *어스름이 짙게 깔린 학교를 나서서 집으로 돌아갈 시간 |
| 508 | `day4_night_branch` | 시스템 | 없음 | 없음 |  |  |  |
| 509 | `day4_nurse_checkin` | {name} | school | 없음 |  |  | *주말 행사 준비로 학교에 남았던 학생들에게 보건선생님 |
| 510 | `day4_adult_nurse_student_rank` |  | 없음 | 없음 |  |  |  |
| 511 | `day4_nurse_seoyeon_counteroffer` | 서연 | school_back | seyoun_sad |  |  | *교문으로 향하던 발걸음이 옥상 계단 입구에서 멈춘다. |
| 512 | `day4_adult_return_home` | {name} | room_my | 없음 |  |  | *집에 무사히 도착해 학교 앱의 귀가 확인 버튼을 누른 |
| 513 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 514 | `night_nurse_msg_1` | 보건선생님 | room_my | nurse_normal | 0.35 |  | *학교 건강관리 앱 알림* 주말 상담 이후 현재 컨디션 |
| 515 | `night_nurse_msg_2` | {name} | room_my | nurse_normal | 0.35 |  | *자동 발송된 안내 문구 아래로 '한결 안정됨'과 '추 |
| 516 | `night_nurse_msg_3` | 보건선생님 | room_my | nurse_normal | 0.35 |  | *보건실 안내 문구* 추가 면담이 필요한 학생은 내일  |
| 517 | `night_nurse_msg_4` | 보건선생님 | room_my | nurse_normal | 0.35 |  | *보건실 안내 문구* 심야 시간에는 개별 답장을 보내지 |
| 518 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *일요일 아침 알람을 맞춰 두고 방 안의 스탠드 불을  |
| 519 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안의 시계 바늘이 자정을 넘어 다섯째 날로 향한다 |
| | **Day 5** | | | | | | |
| 520 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날, 일요일 아침. 교문 너머로 축제 현수막이 |
| 521 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 522 | `morning5_start_b` |  | 없음 | 없음 |  |  |  |
| 523 | `morning5_start_2_b` |  | 없음 | 없음 |  |  |  |
| 524 | `morning5_mood_check` | 시스템 | room_school | 없음 |  |  |  |
| 525 | `morning5_mood_mid` | {name} | school | 없음 |  |  | *전학 온 첫 주가 다 지나가도록 내 마음이 어디로 기 |
| 526 | `morning5_gate` |  | 없음 | 없음 |  |  |  |
| 527 | `morning5_seo_note_1` | 서연 | room_school | seyoun_normal | 0.35 |  | *내 책상 한가운데, 모서리를 반듯하게 맞춘 쪽지 한  |
| 528 | `morning5_seo_note_1_b` | {name} | school_hallway | 없음 |  |  | *복도 창가를 따라 꾸며진 문예부 전시 코너를 지나다가 |
| 529 | `morning5_seo_note_1_c` | {name} | school_hallway | 없음 |  |  | *문예부 게시판 한켠에 단편소설 원고 몇 장이 압정으로 |
| 530 | `morning5_yuna_story_1` | {name} | school_hallway | yuna_normal | 0.35 |  | *원고 속 화자는 오후의 도서관 책상에 엎드려 잠든 누 |
| 531 | `morning5_yuna_story_2` | {name} | school_hallway | 없음 |  |  | *원고의 맨 끝 문장에 시선이 닿는다. '그 사람이 눈 |
| 532 | `morning5_yuna_story_4` | {name} | school_hallway | yuna_normal | 0.35 |  | *원고지 맨 아래 여백 구석에는 연필로 아주 작게 덧붙 |
| 533 | `morning5_return_class` | {name} | room_school | dain_normal |  |  | *복도 끝에서 교실로 돌아오자, 문가에 등을 기댄 채  |
| 534 | `morning5_dain_1` | 다인 | room_school | dain_normal |  |  | *내 어깨를 가볍게 툭 치며 장난스럽게 웃는다.* 야, |
| 535 | `morning5_dain_1_b` | {name} | room_school | dain_normal |  |  | 내 허락도 안 받고 마음대로 적어 놓으면 어떡해? |
| 536 | `morning5_dain_2` | 다인 | room_school | dain_laugh |  |  | *포니테일이 흔들리도록 고개를 휙 젖히며 볼에 바람을  |
| 537 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *축제 준비로 복도가 소란스러운 틈을 지나, 문이 반쯤 |
| 538 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *오전 행사 준비가 한차례 숨을 고르는 쉬는 시간. 소 |
| 539 | `hidden_nurse_d5_1` | 보건선생님 | school_hallway | nurse_normal |  |  | 어, {name} 왔구나. 축제도 이제 끝자락이네. 그 |
| 540 | `hidden_nurse_d5_1_b` | {name} | school_hallway | nurse_normal |  |  | *보건선생님이 차트 파일을 열어 내 이름이 적힌 상담  |
| 541 | `hidden_nurse_d5_1_c` | 보건선생님 | school_hallway | nurse_normal |  |  | 지금 컨디션까지만 체크하면 이번 한 주 동안의 초기 상 |
| 542 | `hidden_nurse_d5_1_d` | {name} | school_hallway | nurse_normal |  |  | ...그럼 이제 보건실엔 따로 안 들러도 되는 거예요? |
| 543 | `hidden_nurse_d5_1_e` | 보건선생님 | school_hallway | nurse_normal |  |  | *차트에서 눈을 떼고 내 눈을 가만히 바라본다.* 몸이 |
| 544 | `hidden_nurse_d5_1_f` | {name} | school_hallway | nurse_normal |  |  | *상담 기록지 맨 아래 칸에는 보건실 방문 절차와 위클 |
| 545 | `hidden_nurse_d5_2_b` |  | 없음 | 없음 |  |  |  |
| 546 | `hidden_nurse_d5_2_c` |  | 없음 | 없음 |  |  |  |
| 547 | `hidden_nurse_d5_3` | {name} | school_hallway | nurse_normal |  |  | 선생님, 상담 확인서 받으러 들렀어요. |
| 548 | `hidden_nurse_d5_3_b` | {name} | school_hallway | nurse_normal |  |  | 약속한 시간 맞춰 온 건데 괜히 일거리만 늘려 드린 건 |
| 549 | `hidden_nurse_d5_3_c` | 보건선생님 | school_hallway | nurse_normal |  |  | 약속한 시간에 제 발로 도움을 받으러 오는 학생은 언제 |
| 550 | `hidden_nurse_d5_3_d` |  | 없음 | 없음 |  |  |  |
| 551 | `hidden_nurse_d5_3_e` |  | 없음 | 없음 |  |  |  |
| 552 | `hidden_nurse_d5_3_f` | 보건선생님 | school_hallway | nurse_normal |  |  | *책상 한켠의 하얀 플라스틱 상자를 열어 응급처치 안내 |
| 553 | `hidden_nurse_d5_3_g` |  | 없음 | 없음 |  |  |  |
| 554 | `hidden_nurse_d5_3_h` |  | 없음 | 없음 |  |  |  |
| 555 | `hidden_nurse_d5_3_i` |  | 없음 | 없음 |  |  |  |
| 556 | `hidden_nurse_d5_4` | 보건선생님 | school_hallway | nurse_normal |  |  | 축제 기간 동안 비상 응급키트는 체육관 정문 쪽에 비치 |
| 557 | `hidden_nurse_d5_4_b` | {name} | school_hallway | nurse_normal |  |  | 선생님. |
| 558 | `hidden_nurse_d5_4_c` | {name} | school_hallway | nurse_normal |  |  | *확인서 하단 네모 칸에 '상담 종결, 필요 시 재예약 |
| 559 | `hidden_nurse_d5_4_d` | 보건선생님 | school_hallway | nurse_normal |  |  | 자, 이걸로 마지막 확인 절차도 끝. |
| 560 | `hidden_nurse_d5_5` | 보건선생님 | school_hallway | nurse_normal |  |  | {name}. 가는 길에 이 응급처치 안내 카드도 하나 |
| 561 | `hidden_nurse_d5_choice` | {name} | school_hallway | nurse_normal |  |  | *빳빳한 카드 앞면에는 기본 응급처치 순서가, 뒷면에는 |
| 562 | `hidden_nurse_d5_choice_a` | {name} | school_hallway | nurse_normal |  |  | 잘 챙겨 둘게요. 다칠 일 없으면 그냥 가방 안주머니에 |
| 563 | `hidden_nurse_d5_choice_a_b` | 보건선생님 | school_hallway | nurse_normal |  |  | 그럼. 꺼내 쓸 일이 없는 게 제일 좋고 혹시라도 숨이 |
| 564 | `hidden_nurse_d5_6` | 보건선생님 | school_hallway | nurse_normal |  |  | *그제야 안심한 듯 눈매가 부드럽게 풀린다.* 그렇게만 |
| 565 | `hidden_nurse_d5_6_b` |  | 없음 | 없음 |  |  |  |
| 566 | `hidden_nurse_d5_6_c` | {name} | school_hallway | nurse_normal |  |  | *카드 맨 아랫줄에 작은 고딕체로 인쇄된 문장이 눈에  |
| 567 | `hidden_nurse_d5_flag_check` |  | school_hallway | 없음 |  |  |  |
| 568 | `hidden_nurse_d5_7` |  | school_hallway | 없음 |  |  |  |
| 569 | `hidden_nurse_d5_freetalk` | 보건선생님 | school_hallway | nurse_normal |  |  | *정리된 상담 기록지를 캐비닛 파일에 꽂아 넣는다.*  |
| 570 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 571 | `morning5_sojeong_1` | {name} | room_school | 없음 |  |  | *조용한 창가에 서서 휴대폰 메모 앱을 연다. 이전 학 |
| 572 | `morning5_sojeong_2` | {name} | room_school | 없음 |  |  | *더 이상 나를 변호하기 위한 마흔 번째 초안은 만들지 |
| 573 | `morning5_sojeong_3` | {name} | room_school | 없음 |  |  | 그때 네 책상 위에 적힌 낙서들을 두 눈으로 보고도 선 |
| 574 | `morning5_sojeong_4` | {name} | room_school | 없음 |  |  | *말풍선 옆에 작은 전송 완료 표시가 뜬다. 숫자 1이 |
| 575 | `morning5_sojeong_5` | {name} | room_school | 없음 |  |  | 전학 오기 전 학교에서 제가 모른 척 지나쳤던 일에 대 |
| 576 | `morning5_route_branch` |  | room_school | 없음 |  |  |  |
| 577 | `morning5_end` | {name} | room_school | 없음 |  |  | *책상 위에 놓인 쪽지들을 소중히 추려 모으고 휴대폰  |
| 578 | `day5_haeun_gate` |  | 없음 | 없음 |  |  |  |
| 579 | `day5_haeun_trust_check` |  | 없음 | 없음 |  |  |  |
| 580 | `day5_haeun_resume` |  | 없음 | 없음 |  |  |  |
| 581 | `tour_seo_1` | {name} | school | seyoun_normal |  |  | *점심 햇살이 쏟아지는 교문 앞에 서연과 나란히 멈춰  |
| 582 | `tour_seo_skip` |  | school | 없음 |  |  |  |
| 583 | `tour_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *점심시간의 소란스러운 복도 끝에서 서연과 마주친다.  |
| 584 | `after5_start` |  | 없음 | 없음 |  | 🌅 |  |
| 585 | `day5_haeun_guilt_gate` |  | 없음 | 없음 |  | 🌅 |  |
| 586 | `day5_haeun_route_gate` |  | 없음 | 없음 |  | 🌅 |  |
| 587 | `after5_original_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 588 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *소란스럽던 축제가 막을 내릴 무렵, 노을이 스며드는  |
| 589 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *축제 마지막 순서가 끝나 가는 복도 창가에서, 홀로  |
| 590 | `after5_farewell_seo_skip` |  | school_hallway | 없음 |  | 🌅 |  |
| 591 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *오후의 그림자가 길어진 복도에서 서연과 마주친다. 서 |
| 592 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 593 | `after5_farewell_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지날 무렵, 문가에서 기다리고 있던 유나 |
| 594 | `after5_farewell_yuna_skip` |  | school_hallway | 없음 |  | 🌅 |  |
| 595 | `after5_farewell_yuna_low` | 유나 | library_old | yuna_normal |  | 🌅 | *도서관 앞 복도에서 유나와 눈이 마주친다. 유나는 읽 |
| 596 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 597 | `after5_farewell_dain_1` | {name} | school_back | dain_normal |  | 🌅 | *체육관 입구 쪽에서 다인이 걸어 나온다. 언제나 성큼 |
| 598 | `after5_farewell_dain_skip` |  | school_hallway | 없음 |  | 🌅 |  |
| 599 | `after5_farewell_dain_low` | 다인 | school_back | dain_normal |  | 🌅 | *체육관 앞길에서 걸어오던 다인이 두 걸음 떨어진 자리 |
| 600 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *붉은 석양이 길게 내려앉은 교정 위로, 축제의 끝을  |
| 601 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 602 | `after5_hidden_route_choice_check` | {name} | school_back | 없음 |  | 🌅 | *노을이 물든 교문 앞, 친구들과 약속한 공원으로 향하 |
| 603 | `after5_hidden_route_choice` | {name} | school_back | 없음 |  | 🌅 | *공원으로 향하는 가로수길과 교사동으로 돌아가는 복도가 |
| 604 | `after5_hidden_nurse_affinity_check` |  | nurse_room | 없음 |  | 🌅 |  |
| 605 | `after5_hidden_nurse_high` | 보건선생님 | nurse_room | nurse_smile |  | 🌅 | *책상 위에 상담 종결 확인서와 투명 케이스에 든 응급 |
| 606 | `after5_hidden_return_to_park` | {name} | park | 없음 |  | 🌅 | *교내의 마지막 뒷정리를 모두 마치고 학교 밖 공원으로 |
| 607 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 608 | `hidden_perfect_nurse_check` |  | nurse_room | 없음 |  |  |  |
| 609 | `hidden_true_nurse_1` | {name} | street | 없음 |  |  | *고등학교 졸업 후 네 해가 흘렀다. 첫 직장을 잡고  |
| 610 | `hidden_true_nurse_2` | {name} | cafe | nurse_normal |  |  | *캠페인 부스 정리가 끝난 뒤 찾아간 근처의 조용한 카 |
| 611 | `hidden_true_nurse_2_b` | {name} | cafe | nurse_normal |  |  | *테이블 위에 나란히 놓인 두 대의 휴대폰 화면에, 내 |
| 612 | `hidden_true_nurse_2_c` | 보건선생님 | cafe | nurse_normal |  |  | *그녀가 가운 대신 입은 봄 블라우스 소매를 정돈하며  |
| 613 | `hidden_true_nurse_2_d` | {name} | cafe | nurse_normal |  |  | 네. 저도 이제 어엿한 직장인이에요. 작년부터는 집 나 |
| 614 | `hidden_true_nurse_3` | 보건선생님 | cafe | nurse_normal |  |  | *주원이 찻잔을 두 손으로 감싸 쥐며 작게 웃는다.*  |
| 615 | `hidden_true_nurse_3_b` | {name} | cafe | nurse_normal |  |  | 조금씩 천천히 바꾸면 되죠. 이제 우리 사이에 급할 건 |
| 616 | `hidden_true_nurse_4` | 보건선생님 | cafe | nurse_normal |  |  | 하긴, 네가 열여덟 살 때도 보건실 문 열고 들어오면서 |
| 617 | `hidden_true_nurse_5` | 보건선생님 | cafe | nurse_normal |  |  | 그 시절엔 내가 널 지켜야 하는 보건교사였고 넌 학생이 |
| 618 | `hidden_true_nurse_5_b` | {name} | cafe | nurse_normal |  |  | *주원이 따뜻한 커피잔 손잡이에서 천천히 손을 떼고 깊 |
| 619 | `hidden_true_nurse_5_c` | 보건선생님 | cafe | nurse_normal |  |  | 그런데 네 해가 지나서, 오늘 이렇게 같은 어른으로 우 |
| 620 | `hidden_true_nurse_5_d` | 보건선생님 | cafe | nurse_normal |  |  | 그래서 용기 내서 물어볼게. ...우리, 다음 주에도  |
| 621 | `hidden_true_nurse_5_e` | {name} | cafe | nurse_normal |  |  | 처치나 상담 때문이 아니라도요? |
| 622 | `hidden_true_nurse_5_f` | 보건선생님 | cafe | nurse_normal |  |  | *그녀가 가느다란 손가락으로 찻잔 테두리를 톡톡 두드리 |
| 623 | `hidden_true_nurse_6` | 보건선생님 | cafe | nurse_normal |  |  | 만약 네 마음이 조금이라도 무겁거나 불편하면 오늘 반가 |
| 624 | `hidden_true_nurse_7` | {name} | street | 없음 |  |  | *봄바람이 부는 밤거리를 따라 지하철역 입구까지 나란히 |
| 625 | `hidden_true_nurse_7_b` | 보건선생님 | street | nurse_normal |  |  | 방금 내가 한 다음 주 약속 얘기는, 오늘 밤 집에 들 |
| 626 | `hidden_true_nurse_7_c` | {name} | street | 없음 |  |  | 생각할 필요 없어요. 저도 다음 주에 주원 씨 다시 만 |
| 627 | `hidden_true_nurse_7_d` | 보건선생님 | street | nurse_normal |  |  | *낯선 호칭에 그녀의 귀 끝이 새빨갛게 물들더니, 이내 |
| 628 | `hidden_true_nurse_8` | 보건선생님 | street | nurse_normal |  |  | 다음번엔 건강 캠페인 강사 말고 그냥 너 만나러 나오는 |
| 629 | `hidden_true_nurse_8_b` | {name} | nurse_house | 없음 |  |  | *그로부터 석 달 동안 두 사람은 매주 주말마다 도심의 |
| 630 | `hidden_true_nurse_8_c` | {name} | nurse_house | 없음 |  |  | 보고 싶은 영화가 많아서 고르기 어렵네요. 어떤 것부터 |
| 631 | `hidden_true_nurse_8_d` | {name} | nurse_house | 없음 |  |  | *그날 밤 두 사람 사이에서 옛 학교 이야기는 길지 않 |
| 632 | `hidden_true_nurse_8_e` | 보건선생님 | nurse_house | nurse_normal |  |  | *소파 등받이에 머리를 기댄 주원이 조용히 속삭인다.* |
| 633 | `hidden_true_nurse_8_f` | {name} | nurse_house | 없음 |  |  | 그때 끝까지 보건실에 남기로 하신 건, 선생님의 선택이 |
| 634 | `hidden_true_nurse_8_g` | 보건선생님 | nurse_house | nurse_normal |  |  | 응. 그 일을 계속 사랑하고 싶어서 내 발로 남았어.  |
| 635 | `hidden_true_nurse_8_h` | {name} | ending_true_nurse | 없음 |  |  | 저도 다음 주, 그다음 주에도 계속 이렇게 같이 있고  |
| 636 | `date_choice_true_nurse` | 보건선생님 | nurse_house | nurse_home_smile.webp |  |  | 오늘 캠페인 차트는 가방 깊숙이 넣어 두고 왔어. 우리 |
| 637 | `date_true_nurse_1` | 보건선생님 | nurse_house | nurse_home_smile.webp |  |  | 소파에 편하게 앉아 있어, 물 한 잔 따라 줄게. 아니 |
| 638 | `date_true_nurse_2` | {name} | nurse_house | nurse_home_smile.webp |  |  | *조용한 주방 싱크대에서 맑은 물 받는 소리가 잠깐 울 |
| 639 | `hidden_true_nurse_ending_title` |  | ending_true_nurse | 없음 |  |  | ─── 보건선생님 TRUE LOVE END ─── |
| 640 | `day5_nurse_ending_freetalk_intro` | {name} | nurse_house | nurse_home_normal.webp |  |  | *아늑한 거실 정리를 마친 주원이 소파의 내 바로 옆자 |
| 641 | `day5_nurse_ending_freetalk_router` | {name} | nurse_house | 없음 |  |  |  |
| 642 | `day5_nurse_ending_freetalk_true_love` | 보건선생님 | nurse_house | nurse_home_normal.webp |  | 🌙 | *영화가 끝난 거실 테이블에 찻잔을 내려놓고 휴대폰으로 |
| 643 | `day5_credits` |  | school | 없음 |  |  |  |
| 644 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### day5_teacher_ending_freetalk_bittersweet

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
- `after2_choice`: (선택)
- `night2_choice`: (선택)
- `hidden_homeroom_d3_choice`: (선택)
- `hidden_homeroom_d3_reveal_choice`: (선택)
- `lunch3_choice`: (선택)
- `after3_choice`: (선택)
- `hidden_homeroom_d4_choice`: (선택)
- `hidden_homeroom_d4_cafe_choice`: (선택)
- `day4_teacher_yuna_counteroffer`: (선택)
- `morning5_caught_teacher_counteroffer`: (선택)
- `morning5_counteroffer_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=7 유나=17 다인=3 담임=-30 보건=0

<details>
<summary>씬 타임라인 (540씬)</summary>

| # | 씬 ID | 화자 | 배경 | 캐릭터 | OP | 밤 | 대사 (앞 30자) |
|---|--------|------|------|--------|----|----|----------------|
| | **Day 1** | | | | | | |
| 1 | `start` | {name} | school | 없음 |  |  | *4월의 벚꽃잎이 흩날리는 교문 앞. 아직 풀기가 가시 |
| 2 | `start_again` | {name} | school | 없음 |  |  | *순간 울컥 치미는 현기증에 차가운 교문 기둥을 짚어선 |
| 3 | `start_3` | {name} | school | 없음 |  |  | *주머니 속 휴대폰이 짧게 떨린다. 예전 학교 단체방  |
| 4 | `name_input_scene` | 시스템 | school | 없음 |  |  | 전학생, 이름이 뭐야? |
| 5 | `gate_1` | {name} | school | 없음 |  |  | *교문 그늘 아래 서 있던 긴 생머리의 여학생이 안경테 |
| 6 | `seoyeon_meet_1` | 서연 | school | seyoun_normal |  |  | 혹시 오늘 온 전학생? {name} 맞지? |
| 7 | `seoyeon_meet_2` | 서연 | school | seyoun_normal |  |  | 가슴팍 명찰도 {name}이네. 반가워. *단정한 손끝 |
| 8 | `seoyeon_meet_3` | {name} | school | seyoun_normal |  |  | 맞는데. 내 얼굴은 어떻게 한 번에 알아봤어? |
| 9 | `seoyeon_meet_4` | 서연 | school | seyoun_normal |  |  | 학생회장이거든. 새로 온 전학생 맞이하는 것도 내 몫이 |
| 10 | `seoyeon_meet_5` | 서연 | school | seyoun_normal |  |  | 이쪽으로 따라와. 조회 시작하기 전에 15분 안으로 학 |
| 11 | `seoyeon_meet_6` | {name} | school | seyoun_normal |  |  | 첫날부터 학생회장이 직접 안내라니 좀 떨리는데. |
| 12 | `seoyeon_meet_7` | 서연 | school | seyoun_normal |  |  | 원래 내가 맡은 일이니까 괜히 어렵게 생각할 것 없어. |
| 13 | `seoyeon_meet_8` | 서연 | school | seyoun_normal |  |  | 자, 가자. *몸을 돌리는 서연의 교복 셔츠 깃에서 햇 |
| 14 | `seoyeon_choice` | {name} | school | seyoun_normal |  |  | *앞서 걷는 서연의 단정한 뒷모습을 보며 입을 연다.* |
| 15 | `choice_joke_1` | 서연 | school | seyoun_laugh |  |  | 오늘 안내는 특별히 무료야. 대신 나중에 학생회 일손  |
| 16 | `choice_joke_2` | {name} | school | seyoun_laugh |  |  | 세상에 공짜가 없다더니 무서운 학생회장이네. |
| 17 | `choice_joke_3` | 서연 | school | seyoun_normal |  |  | 내 옆에 있으면 적어도 학교생활이 심심하진 않을걸. |
| 18 | `hallway_1` | 서연 | school_hallway | seyoun_back |  |  | 지나가는 애들한테 인사받느라 걸음 늦출 필요 없어. 그 |
| 19 | `hallway_3` | 서연 | school_hallway | seyoun_normal |  |  | 지금 걷는 본관이 3학년 건물이고 창밖 건너편이 도서관 |
| 20 | `hallway_4` | 서연 | school_hallway | seyoun_normal |  |  | 그리고 이건 아무한테나 안 보여주는 건데. *재킷 주머 |
| 21 | `hallway_5` | 서연 | school_hallway | seyoun_normal |  |  | 원래 우리 학교 옥상은 평소엔 잠겨 있거든. 이 열쇠는 |
| 22 | `hallway_6` | {name} | school_hallway | seyoun_normal |  |  | 옥상에 너만의 비밀 아지트라도 숨겨 둔 거야? |
| 23 | `hallway_6_b` | 서연 | school_hallway | seyoun_normal |  |  | *맑게 울리던 열쇠고리 소리가 손안에서 뚝 멎는다.*  |
| 24 | `hallway_6_c` | 서연 | school_hallway | seyoun_normal |  |  | *입꼬리를 살짝 올린 채 대답 대신 열쇠를 다시 주머니 |
| 25 | `hallway_7` | 서연 | school_hallway | seyoun_normal |  |  | 맞다, 오늘 점심시간. 아직 어디서 밥 먹을지 못 정했 |
| 26 | `hallway_8` | {name} | school_hallway | seyoun_shy |  |  | *어느새 걸음을 멈춘 서연이 아침 햇살이 비치는 교실  |
| 27 | `hallway_10` | 서연 | school_hallway | seyoun_normal |  |  | 다 왔다, 여기가 네 교실이야. 얼른 들어가 봐. |
| 28 | `hallway_11` | {name} | school_hallway | seyoun_normal |  |  | 점심때도 일대일로 안내해 주는 거야? |
| 29 | `hallway_12` | 서연 | school_hallway | seyoun_normal |  |  | 글쎄, 오늘 오전 수업 잘 버티는 거 봐서. |
| 30 | `hallway_13` | 서연 | school_hallway | seyoun_back |  |  | *돌아서던 서연이 클립보드를 어깨 높이로 가볍게 들어  |
| 31 | `hallway_13_b` | {name} | school_hallway | seyoun_back |  |  | *단정한 구두 소리를 남기며 복도 저편으로 멀어지는 서 |
| 32 | `classroom_1` | {name} | room_school | 없음 |  |  | *드르륵, 교실 앞문을 열자 왁자지껄하던 공기 위로 수 |
| 33 | `classroom_2_b` | {name} | room_school | teacher_normal |  |  | *교탁 앞에는 20대 후반쯤 되어 보이는 담임선생님이  |
| 34 | `classroom_3` | 담임 | room_school | teacher_normal |  |  | 자, 다들 주목. 오늘부터 우리 반 식구가 된 전학생이 |
| 35 | `classroom_3_b` | {name} | room_school | teacher_normal |  |  | 오늘 전학 온 {name}입니다. 잘 부탁드립니다. * |
| 36 | `classroom_5_b` | 담임 | room_school | teacher_normal |  |  | 그래, {name}. 우리 반에 온 걸 환영해. 급할  |
| 37 | `classroom_5_c` | {name} | room_school | teacher_normal |  |  | *낯선 교실 공기에 섞여 내 숨소리가 잦아드는 사이 교 |
| 38 | `classroom_dain_1` | 다인 | room_school | dain_normal |  |  | 오, 전학생! 드디어 우리 반에도 새 얼굴이 들어왔네! |
| 39 | `classroom_dain_2` | 다인 | room_school | yuna_normal |  |  | 이쪽 봐, 이쪽! *산뜻한 갈색 숏컷에 활동적인 배구부 |
| 40 | `classroom_dain_3` | 담임 | room_school | teacher_normal |  |  | 다인아, 아침부터 목소리 좀 낮추자. 그리고 교실 안에 |
| 41 | `classroom_dain_4` | 다인 | room_school | yuna_normal |  |  | 에이, 쌤도 참. 이게 세상에서 제일 편하단 말이에요! |
| 42 | `classroom_dain_5` | 다인 | room_school | yuna_normal |  |  | 네 자리는 여기야, 여기! *아이들의 웃음소리 사이로  |
| 43 | `classroom_dain_5_b` | 담임선생님 | room_school | teacher_normal |  |  | 다인아, 적어도 출석 부르는 동안만이라도 진정 좀 하자 |
| 44 | `classroom_dain_5_c` | 담임 | room_school | teacher_normal |  |  | 지금부터 그 에너지를 다 쓰면 어떡해. 아직 1교시 종 |
| 45 | `classroom_dain_5_d` | 담임선생님 | room_school | teacher_angry |  |  | *담임은 작게 고개를 저으며 출석부 다음 장을 부드럽게 |
| 46 | `classroom_yuna_1` | {name} | room_school | yuna_bored |  |  | *소란스러운 교실 풍경과 동떨어진 창가 맨 뒷자리, 봄 |
| 47 | `classroom_yuna_2` |  | 없음 | 없음 |  |  |  |
| 48 | `classroom_yuna_4` | {name} | room_school | yuna_bored |  |  | *앞줄에 앉은 학생 하나가 내 소매를 스치며 작게 속삭 |
| 49 | `classroom_seat_1` | 담임선생님 | room_school | teacher_normal |  |  | *출석부를 덮은 담임이 창가 쪽에서 한 줄 건너편 빈자 |
| 50 | `classroom_seat_2` | 다인 | room_school | yuna_normal |  |  | 오, 딱 내 옆자리네? 멀뚱히 서 있지 말고 얼른 와서 |
| 51 | `classroom_minsu_1` | {name} | room_school | minsu_normal |  |  | *가방을 내려놓고 의자를 빼려는데 앞자리에 앉아 있던  |
| 52 | `classroom_minsu_2` | 민수 | room_school | minsu_smirk |  |  | 야, 전학생. 우리 반에 온 걸 환영한다. 그리고 미리 |
| 53 | `classroom_minsu_3` | {name} | room_school | minsu_smirk |  |  | 갑자기 무슨 각오? |
| 54 | `classroom_minsu_2_b` | 민수 | room_school | minsu_normal |  |  | *옆자리의 다인을 향해 슬쩍 턱짓하며 씨익 웃는다.*  |
| 55 | `classroom_dain_talk_1` | {name} | room_school | minsu_normal |  |  | *장난스럽게 돌아앉는 앞자리 남학생의 교복 명찰에는 ' |
| 56 | `classroom_dain_talk_2` | 다인 | room_school | yuna_normal |  |  | 저 녀석 말은 신경 쓰지 마! 그보다 나 궁금한 거 하 |
| 57 | `classroom_dain_talk_3` | 다인 | room_school | yuna_normal |  |  | 야, {name}. 너 평소에 몸 움직이는 거나 운동  |
| 58 | `classroom_dain_talk_4` | {name} | room_school | yuna_normal |  |  | 운동은 왜, 갑자기? |
| 59 | `classroom_dain_talk_5` | 다인 | room_school | yuna_normal |  |  | 아니, 오늘 방과후에 리시브 연습을 좀 더 하고 싶은데 |
| 60 | `classroom_dain_talk_6` | {name} | room_school | yuna_normal |  |  | 전학생을 첫날부터 인간 볼 머신으로 쓰려고? |
| 61 | `classroom_dain_talk_7` | 다인 | room_school | yuna_normal |  |  | 에이, 설마! 그래도 기계보다는 사람이랑 호흡 맞추는  |
| 62 | `classroom_dain_talk_8` | 다인 | room_school | yuna_normal |  |  | 어때, 같이 해 볼래? *다인의 따뜻한 검지가 내 책상 |
| 63 | `classroom_yuna_note_1` | {name} | room_school | yuna_bored |  |  | *그때 뒷자리에서 반듯하게 접힌 종이쪽지 하나가 책상  |
| 64 | `classroom_yuna_note_3` | 유나 | room_school | yuna_bored |  |  | *조심스럽게 펼치자 은은한 연보라색 잉크 글씨와 모서리 |
| 65 | `classroom_yuna_note_5` | {name} | room_school | yuna_bored |  |  | *내가 고개를 들자 창가 햇살에 비치던 유나의 하얀 손 |
| 66 | `classroom_yuna_note_6` | {name} | room_school | yuna_bored |  |  | *1교시 시작을 알리는 종소리가 교실 안을 메운다. 창 |
| 67 | `lunch_start` | {name} | school_hallway | 없음 |  |  | *점심시간을 알리는 종소리와 함께 교실 공기가 들뜬다. |
| 68 | `lunch_start_4` | 서연 | school_hallway | seyoun_normal |  |  | 아까 말한 대로 옥상 올라올 거지? *계단참에서 걸음을 |
| 69 | `lunch_start_4_b` | {name} | school_hallway | dain_normal |  |  | *대답하려는 순간 옆에서 다가온 다인의 따뜻한 손바닥이 |
| 70 | `lunch_start_5` | 다인 | school_hallway | dain_normal |  |  | 야, 아직 점심 안 먹었지? 나랑 매점 뛰어가자. 빵  |
| 71 | `lunch_start_6` | 유나 | school_hallway | yuna_normal |  |  | 난 도서관 갈 건데. *내 옆을 스쳐 지나가며 가방끈을 |
| 72 | `lunch_start_7` | {name} | school_hallway | 없음 |  |  | *바람 부는 옥상과 달콤한 빵 냄새가 나는 매점, 그리 |
| 73 | `lunch_choice` | {name} | school_hallway | 없음 |  |  | *첫날의 점심시간, 누구의 발걸음을 따라갈까?* |
| 74 | `lunch_yuna_1` | {name} | library_old | yuna_normal |  |  | *복도의 소음이 멀어지는 계단을 지나 유나의 뒤를 따라 |
| 75 | `lunch_yuna_1_aff_default` | 유나 | library_old | yuna_normal |  |  | *따로 건네는 쪽지는 없었다. 유나는 햇살이 비스듬히  |
| 76 | `lunch_yuna_2` | 유나 | library_old | yuna_normal |  |  | 의자 끌 때 소리 나지 않게 살살. *하얀 검지로 펼쳐 |
| 77 | `lunch_yuna_4` | 유나 | library_old | yuna_normal |  |  | 잠깐만 기다려. *끼워 두었던 대출 영수증 끝을 반듯하 |
| 78 | `lunch_yuna_5` | {name} | library_old | yuna_normal |  |  | *5초, 다시 10초가 고요하게 흐른다. 유나는 접힌  |
| 79 | `lunch_yuna_5_b` | {name} | library_old | yuna_normal |  |  | 옆자리 비었으면 앉아도 돼? |
| 80 | `lunch_yuna_7` | 유나 | library_old | yuna_normal |  |  | *활자에서 눈을 떼지 않은 채 나직이 속삭인다.* 옆에 |
| 81 | `lunch_yuna_8` | 유나 | library_old | yuna_normal |  |  | 가방 내렸어. 이쪽 앉아. *옆 의자에서 자기 가방을  |
| 82 | `lunch_yuna_10` | {name} | library_old | yuna_normal |  |  | *나란히 앉은 책상 위로 벽시계 초침 소리와 종이 스치 |
| 83 | `lunch_yuna_10_b` | {name} | library_old | yuna_normal |  |  | *유나의 손끝이 낡은 책갈피에 적힌 흐릿한 글씨를 슬쩍 |
| 84 | `lunch_yuna_12` | 유나 | library_old | yuna_normal |  |  | *책장 너머로 붉은빛이 감도는 눈동자가 천천히 올라온다 |
| 85 | `lunch_yuna_13` | {name} | library_old | yuna_normal |  |  | 어? 진짜네. |
| 86 | `lunch_yuna_14` | 유나 | library_old | yuna_normal |  |  | 그 시리즈는 1권부터 차례대로 읽어야 이해돼. |
| 87 | `lunch_yuna_15` | 유나 | library_old | yuna_normal |  |  | 여기 있어. 이걸로 먼저 읽어. *자기 손옆에 쌓아 두 |
| 88 | `lunch_yuna_16` | {name} | library_old | yuna_normal |  |  | 빌려주는 거야? 고마워. |
| 89 | `lunch_yuna_17` | 유나 | library_old | yuna_normal |  |  | 다 읽으면 나한테 다시 돌려줘. |
| 90 | `lunch_yuna_18` | 유나 | library_old | yuna_normal |  |  | 그럼 이제 각자 읽자. *책상 하나를 사이에 두고 나란 |
| 91 | `lunch_yuna_20` | {name} | library_old | yuna_normal |  |  | *한참 만에 고개를 들자 창가 햇살을 등진 유나가 책  |
| 92 | `lunch_yuna_21` | {name} | library_old | yuna_normal |  |  | 왜 그래, 나한테 할 말 있어? |
| 93 | `lunch_yuna_22` | 유나 | library_old | yuna_normal |  |  | *유나가 얇은 책갈피를 페이지 사이에 끼워 넣는다.*  |
| 94 | `lunch_yuna_23` | {name} | library_old | yuna_normal |  |  | 그게 왜? |
| 95 | `lunch_yuna_24` | 유나 | library_old | yuna_normal |  |  | 생각보다 편했어. |
| 96 | `lunch_yuna_25` | 유나 | library_old | yuna_normal |  |  | *유나의 시선이 내가 쥔 책 표지를 스쳐 내 눈동자에  |
| 97 | `lunch_yuna_choice` | {name} | library_old | yuna_normal |  |  | *읽던 책을 천천히 덮으며 유나와 시선을 맞춘다.* |
| 98 | `lunch_yuna_c2_1` | 유나 | library_old | yuna_normal |  |  | 교실에 있어 봤자 딱히 할 일도 없으니까. |
| 99 | `lunch_yuna_c2_2` | 유나 | library_old | yuna_normal |  |  | 그래도 이 구석 자리는 꽤 마음에 들어. 아무도 안 찾 |
| 100 | `lunch_yuna_freetalk` | 유나 | library_old | yuna_normal |  |  | *유나가 덮은 책 표지 위로 하얀 두 손을 가만히 포갠 |
| 101 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *5교시 수업을 알리는 차임벨이 울려 퍼지며 짧고도 설 |
| 102 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *붉은 노을이 스며드는 방과후 복도. 주머니 속에서 진 |
| 103 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 104 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 그 가벼운 마지막 한 줄에 시선이  |
| 105 | `after_kakao_5` |  | 없음 | 없음 |  | 🌅 |  |
| 106 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *한참을 망설이다 조용히 단체방 나가기를 누른다. 텅  |
| 107 | `after1_jealousy_yuna_1` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 너 점심시간에 도서관 갔다 왔다며? 그것도 유나랑 |
| 108 | `after1_jealousy_yuna_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 신기하네, 걔 원래 옆에 누가 오는 거 진짜 싫어하거든 |
| 109 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *휴대폰을 주머니에 넣고 석양이 길게 드리운 복도를 따 |
| 110 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도 모퉁이를 돌려는데 등 뒤에서 운동화 바닥이 마룻 |
| 111 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 거기 앞 조심해! |
| 112 | `after_miss_dain_3` | 다인 | school_hallway | dain_normal |  | 🌅 | 휴, 아슬아슬하게 비켜 줬네! *내 어깨를 스치며 바람 |
| 113 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 방금 반사신경 꽤 괜찮았는데? 역시 운동 좀 해  |
| 114 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 하마터면 부딪힐 뻔했잖아. 복도에서 웬 전력질주야? |
| 115 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 배구부 집합 시간 늦었거든! 지금 당장 체육관 뛰어가야 |
| 116 | `after_miss_dain_6_b` | {name} | school_hallway | dain_pain |  | 🌅 | *돌아서서 두어 걸음 내딛던 다인이 순간 걸음을 멈추고 |
| 117 | `after_miss_dain_7` | 다인 | school_hallway | dain_laugh |  | 🌅 | 참, 내 이름 다인이야! 내일 와서 이름 까먹으면 안  |
| 118 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞 복도를 지나는데 붉은 눈동자의 여학생이 소 |
| 119 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 방금 책 사이에서 이거 떨어졌어. |
| 120 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *바닥에 내려앉은 낡은 책갈피를 조심스레 주워 건넨다. |
| 121 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | 다행이다, 모서리 안 구겨졌네. *하얀 손가락으로 책갈 |
| 122 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 주워 줘서 고마워. |
| 123 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *소중한 것을 감추듯 책갈피를 책등 깊숙이 끼워 넣고는 |
| 124 | `after_miss_yuna_4` |  | 없음 | 없음 |  | 🌅 |  |
| 125 | `after_miss_seoyeon_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *가방을 메고 신발장으로 내려가려는데 계단 앞 복도에서 |
| 126 | `after_miss_seoyeon_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 너 아까 점심시간에 어디 갔었어? |
| 127 | `after_miss_seoyeon_3` | {name} | school_hallway | seyoun_normal |  | 🌅 | 점심시간에 어디라니? |
| 128 | `after_miss_seoyeon_4` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 일부러 옥상 문까지 열어 두고 있었는데 끝까지 안 올라 |
| 129 | `after_miss_seoyeon_5` | {name} | school_hallway | seyoun_normal |  | 🌅 | 설마 옥상에서 계속 나 기다린 거야? |
| 130 | `after_miss_seoyeon_6` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 기다리긴 누가 기다려, 내 도시락 먼저 먹고 있었지.  |
| 131 | `after_miss_seoyeon_7` | {name} | school_hallway | seyoun_normal |  | 🌅 | *서연은 클립보드를 가슴께로 끌어안으며 시선을 살짝 피 |
| 132 | `after_miss_seoyeon_8` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 내일 점심엔 다른 데로 새지 마. |
| 133 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교를 알리는 안내 방송이 끝난 뒤 노을빛만 남은 복 |
| 134 | `after_hidden_homeroom_1` | {name} | school_hallway | 없음 |  | 🌅 | *반쯤 열린 교무실 문가에 서서 조심스레 노크한다.*  |
| 135 | `after_hidden_homeroom_aff` |  | teacher_office | 없음 |  | 🌅 |  |
| 136 | `after_hidden_homeroom_2` | 담임 | teacher_office | teacher_normal |  | 🌅 | 어, {name} 아니야? 아직 안 가고 무슨 일이야? |
| 137 | `after_hidden_homeroom_3` | 담임 | teacher_office | teacher_normal |  | 🌅 | 마침 한가하던 참이니까 이리 들어와. *팔꿈치까지 걷어 |
| 138 | `after_hidden_homeroom_3_b` | {name} | teacher_office | teacher_normal |  | 🌅 | 앞으로 학교생활 하면서 알아둬야 할 게 있어서 잠깐 여 |
| 139 | `after_hidden_homeroom_3_c` | 담임 | teacher_office | teacher_normal |  | 🌅 | 아, 그 얘기였어? 마침 잘 왔네, 거기 편하게 앉아. |
| 140 | `after_hidden_homeroom_4` | 담임 | teacher_office | teacher_normal |  | 🌅 | 사고 친 것도 아닌데 그렇게 긴장할 필요 없어. 오늘  |
| 141 | `after_hidden_homeroom_choice` | 담임선생님 | teacher_office | teacher_normal |  | 🌅 | *들고 있던 클립보드를 책상 위에 내려놓고 턱을 살짝  |
| 142 | `after_homeroom_honest_1` | 담임 | teacher_office | teacher_normal |  | 🌅 | 하긴, 정신없는 게 당연하지. 낯선 교실에서 첫날부터  |
| 143 | `after_homeroom_honest_2` | {name} | teacher_office | teacher_normal |  | 🌅 | 선생님도 학창 시절에 전학 다녀 보신 적 있어요? |
| 144 | `after_homeroom_honest_3` | 담임 | teacher_office | teacher_normal |  | 🌅 | 전학이랑은 조금 다르지만 아무 연고도 없는 낯선 곳에  |
| 145 | `after_homeroom_honest_3_b` | 담임선생님 | teacher_office | teacher_normal |  | 🌅 | *담임은 클립보드를 뒤집어 놓고 엄지손가락으로 매끄러운 |
| 146 | `after_homeroom_honest_4` | 담임 | teacher_office | teacher_normal |  | 🌅 | 교실 공기가 갑갑해지면 언제든 이리로 도망쳐 와. 따뜻 |
| 147 | `after_homeroom_honest_5` | {name} | teacher_office | teacher_normal |  | 🌅 | 교무실 오면 선생님이 직접 음료수도 사 주시는 거예요? |
| 148 | `after_homeroom_honest_6` | 담임 | teacher_office | teacher_normal |  | 🌅 | 우리 반 전학생을 향한 순수한 교육적 관심이라고 해 두 |
| 149 | `after_homeroom_honest_6_b` | 담임선생님 | teacher_office | teacher_normal |  | 🌅 | *장난기 어린 미소와 함께 엄지손가락으로 출석부의 살짝 |
| 150 | `after_homeroom_honest_choice2` | {name} | teacher_office | teacher_normal |  | 🌅 | *책상 모서리에 기댄 담임과의 거리가 한 뼘쯤 가까워진 |
| 151 | `after_homeroom_honest_choice2a` | 담임 | teacher_office | teacher_shy |  | 🌅 | 그래, 솔직히 좀 걱정됐어. 내 얼굴에 그렇게 티가 많 |
| 152 | `after_homeroom_honest_choice2a_b` | 담임선생님 | teacher_office | teacher_shy |  | 🌅 | *괜히 헛기침을 한 번 하며 출석부를 책상 모서리 선에 |
| 153 | `after_homeroom_honest_7` | 담임 | teacher_office | teacher_normal |  | 🌅 | 참, {name}. |
| 154 | `after_homeroom_honest_8` | {name} | teacher_office | teacher_normal |  | 🌅 | 네, 선생님? |
| 155 | `after_homeroom_honest_9` | 담임 | teacher_office | teacher_normal |  | 🌅 | 혼자 겉돌거나 적응 못 하는 눈치 보이면 내가 직접 붙 |
| 156 | `after_homeroom_honest_9_b` | {name} | teacher_office | teacher_normal |  | 🌅 | *복도 저편에서 다른 교사의 발소리가 들려오자 담임이  |
| 157 | `after_homeroom_honest_10` | 담임선생님 | school_hallway | teacher_normal |  | 🌅 | 나가는 길인데 복도 걸으면서 마저 얘기할까? *출석부를 |
| 158 | `after_homeroom_freetalk` | 담임 | school_hallway | teacher_normal |  | 🌅 | *교무실 문을 반쯤 닫아 둔 채 출석부를 옆구리에 끼고 |
| 159 | `night_start` | {name} | room_my | 없음 |  |  | *집으로 돌아와 아직 낯선 새 교복을 옷걸이에 걸어 두 |
| 160 | `night_start_3` | {name} | room_my | 없음 |  |  | *고요한 방 안, 머리맡에 둔 휴대폰이 짧게 진동하며  |
| 161 | `night_msg_yuna_1` | 유나 | room_my | yuna_normal | 0.35 |  | 오늘 점심엔 옆에서 조용히 있어 줘서 고마웠어 |
| 162 | `night_msg_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | 내일도 내 옆자리 비워 놓을게 |
| 163 | `night_msg_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *짧고 담백한 '내 옆자리 비워 놓을게'라는 문장을 몇 |
| 164 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 대화창을 닫으려는데 상단 알림 바에 학교 앱  |
| 165 | `night_hidden_homeroom_1` | {name} | room_my | teacher_normal | 0.35 |  | *학급 공지 앱에 담임선생님이 방금 올린 글이 보인다. |
| 166 | `night_hidden_homeroom_2` | {name} | room_my | teacher_normal | 0.35 |  | *공지사항 마지막 줄에 덧붙여진 다정한 한 문장을 한  |
| 167 | `night_late_transition` | {name} | room_my | 없음 |  |  | *불을 끄고 막 눈을 감으려는데 정적을 깨고 휴대폰이  |
| 168 | `night_late_branch` | {name} | room_my | 없음 |  |  | *어두운 방 안, 손에 쥔 액정 화면이 하얗게 빛을 낸 |
| 169 | `night_end_1` | {name} | room_my | 없음 |  |  | *휴대폰을 내려놓고 어두운 천장을 올려다본다. 옷걸이에 |
| 170 | `night_end_3` | {name} | room_my | 없음 |  |  | *연락처에 나란히 저장된 새로운 이름들을 한 번 더 눈 |
| | **Day 2** | | | | | | |
| 171 | `morning2_start` | {name} | room_school | 없음 |  |  | *전학 온 지 이틀째 아침. 교복 소매에 남았던 빳빳한 |
| 172 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 173 | `morning2_greet_none_tone` |  | room_school | 없음 |  |  |  |
| 174 | `morning2_greet_none_1` | {name} | room_school | 없음 |  |  | *교실 문을 열고 들어서도 먼저 다가오는 사람은 없다. |
| 175 | `morning2_greet_none_2` | {name} | room_school | yuna_normal |  |  | *서연은 교탁 앞에서 출석부만 넘기고 다인은 반대편 친 |
| 176 | `morning2_yuna_seen` | 유나 | room_school | yuna_normal |  |  | ...너 혹시 전학 오기 전에도 이 학교에 와 본 적  |
| 177 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *가방을 걸고 자리에 앉으려는데 책상 한가운데에 정갈하 |
| 178 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 179 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가던 서연이 열린 교실 앞문 틈으로 고개를 |
| 180 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 바쁜 학생회장이 아침부터 남의 교실 앞까지 직접 인사하 |
| 181 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 교무실에 서류 갖다주러 가는 길에 잠깐 멈춘 거야. 그 |
| 182 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | 얼굴 확인했으니까 이제 간다. 아침 조회 늦지 말고.  |
| 183 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연의 긴 머리카락이 사라진 복도 쪽을 바라보고 있는 |
| 184 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 온 지 이틀 만에 학생회장님이 직접 문 앞까 |
| 185 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 그건 그냥 네가 인기가 없는 게 아닐까. |
| 186 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 뼈 때리지 마라, 사실이긴 한데 지금 그게 핵심이 아니 |
| 187 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *복도 유리창 너머로 클립보드를 가슴에 안은 서연이 귓 |
| 188 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 오호, 도도한 회장님도 우리 전학생한테 꽤 관심 있나  |
| 189 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | 방금 '우리' 전학생이라고 했어? |
| 190 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 당연하지, 같은 반에다 바로 옆자리 짝꿍이잖아! 그 정 |
| 191 | `hidden_homeroom_d2_1` | 담임선생님 | school_hallway | teacher_normal |  |  | 마침 잘 만났네, {name}. 지금 나랑 잠깐 교무실 |
| 192 | `hidden_homeroom_d2_1_b` | {name} | school_hallway | teacher_normal |  |  | 저 혹시 무슨 문제라도 생겼어요? |
| 193 | `hidden_homeroom_d2_1_c` | 담임선생님 | school_hallway | teacher_normal |  |  | 겁먹을 것 없어, 전학 서류 마저 확인할 게 남아서 그 |
| 194 | `hidden_homeroom_d2_2` | {name} | school_hallway | teacher_normal |  |  | *담임의 팔에 안긴 출석부 사이로 내 이름이 적힌 전학 |
| 195 | `hidden_homeroom_d2_2_b` | {name} | teacher_office | teacher_normal |  |  | *담임의 책상 앞에 다가가자 반쯤 열린 서랍 틈으로 빽 |
| 196 | `hidden_homeroom_d2_3` | 담임선생님 | teacher_office | teacher_normal |  |  | 응, 앉아. 그나저나 이전 학교 생활기록부 보니까 국어 |
| 197 | `hidden_homeroom_d2_3_b` | {name} | teacher_office | teacher_normal |  |  | 교과서 말고 소설책 읽는 건 꽤 좋아하는 편이에요. |
| 198 | `hidden_homeroom_d2_3_c` | {name} | teacher_office | teacher_normal |  |  | 선생님께서 소설 이야기를 꺼내실 줄은 몰랐어요. 그냥  |
| 199 | `hidden_homeroom_d2_3_d` | 담임선생님 | teacher_office | teacher_normal |  |  | 읽는 걸 좋아한다라. 그럼 직접 글을 써 본 적은 없고 |
| 200 | `hidden_homeroom_d2_3_e` | {name} | teacher_office | teacher_normal |  |  | *성적표 위에 얹힌 담임의 가느다란 손가락이 서랍 속  |
| 201 | `hidden_homeroom_d2_3_f` | {name} | teacher_office | teacher_normal |  |  | 직접 쓰는 건 아직 제 취향인지 잘 모르겠어요. |
| 202 | `hidden_homeroom_d2_3_g` | 담임선생님 | teacher_office | teacher_normal |  |  | 어라, 서랍 레일이 또 걸렸네. *두꺼운 원고지 모서리 |
| 203 | `hidden_homeroom_d2_choice1` | {name} | teacher_office | teacher_normal |  |  | *서랍에서 손을 거둔 담임이 찻잔 위로 피어오르는 김  |
| 204 | `hidden_homeroom_d2_choice1_b` | 담임선생님 | teacher_office | teacher_normal |  |  | *도자기 커피잔 손잡이를 손끝으로 천천히 한 바퀴 굴린 |
| 205 | `hidden_homeroom_d2_5` | 담임선생님 | teacher_office | teacher_normal |  |  | 뭐, 대단한 뜻이 있어서 물은 건 아니고 그냥 궁금해서 |
| 206 | `hidden_homeroom_d2_6` | 담임선생님 | teacher_office | teacher_normal |  |  | 내 책상이 좀 어수선하지? *삐져나온 원고지 뭉치를 안 |
| 207 | `hidden_homeroom_d2_7` | 담임선생님 | teacher_office | teacher_normal |  |  | 그래서 이틀째 지내 보니까 어때? 어제보단 교실 공기가 |
| 208 | `hidden_homeroom_d2_7_b` | {name} | teacher_office | teacher_normal |  |  | 네, 어제보다 훨씬 편해졌어요. 반 애들도 먼저 말 걸 |
| 209 | `hidden_homeroom_d2_8` | 담임선생님 | teacher_office | teacher_normal |  |  | 옆자리 다인이가 워낙 시끌벅적하지? 원래 저렇게 해맑은 |
| 210 | `hidden_homeroom_d2_8_b` | {name} | teacher_office | teacher_normal |  |  | 선생님께서 그렇게 말씀하시는 걸 보니 다인이가 교무실에 |
| 211 | `hidden_homeroom_d2_8_c` | 담임선생님 | teacher_office | teacher_normal |  |  | 유명하다기보다는 담임으로서 자꾸 신경이 쓰여서 그렇지. |
| 212 | `hidden_homeroom_d2_8_d` | {name} | teacher_office | teacher_normal |  |  | *펼쳐진 출석부의 '다인'이라는 두 글자 옆에서 담임이 |
| 213 | `hidden_homeroom_d2_8_e` | 담임선생님 | teacher_office | teacher_normal |  |  | *커피잔을 소리 없이 내려놓는다.* 아무튼 네 전학 서 |
| 214 | `hidden_homeroom_d2_8_f` |  | 없음 | 없음 |  |  |  |
| 215 | `hidden_homeroom_d2_9` | {name} | teacher_office | teacher_normal |  |  | 세심하게 챙겨 주셔서 감사합니다, 선생님. |
| 216 | `hidden_homeroom_d2_10` | 담임선생님 | teacher_office | teacher_normal |  |  | 이 정도는 담임이 당연히 해야 할 일이야. 괜히 마음의 |
| 217 | `hidden_homeroom_d2_choice2` | {name} | teacher_office | teacher_normal |  |  | *담임의 손끝이 코르크 컵받침 모서리를 같은 자리에서  |
| 218 | `hidden_homeroom_d2_choice2_b` | 담임선생님 | teacher_office | teacher_normal |  |  | 그래, 빈말이라도 그렇게 고마워해 주니 보람이 있네. |
| 219 | `hidden_homeroom_d2_11` | 담임선생님 | teacher_office | teacher_normal |  |  | 반에 다른 애들도 답답한 일 있으면 종종 찾아오거든.  |
| 220 | `hidden_homeroom_d2_11_b` | 담임선생님 | teacher_office | teacher_normal |  |  | 교무실 찾아오는 걸 미안해할 필요 전혀 없어. 그리고  |
| 221 | `hidden_homeroom_d2_12` |  | 없음 | 없음 |  |  |  |
| 222 | `hidden_homeroom_d2_freetalk` | 담임선생님 | teacher_office | teacher_normal |  |  | *담임이 의자를 내 쪽으로 돌린다.* 아직 궁금한 건  |
| 223 | `morning2_seo_dust_1` | 서연 | school_hallway | seyoun_normal |  |  | 너 1교시 수업 듣는 동안 대체 뭘 한 거야. *쉬는  |
| 224 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 움직이지 말고 잠깐 가만히 있어 봐. |
| 225 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *한 걸음 다가선 서연의 하얀 손끝이 내 교복 어깨에  |
| 226 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 어깨에 분필 가루 같은 게 묻어 있었어. |
| 227 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | 말도 없이 갑자기 손이 훅 들어와서 놀랐잖아. *괜히  |
| 228 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 뭘 그렇게까지 놀라? 그냥 먼지 털어 준 건데. |
| 229 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *분명 먼지는 다 털어 냈는데도 서연의 손끝이 닿았던  |
| 230 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 방금 그거 뭐야? 학생회장이 네 어깨 만진 거 맞 |
| 231 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 만진 게 아니라 어깨에 묻은 먼지 털어 준 거야. |
| 232 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 수상한데, 거기 진짜로 먼지가 붙어 있긴 했어? |
| 233 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | 진짜로 먼지 털어 준 것뿐이라니까. 왜 눈을 그렇게 뜨 |
| 234 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *아침에 받은 유나의 쪽지를 손안에 쥔다. 수업 사이마 |
| 235 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *이틀째 점심시간, 누구의 곁으로 향할까.* |
| 236 | `lunch2_seo_1_check` | {name} | school_hallway | 없음 |  |  | *햇살이 쏟아지는 위층 계단을 따라 옥상으로 올라간다. |
| 237 | `lunch2_seo_1b` | 서연 | top_school | seyoun_normal |  |  | 옥상 올라온 건 오늘이 처음이지? 이쪽 그늘에 앉으면  |
| 238 | `lunch2_seo_2b_check` |  | top_school | seyoun_normal |  |  |  |
| 239 | `lunch2_seo_2b_yuna_aff` |  | top_school | 없음 |  |  |  |
| 240 | `lunch2_seo_2b_cool` | 서연 | top_school | seyoun_normal |  |  | 원래 옥상은 학생회 허가제야. 오늘만 예외로 봐줄게. |
| 241 | `lunch2_seo_cool_cont` | {name} | top_school | seyoun_normal |  |  | *조용히 도시락 뚜껑이 열리고 두 사람 사이로 서늘한  |
| 242 | `lunch2_seo_cool_leave` | {name} | school_hallway | 없음 |  |  | *어색한 침묵 끝에 도시락 뚜껑을 덮고 옥상 철문을 나 |
| 243 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *종례가 끝난 방과 후 교실. 쉬는 시간마다 꺼냈던 휴 |
| 244 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 당장 체육관으로 튀어 와! 오늘은 진짜 제대로 된 내기 |
| 245 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 방과후에 학생회실로 잠깐 와 줄 수 있어? 오늘따라 일 |
| 246 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게선 따로 온 메시지가 없다. 대신 주머니 속  |
| 247 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *석양이 물들기 시작하는 방과후, 어디로 발걸음을 옮길 |
| 248 | `after2_yuna_1` | {name} | annex_exhibit_hallway | 없음 |  | 🌅 | *아침에 받았던 쪽지를 떠올리며 인적 드문 도서관 별관 |
| 249 | `after2_yuna_1_b` | {name} | annex_exhibit_hallway | 없음 |  | 🌅 | *노을이 비스듬히 스며든 별관 복도에는 인기척 하나 없 |
| 250 | `after2_yuna_2` | {name} | yuna_hideout_day.webp | yuna_normal |  | 🌅 | *문을 밀자 경첩이 나직이 삐걱거린다. 안쪽 소파에 깊 |
| 251 | `after2_yuna_tone` |  | yuna_hideout_day.webp | 없음 |  | 🌅 |  |
| 252 | `after2_yuna_cool_1` | 유나 | yuna_hideout_day.webp | yuna_bored |  | 🌅 | *소파 위 이어폰 한쪽만 슬쩍 치운다.* 옆에서 책 읽 |
| 253 | `after2_yuna_cool_cont` | {name} | yuna_hideout_day.webp | yuna_bored |  | 🌅 | *펼쳐진 책 한 페이지를 조용히 내려 읽는다. 유나는  |
| 254 | `after2_yuna_rival_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 255 | `after2_yuna_rival_dain_low` | 다인 | school_hallway | dain_laugh |  | 🌅 | 도서관 별관 쪽에 있었구나? 조심히 들어가고 내일 봐! |
| 256 | `after2_yuna_rival_seo_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 257 | `after2_yuna_rival_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 부족하던 일손은 다른 부원들로 채웠어. 내일 보자. |
| 258 | `after2_group_yuna_companion` | 유나 | library_old | 없음 |  | 🌅 | *별관 책상에 자료 두 묶음이 놓인다.* 한쪽을 끝내기 |
| 259 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *미묘한 여운이 감도는 대화를 마치고 가방을 고쳐 멘  |
| 260 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 261 | `minsu_warn_1` | {name} | school | 없음 |  | 🌅 | *노을이 지는 하교길. 교문을 막 나서는데 등 뒤에서  |
| 262 | `minsu_warn_1_b` | 민수 | school | minsu_normal |  | 🌅 | *내 보폭에 맞춰 옆에 나란히 서더니 주머니에 두 손을 |
| 263 | `minsu_warn_2` | 민수 | school | minsu_smirk |  | 🌅 | 야, 전학생. |
| 264 | `minsu_warn_3` | {name} | school | minsu_smirk |  | 🌅 | 응? 왜 불러? |
| 265 | `minsu_warn_4` | 민수 | school | minsu_smirk |  | 🌅 | 너 요즘 학교 다니는 거 꽤 재밌냐? |
| 266 | `minsu_warn_4_b` | {name} | school | minsu_normal |  | 🌅 | *민수는 내 쪽을 보지 않고 교문 건너편 깜빡이는 횡단 |
| 267 | `minsu_warn_5` | {name} | school | minsu_smirk |  | 🌅 | 갑자기 그게 무슨 소리야? |
| 268 | `minsu_warn_6` | 민수 | school | minsu_smirk |  | 🌅 | 점심엔 한 명, 방과후엔 또 한 명. 넌 재밌겠지. — |
| 269 | `night2_start` | {name} | room_my | 없음 |  |  | *따뜻한 물로 샤워를 마치고 젖은 머리를 털며 침대에  |
| 270 | `night2_msg_1` |  | 없음 | 없음 |  |  |  |
| 271 | `night2_msg_generic` | 다인 | room_my | dain_normal | 0.35 |  | 야 내일 아침에 교실에서 보자 늦지 마! |
| 272 | `night2_msg_generic_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 점심엔 옥상 열어 놓을게 |
| 273 | `night2_msg_generic_3` |  | 없음 | 없음 |  |  |  |
| 274 | `night2_msg_generic_3_established` | 유나 | room_my | yuna_normal | 0.35 |  | 내가 빌려준 책, 어디까지 읽었어? |
| 275 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *나란히 도착한 대화방 세 개를 번갈아 바라본다. 누구 |
| 276 | `night2_choice` | {name} | room_my | 없음 |  |  | *세 개의 말풍선 중 누구에게 가장 먼저 답장을 보낼까 |
| 277 | `night2_reply_dain_1` |  | 없음 | 없음 |  |  |  |
| 278 | `night2_reply_dain_1_first` | {name} | room_my | dain_normal | 0.35 |  | 내일 학교 앞에서 떡볶이 먹을래? 난 매운 건 좀 약한 |
| 279 | `night2_reply_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | 어라 너 설마 매운 거 잘 못 먹는 체질이야? |
| 280 | `night2_reply_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | 그럼 내일은 너 맞춰서 제일 순한 맛으로 시켜 줄게. |
| 281 | `night2_reply_dain_4` | 다인 | room_my | dain_normal | 0.35 |  | 아 근데 솔직히 안 매운 건 떡볶이라고 부르면 안 되지 |
| 282 | `night2_reply_dain_5` | {name} | room_my | dain_normal | 0.35 |  | *오늘 밤에도 다인다운 경쾌한 말풍선이 세 줄 연속으로 |
| 283 | `night2_reply_dain_react_default` | 다인 | room_my | dain_normal | 0.35 |  | ㅋㅋ 오케이 알겠어. 오늘 푹 자고 굿나잇! |
| 284 | `night2_dain_freetalk` | 다인 | room_my | dain_normal | 0.35 | 🌙 | 잠깐, 진짜 자기 전에. 오늘 제일 재밌었던 건 뭐였어 |
| 285 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 창을 정리하려는데 상단 알림 목록 사이에 학교 |
| 286 | `night2_hidden_homeroom_1` | {name} | room_my | teacher_normal | 0.35 |  | *학교 학사 상담 시스템에 새 알림이 떠 있다. '전학 |
| 287 | `night2_hidden_homeroom_2` | {name} | room_my | teacher_normal | 0.35 |  | *담임선생님의 이름 바로 아래에 방과후 교무실 비어 있 |
| 288 | `night2_hidden_homeroom_3` | {name} | room_my | teacher_normal | 0.35 |  | *화면 아래의 상담 예약 버튼 위치를 눈으로 확인한 뒤 |
| 289 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 마치고 길게 숨을 내쉬며 베개 옆으로 휴대폰을 |
| 290 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *남은 두 사람에게도 답장을 보내려다 손가락이 굳는다. |
| 291 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *사진첩 스크롤을 끝까지 내리자 나타난 3개월 전 봄  |
| 292 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *차마 전송 버튼을 누르지 못했던 문장들이 휴대폰 메모 |
| 293 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 임시 저장 메모가 마지막 문장이다. 그 아래 |
| 294 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *떨리는 엄지손가락을 사진 아래 휴지통 삭제 아이콘 위 |
| 295 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *다시 켠 메신저 목록에는 아직 내가 답하지 못한 두  |
| 296 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *방금 닫았던 소정이의 사진을 한 번 더 열어 본다.  |
| 297 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *가슴 한구석이 묵직하게 내려앉아 끝내 나머지 두 개의 |
| 298 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면 위로 세 사람의 이름이 나란히 쌓여 있다.  |
| 299 | `night2_end_2_b` |  | 없음 | 없음 |  |  |  |
| 300 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *액정 불빛이 완전히 꺼진 뒤에도 미지근한 열기가 남은 |
| 301 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *잠이 오지 않아 부엌으로 나와 불을 켠다. 내일 싸  |
| 302 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *서툰 손길로 부쳐 낸 계란말이와 소시지, 김과 밥을  |
| | **Day 3** | | | | | | |
| 303 | `morning3_start` | {name} | school | 없음 |  |  | *전학 사흘째, 금요일 아침. 밤늦도록 깜빡이는 메시지 |
| 304 | `morning3_start_2` | {name} | school | 없음 |  |  | *어깨에 멘 가방끈을 꽉 쥐고 숨이 턱 끝까지 차오르도 |
| 305 | `hidden_homeroom_d3_1` | {name} | room_school | teacher_normal |  |  | 선생님, 여기 계셨네요. *아무도 없는 빈 교실 문을  |
| 306 | `hidden_homeroom_d3_3` | 담임선생님 | room_school | teacher_shy |  |  | *미처 거두지 못한 펜촉 끝에서 검은 잉크 점 하나가  |
| 307 | `hidden_homeroom_d3_3_b` | 담임선생님 | room_school | teacher_shy |  |  | *담임선생님이 당황한 기색을 감추며 손바닥으로 종이 한 |
| 308 | `hidden_homeroom_d3_4` | 담임선생님 | room_school | teacher_sad |  |  | 별거 아니야, 그냥 학교 업무 서류 정리하던 중이었어. |
| 309 | `hidden_homeroom_d3_4_b` | {name} | room_school | teacher_sad |  |  | *뒤집힌 종이 뒷면으로 수없이 고쳐 쓴 손글씨와 붉은  |
| 310 | `hidden_homeroom_d3_4_c` | 담임선생님 | room_school | teacher_sad |  |  | *담임은 출석부를 끌어당겨 원고지 위를 덮으려 하지만  |
| 311 | `hidden_homeroom_d3_4_d` | 담임선생님 | room_school | teacher_sad |  |  | *목소리가 반 톤 낮아진다.* 뭘 그렇게 유심히 봐.  |
| 312 | `hidden_homeroom_d3_4_g` | {name} | room_school | teacher_sad |  |  | *원고지 첫 장 귀퉁이에 적힌 빨간 글씨, '보류'.  |
| 313 | `hidden_homeroom_d3_choice` | {name} | room_school | teacher_normal |  |  | *교탁 하나를 사이에 둔 가까운 거리. 담임이 원고 끝 |
| 314 | `hidden_homeroom_d3_reveal_1` | 담임선생님 | room_school | teacher_normal |  |  | *담임의 어깨에서 긴장이 풀리며 낮은 숨소리가 흩어진다 |
| 315 | `hidden_homeroom_d3_reveal_1_b` | {name} | room_school | teacher_normal |  |  | 7년이나요? |
| 316 | `hidden_homeroom_d3_reveal_1_c` | 담임선생님 | room_school | teacher_normal |  |  | 응, 7년. 대학 문예창작과 다닐 때 첫 줄을 썼거든. |
| 317 | `hidden_homeroom_d3_reveal_1_d` | {name} | room_school | teacher_normal |  |  | 선생님이 문예창작과 출신이셨어요? |
| 318 | `hidden_homeroom_d3_reveal_1_e` | 담임선생님 | room_school | teacher_normal |  |  | 졸업 무렵에 신춘문예랑 공모전에 몇 번 냈는데 다 떨어 |
| 319 | `hidden_homeroom_d3_reveal_1_f` | 담임선생님 | room_school | teacher_normal |  |  | *담임이 뒤집어 두었던 원고지 한 장을 천천히 들어 올 |
| 320 | `hidden_homeroom_d3_reveal_2` | 담임선생님 | room_school | teacher_normal |  |  | 마지막 투고 결과를 기다리던 날, 끝내 당선 연락이 안 |
| 321 | `hidden_homeroom_d3_reveal_2_b` | 담임선생님 | room_school | teacher_normal |  |  | 학교에 자리 잡으면 자연히 잊힐 줄 알았는데 자취방과  |
| 322 | `hidden_homeroom_d3_reveal_2_c` | {name} | room_school | teacher_normal |  |  | 차마 버리지 못하고 여기까지 데려오신 거네요. |
| 323 | `hidden_homeroom_d3_reveal_2_d` | 담임선생님 | room_school | teacher_normal |  |  | *담임은 흩어진 원고 모서리를 가지런히 맞추다 작게 한 |
| 324 | `hidden_homeroom_d3_reveal_2_e` | 담임선생님 | room_school | teacher_normal |  |  | 미련이라고 부르면 아픈데, 그냥 버리기 아까운 종이 뭉 |
| 325 | `hidden_homeroom_d3_reveal_2_f` | 담임선생님 | room_school | teacher_normal |  |  | *닳아빠진 원고지 귀퉁이를 손끝으로 쓸어내리던 담임이  |
| 326 | `hidden_homeroom_d3_reveal_3` | 담임선생님 | room_school | teacher_normal |  |  | 그렇게 남들 글을 가르치는 국어 교사가 됐어. 우습지, |
| 327 | `hidden_homeroom_d3_reveal_3_b` | {name} | room_school | teacher_normal |  |  | 정말로 포기하신 거예요? |
| 328 | `hidden_homeroom_d3_reveal_3_c` | 담임선생님 | room_school | teacher_normal |  |  | *원고지 위에 얹혀 있던 담임의 손가락이 미세하게 떨리 |
| 329 | `hidden_homeroom_d3_reveal_4` | 담임선생님 | room_school | teacher_normal |  |  | 포기했다고 말하면 깔끔하겠지. 그런데 수업 비는 시간마 |
| 330 | `hidden_homeroom_d3_reveal_4_b` | {name} | room_school | teacher_normal |  |  | *손때가 묻어 부드러워진 원고 가장자리. 담임의 손끝이 |
| 331 | `hidden_homeroom_d3_reveal_4_c` | 담임선생님 | room_school | teacher_normal |  |  | *담임이 원고지 뭉치를 출석부 옆으로 따로 떼어 놓는다 |
| 332 | `hidden_homeroom_d3_reveal_4_d` | {name} | room_school | teacher_normal |  |  | 저도 한 번 읽어 보면 안 돼요? |
| 333 | `hidden_homeroom_d3_reveal_4_e` | 담임선생님 | room_school | teacher_normal |  |  | *담임이 고개를 들어 내 눈을 똑바로 마주 본다.* 다 |
| 334 | `hidden_homeroom_d3_reveal_4_f` | 담임선생님 | room_school | teacher_normal |  |  | *담담하게 말을 마치고도 긴장이 가시지 않는지 원고 귀 |
| 335 | `hidden_homeroom_d3_reveal_4_g` | {name} | room_school | teacher_normal |  |  | 네, 합평회 날 공개되면 누구보다 먼저 읽을게요. |
| 336 | `hidden_homeroom_d3_reveal_choice` | {name} | room_school | teacher_normal |  |  | *7년이라는 세월이 내려앉은 원고지 위로 아침 햇살이  |
| 337 | `hidden_homeroom_d3_reveal_choice_b` | 담임선생님 | room_school | teacher_normal |  |  | 아이들이 빠져나간 빈 교실이 교무실보다 훨씬 조용하거든 |
| 338 | `hidden_homeroom_d3_reveal_5` | 담임선생님 | room_school | teacher_normal |  |  | 이번 주 안으로 국어과 동료 선생님들께도 먼저 보여 드 |
| 339 | `hidden_homeroom_d3_reveal_6` | 담임선생님 | room_school | teacher_smile |  |  | *담임은 아랫입술을 한 번 지그시 깨물었다 놓으면서도  |
| 340 | `hidden_homeroom_d3_reveal_6_b` | 담임선생님 | room_school | teacher_normal |  |  | 지금까지는 밤마다 혼자 고치고 혼자 지웠는데 이번엔 남 |
| 341 | `hidden_homeroom_d3_reveal_6_c` | {name} | room_school | teacher_smile |  |  | *담임이 작게 헛기침하며 원고 모서리를 탁탁 맞춘다.  |
| 342 | `hidden_homeroom_d3_reveal_6_d` | 담임선생님 | room_school | teacher_normal |  |  | 고맙다. 오늘 네가 먼저 물어봐 주지 않았으면 또 겁이 |
| 343 | `hidden_homeroom_d3_reveal_6_e` | 담임선생님 | room_school | teacher_smile |  |  | *담임의 엄지 끝에 눌린 원고지 귀퉁이가 미세하게 휘어 |
| 344 | `hidden_homeroom_d3_reveal_6_f` | 담임선생님 | room_school | teacher_normal |  |  | 원고에 대한 자세한 감상은 문예부 합평회 날 정식으로  |
| 345 | `hidden_homeroom_d3_reveal_6_g` | 담임선생님 | room_school | teacher_smile |  |  | 나머지 분량은 서류 봉투에 넣어 둬야겠어. *원고 뭉치 |
| 346 | `hidden_homeroom_d3_end` | 담임선생님 | room_school | teacher_smile |  |  | *담임이 원고를 갈무리해 덮어 두고 교탁 옆 창문을 활 |
| 347 | `hidden_homeroom_d3_freetalk` | 담임선생님 | room_school | teacher_normal |  |  | *원고를 서류 파일에 반듯하게 끼워 넣은 담임이 교탁에 |
| 348 | `hidden_nurse_d3_check` | {name} | room_school | 없음 |  |  | *쉬는 시간이 끝나 가고 복도 끝에서 발소리가 분주해진 |
| 349 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | *복도 창가에서 서연이 반 걸음 다가서며 목소리를 낮춘 |
| 350 | `morning3_date_seo_skip` |  | school_hallway | 없음 |  |  |  |
| 351 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끄고는 눈이 마주치 |
| 352 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 자, 그럼 이제 내 차례지! 이번 주말에 나랑 오락실  |
| 353 | `morning3_date_dain_skip` |  | room_school | 없음 |  |  |  |
| 354 | `morning3_date_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 이쪽을 흘끗 보다가 가방 지퍼를 끝까지 당겨  |
| 355 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심시간 직전, 유나가 소리 없이 다가와 네모나게 접 |
| 356 | `morning3_date_yuna_skip` |  | room_school | 없음 |  |  |  |
| 357 | `morning3_date_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 접어 둔 쪽지 끝을 만지작거리다 다시 책갈피  |
| 358 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 359 | `morning3_end` | {name} | room_school | 없음 |  |  | *오전 마지막 수업을 끝내는 종이 울리고 폭풍 전야 같 |
| 360 | `morning3_end_b` |  | 없음 | 없음 |  |  |  |
| 361 | `lunch3_start` | 유나 | room_school | yuna_normal |  |  | 내 빵도 반 나눠 먹어. *사흘째 점심, 교실에서 책상 |
| 362 | `lunch3_start_2_b` | 다인 | room_school | yuna_normal |  |  | 이 계란말이, 내가 먼저 먹어도 되는 거지? 일단 맛부 |
| 363 | `lunch3_meal_1` | 다인 | room_school | yuna_normal |  |  | 오, 간 딱 맞는데! 회장님도 얼른 드세요. 오늘은 옆 |
| 364 | `lunch3_meal_2` | {name} | room_school | yuna_normal |  |  | 잠깐만, 그건 내 도시락 반찬인데. |
| 365 | `lunch3_meal_3` | 서연 | room_school | yuna_normal |  |  | *서연이 내 도시락에서 계란말이 한 조각을 집어 맛본다 |
| 366 | `lunch3_meal_4` | {name} | room_school | yuna_normal |  |  | 남의 점심 반찬에 냉정하게 점수 매기지 마. |
| 367 | `lunch3_meal_5` | 서연 | room_school | yuna_normal |  |  | *서연의 입꼬리가 얄밉게 올라간다.* 10점 만점에 6 |
| 368 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *말없이 지켜보던 유나가 젓가락을 뻗어 도시락 한가운데 |
| 369 | `lunch3_meal_7` | {name} | room_school | yuna_normal |  |  | 유나야, 그 칼집 낸 소시지는 내가 제일 아껴 둔 건데 |
| 370 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *유나가 소시지를 천천히 베어 물며 맞은편의 다인을 바 |
| 371 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | 어, 잠깐만! 그건 마지막 남은 조각이야. *내 외침과 |
| 372 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *텅 빈 도시락통 한가운데에 노릇하게 구워진 마지막 계 |
| 373 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *숨소리조차 잦아든 식탁 위, 마지막 반찬을 건넬 사람 |
| 374 | `lunch3_give_yuna_aff` |  | room_school | 없음 |  |  |  |
| 375 | `lunch3_give_yuna_1` | 유나 | room_school | yuna_normal |  |  | *유나의 눈동자가 작게 흔들리더니 이내 옅은 미소가 번 |
| 376 | `lunch3_yuna_skin_check` |  | room_school | yuna_normal |  |  |  |
| 377 | `lunch3_give_yuna_2_check` |  | room_school | 없음 |  |  |  |
| 378 | `lunch3_give_yuna_seo_affinity` |  | room_school | 없음 |  |  |  |
| 379 | `lunch3_give_yuna_seo_low` | 서연 | room_school | seyoun_normal |  |  | *서연은 말없이 자기 도시락통과 수저집을 정리한다.* |
| 380 | `lunch3_give_yuna_3_check` |  | room_school | 없음 |  |  |  |
| 381 | `lunch3_give_yuna_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 빈 물병을 가방 옆주머니에 꽂아 넣는다.* 난 |
| 382 | `lunch3_end` | {name} | room_school | 없음 |  |  | *점심시간 종료를 알리는 종소리에 각자 도시락을 덮는다 |
| 383 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과 후, 노을빛 복도 갈림길에 선다. 사흘째 지나는 |
| 384 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *주머니 속 휴대폰을 만지작거린다. 엉켜 버린 주말 약 |
| 385 | `after3_choice` | {name} | school_hallway | 없음 |  | 🌅 | *석양이 물드는 복도 끝, 어디로 발걸음을 옮길까.* |
| 386 | `after3_walk_home` | {name} | school_hallway | 없음 |  | 🌅 | *오늘은 누구에게도 섣불리 말을 붙일 자신이 없다. 무 |
| 387 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *길었던 방과 후 시간이 끝났다. 복도 천장의 형광등이 |
| 388 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 389 | `after3_group_teacher_companion` | 담임선생님 | school_event_classroom | 없음 |  | 🌅 | *창문이 열린 교실 교탁 위에 문예 행사 원고 뭉치와  |
| 390 | `after3_group_return` | {name} | school_hallway | 없음 |  | 🌅 | *남은 일손 돕기를 마치고 저물어 가는 복도로 나온다. |
| 391 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 392 | `minsu_d3_check` | {name} | 없음 | 없음 |  | 🌅 |  |
| 393 | `night3_start` | {name} | room_my | 없음 |  |  | *금요일 밤, 지친 몸으로 방에 돌아와 교복 차림으로  |
| 394 | `night3_start_2` | {name} | room_my | 없음 |  |  | *불도 켜지 않은 방 안, 책상 위에 엎어 두었던 휴대 |
| 395 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *어두운 천장 아래로 휴대폰 불빛이 번진다. 도착해 있 |
| 396 | `night3_dream_1` | {name} | room_my | 없음 |  |  | *스탠드 조명을 끄려다 휴대폰을 한 번 더 집어 든다. |
| 397 | `night3_dream_2_b` | {name} | room_my | 없음 |  |  | *머리맡에 휴대폰을 내려놓는다. 내일 아침 마주 보며  |
| 398 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *잠들기 전, 휴대폰 갤러리 깊숙한 곳에서 예전 학교의 |
| 399 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *화면에 '이 사진을 삭제하시겠습니까?'라는 확인 창이 |
| 400 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *푸르스름한 액정 빛을 가만히 내려다본다. 소정이의 책 |
| 401 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *확인 창에서 조용히 취소를 누른다. 사진 한 장을 지 |
| 402 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼 대신 이동 메뉴를 눌러 사진을 새 폴더로  |
| 403 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *사진 아래에 짧은 메모를 남긴다. 소정이에게 끝내 건 |
| 404 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *새로 만든 폴더 안에 사진 한 장이 조용히 자리 잡는 |
| 405 | `night3_faithful_reflect_4_b` |  | 없음 | 없음 |  |  |  |
| 406 | `night3_faithful_reflect_4_c` |  | 없음 | 없음 |  |  |  |
| 407 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 내일 아침 알람을 맞춘다. 휴대폰을 내 |
| 408 | `night3_end` | {name} | room_my | 없음 |  |  | *금요일 시간표가 적힌 교과서를 덮고 스탠드 불을 완전 |
| | **Day 4** | | | | | | |
| 409 | `morning4_start` | {name} | room_my_day.webp | 없음 |  |  | *넷째 날, 토요일 아침. 커튼 틈으로 스며든 주말 햇 |
| 410 | `morning4_date_plan_check` |  | 없음 | 없음 |  |  |  |
| 411 | `morning4_fallback_msg` | {name} | room_my_day.webp | 없음 |  |  | *주말 아침의 고요한 방 안. 밤새 온 알림을 정리하고 |
| 412 | `morning4_hidden_check` | {name} | street | 없음 |  |  | *이른 아침 공기를 가르며 학교 앞 사거리 횡단보도에서 |
| 413 | `morning4_manuscript_check` |  | street | 없음 |  |  |  |
| 414 | `hidden_homeroom_d4_1` | {name} | street | teacher_normal |  |  | 선생님, 좋은 아침이에요. *반쯤 열린 정문 앞에서 두 |
| 415 | `hidden_homeroom_d4_1_b` | {name} | street | teacher_normal |  |  | *시선이 부딪히자마자 선생님은 반사적으로 종이봉투를 등 |
| 416 | `hidden_homeroom_d4_2` | 담임선생님 | street | teacher_normal |  |  | 어? {name}? 이 시간에 학교 앞엔 웬일이야? |
| 417 | `hidden_homeroom_d4_3` | {name} | street | teacher_normal |  |  | 선생님이야말로 쉬는 주말인데 아침부터 학교에 나오셨어요 |
| 418 | `hidden_homeroom_d4_3_b` | 담임선생님 | street | teacher_shy |  |  | 문예부 합평회가 잡혀 있어서 잠깐 들렀어. 교무실에 두 |
| 419 | `hidden_homeroom_d4_3_c` | {name} | street | teacher_sad |  |  | *평소 교단에서 보던 단정한 정장 대신 부드러운 베이지 |
| 420 | `hidden_homeroom_d4_3_d` | {name} | street | teacher_sad |  |  | 쉬는 날에도 문예부 합평회를 열어요? |
| 421 | `hidden_homeroom_d4_3_e` | 담임선생님 | street | teacher_normal |  |  | 참가 신청한 부원들이 주말 오전밖에 시간이 안 맞는다더 |
| 422 | `hidden_homeroom_d4_4` | {name} | street | teacher_normal |  |  | *봉투 손잡이를 쥔 선생님의 가느다란 손가락 마디가 유 |
| 423 | `hidden_homeroom_d4_4_b` | 담임선생님 | street | teacher_normal |  |  | 그나저나 너는 아침 일찍 왜 이 근처를 서성이고 있었어 |
| 424 | `hidden_homeroom_d4_4_c` | {name} | street | teacher_normal |  |  | 근처에 볼일이 있어서 지나가던 길이었어요. |
| 425 | `hidden_homeroom_d4_4_d` | 담임선생님 | street | teacher_angry |  |  | 그냥 지나가는 길이라기엔 정문 안쪽을 꽤 오래 들여다보 |
| 426 | `hidden_homeroom_d4_4_e` | {name} | street | teacher_sad |  |  | *정문 경비실에서 흘러나오는 나른한 라디오 음악 소리만 |
| 427 | `hidden_homeroom_d4_5` | 담임선생님 | street | teacher_normal |  |  | 문예부 애들은 근처 카페에 먼저 가 있고 다른 인원들도 |
| 428 | `hidden_homeroom_d4_5_b` | {name} | street | teacher_normal |  |  | 문예부원도 아닌데 제가 옆에 끼어도 괜찮아요? |
| 429 | `hidden_homeroom_d4_5_c` | 담임선생님 | street | teacher_normal |  |  | 외부 독자 의견도 듣는 공개 합평이라 상관없어. 원고를 |
| 430 | `hidden_homeroom_d4_5_d` | 담임선생님 | street | teacher_shy |  |  | 담임이 쓴 글이라고 부담 가질 필요는 전혀 없어. 주말 |
| 431 | `hidden_homeroom_d4_choice` | {name} | street | teacher_normal |  |  | *선생님이 숨을 고를 때마다 품에 안은 봉투 안에서 원 |
| 432 | `hidden_homeroom_d4_cafe_1` | 담임선생님 | cafe | teacher_normal |  |  | 저기 창가 쪽 긴 테이블에 문예부 애들 모여 있지? 다 |
| 433 | `hidden_homeroom_d4_cafe_1_b` | {name} | cafe | teacher_normal |  |  | 선생님, 평소보다 꽤 긴장하신 것 같은데요? |
| 434 | `hidden_homeroom_d4_cafe_1_c` | 담임선생님 | cafe | teacher_normal |  |  | 티 나니? 솔직히 지금이라도 봉투째로 다시 들고 도망칠 |
| 435 | `hidden_homeroom_d4_cafe_1_d` | 담임선생님 | cafe | teacher_smile |  |  | 그래도 시킨 커피는 마시고 가야겠지. *애써 농담처럼  |
| 436 | `hidden_homeroom_d4_cafe_1_e` | {name} | cafe | teacher_sad |  |  | 부원들한테는 원고 어느 대목부터 보여주실 생각이에요? |
| 437 | `hidden_homeroom_d4_cafe_1_f` | 담임선생님 | cafe | teacher_normal |  |  | 막상 추려 내려니 영 부끄럽네. 밤에 혼자 스탠드 켜  |
| 438 | `hidden_homeroom_d4_cafe_2` | 담임선생님 | cafe | teacher_normal |  |  | 우선 도입부랑 첫 장면부터 돌리려고. 인물들이 주고받는 |
| 439 | `hidden_homeroom_d4_cafe_2_b` | {name} | cafe | teacher_normal |  |  | 제가 적는 감상도 정식 합평 기록에 들어가요? |
| 440 | `hidden_homeroom_d4_cafe_2_c` | 담임선생님 | cafe | teacher_smile |  |  | 이름은 전부 가리고 코멘트만 모을 거야. 누가 썼느냐보 |
| 441 | `hidden_homeroom_d4_cafe_2_d` | {name} | cafe | teacher_sad |  |  | *의자 옆에 세워 둔 선생님의 가죽 가방 틈으로 원고  |
| 442 | `hidden_homeroom_d4_cafe_2_e` | 담임선생님 | cafe | teacher_normal |  |  | 글 쓰는 사람한테 합평 자리에서 제일 두려운 게 뭔지  |
| 443 | `hidden_homeroom_d4_cafe_3` | 담임선생님 | cafe | teacher_normal |  |  | 예의 바른 칭찬보다 읽다가 페이지를 못 넘기고 멈칫하는 |
| 444 | `hidden_homeroom_d4_cafe_choice` | 담임선생님 | cafe | teacher_normal |  |  | 읽다가 어색하거나 숨이 막히는 대목이 있으면 가감 없이 |
| 445 | `hidden_homeroom_d4_cafe_trap` | 담임선생님 | cafe | teacher_normal |  |  | 그렇게 인사치레만 들으려는 자리였으면 애초에 인쇄본을  |
| 446 | `hidden_homeroom_d4_cafe_4` | 담임선생님 | cafe | teacher_normal |  |  | 비평하려 하지 말고 그냥 네 눈에 밟히는 문장만 체크해 |
| 447 | `hidden_homeroom_d4_cafe_4_b` | {name} | cafe | teacher_shy |  |  | *대답을 기다리는 선생님의 엄지손가락이 종이 컵홀더 모 |
| 448 | `hidden_homeroom_d4_cafe_5` | {name} | cafe | teacher_normal |  |  | 알겠어요. 제 나름대로 솔직하게 적어서 드릴게요. |
| 449 | `hidden_homeroom_d4_cafe_5_b` | {name} | cafe | teacher_smile |  |  | 여백에 메모할 때 제 이름은 비워 둘까요? 문예부 애들 |
| 450 | `hidden_homeroom_d4_cafe_5_c` | 담임선생님 | cafe | teacher_smile |  |  | 배려해 줘서 고마워. 무기명 합평이 원칙이니까 이름은  |
| 451 | `hidden_homeroom_d4_cafe_5_d` | {name} | cafe | teacher_normal |  |  | 이렇게 주말에 원고 나누는 것도 학교 업무의 연장선이에 |
| 452 | `hidden_homeroom_d4_cafe_5_e` | 담임선생님 | cafe | teacher_normal |  |  | 서류상으로는 동아리 지도 활동이라고 해 두자. |
| 453 | `hidden_homeroom_d4_cafe_5_f` | {name} | cafe | teacher_smile |  |  | *안쪽 테이블에서 기다리던 문예부 부원이 조심스럽게 다 |
| 454 | `hidden_homeroom_d4_cafe_5_g` | 담임선생님 | cafe | teacher_normal |  |  | 여기서 모인 메모들은 정리해서 다음 부활동 시간에 다  |
| 455 | `hidden_homeroom_d4_cafe_5_h` | {name} | cafe | teacher_normal |  |  | 교무실이 아니라 원두 냄새 나는 카페에서 선생님 글을  |
| 456 | `hidden_homeroom_d4_cafe_6` | 담임선생님 | cafe | teacher_normal |  |  | 다음번엔 차분하게 학교 도서실에서 모이자. 마음이 급해 |
| 457 | `hidden_homeroom_d4_cafe_6_b` |  | 없음 | 없음 |  |  |  |
| 458 | `hidden_homeroom_d4_freetalk` | 담임선생님 | cafe | teacher_normal |  |  | *한 김 식은 커피잔 옆으로 메모가 적힌 원고 뭉치를  |
| 459 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 460 | `day4_haeun_gate` |  | 없음 | 없음 |  |  |  |
| 461 | `day4_haeun_trust_check` |  | 없음 | 없음 |  |  |  |
| 462 | `day4_haeun_personal_gate` |  | 없음 | 없음 |  |  |  |
| 463 | `morning4_end` | {name} | room_my_day.webp | 없음 |  |  | *집으로 돌아와 거울 앞에서 셔츠 깃과 머리카락을 정돈 |
| 464 | `day4_date_branch` |  | 없음 | 없음 |  |  |  |
| 465 | `day4_night_start` | {name} | school | 없음 |  |  | *어스름이 짙게 깔린 학교를 나서서 집으로 돌아갈 시간 |
| 466 | `day4_night_branch` | 시스템 | 없음 | 없음 |  |  |  |
| 467 | `day4_teacher_checkin` | {name} | school | 없음 |  |  | *주말 행사 준비로 학교에 남았던 학생들에게 담임선생님 |
| 468 | `day4_adult_teacher_student_rank` |  | 없음 | 없음 |  |  |  |
| 469 | `day4_teacher_yuna_counteroffer` | 유나 | school_back | yuna_sad | 0.35 |  | *어두운 별관 모퉁이를 지날 때 휴대폰이 짧게 진동한다 |
| 470 | `day4_adult_counteroffer_accept_yuna` | 유나 | event_temptation_yuna | 없음 |  |  | *유나가 내 숨결이 닿는 코앞까지 바짝 다가와 한 손으 |
| 471 | `day4_temptation_yuna_freetalk` | 유나 | event_temptation_yuna | 없음 |  | 🌙 | *상의 목깃을 깊숙이 끌어내린 손을 거두지 않은 채 붉 |
| 472 | `day4_temptation_return_home` | {name} | room_my | 없음 |  |  | *온몸에 밴 뜨거운 열기와 숨결을 채 식히지 못한 채  |
| 473 | `day4_adult_night_regret_target_branch` |  | room_my | 없음 |  |  |  |
| 474 | `day4_adult_night_regret_teacher` | 담임선생님 | room_my | teacher_sad | 0.35 |  | *뒤늦게 집에 돌아와 휴대폰 화면을 켠다. 기다리고 있 |
| 475 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 476 | `night_homeroom_msg_1` | 담임선생님 | room_my | teacher_sad | 0.35 |  | *학교 학습 포털 공지 알림* 문예부 합평회용 수정 원 |
| 477 | `night_homeroom_msg_2` | 담임선생님 | room_my | teacher_normal | 0.35 |  | *학교 학습 포털 공지 알림* 추가 감상을 남기고 싶은 |
| 478 | `night_homeroom_msg_3` | {name} | room_my | teacher_normal | 0.35 |  | *밤 아홉 시 정각에 올라온 담임선생님의 공지 글 아래 |
| 479 | `day4_hidden_msg_after_homeroom` | 시스템 | room_my | 없음 |  |  |  |
| 480 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *일요일 아침 알람을 맞춰 두고 방 안의 스탠드 불을  |
| 481 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안의 시계 바늘이 자정을 넘어 다섯째 날로 향한다 |
| | **Day 5** | | | | | | |
| 482 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날, 일요일 아침. 교문 너머로 축제 현수막이 |
| 483 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 484 | `morning5_temptation_counteroffer_branch` |  | room_school | 없음 |  |  |  |
| 485 | `morning5_caught_teacher_counteroffer` | 담임선생님 | room_school | teacher_sad |  |  | *아침 햇살이 채 데우지 못한 교실 창가. 담임선생님이 |
| 486 | `morning5_caught_teacher_lie` | 담임선생님 | room_school | teacher_angry |  |  | *선생님의 시선이 내 얼굴과 앱에 찍힌 시각 사이를 천 |
| 487 | `morning5_counteroffer_gather` | {name} | room_school | 없음 |  |  | *어젯밤 함께 남아 있던 상대에게 메시지를 보내 아침  |
| 488 | `morning5_counteroffer_group_talk` | 두 사람 | room_school | 없음 |  |  | *축제 안내 방송을 앞둔 어수선한 교실 한복판, 어젯밤 |
| 489 | `morning5_counteroffer_choice` | {name} | room_school | 없음 |  |  | *숨 막히는 해명이 끝나자, 두 사람의 시선이 내 입술 |
| 490 | `morning5_counteroffer_choice_neither` | {name} | room_school | 없음 |  |  | *두 사람 사이에서 천천히 한 걸음 뒤로 물러선다.*  |
| 491 | `morning5_after_counteroffer` | {name} | room_school | 없음 |  |  | *교탁 모서리에 놓여 있던 조회 유인물 한 장이 바람에 |
| 492 | `morning5_after_counteroffer_hidden_check` |  | room_school | 없음 |  |  |  |
| 493 | `hidden_nurse_d5_after_co_check` |  | school_hallway | 없음 |  |  |  |
| 494 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 495 | `morning5_sojeong_1` | {name} | room_school | 없음 |  |  | *조용한 창가에 서서 휴대폰 메모 앱을 연다. 이전 학 |
| 496 | `morning5_sojeong_2` | {name} | room_school | 없음 |  |  | *더 이상 나를 변호하기 위한 마흔 번째 초안은 만들지 |
| 497 | `morning5_sojeong_3` | {name} | room_school | 없음 |  |  | 그때 네 책상 위에 적힌 낙서들을 두 눈으로 보고도 선 |
| 498 | `morning5_sojeong_4` | {name} | room_school | 없음 |  |  | *말풍선 옆에 작은 전송 완료 표시가 뜬다. 숫자 1이 |
| 499 | `morning5_sojeong_5` | {name} | room_school | 없음 |  |  | 전학 오기 전 학교에서 제가 모른 척 지나쳤던 일에 대 |
| 500 | `morning5_route_branch` |  | room_school | 없음 |  |  |  |
| 501 | `morning5_co_haeun_check` |  | room_school | 없음 |  |  |  |
| 502 | `tour_co_branch` |  | school | 없음 |  |  |  |
| 503 | `tour_co_event_1` | {name} | school_hallway | 없음 |  |  | *점심시간을 알리는 종소리가 울려 퍼졌지만 배식 줄은  |
| 504 | `tour_co_event_2` | {name} | school_hallway | 없음 |  |  | *빈 의자 등받이 위에 주인 잃은 축제 진행 요원 조끼 |
| 505 | `after5_start` |  | 없음 | 없음 |  | 🌅 |  |
| 506 | `day5_haeun_guilt_gate` |  | 없음 | 없음 |  | 🌅 |  |
| 507 | `day5_haeun_route_gate` |  | 없음 | 없음 |  | 🌅 |  |
| 508 | `after5_original_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 509 | `after5_co_start` | {name} | school_hallway | 없음 |  | 🌅 | *축제 인파가 빠져나간 방과 후 복도에, 오늘 아침 숨 |
| 510 | `after5_co_abandoned_branch` |  | school_hallway | 없음 |  | 🌅 |  |
| 511 | `after5_co_teacher_1` | 담임선생님 | room_school | teacher_sad |  | 🌅 | *선생님이 소리 없이 출석부를 덮는다.* 오후 행사 마 |
| 512 | `after5_co_teacher_2` | 담임선생님 | room_school | teacher_angry |  | 🌅 | 개인 상담은 다음 주에 정식으로 시간을 다시 잡자. 오 |
| 513 | `after5_co_tempter_branch` |  | school_hallway | 없음 |  | 🌅 |  |
| 514 | `after5_co_tempter_yuna_1` | 유나 | library_old | yuna_sad |  | 🌅 | *유나의 휴대폰 잠금화면에는 아직 어젯밤 별관 창가의  |
| 515 | `after5_co_tempter_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | 지금은 누구 뒤도 무리해서 따라가지 마. 그거면 돼. |
| 516 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 517 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *축제 마지막 순서가 끝나 가는 복도 창가에서, 홀로  |
| 518 | `after5_farewell_seo_skip` |  | school_hallway | 없음 |  | 🌅 |  |
| 519 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *오후의 그림자가 길어진 복도에서 서연과 마주친다. 서 |
| 520 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 521 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 522 | `after5_farewell_dain_1` | {name} | school_back | dain_normal |  | 🌅 | *체육관 입구 쪽에서 다인이 걸어 나온다. 언제나 성큼 |
| 523 | `after5_farewell_dain_skip` |  | school_hallway | 없음 |  | 🌅 |  |
| 524 | `after5_farewell_dain_low` | 다인 | school_back | dain_normal |  | 🌅 | *체육관 앞길에서 걸어오던 다인이 두 걸음 떨어진 자리 |
| 525 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *붉은 석양이 길게 내려앉은 교정 위로, 축제의 끝을  |
| 526 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 527 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 528 | `ending_counteroffer_bitter` |  | park | 없음 |  |  |  |
| 529 | `ending_counteroffer_choice_neither` | {name} | park | 없음 |  |  | *염치없이 두 사람 다 붙잡지 않겠다고 말한 뒤, 교실 |
| 530 | `ending_counteroffer_bitter_route` |  | park | 없음 |  |  |  |
| 531 | `co_bitter_teacher_1` | {name} | school_hallway | teacher_sad |  |  | *졸업식 날 다시 찾은 교사동 복도. 담임선생님의 손에 |
| 532 | `co_bitter_teacher_2` | 담임선생님 | school_hallway | teacher_sad |  |  | 졸업 축하한다. 봉투 안의 행정 서류는 빠진 것 없는지 |
| 533 | `co_bitter_teacher_3` | {name} | ending_bittersweet_teacher | 없음 |  |  | *선생님은 원고 대신 공문 서류 뭉치를 품에 안고 먼저 |
| 534 | `hidden_bitter_homeroom_ending_title` |  | ending_bittersweet_teacher | 없음 |  |  | ─── 담임선생님 BITTERSWEET END ─── |
| 535 | `day5_teacher_ending_freetalk_intro` | {name} | cafe | teacher_smile |  |  | *창가 카페 테이블 위에는 출간된 그녀의 단행본과 따뜻 |
| 536 | `day5_teacher_ending_freetalk_router` | {name} | cafe | 없음 |  |  |  |
| 537 | `day5_teacher_ending_freetalk_bittersweet` | 담임선생님 | room_school | teacher_sad |  | 🌙 | *교탁 위에 돌려놓은 편지 봉투에서 손을 떼고 열린 교 |
| 538 | `day5_credits` |  | school | 없음 |  |  |  |
| 539 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### day5_teacher_ending_freetalk_good

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
- `after2_choice`: (선택)
- `night2_choice`: (선택)
- `hidden_homeroom_d3_choice`: (선택)
- `hidden_homeroom_d3_reveal_choice`: (선택)
- `lunch3_choice`: (선택)
- `after3_choice`: (선택)
- `hidden_homeroom_d4_choice`: (선택)
- `hidden_homeroom_d4_cafe_choice`: (선택)
- `day4_teacher_yuna_counteroffer`: (선택)
- `hidden_homeroom_d5_choice`: (선택)
- `after5_hidden_route_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=7 유나=3 다인=3 담임=48 보건=0

<details>
<summary>씬 타임라인 (595씬)</summary>

| # | 씬 ID | 화자 | 배경 | 캐릭터 | OP | 밤 | 대사 (앞 30자) |
|---|--------|------|------|--------|----|----|----------------|
| | **Day 1** | | | | | | |
| 1 | `start` | {name} | school | 없음 |  |  | *4월의 벚꽃잎이 흩날리는 교문 앞. 아직 풀기가 가시 |
| 2 | `start_again` | {name} | school | 없음 |  |  | *순간 울컥 치미는 현기증에 차가운 교문 기둥을 짚어선 |
| 3 | `start_3` | {name} | school | 없음 |  |  | *주머니 속 휴대폰이 짧게 떨린다. 예전 학교 단체방  |
| 4 | `name_input_scene` | 시스템 | school | 없음 |  |  | 전학생, 이름이 뭐야? |
| 5 | `gate_1` | {name} | school | 없음 |  |  | *교문 그늘 아래 서 있던 긴 생머리의 여학생이 안경테 |
| 6 | `seoyeon_meet_1` | 서연 | school | seyoun_normal |  |  | 혹시 오늘 온 전학생? {name} 맞지? |
| 7 | `seoyeon_meet_2` | 서연 | school | seyoun_normal |  |  | 가슴팍 명찰도 {name}이네. 반가워. *단정한 손끝 |
| 8 | `seoyeon_meet_3` | {name} | school | seyoun_normal |  |  | 맞는데. 내 얼굴은 어떻게 한 번에 알아봤어? |
| 9 | `seoyeon_meet_4` | 서연 | school | seyoun_normal |  |  | 학생회장이거든. 새로 온 전학생 맞이하는 것도 내 몫이 |
| 10 | `seoyeon_meet_5` | 서연 | school | seyoun_normal |  |  | 이쪽으로 따라와. 조회 시작하기 전에 15분 안으로 학 |
| 11 | `seoyeon_meet_6` | {name} | school | seyoun_normal |  |  | 첫날부터 학생회장이 직접 안내라니 좀 떨리는데. |
| 12 | `seoyeon_meet_7` | 서연 | school | seyoun_normal |  |  | 원래 내가 맡은 일이니까 괜히 어렵게 생각할 것 없어. |
| 13 | `seoyeon_meet_8` | 서연 | school | seyoun_normal |  |  | 자, 가자. *몸을 돌리는 서연의 교복 셔츠 깃에서 햇 |
| 14 | `seoyeon_choice` | {name} | school | seyoun_normal |  |  | *앞서 걷는 서연의 단정한 뒷모습을 보며 입을 연다.* |
| 15 | `choice_joke_1` | 서연 | school | seyoun_laugh |  |  | 오늘 안내는 특별히 무료야. 대신 나중에 학생회 일손  |
| 16 | `choice_joke_2` | {name} | school | seyoun_laugh |  |  | 세상에 공짜가 없다더니 무서운 학생회장이네. |
| 17 | `choice_joke_3` | 서연 | school | seyoun_normal |  |  | 내 옆에 있으면 적어도 학교생활이 심심하진 않을걸. |
| 18 | `hallway_1` | 서연 | school_hallway | seyoun_back |  |  | 지나가는 애들한테 인사받느라 걸음 늦출 필요 없어. 그 |
| 19 | `hallway_3` | 서연 | school_hallway | seyoun_normal |  |  | 지금 걷는 본관이 3학년 건물이고 창밖 건너편이 도서관 |
| 20 | `hallway_4` | 서연 | school_hallway | seyoun_normal |  |  | 그리고 이건 아무한테나 안 보여주는 건데. *재킷 주머 |
| 21 | `hallway_5` | 서연 | school_hallway | seyoun_normal |  |  | 원래 우리 학교 옥상은 평소엔 잠겨 있거든. 이 열쇠는 |
| 22 | `hallway_6` | {name} | school_hallway | seyoun_normal |  |  | 옥상에 너만의 비밀 아지트라도 숨겨 둔 거야? |
| 23 | `hallway_6_b` | 서연 | school_hallway | seyoun_normal |  |  | *맑게 울리던 열쇠고리 소리가 손안에서 뚝 멎는다.*  |
| 24 | `hallway_6_c` | 서연 | school_hallway | seyoun_normal |  |  | *입꼬리를 살짝 올린 채 대답 대신 열쇠를 다시 주머니 |
| 25 | `hallway_7` | 서연 | school_hallway | seyoun_normal |  |  | 맞다, 오늘 점심시간. 아직 어디서 밥 먹을지 못 정했 |
| 26 | `hallway_8` | {name} | school_hallway | seyoun_shy |  |  | *어느새 걸음을 멈춘 서연이 아침 햇살이 비치는 교실  |
| 27 | `hallway_10` | 서연 | school_hallway | seyoun_normal |  |  | 다 왔다, 여기가 네 교실이야. 얼른 들어가 봐. |
| 28 | `hallway_11` | {name} | school_hallway | seyoun_normal |  |  | 점심때도 일대일로 안내해 주는 거야? |
| 29 | `hallway_12` | 서연 | school_hallway | seyoun_normal |  |  | 글쎄, 오늘 오전 수업 잘 버티는 거 봐서. |
| 30 | `hallway_13` | 서연 | school_hallway | seyoun_back |  |  | *돌아서던 서연이 클립보드를 어깨 높이로 가볍게 들어  |
| 31 | `hallway_13_b` | {name} | school_hallway | seyoun_back |  |  | *단정한 구두 소리를 남기며 복도 저편으로 멀어지는 서 |
| 32 | `classroom_1` | {name} | room_school | 없음 |  |  | *드르륵, 교실 앞문을 열자 왁자지껄하던 공기 위로 수 |
| 33 | `classroom_2_b` | {name} | room_school | teacher_normal |  |  | *교탁 앞에는 20대 후반쯤 되어 보이는 담임선생님이  |
| 34 | `classroom_3` | 담임 | room_school | teacher_normal |  |  | 자, 다들 주목. 오늘부터 우리 반 식구가 된 전학생이 |
| 35 | `classroom_3_b` | {name} | room_school | teacher_normal |  |  | 오늘 전학 온 {name}입니다. 잘 부탁드립니다. * |
| 36 | `classroom_5_b` | 담임 | room_school | teacher_normal |  |  | 그래, {name}. 우리 반에 온 걸 환영해. 급할  |
| 37 | `classroom_5_c` | {name} | room_school | teacher_normal |  |  | *낯선 교실 공기에 섞여 내 숨소리가 잦아드는 사이 교 |
| 38 | `classroom_dain_1` | 다인 | room_school | dain_normal |  |  | 오, 전학생! 드디어 우리 반에도 새 얼굴이 들어왔네! |
| 39 | `classroom_dain_2` | 다인 | room_school | yuna_normal |  |  | 이쪽 봐, 이쪽! *산뜻한 갈색 숏컷에 활동적인 배구부 |
| 40 | `classroom_dain_3` | 담임 | room_school | teacher_normal |  |  | 다인아, 아침부터 목소리 좀 낮추자. 그리고 교실 안에 |
| 41 | `classroom_dain_4` | 다인 | room_school | yuna_normal |  |  | 에이, 쌤도 참. 이게 세상에서 제일 편하단 말이에요! |
| 42 | `classroom_dain_5` | 다인 | room_school | yuna_normal |  |  | 네 자리는 여기야, 여기! *아이들의 웃음소리 사이로  |
| 43 | `classroom_dain_5_b` | 담임선생님 | room_school | teacher_normal |  |  | 다인아, 적어도 출석 부르는 동안만이라도 진정 좀 하자 |
| 44 | `classroom_dain_5_c` | 담임 | room_school | teacher_normal |  |  | 지금부터 그 에너지를 다 쓰면 어떡해. 아직 1교시 종 |
| 45 | `classroom_dain_5_d` | 담임선생님 | room_school | teacher_angry |  |  | *담임은 작게 고개를 저으며 출석부 다음 장을 부드럽게 |
| 46 | `classroom_yuna_1` | {name} | room_school | yuna_bored |  |  | *소란스러운 교실 풍경과 동떨어진 창가 맨 뒷자리, 봄 |
| 47 | `classroom_yuna_2` |  | 없음 | 없음 |  |  |  |
| 48 | `classroom_yuna_4` | {name} | room_school | yuna_bored |  |  | *앞줄에 앉은 학생 하나가 내 소매를 스치며 작게 속삭 |
| 49 | `classroom_seat_1` | 담임선생님 | room_school | teacher_normal |  |  | *출석부를 덮은 담임이 창가 쪽에서 한 줄 건너편 빈자 |
| 50 | `classroom_seat_2` | 다인 | room_school | yuna_normal |  |  | 오, 딱 내 옆자리네? 멀뚱히 서 있지 말고 얼른 와서 |
| 51 | `classroom_minsu_1` | {name} | room_school | minsu_normal |  |  | *가방을 내려놓고 의자를 빼려는데 앞자리에 앉아 있던  |
| 52 | `classroom_minsu_2` | 민수 | room_school | minsu_smirk |  |  | 야, 전학생. 우리 반에 온 걸 환영한다. 그리고 미리 |
| 53 | `classroom_minsu_3` | {name} | room_school | minsu_smirk |  |  | 갑자기 무슨 각오? |
| 54 | `classroom_minsu_2_b` | 민수 | room_school | minsu_normal |  |  | *옆자리의 다인을 향해 슬쩍 턱짓하며 씨익 웃는다.*  |
| 55 | `classroom_dain_talk_1` | {name} | room_school | minsu_normal |  |  | *장난스럽게 돌아앉는 앞자리 남학생의 교복 명찰에는 ' |
| 56 | `classroom_dain_talk_2` | 다인 | room_school | yuna_normal |  |  | 저 녀석 말은 신경 쓰지 마! 그보다 나 궁금한 거 하 |
| 57 | `classroom_dain_talk_3` | 다인 | room_school | yuna_normal |  |  | 야, {name}. 너 평소에 몸 움직이는 거나 운동  |
| 58 | `classroom_dain_talk_4` | {name} | room_school | yuna_normal |  |  | 운동은 왜, 갑자기? |
| 59 | `classroom_dain_talk_5` | 다인 | room_school | yuna_normal |  |  | 아니, 오늘 방과후에 리시브 연습을 좀 더 하고 싶은데 |
| 60 | `classroom_dain_talk_6` | {name} | room_school | yuna_normal |  |  | 전학생을 첫날부터 인간 볼 머신으로 쓰려고? |
| 61 | `classroom_dain_talk_7` | 다인 | room_school | yuna_normal |  |  | 에이, 설마! 그래도 기계보다는 사람이랑 호흡 맞추는  |
| 62 | `classroom_dain_talk_8` | 다인 | room_school | yuna_normal |  |  | 어때, 같이 해 볼래? *다인의 따뜻한 검지가 내 책상 |
| 63 | `classroom_yuna_note_1` | {name} | room_school | yuna_bored |  |  | *그때 뒷자리에서 반듯하게 접힌 종이쪽지 하나가 책상  |
| 64 | `classroom_yuna_note_3` | 유나 | room_school | yuna_bored |  |  | *조심스럽게 펼치자 은은한 연보라색 잉크 글씨와 모서리 |
| 65 | `classroom_yuna_note_5` | {name} | room_school | yuna_bored |  |  | *내가 고개를 들자 창가 햇살에 비치던 유나의 하얀 손 |
| 66 | `classroom_yuna_note_6` | {name} | room_school | yuna_bored |  |  | *1교시 시작을 알리는 종소리가 교실 안을 메운다. 창 |
| 67 | `lunch_start` | {name} | school_hallway | 없음 |  |  | *점심시간을 알리는 종소리와 함께 교실 공기가 들뜬다. |
| 68 | `lunch_start_4` | 서연 | school_hallway | seyoun_normal |  |  | 아까 말한 대로 옥상 올라올 거지? *계단참에서 걸음을 |
| 69 | `lunch_start_4_b` | {name} | school_hallway | dain_normal |  |  | *대답하려는 순간 옆에서 다가온 다인의 따뜻한 손바닥이 |
| 70 | `lunch_start_5` | 다인 | school_hallway | dain_normal |  |  | 야, 아직 점심 안 먹었지? 나랑 매점 뛰어가자. 빵  |
| 71 | `lunch_start_6` | 유나 | school_hallway | yuna_normal |  |  | 난 도서관 갈 건데. *내 옆을 스쳐 지나가며 가방끈을 |
| 72 | `lunch_start_7` | {name} | school_hallway | 없음 |  |  | *바람 부는 옥상과 달콤한 빵 냄새가 나는 매점, 그리 |
| 73 | `lunch_choice` | {name} | school_hallway | 없음 |  |  | *첫날의 점심시간, 누구의 발걸음을 따라갈까?* |
| 74 | `lunch_yuna_1` | {name} | library_old | yuna_normal |  |  | *복도의 소음이 멀어지는 계단을 지나 유나의 뒤를 따라 |
| 75 | `lunch_yuna_1_aff_default` | 유나 | library_old | yuna_normal |  |  | *따로 건네는 쪽지는 없었다. 유나는 햇살이 비스듬히  |
| 76 | `lunch_yuna_2` | 유나 | library_old | yuna_normal |  |  | 의자 끌 때 소리 나지 않게 살살. *하얀 검지로 펼쳐 |
| 77 | `lunch_yuna_4` | 유나 | library_old | yuna_normal |  |  | 잠깐만 기다려. *끼워 두었던 대출 영수증 끝을 반듯하 |
| 78 | `lunch_yuna_5` | {name} | library_old | yuna_normal |  |  | *5초, 다시 10초가 고요하게 흐른다. 유나는 접힌  |
| 79 | `lunch_yuna_5_b` | {name} | library_old | yuna_normal |  |  | 옆자리 비었으면 앉아도 돼? |
| 80 | `lunch_yuna_7` | 유나 | library_old | yuna_normal |  |  | *활자에서 눈을 떼지 않은 채 나직이 속삭인다.* 옆에 |
| 81 | `lunch_yuna_8` | 유나 | library_old | yuna_normal |  |  | 가방 내렸어. 이쪽 앉아. *옆 의자에서 자기 가방을  |
| 82 | `lunch_yuna_10` | {name} | library_old | yuna_normal |  |  | *나란히 앉은 책상 위로 벽시계 초침 소리와 종이 스치 |
| 83 | `lunch_yuna_10_b` | {name} | library_old | yuna_normal |  |  | *유나의 손끝이 낡은 책갈피에 적힌 흐릿한 글씨를 슬쩍 |
| 84 | `lunch_yuna_12` | 유나 | library_old | yuna_normal |  |  | *책장 너머로 붉은빛이 감도는 눈동자가 천천히 올라온다 |
| 85 | `lunch_yuna_13` | {name} | library_old | yuna_normal |  |  | 어? 진짜네. |
| 86 | `lunch_yuna_14` | 유나 | library_old | yuna_normal |  |  | 그 시리즈는 1권부터 차례대로 읽어야 이해돼. |
| 87 | `lunch_yuna_15` | 유나 | library_old | yuna_normal |  |  | 여기 있어. 이걸로 먼저 읽어. *자기 손옆에 쌓아 두 |
| 88 | `lunch_yuna_16` | {name} | library_old | yuna_normal |  |  | 빌려주는 거야? 고마워. |
| 89 | `lunch_yuna_17` | 유나 | library_old | yuna_normal |  |  | 다 읽으면 나한테 다시 돌려줘. |
| 90 | `lunch_yuna_18` | 유나 | library_old | yuna_normal |  |  | 그럼 이제 각자 읽자. *책상 하나를 사이에 두고 나란 |
| 91 | `lunch_yuna_20` | {name} | library_old | yuna_normal |  |  | *한참 만에 고개를 들자 창가 햇살을 등진 유나가 책  |
| 92 | `lunch_yuna_21` | {name} | library_old | yuna_normal |  |  | 왜 그래, 나한테 할 말 있어? |
| 93 | `lunch_yuna_22` | 유나 | library_old | yuna_normal |  |  | *유나가 얇은 책갈피를 페이지 사이에 끼워 넣는다.*  |
| 94 | `lunch_yuna_23` | {name} | library_old | yuna_normal |  |  | 그게 왜? |
| 95 | `lunch_yuna_24` | 유나 | library_old | yuna_normal |  |  | 생각보다 편했어. |
| 96 | `lunch_yuna_25` | 유나 | library_old | yuna_normal |  |  | *유나의 시선이 내가 쥔 책 표지를 스쳐 내 눈동자에  |
| 97 | `lunch_yuna_choice` | {name} | library_old | yuna_normal |  |  | *읽던 책을 천천히 덮으며 유나와 시선을 맞춘다.* |
| 98 | `lunch_yuna_c2_1` | 유나 | library_old | yuna_normal |  |  | 교실에 있어 봤자 딱히 할 일도 없으니까. |
| 99 | `lunch_yuna_c2_2` | 유나 | library_old | yuna_normal |  |  | 그래도 이 구석 자리는 꽤 마음에 들어. 아무도 안 찾 |
| 100 | `lunch_yuna_freetalk` | 유나 | library_old | yuna_normal |  |  | *유나가 덮은 책 표지 위로 하얀 두 손을 가만히 포갠 |
| 101 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *5교시 수업을 알리는 차임벨이 울려 퍼지며 짧고도 설 |
| 102 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *붉은 노을이 스며드는 방과후 복도. 주머니 속에서 진 |
| 103 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 104 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 그 가벼운 마지막 한 줄에 시선이  |
| 105 | `after_kakao_5` |  | 없음 | 없음 |  | 🌅 |  |
| 106 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *한참을 망설이다 조용히 단체방 나가기를 누른다. 텅  |
| 107 | `after1_jealousy_yuna_1` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 너 점심시간에 도서관 갔다 왔다며? 그것도 유나랑 |
| 108 | `after1_jealousy_yuna_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 신기하네, 걔 원래 옆에 누가 오는 거 진짜 싫어하거든 |
| 109 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *휴대폰을 주머니에 넣고 석양이 길게 드리운 복도를 따 |
| 110 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도 모퉁이를 돌려는데 등 뒤에서 운동화 바닥이 마룻 |
| 111 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 거기 앞 조심해! |
| 112 | `after_miss_dain_3` | 다인 | school_hallway | dain_normal |  | 🌅 | 휴, 아슬아슬하게 비켜 줬네! *내 어깨를 스치며 바람 |
| 113 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 방금 반사신경 꽤 괜찮았는데? 역시 운동 좀 해  |
| 114 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 하마터면 부딪힐 뻔했잖아. 복도에서 웬 전력질주야? |
| 115 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 배구부 집합 시간 늦었거든! 지금 당장 체육관 뛰어가야 |
| 116 | `after_miss_dain_6_b` | {name} | school_hallway | dain_pain |  | 🌅 | *돌아서서 두어 걸음 내딛던 다인이 순간 걸음을 멈추고 |
| 117 | `after_miss_dain_7` | 다인 | school_hallway | dain_laugh |  | 🌅 | 참, 내 이름 다인이야! 내일 와서 이름 까먹으면 안  |
| 118 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞 복도를 지나는데 붉은 눈동자의 여학생이 소 |
| 119 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 방금 책 사이에서 이거 떨어졌어. |
| 120 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *바닥에 내려앉은 낡은 책갈피를 조심스레 주워 건넨다. |
| 121 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | 다행이다, 모서리 안 구겨졌네. *하얀 손가락으로 책갈 |
| 122 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 주워 줘서 고마워. |
| 123 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *소중한 것을 감추듯 책갈피를 책등 깊숙이 끼워 넣고는 |
| 124 | `after_miss_yuna_4` |  | 없음 | 없음 |  | 🌅 |  |
| 125 | `after_miss_seoyeon_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *가방을 메고 신발장으로 내려가려는데 계단 앞 복도에서 |
| 126 | `after_miss_seoyeon_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 너 아까 점심시간에 어디 갔었어? |
| 127 | `after_miss_seoyeon_3` | {name} | school_hallway | seyoun_normal |  | 🌅 | 점심시간에 어디라니? |
| 128 | `after_miss_seoyeon_4` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 일부러 옥상 문까지 열어 두고 있었는데 끝까지 안 올라 |
| 129 | `after_miss_seoyeon_5` | {name} | school_hallway | seyoun_normal |  | 🌅 | 설마 옥상에서 계속 나 기다린 거야? |
| 130 | `after_miss_seoyeon_6` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 기다리긴 누가 기다려, 내 도시락 먼저 먹고 있었지.  |
| 131 | `after_miss_seoyeon_7` | {name} | school_hallway | seyoun_normal |  | 🌅 | *서연은 클립보드를 가슴께로 끌어안으며 시선을 살짝 피 |
| 132 | `after_miss_seoyeon_8` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 내일 점심엔 다른 데로 새지 마. |
| 133 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교를 알리는 안내 방송이 끝난 뒤 노을빛만 남은 복 |
| 134 | `after_hidden_homeroom_1` | {name} | school_hallway | 없음 |  | 🌅 | *반쯤 열린 교무실 문가에 서서 조심스레 노크한다.*  |
| 135 | `after_hidden_homeroom_aff` |  | teacher_office | 없음 |  | 🌅 |  |
| 136 | `after_hidden_homeroom_2` | 담임 | teacher_office | teacher_normal |  | 🌅 | 어, {name} 아니야? 아직 안 가고 무슨 일이야? |
| 137 | `after_hidden_homeroom_3` | 담임 | teacher_office | teacher_normal |  | 🌅 | 마침 한가하던 참이니까 이리 들어와. *팔꿈치까지 걷어 |
| 138 | `after_hidden_homeroom_3_b` | {name} | teacher_office | teacher_normal |  | 🌅 | 앞으로 학교생활 하면서 알아둬야 할 게 있어서 잠깐 여 |
| 139 | `after_hidden_homeroom_3_c` | 담임 | teacher_office | teacher_normal |  | 🌅 | 아, 그 얘기였어? 마침 잘 왔네, 거기 편하게 앉아. |
| 140 | `after_hidden_homeroom_4` | 담임 | teacher_office | teacher_normal |  | 🌅 | 사고 친 것도 아닌데 그렇게 긴장할 필요 없어. 오늘  |
| 141 | `after_hidden_homeroom_choice` | 담임선생님 | teacher_office | teacher_normal |  | 🌅 | *들고 있던 클립보드를 책상 위에 내려놓고 턱을 살짝  |
| 142 | `after_homeroom_honest_1` | 담임 | teacher_office | teacher_normal |  | 🌅 | 하긴, 정신없는 게 당연하지. 낯선 교실에서 첫날부터  |
| 143 | `after_homeroom_honest_2` | {name} | teacher_office | teacher_normal |  | 🌅 | 선생님도 학창 시절에 전학 다녀 보신 적 있어요? |
| 144 | `after_homeroom_honest_3` | 담임 | teacher_office | teacher_normal |  | 🌅 | 전학이랑은 조금 다르지만 아무 연고도 없는 낯선 곳에  |
| 145 | `after_homeroom_honest_3_b` | 담임선생님 | teacher_office | teacher_normal |  | 🌅 | *담임은 클립보드를 뒤집어 놓고 엄지손가락으로 매끄러운 |
| 146 | `after_homeroom_honest_4` | 담임 | teacher_office | teacher_normal |  | 🌅 | 교실 공기가 갑갑해지면 언제든 이리로 도망쳐 와. 따뜻 |
| 147 | `after_homeroom_honest_5` | {name} | teacher_office | teacher_normal |  | 🌅 | 교무실 오면 선생님이 직접 음료수도 사 주시는 거예요? |
| 148 | `after_homeroom_honest_6` | 담임 | teacher_office | teacher_normal |  | 🌅 | 우리 반 전학생을 향한 순수한 교육적 관심이라고 해 두 |
| 149 | `after_homeroom_honest_6_b` | 담임선생님 | teacher_office | teacher_normal |  | 🌅 | *장난기 어린 미소와 함께 엄지손가락으로 출석부의 살짝 |
| 150 | `after_homeroom_honest_choice2` | {name} | teacher_office | teacher_normal |  | 🌅 | *책상 모서리에 기댄 담임과의 거리가 한 뼘쯤 가까워진 |
| 151 | `after_homeroom_honest_choice2a` | 담임 | teacher_office | teacher_shy |  | 🌅 | 그래, 솔직히 좀 걱정됐어. 내 얼굴에 그렇게 티가 많 |
| 152 | `after_homeroom_honest_choice2a_b` | 담임선생님 | teacher_office | teacher_shy |  | 🌅 | *괜히 헛기침을 한 번 하며 출석부를 책상 모서리 선에 |
| 153 | `after_homeroom_honest_7` | 담임 | teacher_office | teacher_normal |  | 🌅 | 참, {name}. |
| 154 | `after_homeroom_honest_8` | {name} | teacher_office | teacher_normal |  | 🌅 | 네, 선생님? |
| 155 | `after_homeroom_honest_9` | 담임 | teacher_office | teacher_normal |  | 🌅 | 혼자 겉돌거나 적응 못 하는 눈치 보이면 내가 직접 붙 |
| 156 | `after_homeroom_honest_9_b` | {name} | teacher_office | teacher_normal |  | 🌅 | *복도 저편에서 다른 교사의 발소리가 들려오자 담임이  |
| 157 | `after_homeroom_honest_10` | 담임선생님 | school_hallway | teacher_normal |  | 🌅 | 나가는 길인데 복도 걸으면서 마저 얘기할까? *출석부를 |
| 158 | `after_homeroom_freetalk` | 담임 | school_hallway | teacher_normal |  | 🌅 | *교무실 문을 반쯤 닫아 둔 채 출석부를 옆구리에 끼고 |
| 159 | `night_start` | {name} | room_my | 없음 |  |  | *집으로 돌아와 아직 낯선 새 교복을 옷걸이에 걸어 두 |
| 160 | `night_start_3` | {name} | room_my | 없음 |  |  | *고요한 방 안, 머리맡에 둔 휴대폰이 짧게 진동하며  |
| 161 | `night_msg_yuna_1` | 유나 | room_my | yuna_normal | 0.35 |  | 오늘 점심엔 옆에서 조용히 있어 줘서 고마웠어 |
| 162 | `night_msg_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | 내일도 내 옆자리 비워 놓을게 |
| 163 | `night_msg_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *짧고 담백한 '내 옆자리 비워 놓을게'라는 문장을 몇 |
| 164 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 대화창을 닫으려는데 상단 알림 바에 학교 앱  |
| 165 | `night_hidden_homeroom_1` | {name} | room_my | teacher_normal | 0.35 |  | *학급 공지 앱에 담임선생님이 방금 올린 글이 보인다. |
| 166 | `night_hidden_homeroom_2` | {name} | room_my | teacher_normal | 0.35 |  | *공지사항 마지막 줄에 덧붙여진 다정한 한 문장을 한  |
| 167 | `night_late_transition` | {name} | room_my | 없음 |  |  | *불을 끄고 막 눈을 감으려는데 정적을 깨고 휴대폰이  |
| 168 | `night_late_branch` | {name} | room_my | 없음 |  |  | *어두운 방 안, 손에 쥔 액정 화면이 하얗게 빛을 낸 |
| 169 | `night_end_1` | {name} | room_my | 없음 |  |  | *휴대폰을 내려놓고 어두운 천장을 올려다본다. 옷걸이에 |
| 170 | `night_end_3` | {name} | room_my | 없음 |  |  | *연락처에 나란히 저장된 새로운 이름들을 한 번 더 눈 |
| | **Day 2** | | | | | | |
| 171 | `morning2_start` | {name} | room_school | 없음 |  |  | *전학 온 지 이틀째 아침. 교복 소매에 남았던 빳빳한 |
| 172 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 173 | `morning2_greet_none_tone` |  | room_school | 없음 |  |  |  |
| 174 | `morning2_greet_none_1` | {name} | room_school | 없음 |  |  | *교실 문을 열고 들어서도 먼저 다가오는 사람은 없다. |
| 175 | `morning2_greet_none_2` | {name} | room_school | yuna_normal |  |  | *서연은 교탁 앞에서 출석부만 넘기고 다인은 반대편 친 |
| 176 | `morning2_yuna_seen` | 유나 | room_school | yuna_normal |  |  | ...너 혹시 전학 오기 전에도 이 학교에 와 본 적  |
| 177 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *가방을 걸고 자리에 앉으려는데 책상 한가운데에 정갈하 |
| 178 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 179 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가던 서연이 열린 교실 앞문 틈으로 고개를 |
| 180 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 바쁜 학생회장이 아침부터 남의 교실 앞까지 직접 인사하 |
| 181 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 교무실에 서류 갖다주러 가는 길에 잠깐 멈춘 거야. 그 |
| 182 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | 얼굴 확인했으니까 이제 간다. 아침 조회 늦지 말고.  |
| 183 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연의 긴 머리카락이 사라진 복도 쪽을 바라보고 있는 |
| 184 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 온 지 이틀 만에 학생회장님이 직접 문 앞까 |
| 185 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 그건 그냥 네가 인기가 없는 게 아닐까. |
| 186 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 뼈 때리지 마라, 사실이긴 한데 지금 그게 핵심이 아니 |
| 187 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *복도 유리창 너머로 클립보드를 가슴에 안은 서연이 귓 |
| 188 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 오호, 도도한 회장님도 우리 전학생한테 꽤 관심 있나  |
| 189 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | 방금 '우리' 전학생이라고 했어? |
| 190 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 당연하지, 같은 반에다 바로 옆자리 짝꿍이잖아! 그 정 |
| 191 | `hidden_homeroom_d2_1` | 담임선생님 | school_hallway | teacher_normal |  |  | 마침 잘 만났네, {name}. 지금 나랑 잠깐 교무실 |
| 192 | `hidden_homeroom_d2_1_b` | {name} | school_hallway | teacher_normal |  |  | 저 혹시 무슨 문제라도 생겼어요? |
| 193 | `hidden_homeroom_d2_1_c` | 담임선생님 | school_hallway | teacher_normal |  |  | 겁먹을 것 없어, 전학 서류 마저 확인할 게 남아서 그 |
| 194 | `hidden_homeroom_d2_2` | {name} | school_hallway | teacher_normal |  |  | *담임의 팔에 안긴 출석부 사이로 내 이름이 적힌 전학 |
| 195 | `hidden_homeroom_d2_2_b` | {name} | teacher_office | teacher_normal |  |  | *담임의 책상 앞에 다가가자 반쯤 열린 서랍 틈으로 빽 |
| 196 | `hidden_homeroom_d2_3` | 담임선생님 | teacher_office | teacher_normal |  |  | 응, 앉아. 그나저나 이전 학교 생활기록부 보니까 국어 |
| 197 | `hidden_homeroom_d2_3_b` | {name} | teacher_office | teacher_normal |  |  | 교과서 말고 소설책 읽는 건 꽤 좋아하는 편이에요. |
| 198 | `hidden_homeroom_d2_3_c` | {name} | teacher_office | teacher_normal |  |  | 선생님께서 소설 이야기를 꺼내실 줄은 몰랐어요. 그냥  |
| 199 | `hidden_homeroom_d2_3_d` | 담임선생님 | teacher_office | teacher_normal |  |  | 읽는 걸 좋아한다라. 그럼 직접 글을 써 본 적은 없고 |
| 200 | `hidden_homeroom_d2_3_e` | {name} | teacher_office | teacher_normal |  |  | *성적표 위에 얹힌 담임의 가느다란 손가락이 서랍 속  |
| 201 | `hidden_homeroom_d2_3_f` | {name} | teacher_office | teacher_normal |  |  | 직접 쓰는 건 아직 제 취향인지 잘 모르겠어요. |
| 202 | `hidden_homeroom_d2_3_g` | 담임선생님 | teacher_office | teacher_normal |  |  | 어라, 서랍 레일이 또 걸렸네. *두꺼운 원고지 모서리 |
| 203 | `hidden_homeroom_d2_choice1` | {name} | teacher_office | teacher_normal |  |  | *서랍에서 손을 거둔 담임이 찻잔 위로 피어오르는 김  |
| 204 | `hidden_homeroom_d2_choice1_b` | 담임선생님 | teacher_office | teacher_normal |  |  | *도자기 커피잔 손잡이를 손끝으로 천천히 한 바퀴 굴린 |
| 205 | `hidden_homeroom_d2_5` | 담임선생님 | teacher_office | teacher_normal |  |  | 뭐, 대단한 뜻이 있어서 물은 건 아니고 그냥 궁금해서 |
| 206 | `hidden_homeroom_d2_6` | 담임선생님 | teacher_office | teacher_normal |  |  | 내 책상이 좀 어수선하지? *삐져나온 원고지 뭉치를 안 |
| 207 | `hidden_homeroom_d2_7` | 담임선생님 | teacher_office | teacher_normal |  |  | 그래서 이틀째 지내 보니까 어때? 어제보단 교실 공기가 |
| 208 | `hidden_homeroom_d2_7_b` | {name} | teacher_office | teacher_normal |  |  | 네, 어제보다 훨씬 편해졌어요. 반 애들도 먼저 말 걸 |
| 209 | `hidden_homeroom_d2_8` | 담임선생님 | teacher_office | teacher_normal |  |  | 옆자리 다인이가 워낙 시끌벅적하지? 원래 저렇게 해맑은 |
| 210 | `hidden_homeroom_d2_8_b` | {name} | teacher_office | teacher_normal |  |  | 선생님께서 그렇게 말씀하시는 걸 보니 다인이가 교무실에 |
| 211 | `hidden_homeroom_d2_8_c` | 담임선생님 | teacher_office | teacher_normal |  |  | 유명하다기보다는 담임으로서 자꾸 신경이 쓰여서 그렇지. |
| 212 | `hidden_homeroom_d2_8_d` | {name} | teacher_office | teacher_normal |  |  | *펼쳐진 출석부의 '다인'이라는 두 글자 옆에서 담임이 |
| 213 | `hidden_homeroom_d2_8_e` | 담임선생님 | teacher_office | teacher_normal |  |  | *커피잔을 소리 없이 내려놓는다.* 아무튼 네 전학 서 |
| 214 | `hidden_homeroom_d2_8_f` |  | 없음 | 없음 |  |  |  |
| 215 | `hidden_homeroom_d2_9` | {name} | teacher_office | teacher_normal |  |  | 세심하게 챙겨 주셔서 감사합니다, 선생님. |
| 216 | `hidden_homeroom_d2_10` | 담임선생님 | teacher_office | teacher_normal |  |  | 이 정도는 담임이 당연히 해야 할 일이야. 괜히 마음의 |
| 217 | `hidden_homeroom_d2_choice2` | {name} | teacher_office | teacher_normal |  |  | *담임의 손끝이 코르크 컵받침 모서리를 같은 자리에서  |
| 218 | `hidden_homeroom_d2_choice2_b` | 담임선생님 | teacher_office | teacher_normal |  |  | 그래, 빈말이라도 그렇게 고마워해 주니 보람이 있네. |
| 219 | `hidden_homeroom_d2_11` | 담임선생님 | teacher_office | teacher_normal |  |  | 반에 다른 애들도 답답한 일 있으면 종종 찾아오거든.  |
| 220 | `hidden_homeroom_d2_11_b` | 담임선생님 | teacher_office | teacher_normal |  |  | 교무실 찾아오는 걸 미안해할 필요 전혀 없어. 그리고  |
| 221 | `hidden_homeroom_d2_12` |  | 없음 | 없음 |  |  |  |
| 222 | `hidden_homeroom_d2_freetalk` | 담임선생님 | teacher_office | teacher_normal |  |  | *담임이 의자를 내 쪽으로 돌린다.* 아직 궁금한 건  |
| 223 | `morning2_seo_dust_1` | 서연 | school_hallway | seyoun_normal |  |  | 너 1교시 수업 듣는 동안 대체 뭘 한 거야. *쉬는  |
| 224 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 움직이지 말고 잠깐 가만히 있어 봐. |
| 225 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *한 걸음 다가선 서연의 하얀 손끝이 내 교복 어깨에  |
| 226 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 어깨에 분필 가루 같은 게 묻어 있었어. |
| 227 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | 말도 없이 갑자기 손이 훅 들어와서 놀랐잖아. *괜히  |
| 228 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 뭘 그렇게까지 놀라? 그냥 먼지 털어 준 건데. |
| 229 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *분명 먼지는 다 털어 냈는데도 서연의 손끝이 닿았던  |
| 230 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 방금 그거 뭐야? 학생회장이 네 어깨 만진 거 맞 |
| 231 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 만진 게 아니라 어깨에 묻은 먼지 털어 준 거야. |
| 232 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 수상한데, 거기 진짜로 먼지가 붙어 있긴 했어? |
| 233 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | 진짜로 먼지 털어 준 것뿐이라니까. 왜 눈을 그렇게 뜨 |
| 234 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *아침에 받은 유나의 쪽지를 손안에 쥔다. 수업 사이마 |
| 235 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *이틀째 점심시간, 누구의 곁으로 향할까.* |
| 236 | `lunch2_seo_1_check` | {name} | school_hallway | 없음 |  |  | *햇살이 쏟아지는 위층 계단을 따라 옥상으로 올라간다. |
| 237 | `lunch2_seo_1b` | 서연 | top_school | seyoun_normal |  |  | 옥상 올라온 건 오늘이 처음이지? 이쪽 그늘에 앉으면  |
| 238 | `lunch2_seo_2b_check` |  | top_school | seyoun_normal |  |  |  |
| 239 | `lunch2_seo_2b_yuna_aff` |  | top_school | 없음 |  |  |  |
| 240 | `lunch2_seo_2b_cool` | 서연 | top_school | seyoun_normal |  |  | 원래 옥상은 학생회 허가제야. 오늘만 예외로 봐줄게. |
| 241 | `lunch2_seo_cool_cont` | {name} | top_school | seyoun_normal |  |  | *조용히 도시락 뚜껑이 열리고 두 사람 사이로 서늘한  |
| 242 | `lunch2_seo_cool_leave` | {name} | school_hallway | 없음 |  |  | *어색한 침묵 끝에 도시락 뚜껑을 덮고 옥상 철문을 나 |
| 243 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *종례가 끝난 방과 후 교실. 쉬는 시간마다 꺼냈던 휴 |
| 244 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 당장 체육관으로 튀어 와! 오늘은 진짜 제대로 된 내기 |
| 245 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 방과후에 학생회실로 잠깐 와 줄 수 있어? 오늘따라 일 |
| 246 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게선 따로 온 메시지가 없다. 대신 주머니 속  |
| 247 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *석양이 물들기 시작하는 방과후, 어디로 발걸음을 옮길 |
| 248 | `after2_yuna_1` | {name} | annex_exhibit_hallway | 없음 |  | 🌅 | *아침에 받았던 쪽지를 떠올리며 인적 드문 도서관 별관 |
| 249 | `after2_yuna_1_b` | {name} | annex_exhibit_hallway | 없음 |  | 🌅 | *노을이 비스듬히 스며든 별관 복도에는 인기척 하나 없 |
| 250 | `after2_yuna_2` | {name} | yuna_hideout_day.webp | yuna_normal |  | 🌅 | *문을 밀자 경첩이 나직이 삐걱거린다. 안쪽 소파에 깊 |
| 251 | `after2_yuna_tone` |  | yuna_hideout_day.webp | 없음 |  | 🌅 |  |
| 252 | `after2_yuna_cool_1` | 유나 | yuna_hideout_day.webp | yuna_bored |  | 🌅 | *소파 위 이어폰 한쪽만 슬쩍 치운다.* 옆에서 책 읽 |
| 253 | `after2_yuna_cool_cont` | {name} | yuna_hideout_day.webp | yuna_bored |  | 🌅 | *펼쳐진 책 한 페이지를 조용히 내려 읽는다. 유나는  |
| 254 | `after2_yuna_rival_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 255 | `after2_yuna_rival_dain_low` | 다인 | school_hallway | dain_laugh |  | 🌅 | 도서관 별관 쪽에 있었구나? 조심히 들어가고 내일 봐! |
| 256 | `after2_yuna_rival_seo_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 257 | `after2_yuna_rival_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 부족하던 일손은 다른 부원들로 채웠어. 내일 보자. |
| 258 | `after2_group_yuna_companion` | 유나 | library_old | 없음 |  | 🌅 | *별관 책상에 자료 두 묶음이 놓인다.* 한쪽을 끝내기 |
| 259 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *미묘한 여운이 감도는 대화를 마치고 가방을 고쳐 멘  |
| 260 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 261 | `minsu_warn_1` | {name} | school | 없음 |  | 🌅 | *노을이 지는 하교길. 교문을 막 나서는데 등 뒤에서  |
| 262 | `minsu_warn_1_b` | 민수 | school | minsu_normal |  | 🌅 | *내 보폭에 맞춰 옆에 나란히 서더니 주머니에 두 손을 |
| 263 | `minsu_warn_2` | 민수 | school | minsu_smirk |  | 🌅 | 야, 전학생. |
| 264 | `minsu_warn_3` | {name} | school | minsu_smirk |  | 🌅 | 응? 왜 불러? |
| 265 | `minsu_warn_4` | 민수 | school | minsu_smirk |  | 🌅 | 너 요즘 학교 다니는 거 꽤 재밌냐? |
| 266 | `minsu_warn_4_b` | {name} | school | minsu_normal |  | 🌅 | *민수는 내 쪽을 보지 않고 교문 건너편 깜빡이는 횡단 |
| 267 | `minsu_warn_5` | {name} | school | minsu_smirk |  | 🌅 | 갑자기 그게 무슨 소리야? |
| 268 | `minsu_warn_6` | 민수 | school | minsu_smirk |  | 🌅 | 점심엔 한 명, 방과후엔 또 한 명. 넌 재밌겠지. — |
| 269 | `night2_start` | {name} | room_my | 없음 |  |  | *따뜻한 물로 샤워를 마치고 젖은 머리를 털며 침대에  |
| 270 | `night2_msg_1` |  | 없음 | 없음 |  |  |  |
| 271 | `night2_msg_generic` | 다인 | room_my | dain_normal | 0.35 |  | 야 내일 아침에 교실에서 보자 늦지 마! |
| 272 | `night2_msg_generic_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 점심엔 옥상 열어 놓을게 |
| 273 | `night2_msg_generic_3` |  | 없음 | 없음 |  |  |  |
| 274 | `night2_msg_generic_3_established` | 유나 | room_my | yuna_normal | 0.35 |  | 내가 빌려준 책, 어디까지 읽었어? |
| 275 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *나란히 도착한 대화방 세 개를 번갈아 바라본다. 누구 |
| 276 | `night2_choice` | {name} | room_my | 없음 |  |  | *세 개의 말풍선 중 누구에게 가장 먼저 답장을 보낼까 |
| 277 | `night2_reply_dain_1` |  | 없음 | 없음 |  |  |  |
| 278 | `night2_reply_dain_1_first` | {name} | room_my | dain_normal | 0.35 |  | 내일 학교 앞에서 떡볶이 먹을래? 난 매운 건 좀 약한 |
| 279 | `night2_reply_dain_2` | 다인 | room_my | dain_normal | 0.35 |  | 어라 너 설마 매운 거 잘 못 먹는 체질이야? |
| 280 | `night2_reply_dain_3` | 다인 | room_my | dain_normal | 0.35 |  | 그럼 내일은 너 맞춰서 제일 순한 맛으로 시켜 줄게. |
| 281 | `night2_reply_dain_4` | 다인 | room_my | dain_normal | 0.35 |  | 아 근데 솔직히 안 매운 건 떡볶이라고 부르면 안 되지 |
| 282 | `night2_reply_dain_5` | {name} | room_my | dain_normal | 0.35 |  | *오늘 밤에도 다인다운 경쾌한 말풍선이 세 줄 연속으로 |
| 283 | `night2_reply_dain_react_default` | 다인 | room_my | dain_normal | 0.35 |  | ㅋㅋ 오케이 알겠어. 오늘 푹 자고 굿나잇! |
| 284 | `night2_dain_freetalk` | 다인 | room_my | dain_normal | 0.35 | 🌙 | 잠깐, 진짜 자기 전에. 오늘 제일 재밌었던 건 뭐였어 |
| 285 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 창을 정리하려는데 상단 알림 목록 사이에 학교 |
| 286 | `night2_hidden_homeroom_1` | {name} | room_my | teacher_normal | 0.35 |  | *학교 학사 상담 시스템에 새 알림이 떠 있다. '전학 |
| 287 | `night2_hidden_homeroom_2` | {name} | room_my | teacher_normal | 0.35 |  | *담임선생님의 이름 바로 아래에 방과후 교무실 비어 있 |
| 288 | `night2_hidden_homeroom_3` | {name} | room_my | teacher_normal | 0.35 |  | *화면 아래의 상담 예약 버튼 위치를 눈으로 확인한 뒤 |
| 289 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 마치고 길게 숨을 내쉬며 베개 옆으로 휴대폰을 |
| 290 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *남은 두 사람에게도 답장을 보내려다 손가락이 굳는다. |
| 291 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *사진첩 스크롤을 끝까지 내리자 나타난 3개월 전 봄  |
| 292 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *차마 전송 버튼을 누르지 못했던 문장들이 휴대폰 메모 |
| 293 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 임시 저장 메모가 마지막 문장이다. 그 아래 |
| 294 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *떨리는 엄지손가락을 사진 아래 휴지통 삭제 아이콘 위 |
| 295 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *다시 켠 메신저 목록에는 아직 내가 답하지 못한 두  |
| 296 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *방금 닫았던 소정이의 사진을 한 번 더 열어 본다.  |
| 297 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *가슴 한구석이 묵직하게 내려앉아 끝내 나머지 두 개의 |
| 298 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면 위로 세 사람의 이름이 나란히 쌓여 있다.  |
| 299 | `night2_end_2_b` |  | 없음 | 없음 |  |  |  |
| 300 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *액정 불빛이 완전히 꺼진 뒤에도 미지근한 열기가 남은 |
| 301 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *잠이 오지 않아 부엌으로 나와 불을 켠다. 내일 싸  |
| 302 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *서툰 손길로 부쳐 낸 계란말이와 소시지, 김과 밥을  |
| | **Day 3** | | | | | | |
| 303 | `morning3_start` | {name} | school | 없음 |  |  | *전학 사흘째, 금요일 아침. 밤늦도록 깜빡이는 메시지 |
| 304 | `morning3_start_2` | {name} | school | 없음 |  |  | *어깨에 멘 가방끈을 꽉 쥐고 숨이 턱 끝까지 차오르도 |
| 305 | `hidden_homeroom_d3_1` | {name} | room_school | teacher_normal |  |  | 선생님, 여기 계셨네요. *아무도 없는 빈 교실 문을  |
| 306 | `hidden_homeroom_d3_3` | 담임선생님 | room_school | teacher_shy |  |  | *미처 거두지 못한 펜촉 끝에서 검은 잉크 점 하나가  |
| 307 | `hidden_homeroom_d3_3_b` | 담임선생님 | room_school | teacher_shy |  |  | *담임선생님이 당황한 기색을 감추며 손바닥으로 종이 한 |
| 308 | `hidden_homeroom_d3_4` | 담임선생님 | room_school | teacher_sad |  |  | 별거 아니야, 그냥 학교 업무 서류 정리하던 중이었어. |
| 309 | `hidden_homeroom_d3_4_b` | {name} | room_school | teacher_sad |  |  | *뒤집힌 종이 뒷면으로 수없이 고쳐 쓴 손글씨와 붉은  |
| 310 | `hidden_homeroom_d3_4_c` | 담임선생님 | room_school | teacher_sad |  |  | *담임은 출석부를 끌어당겨 원고지 위를 덮으려 하지만  |
| 311 | `hidden_homeroom_d3_4_d` | 담임선생님 | room_school | teacher_sad |  |  | *목소리가 반 톤 낮아진다.* 뭘 그렇게 유심히 봐.  |
| 312 | `hidden_homeroom_d3_4_g` | {name} | room_school | teacher_sad |  |  | *원고지 첫 장 귀퉁이에 적힌 빨간 글씨, '보류'.  |
| 313 | `hidden_homeroom_d3_choice` | {name} | room_school | teacher_normal |  |  | *교탁 하나를 사이에 둔 가까운 거리. 담임이 원고 끝 |
| 314 | `hidden_homeroom_d3_reveal_1` | 담임선생님 | room_school | teacher_normal |  |  | *담임의 어깨에서 긴장이 풀리며 낮은 숨소리가 흩어진다 |
| 315 | `hidden_homeroom_d3_reveal_1_b` | {name} | room_school | teacher_normal |  |  | 7년이나요? |
| 316 | `hidden_homeroom_d3_reveal_1_c` | 담임선생님 | room_school | teacher_normal |  |  | 응, 7년. 대학 문예창작과 다닐 때 첫 줄을 썼거든. |
| 317 | `hidden_homeroom_d3_reveal_1_d` | {name} | room_school | teacher_normal |  |  | 선생님이 문예창작과 출신이셨어요? |
| 318 | `hidden_homeroom_d3_reveal_1_e` | 담임선생님 | room_school | teacher_normal |  |  | 졸업 무렵에 신춘문예랑 공모전에 몇 번 냈는데 다 떨어 |
| 319 | `hidden_homeroom_d3_reveal_1_f` | 담임선생님 | room_school | teacher_normal |  |  | *담임이 뒤집어 두었던 원고지 한 장을 천천히 들어 올 |
| 320 | `hidden_homeroom_d3_reveal_2` | 담임선생님 | room_school | teacher_normal |  |  | 마지막 투고 결과를 기다리던 날, 끝내 당선 연락이 안 |
| 321 | `hidden_homeroom_d3_reveal_2_b` | 담임선생님 | room_school | teacher_normal |  |  | 학교에 자리 잡으면 자연히 잊힐 줄 알았는데 자취방과  |
| 322 | `hidden_homeroom_d3_reveal_2_c` | {name} | room_school | teacher_normal |  |  | 차마 버리지 못하고 여기까지 데려오신 거네요. |
| 323 | `hidden_homeroom_d3_reveal_2_d` | 담임선생님 | room_school | teacher_normal |  |  | *담임은 흩어진 원고 모서리를 가지런히 맞추다 작게 한 |
| 324 | `hidden_homeroom_d3_reveal_2_e` | 담임선생님 | room_school | teacher_normal |  |  | 미련이라고 부르면 아픈데, 그냥 버리기 아까운 종이 뭉 |
| 325 | `hidden_homeroom_d3_reveal_2_f` | 담임선생님 | room_school | teacher_normal |  |  | *닳아빠진 원고지 귀퉁이를 손끝으로 쓸어내리던 담임이  |
| 326 | `hidden_homeroom_d3_reveal_3` | 담임선생님 | room_school | teacher_normal |  |  | 그렇게 남들 글을 가르치는 국어 교사가 됐어. 우습지, |
| 327 | `hidden_homeroom_d3_reveal_3_b` | {name} | room_school | teacher_normal |  |  | 정말로 포기하신 거예요? |
| 328 | `hidden_homeroom_d3_reveal_3_c` | 담임선생님 | room_school | teacher_normal |  |  | *원고지 위에 얹혀 있던 담임의 손가락이 미세하게 떨리 |
| 329 | `hidden_homeroom_d3_reveal_4` | 담임선생님 | room_school | teacher_normal |  |  | 포기했다고 말하면 깔끔하겠지. 그런데 수업 비는 시간마 |
| 330 | `hidden_homeroom_d3_reveal_4_b` | {name} | room_school | teacher_normal |  |  | *손때가 묻어 부드러워진 원고 가장자리. 담임의 손끝이 |
| 331 | `hidden_homeroom_d3_reveal_4_c` | 담임선생님 | room_school | teacher_normal |  |  | *담임이 원고지 뭉치를 출석부 옆으로 따로 떼어 놓는다 |
| 332 | `hidden_homeroom_d3_reveal_4_d` | {name} | room_school | teacher_normal |  |  | 저도 한 번 읽어 보면 안 돼요? |
| 333 | `hidden_homeroom_d3_reveal_4_e` | 담임선생님 | room_school | teacher_normal |  |  | *담임이 고개를 들어 내 눈을 똑바로 마주 본다.* 다 |
| 334 | `hidden_homeroom_d3_reveal_4_f` | 담임선생님 | room_school | teacher_normal |  |  | *담담하게 말을 마치고도 긴장이 가시지 않는지 원고 귀 |
| 335 | `hidden_homeroom_d3_reveal_4_g` | {name} | room_school | teacher_normal |  |  | 네, 합평회 날 공개되면 누구보다 먼저 읽을게요. |
| 336 | `hidden_homeroom_d3_reveal_choice` | {name} | room_school | teacher_normal |  |  | *7년이라는 세월이 내려앉은 원고지 위로 아침 햇살이  |
| 337 | `hidden_homeroom_d3_reveal_choice_b` | 담임선생님 | room_school | teacher_normal |  |  | 아이들이 빠져나간 빈 교실이 교무실보다 훨씬 조용하거든 |
| 338 | `hidden_homeroom_d3_reveal_5` | 담임선생님 | room_school | teacher_normal |  |  | 이번 주 안으로 국어과 동료 선생님들께도 먼저 보여 드 |
| 339 | `hidden_homeroom_d3_reveal_6` | 담임선생님 | room_school | teacher_smile |  |  | *담임은 아랫입술을 한 번 지그시 깨물었다 놓으면서도  |
| 340 | `hidden_homeroom_d3_reveal_6_b` | 담임선생님 | room_school | teacher_normal |  |  | 지금까지는 밤마다 혼자 고치고 혼자 지웠는데 이번엔 남 |
| 341 | `hidden_homeroom_d3_reveal_6_c` | {name} | room_school | teacher_smile |  |  | *담임이 작게 헛기침하며 원고 모서리를 탁탁 맞춘다.  |
| 342 | `hidden_homeroom_d3_reveal_6_d` | 담임선생님 | room_school | teacher_normal |  |  | 고맙다. 오늘 네가 먼저 물어봐 주지 않았으면 또 겁이 |
| 343 | `hidden_homeroom_d3_reveal_6_e` | 담임선생님 | room_school | teacher_smile |  |  | *담임의 엄지 끝에 눌린 원고지 귀퉁이가 미세하게 휘어 |
| 344 | `hidden_homeroom_d3_reveal_6_f` | 담임선생님 | room_school | teacher_normal |  |  | 원고에 대한 자세한 감상은 문예부 합평회 날 정식으로  |
| 345 | `hidden_homeroom_d3_reveal_6_g` | 담임선생님 | room_school | teacher_smile |  |  | 나머지 분량은 서류 봉투에 넣어 둬야겠어. *원고 뭉치 |
| 346 | `hidden_homeroom_d3_end` | 담임선생님 | room_school | teacher_smile |  |  | *담임이 원고를 갈무리해 덮어 두고 교탁 옆 창문을 활 |
| 347 | `hidden_homeroom_d3_freetalk` | 담임선생님 | room_school | teacher_normal |  |  | *원고를 서류 파일에 반듯하게 끼워 넣은 담임이 교탁에 |
| 348 | `hidden_nurse_d3_check` | {name} | room_school | 없음 |  |  | *쉬는 시간이 끝나 가고 복도 끝에서 발소리가 분주해진 |
| 349 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | *복도 창가에서 서연이 반 걸음 다가서며 목소리를 낮춘 |
| 350 | `morning3_date_seo_skip` |  | school_hallway | 없음 |  |  |  |
| 351 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끄고는 눈이 마주치 |
| 352 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 자, 그럼 이제 내 차례지! 이번 주말에 나랑 오락실  |
| 353 | `morning3_date_dain_skip` |  | room_school | 없음 |  |  |  |
| 354 | `morning3_date_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 이쪽을 흘끗 보다가 가방 지퍼를 끝까지 당겨  |
| 355 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심시간 직전, 유나가 소리 없이 다가와 네모나게 접 |
| 356 | `morning3_date_yuna_skip` |  | room_school | 없음 |  |  |  |
| 357 | `morning3_date_yuna_low` | 유나 | room_school | yuna_normal |  |  | *유나는 접어 둔 쪽지 끝을 만지작거리다 다시 책갈피  |
| 358 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 359 | `morning3_end` | {name} | room_school | 없음 |  |  | *오전 마지막 수업을 끝내는 종이 울리고 폭풍 전야 같 |
| 360 | `morning3_end_b` |  | 없음 | 없음 |  |  |  |
| 361 | `lunch3_start` | 유나 | room_school | yuna_normal |  |  | 내 빵도 반 나눠 먹어. *사흘째 점심, 교실에서 책상 |
| 362 | `lunch3_start_2_b` | 다인 | room_school | yuna_normal |  |  | 이 계란말이, 내가 먼저 먹어도 되는 거지? 일단 맛부 |
| 363 | `lunch3_meal_1` | 다인 | room_school | yuna_normal |  |  | 오, 간 딱 맞는데! 회장님도 얼른 드세요. 오늘은 옆 |
| 364 | `lunch3_meal_2` | {name} | room_school | yuna_normal |  |  | 잠깐만, 그건 내 도시락 반찬인데. |
| 365 | `lunch3_meal_3` | 서연 | room_school | yuna_normal |  |  | *서연이 내 도시락에서 계란말이 한 조각을 집어 맛본다 |
| 366 | `lunch3_meal_4` | {name} | room_school | yuna_normal |  |  | 남의 점심 반찬에 냉정하게 점수 매기지 마. |
| 367 | `lunch3_meal_5` | 서연 | room_school | yuna_normal |  |  | *서연의 입꼬리가 얄밉게 올라간다.* 10점 만점에 6 |
| 368 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *말없이 지켜보던 유나가 젓가락을 뻗어 도시락 한가운데 |
| 369 | `lunch3_meal_7` | {name} | room_school | yuna_normal |  |  | 유나야, 그 칼집 낸 소시지는 내가 제일 아껴 둔 건데 |
| 370 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *유나가 소시지를 천천히 베어 물며 맞은편의 다인을 바 |
| 371 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | 어, 잠깐만! 그건 마지막 남은 조각이야. *내 외침과 |
| 372 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *텅 빈 도시락통 한가운데에 노릇하게 구워진 마지막 계 |
| 373 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *숨소리조차 잦아든 식탁 위, 마지막 반찬을 건넬 사람 |
| 374 | `lunch3_give_yuna_aff` |  | room_school | 없음 |  |  |  |
| 375 | `lunch3_give_yuna_1` | 유나 | room_school | yuna_normal |  |  | *유나의 눈동자가 작게 흔들리더니 이내 옅은 미소가 번 |
| 376 | `lunch3_yuna_skin_check` |  | room_school | yuna_normal |  |  |  |
| 377 | `lunch3_give_yuna_2_check` |  | room_school | 없음 |  |  |  |
| 378 | `lunch3_give_yuna_seo_affinity` |  | room_school | 없음 |  |  |  |
| 379 | `lunch3_give_yuna_seo_low` | 서연 | room_school | seyoun_normal |  |  | *서연은 말없이 자기 도시락통과 수저집을 정리한다.* |
| 380 | `lunch3_give_yuna_3_check` |  | room_school | 없음 |  |  |  |
| 381 | `lunch3_give_yuna_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 빈 물병을 가방 옆주머니에 꽂아 넣는다.* 난 |
| 382 | `lunch3_end` | {name} | room_school | 없음 |  |  | *점심시간 종료를 알리는 종소리에 각자 도시락을 덮는다 |
| 383 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과 후, 노을빛 복도 갈림길에 선다. 사흘째 지나는 |
| 384 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *주머니 속 휴대폰을 만지작거린다. 엉켜 버린 주말 약 |
| 385 | `after3_choice` | {name} | school_hallway | 없음 |  | 🌅 | *석양이 물드는 복도 끝, 어디로 발걸음을 옮길까.* |
| 386 | `after3_walk_home` | {name} | school_hallway | 없음 |  | 🌅 | *오늘은 누구에게도 섣불리 말을 붙일 자신이 없다. 무 |
| 387 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *길었던 방과 후 시간이 끝났다. 복도 천장의 형광등이 |
| 388 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 389 | `after3_group_teacher_companion` | 담임선생님 | school_event_classroom | 없음 |  | 🌅 | *창문이 열린 교실 교탁 위에 문예 행사 원고 뭉치와  |
| 390 | `after3_group_return` | {name} | school_hallway | 없음 |  | 🌅 | *남은 일손 돕기를 마치고 저물어 가는 복도로 나온다. |
| 391 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 392 | `minsu_d3_check` | {name} | 없음 | 없음 |  | 🌅 |  |
| 393 | `night3_start` | {name} | room_my | 없음 |  |  | *금요일 밤, 지친 몸으로 방에 돌아와 교복 차림으로  |
| 394 | `night3_start_2` | {name} | room_my | 없음 |  |  | *불도 켜지 않은 방 안, 책상 위에 엎어 두었던 휴대 |
| 395 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *어두운 천장 아래로 휴대폰 불빛이 번진다. 도착해 있 |
| 396 | `night3_dream_1` | {name} | room_my | 없음 |  |  | *스탠드 조명을 끄려다 휴대폰을 한 번 더 집어 든다. |
| 397 | `night3_dream_2_b` | {name} | room_my | 없음 |  |  | *머리맡에 휴대폰을 내려놓는다. 내일 아침 마주 보며  |
| 398 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *잠들기 전, 휴대폰 갤러리 깊숙한 곳에서 예전 학교의 |
| 399 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *화면에 '이 사진을 삭제하시겠습니까?'라는 확인 창이 |
| 400 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *푸르스름한 액정 빛을 가만히 내려다본다. 소정이의 책 |
| 401 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *확인 창에서 조용히 취소를 누른다. 사진 한 장을 지 |
| 402 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼 대신 이동 메뉴를 눌러 사진을 새 폴더로  |
| 403 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *사진 아래에 짧은 메모를 남긴다. 소정이에게 끝내 건 |
| 404 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *새로 만든 폴더 안에 사진 한 장이 조용히 자리 잡는 |
| 405 | `night3_faithful_reflect_4_b` |  | 없음 | 없음 |  |  |  |
| 406 | `night3_faithful_reflect_4_c` |  | 없음 | 없음 |  |  |  |
| 407 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 내일 아침 알람을 맞춘다. 휴대폰을 내 |
| 408 | `night3_end` | {name} | room_my | 없음 |  |  | *금요일 시간표가 적힌 교과서를 덮고 스탠드 불을 완전 |
| | **Day 4** | | | | | | |
| 409 | `morning4_start` | {name} | room_my_day.webp | 없음 |  |  | *넷째 날, 토요일 아침. 커튼 틈으로 스며든 주말 햇 |
| 410 | `morning4_date_plan_check` |  | 없음 | 없음 |  |  |  |
| 411 | `morning4_fallback_msg` | {name} | room_my_day.webp | 없음 |  |  | *주말 아침의 고요한 방 안. 밤새 온 알림을 정리하고 |
| 412 | `morning4_hidden_check` | {name} | street | 없음 |  |  | *이른 아침 공기를 가르며 학교 앞 사거리 횡단보도에서 |
| 413 | `morning4_manuscript_check` |  | street | 없음 |  |  |  |
| 414 | `hidden_homeroom_d4_1` | {name} | street | teacher_normal |  |  | 선생님, 좋은 아침이에요. *반쯤 열린 정문 앞에서 두 |
| 415 | `hidden_homeroom_d4_1_b` | {name} | street | teacher_normal |  |  | *시선이 부딪히자마자 선생님은 반사적으로 종이봉투를 등 |
| 416 | `hidden_homeroom_d4_2` | 담임선생님 | street | teacher_normal |  |  | 어? {name}? 이 시간에 학교 앞엔 웬일이야? |
| 417 | `hidden_homeroom_d4_3` | {name} | street | teacher_normal |  |  | 선생님이야말로 쉬는 주말인데 아침부터 학교에 나오셨어요 |
| 418 | `hidden_homeroom_d4_3_b` | 담임선생님 | street | teacher_shy |  |  | 문예부 합평회가 잡혀 있어서 잠깐 들렀어. 교무실에 두 |
| 419 | `hidden_homeroom_d4_3_c` | {name} | street | teacher_sad |  |  | *평소 교단에서 보던 단정한 정장 대신 부드러운 베이지 |
| 420 | `hidden_homeroom_d4_3_d` | {name} | street | teacher_sad |  |  | 쉬는 날에도 문예부 합평회를 열어요? |
| 421 | `hidden_homeroom_d4_3_e` | 담임선생님 | street | teacher_normal |  |  | 참가 신청한 부원들이 주말 오전밖에 시간이 안 맞는다더 |
| 422 | `hidden_homeroom_d4_4` | {name} | street | teacher_normal |  |  | *봉투 손잡이를 쥔 선생님의 가느다란 손가락 마디가 유 |
| 423 | `hidden_homeroom_d4_4_b` | 담임선생님 | street | teacher_normal |  |  | 그나저나 너는 아침 일찍 왜 이 근처를 서성이고 있었어 |
| 424 | `hidden_homeroom_d4_4_c` | {name} | street | teacher_normal |  |  | 근처에 볼일이 있어서 지나가던 길이었어요. |
| 425 | `hidden_homeroom_d4_4_d` | 담임선생님 | street | teacher_angry |  |  | 그냥 지나가는 길이라기엔 정문 안쪽을 꽤 오래 들여다보 |
| 426 | `hidden_homeroom_d4_4_e` | {name} | street | teacher_sad |  |  | *정문 경비실에서 흘러나오는 나른한 라디오 음악 소리만 |
| 427 | `hidden_homeroom_d4_5` | 담임선생님 | street | teacher_normal |  |  | 문예부 애들은 근처 카페에 먼저 가 있고 다른 인원들도 |
| 428 | `hidden_homeroom_d4_5_b` | {name} | street | teacher_normal |  |  | 문예부원도 아닌데 제가 옆에 끼어도 괜찮아요? |
| 429 | `hidden_homeroom_d4_5_c` | 담임선생님 | street | teacher_normal |  |  | 외부 독자 의견도 듣는 공개 합평이라 상관없어. 원고를 |
| 430 | `hidden_homeroom_d4_5_d` | 담임선생님 | street | teacher_shy |  |  | 담임이 쓴 글이라고 부담 가질 필요는 전혀 없어. 주말 |
| 431 | `hidden_homeroom_d4_choice` | {name} | street | teacher_normal |  |  | *선생님이 숨을 고를 때마다 품에 안은 봉투 안에서 원 |
| 432 | `hidden_homeroom_d4_cafe_1` | 담임선생님 | cafe | teacher_normal |  |  | 저기 창가 쪽 긴 테이블에 문예부 애들 모여 있지? 다 |
| 433 | `hidden_homeroom_d4_cafe_1_b` | {name} | cafe | teacher_normal |  |  | 선생님, 평소보다 꽤 긴장하신 것 같은데요? |
| 434 | `hidden_homeroom_d4_cafe_1_c` | 담임선생님 | cafe | teacher_normal |  |  | 티 나니? 솔직히 지금이라도 봉투째로 다시 들고 도망칠 |
| 435 | `hidden_homeroom_d4_cafe_1_d` | 담임선생님 | cafe | teacher_smile |  |  | 그래도 시킨 커피는 마시고 가야겠지. *애써 농담처럼  |
| 436 | `hidden_homeroom_d4_cafe_1_e` | {name} | cafe | teacher_sad |  |  | 부원들한테는 원고 어느 대목부터 보여주실 생각이에요? |
| 437 | `hidden_homeroom_d4_cafe_1_f` | 담임선생님 | cafe | teacher_normal |  |  | 막상 추려 내려니 영 부끄럽네. 밤에 혼자 스탠드 켜  |
| 438 | `hidden_homeroom_d4_cafe_2` | 담임선생님 | cafe | teacher_normal |  |  | 우선 도입부랑 첫 장면부터 돌리려고. 인물들이 주고받는 |
| 439 | `hidden_homeroom_d4_cafe_2_b` | {name} | cafe | teacher_normal |  |  | 제가 적는 감상도 정식 합평 기록에 들어가요? |
| 440 | `hidden_homeroom_d4_cafe_2_c` | 담임선생님 | cafe | teacher_smile |  |  | 이름은 전부 가리고 코멘트만 모을 거야. 누가 썼느냐보 |
| 441 | `hidden_homeroom_d4_cafe_2_d` | {name} | cafe | teacher_sad |  |  | *의자 옆에 세워 둔 선생님의 가죽 가방 틈으로 원고  |
| 442 | `hidden_homeroom_d4_cafe_2_e` | 담임선생님 | cafe | teacher_normal |  |  | 글 쓰는 사람한테 합평 자리에서 제일 두려운 게 뭔지  |
| 443 | `hidden_homeroom_d4_cafe_3` | 담임선생님 | cafe | teacher_normal |  |  | 예의 바른 칭찬보다 읽다가 페이지를 못 넘기고 멈칫하는 |
| 444 | `hidden_homeroom_d4_cafe_choice` | 담임선생님 | cafe | teacher_normal |  |  | 읽다가 어색하거나 숨이 막히는 대목이 있으면 가감 없이 |
| 445 | `hidden_homeroom_d4_cafe_trap` | 담임선생님 | cafe | teacher_normal |  |  | 그렇게 인사치레만 들으려는 자리였으면 애초에 인쇄본을  |
| 446 | `hidden_homeroom_d4_cafe_4` | 담임선생님 | cafe | teacher_normal |  |  | 비평하려 하지 말고 그냥 네 눈에 밟히는 문장만 체크해 |
| 447 | `hidden_homeroom_d4_cafe_4_b` | {name} | cafe | teacher_shy |  |  | *대답을 기다리는 선생님의 엄지손가락이 종이 컵홀더 모 |
| 448 | `hidden_homeroom_d4_cafe_5` | {name} | cafe | teacher_normal |  |  | 알겠어요. 제 나름대로 솔직하게 적어서 드릴게요. |
| 449 | `hidden_homeroom_d4_cafe_5_b` | {name} | cafe | teacher_smile |  |  | 여백에 메모할 때 제 이름은 비워 둘까요? 문예부 애들 |
| 450 | `hidden_homeroom_d4_cafe_5_c` | 담임선생님 | cafe | teacher_smile |  |  | 배려해 줘서 고마워. 무기명 합평이 원칙이니까 이름은  |
| 451 | `hidden_homeroom_d4_cafe_5_d` | {name} | cafe | teacher_normal |  |  | 이렇게 주말에 원고 나누는 것도 학교 업무의 연장선이에 |
| 452 | `hidden_homeroom_d4_cafe_5_e` | 담임선생님 | cafe | teacher_normal |  |  | 서류상으로는 동아리 지도 활동이라고 해 두자. |
| 453 | `hidden_homeroom_d4_cafe_5_f` | {name} | cafe | teacher_smile |  |  | *안쪽 테이블에서 기다리던 문예부 부원이 조심스럽게 다 |
| 454 | `hidden_homeroom_d4_cafe_5_g` | 담임선생님 | cafe | teacher_normal |  |  | 여기서 모인 메모들은 정리해서 다음 부활동 시간에 다  |
| 455 | `hidden_homeroom_d4_cafe_5_h` | {name} | cafe | teacher_normal |  |  | 교무실이 아니라 원두 냄새 나는 카페에서 선생님 글을  |
| 456 | `hidden_homeroom_d4_cafe_6` | 담임선생님 | cafe | teacher_normal |  |  | 다음번엔 차분하게 학교 도서실에서 모이자. 마음이 급해 |
| 457 | `hidden_homeroom_d4_cafe_6_b` |  | 없음 | 없음 |  |  |  |
| 458 | `hidden_homeroom_d4_freetalk` | 담임선생님 | cafe | teacher_normal |  |  | *한 김 식은 커피잔 옆으로 메모가 적힌 원고 뭉치를  |
| 459 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 460 | `day4_haeun_gate` |  | 없음 | 없음 |  |  |  |
| 461 | `day4_haeun_trust_check` |  | 없음 | 없음 |  |  |  |
| 462 | `day4_haeun_personal_gate` |  | 없음 | 없음 |  |  |  |
| 463 | `morning4_end` | {name} | room_my_day.webp | 없음 |  |  | *집으로 돌아와 거울 앞에서 셔츠 깃과 머리카락을 정돈 |
| 464 | `day4_date_branch` |  | 없음 | 없음 |  |  |  |
| 465 | `day4_night_start` | {name} | school | 없음 |  |  | *어스름이 짙게 깔린 학교를 나서서 집으로 돌아갈 시간 |
| 466 | `day4_night_branch` | 시스템 | 없음 | 없음 |  |  |  |
| 467 | `day4_teacher_checkin` | {name} | school | 없음 |  |  | *주말 행사 준비로 학교에 남았던 학생들에게 담임선생님 |
| 468 | `day4_adult_teacher_student_rank` |  | 없음 | 없음 |  |  |  |
| 469 | `day4_teacher_yuna_counteroffer` | 유나 | school_back | yuna_sad | 0.35 |  | *어두운 별관 모퉁이를 지날 때 휴대폰이 짧게 진동한다 |
| 470 | `day4_adult_return_home` | {name} | room_my | 없음 |  |  | *집에 무사히 도착해 학교 앱의 귀가 확인 버튼을 누른 |
| 471 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 472 | `night_homeroom_msg_1` | 담임선생님 | room_my | teacher_sad | 0.35 |  | *학교 학습 포털 공지 알림* 문예부 합평회용 수정 원 |
| 473 | `night_homeroom_msg_2` | 담임선생님 | room_my | teacher_normal | 0.35 |  | *학교 학습 포털 공지 알림* 추가 감상을 남기고 싶은 |
| 474 | `night_homeroom_msg_3` | {name} | room_my | teacher_normal | 0.35 |  | *밤 아홉 시 정각에 올라온 담임선생님의 공지 글 아래 |
| 475 | `day4_hidden_msg_after_homeroom` | 시스템 | room_my | 없음 |  |  |  |
| 476 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *일요일 아침 알람을 맞춰 두고 방 안의 스탠드 불을  |
| 477 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안의 시계 바늘이 자정을 넘어 다섯째 날로 향한다 |
| | **Day 5** | | | | | | |
| 478 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날, 일요일 아침. 교문 너머로 축제 현수막이 |
| 479 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 480 | `morning5_start_b` |  | 없음 | 없음 |  |  |  |
| 481 | `morning5_start_2_b` |  | 없음 | 없음 |  |  |  |
| 482 | `morning5_mood_check` | 시스템 | room_school | 없음 |  |  |  |
| 483 | `morning5_mood_low` | {name} | room_school | 없음 |  |  | *전학 온 첫 주가 저물어 간다. 휴대폰 잠금화면에 나 |
| 484 | `morning5_gate` |  | 없음 | 없음 |  |  |  |
| 485 | `morning5_seo_note_1` | 서연 | room_school | seyoun_normal | 0.35 |  | *내 책상 한가운데, 모서리를 반듯하게 맞춘 쪽지 한  |
| 486 | `morning5_seo_note_1_b` | {name} | school_hallway | 없음 |  |  | *복도 창가를 따라 꾸며진 문예부 전시 코너를 지나다가 |
| 487 | `morning5_seo_note_1_c` | {name} | school_hallway | 없음 |  |  | *문예부 게시판 한켠에 단편소설 원고 몇 장이 압정으로 |
| 488 | `morning5_yuna_story_1` | {name} | school_hallway | yuna_normal | 0.35 |  | *원고 속 화자는 오후의 도서관 책상에 엎드려 잠든 누 |
| 489 | `morning5_yuna_story_2` | {name} | school_hallway | 없음 |  |  | *원고의 맨 끝 문장에 시선이 닿는다. '그 사람이 눈 |
| 490 | `morning5_yuna_story_4` | {name} | school_hallway | yuna_normal | 0.35 |  | *원고지 맨 아래 여백 구석에는 연필로 아주 작게 덧붙 |
| 491 | `morning5_return_class` | {name} | room_school | dain_normal |  |  | *복도 끝에서 교실로 돌아오자, 문가에 등을 기댄 채  |
| 492 | `morning5_dain_1` | 다인 | room_school | dain_normal |  |  | *내 어깨를 가볍게 툭 치며 장난스럽게 웃는다.* 야, |
| 493 | `morning5_dain_1_b` | {name} | room_school | dain_normal |  |  | 내 허락도 안 받고 마음대로 적어 놓으면 어떡해? |
| 494 | `morning5_dain_2` | 다인 | room_school | dain_laugh |  |  | *포니테일이 흔들리도록 고개를 휙 젖히며 볼에 바람을  |
| 495 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *축제 준비로 복도가 소란스러운 틈을 지나, 문이 반쯤 |
| 496 | `hidden_homeroom_d5_1` | {name} | room_school | teacher_sad |  |  | 선생님, 아직 여기 계셨네요. 손에 드신 그 봉투는.. |
| 497 | `hidden_homeroom_d5_1_b` | 담임선생님 | room_school | teacher_normal |  |  | *고개를 들며 옅게 숨을 내쉰다.* 아, 왔구나. |
| 498 | `hidden_homeroom_d5_1_c` | {name} | room_school | teacher_normal |  |  | 선생님. |
| 499 | `hidden_homeroom_d5_1_d` | 담임선생님 | room_school | teacher_normal |  |  | *손에 쥐고 있던 갈색 봉투를 내 눈높이로 살짝 들어  |
| 500 | `hidden_homeroom_d5_1_e` | {name} | room_school | teacher_normal |  |  | 그 안엔 뭐가 들어 있는데요? |
| 501 | `hidden_homeroom_d5_2` | 담임선생님 | room_school | teacher_sad |  |  | 문예부 합평회에 낼 인쇄본이야. 아직 결말은 비어 있는 |
| 502 | `hidden_homeroom_d5_3` | 담임선생님 | room_school | teacher_normal |  |  | *봉투 겉면을 쓸어내리는 손끝에 잔잔한 떨림이 스친다. |
| 503 | `hidden_homeroom_d5_4` | {name} | room_school | teacher_sad |  |  | 이 번호로 적어서 내면 되는 거죠? *봉투에서 반쯤 모 |
| 504 | `hidden_homeroom_d5_5` | 담임선생님 | room_school | teacher_normal |  |  | *민망한 듯 뺨을 긁적인다.* 참 이상하지. 복사기로  |
| 505 | `hidden_homeroom_d5_choice` | {name} | room_school | teacher_sad |  |  | *선생님이 건넨 원고 봉투를 두 팔로 안아 든다. 종이 |
| 506 | `hidden_homeroom_d5_correct_1` | {name} | room_school | teacher_normal |  |  | 선생님, 지금 시간 조금 괜찮으시면 이 자리에서 바로  |
| 507 | `hidden_homeroom_d5_correct_2` | 담임선생님 | room_school | teacher_normal |  |  | ...지금, 바로 여기서? |
| 508 | `hidden_homeroom_d5_correct_3` | {name} | room_school | teacher_normal |  |  | 네. 읽지도 않은 채로 빈말만 늘어놓고 싶진 않거든요. |
| 509 | `hidden_homeroom_d5_correct_4` | 담임선생님 | room_school | teacher_normal |  |  | *잠시 내 눈을 깊이 들여다보더니 조용히 의자를 내어  |
| 510 | `hidden_homeroom_d5_correct_5` | {name} | room_school | teacher_normal |  |  | *종이 넘기는 소리만 사각거리는 빈 교실. 원고의 마지 |
| 511 | `hidden_homeroom_d5_correct_6` | 담임선생님 | room_school | teacher_shy |  |  | *내 어깨 너머로 시선을 떨군 채 낮게 묻는다.* .. |
| 512 | `hidden_homeroom_d5_correct_7` | 담임선생님 | room_school | teacher_shy |  |  | 이상하게 그 마지막 장만 펼치면 펜 끝이 얼어붙은 것처 |
| 513 | `hidden_homeroom_d5_correct_8` | 담임선생님 | room_school | teacher_shy |  |  | ...바로 이 줄에서. *선생님의 가느다란 손가락이 내 |
| 514 | `hidden_homeroom_d5_correct_9` | {name} | room_school | teacher_normal |  |  | 이 마지막 장에서 왜 걸음이 멈췄는지, 제 생각을 여백 |
| 515 | `hidden_homeroom_d5_correct_10` | 담임선생님 | room_school | teacher_smile |  |  | *놀란 듯 눈을 크게 떴다가 이내 부드럽게 눈매를 휘어 |
| 516 | `hidden_homeroom_d5_correct_11` | {name} | room_school | teacher_smile |  |  | 네. 지금은 학생이 아니라, 선생님 글을 끝까지 따라온 |
| 517 | `hidden_homeroom_d5_correct_12` | 담임선생님 | room_school | teacher_smile |  |  | ...바로 그렇게 읽어 줄 사람이 필요했어. 내가 쓴  |
| 518 | `hidden_homeroom_d5_correct_13` | 담임선생님 | room_school | teacher_smile |  |  | 좋아. 뒷장 익명 의견란에 네가 느낀 그대로 적어 줘. |
| 519 | `hidden_homeroom_d5_correct_14` | {name} | room_school | 없음 |  |  | 알겠습니다. 한 줄도 안 빼놓고 읽은 뒤에 적어 올게요 |
| 520 | `hidden_homeroom_d5_6` | 담임선생님 | room_school | teacher_normal |  |  | 여기, 이건 네 몫의 번호야. 다른 부원들 합평본이랑  |
| 521 | `hidden_homeroom_d5_6_b` | {name} | room_school | teacher_normal |  |  | *저녁 무렵 카페 안쪽 테이블에 수북이 쌓여 있던 합평 |
| 522 | `hidden_homeroom_d5_6_c` |  | 없음 | 없음 |  |  |  |
| 523 | `hidden_homeroom_d5_6_d` | 담임선생님 | room_school | teacher_normal |  |  | 네가 읽은 자리까지만 꾸밈없이 적어 주면 돼. 이름은  |
| 524 | `hidden_homeroom_d5_6_e` | {name} | room_school | teacher_normal |  |  | 선생님. |
| 525 | `hidden_homeroom_d5_6_f` | {name} | room_school | teacher_normal |  |  | 대신 선생님도 필체 보고 누가 썼는지 일부러 찾지 마세 |
| 526 | `hidden_homeroom_d5_6_g` | 담임선생님 | room_school | teacher_smile |  |  | 누가 썼는지는 굳이 안 찾아볼게. 그 종이 위에 어떤  |
| 527 | `hidden_homeroom_d5_6_h` | 담임선생님 | room_school | teacher_smile |  |  | ...내 원고로 누군가의 진짜 감상을 듣게 될 날이 올 |
| 528 | `hidden_homeroom_d5_6_i` |  | 없음 | 없음 |  |  |  |
| 529 | `hidden_homeroom_d5_6_j` | 담임선생님 | room_school | teacher_shy |  |  | 월요일 문예부 모임 시간 전까지만 읽고 돌려줘. |
| 530 | `hidden_homeroom_d5_6_k` |  | 없음 | 없음 |  |  |  |
| 531 | `hidden_homeroom_d5_6_l` | {name} | room_school | teacher_normal |  |  | 네. 허투루 안 넘기고 제대로 읽을게요. |
| 532 | `hidden_homeroom_d5_6_m` | 담임선생님 | room_school | teacher_smile |  |  | *뺨을 스치던 머리카락을 귀 뒤로 살짝 넘기며 새침하게 |
| 533 | `hidden_homeroom_d5_6_n` | {name} | room_school | teacher_smile |  |  | 에이, 내심 기다리시면서 거짓말하시기는. |
| 534 | `hidden_homeroom_d5_6_o` | 담임선생님 | room_school | teacher_smile |  |  | *결국 참지 못하고 입술 끝이 부드럽게 호선을 그린다. |
| 535 | `hidden_homeroom_d5_6_p` |  | 없음 | 없음 |  |  |  |
| 536 | `hidden_homeroom_d5_6_q` | 담임선생님 | room_school | teacher_normal |  |  | {name}. |
| 537 | `hidden_homeroom_d5_6_r` | 담임선생님 | room_school | teacher_normal |  |  | 네 답은 월요일 문예부 시간에 정식으로 받을게. 그때까 |
| 538 | `hidden_homeroom_d5_6_s` | 담임선생님 | room_school | teacher_normal |  |  | 이러면 우리 둘 다 도망칠 핑계는 못 대겠네. |
| 539 | `hidden_homeroom_d5_6_t` | 담임선생님 | room_school | teacher_normal |  |  | *문예부 일정표 맨 아랫줄에 또박또박 합평 마감 시각을 |
| 540 | `hidden_homeroom_d5_7` | 담임선생님 | room_school | teacher_normal |  |  | 자, 고맙다는 인사는 아껴 둘게. 얼른 반으로 돌아가서 |
| 541 | `hidden_homeroom_d5_7_b` |  | 없음 | 없음 |  |  |  |
| 542 | `hidden_homeroom_d5_7_c` | 담임선생님 | room_school | teacher_normal |  |  | 학교 축제부터 후회 없이 잘 마쳐. 합평 이야기는 월요 |
| 543 | `hidden_homeroom_d5_8` | 담임선생님 | room_school | teacher_normal |  |  | *선생님은 먼저 복도로 걸어 나가 축제 부스를 준비하는 |
| 544 | `hidden_homeroom_d5_freetalk` | 담임선생님 | room_school | teacher_normal |  |  | *내가 안고 있는 04번 합평본 봉투를 눈짓으로 가리킨 |
| 545 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *오전 행사 준비가 한차례 숨을 고르는 쉬는 시간. 소 |
| 546 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 547 | `morning5_sojeong_1` | {name} | room_school | 없음 |  |  | *조용한 창가에 서서 휴대폰 메모 앱을 연다. 이전 학 |
| 548 | `morning5_sojeong_2` | {name} | room_school | 없음 |  |  | *더 이상 나를 변호하기 위한 마흔 번째 초안은 만들지 |
| 549 | `morning5_sojeong_3` | {name} | room_school | 없음 |  |  | 그때 네 책상 위에 적힌 낙서들을 두 눈으로 보고도 선 |
| 550 | `morning5_sojeong_4` | {name} | room_school | 없음 |  |  | *말풍선 옆에 작은 전송 완료 표시가 뜬다. 숫자 1이 |
| 551 | `morning5_sojeong_5` | {name} | room_school | 없음 |  |  | 전학 오기 전 학교에서 제가 모른 척 지나쳤던 일에 대 |
| 552 | `morning5_route_branch` |  | room_school | 없음 |  |  |  |
| 553 | `morning5_end` | {name} | room_school | 없음 |  |  | *책상 위에 놓인 쪽지들을 소중히 추려 모으고 휴대폰  |
| 554 | `day5_haeun_gate` |  | 없음 | 없음 |  |  |  |
| 555 | `day5_haeun_trust_check` |  | 없음 | 없음 |  |  |  |
| 556 | `day5_haeun_resume` |  | 없음 | 없음 |  |  |  |
| 557 | `tour_seo_1` | {name} | school | seyoun_normal |  |  | *점심 햇살이 쏟아지는 교문 앞에 서연과 나란히 멈춰  |
| 558 | `tour_seo_skip` |  | school | 없음 |  |  |  |
| 559 | `tour_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *점심시간의 소란스러운 복도 끝에서 서연과 마주친다.  |
| 560 | `after5_start` |  | 없음 | 없음 |  | 🌅 |  |
| 561 | `day5_haeun_guilt_gate` |  | 없음 | 없음 |  | 🌅 |  |
| 562 | `day5_haeun_route_gate` |  | 없음 | 없음 |  | 🌅 |  |
| 563 | `after5_original_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 564 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *소란스럽던 축제가 막을 내릴 무렵, 노을이 스며드는  |
| 565 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *축제 마지막 순서가 끝나 가는 복도 창가에서, 홀로  |
| 566 | `after5_farewell_seo_skip` |  | school_hallway | 없음 |  | 🌅 |  |
| 567 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *오후의 그림자가 길어진 복도에서 서연과 마주친다. 서 |
| 568 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 569 | `after5_farewell_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞을 지날 무렵, 문가에서 기다리고 있던 유나 |
| 570 | `after5_farewell_yuna_skip` |  | school_hallway | 없음 |  | 🌅 |  |
| 571 | `after5_farewell_yuna_low` | 유나 | library_old | yuna_normal |  | 🌅 | *도서관 앞 복도에서 유나와 눈이 마주친다. 유나는 읽 |
| 572 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 573 | `after5_farewell_dain_1` | {name} | school_back | dain_normal |  | 🌅 | *체육관 입구 쪽에서 다인이 걸어 나온다. 언제나 성큼 |
| 574 | `after5_farewell_dain_skip` |  | school_hallway | 없음 |  | 🌅 |  |
| 575 | `after5_farewell_dain_low` | 다인 | school_back | dain_normal |  | 🌅 | *체육관 앞길에서 걸어오던 다인이 두 걸음 떨어진 자리 |
| 576 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *붉은 석양이 길게 내려앉은 교정 위로, 축제의 끝을  |
| 577 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 578 | `after5_hidden_route_choice_check` | {name} | school_back | 없음 |  | 🌅 | *노을이 물든 교문 앞, 친구들과 약속한 공원으로 향하 |
| 579 | `after5_hidden_route_choice` | {name} | school_back | 없음 |  | 🌅 | *공원으로 향하는 가로수길과 교사동으로 돌아가는 복도가 |
| 580 | `after5_hidden_teacher_affinity_check` |  | room_school | 없음 |  | 🌅 |  |
| 581 | `after5_hidden_teacher_mid` | 담임선생님 | room_school | teacher_normal |  | 🌅 | *04번 합평본 봉투의 번호를 눈으로 확인한다.* 네가 |
| 582 | `after5_hidden_return_to_park` | {name} | park | 없음 |  | 🌅 | *교내의 마지막 뒷정리를 모두 마치고 학교 밖 공원으로 |
| 583 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 584 | `hidden_perfect_homeroom_check` |  | room_school | 없음 |  |  |  |
| 585 | `hidden_good_homeroom_1` | 담임선생님 | room_school | teacher_normal |  |  | *졸업식 소란이 잦아든 빈 교실, 추천서 사본과 문예부 |
| 586 | `hidden_good_homeroom_2` | {name} | school_hallway | teacher_normal |  |  | *두툼한 서류 봉투를 두 손으로 받아 들고 복도로 걸어 |
| 587 | `hidden_good_homeroom_3` | 담임선생님 | school_hallway | teacher_normal |  |  | 학교 밖으로 나가서도 네 글은 네가 계속 써 내려가렴. |
| 588 | `hidden_good_homeroom_4` | {name} | ending_good_teacher | 없음 |  |  | *봄 햇살이 비치는 교실 창가에서 끝까지 손을 흔들어  |
| 589 | `hidden_good_homeroom_ending_title` |  | ending_good_teacher | 없음 |  |  | ─── 담임선생님 GOOD END ─── |
| 590 | `day5_teacher_ending_freetalk_intro` | {name} | cafe | teacher_smile |  |  | *창가 카페 테이블 위에는 출간된 그녀의 단행본과 따뜻 |
| 591 | `day5_teacher_ending_freetalk_router` | {name} | cafe | 없음 |  |  |  |
| 592 | `day5_teacher_ending_freetalk_good` | 담임선생님 | room_school | teacher_normal |  | 🌙 | *졸업 기록이 담긴 갈색 봉투를 건네고 빈 교실 문을  |
| 593 | `day5_credits` |  | school | 없음 |  |  |  |
| 594 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### day5_yuna_ending_freetalk_bittersweet

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_yuna_choice`: (선택)
- `after_end`: (선택)
- `lunch2_choice`: (선택)
- `after2_choice`: (선택)
- `night2_choice`: (선택)
- `morning3_date_yuna_choice`: (선택)
- `lunch3_choice`: (선택)
- `confess_yuna_choice`: (선택)
- `wall_yuna_glimpse_3_b`: (선택)
- `morning5_caught_yuna_by_seoyeon`: (선택)
- `morning5_counteroffer_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=11 유나=-30 다인=-1 담임=0 보건=0

<details>
<summary>씬 타임라인 (458씬)</summary>

| # | 씬 ID | 화자 | 배경 | 캐릭터 | OP | 밤 | 대사 (앞 30자) |
|---|--------|------|------|--------|----|----|----------------|
| | **Day 1** | | | | | | |
| 1 | `start` | {name} | school | 없음 |  |  | *4월의 벚꽃잎이 흩날리는 교문 앞. 아직 풀기가 가시 |
| 2 | `start_again` | {name} | school | 없음 |  |  | *순간 울컥 치미는 현기증에 차가운 교문 기둥을 짚어선 |
| 3 | `start_3` | {name} | school | 없음 |  |  | *주머니 속 휴대폰이 짧게 떨린다. 예전 학교 단체방  |
| 4 | `name_input_scene` | 시스템 | school | 없음 |  |  | 전학생, 이름이 뭐야? |
| 5 | `gate_1` | {name} | school | 없음 |  |  | *교문 그늘 아래 서 있던 긴 생머리의 여학생이 안경테 |
| 6 | `seoyeon_meet_1` | 서연 | school | seyoun_normal |  |  | 혹시 오늘 온 전학생? {name} 맞지? |
| 7 | `seoyeon_meet_2` | 서연 | school | seyoun_normal |  |  | 가슴팍 명찰도 {name}이네. 반가워. *단정한 손끝 |
| 8 | `seoyeon_meet_3` | {name} | school | seyoun_normal |  |  | 맞는데. 내 얼굴은 어떻게 한 번에 알아봤어? |
| 9 | `seoyeon_meet_4` | 서연 | school | seyoun_normal |  |  | 학생회장이거든. 새로 온 전학생 맞이하는 것도 내 몫이 |
| 10 | `seoyeon_meet_5` | 서연 | school | seyoun_normal |  |  | 이쪽으로 따라와. 조회 시작하기 전에 15분 안으로 학 |
| 11 | `seoyeon_meet_6` | {name} | school | seyoun_normal |  |  | 첫날부터 학생회장이 직접 안내라니 좀 떨리는데. |
| 12 | `seoyeon_meet_7` | 서연 | school | seyoun_normal |  |  | 원래 내가 맡은 일이니까 괜히 어렵게 생각할 것 없어. |
| 13 | `seoyeon_meet_8` | 서연 | school | seyoun_normal |  |  | 자, 가자. *몸을 돌리는 서연의 교복 셔츠 깃에서 햇 |
| 14 | `seoyeon_choice` | {name} | school | seyoun_normal |  |  | *앞서 걷는 서연의 단정한 뒷모습을 보며 입을 연다.* |
| 15 | `choice_flirt_1` | 서연 | school | seyoun_normal |  |  | *걸음을 멈추고 반쯤 돌아서더니 맑은 안경알 너머로 눈 |
| 16 | `choice_flirt_2` | 서연 | school | seyoun_laugh |  |  | 전학 첫날부터 농담할 여유도 있네. 덕분에 네 이름은  |
| 17 | `choice_flirt_3` | {name} | school | seyoun_laugh |  |  | 오, 혹시 첫인상 점수라도 매기는 중이야? |
| 18 | `choice_flirt_4` | 서연 | school | seyoun_normal |  |  | 글쎄, 아직 학교 분위기는 잘 모르는 모양이지만 첫인상 |
| 19 | `choice_flirt_5` | {name} | school | seyoun_normal |  |  | 학생회장님한테 후한 점수라니 영광인데? |
| 20 | `choice_flirt_6` | 서연 | school | seyoun_normal |  |  | 일주일 뒤에도 그렇게 여유롭게 웃을 수 있을지 두고 볼 |
| 21 | `choice_flirt_7` | 서연 | school | seyoun_laugh |  |  | 늦겠다, 이리 따라와 {name}. *살짝 붉어진 귓바 |
| 22 | `hallway_1` | 서연 | school_hallway | seyoun_back |  |  | 지나가는 애들한테 인사받느라 걸음 늦출 필요 없어. 그 |
| 23 | `hallway_3` | 서연 | school_hallway | seyoun_normal |  |  | 지금 걷는 본관이 3학년 건물이고 창밖 건너편이 도서관 |
| 24 | `hallway_4` | 서연 | school_hallway | seyoun_normal |  |  | 그리고 이건 아무한테나 안 보여주는 건데. *재킷 주머 |
| 25 | `hallway_5` | 서연 | school_hallway | seyoun_normal |  |  | 원래 우리 학교 옥상은 평소엔 잠겨 있거든. 이 열쇠는 |
| 26 | `hallway_6` | {name} | school_hallway | seyoun_normal |  |  | 옥상에 너만의 비밀 아지트라도 숨겨 둔 거야? |
| 27 | `hallway_6_b` | 서연 | school_hallway | seyoun_normal |  |  | *맑게 울리던 열쇠고리 소리가 손안에서 뚝 멎는다.*  |
| 28 | `hallway_6_c` | 서연 | school_hallway | seyoun_normal |  |  | *입꼬리를 살짝 올린 채 대답 대신 열쇠를 다시 주머니 |
| 29 | `hallway_7` | 서연 | school_hallway | seyoun_normal |  |  | 맞다, 오늘 점심시간. 아직 어디서 밥 먹을지 못 정했 |
| 30 | `hallway_8` | {name} | school_hallway | seyoun_shy |  |  | *어느새 걸음을 멈춘 서연이 아침 햇살이 비치는 교실  |
| 31 | `hallway_10` | 서연 | school_hallway | seyoun_normal |  |  | 다 왔다, 여기가 네 교실이야. 얼른 들어가 봐. |
| 32 | `hallway_11` | {name} | school_hallway | seyoun_normal |  |  | 점심때도 일대일로 안내해 주는 거야? |
| 33 | `hallway_12` | 서연 | school_hallway | seyoun_normal |  |  | 글쎄, 오늘 오전 수업 잘 버티는 거 봐서. |
| 34 | `hallway_13` | 서연 | school_hallway | seyoun_back |  |  | *돌아서던 서연이 클립보드를 어깨 높이로 가볍게 들어  |
| 35 | `hallway_13_b` | {name} | school_hallway | seyoun_back |  |  | *단정한 구두 소리를 남기며 복도 저편으로 멀어지는 서 |
| 36 | `classroom_1` | {name} | room_school | 없음 |  |  | *드르륵, 교실 앞문을 열자 왁자지껄하던 공기 위로 수 |
| 37 | `classroom_2_b` | {name} | room_school | teacher_normal |  |  | *교탁 앞에는 20대 후반쯤 되어 보이는 담임선생님이  |
| 38 | `classroom_3` | 담임 | room_school | teacher_normal |  |  | 자, 다들 주목. 오늘부터 우리 반 식구가 된 전학생이 |
| 39 | `classroom_3_b` | {name} | room_school | teacher_normal |  |  | 오늘 전학 온 {name}입니다. 잘 부탁드립니다. * |
| 40 | `classroom_5_b` | 담임 | room_school | teacher_normal |  |  | 그래, {name}. 우리 반에 온 걸 환영해. 급할  |
| 41 | `classroom_5_c` | {name} | room_school | teacher_normal |  |  | *낯선 교실 공기에 섞여 내 숨소리가 잦아드는 사이 교 |
| 42 | `classroom_dain_1` | 다인 | room_school | dain_normal |  |  | 오, 전학생! 드디어 우리 반에도 새 얼굴이 들어왔네! |
| 43 | `classroom_dain_2` | 다인 | room_school | yuna_normal |  |  | 이쪽 봐, 이쪽! *산뜻한 갈색 숏컷에 활동적인 배구부 |
| 44 | `classroom_dain_3` | 담임 | room_school | teacher_normal |  |  | 다인아, 아침부터 목소리 좀 낮추자. 그리고 교실 안에 |
| 45 | `classroom_dain_4` | 다인 | room_school | yuna_normal |  |  | 에이, 쌤도 참. 이게 세상에서 제일 편하단 말이에요! |
| 46 | `classroom_dain_5` | 다인 | room_school | yuna_normal |  |  | 네 자리는 여기야, 여기! *아이들의 웃음소리 사이로  |
| 47 | `classroom_dain_5_b` | 담임선생님 | room_school | teacher_normal |  |  | 다인아, 적어도 출석 부르는 동안만이라도 진정 좀 하자 |
| 48 | `classroom_dain_5_c` | 담임 | room_school | teacher_normal |  |  | 지금부터 그 에너지를 다 쓰면 어떡해. 아직 1교시 종 |
| 49 | `classroom_dain_5_d` | 담임선생님 | room_school | teacher_angry |  |  | *담임은 작게 고개를 저으며 출석부 다음 장을 부드럽게 |
| 50 | `classroom_yuna_1` | {name} | room_school | yuna_bored |  |  | *소란스러운 교실 풍경과 동떨어진 창가 맨 뒷자리, 봄 |
| 51 | `classroom_yuna_2` |  | 없음 | 없음 |  |  |  |
| 52 | `classroom_yuna_4` | {name} | room_school | yuna_bored |  |  | *앞줄에 앉은 학생 하나가 내 소매를 스치며 작게 속삭 |
| 53 | `classroom_seat_1` | 담임선생님 | room_school | teacher_normal |  |  | *출석부를 덮은 담임이 창가 쪽에서 한 줄 건너편 빈자 |
| 54 | `classroom_seat_2` | 다인 | room_school | yuna_normal |  |  | 오, 딱 내 옆자리네? 멀뚱히 서 있지 말고 얼른 와서 |
| 55 | `classroom_minsu_1` | {name} | room_school | minsu_normal |  |  | *가방을 내려놓고 의자를 빼려는데 앞자리에 앉아 있던  |
| 56 | `classroom_minsu_2` | 민수 | room_school | minsu_smirk |  |  | 야, 전학생. 우리 반에 온 걸 환영한다. 그리고 미리 |
| 57 | `classroom_minsu_3` | {name} | room_school | minsu_smirk |  |  | 갑자기 무슨 각오? |
| 58 | `classroom_minsu_2_b` | 민수 | room_school | minsu_normal |  |  | *옆자리의 다인을 향해 슬쩍 턱짓하며 씨익 웃는다.*  |
| 59 | `classroom_dain_talk_1` | {name} | room_school | minsu_normal |  |  | *장난스럽게 돌아앉는 앞자리 남학생의 교복 명찰에는 ' |
| 60 | `classroom_dain_talk_2` | 다인 | room_school | yuna_normal |  |  | 저 녀석 말은 신경 쓰지 마! 그보다 나 궁금한 거 하 |
| 61 | `classroom_dain_talk_3` | 다인 | room_school | yuna_normal |  |  | 야, {name}. 너 평소에 몸 움직이는 거나 운동  |
| 62 | `classroom_dain_talk_4` | {name} | room_school | yuna_normal |  |  | 운동은 왜, 갑자기? |
| 63 | `classroom_dain_talk_5` | 다인 | room_school | yuna_normal |  |  | 아니, 오늘 방과후에 리시브 연습을 좀 더 하고 싶은데 |
| 64 | `classroom_dain_talk_6` | {name} | room_school | yuna_normal |  |  | 전학생을 첫날부터 인간 볼 머신으로 쓰려고? |
| 65 | `classroom_dain_talk_7` | 다인 | room_school | yuna_normal |  |  | 에이, 설마! 그래도 기계보다는 사람이랑 호흡 맞추는  |
| 66 | `classroom_dain_talk_8` | 다인 | room_school | yuna_normal |  |  | 어때, 같이 해 볼래? *다인의 따뜻한 검지가 내 책상 |
| 67 | `classroom_yuna_note_1` | {name} | room_school | yuna_bored |  |  | *그때 뒷자리에서 반듯하게 접힌 종이쪽지 하나가 책상  |
| 68 | `classroom_yuna_note_3` | 유나 | room_school | yuna_bored |  |  | *조심스럽게 펼치자 은은한 연보라색 잉크 글씨와 모서리 |
| 69 | `classroom_yuna_note_5` | {name} | room_school | yuna_bored |  |  | *내가 고개를 들자 창가 햇살에 비치던 유나의 하얀 손 |
| 70 | `classroom_yuna_note_6` | {name} | room_school | yuna_bored |  |  | *1교시 시작을 알리는 종소리가 교실 안을 메운다. 창 |
| 71 | `lunch_start` | {name} | school_hallway | 없음 |  |  | *점심시간을 알리는 종소리와 함께 교실 공기가 들뜬다. |
| 72 | `lunch_start_4` | 서연 | school_hallway | seyoun_normal |  |  | 아까 말한 대로 옥상 올라올 거지? *계단참에서 걸음을 |
| 73 | `lunch_start_4_b` | {name} | school_hallway | dain_normal |  |  | *대답하려는 순간 옆에서 다가온 다인의 따뜻한 손바닥이 |
| 74 | `lunch_start_5` | 다인 | school_hallway | dain_normal |  |  | 야, 아직 점심 안 먹었지? 나랑 매점 뛰어가자. 빵  |
| 75 | `lunch_start_6` | 유나 | school_hallway | yuna_normal |  |  | 난 도서관 갈 건데. *내 옆을 스쳐 지나가며 가방끈을 |
| 76 | `lunch_start_7` | {name} | school_hallway | 없음 |  |  | *바람 부는 옥상과 달콤한 빵 냄새가 나는 매점, 그리 |
| 77 | `lunch_choice` | {name} | school_hallway | 없음 |  |  | *첫날의 점심시간, 누구의 발걸음을 따라갈까?* |
| 78 | `lunch_yuna_1` | {name} | library_old | yuna_normal |  |  | *복도의 소음이 멀어지는 계단을 지나 유나의 뒤를 따라 |
| 79 | `lunch_yuna_1_aff_default` | 유나 | library_old | yuna_normal |  |  | *따로 건네는 쪽지는 없었다. 유나는 햇살이 비스듬히  |
| 80 | `lunch_yuna_2` | 유나 | library_old | yuna_normal |  |  | 의자 끌 때 소리 나지 않게 살살. *하얀 검지로 펼쳐 |
| 81 | `lunch_yuna_4` | 유나 | library_old | yuna_normal |  |  | 잠깐만 기다려. *끼워 두었던 대출 영수증 끝을 반듯하 |
| 82 | `lunch_yuna_5` | {name} | library_old | yuna_normal |  |  | *5초, 다시 10초가 고요하게 흐른다. 유나는 접힌  |
| 83 | `lunch_yuna_5_b` | {name} | library_old | yuna_normal |  |  | 옆자리 비었으면 앉아도 돼? |
| 84 | `lunch_yuna_7` | 유나 | library_old | yuna_normal |  |  | *활자에서 눈을 떼지 않은 채 나직이 속삭인다.* 옆에 |
| 85 | `lunch_yuna_8` | 유나 | library_old | yuna_normal |  |  | 가방 내렸어. 이쪽 앉아. *옆 의자에서 자기 가방을  |
| 86 | `lunch_yuna_10` | {name} | library_old | yuna_normal |  |  | *나란히 앉은 책상 위로 벽시계 초침 소리와 종이 스치 |
| 87 | `lunch_yuna_10_b` | {name} | library_old | yuna_normal |  |  | *유나의 손끝이 낡은 책갈피에 적힌 흐릿한 글씨를 슬쩍 |
| 88 | `lunch_yuna_12` | 유나 | library_old | yuna_normal |  |  | *책장 너머로 붉은빛이 감도는 눈동자가 천천히 올라온다 |
| 89 | `lunch_yuna_13` | {name} | library_old | yuna_normal |  |  | 어? 진짜네. |
| 90 | `lunch_yuna_14` | 유나 | library_old | yuna_normal |  |  | 그 시리즈는 1권부터 차례대로 읽어야 이해돼. |
| 91 | `lunch_yuna_15` | 유나 | library_old | yuna_normal |  |  | 여기 있어. 이걸로 먼저 읽어. *자기 손옆에 쌓아 두 |
| 92 | `lunch_yuna_16` | {name} | library_old | yuna_normal |  |  | 빌려주는 거야? 고마워. |
| 93 | `lunch_yuna_17` | 유나 | library_old | yuna_normal |  |  | 다 읽으면 나한테 다시 돌려줘. |
| 94 | `lunch_yuna_18` | 유나 | library_old | yuna_normal |  |  | 그럼 이제 각자 읽자. *책상 하나를 사이에 두고 나란 |
| 95 | `lunch_yuna_20` | {name} | library_old | yuna_normal |  |  | *한참 만에 고개를 들자 창가 햇살을 등진 유나가 책  |
| 96 | `lunch_yuna_21` | {name} | library_old | yuna_normal |  |  | 왜 그래, 나한테 할 말 있어? |
| 97 | `lunch_yuna_22` | 유나 | library_old | yuna_normal |  |  | *유나가 얇은 책갈피를 페이지 사이에 끼워 넣는다.*  |
| 98 | `lunch_yuna_23` | {name} | library_old | yuna_normal |  |  | 그게 왜? |
| 99 | `lunch_yuna_24` | 유나 | library_old | yuna_normal |  |  | 생각보다 편했어. |
| 100 | `lunch_yuna_25` | 유나 | library_old | yuna_normal |  |  | *유나의 시선이 내가 쥔 책 표지를 스쳐 내 눈동자에  |
| 101 | `lunch_yuna_choice` | {name} | library_old | yuna_normal |  |  | *읽던 책을 천천히 덮으며 유나와 시선을 맞춘다.* |
| 102 | `lunch_yuna_c1_1` | 유나 | library_old | yuna_normal |  |  | 응, 급하게 넘기지 말고 1권부터 천천히 읽어 봐. 뒤 |
| 103 | `lunch_yuna_c1_2` | 유나 | library_old | yuna_smile |  |  | 마지막 장까지 다 읽으면 말해 줘. 네가 어떻게 읽었는 |
| 104 | `lunch_yuna_freetalk` | 유나 | library_old | yuna_normal |  |  | *유나가 덮은 책 표지 위로 하얀 두 손을 가만히 포갠 |
| 105 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *5교시 수업을 알리는 차임벨이 울려 퍼지며 짧고도 설 |
| 106 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *붉은 노을이 스며드는 방과후 복도. 주머니 속에서 진 |
| 107 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 108 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 그 가벼운 마지막 한 줄에 시선이  |
| 109 | `after_kakao_5` |  | 없음 | 없음 |  | 🌅 |  |
| 110 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *한참을 망설이다 조용히 단체방 나가기를 누른다. 텅  |
| 111 | `after1_jealousy_yuna_1` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 너 점심시간에 도서관 갔다 왔다며? 그것도 유나랑 |
| 112 | `after1_jealousy_yuna_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 신기하네, 걔 원래 옆에 누가 오는 거 진짜 싫어하거든 |
| 113 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *휴대폰을 주머니에 넣고 석양이 길게 드리운 복도를 따 |
| 114 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도 모퉁이를 돌려는데 등 뒤에서 운동화 바닥이 마룻 |
| 115 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 거기 앞 조심해! |
| 116 | `after_miss_dain_3` | 다인 | school_hallway | dain_normal |  | 🌅 | 휴, 아슬아슬하게 비켜 줬네! *내 어깨를 스치며 바람 |
| 117 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 방금 반사신경 꽤 괜찮았는데? 역시 운동 좀 해  |
| 118 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 하마터면 부딪힐 뻔했잖아. 복도에서 웬 전력질주야? |
| 119 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 배구부 집합 시간 늦었거든! 지금 당장 체육관 뛰어가야 |
| 120 | `after_miss_dain_6_b` | {name} | school_hallway | dain_pain |  | 🌅 | *돌아서서 두어 걸음 내딛던 다인이 순간 걸음을 멈추고 |
| 121 | `after_miss_dain_7` | 다인 | school_hallway | dain_laugh |  | 🌅 | 참, 내 이름 다인이야! 내일 와서 이름 까먹으면 안  |
| 122 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞 복도를 지나는데 붉은 눈동자의 여학생이 소 |
| 123 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 방금 책 사이에서 이거 떨어졌어. |
| 124 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *바닥에 내려앉은 낡은 책갈피를 조심스레 주워 건넨다. |
| 125 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | 다행이다, 모서리 안 구겨졌네. *하얀 손가락으로 책갈 |
| 126 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 주워 줘서 고마워. |
| 127 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *소중한 것을 감추듯 책갈피를 책등 깊숙이 끼워 넣고는 |
| 128 | `after_miss_yuna_4` |  | 없음 | 없음 |  | 🌅 |  |
| 129 | `after_miss_seoyeon_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *가방을 메고 신발장으로 내려가려는데 계단 앞 복도에서 |
| 130 | `after_miss_seoyeon_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 너 아까 점심시간에 어디 갔었어? |
| 131 | `after_miss_seoyeon_3` | {name} | school_hallway | seyoun_normal |  | 🌅 | 점심시간에 어디라니? |
| 132 | `after_miss_seoyeon_4` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 일부러 옥상 문까지 열어 두고 있었는데 끝까지 안 올라 |
| 133 | `after_miss_seoyeon_5` | {name} | school_hallway | seyoun_normal |  | 🌅 | 설마 옥상에서 계속 나 기다린 거야? |
| 134 | `after_miss_seoyeon_6` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 기다리긴 누가 기다려, 내 도시락 먼저 먹고 있었지.  |
| 135 | `after_miss_seoyeon_7` | {name} | school_hallway | seyoun_normal |  | 🌅 | *서연은 클립보드를 가슴께로 끌어안으며 시선을 살짝 피 |
| 136 | `after_miss_seoyeon_8` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 내일 점심엔 다른 데로 새지 마. |
| 137 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교를 알리는 안내 방송이 끝난 뒤 노을빛만 남은 복 |
| 138 | `night_start` | {name} | room_my | 없음 |  |  | *집으로 돌아와 아직 낯선 새 교복을 옷걸이에 걸어 두 |
| 139 | `night_start_3` | {name} | room_my | 없음 |  |  | *고요한 방 안, 머리맡에 둔 휴대폰이 짧게 진동하며  |
| 140 | `night_msg_yuna_1` | 유나 | room_my | yuna_normal | 0.35 |  | 오늘 점심엔 옆에서 조용히 있어 줘서 고마웠어 |
| 141 | `night_msg_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | 내일도 내 옆자리 비워 놓을게 |
| 142 | `night_msg_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *짧고 담백한 '내 옆자리 비워 놓을게'라는 문장을 몇 |
| 143 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 대화창을 닫으려는데 상단 알림 바에 학교 앱  |
| 144 | `night_late_transition` | {name} | room_my | 없음 |  |  | *불을 끄고 막 눈을 감으려는데 정적을 깨고 휴대폰이  |
| 145 | `night_late_branch` | {name} | room_my | 없음 |  |  | *어두운 방 안, 손에 쥔 액정 화면이 하얗게 빛을 낸 |
| 146 | `night_end_1` | {name} | room_my | 없음 |  |  | *휴대폰을 내려놓고 어두운 천장을 올려다본다. 옷걸이에 |
| 147 | `night_end_3` | {name} | room_my | 없음 |  |  | *연락처에 나란히 저장된 새로운 이름들을 한 번 더 눈 |
| | **Day 2** | | | | | | |
| 148 | `morning2_start` | {name} | room_school | 없음 |  |  | *전학 온 지 이틀째 아침. 교복 소매에 남았던 빳빳한 |
| 149 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 150 | `morning2_greet_none_tone` |  | room_school | 없음 |  |  |  |
| 151 | `morning2_greet_none_1` | {name} | room_school | 없음 |  |  | *교실 문을 열고 들어서도 먼저 다가오는 사람은 없다. |
| 152 | `morning2_greet_none_2` | {name} | room_school | yuna_normal |  |  | *서연은 교탁 앞에서 출석부만 넘기고 다인은 반대편 친 |
| 153 | `morning2_yuna_seen` | 유나 | room_school | yuna_normal |  |  | ...너 혹시 전학 오기 전에도 이 학교에 와 본 적  |
| 154 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *가방을 걸고 자리에 앉으려는데 책상 한가운데에 정갈하 |
| 155 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 156 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가던 서연이 열린 교실 앞문 틈으로 고개를 |
| 157 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 바쁜 학생회장이 아침부터 남의 교실 앞까지 직접 인사하 |
| 158 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 교무실에 서류 갖다주러 가는 길에 잠깐 멈춘 거야. 그 |
| 159 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | 얼굴 확인했으니까 이제 간다. 아침 조회 늦지 말고.  |
| 160 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연의 긴 머리카락이 사라진 복도 쪽을 바라보고 있는 |
| 161 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 온 지 이틀 만에 학생회장님이 직접 문 앞까 |
| 162 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 그건 그냥 네가 인기가 없는 게 아닐까. |
| 163 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 뼈 때리지 마라, 사실이긴 한데 지금 그게 핵심이 아니 |
| 164 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *복도 유리창 너머로 클립보드를 가슴에 안은 서연이 귓 |
| 165 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 오호, 도도한 회장님도 우리 전학생한테 꽤 관심 있나  |
| 166 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | 방금 '우리' 전학생이라고 했어? |
| 167 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 당연하지, 같은 반에다 바로 옆자리 짝꿍이잖아! 그 정 |
| 168 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *1교시가 끝나고 시끌벅적한 교실 열기를 식히려 복도  |
| 169 | `morning2_seo_dust_1` | 서연 | school_hallway | seyoun_normal |  |  | 너 1교시 수업 듣는 동안 대체 뭘 한 거야. *쉬는  |
| 170 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 움직이지 말고 잠깐 가만히 있어 봐. |
| 171 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *한 걸음 다가선 서연의 하얀 손끝이 내 교복 어깨에  |
| 172 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 어깨에 분필 가루 같은 게 묻어 있었어. |
| 173 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | 말도 없이 갑자기 손이 훅 들어와서 놀랐잖아. *괜히  |
| 174 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 뭘 그렇게까지 놀라? 그냥 먼지 털어 준 건데. |
| 175 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *분명 먼지는 다 털어 냈는데도 서연의 손끝이 닿았던  |
| 176 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 방금 그거 뭐야? 학생회장이 네 어깨 만진 거 맞 |
| 177 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 만진 게 아니라 어깨에 묻은 먼지 털어 준 거야. |
| 178 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 수상한데, 거기 진짜로 먼지가 붙어 있긴 했어? |
| 179 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | 진짜로 먼지 털어 준 것뿐이라니까. 왜 눈을 그렇게 뜨 |
| 180 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *아침에 받은 유나의 쪽지를 손안에 쥔다. 수업 사이마 |
| 181 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *이틀째 점심시간, 누구의 곁으로 향할까.* |
| 182 | `lunch2_yuna_1` | {name} | annex_exhibit_hallway | yuna_normal |  |  | *인적이 끊긴 낡은 도서관 별관. 서늘한 그늘이 내려앉 |
| 183 | `lunch2_yuna_intro_check` |  | annex_exhibit_hallway | yuna_normal |  |  |  |
| 184 | `lunch2_yuna_3_yuna_aff` |  | annex_exhibit_hallway | 없음 |  |  |  |
| 185 | `lunch2_yuna_3_cool` | 유나 | annex_exhibit_hallway | yuna_bored |  |  | *말없이 책갈피만 끼워 넣고 가방을 치워 옆자리를 비운 |
| 186 | `lunch2_yuna_cool_cont` | {name} | annex_exhibit_hallway | yuna_bored |  |  | *고요한 방 안에서 내 책장만 한 장 넘어간다. 유나는 |
| 187 | `lunch2_yuna_end` | {name} | yuna_hideout_day.webp | yuna_normal |  |  | *별관 문을 닫기 전 마지막으로 돌아보자 유나는 아까  |
| 188 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *종례가 끝난 방과 후 교실. 쉬는 시간마다 꺼냈던 휴 |
| 189 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 당장 체육관으로 튀어 와! 오늘은 진짜 제대로 된 내기 |
| 190 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 방과후에 학생회실로 잠깐 와 줄 수 있어? 오늘따라 일 |
| 191 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게선 따로 온 메시지가 없다. 대신 주머니 속  |
| 192 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *석양이 물들기 시작하는 방과후, 어디로 발걸음을 옮길 |
| 193 | `after2_yuna_1` | {name} | annex_exhibit_hallway | 없음 |  | 🌅 | *아침에 받았던 쪽지를 떠올리며 인적 드문 도서관 별관 |
| 194 | `after2_yuna_1_b` | {name} | annex_exhibit_hallway | 없음 |  | 🌅 | *노을이 비스듬히 스며든 별관 복도에는 인기척 하나 없 |
| 195 | `after2_yuna_2` | {name} | yuna_hideout_day.webp | yuna_normal |  | 🌅 | *문을 밀자 경첩이 나직이 삐걱거린다. 안쪽 소파에 깊 |
| 196 | `after2_yuna_tone` |  | yuna_hideout_day.webp | 없음 |  | 🌅 |  |
| 197 | `after2_yuna_cool_1` | 유나 | yuna_hideout_day.webp | yuna_bored |  | 🌅 | *소파 위 이어폰 한쪽만 슬쩍 치운다.* 옆에서 책 읽 |
| 198 | `after2_yuna_cool_cont` | {name} | yuna_hideout_day.webp | yuna_bored |  | 🌅 | *펼쳐진 책 한 페이지를 조용히 내려 읽는다. 유나는  |
| 199 | `after2_yuna_rival_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 200 | `after2_yuna_rival_dain_low` | 다인 | school_hallway | dain_laugh |  | 🌅 | 도서관 별관 쪽에 있었구나? 조심히 들어가고 내일 봐! |
| 201 | `after2_yuna_rival_seo_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 202 | `after2_yuna_rival_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 부족하던 일손은 다른 부원들로 채웠어. 내일 보자. |
| 203 | `after2_group_yuna_companion` | 유나 | library_old | 없음 |  | 🌅 | *별관 책상에 자료 두 묶음이 놓인다.* 한쪽을 끝내기 |
| 204 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *미묘한 여운이 감도는 대화를 마치고 가방을 고쳐 멘  |
| 205 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 206 | `minsu_warn_1` | {name} | school | 없음 |  | 🌅 | *노을이 지는 하교길. 교문을 막 나서는데 등 뒤에서  |
| 207 | `minsu_warn_1_b` | 민수 | school | minsu_normal |  | 🌅 | *내 보폭에 맞춰 옆에 나란히 서더니 주머니에 두 손을 |
| 208 | `minsu_warn_2` | 민수 | school | minsu_smirk |  | 🌅 | 야, 전학생. |
| 209 | `minsu_warn_3` | {name} | school | minsu_smirk |  | 🌅 | 응? 왜 불러? |
| 210 | `minsu_warn_4` | 민수 | school | minsu_smirk |  | 🌅 | 너 요즘 학교 다니는 거 꽤 재밌냐? |
| 211 | `minsu_warn_4_b` | {name} | school | minsu_normal |  | 🌅 | *민수는 내 쪽을 보지 않고 교문 건너편 깜빡이는 횡단 |
| 212 | `minsu_warn_5` | {name} | school | minsu_smirk |  | 🌅 | 갑자기 그게 무슨 소리야? |
| 213 | `minsu_warn_6` | 민수 | school | minsu_smirk |  | 🌅 | 점심엔 한 명, 방과후엔 또 한 명. 넌 재밌겠지. — |
| 214 | `night2_start` | {name} | room_my | 없음 |  |  | *따뜻한 물로 샤워를 마치고 젖은 머리를 털며 침대에  |
| 215 | `night2_msg_1` |  | 없음 | 없음 |  |  |  |
| 216 | `night2_msg_generic` | 다인 | room_my | dain_normal | 0.35 |  | 야 내일 아침에 교실에서 보자 늦지 마! |
| 217 | `night2_msg_generic_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 점심엔 옥상 열어 놓을게 |
| 218 | `night2_msg_generic_3` |  | 없음 | 없음 |  |  |  |
| 219 | `night2_msg_generic_3_established` | 유나 | room_my | yuna_normal | 0.35 |  | 내가 빌려준 책, 어디까지 읽었어? |
| 220 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *나란히 도착한 대화방 세 개를 번갈아 바라본다. 누구 |
| 221 | `night2_choice` | {name} | room_my | 없음 |  |  | *세 개의 말풍선 중 누구에게 가장 먼저 답장을 보낼까 |
| 222 | `night2_reply_yuna_1` |  | 없음 | 없음 |  |  |  |
| 223 | `night2_reply_yuna_1_established` | {name} | room_my | yuna_normal | 0.35 |  | 아까 빌려준 책 벌써 반쯤 읽었어. 꽤 재밌더라 |
| 224 | `night2_reply_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | 응, 다 읽고 나면 네 감상은 어떤지 꼭 듣고 싶어. |
| 225 | `night2_reply_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *한동안 입력 창이 고요하게 비어 있다가 조심스럽게 새 |
| 226 | `night2_reply_yuna_4` |  | 없음 | 없음 |  |  |  |
| 227 | `night2_reply_yuna_4_first` | 유나 | room_my | yuna_normal | 0.35 |  | 내가 아끼는 재생목록 하나 보낼게. 세 번째 곡부터 들 |
| 228 | `night2_reply_yuna_5` | {name} | room_my | yuna_normal | 0.35 |  | *유나가 공유해 준 심야 재생목록 링크를 연다. 나열된 |
| 229 | `night2_reply_yuna_6` | 유나 | room_my | yuna_normal | 0.35 |  | 그 곡은 마지막 음까지 끝까지 들어 봐 |
| 230 | `night2_reply_yuna_6_b` | {name} | room_my | yuna_normal | 0.35 |  | *양쪽 귀에 이어폰을 꽂고 재생 버튼을 누른다. 낮고  |
| 231 | `night2_reply_yuna_6_c` | {name} | room_my | yuna_normal | 0.35 |  | *긴 여운을 남기며 마지막 화음이 잦아들고 화면 속 재 |
| 232 | `night2_reply_yuna_7` | {name} | room_my | yuna_normal | 0.35 |  | *재생목록 제목 바로 아래에 유나가 적어 둔 한 줄짜리 |
| 233 | `night2_reply_yuna_react_default` | 유나 | room_my | yuna_normal | 0.35 |  | 응, 들어 줘서 고마워. 잘 자. |
| 234 | `night2_yuna_freetalk` | 유나 | room_my | yuna_normal | 0.35 | 🌙 | 잠깐. 아직 깨어 있으면... 조금만 더 얘기할래? |
| 235 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 창을 정리하려는데 상단 알림 목록 사이에 학교 |
| 236 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 마치고 길게 숨을 내쉬며 베개 옆으로 휴대폰을 |
| 237 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *남은 두 사람에게도 답장을 보내려다 손가락이 굳는다. |
| 238 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *사진첩 스크롤을 끝까지 내리자 나타난 3개월 전 봄  |
| 239 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *차마 전송 버튼을 누르지 못했던 문장들이 휴대폰 메모 |
| 240 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 임시 저장 메모가 마지막 문장이다. 그 아래 |
| 241 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *떨리는 엄지손가락을 사진 아래 휴지통 삭제 아이콘 위 |
| 242 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *다시 켠 메신저 목록에는 아직 내가 답하지 못한 두  |
| 243 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *방금 닫았던 소정이의 사진을 한 번 더 열어 본다.  |
| 244 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *가슴 한구석이 묵직하게 내려앉아 끝내 나머지 두 개의 |
| 245 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면 위로 세 사람의 이름이 나란히 쌓여 있다.  |
| 246 | `night2_end_2_b` |  | 없음 | 없음 |  |  |  |
| 247 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *액정 불빛이 완전히 꺼진 뒤에도 미지근한 열기가 남은 |
| 248 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *잠이 오지 않아 부엌으로 나와 불을 켠다. 내일 싸  |
| 249 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *서툰 손길로 부쳐 낸 계란말이와 소시지, 김과 밥을  |
| | **Day 3** | | | | | | |
| 250 | `morning3_start` | {name} | school | 없음 |  |  | *전학 사흘째, 금요일 아침. 밤늦도록 깜빡이는 메시지 |
| 251 | `morning3_start_2` | {name} | school | 없음 |  |  | *어깨에 멘 가방끈을 꽉 쥐고 숨이 턱 끝까지 차오르도 |
| 252 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 253 | `morning3_seo_gate_1` | {name} | school | seyoun_normal |  |  | 서연? 종 울리기 직전인데 안 들어가고 왜 아직 여기  |
| 254 | `morning3_seo_gate_cold_1` | 서연 | school | seyoun_normal |  |  | *서연이 내 옆을 스쳐 지나가며 교복 명찰 쪽으로만 차 |
| 255 | `morning3_seo_gate_cold_2` | 서연 | school | seyoun_normal |  |  | 전학생. 오늘도 아슬아슬하게 다니네. |
| 256 | `morning3_seo_gate_cold_3` | {name} | school | 없음 |  |  | *이름조차 부르지 않는 목소리 뒤로 단정한 구두 굽 소 |
| 257 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실 뒷문을 열자마자 세 방향에서 공기가 미묘하게 굳 |
| 258 | `morning3_react_seo_1` | 다인 | room_school | dain_normal |  |  | 오호, 뭐야? 아침부터 학생회장님이랑 나란히 등교하신  |
| 259 | `morning3_react_seo_2` | 유나 | room_school | yuna_bored |  |  | *창밖을 내다보던 유나가 유리창에 비친 내 옆의 서연을 |
| 260 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *잠시 숨을 돌리려 나온 복도. 기다렸다는 듯 서연이  |
| 261 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | *복도 창가에서 서연이 반 걸음 다가서며 목소리를 낮춘 |
| 262 | `morning3_date_seo_skip` |  | school_hallway | 없음 |  |  |  |
| 263 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끄고는 눈이 마주치 |
| 264 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 자, 그럼 이제 내 차례지! 이번 주말에 나랑 오락실  |
| 265 | `morning3_date_dain_skip` |  | room_school | 없음 |  |  |  |
| 266 | `morning3_date_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 이쪽을 흘끗 보다가 가방 지퍼를 끝까지 당겨  |
| 267 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심시간 직전, 유나가 소리 없이 다가와 네모나게 접 |
| 268 | `morning3_date_yuna_1_b` | 서연 | room_school | seyoun_normal |  |  | 유나야. 그렇게 쪽지로만 말을 걸면 옆에 있는 사람들은 |
| 269 | `morning3_date_yuna_2` | 유나 | room_school | yuna_normal |  |  | *펼쳐 본 쪽지에는 연보라색 잉크로 또렷한 글씨가 적혀 |
| 270 | `morning3_date_yuna_choice` | 유나 | room_school | yuna_normal |  |  | 다 들리게 말하는 게 공평하다면 지금 직접 말할게. 난 |
| 271 | `morning3_date_yuna_accept` | {name} | room_school | yuna_shy |  |  | *쪽지 뒷면에 답을 적어 건네자 유나는 문장을 끝까지  |
| 272 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 273 | `morning3_multi_from_yuna` |  | room_school | yuna_shy |  |  |  |
| 274 | `morning3_end` | {name} | room_school | 없음 |  |  | *오전 마지막 수업을 끝내는 종이 울리고 폭풍 전야 같 |
| 275 | `morning3_end_b` |  | 없음 | 없음 |  |  |  |
| 276 | `lunch3_start` | 유나 | room_school | yuna_normal |  |  | 내 빵도 반 나눠 먹어. *사흘째 점심, 교실에서 책상 |
| 277 | `lunch3_start_2_b` | 다인 | room_school | yuna_normal |  |  | 이 계란말이, 내가 먼저 먹어도 되는 거지? 일단 맛부 |
| 278 | `lunch3_meal_1` | 다인 | room_school | yuna_normal |  |  | 오, 간 딱 맞는데! 회장님도 얼른 드세요. 오늘은 옆 |
| 279 | `lunch3_meal_2` | {name} | room_school | yuna_normal |  |  | 잠깐만, 그건 내 도시락 반찬인데. |
| 280 | `lunch3_meal_3` | 서연 | room_school | yuna_normal |  |  | *서연이 내 도시락에서 계란말이 한 조각을 집어 맛본다 |
| 281 | `lunch3_meal_4` | {name} | room_school | yuna_normal |  |  | 남의 점심 반찬에 냉정하게 점수 매기지 마. |
| 282 | `lunch3_meal_5` | 서연 | room_school | yuna_normal |  |  | *서연의 입꼬리가 얄밉게 올라간다.* 10점 만점에 6 |
| 283 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *말없이 지켜보던 유나가 젓가락을 뻗어 도시락 한가운데 |
| 284 | `lunch3_meal_7` | {name} | room_school | yuna_normal |  |  | 유나야, 그 칼집 낸 소시지는 내가 제일 아껴 둔 건데 |
| 285 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *유나가 소시지를 천천히 베어 물며 맞은편의 다인을 바 |
| 286 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | 어, 잠깐만! 그건 마지막 남은 조각이야. *내 외침과 |
| 287 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *텅 빈 도시락통 한가운데에 노릇하게 구워진 마지막 계 |
| 288 | `lunch3_meal_10_e` |  | 없음 | 없음 |  |  |  |
| 289 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *숨소리조차 잦아든 식탁 위, 마지막 반찬을 건넬 사람 |
| 290 | `lunch3_give_yuna_aff` |  | room_school | 없음 |  |  |  |
| 291 | `lunch3_give_yuna_1` | 유나 | room_school | yuna_normal |  |  | *유나의 눈동자가 작게 흔들리더니 이내 옅은 미소가 번 |
| 292 | `lunch3_yuna_skin_check` |  | room_school | yuna_normal |  |  |  |
| 293 | `lunch3_give_yuna_2_check` |  | room_school | 없음 |  |  |  |
| 294 | `lunch3_give_yuna_seo_affinity` |  | room_school | 없음 |  |  |  |
| 295 | `lunch3_give_yuna_seo_low` | 서연 | room_school | seyoun_normal |  |  | *서연은 말없이 자기 도시락통과 수저집을 정리한다.* |
| 296 | `lunch3_give_yuna_3_check` |  | room_school | 없음 |  |  |  |
| 297 | `lunch3_give_yuna_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 빈 물병을 가방 옆주머니에 꽂아 넣는다.* 난 |
| 298 | `lunch3_end` | {name} | room_school | 없음 |  |  | *점심시간 종료를 알리는 종소리에 각자 도시락을 덮는다 |
| 299 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과 후, 노을빛 복도 갈림길에 선다. 사흘째 지나는 |
| 300 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *주머니 속 휴대폰을 만지작거린다. 엉켜 버린 주말 약 |
| 301 | `after3_auto_yuna` | {name} | school_hallway | 없음 |  | 🌅 | *점심시간 내내 말없이 책갈피만 만지작거리던 유나의 손 |
| 302 | `after3_rivals_for_yuna_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 303 | `after3_rival_seo_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 304 | `after3_rival_seo_affinity` |  | school_hallway | 없음 |  | 🌅 |  |
| 305 | `after3_rival_seo_cool` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 방과 후 일정이 바뀐 모양이네. *서연은 클립보드 페이 |
| 306 | `after3_rival_seo_done` |  | school_hallway | 없음 |  | 🌅 |  |
| 307 | `after3_rival_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 308 | `after3_rival_dain_affinity` |  | school_hallway | 없음 |  | 🌅 |  |
| 309 | `after3_rival_dain_cool` | 다인 | school_hallway | dain_normal |  | 🌅 | 오늘 체육관 코스는 패스구나. *다인은 배구공 가방 끈 |
| 310 | `after3_rival_dain_done` |  | school_hallway | 없음 |  | 🌅 |  |
| 311 | `after3_yuna_affinity_check` |  | yuna_hideout_day.webp | 없음 |  | 🌅 |  |
| 312 | `after3_yuna_partial_1` | {name} | yuna_hideout_day.webp | yuna_normal |  | 🌅 | *별관 문은 열려 있지만 유나는 노트를 펼치지 않는다. |
| 313 | `after3_yuna_partial_2` | 유나 | yuna_hideout_day.webp | yuna_shy |  | 🌅 | 오늘은 여기까지만 할래. 다음에 이야기하고 싶어지면 그 |
| 314 | `after3_yuna_end` |  | 없음 | 없음 |  | 🌅 |  |
| 315 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *길었던 방과 후 시간이 끝났다. 복도 천장의 형광등이 |
| 316 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 317 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 318 | `minsu_d3_check` | {name} | 없음 | 없음 |  | 🌅 |  |
| 319 | `night3_start` | {name} | room_my | 없음 |  |  | *금요일 밤, 지친 몸으로 방에 돌아와 교복 차림으로  |
| 320 | `night3_start_2` | {name} | room_my | 없음 |  |  | *불도 켜지 않은 방 안, 책상 위에 엎어 두었던 휴대 |
| 321 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *어두운 천장 아래로 휴대폰 불빛이 번진다. 도착해 있 |
| 322 | `night3_dream_1` | {name} | room_my | 없음 |  |  | *스탠드 조명을 끄려다 휴대폰을 한 번 더 집어 든다. |
| 323 | `night3_dream_2_b` | {name} | room_my | 없음 |  |  | *머리맡에 휴대폰을 내려놓는다. 내일 아침 마주 보며  |
| 324 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *잠들기 전, 휴대폰 갤러리 깊숙한 곳에서 예전 학교의 |
| 325 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *화면에 '이 사진을 삭제하시겠습니까?'라는 확인 창이 |
| 326 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *푸르스름한 액정 빛을 가만히 내려다본다. 소정이의 책 |
| 327 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *확인 창에서 조용히 취소를 누른다. 사진 한 장을 지 |
| 328 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼 대신 이동 메뉴를 눌러 사진을 새 폴더로  |
| 329 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *사진 아래에 짧은 메모를 남긴다. 소정이에게 끝내 건 |
| 330 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *새로 만든 폴더 안에 사진 한 장이 조용히 자리 잡는 |
| 331 | `night3_faithful_reflect_4_b` |  | 없음 | 없음 |  |  |  |
| 332 | `night3_faithful_reflect_4_c` |  | 없음 | 없음 |  |  |  |
| 333 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 내일 아침 알람을 맞춘다. 휴대폰을 내 |
| 334 | `night3_end` | {name} | room_my | 없음 |  |  | *금요일 시간표가 적힌 교과서를 덮고 스탠드 불을 완전 |
| | **Day 4** | | | | | | |
| 335 | `morning4_start` | {name} | room_my_day.webp | 없음 |  |  | *넷째 날, 토요일 아침. 커튼 틈으로 스며든 주말 햇 |
| 336 | `morning4_date_plan_check` |  | 없음 | 없음 |  |  |  |
| 337 | `morning4_nightmare_check` |  | room_my_day.webp | 없음 |  |  |  |
| 338 | `minsu_cheer_1` | {name} | room_my_day.webp | 없음 |  |  | *잠금을 풀자마자 메신저 맨 윗줄에서 민수의 이름이 반 |
| 339 | `minsu_cheer_1_b` | 민수 | room_my_day.webp | minsu_normal | 0.35 |  | 야 너 오늘 주말 데이트라며? |
| 340 | `minsu_cheer_1_c` | {name} | room_my_day.webp | minsu_normal | 0.35 |  | 그걸 네가 어떻게 알았어 |
| 341 | `minsu_cheer_1_d` | 민수 | room_my_day.webp | minsu_normal | 0.35 |  | 교실에서 금요일 내내 주말 약속 잡느라 정신없더니 모를 |
| 342 | `minsu_cheer_2` | 민수 | room_my_day.webp | minsu_normal | 0.35 |  | 옷 좀 제대로 입어라. 분위기 망치지 말고 잘하고 와ㅋ |
| 343 | `minsu_cheer_3` | {name} | room_my_day.webp | minsu_normal | 0.35 |  | 알아서 할게. |
| 344 | `minsu_cheer_4_branch` |  | room_my_day.webp | 없음 |  |  |  |
| 345 | `minsu_cheer_4_ins_single` | {name} | room_my_day.webp | minsu_normal | 0.35 |  | *캘린더 앱을 열어 본다. 토요일 칸에 적힌 단 하나의 |
| 346 | `morning4_start_2` | {name} | room_my_day.webp | 없음 |  |  | *창문을 열어 선선한 아침 공기를 들이마신다. 주중에  |
| 347 | `morning4_yuna_msg_1` | 유나 | room_my_day.webp | yuna_normal | 0.35 |  | 10시. 역 앞 카페. 늦으면 그냥 간다 |
| 348 | `morning4_yuna_msg_1_b` | {name} | room_my_day.webp | yuna_normal | 0.35 |  | *짧은 두 줄 끝에 마침표조차 없지만 괜히 먼저 와서  |
| 349 | `morning4_yuna_msg_single` | {name} | room_my_day.webp | yuna_normal | 0.35 |  | *담백한 문장 너머로 유나의 나직한 목소리가 들리는 듯 |
| 350 | `morning4_hidden_check` | {name} | street | 없음 |  |  | *이른 아침 공기를 가르며 학교 앞 사거리 횡단보도에서 |
| 351 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 352 | `day4_haeun_gate` |  | 없음 | 없음 |  |  |  |
| 353 | `day4_haeun_trust_check` |  | 없음 | 없음 |  |  |  |
| 354 | `day4_haeun_personal_gate` |  | 없음 | 없음 |  |  |  |
| 355 | `morning4_end` | {name} | room_my_day.webp | 없음 |  |  | *집으로 돌아와 거울 앞에서 셔츠 깃과 머리카락을 정돈 |
| 356 | `day4_date_branch` |  | 없음 | 없음 |  |  |  |
| 357 | `date_yuna_1` | {name} | cafe | yuna_date_normal.webp |  |  | *역 앞 카페 테라스 그늘에 서 있는 유나가 한눈에 들 |
| 358 | `date_yuna_tier_check` |  | cafe | 없음 |  |  |  |
| 359 | `date_yuna_tentative_1` | 유나 | cafe | yuna_date_normal.webp |  |  | 오늘은 다른 사적인 얘기 말고 그냥 책 얘기만 조금 하 |
| 360 | `date_yuna_tentative_2` | {name} | cafe | yuna_date_normal.webp |  |  | *조용히 대화는 이어지지만 유나는 가방 안에 넣어 온  |
| 361 | `date_yuna_tentative_3` | 유나 | street | yuna_date_normal.webp |  |  | 마음이 정리되면 다음번엔 내가 먼저 연락할게. 오늘은  |
| 362 | `pre_confess_minsu` | 민수 | street | minsu_smirk | 0.35 |  | 야, 지금 한창 데이트 중이지? 친구로서 딱 한마디만  |
| 363 | `pre_confess_minsu_2` | 민수 | street | minsu_smirk | 0.35 |  | 어설프게 말 돌리지 말고 오늘 네 마음 제대로 전해라 |
| 364 | `pre_confess_callback` | {name} | street | 없음 |  |  | *바지 주머니 속 휴대폰을 쥔 손바닥에 땀이 밴다. 꺼 |
| 365 | `confess_seo_1` | {name} | school | 없음 |  | 🌅 | *저녁노을이 길게 그림자를 드리울 무렵, 데이트를 마치 |
| 366 | `confess_yuna_1` | {name} | cafe | yuna_date_normal.webp |  | 🌅 | *거리의 카페 간판들에 하나둘 주황빛 불이 켜질 무렵, |
| 367 | `confess_yuna_2` | 유나 | cafe | yuna_date_normal.webp |  | 🌅 | 헤어지기 전에 마지막으로 너랑 꼭 가고 싶은 데가 있어 |
| 368 | `confess_yuna_3` | {name} | yuna_hideout_day.webp | yuna_date_normal.webp |  | 🌅 | *유나를 따라 들어선 별관 구석의 비밀 독서 공간. 유 |
| 369 | `confess_yuna_4` | 유나 | yuna_hideout_day.webp | yuna_date_normal.webp |  | 🌅 | 이리 와서 내 옆에 앉아. 오늘은 굳이 책을 펼치지 않 |
| 370 | `confess_yuna_5` | {name} | yuna_hideout_day.webp | yuna_date_normal.webp |  | 🌅 | *유나의 바로 옆자리에 앉자 낡은 소파 쿠션이 푹 꺼지 |
| 371 | `confess_yuna_choice` | {name} | yuna_hideout_day.webp | yuna_date_normal.webp |  | 🌅 | *유나가 접힌 책갈피 모서리를 엄지로 천천히 펴면서 내 |
| 372 | `confess_yuna_no_2` | 유나 | yuna_hideout_day.webp | yuna_date_shy.webp |  | 🌅 | *유나가 말없이 책갈피를 덮인 책갈피 틈으로 깊숙이 밀 |
| 373 | `confess_yuna_no_3` | {name} | yuna_hideout_day.webp | yuna_date_normal.webp |  | 🌅 | 유나야, 무릎 위에 둔 그 책은 아직 다 못 읽은 거야 |
| 374 | `confess_yuna_no_4` | 유나 | yuna_hideout_day.webp | yuna_date_sad.webp |  | 🌅 | 응. 가장 중요한 결말은 아직 못 봤어. |
| 375 | `confess_yuna_no_4_b` | {name} | yuna_hideout_day.webp | yuna_date_sad.webp |  | 🌅 | *자리에서 일어나 문 쪽으로 세 걸음쯤 멀어졌을 때,  |
| 376 | `day4_night_start` | {name} | school | 없음 |  |  | *어스름이 짙게 깔린 학교를 나서서 집으로 돌아갈 시간 |
| 377 | `day4_night_branch` | 시스템 | 없음 | 없음 |  |  |  |
| 378 | `day4_student_visit_branch` |  | 없음 | 없음 |  |  |  |
| 379 | `day4_student_night_branch` | {name} | room_my | 없음 |  |  | *집으로 돌아와 침대 맡에 가방을 내려놓는다. 충전기  |
| 380 | `day4_waited_night_branch` |  | 없음 | 없음 |  |  |  |
| 381 | `day4_waited_yuna_invite` | 유나 | room_my | yuna_normal | 0.35 |  | 열 시에 학교 후문 가로등 아래로 와 줘. 밤바람 쐬면 |
| 382 | `day4_waited_yuna_promise` | {name} | room_my | 없음 |  |  | 응, 열 시에 학교 후문에서 보자. *유나에게 답장을  |
| 383 | `wall_yuna_rival_rank` | 시스템 | yuna_hideout | 없음 |  |  |  |
| 384 | `wall_yuna_glimpse_1` | {name} | school_back | 없음 |  |  | *밤 10시, 유나와 만나기로 한 학교 후문으로 걸어가 |
| 385 | `wall_yuna_glimpse_2` | {name} | school_back | seyoun_pout |  |  | *서연은 휴대폰을 주머니에 넣었다 꺼내기를 반복한다.  |
| 386 | `wall_yuna_glimpse_3_b` | 서연 | school_back | seyoun_normal |  |  | 지금 이대로 집에 들어가면 또 거울 앞에서 웃는 얼굴부 |
| 387 | `wall_yuna_glimpse_4` | 서연 | event_temptation_seoyeon | 없음 |  |  | *옥상문이 닫히자 서연은 말없이 블라우스 단추를 풀고  |
| 388 | `day4_temptation_seoyeon_freetalk` | 서연 | event_temptation_seoyeon | 없음 |  | 🌙 | *내 손을 자기 맨가슴 위에서 조금도 놓아주지 않은 채 |
| 389 | `day4_temptation_return_home` | {name} | room_my | 없음 |  |  | *온몸에 밴 뜨거운 열기와 숨결을 채 식히지 못한 채  |
| 390 | `day4_adult_night_regret_target_branch` |  | room_my | 없음 |  |  |  |
| 391 | `day4_night_regret` | {name} | room_my | 없음 |  |  | *늦은 밤 방 안으로 돌아와 침대에 걸터앉았지만 메신저 |
| 392 | `day4_night_regret_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 393 | `day4_night_regret_msg_yuna` | 유나 | room_my | yuna_normal | 0.35 |  | 오늘 밤에는 네가 꼭 와 줄 거라고 믿었어. 이만 먼저 |
| 394 | `day4_night_regret_reply` | {name} | room_my | 없음 |  |  | *몇 번이고 자판을 쳤다가 지우기를 반복한 끝에 입력창 |
| 395 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 396 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *일요일 아침 알람을 맞춰 두고 방 안의 스탠드 불을  |
| 397 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안의 시계 바늘이 자정을 넘어 다섯째 날로 향한다 |
| | **Day 5** | | | | | | |
| 398 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날, 일요일 아침. 교문 너머로 축제 현수막이 |
| 399 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 400 | `morning5_temptation_counteroffer_branch` |  | room_school | 없음 |  |  |  |
| 401 | `morning5_caught_by_seoyeon_route` |  | room_school | 없음 |  |  |  |
| 402 | `morning5_caught_yuna_by_seoyeon` | 유나 | room_school | yuna_sad |  |  | *유나와 마주 앉은 책상 위에서 휴대폰이 낮게 울린다. |
| 403 | `morning5_caught_yuna_lie` | 유나 | room_school | yuna_angry |  |  | *유나가 검지로 화면을 다시 두드려 방금 뜬 알림을 내 |
| 404 | `morning5_counteroffer_gather` | {name} | room_school | 없음 |  |  | *어젯밤 함께 남아 있던 상대에게 메시지를 보내 아침  |
| 405 | `morning5_counteroffer_group_talk` | 두 사람 | room_school | 없음 |  |  | *축제 안내 방송을 앞둔 어수선한 교실 한복판, 어젯밤 |
| 406 | `morning5_counteroffer_choice` | {name} | room_school | 없음 |  |  | *숨 막히는 해명이 끝나자, 두 사람의 시선이 내 입술 |
| 407 | `morning5_counteroffer_choice_lead` | {name} | room_school | 없음 |  |  | *먼저 약속했던 사람 쪽으로 똑바로 몸을 돌려 고개를  |
| 408 | `morning5_after_counteroffer` | {name} | room_school | 없음 |  |  | *교탁 모서리에 놓여 있던 조회 유인물 한 장이 바람에 |
| 409 | `morning5_after_counteroffer_hidden_check` |  | room_school | 없음 |  |  |  |
| 410 | `hidden_nurse_d5_after_co_check` |  | school_hallway | 없음 |  |  |  |
| 411 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 412 | `morning5_sojeong_1` | {name} | room_school | 없음 |  |  | *조용한 창가에 서서 휴대폰 메모 앱을 연다. 이전 학 |
| 413 | `morning5_sojeong_2` | {name} | room_school | 없음 |  |  | *더 이상 나를 변호하기 위한 마흔 번째 초안은 만들지 |
| 414 | `morning5_sojeong_3` | {name} | room_school | 없음 |  |  | 그때 네 책상 위에 적힌 낙서들을 두 눈으로 보고도 선 |
| 415 | `morning5_sojeong_4` | {name} | room_school | 없음 |  |  | *말풍선 옆에 작은 전송 완료 표시가 뜬다. 숫자 1이 |
| 416 | `morning5_sojeong_5` | {name} | room_school | 없음 |  |  | 전학 오기 전 학교에서 제가 모른 척 지나쳤던 일에 대 |
| 417 | `morning5_route_branch` |  | room_school | 없음 |  |  |  |
| 418 | `morning5_co_haeun_check` |  | room_school | 없음 |  |  |  |
| 419 | `tour_co_branch` |  | school | 없음 |  |  |  |
| 420 | `tour_co_yuna_1` | {name} | yuna_hideout_day.webp | yuna_sad |  |  | *별관 소파 끝에 앉은 유나는 무릎 위의 노트를 끝내  |
| 421 | `tour_co_yuna_2` | 유나 | yuna_hideout_day.webp | yuna_sad |  |  | ...노트 마지막 장 결말은, 오늘 안 보여 줄래. |
| 422 | `tour_co_yuna_3` | {name} | yuna_hideout_day.webp | yuna_pout |  |  | *창틈으로 스며든 오후의 햇살이 내 옆의 빈자리까지 길 |
| 423 | `after5_start` |  | 없음 | 없음 |  | 🌅 |  |
| 424 | `day5_haeun_guilt_gate` |  | 없음 | 없음 |  | 🌅 |  |
| 425 | `day5_haeun_route_gate` |  | 없음 | 없음 |  | 🌅 |  |
| 426 | `after5_original_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 427 | `after5_co_start` | {name} | school_hallway | 없음 |  | 🌅 | *축제 인파가 빠져나간 방과 후 복도에, 오늘 아침 숨 |
| 428 | `after5_co_abandoned_branch` |  | school_hallway | 없음 |  | 🌅 |  |
| 429 | `after5_co_yuna_1` | 유나 | library_old | yuna_sad |  | 🌅 | *유나는 노트에 꽂혀 있던 책갈피를 빼내어 가방 깊숙이 |
| 430 | `after5_co_yuna_2` | 유나 | library_old | yuna_angry |  | 🌅 | ...오늘은 내 뒤 따라오지 마. |
| 431 | `after5_co_tempter_branch` |  | school_hallway | 없음 |  | 🌅 |  |
| 432 | `after5_co_tempter_seo_1` | 서연 | school_hallway | seyoun_sad |  | 🌅 | *서연이 만지작거리던 옥상 열쇠고리를 주머니에 넣는다. |
| 433 | `after5_co_tempter_seo_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 그래도 오늘 이 자리에서는 내가 먼저 널 붙잡지 않을게 |
| 434 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 435 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 436 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 437 | `after5_farewell_dain_1` | {name} | school_back | dain_normal |  | 🌅 | *체육관 입구 쪽에서 다인이 걸어 나온다. 언제나 성큼 |
| 438 | `after5_farewell_dain_skip` |  | school_hallway | 없음 |  | 🌅 |  |
| 439 | `after5_farewell_dain_low` | 다인 | school_back | dain_normal |  | 🌅 | *체육관 앞길에서 걸어오던 다인이 두 걸음 떨어진 자리 |
| 440 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *붉은 석양이 길게 내려앉은 교정 위로, 축제의 끝을  |
| 441 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 442 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 443 | `ending_counteroffer_bitter` |  | park | 없음 |  |  |  |
| 444 | `ending_counteroffer_choice_lead` | {name} | park | 없음 |  |  | *돌고 돌아 원래 약속했던 사람을 선택했지만 뒤늦은 사 |
| 445 | `ending_counteroffer_bitter_route` |  | park | 없음 |  |  |  |
| 446 | `co_bitter_yuna_1` | {name} | bookstore | yuna_sad |  |  | *비 개인 오후 헌책방 앞에 먼저 나와 서 있던 유나는 |
| 447 | `co_bitter_yuna_2` | 유나 | bookstore | yuna_sad |  |  | ...그날 아침 이후로, 도서관 별관에는 더 이상 가지 |
| 448 | `co_bitter_yuna_3` | {name} | ending_bittersweet | 없음 |  |  | *유나는 짧게 고개만 한 번 끄덕여 보이고는, 내가 서 |
| 449 | `bitter_epilogue_1` | {name} | ending_bittersweet | 없음 |  |  | *졸업 후 계절이 바뀌면서 서로의 연락은 조금씩 뜸해졌 |
| 450 | `bitter_epilogue_2` | {name} | ending_bittersweet | 없음 |  |  | *전학 첫 주 닷새 동안의 눈부신 기록은 사진첩 속에  |
| 451 | `bitter_epilogue_3` | 시스템 | ending_bittersweet | 없음 |  |  | ─── BITTERSWEET END ─── |
| 452 | `day5_main_ending_freetalk_router` | {name} | park | 없음 |  |  |  |
| 453 | `day5_yuna_ending_freetalk_intro` |  | 없음 | 없음 |  |  |  |
| 454 | `day5_yuna_ending_freetalk_router` | {name} | yuna_hideout | 없음 |  |  |  |
| 455 | `day5_yuna_ending_freetalk_bittersweet` | 유나 | library_old | yuna_sad |  | 🌙 | *빗물에 잉크가 번진 마지막 쪽지를 조용히 책갈피 사이 |
| 456 | `day5_credits` |  | school | 없음 |  |  |  |
| 457 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

### friend_12

**선택지:**
- `seoyeon_choice`: (선택)
- `lunch_choice`: (선택)
- `lunch_yuna_choice`: (선택)
- `after_end`: (선택)
- `lunch2_choice`: (선택)
- `after2_choice`: (선택)
- `night2_choice`: (선택)
- `morning3_date_yuna_choice`: (선택)
- `lunch3_choice`: (선택)
- `confess_yuna_choice`: (선택)
- `wall_yuna_glimpse_3_b`: (선택)
- `wall_yuna_choice`: (선택)
- `after5_last_chance_choice`: (선택)
- `day5_ending_restart`: (선택)

**최종 호감도:** 서연=-7 유나=22 다인=-1 담임=0 보건=0

<details>
<summary>씬 타임라인 (493씬)</summary>

| # | 씬 ID | 화자 | 배경 | 캐릭터 | OP | 밤 | 대사 (앞 30자) |
|---|--------|------|------|--------|----|----|----------------|
| | **Day 1** | | | | | | |
| 1 | `start` | {name} | school | 없음 |  |  | *4월의 벚꽃잎이 흩날리는 교문 앞. 아직 풀기가 가시 |
| 2 | `start_again` | {name} | school | 없음 |  |  | *순간 울컥 치미는 현기증에 차가운 교문 기둥을 짚어선 |
| 3 | `start_3` | {name} | school | 없음 |  |  | *주머니 속 휴대폰이 짧게 떨린다. 예전 학교 단체방  |
| 4 | `name_input_scene` | 시스템 | school | 없음 |  |  | 전학생, 이름이 뭐야? |
| 5 | `gate_1` | {name} | school | 없음 |  |  | *교문 그늘 아래 서 있던 긴 생머리의 여학생이 안경테 |
| 6 | `seoyeon_meet_1` | 서연 | school | seyoun_normal |  |  | 혹시 오늘 온 전학생? {name} 맞지? |
| 7 | `seoyeon_meet_2` | 서연 | school | seyoun_normal |  |  | 가슴팍 명찰도 {name}이네. 반가워. *단정한 손끝 |
| 8 | `seoyeon_meet_3` | {name} | school | seyoun_normal |  |  | 맞는데. 내 얼굴은 어떻게 한 번에 알아봤어? |
| 9 | `seoyeon_meet_4` | 서연 | school | seyoun_normal |  |  | 학생회장이거든. 새로 온 전학생 맞이하는 것도 내 몫이 |
| 10 | `seoyeon_meet_5` | 서연 | school | seyoun_normal |  |  | 이쪽으로 따라와. 조회 시작하기 전에 15분 안으로 학 |
| 11 | `seoyeon_meet_6` | {name} | school | seyoun_normal |  |  | 첫날부터 학생회장이 직접 안내라니 좀 떨리는데. |
| 12 | `seoyeon_meet_7` | 서연 | school | seyoun_normal |  |  | 원래 내가 맡은 일이니까 괜히 어렵게 생각할 것 없어. |
| 13 | `seoyeon_meet_8` | 서연 | school | seyoun_normal |  |  | 자, 가자. *몸을 돌리는 서연의 교복 셔츠 깃에서 햇 |
| 14 | `seoyeon_choice` | {name} | school | seyoun_normal |  |  | *앞서 걷는 서연의 단정한 뒷모습을 보며 입을 연다.* |
| 15 | `choice_flirt_1` | 서연 | school | seyoun_normal |  |  | *걸음을 멈추고 반쯤 돌아서더니 맑은 안경알 너머로 눈 |
| 16 | `choice_flirt_2` | 서연 | school | seyoun_laugh |  |  | 전학 첫날부터 농담할 여유도 있네. 덕분에 네 이름은  |
| 17 | `choice_flirt_3` | {name} | school | seyoun_laugh |  |  | 오, 혹시 첫인상 점수라도 매기는 중이야? |
| 18 | `choice_flirt_4` | 서연 | school | seyoun_normal |  |  | 글쎄, 아직 학교 분위기는 잘 모르는 모양이지만 첫인상 |
| 19 | `choice_flirt_5` | {name} | school | seyoun_normal |  |  | 학생회장님한테 후한 점수라니 영광인데? |
| 20 | `choice_flirt_6` | 서연 | school | seyoun_normal |  |  | 일주일 뒤에도 그렇게 여유롭게 웃을 수 있을지 두고 볼 |
| 21 | `choice_flirt_7` | 서연 | school | seyoun_laugh |  |  | 늦겠다, 이리 따라와 {name}. *살짝 붉어진 귓바 |
| 22 | `hallway_1` | 서연 | school_hallway | seyoun_back |  |  | 지나가는 애들한테 인사받느라 걸음 늦출 필요 없어. 그 |
| 23 | `hallway_3` | 서연 | school_hallway | seyoun_normal |  |  | 지금 걷는 본관이 3학년 건물이고 창밖 건너편이 도서관 |
| 24 | `hallway_4` | 서연 | school_hallway | seyoun_normal |  |  | 그리고 이건 아무한테나 안 보여주는 건데. *재킷 주머 |
| 25 | `hallway_5` | 서연 | school_hallway | seyoun_normal |  |  | 원래 우리 학교 옥상은 평소엔 잠겨 있거든. 이 열쇠는 |
| 26 | `hallway_6` | {name} | school_hallway | seyoun_normal |  |  | 옥상에 너만의 비밀 아지트라도 숨겨 둔 거야? |
| 27 | `hallway_6_b` | 서연 | school_hallway | seyoun_normal |  |  | *맑게 울리던 열쇠고리 소리가 손안에서 뚝 멎는다.*  |
| 28 | `hallway_6_c` | 서연 | school_hallway | seyoun_normal |  |  | *입꼬리를 살짝 올린 채 대답 대신 열쇠를 다시 주머니 |
| 29 | `hallway_7` | 서연 | school_hallway | seyoun_normal |  |  | 맞다, 오늘 점심시간. 아직 어디서 밥 먹을지 못 정했 |
| 30 | `hallway_8` | {name} | school_hallway | seyoun_shy |  |  | *어느새 걸음을 멈춘 서연이 아침 햇살이 비치는 교실  |
| 31 | `hallway_10` | 서연 | school_hallway | seyoun_normal |  |  | 다 왔다, 여기가 네 교실이야. 얼른 들어가 봐. |
| 32 | `hallway_11` | {name} | school_hallway | seyoun_normal |  |  | 점심때도 일대일로 안내해 주는 거야? |
| 33 | `hallway_12` | 서연 | school_hallway | seyoun_normal |  |  | 글쎄, 오늘 오전 수업 잘 버티는 거 봐서. |
| 34 | `hallway_13` | 서연 | school_hallway | seyoun_back |  |  | *돌아서던 서연이 클립보드를 어깨 높이로 가볍게 들어  |
| 35 | `hallway_13_b` | {name} | school_hallway | seyoun_back |  |  | *단정한 구두 소리를 남기며 복도 저편으로 멀어지는 서 |
| 36 | `classroom_1` | {name} | room_school | 없음 |  |  | *드르륵, 교실 앞문을 열자 왁자지껄하던 공기 위로 수 |
| 37 | `classroom_2_b` | {name} | room_school | teacher_normal |  |  | *교탁 앞에는 20대 후반쯤 되어 보이는 담임선생님이  |
| 38 | `classroom_3` | 담임 | room_school | teacher_normal |  |  | 자, 다들 주목. 오늘부터 우리 반 식구가 된 전학생이 |
| 39 | `classroom_3_b` | {name} | room_school | teacher_normal |  |  | 오늘 전학 온 {name}입니다. 잘 부탁드립니다. * |
| 40 | `classroom_5_b` | 담임 | room_school | teacher_normal |  |  | 그래, {name}. 우리 반에 온 걸 환영해. 급할  |
| 41 | `classroom_5_c` | {name} | room_school | teacher_normal |  |  | *낯선 교실 공기에 섞여 내 숨소리가 잦아드는 사이 교 |
| 42 | `classroom_dain_1` | 다인 | room_school | dain_normal |  |  | 오, 전학생! 드디어 우리 반에도 새 얼굴이 들어왔네! |
| 43 | `classroom_dain_2` | 다인 | room_school | yuna_normal |  |  | 이쪽 봐, 이쪽! *산뜻한 갈색 숏컷에 활동적인 배구부 |
| 44 | `classroom_dain_3` | 담임 | room_school | teacher_normal |  |  | 다인아, 아침부터 목소리 좀 낮추자. 그리고 교실 안에 |
| 45 | `classroom_dain_4` | 다인 | room_school | yuna_normal |  |  | 에이, 쌤도 참. 이게 세상에서 제일 편하단 말이에요! |
| 46 | `classroom_dain_5` | 다인 | room_school | yuna_normal |  |  | 네 자리는 여기야, 여기! *아이들의 웃음소리 사이로  |
| 47 | `classroom_dain_5_b` | 담임선생님 | room_school | teacher_normal |  |  | 다인아, 적어도 출석 부르는 동안만이라도 진정 좀 하자 |
| 48 | `classroom_dain_5_c` | 담임 | room_school | teacher_normal |  |  | 지금부터 그 에너지를 다 쓰면 어떡해. 아직 1교시 종 |
| 49 | `classroom_dain_5_d` | 담임선생님 | room_school | teacher_angry |  |  | *담임은 작게 고개를 저으며 출석부 다음 장을 부드럽게 |
| 50 | `classroom_yuna_1` | {name} | room_school | yuna_bored |  |  | *소란스러운 교실 풍경과 동떨어진 창가 맨 뒷자리, 봄 |
| 51 | `classroom_yuna_2` |  | 없음 | 없음 |  |  |  |
| 52 | `classroom_yuna_4` | {name} | room_school | yuna_bored |  |  | *앞줄에 앉은 학생 하나가 내 소매를 스치며 작게 속삭 |
| 53 | `classroom_seat_1` | 담임선생님 | room_school | teacher_normal |  |  | *출석부를 덮은 담임이 창가 쪽에서 한 줄 건너편 빈자 |
| 54 | `classroom_seat_2` | 다인 | room_school | yuna_normal |  |  | 오, 딱 내 옆자리네? 멀뚱히 서 있지 말고 얼른 와서 |
| 55 | `classroom_minsu_1` | {name} | room_school | minsu_normal |  |  | *가방을 내려놓고 의자를 빼려는데 앞자리에 앉아 있던  |
| 56 | `classroom_minsu_2` | 민수 | room_school | minsu_smirk |  |  | 야, 전학생. 우리 반에 온 걸 환영한다. 그리고 미리 |
| 57 | `classroom_minsu_3` | {name} | room_school | minsu_smirk |  |  | 갑자기 무슨 각오? |
| 58 | `classroom_minsu_2_b` | 민수 | room_school | minsu_normal |  |  | *옆자리의 다인을 향해 슬쩍 턱짓하며 씨익 웃는다.*  |
| 59 | `classroom_dain_talk_1` | {name} | room_school | minsu_normal |  |  | *장난스럽게 돌아앉는 앞자리 남학생의 교복 명찰에는 ' |
| 60 | `classroom_dain_talk_2` | 다인 | room_school | yuna_normal |  |  | 저 녀석 말은 신경 쓰지 마! 그보다 나 궁금한 거 하 |
| 61 | `classroom_dain_talk_3` | 다인 | room_school | yuna_normal |  |  | 야, {name}. 너 평소에 몸 움직이는 거나 운동  |
| 62 | `classroom_dain_talk_4` | {name} | room_school | yuna_normal |  |  | 운동은 왜, 갑자기? |
| 63 | `classroom_dain_talk_5` | 다인 | room_school | yuna_normal |  |  | 아니, 오늘 방과후에 리시브 연습을 좀 더 하고 싶은데 |
| 64 | `classroom_dain_talk_6` | {name} | room_school | yuna_normal |  |  | 전학생을 첫날부터 인간 볼 머신으로 쓰려고? |
| 65 | `classroom_dain_talk_7` | 다인 | room_school | yuna_normal |  |  | 에이, 설마! 그래도 기계보다는 사람이랑 호흡 맞추는  |
| 66 | `classroom_dain_talk_8` | 다인 | room_school | yuna_normal |  |  | 어때, 같이 해 볼래? *다인의 따뜻한 검지가 내 책상 |
| 67 | `classroom_yuna_note_1` | {name} | room_school | yuna_bored |  |  | *그때 뒷자리에서 반듯하게 접힌 종이쪽지 하나가 책상  |
| 68 | `classroom_yuna_note_3` | 유나 | room_school | yuna_bored |  |  | *조심스럽게 펼치자 은은한 연보라색 잉크 글씨와 모서리 |
| 69 | `classroom_yuna_note_5` | {name} | room_school | yuna_bored |  |  | *내가 고개를 들자 창가 햇살에 비치던 유나의 하얀 손 |
| 70 | `classroom_yuna_note_6` | {name} | room_school | yuna_bored |  |  | *1교시 시작을 알리는 종소리가 교실 안을 메운다. 창 |
| 71 | `lunch_start` | {name} | school_hallway | 없음 |  |  | *점심시간을 알리는 종소리와 함께 교실 공기가 들뜬다. |
| 72 | `lunch_start_4` | 서연 | school_hallway | seyoun_normal |  |  | 아까 말한 대로 옥상 올라올 거지? *계단참에서 걸음을 |
| 73 | `lunch_start_4_b` | {name} | school_hallway | dain_normal |  |  | *대답하려는 순간 옆에서 다가온 다인의 따뜻한 손바닥이 |
| 74 | `lunch_start_5` | 다인 | school_hallway | dain_normal |  |  | 야, 아직 점심 안 먹었지? 나랑 매점 뛰어가자. 빵  |
| 75 | `lunch_start_6` | 유나 | school_hallway | yuna_normal |  |  | 난 도서관 갈 건데. *내 옆을 스쳐 지나가며 가방끈을 |
| 76 | `lunch_start_7` | {name} | school_hallway | 없음 |  |  | *바람 부는 옥상과 달콤한 빵 냄새가 나는 매점, 그리 |
| 77 | `lunch_choice` | {name} | school_hallway | 없음 |  |  | *첫날의 점심시간, 누구의 발걸음을 따라갈까?* |
| 78 | `lunch_yuna_1` | {name} | library_old | yuna_normal |  |  | *복도의 소음이 멀어지는 계단을 지나 유나의 뒤를 따라 |
| 79 | `lunch_yuna_1_aff_default` | 유나 | library_old | yuna_normal |  |  | *따로 건네는 쪽지는 없었다. 유나는 햇살이 비스듬히  |
| 80 | `lunch_yuna_2` | 유나 | library_old | yuna_normal |  |  | 의자 끌 때 소리 나지 않게 살살. *하얀 검지로 펼쳐 |
| 81 | `lunch_yuna_4` | 유나 | library_old | yuna_normal |  |  | 잠깐만 기다려. *끼워 두었던 대출 영수증 끝을 반듯하 |
| 82 | `lunch_yuna_5` | {name} | library_old | yuna_normal |  |  | *5초, 다시 10초가 고요하게 흐른다. 유나는 접힌  |
| 83 | `lunch_yuna_5_b` | {name} | library_old | yuna_normal |  |  | 옆자리 비었으면 앉아도 돼? |
| 84 | `lunch_yuna_7` | 유나 | library_old | yuna_normal |  |  | *활자에서 눈을 떼지 않은 채 나직이 속삭인다.* 옆에 |
| 85 | `lunch_yuna_8` | 유나 | library_old | yuna_normal |  |  | 가방 내렸어. 이쪽 앉아. *옆 의자에서 자기 가방을  |
| 86 | `lunch_yuna_10` | {name} | library_old | yuna_normal |  |  | *나란히 앉은 책상 위로 벽시계 초침 소리와 종이 스치 |
| 87 | `lunch_yuna_10_b` | {name} | library_old | yuna_normal |  |  | *유나의 손끝이 낡은 책갈피에 적힌 흐릿한 글씨를 슬쩍 |
| 88 | `lunch_yuna_12` | 유나 | library_old | yuna_normal |  |  | *책장 너머로 붉은빛이 감도는 눈동자가 천천히 올라온다 |
| 89 | `lunch_yuna_13` | {name} | library_old | yuna_normal |  |  | 어? 진짜네. |
| 90 | `lunch_yuna_14` | 유나 | library_old | yuna_normal |  |  | 그 시리즈는 1권부터 차례대로 읽어야 이해돼. |
| 91 | `lunch_yuna_15` | 유나 | library_old | yuna_normal |  |  | 여기 있어. 이걸로 먼저 읽어. *자기 손옆에 쌓아 두 |
| 92 | `lunch_yuna_16` | {name} | library_old | yuna_normal |  |  | 빌려주는 거야? 고마워. |
| 93 | `lunch_yuna_17` | 유나 | library_old | yuna_normal |  |  | 다 읽으면 나한테 다시 돌려줘. |
| 94 | `lunch_yuna_18` | 유나 | library_old | yuna_normal |  |  | 그럼 이제 각자 읽자. *책상 하나를 사이에 두고 나란 |
| 95 | `lunch_yuna_20` | {name} | library_old | yuna_normal |  |  | *한참 만에 고개를 들자 창가 햇살을 등진 유나가 책  |
| 96 | `lunch_yuna_21` | {name} | library_old | yuna_normal |  |  | 왜 그래, 나한테 할 말 있어? |
| 97 | `lunch_yuna_22` | 유나 | library_old | yuna_normal |  |  | *유나가 얇은 책갈피를 페이지 사이에 끼워 넣는다.*  |
| 98 | `lunch_yuna_23` | {name} | library_old | yuna_normal |  |  | 그게 왜? |
| 99 | `lunch_yuna_24` | 유나 | library_old | yuna_normal |  |  | 생각보다 편했어. |
| 100 | `lunch_yuna_25` | 유나 | library_old | yuna_normal |  |  | *유나의 시선이 내가 쥔 책 표지를 스쳐 내 눈동자에  |
| 101 | `lunch_yuna_choice` | {name} | library_old | yuna_normal |  |  | *읽던 책을 천천히 덮으며 유나와 시선을 맞춘다.* |
| 102 | `lunch_yuna_c1_1` | 유나 | library_old | yuna_normal |  |  | 응, 급하게 넘기지 말고 1권부터 천천히 읽어 봐. 뒤 |
| 103 | `lunch_yuna_c1_2` | 유나 | library_old | yuna_smile |  |  | 마지막 장까지 다 읽으면 말해 줘. 네가 어떻게 읽었는 |
| 104 | `lunch_yuna_freetalk` | 유나 | library_old | yuna_normal |  |  | *유나가 덮은 책 표지 위로 하얀 두 손을 가만히 포갠 |
| 105 | `lunch_end` | {name} | school_hallway | 없음 |  |  | *5교시 수업을 알리는 차임벨이 울려 퍼지며 짧고도 설 |
| 106 | `after_start` | {name} | school_hallway | 없음 |  | 🌅 | *붉은 노을이 스며드는 방과후 복도. 주머니 속에서 진 |
| 107 | `after_kakao_1` | {name} | school_hallway | 없음 |  | 🌅 | *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ |
| 108 | `after_kakao_3` | {name} | school_hallway | 없음 |  | 🌅 | *'다행이다 ㅋㅋ' 그 가벼운 마지막 한 줄에 시선이  |
| 109 | `after_kakao_5` |  | 없음 | 없음 |  | 🌅 |  |
| 110 | `after_kakao_end` | {name} | school_hallway | 없음 |  | 🌅 | *한참을 망설이다 조용히 단체방 나가기를 누른다. 텅  |
| 111 | `after1_jealousy_yuna_1` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 너 점심시간에 도서관 갔다 왔다며? 그것도 유나랑 |
| 112 | `after1_jealousy_yuna_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 신기하네, 걔 원래 옆에 누가 오는 거 진짜 싫어하거든 |
| 113 | `after1_pre_miss` | {name} | school_hallway | 없음 |  | 🌅 | *휴대폰을 주머니에 넣고 석양이 길게 드리운 복도를 따 |
| 114 | `after_miss_dain_1` | {name} | school_hallway | dain_normal |  | 🌅 | *복도 모퉁이를 돌려는데 등 뒤에서 운동화 바닥이 마룻 |
| 115 | `after_miss_dain_2` | 다인 | school_hallway | dain_normal |  | 🌅 | 야, 거기 앞 조심해! |
| 116 | `after_miss_dain_3` | 다인 | school_hallway | dain_normal |  | 🌅 | 휴, 아슬아슬하게 비켜 줬네! *내 어깨를 스치며 바람 |
| 117 | `after_miss_dain_4` | 다인 | school_hallway | dain_laugh |  | 🌅 | 오, 방금 반사신경 꽤 괜찮았는데? 역시 운동 좀 해  |
| 118 | `after_miss_dain_5` | {name} | school_hallway | dain_laugh |  | 🌅 | 하마터면 부딪힐 뻔했잖아. 복도에서 웬 전력질주야? |
| 119 | `after_miss_dain_6` | 다인 | school_hallway | dain_laugh |  | 🌅 | 배구부 집합 시간 늦었거든! 지금 당장 체육관 뛰어가야 |
| 120 | `after_miss_dain_6_b` | {name} | school_hallway | dain_pain |  | 🌅 | *돌아서서 두어 걸음 내딛던 다인이 순간 걸음을 멈추고 |
| 121 | `after_miss_dain_7` | 다인 | school_hallway | dain_laugh |  | 🌅 | 참, 내 이름 다인이야! 내일 와서 이름 까먹으면 안  |
| 122 | `after_miss_yuna_1` | {name} | library_old | yuna_normal |  | 🌅 | *도서관 앞 복도를 지나는데 붉은 눈동자의 여학생이 소 |
| 123 | `after_miss_yuna_1_b` | {name} | library_old | yuna_normal |  | 🌅 | 저기, 방금 책 사이에서 이거 떨어졌어. |
| 124 | `after_miss_yuna_1_c` | {name} | library_old | yuna_normal |  | 🌅 | *바닥에 내려앉은 낡은 책갈피를 조심스레 주워 건넨다. |
| 125 | `after_miss_yuna_2` | 유나 | library_old | yuna_normal |  | 🌅 | 다행이다, 모서리 안 구겨졌네. *하얀 손가락으로 책갈 |
| 126 | `after_miss_yuna_3` | 유나 | library_old | yuna_normal |  | 🌅 | 주워 줘서 고마워. |
| 127 | `after_miss_yuna_3_b` | 유나 | library_old | yuna_normal |  | 🌅 | *소중한 것을 감추듯 책갈피를 책등 깊숙이 끼워 넣고는 |
| 128 | `after_miss_yuna_4` |  | 없음 | 없음 |  | 🌅 |  |
| 129 | `after_miss_seoyeon_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *가방을 메고 신발장으로 내려가려는데 계단 앞 복도에서 |
| 130 | `after_miss_seoyeon_2` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 너 아까 점심시간에 어디 갔었어? |
| 131 | `after_miss_seoyeon_3` | {name} | school_hallway | seyoun_normal |  | 🌅 | 점심시간에 어디라니? |
| 132 | `after_miss_seoyeon_4` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 일부러 옥상 문까지 열어 두고 있었는데 끝까지 안 올라 |
| 133 | `after_miss_seoyeon_5` | {name} | school_hallway | seyoun_normal |  | 🌅 | 설마 옥상에서 계속 나 기다린 거야? |
| 134 | `after_miss_seoyeon_6` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 기다리긴 누가 기다려, 내 도시락 먼저 먹고 있었지.  |
| 135 | `after_miss_seoyeon_7` | {name} | school_hallway | seyoun_normal |  | 🌅 | *서연은 클립보드를 가슴께로 끌어안으며 시선을 살짝 피 |
| 136 | `after_miss_seoyeon_8` | 서연 | school_hallway | seyoun_pout |  | 🌅 | 내일 점심엔 다른 데로 새지 마. |
| 137 | `after_end` | {name} | school_hallway | 없음 |  | 🌅 | *하교를 알리는 안내 방송이 끝난 뒤 노을빛만 남은 복 |
| 138 | `night_start` | {name} | room_my | 없음 |  |  | *집으로 돌아와 아직 낯선 새 교복을 옷걸이에 걸어 두 |
| 139 | `night_start_3` | {name} | room_my | 없음 |  |  | *고요한 방 안, 머리맡에 둔 휴대폰이 짧게 진동하며  |
| 140 | `night_msg_yuna_1` | 유나 | room_my | yuna_normal | 0.35 |  | 오늘 점심엔 옆에서 조용히 있어 줘서 고마웠어 |
| 141 | `night_msg_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | 내일도 내 옆자리 비워 놓을게 |
| 142 | `night_msg_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *짧고 담백한 '내 옆자리 비워 놓을게'라는 문장을 몇 |
| 143 | `night_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 대화창을 닫으려는데 상단 알림 바에 학교 앱  |
| 144 | `night_late_transition` | {name} | room_my | 없음 |  |  | *불을 끄고 막 눈을 감으려는데 정적을 깨고 휴대폰이  |
| 145 | `night_late_branch` | {name} | room_my | 없음 |  |  | *어두운 방 안, 손에 쥔 액정 화면이 하얗게 빛을 낸 |
| 146 | `night_end_1` | {name} | room_my | 없음 |  |  | *휴대폰을 내려놓고 어두운 천장을 올려다본다. 옷걸이에 |
| 147 | `night_end_3` | {name} | room_my | 없음 |  |  | *연락처에 나란히 저장된 새로운 이름들을 한 번 더 눈 |
| | **Day 2** | | | | | | |
| 148 | `morning2_start` | {name} | room_school | 없음 |  |  | *전학 온 지 이틀째 아침. 교복 소매에 남았던 빳빳한 |
| 149 | `morning2_start_2` |  | room_school | 없음 |  |  |  |
| 150 | `morning2_greet_none_tone` |  | room_school | 없음 |  |  |  |
| 151 | `morning2_greet_none_1` | {name} | room_school | 없음 |  |  | *교실 문을 열고 들어서도 먼저 다가오는 사람은 없다. |
| 152 | `morning2_greet_none_2` | {name} | room_school | yuna_normal |  |  | *서연은 교탁 앞에서 출석부만 넘기고 다인은 반대편 친 |
| 153 | `morning2_yuna_seen` | 유나 | room_school | yuna_normal |  |  | ...너 혹시 전학 오기 전에도 이 학교에 와 본 적  |
| 154 | `morning2_note_1` | {name} | room_school | yuna_normal | 0.35 |  | *가방을 걸고 자리에 앉으려는데 책상 한가운데에 정갈하 |
| 155 | `morning2_note_2` | {name} | room_school | yuna_normal | 0.35 |  | *'점심에 도서관 별관으로. — 유나'* |
| 156 | `morning2_seo_1` | 서연 | room_school | seyoun_normal |  |  | *복도를 지나가던 서연이 열린 교실 앞문 틈으로 고개를 |
| 157 | `morning2_seo_4` | {name} | room_school | seyoun_normal |  |  | 바쁜 학생회장이 아침부터 남의 교실 앞까지 직접 인사하 |
| 158 | `morning2_seo_5` | 서연 | room_school | seyoun_normal |  |  | 교무실에 서류 갖다주러 가는 길에 잠깐 멈춘 거야. 그 |
| 159 | `morning2_minsu_1` | 서연 | room_school | seyoun_laugh |  |  | 얼굴 확인했으니까 이제 간다. 아침 조회 늦지 말고.  |
| 160 | `morning2_minsu_1b` | {name} | room_school | minsu_normal |  |  | *서연의 긴 머리카락이 사라진 복도 쪽을 바라보고 있는 |
| 161 | `morning2_minsu_3` | 민수 | room_school | minsu_smirk |  |  | 야, 전학 온 지 이틀 만에 학생회장님이 직접 문 앞까 |
| 162 | `morning2_dain_claim_1` | {name} | room_school | minsu_smirk |  |  | 그건 그냥 네가 인기가 없는 게 아닐까. |
| 163 | `morning2_dain_claim_2` | 민수 | room_school | minsu_smirk |  |  | 뼈 때리지 마라, 사실이긴 한데 지금 그게 핵심이 아니 |
| 164 | `morning2_dain_claim_3` | {name} | room_school | dain_normal |  |  | *복도 유리창 너머로 클립보드를 가슴에 안은 서연이 귓 |
| 165 | `morning2_dain_claim_4` | 다인 | room_school | dain_normal |  |  | 오호, 도도한 회장님도 우리 전학생한테 꽤 관심 있나  |
| 166 | `morning2_dain_claim_5` | {name} | room_school | dain_normal |  |  | 방금 '우리' 전학생이라고 했어? |
| 167 | `morning2_dain_claim_6` | 다인 | room_school | dain_laugh |  |  | 당연하지, 같은 반에다 바로 옆자리 짝꿍이잖아! 그 정 |
| 168 | `morning2_break_transition` | {name} | school_hallway | 없음 |  |  | *1교시가 끝나고 시끌벅적한 교실 열기를 식히려 복도  |
| 169 | `morning2_seo_dust_1` | 서연 | school_hallway | seyoun_normal |  |  | 너 1교시 수업 듣는 동안 대체 뭘 한 거야. *쉬는  |
| 170 | `morning2_seo_dust_2` | 서연 | school_hallway | seyoun_normal |  |  | 움직이지 말고 잠깐 가만히 있어 봐. |
| 171 | `morning2_seo_dust_3` | 서연 | school_hallway | seyoun_normal |  |  | *한 걸음 다가선 서연의 하얀 손끝이 내 교복 어깨에  |
| 172 | `morning2_seo_dust_4` | 서연 | school_hallway | seyoun_normal |  |  | 어깨에 분필 가루 같은 게 묻어 있었어. |
| 173 | `morning2_seo_dust_5` | {name} | school_hallway | seyoun_normal |  |  | 말도 없이 갑자기 손이 훅 들어와서 놀랐잖아. *괜히  |
| 174 | `morning2_seo_dust_6` | 서연 | school_hallway | seyoun_normal |  |  | 뭘 그렇게까지 놀라? 그냥 먼지 털어 준 건데. |
| 175 | `morning2_dain_react_1` | {name} | school_hallway | seyoun_normal |  |  | *분명 먼지는 다 털어 냈는데도 서연의 손끝이 닿았던  |
| 176 | `morning2_dain_react_3` | 다인 | school_hallway | dain_angry |  |  | 야, 방금 그거 뭐야? 학생회장이 네 어깨 만진 거 맞 |
| 177 | `morning2_dain_react_4` | {name} | school_hallway | dain_angry |  |  | 만진 게 아니라 어깨에 묻은 먼지 털어 준 거야. |
| 178 | `morning2_dain_react_5` | 다인 | school_hallway | dain_angry |  |  | 수상한데, 거기 진짜로 먼지가 붙어 있긴 했어? |
| 179 | `morning2_dain_react_6` | {name} | school_hallway | dain_angry |  |  | 진짜로 먼지 털어 준 것뿐이라니까. 왜 눈을 그렇게 뜨 |
| 180 | `lunch2_start` | {name} | school_hallway | 없음 |  |  | *아침에 받은 유나의 쪽지를 손안에 쥔다. 수업 사이마 |
| 181 | `lunch2_choice` | {name} | school_hallway | 없음 |  |  | *이틀째 점심시간, 누구의 곁으로 향할까.* |
| 182 | `lunch2_yuna_1` | {name} | annex_exhibit_hallway | yuna_normal |  |  | *인적이 끊긴 낡은 도서관 별관. 서늘한 그늘이 내려앉 |
| 183 | `lunch2_yuna_intro_check` |  | annex_exhibit_hallway | yuna_normal |  |  |  |
| 184 | `lunch2_yuna_3_yuna_aff` |  | annex_exhibit_hallway | 없음 |  |  |  |
| 185 | `lunch2_yuna_3_cool` | 유나 | annex_exhibit_hallway | yuna_bored |  |  | *말없이 책갈피만 끼워 넣고 가방을 치워 옆자리를 비운 |
| 186 | `lunch2_yuna_cool_cont` | {name} | annex_exhibit_hallway | yuna_bored |  |  | *고요한 방 안에서 내 책장만 한 장 넘어간다. 유나는 |
| 187 | `lunch2_yuna_end` | {name} | yuna_hideout_day.webp | yuna_normal |  |  | *별관 문을 닫기 전 마지막으로 돌아보자 유나는 아까  |
| 188 | `after2_start` | {name} | room_school | 없음 |  | 🌅 | *종례가 끝난 방과 후 교실. 쉬는 시간마다 꺼냈던 휴 |
| 189 | `after2_msg_dain` | 다인 | room_school | dain_normal | 0.35 | 🌅 | 당장 체육관으로 튀어 와! 오늘은 진짜 제대로 된 내기 |
| 190 | `after2_msg_seo` | 서연 | room_school | seyoun_normal | 0.35 | 🌅 | 방과후에 학생회실로 잠깐 와 줄 수 있어? 오늘따라 일 |
| 191 | `after2_msg_yuna` | {name} | room_school | yuna_normal | 0.35 | 🌅 | *유나에게선 따로 온 메시지가 없다. 대신 주머니 속  |
| 192 | `after2_choice` | {name} | room_school | 없음 |  | 🌅 | *석양이 물들기 시작하는 방과후, 어디로 발걸음을 옮길 |
| 193 | `after2_yuna_1` | {name} | annex_exhibit_hallway | 없음 |  | 🌅 | *아침에 받았던 쪽지를 떠올리며 인적 드문 도서관 별관 |
| 194 | `after2_yuna_1_b` | {name} | annex_exhibit_hallway | 없음 |  | 🌅 | *노을이 비스듬히 스며든 별관 복도에는 인기척 하나 없 |
| 195 | `after2_yuna_2` | {name} | yuna_hideout_day.webp | yuna_normal |  | 🌅 | *문을 밀자 경첩이 나직이 삐걱거린다. 안쪽 소파에 깊 |
| 196 | `after2_yuna_tone` |  | yuna_hideout_day.webp | 없음 |  | 🌅 |  |
| 197 | `after2_yuna_cool_1` | 유나 | yuna_hideout_day.webp | yuna_bored |  | 🌅 | *소파 위 이어폰 한쪽만 슬쩍 치운다.* 옆에서 책 읽 |
| 198 | `after2_yuna_cool_cont` | {name} | yuna_hideout_day.webp | yuna_bored |  | 🌅 | *펼쳐진 책 한 페이지를 조용히 내려 읽는다. 유나는  |
| 199 | `after2_yuna_rival_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 200 | `after2_yuna_rival_dain_low` | 다인 | school_hallway | dain_laugh |  | 🌅 | 도서관 별관 쪽에 있었구나? 조심히 들어가고 내일 봐! |
| 201 | `after2_yuna_rival_seo_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 202 | `after2_yuna_rival_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 부족하던 일손은 다른 부원들로 채웠어. 내일 보자. |
| 203 | `after2_group_yuna_companion` | 유나 | library_old | 없음 |  | 🌅 | *별관 책상에 자료 두 묶음이 놓인다.* 한쪽을 끝내기 |
| 204 | `after2_group_return` | {name} | school | 없음 |  | 🌅 | *미묘한 여운이 감도는 대화를 마치고 가방을 고쳐 멘  |
| 205 | `minsu_warn_gate` |  | school | 없음 |  | 🌅 |  |
| 206 | `minsu_warn_1` | {name} | school | 없음 |  | 🌅 | *노을이 지는 하교길. 교문을 막 나서는데 등 뒤에서  |
| 207 | `minsu_warn_1_b` | 민수 | school | minsu_normal |  | 🌅 | *내 보폭에 맞춰 옆에 나란히 서더니 주머니에 두 손을 |
| 208 | `minsu_warn_2` | 민수 | school | minsu_smirk |  | 🌅 | 야, 전학생. |
| 209 | `minsu_warn_3` | {name} | school | minsu_smirk |  | 🌅 | 응? 왜 불러? |
| 210 | `minsu_warn_4` | 민수 | school | minsu_smirk |  | 🌅 | 너 요즘 학교 다니는 거 꽤 재밌냐? |
| 211 | `minsu_warn_4_b` | {name} | school | minsu_normal |  | 🌅 | *민수는 내 쪽을 보지 않고 교문 건너편 깜빡이는 횡단 |
| 212 | `minsu_warn_5` | {name} | school | minsu_smirk |  | 🌅 | 갑자기 그게 무슨 소리야? |
| 213 | `minsu_warn_6` | 민수 | school | minsu_smirk |  | 🌅 | 점심엔 한 명, 방과후엔 또 한 명. 넌 재밌겠지. — |
| 214 | `night2_start` | {name} | room_my | 없음 |  |  | *따뜻한 물로 샤워를 마치고 젖은 머리를 털며 침대에  |
| 215 | `night2_msg_1` |  | 없음 | 없음 |  |  |  |
| 216 | `night2_msg_generic` | 다인 | room_my | dain_normal | 0.35 |  | 야 내일 아침에 교실에서 보자 늦지 마! |
| 217 | `night2_msg_generic_2` | 서연 | room_my | seyoun_normal | 0.35 |  | 내일 점심엔 옥상 열어 놓을게 |
| 218 | `night2_msg_generic_3` |  | 없음 | 없음 |  |  |  |
| 219 | `night2_msg_generic_3_established` | 유나 | room_my | yuna_normal | 0.35 |  | 내가 빌려준 책, 어디까지 읽었어? |
| 220 | `night2_msg_7` | {name} | room_my | yuna_normal | 0.35 |  | *나란히 도착한 대화방 세 개를 번갈아 바라본다. 누구 |
| 221 | `night2_choice` | {name} | room_my | 없음 |  |  | *세 개의 말풍선 중 누구에게 가장 먼저 답장을 보낼까 |
| 222 | `night2_reply_yuna_1` |  | 없음 | 없음 |  |  |  |
| 223 | `night2_reply_yuna_1_established` | {name} | room_my | yuna_normal | 0.35 |  | 아까 빌려준 책 벌써 반쯤 읽었어. 꽤 재밌더라 |
| 224 | `night2_reply_yuna_2` | 유나 | room_my | yuna_normal | 0.35 |  | 응, 다 읽고 나면 네 감상은 어떤지 꼭 듣고 싶어. |
| 225 | `night2_reply_yuna_3` | {name} | room_my | yuna_normal | 0.35 |  | *한동안 입력 창이 고요하게 비어 있다가 조심스럽게 새 |
| 226 | `night2_reply_yuna_4` |  | 없음 | 없음 |  |  |  |
| 227 | `night2_reply_yuna_4_first` | 유나 | room_my | yuna_normal | 0.35 |  | 내가 아끼는 재생목록 하나 보낼게. 세 번째 곡부터 들 |
| 228 | `night2_reply_yuna_5` | {name} | room_my | yuna_normal | 0.35 |  | *유나가 공유해 준 심야 재생목록 링크를 연다. 나열된 |
| 229 | `night2_reply_yuna_6` | 유나 | room_my | yuna_normal | 0.35 |  | 그 곡은 마지막 음까지 끝까지 들어 봐 |
| 230 | `night2_reply_yuna_6_b` | {name} | room_my | yuna_normal | 0.35 |  | *양쪽 귀에 이어폰을 꽂고 재생 버튼을 누른다. 낮고  |
| 231 | `night2_reply_yuna_6_c` | {name} | room_my | yuna_normal | 0.35 |  | *긴 여운을 남기며 마지막 화음이 잦아들고 화면 속 재 |
| 232 | `night2_reply_yuna_7` | {name} | room_my | yuna_normal | 0.35 |  | *재생목록 제목 바로 아래에 유나가 적어 둔 한 줄짜리 |
| 233 | `night2_reply_yuna_react_default` | 유나 | room_my | yuna_normal | 0.35 |  | 응, 들어 줘서 고마워. 잘 자. |
| 234 | `night2_yuna_freetalk` | 유나 | room_my | yuna_normal | 0.35 | 🌙 | 잠깐. 아직 깨어 있으면... 조금만 더 얘기할래? |
| 235 | `night2_hidden_check` | {name} | room_my | 없음 |  |  | *메신저 창을 정리하려는데 상단 알림 목록 사이에 학교 |
| 236 | `night2_end_1` | {name} | room_my | 없음 |  |  | *답장을 마치고 길게 숨을 내쉬며 베개 옆으로 휴대폰을 |
| 237 | `night2_flashback_1` | {name} | room_my | 없음 |  |  | *남은 두 사람에게도 답장을 보내려다 손가락이 굳는다. |
| 238 | `night2_flashback_2` | {name} | sojeong_flashback | 없음 |  |  | *사진첩 스크롤을 끝까지 내리자 나타난 3개월 전 봄  |
| 239 | `night2_flashback_3` | {name} | room_my | 없음 |  |  | *차마 전송 버튼을 누르지 못했던 문장들이 휴대폰 메모 |
| 240 | `night2_flashback_5` | {name} | room_my | 없음 |  |  | *38번째 임시 저장 메모가 마지막 문장이다. 그 아래 |
| 241 | `night2_flashback_7` | {name} | room_my | 없음 |  |  | *떨리는 엄지손가락을 사진 아래 휴지통 삭제 아이콘 위 |
| 242 | `night2_flashback_8` | {name} | room_my | 없음 |  |  | *다시 켠 메신저 목록에는 아직 내가 답하지 못한 두  |
| 243 | `night2_flashback_9` | {name} | room_my | 없음 |  |  | *방금 닫았던 소정이의 사진을 한 번 더 열어 본다.  |
| 244 | `night2_flashback_10` | {name} | room_my | 없음 |  |  | *가슴 한구석이 묵직하게 내려앉아 끝내 나머지 두 개의 |
| 245 | `night2_end_2` | {name} | room_my | 없음 |  |  | *잠금화면 위로 세 사람의 이름이 나란히 쌓여 있다.  |
| 246 | `night2_end_2_b` |  | 없음 | 없음 |  |  |  |
| 247 | `night2_end_3_b` | {name} | room_my | 없음 |  |  | *액정 불빛이 완전히 꺼진 뒤에도 미지근한 열기가 남은 |
| 248 | `night2_end_4_b` | {name} | room_my | 없음 |  |  | *잠이 오지 않아 부엌으로 나와 불을 켠다. 내일 싸  |
| 249 | `night2_end_4_c` | {name} | room_my | 없음 |  |  | *서툰 손길로 부쳐 낸 계란말이와 소시지, 김과 밥을  |
| | **Day 3** | | | | | | |
| 250 | `morning3_start` | {name} | school | 없음 |  |  | *전학 사흘째, 금요일 아침. 밤늦도록 깜빡이는 메시지 |
| 251 | `morning3_start_2` | {name} | school | 없음 |  |  | *어깨에 멘 가방끈을 꽉 쥐고 숨이 턱 끝까지 차오르도 |
| 252 | `morning3_gate_branch` |  | school | 없음 |  |  |  |
| 253 | `morning3_seo_gate_1` | {name} | school | seyoun_normal |  |  | 서연? 종 울리기 직전인데 안 들어가고 왜 아직 여기  |
| 254 | `morning3_seo_gate_cold_1` | 서연 | school | seyoun_normal |  |  | *서연이 내 옆을 스쳐 지나가며 교복 명찰 쪽으로만 차 |
| 255 | `morning3_seo_gate_cold_2` | 서연 | school | seyoun_normal |  |  | 전학생. 오늘도 아슬아슬하게 다니네. |
| 256 | `morning3_seo_gate_cold_3` | {name} | school | 없음 |  |  | *이름조차 부르지 않는 목소리 뒤로 단정한 구두 굽 소 |
| 257 | `morning3_classroom_1` | {name} | room_school | 없음 |  |  | *교실 뒷문을 열자마자 세 방향에서 공기가 미묘하게 굳 |
| 258 | `morning3_react_seo_1` | 다인 | room_school | dain_normal |  |  | 오호, 뭐야? 아침부터 학생회장님이랑 나란히 등교하신  |
| 259 | `morning3_react_seo_2` | 유나 | room_school | yuna_bored |  |  | *창밖을 내다보던 유나가 유리창에 비친 내 옆의 서연을 |
| 260 | `morning3_date_intro_b` | {name} | school_hallway | 없음 |  |  | *잠시 숨을 돌리려 나온 복도. 기다렸다는 듯 서연이  |
| 261 | `morning3_date_seo_1` | 서연 | school_hallway | seyoun_normal |  |  | *복도 창가에서 서연이 반 걸음 다가서며 목소리를 낮춘 |
| 262 | `morning3_date_seo_skip` |  | school_hallway | 없음 |  |  |  |
| 263 | `morning3_date_seo_low` | 서연 | school_hallway | seyoun_normal |  |  | *서연은 휴대폰 화면을 켰다가 바로 끄고는 눈이 마주치 |
| 264 | `morning3_date_dain_1` | 다인 | room_school | dain_normal |  |  | 자, 그럼 이제 내 차례지! 이번 주말에 나랑 오락실  |
| 265 | `morning3_date_dain_skip` |  | room_school | 없음 |  |  |  |
| 266 | `morning3_date_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 이쪽을 흘끗 보다가 가방 지퍼를 끝까지 당겨  |
| 267 | `morning3_date_yuna_1` | {name} | room_school | yuna_normal |  |  | *점심시간 직전, 유나가 소리 없이 다가와 네모나게 접 |
| 268 | `morning3_date_yuna_1_b` | 서연 | room_school | seyoun_normal |  |  | 유나야. 그렇게 쪽지로만 말을 걸면 옆에 있는 사람들은 |
| 269 | `morning3_date_yuna_2` | 유나 | room_school | yuna_normal |  |  | *펼쳐 본 쪽지에는 연보라색 잉크로 또렷한 글씨가 적혀 |
| 270 | `morning3_date_yuna_choice` | 유나 | room_school | yuna_normal |  |  | 다 들리게 말하는 게 공평하다면 지금 직접 말할게. 난 |
| 271 | `morning3_date_yuna_accept` | {name} | room_school | yuna_shy |  |  | *쪽지 뒷면에 답을 적어 건네자 유나는 문장을 끝까지  |
| 272 | `morning3_check_multiple` |  | room_school | 없음 |  |  |  |
| 273 | `morning3_multi_from_yuna` |  | room_school | yuna_shy |  |  |  |
| 274 | `morning3_end` | {name} | room_school | 없음 |  |  | *오전 마지막 수업을 끝내는 종이 울리고 폭풍 전야 같 |
| 275 | `morning3_end_b` |  | 없음 | 없음 |  |  |  |
| 276 | `lunch3_start` | 유나 | room_school | yuna_normal |  |  | 내 빵도 반 나눠 먹어. *사흘째 점심, 교실에서 책상 |
| 277 | `lunch3_start_2_b` | 다인 | room_school | yuna_normal |  |  | 이 계란말이, 내가 먼저 먹어도 되는 거지? 일단 맛부 |
| 278 | `lunch3_meal_1` | 다인 | room_school | yuna_normal |  |  | 오, 간 딱 맞는데! 회장님도 얼른 드세요. 오늘은 옆 |
| 279 | `lunch3_meal_2` | {name} | room_school | yuna_normal |  |  | 잠깐만, 그건 내 도시락 반찬인데. |
| 280 | `lunch3_meal_3` | 서연 | room_school | yuna_normal |  |  | *서연이 내 도시락에서 계란말이 한 조각을 집어 맛본다 |
| 281 | `lunch3_meal_4` | {name} | room_school | yuna_normal |  |  | 남의 점심 반찬에 냉정하게 점수 매기지 마. |
| 282 | `lunch3_meal_5` | 서연 | room_school | yuna_normal |  |  | *서연의 입꼬리가 얄밉게 올라간다.* 10점 만점에 6 |
| 283 | `lunch3_meal_6` | 유나 | room_school | yuna_normal |  |  | *말없이 지켜보던 유나가 젓가락을 뻗어 도시락 한가운데 |
| 284 | `lunch3_meal_7` | {name} | room_school | yuna_normal |  |  | 유나야, 그 칼집 낸 소시지는 내가 제일 아껴 둔 건데 |
| 285 | `lunch3_meal_7_b` | 유나 | room_school | yuna_normal |  |  | *유나가 소시지를 천천히 베어 물며 맞은편의 다인을 바 |
| 286 | `lunch3_meal_10` | {name} | room_school | yuna_bored |  |  | 어, 잠깐만! 그건 마지막 남은 조각이야. *내 외침과 |
| 287 | `lunch3_meal_10_b` | {name} | room_school | yuna_bored |  |  | *텅 빈 도시락통 한가운데에 노릇하게 구워진 마지막 계 |
| 288 | `lunch3_meal_10_e` |  | 없음 | 없음 |  |  |  |
| 289 | `lunch3_choice` | {name} | room_school | yuna_bored |  |  | *숨소리조차 잦아든 식탁 위, 마지막 반찬을 건넬 사람 |
| 290 | `lunch3_give_yuna_aff` |  | room_school | 없음 |  |  |  |
| 291 | `lunch3_give_yuna_1` | 유나 | room_school | yuna_normal |  |  | *유나의 눈동자가 작게 흔들리더니 이내 옅은 미소가 번 |
| 292 | `lunch3_yuna_skin_check` |  | room_school | yuna_normal |  |  |  |
| 293 | `lunch3_give_yuna_2_check` |  | room_school | 없음 |  |  |  |
| 294 | `lunch3_give_yuna_seo_affinity` |  | room_school | 없음 |  |  |  |
| 295 | `lunch3_give_yuna_seo_low` | 서연 | room_school | seyoun_normal |  |  | *서연은 말없이 자기 도시락통과 수저집을 정리한다.* |
| 296 | `lunch3_give_yuna_3_check` |  | room_school | 없음 |  |  |  |
| 297 | `lunch3_give_yuna_dain_low` | 다인 | room_school | dain_normal |  |  | *다인은 빈 물병을 가방 옆주머니에 꽂아 넣는다.* 난 |
| 298 | `lunch3_end` | {name} | room_school | 없음 |  |  | *점심시간 종료를 알리는 종소리에 각자 도시락을 덮는다 |
| 299 | `after3_start` | {name} | school_hallway | 없음 |  | 🌅 | *방과 후, 노을빛 복도 갈림길에 선다. 사흘째 지나는 |
| 300 | `after3_route_check` | {name} | school_hallway | 없음 |  | 🌅 | *주머니 속 휴대폰을 만지작거린다. 엉켜 버린 주말 약 |
| 301 | `after3_auto_yuna` | {name} | school_hallway | 없음 |  | 🌅 | *점심시간 내내 말없이 책갈피만 만지작거리던 유나의 손 |
| 302 | `after3_rivals_for_yuna_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 303 | `after3_rival_seo_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 304 | `after3_rival_seo_affinity` |  | school_hallway | 없음 |  | 🌅 |  |
| 305 | `after3_rival_seo_cool` | 서연 | school_hallway | seyoun_normal |  | 🌅 | 방과 후 일정이 바뀐 모양이네. *서연은 클립보드 페이 |
| 306 | `after3_rival_seo_done` |  | school_hallway | 없음 |  | 🌅 |  |
| 307 | `after3_rival_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 308 | `after3_rival_dain_affinity` |  | school_hallway | 없음 |  | 🌅 |  |
| 309 | `after3_rival_dain_cool` | 다인 | school_hallway | dain_normal |  | 🌅 | 오늘 체육관 코스는 패스구나. *다인은 배구공 가방 끈 |
| 310 | `after3_rival_dain_done` |  | school_hallway | 없음 |  | 🌅 |  |
| 311 | `after3_yuna_affinity_check` |  | yuna_hideout_day.webp | 없음 |  | 🌅 |  |
| 312 | `after3_yuna_partial_1` | {name} | yuna_hideout_day.webp | yuna_normal |  | 🌅 | *별관 문은 열려 있지만 유나는 노트를 펼치지 않는다. |
| 313 | `after3_yuna_partial_2` | 유나 | yuna_hideout_day.webp | yuna_shy |  | 🌅 | 오늘은 여기까지만 할래. 다음에 이야기하고 싶어지면 그 |
| 314 | `after3_yuna_end` |  | 없음 | 없음 |  | 🌅 |  |
| 315 | `after3_final` | {name} | school_hallway | 없음 |  | 🌅 | *길었던 방과 후 시간이 끝났다. 복도 천장의 형광등이 |
| 316 | `after3_group_route_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 317 | `haeun_check` | {name} | school_hallway | 없음 |  | 🌅 |  |
| 318 | `minsu_d3_check` | {name} | 없음 | 없음 |  | 🌅 |  |
| 319 | `night3_start` | {name} | room_my | 없음 |  |  | *금요일 밤, 지친 몸으로 방에 돌아와 교복 차림으로  |
| 320 | `night3_start_2` | {name} | room_my | 없음 |  |  | *불도 켜지 않은 방 안, 책상 위에 엎어 두었던 휴대 |
| 321 | `night3_faithful_check` | {name} | room_my | 없음 |  |  | *어두운 천장 아래로 휴대폰 불빛이 번진다. 도착해 있 |
| 322 | `night3_dream_1` | {name} | room_my | 없음 |  |  | *스탠드 조명을 끄려다 휴대폰을 한 번 더 집어 든다. |
| 323 | `night3_dream_2_b` | {name} | room_my | 없음 |  |  | *머리맡에 휴대폰을 내려놓는다. 내일 아침 마주 보며  |
| 324 | `night3_faithful_reflect_1` | {name} | room_my | 없음 |  |  | *잠들기 전, 휴대폰 갤러리 깊숙한 곳에서 예전 학교의 |
| 325 | `night3_faithful_reflect_2_b` | {name} | room_my | 없음 |  |  | *화면에 '이 사진을 삭제하시겠습니까?'라는 확인 창이 |
| 326 | `night3_faithful_reflect_2_c` | {name} | room_my | 없음 |  |  | *푸르스름한 액정 빛을 가만히 내려다본다. 소정이의 책 |
| 327 | `night3_faithful_reflect_2_d` | {name} | room_my | 없음 |  |  | *확인 창에서 조용히 취소를 누른다. 사진 한 장을 지 |
| 328 | `night3_faithful_reflect_3` | {name} | room_my | 없음 |  |  | *삭제 버튼 대신 이동 메뉴를 눌러 사진을 새 폴더로  |
| 329 | `night3_faithful_reflect_3_b` | {name} | room_my | 없음 |  |  | *사진 아래에 짧은 메모를 남긴다. 소정이에게 끝내 건 |
| 330 | `night3_faithful_reflect_4` | {name} | room_my | 없음 |  |  | *새로 만든 폴더 안에 사진 한 장이 조용히 자리 잡는 |
| 331 | `night3_faithful_reflect_4_b` |  | 없음 | 없음 |  |  |  |
| 332 | `night3_faithful_reflect_4_c` |  | 없음 | 없음 |  |  |  |
| 333 | `night3_dream_3` | {name} | room_my | 없음 |  |  | *갤러리를 닫고 내일 아침 알람을 맞춘다. 휴대폰을 내 |
| 334 | `night3_end` | {name} | room_my | 없음 |  |  | *금요일 시간표가 적힌 교과서를 덮고 스탠드 불을 완전 |
| | **Day 4** | | | | | | |
| 335 | `morning4_start` | {name} | room_my_day.webp | 없음 |  |  | *넷째 날, 토요일 아침. 커튼 틈으로 스며든 주말 햇 |
| 336 | `morning4_date_plan_check` |  | 없음 | 없음 |  |  |  |
| 337 | `morning4_nightmare_check` |  | room_my_day.webp | 없음 |  |  |  |
| 338 | `minsu_cheer_1` | {name} | room_my_day.webp | 없음 |  |  | *잠금을 풀자마자 메신저 맨 윗줄에서 민수의 이름이 반 |
| 339 | `minsu_cheer_1_b` | 민수 | room_my_day.webp | minsu_normal | 0.35 |  | 야 너 오늘 주말 데이트라며? |
| 340 | `minsu_cheer_1_c` | {name} | room_my_day.webp | minsu_normal | 0.35 |  | 그걸 네가 어떻게 알았어 |
| 341 | `minsu_cheer_1_d` | 민수 | room_my_day.webp | minsu_normal | 0.35 |  | 교실에서 금요일 내내 주말 약속 잡느라 정신없더니 모를 |
| 342 | `minsu_cheer_2` | 민수 | room_my_day.webp | minsu_normal | 0.35 |  | 옷 좀 제대로 입어라. 분위기 망치지 말고 잘하고 와ㅋ |
| 343 | `minsu_cheer_3` | {name} | room_my_day.webp | minsu_normal | 0.35 |  | 알아서 할게. |
| 344 | `minsu_cheer_4_branch` |  | room_my_day.webp | 없음 |  |  |  |
| 345 | `minsu_cheer_4_ins_single` | {name} | room_my_day.webp | minsu_normal | 0.35 |  | *캘린더 앱을 열어 본다. 토요일 칸에 적힌 단 하나의 |
| 346 | `morning4_start_2` | {name} | room_my_day.webp | 없음 |  |  | *창문을 열어 선선한 아침 공기를 들이마신다. 주중에  |
| 347 | `morning4_yuna_msg_1` | 유나 | room_my_day.webp | yuna_normal | 0.35 |  | 10시. 역 앞 카페. 늦으면 그냥 간다 |
| 348 | `morning4_yuna_msg_1_b` | {name} | room_my_day.webp | yuna_normal | 0.35 |  | *짧은 두 줄 끝에 마침표조차 없지만 괜히 먼저 와서  |
| 349 | `morning4_yuna_msg_single` | {name} | room_my_day.webp | yuna_normal | 0.35 |  | *담백한 문장 너머로 유나의 나직한 목소리가 들리는 듯 |
| 350 | `morning4_hidden_check` | {name} | street | 없음 |  |  | *이른 아침 공기를 가르며 학교 앞 사거리 횡단보도에서 |
| 351 | `hidden_nurse_d4_check` | 시스템 | 없음 | 없음 |  |  |  |
| 352 | `day4_haeun_gate` |  | 없음 | 없음 |  |  |  |
| 353 | `day4_haeun_trust_check` |  | 없음 | 없음 |  |  |  |
| 354 | `day4_haeun_personal_gate` |  | 없음 | 없음 |  |  |  |
| 355 | `morning4_end` | {name} | room_my_day.webp | 없음 |  |  | *집으로 돌아와 거울 앞에서 셔츠 깃과 머리카락을 정돈 |
| 356 | `day4_date_branch` |  | 없음 | 없음 |  |  |  |
| 357 | `date_yuna_1` | {name} | cafe | yuna_date_normal.webp |  |  | *역 앞 카페 테라스 그늘에 서 있는 유나가 한눈에 들 |
| 358 | `date_yuna_tier_check` |  | cafe | 없음 |  |  |  |
| 359 | `date_yuna_tentative_1` | 유나 | cafe | yuna_date_normal.webp |  |  | 오늘은 다른 사적인 얘기 말고 그냥 책 얘기만 조금 하 |
| 360 | `date_yuna_tentative_2` | {name} | cafe | yuna_date_normal.webp |  |  | *조용히 대화는 이어지지만 유나는 가방 안에 넣어 온  |
| 361 | `date_yuna_tentative_3` | 유나 | street | yuna_date_normal.webp |  |  | 마음이 정리되면 다음번엔 내가 먼저 연락할게. 오늘은  |
| 362 | `pre_confess_minsu` | 민수 | street | minsu_smirk | 0.35 |  | 야, 지금 한창 데이트 중이지? 친구로서 딱 한마디만  |
| 363 | `pre_confess_minsu_2` | 민수 | street | minsu_smirk | 0.35 |  | 어설프게 말 돌리지 말고 오늘 네 마음 제대로 전해라 |
| 364 | `pre_confess_callback` | {name} | street | 없음 |  |  | *바지 주머니 속 휴대폰을 쥔 손바닥에 땀이 밴다. 꺼 |
| 365 | `confess_seo_1` | {name} | school | 없음 |  | 🌅 | *저녁노을이 길게 그림자를 드리울 무렵, 데이트를 마치 |
| 366 | `confess_yuna_1` | {name} | cafe | yuna_date_normal.webp |  | 🌅 | *거리의 카페 간판들에 하나둘 주황빛 불이 켜질 무렵, |
| 367 | `confess_yuna_2` | 유나 | cafe | yuna_date_normal.webp |  | 🌅 | 헤어지기 전에 마지막으로 너랑 꼭 가고 싶은 데가 있어 |
| 368 | `confess_yuna_3` | {name} | yuna_hideout_day.webp | yuna_date_normal.webp |  | 🌅 | *유나를 따라 들어선 별관 구석의 비밀 독서 공간. 유 |
| 369 | `confess_yuna_4` | 유나 | yuna_hideout_day.webp | yuna_date_normal.webp |  | 🌅 | 이리 와서 내 옆에 앉아. 오늘은 굳이 책을 펼치지 않 |
| 370 | `confess_yuna_5` | {name} | yuna_hideout_day.webp | yuna_date_normal.webp |  | 🌅 | *유나의 바로 옆자리에 앉자 낡은 소파 쿠션이 푹 꺼지 |
| 371 | `confess_yuna_choice` | {name} | yuna_hideout_day.webp | yuna_date_normal.webp |  | 🌅 | *유나가 접힌 책갈피 모서리를 엄지로 천천히 펴면서 내 |
| 372 | `confess_yuna_no_2` | 유나 | yuna_hideout_day.webp | yuna_date_shy.webp |  | 🌅 | *유나가 말없이 책갈피를 덮인 책갈피 틈으로 깊숙이 밀 |
| 373 | `confess_yuna_no_3` | {name} | yuna_hideout_day.webp | yuna_date_normal.webp |  | 🌅 | 유나야, 무릎 위에 둔 그 책은 아직 다 못 읽은 거야 |
| 374 | `confess_yuna_no_4` | 유나 | yuna_hideout_day.webp | yuna_date_sad.webp |  | 🌅 | 응. 가장 중요한 결말은 아직 못 봤어. |
| 375 | `confess_yuna_no_4_b` | {name} | yuna_hideout_day.webp | yuna_date_sad.webp |  | 🌅 | *자리에서 일어나 문 쪽으로 세 걸음쯤 멀어졌을 때,  |
| 376 | `day4_night_start` | {name} | school | 없음 |  |  | *어스름이 짙게 깔린 학교를 나서서 집으로 돌아갈 시간 |
| 377 | `day4_night_branch` | 시스템 | 없음 | 없음 |  |  |  |
| 378 | `day4_student_visit_branch` |  | 없음 | 없음 |  |  |  |
| 379 | `day4_student_night_branch` | {name} | room_my | 없음 |  |  | *집으로 돌아와 침대 맡에 가방을 내려놓는다. 충전기  |
| 380 | `day4_waited_night_branch` |  | 없음 | 없음 |  |  |  |
| 381 | `day4_waited_yuna_invite` | 유나 | room_my | yuna_normal | 0.35 |  | 열 시에 학교 후문 가로등 아래로 와 줘. 밤바람 쐬면 |
| 382 | `day4_waited_yuna_promise` | {name} | room_my | 없음 |  |  | 응, 열 시에 학교 후문에서 보자. *유나에게 답장을  |
| 383 | `wall_yuna_rival_rank` | 시스템 | yuna_hideout | 없음 |  |  |  |
| 384 | `wall_yuna_glimpse_1` | {name} | school_back | 없음 |  |  | *밤 10시, 유나와 만나기로 한 학교 후문으로 걸어가 |
| 385 | `wall_yuna_glimpse_2` | {name} | school_back | seyoun_pout |  |  | *서연은 휴대폰을 주머니에 넣었다 꺼내기를 반복한다.  |
| 386 | `wall_yuna_glimpse_3_b` | 서연 | school_back | seyoun_normal |  |  | 지금 이대로 집에 들어가면 또 거울 앞에서 웃는 얼굴부 |
| 387 | `wall_yuna_2` | {name} | school_back | yuna_normal |  |  | *창백한 후문 가로등 불빛 아래에 유나가 서 있다. 두 |
| 388 | `wall_yuna_3` | 유나 | school_back | yuna_normal |  |  | 숨소리가 들려서 네가 오는 줄 알았어. 이쪽으로 따라와 |
| 389 | `wall_yuna_4` | 유나 | yuna_hideout | yuna_normal |  |  | 별관 안쪽 자료 보관실이야. *유나가 좁고 어두운 서가 |
| 390 | `wall_yuna_6` | 유나 | yuna_hideout | yuna_normal |  |  | 이 편지, 정확히 일 년 전에 이 자리에서 받은 거야. |
| 391 | `wall_yuna_7` | {name} | yuna_hideout | yuna_sad |  |  | *빛바랜 봉투 안에서 접힌 편지지가 나온다. 단정한 필 |
| 392 | `wall_yuna_8` | {name} | yuna_hideout | yuna_sad |  |  | 이준호라면 누구야? |
| 393 | `wall_yuna_9` | 유나 | yuna_hideout | yuna_sad |  |  | 일 년 전까지 이 자료실에 나랑 단둘이 오던 문예부 선 |
| 394 | `wall_yuna_9_b` | 유나 | yuna_hideout | yuna_sad |  |  | *유나가 떨리는 손끝으로 낡은 편지지를 책상 모서리에  |
| 395 | `wall_yuna_10` | 유나 | yuna_hideout | yuna_sad |  |  | 중학교 내내 나는 교실에서 투명인간이었어. 반 애들 누 |
| 396 | `wall_yuna_11` | 유나 | yuna_hideout | yuna_sad |  |  | 고등학생이 돼서도 똑같았는데 그 선배가 처음이었어. 우 |
| 397 | `wall_yuna_12` | 유나 | yuna_hideout | yuna_sad |  |  | *평소라면 몇 번이고 말을 멈췄을 유나가 숨 한 번 고 |
| 398 | `wall_yuna_13` | 유나 | yuna_hideout | yuna_normal |  |  | 그런데 어느 날 아침에 나와 보니까 소리도 없이 전학을 |
| 399 | `wall_yuna_14` | 유나 | yuna_hideout | yuna_sad |  |  | 내가 이 자리에 숨 쉬고 있다는 걸 알아주던 단 한 사 |
| 400 | `wall_yuna_14_b` | 유나 | yuna_hideout | yuna_sad |  |  | 그 뒤로 일 년 동안 매일같이 혼자 이 어두운 자료실을 |
| 401 | `wall_yuna_14_c` | 유나 | yuna_hideout | yuna_normal |  |  | 아무리 책장을 다 뒤져 봐도 끝내 아무것도 없었어. |
| 402 | `wall_yuna_14_d` | 유나 | yuna_hideout | yuna_normal |  |  | *유나가 젖어 드는 붉은 눈동자를 들어 어둠 속에서 나 |
| 403 | `wall_yuna_14_e` | 유나 | yuna_hideout | yuna_normal |  |  | 그러다 전학 온 첫날 네가 이 조용한 도서관 구석까지  |
| 404 | `wall_yuna_14_f` | 유나 | yuna_hideout | yuna_sad |  |  | 네가 풍기는 다정한 공기가 그 선배랑 너무 닮아 있었어 |
| 405 | `wall_yuna_14_g` | 유나 | yuna_hideout | yuna_sad |  |  | 이번에도 마음 주며 친해졌다가 어느 날 갑자기 네가 사 |
| 406 | `wall_yuna_14_h` | {name} | yuna_hideout | yuna_normal |  |  | 도망치지 않고 네 옆에서 다 듣고 있어, 유나야. *낡 |
| 407 | `wall_yuna_15` | 유나 | yuna_hideout | yuna_shy |  |  | *유나의 시선이 일 년 전 편지 날짜에 깊게 박힌다.* |
| 408 | `wall_yuna_16` | 유나 | yuna_hideout | yuna_sad |  |  | 그런데 너는 내가 밀어내도 매일같이 다시 찾아왔어. 재 |
| 409 | `wall_yuna_16_b` | 유나 | yuna_hideout | yuna_sad |  |  | 내일도 네가 올까 봐 기다리는 시간조차 무서웠는데 솔직 |
| 410 | `wall_yuna_choice` | 유나 | yuna_hideout | yuna_sad |  |  | 이런 내 마음 다 듣고 나니까 네 생각은 어때. *유나 |
| 411 | `wall_yuna_sub_1` | 유나 | yuna_hideout | yuna_sad |  |  | 맞아. 애초에 지나간 사람과 지금 내 옆에 있는 너를  |
| 412 | `wall_yuna_sub_2` | 유나 | yuna_hideout | yuna_smile |  |  | 고마워. 이 편지는 이제 다시 봉투에 넣어 둘게. *유 |
| 413 | `wall_yuna_freetalk` | 유나 | yuna_hideout | yuna_normal |  | 🌙 | *독서실 책상 앞으로 돌아온 유나가 낡은 편지를 접어  |
| 414 | `day4_student_return_home` | {name} | room_my | 없음 |  |  | *밤의 만남을 마치고 여운이 가시지 않은 걸음으로 집으 |
| 415 | `day4_hidden_msg_branch` | 시스템 | room_my | 없음 |  |  |  |
| 416 | `day4_night_sleep` | {name} | room_my | 없음 |  |  | *일요일 아침 알람을 맞춰 두고 방 안의 스탠드 불을  |
| 417 | `day4_final` | {name} | room_my | 없음 |  |  | *방 안의 시계 바늘이 자정을 넘어 다섯째 날로 향한다 |
| | **Day 5** | | | | | | |
| 418 | `morning5_start` | {name} | room_school | 없음 |  |  | *다섯째 날, 일요일 아침. 교문 너머로 축제 현수막이 |
| 419 | `morning5_start_branch` |  | room_school | 없음 |  |  |  |
| 420 | `morning5_start_b` |  | 없음 | 없음 |  |  |  |
| 421 | `morning5_start_2_b` |  | 없음 | 없음 |  |  |  |
| 422 | `morning5_mood_check` | 시스템 | room_school | 없음 |  |  |  |
| 423 | `morning5_mood_low` | {name} | room_school | 없음 |  |  | *전학 온 첫 주가 저물어 간다. 휴대폰 잠금화면에 나 |
| 424 | `morning5_gate` |  | 없음 | 없음 |  |  |  |
| 425 | `morning5_seo_note_1` | 서연 | room_school | seyoun_normal | 0.35 |  | *내 책상 한가운데, 모서리를 반듯하게 맞춘 쪽지 한  |
| 426 | `morning5_seo_note_1_b` | {name} | school_hallway | 없음 |  |  | *복도 창가를 따라 꾸며진 문예부 전시 코너를 지나다가 |
| 427 | `morning5_seo_note_1_c` | {name} | school_hallway | 없음 |  |  | *문예부 게시판 한켠에 단편소설 원고 몇 장이 압정으로 |
| 428 | `morning5_yuna_story_1` | {name} | school_hallway | yuna_normal | 0.35 |  | *원고 속 화자는 오후의 도서관 책상에 엎드려 잠든 누 |
| 429 | `morning5_yuna_story_2` | {name} | school_hallway | 없음 |  |  | *원고의 맨 끝 문장에 시선이 닿는다. '그 사람이 눈 |
| 430 | `morning5_yuna_story_4` | {name} | school_hallway | yuna_normal | 0.35 |  | *원고지 맨 아래 여백 구석에는 연필로 아주 작게 덧붙 |
| 431 | `morning5_return_class` | {name} | room_school | dain_normal |  |  | *복도 끝에서 교실로 돌아오자, 문가에 등을 기댄 채  |
| 432 | `morning5_dain_1` | 다인 | room_school | dain_normal |  |  | *내 어깨를 가볍게 툭 치며 장난스럽게 웃는다.* 야, |
| 433 | `morning5_dain_1_b` | {name} | room_school | dain_normal |  |  | 내 허락도 안 받고 마음대로 적어 놓으면 어떡해? |
| 434 | `morning5_dain_2` | 다인 | room_school | dain_laugh |  |  | *포니테일이 흔들리도록 고개를 휙 젖히며 볼에 바람을  |
| 435 | `hidden_homeroom_d5_check` | {name} | school_hallway | teacher_normal |  |  | *축제 준비로 복도가 소란스러운 틈을 지나, 문이 반쯤 |
| 436 | `hidden_nurse_d5_check` | {name} | school_hallway | 없음 |  |  | *오전 행사 준비가 한차례 숨을 고르는 쉬는 시간. 소 |
| 437 | `morning5_end_branch` |  | room_school | 없음 |  |  |  |
| 438 | `morning5_sojeong_1` | {name} | room_school | 없음 |  |  | *조용한 창가에 서서 휴대폰 메모 앱을 연다. 이전 학 |
| 439 | `morning5_sojeong_2` | {name} | room_school | 없음 |  |  | *더 이상 나를 변호하기 위한 마흔 번째 초안은 만들지 |
| 440 | `morning5_sojeong_3` | {name} | room_school | 없음 |  |  | 그때 네 책상 위에 적힌 낙서들을 두 눈으로 보고도 선 |
| 441 | `morning5_sojeong_4` | {name} | room_school | 없음 |  |  | *말풍선 옆에 작은 전송 완료 표시가 뜬다. 숫자 1이 |
| 442 | `morning5_sojeong_5` | {name} | room_school | 없음 |  |  | 전학 오기 전 학교에서 제가 모른 척 지나쳤던 일에 대 |
| 443 | `morning5_route_branch` |  | room_school | 없음 |  |  |  |
| 444 | `morning5_end` | {name} | room_school | 없음 |  |  | *책상 위에 놓인 쪽지들을 소중히 추려 모으고 휴대폰  |
| 445 | `day5_haeun_gate` |  | 없음 | 없음 |  |  |  |
| 446 | `day5_haeun_trust_check` |  | 없음 | 없음 |  |  |  |
| 447 | `day5_haeun_resume` |  | 없음 | 없음 |  |  |  |
| 448 | `tour_yuna_1_check` | {name} | yuna_hideout_day.webp | 없음 |  |  | *점심시간의 북적거림을 뒤로하고 도서관 별관으로 발걸음 |
| 449 | `tour_yuna_skip` |  | yuna_hideout_day.webp | 없음 |  |  |  |
| 450 | `tour_yuna_low` | 유나 | annex_exhibit_hallway | yuna_normal | 0.35 |  | *굳게 잠긴 별관 문 앞에서 걸음을 멈춘 지 얼마 지나 |
| 451 | `after5_start` |  | 없음 | 없음 |  | 🌅 |  |
| 452 | `day5_haeun_guilt_gate` |  | 없음 | 없음 |  | 🌅 |  |
| 453 | `day5_haeun_route_gate` |  | 없음 | 없음 |  | 🌅 |  |
| 454 | `after5_original_start` |  | school_hallway | 없음 |  | 🌅 |  |
| 455 | `after5_normal_start` | {name} | school_hallway | 없음 |  | 🌅 | *소란스럽던 축제가 막을 내릴 무렵, 노을이 스며드는  |
| 456 | `after5_waited_start_branch` | 시스템 | school_hallway | 없음 |  | 🌅 |  |
| 457 | `after5_farewell_seo_1` | {name} | school_hallway | seyoun_normal |  | 🌅 | *축제 마지막 순서가 끝나 가는 복도 창가에서, 홀로  |
| 458 | `after5_farewell_seo_skip` |  | school_hallway | 없음 |  | 🌅 |  |
| 459 | `after5_farewell_seo_low` | 서연 | school_hallway | seyoun_normal |  | 🌅 | *오후의 그림자가 길어진 복도에서 서연과 마주친다. 서 |
| 460 | `after5_farewell_yuna_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 461 | `after5_farewell_dain_check` |  | school_hallway | 없음 |  | 🌅 |  |
| 462 | `after5_farewell_dain_1` | {name} | school_back | dain_normal |  | 🌅 | *체육관 입구 쪽에서 다인이 걸어 나온다. 언제나 성큼 |
| 463 | `after5_farewell_dain_skip` |  | school_hallway | 없음 |  | 🌅 |  |
| 464 | `after5_farewell_dain_low` | 다인 | school_back | dain_normal |  | 🌅 | *체육관 앞길에서 걸어오던 다인이 두 걸음 떨어진 자리 |
| 465 | `after5_sunset_1` | {name} | school_back | 없음 |  | 🌅 | *붉은 석양이 길게 내려앉은 교정 위로, 축제의 끝을  |
| 466 | `after5_ending_check` |  | 없음 | 없음 |  | 🌅 |  |
| 467 | `after5_last_chance_1` | {name} | school_back | 없음 |  | 🌅 | *지지직거리는 끝음과 함께 교정의 방송 스피커가 완전히 |
| 468 | `after5_last_chance_2` | {name} | school_back | 없음 |  | 🌅 | *주머니 속 휴대폰을 만지작거리다 꺼내 든다. 불 꺼진 |
| 469 | `after5_last_chance_route_check` |  | school_back | 없음 |  | 🌅 |  |
| 470 | `after5_last_chance_yuna_aff_check` |  | school_back | 없음 |  | 🌅 |  |
| 471 | `after5_last_chance_yuna_low_1` | {name} | school_back | 없음 |  | 🌅 | 유나야. |
| 472 | `after5_last_chance_yuna_low_2` | 유나 | school_back | yuna_normal |  | 🌅 | *유나가 발걸음을 멈추고 돌아본다. 책을 감싸 안은 가 |
| 473 | `after5_last_chance_choice` | {name} | school_back | 없음 |  | 🌅 | *노을빛이 깊게 내려앉은 눈동자를 똑바로 마주 보며 목 |
| 474 | `after5_confess_no` | {name} | school_back | 없음 |  | 🌅 | *차마 입술을 떼지 못한 채, 휴대폰 화면만 끄고 무겁 |
| 475 | `after5_confess_no_2` | {name} | school_back | 없음 |  | 🌅 | *선선해진 저녁 바람에 누군가 떨어뜨린 축제 안내지 한 |
| 476 | `after5_confess_no_2b` | {name} | room_my | 없음 |  | 🌅 | *아무도 부르지 못한 이름을 가슴에 묻고 끝내 혼자 돌 |
| 477 | `ending_start` | 시스템 | park | 없음 |  |  |  |
| 478 | `ending_last_chance_resolve` | 시스템 | park | 없음 |  |  |  |
| 479 | `day5_ending_friend` | {name} | park | 없음 |  |  | *섣부른 고백으로 거리를 무너뜨리는 대신, 진심 어린  |
| 480 | `friend_1` | {name} | park | 없음 |  |  | *가로등 불빛이 켜진 공원 벤치에 앉아 대화방 입력창을 |
| 481 | `friend_2` | {name} | park | 없음 |  |  | *소정에게 뒤늦은 사과를 보내기 전까지 수없이 미루고  |
| 482 | `friend_3` | {name} | park | 없음 |  |  | 지금 당장 우리 관계를 다른 이름으로 바꾸자고 말할 자 |
| 483 | `friend_route_check` | 시스템 | park | 없음 |  |  |  |
| 484 | `friend_4_yuna` | 유나 | park | 없음 |  |  | *유나에게서 온 답장.* 보내 준 글, 끝까지 잘 읽었 |
| 485 | `friend_5` | {name} | park | 없음 |  |  | *'응, 내일 보자.' 짧게 답장을 보낸 뒤 한결 가벼 |
| 486 | `friend_7` | {name} | park | 없음 |  |  | *내가 보낸 마지막 인사 옆에 곧바로 읽음 표시가 붙는 |
| 487 | `friend_8` | {name} | ending_friend | 없음 |  |  | *계절이 흘러 맞이한 졸업식 날. 휴대폰 갤러리를 열자 |
| 488 | `friend_9` | {name} | ending_friend | 없음 |  |  | *저장된 사진의 파일명은 '졸업식_우리들'. 시끌벅적하 |
| 489 | `friend_10` | {name} | ending_friend | 없음 |  |  | 우리 졸업식 끝나고 다 같이 뭐 먹으러 갈래? *단체  |
| 490 | `friend_12` | 시스템 | ending_friend | 없음 |  |  | ─── FRIEND END ─── |
| 491 | `day5_credits` |  | school | 없음 |  |  |  |
| 492 | `day5_ending_restart` | 시스템 | school | 없음 |  |  |  |

</details>

## 씬 커버리지

- 전체: 3393개
- 방문: 1825개 (53.8%)
- 미방문: 1569개

**미방문 씬:**
- Day 1: lunch_dain_1_aff_neg, lunch_dain_neg_leave, lunch_yuna_1_aff_neg, lunch_yuna_neg_leave, lunch_seo_1_aff_neg, lunch_seo_neg_leave, after1_jealousy_seo_lie, after1_jealousy_seo_lie_2, after_dain_skip, after_yuna_skip, after_hidden_homeroom_cool, after_hidden_homeroom_neg, after_nurse_d1_neg, after_nurse_enter_choice_b, after_nurse_enter_11_h, after_nurse_enter_11_i, night_yuna_late_1, night_yuna_late_2, night_yuna_late_3, night_yuna_late_4, forced_violation_day1_after_seoyeon, forced_violation_day1_seoyeon_apologize, forced_violation_day1_seoyeon_excuse, forced_violation_day1_after_yuna, forced_violation_day1_yuna_apologize, forced_violation_day1_yuna_excuse, forced_violation_day1_after_dain, forced_violation_day1_dain_apologize, forced_violation_day1_dain_excuse, forced_violation_day1_after_teacher, forced_violation_day1_teacher_apologize, forced_violation_day1_teacher_excuse, forced_violation_day1_after_nurse, forced_violation_day1_nurse_apologize, forced_violation_day1_nurse_excuse, forced_violation_day1_resume
- Day 2: morning2_greet_seo_1_gate, morning2_greet_dain_1_plain, morning2_greet_yuna_1, morning2_greet_yuna_1_thanks, morning2_greet_yuna_2, morning2_greet_yuna_others, morning2_greet_yuna_others_seo, morning2_greet_yuna_others_dain, morning2_greet_yuna_others_2, morning2_break_transition_b, hidden_homeroom_d2_neg, morning2_greet_none_neg_1, morning2_greet_none_neg_2, lunch2_seo_2b, lunch2_seo_2b_dain, lunch2_seo_3b_dain, lunch2_seo_4b_dain, lunch2_seo_5b_dain, lunch2_seo_6b_dain, lunch2_seo_2b_yuna, lunch2_seo_3b_yuna, lunch2_seo_4b_yuna, lunch2_seo_5b_yuna, lunch2_seo_6b_yuna, lunch2_seo_13, lunch2_seo_c2_1, lunch2_seo_trap_1, lunch2_seo_c2_2, lunch2_seo_c2_3, lunch2_seo_end_c2, lunch2_dain_1b, lunch2_dain_2b_seo, lunch2_dain_3b_seo, lunch2_dain_4b_seo, lunch2_dain_2b_yuna, lunch2_dain_3b_yuna, lunch2_dain_4b_yuna, lunch2_dain_3b, lunch2_dain_4b, lunch2_dain_5b, lunch2_yuna_3, lunch2_yuna_4, lunch2_yuna_5, lunch2_yuna_6, lunch2_yuna_7, lunch2_yuna_8, lunch2_yuna_3_seo, lunch2_yuna_4_seo, lunch2_yuna_5_seo, lunch2_yuna_6_seo, lunch2_yuna_7_seo, lunch2_yuna_8_seo, lunch2_yuna_3_yuna, lunch2_yuna_4_yuna, lunch2_yuna_5_yuna, lunch2_yuna_6_yuna, lunch2_yuna_7_yuna, lunch2_yuna_8_yuna, lunch2_yuna_9, lunch2_yuna_10, lunch2_yuna_11, lunch2_yuna_13, lunch2_yuna_14, lunch2_yuna_15, lunch2_yuna_16, lunch2_yuna_17, lunch2_yuna_17_b, lunch2_yuna_choice, lunch2_yuna_trap_compare, lunch2_yuna_trap_exclusive, lunch2_yuna_c1_1, lunch2_yuna_c1_2, lunch2_yuna_c1_3, lunch2_yuna_c1_4, lunch2_yuna_c1_5, lunch2_yuna_c1_6, lunch2_yuna_c1_7, lunch2_yuna_c1_9, lunch2_yuna_c1_9_b, lunch2_yuna_c1_10, lunch2_yuna_c1_11, lunch2_yuna_c1_12, lunch2_yuna_c2_1, lunch2_yuna_c2_3, lunch2_yuna_c2_4, lunch2_yuna_c2_6, lunch2_yuna_c2_7, lunch2_yuna_c2_8, lunch2_yuna_c2_9, lunch2_seo_2_neg, lunch2_seo_2b_warm, lunch2_dain_2_neg, lunch2_yuna_3_warm, lunch2_yuna_3_neg, lunch2_seo_neg_leave, lunch2_dain_neg_leave, lunch2_yuna_neg_leave, hidden_nurse_d2_skip, hidden_nurse_d2_low, hidden_nurse_d2_neg, after2_dain_skinship_1, after2_dain_skinship_2, after2_dain_skinship_3, after2_dain_rival_seo_high, after2_dain_rival_yuna_high, after2_seo_neck_worry, after2_seo_neck_react, after2_seo_neck_react_b, after2_seo_neck_react_c, after2_seo_neck_touch, after2_seo_neck_high, after2_seo_neck_high_b, after2_seo_neck_high_c, after2_seo_neck_high_2, after2_seo_neck_high_2_b, after2_seo_neck_low, after2_seo_neck_low_b, after2_seo_neck_low_c, after2_seo_neck_low_2, after2_seo_choice2_trap, after2_seo_rival_dain_high, after2_seo_rival_yuna_high, after2_yuna_2_b, after2_yuna_3, after2_yuna_4, after2_yuna_5, after2_yuna_6, after2_yuna_7, after2_yuna_8, after2_yuna_8b, after2_yuna_8c, after2_yuna_8d, after2_yuna_choice_pre1, after2_yuna_choice_pre2, after2_yuna_choice_pre3, after2_yuna_choice_pre3_b, after2_yuna_choice, after2_yuna_everyday, after2_yuna_everyday_b, after2_yuna_everyday_react, after2_yuna_everyday_react_b, after2_yuna_quiet, after2_yuna_quiet_react, after2_yuna_trap, after2_yuna_trap_react, after2_yuna_end, after2_yuna_skinship_1, after2_yuna_skinship_2, after2_yuna_skinship_3, after2_yuna_rival_dain_high, after2_yuna_rival_seo_high, after2_seo_neg_1, after2_dain_neg_1, after2_yuna_neg_1, after2_dain_rival_seo_neg, after2_dain_rival_yuna_neg, after2_seo_rival_dain_neg, after2_seo_rival_yuna_neg, after2_yuna_rival_dain_neg, after2_yuna_rival_seo_neg, after2_seo_neck_neg, after2_seo_neck_neg_b, after2_seo_neg_leave, after2_yuna_neg_leave, night2_msg_yuna_specific, night2_msg_yuna_specific_2, night2_msg_seo_general_alt, night2_msg_seo_general_alt_gate, night2_reply_dain_react_high, night2_reply_yuna_4_visit, night2_reply_yuna_4_established, night2_reply_yuna_react_high, forced_violation_day2_after_seoyeon, forced_violation_day2_seoyeon_apologize, forced_violation_day2_seoyeon_excuse, forced_violation_day2_after_yuna, forced_violation_day2_yuna_apologize, forced_violation_day2_yuna_excuse, forced_violation_day2_after_dain, forced_violation_day2_dain_apologize, forced_violation_day2_dain_excuse, forced_violation_day2_after_teacher, forced_violation_day2_teacher_apologize, forced_violation_day2_teacher_excuse, forced_violation_day2_after_nurse, forced_violation_day2_nurse_apologize, forced_violation_day2_nurse_excuse, forced_violation_day2_resume, night2_reply_dain_react_neg, night2_reply_seo_react_neg, night2_reply_yuna_react_neg
- Day 3: morning3_seo_gate_warm_1, morning3_seo_gate_warm_2, morning3_seo_gate_warm_3, morning3_seo_gate_warm_4, morning3_yuna_gate_1, morning3_yuna_gate_warm_1, morning3_yuna_gate_warm_2, morning3_yuna_gate_warm_3, morning3_yuna_gate_warm_4, morning3_yuna_gate_2, morning3_yuna_gate_3, morning3_yuna_gate_4, morning3_yuna_gate_5, morning3_yuna_gate_6, morning3_yuna_gate_6_b, morning3_yuna_gate_7, morning3_yuna_gate_cold_1, morning3_yuna_gate_cold_2, morning3_dain_gate_warm_1, morning3_dain_gate_warm_2, morning3_dain_gate_warm_3, morning3_dain_gate_cold_1, morning3_dain_gate_cold_2, morning3_react_yuna_1, morning3_react_yuna_1_b, morning3_react_yuna_2, morning3_react_yuna_2_b, hidden_homeroom_d3_reveal_choice_trap, hidden_nurse_d3_2_b, hidden_nurse_d3_2_c, hidden_nurse_d3_2_d, hidden_nurse_d3_2_e, hidden_nurse_d3_choice1_c, hidden_nurse_d3_choice2_b, hidden_nurse_d3_choice2_c, morning3_date_seo_decline, morning3_set_multiple, hidden_homeroom_d3_neg, hidden_nurse_d3_neg, morning3_gate_none_1, morning3_seo_gate_neg_1, morning3_seo_gate_neg_2, morning3_yuna_gate_neg_1, morning3_dain_gate_neg_1, morning3_dain_gate_neg_2, morning3_date_seo_neg, morning3_date_dain_neg, morning3_date_yuna_neg, lunch3_give_seo_neg, lunch3_give_seo_2, lunch3_seo_witness_1, lunch3_seo_witness_choice, lunch3_seo_chase_dain_1, lunch3_seo_chase_dain_2, lunch3_seo_chase_dain_2b, lunch3_seo_focus_2, lunch3_give_seo_3, lunch3_give_dain_neg, lunch3_dain_skin_1, lunch3_dain_skin_3, lunch3_give_dain_2, lunch3_dain_witness_1, lunch3_dain_witness_2b, lunch3_give_dain_3, lunch3_give_yuna_neg, lunch3_yuna_skin_1, lunch3_yuna_skin_2, lunch3_yuna_skin_3, lunch3_give_yuna_2, lunch3_yuna_witness_1, lunch3_yuna_witness_2, lunch3_give_yuna_3, lunch3_expose_1, lunch3_expose_2, lunch3_expose_3, lunch3_expose_4, lunch3_expose_5, lunch3_expose_6, lunch3_expose_7, lunch3_expose_7_b, lunch3_expose_9, lunch3_expose_10, lunch3_expose_11, lunch3_expose_12, lunch3_expose_14, lunch3_expose_choice, lunch3_expose_honest_1, lunch3_expose_honest_2, lunch3_expose_honest_3, lunch3_expose_honest_4, lunch3_expose_honest_4_b, lunch3_expose_honest_5, lunch3_expose_honest_6, lunch3_expose_honest_7, lunch3_expose_excuse_1, lunch3_expose_excuse_2, lunch3_expose_excuse_2_b, lunch3_expose_excuse_3, lunch3_expose_excuse_4, lunch3_expose_run_1, lunch3_expose_run_2, lunch3_share_neg, lunch3_harem_1, lunch3_give_seo_dain_neg, lunch3_give_seo_yuna_neg, lunch3_give_dain_seo_neg, lunch3_give_dain_yuna_neg, lunch3_give_yuna_seo_neg, lunch3_give_yuna_dain_neg, after3_multi_choice, after3_rival_seo_promised_dispatch, after3_rival_seo_high, after3_rival_seo_mid, after3_rival_dain_promised_dispatch, after3_rival_dain_high, after3_rival_dain_mid, after3_rival_yuna_promised_dispatch, after3_rival_yuna_high, after3_rival_yuna_mid, after3_seo_partial_1, after3_seo_partial_2, after3_reject_for_seo_1, after3_reject_for_seo_2, after3_reject_for_seo_3, after3_reject_for_seo_3b, after3_reject_for_seo_3c, after3_reject_for_seo_4, after3_seo_overcare_react, after3_seo_correct_1, after3_seo_correct_2, after3_seo_correct_3, after3_seo_correct_4, after3_seo_correct_5, after3_seo_correct_6, after3_seo_correct_7, after3_seo_correct_8, after3_seo_correct_9, after3_seo_correct_10, after3_seo_correct_11, after3_seo_correct_12, after3_seo_freetalk, after3_reject_for_yuna_1, after3_reject_for_yuna_2, after3_reject_for_yuna_3, after3_reject_for_yuna_3_dain, after3_reject_for_yuna_3_react, after3_reject_for_yuna_4, after3_yuna_1, after3_yuna_2, after3_yuna_4, after3_yuna_5_b, after3_yuna_6, after3_yuna_7, after3_yuna_8, after3_yuna_8b, after3_yuna_9, after3_yuna_choice, after3_yuna_decode_trap_1, after3_yuna_decode_trap_2, after3_yuna_control_react, after3_yuna_decode_trap_3, after3_yuna_decode_trap_4, after3_yuna_decode_trap_5, after3_yuna_decode_trap_6, after3_yuna_decode_trap_7, after3_yuna_decode_trap_8, after3_yuna_decode_trap_9, after3_yuna_decode_trap_10, after3_yuna_decode_trap_11, after3_yuna_correct_1, after3_yuna_correct_2, after3_yuna_correct_3, after3_yuna_correct_4, after3_yuna_correct_5, after3_yuna_correct_6, after3_yuna_correct_7, after3_yuna_correct_8, after3_yuna_correct_9, after3_yuna_correct_10, after3_yuna_correct_11, after3_yuna_correct_12, after3_yuna_freetalk, after3_reject_for_dain_1, after3_reject_for_dain_2, after3_reject_for_dain_3, after3_dain_1, after3_dain_3, after3_dain_4, after3_dain_5, after3_dain_5_b, after3_dain_6, after3_dain_choice, after3_dain_pity_trap_1, after3_dain_pity_trap_2, after3_dain_control_react, after3_dain_pity_trap_3, after3_dain_pity_trap_4, after3_dain_pity_trap_5, after3_dain_pity_trap_6, after3_dain_pity_trap_7, after3_dain_pity_trap_8, after3_dain_pity_trap_9, after3_dain_pity_trap_10, after3_dain_correct_1, after3_dain_correct_2, after3_dain_correct_3, after3_dain_correct_4, after3_dain_correct_5, after3_dain_correct_6, after3_dain_correct_7, after3_dain_correct_8, after3_dain_correct_9, after3_dain_correct_10, after3_dain_correct_11, after3_dain_correct_12, after3_dain_dilemma_tell, after3_dain_dilemma_tell_2, after3_dain_dilemma_tell_3, after3_dain_dilemma_tell_4, after3_dain_dilemma_tell_5, after3_dain_dilemma_tell_6, after3_dain_dilemma_tell_7, after3_dain_dilemma_tell_8, after3_dain_dilemma_final, after3_dain_tell_confirm, after3_dain_tell_confirm_2, after3_dain_tell_confirm_3, after3_dain_tell_retreat, after3_dain_choice1, after3_dain_choice1_2, after3_dain_choice1_3, after3_dain_choice1_react, after3_dain_choice1_react2, after3_dain_choice1_react3, after3_dain_freetalk, after3_dain_end_check, after3_dain_end, after3_dain_departed_end, after3_confront_1, after3_confront_2, after3_confront_3, after3_confront_4, after3_confront_5, after3_confront_5_b, after3_confront_5_c, after3_confront_6, after3_confront_choice, after3_confront_admit, after3_confront_admit_b, after3_confront_admit_2, after3_confront_admit_3, after3_confront_admit_4, after3_confront_admit_4_b, after3_confront_admit_5, after3_confront_admit_6, after3_confront_excuse, after3_confront_excuse_b, after3_confront_excuse_2, after3_confront_excuse_2_b, after3_confront_lie_b, after3_confront_lie, after3_confront_lie_2, after3_confront_lie_2_b, after3_confront_end, minsu_d3_1, minsu_d3_2, minsu_d3_3, minsu_d3_4, minsu_d3_4_established, minsu_d3_4_first, minsu_d3_5, minsu_d3_5b, minsu_d3_6, minsu_d3_6b, minsu_d3_7, minsu_d3_8, minsu_d3_9, minsu_d3_10, haeun_cheer_down, haeun_affinity_high_1, haeun_affinity_high_2, haeun_affinity_low_1, haeun_affinity_low_2, after3_rival_seo_neg, after3_rival_dain_neg, after3_rival_yuna_neg, after3_seo_neg_1, after3_yuna_neg_1, after3_dain_neg_1, night3_faithful_msg_seo_1, night3_faithful_msg_seo_2, night3_faithful_msg_seo_3, night3_faithful_msg_yuna_1, night3_faithful_msg_yuna_2, night3_faithful_msg_yuna_2_b, night3_faithful_msg_dain_1, night3_faithful_msg_dain_2, night3_faithful_msg_dain_3, night3_dream_yuna_bonus, night3_dream_dain_bonus, night3_cheat_msg_2, night3_cheat_msg_3, night3_cheat_msg_3_b, night3_cheat_msg_4, night3_cheat_msg_4_b, night3_cheat_msg_5, night3_cheat_msg_6, night3_cheat_msg_dain_1, night3_cheat_msg_7, night3_nightmare_1, night3_nightmare_2_b, night3_nightmare_3, night3_nightmare_3_b, night3_nightmare_4, night3_nightmare_4_b, night3_nightmare_5, night3_nightmare_6, night3_nightmare_choice, night3_nightmare_seo, night3_nightmare_yuna, night3_nightmare_dain, night3_nightmare_end, night3_nightmare_end_3, night3_cheat_reflect_2, night3_cheat_reflect_3_c, night3_cheat_reflect_3_d, night3_cheat_reflect_3_e, night3_cheat_reflect_5, night3_nightmare_end_4, forced_violation_day3_after_seoyeon, forced_violation_day3_seoyeon_apologize, forced_violation_day3_seoyeon_excuse, forced_violation_day3_after_yuna, forced_violation_day3_yuna_apologize, forced_violation_day3_yuna_excuse, forced_violation_day3_after_dain, forced_violation_day3_dain_apologize, forced_violation_day3_dain_excuse, forced_violation_day3_after_teacher, forced_violation_day3_teacher_apologize, forced_violation_day3_teacher_excuse, forced_violation_day3_after_nurse, forced_violation_day3_nurse_apologize, forced_violation_day3_nurse_excuse, forced_violation_day3_after_haeun, forced_violation_day3_haeun_apologize, forced_violation_day3_haeun_excuse, forced_violation_day3_resume
- Day 4: day4_haeun_reputation_cg, day4_haeun_approach, day4_haeun_select_concern, day4_haeun_concern_choice, day4_haeun_concern_open, day4_haeun_concern_delay, day4_haeun_concern_clarify, day4_haeun_concern_router, day4_haeun_concern_seoyeon_intro, day4_haeun_concern_seoyeon_arrival, day4_haeun_concern_seoyeon_check, day4_haeun_concern_seoyeon_escalation, day4_haeun_concern_seoyeon_escalation_delay, day4_haeun_concern_seoyeon_group_talk, day4_haeun_concern_yuna_intro, day4_haeun_concern_yuna_arrival, day4_haeun_concern_yuna_check, day4_haeun_concern_yuna_escalation, day4_haeun_concern_yuna_escalation_delay, day4_haeun_concern_yuna_group_talk, day4_haeun_concern_dain_intro, day4_haeun_concern_dain_arrival, day4_haeun_concern_dain_check, day4_haeun_concern_dain_escalation, day4_haeun_concern_dain_escalation_delay, day4_haeun_concern_dain_group_talk, day4_haeun_concern_teacher_intro, day4_haeun_concern_teacher_arrival, day4_haeun_concern_teacher_check, day4_haeun_concern_teacher_escalation, day4_haeun_concern_teacher_escalation_delay, day4_haeun_concern_teacher_group_talk, day4_haeun_concern_nurse_intro, day4_haeun_concern_nurse_arrival, day4_haeun_concern_nurse_check, day4_haeun_concern_nurse_escalation, day4_haeun_concern_nurse_escalation_delay, day4_haeun_concern_nurse_group_talk, day4_haeun_finish, morning4_nightmare_seo, morning4_nightmare_yuna, morning4_nightmare_dain, morning4_nightmare_after, minsu_cheer_4_c, minsu_cheer_4_d, minsu_cheer_4_e, morning4_seo_msg_1_b, morning4_seo_msg_1_c, hidden_nurse_d4_morning_choice_trap, hidden_nurse_d4_name_trap, hidden_homeroom_d4_neg, hidden_nurse_d4_skip, hidden_nurse_d4_low, hidden_nurse_d4_neg, day4_haeun_notice_1, day4_haeun_notice_choice, day4_haeun_notice_up, day4_haeun_notice_down, day4_haeun_personal, date_seo_tier_check, date_seo_high_1, date_seo_high_2, date_seo_tentative_1, date_seo_tentative_2, date_seo_tentative_3, date_seo_compliment_choice, date_seo_pretty_high, date_seo_pretty_high_b, date_seo_pretty_high_2, date_seo_pretty_high_3, date_seo_pretty_high_3_b, date_seo_pretty_high_4, date_seo_pretty_low, date_seo_bright, date_seo_role_trap, date_seo_walk, date_seo_duck, date_seo_duck_2, date_seo_duck_3, date_seo_duck_4, date_seo_flower_b, date_seo_flower_2, date_seo_succulent_2, date_seo_succulent_2_b, date_seo_succulent_3, date_seo_end, date_seo_end_b, date_seo_end_c, date_seo_end_d, date_yuna_high_1, date_yuna_high_2, date_yuna_compliment_choice, date_yuna_pretty_high, date_yuna_pretty_high_2, date_yuna_pretty_high_3, date_yuna_pretty_high_4, date_yuna_pretty_high_5, date_yuna_pretty_high_5_b, date_yuna_pretty_high_5_c, date_yuna_pretty_low, date_yuna_bright, date_yuna_trap, date_yuna_bookstore, date_yuna_bookstore_2, date_yuna_bookstore_2_b, date_yuna_bookstore_3, date_yuna_earphone, date_yuna_earphone_2, date_yuna_earphone_2_b, date_yuna_earphone_3, date_yuna_oldbook, date_yuna_oldbook_b, date_yuna_oldbook_c, date_yuna_oldbook_2, date_yuna_oldbook_3, date_yuna_oldbook_4, date_yuna_end, date_yuna_end_b, date_yuna_end_c, date_dain_high_1, date_dain_high_2, date_dain_2, date_dain_3, date_dain_4, date_dain_compliment_choice, date_dain_pretty_high, date_dain_pretty_high_2, date_dain_pretty_high_3, date_dain_pretty_high_4, date_dain_pretty_low, date_dain_bright, date_dain_to_arcade, date_dain_arcade, date_dain_arcade_2, date_dain_arcade_2_b, date_dain_arcade_3, date_dain_arcade_3_b, date_dain_arcade_3_c, date_dain_rhythm, date_dain_rhythm_2, date_dain_rhythm_3, date_dain_knee, date_dain_knee_2, date_dain_shop, date_dain_shop_2, date_dain_shop_2_b, date_dain_shop_3, date_dain_shop_3_b, date_dain_end, date_dain_end_b, date_dain_end_c, day4_caught_fallout_1, day4_caught_fallout_2, day4_caught_fallout_3, day4_caught_fallout_4, day4_harem_fallout_1, day4_harem_fallout_2, day4_harem_fallout_3, day4_harem_fallout_4, date_yuna_low, date_dain_low, date_yuna_skip, date_dain_skip, date_seo_neg, date_yuna_neg, date_dain_neg, confess_seo_2, confess_seo_3, confess_seo_3b, confess_seo_4, confess_seo_4_b, confess_seo_5, confess_seo_choice, confess_seo_yes_1, confess_seo_yes_2, confess_seo_yes_3, confess_seo_yes_4, confess_seo_yes_5, confess_seo_yes_6, confess_seo_yes_7, confess_seo_yes_8, confess_seo_yes_9, confess_seo_yes_10, confess_seo_yes_11, confess_seo_yes_11_b, confess_seo_yes_12, confess_seo_no_1, confess_seo_no_2, confess_seo_no_3, confess_seo_no_4, confess_seo_no_4_b, confess_yuna_3b, confess_yuna_yes_8, confess_yuna_yes_8_b, confess_yuna_yes_8_c, confess_yuna_yes_9, confess_yuna_yes_9_b, confess_dain_3b, confess_dain_yes_8, confess_dain_yes_8_b, confess_dain_yes_9, confess_dain_yes_9_b, confess_dain_yes_10, confess_dain_yes_10_b, confess_seo_low, confess_yuna_low, confess_dain_low, confess_seo_yes_mid_1, confess_seo_yes_low_1, confess_yuna_yes_mid_1, confess_dain_yes_mid_1, confess_seo_yes_neg, confess_yuna_yes_neg, confess_dain_yes_neg, day4_student_nurse_checkin, day4_student_both_checkin, day4_nurse_yuna_counteroffer, day4_adult_counteroffer_accept_seoyeon, day4_waited_seoyeon_invite, day4_waited_seoyeon_promise, wall_seo_1, wall_seo_pre_high_1, wall_seo_pre_high_2, wall_seo_pre_low_1, wall_seo_pre_low_1b, wall_seo_pre_low_2, wall_seo_2, wall_seo_to_park, wall_seo_3, wall_seo_4, wall_seo_5, wall_seo_6, wall_seo_7, wall_seo_7_b, wall_seo_8, wall_seo_9, wall_seo_9_b, wall_seo_9_c, wall_seo_9_d, wall_seo_10, wall_seo_11, wall_seo_11_b, wall_seo_12, wall_seo_13, wall_seo_14, wall_seo_14_b, wall_seo_14_c, wall_seo_14_d, wall_seo_hug_choice, wall_seo_hug_1, wall_seo_hug_2_b, wall_seo_hug_2_c, wall_seo_hug_3, wall_seo_pinky_1, wall_seo_pinky_2, wall_seo_pinky_3, wall_seo_pinky_4, wall_seo_pinky_5, wall_seo_pinky_5_b, wall_seo_line_choice, wall_seo_line_react_1, wall_seo_line_react_2, wall_seo_line_react_3, wall_seo_overpromise_react, wall_seo_line_react_3_b, wall_seo_after_line, wall_seo_after_line_2, wall_seo_after_line_3, wall_seo_after_line_4, wall_seo_after_line_4_b, wall_seo_after_line_5, wall_seo_skin_check, wall_seo_skin70_1, wall_seo_skin70_3, wall_seo_skin60_1, wall_seo_skin60_2, wall_seo_freetalk, wall_seo_rival_rank, wall_seo_glimpse_1, wall_seo_glimpse_2, wall_seo_glimpse_4, wall_seo_yuna_tempt_1, wall_seo_yuna_tempt_2, wall_seo_yuna_tempt_accept, wall_dain_1, wall_dain_pre_high_1, wall_dain_pre_high_2, wall_dain_pre_low_1, wall_dain_pre_low_2, wall_dain_2, wall_dain_2_b, wall_dain_3, wall_dain_skin70_1, wall_dain_skin70_2, wall_dain_skin70_3, wall_dain_skin60_1, wall_dain_skin60_2, wall_yuna_1, wall_yuna_pre_high_1, wall_yuna_pre_high_2, wall_yuna_pre_low_1, wall_yuna_pre_low_2, wall_yuna_skin70_1, wall_yuna_skin70_2, wall_yuna_skin70_3, wall_yuna_skin60_1, wall_yuna_skin60_2, wall_yuna_dain_tempt_1, wall_yuna_dain_tempt_2, wall_yuna_dain_tempt_accept, day4_night_regret_msg, forced_violation_day4_after_seoyeon, forced_violation_day4_seoyeon_apologize, forced_violation_day4_seoyeon_excuse, forced_violation_day4_after_yuna, forced_violation_day4_yuna_apologize, forced_violation_day4_yuna_excuse, forced_violation_day4_after_dain, forced_violation_day4_dain_apologize, forced_violation_day4_dain_excuse, forced_violation_day4_after_teacher, forced_violation_day4_teacher_apologize, forced_violation_day4_teacher_excuse, forced_violation_day4_after_nurse, forced_violation_day4_nurse_apologize, forced_violation_day4_nurse_excuse, forced_violation_day4_resume, wall_seo_skip, wall_dain_skip, wall_yuna_skip, forced_violation_day4_after_haeun, forced_violation_day4_haeun_apologize, forced_violation_day4_haeun_excuse
- Day 5: morning5_caught_fallout_1, morning5_caught_fallout_2, morning5_caught_fallout_3, morning5_harem_fallout_1, morning5_harem_fallout_2, morning5_harem_fallout_3, morning5_temptation_discovery_branch, morning5_caught_by_dain_route, morning5_caught_seoyeon_by_dain, morning5_caught_seoyeon_by_yuna, morning5_caught_yuna_by_dain, morning5_caught_seoyeon_honest, morning5_caught_seoyeon_lie, morning5_mood_high, morning5_yuna_story_gone, morning5_yuna_story_gone_2, morning5_committed_start, morning5_committed_seo, morning5_committed_yuna, morning5_committed_dain, hidden_nurse_d5_7_both, morning5_committed_end, hidden_nurse_d5_low, morning5_mood_neg, hidden_nurse_d5_skip, hidden_homeroom_d5_neg, hidden_nurse_d5_neg, day5_haeun_trust_cg, day5_haeun_select_rival, day5_haeun_high_intro, day5_haeun_high_clasp, day5_haeun_arrival_router, day5_haeun_explain_choice, day5_haeun_explain_open, day5_haeun_explain_delay, day5_haeun_defends, day5_haeun_escalation_router, day5_haeun_finish, day5_haeun_low_intro, day5_haeun_low_choice, day5_haeun_low_apology, day5_haeun_low_work, day5_haeun_low_result, day5_haeun_low_repair, day5_haeun_low_thanks, day5_haeun_low_leave, day5_haeun_seoyeon_arrival, day5_haeun_seoyeon_escalation_check, day5_haeun_seoyeon_escalation, day5_haeun_seoyeon_escalation_delay, day5_haeun_seoyeon_group_talk, day5_haeun_yuna_arrival, day5_haeun_yuna_escalation_check, day5_haeun_yuna_escalation, day5_haeun_yuna_escalation_delay, day5_haeun_yuna_group_talk, day5_haeun_dain_arrival, day5_haeun_dain_escalation_check, day5_haeun_dain_escalation, day5_haeun_dain_escalation_delay, day5_haeun_dain_group_talk, day5_haeun_teacher_arrival, day5_haeun_teacher_escalation_check, day5_haeun_teacher_escalation, day5_haeun_teacher_escalation_delay, day5_haeun_teacher_group_talk, day5_haeun_nurse_arrival, day5_haeun_nurse_escalation_check, day5_haeun_nurse_escalation, day5_haeun_nurse_escalation_delay, day5_haeun_nurse_group_talk, day5_haeun_select_concern, day5_haeun_concern_choice, day5_haeun_concern_open, day5_haeun_concern_delay, day5_haeun_concern_clarify, day5_haeun_concern_router, day5_haeun_concern_seoyeon_intro, day5_haeun_concern_seoyeon_arrival, day5_haeun_concern_seoyeon_check, day5_haeun_concern_seoyeon_escalation, day5_haeun_concern_seoyeon_escalation_delay, day5_haeun_concern_seoyeon_group_talk, day5_haeun_concern_yuna_intro, day5_haeun_concern_yuna_arrival, day5_haeun_concern_yuna_check, day5_haeun_concern_yuna_escalation, day5_haeun_concern_yuna_escalation_delay, day5_haeun_concern_yuna_group_talk, day5_haeun_concern_dain_intro, day5_haeun_concern_dain_arrival, day5_haeun_concern_dain_check, day5_haeun_concern_dain_escalation, day5_haeun_concern_dain_escalation_delay, day5_haeun_concern_dain_group_talk, day5_haeun_concern_teacher_intro, day5_haeun_concern_teacher_arrival, day5_haeun_concern_teacher_check, day5_haeun_concern_teacher_escalation, day5_haeun_concern_teacher_escalation_delay, day5_haeun_concern_teacher_group_talk, day5_haeun_concern_nurse_intro, day5_haeun_concern_nurse_arrival, day5_haeun_concern_nurse_check, day5_haeun_concern_nurse_escalation, day5_haeun_concern_nurse_escalation_delay, day5_haeun_concern_nurse_group_talk, tour_co_seo_1, tour_co_seo_2, tour_co_seo_3, tour_seo_affinity_check, tour_seo_affinity_80, tour_seo_affinity_60, tour_seo_event_1, tour_seo_event_2, tour_seo_event_3, tour_seo_event_4, tour_seo_event_5, tour_seo_2, tour_seo_3, tour_seo_4, tour_seo_5, tour_seo_6, tour_seo_7, tour_seo_8, tour_seo_9, tour_seo_10, tour_seo_11, tour_seo_12, tour_seo_13, tour_seo_14, tour_seo_freetalk, tour_seo_end, tour_yuna_1, tour_yuna_1b, tour_yuna_affinity_check, tour_yuna_affinity_80, tour_yuna_affinity_60, tour_yuna_event_1, tour_yuna_event_2, tour_yuna_event_3, tour_yuna_event_4, tour_yuna_event_5, tour_yuna_2, tour_yuna_3, tour_yuna_4, tour_yuna_5, tour_yuna_6, tour_yuna_7, tour_yuna_8, tour_yuna_9, tour_yuna_10, tour_yuna_11, tour_yuna_freetalk, tour_yuna_end, tour_yuna_end_2, tour_dain_1b, tour_dain_affinity_80, tour_dain_affinity_60, tour_seo_neg, tour_yuna_neg, tour_dain_neg, day5_haeun_wave_gate, day5_haeun_waver_1, day5_haeun_waver_choice, day5_haeun_waver_up, day5_haeun_waver_down, day5_haeun_personal, after5_co_seo_1, after5_co_seo_2, after5_farewell_seo_affinity_check, after5_farewell_seo_high_1, after5_farewell_seo_high_2, after5_farewell_seo_2, after5_farewell_seo_3, after5_farewell_seo_4, after5_farewell_seo_5, after5_farewell_seo_6, after5_farewell_seo_6_b, after5_farewell_seo_7, after5_farewell_yuna_affinity_check, after5_farewell_yuna_high_1, after5_farewell_yuna_high_2, after5_farewell_yuna_2, after5_farewell_yuna_3, after5_farewell_yuna_4, after5_farewell_yuna_5, after5_farewell_yuna_5b, after5_farewell_dain_affinity_check, after5_farewell_dain_high_1, after5_farewell_dain_high_2, after5_farewell_dain_2, after5_farewell_dain_3, after5_farewell_dain_4, after5_farewell_dain_4_b, after5_farewell_dain_4_c, after5_farewell_dain_4_d, after5_farewell_dain_5, after5_farewell_dain_5b, after5_hidden_teacher_high, after5_last_chance_seo_history_check, after5_last_chance_seo_postponed, after5_last_chance_seo_tentative, after5_last_chance_seo_distance, after5_last_chance_2_b, after5_last_chance_2_c, after5_last_chance_2_d, after5_last_chance_2_e, after5_last_chance_2_f, after5_last_chance_2_g, after5_last_chance_2_h, after5_last_chance_2_i, after5_last_chance_2_j, after5_last_chance_dain_history_check, after5_last_chance_dain_postponed, after5_last_chance_dain_tentative, after5_last_chance_dain_distance, after5_last_chance_2_k, after5_last_chance_2_l, after5_last_chance_2_m, after5_last_chance_2_n, after5_last_chance_2_o, after5_last_chance_2_p, after5_last_chance_2_q, after5_last_chance_2_r, after5_last_chance_2_s, after5_last_chance_yuna_history_check, after5_last_chance_yuna_postponed, after5_last_chance_yuna_tentative, after5_last_chance_yuna_distance, after5_last_chance_yuna_1, after5_last_chance_yuna_2, after5_last_chance_yuna_3, after5_last_chance_yuna_4, after5_last_chance_yuna_5, after5_last_chance_yuna_6, after5_last_chance_yuna_7, after5_defer_seo, after5_confess_react_seo, after5_confess_react_dain, after5_confess_react_yuna, after5_confess_react_yuna_call, after5_confess_react_yuna_b, after5_confess_react_yuna_c, after5_confess_react_yuna_d, after5_confess_react_yuna_e, after5_confess_react_yuna_f, after5_confess_react_yuna_g, after5_confess_react_yuna_h, after5_confess_react_yuna_i, after5_set_harem, after5_harem_commit, after5_harem_walk_1, after5_harem_walk_2, after5_farewell_seo_neg, after5_farewell_yuna_neg, after5_farewell_dain_neg, after5_hidden_teacher_neg, after5_hidden_nurse_neg, after5_last_chance_seo_neg, after5_last_chance_dain_neg, after5_last_chance_yuna_neg, after5_confess_react_seo_neg, after5_confess_react_dain_neg, after5_confess_react_yuna_neg, day5_haeun_route_affinity, day5_haeun_route_rival, day5_haeun_route_choice, day5_haeun_choose_rival, day5_haeun_private_1, day5_haeun_walk, day5_haeun_private_2, day5_haeun_guilt_affinity, day5_haeun_guilt_1, day5_haeun_guilt_choice, day5_haeun_guilt_up, day5_haeun_guilt_down, day5_haeun_apology_gate, day5_haeun_apology_router, day5_ending_haeun_apology_seoyeon, day5_ending_haeun_apology_yuna, day5_ending_haeun_apology_dain, day5_ending_haeun_apology_teacher, day5_ending_haeun_apology_nurse, day5_haeun_romance_check, day5_haeun_fallback, day5_ending_haeun, day5_ending_haeun_epilogue, day5_haeun_offer_seoyeon, day5_haeun_leave_seoyeon, day5_haeun_offer_yuna, day5_haeun_leave_yuna, day5_haeun_offer_dain, day5_haeun_leave_dain, day5_haeun_offer_teacher, day5_haeun_leave_teacher, day5_haeun_offer_nurse, day5_haeun_leave_nurse, day5_haeun_switch_seoyeon_response, day5_haeun_switch_seoyeon_haeun, day5_haeun_switch_seoyeon_group_talk, day5_haeun_switch_yuna_response, day5_haeun_switch_yuna_haeun, day5_haeun_switch_yuna_group_talk, day5_haeun_switch_dain_response, day5_haeun_switch_dain_haeun, day5_haeun_switch_dain_group_talk, day5_haeun_switch_teacher_response, day5_haeun_switch_teacher_haeun, day5_haeun_switch_teacher_group_talk, day5_haeun_switch_nurse_response, day5_haeun_switch_nurse_haeun, day5_haeun_switch_nurse_group_talk, day5_haeun_switch_seoyeon_entry, day5_haeun_switch_yuna_entry, day5_haeun_switch_dain_entry, day5_haeun_switch_teacher_entry, day5_haeun_switch_nurse_entry, co_bitter_seo_1, co_bitter_seo_2, co_bitter_seo_3, friend_4_seo, day5_ending_mayhem, mayhem_1, mayhem_2, mayhem_3, mayhem_4, mayhem_5, mayhem_6, mayhem_7, mayhem_8, day5_ending_harem, harem_1, harem_1_b, harem_2, harem_3, harem_4, harem_5, harem_6, harem_7, harem_8, hidden_dual_route_1, hidden_dual_route_choice, hidden_perfect_homeroom_1, hidden_perfect_homeroom_1b, hidden_perfect_homeroom_2, hidden_perfect_homeroom_2b, hidden_perfect_homeroom_2c, hidden_perfect_homeroom_3, hidden_perfect_homeroom_3b, hidden_perfect_homeroom_3c, hidden_perfect_homeroom_3e, hidden_perfect_homeroom_3f, hidden_perfect_homeroom_3g, hidden_perfect_homeroom_4b, hidden_perfect_homeroom_4c, hidden_perfect_homeroom_4d, hidden_perfect_homeroom_4e, hidden_perfect_homeroom_4f, hidden_perfect_homeroom_4g, hidden_perfect_homeroom_ending_title, hidden_perfect_homeroom_5, hidden_perfect_homeroom_ep1, hidden_perfect_homeroom_ep2, hidden_perfect_homeroom_ep3, hidden_perfect_homeroom_ep4, hidden_true_homeroom_1, hidden_true_homeroom_2, hidden_true_homeroom_2_b, hidden_true_homeroom_3, hidden_true_homeroom_3_b, hidden_true_homeroom_3_c, hidden_true_homeroom_4, hidden_true_homeroom_4_b, hidden_true_homeroom_4_c, hidden_true_homeroom_4_d, hidden_true_homeroom_4_e, hidden_true_homeroom_4_f, hidden_true_homeroom_4_g, hidden_true_homeroom_4_h, hidden_true_homeroom_5, hidden_true_homeroom_5_b, hidden_true_homeroom_5_c, hidden_true_homeroom_6, hidden_true_homeroom_6_b, hidden_true_homeroom_7, hidden_true_homeroom_7_b, hidden_true_homeroom_7_c, hidden_true_homeroom_7_d, hidden_true_homeroom_8, hidden_true_homeroom_ending_title, hidden_perfect_nurse_1, hidden_perfect_nurse_2, hidden_perfect_nurse_3, hidden_perfect_nurse_3b, hidden_perfect_nurse_4, hidden_perfect_nurse_4b, hidden_perfect_nurse_5, hidden_perfect_nurse_5b, hidden_perfect_nurse_ep1, hidden_perfect_nurse_ending_title, hidden_perfect_nurse_ep2, hidden_perfect_nurse_ep3, hidden_perfect_nurse_ep4, nurse_perfect_pills_0, nurse_perfect_pills_1, nurse_perfect_pills_ask, nurse_perfect_pills_2, nurse_perfect_pills_pink, nurse_perfect_pills_pink_2, nurse_perfect_pills_pink_3, nurse_perfect_pills_black_1, nurse_perfect_pills_black_ask, nurse_perfect_pills_black_2, nurse_perfect_pills_black_3, nurse_perfect_pills_black_4, ending_affinity_check, ending_aff_check_seo, perfect_seo_1, perfect_seo_1_b, perfect_seo_2, perfect_seo_3, perfect_seo_4, perfect_seo_5, perfect_seo_5_b, perfect_epilogue_1_seo, perfect_epilogue_bridge_seo, perfect_epilogue_2_seo, perfect_epilogue_3_seo, perfect_seo_coda_1, perfect_seo_coda_2, perfect_seo_coda_3, perfect_epilogue_4_seo, bitter_seo_1, bitter_seo_2, bitter_seo_2_b, bitter_seo_3, true_seo_1, true_seo_2, true_seo_3, true_seo_4, true_seo_5, true_seo_6, true_seo_6b, true_seo_7, true_seo_7_b, true_seo_7b, true_seo_8, true_seo_bridge, true_epilogue_1_seo, ending_aff_check_yuna, perfect_yuna_1, perfect_yuna_2, perfect_yuna_3, perfect_yuna_4, perfect_yuna_5, perfect_epilogue_1_yuna, perfect_epilogue_bridge_yuna, perfect_epilogue_2_yuna, perfect_epilogue_3_yuna, perfect_yuna_coda_1, perfect_yuna_coda_2, perfect_yuna_coda_3, perfect_epilogue_4_yuna, bitter_yuna_1, bitter_yuna_2, bitter_yuna_2_library, bitter_yuna_2_book, bitter_yuna_3, true_yuna_1, true_yuna_2, true_yuna_2_b, true_yuna_2_c, true_yuna_2_d, true_yuna_3, true_yuna_4, true_yuna_5, true_yuna_5_established, true_yuna_5_first, true_yuna_5_b, true_yuna_6, true_yuna_6_established, true_yuna_6_first, true_yuna_6b, true_yuna_7, true_yuna_bridge, true_epilogue_1_yuna, ending_aff_check_dain, perfect_dain_1, perfect_dain_2, perfect_dain_2b, perfect_dain_3, perfect_dain_3b, perfect_dain_4, perfect_dain_5, perfect_epilogue_1_dain, perfect_epilogue_1b_dain, perfect_epilogue_1c_dain, perfect_epilogue_bridge_dain, perfect_epilogue_2_dain, perfect_epilogue_3_dain, perfect_dain_coda_1, perfect_dain_coda_2, perfect_dain_coda_3, perfect_epilogue_4_dain, bitter_dain_1, bitter_dain_2, bitter_dain_3, bitter_dain_3_b, true_dain_1, true_dain_2, true_dain_2b, true_dain_3, true_dain_4, true_dain_5, true_dain_6, true_dain_7, true_dain_8, true_dain_8b, true_dain_bridge, true_epilogue_1_dain, true_epilogue_2, true_epilogue_3, true_epilogue_4, true_epilogue_4_seo, true_epilogue_4_yuna, true_epilogue_4_dain, true_epilogue_7, day5_ending_good, good_1, good_1b, good_1c, good_1_seo, good_1_seo_b, good_1_seo_c, good_1_seo_d, good_2_seo, good_3_seo, good_4_seo, good_5_seo, good_epilogue_1, good_epilogue_2, good_epilogue_3, good_5_cg_seo, good_1_yuna, good_1_yuna_b, good_1_yuna_b_b, good_2_yuna, good_3_yuna, good_4_yuna, good_5_yuna, good_epilogue_1_yuna, good_epilogue_1_yuna_established, good_epilogue_1_yuna_first, good_epilogue_2_yuna, good_epilogue_3_yuna, good_5_cg_yuna, good_1_dain, good_2_dain, good_3_dain, good_4_dain, good_5_dain, good_epilogue_1_dain, good_epilogue_2_dain, good_epilogue_3_dain, good_5_cg_dain, date_choice_perfect_seo, date_perfect_seo_roof_1, date_perfect_seo_roof_2, date_perfect_seo_roof_3, date_perfect_seo_cafe_1, date_perfect_seo_cafe_2, date_perfect_seo_cafe_3, date_choice_perfect_yuna, date_perfect_yuna_book_1, date_perfect_yuna_book_2, date_perfect_yuna_book_3, date_perfect_yuna_book_4, date_perfect_yuna_roof_1, date_perfect_yuna_roof_2, date_perfect_yuna_roof_3, date_choice_perfect_dain, date_perfect_dain_gym_1, date_perfect_dain_gym_2, date_perfect_dain_gym_3, date_perfect_dain_booth_1, date_perfect_dain_booth_2, date_perfect_dain_booth_3, date_choice_perfect_teacher, date_perfect_teacher_cafe_1, date_perfect_teacher_cafe_2, date_perfect_teacher_cafe_3, date_perfect_teacher_museum_1, date_perfect_teacher_museum_2, date_perfect_teacher_museum_3, date_choice_perfect_nurse, date_perfect_nurse_home_1, date_perfect_nurse_home_2, date_perfect_nurse_home_3, date_perfect_nurse_park_1, date_perfect_nurse_park_2, date_perfect_nurse_park_3, date_choice_true_seo, date_true_seo_1, date_true_seo_2, date_true_seo_alt_1, date_true_seo_alt_2, date_choice_true_yuna, date_true_yuna_book_1, date_true_yuna_book_2, date_true_yuna_roof_1, date_true_yuna_roof_2, date_choice_true_dain, date_true_dain_1, date_true_dain_2, date_true_dain_alt_1, date_true_dain_alt_2, date_choice_true_teacher, date_true_teacher_1, date_true_teacher_2, date_true_teacher_alt_1, date_true_teacher_alt_2, date_true_nurse_alt_1, date_true_nurse_alt_2, day5_seo_ending_freetalk_intro, day5_seo_ending_freetalk_router, day5_seo_ending_freetalk_perfect, day5_seo_ending_freetalk_true_love, day5_seo_ending_freetalk_good, day5_seo_ending_freetalk_bittersweet, day5_seo_ending_freetalk_late_good, day5_yuna_ending_freetalk_perfect, day5_yuna_ending_freetalk_true_love, day5_yuna_ending_freetalk_good, day5_yuna_ending_freetalk_late_good, day5_dain_ending_freetalk_perfect, day5_dain_ending_freetalk_true_love, day5_dain_ending_freetalk_good, day5_dain_ending_freetalk_late_good, day5_teacher_ending_freetalk_perfect, day5_teacher_ending_freetalk_true_love, day5_nurse_ending_freetalk_perfect, forced_violation_day5_after_seoyeon, forced_violation_day5_seoyeon_apologize, forced_violation_day5_seoyeon_excuse, forced_violation_day5_after_yuna, forced_violation_day5_yuna_apologize, forced_violation_day5_yuna_excuse, forced_violation_day5_after_dain, forced_violation_day5_dain_apologize, forced_violation_day5_dain_excuse, forced_violation_day5_after_teacher, forced_violation_day5_teacher_apologize, forced_violation_day5_teacher_excuse, forced_violation_day5_after_nurse, forced_violation_day5_nurse_apologize, forced_violation_day5_nurse_excuse, forced_violation_day5_resume, forced_violation_day5_after_haeun, forced_violation_day5_haeun_apologize, forced_violation_day5_haeun_excuse
