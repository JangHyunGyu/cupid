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
**{name}**: *4월의 교문 앞. 밟힌 꽃잎이 드문드문 붙어 있다. 새 교복의 접힌 선은 아직 팔꿈치에 남아 있고, 전학 서류는 가방 안에서 납작하게 눌려 있다.*

---

### `start_3`
- 배경: `school.png`
- 다음: `name_input_scene`

- 캐릭터: `없음`
**{name}**: *주머니에서 핸드폰이 울린다. 예전 학교 단체 카톡방. 익숙한 이름 하나가 화면에 떠 있다. 잠시 화면만 보다가, 다시 주머니에 넣었다.*

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
**{name}**: *낯선 교문 앞. 내 교복만 아직 접힌 선이 선명하다. 교문 옆에서 검은 긴 머리의 여학생이 안경을 고쳐 쓰며 시간을 본다. 내가 멈추자 여학생도 고개를 든다.*

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
**서연**: *{name}의 이름을 한 번 더 확인한 뒤 클립보드 위 명단에 체크한다. 안경 너머로 잠깐 더 바라본다.*

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
**서연**: 따라와. 15분 안에 끝낼게.

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
**{name}**: *나도 모르게 웃음이 샌다. 서연은 이미 교문 안쪽으로 걸음을 옮긴 뒤다.*

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
**서연**: *걸음을 멈추고 돌아본다. 안경 너머 눈매가 살짝 휜다.*

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
**서연**: 아직 분위기 파악은 안 됐나 봐. 나쁘진 않아.

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
**서연**: 공짜야. 대신 나중에 이자 붙어.

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
**서연**: *복도를 앞서 걷는다. 마주치는 학생들이 먼저 인사하고, 서연은 가볍게 고개를 끄덕인다.*

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
**서연**: 옥상은 원래 잠겨 있어. 학생회장 특권이지.

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
**서연**: *열쇠고리가 손안에서 멈칫한다.* ...눈치 빠르네.

---

### `hallway_6_c`
- 배경: `school_hallway.png`
- 다음: `hallway_7`

- 캐릭터: `seyoun_normal.png`
**서연**: *대답 대신 열쇠를 다시 주머니에 넣는다.*

---

### `hallway_7`
- 배경: `school_hallway.png`
- 다음: `hallway_8`

- 캐릭터: `seyoun_normal.png`
**서연**: 아, 점심. 밥 어디서 먹는지 모르지? 같이 가.

---

### `hallway_8`
- 배경: `school_hallway.png`
- 다음: `hallway_10`

- 캐릭터: `seyoun_shy.png`
**{name}**: *서연은 교실 앞에서 멈춰 문패를 가리켰다.*

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
**{name}**: *교실 문을 연다. 눈길이 쏟아진다.*

---

### `classroom_2_b`
- 배경: `room_school.png`
- 다음: `classroom_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *교탁 앞에 담임선생님이 서 있다. 20대 후반. 가디건 단추 몇 개가 풀려 있고, 출석부를 든 채다.*

---

### `classroom_3`
- 배경: `room_school.png`
- 다음: `classroom_3_b`

- 캐릭터: `teacher_normal.png`
**담임**: 자, 오늘부터 우리 반에 들어온 전학생이야. 자기소개 해 볼까?

---

### `classroom_3_b`
- 배경: `room_school.png`
- 다음: `classroom_5_b`

- 캐릭터: `teacher_normal.png`
**{name}**: {name}입니다. 잘 부탁드립니다. *담임이 고개를 끄덕인다.*

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
**다인**: 오, 전학생. 우리 반에 새 얼굴 들어왔네!

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
**{name}**: *교실 몇 군데서 웃음이 터진다. 다인은 손을 더 높이 흔든다.*

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
**담임선생님**: *담임은 출석부를 넘긴다.*

---

### `classroom_yuna_1`
- 배경: `room_school.png`
- 다음: `classroom_yuna_2`

- 캐릭터: `yuna_bored.png`
**{name}**: *눈길을 돌리니, 창가 맨 뒤쪽에 한 여학생이 턱을 괸 채 창밖만 본다. 내 이름이 칠판에 적히는 동안에도 책장만 한 장 넘어간다.*

---

### `classroom_yuna_2`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `classroom_yuna_4`

- 캐릭터: `yuna_bored.png`
**{name}**: *은백색 머리. 붉은 눈. 팔의 타투. 창가 맨 뒤 자리의 여학생은 턱을 괸 채 창밖만 본다. 주변 책상은 그쪽만 어색하게 비어 있다.*

---

### `classroom_yuna_4`
- 배경: `room_school.png`
- 다음: `classroom_seat_1`

- 캐릭터: `yuna_bored.png`
**{name}**: *앞줄에서 누군가 속삭인다. '...쟤한테 말 걸지 마, 무섭거든.' 유나는 페이지를 한 장 넘긴다.*

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
**{name}**: *접힌 쪽지가 책상 위로 미끄러져 온다. 뒤를 돌아보자 창가 자리의 은백색 머리 여학생은 여전히 창밖만 본다. 글씨는 반듯하다.*

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
**{name}**: *유나 쪽을 보자, 눈길은 여전히 창밖이다. 손만 책상 아래로 내려가 있다. 방금 전 쪽지가 있던 방향이다.*

---

### `classroom_yuna_note_6`
- 배경: `room_school.png`
- 다음: `lunch_start`

- 캐릭터: `yuna_bored.png`
**{name}**: *수업 종이 울린다. 유나는 다시 창밖만 본다. 다인은 벌써 옆자리 애한테 말을 건다.*

---

## 1일차 — 점심 `day1_2_lunch`

### `lunch_start`
- 배경: `school_hallway.png`
- BGM: `daily.mp3`
- 다음: `lunch_start_4`

- 캐릭터: `없음`
**{name}**: *점심시간. 복도가 학생들로 가득하다. 옥상 쪽 도시락, 매점 앞 손짓, 도서관 방향 쪽지가 한꺼번에 눈에 들어온다.*

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
**{name}**: *복도는 세 갈래다. 옥상, 매점, 도서관. 주머니 안에서 핸드폰 모서리가 손에 걸린다.*

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
**서연**: *피식 웃으며* 학교를 물었는데 밥 얘기네.

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
**서연**: *물병을 들어 입가를 가린다. 라벨이 손안에서 구겨진다.*

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
**서연**: *계란말이를 자기 입에 넣고 괜히 오래 씹는다.*

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
**서연**: *도시락 뚜껑을 닫은 뒤에도 손끝이 모서리에 잠깐 머문다.*

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
**서연**: *도시락을 접었다. 대답은 고치지 않는다. 머리카락 끝을 괜히 넘긴다.*

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
**서연**: *도시락 뚜껑을 정리하고, 옆자리를 슬쩍 비워 둔다.* 바람 괜찮지?

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
**다인**: *투덜거리며 빵을 산다. 그래도 입꼬리는 올라가 있다.*

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
**다인**: *눈을 반짝인다.*

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
**{name}**: *책장 넘기는 소리만 남는다. 의자 다리는 바닥에 닿은 채 움직이지 않는다.*

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
**유나**: *다시 책으로 눈길을 내린다. 빌려준 책의 첫 문장에 한동안 눈이 머문다.*

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
**{name}**: *서연은 웃는 얼굴로 클립보드를 품에 안고 있다. 나는 답장창의 빈칸으로 눈길을 내린다.*

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
**담임선생님**: *책상 위 서류를 한쪽으로 밀어둔다. 의자 등받이에 손을 얹고 잠시 뜸을 들인다.*

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
**{name}**: *복도 형광등이 흔들려 보인다. 벽을 짚자 손바닥에 차가운 페인트 감촉이 닿는다. 복도 한쪽에 '보건실' 표지판이 보인다.*

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
**{name}**: *문 앞에 서서 한 번 숨을 고른다. 들어가서 조금만 쉬자. 손잡이에 손을 얹는다. 금속이 차갑다.*

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
**{name}**: *가볍게 웃는다.*

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
**보건선생님**: *전자체온계를 건네고, 책상 아래에서 혈압계를 꺼낸다.*

---

### `after_nurse_enter_5`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *체온을 확인한 뒤 팔에 혈압계 커프를 감는다.*

---

### `after_nurse_enter_6`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_6_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 열은 없고, 혈압이 조금 낮네.

---

### `after_nurse_enter_6_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_7`

- 캐릭터: `nurse_normal.png`
**{name}**: 아침을 좀 대충 먹긴 했어요.

---

### `after_nurse_enter_7`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_7_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그럼 더 그럴 수 있지. 자, 여기 누워. 10분만 쉬자.

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

- 캐릭터: `nurse_normal.png`
**보건선생님**: 눈치 빠른 환자네. 그래도 지금은 네 상태부터 보자.

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
**보건선생님**: 말 길게 할 필요 없어. 어지러울 때는 대답도 천천히 해.

---

### `after_nurse_enter_8_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_8_c`

- 캐릭터: `nurse_normal.png`
**{name}**: 이 정도면 금방 괜찮아질까요?

---

### `after_nurse_enter_8_c`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_8_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *물컵을 건네며* 물 마시고 쉬면 한결 나을 거야. 그래도 계속 어지러우면 담임한테도 말하자.

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
**보건선생님**: 아까 나 피곤해 보인다고 했지? 학생 눈에도 티가 나면 오늘은 좀 일찍 들어가야겠네. 고마워.

---

### `after_nurse_enter_11_g`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_j`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *진료 기록에 시간을 적고 물컵을 치운다.*

---

### `after_nurse_enter_11_h`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_i`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 보건실이 조용하다고 했지? 쉬고 싶을 때는 담임한테 말하고 와. 그냥 참지는 말고.

---

### `after_nurse_enter_11_i`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_j`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *커튼을 걷고 침대 시트를 정돈한다.*

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
**보건선생님**: 증상 다시 오면 바로 와. 복도에서 버티지 말고.

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
**{name}**: *'자리 비워 놓을게'. — 핸드폰을 내려놓는 손이 한 박자 늦다.*

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
**{name}**: *학교 건강 관리 앱 알림이 떠 있다. '보건실 기록: 전학생 — 어지러움 경미. 오늘은 물을 충분히 마시고 아침 식사를 거르지 않기. 증상이 반복되면 보건실 방문.'*

---

### `night_hidden_nurse_2`
- 배경: `room_my.png`
- 다음: `night_late_transition`

- 캐릭터: `nurse_normal.png` @ 0.35
**{name}**: *마지막 안내를 읽고 침대 옆 물병을 채워 둔다.*

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
**{name}**: *둘째 날. 교복 소매의 접힌 자국이 어제보다 옅다.*

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
**{name}**: *서연이 먼저 다가왔다. 클립보드가 오늘도 팔 안쪽에 붙어 있다. 다인이 교실 뒤쪽에서 고개를 돌리고, 유나는 책장을 한 장 넘긴다.*

---

### `morning2_greet_seo_others_2`
- 배경: `room_school.png`
- 다음: `morning2_note_1`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 클립보드를 한 번 두드린다.*

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
**{name}**: *유나는 쪽지를 쓰던 손을 멈춘다.*

---

### `morning2_greet_dain_others_2`
- 배경: `room_school.png`
- 다음: `morning2_note_1`

- 캐릭터: `dain_laugh.png`
**{name}**: *클립보드 두드리는 소리가 한 박자 늦게 들린다.*

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
**{name}**: *웃고 있다. 하지만 눈길은 쪽지 위에 멈춘다.*

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
**다인**: 이게 정상이야! 네가 부족한 거야!

---

### `morning2_dain_6`
- 배경: `room_school.png`
- 다음: `morning2_note_1`

- 캐릭터: `dain_laugh.png`
**다인**: *아침 조회 전 교실에 다인의 목소리가 먼저 울린다.*

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
**{name}**: *어제와 같은 글씨. 아래쪽에 장소가 적혀 있다. '도서관 별관'.*

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
**{name}**: 소설은 좀 읽어요.

---

### `hidden_homeroom_d2_3_c`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3_d`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *눈길이 열린 서랍 쪽에 닿았다가 돌아온다.*

---

### `hidden_homeroom_d2_3_d`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3_e`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 읽는 건 좋아하고. 쓰는 건?

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
**담임선생님**: *눈길이 서랍 쪽을 스치고 바로 돌아온다.*

---

### `hidden_homeroom_d2_choice1`
- 배경: `teacher_office.png`
- 선택지:
  1. "선생님은요? 뭐 읽으세요?" → `hidden_homeroom_d2_choice1_a` | Teacher +10
  2. "읽는 건 좋아해요" → `hidden_homeroom_d2_choice1_b` | Teacher +3

- 캐릭터: `teacher_normal.png`
**{name}**: *성적표 위에 놓인 손가락이 원고지 모서리를 가린다.*

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
**{name}**: *담임의 눈길이 다인의 이름표 줄에서 한 박자 멈춘다.*

---

### `hidden_homeroom_d2_8_e`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_8_f`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *커피를 내려놓으며* ...아무튼. 너는 별문제 없어.

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
**{name}**: *담임이 컵받침을 같은 자리에서 두 번 돌린다.*

---

### `hidden_homeroom_d2_choice2_a`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_11`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *커피잔으로 입을 가리며* ...됐네. 가 봐.

---

### `hidden_homeroom_d2_choice2_b`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_11`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *손을 저으며* 됐다. 가 봐.

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
**담임선생님**: *담임은 커피잔을 내려다보며 낮게 말한다.*

---

### `hidden_homeroom_d2_12`
- 배경: `teacher_office.png`
- 플래그: `homeroom_day2`, `noticed_manuscript`
- 다음: `morning2_seo_dust_1`

- 캐릭터: `teacher_normal.png`
**{name}**: *교무실을 나서며 열린 서랍 쪽을 한 번 돌아본다.*

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
**{name}**: *점심. 주머니에는 유나의 쪽지가 있다. 복도 끝에서 서연은 도시락을 들고 옥상으로 올라간다. 다인은 매점 쪽에서 손짓한다. 세 갈래 길목에서 걸음을 멈춘다.*

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
**서연**: *피식* 그거, 이상하게 말 되네.

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
**{name}**: *다인이 거리낌 없이 앉는다. 서연의 미간이 살짝 좁아진다.*

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
**서연**: *다인이 도시락 쪽으로 몸을 기울이자 도시락을 자기 쪽으로 조금 당긴다.* 다인이랑은 벌써 친해졌나 봐.

---

### `lunch2_seo_15`
- 배경: `top_school.png`
- 다음: `lunch2_seo_16`

- 캐릭터: `seyoun_normal.png`
**{name}**: 같은 반이잖아. 너희 둘도 이제 아는 사이고.

---

### `lunch2_seo_16`
- 배경: `top_school.png`
- 다음: `lunch2_seo_17`

- 캐릭터: `seyoun_normal.png`
**서연**: 그건 내가 정할게.

---

### `lunch2_seo_17`
- 배경: `top_school.png`
- 다음: `lunch2_seo_19`

- 캐릭터: `dain_normal.png`
**{name}**: *다인이 도시락 쪽으로 손을 뻗다가 서연과 눈이 마주쳐 멈춘다. 세 사람 사이에 잠깐 정적이 흐른다.*

---

### `lunch2_seo_19`
- 배경: `top_school.png`
- 다음: `lunch2_seo_20`

- 캐릭터: `seyoun_normal.png`
**서연**: *{name}의 입가를 본다.*

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
**서연**: *밥풀을 떼어낸다. 손이 한 번 멈칫했다가 곧바로 물러난다.*

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
**서연**: *태연한 얼굴로* 밥풀이었어.

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
**{name}**: *밥풀 하나 떼는 데 대화가 이렇게 끊길 일인가. 서연은 괜히 물병을 집어 든다.*

---

### `lunch2_seo_end_c1`
- 배경: `top_school.png`
- 스탯: Dain -3, Yuna -3
- 다음: `after2_start`

- 캐릭터: `seyoun_shy.png`
**{name}**: *입가를 닦았을 뿐인데, 테이블이 한 박자 조용해졌다. 다인이 본 쪽으로 눈길이 간다.*

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
**서연**: *웃은 얼굴 그대로 도시락 뚜껑을 맞춘다. 딸깍 소리가 괜히 크게 난다.*

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
**{name}**: *매점 쪽으로 간다.*

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
**다인**: *소보로를 한 입 베어 문 채 고개를 돌린다. 씹는 소리가 멎는다.*

---

### `lunch2_dain_c2_1`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_end`

- 캐릭터: `dain_normal.png`
**다인**: *고개를 끄덕이며 소보로를 한 입 베어 문다. 눈길은 매점 유리문 쪽에 있다.*

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
**{name}**: *다인이 소보로를 씹는 소리만 유난히 크게 들린다. 점심시간이 갈수록 복잡해진다.*

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
**{name}**: *말투는 어제처럼 가볍지만, 눈길은 까진 팔꿈치에 고정돼 있다.*

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
**{name}**: *말투는 가볍지만, 눈길은 까진 팔꿈치에 고정돼 있다.*

---

### `lunch2_dain_end_i`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_j`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *소독약과 거즈를 꺼내 팔꿈치 아래에 받친다.*

---

### `lunch2_dain_end_j`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_k`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 조금 따가울 거야. 팔 힘 빼고.

---

### `lunch2_dain_end_k`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_l`

- 캐릭터: `nurse_normal.png`
**{name}**: *소독약 묻은 솜이 상처를 훑는다. 팔꿈치 안쪽이 따끔해진다.*

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
**보건선생님**: *팔꿈치를 한 번 굽혀 보라고 손짓한다.*

---

### `lunch2_dain_end_n`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_o`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 한 번 접어 봐. 당기거나 따갑지는 않아?

---

### `lunch2_dain_end_o`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_p`

- 캐릭터: `nurse_normal.png`
**{name}**: *팔을 접었다 펴도 밴드 끝이 들뜨지 않는다.*

---

### `lunch2_dain_end_p`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_q`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 병원에서 배운 요령이야. 관절은 이렇게 붙여야 오래 가거든.

---

### `lunch2_dain_end_q`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_r`

- 캐릭터: `nurse_normal.png`
**{name}**: *밴드는 팔꿈치를 굽혀도 주름지지 않는다.*

---

### `lunch2_dain_end_r`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_s`

- 캐릭터: `nurse_normal.png`
**{name}**: *밴드를 확인하는데 책상 서랍에서 연두색 노트가 삐져나와 있다. 열린 페이지 첫 줄. '그날의 너에게—' 보건선생님이 서랍을 닫는다.*

---

### `lunch2_dain_end_s`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_t`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *서랍 쪽을 한 번 보고* 방금 본 건 잊어. 대신 하나 알려줄게. 난 커피보다 코코아를 좋아해.

---

### `lunch2_dain_end_t`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_u`

- 캐릭터: `nurse_normal.png`
**{name}**: *대수롭지 않은 답인데, 서랍 손잡이를 누른 손은 떨어지지 않는다.*

---

### `lunch2_dain_end_u`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_v`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *가볍게 웃으며* 그 정도면 비밀 하나 값은 하지?

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
**보건선생님**: 자, 끝. 수업 가. 오늘은 물 닿지 않게 조심하고.

---

### `lunch2_dain_end_x`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_y`

- 캐릭터: `nurse_normal.png`
**{name}**: 내일도 갈아야 해요?

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
**보건선생님**: 들뜨거나 젖으면 와. 멀쩡하면 그대로 둬도 돼.

---

### `lunch2_dain_end_b2`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_c2`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 밴드를 붙인 시간을 진료 기록에 적는다.*

---

### `lunch2_dain_end_c2`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_d2`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 수업 중에 불편하면 체육 선생님께 말하고. 그 외에는 쉬는 시간에 와.

---

### `lunch2_dain_end_d2`
- 배경: `nurse_room.png`
- 다음: `after2_start`

- 캐릭터: `nurse_normal.png`
**{name}**: *진료 기록 끝에 '팔꿈치 굽힘 확인'이 적힌다.*

---

### `lunch2_dain_end_nurse_short1`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_nurse_short2`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 자, 됐다. 다음에는 다치기 전에 주변부터 보고 뛰고.

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
**{name}**: *복도로 나오자 수업 종료 종이 울린다. 새로 붙인 밴드가 소매 끝에 살짝 걸린다.*

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
**유나**: *앞장서 걷는다. 별관 안쪽으로. 발소리가 낮게 울리는 복도 끝에 작은 방이 나온다. 창문으로 햇살이 들어오고, 낡은 소파와 책장이 있다.*

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
**유나**: *유나가 책을 덮는다.*

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
**{name}**: *아무 말 없이 옆에 앉는다. 유나가 힐끗 이쪽을 본다. 그리고 자기 책에서 한 권을 꺼내 내 쪽에 놓는다.*

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
**유나**: *책장으로 눈길을 돌린다. 열린 페이지 위로 햇빛이 더 길어진다.*

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
**{name}**: *5교시 체육 뒤, 팔꿈치 밴드 끝이 소매에 걸린다. 한 번 눌러 보지만 다시 들뜬다.*

