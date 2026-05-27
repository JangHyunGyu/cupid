# 큐피드(Cupid) — 시나리오

> 기획서: [docs/GAME_DESIGN.md](docs/GAME_DESIGN.md)
> 대사 가이드: [docs/WRITING_GUIDE.md](docs/WRITING_GUIDE.md)

<!-- SCENARIO-AUTO-START -->

> 아래 시나리오 섹션은 `node generate-scenario.js`로 자동 생성되었습니다.
> 수정 후 `node parse-scenario.js`로 코드를 재생성할 수 있습니다.

# 1일차

## 1일차 — 아침 `day1_1_morning`

### `start`
- 배경: `school.png`
- BGM: `intro.mp3`
- 다음: `start_3`

- 캐릭터: `없음`
**{name}**: *4월의 교문 앞에는 밟힌 꽃잎이 드문드문 붙어 있다. 새 교복의 접힌 선이 팔꿈치에 걸리고, 전학 서류는 가방 안에서 납작하게 눌려 있다.*

---

### `start_3`
- 배경: `school.png`
- 다음: `name_input_scene`

- 캐릭터: `없음`
**{name}**: *주머니에서 핸드폰이 울린다. 이전 학교 단체 카톡방. 익숙한 이름 하나가 화면에 떠 있다. 잠깐 멈췄다가, 다시 주머니에 넣었다.*

---

### `name_input_scene`
- 배경: `school.png`
- 타입: `input`
- 다음: `gate_1`

- 캐릭터: `없음`
**시스템**: 전학생, 당신의 이름은?

---

### `gate_1`
- 배경: `school.png`
- 다음: `seoyeon_meet_1`

- 캐릭터: `없음`
**{name}**: *낯선 교문 앞. 내 교복만 아직 접힌 선이 살아 있다. 교문 옆, 검은 긴 머리의 여학생이 안경을 고쳐 쓰며 시간을 확인한다. 내가 멈추자 그녀도 고개를 든다.*

---

### `seoyeon_meet_1`
- 배경: `school.png`
- 다음: `seoyeon_meet_2`

- 캐릭터: `seyoun_normal.png`
**서연**: 전학생? {name} 맞지?

---

### `seoyeon_meet_2`
- 배경: `school.png`
- 다음: `seoyeon_meet_3`

- 캐릭터: `seyoun_normal.png`
**서연**: *{name}의 이름을 한 번 더 확인하고, 클립보드 위 명단에 짧게 표시한다. 안경 너머 시선이 바로 떨어지지 않는다.*

---

### `seoyeon_meet_3`
- 배경: `school.png`
- 다음: `seoyeon_meet_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: 맞는데. 어떻게 알았어?

---

### `seoyeon_meet_4`
- 배경: `school.png`
- 다음: `seoyeon_meet_5`

- 캐릭터: `seyoun_normal.png`
**서연**: 학생회장. 전학생 안내는 내 담당이야.

---

### `seoyeon_meet_5`
- 배경: `school.png`
- 다음: `seoyeon_meet_6`

- 캐릭터: `seyoun_normal.png`
**서연**: 따라와. 15분 안에 끝내줄 테니까.

---

### `seoyeon_meet_6`
- 배경: `school.png`
- 다음: `seoyeon_meet_7`

- 캐릭터: `seyoun_normal.png`
**{name}**: 학생회장이 직접? 과분한데.

---

### `seoyeon_meet_7`
- 배경: `school.png`
- 다음: `seoyeon_meet_8`

- 캐릭터: `seyoun_normal.png`
**서연**: 과분한 건지 아닌 건지는 내가 정해.

---

### `seoyeon_meet_8`
- 배경: `school.png`
- 다음: `seoyeon_choice`

- 캐릭터: `seyoun_normal.png`
**{name}**: *웃음이 짧게 샌다. 서연은 이미 교문 안쪽으로 걸음을 옮기고 있었다.*

---

### `seoyeon_choice`
- 배경: `school.png`
- 선택지:
  1. "일부러 마중 나온 거야?" → `choice_flirt_1` | Seoyeon +5
  2. "가이드비는 얼마야?" → `choice_joke_1` | Seoyeon +3
  3. "괜찮아, 대충 둘러보면 되지 뭐." → `choice_dismiss_1` | Seoyeon -3

- 캐릭터: `seyoun_normal.png`
**{name}**: *어떻게 반응할까?*

---

### `choice_dismiss_1`
- 배경: `school.png`
- 다음: `choice_dismiss_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *걸음이 멈춘다. 고개만 {name} 쪽으로 돌린다.*

---

### `choice_dismiss_2`
- 배경: `school.png`
- 다음: `choice_dismiss_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 그래? 그럼 최소한 교실 번호는 외워. 3학년 2반, 오른쪽 끝.

---

### `choice_dismiss_3`
- 배경: `school_hallway.png`
- 다음: `classroom_1`

- 캐릭터: `seyoun_normal.png`
**서연**: *말없이 돌아선다. 손짓도 없이 교문 안쪽으로 걸어간다.*

---

### `choice_flirt_1`
- 배경: `school.png`
- 다음: `choice_flirt_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *걸음을 멈추고 돌아본다. 안경 너머 눈매가 아주 조금 휜다.*

---

### `choice_flirt_2`
- 배경: `school.png`
- 다음: `choice_flirt_3`

- 캐릭터: `seyoun_laugh.png`
**서연**: 첫날부터 말은 잘하네. 이름은 금방 외우겠다.

---

### `choice_flirt_3`
- 배경: `school.png`
- 다음: `choice_flirt_4`

- 캐릭터: `seyoun_laugh.png`
**{name}**: 점수제야?

---

### `choice_flirt_4`
- 배경: `school.png`
- 다음: `choice_flirt_5`

- 캐릭터: `seyoun_normal.png`
**서연**: 아직 분위기 파악 전인가 봐. 나쁘진 않아.

---

### `choice_flirt_5`
- 배경: `school.png`
- 다음: `choice_flirt_6`

- 캐릭터: `seyoun_normal.png`
**{name}**: 영광인데?

---

### `choice_flirt_6`
- 배경: `school.png`
- 다음: `choice_flirt_7`

- 캐릭터: `seyoun_normal.png`
**서연**: 아직 영광인지 재앙인지 모르는 거지.

---

### `choice_flirt_7`
- 배경: `school.png`
- 다음: `hallway_1`

- 캐릭터: `seyoun_laugh.png`
**서연**: *앞서 걷는다. 한 번 뒤돌아보고, {name}의 발소리가 가까워지자 속도를 늦추지 않는다.*

---

### `choice_joke_1`
- 배경: `school.png`
- 다음: `choice_joke_2`

- 캐릭터: `seyoun_laugh.png`
**서연**: 공짜야. — 대신 나중에 이자 붙어.

---

### `choice_joke_2`
- 배경: `school.png`
- 다음: `choice_joke_3`

- 캐릭터: `seyoun_laugh.png`
**{name}**: 무서운 학생회장이네.

---

### `choice_joke_3`
- 배경: `school.png`
- 다음: `hallway_1`

- 캐릭터: `seyoun_normal.png`
**서연**: 적어도 지루하지는 않을 거야.

---

### `hallway_1`
- 배경: `school_hallway.png`
- 다음: `hallway_3`

- 캐릭터: `seyoun_back.png`
**서연**: *복도를 앞서 걷는다. 마주치는 학생들이 먼저 인사하고, 짧게 고개만 끄덕인다.*

---

### `hallway_3`
- 배경: `school_hallway.png`
- 다음: `hallway_4`

- 캐릭터: `seyoun_normal.png`
**서연**: 3학년 건물은 여기, 저쪽이 도서관. 매점은 지하.

---

### `hallway_4`
- 배경: `school_hallway.png`
- 다음: `hallway_5`

- 캐릭터: `seyoun_normal.png`
**서연**: *주머니에서 열쇠를 꺼내 살짝 흔든다.*

---

### `hallway_5`
- 배경: `school_hallway.png`
- 다음: `hallway_6`

- 캐릭터: `seyoun_normal.png`
**서연**: 옥상은 원래 잠겨 있는데. 학생회장 특권.

---

### `hallway_6`
- 배경: `school_hallway.png`
- 다음: `hallway_6_b`

- 캐릭터: `seyoun_normal.png`
**{name}**: 비밀 아지트라도 있어?

---

### `hallway_6_b`
- 배경: `school_hallway.png`
- 다음: `hallway_6_c`

- 캐릭터: `seyoun_normal.png`
**서연**: *열쇠고리가 손끝에서 멈춘다.* ...눈치 빠르네.

---

### `hallway_6_c`
- 배경: `school_hallway.png`
- 다음: `hallway_7`

- 캐릭터: `seyoun_normal.png`
**서연**: *대답 대신 열쇠를 다시 주머니에 넣었다.*

---

### `hallway_7`
- 배경: `school_hallway.png`
- 다음: `hallway_8`

- 캐릭터: `seyoun_normal.png`
**서연**: 아, 점심. 학식 어디인지 모르지? 같이 가.

---

### `hallway_8`
- 배경: `school_hallway.png`
- 다음: `hallway_10`

- 캐릭터: `seyoun_shy.png`
**{name}**: *대답할 틈도 없이 점심 약속이 생겼다. 서연은 교실 앞에서 멈춰 문패를 가리켰다.*

---

### `hallway_10`
- 배경: `school_hallway.png`
- 다음: `hallway_11`

- 캐릭터: `seyoun_normal.png`
**서연**: 여기야. 들어가 봐.

---

### `hallway_11`
- 배경: `school_hallway.png`
- 다음: `hallway_12`

- 캐릭터: `seyoun_normal.png`
**{name}**: 점심때도 안내해 주는 거야?

---

### `hallway_12`
- 배경: `school_hallway.png`
- 다음: `hallway_13`

- 캐릭터: `seyoun_normal.png`
**서연**: 그건 네가 잘하면.

---

### `hallway_13`
- 배경: `school_hallway.png`
- 다음: `hallway_13_b`

- 캐릭터: `seyoun_back.png`
**서연**: *돌아서며 가볍게 손을 흔든다. 뒤돌아보지 않는다.*

---

### `hallway_13_b`
- 배경: `school_hallway.png`
- 플래그: `met_seoyeon`
- 다음: `classroom_1`

- 캐릭터: `seyoun_back.png`
**{name}**: *복도 끝으로 멀어질 때까지 걸음이 흐트러지지 않았다.*

---

### `classroom_1`
- 배경: `room_school.png`
- BGM: `daily.mp3`
- 다음: `classroom_2_b`

- 캐릭터: `없음`
**{name}**: *교실 문을 연다. 시선이 쏟아진다. 예상은 했지만, 30명분의 시선은 역시 무겁다.*

---

### `classroom_2_b`
- 배경: `room_school.png`
- 다음: `classroom_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *교탁 앞에 담임선생님이 서 있다. 20대 후반. 가디건 단추 몇 개가 풀려 있고, 무심한 얼굴로 학생들을 천천히 훑는다.*

---

### `classroom_3`
- 배경: `room_school.png`
- 다음: `classroom_3_b`

- 캐릭터: `teacher_normal.png`
**담임**: 자, 오늘부터 우리 반에 합류하는 전학생이야. 자기소개 해 볼까?

---

### `classroom_3_b`
- 배경: `room_school.png`
- 다음: `classroom_5_b`

- 캐릭터: `teacher_normal.png`
**{name}**: {name}입니다. 잘 부탁드립니다. *짧고 깔끔하게. 담임이 고개를 끄덕인다.*

---

### `classroom_5_b`
- 배경: `room_school.png`
- 다음: `classroom_5_c`

- 캐릭터: `teacher_normal.png`
**담임**: ...그래. {name}. 외울게. *작게, 거의 혼잣말처럼* 이름은 한 번에 외우는 주의거든.

---

### `classroom_5_c`
- 배경: `room_school.png`
- 다음: `classroom_dain_1`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임의 혼잣말은 교실 소음에 묻힌다. 교실 한쪽에서 휘파람 소리.*

---

### `classroom_dain_1`
- 배경: `room_school.png`
- 다음: `classroom_dain_2`

- 캐릭터: `dain_normal.png`
**다인**: 오, 전학생. 우리 반에 새 멤버 들어왔네!

---

### `classroom_dain_2`
- 배경: `room_school.png`
- 다음: `classroom_dain_3`

- 캐릭터: `dain_normal.png`
**{name}**: *갈색 숏컷에 배구부 유니폼. 자리에서 반쯤 일어나 손을 흔든다. 옆자리 애가 소매를 잡아당겼지만 이미 늦었다.*

---

### `classroom_dain_3`
- 배경: `room_school.png`
- 다음: `classroom_dain_4`

- 캐릭터: `teacher_normal.png`
**담임**: 다인아, 좀 조용히... 그리고 교실에서 유니폼 좀 그만 입고.

---

### `classroom_dain_4`
- 배경: `room_school.png`
- 다음: `classroom_dain_5`

- 캐릭터: `dain_normal.png`
**다인**: 쌤, 이게 제일 편하다니까요. 아무튼 전학생, 반갑다.

---

### `classroom_dain_5`
- 배경: `room_school.png`
- 다음: `classroom_dain_5_b`

- 캐릭터: `dain_normal.png`
**{name}**: *교실 몇 군데서 웃음이 터지고, 다인은 그걸 응원 소리처럼 받아친다.*

---

### `classroom_dain_5_b`
- 배경: `room_school.png`
- 다음: `classroom_dain_5_c`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *한숨을 살짝 쉰다. 출석부 모서리를 톡톡 치고, 다인 쪽을 보지도 않은 채 다음 이름을 찾는다.*

---

### `classroom_dain_5_c`
- 배경: `room_school.png`
- 다음: `classroom_dain_5_d`

- 캐릭터: `teacher_normal.png`
**담임**: ...에너지 좀 아껴. 아직 1교시도 안 시작했어.

---

### `classroom_dain_5_d`
- 배경: `room_school.png`
- 다음: `classroom_yuna_1`

- 캐릭터: `teacher_angry.png`
**담임선생님**: *건조하게 말하고도 입꼬리만 조금 올렸다.*

---

### `classroom_yuna_1`
- 배경: `room_school.png`
- 다음: `classroom_yuna_2`

- 캐릭터: `yuna_bored.png`
**{name}**: *시선을 돌리니, 창가 맨 뒤쪽에 한 여학생이 턱을 괸 채 창밖을 보고 있다. 내 이름이 칠판에 적히는 동안에도 책장만 한 장 넘어간다.*

---

### `classroom_yuna_2`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `classroom_yuna_4`

- 캐릭터: `yuna_bored.png`
**{name}**: *은백색 머리. 붉은 눈. 팔의 타투. 창가 맨 뒤 자리의 여학생은 턱을 괸 채 창밖만 본다. 주변 책상들이 그쪽으로 조금씩 비어 있다.*

---

### `classroom_yuna_4`
- 배경: `room_school.png`
- 다음: `classroom_seat_1`

- 캐릭터: `yuna_bored.png`
**{name}**: *앞줄에서 누군가 속삭인다. '...쟤한테 말 걸지 마, 무섭거든.' 유나는 페이지를 한 장 넘긴다. 속도만 조금 느려졌다.*

---

### `classroom_seat_1`
- 배경: `room_school.png`
- 다음: `classroom_seat_2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *빈자리를 가리킨다.*

---

### `classroom_seat_2`
- 배경: `room_school.png`
- 다음: `classroom_minsu_1`

- 캐릭터: `dain_normal.png`
**{name}**: *다인 옆자리다. 의자에 앉기도 전에 다인이 내 책상 쪽으로 몸을 반쯤 돌린다.*

---

### `classroom_minsu_1`
- 배경: `room_school.png`
- 다음: `classroom_minsu_2`

- 캐릭터: `minsu_normal.png`
**{name}**: *자리에 앉으려는데 — 앞자리 남학생이 돌아본다.*

---

### `classroom_minsu_2`
- 배경: `room_school.png`
- 다음: `classroom_minsu_3`

- 캐릭터: `minsu_smirk.png`
**민수**: 야, 전학생. 환영한다. — 그리고 조심해.

---

### `classroom_minsu_3`
- 배경: `room_school.png`
- 다음: `classroom_minsu_2_b`

- 캐릭터: `minsu_smirk.png`
**{name}**: 뭘?

---

### `classroom_minsu_2_b`
- 배경: `room_school.png`
- 다음: `classroom_dain_talk_1`

- 캐릭터: `minsu_normal.png`
**민수**: *다인 쪽을 턱짓하며* 체력 관리.

---

### `classroom_dain_talk_1`
- 배경: `room_school.png`
- 다음: `classroom_dain_talk_2`

- 캐릭터: `minsu_normal.png`
**{name}**: *앞자리 이름표에는 '민수'라고 적혀 있었다. 민수는 이미 모든 걸 겪어 본 표정이었다.*

---

### `classroom_dain_talk_2`
- 배경: `room_school.png`
- 다음: `classroom_dain_talk_3`

- 캐릭터: `dain_normal.png`
**{name}**: *자리에 앉자마자 다인이 상체를 기울인다. 책상 두 개 사이가 단숨에 좁아졌다.*

---

### `classroom_dain_talk_3`
- 배경: `room_school.png`
- 다음: `classroom_dain_talk_4`

- 캐릭터: `dain_normal.png`
**다인**: 야, {name}. 운동 좋아해?

---

### `classroom_dain_talk_4`
- 배경: `room_school.png`
- 다음: `classroom_dain_talk_5`

- 캐릭터: `dain_normal.png`
**{name}**: 갑자기?

---

### `classroom_dain_talk_5`
- 배경: `room_school.png`
- 다음: `classroom_dain_talk_6`

- 캐릭터: `dain_normal.png`
**다인**: 그냥. 방과후에 리시브 연습 상대가 필요해서. 서브 넣어줄 사람이 없거든.

---

### `classroom_dain_talk_6`
- 배경: `room_school.png`
- 다음: `classroom_dain_talk_7`

- 캐릭터: `dain_normal.png`
**{name}**: 나 볼 머신이야?

---

### `classroom_dain_talk_7`
- 배경: `room_school.png`
- 다음: `classroom_dain_talk_8`

- 캐릭터: `dain_laugh.png`
**다인**: 그래도 볼 머신보단 낫겠지. 아마.

---

### `classroom_dain_talk_8`
- 배경: `room_school.png`
- 다음: `classroom_yuna_note_1`

- 캐릭터: `dain_laugh.png`
**{name}**: *'아마' 뒤에 다인의 눈이 볼 머신 쪽으로 간다. 공이 담긴 바구니가 코트 끝에서 대기 중이다.*

---

### `classroom_yuna_note_1`
- 배경: `room_school.png`
- 다음: `classroom_yuna_note_3`

- 캐릭터: `yuna_bored.png`
**{name}**: *접힌 쪽지가 책상 위로 미끄러져 온다. 뒤를 돌아보자 창가 자리의 은백색 머리 여학생은 여전히 창밖을 보고 있다. 글씨는 반듯하다.*

---

### `classroom_yuna_note_3`
- 배경: `room_school.png`
- 다음: `classroom_yuna_note_5`

- 캐릭터: `yuna_bored.png`
**{name}**: *'시끄러운 자리 걸렸네. — 유나' 연보라색 잉크. 쪽지 모서리에 작게 접힌 자국이 있다.*

---

### `classroom_yuna_note_5`
- 배경: `room_school.png`
- 다음: `classroom_yuna_note_6`

- 캐릭터: `yuna_bored.png`
**{name}**: *유나 쪽을 보자, 여전히 창밖을 보고 있다. 손끝만 책상 아래로 내려가 있다. 방금 전 쪽지가 있던 방향이다.*

---

### `classroom_yuna_note_6`
- 배경: `room_school.png`
- 다음: `lunch_start`

- 캐릭터: `yuna_bored.png`
**{name}**: *수업이 시작된다. 유나가 다시 창밖을 보고 있다. 다인은 벌써 옆자리 애한테 말을 걸고 있다.*

---

## 1일차 — 점심 `day1_2_lunch`

### `lunch_start`
- 배경: `school_hallway.png`
- BGM: `daily.mp3`
- 다음: `lunch_start_4`

- 캐릭터: `없음`
**{name}**: *점심시간. 복도가 학생들로 가득하다. 옥상 쪽 도시락, 매점 앞 손짓, 도서관 방향 쪽지가 동시에 눈에 들어온다.*

---

### `lunch_start_4`
- 배경: `school_hallway.png`
- 다음: `lunch_start_4_b`

- 캐릭터: `seyoun_normal.png`
**{name}**: *복도 끝에서 서연이 눈을 마주치고 손짓한다. 옥상 쪽을 가리키며.*

---

### `lunch_start_4_b`
- 배경: `school_hallway.png`
- 다음: `lunch_start_5`

- 캐릭터: `dain_normal.png`
**{name}**: *옆에서 다인이 팔목을 낚아챈다.*

---

### `lunch_start_5`
- 배경: `school_hallway.png`
- 다음: `lunch_start_6`

- 캐릭터: `dain_normal.png`
**다인**: 야, 밥 먹었어? 매점 가자. 빵 내기하자, 진 사람이 사기.

---

### `lunch_start_6`
- 배경: `school_hallway.png`
- 다음: `lunch_start_7`

- 캐릭터: `yuna_normal.png`
**{name}**: *그리고 유나가 가방만 들고 조용히 교실을 빠져나간다. 도서관 방향.*

---

### `lunch_start_7`
- 배경: `school_hallway.png`
- 다음: `lunch_choice`

- 캐릭터: `없음`
**{name}**: *복도는 세 갈래다. 옥상, 매점, 도서관. 주머니 안에서 핸드폰 모서리가 손끝에 걸린다.*

---

### `lunch_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "서연을 따라 옥상으로" → `lunch_seo_1` | 플래그: `chose_seoyeon_lunch`, `ate_lunch_seoyeon`, `met_seoyeon`
  2. "다인과 매점으로" → `lunch_dain_1` | 플래그: `chose_dain_lunch`
  3. "유나를 따라 도서관으로" → `lunch_yuna_1` | 플래그: `chose_yuna_lunch`

- 캐릭터: `없음`
**{name}**: *누구를 따라갈까?*

---

### `lunch_seo_1`
- 배경: `top_school.png`
- BGM: `daily.mp3`
- 호감분기: Seoyeon
  - [5+] → `lunch_seo_1_aff_high`
  - [기본] → `lunch_seo_1_aff_default`
- 다음: `lunch_seo_1_aff_default`

- 캐릭터: `seyoun_normal.png`
**서연**: *옥상 문을 열쇠로 연다. 바람이 확 불어온다.*

---

### `lunch_seo_1_aff_high`
- 배경: `top_school.png`
- 다음: `lunch_seo_2`

- 캐릭터: `seyoun_laugh.png`
**서연**: 여기 앉아. 아까 복도에서 한 말, 좀 웃겼거든.

---

### `lunch_seo_1_aff_default`
- 배경: `top_school.png`
- 다음: `lunch_seo_2`

- 캐릭터: `seyoun_normal.png`
**서연**: ...앉을 거야?

---

### `lunch_seo_2`
- 배경: `top_school.png`
- 다음: `lunch_seo_3`

- 캐릭터: `seyoun_normal.png`
**{name}**: *옥상은 깨끗하다. 화분마다 물기가 남아 있고, 접이식 의자는 벽에 맞춰 같은 간격으로 세워져 있다.*

---

### `lunch_seo_3`
- 배경: `top_school.png`
- 스탯: Seoyeon +3
- 다음: `lunch_seo_4`

- 캐릭터: `seyoun_normal.png`
**서연**: 여기가 내 영역이거든.

---

### `lunch_seo_4`
- 배경: `top_school.png`
- 다음: `lunch_seo_5`

- 캐릭터: `seyoun_normal.png`
**{name}**: 학생회장 전용 옥상이야?

---

### `lunch_seo_5`
- 배경: `top_school.png`
- 다음: `lunch_seo_6`

- 캐릭터: `seyoun_normal.png`
**서연**: 아무나 데려오는 데는 아닌데. *의자를 하나 펼치며* 오늘은 예외.

---

### `lunch_seo_6`
- 배경: `top_school.png`
- 다음: `lunch_seo_6_b`

- 캐릭터: `seyoun_normal.png`
**{name}**: 첫날부터 예외 적용? 뭔가 수상한데.

---

### `lunch_seo_6_b`
- 배경: `top_school.png`
- 다음: `lunch_seo_8`

- 캐릭터: `seyoun_laugh.png`
**서연**: *의자를 발끝으로 밀어 {name} 쪽에 맞춘다.* 의심 많네. 위가 조용하니까.

---

### `lunch_seo_8`
- 배경: `top_school.png`
- 다음: `lunch_seo_9`

- 캐릭터: `seyoun_laugh.png`
**서연**: *가방에서 도시락을 꺼낸다. 깔끔하게 포장된 2인분.*

---

### `lunch_seo_9`
- 배경: `top_school.png`
- 다음: `lunch_seo_10`

- 캐릭터: `seyoun_normal.png`
**{name}**: ...2인분인데?

---

### `lunch_seo_10`
- 배경: `top_school.png`
- 다음: `lunch_seo_11`

- 캐릭터: `seyoun_normal.png`
**서연**: 학생회 일 하다 보면 밥 먹을 시간이 없어져서. 항상 넉넉하게 싸 와.

---

### `lunch_seo_11`
- 배경: `top_school.png`
- 다음: `lunch_seo_13`

- 캐릭터: `seyoun_normal.png`
**{name}**: *도시락 뚜껑을 열자 반찬이 줄 맞춰 놓여 있다. 계란말이, 소시지, 작은 주먹밥. 젓가락은 두 벌이다.*

---

### `lunch_seo_13`
- 배경: `top_school.png`
- 다음: `lunch_seo_14`

- 캐릭터: `seyoun_normal.png`
**{name}**: 직접 만든 거야?

---

### `lunch_seo_14`
- 배경: `top_school.png`
- 다음: `lunch_seo_15`

- 캐릭터: `seyoun_normal.png`
**서연**: 학생회장이 밥도 못 싸면 말이 안 되지.

---

### `lunch_seo_15`
- 배경: `top_school.png`
- 다음: `lunch_seo_16`

- 캐릭터: `seyoun_normal.png`
**{name}**: 그건 답이 아닌데.

---

### `lunch_seo_16`
- 배경: `top_school.png`
- 다음: `lunch_seo_17`

- 캐릭터: `seyoun_normal.png`
**서연**: *젓가락을 건네며* 먹어. 식으면 맛없어.

---

### `lunch_seo_17`
- 배경: `top_school.png`
- 다음: `lunch_seo_19`

- 캐릭터: `seyoun_normal.png`
**서연**: *대답 대신 밥을 먹는다. 난간 너머로 운동장과 별관 지붕이 한눈에 들어온다.*

---

### `lunch_seo_19`
- 배경: `top_school.png`
- 다음: `lunch_seo_20`

- 캐릭터: `seyoun_normal.png`
**서연**: 어때, 이 학교?

---

### `lunch_seo_20`
- 배경: `top_school.png`
- 다음: `lunch_seo_21`

- 캐릭터: `seyoun_normal.png`
**{name}**: 밥은 맛있어.

---

### `lunch_seo_21`
- 배경: `top_school.png`
- 다음: `lunch_seo_22`

- 캐릭터: `seyoun_laugh.png`
**서연**: *짧게 웃으며* 학교를 물었는데 밥을 답하네.

---

### `lunch_seo_22`
- 배경: `top_school.png`
- 다음: `lunch_seo_23`

- 캐릭터: `seyoun_laugh.png`
**서연**: *계란말이를 집어 내민다.*

---

### `lunch_seo_23`
- 배경: `top_school.png`
- 다음: `lunch_seo_choice`

- 캐릭터: `seyoun_normal.png`
**서연**: 한 입만.

---

### `lunch_seo_choice`
- 배경: `top_school.png`
- 선택지:
  1. "받아먹는다" → `lunch_seo_c1_1` | Seoyeon +5
  2. "직접 먹는 게 더 맛있을걸" → `lunch_seo_c2_1` | Seoyeon +3

- 캐릭터: `seyoun_normal.png`
**서연**: *계란말이를 내밀고 있다.*

---

### `lunch_seo_c1_1`
- 배경: `top_school.png`
- 다음: `lunch_seo_c1_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연의 젓가락에서 계란말이를 받아먹는다.*

---

### `lunch_seo_c1_2`
- 배경: `top_school.png`
- 다음: `lunch_seo_c1_2_b`

- 캐릭터: `seyoun_normal.png`
**{name}**: ...맛있다.

---

### `lunch_seo_c1_2_b`
- 배경: `top_school.png`
- 다음: `lunch_seo_c1_3`

- 캐릭터: `seyoun_normal.png`
**서연**: *물병을 들어 입가를 가린다. 라벨이 손끝에서 천천히 구겨진다.*

---

### `lunch_seo_c1_3`
- 배경: `top_school.png`
- 다음: `lunch_seo_c1_3_b`

- 캐릭터: `seyoun_shy.png`
**서연**: 그 정도는 해야지.

---

### `lunch_seo_c1_3_b`
- 배경: `top_school.png`
- 다음: `lunch_seo_after`

- 캐릭터: `seyoun_shy.png`
**{name}**: *반쯤 접힌 라벨이 물병에 붙어 있다. 서연은 다시 젓가락을 든다.*

---

### `lunch_seo_c2_1`
- 배경: `top_school.png`
- 다음: `lunch_seo_c2_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *계란말이를 자기 입에 넣는다. 천천히 씹으며.*

---

### `lunch_seo_c2_2`
- 배경: `top_school.png`
- 다음: `lunch_seo_c2_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 맞네. 맛있어.

---

### `lunch_seo_c2_3`
- 배경: `top_school.png`
- 다음: `lunch_seo_after`

- 캐릭터: `seyoun_normal.png`
**서연**: *도시락 뚜껑을 닫는다. 손끝이 모서리에 잠깐 머문다.*

---

### `lunch_seo_after`
- 배경: `top_school.png`
- 다음: `lunch_seo_after_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *점심이 끝나갈 무렵.*

---

### `lunch_seo_after_2`
- 배경: `top_school.png`
- 다음: `lunch_seo_after_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 다음에도 점심시간 비워둬.

---

### `lunch_seo_after_3`
- 배경: `top_school.png`
- 다음: `lunch_seo_after_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: 초대해 주는 거야?

---

### `lunch_seo_after_4`
- 배경: `top_school.png`
- 다음: `lunch_seo_after_5`

- 캐릭터: `seyoun_normal.png`
**서연**: 아니. 허가해 주는 거야.

---

### `lunch_seo_after_5`
- 배경: `top_school.png`
- 다음: `lunch_seo_after_7`

- 캐릭터: `seyoun_normal.png`
**서연**: *도시락을 접었다. 대답은 고치지 않는다. 머리카락 끝을 손끝으로 넘긴다.*

---

### `lunch_seo_after_7`
- 배경: `top_school.png`
- 다음: `lunch_seo_freetalk`

- 캐릭터: `seyoun_normal.png`
**{name}**: *그 손가락이 한 번 더 머리카락 끝에 닿았다.*

---

### `lunch_seo_freetalk`
- 배경: `top_school.png`
- 타입: `free_talk`
- 다음: `lunch_end`
- 컨텍스트: "첫날 점심, 옥상에서 서연과 도시락을 먹은 직후. 첫 만남이라 아직 서먹하지만 호기심이 있는 상태. 톤: 첫날이라 아직 가볍고 조심스럽다. 무거운 과거사는 꺼내지 않는다. 장난과 짧은 티키타카 위주."
- 성격: "서연은 침착하고 자기 페이스가 분명한 학생회장. 말은 짧고 직설적이지만, 관심이 생기면 먼저 자리를 만들어 둔다."

- 캐릭터: `seyoun_normal.png`
**서연**: *도시락 뚜껑을 정리하고, 옆자리를 조금 비워 둔다.* 바람 괜찮지?

---

### `lunch_dain_1`
- 배경: `store.png`
- BGM: `daily2.mp3`
- 다음: `lunch_dain_1_aff_default`

- 캐릭터: `dain_laugh.png`
**다인**: 도착. 여기가 매점이야. 일단 고르고 봐.

---

### `lunch_dain_1_aff_default`
- 배경: `store.png`
- 다음: `lunch_dain_2`

- 캐릭터: `dain_normal.png`
**다인**: *매점 안은 점심시간이라 북적거린다. 빵 냄새랑 우유 냄새가 뒤섞여 있다.*

---

### `lunch_dain_2`
- 배경: `store.png`
- 스탯: Dain +10
- 다음: `lunch_dain_3`

- 캐릭터: `dain_normal.png`
**다인**: 소보로빵에 딸기우유. 이 조합은 실패한 적 없어.

---

### `lunch_dain_3`
- 배경: `store.png`
- 다음: `lunch_dain_4`

- 캐릭터: `dain_normal.png`
**{name}**: 근데 진 사람이 사준다며. 뭘 하는 거야?

---

### `lunch_dain_4`
- 배경: `store.png`
- 다음: `lunch_dain_5`

- 캐릭터: `dain_normal.png`
**다인**: 가위바위보. 간단하지.

---

### `lunch_dain_5`
- 배경: `store.png`
- 다음: `lunch_dain_6`

- 캐릭터: `dain_normal.png`
**{name}**: 당연한 건 아닌데.

---

### `lunch_dain_6`
- 배경: `store.png`
- 다음: `lunch_dain_7`

- 캐릭터: `dain_normal.png`
**다인**: 안 하면 네가 사는 걸로 친다?

---

### `lunch_dain_7`
- 배경: `store.png`
- 다음: `lunch_dain_8`

- 캐릭터: `dain_normal.png`
**{name}**: ...하자.

---

### `lunch_dain_8`
- 배경: `store.png`
- 다음: `lunch_dain_9`

- 캐릭터: `dain_normal.png`
**{name}**: *가위바위보.*

---

### `lunch_dain_9`
- 배경: `store.png`
- 다음: `lunch_dain_10`

- 캐릭터: `dain_normal.png`
**다인**: 가위— 바위— 보!

---

### `lunch_dain_10`
- 배경: `store.png`
- 다음: `lunch_dain_11`

- 캐릭터: `dain_normal.png`
**{name}**: *가위. 바위. 보. — 다인이 졌다.*

---

### `lunch_dain_11`
- 배경: `store.png`
- 다음: `lunch_dain_12`

- 캐릭터: `dain_normal.png`
**다인**: ...어? 나 졌네. 한 판 더.

---

### `lunch_dain_12`
- 배경: `store.png`
- 다음: `lunch_dain_12_b`

- 캐릭터: `dain_pout.png`
**{name}**: 약속은 약속이지.

---

### `lunch_dain_12_b`
- 배경: `store.png`
- 다음: `lunch_dain_14`

- 캐릭터: `dain_pout.png`
**다인**: 아, 알았어. 내가 산다. 이모, 소보로 두 개요.

---

### `lunch_dain_14`
- 배경: `store.png`
- 다음: `lunch_dain_15`

- 캐릭터: `dain_pout.png`
**다인**: *투덜거리며 빵을 산다. 하지만 입꼬리가 올라가 있다.*

---

### `lunch_dain_15`
- 배경: `store.png`
- 다음: `lunch_dain_16`

- 캐릭터: `dain_normal.png`
**{name}**: *매점 한쪽 벤치에 앉아 빵을 먹는다.*

---

### `lunch_dain_16`
- 배경: `store.png`
- 다음: `lunch_dain_17`

- 캐릭터: `dain_normal.png`
**다인**: *빵을 뜯으며* 야, 너 운동 진짜 안 해?

---

### `lunch_dain_17`
- 배경: `store.png`
- 다음: `lunch_dain_18`

- 캐릭터: `dain_normal.png`
**{name}**: 왜, 내 체력이 걱정돼?

---

### `lunch_dain_18`
- 배경: `store.png`
- 다음: `lunch_dain_19`

- 캐릭터: `dain_laugh.png`
**다인**: 아니. 나랑 다니려면 체력부터 봐야지.

---

### `lunch_dain_19`
- 배경: `store.png`
- 다음: `lunch_dain_20`

- 캐릭터: `dain_laugh.png`
**{name}**: 자기 PR인 줄 알았어.

---

### `lunch_dain_20`
- 배경: `store.png`
- 다음: `lunch_dain_21`

- 캐릭터: `dain_laugh.png`
**다인**: PR? 그게 뭔데.

---

### `lunch_dain_21`
- 배경: `store.png`
- 다음: `lunch_dain_22`

- 캐릭터: `dain_normal.png`
**{name}**: Personal Record. 운동할 때 쓰는 말인데.

---

### `lunch_dain_22`
- 배경: `store.png`
- 다음: `lunch_dain_23`

- 캐릭터: `dain_normal.png`
**다인**: *눈이 반짝인다.*

---

### `lunch_dain_23`
- 배경: `store.png`
- 다음: `lunch_dain_choice`

- 캐릭터: `dain_laugh.png`
**다인**: 오, 그거 알아? 너 운동 쪽 좀 아네?

---

### `lunch_dain_choice`
- 배경: `store.png`
- 선택지:
  1. "조금은. 알려줄 수 있어?" → `lunch_dain_c1_1` | Dain +7
  2. "아는 척한 거야." → `lunch_dain_c2_1` | Dain +3

- 캐릭터: `dain_laugh.png`
**다인**: *기대에 찬 눈으로 바라보고 있다.*

---

### `lunch_dain_c1_1`
- 배경: `store.png`
- 다음: `lunch_dain_c1_2`

- 캐릭터: `dain_laugh.png`
**다인**: 좋아. 그럼 방과후 체육관 와. 워밍업부터 보자, 콜?

---

### `lunch_dain_c1_2`
- 배경: `store.png`
- 다음: `lunch_dain_after`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인이 웃자 눈꼬리가 접힌다. 의자가 뒤로 밀리고, 다인은 이미 일어나 있다.*

---

### `lunch_dain_c2_1`
- 배경: `store.png`
- 다음: `lunch_dain_after`

- 캐릭터: `dain_laugh.png`
**다인**: 그래도 관심은 있는 거잖아. 오늘 방과후 체육관 와. 잠깐만 봐도 돼.

---

### `lunch_dain_after`
- 배경: `store.png`
- 다음: `lunch_dain_after_2`

- 캐릭터: `dain_laugh.png`
**{name}**: *빵을 다 먹고 일어서는데.*

---

### `lunch_dain_after_2`
- 배경: `store.png`
- 다음: `lunch_dain_after_3`

- 캐릭터: `dain_normal.png`
**다인**: 야, {name}.

---

### `lunch_dain_after_3`
- 배경: `store.png`
- 다음: `lunch_dain_after_4`

- 캐릭터: `dain_normal.png`
**{name}**: 응?

---

### `lunch_dain_after_4`
- 배경: `store.png`
- 다음: `lunch_dain_after_5`

- 캐릭터: `dain_normal.png`
**다인**: 전학 와서 첫 식사 파트너가 나다? 나름 역사적인데.

---

### `lunch_dain_after_5`
- 배경: `store.png`
- 다음: `lunch_dain_freetalk`

- 캐릭터: `dain_normal.png`
**다인**: *주먹으로 {name}의 어깨를 가볍게 친다. 다인은 어깨에 손을 얹은 채 웃는다.*

---

### `lunch_dain_freetalk`
- 배경: `store.png`
- 타입: `free_talk`
- 다음: `lunch_end`
- 컨텍스트: "첫날 점심, 매점에서 다인과 빵을 먹은 직후. 가위바위보 내기를 했고 다인이 졌다. 톤: 첫날이라 아직 가볍고 조심스럽다. 무거운 과거사는 꺼내지 않는다. 장난과 짧은 티키타카 위주."
- 성격: "다인은 행동이 먼저 나가는 체육계. 말투가 시원하고 거리감이 짧지만, 중요한 순간에는 진지해진다."

- 캐릭터: `dain_normal.png`
**다인**: *빵 봉지를 접어 주머니에 넣고 벤치 등받이에 기댄다.* 그래서, 전학생. 첫 매점 평가는 몇 점?

---

### `lunch_yuna_1`
- 배경: `library_old.png`
- 배경톤: `empty`
- BGM: `night1.mp3`
- 다음: `lunch_yuna_1_aff_default`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나의 뒷모습을 따라 도서관으로 들어간다. 점심 종이 친 뒤인데도 대출대 의자만 삐뚤게 비어 있다.*

---

### `lunch_yuna_1_aff_default`
- 배경: `library_old.png`
- 다음: `lunch_yuna_2`

- 캐릭터: `yuna_normal.png`
**유나**: *"..." 쪽지도 없이 자리에 앉아 있다.*

---

### `lunch_yuna_2`
- 배경: `library_old.png`
- 다음: `lunch_yuna_4`

- 캐릭터: `yuna_normal.png`
**유나**: *열람실 구석 자리에 앉는다. 책을 펼친다. 맞은편 의자 다리가 바닥을 살짝 끌자, 손가락이 책장 위에서 멈춘다.*

---

### `lunch_yuna_4`
- 배경: `library_old.png`
- 스탯: Yuna +5
- 다음: `lunch_yuna_5`

- 캐릭터: `yuna_normal.png`
**유나**: ......

---

### `lunch_yuna_5`
- 배경: `library_old.png`
- 다음: `lunch_yuna_5_b`

- 캐릭터: `yuna_normal.png`
**{name}**: *5초. 10초. — 아무 말이 없다.*

---

### `lunch_yuna_5_b`
- 배경: `library_old.png`
- 다음: `lunch_yuna_7`

- 캐릭터: `yuna_normal.png`
**{name}**: ...앉아도 돼?

---

### `lunch_yuna_7`
- 배경: `library_old.png`
- 다음: `lunch_yuna_8`

- 캐릭터: `yuna_normal.png`
**유나**: *책에서 눈을 떼지 않고* ...시끄럽지 않으면.

---

### `lunch_yuna_8`
- 배경: `library_old.png`
- 다음: `lunch_yuna_10`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나는 책을 다시 펼친다. 의자 맞은편에 놓인 가방만 책상 아래로 밀어 넣었다. 나는 그 빈자리에 앉는다.*

---

### `lunch_yuna_10`
- 배경: `library_old.png`
- 다음: `lunch_yuna_10_b`

- 캐릭터: `yuna_normal.png`
**{name}**: *말없이 책장 넘기는 소리만 이어진다. 의자 다리는 바닥에 닿은 채 움직이지 않는다.*

---

### `lunch_yuna_10_b`
- 배경: `library_old.png`
- 다음: `lunch_yuna_12`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나의 책상에 오래된 책갈피가 끼워져 있다. 글씨는 잘 보이지 않는다. 유나가 그 위에 손을 올린다. 나는 가까운 서가에서 아무 책이나 꺼낸다.*

---

### `lunch_yuna_12`
- 배경: `library_old.png`
- 다음: `lunch_yuna_13`

- 캐릭터: `yuna_normal.png`
**유나**: *슬쩍 쳐다보며* ...그거 3권인데.

---

### `lunch_yuna_13`
- 배경: `library_old.png`
- 다음: `lunch_yuna_14`

- 캐릭터: `yuna_normal.png`
**{name}**: 응?

---

### `lunch_yuna_14`
- 배경: `library_old.png`
- 다음: `lunch_yuna_15`

- 캐릭터: `yuna_normal.png`
**유나**: 1권부터 읽어야 해.

---

### `lunch_yuna_15`
- 배경: `library_old.png`
- 다음: `lunch_yuna_16`

- 캐릭터: `yuna_normal.png`
**{name}**: *자기 옆에 놓인 책을 하나 밀어준다.*

---

### `lunch_yuna_16`
- 배경: `library_old.png`
- 다음: `lunch_yuna_17`

- 캐릭터: `yuna_normal.png`
**{name}**: 고마워.

---

### `lunch_yuna_17`
- 배경: `library_old.png`
- 다음: `lunch_yuna_18`

- 캐릭터: `yuna_normal.png`
**유나**: ...읽고 돌려줘.

---

### `lunch_yuna_18`
- 배경: `library_old.png`
- 다음: `lunch_yuna_20`

- 캐릭터: `yuna_normal.png`
**유나**: *다시 책으로 시선을 내린다. 빌려준 책의 첫 문장에 한동안 눈이 붙잡혔다.*

---

### `lunch_yuna_20`
- 배경: `library_old.png`
- 다음: `lunch_yuna_21`

- 캐릭터: `yuna_normal.png`
**{name}**: *종이 울린다.*

---

### `lunch_yuna_21`
- 배경: `library_old.png`
- 다음: `lunch_yuna_22`

- 캐릭터: `yuna_normal.png`
**{name}**: 벌써 종이네.

---

### `lunch_yuna_22`
- 배경: `library_old.png`
- 다음: `lunch_yuna_23`

- 캐릭터: `yuna_normal.png`
**유나**: *책갈피를 끼우며* ...조용히 있어줘서.

---

### `lunch_yuna_23`
- 배경: `library_old.png`
- 다음: `lunch_yuna_24`

- 캐릭터: `yuna_normal.png`
**{name}**: 응?

---

### `lunch_yuna_24`
- 배경: `library_old.png`
- 다음: `lunch_yuna_25`

- 캐릭터: `yuna_normal.png`
**유나**: 괜찮았어.

---

### `lunch_yuna_25`
- 배경: `library_old.png`
- 다음: `lunch_yuna_choice`

- 캐릭터: `yuna_normal.png`
**유나**: *먼저 일어나 걸어간다. 뒤돌아보지 않는다. '괜찮았어.' 짧은 말이 책상 위에 남는다.*

---

### `lunch_yuna_choice`
- 배경: `library_old.png`
- 선택지:
  1. "그 책 재미있어? 나도 읽어볼까" → `lunch_yuna_c1_1` | Yuna +5
  2. "독서를 좋아하는구나" → `lunch_yuna_c2_1` | Yuna +3

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 두고 간 책이 눈에 들어온다. — 몇 발자국 안 갔다. 뒤를 쫓았다.*

---

### `lunch_yuna_c1_1`
- 배경: `library_old.png`
- 다음: `lunch_yuna_c1_2`

- 캐릭터: `yuna_normal.png`
**유나**: ...이거? 꽤 괜찮아. 빌려줄까?

---

### `lunch_yuna_c1_2`
- 배경: `library_old.png`
- 다음: `lunch_yuna_freetalk`

- 캐릭터: `yuna_smile.png`
**유나**: ...다 읽으면 얘기하자. 감상이 궁금해.

---

### `lunch_yuna_c2_1`
- 배경: `library_old.png`
- 다음: `lunch_yuna_c2_2`

- 캐릭터: `yuna_normal.png`
**유나**: ...뭐, 할 게 없으니까.

---

### `lunch_yuna_c2_2`
- 배경: `library_old.png`
- 다음: `lunch_yuna_freetalk`

- 캐릭터: `yuna_normal.png`
**유나**: ...근데 이 도서관, 나쁘지 않아. 조용해서.

---

### `lunch_yuna_freetalk`
- 배경: `library_old.png`
- 타입: `free_talk`
- 다음: `lunch_end`
- 컨텍스트: "첫날 점심, 도서관에서 유나와 함께 시간을 보낸 직후. 조용한 시간이 좋았다. 톤: 첫날이라 아직 가볍고 조심스럽다. 무거운 과거사는 꺼내지 않는다. 장난과 짧은 티키타카 위주."
- 성격: "유나는 말수가 적고 조심성이 많은 독서가. 직접 말하기보다 쪽지나 빌려준 책으로 거리를 조절한다."

- 캐릭터: `yuna_normal.png`
**유나**: *책갈피를 끼우고 책장을 덮는다. 목소리는 낮다.* ...조용한 거, 싫진 않지?

---

### `lunch_end`
- 배경: `school_hallway.png`
- 다음: `after_start`

- 캐릭터: `없음`
**{name}**: *종이 울린다. 점심시간이 끝났다.*

---

## 1일차 — 방과후 `day1_3_afterschool`

### `after_start`
- 배경: `school_hallway.png`
- BGM: `daily.mp3`
- 다음: `after_kakao_1`

- 캐릭터: `없음`
**{name}**: *방과후. 학교를 좀 둘러보기로 했다. 아직 구조를 잘 모르니까. 복도를 걷는다. 핸드폰이 진동한다. — 이전 학교 단체 카톡방.*

---

### `after_kakao_1`
- 배경: `school_hallway.png`
- 다음: `after_kakao_3`

- 캐릭터: `없음`
**{name}**: *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ' — 핸드폰을 주머니에 넣었다.*

---

### `after_kakao_3`
- 배경: `school_hallway.png`
- 다음: `after_kakao_5`

- 캐릭터: `없음`
**{name}**: *'다행이다 ㅋㅋ' 마지막 메시지를 다시 본다. 답장창을 열었다가, 아무것도 쓰지 못하고 화면을 껐다.*

---

### `after_kakao_5`
- 배경: `school_hallway.png`
- 다음: `after_kakao_end`

- 캐릭터: `없음`
**{name}**: *답장창은 빈 채로 남아 있다. 엄지가 전송 버튼 옆에서 한 번 멈춘다.*

---

### `after_kakao_end`
- 배경: `school_hallway.png`
- 분기:
  - [`chose_seoyeon_lunch`] → `after1_jealousy_seo_1`
  - [`chose_dain_lunch`] → `after1_jealousy_dain_1`
  - [`chose_yuna_lunch`] → `after1_jealousy_yuna_1`
  - [기본] → `after1_pre_miss`

- 캐릭터: `없음`
**{name}**: *핸드폰을 다시 꺼내서 단체방을 나갔다. 대화방 목록 맨 위에 새 학교 메신저만 남는다.*

---

### `after1_jealousy_seo_1`
- 배경: `school_hallway.png`
- 다음: `after1_jealousy_seo_2`

- 캐릭터: `dain_normal.png`
**다인**: 야, 점심때 어디 갔어? 매점 갔는데 없더라.

---

### `after1_jealousy_seo_2`
- 배경: `school_hallway.png`
- 다음: `after1_jealousy_seo_3`

- 캐릭터: `dain_normal.png`
**{name}**: *답장창에 '서연이랑'까지 썼다가 지운다. 커서만 다시 첫 칸에서 깜빡인다.*

---

### `after1_jealousy_seo_3`
- 배경: `school_hallway.png`
- 다음: `after1_jealousy_seo_choice`

- 캐릭터: `dain_pout.png`
**다인**: ...옥상에서 내려오는 거 봤거든. 둘이서?

---

### `after1_jealousy_seo_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "학생회장이랑 옥상에서 먹었어. (솔직)" → `after1_jealousy_seo_honest` | Dain -2 | 플래그: `day1_honest_to_dain`
  2. "그냥 혼자 돌아다녔어. (거짓말)" → `after1_jealousy_seo_lie` | 플래그: `day1_lied_to_dain`

- 캐릭터: `dain_pout.png`
**다인**: *휴대폰을 쥔 손에 힘을 준다.*

---

### `after1_jealousy_seo_honest`
- 배경: `school_hallway.png`
- 다음: `after1_jealousy_seo_honest_2`

- 캐릭터: `dain_pout.png`
**{name}**: 응, 학생회장이 데려갔어. 도시락도 싸 왔더라.

---

### `after1_jealousy_seo_honest_2`
- 배경: `school_hallway.png`
- 다음: `after1_jealousy_seo_yuna`

- 캐릭터: `dain_normal.png`
**다인**: ...그래? 말이라도 해주지.

---

### `after1_jealousy_seo_lie`
- 배경: `school_hallway.png`
- 다음: `after1_jealousy_seo_lie_2`

- 캐릭터: `dain_normal.png`
**{name}**: 아니, 그냥 혼자 돌아다녔어.

---

### `after1_jealousy_seo_lie_2`
- 배경: `school_hallway.png`
- 다음: `after1_jealousy_seo_yuna`

- 캐릭터: `dain_laugh.png`
**다인**: 진짜? 혼자? — 아 그래, 첫날이니까 헤맸겠다!

---

### `after1_jealousy_seo_yuna`
- 배경: `school_hallway.png`
- 다음: `after1_pre_miss`

- 캐릭터: `dain_normal.png`
**{name}**: *가방 옆주머니에 접힌 쪽지가 걸려 있다. 유나의 필체. '점심때 옥상에서 봤어. ...학생회장이랑 사이 좋아 보였어.' 끝의 점 세 개가 종이 아래쪽에 눌려 있다.*

---

### `after1_jealousy_dain_1`
- 배경: `school_hallway.png`
- 다음: `after1_jealousy_dain_2`

- 캐릭터: `seyoun_normal.png`
**서연**: 점심때 매점에서 다인이랑 같이 있는 거 봤는데. 적응 빠르네.

---

### `after1_jealousy_dain_2`
- 배경: `school_hallway.png`
- 다음: `after1_pre_miss`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *서연은 웃는 얼굴로 클립보드를 품에 안고 있다. 나는 답장창의 빈칸으로 시선을 내린다.*

---

### `after1_jealousy_yuna_1`
- 배경: `school_hallway.png`
- 다음: `after1_jealousy_yuna_2`

- 캐릭터: `dain_normal.png`
**다인**: 점심때 도서관 갔다며? 유나랑?

---

### `after1_jealousy_yuna_2`
- 배경: `school_hallway.png`
- 다음: `after1_pre_miss`

- 캐릭터: `dain_normal.png`
**다인**: ...그 애 원래 사람 안 만나는데.

---

### `after1_pre_miss`
- 배경: `school_hallway.png`
- 분기:
  - [`met_dain`] → `after_dain_skip`
  - [기본] → `after_miss_dain_1`

- 캐릭터: `없음`
**{name}**: *복도를 계속 걷는다.*

---

### `after_dain_skip`
- 배경: `school_hallway.png`
- 분기:
  - [`met_yuna`] → `after_yuna_skip`
  - [기본] → `after_miss_yuna_1`

<!-- i18n -->

---

### `after_miss_dain_1`
- 배경: `school_hallway.png`
- 제외조건: `met_dain`
- 다음: `after_miss_dain_2`

- 캐릭터: `dain_normal.png`
**{name}**: *복도를 걷는데 뒤에서 쿵쿵 발소리.*

---

### `after_miss_dain_2`
- 배경: `school_hallway.png`
- 제외조건: `met_dain`
- 다음: `after_miss_dain_3`

- 캐릭터: `dain_normal.png`
**다인**: 야, 조심!

---

### `after_miss_dain_3`
- 배경: `school_hallway.png`
- 제외조건: `met_dain`
- 다음: `after_miss_dain_4`

- 캐릭터: `dain_normal.png`
**{name}**: *반사적으로 옆으로 비킨다. 다인이 옆을 스쳐 지나간다. 달리다 급정거.*

---

### `after_miss_dain_4`
- 배경: `school_hallway.png`
- 제외조건: `met_dain`
- 다음: `after_miss_dain_5`

- 캐릭터: `dain_laugh.png`
**다인**: 오, 피했다? 반사신경 괜찮은데.

---

### `after_miss_dain_5`
- 배경: `school_hallway.png`
- 제외조건: `met_dain`
- 다음: `after_miss_dain_6`

- 캐릭터: `dain_laugh.png`
**{name}**: 넌 복도에서 왜 전력질주야?

---

### `after_miss_dain_6`
- 배경: `school_hallway.png`
- 제외조건: `met_dain`
- 다음: `after_miss_dain_6_b`

- 캐릭터: `dain_laugh.png`
**다인**: 늦었거든! 체육관 가야 해. 내일 보자, 전학생!

---

### `after_miss_dain_6_b`
- 배경: `school_hallway.png`
- 다음: `after_miss_dain_7`

- 캐릭터: `dain_laugh.png`
**{name}**: *손을 흔들며 뛰어간다. 급정거할 때 오른쪽 무릎을 잡았다가 바로 손을 뗀다.*

---

### `after_miss_dain_7`
- 배경: `school_hallway.png`
- 플래그: `met_dain`
- 분기:
  - [`met_yuna`] → `after_yuna_skip`
  - [기본] → `after_miss_yuna_1`

- 캐릭터: `dain_laugh.png`
**{name}**: *손을 흔들며 뛰어간다. 아까 담임이 불렀던 이름이 뒤늦게 떠오른다. 다인.*

---

### `after_yuna_skip`
- 배경: `school_hallway.png`
- 분기:
  - [`ate_lunch_seoyeon`] → `after_end`
  - [`chose_seoyeon_lunch`] → `after_end`
  - [기본] → `after_miss_seoyeon_1`

<!-- i18n -->

---

### `after_miss_yuna_1`
- 배경: `library_old.png`
- 제외조건: `met_yuna`
- 다음: `after_miss_yuna_1_b`

- 캐릭터: `yuna_normal.png`
**{name}**: *도서관 앞을 지나가는데, 붉은 눈의 여학생이 책을 읽으며 걸어간다. 타투가 드러난 팔로 책등을 조심스럽게 받치고 있다.*

---

### `after_miss_yuna_1_b`
- 배경: `library_old.png`
- 다음: `after_miss_yuna_1_c`

- 캐릭터: `yuna_normal.png`
**{name}**: 저기, 이거...

---

### `after_miss_yuna_1_c`
- 배경: `library_old.png`
- 다음: `after_miss_yuna_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *주워서 건넨다. 유나가 멈추고 책갈피를 받는다.*

---

### `after_miss_yuna_2`
- 배경: `library_old.png`
- 제외조건: `met_yuna`
- 다음: `after_miss_yuna_3`

- 캐릭터: `yuna_normal.png`
**유나**: *책갈피 모서리를 엄지로 펴고, 빛에 비춰 본다. 접힌 자국은 없다.*

---

### `after_miss_yuna_3`
- 배경: `library_old.png`
- 제외조건: `met_yuna`
- 다음: `after_miss_yuna_3_b`

- 캐릭터: `yuna_normal.png`
**유나**: ......고마워.

---

### `after_miss_yuna_3_b`
- 배경: `library_old.png`
- 다음: `after_miss_yuna_4`

- 캐릭터: `yuna_normal.png`
**유나**: *말없이 돌아선다.*

---

### `after_miss_yuna_4`
- 배경: `library_old.png`
- 플래그: `met_yuna`
- 분기:
  - [`ate_lunch_seoyeon`] → `after_end`
  - [`chose_seoyeon_lunch`] → `after_end`
  - [기본] → `after_miss_seoyeon_1`

- 캐릭터: `yuna_normal.png`
**{name}**: *그리고 다시 걸어간다. 책갈피 모서리에 닿던 엄지만 눈에 남는다.*

---

### `after_miss_seoyeon_1`
- 배경: `school_hallway.png`
- 제외조건: `ate_lunch_seoyeon`
- 다음: `after_miss_seoyeon_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *하교하려는데 복도에서 서연과 마주친다.*

---

### `after_miss_seoyeon_2`
- 배경: `school_hallway.png`
- 제외조건: `ate_lunch_seoyeon`
- 다음: `after_miss_seoyeon_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 아까 어디 갔어?

---

### `after_miss_seoyeon_3`
- 배경: `school_hallway.png`
- 제외조건: `ate_lunch_seoyeon`
- 다음: `after_miss_seoyeon_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: 어디라니?

---

### `after_miss_seoyeon_4`
- 배경: `school_hallway.png`
- 제외조건: `ate_lunch_seoyeon`
- 다음: `after_miss_seoyeon_5`

- 캐릭터: `seyoun_normal.png`
**서연**: 옥상 열어놨는데 안 왔네. — 전학생, 배짱이 있어.

---

### `after_miss_seoyeon_5`
- 배경: `school_hallway.png`
- 제외조건: `ate_lunch_seoyeon`
- 다음: `after_miss_seoyeon_6`

- 캐릭터: `seyoun_normal.png`
**{name}**: 기다린 거야?

---

### `after_miss_seoyeon_6`
- 배경: `school_hallway.png`
- 제외조건: `ate_lunch_seoyeon`
- 다음: `after_miss_seoyeon_7`

- 캐릭터: `seyoun_normal.png`
**서연**: ...바람 쐬러 올라간 건데 문이 열려 있길래.

---

### `after_miss_seoyeon_7`
- 배경: `school_hallway.png`
- 배경톤: `empty`
- 제외조건: `ate_lunch_seoyeon`
- 다음: `after_miss_seoyeon_8`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연의 클립보드 맨 위에 내 이름이 남아 있다. 체크 표시는 아직 비어 있다.*

---

### `after_miss_seoyeon_8`
- 배경: `school_hallway.png`
- 제외조건: `ate_lunch_seoyeon`
- 다음: `after_end`

- 캐릭터: `seyoun_pout.png`
**서연**: 내일은 빠지지 마.

---

### `after_end`
- 배경: `school_hallway.png`
- 선택지:
  1. "교무실" → `after_hidden_homeroom_1` | 플래그: `homeroom_day1_choice`
  2. "보건실" → `after_hidden_nurse_intro` | 플래그: `nurse_day1_choice`
  3. "하교" → `night_start` | 플래그: `skip_hidden_day1`

- 캐릭터: `없음`
**{name}**: *미소를 남기고 지나간다.*

---

### `after_hidden_homeroom_1`
- 배경: `school_hallway.png`
- 다음: `after_hidden_homeroom_2`

- 캐릭터: `없음`
**{name}**: *하교하려다 발이 한 번 멈춘다. 아까 마지막까지 반 분위기를 살피던 담임 얼굴이 떠올랐다. 교무실 앞에 서서 노크하고 문을 열었다.*

---

### `after_hidden_homeroom_2`
- 배경: `teacher_office.png`
- 다음: `after_hidden_homeroom_3`

- 캐릭터: `teacher_normal.png`
**담임**: 어, {name}? — 무슨 일?

---

### `after_hidden_homeroom_3`
- 배경: `teacher_office.png`
- 다음: `after_hidden_homeroom_3_b`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이다. 가디건 한쪽 소매가 접혀 있고, 출석부 사이에서 접힌 공지문이 삐져나와 있다.*

---

### `after_hidden_homeroom_3_b`
- 배경: `teacher_office.png`
- 다음: `after_hidden_homeroom_3_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 아까 하셨던 말씀이 — 계속 남아서요.

---

### `after_hidden_homeroom_3_c`
- 배경: `teacher_office.png`
- 다음: `after_hidden_homeroom_4`

- 캐릭터: `teacher_normal.png`
**담임**: 아, 그거였어? 잘 왔네. 앉아.

---

### `after_hidden_homeroom_4`
- 배경: `teacher_office.png`
- 다음: `after_hidden_homeroom_choice`

- 캐릭터: `teacher_normal.png`
**담임**: 잘못한 건 없고. — 전학생이니까. 적응 좀 어때?

---

### `after_hidden_homeroom_choice`
- 배경: `teacher_office.png`
- 선택지:
  1. "괜찮습니다. 아직 낯설지만요." → `after_homeroom_ok` | Teacher +0
  2. "솔직히 좀 정신없습니다." → `after_homeroom_honest_1` | Teacher +7

- 캐릭터: `teacher_normal.png`
**담임선생님**: *클립보드를 내리고 {name}의 얼굴을 본다.*

---

### `after_homeroom_ok`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_ok_b`

- 캐릭터: `teacher_normal.png`
**담임**: 그래? — 힘든 거 있으면 교무실로 와. 서류 처리 겸.

---

### `after_homeroom_ok_b`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_ok_3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *책상 위 서류를 한쪽으로 밀어둔다. 의자 등받이에 손을 얹고 말을 고른다.*

---

### `after_homeroom_ok_3`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_ok_4`

- 캐릭터: `teacher_normal.png`
**담임**: 낯선 정도면 다행이네. 첫날부터 편하면 그게 더 이상하지.

---

### `after_homeroom_ok_4`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_ok_5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *서류를 내려다보는데, 클립보드 끝이 더는 움직이지 않는다.*

---

### `after_homeroom_ok_5`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_ok_6`

- 캐릭터: `teacher_normal.png`
**담임**: 첫날에 완벽하면 나중에 지쳐. 적당히 못난 척해. — 가 봐.

---

### `after_homeroom_ok_6`
- 배경: `teacher_office.png`
- 플래그: `homeroom_day1`
- 다음: `night_start`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *다시 책상 쪽으로 몸을 돌린다. 짧게 인사하고 교무실 문을 닫았다.*

---

### `after_homeroom_honest_1`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_2`

- 캐릭터: `teacher_normal.png`
**담임**: 정신없는 게 정상이야. 첫날부터 여유로우면 그게 더 이상한 거지.

---

### `after_homeroom_honest_2`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_3`

- 캐릭터: `teacher_normal.png`
**{name}**: 선생님도 전학 경험 있어요?

---

### `after_homeroom_honest_3`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_3_b`

- 캐릭터: `teacher_normal.png`
**담임**: ...비슷한 거. 갑자기 새로운 곳에 던져진 적은 있지.

---

### `after_homeroom_honest_3_b`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *손이 클립보드 뒤로 숨었다가 나온다.*

---

### `after_homeroom_honest_4`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_5`

- 캐릭터: `teacher_normal.png`
**담임**: 적응 못 하겠으면 교무실로 와. 커피 정도는 — 아, 학생이니까 주스 정도는 줄 수 있어.

---

### `after_homeroom_honest_5`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_6`

- 캐릭터: `teacher_normal.png`
**{name}**: 선생님이 학생한테 음료수 사주시는 거예요?

---

### `after_homeroom_honest_6`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_6_b`

- 캐릭터: `teacher_normal.png`
**담임**: 교육적 관심이야, 뭐.

---

### `after_homeroom_honest_6_b`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_choice2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *출석부 모서리만 본다.*

---

### `after_homeroom_honest_choice2`
- 배경: `teacher_office.png`
- 선택지:
  1. "걱정이면 걱정이라고 하시면 되잖아요" → `after_homeroom_honest_choice2a` | Teacher +10
  2. "주스 기대할게요, 선생님" → `after_homeroom_honest_choice2b` | Teacher +3

- 캐릭터: `teacher_normal.png`
**{name}**: *출석부 모서리가 책상에 닿아 있다.*

---

### `after_homeroom_honest_choice2a`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_choice2a_b`

- 캐릭터: `teacher_shy.png`
**담임**: ...그래, 걱정이야. — 뭐, 티 났어?

---

### `after_homeroom_honest_choice2a_b`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_7`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *출석부 모서리를 한 번 누른다.*

---

### `after_homeroom_honest_choice2b`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_choice2b_b`

- 캐릭터: `teacher_smile.png`
**담임**: *짧게 웃는다.* 기대는 마. 자판기 주스야.

---

### `after_homeroom_honest_choice2b_b`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_7`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *출석부를 덮는다. 문턱까지 갔다가 다시 {name}을 부른다.*

---

### `after_homeroom_honest_7`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_8`

- 캐릭터: `teacher_normal.png`
**담임**: 아, {name}.

---

### `after_homeroom_honest_8`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_9`

- 캐릭터: `teacher_normal.png`
**{name}**: 네?

---

### `after_homeroom_honest_9`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_9_b`

- 캐릭터: `teacher_normal.png`
**담임**: 적응 못 하면 또 잡으러 올게.

---

### `after_homeroom_honest_9_b`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_10`

- 캐릭터: `teacher_normal.png`
**{name}**: *복도 끝에서 출석부 닫히는 소리가 작게 들린다.*

---

### `after_homeroom_honest_10`
- 배경: `school_hallway.png`
- 플래그: `homeroom_day1`
- 다음: `after_homeroom_freetalk`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *복도 끝으로 사라진다. 긴 머리카락이 흔들리고, 출석부 모서리가 품 안에서 삐져나와 있다.*

---

### `after_homeroom_freetalk`
- 배경: `school_hallway.png`
- 타입: `free_talk`
- 다음: `night_start`
- 컨텍스트: "Day 1 방과후. 전학 첫날 방과후에 담임이 적응 확인을 위해 불러세웠다. 주인공이 솔직하게 정신없다고 대답한 뒤의 대화. 톤: 첫날이라 아직 가볍고 조심스럽다. 무거운 과거사는 꺼내지 않는다. 장난과 짧은 티키타카 위주."
- 성격: "담임은 무심해 보이지만 학생 상태를 놓치지 않는 20대 후반 여자 교사. 갈색 웨이브 긴 머리에 베이지 가디건 차림. 감정을 '업무'나 '교육적 관심'이라는 말로 감추는 습관이 있고, 소설가 지망생이었던 과거가 있다."

- 캐릭터: `teacher_normal.png`
**담임**: *담임과 복도에서 대화 중.*

---

### `after_hidden_nurse_intro`
- 배경: `school_hallway.png`
- 다음: `after_hidden_nurse_choice`

- 캐릭터: `없음`
**{name}**: *복도 형광등이 잠깐 흔들려 보인다. 벽을 짚자 손바닥에 차가운 페인트 감촉이 닿는다. 복도 한쪽에 '보건실' 표지판이 보인다.*

---

### `after_hidden_nurse_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "보건실에 들어간다" → `after_hidden_nurse_intro_b`
  2. "그냥 집에 간다" → `after_nurse_skip` | Nurse +0

- 캐릭터: `없음`
**{name}**: *아침부터 계속 사람들 틈에 있었다. 발걸음이 보건실 앞에서 멈췄다.*

---

### `after_hidden_nurse_intro_b`
- 배경: `school_hallway.png`
- 다음: `after_nurse_enter_1`

- 캐릭터: `없음`
**{name}**: *문 앞에 서서 한 번 숨을 고른다. 들어가서 조금만 쉬자. 손잡이에 손을 얹는다. 차가운 금속 감촉이 손바닥에 닿는다.*

---

### `after_nurse_enter_1`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_2`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건실 문을 연다. 소독약 냄새. 흰 커튼과 침대, 작은 책상. 하얀 가운의 여자가 안경 너머로 나를 본다. 목에 걸린 청진기가 책상 모서리에 닿아 작게 흔들린다.*

---

### `after_nurse_enter_2`
- 배경: `nurse_room.png`
- 스탯: Nurse +7
- 다음: `after_nurse_enter_2_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 오, 환자네.

---

### `after_nurse_enter_2_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_3`

- 캐릭터: `nurse_normal.png`
**{name}**: *말투가 가볍다.*

---

### `after_nurse_enter_3`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_4`

- 캐릭터: `nurse_normal.png`
**{name}**: 좀 어지러워서요.

---

### `after_nurse_enter_4`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_4_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 전학생이지? 첫날부터 보건실이면 꽤 빡셌나 보네. 어디 봐.

---

### `after_nurse_enter_4_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_4_c`

- 캐릭터: `nurse_normal.png`
**{name}**: 어떻게 알았어요?

---

### `after_nurse_enter_4_c`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_4_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 교복이 뻣뻣하잖아. 풀 냄새도 나고, 벚꽃잎도 붙어 있고. 첫날 티가 나.

---

### `after_nurse_enter_4_d`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *일어나 다가온다. 손등에 체온계 끝이 닿자 손가락이 살짝 굳는다.*

---

### `after_nurse_enter_5`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *다가온다. 손이 이마에 올라온다.*

---

### `after_nurse_enter_6`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_6_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 열은 없고... 혈압이 좀 낮을 수도 있겠다.

---

### `after_nurse_enter_6_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_7`

- 캐릭터: `nurse_normal.png`
**{name}**: 이마를 만져보면 혈압을 알 수 있어요?

---

### `after_nurse_enter_7`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_7_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 열은 없네. 얼굴이 굳어 있어. 자, 여기 누워. 10분만 쉬어.

---

### `after_nurse_enter_7_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_7_c`

- 캐릭터: `nurse_normal.png`
**{name}**: *침대에 누웠다. 천장이 하얗다.*

---

### `after_nurse_enter_7_c`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_7_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *커튼을 반쯤 치며* 물 줄까? 아님 따뜻한 거?

---

### `after_nurse_enter_7_d`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_choice`

- 캐릭터: `nurse_normal.png`
**{name}**: 물이면 됩니다.

---

### `after_nurse_enter_choice`
- 배경: `nurse_room.png`
- 선택지:
  1. "선생님이 더 피곤해 보이는데요" → `after_nurse_enter_choice_a` | Nurse +10 | 플래그: `nurse_choice_a`
  2. "보건실은 조용하네요" → `after_nurse_enter_choice_b` | Nurse +3 | 플래그: `nurse_choice_b`

- 캐릭터: `nurse_normal.png`
**{name}**: *침대에 눕는다. 커튼 너머로 보건선생님 뒷모습이 보인다.*

---

### `after_nurse_enter_choice_a`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_8`

- 캐릭터: `nurse_shy.png`
**보건선생님**: ...눈치 빠른 환자네. 걱정하는 건 내 쪽인데.

---

### `after_nurse_enter_choice_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_8`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그렇지? 여기 좋아. — 조용하고, 소독약 냄새 빼면 완벽해.

---

### `after_nurse_enter_8`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_8_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 존댓말 너무 신경 쓰지 마. 보건실에서는 좀 편하게 있어도 돼. 아프면 다들 그러거든.

---

### `after_nurse_enter_8_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_8_c`

- 캐릭터: `nurse_normal.png`
**{name}**: 선생님이시잖아요.

---

### `after_nurse_enter_8_c`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_8_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *물컵을 건네며* 맞아, 선생님이지. 그래도 여기선 네가 편한 게 먼저야.

---

### `after_nurse_enter_8_d`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_9_b`

- 캐릭터: `nurse_normal.png`
**{name}**: *물을 마시며 보건실을 둘러본다. 한쪽 구석에 작은 화분이 하나 놓여 있다.*

---

### `after_nurse_enter_9_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_9_c`

- 캐릭터: `nurse_normal.png`
**{name}**: 저 화분, 선생님이 키우시는 거예요?

---

### `after_nurse_enter_9_c`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_9_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 응, 로즈마리. — 병원에서 일할 때부터 키우던 거야.

---

### `after_nurse_enter_9_d`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_9_e`

- 캐릭터: `nurse_normal.png`
**{name}**: 병원이요?

---

### `after_nurse_enter_9_e`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_10`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *짧게 멈췄다가 웃는다.*

---

### `after_nurse_enter_10`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_10_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 옛날 얘기야. 학교가 좋아. 여기선 종소리 나면 다들 다시 교실로 돌아가니까.

---

### `after_nurse_enter_10_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_10_c`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *서랍을 닫는다. 안쪽의 연두색 노트가 잠깐 보였다 사라진다. 10분이 지났다.*

---

### `after_nurse_enter_10_c`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11`

- 캐릭터: `nurse_normal.png`
**{name}**: 감사합니다. 조금 나아졌어요.

---

### `after_nurse_enter_11`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 또 어지러우면 와. 보건실은 늘 열려 있으니까. 대신 참다가 늦게 오진 마. 내가 먼저 혼낼 수도 있어.

---

### `after_nurse_enter_11_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_c`

- 캐릭터: `nurse_angry.png`
**{name}**: 혼나요?

---

### `after_nurse_enter_11_c`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *눈을 가늘게 뜨며* 아픈데도 참고 다니다가 뒤늦게 오면 혼나야지. 내가 여기 있는 이유가 그거고.

---

### `after_nurse_enter_11_d`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_e`

- 캐릭터: `nurse_angry.png`
**보건선생님**: *물컵을 책상에 내려놓는다. 컵 바닥이 낮게 울린다.*

---

### `after_nurse_enter_11_e`
- 배경: `nurse_room.png`
- 분기:
  - [`nurse_choice_a`] → `after_nurse_enter_11_f`
  - [`nurse_choice_b`] → `after_nurse_enter_11_h`
  - [기본] → `after_nurse_enter_11_j`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *어깨를 으쓱하고 다시 웃는다.*

---

### `after_nurse_enter_11_f`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_g`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 아까 그 말 — 걱정해줘서 고마워. 환자한테 그런 말 들을 줄은 몰랐어.

---

### `after_nurse_enter_11_g`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_j`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *물컵을 내려놓다 말고 웃음을 놓친다.*

---

### `after_nurse_enter_11_h`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_i`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 아까 조용하다고 했지? — 그 말, 아직 기억나.

---

### `after_nurse_enter_11_i`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_j`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *커튼 끝을 손가락으로 한 번 접는다.*

---

### `after_nurse_enter_11_j`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_k`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건실 문을 열려는 순간, 뒤에서 보건선생님이 부른다.*

---

### `after_nurse_enter_11_k`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_l`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 아, 전학생.

---

### `after_nurse_enter_11_l`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_m`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 이름이 뭐야?

---

### `after_nurse_enter_11_m`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_12`

- 캐릭터: `nurse_normal.png`
**{name}**: {name}입니다.

---

### `after_nurse_enter_12`
- 배경: `nurse_room.png`
- 플래그: `nurse_day1`
- 다음: `after_nurse_enter_12_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 다음에 또 아프면 — 아, 안 아픈 게 좋긴 하지.

---

### `after_nurse_enter_12_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_freetalk`

- 캐릭터: `nurse_normal.png`
**{name}**: *가볍게 인사하고 보건실을 나왔다. 소독약 냄새가 복도까지 따라왔다.*

---

### `after_nurse_freetalk`
- 배경: `nurse_room.png`
- 타입: `free_talk`
- 다음: `night_start`
- 컨텍스트: "Day 1 방과후. 전학 첫날 어지러워서 보건실에 들렀다. 보건선생님이 장난스럽게 대하면서도 세심하게 챙겨준 뒤의 대화. 톤: 첫날이라 아직 가볍고 조심스럽다. 무거운 과거사는 꺼내지 않는다. 장난과 짧은 티키타카 위주."
- 성격: "보건선생님은 말투가 가볍지만 관찰이 빠른 여성이다. 대학병원 간호사 출신으로 번아웃을 겪고 학교로 왔다. 학생이 긴장하지 않도록 먼저 농담을 던지지만, 중요한 말은 낮은 톤으로 짧게 한다."

- 캐릭터: `nurse_normal.png`
**보건선생님**: *체온계를 정리하고 의자 등받이에 기대 웃는다.* 이제 어지러운 건 좀 가라앉았어?

---

### `after_nurse_skip`
- 배경: `school_hallway.png`
- 다음: `night_start`

- 캐릭터: `없음`
**{name}**: *오늘은 충분히 돌아다녔다. 집에 가서 쉬자.*

---

## 1일차 — 밤 `day1_4_night`

### `night_start`
- 배경: `room_my.png`
- BGM: `night1.mp3`
- 다음: `night_start_3`

- 캐릭터: `없음`
**{name}**: *방에 돌아와 침대에 누웠다. 교복 셔츠에 남은 벚꽃 냄새가 이불에 묻었다. 첫날은 길었다.*

---

### `night_start_3`
- 배경: `room_my.png`
- 분기:
  - [`chose_seoyeon_lunch`] → `night_msg_seo_1`
  - [`chose_yuna_lunch`] → `night_msg_yuna_1`
  - [`chose_dain_lunch`] → `night_msg_dain_1`
  - [기본] → `night_hidden_check`

- 캐릭터: `없음`
**{name}**: *핸드폰이 울린다. 학교 메신저.*

---

### `night_msg_seo_1`
- 배경: `room_my.png`
- 다음: `night_msg_seo_2`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: *오늘 옥상 어땠어?*

---

### `night_msg_seo_2`
- 배경: `room_my.png`
- 다음: `night_msg_seo_3`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: *바람이 좋더라*

---

### `night_msg_seo_3`
- 배경: `room_my.png`
- 다음: `night_msg_seo_4`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: *다음엔 음료 정도는 준비해 놓을게*

---

### `night_msg_seo_4`
- 배경: `room_my.png`
- 다음: `night_msg_seo_5`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: *...서비스야*

---

### `night_msg_seo_5`
- 배경: `room_my.png`
- 다음: `night_hidden_check`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: *'서비스야'를 일부러 한 줄 띄어서 보냈다.*

---

### `night_msg_yuna_1`
- 배경: `room_my.png`
- 다음: `night_msg_yuna_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *...오늘 조용히 있어줘서 괜찮았어*

---

### `night_msg_yuna_2`
- 배경: `room_my.png`
- 다음: `night_msg_yuna_3`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *내일도 자리 비워 놓을게*

---

### `night_msg_yuna_3`
- 배경: `room_my.png`
- 다음: `night_hidden_check`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *'자리 비워 놓을게'. — 핸드폰을 내려놓는 손이 천천히 움직인다.*

---

### `night_msg_dain_1`
- 배경: `room_my.png`
- 다음: `night_msg_dain_2`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: *가위바위보 리벤지 내일이다*

---

### `night_msg_dain_2`
- 배경: `room_my.png`
- 다음: `night_msg_dain_3`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: *내일은 리벤지다 ㅋㅋ*

---

### `night_msg_dain_3`
- 배경: `room_my.png`
- 다음: `night_msg_dain_4`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: *오늘 빵값 아직도 아깝다. 진짜.*

---

### `night_msg_dain_4`
- 배경: `room_my.png`
- 다음: `night_hidden_check`

- 캐릭터: `dain_normal.png` @ 0.35
**{name}**: *세 줄이 거의 동시에 도착했다. 답장창을 열기 전에 웃음이 샜다.*

---

### `night_hidden_check`
- 배경: `room_my.png`
- 분기:
  - [`homeroom_day1`] → `night_hidden_homeroom_1`
  - [`nurse_day1`] → `night_hidden_nurse_1`
  - [기본] → `night_late_transition`

- 캐릭터: `없음`
**{name}**: *메신저 알림 사이에 — 다른 알림이 보인다.*

---

### `night_hidden_homeroom_1`
- 배경: `room_my.png`
- 다음: `night_hidden_homeroom_2`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *학교 공지 앱에 담임선생님이 올린 글이 보인다. '3학년 2반 공지: 내일 1교시 수학 준비물 챙기기. — 그리고 전학생은 적응만 잘하고 있으면 됐다.'*

---

### `night_hidden_homeroom_2`
- 배경: `room_my.png`
- 분기:
  - [`nurse_day1`] → `night_hidden_nurse_1`
  - [기본] → `night_late_transition`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *공지사항을 한 번 더 읽고 화면을 엎어 둔다. 어두워진 액정에 내 얼굴이 잠깐 비친다.*

---

### `night_hidden_nurse_1`
- 배경: `room_my.png`
- 다음: `night_hidden_nurse_2`

- 캐릭터: `nurse_normal.png` @ 0.35
**{name}**: *학교 건강 관리 앱 알림이 떠 있다. '보건실 기록: 전학생 — 어지러움 경미. 메모: 내일도 증상 있으면 다시 와. 물 많이 마시고. ♥은 의료적 관심입니다.'*

---

### `night_hidden_nurse_2`
- 배경: `room_my.png`
- 다음: `night_late_transition`

- 캐릭터: `nurse_normal.png` @ 0.35
**{name}**: *문장 끝의 하트가 화면 한가운데 남아 있다. 화면을 끄기 전까지 한 번 더 보게 된다.*

---

### `night_late_transition`
- 배경: `room_my.png`
- 다음: `night_late_branch`

- 캐릭터: `없음`
**{name}**: *잠들려는데 — 핸드폰이 한 번 더 울린다. 밤 11시. 누구지?*

---

### `night_late_branch`
- 배경: `room_my.png`
- 호감분기:
  - [Seoyeon 10+] → `night_seo_late_1`
  - [Dain 10+] → `night_dain_late_1`
  - [Yuna 10+] → `night_yuna_late_1`
- 다음: `night_end_1`

- 캐릭터: `없음`
**{name}**: *화면이 밝아진다.*

---

### `night_seo_late_1`
- 배경: `room_my.png`
- 다음: `night_seo_late_2`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: *내일 학교에서 봐.*

---

### `night_seo_late_2`
- 배경: `room_my.png`
- 다음: `night_seo_late_3`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: *— 안 오면 찾으러 갈 거야*

---

### `night_seo_late_3`
- 배경: `room_my.png`
- 다음: `night_end_1`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: *핸드폰을 내려놓은 손이 멈춘다.*

---

### `night_yuna_late_1`
- 배경: `room_my.png`
- 다음: `night_yuna_late_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *...*

---

### `night_yuna_late_2`
- 배경: `room_my.png`
- 다음: `night_yuna_late_3`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *입력 중 표시가 켜졌다 꺼진다. 도착한 건 '...'뿐이다.*

---

### `night_yuna_late_3`
- 배경: `room_my.png`
- 다음: `night_yuna_late_4`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *— 답장을 할까 말까 고민하다가, 화면이 꺼졌다.*

---

### `night_yuna_late_4`
- 배경: `room_my.png`
- 다음: `night_end_1`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *화면이 꺼진 뒤에도 한참을 들고 있었다.*

---

### `night_dain_late_1`
- 배경: `room_my.png`
- 다음: `night_dain_late_2`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: *야 아직 안 잤지?*

---

### `night_dain_late_2`
- 배경: `room_my.png`
- 다음: `night_dain_late_3`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: *내일 아침 운동 같이 할 사람 구한다*

---

### `night_dain_late_3`
- 배경: `room_my.png`
- 다음: `night_dain_late_4`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: *거절은 안 받음 ㅋㅋ*

---

### `night_dain_late_4`
- 배경: `room_my.png`
- 다음: `night_dain_late_4_b`

- 캐릭터: `dain_normal.png` @ 0.35
**{name}**: *답장창에는 이미 '콜'이 찍혀 있다.*

---

### `night_dain_late_4_b`
- 배경: `room_my.png`
- 다음: `night_end_1`

- 캐릭터: `dain_normal.png` @ 0.35
**{name}**: *다인의 메시지 아래에 이모티콘이 줄줄이 붙어 있다. 하나하나 다 다르다.*

---

### `night_end_1`
- 배경: `room_my.png`
- 다음: `night_end_3`

- 캐릭터: `없음`
**{name}**: *핸드폰을 내려놓았다. 천장을 본다. 벚꽃 냄새가 아직 교복에 남아 있다.*

---

### `night_end_3`
- 배경: `room_my.png`
- 다음: `morning2_start`

- 캐릭터: `없음`
**{name}**: *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을 끄고도, 손가락이 한 번 더 전원 버튼을 찾는다.*

---

# 2일차

## 2일차 — 아침 `day2_1_morning`

### `morning2_start`
- 배경: `room_school.png`
- BGM: `daily.mp3`
- 다음: `morning2_start_2`

- 캐릭터: `없음`
**{name}**: *둘째 날. 어제보다 교복이 조금 편하다. — 발걸음도.*

---

### `morning2_start_2`
- 배경: `room_school.png`
- 호감분기:
  - [Seoyeon 10+] → `morning2_greet_seo_1`
  - [Dain 10+] → `morning2_greet_dain_1`
  - [Yuna 10+] → `morning2_greet_yuna_1`
- 다음: `morning2_dain_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `morning2_greet_seo_1`
- 분기:
  - [`chose_seoyeon_lunch`] → `morning2_greet_seo_1_roof`
  - [기본] → `morning2_greet_seo_1_gate`

<!-- i18n -->

---

### `morning2_greet_seo_1_roof`
- 배경: `room_school.png`
- 다음: `morning2_greet_seo_2`

- 캐릭터: `seyoun_normal.png`
**서연**: 어제 옥상에서 한 말, 아직 유효한 거지?

---

### `morning2_greet_seo_1_gate`
- 배경: `room_school.png`
- 다음: `morning2_greet_seo_2`

- 캐릭터: `seyoun_normal.png`
**서연**: 어제 교문에서 한 말, 기억은 하지?

---

### `morning2_greet_seo_2`
- 배경: `room_school.png`
- 다음: `morning2_greet_seo_others_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 먼저 다가왔다. 클립보드가 오늘도 팔 안쪽에 붙어 있다. 다인이 교실 뒤쪽에서 흘깃 보고 고개를 돌린다. 유나는 책장 넘기는 속도가 빨라진다.*

---

### `morning2_greet_seo_others_2`
- 배경: `room_school.png`
- 다음: `morning2_note_1`

- 캐릭터: `seyoun_normal.png`
**{name}**: *두 사람의 미세한 반응. — 눈치를 채야 하나, 못 본 척해야 하나.*

---

### `morning2_greet_dain_1`
- 배경: `room_school.png`
- 다음: `morning2_greet_dain_2`

- 캐릭터: `dain_laugh.png`
**다인**: 야! 어제 재밌었다, 오늘도 같이 뭐 하자!

---

### `morning2_greet_dain_2`
- 배경: `room_school.png`
- 다음: `morning2_greet_dain_others`

- 캐릭터: `dain_laugh.png`
**다인**: *뒤에서 어깨를 탁 친다.*

---

### `morning2_greet_dain_others`
- 배경: `room_school.png`
- 다음: `morning2_greet_dain_others_seo`

- 캐릭터: `seyoun_normal.png`
**서연**: *클립보드를 넘기며 지나간다.*

---

### `morning2_greet_dain_others_seo`
- 배경: `room_school.png`
- 다음: `morning2_greet_dain_others_yuna`

- 캐릭터: `seyoun_normal.png`
**서연**: 에너지 좋다.

---

### `morning2_greet_dain_others_yuna`
- 배경: `room_school.png`
- 다음: `morning2_greet_dain_others_2`

- 캐릭터: `yuna_bored.png`
**{name}**: *빈정인지 감탄인지 알 수 없다. 유나는 무반응. 하지만 쪽지를 쓰던 손이 멈춰 있다.*

---

### `morning2_greet_dain_others_2`
- 배경: `room_school.png`
- 다음: `morning2_note_1`

- 캐릭터: `dain_laugh.png`
**{name}**: *웃어넘겼지만, 클립보드 두드리던 소리가 한 박자 늦게 떠오른다.*

---

### `morning2_greet_yuna_1`
- 배경: `room_school.png`
- 다음: `morning2_greet_yuna_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *자리에 앉으려는데 — 책상 위에 접힌 쪽지. '...어제, 고마웠어.'*

---

### `morning2_greet_yuna_2`
- 배경: `room_school.png`
- 다음: `morning2_greet_yuna_others`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *유나의 글씨. 어제보다 한 문장이 길어졌다. — 뒷면에 작게 '점심에 도서관 별관으로.'*

---

### `morning2_greet_yuna_others`
- 배경: `room_school.png`
- 다음: `morning2_greet_yuna_others_seo`

- 캐릭터: `seyoun_normal.png`
**서연**: 아침부터 편지야?

---

### `morning2_greet_yuna_others_seo`
- 배경: `room_school.png`
- 다음: `morning2_greet_yuna_others_dain`

- 캐릭터: `seyoun_normal.png`
**{name}**: *웃고 있다. 하지만 시선이 쪽지 위에 멈춘다.*

---

### `morning2_greet_yuna_others_dain`
- 배경: `room_school.png`
- 다음: `morning2_greet_yuna_others_2`

- 캐릭터: `dain_normal.png`
**다인**: 뭐야 그거! 나도 보여줘!

---

### `morning2_greet_yuna_others_2`
- 배경: `room_school.png`
- 다음: `morning2_seo_4`

- 캐릭터: `dain_normal.png`
**{name}**: *쪽지를 접어 손에 쥐었다. 접힌 선이 손바닥 안에서 눌린다.*

---

### `morning2_dain_1`
- 배경: `room_school.png`
- 다음: `morning2_dain_2`

- 캐릭터: `없음`
**{name}**: *교실 문을 여는 순간 — 등짝에 충격.*

---

### `morning2_dain_2`
- 배경: `room_school.png`
- 다음: `morning2_dain_3`

- 캐릭터: `dain_normal.png`
**다인**: 왔어? 좋은 아침.

---

### `morning2_dain_3`
- 배경: `room_school.png`
- 다음: `morning2_dain_4`

- 캐릭터: `dain_laugh.png`
**다인**: 그 정도로? 체력 관리 좀 해.

---

### `morning2_dain_4`
- 배경: `room_school.png`
- 다음: `morning2_dain_5`

- 캐릭터: `dain_laugh.png`
**{name}**: 너 아침부터 에너지 과잉 아냐?

---

### `morning2_dain_5`
- 배경: `room_school.png`
- 다음: `morning2_dain_6`

- 캐릭터: `dain_laugh.png`
**다인**: 이게 정상이야! 너가 부족한 거야!

---

### `morning2_dain_6`
- 배경: `room_school.png`
- 다음: `morning2_note_1`

- 캐릭터: `dain_laugh.png`
**다인**: *목소리가 아침 조회 전 교실을 먼저 채운다.*

---

### `morning2_note_1`
- 배경: `room_school.png`
- 다음: `morning2_note_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *자리에 앉으려는데 — 책상 위에 접힌 쪽지가 하나 놓여 있다.*

---

### `morning2_note_2`
- 배경: `room_school.png`
- 다음: `morning2_note_3`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *'점심에 도서관 별관으로. — 유나'*

---

### `morning2_note_3`
- 배경: `room_school.png`
- 다음: `morning2_seo_1`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *어제와 같은 깔끔한 글씨. 짧다. 그리고 장소가 구체적이다. — 도서관 '별관'? 어제랑 다른 곳인데.*

---

### `morning2_seo_1`
- 배경: `room_school.png`
- 다음: `morning2_seo_4`

- 캐릭터: `seyoun_normal.png`
**서연**: *복도를 지나가며 교실 안을 힐끗 보며* 어제 잘 잤어?

---

### `morning2_seo_4`
- 배경: `room_school.png`
- 다음: `morning2_seo_5`

- 캐릭터: `seyoun_normal.png`
**{name}**: 학생회장이 교실까지 인사하러 와?

---

### `morning2_seo_5`
- 배경: `room_school.png`
- 다음: `morning2_minsu_1`

- 캐릭터: `seyoun_normal.png`
**서연**: 순찰이야. — 출석률 확인 겸.

---

### `morning2_minsu_1`
- 배경: `room_school.png`
- 다음: `morning2_minsu_1b`

- 캐릭터: `seyoun_laugh.png`
**서연**: *복도를 돌아가기 직전 발끝을 늦춘다. 클립보드가 팔 안으로 더 붙는다.*

---

### `morning2_minsu_1b`
- 배경: `room_school.png`
- 다음: `morning2_minsu_3`

- 캐릭터: `minsu_normal.png`
**{name}**: *서연이 사라진 복도를 바라보는데 — 뒤에서 민수가 돌아본다.*

---

### `morning2_minsu_3`
- 배경: `room_school.png`
- 다음: `morning2_dain_claim_1`

- 캐릭터: `minsu_smirk.png`
**민수**: 야, 전학 이틀 만에 학생회장이 인사하러 오냐? 나 1년 다녀도 눈도 안 마주치던데.

---

### `morning2_dain_claim_1`
- 배경: `room_school.png`
- 다음: `morning2_dain_claim_2`

- 캐릭터: `minsu_smirk.png`
**{name}**: 인기가 없는 거 아닐까.

---

### `morning2_dain_claim_2`
- 배경: `room_school.png`
- 다음: `morning2_dain_claim_3`

- 캐릭터: `minsu_smirk.png`
**민수**: ...그건 맞는데 그게 중요한 게 아니잖아.

---

### `morning2_dain_claim_3`
- 배경: `room_school.png`
- 다음: `morning2_dain_claim_4`

- 캐릭터: `dain_normal.png`
**{name}**: *다인이 서연의 뒷모습을 보며.*

---

### `morning2_dain_claim_4`
- 배경: `room_school.png`
- 다음: `morning2_dain_claim_5`

- 캐릭터: `dain_normal.png`
**다인**: 회장님도 우리 전학생한테 관심 있어? 인기 많네!

---

### `morning2_dain_claim_5`
- 배경: `room_school.png`
- 다음: `morning2_dain_claim_6`

- 캐릭터: `dain_normal.png`
**{name}**: '우리' 전학생?

---

### `morning2_dain_claim_6`
- 배경: `room_school.png`
- 분기:
  - [`homeroom_day1`] → `hidden_homeroom_d2_1`
  - [기본] → `morning2_break_transition`

- 캐릭터: `dain_laugh.png`
**다인**: 내가 먼저 봤잖아. 그럼 우리 맞지. 찜한 거.

---

### `morning2_break_transition`
- 배경: `school_hallway.png`
- 분기:
  - [`homeroom_day1`] → `morning2_break_transition_b`
  - [기본] → `morning2_break_1`

- 캐릭터: `없음`
**{name}**: *쉬는 시간. 복도로 나왔다.*

---

### `morning2_break_transition_b`
- 배경: `school_hallway.png`
- 다음: `morning2_break_1`

- 캐릭터: `teacher_normal.png`
**{name}**: *교실 문 앞에 담임이 서 있다. 출석부를 들고, 문 쪽을 힐끗 보다가 — 나와 눈이 마주친다.*

---

### `morning2_break_1`
- 배경: `school_hallway.png`
- 다음: `morning2_seo_dust_1`

- 캐릭터: `없음`
**{name}**: *서연의 클립보드 끝이 책상에 톡, 닿는다. 대답할 틈이 없었다.*

---

### `hidden_homeroom_d2_1`
- 배경: `school_hallway.png`
- 다음: `hidden_homeroom_d2_1_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 아, {name}. 잠깐 교무실로.

---

### `hidden_homeroom_d2_1_b`
- 배경: `school_hallway.png`
- 다음: `hidden_homeroom_d2_1_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 뭔가 문제라도...?

---

### `hidden_homeroom_d2_1_c`
- 배경: `school_hallway.png`
- 다음: `hidden_homeroom_d2_2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 아니, 전학 서류 확인이야. — 행정적인 거.

---

### `hidden_homeroom_d2_2`
- 배경: `school_hallway.png`
- 다음: `hidden_homeroom_d2_2_b`

- 캐릭터: `teacher_normal.png`
**{name}**: *행정적인 거라고 한다.*

---

### `hidden_homeroom_d2_2_b`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임을 따라 교무실로 향했다. 구석 자리의 서랍이 살짝 열려 있다. 서류 더미 아래, 원고지 모서리가 비쳐 보인다.*

---

### `hidden_homeroom_d2_3`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 전 학교 성적표 봤는데, 국어가 좋았네. 읽는 거 좋아해?

---

### `hidden_homeroom_d2_3_b`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3_c`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *잠깐 멈칫하며* ...여러 가지. 주로 — 소설.

---

### `hidden_homeroom_d2_3_c`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3_d`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *시선이 열린 서랍 쪽에 잠깐 머문다.*

---

### `hidden_homeroom_d2_3_d`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3_e`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 읽는 거? — 쓰는 건?

---

### `hidden_homeroom_d2_3_e`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3_f`

- 캐릭터: `teacher_normal.png`
**{name}**: *성적표 위에 놓인 손가락이 원고지 모서리를 가린다.*

---

### `hidden_homeroom_d2_3_f`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3_g`

- 캐릭터: `teacher_normal.png`
**{name}**: 쓰는 건 잘 모르겠어요.

---

### `hidden_homeroom_d2_3_g`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_choice1`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *시선이 서랍 쪽을 스치고 바로 돌아온다.*

---

### `hidden_homeroom_d2_choice1`
- 배경: `teacher_office.png`
- 선택지:
  1. "선생님은요? 뭐 읽으세요?" → `hidden_homeroom_d2_choice1_a` | Teacher +10
  2. "읽는 건 좋아해요" → `hidden_homeroom_d2_choice1_b` | Teacher +3

- 캐릭터: `teacher_normal.png`
**{name}**: *서랍 쪽 시선이 아직 남아 있다. 성적표 얘기는 더 묻지 않기로 했다.*

---

### `hidden_homeroom_d2_choice1_a`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...추리소설. 범인 잡는 거 말고 — 동기를 추적하는 쪽.

---

### `hidden_homeroom_d2_choice1_b`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *살짝 웃으며* 그래? ...좋은 취미네.

---

### `hidden_homeroom_d2_5`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_6`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...그래. 뭐, 그냥 물어본 거야.

---

### `hidden_homeroom_d2_6`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_7`

- 캐릭터: `teacher_normal.png`
**{name}**: *살짝 열린 서랍 사이로 원고지 모서리가 보인다. 담임은 커피잔을 내려놓으며 서랍을 밀어 닫는다.*

---

### `hidden_homeroom_d2_7`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_7_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 적응은 어때? 어제보다 나아?

---

### `hidden_homeroom_d2_7_b`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_8`

- 캐릭터: `teacher_normal.png`
**{name}**: 많이요. 반 애들이 좋아서.

---

### `hidden_homeroom_d2_8`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_8_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 다인이가 시끄럽지? — 원래 저래. 근데 소란 피우는 애랑 에너지가 남아도는 애는 달라.

---

### `hidden_homeroom_d2_8_b`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_8_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 아시는 거 보니 다인이가 좀 유명한가 봐요.

---

### `hidden_homeroom_d2_8_c`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_8_d`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 유명하다기보다... *커피를 한 모금 마시며* 걱정이 되는 쪽이지.

---

### `hidden_homeroom_d2_8_d`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_8_e`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임의 시선이 다인의 이름표 줄에서 잠깐 멈춘다.*

---

### `hidden_homeroom_d2_8_e`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_8_f`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *커피를 내려놓으며* ...아무튼. 네 쪽은 별 이상 없어.

---

### `hidden_homeroom_d2_8_f`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_9`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *커피잔으로 입을 가린 채, 컵받침을 같은 자리에서 두 번 돌린다.*

---

### `hidden_homeroom_d2_9`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_10`

- 캐릭터: `teacher_normal.png`
**{name}**: 감사합니다, 선생님.

---

### `hidden_homeroom_d2_10`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_choice2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 담당 학급 관리 항목에 포함되는 거니까. 업무야.

---

### `hidden_homeroom_d2_choice2`
- 배경: `teacher_office.png`
- 선택지:
  1. "업무치고 표정이 좋으신데요" → `hidden_homeroom_d2_choice2_a` | Teacher +7
  2. "챙겨주셔서 감사합니다" → `hidden_homeroom_d2_choice2_b` | Teacher +0

- 캐릭터: `teacher_normal.png`
**{name}**: *업무라고 하면서 눈가에 웃음이 남아 있다.*

---

### `hidden_homeroom_d2_choice2_a`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_11`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *커피잔으로 입을 가리며* ...얼굴에 다 쓰였나. 됐다, 가 봐.

---

### `hidden_homeroom_d2_choice2_b`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_11`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *손을 저으며* 됐다 됐다, 쑥스럽게. ...가 봐.

---

### `hidden_homeroom_d2_11`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_11_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...전학생이라고 예외 두면 다른 애들이 뭐라 하지.

---

### `hidden_homeroom_d2_11_b`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_12`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *목소리가 커피잔 안쪽에 낮게 묻힌다.*

---

### `hidden_homeroom_d2_12`
- 배경: `teacher_office.png`
- 플래그: `homeroom_day2`, `noticed_manuscript`
- 다음: `morning2_seo_dust_1`

- 캐릭터: `teacher_normal.png`
**{name}**: *교무실을 나서는데 — 서랍에서 봤던 종이뭉치가 머릿속에서 안 떠난다.*

---

### `morning2_seo_dust_1`
- 배경: `school_hallway.png`
- 다음: `morning2_seo_dust_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *1교시가 끝나고 쉬는 시간. 복도에서 서연과 스친다. 서연이 멈춰 내 어깨를 본다. 클립보드를 든 손이 먼저 올라온다.*

---

### `morning2_seo_dust_2`
- 배경: `school_hallway.png`
- 다음: `morning2_seo_dust_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 잠깐.

---

### `morning2_seo_dust_3`
- 배경: `school_hallway.png`
- 다음: `morning2_seo_dust_4`

- 캐릭터: `seyoun_normal.png`
**서연**: *손이 {name}의 어깨에 닿는다. 묻은 먼지를 털어내는 손길에 망설임이 없다.*

---

### `morning2_seo_dust_4`
- 배경: `school_hallway.png`
- 다음: `morning2_seo_dust_5`

- 캐릭터: `seyoun_normal.png`
**서연**: 옷에 뭐 묻었어.

---

### `morning2_seo_dust_5`
- 배경: `school_hallway.png`
- 다음: `morning2_seo_dust_6`

- 캐릭터: `seyoun_normal.png`
**{name}**: ......

---

### `morning2_seo_dust_6`
- 배경: `school_hallway.png`
- 다음: `morning2_dain_react_1`

- 캐릭터: `seyoun_normal.png`
**서연**: 왜 그래? 먼지잖아.

---

### `morning2_dain_react_1`
- 배경: `school_hallway.png`
- 다음: `morning2_dain_react_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *어깨에 닿은 감촉이 한 박자 늦게 의식된다. — 먼지 때문은 아닐 텐데.*

---

### `morning2_dain_react_2`
- 배경: `school_hallway.png`
- 다음: `morning2_dain_react_3`

- 캐릭터: `dain_angry.png`
**{name}**: *서연이 아무렇지 않게 걸어간다. 뒤에서 다인의 목소리.*

---

### `morning2_dain_react_3`
- 배경: `school_hallway.png`
- 다음: `morning2_dain_react_4`

- 캐릭터: `dain_angry.png`
**다인**: 야, 지금 뭐야? 어깨 만진 거야?

---

### `morning2_dain_react_4`
- 배경: `school_hallway.png`
- 다음: `morning2_dain_react_5`

- 캐릭터: `dain_angry.png`
**{name}**: 먼지 털어준 거야.

---

### `morning2_dain_react_5`
- 배경: `school_hallway.png`
- 다음: `morning2_dain_react_6`

- 캐릭터: `dain_angry.png`
**다인**: 먼지... 먼지가 진짜 있었어?

---

### `morning2_dain_react_6`
- 배경: `school_hallway.png`
- 다음: `morning2_end`

- 캐릭터: `dain_angry.png`
**{name}**: *대답 대신 가방끈을 고쳐 잡았다. 다인은 그걸 보고도 더 묻지 않는다.*

---

### `morning2_end`
- 배경: `school_hallway.png`
- 다음: `lunch2_start`

- 캐릭터: `seyoun_normal.png`
**{name}**: *1년 동안 한 번도 먼저 다가간 적 없다는 그 사람이 — 나한테는 먼저 왔다.*

---

## 2일차 — 점심 `day2_2_lunch`

### `lunch2_start`
- 배경: `school_hallway.png`
- BGM: `daily.mp3`
- 다음: `lunch2_choice`

- 캐릭터: `없음`
**{name}**: *점심. 주머니에는 유나의 쪽지가 있다. 복도 끝에서는 서연이 도시락을 들고 옥상 쪽으로 향하고, 다인은 매점 방향으로 손짓한다. 발이 세 방향 앞에서 멈춘다.*

---

### `lunch2_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "유나의 쪽지를 따라 도서관 별관으로" → `lunch2_yuna_1`
  2. "서연을 따라 옥상으로" → `lunch2_seo_1_check`
  3. "다인과 매점으로" → `lunch2_dain_1_check`

- 캐릭터: `없음`
**{name}**: *누구와 함께할까.*

---

### `lunch2_seo_1_check`
- 배경: `school_hallway.png`
- 분기:
  - [`chose_seoyeon_lunch`] → `lunch2_seo_1`
  - [기본] → `lunch2_seo_1b`

- 캐릭터: `없음`
**{name}**: *옥상으로 올라간다.*

---

### `lunch2_seo_1b`
- 배경: `top_school.png`
- BGM: `sunset1.mp3`
- 다음: `lunch2_seo_2b_check`

- 캐릭터: `seyoun_normal.png`
**{name}**: *옥상. 처음 와보는 장소다. 바람이 시원하고, 시야가 탁 트여 있다. 서연이 도시락을 펼치고 있다.*

---

### `lunch2_seo_2b_check`
- 배경: `top_school.png`
- 분기:
  - [`chose_dain_lunch`] → `lunch2_seo_2b_dain`
  - [`chose_yuna_lunch`] → `lunch2_seo_2b_yuna`
  - [기본] → `lunch2_seo_2b`

- 캐릭터: `seyoun_normal.png`

<!-- i18n -->

---

### `lunch2_seo_2b`
- 배경: `top_school.png`
- 스탯: Seoyeon +8
- 다음: `lunch2_seo_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 여기까지 올라왔네. 용기 있다.

---

### `lunch2_seo_2b_dain`
- 배경: `top_school.png`
- 다음: `lunch2_seo_3b_dain`

- 캐릭터: `seyoun_normal.png`
**서연**: 어제는 매점 쪽이더니. 오늘은 여기까지 왔네.

---

### `lunch2_seo_3b_dain`
- 배경: `top_school.png`
- 다음: `lunch2_seo_4b_dain`

- 캐릭터: `seyoun_normal.png`
**{name}**: 어제는 다인이 끌고 갔고, 오늘은 내가 올라오고 싶었어.

---

### `lunch2_seo_4b_dain`
- 배경: `top_school.png`
- 다음: `lunch2_seo_5b_dain`

- 캐릭터: `seyoun_normal.png`
**서연**: ...그건 좀 다르네.

---

### `lunch2_seo_5b_dain`
- 배경: `top_school.png`
- 다음: `lunch2_seo_6b_dain`

- 캐릭터: `seyoun_normal.png`
**{name}**: 바람도 좋고. 네 도시락도 계속 생각났고.

---

### `lunch2_seo_6b_dain`
- 배경: `top_school.png`
- 다음: `lunch2_seo_7`

- 캐릭터: `seyoun_laugh.png`
**서연**: ...솔직하네.

---

### `lunch2_seo_2b_yuna`
- 배경: `top_school.png`
- 다음: `lunch2_seo_3b_yuna`

- 캐릭터: `seyoun_normal.png`
**서연**: 쪽지까지 받고도 옥상으로 왔네.

---

### `lunch2_seo_3b_yuna`
- 배경: `top_school.png`
- 다음: `lunch2_seo_4b_yuna`

- 캐릭터: `seyoun_normal.png`
**{name}**: 어제는 조용한 쪽이었으니까, 오늘은 네 쪽이 궁금했어.

---

### `lunch2_seo_4b_yuna`
- 배경: `top_school.png`
- 다음: `lunch2_seo_5b_yuna`

- 캐릭터: `seyoun_normal.png`
**서연**: ...내 쪽?

---

### `lunch2_seo_5b_yuna`
- 배경: `top_school.png`
- 다음: `lunch2_seo_6b_yuna`

- 캐릭터: `seyoun_normal.png`
**{name}**: 여기 바람이랑, 회장님 도시락이 어떤 조합인지 궁금했거든.

---

### `lunch2_seo_6b_yuna`
- 배경: `top_school.png`
- 다음: `lunch2_seo_7`

- 캐릭터: `seyoun_laugh.png`
**서연**: *피식* 그거, 묘하게 말 되네.

---

### `lunch2_seo_1`
- 배경: `top_school.png`
- BGM: `sunset1.mp3`
- 다음: `lunch2_seo_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *옥상. 어제와 같은 장소. 서연이 도시락을 펼치고 있다.*

---

### `lunch2_seo_2`
- 배경: `top_school.png`
- 스탯: Seoyeon +8
- 다음: `lunch2_seo_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 또 왔네. 맛 들렸나 봐.

---

### `lunch2_seo_3`
- 배경: `top_school.png`
- 다음: `lunch2_seo_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: 밥이 맛있었으니까.

---

### `lunch2_seo_4`
- 배경: `top_school.png`
- 다음: `lunch2_seo_5`

- 캐릭터: `seyoun_laugh.png`
**서연**: 밥 때문이야?

---

### `lunch2_seo_5`
- 배경: `top_school.png`
- 다음: `lunch2_seo_6`

- 캐릭터: `seyoun_laugh.png`
**{name}**: 바람도 좋고.

---

### `lunch2_seo_6`
- 배경: `top_school.png`
- 다음: `lunch2_seo_7`

- 캐릭터: `seyoun_normal.png`
**서연**: ...바람.

---

### `lunch2_seo_7`
- 배경: `top_school.png`
- 다음: `lunch2_seo_9`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연은 더 말하지 않는다. 도시락을 먹는데 — 옥상 문이 열린다. 다인이 올라왔다.*

---

### `lunch2_seo_9`
- 배경: `top_school.png`
- 다음: `lunch2_seo_10`

- 캐릭터: `dain_normal.png`
**다인**: 여기 있었네. 찾았다.

---

### `lunch2_seo_10`
- 배경: `top_school.png`
- 다음: `lunch2_seo_11`

- 캐릭터: `seyoun_normal.png`
**서연**: ...옥상은 허가제인데.

---

### `lunch2_seo_11`
- 배경: `top_school.png`
- 다음: `lunch2_seo_12`

- 캐릭터: `dain_normal.png`
**다인**: 에이, 밥 먹는 데 허가가 어딨어! — 오 뭐야, 도시락이다! 맛있겠다!

---

### `lunch2_seo_12`
- 배경: `top_school.png`
- 분기:
  - [`chose_dain_lunch`] → `lunch2_seo_13`
  - [기본] → `lunch2_seo_13b`

- 캐릭터: `dain_normal.png`
**{name}**: *다인이 거리낌 없이 앉는다. 서연의 미간이 미세하게 좁아진다.*

---

### `lunch2_seo_13`
- 배경: `top_school.png`
- 다음: `lunch2_seo_14`

- 캐릭터: `dain_normal.png`
**다인**: 어제 만났어! 밝은 애더라, 회장님!

---

### `lunch2_seo_13b`
- 배경: `top_school.png`
- 다음: `lunch2_seo_13b_b`

- 캐릭터: `dain_normal.png`
**다인**: 오! 회장님? 반가워요!

---

### `lunch2_seo_13b_b`
- 배경: `top_school.png`
- 다음: `lunch2_seo_14`

- 캐릭터: `seyoun_normal.png`
**서연**: *{name}을 보며* ...밝은 애.

---

### `lunch2_seo_14`
- 배경: `top_school.png`
- 다음: `lunch2_seo_15`

- 캐릭터: `seyoun_normal.png`
**서연**: *다인이 사라진 쪽을 보며* ...에너지가 좀 많네. *도시락 뚜껑을 닫으며, 작게* 원래 여기 혼자 오는 건데.

---

### `lunch2_seo_15`
- 배경: `top_school.png`
- 다음: `lunch2_seo_16`

- 캐릭터: `seyoun_normal.png`
**{name}**: 그냥 아는 사이야.

---

### `lunch2_seo_16`
- 배경: `top_school.png`
- 다음: `lunch2_seo_17`

- 캐릭터: `seyoun_normal.png`
**서연**: 왜, 신경 쓰여?

---

### `lunch2_seo_17`
- 배경: `top_school.png`
- 다음: `lunch2_seo_19`

- 캐릭터: `dain_normal.png`
**{name}**: *다인이 있었다면 크게 웃었을 자리다. 옥상 문, 도시락, {name}의 젓가락 사이로 침묵이 걸린다.*

---

### `lunch2_seo_19`
- 배경: `top_school.png`
- 다음: `lunch2_seo_20`

- 캐릭터: `seyoun_normal.png`
**서연**: *무심한 척 {name}의 입가를 본다.*

---

### `lunch2_seo_20`
- 배경: `top_school.png`
- 다음: `lunch2_seo_choice`

- 캐릭터: `seyoun_normal.png`
**서연**: 입가에 뭐 묻었어. 가만있어 봐.

---

### `lunch2_seo_choice`
- 배경: `top_school.png`
- 선택지:
  1. "가만히 있는다" → `lunch2_seo_c1_1` | Seoyeon +5
  2. "직접 닦을게" → `lunch2_seo_c2_1` | Seoyeon +3

- 캐릭터: `seyoun_normal.png`
**서연**: *손이 다가온다.*

---

### `lunch2_seo_c1_1`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *밥풀을 떼어낸다. 손끝이 잠깐 멈췄다가 곧바로 물러난다.*

---

### `lunch2_seo_c1_2`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_2_b`

- 캐릭터: `seyoun_normal.png`
**서연**: ...됐어.

---

### `lunch2_seo_c1_2_b`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_3`

- 캐릭터: `dain_normal.png`
**다인**: *눈이 커진 채 둘을 번갈아 본다.*

---

### `lunch2_seo_c1_3`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_3_b`

- 캐릭터: `dain_normal.png`
**다인**: 저 지금 뭘 본 거예요?

---

### `lunch2_seo_c1_3_b`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_4`

- 캐릭터: `seyoun_normal.png`
**서연**: *아무렇지 않은 척* 밥풀이었어.

---

### `lunch2_seo_c1_4`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_5`

- 캐릭터: `seyoun_shy.png`
**서연**: ...그게 다야.

---

### `lunch2_seo_c1_5`
- 배경: `top_school.png`
- 다음: `lunch2_seo_end_c1`

- 캐릭터: `seyoun_shy.png`
**{name}**: *밥풀 하나 떼는 데 대화가 이렇게 끊길 일인가. 서연은 아무렇지 않은 척 물병을 집어 든다.*

---

### `lunch2_seo_end_c1`
- 배경: `top_school.png`
- 스탯: Dain -3, Yuna -3
- 다음: `after2_start`

- 캐릭터: `seyoun_shy.png`
**{name}**: *입가를 닦았을 뿐인데, 점심 분위기가 잠깐 끊겼다. 다인이 본 쪽으로 눈이 간다.*

---

### `lunch2_seo_c2_1`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c2_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *손등으로 입가를 닦는다.*

---

### `lunch2_seo_c2_2`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c2_3`

- 캐릭터: `seyoun_pout.png`
**서연**: ...직접 닦으면 번지잖아.

---

### `lunch2_seo_c2_3`
- 배경: `top_school.png`
- 다음: `lunch2_seo_end_c2`

- 캐릭터: `seyoun_pout.png`
**서연**: *웃은 얼굴 그대로 도시락 뚜껑을 맞춘다. 딸깍 소리가 조금 크게 난다.*

---

### `lunch2_seo_end_c2`
- 배경: `top_school.png`
- 스탯: Dain -3, Yuna -3
- 다음: `after2_start`

- 캐릭터: `seyoun_pout.png`
**{name}**: *손등에 아직 밥풀 자국이 남아 있다. 서연은 웃은 채 도시락 끈만 다시 묶는다.*

---

### `lunch2_dain_1_check`
- 배경: `school_hallway.png`
- 분기:
  - [`chose_seoyeon_lunch`] → `lunch2_dain_1b_seo`
  - [`chose_dain_lunch`] → `lunch2_dain_1`
  - [`chose_yuna_lunch`] → `lunch2_dain_1b_yuna`
  - [기본] → `lunch2_dain_1b`

- 캐릭터: `없음`
**{name}**: *매점 쪽으로 향한다.*

---

### `lunch2_dain_1b`
- 배경: `store.png`
- BGM: `daily2.mp3`
- 다음: `lunch2_dain_2`

- 캐릭터: `dain_normal.png`
**{name}**: *다인과 매점으로. 첫 가위바위보 대결.*

---

### `lunch2_dain_1b_seo`
- 배경: `store.png`
- BGM: `daily2.mp3`
- 다음: `lunch2_dain_2b_seo`

- 캐릭터: `dain_normal.png`
**{name}**: *다인과 매점으로. 어제는 도시락이었고, 오늘은 빵 냄새가 먼저 난다.*

---

### `lunch2_dain_2b_seo`
- 배경: `store.png`
- 스탯: Dain +8
- 다음: `lunch2_dain_3b_seo`

- 캐릭터: `dain_normal.png`
**다인**: 오, 회장님 도시락 말고 오늘은 내 쪽이네?

---

### `lunch2_dain_3b_seo`
- 배경: `store.png`
- 다음: `lunch2_dain_4b_seo`

- 캐릭터: `dain_normal.png`
**{name}**: 어제는 회장님이 끌고 갔으니까, 오늘은 네 쪽도 궁금했어.

---

### `lunch2_dain_4b_seo`
- 배경: `store.png`
- 다음: `lunch2_dain_5b`

- 캐릭터: `dain_laugh.png`
**다인**: 좋아. 그 말 취소 못 해. 바로 소보로 걸고 한 판.

---

### `lunch2_dain_1b_yuna`
- 배경: `store.png`
- BGM: `daily2.mp3`
- 다음: `lunch2_dain_2b_yuna`

- 캐릭터: `dain_normal.png`
**{name}**: *다인과 매점으로. 어제는 조용한 도서관이었는데, 오늘은 빵 굽는 냄새와 소음이 먼저 밀려온다.*

---

### `lunch2_dain_2b_yuna`
- 배경: `store.png`
- 스탯: Dain +8
- 다음: `lunch2_dain_3b_yuna`

- 캐릭터: `dain_normal.png`
**다인**: 야, 어제는 그림자처럼 있더니 오늘은 제대로 놀아주는 거지?

---

### `lunch2_dain_3b_yuna`
- 배경: `store.png`
- 다음: `lunch2_dain_4b_yuna`

- 캐릭터: `dain_normal.png`
**{name}**: 조용한 데 갔으면, 시끄러운 데도 가봐야지.

---

### `lunch2_dain_4b_yuna`
- 배경: `store.png`
- 다음: `lunch2_dain_5b`

- 캐릭터: `dain_laugh.png`
**다인**: 좋아. 그 균형감각 인정. 그럼 한 판.

---

### `lunch2_dain_1`
- 배경: `store.png`
- BGM: `daily2.mp3`
- 다음: `lunch2_dain_2`

- 캐릭터: `dain_normal.png`
**{name}**: *다인과 매점으로. 어제의 리벤지 가위바위보.*

---

### `lunch2_dain_2`
- 배경: `store.png`
- 스탯: Dain +8
- 분기:
  - [`chose_dain_lunch`] → `lunch2_dain_3`
  - [기본] → `lunch2_dain_3b`

- 캐릭터: `dain_normal.png`
**다인**: 오늘은 네가 진다. 각오해.

---

### `lunch2_dain_3`
- 배경: `store.png`
- 다음: `lunch2_dain_4`

- 캐릭터: `dain_normal.png`
**{name}**: 어제도 그렇게 말했는데.

---

### `lunch2_dain_4`
- 배경: `store.png`
- 다음: `lunch2_dain_5`

- 캐릭터: `dain_normal.png`
**다인**: 어제는 워밍업이었어.

---

### `lunch2_dain_5`
- 배경: `store.png`
- 다음: `lunch2_dain_6`

- 캐릭터: `dain_normal.png`
**{name}**: *가위바위보. — 다인이 또 진다.*

---

### `lunch2_dain_3b`
- 배경: `store.png`
- 다음: `lunch2_dain_4b`

- 캐릭터: `dain_normal.png`
**{name}**: 정말?

---

### `lunch2_dain_4b`
- 배경: `store.png`
- 다음: `lunch2_dain_5b`

- 캐릭터: `dain_normal.png`
**다인**: 당연하지. 나 원래 잘해.

---

### `lunch2_dain_5b`
- 배경: `store.png`
- 다음: `lunch2_dain_6`

- 캐릭터: `dain_pout.png`
**{name}**: *가위바위보. — 다인이 졌다.*

---

### `lunch2_dain_6`
- 배경: `store.png`
- 다음: `lunch2_dain_7`

- 캐릭터: `dain_pout.png`
**다인**: ...이거 조작 아냐?

---

### `lunch2_dain_7`
- 배경: `store.png`
- 다음: `lunch2_dain_8`

- 캐릭터: `dain_pout.png`
**{name}**: 가위바위보를 어떻게 조작해.

---

### `lunch2_dain_8`
- 배경: `store.png`
- 다음: `lunch2_dain_9`

- 캐릭터: `dain_pout.png`
**다인**: 알았어, 알았어. 이모, 소보로 두 개요.

---

### `lunch2_dain_9`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_10`

- 캐릭터: `seyoun_normal.png`
**{name}**: *빵을 사서 복도 창가 쪽에 선다. — 그때 서연이 지나간다. 도시락 가방을 들고.*

---

### `lunch2_dain_10`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_11`

- 캐릭터: `seyoun_pout.png`
**{name}**: *서연이 이쪽을 본다. 다인 옆에 서서 빵을 먹고 있는 나를 — 한 번 보고 지나간다. 빵 맛이 갑자기 흐려졌다.*

---

### `lunch2_dain_11`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_12`

- 캐릭터: `dain_normal.png`
**다인**: 야, 회장님 왜 저래? 왜 쳐다봐?

---

### `lunch2_dain_12`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_13`

- 캐릭터: `dain_normal.png`
**{name}**: 모르겠는데.

---

### `lunch2_dain_13`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_13_b`

- 캐릭터: `dain_normal.png`
**다인**: 흠... 너 혹시 회장님이랑도 친해?

---

### `lunch2_dain_13_b`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_choice`

- 캐릭터: `dain_normal.png`
**다인**: *소보로를 크게 한 입 베어 문다. 빵가루가 교복 소매 위로 떨어진다.*

---

### `lunch2_dain_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "어제 좀 얘기했어" → `lunch2_dain_c1_1` | Dain -3
  2. "학교 안내 받은 정도?" → `lunch2_dain_c2_1` | Dain +0
  3. "왜, 신경 쓰여?" → `lunch2_dain_c3_1` | Dain +5

- 캐릭터: `dain_normal.png`
**다인**: *{name}을 빤히 본다.*

---

### `lunch2_dain_c1_1`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_end`

- 캐릭터: `dain_pout.png`
**다인**: *표정이 굳는다. 소보로를 한 입 베어 물고, 씹지 않은 채 고개를 돌린다.*

---

### `lunch2_dain_c2_1`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_end`

- 캐릭터: `dain_normal.png`
**다인**: *고개를 끄덕이며 소보로를 한 입 베어 문다. 시선은 매점 유리문 쪽에 있다.*

---

### `lunch2_dain_c3_1`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_c3_2`

- 캐릭터: `dain_shy.png`
**다인**: 뭐야, 웃지 마! *소보로를 반 갈라서 하나 내밀며* ...이거나 먹어.

---

### `lunch2_dain_c3_2`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_end`

- 캐릭터: `dain_shy.png`
**다인**: *소보로 포장지를 쓸데없이 오래 접는다. 조금 전보다 말수가 줄었다.*

---

### `lunch2_dain_end`
- 배경: `school_hallway.png`
- 스탯: Seoyeon -3, Yuna -3
- 다음: `lunch2_dain_end_b`

- 캐릭터: `dain_pout.png`
**{name}**: *다인의 소보로 빵 크런치 소리가 유난히 크다. — 점심시간이 점점 복잡해진다.*

---

### `lunch2_dain_end_b`
- 배경: `playground.png`
- 다음: `lunch2_dain_end_c`

- 캐릭터: `없음`
**{name}**: *5교시 체육. 운동장에서 달리기를 하는데 — 옆 녀석이 급정거하면서 부딪혔다. 팔꿈치가 까졌다. 별거 아닌데 피가 조금 난다.*

---

### `lunch2_dain_end_c`
- 배경: `playground.png`
- 분기:
  - [`nurse_day1`] → `lunch2_dain_end_d`
  - [기본] → `lunch2_dain_end_ins4_first`

- 캐릭터: `없음`
**체육교사**: 보건실 가서 소독 받고 와.

---

### `lunch2_dain_end_d`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_e`

- 캐릭터: `없음`
**{name}**: *보건실 문을 연다. 어제와 같은 소독약 냄새.*

---

### `lunch2_dain_end_e`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_f`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *고개를 들며* 아, 어제의 전학생.

---

### `lunch2_dain_end_ins4_first`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins5_first`

- 캐릭터: `없음`
**{name}**: *보건실 문을 연다. 낯선 소독약 냄새가 코끝을 스친다.*

---

### `lunch2_dain_end_ins5_first`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_f`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *고개를 든다.* 보건실은 처음이지? 전학생 맞지?

---

### `lunch2_dain_end_f`
- 배경: `nurse_room.png`
- 분기:
  - [`nurse_day1`] → `lunch2_dain_end_g`
  - [기본] → `lunch2_dain_end_ins7_first`

- 캐릭터: `nurse_normal.png`
**{name}**: 팔꿈치 좀 까졌는데요.

---

### `lunch2_dain_end_g`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_h`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 또 왔네? 단골 되려고?

---

### `lunch2_dain_end_h`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_i`

- 캐릭터: `nurse_normal.png`
**{name}**: *말투는 어제 그대로다. 시선만 자꾸 무릎 아래로 떨어진다.*

---

### `lunch2_dain_end_ins7_first`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins8_first`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 처음이라 그랬지? 소독 받고 가자.

---

### `lunch2_dain_end_ins8_first`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_i`

- 캐릭터: `nurse_normal.png`
**{name}**: *말투는 여전하다. 시선만 자꾸 무릎 아래로 떨어진다.*

---

### `lunch2_dain_end_i`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_j`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *다가와 팔꿈치를 잡는다. 손이 차갑다.*

---

### `lunch2_dain_end_j`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_k`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 가만있어 봐...

---

### `lunch2_dain_end_k`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_l`

- 캐릭터: `nurse_normal.png`
**{name}**: *소독약 묻은 솜이 상처 주변을 오래 맴돈다. 밴드 모서리가 손등에 빈틈없이 눌린다.*

---

### `lunch2_dain_end_l`
- 배경: `nurse_room.png`
- 분기:
  - [`nurse_day1`] → `lunch2_dain_end_nurse_short1`
  - [기본] → `lunch2_dain_end_m`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *밴드를 붙이며* 움직이지 말고. ...됐다.

---

### `lunch2_dain_end_m`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_n`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *손이 잠깐 멈췄다가 다시 움직인다.*

---

### `lunch2_dain_end_n`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_o`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...차가운 편인데. 오늘 좀 따뜻한가 봐.

---

### `lunch2_dain_end_o`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_p`

- 캐릭터: `nurse_normal.png`
**{name}**: *거짓말이다. 아까 잡았을 때 차가웠다. — 손이 따뜻해진 건 지금이다.*

---

### `lunch2_dain_end_p`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_q`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *빙긋* 정성이야, 정성. 경험에서 나온 노하우지.

---

### `lunch2_dain_end_q`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_r`

- 캐릭터: `nurse_normal.png`
**{name}**: *정성. 이 단어로 다 담기는 게 맞나.*

---

### `lunch2_dain_end_r`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_s`

- 캐릭터: `nurse_normal.png`
**{name}**: *밴드를 확인하는데 책상 서랍에서 연두색 노트가 삐져나와 있다. 열린 페이지 첫 줄. '유진아, 오늘은—' 보건선생님이 서랍을 닫는다.*

---

### `lunch2_dain_end_s`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_t`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *눈을 가늘게 뜨며* 하나만? ...음, 그럼. 나 커피보다 코코아 좋아해. 이게 비밀이야.

---

### `lunch2_dain_end_t`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_u`

- 캐릭터: `nurse_normal.png`
**{name}**: *별것 아닌 비밀인데, 보건선생님은 말하고 나서 책상 모서리를 손톱으로 톡톡 친다.*

---

### `lunch2_dain_end_u`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_v`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *가볍게 웃으며* 비밀. 선생님도 숨기는 거 하나쯤은 있어.

---

### `lunch2_dain_end_v`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_w`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *서랍을 닫는다. 손잡이가 한 번 더 눌린다.*

---

### `lunch2_dain_end_w`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_x`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 자, 끝. 수업 가. — 다음에 오면 진찰 항목 늘린다.

---

### `lunch2_dain_end_x`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_y`

- 캐릭터: `nurse_normal.png`
**{name}**: 안 다치면 올 이유가 없잖아요.

---

### `lunch2_dain_end_y`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_z`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *밴드 포장지를 접다 말고 {name}을 본다.*

---

### `lunch2_dain_end_z`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_b2`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 이유 없어도 와도 돼.

---

### `lunch2_dain_end_b2`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_c2`

- 캐릭터: `nurse_normal.png`
**{name}**: *웃음이 잠깐 비었다. 곧 다시 붙었지만, 늦었다.*

---

### `lunch2_dain_end_c2`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_d2`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *다시 밝은 톤으로* 물론 수업 시간 말고. 방과후에.

---

### `lunch2_dain_end_d2`
- 배경: `nurse_room.png`
- 다음: `after2_start`

- 캐릭터: `nurse_normal.png`
**{name}**: *방금 접은 포장지가 책상 끝에 삐뚤게 놓여 있다.*

---

### `lunch2_dain_end_nurse_short1`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_nurse_short2`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 자, 됐다. 다음에는 안 다치고 와.

---

### `lunch2_dain_end_nurse_short2`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_nurse_short3`

- 캐릭터: `nurse_normal.png`
**{name}**: *밴드를 붙이고 보건실을 나왔다. — 아까 봤을 때보다 좀 더 편한 공간이었다.*

---

### `lunch2_dain_end_nurse_short3`
- 배경: `school_hallway.png`
- 다음: `after2_start`

- 캐릭터: `없음`
**{name}**: *대출대 옆 일정표에 빈칸이 하나 남아 있다. 유나는 그쪽을 보지도 않고 책장을 넘긴다.*

---

### `lunch2_yuna_1`
- 배경: `yuna_hideout.png`
- BGM: `night1.mp3`
- 다음: `lunch2_yuna_intro_check`

- 캐릭터: `yuna_normal.png`
**{name}**: *도서관 별관. 본관보다 오래된 건물이다. 학생이 거의 없다. 계단을 올라가니 복도 끝에 유나가 서 있다. 벽에 기대어 책을 읽고 있다.*

---

### `lunch2_yuna_intro_check`
- 배경: `yuna_hideout.png`
- 분기:
  - [`chose_seoyeon_lunch`] → `lunch2_yuna_3_seo`
  - [`chose_yuna_lunch`] → `lunch2_yuna_3_yuna`
  - [기본] → `lunch2_yuna_3`

- 캐릭터: `yuna_normal.png`

<!-- i18n -->

---

### `lunch2_yuna_3`
- 배경: `yuna_hideout.png`
- 스탯: Yuna +8
- 다음: `lunch2_yuna_4`

- 캐릭터: `yuna_normal.png`
**유나**: ...왔네.

---

### `lunch2_yuna_4`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_5`

- 캐릭터: `yuna_normal.png`
**{name}**: 쪽지 받았거든.

---

### `lunch2_yuna_5`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_6`

- 캐릭터: `yuna_normal.png`
**유나**: 안 올 수도 있었는데.

---

### `lunch2_yuna_6`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_7`

- 캐릭터: `yuna_normal.png`
**{name}**: 왜?

---

### `lunch2_yuna_7`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_8`

- 캐릭터: `yuna_normal.png`
**유나**: 시끄러운 애랑 같이 있길래. 그쪽이 더 재밌잖아.

---

### `lunch2_yuna_8`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_9`

- 캐릭터: `yuna_normal.png`
**{name}**: 피난처가 필요할 때도 있어.

---

### `lunch2_yuna_3_seo`
- 배경: `yuna_hideout.png`
- 스탯: Yuna +8
- 다음: `lunch2_yuna_4_seo`

- 캐릭터: `yuna_normal.png`
**유나**: ...왔네.

---

### `lunch2_yuna_4_seo`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_5_seo`

- 캐릭터: `yuna_normal.png`
**{name}**: 쪽지 받았거든.

---

### `lunch2_yuna_5_seo`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_6_seo`

- 캐릭터: `yuna_normal.png`
**유나**: 어제는 회장 옆이더니.

---

### `lunch2_yuna_6_seo`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_7_seo`

- 캐릭터: `yuna_normal.png`
**{name}**: 오늘은 네가 불러서 왔어.

---

### `lunch2_yuna_7_seo`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_8_seo`

- 캐릭터: `yuna_normal.png`
**유나**: ...의외네.

---

### `lunch2_yuna_8_seo`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_9`

- 캐릭터: `yuna_normal.png`
**{name}**: 그래서 더 와보고 싶었어.

---

### `lunch2_yuna_3_yuna`
- 배경: `yuna_hideout.png`
- 스탯: Yuna +8
- 다음: `lunch2_yuna_4_yuna`

- 캐릭터: `yuna_normal.png`
**유나**: ...또 왔네.

---

### `lunch2_yuna_4_yuna`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_5_yuna`

- 캐릭터: `yuna_normal.png`
**{name}**: 이번엔 쪽지까지 줬잖아.

---

### `lunch2_yuna_5_yuna`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_6_yuna`

- 캐릭터: `yuna_normal.png`
**유나**: 어제도 조용했는데. 오늘도?

---

### `lunch2_yuna_6_yuna`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_7_yuna`

- 캐릭터: `yuna_normal.png`
**{name}**: 어제 편했거든. 그래서 다시 왔어.

---

### `lunch2_yuna_7_yuna`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_8_yuna`

- 캐릭터: `yuna_normal.png`
**유나**: ...그래서.

---

### `lunch2_yuna_8_yuna`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_9`

- 캐릭터: `yuna_normal.png`
**{name}**: 응. 네 옆은 안 불편했어.

---

### `lunch2_yuna_9`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_10`

- 캐릭터: `yuna_smile.png`
**유나**: *책장을 넘긴다. 종이 넘어가는 소리가 전보다 가볍다.*

---

### `lunch2_yuna_10`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_11`

- 캐릭터: `yuna_normal.png`
**유나**: ...그래.

---

### `lunch2_yuna_11`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_13`

- 캐릭터: `yuna_normal.png`
**유나**: *앞장서 걷는다. 별관 깊숙이. 발소리가 작게 울리는 복도 끝에 작은 방이 나온다. 창문으로 햇살이 들어오고, 낡은 소파와 책장이 있다.*

---

### `lunch2_yuna_13`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_14`

- 캐릭터: `yuna_normal.png`
**{name}**: 여기 뭐야? 비밀 독서실?

---

### `lunch2_yuna_14`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_15`

- 캐릭터: `yuna_normal.png`
**유나**: ...여기 아는 사람 거의 없어.

---

### `lunch2_yuna_15`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_16`

- 캐릭터: `yuna_normal.png`
**유나**: *소파에 앉는다. 옆자리를 슬쩍 비워둔다.*

---

### `lunch2_yuna_16`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_17`

- 캐릭터: `yuna_normal.png`
**유나**: 나랑 한 명 더 있었는데.

---

### `lunch2_yuna_17`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_17_b`

- 캐릭터: `yuna_normal.png`
**{name}**: 있었는데?

---

### `lunch2_yuna_17_b`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_choice`

- 캐릭터: `yuna_normal.png`
**유나**: ......

---

### `lunch2_yuna_choice`
- 배경: `yuna_hideout.png`
- 선택지:
  1. "그 사람, 지금은?" → `lunch2_yuna_c1_1` | Yuna +3
  2. "묻지 않고 옆에 앉는다" → `lunch2_yuna_c2_1` | Yuna +5

- 캐릭터: `yuna_normal.png`
**{name}**: *'있었는데' 뒤에 말이 없다. 유나는 책갈피 끝을 책 안쪽으로 밀어 넣는다.*

---

### `lunch2_yuna_c1_1`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c1_2`

- 캐릭터: `yuna_normal.png`
**유나**: ...전학 갔어. 1년 전에.

---

### `lunch2_yuna_c1_2`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c1_3`

- 캐릭터: `yuna_normal.png`
**유나**: *손가락이 책갈피 끝을 꾹 누른다.*

---

### `lunch2_yuna_c1_3`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c1_4`

- 캐릭터: `yuna_normal.png`
**유나**: 연락도 없이.

---

### `lunch2_yuna_c1_4`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c1_5`

- 캐릭터: `yuna_sad.png`
**유나**: *책갈피를 책 안쪽 깊숙이 밀어 넣는다. '있었는데' 뒤로 페이지가 접힌다.*

---

### `lunch2_yuna_c1_5`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c1_6`

- 캐릭터: `yuna_normal.png`
**{name}**: 연락 안 한 거야?

---

### `lunch2_yuna_c1_6`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c1_7`

- 캐릭터: `yuna_normal.png`
**유나**: ...모르겠어. 안 한 건지, 못 한 건지.

---

### `lunch2_yuna_c1_7`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c1_9`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 책을 펼친다. 페이지가 얼굴의 절반을 가린다. 나는 입술을 한 번 깨문다.*

---

### `lunch2_yuna_c1_9`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c1_9_b`

- 캐릭터: `yuna_normal.png`
**{name}**: 그 사람, 혹시 갑자기 가게 된 거야? 원래 그러면 연락도 놓치고 그러잖아.

---

### `lunch2_yuna_c1_9_b`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c1_10`

- 캐릭터: `yuna_angry.png`
**유나**: *눈빛이 순간 차가워진다.*

---

### `lunch2_yuna_c1_10`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c1_11`

- 캐릭터: `yuna_normal.png`
**유나**: ...갑자기가 아니야. 전학이야.

---

### `lunch2_yuna_c1_11`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c1_12`

- 캐릭터: `yuna_normal.png`
**{name}**: 아...

---

### `lunch2_yuna_c1_12`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c1_14`

- 캐릭터: `yuna_normal.png`
**유나**: *손이 책갈피 위에 멈춘다. 책장 넘기는 소리만 크게 울린다.*

---

### `lunch2_yuna_c1_14`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_end`

- 캐릭터: `yuna_normal.png`
**{name}**: *입술을 깨문 채 책등의 낡은 금박만 본다.*

---

### `lunch2_yuna_c2_1`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c2_3`

- 캐릭터: `yuna_normal.png`
**{name}**: *아무 말 없이 옆에 앉는다. 유나가 잠깐 이쪽을 본다. 그리고 자기 책에서 한 권을 꺼내 내 쪽에 놓는다.*

---

### `lunch2_yuna_c2_3`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c2_4`

- 캐릭터: `yuna_normal.png`
**유나**: ...읽어.

---

### `lunch2_yuna_c2_4`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c2_6`

- 캐릭터: `yuna_normal.png`
**{name}**: *말 대신 책을 건네는 거. 침묵 속에서 나란히 책을 읽는다. 창문으로 들어오는 햇살이 따뜻하다.*

---

### `lunch2_yuna_c2_6`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c2_7`

- 캐릭터: `yuna_normal.png`
**유나**: ...여기가 좋은 이유.

---

### `lunch2_yuna_c2_7`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c2_8`

- 캐릭터: `yuna_normal.png`
**{name}**: 응?

---

### `lunch2_yuna_c2_8`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c2_9`

- 캐릭터: `yuna_normal.png`
**유나**: 조용해서. — 근데 혼자가 아니어서.

---

### `lunch2_yuna_c2_9`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_end`

- 캐릭터: `yuna_normal.png`
**유나**: *책장으로 시선을 돌린다. 열린 페이지 위로 햇빛이 조금 더 길어진다.*

---

### `lunch2_yuna_end`
- 배경: `yuna_hideout.png`
- 스탯: Seoyeon -3, Dain -3
- 다음: `after2_start`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나의 '있었는데'가 머릿속에 맴돈다. 책갈피가 꽂힌 페이지를 다시 떠올린다.*

---

## 2일차 — 방과후 `day2_3_afterschool`

### `after2_start`
- 배경: `room_school.png`
- BGM: `sunset1.mp3`
- 다음: `after2_msg_dain`

- 캐릭터: `없음`
**{name}**: *방과후. 핸드폰에 알림이 두 개 와 있다.*

---

### `after2_msg_dain`
- 배경: `room_school.png`
- 다음: `after2_msg_seo`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 체육관 와. 오늘은 진짜 내기다.

---

### `after2_msg_seo`
- 배경: `room_school.png`
- 다음: `after2_msg_yuna`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 학생회실에 올 수 있어? 일손이 부족해서.

---

### `after2_msg_yuna`
- 배경: `room_school.png`
- 분기:
  - [`nurse_day1`] → `after2_nurse_transition`
  - [기본] → `after2_choice`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *유나에게서는 아무 연락이 없다. 가방을 챙기다 보니 주머니에서 아침 쪽지가 나온다. '도서관 별관'이라는 글씨가 접힌 선에 걸려 있다.*

---

### `after2_nurse_transition`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d2_1`

- 캐릭터: `없음`
**{name}**: *팔꿈치가 따끔하다. 보건실에 들러야겠다.*

---

### `hidden_nurse_d2_1`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_2`

- 캐릭터: `nurse_normal.png`
**{name}**: *소매를 걷어 보니 팔꿈치가 조금 까져 있다. 별거 아닌데 피가 조금 난다.*

---

### `hidden_nurse_d2_2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 이틀 연속이면 보건실 멤버십 발급해야 하나.

---

### `hidden_nurse_d2_3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_4`

- 캐릭터: `nurse_normal.png`
**{name}**: 팔꿈치 좀 까졌는데요.

---

### `hidden_nurse_d2_4`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 가만있어 봐...

---

### `hidden_nurse_d2_5`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_choice1`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 여기... 이렇게. 자, 됐다. 이 각도가 제일 오래 가거든.

---

### `hidden_nurse_d2_choice1`
- 배경: `nurse_room.png`
- 선택지:
  1. "손이 따뜻하네요" → `hidden_nurse_d2_choice1_a` | Nurse +10
  2. "밴드 하나에 그렇게까지 정성을" → `hidden_nurse_d2_choice1_b` | Nurse +3

- 캐릭터: `nurse_normal.png`
**{name}**: *밴드를 붙여주는 손이 가깝다.*

---

### `hidden_nurse_d2_choice1_a`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_6`

- 캐릭터: `nurse_shy.png`
**보건선생님**: ...차가운 편인데. 오늘 좀 따뜻한가 봐.

---

### `hidden_nurse_d2_choice1_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *빙긋* 정성이야, 정성. 대충 붙이면 떨어지거든.

---

### `hidden_nurse_d2_6`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_7`

- 캐릭터: `nurse_normal.png`
**{name}**: *밴드를 확인하는데 책상 서랍에서 연두색 노트가 삐져나와 있다. 열린 페이지 첫 줄. '유진아, 오늘은—' 보건선생님이 서랍을 닫는다.*

---

### `hidden_nurse_d2_7`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_choice2`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *서랍을 닫으며* 그건 안 봤지? ...선생님도 숨기는 거 하나쯤은 있어.

---

### `hidden_nurse_d2_choice2`
- 배경: `nurse_room.png`
- 선택지:
  1. "비밀 많으시네요. 하나만 알려주면 안 돼요?" → `hidden_nurse_d2_choice2_a` | Nurse +7
  2. "네, 안 봤어요" → `hidden_nurse_d2_choice2_b` | Nurse +0

- 캐릭터: `nurse_shy.png`
**{name}**: *비밀이라며 웃는데 — 눈은 안 웃고 있다.*

---

### `hidden_nurse_d2_choice2_a`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_8`

- 캐릭터: `nurse_shy.png`
**보건선생님**: *눈을 가늘게 뜨며* 하나만? ...음, 그럼. 나 커피보다 코코아 좋아해. 이게 비밀이야.

---

### `hidden_nurse_d2_choice2_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_8`

- 캐릭터: `nurse_shy.png`
**보건선생님**: *가볍게 웃으며* 비밀. 선생님도 숨기는 거 하나쯤은 있어.

---

### `hidden_nurse_d2_8`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_9`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 자, 다 됐으니까 수업 가. — 다음에는 안 다치고 와.

---

### `hidden_nurse_d2_9`
- 배경: `nurse_room.png`
- 플래그: `nurse_day2`
- 다음: `after2_choice`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 이유 없어도 와도 돼. 물론 수업 시간 말고. 방과후에. *보건실을 나섰다.*

---

### `after2_choice`
- 배경: `room_school.png`
- BGM: `sunset1.mp3`
- 선택지:
  1. "체육관으로 (다인)" → `after2_dain_1`
  2. "학생회실로 (서연)" → `after2_seo_1`
  3. "도서관 별관을 지나가 본다 (유나)" → `after2_yuna_1`

- 캐릭터: `없음`
**{name}**: *어디로 갈까.*

---

### `after2_dain_1`
- 배경: `gym.png`
- BGM: `daily2.mp3`
- 플래그: `chose_dain_after2`
- 스탯: Dain +8
- 다음: `after2_dain_2`

- 캐릭터: `dain_active.png`
**{name}**: *체육관. 다인이 배구 네트 앞에서 준비운동을 하고 있다.*

---

### `after2_dain_2`
- 배경: `gym.png`
- 다음: `after2_dain_3`

- 캐릭터: `dain_sweat.png`
**다인**: 왔어? 늦었어.

---

### `after2_dain_3`
- 배경: `gym.png`
- 다음: `after2_dain_4`

- 캐릭터: `dain_sweat.png`
**{name}**: 5분 전인데.

---

### `after2_dain_4`
- 배경: `gym.png`
- 다음: `after2_dain_5`

- 캐릭터: `dain_sweat.png`
**다인**: 나는 10분 전에 왔거든.

---

### `after2_dain_5`
- 배경: `gym.png`
- 다음: `after2_dain_6`

- 캐릭터: `dain_sweat.png`
**{name}**: *빨리 온 쪽이 너. 나는 안 늦었다.*

---

### `after2_dain_6`
- 배경: `gym.png`
- 다음: `after2_dain_7`

- 캐릭터: `dain_sweat.png`
**다인**: 자, 내기다! 서브 다섯 번, 세 번 이상 넘기면 네 승! 못 하면 오늘 떡볶이 네가 사!

---

### `after2_dain_7`
- 배경: `gym.png`
- 다음: `after2_dain_8`

- 캐릭터: `dain_normal.png`
**{name}**: 갑자기 떡볶이?

---

### `after2_dain_8`
- 배경: `gym.png`
- 다음: `after2_dain_9`

- 캐릭터: `dain_laugh.png`
**다인**: 배고프거든.

---

### `after2_dain_9`
- 배경: `gym.png`
- 다음: `after2_dain_9_b`

- 캐릭터: `dain_normal.png`
**{name}**: *첫 서브는 네트에 걸리고, 두 번째는 선 안쪽에 떨어진다.*

---

### `after2_dain_9_b`
- 배경: `gym.png`
- 다음: `after2_dain_9_c`

- 캐릭터: `dain_normal.png`
**다인**: *눈이 커지며* 어? 봐주려고 했는데 안 되겠네.

---

### `after2_dain_9_c`
- 배경: `gym.png`
- 다음: `after2_dain_9_d`

- 캐릭터: `dain_active.png`
**다인**: *자세를 낮춘다. 눈빛이 달라졌다.*

---

### `after2_dain_9_d`
- 배경: `gym.png`
- 다음: `after2_dain_9_e`

- 캐릭터: `dain_active.png`
**다인**: 진심으로 간다!

---

### `after2_dain_9_e`
- 배경: `gym.png`
- 다음: `after2_dain_9_f`

- 캐릭터: `dain_active.png`
**{name}**: *랠리가 오간다. 빠르고 정확한 움직임 — 근데 착지마다 왼발에 체중이 더 실린다. 오른쪽을 피한다.*

---

### `after2_dain_9_f`
- 배경: `gym.png`
- 다음: `after2_dain_11b`

- 캐릭터: `dain_sweat.png`
**{name}**: *점수판은 3:2. 아슬아슬하게 이겼다. 다인이 일어서며 오른쪽 무릎을 한 번 문지른다. 웃음은 그대로다.*

---

### `after2_dain_11b`
- 배경: `street.png`
- 다음: `after2_dain_12`

- 캐릭터: `dain_laugh.png`
**{name}**: *체육관을 나와 거리를 걸었다.*

---

### `after2_dain_12`
- 배경: `street.png`
- BGM: `daily.mp3`
- 다음: `after2_dain_13`

- 캐릭터: `dain_laugh.png`
**다인**: 졌네. 근데 좀 치는데? 너 운동 안 한다며.

---

### `after2_dain_13`
- 배경: `street.png`
- 다음: `after2_dain_14`

- 캐릭터: `dain_laugh.png`
**{name}**: 안 한다고는 안 했어.

---

### `after2_dain_14`
- 배경: `street.png`
- 다음: `after2_dain_15`

- 캐릭터: `dain_normal.png`
**다인**: *깜짝 놀라며* 뭐야? 속은 거야?

---

### `after2_dain_15`
- 배경: `street.png`
- 다음: `after2_dain_16`

- 캐릭터: `dain_normal.png`
**{name}**: 속인 건 아니고, 물어보지도 않았잖아.

---

### `after2_dain_16`
- 배경: `street.png`
- 호감분기: Dain
  - [25+] → `after2_dain_skinship_1`
  - [기본] → `after2_dain_freetalk`
- 다음: `after2_dain_freetalk`

- 캐릭터: `dain_laugh.png`
**다인**: *주먹으로 어깨를 치며* 이 사기꾼. — 아, 근데 재밌었다!

---

### `after2_dain_skinship_1`
- 배경: `street.png`
- 다음: `after2_dain_skinship_2`

- 캐릭터: `dain_laugh.png`
**다인**: *손을 번쩍 든다. 하이파이브.*

---

### `after2_dain_skinship_2`
- 배경: `street.png`
- 다음: `after2_dain_skinship_3`

- 캐릭터: `dain_shy.png`
**다인**: ...아 미안! 습관이야!

---

### `after2_dain_skinship_3`
- 배경: `street.png`
- 다음: `after2_dain_freetalk`

- 캐릭터: `dain_shy.png`
**{name}**: *손을 뗐다. 안 미안해 보인다. — 손바닥이 아직 뜨겁다.*

---

### `after2_dain_freetalk`
- 배경: `store.png`
- 분기:
  - [`chose_dain_lunch`] → `after2_dain_end`
  - [기본] → `after2_dain_end_first`

- 캐릭터: `dain_normal.png`
**다인**: *떡볶이 컵을 밀어 놓고 젓가락을 든다.* 매운 거 잘 먹는지 오늘 확인한다?

---

### `after2_dain_end`
- 배경: `store.png`
- 다음: `after2_dain_end_b`

- 캐릭터: `dain_laugh.png`
**{name}**: *눈이 반달 모양이다. 어제도 봤던 그 눈.*

---

### `after2_dain_end_first`
- 배경: `store.png`
- 다음: `after2_dain_end_b`

- 캐릭터: `dain_laugh.png`
**{name}**: *눈이 반달 모양이다.*

---

### `after2_dain_end_b`
- 배경: `store.png`
- 다음: `after2_dain_end_2`

- 캐릭터: `dain_laugh.png`
**{name}**: *학교 앞 떡볶이집. 다인이 떡볶이를 후후 불며 말한다.*

---

### `after2_dain_end_2`
- 배경: `store.png`
- 다음: `after2_dain_end_2b`

- 캐릭터: `dain_laugh.png`
**다인**: 야, 너 진짜 운동 좀 아는 거지?

---

### `after2_dain_end_2b`
- 배경: `store.png`
- 다음: `after2_dain_end_2c`

- 캐릭터: `dain_laugh.png`
**{name}**: 조금.

---

### `after2_dain_end_2c`
- 배경: `store.png`
- 다음: `after2_dain_end_2d`

- 캐릭터: `dain_laugh.png`
**다인**: 조금이면 저렇게 못 쳐! — 인정해, 잘한다고.

---

### `after2_dain_end_2d`
- 배경: `store.png`
- 다음: `after2_dain_end_3`

- 캐릭터: `dain_laugh.png`
**{name}**: 다인이가 훨씬 잘하던데.

---

### `after2_dain_end_3`
- 배경: `store.png`
- 다음: `after2_dain_end_3b`

- 캐릭터: `dain_laugh.png`
**다인**: *젓가락을 멈춘다. 아주 짧게.*

---

### `after2_dain_end_3b`
- 배경: `store.png`
- 다음: `after2_dain_end_3c`

- 캐릭터: `dain_laugh.png`
**다인**: ...당연하지. 나 체육 특기생이었거든.

---

### `after2_dain_end_3c`
- 배경: `store.png`
- 다음: `after2_dain_end_3d`

- 캐릭터: `dain_laugh.png`
**{name}**: *'이었거든'. 과거형. — 지금은 묻지 말자.*

---

### `after2_dain_end_3d`
- 배경: `store.png`
- 다음: `after2_dain_end_3e`

- 캐릭터: `dain_laugh.png`
**다인**: 아, 맵다. 물, 물.

---

### `after2_dain_end_3e`
- 배경: `store.png`
- 스탯: Seoyeon -5, Yuna -5
- 다음: `after2_dain_return`

- 캐릭터: `dain_shy.png`
**다인**: *컵을 {name} 쪽으로 밀어놓고, 일부러 큰 소리로 물을 찾는다.*

---

### `after2_dain_return`
- 배경: `school.png`
- 다음: `minsu_warn_gate`

- 캐릭터: `dain_shy.png`
**{name}**: *학교로 돌아오는 길. 교문 앞에 다다랐다.*

---

### `after2_seo_1`
- 배경: `student_room.png`
- BGM: `sunset1.mp3`
- 플래그: `chose_seo_after2`
- 스탯: Seoyeon +8
- 다음: `after2_seo_2`

- 캐릭터: `seyoun_sad.png`
**{name}**: *학생회실. 서연이 서류 더미 앞에 앉아 있다. 혼자.*

---

### `after2_seo_2`
- 배경: `student_room.png`
- 다음: `after2_seo_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 와 줬네. — 솔직히 안 올 줄 알았어.

---

### `after2_seo_3`
- 배경: `student_room.png`
- 다음: `after2_seo_4`

- 캐릭터: `seyoun_laugh.png`
**{name}**: 부르면 가는 타입이야.

---

### `after2_seo_4`
- 배경: `student_room.png`
- 다음: `after2_seo_4_b`

- 캐릭터: `seyoun_normal.png`
**서연**: *살짝 웃으며* 순종적이네.

---

### `after2_seo_4_b`
- 배경: `student_room.png`
- 다음: `after2_seo_5`

- 캐릭터: `seyoun_sad.png`
**서연**: *'부탁' 대신 클립보드를 {name} 쪽으로 돌린다. 할 일 목록 맨 위가 비어 있다.*

---

### `after2_seo_5`
- 배경: `student_room.png`
- 다음: `after2_seo_6`

- 캐릭터: `seyoun_normal.png`
**{name}**: 도와달라고 한 건 너잖아.

---

### `after2_seo_6`
- 배경: `student_room.png`
- 다음: `after2_seo_6_b`

- 캐릭터: `seyoun_normal.png`
**서연**: 부탁이 아니라 기회를 준 거야.

---

### `after2_seo_6_b`
- 배경: `student_room.png`
- 다음: `after2_seo_7`

- 캐릭터: `seyoun_normal.png`
**{name}**: *부탁도 지시처럼 들리게 만드는 재주가 있다. 서류 정리를 시작한다. 행사 예산안, 동아리 신청서. 양이 꽤 많다.*

---

### `after2_seo_7`
- 배경: `student_room.png`
- 다음: `after2_seo_8`

- 캐릭터: `seyoun_normal.png`
**서연**: *바로 돌아서지 않는다. 클립보드 끝이 문 쪽을 가리킨 채, {name}의 발소리를 기다린다.*

---

### `after2_seo_8`
- 배경: `student_room.png`
- 다음: `after2_seo_8a2`

- 캐릭터: `seyoun_normal.png`
**서연**: 이쪽은 날짜순, 저쪽은 동아리별. — 정리하는 건 잘해?

---

### `after2_seo_8a2`
- 배경: `student_room.png`
- 다음: `after2_seo_8a3`

- 캐릭터: `seyoun_normal.png`
**{name}**: 잘하진 않는데, 못하지도 않아.

---

### `after2_seo_8a3`
- 배경: `student_room.png`
- 다음: `after2_seo_8a4`

- 캐릭터: `seyoun_normal.png`
**서연**: 애매하네.

---

### `after2_seo_8a4`
- 배경: `student_room.png`
- 다음: `after2_seo_8b`

- 캐릭터: `seyoun_normal.png`
**{name}**: 칭찬이랑 비슷하잖아. 너도 애매하게 하니까.

---

### `after2_seo_8b`
- 배경: `student_room.png`
- 다음: `after2_seo_8b2`

- 캐릭터: `seyoun_normal.png`
**서연**: *서류에서 눈을 떼고 {name} 쪽을 본다.*

---

### `after2_seo_8b2`
- 배경: `student_room.png`
- 다음: `after2_seo_8b3`

- 캐릭터: `seyoun_sad.png`
**서연**: ...너, 쓸 만하네.

---

### `after2_seo_8b3`
- 배경: `student_room.png`
- 다음: `after2_seo_8b4`

- 캐릭터: `seyoun_normal.png`
**{name}**: 그건 칭찬이야?

---

### `after2_seo_8b4`
- 배경: `student_room.png`
- 다음: `after2_seo_8b4_b`

- 캐릭터: `seyoun_shy.png`
**서연**: 칭찬이야. 받아 둬.

---

### `after2_seo_8b4_b`
- 배경: `student_room.png`
- 다음: `after2_seo_choice1`

- 캐릭터: `seyoun_shy.png`
**서연**: *칭찬이라고 말해놓고 바로 서류를 정리한다. 목을 돌리는 순간, 어깨가 아주 작게 굳는다.*

---

### `after2_seo_choice1`
- 배경: `student_room.png`
- 선택지:
  1. "석양이 예쁜데. 창밖 얘기야." → `after2_seo_sunset_joke` | Seoyeon +5
  2. "목 아파? 쉬면서 해." → `after2_seo_neck_worry` | Seoyeon +3

- 캐릭터: `seyoun_normal.png`
**{name}**: *창밖으로 석양이 들어온다. 서연의 옆얼굴에 주황빛이 번진다. — 뭐라도 말을 걸고 싶어졌다.*

---

### `after2_seo_sunset_joke`
- 배경: `student_room.png`
- 다음: `after2_seo_sunset_joke_b`

- 캐릭터: `seyoun_shy2.png`
**서연**: *잠깐 멈춘다. 안경 뒤 눈가가 먼저 풀린다.*

---

### `after2_seo_sunset_joke_b`
- 배경: `student_room.png`
- 다음: `after2_seo_sunset_react`

- 캐릭터: `seyoun_normal.png`
**서연**: *서류 끝으로 입가를 가리는데도 웃는 게 보인다.*

---

### `after2_seo_sunset_react`
- 배경: `student_room.png`
- 다음: `after2_seo_sunset_react_b`

- 캐릭터: `seyoun_shy2.png`
**서연**: ...그런 말을 그렇게 툭 던지면, 받아 적을 시간도 없잖아.

---

### `after2_seo_sunset_react_b`
- 배경: `student_room.png`
- 다음: `after2_seo_9`

- 캐릭터: `seyoun_normal.png`
**서연**: *서류 끝으로 입가를 가린 채 한동안 창밖을 본다.*

---

### `after2_seo_neck_worry`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_react`

- 캐릭터: `seyoun_normal.png`
**서연**: 괜찮아. 이 정도는 매일이야.

---

### `after2_seo_neck_react`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_react_b`

- 캐릭터: `seyoun_normal.png`
**서연**: *어깨를 돌린다. 뭉친 소리가 난다.*

---

### `after2_seo_neck_react_b`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_react_c`

- 캐릭터: `seyoun_normal.png`
**서연**: 잠깐만. 움직이지 마.

---

### `after2_seo_neck_react_c`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_touch`

- 캐릭터: `seyoun_normal.png`
**서연**: *일어나 {name}의 뒤로 온다. 양손을 어깨 위에 올린다.*

---

### `after2_seo_neck_touch`
- 배경: `student_room.png`
- 호감분기: Seoyeon
  - [30+] → `after2_seo_neck_high`
  - [기본] → `after2_seo_neck_low`
- 다음: `after2_seo_neck_low`

- 캐릭터: `seyoun_normal.png`
**서연**: 많이 뭉쳤다. 잠깐 가만히 있어 봐.

---

### `after2_seo_neck_high`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_high_b`

- 캐릭터: `seyoun_shy.png`
**{name}**: *눈을 감고 몸을 맡긴다.*

---

### `after2_seo_neck_high_b`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_high_c`

- 캐릭터: `seyoun_normal.png`
**서연**: *조용히* ...가만히 있어. 좀만.

---

### `after2_seo_neck_high_c`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_high_2`

- 캐릭터: `seyoun_shy.png`
**{name}**: *누구 손이? 서연 손이 내 어깨 위에 있는데. 말이 뒤집혔다. 서연의 손끝도 어깨 위에서 잠깐 멈춘다.*

---

### `after2_seo_neck_high_2`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_high_2_b`

- 캐릭터: `seyoun_shy.png`
**서연**: *더 낮게* ...조금만 더.

---

### `after2_seo_neck_high_2_b`
- 배경: `student_room.png`
- 다음: `after2_seo_9`

- 캐릭터: `seyoun_shy.png`
**{name}**: *손끝이 목덜미를 눌렀다가 천천히 풀린다. 둘 다 잠깐 말이 없다.*

---

### `after2_seo_neck_low`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_low_b`

- 캐릭터: `seyoun_normal.png`
**{name}**: *몸을 살짝 뺀다.*

---

### `after2_seo_neck_low_b`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_low_c`

- 캐릭터: `seyoun_normal.png`
**{name}**: 갑자기 뭐야.

---

### `after2_seo_neck_low_c`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_low_2`

- 캐릭터: `seyoun_worried.png`
**서연**: *손이 허공에서 잠깐 멈춘다.*

---

### `after2_seo_neck_low_2`
- 배경: `student_room.png`
- 다음: `after2_seo_9`

- 캐릭터: `seyoun_normal.png`
**서연**: *손을 거두며* ...아무것도 아냐.

---

### `after2_seo_9`
- 배경: `student_room.png`
- 다음: `after2_seo_choice2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *노을이 학생회실을 물들인다. 서류 정리가 거의 끝났다.*

---

### `after2_seo_choice2`
- 배경: `student_room.png`
- 선택지:
  1. "좀 더 있을까? 아직 남았지?" → `after2_seo_stay` | Seoyeon +5
  2. "끝났으면 갈게" → `after2_seo_leave` | Seoyeon +0

- 캐릭터: `seyoun_normal.png`
**{name}**: *서류 정리가 거의 끝났다.*

---

### `after2_seo_stay`
- 배경: `student_room.png`
- 다음: `after2_seo_stay_2`

- 캐릭터: `seyoun_shy.png`
**서연**: *서류를 내려놓고 창밖을 본다. 노을빛이 얼굴에 닿는다.*

---

### `after2_seo_stay_2`
- 배경: `student_room.png`
- 다음: `after2_seo_stay_3`

- 캐릭터: `seyoun_shy.png`
**서연**: ...이 시간이 좋아. 학생회실에 혼자 있으면 아무 역할도 안 해도 되니까.

---

### `after2_seo_stay_3`
- 배경: `student_room.png`
- 다음: `after2_seo_stay_3b`

- 캐릭터: `seyoun_shy.png`
**{name}**: 학생회장도 쉴 때가 있어?

---

### `after2_seo_stay_3b`
- 배경: `student_room.png`
- 다음: `after2_seo_stay_3c`

- 캐릭터: `seyoun_shy.png`
**서연**: 없어. — 여기서만 빼고.

---

### `after2_seo_stay_3c`
- 배경: `student_room.png`
- 다음: `after2_seo_end`

- 캐릭터: `seyoun_shy.png`
**{name}**: *서연의 클립보드가 책상 위에 엎어져 있다. 그 위로 노을이 오래 남는다.*

---

### `after2_seo_leave`
- 배경: `student_room.png`
- 다음: `after2_seo_end`

- 캐릭터: `seyoun_normal.png`
**서연**: *고개를 끄덕인다.*

---

### `after2_seo_end`
- 배경: `school_hallway.png`
- 스탯: Dain -5, Yuna -5
- 호감분기: Seoyeon
  - [25+] → `after2_seo_skinship_1`
  - [기본] → `after2_seo_return`
- 다음: `after2_seo_return`

- 캐릭터: `seyoun_normal.png`
**{name}**: *학생회실을 나섰다. 노을이 복도를 물들이고 있다.*

---

### `after2_seo_skinship_1`
- 배경: `school_hallway.png`
- 다음: `after2_seo_skinship_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *손을 뻗는다. 옷깃에 묻은 먼지를 떼어준다. 손이 목에 스친다.*

---

### `after2_seo_skinship_2`
- 배경: `school_hallway.png`
- 다음: `after2_seo_skinship_3`

- 캐릭터: `seyoun_shy.png`
**서연**: *손가락이 멈춘다. 아무 말도 안 하고 고개를 돌린다. 복도 소음만 갑자기 크게 들린다.*

---

### `after2_seo_skinship_3`
- 배경: `school_hallway.png`
- 다음: `after2_seo_return`

- 캐릭터: `seyoun_normal.png`
**서연**: ...먼지 묻었어.

---

### `after2_seo_return`
- 배경: `school.png`
- 다음: `minsu_warn_gate`

- 캐릭터: `seyoun_normal.png`
**{name}**: *학생회실을 나섰다. 교문 쪽으로 걸어간다.*

---

### `after2_yuna_1`
- 배경: `yuna_hideout.png`
- BGM: `night1.mp3`
- 플래그: `chose_yuna_after2`
- 다음: `after2_yuna_1_b`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나한테는 연락이 없었다. 그래도 발은 도서관 쪽으로 간다. 주머니 속 접힌 쪽지가 걸을 때마다 손등에 닿는다.*

---

### `after2_yuna_1_b`
- 배경: `yuna_hideout.png`
- 배경톤: `empty`
- 다음: `after2_yuna_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *별관 복도. 인기척이 없다. — 비밀 독서 공간 문이 살짝 열려 있다.*

---

### `after2_yuna_2`
- 배경: `yuna_hideout.png`
- 스탯: Yuna +8
- 다음: `after2_yuna_2_b`

- 캐릭터: `yuna_normal.png`
**{name}**: *조용히 들어간다. 유나가 소파에서 책을 읽고 있다. 창문으로 노을이 들어오고 있다.*

---

### `after2_yuna_2_b`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_3`

- 캐릭터: `yuna_shy.png`
**유나**: *고개를 든다. 놀라지 않는다.*

---

### `after2_yuna_3`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_4`

- 캐릭터: `yuna_normal.png`
**유나**: ...왔네.

---

### `after2_yuna_4`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_5`

- 캐릭터: `yuna_normal.png`
**{name}**: 부른 적 없잖아.

---

### `after2_yuna_5`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_6`

- 캐릭터: `yuna_normal.png`
**유나**: 불러야 오는 거야?

---

### `after2_yuna_6`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_7`

- 캐릭터: `yuna_normal.png`
**유나**: *책장을 넘기지 않고 손끝만 움직인다.*

---

### `after2_yuna_7`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_8`

- 캐릭터: `yuna_normal.png`
**{name}**: 문이 열려 있길래.

---

### `after2_yuna_8`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_8b`

- 캐릭터: `yuna_normal.png`
**유나**: ...우연히.

---

### `after2_yuna_8b`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_8c`

- 캐릭터: `yuna_shy.png`
**{name}**: *문은 우연처럼 열려 있다. 안쪽 의자에는 이어폰 한쪽이 이미 놓여 있다. 유나가 말없이 옆자리를 턱으로 가리킨다.*

---

### `after2_yuna_8c`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_8d`

- 캐릭터: `yuna_normal.png`
**유나**: 들어봐.

---

### `after2_yuna_8d`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_choice_pre1`

- 캐릭터: `yuna_normal.png`
**{name}**: *조용한 피아노 곡이 흐른다. 노을이 방을 물들이고 있다. 유나가 책을 읽고, 나는 음악을 듣는다. 아무 말이 없다. 음악만 낮게 흐른다.*

---

### `after2_yuna_choice_pre1`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_choice_pre2`

- 캐릭터: `yuna_normal.png`
**유나**: *한참 뒤* ...방과후에 여기 오는 사람.

---

### `after2_yuna_choice_pre2`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_choice_pre3`

- 캐릭터: `yuna_normal.png`
**{name}**: 응?

---

### `after2_yuna_choice_pre3`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_choice_pre3_b`

- 캐릭터: `yuna_normal.png`
**유나**: 선배 이후로 없었어.

---

### `after2_yuna_choice_pre3_b`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_choice`

- 캐릭터: `yuna_shy.png`
**유나**: *유나가 고개를 들고 {name}을 본다. 이어폰 줄이 손가락 사이에 감긴 채 멈춰 있다.*

---

### `after2_yuna_choice`
- 배경: `yuna_hideout.png`
- 선택지:
  1. "매일 올까?" → `after2_yuna_everyday` | Yuna +8
  2. "조용해서 좋다" → `after2_yuna_quiet` | Yuna +5

- 캐릭터: `yuna_normal.png`
**{name}**: *이어폰 줄이 유나의 손가락 사이에서 한 번 더 감긴다.*

---

### `after2_yuna_everyday`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_everyday_b`

- 캐릭터: `yuna_shy.png`
**유나**: *이어폰 줄을 만지작거린다.*

---

### `after2_yuna_everyday_b`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_everyday_react`

- 캐릭터: `yuna_normal.png`
**유나**: ...올 거면 와. 말리지는 않을게.

---

### `after2_yuna_everyday_react`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_everyday_react_b`

- 캐릭터: `yuna_shy.png`
**유나**: ...근데, 매일은 곤란해. 가끔만.

---

### `after2_yuna_everyday_react_b`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_end`

- 캐릭터: `yuna_shy.png`
**{name}**: *허락 같지 않은 말인데, 유나는 책갈피를 빼지 않는다.*

---

### `after2_yuna_quiet`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_quiet_react`

- 캐릭터: `yuna_smile.png`
**유나**: ...그래서 여기가 좋은 거야.

---

### `after2_yuna_quiet_react`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_end`

- 캐릭터: `yuna_smile.png`
**유나**: *아주 작게 웃는다. 다음 페이지가 조용히 넘어간다.*

---

### `after2_yuna_end`
- 배경: `yuna_hideout.png`
- 스탯: Seoyeon -3, Dain -3
- 호감분기: Yuna
  - [25+] → `after2_yuna_skinship_1`
  - [기본] → `after2_yuna_return`
- 다음: `after2_yuna_return`

- 캐릭터: `yuna_smile.png`
**{name}**: *핸드폰에는 다인의 '기다렸는데?'와 서연의 '일정 바뀌면 말은 해줘'가 늦게 와 있다. 유나와 나란히 앉아 있던 자리에는 이어폰 한쪽이 아직 따뜻하다.*

---

### `after2_yuna_skinship_1`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_skinship_2`

- 캐릭터: `yuna_shy.png`
**{name}**: *같은 책을 잡으려다 — 손이 겹쳤다.*

---

### `after2_yuna_skinship_2`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_skinship_3`

- 캐릭터: `yuna_shy.png`
**유나**: *먼저 빼지 않는다. 3초. 시선을 내린다.*

---

### `after2_yuna_skinship_3`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_return`

- 캐릭터: `yuna_normal.png`
**{name}**: *손을 뗐다. 유나가 책을 집어 건넨다. 아무 말 없이.*

---

### `after2_yuna_return`
- 배경: `school.png`
- 다음: `minsu_warn_gate`

- 캐릭터: `yuna_smile.png`
**{name}**: *도서관 별관을 나왔다. 노을이 지고 있다.*

---

### `minsu_warn_gate`
- 배경: `school.png`
- 분기:
  - [`chose_seoyeon_lunch && chose_seo_after2`] → `night2_start`
  - [`chose_dain_lunch && chose_dain_after2`] → `night2_start`
  - [`chose_yuna_lunch && chose_yuna_after2`] → `night2_start`
  - [기본] → `minsu_warn_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `minsu_warn_1`
- 배경: `school.png`
- BGM: `sunset1.mp3`
- 다음: `minsu_warn_1_b`

- 캐릭터: `없음`
**{name}**: *하교길. 교문을 나서는데 — 민수가 뒤에서 따라온다.*

---

### `minsu_warn_1_b`
- 배경: `school.png`
- 다음: `minsu_warn_2`

- 캐릭터: `minsu_normal.png`
**민수**: *성큼 따라와 옆에 나란히 선다.*

---

### `minsu_warn_2`
- 배경: `school.png`
- 다음: `minsu_warn_3`

- 캐릭터: `minsu_smirk.png`
**민수**: 야.

---

### `minsu_warn_3`
- 배경: `school.png`
- 다음: `minsu_warn_4`

- 캐릭터: `minsu_smirk.png`
**{name}**: 왜?

---

### `minsu_warn_4`
- 배경: `school.png`
- 다음: `minsu_warn_4_b`

- 캐릭터: `minsu_smirk.png`
**민수**: 너 요즘 재밌냐?

---

### `minsu_warn_4_b`
- 배경: `school.png`
- 다음: `minsu_warn_5`

- 캐릭터: `minsu_normal.png`
**{name}**: *장난처럼 던진 말인데, 민수 눈은 별로 안 웃고 있다.*

---

### `minsu_warn_5`
- 배경: `school.png`
- 다음: `minsu_warn_6`

- 캐릭터: `minsu_smirk.png`
**{name}**: 갑자기?

---

### `minsu_warn_6`
- 배경: `school.png`
- 다음: `minsu_warn_15_b`

- 캐릭터: `minsu_smirk.png`
**민수**: 서연이, 다인이, 유나. 셋 다 너한테 웃더라. — 뭐, 그냥 그렇다고. *어깨를 으쓱하고 먼저 걸어간다.*

---

### `minsu_warn_15_b`
- 배경: `school.png`
- 다음: `minsu_warn_15_c`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 내일도 내기하자. 종목 바꿔서.

---

### `minsu_warn_15_c`
- 배경: `school.png`
- 다음: `night2_start`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 내일 점심에 옥상 열어놓을게. 와

---

## 2일차 — 밤 `day2_4_night`

### `night2_start`
- 배경: `room_my.png`
- BGM: `night1.mp3`
- 다음: `night2_msg_1`

- 캐릭터: `없음`
**{name}**: *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저 알림이 쏟아진다. 세 명. 동시에.*

---

### `night2_msg_1`
- 배경: `room_my.png`
- 분기:
  - [`chose_dain_after2`] → `night2_msg_dain_specific`
  - [`chose_seo_after2`] → `night2_msg_seo_specific`
  - [`chose_yuna_after2`] → `night2_msg_yuna_specific`
  - [기본] → `night2_msg_generic`

- 캐릭터: `없음`
**{name}**: *세 명에게서 메시지가 왔다.*

---

### `night2_msg_dain_specific`
- 배경: `room_my.png`
- 다음: `night2_msg_dain_specific_2`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 야, 오늘 떡볶이 맛있었다.

---

### `night2_msg_dain_specific_2`
- 배경: `room_my.png`
- 다음: `night2_msg_seo_general`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 내일도 내기하자. 종목 바꿔서.

---

### `night2_msg_seo_general`
- 배경: `room_my.png`
- 다음: `night2_msg_yuna_general`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 내일 점심에 옥상 열어놓을게. 와

---

### `night2_msg_seo_specific`
- 배경: `room_my.png`
- 다음: `night2_msg_seo_specific_2`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 오늘 고마웠어. 덕분에 일찍 끝났어

---

### `night2_msg_seo_specific_2`
- 배경: `room_my.png`
- 다음: `night2_msg_dain_general`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 다음에도 부를지도 모르니까, 각오해 둬

---

### `night2_msg_yuna_specific`
- 배경: `room_my.png`
- 다음: `night2_msg_yuna_specific_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: ...오늘 그 곡. 좋았어

---

### `night2_msg_yuna_specific_2`
- 배경: `room_my.png`
- 다음: `night2_msg_dain_general`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: ...다음에 또 들려줘

---

### `night2_msg_dain_general`
- 배경: `room_my.png`
- 다음: `night2_msg_dain_general_merge`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 야, 내일 매점 가자! 오늘 못 간 거 아직 아쉽거든!

---

### `night2_msg_dain_general_merge`
- 배경: `room_my.png`
- 분기:
  - [`chose_seo_after2`] → `night2_msg_yuna_general`
  - [기본] → `night2_msg_seo_general_alt`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 점심에 옥상 올래? 바람 좋을 거야

---

### `night2_msg_seo_general_alt`
- 배경: `room_my.png`
- 다음: `night2_msg_yuna_general`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 내일 옥상 열어둘게. 시간 되면 와

---

### `night2_msg_yuna_general`
- 배경: `room_my.png`
- 다음: `night2_msg_7`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: ...내일 별관 올 거야?

---

### `night2_msg_generic`
- 배경: `room_my.png`
- 다음: `night2_msg_generic_2`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 야, 내일 매점 갈 거지?

---

### `night2_msg_generic_2`
- 배경: `room_my.png`
- 다음: `night2_msg_generic_3`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 내일 점심 옥상 열어놓을게

---

### `night2_msg_generic_3`
- 배경: `room_my.png`
- 다음: `night2_msg_7`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: ...그 책, 다 읽었어?

---

### `night2_msg_7`
- 배경: `room_my.png`
- 다음: `night2_choice`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *메시지방 세 개가 차례로 열린다. 답장을 쓰기 전에 배터리 표시부터 한 칸 줄어든다.*

---

### `night2_choice`
- 배경: `room_my.png`
- 선택지:
  1. "다인에게 먼저 답장한다" → `night2_reply_dain_1`
  2. "서연에게 먼저 답장한다" → `night2_reply_seo_1`
  3. "유나에게 먼저 답장한다" → `night2_reply_yuna_1`

- 캐릭터: `없음`
**{name}**: *누구에게 먼저 답장할까?*

---

### `night2_reply_dain_1`
- 배경: `room_my.png`
- 스탯: Dain +5
- 다음: `night2_reply_dain_2`

- 캐릭터: `dain_normal.png` @ 0.35
**{name}**: 떡볶이 매웠어 ㅋㅋ

---

### `night2_reply_dain_2`
- 배경: `room_my.png`
- 다음: `night2_reply_dain_3`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 매운 거 못 먹는 거야?

---

### `night2_reply_dain_3`
- 배경: `room_my.png`
- 다음: `night2_reply_dain_4`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 내일은 순한 맛으로 가자.

---

### `night2_reply_dain_4`
- 배경: `room_my.png`
- 다음: `night2_reply_dain_5`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 아 근데 순한 맛은 떡볶이가 아니지ㅋㅋ

---

### `night2_reply_dain_5`
- 배경: `room_my.png`
- 호감분기: Dain
  - [30+] → `night2_reply_dain_react_high`
  - [기본] → `night2_reply_dain_react_default`
- 다음: `night2_reply_dain_react_default`

- 캐릭터: `dain_normal.png` @ 0.35
**{name}**: *또 세 줄 연속이다.*

---

### `night2_reply_dain_react_high`
- 배경: `room_my.png`
- 플래그: `night2_replied_dain`
- 스탯: Dain +2
- 다음: `night2_hidden_check`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 야, 진짜 너 뭐야. 내일 꼭 체육관 와.

---

### `night2_reply_dain_react_default`
- 배경: `room_my.png`
- 플래그: `night2_replied_dain`
- 다음: `night2_hidden_check`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: ㅋㅋ 알겠어. 굿나잇!

---

### `night2_reply_seo_1`
- 배경: `room_my.png`
- 스탯: Seoyeon +3
- 다음: `night2_reply_seo_2`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: 부르면 또 갈게

---

### `night2_reply_seo_2`
- 배경: `room_my.png`
- 다음: `night2_reply_seo_3`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 쉽게 약속하네

---

### `night2_reply_seo_3`
- 배경: `room_my.png`
- 다음: `night2_reply_seo_4`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: 쉬운 약속인데

---

### `night2_reply_seo_4`
- 배경: `room_my.png`
- 다음: `night2_reply_seo_5`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 점심에 옥상 열어둘게. 이번엔 진짜 와

---

### `night2_reply_seo_5`
- 배경: `room_my.png`
- 호감분기: Seoyeon
  - [30+] → `night2_reply_seo_react_high`
  - [기본] → `night2_reply_seo_react_default`
- 다음: `night2_reply_seo_react_default`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: *'이번엔 진짜 와.' — 빠지면 대가가 따르는 톤.*

---

### `night2_reply_seo_react_high`
- 배경: `room_my.png`
- 플래그: `night2_replied_seo`
- 스탯: Seoyeon +2
- 다음: `night2_hidden_check`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: ...너, 꽤 재밌는 사람이야. 내일 점심 옥상에서 볼래?

---

### `night2_reply_seo_react_default`
- 배경: `room_my.png`
- 플래그: `night2_replied_seo`
- 다음: `night2_hidden_check`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: ㅋ 알겠어. 내일 봐.

---

### `night2_reply_yuna_1`
- 배경: `room_my.png`
- 스탯: Yuna +5
- 다음: `night2_reply_yuna_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: 아직 반 정도. 재밌어

---

### `night2_reply_yuna_2`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_3`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: ...다행이네

---

### `night2_reply_yuna_3`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_4`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *잠시 침묵. — 그리고.*

---

### `night2_reply_yuna_4`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_5`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 세 번째 별을 봐

---

### `night2_reply_yuna_5`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_6`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *세 번째 별? 창문 쪽으로 고개를 돌렸다. 밤하늘에 별이 많다. 손가락으로 세다 보니 유리창에 김이 서린다.*

---

### `night2_reply_yuna_6`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_6_b`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 이유는 나중에

---

### `night2_reply_yuna_6_b`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_6_c`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *창문을 열었다. 찬 바람이 들어온다. 별은 많고, 손가락은 세 번째에서 멈춘 채 허공에 떠 있다.*

---

### `night2_reply_yuna_6_c`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_7`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *답장은 거기서 끊긴다. 창문에는 내 손가락 자국이 남아 있다.*

---

### `night2_reply_yuna_7`
- 배경: `room_my.png`
- 호감분기: Yuna
  - [30+] → `night2_reply_yuna_react_high`
  - [기본] → `night2_reply_yuna_react_default`
- 다음: `night2_reply_yuna_react_default`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *내일 밤에도 손가락은 세 번째 별에서 멈출 것이다.*

---

### `night2_reply_yuna_react_high`
- 배경: `room_my.png`
- 플래그: `night2_replied_yuna`
- 스탯: Yuna +2
- 다음: `night2_hidden_check`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: ...이 시간에도 답장하는 사람이 있구나. 내일 도서관에 올래?

---

### `night2_reply_yuna_react_default`
- 배경: `room_my.png`
- 플래그: `night2_replied_yuna`
- 다음: `night2_hidden_check`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: ...응. 잘 자.

---

### `night2_hidden_check`
- 배경: `room_my.png`
- 분기:
  - [`homeroom_day2`] → `night2_hidden_homeroom_1`
  - [`nurse_day2`] → `night2_hidden_nurse_1`
  - [기본] → `night2_end_1`

- 캐릭터: `없음`
**{name}**: *메신저 알림 사이에 — 또 다른 알림이 보인다.*

---

### `night2_hidden_homeroom_1`
- 배경: `room_my.png`
- 다음: `night2_hidden_homeroom_2`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *담임선생님에게서 개인 메시지가 왔다. '오늘 교무실 와줘서 고마웠다. 행정적인 거 끝났으니까 더 안 불러도 된다. ...근데 적응 힘들면 언제든 와.'*

---

### `night2_hidden_homeroom_2`
- 배경: `room_my.png`
- 다음: `night2_hidden_homeroom_3`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *메시지 끝에 마침표가 한참 뒤에 나타난다.*

---

### `night2_hidden_homeroom_3`
- 배경: `room_my.png`
- 분기:
  - [`nurse_day2`] → `night2_hidden_nurse_1`
  - [기본] → `night2_end_1`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *마지막 줄만 다시 읽는다.*

---

### `night2_hidden_nurse_1`
- 배경: `room_my.png`
- 다음: `night2_hidden_nurse_2`

- 캐릭터: `nurse_normal.png` @ 0.35
**{name}**: *건강 관리 앱 알림. '보건실 기록: 전학생 — 팔꿈치 찰과상 (경미). 메모: 밴드 내일 아침에 갈아줄게. 밴드 갈아주는 건 의료 행위니까 거부권 없음.'*

---

### `night2_hidden_nurse_2`
- 배경: `room_my.png`
- 다음: `night2_end_1`

- 캐릭터: `nurse_normal.png` @ 0.35
**{name}**: *밴드 모서리를 엄지로 눌러 본다. 내일 아침 일정이 하나 생겼다.*

---

### `night2_end_1`
- 배경: `room_my.png`
- 다음: `night2_flashback_1`

- 캐릭터: `없음`
**{name}**: *답장을 보내고 핸드폰을 내려놓았다. 둘째 날이 끝났다.*

---

### `night2_flashback_1`
- 배경: `room_my.png`
- 다음: `night2_flashback_2`

- 캐릭터: `없음`
**{name}**: *민수가 한 말이 자꾸 돌아온다. '서연이, 다인이, 유나. 셋 다 너한테 웃더라.'*

---

### `night2_flashback_2`
- 배경: `sojeong_flashback.png`
- 다음: `night2_flashback_3`

- 캐릭터: `없음`
**{name}**: *스크롤을 한참 내렸다. 3개월 전 소풍 사진. 소정이가 내 옆에서 웃고 있다. 다음 사진부터는 소정이 책상이 조금씩 뒤로 밀려 있다. 낙서가 있던 자리 아래쪽은 잘려 있다.*

---

### `night2_flashback_3`
- 배경: `room_my.png`
- 다음: `night2_flashback_5`

- 캐릭터: `없음`
**{name}**: *메모장에는 보내지 않은 문장이 줄줄이 남아 있다. '좋아해.' '선생님, 소정이 책상에—' '오늘도—' 전부 첫 줄에서 끊겼다. 마지막 수정 시간은 새벽 2시 17분이다.*

---

### `night2_flashback_5`
- 배경: `room_my.png`
- 다음: `night2_flashback_7`

- 캐릭터: `없음`
**{name}**: *38번째 메모 아래에는 아무것도 없다. 39번째 제목만 비어 있다. 다음 날, 소정이 자리는 끝까지 비어 있었다. 전학 서류 보호자 서명란에는 아버지 이름이 적혀 있다.*

---

### `night2_flashback_7`
- 배경: `room_my.png`
- 다음: `night2_flashback_8`

- 캐릭터: `없음`
**{name}**: *갤러리를 닫았다. 사진 삭제 버튼 위에 손가락이 멈춘다. 결국 화면을 끈다. 검은 액정에 내 얼굴만 남는다.*

---

### `night2_flashback_8`
- 배경: `room_my.png`
- 다음: `night2_flashback_9`

- 캐릭터: `없음`
**{name}**: *천장을 본다. 오늘 받은 메시지들이 잠금화면에 겹쳐 떠 있다. 서연. 다인. 유나. 셋 다 아직 읽지 않았다.*

---

### `night2_flashback_9`
- 배경: `room_my.png`
- 다음: `night2_flashback_10`

- 캐릭터: `없음`
**{name}**: *소정이 사진을 다시 연다. 옆에 서 있던 나는 카메라를 보고 있다. 소정이는 내 쪽을 보고 있다.*

---

### `night2_flashback_10`
- 배경: `room_my.png`
- 다음: `night2_end_2`

- 캐릭터: `없음`
**{name}**: *답장창을 열었다 닫는다. 세 사람의 이름이 최근 대화 목록 맨 위에 나란히 붙어 있다. 손가락이 어느 하나에도 닿지 못한다.*

---

### `night2_end_2`
- 배경: `room_my.png`
- 다음: `night2_end_2_b`

- 캐릭터: `없음`
**{name}**: *둘째 날이 끝났다. 첫날엔 낯설던 이름들이 이제 잠금화면에 남아 있다. 알림이 꺼진 뒤에도, 화면을 자꾸 다시 켠다.*

---

### `night2_end_2_b`
- 배경: `room_my.png`
- 다음: `night2_end_3_b`

- 캐릭터: `없음`
**{name}**: *그 말이 자꾸 맴돈다. 답장은 아직 못 했다. 대신 알림창을 열었다 닫는 횟수만 늘어난다.*

---

### `night2_end_3_b`
- 배경: `room_my.png`
- 다음: `night2_end_4_b`

- 캐릭터: `없음`
**{name}**: *눈을 감았다. 잠금화면에는 읽지 않은 메시지 숫자만 남아 있다. 화면이 꺼진 뒤에도 손 안이 밝다.*

---

### `night2_end_4_b`
- 배경: `room_my.png`
- 다음: `night2_end_4_c`

- 캐릭터: `없음`
**{name}**: *냉장고를 열었다. 남은 밥, 계란, 김. 도시락통을 꺼내 식탁 위에 올려둔다. 아직 뚜껑은 열지 않았다.*

---

### `night2_end_4_c`
- 배경: `room_my.png`
- 다음: `morning3_start`

- 캐릭터: `없음`
**{name}**: *대충 도시락을 쌌다. 잘 만든 건 아니다. 정성이라고 하기엔 좀 민망한 수준. — 근데 안 하는 것보다는 낫겠지.*

---

# 3일차

## 3일차 — 아침 `day3_1_morning`

### `morning3_start`
- 배경: `school.png`
- BGM: `morning.mp3`
- 다음: `morning3_start_2`

- 캐릭터: `없음`
**{name}**: *셋째 날. 늦잠을 잤다. 알람을 세 번이나 꺼버렸다. 어젯밤 늦게까지 메시지 보느라 늦게 잔 탓이다.*

---

### `morning3_start_2`
- 배경: `school.png`
- 분기:
  - [`homeroom_day2`] → `hidden_homeroom_d3_1`
  - [`nurse_day2`] → `hidden_nurse_d3_check`
  - [기본] → `morning3_gate_branch`

- 캐릭터: `없음`
**{name}**: *전력 질주로 등굣길을 달린다. — 교문이 보인다. 그리고.*

---

### `morning3_gate_branch`
- 배경: `school.png`
- 호감분기:
  - [Seoyeon 1+] → `morning3_seo_gate_1`
  - [Dain 1+] → `morning3_dain_gate_1`
  - [Yuna 1+] → `morning3_yuna_gate_1`
- 다음: `morning3_seo_gate_1`

<!-- i18n -->

---

### `morning3_seo_gate_1`
- 배경: `school.png`
- 호감분기: Seoyeon
  - [35+] → `morning3_seo_gate_warm_1`
  - [15+] → `morning3_seo_gate_2`
  - [기본] → `morning3_seo_gate_cold_1`

- 캐릭터: `seyoun_normal.png`
**{name}**: *교문 앞에 서연이 서 있다. 서두르는 기색 없이.*

---

### `morning3_seo_gate_warm_1`
- 배경: `school.png`
- 다음: `morning3_seo_gate_warm_2`

- 캐릭터: `seyoun_shy.png`
**서연**: *평소와 다르게 교문 앞에서 기다리고 있다.*

---

### `morning3_seo_gate_warm_2`
- 배경: `school.png`
- 다음: `morning3_seo_gate_warm_3`

- 캐릭터: `seyoun_shy.png`
**서연**: ...일찍 온 거 아니야. 학생회 일이 있어서.

---

### `morning3_seo_gate_warm_3`
- 배경: `school.png`
- 다음: `morning3_seo_gate_warm_4`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *손에 아무것도 없다. 서류도, 클립보드도.*

---

### `morning3_seo_gate_warm_4`
- 배경: `school.png`
- 플래그: `morning3_companion_seoyeon`
- 다음: `morning3_classroom_1`

- 캐릭터: `seyoun_laugh.png`
**서연**: *아무 말 없이 나란히 걷기 시작한다. — 교문에서 교실까지, 이 거리가 이렇게 짧았나.*

---

### `morning3_seo_gate_2`
- 배경: `school.png`
- 다음: `morning3_seo_gate_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 늦었네.

---

### `morning3_seo_gate_3`
- 배경: `school.png`
- 다음: `morning3_seo_gate_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: ...서연? 왜 여기서?

---

### `morning3_seo_gate_4`
- 배경: `school.png`
- 다음: `morning3_seo_gate_5`

- 캐릭터: `seyoun_normal.png`
**서연**: 지각하면 어때. 혼자 혼나는 것보단 낫잖아.

---

### `morning3_seo_gate_5`
- 배경: `school.png`
- 다음: `morning3_seo_gate_6`

- 캐릭터: `seyoun_laugh.png`
**{name}**: 그건 아닌데.

---

### `morning3_seo_gate_6`
- 배경: `school.png`
- 다음: `morning3_seo_gate_6_b`

- 캐릭터: `seyoun_normal.png`
**서연**: ...농담이야. 내가 어떻게든 해줄게.

---

### `morning3_seo_gate_6_b`
- 배경: `school.png`
- 다음: `morning3_seo_gate_7`

- 캐릭터: `seyoun_normal.png`
**서연**: *걸어간다. 당당하게. 늦었는데도 서두르지 않는다.*

---

### `morning3_seo_gate_7`
- 배경: `school.png`
- 플래그: `morning3_companion_seoyeon`
- 다음: `morning3_classroom_1`

- 캐릭터: `seyoun_normal.png`
**서연**: *걸어간다. 당당하게. 늦었는데도 서두르지 않는다.*

---

### `morning3_seo_gate_cold_1`
- 배경: `school.png`
- 다음: `morning3_seo_gate_cold_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *지나가다 잠깐 멈춘다.*

---

### `morning3_seo_gate_cold_2`
- 배경: `school.png`
- 다음: `morning3_seo_gate_cold_3`

- 캐릭터: `seyoun_normal.png`
**서연**: ...전학생. 아직 다니고 있었구나.

---

### `morning3_seo_gate_cold_3`
- 배경: `school.png`
- 플래그: `morning3_companion_seoyeon`
- 다음: `morning3_classroom_1`

- 캐릭터: `seyoun_normal.png`
**{name}**: *톤이 사무적이다. 교문을 지나가는 서연의 뒷모습이 멀어진다.*

---

### `morning3_yuna_gate_1`
- 배경: `school.png`
- 호감분기: Yuna
  - [35+] → `morning3_yuna_gate_warm_1`
  - [15+] → `morning3_yuna_gate_2`
  - [기본] → `morning3_yuna_gate_cold_1`

- 캐릭터: `yuna_normal.png`
**{name}**: *교문 앞에서 멍하니 서 있는 유나를 발견한다. 눈이 반쯤 감겨 있다.*

---

### `morning3_yuna_gate_warm_1`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_warm_2`

- 캐릭터: `yuna_shy.png`
**{name}**: *교문 벽에 기대어 서 있던 유나가 쪽지를 건넨다.*

---

### `morning3_yuna_gate_warm_2`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_warm_3`

- 캐릭터: `yuna_shy.png`
**유나**: ...같이 가도 돼?

---

### `morning3_yuna_gate_warm_3`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_warm_4`

- 캐릭터: `yuna_shy.png`
**{name}**: *쪽지를 꺼냈다. '기다렸어.'*

---

### `morning3_yuna_gate_warm_4`
- 배경: `school.png`
- 플래그: `morning3_companion_yuna`
- 다음: `morning3_classroom_1`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나와 나란히 걷는다. 아무 말이 없다. — 이 침묵이 편하다.*

---

### `morning3_yuna_gate_2`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_3`

- 캐릭터: `yuna_normal.png`
**{name}**: 유나? 너도 지각이야?

---

### `morning3_yuna_gate_3`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_4`

- 캐릭터: `yuna_normal.png`
**유나**: ...어제 밤새 책 읽느라.

---

### `morning3_yuna_gate_4`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_5`

- 캐릭터: `yuna_normal.png`
**{name}**: 밤새?

---

### `morning3_yuna_gate_5`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_6`

- 캐릭터: `yuna_normal.png`
**유나**: ...결말이 궁금했어. 멈출 수가 없었어.

---

### `morning3_yuna_gate_6`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_6_b`

- 캐릭터: `yuna_normal.png`
**{name}**: *밤새 책 읽고 지각하는 사람. 유나가 말 없이 가방을 뒤적이더니, 작은 빵을 반으로 갈라 내민다. 가방 안쪽에서 쪽지가 보인다.*

---

### `morning3_yuna_gate_6_b`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_7`

- 캐릭터: `yuna_normal.png`
**{name}**: *쪽지: 아침 안 먹었지. 빵 봉지 아래에 연보라색 잉크가 조금 묻어 있다.*

---

### `morning3_yuna_gate_7`
- 배경: `school.png`
- 플래그: `morning3_companion_yuna`
- 다음: `morning3_classroom_1`

- 캐릭터: `yuna_normal.png`
**유나**: *가방에서 작은 빵을 꺼낸다. 둘이 나눠 먹으며 천천히 교문을 통과한다.*

---

### `morning3_yuna_gate_cold_1`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_cold_2`

- 캐릭터: `yuna_normal.png`
**유나**: *먼저 지나간다. 눈이 마주쳤지만, 고개를 돌린다.*

---

### `morning3_yuna_gate_cold_2`
- 배경: `school.png`
- 플래그: `morning3_companion_yuna`
- 다음: `morning3_classroom_1`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나의 발걸음이 빨라진다. — 벽이 다시 올라간 느낌이다.*

---

### `morning3_dain_gate_1`
- 배경: `school.png`
- 호감분기: Dain
  - [35+] → `morning3_dain_gate_warm_1`
  - [15+] → `morning3_dain_gate_2`
  - [기본] → `morning3_dain_gate_cold_1`

- 캐릭터: `dain_normal.png`
**{name}**: *교문 근처에서 다인이 전력 질주로 달려온다.*

---

### `morning3_dain_gate_warm_1`
- 배경: `school.png`
- 다음: `morning3_dain_gate_warm_2`

- 캐릭터: `dain_laugh.png`
**다인**: *달려오며 팔짱을 낀다.*

---

### `morning3_dain_gate_warm_2`
- 배경: `school.png`
- 다음: `morning3_dain_gate_warm_3`

- 캐릭터: `dain_laugh.png`
**다인**: 야, 늦을 뻔했잖아. 같이 가자.

---

### `morning3_dain_gate_warm_3`
- 배경: `school.png`
- 플래그: `morning3_companion_dain`
- 다음: `morning3_classroom_1`

- 캐릭터: `dain_shy.png`
**{name}**: *다인의 팔이 내 팔에 감겨 있다. 힘이 세다. — 뿌리칠 수도 없고, 뿌리치고 싶지도 않다.*

---

### `morning3_dain_gate_2`
- 배경: `school.png`
- 다음: `morning3_dain_gate_3`

- 캐릭터: `dain_normal.png`
**다인**: 야, 늦었다. 뛰어.

---

### `morning3_dain_gate_3`
- 배경: `school.png`
- 다음: `morning3_dain_gate_4`

- 캐릭터: `dain_normal.png`
**다인**: *다짜고짜 손을 잡고 달리기 시작한다.*

---

### `morning3_dain_gate_4`
- 배경: `school.png`
- 다음: `morning3_dain_gate_4_b`

- 캐릭터: `dain_normal.png`
**{name}**: 잠깐, 왜 손을 잡아?

---

### `morning3_dain_gate_4_b`
- 배경: `school.png`
- 다음: `morning3_dain_gate_5`

- 캐릭터: `dain_normal.png`
**다인**: 이렇게 해야 빨라. 의문 품지 마.

---

### `morning3_dain_gate_5`
- 배경: `school.png`
- 플래그: `morning3_companion_dain`
- 다음: `morning3_dain_gate_5_b`

- 캐릭터: `dain_normal.png`
**{name}**: *손이 뜨겁다. 땀 때문인지, 다인이 잡은 데만 유독 뜨거운 건지. 달리느라 생각할 틈도 없다.*

---

### `morning3_dain_gate_5_b`
- 배경: `school.png`
- 다음: `morning3_classroom_1`

- 캐릭터: `dain_normal.png`
**{name}**: *교문을 넘어가는 순간 다인이 착지하면서 읏 하고 작게 소리를 냈다. 근데 돌아보면 아무렇지 않게 웃고 있다. — 잘못 들은 건가.*

---

### `morning3_dain_gate_cold_1`
- 배경: `school.png`
- 다음: `morning3_dain_gate_cold_2`

- 캐릭터: `dain_normal.png`
**다인**: *다른 친구들과 뛰어간다.*

---

### `morning3_dain_gate_cold_2`
- 배경: `school.png`
- 플래그: `morning3_companion_dain`
- 다음: `morning3_classroom_1`

- 캐릭터: `dain_normal.png`
**다인**: 어, 안녕!

---

### `morning3_classroom_1`
- 배경: `room_school.png`
- 분기:
  - [`morning3_companion_seoyeon`] → `morning3_react_seo_1`
  - [`morning3_companion_yuna`] → `morning3_react_yuna_1`
  - [`morning3_companion_dain`] → `morning3_react_dain_1`
  - [기본] → `morning3_react_seo_1`

- 캐릭터: `없음`
**{name}**: *교실에 들어서자, 서연의 펜이 멈추고 다인의 의자가 뒤로 밀린다. 유나는 책갈피를 같은 페이지에 두 번 끼운다.*

---

### `morning3_react_seo_1`
- 배경: `room_school.png`
- 다음: `morning3_react_seo_2`

- 캐릭터: `dain_normal.png`
**다인**: 야, 회장님이랑 같이 왔어? 아침부터?

---

### `morning3_react_seo_2`
- 배경: `room_school.png`
- 다음: `morning3_date_intro`

- 캐릭터: `yuna_bored.png`
**유나**: *창밖에서 시선을 돌려 잠깐 {name} 쪽을 본다. 곧 다시 창밖을 향한다.*

---

### `morning3_react_yuna_1`
- 배경: `room_school.png`
- 다음: `morning3_react_yuna_1_b`

- 캐릭터: `seyoun_pout.png`
**서연**: 같이 등교? 사이 좋네.

---

### `morning3_react_yuna_1_b`
- 배경: `room_school.png`
- 다음: `morning3_react_yuna_2`

- 캐릭터: `dain_normal.png`
**다인**: *대놓고 교실로 돌아왔다.*

---

### `morning3_react_yuna_2`
- 배경: `room_school.png`
- 다음: `morning3_react_yuna_2_b`

- 캐릭터: `dain_normal.png`
**다인**: 부럽다. 나도 아침에 같이 올 사람 없는데.

---

### `morning3_react_yuna_2_b`
- 배경: `room_school.png`
- 다음: `morning3_date_intro`

- 캐릭터: `seyoun_normal.png`
**서연**: *교실 문 앞에 자연스럽게 선다.*

---

### `morning3_react_dain_1`
- 배경: `room_school.png`
- 다음: `morning3_react_dain_2`

- 캐릭터: `seyoun_normal.png`
**서연**: 아침부터 체력 소모가 심하네. 점심에 도시락 줄까?

---

### `morning3_react_dain_2`
- 배경: `room_school.png`
- 다음: `morning3_date_intro`

- 캐릭터: `yuna_normal.png`
**유나**: *고개를 들지 않은 채 종이 귀퉁이에 짧은 선을 긋는다.*

---

### `morning3_date_intro`
- 배경: `room_school.png`
- 다음: `morning3_date_intro_b`

- 캐릭터: `없음`
**{name}**: *1교시가 끝났다. 쉬는 시간마다 누군가 말을 건다.*

---

### `morning3_date_intro_b`
- 배경: `school_hallway.png`
- 다음: `morning3_date_seo_1`

- 캐릭터: `없음`
**{name}**: *쉬는 시간, 복도로 나왔다. 서연이 먼저 걸음을 맞춘다.*

---

### `hidden_homeroom_d3_1`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d3_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *쉬는 시간. 빈 교실 안에서 펜 긁는 소리가 난다. 담임선생님이 교탁에 앉아 있다. 내가 문 앞에 서자 펜이 멈춘다.*

---

### `hidden_homeroom_d3_3`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_3_b`

- 캐릭터: `teacher_shy.png`
**담임선생님**: ......

---

### `hidden_homeroom_d3_3_b`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *손이 원고지 위에서 멈춘다. 곧 종이가 뒤집힌다.*

---

### `hidden_homeroom_d3_4`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4_b`

- 캐릭터: `teacher_sad.png`
**담임선생님**: ...아무것도 아니야. 업무 서류야. — ...눈치 빠른 건 장점인데, 가끔 단점이야.

---

### `hidden_homeroom_d3_4_b`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4_c`

- 캐릭터: `teacher_sad.png`
**{name}**: *뒤집힌 종이 사이로 손글씨가 빼곡하다. 담임의 손바닥이 종이 모서리를 덮고 있다.*

---

### `hidden_homeroom_d3_4_c`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4_d`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *표정이 평소의 무심함으로 돌아온다. 원고지만 아직 뒤집힌 채다.*

---

### `hidden_homeroom_d3_4_d`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4_e`

- 캐릭터: `teacher_sad.png`
**담임선생님**: ...뭘 봐. 쉬는 시간에 여길 왜 와.

---

### `hidden_homeroom_d3_4_e`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4_f`

- 캐릭터: `teacher_sad.png`
**{name}**: *원고지. 빼곡한 글씨. 담임은 종이를 뒤집어 놓는다. — 물어볼까, 모른 척할까.*

---

### `hidden_homeroom_d3_4_f`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4_g`

- 캐릭터: `teacher_sad.png`
**{name}**: *한 발을 못 떼겠다. 교탁 위 출석부, 성적표 파일, 생활기록부 봉투가 차례로 눈에 들어온다. 담임의 손은 아직 원고지 위에 있다.*

---

### `hidden_homeroom_d3_4_g`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4_h`

- 캐릭터: `teacher_sad.png`
**{name}**: *뒤집힌 원고지 아래로 빨간 펜 자국이 비친다. '보류'라는 두 글자. 내가 본 순간, 담임의 손끝이 종이를 더 세게 눌렀다.*

---

### `hidden_homeroom_d3_4_h`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_choice`

- 캐릭터: `teacher_sad.png`
**{name}**: *모른 척할 수도 있었다. 담임은 종이를 덮지 않는다. 펜 뚜껑을 닫았다가, 다시 연다.*

---

### `hidden_homeroom_d3_choice`
- 배경: `room_school.png`
- 선택지:
  1. "원고지인 거 봤어요. — 소설 쓰시는 거예요?" → `hidden_homeroom_d3_reveal_1` | Teacher +12
  2. "죄송합니다, 안 봤어요." → `hidden_homeroom_d3_hide_1` | Teacher +3

- 캐릭터: `teacher_normal.png`
**{name}**: *원고지다. 들킨 사람의 얼굴을 하고 있다.*

---

### `hidden_homeroom_d3_reveal_1`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_1_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...소설이라고 내놓긴 애매하고. 습작이라고 하기엔 너무 오래 됐고. 7년.

---

### `hidden_homeroom_d3_reveal_1_b`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_1_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 얼마나요?

---

### `hidden_homeroom_d3_reveal_1_c`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_1_d`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 7년. *창밖을 보며* 대학 때 시작했어. 문예창작과.

---

### `hidden_homeroom_d3_reveal_1_d`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_1_e`

- 캐릭터: `teacher_normal.png`
**{name}**: 선생님이 문예창작과요?

---

### `hidden_homeroom_d3_reveal_1_e`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_1_f`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 졸업하고 몇 번 냈어. 떨어졌고. 그 뒤로는... 원서 넣는 쪽이 더 쉬웠지.

---

### `hidden_homeroom_d3_reveal_1_f`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *원고지를 한 장 들어올린다. 글씨가 빼곡하다.*

---

### `hidden_homeroom_d3_reveal_2`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_2_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 마지막 결과 기다리던 날, 전화가 안 왔어. 그날 교대 원서를 썼다.

---

### `hidden_homeroom_d3_reveal_2_b`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_2_c`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 취직하면 접을 줄 알았는데. 서랍을 옮길 때마다 같이 따라오더라.

---

### `hidden_homeroom_d3_reveal_2_c`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d3_reveal_2_d`

- 캐릭터: `teacher_normal.png`
**{name}**: 그래서 여기까지 온 거네요.

---

### `hidden_homeroom_d3_reveal_2_d`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_2_e`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *잠깐 입을 다문다. 그리고 — 한숨을 쉰다. 짧게.*

---

### `hidden_homeroom_d3_reveal_2_e`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_2_f`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...그냥 종이라고 생각하면 편하니까.

---

### `hidden_homeroom_d3_reveal_2_f`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *잠깐 멈춘다. 원고지를 만지작거린다. — 그리고 의자에 기대앉는다.*

---

### `hidden_homeroom_d3_reveal_3`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_3_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 그렇게 국어 교사가 됐어. 웃기지. 아직도 종이 붙잡고 있는 게.

---

### `hidden_homeroom_d3_reveal_3_b`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_3_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 포기한 거예요?

---

### `hidden_homeroom_d3_reveal_3_c`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *원고지를 내려놓는다. 천천히.*

---

### `hidden_homeroom_d3_reveal_4`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d3_reveal_4_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 포기라고 하면 편하겠지. 근데 가끔 이렇게 빈 교실에서 꺼내 보는 걸 보면 — 포기를 못 한 거겠지.

---

### `hidden_homeroom_d3_reveal_4_b`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_4_c`

- 캐릭터: `teacher_normal.png`
**{name}**: *원고지 가장자리마다 손때가 묻어 있다. 담임은 빈 줄 위에 손끝을 올린다.*

---

### `hidden_homeroom_d3_reveal_4_c`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_4_d`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *갑자기 정색하며* ...이거 아무한테도 말하면 안 돼. 학생이 선생님의 이런 모습 알면 곤란해. 뭐, 권위는 원래 별로 없었지만.

---

### `hidden_homeroom_d3_reveal_4_d`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_4_e`

- 캐릭터: `teacher_normal.png`
**{name}**: 비밀이요?

---

### `hidden_homeroom_d3_reveal_4_e`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_4_f`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *머리카락을 넘기며* 비밀이야. — 교육적으로 좋은 본보기는 아니니까. 학생한테 이런 얘기까지 하면.

---

### `hidden_homeroom_d3_reveal_4_f`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_4_g`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *그렇게 말하고도 원고지에서 손을 떼지 못한다.*

---

### `hidden_homeroom_d3_reveal_4_g`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_choice`

- 캐릭터: `teacher_normal.png`
**{name}**: 저는 읽어보고 싶은데요. 그 소설.

---

### `hidden_homeroom_d3_reveal_choice`
- 배경: `room_school.png`
- 선택지:
  1. "7년이면 포기가 아니라 끈기 아니에요?" → `hidden_homeroom_d3_reveal_choice_a` | Teacher +9
  2. "왜 꼭 여기서 쓰세요?" → `hidden_homeroom_d3_reveal_choice_b` | Teacher +3

- 캐릭터: `teacher_normal.png`
**{name}**: *7년. 교탁 위의 원고지가 닳아 있다.*

---

### `hidden_homeroom_d3_reveal_choice_a`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_5`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *멈칫한다. 원고지를 만지던 손이 멈춘다.* ...끈기라고 들으면 덜 초라하네.

---

### `hidden_homeroom_d3_reveal_choice_b`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...교실이 제일 조용하거든. 아이러니하게.

---

### `hidden_homeroom_d3_reveal_5`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_6`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *시선을 돌리며* ...근데 진짜 비밀이다. 다른 선생님들도 모르거든.

---

### `hidden_homeroom_d3_reveal_6`
- 배경: `room_school.png`
- 플래그: `discovered_manuscript`
- 다음: `hidden_homeroom_d3_reveal_6_b`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *웃는다. 손은 여전히 원고지 위에 있다.*

---

### `hidden_homeroom_d3_reveal_6_b`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_6_c`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...그럼 7년 만에 누가 제대로 읽는 거네.

---

### `hidden_homeroom_d3_reveal_6_c`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d3_reveal_6_d`

- 캐릭터: `teacher_smile.png`
**{name}**: *담임이 어색하게 웃는다. 빈 교실의 초침 소리가 커진다.*

---

### `hidden_homeroom_d3_reveal_6_d`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_6_e`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *작게 웃으며* ...네가 오늘 이 교실 앞을 지나가서 다행이네.

---

### `hidden_homeroom_d3_reveal_6_e`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_6_f`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *원고지 귀퉁이를 엄지로 누른다. 종이가 조금 구겨진다.*

---

### `hidden_homeroom_d3_reveal_6_f`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_6_g`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 조용하니까. — 교무실은 커피 냄새도 많고, 다른 선생들 눈치도 보이고.

---

### `hidden_homeroom_d3_reveal_6_g`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d3_end`

- 캐릭터: `teacher_smile.png`
**{name}**: *빈 교실의 시계 초침 소리가 크다. 지운 흔적이 겹친 문장 위에서 시선이 떨어지지 않는다.*

---

### `hidden_homeroom_d3_hide_1`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_end`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...그래, 안 본 걸로 해줘. 부탁이야. — ...고마워.

---

### `hidden_homeroom_d3_end`
- 배경: `room_school.png`
- 플래그: `homeroom_day3`, `homeroom_route_unlocked`
- 다음: `hidden_homeroom_d3_freetalk`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *머리카락을 넘기며 교실을 나선다. 닫힌 문 안쪽에서 펜 뚜껑 소리가 난다.*

---

### `hidden_homeroom_d3_freetalk`
- 배경: `room_school.png`
- 배경톤: `empty`
- 타입: `free_talk`
- 다음: `hidden_nurse_d3_check`
- 컨텍스트: "Day 3 아침. 빈 교실에서 담임선생님이 소설 원고를 쓰고 있는 걸 발견했다. 7년간 숨겨온 비밀. 톤: 가볍게 농담으로 넘기려 하지만, 원고 이야기가 나오면 문장이 짧아진다."
- 성격: "담임선생님은 소설가 지망생이었다. 교사가 되었지만 포기하지 못한 꿈. 들킨 것에 대한 부끄러움과 안도가 공존."

- 캐릭터: `teacher_normal.png`
**담임선생님**: *원고지를 뒤집어 책 밑에 밀어 넣는다.* ...봤으면, 모른 척은 못 하겠네.

---

### `hidden_nurse_d3_check`
- 배경: `room_school.png`
- 분기:
  - [`nurse_day2`] → `hidden_nurse_d3_1`
  - [기본] → `morning3_date_seo_1`

- 캐릭터: `없음`
**{name}**: *쉬는 시간이 끝나간다.*

---

### `hidden_nurse_d3_1`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_1_b`

- 캐릭터: `nurse_normal.png`
**{name}**: *아침 종이 친 뒤에도 자리에서 일어나지 못했다. 손등의 밴드 끝이 들떠 있다. 보건실 문을 연다.*

---

### `hidden_nurse_d3_1_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_1_c`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *고개를 들며* ...어? 오늘은 어디 다쳤어?

---

### `hidden_nurse_d3_1_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_1_d`

- 캐릭터: `nurse_normal.png`
**{name}**: 아프진 않은데요.

---

### `hidden_nurse_d3_1_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_1_e`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 아프지 않은데 보건실에?

---

### `hidden_nurse_d3_1_e`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_2`

- 캐릭터: `nurse_normal.png`
**{name}**: ...좀 쉬고 싶어서요.

---

### `hidden_nurse_d3_2`
- 배경: `nurse_room.png`
- 분기:
  - [`homeroom_day2`] → `hidden_nurse_d3_2_b`
  - [기본] → `hidden_nurse_d3_3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...그럼 왜 왔어? 표정이 안 좋은데.

---

### `hidden_nurse_d3_2_b`
- 배경: `room_school.png`
- 다음: `hidden_nurse_d3_2_c`

- 캐릭터: `teacher_normal.png`
**{name}**: *뒤집힌 원고지와 낮은 목소리가 복도까지 따라온다.*

---

### `hidden_nurse_d3_2_c`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d3_2_d`

- 캐릭터: `teacher_normal.png`
**{name}**: *교실을 나서는데 — 뒤에서 작게.*

---

### `hidden_nurse_d3_2_d`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d3_2_e`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...고마워.

---

### `hidden_nurse_d3_2_e`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d3_3`

- 캐릭터: `없음`
**{name}**: *점심시간 직전. 복도는 시끄러운데 귀에 잘 들어오지 않는다. 보건실 문틈의 소독약 냄새가 아직 손목에 붙어 있다.*

---

### `hidden_nurse_d3_3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_3_b`

- 캐릭터: `nurse_normal.png`
**{name}**: ...좀 쉬고 싶어서요. 그냥... 사람 관계가 복잡해져서.

---

### `hidden_nurse_d3_3_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_3_c`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *컵을 내려놓는다.*

---

### `hidden_nurse_d3_3_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_3_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...앉아.

---

### `hidden_nurse_d3_3_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_4`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *컵을 내려놓는다. 조금 전까지 가볍던 손놀림이 멈춘다. 침대에 앉는다.*

---

### `hidden_nurse_d3_4`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *커튼을 치고 물컵을 건네며* ...앉아. 여기선 좀 편하게 있어도 돼. 천천히 말해도 돼.

---

### `hidden_nurse_d3_5_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_c`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *잠깐 멈춘다. — 눈이 부드러워진다.*

---

### `hidden_nurse_d3_5_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...비슷해? 그럼 여기 온 거 잘한 거다.

---

### `hidden_nurse_d3_5_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_e`

- 캐릭터: `nurse_normal.png`
**{name}**: *'비슷하다'는 말 뒤로 보건선생님의 손이 물컵 위에서 잠깐 멈춘다.*

---

### `hidden_nurse_d3_5_e`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_f`

- 캐릭터: `nurse_normal.png`
**{name}**: ...누구한테 말하기 애매한 것들이요.

---

### `hidden_nurse_d3_5_f`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_g`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *의자를 끌어와 앞에 앉으며* 사람 관계.

---

### `hidden_nurse_d3_5_g`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_h`

- 캐릭터: `nurse_normal.png`
**{name}**: 셋 다 신경 쓰이는데, 결국 한 명은 정해야 해서요.

---

### `hidden_nurse_d3_5_h`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_i`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *잠깐 침묵한다. 그리고.*

---

### `hidden_nurse_d3_5_i`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_j`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그거 연애 상담이야?

---

### `hidden_nurse_d3_5_j`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_k`

- 캐릭터: `nurse_normal.png`
**{name}**: 아, 그런 건 아니...

---

### `hidden_nurse_d3_5_k`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_l`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *피식* 아닌 척하는 게 제일 티 나는 거야.

---

### `hidden_nurse_d3_5_l`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_m`

- 캐릭터: `nurse_normal.png`
**{name}**: *정곡이다.*

---

### `hidden_nurse_d3_5_m`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_n`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 이게 보건 업무에 들어가나... *턱을 괴며* 그래도 들어줄게. 침대 비어 있으니까.

---

### `hidden_nurse_d3_5_n`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_o`

- 캐릭터: `nurse_normal.png`
**{name}**: 선생님도 그런 적 있어요? 여러 사람 사이에서 혼란스러운.

---

### `hidden_nurse_d3_5_o`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_p`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *잠깐 멈춘다. 시선이 창밖으로 간다.*

---

### `hidden_nurse_d3_5_p`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_q`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...있었지. 대학병원에서 일할 때.

---

### `hidden_nurse_d3_5_q`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_choice1`

- 캐릭터: `nurse_normal.png`
**{name}**: 대학병원이요?

---

### `hidden_nurse_d3_choice1`
- 배경: `nurse_room.png`
- 선택지:
  1. "비슷해요." → `hidden_nurse_d3_choice1_a` | Nurse +7
  2. "아뇨, 그냥 좀 복잡해서요" → `hidden_nurse_d3_choice1_b` | Nurse +0

- 캐릭터: `nurse_normal.png`
**{name}**: *...맞는 말이긴 하다.*

---

### `hidden_nurse_d3_choice1_a`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...비슷해? 그럼 여기 온 거 잘한 거다.

---

### `hidden_nurse_d3_choice1_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *고개를 살짝 기울이며* ...그래. 복잡하면 복잡한 대로, 여기서 좀 쉬어.

---

### `hidden_nurse_d3_6`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 대학병원에서 일할 때. 호출벨이 동시에 울리면, 손이 먼저 빈 침대를 세더라. 그게 싫었어.

---

### `hidden_nurse_d3_6_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6_c`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *물컵을 내려놓는다. 컵 바닥의 물기가 둥글게 번진다.*

---

### `hidden_nurse_d3_6_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...그만뒀다기보다. 도망쳤지. *살짝 웃으며* 멋있는 이유 같은 건 없어.

---

### `hidden_nurse_d3_6_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6_e`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *'도망'에서 잠깐 멈춘다. 청진기를 만지는 손끝이 노트 서랍 쪽으로 가려다 멈춘다.*

---

### `hidden_nurse_d3_6_e`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6_f`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...있었지. 못 살린 환자 한 명. *시선이 멀어진다.* 유진이라는 아이. 열일곱 살이었어. 그 일 있고 여기 온 거야.

---

### `hidden_nurse_d3_6_f`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_7`

- 캐릭터: `nurse_normal.png`
**{name}**: *유진. — 어제 노트에서 본 이름이다. 그 편지의 수신인.*

---

### `hidden_nurse_d3_7`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_7_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그래서 여기 왔어. 학교에서는 — 한 명 한 명 제대로 볼 수 있으니까.

---

### `hidden_nurse_d3_7_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *{name}을 본다. 표정이 진지하다.*

---

### `hidden_nurse_d3_8`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 너도 마찬가지야. 다 챙기려고 하지 마. — 진짜 중요한 사람 한 명을 제대로 보는 게 낫지 않겠어?

---

### `hidden_nurse_d3_8_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_c`

- 캐릭터: `nurse_normal.png`
**{name}**: *컵을 쥔 손가락이 멈춰 있다.*

---

### `hidden_nurse_d3_8_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_d`

- 캐릭터: `nurse_normal.png`
**{name}**: ...감사합니다.

---

### `hidden_nurse_d3_8_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_e`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *다시 웃음을 붙인다.* 뭘. 이 정도는 서비스지. 다음엔 안 아파도 들러.

---

### `hidden_nurse_d3_8_e`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_f`

- 캐릭터: `nurse_normal.png`
**{name}**: *'아프든 안 아프든.' 보건실을 나서는데 뒤에서 의자 밀리는 소리가 작게 난다.*

---

### `hidden_nurse_d3_8_f`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_g`

- 캐릭터: `없음`
**{name}**: *복도로 나왔다. 한 발 떼고 멈춘다. 문 안쪽에서 서랍이 열리는 소리. 연두색 노트 모서리와 '유진'이라는 이름이 떠오른다.*

---

### `hidden_nurse_d3_8_g`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_h`

- 캐릭터: `없음`
**{name}**: *손등의 밴드가 조금 뜯겨 있다. 침대와 이름표 사이에 커튼이 흔들린다. '보건교사' 세 글자가 유난히 선명하다.*

---

### `hidden_nurse_d3_8_h`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_choice2`

- 캐릭터: `없음`
**{name}**: *보건실 안에서 종이가 접히는 소리가 난다. 유진에게 쓰다 만 편지들. 손잡이를 잡았다가 놓는다.*

---

### `hidden_nurse_d3_choice2`
- 배경: `nurse_room.png`
- 선택지:
  1. "그래서 병원 그만두신 거예요?" → `hidden_nurse_d3_choice2_a` | Nurse +12
  2. "선생님도 그 한 명이 있어요?" → `hidden_nurse_d3_choice2_b` | Nurse +5

- 캐릭터: `nurse_normal.png`
**보건선생님**: *'한 명'에서 말을 멈췄다. 종이컵 가장자리가 손끝에 눌려 찌그러진다.*

---

### `hidden_nurse_d3_choice2_a`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...그만뒀다기보다. 도망쳤지.

---

### `hidden_nurse_d3_choice2_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...있었지. 못 살린 환자 한 명.

---

### `hidden_nurse_d3_9`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...진짜 중요한 사람. 혹시 그게 선생님이면 어쩌지?

---

### `hidden_nurse_d3_9_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9_c`

- 캐릭터: `nurse_normal.png`
**{name}**: *...뭐? — 발이 멈췄다. 소독약 냄새만 공기 중에 무겁게 가라앉았다. 천천히 돌아봤다.*

---

### `hidden_nurse_d3_9_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *웃고 있지 않다. 청진기를 만지작거리며 창밖만 본다.*

---

### `hidden_nurse_d3_9_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9_e`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *겨우 웃으며* 농담이야. 가 봐.

---

### `hidden_nurse_d3_9_e`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9_f`

- 캐릭터: `nurse_normal.png`
**{name}**: *농담이라고 넘기려는데 발이 안 떨어진다. 커튼 너머 소독약 냄새만 진하다.*

---

### `hidden_nurse_d3_9_f`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_11`

- 캐릭터: `nurse_normal.png`
**{name}**: *소독약 냄새가 갑자기 짙어졌다. 한 발짝 더 가기 전에 돌아봤다. 보건선생님이 창밖을 보고 있다. 웃고 있지 않다.*

---

### `hidden_nurse_d3_11`
- 배경: `nurse_room.png`
- 플래그: `nurse_day3`, `nurse_route_unlocked`
- 다음: `hidden_nurse_d3_freetalk`

- 캐릭터: `nurse_shy.png`
**보건선생님**: ...농담이야. 가 봐.

---

### `hidden_nurse_d3_freetalk`
- 배경: `nurse_room.png`
- 타입: `free_talk`
- 다음: `morning3_date_seo_1`
- 컨텍스트: "Day 3. 관계가 복잡해진 뒤 보건실을 찾았다. 보건선생님이 진지하게 상담해줬다. 대학병원 번아웃 이야기. 톤: 농담으로 시작하되, 병원 이야기가 나오면 말끝을 흐리거나 행동으로 피한다."
- 성격: "보건선생님은 평소 장난스럽지만 진지해지면 말수가 줄어든다. 번아웃 경험을 가진 전문가. 학생 앞에서는 선을 지키려 한다."

- 캐릭터: `nurse_normal.png`
**보건선생님**: *커튼을 반쯤 닫고 의자를 끌어온다.* 오늘은 농담보다 상담이 먼저야.

---

### `morning3_date_seo_1`
- 배경: `school_hallway.png`
- 다음: `morning3_date_seo_choice`

- 캐릭터: `seyoun_normal.png`
**서연**: 이번 주말에 시간 있어? 갈 데가 있는데.

---

### `morning3_date_seo_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "있어. 어디?" → `morning3_date_seo_accept` | Seoyeon +5 | 플래그: `accepted_seoyeon_date`
  2. "좀 바쁜데" → `morning3_date_seo_decline` | Seoyeon -3

- 캐릭터: `seyoun_normal.png`
**서연**: *복도에서 스치며 물어본다.*

---

### `morning3_date_seo_accept`
- 배경: `school_hallway.png`
- 다음: `morning3_date_seo_accept_b`

- 캐릭터: `seyoun_shy.png`
**{name}**: *서연 주말 약속을 수락했다.*

---

### `morning3_date_seo_accept_b`
- 배경: `room_school.png`
- 다음: `morning3_date_dain_1`

- 캐릭터: `seyoun_shy.png`
**{name}**: *교실로 돌아왔다. 수업 하나가 지나고, 또 쉬는 시간이 온다.*

---

### `morning3_date_seo_decline`
- 배경: `school_hallway.png`
- 다음: `morning3_date_seo_decline_b`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연의 제안을 거절했다.*

---

### `morning3_date_seo_decline_b`
- 배경: `room_school.png`
- 다음: `morning3_date_dain_1`

- 캐릭터: `seyoun_normal.png`
**{name}**: *교실로 돌아왔다. 수업 하나가 지나고, 또 쉬는 시간이 온다.*

---

### `morning3_date_dain_1`
- 배경: `room_school.png`
- 다음: `morning3_date_dain_2`

- 캐릭터: `dain_normal.png`
**다인**: 야, 주말에 뭐 해? 같이 오락실 갈래?

---

### `morning3_date_dain_2`
- 배경: `room_school.png`
- 다음: `morning3_date_dain_choice`

- 캐릭터: `dain_normal.png`
**다인**: *손가락이 책상 모서리를 두드리고 있다. 평소보다 빠르다. 의자 다리도 바닥을 짧게 긁는다.*

---

### `morning3_date_dain_choice`
- 배경: `room_school.png`
- 선택지:
  1. "좋아, 콜" → `morning3_date_dain_accept` | Dain +5 | 플래그: `accepted_dain_date`
  2. "주말은 좀..." → `morning3_date_dain_decline` | Dain -3

- 캐릭터: `dain_normal.png`
**다인**: *다음 쉬는 시간에 자리로 와서 물어본다.*

---

### `morning3_date_dain_accept`
- 배경: `room_school.png`
- 다음: `morning3_date_dain_decline_narr`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인 주말 약속을 수락했다.*

---

### `morning3_date_dain_decline`
- 배경: `room_school.png`
- 다음: `morning3_date_dain_decline_narr`

- 캐릭터: `dain_normal.png`
**다인**: 아 그래? 뭐 바쁘면 어쩔 수 없지!

---

### `morning3_date_dain_decline_narr`
- 배경: `room_school.png`
- 다음: `morning3_date_dain_decline_inner_2`

- 캐릭터: `dain_laugh.png`
**다인**: *밝게 웃으며 돌아간다. 종이 치기 직전, 손가락으로 주머니 안쪽을 한 번 두드린다.*

---

### `morning3_date_dain_decline_inner_2`
- 배경: `room_school.png`
- 다음: `morning3_date_yuna_1`

- 캐릭터: `dain_laugh.png`
**{name}**: *눈치 빠르다고 자부하면서. — 정작 중요한 순간에 틀린다.*

---

### `morning3_date_yuna_1`
- 배경: `room_school.png`
- 다음: `morning3_date_yuna_1_b`

- 캐릭터: `yuna_normal.png`
**{name}**: *점심 직전, 유나의 쪽지가 책상 위에 놓여 있다.*

---

### `morning3_date_yuna_1_b`
- 배경: `room_school.png`
- 다음: `morning3_date_yuna_2`

- 캐릭터: `seyoun_normal.png`
**서연**: 오늘 도시락은 계란말이네.

---

### `morning3_date_yuna_2`
- 배경: `room_school.png`
- 다음: `morning3_date_yuna_choice`

- 캐릭터: `yuna_normal.png`
**{name}**: *'주말. 헌책방 가는데. 올 거면 와. — 유나'*

---

### `morning3_date_yuna_choice`
- 배경: `room_school.png`
- 선택지:
  1. "고개를 끄덕여 보인다" → `morning3_date_yuna_accept` | Yuna +5 | 플래그: `accepted_yuna_date`
  2. "작게 고개를 젓는다" → `morning3_date_yuna_decline` | Yuna -3

- 캐릭터: `yuna_normal.png`
**{name}**: *유나의 쪽지를 읽고...*

---

### `morning3_date_yuna_accept`
- 배경: `room_school.png`
- 다음: `morning3_check_multiple`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나 주말 약속을 수락했다.*

---

### `morning3_date_yuna_decline`
- 배경: `room_school.png`
- 다음: `morning3_check_multiple`

- 캐릭터: `yuna_sad.png`
**{name}**: *쪽지를 조용히 접어 주머니에 넣었다. 답장은 쓰지 않았다. 유나가 고개를 살짝 숙이고 책을 덮는다.*

---

### `morning3_check_multiple`
- 배경: `room_school.png`
- 분기:
  - [`accepted_seoyeon_date`] → `morning3_multi_from_seo`
  - [`accepted_dain_date`] → `morning3_multi_from_dain`
  - [`accepted_yuna_date`] → `morning3_multi_from_yuna`
  - [기본] → `morning3_end`

<!-- i18n -->

---

### `morning3_multi_from_seo`
- 배경: `room_school.png`
- 분기:
  - [`accepted_dain_date`] → `morning3_set_multiple`
  - [`accepted_yuna_date`] → `morning3_set_multiple`
  - [기본] → `morning3_end`

<!-- i18n -->

---

### `morning3_multi_from_dain`
- 배경: `room_school.png`
- 분기:
  - [`accepted_yuna_date`] → `morning3_set_multiple`
  - [기본] → `morning3_end`

<!-- i18n -->

---

### `morning3_set_multiple`
- 배경: `room_school.png`
- 플래그: `day3_has_multiple_dates`
- 다음: `morning3_end`

- 캐릭터: `없음`
**{name}**: *...잠깐. 주말 약속이 겹치는데. 이거 어떡하지.*

---

### `morning3_multi_from_yuna`
- 배경: `room_school.png`
- 다음: `morning3_end`

- 캐릭터: `yuna_shy.png`

<!-- i18n -->

---

### `morning3_end`
- 배경: `room_school.png`
- 다음: `morning3_end_b`

- 캐릭터: `없음`
**{name}**: *어느덧 수업이 이어지고 점심시간이 다가온다.*

---

### `morning3_end_b`
- 배경: `room_school.png`
- 다음: `lunch3_start`

- 캐릭터: `yuna_normal.png`
**유나**: ...맛있네.

---

## 3일차 — 점심 `day3_2_lunch`

### `lunch3_start`
- 배경: `room_school.png`
- BGM: `daily.mp3`
- 다음: `lunch3_start_2_b`

- 캐릭터: `yuna_normal.png`
**{name}**: *점심시간. 도시락을 펼치자 세 명이 한자리에 모인다. 서연이 옆에 앉고, 다인이 맞은편에 털썩 앉고, 유나가 구석에서 자기 빵을 먹으며 슬쩍 끼어든다.*

---

### `lunch3_start_2_b`
- 배경: `room_school.png`
- 다음: `lunch3_meal_1`

- 캐릭터: `dain_normal.png`
**다인**: *거침없이 계란말이를 한 입 베어 문다.*

---

### `lunch3_meal_1`
- 배경: `room_school.png`
- 다음: `lunch3_meal_2`

- 캐릭터: `dain_laugh.png`
**다인**: 오, 맛있다.

---

### `lunch3_meal_2`
- 배경: `room_school.png`
- 다음: `lunch3_meal_3`

- 캐릭터: `dain_laugh.png`
**{name}**: 그건 내 거...

---

### `lunch3_meal_3`
- 배경: `room_school.png`
- 다음: `lunch3_meal_4`

- 캐릭터: `seyoun_normal.png`
**서연**: 계란말이 간이 좀 세네. 6점.

---

### `lunch3_meal_4`
- 배경: `room_school.png`
- 다음: `lunch3_meal_5`

- 캐릭터: `seyoun_normal.png`
**{name}**: 점수 매기지 마.

---

### `lunch3_meal_5`
- 배경: `room_school.png`
- 다음: `lunch3_meal_6`

- 캐릭터: `seyoun_normal.png`
**서연**: 10점 만점이야. 나쁜 거 아닌데?

---

### `lunch3_meal_6`
- 배경: `room_school.png`
- 다음: `lunch3_meal_7`

- 캐릭터: `yuna_normal.png`
**유나**: *말없이 젓가락을 뻗어 제일 맛있어 보이는 소시지를 집어간다.*

---

### `lunch3_meal_7`
- 배경: `room_school.png`
- 다음: `lunch3_meal_7_b`

- 캐릭터: `seyoun_normal.png`
**{name}**: ...유나, 그건 내가 제일 좋아하는 건데.

---

### `lunch3_meal_7_b`
- 배경: `room_school.png`
- 다음: `lunch3_meal_8`

- 캐릭터: `yuna_normal.png`
**유나**: *이미 씹으며* ...맛있네.

---

### `lunch3_meal_8`
- 배경: `room_school.png`
- 다음: `lunch3_meal_10`

- 캐릭터: `yuna_bored.png`
**{name}**: *유나가 조용히 젓가락을 든다. 아까보다 속도가 빨라졌다. 약탈당했다. 세 명에게 동시에.*

---

### `lunch3_meal_10`
- 배경: `room_school.png`
- 다음: `lunch3_meal_10_b`

- 캐릭터: `yuna_bored.png`
**{name}**: *마지막 계란말이 하나. 다 같이 먹자고 했다. — 공기가 내려앉았다.*

---

### `lunch3_meal_10_b`
- 배경: `room_school.png`
- 분기:
  - [`accepted_seoyeon_date`] → `lunch3_meal_10_c`
  - [`accepted_dain_date`] → `lunch3_meal_10_d`
  - [`accepted_yuna_date`] → `lunch3_meal_10_e`
  - [기본] → `lunch3_meal_11`

- 캐릭터: `yuna_bored.png`
**{name}**: *아무도 자리를 뜨지 않는다. 웃는 얼굴은 있는데, 셋 다 젓가락을 쉽게 못 든다. 마지막 반찬 하나만 도시락 가운데 남아 있다.*

---

### `lunch3_meal_10_c`
- 배경: `room_school.png`
- 다음: `lunch3_meal_11`

- 캐릭터: `seyoun_normal.png`
**서연**: *젓가락이 잠깐 멈춘다. 곧 학생회장의 얼굴로 돌아오지만, 계란말이는 그대로 남아 있다.*

---

### `lunch3_meal_10_d`
- 배경: `room_school.png`
- 다음: `lunch3_meal_11`

- 캐릭터: `dain_laugh.png`
**다인**: *"다 같이?" 하고 웃는다. 평소 같으면 의자를 끌고 왔을 텐데, 오늘은 앉은 자리에서 움직이지 않는다.*

---

### `lunch3_meal_10_e`
- 배경: `room_school.png`
- 다음: `lunch3_meal_11`

- 캐릭터: `yuna_normal.png`
**유나**: *고개만 끄덕인다. 쪽지를 쓰다 접어서 주머니에 넣는다. 안 건넨다. 종이 끝에 연보라색 점 하나만 번져 있다.*

---

### `lunch3_meal_11`
- 배경: `room_school.png`
- 다음: `lunch3_choice`

- 캐릭터: `yuna_bored.png`
**{name}**: *누구에게 줄까?*

---

### `lunch3_choice`
- 배경: `room_school.png`
- 선택지:
  1. "서연에게 준다" → `lunch3_give_seo_1`
  2. "다인에게 준다" → `lunch3_give_dain_1`
  3. "유나에게 준다" → `lunch3_give_yuna_1`
  4. "다 같이 나눠 먹자" → `lunch3_share_1`

- 캐릭터: `yuna_bored.png`
**{name}**: *마지막 반찬을 누구에게 줄지 고민한다.*

---

### `lunch3_give_seo_1`
- 배경: `room_school.png`
- 플래그: `lunch3_gave_seoyeon`
- 스탯: Seoyeon +5
- 다음: `lunch3_seo_skin_check`

- 캐릭터: `seyoun_normal.png`
**서연**: ...고마워. 역시 너는 센스가 있어.

---

### `lunch3_seo_skin_check`
- 배경: `room_school.png`
- 호감분기: Seoyeon
  - [40+] → `lunch3_seo_skin_1`
  - [기본] → `lunch3_give_seo_2`

- 캐릭터: `seyoun_normal.png`

<!-- i18n -->

---

### `lunch3_seo_skin_1`
- 배경: `room_school.png`
- 다음: `lunch3_seo_skin_2`

- 캐릭터: `seyoun_shy.png`
**{name}**: *도시락을 먹다가 입가에 밥풀이 묻었다. 서연이 손을 뻗어 떼어낸다.*

---

### `lunch3_seo_skin_2`
- 배경: `room_school.png`
- 다음: `lunch3_seo_skin_3`

- 캐릭터: `seyoun_shy.png`
**서연**: ...남 앞에서 좀 신경 써.

---

### `lunch3_seo_skin_3`
- 배경: `room_school.png`
- 플래그: `day3_skinship_seoyeon`
- 다음: `lunch3_give_seo_2`

- 캐릭터: `seyoun_shy.png`
**{name}**: *손을 거둔 서연이 젓가락을 떨어뜨렸다. — 자연스러운 동작처럼 보였지만, 손끝이 살짝 떨리고 있었다.*

---

### `lunch3_give_seo_2`
- 배경: `room_school.png`
- 스탯: Dain -3
- 분기:
  - [`day3_has_multiple_dates`] → `lunch3_give_seo_3`
  - [기본] → `lunch3_seo_witness_1`

- 캐릭터: `dain_pout.png`
**다인**: 에이! 나도 먹고 싶었는데!

---

### `lunch3_seo_witness_1`
- 배경: `school_hallway.png`
- 다음: `lunch3_seo_witness_choice`

- 캐릭터: `dain_sad.png`
**{name}**: *다인이 교실 문 앞에서 멈춰 선다. 서연이 도시락을 받는 모습을 본다. ...아. 돌아간다.*

---

### `lunch3_seo_witness_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "다인!" → `lunch3_seo_chase_dain_1` | Seoyeon -3, Dain +2
  2. "서연에게 집중한다" → `lunch3_seo_focus_1` | Dain -5

- 캐릭터: `dain_sad.png`
**{name}**: *다인의 뒷모습이 복도로 사라지고 있다.*

---

### `lunch3_seo_chase_dain_1`
- 배경: `school_hallway.png`
- 다음: `lunch3_seo_chase_dain_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *도시락을 내려놓는다. 표정이 없다.*

---

### `lunch3_seo_chase_dain_2`
- 배경: `school_hallway.png`
- 다음: `lunch3_seo_chase_dain_2b`

- 캐릭터: `dain_sad.png`
**다인**: ...뭐야.

---

### `lunch3_seo_chase_dain_2b`
- 배경: `room_school.png`
- 다음: `lunch3_give_seo_3`

- 캐릭터: `dain_sad.png`
**{name}**: *교실로 돌아왔다.*

---

### `lunch3_seo_focus_1`
- 배경: `room_school.png`
- 다음: `lunch3_seo_focus_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *다인의 발소리가 복도에서 멀어진다.*

---

### `lunch3_seo_focus_2`
- 배경: `room_school.png`
- 다음: `lunch3_give_seo_3`

- 캐릭터: `seyoun_normal.png`
**서연**: ...신경 쓰여?

---

### `lunch3_give_seo_3`
- 배경: `room_school.png`
- 스탯: Yuna -3
- 분기:
  - [`day3_has_multiple_dates`] → `lunch3_expose_1`
  - [기본] → `lunch3_end`

- 캐릭터: `yuna_sad.png`
**유나**: ......

---

### `lunch3_give_dain_1`
- 배경: `room_school.png`
- 플래그: `lunch3_gave_dain`
- 스탯: Dain +7
- 다음: `lunch3_dain_skin_check`

- 캐릭터: `dain_laugh.png`
**다인**: 진짜? 고마워. {name}, 너 센스 있다.

---

### `lunch3_dain_skin_check`
- 배경: `room_school.png`
- 호감분기: Dain
  - [40+] → `lunch3_dain_skin_1`
  - [기본] → `lunch3_give_dain_2`

- 캐릭터: `dain_laugh.png`

<!-- i18n -->

---

### `lunch3_dain_skin_1`
- 배경: `room_school.png`
- 다음: `lunch3_dain_skin_3`

- 캐릭터: `dain_shy.png`
**{name}**: *점심 내기에서 이겨서 흥분한 다인이 양팔을 벌린다. 안긴다. 1초. 다인이 바로 떨어져 한 걸음 물러나 물병을 집어 든다.*

---

### `lunch3_dain_skin_3`
- 배경: `room_school.png`
- 플래그: `day3_skinship_dain`
- 다음: `lunch3_give_dain_2`

- 캐릭터: `dain_shy.png`
**다인**: 지금 거 카운트 아니야.

---

### `lunch3_give_dain_2`
- 배경: `room_school.png`
- 스탯: Seoyeon -3
- 다음: `lunch3_dain_witness_1`

- 캐릭터: `seyoun_pout.png`
**서연**: ...참나. 내가 점수까지 매겨줬는데.

---

### `lunch3_dain_witness_1`
- 배경: `school_hallway.png`
- 배경톤: `empty`
- 다음: `lunch3_dain_witness_2b`

- 캐릭터: `yuna_sad.png`
**{name}**: *유나가 복도에서 체육관 안을 본다. 다인이 웃고 있다. 유나는 아무 말 없이 걸음을 돌린다. 다음 쉬는 시간, 유나의 자리가 비어 있다.*

---

### `lunch3_dain_witness_2b`
- 배경: `room_school.png`
- 다음: `lunch3_give_dain_3`

- 캐릭터: `yuna_sad.png`
**{name}**: *교실로 돌아왔다.*

---

### `lunch3_give_dain_3`
- 배경: `room_school.png`
- 스탯: Yuna -3
- 분기:
  - [`day3_has_multiple_dates`] → `lunch3_expose_1`
  - [기본] → `lunch3_end`

- 캐릭터: `yuna_sad.png`
**유나**: ......

---

### `lunch3_give_yuna_1`
- 배경: `room_school.png`
- 플래그: `lunch3_gave_yuna`
- 스탯: Yuna +7
- 다음: `lunch3_yuna_skin_check`

- 캐릭터: `yuna_normal.png`
**유나**: ...고마워.

---

### `lunch3_yuna_skin_check`
- 배경: `room_school.png`
- 호감분기: Yuna
  - [40+] → `lunch3_yuna_skin_1`
  - [기본] → `lunch3_give_yuna_2`

- 캐릭터: `yuna_normal.png`

<!-- i18n -->

---

### `lunch3_yuna_skin_1`
- 배경: `room_school.png`
- 다음: `lunch3_yuna_skin_2`

- 캐릭터: `yuna_shy.png`
**{name}**: *쪽지를 건네면서 유나가 손을 잡는다. 놓지 않는다.*

---

### `lunch3_yuna_skin_2`
- 배경: `room_school.png`
- 다음: `lunch3_yuna_skin_3`

- 캐릭터: `yuna_shy.png`
**유나**: ...이건 쪽지 내용이 아니야. 그냥.

---

### `lunch3_yuna_skin_3`
- 배경: `room_school.png`
- 플래그: `day3_skinship_yuna`
- 다음: `lunch3_give_yuna_2`

- 캐릭터: `yuna_shy.png`
**{name}**: *문장이 끝나고 나서야 손을 뗀다.*

---

### `lunch3_give_yuna_2`
- 배경: `room_school.png`
- 스탯: Seoyeon -3
- 다음: `lunch3_yuna_witness_1`

- 캐릭터: `seyoun_pout.png`
**서연**: ...나한테 줄 줄 알았는데.

---

### `lunch3_yuna_witness_1`
- 배경: `room_school.png`
- 다음: `lunch3_yuna_witness_2`

- 캐릭터: `seyoun_normal.png`
**서연**: 도서관에서 도시락 냄새 났다더라. ...유나랑?

---

### `lunch3_yuna_witness_2`
- 배경: `room_school.png`
- 다음: `lunch3_give_yuna_3`

- 캐릭터: `seyoun_normal.png`
**{name}**: *표정이 안 움직인다. 손가락이 컵 옆면을 한 번 두드린다.*

---

### `lunch3_give_yuna_3`
- 배경: `room_school.png`
- 스탯: Dain -3
- 분기:
  - [`day3_has_multiple_dates`] → `lunch3_expose_1`
  - [기본] → `lunch3_end`

- 캐릭터: `dain_pout.png`
**다인**: 뭐야, 나는?

---

### `lunch3_expose_1`
- 배경: `room_school.png`
- 플래그: `day3_caught_multiple_dates`
- 다음: `lunch3_expose_2`

- 캐릭터: `dain_laugh.png`
**{name}**: *그때 — 다인이 먼저 입을 열었다.*

---

### `lunch3_expose_2`
- 배경: `room_school.png`
- 다음: `lunch3_expose_3`

- 캐릭터: `dain_laugh.png`
**다인**: 아 맞다. {name}, 주말에 나랑 오락실 가기로 했잖아. 뭐 먹고 갈까?

---

### `lunch3_expose_3`
- 배경: `room_school.png`
- 다음: `lunch3_expose_4`

- 캐릭터: `dain_laugh.png`
**{name}**: *— 얼어붙었다. 나머지 두 명의 손이 멈춘다.*

---

### `lunch3_expose_4`
- 배경: `room_school.png`
- 다음: `lunch3_expose_5`

- 캐릭터: `dain_laugh.png`
**{name}**: *서연의 젓가락이 멈춘다. 유나의 빵 뜯는 손이 멈춘다.*

---

### `lunch3_expose_5`
- 배경: `room_school.png`
- 다음: `lunch3_expose_6`

- 캐릭터: `seyoun_sad.png`
**서연**: ...오락실?

---

### `lunch3_expose_6`
- 배경: `room_school.png`
- 다음: `lunch3_expose_7`

- 캐릭터: `seyoun_sad.png`
**서연**: 나한테는 같이 갈 데가 있다고 했는데.

---

### `lunch3_expose_7`
- 배경: `room_school.png`
- 다음: `lunch3_expose_7_b`

- 캐릭터: `dain_pout.png`
**다인**: ...잠깐. 나한테도 주말에 같이 놀자고 했는데?

---

### `lunch3_expose_7_b`
- 배경: `room_school.png`
- 다음: `lunch3_expose_9`

- 캐릭터: `dain_pout.png`
**{name}**: *남은 한 명이 조용히 내려놓는다. 유나가 빵을 내려놓는다.*

---

### `lunch3_expose_9`
- 배경: `room_school.png`
- 다음: `lunch3_expose_10`

- 캐릭터: `yuna_normal.png`
**유나**: 알고 있었어.

---

### `lunch3_expose_10`
- 배경: `room_school.png`
- 다음: `lunch3_expose_11`

- 캐릭터: `yuna_normal.png`
**{name}**: *잠시 침묵.*

---

### `lunch3_expose_11`
- 배경: `room_school.png`
- 다음: `lunch3_expose_12`

- 캐릭터: `yuna_sad.png`
**유나**: ...거짓말. 나도 몰랐어.

---

### `lunch3_expose_12`
- 배경: `room_school.png`
- 다음: `lunch3_expose_14`

- 캐릭터: `yuna_sad.png`
**{name}**: *세 쌍의 젓가락이 멈췄다. 급식실 소음이 갑자기 먼 데서 들린다. 옆 테이블에서 민수가 이쪽을 보고 있다. 고개를 절레절레 흔든다.*

---

### `lunch3_expose_14`
- 배경: `room_school.png`
- 다음: `lunch3_expose_15`

- 캐릭터: `minsu_smirk.png`
**민수**: ...야. 너 진짜 미쳤냐.

---

### `lunch3_expose_15`
- 배경: `room_school.png`
- 다음: `lunch3_expose_choice`

- 캐릭터: `minsu_smirk.png`
**{name}**: *입이 떨어지지 않는다. 민수가 고개를 돌려버린다.*

---

### `lunch3_expose_choice`
- 배경: `room_school.png`
- 선택지:
  1. "미안해. 다 좋은 사람이라 거절을 못 했어." → `lunch3_expose_honest_1` | Seoyeon -5, Yuna -5, Dain -5
  2. "시간대가 다르니까 괜찮지 않을까..." → `lunch3_expose_excuse_1` | Seoyeon -8, Yuna -8, Dain -8
  3. "도망친다" → `lunch3_expose_run_1` | Seoyeon -10, Yuna -10, Dain -10

- 캐릭터: `seyoun_angry.png`
**{name}**: *뭐라고 해야 하지...*

---

### `lunch3_expose_honest_1`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_2`

- 캐릭터: `seyoun_angry.png`
**{name}**: 미안해. 다 좋은 사람이라 거절을 못 했어.

---

### `lunch3_expose_honest_2`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_3`

- 캐릭터: `seyoun_sad.png`
**서연**: ...거절을 못 해서. — 그게 제일 잔인해, {name}.

---

### `lunch3_expose_honest_3`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_4`

- 캐릭터: `seyoun_sad.png`
**서연**: 거절 못 하는 다정함이 — 가짜 희망을 주거든.

---

### `lunch3_expose_honest_4`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_4_b`

- 캐릭터: `seyoun_sad.png`
**서연**: *도시락 뚜껑을 닫는다.*

---

### `lunch3_expose_honest_4_b`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_5`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연의 미소가 그대로 멈춘다. 젓가락 끝이 도시락 뚜껑 위에서 딱, 하고 닿는다.*

---

### `lunch3_expose_honest_5`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_6`

- 캐릭터: `seyoun_angry.png`
**서연**: 난 애매한 자리 안 해. 그럴 바엔 아예 빠질래.

---

### `lunch3_expose_honest_6`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_7`

- 캐릭터: `seyoun_angry.png`
**서연**: *자리를 뜬다.*

---

### `lunch3_expose_honest_7`
- 배경: `room_school.png`
- 플래그: `day3_dain_no_exclamation`
- 다음: `lunch3_end`

- 캐릭터: `dain_sad.png`
**{name}**: *느낌표가 없다. 다인의 문장 끝이 낯설게 조용하다.*

---

### `lunch3_expose_excuse_1`
- 배경: `room_school.png`
- 다음: `lunch3_expose_excuse_2`

- 캐릭터: `seyoun_angry.png`
**{name}**: 시간대가 다르니까 괜찮지 않을까...

---

### `lunch3_expose_excuse_2`
- 배경: `room_school.png`
- 다음: `lunch3_expose_excuse_2_b`

- 캐릭터: `seyoun_angry.png`
**서연**: ...그게 문제라는 걸 모르겠어?

---

### `lunch3_expose_excuse_2_b`
- 배경: `room_school.png`
- 다음: `lunch3_expose_excuse_3`

- 캐릭터: `dain_sad.png`
**다인**: *일어선다.*

---

### `lunch3_expose_excuse_3`
- 배경: `room_school.png`
- 다음: `lunch3_expose_excuse_4`

- 캐릭터: `dain_sad.png`
**다인**: 나도 좀 생각할 시간 줘.

---

### `lunch3_expose_excuse_4`
- 배경: `room_school.png`
- 플래그: `day3_dain_no_exclamation`
- 다음: `lunch3_end`

- 캐릭터: `dain_sad.png`
**다인**: *고개를 돌린다. 소보로를 한 입도 안 먹었다.*

---

### `lunch3_expose_run_1`
- 배경: `room_school.png`
- 플래그: `day3_lunch_escaped`
- 다음: `lunch3_expose_run_2`

- 캐릭터: `seyoun_angry.png`
**{name}**: *교실 문을 밀고 나왔다. 뒤쪽에서 의자 끄는 소리가 한꺼번에 났다.*

---

### `lunch3_expose_run_2`
- 배경: `room_school.png`
- 다음: `lunch3_end`

- 캐릭터: `seyoun_angry.png`
**{name}**: *뒤에서 세 사람의 침묵이 등에 꽂힌다. 오후 수업 내내 칠판 위 분필 소리가 멀게 들린다. 책상 아래, 핸드폰 화면만 자꾸 켜졌다 꺼진다.*

---

### `lunch3_share_1`
- 배경: `room_school.png`
- 분기:
  - [`day3_has_multiple_dates`] → `lunch3_harem_1`
  - [기본] → `lunch3_share_solo`

- 캐릭터: `yuna_bored.png`
**{name}**: *다 같이 나눠 먹자고 했다. 셋 다 웃긴 웃는데, 아무도 먼저 손을 뻗지 않는다.*

---

### `lunch3_share_solo`
- 배경: `room_school.png`
- 다음: `lunch3_end`

- 캐릭터: `yuna_normal.png`
**{name}**: *셋이 조금씩 나눠 먹었다. 마지막 계란말이는 반으로 갈라졌고, 아무도 먼저 자리를 뜨지 않았다.*

---

### `lunch3_harem_1`
- 배경: `room_school.png`
- 플래그: `harem_seed`
- 다음: `lunch3_end`

- 캐릭터: `없음`
**{name}**: *셋이 조금씩 나눠 먹었다. 서연은 예의 바르게 웃고, 다인은 과하게 밝고, 유나는 접어 둔 쪽지를 끝내 꺼내지 않는다.*

---

### `lunch3_end`
- 배경: `room_school.png`
- 다음: `after3_start`

- 캐릭터: `없음`
**{name}**: *점심시간이 끝났다. 아무 일도 끝난 건 아니다.*

---

## 3일차 — 방과후 `day3_3_afterschool`

### `after3_start`
- 배경: `school_hallway.png`
- BGM: `sunset1.mp3`
- 다음: `after3_route_check`

- 캐릭터: `없음`
**{name}**: *방과후. 복도 갈림길 앞에서 발이 멈춘다. 학생회실, 별관, 체육관 표지판이 서로 다른 방향을 가리킨다.*

---

### `after3_route_check`
- 배경: `school_hallway.png`
- 분기:
  - [`day3_has_multiple_dates`] → `after3_multi_choice`
  - [`accepted_dain_date`] → `after3_auto_dain`
  - [`accepted_yuna_date`] → `after3_auto_yuna`
  - [`accepted_seoyeon_date`] → `after3_auto_seo`
  - [기본] → `after3_choice`

- 캐릭터: `없음`
**{name}**: *핸드폰을 확인한다. 답장은 없고, 약속 시간만 다가온다.*

---

### `after3_auto_dain`
- 배경: `school_hallway.png`
- 플래그: `route_dain`
- 다음: `after3_reject_for_dain_1`

- 캐릭터: `없음`
**{name}**: *다인이와 약속이 있다. 체육관으로 향한다.*

---

### `after3_auto_yuna`
- 배경: `school_hallway.png`
- 플래그: `route_yuna`
- 다음: `after3_reject_for_yuna_1`

- 캐릭터: `없음`
**{name}**: *유나와 약속이 있다. 도서관 별관으로 향한다.*

---

### `after3_auto_seo`
- 배경: `school_hallway.png`
- 플래그: `route_seoyeon`
- 다음: `after3_reject_for_seo_1`

- 캐릭터: `없음`
**{name}**: *서연이와 약속이 있다. 학생회실로 향한다.*

---

### `after3_multi_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "서연이에게" → `after3_reject_for_seo_1` | 플래그: `route_seoyeon`
  2. "유나에게" → `after3_reject_for_yuna_1` | 플래그: `route_yuna`
  3. "다인이에게" → `after3_reject_for_dain_1` | 플래그: `route_dain`
  4. "조금 더 생각한다" → `after3_choice`

- 캐릭터: `없음`
**{name}**: *약속이 겹쳤다. 서연의 메시지, 다인의 부재중 전화, 유나의 접힌 쪽지가 한 화면에 떠 있다. 누구에게 먼저 갈까.*

---

### `after3_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "학생회실로" → `after3_reject_for_seo_1` | 플래그: `route_seoyeon`
  2. "도서관으로" → `after3_reject_for_yuna_1` | 플래그: `route_yuna`
  3. "체육관으로" → `after3_reject_for_dain_1` | 플래그: `route_dain`

- 캐릭터: `없음`
**{name}**: *어디로 갈까.*

---

### `after3_reject_for_seo_1`
- 배경: `school_hallway.png`
- 다음: `after3_reject_for_seo_2`

- 캐릭터: `dain_sad.png`
**{name}**: *복도에서 다인과 마주친다. 평소의 에너지가 없다. 웃음이 먼저 나오지 않는다.*

---

### `after3_reject_for_seo_2`
- 배경: `school_hallway.png`
- 다음: `after3_reject_for_seo_3`

- 캐릭터: `dain_sad.png`
**다인**: ...오늘 체육관 안 올 거지?

---

### `after3_reject_for_seo_3`
- 배경: `library_old.png`
- 배경톤: `empty`
- 다음: `after3_reject_for_seo_3b`

- 캐릭터: `yuna_sad.png` @ 0.35
**{name}**: *도서관 옆을 지나간다. 유나의 자리가 비어 있다. 쪽지가 하나 남아 있다. 연보라색 잉크. — '기다렸어. 2시간. 더는 안 기다릴게.'*

---

### `after3_reject_for_seo_3b`
- 배경: `library_old.png`
- 다음: `after3_reject_for_seo_3c`

- 캐릭터: `없음`
**{name}**: *유나의 책이 없다. 항상 놓여 있던 1권도 없다. 빌려주겠다던 2권도. 그리고 — 책갈피도 사라졌다. 오래된 책갈피. 유나가 늘 손으로 덮어두던 그것까지.*

---

### `after3_reject_for_seo_3c`
- 배경: `library_old.png`
- 플래그: `yuna_trust_broken`
- 다음: `after3_reject_for_seo_4`

- 캐릭터: `없음`
**{name}**: *책갈피도, 빌려주겠다던 2권도 없다. 책상 위에는 유나가 남긴 긴 쪽지만 접혀 있다.*

---

### `after3_reject_for_seo_4`
- 배경: `school_hallway.png`
- 다음: `after3_seo_1`

- 캐릭터: `없음`
**{name}**: *복도로 나왔다. 다인의 문장 끝은 조용했고, 유나의 자리는 비어 있었다. 손에 남은 쪽지만 접힌 자국대로 구겨졌다.*

---

### `after3_seo_1`
- 배경: `student_room.png`
- BGM: `sunset1.mp3`
- 다음: `after3_seo_3`

- 캐릭터: `seyoun_sad.png`
**{name}**: *학생회실 문을 열었다. 서연이 책상에 엎드려 있다. 클립보드가 바닥에 떨어져 있다.*

---

### `after3_seo_3`
- 배경: `student_room.png`
- 다음: `after3_seo_4`

- 캐릭터: `seyoun_sad.png`
**서연**: *인기척에 고개를 든다. 눈이 피곤해 보인다. 화장이 살짝 번져 있다.*

---

### `after3_seo_4`
- 배경: `student_room.png`
- 다음: `after3_seo_5`

- 캐릭터: `seyoun_sad.png`
**서연**: ......

---

### `after3_seo_5`
- 배경: `student_room.png`
- 다음: `after3_seo_5_b`

- 캐릭터: `seyoun_sad.png`
**{name}**: 서연?

---

### `after3_seo_5_b`
- 배경: `student_room.png`
- 다음: `after3_seo_6`

- 캐릭터: `seyoun_normal.png`
**서연**: *급하게 머리카락을 정리하며* ...봤어?

---

### `after3_seo_6`
- 배경: `student_room.png`
- 다음: `after3_seo_7`

- 캐릭터: `seyoun_sad.png`
**서연**: *헛기침을 하며* ...아무것도 아니야. 잊어.

---

### `after3_seo_7`
- 배경: `student_room.png`
- 다음: `after3_seo_7_b`

- 캐릭터: `seyoun_sad.png`
**{name}**: 뭘 봤다고.

---

### `after3_seo_7_b`
- 배경: `student_room.png`
- 다음: `after3_seo_8`

- 캐릭터: `seyoun_sad.png`
**서연**: *시선을 내리며* ...이런 거 보여주기 싫었는데.

---

### `after3_seo_8`
- 배경: `student_room.png`
- 다음: `after3_seo_9`

- 캐릭터: `seyoun_sad.png`
**서연**: 이런 모습. — 이건 비밀이야.

---

### `after3_seo_9`
- 배경: `student_room.png`
- 다음: `after3_seo_choice`

- 캐릭터: `seyoun_sad.png`
**서연**: *자세를 바로잡는다. 하지만 — 웃음은 돌아오지 않았다.*

---

### `after3_seo_choice`
- 배경: `student_room.png`
- 선택지:
  1. "그런 모습 보여도 괜찮아." → `after3_seo_pity_trap_1` | Seoyeon -18 | 플래그: `seo_pity_broken`
  2. "...방금? 아무것도 못 봤는데. 펜 떨어뜨려서 주우러 들어왔어." → `after3_seo_correct_1` | Seoyeon +18

- 캐릭터: `seyoun_sad.png`
**서연**: 다음에 내가 부탁하면 무조건 들어줘야 해. — 대가야.

---

### `after3_seo_pity_trap_1`
- 배경: `student_room.png`
- 다음: `after3_seo_pity_trap_2`

- 캐릭터: `seyoun_sad.png`
**서연**: *천천히 고개를 든다. 손등의 화장 자국을 보지도 않고 문지른다. 눈빛이 비어 있다.*

---

### `after3_seo_pity_trap_2`
- 배경: `student_room.png`
- 다음: `after3_seo_pity_trap_3`

- 캐릭터: `seyoun_sad.png`
**서연**: ...누구나.

---

### `after3_seo_pity_trap_3`
- 배경: `student_room.png`
- 다음: `after3_seo_pity_trap_4`

- 캐릭터: `seyoun_sad.png`
**서연**: 그 말, 위로라고 했어?

---

### `after3_seo_pity_trap_4`
- 배경: `student_room.png`
- 다음: `after3_seo_pity_trap_5`

- 캐릭터: `seyoun_sad.png`
**서연**: *화장이 번진 자국을 손등으로 닦는다. 손등이 눈가를 한 번, 입가를 한 번 지나간다.*

---

### `after3_seo_pity_trap_5`
- 배경: `student_room.png`
- 다음: `after3_seo_pity_trap_6`

- 캐릭터: `seyoun_normal.png`
**서연**: 나는 '누구나'가 되려고 학생회장 한 거 아니야.

---

### `after3_seo_pity_trap_6`
- 배경: `student_room.png`
- 다음: `after3_seo_pity_trap_7`

- 캐릭터: `seyoun_worried.png`
**서연**: *안경을 고쳐 쓴다. 번진 자국은 아직 손등에 남아 있고, 목소리는 낮아진다.*

---

### `after3_seo_pity_trap_7`
- 배경: `student_room.png`
- 다음: `after3_seo_pity_trap_8`

- 캐릭터: `seyoun_worried.png`
**서연**: 나가 줄래? 일해야 해.

---

### `after3_seo_pity_trap_8`
- 배경: `student_room.png`
- 다음: `after3_seo_pity_trap_9`

- 캐릭터: `seyoun_worried.png`
**{name}**: 서연—

---

### `after3_seo_pity_trap_9`
- 배경: `student_room.png`
- 다음: `after3_seo_pity_trap_10`

- 캐릭터: `seyoun_worried.png`
**서연**: **회장**이라고 불러.

---

### `after3_seo_pity_trap_10`
- 배경: `student_room.png`
- 플래그: `seoyeon_day3_event`, `seo_pity_broken`
- 다음: `after3_seo_end`

- 캐릭터: `없음`
**{name}**: *학생회실 문을 닫고 나왔다. 복도가 텅 비어 있다. 안쪽에서 클립보드가 책상에 놓이는 소리만 한 번 났다.*

---

### `after3_seo_correct_1`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_2`

- 캐릭터: `seyoun_sad.png`
**서연**: *멈춘다. 말이 끊긴 사이, 클립보드 가장자리를 쥔 손에 힘이 들어간다.*

---

### `after3_seo_correct_2`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_3`

- 캐릭터: `seyoun_worried.png`
**{name}**: *허리를 굽혀 펜을 줍는 척한다. 책상 밑을 더듬는다. 일부러 천천히. — 시선을 안 준다. 시선을 주는 순간 거짓말이 들통난다.*

---

### `after3_seo_correct_3`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: 어, 여기 있네. — 회장님 학생회실은 펜이 잘 없어지는 동네인가 봐?

---

### `after3_seo_correct_4`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_5`

- 캐릭터: `seyoun_worried.png`
**{name}**: *고개를 든다. 서연이 화장 번진 자국을 손등으로 닦고 있다. 손등에 검은 자국이 묻는다.*

---

### `after3_seo_correct_5`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_6`

- 캐릭터: `seyoun_normal.png`
**서연**: ...학생회실 펜 없어지는 거 진짜 미스터리야. 1년에 30개씩 사라져.

---

### `after3_seo_correct_6`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_7`

- 캐릭터: `seyoun_normal.png`
**{name}**: 학생회장이 그것도 못 잡아?

---

### `after3_seo_correct_7`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_8`

- 캐릭터: `seyoun_laugh.png`
**서연**: *피식.* 잡으면 — 학생들이 학생회를 무서워하지.

---

### `after3_seo_correct_8`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_9`

- 캐릭터: `seyoun_pout.png`
**{name}**: *대화가 자연스럽게 이어진다. 서연은 다시 안경을 고쳐 쓰고, 나는 끝까지 책상 아래를 보는 척한다.*

---

### `after3_seo_correct_9`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_10`

- 캐릭터: `seyoun_normal.png`
**서연**: ...{name}.

---

### `after3_seo_correct_10`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_11`

- 캐릭터: `seyoun_normal.png`
**{name}**: 응.

---

### `after3_seo_correct_11`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_12`

- 캐릭터: `seyoun_shy.png`
**서연**: 펜 줍는 거. — 다음에도 가끔 줍게.

---

### `after3_seo_correct_12`
- 배경: `student_room.png`
- 플래그: `seoyeon_day3_event`, `seo_trust_deep`
- 다음: `after3_seo_freetalk`

- 캐릭터: `없음`
**{name}**: *서연은 다음 주 학생회 일정표를 접어 내 쪽으로 밀었다.*

---

### `after3_seo_freetalk`
- 배경: `student_room.png`
- 타입: `free_talk`
- 다음: `after3_seo_end`
- 컨텍스트: "3일차 방과후, 서연과의 대립/화해 직후. 양다리 의심으로 관계에 균열이 생긴 상태. 톤: 예의 바르게 말하지만 답이 짧아지고, 클립보드나 손끝 반응으로 긴장을 드러낸다."
- 성격: "서연은 쿨뷰티 학생회장. 독점욕이 강하고 질투 시 직설적. 지금은 상처받았지만 티 내지 않으려 한다."

- 캐릭터: `seyoun_normal.png`
**서연**: *클립보드를 품에 안은 채 {name}을 본다.* 할 말 있으면 지금 해.

---

### `after3_seo_end`
- 배경: `student_room.png`
- 분기:
  - [`harem_seed`] → `after3_final`
  - [`day3_has_multiple_dates`] → `after3_confront_1`
  - [기본] → `after3_final`

- 캐릭터: `seyoun_sad.png`
**{name}**: *그 한마디 뒤에 서연은 클립보드를 품에 더 깊이 끌어안는다.*

---

### `after3_reject_for_yuna_1`
- 배경: `school_hallway.png`
- 다음: `after3_reject_for_yuna_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *복도에서 서연이 클립보드를 정리하고 있다. 페이지를 넘기는 손이 평소보다 빠르다.*

---

### `after3_reject_for_yuna_2`
- 배경: `school_hallway.png`
- 다음: `after3_reject_for_yuna_walk_gym`

- 캐릭터: `seyoun_normal.png`
**서연**: 학생회 일이 바빠서. 점심은 따로 먹을게. ...오늘은.

---

### `after3_reject_for_yuna_walk_gym`
- 배경: `gym.png`
- 다음: `after3_reject_for_yuna_3`

- 캐릭터: `없음`
**{name}**: *체육관 쪽으로 발길이 향한다.*

---

### `after3_reject_for_yuna_3`
- 배경: `gym.png`
- 다음: `after3_reject_for_yuna_3_dain`

- 캐릭터: `dain_sad.png`
**다인**: *체육관에서 혼자 공을 치고 있다.*

---

### `after3_reject_for_yuna_3_dain`
- 배경: `gym.png`
- 다음: `after3_reject_for_yuna_3_react`

- 캐릭터: `dain_sad.png`
**다인**: 아, 안녕!

---

### `after3_reject_for_yuna_3_react`
- 배경: `gym.png`
- 다음: `after3_reject_for_yuna_4`

- 캐릭터: `dain_sad.png`
**{name}**: *하지만 얼굴을 돌린다. 책을 쥔 손에 힘이 들어가 있다.*

---

### `after3_reject_for_yuna_4`
- 배경: `school_hallway.png`
- 다음: `after3_yuna_1`

- 캐릭터: `없음`
**{name}**: *체육관을 나와 복도로 돌아왔다. 서연의 메시지는 읽음으로 남아 있고, 다인의 답장은 없다.*

---

### `after3_yuna_1`
- 배경: `yuna_hideout.png`
- BGM: `night1.mp3`
- 다음: `after3_yuna_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *도서관 별관. 유나가 있던 비밀 독서 공간. — 문이 열려 있다.*

---

### `after3_yuna_2`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_4`

- 캐릭터: `없음`
**{name}**: *들어가니 유나가 없다. 대신 소파 위에 노트가 펼쳐져 있다. 손글씨가 빼곡하다. 표지 안쪽에 유나 이름이 작게 적혀 있다.*

---

### `after3_yuna_4`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_5_b`

- 캐릭터: `없음`
**{name}**: *첫 페이지. '어느 날 전학생이 왔다. 그는 도서관에 찾아와 아무 말 없이 옆에 앉았다. — 나는 그게 싫지 않았다.'*

---

### `after3_yuna_5_b`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_6`

- 캐릭터: `yuna_normal.png`
**{name}**: *...이거 나 얘기 아닌가?*

---

### `after3_yuna_6`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_7`

- 캐릭터: `yuna_normal.png`
**유나**: 뭐 해.

---

### `after3_yuna_7`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_8`

- 캐릭터: `yuna_normal.png`
**{name}**: *뒤에서 유나의 목소리. 돌아보니 유나가 음료수 두 개를 들고 서 있다. — 노트를 보고 있는 나를 보고 얼어붙는다.*

---

### `after3_yuna_8`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_8b`

- 캐릭터: `yuna_shy.png`
**유나**: ...그거.

---

### `after3_yuna_8b`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_9`

- 캐릭터: `yuna_shy.png`
**유나**: *빠르게 다가와 노트를 뺏으며* ...허락 안 했어.

---

### `after3_yuna_9`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_choice`

- 캐릭터: `yuna_shy.png`
**유나**: *노트로 얼굴 옆을 가린다. 드러난 귀 끝만 붉다.*

---

### `after3_yuna_choice`
- 배경: `yuna_hideout.png`
- 선택지:
  1. "이거 나 이야기 맞지? '말 없이 옆에 앉은 전학생' — 나잖아." → `after3_yuna_decode_trap_1` | Yuna -22 | 플래그: `yuna_safe_zone_broken`
  2. "이 작가 진짜 잘 쓴다. 다음 편도 있어? 빌려주면 좋겠는데." → `after3_yuna_correct_1` | Yuna +20

- 캐릭터: `yuna_shy.png`
**{name}**: 재밌게 읽고 있었어.

---

### `after3_yuna_decode_trap_1`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_decode_trap_2`

- 캐릭터: `yuna_shy.png`
**유나**: *노트를 더 세게 끌어안는다. 손가락 마디가 하얗게 변한다.*

---

### `after3_yuna_decode_trap_2`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_decode_trap_3`

- 캐릭터: `yuna_normal.png`
**유나**: ...아니야.

---

### `after3_yuna_decode_trap_3`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_decode_trap_4`

- 캐릭터: `yuna_normal.png`
**{name}**: 아니라고? 근데 이 부분 봐, '교실 창가에서 책을 읽던—'

---

### `after3_yuna_decode_trap_4`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_decode_trap_5`

- 캐릭터: `yuna_sad.png`
**유나**: **아니라고 했잖아.**

---

### `after3_yuna_decode_trap_5`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_decode_trap_6`

- 캐릭터: `yuna_sad.png`
**유나**: *노트를 가방에 쑤셔 넣는다. 평소의 천천한 동작이 아니다. 도망치는 손이다.*

---

### `after3_yuna_decode_trap_6`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_decode_trap_7`

- 캐릭터: `yuna_sad.png`
**유나**: ...너 같은 애들 때문에. 한 줄도 못 쓴다.

---

### `after3_yuna_decode_trap_7`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_decode_trap_8`

- 캐릭터: `yuna_sad.png`
**{name}**: 어?

---

### `after3_yuna_decode_trap_8`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_decode_trap_9`

- 캐릭터: `yuna_sad.png`
**유나**: 소설 안에서까지 들키면 — 도망갈 데가 없어.

---

### `after3_yuna_decode_trap_9`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_decode_trap_10`

- 캐릭터: `yuna_sad.png`
**유나**: *가방을 메고 사다리 쪽으로 간다. 발끝이 한 번 멈췄다가, 그대로 내려간다.*

---

### `after3_yuna_decode_trap_10`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_decode_trap_11`

- 캐릭터: `yuna_sad.png`
**유나**: ...여기. 이제 잠가둘 거야.

---

### `after3_yuna_decode_trap_11`
- 배경: `yuna_hideout.png`
- 플래그: `yuna_day3_event`, `yuna_safe_zone_broken`
- 다음: `after3_yuna_end`

- 캐릭터: `없음`
**{name}**: *사다리 내려가는 발소리. 다락방에 혼자 남는다. 노트가 있던 자리에 손가락 자국만 남아 있다. 펼쳐 둔 페이지의 마지막 문장이 눈에 걸린다. '여기는 아무도 못 들어오는 곳이었다.'*

---

### `after3_yuna_correct_1`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_correct_2`

- 캐릭터: `yuna_normal.png`
**유나**: *노트를 끌어안은 손가락이 — 아주 조금 풀린다. 1초쯤.*

---

### `after3_yuna_correct_2`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_correct_3`

- 캐릭터: `yuna_normal.png`
**유나**: ...작가.

---

### `after3_yuna_correct_3`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_correct_4`

- 캐릭터: `yuna_normal.png`
**{name}**: 응. 이거 누구 거야? 출판된 거야?

---

### `after3_yuna_correct_4`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_correct_5`

- 캐릭터: `yuna_shy.png`
**유나**: ...몰라. 아마 출판은 안 됐을걸.

---

### `after3_yuna_correct_5`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_correct_6`

- 캐릭터: `yuna_shy.png`
**{name}**: 아까워. 이런 거 묻혀 있으면 안 되는데.

---

### `after3_yuna_correct_6`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_correct_7`

- 캐릭터: `yuna_normal.png`
**유나**: *노트를 책상에 다시 놓는다. 품에 끌어안고 있던 손이 천천히 풀린다.*

---

### `after3_yuna_correct_7`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_correct_8`

- 캐릭터: `yuna_shy.png`
**유나**: ...빌려줄까?

---

### `after3_yuna_correct_8`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_correct_9`

- 캐릭터: `yuna_shy.png`
**{name}**: 진짜? 작가한테 허락도 없이?

---

### `after3_yuna_correct_9`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_correct_10`

- 캐릭터: `yuna_smile.png`
**유나**: ...작가가 허락한다고 칠게.

---

### `after3_yuna_correct_10`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_correct_11`

- 캐릭터: `yuna_smile.png`
**유나**: *노트를 두 손으로 내민다. 책 빌려줄 때보다 팔꿈치가 조금 굳어 있다.*

---

### `after3_yuna_correct_11`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_correct_12`

- 캐릭터: `yuna_shy.png`
**{name}**: *종이가 손바닥에 내려앉는다. 유나는 노트 표지에서 시선을 떼지 않는다.*

---

### `after3_yuna_correct_12`
- 배경: `yuna_hideout.png`
- 플래그: `yuna_day3_event`, `yuna_trust_deep`
- 다음: `after3_yuna_freetalk`

- 캐릭터: `yuna_smile.png`
**유나**: 다 읽고 — 작가한테 한 줄만 써줘. 익명으로.

---

### `after3_yuna_freetalk`
- 배경: `yuna_hideout.png`
- 타입: `free_talk`
- 다음: `after3_yuna_end`
- 컨텍스트: "3일차 방과후, 유나와의 대화 직후. 유나가 평소보다 말을 오래 붙잡고 있다. 톤: 짧게 대답하다가 쪽지나 책갈피를 만지며 확인하려는 말을 꺼낸다."
- 성격: "유나는 신비주의 문학소녀. 평소 차분하지만 지금은 쪽지를 접었다 펴는 버릇이 도드라진다. 질투보다 확인에 가깝다."

- 캐릭터: `yuna_normal.png`
**유나**: *책갈피를 접었다 펴며 반 걸음 늦게 걷는다.* ...확인하고 싶은 게 있어.

---

### `after3_yuna_end`
- 배경: `yuna_hideout.png`
- 분기:
  - [`harem_seed`] → `after3_final`
  - [`day3_has_multiple_dates`] → `after3_confront_1`
  - [기본] → `after3_final`

- 캐릭터: `yuna_shy.png`
**유나**: *노트를 품에 꼭 안고 있다.*

---

### `after3_reject_for_dain_1`
- 배경: `school_hallway.png`
- 다음: `after3_reject_for_dain_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *웃고 있다. 클립보드의 종이 모서리를 맞춘다.*

---

### `after3_reject_for_dain_2`
- 배경: `school_hallway.png`
- 다음: `after3_reject_for_dain_2b`

- 캐릭터: `seyoun_normal.png`
**서연**: ...오늘은 할 일이 좀 있어서. 먼저 갈게.

---

### `after3_reject_for_dain_2b`
- 배경: `yuna_hideout.png`
- 다음: `after3_reject_for_dain_3`

- 캐릭터: `없음`
**{name}**: *유나의 아지트로 향했다.*

---

### `after3_reject_for_dain_3`
- 배경: `library_old.png`
- 다음: `after3_reject_for_dain_3b`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *도서관에 쪽지가 없다. 유나의 가방도 없다. 자리에 미지근한 물 자국만 남아 있다.*

---

### `after3_reject_for_dain_3b`
- 배경: `school_hallway.png`
- 다음: `after3_dain_1`

- 캐릭터: `없음`
**{name}**: *복도로 돌아왔다. 서연의 연습한 웃음, 유나가 두고 간 물 자국. 말하지 않은 쪽이 복도 바닥에 길게 남는다.*

---

### `after3_dain_1`
- 배경: `gym.png`
- BGM: `daily2.mp3`
- 다음: `after3_dain_3`

- 캐릭터: `dain_sweat.png`
**{name}**: *체육관. 다인이 혼자 스트레칭을 하고 있다. 가볍게 뛰어보다가 오른쪽 다리를 살짝 삐끗한다. 인상을 쓴다.*

---

### `after3_dain_3`
- 배경: `dain_hurt_event1.png`
- 다음: `after3_dain_4`

- 캐릭터: `없음`
**{name}**: 다인!

---

### `after3_dain_4`
- 배경: `gym.png`
- 다음: `after3_dain_5`

- 캐릭터: `dain_sweat.png`
**다인**: 괜찮아. 그냥 좀 삐끗한 거야.

---

### `after3_dain_5`
- 배경: `gym.png`
- 다음: `after3_dain_5_b`

- 캐릭터: `dain_sweat.png`
**{name}**: 괜찮아 보이진 않는데.

---

### `after3_dain_5_b`
- 배경: `gym.png`
- 다음: `after3_dain_6`

- 캐릭터: `dain_sweat.png`
**다인**: 진짜 괜찮아. 별거 아니야.

---

### `after3_dain_6`
- 배경: `gym.png`
- 다음: `after3_dain_choice`

- 캐릭터: `dain_sad.png`
**다인**: *크게 웃는다. 웃음이 대사보다 한 박자 늦게 따라온다.*

---

### `after3_dain_choice`
- 배경: `gym.png`
- 선택지:
  1. "...괜찮아? 무리하지 마. 오늘은 쉬는 게 어때." → `after3_dain_pity_trap_1` | Dain -20 | 플래그: `pitied_dain`
  2. "야, 서브 한 판만 더 받자. 내가 못 받으면 네가 이기는 거." → `after3_dain_correct_1` | Dain +18

- 캐릭터: `dain_sad.png`
**다인**: *벤치에 앉는다. 무릎을 문지른 손이 같은 자리를 오래 맴돈다.*

---

### `after3_dain_pity_trap_1`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_2`

- 캐릭터: `dain_sad.png`
**다인**: *무릎을 문지르던 손이 멈춘다. 천천히 고개를 든다.*

---

### `after3_dain_pity_trap_2`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_3`

- 캐릭터: `dain_sad.png`
**다인**: ...무리.

---

### `after3_dain_pity_trap_3`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_4`

- 캐릭터: `dain_angry.png`
**다인**: 야. 무리한 거 아니야. 이거 그냥 — 자세 잘못 잡아서 그래.

---

### `after3_dain_pity_trap_4`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_5`

- 캐릭터: `dain_angry.png`
**{name}**: *다인이 일어선다. 무릎이 살짝 떨리는 걸 못 본 척한다. 가방을 든다.*

---

### `after3_dain_pity_trap_5`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_6`

- 캐릭터: `dain_sad.png`
**다인**: ...너까지 그렇게 보지 마.

---

### `after3_dain_pity_trap_6`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_7`

- 캐릭터: `dain_sad.png`
**{name}**: 그렇게라니?

---

### `after3_dain_pity_trap_7`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_8`

- 캐릭터: `dain_sad.png`
**다인**: 금 간 컵 보는 얼굴로.

---

### `after3_dain_pity_trap_8`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_9`

- 캐릭터: `dain_sad.png`
**다인**: *체육관 문 쪽으로 걸어간다. 평소처럼 뛰지 않는다. 운동화 끄는 소리가 길게 남는다.*

---

### `after3_dain_pity_trap_9`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_10`

- 캐릭터: `dain_sad.png`
**다인**: 코치도 그래. 부모도 그래. 다 그래. — 너만은 안 그럴 줄 알았는데.

---

### `after3_dain_pity_trap_10`
- 배경: `gym.png`
- 플래그: `dain_day3_event`, `dain_pity_broken`
- 다음: `after3_dain_end_check`

- 캐릭터: `없음`
**{name}**: *체육관 문이 닫힌다. 쾅, 이 아니다. 살그머니. 바닥에 다인이 놓고 간 손목 보호대 하나가 남아 있다.*

---

### `after3_dain_correct_1`
- 배경: `gym.png`
- 다음: `after3_dain_correct_2`

- 캐릭터: `dain_sad.png`
**다인**: *멈춘다. 무릎을 감싸던 손이 허공에 뜬다.*

---

### `after3_dain_correct_2`
- 배경: `gym.png`
- 다음: `after3_dain_correct_3`

- 캐릭터: `dain_normal.png`
**다인**: ...야.

---

### `after3_dain_correct_3`
- 배경: `gym.png`
- 다음: `after3_dain_correct_4`

- 캐릭터: `dain_normal.png`
**{name}**: 왜.

---

### `after3_dain_correct_4`
- 배경: `gym.png`
- 다음: `after3_dain_correct_5`

- 캐릭터: `dain_shy.png`
**다인**: 너 좀 이상해.

---

### `after3_dain_correct_5`
- 배경: `gym.png`
- 다음: `after3_dain_correct_6`

- 캐릭터: `dain_shy.png`
**{name}**: 이상한 게 좋은 거야 나쁜 거야.

---

### `after3_dain_correct_6`
- 배경: `gym.png`
- 다음: `after3_dain_correct_7`

- 캐릭터: `dain_shy.png`
**다인**: ...몰라. 근데 일단 공 들어. 너 진짜로 못 받을 테니까.

---

### `after3_dain_correct_7`
- 배경: `gym.png`
- 다음: `after3_dain_correct_8`

- 캐릭터: `dain_sad.png`
**다인**: *일어선다. 무릎을 한 번 살짝 굴려본다. 무의식적으로. 그리고 — 토스 자세를 잡는다. 평소와 똑같이.*

---

### `after3_dain_correct_8`
- 배경: `gym.png`
- 다음: `after3_dain_correct_9`

- 캐릭터: `dain_laugh.png`
**다인**: 갑니다, 전학생!

---

### `after3_dain_correct_9`
- 배경: `gym.png`
- 다음: `after3_dain_correct_10`

- 캐릭터: `없음`
**{name}**: *서브가 날아온다. 못 받는다. 공이 손목에 맞고 천장으로 튄다. 다인이 박수를 치며 웃는다. 어깨가 내려간다.*

---

### `after3_dain_correct_10`
- 배경: `gym.png`
- 다음: `after3_dain_correct_11`

- 캐릭터: `dain_laugh.png`
**다인**: 봤지? 내가 이겼어! ...아.

---

### `after3_dain_correct_11`
- 배경: `gym.png`
- 다음: `after3_dain_correct_12`

- 캐릭터: `dain_sweat.png`
**다인**: *착지하면서 오른쪽 무릎이 살짝 꺾인다. 손이 무릎 위에 남는다.*

---

### `after3_dain_correct_12`
- 배경: `gym.png`
- 다음: `after3_dain_dilemma_tell`

- 캐릭터: `dain_sad.png`
**다인**: ...있잖아. 사실 이거. 좀 오래됐어.

---

### `after3_dain_dilemma_tell`
- 배경: `gym.png`
- 다음: `after3_dain_dilemma_tell_2`

- 캐릭터: `dain_normal.png`
**다인**: ...뭐?

---

### `after3_dain_dilemma_tell_2`
- 배경: `gym.png`
- 다음: `after3_dain_dilemma_tell_3`

- 캐릭터: `dain_sad.png`
**{name}**: 무릎. 아까부터 계속 문지르잖아. 이건 오늘 삐끗한 게 아니지?

---

### `after3_dain_dilemma_tell_3`
- 배경: `gym.png`
- 다음: `after3_dain_dilemma_tell_4`

- 캐릭터: `dain_sad.png`
**{name}**: *다인의 표정이 굳는다. 느낌표가 사라진다.*

---

### `after3_dain_dilemma_tell_4`
- 배경: `gym.png`
- 다음: `after3_dain_dilemma_tell_5`

- 캐릭터: `dain_sad.png`
**다인**: ...알면서 왜 말해. 다음 주 대회인 거 알잖아.

---

### `after3_dain_dilemma_tell_5`
- 배경: `gym.png`
- 다음: `after3_dain_dilemma_tell_6`

- 캐릭터: `dain_sad.png`
**{name}**: 대회보다 네 무릎이 더 중요해.

---

### `after3_dain_dilemma_tell_6`
- 배경: `gym.png`
- 다음: `after3_dain_dilemma_tell_7`

- 캐릭터: `dain_angry.png`
**다인**: 그건 네가 정하는 게 아니야.

---

### `after3_dain_dilemma_tell_7`
- 배경: `gym.png`
- 다음: `after3_dain_dilemma_tell_8`

- 캐릭터: `dain_angry.png`
**다인**: *일어선다. 무릎이 삐걱거린다. 신발끈을 묶으려다 손이 멈춘다.*

---

### `after3_dain_dilemma_tell_8`
- 배경: `gym.png`
- 다음: `after3_dain_dilemma_final`

- 캐릭터: `dain_sad.png`
**다인**: ...제발. 이것만은. 아무한테도 말하지 마.

---

### `after3_dain_dilemma_final`
- 배경: `gym.png`
- 선택지:
  1. "미안. 근데 말할 거야." → `after3_dain_tell_confirm` | Dain -20 | 플래그: `told_about_dain_knee`
  2. "...알겠어. 안 말할게." → `after3_dain_tell_retreat` | Dain +5 | 플래그: `ignored_dain_knee`

- 캐릭터: `dain_sad.png`
**다인**: *눈가가 젖어 있다. 문장 끝에는 아무것도 붙지 않는다.*

---

### `after3_dain_tell_confirm`
- 배경: `gym.png`
- 다음: `after3_dain_tell_confirm_2`

- 캐릭터: `dain_angry.png`
**다인**: ...최악이야.

---

### `after3_dain_tell_confirm_2`
- 배경: `gym.png`
- 다음: `after3_dain_tell_confirm_3`

- 캐릭터: `dain_angry.png`
**다인**: *가방을 들고 나간다. 뒤돌아보지 않는다. 체육관 문이 쾅 닫힌다.*

---

### `after3_dain_tell_confirm_3`
- 배경: `gym.png`
- 플래그: `dain_day3_event`
- 다음: `after3_dain_end_check`

- 캐릭터: `없음`
**{name}**: *빈 체육관에 서 있다. 닫힌 문 너머로 다인의 발소리가 멀어진다. 손바닥에 땀이 남아 있다.*

---

### `after3_dain_tell_retreat`
- 배경: `gym.png`
- 다음: `after3_dain_choice1`

- 캐릭터: `dain_sad.png`
**다인**: *안도의 한숨을 쉰다. 체육관 바닥에 공 굴러가는 소리만 남는다.*

---

### `after3_dain_choice1`
- 배경: `gym.png`
- 다음: `after3_dain_choice1_2`

- 캐릭터: `dain_sad.png`
**{name}**: *아무 말 없이 옆에 앉는다. 다인이 이쪽을 힐끗 본다.*

---

### `after3_dain_choice1_2`
- 배경: `gym.png`
- 다음: `after3_dain_choice1_3`

- 캐릭터: `dain_sad.png`
**다인**: ...왜 안 물어봐?

---

### `after3_dain_choice1_3`
- 배경: `gym.png`
- 다음: `after3_dain_choice1_react`

- 캐릭터: `dain_shy.png`
**{name}**: 물어보면 괜찮다고 할 거잖아.

---

### `after3_dain_choice1_react`
- 배경: `gym.png`
- 다음: `after3_dain_choice1_react2`

- 캐릭터: `dain_shy.png`
**다인**: *멈춘다. 그리고 작게 웃는다. 손등으로 눈가를 한 번 문지른다.*

---

### `after3_dain_choice1_react2`
- 배경: `gym.png`
- 다음: `after3_dain_choice1_react3`

- 캐릭터: `dain_shy.png`
**다인**: ...맞아. 괜찮다고 했을 거야.

---

### `after3_dain_choice1_react3`
- 배경: `gym.png`
- 플래그: `dain_day3_event`
- 다음: `after3_dain_freetalk`

- 캐릭터: `dain_shy.png`
**다인**: 고마워. 아무것도 안 물어봐 줘서.

---

### `after3_dain_freetalk`
- 배경: `gym.png`
- 타입: `free_talk`
- 다음: `after3_dain_end_check`
- 컨텍스트: "3일차 방과후, 다인과의 대화 직후. 다인이 크게 웃으며 넘기려 하지만 말 사이가 비는 상태. 톤: 농담은 유지하되, 공이나 손목 보호대를 만지는 행동으로 긴장을 드러낸다."
- 성격: "다인은 행동이 먼저 나가는 체육계. 지금은 밝은 말투로 불안을 밀어내는 중이고, 문장이 짧아질수록 감정이 드러난다."

- 캐릭터: `dain_normal.png`
**다인**: *손목 보호대를 고쳐 매고 억지로 웃는다.* 오늘은 내가 먼저 말할게.

---

### `after3_dain_end_check`
- 배경: `gym.png`
- 분기:
  - [`chose_dain_after2`] → `after3_dain_end`
  - [기본] → `after3_dain_end_first`

- 캐릭터: `dain_normal.png`
**다인**: *주먹으로 어깨를 가볍게 친다.*

---

### `after3_dain_end`
- 배경: `gym.png`
- 분기:
  - [`harem_seed`] → `after3_final`
  - [`day3_has_multiple_dates`] → `after3_confront_1`
  - [기본] → `after3_final`

- 캐릭터: `dain_shy.png`
**다인**: *주먹으로 어깨를 가볍게 친다. — 어제보다 약하다.*

---

### `after3_dain_end_first`
- 배경: `gym.png`
- 분기:
  - [`harem_seed`] → `after3_final`
  - [`day3_has_multiple_dates`] → `after3_confront_1`
  - [기본] → `after3_final`

- 캐릭터: `dain_shy.png`
**다인**: *주먹으로 어깨를 가볍게 친다. — 쑥스러운가 보다.*

---

### `after3_confront_1`
- 배경: `school_hallway.png`
- BGM: `mystery.mp3`
- 플래그: `day3_caught_multiple_dates`
- 다음: `after3_confront_2`

- 캐릭터: `seyoun_sad.png`
**{name}**: *방과후 장소에서 나오는데 — 서연이 복도에서 기다리고 있다. 팔짱을 끼고. 평소의 여유가 없다.*

---

### `after3_confront_2`
- 배경: `school_hallway.png`
- 다음: `after3_confront_3`

- 캐릭터: `seyoun_sad.png`
**서연**: {name}. 잠깐.

---

### `after3_confront_3`
- 배경: `school_hallway.png`
- 다음: `after3_confront_4`

- 캐릭터: `seyoun_sad.png`
**서연**: *복도 끝으로 데려간다. 아무도 없는 곳.*

---

### `after3_confront_4`
- 배경: `school_hallway.png`
- 다음: `after3_confront_5`

- 캐릭터: `seyoun_sad.png`
**서연**: 점심때 말이야.

---

### `after3_confront_5`
- 배경: `school_hallway.png`
- 다음: `after3_confront_5_b`

- 캐릭터: `seyoun_sad.png`
**서연**: 네가 다른 애들한테도 그렇게 웃을 때, 나 혼자 착각한 사람 같았어.

---

### `after3_confront_5_b`
- 배경: `school_hallway.png`
- 다음: `after3_confront_5_c`

- 캐릭터: `dain_sad.png`
**다인**: *고개를 숙인 채.* ...나도. 좀 싫었어.

---

### `after3_confront_5_c`
- 배경: `school_hallway.png`
- 다음: `after3_confront_6`

- 캐릭터: `dain_sad.png`
**다인**: *고개를 숙인다. 운동화 앞코가 복도 바닥을 짧게 문지른다.*

---

### `after3_confront_6`
- 배경: `school_hallway.png`
- 다음: `after3_confront_choice`

- 캐릭터: `seyoun_sad.png`
**서연**: 점심때 그 난장판... 대체 무슨 생각으로 우리 셋 모두한테 약속을 잡은 거야?

---

### `after3_confront_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "솔직하게 인정한다" → `after3_confront_admit` | Seoyeon -5
  2. "시간대가 다르니까 괜찮을 줄 알았어" → `after3_confront_excuse` | Seoyeon -8
  3. "서연만이야" → `after3_confront_lie_b` | Seoyeon -3 | 플래그: `conscience_minus`

- 캐릭터: `seyoun_sad.png`
**서연**: *{name}을 똑바로 본다. 학생회장의 눈이 아니다. 한 사람의 눈이다.*

---

### `after3_confront_admit`
- 배경: `school_hallway.png`
- 다음: `after3_confront_admit_b`

- 캐릭터: `seyoun_sad.png`
**서연**: ...거절을 못 해서.

---

### `after3_confront_admit_b`
- 배경: `school_hallway.png`
- 다음: `after3_confront_admit_2`

- 캐릭터: `seyoun_sad.png`
**서연**: *고개를 숙인다.*

---

### `after3_confront_admit_2`
- 배경: `school_hallway.png`
- 다음: `after3_confront_admit_3`

- 캐릭터: `seyoun_cry.png`
**서연**: 그 말이 제일 잔인한 거야, {name}. 거절 못 하는 다정함이 — 가짜 희망을 주거든.

---

### `after3_confront_admit_3`
- 배경: `school_hallway.png`
- 다음: `after3_confront_admit_4`

- 캐릭터: `seyoun_cry.png`
**서연**: *도시락 가방을 집어든다. 손이 떨리고 있다.*

---

### `after3_confront_admit_4`
- 배경: `school_hallway.png`
- 다음: `after3_confront_admit_4_b`

- 캐릭터: `seyoun_sad.png`
**서연**: 나한텐 괜찮다고 해놓고, 너는 아무한테도 싫은 사람 되기 싫었던 거잖아. 그게 더 잔인해.

---

### `after3_confront_admit_4_b`
- 배경: `school_hallway.png`
- 다음: `after3_confront_admit_5`

- 캐릭터: `seyoun_sad.png`
**서연**: *돌아선다. — 멈춘다.*

---

### `after3_confront_admit_5`
- 배경: `school_hallway.png`
- 다음: `after3_confront_admit_6`

- 캐릭터: `seyoun_sad.png`
**서연**: ...오늘은 옥상 안 열어놓을게.

---

### `after3_confront_admit_6`
- 배경: `school_hallway.png`
- 다음: `after3_confront_end`

- 캐릭터: `seyoun_sad.png`
**{name}**: *등은 곧다. 주먹은 쥐어져 있다. 손등이 하얗다.*

---

### `after3_confront_excuse`
- 배경: `school_hallway.png`
- 다음: `after3_confront_excuse_b`

- 캐릭터: `seyoun_angry.png`
**서연**: ...그게 문제라는 걸 모르겠어?

---

### `after3_confront_excuse_b`
- 배경: `school_hallway.png`
- 다음: `after3_confront_excuse_2`

- 캐릭터: `seyoun_angry.png`
**서연**: *눈이 차갑다. 손등의 화장 자국이 아직 지워지지 않았다.*

---

### `after3_confront_excuse_2`
- 배경: `school_hallway.png`
- 다음: `after3_confront_excuse_2_b`

- 캐릭터: `seyoun_angry.png`
**서연**: 몇 명이랑 약속했냐가 문제가 아니야. 나한테 그 약속이 뭐였는지가 문제야.

---

### `after3_confront_excuse_2_b`
- 배경: `school_hallway.png`
- 다음: `after3_confront_end`

- 캐릭터: `seyoun_angry.png`
**서연**: *잠깐 멈춘다. 눈이 흔들린다.*

---

### `after3_confront_lie_b`
- 배경: `school_hallway.png`
- 다음: `after3_confront_lie`

- 캐릭터: `seyoun_sad.png`
**서연**: *잠깐 멈춘다. 눈이 흔들린다.*

---

### `after3_confront_lie`
- 배경: `school_hallway.png`
- 다음: `after3_confront_lie_2`

- 캐릭터: `seyoun_sad.png`
**서연**: ...정말? 그 말... 믿어도 되는 거지?

---

### `after3_confront_lie_2`
- 배경: `school_hallway.png`
- 다음: `after3_confront_lie_2_b`

- 캐릭터: `seyoun_sad.png`
**서연**: *돌아선다. 믿고 싶어 하던 눈이 먼저 멀어진다.*

---

### `after3_confront_lie_2_b`
- 배경: `school_hallway.png`
- 다음: `after3_confront_end`

- 캐릭터: `seyoun_sad.png`
**{name}**: *등은 곧다. 주먹은 쥐어져 있다. 손등이 하얗다.*

---

### `after3_confront_end`
- 배경: `school_hallway.png`
- 다음: `after3_final`

- 캐릭터: `seyoun_sad.png`
**서연**: *사라진 복도에 혼자 서 있다. 곧은 등 뒤로 하얗게 쥔 주먹만 보인다.*

---

### `after3_final`
- 배경: `school_hallway.png`
- 다음: `haeun_check`

- 캐릭터: `없음`
**{name}**: *방과후가 끝났다. — 오늘 본 것들이 머릿속에서 떠나지 않는다.*

---

### `haeun_check`
- 배경: `school_hallway.png`
- 분기:
  - [`seoyeon_day3_event`] → `haeun_warn_1`
  - [기본] → `minsu_d3_check`

- 캐릭터: `없음`
**{name}**: ‹빈›

---

### `minsu_d3_check`
- 배경: `school.png`
- 다음: `minsu_d3_1`

- 캐릭터: `없음`
**{name}**: ‹빈›

---

### `minsu_d3_1`
- 배경: `school.png`
- 다음: `minsu_d3_2`

- 캐릭터: `없음`
**{name}**: *하교길. 교문 앞에 민수가 서 있다.*

---

### `minsu_d3_2`
- 배경: `school.png`
- 다음: `minsu_d3_3`

- 캐릭터: `없음`
**민수**: 봤다.

---

### `minsu_d3_3`
- 배경: `school.png`
- 다음: `minsu_d3_4`

- 캐릭터: `없음`
**민수**: 점심때. 그리고 방금 서연 표정도.

---

### `minsu_d3_4`
- 배경: `school.png`
- 다음: `minsu_d3_5`

- 캐릭터: `없음`
**민수**: 어제 내가 뭐랬냐. 나중에 셋 다 울면 네 탓이라고 했지. 그 '나중'이 벌써 왔는데.

---

### `minsu_d3_5`
- 배경: `school.png`
- 다음: `minsu_d3_5b`

- 캐릭터: `없음`
**민수**: 옆에서 보기 좀 힘들다. 걔들 다 좋은 애들이야. 네가 일부러 나쁜 짓 한다는 건 아닌데, 거절을 미루고 있잖아.

---

### `minsu_d3_5b`
- 배경: `school.png`
- 다음: `minsu_d3_6`

- 캐릭터: `없음`
**민수**: *한숨을 쉰다. 비꼬는 게 아니라, 진짜 걱정하는 한숨이다.*

---

### `minsu_d3_6`
- 배경: `school.png`
- 다음: `minsu_d3_6b`

- 캐릭터: `없음`
**{name}**: ......맞아.

---

### `minsu_d3_6b`
- 배경: `school.png`
- 다음: `minsu_d3_7`

- 캐릭터: `없음`
**민수**: 전 학교에서 뭔 일 있었는지 안 물어볼게. 근데 하나만 말할게.

---

### `minsu_d3_7`
- 배경: `school.png`
- 다음: `minsu_d3_8`

- 캐릭터: `없음`
**민수**: 거절도 배려야. 안 되는 관계에 계속 여지 주는 것보다, 지금 선 긋는 게 낫거든.

---

### `minsu_d3_8`
- 배경: `school.png`
- 다음: `minsu_d3_9`

- 캐릭터: `없음`
**{name}**: *거절도 배려. 전 학교에서 소정이에게 나는 고백할 기회도, 거절할 기회도 주지 못했다. 아무 말도 못 했으니까.*

---

### `minsu_d3_9`
- 배경: `school.png`
- 다음: `minsu_d3_10`

- 캐릭터: `없음`
**민수**: *더 말하지 않았다. 테이블 위의 빨대 포장지가 끝까지 접혀 있다.*

---

### `minsu_d3_10`
- 배경: `school.png`
- 다음: `night3_start`

- 캐릭터: `없음`
**민수**: 내일 학교에서 보자. — 진지하게 생각해.

---

### `haeun_warn_1`
- 배경: `school_hallway.png`
- 배경톤: `empty`
- 다음: `haeun_warn_1_b`

- 캐릭터: `없음`
**{name}**: *학생회실을 나왔다. 복도가 비어 있다. — 누군가 기다리고 있었다.*

---

### `haeun_warn_1_b`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_2`

- 캐릭터: `haeun_normal.png`
**하은**: *벽에 기대어 서 있다. 학생회 팔찌를 만지작거리고 있다.*

---

### `haeun_warn_2`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_2_b`

- 캐릭터: `haeun_normal.png`
**하은**: ...{name} 씨.

---

### `haeun_warn_2_b`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_2b`

- 캐릭터: `haeun_normal.png`
**{name}**: 하은? 왜 여기서?

---

### `haeun_warn_2b`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_3`

- 캐릭터: `haeun_normal.png`
**{name}**: 응.

---

### `haeun_warn_3`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_3_b`

- 캐릭터: `haeun_normal.png`
**하은**: 선배 — 서연 선배 방금 봤어요?

---

### `haeun_warn_3_b`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_3_c`

- 캐릭터: `haeun_normal.png`
**하은**: ...선배가 울었어요.

---

### `haeun_warn_3_c`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_4`

- 캐릭터: `haeun_normal.png`
**{name}**: *— 뭐?*

---

### `haeun_warn_4`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_4b`

- 캐릭터: `haeun_normal.png`
**하은**: ...선배가 울었어요. 학생회실에서 나온 뒤에. 화장실에서. — 저만 봤어요. 1년 동안 선배가 우는 건 처음이에요.

---

### `haeun_warn_4b`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_5`

- 캐릭터: `haeun_normal.png`
**{name}**: 울었다고?

---

### `haeun_warn_5`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_5b`

- 캐릭터: `haeun_normal.png`
**{name}**: *화장실 거울, 번진 아이라인, 접힌 클립보드. 하은의 말이 그 셋을 한 줄로 묶는다.*

---

### `haeun_warn_5b`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_5c`

- 캐릭터: `haeun_normal.png`
**하은**: 선배, 화장실에서도 소리 안 냈어요. 거울만 보고 있었어요. 손은 계속 떨렸고요.

---

### `haeun_warn_5c`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_5c_b`

- 캐릭터: `haeun_normal.png`
**{name}**: ......

---

### `haeun_warn_5c_b`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_6`

- 캐릭터: `seyoun_sad.png`
**서연**: 네가 다른 애들한테 웃어줄 때, 똑같이 웃어줄 때, 그게 좀 싫었어.

---

### `haeun_warn_6`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_6_b`

- 캐릭터: `haeun_normal.png`
**하은**: {name} 씨 이름 나오고 나서, 휴지통에 티슈가 세 개 더 들어갔어요.

---

### `haeun_warn_6_b`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_7`

- 캐릭터: `haeun_normal.png`
**하은**: *고개를 숙인다.*

---

### `haeun_warn_7`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_7_b`

- 캐릭터: `haeun_worried.png`
**하은**: 참견인 거 알아요. 그래도 걱정돼서요. 선배 지금 집이 좀 복잡해요. 부모님 일도 있고... 아무튼, 선배한테 잘해주세요. 부탁이에요.

---

### `haeun_warn_7_b`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_7_c`

- 캐릭터: `haeun_worried.png`
**하은**: *말을 멈춘다. 선을 넘으면 안 된다는 표정.*

---

### `haeun_warn_7_c`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_7_d`

- 캐릭터: `haeun_normal.png`
**하은**: ...아무튼. 선배한테 잘해주세요. 부탁이에요.

---

### `haeun_warn_7_d`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_8`

- 캐릭터: `haeun_worried.png`
**하은**: *돌아서서 간다. 복도 끝에 서연의 빈 학생회 완장이 걸려 있다.*

---

### `haeun_warn_8`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_8b`

- 캐릭터: `haeun_worried.png`
**{name}**: *화장실 거울, 곧은 등, 하얗게 쥔 주먹, 아무도 없는 세면대. 조각난 장면들이 복도 불빛 아래 따라온다.*

---

### `haeun_warn_8b`
- 배경: `school.png`
- 다음: `night3_start`

- 캐릭터: `haeun_worried.png`
**{name}**: *학교 앞으로 나왔다.*

---

## 3일차 — 밤 `day3_4_night`

### `night3_start`
- 배경: `room_my.png`
- BGM: `night1.mp3`
- 다음: `night3_start_2`

- 캐릭터: `없음`
**{name}**: *방에 돌아왔다. 무거운 하루였다.*

---

### `night3_start_2`
- 배경: `room_my.png`
- 분기:
  - [`day3_has_multiple_dates`] → `night3_cheat_msg_1`
  - [기본] → `night3_faithful_check`

- 캐릭터: `없음`
**{name}**: *핸드폰을 본다.*

---

### `night3_faithful_check`
- 배경: `room_my.png`
- 분기:
  - [`seoyeon_day3_event`] → `night3_faithful_msg_seo_1`
  - [`yuna_day3_event`] → `night3_faithful_msg_yuna_1`
  - [`dain_day3_event`] → `night3_faithful_msg_dain_1`
  - [기본] → `night3_dream_1`

- 캐릭터: `없음`
**{name}**: *메시지가 와 있다.*

---

### `night3_faithful_msg_seo_1`
- 배경: `room_my.png`
- 다음: `night3_faithful_msg_seo_2`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 오늘 본 거, 비밀이야

---

### `night3_faithful_msg_seo_2`
- 배경: `room_my.png`
- 다음: `night3_faithful_msg_seo_3`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: ...근데 또 와도 돼

---

### `night3_faithful_msg_seo_3`
- 배경: `room_my.png`
- 다음: `night3_dream_1`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: *문자를 오래 보고 있다가 화면을 끈다. 방 안이 조금 어두워진다.*

---

### `night3_faithful_msg_yuna_1`
- 배경: `room_my.png`
- 다음: `night3_faithful_msg_yuna_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *쪽지 사진을 보냈다. 노트에 쓰인 한 줄.*

---

### `night3_faithful_msg_yuna_2`
- 배경: `room_my.png`
- 다음: `night3_faithful_msg_yuna_2_b`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 그 소설, 결말은 아직 안 정했어

---

### `night3_faithful_msg_yuna_2_b`
- 배경: `room_my.png`
- 다음: `night3_dream_1`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *메모장 마지막 줄에 커서가 깜빡인다. 결말을 비워 두면, 파일은 계속 저장 중으로 남는다.*

---

### `night3_faithful_msg_dain_1`
- 배경: `room_my.png`
- 다음: `night3_faithful_msg_dain_2`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 발목 괜찮냐고 물어볼 거면 직접 와서 물어봐ㅋㅋ

---

### `night3_faithful_msg_dain_2`
- 배경: `room_my.png`
- 다음: `night3_faithful_msg_dain_3`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 아 근데 고마워

---

### `night3_faithful_msg_dain_3`
- 배경: `room_my.png`
- 다음: `night3_dream_1`

- 캐릭터: `dain_normal.png` @ 0.35
**{name}**: *'ㅋㅋ' 뒤에 빈칸이 길다. 다인의 다음 메시지는 오지 않는다.*

---

### `night3_dream_1`
- 배경: `school.png`
- 다음: `night3_dream_2_b`

- 캐릭터: `없음`
**{name}**: *꿈을 꿨다. 누군가와 나란히 걷고 있었다. 얼굴은 보이지 않고, 발소리만 같은 박자로 이어졌다.*

---

### `night3_dream_2_b`
- 배경: `school.png`
- 다음: `night3_faithful_reflect_1`

- 캐릭터: `없음`
**{name}**: *메모장을 닫았다. 내일 보낼 문장은 아직 없다. 그래도 빈 화면을 그대로 두지 않기로 했다.*

---

### `night3_faithful_reflect_1`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_2_b`

- 캐릭터: `없음`
**{name}**: *눈을 떴다. 아침 햇살이 커튼 사이로 들어온다. 손바닥이 아직 따뜻하다. 핸드폰을 꺼냈다. 갤러리를 열었다. 소정이 사진. — 스크롤을 멈추고, 길게 눌렀다.*

---

### `night3_faithful_reflect_2_b`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_2_c`

- 캐릭터: `없음`
**{name}**: *'삭제하시겠습니까?' 확인 버튼 위에서 손가락이 멈춘다.*

---

### `night3_faithful_reflect_2_c`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_2_d`

- 캐릭터: `없음`
**{name}**: *1초. 화면만 내려다본다. — 소정이 책상의 낙서. 고개를 돌렸던 38번의 아침.*

---

### `night3_faithful_reflect_2_d`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_3`

- 캐릭터: `없음`
**{name}**: *...그래. 삭제 버튼 위에 손가락을 올렸다. — 눌렀다.*

---

### `night3_faithful_reflect_3`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_3_b`

- 캐릭터: `없음`
**{name}**: *삭제 버튼 위에서 손가락이 멈춘다. 대신 사진을 새 폴더로 옮겼다. 폴더 이름은 '기록'.*

---

### `night3_faithful_reflect_3_b`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_4`

- 캐릭터: `없음`
**{name}**: *민수가 말했다. '거절도 네가 해야 할 일이야.' 갤러리 속 소정이는 여전히 웃고 있다. 메모장 38번은 아직 전송되지 않은 상태다. 보내기 버튼만 파랗다.*

---

### `night3_faithful_reflect_4`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_4_b`

- 캐릭터: `없음`
**{name}**: *갤러리가 비어 있다. 소정이 사진이 있던 자리. 빈 화면이 하얗게 켜져 있다. 보이면 말하겠다. 알면 나서겠다.*

---

### `night3_faithful_reflect_4_b`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_4_c`

- 캐릭터: `없음`
**{name}**: *사진을 지우는 건 쉬웠다. 손가락 하나면 끝이다. 빈 앨범 썸네일만 한참 바라본다.*

---

### `night3_faithful_reflect_4_c`
- 배경: `room_my.png`
- 다음: `night3_dream_3`

- 캐릭터: `없음`
**{name}**: *핸드폰을 덮었다. 갤러리 빈 칸이 검은 화면에 비친다.*

---

### `night3_dream_3`
- 배경: `room_my.png`
- 분기:
  - [`seoyeon_day3_event`] → `night3_dream_seo_bonus`
  - [`yuna_day3_event`] → `night3_dream_yuna_bonus`
  - [`dain_day3_event`] → `night3_dream_dain_bonus`
  - [기본] → `night3_end`

- 캐릭터: `없음`
**{name}**: *좋은 꿈이었다.*

---

### `night3_dream_seo_bonus`
- 배경: `room_my.png`
- 스탯: Seoyeon +2
- 다음: `night3_end`

- 캐릭터: `없음`
**{name}**: *눈을 감자, 서연과 나란히 걷던 감각이 아직 남아 있다.*

---

### `night3_dream_yuna_bonus`
- 배경: `room_my.png`
- 스탯: Yuna +6
- 다음: `night3_end`

- 캐릭터: `없음`
**{name}**: *눈을 감자, 유나 옆의 조용한 공기가 아직 남아 있다.*

---

### `night3_dream_dain_bonus`
- 배경: `room_my.png`
- 스탯: Dain +3
- 다음: `night3_end`

- 캐릭터: `없음`
**{name}**: *눈을 감자, 다인의 웃음이 한 박자 늦게 떠오른다.*

---

### `night3_cheat_msg_1`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_2`

- 캐릭터: `없음`
**{name}**: *방에 돌아왔다. 무거운 하루였다. 핸드폰을 본다.*

---

### `night3_cheat_msg_2`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_3`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 나한테만 그래줘

---

### `night3_cheat_msg_3`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_3_b`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: ...부탁이야

---

### `night3_cheat_msg_3_b`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_4`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: *'부탁'이라는 말을 쓴다. 커서는 그 단어 뒤에서 한참 멈춰 있다.*

---

### `night3_cheat_msg_4`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_4_b`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: ...다 알고 있었어

---

### `night3_cheat_msg_4_b`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_5`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *나도, 걔들도 예비 자리는 싫어.*

---

### `night3_cheat_msg_5`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_6`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *누구 옆에 설 건지, 이번엔 미루지 않았으면 해*

---

### `night3_cheat_msg_6`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_dain_1`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: ...도망치지 마. 그것만

---

### `night3_cheat_msg_dain_1`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_7`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: ...ㅋㅋ 농담이었으면 좋겠다

---

### `night3_cheat_msg_7`
- 배경: `room_my.png`
- 다음: `night3_nightmare_1`

- 캐릭터: `dain_normal.png` @ 0.35
**유나**: *세 줄을 보냈다. 평소 한 줄도 안 쓰는 사람이.*

---

### `night3_nightmare_1`
- 배경: `school_back.png`
- BGM: `mystery.mp3`
- 다음: `night3_nightmare_2_b`

- 캐릭터: `없음`
**{name}**: *잠이 들었다. — 꿈. 어둠 속에 서 있다. 아무것도 보이지 않는다.*

---

### `night3_nightmare_2_b`
- 배경: `school.png`
- 다음: `night3_nightmare_3`

- 캐릭터: `seyoun_sad.png`
**서연**: *목소리가 들린다.*

---

### `night3_nightmare_3`
- 배경: `school.png`
- 다음: `night3_nightmare_3_b`

- 캐릭터: `seyoun_sad.png`
**서연**: 나한테만 그랬잖아...

---

### `night3_nightmare_3_b`
- 배경: `school.png`
- 다음: `night3_nightmare_4`

- 캐릭터: `yuna_sad.png`
**유나**: *목소리.*

---

### `night3_nightmare_4`
- 배경: `school.png`
- 다음: `night3_nightmare_4_b`

- 캐릭터: `yuna_sad.png`
**유나**: 거짓말하지 말라고 했지.

---

### `night3_nightmare_4_b`
- 배경: `school.png`
- 다음: `night3_nightmare_5`

- 캐릭터: `dain_sad.png`
**다인**: *목소리.*

---

### `night3_nightmare_5`
- 배경: `school.png`
- 다음: `night3_nightmare_6`

- 캐릭터: `dain_sad.png`
**다인**: 온다면서. 기다렸는데.

---

### `night3_nightmare_6`
- 배경: `school.png`
- 다음: `night3_nightmare_choice`

- 캐릭터: `없음`
**{name}**: *세 방향에서 손이 보인다. 어둠 속에서 희미하게.*

---

### `night3_nightmare_choice`
- 배경: `school.png`
- 선택지:
  1. "서연의 손을 잡는다" → `night3_nightmare_seo` | 플래그: `nightmare_chose_seoyeon`
  2. "유나의 손을 잡는다" → `night3_nightmare_yuna` | 플래그: `nightmare_chose_yuna`
  3. "다인의 손을 잡는다" → `night3_nightmare_dain` | 플래그: `nightmare_chose_dain`

- 캐릭터: `없음`
**{name}**: *누구의 손을 잡을 것인가.*

---

### `night3_nightmare_seo`
- 배경: `room_my.png`
- 다음: `night3_nightmare_end`

- 캐릭터: `없음`
**{name}**: *서연 쪽으로 손을 뻗었다. 그 미소가 보이는 순간 — 사라진다.*

---

### `night3_nightmare_yuna`
- 배경: `room_my.png`
- 다음: `night3_nightmare_end`

- 캐릭터: `없음`
**{name}**: *유나 쪽으로 발을 옮겼다. 손끝이 닿기 직전 — 사라진다.*

---

### `night3_nightmare_dain`
- 배경: `room_my.png`
- 다음: `night3_nightmare_end`

- 캐릭터: `없음`
**{name}**: *다인 쪽으로 달려갔다. 잡았다고 생각한 순간 — 사라진다.*

---

### `night3_nightmare_end`
- 배경: `room_my.png`
- 다음: `night3_nightmare_end_3`

- 캐릭터: `없음`
**{name}**: *손을 뻗었다. — 잡히지 않는다. 모두 사라지고, 남은 건 어둠뿐.*

---

### `night3_nightmare_end_3`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_2`

- 캐릭터: `없음`
**{name}**: *— 땀에 젖은 채 눈을 떴다. 새벽 3시. 천장이 보인다. 핸드폰을 꺼냈다. 갤러리. 또 스크롤한다. — 소정이 사진.*

---

### `night3_cheat_reflect_2`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_3_b`

- 캐릭터: `없음`
**{name}**: *단체 사진 속 소정이가 웃고 있다. 화면을 넘기지 못한다. 엄지 끝에 땀이 묻는다.*

---

### `night3_cheat_reflect_3_b`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_3_c`

- 캐릭터: `없음`
**{name}**: *소정이 사진을 닫는다. 이번엔 메시지 창이 세 개다. 커서만 셋 다 깜빡인다.*

---

### `night3_cheat_reflect_3_c`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_3_d`

- 캐릭터: `없음`
**{name}**: *전 학교: 보내지 못한 메시지. 이 학교: 너무 많이 열린 답장창. 핸드폰 화면이 손바닥에서 뜨겁다.*

---

### `night3_cheat_reflect_3_d`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_3_e`

- 캐릭터: `없음`
**{name}**: *민수가 말했다. '거절도 네가 해야 할 일이야.' 서연이 말했다. '여럿 중 하나는 안 해.'*

---

### `night3_cheat_reflect_3_e`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_5`

- 캐릭터: `없음`
**{name}**: *유나가 말했다. '도망치지 마.' 답장창 커서가 깜빡인다. 아무에게도 보내지 않은 문장이 또 하나 늘어난다.*

---

### `night3_cheat_reflect_5`
- 배경: `room_my.png`
- 다음: `night3_nightmare_end_4`

- 캐릭터: `없음`
**{name}**: *꿈을 꿨다. 누군가와 나란히 걷고 있었다. 얼굴은 안 보이는데, 손에는 보내기 직전의 메시지가 쥐어져 있었다.*

---

### `night3_nightmare_end_4`
- 배경: `room_my.png`
- 다음: `night3_end`

- 캐릭터: `없음`
**{name}**: *내가 뭘 한 거지.*

---

### `night3_end`
- 배경: `room_my.png`
- 다음: `morning4_start`

- 캐릭터: `없음`
**{name}**: *밤이 깊어간다...*

---

# 4일차

## 4일차 — 아침 `day4_1_morning`

### `morning4_start`
- 배경: `room_my.png`
- BGM: `morning.mp3`
- 다음: `morning4_nightmare_check`

- 캐릭터: `없음`
**{name}**: *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다.*

---

### `morning4_nightmare_check`
- 배경: `room_my.png`
- 분기:
  - [`nightmare_chose_seoyeon`] → `morning4_nightmare_seo`
  - [`nightmare_chose_yuna`] → `morning4_nightmare_yuna`
  - [`nightmare_chose_dain`] → `morning4_nightmare_dain`
  - [기본] → `minsu_cheer_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `morning4_nightmare_seo`
- 배경: `room_my.png`
- 다음: `morning4_nightmare_after`

- 캐릭터: `없음`
**{name}**: *...이상한 꿈을 꿨다. 서연의 웃는 얼굴이 — 아직 눈앞에 어른거린다.*

---

### `morning4_nightmare_yuna`
- 배경: `room_my.png`
- 다음: `morning4_nightmare_after`

- 캐릭터: `없음`
**{name}**: *...이상한 꿈을 꿨다. 유나에게 다가가려는데 — 손끝이 아직 허전하다.*

---

### `morning4_nightmare_dain`
- 배경: `room_my.png`
- 다음: `morning4_nightmare_after`

- 캐릭터: `없음`
**{name}**: *...이상한 꿈을 꿨다. 다인을 잡았다고 생각했는데 — 아직 손에 아무것도 없다.*

---

### `morning4_nightmare_after`
- 배경: `room_my.png`
- 다음: `minsu_cheer_1`

- 캐릭터: `없음`
**{name}**: *눈을 뜨자, 가장 먼저 떠오른 이름은 하나뿐이었다.*

---

### `minsu_cheer_1`
- 배경: `room_my.png`
- 다음: `minsu_cheer_1_b`

- 캐릭터: `없음`
**{name}**: *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.*

---

### `minsu_cheer_1_b`
- 배경: `room_my.png`
- 다음: `minsu_cheer_1_c`

- 캐릭터: `minsu_normal.png` @ 0.35
**민수**: *야 오늘 데이트라며?*

---

### `minsu_cheer_1_c`
- 배경: `room_my.png`
- 다음: `minsu_cheer_1_d`

- 캐릭터: `minsu_normal.png` @ 0.35
**{name}**: *어떻게 알았어*

---

### `minsu_cheer_1_d`
- 배경: `room_my.png`
- 다음: `minsu_cheer_2`

- 캐릭터: `minsu_normal.png` @ 0.35
**민수**: *다인이가 단톡방에 올림. 내일 약속 있음, 이라고*

---

### `minsu_cheer_2`
- 배경: `room_my.png`
- 다음: `minsu_cheer_3`

- 캐릭터: `minsu_normal.png` @ 0.35
**민수**: 잘하고 와ㅋㅋ

---

### `minsu_cheer_3`
- 배경: `room_my.png`
- 다음: `minsu_cheer_4_branch`

- 캐릭터: `minsu_normal.png` @ 0.35
**{name}**: 알아.

---

### `minsu_cheer_4_branch`
- 배경: `room_my.png`
- 분기:
  - [`day3_has_multiple_dates`] → `minsu_cheer_4_c`
  - [기본] → `minsu_cheer_4_ins_single`

- 캐릭터: `없음`

<!-- i18n -->

---

### `minsu_cheer_4_ins_single`
- 배경: `room_my.png`
- 다음: `morning4_start_2`

- 캐릭터: `minsu_normal.png` @ 0.35
**{name}**: *핸드폰 캘린더를 본다. 오늘 약속은 하나뿐이다. — 이번엔 미루지 않기로 했다.*

---

### `minsu_cheer_4_c`
- 배경: `room_my.png`
- 다음: `minsu_cheer_4_d`

- 캐릭터: `minsu_normal.png` @ 0.35
**{name}**: *핸드폰 캘린더를 본다. 오전 서연, 오후 유나, 저녁 다인. — 하루 안에 세 명을 쪼개 넣느라 어젯밤에 잠을 못 잤다. 한 명이라도 시간이 겹치면 끝이다.*

---

### `minsu_cheer_4_d`
- 배경: `room_my.png`
- 다음: `minsu_cheer_4_e`

- 캐릭터: `minsu_normal.png` @ 0.35
**{name}**: *...뭘 하고 있는 거지, 나.*

---

### `minsu_cheer_4_e`
- 배경: `room_my.png`
- 다음: `morning4_start_2`

- 캐릭터: `minsu_normal.png` @ 0.35
**{name}**: *심호흡하고, 약속 메시지를 다시 확인한다.*

---

### `morning4_start_2`
- 배경: `room_my.png`
- 분기:
  - [`route_seoyeon`] → `morning4_seo_msg_1`
  - [`route_yuna`] → `morning4_yuna_msg_1`
  - [`route_dain`] → `morning4_dain_msg_1`
  - [기본] → `morning4_fallback_msg`

- 캐릭터: `없음`
**{name}**: *심호흡하고, 약속 메시지를 다시 확인한다.*

---

### `morning4_seo_msg_1`
- 배경: `room_my.png`
- 다음: `morning4_seo_msg_1_b`

- 캐릭터: `seyoun_pout.png` @ 0.35
**서연**: 늦으면 안 돼. 공원 분수대, 10시.

---

### `morning4_seo_msg_1_b`
- 배경: `room_my.png`
- 다음: `morning4_seo_msg_1_c`

- 캐릭터: `seyoun_pout.png` @ 0.35
**{name}**: *명령형이다. 데이트 약속도 지시처럼. — 근데 웃긴다.*

---

### `morning4_seo_msg_1_c`
- 배경: `room_my.png`
- 다음: `morning4_hidden_check`

- 캐릭터: `seyoun_pout.png` @ 0.35
**{name}**: *약속 장소에 서 있다. — 올까? 금요일에 저렇게 화가 났는데.*

---

### `morning4_yuna_msg_1`
- 배경: `room_my.png`
- 다음: `morning4_yuna_msg_1_b`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 10시. 역 앞 카페. 늦으면 간다.

---

### `morning4_yuna_msg_1_b`
- 배경: `room_my.png`
- 다음: `morning4_yuna_msg_single`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *짧다. 유나답다. '늦으면 간다' 뒤에 마침표가 없다.*

---

### `morning4_yuna_msg_single`
- 배경: `room_my.png`
- 다음: `morning4_hidden_check`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *짧다. 그런데 오늘은 그 짧음이 선명하다. 다른 약속은 없다. — 이번엔 정말 그 한 곳으로 간다.*

---

### `morning4_dain_msg_1`
- 배경: `room_my.png`
- 다음: `morning4_hidden_check`

- 캐릭터: `dain_sweat.png` @ 0.35
**다인**: 오늘이다. 체육관 앞 저녁 6시. 아, 왜 이렇게 떨리지. 이거 보내도 되나.

---

### `morning4_fallback_msg`
- 배경: `room_my.png`
- 다음: `morning4_hidden_check`

- 캐릭터: `없음`
**{name}**: *주말 아침. 알림이 몇 개 와 있다. — 평범한 하루가 될 줄 알았다. 핸드폰을 내려놓고 기지개를 켠다. 어쨌든 오늘도 시작이다.*

---

### `morning4_hidden_check`
- 배경: `room_my.png`
- 분기:
  - [`homeroom_day3`] → `morning4_manuscript_check`
  - [`nurse_day3`] → `hidden_nurse_d4_morning_1`
  - [기본] → `hidden_nurse_d4_check`

- 캐릭터: `없음`
**{name}**: *주말. 학교 근처를 지나가게 됐다.*

---

### `morning4_manuscript_check`
- 배경: `room_my.png`
- 분기:
  - [`discovered_manuscript`] → `hidden_homeroom_d4_1`
  - [기본] → `hidden_homeroom_d4_skip`

<!-- i18n -->

---

### `hidden_homeroom_d4_skip`
- 배경: `room_my.png`
- 다음: `hidden_nurse_d4_check`

- 캐릭터: `없음`
**{name}**: *문득 발길이 멈췄다가, 그대로 지나친다.*

---

### `hidden_homeroom_d4_1`
- 배경: `street.png`
- BGM: `morning.mp3`
- 다음: `hidden_homeroom_d4_1_b`

- 캐릭터: `teacher_normal.png`
**{name}**: *학교 정문이 살짝 열려 있다. 안쪽에서 인기척. 담임선생님이 정문 앞으로 나온다. 손에는 종이봉투가 들려 있다.*

---

### `hidden_homeroom_d4_1_b`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_2`

- 캐릭터: `teacher_normal.png`
**{name}**: *정문 앞에서 발이 멈춘다. 담임도 한 박자 늦게 종이봉투를 등 뒤로 숨긴다.*

---

### `hidden_homeroom_d4_2`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...어? {name}?

---

### `hidden_homeroom_d4_3`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_3_b`

- 캐릭터: `teacher_normal.png`
**{name}**: 선생님? 주말인데 학교에요?

---

### `hidden_homeroom_d4_3_b`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_3_c`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *당황하며* 아, 이건 — 서류 정리가 남아서.

---

### `hidden_homeroom_d4_3_c`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_3_d`

- 캐릭터: `teacher_sad.png`
**{name}**: *담임의 종이봉투 한쪽 모서리가 접혀 있다.*

---

### `hidden_homeroom_d4_3_d`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_3_e`

- 캐릭터: `teacher_sad.png`
**{name}**: 혼자서요?

---

### `hidden_homeroom_d4_3_e`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *주머니에 손을 넣으며* ...교사는 주말에도 교사야. 뭐.

---

### `hidden_homeroom_d4_4`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_4_b`

- 캐릭터: `teacher_normal.png`
**{name}**: *교문 밖에서 보니 담임은 교탁보다 메모장 쪽에 더 가까워 보인다.*

---

### `hidden_homeroom_d4_4_b`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_4_c`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 너는 왜 여기야?

---

### `hidden_homeroom_d4_4_c`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_4_d`

- 캐릭터: `teacher_normal.png`
**{name}**: 지나가다가요.

---

### `hidden_homeroom_d4_4_d`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_4_e`

- 캐릭터: `teacher_angry.png`
**담임선생님**: 지나가다가 학교 정문을 들여다보는 학생은 드문데.

---

### `hidden_homeroom_d4_4_e`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_5`

- 캐릭터: `teacher_sad.png`
**{name}**: *어색한 침묵. — 그리고 담임이 먼저.*

---

### `hidden_homeroom_d4_5`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_5_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...밥 먹었어?

---

### `hidden_homeroom_d4_5_b`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_5_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 아직이요.

---

### `hidden_homeroom_d4_5_c`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_5_d`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 그럼 밥부터 먹자. *작게 중얼거리며* 교사로서 학생 식사는 확인해야 하니까. — 학생이니까 주스지만.

---

### `hidden_homeroom_d4_5_d`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_choice`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *말을 끝내고도 컵홀더 모서리만 접는다.*

---

### `hidden_homeroom_d4_choice`
- 배경: `street.png`
- 선택지:
  1. "좋아요. 근처에 카페 있어요?" → `hidden_homeroom_d4_cafe_1` | Teacher +12
  2. "선생님, 그러면 안 되는 거 아니에요?" → `hidden_homeroom_d4_decline` | Teacher +5

- 캐릭터: `teacher_normal.png`
**{name}**: *종이봉투 모서리가 컵홀더 아래에 눌려 있다.*

---

### `hidden_homeroom_d4_cafe_1`
- 배경: `cafe.png`
- 배경톤: `warm`
- 플래그: `homeroom_day4_cafe`
- 다음: `hidden_homeroom_d4_cafe_1_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 학교 밖에서 학생이랑 차 마시려니까, 솔직히 좀 어색하네.

---

### `hidden_homeroom_d4_cafe_1_b`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_1_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 어색해요?

---

### `hidden_homeroom_d4_cafe_1_c`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_1_d`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *커피를 한 모금 마시며* 솔직히? 좀.

---

### `hidden_homeroom_d4_cafe_1_d`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_1_e`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *농담처럼 말하고 커피잔을 만진다. 컵받침 위에 원형 물자국이 두 개 겹쳐 있다.*

---

### `hidden_homeroom_d4_cafe_1_e`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_1_f`

- 캐릭터: `teacher_sad.png`
**{name}**: 어제 원고, 더 쓰셨어요?

---

### `hidden_homeroom_d4_cafe_1_f`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *커피잔을 내려놓는다. 손가락이 손잡이에 남아 있다.*

---

### `hidden_homeroom_d4_cafe_2`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_2_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...조금. 어제 네가 보고 나서 — 손이 다시 움직이더라.

---

### `hidden_homeroom_d4_cafe_2_b`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_2_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 제가 본 게 도움이 됐어요?

---

### `hidden_homeroom_d4_cafe_2_c`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_2_d`

- 캐릭터: `teacher_smile.png`
**담임선생님**: 도움이라기보다... *창밖을 보며* 들킨 뒤로 봉투가 좀 가벼워졌어. 혼자 들고 있으면 종이도 무겁더라.

---

### `hidden_homeroom_d4_cafe_2_d`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_2_e`

- 캐릭터: `teacher_sad.png`
**{name}**: *담임의 가방 안에서 원고 봉투 모서리가 보인다. 접힌 부분이 손때로 조금 까맣다.*

---

### `hidden_homeroom_d4_cafe_2_e`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 소설에서 제일 어려운 게 뭔지 알아?

---

### `hidden_homeroom_d4_cafe_3`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_choice`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 결국 누군가한테 보여줘야 끝까지 가더라. 읽어줄 사람이 없으면 자꾸 멈춰.

---

### `hidden_homeroom_d4_cafe_choice`
- 배경: `cafe.png`
- 배경톤: `warm`
- 선택지:
  1. "그 소설, 주인공이 누구예요?" → `hidden_homeroom_d4_cafe_choice_a` | Teacher +12
  2. "제일 먼저 보여준다고 하시니까 부담되는데요" → `hidden_homeroom_d4_cafe_choice_b` | Teacher +5

- 캐릭터: `teacher_normal.png`
**담임선생님**: *커피잔을 내려놓는다. 창가 쪽으로 몸이 조금 기운다.*

---

### `hidden_homeroom_d4_cafe_choice_a`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_4`

- 캐릭터: `teacher_shy.png`
**담임선생님**: ...그건 읽으면 알아. 힌트는 — 나랑 좀 닮았어.

---

### `hidden_homeroom_d4_cafe_choice_b`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *피식* 무거우면 안 읽어도 돼. — 근데 편하게 읽어줘. 그게 더 좋아.

---

### `hidden_homeroom_d4_cafe_4`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_4_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...제일 먼저 읽어줄래?

---

### `hidden_homeroom_d4_cafe_4_b`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5`

- 캐릭터: `teacher_shy.png`
**{name}**: *어제 빈 교실의 원고지가 떠오른다. 오늘은 학교 밖이고, 컵홀더 모서리가 계속 접히고 있다.*

---

### `hidden_homeroom_d4_cafe_5`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5_b`

- 캐릭터: `teacher_normal.png`
**{name}**: 읽고 싶어요.

---

### `hidden_homeroom_d4_cafe_5_b`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5_c`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *잠깐 웃는다. 컵홀더를 접던 손이 멈춘다.*

---

### `hidden_homeroom_d4_cafe_5_c`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5_d`

- 캐릭터: `teacher_smile.png`
**담임선생님**: ...고마워. 근데 이거 아무한테도 — 알지? ...이건 우리 비밀이야. 컵홀더 모서리만 자꾸 접히네.

---

### `hidden_homeroom_d4_cafe_5_d`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5_e`

- 캐릭터: `teacher_normal.png`
**{name}**: 또 업무라고 하실 거죠?

---

### `hidden_homeroom_d4_cafe_5_e`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5_f`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *멈칫하고* ...그걸 내가 말하기 전에 치지 마.

---

### `hidden_homeroom_d4_cafe_5_f`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5_g`

- 캐릭터: `teacher_smile.png`
**{name}**: *피식 웃었다. — 담임도 피식 웃었다. 동시에.*

---

### `hidden_homeroom_d4_cafe_5_g`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5_h`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...맞아. 안 되는 거지.

---

### `hidden_homeroom_d4_cafe_5_h`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_6`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *주머니에서 손을 뺀다. 손끝이 잠깐 허공에서 맴돈다. 습관 같은 제스처.*

---

### `hidden_homeroom_d4_cafe_6`
- 배경: `cafe.png`
- 배경톤: `warm`
- 플래그: `homeroom_day4`
- 다음: `hidden_homeroom_d4_cafe_6_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *커피잔을 내려놓으며* ...가끔은 이렇게 밖에서 만나는 것도 나쁘지 않다.

---

### `hidden_homeroom_d4_cafe_6_b`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_nurse_d4_check`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *{name}을 본다. 건조하지 않은 눈이다.* *카페 문이 뒤에서 천천히 닫힌다.*

---

### `hidden_homeroom_d4_decline`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_decline_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...맞아. 안 되는 거지. 가 봐. 주말인데 학교 앞에서 뭐 하냐. — 재밌는 거 해.

---

### `hidden_homeroom_d4_decline_b`
- 배경: `street.png`
- 다음: `hidden_nurse_d4_check`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *돌아선다. 어깨가 살짝 내려간다. 카페 유리문에 뒷모습이 작게 비친다.*

---

### `hidden_nurse_d4_morning_1`
- 배경: `nurse_room.png`
- BGM: `morning.mp3`
- 다음: `hidden_nurse_d4_morning_3`

- 캐릭터: `nurse_normal.png`
**{name}**: *주말 아침. 보건실 문을 열었다. 보건선생님이 의자에 앉아 있다. 흰 가운 차림인데, 책상 위 농담 메모가 없다.*

---

### `hidden_nurse_d4_morning_3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_4`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 어, 왔어.

---

### `hidden_nurse_d4_morning_4`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *'어, 왔어' 하고 청진기를 들었다가, 다시 책상 위에 내려놓는다.*

---

### `hidden_nurse_d4_morning_5`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_6`

- 캐릭터: `nurse_normal.png`
**{name}**: 마지막 상담이에요?

---

### `hidden_nurse_d4_morning_6`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_7`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 상담이라... *의자를 돌리며* 맞아. 마지막 상담.

---

### `hidden_nurse_d4_morning_7`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_8`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *책상 위 서류를 정리하는 척하지만 — 같은 종이를 세 번째 넘기고 있다.*

---

### `hidden_nurse_d4_morning_8`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_9`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 이런 거 물어봐도 돼?

---

### `hidden_nurse_d4_morning_9`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_10`

- 캐릭터: `nurse_normal.png`
**{name}**: 뭔데요?

---

### `hidden_nurse_d4_morning_10`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_11`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *안경을 만진다. 안경 너머 눈이 평소보다 또렷하다. 장난기 뒤에 숨어 있던 눈.*

---

### `hidden_nurse_d4_morning_11`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_choice`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...졸업하고도 보건실에 올 거야?

---

### `hidden_nurse_d4_morning_choice`
- 배경: `nurse_room.png`
- 선택지:
  1. "올게요." → `hidden_nurse_d4_morning_choice_a` | Nurse +10
  2. "..." → `hidden_nurse_d4_morning_choice_b` | Nurse +5

- 캐릭터: `nurse_normal.png`
**{name}**: *질문이 아니다. 보건선생님이 종이컵 가장자리를 엄지로 누른다. 찌그러진 자국이 남는다.*

---

### `hidden_nurse_d4_morning_choice_a`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_12`

- 캐릭터: `nurse_shy.png`
**{name}**: 올게요.

---

### `hidden_nurse_d4_morning_choice_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_12`

- 캐릭터: `nurse_normal.png`
**{name}**: *침묵.*

---

### `hidden_nurse_d4_morning_12`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_13`

- 캐릭터: `nurse_shy.png`
**보건선생님**: ...진짜로?

---

### `hidden_nurse_d4_morning_13`
- 배경: `nurse_room.png`
- 플래그: `nurse_day4_afterschool`
- 다음: `hidden_nurse_d4_morning_freetalk`

- 캐릭터: `nurse_shy.png`
**보건선생님**: *안경을 고쳐 쓴다. 손끝이 렌즈 아래에서 잠깐 멈춘다.*

---

### `hidden_nurse_d4_morning_freetalk`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_check`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *찻잔을 책상 끝에 내려놓고 웃음을 줄인다.* 오늘은 장난으로 넘기지 말자.

---

### `hidden_nurse_d4_check`
- 배경: `room_my.png`
- 분기:
  - [`nurse_day3`] → `hidden_nurse_d4_1`
  - [기본] → `morning4_end`

- 캐릭터: `없음`
**{name}**: *주말이 끝나간다.*

---

### `hidden_nurse_d4_1`
- 배경: `nurse_room.png`
- BGM: `morning.mp3`
- 다음: `hidden_nurse_d4_1_b`

- 캐릭터: `nurse_normal.png`
**{name}**: *학교 메신저 알림: '도와줄 사람 구함'. 발이 보건실을 향한다. 책상 위에는 서류와 검진 도구가 쌓여 있다. 보건선생님이 차분하게 정리 중이다.*

---

### `hidden_nurse_d4_1_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_2`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *돌아보며* 어? 진짜 왔어?

---

### `hidden_nurse_d4_2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_2_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 올 줄 몰랐는데. — 학생이 주말에 보건실에 자원봉사를 오다니.

---

### `hidden_nurse_d4_2_b`
- 배경: `nurse_room.png`
- 배경톤: `cold`
- 다음: `hidden_nurse_d4_2_c`

- 캐릭터: `nurse_shy.png`
**{name}**: 환자가 간호사를 도와주는 거네요.

---

### `hidden_nurse_d4_2_c`
- 배경: `nurse_room.png`
- 배경톤: `cold`
- 다음: `hidden_nurse_d4_2_d`

- 캐릭터: `nurse_shy.png`
**보건선생님**: *웃으며* 환자가 간호사를 돕네. 오늘 기록해 둬야겠다.

---

### `hidden_nurse_d4_2_d`
- 배경: `nurse_room.png`
- 배경톤: `cold`
- 다음: `hidden_nurse_d4_2_e`

- 캐릭터: `nurse_shy.png`
**{name}**: *학교 밖에서 보니 웃음이 다르다. 이름표도, 가운 주머니의 볼펜도 없다. 둘이서 검진 서류를 접고 혈압계를 닦는다.*

---

### `hidden_nurse_d4_2_e`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_2_f`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *서류를 건네며* 여기 분류해줄래? 학년별로.

---

### `hidden_nurse_d4_2_f`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_2_g`

- 캐릭터: `nurse_normal.png`
**{name}**: *나란히 앉아 서류를 정리한다. 손이 스칠 때마다 보건선생님의 손끝이 종이 모서리로 돌아간다.*

---

### `hidden_nurse_d4_2_g`
- 배경: `nurse_room.png`
- 배경톤: `cold`
- 다음: `hidden_nurse_d4_2_h`

- 캐릭터: `nurse_shy.png`
**보건선생님**: ...대학병원에서는 이런 거 혼자 다 했었는데.

---

### `hidden_nurse_d4_2_h`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_3`

- 캐릭터: `nurse_shy.png`
**{name}**: 혼자서요?

---

### `hidden_nurse_d4_3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4`

- 캐릭터: `nurse_normal.png`
**{name}**: 도와준다고 했잖아요.

---

### `hidden_nurse_d4_4`
- 배경: `nurse_room.png`
- 배경톤: `cold`
- 다음: `hidden_nurse_d4_4_b`

- 캐릭터: `nurse_shy.png`
**보건선생님**: ...대학병원에서는 이런 거 혼자 다 했었는데. 야간 근무 때 — 간호사 세 명이 해야 할 일을 혼자 하는 날도 있었어.

---

### `hidden_nurse_d4_4_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_c`

- 캐릭터: `nurse_normal.png`
**{name}**: 그래서 번아웃이...

---

### `hidden_nurse_d4_4_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *잠깐 멈춘다. 서류를 내려놓는다.*

---

### `hidden_nurse_d4_4_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_e`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...그때 나한테 제일 힘들었던 건 일의 양이 아니었어.

---

### `hidden_nurse_d4_4_e`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_f`

- 캐릭터: `nurse_normal.png`
**{name}**: 그럼 뭐였어요?

---

### `hidden_nurse_d4_4_f`
- 배경: `nurse_room.png`
- 배경톤: `cold`
- 다음: `hidden_nurse_d4_4_g`

- 캐릭터: `nurse_shy.png`
**보건선생님**: 아무도 내 이름을 안 불러줬어. '간호사님', '야간 당직', '3번 병동'. — 다 직함이지, 이름이 아니거든.

---

### `hidden_nurse_d4_4_g`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_h`

- 캐릭터: `nurse_normal.png`
**{name}**: *서류 위에 놓인 손이 더는 움직이지 않는다.*

---

### `hidden_nurse_d4_4_h`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_i`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 학교에서는 '보건선생님'이잖아. 또 직함이야. *살짝 웃으며* 근데 너는 — 한 번도 직함으로 부른 적 없지?

---

### `hidden_nurse_d4_4_i`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_j`

- 캐릭터: `nurse_normal.png`
**{name}**: ...그런가요?

---

### `hidden_nurse_d4_4_j`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_k`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그냥 '선생님'이라고 불러. 직함 없이. — 그게 좋더라.

---

### `hidden_nurse_d4_4_k`
- 배경: `nurse_room.png`
- 배경톤: `cold`
- 다음: `hidden_nurse_d4_5`

- 캐릭터: `nurse_shy.png`
**{name}**: *서류 정리가 끝났다. 보건선생님이 이름칸을 손가락으로 한 번 짚고, 그제야 기지개를 켠다.*

---

### `hidden_nurse_d4_5`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_name_choice`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *창밖을 보며* 그래서 여기 온 거야. 직함 말고 '선생님'이라고 불러주는 곳. — 작은 차이인데 꽤 크더라.

---

### `hidden_nurse_d4_name_choice`
- 배경: `nurse_room.png`
- 배경톤: `cold`
- 선택지:
  1. "이름이 뭐예요? 보건선생님 말고" → `hidden_nurse_d4_name_choice_a` | Nurse +7
  2. "그래서 학교로 오신 거군요" → `hidden_nurse_d4_name_choice_b` | Nurse +3

- 캐릭터: `nurse_shy.png`
**{name}**: *이름칸 위에 보건선생님의 손끝이 오래 머문다.*

---

### `hidden_nurse_d4_name_choice_a`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_6`

- 캐릭터: `nurse_shy.png`
**보건선생님**: *잠깐 입을 다물고* ...주원. 이주원.

---

### `hidden_nurse_d4_name_choice_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_6`

- 캐릭터: `nurse_shy.png`
**보건선생님**: ...응. 여기선 모두가 가벼운 상처만 가지고 와. 그게 좋아.

---

### `hidden_nurse_d4_6`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_6_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 고마워. 덕분에 빨리 끝났어. ...별건 아니고.

---

### `hidden_nurse_d4_6_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_6_c`

- 캐릭터: `nurse_normal.png`
**{name}**: 별거 아닌데요.

---

### `hidden_nurse_d4_6_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_6_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *잠깐 {name} 쪽을 보며* ...별거야.

---

### `hidden_nurse_d4_6_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_choice`

- 캐릭터: `nurse_normal.png`
**{name}**: *'별거야' 뒤에서 서류철 모서리가 손끝에 눌린다.*

---

### `hidden_nurse_d4_choice`
- 배경: `nurse_room.png`
- 선택지:
  1. "교육적 활동이면 돼요?" → `hidden_nurse_d4_meal_walk` | Nurse +12
  2. "괜찮아요, 저 이만 갈게요" → `hidden_nurse_d4_pass` | Nurse +3

- 캐릭터: `nurse_normal.png`
**보건선생님**: 자, 보답으로 뭐 사줄까? 학생 밥 한 끼 사주는 것도 뭐, 교육의 연장선이라고 치자.

---

### `hidden_nurse_d4_meal_walk`
- 배경: `store.png`
- 배경톤: `warm`
- 다음: `hidden_nurse_d4_meal_1`

- 캐릭터: `nurse_normal.png`
**{name}**: *학교 앞 분식집으로 향했다.*

---

### `hidden_nurse_d4_meal_1`
- 배경: `store.png`
- 배경톤: `warm`
- 다음: `hidden_nurse_d4_meal_1_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 아 맵다. 나 이런 거 예전만큼은 못 먹겠네.

---

### `hidden_nurse_d4_meal_1_b`
- 배경: `store.png`
- 배경톤: `warm`
- 다음: `hidden_nurse_d4_meal_1_c`

- 캐릭터: `nurse_normal.png`
**{name}**: 선생님도 학생 때 먹었을 텐데요.

---

### `hidden_nurse_d4_meal_1_c`
- 배경: `store.png`
- 배경톤: `warm`
- 다음: `hidden_nurse_d4_meal_1b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그게 언제적 얘기야. *웃으며* 나도 이제 예전 같진 않아.

---

### `hidden_nurse_d4_meal_1b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_2`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건실로 돌아왔다.*

---

### `hidden_nurse_d4_meal_2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_2_b`

- 캐릭터: `nurse_normal.png`
**{name}**: 안 늙었는데요.

---

### `hidden_nurse_d4_meal_2_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *잠깐 멈춘다. 젓가락을 내려놓고.*

---

### `hidden_nurse_d4_meal_3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_3_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...그런 말. 학생한테 들으니까 이상하네.

---

### `hidden_nurse_d4_meal_3_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_3_c`

- 캐릭터: `nurse_normal.png`
**{name}**: *젓가락을 든 손이 테이블 위에서 멈춘다.*

---

### `hidden_nurse_d4_meal_3_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_3_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *다시 웃으며* 자, 다 먹었으면 해산. 선생님도 아직 할 일 남았거든.

---

### `hidden_nurse_d4_meal_3_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_3_e`

- 캐릭터: `nurse_normal.png`
**{name}**: *헤어지는 길. 보건선생님이 뒤에서.*

---

### `hidden_nurse_d4_meal_3_e`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_4`

- 캐릭터: `nurse_normal.png`
**보건선생님**: {name}.

---

### `hidden_nurse_d4_meal_4`
- 배경: `nurse_room.png`
- 플래그: `nurse_day4`, `nurse_day4_help`
- 다음: `hidden_nurse_d4_meal_4_b`

- 캐릭터: `nurse_shy.png`
**보건선생님**: {name}. 오늘 고마웠어. — 진짜로.

---

### `hidden_nurse_d4_meal_4_b`
- 배경: `nurse_room.png`
- 다음: `morning4_end`

- 캐릭터: `nurse_shy.png`
**보건선생님**: *컵라면 뚜껑을 누른다. 젓가락 한 짝이 조금 비뚤어진다.*

---

### `hidden_nurse_d4_pass`
- 배경: `nurse_room.png`
- 다음: `morning4_end`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그래, 조심히 가. 다음에 또 와.

---

### `morning4_end`
- 배경: `room_my.png`
- 분기:
  - [`route_dain`] → `date_dain_1`
  - [`route_yuna`] → `date_yuna_1`
  - [`route_seoyeon`] → `date_seo_1`
  - [`accepted_dain_date`] → `date_dain_1`
  - [`accepted_yuna_date`] → `date_yuna_1`
  - [`accepted_seoyeon_date`] → `date_seo_1`
  - [기본] → `day4_night_start`

- 캐릭터: `없음`
**{name}**: *거울을 한 번 더 본다. — 됐다. 나가자.*

---

## 4일차 — 점심 `day4_2_lunch`

### `date_seo_1`
- 배경: `park.png`
- BGM: `date.mp3`
- 조건: `route_seoyeon`
- 다음: `date_seo_compliment_choice`

- 캐릭터: `seyoun_normal.png`
**{name}**: *분수대 앞에 서연이 먼저 와 있다. 클립보드는 없고, 가방끈만 손가락에 감겨 있다.*

---

### `date_seo_compliment_choice`
- 배경: `park.png`
- 선택지:
  1. "오늘 예쁘다." → 호감분기: Seoyeon
    - [50+] → `date_seo_pretty_high`
    - [기본] → `date_seo_pretty_low`
  2. "신경 많이 썼다, 오늘." → `date_seo_bright` | Seoyeon +5

- 캐릭터: `seyoun_normal.png`
**{name}**: *뭐라고 하지?*

---

### `date_seo_pretty_high`
- 배경: `park.png`
- 스탯: Seoyeon +3
- 다음: `date_seo_pretty_high_b`

- 캐릭터: `seyoun_shy.png`
**서연**: *쥐고 있던 가방끈이 느슨해진다.*

---

### `date_seo_pretty_high_b`
- 배경: `park.png`
- 다음: `date_seo_pretty_high_2`

- 캐릭터: `seyoun_shy.png`
**서연**: ...그런 말. 준비해 온 거야?

---

### `date_seo_pretty_high_2`
- 배경: `park.png`
- 다음: `date_seo_pretty_high_3`

- 캐릭터: `seyoun_shy.png`
**서연**: *시선을 돌리며 머리카락을 귀 뒤로 넘긴다.* ...바람 좀 쐬자.

---

### `date_seo_pretty_high_3`
- 배경: `park.png`
- 다음: `date_seo_pretty_high_3_b`

- 캐릭터: `seyoun_shy2.png`
**{name}**: 지금 나온 거야.

---

### `date_seo_pretty_high_3_b`
- 배경: `park.png`
- 다음: `date_seo_pretty_high_4`

- 캐릭터: `seyoun_shy2.png`
**서연**: *머리카락을 넘기며* ...착각하지 마.

---

### `date_seo_pretty_high_4`
- 배경: `park.png`
- 다음: `date_seo_walk`

- 캐릭터: `seyoun_shy2.png`
**서연**: *대답 대신 머리카락을 귀 뒤로 넘겼다. 같은 손이 곧바로 다시 올라갔다.*

---

### `date_seo_pretty_low`
- 배경: `park.png`
- 스탯: Seoyeon +3
- 다음: `date_seo_walk`

- 캐릭터: `seyoun_shy.png`
**서연**: ...뭐야, 갑자기. 그런 말은 예고하고 해.

---

### `date_seo_bright`
- 배경: `park.png`
- 다음: `date_seo_walk`

- 캐릭터: `seyoun_laugh.png`
**서연**: 당연하지. 오늘 좀 신경 썼거든.

---

### `date_seo_walk`
- 배경: `park.png`
- 다음: `date_seo_duck`

- 캐릭터: `seyoun_normal.png`
**{name}**: *공원을 산책한다. 오리들에게 빵을 던져준다.*

---

### `date_seo_duck`
- 배경: `park.png`
- 다음: `date_seo_duck_2`

- 캐릭터: `seyoun_normal.png`
**서연**: 이 애들은 단순해서 좋다. 빵 주면 따라오고, 안 주면 안 오고.

---

### `date_seo_duck_2`
- 배경: `park.png`
- 다음: `date_seo_duck_3`

- 캐릭터: `seyoun_normal.png`
**{name}**: 사람도 그런 거 아냐?

---

### `date_seo_duck_3`
- 배경: `park.png`
- 다음: `date_seo_duck_4`

- 캐릭터: `seyoun_normal.png`
**서연**: 사람은 빵 줘도 안 올 때가 있으니까.

---

### `date_seo_duck_4`
- 배경: `park.png`
- 다음: `date_seo_flower_b`

- 캐릭터: `seyoun_normal.png`
**서연**: *빵 부스러기가 가라앉는 물가를 보고 있었다. 꽃집 앞에서 걸음이 느려졌다.*

---

### `date_seo_flower_b`
- 배경: `park.png`
- 다음: `date_seo_flower_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *걸음을 멈추며* ...들어가 볼까?

---

### `date_seo_flower_2`
- 배경: `park.png`
- 다음: `date_seo_succulent_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *꽃집 문을 밀었다. 종소리가 울린다. 작은 화분을 하나 고른다. 다육이.*

---

### `date_seo_succulent_2`
- 배경: `park.png`
- 다음: `date_seo_succulent_2_b`

- 캐릭터: `seyoun_normal.png`
**서연**: 이건 관리하기 쉬워. 물 안 줘도 잘 살아.

---

### `date_seo_succulent_2_b`
- 배경: `park.png`
- 다음: `date_seo_succulent_3`

- 캐릭터: `seyoun_normal.png`
**{name}**: 나한테 주는 거야?

---

### `date_seo_succulent_3`
- 배경: `park.png`
- 다음: `date_seo_end`

- 캐릭터: `seyoun_laugh.png`
**서연**: 키울 수 있으면. — 못 키우면 내가 다시 가져갈 거니까.

---

### `date_seo_end`
- 배경: `park.png`
- 다음: `date_seo_end_b`

- 캐릭터: `seyoun_worried.png`
**서연**: *화분을 내민다. 흙이 든 작은 화분이 손바닥에 닿았다.*

---

### `date_seo_end_b`
- 배경: `street.png`
- 다음: `date_seo_end_c`

- 캐릭터: `seyoun_normal.png`
**{name}**: *공원을 나서 거리를 걸었다.*

---

### `date_seo_end_c`
- 배경: `street.png`
- 다음: `date_seo_end_d`

- 캐릭터: `seyoun_normal.png`
**서연**: *걸음을 멈추며* ...오늘.

---

### `date_seo_end_d`
- 배경: `street.png`
- 다음: `pre_confess_minsu`

- 캐릭터: `seyoun_shy.png`
**서연**: 오늘 좋았어. 그 말은 해두고 싶었어.

---

### `date_yuna_1`
- 배경: `cafe.png`
- BGM: `night1.mp3`
- 조건: `route_yuna`
- 다음: `date_yuna_compliment_choice`

- 캐릭터: `yuna_normal.png`
**{name}**: *카페 앞. 유나가 벽에 기대어 서 있다. 검은 원피스에 작은 크로스백. 교복이 없으니 타투의 선이 먼저 눈에 들어온다.*

---

### `date_yuna_compliment_choice`
- 배경: `cafe.png`
- 선택지:
  1. "교복 밖의 유나 처음 본다." → 호감분기: Yuna
    - [50+] → `date_yuna_pretty_high`
    - [기본] → `date_yuna_pretty_low`
  2. "오늘 눈이 다르다." → `date_yuna_bright` | Yuna +5

- 캐릭터: `yuna_normal.png`
**{name}**: *뭐라고 하지?*

---

### `date_yuna_pretty_high`
- 배경: `cafe.png`
- 스탯: Yuna +4
- 다음: `date_yuna_pretty_high_2`

- 캐릭터: `yuna_shy.png`
**유나**: *고개를 숙인다. 컵 가장자리만 오래 본다.*

---

### `date_yuna_pretty_high_2`
- 배경: `cafe.png`
- 다음: `date_yuna_pretty_high_3`

- 캐릭터: `yuna_shy.png`
**유나**: ...그거.

---

### `date_yuna_pretty_high_3`
- 배경: `cafe.png`
- 다음: `date_yuna_pretty_high_4`

- 캐릭터: `yuna_shy.png`
**{name}**: 응?

---

### `date_yuna_pretty_high_4`
- 배경: `cafe.png`
- 다음: `date_yuna_pretty_high_5`

- 캐릭터: `yuna_shy.png`
**유나**: 한 번 더 말해.

---

### `date_yuna_pretty_high_5`
- 배경: `cafe.png`
- 다음: `date_yuna_pretty_high_5_b`

- 캐릭터: `yuna_shy.png`
**유나**: *시선을 들지 않는다. 기다리고 있다.*

---

### `date_yuna_pretty_high_5_b`
- 배경: `cafe.png`
- 다음: `date_yuna_pretty_high_5_c`

- 캐릭터: `yuna_shy.png`
**{name}**: 예쁘다.

---

### `date_yuna_pretty_high_5_c`
- 배경: `cafe.png`
- 다음: `date_yuna_bookstore`

- 캐릭터: `yuna_normal.png`
**유나**: *시선을 컵으로 내리며* ...됐어.

---

### `date_yuna_pretty_low`
- 배경: `cafe.png`
- 스탯: Yuna +3
- 다음: `date_yuna_bookstore`

- 캐릭터: `yuna_shy.png`
**유나**: ...그런 말, 익숙하진 않네.

---

### `date_yuna_bright`
- 배경: `cafe.png`
- 다음: `date_yuna_bookstore`

- 캐릭터: `yuna_smile.png`
**유나**: ...뭐가 다른 건데.

---

### `date_yuna_bookstore`
- 배경: `bookstore.png`
- 다음: `date_yuna_bookstore_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *서점으로 향한다. 유나가 서가 사이를 천천히 걷는다.*

---

### `date_yuna_bookstore_2`
- 배경: `bookstore.png`
- 다음: `date_yuna_bookstore_2_b`

- 캐릭터: `yuna_normal.png`
**유나**: 여기 와 본 적 있어?

---

### `date_yuna_bookstore_2_b`
- 배경: `bookstore.png`
- 다음: `date_yuna_bookstore_3`

- 캐릭터: `yuna_normal.png`
**{name}**: 와 본 적 없어.

---

### `date_yuna_bookstore_3`
- 배경: `bookstore.png`
- 다음: `date_yuna_earphone`

- 캐릭터: `yuna_smile.png`
**유나**: ...다행이다. 내가 먼저 보여준 거네.

---

### `date_yuna_earphone`
- 배경: `bookstore.png`
- 다음: `date_yuna_earphone_2`

- 캐릭터: `yuna_shy.png`
**유나**: *이어폰을 한쪽 건넨다.*

---

### `date_yuna_earphone_2`
- 배경: `bookstore.png`
- 다음: `date_yuna_earphone_2_b`

- 캐릭터: `yuna_normal.png`
**유나**: ...들어봐.

---

### `date_yuna_earphone_2_b`
- 배경: `bookstore.png`
- 다음: `date_yuna_earphone_3`

- 캐릭터: `yuna_normal.png`
**{name}**: *조용한 피아노 곡이 흐른다. 서점의 소음이 멀어진다.*

---

### `date_yuna_earphone_3`
- 배경: `bookstore.png`
- 다음: `date_yuna_oldbook`

- 캐릭터: `yuna_shy.png`
**{name}**: *이어폰 줄이 팽팽해지기 전까지가 거리였다. 유나는 그만큼만 가까이 앉았다.*

---

### `date_yuna_oldbook`
- 배경: `bookstore.png`
- 다음: `date_yuna_oldbook_b`

- 캐릭터: `yuna_normal.png`
**{name}**: *헌책방을 지나간다. 유나가 걸음을 멈춘다.*

---

### `date_yuna_oldbook_b`
- 배경: `bookstore.png`
- 다음: `date_yuna_oldbook_c`

- 캐릭터: `yuna_normal.png`
**유나**: ...여기.

---

### `date_yuna_oldbook_c`
- 배경: `bookstore.png`
- 다음: `date_yuna_oldbook_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *오래된 책 한 권을 꺼낸다. 페이지를 넘기며.*

---

### `date_yuna_oldbook_2`
- 배경: `bookstore.png`
- 다음: `date_yuna_oldbook_3`

- 캐릭터: `yuna_normal.png`
**유나**: 이 책, 1년 전에 읽었는데. 그때는 결말이 슬펐어.

---

### `date_yuna_oldbook_3`
- 배경: `bookstore.png`
- 다음: `date_yuna_oldbook_4`

- 캐릭터: `yuna_normal.png`
**{name}**: 지금은?

---

### `date_yuna_oldbook_4`
- 배경: `bookstore.png`
- 다음: `date_yuna_end`

- 캐릭터: `yuna_smile.png`
**유나**: ...지금은 다르게 읽혀.

---

### `date_yuna_end`
- 배경: `bookstore.png`
- 다음: `date_yuna_end_b`

- 캐릭터: `yuna_smile.png`
**유나**: *{name}을 본다. 넘기던 페이지가 손끝에서 멈춘다.*

---

### `date_yuna_end_b`
- 배경: `street.png`
- 다음: `date_yuna_end_c`

- 캐릭터: `yuna_normal.png`
**유나**: *헤어지기 직전, 쪽지를 건넨다. 말없이.*

---

### `date_yuna_end_c`
- 배경: `street.png`
- 다음: `pre_confess_minsu`

- 캐릭터: `yuna_normal.png`
**{name}**: *'오늘 말이 많았어. 네 앞이라서.' 연보라색 잉크가 마지막 글자에서 조금 번져 있다.*

---

### `date_dain_1`
- 배경: `gym.png`
- BGM: `daily2.mp3`
- 조건: `route_dain`
- 다음: `date_dain_2`

- 캐릭터: `dain_laugh.png`
**{name}**: *체육관 앞. 다인이 뛰어온다. 캡모자에 운동복.*

---

### `date_dain_2`
- 배경: `gym.png`
- 다음: `date_dain_3`

- 캐릭터: `dain_laugh.png`
**다인**: 왔다. 늦을 뻔했지?

---

### `date_dain_3`
- 배경: `gym.png`
- 다음: `date_dain_4`

- 캐릭터: `dain_laugh.png`
**{name}**: 10분 일찍 왔는데.

---

### `date_dain_4`
- 배경: `gym.png`
- 다음: `date_dain_compliment_choice`

- 캐릭터: `dain_normal.png`
**다인**: 나는 20분 전에 왔거든.

---

### `date_dain_compliment_choice`
- 배경: `gym.png`
- 선택지:
  1. "그 캡모자 좋은데." → 호감분기: Dain
    - [50+] → `date_dain_pretty_high`
    - [기본] → `date_dain_pretty_low`
  2. "운동복인데 왜 예쁘지." → `date_dain_bright` | Dain +5

- 캐릭터: `dain_normal.png`
**{name}**: *뭐라고 하지?*

---

### `date_dain_pretty_high`
- 배경: `gym.png`
- 스탯: Dain +3
- 다음: `date_dain_pretty_high_2`

- 캐릭터: `dain_shy.png`
**다인**: *멈춘다. 캡모자를 푹 눌러쓰는 바람에 얼굴이 반쯤 가려졌다.*

---

### `date_dain_pretty_high_2`
- 배경: `gym.png`
- 다음: `date_dain_pretty_high_3`

- 캐릭터: `dain_shy.png`
**다인**: 야, 경고 없이 그런 말 하면.

---

### `date_dain_pretty_high_3`
- 배경: `gym.png`
- 다음: `date_dain_pretty_high_4`

- 캐릭터: `dain_shy.png`
**{name}**: 사실인데.

---

### `date_dain_pretty_high_4`
- 배경: `gym.png`
- 다음: `date_dain_to_arcade`

- 캐릭터: `dain_shy.png`
**다인**: *캡모자 챙을 붙잡은 채 한동안 손을 내리지 못했다.*

---

### `date_dain_pretty_low`
- 배경: `gym.png`
- 스탯: Dain +3
- 다음: `date_dain_to_arcade`

- 캐릭터: `dain_shy.png`
**다인**: 뭐야, 갑자기. ...고맙긴 한데 나 좀 정리할 시간 줘.

---

### `date_dain_bright`
- 배경: `gym.png`
- 다음: `date_dain_to_arcade`

- 캐릭터: `dain_laugh.png`
**다인**: 당연하지. 오늘 컨디션 좋거든.

---

### `date_dain_to_arcade`
- 배경: `arcade.png`
- 다음: `date_dain_arcade`

- 캐릭터: `dain_laugh.png`
**{name}**: *오락실로 향했다.*

---

### `date_dain_arcade`
- 배경: `arcade.png`
- 다음: `date_dain_arcade_2`

- 캐릭터: `dain_normal.png`
**{name}**: *리듬게임 기계 앞에 선다. 화면이 깜빡인다.*

---

### `date_dain_arcade_2`
- 배경: `arcade.png`
- 다음: `date_dain_arcade_2_b`

- 캐릭터: `dain_normal.png`
**다인**: 자, 내기다. 진 사람이 음료수.

---

### `date_dain_arcade_2_b`
- 배경: `arcade.png`
- 다음: `date_dain_arcade_3`

- 캐릭터: `dain_normal.png`
**{name}**: 또 내기?

---

### `date_dain_arcade_3`
- 배경: `arcade.png`
- 다음: `date_dain_arcade_3_b`

- 캐릭터: `dain_normal.png`
**다인**: 내기 없으면 재미없잖아.

---

### `date_dain_arcade_3_b`
- 배경: `arcade.png`
- 다음: `date_dain_arcade_3_c`

- 캐릭터: `dain_normal.png`
**{name}**: *리듬게임이 시작되자 다인의 손이 먼저 박자를 잡는다. 곡이 끝날 때까지 화면에서 콤보가 끊기지 않았다.*

---

### `date_dain_arcade_3_c`
- 배경: `arcade.png`
- 다음: `date_dain_rhythm`

- 캐릭터: `dain_normal.png`
**다인**: *자리에서 벌떡 일어나며* 풀콤보. 봤어?

---

### `date_dain_rhythm`
- 배경: `arcade.png`
- 다음: `date_dain_rhythm_2`

- 캐릭터: `dain_laugh.png`
**다인**: *화면을 가리키며* 이 스코어, 역대 2등이야.

---

### `date_dain_rhythm_2`
- 배경: `arcade.png`
- 다음: `date_dain_rhythm_3`

- 캐릭터: `dain_normal.png`
**{name}**: ...대단해.

---

### `date_dain_rhythm_3`
- 배경: `arcade.png`
- 다음: `date_dain_knee`

- 캐릭터: `dain_laugh.png`
**다인**: 당연하지. 이건 무릎 안 써도 되니까.

---

### `date_dain_knee`
- 배경: `arcade.png`
- 다음: `date_dain_knee_2`

- 캐릭터: `dain_laugh.png`
**{name}**: *'무릎 안 써도 되니까'. 다인은 웃으며 말했지만, 쇼윈도 유리에 비친 무릎을 한 번 본다.*

---

### `date_dain_knee_2`
- 배경: `street.png`
- 다음: `date_dain_shop`

- 캐릭터: `dain_sweat.png`
**{name}**: *오락실을 나와 거리로 나왔다. 스포츠용품점을 지나간다. 다인이 쇼윈도 앞에서 멈춘다. 배구화가 진열돼 있다.*

---

### `date_dain_shop`
- 배경: `street.png`
- 다음: `date_dain_shop_2`

- 캐릭터: `dain_normal.png`
**다인**: ......

---

### `date_dain_shop_2`
- 배경: `street.png`
- 다음: `date_dain_shop_2_b`

- 캐릭터: `dain_normal.png`
**{name}**: 다인?

---

### `date_dain_shop_2_b`
- 배경: `street.png`
- 다음: `date_dain_shop_3`

- 캐릭터: `dain_normal.png`
**다인**: *고개를 돌리며* 아무것도 아냐! 가자!

---

### `date_dain_shop_3`
- 배경: `street.png`
- 다음: `date_dain_shop_3_b`

- 캐릭터: `dain_laugh.png`
**다인**: *캡모자를 눌러 쓰며* ...쳐다보지 마.

---

### `date_dain_shop_3_b`
- 배경: `street.png`
- 다음: `date_dain_end`

- 캐릭터: `dain_normal.png`
**다인**: *캡모자 아래서* ...한 번만 더 말하면 때린다.

---

### `date_dain_end`
- 배경: `street.png`
- 다음: `date_dain_end_b`

- 캐릭터: `dain_sweat.png`
**{name}**: *웃고 있다. 캡모자 그늘 아래 시선이 쇼윈도 쪽에 남아 있다.*

---

### `date_dain_end_b`
- 배경: `street.png`
- 다음: `date_dain_end_c`

- 캐릭터: `dain_normal.png`
**다인**: 야.

---

### `date_dain_end_c`
- 배경: `street.png`
- 다음: `pre_confess_minsu`

- 캐릭터: `dain_sweat.png`
**다인**: 오늘 재밌었어. ...그냥 하는 말 아니야.

---

### `pre_confess_minsu`
- 배경: `street.png`
- 다음: `pre_confess_minsu_2`

- 캐릭터: `minsu_smirk.png` @ 0.35
**민수**: 야, 데이트 중이지? 한마디만 할게

---

### `pre_confess_minsu_2`
- 배경: `street.png`
- 다음: `pre_confess_callback`

- 캐릭터: `minsu_smirk.png` @ 0.35
**민수**: 이번엔 제대로 해. 도망치지 말고

---

### `pre_confess_callback`
- 배경: `street.png`
- 다음: `confess_seo_1`

- 캐릭터: `minsu_smirk.png`
**{name}**: *주머니 안의 핸드폰이 무겁다. 알림은 없고, 화면에는 검은 유리만 비친다.*

---

## 4일차 — 방과후 `day4_3_afterschool`

### `confess_seo_1`
- 배경: `top_school.png`
- 배경톤: `warm`
- BGM: `confession.mp3`
- 분기:
  - [`route_seoyeon`] → `confess_seo_2`
  - [`route_yuna`] → `confess_yuna_1`
  - [`route_dain`] → `confess_dain_1`
  - [기본] → `day4_night_start`

- 캐릭터: `없음`
**{name}**: *데이트가 끝났다. 서연은 교문 쪽으로 가지 않았다.*

---

### `confess_seo_2`
- 배경: `top_school.png`
- 배경톤: `warm`
- 분기:
  - [`chose_seoyeon_lunch`] → `confess_seo_3`
  - [기본] → `confess_seo_3b`

- 캐릭터: `seyoun_normal.png`
**서연**: 잠깐 올라가자.

---

### `confess_seo_3`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: *옥상. 난간 아래 운동장 조명이 켜져 있다. 첫날 서연이 서 있던 자리다.*

---

### `confess_seo_3b`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: *옥상. 난간 아래 운동장 조명이 켜져 있다. 며칠 사이에 여러 번 올라온 자리다.*

---

### `confess_seo_4`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_4_b`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연은 난간에서 한 걸음 떨어져 선다. 열쇠를 주머니에 넣는다.*

---

### `confess_seo_4_b`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_5`

- 캐릭터: `seyoun_normal.png`
**{name}**: *주머니 안쪽에서 접힌 메모가 손가락에 걸린다.*

---

### `confess_seo_5`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_choice`

- 캐릭터: `seyoun_normal.png`
**{name}**: *메모를 꺼내지 않는다.*

---

### `confess_seo_choice`
- 배경: `top_school.png`
- 배경톤: `warm`
- 선택지:
  1. "말한다." → `confess_seo_yes_1` | 플래그: `confessed_seoyeon`
  2. "조금 더 있다 간다." → `confess_seo_no_1` | 플래그: `postponed_seoyeon`

- 캐릭터: `seyoun_shy2.png`
**{name}**: *서연이 먼저 말하지 않는다.*

---

### `confess_seo_yes_1`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_yes_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연이 고개를 든다.*

---

### `confess_seo_yes_2`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_yes_3`

- 캐릭터: `seyoun_normal.png`
**{name}**: *목이 마르다. 주머니 안에서 메모가 접힌다.*

---

### `confess_seo_yes_3`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_yes_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: 오늘 이후에도 너랑 만나고 싶어.

---

### `confess_seo_yes_4`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_yes_5`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연은 바로 대답하지 않는다. 열쇠고리가 손 안에서 한 번 돈다.*

---

### `confess_seo_yes_5`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_yes_6`

- 캐릭터: `seyoun_worried.png`
**{name}**: 지금 대답 안 해도 돼.

---

### `confess_seo_yes_6`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_yes_7`

- 캐릭터: `seyoun_normal.png`
**서연**: 그렇게 말하면 더 생각하게 되잖아.

---

### `confess_seo_yes_7`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_yes_8`

- 캐릭터: `seyoun_shy2.png`
**{name}**: *서연이 난간 아래를 본다.*

---

### `confess_seo_yes_8`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_yes_9`

- 캐릭터: `seyoun_shy2.png`
**서연**: 나도 계속 봤어.

---

### `confess_seo_yes_9`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_yes_10`

- 캐릭터: `seyoun_shy.png`
**서연**: 네가 어디 앉는지, 언제 말이 줄어드는지.

---

### `confess_seo_yes_10`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_yes_11`

- 캐릭터: `seyoun_shy.png`
**서연**: *열쇠가 주머니 안으로 들어간다.*

---

### `confess_seo_yes_11`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_yes_11_b`

- 캐릭터: `seyoun_shy2.png`
**서연**: 내일 점심. 옥상 열어둘게.

---

### `confess_seo_yes_11_b`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_yes_12`

- 캐릭터: `seyoun_shy2.png`
**서연**: *서연이 계단 쪽으로 걷는다.*

---

### `confess_seo_yes_12`
- 배경: `top_school.png`
- 배경톤: `warm`
- 플래그: `day4_confession_accepted`, `isDating_Seoyeon`
- 다음: `day4_night_start`

- 캐릭터: `seyoun_shy2.png`
**서연**: *두 칸 내려가서 멈춘다. 돌아보지는 않는다.*

---

### `confess_seo_no_1`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_no_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: 조금 더 있다 갈래.

---

### `confess_seo_no_2`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_no_3`

- 캐릭터: `seyoun_worried.png`
**{name}**: *서연이 고개를 끄덕인다.*

---

### `confess_seo_no_3`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_no_4`

- 캐릭터: `seyoun_worried.png`
**서연**: *둘 다 운동장을 내려다본다. 조명이 하나 더 켜진다.*

---

### `confess_seo_no_4`
- 배경: `top_school.png`
- 배경톤: `warm`
- 플래그: `day4_waited`
- 다음: `confess_seo_no_4_b`

- 캐릭터: `seyoun_sad.png`
**서연**: 내일 점심, 시간 되면 와.

---

### `confess_seo_no_4_b`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `day4_night_start`

- 캐릭터: `seyoun_sad.png`
**{name}**: *계단을 내려가는 동안 메모는 주머니 안에 그대로 있었다.*

---

### `confess_yuna_1`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- BGM: `confession.mp3`
- 다음: `confess_yuna_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *데이트가 끝나가고 있다. 유나가 걸음을 멈춘다.*

---

### `confess_yuna_2`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 분기:
  - [`chose_yuna_lunch`] → `confess_yuna_3`
  - [기본] → `confess_yuna_3b`

- 캐릭터: `yuna_normal.png`
**유나**: ...마지막으로 갈 데가 있어.

---

### `confess_yuna_3`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_4`

- 캐릭터: `yuna_normal.png`
**{name}**: *도서관 별관. 비밀 독서 공간. 창문으로 석양이 스며든다. 낡은 소파 옆에 유나의 책갈피가 놓여 있다.*

---

### `confess_yuna_3b`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_4`

- 캐릭터: `yuna_normal.png`
**{name}**: *도서관 별관. 창문으로 석양이 스며든다. 며칠 사이에 익숙해진 장소.*

---

### `confess_yuna_4`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_5`

- 캐릭터: `yuna_normal.png`
**유나**: *소파에 앉아 {name}을 본다. 손에는 책갈피가 끼워져 있다.*

---

### `confess_yuna_5`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_choice`

- 캐릭터: `yuna_normal.png`
**{name}**: *말을 고르는 동안 손끝이 차갑다.*

---

### `confess_yuna_choice`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 선택지:
  1. "유나. 하나만 물어볼게." → `confess_yuna_yes_1` | 플래그: `confessed_yuna`
  2. "...여기 진짜 좋다." → `confess_yuna_no_1` | 플래그: `postponed_yuna`

- 캐릭터: `yuna_normal.png`
**{name}**: *숨이 짧아졌다. 이 침묵이 편했던 건 — 유나니까였다. 그걸 말해야 한다.*

---

### `confess_yuna_yes_1`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_yes_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *목소리가 생각보다 작게 나온다.*

---

### `confess_yuna_yes_2`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_yes_3`

- 캐릭터: `yuna_normal.png`
**{name}**: *피할 말은 떠오르는데, 하고 싶은 말만 남는다.*

---

### `confess_yuna_yes_3`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_yes_3_b`

- 캐릭터: `yuna_normal.png`
**{name}**: 유나. 처음에 네가 말 안 하는 게 벽인 줄 알았어. 근데 아니더라.

---

### `confess_yuna_yes_3_b`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_yes_4`

- 캐릭터: `yuna_normal.png`
**{name}**: 네 옆에 있으면 조용한 게 불편하지 않았어.

---

### `confess_yuna_yes_4`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_yes_5`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나 앞에서는 말수가 줄었다. 손끝이 차갑다.*

---

### `confess_yuna_yes_5`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_yes_6`

- 캐릭터: `yuna_normal.png`
**{name}**: 너는 — 말 대신 옆에 앉아주는 사람이었어. 네 옆에서는 침묵도 불편하지 않았어.

---

### `confess_yuna_yes_6`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_yes_6_b`

- 캐릭터: `yuna_shy.png`
**{name}**: 좋아해.

---

### `confess_yuna_yes_6_b`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_yes_7`

- 캐릭터: `yuna_shy.png`
**{name}**: *말을 마치자 책장 넘기는 소리가 멈춘다.*

---

### `confess_yuna_yes_7`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_yes_8`

- 캐릭터: `yuna_shy.png`
**{name}**: *말이 떨어진 뒤에도 시선은 쉽게 올라가지 않는다.*

---

### `confess_yuna_yes_8`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_yes_8_b`

- 캐릭터: `yuna_shy.png`
**유나**: *{name} 쪽을 보지 못한 채 옷소매를 꽉 쥔다.*

---

### `confess_yuna_yes_8_b`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_yes_8_c`

- 캐릭터: `yuna_shy.png`
**{name}**: *구겨진 소매 끝이 손바닥 안으로 사라진다.*

---

### `confess_yuna_yes_8_c`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_yes_9`

- 캐릭터: `yuna_sad.png`
**유나**: ...가지 마. 갑자기 사라지면 싫어.

---

### `confess_yuna_yes_9`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 플래그: `day4_confession_accepted`, `isDating_Yuna`
- 다음: `confess_yuna_yes_9_b`

- 캐릭터: `yuna_shy.png`
**유나**: ...가지 마. 이번엔 가지 마.

---

### `confess_yuna_yes_9_b`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `day4_night_start`

- 캐릭터: `yuna_shy.png`
**{name}**: *'이번엔.' 유나가 그 단어에서만 숨을 조금 늦게 쉰다. 잡은 손은 놓지 않는다.*

---

### `confess_yuna_no_1`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_no_2`

- 캐릭터: `yuna_normal.png`
**{name}**: ...여기 진짜 좋다.

---

### `confess_yuna_no_2`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_no_3`

- 캐릭터: `yuna_shy.png`
**유나**: *고개를 끄덕인다. 책갈피를 책 사이에 넣고, 더 깊이 밀어 넣는다.*

---

### `confess_yuna_no_3`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_no_4`

- 캐릭터: `yuna_normal.png`
**유나**: *책을 집어든다. 표지를 보고 있지만 읽고 있지 않다.*

---

### `confess_yuna_no_4`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 플래그: `day4_waited`
- 다음: `confess_yuna_no_4_b`

- 캐릭터: `yuna_sad.png`
**유나**: ...결말은 아직이야.

---

### `confess_yuna_no_4_b`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `day4_night_start`

- 캐릭터: `yuna_sad.png`
**{name}**: *세 걸음 뒤에서 돌아봤다. 유나도 책 너머로 이쪽을 보고 있었다.*

---

### `confess_dain_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- BGM: `confession.mp3`
- 다음: `confess_dain_2`

- 캐릭터: `dain_laugh.png`
**{name}**: *데이트가 끝나가고 있다. 다인이 학교 쪽으로 뛰어간다.*

---

### `confess_dain_2`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 분기:
  - [`chose_dain_lunch`] → `confess_dain_3`
  - [기본] → `confess_dain_3b`

- 캐릭터: `dain_normal.png`
**다인**: 마지막. 한 군데만 더 가자.

---

### `confess_dain_3`
- 배경: `gym.png`
- 배경톤: `empty`
- 다음: `confess_dain_4`

- 캐릭터: `dain_normal.png`
**{name}**: *체육관. 비어 있다. 석양이 창문 사이로 코트를 물들이고 있다. 첫날 내기했던 라인이 아직 눈에 들어온다.*

---

### `confess_dain_3b`
- 배경: `gym.png`
- 배경톤: `empty`
- 다음: `confess_dain_4`

- 캐릭터: `dain_normal.png`
**{name}**: *체육관. 비어 있다. 석양이 창문 사이로 코트를 물들이고 있다. 며칠 사이에 수많은 추억이 쌓인 장소.*

---

### `confess_dain_4`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_5`

- 캐릭터: `dain_normal.png`
**다인**: *공을 하나 들고 있다. 아무렇지 않게. — 근데 손가락이 하얗다. 꽉 쥐고 있다.*

---

### `confess_dain_5`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_choice`

- 캐릭터: `dain_normal.png`
**{name}**: *농담으로 넘기면 오늘도 지나갈 수 있다. 그런데 그러고 싶지 않다.*

---

### `confess_dain_choice`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 선택지:
  1. "다인아. 공 내려놔." → `confess_dain_yes_1` | 플래그: `confessed_dain`
  2. "...한 판 더 할까?" → `confess_dain_no_1` | 플래그: `postponed_dain`

- 캐릭터: `dain_sweat.png`
**다인**: *공이 바닥에 한 번 튄다. 평소라면 바로 받아냈을 손이 허공에서 늦게 멈춘다.*

---

### `confess_dain_yes_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_yes_2`

- 캐릭터: `dain_normal.png`
**{name}**: *목소리가 체육관 바닥에 낮게 깔린다.*

---

### `confess_dain_yes_2`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_yes_3`

- 캐릭터: `dain_normal.png`
**{name}**: *짧은 숨을 고르고, 다시 입을 연다.*

---

### `confess_dain_yes_3`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_yes_3_b`

- 캐릭터: `dain_normal.png`
**{name}**: 다인아. 나 — 너한테 할 말이 있어.

---

### `confess_dain_yes_3_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_yes_4`

- 캐릭터: `dain_normal.png`
**{name}**: 그 눈이 나를 안 볼 때 — 좀 답답해.

---

### `confess_dain_yes_4`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_yes_5`

- 캐릭터: `dain_normal.png`
**{name}**: *가위바위보 고백도 아니고. 그래도 내 방식으론 이게 제일 솔직하다.*

---

### `confess_dain_yes_5`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_yes_6`

- 캐릭터: `dain_normal.png`
**{name}**: 그래서 자꾸 너한테 가게 돼.

---

### `confess_dain_yes_6`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_yes_7`

- 캐릭터: `dain_laugh.png`
**{name}**: 좋아해.

---

### `confess_dain_yes_7`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_yes_8`

- 캐릭터: `dain_shy.png`
**{name}**: *마지막 말이 코트 위에 남는다.*

---

### `confess_dain_yes_8`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_yes_8_b`

- 캐릭터: `dain_shy.png`
**다인**: *그대로 멈춘다. 웃음이 빠진 얼굴 위로 눈빛만 천천히 젖는다. 두 손으로 얼굴을 덮어버린다.*

---

### `confess_dain_yes_8_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_yes_9`

- 캐릭터: `dain_shy.png`
**{name}**: *두 손으로 얼굴을 가린다. 배구공이 발끝에 툭 닿는데도 줍지 않는다.*

---

### `confess_dain_yes_9`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_yes_9_b`

- 캐릭터: `dain_shy.png`
**다인**: ...잠깐, 나 지금 말 정리가 안 돼. 기쁜데 왜 이래...

---

### `confess_dain_yes_9_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_yes_10`

- 캐릭터: `dain_shy.png`
**{name}**: *손을 내리고 웃는다. 눈가를 소매로 거칠게 문지른다.*

---

### `confess_dain_yes_10`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 플래그: `day4_confession_accepted`, `isDating_Dain`
- 다음: `confess_dain_yes_10_b`

- 캐릭터: `dain_shy.png`
**다인**: 나도 좋아해. ...많이.

---

### `confess_dain_yes_10_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `day4_night_start`

- 캐릭터: `dain_laugh.png`
**다인**: *공을 다시 끌어안는다. 손등에 힘이 들어간다.*

---

### `confess_dain_no_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_no_2`

- 캐릭터: `dain_normal.png`
**{name}**: ...한 판 더 할까?

---

### `confess_dain_no_2`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_no_3`

- 캐릭터: `dain_normal.png`
**{name}**: *토스를 올려주는 건 되는데, 세 글자는 안 된다. 한심하다.*

---

### `confess_dain_no_3`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_no_4`

- 캐릭터: `dain_sweat.png`
**다인**: *배구공을 튀긴다. 한 번. 두 번. — 세 번째에 멈춘다.*

---

### `confess_dain_no_4`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 플래그: `day4_waited`
- 다음: `confess_dain_no_4_b`

- 캐릭터: `dain_sad.png`
**다인**: ...다음에는 도망치지 마.

---

### `confess_dain_no_4_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `day4_night_start`

- 캐릭터: `dain_sad.png`
**{name}**: *느낌표가 없다. 다인이 손목 보호대를 고쳐 맨다.*

---

## 4일차 — 밤 `day4_4_night`

### `day4_night_start`
- 배경: `room_my.png`
- BGM: `night2.mp3`
- 다음: `day4_night_branch`

- 캐릭터: `없음`
**{name}**: *집에 돌아왔다. 옷소매에 공원 흙과 학교 먼지가 조금씩 묻어 있다.*

---

### `day4_night_branch`
- 배경: `room_my.png`
- 분기:
  - [`day4_waited`] → `day4_night_regret`
  - [`route_seoyeon`] → `wall_seo_1`
  - [`route_dain`] → `wall_dain_1`
  - [`route_yuna`] → `wall_yuna_1`
  - [기본] → `day4_night_reflect`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `wall_seo_1`
- 배경: `room_my.png`
- BGM: `night2.mp3`
- 호감분기: Seoyeon
  - [60+] → `wall_seo_pre_high_1`
  - [기본] → `wall_seo_pre_low_1`

- 캐릭터: `없음`
**{name}**: *밤 10시. 서연에게서 전화가 온다. 목소리에 웃음기가 없다.*

---

### `wall_seo_pre_high_1`
- 배경: `room_my.png`
- 다음: `wall_seo_pre_high_2`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: ...나 오늘 좀 솔직해져도 돼?

---

### `wall_seo_pre_high_2`
- 배경: `room_my.png`
- 다음: `wall_seo_to_park`

- 캐릭터: `seyoun_sad.png` @ 0.35
**{name}**: *핸드폰 너머로 서연의 숨소리가 먼저 들린다.*

---

### `wall_seo_pre_low_1`
- 배경: `room_my.png`
- 다음: `wall_seo_pre_low_1b`

- 캐릭터: `seyoun_worried.png` @ 0.35
**{name}**: *서연이 침묵한다. 내가 먼저 말을 꺼내야 한다.*

---

### `wall_seo_pre_low_1b`
- 배경: `room_my.png`
- 다음: `wall_seo_pre_low_2`

- 캐릭터: `seyoun_pout.png` @ 0.35
**{name}**: *문자를 보냈다. '서연아, 지금 괜찮아?' — 1분. 읽음 표시가 뜬다. 답이 없다. 그리고 — 전화가 온다.*

---

### `wall_seo_pre_low_2`
- 배경: `room_my.png`
- 다음: `wall_seo_2`

- 캐릭터: `seyoun_sad.png` @ 0.35
**서연**: ...문자 봤어. 지금 나올 수 있어? 공원. — 미안, 갑자기.

---

### `wall_seo_2`
- 배경: `room_my.png`
- 다음: `wall_seo_to_park`

- 캐릭터: `seyoun_sad.png` @ 0.35
**서연**: ...지금 나올 수 있어? 공원. — 미안, 갑자기.

---

### `wall_seo_to_park`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_3`

- 캐릭터: `seyoun_normal.png`
**{name}**: *집을 나서 공원으로 향했다.*

---

### `wall_seo_3`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_4`

- 캐릭터: `seyoun_sad.png`
**{name}**: *공원 벤치에 서연이 앉아 있다. 화장 끝이 조금 번져 있다.*

---

### `wall_seo_4`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_5`

- 캐릭터: `seyoun_sad.png`
**{name}**: 서연. 무슨 일이야?

---

### `wall_seo_5`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_6`

- 캐릭터: `seyoun_sad.png`
**서연**: ...앉아.

---

### `wall_seo_6`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_7`

- 캐릭터: `seyoun_sad.png`
**{name}**: *옆에 앉는다. 서연은 앞만 보고 있다. 가로등 불빛이 안경알에 길게 걸린다.*

---

### `wall_seo_7`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_7_b`

- 캐릭터: `seyoun_sad.png`
**서연**: 오늘 엄마한테 전화 왔어.

---

### `wall_seo_7_b`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_8`

- 캐릭터: `seyoun_sad.png`
**{name}**: ......

---

### `wall_seo_8`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_9`

- 캐릭터: `seyoun_sad.png`
**서연**: 아빠랑 또 싸웠대.

---

### `wall_seo_9`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_9_b`

- 캐릭터: `seyoun_sad.png`
**서연**: *웃는다. 웃음 끝이 금방 접힌다.*

---

### `wall_seo_9_b`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_9_c`

- 캐릭터: `seyoun_sad.png`
**서연**: 우리 집 겉으로는 멀쩡해 보이지? 넓은 집, 좋은 차, 학생회장 딸.

---

### `wall_seo_9_c`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_9_d`

- 캐릭터: `seyoun_sad.png`
**서연**: 근데 엄마 아빠는 1년째 같은 지붕 아래서 남남이야. 이혼 서류만 안 냈을 뿐.

---

### `wall_seo_9_d`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_10`

- 캐릭터: `seyoun_sad.png`
**{name}**: ......

---

### `wall_seo_10`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_11`

- 캐릭터: `seyoun_sad.png`
**서연**: 그래서 집에서도 학교에서도 웃는 쪽을 골랐어. 그게 제일 덜 들켰거든.

---

### `wall_seo_11`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_11_b`

- 캐릭터: `seyoun_cry.png`
**서연**: 엄마가 그랬어. '네가 무너지면 집도 무너진다'고.

---

### `wall_seo_11_b`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_12`

- 캐릭터: `seyoun_cry.png`
**서연**: *입을 다문다. 목이 한 번 움직인다.*

---

### `wall_seo_12`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_13`

- 캐릭터: `seyoun_cry.png`
**서연**: 열 살 때. — 열 살짜리한테 그런 말 하는 거야.

---

### `wall_seo_13`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_14`

- 캐릭터: `seyoun_cry.png`
**서연**: 그때부터 거울 앞에서 웃는 연습했어. 눈이 안 웃으면 다시, 또 다시.

---

### `wall_seo_14`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_14_b`

- 캐릭터: `seyoun_cry.png`
**서연**: 칭찬받을 때마다 그 생각부터 났어. 거울 앞에서 몇 번씩 맞춰 본 얼굴이라고.

---

### `wall_seo_14_b`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_14_c`

- 캐릭터: `seyoun_sad.png`
**서연**: ...근데 너는.

---

### `wall_seo_14_c`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_14_d`

- 캐릭터: `seyoun_cry.png`
**서연**: *말을 멈췄다. 무릎 위의 손이 꽉 쥐어진다. 안경 끝에 맺힌 물기가 떨어지기 전, 고개를 숙인다.*

---

### `wall_seo_14_d`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_hug_choice`

- 캐릭터: `seyoun_cry.png`
**{name}**: *눈에서 물이 흘러내린다. 소리 없이. 서연은 손등으로 닦으려다 멈추고, 그냥 올려다본다.*

---

### `wall_seo_hug_choice`
- 배경: `park.png`
- 배경톤: `cold`
- 선택지:
  1. "안아준다" → `wall_seo_hug_1` | Seoyeon +4
  2. "손을 내민다" → `wall_seo_pinky_1` | Seoyeon +4

- 캐릭터: `seyoun_cry.png`
**서연**: *울고 있다. 손등의 화장이 번진다.*

---

### `wall_seo_hug_1`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_hug_2_b`

- 캐릭터: `seyoun_cry.png`
**{name}**: *서연을 안았다. 서연이 어깨에 얼굴을 묻었다. 교복 셔츠가 젖는다.*

---

### `wall_seo_hug_2_b`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_hug_2_c`

- 캐릭터: `seyoun_cry.png`
**서연**: ...누구 앞에서 우는 거, 오래됐어.

---

### `wall_seo_hug_2_c`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_hug_3`

- 캐릭터: `seyoun_cry.png`
**서연**: 8년. — 그동안 혼자 화장실에서만 울었거든.

---

### `wall_seo_hug_3`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_line_choice`

- 캐릭터: `seyoun_cry.png`
**서연**: *숨이 어깨에 짧게 부딪힌다.*

---

### `wall_seo_pinky_1`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_pinky_2`

- 캐릭터: `seyoun_cry.png`
**{name}**: *손을 내민다.*

---

### `wall_seo_pinky_2`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_pinky_3`

- 캐릭터: `seyoun_cry.png`
**{name}**: 울고 싶으면 나한테 연락해. 안 물어볼게.

---

### `wall_seo_pinky_3`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_pinky_4`

- 캐릭터: `seyoun_cry.png`
**서연**: *서연이 손을 내려다본다.*

---

### `wall_seo_pinky_4`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_pinky_5`

- 캐릭터: `seyoun_cry.png`
**서연**: ...왜 이래. 왜 이렇게 — 쉽게 약속해.

---

### `wall_seo_pinky_5`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_pinky_5_b`

- 캐릭터: `seyoun_cry.png`
**서연**: 사람들이 다 그렇게 말하고 사라지는 건데.

---

### `wall_seo_pinky_5_b`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_line_choice`

- 캐릭터: `seyoun_cry.png`
**{name}**: *서연의 손끝이 내 손바닥에 닿았다. 차갑다.*

---

### `wall_seo_line_choice`
- 배경: `park.png`
- 배경톤: `cold`
- 선택지:
  1. "물티슈 줄까." → `wall_seo_line_react_1` | Seoyeon +7
  2. "잠깐 앉아 있자." → `wall_seo_line_react_2` | Seoyeon +7
  3. "말 안 해도 돼." → `wall_seo_line_react_3` | Seoyeon +4

- 캐릭터: `seyoun_cry.png`
**서연**: *눈물을 닦으며 떨리는 눈으로 올려다보고 있다.*

---

### `wall_seo_line_react_1`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_after_line`

- 캐릭터: `seyoun_cry.png`
**서연**: ...있어?

---

### `wall_seo_line_react_2`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_after_line`

- 캐릭터: `seyoun_cry.png`
**서연**: ...응.

---

### `wall_seo_line_react_3`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_line_react_3_b`

- 캐릭터: `seyoun_cry.png`
**서연**: ...그래.

---

### `wall_seo_line_react_3_b`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_after_line`

- 캐릭터: `seyoun_cry.png`
**서연**: *눈물을 닦는다.*

---

### `wall_seo_after_line`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_after_line_2`

- 캐릭터: `seyoun_sad.png`
**서연**: 물티슈 있어?

---

### `wall_seo_after_line_2`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_after_line_3`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연이 손등을 내려다본다. 화장이 번져 있다.*

---

### `wall_seo_after_line_3`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_after_line_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: 있어.

---

### `wall_seo_after_line_4`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_after_line_4_b`

- 캐릭터: `seyoun_sad.png`
**서연**: *주머니에서 꺼낸 물티슈를 받아 든다.*

---

### `wall_seo_after_line_4_b`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_after_line_5`

- 캐릭터: `seyoun_sad.png`
**서연**: *눈 밑을 닦는다.*

---

### `wall_seo_after_line_5`
- 배경: `park.png`
- 배경톤: `cold`
- 플래그: `day4_seoyeon_wall_broken`
- 다음: `wall_seo_skin_check`

- 캐릭터: `seyoun_normal.png`
**서연**: 물티슈 있으면 줘.

---

### `wall_seo_skin_check`
- 배경: `park.png`
- 배경톤: `cold`
- 호감분기: Seoyeon
  - [70+] → `wall_seo_skin70_1`
  - [60+] → `wall_seo_skin60_1`
  - [기본] → `wall_seo_glimpse_1`

- 캐릭터: `seyoun_normal.png`

<!-- i18n -->

---

### `wall_seo_skin70_1`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_skin70_3`

- 캐릭터: `seyoun_shy.png`
**서연**: *서연이 손을 잡는다. 벤치 사이에 두 손이 남아 있다.*

---

### `wall_seo_skin70_3`
- 배경: `park.png`
- 배경톤: `cold`
- 플래그: `day4_skinship_seoyeon_70`
- 다음: `wall_seo_glimpse_1`

- 캐릭터: `seyoun_shy.png`
**서연**: ...이건 처음이네. 진짜로.

---

### `wall_seo_skin60_1`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_skin60_2`

- 캐릭터: `seyoun_shy.png`
**{name}**: *벤치에 나란히 앉았다. 서연이 슬쩍 어깨에 기대 온다.*

---

### `wall_seo_skin60_2`
- 배경: `park.png`
- 배경톤: `cold`
- 플래그: `day4_skinship_seoyeon_60`
- 다음: `wall_seo_glimpse_1`

- 캐릭터: `seyoun_shy.png`
**서연**: ...조금만 더 이러고 있자.

---

### `wall_seo_glimpse_1`
- 배경: `school_back.png`
- 다음: `wall_seo_glimpse_2`

- 캐릭터: `없음`
**{name}**: *서연을 집까지 바래다주고 돌아오는 길. — 학교 앞을 지나가는데. 체육관 창문에 불이 켜져 있다. 비상등.*

---

### `wall_seo_glimpse_2`
- 배경: `school_back.png`
- 다음: `wall_seo_glimpse_4`

- 캐릭터: `dain_sad.png`
**{name}**: *체육관 창문에 비상등이 켜져 있다. 누군가 혼자 공을 튀긴다. 등번호 19번이 어둠 속에서 희미하게 움직인다.*

---

### `wall_seo_glimpse_4`
- 배경: `school_back.png`
- 다음: `day4_hidden_msg_branch`

- 캐릭터: `dain_sad.png`
**{name}**: *한참 학교 뒤편에 서 있다가 집으로 돌아왔다. 체육관 불빛이 눈꺼풀 안쪽에 남아 있다.*

---

### `wall_dain_1`
- 배경: `room_my.png`
- BGM: `night2.mp3`
- 호감분기: Dain
  - [60+] → `wall_dain_pre_high_1`
  - [기본] → `wall_dain_pre_low_1`

- 캐릭터: `없음`
**{name}**: *밤 10시. 다인에게서 메시지.*

---

### `wall_dain_pre_high_1`
- 배경: `room_my.png`
- 다음: `wall_dain_pre_high_2`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: ...오늘은 운동 얘기 말고, 다른 얘기 해도 돼?

---

### `wall_dain_pre_high_2`
- 배경: `room_my.png`
- 다음: `wall_dain_3`

- 캐릭터: `dain_sad.png` @ 0.35
**다인**: *평소와 다르게 조용하다. 목소리 끝이 바닥에 닿는다.*

---

### `wall_dain_pre_low_1`
- 배경: `room_my.png`
- 다음: `wall_dain_pre_low_2`

- 캐릭터: `dain_sweat.png` @ 0.35
**다인**: *웃는다. 손은 무릎 보호대를 꽉 누르고 있다.*

---

### `wall_dain_pre_low_2`
- 배경: `room_my.png`
- 다음: `wall_dain_2`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 하하, 오늘 재밌었지!

---

### `wall_dain_2`
- 배경: `room_my.png`
- 다음: `wall_dain_2_b`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 야, 지금 시간 돼?

---

### `wall_dain_2_b`
- 배경: `room_my.png`
- 다음: `wall_dain_3`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: *학교 오면 안 되지?*

---

### `wall_dain_3`
- 배경: `room_my.png`
- 다음: `wall_dain_4`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: ...그냥 와. 체육관 뒷문 열어놨어.

---

### `wall_dain_4`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_5`

- 캐릭터: `dain_laugh.png`
**{name}**: *비상등만 켜진 체육관. 다인이 혼자 배구공을 튀기고 있다. 웃는 입매와 달리 어깨가 굳어 있다.*

---

### `wall_dain_5`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_6`

- 캐릭터: `dain_laugh.png`
**다인**: 왔어? 늦었잖아.

---

### `wall_dain_6`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_7`

- 캐릭터: `dain_laugh.png`
**{name}**: 밤에 학교에 왜 있어?

---

### `wall_dain_7`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_7_b`

- 캐릭터: `dain_laugh.png`
**다인**: 가끔 몰래 들어와. 연습하려고.

---

### `wall_dain_7_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_8`

- 캐릭터: `dain_laugh.png`
**다인**: *배구공을 내민다.*

---

### `wall_dain_8`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_8_b`

- 캐릭터: `dain_laugh.png`
**다인**: 토스 올려줘. 한 번만.

---

### `wall_dain_8_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_9`

- 캐릭터: `dain_laugh.png`
**{name}**: *토스를 올려준다. 다인이 뛰어올라 — 스파이크. 착지하는 순간 — 오른쪽 무릎을 움켜잡고 쪼그려 앉는다.*

---

### `wall_dain_9`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_10`

- 캐릭터: `dain_sad.png`
**{name}**: *눈앞이 싸해진다.*

---

### `wall_dain_10`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_11`

- 캐릭터: `dain_sad.png`
**다인**: 아, 아냐. 괜찮아. 그냥 삐끗한 거야. 별거 아...

---

### `wall_dain_11`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_12`

- 캐릭터: `dain_sweat.png`
**{name}**: *무릎 잡은 손이 하얗게 질려 있다. — 별거 아닌 게 아니다.*

---

### `wall_dain_12`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_12_b`

- 캐릭터: `dain_sad.png`
**{name}**: 다인. 괜찮지 않잖아.

---

### `wall_dain_12_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_12_c`

- 캐릭터: `dain_sad.png`
**다인**: 괜찮아. 진짜로.

---

### `wall_dain_12_c`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_13`

- 캐릭터: `dain_normal.png`
**{name}**: ......

---

### `wall_dain_13`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_14`

- 캐릭터: `dain_sad.png`
**{name}**: *아무 말 없이 옆에 앉는다. 다인이 입을 다문다. 체육관 조명이 낮게 웅웅거린다.*

---

### `wall_dain_14`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_14_b`

- 캐릭터: `dain_sad.png`
**다인**: ...전방 십자인대.

---

### `wall_dain_14_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_15`

- 캐릭터: `dain_sad.png`
**다인**: *배구공을 보지 않는다.*

---

### `wall_dain_15`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_16`

- 캐릭터: `dain_sad.png`
**다인**: 작년 여름이야.

---

### `wall_dain_16`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_16_b`

- 캐릭터: `dain_sad.png`
**다인**: *웃지 않는다. 그게 제일 낯설었다.*

---

### `wall_dain_16_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_17`

- 캐릭터: `dain_sad.png`
**다인**: 수술했는데 담당 의료진이 — 되게 조심스럽게 말하더라.

---

### `wall_dain_17`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_18`

- 캐릭터: `dain_sad.png`
**다인**: 수술 끝나고 의사 선생님이 종이에 선을 그어줬어. '일상'은 여기까지, '선수'는 여기서부터. 그 뒤는 잘 기억 안 나.

---

### `wall_dain_18`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_18_b`

- 캐릭터: `dain_sad.png`
**다인**: 병원에서 나오는데 엄마가 울고 있었어. — 나는 못 울었어. 아직 실감이 안 났으니까.

---

### `wall_dain_18_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_18_c`

- 캐릭터: `dain_sad.png`
**다인**: 실감난 건 — 체육관 사물함 정리할 때였어.

---

### `wall_dain_18_c`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_18_d`

- 캐릭터: `dain_sad.png`
**{name}**: ......

---

### `wall_dain_18_d`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_19`

- 캐릭터: `dain_sad.png`
**다인**: *주먹을 쥐었다 폈다 한다.* ...그래서.

---

### `wall_dain_19`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_19_b`

- 캐릭터: `dain_sad.png`
**다인**: 아무한테도 말 안 했어. 부모님한테도. '다인이가 안 뛰면 다인이가 아니지!' — 그 말 듣고 싶지 않아서.

---

### `wall_dain_19_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_20`

- 캐릭터: `dain_sad.png`
**다인**: *유니폼 앞자락을 꽉 쥔다.*

---

### `wall_dain_20`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_20_b`

- 캐릭터: `dain_sad.png`
**다인**: 학교에서 '에너지 넘치네!' 소리 들을 때마다 — 여기가. ...숨이 막혔어.

---

### `wall_dain_20_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_21`

- 캐릭터: `dain_sad.png`
**다인**: ...숨이 끝까지 안 들어왔어.

---

### `wall_dain_21`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_22`

- 캐릭터: `dain_sad.png`
**다인**: 오늘도. 데이트하면서 뛰어다닐 때. 네 옆에서 밝은 척할 때. 무릎이 계속 버티질 못했어.

---

### `wall_dain_22`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_22_b`

- 캐릭터: `dain_sad.png`
**다인**: — 근데 네 앞에서까지 아픈 모습 보이면, 나한테 남는 게 없잖아.

---

### `wall_dain_22_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_choice`

- 캐릭터: `dain_sad.png`
**{name}**: *다인 옆에 앉았다. 코트 바닥이 차갑다. 아무 말도 안 했다.*

---

### `wall_dain_choice`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 선택지:
  1. "...아무 말 안 할게. 그냥 여기 있을게." → `wall_dain_newdream_1` | Dain +3
  2. "울어도 돼. 밝은 척 안 해도 돼. 나한테는." → `wall_dain_cry_1` | Dain +5
  3. "...같이 일어나볼까. 한 번만 더." → `wall_dain_lastspike_1` | Dain +4

- 캐릭터: `dain_sad.png`
**다인**: *배구공을 꼭 안고 고개를 숙였다. 어깨가 떨리고 있다.*

---

### `wall_dain_newdream_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_newdream_2_b`

- 캐릭터: `dain_sad.png`
**{name}**: *그대로 옆에 앉아 있었다. 둘 다 말이 없다. 다인의 운동화 끝만 천천히 흔들린다.*

---

### `wall_dain_newdream_2_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_newdream_3`

- 캐릭터: `dain_sad.png`
**다인**: *먼저 입을 연다.*

---

### `wall_dain_newdream_3`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_newdream_4`

- 캐릭터: `dain_sad.png`
**다인**: ...왜 아무 말 안 해?

---

### `wall_dain_newdream_4`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_newdream_5`

- 캐릭터: `dain_normal.png`
**{name}**: 다인이 말하고 싶을 때 들으려고.

---

### `wall_dain_newdream_5`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_newdream_6`

- 캐릭터: `dain_sad.png`
**다인**: *무릎 위의 손을 본다. 주먹을 쥐었다 폈다 한다.*

---

### `wall_dain_newdream_6`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_newdream_7`

- 캐릭터: `dain_sad.png`
**다인**: 웃기지? 5살 때부터 매일 이 코트에 섰는데... 이제는 다른 걸 생각해야 한다는 게.

---

### `wall_dain_newdream_7`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_newdream_8`

- 캐릭터: `dain_shy.png`
**다인**: 근데 네가 옆에 앉으니까 — 바닥이 덜 차가워.

---

### `wall_dain_newdream_8`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_farewell_1`

- 캐릭터: `dain_shy.png`
**{name}**: *공은 라인 밖에 멈춰 있다. 다인은 손바닥으로 차가운 바닥을 한 번 쓸어 본다.*

---

### `wall_dain_cry_1`
- 배경: `dain_depression_event1.png`
- 다음: `wall_dain_cry_2`

- 캐릭터: `없음`
**다인**: *코트 위에 주저앉았다. 배구공을 껴안고 울기 시작했다.*

---

### `wall_dain_cry_2`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_cry_3`

- 캐릭터: `dain_sad.png`
**다인**: *고개를 숙인다. 빈 체육관 바닥에 물방울이 하나, 둘 떨어진다. 공은 라인 밖에서 멈춰 있다.*

---

### `wall_dain_cry_3`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_cry_4`

- 캐릭터: `dain_sad.png`
**다인**: 혼자서, 매일 아침 무릎에 붕대 감으면서...

---

### `wall_dain_cry_4`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_cry_5`

- 캐릭터: `dain_sad.png`
**다인**: 핸드폰 알람에 적어놨어. '오늘도 웃어'라고...

---

### `wall_dain_cry_5`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_cry_6`

- 캐릭터: `dain_sad.png`
**다인**: 매일 아침 그 알람 보고, 거울 앞에서 억지로 웃었어...

---

### `wall_dain_cry_6`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_farewell_1`

- 캐릭터: `dain_sad.png`
**다인**: *휴대폰을 꺼 버린다. '오늘도 웃어'가 검은 화면 속으로 사라진다. 울음이 잦아들 때까지 체육관 조명만 하얗게 흔들렸다.*

---

### `wall_dain_lastspike_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_2`

- 캐릭터: `dain_sad.png`
**{name}**: *손을 내밀었다. 다인이 잡았다. 둘 다 일어섰다. — 토스를 올려줬다.*

---

### `wall_dain_lastspike_2`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_3`

- 캐릭터: `dain_normal.png`
**다인**: *이를 악물고 뛰어올라 — 최고의 스파이크. 공이 코트에 꽂힌다.*

---

### `wall_dain_lastspike_3`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_3_b`

- 캐릭터: `dain_laugh.png`
**{name}**: *착지하며 무릎을 잡았지만 — 웃고 있다.*

---

### `wall_dain_lastspike_3_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_3_c`

- 캐릭터: `dain_sweat.png`
**다인**: *힘없이 웃는다.* ...아프다.

---

### `wall_dain_lastspike_3_c`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_4`

- 캐릭터: `dain_sweat.png`
**다인**: 근데 웃긴데, 조금 낫다.

---

### `wall_dain_lastspike_4`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_4_b`

- 캐릭터: `dain_sad.png`
**다인**: ...아프다. 근데 네 토스라서, 조금 낫다.

---

### `wall_dain_lastspike_4_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_5`

- 캐릭터: `dain_sad.png`
**다인**: *코트를 둘러본다. 어둡고 텅 빈 체육관.*

---

### `wall_dain_lastspike_5`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_6`

- 캐릭터: `dain_sad.png`
**다인**: 안녕, 코트.

---

### `wall_dain_lastspike_6`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_farewell_1`

- 캐릭터: `dain_sad.png`
**다인**: — 5살부터 13년. 고마웠어.

---

### `wall_dain_farewell_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 플래그: `day4_dain_wall_broken`
- 다음: `wall_dain_farewell_2`

- 캐릭터: `dain_sad.png`
**다인**: *배구공을 내려놓고 먼저 걷는다. 뒤돌아보지 않았다.*

---

### `wall_dain_farewell_2`
- 배경: `school_back.png`
- 다음: `wall_dain_mention_1`

- 캐릭터: `dain_normal.png`
**{name}**: *다인과 체육관을 나온다. 학교 후문 쪽을 지나가는데.*

---

### `wall_dain_mention_1`
- 배경: `school_back.png`
- 다음: `wall_dain_mention_2`

- 캐릭터: `dain_sad.png`
**다인**: 서연이가 나한테 뭐라 그랬는지 알아? ...아무 말도 안 했어. 그냥 나를 봤어.

---

### `wall_dain_mention_2`
- 배경: `school_back.png`
- 다음: `wall_dain_mention_3`

- 캐릭터: `dain_sad.png`
**다인**: 말이라도 해주면 싸울 수 있는데. 아무 말도 안 하면 내가 나쁜 사람 되는 거잖아.

---

### `wall_dain_mention_3`
- 배경: `school_back.png`
- 다음: `wall_dain_skin_check`

- 캐릭터: `dain_normal.png`
**다인**: *걸음이 한 번 끊겼다. 다시 걷기 시작했을 때는 조금 가벼워져 있었다.*

---

### `wall_dain_skin_check`
- 배경: `school_back.png`
- 호감분기: Dain
  - [70+] → `wall_dain_skin70_1`
  - [60+] → `wall_dain_skin60_1`
  - [기본] → `wall_dain_glimpse_1`

- 캐릭터: `dain_normal.png`

<!-- i18n -->

---

### `wall_dain_skin70_1`
- 배경: `school_back.png`
- 다음: `wall_dain_skin70_2`

- 캐릭터: `dain_shy.png`
**다인**: *울다가 안긴다.*

---

### `wall_dain_skin70_2`
- 배경: `school_back.png`
- 다음: `wall_dain_skin70_3`

- 캐릭터: `dain_shy.png`
**다인**: 잠깐만 이대로.

---

### `wall_dain_skin70_3`
- 배경: `school_back.png`
- 플래그: `day4_skinship_dain_70`
- 다음: `wall_dain_glimpse_1`

- 캐릭터: `dain_shy.png`
**{name}**: *셔츠가 젖는다. 다인의 손이 등을 꽉 잡고 있다. 힘이 빠지지 않는다.*

---

### `wall_dain_skin60_1`
- 배경: `school_back.png`
- 다음: `wall_dain_skin60_2`

- 캐릭터: `dain_shy.png`
**{name}**: *학교 후문 옆 벤치에 앉았다. 다인이 아무 예고 없이 무릎 위에 눕는다.*

---

### `wall_dain_skin60_2`
- 배경: `school_back.png`
- 플래그: `day4_skinship_dain_60`
- 다음: `wall_dain_glimpse_1`

- 캐릭터: `dain_shy.png`
**다인**: 5분만. 체력 충전.

---

### `wall_dain_glimpse_1`
- 배경: `school_back.png`
- 다음: `wall_dain_glimpse_2`

- 캐릭터: `없음`
**{name}**: *도서관 별관 창문에 불빛이 보인다. 작은 스탠드 불.*

---

### `wall_dain_glimpse_2`
- 배경: `yuna_hideout.png`
- 다음: `wall_dain_glimpse_4`

- 캐릭터: `yuna_sad.png`
**{name}**: *유나다. 혼자 앉아 있다. 발이 그 자리에서 멈춘다. 유나에게서 오늘 메시지는 없었다.*

---

### `wall_dain_glimpse_4`
- 배경: `school_back.png`
- 다음: `wall_dain_glimpse_4_b`

- 캐릭터: `없음`
**{name}**: *모른 척 지나갔다. 후문까지 걸었는데, 손 안의 쪽지가 계속 접힌 채다.*

---

### `wall_dain_glimpse_4_b`
- 배경: `school_back.png`
- 다음: `wall_dain_glimpse_4_c`

- 캐릭터: `yuna_sad.png` @ 0.35
**{name}**: *밤 10시. 유나에게서 메시지.*

---

### `wall_dain_glimpse_4_c`
- 배경: `school_back.png`
- 다음: `day4_hidden_msg_branch`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *학교 후문. 지금 와.*

---

### `wall_yuna_1`
- 배경: `room_my.png`
- 배경톤: `dream`
- BGM: `night2.mp3`
- 호감분기: Yuna
  - [60+] → `wall_yuna_pre_high_1`
  - [기본] → `wall_yuna_pre_low_1`

- 캐릭터: `없음`
**{name}**: *밤 10시. 유나에게서 메시지. '학교 후문. 지금 와.'*

---

### `wall_yuna_pre_high_1`
- 배경: `room_my.png`
- 배경톤: `dream`
- 다음: `wall_yuna_pre_high_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: ...오늘은 쪽지 없이 말할게.

---

### `wall_yuna_pre_high_2`
- 배경: `room_my.png`
- 배경톤: `dream`
- 다음: `wall_yuna_3`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *쪽지 대신 직접 말한다. 손에는 아무 종이도 없다.*

---

### `wall_yuna_pre_low_1`
- 배경: `room_my.png`
- 배경톤: `dream`
- 다음: `wall_yuna_pre_low_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *쪽지를 건넨다.*

---

### `wall_yuna_pre_low_2`
- 배경: `room_my.png`
- 배경톤: `dream`
- 다음: `wall_yuna_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *말은 나오지 않는다. 유나도 더 묻지 않는다.*

---

### `wall_yuna_2`
- 배경: `school_back.png`
- 배경톤: `dream`
- 다음: `wall_yuna_3`

- 캐릭터: `yuna_normal.png`
**{name}**: *후문등이 깜빡인다. 유나가 그 아래 서 있다. 책은 펼쳐져 있지만, 페이지는 한 장도 넘어가지 않는다.*

---

### `wall_yuna_3`
- 배경: `school_back.png`
- 배경톤: `dream`
- 다음: `wall_yuna_4`

- 캐릭터: `yuna_normal.png`
**유나**: 따라와.

---

### `wall_yuna_4`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_6`

- 캐릭터: `yuna_normal.png`
**유나**: *도서관 별관으로 향한다. 비밀 독서 공간을 지나 — 더 안쪽. 지하 자료실. 먼지가 쌓인 서가 사이. 오래된 봉투를 꺼낸다.*

---

### `wall_yuna_6`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_7`

- 캐릭터: `yuna_normal.png`
**유나**: 이거. 1년 전에 받은 거야.

---

### `wall_yuna_7`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_8`

- 캐릭터: `yuna_sad.png`
**{name}**: *봉투 안에 편지. — '유나에게. 미안해. 말 못 할 사정이 생겼어. — 이준호'*

---

### `wall_yuna_8`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_9`

- 캐릭터: `yuna_sad.png`
**{name}**: ...이준호?

---

### `wall_yuna_9`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_9_b`

- 캐릭터: `yuna_sad.png`
**유나**: 여기 같이 오던 선배. — 유일하게 친했던 사람.

---

### `wall_yuna_9_b`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_10`

- 캐릭터: `yuna_sad.png`
**유나**: *편지를 내려놓는다.*

---

### `wall_yuna_10`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_11`

- 캐릭터: `yuna_sad.png`
**유나**: 중학교 때 나 투명인간이었어. 반에서 아무도 말 안 걸었어.

---

### `wall_yuna_11`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_12`

- 캐릭터: `yuna_sad.png`
**유나**: 선배가 처음이었어. '네 글 좋더라'— 그 말 하나 듣고, 그날은 내가 반에 있었어.

---

### `wall_yuna_12`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_13`

- 캐릭터: `yuna_sad.png`
**유나**: *한 번도 끊지 않고 거기까지 말했다.*

---

### `wall_yuna_13`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_14`

- 캐릭터: `yuna_normal.png`
**유나**: 어느 날 전학 갔어. 연락 없이. 이 편지만 남기고.

---

### `wall_yuna_14`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_14_b`

- 캐릭터: `yuna_sad.png`
**유나**: 내가 거기 있다는 걸 봐준 사람이 사라진 거야. 또 아무도 모를 거였어.

---

### `wall_yuna_14_b`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_14_c`

- 캐릭터: `yuna_sad.png`
**유나**: 1년 동안 혼자 여기 왔어. 혹시 뭔가 남겨놨을까 해서.

---

### `wall_yuna_14_c`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_14_d`

- 캐릭터: `yuna_normal.png`
**유나**: ...없었어.

---

### `wall_yuna_14_d`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_14_e`

- 캐릭터: `yuna_normal.png`
**유나**: *{name}을 본다.*

---

### `wall_yuna_14_e`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_14_f`

- 캐릭터: `yuna_normal.png`
**유나**: 처음에 네가 도서관에 왔을 때.

---

### `wall_yuna_14_f`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_14_g`

- 캐릭터: `yuna_sad.png`
**유나**: 선배랑 분위기가 비슷했어. — 그래서 무서웠어.

---

### `wall_yuna_14_g`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_14_h`

- 캐릭터: `yuna_sad.png`
**유나**: 또 친해지면 또 사라질까 봐.

---

### `wall_yuna_14_h`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_15`

- 캐릭터: `yuna_normal.png`
**{name}**: ......

---

### `wall_yuna_15`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_16`

- 캐릭터: `yuna_shy.png`
**유나**: *고개를 숙이며* ...그래서 일부러 차갑게 굴었어. 미리 밀어내면 덜 아플 줄 알았으니까.

---

### `wall_yuna_16`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_16_b`

- 캐릭터: `yuna_sad.png`
**유나**: 근데 너는 매일 왔어. 조용히. — 사라지지 않고.

---

### `wall_yuna_16_b`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_choice`

- 캐릭터: `yuna_sad.png`
**유나**: *옷소매를 꽉 쥐고 있다. 숨을 고르는 사이, 책등이 손바닥에 눌린다.*

---

### `wall_yuna_choice`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 선택지:
  1. "그 사람의 빈자리까지 대신할 순 없어. 그래도 지금 네 옆에는 있을게." → `wall_yuna_moved_1` | Yuna +4
  2. "지금은 네 말을 듣고 있어." → `wall_yuna_sub_1` | Yuna +3
  3. "...그래서 나한테 접근한 거야? 선배 대신?" → `wall_yuna_reject_1` | Yuna -10

- 캐릭터: `yuna_sad.png`
**유나**: *책을 쥔 손에 힘을 주고 있다. 대답을 기다리는 동안 편지 모서리가 조금 구겨졌다.*

---

### `wall_yuna_moved_1`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_moved_2`

- 캐릭터: `yuna_normal.png`
**유나**: ...처음엔 선배의 그림자를 쫓았을지도 몰라.

---

### `wall_yuna_moved_2`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_moved_3`

- 캐릭터: `yuna_normal.png`
**유나**: 근데 지금은...

---

### `wall_yuna_moved_3`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_moved_4`

- 캐릭터: `yuna_shy.png`
**유나**: *고개를 든다. {name}을 본다.*

---

### `wall_yuna_moved_4`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_moved_5`

- 캐릭터: `yuna_shy.png`
**유나**: 지금은 너를 보고 있어.

---

### `wall_yuna_moved_5`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 플래그: `day4_yuna_wall_broken`
- 다음: `wall_yuna_moved_5_b`

- 캐릭터: `yuna_shy.png`
**유나**: *숨을 천천히 내쉰다. 편지 모서리가 손끝에서 조금 구겨진다.*

---

### `wall_yuna_moved_5_b`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_skin_check`

- 캐릭터: `yuna_shy.png`
**유나**: *숨을 천천히 내쉰다. 옷소매를 쥔 손끝이 조금 떨린다.*

---

### `wall_yuna_skin_check`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 호감분기: Yuna
  - [70+] → `wall_yuna_skin70_1`
  - [60+] → `wall_yuna_skin60_1`
  - [기본] → `wall_yuna_glimpse_1`

- 캐릭터: `yuna_normal.png`

<!-- i18n -->

---

### `wall_yuna_skin70_1`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_skin70_2`

- 캐릭터: `yuna_shy.png`
**유나**: 가까이 와도 돼?

---

### `wall_yuna_skin70_2`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_skin70_3`

- 캐릭터: `yuna_shy.png`
**{name}**: *어깨에 기댄다. 손을 꼭 잡는다.*

---

### `wall_yuna_skin70_3`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 플래그: `day4_skinship_yuna_70`
- 다음: `wall_yuna_glimpse_1`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나의 손이 따뜻하다. 그것만.*

---

### `wall_yuna_skin60_1`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_skin60_2`

- 캐릭터: `yuna_shy.png`
**{name}**: *지하 자료실 서가 사이. 유나가 뒤에서 등에 이마를 댄다.*

---

### `wall_yuna_skin60_2`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 플래그: `day4_skinship_yuna_60`
- 다음: `wall_yuna_glimpse_1`

- 캐릭터: `yuna_shy.png`
**유나**: ...따뜻해서.

---

### `wall_yuna_sub_1`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_sub_2`

- 캐릭터: `yuna_sad.png`
**유나**: ...그래. 둘을 헷갈리면 안 되는 거였지.

---

### `wall_yuna_sub_2`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 플래그: `day4_yuna_wall_broken`
- 다음: `wall_yuna_glimpse_1`

- 캐릭터: `yuna_smile.png`
**유나**: *작게 웃었다. 손끝이 편지 모서리를 한 번 더 누른다.*

---

### `wall_yuna_reject_1`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_reject_1_b`

- 캐릭터: `yuna_sad.png`
**유나**: ......그렇게 생각해?

---

### `wall_yuna_reject_1_b`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_reject_2`

- 캐릭터: `yuna_sad.png`
**유나**: *편지를 다시 집어든다.*

---

### `wall_yuna_reject_2`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_reject_3`

- 캐릭터: `yuna_sad.png`
**유나**: ...그래. 그랬을 수도 있어.

---

### `wall_yuna_reject_3`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_glimpse_1`

- 캐릭터: `yuna_sad.png`
**유나**: *돌아선다. 걸음이 빠르다. 책갈피 하나가 주머니에서 떨어졌지만, 줍지 않는다.*

---

### `wall_yuna_glimpse_1`
- 배경: `school_back.png`
- 배경톤: `dream`
- 다음: `wall_yuna_glimpse_2`

- 캐릭터: `없음`
**{name}**: *유나를 두고 학교를 나온다. 정문을 지나가는데.*

---

### `wall_yuna_glimpse_2`
- 배경: `school_back.png`
- 배경톤: `dream`
- 다음: `wall_yuna_glimpse_3_b`

- 캐릭터: `seyoun_pout.png`
**{name}**: *교문 앞 가로등 아래. 서연이 서 있었다. 핸드폰을 들고 글자를 썼다가 지운다. 다시 썼다가 지운다. 화면 빛이 안경에만 남는다.*

---

### `wall_yuna_glimpse_3_b`
- 배경: `school_back.png`
- 배경톤: `dream`
- 다음: `wall_yuna_glimpse_4`

- 캐릭터: `seyoun_normal.png`
**서연**: *핸드폰을 주머니에 넣고 돌아선다. 등이 곧다. 가로등 아래 그림자만 잠깐 흔들린다.*

---

### `wall_yuna_glimpse_4`
- 배경: `school_back.png`
- 배경톤: `dream`
- 다음: `day4_hidden_msg_branch`

- 캐릭터: `없음`
**{name}**: *한동안 학교 뒤편을 떠나지 못하다가 집으로 돌아왔다. 주머니 안 핸드폰은 조용하다.*

---

### `day4_night_regret`
- 배경: `room_my.png`
- 다음: `day4_night_regret_msg_branch`

- 캐릭터: `없음`
**{name}**: *채팅창에는 입력하다 만 문장이 남아 있다. 커서가 끝에서 깜빡인다.*

---

### `day4_night_regret_msg_branch`
- 배경: `room_my.png`
- 분기:
  - [`route_seoyeon`] → `day4_night_regret_msg_seo`
  - [`route_dain`] → `day4_night_regret_msg_dain`
  - [`route_yuna`] → `day4_night_regret_msg_yuna`
  - [기본] → `day4_night_regret_msg`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `day4_night_regret_msg_seo`
- 배경: `room_my.png`
- 다음: `day4_night_regret_reply`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 오늘 바람 좋았어. 그래서... 조금 기다렸어.

---

### `day4_night_regret_msg_dain`
- 배경: `room_my.png`
- 다음: `day4_night_regret_reply`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 야 오늘 재밌었다. ...나 혼자만 들뜬 건 아니었으면 했어.

---

### `day4_night_regret_msg_yuna`
- 배경: `room_my.png`
- 다음: `day4_night_regret_reply`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: ...오늘. 조금 기대했어. 그래서 더 조용해졌어.

---

### `day4_night_regret_msg`
- 배경: `room_my.png`
- 다음: `day4_night_regret_reply`

- 캐릭터: `없음`
**{name}**: *핸드폰 화면이 켜진다. 메시지는 한 줄이다. 읽음 표시가 늦게 붙는다.*

---

### `day4_night_regret_reply`
- 배경: `room_my.png`
- 다음: `day4_hidden_msg_branch`

- 캐릭터: `없음`
**{name}**: *답장을 쓰다 지운다. 입력창에는 받침 하나만 남았다가, 그것도 사라진다.*

---

### `day4_night_reflect`
- 배경: `room_my.png`
- 다음: `day4_hidden_msg_branch`

- 캐릭터: `없음`
**{name}**: *토요일이 이렇게 지나갔다. 내일은 학교 행사. — 일요일인데도 등교다.*

---

### `day4_hidden_msg_branch`
- 배경: `room_my.png`
- 분기:
  - [`homeroom_route_unlocked`] → `night_homeroom_msg_1`
  - [`nurse_route_unlocked`] → `night_nurse_msg_1`
  - [기본] → `day4_night_sleep`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `night_homeroom_msg_1`
- 배경: `room_my.png`
- 다음: `night_homeroom_msg_2`

- 캐릭터: `teacher_sad.png` @ 0.35
**담임선생님**: *메시지* 원고 거의 막바지인데. ...네가 먼저 봐줬으면 하는 부분이 있어.

---

### `night_homeroom_msg_2`
- 배경: `room_my.png`
- 다음: `night_homeroom_msg_3`

- 캐릭터: `teacher_normal.png` @ 0.35
**담임선생님**: *메시지* 내일 시간 되면 교무실로 와. — 수업 끝나고.

---

### `night_homeroom_msg_3`
- 배경: `room_my.png`
- 다음: `day4_hidden_msg_after_homeroom`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *밤 11시. 담임선생님에게서 문자가 왔다. 짧은 문장 세 줄. — 먼저 봐줬으면 한다는 그 말이 자꾸 남는다.*

---

### `day4_hidden_msg_after_homeroom`
- 배경: `room_my.png`
- 분기:
  - [`nurse_route_unlocked`] → `night_nurse_msg_1`
  - [기본] → `day4_night_sleep`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `night_nurse_msg_1`
- 배경: `room_my.png`
- 다음: `night_nurse_msg_2`

- 캐릭터: `nurse_normal.png` @ 0.35
**보건선생님**: 오늘 보건실에서 네가 한 말... 밤에 자꾸 떠올라

---

### `night_nurse_msg_2`
- 배경: `room_my.png`
- 다음: `night_nurse_msg_3`

- 캐릭터: `nurse_normal.png` @ 0.35
**{name}**: *읽음 표시가 뜬다. 10초. 20초. 추가 메시지 없음. — 1분 뒤.*

---

### `night_nurse_msg_3`
- 배경: `room_my.png`
- 다음: `night_nurse_msg_4`

- 캐릭터: `nurse_normal.png` @ 0.35
**보건선생님**: 아 이상한 뜻 아니야. 그냥 인상 깊었다는 거지.

---

### `night_nurse_msg_4`
- 배경: `room_my.png`
- 다음: `day4_night_sleep`

- 캐릭터: `nurse_normal.png` @ 0.35
**보건선생님**: ...자.

---

### `day4_night_sleep`
- 배경: `room_my.png`
- 다음: `day4_final`

- 캐릭터: `없음`
**{name}**: *눈을 감는다. 내일이 마지막이다. — 할 말이 남아 있다.*

---

### `day4_final`
- 배경: `room_my.png`
- 다음: `morning5_start`

- 캐릭터: `없음`
**{name}**: *토요일 밤이 깊어간다. 내일은 일요일 — 학교 행사 마지막 날이다.*

---

# 5일차

## 5일차 — 아침 `day5_1_morning`

### `morning5_start`
- 배경: `room_school.png`
- BGM: `morning.mp3`
- 다음: `morning5_start_branch`

- 캐릭터: `없음`
**{name}**: *다섯째 날. 일요일이지만 학교 행사가 있다. 교복 소매 끝이 더는 손목을 긁지 않는다.*

---

### `morning5_start_branch`
- 배경: `room_school.png`
- 분기:
  - [`day4_confession_accepted`] → `morning5_committed_start`
  - [기본] → `morning5_start_b`

- 캐릭터: `없음`

<!-- i18n -->

---

### `morning5_start_b`
- 배경: `room_school.png`
- 다음: `morning5_start_2_b`

- 캐릭터: `없음`
**{name}**: *교실에 들어서자마자 세 방향에서 시선이 온다. 책상 위 쪽지, 체육복 끈에 묶인 리본, 잠금화면의 알림 하나.*

---

### `morning5_start_2_b`
- 배경: `room_school.png`
- 다음: `morning5_mood_check`

- 캐릭터: `없음`
**{name}**: *책상 위에 쪽지가 놓여 있다. 서연의 글씨.*

---

### `morning5_mood_check`
- 배경: `room_school.png`
- 호감분기: selectByHighestAffinity
  - [80+] → `morning5_mood_high`
  - [50+] → `morning5_mood_mid`
  - [기본] → `morning5_mood_low`
- 다음: `morning5_mood_low`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `morning5_mood_high`
- 배경: `room_school.png`
- 다음: `morning5_gate`

- 캐릭터: `없음`
**{name}**: 마지막 날이다. 주머니 속 옥상 열쇠가 걸을 때마다 손등에 닿는다.

---

### `morning5_mood_mid`
- 배경: `room_school.png`
- 다음: `morning5_gate`

- 캐릭터: `없음`
**{name}**: 마지막 날. 아직 확신이 없다. 하지만 가야 한다.

---

### `morning5_mood_low`
- 배경: `room_school.png`
- 다음: `morning5_gate`

- 캐릭터: `없음`
**{name}**: 마지막 날. 잠금화면에 남은 이름 셋을 한 번씩 눌러 본다. 아무 대화방도 바로 열지 못한다.

---

### `morning5_gate`
- 배경: `school.png`
- 다음: `morning5_seo_note_1`

- 캐릭터: `없음`
**{name}**: *교문 앞에서 소매를 한 번 당긴다. 손목에 더는 자국이 남지 않는다.*

---

### `morning5_seo_note_1`
- 배경: `room_school.png`
- 다음: `morning5_seo_note_1_b`

- 캐릭터: `seyoun_normal.png`
**{name}**: *책상 위에 쪽지가 놓여 있다. 서연의 글씨. — '오후에 잠깐 시간 내. 옥상 열어 놓을게. — 서연'*

---

### `morning5_seo_note_1_b`
- 배경: `school_hallway.png`
- 분기:
  - [`yuna_trust_broken`] → `morning5_yuna_story_gone`
  - [기본] → `morning5_seo_note_1_c`

- 캐릭터: `없음`
**{name}**: *복도 문예부 전시 코너를 지나간다. 게시판 앞에서 발이 멈춘다.*

---

### `morning5_yuna_story_gone`
- 배경: `school_hallway.png`
- 다음: `morning5_yuna_story_gone_2`

- 캐릭터: `없음`
**{name}**: *게시판에 핀 자국만 남아 있다. 소설이 붙어 있었을 자리. — 떼어 간 거다. 아니, 처음부터 붙이지 않은 건가.*

---

### `morning5_yuna_story_gone_2`
- 배경: `school_hallway.png`
- 다음: `morning5_return_class`

- 캐릭터: `없음`
**{name}**: *도서관의 빈자리, 사라진 책갈피, 붙이지 않은 소설. 게시판 압정 자국만 네 개 남아 있다.*

---

### `morning5_seo_note_1_c`
- 배경: `school_hallway.png`
- 다음: `morning5_yuna_story_1`

- 캐릭터: `없음`
**{name}**: *게시판에 단편소설이 붙어 있다. 제목: '도서관에서 만난 사람에게'. 연보라색 잉크. 접힌 모서리에는 작은 빵 부스러기가 붙어 있다.*

---

### `morning5_yuna_story_1`
- 배경: `school_hallway.png`
- 다음: `morning5_yuna_story_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *소설 속 인물은 도서관에서 잠든 누군가의 어깨에 담요를 덮어준다. — 그건 나밖에 모르는 장면이다.*

---

### `morning5_yuna_story_2`
- 배경: `school_hallway.png`
- 다음: `morning5_yuna_story_4`

- 캐릭터: `없음`
**{name}**: *마지막 문장. '그 사람이 눈을 떴을 때, 나는 이미 없었다. 쪽지만 남겼다. — 다음에도 여기 있을게.' 연보라색 잉크. 첫 쪽지와 같은 색이다.*

---

### `morning5_yuna_story_4`
- 배경: `school_hallway.png`
- 다음: `morning5_return_class`

- 캐릭터: `yuna_normal.png`
**{name}**: *게시판 아래 구석에 작게 — '이건 소설이야. 진짜가 아니야.' 지우개로 문지른 자국이 남아 있다.*

---

### `morning5_return_class`
- 배경: `room_school.png`
- 다음: `morning5_dain_1`

- 캐릭터: `dain_normal.png`
**{name}**: *교실로 돌아오니 다인이 기다리고 있다.*

---

### `morning5_dain_1`
- 배경: `room_school.png`
- 다음: `morning5_dain_1_b`

- 캐릭터: `dain_normal.png`
**다인**: 야, 오늘 체육 이벤트 파트너로 너 써놨어.

---

### `morning5_dain_1_b`
- 배경: `room_school.png`
- 다음: `morning5_dain_2`

- 캐릭터: `dain_normal.png`
**{name}**: ...허락도 없이?

---

### `morning5_dain_2`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_check`

- 캐릭터: `dain_laugh.png`
**다인**: 도망가면 화낸다?

---

### `morning5_committed_start`
- 배경: `room_school.png`
- 분기:
  - [`route_seoyeon`] → `morning5_committed_seo`
  - [`route_yuna`] → `morning5_committed_yuna`
  - [`route_dain`] → `morning5_committed_dain`
  - [기본] → `hidden_homeroom_d5_check`

- 캐릭터: `없음`

<!-- i18n -->

---

### `morning5_committed_seo`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_check`

- 캐릭터: `seyoun_normal.png`
**{name}**: *책상 위에 새 쪽지는 없다. 대신 어제 옥상에서 마주 본 서연의 눈빛이 아직 선명하다. 유나와 다인은 행사 준비 얘기만 짧게 건넨다.*

---

### `morning5_committed_yuna`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_check`

- 캐릭터: `yuna_normal.png`
**{name}**: *새 메모는 없다. 대신 어제 유나가 드물게 오래 붙잡고 있던 시선이 아직 남아 있다. 서연과 다인은 행사 준비 얘기만 짧게 건넨다.*

---

### `morning5_committed_dain`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_check`

- 캐릭터: `dain_normal.png`
**{name}**: *어제 체육관에서 다인이 마지막으로 숨을 고르던 얼굴이 먼저 떠오른다. 서연과 유나는 행사 준비 얘기만 짧게 건넨다.*

---

### `hidden_homeroom_d5_check`
- 배경: `school_hallway.png`
- 배경톤: `empty`
- 분기:
  - [`homeroom_day4`] → `hidden_homeroom_d5_1`
  - [기본] → `hidden_nurse_d5_check`

- 캐릭터: `teacher_normal.png`
**{name}**: *행사 준비 시간. 복도를 걷는데 — 빈 교실 앞을 지나간다. 문이 열려 있다.*

---

### `hidden_homeroom_d5_1`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_1_b`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *교탁에 앉아 있다. — 원고가 아니라, 봉투를 들고 있다. 갈색 봉투.*

---

### `hidden_homeroom_d5_1_b`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_1_c`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...아.

---

### `hidden_homeroom_d5_1_c`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_1_d`

- 캐릭터: `teacher_normal.png`
**{name}**: 선생님.

---

### `hidden_homeroom_d5_1_d`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_1_e`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *봉투를 들어 보이며* ...이거.

---

### `hidden_homeroom_d5_1_e`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_2`

- 캐릭터: `teacher_normal.png`
**{name}**: 뭔데요?

---

### `hidden_homeroom_d5_2`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_3`

- 캐릭터: `teacher_sad.png`
**담임선생님**: 원고. 미완성이긴 한데... 네가 먼저 봐줬으면 해서.

---

### `hidden_homeroom_d5_3`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 7년 동안 아무한테도 안 보여줬어. — 업무 외 행동이긴 한데.

---

### `hidden_homeroom_d5_4`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_5`

- 캐릭터: `teacher_sad.png`
**{name}**: ...원고를 받는다. 종이 무게가 손바닥에 묵직하게 남는다.

---

### `hidden_homeroom_d5_5`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_choice`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...이걸 남 먼저 보여주는 건 아직 떨리네.

---

### `hidden_homeroom_d5_choice`
- 배경: `room_school.png`
- 배경톤: `empty`
- 선택지:
  1. "오래 붙잡으셨잖아요. 그만큼 괜찮을 거예요." → `hidden_homeroom_d5_praise_trap_1` | Teacher -25 | 플래그: `teacher_praise_broken`
  2. "잠깐만 읽어봐도 돼요? 말은 그다음에 할게요." → `hidden_homeroom_d5_correct_1` | Teacher +16

- 캐릭터: `teacher_sad.png`
**{name}**: *원고를 안고 있다. 봉투가 팔 안쪽을 누른다.*

---

### `hidden_homeroom_d5_praise_trap_1`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *멈춘다. 표정은 금방 돌아왔지만, 봉투가 손 안에서 조금 구겨졌다.*

---

### `hidden_homeroom_d5_praise_trap_2`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...읽지도 않고?

---

### `hidden_homeroom_d5_praise_trap_3`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_4`

- 캐릭터: `teacher_normal.png`
**{name}**: 아, 그건 — 오래 붙잡으셨으니까요. 그만큼 괜찮을 거예요.

---

### `hidden_homeroom_d5_praise_trap_4`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_5`

- 캐릭터: `teacher_sad.png`
**담임선생님**: ...그래.

---

### `hidden_homeroom_d5_praise_trap_5`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_6`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *손을 뻗는다. 원고를 가져간다. 천천히. 다시 봉투에 넣는다.*

---

### `hidden_homeroom_d5_praise_trap_6`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_7`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 됐어. 시간 뺏어서 미안.

---

### `hidden_homeroom_d5_praise_trap_7`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_8`

- 캐릭터: `teacher_normal.png`
**{name}**: 선생님—

---

### `hidden_homeroom_d5_praise_trap_8`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_9`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 7년 동안 출판사에 세 번 보냈어. 다 떨어졌어. 그중 두 번이 — '오래 붙잡으셨으니 그만큼 의미가 있을 겁니다'로 시작하는 거절 메일이었어.

---

### `hidden_homeroom_d5_praise_trap_9`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_10`

- 캐릭터: `teacher_sad.png`
**{name}**: *봉투 모서리에 붙은 반송 스티커 자국이 눈에 들어온다.*

---

### `hidden_homeroom_d5_praise_trap_10`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_11`

- 캐릭터: `teacher_sad.png`
**담임선생님**: ...읽고 말해줄 줄 알았어. — 학생한테는 덜 들킬 줄 알고 보여준 건데.

---

### `hidden_homeroom_d5_praise_trap_11`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_12`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 가 봐. 행사 시간 늦겠다.

---

### `hidden_homeroom_d5_praise_trap_12`
- 배경: `room_school.png`
- 배경톤: `empty`
- 플래그: `homeroom_day5`, `teacher_praise_broken`
- 다음: `hidden_nurse_d5_check`

- 캐릭터: `없음`
**{name}**: *교실 문을 닫고 나왔다. 봉투는 담임 책상 위에 그대로 있다. 겉면에 붙은 반송 스티커 자국이 손톱만큼 남아 있었다.*

---

### `hidden_homeroom_d5_correct_1`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *멈춘다. 종이 끝이 손 안에서 조금 휘어진다.*

---

### `hidden_homeroom_d5_correct_2`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...여기서?

---

### `hidden_homeroom_d5_correct_3`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_4`

- 캐릭터: `teacher_normal.png`
**{name}**: 네. 아무 말이나 하고 싶진 않아서요.

---

### `hidden_homeroom_d5_correct_4`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 그래. — 잠깐만.

---

### `hidden_homeroom_d5_correct_5`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_6`

- 캐릭터: `teacher_normal.png`
**{name}**: *봉투를 열자 종이 냄새가 올라온다. 마지막 장 끝이 비어 있다. 빨간 펜으로 지운 문장 아래, 다시 시작하다 멈춘 흔적이 겹쳐 있다.*

---

### `hidden_homeroom_d5_correct_6`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_7`

- 캐릭터: `teacher_shy.png`
**담임선생님**: ...거기까지 봤어?

---

### `hidden_homeroom_d5_correct_7`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_8`

- 캐릭터: `teacher_shy.png`
**담임선생님**: 마지막 장만 보면 손이 멈춰. 몇 년째 그래.

---

### `hidden_homeroom_d5_correct_8`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_9`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *말끝을 삼킨다. 비어 있는 마지막 줄만큼 교실이 조용해진다.*

---

### `hidden_homeroom_d5_correct_9`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_10`

- 캐릭터: `teacher_normal.png`
**{name}**: 그 줄, 같이 봐요.

---

### `hidden_homeroom_d5_correct_10`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_11`

- 캐릭터: `teacher_smile.png`
**담임선생님**: ...학생이?

---

### `hidden_homeroom_d5_correct_11`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_12`

- 캐릭터: `teacher_smile.png`
**{name}**: 네. 저는 지금 읽고 있으니까요.

---

### `hidden_homeroom_d5_correct_12`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_13`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *웃는다. 클립보드가 책상 위로 내려간다.*

---

### `hidden_homeroom_d5_correct_13`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_14`

- 캐릭터: `teacher_smile.png`
**담임선생님**: ...받을게. 그 제안.

---

### `hidden_homeroom_d5_correct_14`
- 배경: `room_school.png`
- 배경톤: `empty`
- 플래그: `teacher_truth_seen`
- 다음: `hidden_homeroom_d5_6`

- 캐릭터: `없음`
**{name}**: *원고를 다시 안는다. 담임이 반송 스티커 자국을 엄지로 문지른다. 종이 모서리가 손바닥 안에서 조금 구겨진다.*

---

### `hidden_homeroom_d5_6`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...그럼 맡길게. 제일 먼저.

---

### `hidden_homeroom_d5_6_b`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_c`

- 캐릭터: `teacher_normal.png`
**{name}**: *어제 카페에서 했던 말이 떠오른다. 원고 봉투가 팔 안쪽에 묵직하게 닿는다.*

---

### `hidden_homeroom_d5_6_c`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_d`

- 캐릭터: `teacher_shy.png`
**{name}**: *봉투가 손 안에서 약간 휜다. 담임의 손이 아직 책상 끝에 남아 있다.*

---

### `hidden_homeroom_d5_6_d`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_e`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...읽고 나서 솔직하게 말해줘. — 선생님한테 예의 지킬 필요 없어.

---

### `hidden_homeroom_d5_6_e`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_f`

- 캐릭터: `teacher_normal.png`
**{name}**: 선생님.

---

### `hidden_homeroom_d5_6_f`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_g`

- 캐릭터: `teacher_normal.png`
**{name}**: 그 말, 이제 안 하셔도 돼요.

---

### `hidden_homeroom_d5_6_g`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_h`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *이번엔 출석부로 얼굴을 가리지 않는다.*

---

### `hidden_homeroom_d5_6_h`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_i`

- 캐릭터: `teacher_smile.png`
**담임선생님**: ...그 말을 학생한테 듣는 날이 올 줄은 몰랐다.

---

### `hidden_homeroom_d5_6_i`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_j`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *원고 봉투의 접힌 모서리를 펴준다.*

---

### `hidden_homeroom_d5_6_j`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_k`

- 캐릭터: `teacher_shy.png`
**담임선생님**: ...제대로 읽어줘.

---

### `hidden_homeroom_d5_6_k`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_l`

- 캐릭터: `teacher_normal.png`
**{name}**: *대답하기 전에 봉투 모서리를 먼저 만지게 된다.*

---

### `hidden_homeroom_d5_6_l`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_m`

- 캐릭터: `teacher_normal.png`
**{name}**: 읽을게요. 제대로.

---

### `hidden_homeroom_d5_6_m`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_n`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *머리카락을 넘기며* ...감상문은 안 받아.

---

### `hidden_homeroom_d5_6_n`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_o`

- 캐릭터: `teacher_smile.png`
**{name}**: 거짓말이시죠.

---

### `hidden_homeroom_d5_6_o`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_p`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *작게 웃으며* ...맞아. 한 줄이라도 써 줘.

---

### `hidden_homeroom_d5_6_p`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_q`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *문 앞에서 한 번 멈춘다. 클립보드 끝을 손가락으로 두 번 눌렀다가 놓는다.*

---

### `hidden_homeroom_d5_6_q`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_r`

- 캐릭터: `teacher_normal.png`
**담임선생님**: {name}.

---

### `hidden_homeroom_d5_6_r`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_s`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *멈춘다. 클립보드를 꽉 잡는다. — 그리고 천천히 고개를 돌린다.*

---

### `hidden_homeroom_d5_6_s`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_t`

- 캐릭터: `teacher_sad.png`
**담임선생님**: ...졸업하면. *목소리가 갈라진다.* 그래. 졸업하면.

---

### `hidden_homeroom_d5_6_t`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_7`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *같은 말을 다시 삼킨다. 클립보드 끝이 문틀에 가볍게 닿는다.*

---

### `hidden_homeroom_d5_7`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_7_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 졸업하면 — 한 번 보자. 선생님이 아닌 이름으로.

---

### `hidden_homeroom_d5_7_b`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_7_c`

- 캐릭터: `teacher_normal.png`
**{name}**: *문틀에 닿아 있던 클립보드 끝이 천천히 떨어진다.*

---

### `hidden_homeroom_d5_7_c`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_8`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...알아. 지금은 안 되는 말인 거. 그래도 오늘은 여기까지 말할게.

---

### `hidden_homeroom_d5_8`
- 배경: `room_school.png`
- 배경톤: `empty`
- 플래그: `homeroom_day5`
- 스탯: Teacher +5
- 다음: `hidden_homeroom_d5_freetalk`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *돌아선다. 긴 머리카락이 흔들리고, 클립보드 끝이 팔꿈치에 눌린다.*

---

### `hidden_homeroom_d5_freetalk`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_nurse_d5_check`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *원고 봉투를 두 손으로 누르며 웃는다.* 마지막이니까, 조금만 더 솔직해질게.

---

### `hidden_nurse_d5_check`
- 배경: `school_hallway.png`
- 분기:
  - [`nurse_day4`] → `hidden_nurse_d5_1`
  - [기본] → `morning5_end_branch`

- 캐릭터: `없음`
**{name}**: *행사 중간 쉬는 시간. 보건실 앞을 지나간다.*

---

### `hidden_nurse_d5_1`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_1_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 어? {name}. 벌써 마지막 날이네. 행사 끝나면 정말 끝이겠다.

---

### `hidden_nurse_d5_1_b`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_1_c`

- 캐릭터: `nurse_normal.png`
**{name}**: *행사 마지막 날이라는 말 뒤에 보건선생님이 청진기를 한 번 만진다.*

---

### `hidden_nurse_d5_1_c`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_1_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *가볍게 웃으며* 졸업하면 놀러 와.

---

### `hidden_nurse_d5_1_d`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_1_e`

- 캐릭터: `nurse_normal.png`
**{name}**: 졸업은 아직 먼데요.

---

### `hidden_nurse_d5_1_e`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_1_f`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...그전에도 아프면 와.

---

### `hidden_nurse_d5_1_f`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_2_b`

- 캐릭터: `nurse_normal.png`
**{name}**: *'아프면 와.' 보건선생님은 말하고 나서 종이컵 두 개를 든 손을 바꿔 쥔다.*

---

### `hidden_nurse_d5_2_b`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_2_c`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *문을 열고 나온다. 물러설 틈도 없이 마주쳤다.*

---

### `hidden_nurse_d5_2_c`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *멈칫하며* ...또 왔네.

---

### `hidden_nurse_d5_3`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_b`

- 캐릭터: `nurse_normal.png`
**{name}**: 안 아파도 가면 안 돼요?

---

### `hidden_nurse_d5_3_b`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_c`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *웃음이 먼저 멎는다.*

---

### `hidden_nurse_d5_3_c`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...그건.

---

### `hidden_nurse_d5_3_d`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_e`

- 캐릭터: `nurse_normal.png`
**{name}**: 선생님?

---

### `hidden_nurse_d5_3_e`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_f`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *다시 웃으며* 그건 졸업하고 물어봐. — 그때는 대답해줄게.

---

### `hidden_nurse_d5_3_f`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_g`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *밴드 상자 뚜껑을 닫았다가 다시 연다.*

---

### `hidden_nurse_d5_3_g`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_h`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 자, 가 봐. 행사 빠지면 안 되지.

---

### `hidden_nurse_d5_3_h`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_i`

- 캐릭터: `nurse_angry.png`
**보건선생님**: *보건실 안으로 들어가려다 — 멈춘다.*

---

### `hidden_nurse_d5_3_i`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_4`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...{name}.

---

### `hidden_nurse_d5_4`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_4_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...밴드 안 떨어지게 꼭 눌러. — 오늘은 직접 안 붙여줄게.

---

### `hidden_nurse_d5_4_b`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_4_c`

- 캐릭터: `nurse_normal.png`
**{name}**: 선생님.

---

### `hidden_nurse_d5_4_c`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_4_d`

- 캐릭터: `nurse_normal.png`
**{name}**: *어제까지는 자연스러웠던 침묵이 오늘은 종이컵 사이에 걸려 있다.*

---

### `hidden_nurse_d5_4_d`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 마지막 날이네.

---

### `hidden_nurse_d5_5`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...{name}. 밴드 붙여줄까?

---

### `hidden_nurse_d5_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "네, 마지막이니까. 한 번만." → `hidden_nurse_d5_choice_a` | Nurse +11
  2. "밴드 말고 전화번호요" → `hidden_nurse_d5_choice_b` | Nurse +5

- 캐릭터: `nurse_normal.png`
**{name}**: *손등에는 아무 상처도 없다. 밴드 상자만 열려 있다.*

---

### `hidden_nurse_d5_choice_a`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_a_b`

- 캐릭터: `nurse_shy.png`
**보건선생님**: *밴드를 천천히 붙인다. 밴드에 작은 글씨가 적혀 있다.*

---

### `hidden_nurse_d5_choice_a_b`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...한 번만이라면서, 왜 그렇게 말해.

---

### `hidden_nurse_d5_choice_b`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *웃음이 멎는다.* ...그건.

---

### `hidden_nurse_d5_choice_b_b`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_c`

- 캐릭터: `nurse_shy.png`
**보건선생님**: *웃다가 멈춘다. 안경을 고쳐 쓰는 손이 조금 늦다.*

---

### `hidden_nurse_d5_choice_b_c`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...전화번호. 의료 상담용?

---

### `hidden_nurse_d5_choice_b_d`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_e`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *안경을 고쳐 쓰며* ...알았어. 근데 졸업하고 써.

---

### `hidden_nurse_d5_choice_b_e`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_f`

- 캐릭터: `nurse_angry.png`
**{name}**: *'졸업하고'. 전화번호는 밴드 포장지 아래로 반쯤 들어가 있다.*

---

### `hidden_nurse_d5_choice_b_f`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_g`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 밴드 붙여줄까?

---

### `hidden_nurse_d5_choice_b_g`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_6`

- 캐릭터: `nurse_shy.png`
**{name}**: ...상처 없는데요.

---

### `hidden_nurse_d5_6`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_6_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 알아. 그냥 핑계가 필요했어.

---

### `hidden_nurse_d5_6_b`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_6_c`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *밴드를 꺼내 {name}의 손등에 붙인다. 움직임은 천천히 이어지고, 밴드 끝에 작은 글씨가 적혀 있다.*

---

### `hidden_nurse_d5_6_c`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_flag_check`

- 캐릭터: `nurse_normal.png`
**{name}**: *밴드 끝에 작은 글씨. '졸업하면 보건실 말고 카페에서 만나자 — ♡' 보건선생님은 안경만 고쳐 쓴다.*

---

### `hidden_nurse_d5_flag_check`
- 배경: `school_hallway.png`
- 분기:
  - [`homeroom_day5`] → `hidden_nurse_d5_7_both`
  - [기본] → `hidden_nurse_d5_7`

<!-- i18n -->

---

### `hidden_nurse_d5_7`
- 배경: `school_hallway.png`
- 플래그: `nurse_day5`
- 스탯: Nurse +7
- 다음: `hidden_nurse_d5_freetalk`

<!-- i18n -->

---

### `hidden_nurse_d5_7_both`
- 배경: `school_hallway.png`
- 플래그: `nurse_day5`, `both_hidden_day5`
- 스탯: Nurse +7
- 다음: `hidden_nurse_d5_freetalk`

<!-- i18n -->

---

### `hidden_nurse_d5_freetalk`
- 배경: `school_hallway.png`
- 다음: `morning5_end_branch`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건실 문패를 손끝으로 한 번 두드린다.* 이제 변명 만들 시간도 거의 없네.

---

### `morning5_end_branch`
- 배경: `room_school.png`
- 분기:
  - [`day4_confession_accepted`] → `morning5_committed_end`
  - [기본] → `morning5_end`

- 캐릭터: `없음`

<!-- i18n -->

---

### `morning5_end`
- 배경: `room_school.png`
- 분기:
  - [`route_dain`] → `tour_dain_1_check`
  - [`route_yuna`] → `tour_yuna_1_check`
  - [`route_seoyeon`] → `tour_seo_1`
  - [기본] → `tour_seo_1`

- 캐릭터: `없음`
**{name}**: *세 방향에서 온 쪽지와 알림을 책상 위에 나란히 둔다.*

---

### `morning5_committed_end`
- 배경: `room_school.png`
- 분기:
  - [`route_dain`] → `tour_dain_1_check`
  - [`route_yuna`] → `tour_yuna_1_check`
  - [`route_seoyeon`] → `tour_seo_1`
  - [기본] → `tour_seo_1`

- 캐릭터: `없음`
**{name}**: *책상 위 쪽지들을 정리하고, 이미 고른 방향의 행사 순서를 확인한다.*

---

## 5일차 — 점심 `day5_2_lunch`

### `tour_seo_1`
- 배경: `school.png`
- BGM: `sunset1.mp3`
- 다음: `tour_seo_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *교문 앞에 나란히 선다. 첫날 서연이 기다리고 있던 바로 그 자리.*

---

### `tour_seo_2`
- 배경: `school.png`
- 다음: `tour_seo_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 여기서 처음 만났지.

---

### `tour_seo_3`
- 배경: `school.png`
- 다음: `tour_seo_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: 그때 '과분한데'라고 하니까 — 혼날 뻔했지.

---

### `tour_seo_4`
- 배경: `school.png`
- 다음: `tour_seo_5`

- 캐릭터: `seyoun_laugh.png`
**서연**: 혼내진 않았잖아. — 그때부터 마음에 들었어.

---

### `tour_seo_5`
- 배경: `school.png`
- 다음: `tour_seo_6`

- 캐릭터: `seyoun_normal.png`
**{name}**: 첫날부터?

---

### `tour_seo_6`
- 배경: `school.png`
- 다음: `tour_seo_7`

- 캐릭터: `seyoun_shy.png`
**서연**: ...바람 때문에 들은 착각일 수도 있어.

---

### `tour_seo_7`
- 배경: `school.png`
- 다음: `tour_seo_8`

- 캐릭터: `seyoun_shy.png`
**{name}**: *바람은 불지 않고 있다.*

---

### `tour_seo_8`
- 배경: `school.png`
- 다음: `tour_seo_9`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연의 가방 안쪽에서 열쇠고리가 부딪힌다. 옥상 열쇠다.*

---

### `tour_seo_9`
- 배경: `school.png`
- 다음: `tour_seo_10`

- 캐릭터: `seyoun_normal.png`
**서연**: 이거.

---

### `tour_seo_10`
- 배경: `school.png`
- 다음: `tour_seo_11`

- 캐릭터: `seyoun_normal.png`
**{name}**: 열쇠?

---

### `tour_seo_11`
- 배경: `school.png`
- 다음: `tour_seo_12`

- 캐릭터: `seyoun_normal.png`
**서연**: 학생회장 특권이었는데. — 이제 네 거야.

---

### `tour_seo_12`
- 배경: `school.png`
- 다음: `tour_seo_13`

- 캐릭터: `seyoun_normal.png`
**서연**: *열쇠를 건넨다. 손끝이 스치고, 서연은 바로 손을 뗀다.*

---

### `tour_seo_13`
- 배경: `school.png`
- 다음: `tour_seo_14`

- 캐릭터: `seyoun_normal.png`
**{name}**: 학생회장이 이래도 돼?

---

### `tour_seo_14`
- 배경: `school.png`
- 스탯: Seoyeon +5
- 다음: `tour_seo_freetalk`

- 캐릭터: `seyoun_shy.png`
**서연**: 됐으니까 주는 거야. — 가끔 바람 쐬고 싶을 때 올라가.

---

### `tour_seo_freetalk`
- 배경: `top_school.png`
- 다음: `tour_seo_end`

- 캐릭터: `seyoun_normal.png`
**서연**: *옥상 난간에 손을 얹고 학교를 내려다본다.* 마지막 점심시간까지 여기일 줄은 몰랐어.

---

### `tour_seo_end`
- 배경: `school.png`
- 다음: `after5_start`

- 캐릭터: `seyoun_shy.png`
**{name}**: *'나 없이도'를 말하지 않는다. 근데 뒤에 숨어 있다.*

---

### `tour_yuna_1_check`
- 배경: `yuna_hideout.png`
- BGM: `sunset1.mp3`
- 분기:
  - [`chose_yuna_lunch`] → `tour_yuna_1`
  - [기본] → `tour_yuna_1b`

- 캐릭터: `없음`
**{name}**: *도서관 별관으로 향한다.*

---

### `tour_yuna_1`
- 배경: `yuna_hideout.png`
- 다음: `tour_yuna_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *도서관 별관. 낡은 소파, 창문으로 들어오는 오후 햇살. 처음 들어왔을 때와 같은 먼지 냄새가 난다.*

---

### `tour_yuna_1b`
- 배경: `yuna_hideout.png`
- 다음: `tour_yuna_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *도서관 별관. 유나와의 비밀 독서 공간. 낡은 소파, 창문으로 들어오는 오후 햇살.*

---

### `tour_yuna_2`
- 배경: `yuna_hideout.png`
- 다음: `tour_yuna_3`

- 캐릭터: `yuna_normal.png`
**유나**: *소파에 앉는다. 옆자리를 비워둔다. 먼지가 쌓이지 않은 자리다.*

---

### `tour_yuna_3`
- 배경: `yuna_hideout.png`
- 다음: `tour_yuna_4`

- 캐릭터: `yuna_normal.png`
**{name}**: 여기 오면 바깥 소리가 작아져.

---

### `tour_yuna_4`
- 배경: `yuna_hideout.png`
- 다음: `tour_yuna_5`

- 캐릭터: `yuna_normal.png`
**유나**: ...좋은 뜻으로?

---

### `tour_yuna_5`
- 배경: `yuna_hideout.png`
- 다음: `tour_yuna_6`

- 캐릭터: `yuna_normal.png`
**{name}**: 좋은 뜻으로.

---

### `tour_yuna_6`
- 배경: `yuna_hideout.png`
- 다음: `tour_yuna_7`

- 캐릭터: `yuna_smile.png`
**유나**: *가방에서 노트를 꺼낸다. 다락방에서 급히 덮었던 그 노트다.*

---

### `tour_yuna_7`
- 배경: `yuna_hideout.png`
- 다음: `tour_yuna_8`

- 캐릭터: `yuna_normal.png`
**유나**: ...결말 썼어.

---

### `tour_yuna_8`
- 배경: `yuna_hideout.png`
- 다음: `tour_yuna_9`

- 캐릭터: `yuna_normal.png`
**{name}**: 그때 말했잖아. '결말을 쓰면 끝난다'고.

---

### `tour_yuna_9`
- 배경: `yuna_hideout.png`
- 다음: `tour_yuna_10`

- 캐릭터: `yuna_normal.png`
**유나**: 끝이라고 말하면 좀 이상해서.

---

### `tour_yuna_10`
- 배경: `yuna_hideout.png`
- 다음: `tour_yuna_11`

- 캐릭터: `yuna_shy.png`
**{name}**: *노트를 내민다. 손이 살짝 떨린다. 유나는 표지 모서리를 끝까지 놓지 못한다.*

---

### `tour_yuna_11`
- 배경: `yuna_hideout.png`
- 스탯: Yuna +7
- 다음: `tour_yuna_freetalk`

- 캐릭터: `yuna_shy.png`
**{name}**: 첫 번째 독자?

---

### `tour_yuna_freetalk`
- 배경: `yuna_hideout.png`
- 다음: `tour_yuna_end`

- 캐릭터: `yuna_normal.png`
**유나**: *책등을 손끝으로 훑다가 고개를 든다.* 마지막이라니까 말이 많아져.

---

### `tour_yuna_end`
- 배경: `yuna_hideout.png`
- 다음: `tour_yuna_end_2`

- 캐릭터: `yuna_shy.png`
**유나**: ...유일한 독자. 당분간은.

---

### `tour_yuna_end_2`
- 배경: `yuna_hideout.png`
- 다음: `after5_start`

- 캐릭터: `yuna_shy.png`
**{name}**: *'당분간은'. — 유나가 할 수 있는 최대한의 약속이다.*

---

### `tour_dain_1_check`
- 배경: `gym.png`
- BGM: `sunset1.mp3`
- 분기:
  - [`chose_dain_lunch`] → `tour_dain_1`
  - [기본] → `tour_dain_1b`

- 캐릭터: `없음`
**{name}**: *체육관으로 향한다.*

---

### `tour_dain_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `tour_dain_2`

- 캐릭터: `없음`
**{name}**: *체육관. 첫 내기와 마지막 스파이크가 같은 코트 위에 남아 있다. 오늘은 불이 켜져 있다.*

---

### `tour_dain_1b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `tour_dain_2`

- 캐릭터: `없음`
**{name}**: *체육관. 며칠 사이에 수많은 내기와 스파이크가 오갔던 곳. — 오늘은 불이 켜져 있다.*

---

### `tour_dain_2`
- 배경: `gym.png`
- 다음: `tour_dain_3`

- 캐릭터: `dain_normal.png`
**다인**: *코트 한가운데 서 있다. 배구공을 하나 들고.*

---

### `tour_dain_3`
- 배경: `gym.png`
- 다음: `tour_dain_4`

- 캐릭터: `dain_laugh.png`
**다인**: 야, 마지막 가위바위보 할래?

---

### `tour_dain_4`
- 배경: `gym.png`
- 다음: `tour_dain_5`

- 캐릭터: `dain_normal.png`
**{name}**: 또 질 거면서.

---

### `tour_dain_5`
- 배경: `gym.png`
- 다음: `tour_dain_6`

- 캐릭터: `dain_laugh.png`
**다인**: 이번엔 이긴다.

---

### `tour_dain_6`
- 배경: `gym.png`
- 다음: `tour_dain_7`

- 캐릭터: `dain_normal.png`
**{name}**: *가위바위보. — 다인이 졌다.*

---

### `tour_dain_7`
- 배경: `gym.png`
- 다음: `tour_dain_8`

- 캐릭터: `dain_laugh.png`
**다인**: ...왜 또 졌지.

---

### `tour_dain_8`
- 배경: `gym.png`
- 다음: `tour_dain_10`

- 캐릭터: `dain_normal.png`
**{name}**: *화를 내면서도 웃고 있다. 다인이 배구공을 코트에 내려놓는다. 천천히.*

---

### `tour_dain_10`
- 배경: `gym.png`
- 다음: `tour_dain_11`

- 캐릭터: `dain_sad.png`
**다인**: 프로는... 모르겠지만.

---

### `tour_dain_11`
- 배경: `gym.png`
- 다음: `tour_dain_11_b`

- 캐릭터: `dain_sad.png`
**{name}**: ......

---

### `tour_dain_11_b`
- 배경: `gym.png`
- 다음: `tour_dain_12`

- 캐릭터: `dain_normal.png`
**다인**: 예전엔 배구가 빠지면 나도 텅 비는 줄 알았거든. 근데 요즘은 아니야.

---

### `tour_dain_12`
- 배경: `gym.png`
- 다음: `tour_dain_13`

- 캐릭터: `dain_sad.png`
**다인**: 뭐가 달라졌는진 몰라. ...근데 코트 밖에서도 내가 보여.

---

### `tour_dain_13`
- 배경: `gym.png`
- 다음: `tour_dain_end`

- 캐릭터: `dain_normal.png`
**{name}**: 뭐가 달라진 건데?

---

### `tour_dain_end`
- 배경: `gym.png`
- 스탯: Dain +7
- 다음: `tour_dain_freetalk`

- 캐릭터: `dain_shy.png`
**다인**: ...옆에 사람이 생겼잖아.

---

### `tour_dain_freetalk`
- 배경: `gym.png`
- 다음: `tour_dain_end_2`

- 캐릭터: `dain_normal.png`
**다인**: *배구공을 발끝으로 멈춰 세우고 웃는다.* 마지막 점심이라도 그냥 보낼 수는 없지.

---

### `tour_dain_end_2`
- 배경: `gym.png`
- 다음: `after5_start`

- 캐릭터: `dain_shy.png`
**{name}**: *느낌표 없이 말한다. 이번엔 고개를 숙이지 않는다. 다인의 손이 무릎이 아니라 배구공 위에 있다.*

---

## 5일차 — 방과후 `day5_3_afterschool`

### `after5_start`
- 배경: `school_hallway.png`
- BGM: `sunset1.mp3`
- 분기:
  - [`homeroom_day5`] → `after5_hidden_farewell_1`
  - [`nurse_day5`] → `after5_hidden_farewell_1`
  - [`day4_waited`] → `after5_waited_start_branch`
  - [`day4_confession_accepted`] → `after5_waited_start_branch`
  - [`route_seoyeon`] → `after5_farewell_yuna_check`
  - [기본] → `after5_farewell_seo_1`

- 캐릭터: `없음`
**{name}**: *행사가 끝나가고 있다. 선택하지 않은 두 사람과 자연스럽게 마주친다.*

---

### `after5_waited_start_branch`
- 배경: `school_hallway.png`
- 분기:
  - [`route_seoyeon`] → `after5_farewell_yuna_check`
  - [기본] → `after5_farewell_seo_1`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `after5_farewell_seo_1`
- 배경: `school_hallway.png`
- 다음: `after5_farewell_seo_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *복도에서 서연과 마주친다.*

---

### `after5_farewell_seo_2`
- 배경: `school_hallway.png`
- 제외조건: `route_seoyeon`
- 다음: `after5_farewell_seo_3`

- 캐릭터: `seyoun_normal.png`
**서연**: ...후.

---

### `after5_farewell_seo_3`
- 배경: `school_hallway.png`
- 제외조건: `route_seoyeon`
- 다음: `after5_farewell_seo_4`

- 캐릭터: `seyoun_normal.png`
**서연**: *머리카락을 넘기며.*

---

### `after5_farewell_seo_4`
- 배경: `school_hallway.png`
- 제외조건: `route_seoyeon`
- 다음: `after5_farewell_seo_5`

- 캐릭터: `seyoun_normal.png`
**서연**: 뭐, 예상은 했어. 넌 처음부터 내 예상대로 안 움직였으니까.

---

### `after5_farewell_seo_5`
- 배경: `school_hallway.png`
- 다음: `after5_farewell_seo_6`

- 캐릭터: `seyoun_normal.png`
**{name}**: 서연...

---

### `after5_farewell_seo_6`
- 배경: `school_hallway.png`
- 제외조건: `route_seoyeon`
- 다음: `after5_farewell_seo_6_b`

- 캐릭터: `seyoun_normal.png`
**서연**: 다음엔 내가 먼저 데려갈 거야.

---

### `after5_farewell_seo_6_b`
- 배경: `school_hallway.png`
- 다음: `after5_farewell_seo_7`

- 캐릭터: `seyoun_normal.png`
**서연**: *돌아서며 손을 흔든다. 뒤돌아보지 않는다. 손목의 리본만 복도 끝에서 흔들린다.*

---

### `after5_farewell_seo_7`
- 배경: `school_hallway.png`
- 다음: `after5_farewell_yuna_check`

- 캐릭터: `seyoun_sad.png`
**{name}**: *복도에 혼자 남았다. 서연의 발소리가 멀어진다. 닫힌 줄 알았던 옥상 열쇠가 손바닥에 남아 있다.*

---

### `after5_farewell_yuna_check`
- 배경: `school_hallway.png`
- 분기:
  - [`route_yuna`] → `after5_farewell_dain_check`
  - [기본] → `after5_farewell_yuna_1`

<!-- i18n -->

---

### `after5_farewell_yuna_1`
- 배경: `library_old.png`
- 다음: `after5_farewell_yuna_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *도서관 앞에서 유나가 다가온다. 아무 말 없이 책 한 권을 건넨다.*

---

### `after5_farewell_yuna_2`
- 배경: `library_old.png`
- 제외조건: `route_yuna`
- 다음: `after5_farewell_yuna_3`

- 캐릭터: `yuna_normal.png`
**{name}**: *책갈피가 끼워져 있다. 책갈피에 한 줄.*

---

### `after5_farewell_yuna_3`
- 배경: `library_old.png`
- 제외조건: `route_yuna`
- 다음: `after5_farewell_yuna_4`

- 캐릭터: `yuna_smile.png`
**유나**: 재밌었어. ...다음 이야기에서 보자.

---

### `after5_farewell_yuna_4`
- 배경: `library_old.png`
- 제외조건: `route_yuna`
- 다음: `after5_farewell_yuna_5`

- 캐릭터: `yuna_normal.png`
**유나**: *돌아선다. 멈추지 않는다.*

---

### `after5_farewell_yuna_5`
- 배경: `library_old.png`
- 다음: `after5_farewell_yuna_5b`

- 캐릭터: `yuna_smile.png`
**{name}**: *책갈피의 '재밌었어' 아래에 연보라색 잉크가 조금 번져 있다.*

---

### `after5_farewell_yuna_5b`
- 배경: `school_hallway.png`
- 다음: `after5_farewell_dain_check`

- 캐릭터: `없음`
**{name}**: *복도로 돌아왔다.*

---

### `after5_farewell_dain_check`
- 배경: `school_hallway.png`
- 분기:
  - [`route_dain`] → `after5_sunset_1`
  - [기본] → `after5_farewell_dain_1`

<!-- i18n -->

---

### `after5_farewell_dain_1`
- 배경: `gym.png`
- 다음: `after5_farewell_dain_2`

- 캐릭터: `dain_normal.png`
**{name}**: *체육관 앞에서 다인이 달려온다.*

---

### `after5_farewell_dain_2`
- 배경: `gym.png`
- 제외조건: `route_dain`
- 다음: `after5_farewell_dain_3`

- 캐릭터: `dain_normal.png`
**다인**: 치, 아쉽다!

---

### `after5_farewell_dain_3`
- 배경: `gym.png`
- 제외조건: `route_dain`
- 다음: `after5_farewell_dain_4`

- 캐릭터: `dain_laugh.png`
**{name}**: 다인...

---

### `after5_farewell_dain_4`
- 배경: `gym.png`
- 제외조건: `route_dain`
- 다음: `after5_farewell_dain_4_b`

- 캐릭터: `dain_laugh.png`
**다인**: 근데 뭐, 네가 고른 거니까. 다음엔 나한테도 기회 줘야 해!

---

### `after5_farewell_dain_4_b`
- 배경: `gym.png`
- 다음: `after5_farewell_dain_4_c`

- 캐릭터: `dain_laugh.png`
**{name}**: *씩 웃으며 주먹으로 어깨를 툭 친다. — 첫날과 같은 힘이다.*

---

### `after5_farewell_dain_4_c`
- 배경: `gym.png`
- 다음: `after5_farewell_dain_4_d`

- 캐릭터: `dain_normal.png`
**다인**: ...잘해. 이번엔.

---

### `after5_farewell_dain_4_d`
- 배경: `gym.png`
- 다음: `after5_farewell_dain_5`

- 캐릭터: `dain_laugh.png`
**다인**: *배구공을 한 번 더 높이 던지고 받는다. 받는 손끝이 조금 늦다.*

---

### `after5_farewell_dain_5`
- 배경: `gym.png`
- 제외조건: `route_dain`
- 다음: `after5_farewell_dain_5b`

- 캐릭터: `dain_laugh.png`
**{name}**: *돌아서는 등이 작아진다. — 그래도 걸음은 빠르다. 처음 만났을 때처럼.*

---

### `after5_farewell_dain_5b`
- 배경: `school_back.png`
- 다음: `after5_sunset_1`

- 캐릭터: `없음`
**{name}**: *체육관을 나서 학교 뒤편으로 향했다.*

---

### `after5_hidden_farewell_1`
- 배경: `school.png`
- 다음: `after5_hidden_farewell_3`

- 캐릭터: `없음`
**{name}**: *교문 앞. 멀리서 세 사람이 보인다. 서연은 하은과 걷고, 다인은 배구공을 던지며 뛰고, 유나는 책을 읽으며 천천히 간다. 아무도 이쪽을 보지 않는다.*

---

### `after5_hidden_farewell_3`
- 배경: `school.png`
- 다음: `after5_hidden_farewell_3b`

- 캐릭터: `없음`
**{name}**: *미안하다는 말은 쉽게 못 하겠다. 교문 앞에서 손만 한 번 들었다. 고마웠어.*

---

### `after5_hidden_farewell_3b`
- 배경: `school_back.png`
- 다음: `after5_sunset_1`

- 캐릭터: `없음`
**{name}**: *학교 뒤편으로 걸어갔다.*

---

### `after5_sunset_1`
- 배경: `school_back.png`
- BGM: `confession.mp3`
- 다음: `after5_ending_check`

- 캐릭터: `없음`
**{name}**: *석양이 교정 창문마다 걸린다. 방송실에서 행사 종료 안내가 흐르고, 운동장 스피커가 한 박자 늦게 지직거린다.*

---

### `after5_ending_check`
- 분기:
  - [`day3_caught_multiple_dates`] → `ending_start`
  - [`harem_seed`] → `after5_set_harem`
  - [`homeroom_day5`] → `after5_hidden_route_choice_check`
  - [`nurse_day5`] → `after5_hidden_route_choice_check`
  - [`day4_waited`] → `after5_last_chance_1`
  - [`day4_confession_accepted`] → `ending_start`
  - [기본] → `ending_start`

<!-- i18n -->

---

### `after5_hidden_route_choice_check`
- 배경: `school_back.png`
- 분기:
  - [`day4_confession_accepted`] → `after5_hidden_route_choice`
  - [`day4_waited`] → `after5_last_chance_1`
  - [기본] → `ending_start`

- 캐릭터: `없음`
**{name}**: *마지막 발걸음이 두 갈래로 갈라진다. 이미 약속한 사람과, 끝내 지나치지 못한 교문 쪽.*

---

### `after5_hidden_route_choice`
- 배경: `school_back.png`
- 선택지:
  1. "약속했던 사람에게 간다" → `ending_start` | 플래그: `choose_main_over_hidden`
  2. "끝까지 생각나는 쪽으로 간다" → `ending_start` | 플래그: `choose_hidden_over_main`

- 캐릭터: `없음`
**{name}**: *어디로 가야 할까. 오늘은 — 내가 정해야 한다.*

---

### `after5_last_chance_1`
- 배경: `school_back.png`
- 플래그: `day5_last_chance_path`
- 다음: `after5_last_chance_2`

- 캐릭터: `없음`
**{name}**: *걸음이 멈춘다. 석양이 등 뒤로 길게 그림자를 만든다.*

---

### `after5_last_chance_2`
- 배경: `school_back.png`
- 다음: `after5_last_chance_route_check`

- 캐릭터: `없음`
**{name}**: *전 학교 복도, 주머니 속 핸드폰, 보내지 못한 38번째 메모가 한꺼번에 떠오른다.*

---

### `after5_last_chance_route_check`
- 배경: `school_back.png`
- 분기:
  - [`route_seoyeon`] → `after5_last_chance_seo_aff_check`
  - [`route_dain`] → `after5_last_chance_dain_aff_check`
  - [`route_yuna`] → `after5_last_chance_yuna_aff_check`
  - [기본] → `after5_last_chance_choice`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_last_chance_seo_aff_check`
- 배경: `school_back.png`
- 호감분기: Seoyeon
  - [50+] → `after5_last_chance_2_b`
  - [기본] → `after5_last_chance_seo_low_1`
- 다음: `after5_last_chance_seo_low_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_last_chance_2_b`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_c`

- 캐릭터: `없음`
**{name}**: *주머니 속 핸드폰을 쥐었다. 화면을 켜지 않은 채 그대로 넣는다. 다리가 먼저 움직이고, 이름이 입 밖으로 나온다.*

---

### `after5_last_chance_2_c`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_d`

- 캐릭터: `없음`
**{name}**: 서연아.

---

### `after5_last_chance_2_d`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_e`

- 캐릭터: `seyoun_normal.png`
**서연**: *돌아본다. 석양을 등지고 있다.*

---

### `after5_last_chance_2_e`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_f`

- 캐릭터: `seyoun_normal.png`
**서연**: ...늦었어.

---

### `after5_last_chance_2_f`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_g`

- 캐릭터: `seyoun_worried.png`
**{name}**: *바람이 머리카락을 날린다. 서연은 이번엔 넘기지 않는다.*

---

### `after5_last_chance_2_g`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_h`

- 캐릭터: `seyoun_normal.png`
**서연**: — 이번엔 보내고 싶지 않아. 네가 돌아왔으니까.

---

### `after5_last_chance_2_h`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_i`

- 캐릭터: `seyoun_normal.png`
**{name}**: *손을 내민다. 그날 난간 앞에서 멈췄던 손이다.*

---

### `after5_last_chance_2_i`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_j`

- 캐릭터: `seyoun_normal.png`
**서연**: 이번엔 잡아.

---

### `after5_last_chance_2_j`
- 배경: `school_back.png`
- 다음: `after5_last_chance_choice`

- 캐릭터: `seyoun_shy2.png`
**서연**: *내민 손끝이 {name} 앞에 멈춘다. 대답을 기다리는 손이다.*

---

### `after5_last_chance_seo_low_1`
- 배경: `school_back.png`
- 다음: `after5_last_chance_seo_low_2`

- 캐릭터: `없음`
**{name}**: 서연아.

---

### `after5_last_chance_seo_low_2`
- 배경: `school_back.png`
- 다음: `after5_last_chance_choice`

- 캐릭터: `seyoun_sad.png`
**서연**: *돌아본다. 발끝이 반쯤 돌아가 있다. 금방이라도 갈 수 있게.* ...왜.

---

### `after5_last_chance_dain_aff_check`
- 배경: `school_back.png`
- 호감분기: Dain
  - [50+] → `after5_last_chance_2_k`
  - [기본] → `after5_last_chance_dain_low_1`
- 다음: `after5_last_chance_dain_low_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_last_chance_2_k`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_l`

- 캐릭터: `없음`
**{name}**: 다인아.

---

### `after5_last_chance_2_l`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_m`

- 캐릭터: `dain_normal.png`
**다인**: *뛰어오다가 멈춘다.*

---

### `after5_last_chance_2_m`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_n`

- 캐릭터: `dain_laugh.png`
**다인**: 야, 너...

---

### `after5_last_chance_2_n`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_o`

- 캐릭터: `dain_normal.png`
**다인**: *그대로 굳는다. 손에 든 공이 천천히 내려간다.*

---

### `after5_last_chance_2_o`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_p`

- 캐릭터: `dain_shy.png`
**다인**: ...돌아온 거야?

---

### `after5_last_chance_2_p`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_q`

- 캐릭터: `dain_sad.png`
**다인**: *입술이 떨린다. 대답하기 전에 숨부터 삼킨다.*

---

### `after5_last_chance_2_q`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_r`

- 캐릭터: `dain_sad.png`
**다인**: 기다렸어. 어제부터. 아니 그저께부터. 근데 — 바로 괜찮아지진 않아.

---

### `after5_last_chance_2_r`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_s`

- 캐릭터: `dain_sad.png`
**다인**: *눈가를 문지른다. 웃음은 그대로인데, 손등에 물기가 묻는다.*

---

### `after5_last_chance_2_s`
- 배경: `school_back.png`
- 다음: `after5_last_chance_choice`

- 캐릭터: `dain_laugh.png`
**다인**: ...말해. 이번엔 끝까지 들을게.

---

### `after5_last_chance_dain_low_1`
- 배경: `school_back.png`
- 다음: `after5_last_chance_dain_low_2`

- 캐릭터: `없음`
**{name}**: 다인아.

---

### `after5_last_chance_dain_low_2`
- 배경: `school_back.png`
- 다음: `after5_last_chance_choice`

- 캐릭터: `dain_sad.png`
**다인**: *멈추긴 한다. 근데 금방 웃지 못한다.* ...왜.

---

### `after5_last_chance_yuna_aff_check`
- 배경: `school_back.png`
- 호감분기: Yuna
  - [50+] → `after5_last_chance_yuna_1`
  - [기본] → `after5_last_chance_yuna_low_1`
- 다음: `after5_last_chance_yuna_low_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_last_chance_yuna_1`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_2`

- 캐릭터: `없음`
**{name}**: 유나.

---

### `after5_last_chance_yuna_2`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_3`

- 캐릭터: `yuna_normal.png`
**유나**: *멈춘다. 책을 품 쪽으로 끌어안는다. 돌아보는 데 2초쯤 걸린다.*

---

### `after5_last_chance_yuna_3`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_4`

- 캐릭터: `yuna_normal.png`
**유나**: ...돌아왔네.

---

### `after5_last_chance_yuna_4`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_5`

- 캐릭터: `없음`
**{name}**: *준비한 말은 없는데, 이번엔 발이 뒤로 물러나지 않는다. 유나는 재촉하지 않는다.*

---

### `after5_last_chance_yuna_5`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_6`

- 캐릭터: `yuna_shy.png`
**유나**: ...이번엔 듣고 갈게. 괜찮다고는 못 해도.

---

### `after5_last_chance_yuna_6`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_7`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나가 시선을 돌리지 않는다. {name}의 발이 한 걸음 앞으로 나간다.*

---

### `after5_last_chance_yuna_7`
- 배경: `school_back.png`
- 다음: `after5_last_chance_choice`

- 캐릭터: `yuna_shy.png`
**유나**: *책을 안고 기다린다. 답장창에는 아직 첫 글자도 없다.*

---

### `after5_last_chance_yuna_low_1`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_low_2`

- 캐릭터: `없음`
**{name}**: 유나.

---

### `after5_last_chance_yuna_low_2`
- 배경: `school_back.png`
- 다음: `after5_last_chance_choice`

- 캐릭터: `yuna_normal.png`
**유나**: *천천히 돌아본다. 책을 끌어안은 팔에 힘이 들어간다.* ...왜.

---

### `after5_last_chance_choice`
- 배경: `school_back.png`
- 선택지:
  1. "지금 말한다" → `after5_confess_yes` | 플래그: `day5_confessed`
  2. "...아무 말도 하지 못했다" → `after5_confess_no`

- 캐릭터: `없음`
**{name}**: *손바닥 안에서 핸드폰이 눌린다.*

---

### `after5_confess_yes`
- 배경: `school_back.png`
- 다음: `after5_confess_yes_2`

- 캐릭터: `없음`
**{name}**: *발끝이 멈춘다. 숨을 한 번 고르고, 이름을 부른다.*

---

### `after5_confess_yes_2`
- 배경: `school_back.png`
- 분기:
  - [`route_seoyeon`] → `after5_confess_aff_seo`
  - [`route_dain`] → `after5_confess_aff_dain`
  - [`route_yuna`] → `after5_confess_aff_yuna`
  - [기본] → `ending_start`

- 캐릭터: `없음`
**{name}**: 있잖아 — 나, 너한테 할 말이 있어.

---

### `after5_confess_aff_seo`
- 배경: `school_back.png`
- 호감분기: Seoyeon
  - [50+] → `after5_confess_react_seo`
  - [기본] → `after5_confess_react_seo_low`
- 다음: `after5_confess_react_seo_low`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_confess_react_seo`
- 배경: `school_back.png`
- 다음: `ending_start`

- 캐릭터: `seyoun_normal.png`
**서연**: *나란히 걸어가며.* ...늦었어. 그래도 이번엔 도망치지 않았네. 그 말, 오늘은 가볍게 넘기지 않을게.

---

### `after5_confess_react_seo_low`
- 배경: `school_back.png`
- 다음: `after5_confess_fail_walk_1`

- 캐릭터: `seyoun_sad.png`
**서연**: *한참 말이 없다.* ...고마워. 근데 지금은, 그 말만으로 괜찮다고 말하면 안 돼.

---

### `after5_confess_aff_dain`
- 배경: `school_back.png`
- 호감분기: Dain
  - [50+] → `after5_confess_react_dain`
  - [기본] → `after5_confess_react_dain_low`
- 다음: `after5_confess_react_dain_low`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_confess_react_dain`
- 배경: `school_back.png`
- 다음: `ending_start`

- 캐릭터: `dain_laugh.png`
**다인**: *학교를 나서며.* 야, 너... 나 기다리긴 했어. 근데 기다렸다고 바로 웃으면 억울하지. 이번엔 끝까지 말해.

---

### `after5_confess_react_dain_low`
- 배경: `school_back.png`
- 다음: `after5_confess_fail_walk_1`

- 캐릭터: `dain_sad.png`
**다인**: *숨을 고른다.* ...들었어. 근데 나 아직 바로 웃긴 좀 힘들어.

---

### `after5_confess_aff_yuna`
- 배경: `school_back.png`
- 호감분기: Yuna
  - [50+] → `after5_confess_react_yuna`
  - [기본] → `after5_confess_react_yuna_low`
- 다음: `after5_confess_react_yuna_low`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_confess_react_yuna`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_call`

- 캐릭터: `yuna_shy.png`
**유나**: *나란히 걸었다.* ...알고는 있었어. 그래도 오늘은, 끝까지 읽을게.

---

### `after5_confess_react_yuna_call`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_b`

- 캐릭터: `yuna_normal.png`
**{name}**: 유나.

---

### `after5_confess_react_yuna_b`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_c`

- 캐릭터: `yuna_shy.png`
**유나**: *책을 내려놓는다. 표정이 변하지 않는다. — 근데 손이 떨리고 있다.*

---

### `after5_confess_react_yuna_c`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_d`

- 캐릭터: `yuna_normal.png`
**유나**: ...알고 있었어.

---

### `after5_confess_react_yuna_d`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_e`

- 캐릭터: `yuna_normal.png`
**{name}**: *쪽지를 건넨다. 접힌 종이. 펼치면 한 줄.*

---

### `after5_confess_react_yuna_e`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_f`

- 캐릭터: `yuna_shy.png`
**{name}**: *'기다렸어. — 오래.'*

---

### `after5_confess_react_yuna_f`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_g`

- 캐릭터: `yuna_sad.png`
**{name}**: *한 줄인데 잉크가 번져 있다. 접힌 부분에 손톱자국이 남아 있다.*

---

### `after5_confess_react_yuna_g`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_h`

- 캐릭터: `yuna_normal.png`
**유나**: ...읽었으면 됐어.

---

### `after5_confess_react_yuna_h`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_i`

- 캐릭터: `yuna_normal.png`
**{name}**: *나란히 걸었다. 아무 말 없이.*

---

### `after5_confess_react_yuna_i`
- 배경: `school_back.png`
- 다음: `ending_start`

- 캐릭터: `yuna_normal.png`
**{name}**: *그렇게 — 학교를 벗어나 걸었다.*

---

### `after5_confess_react_yuna_low`
- 배경: `school_back.png`
- 다음: `after5_confess_fail_walk_1`

- 캐릭터: `yuna_sad.png`
**유나**: *쪽지를 접어 쥔다.* ...읽었어. 근데 아직 결말은 못 정하겠어.

---

### `after5_confess_fail_walk_1`
- 배경: `school_back.png`
- 다음: `after5_confess_fail_walk_2`

- 캐릭터: `없음`
**{name}**: *더 할 말은 떠오르지 않았다. 해가 더 내려앉고, 우리는 잠시 같은 방향으로 걷기만 했다.*

---

### `after5_confess_fail_walk_2`
- 배경: `park.png`
- 다음: `ending_start`

- 캐릭터: `없음`
**{name}**: *결론이 나지 않은 발걸음이 공원 쪽으로 이어졌다.*

---

### `after5_confess_no`
- 배경: `school_back.png`
- 다음: `after5_confess_no_2`

- 캐릭터: `없음`
**{name}**: *목이 잠긴다. 아무 말도 나오지 않는다. 이번에도.*

---

### `after5_confess_no_2`
- 배경: `school_back.png`
- 다음: `after5_confess_no_2b`

- 캐릭터: `없음`
**{name}**: *저녁 바람이 불어온다. 등 뒤의 그림자가 길어진다. — 손에 아무것도 쥐지 못한 채 서 있다.*

---

### `after5_confess_no_2b`
- 배경: `room_my.png`
- 다음: `ending_start`

- 캐릭터: `없음`
**{name}**: *끝내 돌아서서 집으로 향했다.*

---

### `after5_set_harem`
- 배경: `school_back.png`
- 다음: `after5_harem_commit`

- 캐릭터: `없음`
**{name}**: *점심때 접어 둔 말들이 그대로 남아 있다. 메시지방 세 개가 동시에 켜지고, 어느 쪽에도 첫 글자를 못 쓴다.*

---

### `after5_harem_commit`
- 배경: `school_back.png`
- 플래그: `ending_harem`
- 다음: `after5_harem_walk_1`

- 캐릭터: `없음`
**{name}**: *목 안에서 걸리던 말이 나온다. 하나를 고르지 못하겠다고. 세 사람의 표정이 동시에 멈춘다.*

---

### `after5_harem_walk_1`
- 배경: `school_back.png`
- 다음: `after5_harem_walk_2`

- 캐릭터: `없음`
**{name}**: *아무도 먼저 말을 꺼내지 못한 채, 우리는 학교 뒤편을 벗어났다.*

---

### `after5_harem_walk_2`
- 배경: `park.png`
- 다음: `ending_start`

- 캐릭터: `없음`
**{name}**: *답장하지 못한 메시지들이 잠금화면에 남아 있다. 발걸음은 공원 쪽으로 향했다.*

---

## 5일차 — 밤 `day5_4_night`

### `ending_start`
- 배경: `park.png`
- 분기:
  - [`day3_caught_multiple_dates`] → `day5_ending_mayhem`
  - [`ending_harem`] → `day5_ending_harem`
  - [`choose_hidden_over_main`] → `ending_hidden_commit_check`
  - [`choose_main_over_hidden`] → `ending_affinity_check`
  - [`day5_last_chance_path`] → `ending_last_chance_resolve`
  - [`both_hidden_day5`] → `hidden_dual_route_1`
  - [`homeroom_day5`] → `hidden_perfect_homeroom_check`
  - [`nurse_day5`] → `hidden_perfect_nurse_check`
  - [`day4_confession_accepted`] → `ending_affinity_check`
  - [`day5_confessed`] → `ending_confessed_aff_check`
  - [`day4_waited`] → `day5_ending_friend`
  - [기본] → `day5_ending_alone`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `ending_hidden_commit_check`
- 배경: `park.png`
- 분기:
  - [`both_hidden_day5`] → `hidden_dual_route_1`
  - [`homeroom_day5`] → `hidden_perfect_homeroom_check`
  - [`nurse_day5`] → `hidden_perfect_nurse_check`
  - [기본] → `ending_affinity_check`

- 캐릭터: `없음`

<!-- i18n -->

---

### `hidden_dual_route_1`
- 배경: `park.png`
- 다음: `hidden_dual_route_choice`

- 캐릭터: `없음`
**{name}**: *교문 앞에서 발이 멈춘다. 품 안의 봉투가 눌리고, 손등의 밴드가 소매에 걸린다.*

---

### `hidden_dual_route_choice`
- 배경: `park.png`
- 선택지:
  1. "원고를 건네준 사람에게 간다" → `hidden_perfect_homeroom_check`
  2. "손등에 답을 남긴 사람에게 간다" → `hidden_perfect_nurse_check`

- 캐릭터: `없음`
**{name}**: *봉투와 밴드 사이에서 손이 멈춘다.*

---

### `hidden_perfect_homeroom_check`
- 배경: `room_school.png`
- 호감분기: Teacher
  - [80+] → `hidden_perfect_homeroom_1`
  - [60+] → `hidden_true_homeroom_1`
  - [기본] → `hidden_good_homeroom_1`
- 다음: `hidden_good_homeroom_1`

<!-- i18n -->

---

### `hidden_perfect_homeroom_1`
- 배경: `room_school.png`
- 배경톤: `empty`
- BGM: `ending.mp3`
- 플래그: `ending_perfect`, `isDating_Teacher`
- 다음: `hidden_perfect_homeroom_1b`

- 캐릭터: `없음`
**{name}**: *졸업식이 끝났다. 빈 교실에 혼자 남았다. 칠판 위 분필 자국이 아직 지워지지 않았다.*

---

### `hidden_perfect_homeroom_1b`
- 배경: `room_school.png`
- 다음: `hidden_perfect_homeroom_2`

- 캐릭터: `teacher_normal.png`
**{name}**: *문이 열린다. — 담임이다. 베이지 가디건. 손에 서류 봉투를 들고 있다.*

---

### `hidden_perfect_homeroom_2`
- 배경: `room_school.png`
- 다음: `hidden_perfect_homeroom_2b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 졸업 축하해. ...서류는 다 냈고, 이제 선생님 할 일은 끝났어.

---

### `hidden_perfect_homeroom_2b`
- 배경: `room_school.png`
- 다음: `hidden_perfect_homeroom_2c`

- 캐릭터: `teacher_shy.png`
**{name}**: 교탁 서랍에 원고 아직 있어요?

---

### `hidden_perfect_homeroom_2c`
- 배경: `room_school.png`
- 다음: `hidden_perfect_homeroom_3`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *멈춘다. 서류 봉투 끝이 접힌다.* ...잘 지내.

---

### `hidden_perfect_homeroom_3`
- 배경: `room_school.png`
- 다음: `hidden_perfect_homeroom_3b`

- 캐릭터: `teacher_normal.png`
**{name}**: *3년 후.*

---

### `hidden_perfect_homeroom_3b`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_3c`

- 캐릭터: `teacher_smile.png`
**{name}**: *카페 테라스. 벚꽃이 날린다. 들어서는데 — 창가 자리에 낯익은 사람이 보인다.*

---

### `hidden_perfect_homeroom_3c`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_3e`

- 캐릭터: `teacher_smile.png`
**담임선생님**: ...어. 나도 놀랐어. *커피잔을 내려놓는다.* 앉을래?

---

### `hidden_perfect_homeroom_3e`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_3f`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *작게 웃는다.* 학교 그만두고 글만 쓰고 있어. 카페 알바도 하고. — 넌?

---

### `hidden_perfect_homeroom_3f`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_3g`

- 캐릭터: `teacher_shy.png`
**담임선생님**: ...다음에 또 볼 수 있어? 여기 매주 목요일에 와.

---

### `hidden_perfect_homeroom_3g`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_4b`

- 캐릭터: `teacher_shy.png`
**{name}**: *그 '다음'이 몇 번 더 이어졌다. 목요일마다 같은 자리. '커플석이에요?'라는 질문에 둘 다 커피만 내려다봤다. 다음 목요일엔 카페 대신 거리를 걸었다.*

---

### `hidden_perfect_homeroom_4b`
- 배경: `bookstore.png`
- 다음: `hidden_perfect_homeroom_4c`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *서점에서 갑자기 걸음을 멈춘다.* ...나 원고 완성했어. 읽어볼래?

---

### `hidden_perfect_homeroom_4c`
- 배경: `room_my.png`
- 다음: `hidden_perfect_homeroom_4d`

- 캐릭터: `teacher_shy.png`
**{name}**: *집으로 돌아와 원고를 읽었다. 밤새. — 주인공이 툭 던지는 말들이 자꾸 낯익게 들렸다.*

---

### `hidden_perfect_homeroom_4d`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_4e`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *다음 목요일, 카페. 평소보다 커피를 오래 저었다.* ...어땠어?

---

### `hidden_perfect_homeroom_4e`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_4f`

- 캐릭터: `teacher_normal.png`
**{name}**: *다음 목요일. 카페 앞에서 기다리지 않았다. — 꽃집 앞에서 기다렸다.*

---

### `hidden_perfect_homeroom_4f`
- 배경: `ending_perfect_teacher.png`
- 다음: `hidden_perfect_homeroom_4g`

- 캐릭터: `없음`
**{name}**: *꽃다발을 건넸다.* 제 쪽은 그냥, 드리고 싶어서요.

---

### `hidden_perfect_homeroom_4g`
- 배경: `ending_perfect_teacher.png`
- 다음: `hidden_perfect_homeroom_ending_title`

- 캐릭터: `없음`
**담임선생님**: *꽃다발을 받아 들고, 한참을 내려다본다. 손이 떨린다. — 웃는다.* ...나도.

---

### `hidden_perfect_homeroom_ending_title`
- 배경: `ending_perfect_teacher.png`
- 다음: `hidden_perfect_homeroom_5`

- 캐릭터: `없음`
**—**: ─── 담임선생님 PERFECT END ───

---

### `hidden_perfect_homeroom_5`
- 배경: `teacher_room.png`
- 다음: `hidden_perfect_homeroom_ep1`

- 캐릭터: `teacher_shy.png`
**{name}**: *카페 문밖으로 나오는 동안 꽃다발 포장지가 손안에서 조금 구겨졌다. 졸업장은 가방 안에 있다.*

---

### `hidden_perfect_homeroom_ep1`
- 배경: `ending_perfect_teacher.png`
- 다음: `hidden_perfect_homeroom_ep2`

- 캐릭터: `없음`
**{name}**: *그날 카페에서 나가지 않았다. 해가 질 때까지. 담임은 식은 커피잔을 앞에 두고 오래 앉아 있었다.*

---

### `hidden_perfect_homeroom_ep2`
- 배경: `ending_perfect_teacher.png`
- 다음: `hidden_perfect_homeroom_ep3`

- 캐릭터: `없음`
**{name}**: *목요일마다 같은 자리로 안내받게 됐다. 직원은 더 이상 '커플석이에요?'라고 묻지 않는다.*

---

### `hidden_perfect_homeroom_ep3`
- 배경: `ending_perfect_teacher.png`
- 다음: `hidden_perfect_homeroom_ep4`

- 캐릭터: `없음`
**{name}**: *원고가 출판됐다. 헌정사에 이름은 없다. 대신 한 줄. '교탁 서랍의 감상문 세 장 — 그걸로 시작된 이야기.'*

---

### `hidden_perfect_homeroom_ep4`
- 배경: `ending_perfect_teacher.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**{name}**: *가끔 '선생님이었는데' 하면 '학생이었는데' 하고 받는다. 둘 다 웃는다. 그 호칭은 더 이상 오래 머물지 않는다.*

---

### `hidden_true_homeroom_1`
- 배경: `room_school.png`
- BGM: `ending.mp3`
- 플래그: `ending_true_love`
- 다음: `hidden_true_homeroom_2`

- 캐릭터: `없음`
**{name}**: *졸업식 날. — 시간이 흘렀다. 교복은 더 이상 뻣뻣하지 않다.*

---

### `hidden_true_homeroom_2`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_true_homeroom_2_b`

- 캐릭터: `teacher_sad.png`
**{name}**: *빈 교실. 원고를 쓰던 그 교실. — 담임선생님이 기다리고 있다.*

---

### `hidden_true_homeroom_2_b`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *교실 끝 창가에 기대 서 있다. 수업도, 업무도 없는 얼굴이다.*

---

### `hidden_true_homeroom_3`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_3_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 졸업 축하해.

---

### `hidden_true_homeroom_3_b`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_3_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 감사합니다.

---

### `hidden_true_homeroom_3_c`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...그 말.

---

### `hidden_true_homeroom_4`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_4_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...방금, 선생님이라고 안 했네.

---

### `hidden_true_homeroom_4_b`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_4_c`

- 캐릭터: `teacher_normal.png`
**{name}**: *입 밖으로 나온 호칭이 한 박자 늦게 낯설어진다.*

---

### `hidden_true_homeroom_4_c`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_4_d`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *흰 봉투를 꺼낸다. 지난번의 갈색 봉투보다 얇다.*

---

### `hidden_true_homeroom_4_d`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_4_e`

- 캐릭터: `teacher_sad.png`
**담임선생님**: 원고 끝냈어. 네가 먼저 읽어준 뒤로 계속 밀고 갈 수 있었어.

---

### `hidden_true_homeroom_4_e`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_4_f`

- 캐릭터: `teacher_normal.png`
**{name}**: 제 감상문이 도움이 됐어요?

---

### `hidden_true_homeroom_4_f`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_4_g`

- 캐릭터: `teacher_normal.png`
**담임선생님**: '한 줄이면 된다'고 했는데 세 장이나 써왔잖아. 그거 보고 더는 미룰 핑계가 없더라.

---

### `hidden_true_homeroom_4_g`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_4_h`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *창밖을 본다. 벚꽃이 지고 있다.*

---

### `hidden_true_homeroom_4_h`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *창밖을 보다 돌아서며* ...한 마디만.

---

### `hidden_true_homeroom_5`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_5_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *창밖을 보며* ...그래서, 끝낸 김에 출판사에 보내볼까 해. 네 생각은?

---

### `hidden_true_homeroom_5_b`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_5_c`

- 캐릭터: `teacher_normal.png`
**{name}**: *시간이 흘렀다. 원고를 읽고, 감상문을 건네고, 서로 말끝을 삼키던 날들이 지나고 — 졸업식 날.*

---

### `hidden_true_homeroom_5_c`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_6`

- 캐릭터: `teacher_normal.png`
**{name}**: *교복은 이제 더 이상 뻣뻣하지 않다. 아니, 오늘 벗는 날이다.*

---

### `hidden_true_homeroom_6`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_6_b`

- 캐릭터: `teacher_shy.png`
**담임선생님**: ...한 마디만. ...커피 마시러 가자. 이번엔 주스 말고 커피.

---

### `hidden_true_homeroom_6_b`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_7`

- 캐릭터: `teacher_shy.png`
**{name}**: *커피라는 단어가 컵받침 위에 오래 남는다.*

---

### `hidden_true_homeroom_7`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_7_b`

- 캐릭터: `teacher_shy.png`
**{name}**: 좋아요.

---

### `hidden_true_homeroom_7_b`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_7_c`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *웃는다. 창가 빛이 원고 봉투 위로 비친다.*

---

### `hidden_true_homeroom_7_c`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_7_d`

- 캐릭터: `teacher_smile.png`
**담임선생님**: ...오늘은 선생님 말투 그만할게. *말끝이 흐려졌다. 그리고 웃는다.*

---

### `hidden_true_homeroom_7_d`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_8`

- 캐릭터: `teacher_normal.png`
**{name}**: *입술 끝에서 이름이 한 번 더 맴돈다. 담임은 고개를 돌린 채 웃는다.*

---

### `hidden_true_homeroom_8`
- 배경: `ending_true_teacher.png`
- 다음: `hidden_true_homeroom_ending_title`

- 캐릭터: `없음`
**담임선생님**: ...그래도 후회는 안 해.

---

### `hidden_true_homeroom_ending_title`
- 배경: `ending_true_teacher.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**—**: ─── 담임선생님 TRUE LOVE END ───

---

### `hidden_good_homeroom_1`
- 배경: `school.png`
- BGM: `night2.mp3`
- 다음: `hidden_good_homeroom_2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *학교 앞에서 기다리고 있었다.* 졸업 축하해.

---

### `hidden_good_homeroom_2`
- 배경: `school.png`
- 다음: `hidden_good_homeroom_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *악수를 하는데 — 손에 종이가 끼워져 있다. 접힌 쪽지.*

---

### `hidden_good_homeroom_3`
- 배경: `school.png`
- 다음: `hidden_good_homeroom_4`

- 캐릭터: `teacher_normal.png`
**{name}**: *학교를 나서며. '원고 끝나면 연락할게. 너한테는 먼저 보여주고 싶어서.' 전화번호가 적혀 있다.*

---

### `hidden_good_homeroom_4`
- 배경: `ending_good_teacher.png`
- 다음: `hidden_good_homeroom_ending_title`

- 캐릭터: `없음`
**{name}**: *선생님의 손이 — 3초쯤 더 길게 잡혀 있었다. 악수라는 이름을 붙여두기엔 조금 길었다.*

---

### `hidden_good_homeroom_ending_title`
- 배경: `ending_good_teacher.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**—**: ─── 담임선생님 GOOD END ───

---

### `hidden_perfect_nurse_check`
- 배경: `nurse_room.png`
- 호감분기: Nurse
  - [80+] → `hidden_perfect_nurse_1`
  - [60+] → `hidden_true_nurse_1`
  - [기본] → `hidden_good_nurse_1`
- 다음: `hidden_good_nurse_1`

<!-- i18n -->

---

### `hidden_perfect_nurse_1`
- 배경: `nurse_room.png`
- BGM: `ending.mp3`
- 플래그: `ending_perfect`, `isDating_Nurse`
- 다음: `hidden_perfect_nurse_2`

- 캐릭터: `없음`
**{name}**: *졸업식이 끝나고 보건실 문을 열었다. 빈 보건실. 책상 위에 밴드가 하나 놓여 있다. '집으로 와. 주소는 뒤에.' — 하트 없이.*

---

### `hidden_perfect_nurse_2`
- 배경: `nurse_house.png`
- 다음: `hidden_perfect_nurse_3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *문을 열어준 사람은 가운 대신 니트를 입고 있다.* ...왔네. 올 줄은 몰랐어.

---

### `hidden_perfect_nurse_3`
- 배경: `nurse_home_event1.png`
- 다음: `hidden_perfect_nurse_3b`

- 캐릭터: `없음`
**{name}**: *거실 소파에 나란히 앉았다. 창밖으로 해가 진다. 밴드 대신 손가락이 닿아 있다.*

---

### `hidden_perfect_nurse_3b`
- 배경: `nurse_home_event1.png`
- 다음: `hidden_perfect_nurse_4`

- 캐릭터: `없음`
**보건선생님**: *어깨를 기대며* ...이제 핑계 안 대도 돼. 환자도 아니고, 학생도 아니니까.

---

### `hidden_perfect_nurse_4`
- 배경: `nurse_home_event1.png`
- 다음: `hidden_perfect_nurse_4b`

- 캐릭터: `없음`
**보건선생님**: *손이 올라와 넥타이를 잡는다. 곧 놓는다.* ...오늘은 조금만 더 있다 가.

---

### `hidden_perfect_nurse_4b`
- 배경: `ending_perfect_nurse.png`
- 다음: `hidden_perfect_nurse_5`

- 캐릭터: `없음`
**{name}**: *아침. 커튼 사이로 빛이 들어온다. 식탁 위에는 밴드와 식은 커피가 나란히 놓여 있다.*

---

### `hidden_perfect_nurse_5`
- 배경: `ending_perfect_nurse.png`
- 다음: `hidden_perfect_nurse_5b`

- 캐릭터: `없음`
**보건선생님**: *눈을 뜨고 웃는다.* ...어디 아파? 내가 봐줄까? *농담처럼 말하지만 손끝은 조심스럽다.*

---

### `hidden_perfect_nurse_5b`
- 배경: `ending_perfect_nurse.png`
- 다음: `hidden_perfect_nurse_ending_title`

- 캐릭터: `없음`
**{name}**: *손을 빼고 싶지 않다. 여기에.*

---

### `hidden_perfect_nurse_ending_title`
- 배경: `ending_perfect_nurse.png`
- 다음: `hidden_perfect_nurse_ep1`

- 캐릭터: `없음`
**—**: ─── 보건선생님 PERFECT END ───

---

### `hidden_perfect_nurse_ep1`
- 배경: `ending_perfect_nurse.png`
- 다음: `hidden_perfect_nurse_ep2`

- 캐릭터: `없음`
**{name}**: *아침. 식탁에 밴드가 붙어 있다. 오늘의 메뉴가 작은 글씨로 적혀 있다.*

---

### `hidden_perfect_nurse_ep2`
- 배경: `ending_perfect_nurse.png`
- 다음: `hidden_perfect_nurse_ep3`

- 캐릭터: `없음`
**{name}**: *대학병원에 복직했다. 환자들이 이름을 불러준다. — 이주원 선생님.*

---

### `hidden_perfect_nurse_ep3`
- 배경: `ending_perfect_nurse.png`
- 다음: `hidden_perfect_nurse_ep4`

- 캐릭터: `없음`
**{name}**: *로즈마리 화분이 창가로 옮겨졌다. 해가 잘 드는 쪽. — 그 사람이 물을 주고 있다.*

---

### `hidden_perfect_nurse_ep4`
- 배경: `ending_perfect_nurse.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**{name}**: *연두색 노트는 서랍 깊숙이 들어갔다. 마지막 페이지 아래쪽에 한 줄이 남아 있다. '유진아, 나 이제 괜찮아.'*

---

### `hidden_true_nurse_1`
- 배경: `school.png`
- BGM: `ending.mp3`
- 플래그: `ending_true_love`
- 다음: `hidden_true_nurse_2`

- 캐릭터: `없음`
**{name}**: *졸업식 날. 교문을 나오는데 — 보건실 앞에 밴드가 붙어 있다.*

---

### `hidden_true_nurse_2`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_2_b`

- 캐릭터: `nurse_normal.png`
**{name}**: *'졸업 축하해. 카페에서 기다릴게.' 밴드를 떼니 안쪽에 작은 약도가 있다. 카페 창가 자리, 보건선생님 앞에는 식은 커피가 두 잔 놓여 있다.*

---

### `hidden_true_nurse_2_b`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_2_c`

- 캐릭터: `nurse_normal.png`
**{name}**: *오늘은 가운도 출석부도 없다.*

---

### `hidden_true_nurse_2_c`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_2_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 졸업 축하해.

---

### `hidden_true_nurse_2_d`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_3`

- 캐릭터: `nurse_normal.png`
**{name}**: 감사합니다.

---

### `hidden_true_nurse_3`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_3_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 졸업 축하해. ...오늘부터 존댓말 안 해도 돼.

---

### `hidden_true_nurse_3_b`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_4`

- 캐릭터: `nurse_normal.png`
**{name}**: 왜요?

---

### `hidden_true_nurse_4`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 있잖아. 전학 온 날 네가 보건실에 왔을 때. 이마 만지면서 '혈압을 알 수 있냐'고 했잖아. 농담인 줄 알았거든.

---

### `hidden_true_nurse_5`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...근데 지금은 그렇게 얼버무릴 생각 없어.

---

### `hidden_true_nurse_5_b`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5_c`

- 캐릭터: `nurse_normal.png`
**{name}**: *커피잔을 쥔 손이 멈춘다. 농담으로 빠져나갈 틈이 사라졌다.*

---

### `hidden_true_nurse_5_c`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 안 되는 거 알았지. 그래서 계속 농담처럼 넘긴 거야.

---

### `hidden_true_nurse_5_d`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5_e`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 근데 넌 내가 얼버무리는 것도 다 알아보더라. 연두색 노트까지.

---

### `hidden_true_nurse_5_e`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5_f`

- 캐릭터: `nurse_normal.png`
**{name}**: 밴드 붙이는 데 3분 걸리는 건 정성이 아니잖아요.

---

### `hidden_true_nurse_5_f`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *커피잔을 내려놓는다. 웃음이 조금 늦게 번진다.*

---

### `hidden_true_nurse_6`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_7`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그래서 말인데, 졸업식 끝나면 다시 와. 보건실 말고 여기로. 그땐 선생님 말고 그냥 이주원으로 볼게.

---

### `hidden_true_nurse_7`
- 배경: `nurse_home_event1.png`
- 다음: `hidden_true_nurse_7_b`

- 캐릭터: `없음`
**{name}**: *카페 문을 나선 뒤에도 손이 쉽게 떨어지지 않았다. 정신을 차리고 보니, 보건실이 아닌 선생님의 집 앞이었다.*

---

### `hidden_true_nurse_7_b`
- 배경: `nurse_home_event1.png`
- 다음: `hidden_true_nurse_7_c`

- 캐릭터: `없음`
**보건선생님**: ...거기까지 보고 있었구나.

---

### `hidden_true_nurse_7_c`
- 배경: `nurse_home_event1.png`
- 다음: `hidden_true_nurse_7_d`

- 캐릭터: `없음`
**보건선생님**: *손을 뻗어 {name}의 손등에 붙은 밴드를 만진다. 아침에 붙여 둔 밴드다.*

---

### `hidden_true_nurse_7_d`
- 배경: `nurse_home_event1.png`
- 다음: `hidden_true_nurse_8`

- 캐릭터: `없음`
**보건선생님**: *밴드 끝을 손톱으로 한 번 눌렀다가 손을 뗀다.*

---

### `hidden_true_nurse_8`
- 배경: `ending_true_nurse.png`
- 다음: `hidden_true_nurse_ending_title`

- 캐릭터: `없음`
**보건선생님**: 이제는 아픈 척하지 말고 와. 그냥 보고 싶어서 왔다고 해.

---

### `hidden_true_nurse_ending_title`
- 배경: `ending_true_nurse.png`
- 다음: `hidden_true_nurse_8_b`

- 캐릭터: `없음`
**—**: ─── 보건선생님 TRUE LOVE END ───

---

### `hidden_true_nurse_8_b`
- 배경: `ending_true_nurse.png`
- 다음: `hidden_true_nurse_8_c`

- 캐릭터: `없음`
**보건선생님**: *커피잔을 돌리며* ...졸업하고 나서 보건실 냄새가 그리울 줄은 몰랐는데.

---

### `hidden_true_nurse_8_c`
- 배경: `ending_true_nurse.png`
- 다음: `hidden_true_nurse_8_d`

- 캐릭터: `없음`
**{name}**: *카페 창문에 보건실 흰 커튼이 겹쳐 보였다가 사라진다.*

---

### `hidden_true_nurse_8_d`
- 배경: `ending_true_nurse.png`
- 다음: `hidden_true_nurse_8_e`

- 캐릭터: `없음`
**{name}**: *커피잔을 돌리던 손이 멈춰 있다.*

---

### `hidden_true_nurse_8_e`
- 배경: `ending_true_nurse.png`
- 다음: `hidden_true_nurse_8_f`

- 캐릭터: `없음`
**보건선생님**: 있잖아. 나 그때 퇴사할까 고민하고 있었거든.

---

### `hidden_true_nurse_8_f`
- 배경: `ending_true_nurse.png`
- 다음: `hidden_true_nurse_8_g`

- 캐릭터: `없음`
**{name}**: 어지러워서요.

---

### `hidden_true_nurse_8_g`
- 배경: `ending_true_nurse.png`
- 다음: `hidden_true_nurse_8_h`

- 캐릭터: `없음`
**보건선생님**: 근데 네가 와서 — 여기 있을 이유가 생겼어. *작게 웃으며* 고마워.

---

### `hidden_true_nurse_8_h`
- 배경: `ending_true_nurse.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**{name}**: 알아요.

---

### `hidden_good_nurse_1`
- 배경: `nurse_room.png`
- BGM: `night2.mp3`
- 다음: `hidden_good_nurse_2`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 웬일이야, 졸업생.

---

### `hidden_good_nurse_2`
- 배경: `nurse_room.png`
- 다음: `hidden_good_nurse_2_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 비타민. — 대학 가면 건강 관리 잘해. ...의료적 관심이라고 해둘게.

---

### `hidden_good_nurse_2_b`
- 배경: `nurse_room.png`
- 다음: `hidden_good_nurse_2_c`

- 캐릭터: `nurse_normal.png`
**{name}**: 의료적 관심이에요?

---

### `hidden_good_nurse_2_c`
- 배경: `nurse_room.png`
- 다음: `hidden_good_nurse_2_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *말을 고르며* ...그래. 의료적 관심. *작게* 그렇게 해둘게.

---

### `hidden_good_nurse_2_d`
- 배경: `nurse_room.png`
- 다음: `hidden_good_nurse_3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *병 라벨을 엄지로 문지른다. 웃음이 조금 늦게 따라온다.*

---

### `hidden_good_nurse_3`
- 배경: `nurse_room.png`
- 다음: `hidden_good_nurse_3_b`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건실을 나서며. 병 뚜껑 안쪽에 작은 글씨. '아프면 연락해. 안 아파도 연락해. — ♥'*

---

### `hidden_good_nurse_3_b`
- 배경: `nurse_room.png`
- 다음: `hidden_good_nurse_4`

- 캐릭터: `nurse_normal.png`
**{name}**: *병 뚜껑을 닫고도 입가가 안 내려간다.*

---

### `hidden_good_nurse_4`
- 배경: `ending_good_nurse.png`
- 다음: `hidden_good_nurse_ending_title`

- 캐릭터: `없음`
**{name}**: *병을 쥔 손이 멈춘다. 연두색 노트가 들어 있던 서랍은 닫혀 있다.*

---

### `hidden_good_nurse_ending_title`
- 배경: `ending_good_nurse.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**—**: ─── 보건선생님 GOOD END ───

---

### `ending_affinity_check`
- 배경: `park.png`
- 분기:
  - [`route_seoyeon`] → `ending_aff_check_seo`
  - [`route_yuna`] → `ending_aff_check_yuna`
  - [`route_dain`] → `ending_aff_check_dain`
  - [기본] → `day5_ending_alone`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `ending_aff_check_seo`
- 배경: `top_school.png`
- 호감분기: Seoyeon
  - [80+] → `perfect_seo_1`
  - [60+] → `true_seo_1`
  - [40+] → `day5_ending_good`
  - [기본] → `bitter_seo_1`
- 다음: `bitter_seo_1`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `perfect_seo_1`
- 배경: `top_school.png`
- BGM: `ending.mp3`
- 플래그: `ending_perfect`
- 다음: `perfect_seo_1_b`

- 캐릭터: `없음`
**{name}**: *옥상. 화분 몇 개가 난간 아래에 놓여 있다. 흙 위에 물 자국이 남아 있다.*

---

### `perfect_seo_1_b`
- 배경: `top_school.png`
- 다음: `perfect_seo_2`

- 캐릭터: `seyoun_cry.png`
**서연**: *서연은 물뿌리개를 내려놓는다. 손잡이에 물방울이 맺혀 있다.*

---

### `perfect_seo_2`
- 배경: `top_school.png`
- 다음: `perfect_seo_3`

- 캐릭터: `seyoun_cry.png`
**{name}**: *눈 밑에 번진 자국이 있다. 서연은 손수건을 접어 주머니에 넣는다.*

---

### `perfect_seo_3`
- 배경: `top_school.png`
- 다음: `perfect_seo_4`

- 캐릭터: `seyoun_cry.png`
**서연**: 오늘은 여기까지만 정리할게.

---

### `perfect_seo_4`
- 배경: `top_school.png`
- 다음: `perfect_seo_5`

- 캐릭터: `seyoun_laugh.png`
**서연**: 남은 건 내일 보자.

---

### `perfect_seo_5`
- 배경: `ending_perfect_seoyeon.png`
- 다음: `perfect_seo_5_b`

- 캐릭터: `없음`
**서연**: *서연이 먼저 계단 쪽으로 걷는다. 문 앞에서 멈춘다.*

---

### `perfect_seo_5_b`
- 배경: `ending_perfect_seoyeon.png`
- 다음: `perfect_epilogue_1_seo`

- 캐릭터: `없음`
**{name}**: *문이 열린 채로 있다.*

---

### `perfect_epilogue_1_seo`
- 배경: `ending_perfect_seoyeon.png`
- 다음: `perfect_epilogue_bridge_seo`

- 캐릭터: `없음`
**{name}**: *졸업 후에도 옥상 문은 가끔 열려 있었다.*

---

### `perfect_epilogue_bridge_seo`
- 배경: `ending_perfect_seoyeon.png`
- 다음: `perfect_epilogue_2_seo`

- 캐릭터: `없음`
**시스템**: *에필로그. 1년 후*

---

### `perfect_epilogue_2_seo`
- 배경: `ending_perfect_seoyeon.png`
- 다음: `perfect_epilogue_3_seo`

- 캐릭터: `없음`
**{name}**: *대학 입학식 날, 서연에게서 사진 한 장이 왔다. 새 화분 두 개와 빈자리 하나.*

---

### `perfect_epilogue_3_seo`
- 배경: `ending_perfect_seoyeon.png`
- 다음: `perfect_epilogue_4_seo`

- 캐릭터: `없음`
**서연**: 하나는 네가 골라.

---

### `perfect_epilogue_4_seo`
- 배경: `ending_perfect_seoyeon.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── PERFECT END (서연) ───

---

### `bitter_seo_1`
- 배경: `school.png`
- BGM: `night2.mp3`
- 플래그: `ending_bittersweet`
- 다음: `bitter_seo_2`

- 캐릭터: `없음`
**{name}**: *한 달쯤 지나, 학교 앞 카페에서 만나자는 연락이 왔다. 메시지는 짧았다.*

---

### `bitter_seo_2`
- 배경: `cafe.png`
- 다음: `bitter_seo_2_b`

- 캐릭터: `seyoun_normal.png`
**서연**: 우리, 너무 조심했어.

---

### `bitter_seo_2_b`
- 배경: `cafe.png`
- 다음: `bitter_seo_3`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연은 컵받침 모서리를 맞춘다. 주문한 커피는 반도 줄지 않았다.*

---

### `bitter_seo_3`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_epilogue_1`

- 캐릭터: `없음`
**{name}**: *카페를 나왔다. 비가 내린다. 우산은 하나고, 버스 정류장은 반대편에 있다.*

---

### `true_seo_1`
- 배경: `seyoun_room.png`
- BGM: `ending.mp3`
- 플래그: `ending_true_love`
- 다음: `true_seo_2`

- 캐릭터: `없음`
**{name}**: *서연의 방. 책상 위에는 파일철과 화분 세 개가 놓여 있다. 가족사진은 책꽂이 옆에 기대어 있다.*

---

### `true_seo_2`
- 배경: `seyoun_room.png`
- 다음: `true_seo_3`

- 캐릭터: `없음`
**{name}**: *화분 받침 아래에 접힌 종이가 끼워져 있다.*

---

### `true_seo_3`
- 배경: `seyoun_room.png`
- 다음: `true_seo_4`

- 캐릭터: `seyoun_normal.png`
**서연**: 앉아. 의자는 저쪽.

---

### `true_seo_4`
- 배경: `seyoun_room.png`
- 다음: `true_seo_5`

- 캐릭터: `seyoun_normal.png`
**{name}**: *의자를 당기자 바닥이 작게 긁힌다.*

---

### `true_seo_5`
- 배경: `seyoun_room.png`
- 다음: `true_seo_6`

- 캐릭터: `seyoun_laugh.png`
**서연**: 집에서는 말이 길어지면 피곤해져.

---

### `true_seo_6`
- 배경: `seyoun_room.png`
- 다음: `true_seo_6b`

- 캐릭터: `seyoun_laugh.png`
**서연**: *서연이 화분 받침 아래 종이를 빼낸다.*

---

### `true_seo_6b`
- 배경: `seyoun_room.png`
- 다음: `true_seo_7`

- 캐릭터: `seyoun_shy.png`
**서연**: 그래서 적어 뒀어. 까먹지 않으려고.

---

### `true_seo_7`
- 배경: `seyoun_room.png`
- 다음: `true_seo_7_b`

- 캐릭터: `seyoun_shy.png`
**서연**: 읽지는 마. 아직.

---

### `true_seo_7_b`
- 배경: `seyoun_room.png`
- 다음: `true_seo_7b`

- 캐릭터: `seyoun_shy.png`
**서연**: *종이는 다시 받침 아래로 들어간다.*

---

### `true_seo_7b`
- 배경: `seyoun_room.png`
- 다음: `true_seo_8`

- 캐릭터: `seyoun_shy.png`
**{name}**: *서연이 컵 두 개를 책상 위에 놓는다.*

---

### `true_seo_8`
- 배경: `seyoun_room.png`
- 다음: `true_seo_bridge`

- 캐릭터: `seyoun_shy.png`
**{name}**: *컵 하나가 {name} 쪽으로 밀려온다.*

---

### `true_seo_bridge`
- 배경: `ending_true_seoyeon.png`
- 다음: `true_epilogue_1_seo`

- 캐릭터: `없음`
**{name}**: *방문은 조금 열려 있다.*

---

### `true_epilogue_1_seo`
- 배경: `ending_true_seoyeon.png`
- 다음: `true_epilogue_2`

- 캐릭터: `없음`
**{name}**: *5일이었다. 서연의 책상 위 물건 위치를 외우기까지.*

---

### `ending_aff_check_yuna`
- 배경: `yuna_hideout.png`
- 호감분기: Yuna
  - [80+] → `perfect_yuna_1`
  - [60+] → `true_yuna_1`
  - [40+] → `day5_ending_good`
  - [기본] → `bitter_yuna_1`
- 다음: `bitter_yuna_1`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `perfect_yuna_1`
- 배경: `yuna_hideout.png`
- BGM: `ending.mp3`
- 플래그: `ending_perfect`
- 다음: `perfect_yuna_2`

- 캐릭터: `없음`
**{name}**: *도서관 별관, 비밀 다락방. 유나가 소설 한 편을 건넨다.*

---

### `perfect_yuna_2`
- 배경: `yuna_hideout.png`
- 다음: `perfect_yuna_3`

- 캐릭터: `yuna_normal.png`
**{name}**: *제목이 주인공 이름이다.*

---

### `perfect_yuna_3`
- 배경: `yuna_hideout.png`
- 다음: `perfect_yuna_4`

- 캐릭터: `yuna_smile.png`
**유나**: ...다 읽고 나면 말해줘. 그게 내 대답이야.

---

### `perfect_yuna_4`
- 배경: `yuna_hideout.png`
- 다음: `perfect_yuna_5`

- 캐릭터: `yuna_shy.png`
**{name}**: *소설의 마지막 문장: '사라지지 않는 사람이 있었다.' 그 아래에 잉크가 조금 번져 있다.*

---

### `perfect_yuna_5`
- 배경: `ending_perfect_yuna.png`
- 다음: `perfect_epilogue_1_yuna`

- 캐릭터: `없음`
**유나**: *자리에서 일어나 안겼다. 아무 말 없이. 깨진 창문 사이로 들어온 빛이 바닥에 길게 놓인다. 손이 등 뒤에서 천천히 멈춘다.*

---

### `perfect_epilogue_1_yuna`
- 배경: `ending_perfect_yuna.png`
- 다음: `perfect_epilogue_bridge_yuna`

- 캐릭터: `없음`
**{name}**: *매일 같은 자리에 앉았다. 유나가 넘기는 페이지 소리도 날마다 조금씩 달랐다.*

---

### `perfect_epilogue_bridge_yuna`
- 배경: `ending_perfect_yuna.png`
- 다음: `perfect_epilogue_2_yuna`

- 캐릭터: `없음`
**시스템**: *에필로그 — 1년 후*

---

### `perfect_epilogue_2_yuna`
- 배경: `ending_perfect_yuna.png`
- 다음: `perfect_epilogue_3_yuna`

- 캐릭터: `없음`
**{name}**: *유나의 첫 장편소설이 출판됐다. 헌정사: '세 번째 별에게.'*

---

### `perfect_epilogue_3_yuna`
- 배경: `ending_perfect_yuna.png`
- 다음: `perfect_epilogue_4_yuna`

- 캐릭터: `없음`
**유나**: *여전히 말이 적다. 하지만 {name}에게만 문장의 길이가 달라졌다.*

---

### `perfect_epilogue_4_yuna`
- 배경: `ending_perfect_yuna.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── PERFECT END (유나) ───

---

### `bitter_yuna_1`
- 배경: `school.png`
- BGM: `night2.mp3`
- 플래그: `ending_bittersweet`
- 다음: `bitter_yuna_2`

- 캐릭터: `없음`
**{name}**: *고백은 했다. 유나는 끄덕였지만, 손가락은 책갈피 끝을 계속 문지르고 있었다. 한 달쯤 지나서, 쪽지가 하나 사물함에 들어 있었다. '얘기 좀 하자.'*

---

### `bitter_yuna_2`
- 분기:
  - [`chose_yuna_lunch`] → `bitter_yuna_2_library`
  - [기본] → `bitter_yuna_2_book`

<!-- i18n -->

---

### `bitter_yuna_2_library`
- 배경: `library_old.png`
- 다음: `bitter_yuna_3`

- 캐릭터: `yuna_sad.png`
**유나**: ...가끔 생각나. 도서관 냄새 맡으면. 그때 좀 더 말할 걸.

---

### `bitter_yuna_2_book`
- 배경: `bookstore.png`
- 다음: `bitter_yuna_3`

- 캐릭터: `yuna_sad.png`
**유나**: ...가끔 생각나. 서점 지날 때. 그때 좀 더 말할 걸.

---

### `bitter_yuna_3`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_epilogue_1`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *교문을 나온다. 비가 내린다. 우편함에 유나의 마지막 쪽지가 꽂혀 있다. 짧다. 종이 아래쪽이 비에 번져 있다.*

---

### `true_yuna_1`
- 배경: `yuna_hideout.png`
- BGM: `ending.mp3`
- 플래그: `ending_true_love`
- 다음: `true_yuna_2`

- 캐릭터: `없음`
**{name}**: *도서관 별관. 비밀 독서 공간보다 더 깊숙이 — 다락방. 존재조차 몰랐던 공간.*

---

### `true_yuna_2`
- 배경: `yuna_hideout.png`
- 다음: `true_yuna_2_b`

- 캐릭터: `yuna_normal.png`
**유나**: 여기 아는 건 나뿐이었는데.

---

### `true_yuna_2_b`
- 배경: `yuna_hideout.png`
- 다음: `true_yuna_2_c`

- 캐릭터: `yuna_normal.png`
**유나**: *다락방의 작은 사다리를 올라간다. 위로 향하는 해치가 있다. — 열리자 바람이 불어온다.*

---

### `true_yuna_2_c`
- 배경: `yuna_hideout.png`
- 다음: `true_yuna_2_d`

- 캐릭터: `yuna_normal.png`
**{name}**: *다락방 위는 옥상이었다. 도서관 별관의 옥상. — 아무도 모르는 비밀 통로.*

---

### `true_yuna_2_d`
- 배경: `yuna_hideout.png`
- 다음: `true_yuna_3`

- 캐릭터: `yuna_normal.png`
**유나**: *난간에 기대어 선다. 별이 보인다.*

---

### `true_yuna_3`
- 배경: `yuna_hideout.png`
- 다음: `true_yuna_4`

- 캐릭터: `yuna_normal.png`
**유나**: *작은 창문을 연다. 별이 보인다.*

---

### `true_yuna_4`
- 배경: `yuna_hideout.png`
- 다음: `true_yuna_5`

- 캐릭터: `yuna_smile.png`
**유나**: 이제 너도.

---

### `true_yuna_5`
- 배경: `yuna_hideout.png`
- 다음: `true_yuna_5_b`

- 캐릭터: `yuna_smile.png`
**{name}**: 세 번째 별?

---

### `true_yuna_5_b`
- 배경: `yuna_hideout.png`
- 다음: `true_yuna_6`

- 캐릭터: `yuna_smile.png`
**유나**: *멈춘다. 책등을 쥔 손이 느슨해진다.*

---

### `true_yuna_6`
- 배경: `yuna_hideout.png`
- 다음: `true_yuna_6b`

- 캐릭터: `yuna_shy.png`
**유나**: ...기억하고 있었어.

---

### `true_yuna_6b`
- 배경: `yuna_hideout.png`
- 다음: `true_yuna_7`

- 캐릭터: `yuna_smile.png`
**유나**: 가지 마. 오늘은 여기 있어.

---

### `true_yuna_7`
- 배경: `yuna_hideout.png`
- 다음: `true_yuna_bridge`

- 캐릭터: `yuna_shy.png`
**{name}**: *세 번째 별표 옆에, 첫 쪽지와 같은 연보라색 점이 찍혀 있다. 유나가 노트를 덮고 별관 문 쪽으로 먼저 걷는다.*

---

### `true_yuna_bridge`
- 배경: `ending_true_yuna.png`
- 다음: `true_epilogue_1_yuna`

- 캐릭터: `없음`
**{name}**: *유나의 별이 아직 눈앞에 남아 있다.*

---

### `true_epilogue_1_yuna`
- 배경: `ending_true_yuna.png`
- 다음: `true_epilogue_2`

- 캐릭터: `없음`
**{name}**: *5일이었다. 유나의 쪽지 밖 목소리를 듣게 된.*

---

### `ending_aff_check_dain`
- 배경: `gym.png`
- 호감분기: Dain
  - [80+] → `perfect_dain_1`
  - [60+] → `true_dain_1`
  - [40+] → `day5_ending_good`
  - [기본] → `bitter_dain_1`
- 다음: `bitter_dain_1`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `perfect_dain_1`
- 배경: `gym.png`
- BGM: `ending.mp3`
- 플래그: `ending_perfect`
- 다음: `perfect_dain_2`

- 캐릭터: `없음`
**{name}**: *체육관. 다인이 마지막 서브를 날린다. 붕대를 풀면서.*

---

### `perfect_dain_2`
- 배경: `gym.png`
- 다음: `perfect_dain_2b`

- 캐릭터: `dain_normal.png`
**다인**: 이게 마지막 토스야. — 근데 시작이기도 해.

---

### `perfect_dain_2b`
- 배경: `gym.png`
- 다음: `perfect_dain_3`

- 캐릭터: `dain_normal.png`
**다인**: *배구공을 내려놓고 {name}의 대답을 기다린다.*

---

### `perfect_dain_3`
- 배경: `gym.png`
- 다음: `perfect_dain_3b`

- 캐릭터: `dain_normal.png`
**다인**: 코트 밖에서도 나, 괜찮은 사람이야?

---

### `perfect_dain_3b`
- 배경: `gym.png`
- 다음: `perfect_dain_4`

- 캐릭터: `dain_normal.png`
**다인**: *배구공을 코트에 내려놓는다. 돌아서서 웃는다. 조용한 웃음이다.*

---

### `perfect_dain_4`
- 배경: `gym.png`
- 다음: `perfect_dain_5`

- 캐릭터: `dain_shy.png`
**{name}**: 코트 안에서도 밖에서도.

---

### `perfect_dain_5`
- 배경: `ending_perfect_dain.png`
- 다음: `perfect_epilogue_1_dain`

- 캐릭터: `없음`
**다인**: *자리에서 뛰어올랐다. 준비가 안 됐다. 배구공이 바닥을 굴러갔고 — 노을 진 체육관에 두 사람의 그림자만 남았다.*

---

### `perfect_epilogue_1_dain`
- 배경: `ending_perfect_dain.png`
- 다음: `perfect_epilogue_1b_dain`

- 캐릭터: `없음`
**{name}**: *뛰어오른 다인의 무릎이 착지하면서 조금 꺾인다. 다인은 먼저 웃고, 그다음 손으로 무릎을 누른다.*

---

### `perfect_epilogue_1b_dain`
- 배경: `ending_perfect_dain.png`
- 다음: `perfect_epilogue_1c_dain`

- 캐릭터: `없음`
**{name}**: *매일 아침 붕대를 감고, 아무도 모르게 무릎을 문지르던 사람이. 지금 뛰어올랐다.*

---

### `perfect_epilogue_1c_dain`
- 배경: `ending_perfect_dain.png`
- 다음: `perfect_epilogue_bridge_dain`

- 캐릭터: `없음`
**{name}**: *무릎이 아픈 날이면 다인은 속도를 낮춘다. 나는 그 옆에서 같은 박자로 뛴다.*

---

### `perfect_epilogue_bridge_dain`
- 배경: `ending_perfect_dain.png`
- 다음: `perfect_epilogue_2_dain`

- 캐릭터: `없음`
**시스템**: *에필로그 — 1년 후*

---

### `perfect_epilogue_2_dain`
- 배경: `ending_perfect_dain.png`
- 다음: `perfect_epilogue_3_dain`

- 캐릭터: `없음`
**다인**: *스포츠 해설가가 됐다. 카메라 앞에서도 웃고 있다. 이번엔 말끝에 힘을 주지 않는다.*

---

### `perfect_epilogue_3_dain`
- 배경: `ending_perfect_dain.png`
- 다음: `perfect_epilogue_4_dain`

- 캐릭터: `없음`
**{name}**: *가끔 무릎이 아프다고 한다. 그때는 나란히 앉아 배구공의 바람 빠지는 소리만 듣는다.*

---

### `perfect_epilogue_4_dain`
- 배경: `ending_perfect_dain.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── PERFECT END (다인) ───

---

### `bitter_dain_1`
- 배경: `school.png`
- BGM: `night2.mp3`
- 플래그: `ending_bittersweet`
- 다음: `bitter_dain_2`

- 캐릭터: `없음`
**{name}**: *고백은 했다. 다인은 좋다고 웃었다. 체육관 조명처럼 환했지만, 오래 가지는 않았다. 한 달쯤 지나서, 체육관 앞에서 기다리자는 문자가 왔다.*

---

### `bitter_dain_2`
- 배경: `gym.png`
- 다음: `bitter_dain_3`

- 캐릭터: `dain_normal.png`
**다인**: 재밌었어! ...근데, 재밌기만 했어. 그게 좀 아쉬워.

---

### `bitter_dain_3`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_dain_3_b`

- 캐릭터: `없음`
**{name}**: *체육관을 나왔다. 비가 내린다. 닫힌 문 너머로 공 튀는 소리가 한 번 울린다.*

---

### `bitter_dain_3_b`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_epilogue_1`

- 캐릭터: `없음`
**{name}**: *교문 밖으로 나왔다. 비가 내린다. — 우산은 없다. 벚꽃이 비에 젖어 발밑에 붙어 있다.*

---

### `bitter_epilogue_1`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_epilogue_2`

- 캐릭터: `없음`
**{name}**: *졸업 후. 연락이 뜸해졌다. 한 달에 한 번이 두 달에 한 번이 됐다. 어느 날 메시지 입력창에 '뭐라고 하지?'만 남겨둔 채 화면을 껐다.*

---

### `bitter_epilogue_2`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_epilogue_3`

- 캐릭터: `없음`
**{name}**: *5일의 기록은 남았다. 마지막 사진에는 둘 사이에 한 사람 지나갈 만큼의 간격이 있다.*

---

### `bitter_epilogue_3`
- 배경: `ending_bittersweet.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── BITTERSWEET END ───

---

### `true_dain_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- BGM: `ending.mp3`
- 플래그: `ending_true_love`
- 다음: `true_dain_2`

- 캐릭터: `없음`
**{name}**: *체육관. 어제와 같은 비상등. 매트 위에 나란히 누워 있다.*

---

### `true_dain_2`
- 배경: `gym.png`
- 다음: `true_dain_2b`

- 캐릭터: `dain_shy.png`
**다인**: *{name}의 손을 잡아 자기 손목 안쪽에 올린다. 아무 말 없이.*

---

### `true_dain_2b`
- 배경: `gym.png`
- 다음: `true_dain_3`

- 캐릭터: `dain_shy.png`
**{name}**: *빠르다. 말하지 않아도 전해지는 속도.*

---

### `true_dain_3`
- 배경: `gym.png`
- 다음: `true_dain_4`

- 캐릭터: `dain_normal.png`
**{name}**: *손끝 아래로 맥이 또렷하게 뛴다.*

---

### `true_dain_4`
- 배경: `gym.png`
- 다음: `true_dain_5`

- 캐릭터: `dain_normal.png`
**{name}**: *말이 나오지 않는다. 입술만 마른다.*

---

### `true_dain_5`
- 배경: `gym.png`
- 다음: `true_dain_6`

- 캐릭터: `dain_shy.png`
**{name}**: ...빠르다.

---

### `true_dain_6`
- 배경: `gym.png`
- 다음: `true_dain_7`

- 캐릭터: `dain_shy.png`
**다인**: *배구공으로 얼굴을 반쯤 가리며* 왜 그렇게 봐... 나 지금 표정 관리 안 돼.

---

### `true_dain_7`
- 배경: `gym.png`
- 다음: `true_dain_8`

- 캐릭터: `dain_laugh.png`
**{name}**: 안 봤는데.

---

### `true_dain_8`
- 배경: `gym.png`
- 다음: `true_dain_8b`

- 캐릭터: `dain_laugh.png`
**다인**: 봤거든. ...근데 피하진 않을게.

---

### `true_dain_8b`
- 배경: `gym.png`
- 다음: `true_dain_bridge`

- 캐릭터: `dain_laugh.png`
**다인**: *목소리 끝이 가볍게 올라간다. 이번엔 억지로 밀어 올린 소리가 아니다.*

---

### `true_dain_bridge`
- 배경: `ending_true_dain.png`
- 다음: `true_epilogue_1_dain`

- 캐릭터: `없음`
**{name}**: *다인의 웃음이 아직 귓가에 남아 있다.*

---

### `true_epilogue_1_dain`
- 배경: `ending_true_dain.png`
- 다음: `true_epilogue_2`

- 캐릭터: `없음`
**{name}**: *5일이었다. 다인이 웃지 못하는 순간까지 보게 되기까지.*

---

### `true_epilogue_2`
- 배경: `school.png`
- 다음: `true_epilogue_3`

- 캐릭터: `없음`
**{name}**: *교복은 뻣뻣했고, 벚꽃은 재채기였고, 교문 앞에서 뭘 해야 할지 몰랐다.*

---

### `true_epilogue_3`
- 배경: `school.png`
- 다음: `true_epilogue_4`

- 캐릭터: `없음`
**{name}**: *근데 돌아보면 — 시작은 꽤 빨랐다. 인정하기까지 5일이 걸렸을 뿐.*

---

### `true_epilogue_4`
- 분기:
  - [`route_dain`] → `true_epilogue_4_dain`
  - [`route_yuna`] → `true_epilogue_4_yuna`
  - [`route_seoyeon`] → `true_epilogue_4_seo`
  - [기본] → `true_epilogue_4_seo`

<!-- i18n -->

---

### `true_epilogue_4_seo`
- 배경: `park.png`
- 다음: `true_epilogue_7`

- 캐릭터: `없음`
**{name}**: *어머니의 전화는 여전히 짧다. 거울 앞 메모도 그대로다. 서연은 가끔 메모 없이 말한다.*

---

### `true_epilogue_4_yuna`
- 배경: `park.png`
- 다음: `true_epilogue_7`

- 캐릭터: `없음`
**{name}**: *선배의 연락처는 여전히 없다. 도서관 구석 자리도 비어 있다. 대신 유나는 이제 쪽지보다 먼저 목소리를 쓴다.*

---

### `true_epilogue_4_dain`
- 배경: `park.png`
- 다음: `true_epilogue_7`

- 캐릭터: `없음`
**{name}**: *무릎은 아침마다 붕대를 감는다. 알람 메모는 여전히 시끄럽다. 그래도 다인은 가끔 아주 짧은 안부를 보낸다.*

---

### `true_epilogue_7`
- 배경: `park.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── TRUE LOVE END ───

---

### `day5_ending_alone`
- 배경: `ending_alone.png`
- BGM: `night2.mp3`
- 다음: `alone_1`

- 캐릭터: `없음`
**{name}**: *교문을 나선다. 핸드폰이 울린다. — 아무도 아니다. 배터리 부족 알림.*

---

### `alone_1`
- 배경: `ending_alone.png`
- 다음: `alone_2`

- 캐릭터: `없음`
**{name}**: *5일이었다. 책상 위에는 열쇠, 쪽지, 손목 보호대가 나란히 놓여 있다. 어느 것도 가방에 넣지 못했다.*

---

### `alone_2`
- 배경: `ending_alone.png`
- 다음: `alone_2_b`

- 캐릭터: `없음`
**{name}**: *방 안이 조용하다. 핸드폰 화면에는 대화방 세 개가 위에 고정돼 있다. 어느 곳에도 새 메시지는 없다.*

---

### `alone_2_b`
- 배경: `ending_alone.png`
- 다음: `alone_4`

- 캐릭터: `없음`
**{name}**: *방 안이 조용하다. 문 닫히는 소리 뒤로 목소리들이 한꺼번에 멀어진다. 창밖 벚꽃은 바람에 흩어진다.*

---

### `alone_4`
- 배경: `ending_alone.png`
- 다음: `alone_5`

- 캐릭터: `없음`
**{name}**: *방 불을 끄자 알림음도 멈춘다. 책상 위 열쇠, 쪽지, 손목 보호대만 어둠 속에 남는다.*

---

### `alone_5`
- 배경: `ending_alone.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── ALONE END ───

---

### `ending_last_chance_resolve`
- 배경: `park.png`
- 분기:
  - [`day5_confessed`] → `ending_confessed_aff_check`
  - [기본] → `day5_ending_friend`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `ending_confessed_aff_check`
- 배경: `park.png`
- 분기:
  - [`route_seoyeon`] → `ending_confessed_aff_seo`
  - [`route_yuna`] → `ending_confessed_aff_yuna`
  - [`route_dain`] → `ending_confessed_aff_dain`
  - [기본] → `day5_ending_friend`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `ending_confessed_aff_seo`
- 배경: `top_school.png`
- 호감분기: Seoyeon
  - [40+] → `day5_ending_good`
- 다음: `day5_ending_confess_fail`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `ending_confessed_aff_yuna`
- 배경: `yuna_hideout.png`
- 호감분기: Yuna
  - [40+] → `day5_ending_good`
- 다음: `day5_ending_confess_fail`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `ending_confessed_aff_dain`
- 배경: `gym.png`
- 호감분기: Dain
  - [40+] → `day5_ending_good`
- 다음: `day5_ending_confess_fail`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `day5_ending_confess_fail`
- 배경: `park.png`
- BGM: `night2.mp3`
- 분기:
  - [`route_seoyeon`] → `confess_fail_cg_seo`
  - [`route_yuna`] → `confess_fail_cg_yuna`
  - [`route_dain`] → `confess_fail_cg_dain`
  - [기본] → `confess_fail_cg_seo`

- 캐릭터: `없음`
**{name}**: *용기를 냈다. 말했다. — 근데 돌아온 건 고개 숙인 침묵이었다.*

---

### `confess_fail_cg_seo`
- 배경: `ending_confess_fail_seoyeon.png`
- 다음: `confess_fail_1`

- 캐릭터: `없음`
**{name}**: *화면은 멈춰 있고, 답장은 바뀌지 않는다.*

---

### `confess_fail_cg_yuna`
- 배경: `ending_confess_fail_yuna.png`
- 다음: `confess_fail_1`

- 캐릭터: `없음`
**{name}**: *화면은 멈춰 있고, 답장은 바뀌지 않는다.*

---

### `confess_fail_cg_dain`
- 배경: `ending_confess_fail_dain.png`
- 다음: `confess_fail_1`

- 캐릭터: `없음`
**{name}**: *화면은 멈춰 있고, 답장은 바뀌지 않는다.*

---

### `confess_fail_1`
- 배경: `ending_bittersweet.png`
- 다음: `confess_fail_2`

- 캐릭터: `없음`
**{name}**: *몇 걸음이나 걸어 나온 뒤에도 휴대폰을 내려놓지 못했다. 읽음 표시 옆에 마지막 문장이 남아 있다.*

---

### `confess_fail_2`
- 배경: `ending_bittersweet.png`
- 다음: `confess_fail_3`

- 캐릭터: `없음`
**{name}**: *휴대폰을 주머니에 넣었다가 다시 꺼냈다. 마지막 문장은 읽음 표시 옆에서 더 짧아 보였다.*

---

### `confess_fail_3`
- 배경: `ending_bittersweet.png`
- 다음: `confess_fail_4`

- 캐릭터: `없음`
**{name}**: *좋아한다고 말했다. 답장이 오기까지는 오래 걸렸고, 내용은 짧았다.*

---

### `confess_fail_4`
- 배경: `ending_bittersweet.png`
- 다음: `confess_fail_5`

- 캐릭터: `없음`
**{name}**: *말은 끝까지 나왔다. 그래서인지 돌아서는 발끝도 예전보다 덜 흔들린다.*

---

### `confess_fail_5`
- 배경: `ending_bittersweet.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── FRIEND END (고백 실패) ───

---

### `day5_ending_good`
- 배경: `park.png`
- BGM: `night2.mp3`
- 다음: `good_1`

- 캐릭터: `없음`
**{name}**: *고백 후에도 달라진 건 많지 않았다. 약속이 하나 더 생겼다.*

---

### `good_1`
- 배경: `park.png`
- 다음: `good_1b`

- 캐릭터: `없음`
**{name}**: *며칠은 어색했다. 연락은 끊기지 않았다.*

---

### `good_1b`
- 배경: `park.png`
- 다음: `good_1c`

- 캐릭터: `없음`
**{name}**: *둘은 같은 길로 나왔다.*

---

### `good_1c`
- 배경: `park.png`
- 분기:
  - [`route_dain`] → `good_1_dain`
  - [`route_yuna`] → `good_1_yuna`
  - [`route_seoyeon`] → `good_1_seo`
  - [기본] → `good_1_seo`

- 캐릭터: `없음`
**{name}**: *벚꽃잎이 신발 앞에 붙었다가, 다음 걸음에 떨어진다.*

---

### `good_1_seo`
- 배경: `park.png`
- 다음: `good_1_seo_b`

- 캐릭터: `seyoun_normal.png`
**서연**: 천천히 하자.

---

### `good_1_seo_b`
- 배경: `park.png`
- 다음: `good_1_seo_c`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연이 {name}의 소매 끝에 붙은 꽃잎을 떼어낸다.*

---

### `good_1_seo_c`
- 배경: `park.png`
- 다음: `good_1_seo_d`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연은 반 걸음 늦춰 걷는다.*

---

### `good_1_seo_d`
- 배경: `park.png`
- 다음: `good_2_seo`

- 캐릭터: `seyoun_normal.png`
**{name}**: *발걸음이 나란해진다.*

---

### `good_2_seo`
- 배경: `park.png`
- 다음: `good_3_seo`

- 캐릭터: `seyoun_normal.png`
**{name}**: *벚꽃길 끝. 서연이 횡단보도 앞에서 멈춘다.*

---

### `good_3_seo`
- 배경: `park.png`
- 다음: `good_4_seo`

- 캐릭터: `seyoun_normal.png`
**서연**: 신호 바뀐다.

---

### `good_4_seo`
- 배경: `park.png`
- 다음: `good_5_seo`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 먼저 건넌다. 중간쯤에서 속도를 늦춘다.*

---

### `good_5_seo`
- 배경: `ending_good_seoyeon.png`
- 다음: `good_epilogue_1`

- 캐릭터: `없음`
**{name}**: *건너편에서 다음 약속을 정했다. 시간과 장소만 말했다.*

---

### `good_epilogue_1`
- 배경: `ending_good_seoyeon.png`
- 다음: `good_epilogue_2`

- 캐릭터: `없음`
**{name}**: *서연의 문자가 온다. '내일 옥상 열어둘게.'*

---

### `good_epilogue_2`
- 배경: `ending_good_seoyeon.png`
- 다음: `good_epilogue_3`

- 캐릭터: `없음`
**{name}**: *사진 한 장이 이어진다. 복사한 옥상 열쇠가 책상 위에 놓여 있다.*

---

### `good_epilogue_3`
- 배경: `ending_good_seoyeon.png`
- 다음: `good_5_cg_seo`

- 캐릭터: `없음`
**{name}**: *열쇠를 주머니에 넣었다. 다음 날 점심시간, 옥상 문은 열려 있었다.*

---

### `good_5_cg_seo`
- 배경: `ending_good_seoyeon.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── GOOD END ───

---

### `good_1_yuna`
- 배경: `park.png`
- 다음: `good_1_yuna_b`

- 캐릭터: `yuna_smile.png`
**유나**: ...늦긴 했네. 그래도 이번엔 네 문장 끝까지 읽었어.

---

### `good_1_yuna_b`
- 배경: `park.png`
- 다음: `good_1_yuna_b_b`

- 캐릭터: `yuna_smile.png`
**유나**: *접힌 쪽지를 건넨다. 펼치면 한 줄이다. '다음엔 먼저 말해.'*

---

### `good_1_yuna_b_b`
- 배경: `park.png`
- 다음: `good_2_yuna`

- 캐릭터: `yuna_smile.png`
**{name}**: *짧은 문장인데, 이번엔 부탁처럼 읽혔다.*

---

### `good_2_yuna`
- 배경: `top_school.png`
- 다음: `good_3_yuna`

- 캐릭터: `yuna_smile.png`
**{name}**: *옥상. 유나가 난간에 기대어 선다. 바람이 불어도 오늘은 먼저 돌아서지 않는다.*

---

### `good_3_yuna`
- 배경: `top_school.png`
- 다음: `good_4_yuna`

- 캐릭터: `yuna_smile.png`
**{name}**: *같은 하늘을 본다. 말수는 적은데 침묵이 전처럼 차갑지 않다.*

---

### `good_4_yuna`
- 배경: `top_school.png`
- 다음: `good_5_yuna`

- 캐릭터: `yuna_smile.png`
**유나**: *책갈피를 새 페이지에 끼운다. 접힌 자국이 없는 쪽이다.*

---

### `good_5_yuna`
- 배경: `ending_good_yuna.png`
- 다음: `good_epilogue_1_yuna`

- 캐릭터: `없음`
**{name}**: *옥상 문을 나서 계단을 내려온다. 발걸음은 느리지만 멈추지 않는다. 이번엔 끝까지 읽고, 끝까지 말할 것이다.*

---

### `good_epilogue_1_yuna`
- 배경: `ending_good_yuna.png`
- 다음: `good_epilogue_2_yuna`

- 캐릭터: `없음`
**{name}**: *가방 안에서 접힌 쪽지가 나온다. 가방 안감 사이에 오래 눌린 자국이 남아 있다. '1권 다 읽었으면 2권 빌려줄게. — 유나'*

---

### `good_epilogue_2_yuna`
- 배경: `ending_good_yuna.png`
- 다음: `good_epilogue_3_yuna`

- 캐릭터: `없음`
**유나**: *말 대신 다음을 준비한다. 1권 다음에 2권. 오늘 다음에 내일. 다음 약속을 그렇게 남긴다.*

---

### `good_epilogue_3_yuna`
- 배경: `ending_good_yuna.png`
- 다음: `good_5_cg_yuna`

- 캐릭터: `없음`
**{name}**: *쪽지 뒷면에 작게. '...결말은 같이 읽자.' 연보라색 잉크가 번져 있다.*

---

### `good_5_cg_yuna`
- 배경: `ending_good_yuna.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── GOOD END ───

---

### `good_1_dain`
- 배경: `park.png`
- 다음: `good_2_dain`

- 캐릭터: `dain_pout.png`
**다인**: 야, 아직 다 풀린 건 아니야. ...근데 너한테 다시 공 던질 정도는 됐거든.

---

### `good_2_dain`
- 배경: `school.png`
- 다음: `good_3_dain`

- 캐릭터: `dain_pout.png`
**{name}**: *학교 교문 앞. 다인이 배구공을 한번 튀기고, 이번엔 장난 없이 내 쪽으로 던진다.*

---

### `good_3_dain`
- 배경: `school.png`
- 다음: `good_4_dain`

- 캐릭터: `dain_pout.png`
**{name}**: *받았다. 다인은 그걸 보고서야 웃는다. 공이 손바닥 안에서 한 번 더 튄다.*

---

### `good_4_dain`
- 배경: `school.png`
- 다음: `good_5_dain`

- 캐릭터: `dain_laugh.png`
**{name}**: *무릎에는 아직 붕대가 감겨 있다. 다인이 공을 던지고, 나는 한 걸음 늦게 받아낸다.*

---

### `good_5_dain`
- 배경: `ending_good_dain.png`
- 다음: `good_epilogue_1_dain`

- 캐릭터: `없음`
**{name}**: *교문을 지나 함께 걸어 나온다. 다인이 손목을 푼다. 공은 이번엔 넘어오지 않는다.*

---

### `good_epilogue_1_dain`
- 배경: `ending_good_dain.png`
- 다음: `good_epilogue_2_dain`

- 캐릭터: `없음`
**{name}**: *다인에게서 메시지가 왔다. '내일 아침 운동 같이 할 사람?' 평소보다 조심스러운 문장이다.*

---

### `good_epilogue_2_dain`
- 배경: `ending_good_dain.png`
- 다음: `good_epilogue_3_dain`

- 캐릭터: `없음`
**{name}**: *짧은 질문 하나가 화면에 오래 남는다.*

---

### `good_epilogue_3_dain`
- 배경: `ending_good_dain.png`
- 다음: `good_5_cg_dain`

- 캐릭터: `없음`
**{name}**: *답장을 보냈다. '콜.' 내일은 직접 달려가면 된다.*

---

### `good_5_cg_dain`
- 배경: `ending_good_dain.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── GOOD END ───

---

### `day5_ending_friend`
- 배경: `park.png`
- BGM: `night2.mp3`
- 다음: `friend_1`

- 캐릭터: `없음`
**{name}**: *결국 말하지 못했다.*

---

### `friend_1`
- 배경: `park.png`
- 다음: `friend_2`

- 캐릭터: `없음`
**{name}**: *벚꽃이 지금은 바람에 날려 사라지고 있다.*

---

### `friend_2`
- 배경: `park.png`
- 다음: `friend_3`

- 캐릭터: `없음`
**{name}**: *전 학교에서도 이랬다. 또 이랬다.*

---

### `friend_3`
- 배경: `park.png`
- 다음: `friend_route_check`

- 캐릭터: `없음`
**{name}**: *좋아한다고 말할 수 있었던 순간은 있었다. 그때마다 웃는 얼굴만 먼저 나갔다.*

---

### `friend_route_check`
- 배경: `park.png`
- 분기:
  - [`route_seoyeon`] → `friend_4_seo`
  - [`route_yuna`] → `friend_4_yuna`
  - [`route_dain`] → `friend_4_dain`
  - [기본] → `friend_4`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `friend_4`
- 배경: `school.png`
- 다음: `friend_5`

- 캐릭터: `없음`
**{name}**: *교문을 나서는데 핸드폰에 메시지가 와 있다. '오늘 고마웠어.' 답장창에 '나도'를 썼다가, 웃는 이모티콘 하나만 덧붙인다.*

---

### `friend_4_seo`
- 배경: `school.png`
- 다음: `friend_5`

- 캐릭터: `없음`
**{name}**: *교문을 나서는데 메시지가 와 있다. '오늘 덕분에 덜 어색했어. 잘 들어가.' 문장 끝에 이모티콘은 없다.*

---

### `friend_4_yuna`
- 배경: `school.png`
- 다음: `friend_5`

- 캐릭터: `없음`
**{name}**: *교문을 나서는데 핸드폰에 메시지가 와 있다. '...오늘. 고마웠어.' 마침표 뒤에서 커서가 깜빡인다. 답장은 쉽게 이어지지 않는다.*

---

### `friend_4_dain`
- 배경: `school.png`
- 다음: `friend_5`

- 캐릭터: `없음`
**{name}**: *교문을 나서는데 메시지가 와 있다. '야 조심히 가. 오늘 고마웠다.' 답장창에 '응'만 남겨둔다.*

---

### `friend_5`
- 배경: `park.png`
- 다음: `friend_7`

- 캐릭터: `없음`
**{name}**: *'나도 고마워.' 보내고 화면을 본다. — 두 줄의 대화. 친구의 대화다.*

---

### `friend_7`
- 배경: `park.png`
- 다음: `friend_8`

- 캐릭터: `없음`
**{name}**: *...이 학교에서도 말하지 못했다.*

---

### `friend_8`
- 배경: `ending_friend.png`
- 다음: `friend_9`

- 캐릭터: `없음`
**{name}**: *졸업식 날. 핸드폰 갤러리를 넘긴다. 3년 전 소정이의 사진이 있던 자리에, 이제는 이 학교 친구들과 찍은 단체 사진이 있다. 그때처럼 고개를 돌리고 있다.*

---

### `friend_9`
- 배경: `ending_friend.png`
- 다음: `friend_10`

- 캐릭터: `없음`
**{name}**: *나는 또 그 사람 옆에 서서, 제일 편한 표정으로 친구인 척 웃고 있다.*

---

### `friend_10`
- 배경: `ending_friend.png`
- 다음: `friend_12`

- 캐릭터: `없음`
**{name}**: *메모장을 켠다. '나 할 말이 있는데.' — 커서가 깜빡인다. 3년 전처럼. 백스페이스를 꾹 눌러 글자를 지운다.*

---

### `friend_12`
- 배경: `ending_friend.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── FRIEND END ───

---

### `day5_ending_mayhem`
- 배경: `ending_mayhem.png`
- BGM: `night1.mp3`
- 다음: `mayhem_1`

- 캐릭터: `없음`
**{name}**: *세 대화방이 모두 읽음으로 멈춰 있다. 답장을 쓰려다, 첫 글자에서 지운다.*

---

### `mayhem_1`
- 배경: `ending_mayhem.png`
- 다음: `mayhem_2`

- 캐릭터: `없음`
**서연**: *복도에서 {name}을 스쳐 지나간다. 고개를 돌리지 않는다.*

---

### `mayhem_2`
- 배경: `ending_mayhem.png`
- 다음: `mayhem_3`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *유나의 자리가 비어 있었다. 책상 위에 쪽지 한 장. '재밌었어.' 마침표가 마지막이었다.*

---

### `mayhem_3`
- 배경: `ending_mayhem.png`
- 다음: `mayhem_4`

- 캐릭터: `없음`
**다인**: *평소처럼 웃었다. "잘 지내." 말끝이 바닥에 작게 떨어졌다.*

---

### `mayhem_4`
- 배경: `ending_mayhem.png`
- 다음: `mayhem_5`

- 캐릭터: `없음`
**{name}**: *세 사람의 등을 봤다. 셋 다 돌아보지 않았다.*

---

### `mayhem_5`
- 배경: `ending_mayhem.png`
- 다음: `mayhem_6`

- 캐릭터: `없음`
**{name}**: *봄이 끝나고 있다. 벚꽃이 지고 있다. 아무도 내 옆에 없다.*

---

### `mayhem_6`
- 배경: `ending_mayhem.png`
- 다음: `mayhem_7`

- 캐릭터: `없음`
**{name}**: *좋다는 말은 남았지만, 대화방마다 읽지 않은 질문이 쌓였다.*

---

### `mayhem_7`
- 배경: `ending_mayhem.png`
- 다음: `mayhem_8`

- 캐릭터: `없음`
**{name}**: *소정이 사진 아래에 있던 미전송 메모를 본다. 이번엔 보낸 말풍선이 길게 이어져 있다. 화면이 그대로 어둡게 꺼진다.*

---

### `mayhem_8`
- 배경: `ending_mayhem.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── MAYHEM END ───

---

### `day5_ending_harem`
- 배경: `ending_harem.png`
- BGM: `night1.mp3`
- 다음: `harem_1`

- 캐릭터: `없음`
**{name}**: *대답을 고르지 못했다. 세 사람의 표정이 동시에 굳었다.*

---

### `harem_1`
- 배경: `ending_harem.png`
- 다음: `harem_1_b`

- 캐릭터: `없음`
**서연**: *먼저 웃었다. ...그래. 솔직하네. 웃음 끝이 금방 내려앉았다.*

---

### `harem_1_b`
- 배경: `ending_harem.png`
- 다음: `harem_2`

- 캐릭터: `없음`
**유나**: *고개를 숙였다. 한참 뒤 올려다봤을 때, 손끝이 책등을 세게 누르고 있다.*

---

### `harem_2`
- 배경: `ending_harem.png`
- 다음: `harem_3`

- 캐릭터: `없음`
**유나**: ...최악이야.

---

### `harem_3`
- 배경: `ending_harem.png`
- 다음: `harem_4`

- 캐릭터: `없음`
**다인**: *주먹으로 {name}의 어깨를 친다. 제법 세게 닿는다. "야, 최악이다." 말끝에 웃음이 없다.*

---

### `harem_4`
- 배경: `ending_harem.png`
- 다음: `harem_5`

- 캐릭터: `없음`
**{name}**: *월요일은 서연. 수요일은 유나. 금요일은 다인. 캘린더 알림이 뜰 때마다 잠금화면을 먼저 엎어둔다.*

---

### `harem_5`
- 배경: `ending_harem.png`
- 다음: `harem_6`

- 캐릭터: `없음`
**서연**: *"수요일 뭐 해?"라고 물었을 때, 답장창에 손가락이 멈췄다.*

---

### `harem_6`
- 배경: `ending_harem.png`
- 다음: `harem_7`

- 캐릭터: `없음`
**{name}**: *그래도 오늘은 세 사람이 웃고 있다. 내일이 뻔한데도, 나는 또 오늘을 붙잡고 있다.*

---

### `harem_7`
- 배경: `ending_harem.png`
- 다음: `harem_8`

- 캐릭터: `없음`
**{name}**: *3개의 알람이 서로 다른 시간에 울린다. 진동이 겹칠 때마다 위가 먼저 반응한다.*

---

### `harem_8`
- 배경: `ending_harem.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── UNRESOLVED END ───

---

### `day5_credits`
- 배경: `school.png`
- 타입: `credits`
- 다음: `day5_ending_restart`

- 캐릭터: `없음`
**—**: ‹빈›

---

### `day5_ending_restart`
- 배경: `school.png`
- 선택지:
  1. "처음부터 다시 시작하기" → `index.html`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

<!-- SCENARIO-AUTO-END -->
