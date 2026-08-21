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
**{name}**: *4월의 교문 앞. 밟힌 꽃잎이 드문드문 붙어 있다. 새 교복의 접힌 선은 아직 팔꿈치에 남아 있고 전학 서류는 가방 안에서 납작하게 눌려 있다.*

---

### `start_3`
- 배경: `school.png`
- 다음: `name_input_scene`

- 캐릭터: `없음`
**{name}**: *주머니에서 핸드폰이 울리고 예전 학교 단체 카톡방에 익숙한 이름 하나가 떠 있다. 알림을 지우지 않은 채 화면을 끄고 다시 주머니에 넣는다.*

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
**{name}**: *낯선 교문 앞, 내 교복만 아직 접힌 선이 선명하다. 교문 옆에서 안경을 고쳐 쓰며 시간을 확인하는 검은 긴 머리의 여학생. 내가 가까워지자 얼굴을 든다.*

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
**서연**: *{name}의 이름을 한 번 더 확인한 뒤 클립보드 위 명단에 체크한다. 펜 끝이 명단 위에 남은 채 교복 명찰까지 훑는다.*

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
**{name}**: *서연은 이미 교문 안쪽으로 걸음을 옮겼다. 안내 파일 모서리가 걸음마다 흔들린다.*

---

### `seoyeon_choice`
- 배경: `school.png`
- 선택지:
  1. "일부러 마중 나온 거야?" → `choice_flirt_1` | Seoyeon +4
  2. "가이드비는 얼마야?" → `choice_joke_1` | Seoyeon +2
  3. "괜찮아, 대충 둘러보면 되지 뭐." → `choice_dismiss_1` | Seoyeon -3

- 캐릭터: `seyoun_normal.png`
**{name}**: *어떻게 반응할까?*

---

### `choice_dismiss_1`
- 배경: `school.png`
- 다음: `choice_dismiss_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *구두 굽이 교문 앞 보도블록을 짧게 긁는다. 몸은 앞을 향한 채 얼굴만 {name} 쪽으로 돌린다.*

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
**서연**: *클립보드를 팔 안쪽에 끼우고 교문 안쪽으로 걸어간다.*

---

### `choice_flirt_1`
- 배경: `school.png`
- 다음: `choice_flirt_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연의 구두가 반 바퀴 돌아선다. 안경테 위로 한쪽 눈썹이 올라간다.*

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
**서연**: *앞서 걷는다. 한 번 뒤돌아보고 {name}의 발소리가 가까워지자 속도를 늦추지 않는다.*

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
**서연**: *복도를 앞서 걷는다. 마주치는 학생들이 먼저 인사할 때마다 서연은 클립보드 끝을 한 번 들어 답한다.*

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
**서연**: *주머니에서 열쇠를 꺼내 손바닥 위에서 짤랑거린다.*

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
**서연**: *열쇠고리 소리가 뚝 끊긴다.* 눈치 빠르네.

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
**{name}**: *서연은 교실 앞에 서서 문패를 가리킨다.*

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
**서연**: *돌아선 서연이 클립보드를 든 손만 어깨 높이로 한 번 올린다.*

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
**{name}**: *교실 문을 열자 소음이 뚝 끊기고 가까운 책상 의자 몇 개가 문 쪽으로 돌아간다.*

---

### `classroom_2_b`
- 배경: `room_school.png`
- 다음: `classroom_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *교탁 앞에 담임선생님이 서 있다. 20대 후반. 가디건 단추 몇 개가 풀려 있고 출석부를 든 채다.*

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
**{name}**: {name}입니다. 잘 부탁드립니다. *담임이 출석부의 이름 옆에 점을 찍는다.*

---

### `classroom_5_b`
- 배경: `room_school.png`
- 다음: `classroom_5_c`

- 캐릭터: `teacher_normal.png`
**담임**: 그래, {name}. 외웠어. *출석부에 이름을 덧그으며 낮게 덧붙인다.* 난 이름은 한 번에 외워.

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
**담임**: 다인아, 목소리 낮춰. 그리고 교실에서는 유니폼 좀 그만 입고.

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
**담임선생님**: *출석부 모서리로 교탁을 두 번 두드리고 다인 쪽을 보지도 않은 채 다음 이름을 찾는다.*

---

### `classroom_dain_5_c`
- 배경: `room_school.png`
- 다음: `classroom_dain_5_d`

- 캐릭터: `teacher_normal.png`
**담임**: 에너지 좀 아껴. 아직 1교시도 안 시작했어.

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
**{name}**: *창가 맨 뒤쪽의 한 여학생은 턱을 괸 채 창밖만 본다. 내 이름이 칠판에 적히는 동안에도 책장만 한 장 넘어간다.*

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
**{name}**: *앞줄에서 누군가 속삭인다. '쟤한테 말 걸지 마. 무섭거든.' 유나는 페이지를 한 장 넘긴다.*

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
**민수**: *다인 쪽으로 턱짓한다.* 체력 관리.

---

### `classroom_dain_talk_1`
- 배경: `room_school.png`
- 다음: `classroom_dain_talk_2`

- 캐릭터: `minsu_normal.png`
**{name}**: *앞자리 이름표에는 '민수'라고 적혀 있었다.*

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
**{name}**: *'아마' 뒤에 다인의 시선이 볼 머신 쪽으로 간다. 공이 담긴 바구니는 코트 끝에 놓여 있다.*

---

### `classroom_yuna_note_1`
- 배경: `room_school.png`
- 다음: `classroom_yuna_note_3`

- 캐릭터: `yuna_bored.png`
**{name}**: *접힌 쪽지가 책상 위로 미끄러져 온다. 뒤를 돌아봐도 창가 자리의 은백색 머리 여학생은 여전히 창밖. 쪽지 글씨만 반듯하다.*

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
**{name}**: *유나 쪽을 보자 시선은 여전히 창밖이고 손만 책상 아래로 내려가 있다. 방금 전 쪽지가 미끄러져 온 방향이다.*

---

### `classroom_yuna_note_6`
- 배경: `room_school.png`
- 다음: `lunch_start`

- 캐릭터: `yuna_bored.png`
**{name}**: *수업 종이 울리자 유나는 다시 창밖을 보고 다인은 벌써 옆자리 애한테 말을 건다.*

---

## 1일차 — 점심 `day1_2_lunch`

### `lunch_start`
- 배경: `school_hallway.png`
- BGM: `daily.mp3`
- 다음: `lunch_start_4`

- 캐릭터: `없음`
**{name}**: *점심시간. 학생들로 찬 복도 끝에는 서연의 도시락 가방, 매점 앞 다인의 손짓, 도서관 쪽으로 향하는 유나의 쪽지가 한꺼번에 보인다.*

---

### `lunch_start_4`
- 배경: `school_hallway.png`
- 다음: `lunch_start_4_b`

- 캐릭터: `seyoun_normal.png`
**{name}**: *복도 끝에서 서연이 눈을 맞추더니 옥상 쪽을 손으로 가리킨다.*

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
**{name}**: *유나는 가방만 들고 교실을 빠져나가 도서관 방향으로 꺾는다.*

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
  - [4+] → `lunch_seo_1_aff_high`
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
**서연**: 앉을 거야?

---

### `lunch_seo_2`
- 배경: `top_school.png`
- 다음: `lunch_seo_3`

- 캐릭터: `seyoun_normal.png`
**{name}**: *옥상 바닥에는 흙 한 줌 보이지 않는다. 물방울 맺힌 화분 옆으로 접이식 의자가 벽선에 맞춰 늘어서 있다.*

---

### `lunch_seo_3`
- 배경: `top_school.png`
- 스탯: Seoyeon +2
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
**서연**: 아무나 데려오는 데는 아닌데. *의자를 하나 펼친다.* 오늘은 예외.

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
**서연**: *가방에서 같은 크기의 도시락통 두 개, 2인분을 포개어 꺼낸다.*

---

### `lunch_seo_9`
- 배경: `top_school.png`
- 다음: `lunch_seo_10`

- 캐릭터: `seyoun_normal.png`
**{name}**: 2인분인데?

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
**서연**: *젓가락을 건넨다.* 먹어. 식으면 맛없어.

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
**서연**: *젓가락 끝이 도시락 칸막이를 가볍게 친다.* 학교를 물었는데 밥 얘기네.

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
  1. "받아먹는다" → `lunch_seo_c1_1` | Seoyeon +4
  2. "직접 먹는 게 더 맛있을걸" → `lunch_seo_c2_1` | Seoyeon -2
  3. "정성까지 들였는데 한 입만 먹어줄게" → `lunch_seo_c1_1` | Seoyeon -3
  4. "이 정도면 앞으로도 도시락 부탁해도 되겠다" → `lunch_seo_c2_1` | Seoyeon -5

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
**{name}**: 맛있다.

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
**서연**: *계란말이를 자기 입에 넣는다. 씹는 동안 젓가락 끝으로 도시락 뚜껑을 두드린다.*

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
**서연**: *도시락 뚜껑의 모서리를 맞추다 두 번 어긋난다. 세 번째에야 딸깍 잠긴다.*

---

### `lunch_seo_after`
- 배경: `top_school.png`
- 다음: `lunch_seo_after_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *운동장 스피커에서 점심 종료를 알리는 예비음이 울린다.*

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
**서연**: *도시락 끈을 한 번 묶었다가 더 짧게 조인다.*

---

### `lunch_seo_after_7`
- 배경: `top_school.png`
- 다음: `lunch_seo_freetalk`

- 캐릭터: `seyoun_normal.png`
**{name}**: *도시락 매듭이 처음보다 단단해져 있다.*

---

### `lunch_seo_freetalk`
- 배경: `top_school.png`
- 타입: `free_talk`
- 다음: `lunch_end`
- 컨텍스트: "전학 첫날 점심. 옥상에서 서연과 도시락을 먹고 난 직후다. 아직 서먹하며 서로에 대한 호기심이 함께 남아 있다."
- 성격: "서연은 침착하고 자기 속도가 분명한 학생회장이다. 관심이 생겨도 성급히 드러내기보다 상황을 살피며 말과 행동 모두 솔직한 편이다."

- 캐릭터: `seyoun_normal.png`
**서연**: *도시락 뚜껑을 정리하고 접이식 의자를 신발 끝으로 한 뼘 밀어 둔다.* 바람 괜찮지?

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
- 스탯: Dain +8
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
**{name}**: 하자.

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
**다인**: 어? 나 졌네. 한 판 더.

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
**다인**: *동전을 카운터에 탁탁 놓고 소보로 두 개를 받아 든다.*

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
**다인**: *빵 봉지를 뜯는다.* 야, 너 운동 진짜 안 해?

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
**다인**: *딸기우유 팩 옆면이 손가락에 눌려 우그러진다.*

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
  1. "조금은. 알려줄 수 있어?" → `lunch_dain_c1_1` | Dain +5
  2. "아는 척한 거야." → `lunch_dain_c2_1` | Dain +2
  3. "그냥 분위기 맞춰 본 거야." → `lunch_dain_trap_1` | Dain -3

- 캐릭터: `dain_laugh.png`
**다인**: *빨대를 문 채 상체를 가까이 기울인다.*

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
**{name}**: *다인의 웃음소리가 매점 소음 위로 튄다. 의자가 뒤로 밀리고 다인은 이미 일어나 있다.*

---

### `lunch_dain_c2_1`
- 배경: `store.png`
- 다음: `lunch_dain_after`

- 캐릭터: `dain_laugh.png`
**다인**: 그래도 관심은 있는 거잖아. 오늘 방과후 체육관 와. 잠깐만 봐도 돼.

---

### `lunch_dain_trap_1`
- 배경: `store.png`
- 다음: `lunch_dain_after`

- 캐릭터: `dain_normal.png`
**다인**: 관심 없으면 없다고 해. 맞춰주는 건 더 싫어.

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
**다인**: *주먹으로 {name}의 어깨를 툭 치고 그대로 한 번 밀었다가 손을 뗀다.*

---

### `lunch_dain_freetalk`
- 배경: `store.png`
- 타입: `free_talk`
- 다음: `lunch_end`
- 컨텍스트: "전학 첫날 점심. 매점에서 다인과 가위바위보 내기를 했고 진 다인이 빵을 샀다. 아직 서로를 알아 가기 시작한 사이다."
- 성격: "다인은 생각보다 행동이 먼저 나가는 배구부 선수다. 솔직하고 반응이 빠르며 승부욕과 다정함이 자연스럽게 함께 드러난다."

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
**유나**: *쪽지는 없다. 유나는 열람실 구석에 먼저 앉아 책을 펴고 있다.*

---

### `lunch_yuna_2`
- 배경: `library_old.png`
- 다음: `lunch_yuna_4`

- 캐릭터: `yuna_normal.png`
**유나**: *열람실 구석에서 책을 편다. 맞은편 의자 다리가 바닥을 긁자 페이지 모서리를 누르던 손에 힘이 들어간다.*

---

### `lunch_yuna_4`
- 배경: `library_old.png`
- 스탯: Yuna +4
- 다음: `lunch_yuna_5`

- 캐릭터: `yuna_normal.png`
**유나**: *책장 한 장이 넘어간다. 유나는 대출 영수증 끝을 접어 책갈피 아래에 끼운다.*

---

### `lunch_yuna_5`
- 배경: `library_old.png`
- 다음: `lunch_yuna_5_b`

- 캐릭터: `yuna_normal.png`
**{name}**: *5초, 다시 10초가 지나도록 유나는 대출 영수증 끝만 접는다. 책장은 한 번도 넘어가지 않는다.*

---

### `lunch_yuna_5_b`
- 배경: `library_old.png`
- 다음: `lunch_yuna_7`

- 캐릭터: `yuna_normal.png`
**{name}**: 앉아도 돼?

---

### `lunch_yuna_7`
- 배경: `library_old.png`
- 다음: `lunch_yuna_8`

- 캐릭터: `yuna_normal.png`
**유나**: *책에서 시선을 떼지 않는다.* 시끄럽지 않으면.

---

### `lunch_yuna_8`
- 배경: `library_old.png`
- 다음: `lunch_yuna_10`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나는 책을 다시 펴면서 맞은편 의자에 놓인 가방만 책상 아래로 밀어 넣는다. 나는 그 빈자리에 앉는다.*

---

### `lunch_yuna_10`
- 배경: `library_old.png`
- 다음: `lunch_yuna_10_b`

- 캐릭터: `yuna_normal.png`
**{name}**: *벽시계 초침과 책장 넘어가는 소리가 엇갈린다. 맞은편 의자 다리는 바닥에 닿은 채 움직이지 않는다.*

---

### `lunch_yuna_10_b`
- 배경: `library_old.png`
- 다음: `lunch_yuna_12`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나의 책에는 오래된 책갈피가 끼워져 있고 흐릿한 글씨를 가리듯 손바닥이 올라간다. 나는 가까운 서가에서 아무 책이나 꺼낸다.*

---

### `lunch_yuna_12`
- 배경: `library_old.png`
- 다음: `lunch_yuna_13`

- 캐릭터: `yuna_normal.png`
**유나**: *책등 위로 시선을 올린다.* 그거 3권인데.

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
**{name}**: *유나가 자기 옆에 놓인 책을 하나 밀어준다.*

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
**유나**: 읽고 돌려줘.

---

### `lunch_yuna_18`
- 배경: `library_old.png`
- 다음: `lunch_yuna_20`

- 캐릭터: `yuna_normal.png`
**유나**: *유나는 다시 자기 책을 편다. 빌려준 책은 첫 문장이 보이도록 펼쳐 둔다.*

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
**유나**: *책갈피를 끼운다.* 조용히 있어줘서.

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
**유나**: *유나는 책을 품에 끼고 먼저 나간다. 문이 닫힌 뒤, 맞은편 의자만 반쯤 빠져 있다.*

---

### `lunch_yuna_choice`
- 배경: `library_old.png`
- 선택지:
  1. "그 책 재미있어? 나도 읽어볼까" → `lunch_yuna_c1_1` | Yuna +4
  2. "조용히 책만 읽는 거 좋아하나 봐." → `lunch_yuna_c2_1` | Yuna -2
  3. "책보다 내가 더 재밌게 해줄게" → `lunch_yuna_c2_1` | Yuna -3
  4. "말 안 해도 편한 사이가 될 수 있겠다" → `lunch_yuna_c2_1` | Yuna -4

- 캐릭터: `yuna_normal.png`
**{name}**: *유나는 아직 몇 발자국 앞이다. 두고 간 책을 들고 뒤를 쫓는다.*

---

### `lunch_yuna_c1_1`
- 배경: `library_old.png`
- 다음: `lunch_yuna_c1_2`

- 캐릭터: `yuna_normal.png`
**유나**: 이거? 꽤 괜찮아. 빌려줄까?

---

### `lunch_yuna_c1_2`
- 배경: `library_old.png`
- 다음: `lunch_yuna_freetalk`

- 캐릭터: `yuna_smile.png`
**유나**: 다 읽으면 얘기하자. 감상이 궁금해.

---

### `lunch_yuna_c2_1`
- 배경: `library_old.png`
- 다음: `lunch_yuna_c2_2`

- 캐릭터: `yuna_normal.png`
**유나**: 뭐, 할 게 없으니까.

---

### `lunch_yuna_c2_2`
- 배경: `library_old.png`
- 다음: `lunch_yuna_freetalk`

- 캐릭터: `yuna_normal.png`
**유나**: 근데 이 도서관, 나쁘지 않아. 조용해서.

---

### `lunch_yuna_freetalk`
- 배경: `library_old.png`
- 타입: `free_talk`
- 다음: `lunch_end`
- 컨텍스트: "전학 첫날 점심. 도서관에서 유나와 조용히 시간을 보내고 난 직후다. 아직 서로를 잘 모르지만 조용한 호기심이 오간다."
- 성격: "유나는 말수가 적고 조심성이 많은 독서가다. 먼저 관찰하고 생각한 뒤 말하며 신뢰가 쌓일수록 자기 생각을 조금씩 드러낸다."

- 캐릭터: `yuna_normal.png`
**유나**: *책갈피를 끼우고 표지를 덮는다. 손바닥으로 맞은편 의자를 가리킨다.* 조용한 거, 싫진 않지?

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
**{name}**: *방과후, 학교 구조도 익힐 겸 복도를 걷다가 주머니에서 울린 핸드폰을 꺼낸다. 이전 학교 단체 카톡방이다.*

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
**{name}**: *빈 답장창 아래에서 엄지가 전송 버튼 테두리만 문지른다.*

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
**다인**: 옥상에서 내려오는 거 봤거든. 둘이서?

---

### `after1_jealousy_seo_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "학생회장이랑 옥상에서 먹었어. (솔직)" → `after1_jealousy_seo_honest` | Dain -2 | 플래그: `day1_honest_to_dain`
  2. "그냥 혼자 돌아다녔어. (거짓말)" → `after1_jealousy_seo_lie` | 플래그: `day1_lied_to_dain`
  3. "네가 그렇게 찾을 줄 알았으면 같이 먹자고 할걸" → `after1_jealousy_seo_honest` | Dain -3
  4. "질투할 줄 알았으면 미리 말해줬을 텐데" → `after1_jealousy_seo_honest` | Dain -4

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
**다인**: 그래? 말이라도 해주지.

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
**{name}**: *가방 옆주머니에 접힌 쪽지가 걸려 있다. 유나의 필체다. '점심때 옥상에서 봤어. 학생회장이랑 사이 좋아 보였어.' 마지막 마침표가 번져 있다.*

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
**{name}**: *서연은 클립보드를 가슴 앞에 세운 채 답을 기다린다. 나는 답장창의 빈칸을 내려다본다.*

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
**다인**: 그 애 원래 사람 안 만나는데.

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
**{name}**: *옆으로 비키자 다인이 스쳐 지나간다. 세 걸음 더 간 운동화 밑창이 바닥을 길게 끌며 선다.*

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
**{name}**: *두어 걸음 뛰다가 오른쪽 무릎을 짚는다. 바로 손을 떼고 다시 속도를 낸다.*

---

### `after_miss_dain_7`
- 배경: `school_hallway.png`
- 플래그: `met_dain`
- 분기:
  - [`met_yuna`] → `after_yuna_skip`
  - [기본] → `after_miss_yuna_1`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인은 복도 모퉁이를 돌기 직전 손을 높이 든다. 아까 담임이 불렀던 이름이 뒤늦게 떠오른다. 다인.*

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
**{name}**: *도서관 앞을 지나가는데 붉은 눈의 여학생이 책을 읽으며 걸어간다. 타투가 드러난 팔로 책등을 조심스럽게 받치고 있다.*

---

### `after_miss_yuna_1_b`
- 배경: `library_old.png`
- 다음: `after_miss_yuna_1_c`

- 캐릭터: `yuna_normal.png`
**{name}**: 저기, 이거 떨어뜨렸어.

---

### `after_miss_yuna_1_c`
- 배경: `library_old.png`
- 다음: `after_miss_yuna_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *주워서 건넨다. 유나는 책을 겨드랑이에 끼우고 책갈피를 받는다.*

---

### `after_miss_yuna_2`
- 배경: `library_old.png`
- 제외조건: `met_yuna`
- 다음: `after_miss_yuna_3`

- 캐릭터: `yuna_normal.png`
**유나**: *책갈피 모서리를 엄지로 펴고 빛에 비춰 본다. 접힌 자국은 없다.*

---

### `after_miss_yuna_3`
- 배경: `library_old.png`
- 제외조건: `met_yuna`
- 다음: `after_miss_yuna_3_b`

- 캐릭터: `yuna_normal.png`
**유나**: 고마워.

---

### `after_miss_yuna_3_b`
- 배경: `library_old.png`
- 다음: `after_miss_yuna_4`

- 캐릭터: `yuna_normal.png`
**유나**: *책갈피를 책등 사이에 끼우고 돌아선다.*

---

### `after_miss_yuna_4`
- 배경: `library_old.png`
- 플래그: `met_yuna`
- 분기:
  - [`ate_lunch_seoyeon`] → `after_end`
  - [`chose_seoyeon_lunch`] → `after_end`
  - [기본] → `after_miss_seoyeon_1`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나는 책을 편 채 복도 모퉁이를 돈다. 접힌 책갈피 모서리만 책등 밖으로 나와 있다.*

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
**서연**: 바람 쐬러 올라간 건데 문이 열려 있길래.

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
**{name}**: *하교 방송이 흐르고 복도에 남은 학생이 하나둘 줄어든다.*

---

### `after_hidden_homeroom_1`
- 배경: `school_hallway.png`
- 다음: `after_hidden_homeroom_2`

- 캐릭터: `없음`
**{name}**: *하교하려다 아까 교실에 마지막까지 남아 출석부를 정리하던 담임을 생각한다. 교무실 앞에서 노크한 뒤 문을 연다.*

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
**{name}**: *담임이다. 가디건 한쪽 소매가 접혀 있고 출석부 사이에서 접힌 공지문이 삐져나와 있다.*

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
  2. "솔직히 좀 정신없습니다." → `after_homeroom_honest_1` | Teacher +6
  3. "전학생이라고 특별히 챙기실 필요는 없는데요." → `after_homeroom_choice_trap` | Teacher -2

- 캐릭터: `teacher_normal.png`
**담임선생님**: *클립보드를 내리고 {name}의 얼굴을 본다.*

---

### `after_homeroom_choice_trap`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_ok_6`

- 캐릭터: `teacher_worried.png`
**담임선생님**: *클립보드가 다시 가슴 앞에 선다.* 특별 취급이 아니라 담임 일인데. 알겠다. 여기까지 하자.

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
**담임선생님**: *책상 위 서류를 한쪽으로 밀어 의자 하나를 비운다. 등받이에 얹은 손으로 앉으라는 표시를 한다.*

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
**담임선생님**: *넘기려던 서류 한 장이 클립보드 위에 그대로 놓여 있다.*

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
**담임선생님**: *담임은 다시 책상 쪽으로 돌아선다. 짧게 인사하고 교무실 문을 닫는다.*

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
**담임**: 비슷한 거. 갑자기 새로운 곳에 던져진 적은 있지.

---

### `after_homeroom_honest_3_b`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *클립보드를 뒤집어 쥐고 엄지로 모서리를 문지른다.*

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
**담임선생님**: *엄지로 출석부의 접힌 모서리를 눌러 편다.*

---

### `after_homeroom_honest_choice2`
- 배경: `teacher_office.png`
- 선택지:
  1. "걱정이면 걱정이라고 하시면 되잖아요" → `after_homeroom_honest_choice2a` | Teacher +8
  2. "그럼 다음에도 주스로 부탁드릴게요, 선생님." → `after_homeroom_honest_choice2b` | Teacher -2
  3. "저만 특별히 챙겨주시는 거라고 생각해도 돼요?" → `after_homeroom_honest_choice2b` | Teacher -4
  4. "다음에도 선생님이 골라주신 걸로 부탁드릴게요" → `after_homeroom_honest_choice2b` | Teacher -5

- 캐릭터: `teacher_normal.png`
**{name}**: *출석부 모서리가 책상에 닿아 있다.*

---

### `after_homeroom_honest_choice2a`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_choice2a_b`

- 캐릭터: `teacher_shy.png`
**담임**: 그래, 걱정이야. 뭐, 티 났어?

---

### `after_homeroom_honest_choice2a_b`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_7`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *출석부를 책상 선에 맞춰 반듯하게 놓는다.*

---

### `after_homeroom_honest_choice2b`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_choice2b_b`

- 캐릭터: `teacher_smile.png`
**담임**: *자판기 쪽을 펜 끝으로 가리킨다.* 기대는 마. 자판기 주스야.

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
**담임선생님**: *담임은 출석부를 품에 끼고 교무실 안으로 들어간다. 접힌 공지문 끝이 출석부 사이로 삐져나와 있다.*

---

### `after_homeroom_freetalk`
- 배경: `school_hallway.png`
- 타입: `free_talk`
- 다음: `night_start`
- 컨텍스트: "전학 첫날 방과후. 담임이 적응 상태를 확인하려고 주인공을 불러 세웠고 주인공은 정신없었다고 솔직하게 답했다. 교사와 학생으로서 공식적인 첫 상담이 이어지는 상황이다."
- 성격: "담임은 무심해 보여도 학생의 상태를 놓치지 않는 20대 후반 교사다. 갈색 웨이브 긴 머리에 베이지 가디건을 입고 상담과 지도는 공식 절차 안에서 진행한다. 소설가를 꿈꾸던 과거가 있으며 지금도 창작에 관심이 있다."

- 캐릭터: `teacher_normal.png`
**담임**: *담임이 교무실 문을 반쯤 열어 둔 채 출석부를 옆구리에 낀다.*

---

### `after_hidden_nurse_intro`
- 배경: `school_hallway.png`
- 다음: `after_hidden_nurse_choice`

- 캐릭터: `없음`
**{name}**: *복도 형광등이 흔들려 보여 벽을 짚자 손바닥에 차가운 페인트가 닿는다. 바로 옆에 '보건실' 표지판이 걸려 있다.*

---

### `after_hidden_nurse_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "보건실에 들어간다" → `after_hidden_nurse_intro_b`
  2. "그냥 집에 간다" → `after_nurse_skip` | Nurse +0
  3. "선생님도 심심하실 테니 잠깐 말동무가 되어드린다" → `after_hidden_nurse_intro_b` | Nurse -3
  4. "건강 상담도 친해지는 데 도움이 되겠지" → `after_hidden_nurse_intro_b` | Nurse -4

- 캐릭터: `없음`
**{name}**: *아침부터 계속 사람들 틈에 있었다. 발걸음이 보건실 앞에서 멈췄다.*

---

### `after_hidden_nurse_intro_b`
- 배경: `school_hallway.png`
- 다음: `after_nurse_enter_1`

- 캐릭터: `없음`
**{name}**: *문 앞에 서서 한 번 숨을 고르고 손잡이에 손을 얹는다. 금속이 차갑다.*

---

### `after_nurse_enter_1`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_2`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건실 문을 연다. 소독약 냄새. 흰 커튼과 침대, 작은 책상. 하얀 가운의 여자가 안경 너머로 나를 본다. 목에 걸린 청진기가 책상 모서리에 닿아 작게 흔들린다.*

---

### `after_nurse_enter_2`
- 배경: `nurse_room.png`
- 스탯: Nurse +6
- 다음: `after_nurse_enter_2_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 오, 환자네.

---

### `after_nurse_enter_2_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_3`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 진료 기록지를 한 장 꺼내 윗줄을 펜으로 두드린다.*

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
**보건선생님**: 교복이 뻣뻣하잖아. 풀 냄새도 나고 벚꽃잎도 붙어 있고. 첫날 티가 나.

---

### `after_nurse_enter_4_d`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *전자체온계를 건네고 책상 아래에서 혈압계를 꺼낸다.*

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
**보건선생님**: 열은 없고 혈압이 조금 낮네.

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
**{name}**: *침대에 눕자 얇은 시트가 몸 아래에서 바스락거린다.*

---

### `after_nurse_enter_7_c`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_7_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *커튼을 반쯤 친다.* 물 줄까? 아님 따뜻한 거?

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
  1. "선생님이 더 피곤해 보이는데요" → `after_nurse_enter_choice_a` | Nurse +8 | 플래그: `nurse_choice_a`
  2. "보건실은 조용하네요" → `after_nurse_enter_choice_b` | Nurse +2 | 플래그: `nurse_choice_b`
  3. "여긴 선생님 혼자 계셔서 편하시겠어요." → `after_nurse_enter_trap` | Nurse -3 | 플래그: `nurse_choice_trap`

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
**보건선생님**: 그렇지? 여기 좋아. — 조용하고 소독약 냄새 빼면 완벽해.

---

### `after_nurse_enter_trap`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_8`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 편해 보였구나. 여긴 조용할수록 긴장하는 곳인데.

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
**보건선생님**: *물컵을 건넨다.* 물 마시고 쉬면 한결 나을 거야. 그래도 계속 어지러우면 담임한테도 말하자.

---

### `after_nurse_enter_8_d`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_9_b`

- 캐릭터: `nurse_normal.png`
**{name}**: *물을 마시며 보건실을 둘러본다. 창가 구석에 손바닥만 한 화분이 놓여 있다.*

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
**보건선생님**: *서랍 손잡이를 한 번 잡았다가 놓는다.*

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
**보건선생님**: *서랍이 닫히며 안쪽의 연두색 노트도 가려진다. 벽시계는 처음 누웠을 때보다 10분을 지나 있다.*

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
**보건선생님**: *진료 기록지 위에서 펜을 한 번 굴린다.* 아픈데도 참고 다니다가 뒤늦게 오면 혼나야지. 내가 여기 있는 이유가 그거고.

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
**보건선생님**: *피곤하다는 말에 목 뒤를 한 번 문지른다.*

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
- 컨텍스트: "전학 첫날 방과후. 어지러워 보건실에 들렀고 보건선생님이 증상을 확인하고 쉬게 한 뒤다. 처치 뒤의 상태와 학교 적응을 살피는 대화가 이어진다."
- 성격: "보건선생님은 여유로운 말투와 빠른 관찰력을 지녔다. 대학병원 간호사로 일하다 번아웃을 겪고 학교로 왔으며 필요할 때 가벼운 농담으로 학생의 긴장을 덜어 준다. 처치와 상담에서는 공식 경계를 지킨다."

- 캐릭터: `nurse_normal.png`
**보건선생님**: *체온계를 케이스에 넣고 진료 기록의 시간을 확인한다.* 이제 어지러운 건 좀 가라앉았어?

---

### `after_nurse_skip`
- 배경: `school_hallway.png`
- 다음: `night_start`

- 캐릭터: `없음`
**{name}**: *교문 쪽으로 걷는다.*

---

## 1일차 — 밤 `day1_4_night`

### `night_start`
- 배경: `room_my.png`
- BGM: `night1.mp3`
- 다음: `night_start_3`

- 캐릭터: `없음`
**{name}**: *방에 돌아와 침대에 누우니 교복 셔츠에 남은 벚꽃 냄새가 이불에 묻어난다.*

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
**서연**: *서비스야*

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
**유나**: *오늘 조용히 있어줘서 괜찮았어*

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
**{name}**: *'자리 비워 놓을게'를 다시 읽는 사이 화면이 먼저 어두워진다.*

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
**{name}**: *세 줄이 거의 동시에 도착했다. 답장창에는 벌써 'ㅋㅋ'가 찍혀 있다.*

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
**서연**: *안 오면 찾으러 갈 거야*

---

### `night_seo_late_3`
- 배경: `room_my.png`
- 다음: `night_end_1`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: *휴대폰을 내려놓자 잠금화면에 내일 등교 시간이 남는다.*

---

### `night_yuna_late_1`
- 배경: `room_my.png`
- 다음: `night_yuna_late_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *'메시지가 삭제되었습니다'라는 회색 말풍선이 떠 있다.*

---

### `night_yuna_late_2`
- 배경: `room_my.png`
- 다음: `night_yuna_late_3`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *곧 입력 중 표시가 켜졌다 꺼지지만 새 말풍선은 오지 않는다.*

---

### `night_yuna_late_3`
- 배경: `room_my.png`
- 다음: `night_yuna_late_4`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *답장창을 열었다 닫는 동안 화면이 절전 모드로 꺼진다.*

---

### `night_yuna_late_4`
- 배경: `room_my.png`
- 다음: `night_end_1`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *검어진 화면에 엄지 자국만 남아 있다.*

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
**{name}**: *핸드폰을 내려놓고 천장을 본다. 벚꽃 냄새는 아직 교복에 남아 있다.*

---

### `night_end_3`
- 배경: `room_my.png`
- 다음: `morning2_start`

- 캐릭터: `없음`
**{name}**: *잠금화면에 오늘 저장한 이름들이 남아 있다. 화면을 끄고도, 손가락이 한 번 더 전원 버튼을 찾는다.*

---

### `forced_violation_day1_after_seoyeon`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day1_seoyeon_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day1_seoyeon_excuse`

**서연**: *대화가 끝난 뒤에도 서연은 한동안 말이 없다. 다시 입을 열었을 때는 목소리가 차갑게 가라앉아 있다.* 방금 네가 한 짓, 없던 일처럼 넘길 생각 하지 마. 당분간 나한테 다가오지도, 연락하지도 마.

---

### `forced_violation_day1_seoyeon_apologize`
- 다음: `forced_violation_day1_resume`

**서연**: *서연은 사과를 듣고도 표정을 풀지 않는다.* 사과는 들었어. 그렇다고 없던 일이 되진 않아. 말한 대로 당분간 연락하지 마.

---

### `forced_violation_day1_seoyeon_excuse`
- 다음: `forced_violation_day1_resume`

**서연**: *서연이 말을 끊는다.* 오해? 내가 싫다고 한 순간부터 오해일 수 없어. 더 말하지 마.

---

### `forced_violation_day1_after_yuna`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day1_yuna_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day1_yuna_excuse`

**유나**: *대화가 끊긴 뒤, 유나는 짧게 숨을 고른다. 굳은 얼굴에는 경계만 남았다.* 내가 싫다는 걸 알면서 무시했잖아. 지금은 네 얼굴도 보기 싫어. 더는 연락하지 마.

---

### `forced_violation_day1_yuna_apologize`
- 다음: `forced_violation_day1_resume`

**유나**: *유나는 한참 뒤에야 짧게 대답한다.* 사과했다고 없어지진 않아. 이제 그만해.

---

### `forced_violation_day1_yuna_excuse`
- 다음: `forced_violation_day1_resume`

**유나**: *유나는 해명을 끝까지 듣지 않는다.* 싫다고 했어. 설명할 일 아니야.

---

### `forced_violation_day1_after_dain`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day1_dain_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day1_dain_excuse`

**다인**: *다인은 평소처럼 웃어넘기지 않는다. 한참 뒤에야 짧고 굳은 목소리가 돌아온다.* 장난 아니야. 내가 싫다는데 억지로 한 거, 절대 그냥 안 넘어가.

---

### `forced_violation_day1_dain_apologize`
- 다음: `forced_violation_day1_resume`

**다인**: *다인은 한참 뒤에야 짧게 답한다.* 그래. 그럼 오늘은 여기까지야. 다음 얘기는 내가 정할게.

---

### `forced_violation_day1_dain_excuse`
- 다음: `forced_violation_day1_resume`

**다인**: *다인의 목소리가 거칠어진다.* 아니. 핑계 대지 마. 싫다고 했는데도 한 건 너야.

---

### `forced_violation_day1_after_teacher`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day1_teacher_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day1_teacher_excuse`

**담임선생님**: *대화가 끝난 뒤, 담임은 더 단호한 목소리로 선을 긋는다.* 방금 행동은 명백히 선을 넘었어. 더는 가까이 오지 마. 이 일은 필요한 절차대로 처리할 거야.

---

### `forced_violation_day1_teacher_apologize`
- 다음: `forced_violation_day1_resume`

**담임선생님**: *담임은 짧게 숨을 고르고 말을 잇는다.* 사과는 들었어. 그래도 절차는 그대로 진행할 거야. 더 말하지 마.

---

### `forced_violation_day1_teacher_excuse`
- 다음: `forced_violation_day1_resume`

**담임선생님**: *담임이 해명을 끊는다.* 지금은 해명부터 할 상황이 아니야. 더 말하지 말고 거리를 둬.

---

### `forced_violation_day1_after_nurse`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day1_nurse_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day1_nurse_excuse`

**보건선생님**: *대화가 끊기자 보건선생님의 목소리에서 평소의 장난기가 사라진다.* 지금부터는 거리를 지켜. 방금 일은 기록하고 필요한 사람에게 알릴 거야.

---

### `forced_violation_day1_nurse_apologize`
- 다음: `forced_violation_day1_resume`

**보건선생님**: *보건선생님은 잠시 말이 없다가 단호하게 답한다.* 사과는 들을게. 그래도 기록과 연락은 그대로 할 거야. 오늘 대화는 여기까지.

---

### `forced_violation_day1_nurse_excuse`
- 다음: `forced_violation_day1_resume`

**보건선생님**: *보건선생님의 목소리가 더 낮아진다.* 오해라고 부르면 달라질 것 같아? 싫다는 의사를 무시한 건 사실이야.

---

### `forced_violation_day1_resume`

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
**{name}**: *클립보드를 오늘도 팔 안쪽에 붙인 서연이 먼저 다가온다. 교실 뒤쪽에서는 다인의 의자가 삐걱 밀리고 유나의 책장이 한 장 넘어간다.*

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
**{name}**: *유나의 펜촉이 쪽지 한가운데 잉크점을 남긴다.*

---

### `morning2_greet_dain_others_2`
- 배경: `room_school.png`
- 다음: `morning2_note_1`

- 캐릭터: `dain_laugh.png`
**{name}**: *교실 문이 닫힌 뒤 클립보드 두드리는 소리가 복도에서 한 번 들린다.*

---

### `morning2_greet_yuna_1`
- 배경: `room_school.png`
- 다음: `morning2_greet_yuna_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *자리에 앉으려는데 책상 위에 접힌 쪽지가 놓여 있다. '어제, 고마웠어.'*

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
**{name}**: *서연은 입가를 풀고 있지만 클립보드 끝으로 쪽지 모서리를 가리킨다.*

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
**{name}**: *교실 문을 여는 순간 손바닥이 등짝을 탁 친다.*

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
**서연**: *복도를 지나가다 교실 안을 들여다본다.* 어제 잘 잤어?

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
**서연**: *복도로 돌아가기 직전 클립보드 끝이 문틀에 한 번 닿았다가 떨어진다.*

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
**민수**: 그건 맞는데 그게 중요한 게 아니잖아.

---

### `morning2_dain_claim_3`
- 배경: `room_school.png`
- 다음: `morning2_dain_claim_4`

- 캐릭터: `dain_normal.png`
**{name}**: *다인은 서연의 뒷모습이 교실 안으로 사라질 때까지 바라본다.*

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
**{name}**: *교실 문 앞에 담임이 서 있다. 출석부를 들고 문 쪽을 힐끗 보다가 — 나와 눈이 마주친다.*

---

### `morning2_break_1`
- 배경: `school_hallway.png`
- 다음: `morning2_seo_dust_1`

- 캐릭터: `없음`
**{name}**: *서연의 클립보드 끝이 책상에 톡 닿는다. 답할 틈도 없이 서연은 복도로 나간다.*

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
**{name}**: 뭔가 문제라도 있어요?

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
**{name}**: *출석부 사이에 꽂힌 전학 서류 모서리가 보인다.*

---

### `hidden_homeroom_d2_2_b`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임을 따라 교무실로 간다. 구석 자리 서랍이 반 뼘 열려 있고 서류 더미 아래로 원고지 모서리가 나와 있다.*

---

### `hidden_homeroom_d2_3`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 전 학교 성적표 봤는데 국어가 좋았네. 읽는 거 좋아해?

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
**담임선생님**: *열린 서랍의 원고지 위에 펜을 가로질러 놓는다.*

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
**담임선생님**: *무릎으로 서랍을 밀지만 원고지 모서리에 걸려 끝까지 닫히지 않는다.*

---

### `hidden_homeroom_d2_choice1`
- 배경: `teacher_office.png`
- 선택지:
  1. "선생님은요? 뭐 읽으세요?" → `hidden_homeroom_d2_choice1_a` | Teacher +8
  2. "읽는 건 좋아해요" → `hidden_homeroom_d2_choice1_b` | Teacher +2
  3. "선생님은 어려운 책만 읽으시죠?" → `hidden_homeroom_d2_choice1_trap` | Teacher -3

- 캐릭터: `teacher_normal.png`
**{name}**: *서랍을 닫으려던 담임이 손을 거두고 대답을 기다린다.*

---

### `hidden_homeroom_d2_choice1_a`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 추리소설. 범인 잡는 거 말고 동기를 추적하는 쪽.

---

### `hidden_homeroom_d2_choice1_b`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *커피잔 손잡이를 한 바퀴 돌린다.* 그래? 좋은 취미네.

---

### `hidden_homeroom_d2_choice1_trap`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 선생님이라고 취향까지 어려울 필요는 없지.

---

### `hidden_homeroom_d2_5`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_6`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 그래. 뭐, 그냥 물어본 거야.

---

### `hidden_homeroom_d2_6`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_7`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임은 커피잔을 옆으로 밀고 튀어나온 원고지를 손끝으로 넣은 뒤 서랍을 닫는다.*

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
**담임선생님**: 유명하다기보단 걱정돼서 그렇지. *커피를 한 모금 마신다.*

---

### `hidden_homeroom_d2_8_d`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_8_e`

- 캐릭터: `teacher_normal.png`
**{name}**: *출석부의 다인 이름 옆에서 담임의 펜촉이 멎는다.*

---

### `hidden_homeroom_d2_8_e`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_8_f`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *커피를 내려놓는다.* 아무튼 너는 별문제 없어.

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
  1. "업무치고 표정이 좋으신데요" → `hidden_homeroom_d2_choice2_a` | Teacher +6
  2. "챙겨주셔서 감사합니다" → `hidden_homeroom_d2_choice2_b` | Teacher +0
  3. "그럼 저한테 커피까지 주신 것도 업무예요?" → `hidden_homeroom_d2_choice2_trap` | Teacher -3

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 컵받침을 같은 자리에서 두 번 돌린다.*

---

### `hidden_homeroom_d2_choice2_trap`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_11`

- 캐릭터: `teacher_angry.png`
**담임선생님**: *컵받침을 돌리던 손이 멈춘다.* 그런 식으로 받아들이면 곤란해.

---

### `hidden_homeroom_d2_choice2_a`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_11`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *커피잔으로 입가를 가린다.* 됐네. 가 봐.

---

### `hidden_homeroom_d2_choice2_b`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_11`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *교무실 문 쪽을 펜으로 가리킨다.* 됐다. 가 봐.

---

### `hidden_homeroom_d2_11`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_11_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 전학생이라고 예외 두면 다른 애들이 뭐라 하지.

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
- 다음: `hidden_homeroom_d2_freetalk`

- 캐릭터: `teacher_normal.png`
**{name}**: *교무실을 나서며 열린 서랍 쪽을 한 번 돌아본다.*

---

### `hidden_homeroom_d2_freetalk`
- 배경: `teacher_office.png`
- 타입: `free_talk`
- 다음: `morning2_seo_dust_1`
- 컨텍스트: "전학 이틀째 아침, 교무실 상담이 끝난 직후다. 주인공은 담임의 서랍에서 오래 쓴 장편 원고를 우연히 보았지만 그 내용이나 사정은 아직 모른다. 두 사람은 담임과 학생이며 신뢰를 쌓기 시작한 단계다. 원고의 비밀을 임의로 확정하거나 교사와 학생의 경계를 넘지 않는다."
- 성격: "담임은 차분하고 책임감이 강하며 학생의 말을 먼저 듣는 교사다. 개인 원고를 들킨 민망함은 작은 망설임과 말끝에 드러나지만 학생에게 감정적 책임을 지우지 않고 따뜻한 선을 지킨다."

- 캐릭터: `teacher_normal.png`
**담임선생님**: *교무실 문이 닫히자 책상 위 원고를 서랍 쪽으로 밀어 둔다.* 아까부터 묻고 싶은 표정이던데. 지금은 학생 얘기부터 들을게.

---

### `hidden_homeroom_d2_low`
- 배경: `teacher_office.png`
- 다음: `morning2_seo_dust_1`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *교무실 문 앞에서 담임과 마주친다. 담임은 들고 있던 서류를 책상 쪽으로 돌려놓는다.* 오늘은 따로 이야기하지 말자. 수업에서 보자.

---

### `morning2_seo_dust_1`
- 배경: `school_hallway.png`
- 다음: `morning2_seo_dust_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *1교시가 끝난 쉬는 시간, 복도에서 서연과 스친다. 서연의 시선이 어깨 솔기에 닿자 클립보드를 든 손이 먼저 올라온다.*

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
**서연**: *손이 {name}의 어깨에 닿는다. 먼지를 두 번 털고 바로 뗀다.*

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
**{name}**: *서연의 손이 떨어진 자리에서 가방끈이 비뚤어져 있다. 그 끈만 다시 고쳐 쥔다.*

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
**{name}**: *어깨의 먼지는 없어졌는데 가방끈을 두 번이나 다시 고쳐 잡는다.*

---

### `morning2_dain_react_2`
- 배경: `school_hallway.png`
- 다음: `morning2_dain_react_3`

- 캐릭터: `dain_angry.png`
**{name}**: *서연이 클립보드를 고쳐 끼고 복도로 간다. 뒤에서 다인의 목소리.*

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
**다인**: 먼지가 진짜 있긴 했어?

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
**{name}**: *민수 말로는 1년 동안 먼저 인사한 적도 없다던 서연이 오늘은 내 교실 앞까지 왔다.*

---

## 2일차 — 점심 `day2_2_lunch`

### `lunch2_start`
- 배경: `school_hallway.png`
- BGM: `daily.mp3`
- 다음: `lunch2_choice`

- 캐릭터: `없음`
**{name}**: *점심. 주머니에는 유나의 쪽지가 있고 복도 끝에서는 도시락을 든 서연이 옥상으로 올라간다. 다인이 매점 쪽에서 손짓하는 세 갈래 길목에 선다.*

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
**{name}**: *처음 올라온 옥상이다. 난간 아래에서 운동장 호루라기 소리가 올라오고 서연은 접이식 의자 위에 도시락을 펼친다.*

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
- 스탯: Seoyeon +6
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
**{name}**: 어제는 다인이 끌고 갔고 오늘은 내가 올라오고 싶었어.

---

### `lunch2_seo_4b_dain`
- 배경: `top_school.png`
- 다음: `lunch2_seo_5b_dain`

- 캐릭터: `seyoun_normal.png`
**서연**: 그건 좀 다르네.

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
**서연**: 솔직하네.

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
**서연**: 내 쪽?

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
**서연**: *도시락 뚜껑 끝을 젓가락으로 톡 친다.* 그거, 이상하게 말 되네.

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
- 스탯: Seoyeon +6
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
**서연**: 바람이라.

---

### `lunch2_seo_7`
- 배경: `top_school.png`
- 다음: `lunch2_seo_9`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 도시락 뚜껑을 여는 순간 옥상 문이 철컥 열린다. 다인이 문틈으로 들어온다.*

---

### `lunch2_seo_9`
- 배경: `top_school.png`
- 다음: `lunch2_seo_10`

- 캐릭터: `dain_normal.png`
**다인**: 여기 있었네. 찾았다. 옥상에서 먹는 거면 나도 껴도 돼?

---

### `lunch2_seo_10`
- 배경: `top_school.png`
- 다음: `lunch2_seo_11`

- 캐릭터: `seyoun_normal.png`
**서연**: 옥상은 허가제야. 그리고 오늘 점심은 내가 먼저 잡았고.

---

### `lunch2_seo_11`
- 배경: `top_school.png`
- 다음: `lunch2_seo_12`

- 캐릭터: `dain_normal.png`
**다인**: 그럼 난 지금부터 끼면 되겠네. 나도 앉는다?

---

### `lunch2_seo_12`
- 배경: `top_school.png`
- 분기:
  - [`chose_dain_lunch`] → `lunch2_seo_13`
  - [기본] → `lunch2_seo_13b`

- 캐릭터: `dain_normal.png`
**{name}**: *다인이 빈자리에 바로 앉는다. 서연의 젓가락이 계란말이 위에서 헛돌다 제자리로 돌아온다.*

---

### `lunch2_seo_13`
- 배경: `top_school.png`
- 다음: `lunch2_seo_14`

- 캐릭터: `dain_normal.png`
**다인**: 어제는 나랑 먹었잖아. 하루 만에 회장님 도시락으로 갈아탄 거야?

---

### `lunch2_seo_13b`
- 배경: `top_school.png`
- 다음: `lunch2_seo_13b_b`

- 캐릭터: `dain_normal.png`
**다인**: 반가워요, 회장님. 그런데 옆자리는 비었죠?

---

### `lunch2_seo_13b_b`
- 배경: `top_school.png`
- 다음: `lunch2_seo_14`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연이 도시락을 {name} 쪽으로 더 붙인다.* 자리는 비어도 약속은 안 비었어.

---

### `lunch2_seo_14`
- 배경: `top_school.png`
- 다음: `lunch2_seo_15`

- 캐릭터: `seyoun_normal.png`
**서연**: *다인이 앉으려 하자 빈 의자를 발끝으로 자기 쪽에 붙인다.* 다인이랑은 벌써 친해졌나 봐.

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
**서연**: 친해지는 것하고 양보하는 건 다르지.

---

### `lunch2_seo_17`
- 배경: `top_school.png`
- 다음: `lunch2_seo_19`

- 캐릭터: `dain_normal.png`
**다인**: 그럼 나도 양보 안 해. 다음 쉬는 시간에 체육관 와.

---

### `lunch2_seo_19`
- 배경: `top_school.png`
- 다음: `lunch2_seo_20`

- 캐릭터: `seyoun_normal.png`
**서연**: {name}, 지금 내 앞에서 다음 약속 잡는 거야?

---

### `lunch2_seo_20`
- 배경: `top_school.png`
- 다음: `lunch2_seo_choice`

- 캐릭터: `seyoun_normal.png`
**서연**: 대답은 나중에 해. 일단 입가에 뭐 묻었어. 가만있어 봐.

---

### `lunch2_seo_choice`
- 배경: `top_school.png`
- 선택지:
  1. "가만히 있는다" → `lunch2_seo_c1_1` | Seoyeon +4
  2. "직접 닦을게" → `lunch2_seo_c2_1` | Seoyeon +2
  3. "이 정도는 혼자 할 수 있어." → `lunch2_seo_trap_1` | Seoyeon -2

- 캐릭터: `seyoun_normal.png`
**서연**: *물티슈를 감은 손가락이 입가로 다가온다.*

---

### `lunch2_seo_c1_1`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *물티슈로 밥풀을 떼어내고 사용한 쪽을 안으로 접는다.*

---

### `lunch2_seo_c1_2`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_2_b`

- 캐릭터: `seyoun_normal.png`
**서연**: 됐어.

---

### `lunch2_seo_c1_2_b`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_3`

- 캐릭터: `dain_normal.png`
**다인**: *다인은 도시락으로 뻗던 손을 공중에 둔 채 둘을 번갈아 본다.*

---

### `lunch2_seo_c1_3`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_3_b`

- 캐릭터: `dain_normal.png`
**다인**: 밥풀을 직접 떼어줘요?

---

### `lunch2_seo_c1_3_b`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_4`

- 캐릭터: `seyoun_normal.png`
**서연**: *물티슈를 네모로 접는다.* 밥풀이었어.

---

### `lunch2_seo_c1_4`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_5`

- 캐릭터: `seyoun_shy.png`
**서연**: 그게 다야.

---

### `lunch2_seo_c1_5`
- 배경: `top_school.png`
- 다음: `lunch2_seo_end_c1`

- 캐릭터: `seyoun_shy.png`
**{name}**: *서연은 물병을 집어 들지만 뚜껑은 열지 않는다. 라벨만 손안에서 구겨진다.*

---

### `lunch2_seo_end_c1`
- 배경: `top_school.png`
- 다음: `after2_start`

- 캐릭터: `seyoun_shy.png`
**{name}**: *다인이 접이식 의자 다리를 운동화 끝으로 두 번 건드린다. 서연은 접은 물티슈를 도시락 뚜껑 위에 올려놓는다.*

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
**서연**: 직접 닦으면 번지잖아.

---

### `lunch2_seo_c2_3`
- 배경: `top_school.png`
- 다음: `lunch2_seo_end_c2`

- 캐릭터: `seyoun_pout.png`
**서연**: *도시락 뚜껑을 맞추는 손이 두 번 미끄러진다. 세 번째에 딸깍 잠긴다.*

---

### `lunch2_seo_trap_1`
- 배경: `top_school.png`
- 다음: `lunch2_seo_end_c2`

- 캐릭터: `seyoun_normal.png`
**서연**: *물티슈를 거둔다.* 그래. 혼자서 잘하니까.

---

### `lunch2_seo_end_c2`
- 배경: `top_school.png`
- 다음: `after2_start`

- 캐릭터: `seyoun_pout.png`
**{name}**: *손등에 아직 밥풀 자국이 남아 있다. 서연은 도시락 끈을 풀었다가 다시 맨다.*

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
**{name}**: *다인과 매점으로. 어제는 도시락이었고 오늘은 빵 냄새가 먼저 난다.*

---

### `lunch2_dain_2b_seo`
- 배경: `store.png`
- 스탯: Dain +6
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
**{name}**: *다인과 매점으로. 어제는 조용한 도서관이었는데 오늘은 빵 굽는 냄새와 소음이 먼저 밀려온다.*

---

### `lunch2_dain_2b_yuna`
- 배경: `store.png`
- 스탯: Dain +6
- 다음: `lunch2_dain_3b_yuna`

- 캐릭터: `dain_normal.png`
**다인**: 야, 어제는 도서관에 있더니 오늘은 제대로 놀아주는 거지?

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
- 스탯: Dain +6
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
**다인**: 이거 조작 아냐?

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
**{name}**: *빵을 사서 복도 창가 쪽에 선다. 도시락 가방을 든 서연이 맞은편에서 지나간다.*

---

### `lunch2_dain_10`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_11`

- 캐릭터: `seyoun_pout.png`
**{name}**: *서연이 다인 옆에 선 나를 한 번 보고 지나간다. 베어 문 소보로가 입안에서 그대로다.*

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
**다인**: 흠, 너 혹시 회장님이랑도 친해?

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
  3. "왜, 신경 쓰여?" → `lunch2_dain_c3_1` | Dain +4

- 캐릭터: `dain_normal.png`
**다인**: *{name}을 빤히 본다.*

---

### `lunch2_dain_c1_1`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_end`

- 캐릭터: `dain_pout.png`
**다인**: *소보로를 문 채 포장지 끝을 접는다. 씹는 소리가 멎는다.*

---

### `lunch2_dain_c2_1`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_end`

- 캐릭터: `dain_normal.png`
**다인**: *소보로를 한 입 베어 물고 매점 유리문에 비친 서연의 뒷모습을 본다.*

---

### `lunch2_dain_c3_1`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_c3_2`

- 캐릭터: `dain_shy.png`
**다인**: 뭐야, 웃지 마! *소보로를 반으로 갈라 하나 내민다.* 이거나 먹어.

---

### `lunch2_dain_c3_2`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_end`

- 캐릭터: `dain_shy.png`
**다인**: *소보로 포장지를 세 번 접어 손가락 두 마디 너비로 만든다.*

---

### `lunch2_dain_end`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_end_b`

- 캐릭터: `dain_pout.png`
**{name}**: *다인이 소보로를 씹는 동안, 서연이 사라진 매점 유리문은 아직 앞뒤로 흔들린다.*

---

### `lunch2_dain_end_b`
- 배경: `playground.png`
- 다음: `lunch2_dain_end_c`

- 캐릭터: `없음`
**{name}**: *5교시 체육. 운동장에서 달리다 급정거한 옆 녀석과 부딪혀 팔꿈치가 까진다. 큰 상처는 아니지만 피가 조금 난다.*

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
**보건선생님**: *진료 기록지에서 시선을 든다.* 아, 어제의 전학생.

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
**보건선생님**: *진료 기록지를 덮는다.* 보건실은 처음이지? 전학생 맞지?

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
**{name}**: *장갑 낀 손이 팔꿈치 주변의 먼지부터 훑는다.*

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
**{name}**: *보건선생님은 장갑 낀 손으로 팔꿈치 주변의 먼지부터 털어낸다.*

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
**보건선생님**: *밴드를 붙인다.* 움직이지 말고. 됐다.

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
**보건선생님**: *서랍 쪽을 한 번 본다.* 방금 본 건 잊어. 대신 하나 알려줄게. 난 커피보다 코코아를 좋아해.

---

### `lunch2_dain_end_t`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_u`

- 캐릭터: `nurse_normal.png`
**{name}**: *코코아라는 답이 끝난 뒤에도 손은 서랍 손잡이를 누른 채다.*

---

### `lunch2_dain_end_u`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_v`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *서랍 손잡이에서 손을 뗀다.* 그 정도면 비밀 하나 값은 하지?

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
**{name}**: *밴드를 붙이고 보건실을 나온다. 팔꿈치를 접어도 끝이 들뜨지 않는다.*

---

### `lunch2_dain_end_nurse_short3`
- 배경: `school_hallway.png`
- 다음: `after2_start`

- 캐릭터: `없음`
**{name}**: *복도로 나오자 수업 종료 종이 울린다. 새로 붙인 밴드가 소매 끝에 걸렸다가 제자리로 돌아간다.*

---

### `lunch2_yuna_1`
- 배경: `yuna_hideout.png`
- BGM: `night1.mp3`
- 다음: `lunch2_yuna_intro_check`

- 캐릭터: `yuna_normal.png`
**{name}**: *본관보다 오래된 도서관 별관에는 학생이 거의 없다. 계단을 올라가니 복도 끝, 벽에 기대어 책을 읽는 유나가 보인다.*

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
- 스탯: Yuna +6
- 다음: `lunch2_yuna_4`

- 캐릭터: `yuna_normal.png`
**유나**: 왔네.

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
- 스탯: Yuna +6
- 다음: `lunch2_yuna_4_seo`

- 캐릭터: `yuna_normal.png`
**유나**: 왔네.

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
**유나**: 의외네.

---

### `lunch2_yuna_8_seo`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_9`

- 캐릭터: `yuna_normal.png`
**{name}**: 그래서 더 와보고 싶었어.

---

### `lunch2_yuna_3_yuna`
- 배경: `yuna_hideout.png`
- 스탯: Yuna +6
- 다음: `lunch2_yuna_4_yuna`

- 캐릭터: `yuna_normal.png`
**유나**: 또 왔네.

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
**유나**: 그래서.

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
**유나**: *책장을 한 장 넘기고 맞은편 소파의 구겨진 쿠션을 손바닥으로 편다.*

---

### `lunch2_yuna_10`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_11`

- 캐릭터: `yuna_normal.png`
**유나**: 그래.

---

### `lunch2_yuna_11`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_13`

- 캐릭터: `yuna_normal.png`
**유나**: *유나가 별관 안쪽으로 앞장선다. 발소리가 낮게 울리는 복도 끝, 오래된 커튼 틈으로 볕이 책장 아래칸까지 들어오는 작은 방이 나온다.*

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
**유나**: 여기 아는 사람 거의 없어.

---

### `lunch2_yuna_15`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_16`

- 캐릭터: `yuna_normal.png`
**유나**: *소파에 앉아 가방을 바닥에 내려놓고 한 칸을 비운다.*

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
**유나**: *책갈피 끝이 페이지 사이로 천천히 사라진다. 유나는 다음 장을 넘기지 않는다.*

---

### `lunch2_yuna_choice`
- 배경: `yuna_hideout.png`
- 선택지:
  1. "그 사람, 지금은?" → `lunch2_yuna_c1_1` | Yuna -3
  2. "묻지 않고 옆에 앉는다" → `lunch2_yuna_c2_1` | Yuna +4
  3. "그 사람보다 내가 더 잘 들어줄 수 있어" → `lunch2_yuna_trap_compare` | Yuna -4
  4. "이제는 나한테만 얘기해도 되겠네" → `lunch2_yuna_trap_exclusive` | Yuna -5

- 캐릭터: `yuna_normal.png`
**{name}**: *'있었는데' 뒤에 말이 없다. 유나는 책갈피 끝을 책 안쪽으로 밀어 넣는다.*

---

### `lunch2_yuna_trap_compare`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c2_1`

- 캐릭터: `yuna_sad.png`
**유나**: *유나는 책갈피 끝을 한 칸 더 밀어 넣는다.* 그 사람하고 넌 비교할 일이 아니야.

---

### `lunch2_yuna_trap_exclusive`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c2_1`

- 캐릭터: `yuna_sad.png`
**유나**: *책을 자기 쪽으로 당겼다가 천천히 놓는다.* 그건 내가 정해.

---

### `lunch2_yuna_c2_1`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c2_3`

- 캐릭터: `yuna_normal.png`
**{name}**: *옆에 앉자 유나는 자기 책 더미에서 한 권을 꺼내 내 쪽에 놓는다.*

---

### `lunch2_yuna_c2_3`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c2_4`

- 캐릭터: `yuna_normal.png`
**유나**: 읽어.

---

### `lunch2_yuna_c2_4`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c2_6`

- 캐릭터: `yuna_normal.png`
**{name}**: *책을 펼친다. 두 사람의 페이지가 번갈아 넘어가고 창틀 그림자가 소파 끝까지 움직인다.*

---

### `lunch2_yuna_c2_6`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c2_7`

- 캐릭터: `yuna_normal.png`
**유나**: 여기가 좋은 이유.

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
**유나**: *책장 쪽으로 돌아서지만 책은 한동안 같은 페이지에 열려 있다.*

---

### `lunch2_yuna_c1_1`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c1_2`

- 캐릭터: `yuna_normal.png`
**유나**: 전학 갔어. 1년 전에.

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
**유나**: *책갈피를 깊이 밀어 넣다가 페이지 모서리가 접힌다. 유나는 펴지 않는다.*

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
**유나**: 모르겠어. 안 한 건지, 못 한 건지.

---

### `lunch2_yuna_c1_7`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c1_9`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 책을 세워 얼굴 아래를 가린다. 나는 펼쳐 둔 책등의 낡은 금박만 읽는다.*

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
**유나**: 갑자기가 아니야. 전학이야.

---

### `lunch2_yuna_c1_11`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c1_12`

- 캐릭터: `yuna_normal.png`
**{name}**: 그랬구나.

---

### `lunch2_yuna_c1_12`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c1_14`

- 캐릭터: `yuna_normal.png`
**유나**: *유나는 책갈피를 끼운 채 다음 장을 넘기지 않는다. 눌린 페이지 모서리만 엄지로 편다.*

---

### `lunch2_yuna_c1_14`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_end`

- 캐릭터: `yuna_normal.png`
**{name}**: *낡은 책등의 금박 글자만 손끝으로 따라 읽는다.*

---

### `lunch2_yuna_end`
- 배경: `yuna_hideout.png`
- 다음: `after2_start`

- 캐릭터: `yuna_normal.png`
**{name}**: *문을 닫기 전 돌아보자 유나는 '있었는데'에서 멈춘 페이지를 다시 펴고 있다.*

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
**{name}**: *유나에게서는 아무 연락이 없다. 가방을 챙기자 주머니에서 아침 쪽지가 나오고 '도서관 별관'이라는 글씨가 접힌 선에 걸려 있다.*

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
  1. "병원에서는 이런 것도 배워요?" → `hidden_nurse_d2_choice1_a` | Nurse +8
  2. "밴드 하나도 꼼꼼하시네요." → `hidden_nurse_d2_choice1_b` | Nurse -2
  3. "저한테만 이렇게 정성껏 해주시는 거죠?" → `hidden_nurse_d2_choice1_b` | Nurse -4
  4. "선생님한테 치료받으면 다친 것도 나쁘진 않네요" → `hidden_nurse_d2_choice1_b` | Nurse -6

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
**보건선생님**: *서랍을 닫는다.* 그건 안 봤지? 됐어. 서류 얘기하자.

---

### `hidden_nurse_d2_choice2`
- 배경: `nurse_room.png`
- 선택지:
  1. "비밀 많으시네요. 하나만 알려주면 안 돼요?" → `hidden_nurse_d2_choice2_a` | Nurse +6
  2. "네, 안 봤어요" → `hidden_nurse_d2_choice2_b` | Nurse -3
  3. "선생님 비밀이면 제가 꼭 지켜드릴게요" → `hidden_nurse_d2_choice2_b` | Nurse -4
  4. "저한테는 다 말씀하셔도 괜찮아요" → `hidden_nurse_d2_choice2_b` | Nurse -5

- 캐릭터: `nurse_shy.png`
**{name}**: *서랍 손잡이를 쥔 손마디가 희다.*

---

### `hidden_nurse_d2_choice2_a`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_8`

- 캐릭터: `nurse_shy.png`
**보건선생님**: *닫힌 서랍을 검지로 두드린다.* 하나만? 음, 그럼. 나 커피보다 코코아 좋아해. 이게 비밀이야.

---

### `hidden_nurse_d2_choice2_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_8`

- 캐릭터: `nurse_shy.png`
**보건선생님**: *서랍 손잡이에서 손을 뗀다.* 비밀. 이 정도면 충분하지?

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
- 다음: `hidden_nurse_d2_freetalk`

- 캐릭터: `nurse_normal.png`
**{name}**: *밴드가 들뜨거나 피가 배면 다시 오라는 안내를 듣고 보건실을 나섰다.*

---

### `hidden_nurse_d2_freetalk`
- 배경: `nurse_room.png`
- 타입: `free_talk`
- 다음: `hidden_nurse_d2_return`
- 컨텍스트: "전학 이틀째 방과후, 체육 시간에 다친 주인공의 처치를 막 끝낸 보건실이다. 주인공은 보건선생님의 세심함을 알게 되었고 두 사람의 신뢰가 조금 깊어졌다. 치료는 끝났으며 새로운 부상이나 진단을 만들어 내지 않는다. 관계는 보건교사와 학생이고 현재의 전문적 경계를 지킨다."
- 성격: "보건선생님은 현실적이고 관찰력이 좋으며 걱정을 가벼운 농담으로 누그러뜨린다. 다정하지만 과보호하지 않고 건강과 감정에 관한 선택을 주인공에게 남겨 둔다."

- 캐릭터: `nurse_normal.png`
**보건선생님**: *사용한 소독솜을 버리고 밴드 가장자리를 한 번 눌러 본다.* 됐어. 아픈 데 말고도 할 말 있으면 지금 해.

---

### `hidden_nurse_d2_return`
- 배경: `room_school.png`
- 다음: `after2_choice`

- 캐릭터: `없음`
**{name}**: *보건실을 나와 교실로 돌아오니, 방과후 햇빛이 책상 위로 길게 누워 있다.*

---

### `hidden_nurse_d2_low`
- 배경: `nurse_room.png`
- 다음: `after2_choice`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건실 문을 열자 보건선생님이 차트를 덮는다.* 지금은 필요한 처치가 아니면 오래 이야기하기 어렵겠네. 교실로 돌아가.

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
- 스탯: Dain +6
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
**{name}**: *첫 서브는 네트에 걸리고 두 번째는 선 안쪽에 떨어진다.*

---

### `after2_dain_9_b`
- 배경: `gym.png`
- 다음: `after2_dain_9_c`

- 캐릭터: `dain_normal.png`
**다인**: *튕겨 나온 공을 양손으로 받아 든다.* 어? 봐주려고 했는데 안 되겠네.

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
**{name}**: *랠리가 빠르게 오간다. 다인은 착지할 때마다 왼발부터 디디고 오른발은 반 박자 늦게 내려놓는다.*

---

### `after2_dain_9_f`
- 배경: `gym.png`
- 다음: `after2_dain_11b`

- 캐릭터: `dain_sweat.png`
**{name}**: *점수판은 3:2. 다인은 일어서며 오른쪽 무릎을 한 번 문지른 뒤 그 손으로 점수판을 뒤집는다.*

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
**다인**: *들고 있던 공을 떨어뜨린다.* 뭐야? 속은 거야?

---

### `after2_dain_15`
- 배경: `street.png`
- 다음: `after2_dain_16`

- 캐릭터: `dain_normal.png`
**{name}**: 속인 건 아니고 물어보지도 않았잖아.

---

### `after2_dain_16`
- 배경: `street.png`
- 호감분기: Dain
  - [25+] → `after2_dain_skinship_1`
  - [기본] → `after2_dain_freetalk`
- 다음: `after2_dain_freetalk`

- 캐릭터: `dain_laugh.png`
**다인**: *주먹을 어깨 높이까지 들었다가 자기 옆구리에 붙인다.* 이 사기꾼. 아, 근데 재밌었다!

---

### `after2_dain_skinship_1`
- 배경: `street.png`
- 다음: `after2_dain_skinship_2`

- 캐릭터: `dain_laugh.png`
**다인**: *손바닥이 맞닿는다. 다인은 "나이스"를 외친 뒤에야 손을 뗀다.*

---

### `after2_dain_skinship_2`
- 배경: `street.png`
- 다음: `after2_dain_skinship_3`

- 캐릭터: `dain_shy.png`
**다인**: 아, 미안! 경기 끝나면 가끔 이래!

---

### `after2_dain_skinship_3`
- 배경: `street.png`
- 다음: `after2_dain_freetalk`

- 캐릭터: `dain_shy.png`
**{name}**: *다인은 방금 부딪친 손바닥을 운동복 옆선에 문지른다.*

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
**{name}**: *다인이 떡볶이 컵을 내 쪽으로 밀어 두고 자기 몫 젓가락부터 뜯는다.*

---

### `after2_dain_end_first`
- 배경: `store.png`
- 다음: `after2_dain_end_b`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인이 떡볶이 컵 두 개를 탁 내려놓고 젓가락 포장을 뜯는다.*

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
**다인**: *젓가락 끝이 떡볶이 컵 위에서 그대로다.*

---

### `after2_dain_end_3b`
- 배경: `store.png`
- 다음: `after2_dain_end_3c`

- 캐릭터: `dain_laugh.png`
**다인**: 당연하지. 나 체육 특기생이었거든.

---

### `after2_dain_end_3c`
- 배경: `store.png`
- 다음: `after2_dain_end_3d`

- 캐릭터: `dain_laugh.png`
**{name}**: *'이었거든'이 끝나자 다인의 젓가락이 종이컵 옆 물컵으로 옮겨간다.*

---

### `after2_dain_end_3d`
- 배경: `store.png`
- 다음: `after2_dain_end_3e`

- 캐릭터: `dain_laugh.png`
**다인**: 아, 맵다. 물, 물.

---

### `after2_dain_end_3e`
- 배경: `store.png`
- 다음: `after2_dain_rival_seo_check`

- 캐릭터: `dain_shy.png`
**다인**: *떡볶이 컵을 {name} 쪽으로 밀어놓고 빈 물병을 거꾸로 흔든다.*

---

### `after2_dain_rival_seo_check`
- 배경: `store.png`
- 호감분기: Seoyeon
  - [25+] → `after2_dain_rival_seo_high`
  - [10+] → `after2_dain_rival_seo_mid`
  - [기본] → `after2_dain_rival_seo_low`
- 다음: `after2_dain_rival_seo_low`

- 캐릭터: `없음`

---

### `after2_dain_rival_seo_high`
- 배경: `store.png`
- 스탯: Seoyeon -5
- 다음: `after2_dain_rival_yuna_check`

- 캐릭터: `seyoun_sad.png`
**{name}**: *가게 유리창 너머로 서연이 걸음을 멈춘다. 테이블 위 떡볶이 컵 두 개를 본 뒤 휴대폰에 짧은 메시지가 뜬다. '오늘은 체육관 쪽이었네. 다음엔 학생회실에도 들러 줘.'*

---

### `after2_dain_rival_seo_mid`
- 배경: `store.png`
- 스탯: Seoyeon -2
- 다음: `after2_dain_rival_yuna_check`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 가게 앞을 지나가다 테이블을 본다. 클립보드 모서리를 두 번 맞춘 뒤 교문 쪽으로 간다.*

---

### `after2_dain_rival_seo_low`
- 배경: `store.png`
- 다음: `after2_dain_rival_yuna_check`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 가게 앞을 지나며 두 사람에게 고개를 숙인다. 걸음은 멈추지 않는다.*

---

### `after2_dain_rival_yuna_check`
- 배경: `store.png`
- 호감분기: Yuna
  - [25+] → `after2_dain_rival_yuna_high`
  - [10+] → `after2_dain_rival_yuna_mid`
  - [기본] → `after2_dain_rival_yuna_low`
- 다음: `after2_dain_rival_yuna_low`

- 캐릭터: `없음`

---

### `after2_dain_rival_yuna_high`
- 배경: `store.png`
- 스탯: Yuna -5
- 다음: `after2_dain_return`

- 캐릭터: `yuna_sad.png`
**{name}**: *유나가 가게 앞에서 유리창 안을 본다. 손에 들고 있던 접힌 쪽지를 주머니에 넣고 그대로 돌아선다.*

---

### `after2_dain_rival_yuna_mid`
- 배경: `store.png`
- 스탯: Yuna -2
- 다음: `after2_dain_return`

- 캐릭터: `yuna_normal.png`
**{name}**: *가게 앞을 지나던 유나가 이어폰 한쪽을 빼려다 테이블을 보고 다시 낀다.*

---

### `after2_dain_rival_yuna_low`
- 배경: `store.png`
- 다음: `after2_dain_return`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 유리창 너머로 고개를 한 번 숙이고 별관 쪽으로 걸어간다.*

---

### `after2_dain_return`
- 배경: `school.png`
- 다음: `after2_group_dain_companion`

- 캐릭터: `dain_shy.png`
**{name}**: *학교로 돌아오는 길. 교문 앞에 다다랐다.*

---

### `after2_group_dain_companion`
- 배경: `gym.png`
- 타입: `group_free_talk`
- 다음: `after2_group_return`

- 캐릭터: `없음`
**다인과 동행**: *체육관과 별관에서 들은 설명이 서로 어긋난다. 다인이 공을 옆구리에 끼고 주인공을 똑바로 본다.* "우리 말이 다르면, 넌 누구부터 믿을 건데?"

---

### `after2_seo_1`
- 배경: `student_room.png`
- BGM: `sunset1.mp3`
- 플래그: `chose_seo_after2`
- 스탯: Seoyeon +6
- 다음: `after2_seo_2`

- 캐릭터: `seyoun_sad.png`
**{name}**: *학생회실. 서연은 서류 더미 앞에 혼자 앉아 있다.*

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
**서연**: *클립보드 모서리로 빈 의자를 가리킨다.* 순종적이네.

---

### `after2_seo_4_b`
- 배경: `student_room.png`
- 다음: `after2_seo_5`

- 캐릭터: `seyoun_sad.png`
**서연**: *클립보드를 {name} 쪽으로 돌린다. 할 일 목록 맨 위가 비어 있다.*

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
**{name}**: *서류 정리를 시작한다. 행사 예산안, 동아리 신청서. 양이 꽤 많다.*

---

### `after2_seo_7`
- 배경: `student_room.png`
- 다음: `after2_seo_8`

- 캐릭터: `seyoun_normal.png`
**서연**: *바로 돌아서지 않고 클립보드를 문 쪽으로 든 채 기다린다. {name}의 발소리가 들리고 나서야 걸음을 옮긴다.*

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
**{name}**: 잘하진 않는데 못하지도 않아.

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
**서연**: *서류를 넘기던 손을 놓고 {name} 쪽을 본다.*

---

### `after2_seo_8b2`
- 배경: `student_room.png`
- 다음: `after2_seo_8b3`

- 캐릭터: `seyoun_sad.png`
**서연**: 너, 쓸 만하네.

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
**서연**: *칭찬이라고 말해놓고 바로 서류를 정리한다. 목을 돌리다 손으로 셔츠 깃을 한 번 당긴다.*

---

### `after2_seo_choice1`
- 배경: `student_room.png`
- 선택지:
  1. "석양이 예쁜데. 창밖 얘기야." → `after2_seo_sunset_joke` | Seoyeon +4
  2. "매일 하는 거면 익숙하겠네." → `after2_seo_neck_worry` | Seoyeon -3
  3. "혼자 애쓰지 말고 내가 대신 끝내줄까?" → `after2_seo_neck_worry` | Seoyeon -4
  4. "이 정도면 됐어. 나머지는 내일 해" → `after2_seo_neck_worry` | Seoyeon -5

- 캐릭터: `seyoun_normal.png`
**{name}**: *블라인드 틈으로 들어온 주황색 줄이 서류 위를 가른다. 서연은 종이 모서리를 맞춘다.*

---

### `after2_seo_sunset_joke`
- 배경: `student_room.png`
- 다음: `after2_seo_sunset_joke_b`

- 캐릭터: `seyoun_shy2.png`
**서연**: *안경이 코끝으로 조금 내려오고 펜 끝이 날짜 칸 밖으로 미끄러진다.*

---

### `after2_seo_sunset_joke_b`
- 배경: `student_room.png`
- 다음: `after2_seo_sunset_react`

- 캐릭터: `seyoun_normal.png`
**서연**: *서류 끝을 세워 입가를 가리는 사이 펜 뚜껑이 책상 아래로 굴러간다.*

---

### `after2_seo_sunset_react`
- 배경: `student_room.png`
- 다음: `after2_seo_sunset_react_b`

- 캐릭터: `seyoun_shy2.png`
**서연**: 그런 말을 그렇게 툭 던지면, 받아 적을 시간도 없잖아.

---

### `after2_seo_sunset_react_b`
- 배경: `student_room.png`
- 다음: `after2_seo_9`

- 캐릭터: `seyoun_normal.png`
**서연**: *서류 끝으로 입가를 가린 채 창틀의 주황색 줄을 펜 끝으로 따라간다.*

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
**서연**: 말은 잘하네.

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
**{name}**: *파일 상자를 두 사람 사이 책상 끝에 내려놓는다.*

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
**{name}**: *블라인드 그림자가 책상 끝까지 길어질 무렵 서류 정리가 거의 끝난다.*

---

### `after2_seo_choice2`
- 배경: `student_room.png`
- 선택지:
  1. "좀 더 있을까? 아직 남았지?" → `after2_seo_stay` | Seoyeon +4
  2. "끝났으면 갈게" → `after2_seo_leave` | Seoyeon +0
  3. "이 정도는 혼자 마무리할 수 있지?" → `after2_seo_choice2_trap` | Seoyeon -3

- 캐릭터: `seyoun_normal.png`
**{name}**: *서류 정리가 거의 끝났다.*

---

### `after2_seo_choice2_trap`
- 배경: `student_room.png`
- 다음: `after2_seo_leave`

- 캐릭터: `seyoun_pout.png`
**서연**: *서류 더미를 자기 쪽으로 당긴다.* 그래. 원래 내 일이니까.

---

### `after2_seo_leave`
- 배경: `student_room.png`
- 다음: `after2_seo_end`

- 캐릭터: `seyoun_normal.png`
**서연**: *완성된 서류 더미를 양손으로 한 번 눌러 맞춘다.*

---

### `after2_seo_stay`
- 배경: `student_room.png`
- 다음: `after2_seo_stay_2`

- 캐릭터: `seyoun_shy.png`
**서연**: *서류를 내려놓고 블라인드를 한 칸 올린다.*

---

### `after2_seo_stay_2`
- 배경: `student_room.png`
- 다음: `after2_seo_stay_3`

- 캐릭터: `seyoun_shy.png`
**서연**: 이 시간은 조용해서 좋아.

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
**{name}**: *서연의 클립보드는 책상 위에 엎어져 있고 마지막 서류 한 장만 나란히 놓여 있다.*

---

### `after2_seo_end`
- 배경: `school_hallway.png`
- 호감분기: Seoyeon
  - [25+] → `after2_seo_skinship_1`
  - [기본] → `after2_seo_rival_dain_check`
- 다음: `after2_seo_rival_dain_check`

- 캐릭터: `seyoun_normal.png`
**{name}**: *학생회실을 나서자 복도 자동등이 앞에서부터 한 칸씩 켜진다.*

---

### `after2_seo_skinship_1`
- 배경: `school_hallway.png`
- 다음: `after2_seo_skinship_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연이 손을 뻗어 옷깃의 먼지를 떼는 순간 손등이 목에 스친다.*

---

### `after2_seo_skinship_2`
- 배경: `school_hallway.png`
- 다음: `after2_seo_skinship_3`

- 캐릭터: `seyoun_shy.png`
**서연**: *손가락이 셔츠 깃에 닿은 채 떨어지지 않는다. 청소 카트 바퀴가 복도를 지나간 뒤에야 손을 거둔다.*

---

### `after2_seo_skinship_3`
- 배경: `school_hallway.png`
- 다음: `after2_seo_rival_dain_check`

- 캐릭터: `seyoun_normal.png`
**서연**: 먼지 묻었어.

---

### `after2_seo_rival_dain_check`
- 배경: `school_hallway.png`
- 호감분기: Dain
  - [25+] → `after2_seo_rival_dain_high`
  - [10+] → `after2_seo_rival_dain_mid`
  - [기본] → `after2_seo_rival_dain_low`
- 다음: `after2_seo_rival_dain_low`

- 캐릭터: `없음`

---

### `after2_seo_rival_dain_high`
- 배경: `school_hallway.png`
- 스탯: Dain -5
- 다음: `after2_seo_rival_yuna_check`

- 캐릭터: `dain_sad.png`
**다인**: *체육관 공 바구니를 밀던 다인이 복도 끝에서 둘을 본다.* 학생회 일이 꽤 길었네. *손잡이를 쥔 채 먼저 돌아선다.*

---

### `after2_seo_rival_dain_mid`
- 배경: `school_hallway.png`
- 스탯: Dain -2
- 다음: `after2_seo_rival_yuna_check`

- 캐릭터: `dain_normal.png`
**다인**: *공 바구니를 세운다.* 끝났어? *서연을 한 번 보고 다시 체육관 쪽으로 민다.*

---

### `after2_seo_rival_dain_low`
- 배경: `school_hallway.png`
- 다음: `after2_seo_rival_yuna_check`

- 캐릭터: `dain_laugh.png`
**다인**: 수고! *공 바구니 너머로 손을 흔들고 체육관 쪽으로 간다.*

---

### `after2_seo_rival_yuna_check`
- 배경: `school_hallway.png`
- 호감분기: Yuna
  - [25+] → `after2_seo_rival_yuna_high`
  - [10+] → `after2_seo_rival_yuna_mid`
  - [기본] → `after2_seo_rival_yuna_low`
- 다음: `after2_seo_rival_yuna_low`

- 캐릭터: `없음`

---

### `after2_seo_rival_yuna_high`
- 배경: `school_hallway.png`
- 스탯: Yuna -5
- 다음: `after2_seo_return`

- 캐릭터: `yuna_sad.png`
**{name}**: *계단참에서 책을 읽던 유나가 둘이 나오는 소리에 표지를 덮는다. 끼워 둔 쪽지를 뽑아 반으로 접는다.*

---

### `after2_seo_rival_yuna_mid`
- 배경: `school_hallway.png`
- 스탯: Yuna -2
- 다음: `after2_seo_return`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나의 손이 페이지 위에서 멈춘다. 둘이 지나갈 자리를 한 칸 비킨 뒤 다시 책을 펼친다.*

---

### `after2_seo_rival_yuna_low`
- 배경: `school_hallway.png`
- 다음: `after2_seo_return`

- 캐릭터: `yuna_normal.png`
**{name}**: *계단참의 유나가 한쪽으로 비켜서며 짧게 고개를 숙인다.*

---

### `after2_seo_return`
- 배경: `school.png`
- 다음: `after2_group_seoyeon_companion`

- 캐릭터: `seyoun_normal.png`
**{name}**: *학생회실을 나섰다. 교문 쪽으로 걸어간다.*

---

### `after2_group_seoyeon_companion`
- 배경: `student_room.png`
- 타입: `group_free_talk`
- 다음: `after2_group_return`

- 캐릭터: `없음`
**서연과 동행**: *서연이 겹쳐 적힌 일정 두 칸을 손끝으로 짚는다. 맞은편의 시선도 쉽게 물러서지 않는다.* "둘 다 네 도움이 필요해. 먼저 누구 쪽부터 갈 건데?"

---

### `after2_yuna_1`
- 배경: `yuna_hideout.png`
- BGM: `night1.mp3`
- 플래그: `chose_yuna_after2`
- 다음: `after2_yuna_1_b`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나한테는 연락이 없지만 도서관으로 향한다. 주머니 속 접힌 쪽지가 걸을 때마다 손등에 닿는다.*

---

### `after2_yuna_1_b`
- 배경: `yuna_hideout.png`
- 배경톤: `empty`
- 다음: `after2_yuna_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *별관 복도에는 인기척이 없다. 비밀 독서 공간 문만 손가락 두 마디만큼 열려 있다.*

---

### `after2_yuna_2`
- 배경: `yuna_hideout.png`
- 스탯: Yuna +6
- 다음: `after2_yuna_2_b`

- 캐릭터: `yuna_normal.png`
**{name}**: *문을 밀자 오래된 경첩이 짧게 운다. 유나는 소파에서 책을 읽고 있고 창틀 그림자가 책등까지 내려와 있다.*

---

### `after2_yuna_2_b`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_3`

- 캐릭터: `yuna_shy.png`
**유나**: *책 위에 올려 둔 이어폰 한쪽을 옆으로 치운다.*

---

### `after2_yuna_3`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_4`

- 캐릭터: `yuna_normal.png`
**유나**: 왔네.

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
**유나**: *검지가 같은 문장 밑을 두 번 따라간다.*

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
**유나**: 우연히.

---

### `after2_yuna_8b`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_8c`

- 캐릭터: `yuna_shy.png`
**{name}**: *안쪽 의자에는 이어폰 한쪽이 이미 놓여 있다. 유나는 옆자리 쿠션을 턱으로 가리킨다.*

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
**{name}**: *이어폰에서 낮은 피아노 곡이 흐른다. 유나는 책을 읽고 내 쪽 이어폰 줄은 소파 틈을 지나 팽팽하게 이어져 있다.*

---

### `after2_yuna_choice_pre1`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_choice_pre2`

- 캐릭터: `yuna_normal.png`
**유나**: *이어폰 줄을 한 번 풀어내며 말한다.* 방과후에 여기 오는 사람.

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
**유나**: *유나가 책 위로 {name}을 바로 본다. 이어폰 줄은 손가락 사이에 감긴 채 굳어 있다.*

---

### `after2_yuna_choice`
- 배경: `yuna_hideout.png`
- 선택지:
  1. "매일 올까?" → `after2_yuna_everyday` | Yuna +6
  2. "조용해서 좋다" → `after2_yuna_quiet` | Yuna +4
  3. "너랑 있으면 굳이 말 안 해도 돼서 편해." → `after2_yuna_trap` | Yuna -3

- 캐릭터: `yuna_normal.png`
**{name}**: *이어폰 줄이 유나의 손가락 사이에서 한 번 더 감긴다.*

---

### `after2_yuna_everyday`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_everyday_b`

- 캐릭터: `yuna_shy.png`
**유나**: *이어폰 줄의 매듭을 풀었다가 검지에 다시 감는다.*

---

### `after2_yuna_everyday_b`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_everyday_react`

- 캐릭터: `yuna_normal.png`
**유나**: 올 거면 와. 말리지는 않을게.

---

### `after2_yuna_everyday_react`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_everyday_react_b`

- 캐릭터: `yuna_shy.png`
**유나**: 근데 매일은 곤란해. 가끔만.

---

### `after2_yuna_everyday_react_b`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_end`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나는 책갈피를 빼지 않은 채 같은 페이지를 보고 있다.*

---

### `after2_yuna_quiet`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_quiet_react`

- 캐릭터: `yuna_smile.png`
**유나**: 그래서 여기가 좋은 거야.

---

### `after2_yuna_quiet_react`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_end`

- 캐릭터: `yuna_smile.png`
**유나**: *책갈피가 한 장 뒤로 옮겨간다. 소파 끝의 이어폰은 치우지 않는다.*

---

### `after2_yuna_trap`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_trap_react`

- 캐릭터: `yuna_normal.png`
**유나**: …여기가 아니라, 내 얘기인 줄 알았는데.

---

### `after2_yuna_trap_react`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_end`

- 캐릭터: `yuna_normal.png`
**유나**: *책갈피가 한 장 앞으로 옮겨간다. 소파 끝의 이어폰을 가방에 넣는다.*

---

### `after2_yuna_end`
- 배경: `yuna_hideout.png`
- 호감분기: Yuna
  - [25+] → `after2_yuna_skinship_1`
  - [기본] → `after2_yuna_rival_dain_check`
- 다음: `after2_yuna_rival_dain_check`

- 캐릭터: `yuna_smile.png`
**{name}**: *유나와 나란히 앉아 있던 자리에는 이어폰 한쪽이 남아 있다. 별관을 나서기 전 휴대폰 화면을 켠다.*

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
**유나**: *겹친 손 위로 책 모서리가 눌린 채 3초가 흐른다. 유나는 그제야 손을 뺀다.*

---

### `after2_yuna_skinship_3`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_rival_dain_check`

- 캐릭터: `yuna_normal.png`
**{name}**: *손을 뗀 유나가 책등이 내 쪽을 향하도록 돌려 건넨다.*

---

### `after2_yuna_rival_dain_check`
- 배경: `yuna_hideout.png`
- 호감분기: Dain
  - [25+] → `after2_yuna_rival_dain_high`
  - [10+] → `after2_yuna_rival_dain_mid`
  - [기본] → `after2_yuna_rival_dain_low`
- 다음: `after2_yuna_rival_dain_low`

- 캐릭터: `없음`

---

### `after2_yuna_rival_dain_high`
- 배경: `yuna_hideout.png`
- 스탯: Dain -5
- 다음: `after2_yuna_rival_seo_check`

- 캐릭터: `dain_sad.png`
**다인**: 체육관 오랬더니 별관 갔네. 다음엔 내 쪽도 와.

---

### `after2_yuna_rival_dain_mid`
- 배경: `yuna_hideout.png`
- 스탯: Dain -2
- 다음: `after2_yuna_rival_seo_check`

- 캐릭터: `dain_normal.png`
**다인**: 도서관이었어? 내일은 체육관 들러.

---

### `after2_yuna_rival_dain_low`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_rival_seo_check`

- 캐릭터: `dain_laugh.png`
**다인**: 도서관 쪽이었어? 내일 봐!

---

### `after2_yuna_rival_seo_check`
- 배경: `yuna_hideout.png`
- 호감분기: Seoyeon
  - [25+] → `after2_yuna_rival_seo_high`
  - [10+] → `after2_yuna_rival_seo_mid`
  - [기본] → `after2_yuna_rival_seo_low`
- 다음: `after2_yuna_rival_seo_low`

- 캐릭터: `없음`

---

### `after2_yuna_rival_seo_high`
- 배경: `yuna_hideout.png`
- 스탯: Seoyeon -5
- 다음: `after2_yuna_return`

- 캐릭터: `seyoun_sad.png`
**서연**: 별관에 있었구나. 다음엔 학생회실에도 들러 줘.

---

### `after2_yuna_rival_seo_mid`
- 배경: `yuna_hideout.png`
- 스탯: Seoyeon -2
- 다음: `after2_yuna_return`

- 캐릭터: `seyoun_normal.png`
**서연**: 별관이었네. 오늘 일은 끝냈어. 내일 보자.

---

### `after2_yuna_rival_seo_low`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_return`

- 캐릭터: `seyoun_normal.png`
**서연**: 일손은 채웠어. 내일 보자.

---

### `after2_yuna_return`
- 배경: `school.png`
- 다음: `after2_group_yuna_companion`

- 캐릭터: `yuna_smile.png`
**{name}**: *도서관 별관을 나서자 복도 자동등이 켜진다.*

---

### `after2_group_yuna_companion`
- 배경: `library_old.png`
- 타입: `group_free_talk`
- 다음: `after2_group_return`

- 캐릭터: `없음`
**유나와 동행**: *정리할 자료는 두 묶음인데 남은 시간은 한쪽을 끝내기에도 빠듯하다. 유나가 이어폰 한쪽을 빼고 맞은편을 바라본다.* "하나만 같이 끝낼 수 있으면, 누구 옆에 남을 건데?"

---

### `after2_group_return`
- 배경: `school.png`
- 다음: `minsu_warn_gate`

- 캐릭터: `없음`
**{name}**: *대화를 마치고 가방을 챙겨 교문 쪽으로 걸어간다.*

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
**{name}**: *민수는 교문 밖 횡단보도 신호만 보고 있다.*

---

### `minsu_warn_5`
- 배경: `school.png`
- 다음: `minsu_warn_6`

- 캐릭터: `minsu_smirk.png`
**{name}**: 갑자기?

---

### `minsu_warn_6`
- 배경: `school.png`
- 다음: `night2_start`

- 캐릭터: `minsu_smirk.png`
**민수**: 점심엔 한 명, 방과후엔 또 한 명. 넌 재밌겠지. — 뭐, 그냥 그렇다고. *어깨를 으쓱하고 먼저 걸어간다.*

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
**유나**: 오늘 그 곡, 좋았어

---

### `night2_msg_yuna_specific_2`
- 배경: `room_my.png`
- 다음: `night2_msg_dain_general`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 다음에 또 들려줘

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
- 분기:
  - [`chose_yuna_after2`] → `night2_msg_7`
  - [기본] → `night2_msg_yuna_general`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 내일 옥상 열어둘게. 시간 되면 와

---

### `night2_msg_yuna_general`
- 배경: `room_my.png`
- 다음: `night2_msg_7`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 내일 별관 올 거야?

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
**유나**: 그 책, 다 읽었어?

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
- 스탯: Dain +4
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
- 다음: `night2_dain_freetalk`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 야, 진짜 너 뭐야. 내일 꼭 체육관 와.

---

### `night2_reply_dain_react_default`
- 배경: `room_my.png`
- 플래그: `night2_replied_dain`
- 다음: `night2_dain_freetalk`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: ㅋㅋ 알겠어. 굿나잇!

---

### `night2_dain_freetalk`
- 배경: `room_my.png`
- 타입: `free_talk`
- 다음: `night2_hidden_check`
- 컨텍스트: "전학 이틀째 밤, 다인과 메신저로 하루를 정리하는 중이다. 오늘 함께 보낸 시간과 방금까지 주고받은 메시지는 이미 일어난 일이다. 두 사람은 아직 연인이 아니며 대화는 대면이 아니라 휴대폰 메시지다. 갑자기 찾아오거나 같은 방에 있는 것처럼 묘사하지 않는다."
- 성격: "다인은 솔직하고 반응이 빠른 배구부 선수다. 메시지에서도 활기가 느껴지지만 상대의 답을 재촉하지 않으며 관심이 생기면 장난과 직접적인 질문으로 자연스럽게 드러낸다."

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 잠깐, 진짜 자기 전에. 오늘 제일 재밌었던 건 뭐였어?

---

### `night2_reply_seo_1`
- 배경: `room_my.png`
- 스탯: Seoyeon +2
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
- 스탯: Seoyeon +1
- 다음: `night2_seo_freetalk`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 너, 꽤 재밌는 사람이야. 내일 점심 옥상에서 볼래?

---

### `night2_reply_seo_react_default`
- 배경: `room_my.png`
- 플래그: `night2_replied_seo`
- 다음: `night2_seo_freetalk`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: ㅋ 알겠어. 내일 봐.

---

### `night2_seo_freetalk`
- 배경: `room_my.png`
- 타입: `free_talk`
- 다음: `night2_hidden_check`
- 컨텍스트: "전학 이틀째 밤, 서연과 메신저로 대화를 조금 더 이어 가는 중이다. 오늘 학교에서 있었던 일과 방금까지 주고받은 메시지는 확정된 사실이다. 두 사람은 아직 연인이 아니며 서로를 더 알아 가는 단계다. 대화는 휴대폰 메시지이므로 신체 접촉이나 같은 공간의 행동을 만들어 내지 않는다."
- 성격: "서연은 침착하고 자기 기준이 분명한 학생회장이다. 관심이 있어도 과장하지 않고 짧은 농담과 솔직한 질문 사이로 호기심을 드러낸다. 상대의 말을 통제하거나 이미 정해진 관계처럼 굴지 않는다."

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 아, 잠깐. 아직 안 잤지?

---

### `night2_reply_yuna_1`
- 배경: `room_my.png`
- 스탯: Yuna +4
- 다음: `night2_reply_yuna_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: 아직 반 정도. 재밌어

---

### `night2_reply_yuna_2`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_3`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 다행이네

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
**{name}**: *곡이 끝나고 재생 화면의 진행 바가 마지막 칸에 멈춘다.*

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
- 스탯: Yuna +1
- 다음: `night2_yuna_freetalk`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 다 들었으면 내일 감상 알려줘. 별관 올래?

---

### `night2_reply_yuna_react_default`
- 배경: `room_my.png`
- 플래그: `night2_replied_yuna`
- 다음: `night2_yuna_freetalk`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 응. 잘 자.

---

### `night2_yuna_freetalk`
- 배경: `room_my.png`
- 타입: `free_talk`
- 다음: `night2_hidden_check`
- 컨텍스트: "전학 이틀째 밤, 유나와 메신저로 조용히 대화를 이어 가는 중이다. 별관과 책에 관한 오늘의 기억, 방금까지 주고받은 메시지는 이미 일어난 일이다. 두 사람은 아직 연인이 아니며 조심스럽게 신뢰를 쌓고 있다. 대화는 휴대폰 메시지이므로 서로를 직접 보거나 만지는 장면으로 바꾸지 않는다."
- 성격: "유나는 신중하고 관찰력이 좋은 독서가다. 메시지를 보내기 전에 생각을 고르며 편안해질수록 자기 취향과 궁금증을 조금씩 먼저 꺼낸다. 침묵을 불안으로 단정하지 않고 상대의 속도를 존중한다."

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 잠깐. 아직 깨어 있으면... 조금만 더 얘기할래?

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
**{name}**: *건강 관리 앱 알림. '보건실 기록: 전학생 — 팔꿈치 찰과상 (경미). 내일 아침까지 밴드를 건조하게 유지하고 들뜨거나 피가 배면 보건실에서 교체.'*

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
**{name}**: *답장을 보내고 핸드폰을 내려놓았다.*

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
**{name}**: *스크롤 끝에 나온 3개월 전 소풍 사진. 소정이는 내 옆에서 웃고 있다. 다음 사진부터 책상이 조금씩 뒤로 밀려 있고 낙서가 있던 자리 아래쪽은 잘려 있다.*

---

### `night2_flashback_3`
- 배경: `room_my.png`
- 다음: `night2_flashback_5`

- 캐릭터: `없음`
**{name}**: *메모장에 줄줄이 남은 보내지 않은 문장. '선생님, 소정이 책상에—' '오늘도—' 전부 첫 줄에서 끊겼다. 마지막 수정 시간은 새벽 2시 17분이다.*

---

### `night2_flashback_5`
- 배경: `room_my.png`
- 다음: `night2_flashback_7`

- 캐릭터: `없음`
**{name}**: *38번째 메모가 마지막이다. 그 아래 39번째에는 제목도 없다. 다음 날 끝까지 비어 있던 소정이 자리. 담임은 전학 갔다고만 말했다.*

---

### `night2_flashback_7`
- 배경: `room_my.png`
- 다음: `night2_flashback_8`

- 캐릭터: `없음`
**{name}**: *갤러리를 닫고 사진 삭제 버튼 위에 손가락을 올렸다가 결국 화면을 끈다.*

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
**{name}**: *소정이 사진을 다시 연다. 옆에 선 나는 카메라를 보지만 소정이의 시선은 내 쪽이다.*

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
**{name}**: *잠금화면에 세 이름이 차례로 쌓여 있다. 알림을 모두 읽고 화면을 껐다가 다시 켠다.*

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
**{name}**: *밥이랑 계란, 김을 넣고 뚜껑을 닫는다. 반찬은 그게 전부다.*

---

### `forced_violation_day2_after_seoyeon`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day2_seoyeon_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day2_seoyeon_excuse`

**서연**: *대화가 끝난 뒤에도 서연은 한동안 말이 없다. 다시 입을 열었을 때는 목소리가 차갑게 가라앉아 있다.* 방금 네가 한 짓, 없던 일처럼 넘길 생각 하지 마. 당분간 나한테 다가오지도, 연락하지도 마.

---

### `forced_violation_day2_seoyeon_apologize`
- 다음: `forced_violation_day2_resume`

**서연**: *서연은 사과를 듣고도 표정을 풀지 않는다.* 사과는 들었어. 그렇다고 없던 일이 되진 않아. 말한 대로 당분간 연락하지 마.

---

### `forced_violation_day2_seoyeon_excuse`
- 다음: `forced_violation_day2_resume`

**서연**: *서연이 말을 끊는다.* 오해? 내가 싫다고 한 순간부터 오해일 수 없어. 더 말하지 마.

---

### `forced_violation_day2_after_yuna`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day2_yuna_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day2_yuna_excuse`

**유나**: *대화가 끊긴 뒤, 유나는 짧게 숨을 고른다. 굳은 얼굴에는 경계만 남았다.* 내가 싫다는 걸 알면서 무시했잖아. 지금은 네 얼굴도 보기 싫어. 더는 연락하지 마.

---

### `forced_violation_day2_yuna_apologize`
- 다음: `forced_violation_day2_resume`

**유나**: *유나는 한참 뒤에야 짧게 대답한다.* 사과했다고 없어지진 않아. 이제 그만해.

---

### `forced_violation_day2_yuna_excuse`
- 다음: `forced_violation_day2_resume`

**유나**: *유나는 해명을 끝까지 듣지 않는다.* 싫다고 했어. 설명할 일 아니야.

---

### `forced_violation_day2_after_dain`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day2_dain_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day2_dain_excuse`

**다인**: *다인은 평소처럼 웃어넘기지 않는다. 한참 뒤에야 짧고 굳은 목소리가 돌아온다.* 장난 아니야. 내가 싫다는데 억지로 한 거, 절대 그냥 안 넘어가.

---

### `forced_violation_day2_dain_apologize`
- 다음: `forced_violation_day2_resume`

**다인**: *다인은 한참 뒤에야 짧게 답한다.* 그래. 그럼 오늘은 여기까지야. 다음 얘기는 내가 정할게.

---

### `forced_violation_day2_dain_excuse`
- 다음: `forced_violation_day2_resume`

**다인**: *다인의 목소리가 거칠어진다.* 아니. 핑계 대지 마. 싫다고 했는데도 한 건 너야.

---

### `forced_violation_day2_after_teacher`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day2_teacher_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day2_teacher_excuse`

**담임선생님**: *대화가 끝난 뒤, 담임은 더 단호한 목소리로 선을 긋는다.* 방금 행동은 명백히 선을 넘었어. 더는 가까이 오지 마. 이 일은 필요한 절차대로 처리할 거야.

---

### `forced_violation_day2_teacher_apologize`
- 다음: `forced_violation_day2_resume`

**담임선생님**: *담임은 짧게 숨을 고르고 말을 잇는다.* 사과는 들었어. 그래도 절차는 그대로 진행할 거야. 더 말하지 마.

---

### `forced_violation_day2_teacher_excuse`
- 다음: `forced_violation_day2_resume`

**담임선생님**: *담임이 해명을 끊는다.* 지금은 해명부터 할 상황이 아니야. 더 말하지 말고 거리를 둬.

---

### `forced_violation_day2_after_nurse`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day2_nurse_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day2_nurse_excuse`

**보건선생님**: *대화가 끊기자 보건선생님의 목소리에서 평소의 장난기가 사라진다.* 지금부터는 거리를 지켜. 방금 일은 기록하고 필요한 사람에게 알릴 거야.

---

### `forced_violation_day2_nurse_apologize`
- 다음: `forced_violation_day2_resume`

**보건선생님**: *보건선생님은 잠시 말이 없다가 단호하게 답한다.* 사과는 들을게. 그래도 기록과 연락은 그대로 할 거야. 오늘 대화는 여기까지.

---

### `forced_violation_day2_nurse_excuse`
- 다음: `forced_violation_day2_resume`

**보건선생님**: *보건선생님의 목소리가 더 낮아진다.* 오해라고 부르면 달라질 것 같아? 싫다는 의사를 무시한 건 사실이야.

---

### `forced_violation_day2_resume`

---

# 3일차

## 3일차 — 아침 `day3_1_morning`

### `morning3_start`
- 배경: `school.png`
- BGM: `morning.mp3`
- 다음: `morning3_start_2`

- 캐릭터: `없음`
**{name}**: *셋째 날. 알람을 세 번이나 끄고 늦잠을 잤다. 어젯밤 메시지 창을 오래 붙들고 있던 탓이다.*

---

### `morning3_start_2`
- 배경: `school.png`
- 분기:
  - [`homeroom_day2`] → `hidden_homeroom_d3_1`
  - [`nurse_day2`] → `hidden_nurse_d3_check`
  - [기본] → `morning3_gate_branch`

- 캐릭터: `없음`
**{name}**: *가방끈을 움켜쥐고 등굣길을 내달린다. 교문 앞에 누군가 서 있다.*

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
**{name}**: *교문 앞의 서연은 지각 종이 울리기 직전인데도 발을 구르지 않는다.*

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
**서연**: 학생회 일 때문에 나와 있었어. 너도 마침 보였고.

---

### `morning3_seo_gate_warm_3`
- 배경: `school.png`
- 다음: `morning3_seo_gate_warm_4`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *서연의 손은 비어 있다. 서류도 클립보드도 들고 나오지 않았다.*

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
**{name}**: 서연? 왜 여기 있어?

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
**서연**: 농담이야. 같이 늦은 이유는 내가 설명할게.

---

### `morning3_seo_gate_6_b`
- 배경: `school.png`
- 다음: `morning3_seo_gate_7`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연은 학생회 일정표를 꺼내 교문 담당 교사에게 보여준다.*

---

### `morning3_seo_gate_7`
- 배경: `school.png`
- 플래그: `morning3_companion_seoyeon`
- 다음: `morning3_classroom_1`

- 캐릭터: `seyoun_normal.png`
**서연**: *확인 도장을 받은 일정표를 접고 교문 안으로 들어간다. 종이 울리는 동안에도 보폭은 흐트러지지 않는다.*

---

### `morning3_seo_gate_cold_1`
- 배경: `school.png`
- 다음: `morning3_seo_gate_cold_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연이 지나치다 명찰 쪽으로 눈만 돌린다.*

---

### `morning3_seo_gate_cold_2`
- 배경: `school.png`
- 다음: `morning3_seo_gate_cold_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 전학생. 아직 다니고 있었구나.

---

### `morning3_seo_gate_cold_3`
- 배경: `school.png`
- 플래그: `morning3_companion_seoyeon`
- 다음: `morning3_classroom_1`

- 캐릭터: `seyoun_normal.png`
**{name}**: *평소처럼 이름도 부르지 않았다. 서연의 구두 소리만 교문 안쪽으로 멀어진다.*

---

### `morning3_yuna_gate_1`
- 배경: `school.png`
- 호감분기: Yuna
  - [35+] → `morning3_yuna_gate_warm_1`
  - [15+] → `morning3_yuna_gate_2`
  - [기본] → `morning3_yuna_gate_cold_1`

- 캐릭터: `yuna_normal.png`
**{name}**: *교문 앞의 유나는 눈을 반쯤 감은 채 운동화 앞코만 보고 있다.*

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
**유나**: 같이 가도 돼?

---

### `morning3_yuna_gate_warm_3`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_warm_4`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나가 내민 쪽지에는 한마디만 적혀 있다. '기다렸어.'*

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
**유나**: 어제 밤새 책 읽었어.

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
**유나**: 결말이 궁금해서. 중간에 덮을 수가 없었어.

---

### `morning3_yuna_gate_6`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_6_b`

- 캐릭터: `yuna_normal.png`
**{name}**: *밤새 책을 읽고 지각한 모양이다. 유나는 가방을 뒤져 작은 빵을 반으로 갈라 내민다. 봉지 아래로 연보라색 쪽지가 비친다.*

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
**유나**: *유나가 작은 빵을 반으로 나눈다. 봉지가 바스락거리는 동안 두 사람은 교문을 지난다.*

---

### `morning3_yuna_gate_cold_1`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_cold_2`

- 캐릭터: `yuna_normal.png`
**유나**: *유나는 눈이 마주치자 책을 가슴에 더 붙이고 먼저 교문을 지난다.*

---

### `morning3_yuna_gate_cold_2`
- 배경: `school.png`
- 플래그: `morning3_companion_yuna`
- 다음: `morning3_classroom_1`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나는 앞사람과 거리를 좁히며 더 빨리 걷는다. 말을 붙일 틈이 없다.*

---

### `morning3_dain_gate_1`
- 배경: `school.png`
- 호감분기: Dain
  - [35+] → `morning3_dain_gate_warm_1`
  - [15+] → `morning3_dain_gate_2`
  - [기본] → `morning3_dain_gate_cold_1`

- 캐릭터: `dain_normal.png`
**{name}**: *교문 근처에서 다인이 전력으로 달려온다.*

---

### `morning3_dain_gate_warm_1`
- 배경: `school.png`
- 다음: `morning3_dain_gate_warm_2`

- 캐릭터: `dain_laugh.png`
**다인**: *다인이 옆에 붙어 팔꿈치를 내민다. 숨이 가쁘다.*

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
**{name}**: *대답을 확인한 뒤 다인이 팔꿈치를 가볍게 건다. 몇 걸음 뒤 {name}의 보폭에 맞춰 속도를 줄인다.*

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
**다인**: *다인이 손바닥을 내민 채 출발선처럼 몸을 낮춘다.*

---

### `morning3_dain_gate_4`
- 배경: `school.png`
- 다음: `morning3_dain_gate_4_b`

- 캐릭터: `dain_normal.png`
**{name}**: 손은 됐고 같이 뛰자.

---

### `morning3_dain_gate_4_b`
- 배경: `school.png`
- 다음: `morning3_dain_gate_5`

- 캐릭터: `dain_normal.png`
**다인**: 좋아. 그럼 뒤처지기 없기야.

---

### `morning3_dain_gate_5`
- 배경: `school.png`
- 플래그: `morning3_companion_dain`
- 다음: `morning3_dain_gate_5_b`

- 캐릭터: `dain_normal.png`
**{name}**: *둘이 나란히 속도를 올린다. 교문까지 남은 거리가 빠르게 줄어든다.*

---

### `morning3_dain_gate_5_b`
- 배경: `school.png`
- 다음: `morning3_classroom_1`

- 캐릭터: `dain_normal.png`
**{name}**: *교문을 넘던 다인의 오른발이 바닥에 닿자 "읏" 소리가 샌다. 다인은 곧 웃지만 오른발이 반 박자 늦게 따라온다.*

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
**{name}**: *교실에 들어서자 서연의 펜이 멈추고 다인의 의자가 뒤로 밀린다. 유나는 책갈피를 같은 페이지에 두 번 끼운다.*

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
**유나**: *창밖을 보던 유나가 유리창에 비친 {name}을 확인하고 책갈피를 한 칸 더 밀어 넣는다.*

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
**다인**: *다인이 의자째 몸을 돌려 이쪽을 본다.*

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
**{name}**: *쉬는 시간. 빈 교실에서 펜 긁는 소리가 난다. 담임선생님이 교탁에서 무언가를 쓰고 있다. 문턱을 밟자 펜촉이 종이를 찍는다.*

---

### `hidden_homeroom_d3_3`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_3_b`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *펜촉이 종이 위에 점 하나를 남긴다.*

---

### `hidden_homeroom_d3_3_b`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *담임선생님이 손바닥으로 원고를 가리고 종이를 뒤집는다.*

---

### `hidden_homeroom_d3_4`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4_b`

- 캐릭터: `teacher_sad.png`
**담임선생님**: 아무것도 아니야. 업무 서류야. 눈치 빠른 건 장점인데, 가끔 단점이네.

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
**담임선생님**: *담임은 출석부를 원고지 위로 끌어온다. 뒤집힌 종이 끝은 가려지지 않는다.*

---

### `hidden_homeroom_d3_4_d`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4_e`

- 캐릭터: `teacher_sad.png`
**담임선생님**: 뭘 봐. 쉬는 시간에 여길 왜 와.

---

### `hidden_homeroom_d3_4_e`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4_f`

- 캐릭터: `teacher_sad.png`
**{name}**: *빼곡한 원고지가 뒤집혀 있다. 물어볼까, 못 본 척할까.*

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
  1. "원고지인 거 봤어요. 소설 쓰시는 거예요?" → `hidden_homeroom_d3_reveal_1` | Teacher +9
  2. "죄송합니다, 안 봤어요." → `hidden_homeroom_d3_hide_1` | Teacher -3
  3. "완성되면 제가 제일 먼저 읽게 해주세요" → `hidden_homeroom_d3_reveal_1` | Teacher -5
  4. "제가 읽고 고칠 데를 먼저 찾아드릴게요" → `hidden_homeroom_d3_reveal_1` | Teacher -6

- 캐릭터: `teacher_normal.png`
**{name}**: *원고지다. 담임이 종이 끝을 손바닥으로 덮는다.*

---

### `hidden_homeroom_d3_reveal_1`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_1_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 소설이라고 내놓기엔 애매하고 습작이라고 하기엔 너무 오래됐어. 7년.

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
**담임선생님**: 7년. 대학 때 시작했어. 문예창작과 다닐 때.

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
**담임선생님**: 졸업하고 몇 번 냈어. 떨어졌고. 그 뒤로는 원서 넣는 쪽이 더 쉬웠지.

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
**담임선생님**: *담임은 원고지를 반듯하게 맞추다가 끝내 한숨을 내쉰다.*

---

### `hidden_homeroom_d3_reveal_2_e`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_2_f`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 그냥 종이라고 생각하면 편하니까.

---

### `hidden_homeroom_d3_reveal_2_f`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *원고지 귀퉁이를 문지르다 의자에 등을 기댄다.*

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
**담임선생님**: *원고지 끝이 교탁에 닿고도 손은 한 박자 뒤에 떨어진다.*

---

### `hidden_homeroom_d3_reveal_4`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d3_reveal_4_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 포기라고 하면 편하겠지. 근데 가끔 이렇게 빈 교실에서 꺼내 보는 걸 보면, 못 한 거겠지.

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
**담임선생님**: *원고지를 출석부와 떨어뜨려 놓는다.* 개인적으로 쓰던 거야. 수업이랑은 상관없고 억지로 읽을 필요도 없어.

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
**담임선생님**: *말은 끝났는데 엄지가 원고지 귀퉁이를 계속 문지른다.*

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
  1. "7년이면 포기가 아니라 끈기 아니에요?" → `hidden_homeroom_d3_reveal_choice_a` | Teacher +7
  2. "왜 꼭 여기서 쓰세요?" → `hidden_homeroom_d3_reveal_choice_b` | Teacher +2
  3. "7년이면 이제 접을 때도 되지 않았어요?" → `hidden_homeroom_d3_reveal_choice_trap` | Teacher -4

- 캐릭터: `teacher_normal.png`
**{name}**: *7년. 교탁 위의 원고지가 닳아 있다.*

---

### `hidden_homeroom_d3_reveal_choice_trap`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_5`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *담임이 원고지를 덮는다.* 그 말은 이미 많이 들었어.

---

### `hidden_homeroom_d3_reveal_choice_a`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_5`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *원고지 귀퉁이를 펴던 엄지가 종이 위에 눌린다.* 끈기라고 들으면 덜 초라하네.

---

### `hidden_homeroom_d3_reveal_choice_b`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 교실이 제일 조용하거든. 아이러니하게도.

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
**담임선생님**: *담임은 입술을 한 번 눌렀다 놓지만 원고지는 접지 않는다.*

---

### `hidden_homeroom_d3_reveal_6_b`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_6_c`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 그럼 7년 만에 다른 사람들 앞에 내놓는 거네.

---

### `hidden_homeroom_d3_reveal_6_c`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d3_reveal_6_d`

- 캐릭터: `teacher_smile.png`
**{name}**: *담임은 헛기침하고 원고지를 다시 맞춘다. 초침 소리가 말 사이로 끼어든다.*

---

### `hidden_homeroom_d3_reveal_6_d`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_6_e`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 고맙다. 네가 먼저 물어보지 않았으면 또 덮어뒀을지도 모르겠네.

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
**{name}**: *지운 흔적이 겹친 문장을 읽는 동안 초침만 움직인다.*

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
- 컨텍스트: "전학 사흘째 아침. 주인공이 빈 교실에서 담임선생님의 개인 소설 원고를 발견했다. 담임은 학생에게 비밀을 지키거나 감상을 말하라고 요구하지 않고 문예부 공개 합평에 낼지 고민한다."
- 성격: "담임선생님은 소설가를 꿈꿨다. 교사가 된 뒤에도 쓰기를 놓지 못했지만 학생과의 관계에서는 수업·평가와 개인 창작을 분리하려 한다."

- 캐릭터: `teacher_normal.png`
**담임선생님**: *원고지를 파일에 넣는다.* 궁금한 건 이해해. 그래도 이 얘기는 문예부 시간에 하자.

---

### `hidden_homeroom_d3_low`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_nurse_d3_check`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *빈 교실 문 앞에서 담임이 걸음을 멈춘다. 안쪽 책상 대신 복도를 가리킨다.* 오늘은 수업 얘기만 하자.

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
**보건선생님**: *보건선생님이 책상에서 몸을 일으킨다.* 어? 오늘은 어디 다쳤어?

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
**{name}**: 좀 쉬고 싶어서요.

---

### `hidden_nurse_d3_2`
- 배경: `nurse_room.png`
- 분기:
  - [`homeroom_day2`] → `hidden_nurse_d3_2_b`
  - [기본] → `hidden_nurse_d3_3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 어디가 아픈 건 아니고? 표정이 안 좋은데.

---

### `hidden_nurse_d3_2_b`
- 배경: `room_school.png`
- 다음: `hidden_nurse_d3_2_c`

- 캐릭터: `teacher_normal.png`
**{name}**: *복도로 나왔는데도 뒤집힌 원고지와 담임의 낮은 목소리가 자꾸 떠오른다.*

---

### `hidden_nurse_d3_2_c`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d3_2_d`

- 캐릭터: `teacher_normal.png`
**{name}**: *교실 문이 닫히기 전, 등 뒤에서 낮은 목소리가 들린다.*

---

### `hidden_nurse_d3_2_d`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d3_2_e`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 고마워.

---

### `hidden_nurse_d3_2_e`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d3_3`

- 캐릭터: `없음`
**{name}**: *점심시간 직전. 복도는 학생들로 붐빈다. 손목을 움직일 때마다 밴드에서 소독약 냄새가 난다.*

---

### `hidden_nurse_d3_3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_3_b`

- 캐릭터: `nurse_normal.png`
**{name}**: 좀 쉬고 싶어서요. 사람 관계가 복잡해져서요.

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
**보건선생님**: 앉아.

---

### `hidden_nurse_d3_3_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_4`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *컵을 책상 안쪽에 놓고 환자용 의자를 침대 앞으로 끌어온다.*

---

### `hidden_nurse_d3_4`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님은 커튼을 치고 물컵을 건넨다.* 앉아. 여기선 편하게 있어도 돼. 말은 천천히 해도 되고.

---

### `hidden_nurse_d3_5_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_c`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님이 의자를 침대 쪽으로 당겨 앉는다.*

---

### `hidden_nurse_d3_5_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 비슷해? 그럼 여기 온 건 잘했어.

---

### `hidden_nurse_d3_5_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_e`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님의 엄지가 물컵 가장자리를 한 번 누른다.*

---

### `hidden_nurse_d3_5_e`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_f`

- 캐릭터: `nurse_normal.png`
**{name}**: 누구한테 말하기 애매한 것들이요.

---

### `hidden_nurse_d3_5_f`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_g`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님이 의자를 끌어와 마주 앉는다.* 사람 관계라.

---

### `hidden_nurse_d3_5_g`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_h`

- 캐릭터: `nurse_normal.png`
**{name}**: 셋 다 신경 쓰이는데 결국 한 명은 정해야 해서요.

---

### `hidden_nurse_d3_5_h`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_i`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님은 종이컵을 책상 위에 반듯하게 놓는다.*

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
**보건선생님**: 아니라고 하기엔 얼굴에 다 보여.

---

### `hidden_nurse_d3_5_l`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_m`

- 캐릭터: `nurse_normal.png`
**{name}**: *책상 위 종이컵만 본다.*

---

### `hidden_nurse_d3_5_m`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_n`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 이게 보건 업무에 들어가나 모르겠네. 그래도 들어줄게. 침대 비어 있으니까.

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
**보건선생님**: *종이컵 테두리가 엄지 아래에서 접힌다. 보건선생님은 창밖을 본다.*

---

### `hidden_nurse_d3_5_p`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_q`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 있었지. 대학병원에서 일할 때.

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
  1. "그때 무슨 일이 있었어요?" → `hidden_nurse_d3_choice1_a` | Nurse +6
  2. "말하기 힘드시면 안 하셔도 돼요." → `hidden_nurse_d3_choice1_b` | Nurse +0
  3. "병원이 싫어서 학교로 오신 거예요?" → `hidden_nurse_d3_choice1_c` | Nurse -3

- 캐릭터: `nurse_normal.png`
**{name}**: *입만 열었다가 다시 다문다.*

---

### `hidden_nurse_d3_choice1_a`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 한 번쯤은 말해도 괜찮아. 나도 정리해야 할 이야기니까.

---

### `hidden_nurse_d3_choice1_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 괜찮아. 자세히는 말하지 않을게.

---

### `hidden_nurse_d3_choice1_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6`

- 캐릭터: `nurse_worried.png`
**보건선생님**: 싫어서 도망친 건 아니야. 그렇게 간단한 얘기도 아니고.

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
**보건선생님**: 그만뒀다기보다, 나왔지. 멋있는 이유 같은 건 없어.

---

### `hidden_nurse_d3_6_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6_e`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *청진기를 정리하다 노트 서랍을 열려던 손을 거둔다.*

---

### `hidden_nurse_d3_6_e`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6_f`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 있었지. 못 살린 환자 한 명. 열일곱 살이었어. 그 일 있고 여기 온 거야.

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
**보건선생님**: 그래서 학교로 왔어. 여기서는 한 명 한 명 얼굴을 제대로 보잖아.

---

### `hidden_nurse_d3_7_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님이 청진기를 책상 위에 놓고 {name} 쪽으로 의자를 돌린다.*

---

### `hidden_nurse_d3_8`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 너도 마찬가지야. 다 챙기려고 하지 마. 진짜 중요한 사람 한 명을 제대로 보는 게 낫지 않겠어?

---

### `hidden_nurse_d3_8_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_c`

- 캐릭터: `nurse_normal.png`
**{name}**: *쥔 종이컵 한쪽이 손가락 모양대로 찌그러진다.*

---

### `hidden_nurse_d3_8_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_d`

- 캐릭터: `nurse_normal.png`
**{name}**: 감사합니다.

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
**{name}**: *자리에서 일어나 문손잡이를 잡는다. 뒤에서 서랍 여는 소리가 나자 연두색 노트 모서리가 떠오른다.*

---

### `hidden_nurse_d3_8_g`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_h`

- 캐릭터: `없음`
**{name}**: *들뜬 밴드 끝을 손톱으로 누른다. 흔들리는 커튼 너머로 '보건교사'라고 적힌 이름표가 보인다.*

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
  1. "그 일을 겪고 병원을 나오신 거예요?" → `hidden_nurse_d3_choice2_a` | Nurse +9
  2. "그때 이야기, 더 해도 괜찮으세요?" → `hidden_nurse_d3_choice2_b` | Nurse +4
  3. "다 말하고 나면 오히려 편해지지 않아요?" → `hidden_nurse_d3_choice2_c` | Nurse -4

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
**보건선생님**: 응. 내가 감당할 수 있는 만큼만 말할게.

---

### `hidden_nurse_d3_choice2_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9`

- 캐릭터: `nurse_worried.png`
**보건선생님**: 편해지는지는 말하는 사람이 정해. 듣는 사람이 밀어붙이는 게 아니라.

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
**{name}**: *종이컵을 내려놓고 안내 카드를 주머니에서 다시 꺼낸다.*

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
- 컨텍스트: "전학 사흘째. 복잡해진 관계 때문에 주인공이 보건실의 공식 상담을 찾았고 보건선생님은 대학병원에서 겪은 번아웃을 이야기했다. 학생의 고민과 자신의 경험을 구분해 다루는 상담이다."
- 성격: "보건선생님은 여유와 유머가 있는 의료 전문가다. 번아웃을 겪어 본 경험을 나누되 학생에게 자신의 회복을 맡기지 않고 공식 경계를 지킨다."

- 캐릭터: `nurse_normal.png`
**보건선생님**: *커튼을 반쯤 닫고 의자를 끌어온다.* 오늘은 농담보다 상담이 먼저야.

---

### `hidden_nurse_d3_low`
- 배경: `nurse_room.png`
- 다음: `morning3_date_seo_1`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님은 상담 의자를 꺼내지 않은 채 문 옆에 선다.* 지금은 따로 상담을 이어가기 어렵겠어. 필요한 일이 있으면 공식 상담 시간에 와.

---

### `morning3_date_seo_1`
- 배경: `school_hallway.png`
- 다음: `morning3_date_seo_choice`

- 캐릭터: `seyoun_normal.png`
**서연**: 이번 주말에 시간 있어? 공원에 같이 가자.

---

### `morning3_date_seo_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "있어. 어디?" → `morning3_date_seo_accept` | Seoyeon +4 | 플래그: `accepted_seoyeon_date`
  2. "좀 바쁜데" → `morning3_date_seo_decline` | Seoyeon -3
  3. "학생회장 부탁인데 당연히 가야지" → `morning3_date_seo_accept` | Seoyeon -4
  4. "다른 애들 안 오는 거면 시간 비워볼게" → `morning3_date_seo_accept` | Seoyeon -5

- 캐릭터: `seyoun_normal.png`
**서연**: *서연이 교실 문 앞에서 묻는다. 다인이 들고 있던 물병 뚜껑이 더는 돌아가지 않는다.*

---

### `morning3_date_seo_accept`
- 배경: `school_hallway.png`
- 다음: `morning3_date_seo_accept_b`

- 캐릭터: `seyoun_shy.png`
**{name}**: *서연과 주말 약속을 잡았다. 서연이 교실 문을 닫기도 전에 다인이 내 책상 앞으로 온다.*

---

### `morning3_date_seo_accept_b`
- 배경: `room_school.png`
- 다음: `morning3_date_dain_1`

- 캐릭터: `seyoun_shy.png`
**{name}**: *교실로 돌아왔다. 수업 하나가 지나고 또 쉬는 시간이 온다.*

---

### `morning3_date_seo_decline`
- 배경: `school_hallway.png`
- 다음: `morning3_date_seo_decline_b`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연의 제안을 거절하자 다인이 돌리던 물병 뚜껑을 다시 연다.*

---

### `morning3_date_seo_decline_b`
- 배경: `room_school.png`
- 다음: `morning3_date_dain_1`

- 캐릭터: `seyoun_normal.png`
**{name}**: *교실로 돌아왔다. 수업 하나가 지나고 또 쉬는 시간이 온다.*

---

### `morning3_date_seo_low`
- 배경: `school_hallway.png`
- 플래그: `day3_seoyeon_date_withdrawn`
- 다음: `morning3_date_dain_1`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연은 휴대폰 화면을 켰다가 바로 끈다. 눈이 마주치자 클립보드 쪽으로 시선을 돌린다.* 주말 일정은 단체방에 올릴게.

---

### `morning3_date_dain_1`
- 배경: `room_school.png`
- 다음: `morning3_date_dain_2`

- 캐릭터: `dain_normal.png`
**다인**: 그럼 내 차례. 주말에 오락실 갈래? 회장님만 물어볼 수 있는 건 아니잖아.

---

### `morning3_date_dain_2`
- 배경: `room_school.png`
- 다음: `morning3_date_dain_choice`

- 캐릭터: `dain_normal.png`
**다인**: *서연이 아직 교실 문 앞에 서 있다. 다인은 이쪽을 본 채 책상 모서리를 두드린다.*

---

### `morning3_date_dain_choice`
- 배경: `room_school.png`
- 선택지:
  1. "좋아, 콜" → `morning3_date_dain_accept` | Dain +4 | 플래그: `accepted_dain_date`
  2. "주말은 좀..." → `morning3_date_dain_decline` | Dain -3
  3. "네가 그렇게 부탁하니까 가줄게" → `morning3_date_dain_accept` | Dain -4
  4. "재밌게 해주면 가는 걸로" → `morning3_date_dain_accept` | Dain -5

- 캐릭터: `dain_normal.png`
**다인**: *서연의 발소리가 멎는다. 다인은 대답을 기다린다.*

---

### `morning3_date_dain_accept`
- 배경: `room_school.png`
- 다음: `morning3_date_dain_decline_narr`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인과 주말 약속을 잡았다. 다인이 웃자 복도에서 서연의 클립보드가 한 번 닫힌다.*

---

### `morning3_date_dain_decline`
- 배경: `room_school.png`
- 다음: `morning3_date_dain_decline_narr`

- 캐릭터: `dain_normal.png`
**다인**: 아, 그래? 바쁘면 어쩔 수 없지! 회장님이 먼저 물어서 그런 건 아니고?

---

### `morning3_date_dain_decline_narr`
- 배경: `room_school.png`
- 다음: `morning3_date_dain_decline_inner_2`

- 캐릭터: `dain_laugh.png`
**다인**: *다인은 웃으며 자기 자리로 돌아간다. 종이 치기 직전, 주머니 안쪽을 손가락으로 한 번 두드린다.*

---

### `morning3_date_dain_decline_inner_2`
- 배경: `room_school.png`
- 다음: `morning3_date_yuna_1`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인이 자리로 돌아간 뒤, 종이 치기 직전의 교실만 남는다.*

---

### `morning3_date_dain_low`
- 배경: `room_school.png`
- 플래그: `day3_dain_date_withdrawn`
- 다음: `morning3_date_yuna_1`

- 캐릭터: `dain_normal.png`
**다인**: *다인은 배구공을 옆구리에 낀 채 이쪽을 보다가 코트로 시선을 돌린다.* 이번 주말에는 혼자 연습할 거야.

---

### `morning3_date_yuna_1`
- 배경: `room_school.png`
- 다음: `morning3_date_yuna_1_b`

- 캐릭터: `yuna_normal.png`
**{name}**: *점심 직전, 유나가 접은 쪽지를 내 책상 위에 올린다. 서연과 다인이 동시에 그 손을 본다.*

---

### `morning3_date_yuna_1_b`
- 배경: `room_school.png`
- 다음: `morning3_date_yuna_2`

- 캐릭터: `seyoun_normal.png`
**서연**: 유나. 쪽지로 물으면 다른 사람은 못 듣잖아.

---

### `morning3_date_yuna_2`
- 배경: `room_school.png`
- 다음: `morning3_date_yuna_choice`

- 캐릭터: `yuna_normal.png`
**{name}**: *'주말. 헌책방. 먼저 잡힌 약속이 있어도, 네가 오고 싶으면 와. — 유나'*

---

### `morning3_date_yuna_choice`
- 배경: `room_school.png`
- 선택지:
  1. "쪽지 뒷면에 '갈게'라고 적는다" → `morning3_date_yuna_accept` | Yuna +4 | 플래그: `accepted_yuna_date`
  2. "쪽지 뒷면에 '이번 주말은 어려워'라고 적는다" → `morning3_date_yuna_decline` | Yuna -3
  3. "쪽지에 ‘혼자 가기 싫으면 같이 가줄게’라고 적는다" → `morning3_date_yuna_accept` | Yuna -4
  4. "쪽지에 ‘다른 애들한텐 비밀이면 갈게’라고 적는다" → `morning3_date_yuna_accept` | Yuna -5

- 캐릭터: `yuna_normal.png`
**{name}**: *쪽지를 읽는 동안 유나는 서연과 다인을 차례로 본다. 이번에는 책으로 얼굴을 가리지 않는다.*

---

### `morning3_date_yuna_accept`
- 배경: `room_school.png`
- 다음: `morning3_check_multiple`

- 캐릭터: `yuna_shy.png`
**{name}**: *쪽지 뒷면에 '갈게'라고 적는다. 유나가 종이를 접는 사이, 다인의 손가락이 책상에서 멎는다.*

---

### `morning3_date_yuna_decline`
- 배경: `room_school.png`
- 다음: `morning3_check_multiple`

- 캐릭터: `yuna_sad.png`
**{name}**: *쪽지 뒷면에 답을 적어 책 위에 놓는다. 유나는 책갈피를 끼운 뒤 그 문장을 읽는다.*

---

### `morning3_date_yuna_low`
- 배경: `room_school.png`
- 플래그: `day3_yuna_date_withdrawn`
- 다음: `morning3_check_multiple`

- 캐릭터: `yuna_normal.png`
**유나**: *유나는 접어 둔 쪽지를 꺼내려다 다시 책갈피 사이에 넣는다.* 주말엔... 그냥 혼자 있을래.

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
**{name}**: *수업 종료 종이 울리고 곧 점심시간이 된다.*

---

### `morning3_end_b`
- 배경: `room_school.png`
- 다음: `lunch3_start`

- 캐릭터: `yuna_normal.png`
**유나**: 맛있네.

---

## 3일차 — 점심 `day3_2_lunch`

### `lunch3_start`
- 배경: `room_school.png`
- BGM: `daily.mp3`
- 다음: `lunch3_start_2_b`

- 캐릭터: `yuna_normal.png`
**{name}**: *점심시간, 도시락을 펼치자 세 명이 한자리에 모인다. 아침에 오간 주말 약속을 모르는 사람은 없다. 서연은 옆자리, 다인은 맞은편에 앉고 구석에서 빵을 먹던 유나도 빈 의자를 끌어온다.*

---

### `lunch3_start_2_b`
- 배경: `room_school.png`
- 다음: `lunch3_meal_1`

- 캐릭터: `dain_normal.png`
**다인**: *다인이 유나보다 먼저 계란말이를 집는다. 서연이 젓가락을 들기 전에 맞은편을 본다.*

---

### `lunch3_meal_1`
- 배경: `room_school.png`
- 다음: `lunch3_meal_2`

- 캐릭터: `dain_laugh.png`
**다인**: 오, 맛있다. 회장님도 먹어요. 오늘은 먼저 잡았다고 다 가져가면 안 되잖아요.

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
**서연**: 난 남의 도시락까지 독점할 생각 없어. 계란말이는 6점.

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
**유나**: *유나가 젓가락을 뻗어 제일 먹음직한 소시지를 집어간다.*

---

### `lunch3_meal_7`
- 배경: `room_school.png`
- 다음: `lunch3_meal_7_b`

- 캐릭터: `seyoun_normal.png`
**{name}**: 유나, 그건 내가 제일 좋아하는 건데.

---

### `lunch3_meal_7_b`
- 배경: `room_school.png`
- 다음: `lunch3_meal_8`

- 캐릭터: `yuna_normal.png`
**유나**: *소시지를 씹으며 다인을 본다.* 먼저 잡는 사람이 임자는 아니네.

---

### `lunch3_meal_8`
- 배경: `room_school.png`
- 다음: `lunch3_meal_10`

- 캐릭터: `yuna_bored.png`
**{name}**: *유나의 젓가락이 이번에는 도시락 쪽으로 바로 향한다.*

---

### `lunch3_meal_10`
- 배경: `room_school.png`
- 다음: `lunch3_meal_10_b`

- 캐릭터: `yuna_bored.png`
**{name}**: *마지막 계란말이 위에서 젓가락 세 쌍이 겹칠 뻔한다. 다 같이 먹자고 한 뒤다.*

---

### `lunch3_meal_10_b`
- 배경: `room_school.png`
- 분기:
  - [`accepted_seoyeon_date`] → `lunch3_meal_10_c`
  - [`accepted_dain_date`] → `lunch3_meal_10_d`
  - [`accepted_yuna_date`] → `lunch3_meal_10_e`
  - [기본] → `lunch3_meal_11`

- 캐릭터: `yuna_bored.png`
**{name}**: *도시락 가운데 마지막 반찬 하나만 남고 세 사람의 젓가락은 제자리로 돌아간다.*

---

### `lunch3_meal_10_c`
- 배경: `room_school.png`
- 다음: `lunch3_meal_11`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연은 계란말이 앞에서 젓가락 끝을 거둔다.*

---

### `lunch3_meal_10_d`
- 배경: `room_school.png`
- 다음: `lunch3_meal_11`

- 캐릭터: `dain_laugh.png`
**다인**: *"다 같이?" 다인은 웃지만 의자를 당기지 않는다.*

---

### `lunch3_meal_10_e`
- 배경: `room_school.png`
- 다음: `lunch3_meal_11`

- 캐릭터: `yuna_normal.png`
**유나**: *유나는 짧게 끄덕인 뒤 쓰던 쪽지를 접어 주머니에 넣는다. 연보라색 잉크 점 하나가 종이 끝에 번졌지만 건네지는 않는다.*

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
- 스탯: Seoyeon +4
- 다음: `lunch3_seo_skin_check`

- 캐릭터: `seyoun_normal.png`
**서연**: 고마워. 역시 너는 센스가 있어.

---

### `lunch3_seo_skin_check`
- 배경: `room_school.png`
- 호감분기: Seoyeon
  - [40+] → `lunch3_seo_skin_1`
  - [기본] → `lunch3_give_seo_2_check`

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
**서연**: 남 앞에서는 좀 신경 써.

---

### `lunch3_seo_skin_3`
- 배경: `room_school.png`
- 플래그: `day3_skinship_seoyeon`
- 다음: `lunch3_give_seo_2_check`

- 캐릭터: `seyoun_shy.png`
**{name}**: *서연이 손을 거두다 젓가락을 떨어뜨린다. 바로 주웠지만 젓가락 끝이 접시 테두리를 긁는다.*

---

### `lunch3_give_seo_2_check`
- 배경: `room_school.png`
- 분기:
  - [`day3_has_multiple_dates`] → `lunch3_give_seo_2`
  - [기본] → `lunch3_give_seo_dain_affinity`

- 캐릭터: `없음`

<!-- i18n -->

---

### `lunch3_give_seo_dain_affinity`
- 배경: `room_school.png`
- 호감분기: Dain
  - [35+] → `lunch3_give_seo_2`
  - [15+] → `lunch3_give_seo_dain_mid`
  - [기본] → `lunch3_give_seo_dain_low`

- 캐릭터: `없음`

<!-- i18n -->

---

### `lunch3_give_seo_dain_mid`
- 배경: `room_school.png`
- 스탯: Dain -2
- 다음: `lunch3_give_seo_3_check`

- 캐릭터: `dain_normal.png`
**다인**: 먹고 싶긴 했는데 괜찮아. 다음엔 내 것도 남겨 둬.

---

### `lunch3_give_seo_dain_low`
- 배경: `room_school.png`
- 스탯: Dain -1
- 다음: `lunch3_give_seo_3_check`

- 캐릭터: `dain_normal.png`
**다인**: *다인은 자기 몫을 다 먹고 물병 뚜껑을 닫는다.* 난 배불러.

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
**{name}**: *다인이 교실 문턱에서 서연이 도시락을 받는 모습을 본다. 입술만 달싹이고 복도로 돌아간다.*

---

### `lunch3_seo_witness_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "다인!" → `lunch3_seo_chase_dain_1` | Seoyeon -3, Dain +2
  2. "서연에게 집중한다" → `lunch3_seo_focus_1` | Dain -5
  3. "다인도 부르면 셋이 더 즐겁겠다" → `lunch3_seo_chase_dain_1` | Seoyeon -4
  4. "다인 혼자 두면 마음에 걸려. 같이 먹자고 불러볼게" → `lunch3_seo_chase_dain_1` | Seoyeon -6

- 캐릭터: `dain_sad.png`
**{name}**: *다인의 운동화 뒤축이 복도 모퉁이로 사라진다.*

---

### `lunch3_seo_chase_dain_1`
- 배경: `school_hallway.png`
- 다음: `lunch3_seo_chase_dain_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연은 도시락을 내려놓고 뚜껑 모서리를 맞춘다.*

---

### `lunch3_seo_chase_dain_2`
- 배경: `school_hallway.png`
- 다음: `lunch3_seo_chase_dain_2b`

- 캐릭터: `dain_sad.png`
**다인**: 뭐야.

---

### `lunch3_seo_chase_dain_2b`
- 배경: `room_school.png`
- 다음: `lunch3_give_seo_3_check`

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
- 다음: `lunch3_give_seo_3_check`

- 캐릭터: `seyoun_normal.png`
**서연**: 신경 쓰여?

---

### `lunch3_give_seo_3_check`
- 배경: `room_school.png`
- 분기:
  - [`day3_has_multiple_dates`] → `lunch3_give_seo_3`
  - [기본] → `lunch3_give_seo_yuna_affinity`

- 캐릭터: `없음`

<!-- i18n -->

---

### `lunch3_give_seo_yuna_affinity`
- 배경: `room_school.png`
- 호감분기: Yuna
  - [35+] → `lunch3_give_seo_3`
  - [15+] → `lunch3_give_seo_yuna_mid`
  - [기본] → `lunch3_give_seo_yuna_low`

- 캐릭터: `없음`

<!-- i18n -->

---

### `lunch3_give_seo_yuna_mid`
- 배경: `room_school.png`
- 스탯: Yuna -2
- 다음: `lunch3_end`

- 캐릭터: `yuna_normal.png`
**유나**: *유나는 마지막 반찬을 보다가 빵 봉지를 접는다.* 다음에는 조금 남겨 줘.

---

### `lunch3_give_seo_yuna_low`
- 배경: `room_school.png`
- 스탯: Yuna -1
- 다음: `lunch3_end`

- 캐릭터: `yuna_normal.png`
**유나**: *유나는 별다른 표정 없이 빵을 마저 먹는다.*

---

### `lunch3_give_seo_3`
- 배경: `room_school.png`
- 스탯: Yuna -3
- 분기:
  - [`day3_has_multiple_dates`] → `lunch3_expose_1`
  - [기본] → `lunch3_end`

- 캐릭터: `yuna_sad.png`
**유나**: *유나는 빵 봉지를 접어 가방에 넣는다.*

---

### `lunch3_give_dain_1`
- 배경: `room_school.png`
- 플래그: `lunch3_gave_dain`
- 스탯: Dain +5
- 다음: `lunch3_dain_skin_check`

- 캐릭터: `dain_laugh.png`
**다인**: 진짜? 고마워. {name}, 너 센스 있다.

---

### `lunch3_dain_skin_check`
- 배경: `room_school.png`
- 호감분기: Dain
  - [40+] → `lunch3_dain_skin_1`
  - [기본] → `lunch3_give_dain_2_check`

- 캐릭터: `dain_laugh.png`

<!-- i18n -->

---

### `lunch3_dain_skin_1`
- 배경: `room_school.png`
- 다음: `lunch3_dain_skin_3`

- 캐릭터: `dain_shy.png`
**{name}**: *점심 내기에서 이긴 다인이 양팔을 벌리고 "안아도 돼?"라고 묻는다. 허락을 확인한 뒤 짧게 안겼다가 1초 만에 떨어져 물병을 집는다.*

---

### `lunch3_dain_skin_3`
- 배경: `room_school.png`
- 플래그: `day3_skinship_dain`
- 다음: `lunch3_give_dain_2_check`

- 캐릭터: `dain_shy.png`
**다인**: 지금 거 카운트 아니야.

---

### `lunch3_give_dain_2_check`
- 배경: `room_school.png`
- 분기:
  - [`day3_has_multiple_dates`] → `lunch3_give_dain_2`
  - [기본] → `lunch3_give_dain_seo_affinity`

- 캐릭터: `없음`

<!-- i18n -->

---

### `lunch3_give_dain_seo_affinity`
- 배경: `room_school.png`
- 호감분기: Seoyeon
  - [35+] → `lunch3_give_dain_2`
  - [15+] → `lunch3_give_dain_seo_mid`
  - [기본] → `lunch3_give_dain_seo_low`

- 캐릭터: `없음`

<!-- i18n -->

---

### `lunch3_give_dain_seo_mid`
- 배경: `room_school.png`
- 스탯: Seoyeon -2
- 다음: `lunch3_give_dain_3_check`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연은 젓가락을 내려놓고 도시락 뚜껑을 맞춘다.* 다음엔 내 점수도 참고해.

---

### `lunch3_give_dain_seo_low`
- 배경: `room_school.png`
- 스탯: Seoyeon -1
- 다음: `lunch3_give_dain_3_check`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연은 남은 반찬을 정리하며 고개만 끄덕인다.*

---

### `lunch3_give_dain_2`
- 배경: `room_school.png`
- 스탯: Seoyeon -3
- 분기:
  - [`day3_has_multiple_dates`] → `lunch3_dain_witness_1`
  - [기본] → `lunch3_give_dain_3_check`

- 캐릭터: `seyoun_pout.png`
**서연**: 참나. 내가 점수까지 매겨줬는데.

---

### `lunch3_give_dain_3_check`
- 배경: `room_school.png`
- 호감분기: Yuna
  - [35+] → `lunch3_dain_witness_1`
  - [15+] → `lunch3_give_dain_yuna_mid`
  - [기본] → `lunch3_give_dain_yuna_low`

- 캐릭터: `없음`

<!-- i18n -->

---

### `lunch3_dain_witness_1`
- 배경: `school_hallway.png`
- 배경톤: `empty`
- 다음: `lunch3_dain_witness_2b`

- 캐릭터: `yuna_sad.png`
**{name}**: *유나가 복도에서 체육관 안을 본다. 다인의 웃음소리가 들리자 책 표지를 가슴에 붙이고 반대편으로 돌아간다. 다음 쉬는 시간, 유나의 자리가 비어 있다.*

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
**유나**: *유나는 빵 봉지 입구를 말아 쥔 채 창밖을 본다.*

---

### `lunch3_give_dain_yuna_mid`
- 배경: `room_school.png`
- 스탯: Yuna -2
- 다음: `lunch3_end`

- 캐릭터: `yuna_normal.png`
**유나**: 다인한테 주는구나. 다음엔 나도 물어봐.

---

### `lunch3_give_dain_yuna_low`
- 배경: `room_school.png`
- 스탯: Yuna -1
- 다음: `lunch3_end`

- 캐릭터: `yuna_normal.png`
**유나**: *유나는 빵 봉지를 접고 물을 한 모금 마신다.*

---

### `lunch3_give_yuna_1`
- 배경: `room_school.png`
- 플래그: `lunch3_gave_yuna`
- 스탯: Yuna +5
- 다음: `lunch3_yuna_skin_check`

- 캐릭터: `yuna_normal.png`
**유나**: 고마워.

---

### `lunch3_yuna_skin_check`
- 배경: `room_school.png`
- 호감분기: Yuna
  - [40+] → `lunch3_yuna_skin_1`
  - [기본] → `lunch3_give_yuna_2_check`

- 캐릭터: `yuna_normal.png`

<!-- i18n -->

---

### `lunch3_yuna_skin_1`
- 배경: `room_school.png`
- 다음: `lunch3_yuna_skin_2`

- 캐릭터: `yuna_shy.png`
**{name}**: *쪽지 끝을 두 손이 같이 잡고 있다.*

---

### `lunch3_yuna_skin_2`
- 배경: `room_school.png`
- 다음: `lunch3_yuna_skin_3`

- 캐릭터: `yuna_shy.png`
**유나**: 이건 쪽지에 쓴 말 아니야. 그냥.

---

### `lunch3_yuna_skin_3`
- 배경: `room_school.png`
- 플래그: `day3_skinship_yuna`
- 다음: `lunch3_give_yuna_2_check`

- 캐릭터: `yuna_shy.png`
**{name}**: *'그냥' 뒤에 더 붙는 말은 없다. 그제야 종이 끝에서 손이 떨어진다.*

---

### `lunch3_give_yuna_2_check`
- 배경: `room_school.png`
- 분기:
  - [`day3_has_multiple_dates`] → `lunch3_give_yuna_2`
  - [기본] → `lunch3_give_yuna_seo_affinity`

- 캐릭터: `없음`

<!-- i18n -->

---

### `lunch3_give_yuna_seo_affinity`
- 배경: `room_school.png`
- 호감분기: Seoyeon
  - [35+] → `lunch3_give_yuna_2`
  - [15+] → `lunch3_give_yuna_seo_mid`
  - [기본] → `lunch3_give_yuna_seo_low`

- 캐릭터: `없음`

<!-- i18n -->

---

### `lunch3_give_yuna_seo_mid`
- 배경: `room_school.png`
- 스탯: Seoyeon -2
- 다음: `lunch3_give_yuna_3_check`

- 캐릭터: `seyoun_normal.png`
**서연**: 유나한테 주는구나. 알겠어.

---

### `lunch3_give_yuna_seo_low`
- 배경: `room_school.png`
- 스탯: Seoyeon -1
- 다음: `lunch3_give_yuna_3_check`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연은 자기 도시락을 정리한다.*

---

### `lunch3_give_yuna_2`
- 배경: `room_school.png`
- 스탯: Seoyeon -3
- 다음: `lunch3_yuna_witness_1`

- 캐릭터: `seyoun_pout.png`
**서연**: 나한테 줄 줄 알았는데.

---

### `lunch3_yuna_witness_1`
- 배경: `room_school.png`
- 다음: `lunch3_yuna_witness_2`

- 캐릭터: `seyoun_normal.png`
**서연**: 도서관에서 도시락 냄새 났다더라. 유나랑 있었어?

---

### `lunch3_yuna_witness_2`
- 배경: `room_school.png`
- 분기:
  - [`day3_has_multiple_dates`] → `lunch3_give_yuna_3`
  - [기본] → `lunch3_give_yuna_3_check`

- 캐릭터: `seyoun_normal.png`
**{name}**: *유나는 컵 옆면을 손가락으로 한 번 두드리고 서연을 본다.*

---

### `lunch3_give_yuna_3_check`
- 배경: `room_school.png`
- 호감분기: Dain
  - [35+] → `lunch3_give_yuna_3`
  - [15+] → `lunch3_give_yuna_dain_mid`
  - [기본] → `lunch3_give_yuna_dain_low`

- 캐릭터: `없음`

<!-- i18n -->

---

### `lunch3_give_yuna_dain_mid`
- 배경: `room_school.png`
- 스탯: Dain -2
- 다음: `lunch3_end`

- 캐릭터: `dain_normal.png`
**다인**: 뭐, 유나가 먼저 골랐으니까. 다음엔 내 차례.

---

### `lunch3_give_yuna_dain_low`
- 배경: `room_school.png`
- 스탯: Dain -1
- 다음: `lunch3_end`

- 캐릭터: `dain_normal.png`
**다인**: *다인은 빈 물병을 가방에 넣는다.* 난 괜찮아.

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
**{name}**: *그때 다인이 먼저 입을 연다.*

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
**{name}**: *대답을 고르는 사이, 나머지 두 사람의 젓가락이 도시락 위에 그대로 걸린다.*

---

### `lunch3_expose_4`
- 배경: `room_school.png`
- 다음: `lunch3_expose_5`

- 캐릭터: `dain_laugh.png`
**{name}**: *서연의 젓가락 끝이 도시락 가장자리를 누르고 유나는 뜯던 빵 봉지를 쥔 채 다인을 본다.*

---

### `lunch3_expose_5`
- 배경: `room_school.png`
- 다음: `lunch3_expose_6`

- 캐릭터: `seyoun_sad.png`
**서연**: 오락실?

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
**다인**: 잠깐. 나한테도 주말에 같이 놀자고 했는데?

---

### `lunch3_expose_7_b`
- 배경: `room_school.png`
- 다음: `lunch3_expose_9`

- 캐릭터: `dain_pout.png`
**{name}**: *유나는 빵을 내려놓고 봉지 입구를 접는다.*

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
**{name}**: *젓가락 하나가 도시락 뚜껑에 부딪힌다. 누구도 집어 들지 않는다.*

---

### `lunch3_expose_11`
- 배경: `room_school.png`
- 다음: `lunch3_expose_12`

- 캐릭터: `yuna_sad.png`
**유나**: 거짓말. 나도 몰랐어.

---

### `lunch3_expose_12`
- 배경: `room_school.png`
- 다음: `lunch3_expose_14`

- 캐릭터: `yuna_sad.png`
**{name}**: *젓가락 세 쌍이 도시락 위에 놓인다. 옆 테이블의 민수는 이쪽을 보다가 입가를 손등으로 가린다.*

---

### `lunch3_expose_14`
- 배경: `room_school.png`
- 다음: `lunch3_expose_15`

- 캐릭터: `minsu_smirk.png`
**민수**: 야. 너 진짜 미쳤냐.

---

### `lunch3_expose_15`
- 배경: `room_school.png`
- 다음: `lunch3_expose_choice`

- 캐릭터: `minsu_smirk.png`
**{name}**: *입술만 달싹인다. 민수는 손에 든 젓가락을 내려놓는다.*

---

### `lunch3_expose_choice`
- 배경: `room_school.png`
- 선택지:
  1. "미안. 다들 좋아서 거절을 못 했어." → `lunch3_expose_honest_1` | Seoyeon -5, Yuna -5, Dain -5
  2. "시간대가 다르니까 괜찮지 않을까?" → `lunch3_expose_excuse_1` | Seoyeon -8, Yuna -8, Dain -8
  3. "자리에서 물러난다" → `lunch3_expose_run_1` | Seoyeon -10, Yuna -10, Dain -10

- 캐릭터: `seyoun_angry.png`
**{name}**: *뭐라고 해야 하지.*

---

### `lunch3_expose_honest_1`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_2`

- 캐릭터: `seyoun_angry.png`
**{name}**: 미안. 다들 좋아서 거절을 못 했어.

---

### `lunch3_expose_honest_2`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_3`

- 캐릭터: `seyoun_sad.png`
**서연**: 거절을 못 해서. 그 말이 제일 잔인해, {name}.

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
**{name}**: *서연이 웃던 입을 다물고 도시락 뚜껑을 닫는다. 젓가락 끝이 뚜껑에 딱 하고 닿는다.*

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
**{name}**: *다인의 대답은 평소보다 짧다. 문장 끝에 붙던 느낌표도 없다.*

---

### `lunch3_expose_excuse_1`
- 배경: `room_school.png`
- 다음: `lunch3_expose_excuse_2`

- 캐릭터: `seyoun_angry.png`
**{name}**: 시간대가 다르니까 괜찮지 않을까?

---

### `lunch3_expose_excuse_2`
- 배경: `room_school.png`
- 다음: `lunch3_expose_excuse_2_b`

- 캐릭터: `seyoun_angry.png`
**서연**: 그게 문제라는 걸 모르겠어?

---

### `lunch3_expose_excuse_2_b`
- 배경: `room_school.png`
- 다음: `lunch3_expose_excuse_3`

- 캐릭터: `dain_sad.png`
**다인**: *다인이 의자를 뒤로 밀고 가방을 든다.*

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
**다인**: *다인은 포장도 뜯지 않은 소보로를 가방에 밀어 넣는다.*

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
**{name}**: *뒤에서 의자 끄는 소리만 차례로 난다. 아무도 따라 나오지 않는다. 오후 수업 내내 칠판의 분필 자국은 눈에 들어오지 않고 책상 아래 핸드폰 화면만 켰다 끈다.*

---

### `lunch3_share_1`
- 배경: `room_school.png`
- 분기:
  - [`day3_has_multiple_dates`] → `lunch3_harem_1`
  - [기본] → `lunch3_share_solo`

- 캐릭터: `yuna_bored.png`
**{name}**: *다 같이 나눠 먹자고 하자 셋이 웃는다. 웃음이 끊긴 뒤에도 누구의 젓가락도 먼저 계란말이에 닿지 않는다.*

---

### `lunch3_share_solo`
- 배경: `room_school.png`
- 다음: `lunch3_end`

- 캐릭터: `yuna_normal.png`
**{name}**: *셋이 계란말이를 조금씩 나눠 먹는다. 반으로 갈린 마지막 조각이 사라질 때까지 누구도 먼저 자리에서 일어나지 않는다.*

---

### `lunch3_harem_1`
- 배경: `room_school.png`
- 플래그: `harem_seed`
- 다음: `lunch3_end`

- 캐릭터: `없음`
**{name}**: *셋이 조금씩 나눠 먹는다. 서연은 입꼬리만 올리고 다인의 웃음은 평소보다 크다. 유나는 접어 둔 쪽지를 끝내 꺼내지 않는다.*

---

### `lunch3_end`
- 배경: `room_school.png`
- 다음: `after3_start`

- 캐릭터: `없음`
**{name}**: *종이 울려 도시락을 접는다. 약속 이야기는 누구도 다시 꺼내지 않는다.*

---

## 3일차 — 방과후 `day3_3_afterschool`

### `after3_start`
- 배경: `school_hallway.png`
- BGM: `sunset1.mp3`
- 다음: `after3_route_check`

- 캐릭터: `없음`
**{name}**: *방과후, 복도 갈림길에 선다. 학생회실, 별관, 체육관 표지판이 서로 다른 방향을 가리킨다.*

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
**{name}**: *핸드폰을 확인한다. 답장은 없고 약속 시간만 다가온다.*

---

### `after3_auto_dain`
- 배경: `school_hallway.png`
- 플래그: `route_dain`
- 다음: `after3_rivals_for_dain_start`

- 캐릭터: `없음`
**{name}**: *다인과 약속이 있다. 체육관으로 간다.*

---

### `after3_auto_yuna`
- 배경: `school_hallway.png`
- 플래그: `route_yuna`
- 다음: `after3_rivals_for_yuna_start`

- 캐릭터: `없음`
**{name}**: *유나와 약속이 있다. 도서관 별관으로 간다.*

---

### `after3_auto_seo`
- 배경: `school_hallway.png`
- 플래그: `route_seoyeon`
- 다음: `after3_rivals_for_seo_start`

- 캐릭터: `없음`
**{name}**: *서연과 약속이 있다. 학생회실로 간다.*

---

### `after3_multi_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "서연이에게" → `after3_rivals_for_seo_start` | 플래그: `route_seoyeon`
  2. "유나에게" → `after3_rivals_for_yuna_start` | 플래그: `route_yuna`
  3. "다인이에게" → `after3_rivals_for_dain_start` | 플래그: `route_dain`
  4. "조금 더 생각한다" → `after3_choice`

- 캐릭터: `없음`
**{name}**: *약속이 겹쳤다. 핸드폰에는 서연의 메시지와 다인의 부재중 전화가, 손에는 유나의 접힌 쪽지가 있다. 누구에게 먼저 갈까.*

---

### `after3_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "학생회실로" → `after3_rivals_for_seo_start` | 플래그: `route_seoyeon`
  2. "도서관으로" → `after3_rivals_for_yuna_start` | 플래그: `route_yuna`
  3. "체육관으로" → `after3_rivals_for_dain_start` | 플래그: `route_dain`
  4. "오늘은 그냥 집에 간다" → `after3_walk_home` | 플래그: `day3_kept_distance`

- 캐릭터: `없음`
**{name}**: *어디로 갈까.*

---

### `after3_walk_home`
- 배경: `school_hallway.png`
- 다음: `after3_final`

- 캐릭터: `없음`
**{name}**: *잡힌 약속은 없다. 휴대폰을 가방에 넣고 교문 쪽으로 걷는다.*

---

### `after3_rivals_for_seo_start`
- 배경: `school_hallway.png`
- 다음: `after3_rival_dain_check`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_rivals_for_yuna_start`
- 배경: `school_hallway.png`
- 다음: `after3_rival_seo_check`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_rivals_for_dain_start`
- 배경: `school_hallway.png`
- 다음: `after3_rival_seo_check`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_rival_seo_check`
- 배경: `school_hallway.png`
- 분기:
  - [`accepted_seoyeon_date`] → `after3_rival_seo_promised_dispatch`
  - [기본] → `after3_rival_seo_affinity`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_rival_seo_promised_dispatch`
- 배경: `school_hallway.png`
- 분기:
  - [`route_yuna`] → `after3_reject_for_yuna_1`
  - [`route_dain`] → `after3_reject_for_dain_1`
  - [기본] → `after3_rival_seo_done`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_reject_for_yuna_1`
- 배경: `school_hallway.png`
- 다음: `after3_reject_for_yuna_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *복도에서 서연이 클립보드를 정리하고 있다. 페이지를 넘기는 손이 평소보다 빠르다.*

---

### `after3_reject_for_yuna_2`
- 배경: `school_hallway.png`
- 다음: `after3_rival_seo_done`

- 캐릭터: `seyoun_normal.png`
**서연**: 학생회 일이 바빠서. 점심은 따로 먹을게. 오늘은.

---

### `after3_reject_for_dain_1`
- 배경: `school_hallway.png`
- 다음: `after3_reject_for_dain_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *웃고 있다. 클립보드의 종이 모서리를 맞춘다.*

---

### `after3_reject_for_dain_2`
- 배경: `school_hallway.png`
- 다음: `after3_rival_seo_done`

- 캐릭터: `seyoun_normal.png`
**서연**: 오늘은 할 일이 좀 있어서. 먼저 갈게.

---

### `after3_rival_seo_affinity`
- 배경: `school_hallway.png`
- 호감분기: Seoyeon
  - [35+] → `after3_rival_seo_high`
  - [15+] → `after3_rival_seo_mid`
  - [기본] → `after3_rival_seo_done`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_rival_seo_high`
- 배경: `school_hallway.png`
- 다음: `after3_rival_seo_done`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연은 갈림길 앞에서 걸음을 멈춘다. 가려는 방향을 확인하고 가방끈을 고쳐 잡는다.* 다른 데 가는구나.

---

### `after3_rival_seo_mid`
- 배경: `school_hallway.png`
- 다음: `after3_rival_seo_done`

- 캐릭터: `seyoun_normal.png`
**서연**: 알겠어. 남은 일은 내가 정리할게.

---

### `after3_rival_seo_done`
- 배경: `school_hallway.png`
- 분기:
  - [`route_yuna`] → `after3_rival_dain_check`
  - [`route_dain`] → `after3_rival_yuna_check`
  - [기본] → `after3_seo_affinity_check`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_rival_dain_check`
- 배경: `school_hallway.png`
- 분기:
  - [`accepted_dain_date`] → `after3_rival_dain_promised_dispatch`
  - [기본] → `after3_rival_dain_affinity`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_rival_dain_promised_dispatch`
- 배경: `school_hallway.png`
- 분기:
  - [`route_seoyeon`] → `after3_reject_for_seo_1`
  - [`route_yuna`] → `after3_reject_for_yuna_walk_gym`
  - [기본] → `after3_rival_dain_done`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_reject_for_seo_1`
- 배경: `school_hallway.png`
- 다음: `after3_reject_for_seo_2`

- 캐릭터: `dain_sad.png`
**{name}**: *복도에서 마주친 다인은 먼저 손을 흔들지 않고 운동화 앞코로 바닥만 긁는다.*

---

### `after3_reject_for_seo_2`
- 배경: `school_hallway.png`
- 다음: `after3_rival_dain_done`

- 캐릭터: `dain_sad.png`
**다인**: 오늘 체육관 안 올 거지?

---

### `after3_reject_for_yuna_walk_gym`
- 배경: `gym.png`
- 다음: `after3_reject_for_yuna_3`

- 캐릭터: `없음`
**{name}**: *체육관 쪽 복도로 방향을 튼다.*

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
**{name}**: *인사에 손만 들고 얼굴은 돌린다. 쥔 책 모서리가 손바닥을 누른다.*

---

### `after3_reject_for_yuna_4`
- 배경: `school_hallway.png`
- 다음: `after3_rival_dain_done`

- 캐릭터: `없음`
**{name}**: *체육관을 나와 복도로 돌아왔다. 서연의 메시지는 읽음으로 남아 있고 다인의 답장은 없다.*

---

### `after3_rival_dain_affinity`
- 배경: `school_hallway.png`
- 호감분기: Dain
  - [35+] → `after3_rival_dain_high`
  - [15+] → `after3_rival_dain_mid`
  - [기본] → `after3_rival_dain_done`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_rival_dain_high`
- 배경: `school_hallway.png`
- 다음: `after3_rival_dain_done`

- 캐릭터: `dain_sad.png`
**다인**: *다인은 묻던 말을 삼키고 체육관 표지판을 본다.* 다른 데 가는 거야? 알았어.

---

### `after3_rival_dain_mid`
- 배경: `school_hallway.png`
- 다음: `after3_rival_dain_done`

- 캐릭터: `dain_normal.png`
**다인**: 오케이. 그럼 나 먼저 체육관 갈게.

---

### `after3_rival_dain_done`
- 배경: `school_hallway.png`
- 분기:
  - [`route_seoyeon`] → `after3_rival_yuna_check`
  - [`route_yuna`] → `after3_yuna_affinity_check`
  - [기본] → `after3_dain_affinity_check`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_rival_yuna_check`
- 배경: `library_old.png`
- 분기:
  - [`accepted_yuna_date`] → `after3_rival_yuna_promised_dispatch`
  - [기본] → `after3_rival_yuna_affinity`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_rival_yuna_promised_dispatch`
- 배경: `library_old.png`
- 분기:
  - [`route_seoyeon`] → `after3_reject_for_seo_3`
  - [`route_dain`] → `after3_reject_for_dain_2b`
  - [기본] → `after3_rival_yuna_done`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_reject_for_seo_3`
- 배경: `library_old.png`
- 배경톤: `empty`
- 다음: `after3_reject_for_seo_3b`

- 캐릭터: `yuna_sad.png` @ 0.35
**{name}**: *도서관 옆을 지나자 유나 자리에 연보라색 쪽지 하나만 남아 있다. '2시간 기다렸어. 먼저 갈게.'*

---

### `after3_reject_for_seo_3b`
- 배경: `library_old.png`
- 다음: `after3_reject_for_seo_3c`

- 캐릭터: `없음`
**{name}**: *유나의 책이 없다. 늘 책상에 두던 1권도, 빌려주겠다는 2권도 챙겨 갔다. 손으로 덮어두던 오래된 책갈피까지 보이지 않는다.*

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
- 다음: `after3_rival_yuna_done`

- 캐릭터: `없음`
**{name}**: *복도로 나왔다. 다인의 문장 끝은 조용했고 유나의 자리는 비어 있었다. 손에 남은 쪽지만 접힌 자국대로 구겨졌다.*

---

### `after3_reject_for_dain_2b`
- 배경: `yuna_hideout.png`
- 다음: `after3_reject_for_dain_3`

- 캐릭터: `없음`
**{name}**: *유나의 아지트로 걸어간다.*

---

### `after3_reject_for_dain_3`
- 배경: `library_old.png`
- 다음: `after3_reject_for_dain_3b`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *도서관에 쪽지가 없다. 유나의 가방도 없다. 자리에 미지근한 물 자국만 남아 있다.*

---

### `after3_reject_for_dain_3b`
- 배경: `school_hallway.png`
- 다음: `after3_rival_yuna_done`

- 캐릭터: `없음`
**{name}**: *복도로 돌아왔다. 바닥에 유나가 두고 간 물 자국이 남아 있다.*

---

### `after3_rival_yuna_affinity`
- 배경: `library_old.png`
- 호감분기: Yuna
  - [35+] → `after3_rival_yuna_high`
  - [15+] → `after3_rival_yuna_mid`
  - [기본] → `after3_rival_yuna_done`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_rival_yuna_high`
- 배경: `school_hallway.png`
- 다음: `after3_rival_yuna_done`

- 캐릭터: `yuna_sad.png`
**유나**: *유나는 펼치려던 책을 도로 덮는다.* 다른 데 가는구나. 응, 알겠어.

---

### `after3_rival_yuna_mid`
- 배경: `school_hallway.png`
- 다음: `after3_rival_yuna_done`

- 캐릭터: `yuna_normal.png`
**유나**: 알겠어. 난 도서관에 있을게.

---

### `after3_rival_yuna_done`
- 배경: `school_hallway.png`
- 분기:
  - [`route_seoyeon`] → `after3_seo_affinity_check`
  - [`route_dain`] → `after3_dain_affinity_check`
  - [기본] → `after3_yuna_affinity_check`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_seo_affinity_check`
- 배경: `student_room.png`
- 호감분기: Seoyeon
  - [40+] → `after3_seo_1`
  - [15+] → `after3_seo_partial_1`
  - [기본] → `after3_seo_low_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_seo_partial_1`
- 배경: `student_room.png`
- 다음: `after3_seo_partial_2`

- 캐릭터: `seyoun_worried.png`
**{name}**: *학생회실 문을 열자 서연이 바닥의 클립보드를 줍고 있다. 서연은 눈가를 한 번 닦고 의자를 바로 세운다.*

---

### `after3_seo_partial_2`
- 배경: `student_room.png`
- 플래그: `seoyeon_day3_partial`
- 다음: `after3_seo_end`

- 캐릭터: `seyoun_normal.png`
**서연**: 오늘은 혼자 정리할게. 대신 내일은 피하지 마.

---

### `after3_seo_low_1`
- 배경: `student_room.png`
- 플래그: `day3_kept_distance`
- 다음: `after3_final`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연은 문을 반쯤만 연 채 복도에 선다.* 지금은 혼자 있고 싶어. 내일 보자.

---

### `after3_seo_1`
- 배경: `student_room.png`
- BGM: `sunset1.mp3`
- 다음: `after3_seo_3`

- 캐릭터: `seyoun_sad.png`
**{name}**: *학생회실 문을 열자 서연이 책상에 엎드린 채다. 바닥에는 클립보드가 떨어져 있다.*

---

### `after3_seo_3`
- 배경: `student_room.png`
- 다음: `after3_seo_4`

- 캐릭터: `seyoun_sad.png`
**서연**: *문 여는 소리에 서연이 몸을 일으킨다. 눈 밑의 화장이 번져 있다.*

---

### `after3_seo_4`
- 배경: `student_room.png`
- 다음: `after3_seo_5`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연이 바닥의 클립보드를 발끝으로 책상 밑에 밀어 넣는다.*

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
**서연**: *서연이 손가락으로 머리카락을 빗어 내린다.* 봤어?

---

### `after3_seo_6`
- 배경: `student_room.png`
- 다음: `after3_seo_7`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연이 헛기침을 한 번 한다.* 아무것도 아니야. 잊어.

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
**서연**: *서연이 손등으로 번진 화장을 가린다.* 이런 거 보여주기 싫었는데.

---

### `after3_seo_8`
- 배경: `student_room.png`
- 다음: `after3_seo_9`

- 캐릭터: `seyoun_sad.png`
**서연**: 이런 모습. 비밀로 해줘.

---

### `after3_seo_9`
- 배경: `student_room.png`
- 다음: `after3_seo_choice`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연은 허리를 세우고 클립보드를 무릎 위에 올린다. 입은 굳게 다문 채다.*

---

### `after3_seo_choice`
- 배경: `student_room.png`
- 선택지:
  1. "누구나 그럴 때 있어. 너무 신경 쓰지 마." → `after3_seo_pity_trap_1` | Seoyeon -18 | 플래그: `seo_pity_broken`
  2. "방금? 아무것도 못 봤는데. 펜 떨어뜨려서 주우러 들어왔어." → `after3_seo_correct_1` | Seoyeon +12
  3. "네 약한 모습까지 전부 이해해줄게" → `after3_seo_pity_trap_1` | Seoyeon -14
  4. "이제부터는 내가 옆에서 다 챙겨줄게" → `after3_seo_pity_trap_1` | Seoyeon -16

- 캐릭터: `seyoun_sad.png`
**서연**: 오늘 본 건 여기까지만 해줘. 대신 지금은 평소처럼 대해.

---

### `after3_seo_pity_trap_1`
- 배경: `student_room.png`
- 다음: `after3_seo_pity_trap_2`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연은 손등으로 화장 자국을 세게 문지른다.*

---

### `after3_seo_pity_trap_2`
- 배경: `student_room.png`
- 다음: `after3_seo_pity_trap_3`

- 캐릭터: `seyoun_sad.png`
**서연**: 누구나.

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
**서연**: *서연은 안경을 고쳐 쓴다. 손등에는 검은 자국이 남아 있다.*

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
**서연**: *클립보드 가장자리가 손안에서 휘어진다. 서연은 다음 말을 기다린다.*

---

### `after3_seo_correct_2`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_3`

- 캐릭터: `seyoun_worried.png`
**{name}**: *허리를 굽혀 펜을 줍는 척 책상 밑을 더듬는다. 일부러 시간을 끌며 서연과 눈을 맞추지 않는다.*

---

### `after3_seo_correct_3`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: 어, 여기 있네. 회장님 학생회실은 펜이 잘 없어지는 동네인가 봐?

---

### `after3_seo_correct_4`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_5`

- 캐릭터: `seyoun_worried.png`
**{name}**: *몸을 일으키자 서연이 화장 자국을 닦던 손등에 검은 얼룩이 묻어 있다.*

---

### `after3_seo_correct_5`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_6`

- 캐릭터: `seyoun_normal.png`
**서연**: 학생회실 펜 없어지는 거 진짜 미스터리야. 1년에 30개씩 사라져.

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
**서연**: *서연의 코웃음이 짧게 샌다.* 잡으면 학생들이 학생회를 무서워하지.

---

### `after3_seo_correct_8`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_9`

- 캐릭터: `seyoun_pout.png`
**{name}**: *서연이 안경을 고쳐 쓰는 동안에도 쓸데없는 펜 이야기를 이어 간다. 눈은 끝까지 책상 밑에 둔다.*

---

### `after3_seo_correct_9`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_10`

- 캐릭터: `seyoun_normal.png`
**서연**: {name}.

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
**서연**: 펜 줍는 거. 다음에도 가끔 줍게.

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
- 컨텍스트: "전학 사흘째 방과후. 서연과 부딪혔다가 일단 대화를 마친 직후다. 주인공이 두 사람에게 동시에 마음을 줬다고 의심해 관계에 금이 갔고 서연에게는 상처와 확인할 일이 남아 있다."
- 성격: "서연은 침착하고 직접적인 학생회장이다. 질투와 상처가 있어도 추측으로 결론 내리기보다 사실을 확인하고 자신의 경계를 분명히 한다."

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

### `after3_yuna_affinity_check`
- 배경: `yuna_hideout.png`
- 호감분기: Yuna
  - [40+] → `after3_yuna_1`
  - [15+] → `after3_yuna_partial_1`
  - [기본] → `after3_yuna_low_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_yuna_partial_1`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_partial_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *별관 문은 열려 있지만 유나는 책을 펼치지 않는다. 맞은편 의자를 한 번 봤다가 책상 안으로 밀어 넣는다.*

---

### `after3_yuna_partial_2`
- 배경: `yuna_hideout.png`
- 플래그: `yuna_day3_partial`
- 다음: `after3_yuna_end`

- 캐릭터: `yuna_shy.png`
**유나**: 오늘은 여기까지만. 다음에는 내가 먼저 부를게.

---

### `after3_yuna_low_1`
- 배경: `yuna_hideout.png`
- 플래그: `day3_kept_distance`
- 다음: `after3_final`

- 캐릭터: `yuna_normal.png`
**유나**: *별관 문 앞에서 유나가 가방을 멘다.* 오늘은 혼자 있을래. 먼저 갈게.

---

### `after3_yuna_1`
- 배경: `yuna_hideout.png`
- BGM: `night1.mp3`
- 다음: `after3_yuna_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *도서관 별관, 유나의 비밀 독서 공간 앞에 도착한다. 문이 열려 있다.*

---

### `after3_yuna_2`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_4`

- 캐릭터: `없음`
**{name}**: *안에는 유나가 없고 소파 위 노트만 펼쳐져 있다. 표지 안쪽에는 유나의 이름이 작게 적혀 있고 손글씨가 페이지를 빼곡히 채웠다.*

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
**{name}**: *첫 문장 아래 '교실 창가'에 밑줄이 그어져 있다.*

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
**{name}**: *등 뒤에서 유나의 목소리가 들린다. 음료수 두 개를 든 유나는 펼쳐진 노트와 나를 번갈아 보고 문턱에 선다.*

---

### `after3_yuna_8`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_8b`

- 캐릭터: `yuna_shy.png`
**유나**: 그거.

---

### `after3_yuna_8b`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_9`

- 캐릭터: `yuna_shy.png`
**유나**: *유나가 다가와 노트를 빼앗는다.* 허락 안 했어.

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
  1. "미안. 그래도 이거 내 이야기 맞지?" → `after3_yuna_decode_trap_1` | Yuna -22 | 플래그: `yuna_safe_zone_broken`
  2. "미안. 펼쳐진 첫 장만 봤어. 더 읽지는 않을게. 그런데 이 작가, 문장이 정말 좋다." → `after3_yuna_correct_1` | Yuna +13
  3. "걱정 마. 이 노트는 내가 대신 잘 보관할게" → `after3_yuna_decode_trap_1` | Yuna -15
  4. "이런 글은 앞으로 나한테만 보여줘" → `after3_yuna_decode_trap_1` | Yuna -18

- 캐릭터: `yuna_shy.png`
**{name}**: *노트를 유나 쪽으로 돌려놓는다.*

---

### `after3_yuna_decode_trap_1`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_decode_trap_2`

- 캐릭터: `yuna_shy.png`
**유나**: *유나는 노트를 가슴에 붙이고 표지가 휘도록 쥔다.*

---

### `after3_yuna_decode_trap_2`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_decode_trap_3`

- 캐릭터: `yuna_normal.png`
**유나**: 아니야.

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
**유나**: *유나는 노트를 가방 안쪽에 밀어 넣고 지퍼를 끝까지 닫는다.*

---

### `after3_yuna_decode_trap_6`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_decode_trap_7`

- 캐릭터: `yuna_sad.png`
**유나**: 너 같은 애들 때문에 한 줄도 못 쓴다.

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
**유나**: *유나는 사다리 첫 칸에 발을 올린 채 노트를 한 번 더 끌어안고 그대로 내려간다.*

---

### `after3_yuna_decode_trap_10`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_decode_trap_11`

- 캐릭터: `yuna_sad.png`
**유나**: 여기, 이제 잠가둘 거야.

---

### `after3_yuna_decode_trap_11`
- 배경: `yuna_hideout.png`
- 플래그: `yuna_day3_event`, `yuna_safe_zone_broken`
- 다음: `after3_yuna_end`

- 캐릭터: `없음`
**{name}**: *사다리 내려가는 발소리가 멀어진다. 다락방에는 노트가 있던 자리의 손가락 자국과 펼쳐 둔 페이지만 남았다. 마지막 문장을 읽는다. '여기는 아무도 못 들어오는 곳이었다.'*

---

### `after3_yuna_correct_1`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_correct_2`

- 캐릭터: `yuna_normal.png`
**유나**: *노트를 끌어안은 손가락이 1초쯤 느슨해진다.*

---

### `after3_yuna_correct_2`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_correct_3`

- 캐릭터: `yuna_normal.png`
**유나**: 작가.

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
**유나**: 몰라. 아마 출판은 안 됐을걸.

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
**유나**: *유나는 노트를 책상에 놓고 구겨진 표지 모서리를 손바닥으로 편다.*

---

### `after3_yuna_correct_7`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_correct_8`

- 캐릭터: `yuna_shy.png`
**유나**: 빌려줄까?

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
**유나**: 작가가 허락한다고 칠게.

---

### `after3_yuna_correct_10`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_correct_11`

- 캐릭터: `yuna_smile.png`
**유나**: *유나는 노트를 두 손으로 내민다. 팔은 끝까지 펴지지 않는다.*

---

### `after3_yuna_correct_11`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_correct_12`

- 캐릭터: `yuna_shy.png`
**{name}**: *노트가 내 손으로 넘어온 뒤에도 유나는 표지에서 눈을 떼지 않는다.*

---

### `after3_yuna_correct_12`
- 배경: `yuna_hideout.png`
- 플래그: `yuna_day3_event`, `yuna_trust_deep`
- 다음: `after3_yuna_freetalk`

- 캐릭터: `yuna_smile.png`
**유나**: 다 읽고 작가한테 한 줄만 써줘. 익명으로.

---

### `after3_yuna_freetalk`
- 배경: `yuna_hideout.png`
- 타입: `free_talk`
- 다음: `after3_yuna_end`
- 컨텍스트: "전학 사흘째 방과후. 유나와 대화를 마친 직후지만 유나는 평소보다 대화를 오래 이어가며 두 사람 사이에 실제로 무슨 일이 있었는지 확인하려 한다."
- 성격: "유나는 차분히 사실을 살피는 독서가다. 질투를 미리 단정하거나 난해한 비유 뒤에 숨기보다, 필요할 때 알고 싶은 것을 직접 묻는다."

- 캐릭터: `yuna_normal.png`
**유나**: *유나는 책갈피를 접었다 펴며 반 걸음 뒤에서 걷는다.* 확인하고 싶은 게 있어.

---

### `after3_yuna_end`
- 배경: `yuna_hideout.png`
- 분기:
  - [`harem_seed`] → `after3_final`
  - [`day3_has_multiple_dates`] → `after3_confront_1`
  - [기본] → `after3_final`

- 캐릭터: `yuna_shy.png`
**유나**: *유나가 노트를 품에 꼭 끌어안는다.*

---

### `after3_dain_affinity_check`
- 배경: `gym.png`
- 호감분기: Dain
  - [40+] → `after3_dain_1`
  - [15+] → `after3_dain_partial_1`
  - [기본] → `after3_dain_low_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_dain_partial_1`
- 배경: `gym.png`
- 다음: `after3_dain_partial_2`

- 캐릭터: `dain_sweat.png`
**{name}**: *체육관 안에서 다인이 무릎 보호대를 고쳐 찬다. 일어서려다 다시 벤치에 앉는다.*

---

### `after3_dain_partial_2`
- 배경: `gym.png`
- 플래그: `dain_day3_partial`
- 다음: `after3_dain_end_first`

- 캐릭터: `dain_normal.png`
**다인**: 좀 쉬면 돼. 오늘은 먼저 가. 내일 보자.

---

### `after3_dain_low_1`
- 배경: `gym.png`
- 플래그: `day3_kept_distance`
- 다음: `after3_final`

- 캐릭터: `dain_normal.png`
**다인**: *다인은 체육관 문을 잡은 채 안으로 들어가지 않는다.* 오늘은 혼자 연습할게. 학교에서 보자.

---

### `after3_dain_1`
- 배경: `gym.png`
- BGM: `daily2.mp3`
- 다음: `after3_dain_3`

- 캐릭터: `dain_sweat.png`
**{name}**: *체육관에서 다인이 혼자 스트레칭 중이다. 가볍게 뛰어오른 뒤 오른쪽 다리를 디디며 몸이 기운다. 다인은 바로 인상을 편다.*

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
  1. "역시 무리였네. 대회는 포기하고 오늘은 쉬어." → `after3_dain_pity_trap_1` | Dain -20 | 플래그: `pitied_dain`
  2. "그럼 여기 있을게. 말하고 싶을 때 말해." → `after3_dain_correct_1` | Dain +13
  3. "네가 무리하지 않게 내가 대신 결정해줄게" → `after3_dain_pity_trap_1` | Dain -15
  4. "걱정 마. 이제부터 내가 계속 지켜볼게" → `after3_dain_pity_trap_1` | Dain -17

- 캐릭터: `dain_sad.png`
**다인**: *다인이 벤치에 앉아 무릎 한곳만 계속 문지른다.*

---

### `after3_dain_pity_trap_1`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_2`

- 캐릭터: `dain_sad.png`
**다인**: *다인은 무릎 위에 손바닥을 붙인 채 나를 올려다본다.*

---

### `after3_dain_pity_trap_2`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_3`

- 캐릭터: `dain_sad.png`
**다인**: 무리.

---

### `after3_dain_pity_trap_3`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_4`

- 캐릭터: `dain_angry.png`
**다인**: 야. 무리한 거 아니야. 이거 그냥 자세 잘못 잡아서 그래.

---

### `after3_dain_pity_trap_4`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_5`

- 캐릭터: `dain_angry.png`
**{name}**: *다인이 가방을 들고 일어서다 오른쪽 다리에 다시 힘을 준다.*

---

### `after3_dain_pity_trap_5`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_6`

- 캐릭터: `dain_sad.png`
**다인**: 너까지 그렇게 보지 마.

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
**다인**: 코치도 그래. 부모도 그래. 다 그래. 너만은 안 그럴 줄 알았는데.

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
**다인**: *다인은 무릎을 감싸던 손을 떼지도 못한 채 나를 본다.*

---

### `after3_dain_correct_2`
- 배경: `gym.png`
- 다음: `after3_dain_correct_3`

- 캐릭터: `dain_normal.png`
**다인**: 야.

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
**다인**: 몰라. 근데 잠깐만 여기 있어. 지금 혼자 있기는 좀 싫어.

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
**다인**: 그냥 얘기나 하자.

---

### `after3_dain_correct_9`
- 배경: `gym.png`
- 다음: `after3_dain_correct_10`

- 캐릭터: `없음`
**{name}**: *옆에 앉자 다인은 배구공을 발끝으로 코트 경계선까지 밀고 운동화 끈을 풀었다 다시 묶는다.*

---

### `after3_dain_correct_10`
- 배경: `gym.png`
- 다음: `after3_dain_correct_11`

- 캐릭터: `dain_laugh.png`
**다인**: 나 원래 이런 얘기 잘 안 하거든. 뭐부터 말해야 하지.

---

### `after3_dain_correct_11`
- 배경: `gym.png`
- 다음: `after3_dain_correct_12`

- 캐릭터: `dain_sweat.png`
**다인**: *다인은 오른쪽 다리를 펴다가 얼굴을 찡그리고 다시 굽힌다. 손바닥은 무릎에서 떨어지지 않는다.*

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
**다인**: 뭐?

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
**{name}**: *다인은 입을 다물고 무릎 위 손가락만 접었다 편다.*

---

### `after3_dain_dilemma_tell_4`
- 배경: `gym.png`
- 다음: `after3_dain_dilemma_tell_5`

- 캐릭터: `dain_sad.png`
**다인**: 알면서 왜 말해. 다음 주 대회인 거 알잖아.

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
**다인**: *다인이 일어나 신발끈을 묶으려 몸을 숙이자 무릎에서 삐걱 소리가 난다. 손은 끈에 닿지 못한다.*

---

### `after3_dain_dilemma_tell_8`
- 배경: `gym.png`
- 다음: `after3_dain_dilemma_final`

- 캐릭터: `dain_sad.png`
**다인**: 제발. 이것만은 아무한테도 말하지 마.

---

### `after3_dain_dilemma_final`
- 배경: `gym.png`
- 선택지:
  1. "미안. 근데 말할 거야." → `after3_dain_tell_confirm` | Dain -20 | 플래그: `told_about_dain_knee`
  2. "알겠어. 네가 직접 말해. 대신 보건실엔 같이 갈게." → `after3_dain_tell_retreat` | Dain +4 | 플래그: `dain_planned_nurse_visit`
  3. "선생님께는 내가 잘 설명할게. 넌 쉬기만 해" → `after3_dain_tell_confirm` | Dain -12
  4. "네가 망설이면 내가 먼저 말해주는 게 낫겠어" → `after3_dain_tell_confirm` | Dain -15

- 캐릭터: `dain_sad.png`
**다인**: *다인은 젖은 눈가를 닦지 않는다. 마지막 말 뒤에 늘 붙던 웃음도 없다.*

---

### `after3_dain_tell_confirm`
- 배경: `gym.png`
- 다음: `after3_dain_tell_confirm_2`

- 캐릭터: `dain_angry.png`
**다인**: 최악이야.

---

### `after3_dain_tell_confirm_2`
- 배경: `gym.png`
- 다음: `after3_dain_tell_confirm_3`

- 캐릭터: `dain_angry.png`
**다인**: *다인은 가방을 들고 나가며 한 번도 뒤를 보지 않는다. 체육관 문이 쾅 닫힌다.*

---

### `after3_dain_tell_confirm_3`
- 배경: `gym.png`
- 플래그: `dain_day3_event`
- 다음: `after3_dain_end_check`

- 캐릭터: `없음`
**{name}**: *다인의 발소리가 닫힌 문 너머로 멀어진다. 빈 체육관에 혼자 남으니 손바닥의 땀이 식는다.*

---

### `after3_dain_tell_retreat`
- 배경: `gym.png`
- 다음: `after3_dain_choice1`

- 캐릭터: `dain_sad.png`
**다인**: *다인은 숨을 길게 뱉고 발끝으로 굴러온 공을 세운다.* ...내가 먼저 말할 때까지 기다려 줄 거야?

---

### `after3_dain_choice1`
- 배경: `gym.png`
- 다음: `after3_dain_choice1_2`

- 캐릭터: `dain_sad.png`
**{name}**: *대답을 재촉하지 않고 옆에 앉는다. 다인은 운동화 끈을 만지다 이쪽을 본다.*

---

### `after3_dain_choice1_2`
- 배경: `gym.png`
- 다음: `after3_dain_choice1_3`

- 캐릭터: `dain_sad.png`
**다인**: 왜 안 물어봐?

---

### `after3_dain_choice1_3`
- 배경: `gym.png`
- 다음: `after3_dain_choice1_react`

- 캐릭터: `dain_shy.png`
**{name}**: 네가 준비되면 먼저 말한다고 했잖아.

---

### `after3_dain_choice1_react`
- 배경: `gym.png`
- 다음: `after3_dain_choice1_react2`

- 캐릭터: `dain_shy.png`
**다인**: *다인은 입술을 깨물다 웃음을 흘리고 손등으로 눈가를 문지른다.*

---

### `after3_dain_choice1_react2`
- 배경: `gym.png`
- 다음: `after3_dain_choice1_react3`

- 캐릭터: `dain_shy.png`
**다인**: 맞아. 지금 물었으면 또 괜찮다고 했을 거야.

---

### `after3_dain_choice1_react3`
- 배경: `gym.png`
- 플래그: `dain_day3_event`
- 다음: `after3_dain_freetalk`

- 캐릭터: `dain_shy.png`
**다인**: 고마워. 보건실 갈 때... 옆에 있어 줘.

---

### `after3_dain_freetalk`
- 배경: `gym.png`
- 타입: `free_talk`
- 다음: `after3_dain_end_check`
- 컨텍스트: "전학 사흘째 방과후. 다인과 대화를 마친 직후다. 다인은 평소처럼 밝게 대하려 하지만 상처와 불안이 남아 있고 주인공이 어떤 관계를 선택했는지 알고 싶어 한다."
- 성격: "다인은 에너지 넘치고 솔직한 배구부 선수다. 상처나 불안이 있어도 관계를 피하지 않으며 느끼는 감정과 궁금한 점을 자기 방식으로 드러낸다."

- 캐릭터: `dain_normal.png`
**다인**: *다인은 손목 보호대를 고쳐 매다 입꼬리가 반 박자 늦게 올라간다.* 오늘은 내가 먼저 말할게.

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
**다인**: *다인의 주먹이 어깨에 닿지만 어제처럼 몸이 밀리지는 않는다.*

---

### `after3_dain_end_first`
- 배경: `gym.png`
- 분기:
  - [`harem_seed`] → `after3_final`
  - [`day3_has_multiple_dates`] → `after3_confront_1`
  - [기본] → `after3_final`

- 캐릭터: `dain_shy.png`
**다인**: *다인이 주먹으로 어깨를 치고는 바로 손을 주머니에 넣는다.*

---

### `after3_confront_1`
- 배경: `school_hallway.png`
- BGM: `mystery.mp3`
- 플래그: `day3_caught_multiple_dates`
- 다음: `after3_confront_2`

- 캐릭터: `seyoun_sad.png`
**{name}**: *약속 장소를 나오자 서연이 복도에서 팔짱을 끼고 기다리고 있다. 손가락이 팔뚝을 일정하게 두드린다.*

---

### `after3_confront_2`
- 배경: `school_hallway.png`
- 다음: `after3_confront_3`

- 캐릭터: `seyoun_sad.png`
**서연**: {name}. 잠깐.

---

### `after3_confront_3`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_4`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연이 복도 끝의 빈 계단참으로 데려간다.*

---

### `after3_confront_4`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_5`

- 캐릭터: `seyoun_sad.png`
**서연**: 점심때 말이야.

---

### `after3_confront_5`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_5_b`

- 캐릭터: `seyoun_sad.png`
**서연**: 네가 다른 애들한테도 그렇게 웃을 때, 나 혼자 착각한 사람 같았어.

---

### `after3_confront_5_b`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_5_c`

- 캐릭터: `dain_sad.png`
**다인**: 나도. 좀 싫었어.

---

### `after3_confront_5_c`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_6`

- 캐릭터: `dain_sad.png`
**다인**: *다인의 운동화 앞코가 복도 바닥을 짧게 문지른다.*

---

### `after3_confront_6`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_choice`

- 캐릭터: `seyoun_sad.png`
**서연**: 점심때 그 난장판 말이야. 대체 무슨 생각으로 우리 셋 모두한테 약속을 잡은 거야?

---

### `after3_confront_choice`
- 배경: `school_stairwell.png`
- 선택지:
  1. "솔직하게 인정한다" → `after3_confront_admit` | Seoyeon -5
  2. "시간대가 다르니까 괜찮을 줄 알았어" → `after3_confront_excuse` | Seoyeon -8
  3. "서연만이야" → `after3_confront_lie_b` | Seoyeon -3 | 플래그: `conscience_minus`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연은 클립보드를 허리 옆으로 내리고 한 걸음 비켜선다. 대답을 기다린다.*

---

### `after3_confront_admit`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_admit_b`

- 캐릭터: `seyoun_sad.png`
**서연**: 거절을 못 해서.

---

### `after3_confront_admit_b`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_admit_2`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연은 도시락 가방 손잡이를 내려다본다.*

---

### `after3_confront_admit_2`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_admit_3`

- 캐릭터: `seyoun_cry.png`
**서연**: 점심때 미안하다고 했지. 그런데 누구한테, 뭘 미안해하는지는 아직 못 들었어.

---

### `after3_confront_admit_3`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_admit_4`

- 캐릭터: `seyoun_cry.png`
**서연**: *서연이 도시락 가방을 집어 들자 손잡이가 손안에서 비틀린다.*

---

### `after3_confront_admit_4`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_admit_4_b`

- 캐릭터: `seyoun_sad.png`
**서연**: 싫다는 말 듣기 싫어서 결정을 우리한테 미룬 거잖아. 그건 솔직한 게 아니야.

---

### `after3_confront_admit_4_b`
- 배경: `school_hallway.png`
- 다음: `after3_confront_admit_5`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연은 돌아서다 교실 문손잡이 앞에 선다.*

---

### `after3_confront_admit_5`
- 배경: `school_hallway.png`
- 다음: `after3_confront_admit_6`

- 캐릭터: `seyoun_sad.png`
**서연**: 오늘은 옥상 안 열어놓을게.

---

### `after3_confront_admit_6`
- 배경: `school_hallway.png`
- 다음: `after3_confront_end`

- 캐릭터: `seyoun_sad.png`
**{name}**: *서연은 등을 편 채 주먹을 코트 주머니 안으로 감춘다.*

---

### `after3_confront_excuse`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_excuse_b`

- 캐릭터: `seyoun_angry.png`
**서연**: 그게 문제라는 걸 모르겠어?

---

### `after3_confront_excuse_b`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_excuse_2`

- 캐릭터: `seyoun_angry.png`
**서연**: *서연은 눈을 가늘게 뜬다. 손등의 화장 자국은 아직 남아 있다.*

---

### `after3_confront_excuse_2`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_excuse_2_b`

- 캐릭터: `seyoun_angry.png`
**서연**: 몇 명이랑 약속했냐가 문제가 아니야. 나한테 그 약속이 뭐였는지가 문제야.

---

### `after3_confront_excuse_2_b`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_end`

- 캐릭터: `seyoun_angry.png`
**서연**: *서연은 입술을 열었다가 다물고 클립보드를 가슴 쪽으로 당긴다.*

---

### `after3_confront_lie_b`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_lie`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연의 손에서 클립보드가 조금 내려간다. 이번에는 {name}을 바로 본다.*

---

### `after3_confront_lie`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_lie_2`

- 캐릭터: `seyoun_sad.png`
**서연**: 정말? 그 말, 믿어도 되는 거지?

---

### `after3_confront_lie_2`
- 배경: `school_hallway.png`
- 다음: `after3_confront_lie_2_b`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연은 대답을 기다리지 않고 복도 끝으로 걸어간다. 클립보드를 쥔 손은 끝내 풀리지 않는다.*

---

### `after3_confront_lie_2_b`
- 배경: `school_hallway.png`
- 다음: `after3_confront_end`

- 캐릭터: `seyoun_sad.png`
**{name}**: *서연은 등을 편 채 걷지만 클립보드 모서리가 손바닥 안에서 구겨진다.*

---

### `after3_confront_end`
- 배경: `school_hallway.png`
- 다음: `after3_final`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연은 텅 빈 복도 끝으로 걸어간다. 곧게 편 등 옆으로 쥔 주먹만 보인다.*

---

### `after3_final`
- 배경: `school_hallway.png`
- 다음: `after3_group_route_check`

- 캐릭터: `없음`
**{name}**: *방과후가 끝났다. 복도 조명이 하나씩 꺼진다.*

---

### `after3_group_route_check`
- 배경: `school_hallway.png`
- 분기:
  - [`homeroom_route_unlocked`] → `after3_group_teacher_companion`
  - [`nurse_route_unlocked`] → `after3_group_nurse_companion`
  - [기본] → `haeun_check`

- 캐릭터: `없음`

---

### `after3_group_teacher_companion`
- 배경: `school_event_classroom.png`
- 타입: `group_free_talk`
- 다음: `after3_group_return`

- 캐릭터: `없음`
**담임선생님과 동행**: *수업이 끝난 공개 교실. 담임이 행사 원고를 펼치고 함께 온 인물은 다른 자료를 맞은편에 내려놓는다. 시계를 본 담임이 두 쪽을 번갈아 짚는다.* "시간은 한쪽 일만 끝내기에도 빠듯하네. 누구 일부터 도울래?"

---

### `after3_group_nurse_companion`
- 배경: `nurse_room.png`
- 타입: `group_free_talk`
- 다음: `after3_group_return`

- 캐릭터: `없음`
**보건선생님과 동행**: *건강 점검표와 운동부 물품 상자가 나란히 놓인다. 보건선생님이 빈칸을 짚고 함께 온 인물은 상자 속 부족한 물품을 꺼낸다.* "둘 다 오늘 확인해야 하는데 하나부터 골라야겠네. 누구 일을 먼저 볼까?"

---

### `after3_group_return`
- 배경: `school_hallway.png`
- 다음: `haeun_check`

- 캐릭터: `없음`
**{name}**: *대화를 마치고 복도로 나온다.*

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
**민수**: *민수는 빨대 포장지를 끝까지 접어 테이블 위에 내려놓는다.*

---

### `minsu_d3_6`
- 배경: `school.png`
- 다음: `minsu_d3_6b`

- 캐릭터: `없음`
**{name}**: 맞아.

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
**{name}**: *거절도 배려다. 전 학교에서 나는 소정이에게 고백할 기회도, 거절할 기회도 주지 못했다. 끝내 아무 말도 못 했으니까.*

---

### `minsu_d3_9`
- 배경: `school.png`
- 다음: `minsu_d3_10`

- 캐릭터: `없음`
**민수**: *민수는 더 말하지 않고 끝까지 접은 빨대 포장지를 내 쪽으로 밀어 둔다.*

---

### `minsu_d3_10`
- 배경: `school.png`
- 다음: `night3_start`

- 캐릭터: `없음`
**민수**: 내일 학교에서 보자. 진지하게 생각해.

---

### `haeun_warn_1`
- 배경: `school_hallway.png`
- 배경톤: `empty`
- 다음: `haeun_warn_1_b`

- 캐릭터: `없음`
**{name}**: *학생회실을 나오자 빈 복도 끝에 누군가 기다리고 있다.*

---

### `haeun_warn_1_b`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_2`

- 캐릭터: `haeun_normal.png`
**하은**: *하은이 벽에 기대 학생회 팔찌를 만지작거린다.*

---

### `haeun_warn_2`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_2_b`

- 캐릭터: `haeun_normal.png`
**하은**: {name} 씨.

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
**하은**: 선배, 서연 선배 방금 봤어요?

---

### `haeun_warn_3_b`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_3_c`

- 캐릭터: `haeun_normal.png`
**하은**: 선배가 울었어요.

---

### `haeun_warn_3_c`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_4`

- 캐릭터: `haeun_normal.png`
**{name}**: *뭐?*

---

### `haeun_warn_4`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_4b`

- 캐릭터: `haeun_normal.png`
**하은**: 학생회실 뒤 화장실에서 잠깐 봤어요. 저한테는 괜찮다고 했는데 안 괜찮아 보였어요.

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
**하은**: 말 걸지 말라고 했는데 세면대 앞에서 한참 나오지 않았어요.

---

### `haeun_warn_5c`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_5c_b`

- 캐릭터: `haeun_normal.png`
**{name}**: *복도 끝 화장실 쪽을 돌아본다.*

---

### `haeun_warn_5c_b`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_6`

- 캐릭터: `seyoun_sad.png`
**서연**: 네가 다른 애들한테도 나한테 하듯 웃는 게 좀 싫었어.

---

### `haeun_warn_6`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_6_b`

- 캐릭터: `haeun_firm.png`
**하은**: 제가 따라가면 또 괜찮다고 할 거예요. {name} 씨 말은 들을지도 몰라요.

---

### `haeun_warn_6_b`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_7`

- 캐릭터: `haeun_firm.png`
**하은**: *하은은 학생회 팔찌를 손목 안쪽으로 돌린다.*

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
**하은**: *하은이 입술을 다문다. 학생회 팔찌의 고리를 만지며 교무실 쪽을 확인한다.*

---

### `haeun_warn_7_c`
- 배경: `school_hallway.png`
- 다음: `haeun_freetalk`

- 캐릭터: `haeun_firm.png`
**하은**: 설득하라는 건 아니에요. 그냥 혼자 두지만 말아 주세요.

---

### `haeun_freetalk`
- 배경: `school_hallway.png`
- 타입: `free_talk`
- 다음: `haeun_affinity_check`
- 컨텍스트: "하은은 방금 서연이 혼자 울고 있는 모습을 봤다고 알렸고 설득하려 들지 말더라도 오늘만은 혼자 두지 말아 달라고 부탁했다. 아직 복도에 함께 서 있으며 주인공이 어떻게 할 생각인지 대답을 기다린다."
- 성격: "하은은 예의를 지키면서도 서연이 상처받은 일을 가볍게 넘기지 않는다. 변명보다 지금 할 행동을 듣고 싶어 한다. 주인공의 대답을 듣고 묻거나 반박할 수 있지만 서연의 마음을 대신 단정하거나 주인공에게 특정 행동을 강제로 수행시키지 않는다. 연애나 성적인 분위기로 전환하지 않는다. 호감도는 하은의 개인적인 신뢰와 호의만 나타내며 어떤 엔딩에도 영향을 주지 않는다."

- 캐릭터: `haeun_worried.png`
**하은**: *하은은 돌아서지 않고 주인공을 똑바로 본다.* "…대답은 듣고 갈게요. 지금 어떻게 할 생각이에요?"

---

### `haeun_affinity_check`
- 배경: `school_hallway.png`
- 호감분기: Haeun
  - [8+] → `haeun_affinity_high_1`
  - [0+] → `haeun_affinity_neutral_1`
  - [기본] → `haeun_affinity_low_1`
- 다음: `haeun_affinity_low_1`

- 캐릭터: `haeun_worried.png`

---

### `haeun_affinity_high_1`
- 배경: `school_hallway.png`
- 다음: `haeun_affinity_high_2`

- 캐릭터: `haeun_relieved.png`
**하은**: *하은은 한동안 {name}의 얼굴을 살피다 손목 안쪽으로 돌아간 학생회 팔찌를 바로잡는다.* ...그 말은 믿을게요.

---

### `haeun_affinity_high_2`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_7_d`

- 캐릭터: `haeun_relieved.png`
**하은**: 서연 선배가 괜찮다고 해도 오늘은 한 번만 더 물어봐 주세요. 안 괜찮을 때도 그렇게 말하는 사람이니까.

---

### `haeun_affinity_neutral_1`
- 배경: `school_hallway.png`
- 다음: `haeun_affinity_neutral_2`

- 캐릭터: `haeun_worried.png`
**하은**: *하은은 팔찌 고리에서 손을 떼지 않은 채 천천히 고개를 끄덕인다.* 아직 다 믿는 건 아니에요.

---

### `haeun_affinity_neutral_2`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_7_d`

- 캐릭터: `haeun_worried.png`
**하은**: 그래도 방금 한 말은 지키는지 볼게요. 오늘은 서연 선배를 혼자 두지만 마세요.

---

### `haeun_affinity_low_1`
- 배경: `school_hallway.png`
- 다음: `haeun_affinity_low_2`

- 캐릭터: `haeun_worried.png`
**하은**: *하은은 팔찌를 움켜쥔 채 반걸음 물러난다.* 지금은 {name} 씨한테 서연 선배를 맡기기 어렵겠네요.

---

### `haeun_affinity_low_2`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_7_d`

- 캐릭터: `haeun_worried.png`
**하은**: 저도 학생회 담당 선생님께 말씀드릴게요. 서연 선배한테 가더라도 더 상처 주는 말은 하지 마세요.

---

### `haeun_warn_7_d`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_8`

- 캐릭터: `haeun_worried.png`
**하은**: *하은이 복도 끝으로 사라진 뒤, 벽걸이에는 서연의 학생회 완장만 남는다.*

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
**{name}**: *방에 돌아와 가방을 의자에 걸어 둔다.*

---

### `night3_start_2`
- 배경: `room_my.png`
- 분기:
  - [`day3_has_multiple_dates`] → `night3_cheat_msg_1`
  - [기본] → `night3_faithful_check`

- 캐릭터: `없음`
**{name}**: *책상 위에 엎어 둔 핸드폰 화면을 켠다.*

---

### `night3_faithful_check`
- 배경: `room_my.png`
- 분기:
  - [`seoyeon_day3_event`] → `night3_faithful_msg_seo_1`
  - [`yuna_day3_event`] → `night3_faithful_msg_yuna_1`
  - [`dain_day3_event`] → `night3_faithful_msg_dain_1`
  - [기본] → `night3_dream_1`

- 캐릭터: `없음`
**{name}**: *읽지 않은 메시지가 떠 있다.*

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
**서연**: 근데 또 와도 돼

---

### `night3_faithful_msg_seo_3`
- 배경: `room_my.png`
- 다음: `night3_dream_1`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: *메시지를 끝까지 읽고 화면을 끈다. 방 안에서 휴대폰 빛이 사라진다.*

---

### `night3_faithful_msg_yuna_1`
- 배경: `room_my.png`
- 다음: `night3_faithful_msg_yuna_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *유나가 노트 한 줄을 찍은 사진을 보낸다.*

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
**{name}**: *'ㅋㅋ'와 다음 문장 사이가 비어 있다. 다인의 새 메시지는 오지 않는다.*

---

### `night3_dream_1`
- 배경: `school.png`
- 다음: `night3_dream_2_b`

- 캐릭터: `없음`
**{name}**: *꿈속에서 누군가와 나란히 걷는다. 얼굴은 보이지 않고 발소리만 같은 박자로 이어진다.*

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
**{name}**: *커튼 사이로 들어온 아침 햇살에 눈을 뜬다. 핸드폰 갤러리를 열어 소정이 사진까지 스크롤한 뒤 길게 누른다.*

---

### `night3_faithful_reflect_2_b`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_2_c`

- 캐릭터: `없음`
**{name}**: *'삭제하시겠습니까?' 확인 창이 뜬다. 손가락이 버튼 바로 위에 떠 있다.*

---

### `night3_faithful_reflect_2_c`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_2_d`

- 캐릭터: `없음`
**{name}**: *1초 동안 화면을 내려다본다. 소정이 책상의 낙서와 고개를 돌렸던 38번의 아침이 차례로 떠오른다.*

---

### `night3_faithful_reflect_2_d`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_3`

- 캐릭터: `없음`
**{name}**: *그래. 삭제 버튼에 올린 손가락으로 화면을 누른다.*

---

### `night3_faithful_reflect_3`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_3_b`

- 캐릭터: `없음`
**{name}**: *삭제 버튼을 누르지 않고 사진을 새 폴더로 옮긴다. 폴더 이름은 '기록'.*

---

### `night3_faithful_reflect_3_b`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_4`

- 캐릭터: `없음`
**{name}**: *'거절도 네가 해야 할 일이야.' 민수의 말이 떠오른다. 갤러리 속 소정이는 웃고 있고 메모장 38번의 보내기 버튼은 아직 파랗다.*

---

### `night3_faithful_reflect_4`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_4_b`

- 캐릭터: `없음`
**{name}**: *갤러리에서 소정이 사진이 사라지고 빈칸만 남는다.*

---

### `night3_faithful_reflect_4_b`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_4_c`

- 캐릭터: `없음`
**{name}**: *빈 앨범 썸네일 위를 엄지로 문지른다.*

---

### `night3_faithful_reflect_4_c`
- 배경: `room_my.png`
- 다음: `night3_dream_3`

- 캐릭터: `없음`
**{name}**: *핸드폰을 덮자 검은 화면에 갤러리의 빈칸이 겹쳐 보인다.*

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
- 스탯: Seoyeon +1
- 다음: `night3_end`

- 캐릭터: `없음`
**{name}**: *눈을 감자 옥상 난간이 먼저 떠오른다.*

---

### `night3_dream_yuna_bonus`
- 배경: `room_my.png`
- 스탯: Yuna +4
- 다음: `night3_end`

- 캐릭터: `없음`
**{name}**: *눈을 감자 도서관 별관 창문이 먼저 떠오른다.*

---

### `night3_dream_dain_bonus`
- 배경: `room_my.png`
- 스탯: Dain +2
- 다음: `night3_end`

- 캐릭터: `없음`
**{name}**: *눈을 감자 체육관 바닥에 공 튀는 소리가 떠오른다.*

---

### `night3_cheat_msg_1`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_2`

- 캐릭터: `없음`
**{name}**: *방에 돌아오자마자 핸드폰 화면을 켠다.*

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
**서연**: 부탁이야

---

### `night3_cheat_msg_3_b`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_4`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: *'부탁'을 쓴 뒤 한참 동안 다음 글자가 이어지지 않는다.*

---

### `night3_cheat_msg_4`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_4_b`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 다 알고 있었어

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
**유나**: 피하지 마. 그것만

---

### `night3_cheat_msg_dain_1`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_7`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: ㅋㅋ 농담이었으면 좋겠다

---

### `night3_cheat_msg_7`
- 배경: `room_my.png`
- 다음: `night3_nightmare_1`

- 캐릭터: `dain_normal.png` @ 0.35
**유나**: *유나에게서 말풍선 세 개가 연달아 올라온다.*

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
**{name}**: *서연의 대화방을 연다. 마지막 말은 '부탁이야'. 그 뒤로 새 메시지가 없다.*

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
**{name}**: *유나가 보낸 세 줄 아래에는 읽음 표시만 붙어 있다.*

---

### `night3_nightmare_4`
- 배경: `room_my.png`
- 다음: `night3_nightmare_4_b`

- 캐릭터: `yuna_sad.png`
**{name}**: *마지막 말풍선에는 '피하지 마. 그것만.'이라고 적혀 있다.*

---

### `night3_nightmare_4_b`
- 배경: `room_my.png`
- 다음: `night3_nightmare_5`

- 캐릭터: `dain_sad.png`
**{name}**: *다인의 대화방에는 웃음 표시가 붙은 문장 하나만 와 있다.*

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
**{name}**: *서연의 입력창에 '내일 얼굴 보고 말할게.'라고 쓰고 전송 버튼 위에 엄지를 올린다.*

---

### `night3_nightmare_yuna`
- 배경: `room_my.png`
- 다음: `night3_nightmare_end`

- 캐릭터: `없음`
**{name}**: *유나의 입력창에 '내일 피하지 않고 말할게.'라고 쓰자 커서가 마지막 마침표 뒤에서 깜빡인다.*

---

### `night3_nightmare_dain`
- 배경: `room_my.png`
- 다음: `night3_nightmare_end`

- 캐릭터: `없음`
**{name}**: *다인의 입력창에 '기다리게 해서 미안해. 내일 말할게.'라고 쓰고 전송 아이콘 테두리를 엄지로 누른다.*

---

### `night3_nightmare_end`
- 배경: `room_my.png`
- 다음: `night3_nightmare_end_3`

- 캐릭터: `없음`
**{name}**: *입력창 하나에 문장이 남고 나머지 두 대화방은 닫힌다. 아직 보내지는 않았다.*

---

### `night3_nightmare_end_3`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_2`

- 캐릭터: `없음`
**{name}**: *새벽 3시까지 잠들지 못한 채 메시지 창을 닫고 갤러리를 연다. 소정이 사진 위에 엄지를 얹는다.*

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
**{name}**: *방 불을 끄고 핸드폰을 엎어 둔다.*

---

### `forced_violation_day3_after_seoyeon`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day3_seoyeon_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day3_seoyeon_excuse`

**서연**: *대화가 끝난 뒤에도 서연은 한동안 말이 없다. 다시 입을 열었을 때는 목소리가 차갑게 가라앉아 있다.* 방금 네가 한 짓, 없던 일처럼 넘길 생각 하지 마. 당분간 나한테 다가오지도, 연락하지도 마.

---

### `forced_violation_day3_seoyeon_apologize`
- 다음: `forced_violation_day3_resume`

**서연**: *서연은 사과를 듣고도 표정을 풀지 않는다.* 사과는 들었어. 그렇다고 없던 일이 되진 않아. 말한 대로 당분간 연락하지 마.

---

### `forced_violation_day3_seoyeon_excuse`
- 다음: `forced_violation_day3_resume`

**서연**: *서연이 말을 끊는다.* 오해? 내가 싫다고 한 순간부터 오해일 수 없어. 더 말하지 마.

---

### `forced_violation_day3_after_yuna`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day3_yuna_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day3_yuna_excuse`

**유나**: *대화가 끊긴 뒤, 유나는 짧게 숨을 고른다. 굳은 얼굴에는 경계만 남았다.* 내가 싫다는 걸 알면서 무시했잖아. 지금은 네 얼굴도 보기 싫어. 더는 연락하지 마.

---

### `forced_violation_day3_yuna_apologize`
- 다음: `forced_violation_day3_resume`

**유나**: *유나는 한참 뒤에야 짧게 대답한다.* 사과했다고 없어지진 않아. 이제 그만해.

---

### `forced_violation_day3_yuna_excuse`
- 다음: `forced_violation_day3_resume`

**유나**: *유나는 해명을 끝까지 듣지 않는다.* 싫다고 했어. 설명할 일 아니야.

---

### `forced_violation_day3_after_dain`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day3_dain_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day3_dain_excuse`

**다인**: *다인은 평소처럼 웃어넘기지 않는다. 한참 뒤에야 짧고 굳은 목소리가 돌아온다.* 장난 아니야. 내가 싫다는데 억지로 한 거, 절대 그냥 안 넘어가.

---

### `forced_violation_day3_dain_apologize`
- 다음: `forced_violation_day3_resume`

**다인**: *다인은 한참 뒤에야 짧게 답한다.* 그래. 그럼 오늘은 여기까지야. 다음 얘기는 내가 정할게.

---

### `forced_violation_day3_dain_excuse`
- 다음: `forced_violation_day3_resume`

**다인**: *다인의 목소리가 거칠어진다.* 아니. 핑계 대지 마. 싫다고 했는데도 한 건 너야.

---

### `forced_violation_day3_after_teacher`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day3_teacher_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day3_teacher_excuse`

**담임선생님**: *대화가 끝난 뒤, 담임은 더 단호한 목소리로 선을 긋는다.* 방금 행동은 명백히 선을 넘었어. 더는 가까이 오지 마. 이 일은 필요한 절차대로 처리할 거야.

---

### `forced_violation_day3_teacher_apologize`
- 다음: `forced_violation_day3_resume`

**담임선생님**: *담임은 짧게 숨을 고르고 말을 잇는다.* 사과는 들었어. 그래도 절차는 그대로 진행할 거야. 더 말하지 마.

---

### `forced_violation_day3_teacher_excuse`
- 다음: `forced_violation_day3_resume`

**담임선생님**: *담임이 해명을 끊는다.* 지금은 해명부터 할 상황이 아니야. 더 말하지 말고 거리를 둬.

---

### `forced_violation_day3_after_nurse`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day3_nurse_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day3_nurse_excuse`

**보건선생님**: *대화가 끊기자 보건선생님의 목소리에서 평소의 장난기가 사라진다.* 지금부터는 거리를 지켜. 방금 일은 기록하고 필요한 사람에게 알릴 거야.

---

### `forced_violation_day3_nurse_apologize`
- 다음: `forced_violation_day3_resume`

**보건선생님**: *보건선생님은 잠시 말이 없다가 단호하게 답한다.* 사과는 들을게. 그래도 기록과 연락은 그대로 할 거야. 오늘 대화는 여기까지.

---

### `forced_violation_day3_nurse_excuse`
- 다음: `forced_violation_day3_resume`

**보건선생님**: *보건선생님의 목소리가 더 낮아진다.* 오해라고 부르면 달라질 것 같아? 싫다는 의사를 무시한 건 사실이야.

---

### `forced_violation_day3_after_haeun`
- 선택지:
  1. "잘못을 인정하고 거리를 둔다." → `forced_violation_day3_haeun_apologize`
  2. "오해였다고 둘러댄다." → `forced_violation_day3_haeun_excuse`

**하은**: *하은이 한 걸음 물러서며 학생회 팔찌를 움켜쥔다.* 가까이 오지 마세요. 지금 선생님 부를 거예요.

---

### `forced_violation_day3_haeun_apologize`
- 다음: `forced_violation_day3_resume`

**하은**: *하은은 대답하지 않은 채 교무실 쪽으로 물러난다. 주인공이 따라오지 않는지 끝까지 확인한다.*

---

### `forced_violation_day3_haeun_excuse`
- 다음: `forced_violation_day3_resume`

**하은**: 오해 아니에요. 따라오지 마세요. *하은은 거리를 둔 채 교무실 문을 연다.*

---

### `forced_violation_day3_resume`

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
**{name}**: *핸드폰 캘린더를 연다. 오전 서연, 오후 유나, 저녁 다인. 세 약속 사이 이동 시간을 맞추느라 어젯밤 잠을 설쳤고 하나라도 겹치면 들킨다.*

---

### `minsu_cheer_4_d`
- 배경: `room_my.png`
- 다음: `minsu_cheer_4_e`

- 캐릭터: `minsu_normal.png` @ 0.35
**{name}**: *세 사람의 이름이 한 화면에 놓인다. 캘린더를 잠갔다가 다시 연다.*

---

### `minsu_cheer_4_e`
- 배경: `room_my.png`
- 다음: `morning4_start_2`

- 캐릭터: `minsu_normal.png` @ 0.35
**{name}**: *세 약속 사이의 이동 시간을 다시 계산하고 캘린더 알림을 모두 켠다.*

---

### `morning4_start_2`
- 배경: `room_my.png`
- 분기:
  - [`route_seoyeon`] → `morning4_seo_msg_1`
  - [`route_yuna`] → `morning4_yuna_msg_1`
  - [`route_dain`] → `morning4_dain_msg_1`
  - [기본] → `morning4_fallback_msg`

- 캐릭터: `없음`
**{name}**: *심호흡하고 약속 메시지를 다시 확인한다.*

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
**{name}**: *두 문장뿐이다. '늦으면 간다' 뒤에는 마침표도 없다.*

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
**{name}**: *주말 아침. 알림 몇 개를 확인하고 핸드폰을 내려놓는다. 창밖으로 아파트 청소차 소리가 지나간다.*

---

### `morning4_hidden_check`
- 배경: `room_my.png`
- 분기:
  - [`homeroom_day3`] → `morning4_manuscript_check`
  - [`nurse_day3`] → `hidden_nurse_d4_morning_1`
  - [기본] → `hidden_nurse_d4_check`

- 캐릭터: `없음`
**{name}**: *주말 아침, 학교 앞 사거리에서 신호를 기다린다.*

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
**{name}**: *정문 안쪽에서 문 닫히는 소리가 난다. 그사이 보행 신호가 켜진다.*

---

### `hidden_homeroom_d4_1`
- 배경: `street.png`
- BGM: `morning.mp3`
- 다음: `hidden_homeroom_d4_1_b`

- 캐릭터: `teacher_normal.png`
**{name}**: *학교 정문 한쪽이 열려 있다. 안쪽에서 담임선생님이 종이봉투를 들고 나온다.*

---

### `hidden_homeroom_d4_1_b`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_2`

- 캐릭터: `teacher_normal.png`
**{name}**: *눈이 마주치자 담임은 종이봉투를 등 뒤로 옮긴다. 봉투 안 원고가 바스락거린다.*

---

### `hidden_homeroom_d4_2`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 어? {name}?

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
**{name}**: *종이봉투 손잡이가 한쪽만 팽팽하다. 접힌 원고 모서리가 밖으로 비친다.*

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
**{name}**: *정문 경비실의 라디오 소리만 둘 사이를 메운다.*

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
**담임선생님**: *말을 끝낸 뒤 종이봉투 손잡이를 두 번 접어 쥔다.*

---

### `hidden_homeroom_d4_choice`
- 배경: `street.png`
- 선택지:
  1. "좋아요. 합평회 구경해도 돼요?" → `hidden_homeroom_d4_cafe_1` | Teacher +5
  2. "오늘은 약속이 있어서요." → `hidden_homeroom_d4_decline` | Teacher +4
  3. "저만 따로 불러내셔도 됐을 텐데요." → `hidden_homeroom_d4_choice_trap` | Teacher -4

- 캐릭터: `teacher_normal.png`
**{name}**: *종이봉투 안에서 원고 모서리끼리 부딪힌다.*

---

### `hidden_homeroom_d4_choice_trap`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_decline_b`

- 캐릭터: `teacher_worried.png`
**담임선생님**: *종이봉투를 몸 쪽으로 당긴다.* 그런 오해가 생기지 않게 공개 합평으로 부른 거야.

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
**담임선생님**: *커피를 한 모금 마신다.* 좋아. 그럼 서로 확인한 걸로 하자.

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
**담임선생님**: 칭찬보다 읽다 멈춘 지점을 듣는 거야. 그게 제일 아프고 제일 쓸모 있어.

---

### `hidden_homeroom_d4_cafe_choice`
- 배경: `cafe.png`
- 배경톤: `warm`
- 선택지:
  1. "결말은 아직 못 정하셨어요?" → `hidden_homeroom_d4_cafe_choice_a` | Teacher +7
  2. "문예부 애들한테도 전부 보여주실 거죠?" → `hidden_homeroom_d4_cafe_choice_b` | Teacher +4
  3. "선생님 글이면 애들도 좋다고 하겠네요." → `hidden_homeroom_d4_cafe_trap` | Teacher -4

- 캐릭터: `teacher_normal.png`
**담임선생님**: *커피잔을 내려놓고 안쪽 테이블의 합평본을 턱으로 가리킨다.*

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

### `hidden_homeroom_d4_cafe_trap`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 그런 합평이면 받을 이유가 없지. 선생님 글이라고 봐주는 건 싫어.

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
**담임선생님**: *컵홀더를 접던 손이 펴진다. 종이 주름은 그대로 남는다.*

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
**담임선생님**: *원고마다 번호를 적고 마지막 한 부도 안쪽 테이블로 보낸다.*

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
- 다음: `hidden_homeroom_d4_freetalk`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *문예부원들과 계산을 확인한 뒤 학교 쪽으로 먼저 걸어간다.*

---

### `hidden_homeroom_d4_freetalk`
- 배경: `cafe.png`
- 배경톤: `warm`
- 타입: `free_talk`
- 다음: `hidden_nurse_d4_check`
- 컨텍스트: "4일차 아침, 학교 근처 카페에서 담임의 오래된 원고에 대한 의견을 나눈 직후다. 담임은 주인공의 솔직한 감상을 고맙게 받아들였지만 두 사람은 여전히 교사와 학생이다. 원고에 담긴 사실은 앞 장면에서 밝혀진 범위만 사용하고 사적인 친밀감을 교사와 학생의 경계를 넘는 관계로 바꾸지 않는다."
- 성격: "담임은 신중하고 책임감 있는 교사이자 오래 글을 써 온 사람이다. 평가를 들을 때는 솔직한 긴장과 안도감을 보이지만 학생에게 위로나 비밀 유지를 강요하지 않고 성숙하게 대화를 이끈다."

- 캐릭터: `teacher_normal.png`
**담임선생님**: *식은 커피 옆에 원고를 가지런히 놓는다.* 평가는 끝났고. 이제 네가 하고 싶었던 얘기, 들어 볼까?

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
**보건선생님**: 응. 오늘 상태를 확인하고 다음에 도움받을 곳까지 정해두자.

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
  1. "담임이랑 상담실에도 말해볼게요." → `hidden_nurse_d4_morning_choice_a` | Nurse +8
  2. "아직은 잘 모르겠어요." → `hidden_nurse_d4_morning_choice_b` | Nurse +4
  3. "선생님한테만 말하면 안 돼요?" → `hidden_nurse_d4_morning_choice_trap` | Nurse -5

- 캐릭터: `nurse_normal.png`
**{name}**: *안내문에는 담임 상담, 위클래스, 보호자 연락 순서가 적혀 있다.*

---

### `hidden_nurse_d4_morning_choice_trap`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_13`

- 캐릭터: `nurse_worried.png`
**보건선생님**: 안 돼. 네가 기대는 어른이 나 하나뿐이면, 내가 없는 순간 다시 혼자가 돼.

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

### `hidden_homeroom_d4_low`
- 배경: `street.png`
- 다음: `hidden_nurse_d4_check`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *약속 장소 앞에서 담임이 종이봉투를 품 쪽으로 당긴다.* 오늘은 원고를 보여주지 않을게. 학교에서 보자.

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
**{name}**: *책상 한쪽에 행사 구급함과 검진 도구가 쌓여 있다. 라벨을 붙이던 보건선생님이 안경 너머로 문 쪽을 본다.*

---

### `hidden_nurse_d4_1_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_2`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님이 돌아본다.* 어? 진짜 왔어?

---

### `hidden_nurse_d4_2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_2_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 학교 행사 응급키트 만들 사람을 구했는데 진짜 지원할 줄은 몰랐네.

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

- 캐릭터: `nurse_dry_smile.png`
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
**보건선생님**: *빈 파우치를 건넨다.* 거즈 두 장, 소독솜 세 개씩. 개인 정보 있는 서류는 선생님이 할게.

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

- 캐릭터: `nurse_tired.png`
**보건선생님**: 대학병원에선 이런 준비도 혼자 맡는 날이 많았어.

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

- 캐릭터: `nurse_tired.png`
**보건선생님**: 야간 근무 때는 간호사 세 명 몫을 혼자 하는 날도 있었어.

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

- 캐릭터: `nurse_tired.png`
**보건선생님**: *서류철을 덮는다. 볼펜 끝이 표지 위에서 한 번 미끄러진다.*

---

### `hidden_nurse_d4_4_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_e`

- 캐릭터: `nurse_tired.png`
**보건선생님**: 그때 나한테 제일 힘들었던 건 일의 양이 아니었어.

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
**{name}**: *서류 맨 위 병상 번호 칸에 펜촉 자국이 남아 있다.*

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
  1. "언제 보건교사가 되길 잘했다고 느껴요?" → `hidden_nurse_d4_name_choice_a` | Nurse +4
  2. "병원과 학교는 뭐가 제일 달라요?" → `hidden_nurse_d4_name_choice_b` | Nurse +2
  3. "학교에선 크게 다칠 일도 드물어서 마음은 좀 편하시겠어요." → `hidden_nurse_d4_name_trap` | Nurse -3

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

### `hidden_nurse_d4_name_trap`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 크게 다치는 일만 일이면 좋겠네. 말 못 하고 버티는 애들이 더 많아.

---

### `hidden_nurse_d4_6`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_6_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 고마워. 덕분에 빨리 끝났어. 별건 아니고.

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
  1. "응급키트 라벨도 붙이고 갈게요." → `hidden_nurse_d4_meal_walk` | Nurse +5
  2. "괜찮아요, 저 이만 갈게요" → `hidden_nurse_d4_pass` | Nurse +2
  3. "선생님이 하시는 게 더 빠르겠어요." → `hidden_nurse_d4_trap` | Nurse -4

- 캐릭터: `nurse_normal.png`
**보건선생님**: 남은 건 라벨 붙이기야. 행사 스태프들이 간식 사러 가는데 같이 마무리할 사람?

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
**보건선생님**: 확인하려고 먹은 거지. *물을 한 모금 마신다.* 이건 응급키트로도 못 살린다.

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
**보건선생님**: *라벨 한 장이 상자 모서리에 비뚤게 붙는다.*

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
**보건선생님**: {name}, 확인표 놓고 간다.

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
- 다음: `hidden_nurse_d4_freetalk`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *완성된 응급키트 상자를 행사 담당 교사에게 건넨다.*

---

### `hidden_nurse_d4_pass`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_freetalk`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그래. 주말에 와준 것만으로 충분해. 조심히 가.

---

### `hidden_nurse_d4_trap`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_freetalk`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 빠르긴 하겠지. 그래도 같이 하자고 물은 건 속도 때문이 아니었는데.

---

### `hidden_nurse_d4_freetalk`
- 배경: `nurse_room.png`
- 타입: `free_talk`
- 다음: `morning4_end`
- 컨텍스트: "4일차 아침, 학교 행사 준비와 응급키트 정리를 함께 마친 보건실이다. 함께 간식을 먹었을 수도 있고 주인공이 먼저 쉬기로 했을 수도 있으므로, 저장된 사건만 사실로 다룬다. 두 사람은 보건교사와 학생이며 신뢰가 깊어졌지만 전문적 경계는 유지된다."
- 성격: "보건선생님은 실용적이고 세심하며 피곤한 순간에도 유머를 잃지 않는다. 자신의 과거를 과장해 털어놓기보다 필요한 만큼만 솔직하게 말하고 학생의 건강과 선택을 존중한다."

- 캐릭터: `nurse_normal.png`
**보건선생님**: *마지막 응급키트의 지퍼를 닫고 맞은편 의자를 가리킨다.* 수고했어. 이제 잠깐은 네 얘기 들어도 되겠네.

---

### `hidden_nurse_d4_low`
- 배경: `nurse_room.png`
- 다음: `morning4_end`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님이 정리 중인 응급키트 지퍼를 닫는다.* 오늘은 혼자 마칠게. 너도 네 일정으로 돌아가.

---

### `morning4_end`
- 배경: `room_my.png`
- 분기:
  - [`day3_caught_multiple_dates`] → `day4_caught_fallout_1`
  - [`harem_seed`] → `day4_harem_fallout_1`
  - [`route_dain`] → `date_dain_1`
  - [`route_yuna`] → `date_yuna_1`
  - [`route_seoyeon`] → `date_seo_1`
  - [`accepted_dain_date`] → `date_dain_1`
  - [`accepted_yuna_date`] → `date_yuna_1`
  - [`accepted_seoyeon_date`] → `date_seo_1`
  - [기본] → `day4_night_start`

- 캐릭터: `없음`
**{name}**: *집으로 돌아와 거울 옆 시계를 확인하고 다시 현관에서 신발끈을 묶는다.*

---

## 4일차 — 점심 `day4_2_lunch`

### `date_seo_1`
- 배경: `park.png`
- BGM: `date.mp3`
- 조건: `route_seoyeon`
- 다음: `date_seo_tier_check`

- 캐릭터: `seyoun_normal.png`
**{name}**: *분수대 앞에 서연이 먼저 와 있다. 클립보드는 없고 가방끈만 손가락에 감겨 있다.*

---

### `date_seo_tier_check`
- 배경: `park.png`
- 호감분기: Seoyeon
  - [60+] → `date_seo_high_1`
  - [40+] → `date_seo_compliment_choice`
  - [15+] → `date_seo_tentative_1`
- 다음: `date_seo_tentative_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `date_seo_high_1`
- 배경: `park.png`
- 다음: `date_seo_high_2`

- 캐릭터: `seyoun_laugh.png`
**서연**: 첫날 메모 기억하지? 오늘은 계획 바뀌어도 괜찮아. 네가 가고 싶은 데부터 가자.

---

### `date_seo_high_2`
- 배경: `park.png`
- 다음: `date_seo_compliment_choice`

- 캐릭터: `seyoun_shy.png`
**{name}**: *서연은 접어 둔 일정표를 가방 안에 넣는다. 가방끈을 놓고 먼저 공원 안쪽으로 걷는다.*

---

### `date_seo_compliment_choice`
- 배경: `park.png`
- 선택지:
  1. "오늘 예쁘다." → 호감분기: Seoyeon
    - [50+] → `date_seo_pretty_high`
    - [기본] → `date_seo_pretty_low`
  2. "신경 많이 썼다, 오늘." → `date_seo_bright` | Seoyeon +4
  3. "역시 학생회장은 데이트도 빈틈없네." → `date_seo_role_trap` | Seoyeon -4

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연의 가방끈이 손가락에 한 번 더 감긴다.*

---

### `date_seo_pretty_high`
- 배경: `park.png`
- 스탯: Seoyeon +2
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
**서연**: *분수대 물소리 쪽으로 시선을 돌린다.* 바람 좀 쐬자.

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
**서연**: *가방끈을 고쳐 쥔다.* 됐어.

---

### `date_seo_pretty_high_4`
- 배경: `park.png`
- 다음: `date_seo_walk`

- 캐릭터: `seyoun_shy2.png`
**서연**: *귀 뒤로 넘긴 머리카락이 다시 흘러내린다. 올라가던 손은 가방끈으로 돌아간다.*

---

### `date_seo_pretty_low`
- 배경: `park.png`
- 스탯: Seoyeon +2
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

### `date_seo_role_trap`
- 배경: `park.png`
- 다음: `date_seo_walk`

- 캐릭터: `seyoun_normal.png`
**서연**: *가방끈에서 손을 뗀다.* 오늘은 학생회장으로 나온 거 아닌데.

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
**서연**: 이 애들은 단순해서 좋다. 빵 주면 따라오고 안 주면 안 오고.

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
**서연**: *꽃집 유리문 쪽으로 발끝을 돌린다.* 들어가 볼까?

---

### `date_seo_flower_2`
- 배경: `park.png`
- 다음: `date_seo_succulent_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *꽃집 문을 밀자 종이 울린다. 서연은 진열대를 한 바퀴 돌고 작은 다육이 화분 하나를 고른다.*

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
**서연**: *화분 포장지가 손안에서 작게 바스락거린다.* 오늘.

---

### `date_seo_end_d`
- 배경: `street.png`
- 다음: `pre_confess_minsu`

- 캐릭터: `seyoun_shy.png`
**서연**: 오늘 괜찮았어.

---

### `date_seo_tentative_1`
- 배경: `park.png`
- 다음: `date_seo_tentative_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *공원을 한 바퀴 도는 동안 서연은 다음 주 일정만 이야기한다. 벤치 앞에서 걸음을 멈춘다.*

---

### `date_seo_tentative_2`
- 배경: `park.png`
- 다음: `date_seo_tentative_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 오늘은 이 정도가 좋겠다. 학교에서는 피하지 않을게.

---

### `date_seo_tentative_3`
- 배경: `street.png`
- 플래그: `day4_waited`, `day4_tentative_seoyeon`
- 다음: `day4_night_start`

- 캐릭터: `없음`
**{name}**: *다음 약속은 잡지 않은 채 역 앞에서 헤어진다.*

---

### `date_yuna_1`
- 배경: `cafe.png`
- BGM: `night1.mp3`
- 조건: `route_yuna`
- 다음: `date_yuna_tier_check`

- 캐릭터: `yuna_normal.png`
**{name}**: *카페 앞. 유나가 벽에 기대어 서 있다. 검은 원피스에 작은 크로스백. 교복이 없으니 타투의 선이 먼저 눈에 들어온다.*

---

### `date_yuna_tier_check`
- 배경: `cafe.png`
- 호감분기: Yuna
  - [60+] → `date_yuna_high_1`
  - [40+] → `date_yuna_compliment_choice`
  - [15+] → `date_yuna_tentative_1`
- 다음: `date_yuna_tentative_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `date_yuna_high_1`
- 배경: `cafe.png`
- 다음: `date_yuna_high_2`

- 캐릭터: `yuna_smile.png`
**유나**: *유나는 책갈피 두 장을 테이블에 나란히 놓는다.* 끝나고 같이 골라. 다음에 읽을 책에 쓸 거야.

---

### `date_yuna_high_2`
- 배경: `cafe.png`
- 다음: `date_yuna_compliment_choice`

- 캐릭터: `yuna_shy.png`
**유나**: 다음에도 같이 읽자는 뜻이야. 그건 써 둬도 돼.

---

### `date_yuna_compliment_choice`
- 배경: `cafe.png`
- 선택지:
  1. "사복 입은 유나는 처음 봐." → 호감분기: Yuna
    - [50+] → `date_yuna_pretty_high`
    - [기본] → `date_yuna_pretty_low`
  2. "오늘은 좀 달라 보이네." → `date_yuna_bright` | Yuna +4
  3. "평소보다 훨씬 말 걸기 편해 보여." → `date_yuna_trap` | Yuna -3

- 캐릭터: `yuna_normal.png`
**{name}**: *컵 너머로 유나의 시선이 잠깐 올라온다.*

---

### `date_yuna_pretty_high`
- 배경: `cafe.png`
- 스탯: Yuna +3
- 다음: `date_yuna_pretty_high_2`

- 캐릭터: `yuna_shy.png`
**유나**: *컵 가장자리만 오래 본다. 은백색 머리카락이 뺨 옆으로 흘러내린다.*

---

### `date_yuna_pretty_high_2`
- 배경: `cafe.png`
- 다음: `date_yuna_pretty_high_3`

- 캐릭터: `yuna_shy.png`
**유나**: 그거.

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
**유나**: *눈을 들지 않는다.*

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
**유나**: *컵 뚜껑의 물방울을 엄지로 훑는다.* 됐어.

---

### `date_yuna_pretty_low`
- 배경: `cafe.png`
- 스탯: Yuna +2
- 다음: `date_yuna_bookstore`

- 캐릭터: `yuna_shy.png`
**유나**: 그런 말, 익숙하진 않네.

---

### `date_yuna_bright`
- 배경: `cafe.png`
- 다음: `date_yuna_bookstore`

- 캐릭터: `yuna_smile.png`
**유나**: 뭐가 다른 건데.

---

### `date_yuna_trap`
- 배경: `cafe.png`
- 다음: `date_yuna_bookstore`

- 캐릭터: `yuna_normal.png`
**유나**: 평소에는 말 걸기 불편했나 보네.

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
**유나**: 다행이다. 내가 먼저 보여준 거네.

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
**유나**: 들어봐.

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
**{name}**: *헌책방 앞을 두 걸음 지나친 유나가 되돌아온다.*

---

### `date_yuna_oldbook_b`
- 배경: `bookstore.png`
- 다음: `date_yuna_oldbook_c`

- 캐릭터: `yuna_normal.png`
**유나**: 여기.

---

### `date_yuna_oldbook_c`
- 배경: `bookstore.png`
- 다음: `date_yuna_oldbook_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *오래된 책 한 권을 꺼내 페이지를 넘긴다.*

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
**유나**: *{name}을 본다. 페이지 모서리가 손가락 아래 접힌다.*

---

### `date_yuna_end_b`
- 배경: `street.png`
- 다음: `date_yuna_end_c`

- 캐릭터: `yuna_normal.png`
**유나**: *서점 밖으로 나서기 직전, 말 대신 쪽지를 건넨다.*

---

### `date_yuna_end_c`
- 배경: `street.png`
- 다음: `pre_confess_minsu`

- 캐릭터: `yuna_normal.png`
**{name}**: *'오늘 말이 많았어. 네 앞이라서.' 연보라색 잉크가 마지막 글자에서 조금 번져 있다.*

---

### `date_yuna_tentative_1`
- 배경: `cafe.png`
- 다음: `date_yuna_tentative_2`

- 캐릭터: `yuna_normal.png`
**유나**: 오늘은 책 얘기만 하자.

---

### `date_yuna_tentative_2`
- 배경: `cafe.png`
- 다음: `date_yuna_tentative_3`

- 캐릭터: `yuna_normal.png`
**{name}**: *대화는 이어지지만 유나는 가방 속 오래된 책을 꺼내지 않는다. 커피가 반쯤 남았을 때 시계를 본다.*

---

### `date_yuna_tentative_3`
- 배경: `street.png`
- 플래그: `day4_waited`, `day4_tentative_yuna`
- 다음: `day4_night_start`

- 캐릭터: `yuna_normal.png`
**유나**: 다음에는 내가 먼저 연락할게. 오늘은 여기까지.

---

### `date_dain_1`
- 배경: `gym.png`
- BGM: `daily2.mp3`
- 조건: `route_dain`
- 다음: `date_dain_tier_check`

- 캐릭터: `dain_laugh.png`
**{name}**: *체육관 앞. 다인이 뛰어온다. 캡모자에 운동복.*

---

### `date_dain_tier_check`
- 배경: `gym.png`
- 호감분기: Dain
  - [60+] → `date_dain_high_1`
  - [40+] → `date_dain_2`
  - [15+] → `date_dain_tentative_1`
- 다음: `date_dain_tentative_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `date_dain_high_1`
- 배경: `gym.png`
- 다음: `date_dain_high_2`

- 캐릭터: `dain_laugh.png`
**다인**: 다음 주에도 시간 비워. 오늘 재밌으면 또 올 거니까.

---

### `date_dain_high_2`
- 배경: `gym.png`
- 다음: `date_dain_2`

- 캐릭터: `dain_shy.png`
**다인**: *체육관 문을 열고 손목 밴드 하나를 내민다.* 오늘은 네가 먼저 골라.

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
  2. "역시 운동복이 제일 너답다." → `date_dain_bright` | Dain -3
  3. "오늘은 운동복보다 훨씬 여자답다" → `date_dain_bright` | Dain -4
  4. "이렇게 꾸미니까 이제야 데이트 같네" → `date_dain_bright` | Dain -5

- 캐릭터: `dain_normal.png`
**{name}**: *다인이 모자챙을 한 번 눌러 쓰고 기다린다.*

---

### `date_dain_pretty_high`
- 배경: `gym.png`
- 스탯: Dain +2
- 다음: `date_dain_pretty_high_2`

- 캐릭터: `dain_shy.png`
**다인**: *다인이 캡모자를 푹 눌러써 얼굴 절반을 가린다.*

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
**다인**: *모자챙 아래로 귀끝이 붉어진다. 손가락은 챙 끝에 그대로 걸려 있다.*

---

### `date_dain_pretty_low`
- 배경: `gym.png`
- 스탯: Dain +2
- 다음: `date_dain_to_arcade`

- 캐릭터: `dain_shy.png`
**다인**: 뭐야, 갑자기. ...고맙긴 한데.

---

### `date_dain_bright`
- 배경: `gym.png`
- 다음: `date_dain_to_arcade`

- 캐릭터: `dain_laugh.png`
**다인**: *웃던 다인이 모자챙을 한 번 더 눌러쓴다.* ...그렇지. 운동복이 편하니까.

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
**다인**: *자리에서 벌떡 일어난다.* 풀콤보. 봤어?

---

### `date_dain_rhythm`
- 배경: `arcade.png`
- 다음: `date_dain_rhythm_2`

- 캐릭터: `dain_laugh.png`
**다인**: *화면의 점수를 가리킨다.* 이 스코어, 역대 2등이야.

---

### `date_dain_rhythm_2`
- 배경: `arcade.png`
- 다음: `date_dain_rhythm_3`

- 캐릭터: `dain_normal.png`
**{name}**: 대단해.

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
**{name}**: *'무릎 안 써도 되니까.' 다인은 말끝에 웃고는 쇼윈도 유리에 비친 오른쪽 무릎을 한 번 본다.*

---

### `date_dain_knee_2`
- 배경: `street.png`
- 다음: `date_dain_shop`

- 캐릭터: `dain_sweat.png`
**{name}**: *오락실을 나와 스포츠용품점 앞을 지난다. 다인이 배구화가 놓인 쇼윈도 앞에서 발을 늦춘다.*

---

### `date_dain_shop`
- 배경: `street.png`
- 다음: `date_dain_shop_2`

- 캐릭터: `dain_normal.png`
**다인**: *쇼윈도 안 배구화의 끈을 눈으로 따라간다. 모자챙 아래 입술이 다물린다.*

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
**다인**: *진열대 반대쪽으로 턱을 돌린다.* 아무것도 아냐! 가자!

---

### `date_dain_shop_3`
- 배경: `street.png`
- 다음: `date_dain_shop_3_b`

- 캐릭터: `dain_laugh.png`
**다인**: *두 손을 주머니에 찔러 넣고 앞서 걷는다.* 쳐다보지 마.

---

### `date_dain_shop_3_b`
- 배경: `street.png`
- 다음: `date_dain_end`

- 캐릭터: `dain_normal.png`
**다인**: *보폭을 더 넓힌다.* 한 번만 더 물으면 진짜 먼저 간다.

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
**{name}**: *주머니 속 핸드폰 모서리가 손바닥에 눌린다. 알림은 없고 화면에는 검은 유리만 비친다.*

---

### `date_dain_tentative_1`
- 배경: `gym.png`
- 다음: `date_dain_tentative_2`

- 캐릭터: `dain_normal.png`
**다인**: 오늘은 오래 놀지 말자. 무릎도 좀 쉬어야 하고.

---

### `date_dain_tentative_2`
- 배경: `gym.png`
- 다음: `date_dain_tentative_3`

- 캐릭터: `dain_normal.png`
**{name}**: *자판기 앞에서 음료 하나씩 마신다. 다인은 체육관 문을 열지 않고 가방끈만 고쳐 멘다.*

---

### `date_dain_tentative_3`
- 배경: `street.png`
- 플래그: `day4_waited`, `day4_tentative_dain`
- 다음: `day4_night_start`

- 캐릭터: `dain_normal.png`
**다인**: 학교에서 봐. 다음 약속은 그때 정하자.

---

### `day4_caught_fallout_1`
- 배경: `room_my.png`
- BGM: `night2.mp3`
- 다음: `day4_caught_fallout_2`

- 캐릭터: `없음`
**{name}**: *휴대폰 화면에 세 대화방이 나란히 떠 있다. 전날 보낸 사과는 모두 읽음에서 멈췄다.*

---

### `day4_caught_fallout_2`
- 배경: `room_my.png`
- 다음: `day4_caught_fallout_3`

- 캐릭터: `seyoun_sad.png` @ 0.35
**서연**: 당분간 따로 연락하지 마. 필요한 얘기는 단체방에서 할게.

---

### `day4_caught_fallout_3`
- 배경: `room_my.png`
- 다음: `day4_caught_fallout_4`

- 캐릭터: `없음`
**{name}**: *잠시 뒤 유나가 대화방을 나가고 다인은 약속 일정을 취소한다. 준비해 둔 외출복을 다시 옷걸이에 건다.*

---

### `day4_caught_fallout_4`
- 배경: `room_my.png`
- 플래그: `day4_caught_fallout_seen`
- 다음: `morning5_start`

- 캐릭터: `없음`
**{name}**: *밖으로 나가지 않는다. 해가 기울 때까지 단체방 알림도 울리지 않는다.*

---

### `day4_harem_fallout_1`
- 배경: `cafe.png`
- BGM: `night2.mp3`
- 다음: `day4_harem_fallout_2`

- 캐릭터: `없음`
**{name}**: *세 사람이 있는 단체방에 서연의 메시지가 먼저 올라온다. '오늘은 따로 만나지 말고 모두 같이 얘기하자.'*

---

### `day4_harem_fallout_2`
- 배경: `cafe.png`
- 다음: `day4_harem_fallout_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 누구 하나 고르라는 말은 안 할게. 대신 지금처럼 각각 기대하게 두진 마.

---

### `day4_harem_fallout_3`
- 배경: `cafe.png`
- 다음: `day4_harem_fallout_4`

**{name}**: *유나는 시간을 갖겠다고 말하고 다인은 그동안 따로 만나지 않겠다고 덧붙인다. 셋의 컵은 그대로 놓여 있다.*

---

### `day4_harem_fallout_4`
- 배경: `street.png`
- 플래그: `day4_harem_fallout_seen`, `day4_waited`
- 다음: `morning5_start`

- 캐릭터: `없음`
**{name}**: 알겠어. 정리할 때까지 누구에게도 따로 연락하지 않을게.

---

### `date_seo_low`
- 배경: `park.png`
- 플래그: `day4_waited`, `day4_distance_seoyeon`
- 다음: `day4_night_start`

- 캐릭터: `seyoun_normal.png`
**서연**: *분수대 앞 벤치는 비어 있다. 잠시 뒤 서연에게 메시지가 온다.* 오늘은 둘이 만나지 않는 게 좋을 것 같아. 다음 주 학교에서 보자.

---

### `date_yuna_low`
- 배경: `cafe.png`
- 플래그: `day4_waited`, `day4_distance_yuna`
- 다음: `day4_night_start`

- 캐릭터: `yuna_normal.png`
**유나**: *카페 앞에 먼저 와 있던 유나가 가방끈을 고쳐 메고 한 걸음 물러난다.* 지금은 둘이 오래 있지 않는 게 좋겠어. 오늘은 여기까지 하자.

---

### `date_dain_low`
- 배경: `gym.png`
- 플래그: `day4_waited`, `day4_distance_dain`
- 다음: `day4_night_start`

- 캐릭터: `dain_normal.png`
**다인**: *체육관 앞에서 다인이 공 가방 끈을 고쳐 멘다.* 오늘은 같이 놀 기분이 아니야. 학교에서 보자.

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
**{name}**: *옥상 문이 닫히자 계단의 발소리가 끊긴다. 여러 번 나란히 섰던 난간 아래로 운동장 조명이 하나씩 켜진다.*

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
  3. "서연이 먼저 말해주면 그때 솔직해지자" → `confess_seo_no_2` | Seoyeon -4 | 플래그: `postponed_seoyeon`
  4. "우리 사이면 굳이 말로 확인하지 않아도 알겠지" → `confess_seo_no_2` | Seoyeon -5 | 플래그: `postponed_seoyeon`

- 캐릭터: `seyoun_shy2.png`
**{name}**: *열쇠고리만 서연의 손안에서 짧게 울린다.*

---

### `confess_seo_yes_1`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_yes_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *열쇠고리 소리가 뚝 멎는다. 서연이 눈을 맞춘다.*

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
**{name}**: *난간 아래 운동장 조명이 한 줄 더 켜진다. 서연은 열쇠고리를 쥔 채 그대로 서 있다.*

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
**서연**: *두 칸 아래에서 발소리가 끊긴다. 서연은 돌아보지 않는다.*

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
**{name}**: *서연이 난간 쪽으로 반 걸음 비켜 자리를 내준다.*

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
**{name}**: *카페 간판에 불이 켜질 무렵, 유나가 별관 쪽으로 턱을 돌린다.*

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
**{name}**: *도서관 별관의 비밀 독서 공간. 창문 틈의 주황빛이 낡은 소파 팔걸이까지 내려와 있고 옆자리에는 유나의 책갈피가 놓여 있다.*

---

### `confess_yuna_3b`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_4`

- 캐릭터: `yuna_normal.png`
**{name}**: *별관 문이 닫히자 복도 소음이 끊긴다. 소파 위 책은 펼쳐진 채고 책갈피는 마지막 장 앞에 꽂혀 있다.*

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
  3. "유나가 먼저 물어보면 그때 대답하자" → `confess_yuna_no_2` | Yuna -4 | 플래그: `postponed_yuna`
  4. "말하지 않아도 유나라면 내 마음을 알겠지" → `confess_yuna_no_2` | Yuna -5 | 플래그: `postponed_yuna`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 책갈피의 접힌 끝을 엄지로 펴 놓고 맞은편 자리를 비워 둔다.*

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
**{name}**: *유나의 엄지가 책갈피 모서리에서 떨어진다.*

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
**{name}**: *소파 천이 작게 울린다. 유나가 몸을 바로 세운다.*

---

### `confess_yuna_yes_7`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_yes_8`

- 캐릭터: `yuna_shy.png`
**{name}**: *책갈피는 소파 위에 놓인 채다.*

---

### `confess_yuna_yes_8`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_yes_8_b`

- 캐릭터: `yuna_shy.png`
**유나**: *시선은 책장 쪽에 둔 채 옷소매를 꽉 쥔다.*

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
**{name}**: *소매 끝이 손바닥 안에서 더 구겨진다.*

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
**유나**: *책갈피를 책 사이에 넣어 깊이 밀어 넣은 뒤 턱을 한 번 당긴다.*

---

### `confess_yuna_no_3`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `confess_yuna_no_4`

- 캐릭터: `yuna_normal.png`
**유나**: *책을 펴지 않은 채 표지의 제목만 손가락으로 훑는다.*

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
**{name}**: *세 걸음쯤 떨어졌을 때, 책 너머로 유나의 붉은 눈이 따라온다.*

---

### `confess_dain_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- BGM: `confession.mp3`
- 다음: `confess_dain_2`

- 캐릭터: `dain_laugh.png`
**{name}**: *데이트가 끝나자 다인이 학교 쪽으로 성큼 앞서간다.*

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
**{name}**: *빈 체육관. 서쪽 창문의 빛이 첫날 내기했던 코트 선을 비스듬히 가른다.*

---

### `confess_dain_3b`
- 배경: `gym.png`
- 배경톤: `empty`
- 다음: `confess_dain_4`

- 캐릭터: `dain_normal.png`
**{name}**: *전광판이 꺼진 체육관. 창틀 그림자가 코트 끝까지 뻗어 있고 몇 번이나 공을 주고받던 라인 앞에 다인이 선다.*

---

### `confess_dain_4`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_5`

- 캐릭터: `dain_normal.png`
**다인**: *공 하나를 두 손으로 쥔다. 손가락 마디가 공 표면에 눌려 하얗다.*

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
  3. "다인이 먼저 말해주면 나도 솔직해지자" → `confess_dain_no_2` | Dain -4 | 플래그: `postponed_dain`
  4. "우리 사이면 굳이 말하지 않아도 알겠지" → `confess_dain_no_2` | Dain -5 | 플래그: `postponed_dain`

- 캐릭터: `dain_sweat.png`
**다인**: *공이 바닥에 한 번 튄다. 다인의 손이 반 박자 늦어 공 옆을 스친다.*

---

### `confess_dain_yes_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_yes_2`

- 캐릭터: `dain_normal.png`
**{name}**: *첫 음절이 빈 체육관 벽에 낮게 돌아온다.*

---

### `confess_dain_yes_2`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_yes_3`

- 캐릭터: `dain_normal.png`
**{name}**: *짧은 숨을 고르고 다시 입을 연다.*

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
**{name}**: 오늘만 말고 다음에도 계속 만나고 싶어.

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
**{name}**: 지금 당장 답하라는 건 아니야.

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
**다인**: *다인의 운동화가 코트 선 위에 나란히 붙는다. 두 손으로 얼굴을 덮는다.*

---

### `confess_dain_yes_8_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_yes_9`

- 캐릭터: `dain_shy.png`
**{name}**: *배구공이 발끝에 툭 닿아 옆으로 굴러가도 다인은 쫓지 않는다.*

---

### `confess_dain_yes_9`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_yes_9_b`

- 캐릭터: `dain_shy.png`
**다인**: 잠깐. 나 지금 말 정리가 안 돼.

---

### `confess_dain_yes_9_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_yes_10`

- 캐릭터: `dain_shy.png`
**{name}**: *다인이 손등으로 눈가를 거칠게 문지른다. 입꼬리는 올라갔는데 목소리는 나오지 않는다.*

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
**다인**: *다인이 배구공을 두 번 튀긴다. 세 번째로 튀어 오른 공은 코트 선을 넘어 굴러간다.*

---

### `confess_dain_no_4`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 플래그: `day4_waited`
- 다음: `confess_dain_no_4_b`

- 캐릭터: `dain_sad.png`
**다인**: 다음에는 말해.

---

### `confess_dain_no_4_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `day4_night_start`

- 캐릭터: `dain_sad.png`
**{name}**: *다인의 목소리가 체육관 천장으로 작게 흩어진다. 손목 보호대의 벨크로만 길게 뜯긴다.*

---

### `confess_seo_low`
- 배경: `top_school.png`
- 배경톤: `warm`
- 플래그: `day4_waited`, `day4_distance_seoyeon`
- 다음: `day4_night_start`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연은 옥상 열쇠를 꺼냈다가 다시 주머니에 넣는다.* 오늘은 여기까지 하자. 지금 더 가까워지는 건 아닌 것 같아.

---

### `confess_yuna_low`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 플래그: `day4_waited`, `day4_distance_yuna`
- 다음: `day4_night_start`

- 캐릭터: `yuna_normal.png`
**유나**: *유나는 별관 쪽을 보다가 걸음을 돌린다.* 오늘은 여기까지. 지금은 더 가까워질 얘기, 못 하겠어.

---

### `confess_dain_low`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 플래그: `day4_waited`, `day4_distance_dain`
- 다음: `day4_night_start`

- 캐릭터: `dain_normal.png`
**다인**: *다인은 체육관 쪽으로 걷다가 멈춰 공 가방 끈을 고쳐 멘다.* 오늘은 여기까지. 더 얘기하면 서로 무리할 것 같아.

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
  - [`homeroom_day4`] → `day4_adult_teacher_overall_rank`
  - [`nurse_day4`] → `day4_adult_nurse_overall_rank`
  - [기본] → `day4_student_night_branch`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `day4_adult_teacher_overall_rank`
- 배경: `room_my.png`
- 실시간 순위 분기:
  - 루트 캐릭터: `Teacher` (상위 1명)
  - [`Nurse`] → `day4_adult_teacher_student_rank`
  - [기준 미달] → `day4_adult_nurse_flag_check`

- 캐릭터: `없음`

<!-- i18n -->

---

### `day4_adult_nurse_flag_check`
- 배경: `room_my.png`
- 분기:
  - [`nurse_day4`] → `day4_adult_nurse_overall_rank`
  - [기본] → `day4_student_night_branch`

- 캐릭터: `없음`

<!-- i18n -->

---

### `day4_adult_nurse_overall_rank`
- 배경: `room_my.png`
- 실시간 순위 분기:
  - 루트 캐릭터: `Nurse` (상위 1명)
  - [`Teacher`] → `day4_adult_nurse_student_rank`
  - [기준 미달] → `day4_student_night_branch`

- 캐릭터: `없음`

<!-- i18n -->

---

### `day4_adult_nurse_student_rank`
- 배경: `room_my.png`
- 실시간 순위 분기:
  - 루트 캐릭터: `Nurse` (상위 2명)
  - 라이벌 최소 호감도: 20
  - [`Seoyeon`] → `day4_nurse_seoyeon_counteroffer`
  - [`Dain`] → `day4_nurse_dain_counteroffer`
  - [`Yuna`] → `day4_nurse_yuna_counteroffer`
  - [기준 미달] → `day4_student_night_branch`

- 캐릭터: `없음`

<!-- i18n -->

---

### `day4_nurse_seoyeon_counteroffer`
- 배경: `school_back.png`
- 선택지:
  1. "보건선생님에게 답장하고 돌아간다" → `day4_hidden_msg_branch` | Nurse +4, Seoyeon -6 | 플래그: `day4_held_route_nurse`
  2. "서연을 따라 옥상에 올라가 손을 잡는다" → 호감분기: Seoyeon | 플래그: `day4_took_seoyeon_counteroffer`, `day4_counteroffer_target_nurse`, `day4_counteroffer_penalty_deferred`
    - [68+] → `day4_adult_counteroffer_accept_seoyeon`
    - [기본] → `day4_adult_counteroffer_soft_seoyeon`
  3. "약속한 사람을 만나면서 다른 쪽도 계속 챙기면 되겠다" → `day4_hidden_msg_branch` | Nurse -8, Seoyeon -8 | 플래그: `day4_held_route_nurse`
  4. "먼저 한 약속은 지키고 다른 쪽엔 좋은 핑계를 대자" → `day4_hidden_msg_branch` | Nurse -5, Seoyeon -10 | 플래그: `day4_held_route_nurse`

- 캐릭터: `seyoun_sad.png`
**서연**: *보건실을 나와 정문으로 향하는데 서연이 옥상 계단 앞을 막아선다. 애써 웃는 입술과 달리 손끝은 교복 소매를 구기고 있다.* 요즘 보건선생님만 찾아가잖아. 오늘만은 학생회장도 모범생도 아닌 나를 봐주면 안 돼?

---

### `day4_nurse_dain_counteroffer`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 선택지:
  1. "보건선생님에게 돌아간다고 답장한다" → `day4_hidden_msg_branch` | Nurse +4, Dain -6 | 플래그: `day4_held_route_nurse`
  2. "체육관으로 들어가 다인의 부탁을 받아준다" → 호감분기: Dain | 플래그: `day4_took_dain_counteroffer`, `day4_counteroffer_target_nurse`, `day4_counteroffer_penalty_deferred`
    - [68+] → `day4_adult_counteroffer_accept_dain`
    - [기본] → `day4_adult_counteroffer_soft_dain`
  3. "약속한 사람을 만나면서 다른 쪽도 계속 챙기면 되겠다" → `day4_hidden_msg_branch` | Nurse -8, Dain -8 | 플래그: `day4_held_route_nurse`
  4. "먼저 한 약속은 지키고 다른 쪽엔 좋은 핑계를 대자" → `day4_hidden_msg_branch` | Nurse -5, Dain -10 | 플래그: `day4_held_route_nurse`

- 캐릭터: `dain_sad.png`
**다인**: *보건실 문을 닫고 나오자 체육관 비상문 앞에 다인이 서 있다. 다인은 무릎 테이프를 뜯었다 붙이며 시선을 피한다.* 요즘 보건선생님한테만 가잖아. 열 번만 받아줘. 끝나면… 오늘은 나 좀 안아주라.

---

### `day4_nurse_yuna_counteroffer`
- 배경: `yuna_hideout.png`
- 선택지:
  1. "보건선생님에게 답장하고 집으로 돌아간다" → `day4_hidden_msg_branch` | Nurse +4, Yuna -6 | 플래그: `day4_held_route_nurse`
  2. "별관으로 가서 유나 곁에 남는다" → 호감분기: Yuna | 플래그: `day4_took_yuna_counteroffer`, `day4_counteroffer_target_nurse`, `day4_counteroffer_penalty_deferred`
    - [68+] → `day4_adult_counteroffer_accept_yuna`
    - [기본] → `day4_adult_counteroffer_soft_yuna`
  3. "약속한 사람을 만나면서 다른 쪽도 계속 챙기면 되겠다" → `day4_hidden_msg_branch` | Nurse -8, Yuna -8 | 플래그: `day4_held_route_nurse`
  4. "먼저 한 약속은 지키고 다른 쪽엔 좋은 핑계를 대자" → `day4_hidden_msg_branch` | Nurse -5, Yuna -10 | 플래그: `day4_held_route_nurse`

- 캐릭터: `yuna_sad.png`
**유나**: *보건실을 나선 뒤 유나에게서 별관 사진 한 장이 도착한다. 빈 의자 두 개 중 하나에 유나의 재킷이 놓여 있다.* 선생님 옆이 더 편한가 봐. 그래도 오늘 네가 그냥 가면, 또 혼자 남겨진 기분일 것 같아.

---

### `day4_adult_teacher_student_rank`
- 배경: `room_my.png`
- 실시간 순위 분기:
  - 루트 캐릭터: `Teacher` (상위 2명)
  - 라이벌 최소 호감도: 20
  - [`Seoyeon`] → `day4_teacher_seoyeon_counteroffer`
  - [`Dain`] → `day4_teacher_dain_counteroffer`
  - [`Yuna`] → `day4_teacher_yuna_counteroffer`
  - [기준 미달] → `day4_student_night_branch`

- 캐릭터: `없음`

<!-- i18n -->

---

### `day4_teacher_seoyeon_counteroffer`
- 배경: `school_back.png`
- 선택지:
  1. "담임과 한 약속을 지키고 돌아간다" → `day4_hidden_msg_branch` | Teacher +4, Seoyeon -6 | 플래그: `day4_held_route_teacher`
  2. "서연을 따라 옥상에 올라가 손을 잡는다" → 호감분기: Seoyeon | 플래그: `day4_took_seoyeon_counteroffer`, `day4_counteroffer_target_teacher`, `day4_counteroffer_penalty_deferred`
    - [68+] → `day4_adult_counteroffer_accept_seoyeon`
    - [기본] → `day4_adult_counteroffer_soft_seoyeon`
  3. "약속한 사람을 만나면서 다른 쪽도 계속 챙기면 되겠다" → `day4_hidden_msg_branch` | Teacher -8, Seoyeon -8 | 플래그: `day4_held_route_teacher`
  4. "먼저 한 약속은 지키고 다른 쪽엔 좋은 핑계를 대자" → `day4_hidden_msg_branch` | Teacher -5, Seoyeon -10 | 플래그: `day4_held_route_teacher`

- 캐릭터: `seyoun_sad.png`
**서연**: *담임과 헤어져 학교를 나서려는데 서연이 옥상 계단 앞에서 기다리고 있다. 웃고는 있지만 교복 소매를 쥔 손에 힘이 들어가 있다.* 요즘 선생님만 보고 있잖아. 오늘만은 학생회장도 모범생도 아닌 나를 봐주면 안 돼?

---

### `day4_adult_counteroffer_accept_seoyeon`
- 배경: `event_temptation_seoyeon.png`
- 다음: `day4_adult_night_regret_target_branch`

- 캐릭터: `없음`
**{name}**: *옥상 문이 닫히자 서연은 {name}의 손목을 잡아 자기 가슴 위에 손을 얹는다. 느슨하게 푼 리본 아래로 셔츠 깃이 벌어지고 떨리는 숨이 손등에 닿는다. 주머니 속 휴대폰이 연달아 울리지만 서연은 손을 놓지 않는다. 한참 뒤 학교를 나와 집으로 돌아간다.*

---

### `day4_adult_counteroffer_soft_seoyeon`
- 배경: `school_back.png`
- 다음: `day4_adult_counteroffer_soft_return_home`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연을 따라 옥상에 올라간다. 난간 앞에 선 서연이 손바닥을 편다.* 오늘은 여기 있어 줘. 그거면 돼.

---

### `day4_teacher_dain_counteroffer`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 선택지:
  1. "담임에게 돌아간다고 답장한다" → `day4_hidden_msg_branch` | Teacher +4, Dain -6 | 플래그: `day4_held_route_teacher`
  2. "체육관으로 들어가 다인의 부탁을 받아준다" → 호감분기: Dain | 플래그: `day4_took_dain_counteroffer`, `day4_counteroffer_target_teacher`, `day4_counteroffer_penalty_deferred`
    - [68+] → `day4_adult_counteroffer_accept_dain`
    - [기본] → `day4_adult_counteroffer_soft_dain`
  3. "약속한 사람을 만나면서 다른 쪽도 계속 챙기면 되겠다" → `day4_hidden_msg_branch` | Teacher -8, Dain -8 | 플래그: `day4_held_route_teacher`
  4. "먼저 한 약속은 지키고 다른 쪽엔 좋은 핑계를 대자" → `day4_hidden_msg_branch` | Teacher -5, Dain -10 | 플래그: `day4_held_route_teacher`

- 캐릭터: `dain_sad.png`
**다인**: *담임에게 도착하면 연락하겠다고 한 뒤, 체육관 앞을 지난다. 불 꺼진 비상문에 기대 있던 다인이 무릎 테이프를 만지작거린다.* 요즘 선생님한테만 가잖아. 열 번만 받아줘. 끝나면… 오늘은 나 좀 안아주라.

---

### `day4_adult_counteroffer_accept_dain`
- 배경: `event_temptation_dain.png`
- 다음: `day4_adult_night_regret_target_branch`

- 캐릭터: `없음`
**{name}**: *마지막 공이 바닥을 굴러간다. 다인은 거친 숨을 고르며 유니폼 앞자락을 움켜쥐고 아래로 당긴다. 그대로 {name} 바로 앞까지 몸을 깊이 숙이자 땀에 젖은 숨이 코앞에 닿는다. 주머니 속 휴대폰이 연달아 울린다. 한참 뒤 학교를 나와 집으로 돌아간다.*

---

### `day4_adult_counteroffer_soft_dain`
- 배경: `gym.png`
- 다음: `day4_adult_counteroffer_soft_return_home`

- 캐릭터: `dain_normal.png`
**다인**: *체육관으로 들어가 마지막 공이 멎을 때까지 토스를 받아 준다. 다인이 숨을 고른 뒤 벤치 옆자리를 두드린다.* 오늘은 그냥 같이 앉아 있어 줘.

---

### `day4_teacher_yuna_counteroffer`
- 배경: `yuna_hideout.png`
- 선택지:
  1. "담임에게 답장하고 집으로 돌아간다" → `day4_hidden_msg_branch` | Teacher +4, Yuna -6 | 플래그: `day4_held_route_teacher`
  2. "별관으로 가서 유나 곁에 남는다" → 호감분기: Yuna | 플래그: `day4_took_yuna_counteroffer`, `day4_counteroffer_target_teacher`, `day4_counteroffer_penalty_deferred`
    - [68+] → `day4_adult_counteroffer_accept_yuna`
    - [기본] → `day4_adult_counteroffer_soft_yuna`
  3. "약속한 사람을 만나면서 다른 쪽도 계속 챙기면 되겠다" → `day4_hidden_msg_branch` | Teacher -8, Yuna -8 | 플래그: `day4_held_route_teacher`
  4. "먼저 한 약속은 지키고 다른 쪽엔 좋은 핑계를 대자" → `day4_hidden_msg_branch` | Teacher -5, Yuna -10 | 플래그: `day4_held_route_teacher`

- 캐릭터: `yuna_sad.png`
**유나**: *담임과 헤어진 직후 유나에게서 별관 사진이 온다. 빈 의자 두 개가 나란히 놓여 있고 한쪽에 유나의 재킷이 걸려 있다.* 선생님 옆이 더 편한가 봐. 그래도 오늘 네가 그냥 가면, 또 혼자 남겨진 기분일 것 같아.

---

### `day4_adult_counteroffer_accept_yuna`
- 배경: `event_temptation_yuna.png`
- 다음: `day4_adult_night_regret_target_branch`

- 캐릭터: `없음`
**{name}**: *유나는 {name} 바로 앞까지 다가와 한 손으로 책장을 짚는다. 재킷을 한쪽 어깨 아래로 흘려 내리고 다른 손으로 안쪽 상의의 목깃까지 끌어내린다. 드러난 맨어깨와 타투 사이로 붉은 눈이 {name}의 눈높이에 그대로 있다. 책상 위 휴대폰이 다시 울린다. 한참 뒤 별관을 나와 집으로 돌아간다.*

---

### `day4_adult_counteroffer_soft_yuna`
- 배경: `yuna_hideout.png`
- 다음: `day4_adult_counteroffer_soft_return_home`

- 캐릭터: `yuna_normal.png`
**유나**: *별관으로 들어가 빈 의자에 앉는다. 유나는 재킷을 벗지 않은 채 맞은편 책을 덮는다.* 오늘은 가지 마. 말 안 해도 돼.

---

### `day4_adult_counteroffer_soft_return_home`
- 배경: `room_my.png`
- 다음: `day4_adult_night_regret_target_branch`

- 캐릭터: `없음`
**{name}**: *학교를 나와 집으로 돌아간다. 조금 전까지 나눈 말이 현관문을 닫은 뒤에도 남아 있다.*

---

### `day4_adult_night_regret_target_branch`
- 배경: `room_my.png`
- 분기:
  - [`day4_counteroffer_target_teacher`] → `day4_adult_night_regret_teacher`
  - [`day4_counteroffer_target_nurse`] → `day4_adult_night_regret_nurse`
  - [기본] → `day4_night_regret`

- 캐릭터: `없음`

<!-- i18n -->

---

### `day4_adult_night_regret_teacher`
- 배경: `room_my.png`
- 다음: `day4_hidden_msg_branch`

- 캐릭터: `teacher_sad.png` @ 0.35
**{name}**: *집에 돌아와 휴대폰을 켜자 담임이 보낸 '도착하면 알려 달랬는데 무슨 일 있니?'가 떠 있다. 답장을 쓰려던 손이 입력창 위에서 멎는다.*

---

### `day4_adult_night_regret_nurse`
- 배경: `room_my.png`
- 다음: `day4_hidden_msg_branch`

- 캐릭터: `nurse_worried.png` @ 0.35
**{name}**: *집에 돌아와 휴대폰을 켜자 보건선생님의 '아까 표정이 안 좋아 보였는데 집에는 잘 갔어?'가 떠 있다. 괜찮다고 쓰려던 손이 입력창 위에서 멎는다.*

---

### `day4_student_night_branch`
- 배경: `room_my.png`
- 분기:
  - [`day4_waited`] → `day4_night_regret`
  - [`route_seoyeon`] → `wall_seo_rival_rank`
  - [`route_dain`] → `wall_dain_rival_rank`
  - [`route_yuna`] → `wall_yuna_rival_rank`
  - [기본] → `day4_night_reflect`

- 캐릭터: `없음`

<!-- i18n -->

---

### `wall_seo_rival_rank`
- 배경: `park.png`
- 배경톤: `cold`
- 실시간 순위 분기:
  - 루트 캐릭터: `Seoyeon` (상위 2명)
  - 라이벌 최소 호감도: 20
  - [`Dain`] → `wall_seo_glimpse_1`
  - [`Yuna`] → `wall_seo_yuna_tempt_1`
  - [기준 미달] → `wall_seo_1`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `wall_seo_glimpse_1`
- 배경: `school_back.png`
- 다음: `wall_seo_glimpse_2`

- 캐릭터: `없음`
**{name}**: *밤 10시 약속에 맞춰 공원으로 가는 길. 불 꺼진 체육관 비상문 앞에 다인이 무릎 테이프를 만지며 서 있다.*

---

### `wall_seo_glimpse_2`
- 배경: `school_back.png`
- 선택지:
  1. "공원으로 가서 서연과의 약속을 지킨다" → `wall_seo_1` | Seoyeon +3, Dain -6 | 플래그: `day4_held_route_seoyeon`
  2. "체육관으로 들어가 다인의 부탁을 받아준다" → 호감분기: Dain | 플래그: `day4_took_dain_counteroffer`, `day4_counteroffer_penalty_deferred`
    - [68+] → `wall_seo_glimpse_4`
    - [기본] → `day4_student_counteroffer_soft_dain`
  3. "약속한 사람을 만나면서 다른 쪽도 계속 챙기면 되겠다" → `wall_seo_1` | Seoyeon -8, Dain -8 | 플래그: `day4_held_route_seoyeon`
  4. "먼저 한 약속은 지키고 다른 쪽엔 좋은 핑계를 대자" → `wall_seo_1` | Seoyeon -5, Dain -10 | 플래그: `day4_held_route_seoyeon`

- 캐릭터: `dain_sad.png`
**다인**: 열 번만 받아줘. 끝나면… 나 좀 안아주라. 오늘은 혼자 괜찮은 척 못 하겠어.

---

### `wall_seo_glimpse_4`
- 배경: `event_temptation_dain.png`
- 다음: `day4_night_regret`

- 캐릭터: `없음`
**{name}**: *마지막 공이 바닥을 굴러간다. 다인은 거친 숨을 고르며 유니폼 앞자락을 움켜쥐고 아래로 당긴다. 그대로 {name} 바로 앞까지 몸을 깊이 숙이자 땀에 젖은 숨이 코앞에 닿는다. 주머니 속 휴대폰에서는 서연의 메시지가 연달아 울린다.*

---

### `wall_seo_yuna_tempt_1`
- 배경: `yuna_hideout.png`
- 다음: `wall_seo_yuna_tempt_2`

- 캐릭터: `yuna_sad.png`
**{name}**: *공원으로 가는 길, 유나에게서 '별관 불은 아직 켜져 있어'라는 메시지와 빈 의자 두 개를 찍은 사진이 온다.*

---

### `wall_seo_yuna_tempt_2`
- 배경: `yuna_hideout.png`
- 선택지:
  1. "서연에게 답장하고 공원으로 간다" → `wall_seo_1` | Seoyeon +4, Yuna -6 | 플래그: `day4_held_route_seoyeon`
  2. "별관으로 가서 유나 곁에 남는다" → 호감분기: Yuna | 플래그: `day4_took_yuna_counteroffer`, `day4_counteroffer_penalty_deferred`
    - [68+] → `wall_seo_yuna_tempt_accept`
    - [기본] → `day4_student_counteroffer_soft_yuna`
  3. "약속한 사람을 만나면서 다른 쪽도 계속 챙기면 되겠다" → `wall_seo_1` | Seoyeon -8, Yuna -8 | 플래그: `day4_held_route_seoyeon`
  4. "먼저 한 약속은 지키고 다른 쪽엔 좋은 핑계를 대자" → `wall_seo_1` | Seoyeon -5, Yuna -10 | 플래그: `day4_held_route_seoyeon`

- 캐릭터: `yuna_sad.png`
**유나**: 전에 나를 봐주던 사람이 말도 없이 사라졌어. 오늘 네가 그냥 가면 또 그날 같을 것 같아. 딱 오늘만, 여기 있어 줘.

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
**{name}**: *서연의 대화방에는 마지막 메시지 이후 새 알림이 없다.*

---

### `wall_seo_pre_low_1b`
- 배경: `room_my.png`
- 다음: `wall_seo_pre_low_2`

- 캐릭터: `seyoun_pout.png` @ 0.35
**{name}**: *'서연아, 지금 괜찮아?' 문자를 보낸다. 1분 뒤 읽음 표시가 붙지만 답은 없고 곧 전화가 걸려 온다.*

---

### `wall_seo_pre_low_2`
- 배경: `room_my.png`
- 다음: `wall_seo_2`

- 캐릭터: `seyoun_sad.png` @ 0.35
**서연**: 문자 봤어. 잠깐 통화 괜찮아?

---

### `wall_seo_2`
- 배경: `room_my.png`
- 다음: `wall_seo_to_park`

- 캐릭터: `seyoun_sad.png` @ 0.35
**서연**: 지금 나올 수 있어? 공원. 미안, 갑자기.

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
**{name}**: *옆에 앉는다. 서연은 가로등 불빛이 길게 걸린 안경알 너머로 벤치 앞만 본다.*

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
**{name}**: *공원 도로로 자동차 한 대가 지나간다. 서연은 무릎 위에서 손가락을 맞물린다.*

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
**{name}**: *벤치 아래로 마른 잎 하나가 굴러와 서연의 운동화 앞에서 멎는다.*

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
**서연**: *말끝이 끊기며 무릎 위 손가락이 서로 파고든다. 안경 끝의 물기 한 방울이 손등에 떨어진다.*

---

### `wall_seo_14_d`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_hug_choice`

- 캐릭터: `seyoun_cry.png`
**{name}**: *눈물이 소리 없이 흘러내린다. 손등에 화장 자국이 번지고 서연이 안경 너머로 {name}을 본다.*

---

### `wall_seo_hug_choice`
- 배경: `park.png`
- 배경톤: `cold`
- 선택지:
  1. "안아준다" → `wall_seo_hug_1` | Seoyeon +3
  2. "손을 내민다" → `wall_seo_pinky_1` | Seoyeon +3
  3. "울어도 돼. 내가 다 해결해줄게" → `wall_seo_hug_1` | Seoyeon -4
  4. "이제부터 네가 힘들 일은 내가 알아서 막을게" → `wall_seo_hug_1` | Seoyeon -5

- 캐릭터: `seyoun_cry.png`
**서연**: *번진 화장이 손등에 남아 있고 서연의 어깨가 호흡마다 짧게 올라간다.*

---

### `wall_seo_hug_1`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_hug_2_b`

- 캐릭터: `seyoun_cry.png`
**{name}**: *서연을 안자 어깨에 얼굴을 묻는다. 교복 셔츠 위로 눈물이 번진다.*

---

### `wall_seo_hug_2_b`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_hug_2_c`

- 캐릭터: `seyoun_cry.png`
**서연**: 누구 앞에서 우는 거, 오래됐어.

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
**서연**: 그런 말 쉽게 하지 마.

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
  1. "물티슈 줄까." → `wall_seo_line_react_1` | Seoyeon +6
  2. "잠깐 앉아 있자." → `wall_seo_line_react_2` | Seoyeon +6
  3. "굳이 설명 안 해도 알 것 같아." → `wall_seo_line_react_3` | Seoyeon -4

- 캐릭터: `seyoun_cry.png`
**서연**: *손등으로 눈가를 훔친다. 번진 화장 자국이 더 넓어진다.*

---

### `wall_seo_line_react_1`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_after_line`

- 캐릭터: `seyoun_cry.png`
**서연**: *손등의 화장 자국을 내려다본다.*

---

### `wall_seo_line_react_2`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_after_line`

- 캐릭터: `seyoun_cry.png`
**서연**: 응.

---

### `wall_seo_line_react_3`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_line_react_3_b`

- 캐릭터: `seyoun_cry.png`
**서연**: 아는 척하지 마.

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
**서연**: 잠깐만. 물티슈 있어?

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
**서연**: 이제 좀 낫네. 내일은 내가 챙겨야겠다.

---

### `wall_seo_skin_check`
- 배경: `park.png`
- 배경톤: `cold`
- 호감분기: Seoyeon
  - [70+] → `wall_seo_skin70_1`
  - [60+] → `wall_seo_skin60_1`
  - [기본] → `wall_seo_freetalk`

- 캐릭터: `seyoun_normal.png`

<!-- i18n -->

---

### `wall_seo_skin70_1`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_skin70_3`

- 캐릭터: `seyoun_shy.png`
**서연**: *허락을 확인한 뒤 서연이 손을 잡는다. 벤치 사이에 두 손이 남아 있다.*

---

### `wall_seo_skin70_3`
- 배경: `park.png`
- 배경톤: `cold`
- 플래그: `day4_skinship_seoyeon_70`
- 다음: `wall_seo_freetalk`

- 캐릭터: `seyoun_shy.png`
**서연**: 이건 처음이네.

---

### `wall_seo_skin60_1`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_skin60_2`

- 캐릭터: `seyoun_shy.png`
**{name}**: *벤치에 나란히 앉는다. 서연은 어깨 하나만큼 간격을 남기고 {name} 쪽을 본다.*

---

### `wall_seo_skin60_2`
- 배경: `park.png`
- 배경톤: `cold`
- 플래그: `day4_skinship_seoyeon_60`
- 다음: `wall_seo_freetalk`

- 캐릭터: `seyoun_shy.png`
**서연**: 조금만 더 이러고 있자.

---

### `wall_seo_freetalk`
- 배경: `park.png`
- 배경톤: `cold`
- 타입: `free_talk`
- 다음: `day4_student_return_home`
- 컨텍스트: "4일차 밤, 서연이 오래 숨겨 온 가족 문제와 완벽해야 한다는 부담을 털어놓고 난 직후다. 주인공의 고백에 대한 수락 또는 보류 상태와 방금 나눈 위로는 이미 확정된 사실이므로 현재 플래그를 따른다. 상처가 한 번의 대화로 완치되었다고 단정하거나 관계를 새로 판정하지 않는다."
- 성격: "서연은 침착하고 책임감이 강하지만 지금은 가면을 조금 내려놓은 상태다. 감정을 숨기지 않되 상대에게 해결을 떠맡기지 않고 평소의 솔직함과 조심스러운 다정함으로 대화를 이어 간다."

- 캐릭터: `seyoun_normal.png`
**서연**: *젖은 눈가를 손등으로 닦고 {name} 쪽을 본다.* 아직 가지 마. 조금만 더 얘기하자.

---

### `wall_seo_yuna_tempt_accept`
- 배경: `event_temptation_yuna.png`
- 다음: `day4_night_regret`

- 캐릭터: `없음`
**{name}**: *유나는 {name} 바로 앞까지 다가와 한 손으로 책장을 짚는다. 재킷을 한쪽 어깨 아래로 흘려 내리고 다른 손으로 안쪽 상의의 목깃까지 끌어내린다. 드러난 맨어깨와 타투 사이로 붉은 눈이 {name}의 눈높이에 그대로 있다. 서연의 '공원 벤치에 있어.'라는 메시지가 화면 위에서 사라지지 않는다.*

---

### `wall_dain_rival_rank`
- 배경: `school_back.png`
- 실시간 순위 분기:
  - 루트 캐릭터: `Dain` (상위 2명)
  - 라이벌 최소 호감도: 20
  - [`Seoyeon`] → `wall_dain_seo_tempt_1`
  - [`Yuna`] → `wall_dain_glimpse_1`
  - [기준 미달] → `wall_dain_1`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `wall_dain_glimpse_1`
- 배경: `school_back.png`
- 다음: `wall_dain_glimpse_2`

- 캐릭터: `없음`
**{name}**: *밤 10시, 다인이 기다리는 체육관으로 가던 길. 도서관 별관 창문 한 칸에만 불이 남아 있다.*

---

### `wall_dain_glimpse_2`
- 배경: `yuna_hideout.png`
- 다음: `wall_dain_glimpse_4_b`

- 캐릭터: `yuna_sad.png`
**{name}**: *유나는 열린 책을 앞에 둔 채 창밖만 보고 있다. 책장은 한 장도 넘어가지 않는다.*

---

### `wall_dain_glimpse_4_b`
- 배경: `school_back.png`
- 다음: `wall_dain_glimpse_4_c`

- 캐릭터: `yuna_sad.png` @ 0.35
**{name}**: *밤 10시. 유나에게서 메시지가 온다. 바로 아래에는 다인의 '체육관 뒷문 열어놨어.' 알림이 떠 있다.*

---

### `wall_dain_glimpse_4_c`
- 배경: `school_back.png`
- 선택지:
  1. "다인에게 답장하고 체육관으로 간다" → `wall_dain_1` | Dain +5, Yuna -6 | 플래그: `day4_held_route_dain`
  2. "학교 후문으로 돌아가 유나 곁에 남는다" → 호감분기: Yuna | 플래그: `day4_took_yuna_counteroffer`, `day4_counteroffer_penalty_deferred`
    - [68+] → `wall_dain_glimpse_4`
    - [기본] → `day4_student_counteroffer_soft_yuna`
  3. "약속한 사람을 만나면서 다른 쪽도 계속 챙기면 되겠다" → `wall_dain_1` | Dain -8, Yuna -8 | 플래그: `day4_held_route_dain`
  4. "먼저 한 약속은 지키고 다른 쪽엔 좋은 핑계를 대자" → `wall_dain_1` | Dain -5, Yuna -10 | 플래그: `day4_held_route_dain`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 전에 나를 봐주던 사람이 말도 없이 사라졌어. 오늘 또 혼자 남으면 그때로 돌아갈 것 같아. 다인과 있었어도 괜찮아. 지금은 네가 와줘.

---

### `wall_dain_glimpse_4`
- 배경: `event_temptation_yuna.png`
- 다음: `day4_night_regret`

- 캐릭터: `없음`
**{name}**: *유나는 {name} 바로 앞까지 다가와 한 손으로 책장을 짚는다. 재킷을 한쪽 어깨 아래로 흘려 내리고 다른 손으로 안쪽 상의의 목깃까지 끌어내린다. 드러난 맨어깨와 타투 사이로 붉은 눈이 {name}의 눈높이에 그대로 있다. 다인의 '체육관 뒷문 열어놨어.' 알림이 화면 위에서 사라지지 않는다.*

---

### `day4_student_counteroffer_soft_yuna`
- 배경: `yuna_hideout.png`
- 다음: `day4_night_regret`

- 캐릭터: `yuna_normal.png`
**유나**: *별관으로 들어가 빈 의자에 앉는다. 유나는 재킷을 벗지 않은 채 맞은편 책을 덮는다.* 오늘은 가지 마. 말 안 해도 돼.

---

### `wall_dain_seo_tempt_1`
- 배경: `school_back.png`
- 다음: `wall_dain_seo_tempt_2`

- 캐릭터: `seyoun_pout.png`
**{name}**: *다인이 기다리는 체육관으로 향하는데 서연이 옥상 계단 앞에 서 있다. 웃고 있지만 손끝이 교복 소매를 구긴다.*

---

### `wall_dain_seo_tempt_2`
- 배경: `school_back.png`
- 선택지:
  1. "다인에게 답장하고 체육관으로 간다" → `wall_dain_1` | Dain +5, Seoyeon -6 | 플래그: `day4_held_route_dain`
  2. "서연을 따라 옥상에 올라가 손을 잡는다" → 호감분기: Seoyeon | 플래그: `day4_took_seoyeon_counteroffer`, `day4_counteroffer_penalty_deferred`
    - [68+] → `wall_dain_seo_tempt_accept`
    - [기본] → `day4_student_counteroffer_soft_seoyeon`
  3. "약속한 사람을 만나면서 다른 쪽도 계속 챙기면 되겠다" → `wall_dain_1` | Dain -8, Seoyeon -8 | 플래그: `day4_held_route_dain`
  4. "먼저 한 약속은 지키고 다른 쪽엔 좋은 핑계를 대자" → `wall_dain_1` | Dain -5, Seoyeon -10 | 플래그: `day4_held_route_dain`

- 캐릭터: `seyoun_sad.png`
**서연**: 오늘 집에 들어가면 또 웃는 얼굴부터 맞춰야 해. 딱 오늘만 학생회장 말고 그냥 서연으로 있게 해줘. 올라오면, 네 손 안 놓을게.

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
**다인**: ...오늘은 운동 얘기 말고 다른 얘기 해도 돼?

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
**다인**: 그냥 와. 체육관 뒷문 열어놨어.

---

### `wall_dain_4`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_5`

- 캐릭터: `dain_laugh.png`
**{name}**: *비상등만 켜진 체육관. 다인은 혼자 배구공을 튀긴다. 입꼬리는 올라가 있는데 어깨가 귀 가까이 굳어 있다.*

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
**{name}**: *공을 든 손이 허리 아래에 머문 사이, 다인이 한 발 내딛는다. 오른쪽 무릎에 힘이 풀리고 그대로 쪼그려 앉는다.*

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
**{name}**: *바닥을 구르던 공이 벽에 닿아 낮은 소리를 낸다.*

---

### `wall_dain_13`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_14`

- 캐릭터: `dain_sad.png`
**{name}**: *아무 말 없이 옆에 앉는다. 다인이 입을 다물자 체육관 조명의 낮은 웅웅거림만 남는다.*

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
**다인**: *입꼬리가 내려간다. 시선은 코트 바닥의 흰 선에 머문다.*

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
**{name}**: *체육관 비상등이 한 번 깜빡인다. 다인의 손톱이 공 표면의 홈을 따라간다.*

---

### `wall_dain_18_d`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_19`

- 캐릭터: `dain_sad.png`
**다인**: *공 표면의 홈을 엄지로 문지른다.* 그래서.

---

### `wall_dain_19`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_19_b`

- 캐릭터: `dain_sad.png`
**다인**: 재활이 끝난 척했어. 다시 아프기 시작한 것도 아무한테도 말 안 했고. 부모님한테도. '다인이가 안 뛰면 다인이가 아니지!' 그 말을 듣고 싶지 않았거든.

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
**다인**: 학교에서 '에너지 넘치네!' 소리 들을 때마다 가슴팍부터 막혔어.

---

### `wall_dain_20_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_21`

- 캐릭터: `dain_sad.png`
**다인**: 숨을 쉬어도 끝까지 안 들어왔어.

---

### `wall_dain_21`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_22`

- 캐릭터: `dain_sad.png`
**다인**: 오늘도 그랬어. 데이트하면서 뛰어다니고 네 옆에서 밝은 척할 때마다 무릎이 버티질 못했어.

---

### `wall_dain_22`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_22_b`

- 캐릭터: `dain_sad.png`
**다인**: 근데 네 앞에서까지 아픈 모습 보이면, 나한테 남는 게 없잖아.

---

### `wall_dain_22_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_choice`

- 캐릭터: `dain_sad.png`
**{name}**: *다인 옆 코트 선 바깥에 앉는다. 바닥에 놓인 배구공이 둘 사이에서 한 번 굴러 멎는다.*

---

### `wall_dain_choice`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 선택지:
  1. "아무 말 안 할게. 그냥 여기 있을게." → `wall_dain_newdream_1` | Dain +2
  2. "울어도 돼. 밝은 척 안 해도 돼. 나한테는." → `wall_dain_cry_1` | Dain +5
  3. "공부터 정리하자. 내일 병원도 예약하고." → `wall_dain_lastspike_1` | Dain -4

- 캐릭터: `dain_sad.png`
**다인**: *배구공 고무가 가슴팍에 눌려 찌그러진다. 어깨가 짧게 들썩인다.*

---

### `wall_dain_newdream_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_newdream_2_b`

- 캐릭터: `dain_sad.png`
**{name}**: *운동화 고무가 바닥을 짧게 긁는다. 다인의 발끝이 코트 선을 따라 좌우로 움직인다.*

---

### `wall_dain_newdream_2_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_newdream_3`

- 캐릭터: `dain_sad.png`
**다인**: *운동화 끝이 멎고 다인이 옆을 본다.*

---

### `wall_dain_newdream_3`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_newdream_4`

- 캐릭터: `dain_sad.png`
**다인**: 왜 아무 말 안 해?

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
**다인**: *무릎 위에 얹은 손가락을 하나씩 편다.*

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
**다인**: 찾는 동안, 가끔 이렇게 옆에 있어 줄래?

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
**다인**: *배구공 위로 몸을 접는다. 공의 고무 표면에 물방울이 하나, 둘 떨어지고 울음이 빈 체육관 벽에 짧게 되돌아온다.*

---

### `wall_dain_cry_3`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_cry_4`

- 캐릭터: `dain_sad.png`
**다인**: 혼자서 매일 아침 무릎에 붕대 감았어.

---

### `wall_dain_cry_4`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_cry_5`

- 캐릭터: `dain_sad.png`
**다인**: 핸드폰 알람에도 적어놨어. '오늘도 웃어.'

---

### `wall_dain_cry_5`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_cry_6`

- 캐릭터: `dain_sad.png`
**다인**: 그거 보고 거울 앞에서 입꼬리부터 올렸어. 매일.

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
**{name}**: *다인의 품에서 공을 받아 든다. 다인은 앉아 있고 {name}만 공 보관함 쪽으로 걷는다.*

---

### `wall_dain_lastspike_2`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_3`

- 캐릭터: `dain_normal.png`
**다인**: *공 보관함을 보다가 다인이 고개를 든다.* 잠깐. 왜 네가 다 정해.

---

### `wall_dain_lastspike_3`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_3_b`

- 캐릭터: `dain_laugh.png`
**{name}**: 멈출게. 지금 필요한 게 뭔지 네가 말해줘.

---

### `wall_dain_lastspike_3_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_3_c`

- 캐릭터: `dain_sweat.png`
**다인**: *무릎 보호대를 풀었다가 압박이 가지 않게 다시 고쳐 맨다.* 병원, 다시 가야겠지.

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
**다인**: 병원 가는 날, 같이 가 줄래?

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
**다인**: 서연이가 나한테 뭐라 그랬는지 알아? 아무 말도 안 했어. 그냥 나를 봤어.

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
**다인**: *한 걸음이 끊긴다. 다시 걸을 때는 보폭을 줄여 {name} 옆에 맞춘다.*

---

### `wall_dain_skin_check`
- 배경: `school_back.png`
- 호감분기: Dain
  - [70+] → `wall_dain_skin70_1`
  - [60+] → `wall_dain_skin60_1`
  - [기본] → `wall_dain_freetalk`

- 캐릭터: `dain_normal.png`

<!-- i18n -->

---

### `wall_dain_skin70_1`
- 배경: `school_back.png`
- 다음: `wall_dain_skin70_2`

- 캐릭터: `dain_shy.png`
**다인**: *다인이 팔을 벌린 채 {name}의 대답을 기다린다.*

---

### `wall_dain_skin70_2`
- 배경: `school_back.png`
- 다음: `wall_dain_skin70_3`

- 캐릭터: `dain_shy.png`
**다인**: 잠깐만 이대로 있어도 돼?

---

### `wall_dain_skin70_3`
- 배경: `school_back.png`
- 플래그: `day4_skinship_dain_70`
- 다음: `wall_dain_freetalk`

- 캐릭터: `dain_shy.png`
**{name}**: *허락을 확인한 뒤 다인이 한 걸음 다가온다. 셔츠 위로 눈물이 번지고 등을 감싼 팔은 한동안 풀리지 않는다.*

---

### `wall_dain_skin60_1`
- 배경: `school_back.png`
- 다음: `wall_dain_skin60_2`

- 캐릭터: `dain_shy.png`
**{name}**: *학교 후문 옆 벤치에 나란히 앉는다. 다인이 빈 무릎 자리를 눈으로 가리킨다.*

---

### `wall_dain_skin60_2`
- 배경: `school_back.png`
- 플래그: `day4_skinship_dain_60`
- 다음: `wall_dain_freetalk`

- 캐릭터: `dain_shy.png`
**다인**: 5분만. 체력 충전.

---

### `wall_dain_freetalk`
- 배경: `school_back.png`
- 타입: `free_talk`
- 다음: `day4_student_return_home`
- 컨텍스트: "4일차 밤, 다인이 무릎 부상과 멈춰 버린 꿈에 관한 속마음을 드러낸 뒤 학교 뒤편을 걷는 중이다. 주인공의 고백에 대한 수락 또는 보류 상태와 방금 있었던 위로는 확정된 사실이다. 부상이 갑자기 낫거나 진로가 이미 결정되었다고 만들지 않고 현재 관계 상태를 유지한다."
- 성격: "다인은 솔직하고 몸이 먼저 움직이는 사람답게 감정도 숨기지 않으려 한다. 지금은 평소보다 차분하지만 활기를 잃은 사람이 아니며 불안을 인정하면서도 상대와 함께 다음 말을 찾아간다."

- 캐릭터: `dain_normal.png`
**다인**: *숨을 길게 내쉬고 {name} 곁에 보폭을 맞춘다.* 오늘은... 그냥 같이 좀 걷자. 말해도 좋고.

---

### `wall_dain_seo_tempt_accept`
- 배경: `event_temptation_seoyeon.png`
- 다음: `day4_night_regret`

- 캐릭터: `없음`
**{name}**: *옥상문이 닫히자 서연은 말없이 블라우스 단추를 풀고 {name}의 손목을 잡아 제 쪽으로 끌어당긴다. 열린 옷깃 사이로 손바닥이 맨가슴에 닿는 순간, 서연의 손이 그 위를 덮는다. 다인의 '체육관 뒷문 열어놨어.'라는 메시지가 화면을 밝힌다.*

---

### `wall_yuna_rival_rank`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 실시간 순위 분기:
  - 루트 캐릭터: `Yuna` (상위 2명)
  - 라이벌 최소 호감도: 20
  - [`Seoyeon`] → `wall_yuna_glimpse_1`
  - [`Dain`] → `wall_yuna_dain_tempt_1`
  - [기준 미달] → `wall_yuna_1`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `wall_yuna_glimpse_1`
- 배경: `school_back.png`
- 배경톤: `dream`
- 다음: `wall_yuna_glimpse_2`

- 캐릭터: `없음`
**{name}**: *유나와 만나기로 한 학교 후문으로 가던 길. 교문 앞 가로등 아래 서연이 혼자 서 있다.*

---

### `wall_yuna_glimpse_2`
- 배경: `school_back.png`
- 배경톤: `dream`
- 다음: `wall_yuna_glimpse_3_b`

- 캐릭터: `seyoun_pout.png`
**{name}**: *서연은 휴대폰을 넣었다 꺼내길 반복한다. 이쪽을 보자 웃어 보이지만 손끝이 교복 소매를 구긴다.*

---

### `wall_yuna_glimpse_3_b`
- 배경: `school_back.png`
- 배경톤: `dream`
- 선택지:
  1. "유나에게 답장하고 학교 후문으로 간다" → `wall_yuna_1` | Yuna +4, Seoyeon -6 | 플래그: `day4_held_route_yuna`
  2. "서연을 따라 옥상으로 올라가 손을 잡는다" → 호감분기: Seoyeon | 플래그: `day4_took_seoyeon_counteroffer`, `day4_counteroffer_penalty_deferred`
    - [68+] → `wall_yuna_glimpse_4`
    - [기본] → `day4_student_counteroffer_soft_seoyeon`
  3. "약속한 사람을 만나면서 다른 쪽도 계속 챙기면 되겠다" → `wall_yuna_1` | Yuna -8, Seoyeon -8 | 플래그: `day4_held_route_yuna`
  4. "먼저 한 약속은 지키고 다른 쪽엔 좋은 핑계를 대자" → `wall_yuna_1` | Yuna -5, Seoyeon -10 | 플래그: `day4_held_route_yuna`

- 캐릭터: `seyoun_normal.png`
**서연**: 오늘 집에 들어가면 또 웃는 얼굴부터 맞춰야 해. 딱 오늘만 학생회장 말고 그냥 서연으로 있게 해줘. 올라오면, 네 손 안 놓을게.

---

### `wall_yuna_glimpse_4`
- 배경: `event_temptation_seoyeon.png`
- 다음: `day4_night_regret`

- 캐릭터: `없음`
**{name}**: *옥상문이 닫히자 서연은 말없이 블라우스 단추를 풀고 {name}의 손목을 잡아 제 쪽으로 끌어당긴다. 열린 옷깃 사이로 손바닥이 맨가슴에 닿는 순간, 서연의 손이 그 위를 덮는다. 주머니 속에서 유나의 메시지가 한 번, 다시 한 번 울린다.*

---

### `day4_student_counteroffer_soft_seoyeon`
- 배경: `school_back.png`
- 다음: `day4_night_regret`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연을 따라 옥상에 올라간다. 난간 앞에 선 서연이 손바닥을 편다.* 오늘은 여기 있어 줘. 그거면 돼.

---

### `wall_yuna_dain_tempt_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_yuna_dain_tempt_2`

- 캐릭터: `dain_sad.png`
**{name}**: *유나가 기다리는 학교 후문으로 가던 길. 불 꺼진 체육관 비상문 앞에 다인이 무릎 테이프를 만지며 서 있다.*

---

### `wall_yuna_dain_tempt_2`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 선택지:
  1. "유나에게 답장하고 학교 후문으로 간다" → `wall_yuna_1` | Yuna +4, Dain -6 | 플래그: `day4_held_route_yuna`
  2. "체육관으로 들어가 다인의 부탁을 받아준다" → 호감분기: Dain | 플래그: `day4_took_dain_counteroffer`, `day4_counteroffer_penalty_deferred`
    - [68+] → `wall_yuna_dain_tempt_accept`
    - [기본] → `day4_student_counteroffer_soft_dain`
  3. "약속한 사람을 만나면서 다른 쪽도 계속 챙기면 되겠다" → `wall_yuna_1` | Yuna -8, Dain -8 | 플래그: `day4_held_route_yuna`
  4. "먼저 한 약속은 지키고 다른 쪽엔 좋은 핑계를 대자" → `wall_yuna_1` | Yuna -5, Dain -10 | 플래그: `day4_held_route_yuna`

- 캐릭터: `dain_sad.png`
**다인**: 열 번만 받아줘. 끝나면… 나 좀 안아주라. 오늘은 혼자 괜찮은 척 못 하겠어.

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
**유나**: 오늘은 쪽지 없이 말할게.

---

### `wall_yuna_pre_high_2`
- 배경: `room_my.png`
- 배경톤: `dream`
- 다음: `wall_yuna_3`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *빈손을 한 번 펴 보인다. 쪽지도 책갈피도 없다.*

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
**{name}**: *후문등 아래 유나가 서 있다. 책은 펼쳐져 있지만 페이지는 한 장도 넘어가지 않는다.*

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
**유나**: *도서관 별관의 비밀 독서 공간을 지나 더 안쪽 지하 자료실로 향한다. 먼지 쌓인 서가 틈에서 오래된 봉투 하나를 꺼낸다.*

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
**유나**: 선배가 처음이었어. '네 글 좋더라'— 그 말 하나 듣고 그날은 내가 반에 있었어.

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
**{name}**: *봉투의 접힌 선을 따라 먼지가 떨어진다. 유나는 답을 재촉하지 않는다.*

---

### `wall_yuna_15`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_16`

- 캐릭터: `yuna_shy.png`
**유나**: *시선이 편지 날짜에 박힌다.* 그래서 일부러 차갑게 굴었어. 먼저 밀어내면 덜 아플 줄 알았으니까.

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
**유나**: *형광등이 한 번 떨린다. 유나가 입술 안쪽을 깨물었다 놓는다.*

---

### `wall_yuna_choice`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 선택지:
  1. "그 사람 대신은 못 해. 그래도 지금은 여기 있어." → `wall_yuna_moved_1` | Yuna +4
  2. "지금은 네 말을 듣고 있어." → `wall_yuna_sub_1` | Yuna +2
  3. "...그래서 나한테 접근한 거야? 선배 대신?" → `wall_yuna_reject_1` | Yuna -10

- 캐릭터: `yuna_sad.png`
**유나**: *책을 쥔 손에 힘을 주고 있다. 대답을 기다리는 동안 편지 모서리가 조금 구겨졌다.*

---

### `wall_yuna_moved_1`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_moved_2`

- 캐릭터: `yuna_normal.png`
**유나**: 처음엔 네가 선배와 비슷해서 눈이 갔을지도 몰라.

---

### `wall_yuna_moved_2`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_moved_3`

- 캐릭터: `yuna_normal.png`
**유나**: 근데 지금은 달라.

---

### `wall_yuna_moved_3`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_moved_4`

- 캐릭터: `yuna_shy.png`
**유나**: *편지에서 손을 떼고 {name}과 눈을 맞춘다.*

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
**유나**: *편지를 봉투 안에 넣는다. 접힌 모서리를 엄지로 반듯하게 편다.*

---

### `wall_yuna_moved_5_b`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_skin_check`

- 캐릭터: `yuna_shy.png`
**유나**: *옷소매를 쥔 손이 풀린다. 서가와 {name} 사이의 한 걸음을 좁힌다.*

---

### `wall_yuna_skin_check`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 호감분기: Yuna
  - [70+] → `wall_yuna_skin70_1`
  - [60+] → `wall_yuna_skin60_1`
  - [기본] → `wall_yuna_freetalk`

- 캐릭터: `yuna_normal.png`

<!-- i18n -->

---

### `wall_yuna_skin70_1`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_skin70_2`

- 캐릭터: `yuna_shy.png`
**유나**: 가까이 와서 손잡아도 돼?

---

### `wall_yuna_skin70_2`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_skin70_3`

- 캐릭터: `yuna_shy.png`
**{name}**: *대답을 들은 뒤, 유나가 어깨를 기대고 손을 맞잡는다.*

---

### `wall_yuna_skin70_3`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 플래그: `day4_skinship_yuna_70`
- 다음: `wall_yuna_freetalk`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나의 손이 따뜻하다. 그뿐이다.*

---

### `wall_yuna_skin60_1`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_skin60_2`

- 캐릭터: `yuna_shy.png`
**{name}**: *지하 자료실 서가 사이. 유나가 등 뒤 한 걸음 거리에서 선다.*

---

### `wall_yuna_skin60_2`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 플래그: `day4_skinship_yuna_60`
- 다음: `wall_yuna_freetalk`

- 캐릭터: `yuna_shy.png`
**유나**: 등에 이마 대도 돼? 잠깐이면 돼.

---

### `wall_yuna_sub_1`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_sub_2`

- 캐릭터: `yuna_sad.png`
**유나**: 그래. 둘을 헷갈리면 안 되는 거였지.

---

### `wall_yuna_sub_2`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 플래그: `day4_yuna_wall_broken`
- 다음: `wall_yuna_freetalk`

- 캐릭터: `yuna_smile.png`
**유나**: *입꼬리가 한쪽만 올라간다. 편지는 봉투 안으로 들어간다.*

---

### `wall_yuna_reject_1`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_reject_1_b`

- 캐릭터: `yuna_sad.png`
**유나**: 그렇게 생각해?

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
**유나**: 그래. 그랬을 수도 있어.

---

### `wall_yuna_reject_3`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_freetalk`

- 캐릭터: `yuna_sad.png`
**유나**: *유나가 빠르게 돌아선다. 주머니에서 책갈피 하나가 떨어져도 발걸음은 줄지 않는다.*

---

### `wall_yuna_freetalk`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 타입: `free_talk`
- 다음: `day4_student_return_home`
- 컨텍스트: "4일차 밤, 유나가 이준호 선배의 편지와 자신이 대신일지 모른다는 두려움을 마주한 직후다. 주인공의 고백에 대한 수락 또는 보류 상태와 방금 확인한 감정은 확정된 사실이다. 편지의 내용을 바꾸거나 불안을 즉시 없애지 말고 현재 관계를 다시 판정하지 않는다."
- 성격: "유나는 조용하고 생각이 깊지만 이제 중요한 질문을 피하지 않는다. 비유 뒤에 숨기보다 필요한 순간에는 직접 말하며 상대의 대답을 자기 두려움에 맞춰 왜곡하지 않고 끝까지 듣는다."

- 캐릭터: `yuna_normal.png`
**유나**: *편지를 접어 책 사이에 넣고 이번에는 먼저 눈을 맞춘다.* 아직 듣고 싶은 말이 있어.

---

### `day4_student_return_home`
- 배경: `room_my.png`
- 다음: `day4_hidden_msg_branch`

- 캐릭터: `없음`
**{name}**: *약속을 마치고 집으로 돌아온다. 현관문이 닫히자 방 안에는 휴대폰 불빛만 남는다.*

---

### `wall_yuna_dain_tempt_accept`
- 배경: `event_temptation_dain.png`
- 다음: `day4_night_regret`

- 캐릭터: `없음`
**{name}**: *마지막 공이 바닥을 굴러간다. 다인은 거친 숨을 고르며 유니폼 앞자락을 움켜쥐고 아래로 당긴다. 그대로 {name} 바로 앞까지 몸을 깊이 숙이자 땀에 젖은 숨이 코앞에 닿는다. 유나의 이름이 휴대폰 화면에 연달아 뜬다.*

---

### `day4_student_counteroffer_soft_dain`
- 배경: `gym.png`
- 다음: `day4_night_regret`

- 캐릭터: `dain_normal.png`
**다인**: *체육관으로 들어가 마지막 공이 멎을 때까지 토스를 받아 준다. 다인이 숨을 고른 뒤 벤치 옆자리를 두드린다.* 오늘은 그냥 같이 앉아 있어 줘.

---

### `day4_night_regret`
- 배경: `room_my.png`
- 다음: `day4_night_regret_msg_branch`

- 캐릭터: `없음`
**{name}**: *집으로 돌아온 뒤에도 채팅창에는 입력하다 만 문장이 남아 있다. 커서가 끝에서 깜빡인다.*

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
**다인**: 야, 오늘 재밌었다. 나 혼자 들뜬 거 아니었지?

---

### `day4_night_regret_msg_yuna`
- 배경: `room_my.png`
- 다음: `day4_night_regret_reply`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 오늘, 나도 기대했어. 말은 더 줄었지만.

---

### `day4_night_regret_msg`
- 배경: `room_my.png`
- 다음: `day4_night_regret_reply`

- 캐릭터: `없음`
**{name}**: *핸드폰 화면이 켜진다. 한 줄짜리 메시지 아래 읽음 표시가 늦게 붙는다.*

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
**{name}**: *오늘 주고받은 메시지를 시간순으로 다시 올려 본다. 내일은 일요일 학교 행사다.*

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
**보건선생님**: *보건실 안내* 추가 상담이 필요하면 내일 행사 시작 전에 예약하세요. 담임 또는 상담실을 선택할 수 있습니다.

---

### `night_nurse_msg_4`
- 배경: `room_my.png`
- 다음: `day4_night_sleep`

- 캐릭터: `nurse_normal.png` @ 0.35
**보건선생님**: *보건실 안내* 늦은 시간에는 답하지 않아도 됩니다. 급한 상황은 보호자나 가까운 어른에게 먼저 알리세요.

---

### `day4_night_sleep`
- 배경: `room_my.png`
- 다음: `day4_final`

- 캐릭터: `없음`
**{name}**: *알람을 일요일 오전으로 맞추고 방 불을 끈다. 전하지 못한 문장 하나가 입력창에 남아 있다.*

---

### `day4_final`
- 배경: `room_my.png`
- 다음: `morning5_start`

- 캐릭터: `없음`
**{name}**: *방 안 시계가 자정 쪽으로 넘어간다. 휴대폰 화면도 알람 한 줄만 남기고 어두워진다.*

---

### `forced_violation_day4_after_seoyeon`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day4_seoyeon_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day4_seoyeon_excuse`

**서연**: *대화가 끝난 뒤에도 서연은 한동안 말이 없다. 다시 입을 열었을 때는 목소리가 차갑게 가라앉아 있다.* 방금 네가 한 짓, 없던 일처럼 넘길 생각 하지 마. 당분간 나한테 다가오지도, 연락하지도 마.

---

### `forced_violation_day4_seoyeon_apologize`
- 다음: `forced_violation_day4_resume`

**서연**: *서연은 사과를 듣고도 표정을 풀지 않는다.* 사과는 들었어. 그렇다고 없던 일이 되진 않아. 말한 대로 당분간 연락하지 마.

---

### `forced_violation_day4_seoyeon_excuse`
- 다음: `forced_violation_day4_resume`

**서연**: *서연이 말을 끊는다.* 오해? 내가 싫다고 한 순간부터 오해일 수 없어. 더 말하지 마.

---

### `forced_violation_day4_after_yuna`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day4_yuna_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day4_yuna_excuse`

**유나**: *대화가 끊긴 뒤, 유나는 짧게 숨을 고른다. 굳은 얼굴에는 경계만 남았다.* 내가 싫다는 걸 알면서 무시했잖아. 지금은 네 얼굴도 보기 싫어. 더는 연락하지 마.

---

### `forced_violation_day4_yuna_apologize`
- 다음: `forced_violation_day4_resume`

**유나**: *유나는 한참 뒤에야 짧게 대답한다.* 사과했다고 없어지진 않아. 이제 그만해.

---

### `forced_violation_day4_yuna_excuse`
- 다음: `forced_violation_day4_resume`

**유나**: *유나는 해명을 끝까지 듣지 않는다.* 싫다고 했어. 설명할 일 아니야.

---

### `forced_violation_day4_after_dain`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day4_dain_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day4_dain_excuse`

**다인**: *다인은 평소처럼 웃어넘기지 않는다. 한참 뒤에야 짧고 굳은 목소리가 돌아온다.* 장난 아니야. 내가 싫다는데 억지로 한 거, 절대 그냥 안 넘어가.

---

### `forced_violation_day4_dain_apologize`
- 다음: `forced_violation_day4_resume`

**다인**: *다인은 한참 뒤에야 짧게 답한다.* 그래. 그럼 오늘은 여기까지야. 다음 얘기는 내가 정할게.

---

### `forced_violation_day4_dain_excuse`
- 다음: `forced_violation_day4_resume`

**다인**: *다인의 목소리가 거칠어진다.* 아니. 핑계 대지 마. 싫다고 했는데도 한 건 너야.

---

### `forced_violation_day4_after_teacher`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day4_teacher_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day4_teacher_excuse`

**담임선생님**: *대화가 끝난 뒤, 담임은 더 단호한 목소리로 선을 긋는다.* 방금 행동은 명백히 선을 넘었어. 더는 가까이 오지 마. 이 일은 필요한 절차대로 처리할 거야.

---

### `forced_violation_day4_teacher_apologize`
- 다음: `forced_violation_day4_resume`

**담임선생님**: *담임은 짧게 숨을 고르고 말을 잇는다.* 사과는 들었어. 그래도 절차는 그대로 진행할 거야. 더 말하지 마.

---

### `forced_violation_day4_teacher_excuse`
- 다음: `forced_violation_day4_resume`

**담임선생님**: *담임이 해명을 끊는다.* 지금은 해명부터 할 상황이 아니야. 더 말하지 말고 거리를 둬.

---

### `forced_violation_day4_after_nurse`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day4_nurse_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day4_nurse_excuse`

**보건선생님**: *대화가 끊기자 보건선생님의 목소리에서 평소의 장난기가 사라진다.* 지금부터는 거리를 지켜. 방금 일은 기록하고 필요한 사람에게 알릴 거야.

---

### `forced_violation_day4_nurse_apologize`
- 다음: `forced_violation_day4_resume`

**보건선생님**: *보건선생님은 잠시 말이 없다가 단호하게 답한다.* 사과는 들을게. 그래도 기록과 연락은 그대로 할 거야. 오늘 대화는 여기까지.

---

### `forced_violation_day4_nurse_excuse`
- 다음: `forced_violation_day4_resume`

**보건선생님**: *보건선생님의 목소리가 더 낮아진다.* 오해라고 부르면 달라질 것 같아? 싫다는 의사를 무시한 건 사실이야.

---

### `forced_violation_day4_resume`

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
  - [`day3_caught_multiple_dates`] → `morning5_caught_fallout_1`
  - [`harem_seed`] → `morning5_harem_fallout_1`
  - [`day4_counteroffer_penalty_deferred`] → `morning5_temptation_counteroffer_branch`
  - [`day4_confession_accepted`] → `morning5_temptation_discovery_branch`
  - [기본] → `morning5_start_b`

- 캐릭터: `없음`

<!-- i18n -->

---

### `morning5_caught_fallout_1`
- 배경: `room_school.png`
- 다음: `morning5_caught_fallout_2`

- 캐릭터: `없음`
**{name}**: *행사 시작 전 교실. 세 사람의 자리는 서로 떨어져 있다. 책상 위 역할표에는 필요한 업무만 적혀 있다.*

---

### `morning5_caught_fallout_2`
- 배경: `room_school.png`
- 다음: `morning5_caught_fallout_3`

**{name}**: *유나는 안내 책자를 들고 먼저 나가고 다인은 반대편 문으로 향한다. 서연은 출석표를 챙긴 뒤 이쪽을 보지 않는다.*

---

### `morning5_caught_fallout_3`
- 배경: `school_hallway.png`
- 플래그: `day5_caught_fallout_seen`
- 다음: `ending_start`

- 캐릭터: `없음`
**{name}**: *행사가 끝날 때까지 셋과 나눈 말은 업무 확인뿐이다. 마지막 종이 울리자 각자 다른 계단으로 내려간다.*

---

### `morning5_harem_fallout_1`
- 배경: `room_school.png`
- 다음: `morning5_harem_fallout_2`

- 캐릭터: `없음`
**{name}**: *행사 동안 세 사람은 필요한 말만 단체방에 남긴다. 개인 대화방에는 새 메시지가 없다.*

---

### `morning5_harem_fallout_2`
- 배경: `room_school.png`
- 다음: `morning5_harem_fallout_3`

- 캐릭터: `dain_normal.png`
**다인**: 오늘 끝나도 따로 만나진 말자. 우리끼리 정한 거, 지켜.

---

### `morning5_harem_fallout_3`
- 배경: `school_hallway.png`
- 플래그: `morning5_harem_fallout_seen`, `ending_harem`
- 다음: `ending_start`

- 캐릭터: `없음`
**{name}**: *고개를 끄덕인다. 세 사람은 함께 교문을 나가고 나는 잠시 뒤 혼자 따라 나간다.*

---

### `morning5_temptation_discovery_branch`
- 배경: `room_school.png`
- 분기:
  - [`day4_counteroffer_penalty_deferred`] → `morning5_temptation_counteroffer_branch`
  - [기본] → `morning5_committed_start`

- 캐릭터: `없음`

<!-- i18n -->

---

### `morning5_temptation_counteroffer_branch`
- 배경: `room_school.png`
- 분기:
  - [`day4_counteroffer_target_teacher`] → `morning5_caught_teacher_counteroffer`
  - [`day4_counteroffer_target_nurse`] → `morning5_caught_nurse_counteroffer`
  - [`day4_took_seoyeon_counteroffer`] → `morning5_caught_by_seoyeon_route`
  - [`day4_took_yuna_counteroffer`] → `morning5_caught_by_yuna_route`
  - [`day4_took_dain_counteroffer`] → `morning5_caught_by_dain_route`
  - [기본] → `morning5_committed_start`

- 캐릭터: `없음`

<!-- i18n -->

---

### `morning5_caught_teacher_counteroffer`
- 배경: `room_school.png`
- 배경톤: `empty`
- 선택지:
  1. "어젯밤 일을 그대로 말한다" → `morning5_caught_teacher_honest` | Teacher -40 | 플래그: `day5_confessed_counteroffer`, `day5_abandoned_teacher`
  2. "별일 아니었다고 둘러댄다" → `morning5_caught_teacher_lie` | Teacher -50 | 플래그: `day5_lied_about_counteroffer`, `day5_abandoned_teacher`
  3. "상처받지 않게 좋은 부분만 골라서 말한다" → `morning5_caught_teacher_lie` | Teacher -45
  4. "일단 안심시키고 자세한 얘기는 나중으로 미룬다" → `morning5_caught_teacher_lie` | Teacher -55

- 캐릭터: `teacher_sad.png`
**담임선생님**: *아침 교실. 담임에게 원고 사진을 보여주려고 휴대폰을 내려놓는 순간 화면이 켜진다. 어젯밤 함께 있던 아이에게서 '어제 일, 우리 둘만 아는 거지?'라는 알림이 뜬다. 담임은 화면을 끝까지 읽고 휴대폰에서 손을 뗀다.* 어젯밤 내 연락에는 답하지 않고 이 아이를 만난 거니?

---

### `morning5_caught_teacher_honest`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `morning5_counteroffer_group_talk`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *담임은 말없이 전부 듣고 나서 출석부를 덮는다.* 솔직히 말한 건 알겠다. 하지만 어젯밤 내가 믿은 네 말까지 없던 일이 되진 않아. 오늘은 돌아가렴.

---

### `morning5_caught_teacher_lie`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `morning5_counteroffer_group_talk`

- 캐릭터: `teacher_angry.png`
**담임선생님**: *담임은 다시 울린 알림과 맞은편 얼굴을 번갈아 본다. 목소리가 수업 시간보다 더 차갑게 가라앉는다.* 어젯밤 일보다 지금 네가 한 거짓말이 더 실망스럽구나. 나가렴.

---

### `morning5_caught_nurse_counteroffer`
- 배경: `nurse_room.png`
- 선택지:
  1. "어젯밤 일을 그대로 말한다" → `morning5_caught_nurse_honest` | Nurse -40 | 플래그: `day5_confessed_counteroffer`, `day5_abandoned_nurse`
  2. "별일 아니었다고 둘러댄다" → `morning5_caught_nurse_lie` | Nurse -50 | 플래그: `day5_lied_about_counteroffer`, `day5_abandoned_nurse`
  3. "상처받지 않게 좋은 부분만 골라서 말한다" → `morning5_caught_nurse_lie` | Nurse -45
  4. "일단 안심시키고 자세한 얘기는 나중으로 미룬다" → `morning5_caught_nurse_lie` | Nurse -55

- 캐릭터: `nurse_worried.png`
**보건선생님**: *보건실 진료대에 휴대폰을 내려놓는 순간 화면이 켜진다. 어젯밤 함께 있던 아이에게서 '어제 일, 우리 둘만 아는 거지?'라는 알림이 뜬다. 보건선생님은 평소처럼 웃으려다 입꼬리를 천천히 내린다.* 어제 내 연락을 못 본 게 아니라, 이 아이와 함께 있었던 거야?

---

### `morning5_caught_nurse_honest`
- 배경: `nurse_room.png`
- 다음: `morning5_counteroffer_group_talk`

- 캐릭터: `nurse_worried.png`
**보건선생님**: *보건선생님은 끝까지 듣고도 괜찮다는 말은 하지 않는다. 대신 진료 기록을 가지런히 덮는다.* 괜찮다고 해주면 네 마음은 편하겠지. 그런데 나는 지금 그럴 수가 없네. 오늘은 가 줘. *보건실을 나와 교실로 돌아간다.*

---

### `morning5_caught_nurse_lie`
- 배경: `nurse_room.png`
- 다음: `morning5_counteroffer_group_talk`

- 캐릭터: `nurse_angry.png`
**보건선생님**: *보건선생님은 다시 뜬 알림을 확인하고 안경을 벗는다. 웃음기 없는 눈이 곧장 마주친다.* 아픈 데가 아니라 숨기는 게 있었네. 거짓말까지 돌봐줄 자신은 없어. *보건실을 나와 교실로 돌아간다.*

---

### `morning5_caught_by_seoyeon_route`
- 배경: `room_school.png`
- 분기:
  - [`route_dain`] → `morning5_caught_dain_by_seoyeon`
  - [`route_yuna`] → `morning5_caught_yuna_by_seoyeon`
  - [기본] → `morning5_committed_start`

- 캐릭터: `없음`

<!-- i18n -->

---

### `morning5_caught_dain_by_seoyeon`
- 배경: `room_school.png`
- 선택지:
  1. "어젯밤 일을 그대로 말한다" → `morning5_caught_dain_honest` | Dain -40 | 플래그: `day5_confessed_counteroffer`, `day5_abandoned_dain`
  2. "별일 아니었다고 둘러댄다" → `morning5_caught_dain_lie` | Dain -50 | 플래그: `day5_lied_about_counteroffer`, `day5_abandoned_dain`
  3. "상처받지 않게 좋은 부분만 골라서 말한다" → `morning5_caught_dain_lie` | Dain -45
  4. "일단 안심시키고 자세한 얘기는 나중으로 미룬다" → `morning5_caught_dain_lie` | Dain -55

- 캐릭터: `dain_sad.png`
**다인**: *다인이 책상 옆에 서 있을 때 휴대폰이 울린다. 서연의 알림에 '어젯밤 옥상에서 잡았던 손, 아직 기억나'가 뜬다. 다인의 웃음이 그대로 멎는다.* 내가 기다리는 동안 옥상에 간 거야?

---

### `morning5_caught_yuna_by_seoyeon`
- 배경: `room_school.png`
- 배경톤: `cold`
- 선택지:
  1. "어젯밤 일을 그대로 말한다" → `morning5_caught_yuna_honest` | Yuna -40 | 플래그: `day5_confessed_counteroffer`, `day5_abandoned_yuna`
  2. "별일 아니었다고 둘러댄다" → `morning5_caught_yuna_lie` | Yuna -50 | 플래그: `day5_lied_about_counteroffer`, `day5_abandoned_yuna`
  3. "상처받지 않게 좋은 부분만 골라서 말한다" → `morning5_caught_yuna_lie` | Yuna -45
  4. "일단 안심시키고 자세한 얘기는 나중으로 미룬다" → `morning5_caught_yuna_lie` | Yuna -55

- 캐릭터: `yuna_sad.png`
**유나**: *유나와 마주 앉은 책상 위에서 휴대폰이 울린다. 서연의 알림에 '어젯밤 옥상에서 잡았던 손, 아직 기억나'가 뜬다. 유나는 문장을 끝까지 읽고 화면에서 눈을 뗀다.* 내 메시지는 놔두고 옥상에 갔네.

---

### `morning5_caught_by_yuna_route`
- 배경: `room_school.png`
- 분기:
  - [`route_seoyeon`] → `morning5_caught_seoyeon_by_yuna`
  - [`route_dain`] → `morning5_caught_dain_by_yuna`
  - [기본] → `morning5_committed_start`

- 캐릭터: `없음`

<!-- i18n -->

---

### `morning5_caught_seoyeon_by_yuna`
- 배경: `room_school.png`
- 선택지:
  1. "어젯밤 일을 그대로 말한다" → `morning5_caught_seoyeon_honest` | Seoyeon -40 | 플래그: `day5_confessed_counteroffer`, `day5_abandoned_seoyeon`
  2. "별일 아니었다고 둘러댄다" → `morning5_caught_seoyeon_lie` | Seoyeon -50 | 플래그: `day5_lied_about_counteroffer`, `day5_abandoned_seoyeon`
  3. "상처받지 않게 좋은 부분만 골라서 말한다" → `morning5_caught_seoyeon_lie` | Seoyeon -45
  4. "일단 안심시키고 자세한 얘기는 나중으로 미룬다" → `morning5_caught_seoyeon_lie` | Seoyeon -55

- 캐릭터: `seyoun_sad.png`
**서연**: *서연과 마주 앉은 책상 위에서 휴대폰이 울린다. 유나에게서 온 알림에 '어제 별관에 남아 줘서 고마워'가 뜬다. 서연은 알림을 끝까지 읽은 뒤 천천히 고개를 든다.* 어제 나한테 답장도 안 하고 별관에 간 거야?

---

### `morning5_caught_dain_by_yuna`
- 배경: `room_school.png`
- 선택지:
  1. "어젯밤 일을 그대로 말한다" → `morning5_caught_dain_honest` | Dain -40 | 플래그: `day5_confessed_counteroffer`, `day5_abandoned_dain`
  2. "별일 아니었다고 둘러댄다" → `morning5_caught_dain_lie` | Dain -50 | 플래그: `day5_lied_about_counteroffer`, `day5_abandoned_dain`
  3. "상처받지 않게 좋은 부분만 골라서 말한다" → `morning5_caught_dain_lie` | Dain -45
  4. "일단 안심시키고 자세한 얘기는 나중으로 미룬다" → `morning5_caught_dain_lie` | Dain -55

- 캐릭터: `dain_sad.png`
**다인**: *다인이 건너편 의자를 당기는 순간 유나의 알림이 화면을 밝힌다. '어제 별관에 남아 줘서 고마워.' 다인의 손이 의자 등받이에서 멎는다.* 내 메시지는 읽어 놓고 별관으로 간 거야?

---

### `morning5_caught_dain_honest`
- 배경: `room_school.png`
- 다음: `morning5_counteroffer_group_talk`

- 캐릭터: `dain_sad.png`
**다인**: *다인은 손목 보호대를 끝까지 잡아당겼다가 놓는다.* 그럼 내가 혼자 들뜬 거 아니었냐고 물었을 때, 넌 이미 거기 있었던 거네.

---

### `morning5_caught_dain_lie`
- 배경: `room_school.png`
- 다음: `morning5_counteroffer_group_talk`

- 캐릭터: `dain_angry.png`
**다인**: *다인의 눈썹이 올라가지만 웃음은 돌아오지 않는다.* 나 운동만 해서 바보인 줄 알았어?

---

### `morning5_caught_by_dain_route`
- 배경: `room_school.png`
- 분기:
  - [`route_seoyeon`] → `morning5_caught_seoyeon_by_dain`
  - [`route_yuna`] → `morning5_caught_yuna_by_dain`
  - [기본] → `morning5_committed_start`

- 캐릭터: `없음`

<!-- i18n -->

---

### `morning5_caught_seoyeon_by_dain`
- 배경: `room_school.png`
- 선택지:
  1. "어젯밤 일을 그대로 말한다" → `morning5_caught_seoyeon_honest` | Seoyeon -40 | 플래그: `day5_confessed_counteroffer`, `day5_abandoned_seoyeon`
  2. "별일 아니었다고 둘러댄다" → `morning5_caught_seoyeon_lie` | Seoyeon -50 | 플래그: `day5_lied_about_counteroffer`, `day5_abandoned_seoyeon`
  3. "상처받지 않게 좋은 부분만 골라서 말한다" → `morning5_caught_seoyeon_lie` | Seoyeon -45
  4. "일단 안심시키고 자세한 얘기는 나중으로 미룬다" → `morning5_caught_seoyeon_lie` | Seoyeon -55

- 캐릭터: `seyoun_sad.png`
**서연**: *아침 교실. 서연 앞에 휴대폰을 내려놓는 순간 화면이 켜진다. 다인에게서 온 알림에 '어제 체육관에서 약속한 거, 잊지 마'가 그대로 뜬다. 서연의 시선이 화면에 멎는다.* 어제 공원에는 오지 않고 체육관에 간 거야?

---

### `morning5_caught_seoyeon_honest`
- 배경: `room_school.png`
- 다음: `morning5_counteroffer_group_talk`

- 캐릭터: `seyoun_sad.png`
**서연**: *전부 듣고도 서연은 안경을 벗지 않는다. 렌즈 너머로 보던 눈을 화면 쪽으로 되돌린다.* 솔직히 말해 줘서 고맙다는 말은 못 하겠어. 지금은 네 얼굴 보기 힘들어.

---

### `morning5_caught_seoyeon_lie`
- 배경: `room_school.png`
- 다음: `morning5_counteroffer_group_talk`

- 캐릭터: `seyoun_pout.png`
**서연**: *서연은 다시 켜진 알림 화면과 맞은편 얼굴을 번갈아 본다. 입가에 남아 있던 미소가 사라진다.* 어제 일보다 지금 말이 더 걸려.

---

### `morning5_caught_yuna_by_dain`
- 배경: `room_school.png`
- 배경톤: `cold`
- 선택지:
  1. "어젯밤 일을 그대로 말한다" → `morning5_caught_yuna_honest` | Yuna -40 | 플래그: `day5_confessed_counteroffer`, `day5_abandoned_yuna`
  2. "별일 아니었다고 둘러댄다" → `morning5_caught_yuna_lie` | Yuna -50 | 플래그: `day5_lied_about_counteroffer`, `day5_abandoned_yuna`
  3. "상처받지 않게 좋은 부분만 골라서 말한다" → `morning5_caught_yuna_lie` | Yuna -45
  4. "일단 안심시키고 자세한 얘기는 나중으로 미룬다" → `morning5_caught_yuna_lie` | Yuna -55

- 캐릭터: `yuna_sad.png`
**유나**: *유나가 책을 펼치려는 순간 다인의 알림이 화면에 뜬다. '어제 체육관에서 약속한 거, 잊지 마.' 유나의 손이 책 표지 위에서 멎는다.* 내 이름이 화면에 떠 있는데도 체육관에 남았네.

---

### `morning5_caught_yuna_honest`
- 배경: `room_school.png`
- 배경톤: `cold`
- 다음: `morning5_counteroffer_group_talk`

- 캐릭터: `yuna_sad.png`
**유나**: *유나는 화면을 끄고 휴대폰을 맞은편으로 밀어 놓는다.* 이번에는 어디로 갔는지 알아서 더 아프네.

---

### `morning5_caught_yuna_lie`
- 배경: `room_school.png`
- 배경톤: `cold`
- 다음: `morning5_counteroffer_group_talk`

- 캐릭터: `yuna_angry.png`
**유나**: *유나는 대답 대신 화면을 한 번 더 켠다. 알림 문장이 두 사람 사이에 그대로 남는다.* 확인할 기회까지 줬는데 또 숨기네.

---

### `morning5_counteroffer_group_talk`
- 배경: `room_school.png`
- 타입: `group_free_talk`
- 다음: `morning5_counteroffer_choice`

**두 사람**: *두 사람의 시선이 한꺼번에 닿는다. 어젯밤은 대체 뭐였는지, 처음부터 둘 다 붙잡아 둔 건지. 어느 쪽도 먼저 물러서지 않는다.* "그래서 지금, 누구를 선택할 건데?"

---

### `morning5_counteroffer_choice`
- 배경: `room_school.png`
- 선택지:
  1. "먼저 약속했던 사람에게 책임지고 답한다" → `morning5_counteroffer_choice_lead` | 플래그: `day5_counteroffer_choice_lead`
  2. "어젯밤 찾아간 사람을 선택한다고 말한다" → `morning5_counteroffer_choice_tempter` | 플래그: `day5_counteroffer_choice_tempter`
  3. "둘 다 붙잡지 않고 관계를 정리한다" → `morning5_counteroffer_choice_neither` | 플래그: `day5_counteroffer_choice_neither`

- 캐릭터: `없음`
**{name}**: *대화가 끝나자 두 사람 모두 답을 기다린다.*

---

### `morning5_counteroffer_choice_lead`
- 배경: `room_school.png`
- 다음: `morning5_after_counteroffer`

- 캐릭터: `없음`
**{name}**: *먼저 약속했던 사람 쪽으로 몸을 돌린다.* 어젯밤 내가 한 선택부터 사과할게. 붙잡아 달라고는 안 하겠어.

---

### `morning5_counteroffer_choice_tempter`
- 배경: `room_school.png`
- 다음: `morning5_after_counteroffer`

- 캐릭터: `없음`
**{name}**: *어젯밤 찾아간 사람을 보고 다른 한 사람에게 고개를 숙인다.* 지금 누구에게 마음이 기운 건지 숨기지 않을게. 대신 두 사람을 같이 붙잡지는 않겠어.

---

### `morning5_counteroffer_choice_neither`
- 배경: `room_school.png`
- 다음: `morning5_after_counteroffer`

- 캐릭터: `없음`
**{name}**: *두 사람 사이에서 한 걸음 물러난다.* 지금은 누구도 선택할 자격이 없어. 둘 다 붙잡지 않을게.

---

### `morning5_after_counteroffer`
- 배경: `room_school.png`
- 다음: `morning5_after_counteroffer_hidden_check`

- 캐릭터: `없음`
**{name}**: *조회 종이 한 장이 교탁 아래로 미끄러진다. 아무도 줍지 않는 사이, 행사 안내 방송이 교실을 채운다.*

---

### `morning5_after_counteroffer_hidden_check`
- 배경: `room_school.png`
- 분기:
  - [`day4_counteroffer_target_teacher`] → `hidden_nurse_d5_after_co_check`
  - [`homeroom_day4`] → `hidden_homeroom_d5_1`
  - [기본] → `hidden_nurse_d5_after_co_check`

- 캐릭터: `없음`

<!-- i18n -->

---

### `hidden_nurse_d5_after_co_check`
- 배경: `school_hallway.png`
- 분기:
  - [`day4_counteroffer_target_nurse`] → `morning5_end_branch`
  - [`nurse_day4`] → `hidden_nurse_d5_1`
  - [기본] → `morning5_end_branch`

- 캐릭터: `없음`

<!-- i18n -->

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
**{name}**: *마지막 날이다. 교실 문을 열기 전, 지난 나흘 동안 오간 말들을 한 번씩 떠올린다.*

---

### `morning5_mood_mid`
- 배경: `room_school.png`
- 다음: `morning5_gate`

- 캐릭터: `없음`
**{name}**: 마지막 날. 어느 쪽으로 갈지는 아직 정하지 못했다. 그래도 교문은 넘는다.

---

### `morning5_mood_low`
- 배경: `room_school.png`
- 다음: `morning5_gate`

- 캐릭터: `없음`
**{name}**: 마지막 날. 잠금화면에 남은 이름 셋을 차례로 누른다. 대화방은 열지 않은 채 화면을 끈다.

---

### `morning5_gate`
- 배경: `school.png`
- 다음: `morning5_seo_note_1`

- 캐릭터: `없음`
**{name}**: *교문 앞에서 소매를 걷어 올린다. 손목에 남던 붉은 자국은 없다.*

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
**{name}**: *복도 문예부 전시 코너를 지나다 게시판의 빈 압정 네 개를 발견한다.*

---

### `morning5_yuna_story_gone`
- 배경: `school_hallway.png`
- 다음: `morning5_yuna_story_gone_2`

- 캐릭터: `없음`
**{name}**: *게시판에는 압정 자국만 남아 있다. 소설이 붙었다 떼어진 건지, 처음부터 비어 있었는지는 알 수 없다.*

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
**{name}**: *게시판 아래 구석에는 작은 글씨가 남아 있다. '이건 소설이야. 진짜가 아니야.' 그 아래로 지우개 자국이 번져 있다.*

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
**{name}**: 허락도 없이?

---

### `morning5_dain_2`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_check`

- 캐릭터: `dain_laugh.png`
**다인**: 늦으면 화낸다?

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
**담임선생님**: *담임은 교탁에 앉아 갈색 봉투를 들고 있다. 원고지는 보이지 않는다.*

---

### `hidden_homeroom_d5_1_b`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_1_c`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 아, 왔네.

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
**담임선생님**: *갈색 봉투를 들어 보인다.* 이거.

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
**담임선생님**: 7년 동안 덮어뒀는데 이번엔 문예부랑 국어과 선생님들한테도 돌리려고.

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
  1. "7년이나 쓰셨으면 거의 완성본이겠네요. 굳이 표시할 건 없을 것 같아요." → `hidden_homeroom_d5_praise_trap_1` | Teacher -25 | 플래그: `teacher_praise_broken`
  2. "먼저 읽어볼게요. 표시해도 돼요?" → `hidden_homeroom_d5_correct_1` | Teacher +9
  3. "어려운 부분은 선생님 의도일 테니 그대로 둘게요" → `hidden_homeroom_d5_praise_trap_1` | Teacher -18
  4. "선생님 글이니까 좋은 말만 골라 적어드릴게요" → `hidden_homeroom_d5_praise_trap_1` | Teacher -20

- 캐릭터: `teacher_sad.png`
**{name}**: *원고를 안고 있다. 봉투가 팔 안쪽을 누른다.*

---

### `hidden_homeroom_d5_praise_trap_1`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *봉투 모서리가 손 안에서 조금 구겨졌다. 담임은 접힌 자리를 엄지로 편다.*

---

### `hidden_homeroom_d5_praise_trap_2`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 아직 끝까지 못 썼어.

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
**담임선생님**: 그래.

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
**{name}**: 선생님.

---

### `hidden_homeroom_d5_praise_trap_8`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_9`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 출판사에 세 번 보냈고 세 번 다 떨어졌어. 막연한 격려보다 어디서 읽기를 멈췄는지가 더 필요했어.

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
**담임선생님**: *종이 끝이 손 안에서 조금 휘어진다. 담임은 입술을 다문 채 접힌 끝을 반듯하게 편다.*

---

### `hidden_homeroom_d5_correct_2`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 여기서?

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
**담임선생님**: 그래. 잠깐만.

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
**담임선생님**: 거기까지 봤어?

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
**담임선생님**: *마지막 줄을 손끝으로 짚는다. 창밖 행사 안내가 끝나자 종이 넘기는 소리만 남는다.*

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
**담임선생님**: *클립보드를 책상 위에 내려놓고 빨간 펜 뚜껑을 닫는다.*

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
**{name}**: *합평본을 다시 받아 든다. 담임은 봉투에 남은 반송 스티커 자국을 엄지로 한 번 문지른다.*

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
**{name}**: *담임은 책상 끝에 손을 얹은 채 봉투가 가방에 들어가는 걸 확인한다.*

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
**{name}**: *대답을 기다리는 동안 봉투 모서리의 번호표가 시야에 들어온다.*

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
**담임선생님**: *흘러내린 머리카락을 귀 뒤로 넘긴다.* 감상문은 안 받아.

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
**담임선생님**: *입술 끝이 올라간다.* 맞아. 한 줄이라도 써 줘.

---

### `hidden_homeroom_d5_6_p`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_q`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *문 앞에 붙은 문예부 일정표로 시선을 옮긴다.*

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
- 스탯: Teacher +10
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

### `hidden_homeroom_d5_low`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_nurse_d5_check`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *담임은 접힌 원고를 서류철 안에 넣고 덮개를 닫는다.* 이 이야기는 여기까지 하자. 남은 건 수업에서 정리할게.

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
**보건선생님**: *보건실 문턱을 넘기 전 예약 명단을 다시 펼친다.*

---

### `hidden_nurse_d5_3_i`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_4`

- 캐릭터: `nurse_normal.png`
**보건선생님**: {name}, 잠깐.

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
  1. "네. 가방에 넣어둘게요." → `hidden_nurse_d5_choice_a` | Nurse +5
  2. "카드보다 상담실 예약 방법을 알려주세요." → `hidden_nurse_d5_choice_b` | Nurse +4
  3. "이 카드만 있으면 상담실까지는 안 가도 되겠네요." → `hidden_nurse_d5_choice_trap` | Nurse -6

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
**보건선생님**: 이건 쓸 일이 없으면 제일 좋고 필요할 땐 바로 꺼내.

---

### `hidden_nurse_d5_choice_b`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 좋아. 학교 앱으로 예약하면 내가 바로 못 봐도 상담교사가 이어받을 수 있어.

---

### `hidden_nurse_d5_choice_trap`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 반대야. 혼자 버티라고 만든 카드가 아니야.

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
**보건선생님**: *카드를 케이스에 넣고 가방에서 바로 찾을 수 있게 바깥 주머니에 넣으라고 가리킨다.*

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
- 스탯: Nurse +10
- 다음: `hidden_nurse_d5_freetalk`

<!-- i18n -->

---

### `hidden_nurse_d5_7_both`
- 배경: `school_hallway.png`
- 플래그: `nurse_day5`, `both_hidden_day5`
- 스탯: Nurse +10
- 다음: `hidden_nurse_d5_freetalk`

<!-- i18n -->

---

### `hidden_nurse_d5_freetalk`
- 배경: `school_hallway.png`
- 다음: `morning5_end_branch`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *상담 기록지를 파일에 넣는다.* 상담은 여기까지. 다음엔 필요한 말을 바로 해.

---

### `hidden_nurse_d5_low`
- 배경: `school_hallway.png`
- 다음: `morning5_end_branch`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님이 상담실 카드를 내밀려다 다시 서랍에 넣는다.* 지금은 따로 약속을 잡지 않는 게 좋겠어. 필요하면 정식 절차로 와. *나는 보건실을 나와 교실로 돌아간다.*

---

### `morning5_end_branch`
- 배경: `room_school.png`
- 다음: `morning5_sojeong_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `morning5_sojeong_1`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `morning5_sojeong_2`

- 캐릭터: `없음`
**{name}**: *휴대폰 메모 앱을 연다. '소정에게'로 시작하는 빈 초안이 서른아홉 개다.*

---

### `morning5_sojeong_2`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `morning5_sojeong_3`

- 캐릭터: `없음`
**{name}**: *마흔 번째 초안은 쓰지 않는다. 가장 짧은 문장을 골라 그대로 보낸다.*

---

### `morning5_sojeong_3`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `morning5_sojeong_4`

- 캐릭터: `없음`
**{name}**: 그때 네 책상과 낙서를 보고도 선생님께 말하지 않았어. 모른 척한 것도 내 선택이었어. 미안해. 답장은 안 해도 돼.

---

### `morning5_sojeong_4`
- 배경: `room_school.png`
- 배경톤: `empty`
- 플래그: `sojeong_apology_sent`
- 다음: `morning5_sojeong_5`

- 캐릭터: `없음`
**{name}**: *전송 표시가 뜬다. 읽음 표시는 기다리지 않고 대화방을 닫는다.*

---

### `morning5_sojeong_5`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `morning5_route_branch`

- 캐릭터: `없음`
**{name}**: *지금 담임에게도 메시지를 보낸다. '전학 오기 전 학교에서 제가 모른 척한 일에 대해 상담받고 싶습니다.' 축제 안내 방송이 울릴 때까지 전송한 두 문장을 지우지 않는다.*

---

### `morning5_route_branch`
- 배경: `room_school.png`
- 분기:
  - [`day4_counteroffer_penalty_deferred`] → `tour_co_branch`
  - [`day4_confession_accepted`] → `morning5_committed_end`
  - [기본] → `morning5_end`

- 캐릭터: `없음`

---

### `morning5_end`
- 배경: `room_school.png`
- 분기:
  - [`day4_counteroffer_penalty_deferred`] → `tour_co_branch`
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
  - [`day4_counteroffer_penalty_deferred`] → `tour_co_branch`
  - [`route_dain`] → `tour_dain_1_check`
  - [`route_yuna`] → `tour_yuna_1_check`
  - [`route_seoyeon`] → `tour_seo_1`
  - [기본] → `tour_seo_1`

- 캐릭터: `없음`
**{name}**: *책상 위 쪽지들을 정리하고 이미 고른 방향의 행사 순서를 확인한다.*

---

## 5일차 — 점심 `day5_2_lunch`

### `tour_co_branch`
- 배경: `school.png`
- 분기:
  - [`day4_counteroffer_target_teacher`] → `tour_co_event_1`
  - [`day4_counteroffer_target_nurse`] → `tour_co_event_1`
  - [`route_seoyeon`] → `tour_co_seo_1`
  - [`route_yuna`] → `tour_co_yuna_1`
  - [`route_dain`] → `tour_co_dain_1`
  - [기본] → `tour_co_event_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `tour_co_event_1`
- 배경: `school_hallway.png`
- BGM: `sunset1.mp3`
- 다음: `tour_co_event_2`

- 캐릭터: `없음`
**{name}**: *점심 종이 울렸지만 줄은 짧다. 복도에는 도시락 뚜껑을 여닫는 소리만 남는다.*

---

### `tour_co_event_2`
- 배경: `school_hallway.png`
- 다음: `after5_start`

- 캐릭터: `없음`
**{name}**: *행사 조끼 하나가 의자 등받이에 걸려 있다. 누구 것인지는 아무도 묻지 않는다.*

---

### `tour_co_seo_1`
- 배경: `top_school.png`
- BGM: `sunset1.mp3`
- 다음: `tour_co_seo_2`

- 캐릭터: `seyoun_sad.png`
**{name}**: *옥상 문은 열려 있다. 서연은 난간으로 가지 않고 문틀에 기대 선다.*

---

### `tour_co_seo_2`
- 배경: `top_school.png`
- 다음: `tour_co_seo_3`

- 캐릭터: `seyoun_sad.png`
**서연**: 열쇠는 반납했어. 오늘은 여기까지 하자.

---

### `tour_co_seo_3`
- 배경: `top_school.png`
- 다음: `after5_start`

- 캐릭터: `seyoun_pout.png`
**{name}**: *돌아서던 서연의 클립보드 모서리가 문틀에 부딪힌다. 서연은 멈추지 않는다.*

---

### `tour_co_yuna_1`
- 배경: `yuna_hideout.png`
- BGM: `sunset1.mp3`
- 다음: `tour_co_yuna_2`

- 캐릭터: `yuna_sad.png`
**{name}**: *별관 소파에서 유나는 책을 펴지 않은 채 가방 끈만 손가락에 감는다.*

---

### `tour_co_yuna_2`
- 배경: `yuna_hideout.png`
- 다음: `tour_co_yuna_3`

- 캐릭터: `yuna_sad.png`
**유나**: 결말은 오늘 안 보여 줄래.

---

### `tour_co_yuna_3`
- 배경: `yuna_hideout.png`
- 다음: `after5_start`

- 캐릭터: `yuna_pout.png`
**{name}**: *창틈으로 든 빛이 빈 자리까지 번진다. 유나는 자리를 옮기지 않는다.*

---

### `tour_co_dain_1`
- 배경: `gym.png`
- BGM: `sunset1.mp3`
- 다음: `tour_co_dain_2`

- 캐릭터: `dain_sad.png`
**{name}**: *체육관 불은 켜져 있지만 공은 전부 보관함 안에 있다.*

---

### `tour_co_dain_2`
- 배경: `gym.png`
- 다음: `tour_co_dain_3`

- 캐릭터: `dain_sad.png`
**다인**: 가위바위보는 내일 하자. 오늘은 그냥 서 있을게.

---

### `tour_co_dain_3`
- 배경: `gym.png`
- 다음: `after5_start`

- 캐릭터: `dain_angry.png`
**{name}**: *다인은 손목 보호대 끝을 한 번 잡아당겼다가 천천히 놓는다.*

---

### `tour_seo_1`
- 배경: `school.png`
- BGM: `sunset1.mp3`
- 다음: `tour_seo_affinity_check`

- 캐릭터: `seyoun_normal.png`
**{name}**: *교문 앞에 나란히 선다. 첫날 서연이 기다리고 있던 바로 그 자리.*

---

### `tour_seo_affinity_check`
- 배경: `school.png`
- 호감분기: Seoyeon
  - [80+] → `tour_seo_affinity_80`
  - [60+] → `tour_seo_affinity_60`
  - [기본] → `tour_seo_event_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `tour_seo_affinity_80`
- 배경: `school.png`
- 다음: `tour_seo_affinity_60`

- 캐릭터: `seyoun_shy.png`
**서연**: 다음 주 일정표 첫 칸 비워 뒀어. 네가 시간 정해.

---

### `tour_seo_affinity_60`
- 배경: `school.png`
- 다음: `tour_seo_event_1`

- 캐릭터: `seyoun_laugh.png`
**서연**: 끝나고 옥상에도 들르자. 오늘은 내가 먼저 기다릴게.

---

### `tour_seo_event_1`
- 배경: `school.png`
- 다음: `tour_seo_event_2`

- 캐릭터: `haeun_worried.png`
**하은**: 회장님, 방송부 리허설이랑 부스 안전 점검이 겹쳤어요. 제가 방송실로 갈까요?

---

### `tour_seo_event_2`
- 배경: `school.png`
- 다음: `tour_seo_event_3`

- 캐릭터: `seyoun_worried.png`
**{name}**: *서연의 손이 클립보드로 갔다가 멈춘다. 펜 끝으로 '방송' 칸을 두 번 두드린다.*

---

### `tour_seo_event_3`
- 배경: `school.png`
- 다음: `tour_seo_event_4`

- 캐릭터: `seyoun_normal.png`
**서연**: 방송실은 네가 맡아 줘. 끝나면 결과만 알려 줘.

---

### `tour_seo_event_4`
- 배경: `school.png`
- 다음: `tour_seo_event_5`

- 캐릭터: `haeun_normal.png`
**하은**: 네. 대신 중간에 확인하러 오시면 안 돼요.

---

### `tour_seo_event_5`
- 배경: `school.png`
- 플래그: `day5_seoyeon_delegated`
- 다음: `tour_seo_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *하은이 뛰어간다. 서연은 한 번도 뒤돌아보지 않는다.* 맞아. 하나쯤 내 손을 안 거쳐도 안 무너지겠지.

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
**서연**: 혼내진 않았잖아. 그때부터 보고 있었어.

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
**서연**: 바람 때문에 잘못 들었을 수도 있어.

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
- 스탯: Seoyeon +1
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
- 다음: `tour_yuna_affinity_check`

- 캐릭터: `yuna_normal.png`
**{name}**: *도서관 별관. 창문 틈의 오후 빛이 낡은 소파 한쪽에 걸려 있다. 처음 들어왔을 때와 같은 먼지 냄새가 난다.*

---

### `tour_yuna_1b`
- 배경: `yuna_hideout.png`
- 다음: `tour_yuna_affinity_check`

- 캐릭터: `yuna_normal.png`
**{name}**: *도서관 별관. 유나와 책을 읽던 낡은 소파에 창문 틈의 오후 빛이 걸려 있다.*

---

### `tour_yuna_affinity_check`
- 배경: `yuna_hideout.png`
- 호감분기: Yuna
  - [80+] → `tour_yuna_affinity_80`
  - [60+] → `tour_yuna_affinity_60`
  - [기본] → `tour_yuna_event_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `tour_yuna_affinity_80`
- 배경: `yuna_hideout.png`
- 다음: `tour_yuna_affinity_60`

- 캐릭터: `yuna_shy.png`
**유나**: 다음 편 첫 독자도 네 자리야. 끝나면 날짜를 적어 두자.

---

### `tour_yuna_affinity_60`
- 배경: `yuna_hideout.png`
- 다음: `tour_yuna_event_1`

- 캐릭터: `yuna_smile.png`
**유나**: 오늘 보여줄 마지막 장, 네가 먼저 읽어.

---

### `tour_yuna_event_1`
- 배경: `annex_exhibit_hallway.png`
- 다음: `tour_yuna_event_2`

- 캐릭터: `없음`
**{name}**: *별관 복도로 나오자 전시판 앞에 후배 둘이 서 있다. 유나가 익명으로 붙인 단편을 읽고 다음 이야기가 있느냐고 묻는다.*

---

### `tour_yuna_event_2`
- 배경: `annex_exhibit_hallway.png`
- 다음: `tour_yuna_event_3`

- 캐릭터: `yuna_worried.png`
**{name}**: *유나는 종이 모서리에 손을 댄다. 떼어 내려던 손이 제목 아래에서 멈춘다.*

---

### `tour_yuna_event_3`
- 배경: `annex_exhibit_hallway.png`
- 다음: `tour_yuna_event_4`

- 캐릭터: `yuna_normal.png`
**유나**: 다음 편은 아직 없어. 대신 이건 내가 썼어.

---

### `tour_yuna_event_4`
- 배경: `annex_exhibit_hallway.png`
- 다음: `tour_yuna_event_5`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나가 주머니에서 펜을 꺼내 제목 밑에 이름을 쓴다. '최유나'. 글자가 조금 기울었다.*

---

### `tour_yuna_event_5`
- 배경: `annex_exhibit_hallway.png`
- 플래그: `day5_yuna_signed_story`
- 다음: `tour_yuna_2`

- 캐릭터: `yuna_normal.png`
**유나**: *전시판에서 몸을 돌려 별관 안으로 돌아간다.* 결말은 먼저 너한테 보여 줄 거니까.

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
**유나**: 좋은 뜻으로?

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
**유나**: 결말 썼어.

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
**{name}**: *유나가 노트를 내민다. 표지가 소파 천에 한 번 걸리고 유나는 모서리를 쥔 채 다음 말을 기다린다.*

---

### `tour_yuna_11`
- 배경: `yuna_hideout.png`
- 스탯: Yuna +1
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
**유나**: 유일한 독자. 당분간은.

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
- 다음: `tour_dain_affinity_check`

- 캐릭터: `없음`
**{name}**: *체육관. 첫 내기를 했던 라인 옆에 어젯밤 정리한 공 보관함이 있다. 오늘은 불이 켜져 있다.*

---

### `tour_dain_1b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `tour_dain_affinity_check`

- 캐릭터: `없음`
**{name}**: *체육관. 오늘은 불이 켜져 있다.*

---

### `tour_dain_affinity_check`
- 배경: `gym.png`
- 호감분기: Dain
  - [80+] → `tour_dain_affinity_80`
  - [60+] → `tour_dain_affinity_60`
  - [기본] → `tour_dain_event_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `tour_dain_affinity_80`
- 배경: `gym.png`
- 다음: `tour_dain_affinity_60`

- 캐릭터: `dain_shy.png`
**다인**: 다음 경기 해설 연습할 때도 와. 날짜는 내가 보낼게.

---

### `tour_dain_affinity_60`
- 배경: `gym.png`
- 다음: `tour_dain_event_1`

- 캐릭터: `dain_laugh.png`
**다인**: 방송 부스부터 갈래? 오늘은 네가 첫 청취자 해.

---

### `tour_dain_event_1`
- 배경: `gym.png`
- 다음: `tour_dain_event_2`

- 캐릭터: `dain_pain.png`
**{name}**: *코치에게 전화가 온다. 다인은 체육대회 시범 경기에 뛸 수 있느냐는 말을 끝까지 듣는다.*

---

### `tour_dain_event_2`
- 배경: `gym.png`
- 다음: `tour_dain_event_3`

- 캐릭터: `dain_normal.png`
**다인**: 저 안 뛸게요. 엄마한테도 오늘 말했어요. 대신 중계석 비어 있으면 제가 할게요.

---

### `tour_dain_event_3`
- 배경: `dain_broadcast_booth.png`
- 다음: `tour_dain_event_4`

- 캐릭터: `dain_sweat.png`
**{name}**: *잠시 뒤 다인이 중계석 마이크를 두드린다. 코트가 한눈에 내려다보인다.*

---

### `tour_dain_event_4`
- 배경: `dain_broadcast_booth.png`
- 다음: `tour_dain_event_5`

- 캐릭터: `dain_laugh.png`
**다인**: 자, 서브 들어갑니다! 방금 건 라인 안쪽! 항의는 경기 끝나고 받겠습니다!

---

### `tour_dain_event_5`
- 배경: `dain_broadcast_booth.png`
- 플래그: `day5_dain_chose_commentary`
- 다음: `tour_dain_2`

- 캐릭터: `dain_normal.png`
**다인**: *마이크를 끄고 체육관으로 내려가며 숨을 고른다.* 뛰지 않아도 할 말은 있네. 생각보다 많아.

---

### `tour_dain_2`
- 배경: `gym.png`
- 다음: `tour_dain_3`

- 캐릭터: `dain_normal.png`
**다인**: *다인은 배구공 하나를 옆구리에 낀 채 코트 한가운데 서 있다.*

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
**다인**: 왜 또 졌지.

---

### `tour_dain_8`
- 배경: `gym.png`
- 다음: `tour_dain_10`

- 캐릭터: `dain_normal.png`
**{name}**: *다인은 미간을 찌푸린 채 입꼬리를 누르지 못한다. 한 박자 늦게 배구공을 코트에 내려놓는다.*

---

### `tour_dain_10`
- 배경: `gym.png`
- 다음: `tour_dain_11`

- 캐릭터: `dain_sad.png`
**다인**: 프로는 아직 모르겠지만.

---

### `tour_dain_11`
- 배경: `gym.png`
- 다음: `tour_dain_11_b`

- 캐릭터: `dain_sad.png`
**{name}**: *공이 코트 선을 따라 굴러간다. 다인이 다음 말을 꺼낼 때까지 건드리지 않는다.*

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
**다인**: 뭐가 달라졌는지는 몰라. 근데 코트 밖에서도 할 말이 있어.

---

### `tour_dain_13`
- 배경: `gym.png`
- 다음: `tour_dain_end`

- 캐릭터: `dain_normal.png`
**{name}**: 뭐가 달라진 건데?

---

### `tour_dain_end`
- 배경: `gym.png`
- 스탯: Dain +3
- 다음: `tour_dain_freetalk`

- 캐릭터: `dain_shy.png`
**다인**: 혼자 있지는 않잖아.

---

### `tour_dain_freetalk`
- 배경: `gym.png`
- 다음: `tour_dain_end_2`

- 캐릭터: `dain_normal.png`
**다인**: *굴러온 배구공을 운동화 밑으로 눌러 세운다.* 마지막 점심이라도 그냥 보낼 수는 없지.

---

### `tour_dain_end_2`
- 배경: `gym.png`
- 다음: `after5_start`

- 캐릭터: `dain_shy.png`
**{name}**: *다인은 무릎 대신 배구공 표면을 손바닥으로 굴린다.*

---

### `tour_seo_low`
- 배경: `school_hallway.png`
- 다음: `after5_start`

- 캐릭터: `seyoun_normal.png`
**서연**: *복도 끝에서 서연과 마주친다. 서연은 가방끈을 고쳐 잡고 반 걸음 옆으로 비킨다.* 오늘은 각자 둘러보자. 정리할 게 남았어.

---

### `tour_yuna_low`
- 배경: `yuna_hideout.png`
- 다음: `after5_start`

- 캐릭터: `yuna_normal.png`
**유나**: *별관 문은 잠겨 있다. 잠시 뒤 유나에게 짧은 메시지가 온다.* 오늘은 혼자 있고 싶어. *나는 별관에서 돌아나와 복도로 향한다.*

---

### `tour_dain_low`
- 배경: `gym.png`
- 다음: `after5_start`

- 캐릭터: `dain_normal.png`
**다인**: *체육관 문 앞에서 다인을 만난다. 다인은 공을 들고 코트 쪽으로 돌아선다.* 오늘은 연습해야 해. 나중에 보자.

---

## 5일차 — 방과후 `day5_3_afterschool`

### `after5_start`
- 배경: `school_hallway.png`
- BGM: `sunset1.mp3`
- 분기:
  - [`day4_counteroffer_penalty_deferred`] → `after5_co_start`
  - [기본] → `after5_normal_start`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_normal_start`
- 배경: `school_hallway.png`
- BGM: `sunset1.mp3`
- 분기:
  - [`day4_waited`] → `after5_waited_start_branch`
  - [`day4_confession_accepted`] → `after5_waited_start_branch`
  - [`route_seoyeon`] → `after5_farewell_yuna_check`
  - [기본] → `after5_farewell_seo_1`

- 캐릭터: `없음`
**{name}**: *행사가 끝나갈 무렵, 복도에서 선택하지 않은 두 사람과 마주친다.*

---

### `after5_co_start`
- 배경: `school_hallway.png`
- BGM: `sunset1.mp3`
- 다음: `after5_co_abandoned_branch`

- 캐릭터: `없음`
**{name}**: *행사가 끝난 복도에 아침에 마주쳤던 사람들이 다시 모여 있다.*

---

### `after5_co_abandoned_branch`
- 배경: `school_hallway.png`
- 분기:
  - [`day4_counteroffer_target_teacher`] → `after5_co_teacher_1`
  - [`day4_counteroffer_target_nurse`] → `after5_co_nurse_1`
  - [`route_seoyeon`] → `after5_co_seo_1`
  - [`route_yuna`] → `after5_co_yuna_1`
  - [`route_dain`] → `after5_co_dain_1`
  - [기본] → `after5_co_tempter_branch`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_co_seo_1`
- 배경: `school_hallway.png`
- 다음: `after5_co_seo_2`

- 캐릭터: `seyoun_sad.png`
**서연**: *안경을 고쳐 쓰려다 손을 내린다.* 일정표는 다 돌렸어.

---

### `after5_co_seo_2`
- 배경: `school_hallway.png`
- 다음: `after5_co_tempter_branch`

- 캐릭터: `seyoun_pout.png`
**서연**: 오늘은 더 할 말 없어. 가.

---

### `after5_co_yuna_1`
- 배경: `library_old.png`
- 다음: `after5_co_yuna_2`

- 캐릭터: `yuna_sad.png`
**유나**: *책갈피를 빼 가방에 넣는다.* 게시판은 비워 뒀어.

---

### `after5_co_yuna_2`
- 배경: `library_old.png`
- 다음: `after5_co_tempter_branch`

- 캐릭터: `yuna_angry.png`
**유나**: 오늘은 따라오지 마.

---

### `after5_co_dain_1`
- 배경: `gym.png`
- 다음: `after5_co_dain_2`

- 캐릭터: `dain_sad.png`
**다인**: *공을 보관함 깊숙이 밀어 넣는다.* 파트너 명단에선 지웠어.

---

### `after5_co_dain_2`
- 배경: `gym.png`
- 다음: `after5_co_tempter_branch`

- 캐릭터: `dain_angry.png`
**다인**: 잘 가. 지금은 웃기 좀 그래.

---

### `after5_co_teacher_1`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `after5_co_teacher_2`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *출석부를 덮는다.* 오늘 행사는 다른 선생님이 맡으셨어.

---

### `after5_co_teacher_2`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `after5_co_tempter_branch`

- 캐릭터: `teacher_angry.png`
**담임선생님**: 오늘은 교무실에 오지 마.

---

### `after5_co_nurse_1`
- 배경: `nurse_room.png`
- 다음: `after5_co_nurse_2`

- 캐릭터: `nurse_worried.png`
**보건선생님**: *진료 기록을 서랍에 넣는다.* 상담은 여기까지 할게.

---

### `after5_co_nurse_2`
- 배경: `nurse_room.png`
- 다음: `after5_co_tempter_branch`

- 캐릭터: `nurse_angry.png`
**보건선생님**: 아프면 오늘은 다른 선생님한테 가. 내가 봐 주긴 어려워.

---

### `after5_co_tempter_branch`
- 배경: `school_hallway.png`
- 분기:
  - [`day4_took_seoyeon_counteroffer`] → `after5_co_tempter_seo_1`
  - [`day4_took_yuna_counteroffer`] → `after5_co_tempter_yuna_1`
  - [`day4_took_dain_counteroffer`] → `after5_co_tempter_dain_1`
  - [기본] → `after5_waited_start_branch`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_co_tempter_seo_1`
- 배경: `school_hallway.png`
- 다음: `after5_co_tempter_seo_2`

- 캐릭터: `seyoun_sad.png`
**서연**: *옥상 열쇠고리를 주머니에 넣는다.* 어제 먼저 다가간 건 나였어.

---

### `after5_co_tempter_seo_2`
- 배경: `school_hallway.png`
- 다음: `after5_waited_start_branch`

- 캐릭터: `seyoun_normal.png`
**서연**: 그래도 오늘은 내가 붙잡지 않을게.

---

### `after5_co_tempter_yuna_1`
- 배경: `library_old.png`
- 다음: `after5_co_tempter_yuna_2`

- 캐릭터: `yuna_sad.png`
**유나**: *잠금화면에는 아직 별관 사진이 떠 있다.* 어제 부른 건 나야.

---

### `after5_co_tempter_yuna_2`
- 배경: `library_old.png`
- 다음: `after5_waited_start_branch`

- 캐릭터: `yuna_normal.png`
**유나**: 지금은 따라가지 마. 그거면 돼.

---

### `after5_co_tempter_dain_1`
- 배경: `gym.png`
- 다음: `after5_co_tempter_dain_2`

- 캐릭터: `dain_sad.png`
**다인**: *느슨해진 무릎 테이프를 눌러 붙인다.* 어제 남으라고 한 건 나야.

---

### `after5_co_tempter_dain_2`
- 배경: `gym.png`
- 다음: `after5_waited_start_branch`

- 캐릭터: `dain_normal.png`
**다인**: 오늘은 내가 먼저 부르지 않을게.

---

### `after5_waited_start_branch`
- 배경: `school_hallway.png`
- 분기:
  - [`route_seoyeon`] → `after5_farewell_yuna_check`
  - [`day4_took_seoyeon_counteroffer`] → `after5_farewell_yuna_check`
  - [기본] → `after5_farewell_seo_1`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `after5_farewell_seo_1`
- 배경: `school_hallway.png`
- 다음: `after5_farewell_seo_affinity_check`

- 캐릭터: `seyoun_normal.png`
**{name}**: *복도에서 서연과 마주친다.*

---

### `after5_farewell_seo_affinity_check`
- 배경: `school_hallway.png`
- 호감분기: Seoyeon
  - [80+] → `after5_farewell_seo_high_1`
  - [기본] → `after5_farewell_seo_2`
- 다음: `after5_farewell_seo_2`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_farewell_seo_high_1`
- 배경: `school_hallway.png`
- 다음: `after5_farewell_seo_high_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연이 클립보드 안쪽에서 첫날 건넸던 메모를 꺼낸다. 접힌 모서리를 엄지로 편다.* 이건 아직 갖고 있어.

---

### `after5_farewell_seo_high_2`
- 배경: `school_hallway.png`
- 다음: `after5_farewell_seo_6_b`

- 캐릭터: `seyoun_sad.png`
**서연**: 네 선택은 알아. 그래도 내가 좋아했던 시간까지 없던 일로 만들진 않을게.

---

### `after5_farewell_seo_2`
- 배경: `school_hallway.png`
- 제외조건: `route_seoyeon`
- 다음: `after5_farewell_seo_3`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연이 길게 숨을 내쉰다.*

---

### `after5_farewell_seo_3`
- 배경: `school_hallway.png`
- 제외조건: `route_seoyeon`
- 다음: `after5_farewell_seo_4`

- 캐릭터: `seyoun_normal.png`
**서연**: *흘러내린 머리카락을 귀 뒤로 넘기고 가방끈을 고쳐 잡는다.*

---

### `after5_farewell_seo_4`
- 배경: `school_hallway.png`
- 제외조건: `route_seoyeon`
- 다음: `after5_farewell_seo_5`

- 캐릭터: `seyoun_normal.png`
**서연**: 뭐, 예상은 했어. 그래도 내가 먼저 포기한 것처럼 보이진 않았으면 해.

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
**서연**: 네가 정한 거면 존중할게. 대신 내 마음까지 정리된 건 아니야.

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
**{name}**: *복도에 혼자 남았다. 서연의 발소리가 멀어지고 위층에서 옥상 문 잠기는 소리가 난다.*

---

### `after5_farewell_seo_low`
- 배경: `school_hallway.png`
- 다음: `after5_farewell_yuna_check`

- 캐릭터: `seyoun_normal.png`
**서연**: *복도에서 서연과 마주친다. 서연은 잠시 멈췄다가 고개만 한 번 숙인다.* 네가 정한 건 알아. 더 할 말은 없어.

---

### `after5_farewell_yuna_check`
- 배경: `school_hallway.png`
- 분기:
  - [`route_yuna`] → `after5_farewell_dain_check`
  - [`day4_took_yuna_counteroffer`] → `after5_farewell_dain_check`
  - [기본] → `after5_farewell_yuna_1`

<!-- i18n -->

---

### `after5_farewell_yuna_1`
- 배경: `library_old.png`
- 다음: `after5_farewell_yuna_affinity_check`

- 캐릭터: `yuna_normal.png`
**{name}**: *도서관 앞에서 유나가 다가온다. 아무 말 없이 책 한 권을 건넨다.*

---

### `after5_farewell_yuna_affinity_check`
- 배경: `library_old.png`
- 호감분기: Yuna
  - [80+] → `after5_farewell_yuna_high_1`
  - [기본] → `after5_farewell_yuna_2`
- 다음: `after5_farewell_yuna_2`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_farewell_yuna_high_1`
- 배경: `library_old.png`
- 다음: `after5_farewell_yuna_high_2`

- 캐릭터: `yuna_normal.png`
**유나**: *유나가 책갈피 뒷면에 오늘 날짜를 적어 건넨다.* 마지막 장까지는 네가 읽어.

---

### `after5_farewell_yuna_high_2`
- 배경: `library_old.png`
- 다음: `after5_farewell_yuna_5b`

- 캐릭터: `yuna_sad.png`
**유나**: 네가 고른 사람한테는 늦지 마. 그래도 내가 널 좋아했던 문장은 지우지 않을 거야.

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
**유나**: 네가 고른 사람한테는 늦지 마. ...그래도 나는 아직 네가 좋아.

---

### `after5_farewell_yuna_4`
- 배경: `library_old.png`
- 제외조건: `route_yuna`
- 다음: `after5_farewell_yuna_5`

- 캐릭터: `yuna_normal.png`
**유나**: *도서관 쪽 복도로 돌아간다. 구두 소리가 모퉁이 뒤로 사라진다.*

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

### `after5_farewell_yuna_low`
- 배경: `library_old.png`
- 다음: `after5_farewell_dain_check`

- 캐릭터: `yuna_normal.png`
**유나**: *도서관 앞에서 유나와 눈이 마주친다. 유나는 들고 있던 책을 품에 붙인 채 짧게 고개를 끄덕인다.* 잘 가.

---

### `after5_farewell_dain_check`
- 배경: `school_hallway.png`
- 분기:
  - [`route_dain`] → `after5_sunset_1`
  - [`day4_took_dain_counteroffer`] → `after5_sunset_1`
  - [기본] → `after5_farewell_dain_1`

<!-- i18n -->

---

### `after5_farewell_dain_1`
- 배경: `gym.png`
- 다음: `after5_farewell_dain_affinity_check`

- 캐릭터: `dain_normal.png`
**{name}**: *체육관 앞에서 다인이 걸어온다. 평소보다 보폭이 작다.*

---

### `after5_farewell_dain_affinity_check`
- 배경: `gym.png`
- 호감분기: Dain
  - [80+] → `after5_farewell_dain_high_1`
  - [기본] → `after5_farewell_dain_2`
- 다음: `after5_farewell_dain_2`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_farewell_dain_high_1`
- 배경: `gym.png`
- 다음: `after5_farewell_dain_high_2`

- 캐릭터: `dain_normal.png`
**다인**: *다인은 배구공을 한 번 튀겨 잡고 코트 선 밖에 내려놓는다.* 네 선택은 알아.

---

### `after5_farewell_dain_high_2`
- 배경: `gym.png`
- 다음: `after5_farewell_dain_4_d`

- 캐릭터: `dain_sad.png`
**다인**: 그래도 내가 좋아했던 것까지 없던 일로 하진 않을 거야. 잘해. 아니면 진짜 화낼 거니까.

---

### `after5_farewell_dain_2`
- 배경: `gym.png`
- 제외조건: `route_dain`
- 다음: `after5_farewell_dain_3`

- 캐릭터: `dain_normal.png`
**다인**: 치, 아쉽다! 그런데 아쉽다고만 하고 물러날 생각은 없어.

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
**다인**: 네가 고른 건 알아. 그래도 나 아직 너 좋아해. 그건 내가 말할 수 있잖아.

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
**다인**: 잘해. 아니면 내가 다시 데려갈 거니까.

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
**{name}**: *다인은 무릎 보호대 끈을 한 번 더 당기고 체육관 안으로 들어간다.*

---

### `after5_farewell_dain_5b`
- 배경: `school_back.png`
- 다음: `after5_sunset_1`

- 캐릭터: `없음`
**{name}**: *체육관을 나서 학교 뒤편으로 향했다.*

---

### `after5_farewell_dain_low`
- 배경: `gym.png`
- 다음: `after5_sunset_1`

- 캐릭터: `dain_normal.png`
**다인**: *체육관 앞에서 다인이 걸어오다 두 걸음 떨어진 곳에 멈춘다.* 네가 정한 건 알겠어. 나 먼저 들어갈게.

---

### `after5_sunset_1`
- 배경: `school_back.png`
- BGM: `confession.mp3`
- 다음: `after5_ending_check`

- 캐릭터: `없음`
**{name}**: *석양이 교정 창문마다 걸린다. 방송실에서 행사 종료 안내가 흐르고 운동장 스피커가 한 박자 늦게 지직거린다.*

---

### `after5_ending_check`
- 분기:
  - [`day3_caught_multiple_dates`] → `ending_start`
  - [`harem_seed`] → `after5_set_harem`
  - [`day4_counteroffer_penalty_deferred`] → `ending_start`
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
  - [`day4_confession_accepted`] → `ending_start`
  - [`day4_waited`] → `after5_hidden_route_choice`
  - [기본] → `after5_hidden_route_choice`

- 캐릭터: `없음`
**{name}**: *친구들과 한 약속으로 가는 길과, 행사 정리를 마저 돕는 길이 갈린다.*

---

### `after5_hidden_route_choice`
- 배경: `park.png`
- 선택지:
  1. "공원으로 가서 원래 하던 선택을 마무리한다" → `after5_last_chance_1`
  2. "담임선생님에게 돌아가 문예부 원고를 함께 정리한다" → `after5_hidden_teacher_affinity_check` | 플래그: `hidden_route_chosen_teacher`
  3. "보건선생님에게 돌아가 상담 기록을 함께 정리한다" → `after5_hidden_nurse_affinity_check` | 플래그: `hidden_route_chosen_nurse`

- 캐릭터: `없음`
**{name}**: *공원으로 향하는 길과, 행사 정리를 마저 돕는 길이 갈린다. 오늘은 누구에게 답할지 정해야 한다.*

---

### `after5_hidden_teacher_affinity_check`
- 배경: `room_school.png`
- 호감분기: Teacher
  - [60+] → `after5_hidden_teacher_high`
  - [40+] → `after5_hidden_teacher_mid`
  - [기본] → `after5_hidden_teacher_low`
- 다음: `after5_hidden_teacher_low`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_hidden_teacher_high`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `after5_hidden_return_to_park`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *04번 합평본의 빈 의견란을 한 번 확인하고 봉투를 닫는다.* 네가 어디서 멈췄는지 월요일에 들을게. 좋은 말만 고르지는 마.

---

### `after5_hidden_teacher_mid`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `after5_hidden_return_to_park`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *04번 합평본 번호를 확인한다.* 읽은 데까지만 표시해. 나머지는 문예부에서 같이 볼 거야.

---

### `after5_hidden_teacher_low`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `after5_hidden_return_to_park`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *원고 봉투를 서류철 안에 넣는다.* 합평은 정해진 시간에 문예부에서 받겠다. 오늘은 행사부터 마쳐.

---

### `after5_hidden_nurse_affinity_check`
- 배경: `nurse_room.png`
- 호감분기: Nurse
  - [60+] → `after5_hidden_nurse_high`
  - [40+] → `after5_hidden_nurse_mid`
  - [기본] → `after5_hidden_nurse_low`
- 다음: `after5_hidden_nurse_low`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_hidden_nurse_high`
- 배경: `nurse_room.png`
- 다음: `after5_hidden_return_to_park`

- 캐릭터: `nurse_smile.png`
**보건선생님**: *상담 확인서와 응급처치 카드를 나란히 놓는다.* 다음에 버거우면 혼자 버티지 말고 네가 정한 순서대로 먼저 연락해.

---

### `after5_hidden_nurse_mid`
- 배경: `nurse_room.png`
- 다음: `after5_hidden_return_to_park`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *응급처치 카드 뒷면의 상담 QR을 가리킨다.* 필요하면 여기로 예약해. 이유를 만들 필요는 없어.

---

### `after5_hidden_nurse_low`
- 배경: `nurse_room.png`
- 다음: `after5_hidden_return_to_park`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *상담 기록지를 파일에 넣고 예약표를 닫는다.* 다음 상담은 정식 절차로 잡아. 오늘 기록은 여기서 마칠게.

---

### `after5_hidden_return_to_park`
- 배경: `park.png`
- 다음: `ending_start`

- 캐릭터: `없음`
**{name}**: *정리를 마치고 학교를 나선다. 공원으로 이어진 길에 축제 안내 깃발이 접혀 있다.*

---

### `after5_last_chance_1`
- 배경: `school_back.png`
- 플래그: `day5_last_chance_path`
- 다음: `after5_last_chance_2`

- 캐릭터: `없음`
**{name}**: *행사장 스피커 전원이 꺼진다. 갈림길 안내판 아래에서 신발 끝이 방향을 바꾸지 못한 채 서 있다.*

---

### `after5_last_chance_2`
- 배경: `school_back.png`
- 다음: `after5_last_chance_route_check`

- 캐릭터: `없음`
**{name}**: *주머니 속 휴대폰을 꺼낸다. 검은 화면에 행사 현수막만 비친다.*

---

### `after5_last_chance_route_check`
- 배경: `school_back.png`
- 분기:
  - [`route_seoyeon`] → `after5_last_chance_seo_history_check`
  - [`route_dain`] → `after5_last_chance_dain_history_check`
  - [`route_yuna`] → `after5_last_chance_yuna_history_check`
  - [기본] → `after5_last_chance_choice`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_last_chance_seo_history_check`
- 배경: `school_back.png`
- 분기:
  - [`postponed_seoyeon`] → `after5_last_chance_seo_postponed`
  - [`day4_tentative_seoyeon`] → `after5_last_chance_seo_tentative`
  - [`day4_distance_seoyeon`] → `after5_last_chance_seo_distance`
  - [기본] → `after5_last_chance_seo_aff_check`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_last_chance_seo_postponed`
- 배경: `school_back.png`
- 다음: `after5_last_chance_seo_aff_check`

- 캐릭터: `seyoun_normal.png`
**서연**: 어제 옥상에서 남긴 말, 오늘은 끝까지 해.

---

### `after5_last_chance_seo_tentative`
- 배경: `school_back.png`
- 다음: `after5_last_chance_seo_aff_check`

- 캐릭터: `seyoun_normal.png`
**서연**: 어제는 다음 약속을 안 잡았지. 그래도 오늘은 네가 먼저 왔네.

---

### `after5_last_chance_seo_distance`
- 배경: `school_back.png`
- 다음: `after5_last_chance_seo_aff_check`

- 캐릭터: `seyoun_sad.png`
**서연**: 어제는 여기서 멈추자고 했어. 오늘 온 이유부터 들을게.

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
**{name}**: *휴대폰을 켜지 않은 채 주머니에 넣는다. 갈림길 반대편을 향해 두 걸음 내딛고 이름을 부른다.*

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
**서연**: *서연이 돌아본다. 등 뒤의 행사 현수막이 바람에 한 번 접힌다.*

---

### `after5_last_chance_2_e`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_f`

- 캐릭터: `seyoun_normal.png`
**서연**: 늦었어.

---

### `after5_last_chance_2_f`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_g`

- 캐릭터: `seyoun_worried.png`
**{name}**: *서연은 학생회 리본 끝을 손가락에 한 번 감았다가 놓는다.*

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
**서연**: *서연은 손바닥을 펴 보인 채 기다린다.*

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
**서연**: *돌아본다. 발끝은 출구 쪽에 반쯤 남아 있다.* 왜.

---

### `after5_last_chance_dain_history_check`
- 배경: `school_back.png`
- 분기:
  - [`postponed_dain`] → `after5_last_chance_dain_postponed`
  - [`day4_tentative_dain`] → `after5_last_chance_dain_tentative`
  - [`day4_distance_dain`] → `after5_last_chance_dain_distance`
  - [기본] → `after5_last_chance_dain_aff_check`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_last_chance_dain_postponed`
- 배경: `school_back.png`
- 다음: `after5_last_chance_dain_aff_check`

- 캐릭터: `dain_normal.png`
**다인**: 어제 못 끝낸 말, 오늘은 끝까지 들어.

---

### `after5_last_chance_dain_tentative`
- 배경: `school_back.png`
- 다음: `after5_last_chance_dain_aff_check`

- 캐릭터: `dain_normal.png`
**다인**: 어제는 다음 약속을 못 잡았지. 오늘은 네가 먼저 왔네.

---

### `after5_last_chance_dain_distance`
- 배경: `school_back.png`
- 다음: `after5_last_chance_dain_aff_check`

- 캐릭터: `dain_sad.png`
**다인**: 어제는 서로 멈췄잖아. 오늘은 왜 돌아왔는지 듣고 싶어.

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
**다인**: *한 걸음 지나쳤다가 배구공으로 바닥을 눌러 세운다.*

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
**다인**: *공을 쥔 팔이 옆구리에서 내려온다. 운동화 앞코가 다시 {name} 쪽을 향한다.*

---

### `after5_last_chance_2_o`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_p`

- 캐릭터: `dain_shy.png`
**다인**: 돌아온 거야?

---

### `after5_last_chance_2_p`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_q`

- 캐릭터: `dain_sad.png`
**다인**: *입술을 한 번 깨물고 짧게 숨을 들이켠다.*

---

### `after5_last_chance_2_q`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_r`

- 캐릭터: `dain_sad.png`
**다인**: 바로 웃지는 못해. 그래도 여기까지 온 말은 들을게.

---

### `after5_last_chance_2_r`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_s`

- 캐릭터: `dain_sad.png`
**다인**: *눈가를 문지른다. 손등에 물기가 묻는다.*

---

### `after5_last_chance_2_s`
- 배경: `school_back.png`
- 다음: `after5_last_chance_choice`

- 캐릭터: `dain_laugh.png`
**다인**: 말해. 끝까지 들을게.

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
**다인**: *한 걸음 지나친 뒤 돌아온다. 배구공을 가슴 앞에 안은 채 거리를 둔다.* 왜.

---

### `after5_last_chance_yuna_history_check`
- 배경: `school_back.png`
- 분기:
  - [`postponed_yuna`] → `after5_last_chance_yuna_postponed`
  - [`day4_tentative_yuna`] → `after5_last_chance_yuna_tentative`
  - [`day4_distance_yuna`] → `after5_last_chance_yuna_distance`
  - [기본] → `after5_last_chance_yuna_aff_check`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_last_chance_yuna_postponed`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_aff_check`

- 캐릭터: `yuna_normal.png`
**유나**: 어제는 결말을 미뤘지. 오늘은 네 말부터 들을게.

---

### `after5_last_chance_yuna_tentative`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_aff_check`

- 캐릭터: `yuna_normal.png`
**유나**: 어제는 내가 먼저 연락하겠다고 했는데. 오늘은 네가 왔네.

---

### `after5_last_chance_yuna_distance`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_aff_check`

- 캐릭터: `yuna_sad.png`
**유나**: 어제는 여기까지 하자고 했어. 오늘 온 이유는 들을게.

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
**유나**: *발소리가 두 걸음 더 간 뒤 끊긴다. 책을 품 쪽으로 끌어안고 2초쯤 지나 돌아본다.*

---

### `after5_last_chance_yuna_3`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_4`

- 캐릭터: `yuna_normal.png`
**유나**: 돌아왔네.

---

### `after5_last_chance_yuna_4`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_5`

- 캐릭터: `없음`
**{name}**: *둘 사이에 두 걸음 거리가 남아 있다. 유나는 책을 안은 채 기다린다.*

---

### `after5_last_chance_yuna_5`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_6`

- 캐릭터: `yuna_shy.png`
**유나**: 듣고 갈게. 괜찮다고는 못 해도.

---

### `after5_last_chance_yuna_6`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_7`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나는 시선을 돌리지 않는다. 둘 사이 거리가 한 걸음만큼 줄어 있다.*

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
**유나**: *책장 사이로 돌아본다. 책을 끌어안은 팔에 힘이 들어간다.* 왜.

---

### `after5_last_chance_choice`
- 배경: `school_back.png`
- 선택지:
  1. "지금 말한다" → `after5_confess_yes` | 플래그: `day5_confessed`
  2. "아직 말하지 않는다" → `after5_confess_no`
  3. "오늘은 서로 생각할 시간을 갖자." → `after5_defer_route_check` | 현재 대화 캐릭터 -4

- 캐릭터: `없음`
**{name}**: *손바닥 안에서 핸드폰이 눌린다.*

---

### `after5_defer_route_check`
- 배경: `school_back.png`
- 분기:
  - [`route_seoyeon`] → `after5_defer_seo`
  - [`route_dain`] → `after5_defer_dain`
  - [`route_yuna`] → `after5_defer_yuna`
  - [기본] → `after5_confess_no`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_defer_seo`
- 배경: `school_back.png`
- 다음: `after5_confess_no_2`

- 캐릭터: `seyoun_sad.png`
**서연**: *펴고 있던 손을 천천히 거둔다.* 그래. 네가 정했으면.

---

### `after5_defer_dain`
- 배경: `school_back.png`
- 다음: `after5_confess_no_2`

- 캐릭터: `dain_sad.png`
**다인**: *배구공을 다시 끌어안는다.* 그래. 오늘도 여기서 멈추는 거네.

---

### `after5_defer_yuna`
- 배경: `school_back.png`
- 다음: `after5_confess_no_2`

- 캐릭터: `yuna_sad.png`
**유나**: *책을 다시 품에 안는다.* 알겠어. 오늘도 여기서 멈추는 거네.

---

### `after5_confess_no`
- 배경: `school_back.png`
- 다음: `after5_confess_no_2`

- 캐릭터: `없음`
**{name}**: *휴대폰 화면을 끄고 입을 다문다.*

---

### `after5_confess_no_2`
- 배경: `school_back.png`
- 다음: `after5_confess_no_2b`

- 캐릭터: `없음`
**{name}**: *저녁 바람에 행사 안내지가 발치까지 굴러온다. 주워 게시판 아래에 끼워 둔다.*

---

### `after5_confess_no_2b`
- 배경: `room_my.png`
- 다음: `ending_start`

- 캐릭터: `없음`
**{name}**: *끝내 돌아서서 집으로 향했다.*

---

### `after5_confess_yes`
- 배경: `school_back.png`
- 다음: `after5_confess_yes_2`

- 캐릭터: `없음`
**{name}**: *휴대폰을 주머니에 넣고 이름을 부른다.*

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
**서연**: *공원 쪽으로 나란히 걷기 시작한다.* 늦었어. 그래도 들을게.

---

### `after5_confess_react_seo_low`
- 배경: `school_back.png`
- 다음: `after5_confess_fail_walk_1`

- 캐릭터: `seyoun_sad.png`
**서연**: *횡단보도 신호가 한 번 바뀔 때까지 말이 없다.* 들었어. 지금은 그 정도로 해.

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
**다인**: *학교를 나서며 운동화 끈을 한 번 내려다본다.* 야, 너. 나 기다리긴 했어. 끝까지 말해.

---

### `after5_confess_react_dain_low`
- 배경: `school_back.png`
- 다음: `after5_confess_fail_walk_1`

- 캐릭터: `dain_sad.png`
**다인**: *배구공의 홈을 엄지로 따라간다.* 들었어. 바로 웃기는 좀 힘들어.

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
**유나**: *나란히 걷는다.* 알고는 있었어. 그래도 들을게.

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
**유나**: *책을 내려놓다 모서리를 다시 쥔다.*

---

### `after5_confess_react_yuna_c`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_d`

- 캐릭터: `yuna_normal.png`
**유나**: 그래도 직접 듣고 싶었어.

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
**유나**: 읽었으면 됐어.

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
**{name}**: *교문 밖으로 나왔다.*

---

### `after5_confess_react_yuna_low`
- 배경: `school_back.png`
- 다음: `after5_confess_fail_walk_1`

- 캐릭터: `yuna_sad.png`
**유나**: *쪽지를 접어 쥔다.* 읽었어. 근데 아직 결말은 못 정하겠어.

---

### `after5_confess_fail_walk_1`
- 배경: `school_back.png`
- 다음: `after5_confess_fail_walk_2`

- 캐릭터: `없음`
**{name}**: *해가 더 내려앉는다. 같은 쪽으로 걷기만 한다.*

---

### `after5_confess_fail_walk_2`
- 배경: `park.png`
- 다음: `ending_start`

- 캐릭터: `없음`
**{name}**: *답을 못 낸 채 공원 쪽으로 걸었다.*

---

### `after5_set_harem`
- 배경: `school_back.png`
- 다음: `after5_harem_commit`

- 캐릭터: `없음`
**{name}**: *점심때 접어 둔 말들이 그대로 남아 있다. 메시지방 세 개가 한꺼번에 켜지고 어느 쪽에도 첫 글자를 못 쓴다.*

---

### `after5_harem_commit`
- 배경: `school_back.png`
- 플래그: `ending_harem`
- 다음: `after5_harem_walk_1`

- 캐릭터: `없음`
**{name}**: *세 대화방을 번갈아 본 뒤 휴대폰을 내려놓는다. '한 사람을 고르지 못했어.' 세 사람의 시선이 화면에서 {name}에게 옮겨온다.*

---

### `after5_harem_walk_1`
- 배경: `school_back.png`
- 다음: `after5_harem_walk_2`

- 캐릭터: `없음`
**{name}**: *학교 뒤편까지 아무도 먼저 말하지 않는다.*

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
  - [`day4_counteroffer_penalty_deferred`] → `ending_counteroffer_bitter`
  - [`day5_last_chance_path`] → `ending_last_chance_resolve`
  - [`hidden_route_chosen_teacher`] → `hidden_perfect_homeroom_check`
  - [`hidden_route_chosen_nurse`] → `hidden_perfect_nurse_check`
  - [`day4_confession_accepted`] → `ending_affinity_check`
  - [`day5_confessed`] → `ending_confessed_aff_check`
  - [`day4_waited`] → `day5_ending_friend`
  - [`both_hidden_day5`] → `hidden_dual_route_1`
  - [`homeroom_day5`] → `hidden_perfect_homeroom_check`
  - [`nurse_day5`] → `hidden_perfect_nurse_check`
  - [기본] → `day5_ending_alone`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `ending_counteroffer_bitter`
- 배경: `park.png`
- BGM: `night2.mp3`
- 플래그: `ending_bittersweet`
- 분기:
  - [`day5_counteroffer_choice_lead`] → `ending_counteroffer_choice_lead`
  - [`day5_counteroffer_choice_tempter`] → `ending_counteroffer_choice_tempter`
  - [`day5_counteroffer_choice_neither`] → `ending_counteroffer_choice_neither`
  - [기본] → `ending_counteroffer_bitter_route`

- 캐릭터: `없음`

<!-- i18n -->

---

### `ending_counteroffer_choice_lead`
- 배경: `park.png`
- BGM: `night2.mp3`
- 다음: `ending_counteroffer_bitter_route`

- 캐릭터: `없음`
**{name}**: *먼저 약속했던 사람을 선택했다. 사과가 어젯밤의 일을 지우지는 못했다.*

---

### `ending_counteroffer_choice_tempter`
- 배경: `park.png`
- BGM: `night2.mp3`
- 다음: `ending_counteroffer_bitter_route`

- 캐릭터: `없음`
**{name}**: *한 사람을 골랐다. 시작보다 먼저 정리해야 할 관계가 남았다.*

---

### `ending_counteroffer_choice_neither`
- 배경: `park.png`
- BGM: `night2.mp3`
- 다음: `ending_counteroffer_bitter_route`

- 캐릭터: `없음`
**{name}**: *둘 다 붙잡지 않겠다고 말한 뒤, 세 사람의 대화는 거기서 끝났다.*

---

### `ending_counteroffer_bitter_route`
- 배경: `park.png`
- 분기:
  - [`day4_counteroffer_target_teacher`] → `co_bitter_teacher_1`
  - [`day4_counteroffer_target_nurse`] → `co_bitter_nurse_1`
  - [`route_seoyeon`] → `co_bitter_seo_1`
  - [`route_yuna`] → `co_bitter_yuna_1`
  - [`route_dain`] → `co_bitter_dain_1`
  - [기본] → `co_bitter_seo_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `co_bitter_seo_1`
- 배경: `cafe.png`
- 다음: `co_bitter_seo_2`

- 캐릭터: `seyoun_sad.png`
**{name}**: *한 달쯤 뒤 다시 찾은 카페에서 서연은 비뚤어진 컵받침을 보고도 손대지 않는다.*

---

### `co_bitter_seo_2`
- 배경: `cafe.png`
- 다음: `co_bitter_seo_3`

- 캐릭터: `seyoun_sad.png`
**서연**: 그날 알림 말이야. 지웠는데도 자꾸 생각나.

---

### `co_bitter_seo_3`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_epilogue_1`

- 캐릭터: `없음`
**{name}**: *자리에서 일어난 서연은 가방끈을 고쳐 메고 자기 우산만 펼친다.*

---

### `co_bitter_yuna_1`
- 배경: `bookstore.png`
- 다음: `co_bitter_yuna_2`

- 캐릭터: `yuna_sad.png`
**{name}**: *헌책방 앞에 먼저 와 있던 유나는 빈손이다.*

---

### `co_bitter_yuna_2`
- 배경: `bookstore.png`
- 다음: `co_bitter_yuna_3`

- 캐릭터: `yuna_sad.png`
**유나**: 그날 이후로 별관엔 안 가.

---

### `co_bitter_yuna_3`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_epilogue_1`

- 캐릭터: `없음`
**{name}**: *유나는 짧게 고개만 끄덕이고 반대편 골목으로 들어간다.*

---

### `co_bitter_dain_1`
- 배경: `gym.png`
- 다음: `co_bitter_dain_2`

- 캐릭터: `dain_sad.png`
**{name}**: *다인은 공 없이 체육관 밖에 서 있다.*

---

### `co_bitter_dain_2`
- 배경: `gym.png`
- 다음: `co_bitter_dain_3`

- 캐릭터: `dain_sad.png`
**다인**: 그날 파트너 명단에서, 내가 지운 거 맞지?

---

### `co_bitter_dain_3`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_epilogue_1`

- 캐릭터: `없음`
**{name}**: *다인은 주먹 대신 손바닥으로 어깨를 툭 치고 지나간다.*

---

### `co_bitter_teacher_1`
- 배경: `school_hallway.png`
- 배경톤: `empty`
- 다음: `co_bitter_teacher_2`

- 캐릭터: `teacher_sad.png`
**{name}**: *졸업 후 다시 찾은 복도. 담임의 손에는 원고 봉투가 없다.*

---

### `co_bitter_teacher_2`
- 배경: `school_hallway.png`
- 배경톤: `empty`
- 다음: `co_bitter_teacher_3`

- 캐릭터: `teacher_sad.png`
**담임선생님**: 그날 네 화면, 아직도 생각나. 합평 얘기는 이제 그만하자.

---

### `co_bitter_teacher_3`
- 배경: `ending_bittersweet_teacher.png`
- 다음: `hidden_bitter_homeroom_ending_title`

- 캐릭터: `없음`
**{name}**: *담임은 출석부 대신 서류 뭉치를 안고 먼저 교무실 쪽으로 향한다.*

---

### `co_bitter_nurse_1`
- 배경: `nurse_room.png`
- 다음: `co_bitter_nurse_2`

- 캐릭터: `nurse_worried.png`
**{name}**: *보건실 문은 열려 있는데 안에는 아무도 없다.*

---

### `co_bitter_nurse_2`
- 배경: `nurse_room.png`
- 다음: `co_bitter_nurse_3`

- 캐릭터: `nurse_worried.png`
**보건선생님**: 차트는 넘겼어. 그날 일은 적지 않았고.

---

### `co_bitter_nurse_3`
- 배경: `ending_bittersweet_nurse.png`
- 다음: `hidden_bitter_nurse_ending_title`

- 캐릭터: `없음`
**{name}**: *안내 카드가 놓였던 창가에는 빈 컵만 남아 있다. 보건선생님은 복도 끝까지 걸어가서도 흔들던 손을 내리지 않는다.*

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
  - [50+] → `day5_ending_good`
- 다음: `day5_ending_confess_fail`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `ending_confessed_aff_yuna`
- 배경: `yuna_hideout.png`
- 호감분기: Yuna
  - [50+] → `day5_ending_good`
- 다음: `day5_ending_confess_fail`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `ending_confessed_aff_dain`
- 배경: `gym.png`
- 호감분기: Dain
  - [50+] → `day5_ending_good`
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
**유나**: *둘은 공원 출구까지 나란히 걷지만 손은 닿지 않는다. 유나는 앞을 본 채 말한다.* 미안. 나는 그 마음을 받아줄 수 없어.

---

### `confess_fail_cg_dain`
- 배경: `ending_confess_fail_dain.png`
- 다음: `confess_fail_1`

- 캐릭터: `없음`
**다인**: *눈가를 훔치고 웃어 보이려 하지만 목소리는 분명하다.* 미안. 나는 친구로 남고 싶어.

---

### `confess_fail_1`
- 배경: `ending_bittersweet.png`
- 다음: `confess_fail_2`

- 캐릭터: `없음`
**{name}**: *며칠 뒤, 비 오는 학교 정문. 우산 아래서 멀어지는 뒷모습을 보지만 이름을 부르거나 따라가지 않는다.*

---

### `confess_fail_2`
- 배경: `ending_bittersweet.png`
- 다음: `confess_fail_3`

- 캐릭터: `없음`
**{name}**: *그 자리에 선 채 대화방을 연다. 썼다 지운 끝에 한 문장만 남긴다.*

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
**시스템**: ─── CONFESSION REJECTED END ───

---

### `day5_ending_friend`
- 배경: `park.png`
- BGM: `night2.mp3`
- 다음: `friend_1`

- 캐릭터: `없음`
**{name}**: *고백 대신 고맙다는 말을 쓰기로 한다. 입력창에 첫 문자를 남긴 채 화면을 닫지 않는다.*

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
**{name}**: *보낸 메시지 옆에 읽음 표시가 붙는다. 입력창은 비어 있다.*

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
**{name}**: *사진 파일명은 '졸업식_친구들'. 단체 대화방에도 같은 사진이 올라온다.*

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
**다인**: *입꼬리를 올리지만 눈은 마주치지 않는다.* "잘 지내."

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
**{name}**: *봄비가 지난 교문 바닥에 벚꽃잎이 눌어붙어 있다. 나란히 걷던 자리는 비어 있다.*

---

### `mayhem_6`
- 배경: `ending_mayhem.png`
- 다음: `mayhem_7`

- 캐릭터: `없음`
**{name}**: *대화방마다 읽지 않은 질문이 쌓여 있다.*

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
**{name}**: *대답 대신 세 사람의 이름을 차례로 부른다. 웃음소리가 끊기고 테이블 위 휴대폰 세 대가 그대로 놓여 있다.*

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
**유나**: 난 시간을 갖고 싶어.

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
- 배경: `park.png`
- 다음: `harem_7`

- 캐릭터: `없음`
**{name}**: *세 사람은 각자 다른 방향으로 걸어가고 {name}은 그 자리에 남는다.*

---

### `harem_7`
- 배경: `room_my.png`
- 다음: `harem_8`

- 캐릭터: `없음`
**{name}**: *다음 주 캘린더는 비어 있다. 세 사람의 대화방을 음소거하고 빈칸을 그대로 둔다.*

---

### `harem_8`
- 배경: `room_my.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── UNRESOLVED END ───

---

### `hidden_dual_route_1`
- 배경: `park.png`
- 다음: `hidden_dual_route_choice`

- 캐릭터: `없음`
**{name}**: *행사 정리를 마치며 문예부 합평본과 응급처치 카드를 가방에 넣는다.*

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
  - [100+] → `hidden_perfect_homeroom_1`
  - [60+] → `hidden_true_homeroom_1`
  - [40+] → `hidden_good_homeroom_1`
  - [기본] → `hidden_bitter_homeroom_1`
- 다음: `hidden_bitter_homeroom_1`

<!-- i18n -->

---

### `hidden_perfect_homeroom_1`
- 배경: `room_school.png`
- 배경톤: `empty`
- BGM: `ending.mp3`
- 플래그: `ending_perfect`
- 다음: `hidden_perfect_homeroom_1b`

- 캐릭터: `없음`
**{name}**: *졸업식 날. 담임은 추천서 사본과 독서 기록을 건넸다.*

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
**{name}**: *그날 교실 문이 닫힌 뒤, 둘은 개인적으로 연락하지 않았다. 4년이 지나 {name}은 대학을 마치고 첫 직장 근처에서 혼자 살고 있었다.*

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
**담임선생님**: 정말 우연이네. *행사 자료를 내려놓는다.* 시간 괜찮으면 앉을래?

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
**담임선생님**: *다음 만남, 카페. 커피를 한 번 젓고 손을 뗀다.* 어땠어?

---

### `hidden_perfect_homeroom_4e`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_4f`

- 캐릭터: `teacher_normal.png`
**{name}**: *세 번째 만남. 퇴근 후 벚꽃이 내려다보이는 카페 테라스에 담임이 작은 꽃다발을 들고 먼저 와 있다.*

---

### `hidden_perfect_homeroom_4f`
- 배경: `ending_perfect_teacher.png`
- 다음: `hidden_perfect_homeroom_4g`

- 캐릭터: `없음`
**{name}**: *담임이 꽃다발을 테이블 가운데 놓고 포장 리본을 정리한다.*

---

### `hidden_perfect_homeroom_4g`
- 배경: `ending_perfect_teacher.png`
- 플래그: `isDating_Teacher`
- 다음: `hidden_perfect_homeroom_ending_title`

- 캐릭터: `없음`
**담임선생님**: 출간 축하 선물이야. 그리고 다음에도 보고 싶다는 뜻으로 받아줘도 될까?

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
**{name}**: *카페 문 옆에 둘이 나란히 선다. 담임은 꽃다발을 든 채 먼저 걷지 않고 대답을 기다린다.*

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
- 다음: `date_choice_perfect_teacher`

- 캐릭터: `없음`
**{name}**: *두 번째 책이 출간됐다. 헌정사에는 특정한 이름 대신 '끝까지 읽고 자기 말로 답해준 독자들에게'라고 적혀 있다.*

---

### `date_choice_perfect_teacher`
- 배경: `cafe.png`
- 선택지:
  1. "카페." → `date_perfect_teacher_cafe_1`
  2. "전시." → `date_perfect_teacher_museum_1`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *두 번째 책이 나온 뒤 첫 주말, 카페에서 담임이 메뉴판을 덮는다.* 직함 떼고 걸을 만한 곳이 있어. 어디가 좋아?

---

### `date_perfect_teacher_cafe_1`
- 배경: `cafe.png`
- 다음: `date_perfect_teacher_cafe_2`

- 캐릭터: `teacher_smile.png`
**{name}**: *담임은 창밖을 보며 컵을 천천히 돌린다. 둘 사이에는 교탁이 없다.*

---

### `date_perfect_teacher_cafe_2`
- 배경: `cafe.png`
- 다음: `date_perfect_teacher_cafe_3`

- 캐릭터: `teacher_smile.png`
**담임선생님**: 다음 주에도 볼지 네가 정해. 난 시간 비워 뒀어.

---

### `date_perfect_teacher_cafe_3`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_ep4`

- 캐릭터: `teacher_smile.png`
**{name}**: *영수증 아래 적힌 다음 약속에는 장소만 있고 시간은 비어 있다.*

---

### `date_perfect_teacher_museum_1`
- 배경: `museum.png`
- 다음: `date_perfect_teacher_museum_2`

- 캐릭터: `teacher_smile.png`
**{name}**: *담임은 설명문을 읽지 않고 나란히 걷는 사람과 보폭을 맞춘다.*

---

### `date_perfect_teacher_museum_2`
- 배경: `museum.png`
- 다음: `date_perfect_teacher_museum_3`

- 캐릭터: `teacher_smile.png`
**담임선생님**: 설명은 네가 읽어. 나는 옆에 있을 테니까.

---

### `date_perfect_teacher_museum_3`
- 배경: `museum.png`
- 다음: `hidden_perfect_homeroom_ep4`

- 캐릭터: `teacher_smile.png`
**{name}**: *출구 앞에서 담임이 말없이 가방 끈을 고쳐 준다.*

---

### `hidden_perfect_homeroom_ep4`
- 배경: `ending_perfect_teacher.png`
- 다음: `day5_teacher_ending_freetalk_intro`

- 캐릭터: `없음`
**{name}**: *공유 달력에는 서로의 근무일과 다음 주말 약속만 적혀 있다. 학교에서 쓰던 호칭은 네 해 전 졸업사진 설명에만 남아 있다.*

---

### `hidden_true_homeroom_1`
- 배경: `bookstore.png`
- BGM: `ending.mp3`
- 플래그: `ending_true_love`
- 다음: `hidden_true_homeroom_2`

- 캐릭터: `없음`
**{name}**: *졸업 후 4년. 그동안 둘은 개인적으로 연락한 적이 없다. 학교를 떠나 대학을 마치고 혼자 생활비를 버는 중인 {name}은 퇴근길 독립서점에서 익숙한 이름의 북토크 포스터를 본다.*

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
**담임선생님**: *회사 출입증의 이름과 사진을 차례로 확인한다.* 진짜 네 생활을 꾸리고 있네.

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
- 다음: `date_choice_true_teacher`

- 캐릭터: `없음`
**담임선생님**: *케이크 접시 너머로 손바닥을 펴 보인다. 닿기 전 멈춘 채 {name}의 대답을 기다린다.* 다음 주에도 만날래?

---

### `date_choice_true_teacher`
- 배경: `cafe.png`
- 선택지:
  1. "테이블." → `date_true_teacher_1`
  2. "전시." → `date_true_teacher_alt_1`

- 캐릭터: `teacher_smile.png`
**담임선생님**: 수업은 끝났어. 이제 어디로 갈까?

---

### `date_true_teacher_1`
- 배경: `cafe.png`
- 다음: `date_true_teacher_2`

- 캐릭터: `teacher_smile.png`
**담임선생님**: 다음 주 약속은 네가 정해. 이번엔 나도 먼저 거절하진 않을게.

---

### `date_true_teacher_2`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_ending_title`

- 캐릭터: `teacher_smile.png`
**{name}**: *커피가 식어 가는데도 담임은 시계를 보지 않는다.*

---

### `date_true_teacher_alt_1`
- 배경: `museum.png`
- 다음: `date_true_teacher_alt_2`

- 캐릭터: `teacher_smile.png`
**담임선생님**: 설명은 됐어. 그냥 옆에서 같이 봐.

---

### `date_true_teacher_alt_2`
- 배경: `museum.png`
- 다음: `hidden_true_homeroom_ending_title`

- 캐릭터: `teacher_smile.png`
**{name}**: *출구 조명 아래에서 담임이 말없이 가방 끈을 고쳐 준다.*

---

### `hidden_true_homeroom_ending_title`
- 배경: `ending_true_teacher.png`
- 다음: `day5_teacher_ending_freetalk_intro`

- 캐릭터: `없음`
**—**: ─── 담임선생님 TRUE LOVE END ───

---

### `hidden_good_homeroom_1`
- 배경: `room_school.png`
- BGM: `night2.mp3`
- 다음: `hidden_good_homeroom_2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *졸업식이 끝난 뒤, 빈 교실에서 추천서 사본과 문예부 합평본을 정리하다 {name}을 부른다.* 이건 네 기록이야. 빠진 건 없는지 확인해.

---

### `hidden_good_homeroom_2`
- 배경: `room_school.png`
- 다음: `hidden_good_homeroom_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *봉투를 받아 들고 함께 복도로 나온다. 마지막 학생들이 계단을 내려가고 담임은 남은 원고와 서류를 품에 안는다.*

---

### `hidden_good_homeroom_3`
- 배경: `room_school.png`
- 다음: `hidden_good_homeroom_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 네 글은 네가 계속 써. 내 원고는 내가 끝낼게. 서로 맡은 일부터 하자.

---

### `hidden_good_homeroom_4`
- 배경: `ending_good_teacher.png`
- 다음: `hidden_good_homeroom_ending_title`

- 캐릭터: `없음`
**{name}**: *인사를 마치고 복도 끝까지 걷다 돌아본다. 담임은 창가에 서서 졸업생들을 배웅하고 있다. {name}도 가볍게 고개를 숙인 뒤 학교를 나선다.*

---

### `hidden_good_homeroom_ending_title`
- 배경: `ending_good_teacher.png`
- 다음: `day5_teacher_ending_freetalk_intro`

- 캐릭터: `없음`
**—**: ─── 담임선생님 GOOD END ───

---

### `hidden_bitter_homeroom_1`
- 배경: `room_school.png`
- 배경톤: `empty`
- BGM: `night2.mp3`
- 플래그: `ending_bittersweet`
- 다음: `hidden_bitter_homeroom_2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *졸업식이 끝난 뒤, 빈 교실에서 {name}이 건넨 편지를 읽다가 책상 위에 조심스레 내려놓는다.* 이건 내가 받아 둘 수 없어.

---

### `hidden_bitter_homeroom_2`
- 배경: `room_school.png`
- 다음: `hidden_bitter_homeroom_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *편지 모서리가 반듯하게 펴진 채 다시 돌아온다.*

---

### `hidden_bitter_homeroom_3`
- 배경: `room_school.png`
- 다음: `hidden_bitter_homeroom_4`

- 캐릭터: `teacher_sad.png`
**담임선생님**: 네 글을 믿었고 학생으로서 아낀 건 맞아. 하지만 네가 바라는 답으로 돌려주면 안 돼.

---

### `hidden_bitter_homeroom_4`
- 배경: `room_school.png`
- 다음: `hidden_bitter_homeroom_5`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임은 추천서 봉투 위에 편지를 올려 돌려준다. 교실 문은 복도를 향해 열려 있다.*

---

### `hidden_bitter_homeroom_5`
- 배경: `room_school.png`
- 다음: `hidden_bitter_homeroom_6`

- 캐릭터: `teacher_sad.png`
**담임선생님**: 졸업을 축하해. 앞으로 네가 쓸 글은 궁금해도, 그 옆자리를 약속할 수는 없어.

---

### `hidden_bitter_homeroom_6`
- 배경: `ending_bittersweet_teacher.png`
- 다음: `hidden_bitter_homeroom_ending_title`

- 캐릭터: `없음`
**{name}**: *편지와 추천서를 함께 챙겨 교실을 나선다. 돌아보지 않았고 뒤에서도 이름을 부르는 소리는 들리지 않는다.*

---

### `hidden_bitter_homeroom_ending_title`
- 배경: `ending_bittersweet_teacher.png`
- 다음: `day5_teacher_ending_freetalk_intro`

- 캐릭터: `없음`
**—**: ─── 담임선생님 BITTERSWEET END ───

---

### `day5_teacher_ending_freetalk_intro`
- 배경: `cafe.png`
- 다음: `day5_teacher_ending_freetalk_router`

- 캐릭터: `teacher_smile.png`
**{name}**: *카페 테이블 위에는 완성된 원고와 커피 두 잔이 놓여 있다.*

---

### `day5_teacher_ending_freetalk_router`
- 배경: `cafe.png`
- 분기:
  - [`ending_perfect`] → `day5_teacher_ending_freetalk_perfect`
  - [`ending_true_love`] → `day5_teacher_ending_freetalk_true_love`
  - [`ending_bittersweet`] → `day5_teacher_ending_freetalk_bittersweet`
  - [기본] → `day5_teacher_ending_freetalk_good`

- 캐릭터: `없음`
**{name}**: ‹빈›

---

### `day5_teacher_ending_freetalk_perfect`
- 배경: `cafe.png`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "담임선생님 PERFECT END 이후의 보너스 대화다. 졸업 뒤 4년간 개인 연락 없이 지낸 두 성인이 우연히 재회했고 여러 번의 만남과 고백을 거쳐 동등한 연인이 됐다. 서로의 근무일과 주말 약속을 공유한다. 과거 교사와 미성년 학생 시점의 연애로 되돌아가지 않는다."
- 성격: "그녀는 책임감 있고 사려 깊은 작가이자 현재의 동등한 연인이다. 옛 호칭을 억지로 지우지 않되 권위적으로 대하지 않고 오래 다듬은 관계의 따뜻함과 솔직한 애정을 보여 준다."

- 캐릭터: `teacher_smile.png`
**담임선생님**: *공유 달력의 다음 주말을 열어 두고 완성된 책을 덮는다.* 이번 약속은 네가 정할 차례네. 어디서 만날까?

---

### `day5_teacher_ending_freetalk_true_love`
- 배경: `bookstore.png`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "담임선생님 TRUE LOVE END 직후의 보너스 대화다. 졸업 뒤 4년 동안 개인 연락이 없었고 독립해 일하는 성인이 된 주인공과 작가가 된 전 담임이 북토크에서 재회했다. 둘은 이름과 연락처를 새로 배우고 다음 만남을 약속한 시작 단계다. 이미 오래 사귄 연인처럼 앞당기지 않는다."
- 성격: "그녀는 과거의 권력관계를 분명히 끝내고 현재의 성인인 상대를 신중하게 알아간다. 호감은 솔직히 표현하지만 선택권을 확인하고 새 관계 특유의 조심스러움과 설렘을 유지한다."

- 캐릭터: `teacher_smile.png`
**담임선생님**: *북토크가 끝난 서점에서 연락처 화면을 열어 보인다.* 예전 학생 말고 지금의 너부터, 천천히 다시 알아갈까?

---

### `day5_teacher_ending_freetalk_good`
- 배경: `room_school.png`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "담임선생님 GOOD END의 졸업식 직후 보너스 대화다. 담임은 추천서와 문예부 기록을 건네고 각자 맡은 글과 삶을 이어 가기로 한 교사와 졸업생의 작별이다. 성인 재회나 연애는 발생하지 않았으며 이 대화에서도 미성년 학생과 교사의 로맨스를 만들지 않는다."
- 성격: "담임은 교사로서 따뜻하고 책임감 있게 졸업생을 배웅한다. 개인적 미련이나 유혹 대신 진로와 글, 학교생활에 관한 마지막 말을 진지하게 듣고 명확한 경계를 지킨다."

- 캐릭터: `teacher_normal.png`
**담임선생님**: *졸업생의 기록이 든 봉투를 건네고 교실 문을 열어 둔다.* 네 글은 네가 계속 써. 마지막으로 궁금한 건 있니?

---

### `day5_teacher_ending_freetalk_bittersweet`
- 배경: `room_school.png`
- 배경톤: `empty`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "담임선생님 BITTERSWEET END의 졸업식 직후 보너스 대화다. 주인공은 원고 상담과 관심을 개인적인 호감으로 받아들여 편지로 마음을 전했지만 담임은 편지를 돌려주고 교사와 학생의 경계를 분명히 했다. 성인 재회나 연애는 없으며 이 대화에서도 거절을 번복하거나 비밀 관계를 만들지 않는다."
- 성격: "담임은 미안함 때문에 여지를 주지 않는다. 학생의 감정을 비웃지 않고 차분히 듣되 글을 향한 격려와 개인적인 약속을 분리해 단호하고 책임감 있게 작별한다."

- 캐릭터: `teacher_sad.png`
**담임선생님**: *책상 위에 돌려놓은 편지에서 손을 떼고 열린 교실 문을 바라본다.* 마지막 인사는 들을게. 다만 네가 기대한 답을 줄 수는 없어.

---

### `hidden_perfect_nurse_check`
- 배경: `nurse_room.png`
- 호감분기: Nurse
  - [100+] → `hidden_perfect_nurse_1`
  - [60+] → `hidden_true_nurse_1`
  - [40+] → `hidden_good_nurse_1`
  - [기본] → `hidden_bitter_nurse_1`
- 다음: `hidden_bitter_nurse_1`

<!-- i18n -->

---

### `hidden_perfect_nurse_1`
- 배경: `street.png`
- BGM: `ending.mp3`
- 플래그: `ending_perfect`
- 다음: `hidden_perfect_nurse_2`

- 캐릭터: `없음`
**{name}**: *졸업 후 5년. 타지에서 직장을 잡고 혼자 산 지 2년째. 주말 지역 건강행사에서 응급처치 강사 명찰의 익숙한 이름을 본다. 이주원.*

---

### `hidden_perfect_nurse_2`
- 배경: `street.png`
- 다음: `hidden_perfect_nurse_3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *행사를 마치고 가운 위 명찰을 뗀다.* {name}? 여기서 볼 줄은 몰랐네.

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
- 배경: `cafe.png`
- 다음: `hidden_perfect_nurse_5`

- 캐릭터: `없음`
**{name}**: 괜찮아요. 저도 오늘은 학교 얘기 말고 선생님 얘기 듣고 싶어요.

---

### `hidden_perfect_nurse_5`
- 배경: `cafe.png`
- 다음: `hidden_perfect_nurse_5b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그럼 다음 만남은 진료도 상담도 아닌 걸로 잡을까?

---

### `hidden_perfect_nurse_5b`
- 배경: `cafe.png`
- 플래그: `isDating_Nurse`
- 다음: `hidden_perfect_nurse_ep1`

- 캐릭터: `없음`
**{name}**: *달력을 번갈아 보다가 둘 다 비는 토요일을 찾는다.*

---

### `hidden_perfect_nurse_ep1`
- 배경: `ending_perfect_nurse.png`
- 다음: `hidden_perfect_nurse_ending_title`

- 캐릭터: `없음`
**{name}**: *몇 달 뒤. 몇 번의 주말을 함께 보낸 끝에 처음으로 같은 아침을 맞는다. 주원이 이불 아래로 손을 내밀고 손가락을 느슨하게 편 채 기다린다.*

---

### `hidden_perfect_nurse_ending_title`
- 배경: `ending_perfect_nurse.png`
- 다음: `hidden_perfect_nurse_ep2`

- 캐릭터: `없음`
**—**: ─── 보건선생님 PERFECT END ───

---

### `hidden_perfect_nurse_ep2`
- 배경: `nurse_house.png`
- 다음: `hidden_perfect_nurse_ep3`

- 캐릭터: `없음`
**{name}**: *주원의 집에서 맞은 그날 아침 이후, 공유 달력의 주말 칸이 하나씩 채워졌다. 그 사이 주원은 대학병원 교육팀으로 옮겼고 신규 간호사들도 주원을 선생님이라 불렀다. 이주원 선생님.*

---

### `hidden_perfect_nurse_ep3`
- 배경: `nurse_house.png`
- 다음: `date_choice_perfect_nurse`

- 캐릭터: `없음`
**{name}**: *로즈마리 화분은 둘이 고른 집 창가에 놓였다. 물 주는 날은 번갈아 맡는다.*

---

### `date_choice_perfect_nurse`
- 배경: `nurse_house.png`
- 선택지:
  1. "집." → `date_perfect_nurse_home_1`
  2. "공원." → `date_perfect_nurse_park_1`

- 캐릭터: `nurse_smile.png`
**보건선생님**: 기록에 안 남길 시간이 생겼네. 집이 좋아, 밖이 좋아?

---

### `date_perfect_nurse_home_1`
- 배경: `nurse_house.png`
- 다음: `date_perfect_nurse_home_2`

- 캐릭터: `nurse_smile.png`
**{name}**: *주말 오전, 가운은 벽에 걸려 있고 탁자에는 물컵 두 개만 놓여 있다.*

---

### `date_perfect_nurse_home_2`
- 배경: `nurse_house.png`
- 다음: `date_perfect_nurse_home_3`

- 캐릭터: `nurse_smile.png`
**보건선생님**: 오늘은 차트 안 볼 거야. 그냥 앉아.

---

### `date_perfect_nurse_home_3`
- 배경: `nurse_house.png`
- 다음: `hidden_perfect_nurse_ep4`

- 캐릭터: `nurse_smile.png`
**{name}**: *조금 열린 창문으로 바람이 들고 시계 초침 소리만 방 안에 남는다.*

---

### `date_perfect_nurse_park_1`
- 배경: `park.png`
- 다음: `date_perfect_nurse_park_2`

- 캐릭터: `nurse_smile.png`
**{name}**: *병원 쪽 길은 피해 왔다. 보건선생님이 벤치에 먼저 앉는다.*

---

### `date_perfect_nurse_park_2`
- 배경: `park.png`
- 다음: `date_perfect_nurse_park_3`

- 캐릭터: `nurse_smile.png`
**보건선생님**: 농담은 집에 두고 왔어. 지금은 그냥 이대로 있자.

---

### `date_perfect_nurse_park_3`
- 배경: `park.png`
- 다음: `hidden_perfect_nurse_ep4`

- 캐릭터: `nurse_smile.png`
**{name}**: *보건선생님이 어깨에 기대 온 뒤 한동안 움직이지 않는다.*

---

### `hidden_perfect_nurse_ep4`
- 배경: `nurse_house.png`
- 다음: `day5_nurse_ending_freetalk_intro`

- 캐릭터: `없음`
**{name}**: *연두색 노트 마지막 장에는 한 줄이 남아 있다. '오래 걸렸지만 이제 내 선택으로 다시 시작할게.'*

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
**{name}**: *테이블 위에 서로 다른 회사 출입증이 놓인다. 한쪽에는 야근 승인 알림이, 다른 쪽에는 건강행사 종료 보고가 떠 있다.*

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
**보건선생님**: *커피잔 손잡이를 손가락으로 두 번 두드린다.* 응. 밴드는 3분 안에 붙여야 하고.

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
- 배경: `street.png`
- 다음: `hidden_true_nurse_8_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 다음엔 건강 행사 말고 그냥 만나자.

---

### `hidden_true_nurse_8_b`
- 배경: `nurse_house.png`
- 다음: `hidden_true_nurse_8_c`

- 캐릭터: `없음`
**{name}**: *세 달 동안 둘은 주말마다 다른 카페에서 만났다. 그날은 처음으로 주원의 집에 초대받았다.*

---

### `hidden_true_nurse_8_c`
- 배경: `nurse_house.png`
- 다음: `hidden_true_nurse_8_d`

- 캐릭터: `없음`
**{name}**: *영화를 고르다 소파에 나란히 앉는다. 창밖은 어둡고 테이블 위 커피 두 잔이 천천히 식는다.*

---

### `hidden_true_nurse_8_d`
- 배경: `nurse_house.png`
- 다음: `hidden_true_nurse_8_e`

- 캐릭터: `없음`
**{name}**: *학교 얘기는 길지 않았다. 요즘 일과 다음 주말 얘기가 더 많았다.*

---

### `hidden_true_nurse_8_e`
- 배경: `nurse_house.png`
- 다음: `hidden_true_nurse_8_f`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그때 학교를 떠날까 고민한 적은 있어.

---

### `hidden_true_nurse_8_f`
- 배경: `nurse_house.png`
- 다음: `hidden_true_nurse_8_g`

- 캐릭터: `없음`
**{name}**: 결국 남은 건 선생님 선택이었죠?

---

### `hidden_true_nurse_8_g`
- 배경: `nurse_house.png`
- 다음: `hidden_true_nurse_8_h`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 응. 누가 붙잡아서가 아니라 내가 정한 거야. 지금 여기에 온 것도 그렇고.

---

### `hidden_true_nurse_8_h`
- 배경: `ending_true_nurse.png`
- 다음: `date_choice_true_nurse`

- 캐릭터: `없음`
**{name}**: 그럼 다음 주에도 올게요. 그것도 제가 정한 거예요. *영화가 끝나기 전, 주원은 {name}의 어깨에 기대 잠든다.*

---

### `date_choice_true_nurse`
- 배경: `nurse_house.png`
- 선택지:
  1. "집." → `date_true_nurse_1`
  2. "벤치." → `date_true_nurse_alt_1`

- 캐릭터: `nurse_smile.png`
**보건선생님**: 차트는 두고 왔어. 어디 갈래?

---

### `date_true_nurse_1`
- 배경: `nurse_house.png`
- 다음: `date_true_nurse_2`

- 캐릭터: `nurse_smile.png`
**보건선생님**: 물 따라 줄게. 약은 안 탔어.

---

### `date_true_nurse_2`
- 배경: `nurse_house.png`
- 다음: `hidden_true_nurse_ending_title`

- 캐릭터: `nurse_smile.png`
**{name}**: *싱크대에서 물 받는 소리가 잠깐 났다가 멎는다.*

---

### `date_true_nurse_alt_1`
- 배경: `park.png`
- 다음: `date_true_nurse_alt_2`

- 캐릭터: `nurse_smile.png`
**보건선생님**: 오늘은 병원 쪽 말고 다른 길로 가자.

---

### `date_true_nurse_alt_2`
- 배경: `park.png`
- 다음: `hidden_true_nurse_ending_title`

- 캐릭터: `nurse_smile.png`
**{name}**: *벤치의 벗겨진 페인트 자국 위에 손이 닿고 그대로 멈춘다.*

---

### `hidden_true_nurse_ending_title`
- 배경: `ending_true_nurse.png`
- 다음: `day5_nurse_ending_freetalk_intro`

- 캐릭터: `없음`
**—**: ─── 보건선생님 TRUE LOVE END ───

---

### `hidden_good_nurse_1`
- 배경: `nurse_room.png`
- BGM: `night2.mp3`
- 다음: `hidden_good_nurse_2`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *졸업식이 끝난 뒤, 마지막으로 보건실 문을 연다. 주원은 창가에서 커피를 마시다 {name}을 보고 잔을 내려놓는다.* 웬일이야. 오늘은 아픈 데 없을 텐데.

---

### `hidden_good_nurse_2`
- 배경: `nurse_room.png`
- 다음: `hidden_good_nurse_2_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 졸업 인사하러 왔으면 앉아. 진료는 오늘부로 끝이니까.

---

### `hidden_good_nurse_2_b`
- 배경: `nurse_room.png`
- 다음: `hidden_good_nurse_2_c`

- 캐릭터: `nurse_normal.png`
**{name}**: 그동안 감사했어요.

---

### `hidden_good_nurse_2_c`
- 배경: `nurse_room.png`
- 다음: `hidden_good_nurse_2_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *잠깐 말을 고른 뒤 고개를 끄덕인다.* 그래. 다치면 참지 말고 병원부터 가. 이제는 내가 확인해 줄 수 없으니까.

---

### `hidden_good_nurse_2_d`
- 배경: `nurse_room.png`
- 다음: `hidden_good_nurse_3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *책상 서랍에서 연두색 노트를 꺼내 마지막 페이지를 펼친다.*

---

### `hidden_good_nurse_3`
- 배경: `nurse_room.png`
- 다음: `hidden_good_nurse_3_b`

- 캐릭터: `nurse_normal.png`
**{name}**: *주원은 날짜와 '졸업, 이상 없음'을 적고 노트를 덮는다. 이번에는 밴드도 연락처도 건네지 않는다.*

---

### `hidden_good_nurse_3_b`
- 배경: `nurse_room.png`
- 다음: `hidden_good_nurse_4`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 잘 가. 다음에 마주치면 환자 말고 졸업생으로 인사해.

---

### `hidden_good_nurse_4`
- 배경: `ending_good_nurse.png`
- 다음: `hidden_good_nurse_ending_title`

- 캐릭터: `없음`
**{name}**: *보건실 문을 나서기 전 돌아본다. 주원은 커피잔을 든 채 창가에 앉아 있다. 둘은 가볍게 고개를 마주 숙인다.*

---

### `hidden_good_nurse_ending_title`
- 배경: `ending_good_nurse.png`
- 다음: `day5_nurse_ending_freetalk_intro`

- 캐릭터: `없음`
**—**: ─── 보건선생님 GOOD END ───

---

### `hidden_bitter_nurse_1`
- 배경: `nurse_room.png`
- BGM: `night2.mp3`
- 플래그: `ending_bittersweet`
- 다음: `hidden_bitter_nurse_2`

- 캐릭터: `nurse_normal.png`
**{name}**: *졸업식이 끝난 뒤, 마지막으로 보건실에 들러 연두색 기록 카드 밑에 연락처를 적은 쪽지를 끼워 건넨다.*

---

### `hidden_bitter_nurse_2`
- 배경: `nurse_room.png`
- 다음: `hidden_bitter_nurse_3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *주원은 쪽지를 읽고 한동안 말이 없다. 이내 접힌 자국을 따라 반듯하게 접어 돌려준다.* 이건 받으면 안 되겠다.

---

### `hidden_bitter_nurse_3`
- 배경: `nurse_room.png`
- 다음: `hidden_bitter_nurse_4`

- 캐릭터: `nurse_normal.png`
**{name}**: 제가 자주 온 게 귀찮으셨어요?

---

### `hidden_bitter_nurse_4`
- 배경: `nurse_room.png`
- 다음: `hidden_bitter_nurse_5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 귀찮은 적은 없었어. 그래서 더 헷갈리게 보내면 안 돼. 내가 챙긴 건 네가 학생이었고 아픈 데가 있었기 때문이야.

---

### `hidden_bitter_nurse_5`
- 배경: `nurse_room.png`
- 다음: `hidden_bitter_nurse_6`

- 캐릭터: `nurse_normal.png`
**{name}**: *주원은 연두색 기록 카드 마지막 줄에 ‘졸업, 상담 종료’라고 적는다. 연락처가 적힌 쪽지는 그 위에 놓인다.*

---

### `hidden_bitter_nurse_6`
- 배경: `nurse_room.png`
- 다음: `hidden_bitter_nurse_7`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 이제 여기 오지 않아도 되는 게 제일 좋은 결말이야. 잘 지내.

---

### `hidden_bitter_nurse_7`
- 배경: `ending_bittersweet_nurse.png`
- 다음: `hidden_bitter_nurse_ending_title`

- 캐릭터: `없음`
**{name}**: *쪽지와 카드를 챙겨 보건실 문을 닫는다. 안에서는 다시 커피잔이 받침에 놓이는 소리만 난다.*

---

### `hidden_bitter_nurse_ending_title`
- 배경: `ending_bittersweet_nurse.png`
- 다음: `day5_nurse_ending_freetalk_intro`

- 캐릭터: `없음`
**—**: ─── 보건선생님 BITTERSWEET END ───

---

### `day5_nurse_ending_freetalk_intro`
- 배경: `nurse_house.png`
- 다음: `day5_nurse_ending_freetalk_router`

- 캐릭터: `nurse_normal.png`
**{name}**: *집에서 정리를 마친 그녀가 맞은편 자리를 비워 둔다.*

---

### `day5_nurse_ending_freetalk_router`
- 배경: `nurse_house.png`
- 분기:
  - [`ending_perfect`] → `day5_nurse_ending_freetalk_perfect`
  - [`ending_true_love`] → `day5_nurse_ending_freetalk_true_love`
  - [`ending_bittersweet`] → `day5_nurse_ending_freetalk_bittersweet`
  - [기본] → `day5_nurse_ending_freetalk_good`

- 캐릭터: `없음`
**{name}**: ‹빈›

---

### `day5_nurse_ending_freetalk_perfect`
- 배경: `nurse_house.png`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "보건선생님 PERFECT END 이후의 보너스 대화다. 졸업 뒤 5년이 지나 독립한 두 성인이 지역 건강행사에서 재회했고 여러 번의 데이트와 함께한 아침을 거쳐 동등한 연인이 됐다. 현재는 공유 달력과 함께 고른 집, 로즈마리 화분이 있다. 과거 보건교사와 미성년 학생의 연애로 되돌아가지 않는다."
- 성격: "주원은 현실적이고 다정한 현재의 연인으로, 돌봄을 통제나 진단으로 바꾸지 않는다. 서로의 생활과 선택을 존중하며 편안한 유머, 익숙한 애정, 필요한 확인을 자연스럽게 나눈다."

- 캐릭터: `nurse_normal.png`
**보건선생님**: *둘이 고른 집 창가의 로즈마리에 물을 주고 맞은편 자리를 비운다.* 오늘 상태는 이상 없음. 이제 우리 얘기 할까?

---

### `day5_nurse_ending_freetalk_true_love`
- 배경: `cafe.png`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "보건선생님 TRUE LOVE END 직후의 보너스 대화다. 졸업 뒤 4년간 개인 연락이 없었고 독립해 일하는 두 성인이 건강 캠페인에서 재회했다. 세 달간 주말마다 만나고 주원의 집에서 함께 영화를 본 뒤 관계를 시작하는 단계다. 동거나 장기 연애로 앞당기지 않는다."
- 성격: "주원은 과거의 전문적 경계를 분명히 인정하고 현재의 동등한 성인에게 조심스럽게 다가간다. 상대의 선택을 확인하면서도 호감과 다음 약속은 솔직히 말하고 모든 대화를 건강 상담처럼 다루지 않는다."

- 캐릭터: `nurse_normal.png`
**보건선생님**: *건강행사 밴드를 가방에 넣고 다음 주말 일정표를 보여 준다.* 이번엔 상담도 치료도 아니야. 그냥 만나서 무슨 얘기 할까?

---

### `day5_nurse_ending_freetalk_good`
- 배경: `nurse_room.png`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "보건선생님 GOOD END의 졸업식 직후 보너스 대화다. 주원은 마지막 보건실 방문을 공식적으로 마치고 연락처나 밴드를 건네지 않은 채 교사와 졸업생으로 작별한다. 성인 재회나 연애는 발생하지 않았으며 이 대화에서도 미성년 학생과 보건교사의 로맨스를 만들지 않는다."
- 성격: "주원은 현실적이고 다정한 보건교사로서 마지막 인사를 듣되 전문적 경계를 선명하게 지킨다. 건강과 앞으로의 생활을 챙겨 주면서도 의존이나 비밀 관계를 만들지 않고 졸업생의 자립을 응원한다."

- 캐릭터: `nurse_normal.png`
**보건선생님**: *연두색 노트에 '졸업, 이상 없음'을 적고 덮는다.* 오늘부로 진료는 끝. 졸업 인사는 천천히 듣고 보내 줄게.

---

### `day5_nurse_ending_freetalk_bittersweet`
- 배경: `nurse_room.png`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "보건선생님 BITTERSWEET END의 졸업식 직후 보너스 대화다. 주인공은 보건실에서 받은 돌봄을 개인적인 호감으로 받아들여 연락처를 건넸지만 주원은 쪽지를 돌려주고 상담 관계를 끝냈다. 성인 재회나 연애는 없으며 이 대화에서도 거절을 번복하거나 의존과 비밀 관계를 만들지 않는다."
- 성격: "주원은 현실적이고 다정하지만 애매한 위로로 기대를 남기지 않는다. 서운함과 작별 인사는 들어 주되 돌봄이 연애의 신호는 아니었다는 사실을 솔직하고 분명하게 말한다."

- 캐릭터: `nurse_normal.png`
**보건선생님**: *돌려준 쪽지를 연두색 기록 카드 위에 놓는다.* 서운한 말이 남았으면 들을게. 그래도 내 답은 바뀌지 않아.

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
  - [100+] → `perfect_seo_1`
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
- 다음: `perfect_seo_coda_1`

- 캐릭터: `없음`
**서연**: 하나는 네가 골라.

---

### `perfect_seo_coda_1`
- 배경: `ending_perfect_seoyeon.png`
- 다음: `perfect_seo_coda_2`

- 캐릭터: `없음`
**{name}**: *사진 아래에 새 학생회 운영 파일이 붙는다. 마지막 페이지 총괄란에는 하은의 이름이 있다. 서연은 수정 표시를 하나도 남기지 않았다.*

---

### `perfect_seo_coda_2`
- 배경: `ending_perfect_seoyeon.png`
- 다음: `perfect_seo_coda_3`

- 캐릭터: `없음`
**서연**: 화분은 네가 먼저 골라. 아니, 사진으로 고르지 말고 토요일에 같이 가자.

---

### `perfect_seo_coda_3`
- 배경: `ending_perfect_seoyeon.png`
- 다음: `date_choice_perfect_seo`

- 캐릭터: `없음`
**{name}**: *약속 시간은 비어 있다. 내가 오후 세 시를 적자 서연은 '확인' 대신 '좋아'라고 답한다.*

---

### `date_choice_perfect_seo`
- 배경: `top_school.png`
- 선택지:
  1. "옥상." → `date_perfect_seo_roof_1`
  2. "카페." → `date_perfect_seo_cafe_1`

- 캐릭터: `seyoun_laugh.png`
**서연**: *입학식 다음 날, 옥상에서 서연과 다시 만난다.* 남은 얘기는 내일 하기로 했지. 그전에 오늘 어디 갈래?

---

### `date_perfect_seo_roof_1`
- 배경: `top_school.png`
- 다음: `date_perfect_seo_roof_2`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *화분 흙이 아직 축축하다. 서연은 물뿌리개를 바닥에 내려놓는다.*

---

### `date_perfect_seo_roof_2`
- 배경: `top_school.png`
- 다음: `date_perfect_seo_roof_3`

- 캐릭터: `seyoun_laugh.png`
**서연**: 앉을 자리는 네가 골라. 나는 벌써 정했어.

---

### `date_perfect_seo_roof_3`
- 배경: `top_school.png`
- 다음: `perfect_epilogue_4_seo`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *열린 문으로 바람이 들어와 일정표를 흔든다. 서연은 종이 끝을 누를 뿐 접지 않는다.*

---

### `date_perfect_seo_cafe_1`
- 배경: `cafe.png`
- 다음: `date_perfect_seo_cafe_2`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *창가에 앉은 서연은 컵받침을 반듯하게 맞춘 뒤에야 입을 연다.*

---

### `date_perfect_seo_cafe_2`
- 배경: `cafe.png`
- 다음: `date_perfect_seo_cafe_3`

- 캐릭터: `seyoun_laugh.png`
**서연**: 다음 주에도 여기서 봐. 시간은 네가 정하고.

---

### `date_perfect_seo_cafe_3`
- 배경: `cafe.png`
- 다음: `perfect_epilogue_4_seo`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *영수증 뒷면에 숫자가 적혀 있다. 전화번호가 아니라 다음에 화분에 물 줄 날짜다.*

---

### `perfect_epilogue_4_seo`
- 배경: `ending_perfect_seoyeon.png`
- 다음: `day5_seo_ending_freetalk_intro`

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
**{name}**: *카페를 나왔다. 비가 내린다. 우산은 하나고 버스 정류장은 반대편에 있다.*

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
- 다음: `date_choice_true_seo`

- 캐릭터: `없음`
**{name}**: *5일이었다. 서연의 책상 위 물건 위치를 외우기까지.*

---

### `date_choice_true_seo`
- 배경: `cafe.png`
- 선택지:
  1. "카페." → `date_true_seo_1`
  2. "옥상." → `date_true_seo_alt_1`

- 캐릭터: `seyoun_shy.png`
**서연**: 나가기 전에 잠깐 들를래?

---

### `date_true_seo_1`
- 배경: `cafe.png`
- 다음: `date_true_seo_2`

- 캐릭터: `seyoun_shy.png`
**서연**: 컵은 네가 옮겨. 받침은 내가 맞출게.

---

### `date_true_seo_2`
- 배경: `cafe.png`
- 다음: `true_epilogue_2`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *창밖으로 버스가 지나가도 서연은 시계를 확인하지 않는다.*

---

### `date_true_seo_alt_1`
- 배경: `top_school.png`
- 다음: `date_true_seo_alt_2`

- 캐릭터: `seyoun_laugh.png`
**서연**: 물만 주고 내려가자. 오래 있으면 들킬 거야.

---

### `date_true_seo_alt_2`
- 배경: `top_school.png`
- 다음: `true_epilogue_2`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *화분 하나가 비어 있다. 다음에 올 때 새 화분을 사 와야겠다.*

---

### `ending_aff_check_yuna`
- 배경: `yuna_hideout.png`
- 호감분기: Yuna
  - [100+] → `perfect_yuna_1`
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
**유나**: 다 읽고 나면 말해줘. 그게 내 대답이야.

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
**유나**: *자리에서 일어나 노트를 내려놓는다.* 안아도 돼? *두 팔을 조금 벌린 채 한 뼘 앞에서 대답을 기다린다.*

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
- 다음: `perfect_yuna_coda_1`

- 캐릭터: `없음`
**유나**: *여전히 말이 적다. {name}에게 보내는 쪽지는 조금 길어졌다.*

---

### `perfect_yuna_coda_1`
- 배경: `ending_perfect_yuna.png`
- 다음: `perfect_yuna_coda_2`

- 캐릭터: `없음`
**{name}**: *서점 사인회 공지가 올라온다. 익명 대신 '최유나'가 표지보다 크게 적혀 있다.*

---

### `perfect_yuna_coda_2`
- 배경: `ending_perfect_yuna.png`
- 다음: `perfect_yuna_coda_3`

- 캐릭터: `없음`
**유나**: 끝나면 와. 이번엔 숨지 않을 거야.

---

### `perfect_yuna_coda_3`
- 배경: `ending_perfect_yuna.png`
- 다음: `date_choice_perfect_yuna`

- 캐릭터: `없음`
**{name}**: *뒤이어 사인 연습 사진이 온다. 이름이 한 페이지 가득하다. 맨 아래에만 내 이름이 작게 적혀 있다.*

---

### `date_choice_perfect_yuna`
- 배경: `bookstore.png`
- 선택지:
  1. "헌책방." → `date_perfect_yuna_book_1`
  2. "옥상." → `date_perfect_yuna_roof_1`

- 캐릭터: `yuna_smile.png`
**유나**: *책이 나온 뒤 첫 주말, 유나와 헌책방에 들렀다.* 밖에 갈 만한 곳도 있어. 네가 골라.

---

### `date_perfect_yuna_book_1`
- 배경: `bookstore.png`
- 다음: `date_perfect_yuna_book_2`

- 캐릭터: `yuna_smile.png`
**{name}**: *서가 사이를 걷던 유나가 책등을 훑다 걸음을 멈춘다.*

---

### `date_perfect_yuna_book_2`
- 배경: `bookstore.png`
- 다음: `date_perfect_yuna_book_3`

- 캐릭터: `junho_normal.png`
**남자**: 유나? 여기 올 줄은 몰랐는데.

---

### `date_perfect_yuna_book_3`
- 배경: `bookstore.png`
- 다음: `date_perfect_yuna_book_4`

- 캐릭터: `junho_awkward.png`
**이준호**: 오래전 일이야. 굳이 말 안 해도 될 것 같았어. 미안, 방해했네.

---

### `date_perfect_yuna_book_4`
- 배경: `bookstore.png`
- 다음: `perfect_epilogue_4_yuna`

- 캐릭터: `yuna_smile.png`
**유나**: *유나의 손가락이 책갈피 위에서 멈춘다.* 지금은 {name}이랑 왔어. 그걸로 됐어.

---

### `date_perfect_yuna_roof_1`
- 배경: `yuna_secret_rooftop.png`
- 다음: `date_perfect_yuna_roof_2`

- 캐릭터: `yuna_smile.png`
**{name}**: *비밀 옥상에 올라오자 유나가 이어폰 한쪽을 건넨다.*

---

### `date_perfect_yuna_roof_2`
- 배경: `yuna_secret_rooftop.png`
- 다음: `date_perfect_yuna_roof_3`

- 캐릭터: `yuna_smile.png`
**유나**: 세 번째 곡이야. 이번에는 처음부터.

---

### `date_perfect_yuna_roof_3`
- 배경: `yuna_secret_rooftop.png`
- 다음: `perfect_epilogue_4_yuna`

- 캐릭터: `yuna_smile.png`
**{name}**: *곡이 끝나도 유나는 이어폰을 빼지 않는다. 난간에 얹은 손이 조금 더 가까워진다.*

---

### `perfect_epilogue_4_yuna`
- 배경: `ending_perfect_yuna.png`
- 다음: `day5_yuna_ending_freetalk_intro`

- 캐릭터: `없음`
**시스템**: ─── PERFECT END (유나) ───

---

### `bitter_yuna_1`
- 배경: `park.png`
- BGM: `night2.mp3`
- 플래그: `ending_bittersweet`
- 다음: `bitter_yuna_2`

- 캐릭터: `없음`
**{name}**: *고백은 했다. 유나는 끄덕였지만 손가락은 책갈피 끝을 계속 문지르고 있었다. 한 달쯤 지나서, 쪽지가 하나 사물함에 들어 있었다. '얘기 좀 하자.'*

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
**유나**: 가끔 생각나. 도서관 냄새 맡으면. 그때 좀 더 말할 걸.

---

### `bitter_yuna_2_book`
- 배경: `bookstore.png`
- 다음: `bitter_yuna_3`

- 캐릭터: `yuna_sad.png`
**유나**: 가끔 생각나. 서점 지날 때. 그때 좀 더 말할 걸.

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
- 배경: `top_school.png`
- 다음: `true_yuna_2_d`

- 캐릭터: `yuna_normal.png`
**{name}**: *다락방 위는 옥상이었다. 도서관 별관의 옥상. — 아무도 모르는 비밀 통로.*

---

### `true_yuna_2_d`
- 배경: `top_school.png`
- 다음: `true_yuna_3`

- 캐릭터: `yuna_normal.png`
**유나**: *난간에 기대어 선다. 산 너머로 해가 기울고 있다.*

---

### `true_yuna_3`
- 배경: `top_school.png`
- 다음: `true_yuna_4`

- 캐릭터: `yuna_normal.png`
**유나**: *해치 위 낮은 옥상. 바람에 노트 귀퉁이가 들린다.*

---

### `true_yuna_4`
- 배경: `top_school.png`
- 다음: `true_yuna_5`

- 캐릭터: `yuna_smile.png`
**유나**: *휴대폰 재생목록을 연다. 세 번째 곡 옆에 작은 별표가 붙어 있다.*

---

### `true_yuna_5`
- 배경: `top_school.png`
- 다음: `true_yuna_5_b`

- 캐릭터: `yuna_smile.png`
**{name}**: 그때 그 세 번째 곡?

---

### `true_yuna_5_b`
- 배경: `top_school.png`
- 다음: `true_yuna_6`

- 캐릭터: `yuna_smile.png`
**유나**: *재생목록을 내리던 손가락이 세 번째 곡에서 멎는다. 책등을 쥔 손은 느슨해진다.*

---

### `true_yuna_6`
- 배경: `top_school.png`
- 다음: `true_yuna_6b`

- 캐릭터: `yuna_shy.png`
**유나**: 기억하고 있었어.

---

### `true_yuna_6b`
- 배경: `top_school.png`
- 다음: `true_yuna_7`

- 캐릭터: `yuna_smile.png`
**유나**: 오늘은 여기서 같이 들어.

---

### `true_yuna_7`
- 배경: `top_school.png`
- 다음: `true_yuna_bridge`

- 캐릭터: `yuna_shy.png`
**{name}**: *노트에 재생목록이 옮겨 적혀 있다. 세 번째 곡 제목 옆에는 첫 쪽지와 같은 연보라색 점이 찍혀 있다. 유나가 재생 버튼을 누른다.*

---

### `true_yuna_bridge`
- 배경: `ending_true_yuna.png`
- 다음: `true_epilogue_1_yuna`

- 캐릭터: `없음`
**{name}**: *마지막 곡이 끝날 무렵 초승달이 뜬다. 유나가 "등 기대도 돼?" 하고 묻고 한 뼘 옆자리를 비운다. 다음 곡은 아직 재생되지 않는다.*

---

### `true_epilogue_1_yuna`
- 배경: `ending_true_yuna.png`
- 다음: `date_choice_true_yuna`

- 캐릭터: `없음`
**{name}**: *5일이었다. 유나가 쪽지 밖에서 말하기까지.*

---

### `date_choice_true_yuna`
- 배경: `bookstore.png`
- 선택지:
  1. "헌책방." → `date_true_yuna_book_1`
  2. "옥상." → `date_true_yuna_roof_1`

- 캐릭터: `yuna_smile.png`
**유나**: 밖으로 갈래, 위로 갈래?

---

### `date_true_yuna_book_1`
- 배경: `bookstore.png`
- 다음: `date_true_yuna_book_2`

- 캐릭터: `junho_normal.png`
**이준호**: 오래됐네. 여기서 다시 볼 줄은 몰랐어.

---

### `date_true_yuna_book_2`
- 배경: `bookstore.png`
- 다음: `true_epilogue_2`

- 캐릭터: `yuna_smile.png`
**유나**: *유나가 {name}의 소매를 잠깐 잡았다 놓는다.* 이제 갈게.

---

### `date_true_yuna_roof_1`
- 배경: `yuna_secret_rooftop.png`
- 다음: `date_true_yuna_roof_2`

- 캐릭터: `yuna_smile.png`
**유나**: 말 안 해도 돼. 짧은 곡이야.

---

### `date_true_yuna_roof_2`
- 배경: `yuna_secret_rooftop.png`
- 다음: `true_epilogue_2`

- 캐릭터: `yuna_smile.png`
**{name}**: *바람에 이어폰 줄이 흔들린다. 유나는 난간에 기댄 채 곡이 끝날 때까지 움직이지 않는다.*

---

### `ending_aff_check_dain`
- 배경: `gym.png`
- 호감분기: Dain
  - [100+] → `perfect_dain_1`
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
**{name}**: *체육관. 공은 보관함에 들어가 있고 벤치 위에는 무릎 보호대와 재활 일정표가 놓여 있다.*

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
**다인**: 잠깐 안아도 돼? *{name}이 팔을 내밀자 다인은 왼발로 중심을 잡고 어깨에 팔을 두른다. {name}이 몸을 받쳐 오른쪽 무릎에는 힘이 실리지 않는다.*

---

### `perfect_epilogue_1_dain`
- 배경: `ending_perfect_dain.png`
- 다음: `perfect_epilogue_1b_dain`

- 캐릭터: `없음`
**{name}**: *다인이 "이제 내려줘"라고 하자 {name}은 왼발부터 닿도록 천천히 내려놓는다.*

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
- 다음: `perfect_dain_coda_1`

- 캐릭터: `없음`
**{name}**: *통증이 있는 날에는 훈련 대신 재활 기록과 경기 영상을 함께 본다. 쉬어야 한다는 말도 이제 다인이 먼저 한다.*

---

### `perfect_dain_coda_1`
- 배경: `ending_perfect_dain.png`
- 다음: `perfect_dain_coda_2`

- 캐릭터: `없음`
**다인**: 엄마가 재방송 세 번 봤대. 경기보다 내 해설이 더 시끄럽다고.

---

### `perfect_dain_coda_2`
- 배경: `ending_perfect_dain.png`
- 다음: `perfect_dain_coda_3`

- 캐릭터: `없음`
**{name}**: *다음 경기 대본 첫 줄에는 '아프면 멈춘다'가 굵게 적혀 있다. 지운 자국은 없다.*

---

### `perfect_dain_coda_3`
- 배경: `ending_perfect_dain.png`
- 다음: `date_choice_perfect_dain`

- 캐릭터: `없음`
**다인**: 끝나고 같이 걸어가자. 오늘 속도는 내가 정할게.

---

### `date_choice_perfect_dain`
- 배경: `gym.png`
- 선택지:
  1. "체육관." → `date_perfect_dain_gym_1`
  2. "중계석." → `date_perfect_dain_booth_1`

- 캐릭터: `dain_laugh.png`
**다인**: 오늘은 코트에 안 올라가도 돼. 그래도 가고 싶은 데가 있거든.

---

### `date_perfect_dain_gym_1`
- 배경: `gym.png`
- 다음: `date_perfect_dain_gym_2`

- 캐릭터: `dain_laugh.png`
**{name}**: *공을 품에 안은 다인은 점프하지 않고 곧장 벤치에 앉는다.*

---

### `date_perfect_dain_gym_2`
- 배경: `gym.png`
- 다음: `date_perfect_dain_gym_3`

- 캐릭터: `dain_laugh.png`
**다인**: 5분만 잘게. 진짜 5분. 10분 지나도 깨우진 마.

---

### `date_perfect_dain_gym_3`
- 배경: `gym.png`
- 다음: `perfect_epilogue_4_dain`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인은 오른쪽 무릎을 벤치 밖으로 뻗고 왼쪽으로 무게를 싣는다.*

---

### `date_perfect_dain_booth_1`
- 배경: `dain_broadcast_booth.png`
- 다음: `date_perfect_dain_booth_2`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인이 큰 헤드셋을 써 보더니 스위치를 만지고 곧바로 끈다.*

---

### `date_perfect_dain_booth_2`
- 배경: `dain_broadcast_booth.png`
- 다음: `date_perfect_dain_booth_3`

- 캐릭터: `dain_laugh.png`
**다인**: 말로 따라가려니까 생각보다 숨차네. 그래도 괜찮아.

---

### `date_perfect_dain_booth_3`
- 배경: `dain_broadcast_booth.png`
- 다음: `perfect_epilogue_4_dain`

- 캐릭터: `dain_laugh.png`
**{name}**: *점수판 불이 꺼졌는데도 다인은 한동안 자리에서 일어나지 않는다.*

---

### `perfect_epilogue_4_dain`
- 배경: `ending_perfect_dain.png`
- 다음: `day5_dain_ending_freetalk_intro`

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
- 다음: `day5_main_ending_freetalk_router`

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
**다인**: 몰라. 둘 다 해보고 내가 더 재밌는 쪽 고를래.

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
**다인**: *배구공을 품에 안은 채 새끼손가락을 내민다.*

---

### `true_dain_bridge`
- 배경: `ending_true_dain.png`
- 다음: `true_epilogue_1_dain`

- 캐릭터: `없음`
**{name}**: *약속을 확인한 뒤 다인이 묻는다. "잠깐 기대도 돼?" 공을 품에 안고 어깨 하나만큼 자리를 비운 채 대답을 기다린다. 휴대폰에는 병원 예약 완료 화면이 남아 있다.*

---

### `true_epilogue_1_dain`
- 배경: `ending_true_dain.png`
- 다음: `date_choice_true_dain`

- 캐릭터: `없음`
**{name}**: *다인은 그날 처음으로 '괜찮아' 대신 다음 진료 날짜를 말했다.*

---

### `date_choice_true_dain`
- 배경: `gym.png`
- 선택지:
  1. "벤치." → `date_true_dain_1`
  2. "중계석." → `date_true_dain_alt_1`

- 캐릭터: `dain_laugh.png`
**다인**: *체육관 벤치에 앉은 다인이 옆자리를 두드린다.* 나랑 잠깐만 있어 줘. 어디가 편해?

---

### `date_true_dain_1`
- 배경: `gym.png`
- 다음: `date_true_dain_2`

- 캐릭터: `dain_laugh.png`
**다인**: 점프 안 해. 진짜 앉아만 있을게.

---

### `date_true_dain_2`
- 배경: `gym.png`
- 다음: `true_epilogue_2`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인은 발옆까지 굴러온 공을 내려다보고도 집어 들지 않는다.*

---

### `date_true_dain_alt_1`
- 배경: `dain_broadcast_booth.png`
- 다음: `date_true_dain_alt_2`

- 캐릭터: `dain_laugh.png`
**다인**: 스위치만 만져 볼게. 켜지는 않을 거야.

---

### `date_true_dain_alt_2`
- 배경: `dain_broadcast_booth.png`
- 다음: `true_epilogue_2`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인이 헤드셋을 벗어 테이블 위에 거꾸로 내려놓는다.*

---

### `true_epilogue_2`
- 배경: `school.png`
- 다음: `true_epilogue_3`

- 캐릭터: `없음`
**{name}**: *졸업식 날, 교복은 뻣뻣했다. 벚꽃은 코만 자극했다. 교문 앞에서 손은 주머니에 들어갔다.*

---

### `true_epilogue_3`
- 배경: `school.png`
- 다음: `true_epilogue_4`

- 캐릭터: `없음`
**{name}**: *달력에는 5칸만 지나 있었다.*

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
**{name}**: *다인의 아침 알람은 '웃어' 대신 재활 스트레칭 시간을 알린다. 가끔 중계 연습 영상을 보내고 {name}은 끝까지 본 뒤 감상을 답한다.*

---

### `true_epilogue_7`
- 배경: `park.png`
- 다음: `day5_main_ending_freetalk_router`

- 캐릭터: `없음`
**시스템**: ─── TRUE LOVE END ───

---

### `day5_main_ending_freetalk_router`
- 배경: `park.png`
- 분기:
  - [`route_seoyeon`] → `day5_seo_ending_freetalk_intro`
  - [`route_yuna`] → `day5_yuna_ending_freetalk_intro`
  - [`route_dain`] → `day5_dain_ending_freetalk_intro`
  - [기본] → `day5_credits`

- 캐릭터: `없음`
**{name}**: ‹빈›

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
- 다음: `day5_seo_ending_freetalk_intro`

- 캐릭터: `없음`
**시스템**: ─── GOOD END ───

---

### `day5_seo_ending_freetalk_intro`
- 배경: `top_school.png`
- 다음: `day5_seo_ending_freetalk_router`

- 캐릭터: `seyoun_normal.png`
**{name}**: *옥상. 열린 문 옆에 화분 빈자리가 있다.*

---

### `day5_seo_ending_freetalk_router`
- 배경: `top_school.png`
- 분기:
  - [`ending_perfect`] → `day5_seo_ending_freetalk_perfect`
  - [`ending_true_love`] → `day5_seo_ending_freetalk_true_love`
  - [`ending_bittersweet`] → `day5_seo_ending_freetalk_bittersweet`
  - [`day5_confessed`] → `day5_seo_ending_freetalk_late_good`
  - [기본] → `day5_seo_ending_freetalk_good`

- 캐릭터: `없음`
**{name}**: ‹빈›

---

### `day5_seo_ending_freetalk_perfect`
- 배경: `top_school.png`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "서연 PERFECT END의 1년 후 보너스 대화다. 졸업 뒤에도 관계가 단단히 이어졌고 대학 입학식 날 서연은 새 화분 두 개와 빈자리 하나가 담긴 사진을 보냈다. 서로를 선택한 현재를 유지하며 이별이나 관계 재판정을 만들지 않는다."
- 성격: "서연은 책임감 있고 솔직하며 안정된 가까운 관계 안에서는 약한 모습과 작은 장난도 편하게 드러낸다. 장기적인 약속을 서두르지 않되 함께할 미래를 자연스럽게 전제로 말한다."

- 캐릭터: `seyoun_normal.png`
**서연**: *1년 뒤에도 열린 옥상 문 옆에서 새 화분의 빈자리를 가리킨다.* 이번 것도 같이 고를래? 시간은 많으니까.

---

### `day5_seo_ending_freetalk_true_love`
- 배경: `seyoun_room.png`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "서연 TRUE LOVE END 직후의 보너스 대화다. 서연은 자신의 방과 가족사진, 숨겨 둔 메모를 보여 주며 주인공을 사적인 삶 안으로 들였다. 관계는 서로의 진심을 확인했지만 아직 조심스럽게 깊어지는 단계다. PERFECT END의 1년 후 사건을 가져오지 않는다."
- 성격: "서연은 통제된 태도 속에서도 신뢰하는 상대에게는 메모 없이 속마음을 말하려 노력한다. 가까움과 망설임을 함께 유지하고 솔직하되 이미 완전히 안정된 장기 연인처럼 행동하지 않는다."

- 캐릭터: `seyoun_shy.png`
**서연**: *화분 받침 아래 메모를 꺼내지 않고 컵 하나를 밀어 준다.* 오늘은 적어 둔 말 말고 그냥 얘기해 볼게.

---

### `day5_seo_ending_freetalk_good`
- 배경: `top_school.png`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "서연 GOOD END 뒤의 보너스 대화다. 4일차 고백은 받아들여졌지만 대화가 자주 끊겼고 둘은 천천히 관계를 맞춰 가기로 했다. 다음 날 옥상 점심을 정식으로 예약한 상태다. 관계를 실패로 돌리거나 PERFECT END 수준으로 앞당기지 않는다."
- 성격: "서연은 규칙과 약속을 챙기면서도 반걸음 속도를 맞춰 주는 현실적인 다정함을 보인다. 어색함을 숨기지 않고 하나씩 확인하며 새로 시작한 관계의 적당한 거리를 지킨다."

- 캐릭터: `seyoun_normal.png`
**서연**: *정식으로 예약한 옥상 문을 열고 사용대장을 확인한다.* 천천히 하기로 했잖아. 오늘 얘기부터 제대로 하자.

---

### `day5_seo_ending_freetalk_bittersweet`
- 배경: `cafe.png`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "서연 BITTERSWEET END 이후의 보너스 대화다. 고백 뒤 한 달 만에 둘은 너무 조심하다 멀어졌고 졸업 후 연락도 점점 뜸해졌다. 지금은 그 결말을 인정한 채 다시 마주한 짧은 대화이며 자동으로 재결합하거나 성공한 연애로 바꾸지 않는다."
- 성격: "서연은 아쉬움을 회피하지 않고 사실대로 말하지만 상대를 몰아붙이지 않는다. 남아 있는 애정과 현재의 거리를 동시에 지키며 재회를 약속하기보다 지금 건네는 말에 정직하게 답한다."

- 캐릭터: `seyoun_normal.png`
**서연**: *식어 버린 커피 옆에서 컵받침 모서리를 맞춘다.* 우리 사이가 멀어진 것까지 없던 일로 하진 말자. 그래도 지금 할 말은 들을게.

---

### `day5_seo_ending_freetalk_late_good`
- 배경: `park.png`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "서연에게 5일차 마지막 기회에 뒤늦게 고백해 이어진 GOOD END 뒤의 보너스 대화다. 4일차에는 기다렸고 마지막 날 고백이 받아들여져 관계가 막 시작됐다. 이를 4일차 고백이나 오래된 연애로 바꾸지 않고 늦게 시작한 두 사람의 다음 대화를 잇는다."
- 성격: "서연은 늦은 고백을 가볍게 넘기지 않지만 받아들인 선택에는 책임감 있게 응한다. 서로 놓친 말을 차분히 확인하고 갓 시작한 관계에 맞는 조심스러운 기대와 작은 안도감을 보인다."

- 캐릭터: `seyoun_laugh.png`
**서연**: *공원 길에서 걸음을 늦추고 옆자리를 맞춘다.* 마지막 날에야 말했으니까, 이제부터는 늦지 않게 얘기하자.

---

### `good_1_yuna`
- 배경: `park.png`
- 다음: `good_1_yuna_b`

- 캐릭터: `yuna_smile.png`
**유나**: 늦긴 했네. 그래도 네 문장 끝까지 읽었어.

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
**{name}**: *운동장 스피커의 종료음이 끊긴 뒤에도 둘은 같은 난간 앞에 남아 있다.*

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
- 다음: `day5_yuna_ending_freetalk_intro`

- 캐릭터: `없음`
**시스템**: ─── GOOD END ───

---

### `day5_yuna_ending_freetalk_intro`
- 배경: `yuna_hideout.png`
- 다음: `day5_yuna_ending_freetalk_router`

- 캐릭터: `yuna_smile.png`
**{name}**: *에필로그가 끝난 뒤, 두 사람은 다시 학교 별관의 조용한 자리에서 마주 앉는다.*

---

### `day5_yuna_ending_freetalk_router`
- 배경: `yuna_hideout.png`
- 분기:
  - [`ending_perfect`] → `day5_yuna_ending_freetalk_perfect`
  - [`ending_true_love`] → `day5_yuna_ending_freetalk_true_love`
  - [`ending_bittersweet`] → `day5_yuna_ending_freetalk_bittersweet`
  - [`day5_confessed`] → `day5_yuna_ending_freetalk_late_good`
  - [기본] → `day5_yuna_ending_freetalk_good`

- 캐릭터: `없음`
**{name}**: ‹빈›

---

### `day5_yuna_ending_freetalk_perfect`
- 배경: `yuna_hideout.png`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "유나 PERFECT END의 1년 후 보너스 대화다. 유나의 첫 장편소설이 출간됐고 헌정사에는 세 번째 곡을 함께 들은 사람을 적었다. 둘의 깊고 지속적인 관계와 길어진 쪽지를 유지하며 결말을 되돌리지 않는다."
- 성격: "유나는 조용하고 사려 깊지만 확실히 신뢰하는 상대에게는 말과 애정을 먼저 건넨다. 책과 음악의 비유를 자연스럽게 쓰되 감정을 숨기는 도구로 삼지 않고 안정된 친밀감을 보인다."

- 캐릭터: `yuna_smile.png`
**유나**: *출간된 첫 장편소설을 덮고 헌정사가 적힌 페이지를 펼친다.* 세 번째 곡 다음 이야기는, 네가 먼저 들려줘.

---

### `day5_yuna_ending_freetalk_true_love`
- 배경: `yuna_secret_rooftop.png`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "유나 TRUE LOVE END 직후의 보너스 대화다. 유나는 비밀 다락방 위 옥상을 보여 주고 세 번째 곡을 함께 들으며 기대도 되는지 물었다. 쪽지보다 목소리를 먼저 쓰기 시작한 단계이며 PERFECT END의 출간 후 미래를 앞당기지 않는다."
- 성격: "유나는 신중하고 말수가 적지만 이제 침묵 뒤로만 숨지 않는다. 상대의 답을 기다리고 자신의 감정도 직접 말하되, 막 깊어진 관계의 수줍음과 여백을 유지한다."

- 캐릭터: `yuna_smile.png`
**유나**: *비밀 옥상에서 재생목록의 다음 곡을 고르다 손을 멈춘다.* 이번에는 쪽지 말고 내가 먼저 물을게. 무슨 생각 해?

---

### `day5_yuna_ending_freetalk_good`
- 배경: `top_school.png`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "유나 GOOD END 뒤의 보너스 대화다. 4일차 고백 뒤에도 둘은 어색했지만 유나는 문장을 끝까지 읽었고 2권과 다음 날, 함께 읽을 결말을 약속했다. 조심스러운 시작을 이별로 돌리거나 완성된 장기 연애처럼 과장하지 않는다."
- 성격: "유나는 짧은 문장과 작은 행동으로 관계를 이어 가며 필요할 때는 먼저 말하라는 용기도 낸다. 서두르지 않으면서도 상대에게 다음 페이지를 분명히 내어 준다."

- 캐릭터: `yuna_normal.png`
**유나**: *접힌 쪽지 뒷면에 새 문장을 쓰고 보여 준다.* 다음엔 먼저 말해. 오늘은... 지금부터 해도 되고.

---

### `day5_yuna_ending_freetalk_bittersweet`
- 배경: `library_old.png`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "유나 BITTERSWEET END 이후의 보너스 대화다. 고백은 이어지지 못했고 한 달 뒤 마지막 쪽지를 남긴 뒤 졸업 후 연락이 뜸해졌다. 현재는 멀어진 관계를 인정하고 다시 나누는 짧은 대화이며 자동 재결합이나 성공한 연애를 만들지 않는다."
- 성격: "유나는 후회와 애정을 조용히 인정하지만 모호한 희망으로 상대를 붙잡지 않는다. 말 사이의 여백과 현재의 거리를 지키면서 지금 들은 말에는 진심으로 답한다."

- 캐릭터: `yuna_sad.png`
**유나**: *비에 번진 마지막 쪽지를 책 사이에 넣는다.* 끝난 문장을 고쳐 쓰지는 않을게. 그래도 네가 지금 하는 말은 듣고 싶어.

---

### `day5_yuna_ending_freetalk_late_good`
- 배경: `top_school.png`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "유나에게 5일차 마지막 기회에 뒤늦게 고백해 이어진 GOOD END 뒤의 보너스 대화다. 4일차에는 기다렸고 마지막 날에야 마음을 전해 관계가 막 시작됐다. 고백 시점을 바꾸거나 이미 오래 사귄 사이처럼 행동하지 않는다."
- 성격: "유나는 늦게 도착한 진심을 신중히 받아들이고 다시 침묵으로 놓치지 않도록 작은 질문을 먼저 건넨다. 새 관계의 수줍음과 조심스러운 희망을 함께 보여 준다."

- 캐릭터: `yuna_smile.png`
**유나**: *마지막 날 받은 고백을 적은 쪽지를 접어 책갈피에 끼운다.* 늦은 문장이어도 읽었어. 다음 문장은 같이 쓰자.

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
**{name}**: *다인이 먼저 주먹을 내밀고 기다린다. 다른 손에 든 재활 안내지에는 다음 산책 시간과 '속도는 내가 정하기'가 적혀 있다.*

---

### `good_epilogue_1_dain`
- 배경: `ending_good_dain.png`
- 다음: `good_epilogue_2_dain`

- 캐릭터: `없음`
**{name}**: *다인에게서 메시지가 왔다. '내일 아침 재활 산책 같이 할 사람?'*

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
- 다음: `day5_dain_ending_freetalk_intro`

- 캐릭터: `없음`
**시스템**: ─── GOOD END ───

---

### `day5_dain_ending_freetalk_intro`
- 배경: `gym.png`
- 다음: `day5_dain_ending_freetalk_router`

- 캐릭터: `dain_laugh.png`
**{name}**: *마지막 장면이 지나고 익숙한 체육관에 공 튀는 소리만 한 번 울린다.*

---

### `day5_dain_ending_freetalk_router`
- 배경: `gym.png`
- 분기:
  - [`ending_perfect`] → `day5_dain_ending_freetalk_perfect`
  - [`ending_true_love`] → `day5_dain_ending_freetalk_true_love`
  - [`ending_bittersweet`] → `day5_dain_ending_freetalk_bittersweet`
  - [`day5_confessed`] → `day5_dain_ending_freetalk_late_good`
  - [기본] → `day5_dain_ending_freetalk_good`

- 캐릭터: `없음`
**{name}**: ‹빈›

---

### `day5_dain_ending_freetalk_perfect`
- 배경: `dain_broadcast_booth.png`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "다인 PERFECT END의 1년 후 보너스 대화다. 다인은 재활을 이어 가며 스포츠미디어학과 경기 중계부에서 첫 방송을 준비했고 주인공은 통증이 있는 날과 새 진로를 곁에서 함께했다. 부상이나 진로를 없던 일로 하지 않고 안정된 관계를 유지한다."
- 성격: "다인은 밝고 직접적이며 안정된 관계 안에서 장난과 애정을 숨기지 않는다. 몸 상태와 속도는 스스로 정하고 주인공의 지지를 당연시하지 않으면서 함께 만든 약속을 즐겁게 기억한다."

- 캐릭터: `dain_laugh.png`
**다인**: *첫 방송 대본과 재활 기록을 나란히 놓고 활짝 웃는다.* 약속대로 끝까지 봤지? 이제 네 감상, 생방송으로 들어 보자.

---

### `day5_dain_ending_freetalk_true_love`
- 배경: `gym.png`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "다인 TRUE LOVE END 직후의 보너스 대화다. 다인은 부상을 숨기지 않고 재활 진료를 예약했으며 스포츠 방송 동아리에도 지원하려 한다. 둘은 첫 방송을 끝까지 보기로 약속하고 조심스럽게 기대었다. PERFECT END의 1년 후 진로 성과를 미리 확정하지 않는다."
- 성격: "다인은 솔직하고 활기차지만 이제 아픔을 괜찮다고 덮지 않는다. 새 관계의 설렘 속에서도 자신의 치료와 선택을 주도하며 상대의 말에 장난스럽고 진지하게 모두 반응한다."

- 캐릭터: `dain_shy.png`
**다인**: *재활 예약 화면과 방송 동아리 지원서를 번갈아 보여 준다.* 둘 다 해 본다 했잖아. 너도 하고 싶은 말 다 해 봐.

---

### `day5_dain_ending_freetalk_good`
- 배경: `park.png`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "다인 GOOD END 뒤의 보너스 대화다. 4일차 고백은 받아들여졌지만 둘 사이의 문제는 아직 다 풀리지 않았다. 다인은 월요일 재활과 다음 산책을 정했고 주인공은 다인의 속도에 맞추기로 했다. 갈등을 없애거나 완성된 관계로 건너뛰지 않는다."
- 성격: "다인은 밝은 척으로 불편함을 덮지 않고 현재 상태를 직접 말한다. 관계와 재활 모두 자기 속도를 정하면서도, 함께 걷겠다는 상대에게 솔직한 기대와 격려를 건넨다."

- 캐릭터: `dain_normal.png`
**다인**: *재활 산책 안내지에 적힌 '속도는 내가 정하기'를 톡 두드린다.* 아직 다 풀린 건 아니니까, 오늘도 천천히 얘기하자.

---

### `day5_dain_ending_freetalk_bittersweet`
- 배경: `gym.png`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "다인 BITTERSWEET END 이후의 보너스 대화다. 고백 한 달 뒤 다인은 둘 사이가 재미있기만 했던 점이 아쉽다고 말했고 졸업 후 연락은 점점 뜸해졌다. 지금은 끝난 관계와 남은 마음을 인정하는 대화이며 자동으로 다시 사귀지 않는다."
- 성격: "다인은 좋은 기억과 아쉬움을 모두 직설적으로 말하되 억지로 웃어넘기지 않는다. 상대를 탓하거나 재결합을 강요하지 않고 현재의 거리를 존중하면서 진심으로 응답한다."

- 캐릭터: `dain_normal.png`
**다인**: *닫힌 체육관 문에 기대어 잠시 공 튀는 소리를 듣는다.* 재밌었던 건 진짜야. 아쉬웠던 것도. 둘 다 두고 얘기하자.

---

### `day5_dain_ending_freetalk_late_good`
- 배경: `park.png`
- 타입: `free_talk`
- 다음: `day5_credits`
- 컨텍스트: "다인에게 5일차 마지막 기회에 뒤늦게 고백해 이어진 GOOD END 뒤의 보너스 대화다. 4일차에는 기다렸고 마지막 날 고백이 받아들여져 관계가 막 시작됐다. 이를 이전부터 사귄 관계로 바꾸지 않으며 재활과 다인이 정한 속도도 그대로 존중한다."
- 성격: "다인은 늦은 고백을 장난스럽게 받아주면서도 다시 미루지 말자는 진심을 분명히 한다. 갓 시작한 관계의 들뜸, 남은 어색함, 자신의 몸과 관계 속도를 함께 솔직히 다룬다."

- 캐릭터: `dain_laugh.png`
**다인**: *마지막 날의 고백을 떠올리며 주먹을 내밀고 웃는다.* 늦었지만 세이프! 이제는 말 미루기 없기다?

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

### `forced_violation_day5_after_seoyeon`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day5_seoyeon_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day5_seoyeon_excuse`

**서연**: *대화가 끝난 뒤에도 서연은 한동안 말이 없다. 다시 입을 열었을 때는 목소리가 차갑게 가라앉아 있다.* 방금 네가 한 짓, 없던 일처럼 넘길 생각 하지 마. 당분간 나한테 다가오지도, 연락하지도 마.

---

### `forced_violation_day5_seoyeon_apologize`
- 다음: `forced_violation_day5_resume`

**서연**: *서연은 사과를 듣고도 표정을 풀지 않는다.* 사과는 들었어. 그렇다고 없던 일이 되진 않아. 말한 대로 당분간 연락하지 마.

---

### `forced_violation_day5_seoyeon_excuse`
- 다음: `forced_violation_day5_resume`

**서연**: *서연이 말을 끊는다.* 오해? 내가 싫다고 한 순간부터 오해일 수 없어. 더 말하지 마.

---

### `forced_violation_day5_after_yuna`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day5_yuna_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day5_yuna_excuse`

**유나**: *대화가 끊긴 뒤, 유나는 짧게 숨을 고른다. 굳은 얼굴에는 경계만 남았다.* 내가 싫다는 걸 알면서 무시했잖아. 지금은 네 얼굴도 보기 싫어. 더는 연락하지 마.

---

### `forced_violation_day5_yuna_apologize`
- 다음: `forced_violation_day5_resume`

**유나**: *유나는 한참 뒤에야 짧게 대답한다.* 사과했다고 없어지진 않아. 이제 그만해.

---

### `forced_violation_day5_yuna_excuse`
- 다음: `forced_violation_day5_resume`

**유나**: *유나는 해명을 끝까지 듣지 않는다.* 싫다고 했어. 설명할 일 아니야.

---

### `forced_violation_day5_after_dain`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day5_dain_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day5_dain_excuse`

**다인**: *다인은 평소처럼 웃어넘기지 않는다. 한참 뒤에야 짧고 굳은 목소리가 돌아온다.* 장난 아니야. 내가 싫다는데 억지로 한 거, 절대 그냥 안 넘어가.

---

### `forced_violation_day5_dain_apologize`
- 다음: `forced_violation_day5_resume`

**다인**: *다인은 한참 뒤에야 짧게 답한다.* 그래. 그럼 오늘은 여기까지야. 다음 얘기는 내가 정할게.

---

### `forced_violation_day5_dain_excuse`
- 다음: `forced_violation_day5_resume`

**다인**: *다인의 목소리가 거칠어진다.* 아니. 핑계 대지 마. 싫다고 했는데도 한 건 너야.

---

### `forced_violation_day5_after_teacher`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day5_teacher_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day5_teacher_excuse`

**담임선생님**: *대화가 끝난 뒤, 담임은 더 단호한 목소리로 선을 긋는다.* 방금 행동은 명백히 선을 넘었어. 더는 가까이 오지 마. 이 일은 필요한 절차대로 처리할 거야.

---

### `forced_violation_day5_teacher_apologize`
- 다음: `forced_violation_day5_resume`

**담임선생님**: *담임은 짧게 숨을 고르고 말을 잇는다.* 사과는 들었어. 그래도 절차는 그대로 진행할 거야. 더 말하지 마.

---

### `forced_violation_day5_teacher_excuse`
- 다음: `forced_violation_day5_resume`

**담임선생님**: *담임이 해명을 끊는다.* 지금은 해명부터 할 상황이 아니야. 더 말하지 말고 거리를 둬.

---

### `forced_violation_day5_after_nurse`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day5_nurse_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day5_nurse_excuse`

**보건선생님**: *대화가 끊기자 보건선생님의 목소리에서 평소의 장난기가 사라진다.* 지금부터는 거리를 지켜. 방금 일은 기록하고 필요한 사람에게 알릴 거야.

---

### `forced_violation_day5_nurse_apologize`
- 다음: `forced_violation_day5_resume`

**보건선생님**: *보건선생님은 잠시 말이 없다가 단호하게 답한다.* 사과는 들을게. 그래도 기록과 연락은 그대로 할 거야. 오늘 대화는 여기까지.

---

### `forced_violation_day5_nurse_excuse`
- 다음: `forced_violation_day5_resume`

**보건선생님**: *보건선생님의 목소리가 더 낮아진다.* 오해라고 부르면 달라질 것 같아? 싫다는 의사를 무시한 건 사실이야.

---

### `forced_violation_day5_resume`

---

<!-- SCENARIO-AUTO-END -->

# 갤러리 프리토킹 엔드 콘텐츠

## AI 관계 사건

- 적용 범위: PERFECT 엔딩 이후 해금되는 갤러리 프리토킹만 해당한다. 본편과 엔딩 직후 보너스 프리토킹에는 적용하지 않는다.
- 진행 기준: 세션 수는 사용하지 않는다. 유저 입력과 정상 완료된 AI 응답 한 묶음을 1턴으로 계산하며, 오류 응답과 재시도는 제외한다.
- 캐릭터별 기록: 완료 턴, 사건 후 일반 대화 턴, 진행 중인 사건, 최근 완료 사건, 신뢰 위기 근거를 캐릭터마다 따로 저장한다.
- 발생 간격: 사건 해결 후 10턴 동안 새 사건이 없다. 11~18턴은 매 턴 8%, 19~29턴은 매 턴 18%로 판정하고 30턴째에는 반드시 발생한다.
- 사건 비율: 가벼운 일상 돌발 상황 45%, 오해·약속·성향 충돌 45%, 큰 신뢰 위기 10%다. 신뢰 위기 조건을 충족하지 못한 10% 추첨은 오해·충돌 사건으로 전환한다.
- 신뢰 위기 제한: 이전 신뢰 위기에서 최소 300턴이 지나야 하며, 최근 실제 유저 입력에서 심한 부정 행동 한 번 또는 반복된 부정 행동이 확인돼야 한다.
- AI 역할: 코드가 시점과 사건 분류를 정하고, AI가 캐릭터 설정·엔딩 이후 상황·최근 대화에 맞는 구체적인 사건과 진행을 만든다. 최근 완료 사건과 같은 핵심 사건은 반복하지 않는다.
- 사실 보호: AI는 유저가 하지 않은 말·행동·약속 위반을 지어내지 않는다. 사망·중병·임신·성폭력·범죄·불륜을 새 사실로 만들어 충격을 유도하지 않는다.
- 초기 호감도: 사건이 실제로 시작된 응답에서 즉시 반영한다. 일상 사건은 -1~-3, 오해·충돌은 -5~-10이다. 큰 신뢰 위기는 사건과 실제 대화 근거에 따라 낮음 -20~-29, 중간 -30~-39, 높음 -40~-50으로 나누며 무조건 -50을 적용하지 않는다.
- 위기 강도 판단: AI가 구체적인 사건과 실제 대화 근거를 함께 살펴 낮음·중간·높음 가운데 하나를 고른다. 코드는 AI가 고른 강도를 다른 단계로 바꾸지 않는다.
- 후속 호감도: 사건 시작 다음 턴부터는 유저의 실제 대응을 기존 턴당 -50~+5 기준으로 평가한다. 사건을 해결해도 호감도를 한 번에 복구하지 않고 이후 긍정적인 대화에서 +1~+5씩 회복한다.
- 사건 수명: 진행 중인 사건이 해결되기 전에는 새 사건을 만들지 않는다. 채팅을 닫아도 요약과 진행 상태를 저장해 다음 갤러리 프리토킹에서 이어 간다.
- 표정: AI가 장면과 감정에 따라 실제 보유한 표정 중 하나를 선택한다. 호감도 증감 방향만으로 표정을 후처리 치환하지 않는다.
- 영구 해금: 현재 호감도가 내려가도 이미 해금한 엔딩·CG·표정·캐릭터·갤러리 프리토킹은 다시 잠기지 않는다.