---

### `hidden_nurse_d2_1`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_2`

- 캐릭터: `nurse_normal.png`
**{name}**: *소매를 걷자 밴드 한쪽이 들려 있다. 상처에는 피가 더 나지 않는다.*

---

### `hidden_nurse_d2_2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 하루도 안 돼서 밴드가 반품됐네. 앉아 봐.

---

### `hidden_nurse_d2_3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_4`

- 캐릭터: `nurse_normal.png`
**{name}**: 끝이 자꾸 소매에 걸려요.

---

### `hidden_nurse_d2_4`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 어디 보자.

---

### `hidden_nurse_d2_5`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_choice1`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *들뜬 밴드를 떼고 상처 주변을 닦은 뒤 새 밴드를 꺼낸다.* 조금 따가울 거야.

---

### `hidden_nurse_d2_choice1`
- 배경: `nurse_room.png`
- 선택지:
  1. "병원에서는 이런 것도 배워요?" → `hidden_nurse_d2_choice1_a` | Nurse +10
  2. "각도까지 신경 쓰시네요" → `hidden_nurse_d2_choice1_b` | Nurse +3

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 팔꿈치를 접었다 펴 보며 밴드 길이를 가늠한다.*

---

### `hidden_nurse_d2_choice1_a`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 응. 관절은 움직여도 안 뜯기게 붙여야 하거든.

---

### `hidden_nurse_d2_choice1_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그게 내 일이니까. 대충 붙였다가 수업 중에 떨어지면 곤란하잖아.

---

### `hidden_nurse_d2_6`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_7`

- 캐릭터: `nurse_normal.png`
**{name}**: *밴드를 확인하는데 책상 서랍에서 연두색 노트가 삐져나와 있다. 열린 페이지 첫 줄. '그날의 너에게—' 보건선생님이 서랍을 닫는다.*

---

### `hidden_nurse_d2_7`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_choice2`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *서랍을 닫으며* 그건 안 봤지? ...됐어. 서류 얘기하자.

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
**보건선생님**: *가볍게 웃으며* 비밀. 이 정도면 충분하지?

---

### `hidden_nurse_d2_8`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_9`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 자, 다 됐어. 오늘은 물 닿지 않게 하고.

---

### `hidden_nurse_d2_9`
- 배경: `nurse_room.png`
- 플래그: `nurse_day2`
- 다음: `after2_choice`

- 캐릭터: `nurse_normal.png`
**{name}**: *밴드가 들뜨거나 피가 배면 다시 오라는 안내를 듣고 보건실을 나섰다.*

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
**다인**: *자세를 낮춘다. 공을 든 손에 힘이 들어간다.*

---

### `after2_dain_9_d`
- 배경: `gym.png`
- 다음: `after2_dain_9_e`

- 캐릭터: `dain_active.png`
**다인**: 이번엔 제대로 간다!

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
**{name}**: *점수판은 3:2. 아슬아슬하게 이겼다. 다인이 일어서며 오른쪽 무릎을 한 번 문지른다. 웃고는 있다.*

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
**다인**: *손바닥이 맞닿는다. 다인은 웃다가 조금 늦게 손을 뗀다.*

---

### `after2_dain_skinship_2`
- 배경: `street.png`
- 다음: `after2_dain_skinship_3`

- 캐릭터: `dain_shy.png`
**다인**: ...아, 미안! 경기 끝나면 가끔 이래!

---

### `after2_dain_skinship_3`
- 배경: `street.png`
- 다음: `after2_dain_freetalk`

- 캐릭터: `dain_shy.png`
**{name}**: *다인은 방금 부딪친 손으로 뒷머리를 한 번 쓸어 올린다.*

---

### `after2_dain_freetalk`
- 배경: `store.png`
- 분기:
  - [`chose_dain_lunch`] → `after2_dain_end`
  - [기본] → `after2_dain_end_first`

- 캐릭터: `dain_normal.png`
**다인**: *가게에 들어서자 다인이 떡볶이 컵을 밀어 놓고 젓가락을 든다.* 매운 거 잘 먹는지 오늘 확인한다?

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
**다인**: *젓가락을 멈춘다. 딱 한 박자.*

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
**서연**: *바로 돌아서지 않는다. 클립보드는 문 쪽을 향한 채다. {name}의 발소리가 들리고 나서야 걸음을 옮긴다.*

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
**서연**: *칭찬이라고 말해놓고 바로 서류를 정리한다. 목을 돌리는 순간, 어깨가 살짝 굳는다.*

---

### `after2_seo_choice1`
- 배경: `student_room.png`
- 선택지:
  1. "석양이 예쁜데. 창밖 얘기야." → `after2_seo_sunset_joke` | Seoyeon +5
  2. "목 아파? 쉬면서 해." → `after2_seo_neck_worry` | Seoyeon +3

- 캐릭터: `seyoun_normal.png`
**{name}**: *창밖으로 석양이 들어온다. 서연은 서류 모서리를 맞춘다.*

---

### `after2_seo_sunset_joke`
- 배경: `student_room.png`
- 다음: `after2_seo_sunset_joke_b`

- 캐릭터: `seyoun_shy2.png`
**서연**: *멈칫한다. 안경 뒤 눈가부터 풀린다.*

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
**서연**: *어깨를 돌리다 작게 숨을 들이쉰다.*

---

### `after2_seo_neck_react_b`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_react_c`

- 캐릭터: `seyoun_normal.png`
**{name}**: 잠깐. 이거 아래에 받쳐 봐.

---

### `after2_seo_neck_react_c`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_touch`

- 캐릭터: `seyoun_normal.png`
**{name}**: *한쪽에 쌓인 빈 파일 상자를 서연 앞으로 밀어 놓는다.*

---

### `after2_seo_neck_touch`
- 배경: `student_room.png`
- 호감분기: Seoyeon
  - [30+] → `after2_seo_neck_high`
  - [기본] → `after2_seo_neck_low`
- 다음: `after2_seo_neck_low`

- 캐릭터: `seyoun_normal.png`
**서연**: 내 서류를 받침대로 쓰겠다고?

---

### `after2_seo_neck_high`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_high_b`

- 캐릭터: `seyoun_shy.png`
**{name}**: 안 쓰는 상자잖아. 목은 하나고.

---

### `after2_seo_neck_high_b`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_high_c`

- 캐릭터: `seyoun_normal.png`
**서연**: ...말은 잘하네.

---

### `after2_seo_neck_high_c`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_high_2`

- 캐릭터: `seyoun_shy.png`
**{name}**: *서연이 파일 상자 위에 서류를 올린다. 고개를 숙이는 각도가 조금 줄어든다.*

---

### `after2_seo_neck_high_2`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_high_2_b`

- 캐릭터: `seyoun_shy.png`
**서연**: 오늘만 인정할게.

---

### `after2_seo_neck_high_2_b`
- 배경: `student_room.png`
- 다음: `after2_seo_9`

- 캐릭터: `seyoun_shy.png`
**{name}**: *서연은 파일 상자를 치우지 않는다. 둘은 다시 서류를 날짜순으로 맞춘다.*

---

### `after2_seo_neck_low`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_low_b`

- 캐릭터: `seyoun_normal.png`
**{name}**: *파일 상자를 내밀다 멈춘다.*

---

### `after2_seo_neck_low_b`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_low_c`

- 캐릭터: `seyoun_normal.png`
**{name}**: 싫으면 말고.

---

### `after2_seo_neck_low_c`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_low_2`

- 캐릭터: `seyoun_worried.png`
**서연**: *상자를 받아 서류 옆에 내려놓는다.*

---

### `after2_seo_neck_low_2`
- 배경: `student_room.png`
- 다음: `after2_seo_9`

- 캐릭터: `seyoun_normal.png`
**서연**: 끝나고 써 볼게.

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
**서연**: ...이 시간은 조용해서 좋아.

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
**서연**: 없어. — 여기 있을 때만 빼고.

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
**{name}**: *유나한테는 연락이 없었다. 그래도 도서관으로 향한다. 주머니 속 접힌 쪽지가 걸을 때마다 손등에 닿는다.*

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
**유나**: *책장을 넘기지 않고 손가락만 움직인다.*

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
**유나**: *조금 뜸을 들이다가* ...방과후에 여기 오는 사람.

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
**유나**: *유나가 고개를 들어 {name}을 본다. 이어폰 줄은 손가락 사이에 감긴 채 굳어 있다.*

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
**{name}**: *핸드폰에는 다인의 '기다렸는데?'와 서연의 '일정 바뀌면 말은 해줘'가 늦게 와 있다. 유나와 나란히 앉아 있던 자리에는 이어폰 한쪽이 놓여 있다.*

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
**유나**: *먼저 빼지 않는다. 3초쯤 지나서야 눈을 내린다.*

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
**서연**: 쉽게 말하네

---

### `night2_reply_seo_3`
- 배경: `room_my.png`
- 다음: `night2_reply_seo_4`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: 쉬운 말인데

---

### `night2_reply_seo_4`
- 배경: `room_my.png`
- 다음: `night2_reply_seo_5`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 점심에 옥상 열어둘게. 늦지 마

---

### `night2_reply_seo_5`
- 배경: `room_my.png`
- 호감분기: Seoyeon
  - [30+] → `night2_reply_seo_react_high`
  - [기본] → `night2_reply_seo_react_default`
- 다음: `night2_reply_seo_react_default`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: *서연은 거기서 메시지를 끝냈다.*

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
**{name}**: *답장창이 한동안 비어 있다. 그러다 새 말풍선이 올라온다.*

---

### `night2_reply_yuna_4`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_5`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 아까 재생목록. 세 번째 곡도 들어봐

---

### `night2_reply_yuna_5`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_6`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *유나가 공유한 재생목록을 다시 연다. 세 번째 곡은 아까 함께 들은 곡보다 템포가 조금 빠르다.*

---

### `night2_reply_yuna_6`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_6_b`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 끝까지 들어봐

---

### `night2_reply_yuna_6_b`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_6_c`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *이어폰을 끼고 재생 버튼을 누른다. 피아노 뒤로 낮은 드럼 소리가 겹친다.*

---

### `night2_reply_yuna_6_c`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_7`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *곡이 끝난 뒤에도 재생 화면을 잠시 닫지 못한다.*

---

### `night2_reply_yuna_7`
- 배경: `room_my.png`
- 호감분기: Yuna
  - [30+] → `night2_reply_yuna_react_high`
  - [기본] → `night2_reply_yuna_react_default`
- 다음: `night2_reply_yuna_react_default`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *재생목록 제목 아래에 유나가 남긴 짧은 메모가 보인다. '세 번째가 제일 덜 조용해.'*

---

### `night2_reply_yuna_react_high`
- 배경: `room_my.png`
- 플래그: `night2_replied_yuna`
- 스탯: Yuna +2
- 다음: `night2_hidden_check`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: ...다 들었으면 내일 감상 알려줘. 별관 올래?

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
**{name}**: *학교 상담 시스템에 알림이 떴다. '전학생 적응 상담 완료. 추가 도움이 필요하면 담임 상담 시간이나 위클래스 예약을 이용할 것.'*

---

### `night2_hidden_homeroom_2`
- 배경: `room_my.png`
- 다음: `night2_hidden_homeroom_3`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *담임 이름 아래에 상담 가능 시간이 함께 적혀 있다.*

---

### `night2_hidden_homeroom_3`
- 배경: `room_my.png`
- 분기:
  - [`nurse_day2`] → `night2_hidden_nurse_1`
  - [기본] → `night2_end_1`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *예약 버튼을 확인하고 알림을 닫는다.*

---

### `night2_hidden_nurse_1`
- 배경: `room_my.png`
- 다음: `night2_hidden_nurse_2`

- 캐릭터: `nurse_normal.png` @ 0.35
**{name}**: *건강 관리 앱 알림. '보건실 기록: 전학생 — 팔꿈치 찰과상 (경미). 내일 아침까지 밴드를 건조하게 유지하고, 들뜨거나 피가 배면 보건실에서 교체.'*

---

### `night2_hidden_nurse_2`
- 배경: `room_my.png`
- 다음: `night2_end_1`

- 캐릭터: `nurse_normal.png` @ 0.35
**{name}**: *팔꿈치를 한 번 굽혀 본다. 밴드 모서리는 아직 단단히 붙어 있다.*

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
**{name}**: *메모장에는 보내지 않은 문장이 줄줄이 남아 있다. '선생님, 소정이 책상에—' '오늘도—' 전부 첫 줄에서 끊겼다. 마지막 수정 시간은 새벽 2시 17분이다.*

---

### `night2_flashback_5`
- 배경: `room_my.png`
- 다음: `night2_flashback_7`

- 캐릭터: `없음`
**{name}**: *38번째 메모 아래에는 아무것도 없다. 39번째 제목만 비어 있다. 다음 날, 소정이 자리는 끝까지 비어 있었다. 담임은 소정이가 전학 갔다고만 말했다.*

---

### `night2_flashback_7`
- 배경: `room_my.png`
- 다음: `night2_flashback_8`

- 캐릭터: `없음`
**{name}**: *갤러리를 닫았다. 사진 삭제 버튼 위에 손가락이 멈춘다. 결국 화면을 끈다.*

---

### `night2_flashback_8`
- 배경: `room_my.png`
- 다음: `night2_flashback_9`

- 캐릭터: `없음`
**{name}**: *핸드폰을 다시 든다. 방금 답장을 보낸 대화방 아래로, 아직 답하지 않은 두 이름이 나란히 남아 있다.*

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
**{name}**: *답장을 보낸 대화방을 열었다 닫는다. 나머지 두 대화방에는 아직 보낼 말을 쓰지 못했다.*

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
**{name}**: *민수의 메시지 위로 읽지 않은 알림 두 개가 쌓여 있다.*

---

### `night2_end_3_b`
- 배경: `room_my.png`
- 다음: `night2_end_4_b`

- 캐릭터: `없음`
**{name}**: *화면이 꺼진 뒤에도 휴대폰을 쥔 손은 그대로다.*

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
**서연**: *평소와 달리 교문 앞에서 기다린다.*

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
**서연**: *먼저 걷기 시작한다. 몇 걸음 뒤, {name}이 따라오는지 확인하고 보폭을 늦춘다.*

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
**{name}**: *목소리가 사무적이다. 교문을 지나가는 서연의 뒷모습이 멀어진다.*

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
**{name}**: *유나와 나란히 걷는다. 빵 봉지를 접는 소리와 두 사람의 발소리만 이어진다.*

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
**{name}**: *다인의 팔이 내 팔에 단단히 감긴다. 끌려가듯 몇 걸음 걷다가, 나란히 보폭을 맞춘다.*

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
**{name}**: *교문을 넘어가는 순간 다인이 착지하면서 작게 "읏" 소리를 냈다. 그런데 돌아보면 아무렇지 않게 웃고 있다. — 잘못 들은 건가.*

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
**유나**: *창밖을 보던 유나가 힐끗 {name} 쪽을 본다. 곧 다시 창밖으로 눈을 돌린다.*

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
**서연**: *교실 문 앞에 선다.*

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
**{name}**: *뒤집힌 원고지 아래로 빨간 펜 자국이 비친다. '보류'라는 두 글자. 내가 본 순간, 담임의 손이 종이를 더 세게 눌렀다.*

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
**{name}**: *원고지다. 담임이 종이 끝을 손바닥으로 덮는다.*

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
**담임선생님**: *입을 다문다. 그리고 짧게 한숨을 쉰다.*

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
**담임선생님**: *원고지를 만지작거리다가 의자에 기대앉는다.*

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
**담임선생님**: *원고지를 내려놓는다. 한 박자 늦게.*

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
**{name}**: *원고지 가장자리마다 손때가 묻어 있다. 담임은 빈 줄 위에 손을 올린다.*

---

### `hidden_homeroom_d3_reveal_4_c`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_4_d`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *표정을 바로잡으며* 개인적으로 쓰던 거야. 수업이랑은 상관없고, 억지로 읽을 필요도 없어.

---

### `hidden_homeroom_d3_reveal_4_d`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_4_e`

- 캐릭터: `teacher_normal.png`
**{name}**: 읽으면 안 돼요?

---

### `hidden_homeroom_d3_reveal_4_e`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_4_f`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 읽는 건 괜찮아. 다만 너한테만 몰래 건네진 않을게. 문예부 합평에 낼 준비부터 해볼게.

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
**{name}**: 그때 공개되면 읽어보고 싶어요.

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
**담임선생님**: 이번 주에 국어과 선생님들한테도 보여주려고 해. 계속 숨기면 영영 못 끝낼 것 같아서.

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
**담임선생님**: ...그럼 7년 만에 다른 사람들 앞에 내놓는 거네.

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
**담임선생님**: *작게 웃으며* 네가 먼저 물어보지 않았으면 또 덮어뒀을지도 모르겠다. 고맙다.

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
**담임선생님**: 조용하니까. 그래도 다음부터 원고 얘기는 문예부 시간에만 하자.

---

### `hidden_homeroom_d3_reveal_6_g`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d3_end`

- 캐릭터: `teacher_smile.png`
**{name}**: *빈 교실의 시계 초침 소리가 크다. 지운 흔적이 겹친 문장 위에서 눈길이 떨어지지 않는다.*

---

### `hidden_homeroom_d3_hide_1`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_end`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 그래, 지금은 덮어두자. 공개할 준비가 되면 문예부에 먼저 말할게.

---

### `hidden_homeroom_d3_end`
- 배경: `room_school.png`
- 플래그: `homeroom_day3`, `homeroom_route_unlocked`
- 다음: `hidden_homeroom_d3_freetalk`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *원고를 덮고 교탁 옆 창문을 연다. 복도 소음이 잠깐 들어왔다가 잦아든다.*

---

### `hidden_homeroom_d3_freetalk`
- 배경: `room_school.png`
- 배경톤: `empty`
- 타입: `free_talk`
- 다음: `hidden_nurse_d3_check`
- 컨텍스트: "Day 3 아침. 빈 교실에서 담임선생님의 개인 소설 원고를 발견했다. 담임은 학생에게 비밀이나 감상을 요구하지 않고, 문예부 공개 합평에 낼지 고민한다. 톤: 원고 이야기가 나오면 농담이 줄고 문장이 짧아진다."
- 성격: "담임선생님은 소설가 지망생이었다. 교사가 된 뒤에도 쓰기를 놓지 못했지만, 학생과의 관계에서는 수업·평가와 개인 창작을 분리하려 한다."

- 캐릭터: `teacher_normal.png`
**담임선생님**: *원고지를 파일에 넣는다.* 궁금한 건 이해해. 그래도 이 얘기는 문예부 시간에 하자.

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
**보건선생님**: *말을 멈춘다. 눈이 부드러워진다.*

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
**{name}**: *'비슷하다'는 말 뒤로 보건선생님의 손이 물컵 위에서 멈칫한다.*

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
**보건선생님**: *말이 잠시 끊긴다.*

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
**{name}**: 선생님도 여러 사람 사이에서 헷갈린 적 있어요?

---

### `hidden_nurse_d3_5_o`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_p`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *멈칫한다. 눈길이 창밖으로 간다.*

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
**보건선생님**: ...그만뒀다기보다. 나왔지. *살짝 웃으며* 멋있는 이유 같은 건 없어.

---

### `hidden_nurse_d3_6_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6_e`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *청진기를 만지는 손이 노트 서랍 쪽으로 가려다 멈춘다.*

---

### `hidden_nurse_d3_6_e`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6_f`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...있었지. 못 살린 환자 한 명. *눈길이 멀어진다.* 열일곱 살이었어. 그 일 있고 여기 온 거야.

---

### `hidden_nurse_d3_6_f`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_7`

- 캐릭터: `nurse_normal.png`
**{name}**: *어제 본 연두색 노트가 떠오른다. 첫 장에서 멈춰 있던 편지.*

---

### `hidden_nurse_d3_7`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_7_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그래서 여기 왔어. 학교에서는 — 한 명 한 명 얼굴을 제대로 보잖아.

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
**보건선생님**: 이 정도로 버거우면 참지 말고 말해. 필요하면 상담실도 연결해줄게.

---

### `hidden_nurse_d3_8_e`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_f`

- 캐릭터: `nurse_normal.png`
**{name}**: *상담실 번호가 적힌 안내 카드를 접어 주머니에 넣는다.*

---

### `hidden_nurse_d3_8_f`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_g`

- 캐릭터: `없음`
**{name}**: *자리에서 일어났다가 문 앞에서 멈춘다. 뒤에서 서랍이 열리는 소리가 난다. 연두색 노트 모서리가 떠오른다.*

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
**{name}**: *문손잡이에서 손을 떼고 다시 돌아선다. 서랍 안에서 종이가 접히는 소리가 난다.*

---

### `hidden_nurse_d3_choice2`
- 배경: `nurse_room.png`
- 선택지:
  1. "그 일을 겪고 병원을 나오신 거예요?" → `hidden_nurse_d3_choice2_a` | Nurse +12
  2. "그때 이야기, 더 해도 괜찮으세요?" → `hidden_nurse_d3_choice2_b` | Nurse +5

- 캐릭터: `nurse_normal.png`
**보건선생님**: *'한 명'에서 말을 멈췄다. 종이컵 가장자리가 손에 눌려 찌그러진다.*

---

### `hidden_nurse_d3_choice2_a`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 응. 더 버티면 다른 환자 앞에서도 손이 흔들릴 것 같았어.

---

### `hidden_nurse_d3_choice2_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...응. 내가 감당할 수 있는 만큼만 말할게.

---

### `hidden_nurse_d3_9`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 찾아오는 건 괜찮아. 다만 혼자 다 해결해 주겠다는 약속은 못 해.

---

### `hidden_nurse_d3_9_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9_c`

- 캐릭터: `nurse_normal.png`
**{name}**: *종이컵을 내려놓고 고개를 끄덕인다.*

---

### `hidden_nurse_d3_9_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 네가 더 버거워지면 담임이나 상담실하고 같이 움직일 거야.

---

### `hidden_nurse_d3_9_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9_e`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그 전에 누구에게 어디까지 말할지는 너랑 먼저 정하고.

---

### `hidden_nurse_d3_9_e`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9_f`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 상담 예약표를 책상 앞으로 밀어 둔다.*

---

### `hidden_nurse_d3_9_f`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_11`

- 캐릭터: `nurse_normal.png`
**{name}**: *예약표에는 보건실과 상담실 시간이 나란히 적혀 있다. 빈칸 하나에 동그라미를 친다.*

---

### `hidden_nurse_d3_11`
- 배경: `nurse_room.png`
- 플래그: `nurse_day3`, `nurse_route_unlocked`
- 다음: `hidden_nurse_d3_freetalk`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 다음 수업 늦겠다. 오늘 한 얘기는 여기까지 정리하고 가자.

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
**다인**: *손가락으로 책상 모서리를 평소보다 빠르게 두드린다. 의자 다리도 바닥을 짧게 긁는다.*

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
**{name}**: *주말 일정이 겹친다. 캘린더 칸이 세 개로 나뉘어 있다.*

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
**{name}**: *점심시간. 도시락을 펼치자 세 명이 한자리에 모인다. 서연은 옆자리에 앉는다. 다인은 맞은편에 털썩 자리를 잡는다. 구석에서 빵을 먹던 유나도 슬쩍 끼어든다.*

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
**{name}**: *유나가 조용히 젓가락을 든다. 아까보다 빠르다.*

---

### `lunch3_meal_10`
- 배경: `room_school.png`
- 다음: `lunch3_meal_10_b`

- 캐릭터: `yuna_bored.png`
**{name}**: *마지막 계란말이 하나. 다 같이 먹자고 했다. 젓가락 세 쌍이 멈춘다.*

---

### `lunch3_meal_10_b`
- 배경: `room_school.png`
- 분기:
  - [`accepted_seoyeon_date`] → `lunch3_meal_10_c`
  - [`accepted_dain_date`] → `lunch3_meal_10_d`
  - [`accepted_yuna_date`] → `lunch3_meal_10_e`
  - [기본] → `lunch3_meal_11`

- 캐릭터: `yuna_bored.png`
**{name}**: *아무도 자리를 뜨지 않는다. 마지막 반찬 하나만 도시락 가운데 남아 있다.*

---

### `lunch3_meal_10_c`
- 배경: `room_school.png`
- 다음: `lunch3_meal_11`

- 캐릭터: `seyoun_normal.png`
**서연**: *젓가락이 잠깐 멈춘다. 계란말이는 그대로 남아 있다.*

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
**{name}**: *서연이 손을 거두다 젓가락을 떨어뜨린다. 바로 주워 들지만, 손끝이 조금 떨린다.*

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
**{name}**: *유나는 쪽지를 건넨 뒤 손을 조금 늦게 거둔다.*

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
**{name}**: *유나는 눈 한 번 깜빡이지 않는다. 손가락이 컵 옆면을 한 번 두드린다.*

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
**{name}**: *젓가락 부딪히는 소리까지 멎는다.*

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
**{name}**: *세 쌍의 젓가락이 멈췄다. 급식실 소음이 갑자기 먼 데서 들린다. 옆 테이블에서 민수가 이쪽을 보다가 고개를 절레절레 흔든다.*

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
  1. "미안. 다들 좋아서, 거절을 못 했어." → `lunch3_expose_honest_1` | Seoyeon -5, Yuna -5, Dain -5
  2. "시간대가 다르니까 괜찮지 않을까..." → `lunch3_expose_excuse_1` | Seoyeon -8, Yuna -8, Dain -8
  3. "자리에서 물러난다" → `lunch3_expose_run_1` | Seoyeon -10, Yuna -10, Dain -10

- 캐릭터: `seyoun_angry.png`
**{name}**: *뭐라고 해야 하지...*

---

### `lunch3_expose_honest_1`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_2`

- 캐릭터: `seyoun_angry.png`
**{name}**: 미안. 다들 좋아서, 거절을 못 했어.

---

### `lunch3_expose_honest_2`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_3`

- 캐릭터: `seyoun_sad.png`
**서연**: ...거절을 못 해서. 그 말이 제일 잔인해, {name}.

---

### `lunch3_expose_honest_3`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_4`

- 캐릭터: `seyoun_sad.png`
**서연**: 거절 못 해서 웃어주는 건, 받는 사람한텐 희망처럼 보이거든.

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
**{name}**: *다인이와 약속이 있다. 체육관으로 간다.*

---

### `after3_auto_yuna`
- 배경: `school_hallway.png`
- 플래그: `route_yuna`
- 다음: `after3_reject_for_yuna_1`

- 캐릭터: `없음`
**{name}**: *유나와 약속이 있다. 도서관 별관으로 간다.*

---

### `after3_auto_seo`
- 배경: `school_hallway.png`
- 플래그: `route_seoyeon`
- 다음: `after3_reject_for_seo_1`

- 캐릭터: `없음`
**{name}**: *서연이와 약속이 있다. 학생회실로 간다.*

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
**{name}**: *도서관 옆을 지나간다. 유나의 자리가 비어 있다. 쪽지가 하나 남아 있다. 연보라색 잉크. — '2시간 기다렸어. 먼저 갈게.'*

---

### `after3_reject_for_seo_3b`
- 배경: `library_old.png`
- 다음: `after3_reject_for_seo_3c`

- 캐릭터: `없음`
**{name}**: *유나의 책이 없다. 늘 놓여 있던 1권도, 빌려주겠다던 2권도 없다. 유나가 손으로 덮어두던 오래된 책갈피까지 사라졌다.*

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
**서연**: *눈을 내리며* ...이런 거 보여주기 싫었는데.

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
  1. "물티슈 줄까." → `after3_seo_pity_trap_1` | Seoyeon -18 | 플래그: `seo_pity_broken`
  2. "...방금? 아무것도 못 봤는데. 펜 떨어뜨려서 주우러 들어왔어." → `after3_seo_correct_1` | Seoyeon +18

- 캐릭터: `seyoun_sad.png`
**서연**: 다음에 내가 부탁하면 무조건 들어줘야 해. — 대가야.

---

### `after3_seo_pity_trap_1`
- 배경: `student_room.png`
- 다음: `after3_seo_pity_trap_2`

- 캐릭터: `seyoun_sad.png`
**서연**: *고개를 든다. 손등으로 화장 자국을 문지른다.*

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
**{name}**: *허리를 굽혀 펜을 줍는 척한다. 책상 밑을 더듬는다. 일부러 늦게. — 눈을 안 마주친다. 눈이 마주치는 순간 거짓말이 들통난다.*

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
**{name}**: *말이 끊기지 않는다. 서연은 다시 안경을 고쳐 쓰고, 나는 끝까지 책상 아래를 보는 척한다.*

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
**{name}**: *발길이 체육관 쪽으로 간다.*

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
**유나**: *노트를 가방에 쑤셔 넣는다. 평소보다 동작이 빠르다.*

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
**유나**: 소설 안에서까지 들키면 덮을 곳이 없어.

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
**유나**: *노트를 끌어안은 손가락이 — 1초쯤, 아주 살짝 풀린다.*

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
**{name}**: *종이가 손바닥에 내려앉는다. 유나는 노트 표지에서 눈을 떼지 않는다.*

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
**{name}**: *복도로 돌아왔다. 바닥에 유나가 두고 간 물 자국이 남아 있다.*

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
**다인**: *말을 마친 뒤에야 다인이 크게 웃는다.*

---

### `after3_dain_choice`
- 배경: `gym.png`
- 선택지:
  1. "...괜찮아? 무리하지 마. 오늘은 쉬는 게 어때." → `after3_dain_pity_trap_1` | Dain -20 | 플래그: `pitied_dain`
  2. "그럼 여기 있을게. 말하고 싶을 때 말해." → `after3_dain_correct_1` | Dain +18

- 캐릭터: `dain_sad.png`
**다인**: *벤치에 앉는다. 다인은 무릎 한곳만 오래 문지른다.*

---

### `after3_dain_pity_trap_1`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_2`

- 캐릭터: `dain_sad.png`
**다인**: *무릎을 문지르던 손이 멈춘다. 고개를 든다.*

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
**{name}**: *다인이 일어선다. 무릎이 살짝 떨린다. 가방을 든다.*

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
**다인**: 보건실에서 보는 얼굴로.

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
**다인**: ...몰라. 근데 잠깐만 여기 있어. 지금 혼자 있기는 좀 싫어.

---

### `after3_dain_correct_7`
- 배경: `gym.png`
- 다음: `after3_dain_correct_8`

- 캐릭터: `dain_sad.png`
**다인**: *벤치 안쪽으로 자리를 내준다. 배구공은 발끝으로 밀어 코트 밖에 둔다.*

---

### `after3_dain_correct_8`
- 배경: `gym.png`
- 다음: `after3_dain_correct_9`

- 캐릭터: `dain_laugh.png`
**다인**: ...그냥 얘기나 하자.

---

### `after3_dain_correct_9`
- 배경: `gym.png`
- 다음: `after3_dain_correct_10`

- 캐릭터: `없음`
**{name}**: *옆에 앉는다. 공이 코트 경계선에서 멈춘다. 다인은 한동안 운동화 끈만 다시 묶는다.*

---

### `after3_dain_correct_10`
- 배경: `gym.png`
- 다음: `after3_dain_correct_11`

- 캐릭터: `dain_laugh.png`
**다인**: 나 원래 이런 얘기 잘 안 하거든. ...뭐부터 말해야 하지.

---

### `after3_dain_correct_11`
- 배경: `gym.png`
- 다음: `after3_dain_correct_12`

- 캐릭터: `dain_sweat.png`
**다인**: *오른쪽 다리를 펴 보려다 멈추고 다시 굽힌다. 손은 무릎 위에 그대로 둔다.*

---

### `after3_dain_correct_12`
- 배경: `gym.png`
- 다음: `after3_dain_dilemma_tell`

- 캐릭터: `dain_sad.png`
**{name}**: 무릎 얘기부터 하자.

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
**{name}**: *다인이 입을 다문다. 방금까지 높던 목소리가 뚝 끊긴다.*

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
**{name}**: 물어보면 괜찮다고만 할 거잖아.

---

### `after3_dain_choice1_react`
- 배경: `gym.png`
- 다음: `after3_dain_choice1_react2`

- 캐릭터: `dain_shy.png`
**다인**: *멈췄다가 작게 웃는다. 손등으로 눈가를 한 번 문지른다.*

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
**서연**: *클립보드를 내린다. 시선을 피하지 않은 채 대답을 기다린다.*

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
**서연**: 점심때 미안하다고 했지. 그런데 누구한테, 뭘 미안해하는지는 아직 못 들었어.

---

### `after3_confront_admit_3`
- 배경: `school_hallway.png`
- 다음: `after3_confront_admit_4`

- 캐릭터: `seyoun_cry.png`
**서연**: *도시락 가방을 집어든다. 손이 떨린다.*

---

### `after3_confront_admit_4`
- 배경: `school_hallway.png`
- 다음: `after3_confront_admit_4_b`

- 캐릭터: `seyoun_sad.png`
**서연**: 싫다는 말 듣기 싫어서 결정을 우리한테 미룬 거잖아. 그건 솔직한 게 아니야.

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
**{name}**: *등은 곧고, 주먹을 쥔 손등이 하얗다.*

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
**서연**: *멈칫한다. 눈이 흔들린다.*

---

### `after3_confront_lie_b`
- 배경: `school_hallway.png`
- 다음: `after3_confront_lie`

- 캐릭터: `seyoun_sad.png`
**서연**: *멈칫한다. 눈이 흔들린다.*

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
**{name}**: *등은 곧고, 주먹을 쥔 손등이 하얗다.*

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
**{name}**: *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.*

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
**민수**: *한숨을 쉰다. 접고 있던 빨대 포장지를 테이블 위에 내려놓는다.*

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
**하은**: 학생회실 뒤 화장실에서 잠깐 봤어요. 저한테는 괜찮다고 했는데... 안 괜찮아 보였어요.

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
**{name}**: *하은은 빈 복도를 확인한 뒤 목소리를 더 낮춘다.*

---

### `haeun_warn_5b`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_5c`

- 캐릭터: `haeun_normal.png`
**하은**: 말 걸지 말라고 했는데, 세면대 앞에서 한참 나오지 않았어요.

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
**하은**: 제가 따라가면 또 괜찮다고 할 거예요. {name} 씨 말은 들을지도 몰라요.

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
**하은**: 참견인 거 알아요. 그래도 오늘만은 모른 척하지 말아 주세요.

---

### `haeun_warn_7_b`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_7_c`

- 캐릭터: `haeun_worried.png`
**하은**: *말을 멈춘다. 시선이 잠깐 교무실 쪽으로 흔들린다.*

---

### `haeun_warn_7_c`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_7_d`

- 캐릭터: `haeun_normal.png`
**하은**: 설득하라는 건 아니에요. 그냥 혼자 두지만 말아 주세요.

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
**{name}**: *하은이 떠난 뒤 학생회실 문을 두드린다. 대답은 없지만 안쪽에서 의자 밀리는 소리가 난다.*

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
**{name}**: *방에 돌아왔다. 가방을 내려놓았다.*

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
**{name}**: *메모장 마지막 줄에 커서가 깜빡인다. 파일명 옆에 저장 표시가 남아 있다.*

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
**{name}**: *꿈을 꿨다. 누군가와 나란히 걷고 있었다. 발소리만 같은 박자로 이어졌다.*

---

### `night3_dream_2_b`
- 배경: `school.png`
- 다음: `night3_faithful_reflect_1`

- 캐릭터: `없음`
**{name}**: *메모장을 닫았다. 내일 보낼 문장은 아직 없다.*

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
**{name}**: *민수가 말했다. '거절도 네가 해야 할 일이야.' 갤러리 속 소정이는 여전히 웃고 있다. 메모장 38번은 아직 보내지 못했다. 보내기 버튼만 파랗다.*

---

### `night3_faithful_reflect_4`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_4_b`

- 캐릭터: `없음`
**{name}**: *갤러리가 비어 있다. 소정이 사진이 있던 자리만 하얗게 켜져 있다.*

---

### `night3_faithful_reflect_4_b`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_4_c`

- 캐릭터: `없음`
**{name}**: *빈 앨범 썸네일을 한참 바라본다.*

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
**{name}**: *알람이 울리기 전에 눈을 떴다.*

---

### `night3_dream_seo_bonus`
- 배경: `room_my.png`
- 스탯: Seoyeon +2
- 다음: `night3_end`

- 캐릭터: `없음`
**{name}**: *눈을 감자, 옥상 난간이 먼저 떠오른다.*

---

### `night3_dream_yuna_bonus`
- 배경: `room_my.png`
- 스탯: Yuna +6
- 다음: `night3_end`

- 캐릭터: `없음`
**{name}**: *눈을 감자, 도서관 별관 창문이 먼저 떠오른다.*

---

### `night3_dream_dain_bonus`
- 배경: `room_my.png`
- 스탯: Dain +3
- 다음: `night3_end`

- 캐릭터: `없음`
**{name}**: *눈을 감자, 체육관 바닥에 공 튀는 소리가 떠오른다.*

---

### `night3_cheat_msg_1`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_2`

- 캐릭터: `없음`
**{name}**: *방에 돌아왔다. 핸드폰을 본다.*

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
**유나**: *내일은 누구한테 갈 건지 정해*

---

### `night3_cheat_msg_6`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_dain_1`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: ...피하지 마. 그것만

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
- 배경: `room_my.png`
- BGM: `night2.mp3`
- 다음: `night3_nightmare_2_b`

- 캐릭터: `없음`
**{name}**: *불을 끄고 누웠지만 잠이 오지 않는다. 휴대폰 화면만 손바닥 위에서 밝다.*

---

### `night3_nightmare_2_b`
- 배경: `room_my.png`
- 다음: `night3_nightmare_3`

- 캐릭터: `seyoun_sad.png`
**{name}**: *서연의 대화방을 연다. 마지막 말은 '부탁이야'에서 멈춰 있다.*

---

### `night3_nightmare_3`
- 배경: `room_my.png`
- 다음: `night3_nightmare_3_b`

- 캐릭터: `seyoun_sad.png`
**서연**: 지금 답하라는 건 아니야. 대신 내일은 피해 가지 마.

---

### `night3_nightmare_3_b`
- 배경: `room_my.png`
- 다음: `night3_nightmare_4`

- 캐릭터: `yuna_sad.png`
**{name}**: *유나의 대화방에는 세 줄 아래 읽음 표시만 붙어 있다.*

---

### `night3_nightmare_4`
- 배경: `room_my.png`
- 다음: `night3_nightmare_4_b`

- 캐릭터: `yuna_sad.png`
**{name}**: *마지막 문장은 짧다. '피하지 마. 그것만.'*

---

### `night3_nightmare_4_b`
- 배경: `room_my.png`
- 다음: `night3_nightmare_5`

- 캐릭터: `dain_sad.png`
**{name}**: *다인의 대화방을 연다. 웃음 표시가 붙은 문장은 하나뿐이다.*

---

### `night3_nightmare_5`
- 배경: `room_my.png`
- 다음: `night3_nightmare_6`

- 캐릭터: `dain_sad.png`
**{name}**: *'농담이었으면 좋겠다.' 그 뒤로 새 메시지는 없다.*

---

### `night3_nightmare_6`
- 배경: `room_my.png`
- 다음: `night3_nightmare_choice`

- 캐릭터: `없음`
**{name}**: *세 대화방을 차례로 열었다 닫는다. 입력창마다 다른 첫 문자를 썼다가 지운다.*

---

### `night3_nightmare_choice`
- 배경: `room_my.png`
- 선택지:
  1. "서연에게 먼저 말하기로 한다" → `night3_nightmare_seo` | 플래그: `nightmare_chose_seoyeon`
  2. "유나에게 먼저 말하기로 한다" → `night3_nightmare_yuna` | 플래그: `nightmare_chose_yuna`
  3. "다인에게 먼저 말하기로 한다" → `night3_nightmare_dain` | 플래그: `nightmare_chose_dain`

- 캐릭터: `없음`
**{name}**: *내일 누구에게 먼저 솔직하게 말할까.*

---

### `night3_nightmare_seo`
- 배경: `room_my.png`
- 다음: `night3_nightmare_end`

- 캐릭터: `없음`
**{name}**: *서연의 입력창에 쓴다. '내일 얼굴 보고 말할게.' 보내기 직전, 손가락을 멈춘다.*

---

### `night3_nightmare_yuna`
- 배경: `room_my.png`
- 다음: `night3_nightmare_end`

- 캐릭터: `없음`
**{name}**: *유나의 입력창에 쓴다. '내일 피하지 않고 말할게.' 보내기 직전, 손가락을 멈춘다.*

---

### `night3_nightmare_dain`
- 배경: `room_my.png`
- 다음: `night3_nightmare_end`

- 캐릭터: `없음`
**{name}**: *다인의 입력창에 쓴다. '기다리게 해서 미안해. 내일 말할게.' 보내기 직전, 손가락을 멈춘다.*

---

### `night3_nightmare_end`
- 배경: `room_my.png`
- 다음: `night3_nightmare_end_3`

- 캐릭터: `없음`
**{name}**: *입력창 하나에 문장이 남고, 나머지 두 대화방은 닫힌다. 아직 보내지는 않았다.*

---

### `night3_nightmare_end_3`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_2`

- 캐릭터: `없음`
**{name}**: *새벽 3시. 여전히 깨어 있다. 메시지 창을 닫고 갤러리를 연다. 소정이의 사진에서 손가락이 멈춘다.*

---

### `night3_cheat_reflect_2`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_3_b`

- 캐릭터: `없음`
**{name}**: *단체 사진 속 소정이는 카메라를 보고 있다. 그 옆의 나는 다른 곳을 보고 있다.*

---

### `night3_cheat_reflect_3_b`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_3_c`

- 캐릭터: `없음`
**{name}**: *사진을 닫고 메시지 목록으로 돌아온다. 조금 전 쓴 문장 하나가 임시 저장돼 있다.*

---

### `night3_cheat_reflect_3_c`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_3_d`

- 캐릭터: `없음`
**{name}**: *메시지 목록을 훑는다. 세 이름 옆에 서로 다른 마지막 문장이 남아 있다.*

---

### `night3_cheat_reflect_3_d`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_3_e`

- 캐릭터: `없음`
**{name}**: *민수와의 대화방에는 '미룬다고 없어지는 일 아님'이라는 답장이 와 있다.*

---

### `night3_cheat_reflect_3_e`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_5`

- 캐릭터: `없음`
**{name}**: *세 대화방을 위에서부터 다시 읽는다. 어느 쪽도 닫지 않는다.*

---

### `night3_cheat_reflect_5`
- 배경: `room_my.png`
- 다음: `night3_nightmare_end_4`

- 캐릭터: `없음`
**{name}**: *보내기 버튼에서 손을 떼고 휴대폰을 뒤집어 놓는다. 알람까지 세 시간 남았다.*

---

### `night3_nightmare_end_4`
- 배경: `room_my.png`
- 다음: `night3_end`

- 캐릭터: `없음`
**{name}**: *알람 이름을 '내일 답하기'로 바꾼다.*

---

### `night3_end`
- 배경: `room_my.png`
- 다음: `morning4_start`

- 캐릭터: `없음`
**{name}**: *방 불을 끈다.*

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
**{name}**: *알람이 울린다. 핸드폰 화면에 서연의 메시지가 떠 있다.*

---

### `morning4_nightmare_yuna`
- 배경: `room_my.png`
- 다음: `morning4_nightmare_after`

- 캐릭터: `없음`
**{name}**: *알람이 울린다. 핸드폰 화면에 유나의 메시지가 떠 있다.*

---

### `morning4_nightmare_dain`
- 배경: `room_my.png`
- 다음: `morning4_nightmare_after`

- 캐릭터: `없음`
**{name}**: *알람이 울린다. 핸드폰 화면에 다인의 메시지가 떠 있다.*

---

### `morning4_nightmare_after`
- 배경: `room_my.png`
- 다음: `minsu_cheer_1`

- 캐릭터: `없음`
**{name}**: *알림을 다시 확인한다.*

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
**{name}**: *핸드폰 캘린더를 본다. 오늘 약속은 하나뿐이다.*

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
**{name}**: *메시지는 거기서 끝나 있다.*

---

### `morning4_seo_msg_1_c`
- 배경: `room_my.png`
- 다음: `morning4_hidden_check`

- 캐릭터: `seyoun_pout.png` @ 0.35
**{name}**: *분수대 앞에 선다. 시계가 9시 58분을 가리킨다.*

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
**{name}**: *메시지는 짧다. 오늘 약속은 하나뿐이다.*

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
**담임선생님**: 문예부 합평이 있어서 왔어. 원고도 같이 가져왔고.

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
**{name}**: 주말에도 합평해요?

---

### `hidden_homeroom_d4_3_e`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 신청한 애들이 오늘밖에 시간이 안 된다네. 지도교사는 따라와야지.

---

### `hidden_homeroom_d4_4`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_4_b`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임은 종이봉투를 손에 들고 있다.*

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
**{name}**: *말이 이어지지 않는다.*

---

### `hidden_homeroom_d4_5`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_5_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 문예부 애들은 근처 카페에 먼저 가 있어. 너도 합평 구경할래?

---

### `hidden_homeroom_d4_5_b`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_5_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 제가 가도 돼요?

---

### `hidden_homeroom_d4_5_c`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_5_d`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 공개 합평이니까 괜찮아. 대신 원고를 읽을지 말지는 네가 정해.

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
  1. "좋아요. 합평회 구경해도 돼요?" → `hidden_homeroom_d4_cafe_1` | Teacher +12
  2. "오늘은 약속이 있어서요." → `hidden_homeroom_d4_decline` | Teacher +5

- 캐릭터: `teacher_normal.png`
**{name}**: *종이봉투 모서리가 컵홀더 아래에 눌려 있다.*

---

### `hidden_homeroom_d4_cafe_1`
- 배경: `cafe.png`
- 배경톤: `warm`
- 플래그: `homeroom_day4_cafe`
- 다음: `hidden_homeroom_d4_cafe_1_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 문예부 애들은 안쪽 테이블에 있어. 단둘이 왔다는 오해는 원고보다 빨리 퍼지거든.

---

### `hidden_homeroom_d4_cafe_1_b`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_1_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 저도 그 말 하려던 참이었어요.

---

### `hidden_homeroom_d4_cafe_1_c`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_1_d`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *커피를 한 모금 마시며* 좋아. 그럼 서로 확인한 걸로 하자.

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
**{name}**: 문예부에는 어느 부분을 보여주실 거예요?

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
**담임선생님**: 우선 앞부분부터. 인물 말투가 아직 제일 걸리거든.

---

### `hidden_homeroom_d4_cafe_2_b`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_2_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 제 말도 합평에 들어가요?

---

### `hidden_homeroom_d4_cafe_2_c`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_2_d`

- 캐릭터: `teacher_smile.png`
**담임선생님**: 이름은 빼고 의견만 모을 거야. 누가 말했는지보다 어디서 막혔는지가 중요하니까.

---

### `hidden_homeroom_d4_cafe_2_d`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_2_e`

- 캐릭터: `teacher_sad.png`
**{name}**: *담임의 가방 안에서 원고 봉투 모서리가 보인다. 접힌 부분이 손때로 거뭇하다.*

---

### `hidden_homeroom_d4_cafe_2_e`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 합평에서 제일 어려운 게 뭔지 알아?

---

### `hidden_homeroom_d4_cafe_3`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_choice`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 칭찬보다 읽다 멈춘 지점을 듣는 거야. 그게 제일 아프고, 제일 쓸모 있어.

---

### `hidden_homeroom_d4_cafe_choice`
- 배경: `cafe.png`
- 배경톤: `warm`
- 선택지:
  1. "결말은 아직 못 정하셨어요?" → `hidden_homeroom_d4_cafe_choice_a` | Teacher +12
  2. "문예부 애들한테도 전부 보여주실 거죠?" → `hidden_homeroom_d4_cafe_choice_b` | Teacher +5

- 캐릭터: `teacher_normal.png`
**담임선생님**: *커피잔을 내려놓는다. 창가 쪽으로 몸이 조금 기운다.*

---

### `hidden_homeroom_d4_cafe_choice_a`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_4`

- 캐릭터: `teacher_shy.png`
**담임선생님**: 아직 결말을 못 정했어. 멋있게 끝내려다 자꾸 망치거든.

---

### `hidden_homeroom_d4_cafe_choice_b`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 당연하지. 오늘 돌릴 합평본이야. 너만 따로 읽는 원고는 없어.

---

### `hidden_homeroom_d4_cafe_4`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_4_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 학생 독자 입장에서 이상한 데만 표시해줄래? 다른 합평본과 같이 볼게.

---

### `hidden_homeroom_d4_cafe_4_b`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5`

- 캐릭터: `teacher_shy.png`
**{name}**: *컵홀더 모서리가 계속 접히고 있다.*

---

### `hidden_homeroom_d4_cafe_5`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5_b`

- 캐릭터: `teacher_normal.png`
**{name}**: 해볼게요.

---

### `hidden_homeroom_d4_cafe_5_b`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5_c`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *피식 웃는다. 컵홀더를 접던 손이 멈춘다.*

---

### `hidden_homeroom_d4_cafe_5_c`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5_d`

- 캐릭터: `teacher_smile.png`
**담임선생님**: 고마워. 이름은 안 적어도 돼. 익명 합평이니까 편하게 표시해.

---

### `hidden_homeroom_d4_cafe_5_d`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5_e`

- 캐릭터: `teacher_normal.png`
**{name}**: 이것도 업무예요?

---

### `hidden_homeroom_d4_cafe_5_e`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5_f`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 오늘은 문예부 지도라고 해두자.

---

### `hidden_homeroom_d4_cafe_5_f`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5_g`

- 캐릭터: `teacher_smile.png`
**{name}**: *안쪽 테이블에서 문예부원이 원고 한 부를 더 가져간다.*

---

### `hidden_homeroom_d4_cafe_5_g`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5_h`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 그리고 원고 얘기는 문예부 시간에만. 수업이나 상담과 섞지 않을 거야.

---

### `hidden_homeroom_d4_cafe_5_h`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_6`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *원고마다 번호를 적고, 마지막 한 부도 안쪽 테이블로 보낸다.*

---

### `hidden_homeroom_d4_cafe_6`
- 배경: `cafe.png`
- 배경톤: `warm`
- 플래그: `homeroom_day4`
- 다음: `hidden_homeroom_d4_cafe_6_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 다음 합평은 학교 도서실에서 하자. 오늘은 장소를 너무 급하게 잡았네.

---

### `hidden_homeroom_d4_cafe_6_b`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_nurse_d4_check`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *문예부원들과 계산을 확인한 뒤 학교 쪽으로 먼저 걸어간다.*

---

### `hidden_homeroom_d4_decline`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_decline_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 그래. 약속이 먼저지. 원고는 학교에서 정식으로 의견 받을게.

---

### `hidden_homeroom_d4_decline_b`
- 배경: `street.png`
- 다음: `hidden_nurse_d4_check`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *문예부 단체 채팅방을 확인하며 학교 안으로 돌아간다.*

---

### `hidden_nurse_d4_morning_1`
- 배경: `nurse_room.png`
- BGM: `morning.mp3`
- 다음: `hidden_nurse_d4_morning_3`

- 캐릭터: `nurse_normal.png`
**{name}**: *학교 행사 준비일 아침. 예약해 둔 상담 시간에 맞춰 보건실 문을 연다. 보건선생님 앞에는 상담 기록지와 안내문이 놓여 있다.*

---

### `hidden_nurse_d4_morning_3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_4`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 시간 맞춰 왔네. 앉아.

---

### `hidden_nurse_d4_morning_4`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *상담 기록지를 펼치고 펜을 든다.*

---

### `hidden_nurse_d4_morning_5`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_6`

- 캐릭터: `nurse_normal.png`
**{name}**: 지난번 상담 마무리하는 거죠?

---

### `hidden_nurse_d4_morning_6`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_7`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 응. 오늘 상태를 확인하고, 다음에 도움받을 곳까지 정해두자.

---

### `hidden_nurse_d4_morning_7`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_8`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *지난 상담에서 적어둔 항목을 하나씩 확인한다.*

---

### `hidden_nurse_d4_morning_8`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_9`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 한 가지 확인할게.

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
**보건선생님**: *학교 상담 안내문을 {name} 쪽으로 돌려 놓는다.*

---

### `hidden_nurse_d4_morning_11`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_choice`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 보건실 말고도 도움을 청할 어른은 정해뒀어?

---

### `hidden_nurse_d4_morning_choice`
- 배경: `nurse_room.png`
- 선택지:
  1. "담임이랑 상담실에도 말해볼게요." → `hidden_nurse_d4_morning_choice_a` | Nurse +10
  2. "아직은 잘 모르겠어요." → `hidden_nurse_d4_morning_choice_b` | Nurse +5

- 캐릭터: `nurse_normal.png`
**{name}**: *안내문에는 담임 상담, 위클래스, 보호자 연락 순서가 적혀 있다.*

---

### `hidden_nurse_d4_morning_choice_a`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_12`

- 캐릭터: `nurse_normal.png`
**{name}**: 담임이랑 상담실에도 말해볼게요.

---

### `hidden_nurse_d4_morning_choice_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_12`

- 캐릭터: `nurse_normal.png`
**{name}**: 아직은 잘 모르겠어요.

---

### `hidden_nurse_d4_morning_12`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_13`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그래. 혼자 버티는 것보다 훨씬 낫다.

---

### `hidden_nurse_d4_morning_13`
- 배경: `nurse_room.png`
- 플래그: `nurse_day4_afterschool`
- 다음: `hidden_nurse_d4_morning_freetalk`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 네 얘기를 함부로 옮기진 않을게. 다만 다칠 위험이 보이면 다른 어른도 바로 부를 거야. 그건 미리 약속하자.

---

### `hidden_nurse_d4_morning_freetalk`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_check`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *상담 기록지를 덮는다.* 오늘 적은 순서 기억하지? 막막하면 첫 번째 사람부터 찾아가.

---

### `hidden_nurse_d4_check`
- 분기:
  - [`nurse_day3`] → `hidden_nurse_d4_1`
  - [기본] → `morning4_end`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `hidden_nurse_d4_1`
- 배경: `nurse_room.png`
- BGM: `morning.mp3`
- 다음: `hidden_nurse_d4_1_b`

- 캐릭터: `nurse_normal.png`
**{name}**: *책상 한쪽에 행사 구급함과 검진 도구가 쌓여 있다. 보건선생님이 라벨을 붙이다 고개를 든다.*

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
**보건선생님**: 학교 행사 응급키트 만들 사람을 구했는데, 진짜 지원할 줄은 몰랐네.

---

### `hidden_nurse_d4_2_b`
- 배경: `nurse_room.png`
- 배경톤: `cold`
- 다음: `hidden_nurse_d4_2_c`

- 캐릭터: `nurse_shy.png`
**{name}**: 오늘은 환자 말고 봉사자네요.

---

### `hidden_nurse_d4_2_c`
- 배경: `nurse_room.png`
- 배경톤: `cold`
- 다음: `hidden_nurse_d4_2_d`

- 캐릭터: `nurse_shy.png`
**보건선생님**: 오늘은 봉사자. 다치면 그때 다시 환자.

---

### `hidden_nurse_d4_2_d`
- 배경: `nurse_room.png`
- 배경톤: `cold`
- 다음: `hidden_nurse_d4_2_e`

- 캐릭터: `nurse_shy.png`
**{name}**: *행사 스태프들이 드나드는 사이, 테이블 위에 거즈와 소독솜을 종류별로 펼친다.*

---

### `hidden_nurse_d4_2_e`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_2_f`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *빈 파우치를 건네며* 거즈 두 장, 소독솜 세 개씩. 개인 정보 있는 서류는 선생님이 할게.

---

### `hidden_nurse_d4_2_f`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_2_g`

- 캐릭터: `nurse_normal.png`
**{name}**: *파우치마다 준비물을 채운다. 보건선생님은 완성된 키트를 다시 확인한다.*

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
**보건선생님**: 사람 이름보다 병상 번호를 먼저 확인하게 되는 순간이 제일 힘들었어. 누굴 보고 있는지도 흐려졌거든.

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
**보건선생님**: 학교에선 한 명씩 볼 시간이 있잖아. 그래도 내가 못 하는 건, 할 수 있는 사람한테 데려가는 게 내 일이야.

---

### `hidden_nurse_d4_4_i`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_j`

- 캐릭터: `nurse_normal.png`
**{name}**: 연결하는 것도 치료예요?

---

### `hidden_nurse_d4_4_j`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_k`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그러니까 여기서 막히면 담임이나 상담실도 찾아가. 혼자 들고 있지 말고.

---

### `hidden_nurse_d4_4_k`
- 배경: `nurse_room.png`
- 배경톤: `cold`
- 다음: `hidden_nurse_d4_5`

- 캐릭터: `nurse_shy.png`
**{name}**: *마지막 응급키트의 지퍼를 닫는다. 바깥에서는 다른 봉사자들이 완성된 상자를 옮긴다.*

---

### `hidden_nurse_d4_5`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_name_choice`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그래서 학교로 왔어. 치료보다 먼저 말을 듣는 법을 다시 배우려고.

---

### `hidden_nurse_d4_name_choice`
- 배경: `nurse_room.png`
- 배경톤: `cold`
- 선택지:
  1. "언제 보건교사가 되길 잘했다고 느껴요?" → `hidden_nurse_d4_name_choice_a` | Nurse +7
  2. "병원과 학교는 뭐가 제일 달라요?" → `hidden_nurse_d4_name_choice_b` | Nurse +3

- 캐릭터: `nurse_shy.png`
**{name}**: *보건선생님이 완성된 응급키트 수를 적는다.*

---

### `hidden_nurse_d4_name_choice_a`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 혼자 참던 학생이 먼저 문을 열고 들어올 때. 그때는 잘 왔다 싶어.

---

### `hidden_nurse_d4_name_choice_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 여기서는 다치기 전에 말을 걸 수 있어. 그게 제일 달라.

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
**보건선생님**: 별거 맞아. 대신 봉사 시간은 정확히 적어줄게.

---

### `hidden_nurse_d4_6_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_choice`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 봉사 확인표에 시작과 종료 시간을 적는다.*

---

### `hidden_nurse_d4_choice`
- 배경: `nurse_room.png`
- 선택지:
  1. "응급키트 라벨도 붙이고 갈게요." → `hidden_nurse_d4_meal_walk` | Nurse +12
  2. "괜찮아요, 저 이만 갈게요" → `hidden_nurse_d4_pass` | Nurse +3

- 캐릭터: `nurse_normal.png`
**보건선생님**: 남은 건 라벨 붙이기야. 행사 스태프들이 간식 사러 가는데, 같이 마무리할 사람?

---

### `hidden_nurse_d4_meal_walk`
- 배경: `store.png`
- 배경톤: `warm`
- 다음: `hidden_nurse_d4_meal_1`

- 캐릭터: `nurse_normal.png`
**{name}**: *행사 스태프들과 학교 앞 분식집에 들렀다. 포장 봉투가 사람 수만큼 쌓인다.*

---

### `hidden_nurse_d4_meal_1`
- 배경: `store.png`
- 배경톤: `warm`
- 다음: `hidden_nurse_d4_meal_1_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 매운맛 누가 골랐어. 물부터 챙겨.

---

### `hidden_nurse_d4_meal_1_b`
- 배경: `store.png`
- 배경톤: `warm`
- 다음: `hidden_nurse_d4_meal_1_c`

- 캐릭터: `nurse_normal.png`
**{name}**: 선생님이 제일 먼저 드셨잖아요.

---

### `hidden_nurse_d4_meal_1_c`
- 배경: `store.png`
- 배경톤: `warm`
- 다음: `hidden_nurse_d4_meal_1b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 확인하려고 먹은 거지. *물을 마시며* 이건 응급키트로도 못 살린다.

---

### `hidden_nurse_d4_meal_1b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_2`

- 캐릭터: `nurse_normal.png`
**{name}**: *스태프들과 보건실로 돌아와 키트 상자에 라벨을 붙인다.*

---

### `hidden_nurse_d4_meal_2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_2_b`

- 캐릭터: `nurse_normal.png`
**{name}**: 병원 얘기할 때랑 지금은 표정이 다르네요.

---

### `hidden_nurse_d4_meal_2_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *라벨을 붙이던 손이 잠깐 멈춘다.*

---

### `hidden_nurse_d4_meal_3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_3_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 고맙긴 한데, 선생님 기분까지 네 몫으로 만들진 마.

---

### `hidden_nurse_d4_meal_3_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_3_c`

- 캐릭터: `nurse_normal.png`
**{name}**: *마지막 라벨을 상자 한가운데에 붙인다.*

---

### `hidden_nurse_d4_meal_3_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_3_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 자, 여기까지. 봉사 시간 확인하고 각자 행사장으로 돌아가.

---

### `hidden_nurse_d4_meal_3_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_3_e`

- 캐릭터: `nurse_normal.png`
**{name}**: *문을 나서려는데 보건선생님이 확인표를 들고 부른다.*

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

- 캐릭터: `nurse_normal.png`
**보건선생님**: {name}. 오늘 도와줘서 고마워. 월요일에 봉사 시간 확인해.

---

### `hidden_nurse_d4_meal_4_b`
- 배경: `nurse_room.png`
- 다음: `morning4_end`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *완성된 응급키트 상자를 행사 담당 교사에게 건넨다.*

---

### `hidden_nurse_d4_pass`
- 배경: `nurse_room.png`
- 다음: `morning4_end`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그래. 주말에 와준 것만으로 충분해. 조심히 가.

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
**서연**: *눈길을 돌리며 머리카락을 귀 뒤로 넘긴다.* ...바람 좀 쐬자.

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
**서연**: *머리카락을 넘기며* ...됐어.

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
**서연**: 오늘 괜찮았어.

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
  1. "사복 입은 유나는 처음 봐." → 호감분기: Yuna
    - [50+] → `date_yuna_pretty_high`
    - [기본] → `date_yuna_pretty_low`
  2. "오늘은 좀 달라 보이네." → `date_yuna_bright` | Yuna +5

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
**유나**: *눈을 들지 않는다. 기다리고 있다.*

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
**유나**: *눈을 컵으로 내리며* ...됐어.

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
**{name}**: *서점으로 간다. 유나가 서가 사이를 천천히 걷는다.*

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
**유나**: *{name}을 본다. 넘기던 페이지가 손 안에서 멈춘다.*

---

### `date_yuna_end_b`
- 배경: `street.png`
- 다음: `date_yuna_end_c`

- 캐릭터: `yuna_normal.png`
**유나**: *서점 밖으로 나서기 직전, 쪽지를 건넨다. 말없이.*

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
  2. "운동복 잘 어울린다." → `date_dain_bright` | Dain +5

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
**다인**: 야, 그런 말 갑자기 하지 마.

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
**다인**: 뭐야, 갑자기. ...고맙긴 한데.

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
**{name}**: *다인은 웃지만 캡모자 아래 시선은 여전히 쇼윈도에 머문다.*

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
**민수**: 말 돌리지 말고 제대로 해

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
**{name}**: *데이트가 끝났다. 교문 대신 옥상으로 올라왔다.*

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
**{name}**: *데이트가 끝났다. 유나가 걸음을 멈춘다.*

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
**{name}**: *도서관 별관. 창문으로 석양이 스며든다. 소파 옆에 책갈피가 놓여 있다.*

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
**{name}**: *책갈피 끝이 접혀 있다.*

---

### `confess_yuna_choice`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 선택지:
  1. "유나. 하나만 물어볼게." → `confess_yuna_yes_1` | 플래그: `confessed_yuna`
  2. "...여기 진짜 좋다." → `confess_yuna_no_1` | 플래그: `postponed_yuna`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 책갈피를 만지며 기다린다.*

---

### `confess_yuna_yes_1`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_yes_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *목소리가 작아진다.*

---

### `confess_yuna_yes_2`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_yes_3`

- 캐릭터: `yuna_normal.png`
**{name}**: *책장 넘기는 소리가 멈춘다.*

---

### `confess_yuna_yes_3`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_yes_3_b`

- 캐릭터: `yuna_normal.png`
**{name}**: 유나. 너랑 있으면 말을 덜 고르게 돼.

---

### `confess_yuna_yes_3_b`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_yes_4`

- 캐릭터: `yuna_normal.png`
**{name}**: 그게 편했어.

---

### `confess_yuna_yes_4`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_yes_5`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 책갈피를 내려놓는다.*

---

### `confess_yuna_yes_5`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_yes_6`

- 캐릭터: `yuna_normal.png`
**{name}**: 오늘 이후에도 계속 보고 싶어.

---

### `confess_yuna_yes_6`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_yes_6_b`

- 캐릭터: `yuna_shy.png`
**{name}**: 대답은 지금 안 해도 돼.

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
**{name}**: *유나는 바로 대답하지 않는다.*

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
**유나**: ...먼저 말해. 없어질 거면.

---

### `confess_yuna_yes_9`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 플래그: `day4_confession_accepted`, `isDating_Yuna`
- 다음: `confess_yuna_yes_9_b`

- 캐릭터: `yuna_shy.png`
**유나**: 아무 말 없이 사라지지는 마.

---

### `confess_yuna_yes_9_b`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `day4_night_start`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나는 소매 끝을 쥔 채 놓지 않는다.*

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
**{name}**: *데이트가 끝났다. 다인이 학교 쪽으로 뛰어간다.*

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
**{name}**: *체육관. 비어 있다. 석양이 창문 사이로 코트를 물들이고 있다.*

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
**{name}**: *공이 바닥에 한 번 튄다.*

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
**{name}**: *목소리가 낮게 나온다.*

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
**{name}**: 오늘 이후에도 너랑 만나고 싶어.

---

### `confess_dain_yes_4`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_yes_5`

- 캐릭터: `dain_normal.png`
**{name}**: *다인이 공을 내려놓는다.*

---

### `confess_dain_yes_5`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_yes_6`

- 캐릭터: `dain_normal.png`
**{name}**: 대답은 지금 안 해도 돼.

---

### `confess_dain_yes_6`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_yes_7`

- 캐릭터: `dain_laugh.png`
**{name}**: 그냥 말해두고 싶었어.

---

### `confess_dain_yes_7`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_yes_8`

- 캐릭터: `dain_shy.png`
**{name}**: *체육관 조명이 낮게 웅웅거린다.*

---

### `confess_dain_yes_8`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_yes_8_b`

- 캐릭터: `dain_shy.png`
**다인**: *다인이 그 자리에 멈춘다. 두 손으로 얼굴을 덮는다.*

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
**다인**: ...잠깐. 나 지금 말 정리가 안 돼.

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
**다인**: 내일도 와.

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
**{name}**: *토스를 올려준다. 말은 나오지 않는다.*

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
**다인**: ...다음에는 말해.

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
**{name}**: *서연이 침묵한다.*

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
**서연**: *웃다가 금방 입꼬리를 내린다.*

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
**서연**: 그래서 집에서도 학교에서도 웃었어. 그게 제일 편했거든.

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
**서연**: 그때부터 거울 앞에서 표정 맞췄어. 안 맞으면 다시.

---

### `wall_seo_14`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_14_b`

- 캐릭터: `seyoun_cry.png`
**서연**: 칭찬받을 때마다 거울 앞에서 몇 번 맞췄는지부터 셌어.

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
**{name}**: *눈물이 소리 없이 흘러내린다. 서연은 손등으로 닦으려다 멈추고 그냥 올려다본다.*

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
**{name}**: 밤에도 연락해. 안 물어볼게.

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
**서연**: ...그런 말 쉽게 하지 마.

---

### `wall_seo_pinky_5`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_pinky_5_b`

- 캐릭터: `seyoun_cry.png`
**서연**: 듣는 쪽은 기억하니까.

---

### `wall_seo_pinky_5_b`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_line_choice`

- 캐릭터: `seyoun_cry.png`
**{name}**: *서연의 손이 내 손바닥에 닿았다. 차갑다.*

---

### `wall_seo_line_choice`
- 배경: `park.png`
- 배경톤: `cold`
- 선택지:
  1. "물티슈 줄까." → `wall_seo_line_react_1` | Seoyeon +7
  2. "잠깐 앉아 있자." → `wall_seo_line_react_2` | Seoyeon +7
  3. "말 안 해도 돼." → `wall_seo_line_react_3` | Seoyeon +4

- 캐릭터: `seyoun_cry.png`
**서연**: *눈물을 닦으며 떨리는 눈으로 올려다본다.*

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
**서연**: ...이건 처음이네.

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
**다인**: *평소보다 목소리가 낮다.*

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
**{name}**: *비상등만 켜진 체육관. 다인은 혼자 배구공을 튀긴다. 웃지만 어깨는 굳어 있다.*

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
**{name}**: *공을 들고 망설이는 사이, 다인이 한 발 내딛는다. 오른쪽 무릎에 힘이 풀리고 그대로 쪼그려 앉는다.*

---

### `wall_dain_9`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_10`

- 캐릭터: `dain_sad.png`
**{name}**: *체육관 바닥에 공이 굴러간다.*

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
**{name}**: *무릎을 잡은 손이 하얗게 질려 있다.*

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
**다인**: *다인은 웃지 않는다.*

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
  3. "공부터 정리하자. 내일 병원도 예약하고." → `wall_dain_lastspike_1` | Dain +4

- 캐릭터: `dain_sad.png`
**다인**: *배구공을 꼭 안고 고개를 숙였다. 어깨가 떨리고 있다.*

---

### `wall_dain_newdream_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_newdream_2_b`

- 캐릭터: `dain_sad.png`
**{name}**: *그대로 옆에 앉아 있었다. 둘 다 말이 없다. 다인의 운동화 끝만 느리게 흔들린다.*

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
**다인**: 5살 때부터 배구만 했잖아. 이제 다른 것도 찾아봐도 되나 싶어.

---

### `wall_dain_newdream_7`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_newdream_8`

- 캐릭터: `dain_shy.png`
**다인**: 찾는 동안은... 가끔 이렇게 옆에 있어 줄래?

---

### `wall_dain_newdream_8`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_farewell_1`

- 캐릭터: `dain_shy.png`
**{name}**: *다인이 휴대폰을 켜 재활 병원을 검색한다. 공은 라인 밖에 그대로 둔다.*

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
**다인**: *알람 제목 '오늘도 웃어'를 지운다. 빈칸에 '엄마한테 무릎 말하기'를 쓰고 저장한다.*

---

### `wall_dain_lastspike_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_2`

- 캐릭터: `dain_sad.png`
**{name}**: *다인의 품에서 공을 받아 든다. 다인은 앉아 있고, {name}만 공 보관함 쪽으로 걷는다.*

---

### `wall_dain_lastspike_2`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_3`

- 캐릭터: `dain_normal.png`
**다인**: *공이 하나씩 보관함에 들어가는 걸 지켜본다.* ...정리하면 진짜 끝나는 줄 알았는데.

---

### `wall_dain_lastspike_3`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_3_b`

- 캐릭터: `dain_laugh.png`
**{name}**: 다 버리자는 거 아니야. 오늘은 공만 넣자.

---

### `wall_dain_lastspike_3_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_3_c`

- 캐릭터: `dain_sweat.png`
**다인**: *무릎 보호대를 풀었다가 압박이 가지 않게 다시 고쳐 맨다.* ...병원, 다시 가야겠지.

---

### `wall_dain_lastspike_3_c`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_4`

- 캐릭터: `dain_sweat.png`
**{name}**: 응. 이번에는 검사 결과도 끝까지 듣고.

---

### `wall_dain_lastspike_4`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_4_b`

- 캐릭터: `dain_sad.png`
**다인**: 프로는 아직 모르겠어. 그래도 계속 숨기면서 뛰는 건 그만할래.

---

### `wall_dain_lastspike_4_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_5`

- 캐릭터: `dain_sad.png`
**다인**: *휴대폰에서 정형외과 예약 화면을 연다. 가장 빠른 날짜는 월요일이다.*

---

### `wall_dain_lastspike_5`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_6`

- 캐릭터: `dain_sad.png`
**다인**: 내일 엄마랑 코치한테도 말할게.

---

### `wall_dain_lastspike_6`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_farewell_1`

- 캐릭터: `dain_sad.png`
**다인**: ...병원 가는 날, 같이 가 줄래?

---

### `wall_dain_farewell_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 플래그: `day4_dain_wall_broken`
- 다음: `wall_dain_farewell_2`

- 캐릭터: `dain_sad.png`
**다인**: *{name}이 공을 보관함에 넣는 동안, 벤치를 짚고 천천히 일어난다.*

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
**유나**: 학교 후문으로 따라와.

---

### `wall_yuna_4`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_6`

- 캐릭터: `yuna_normal.png`
**유나**: *도서관 별관 쪽으로 걷는다. 비밀 독서 공간을 지나 — 더 안쪽. 지하 자료실. 먼지가 쌓인 서가 사이. 오래된 봉투를 꺼낸다.*

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
**유나**: 근데 너는 매일 왔어. 조용히.

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
  1. "그 사람 대신은 못 해. 그래도 지금은 여기 있어." → `wall_yuna_moved_1` | Yuna +4
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
**유나**: *숨을 길게 내쉰다. 편지 모서리가 손가락 아래에서 살짝 구겨진다.*

---

### `wall_yuna_moved_5_b`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_skin_check`

- 캐릭터: `yuna_shy.png`
**유나**: *숨을 길게 내쉰다. 옷소매를 쥔 손이 살짝 떨린다.*

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
**{name}**: *유나의 손이 따뜻하다. 그뿐이다.*

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
**유나**: *작게 웃었다. 손가락이 편지 모서리를 한 번 더 누른다.*

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
**{name}**: *학교 뒤편에서 집으로 돌아왔다. 주머니 안 핸드폰은 조용하다.*

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
**서연**: 오늘 바람 좋았어. 조금 기다렸어.

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
**{name}**: *답장을 쓰다 지운다. 입력창에는 받침 하나만 남았다가, 곧 사라진다.*

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
**담임선생님**: *학교 학습 포털 공지* 문예부 합평용 원고를 올렸어. 읽을 사람은 내일 교무실에서 인쇄본을 받아가.

---

### `night_homeroom_msg_2`
- 배경: `room_my.png`
- 다음: `night_homeroom_msg_3`

- 캐릭터: `teacher_normal.png` @ 0.35
**담임선생님**: *학교 학습 포털 공지* 의견을 남기고 싶으면 문예부 시간에 와. 개인 답장은 하지 않아도 돼.

---

### `night_homeroom_msg_3`
- 배경: `room_my.png`
- 다음: `day4_hidden_msg_after_homeroom`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *밤 9시. 학급 공지 아래로 문예부 학생들의 확인 댓글이 차례로 달린다. 내일 일정에 '합평'을 적어 둔다.*

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
**보건선생님**: *학교 건강관리 앱 알림* 오늘 상담 후 상태를 확인해 주세요.

---

### `night_nurse_msg_2`
- 배경: `room_my.png`
- 다음: `night_nurse_msg_3`

- 캐릭터: `nurse_normal.png` @ 0.35
**{name}**: *자동 알림 아래에 '안정됨'과 '추가 상담 필요' 두 버튼이 뜬다.*

---

### `night_nurse_msg_3`
- 배경: `room_my.png`
- 다음: `night_nurse_msg_4`

- 캐릭터: `nurse_normal.png` @ 0.35
**보건선생님**: *보건실 안내* 추가 상담이 필요하면 내일 행사 시작 전 예약해. 담임이나 상담실을 선택해도 됩니다.

---

### `night_nurse_msg_4`
- 배경: `room_my.png`
- 다음: `day4_night_sleep`

- 캐릭터: `nurse_normal.png` @ 0.35
**보건선생님**: *보건실 안내* 늦은 시간에는 답하지 않아도 돼. 급하면 보호자나 가까운 어른에게 먼저 알려.

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
**{name}**: *교실에 들어서자 세 가지가 한꺼번에 눈에 들어온다. 책상 위 쪽지, 체육복 끈에 묶인 리본, 잠금화면의 알림 하나.*

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
**다인**: 늦으면 화낸다?

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
**{name}**: *책상 위에 새 쪽지는 없다. 서연의 클립보드는 오늘도 팔 안쪽에 붙어 있다. 유나와 다인은 행사 준비 얘기만 짧게 건넨다.*

---

### `morning5_committed_yuna`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_check`

- 캐릭터: `yuna_normal.png`
**{name}**: *새 메모는 없다. 유나는 책갈피를 노트 사이에 끼워 둔다. 서연과 다인은 행사 준비 얘기만 짧게 건넨다.*

---

### `morning5_committed_dain`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_check`

- 캐릭터: `dain_normal.png`
**{name}**: *다인이 체육관 쪽에서 손목 보호대를 고쳐 맨다. 서연과 유나는 행사 준비 얘기만 짧게 건넨다.*

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
**담임선생님**: 문예부 합평본. 미완성이긴 한데, 어제 네가 짚은 부분도 고쳤어.

---

### `hidden_homeroom_d5_3`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 7년 동안 덮어뒀는데, 이번엔 문예부랑 국어과 선생님들한테도 돌리려고.

---

### `hidden_homeroom_d5_4`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_5`

- 캐릭터: `teacher_sad.png`
**{name}**: *번호가 적힌 합평본 한 부를 받는다. 마지막 장 뒤에는 익명 의견란이 붙어 있다.*

---

### `hidden_homeroom_d5_5`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_choice`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 여러 부를 뽑아도 떨리는 건 똑같네.

---

### `hidden_homeroom_d5_choice`
- 배경: `room_school.png`
- 배경톤: `empty`
- 선택지:
  1. "7년이나 붙잡으셨으니 분명 좋은 글일 거예요." → `hidden_homeroom_d5_praise_trap_1` | Teacher -25 | 플래그: `teacher_praise_broken`
  2. "먼저 읽어볼게요. 표시해도 돼요?" → `hidden_homeroom_d5_correct_1` | Teacher +16

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
**담임선생님**: ...아직 끝까지 못 썼어.

---

### `hidden_homeroom_d5_praise_trap_3`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_4`

- 캐릭터: `teacher_normal.png`
**{name}**: 그래도 여기까지 쓰셨잖아요.

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
**담임선생님**: *손을 뻗어 원고를 받아 든 뒤 잠시 머뭇거리다 봉투에 넣는다.*

---

### `hidden_homeroom_d5_praise_trap_6`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_7`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 괜찮아. 다만 합평에선 읽은 부분만 말해줘.

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
**담임선생님**: 출판사에 세 번 보냈고, 세 번 다 떨어졌어. 막연한 격려보다 어디서 읽기를 멈췄는지가 더 필요했어.

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
**담임선생님**: 칭찬보다 읽은 흔적이 필요했어. 부담을 줬다면 그건 선생님 잘못이고.

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
**{name}**: 마지막 장, 왜 멈췄는지 표시해도 돼요?

---

### `hidden_homeroom_d5_correct_10`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_11`

- 캐릭터: `teacher_smile.png`
**담임선생님**: 비평까지 하겠다고?

---

### `hidden_homeroom_d5_correct_11`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_12`

- 캐릭터: `teacher_smile.png`
**{name}**: 네. 독자로 읽고 있으니까요.

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
**담임선생님**: 좋아. 익명 의견란에 적어줘.

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
**담임선생님**: 이건 네 번호야. 다른 합평본과 같이 월요일에 받을게.

---

### `hidden_homeroom_d5_6_b`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_c`

- 캐릭터: `teacher_normal.png`
**{name}**: *어제 카페 안쪽 테이블에 쌓였던 합평본이 떠오른다. 봉투 겉면에 04번이 적혀 있다.*

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
**담임선생님**: 읽은 데까지만 솔직하게 적어. 이름은 쓰지 않아도 돼.

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
**{name}**: 선생님도 누가 썼는지 찾지 마세요.

---

### `hidden_homeroom_d5_6_g`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_h`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *합평본 번호표를 확인하고 고개를 끄덕인다.*

---

### `hidden_homeroom_d5_6_h`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_i`

- 캐릭터: `teacher_smile.png`
**담임선생님**: 의견을 받을 준비가 된 날이 올 줄은 몰랐네.

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
**담임선생님**: 월요일 문예부 시간 전까지만 읽어줘.

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
**담임선생님**: *문 앞에서 멈춰 문예부 일정표를 한 번 확인한다.*

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
**담임선생님**: 답은 월요일 문예부 시간에 받을게. 그때까지 나도 결말을 더 써볼 거고.

---

### `hidden_homeroom_d5_6_s`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_t`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 이러면 서로 핑계 못 대겠네.

---

### `hidden_homeroom_d5_6_t`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_7`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *문예부 일정표 아래에 합평 마감 시간을 적는다.*

---

### `hidden_homeroom_d5_7`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_7_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 고맙다는 말도 여기까지. 이제 행사 준비하러 가.

---

### `hidden_homeroom_d5_7_b`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_7_c`

- 캐릭터: `teacher_normal.png`
**{name}**: *04번 합평본을 가방에 넣고 문 쪽으로 돌아선다.*

---

### `hidden_homeroom_d5_7_c`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_8`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 행사부터 잘 마쳐. 합평은 월요일 문예부에서 보자.

---

### `hidden_homeroom_d5_8`
- 배경: `room_school.png`
- 배경톤: `empty`
- 플래그: `homeroom_day5`
- 스탯: Teacher +5
- 다음: `hidden_homeroom_d5_freetalk`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *복도로 나가 행사 준비 학생들의 이름을 확인한다.*

---

### `hidden_homeroom_d5_freetalk`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_nurse_d5_check`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *04번 합평본을 가리킨다.* 마지막 검토야. 빈칸이 보여도 봐주지 말고.

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
**보건선생님**: 어, {name}. 행사 마지막 날이네. 상담 기록도 오늘 정리하자.

---

### `hidden_nurse_d5_1_b`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_1_c`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 상담 기록지의 마지막 확인란을 펼친다.*

---

### `hidden_nurse_d5_1_c`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_1_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 오늘 상태까지 확인하면 이번 상담은 마무리야.

---

### `hidden_nurse_d5_1_d`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_1_e`

- 캐릭터: `nurse_normal.png`
**{name}**: 이제 안 와도 되는 거예요?

---

### `hidden_nurse_d5_1_e`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_1_f`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 아프거나 버거우면 정식으로 와. 이유를 만들 필요는 없고.

---

### `hidden_nurse_d5_1_f`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_2_b`

- 캐릭터: `nurse_normal.png`
**{name}**: *상담 기록지 아래에 보건실과 위클래스 예약 방법이 나란히 적혀 있다.*

---

### `hidden_nurse_d5_2_b`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_2_c`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건실 문을 열고 예약 명단을 확인한다.*

---

### `hidden_nurse_d5_2_c`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 예약 시간 맞춰 왔네. 잘했어.

---

### `hidden_nurse_d5_3`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_b`

- 캐릭터: `nurse_normal.png`
**{name}**: 상담 확인서 받으러 왔어요.

---

### `hidden_nurse_d5_3_b`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_c`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *확인서에 날짜와 시간을 적는다.*

---

### `hidden_nurse_d5_3_c`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 정해진 시간에 도움을 받으러 오는 건 언제든 괜찮아.

---

### `hidden_nurse_d5_3_d`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_e`

- 캐릭터: `nurse_normal.png`
**{name}**: 핑계 안 대도요?

---

### `hidden_nurse_d5_3_e`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_f`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 당연하지. 보건실은 핑계를 만드는 곳이 아니라 필요한 도움을 받는 곳이야.

---

### `hidden_nurse_d5_3_f`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_g`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *응급처치 안내 카드 상자를 연다.*

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
**보건선생님**: 행사장 응급키트는 체육관 입구에 있어. 다치면 바로 담당 교사를 불러.

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
**{name}**: *확인서 아래에 '상담 종결, 필요 시 재예약' 도장이 찍힌다.*

---

### `hidden_nurse_d5_4_d`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 마지막 확인도 끝.

---

### `hidden_nurse_d5_5`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice`

- 캐릭터: `nurse_normal.png`
**보건선생님**: {name}. 응급처치 안내 카드 하나 가져갈래?

---

### `hidden_nurse_d5_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "네. 가방에 넣어둘게요." → `hidden_nurse_d5_choice_a` | Nurse +11
  2. "카드보다 상담실 예약 방법을 알려주세요." → `hidden_nurse_d5_choice_b` | Nurse +5

- 캐릭터: `nurse_normal.png`
**{name}**: *카드 앞면에는 기본 응급처치 순서, 뒷면에는 학교 상담 채널이 적혀 있다.*

---

### `hidden_nurse_d5_choice_a`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_a_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *안내 카드를 투명 케이스에 넣어 건넨다.*

---

### `hidden_nurse_d5_choice_a_b`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 이건 쓸 일이 없으면 제일 좋고, 필요할 땐 바로 꺼내.

---

### `hidden_nurse_d5_choice_b`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 좋아. 학교 앱으로 예약하면 내가 바로 못 봐도 상담교사가 이어받을 수 있어.

---

### `hidden_nurse_d5_choice_b_b`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_c`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *안내 카드 뒷면의 QR 영역을 가리킨다.*

---

### `hidden_nurse_d5_choice_b_c`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 학교 앱에서 상담 예약을 누르면 돼. 보건실과 위클래스 중에 고를 수 있어.

---

### `hidden_nurse_d5_choice_b_d`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_e`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 내가 바로 답하지 못할 때는 상담교사가 이어받아. 기록도 학교 안에서만 관리하고.

---

### `hidden_nurse_d5_choice_b_e`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_f`

- 캐릭터: `nurse_angry.png`
**{name}**: *개인 번호 대신 상담 가능 시간과 담당 부서가 인쇄돼 있다.*

---

### `hidden_nurse_d5_choice_b_f`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_g`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 급한 일이면 누구한테 먼저 말할 건데?

---

### `hidden_nurse_d5_choice_b_g`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_6`

- 캐릭터: `nurse_normal.png`
**{name}**: 보호자나 가까운 선생님이요. 혼자 버티지 않을게요.

---

### `hidden_nurse_d5_6`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_6_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그럼 됐다. 이건 응급처치 카드.

---

### `hidden_nurse_d5_6_b`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_6_c`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *카드를 케이스에 넣고, 가방에서 바로 찾을 수 있게 바깥 주머니에 넣으라고 가리킨다.*

---

### `hidden_nurse_d5_6_c`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_flag_check`

- 캐릭터: `nurse_normal.png`
**{name}**: *카드 아래쪽에 짧은 문장이 인쇄돼 있다. '다치기 전에 도움을 요청하기.'*

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
**보건선생님**: *상담 기록지를 파일에 넣는다.* 상담은 여기까지. 다음엔 필요한 말을 바로 해.

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
**서연**: 혼내진 않았잖아. — 그때부터 봤어.

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
**{name}**: *바람은 불지 않는다.*

---

### `tour_seo_8`
- 배경: `school.png`
- 다음: `tour_seo_9`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 가방 안쪽에서 작은 금속 열쇠고리를 꺼낸다. 옥상 열쇠와 같은 모양이지만 홈이 없다.*

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
**{name}**: 옥상 열쇠...는 아니네.

---

### `tour_seo_11`
- 배경: `school.png`
- 다음: `tour_seo_12`

- 캐릭터: `seyoun_normal.png`
**서연**: 학생회 기념품이야. 진짜 열쇠는 오늘 반납해야 하니까.

---

### `tour_seo_12`
- 배경: `school.png`
- 다음: `tour_seo_13`

- 캐릭터: `seyoun_normal.png`
**서연**: *열쇠고리를 건넨다. 손이 스치자 서연은 가방끈을 다시 고쳐 잡는다.*

---

### `tour_seo_13`
- 배경: `school.png`
- 다음: `tour_seo_14`

- 캐릭터: `seyoun_normal.png`
**{name}**: 그럼 다음부터 옥상은 어떻게 올라가?

---

### `tour_seo_14`
- 배경: `school.png`
- 스탯: Seoyeon +5
- 다음: `tour_seo_freetalk`

- 캐릭터: `seyoun_shy.png`
**서연**: 나한테 말해. 정식으로 빌려서 같이 열면 되잖아.

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
**{name}**: *서연이 건넨 열쇠고리를 주머니에 넣는다. 진짜 옥상 열쇠는 서연의 가방 안에서 한 번 더 부딪힌다.*

---

### `tour_yuna_1_check`
- 배경: `yuna_hideout.png`
- BGM: `sunset1.mp3`
- 분기:
  - [`chose_yuna_lunch`] → `tour_yuna_1`
  - [기본] → `tour_yuna_1b`

- 캐릭터: `없음`
**{name}**: *도서관 별관으로 간다.*

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
**유나**: *책등을 손가락으로 훑다가 고개를 든다.* 마지막이라니까 말이 많아져.

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
**{name}**: *유나는 거기서 문장을 끝낸다.*

---

### `tour_dain_1_check`
- 배경: `gym.png`
- BGM: `sunset1.mp3`
- 분기:
  - [`chose_dain_lunch`] → `tour_dain_1`
  - [기본] → `tour_dain_1b`

- 캐릭터: `없음`
**{name}**: *체육관으로 간다.*

---

### `tour_dain_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `tour_dain_2`

- 캐릭터: `없음`
**{name}**: *체육관. 첫 내기를 했던 라인 옆에 어젯밤 정리한 공 보관함이 있다. 오늘은 불이 켜져 있다.*

---

### `tour_dain_1b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `tour_dain_2`

- 캐릭터: `없음`
**{name}**: *체육관. 오늘은 불이 켜져 있다.*

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
**{name}**: *화를 내면서도 웃고 있다. 다인이 배구공을 코트에 내려놓는다. 한 박자 늦게.*

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
**다인**: 뭐가 달라졌는진 몰라. ...근데 코트 밖에서도 할 말이 있어.

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
**다인**: ...혼자 있지는 않잖아.

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
**{name}**: *다인의 손이 무릎이 아니라 배구공 위에 있다.*

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
**{name}**: *행사가 끝나간다. 복도에서 선택하지 않은 두 사람과 마주친다.*

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
**서연**: 뭐, 예상은 했어.

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
**서연**: 네가 정한 거면 됐어. 이제는 애매하게 굴지만 마.

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
**{name}**: *복도에 혼자 남았다. 서연의 발소리가 멀어지고, 위층에서 옥상 문 잠기는 소리가 난다.*

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
**유나**: 네가 고른 사람한테는 늦지 마.

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
**{name}**: *책갈피에는 한 줄만 적혀 있다. '재밌었어.' 끝에는 마침표가 있다.*

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
**{name}**: *체육관 앞에서 다인이 걸어온다. 평소보다 보폭이 작다.*

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
**다인**: 네가 고른 거니까, 내가 뭐라고 하진 않을게.

---

### `after5_farewell_dain_4_b`
- 배경: `gym.png`
- 다음: `after5_farewell_dain_4_c`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인이 주먹으로 어깨를 툭 친다.*

---

### `after5_farewell_dain_4_c`
- 배경: `gym.png`
- 다음: `after5_farewell_dain_4_d`

- 캐릭터: `dain_normal.png`
**다인**: 대신 어설프게 굴면 진짜 화낸다. ...잘해.

---

### `after5_farewell_dain_4_d`
- 배경: `gym.png`
- 다음: `after5_farewell_dain_5`

- 캐릭터: `dain_laugh.png`
**다인**: *배구공을 공 보관함에 밀어 넣고 무릎 보호대 끈을 고쳐 맨다.*

---

### `after5_farewell_dain_5`
- 배경: `gym.png`
- 제외조건: `route_dain`
- 다음: `after5_farewell_dain_5b`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인이 돌아서서 천천히 체육관 안으로 들어간다.*

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
**{name}**: *교문 앞. 멀리서 세 사람이 보인다. 서연은 하은과 걷고, 다인은 배구공을 옆구리에 낀 채 천천히 걷고, 유나는 책을 읽으며 간다. 아무도 이쪽을 보지 않는다.*

---

### `after5_hidden_farewell_3`
- 배경: `school.png`
- 다음: `after5_hidden_farewell_3b`

- 캐릭터: `없음`
**{name}**: *교문 앞에서 손만 한 번 들었다.*

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
**{name}**: *친구들과 한 약속으로 가는 길과, 행사 정리를 마저 돕는 길이 갈린다.*

---

### `after5_hidden_route_choice`
- 배경: `park.png`
- 다음: `ending_start`

- 캐릭터: `없음`
**{name}**: *행사 정리는 다른 학생들에게 맡기고, 약속 장소인 공원으로 향한다.*

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
**{name}**: *주머니 속 핸드폰을 쥔다. 화면은 켜지지 않는다.*

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
**{name}**: *바람이 머리카락을 날린다. 서연은 그대로 서 있다.*

---

### `after5_last_chance_2_g`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_h`

- 캐릭터: `seyoun_normal.png`
**서연**: 내가 말할게. 잠깐만 있어.

---

### `after5_last_chance_2_h`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_i`

- 캐릭터: `seyoun_normal.png`
**{name}**: *손을 내민다.*

---

### `after5_last_chance_2_i`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_j`

- 캐릭터: `seyoun_normal.png`
**서연**: 잡아.

---

### `after5_last_chance_2_j`
- 배경: `school_back.png`
- 다음: `after5_last_chance_choice`

- 캐릭터: `seyoun_shy2.png`
**서연**: *서연의 손이 {name} 앞에 멈춘다.*

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
**다인**: *걸음을 재촉하다가 {name} 앞에서 멈춘다.*

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
**다인**: 어제부터 기다렸어. 근데 바로 웃지는 못해.

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
**다인**: ...말해. 끝까지 들을게.

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
**{name}**: *발이 뒤로 물러나지 않는다. 유나는 재촉하지 않는다.*

---

### `after5_last_chance_yuna_5`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_6`

- 캐릭터: `yuna_shy.png`
**유나**: ...듣고 갈게. 괜찮다고는 못 해도.

---

### `after5_last_chance_yuna_6`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_7`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나가 눈을 돌리지 않는다. {name}의 발이 한 걸음 앞으로 나간다.*

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
**{name}**: *발끝이 멈춘다. 이름을 부른다.*

---

### `after5_confess_yes_2`
- 배경: `school_back.png`
- 분기:
  - [`route_seoyeon`] → `after5_confess_aff_seo`
  - [`route_dain`] → `after5_confess_aff_dain`
  - [`route_yuna`] → `after5_confess_aff_yuna`
  - [기본] → `ending_start`

- 캐릭터: `없음`
**{name}**: 나, 너한테 할 말이 있어.

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
**서연**: *나란히 걸어가며.* ...늦었어. 그래도 들을게.

---

### `after5_confess_react_seo_low`
- 배경: `school_back.png`
- 다음: `after5_confess_fail_walk_1`

- 캐릭터: `seyoun_sad.png`
**서연**: *한참 말이 없다.* ...들었어. 지금은 그 정도로 해.

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
**다인**: *학교를 나서며.* 야, 너... 나 기다리긴 했어. 끝까지 말해.

---

### `after5_confess_react_dain_low`
- 배경: `school_back.png`
- 다음: `after5_confess_fail_walk_1`

- 캐릭터: `dain_sad.png`
**다인**: *숨을 고른다.* ...들었어. 바로 웃기는 좀 힘들어.

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
**유나**: *나란히 걸었다.* ...알고는 있었어. 그래도 들을게.

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
**유나**: *책을 내려놓는다. 손이 떨린다.*

---

### `after5_confess_react_yuna_c`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_d`

- 캐릭터: `yuna_normal.png`
**유나**: ...그래도 직접 듣고 싶었어.

---

### `after5_confess_react_yuna_d`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_e`

- 캐릭터: `yuna_normal.png`
**유나**: *접힌 쪽지를 건넨다. 펼치면 한 줄이다.*

---

### `after5_confess_react_yuna_e`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_f`

- 캐릭터: `yuna_shy.png`
**{name}**: *'오래 기다렸어.'*

---

### `after5_confess_react_yuna_f`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_g`

- 캐릭터: `yuna_sad.png`
**{name}**: *글씨 한 군데가 눌려 있다. 종이에는 여러 번 접었다 편 자국이 남아 있다.*

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
**{name}**: *답을 못 낸 채 공원 쪽으로 걸었다.*

---

### `after5_confess_no`
- 배경: `school_back.png`
- 다음: `after5_confess_no_2`

- 캐릭터: `없음`
**{name}**: *목이 잠긴다. 아무 말도 나오지 않는다.*

---

### `after5_confess_no_2`
- 배경: `school_back.png`
- 다음: `after5_confess_no_2b`

- 캐릭터: `없음`
**{name}**: *저녁 바람이 불어온다. 등 뒤의 그림자가 길어진다.*

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
**{name}**: *점심때 접어 둔 말들이 그대로 남아 있다. 메시지방 세 개가 한꺼번에 켜지고, 어느 쪽에도 첫 글자를 못 쓴다.*

---

### `after5_harem_commit`
- 배경: `school_back.png`
- 플래그: `ending_harem`
- 다음: `after5_harem_walk_1`

- 캐릭터: `없음`
**{name}**: *목에 걸려 있던 말을 꺼낸다. 하나를 고르지 못하겠다고. 세 사람 모두 표정이 굳는다.*

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
**{name}**: *공원까지 걸어와 겨우 말했다. 대답을 기다리는 동안 신발 끝만 본다.*

---

### `confess_fail_cg_seo`
- 배경: `ending_confess_fail_seoyeon.png`
- 다음: `confess_fail_1`

- 캐릭터: `없음`
**서연**: *한참 듣고 고개를 젓는다.* 미안해. 지금은 아니야.

---

### `confess_fail_cg_yuna`
- 배경: `ending_confess_fail_yuna.png`
- 다음: `confess_fail_1`

- 캐릭터: `없음`
**유나**: *오래 침묵한 뒤 책을 품에 안는다.* ...지금은 못 해.

---

### `confess_fail_cg_dain`
- 배경: `ending_confess_fail_dain.png`
- 다음: `confess_fail_1`

- 캐릭터: `없음`
**다인**: *웃지 않은 채 운동화 끝만 본다.* 미안. 나는 친구로 남고 싶어.

---

### `confess_fail_1`
- 배경: `ending_bittersweet.png`
- 다음: `confess_fail_2`

- 캐릭터: `없음`
**{name}**: *공원을 혼자 걸어 나온다. 방금 들은 대답이 귓가에 남아 있다.*

---

### `confess_fail_2`
- 배경: `ending_bittersweet.png`
- 다음: `confess_fail_3`

- 캐릭터: `없음`
**{name}**: *집에 도착해 대화방을 연다. 커서가 빈 입력창에서 깜빡인다.*

---

### `confess_fail_3`
- 배경: `ending_bittersweet.png`
- 다음: `confess_fail_4`

- 캐릭터: `없음`
**{name}**: *'알겠어. 답해줘서 고마워.'를 보내고 휴대폰을 내려놓는다.*

---

### `confess_fail_4`
- 배경: `ending_bittersweet.png`
- 다음: `confess_fail_5`

- 캐릭터: `없음`
**{name}**: *읽음 표시가 붙는다. 답장은 오지 않는다. 더 보내지 않는다.*

---

### `confess_fail_5`
- 배경: `ending_bittersweet.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── FRIEND END (고백 실패) ───

---

### `day5_ending_friend`
- 배경: `park.png`
- BGM: `night2.mp3`
- 다음: `friend_1`

- 캐릭터: `없음`
**{name}**: *고백하지 않기로 했다. 대신 아무 말도 하지 않은 채 사라지지는 않기로 했다.*

---

### `friend_1`
- 배경: `park.png`
- 다음: `friend_2`

- 캐릭터: `없음`
**{name}**: *공원 벤치에 앉아 메시지 창을 연다. 이번에는 입력창을 닫지 않는다.*

---

### `friend_2`
- 배경: `park.png`
- 다음: `friend_3`

- 캐릭터: `없음`
**{name}**: *소정이 대화방에 끝내 보내지 못한 문장이 떠오른다.*

---

### `friend_3`
- 배경: `park.png`
- 다음: `friend_route_check`

- 캐릭터: `없음`
**{name}**: *'지금은 관계를 바꾸자고 말할 자신이 없어. 그래도 네가 고마웠다는 말은 하고 싶었어.' 끝까지 쓰고 보낸다.*

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
**{name}**: *답장이 온다. '나도 고마웠어. 내일 학교에서 보자.'*

---

### `friend_4_seo`
- 배경: `park.png`
- 다음: `friend_5`

- 캐릭터: `없음`
**{name}**: *서연에게서 답장이 온다. '알겠어. 이번엔 말 끝까지 했네. 내일 봐.'*

---

### `friend_4_yuna`
- 배경: `park.png`
- 다음: `friend_5`

- 캐릭터: `없음`
**{name}**: *유나에게서 답장이 온다. '읽었어. ...내일 보자.'*

---

### `friend_4_dain`
- 배경: `park.png`
- 다음: `friend_5`

- 캐릭터: `없음`
**{name}**: *다인에게서 답장이 온다. '응. 그럼 내일은 평소대로 와. 늦지 말고.'*

---

### `friend_5`
- 배경: `park.png`
- 다음: `friend_7`

- 캐릭터: `없음`
**{name}**: *'응.' 짧게 답하고 화면을 끈다.*

---

### `friend_7`
- 배경: `park.png`
- 다음: `friend_8`

- 캐릭터: `없음`
**{name}**: *보낸 메시지 옆에 읽음 표시가 붙는다. 이번에는 지우지 않는다.*

---

### `friend_8`
- 배경: `ending_friend.png`
- 다음: `friend_9`

- 캐릭터: `없음`
**{name}**: *졸업식 날. 핸드폰 갤러리에 이 학교 친구들과 찍은 단체 사진이 뜬다. 이번에는 카메라를 보고 있다.*

---

### `friend_9`
- 배경: `ending_friend.png`
- 다음: `friend_10`

- 캐릭터: `없음`
**{name}**: *사진 속 우리는 친구다. 그 말 뒤에 다른 뜻을 숨겨 둘 필요는 없다.*

---

### `friend_10`
- 배경: `ending_friend.png`
- 다음: `friend_12`

- 캐릭터: `없음`
**{name}**: *단체 대화방에 쓴다. '졸업식 끝나고 다 같이 뭐 먹을래?' 보내자마자 답장이 하나씩 올라온다.*

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
**다인**: *평소처럼 웃었다. "잘 지내." 말끝이 힘없이 떨어졌다.*

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
**{name}**: *소정이 사진 아래에 있던 미전송 메모를 본다. 보낸 말풍선이 길게 이어져 있다. 화면이 그대로 어둡게 꺼진다.*

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
**{name}**: *대답이 목에 걸렸다. 세 사람의 웃음이 한 박자에 멎었다.*

---

### `harem_1`
- 배경: `ending_harem.png`
- 다음: `harem_1_b`

- 캐릭터: `없음`
**서연**: 솔직한 건 알겠어. 그렇다고 우리 셋이 기다려야 하는 건 아니지.

---

### `harem_1_b`
- 배경: `ending_harem.png`
- 다음: `harem_2`

- 캐릭터: `없음`
**유나**: *고개를 숙였다가 서연과 다인을 차례로 본다. 책을 쥔 손은 풀지 않는다.*

---

### `harem_2`
- 배경: `ending_harem.png`
- 다음: `harem_3`

- 캐릭터: `없음`
**유나**: ...난 시간을 갖고 싶어.

---

### `harem_3`
- 배경: `ending_harem.png`
- 다음: `harem_4`

- 캐릭터: `없음`
**다인**: 나도. 네가 정리할 때까지는 따로 안 만날래.

---

### `harem_4`
- 배경: `ending_harem.png`
- 다음: `harem_5`

- 캐릭터: `없음`
**{name}**: 알겠어. 당분간 누구한테도 따로 연락하지 않을게. 미안해.

---

### `harem_5`
- 배경: `ending_harem.png`
- 다음: `harem_6`

- 캐릭터: `없음`
**서연**: 그럼 한동안 따로 만나지 말자. 연락도 필요한 얘기만 하고.

---

### `harem_6`
- 배경: `ending_harem.png`
- 다음: `harem_7`

- 캐릭터: `없음`
**{name}**: *고개를 끄덕인다. 세 사람은 각자 다른 방향으로 걸어가고, {name}은 그 자리에 남는다.*

---

### `harem_7`
- 배경: `ending_harem.png`
- 다음: `harem_8`

- 캐릭터: `없음`
**{name}**: *다음 주 캘린더는 비어 있다. 세 사람의 대화방을 음소거하고, 빈칸을 그대로 둔다.*

---

### `harem_8`
- 배경: `ending_harem.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── UNRESOLVED END ───

---

### `hidden_dual_route_1`
- 배경: `park.png`
- 다음: `hidden_dual_route_choice`

- 캐릭터: `없음`
**{name}**: *행사 정리를 마치며 문예부 합평본과 응급처치 카드를 가방에 넣는다. 몇 년 뒤 어떤 기억으로 돌아올지는 아직 모른다.*

---

### `hidden_dual_route_choice`
- 배경: `park.png`
- 선택지:
  1. "문예부 합평본을 펼친다" → `hidden_perfect_homeroom_check`
  2. "응급처치 카드를 꺼낸다" → `hidden_perfect_nurse_check`

- 캐릭터: `없음`
**{name}**: *두 기록 중 하나를 먼저 꺼낸다. 누구와의 관계도 오늘 정할 일은 아니다.*

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
**{name}**: *졸업식 날. 담임은 추천서 사본과 독서 기록을 건넸다. 마지막까지 교사다운 작별이었다.*

---

### `hidden_perfect_homeroom_1b`
- 배경: `room_school.png`
- 다음: `hidden_perfect_homeroom_2`

- 캐릭터: `teacher_normal.png`
**{name}**: *빈 교실 문 앞에서 담임이 문예부 합평본을 정리한다. 원고마다 학생 번호만 적혀 있다.*

---

### `hidden_perfect_homeroom_2`
- 배경: `room_school.png`
- 다음: `hidden_perfect_homeroom_2b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 졸업 축하해. 추천서랑 독서 기록은 봉투에 넣었어. 빠진 건 없는지 집에서 확인해.

---

### `hidden_perfect_homeroom_2b`
- 배경: `room_school.png`
- 다음: `hidden_perfect_homeroom_2c`

- 캐릭터: `teacher_shy.png`
**{name}**: 원고는 끝내셨어요?

---

### `hidden_perfect_homeroom_2c`
- 배경: `room_school.png`
- 다음: `hidden_perfect_homeroom_3`

- 캐릭터: `teacher_sad.png`
**담임선생님**: 합평 덕분에 끝냈어. 출판사에도 보냈고. 결과는 선생님이 감당할 일이야. 너도 잘 지내.

---

### `hidden_perfect_homeroom_3`
- 배경: `room_school.png`
- 다음: `hidden_perfect_homeroom_3b`

- 캐릭터: `teacher_normal.png`
**{name}**: *4년 후. 학교를 떠나 대학을 마치고, 첫 직장 근처에 작은 원룸을 얻었다.*

---

### `hidden_perfect_homeroom_3b`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_3c`

- 캐릭터: `teacher_smile.png`
**{name}**: *퇴근길 서점 카페. 신간 북토크 안내판 앞에서 익숙한 이름을 발견한다. 고개를 들자 그 사람도 이쪽을 본다.*

---

### `hidden_perfect_homeroom_3c`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_3e`

- 캐릭터: `teacher_smile.png`
**담임선생님**: ...정말 우연이네. *행사 자료를 내려놓는다.* 시간 괜찮으면 앉을래?

---

### `hidden_perfect_homeroom_3e`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_3f`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 학교는 그대로 다녀. 책도 한 권 냈고. — 넌 요즘 무슨 일 해?

---

### `hidden_perfect_homeroom_3f`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_3g`

- 캐릭터: `teacher_shy.png`
**담임선생님**: 다음에도 여기서 볼래? 오늘 못 한 얘기가 많네.

---

### `hidden_perfect_homeroom_3g`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_4b`

- 캐릭터: `teacher_shy.png`
**{name}**: *서로의 휴대폰에 이름과 번호를 저장한다. 예전 학교 연락망에는 없던 정보다.*

---

### `hidden_perfect_homeroom_4b`
- 배경: `bookstore.png`
- 다음: `hidden_perfect_homeroom_4c`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *두 번째 만남, 서점에서 자기 책을 한 권 꺼낸다.* 이번엔 출간본이야. 독자로 읽어줄래?

---

### `hidden_perfect_homeroom_4c`
- 배경: `room_my.png`
- 다음: `hidden_perfect_homeroom_4d`

- 캐릭터: `teacher_shy.png`
**{name}**: *혼자 사는 집으로 돌아와 책을 읽는다. 새벽까지, 이번에는 독자의 속도로.*

---

### `hidden_perfect_homeroom_4d`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_4e`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *다음 만남, 카페. 커피를 한 번 젓고 손을 뗀다.* ...어땠어?

---

### `hidden_perfect_homeroom_4e`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_4f`

- 캐릭터: `teacher_normal.png`
**{name}**: *세 번째 만남은 {name}이 먼저 정했다. 퇴근 후, 꽃집 앞에서 기다린다.*

---

### `hidden_perfect_homeroom_4f`
- 배경: `ending_perfect_teacher.png`
- 다음: `hidden_perfect_homeroom_4g`

- 캐릭터: `없음`
**{name}**: *꽃다발을 건넨다.* 책 축하도 맞고, 다음에도 보고 싶다는 뜻도 맞아요.

---

### `hidden_perfect_homeroom_4g`
- 배경: `ending_perfect_teacher.png`
- 다음: `hidden_perfect_homeroom_ending_title`

- 캐릭터: `없음`
**담임선생님**: *꽃다발을 받아 들고 {name}을 본다.* 나도 같은 뜻으로 받아도 돼?

---

### `hidden_perfect_homeroom_ending_title`
- 배경: `ending_perfect_teacher.png`
- 다음: `hidden_perfect_homeroom_5`

- 캐릭터: `없음`
**—**: ─── 담임선생님 PERFECT END ───

---

### `hidden_perfect_homeroom_5`
- 배경: `street.png`
- 다음: `hidden_perfect_homeroom_ep1`

- 캐릭터: `teacher_shy.png`
**{name}**: *둘은 카페를 나와 같은 속도로 걷는다. 꽃다발 포장지가 저녁 바람에 가볍게 울린다.*

---

### `hidden_perfect_homeroom_ep1`
- 배경: `ending_perfect_teacher.png`
- 다음: `hidden_perfect_homeroom_ep2`

- 캐릭터: `없음`
**{name}**: *학교 이야기보다 지난 4년 이야기가 더 길었다.*

---

### `hidden_perfect_homeroom_ep2`
- 배경: `ending_perfect_teacher.png`
- 다음: `hidden_perfect_homeroom_ep3`

- 캐릭터: `없음`
**{name}**: *다음 약속은 번갈아 정했다. 목요일은 그녀가, 토요일은 {name}이 골랐다.*

---

### `hidden_perfect_homeroom_ep3`
- 배경: `ending_perfect_teacher.png`
- 다음: `hidden_perfect_homeroom_ep4`

- 캐릭터: `없음`
**{name}**: *두 번째 책이 출간됐다. 헌정사에는 특정한 이름 대신 '끝까지 읽고 자기 말로 답해준 독자들에게'라고 적혀 있다.*

---

### `hidden_perfect_homeroom_ep4`
- 배경: `ending_perfect_teacher.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**{name}**: *서로의 일을 묻고 다음 주말을 정한다. 과거의 관계는 지워야 할 비밀도, 꺼내 즐길 농담도 아니다. 이미 끝난 시간으로 남겨둔다.*

---

### `hidden_true_homeroom_1`
- 배경: `bookstore.png`
- BGM: `ending.mp3`
- 플래그: `ending_true_love`
- 다음: `hidden_true_homeroom_2`

- 캐릭터: `없음`
**{name}**: *졸업 후 4년. 학교를 떠나 대학을 마치고 혼자 생활비를 버는 중이다. 퇴근길 독립서점에서 익숙한 이름의 북토크 포스터를 본다.*

---

### `hidden_true_homeroom_2`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_2_b`

- 캐릭터: `teacher_sad.png`
**{name}**: *행사가 끝난 뒤 사인대 앞이 비었다. 베이지 가디건 차림의 작가가 책을 정리하다 고개를 든다.*

---

### `hidden_true_homeroom_2_b`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *{name}의 목에는 회사 출입증이, 상대의 손에는 출석부 대신 자기 이름이 인쇄된 책이 들려 있다.*

---

### `hidden_true_homeroom_3`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_3_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 오랜만이네. 이제 뭐라고 불러야 하지?

---

### `hidden_true_homeroom_3_b`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_3_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 이름으로 불러주세요. 저도 이제 학생은 아니니까요.

---

### `hidden_true_homeroom_3_c`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 그건 천천히 하자. 오늘은 독자로 온 거지?

---

### `hidden_true_homeroom_4`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_4_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *출입증을 한번 보고 웃는다.* 진짜 네 생활을 꾸리고 있네.

---

### `hidden_true_homeroom_4_b`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_4_c`

- 캐릭터: `teacher_normal.png`
**{name}**: *학교 얘기보다 서로의 직장과 요즘 읽는 책 이야기가 먼저 나온다.*

---

### `hidden_true_homeroom_4_c`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_4_d`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *진열대에서 책 한 권을 꺼낸다. 교탁 서랍에 있던 원고와 같은 제목이다.*

---

### `hidden_true_homeroom_4_d`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_4_e`

- 캐릭터: `teacher_sad.png`
**담임선생님**: 결국 끝냈어. 그때 문예부가 남긴 합평도 오래 들여다봤고.

---

### `hidden_true_homeroom_4_e`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_4_f`

- 캐릭터: `teacher_normal.png`
**{name}**: 제가 남긴 표시도 기억나요?

---

### `hidden_true_homeroom_4_f`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_4_g`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 누가 썼는지는 안 찾기로 했잖아. 다만 마지막 장에 질문이 유난히 많았던 건 기억해.

---

### `hidden_true_homeroom_4_g`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_4_h`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *책 모서리를 한 번 반듯하게 맞춘다. 예전처럼 컵홀더를 접지는 않는다.*

---

### `hidden_true_homeroom_4_h`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 행사 끝났는데 시간 괜찮아? 커피 한 잔 하고 싶어. 불편하면 여기서 인사만 해도 되고.

---

### `hidden_true_homeroom_5`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_5_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 예전 학생이 아니라, 지금의 너와 다시 이야기해보고 싶어.

---

### `hidden_true_homeroom_5_b`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_5_c`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임은 계산대로 가지 않고 {name}의 대답을 기다린다.*

---

### `hidden_true_homeroom_5_c`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_6`

- 캐릭터: `teacher_normal.png`
**{name}**: 저도 지금의 선생님을 다시 알고 싶어요. 호칭은 천천히 정하고요.

---

### `hidden_true_homeroom_6`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_6_b`

- 캐릭터: `teacher_shy.png`
**담임선생님**: 좋아. 그럼 일단 커피부터. 다음 얘기는 마시면서 하자.

---

### `hidden_true_homeroom_6_b`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_7`

- 캐릭터: `teacher_shy.png`
**{name}**: *카페까지 걷는 동안 서로의 출퇴근길과 요즘 일을 묻는다.*

---

### `hidden_true_homeroom_7`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_7_b`

- 캐릭터: `teacher_shy.png`
**{name}**: 좋아요. 다음 약속도 하고 싶어요.

---

### `hidden_true_homeroom_7_b`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_7_c`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *웃으며 휴대폰을 꺼낸다. 연락처 화면을 먼저 보여주고 기다린다.*

---

### `hidden_true_homeroom_7_c`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_7_d`

- 캐릭터: `teacher_smile.png`
**담임선생님**: 오늘부터 예전 호칭을 억지로 지우진 말자. 대신 서로 이름부터 다시 배우자.

---

### `hidden_true_homeroom_7_d`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_8`

- 캐릭터: `teacher_normal.png`
**{name}**: *이름을 한 번 불러본다. 상대도 {name}의 이름을 천천히 되돌려준다.*

---

### `hidden_true_homeroom_8`
- 배경: `ending_true_teacher.png`
- 다음: `hidden_true_homeroom_ending_title`

- 캐릭터: `없음`
**담임선생님**: 다음 주에도 만날래?

---

### `hidden_true_homeroom_ending_title`
- 배경: `ending_true_teacher.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**—**: ─── 담임선생님 TRUE LOVE END ───

---

### `hidden_good_homeroom_1`
- 배경: `bookstore.png`
- BGM: `night2.mp3`
- 다음: `hidden_good_homeroom_2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *졸업 후 5년. 독립서점 낭독회에서 책을 정리하다 {name}을 알아본다.* ...오랜만이네.

---

### `hidden_good_homeroom_2`
- 배경: `bookstore.png`
- 다음: `hidden_good_homeroom_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *행사 출구에서 다시 마주친다. 서로 명함을 꺼내다 같은 순간 멈춘다.*

---

### `hidden_good_homeroom_3`
- 배경: `bookstore.png`
- 다음: `hidden_good_homeroom_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 책 다 읽고도 할 말이 남으면 연락해. 이번엔 독자와 작가로.

---

### `hidden_good_homeroom_4`
- 배경: `ending_good_teacher.png`
- 다음: `hidden_good_homeroom_ending_title`

- 캐릭터: `없음`
**{name}**: *누가 먼저랄 것 없이 연락처 화면을 연다. 다음 만남을 정할지는 책을 다 읽은 뒤 결정하기로 한다.*

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
- 배경: `cafe.png`
- BGM: `ending.mp3`
- 플래그: `ending_perfect`, `isDating_Nurse`
- 다음: `hidden_perfect_nurse_2`

- 캐릭터: `없음`
**{name}**: *졸업 후 5년. 타지에서 직장을 잡고 혼자 산 지 2년째. 주말 지역 건강행사에 들렀다가 응급처치 강사 명찰에서 익숙한 이름을 본다. 이주원.*

---

### `hidden_perfect_nurse_2`
- 배경: `cafe.png`
- 다음: `hidden_perfect_nurse_3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *행사를 마치고 가운 위 명찰을 뗀다.* ...{name}? 여기서 볼 줄은 몰랐네.

---

### `hidden_perfect_nurse_3`
- 배경: `cafe.png`
- 다음: `hidden_perfect_nurse_3b`

- 캐릭터: `없음`
**{name}**: *행사장 맞은편 카페. 테이블을 사이에 두고 앉는다. 응급처치 실습용 밴드는 상자 안에 그대로 있다.*

---

### `hidden_perfect_nurse_3b`
- 배경: `cafe.png`
- 다음: `hidden_perfect_nurse_4`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 예전엔 네 상담을 맡았잖아. 지금 이렇게 따로 앉아도 괜찮겠어?

---

### `hidden_perfect_nurse_4`
- 배경: `cafe.png`
- 다음: `hidden_perfect_nurse_4b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 불편하면 여기서 인사만 해도 돼. 난 네가 요즘 어떻게 지내는지만 궁금했어.

---

### `hidden_perfect_nurse_4b`
- 배경: `ending_perfect_nurse.png`
- 다음: `hidden_perfect_nurse_5`

- 캐릭터: `없음`
**{name}**: 괜찮아요. 저도 오늘은 학교 얘기 말고 선생님 얘기 듣고 싶어요.

---

### `hidden_perfect_nurse_5`
- 배경: `ending_perfect_nurse.png`
- 다음: `hidden_perfect_nurse_5b`

- 캐릭터: `없음`
**보건선생님**: 그럼 다음 만남은 진료도 상담도 아닌 걸로 잡을까?

---

### `hidden_perfect_nurse_5b`
- 배경: `ending_perfect_nurse.png`
- 다음: `hidden_perfect_nurse_ending_title`

- 캐릭터: `없음`
**{name}**: *달력을 번갈아 보다가 둘 다 비는 토요일을 찾는다.*

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
**{name}**: *몇 달 뒤. 각자 일을 마친 주말, 같은 식탁에서 늦은 아침을 먹는다. 밴드는 약상자 안에만 있다.*

---

### `hidden_perfect_nurse_ep2`
- 배경: `ending_perfect_nurse.png`
- 다음: `hidden_perfect_nurse_ep3`

- 캐릭터: `없음`
**{name}**: *주원은 대학병원 교육팀으로 옮겼다. 환자뿐 아니라 신규 간호사들도 이름을 부른다. — 이주원 선생님.*

---

### `hidden_perfect_nurse_ep3`
- 배경: `ending_perfect_nurse.png`
- 다음: `hidden_perfect_nurse_ep4`

- 캐릭터: `없음`
**{name}**: *로즈마리 화분은 둘이 고른 집 창가에 놓였다. 물 주는 날은 번갈아 맡는다.*

---

### `hidden_perfect_nurse_ep4`
- 배경: `ending_perfect_nurse.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**{name}**: *연두색 노트 마지막 장에는 한 줄이 남아 있다. '오래 걸렸지만, 이제 내 선택으로 다시 시작할게.'*

---

### `hidden_true_nurse_1`
- 배경: `street.png`
- BGM: `ending.mp3`
- 플래그: `ending_true_love`
- 다음: `hidden_true_nurse_2`

- 캐릭터: `없음`
**{name}**: *졸업 후 4년. 독립해 산 지 1년째 되는 봄, 퇴근길 지역 건강 캠페인 부스에서 익숙한 목소리를 듣는다.*

---

### `hidden_true_nurse_2`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_2_b`

- 캐릭터: `nurse_normal.png`
**{name}**: *행사가 끝난 뒤 근처 카페에서 다시 마주 앉는다. 부스에서 쓰던 밴드와 안내지는 가방 안에 정리돼 있다.*

---

### `hidden_true_nurse_2_b`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_2_c`

- 캐릭터: `nurse_normal.png`
**{name}**: *테이블 위에는 서로 다른 회사 출입증이 놓인다. 둘 다 자기 하루를 책임지고 돌아온 사람의 얼굴이다.*

---

### `hidden_true_nurse_2_c`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_2_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 오랜만이네. 잘 지냈어?

---

### `hidden_true_nurse_2_d`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_3`

- 캐릭터: `nurse_normal.png`
**{name}**: 네. 저도 이제 일해요. 혼자 살고 있고요.

---

### `hidden_true_nurse_3`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_3_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 호칭부터 어렵네. 예전처럼 선생님이라고 부르면 어색하려나.

---

### `hidden_true_nurse_3_b`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_4`

- 캐릭터: `nurse_normal.png`
**{name}**: 천천히 바꾸죠. 급할 건 없잖아요.

---

### `hidden_true_nurse_4`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 전학 온 날, 어지럽다고 들어왔던 건 기억나.

---

### `hidden_true_nurse_5`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그때는 선생과 학생이었으니 거기까지였고.

---

### `hidden_true_nurse_5_b`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5_c`

- 캐릭터: `nurse_normal.png`
**{name}**: *주원이 커피잔에서 손을 떼고 {name}의 대답을 기다린다.*

---

### `hidden_true_nurse_5_c`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 지금은 우연히 다시 만났네.

---

### `hidden_true_nurse_5_d`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5_e`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그래서 물어볼게. 다음에도 볼래?

---

### `hidden_true_nurse_5_e`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5_f`

- 캐릭터: `nurse_normal.png`
**{name}**: 치료나 상담 말고요?

---

### `hidden_true_nurse_5_f`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *건조하게 웃는다.* 응. 밴드는 3분 안에 붙여야 하고.

---

### `hidden_true_nurse_6`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_7`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 불편하면 여기서 끝내도 돼. 괜찮다면 다음 주에 다시 보고 싶어.

---

### `hidden_true_nurse_7`
- 배경: `street.png`
- 다음: `hidden_true_nurse_7_b`

- 캐릭터: `없음`
**{name}**: *카페를 나와 지하철역까지 나란히 걷는다. 누구도 상대 쪽으로 길을 틀지 않는다.*

---

### `hidden_true_nurse_7_b`
- 배경: `street.png`
- 다음: `hidden_true_nurse_7_c`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 다음 주 얘기는 집에 가서 답해도 돼.

---

### `hidden_true_nurse_7_c`
- 배경: `street.png`
- 다음: `hidden_true_nurse_7_d`

- 캐릭터: `없음`
**{name}**: 거절 아니에요. 저도 다시 만나고 싶어요.

---

### `hidden_true_nurse_7_d`
- 배경: `street.png`
- 다음: `hidden_true_nurse_8`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *휴대폰을 꺼내 일정표를 연다.* 그럼 다음 주말. 서로 시간 맞는 날로.

---

### `hidden_true_nurse_8`
- 배경: `ending_true_nurse.png`
- 다음: `hidden_true_nurse_ending_title`

- 캐릭터: `없음`
**보건선생님**: 다음엔 건강 행사 말고, 그냥 만나자.

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
**{name}**: *한 달 뒤, 둘은 주말마다 카페를 바꿔가며 만났다.*

---

### `hidden_true_nurse_8_c`
- 배경: `ending_true_nurse.png`
- 다음: `hidden_true_nurse_8_d`

- 캐릭터: `없음`
**{name}**: *카페 창문에는 지금의 두 사람만 비친다. 학교의 흰 커튼은 더 이상 겹치지 않는다.*

---

### `hidden_true_nurse_8_d`
- 배경: `ending_true_nurse.png`
- 다음: `hidden_true_nurse_8_e`

- 캐릭터: `없음`
**{name}**: *학교 얘기는 길지 않았다. 요즘 일과 다음 주말 얘기가 더 많았다.*

---

### `hidden_true_nurse_8_e`
- 배경: `ending_true_nurse.png`
- 다음: `hidden_true_nurse_8_f`

- 캐릭터: `없음`
**보건선생님**: 그때 학교를 떠날까 고민한 적은 있어.

---

### `hidden_true_nurse_8_f`
- 배경: `ending_true_nurse.png`
- 다음: `hidden_true_nurse_8_g`

- 캐릭터: `없음`
**{name}**: 결국 남은 건 선생님 선택이었죠?

---

### `hidden_true_nurse_8_g`
- 배경: `ending_true_nurse.png`
- 다음: `hidden_true_nurse_8_h`

- 캐릭터: `없음`
**보건선생님**: 응. 누가 붙잡아서가 아니라 내가 정한 거야. 지금 여기에 온 것도 그렇고.

---

### `hidden_true_nurse_8_h`
- 배경: `ending_true_nurse.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**{name}**: 그럼 다음 주도 볼게요. 제 선택으로.

---

### `hidden_good_nurse_1`
- 배경: `street.png`
- BGM: `night2.mp3`
- 다음: `hidden_good_nurse_2`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *졸업 후 5년. 지역 건강행사 접수대에서 {name}을 알아본다.* 웬일이야, 여기서 다 보네.

---

### `hidden_good_nurse_2`
- 배경: `street.png`
- 다음: `hidden_good_nurse_2_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 행사 끝나면 커피 한 잔 할래? 오랜만에 근황이나 듣게.

---

### `hidden_good_nurse_2_b`
- 배경: `street.png`
- 다음: `hidden_good_nurse_2_c`

- 캐릭터: `nurse_normal.png`
**{name}**: 괜찮아요? 예전 일도 있는데.

---

### `hidden_good_nurse_2_c`
- 배경: `street.png`
- 다음: `hidden_good_nurse_2_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *말을 고른다.* 불편하면 인사만 하고 가도 돼. 선택은 네가 해.

---

### `hidden_good_nurse_2_d`
- 배경: `street.png`
- 다음: `hidden_good_nurse_3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *행사 상자에 남은 밴드를 정리한다. 이번에는 아무것도 건네지 않고 기다린다.*

---

### `hidden_good_nurse_3`
- 배경: `cafe.png`
- 다음: `hidden_good_nurse_3_b`

- 캐릭터: `nurse_normal.png`
**{name}**: *카페에 도착한 뒤 서로 휴대폰을 꺼낸다. 누가 먼저랄 것 없이 연락처 화면을 연다.*

---

### `hidden_good_nurse_3_b`
- 배경: `cafe.png`
- 다음: `hidden_good_nurse_4`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 다음 연락은 아픈 얘기 말고 다른 걸로 해.

---

### `hidden_good_nurse_4`
- 배경: `ending_good_nurse.png`
- 다음: `hidden_good_nurse_ending_title`

- 캐릭터: `없음`
**{name}**: *{name}이 먼저 다음 주말의 빈 시간을 보여준다. 주원도 자기 일정표를 나란히 펼친다.*

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
- 배경: `park.png`
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
**{name}**: *소설의 마지막 문장 아래에 잉크가 조금 번져 있다.*

---

### `perfect_yuna_5`
- 배경: `ending_perfect_yuna.png`
- 다음: `perfect_epilogue_1_yuna`

- 캐릭터: `없음`
**유나**: *자리에서 일어나 안겼다. 아무 말 없이. 깨진 창문 사이로 들어온 빛이 바닥에 길게 놓인다. 등 뒤의 손이 늦게 멈춘다.*

---

### `perfect_epilogue_1_yuna`
- 배경: `ending_perfect_yuna.png`
- 다음: `perfect_epilogue_bridge_yuna`

- 캐릭터: `없음`
**{name}**: *매일 같은 자리에 앉았다. 유나는 같은 페이지를 오래 붙잡지 않았다.*

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
**{name}**: *유나의 첫 장편소설이 출판됐다. 헌정사에는 한 줄이 적혀 있다. '세 번째 곡을 같이 들어 준 사람에게.'*

---

### `perfect_epilogue_3_yuna`
- 배경: `ending_perfect_yuna.png`
- 다음: `perfect_epilogue_4_yuna`

- 캐릭터: `없음`
**유나**: *여전히 말이 적다. {name}에게 보내는 쪽지는 조금 길어졌다.*

---

### `perfect_epilogue_4_yuna`
- 배경: `ending_perfect_yuna.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── PERFECT END (유나) ───

---

### `bitter_yuna_1`
- 배경: `park.png`
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
**유나**: 여길 아는 건 나뿐이었는데.

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
**유나**: *해치 위 낮은 옥상. 바람에 노트 귀퉁이가 들린다.*

---

### `true_yuna_4`
- 배경: `yuna_hideout.png`
- 다음: `true_yuna_5`

- 캐릭터: `yuna_smile.png`
**유나**: *휴대폰 재생목록을 연다. 세 번째 곡 옆에 작은 별표가 붙어 있다.*

---

### `true_yuna_5`
- 배경: `yuna_hideout.png`
- 다음: `true_yuna_5_b`

- 캐릭터: `yuna_smile.png`
**{name}**: 그때 그 세 번째 곡?

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
**유나**: 오늘은 여기서 같이 들어.

---

### `true_yuna_7`
- 배경: `yuna_hideout.png`
- 다음: `true_yuna_bridge`

- 캐릭터: `yuna_shy.png`
**{name}**: *노트에 재생목록이 옮겨 적혀 있다. 세 번째 곡 제목 옆에는 첫 쪽지와 같은 연보라색 점이 찍혀 있다. 유나가 재생 버튼을 누른다.*

---

### `true_yuna_bridge`
- 배경: `ending_true_yuna.png`
- 다음: `true_epilogue_1_yuna`

- 캐릭터: `없음`
**{name}**: *노트에 찍힌 연보라색 점이 아직 마르지 않았다.*

---

### `true_epilogue_1_yuna`
- 배경: `ending_true_yuna.png`
- 다음: `true_epilogue_2`

- 캐릭터: `없음`
**{name}**: *5일이었다. 유나가 쪽지 밖에서 말하기까지.*

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
**{name}**: *체육관. 공은 보관함에 들어가 있고, 벤치 위에는 무릎 보호대와 재활 일정표가 놓여 있다.*

---

### `perfect_dain_2`
- 배경: `gym.png`
- 다음: `perfect_dain_2b`

- 캐릭터: `dain_normal.png`
**다인**: 나 다음 주부터 제대로 재활받기로 했어.

---

### `perfect_dain_2b`
- 배경: `gym.png`
- 다음: `perfect_dain_3`

- 캐릭터: `dain_normal.png`
**다인**: *예약 완료 화면을 보여준 뒤 휴대폰을 무릎 보호대 옆에 놓는다.*

---

### `perfect_dain_3`
- 배경: `gym.png`
- 다음: `perfect_dain_3b`

- 캐릭터: `dain_normal.png`
**다인**: 프로는 아직 모르겠어. 그래도 코트 밖에 남는 방법은 찾아보려고.

---

### `perfect_dain_3b`
- 배경: `gym.png`
- 다음: `perfect_dain_4`

- 캐릭터: `dain_normal.png`
**다인**: *중계 영상을 멈추고 화면 아래 해설자 이름을 가리킨다.*

---

### `perfect_dain_4`
- 배경: `gym.png`
- 다음: `perfect_dain_5`

- 캐릭터: `dain_shy.png`
**{name}**: 선수 아니어도 네가 배구 얘기할 때 제일 재밌어. 첫 방송은 내가 볼게.

---

### `perfect_dain_5`
- 배경: `ending_perfect_dain.png`
- 다음: `perfect_epilogue_1_dain`

- 캐릭터: `없음`
**다인**: *한 걸음 다가와 {name}의 어깨에 팔을 두른다. {name}이 허리를 받치자 오른발에 힘을 빼고 웃는다.*

---

### `perfect_epilogue_1_dain`
- 배경: `ending_perfect_dain.png`
- 다음: `perfect_epilogue_1b_dain`

- 캐릭터: `없음`
**{name}**: *다인은 팔을 두른 채 한참 웃다가 천천히 두 발을 바닥에 고쳐 딛는다.*

---

### `perfect_epilogue_1b_dain`
- 배경: `ending_perfect_dain.png`
- 다음: `perfect_epilogue_1c_dain`

- 캐릭터: `없음`
**{name}**: *오른쪽 무릎에 체중이 쏠리기 전에 {name}의 어깨를 짚고 균형을 잡는다.*

---

### `perfect_epilogue_1c_dain`
- 배경: `ending_perfect_dain.png`
- 다음: `perfect_epilogue_bridge_dain`

- 캐릭터: `없음`
**{name}**: *재활이 있는 날이면 다인은 먼저 속도를 정한다. {name}은 그 보폭에 맞춰 걷는다.*

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
**{name}**: *다인은 스포츠미디어학과에 진학해 교내 경기 중계부에 들어갔다. 첫 방송 전날 대본을 세 번이나 고쳤다.*

---

### `perfect_epilogue_3_dain`
- 배경: `ending_perfect_dain.png`
- 다음: `perfect_epilogue_4_dain`

- 캐릭터: `없음`
**{name}**: *통증이 있는 날에는 훈련 대신 재활 기록과 경기 영상을 함께 본다. 쉬어야 한다는 말도 이제 다인이 먼저 한다.*

---

### `perfect_epilogue_4_dain`
- 배경: `ending_perfect_dain.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── PERFECT END (다인) ───

---

### `bitter_dain_1`
- 배경: `park.png`
- BGM: `night2.mp3`
- 플래그: `ending_bittersweet`
- 다음: `bitter_dain_2`

- 캐릭터: `없음`
**{name}**: *고백은 했다. 한 달쯤 지나서, 체육관 앞에서 기다리자는 문자가 왔다.*

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
**{name}**: *행사가 끝난 체육관. 벽에 기대 나란히 앉아 있다. 다인의 휴대폰에는 병원 예약 화면이 열려 있다.*

---

### `true_dain_2`
- 배경: `gym.png`
- 다음: `true_dain_2b`

- 캐릭터: `dain_shy.png`
**다인**: *휴대폰을 {name} 쪽으로 내민다.*

---

### `true_dain_2b`
- 배경: `gym.png`
- 다음: `true_dain_3`

- 캐릭터: `dain_shy.png`
**{name}**: *월요일 오후 4시 30분, 재활 진료 예약 완료.*

---

### `true_dain_3`
- 배경: `gym.png`
- 다음: `true_dain_4`

- 캐릭터: `dain_normal.png`
**다인**: 코치랑 부모님한테도 말했어. 엄청 혼났는데... 그래도 말하고 나니까 낫더라.

---

### `true_dain_4`
- 배경: `gym.png`
- 다음: `true_dain_5`

- 캐릭터: `dain_normal.png`
**{name}**: *예약 화면 아래에 스포츠 방송 동아리 지원서가 함께 열려 있다.*

---

### `true_dain_5`
- 배경: `gym.png`
- 다음: `true_dain_6`

- 캐릭터: `dain_shy.png`
**{name}**: 둘 다 해볼 거야?

---

### `true_dain_6`
- 배경: `gym.png`
- 다음: `true_dain_7`

- 캐릭터: `dain_shy.png`
**다인**: 몰라. 둘 다 해보고, 내가 더 재밌는 쪽 고를래.

---

### `true_dain_7`
- 배경: `gym.png`
- 다음: `true_dain_8`

- 캐릭터: `dain_laugh.png`
**{name}**: 그럼 첫 방송은 내가 볼게.

---

### `true_dain_8`
- 배경: `gym.png`
- 다음: `true_dain_8b`

- 캐릭터: `dain_laugh.png`
**다인**: 말 바꾸기 없기야. 재미없어도 끝까지 봐.

---

### `true_dain_8b`
- 배경: `gym.png`
- 다음: `true_dain_bridge`

- 캐릭터: `dain_laugh.png`
**다인**: *배구공을 옆에 내려놓고 새끼손가락을 내민다.*

---

### `true_dain_bridge`
- 배경: `ending_true_dain.png`
- 다음: `true_epilogue_1_dain`

- 캐릭터: `없음`
**{name}**: *두 사람의 새끼손가락이 걸린 채, 병원 예약 알림이 화면 위에 남아 있다.*

---

### `true_epilogue_1_dain`
- 배경: `ending_true_dain.png`
- 다음: `true_epilogue_2`

- 캐릭터: `없음`
**{name}**: *다인은 그날 처음으로 '괜찮아' 대신 다음 진료 날짜를 말했다.*

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
**{name}**: *다인의 아침 알람은 '웃어' 대신 재활 스트레칭 시간을 알린다. 가끔 중계 연습 영상을 보내고, {name}은 끝까지 본 뒤 감상을 답한다.*

---

### `true_epilogue_7`
- 배경: `park.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── TRUE LOVE END ───

---

### `day5_ending_good`
- 배경: `park.png`
- BGM: `night2.mp3`
- 다음: `good_1`

- 캐릭터: `없음`
**{name}**: *고백 후에도 달라진 건 많지 않았다. 일정이 하나 더 생겼다.*

---

### `good_1`
- 배경: `park.png`
- 다음: `good_1b`

- 캐릭터: `없음`
**{name}**: *며칠 동안 대화가 자꾸 끊겼다. 그래도 연락은 끊기지 않았다.*

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
**{name}**: *서연이 먼저 건넌다. 중간쯤에서 걸음을 늦춘다.*

---

### `good_5_seo`
- 배경: `ending_good_seoyeon.png`
- 다음: `good_epilogue_1`

- 캐릭터: `없음`
**{name}**: *건너편에서 다음 일정을 정했다. 시간과 장소만 말했다.*

---

### `good_epilogue_1`
- 배경: `ending_good_seoyeon.png`
- 다음: `good_epilogue_2`

- 캐릭터: `없음`
**{name}**: *서연의 문자가 온다. '내일 점심, 옥상. 이번엔 정식으로 예약했어.'*

---

### `good_epilogue_2`
- 배경: `ending_good_seoyeon.png`
- 다음: `good_epilogue_3`

- 캐릭터: `없음`
**{name}**: *사진 속 사용대장 정오 칸에 두 사람의 이름이 있다. 옆에는 서연 글씨로 '늦지 마.'*

---

### `good_epilogue_3`
- 배경: `ending_good_seoyeon.png`
- 다음: `good_5_cg_seo`

- 캐릭터: `없음`
**{name}**: *다음 날 서연은 빌린 열쇠로 문을 열고 바로 반납함에 넣는다. {name}이 올 때까지 문 앞에서 기다린다.*

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
**유나**: ...늦긴 했네. 그래도 네 문장 끝까지 읽었어.

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
**{name}**: *짧은 문장이다. 접힌 자리에 잉크가 번져 있다.*

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
**{name}**: *옥상 문을 나서 계단을 내려온다. 발걸음은 느리지만 멈추지 않는다.*

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
**유나**: *1권 다음에 2권. 오늘 다음에 내일. 유나는 쪽지를 접어 건넨다.*

---

### `good_epilogue_3_yuna`
- 배경: `ending_good_yuna.png`
- 다음: `good_5_cg_yuna`

- 캐릭터: `없음`
**{name}**: *쪽지 뒷면에 작은 글씨. '...결말은 같이 읽자.' 연보라색 잉크가 번져 있다.*

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
**다인**: 야, 우리 사이 아직 다 풀린 건 아니야. 그래도 무릎은 월요일에 다시 보기로 했어.

---

### `good_2_dain`
- 배경: `school.png`
- 다음: `good_3_dain`

- 캐릭터: `dain_pout.png`
**{name}**: *학교 교문 앞. 다인이 접어 둔 재활 안내지를 내민다.*

---

### `good_3_dain`
- 배경: `school.png`
- 다음: `good_4_dain`

- 캐릭터: `dain_pout.png`
**{name}**: *안내지를 받는다. 다인은 그걸 보고서야 웃는다.*

---

### `good_4_dain`
- 배경: `school.png`
- 다음: `good_5_dain`

- 캐릭터: `dain_normal.png`
**다인**: 오늘은 안 괜찮아. 그러니까 천천히 가자.

---

### `good_5_dain`
- 배경: `ending_good_dain.png`
- 다음: `good_epilogue_1_dain`

- 캐릭터: `없음`
**{name}**: *교문을 지나 함께 걸어 나온다. 걷는 속도는 다인이 정한다.*

---

### `good_epilogue_1_dain`
- 배경: `ending_good_dain.png`
- 다음: `good_epilogue_2_dain`

- 캐릭터: `없음`
**{name}**: *다인에게서 메시지가 왔다. '내일 아침 재활 산책 같이 할 사람?' 평소보다 조심스러운 문장이다.*

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
**{name}**: *답장을 보냈다. '콜. 속도는 네가 정해.'*

---

### `good_5_cg_dain`
- 배경: `ending_good_dain.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── GOOD END ───

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
**{name}**: *5일 동안 받은 메모와 사진을 한 폴더에 모은다. 누구의 것도 지우지는 않는다.*

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
**{name}**: *답장창을 비워 둔 채 휴대폰을 내려놓는다.*

---

### `alone_4`
- 배경: `ending_alone.png`
- 다음: `alone_5`

- 캐릭터: `없음`
**{name}**: *충전기에 꽂고 아침 알람을 맞춘다. 화면이 꺼진 방에 초침 소리만 남는다.*

---

### `alone_5`
- 배경: `ending_alone.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── ALONE END ───

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
