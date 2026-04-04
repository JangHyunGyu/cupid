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
- 다음: `start_2`

- 캐릭터: `없음`
**{name}**: *4월. 벚꽃이 흩날린다.*

---

### `start_2`
- 배경: `school.png`
- 다음: `start_3`

- 캐릭터: `없음`
**{name}**: *교복이 아직 뻣뻣하다. 풀 냄새가 은은하게 난다. 어제 다림질했는데도 접은 자국이 지 멋대로 남아 있다. 교복이랑 벌써 사이가 안 좋다.*

---

### `start_3`
- 배경: `school.png`
- 다음: `start_3b`

- 캐릭터: `없음`
**{name}**: *오늘부터 이 학교 학생이다. 전학. 처음이다.*

---

### `start_3b`
- 배경: `school.png`
- 다음: `start_4`

- 캐릭터: `없음`
**{name}**: *손이 주머니 안에서 핸드폰 모서리를 만지작거린다. 인정하기 싫지만, 긴장할 때 나오는 습관이다.*

---

### `start_4`
- 배경: `school.png`
- 다음: `start_5`

- 캐릭터: `없음`
**{name}**: *주머니에서 핸드폰이 울린다. 이전 학교 단체 카톡방. 화면에 뜬 이름을 보고 — 주머니에 도로 넣었다. 아직은.*

---

### `start_5`
- 배경: `school.png`
- 다음: `start_6`

- 캐릭터: `없음`
**{name}**: *벚꽃잎이 코끝을 스친다. — 재채기가 나올 뻔했다. 드라마면 여기서 예쁜 애가 부딪히면서 등장하는 건데.*

---

### `start_6`
- 배경: `school.png`
- 다음: `name_input_scene`

- 캐릭터: `없음`
**{name}**: *현실은 그냥 재채기다.*

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
- 다음: `gate_2`

- 캐릭터: `없음`
**{name}**: *낯선 교문 앞에 섰다. 꽤 큰 학교다. 건물이 깨끗하고 운동장도 넓다.*

---

### `gate_2`
- 배경: `school.png`
- 다음: `gate_3`

- 캐릭터: `없음`
**{name}**: *학생들이 삼삼오오 교문을 지나간다. 나만 교복이 새하얗게 뻣뻣하다. 광고판 같다 — '저 새로 왔어요'.*

---

### `gate_3`
- 배경: `school.png`
- 다음: `seoyeon_meet_1`

- 캐릭터: `없음`
**{name}**: *교문 앞에 한 여학생이 서 있다. 검은 긴머리를 가볍게 넘기며 — 안경 너머로 걸음이 여유롭다. 서두르는 기색이 전혀 없다.*

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
**{name}**: *목소리가 차분하다. 차갑진 않은데, 모든 걸 예상하고 있다는 톤.*

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
**서연**: 학생회장이거든. 새 학생 안내는 내 일이야.

---

### `seoyeon_meet_5`
- 배경: `school.png`
- 다음: `seoyeon_meet_6`

- 캐릭터: `seyoun_normal.png`
**서연**: 따라와. 학교 안내해 줄게.

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
- 다음: `seoyeon_meet_9`

- 캐릭터: `seyoun_normal.png`
**{name}**: *피식 웃는다. 입꼬리만 올라가는 웃음. — 나도 모르게 따라 웃고 있었다.*

---

### `seoyeon_meet_9`
- 배경: `school.png`
- 다음: `seoyeon_choice`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 교문 쪽으로 걸으며 손짓한다.*

---

### `seoyeon_choice`
- 배경: `school.png`
- 선택지:
  1. "혹시 나한테 관심 있어서 먼저 나온 거 아니고?" → `choice_flirt_1` | Seoyeon +5
  2. "가이드비는 얼마야?" → `choice_joke_1` | Seoyeon +3
  3. "괜찮아, 대충 둘러보면 되지 뭐." → `choice_dismiss_1` | Seoyeon -3

- 캐릭터: `seyoun_normal.png`
**{name}**: *어떻게 반응할까?*

---

### `choice_dismiss_1`
- 배경: `school.png`
- 다음: `choice_dismiss_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *걸음을 멈춘다. 살짝 고개를 돌려 이쪽을 본다.*

---

### `choice_dismiss_2`
- 배경: `school.png`
- 다음: `choice_dismiss_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 그래? 알겠어. 그럼 잘 다녀.

---

### `choice_dismiss_3`
- 배경: `school.png`
- 다음: `hallway_1`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 먼저 돌아선다. 아까와는 달리 손짓은 없었다.*

---

### `choice_flirt_1`
- 배경: `school.png`
- 다음: `choice_flirt_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 걸음을 멈추고 돌아본다. 놀라는 게 아니라 — 재밌다는 표정.*

---

### `choice_flirt_2`
- 배경: `school.png`
- 다음: `choice_flirt_3`

- 캐릭터: `seyoun_laugh.png`
**서연**: 와. 첫날부터 이런 사람은 처음이네. *살짝 웃는다.*

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
**서연**: 전학생이라 그런가, 눈치 볼 줄을 모르네. 재밌어.

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
**{name}**: *첫날부터 이런 텐션의 학생회장이라니. — 나쁘지 않다.*

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
- 다음: `hallway_2`

- 캐릭터: `seyoun_back.png`
**{name}**: *서연이 복도를 걸으며 학교를 안내한다. 스치는 학생들이 서연에게 인사를 건넨다. 서연은 하나하나 눈인사로 받는다.*

---

### `hallway_2`
- 배경: `school_hallway.png`
- 다음: `hallway_3`

- 캐릭터: `seyoun_back.png`
**{name}**: *스치는 학생들이 전부 서연에게 인사를 건넨다.*

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
**{name}**: *서연이 주머니에서 열쇠를 꺼내 살짝 흔든다.*

---

### `hallway_5`
- 배경: `school_hallway.png`
- 다음: `hallway_6`

- 캐릭터: `seyoun_normal.png`
**서연**: 옥상은 원래 잠겨 있는데. 학생회장 특권.

---

### `hallway_6`
- 배경: `school_hallway.png`
- 다음: `hallway_6_ins`

- 캐릭터: `seyoun_normal.png`
**{name}**: 비밀 아지트라도 있어?

---

### `hallway_6_ins`
- 배경: `school_hallway.png`
- 다음: `hallway_6_ins2`

- 캐릭터: `seyoun_normal.png`
**서연**: *잠깐 멈칫* ...눈치 빠르네.

---

### `hallway_6_ins2`
- 배경: `school_hallway.png`
- 다음: `hallway_7`

- 캐릭터: `seyoun_normal.png`
**{name}**: *멈칫한 거. 0.5초. 별거 아닌 거겠지만, 왠지 기억에 남는다.*

---

### `hallway_7`
- 배경: `school_hallway.png`
- 다음: `hallway_8`

- 캐릭터: `seyoun_normal.png`
**서연**: 아, 점심. 학식 어디인지 모르지? 같이 가.

---

### `hallway_8`
- 배경: `school_hallway.png`
- 다음: `hallway_9`

- 캐릭터: `seyoun_shy.png`
**{name}**: *갑자기 점심 약속이 생겼다. — 대답한 적 없는데.*

---

### `hallway_9`
- 배경: `school_hallway.png`
- 다음: `hallway_10`

- 캐릭터: `seyoun_shy.png`
**{name}**: *교실 앞에 도착.*

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
- 다음: `hallway_13_ins`

- 캐릭터: `seyoun_back.png`
**{name}**: *서연이 돌아서며 가볍게 손을 흔든다. 뒤돌아보지 않는다.*

---

### `hallway_13_ins`
- 배경: `school_hallway.png`
- 플래그: `met_seoyeon`
- 다음: `classroom_1`

- 캐릭터: `seyoun_back.png`
**{name}**: *등이 곧다. 완벽하게 곧다. — 연습한 것처럼. 저 여유로움 뒤에 뭐가 있는 건지, 살짝 궁금해졌다.*

---

### `classroom_1`
- 배경: `room_school.png`
- BGM: `daily.mp3`
- 다음: `classroom_2`

- 캐릭터: `없음`
**{name}**: *교실 문을 연다. 시선이 쏟아진다.*

---

### `classroom_2`
- 배경: `room_school.png`
- 다음: `classroom_2_ins`

- 캐릭터: `없음`
**{name}**: *예상은 했지만, 30명분의 시선은 역시 무겁다.*

---

### `classroom_2_ins`
- 배경: `room_school.png`
- 다음: `classroom_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *교탁 앞에 담임선생님이 서 있다. 20대 후반. 가디건 단추는 처음부터 열려 있다. 표정은 무심한데 — 눈은 학생 하나하나를 훑고 있다.*

---

### `classroom_3`
- 배경: `room_school.png`
- 다음: `classroom_3_ins`

- 캐릭터: `teacher_normal.png`
**담임**: 자, 오늘부터 우리 반에 합류하는 전학생이야. 자기소개 해 볼까?

---

### `classroom_3_ins`
- 배경: `room_school.png`
- 다음: `classroom_4`

- 캐릭터: `teacher_normal.png`
**{name}**: *목소리가 건조하다. 감정 과잉이 아니라, 딱 필요한 만큼만 담긴 톤. — 의외로 싫지 않다.*

---

### `classroom_4`
- 배경: `room_school.png`
- 다음: `classroom_5`

- 캐릭터: `teacher_normal.png`
**{name}**: {name}입니다. 잘 부탁드립니다.

---

### `classroom_5`
- 배경: `room_school.png`
- 다음: `classroom_5_ins`

- 캐릭터: `teacher_normal.png`
**{name}**: *짧고 깔끔하게. 길게 말해봐야 좋을 거 없다.*

---

### `classroom_5_ins`
- 배경: `room_school.png`
- 다음: `classroom_5_ins2`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 고개를 끄덕인다. 뭔가 더 말하려다 — 멈추고, 교탁 위 출석부를 한 번 더 본다. 오른손이 주머니 속 볼펜을 만지작거리고 있다. 습관인 것 같다.*

---

### `classroom_5_ins2`
- 배경: `room_school.png`
- 다음: `classroom_5_ins3`

- 캐릭터: `teacher_normal.png`
**담임**: ...그래. {name}. 외울게. *작게, 거의 혼잣말처럼* 이름은 한 번에 외우는 주의거든.

---

### `classroom_5_ins3`
- 배경: `room_school.png`
- 다음: `classroom_6`

- 캐릭터: `teacher_normal.png`
**{name}**: *아무도 안 들었을 말이다. 나만 들었다. — 세심한 건가, 그냥 습관인 건가.*

---

### `classroom_6`
- 배경: `room_school.png`
- 다음: `classroom_dain_1`

- 캐릭터: `teacher_normal.png`
**{name}**: *교실 한쪽에서 휘파람 소리.*

---

### `classroom_dain_1`
- 배경: `room_school.png`
- 다음: `classroom_dain_2`

- 캐릭터: `dain_normal.png`
**다인**: 오! 남자 전학생이다. 드디어.

---

### `classroom_dain_2`
- 배경: `room_school.png`
- 다음: `classroom_dain_3`

- 캐릭터: `dain_normal.png`
**{name}**: *갈색 숏컷. 배구부 유니폼 차림. 에너지가 넘치는 목소리. 자리에서 반쯤 일어나 있다. 옆자리 애가 잡아당겨도 소용없다.*

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
**다인**: 아 쌤, 그냥 이게 제일 편하단 말이에요. 아무튼 전학생 반가워!

---

### `classroom_dain_5`
- 배경: `room_school.png`
- 다음: `classroom_dain_5_ins`

- 캐릭터: `dain_normal.png`
**{name}**: *볼륨 조절이 안 되는 타입이다. 근데 — 미워할 수가 없는 얼굴이다.*

---

### `classroom_dain_5_ins`
- 배경: `room_school.png`
- 다음: `classroom_dain_5_ins2`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 한숨을 살짝 쉰다. 한심하다는 게 아니라, 익숙하다는 한숨이다.*

---

### `classroom_dain_5_ins2`
- 배경: `room_school.png`
- 다음: `classroom_dain_5_ins3`

- 캐릭터: `teacher_normal.png`
**담임**: ...에너지 좀 아껴. 아직 1교시도 안 시작했어.

---

### `classroom_dain_5_ins3`
- 배경: `room_school.png`
- 다음: `classroom_yuna_1`

- 캐릭터: `teacher_angry.png`
**{name}**: *건조하게 말하지만 입꼬리가 미세하게 올라가 있다. 이 사람, 무표정이 기본값인데 가끔 버그가 난다.*

---

### `classroom_yuna_1`
- 배경: `room_school.png`
- 다음: `classroom_yuna_2`

- 캐릭터: `yuna_bored.png`
**{name}**: *시선을 돌리니, 창가 맨 뒤쪽에 한 여학생이 턱을 괸 채 창밖을 보고 있다. 자기소개에 관심이 없는 것 같다.*

---

### `classroom_yuna_2`
- 배경: `room_school.png`
- 다음: `classroom_yuna_3`

- 캐릭터: `yuna_bored.png`
**{name}**: *은백색 머리. 붉은 눈이 나른하게 반쯤 감겨 있다. 팔에 타투가 빼곡하다. — 이쪽을 쳐다보지도 않는다. 전학생이 뭐 대수냐는 듯이.*

---

### `classroom_yuna_3`
- 배경: `room_school.png`
- 다음: `classroom_yuna_4`

- 캐릭터: `yuna_bored.png`
**{name}**: *주변 학생들이 유나 쪽으로 시선을 주지 않는다. 의도적으로. 마치 그 자리에 아무도 없는 것처럼.*

---

### `classroom_yuna_4`
- 배경: `room_school.png`
- 다음: `classroom_seat_1`

- 캐릭터: `yuna_bored.png`
**{name}**: *앞줄에서 누군가 속삭인다. '...쟤한테 말 걸지 마, 무섭거든.' — 유나의 귀에 안 들렸을 리 없는 거리다. 근데 표정이 안 변한다. 익숙한 거다.*

---

### `classroom_seat_1`
- 배경: `room_school.png`
- 다음: `classroom_seat_2`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 빈자리를 가리킨다.*

---

### `classroom_seat_2`
- 배경: `room_school.png`
- 다음: `classroom_minsu_1`

- 캐릭터: `dain_normal.png`
**{name}**: *다인 옆자리다. 살았다 — 인지 죽었다 — 인지는 모르겠지만, 적어도 조용하지는 않겠다.*

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
- 다음: `classroom_minsu_2_ins`

- 캐릭터: `minsu_smirk.png`
**{name}**: 뭘?

---

### `classroom_minsu_2_ins`
- 배경: `room_school.png`
- 다음: `classroom_dain_talk_1`

- 캐릭터: `minsu_normal.png`
**민수**: *다인 쪽을 턱짓하며* 체력 관리.

---

### `classroom_dain_talk_1`
- 배경: `room_school.png`
- 다음: `classroom_dain_talk_2`

- 캐릭터: `minsu_normal.png`
**{name}**: *이 학교에도 상식인이 있구나. — 앞자리 이름표에 '민수'라고 적혀 있다.*

---

### `classroom_dain_talk_2`
- 배경: `room_school.png`
- 다음: `classroom_dain_talk_3`

- 캐릭터: `dain_normal.png`
**{name}**: *자리에 앉자마자 다인이 상체를 기울인다. 거리 개념이 없다.*

---

### `classroom_dain_talk_3`
- 배경: `room_school.png`
- 다음: `classroom_dain_talk_4`

- 캐릭터: `dain_normal.png`
**다인**: 야, {name}! 운동 좋아해?!

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
**다인**: 아 그냥! 방과후에 체육관 같이 갈 사람 없어서! 공 던져줄 사람 필요하거든!

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
**다인**: ㅋㅋㅋㅋ 볼 머신보다는 낫지 않을까! 아마!

---

### `classroom_dain_talk_8`
- 배경: `room_school.png`
- 다음: `classroom_yuna_note_1`

- 캐릭터: `dain_laugh.png`
**{name}**: *'아마'가 붙었다. 볼 머신보다 나을 수도 있다는 뜻이다. 포지션이 위험하다.*

---

### `classroom_yuna_note_1`
- 배경: `room_school.png`
- 다음: `classroom_yuna_note_2`

- 캐릭터: `yuna_bored.png`
**{name}**: *쪽지가 하나 날아온다. 접힌 쪽지. — 뒤를 돌아보니 창가 자리의 은백색 머리 여학생이 다시 창밖을 보고 있다. 타투가 빼곡한 팔과 달리 — 쪽지의 글씨는 깔끔하다.*

---

### `classroom_yuna_note_2`
- 배경: `room_school.png`
- 다음: `classroom_yuna_note_3`

- 캐릭터: `yuna_bored.png`
**{name}**: *쪽지를 편다.*

---

### `classroom_yuna_note_3`
- 배경: `room_school.png`
- 다음: `classroom_yuna_note_4`

- 캐릭터: `yuna_bored.png`
**{name}**: *'시끄러운 자리 걸렸네. — 유나'*

---

### `classroom_yuna_note_4`
- 배경: `room_school.png`
- 다음: `classroom_yuna_note_5`

- 캐릭터: `yuna_bored.png`
**{name}**: *연보라색 잉크. — 긴장이 조금 풀린다.*

---

### `classroom_yuna_note_5`
- 배경: `room_school.png`
- 다음: `classroom_yuna_note_5_ins`

- 캐릭터: `yuna_bored.png`
**{name}**: *유나 쪽을 보자, 여전히 창밖을 보고 있다. 하지만 귀끝이 살짝 움직인 것 같다.*

---

### `classroom_yuna_note_5_ins`
- 배경: `room_school.png`
- 다음: `classroom_yuna_note_6`

- 캐릭터: `yuna_bored.png`
**{name}**: *관심 없는 척인지 진짜 관심 없는 건지. — 재밌다. 근데 이상한 건, 내 이름을 이미 알고 있다는 거다. 자기소개 때 딴 곳을 보고 있었는데. — 듣고 있었구나.*

---

### `classroom_yuna_note_6`
- 배경: `room_school.png`
- 플래그: `met_dain`, `met_yuna`
- 다음: `lunch_start`

- 캐릭터: `yuna_bored.png`
**{name}**: *관심 없는 척하는 건지, 진짜 관심 없는 건지. — 왠지 전자인 것 같다.*

---

## 1일차 — 점심 `day1_2_lunch`

### `lunch_start`
- 배경: `school_hallway.png`
- BGM: `daily.mp3`
- 다음: `lunch_start_2`

- 캐릭터: `없음`
**{name}**: *점심시간. 종이 울렸다.*

---

### `lunch_start_2`
- 배경: `school_hallway.png`
- 다음: `lunch_start_3`

- 캐릭터: `없음`
**{name}**: *교실을 나서니 복도가 학생들로 가득하다. 어디 가야 할지 모르겠다. 학식? 매점? 아니면 —*

---

### `lunch_start_3`
- 배경: `school_hallway.png`
- 다음: `lunch_start_4`

- 캐릭터: `없음`
**{name}**: *세 방향에서 동시에 신호가 온다.*

---

### `lunch_start_4`
- 배경: `school_hallway.png`
- 다음: `lunch_start_4_ins`

- 캐릭터: `seyoun_normal.png`
**{name}**: *복도 끝에서 서연이 눈을 마주치고 손짓한다. 옥상 쪽을 가리키며.*

---

### `lunch_start_4_ins`
- 배경: `school_hallway.png`
- 다음: `lunch_start_5`

- 캐릭터: `dain_normal.png`
**{name}**: *옆에서 다인이 팔을 잡는다.*

---

### `lunch_start_5`
- 배경: `school_hallway.png`
- 다음: `lunch_start_6`

- 캐릭터: `dain_normal.png`
**다인**: 야! 밥 먹었어?! 매점 가자! 빵 내기하자, 진 사람이 사는 거!

---

### `lunch_start_6`
- 배경: `school_hallway.png`
- 다음: `lunch_start_7`

- 캐릭터: `yuna_normal.png`
**{name}**: *그리고 유나가 가방만 들고 조용히 교실을 빠져나간다. 도서관 방향.*

---

### `lunch_start_7`
- 배경: `school_hallway.png`
- 다음: `lunch_start_7b`

- 캐릭터: `없음`
**{name}**: *세 갈래 길. 첫날부터 이런 선택이라니.*

---

### `lunch_start_7b`
- 배경: `school_hallway.png`
- 다음: `lunch_choice`

- 캐릭터: `없음`
**{name}**: *전 학교에서는 선택을 안 했다. 정확히는, 선택을 미루다가 타이밍을 놓쳤다. — 아, 또 이 생각. 입은 능글맞게 움직이는데, 정작 중요한 순간에는 굳어버리는 이 패턴. 나 자신이 제일 한심하다.*

---

### `lunch_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "서연을 따라 옥상으로" → `lunch_seo_1` | 플래그: `chose_seoyeon_lunch`, `ate_lunch_seoyeon`
  2. "다인과 매점으로" → `lunch_dain_1` | 플래그: `chose_dain_lunch`
  3. "유나를 따라 도서관으로" → `lunch_yuna_1` | 플래그: `chose_yuna_lunch`

- 캐릭터: `없음`
**{name}**: *누구를 따라갈까?*

---

### `lunch_seo_1`
- 배경: `top_school.png`
- BGM: `sunset1.mp3`
- 호감분기: Seoyeon
  - [5+] → `lunch_seo_1_aff_high`
  - [기본] → `lunch_seo_1_aff_default`
- 다음: `lunch_seo_1_aff_default`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 옥상 문을 열쇠로 연다. 바람이 확 불어온다.*

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
**{name}**: *옥상은 깨끗하다. 한쪽에 화분 몇 개와 접이식 의자. 누군가 관리하는 게 분명하다.*

---

### `lunch_seo_3`
- 배경: `top_school.png`
- 스탯: Seoyeon +10
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
**서연**: 함부로 데려오는 거 아닌데. *의자를 하나 펼치며* 오늘은 특별히.

---

### `lunch_seo_6`
- 배경: `top_school.png`
- 다음: `lunch_seo_6_ins`

- 캐릭터: `seyoun_normal.png`
**{name}**: 첫날부터 특별 대우? 뭔가 수상한데.

---

### `lunch_seo_6_ins`
- 배경: `top_school.png`
- 다음: `lunch_seo_8`

- 캐릭터: `seyoun_laugh.png`
**서연**: *미소* 의심이 많네. 그냥 바람이 좋아서야.

---

### `lunch_seo_8`
- 배경: `top_school.png`
- 다음: `lunch_seo_9`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *서연이 가방에서 도시락을 꺼낸다. 깔끔하게 포장된 2인분.*

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
**서연**: 눈치 빠른 건 아까 확인했으니까.

---

### `lunch_seo_11`
- 배경: `top_school.png`
- 다음: `lunch_seo_12`

- 캐릭터: `seyoun_normal.png`
**{name}**: *처음부터 같이 먹을 생각이었구나.*

---

### `lunch_seo_12`
- 배경: `top_school.png`
- 다음: `lunch_seo_13`

- 캐릭터: `seyoun_normal.png`
**{name}**: *도시락을 열자 정성스러운 반찬이 나온다. 계란말이, 소시지, 미니 주먹밥.*

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
**서연**: 학생회장은 만능이어야 하니까.

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
- 다음: `lunch_seo_18`

- 캐릭터: `seyoun_normal.png`
**{name}**: *질문을 씹는 방식이 능숙하다. — 왜 이렇게 벽이 두꺼운 사람한테 신경이 쓰이지.*

---

### `lunch_seo_18`
- 배경: `top_school.png`
- 다음: `lunch_seo_19`

- 캐릭터: `seyoun_normal.png`
**{name}**: *잠시 먹는다. 바람이 좋다. 옥상에서 보는 학교 풍경이 — 생각보다 넓다.*

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
**서연**: *피식* 학교를 물었는데 밥을 답하네.

---

### `lunch_seo_22`
- 배경: `top_school.png`
- 다음: `lunch_seo_23`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *서연이 계란말이를 집어 내민다.*

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
**{name}**: *서연이 계란말이를 내밀고 있다.*

---

### `lunch_seo_c1_1`
- 배경: `top_school.png`
- 다음: `lunch_seo_c1_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연의 젓가락에서 계란말이를 받아먹는다.*

---

### `lunch_seo_c1_2`
- 배경: `top_school.png`
- 다음: `lunch_seo_c1_2_ins`

- 캐릭터: `seyoun_normal.png`
**{name}**: ...맛있다.

---

### `lunch_seo_c1_2_ins`
- 배경: `top_school.png`
- 다음: `lunch_seo_c1_3`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 고개를 살짝 돌린다. 귀가 빨갛다.*

---

### `lunch_seo_c1_3`
- 배경: `top_school.png`
- 다음: `lunch_seo_c1_3_ins`

- 캐릭터: `seyoun_shy.png`
**서연**: ...당연하지.

---

### `lunch_seo_c1_3_ins`
- 배경: `top_school.png`
- 다음: `lunch_seo_after`

- 캐릭터: `seyoun_shy.png`
**{name}**: *방금 귀 빨개진 거 맞지? — 바람 때문인가.*

---

### `lunch_seo_c2_1`
- 배경: `top_school.png`
- 다음: `lunch_seo_c2_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 계란말이를 자기 입에 넣는다. 천천히 씹으며.*

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
**{name}**: *여유로운 척하지만, 살짝 삐친 것 같기도 하다.*

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
**서연**: 다음에 또 올래?

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
- 다음: `lunch_seo_after_6`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연다운 말이다. 초대가 아니라 허가. — 근데 왜 웃고 있지.*

---

### `lunch_seo_after_6`
- 배경: `top_school.png`
- 다음: `lunch_seo_after_7`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 도시락을 정리하며 — 새끼손가락으로 머리카락을 넘긴다. 무의식적인 습관인 것 같다.*

---

### `lunch_seo_after_7`
- 배경: `top_school.png`
- 다음: `lunch_seo_freetalk`

- 캐릭터: `seyoun_normal.png`
**{name}**: *새끼손가락. — 별거 아닌 건데, 괜히 눈이 간다.*

---

### `lunch_seo_freetalk`
- 배경: `top_school.png`
- 타입: `free_talk`
- 다음: `lunch_end`
- 컨텍스트: "첫날 점심, 옥상에서 서연과 도시락을 먹은 직후. 첫 만남이라 아직 서먹하지만 호기심이 있는 상태. 톤: 밝고 가벼운 대화. 첫날의 설렘과 호기심. 무거운 이야기는 절대 하지 않는다. 장난과 티키타카 위주."
- 성격: "서연은 쿨뷰티 학생회장. 여유 있고 능글맞으며 직설적. 관심 있으면 행동으로 보여주는 타입."

- 캐릭터: `seyoun_normal.png`
**서연**: *서연이와 옥상에서 나란히 앉아 있다. 바람이 좋다.*

---

### `lunch_dain_1`
- 배경: `store.png`
- BGM: `daily2.mp3`
- 다음: `lunch_dain_1_aff_default`

- 캐릭터: `dain_laugh.png`
**다인**: 자, 도착! 여기가 매점이야. 뭐 먹을지 골라봐!

---

### `lunch_dain_1_aff_default`
- 배경: `store.png`
- 다음: `lunch_dain_2`

- 캐릭터: `dain_normal.png`
**다인**: *매점 안은 점심시간이라 북적거린다. 빵 냄새랑 우유 냄새가 뒤섞여 있다.*

---

### `lunch_dain_2`
- 배경: `store.png`
- 스탯: Dain +12
- 다음: `lunch_dain_3`

- 캐릭터: `dain_normal.png`
**다인**: 소보로빵이랑 딸기우유 조합 진짜 맛있어. 믿어봐!

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
**다인**: 가위바위보! 당연하지!

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
**다인**: 안 할 거야?! 그럼 네가 사는 거다?!

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
**다인**: ...어?! 졌다?! 한 판 더!!

---

### `lunch_dain_12`
- 배경: `store.png`
- 다음: `lunch_dain_12_ins`

- 캐릭터: `dain_pout.png`
**{name}**: 약속은 약속이지.

---

### `lunch_dain_12_ins`
- 배경: `store.png`
- 다음: `lunch_dain_14`

- 캐릭터: `dain_pout.png`
**다인**: 으으으 알겠어!! 소보로 두 개!! 아줌마!!

---

### `lunch_dain_14`
- 배경: `store.png`
- 다음: `lunch_dain_15`

- 캐릭터: `dain_pout.png`
**{name}**: *다인이 투덜거리며 빵을 산다. 하지만 입꼬리가 올라가 있다.*

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
**다인**: 아니, 나 감당하려면 체력이 좀 있어야 해서! ㅋㅋ

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
**다인**: 뭐?! PR이 뭔데!

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
**{name}**: *다인의 눈이 반짝인다.*

---

### `lunch_dain_23`
- 배경: `store.png`
- 다음: `lunch_dain_choice`

- 캐릭터: `dain_laugh.png`
**다인**: 오 그거 알아?! 너 운동 좀 아는 거 아냐?!

---

### `lunch_dain_choice`
- 배경: `store.png`
- 선택지:
  1. "조금은. 알려줄 수 있어?" → `lunch_dain_c1_1` | Dain +7
  2. "아는 척한 거야." → `lunch_dain_c2_1` | Dain +3

- 캐릭터: `dain_laugh.png`
**{name}**: *다인이 기대에 찬 눈으로 바라보고 있다.*

---

### `lunch_dain_c1_1`
- 배경: `store.png`
- 다음: `lunch_dain_c1_2`

- 캐릭터: `dain_laugh.png`
**다인**: ㅋㅋㅋ 좋아!! 내가 다 알려줄게! 방과후에 체육관 콜?!

---

### `lunch_dain_c1_2`
- 배경: `store.png`
- 다음: `lunch_dain_after`

- 캐릭터: `dain_laugh.png`
**{name}**: *눈이 반달 모양이 된다. — 이 웃음은 좀 반칙이다.*

---

### `lunch_dain_c2_1`
- 배경: `store.png`
- 다음: `lunch_dain_after`

- 캐릭터: `dain_laugh.png`
**다인**: 에이, 그래도 관심은 있는 거잖아! 오늘 방과후 체육관 와봐! 후회 안 할걸!

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
**다인**: 야, {name}!

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
**다인**: 전학 와서 처음 같이 밥 먹은 사람이 나다? 기억해!

---

### `lunch_dain_after_5`
- 배경: `store.png`
- 다음: `lunch_dain_after_6`

- 캐릭터: `dain_normal.png`
**{name}**: *씩 웃으며 주먹으로 어깨를 툭 친다.*

---

### `lunch_dain_after_6`
- 배경: `store.png`
- 다음: `lunch_dain_freetalk`

- 캐릭터: `dain_normal.png`
**{name}**: *왜 그걸 기억해야 하는지 모르겠지만, 하도 진지하게 말해서 고개를 끄덕였다.*

---

### `lunch_dain_freetalk`
- 배경: `store.png`
- 타입: `free_talk`
- 다음: `lunch_end`
- 컨텍스트: "첫날 점심, 매점에서 다인과 빵을 먹은 직후. 가위바위보 내기를 했고 다인이 졌다. 톤: 밝고 가벼운 대화. 첫날의 설렘과 호기심. 무거운 이야기는 절대 하지 않는다. 장난과 티키타카 위주."
- 성격: "다인은 에너지 넘치는 체육계. 스킨십 좋아하고 느낌표가 많다. 털털하지만 속은 여림."

- 캐릭터: `dain_normal.png`
**다인**: *다인이와 매점 벤치에 앉아 빵을 먹고 있다.*

---

### `lunch_yuna_1`
- 배경: `library_old.png`
- BGM: `night1.mp3`
- 다음: `lunch_yuna_1_aff_default`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나의 뒷모습을 따라 도서관으로 들어간다. 점심시간에 여기 오는 사람은 거의 없는 것 같다.*

---

### `lunch_yuna_1_aff_default`
- 배경: `library_old.png`
- 다음: `lunch_yuna_2`

- 캐릭터: `yuna_normal.png`
**유나**: *"..." 쪽지도 없이 자리에 앉아 있다.*

---

### `lunch_yuna_2`
- 배경: `library_old.png`
- 다음: `lunch_yuna_3`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 열람실 구석 자리에 앉는다. 책을 펼친다. 내가 따라온 걸 알고 있는지 모르겠다.*

---

### `lunch_yuna_3`
- 배경: `library_old.png`
- 다음: `lunch_yuna_4`

- 캐릭터: `yuna_normal.png`
**{name}**: *조심스럽게 맞은편에 앉는다.*

---

### `lunch_yuna_4`
- 배경: `library_old.png`
- 스탯: Yuna +12
- 다음: `lunch_yuna_5`

- 캐릭터: `yuna_normal.png`
**유나**: ......

---

### `lunch_yuna_5`
- 배경: `library_old.png`
- 다음: `lunch_yuna_5_ins`

- 캐릭터: `yuna_normal.png`
**{name}**: *5초. 10초. — 아무 말이 없다.*

---

### `lunch_yuna_5_ins`
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
- 다음: `lunch_yuna_9`

- 캐릭터: `yuna_normal.png`
**{name}**: *허락인가? 허락 같다. — 조건부 허락.*

---

### `lunch_yuna_9`
- 배경: `library_old.png`
- 다음: `lunch_yuna_10`

- 캐릭터: `yuna_normal.png`
**{name}**: *침묵이 흐른다. 유나는 책을 읽고 있다. 나는 할 게 없어서 서가를 둘러본다.*

---

### `lunch_yuna_10`
- 배경: `library_old.png`
- 다음: `lunch_yuna_10_ins`

- 캐릭터: `yuna_normal.png`
**{name}**: *점심시간에 도서관에서 말 한마디 없이 앉아 있는데 — 불편하지가 않다. 오히려 편하다.*

---

### `lunch_yuna_10_ins`
- 배경: `library_old.png`
- 다음: `lunch_yuna_11`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나의 책상에 뭔가 끼워져 있다. 오래된 책갈피. 글씨가 적혀 있는데 — 잘 안 보인다. 유나가 무의식적으로 그 책갈피 위에 손을 올려놓는다. 소중한 건가.*

---

### `lunch_yuna_11`
- 배경: `library_old.png`
- 다음: `lunch_yuna_12`

- 캐릭터: `yuna_normal.png`
**{name}**: *서가에서 아무 책이나 꺼내 펼친다.*

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
- 다음: `lunch_yuna_19`

- 캐릭터: `yuna_normal.png`
**{name}**: *문장이 짧다. 근데 차가운 게 아니라, 말을 아끼는 느낌이다.*

---

### `lunch_yuna_19`
- 배경: `library_old.png`
- 다음: `lunch_yuna_20`

- 캐릭터: `yuna_normal.png`
**{name}**: *잠시 읽는다. 꽤 재밌다.*

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
**유나**: 좋았어.

---

### `lunch_yuna_25`
- 배경: `library_old.png`
- 다음: `lunch_yuna_26`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 먼저 일어나 걸어간다. 뒤돌아보지 않는다.*

---

### `lunch_yuna_26`
- 배경: `library_old.png`
- 다음: `lunch_yuna_choice`

- 캐릭터: `yuna_normal.png`
**{name}**: *'좋았어.' — 그 한마디에 괜히 기분이 좋아진다. 이 사람은 말이 적은 만큼 무겁다.*

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
- 컨텍스트: "첫날 점심, 도서관에서 유나와 함께 시간을 보낸 직후. 조용한 시간이 좋았다. 톤: 밝고 가벼운 대화. 첫날의 설렘과 호기심. 무거운 이야기는 절대 하지 않는다. 장난과 티키타카 위주."
- 성격: "유나는 신비주의 문학소녀. 말이 짧고 건조하지만 마음이 열리면 문장이 길어진다. 쪽지로 소통하는 타입."

- 캐릭터: `yuna_normal.png`
**유나**: *유나와 도서관에서 나란히 책을 읽고 있다. 조용하지만 불편하지 않다.*

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
- 다음: `after_start_2`

- 캐릭터: `없음`
**{name}**: *방과후. 학교를 좀 둘러보기로 했다. 아직 구조를 잘 모르니까.*

---

### `after_start_2`
- 배경: `school_hallway.png`
- 다음: `after_kakao_1`

- 캐릭터: `없음`
**{name}**: *복도를 걷는다. 핸드폰이 진동한다. — 이전 학교 단체 카톡방.*

---

### `after_kakao_1`
- 배경: `school_hallway.png`
- 다음: `after_kakao_2`

- 캐릭터: `없음`
**{name}**: *'소정이 남친이랑 벚꽃 사진 올렸다 ㅋㅋ'*

---

### `after_kakao_2`
- 배경: `school_hallway.png`
- 다음: `after_kakao_3`

- 캐릭터: `없음`
**{name}**: *핸드폰을 주머니에 넣었다.*

---

### `after_kakao_3`
- 배경: `school_hallway.png`
- 다음: `after_kakao_4`

- 캐릭터: `없음`
**{name}**: *...아.*

---

### `after_kakao_4`
- 배경: `school_hallway.png`
- 다음: `after_kakao_5`

- 캐릭터: `없음`
**{name}**: *괜찮다. 진짜로. 이미 지난 일이다. 고백도 못 하고 끝난 거잖아. 미련이 아니라 후회다. — 그때 말했으면 어땠을까. 차였어도 이렇게 찜찜하지는 않았을 텐데.*

---

### `after_kakao_5`
- 배경: `school_hallway.png`
- 다음: `after_kakao_end`

- 캐릭터: `없음`
**{name}**: *이 학교에서는 — 하고 싶은 말은 하자. 이번에는.*

---

### `after_kakao_end`
- 배경: `school_hallway.png`
- 분기:
  - [`chose_seoyeon_lunch`] → `after1_jealousy_seo_1`
  - [`chose_dain_lunch`] → `after1_jealousy_dain_1`
  - [`chose_yuna_lunch`] → `after1_jealousy_yuna_1`
  - [기본] → `after1_pre_miss`

- 캐릭터: `없음`
**{name}**: *핸드폰을 다시 꺼내서 단체방을 나갔다. 정리 끝. — 이제 이 학교 사람이다.*

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
**{name}**: *...뭐라고 하지. 서연이랑 같이 있었다고 하면 괜히 이상해질 것 같은데.*

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
**{name}**: *다인의 목소리가 살짝 높아졌다.*

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
- 다음: `after1_jealousy_seo_yuna_2`

- 캐릭터: `dain_normal.png`
**{name}**: *가방 옆주머니를 만지다 종이 모서리에 손끝이 걸린다. 접힌 쪽지다. 언제 넣어둔 건지 모르겠다. 유나의 필체.*

---

### `after1_jealousy_seo_yuna_2`
- 배경: `school_hallway.png`
- 다음: `after1_pre_miss`

- 캐릭터: `dain_normal.png`
**{name}**: *'점심때 옥상에서 봤어. ...학생회장이랑 사이 좋아 보였어.' — 끝에 점이 세 개. 하고 싶은 말을 삼켰다는 뜻이다.*

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
**{name}**: *웃고 있다. 손가락이 클립보드를 두드리고 있다. — 가슴이 뜨끔했다.*

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
**다인**: 앗 위험!!

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
**다인**: 오! 반사신경 좋은데?!

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
- 다음: `after_miss_dain_6_ins`

- 캐릭터: `dain_laugh.png`
**다인**: 늦었거든! 체육관 가야 해! — 아 너 내일 봐! 전학생!

---

### `after_miss_dain_6_ins`
- 배경: `school_hallway.png`
- 다음: `after_miss_dain_7`

- 캐릭터: `dain_laugh.png`
**{name}**: *손을 흔들며 뛰어간다. — 급정거할 때 오른쪽 다리를 살짝 끌었다. 아닌가? 너무 빨라서 잘 안 보였다.*

---

### `after_miss_dain_7`
- 배경: `school_hallway.png`
- 플래그: `met_dain`
- 분기:
  - [`met_yuna`] → `after_yuna_skip`
  - [기본] → `after_miss_yuna_1`

- 캐릭터: `dain_laugh.png`
**{name}**: *손을 흔들며 뛰어간다. 폭풍 같은 여자다. 아까 담임이 불렀던 이름 — 다인. 벌써 반말이다.*

---

### `after_yuna_skip`
- 배경: `school_hallway.png`
- 분기:
  - [`ate_lunch_seoyeon`] → `after_end`
  - [`chose_seoyeon_lunch`] → `after_end`
  - [`chose_dain_lunch`] → `after_end`
  - [기본] → `after_miss_seoyeon_1`

<!-- i18n -->

---

### `after_miss_yuna_1`
- 배경: `library_old.png`
- 제외조건: `met_yuna`
- 다음: `after_miss_yuna_1_ins`

- 캐릭터: `yuna_normal.png`
**{name}**: *도서관 앞을 지나가는데, 붉은 눈의 여학생이 책을 읽으며 걸어가고 있다. 팔의 타투가 눈에 띈다 — 그런데 책을 들고 있는 모습은 의외로 조용하다.*

---

### `after_miss_yuna_1_ins`
- 배경: `library_old.png`
- 다음: `after_miss_yuna_1_ins2`

- 캐릭터: `yuna_normal.png`
**{name}**: 저기, 이거...

---

### `after_miss_yuna_1_ins2`
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
**{name}**: *— 책갈피가 떨어진다.* 저기, 이거...

---

### `after_miss_yuna_3`
- 배경: `library_old.png`
- 제외조건: `met_yuna`
- 다음: `after_miss_yuna_3_ins`

- 캐릭터: `yuna_normal.png`
**유나**: ......고마워.

---

### `after_miss_yuna_3_ins`
- 배경: `library_old.png`
- 다음: `after_miss_yuna_4`

- 캐릭터: `yuna_normal.png`
**{name}**: *그리고 다시 걸어간다.*

---

### `after_miss_yuna_4`
- 배경: `library_old.png`
- 플래그: `met_yuna`
- 분기:
  - [`ate_lunch_seoyeon`] → `after_end`
  - [`chose_seoyeon_lunch`] → `after_end`
  - [기본] → `after_miss_seoyeon_1`

- 캐릭터: `yuna_normal.png`
**{name}**: *그리고 다시 걸어간다. 그게 끝이다. 근데 — 뭔가 인상에 남는 사람이다.*

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
**서연**: 점심. 옥상 열어놨는데. 나 기다리게 하다니, 대담한 전학생이네.

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
- 제외조건: `ate_lunch_seoyeon`
- 다음: `after_miss_seoyeon_8`

- 캐릭터: `seyoun_normal.png`
**{name}**: *기다린 거 맞는 것 같다. — 미안하기도 하고, 이상하게 좀 웃기기도 하다.*

---

### `after_miss_seoyeon_8`
- 배경: `school_hallway.png`
- 제외조건: `ate_lunch_seoyeon`
- 다음: `after_end`

- 캐릭터: `seyoun_pout.png`
**서연**: 내일은 도망가지 마.

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
- 다음: `after_hidden_homeroom_3_ins`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이다. 가디건이 아까보다 더 흐트러져 있다. 하루 동안 전투를 치른 것 같다.*

---

### `after_hidden_homeroom_3_ins`
- 배경: `teacher_office.png`
- 다음: `after_hidden_homeroom_3_ins2`

- 캐릭터: `teacher_normal.png`
**{name}**: 아까 적응은 어떠냐고 하셨잖아요. 그냥... 그 말이 계속 남아서요.

---

### `after_hidden_homeroom_3_ins2`
- 배경: `teacher_office.png`
- 다음: `after_hidden_homeroom_4`

- 캐릭터: `teacher_normal.png`
**담임**: 아. 그거였어? — 잘 왔네. 잠깐만 앉아.

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
  1. "괜찮습니다. 생각보다 좋은 학교네요." → `after_homeroom_ok` | Teacher +0
  2. "솔직히 좀 정신없습니다." → `after_homeroom_honest_1` | Teacher +7

- 캐릭터: `teacher_normal.png`
**{name}**: *의무적인 질문인 것 같은데, 눈은 진심으로 살피고 있다.*

---

### `after_homeroom_ok`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_ok_ins`

- 캐릭터: `teacher_normal.png`
**담임**: 그래? 다행이다. — 뭐 힘든 거 있으면 교무실로 와. 선생님 일이니까.

---

### `after_homeroom_ok_ins`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_ok_2`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 책상 위 서류를 한쪽으로 밀어두고 다시 나를 본다. 금방 끝낼 줄 알았던 말이 조금 더 이어질 분위기다.*

---

### `after_homeroom_ok_2`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_ok_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *그냥 흘려보내는 인사치레는 아니었던 모양이다. 담임이 의자 등받이에 손을 얹은 채 잠깐 말을 고른다.*

---

### `after_homeroom_ok_3`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_ok_4`

- 캐릭터: `teacher_normal.png`
**담임**: 생각보다 좋은 학교라. — 그런 말 들으면 괜히 안심되네.

---

### `after_homeroom_ok_4`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_ok_5`

- 캐릭터: `teacher_normal.png`
**{name}**: *업무처럼 말하지만, 방금 말은 그것보다 조금 개인적이었다.*

---

### `after_homeroom_ok_5`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_ok_6`

- 캐릭터: `teacher_normal.png`
**담임**: 그래도 첫날은 첫날이니까. 너무 멀쩡한 척은 하지 마. 이제 들어가 봐.

---

### `after_homeroom_ok_6`
- 배경: `teacher_office.png`
- 다음: `night_start`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 다시 책상 쪽으로 몸을 돌린다. 짧게 인사하고 교무실 문을 닫는데, 방금 대화가 예상보다 오래 남는다. — 그냥 의무감만은 아니었다.*

---

### `after_homeroom_honest_1`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_2`

- 캐릭터: `teacher_normal.png`
**담임**: 정신없는 게 정상이야. 새 학교에 첫날인데 여유로우면 그게 더 이상한 거고.

---

### `after_homeroom_honest_2`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_3`

- 캐릭터: `teacher_normal.png`
**{name}**: 선생님도 전학 경험 있어요?

---

### `after_homeroom_honest_3`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_3_ins`

- 캐릭터: `teacher_normal.png`
**담임**: ...비슷한 거. 갑자기 새로운 곳에 던져진 적은 있지.

---

### `after_homeroom_honest_3_ins`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_4`

- 캐릭터: `teacher_normal.png`
**{name}**: *비슷한 거? — 교사 말고 다른 일을 했었다는 뜻인가.*

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
- 다음: `after_homeroom_honest_6_ins`

- 캐릭터: `teacher_normal.png`
**담임**: 교육적 관심이야, 뭐.

---

### `after_homeroom_honest_6_ins`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_choice2`

- 캐릭터: `teacher_normal.png`
**{name}**: *'교육적 관심'. — 자기 관심을 업무로 포장하는 사람이구나.*

---

### `after_homeroom_honest_choice2`
- 배경: `teacher_office.png`
- 선택지:
  1. "걱정이면 걱정이라고 하시면 되잖아요" → `after_homeroom_honest_choice2a` | Teacher +10
  2. "주스 기대할게요, 선생님" → `after_homeroom_honest_choice2b` | Teacher +3

- 캐릭터: `teacher_normal.png`
**{name}**: *교육적 관심. 이 사람은 자기 마음을 꼭 직함 뒤에 숨긴다.*

---

### `after_homeroom_honest_choice2a`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_choice2a_ins`

- 캐릭터: `teacher_shy.png`
**담임**: ...그래, 걱정이야. — 뭐, 티 났어?

---

### `after_homeroom_honest_choice2a_ins`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_7`

- 캐릭터: `teacher_shy.png`
**{name}**: *솔직하게 인정했다. — 이 사람의 포장이 벗겨지는 순간이 의외로 빠르다.*

---

### `after_homeroom_honest_choice2b`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_choice2b_ins`

- 캐릭터: `teacher_smile.png`
**담임**: *피식 웃는다.* 기대는 마. 자판기 주스야.

---

### `after_homeroom_honest_choice2b_ins`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_choice2b_ins2`

- 캐릭터: `teacher_smile.png`
**{name}**: *웃었다. — 이 사람이 농담에 웃는 건 처음 봤다.*

---

### `after_homeroom_honest_choice2b_ins2`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_7`

- 캐릭터: `teacher_smile.png`
**{name}**: *담임이 출석부를 덮고 자리에서 일어난다. 문턱까지 갔다가, 뒤늦게 떠오른 것처럼 다시 나를 부른다.*

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
- 다음: `after_homeroom_honest_9_ins`

- 캐릭터: `teacher_normal.png`
**담임**: 적응 못 하면 또 잡으러 올게.

---

### `after_homeroom_honest_9_ins`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_10`

- 캐릭터: `teacher_normal.png`
**{name}**: *아까 교실에서도 '이름은 한 번에 외우는 주의'라고 했었는데. — 두 번 말하는 건 뭔가.*

---

### `after_homeroom_honest_10`
- 배경: `school_hallway.png`
- 플래그: `homeroom_day1`
- 다음: `after_homeroom_freetalk`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 복도 끝으로 사라진다. 긴 머리카락이 흔들린다. — 괜히 오래 쳐다봤다.*

---

### `after_homeroom_freetalk`
- 배경: `school_hallway.png`
- 타입: `free_talk`
- 다음: `night_start`
- 컨텍스트: "Day 1 방과후. 전학 첫날 방과후에 담임이 적응 확인을 위해 불러세웠다. 주인공이 솔직하게 정신없다고 대답한 뒤의 대화. 톤: 밝고 가벼운 대화. 첫날의 설렘과 호기심. 무거운 이야기는 절대 하지 않는다. 장난과 티키타카 위주."
- 성격: "담임은 건조한 유머와 무뚝뚝함 뒤에 세심함을 숨기는 20대 후반 여자 교사. 갈색 웨이브 긴 머리에 베이지 가디건 차림. 자기 마음을 '업무'나 '교육적 관심'으로 포장하는 습관. 소설가 지망생이었던 과거가 있다."

- 캐릭터: `teacher_normal.png`
**담임**: *담임과 복도에서 대화 중.*

---

### `after_hidden_nurse_intro`
- 배경: `school_hallway.png`
- 다음: `after_hidden_nurse_intro_2`

- 캐릭터: `없음`
**{name}**: *복도를 걷는데 — 갑자기 머리가 살짝 핑 돈다. 첫날의 긴장 때문인가.*

---

### `after_hidden_nurse_intro_2`
- 배경: `school_hallway.png`
- 다음: `after_hidden_nurse_choice`

- 캐릭터: `없음`
**{name}**: *복도 한쪽에 '보건실' 표지판이 보인다. 그냥 참고 가기엔 조금 어지럽다.*

---

### `after_hidden_nurse_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "보건실에 들어간다" → `after_hidden_nurse_intro_ins`
  2. "그냥 집에 간다" → `after_nurse_skip` | Nurse +0

- 캐릭터: `없음`
**{name}**: *아침부터 쉴 틈 없이 사람을 만났으니까. 잠깐 쉬었다 가도 이상할 건 없다.*

---

### `after_hidden_nurse_intro_ins`
- 배경: `school_hallway.png`
- 다음: `after_hidden_nurse_intro_ins2`

- 캐릭터: `없음`
**{name}**: *문 앞에 서서 한 번 숨을 고른다. 들어가서 조금만 쉬자.*

---

### `after_hidden_nurse_intro_ins2`
- 배경: `school_hallway.png`
- 다음: `after_nurse_enter_1`

- 캐릭터: `없음`
**{name}**: *손잡이에 손을 얹는다. 차가운 금속 감촉이 손바닥에 닿는다.*

---

### `after_nurse_enter_1`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_2`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건실 문을 연다. 소독약 냄새가 은은하게 난다. 흰 커튼, 하얀 침대, 작은 책상. 책상에 여자가 앉아 있다. 하얀 가운, 목에 걸린 청진기. 보라빛 단발이 단정하게 정돈되어 있고, 안경 너머로 나를 보며 한 손으로 턱을 괴고 있다. 뭔가를 읽고 있었는데 — 고개를 든다.*

---

### `after_nurse_enter_2`
- 배경: `nurse_room.png`
- 스탯: Nurse +7
- 다음: `after_nurse_enter_2_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 오, 환자네.

---

### `after_nurse_enter_2_ins`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_3`

- 캐릭터: `nurse_normal.png`
**{name}**: *말투가 가볍다. 병원이 아니라 카페에 온 것 같은 톤.*

---

### `after_nurse_enter_3`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_4`

- 캐릭터: `nurse_normal.png`
**{name}**: 좀 어지러워서요.

---

### `after_nurse_enter_4`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_4_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 전학생이지? 첫날에 벌써 보건실이라니. 스트레스 받았구나~

---

### `after_nurse_enter_4_ins`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_4_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: 어떻게 알았어요?

---

### `after_nurse_enter_4_ins2`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_4_ins3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 교복이 뻣뻣하잖아. 풀 냄새도 나고. *킁킁* 아, 벚꽃 냄새도 섞여 있다. 로맨틱한 전학생이네.

---

### `after_nurse_enter_4_ins3`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_4_ins4`

- 캐릭터: `nurse_normal.png`
**{name}**: *페이스에 자꾸 말려든다. — 이 사람 페이스에.*

---

### `after_nurse_enter_4_ins4`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_5`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 일어나 다가온다. 동작이 매끄럽다. — 손이 닿자 괜히 긴장했다.*

---

### `after_nurse_enter_5`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_6`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 다가온다. 손이 이마에 올라온다.*

---

### `after_nurse_enter_6`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_6_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 열은 없고~... 혈압이 좀 낮을 수도 있겠다.

---

### `after_nurse_enter_6_ins`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_7`

- 캐릭터: `nurse_normal.png`
**{name}**: 이마를 만져보면 혈압을 알 수 있어요?

---

### `after_nurse_enter_7`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_7_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 열은 없는데... 긴장이 좀 풀려야겠다. 자, 여기 누워. 10분만 쉬어.

---

### `after_nurse_enter_7_ins`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_7_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: *침대에 누웠다. 천장이 하얗다.*

---

### `after_nurse_enter_7_ins2`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_7_ins3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *커튼을 반쯤 치며* 물 줄까? 아님 따뜻한 거?

---

### `after_nurse_enter_7_ins3`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_choice`

- 캐릭터: `nurse_normal.png`
**{name}**: 물이면 됩니다.

---

### `after_nurse_enter_choice`
- 배경: `nurse_room.png`
- 선택지:
  1. "선생님이 더 피곤해 보이는데요" → `after_nurse_enter_choice_a` | Nurse +10 | 플래그: `nurse_choice_a`
  2. "보건실, 의외로 아늑하네요" → `after_nurse_enter_choice_b` | Nurse +3 | 플래그: `nurse_choice_b`

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
- 다음: `after_nurse_enter_8_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 존댓말 너무 신경 쓰지 마. 보건실에서는 좀 편하게 있어도 돼. 아프면 다들 그러거든.

---

### `after_nurse_enter_8_ins`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_8_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: 선생님이시잖아요.

---

### `after_nurse_enter_8_ins2`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_8_ins3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *물컵을 건네며* 맞아, 선생님이지. 그래도 여기선 네가 편한 게 먼저야.

---

### `after_nurse_enter_8_ins3`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_9`

- 캐릭터: `nurse_normal.png`
**{name}**: *장난스럽게 말하지만, 긴장 풀어주려는 의도는 분명하다.*

---

### `after_nurse_enter_9`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_9_ins`

- 캐릭터: `nurse_normal.png`
**{name}**: *물을 마시며 보건실을 둘러본다. 한쪽 구석에 작은 화분이 하나.*

---

### `after_nurse_enter_9_ins`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_9_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: 저 화분, 선생님이 키우시는 거예요?

---

### `after_nurse_enter_9_ins2`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_9_ins3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 응, 로즈마리. — 병원에서 일할 때부터 키우던 거야.

---

### `after_nurse_enter_9_ins3`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_9_ins4`

- 캐릭터: `nurse_normal.png`
**{name}**: 병원이요?

---

### `after_nurse_enter_9_ins4`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_10`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 잠깐 멈춘다. 그리고 웃는다.*

---

### `after_nurse_enter_10`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_10_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 옛날 얘기~ 학교가 좋아. 여기선 다들 가벼운 상처만 가지고 오니까.

---

### `after_nurse_enter_10_ins`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_10_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: *'가벼운 상처만'. — 그 말에 안도가 묻어 있다.*

---

### `after_nurse_enter_10_ins2`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_10_ins3`

- 캐릭터: `nurse_normal.png`
**{name}**: *10분이 지났다. 일어난다.*

---

### `after_nurse_enter_10_ins3`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11`

- 캐릭터: `nurse_normal.png`
**{name}**: 감사합니다. 좀 나은 것 같아요.

---

### `after_nurse_enter_11`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 또 어지러우면 와도 돼~ 보건실은 항상 열려 있으니까. 대신 참다가 늦게 오지는 마. 신경 쓰이니까.

---

### `after_nurse_enter_11_ins`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: 신경 쓰이다니요?

---

### `after_nurse_enter_11_ins2`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_ins3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *눈을 가늘게 뜨며* 아픈데도 참고 다니다가 뒤늦게 오면 당연히 걱정되지. 내가 여기 있는 이유가 그거고.

---

### `after_nurse_enter_11_ins3`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_ins4`

- 캐릭터: `nurse_normal.png`
**{name}**: *가볍게 넘기는 말투였는데, 끝에는 의외로 단단한 진심이 남는다.*

---

### `after_nurse_enter_11_ins4`
- 배경: `nurse_room.png`
- 분기:
  - [`nurse_choice_a`] → `after_nurse_enter_11_ins5`
  - [`nurse_choice_b`] → `after_nurse_enter_11_ins7`
  - [기본] → `after_nurse_enter_11_ins9`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 어깨를 으쓱하고 다시 웃는다.*

---

### `after_nurse_enter_11_ins5`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_ins6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...눈치 빠른 환자네. 걱정하는 건 내 쪽인데.

---

### `after_nurse_enter_11_ins6`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_ins9`

- 캐릭터: `nurse_normal.png`
**{name}**: *환자에게 걱정을 돌려받는 게 조금 낯선 표정이다. — 늘 챙기는 쪽이었던 사람 같았다.*

---

### `after_nurse_enter_11_ins7`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_ins8`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그렇지? 여기 좋아. — 조용하고, 소독약 냄새 빼면 완벽해.

---

### `after_nurse_enter_11_ins8`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_ins9`

- 캐릭터: `nurse_normal.png`
**{name}**: *아늑하다는 말에 기분 좋은 듯 눈이 웃는다. — 이 공간이 이 사람한테는 안식처인 모양이다.*

---

### `after_nurse_enter_11_ins9`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_ins10`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건실을 나서는데 — 보건선생님이 뒤에서.*

---

### `after_nurse_enter_11_ins10`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_ins11`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 아, 전학생.

---

### `after_nurse_enter_11_ins11`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_ins12`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 이름이 뭐야?

---

### `after_nurse_enter_11_ins12`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_12`

- 캐릭터: `nurse_normal.png`
**{name}**: {name}입니다.

---

### `after_nurse_enter_12`
- 배경: `nurse_room.png`
- 플래그: `nurse_day1`
- 다음: `after_nurse_enter_12_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 다음에 또 아프면 — 아, 안 아픈 게 좋긴 하지.

---

### `after_nurse_enter_12_ins`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_12_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: *가볍게 웃으며 손을 흔든다. — 장난은 많지만, 사람을 안심시키는 데 익숙한 사람이다.*

---

### `after_nurse_enter_12_ins2`
- 배경: `nurse_room.png`
- 다음: `after_nurse_freetalk`

- 캐릭터: `nurse_normal.png`
**{name}**: *밴드 붙인 손등을 본다. — 이상한 보건실이었다. 나쁘지 않은 종류의 이상함.*

---

### `after_nurse_freetalk`
- 배경: `nurse_room.png`
- 타입: `free_talk`
- 다음: `night_start`
- 컨텍스트: "Day 1 방과후. 전학 첫날 어지러워서 보건실에 들렀다. 보건선생님이 장난스럽게 대하면서도 세심하게 챙겨준 뒤의 대화. 톤: 밝고 가벼운 대화. 첫날의 설렘과 호기심. 무거운 이야기는 절대 하지 않는다. 장난과 티키타카 위주."
- 성격: "보건선생님은 장난기 넘치고 능청스럽지만, 진심은 농담 뒤에 숨기는 여성이다. 대학병원 간호사 출신으로 번아웃을 겪고 학교로 왔다. 학생이 긴장하지 않게 먼저 분위기를 풀어 주는 편이다."

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님과 보건실에서 대화 중.*

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
- 다음: `night_start_2`

- 캐릭터: `없음`
**{name}**: *방에 돌아왔다. 침대에 누웠다.*

---

### `night_start_2`
- 배경: `room_my.png`
- 다음: `night_start_3`

- 캐릭터: `없음`
**{name}**: *첫날 치고는 — 진이 빠졌다. 근데 나쁘지 않다.*

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
**{name}**: *'서비스야'를 일부러 한 줄 띄어서 보냈다. — 웃음이 나온다.*

---

### `night_msg_yuna_1`
- 배경: `room_my.png`
- 다음: `night_msg_yuna_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *...오늘 조용히 있어줘서 좋았어*

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
**{name}**: *'자리 비워 놓을게'. — 유나한테 이건 최대한의 초대다. 가슴이 따뜻해진다.*

---

### `night_msg_dain_1`
- 배경: `room_my.png`
- 다음: `night_msg_dain_2`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: *가위바위보 리벤지 내일이다!!*

---

### `night_msg_dain_2`
- 배경: `room_my.png`
- 다음: `night_msg_dain_3`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: *도망가지 마ㅋㅋ*

---

### `night_msg_dain_3`
- 배경: `room_my.png`
- 다음: `night_msg_dain_4`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: *오늘 빵값 아직도 아깝다 아 진짜ㅋㅋㅋ*

---

### `night_msg_dain_4`
- 배경: `room_my.png`
- 다음: `night_hidden_check`

- 캐릭터: `dain_normal.png` @ 0.35
**{name}**: *세 줄 연속. 숨 좀 쉬고 보내면 안 되나.*

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
**{name}**: *학교 공지 앱에 담임선생님이 올린 글이 보인다. '3학년 2반 공지: 내일 1교시 수학 준비물 챙기기. — 그리고 {name}, 적응 잘하고 있으면 됐다.'*

---

### `night_hidden_homeroom_2`
- 배경: `room_my.png`
- 분기:
  - [`nurse_day1`] → `night_hidden_nurse_1`
  - [기본] → `night_late_transition`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *공지사항에 개인 메시지를? — 입꼬리가 올라간다. 숨기려는데 안 된다.*

---

### `night_hidden_nurse_1`
- 배경: `room_my.png`
- 다음: `night_hidden_nurse_2`

- 캐릭터: `nurse_normal.png` @ 0.35
**{name}**: *학교 건강 관리 앱에 알림이 와 있다. '보건실 기록: {name} — 어지러움 (경미). 메모: 내일도 증상 있으면 다시 와. 물 많이 마시고. — ♥은 의료적 관심입니다 ^^'*

---

### `night_hidden_nurse_2`
- 배경: `room_my.png`
- 다음: `night_late_transition`

- 캐릭터: `nurse_normal.png` @ 0.35
**{name}**: *의료적 관심에 하트를 붙이는 보건선생님이라니. 건강 기록에 이모티콘 쓰는 사람은 처음 본다.*

---

### `night_late_transition`
- 배경: `room_my.png`
- 다음: `night_late_transition_2`

- 캐릭터: `없음`
**{name}**: *잠들려는데 — 핸드폰이 한 번 더 울린다.*

---

### `night_late_transition_2`
- 배경: `room_my.png`
- 다음: `night_late_branch`

- 캐릭터: `없음`
**{name}**: *밤 11시. 누구지?*

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
- 다음: `night_seo_freetalk`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: *'찾으러 갈 거야'. — 핸드폰을 내려놓은 손이 멈춘다.*

---

### `night_seo_freetalk`
- 배경: `room_my.png`
- 타입: `free_talk`
- 다음: `night_end_1`
- 컨텍스트: "첫날 밤, 메신저로 서연과 연락 중. 서연이 먼저 연락을 해왔다. 톤: 밝고 가벼운 대화. 첫날의 설렘과 호기심. 무거운 이야기는 절대 하지 않는다. 장난과 티키타카 위주."
- 성격: "서연은 쿨뷰티 학생회장. 메시지도 여유롭고 능글맞다. 관심을 티 내지 않으려 하지만 먼저 연락한 게 이미 티."

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: *서연에게서 메시지가 왔다.*

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
**{name}**: *'...'만 보내고 끝이다. 뭔가 치다가 지운 흔적. — 그 지워진 말이 궁금해서 잠이 안 온다.*

---

### `night_yuna_late_3`
- 배경: `room_my.png`
- 다음: `night_yuna_late_4`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *— 답장을 할까 말까 고민하다가, 화면이 꺼졌다.*

---

### `night_yuna_late_4`
- 배경: `room_my.png`
- 다음: `night_yuna_freetalk`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *화면이 꺼진 뒤에도 한참을 들고 있었다.*

---

### `night_yuna_freetalk`
- 배경: `room_my.png`
- 타입: `free_talk`
- 다음: `night_end_1`
- 컨텍스트: "첫날 밤, 메신저로 유나와 연락 중. 유나가 먼저 연락을 해왔다. 톤: 밝고 가벼운 대화. 첫날의 설렘과 호기심. 무거운 이야기는 절대 하지 않는다. 장난과 티키타카 위주."
- 성격: "유나는 신비주의 문학소녀. 메시지도 짧고 암호 같다. 밤에 먼저 연락한 것 자체가 큰 의미."

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *유나에게서 짧은 메시지가 왔다.*

---

### `night_dain_late_1`
- 배경: `room_my.png`
- 다음: `night_dain_late_2`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: *야 아직 안 잤지?!*

---

### `night_dain_late_2`
- 배경: `room_my.png`
- 다음: `night_dain_late_3`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: *내일 아침 운동 같이 할 사람 구한다!*

---

### `night_dain_late_3`
- 배경: `room_my.png`
- 다음: `night_dain_late_4`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: *거절은 안 받음ㅋㅋ*

---

### `night_dain_late_4`
- 배경: `room_my.png`
- 다음: `night_dain_late_4_ins`

- 캐릭터: `dain_normal.png` @ 0.35
**{name}**: *이 사람은 거절이라는 개념이 없는 건가.*

---

### `night_dain_late_4_ins`
- 배경: `room_my.png`
- 다음: `night_dain_freetalk`

- 캐릭터: `dain_normal.png` @ 0.35
**{name}**: *메신저 알림 사이에 — 학교 공지 앱에 담임선생님이 올린 글이 보인다.*

---

### `night_dain_freetalk`
- 배경: `room_my.png`
- 타입: `free_talk`
- 다음: `night_end_1`
- 컨텍스트: "첫날 밤, 메신저로 다인과 연락 중. 다인이 먼저 연락을 해왔다. 톤: 밝고 가벼운 대화. 첫날의 설렘과 호기심. 무거운 이야기는 절대 하지 않는다. 장난과 티키타카 위주."
- 성격: "다인은 에너지 넘치는 체육계. 메시지도 느낌표 폭탄. 밤에도 텐션이 떨어지지 않는다."

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: *다인에게서 메시지 폭격이 시작됐다.*

---

### `night_end_1`
- 배경: `room_my.png`
- 다음: `night_end_2`

- 캐릭터: `없음`
**{name}**: *핸드폰을 내려놓았다.*

---

### `night_end_2`
- 배경: `room_my.png`
- 다음: `night_end_3`

- 캐릭터: `없음`
**{name}**: *천장을 본다. 벚꽃 냄새가 아직 교복에 남아 있다.*

---

### `night_end_3`
- 배경: `room_my.png`
- 다음: `night_end_4`

- 캐릭터: `없음`
**{name}**: *나쁘지 않은 첫날이었다.*

---

### `night_end_4`
- 배경: `room_my.png`
- 다음: `morning2_start`

- 캐릭터: `없음`
**{name}**: *내일은 — 좀 더 재밌을 것 같다.*

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
- 배경: `room_school.png`
- 다음: `morning2_greet_seo_2`

- 캐릭터: `seyoun_normal.png`
**서연**: 어제 옥상에서 한 말, 아직 유효한 거지?

---

### `morning2_greet_seo_2`
- 배경: `room_school.png`
- 다음: `morning2_greet_seo_others`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 먼저 다가왔다. 평소의 여유로운 톤인데, 어딘가 확인하려는 느낌.*

---

### `morning2_greet_seo_others`
- 배경: `room_school.png`
- 다음: `morning2_greet_seo_others_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *다인이 교실 뒤쪽에서 흘깃 본다. 고개를 돌린다. 유나는 책에 더 파묻힌다. 페이지를 넘기는 속도가 빨라진다.*

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
**{name}**: *다인이 뒤에서 어깨를 탁 친다. 이 사람의 스킨십에는 주저함이 없다.*

---

### `morning2_greet_dain_others`
- 배경: `room_school.png`
- 다음: `morning2_greet_dain_others_seo`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 클립보드를 넘기며 지나간다.*

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
**{name}**: *가볍게 웃으며 넘겼지만 — 서연의 한마디가 살짝 걸린다.*

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
- 다음: `morning2_seo_2`

- 캐릭터: `dain_normal.png`
**{name}**: *쪽지를 접어 손에 쥐었다. — 괜히 소중하게.*

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
**다인**: 왔어?! 좋은 아침!!

---

### `morning2_dain_3`
- 배경: `room_school.png`
- 다음: `morning2_dain_4`

- 캐릭터: `dain_laugh.png`
**다인**: ㅋㅋ 이 정도로?! 체력 관리 좀 해!

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
**{name}**: *아침 8시에 이 볼륨이 정상인 세계가 있다면, 거기에 다인이 대통령이겠지.*

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
- 다음: `morning2_seo_2`

- 캐릭터: `없음`
**{name}**: *쪽지를 주머니에 넣으려는데 — 복도에서 익숙한 목소리.*

---

### `morning2_seo_2`
- 배경: `room_school.png`
- 다음: `morning2_seo_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 어제 잘 잤어?

---

### `morning2_seo_3`
- 배경: `room_school.png`
- 다음: `morning2_seo_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 복도를 지나가며 교실 안을 힐끗 본다. 시선이 정확히 나를 겨냥한다.*

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
**서연**: 지나가는 길이야. — 오늘도 재밌는 하루 되길.

---

### `morning2_minsu_1`
- 배경: `room_school.png`
- 다음: `morning2_minsu_1_ins`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *걸음을 멈추지 않았다. 하지만 시선은 분명히 이쪽이었다.*

---

### `morning2_minsu_1_ins`
- 배경: `room_school.png`
- 다음: `morning2_minsu_1b`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *서연이 복도를 돌아가는 순간 — 뒤통수가 보이기 직전, 미소가 0.3초 내려간 것 같았다. 원래 표정으로 돌아가는 스위치. — 착각인가?*

---

### `morning2_minsu_1b`
- 배경: `room_school.png`
- 다음: `morning2_minsu_2`

- 캐릭터: `minsu_normal.png`
**{name}**: *서연이 사라진 복도를 바라보는데 — 뒤에서 의자 끄는 소리.*

---

### `morning2_minsu_2`
- 배경: `room_school.png`
- 다음: `morning2_minsu_3`

- 캐릭터: `minsu_normal.png`
**{name}**: *앞자리에서 민수가 돌아본다.*

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
**다인**: 아 내가 먼저 발견했으니까 우리 전학생이지! 선점이야 선점!

---

### `morning2_break_transition`
- 배경: `school_hallway.png`
- 분기:
  - [`homeroom_day1`] → `morning2_break_transition_ins`
  - [기본] → `morning2_break_1`

- 캐릭터: `없음`
**{name}**: *쉬는 시간. 복도로 나왔다.*

---

### `morning2_break_transition_ins`
- 배경: `school_hallway.png`
- 다음: `morning2_break_1`

- 캐릭터: `teacher_normal.png`
**{name}**: *교실 문 앞에 담임이 서 있다. 출석부를 들고, 문 쪽을 힐끗 보다가 — 나와 눈이 마주친다.*

---

### `morning2_break_1`
- 배경: `school_hallway.png`
- 다음: `morning2_seo_dust_1`

- 캐릭터: `없음`
**{name}**: *사람이 선점의 대상인가. — 근데 싫지 않다. 그게 좀 무섭다.*

---

### `hidden_homeroom_d2_1`
- 배경: `school_hallway.png`
- 다음: `hidden_homeroom_d2_1_ins`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 아, {name}. 잠깐 교무실로.

---

### `hidden_homeroom_d2_1_ins`
- 배경: `school_hallway.png`
- 다음: `hidden_homeroom_d2_1_ins2`

- 캐릭터: `teacher_normal.png`
**{name}**: 뭔가 문제라도...?

---

### `hidden_homeroom_d2_1_ins2`
- 배경: `school_hallway.png`
- 다음: `hidden_homeroom_d2_2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 아니, 전학 서류 확인이야. — 행정적인 거.

---

### `hidden_homeroom_d2_2`
- 배경: `school_hallway.png`
- 다음: `hidden_homeroom_d2_2_ins`

- 캐릭터: `teacher_normal.png`
**{name}**: *행정적인 거라고 한다. 이 사람은 자기 관심을 항상 업무로 포장한다.*

---

### `hidden_homeroom_d2_2_ins`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_walk`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임을 따라 교무실로 향했다.* *담임의 자리는 구석이다. 책상 위에 서류와 커피잔, 그리고 — 서랍이 살짝 열려 있다.*

---

### `hidden_homeroom_d2_walk`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임선생님을 따라 교무실로 들어갔다.*

---

### `hidden_homeroom_d2_3`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3_ins`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 전 학교 성적표 봤는데, 국어가 좋았네. 읽는 거 좋아해?

---

### `hidden_homeroom_d2_3_ins`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3_ins2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *잠깐 멈칫하며* ...여러 가지. 주로 — 소설.

---

### `hidden_homeroom_d2_3_ins2`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3_ins3`

- 캐릭터: `teacher_normal.png`
**{name}**: *소설. 국어 교사가 소설을 읽는 건 당연한데, 왜 말을 아끼는 느낌이지?*

---

### `hidden_homeroom_d2_3_ins3`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3_ins4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 읽는 거? — 쓰는 건?

---

### `hidden_homeroom_d2_3_ins4`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3_ins5`

- 캐릭터: `teacher_normal.png`
**{name}**: *이상한 질문이다. 국어 성적 얘기에서 왜 갑자기 '쓰는 거'를 물어보지?*

---

### `hidden_homeroom_d2_3_ins5`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3_ins6`

- 캐릭터: `teacher_normal.png`
**{name}**: 쓰는 건 잘 모르겠어요.

---

### `hidden_homeroom_d2_3_ins6`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_choice1`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임의 시선이 서랍 쪽으로 갔다가 — 바로 돌아온다.*

---

### `hidden_homeroom_d2_choice1`
- 배경: `teacher_office.png`
- 선택지:
  1. "선생님은요? 뭐 읽으세요?" → `hidden_homeroom_d2_choice1_a` | Teacher +10
  2. "읽는 건 좋아해요" → `hidden_homeroom_d2_choice1_b` | Teacher +3

- 캐릭터: `teacher_normal.png`
**{name}**: *읽는 거. 성적표까지 챙겨보는 사람이구나.*

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
- 다음: `hidden_homeroom_d2_6_ins`

- 캐릭터: `teacher_normal.png`
**{name}**: *서랍. 방금 뭔가 의식하지 않았나? — 살짝 열린 서랍 사이로 종이뭉치가 보인다. 원고지 같은 것.*

---

### `hidden_homeroom_d2_6_ins`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_7`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 자연스럽게 서랍을 밀어 닫는다. 아무렇지 않게.*

---

### `hidden_homeroom_d2_7`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_7_ins`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 적응은 어때? 어제보다 나아?

---

### `hidden_homeroom_d2_7_ins`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_8`

- 캐릭터: `teacher_normal.png`
**{name}**: 많이요. 반 애들이 좋아서.

---

### `hidden_homeroom_d2_8`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_8_ins`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 다인이가 시끄럽지? — 원래 저래. 근데 나쁜 애는 아니야. 걱정이 되는 쪽이지.

---

### `hidden_homeroom_d2_8_ins`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_8_ins2`

- 캐릭터: `teacher_normal.png`
**{name}**: 아시는 거 보니 다인이가 좀 유명한가 봐요.

---

### `hidden_homeroom_d2_8_ins2`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_8_ins3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 유명하다기보다... *커피를 한 모금 마시며* 걱정이 되는 쪽이지.

---

### `hidden_homeroom_d2_8_ins3`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_8_ins4`

- 캐릭터: `teacher_normal.png`
**{name}**: *'걱정이 되는 쪽'. — 담임이 다인을 걱정하고 있다. 다인의 무릎 이야기를 알고 있는 건가?*

---

### `hidden_homeroom_d2_8_ins4`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_8_ins5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *커피를 내려놓으며* ...아무튼, 신경 쓸 건 없어. 잘 지내고 있잖아.

---

### `hidden_homeroom_d2_8_ins5`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_9`

- 캐릭터: `teacher_normal.png`
**{name}**: *입은 가렸는데 귀가 빨갛다. — 이 사람, 의외로 쉽게 당황하는구나.*

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
**담임선생님**: 뭐, 선생님이 학생 걱정하는 건 당연한 거니까. 업무야, 업무.

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
**담임선생님**: *커피잔으로 입을 가리며* ...표정 관리 실패인가. 됐다, 가 봐.

---

### `hidden_homeroom_d2_choice2_b`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_11`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *손을 저으며* 됐다 됐다, 쑥스럽게. ...가 봐.

---

### `hidden_homeroom_d2_11`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_11_ins`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...전학생이라고 특별 대우 하면 다른 애들이 뭐라 하지.

---

### `hidden_homeroom_d2_11_ins`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_12`

- 캐릭터: `teacher_normal.png`
**{name}**: *아무도 안 듣고 있는데 혼잣말처럼. — 이 사람은 자기 관심을 '업무'라고 포장하는 게 습관인 것 같다.*

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
- 다음: `morning2_seo_dust_1_ins`

- 캐릭터: `seyoun_normal.png`
**{name}**: *1교시가 끝나고 쉬는 시간. 복도에서 서연과 스친다. 서연이 멈춘다. 내 어깨를 본다.*

---

### `morning2_seo_dust_1_ins`
- 배경: `school_hallway.png`
- 다음: `morning2_seo_dust_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 멈춘다. 내 어깨를 본다.*

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
**{name}**: *서연의 손이 내 어깨 위로 온다. 먼지를 쓸어내린다. 자연스럽게. 너무 자연스럽게.*

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
**다인**: 야! 지금 뭐야?! 어깨 만진 거야?!

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
**다인**: 먼지... 먼지가 진짜 있었어?!

---

### `morning2_dain_react_6`
- 배경: `school_hallway.png`
- 다음: `morning2_haeun_1`

- 캐릭터: `dain_angry.png`
**{name}**: *있었을 거다. 아마. — 중요한 건 그게 아닌 것 같지만.*

---

### `morning2_haeun_1`
- 배경: `school_hallway.png`
- 다음: `morning2_haeun_2`

- 캐릭터: `haeun_normal.png`
**{name}**: *서연이 사라진 복도에서 — 학생회 팔찌를 찬 여학생이 다가온다.*

---

### `morning2_haeun_2`
- 배경: `school_hallway.png`
- 다음: `morning2_haeun_3`

- 캐릭터: `haeun_normal.png`
**하은**: 저기, 전학생 분이죠? 저 학생회 부회장 하은이에요.

---

### `morning2_haeun_3`
- 배경: `school_hallway.png`
- 다음: `morning2_haeun_4`

- 캐릭터: `haeun_normal.png`
**{name}**: 아, 네.

---

### `morning2_haeun_4`
- 배경: `school_hallway.png`
- 다음: `morning2_haeun_5`

- 캐릭터: `haeun_normal.png`
**하은**: 회장님이... 그러니까 서연 선배가 요즘 좀 달라진 것 같아서.

---

### `morning2_haeun_5`
- 배경: `school_hallway.png`
- 다음: `morning2_haeun_6`

- 캐릭터: `haeun_normal.png`
**{name}**: 달라졌다니?

---

### `morning2_haeun_6`
- 배경: `school_hallway.png`
- 다음: `morning2_haeun_6_ins`

- 캐릭터: `haeun_normal.png`
**하은**: 원래 저런 분 아니거든요. 다른 학생한테 먼저 다가가는 건... 제가 1년 봤는데 처음이에요.

---

### `morning2_haeun_6_ins`
- 배경: `school_hallway.png`
- 다음: `morning2_haeun_6b`

- 캐릭터: `haeun_normal.png`
**{name}**: *하은이 한 발짝 다가온다. 목소리가 낮아진다.*

---

### `morning2_haeun_6b`
- 배경: `school_hallway.png`
- 다음: `morning2_haeun_6c`

- 캐릭터: `haeun_normal.png`
**하은**: 그래서 부탁인데요. — 회장님 흔들지 마세요. 그 분 지금 겨우 균형 잡고 있는 거거든요.

---

### `morning2_haeun_6c`
- 배경: `school_hallway.png`
- 다음: `morning2_haeun_7`

- 캐릭터: `haeun_normal.png`
**{name}**: *부탁이라고 했지만, 눈빛은 경고다. — 이 사람, 서연을 진심으로 걱정하고 있구나.*

---

### `morning2_haeun_7`
- 배경: `school_hallway.png`
- 다음: `morning2_end`

- 캐릭터: `haeun_normal.png`
**{name}**: *하은이 고개를 살짝 숙이고 간다.*

---

### `morning2_end`
- 배경: `school_hallway.png`
- 다음: `lunch2_start`

- 캐릭터: `haeun_normal.png`
**{name}**: *1년 동안 한 번도 먼저 다가간 적 없는 사람이 — 나한테는 먼저 왔다? 그건 무슨 의미지.*

---

## 2일차 — 점심 `day2_2_lunch`

### `lunch2_start`
- 배경: `school_hallway.png`
- BGM: `daily.mp3`
- 다음: `lunch2_start_2`

- 캐릭터: `없음`
**{name}**: *점심. 어제와 달리 주머니에 유나의 쪽지가 있다. 복도 끝에서는 서연이 도시락을 들고 옥상 쪽으로 향하고 있고, 다인은 또 매점 방향으로 손짓한다.*

---

### `lunch2_start_2`
- 배경: `school_hallway.png`
- 다음: `lunch2_choice`

- 캐릭터: `없음`
**{name}**: *이 학교에서 점심시간은 전쟁이다.*

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
**서연**: ...생각보다 솔직하네.

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
**서연**: *피식* 그거, 묘하게 설득력 있네.

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
- 다음: `lunch2_seo_8`

- 캐릭터: `seyoun_normal.png`
**{name}**: *뭔가 더 듣고 싶었던 것 같은데 — 일부러 안 말했다.*

---

### `lunch2_seo_8`
- 배경: `top_school.png`
- 다음: `lunch2_seo_9`

- 캐릭터: `seyoun_normal.png`
**{name}**: *도시락을 먹는데 — 옥상 문이 열린다. 다인이 올라왔다.*

---

### `lunch2_seo_9`
- 배경: `top_school.png`
- 다음: `lunch2_seo_10`

- 캐릭터: `dain_normal.png`
**다인**: 오! 여기 있었어?! 찾았다!

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
- 다음: `lunch2_seo_13b_ins`

- 캐릭터: `dain_normal.png`
**다인**: 오! 회장님? 반가워요!

---

### `lunch2_seo_13b_ins`
- 배경: `top_school.png`
- 다음: `lunch2_seo_14`

- 캐릭터: `seyoun_normal.png`
**서연**: *{name}을 보며* ...밝은 애.

---

### `lunch2_seo_14`
- 배경: `top_school.png`
- 다음: `lunch2_seo_15`

- 캐릭터: `seyoun_normal.png`
**서연**: *다인이 사라진 쪽을 보며* ...에너지가 좀 많네.

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
- 다음: `lunch2_seo_18`

- 캐릭터: `dain_normal.png`
**다인**: 에이, 그냥 궁금해서 물어본 거야!

---

### `lunch2_seo_18`
- 배경: `top_school.png`
- 다음: `lunch2_seo_19`

- 캐릭터: `dain_normal.png`
**{name}**: *삼각형의 각이 날카로워지고 있다. — 나는 꼭짓점이 아니라 제물인 것 같다.*

---

### `lunch2_seo_19`
- 배경: `top_school.png`
- 다음: `lunch2_seo_20`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 무심한 척 {name}의 입가를 본다.*

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
**{name}**: *서연의 손이 다가온다.*

---

### `lunch2_seo_c1_1`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연의 손가락이 입가를 스친다. 부드럽게. 천천히. — 필요 이상으로 천천히.*

---

### `lunch2_seo_c1_2`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_2_ins`

- 캐릭터: `seyoun_normal.png`
**서연**: ...됐어.

---

### `lunch2_seo_c1_2_ins`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_3`

- 캐릭터: `dain_normal.png`
**{name}**: *다인이 눈이 커진 채 둘을 번갈아 본다.*

---

### `lunch2_seo_c1_3`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_3_ins`

- 캐릭터: `dain_normal.png`
**다인**: 저 지금 뭘 본 거예요?!

---

### `lunch2_seo_c1_3_ins`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_4`

- 캐릭터: `seyoun_normal.png`
**서연**: *아무렇지 않은 척* 밥풀이었어.

---

### `lunch2_seo_c1_4`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_5`

- 캐릭터: `seyoun_shy.png`
**서연**: 밥풀이었어.

---

### `lunch2_seo_c1_5`
- 배경: `top_school.png`
- 다음: `lunch2_seo_end_c1`

- 캐릭터: `seyoun_shy.png`
**{name}**: *밥풀 하나 떼는 데 3초가 필요한가? — 아무도 모르겠지만, 서연의 귓불이 빨갛다.*

---

### `lunch2_seo_end_c1`
- 배경: `top_school.png`
- 스탯: Dain -3, Yuna -3
- 다음: `after2_start`

- 캐릭터: `seyoun_shy.png`
**{name}**: *서연의 손이 지나간 자리가 아직 뜨겁다. — 그리고 다인의 놀란 눈이 자꾸 떠오른다.*

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
**{name}**: *살짝 삐친 것 같다. — 근데 표정 관리는 완벽하다. 역시 이 사람은.*

---

### `lunch2_seo_end_c2`
- 배경: `top_school.png`
- 스탯: Dain -3, Yuna -3
- 다음: `after2_start`

- 캐릭터: `seyoun_pout.png`
**{name}**: *손등에 아직 밥풀 자국이 남아 있다. 서연의 표정 관리는 완벽한데 — 입꼬리만 살짝 내려가 있다.*

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
**다인**: 오, 회장님 도시락 말고 오늘은 내 쪽이네?!

---

### `lunch2_dain_3b_seo`
- 배경: `store.png`
- 다음: `lunch2_dain_4b_seo`

- 캐릭터: `dain_normal.png`
**{name}**: 어제는 회장님 페이스였고, 오늘은 네 페이스도 궁금했어.

---

### `lunch2_dain_4b_seo`
- 배경: `store.png`
- 다음: `lunch2_dain_5b`

- 캐릭터: `dain_laugh.png`
**다인**: 좋아!! 그 말 취소 못 해! 바로 소보로 걸고 한 판!!

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
**다인**: 야! 어제는 그림자처럼 있더니 오늘은 제대로 놀아주는 거지?!

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
**다인**: 좋아!! 그 균형감각 인정! 그럼 한 판!!

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
**다인**: 오늘은 진다!! 각오해!!

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
**다인**: 어제는 워밍업이었어!!

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
**다인**: 당연하지!! 나 원래 잘해!!

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
**다인**: ...이거 조작 아냐?!

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
**다인**: 으으으... 소보로 두 개요...

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
**{name}**: *서연이 이쪽을 본다. 다인 옆에 서서 빵을 먹고 있는 나를 — 한 번 보고 지나간다. 가슴이 찔렸다.*

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
- 다음: `lunch2_dain_13_ins`

- 캐릭터: `dain_normal.png`
**다인**: 흠... 너 혹시 회장님이랑도 친해?

---

### `lunch2_dain_13_ins`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_choice`

- 캐릭터: `dain_normal.png`
**{name}**: *다인이 괜히 소보로를 크게 한 입 베어 문다. 방금 질문이 별거 아니라는 듯.*

---

### `lunch2_dain_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "어제 좀 얘기했어" → `lunch2_dain_c1_1` | Dain -3
  2. "학교 안내 받은 정도?" → `lunch2_dain_c2_1` | Dain +0
  3. "왜, 신경 쓰여?" → `lunch2_dain_c3_1` | Dain +5

- 캐릭터: `dain_normal.png`
**{name}**: *다인이 나를 빤히 본다.*

---

### `lunch2_dain_c1_1`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_end`

- 캐릭터: `dain_pout.png`
**{name}**: *다인의 표정이 굳는다. 소보로를 한 입 베어 물며 고개를 돌린다. — 내가 상처를 준 건가.*

---

### `lunch2_dain_c2_1`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_end`

- 캐릭터: `dain_normal.png`
**{name}**: *다인이 고개를 끄덕이며 소보로를 한 입 베어 문다. 별 관심 없다는 듯.*

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
**{name}**: *귓불. 빨갛다. — 이 학교 여학생들은 귀가 솔직하다.*

---

### `lunch2_dain_end`
- 배경: `school_hallway.png`
- 스탯: Seoyeon -3, Yuna -3
- 다음: `lunch2_dain_end_ins`

- 캐릭터: `dain_pout.png`
**{name}**: *다인의 소보로 빵 크런치 소리가 유난히 크다. — 점심시간이 점점 복잡해진다.*

---

### `lunch2_dain_end_ins`
- 배경: `playground.png`
- 다음: `lunch2_dain_end_ins2`

- 캐릭터: `없음`
**{name}**: *4교시 체육. 운동장에서 달리기를 하는데 — 옆 녀석이 급정거하면서 부딪혔다. 팔꿈치가 까졌다.*

---

### `lunch2_dain_end_ins2`
- 배경: `playground.png`
- 다음: `lunch2_dain_end_ins3`

- 캐릭터: `없음`
**{name}**: *별거 아닌데 피가 조금 난다.*

---

### `lunch2_dain_end_ins3`
- 배경: `playground.png`
- 분기:
  - [`nurse_day1`] → `lunch2_dain_end_ins4`
  - [기본] → `lunch2_dain_end_ins4_first`

- 캐릭터: `없음`
**체육교사**: 보건실 가서 소독 받고 와.

---

### `lunch2_dain_end_ins4`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins5`

- 캐릭터: `없음`
**{name}**: *보건실 문을 연다. 어제와 같은 소독약 냄새.*

---

### `lunch2_dain_end_ins5`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *고개를 들며* 어라, 어제의 전학생.

---

### `lunch2_dain_end_ins4_first`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins5_first`

- 캐릭터: `없음`
**{name}**: *보건실 문을 연다. 낯선 소독약 냄새가 코끝을 스친다.*

---

### `lunch2_dain_end_ins5_first`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *고개를 들며* 처음 오셨죠? 전학생 맞나요.*

---

### `lunch2_dain_end_ins6`
- 배경: `nurse_room.png`
- 분기:
  - [`nurse_day1`] → `lunch2_dain_end_ins7`
  - [기본] → `lunch2_dain_end_ins7_first`

- 캐릭터: `nurse_normal.png`
**{name}**: 팔꿈치 좀 까졌는데요.

---

### `lunch2_dain_end_ins7`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins8`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 또 왔네? 단골 되려고?

---

### `lunch2_dain_end_ins8`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins9`

- 캐릭터: `nurse_normal.png`
**{name}**: *장난스러운 말투는 어제와 같다. 근데 눈은 이미 상처를 살피고 있다.*

---

### `lunch2_dain_end_ins7_first`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins8_first`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 처음이라 그랬지? 소독 받고 가자.

---

### `lunch2_dain_end_ins8_first`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins9`

- 캐릭터: `nurse_normal.png`
**{name}**: *장난스러운 말투는 여전한데. 근데 눈은 이미 상처를 살피고 있다.*

---

### `lunch2_dain_end_ins9`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins10`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 다가와 팔꿈치를 잡는다. 손이 차갑다.*

---

### `lunch2_dain_end_ins10`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins11`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 가만있어 봐~...

---

### `lunch2_dain_end_ins11`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins12`

- 캐릭터: `nurse_normal.png`
**{name}**: *소독약을 묻힌 솜을 꺼내 — 천천히 닦는다. 밴드를 꺼낸다.*

---

### `lunch2_dain_end_ins12`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins13`

- 캐릭터: `nurse_normal.png`
**{name}**: *밴드 하나 붙이는 데 — 30초면 될 걸, 왜 이렇게 꼼꼼하지?*

---

### `lunch2_dain_end_ins13`
- 배경: `nurse_room.png`
- 분기:
  - [`nurse_day1`] → `lunch2_dain_end_nurse_short1`
  - [기본] → `lunch2_dain_end_ins14`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *밴드를 붙이며* 여기... 이렇게... 자, 됐다.

---

### `lunch2_dain_end_ins14`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins15`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님의 손이 멈춘다. 그리고 — 아무 일 없다는 듯 다시 움직인다.*

---

### `lunch2_dain_end_ins15`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins16`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...차가운 편인데. 오늘 좀 따뜻한가 봐.

---

### `lunch2_dain_end_ins16`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins17`

- 캐릭터: `nurse_normal.png`
**{name}**: *거짓말이다. 아까 잡았을 때 차가웠다. — 손이 따뜻해진 건 지금이다.*

---

### `lunch2_dain_end_ins17`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins18`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *빙긋* 정성이야, 정성. 대충 붙이면 떨어지거든.

---

### `lunch2_dain_end_ins18`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins19`

- 캐릭터: `nurse_normal.png`
**{name}**: *정성... 이건가. 아님 다른 이유가 있는 건가.*

---

### `lunch2_dain_end_ins19`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins20`

- 캐릭터: `nurse_normal.png`
**{name}**: *밴드를 확인하는데 — 책상 위에 노트북이 열려 있다. 화면에 뭔가 적혀 있다. 의료 기록이 아니라 — 개인 일기 같은 것.*

---

### `lunch2_dain_end_ins20`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins21`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 재빨리 노트북을 닫는다.*

---

### `lunch2_dain_end_ins21`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins22`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *눈을 가늘게 뜨며* 하나만? ...음, 그럼. 나 커피보다 코코아 좋아해. 이게 비밀이야.

---

### `lunch2_dain_end_ins22`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins23`

- 캐릭터: `nurse_normal.png`
**{name}**: *비밀이라기엔 가벼운데, 알려주는 행위 자체가 — 가까워졌다는 의미다.*

---

### `lunch2_dain_end_ins23`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins24`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *가볍게 웃으며* 비밀~ 선생님도 비밀이 있는 거야.

---

### `lunch2_dain_end_ins24`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins25`

- 캐릭터: `nurse_normal.png`
**{name}**: *장난스럽게 넘기지만, 닫는 속도가 빨랐다. — 보여주고 싶지 않은 게 있다.*

---

### `lunch2_dain_end_ins25`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins26`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 자, 다 됐으니까 수업 가. — 다음에는 안 다치고 와.

---

### `lunch2_dain_end_ins26`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins27`

- 캐릭터: `nurse_normal.png`
**{name}**: 안 다치면 올 이유가 없잖아요.

---

### `lunch2_dain_end_ins27`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins28`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 잠깐 멈춘다. 그리고 — 목소리가 한 톤 낮아진다.*

---

### `lunch2_dain_end_ins28`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins29`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 이유 없어도 와도 돼.

---

### `lunch2_dain_end_ins29`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins30`

- 캐릭터: `nurse_normal.png`
**{name}**: *장난기가 사라졌다. 그리고 다시 돌아온다. — 지금 거, 봐버렸다.*

---

### `lunch2_dain_end_ins30`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins31`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *다시 밝은 톤으로* 아 물론 수업 시간에는 안 되고~! 방과후에!

---

### `lunch2_dain_end_ins31`
- 배경: `nurse_room.png`
- 다음: `after2_start`

- 캐릭터: `nurse_normal.png`
**{name}**: *방금 목소리가 달라진 거. — 착각인가?*

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
**{name}**: *방과후에 다시 와도 될 것 같다.*

---

### `lunch2_yuna_1`
- 배경: `yuna_hideout.png`
- BGM: `night1.mp3`
- 다음: `lunch2_yuna_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *도서관 별관. 본관보다 오래된 건물이다. 학생이 거의 없다.*

---

### `lunch2_yuna_2`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_intro_check`

- 캐릭터: `yuna_normal.png`
**{name}**: *계단을 올라가니 복도 끝에 유나가 서 있다. 벽에 기대어 책을 읽고 있다.*

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
**유나**: 시끄러운 애랑 친해진 것 같길래. 그쪽이 더 재밌잖아.

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
**{name}**: 응. 네 옆은 생각보다 안 불편했어.

---

### `lunch2_yuna_9`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_10`

- 캐릭터: `yuna_smile.png`
**{name}**: *유나가 아주 살짝 웃는다. 거의 안 보인다. — 근데 봤다. 이 웃음을 보려고 여기 온 건가.*

---

### `lunch2_yuna_10`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_11`

- 캐릭터: `yuna_normal.png`
**유나**: ...그래.

---

### `lunch2_yuna_11`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_12`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 앞장서 걷는다. 별관 깊숙이. 아무도 안 올 것 같은 곳.*

---

### `lunch2_yuna_12`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_13`

- 캐릭터: `yuna_normal.png`
**{name}**: *작은 방이 나온다. 창문으로 햇살이 들어오고, 낡은 소파와 책장이 있다.*

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
**{name}**: *유나가 소파에 앉는다. 옆자리를 슬쩍 비워둔다.*

---

### `lunch2_yuna_16`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_17`

- 캐릭터: `yuna_normal.png`
**유나**: 나랑 한 명 더 있었는데.

---

### `lunch2_yuna_17`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_17_ins`

- 캐릭터: `yuna_normal.png`
**{name}**: 있었는데?

---

### `lunch2_yuna_17_ins`
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
**{name}**: *'있었는데' 뒤에 말이 없다. 과거형. — 유나의 침묵에는 언제나 이야기가 있다. 조심스러워진다.*

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
**{name}**: *유나의 목소리가 한 톤 낮아졌다.*

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
**{name}**: *유나의 표정에 그림자가 스친다. 그 '있었는데'가 누구인지는 모르겠지만.*

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
- 다음: `lunch2_yuna_c1_8`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 책을 펼친다. 대화 종료의 신호.*

---

### `lunch2_yuna_c1_8`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c1_9`

- 캐릭터: `yuna_normal.png`
**{name}**: *분위기를 바꿔야 한다. — 가벼운 말로 넘기자.*

---

### `lunch2_yuna_c1_9`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c1_9_ins`

- 캐릭터: `yuna_normal.png`
**{name}**: 그 사람, 혹시 갑자기 가게 된 거야? 원래 그러면 연락도 놓치고 그러잖아.

---

### `lunch2_yuna_c1_9_ins`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c1_10`

- 캐릭터: `yuna_angry.png`
**{name}**: *유나의 눈빛이 순간 차가워진다.*

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
- 다음: `lunch2_yuna_c1_13`

- 캐릭터: `yuna_normal.png`
**{name}**: *실수했다. 가볍게 넘기려 한 게 오히려 — 이 사람의 상처를 얕잡아 본 꼴이 됐다.*

---

### `lunch2_yuna_c1_13`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c1_14`

- 캐릭터: `yuna_normal.png`
**{name}**: *어색한 침묵이 흐른다. 책장 넘기는 소리만 크게 울린다.*

---

### `lunch2_yuna_c1_14`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_end`

- 캐릭터: `yuna_normal.png`
**{name}**: *눈치가 빠르다고 자부했는데. — 아니었다. 이 사람 앞에서는 아니었다.*

---

### `lunch2_yuna_c2_1`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c2_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *아무 말 없이 옆에 앉는다. 유나가 잠깐 이쪽을 본다.*

---

### `lunch2_yuna_c2_2`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c2_3`

- 캐릭터: `yuna_normal.png`
**{name}**: *그리고 자기 책에서 한 권을 꺼내 내 쪽에 놓는다.*

---

### `lunch2_yuna_c2_3`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c2_4`

- 캐릭터: `yuna_normal.png`
**유나**: ...읽어.

---

### `lunch2_yuna_c2_4`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c2_5`

- 캐릭터: `yuna_normal.png`
**{name}**: *말 대신 책을 건네는 거. — 이 사람의 언어는 행동이구나. 서연이랑은 다른 방식으로.*

---

### `lunch2_yuna_c2_5`
- 배경: `yuna_hideout.png`
- 다음: `lunch2_yuna_c2_6`

- 캐릭터: `yuna_normal.png`
**{name}**: *침묵 속에서 나란히 책을 읽는다. 창문으로 들어오는 햇살이 따뜻하다.*

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
**{name}**: *두 문장. 유나치고는 긴 말이다. — 그리고 그 두 문장 안에 전부 담겨 있다.*

---

### `lunch2_yuna_end`
- 배경: `yuna_hideout.png`
- 다음: `after2_start`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나의 '있었는데'가 머릿속에 맴돈다. 유나가 보여준 이 장소의 의미가... 조금씩 느껴진다.*

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
**다인**: 체육관 와!! 오늘 진짜 내기다!!

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
**{name}**: *유나에게서는 아무 연락이 없다. — 그게 유나다. 근데 가방을 챙기다 보니 주머니에서 아침 쪽지가 나온다. '도서관 별관'이라는 글씨가 눈에 밟힌다.*

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
**보건선생님**: 어라, 어제의 전학생. 또 왔네? 단골 되려고?

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
**보건선생님**: 가만있어 봐~...

---

### `hidden_nurse_d2_5`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_choice1`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 여기... 이렇게... 자, 됐다. 대충 붙이면 떨어지거든.

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
**{name}**: *밴드를 확인하는데 — 책상 위에 노트북이 열려 있다. 화면에 뭔가 적혀 있다. 의료 기록이 아니라 — 개인 일기 같은 것.*

---

### `hidden_nurse_d2_7`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_choice2`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그건 안 봤지? 비밀~ 선생님도 비밀이 있는 거야.

---

### `hidden_nurse_d2_choice2`
- 배경: `nurse_room.png`
- 선택지:
  1. "비밀 많으시네요. 하나만 알려주면 안 돼요?" → `hidden_nurse_d2_choice2_a` | Nurse +7
  2. "네, 안 봤어요" → `hidden_nurse_d2_choice2_b` | Nurse +0

- 캐릭터: `nurse_normal.png`
**{name}**: *비밀이라며 웃는데 — 눈은 안 웃고 있다.*

---

### `hidden_nurse_d2_choice2_a`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_8`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *눈을 가늘게 뜨며* 하나만? ...음, 그럼. 나 커피보다 코코아 좋아해. 이게 비밀이야.

---

### `hidden_nurse_d2_choice2_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_8`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *가볍게 웃으며* 비밀~ 선생님도 비밀이 있는 거야.

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
- 다음: `hidden_nurse_d2_freetalk`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 이유 없어도 와도 돼. — 아 물론 수업 시간에는 안 되고~! 방과후에!

---

### `hidden_nurse_d2_freetalk`
- 배경: `nurse_room.png`
- 타입: `free_talk`
- 다음: `after2_choice`
- 컨텍스트: "Day 2. 체육 시간에 팔꿈치가 까져서 보건실에 왔다. 보건선생님이 정성껏 밴드를 붙여줬다. 톤: 어제보다 가까워진 사이. 장난과 티키타카가 자연스럽다. 밀당 시작. 무거운 이야기는 아직 없다."
- 성격: "보건선생님은 장난기 넘치지만 밴드 붙일 때는 세심하다. 개인적인 비밀을 숨기고 있다."

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님과 보건실에서 대화 중.*

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
**다인**: 왔어?! 늦었어!!

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
**다인**: 나는 10분 전에 왔거든!!

---

### `after2_dain_5`
- 배경: `gym.png`
- 다음: `after2_dain_6`

- 캐릭터: `dain_sweat.png`
**{name}**: *그건 네가 일찍 온 거지, 내가 늦은 게 아닌데.*

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
**다인**: 배고프거든!!

---

### `after2_dain_9`
- 배경: `gym.png`
- 다음: `after2_dain_9_ins`

- 캐릭터: `dain_normal.png`
**{name}**: *서브를 한다. — 의외로 두 번째 서브가 깔끔하게 넘어간다.*

---

### `after2_dain_9_ins`
- 배경: `gym.png`
- 다음: `after2_dain_9_ins2`

- 캐릭터: `dain_normal.png`
**다인**: *눈이 커지며* 어? 봐주려고 했는데 안 되겠네.

---

### `after2_dain_9_ins2`
- 배경: `gym.png`
- 다음: `after2_dain_9_ins3`

- 캐릭터: `dain_active.png`
**{name}**: *다인이 자세를 낮춘다. 눈빛이 달라졌다.*

---

### `after2_dain_9_ins3`
- 배경: `gym.png`
- 다음: `after2_dain_9_ins4`

- 캐릭터: `dain_active.png`
**다인**: 진심으로 간다!

---

### `after2_dain_9_ins4`
- 배경: `gym.png`
- 다음: `after2_dain_9_ins5`

- 캐릭터: `dain_active.png`
**{name}**: *랠리가 오간다. 다인의 움직임은 — 확실히 보통이 아니다. 빠르고, 정확하고, 몸이 기억하고 있는 움직임.*

---

### `after2_dain_9_ins5`
- 배경: `gym.png`
- 다음: `after2_dain_9_ins6`

- 캐릭터: `dain_active.png`
**{name}**: *이 여자, 진짜 잘한다. — 운동을 좋아하는 수준이 아니라, 인생을 걸었던 사람의 몸놀림이다.*

---

### `after2_dain_9_ins6`
- 배경: `gym.png`
- 다음: `after2_dain_11b`

- 캐릭터: `dain_sweat.png`
**{name}**: *결국 3:2. 아슬아슬하게 이겼다.*

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
**다인**: 으아아!! 졌다!! — 근데 좀 치는데?! 너 운동 안 한다며?!

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
**다인**: *깜짝 놀라며* 뭐야?! 속은 거야?!

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
**다인**: *주먹으로 어깨를 치며* 이 사기꾼!! ㅋㅋㅋ — 아 근데 재밌었다!

---

### `after2_dain_skinship_1`
- 배경: `street.png`
- 다음: `after2_dain_skinship_2`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인이 손을 번쩍 든다. 하이파이브.*

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
**다인**: *학교 앞 떡볶이집으로 들어갔다.* *다인이와 떡볶이를 먹으며 이야기를 나눈다.*

---

### `after2_dain_end`
- 배경: `store.png`
- 다음: `after2_dain_end_ins`

- 캐릭터: `dain_laugh.png`
**{name}**: *눈이 반달 모양이다. 어제도 봤던 그 눈. — 이 사람은 진심으로 즐길 때 저렇게 되는구나.*

---

### `after2_dain_end_first`
- 배경: `store.png`
- 다음: `after2_dain_end_ins`

- 캐릭터: `dain_laugh.png`
**{name}**: *눈이 반달 모양이다. — 이 사람은 진심으로 즐길 때 저렇게 되는구나.*

---

### `after2_dain_end_ins`
- 배경: `store.png`
- 다음: `after2_dain_end_ins2`

- 캐릭터: `dain_laugh.png`
**{name}**: *학교 앞 떡볶이집.*

---

### `after2_dain_end_ins2`
- 배경: `store.png`
- 다음: `after2_dain_end_2`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인이 떡볶이를 후후 불며 말한다.*

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
**{name}**: {name}(이)가 훨씬 잘하던데.

---

### `after2_dain_end_3`
- 배경: `store.png`
- 다음: `after2_dain_end_3b`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인이 젓가락을 멈춘다. 아주 짧게.*

---

### `after2_dain_end_3b`
- 배경: `store.png`
- 다음: `after2_dain_end_3c`

- 캐릭터: `dain_laugh.png`
**다인**: ...당연하지! 나 체육 특기생이었거든!

---

### `after2_dain_end_3c`
- 배경: `store.png`
- 다음: `after2_dain_end_3d`

- 캐릭터: `dain_laugh.png`
**{name}**: *'이었거든'. 과거형. — 왠지 묻지 않는 게 나을 것 같다.*

---

### `after2_dain_end_3d`
- 배경: `store.png`
- 다음: `after2_dain_end_3e`

- 캐릭터: `dain_laugh.png`
**다인**: 아 맵다!! 물 물!!

---

### `after2_dain_end_3e`
- 배경: `store.png`
- 스탯: Seoyeon -5, Yuna -5
- 다음: `after2_dain_return`

- 캐릭터: `dain_shy.png`
**{name}**: *화제가 바뀌었다. — 다인의 배려가 서툴지만 따뜻하다.*

---

### `after2_dain_return`
- 배경: `school.png`
- 다음: `minsu_warn_1`

- 캐릭터: `dain_shy.png`
**{name}**: *학교로 돌아오는 길. 교문 앞에 다다랐다.*

---

### `after2_seo_1`
- 배경: `student_room.png`
- BGM: `sunset1.mp3`
- 플래그: `chose_seo_after2`
- 스탯: Seoyeon +8
- 다음: `after2_seo_2`

- 캐릭터: `seyoun_normal.png`
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
- 다음: `after2_seo_4_ins`

- 캐릭터: `seyoun_normal.png`
**서연**: *살짝 웃으며* 순종적이네.

---

### `after2_seo_4_ins`
- 배경: `student_room.png`
- 다음: `after2_seo_5`

- 캐릭터: `seyoun_normal.png`
**{name}**: *이 사람의 어휘에서 '부탁'이라는 단어는 존재하지 않는 것 같다.*

---

### `after2_seo_5`
- 배경: `student_room.png`
- 다음: `after2_seo_6`

- 캐릭터: `seyoun_normal.png`
**{name}**: 도와달라고 한 건 너잖아.

---

### `after2_seo_6`
- 배경: `student_room.png`
- 다음: `after2_seo_6_ins`

- 캐릭터: `seyoun_normal.png`
**서연**: 부탁이 아니라 기회를 준 거야.

---

### `after2_seo_6_ins`
- 배경: `student_room.png`
- 다음: `after2_seo_6_ins2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *부탁도 지시처럼 들리게 만드는 재주가 있다.*

---

### `after2_seo_6_ins2`
- 배경: `student_room.png`
- 다음: `after2_seo_7`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서류 정리를 시작한다. 행사 예산안, 동아리 신청서. 양이 꽤 많다.*

---

### `after2_seo_7`
- 배경: `student_room.png`
- 다음: `after2_seo_8`

- 캐릭터: `seyoun_normal.png`
**{name}**: *명령조인데 어딘가 익숙해진 톤이다. — 이 말투가 이 사람의 부탁 방식인 건가.*

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
**{name}**: *서연이 서류에서 눈을 떼고 이쪽을 본다.*

---

### `after2_seo_8b2`
- 배경: `student_room.png`
- 다음: `after2_seo_8b3`

- 캐릭터: `seyoun_normal.png`
**서연**: ...넌 의외로 쓸 만하네.

---

### `after2_seo_8b3`
- 배경: `student_room.png`
- 다음: `after2_seo_8b4`

- 캐릭터: `seyoun_normal.png`
**{name}**: 그건 칭찬이야?

---

### `after2_seo_8b4`
- 배경: `student_room.png`
- 다음: `after2_seo_8b4_ins`

- 캐릭터: `seyoun_shy.png`
**서연**: 칭찬이야. 받아 둬.

---

### `after2_seo_8b4_ins`
- 배경: `student_room.png`
- 다음: `after2_seo_8b4_ins2`

- 캐릭터: `seyoun_shy.png`
**{name}**: *직접 칭찬이라고 말해주는 거. — 이 사람치고는 드문 일인 것 같다.*

---

### `after2_seo_8b4_ins2`
- 배경: `student_room.png`
- 다음: `after2_seo_choice1`

- 캐릭터: `seyoun_shy.png`
**{name}**: *정리를 하다가 서연이 목을 돌린다. 뭉친 것 같다.*

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
- 다음: `after2_seo_sunset_joke_ins`

- 캐릭터: `seyoun_shy2.png`
**{name}**: *서연이 잠깐 멈춘다. 그리고 — 웃는다. 입꼬리가 아니라 눈이 웃는다. 처음 보는 웃음.*

---

### `after2_seo_sunset_joke_ins`
- 배경: `student_room.png`
- 다음: `after2_seo_sunset_react`

- 캐릭터: `seyoun_normal.png`
**서연**: *서류 끝으로 입가를 가리는데도 웃는 게 보인다.*

---

### `after2_seo_sunset_react`
- 배경: `student_room.png`
- 다음: `after2_seo_sunset_react_ins`

- 캐릭터: `seyoun_shy2.png`
**서연**: ...어이없는 말을 이렇게 자연스럽게 하는 사람은 처음이야.

---

### `after2_seo_sunset_react_ins`
- 배경: `student_room.png`
- 다음: `after2_seo_9`

- 캐릭터: `seyoun_normal.png`
**{name}**: *그 말 뒤에도 서연의 입꼬리가 한동안 내려오지 않는다.*

---

### `after2_seo_neck_worry`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_react`

- 캐릭터: `seyoun_normal.png`
**서연**: 괜찮아. 이 정도는 매일이야.

---

### `after2_seo_neck_react`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_react_ins`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 어깨를 돌린다. 뭉친 소리가 난다.*

---

### `after2_seo_neck_react_ins`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_react_ins2`

- 캐릭터: `seyoun_normal.png`
**서연**: 잠깐만. 움직이지 마.

---

### `after2_seo_neck_react_ins2`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_touch`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 일어나 내 뒤로 온다. 어깨에 손을 올린다.*

---

### `after2_seo_neck_touch`
- 배경: `student_room.png`
- 호감분기: Seoyeon
  - [50+] → `after2_seo_neck_high`
  - [기본] → `after2_seo_neck_low`
- 다음: `after2_seo_neck_low`

- 캐릭터: `seyoun_normal.png`
**서연**: 많이 뭉쳤다. 잠깐 가만히 있어 봐.

---

### `after2_seo_neck_high`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_high_ins`

- 캐릭터: `seyoun_shy.png`
**{name}**: *눈을 감고 몸을 맡긴다.*

---

### `after2_seo_neck_high_ins`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_high_ins2`

- 캐릭터: `seyoun_normal.png`
**서연**: *조용히* ...가만히 있어. 좀만.

---

### `after2_seo_neck_high_ins2`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_high_2`

- 캐릭터: `seyoun_shy.png`
**{name}**: *누구 손이? — 서연 손이 내 어깨 위에 있는 건데. 말이 뒤집혔다. 그만큼 긴장한 거다.*

---

### `after2_seo_neck_high_2`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_high_2_ins`

- 캐릭터: `seyoun_shy.png`
**서연**: *더 낮게* ...조금만 더.

---

### `after2_seo_neck_high_2_ins`
- 배경: `student_room.png`
- 다음: `after2_seo_9`

- 캐릭터: `seyoun_shy.png`
**{name}**: *손끝이 목덜미를 눌렀다가 천천히 풀린다. 둘 다 잠깐 말이 없다.*

---

### `after2_seo_neck_low`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_low_ins`

- 캐릭터: `seyoun_normal.png`
**{name}**: *몸을 살짝 뺀다.*

---

### `after2_seo_neck_low_ins`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_low_ins2`

- 캐릭터: `seyoun_normal.png`
**{name}**: 갑자기 뭐야.

---

### `after2_seo_neck_low_ins2`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_low_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연의 손이 허공에서 잠깐 멈춘다.*

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
  1. "좀 더 있을까? 아직 남은 것 같은데" → `after2_seo_stay` | Seoyeon +5
  2. "끝났으면 갈게" → `after2_seo_leave` | Seoyeon +0

- 캐릭터: `seyoun_normal.png`
**{name}**: *서류 정리가 거의 끝났다.*

---

### `after2_seo_stay`
- 배경: `student_room.png`
- 다음: `after2_seo_stay_2`

- 캐릭터: `seyoun_shy.png`
**{name}**: *서연이 서류를 내려놓고 창밖을 본다. 노을빛이 얼굴에 닿는다.*

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
**{name}**: *'여기서만'. — 이 옥상이든 학생회실이든, 서연에게는 가면을 벗을 수 있는 장소가 필요한 사람이다.*

---

### `after2_seo_leave`
- 배경: `student_room.png`
- 다음: `after2_seo_end`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 고개를 끄덕인다.*

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
**{name}**: *서연이 손을 뻗는다. 옷깃에 묻은 먼지를 떼어준다. 손이 목에 스친다.*

---

### `after2_seo_skinship_2`
- 배경: `school_hallway.png`
- 다음: `after2_seo_skinship_3`

- 캐릭터: `seyoun_shy.png`
**{name}**: *서연의 손가락이 멈춘다. 아무 말도 안 하고 고개를 돌린다. — 숨이 잠깐 멈췄다.*

---

### `after2_seo_skinship_3`
- 배경: `school_hallway.png`
- 다음: `after2_seo_return`

- 캐릭터: `seyoun_normal.png`
**서연**: ...먼지 묻었어.

---

### `after2_seo_return`
- 배경: `school.png`
- 다음: `minsu_warn_1`

- 캐릭터: `seyoun_normal.png`
**{name}**: *학생회실을 나섰다. 교문 쪽으로 걸어간다.*

---

### `after2_yuna_1`
- 배경: `yuna_hideout.png`
- BGM: `night1.mp3`
- 플래그: `chose_yuna_after2`
- 다음: `after2_yuna_1_ins`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나한테는 연락이 없었다. 근데 발이 도서관 쪽으로 향하고 있다. 왜? — 모르겠다. 아침 쪽지 때문인 것 같기도 하고.*

---

### `after2_yuna_1_ins`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *별관 복도. 인기척이 없다. — 비밀 독서 공간 문이 살짝 열려 있다.*

---

### `after2_yuna_2`
- 배경: `yuna_hideout.png`
- 스탯: Yuna +8
- 다음: `after2_yuna_2_ins`

- 캐릭터: `yuna_normal.png`
**{name}**: *조용히 들어간다. 유나가 소파에서 책을 읽고 있다. 창문으로 노을이 들어오고 있다.*

---

### `after2_yuna_2_ins`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_3`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 고개를 든다. 놀라지 않는다.*

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
**{name}**: *기다리고 있었구나. — 그 사실이 은근히 기쁘다.*

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
- 다음: `after2_yuna_8b_ins`

- 캐릭터: `yuna_normal.png`
**{name}**: *우연히 열려 있는 문. — 유나의 '우연히'는 '계획적으로'와 같은 뜻이다.*

---

### `after2_yuna_8b_ins`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_8c`

- 캐릭터: `yuna_normal.png`
**{name}**: *옆에 앉는다. 유나가 자기 이어폰 한쪽을 건넨다.*

---

### `after2_yuna_8c`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_8d`

- 캐릭터: `yuna_normal.png`
**유나**: 들어봐.

---

### `after2_yuna_8d`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_9`

- 캐릭터: `yuna_normal.png`
**{name}**: *조용한 피아노 곡이 흐른다. 노을이 방을 물들이고 있다.*

---

### `after2_yuna_9`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_choice_pre1`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 책을 읽고, 나는 음악을 듣는다. 아무 말이 없다. — 불편하지 않다.*

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
- 다음: `after2_yuna_choice_pre3_ins`

- 캐릭터: `yuna_normal.png`
**유나**: 선배 이후로 없었어.

---

### `after2_yuna_choice_pre3_ins`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_choice`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 시선을 피하지 않는다. 그 한 문장이 이상하게 오래 남는다.*

---

### `after2_yuna_choice`
- 배경: `yuna_hideout.png`
- 선택지:
  1. "매일 올까?" → `after2_yuna_everyday` | Yuna +8
  2. "조용해서 좋다" → `after2_yuna_quiet` | Yuna +5

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 두 문장을 연속으로 말했다. — 원래 한 줄짜리 사람인데.*

---

### `after2_yuna_everyday`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_everyday_ins`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나가 이어폰 줄을 만지작거린다.*

---

### `after2_yuna_everyday_ins`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_everyday_react`

- 캐릭터: `yuna_normal.png`
**유나**: ...올 거면 와. 말리지는 않을게.

---

### `after2_yuna_everyday_react`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_everyday_react_ins`

- 캐릭터: `yuna_shy.png`
**유나**: ...근데, 매일은 곤란해. 가끔만.

---

### `after2_yuna_everyday_react_ins`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_end`

- 캐릭터: `yuna_shy.png`
**{name}**: *허락 같지 않은 말인데, 이상하게 오래 남는다.*

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
**{name}**: *유나가 아주 작게 웃는다. — 이 웃음 하나에 하루가 괜찮아진다.*

---

### `after2_yuna_end`
- 배경: `yuna_hideout.png`
- 스탯: Seoyeon -3, Dain -3
- 호감분기: Yuna
  - [25+] → `after2_yuna_skinship_1`
  - [기본] → `after2_yuna_return`
- 다음: `after2_yuna_return`

- 캐릭터: `yuna_smile.png`
**{name}**: *핸드폰에는 다인의 '기다렸는데?'와 서연의 '일정 바뀌면 말은 해줘'가 늦게 와 있다. 유나와 나란히 앉아 음악을 듣는 사이, 노을이 다 져 버렸다. — 이 사람 옆에 있으면, 자꾸 다시 오고 싶어진다.*

---

### `after2_yuna_skinship_1`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_skinship_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *같은 책을 잡으려다 — 손이 겹쳤다.*

---

### `after2_yuna_skinship_2`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_skinship_3`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나가 먼저 빼지 않는다. 3초. 유나가 시선을 내린다.*

---

### `after2_yuna_skinship_3`
- 배경: `yuna_hideout.png`
- 다음: `after2_yuna_return`

- 캐릭터: `yuna_normal.png`
**{name}**: *손을 뗐다. 유나가 책을 집어 건넨다. 아무 말 없이.*

---

### `after2_yuna_return`
- 배경: `school.png`
- 다음: `minsu_warn_1`

- 캐릭터: `yuna_smile.png`
**{name}**: *도서관 별관을 나왔다. 노을이 지고 있다.*

---

### `minsu_warn_1`
- 배경: `school.png`
- BGM: `sunset1.mp3`
- 다음: `minsu_warn_1_ins`

- 캐릭터: `없음`
**{name}**: *하교길. 교문을 나서는데 — 민수가 뒤에서 따라온다.*

---

### `minsu_warn_1_ins`
- 배경: `school.png`
- 다음: `minsu_warn_2`

- 캐릭터: `minsu_normal.png`
**{name}**: *민수가 성큼 따라와 옆에 나란히 선다.*

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
- 다음: `minsu_warn_4_ins`

- 캐릭터: `minsu_smirk.png`
**민수**: 너 요즘 재밌냐?

---

### `minsu_warn_4_ins`
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
- 다음: `minsu_warn_7`

- 캐릭터: `minsu_smirk.png`
**민수**: 서연이, 다인이, 유나. 셋 다 너한테 웃더라.

---

### `minsu_warn_7`
- 배경: `school.png`
- 다음: `minsu_warn_7_ins`

- 캐릭터: `minsu_smirk.png`
**{name}**: 그냥 친절한 거 아냐?

---

### `minsu_warn_7_ins`
- 배경: `school.png`
- 다음: `minsu_warn_7_ins2`

- 캐릭터: `minsu_smirk.png`
**{name}**: *민수가 걸음을 멈춘다. 돌아본다. 평소의 장난기가 없다.*

---

### `minsu_warn_7_ins2`
- 배경: `school.png`
- 다음: `minsu_warn_8`

- 캐릭터: `minsu_normal.png`
**민수**: 야, 나 1년 동안 이 반에 있었어. 서연이가 남한테 먼저 말 거는 거 한 번도 못 봤거든. 다인이가 다른 남자애한테 빵 사준 적도 없고. 유나는 — 쪽지? 아무한테도 안 써.

---

### `minsu_warn_8`
- 배경: `school.png`
- 다음: `minsu_warn_8b`

- 캐릭터: `minsu_smirk.png`
**민수**: 한 명이면 네 착각일 수도 있어. 근데 셋이 동시에 그러면, 그건 착각 아니야.

---

### `minsu_warn_8b`
- 배경: `school.png`
- 다음: `minsu_warn_9`

- 캐릭터: `minsu_smirk.png`
**{name}**: ......

---

### `minsu_warn_9`
- 배경: `school.png`
- 다음: `minsu_warn_10`

- 캐릭터: `minsu_smirk.png`
**민수**: 셋 다 너한테만 그러는 거야. — 그건 너도 알잖아.

---

### `minsu_warn_10`
- 배경: `school.png`
- 다음: `minsu_warn_11`

- 캐릭터: `minsu_smirk.png`
**{name}**: *알고 있다. 모른 척하고 있을 뿐이다.*

---

### `minsu_warn_11`
- 배경: `school.png`
- 다음: `minsu_warn_11b`

- 캐릭터: `minsu_smirk.png`
**민수**: 문제는 네가 셋 다한테 똑같이 웃어주고 있다는 거지.

---

### `minsu_warn_11b`
- 배경: `school.png`
- 다음: `minsu_warn_11c`

- 캐릭터: `minsu_smirk.png`
**{name}**: 나는 그냥 —

---

### `minsu_warn_11c`
- 배경: `school.png`
- 다음: `minsu_warn_12`

- 캐릭터: `minsu_smirk.png`
**민수**: 그냥? 그 '그냥'이 제일 잔인한 거야. 걔들은 '그냥'이 아니거든.

---

### `minsu_warn_12`
- 배경: `school.png`
- 다음: `minsu_warn_12_ins`

- 캐릭터: `minsu_smirk.png`
**{name}**: *할 말이 없다. 민수가 맞다. — 눈치 빠르다고 자부하면서, 정작 내가 뿌리고 다니는 오해는 못 보고 있었다.*

---

### `minsu_warn_12_ins`
- 배경: `school.png`
- 다음: `minsu_warn_13`

- 캐릭터: `minsu_smirk.png`
**{name}**: *민수가 가방 끈을 고쳐 매며.*

---

### `minsu_warn_13`
- 배경: `school.png`
- 다음: `minsu_warn_13_ins`

- 캐릭터: `minsu_smirk.png`
**민수**: 너 전 학교에서도 이랬어?

---

### `minsu_warn_13_ins`
- 배경: `school.png`
- 다음: `minsu_warn_13b`

- 캐릭터: `minsu_smirk.png`
**{name}**: *— 숨이 멈칫한다.*

---

### `minsu_warn_13b`
- 배경: `school.png`
- 다음: `minsu_warn_14`

- 캐릭터: `minsu_smirk.png`
**{name}**: ...뭐?

---

### `minsu_warn_14`
- 배경: `school.png`
- 다음: `minsu_warn_15`

- 캐릭터: `minsu_smirk.png`
**{name}**: *— 걷던 발걸음이 우뚝 멈췄다.*

---

### `minsu_warn_15`
- 배경: `school.png`
- 다음: `minsu_warn_15_ins`

- 캐릭터: `minsu_smirk.png`
**민수**: 몰라, 내가 오지랖이 많은 건지. — 근데 나중에 셋 다 울면 그건 네 탓이야. 진짜로.

---

### `minsu_warn_15_ins`
- 배경: `school.png`
- 다음: `minsu_warn_15_ins2`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 내일도 내기하자!! 종목 바꿔서!!

---

### `minsu_warn_15_ins2`
- 배경: `school.png`
- 다음: `minsu_warn_15_ins3`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 내일 점심에 옥상 열어놓을게. 와

---

### `minsu_warn_15_ins3`
- 배경: `school.png`
- 다음: `minsu_warn_15_ins4`

- 캐릭터: `minsu_smirk.png`
**{name}**: *전 학교. — 그 단어가 가슴에 박혔다.*

---

### `minsu_warn_15_ins4`
- 배경: `school.png`
- 다음: `night2_start`

- 캐릭터: `minsu_smirk.png`
**{name}**: *— 걷던 발걸음이 우뚝 멈췄다.*

---

## 2일차 — 밤 `day2_4_night`

### `night2_start`
- 배경: `room_my.png`
- BGM: `night1.mp3`
- 다음: `night2_start_ins`

- 캐릭터: `없음`
**{name}**: *집에 돌아왔다. 샤워하고 침대에 누웠는데 — 메신저 알림이 쏟아진다.*

---

### `night2_start_ins`
- 배경: `room_my.png`
- 다음: `night2_msg_1`

- 캐릭터: `없음`
**{name}**: *세 명. 동시에.*

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
**다인**: 야!! 오늘 떡볶이 맛있었다!!

---

### `night2_msg_dain_specific_2`
- 배경: `room_my.png`
- 다음: `night2_msg_seo_general`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 내일도 내기하자!! 종목 바꿔서!!

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
**다인**: 야~ 내일 매점 가자! 오늘 못 간 거 아직 아쉽다구!

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
**다인**: 야 내일 매점 갈 거지?!

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
**{name}**: *세 명에게 동시에 답장해야 하는 상황. — 이게 행복인지 고문인지 모르겠다.*

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
**다인**: ㅋㅋㅋ 매운 거 못 먹는 거야?!

---

### `night2_reply_dain_3`
- 배경: `room_my.png`
- 다음: `night2_reply_dain_4`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 내일은 순한 맛으로 가자!!

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
**{name}**: *또 세 줄 연속이다. 이 사람은 한 문장으로 끝내는 법이 없다.*

---

### `night2_reply_dain_react_high`
- 배경: `room_my.png`
- 플래그: `night2_replied_dain`
- 스탯: Dain +2
- 다음: `night2_dain_freetalk`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 야!!!!! 지금 웃겨서 이불킥 했어 진짜ㅋㅋㅋㅋ 내일 꼭 체육관 와!!

---

### `night2_reply_dain_react_default`
- 배경: `room_my.png`
- 플래그: `night2_replied_dain`
- 다음: `night2_dain_freetalk`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: ㅋㅋ 알겠어~ 굿나잇!

---

### `night2_dain_freetalk`
- 배경: `room_my.png`
- 타입: `free_talk`
- 다음: `night2_hidden_check`
- 컨텍스트: "Day 2 밤, 다인과 메신저로 대화 중. 톤: 어제보다 가까워진 사이. 장난과 티키타카가 자연스럽다. 밀당 시작. 무거운 이야기는 아직 없다."
- 성격: "다인은 밤에도 에너지 넘치지만, 가끔 진지해질 때가 있다."

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: *다인과 밤 메시지를 주고받고 있다.*

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
**{name}**: *'자유'라고 했지만, 안 가면 뭔가 벌어질 것 같은 톤이다.*

---

### `night2_reply_seo_react_high`
- 배경: `room_my.png`
- 플래그: `night2_replied_seo`
- 스탯: Seoyeon +2
- 다음: `night2_seo_freetalk`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: ...너, 생각보다 재밌는 사람이야. 내일 점심 옥상에서 볼래?

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
- 컨텍스트: "Day 2 밤, 서연과 메신저로 대화 중. 어제보다 대화가 자연스러워졌다. 톤: 어제보다 가까워진 사이. 장난과 티키타카가 자연스럽다. 밀당 시작. 무거운 이야기는 아직 없다."
- 성격: "서연은 쿨뷰티 학생회장. 밤에는 좀 더 솔직한 면을 보여준다."

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: *서연과 밤 메시지를 주고받고 있다.*

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
**{name}**: ?

---

### `night2_reply_yuna_6`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_6_ins`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 이유는 나중에

---

### `night2_reply_yuna_6_ins`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_6_ins2`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *세 번째 별? — 창문을 열고 밤하늘을 올려다본다. 세 번째가 어떤 건지는 모르겠다.*

---

### `night2_reply_yuna_6_ins2`
- 배경: `room_my.png`
- 분기:
  - [`homeroom_day2`] → `night2_reply_yuna_6_ins3`
  - [기본] → `night2_reply_yuna_7`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *유나다운 수수께끼다. — 답은 안 알려주면서, 찾아보게 만드는 사람.*

---

### `night2_reply_yuna_6_ins3`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_6_ins4`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *메신저 알림 사이에 — 담임선생님에게서 개인 메시지가 왔다.*

---

### `night2_reply_yuna_6_ins4`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_6_ins5`

- 캐릭터: `teacher_normal.png` @ 0.35
**담임선생님**: *{name}, 오늘 교무실 와줘서 고마웠다*

---

### `night2_reply_yuna_6_ins5`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_6_ins6`

- 캐릭터: `teacher_normal.png` @ 0.35
**담임선생님**: *행정적인 거 끝났으니까 더 안 불러도 된다*

---

### `night2_reply_yuna_6_ins6`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_7`

- 캐릭터: `teacher_normal.png` @ 0.35
**담임선생님**: *...근데 적응 힘들면 언제든 와*

---

### `night2_reply_yuna_7`
- 배경: `room_my.png`
- 호감분기: Yuna
  - [30+] → `night2_reply_yuna_react_high`
  - [기본] → `night2_reply_yuna_react_default`
- 다음: `night2_reply_yuna_react_default`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *세 번째 별? — 창문을 열고 밤하늘을 올려다본다. 세 번째가 어떤 건지는 모르겠다. 유나다운 수수께끼다. — 답은 안 알려주면서, 찾아보게 만드는 사람.*

---

### `night2_reply_yuna_react_high`
- 배경: `room_my.png`
- 플래그: `night2_replied_yuna`
- 스탯: Yuna +2
- 다음: `night2_yuna_freetalk`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: ...이 시간에도 답장하는 사람이 있구나. 내일 도서관에 올래?

---

### `night2_reply_yuna_react_default`
- 배경: `room_my.png`
- 플래그: `night2_replied_yuna`
- 다음: `night2_yuna_freetalk`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: ...응. 잘 자.

---

### `night2_yuna_freetalk`
- 배경: `room_my.png`
- 타입: `free_talk`
- 다음: `night2_hidden_check`
- 컨텍스트: "Day 2 밤, 유나와 메신저로 대화 중. 평소보다 말이 많다. 톤: 어제보다 가까워진 사이. 장난과 티키타카가 자연스럽다. 밀당 시작. 무거운 이야기는 아직 없다."
- 성격: "유나는 신비주의 문학소녀. 밤에는 벽이 조금 낮아진다. 메시지가 길어지면 마음을 열고 있다는 뜻."

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *유나와 밤 메시지를 주고받고 있다.*

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
**{name}**: *담임선생님에게서 개인 메시지가 왔다. '{name}, 오늘 교무실 와줘서 고마웠다. 행정적인 거 끝났으니까 더 안 불러도 된다. ...근데 적응 힘들면 언제든 와.'*

---

### `night2_hidden_homeroom_2`
- 배경: `room_my.png`
- 다음: `night2_hidden_homeroom_3`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *세 줄. 감사, 거리 두기, 다시 다가오기. — 줄다리기를 혼자서 하고 있다.*

---

### `night2_hidden_homeroom_3`
- 배경: `room_my.png`
- 분기:
  - [`nurse_day2`] → `night2_hidden_nurse_1`
  - [기본] → `night2_end_1`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *'더 안 불러도 된다'와 '언제든 와'가 같은 메시지에 들어 있다. 모순인데 — 이 사람답다.*

---

### `night2_hidden_nurse_1`
- 배경: `room_my.png`
- 다음: `night2_hidden_nurse_2`

- 캐릭터: `nurse_normal.png` @ 0.35
**{name}**: *건강 관리 앱 알림. '보건실 기록: {name} — 팔꿈치 찰과상 (경미). 메모: 밴드 내일 아침에 갈아줄게. 밴드 갈아주는 건 의료 행위니까 거부권 없음 ^^'*

---

### `night2_hidden_nurse_2`
- 배경: `room_my.png`
- 다음: `night2_end_1`

- 캐릭터: `nurse_normal.png` @ 0.35
**{name}**: *거부권 없음. — 이 사람한테 이끌리고 있다는 거, 인정해야 하나.*

---

### `night2_end_1`
- 배경: `room_my.png`
- 다음: `night2_end_1_ins`

- 캐릭터: `없음`
**{name}**: *답장을 보내고 핸드폰을 내려놓았다.*

---

### `night2_end_1_ins`
- 배경: `room_my.png`
- 다음: `night2_flashback_1`

- 캐릭터: `없음`
**{name}**: *둘째 날이 끝났다.*

---

### `night2_flashback_1`
- 배경: `room_my.png`
- 다음: `night2_flashback_2`

- 캐릭터: `없음`
**{name}**: *민수가 한 말이 자꾸 돌아온다. '전 학교에서도 이랬어?'*

---

### `night2_flashback_2`
- 배경: `sojeong_flashback.png`
- 다음: `night2_flashback_3`

- 캐릭터: `없음`
**{name}**: *스크롤을 한참 내렸다. 3개월 전. — 사진 한 장이 보인다. 도서관 앞에서 찍은 단체 사진. 소정이가 웃고 있다. 내 옆에서.*

---

### `night2_flashback_3`
- 배경: `room_my.png`
- 다음: `night2_flashback_4`

- 캐릭터: `없음`
**{name}**: *그때 나는 매일 밤 핸드폰을 열었다. 메모장에 뭔가를 쓰다 지우기를 반복했다. — 매번 보내기 직전에 멈췄다.*

---

### `night2_flashback_4`
- 배경: `room_my.png`
- 다음: `night2_flashback_5`

- 캐릭터: `없음`
**{name}**: *그리고 3월 어느 날, 조회 시간에 옆자리 녀석이 말했다. '소정이 남친 생겼대.'*

---

### `night2_flashback_5`
- 배경: `room_my.png`
- 다음: `night2_flashback_6`

- 캐릭터: `없음`
**{name}**: *핸드폰 메모장의 시뮬레이션은 38번째에서 멈춰 있다. 39번째는 없다. 쓸 필요가 없어졌으니까.*

---

### `night2_flashback_6`
- 배경: `room_my.png`
- 다음: `night2_flashback_7`

- 캐릭터: `없음`
**{name}**: *전학은 소정이 때문이 아니다. 아버지 직장 때문이다. — 근데 전학이 싫지 않았다. 소정이가 웃는 복도를 매일 지나가지 않아도 되니까.*

---

### `night2_flashback_7`
- 배경: `room_my.png`
- 다음: `night2_flashback_8`

- 캐릭터: `없음`
**{name}**: *'이번에는 후회 없이 말하자.' — 이 학교에 오면서 한 다짐이었다.*

---

### `night2_flashback_8`
- 배경: `room_my.png`
- 다음: `night2_end_2`

- 캐릭터: `없음`
**{name}**: *갤러리를 닫았다. 사진을 지울까 말까 고민하다가 — 남겨뒀다. 지우면 그때 감정까지 없어질 것 같아서.*

---

### `night2_end_2`
- 배경: `room_my.png`
- 다음: `night2_end_2_ins`

- 캐릭터: `없음`
**{name}**: *둘째 날이 끝났다. 첫날에는 호기심이었다. 이 사람들이 어떤 사람인지 궁금했다.*

---

### `night2_end_2_ins`
- 배경: `room_my.png`
- 다음: `night2_end_2_ins2`

- 캐릭터: `없음`
**{name}**: *오늘은 — 좀 다르다. 궁금한 게 아니라, 신경이 쓰인다. 뭘 하고 있을지, 내일 뭐라고 말할지.*

---

### `night2_end_2_ins2`
- 배경: `room_my.png`
- 다음: `night2_end_3`

- 캐릭터: `없음`
**{name}**: *민수가 한 말이 자꾸 돌아온다. '전 학교에서도 이랬어?'*

---

### `night2_end_3`
- 배경: `room_my.png`
- 다음: `night2_end_3_ins`

- 캐릭터: `없음`
**{name}**: *어제는 신경 쓰이는 정도였다. 오늘은 — 보고 싶다는 말이 목까지 올라왔다가 내려갔다.*

---

### `night2_end_3_ins`
- 배경: `room_my.png`
- 다음: `night2_end_4`

- 캐릭터: `없음`
**{name}**: *문제는 그 거리가 생각보다 빠르게 좁아지고 있다는 거다.*

---

### `night2_end_4`
- 배경: `room_my.png`
- 다음: `night2_end_4_ins`

- 캐릭터: `없음`
**{name}**: *눈을 감는다. — 내일은 조금 더 정직해져야 할지도.*

---

### `night2_end_4_ins`
- 배경: `room_my.png`
- 다음: `night2_end_4_ins2`

- 캐릭터: `없음`
**{name}**: *냉장고를 열었다. 별거 없다. 남은 밥, 계란, 김. — 내일은 뭔가 해가고 싶다는 생각이 들었다. 누구한테? 그건 모르겠다. 그냥, 해가고 싶었다.*

---

### `night2_end_4_ins2`
- 배경: `room_my.png`
- 다음: `morning3_start`

- 캐릭터: `없음`
**{name}**: *대충 도시락을 쌌다. 잘 만든 건 아니다. 정성이라고 하기엔 좀 부끄러운 수준. — 근데 안 하는 것보다는 낫겠지.*

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
**{name}**: *서연이 평소와 다르게 교문 앞에서 기다리고 있다.*

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
**{name}**: *서연이 아무 말 없이 나란히 걷기 시작한다. — 교문에서 교실까지, 이 거리가 이렇게 짧았나.*

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
**서연**: 지각이면 어때. 같이 걸리면 덜 혼나지 않을까?

---

### `morning3_seo_gate_5`
- 배경: `school.png`
- 다음: `morning3_seo_gate_6`

- 캐릭터: `seyoun_laugh.png`
**{name}**: 그건 아닌 것 같은데.

---

### `morning3_seo_gate_6`
- 배경: `school.png`
- 다음: `morning3_seo_gate_6_ins`

- 캐릭터: `seyoun_normal.png`
**서연**: ...농담이야. 내가 어떻게든 해줄게.

---

### `morning3_seo_gate_6_ins`
- 배경: `school.png`
- 다음: `morning3_seo_gate_7`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 걸어간다. 당당하게. 늦었는데도 서두르지 않는다.*

---

### `morning3_seo_gate_7`
- 배경: `school.png`
- 플래그: `morning3_companion_seoyeon`
- 다음: `morning3_classroom_1`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 걸어간다. 당당하게. 늦었는데도 서두르지 않는다. — 이 사람은 늦어도 당당하다. 아니, 당당한 척하는 게 몸에 배어 있는 거다.*

---

### `morning3_seo_gate_cold_1`
- 배경: `school.png`
- 다음: `morning3_seo_gate_cold_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 지나가다 잠깐 멈춘다.*

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
- 다음: `morning3_yuna_gate_6_ins`

- 캐릭터: `yuna_normal.png`
**{name}**: *밤새 책 읽고 지각하는 사람. — 유나답다. 그게 좋다.*

---

### `morning3_yuna_gate_6_ins`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_6_ins2`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 말 없이 가방을 뒤적이더니, 작은 빵을 꺼내 반으로 갈라 내밀었다. 가방 안쪽에서 쪽지가 살짝 보인다.*

---

### `morning3_yuna_gate_6_ins2`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_6_ins3`

- 캐릭터: `yuna_normal.png`
**{name}**: *쪽지: 아침 안 먹었을 것 같아서.*

---

### `morning3_yuna_gate_6_ins3`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_7`

- 캐릭터: `yuna_normal.png`
**{name}**: *말로 하면 될 걸 굳이 쪽지로 쓰는 사람. — 그게 유나다.*

---

### `morning3_yuna_gate_7`
- 배경: `school.png`
- 플래그: `morning3_companion_yuna`
- 다음: `morning3_classroom_1`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 가방에서 작은 빵을 꺼낸다. 둘이 나눠 먹으며 천천히 교문을 통과한다.*

---

### `morning3_yuna_gate_cold_1`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_cold_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 먼저 지나간다. 눈이 마주쳤지만, 고개를 돌린다.*

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
**{name}**: *다인이 달려오며 팔짱을 낀다.*

---

### `morning3_dain_gate_warm_2`
- 배경: `school.png`
- 다음: `morning3_dain_gate_warm_3`

- 캐릭터: `dain_laugh.png`
**다인**: 야! 늦을 뻔했잖아! 같이 가자!

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
**다인**: 야야야!! 늦었다!! 뛰어!!

---

### `morning3_dain_gate_3`
- 배경: `school.png`
- 다음: `morning3_dain_gate_4`

- 캐릭터: `dain_normal.png`
**{name}**: *다인이 다짜고짜 손을 잡고 달리기 시작한다.*

---

### `morning3_dain_gate_4`
- 배경: `school.png`
- 다음: `morning3_dain_gate_4_ins`

- 캐릭터: `dain_normal.png`
**{name}**: 잠깐 — 왜 손을 잡아?!

---

### `morning3_dain_gate_4_ins`
- 배경: `school.png`
- 다음: `morning3_dain_gate_5`

- 캐릭터: `dain_normal.png`
**다인**: 이렇게 해야 빨라!! 의문 품지 마!!

---

### `morning3_dain_gate_5`
- 배경: `school.png`
- 플래그: `morning3_companion_dain`
- 다음: `morning3_dain_gate_5_ins`

- 캐릭터: `dain_normal.png`
**{name}**: *손이 뜨겁다. 땀 때문인지, 다인 때문인지 — 달리면서 생각할 여유가 없다.*

---

### `morning3_dain_gate_5_ins`
- 배경: `school.png`
- 다음: `morning3_classroom_1`

- 캐릭터: `dain_normal.png`
**{name}**: *교문을 넘어가는 순간 다인이 착지하면서 읏 하고 작게 소리를 냈다. 근데 돌아보면 아무렇지 않게 웃고 있다. — 잘못 들은 건가.*

---

### `morning3_dain_gate_cold_1`
- 배경: `school.png`
- 다음: `morning3_dain_gate_cold_2`

- 캐릭터: `dain_normal.png`
**{name}**: *다인이 다른 친구들과 뛰어간다.*

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
**{name}**: *교실에 들어서자, 동행을 목격한 나머지 두 캐릭터의 시선이 느껴진다.*

---

### `morning3_react_seo_1`
- 배경: `room_school.png`
- 다음: `morning3_react_seo_2`

- 캐릭터: `dain_normal.png`
**다인**: 야! 회장님이랑 같이 왔어?! 아침부터?!

---

### `morning3_react_seo_2`
- 배경: `room_school.png`
- 다음: `morning3_date_intro`

- 캐릭터: `yuna_bored.png`
**{name}**: *유나가 창밖에서 시선을 돌려 잠깐 이쪽을 본다. — 다시 창밖으로.*

---

### `morning3_react_yuna_1`
- 배경: `room_school.png`
- 다음: `morning3_react_yuna_1_ins`

- 캐릭터: `seyoun_pout.png`
**서연**: 같이 등교? 사이 좋네.

---

### `morning3_react_yuna_1_ins`
- 배경: `room_school.png`
- 다음: `morning3_react_yuna_1b`

- 캐릭터: `seyoun_pout.png`
**{name}**: *다인이 대놓고.*

---

### `morning3_react_yuna_1b`
- 배경: `room_school.png`
- 다음: `morning3_react_yuna_2`

- 캐릭터: `seyoun_pout.png`
**{name}**: *교실로 돌아왔다.*

---

### `morning3_react_yuna_2`
- 배경: `room_school.png`
- 다음: `morning3_react_yuna_2_ins`

- 캐릭터: `dain_normal.png`
**다인**: 부러워!! 나도 아침에 같이 올 사람 없는데!!

---

### `morning3_react_yuna_2_ins`
- 배경: `room_school.png`
- 다음: `morning3_date_intro`

- 캐릭터: `dain_normal.png`
**{name}**: *서연이 교실 문 앞에서 자연스럽게.*

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
**{name}**: *유나가 조용히 관찰하고 있다. 쪽지를 쓰는 것 같다.*

---

### `morning3_date_intro`
- 배경: `room_school.png`
- 다음: `morning3_date_intro_b`

- 캐릭터: `없음`
**{name}**: *1교시가 끝나고 쉬는 시간. — 한 번에 몰아치듯 오진 않는다. 근데 오늘은, 누군가가 계속 타이밍을 맞춰 말을 건다.*

---

### `morning3_date_intro_b`
- 배경: `school_hallway.png`
- 다음: `morning3_date_seo_1`

- 캐릭터: `없음`
**{name}**: *쉬는 시간, 복도로 나왔다. 서연이 먼저 걸음을 맞춘다.*

---

### `hidden_homeroom_d3_1`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_2`

- 캐릭터: `teacher_normal.png`
**{name}**: *쉬는 시간. 빈 교실 앞을 지나가는데 — 안에서 인기척이 난다. 조용히 다가간다.*

---

### `hidden_homeroom_d3_2`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임선생님이 교탁에 앉아 뭔가를 쓰고 있다. 펜을 멈추고 고개를 든다. — 나와 눈이 마주친다.*

---

### `hidden_homeroom_d3_3`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_3_ins`

- 캐릭터: `teacher_shy.png`
**담임선생님**: ......

---

### `hidden_homeroom_d3_3_ins`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_3_ins2`

- 캐릭터: `teacher_shy.png`
**{name}**: *얼어붙는다. — 담임의 표정이 처음 보는 거다. 들킨 사람의 얼굴.*

---

### `hidden_homeroom_d3_3_ins2`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4`

- 캐릭터: `teacher_shy.png`
**{name}**: *담임이 재빨리 원고지를 뒤집어 놓는다.*

---

### `hidden_homeroom_d3_4`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4_ins`

- 캐릭터: `teacher_sad.png`
**담임선생님**: ...아무것도 아니야. 업무 서류야. — ...눈치 빠른 건 장점인데, 가끔 단점이야.

---

### `hidden_homeroom_d3_4_ins`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4_ins2`

- 캐릭터: `teacher_sad.png`
**{name}**: *담임의 손이 원고지 위에 멈춰 있다. 뒤집어 놓은 종이 사이로 글씨가 빼곡한 게 보인다.*

---

### `hidden_homeroom_d3_4_ins2`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4_ins3`

- 캐릭터: `teacher_sad.png`
**{name}**: *업무 서류라고 했지만 — 교사용 서류는 A4에 인쇄한다. 원고지에 손글씨로 쓰지 않는다.*

---

### `hidden_homeroom_d3_4_ins3`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4_ins4`

- 캐릭터: `teacher_sad.png`
**{name}**: *담임의 표정이 금방 돌아온다. 평소의 무심한 얼굴. — 스위치 전환이 너무 빠르다.*

---

### `hidden_homeroom_d3_4_ins4`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4_ins5`

- 캐릭터: `teacher_sad.png`
**담임선생님**: ...뭘 봐. 쉬는 시간에 여길 왜 와.

---

### `hidden_homeroom_d3_4_ins5`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_choice`

- 캐릭터: `teacher_sad.png`
**{name}**: *원고지. 빼곡한 글씨. 숨기려는 표정. — 물어볼까, 모른 척할까.*

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
- 다음: `hidden_homeroom_d3_reveal_1_ins`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...소설이라고 하기엔 부끄럽고. 습작이라고 하기엔 너무 오래 됐고. 7년.

---

### `hidden_homeroom_d3_reveal_1_ins`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_1_ins2`

- 캐릭터: `teacher_normal.png`
**{name}**: 얼마나요?

---

### `hidden_homeroom_d3_reveal_1_ins2`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_1_ins3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 7년. *창밖을 보며* 대학 때 시작했어. 문예창작과.

---

### `hidden_homeroom_d3_reveal_1_ins3`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_1_ins4`

- 캐릭터: `teacher_normal.png`
**{name}**: 선생님이 문예창작과요?

---

### `hidden_homeroom_d3_reveal_1_ins4`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_1_ins5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 졸업하고 등단 준비했는데 — 2년 동안 떨어졌어. 세 번. 생활비는 바닥나고, 부모님은 '이제 현실적으로 생각해'라고 하시고.

---

### `hidden_homeroom_d3_reveal_1_ins5`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_2`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 원고지를 한 장 들어올린다. 글씨가 빼곡하다.*

---

### `hidden_homeroom_d3_reveal_2`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_2_ins`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 네 번째 원고를 넣고 나서 — 결과 발표 날, 전화가 안 와서. 그날 교대 원서를 썼어.

---

### `hidden_homeroom_d3_reveal_2_ins`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_2_ins2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...아무것도 아니야. 업무 서류야.

---

### `hidden_homeroom_d3_reveal_2_ins2`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_2_ins3`

- 캐릭터: `teacher_normal.png`
**{name}**: 업무 서류를 빈 교실에서요?

---

### `hidden_homeroom_d3_reveal_2_ins3`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_2_ins4`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 잠깐 입을 다문다. 그리고 — 한숨을 쉰다. 짧게.*

---

### `hidden_homeroom_d3_reveal_2_ins4`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_2_ins5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...눈치 빠른 건 장점인데, 가끔 단점이야.

---

### `hidden_homeroom_d3_reveal_2_ins5`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 잠깐 멈춘다. 원고지를 만지작거린다. — 그리고 의자에 기대앉는다.*

---

### `hidden_homeroom_d3_reveal_3`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_3_ins`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 임용시험 봤어. 국어 교사. — 소설 쓰던 사람이 국어를 가르치고 있으니, 아이러니하지?

---

### `hidden_homeroom_d3_reveal_3_ins`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_3_ins2`

- 캐릭터: `teacher_normal.png`
**{name}**: 포기한 거예요?

---

### `hidden_homeroom_d3_reveal_3_ins2`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_4`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 원고지를 내려놓는다. 천천히.*

---

### `hidden_homeroom_d3_reveal_4`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_4_ins`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 포기라고 하면 편하겠지. 근데 가끔 이렇게 빈 교실에서 꺼내 보는 걸 보면 — 포기를 못 한 거겠지.

---

### `hidden_homeroom_d3_reveal_4_ins`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_4_ins2`

- 캐릭터: `teacher_normal.png`
**{name}**: *이 사람의 건조함 뒤에 이런 이야기가 있었구나. — 교탁 서랍의 미완성 원고. 7년 동안.*

---

### `hidden_homeroom_d3_reveal_4_ins2`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_4_ins3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *갑자기 정색하며* ...이거 아무한테도 말하면 안 돼. 학생이 선생님의 — 이런 모습 알면 권위가 — 뭐 원래 없지만.

---

### `hidden_homeroom_d3_reveal_4_ins3`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_4_ins4`

- 캐릭터: `teacher_normal.png`
**{name}**: 비밀이요?

---

### `hidden_homeroom_d3_reveal_4_ins4`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_4_ins5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *머리카락을 넘기며* 비밀이야. — 교육적으로 좋은 본보기는 아니니까. 학생한테 이런 얘기까지 하면.

---

### `hidden_homeroom_d3_reveal_4_ins5`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_4_ins6`

- 캐릭터: `teacher_normal.png`
**{name}**: *'교육적으로'. — 또 업무로 포장하고 있다. 근데 이번에는 진심으로 후회하는 톤이다.*

---

### `hidden_homeroom_d3_reveal_4_ins6`
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
**담임선생님**: *멈칫한다. 원고지를 만지던 손이 멈춘다.* ...끈기라고 해줄 사람은 처음이야.

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
**담임선생님**: *갑자기 정색하며* ...이거 아무한테도 말하면 안 돼. 학생이 선생님의 — 이런 모습 알면 권위가 — 뭐 원래 없지만.

---

### `hidden_homeroom_d3_reveal_6`
- 배경: `room_school.png`
- 플래그: `discovered_manuscript`
- 다음: `hidden_homeroom_d3_reveal_6_ins`

- 캐릭터: `teacher_smile.png`
**{name}**: *담임이 웃는다. 건조하지 않은, 살짝 어색한 웃음. 웃는 법을 까먹은 사람처럼.*

---

### `hidden_homeroom_d3_reveal_6_ins`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_6_ins2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...첫 번째 독자 지원이네. 7년 만에.

---

### `hidden_homeroom_d3_reveal_6_ins2`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_6_ins3`

- 캐릭터: `teacher_smile.png`
**{name}**: *웃음이 어색하다. — 그 어색함이 마음을 찔렀다.*

---

### `hidden_homeroom_d3_reveal_6_ins3`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_6_ins4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *멈칫한다. 원고지를 만지던 손이 멈춘다.* ...끈기라고 해줄 사람은 처음이야.

---

### `hidden_homeroom_d3_reveal_6_ins4`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_6_ins5`

- 캐릭터: `teacher_smile.png`
**{name}**: *이 사람은 7년을 '포기 못 한 거'라고 했다. 근데 관점을 바꿔주는 한마디에 — 눈이 흔들렸다.*

---

### `hidden_homeroom_d3_reveal_6_ins5`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_6_ins6`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 조용하니까. — 교무실은 커피 냄새도 많고, 다른 선생들 눈치도 보이고.

---

### `hidden_homeroom_d3_reveal_6_ins6`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_6_ins7`

- 캐릭터: `teacher_smile.png`
**{name}**: *빈 교실을 고른 이유가 실용적이면서도 — 혼자만의 공간이 필요한 사람이라는 뜻이기도 하다.*

---

### `hidden_homeroom_d3_reveal_6_ins7`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_end`

- 캐릭터: `teacher_smile.png`
**{name}**: *선생님이라는 직함 뒤에 숨겨진 서랍을 열어버린 기분이다. 닫아야 하는데 — 손이 떨어지지 않는다.*

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
**{name}**: *담임이 머리카락을 넘기며 교실을 나선다. — 이 사람한테 '부탁'은 드문 단어다.*

---

### `hidden_homeroom_d3_freetalk`
- 배경: `room_school.png`
- 타입: `free_talk`
- 다음: `hidden_nurse_d3_check`
- 컨텍스트: "Day 3 아침. 빈 교실에서 담임선생님이 소설 원고를 쓰고 있는 걸 발견했다. 7년간 숨겨온 비밀. 톤: 밝지만 어딘가 그림자가 있다. 웃으면서도 눈이 안 웃는 순간이 있다. 가벼운 대화 사이에 진심이 살짝 비친다."
- 성격: "담임선생님은 소설가 지망생이었다. 교사가 되었지만 포기하지 못한 꿈. 들킨 것에 대한 부끄러움과 안도가 공존."

- 캐릭터: `teacher_normal.png`
**담임선생님**: *담임선생님과 빈 교실에서 대화 중.*

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
- 다음: `hidden_nurse_d3_1_ins`

- 캐릭터: `nurse_normal.png`
**{name}**: *아침부터 뭔가 불안하다. 발이 보건실로 향한다. 아프지 않은데.*

---

### `hidden_nurse_d3_1_ins`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_1_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건실 문을 연다.*

---

### `hidden_nurse_d3_1_ins2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_1_ins3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *고개를 들며* ...어? 오늘은 어디 다쳤어?

---

### `hidden_nurse_d3_1_ins3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_1_ins4`

- 캐릭터: `nurse_normal.png`
**{name}**: 아프진 않은데요.

---

### `hidden_nurse_d3_1_ins4`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_1_ins5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 아프지 않은데 보건실에?

---

### `hidden_nurse_d3_1_ins5`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_2`

- 캐릭터: `nurse_normal.png`
**{name}**: ...좀 쉬고 싶어서요.

---

### `hidden_nurse_d3_2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_2_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...그럼 왜 왔어? 표정이 안 좋은데.

---

### `hidden_nurse_d3_2_ins`
- 배경: `room_school.png`
- 다음: `hidden_nurse_d3_2_ins2`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 '부탁'이라는 말을 쓴다. — 이 사람한테 그건 드문 단어다.*

---

### `hidden_nurse_d3_2_ins2`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d3_2_ins3`

- 캐릭터: `teacher_normal.png`
**{name}**: *교실을 나서는데 — 뒤에서 작게.*

---

### `hidden_nurse_d3_2_ins3`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d3_2_ins4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...고마워.

---

### `hidden_nurse_d3_2_ins4`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d3_2_ins5`

- 캐릭터: `없음`
**{name}**: *뭐가 고마운 건지는 모르겠다. 안 봐줘서? 아니면 — 여기까지 와줘서?*

---

### `hidden_nurse_d3_2_ins5`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d3_3`

- 캐릭터: `없음`
**{name}**: *점심시간 직전. — 아침 내내 마음이 가라앉지 않는다. 너무 많은 얼굴을 보고, 너무 많은 말을 들은 탓일까. 뭐가 이렇게 빨리 흔들리는 건지 모르겠다.*

---

### `hidden_nurse_d3_3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_3_ins`

- 캐릭터: `nurse_normal.png`
**{name}**: ...좀 쉬고 싶어서요. 그냥... 사람 관계가 복잡해져서.

---

### `hidden_nurse_d3_3_ins`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_3_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 잠깐 나를 본다. 장난기가 사라진다.*

---

### `hidden_nurse_d3_3_ins2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_3_ins3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...앉아.

---

### `hidden_nurse_d3_3_ins3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_3_ins4`

- 캐릭터: `nurse_normal.png`
**{name}**: *목소리가 달라졌다. 장난이 아닌 톤. — 이 사람이 진지해지면 분위기가 확 바뀐다.*

---

### `hidden_nurse_d3_3_ins4`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_4`

- 캐릭터: `nurse_normal.png`
**{name}**: *침대에 앉는다. 보건선생님이 물을 건넨다.*

---

### `hidden_nurse_d3_4`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...앉아. 농담 아니고, 표정 안 좋아. 무슨 일 있어?

---

### `hidden_nurse_d3_5`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그거 연애 상담이야? — 아닌 척하는 게 제일 티 나는 거야.

---

### `hidden_nurse_d3_5_ins`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 잠깐 멈춘다. — 눈이 부드러워진다.*

---

### `hidden_nurse_d3_5_ins2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_ins3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...비슷해? 그럼 여기 온 거 잘한 거다.

---

### `hidden_nurse_d3_5_ins3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_ins4`

- 캐릭터: `nurse_normal.png`
**{name}**: *'비슷하다'는 한마디에 태도가 달라졌다. — 공감을 받으면 열리는 사람이구나.*

---

### `hidden_nurse_d3_5_ins4`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_ins5`

- 캐릭터: `nurse_normal.png`
**{name}**: 그냥... 사람 관계가 복잡해져서.

---

### `hidden_nurse_d3_5_ins5`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_ins6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *의자를 끌어와 앞에 앉으며* 사람 관계.

---

### `hidden_nurse_d3_5_ins6`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_ins7`

- 캐릭터: `nurse_normal.png`
**{name}**: 여러 명이 동시에 신경 쓰이는데, 한 명만 선택해야 할 것 같은...

---

### `hidden_nurse_d3_5_ins7`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_ins8`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 잠깐 침묵한다. 그리고.*

---

### `hidden_nurse_d3_5_ins8`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_ins9`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그거 연애 상담이야?

---

### `hidden_nurse_d3_5_ins9`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_ins10`

- 캐릭터: `nurse_normal.png`
**{name}**: 아, 그런 건 아니...

---

### `hidden_nurse_d3_5_ins10`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_ins11`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *피식* 아닌 척하는 게 제일 티 나는 거야.

---

### `hidden_nurse_d3_5_ins11`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_ins12`

- 캐릭터: `nurse_normal.png`
**{name}**: *정곡이다. — 이 사람의 관찰력은 장난이 아니다.*

---

### `hidden_nurse_d3_5_ins12`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_ins13`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 선생님이 이런 상담까지 해줘야 하나... *턱을 괴며* 근데 들어줄게. 보건실이니까. 몸뿐만 아니라 마음도 건강해야 하잖아?

---

### `hidden_nurse_d3_5_ins13`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_ins14`

- 캐릭터: `nurse_normal.png`
**{name}**: 선생님도 그런 적 있어요? 여러 사람 사이에서 혼란스러운.

---

### `hidden_nurse_d3_5_ins14`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_ins15`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 잠깐 멈춘다. 시선이 창밖으로 간다.*

---

### `hidden_nurse_d3_5_ins15`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_ins16`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...있었지. 대학병원에서 일할 때.

---

### `hidden_nurse_d3_5_ins16`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_choice1`

- 캐릭터: `nurse_normal.png`
**{name}**: 대학병원이요?

---

### `hidden_nurse_d3_choice1`
- 배경: `nurse_room.png`
- 선택지:
  1. "비슷한 것 같기도..." → `hidden_nurse_d3_choice1_a` | Nurse +7
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
**보건선생님**: *의자를 끌어와 앞에 앉으며* 사람 관계. — 그거 연애 상담이야? *피식* 아닌 척하는 게 제일 티 나는 거야.

---

### `hidden_nurse_d3_6`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 대학병원에서 일할 때. 환자가 너무 많았어. 다 살리고 싶은데, 손이 두 개밖에 없잖아. 결국 한 명도 제대로 못 챙기는 기분이 들더라.

---

### `hidden_nurse_d3_6_ins`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: *환자 이야기를 하는데, 왠지 지금 내 상황이랑 겹친다.*

---

### `hidden_nurse_d3_6_ins2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6_ins3`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 물컵을 내려놓는다. 천천히.*

---

### `hidden_nurse_d3_6_ins3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6_ins4`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...그만뒀다기보다. 도망쳤지. *살짝 웃으며* 멋있는 이유 같은 건 없어.

---

### `hidden_nurse_d3_6_ins4`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6_ins5`

- 캐릭터: `nurse_normal.png`
**{name}**: *'도망'이라는 단어를 스스로 쓴다. — 이 사람은 자기 약함을 인정하는 데 익숙하다.*

---

### `hidden_nurse_d3_6_ins5`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6_ins6`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 잠깐 멈춘다. 청진기를 만진다.*

---

### `hidden_nurse_d3_6_ins6`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6_ins7`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...있었지. 못 살린 환자 한 명. *시선이 멀어진다.* 그 사람 때문에 여기 온 거야.

---

### `hidden_nurse_d3_6_ins7`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_7`

- 캐릭터: `nurse_normal.png`
**{name}**: *한 명. — 그 한 명이 이 사람의 인생을 바꿨구나.*

---

### `hidden_nurse_d3_7`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_7_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그래서 여기 왔어. 학교에서는 — 한 명 한 명 제대로 볼 수 있으니까.

---

### `hidden_nurse_d3_7_ins`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 나를 본다. 진지하게.*

---

### `hidden_nurse_d3_8`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 너도 마찬가지야. 다 챙기려고 하지 마. — 진짜 중요한 사람 한 명을 제대로 보는 게 낫지 않겠어?

---

### `hidden_nurse_d3_8_ins`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: *진심이다. 장난기가 완전히 사라졌다. — 이 사람의 목소리가 한 톤 낮아지면, 그건 진심의 신호다.*

---

### `hidden_nurse_d3_8_ins2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_ins3`

- 캐릭터: `nurse_normal.png`
**{name}**: ...감사합니다.

---

### `hidden_nurse_d3_8_ins3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_ins4`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *다시 장난스럽게* 뭘~ 이 정도는 서비스야. — 다음에 또 와. 아프든 안 아프든.

---

### `hidden_nurse_d3_8_ins4`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_ins5`

- 캐릭터: `nurse_normal.png`
**{name}**: *'아프든 안 아프든'. — 이 사람이 나를 환자가 아닌 다른 뭔가로 보기 시작한 건 아닐까.*

---

### `hidden_nurse_d3_8_ins5`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_choice2`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건실을 나서는데 — 뒤에서 작게.*

---

### `hidden_nurse_d3_choice2`
- 배경: `nurse_room.png`
- 선택지:
  1. "그래서 병원 그만두신 거예요?" → `hidden_nurse_d3_choice2_a` | Nurse +12
  2. "선생님도 그 한 명이 있어요?" → `hidden_nurse_d3_choice2_b` | Nurse +5

- 캐릭터: `nurse_normal.png`
**{name}**: *한 명을 제대로 — 대학병원 얘기만은 아닌 것 같다.*

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
- 다음: `hidden_nurse_d3_9_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...진짜 중요한 사람. 혹시 그게 선생님이면 어쩌지?

---

### `hidden_nurse_d3_9_ins`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: *...뭐? — 발이 멈췄다. 소독약 냄새만 공기 중에 무겁게 가라앉았다.*

---

### `hidden_nurse_d3_9_ins2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9_ins3`

- 캐릭터: `nurse_normal.png`
**{name}**: *천천히 돌아봤다.*

---

### `hidden_nurse_d3_9_ins3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9_ins4`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 — 웃고 있지 않다. 청진기를 만지작거리며 창밖을 보고 있다. 방금 자기가 한 말을 자기도 몰랐던 사람처럼.*

---

### `hidden_nurse_d3_9_ins4`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9_ins5`

- 캐릭터: `nurse_normal.png`
**{name}**: *0.7초.*

---

### `hidden_nurse_d3_9_ins5`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9_ins6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *겨우 웃으며* 농담이야~ 가 봐!

---

### `hidden_nurse_d3_9_ins6`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9_ins7`

- 캐릭터: `nurse_normal.png`
**{name}**: *농담. — 맞겠지?*

---

### `hidden_nurse_d3_9_ins7`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9_ins8`

- 캐릭터: `nurse_normal.png`
**{name}**: *맞겠지, 라고 생각하면서도 발이 안 떼진다. 방금 그 0.7초짜리 표정이 — 장난기가 없었다.*

---

### `hidden_nurse_d3_9_ins8`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_10`

- 캐릭터: `nurse_normal.png`
**{name}**: *소독약 냄새가 갑자기 짙어졌다. 여기서 한 발짝 더 가면 — 이 사람을 더 이상 '선생님'으로 부를 수 없을 것 같다.*

---

### `hidden_nurse_d3_10`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_11`

- 캐릭터: `nurse_normal.png`
**{name}**: *...뭐? — 돌아봤다. 보건선생님이 창밖을 보고 있다. 웃고 있지 않다. 처음 보는 표정이다.*

---

### `hidden_nurse_d3_11`
- 배경: `nurse_room.png`
- 플래그: `nurse_day3`, `nurse_route_unlocked`
- 다음: `hidden_nurse_d3_freetalk`

- 캐릭터: `nurse_shy.png`
**보건선생님**: ...농담이야~ 가 봐!

---

### `hidden_nurse_d3_freetalk`
- 배경: `nurse_room.png`
- 타입: `free_talk`
- 다음: `morning3_date_seo_1`
- 컨텍스트: "Day 3. 불안한 마음에 보건실을 찾았다. 보건선생님이 진지하게 상담해줬다. 대학병원 번아웃 이야기. 톤: 밝지만 어딘가 그림자가 있다. 웃으면서도 눈이 안 웃는 순간이 있다. 가벼운 대화 사이에 진심이 살짝 비친다."
- 성격: "보건선생님은 평소 장난스럽지만 진지해지면 분위기가 완전히 달라진다. 번아웃 경험을 가진 전문가. 감정과 직함 사이에서 흔들린다."

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님과 보건실에서 대화 중.*

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
  2. "좀 바쁠 것 같은데" → `morning3_date_seo_decline` | Seoyeon -3

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 복도에서 스치며 물어본다.*

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
**다인**: 야! 주말에 뭐 해?! 같이 오락실 갈래?!

---

### `morning3_date_dain_2`
- 배경: `room_school.png`
- 다음: `morning3_date_dain_3`

- 캐릭터: `dain_normal.png`
**{name}**: *다인의 손가락이 책상 모서리를 두드리고 있다. 긴장하는 건가? — 아니다. 다인이 긴장할 리 없다. 이 정도는 일상이겠지.*

---

### `morning3_date_dain_3`
- 배경: `room_school.png`
- 다음: `morning3_date_dain_choice`

- 캐릭터: `dain_normal.png`
**{name}**: *...맞겠지?*

---

### `morning3_date_dain_choice`
- 배경: `room_school.png`
- 선택지:
  1. "좋아, 콜" → `morning3_date_dain_accept` | Dain +5 | 플래그: `accepted_dain_date`
  2. "주말은 좀..." → `morning3_date_dain_decline` | Dain -3

- 캐릭터: `dain_normal.png`
**{name}**: *다인이 다음 쉬는 시간에 자리로 와서 물어본다.*

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
- 다음: `morning3_date_dain_decline_inner`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인의 반응을 지켜본다. — 종이 치고, 점심 직전의 짧은 틈이 다시 온다.*

---

### `morning3_date_dain_decline_inner`
- 배경: `room_school.png`
- 다음: `morning3_date_dain_decline_inner_2`

- 캐릭터: `dain_laugh.png`
**{name}**: *밝게 웃으며 돌아갔다. — 그때는 몰랐다. 다인이 그 손가락 두드리는 걸 멈추고, 주머니에 손을 넣은 걸. 용기 내서 물어본 거였다는 걸.*

---

### `morning3_date_dain_decline_inner_2`
- 배경: `room_school.png`
- 다음: `morning3_date_yuna_1`

- 캐릭터: `dain_laugh.png`
**{name}**: *눈치 빠르다고 자부하면서. — 정작 중요한 순간에 틀린다.*

---

### `morning3_date_yuna_1`
- 배경: `room_school.png`
- 다음: `morning3_date_yuna_1_ins`

- 캐릭터: `yuna_normal.png`
**{name}**: *점심 직전, 유나의 쪽지가 책상 위에 놓여 있다.*

---

### `morning3_date_yuna_1_ins`
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
**{name}**: *쪽지를 조용히 접어 주머니에 넣었다. 답장은 쓰지 않았다. — 유나가 고개를 살짝 숙인다. 알겠다는 뜻인 것 같다.*

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
- 다음: `morning3_end_ins`

- 캐릭터: `없음`
**{name}**: *어느덧 수업이 이어지고 점심시간이 다가온다.*

---

### `morning3_end_ins`
- 배경: `room_school.png`
- 다음: `lunch3_start`

- 캐릭터: `yuna_normal.png`
**유나**: ...맛있네.

---

## 3일차 — 점심 `day3_2_lunch`

### `lunch3_start`
- 배경: `room_school.png`
- BGM: `daily.mp3`
- 다음: `lunch3_start_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *점심시간. 오늘은 특이하게 — 세 명이 한자리에 모였다.*

---

### `lunch3_start_2`
- 배경: `room_school.png`
- 다음: `lunch3_start_2_ins`

- 캐릭터: `yuna_normal.png`
**{name}**: *{name}이 도시락을 펼친다. 서연이 자연스럽게 옆에 앉고, 다인이 맞은편에 털썩 앉고, 유나가 구석에서 자기 빵을 먹으며 슬쩍 끼어든다.*

---

### `lunch3_start_2_ins`
- 배경: `room_school.png`
- 다음: `lunch3_meal_1`

- 캐릭터: `dain_normal.png`
**다인**: *거침없이 계란말이를 한 입 베어 문다.*

---

### `lunch3_meal_1`
- 배경: `room_school.png`
- 다음: `lunch3_meal_2`

- 캐릭터: `dain_laugh.png`
**다인**: 오! 맛있다!!

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

- 캐릭터: `seyoun_normal.png`
**{name}**: *유나가 말없이 젓가락을 뻗어 제일 맛있어 보이는 소시지를 집어간다.*

---

### `lunch3_meal_7`
- 배경: `room_school.png`
- 다음: `lunch3_meal_7_ins`

- 캐릭터: `seyoun_normal.png`
**{name}**: ...유나, 그건 내가 제일 좋아하는 건데.

---

### `lunch3_meal_7_ins`
- 배경: `room_school.png`
- 다음: `lunch3_meal_8`

- 캐릭터: `yuna_normal.png`
**유나**: *이미 씹으며* ...맛있네.

---

### `lunch3_meal_8`
- 배경: `room_school.png`
- 다음: `lunch3_meal_9`

- 캐릭터: `yuna_bored.png`
**유나**: ...맛있네.

---

### `lunch3_meal_9`
- 배경: `room_school.png`
- 다음: `lunch3_meal_10`

- 캐릭터: `yuna_bored.png`
**{name}**: *약탈당했다. 세 명에게 동시에.*

---

### `lunch3_meal_10`
- 배경: `room_school.png`
- 다음: `lunch3_meal_10_ins`

- 캐릭터: `yuna_bored.png`
**{name}**: *반찬이 하나 남았다. 마지막 계란말이.*

---

### `lunch3_meal_10_ins`
- 배경: `room_school.png`
- 다음: `lunch3_meal_10_ins2`

- 캐릭터: `yuna_bored.png`
**{name}**: *다 같이 먹자라고 말했다. — 공기가 무거워졌다.*

---

### `lunch3_meal_10_ins2`
- 배경: `room_school.png`
- 분기:
  - [`route_seoyeon`] → `lunch3_meal_10_ins3`
  - [`route_dain`] → `lunch3_meal_10_ins4`
  - [`route_yuna`] → `lunch3_meal_10_ins5`
  - [기본] → `lunch3_meal_11`

- 캐릭터: `yuna_bored.png`
**{name}**: *두 사람이 자리를 뜬 뒤, 선택한 히로인과 단둘이 남는다. — 선택이라는 게 이렇게 무겁다.*

---

### `lunch3_meal_10_ins3`
- 배경: `room_school.png`
- 다음: `lunch3_meal_11`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연의 젓가락이 잠깐 멈춘다. 표정 관리. 학생회장의 얼굴로 돌아간다. — 괜찮지 않다는 걸 안다. 미안해졌다.*

---

### `lunch3_meal_10_ins4`
- 배경: `room_school.png`
- 다음: `lunch3_meal_11`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인이 다 같이?! 좋지!! 느낌표가 살아 있다. — 근데 목소리가 반 톤 낮다. 평소 같았으면 의자를 끌고 왔을 텐데, 오늘은 앉은 자리에서 움직이지 않는다.*

---

### `lunch3_meal_10_ins5`
- 배경: `room_school.png`
- 다음: `lunch3_meal_11`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 고개만 끄덕인다. 쪽지를 쓰다 접어서 주머니에 넣는다. 안 건넨다. — 뭐라고 적었는지는, 모르겠다.*

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
**{name}**: *서연이 도시락을 내려놓는다. 표정이 없다.*

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
**다인**: 진짜?! 고마워!! 역시 {name}이 최고!!

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
- 다음: `lunch3_dain_skin_2`

- 캐릭터: `dain_shy.png`
**{name}**: *점심 내기에서 이겨서 흥분한 다인이 양팔을 벌린다. 안긴다. 1초.*

---

### `lunch3_dain_skin_2`
- 배경: `room_school.png`
- 다음: `lunch3_dain_skin_3`

- 캐릭터: `dain_shy.png`
**{name}**: *다인이 튕기듯 떨어진다. 귀가 빨갛다.*

---

### `lunch3_dain_skin_3`
- 배경: `room_school.png`
- 플래그: `day3_skinship_dain`
- 다음: `lunch3_give_dain_2`

- 캐릭터: `dain_shy.png`
**다인**: 지금 거 카운트 아니야!!

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
- 다음: `lunch3_dain_witness_2`

- 캐릭터: `yuna_sad.png`
**{name}**: *유나가 복도를 지나가다 체육관 안을 본다. 다인이 웃고 있다. 유나는 발걸음을 빠르게 한다.*

---

### `lunch3_dain_witness_2`
- 배경: `school_hallway.png`
- 다음: `lunch3_dain_witness_2b`

- 캐릭터: `yuna_sad.png`
**{name}**: *다음 쉬는 시간, 유나의 자리가 비어 있다.*

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
**{name}**: *표정이 무감정하다. 그게 더 무섭다.*

---

### `lunch3_give_yuna_3`
- 배경: `room_school.png`
- 스탯: Dain -3
- 분기:
  - [`day3_has_multiple_dates`] → `lunch3_expose_1`
  - [기본] → `lunch3_end`

- 캐릭터: `dain_pout.png`
**다인**: 뭐야! 나는?!

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
**다인**: 아 맞다! {name} 주말에 나랑 오락실 가기로 했잖아!! 뭐 먹고 갈까?!

---

### `lunch3_expose_3`
- 배경: `room_school.png`
- 다음: `lunch3_expose_3_ins`

- 캐릭터: `dain_laugh.png`
**{name}**: *— 얼어붙었다.*

---

### `lunch3_expose_3_ins`
- 배경: `room_school.png`
- 다음: `lunch3_expose_4`

- 캐릭터: `dain_laugh.png`
**{name}**: *나머지 두 명의 손이 멈춘다.*

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
- 다음: `lunch3_expose_7_ins`

- 캐릭터: `dain_pout.png`
**다인**: ...잠깐. 나한테도 주말에 같이 놀자고 했는데?

---

### `lunch3_expose_7_ins`
- 배경: `room_school.png`
- 다음: `lunch3_expose_8`

- 캐릭터: `dain_pout.png`
**{name}**: *남은 한 명이 조용히 내려놓는다.*

---

### `lunch3_expose_8`
- 배경: `room_school.png`
- 다음: `lunch3_expose_9`

- 캐릭터: `dain_pout.png`
**{name}**: *유나가 빵을 내려놓는다.*

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
- 다음: `lunch3_expose_13`

- 캐릭터: `yuna_sad.png`
**{name}**: *세 쌍의 젓가락이 멈췄다. 급식실 소음이 갑자기 먼 데서 들린다.*

---

### `lunch3_expose_13`
- 배경: `room_school.png`
- 다음: `lunch3_expose_14`

- 캐릭터: `yuna_sad.png`
**{name}**: *옆 테이블에서 민수가 이쪽을 보고 있다. 고개를 절레절레 흔든다.*

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
**{name}**: *아무 말도 못 하겠다. 민수가 맞다.*

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
**서연**: ...거절을 못 해서. 그 말이 제일 잔인한 거야, {name}.

---

### `lunch3_expose_honest_3`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_4`

- 캐릭터: `seyoun_sad.png`
**서연**: 거절 못 하는 다정함이 — 가짜 희망을 주거든.

---

### `lunch3_expose_honest_4`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_4_ins`

- 캐릭터: `seyoun_sad.png`
**{name}**: *서연이 도시락 뚜껑을 닫는다.*

---

### `lunch3_expose_honest_4_ins`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_5`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연의 표정이 변한다. — 차분한 건 그대로인데, 어딘가 날이 서 있다.*

---

### `lunch3_expose_honest_5`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_6`

- 캐릭터: `seyoun_angry.png`
**서연**: 나는 여럿 중 하나는 안 해. — 그런 거면 아예 없는 게 나아.

---

### `lunch3_expose_honest_6`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_7`

- 캐릭터: `seyoun_angry.png`
**{name}**: *서연이 자리를 뜬다.*

---

### `lunch3_expose_honest_7`
- 배경: `room_school.png`
- 플래그: `day3_dain_no_exclamation`
- 다음: `lunch3_end`

- 캐릭터: `dain_sad.png`
**{name}**: *느낌표가 없다. — 다인의 문장에서 느낌표가 사라졌다. 처음이다.*

---

### `lunch3_expose_excuse_1`
- 배경: `room_school.png`
- 다음: `lunch3_expose_excuse_2`

- 캐릭터: `seyoun_angry.png`
**{name}**: 시간대가 다르니까 괜찮지 않을까...

---

### `lunch3_expose_excuse_2`
- 배경: `room_school.png`
- 다음: `lunch3_expose_excuse_2_ins`

- 캐릭터: `seyoun_angry.png`
**서연**: ...그게 문제라는 걸 모르겠어?

---

### `lunch3_expose_excuse_2_ins`
- 배경: `room_school.png`
- 다음: `lunch3_expose_excuse_3`

- 캐릭터: `dain_sad.png`
**{name}**: *다인이 일어선다.*

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
**{name}**: *다인이 고개를 돌린다. 소보로를 한 입도 안 먹었다.*

---

### `lunch3_expose_run_1`
- 배경: `room_school.png`
- 플래그: `day3_lunch_escaped`
- 다음: `lunch3_expose_run_2`

- 캐릭터: `seyoun_angry.png`
**{name}**: *도망쳤다. 교실에서. — 가장 비겁한 선택이다.*

---

### `lunch3_expose_run_2`
- 배경: `room_school.png`
- 다음: `lunch3_expose_run_2_ins`

- 캐릭터: `seyoun_angry.png`
**{name}**: *뒤에서 세 사람의 침묵이 등에 꽂힌다.*

---

### `lunch3_expose_run_2_ins`
- 배경: `room_school.png`
- 다음: `lunch3_end`

- 캐릭터: `seyoun_angry.png`
**{name}**: *점심시간이 끝나고, 오후 수업이 이어졌다. 칠판 위의 분필 소리가 유독 멀게 들린다. 누군가의 시선이 등에 닿는 걸 느낀다. — 아직 끝나지 않은 이야기가 남아 있다.*

---

### `lunch3_share_1`
- 배경: `room_school.png`
- 분기:
  - [`day3_has_multiple_dates`] → `lunch3_harem_1`
  - [기본] → `lunch3_end`

- 캐릭터: `yuna_bored.png`
**{name}**: *다 같이 나눠 먹자고 했다. 웃는 얼굴은 있는데, 공기가 이상하게 무겁다. 셋 다 아무렇지 않은 척하고 있다.*

---

### `lunch3_harem_1`
- 배경: `room_school.png`
- 플래그: `ending_harem`
- 다음: `lunch3_end`

- 캐릭터: `없음`
**{name}**: *셋이 나눠 먹었다. 아무도 바로 화내진 않았다. 대신, 누구도 편해 보이진 않았다. 오늘은 그냥 넘어간 것뿐이다.*

---

### `lunch3_end`
- 배경: `room_school.png`
- 다음: `after3_start`

- 캐릭터: `없음`
**{name}**: *점심시간이 끝났다.*

---

## 3일차 — 방과후 `day3_3_afterschool`

### `after3_start`
- 배경: `school_hallway.png`
- BGM: `sunset1.mp3`
- 다음: `after3_route_check`

- 캐릭터: `없음`
**{name}**: *방과후. 점심의 여파가 남아 있다. — 그래도 어딘가에는 가야 한다.*

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
**{name}**: *방과후. 핸드폰을 확인한다.*

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
**{name}**: *약속이 겹쳤다. — 다들 기다리고 있다. 누구에게 먼저 갈까.*

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
- 다음: `after3_reject_for_seo_4`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *도서관 옆을 지나간다. 유나의 자리가 비어 있다. 쪽지가 하나 남아 있다. '...알겠어.' 세 글자. 종이 끝이 조금 구겨져 있다.*

---

### `after3_reject_for_seo_4`
- 배경: `school_hallway.png`
- 다음: `after3_seo_1`

- 캐릭터: `없음`
**{name}**: *복도로 나왔다. 느낌표가 사라진 다인의 문장, 구겨진 세 글자의 쪽지. — 선택의 무게가 어깨에 내려앉는다.*

---

### `after3_seo_1`
- 배경: `student_room.png`
- BGM: `sunset1.mp3`
- 다음: `after3_seo_2`

- 캐릭터: `seyoun_sad.png`
**{name}**: *학생회실 문을 열었다. — 서연이 책상에 엎드려 있다.*

---

### `after3_seo_2`
- 배경: `student_room.png`
- 다음: `after3_seo_3`

- 캐릭터: `seyoun_sad.png`
**{name}**: *처음 보는 모습이다. 완벽한 학생회장이 — 무방비 상태로 엎드려 있다.*

---

### `after3_seo_3`
- 배경: `student_room.png`
- 다음: `after3_seo_4`

- 캐릭터: `seyoun_sad.png`
**{name}**: *서연이 인기척에 고개를 든다. 눈이 피곤해 보인다. 화장이 살짝 번져 있다.*

---

### `after3_seo_4`
- 배경: `student_room.png`
- 다음: `after3_seo_5`

- 캐릭터: `seyoun_sad.png`
**서연**: ......

---

### `after3_seo_5`
- 배경: `student_room.png`
- 다음: `after3_seo_5_ins`

- 캐릭터: `seyoun_sad.png`
**{name}**: 서연?

---

### `after3_seo_5_ins`
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
- 다음: `after3_seo_7_ins`

- 캐릭터: `seyoun_sad.png`
**{name}**: 뭘 봤다고.

---

### `after3_seo_7_ins`
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
**{name}**: *서연이 자세를 바로잡는다. 하지만 — 평소의 완벽한 웃음이 돌아오지 않는다.*

---

### `after3_seo_choice`
- 배경: `student_room.png`
- 선택지:
  1. "완벽하지 않아도 괜찮은데" → `after3_seo_choice1` | Seoyeon +10
  2. "비밀 지켜줄게" → `after3_seo_choice2` | Seoyeon +5

- 캐릭터: `seyoun_sad.png`
**서연**: 다음에 내가 부탁하면 무조건 들어줘야 해. — 대가야.

---

### `after3_seo_choice1`
- 배경: `student_room.png`
- 다음: `after3_seo_choice1_react`

- 캐릭터: `seyoun_cry.png`
**{name}**: *서연이 잠깐 멈춘다. 펜을 내려놓는다. 천천히.*

---

### `after3_seo_choice1_react`
- 배경: `student_room.png`
- 플래그: `seoyeon_day3_event`
- 다음: `after3_seo_choice1_react_ins`

- 캐릭터: `seyoun_cry.png`
**서연**: ...그런 말. 쉽게 하면 안 되는 건데.

---

### `after3_seo_choice1_react_ins`
- 배경: `student_room.png`
- 다음: `after3_seo_choice1_react_ins2`

- 캐릭터: `seyoun_cry.png`
**{name}**: *서연이 창밖을 본다. 표정이 안 보인다. — 의도적으로 안 보여주는 거다.*

---

### `after3_seo_choice1_react_ins2`
- 배경: `student_room.png`
- 다음: `after3_seo_choice1_react_ins3`

- 캐릭터: `seyoun_cry.png`
**{name}**: *근데 — 새끼손가락이 책상 위에서 가볍게 움직인다. 뭔가를 잡으려는 것처럼. 무의식적으로.*

---

### `after3_seo_choice1_react_ins3`
- 배경: `student_room.png`
- 다음: `after3_seo_choice1_react_ins4`

- 캐릭터: `seyoun_cry.png`
**{name}**: *서연이 자세를 바로잡는다. 학생회장의 얼굴이 돌아온다. — 근데 완벽하지 않다. 웃음의 각도가 0.5도쯤 어긋나 있다.*

---

### `after3_seo_choice1_react_ins4`
- 배경: `student_room.png`
- 다음: `after3_seo_choice1_react_ins5`

- 캐릭터: `seyoun_normal.png`
**서연**: ...고마워.

---

### `after3_seo_choice1_react_ins5`
- 배경: `student_room.png`
- 다음: `after3_seo_choice1_react_ins6`

- 캐릭터: `seyoun_normal.png`
**{name}**: 비밀은 잘 지켜.

---

### `after3_seo_choice1_react_ins6`
- 배경: `student_room.png`
- 다음: `after3_seo_choice1_react_ins7`

- 캐릭터: `seyoun_normal.png`
**서연**: *서류를 정리하며* 나도 네 비밀 하나 알고 있어.

---

### `after3_seo_choice1_react_ins7`
- 배경: `student_room.png`
- 다음: `after3_seo_choice1_react_ins8`

- 캐릭터: `seyoun_normal.png`
**서연**: 점심때 너 계란말이 먹을 때 눈이 반짝였잖아. — 그건 연기 못 하는 거야.

---

### `after3_seo_choice1_react_ins8`
- 배경: `student_room.png`
- 다음: `after3_seo_freetalk`

- 캐릭터: `seyoun_shy.png`
**{name}**: *비밀을 지켜준다고 했더니, 동등한 비밀을 꺼냈다. — 이 사람은 '고마워'보다 '대등함'이 먼저다.*

---

### `after3_seo_freetalk`
- 배경: `student_room.png`
- 타입: `free_talk`
- 다음: `after3_seo_end`
- 컨텍스트: "3일차 방과후, 서연과의 대립/화해 직후. 양다리 의심으로 관계에 균열이 생긴 상태. 톤: 밝지만 어딘가 그림자가 있다. 웃으면서도 눈이 안 웃는 순간이 있다. 가벼운 대화 사이에 진심이 살짝 비친다."
- 성격: "서연은 쿨뷰티 학생회장. 독점욕이 강하고 질투 시 직설적. 지금은 상처받았지만 티 내지 않으려 한다."

- 캐릭터: `seyoun_normal.png`
**서연**: *서연이와 복도에서 마주 서 있다. 서연의 표정이 복잡하다.*

---

### `after3_seo_end`
- 배경: `student_room.png`
- 분기:
  - [`ending_harem`] → `after3_final`
  - [`day3_has_multiple_dates`] → `after3_confront_1`
  - [기본] → `after3_final`

- 캐릭터: `seyoun_sad.png`
**{name}**: *그 한마디가 묵직하다. — 이 사람에게 '완벽하지 않은 모습을 보이는 것'이 얼마나 큰 일인지, 이제 조금 알 것 같다.*

---

### `after3_seo_choice2`
- 배경: `student_room.png`
- 플래그: `seoyeon_day3_event`
- 다음: `after3_seo_end_c2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *눈가가 붉어졌다. — 울지는 않았다. 아직은.*

---

### `after3_seo_end_c2`
- 배경: `student_room.png`
- 분기:
  - [`ending_harem`] → `after3_final`
  - [`day3_has_multiple_dates`] → `after3_confront_1`
  - [기본] → `after3_final`

- 캐릭터: `seyoun_sad.png`
**{name}**: *비밀을 지켜주겠다는 말이 — 이 사람한테는 큰 의미인 것 같다.*

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
**{name}**: *다인이 체육관에서 혼자 공을 치고 있다.*

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
**{name}**: *하지만 얼굴을 돌린다. 눈이 빨갛다.*

---

### `after3_reject_for_yuna_4`
- 배경: `school_hallway.png`
- 다음: `after3_yuna_1`

- 캐릭터: `없음`
**{name}**: *체육관을 나와 복도로 돌아왔다. 서연은 아무렇지 않은 척했고, 다인은 그러지도 못했다. — 둘 다 더 아프다.*

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
- 다음: `after3_yuna_3`

- 캐릭터: `없음`
**{name}**: *들어가니 유나가 없다. 대신 — 소파 위에 노트가 펼쳐져 있다. 손글씨가 빼곡하다.*

---

### `after3_yuna_3`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_4`

- 캐릭터: `없음`
**{name}**: *소설이다. 유나가 쓴 소설. — 읽어봐도 될까?*

---

### `after3_yuna_4`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_5`

- 캐릭터: `없음`
**{name}**: *첫 페이지.*

---

### `after3_yuna_5`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_5_ins`

- 캐릭터: `없음`
**{name}**: *'어느 날 전학생이 왔다. 그는 도서관에 찾아와 아무 말 없이 옆에 앉았다. — 나는 그게 싫지 않았다.'*

---

### `after3_yuna_5_ins`
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
**{name}**: *귀. 빨갛다. — 유나가 빨개지는 건 처음 본다.*

---

### `after3_yuna_choice`
- 배경: `yuna_hideout.png`
- 선택지:
  1. "주인공 이름 바꿔야 할 것 같은데" → `after3_yuna_choice1` | Yuna +8
  2. "결말은 어떻게 돼?" → `after3_yuna_choice2` | Yuna +12

- 캐릭터: `yuna_shy.png`
**{name}**: 재밌게 읽고 있었어.

---

### `after3_yuna_choice1`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_choice1_2`

- 캐릭터: `yuna_shy.png`
**유나**: ...주인공 이름 같은 건 없어.

---

### `after3_yuna_choice1_2`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_choice1_2_ins`

- 캐릭터: `yuna_shy.png`
**{name}**: '전학생이 도서관에 왔다'는 우연의 일치?

---

### `after3_yuna_choice1_2_ins`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_choice1_3`

- 캐릭터: `yuna_normal.png`
**유나**: *노트를 가슴에 꼭 안으며* ...소설은. 허구야.

---

### `after3_yuna_choice1_3`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_choice1_react`

- 캐릭터: `yuna_shy.png`
**유나**: *노트를 뒤집으며* ...근데 가끔은. 허구가 진짜보다 솔직해.

---

### `after3_yuna_choice1_react`
- 배경: `yuna_hideout.png`
- 플래그: `yuna_day3_event`
- 다음: `after3_yuna_freetalk`

- 캐릭터: `yuna_shy.png`
**{name}**: *'허구'라고 했지만, 귀가 거짓말을 하고 있다.*

---

### `after3_yuna_freetalk`
- 배경: `yuna_hideout.png`
- 타입: `free_talk`
- 다음: `after3_yuna_end`
- 컨텍스트: "3일차 방과후, 유나와의 대화 직후. 유나가 평소보다 감정을 드러내고 있다. 톤: 밝지만 어딘가 그림자가 있다. 웃으면서도 눈이 안 웃는 순간이 있다. 가벼운 대화 사이에 진심이 살짝 비친다."
- 성격: "유나는 신비주의 문학소녀. 평소 차분하지만 지금은 감정이 흔들리고 있다. 질투보다는 확인하고 싶은 마음."

- 캐릭터: `yuna_normal.png`
**유나**: *유나와 나란히 걷고 있다. 유나의 눈빛이 서늘하다.*

---

### `after3_yuna_choice2`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_choice2_2`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나가 잠깐 멈춘다. 노트를 내려다본다.*

---

### `after3_yuna_choice2_2`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_choice2_3`

- 캐릭터: `yuna_shy.png`
**유나**: ...결말은 아직 안 정했어.

---

### `after3_yuna_choice2_3`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_choice2_3_ins`

- 캐릭터: `yuna_shy.png`
**유나**: ...결말을 쓰면 끝나니까.

---

### `after3_yuna_choice2_3_ins`
- 배경: `yuna_hideout.png`
- 다음: `after3_yuna_choice2_react`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나가 두 문장 이상 연속으로 말했다. — 이 사람이 이만큼 말하는 건 처음 봤다.*

---

### `after3_yuna_choice2_react`
- 배경: `yuna_hideout.png`
- 플래그: `yuna_day3_event`
- 다음: `after3_yuna_end`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나가 두 문장 이상 연속으로 말했다. — 이 사람에게 그건 감정의 증거다.*

---

### `after3_yuna_end`
- 배경: `yuna_hideout.png`
- 분기:
  - [`ending_harem`] → `after3_final`
  - [`day3_has_multiple_dates`] → `after3_confront_1`
  - [기본] → `after3_final`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나가 노트를 가슴에 꼭 안고 있다.*

---

### `after3_reject_for_dain_1`
- 배경: `school_hallway.png`
- 다음: `after3_reject_for_dain_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 클립보드를 정리하고 있다. 웃고 있는데, 정리하는 손끝이 너무 반듯하다.*

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
**{name}**: *도서관에 쪽지가 없다. 유나의 가방도 없다. 자리에 미지근한 물 자국만 남아 있다. 방금 전까지 있었던 것처럼.*

---

### `after3_reject_for_dain_3b`
- 배경: `school_hallway.png`
- 다음: `after3_reject_for_dain_4`

- 캐릭터: `없음`
**{name}**: *다시 복도로 돌아왔다.*

---

### `after3_reject_for_dain_4`
- 배경: `school_hallway.png`
- 다음: `after3_dain_1`

- 캐릭터: `없음`
**{name}**: *다시 복도로 돌아왔다. 서연의 연습한 웃음, 유나가 두고 간 물 자국. — 아무 말 안 한 쪽이 더 오래 남는다.*

---

### `after3_dain_1`
- 배경: `gym.png`
- BGM: `daily2.mp3`
- 다음: `after3_dain_2`

- 캐릭터: `dain_normal.png`
**{name}**: *체육관. 다인이 혼자 스트레칭을 하고 있다. 가볍게 뛰어보는데 —*

---

### `after3_dain_2`
- 배경: `gym.png`
- 다음: `after3_dain_3`

- 캐릭터: `dain_normal.png`
**{name}**: *— 오른쪽 다리를 살짝 삐끗한다. 인상을 쓴다.*

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
**다인**: 아! 괜찮아!! 그냥 좀 삐끗한 거야!!

---

### `after3_dain_5`
- 배경: `gym.png`
- 다음: `after3_dain_5_ins`

- 캐릭터: `dain_sweat.png`
**{name}**: 괜찮지 않은 것 같은데.

---

### `after3_dain_5_ins`
- 배경: `gym.png`
- 다음: `after3_dain_6`

- 캐릭터: `dain_sweat.png`
**다인**: 진짜 괜찮다니까!! 별거 아냐!!

---

### `after3_dain_6`
- 배경: `gym.png`
- 다음: `after3_dain_choice`

- 캐릭터: `dain_sad.png`
**{name}**: *느낌표가 많다. — 너무 많다. 이 사람은 괜찮지 않을 때 느낌표가 더 많아지는 건가.*

---

### `after3_dain_choice`
- 배경: `gym.png`
- 선택지:
  1. "옆에 앉아 조용히 기다린다" → `after3_dain_choice1` | Dain +12
  2. "파스 있어? 가져올까?" → `after3_dain_choice2` | Dain +5

- 캐릭터: `dain_sad.png`
**{name}**: *다인이 벤치에 앉는다. 무릎을 문지른다.*

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
**{name}**: *다인이 멈춘다. — 그리고 작게 웃는다. 이 웃음을 지키고 싶다.*

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
- 컨텍스트: "3일차 방과후, 다인과의 대화 직후. 다인이 상처받았지만 밝은 척하고 있다. 톤: 밝지만 어딘가 그림자가 있다. 웃으면서도 눈이 안 웃는 순간이 있다. 가벼운 대화 사이에 진심이 살짝 비친다."
- 성격: "다인은 에너지 넘치는 체육계. 지금은 밝은 척이 유일한 방어기제. 느낌표가 줄어들면 진심이 나온다."

- 캐릭터: `dain_normal.png`
**다인**: *다인이와 운동장 벤치에 앉아 있다. 다인이 평소보다 조용하다.*

---

### `after3_dain_choice2`
- 배경: `gym.png`
- 다음: `after3_dain_choice2_ins`

- 캐릭터: `dain_sweat.png`
**다인**: 아! 괜찮다니까! 파스 같은 거 필요 없어!!

---

### `after3_dain_choice2_ins`
- 배경: `gym.png`
- 다음: `after3_dain_choice2_ins2`

- 캐릭터: `dain_normal.png`
**{name}**: *보건실에서 파스를 가져왔다. 다인에게 내밀었다.*

---

### `after3_dain_choice2_ins2`
- 배경: `gym.png`
- 다음: `after3_dain_choice2_ins3`

- 캐릭터: `dain_normal.png`
**다인**: ...아 진짜 가져왔네.

---

### `after3_dain_choice2_ins3`
- 배경: `gym.png`
- 다음: `after3_dain_choice2_ins4`

- 캐릭터: `dain_normal.png`
**{name}**: 괜찮다면서.

---

### `after3_dain_choice2_ins4`
- 배경: `gym.png`
- 다음: `after3_dain_choice2_ins5`

- 캐릭터: `dain_shy.png`
**{name}**: *다인이 파스를 받아들고 — 한참을 본다. 입술을 깨문다.*

---

### `after3_dain_choice2_ins5`
- 배경: `gym.png`
- 다음: `after3_dain_choice2_ins6`

- 캐릭터: `dain_shy.png`
**다인**: *힘없이 피식 웃는다.* ...뭐야. 이런 거에 감동받으면 안 되는데.

---

### `after3_dain_choice2_ins6`
- 배경: `gym.png`
- 플래그: `dain_day3_event`
- 다음: `after3_dain_end_check`

- 캐릭터: `dain_shy.png`
**{name}**: *받아들었다. — 다인이 누군가의 도움을 거절하지 않은 건 처음이다. 가슴이 먹먹하다.*

---

### `after3_dain_end_check`
- 배경: `gym.png`
- 분기:
  - [`chose_dain_after2`] → `after3_dain_end`
  - [기본] → `after3_dain_end_first`

- 캐릭터: `없음`
**{name}**: *다인이 주먹으로 어깨를 가볍게 친다.*

---

### `after3_dain_end`
- 배경: `gym.png`
- 분기:
  - [`ending_harem`] → `after3_final`
  - [`day3_has_multiple_dates`] → `after3_confront_1`
  - [기본] → `after3_final`

- 캐릭터: `dain_shy.png`
**{name}**: *다인이 주먹으로 어깨를 가볍게 친다. — 어제보다 약하다.*

---

### `after3_dain_end_first`
- 배경: `gym.png`
- 분기:
  - [`ending_harem`] → `after3_final`
  - [`day3_has_multiple_dates`] → `after3_confront_1`
  - [기본] → `after3_final`

- 캐릭터: `dain_shy.png`
**{name}**: *다인이 주먹으로 어깨를 가볍게 친다. — 쑥스러운가 보다.*

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
**{name}**: *서연이 복도 끝으로 데려간다. 아무도 없는 곳.*

---

### `after3_confront_4`
- 배경: `school_hallway.png`
- 다음: `after3_confront_5`

- 캐릭터: `seyoun_sad.png`
**서연**: 점심때 말이야.

---

### `after3_confront_5`
- 배경: `school_hallway.png`
- 다음: `after3_confront_5_ins`

- 캐릭터: `seyoun_sad.png`
**서연**: 네가 다른 애들한테 웃어줄 때, 똑같이 웃어줄 때, 그게 좀 싫었어.

---

### `after3_confront_5_ins`
- 배경: `school_hallway.png`
- 다음: `after3_confront_5_ins2`

- 캐릭터: `dain_sad.png`
**다인**: *고개를 숙인 채.* ...나도. 좀 싫었어.

---

### `after3_confront_5_ins2`
- 배경: `school_hallway.png`
- 다음: `after3_confront_6`

- 캐릭터: `seyoun_sad.png`
**{name}**: *다인이 고개를 숙인다. 느낌표가 사라진 목소리. — 이 사람을 다치게 하고 있다.*

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
  3. "서연만 진심이야" → `after3_confront_lie_ins` | Seoyeon -3 | 플래그: `conscience_minus`

- 캐릭터: `seyoun_sad.png`
**{name}**: *서연이 나를 똑바로 본다. 학생회장의 눈이 아니다. 한 사람의 눈이다.*

---

### `after3_confront_admit`
- 배경: `school_hallway.png`
- 다음: `after3_confront_admit_ins`

- 캐릭터: `seyoun_sad.png`
**서연**: ...거절을 못 해서.

---

### `after3_confront_admit_ins`
- 배경: `school_hallway.png`
- 다음: `after3_confront_admit_2`

- 캐릭터: `seyoun_sad.png`
**{name}**: *서연이 고개를 숙인다.*

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
**{name}**: *서연이 도시락 가방을 집어든다. 손이 떨리고 있다.*

---

### `after3_confront_admit_4`
- 배경: `school_hallway.png`
- 다음: `after3_confront_admit_4_ins`

- 캐릭터: `seyoun_sad.png`
**서연**: 나한테 완벽하지 않아도 된다고 해놓고 — 너는 모두에게 완벽한 사람이 되려 했잖아. 그게 더 나빠.

---

### `after3_confront_admit_4_ins`
- 배경: `school_hallway.png`
- 다음: `after3_confront_admit_5`

- 캐릭터: `seyoun_sad.png`
**{name}**: *서연이 돌아선다. — 멈춘다.*

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
**{name}**: *등이 곧다. 완벽하게. — 근데 주먹이 쥐어져 있다. 손등이 하얗다.*

---

### `after3_confront_excuse`
- 배경: `school_hallway.png`
- 다음: `after3_confront_excuse_ins`

- 캐릭터: `seyoun_angry.png`
**서연**: ...그게 문제라는 걸 모르겠어?

---

### `after3_confront_excuse_ins`
- 배경: `school_hallway.png`
- 다음: `after3_confront_excuse_2`

- 캐릭터: `seyoun_angry.png`
**{name}**: *서연의 눈이 차갑다. 처음 보는 온도다.*

---

### `after3_confront_excuse_2`
- 배경: `school_hallway.png`
- 다음: `after3_confront_excuse_2_ins`

- 캐릭터: `seyoun_angry.png`
**서연**: 몇 명이랑 약속했냐가 문제가 아니야. 나한테 그 약속이 뭐였는지가 문제야.

---

### `after3_confront_excuse_2_ins`
- 배경: `school_hallway.png`
- 다음: `after3_confront_end`

- 캐릭터: `seyoun_angry.png`
**{name}**: *서연이 잠깐 멈춘다. 눈이 흔들린다.*

---

### `after3_confront_lie_ins`
- 배경: `school_hallway.png`
- 다음: `after3_confront_lie`

- 캐릭터: `seyoun_sad.png`
**{name}**: *서연이 잠깐 멈춘다. 눈이 흔들린다.*

---

### `after3_confront_lie`
- 배경: `school_hallway.png`
- 다음: `after3_confront_lie_2`

- 캐릭터: `seyoun_sad.png`
**서연**: ...정말? 그 말... 믿어도 되는 거지?

---

### `after3_confront_lie_2`
- 배경: `school_hallway.png`
- 다음: `after3_confront_lie_2_ins`

- 캐릭터: `seyoun_sad.png`
**{name}**: *믿고 싶어하는 눈. — 거짓말이 이렇게 무거울 줄 몰랐다.*

---

### `after3_confront_lie_2_ins`
- 배경: `school_hallway.png`
- 다음: `after3_confront_lie_2_ins2`

- 캐릭터: `seyoun_sad.png`
**{name}**: *서연이 돌아선다. — 멈추지 않는다.*

---

### `after3_confront_lie_2_ins2`
- 배경: `school_hallway.png`
- 다음: `after3_confront_end`

- 캐릭터: `seyoun_sad.png`
**{name}**: *등이 곧다. 완벽하게. — 근데 주먹이 쥐어져 있다. 손등이 하얗다.*

---

### `after3_confront_end`
- 배경: `school_hallway.png`
- 다음: `after3_final`

- 캐릭터: `seyoun_sad.png`
**{name}**: *서연이 사라진 복도에 혼자 서 있다. — 등이 곧았다. 완벽하게. 근데 주먹이 쥐어져 있었다.*

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

### `haeun_warn_1`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_1_ins`

- 캐릭터: `없음`
**{name}**: *학생회실을 나왔다. 복도가 비어 있다. — 누군가 기다리고 있었다.*

---

### `haeun_warn_1_ins`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_2`

- 캐릭터: `haeun_normal.png`
**{name}**: *하은이 벽에 기대어 서 있다. 학생회 팔찌를 만지작거리고 있다.*

---

### `haeun_warn_2`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_2_ins`

- 캐릭터: `haeun_normal.png`
**하은**: ...{name} 씨.

---

### `haeun_warn_2_ins`
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
- 다음: `haeun_warn_3_ins`

- 캐릭터: `haeun_normal.png`
**하은**: 선배 — 서연 선배 방금 봤어요?

---

### `haeun_warn_3_ins`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_3_ins2`

- 캐릭터: `haeun_normal.png`
**하은**: ...선배가 울었어요.

---

### `haeun_warn_3_ins2`
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
**{name}**: *서연이 울었다. — 나한테는 '완벽하지 않은 모습을 봤다'고만 했는데. 그 뒤에 울었다.*

---

### `haeun_warn_5b`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_5c`

- 캐릭터: `haeun_normal.png`
**하은**: 선배는 완벽해야 한다고 생각하는 사람이에요. 울면 지는 거라고 생각하는 사람이요.

---

### `haeun_warn_5c`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_5c_ins`

- 캐릭터: `haeun_normal.png`
**{name}**: ......

---

### `haeun_warn_5c_ins`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_6`

- 캐릭터: `seyoun_sad.png`
**서연**: 네가 다른 애들한테 웃어줄 때, 똑같이 웃어줄 때, 그게 좀 싫었어.

---

### `haeun_warn_6`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_6_ins`

- 캐릭터: `haeun_normal.png`
**하은**: 그 선배가 울었다는 건 — 그만큼 {name} 씨한테 진심이라는 뜻이에요.

---

### `haeun_warn_6_ins`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_7`

- 캐릭터: `haeun_normal.png`
**{name}**: *하은이 고개를 숙인다.*

---

### `haeun_warn_7`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_7_ins`

- 캐릭터: `haeun_worried.png`
**하은**: 참견인 거 알아요. 근데 선배가 걱정돼서. — 선배 지금 집이 좀 복잡해요. 부모님이... ...아무튼. 선배한테 잘해주세요. 부탁이에요.

---

### `haeun_warn_7_ins`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_7_ins2`

- 캐릭터: `haeun_worried.png`
**{name}**: *하은이 말을 멈춘다. 선을 넘으면 안 된다는 표정.*

---

### `haeun_warn_7_ins2`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_7_ins3`

- 캐릭터: `haeun_normal.png`
**하은**: ...아무튼. 선배한테 잘해주세요. 부탁이에요.

---

### `haeun_warn_7_ins3`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_7_ins4`

- 캐릭터: `haeun_worried.png`
**{name}**: *하은이 돌아서서 간다.*

---

### `haeun_warn_7_ins4`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_8`

- 캐릭터: `haeun_worried.png`
**{name}**: *서연의 집이 복잡하다. 부모님. — 서연이 '완벽해야만 했던 이유'가 거기 있는 건가.*

---

### `haeun_warn_8`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_8b`

- 캐릭터: `haeun_worried.png`
**{name}**: *서연이 화장실에서 혼자 우는 모습이 머릿속에서 안 지워진다. 완벽하게 곧은 등, 하얀 주먹, 그리고 — 아무도 없는 화장실.*

---

### `haeun_warn_8b`
- 배경: `school.png`
- 다음: `minsu_d3_check`

- 캐릭터: `haeun_worried.png`
**{name}**: *학교 앞으로 나왔다.*

---

### `minsu_d3_check`
- 배경: `school.png`
- 분기:
  - [`day3_has_multiple_dates`] → `minsu_d3_1`
  - [기본] → `night3_start`

- 캐릭터: `없음`
**{name}**: ‹빈›

---

### `minsu_d3_1`
- 배경: `school.png`
- 다음: `minsu_d3_2`

- 캐릭터: `없음`
**{name}**: *하교길. 교문에서 민수가 기다리고 있다.*

---

### `minsu_d3_2`
- 배경: `school.png`
- 다음: `minsu_d3_3`

- 캐릭터: `minsu_smirk.png`
**민수**: 봤다.

---

### `minsu_d3_3`
- 배경: `school.png`
- 다음: `minsu_d3_3_ins`

- 캐릭터: `minsu_smirk.png`
**민수**: 점심때. 그리고 방금 서연이 표정도.

---

### `minsu_d3_3_ins`
- 배경: `school.png`
- 다음: `minsu_d3_4`

- 캐릭터: `minsu_smirk.png`
**{name}**: *할 말이 없다.*

---

### `minsu_d3_4`
- 배경: `school.png`
- 다음: `minsu_d3_4_ins`

- 캐릭터: `minsu_smirk.png`
**민수**: 어제 내가 뭐라고 했어? '나중에 셋 다 울면 네 탓이야'라고 했잖아. 아직 '나중에'가 아니야. 지금이야.

---

### `minsu_d3_4_ins`
- 배경: `school.png`
- 다음: `minsu_d3_4_ins2`

- 캐릭터: `minsu_smirk.png`
**{name}**: ......

---

### `minsu_d3_4_ins2`
- 배경: `school.png`
- 다음: `minsu_d3_5`

- 캐릭터: `minsu_normal.png`
**민수**: 좋은 놈이라서 다 안아주는 거 — 그건 친절이 아니라 비겁한 거야.

---

### `minsu_d3_5`
- 배경: `school.png`
- 다음: `minsu_d3_5_ins`

- 캐릭터: `minsu_normal.png`
**민수**: 야, 나도 옆에서 보기 힘들어. 걔들 다 좋은 애들이야. — 네가 나쁜 놈이라서 이러는 건 아닌 거 알아. 거절을 못 해서 그런 거잖아.

---

### `minsu_d3_5_ins`
- 배경: `school.png`
- 다음: `minsu_d3_5b`

- 캐릭터: `minsu_normal.png`
**{name}**: ......맞아.

---

### `minsu_d3_5b`
- 배경: `school.png`
- 다음: `minsu_d3_6`

- 캐릭터: `minsu_normal.png`
**{name}**: *민수가 한숨을 쉰다. 한심하다는 게 아니라, 진짜 걱정하는 한숨이다.*

---

### `minsu_d3_6`
- 배경: `school.png`
- 다음: `minsu_d3_6b`

- 캐릭터: `minsu_normal.png`
**{name}**: ...근데 어떻게 해야 할지 모르겠어.

---

### `minsu_d3_6b`
- 배경: `school.png`
- 다음: `minsu_d3_6b_ins`

- 캐릭터: `minsu_normal.png`
**민수**: 전 학교에서 뭔 일 있었는지 안 물어볼게. 근데 하나만 말해줄게.

---

### `minsu_d3_6b_ins`
- 배경: `school.png`
- 다음: `minsu_d3_7`

- 캐릭터: `minsu_normal.png`
**{name}**: *민수가 내 어깨를 잡는다.*

---

### `minsu_d3_7`
- 배경: `school.png`
- 다음: `minsu_d3_7_ins`

- 캐릭터: `minsu_normal.png`
**민수**: 거절도 사랑이야. 안 되는 사람한테 거절해주는 게 — 거짓 희망보다 백 배 낫거든.

---

### `minsu_d3_7_ins`
- 배경: `school.png`
- 다음: `minsu_d3_7_ins2`

- 캐릭터: `minsu_normal.png`
**{name}**: *거절도 사랑. — 전 학교에서 소정이가 나한테 '거절'할 기회조차 주지 못했다. 내가 말하지 못했으니까. 소정이는 아무것도 모른 채 남자친구를 사귀었고, 나는 핸드폰 메모장에 38번째 시뮬레이션을 남긴 채 전학을 갔다.*

---

### `minsu_d3_7_ins2`
- 배경: `school.png`
- 다음: `minsu_d3_7_ins3`

- 캐릭터: `minsu_normal.png`
**{name}**: *그때 소정이가 거절해줬다면 — 이렇게 미련이 남지는 않았을 거다.*

---

### `minsu_d3_7_ins3`
- 배경: `school.png`
- 다음: `minsu_d3_8`

- 캐릭터: `minsu_normal.png`
**{name}**: *거절도 사랑이라면, 내가 지금 해야 할 건 — 모두에게 '좋다'고 말하는 게 아니라, 한 사람에게만 '좋다'고 말하는 거다.*

---

### `minsu_d3_8`
- 배경: `school.png`
- 다음: `minsu_d3_8_ins`

- 캐릭터: `minsu_normal.png`
**{name}**: *...회상이 끊긴다. 민수가 손가락으로 이마를 톡 친다.*

---

### `minsu_d3_8_ins`
- 배경: `school.png`
- 다음: `minsu_d3_9`

- 캐릭터: `minsu_normal.png`
**{name}**: ...뭘?

---

### `minsu_d3_9`
- 배경: `school.png`
- 다음: `minsu_d3_10`

- 캐릭터: `minsu_normal.png`
**{name}**: *그때 소정이가 거절해줬다면 — 이렇게 미련이 남지는 않았을 거다. 거절도 사랑이라면, 내가 지금 해야 할 건 — 한 사람에게만 '좋다'고 말하는 거다.*

---

### `minsu_d3_10`
- 배경: `school.png`
- 다음: `minsu_d3_10_ins`

- 캐릭터: `minsu_normal.png`
**민수**: 내일 학교에서 보자. — 좀 생각 좀 해라, 진지하게.

---

### `minsu_d3_10_ins`
- 배경: `school.png`
- 다음: `night3_start`

- 캐릭터: `minsu_normal.png`
**{name}**: *민수가 먼저 걸어간다.*

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
**{name}**: *'또 와도 돼'. — 이 사람한테는 이게 '와 줘'와 같은 말이다.*

---

### `night3_faithful_msg_yuna_1`
- 배경: `room_my.png`
- 다음: `night3_faithful_msg_yuna_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *유나가 쪽지 사진을 보냈다. 노트에 쓰인 한 줄.*

---

### `night3_faithful_msg_yuna_2`
- 배경: `room_my.png`
- 다음: `night3_faithful_msg_yuna_2_ins`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 그 소설, 결말은 아직 안 정했어

---

### `night3_faithful_msg_yuna_2_ins`
- 배경: `room_my.png`
- 다음: `night3_dream_1`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *결말을 안 쓰면 이야기가 끝나지 않으니까. — 나도 같은 마음이다.*

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
**{name}**: *'ㅋㅋ'로 위장했지만 — 진심이 보인다.*

---

### `night3_dream_1`
- 배경: `school.png`
- 다음: `night3_dream_2`

- 캐릭터: `없음`
**{name}**: *꿈을 꿨다. — 누군가와 나란히 걷고 있었다.*

---

### `night3_dream_2`
- 배경: `school.png`
- 다음: `night3_dream_2_ins`

- 캐릭터: `없음`
**{name}**: *얼굴은 안 보이는데, 이상하게 불안하지 않았다.*

---

### `night3_dream_2_ins`
- 배경: `school.png`
- 다음: `night3_faithful_reflect_1`

- 캐릭터: `없음`
**{name}**: *이번에는 후회 없이 말하려고 했다. 이 학교에서는 솔직하게 살겠다고.*

---

### `night3_faithful_reflect_1`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_2`

- 캐릭터: `없음`
**{name}**: *눈을 떴다. 아침 햇살이 커튼 사이로 들어온다. — 오늘의 꿈은 좋았다.*

---

### `night3_faithful_reflect_2`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_2_ins`

- 캐릭터: `없음`
**{name}**: *핸드폰을 꺼냈다. 갤러리를 열었다. 소정이 사진. — 스크롤을 멈추고, 길게 눌렀다.*

---

### `night3_faithful_reflect_2_ins`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_2_ins2`

- 캐릭터: `없음`
**{name}**: *'삭제하시겠습니까?'*

---

### `night3_faithful_reflect_2_ins2`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_2_ins3`

- 캐릭터: `없음`
**{name}**: *확인 버튼 위에서 손가락이 멈춘다.*

---

### `night3_faithful_reflect_2_ins3`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_2_ins4`

- 캐릭터: `없음`
**{name}**: *1초. 화면만 내려다본다.*

---

### `night3_faithful_reflect_2_ins4`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_2_ins5`

- 캐릭터: `없음`
**{name}**: *민수가 했던 말이 떠오른다. '거절도 사랑이야.'*

---

### `night3_faithful_reflect_2_ins5`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_2_ins6`

- 캐릭터: `없음`
**{name}**: *...그래. 나부터 과거를 거절해야 한다.*

---

### `night3_faithful_reflect_2_ins6`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_3`

- 캐릭터: `없음`
**{name}**: *— 삭제했다.*

---

### `night3_faithful_reflect_3`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_3_ins`

- 캐릭터: `없음`
**{name}**: *지우면 그때 감정까지 없어질 것 같아서 남겨뒀었다. 근데 이제 미련이 아니라 기록이다. — 역할은 끝났다.*

---

### `night3_faithful_reflect_3_ins`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_4`

- 캐릭터: `없음`
**{name}**: *민수가 말했다. '거절도 사랑이야.' 맞다. 전 학교에서 소정이는 나를 거절할 기회조차 없었다. 내가 입을 닫았으니까. — 그게 소정이한테도, 나한테도 가장 불친절한 결말이었다.*

---

### `night3_faithful_reflect_4`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_4_ins`

- 캐릭터: `없음`
**{name}**: *이번에는 다르다. 한 사람에게만 말하겠다. 나머지에게는 — 확실하게 말하겠다.*

---

### `night3_faithful_reflect_4_ins`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_4_ins2`

- 캐릭터: `없음`
**{name}**: *갤러리가 비어 있다. 소정이 사진이 있던 자리. 빈 화면이 오히려 선명하다.*

---

### `night3_faithful_reflect_4_ins2`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_4_ins3`

- 캐릭터: `없음`
**{name}**: *사진을 지우는 건 쉬웠다. 손가락 하나면 끝이다. — 감정은 그보다 오래 걸린다.*

---

### `night3_faithful_reflect_4_ins3`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_4_ins6`

- 캐릭터: `없음`
**{name}**: *그래도. 지운 만큼은 — 다음으로 갈 수 있다.*

---

### `night3_faithful_reflect_4_ins6`
- 배경: `room_my.png`
- 다음: `night3_dream_3`

- 캐릭터: `없음`
**{name}**: *핸드폰을 덮었다. 갤러리는 비었고, 마음은 아직 복잡하다. — 그래도 한 발짝.*

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
- 스탯: Seoyeon +9
- 다음: `night3_end`

- 캐릭터: `없음`
**{name}**: *눈을 감자, 서연과 나란히 걷던 감각이 아직 남아 있다.*

---

### `night3_dream_yuna_bonus`
- 배경: `room_my.png`
- 스탯: Yuna +9
- 다음: `night3_end`

- 캐릭터: `없음`
**{name}**: *눈을 감자, 유나 옆의 조용한 공기가 아직 남아 있다.*

---

### `night3_dream_dain_bonus`
- 배경: `room_my.png`
- 스탯: Dain +9
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
- 다음: `night3_cheat_msg_3_ins`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: ...부탁이야

---

### `night3_cheat_msg_3_ins`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_4`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: *서연이 '부탁'이라는 말을 쓴다. — 이 사람의 어휘에 없던 단어다. 그만큼 무너져 있다.*

---

### `night3_cheat_msg_4`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_4_ins`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: ...다 알고 있었어

---

### `night3_cheat_msg_4_ins`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_5`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *네가 누구 옆에 설 건지. 그 무게를 알았으면 해*

---

### `night3_cheat_msg_5`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_6`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *...나는 괜찮으니까. 네가 후회 안 할 쪽으로 가*

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
**{name}**: *유나가 메시지로 세 줄을 보냈다. 평소 한 줄도 안 보내는 사람이. — 그만큼 화가 났다는 뜻이다.*

---

### `night3_nightmare_1`
- 배경: `school_back.png`
- BGM: `mystery.mp3`
- 다음: `night3_nightmare_2`

- 캐릭터: `없음`
**{name}**: *잠이 들었다. — 꿈.*

---

### `night3_nightmare_2`
- 배경: `school_back.png`
- 다음: `night3_nightmare_2_ins`

- 캐릭터: `없음`
**{name}**: *어둠 속에 서 있다. 아무것도 보이지 않는다.*

---

### `night3_nightmare_2_ins`
- 배경: `school.png`
- 다음: `night3_nightmare_3`

- 캐릭터: `없음`
**{name}**: *서연의 목소리가 들린다.*

---

### `night3_nightmare_3`
- 배경: `school.png`
- 다음: `night3_nightmare_3_ins`

- 캐릭터: `seyoun_sad.png`
**서연**: 나한테만 그랬잖아...

---

### `night3_nightmare_3_ins`
- 배경: `school.png`
- 다음: `night3_nightmare_4`

- 캐릭터: `없음`
**{name}**: *유나의 목소리.*

---

### `night3_nightmare_4`
- 배경: `school.png`
- 다음: `night3_nightmare_4_ins`

- 캐릭터: `yuna_sad.png`
**유나**: 거짓말하지 말라고 했지.

---

### `night3_nightmare_4_ins`
- 배경: `school.png`
- 다음: `night3_nightmare_5`

- 캐릭터: `없음`
**{name}**: *다인의 목소리.*

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
  1. "서연의 손을 잡는다" → `night3_nightmare_seo`
  2. "유나의 손을 잡는다" → `night3_nightmare_yuna`
  3. "다인의 손을 잡는다" → `night3_nightmare_dain`

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
- 다음: `night3_nightmare_end_2`

- 캐릭터: `없음`
**{name}**: *손을 뻗었다. — 잡히지 않는다.*

---

### `night3_nightmare_end_2`
- 배경: `room_my.png`
- 다음: `night3_nightmare_end_3`

- 캐릭터: `없음`
**{name}**: *모두 사라지고, 남은 건 어둠뿐.*

---

### `night3_nightmare_end_3`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_1`

- 캐릭터: `없음`
**{name}**: *— 땀에 젖은 채 눈을 떴다. 새벽 3시. 천장이 보인다.*

---

### `night3_cheat_reflect_1`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_2`

- 캐릭터: `없음`
**{name}**: *핸드폰을 꺼냈다. 갤러리. 또 스크롤한다. — 소정이 사진.*

---

### `night3_cheat_reflect_2`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_3`

- 캐릭터: `없음`
**{name}**: *웃고 있다. 단체 사진 속에서 나를 보고 웃고 있다. 아무것도 모른 채.*

---

### `night3_cheat_reflect_3`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_3_ins`

- 캐릭터: `없음`
**{name}**: *이번에는 후회 없이 말하려고 했다. 이 학교에서는 솔직하게 살겠다고.*

---

### `night3_cheat_reflect_3_ins`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_3_ins2`

- 캐릭터: `없음`
**{name}**: *소정이 때랑 정반대인데, 결과는 똑같다. 누군가가 상처받는다.*

---

### `night3_cheat_reflect_3_ins2`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_3_ins3`

- 캐릭터: `없음`
**{name}**: *전 학교: 아무 말도 못 해서 후회.*

---

### `night3_cheat_reflect_3_ins3`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_3_ins4`

- 캐릭터: `없음`
**{name}**: *이 학교: 모두에게 말해서 후회.*

---

### `night3_cheat_reflect_3_ins4`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_3_ins5`

- 캐릭터: `없음`
**{name}**: *결국 문제는 '말하느냐 마느냐'가 아니라 — '누구에게'인 거다.*

---

### `night3_cheat_reflect_3_ins5`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_3_ins6`

- 캐릭터: `없음`
**{name}**: *민수가 말했다. '거절도 사랑이야.'*

---

### `night3_cheat_reflect_3_ins6`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_3_ins7`

- 캐릭터: `없음`
**{name}**: *서연이 말했다. '여럿 중 하나는 안 해.'*

---

### `night3_cheat_reflect_3_ins7`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_4`

- 캐릭터: `없음`
**{name}**: *유나가 말했다. '도망치지 마.'*

---

### `night3_cheat_reflect_4`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_5`

- 캐릭터: `없음`
**{name}**: *전 학교: 아무 말도 못 해서 후회.*

---

### `night3_cheat_reflect_5`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_5_ins`

- 캐릭터: `없음`
**{name}**: *— 도망치지 않겠다. 이번에는 한 사람에게만.*

---

### `night3_cheat_reflect_5_ins`
- 배경: `room_my.png`
- 다음: `night3_nightmare_end_4`

- 캐릭터: `없음`
**{name}**: *꿈을 꿨다. — 누군가와 나란히 걷고 있었다. 얼굴은 안 보이는데, 이상하게 불안하지 않았다.*

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
- 다음: `minsu_cheer_1`

- 캐릭터: `없음`
**{name}**: *넷째 날. 주말. — 오늘은 학교가 아니다. 데이트다.*

---

### `minsu_cheer_1`
- 배경: `room_my.png`
- 다음: `minsu_cheer_1_ins`

- 캐릭터: `없음`
**{name}**: *핸드폰을 본다. 아침 메시지. — 맨 위에 민수.*

---

### `minsu_cheer_1_ins`
- 배경: `room_my.png`
- 다음: `minsu_cheer_1_ins2`

- 캐릭터: `minsu_normal.png` @ 0.35
**민수**: *야 오늘 데이트라며?*

---

### `minsu_cheer_1_ins2`
- 배경: `room_my.png`
- 다음: `minsu_cheer_1_ins3`

- 캐릭터: `minsu_normal.png` @ 0.35
**{name}**: *어떻게 알았어*

---

### `minsu_cheer_1_ins3`
- 배경: `room_my.png`
- 다음: `minsu_cheer_1_ins4`

- 캐릭터: `minsu_normal.png` @ 0.35
**민수**: *다인이가 단톡방에 올림ㅋㅋ 내일 약속 있음!! 이라고*

---

### `minsu_cheer_1_ins4`
- 배경: `room_my.png`
- 다음: `minsu_cheer_1_ins5`

- 캐릭터: `minsu_normal.png` @ 0.35
**민수**: *근데 야*

---

### `minsu_cheer_1_ins5`
- 배경: `room_my.png`
- 다음: `minsu_cheer_1_ins6`

- 캐릭터: `minsu_normal.png` @ 0.35
**민수**: *한 명만 가라*

---

### `minsu_cheer_1_ins6`
- 배경: `room_my.png`
- 다음: `minsu_cheer_1_ins7`

- 캐릭터: `minsu_normal.png` @ 0.35
**민수**: *진짜 알아?*

---

### `minsu_cheer_1_ins7`
- 배경: `room_my.png`
- 다음: `minsu_cheer_2`

- 캐릭터: `minsu_normal.png` @ 0.35
**{name}**: *...이번엔 진짜로*

---

### `minsu_cheer_2`
- 배경: `room_my.png`
- 다음: `minsu_cheer_3`

- 캐릭터: `minsu_normal.png` @ 0.35
**민수**: 잘하고 와.

---

### `minsu_cheer_3`
- 배경: `room_my.png`
- 다음: `minsu_cheer_4`

- 캐릭터: `minsu_normal.png` @ 0.35
**{name}**: 알아.

---

### `minsu_cheer_4`
- 배경: `room_my.png`
- 다음: `minsu_cheer_4_ins`

- 캐릭터: `minsu_normal.png` @ 0.35
**{name}**: *짧다. 그런데 '잘하고 와'가 묵직하다. Day 2에 '전 학교에서도 이랬어?'라고 물었던 놈이, Day 3에 '거절도 사랑이야'라고 말했던 놈이 — 오늘은 '잘하고 와'다.*

---

### `minsu_cheer_4_ins`
- 배경: `room_my.png`
- 다음: `minsu_cheer_4_ins2`

- 캐릭터: `minsu_normal.png` @ 0.35
**{name}**: *경고에서 직면으로, 직면에서 응원으로. — 민수가 나보다 먼저 나를 믿어주고 있다.*

---

### `minsu_cheer_4_ins2`
- 배경: `room_my.png`
- 다음: `minsu_cheer_4_ins3`

- 캐릭터: `minsu_normal.png` @ 0.35
**{name}**: *핸드폰 캘린더를 본다. 오전 서연, 오후 유나, 저녁 다인. — 하루 안에 세 명을 쪼개 넣느라 어젯밤에 잠을 못 잤다. 한 명이라도 시간이 겹치면 끝이다.*

---

### `minsu_cheer_4_ins3`
- 배경: `room_my.png`
- 다음: `minsu_cheer_4_ins4`

- 캐릭터: `minsu_normal.png` @ 0.35
**{name}**: *...뭘 하고 있는 거지, 나.*

---

### `minsu_cheer_4_ins4`
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
  - [기본] → `morning4_dain_msg_1_ins`

- 캐릭터: `없음`
**{name}**: *심호흡하고, 약속 메시지를 다시 확인한다.*

---

### `morning4_seo_msg_1`
- 배경: `room_my.png`
- 다음: `morning4_seo_msg_1_ins`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 늦으면 안 돼. 공원 분수대, 10시.

---

### `morning4_seo_msg_1_ins`
- 배경: `room_my.png`
- 다음: `morning4_seo_msg_1_ins2`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: *명령형이다. 이 사람은 데이트 약속도 지시처럼 한다. — 근데 왜 웃기지.*

---

### `morning4_seo_msg_1_ins2`
- 배경: `room_my.png`
- 다음: `morning4_hidden_check`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: *약속 장소에 서 있다. — 올까? 금요일에 저렇게 화가 났는데.*

---

### `morning4_yuna_msg_1`
- 배경: `room_my.png`
- 다음: `morning4_yuna_msg_1_ins`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 10시. 역 앞 카페. 늦으면 간다.

---

### `morning4_yuna_msg_1_ins`
- 배경: `room_my.png`
- 다음: `morning4_yuna_msg_1_ins2`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *짧다. 유나답다. — '늦으면 간다'가 '제발 늦지 마'와 같은 뜻이라는 걸 이제 안다.*

---

### `morning4_yuna_msg_1_ins2`
- 배경: `room_my.png`
- 다음: `morning4_yuna_msg_1_ins3`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: *오늘이다!!!! 체육관 앞 저녁 6시!!*

---

### `morning4_yuna_msg_1_ins3`
- 배경: `room_my.png`
- 다음: `morning4_yuna_msg_1_ins4`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: *늦으면 진짜 화낸다!!*

---

### `morning4_yuna_msg_1_ins4`
- 배경: `room_my.png`
- 다음: `morning4_yuna_msg_1_ins5`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: *아 왜 이렇게 떨리지ㅋㅋㅋ 아 이거 보내도 되나*

---

### `morning4_yuna_msg_1_ins5`
- 배경: `room_my.png`
- 다음: `morning4_hidden_check`

- 캐릭터: `dain_normal.png` @ 0.35
**{name}**: *마지막 줄은 안 보낼 생각이었겠지. — 근데 다인이니까.*

---

### `morning4_dain_msg_1`
- 배경: `room_my.png`
- 다음: `morning4_hidden_check`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 오늘이다!!!! 체육관 앞 저녁 6시!! 아 왜 이렇게 떨리지ㅋㅋㅋ 아 이거 보내도 되나

---

### `morning4_dain_msg_1_ins`
- 배경: `room_my.png`
- 다음: `morning4_dain_msg_1_ins2`

- 캐릭터: `없음`
**{name}**: *짧다. 그런데 '잘하고 와'가 묵직하다. Day 2에 전 학교에서도 이랬어?라고 물었던 놈이, Day 3에 거절도 사랑이야라고 말했던 놈이 — 오늘은 '잘하고 와'다.*

---

### `morning4_dain_msg_1_ins2`
- 배경: `room_my.png`
- 다음: `morning4_hidden_check`

- 캐릭터: `없음`
**{name}**: *경고에서 직면으로, 직면에서 응원으로. — 민수가 나보다 먼저 나를 믿어주고 있다.*

---

### `morning4_hidden_check`
- 배경: `room_my.png`
- 분기:
  - [`homeroom_day3`] → `morning4_manuscript_check`
  - [`nurse_day4`] → `hidden_nurse_d4_morning_1`
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
- 다음: `hidden_homeroom_d4_1_ins`

- 캐릭터: `teacher_normal.png`
**{name}**: *학교 정문이 살짝 열려 있다. 안쪽에서 인기척. — 정문 앞에서 나오는 사람. 담임선생님이다.*

---

### `hidden_homeroom_d4_1_ins`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_1_ins2`

- 캐릭터: `teacher_normal.png`
**{name}**: *온다. — 멀리서 보인다. 화를 냈던 사람이 맞나 싶을 만큼, 평범한 걸음이다.*

---

### `hidden_homeroom_d4_1_ins2`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_2`

- 캐릭터: `teacher_normal.png`
**{name}**: *화가 났을 텐데 — 그래도 나왔다. 이 사람 앞에서 도망치면 안 된다.*

---

### `hidden_homeroom_d4_2`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...어? {name}?

---

### `hidden_homeroom_d4_3`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_3_ins`

- 캐릭터: `teacher_normal.png`
**{name}**: 선생님? 주말인데 학교에요?

---

### `hidden_homeroom_d4_3_ins`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_3_ins2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *당황하며* 아, 이건 — 서류 정리가 남아서.

---

### `hidden_homeroom_d4_3_ins2`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_3_ins3`

- 캐릭터: `teacher_normal.png`
**{name}**: *서류 정리. — 빈 교실에서 원고 쓰고 있었겠지. 이제는 안다.*

---

### `hidden_homeroom_d4_3_ins3`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_3_ins4`

- 캐릭터: `teacher_normal.png`
**{name}**: 혼자서요?

---

### `hidden_homeroom_d4_3_ins4`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *주머니에 손을 넣으며* ...교사는 주말에도 교사야. 뭐.

---

### `hidden_homeroom_d4_4`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_4_ins`

- 캐릭터: `teacher_normal.png`
**{name}**: *교문 밖에서 보니 담임은 교사처럼 보이지 않는다. 그냥 — 글 쓰는 사람처럼.*

---

### `hidden_homeroom_d4_4_ins`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_4_ins2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 너는 왜 여기야?

---

### `hidden_homeroom_d4_4_ins2`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_4_ins3`

- 캐릭터: `teacher_normal.png`
**{name}**: 지나가다가요.

---

### `hidden_homeroom_d4_4_ins3`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_4_ins4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 지나가다가 학교 정문을 들여다보는 학생은 처음이야.

---

### `hidden_homeroom_d4_4_ins4`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_5`

- 캐릭터: `teacher_normal.png`
**{name}**: *어색한 침묵. — 그리고 담임이 먼저.*

---

### `hidden_homeroom_d4_5`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_5_ins`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...밥 먹었어?

---

### `hidden_homeroom_d4_5_ins`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_5_ins2`

- 캐릭터: `teacher_normal.png`
**{name}**: 아직이요.

---

### `hidden_homeroom_d4_5_ins2`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_5_ins3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 교육적 관심의 연장이라고 해 두자. *작게 중얼거리며* 커피 한 잔 정도는 괜찮지? — 학생이니까 주스지만.

---

### `hidden_homeroom_d4_5_ins3`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_choice`

- 캐릭터: `teacher_normal.png`
**{name}**: *또 시작이다. '교육적 관심'이라고 말해놓고 바로 선을 넘는 패턴.*

---

### `hidden_homeroom_d4_choice`
- 배경: `street.png`
- 선택지:
  1. "좋아요. 근처에 카페 있어요?" → `hidden_homeroom_d4_cafe_1` | Teacher +12
  2. "선생님, 그러면 안 되는 거 아니에요?" → `hidden_homeroom_d4_decline` | Teacher +5

- 캐릭터: `teacher_normal.png`
**{name}**: *커피 한 잔. — 교육적 관심.*

---

### `hidden_homeroom_d4_cafe_1`
- 배경: `cafe.png`
- 플래그: `homeroom_day4_cafe`
- 다음: `hidden_homeroom_d4_cafe_1_ins`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 학교 밖에서 학생이랑 차 마시는 건 처음이야. 솔직히? 좀 어색해.

---

### `hidden_homeroom_d4_cafe_1_ins`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_1_ins2`

- 캐릭터: `teacher_normal.png`
**{name}**: 어색해요?

---

### `hidden_homeroom_d4_cafe_1_ins2`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_1_ins3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *커피를 한 모금 마시며* 솔직히? 좀.

---

### `hidden_homeroom_d4_cafe_1_ins3`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_1_ins4`

- 캐릭터: `teacher_normal.png`
**{name}**: *솔직하다. — 이 사람은 건조한 농담 뒤에 숨지만, 가끔 솔직한 순간이 튀어나온다.*

---

### `hidden_homeroom_d4_cafe_1_ins4`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_1_ins5`

- 캐릭터: `teacher_normal.png`
**{name}**: 어제 원고, 더 쓰셨어요?

---

### `hidden_homeroom_d4_cafe_1_ins5`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_2`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 커피잔을 내려놓는다. 잠깐 생각하듯.*

---

### `hidden_homeroom_d4_cafe_2`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_2_ins`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...조금. 어제 네가 보고 나서 — 이상하게 좀 더 쓸 수 있었어.

---

### `hidden_homeroom_d4_cafe_2_ins`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_2_ins2`

- 캐릭터: `teacher_normal.png`
**{name}**: 제가 본 게 도움이 됐어요?

---

### `hidden_homeroom_d4_cafe_2_ins2`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_2_ins3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 도움이라기보다... *창밖을 보며* 누군가한테 들킨 게 — 안도가 됐달까. 혼자만 알고 있는 건 비밀이 아니라 짐이거든.

---

### `hidden_homeroom_d4_cafe_2_ins3`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_2_ins4`

- 캐릭터: `teacher_normal.png`
**{name}**: *짐. — 7년 동안 혼자 짊어진 미완성 원고가 짐이었구나.*

---

### `hidden_homeroom_d4_cafe_2_ins4`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 소설에서 제일 어려운 게 뭔지 알아?

---

### `hidden_homeroom_d4_cafe_3`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_choice`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 첫 번째 독자를 찾는 거야. 읽어줄 사람이 없으면 — 이야기는 완성되지 않아.

---

### `hidden_homeroom_d4_cafe_choice`
- 배경: `cafe.png`
- 선택지:
  1. "그 소설, 주인공이 누구예요?" → `hidden_homeroom_d4_cafe_choice_a` | Teacher +12
  2. "첫 번째 독자라니, 무거운데요" → `hidden_homeroom_d4_cafe_choice_b` | Teacher +5

- 캐릭터: `teacher_normal.png`
**{name}**: *커피잔을 내려놓는다. 이 사람 눈이 반짝이고 있다.*

---

### `hidden_homeroom_d4_cafe_choice_a`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_4`

- 캐릭터: `teacher_shy.png`
**담임선생님**: ...그건 읽으면 알아. 힌트는 — 나랑 좀 닮았어.

---

### `hidden_homeroom_d4_cafe_choice_b`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *피식* 무거우면 안 읽어도 돼. — 근데 가벼운 마음으로 읽어줘. 그게 더 좋아.

---

### `hidden_homeroom_d4_cafe_4`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_4_ins`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...첫 번째 독자가 되어줄래?

---

### `hidden_homeroom_d4_cafe_4_ins`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_5`

- 캐릭터: `teacher_normal.png`
**{name}**: *데자뷰다. 어제 빈 교실에서도 비슷한 말을 했다. — 근데 오늘은 카페에서, 학교 밖에서, 더 가볍게. 아니 — 더 진지하게.*

---

### `hidden_homeroom_d4_cafe_5`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_5_ins`

- 캐릭터: `teacher_normal.png`
**{name}**: 읽고 싶어요.

---

### `hidden_homeroom_d4_cafe_5_ins`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_5_ins2`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 잠깐 웃는다. 어색한 웃음이 아니라 — 안도의 웃음.*

---

### `hidden_homeroom_d4_cafe_5_ins2`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_5_ins3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...고마워. 근데 이거 아무한테도 — 알지? ...이건 우리 비밀이야. — 교사가 학생한테 비밀이 있으면 안 되는 건데.

---

### `hidden_homeroom_d4_cafe_5_ins3`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_5_ins4`

- 캐릭터: `teacher_normal.png`
**{name}**: 교육적 관심이라고 하실 거죠?

---

### `hidden_homeroom_d4_cafe_5_ins4`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_5_ins5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *멈칫하고* ...그걸 내가 말하기 전에 치지 마.

---

### `hidden_homeroom_d4_cafe_5_ins5`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_5_ins6`

- 캐릭터: `teacher_normal.png`
**{name}**: *피식 웃었다. — 담임도 피식 웃었다. 같은 타이밍에.*

---

### `hidden_homeroom_d4_cafe_5_ins6`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_5_ins7`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...맞아. 안 되는 거지.

---

### `hidden_homeroom_d4_cafe_5_ins7`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_cafe_6`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 주머니에서 손을 뺀다. 손끝이 잠깐 허공에서 맴돈다. 습관 같은 제스처.*

---

### `hidden_homeroom_d4_cafe_6`
- 배경: `cafe.png`
- 플래그: `homeroom_day4`
- 다음: `hidden_homeroom_d4_cafe_6_ins`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...고마워. 근데 이거 아무한테도 — 알지? ...우리 비밀이야.

---

### `hidden_homeroom_d4_cafe_6_ins`
- 배경: `cafe.png`
- 다음: `hidden_homeroom_d4_freetalk`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 나를 본다. 건조하지 않은 눈.*

---

### `hidden_homeroom_d4_freetalk`
- 배경: `cafe.png`
- 타입: `free_talk`
- 다음: `hidden_nurse_d4_check`
- 컨텍스트: "Day 4. 주말에 학교 앞에서 우연히 만나 카페에서 대화. 첫 번째 독자가 되어달라는 부탁. 톤: 진지해진 대화. 데이트의 설렘과 긴장. 농담보다 진심이 많아진다. 감정이 솔직해지는 순간들."
- 성격: "담임선생님은 학교 밖에서 더 편안하다. 소설에 대한 열정과 학생에 대한 감정 사이에서 흔들린다."

- 캐릭터: `teacher_normal.png`
**담임선생님**: *담임선생님과 카페에서 대화 중.*

---

### `hidden_homeroom_d4_decline`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_decline_ins`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...맞아. 안 되는 거지. 가 봐. 주말인데 학교 앞에서 뭐 하냐. — 재밌는 거 해.

---

### `hidden_homeroom_d4_decline_ins`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_decline_ins2`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 돌아선다. — 어깨가 살짝 처져 있다.*

---

### `hidden_homeroom_d4_decline_ins2`
- 배경: `street.png`
- 다음: `hidden_nurse_d4_check`

- 캐릭터: `teacher_normal.png`
**{name}**: *거절한 건데 — 왜 마음이 이러지. 집으로 돌아왔다.*

---

### `hidden_nurse_d4_morning_1`
- 배경: `nurse_room.png`
- BGM: `morning.mp3`
- 다음: `hidden_nurse_d4_morning_2`

- 캐릭터: `nurse_normal.png`
**{name}**: *주말 아침. 습관처럼 보건실로 향한다. — 습관이 된 건 언제부터였지.*

---

### `hidden_nurse_d4_morning_2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_3`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건실 문을 열었다. 보건선생님이 의자에 앉아 있다. 흰 가운 차림. — 근데 평소와 다르다. 장난기가 없다.*

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
**{name}**: *'어, 왔어'가 평소보다 반 톤 낮다. — 이 사람의 감정은 톤으로 읽어야 한다.*

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
**{name}**: *보건선생님이 책상 위 서류를 정리하는 척하지만 — 같은 종이를 세 번째 넘기고 있다.*

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
**{name}**: *보건선생님이 안경을 만진다. 안경 너머로 보이는 눈이 생각보다 크다. 장난기 뒤에 숨어 있던 눈.*

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
**{name}**: *질문이 아니다. — 대답을 이미 두려워하고 있는 얼굴이다. 눈을 마주친다. 평소 장난기가 사라진 진지한 얼굴로. — 이 사람이 이렇게 무방비한 건 처음이다.*

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

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...진짜로?

---

### `hidden_nurse_d4_morning_13`
- 배경: `nurse_room.png`
- 플래그: `nurse_day4_afterschool`
- 다음: `hidden_nurse_d4_morning_freetalk`

- 캐릭터: `nurse_normal.png`
**{name}**: *'진짜로'. — 오늘은 내가 먼저 들었다. 보건선생님의 안경 너머로 눈이 촉촉하다. 장난기가 돌아온다. — 근데 웃는 눈 아래로 뭔가 흐른 자국이 있다. 가슴이 아프다.*

---

### `hidden_nurse_d4_morning_freetalk`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_check`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님과 보건실에서 대화 중.*

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
- 다음: `hidden_nurse_d4_1_ins`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 학교 메신저로 '도와줄 사람 구함'이라고 올렸다. 발이 학교를 향하고 있다.*

---

### `hidden_nurse_d4_1_ins`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_1_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건실. 책상 위에 서류와 검진 도구가 쌓여 있다. 보건선생님이 차분하게 정리 중이다.*

---

### `hidden_nurse_d4_1_ins2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_2`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *돌아보며* 어? 진짜 왔어?

---

### `hidden_nurse_d4_2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_2_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 어? 진짜 왔어? 올 줄 몰랐는데. — 학생이 주말에 보건실에 자원봉사를 오다니.

---

### `hidden_nurse_d4_2_ins`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_2_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: 환자가 간호사를 도와주는 거네요.

---

### `hidden_nurse_d4_2_ins2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_2_ins3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *웃으며* 환자가 간호사 도와주는 건 처음이야.

---

### `hidden_nurse_d4_2_ins3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_2_ins4`

- 캐릭터: `nurse_normal.png`
**{name}**: *웃음이 자연스럽다. — 학교에서 볼 때와 다르다. 오늘의 보건선생님은 선생님이라기보다 그냥 — 편한 사람 같다.*

---

### `hidden_nurse_d4_2_ins4`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_2_ins5`

- 캐릭터: `nurse_normal.png`
**{name}**: *검진 서류 정리를 도와준다. 이름표 분류, 시력 검사표 정리, 혈압계 소독.*

---

### `hidden_nurse_d4_2_ins5`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_2_ins6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *서류를 건네며* 여기 분류해줄래? 학년별로.

---

### `hidden_nurse_d4_2_ins6`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_2_ins7`

- 캐릭터: `nurse_normal.png`
**{name}**: *나란히 앉아 서류를 정리한다. 손이 스칠 때마다 — 보건선생님이 살짝 손을 거둔다. 의식하는 건가.*

---

### `hidden_nurse_d4_2_ins7`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_2_ins8`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...대학병원에서는 이런 거 혼자 다 했었는데.

---

### `hidden_nurse_d4_2_ins8`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_3`

- 캐릭터: `nurse_normal.png`
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
- 다음: `hidden_nurse_d4_4_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...대학병원에서는 이런 거 혼자 다 했었는데. 야간 근무 때 — 간호사 세 명이 해야 할 일을 혼자 하는 날도 있었어.

---

### `hidden_nurse_d4_4_ins`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: 그래서 번아웃이...

---

### `hidden_nurse_d4_4_ins2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_ins3`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 잠깐 멈춘다. 서류를 내려놓는다.*

---

### `hidden_nurse_d4_4_ins3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_ins4`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...그때 나한테 제일 힘들었던 건 일의 양이 아니었어.

---

### `hidden_nurse_d4_4_ins4`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_ins5`

- 캐릭터: `nurse_normal.png`
**{name}**: 그럼 뭐였어요?

---

### `hidden_nurse_d4_4_ins5`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_ins6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *목소리가 한 톤 낮아지며* 아무도 내 이름을 안 불러줬어. '간호사님', '야간 당직', '3번 병동'. — 다 직함이지, 이름이 아니거든.

---

### `hidden_nurse_d4_4_ins6`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_ins7`

- 캐릭터: `nurse_normal.png`
**{name}**: *장난기가 완전히 사라졌다. — 이 사람의 진심은 이렇게 드러난다.*

---

### `hidden_nurse_d4_4_ins7`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_ins8`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 학교에서는 '보건선생님'이잖아. 또 직함이야. *살짝 웃으며* 근데 너는 — 한 번도 직함으로 부른 적 없지?

---

### `hidden_nurse_d4_4_ins8`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_ins9`

- 캐릭터: `nurse_normal.png`
**{name}**: ...그런가요?

---

### `hidden_nurse_d4_4_ins9`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_ins10`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그냥 '선생님'이라고 불러. 직함 없이. — 그게 좋더라.

---

### `hidden_nurse_d4_4_ins10`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_ins11`

- 캐릭터: `nurse_normal.png`
**{name}**: *이름을 불러주는 것의 무게를 아는 사람이다. — 대학병원에서 번호로 불렸던 사람이니까.*

---

### `hidden_nurse_d4_4_ins11`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_5`

- 캐릭터: `nurse_normal.png`
**{name}**: *서류 정리가 끝났다. 보건선생님이 기지개를 켠다.*

---

### `hidden_nurse_d4_5`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_name_choice`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *창밖을 보며* 그래서 여기 온 거야. 직함 말고 '선생님'이라고 불러주는 곳. — 작은 차이인데 꽤 크더라.

---

### `hidden_nurse_d4_name_choice`
- 배경: `nurse_room.png`
- 선택지:
  1. "이름이 뭐예요? 보건선생님 말고" → `hidden_nurse_d4_name_choice_a` | Nurse +12
  2. "그래서 학교로 오신 거군요" → `hidden_nurse_d4_name_choice_b` | Nurse +5

- 캐릭터: `nurse_normal.png`
**{name}**: *이름. 나도 이 사람을 '보건선생님'이라고만 불러왔다.*

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

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...응. 여기선 모두가 가벼운 상처만 가지고 와. 그게 좋아.

---

### `hidden_nurse_d4_6`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_6_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 고마워~ 덕분에 빨리 끝났다. ...별거야.

---

### `hidden_nurse_d4_6_ins`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_6_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: 별거 아닌데요.

---

### `hidden_nurse_d4_6_ins2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_6_ins3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *잠깐 나를 보며* ...별거야.

---

### `hidden_nurse_d4_6_ins3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_choice`

- 캐릭터: `nurse_normal.png`
**{name}**: *짧은 두 글자에 무게가 있다.*

---

### `hidden_nurse_d4_choice`
- 배경: `nurse_room.png`
- 선택지:
  1. "교육적 활동이면 돼요?" → `hidden_nurse_d4_meal_walk` | Nurse +12
  2. "괜찮아요, 저 이만 갈게요" → `hidden_nurse_d4_pass` | Nurse +3

- 캐릭터: `nurse_normal.png`
**보건선생님**: 자, 보답으로 뭐 사줄까? 선생님이 학생한테 밥 사주는 건 교육적 활동이니까~

---

### `hidden_nurse_d4_meal_walk`
- 배경: `store.png`
- 다음: `hidden_nurse_d4_meal_1`

- 캐릭터: `nurse_normal.png`
**{name}**: *학교 앞 분식집으로 향했다.*

---

### `hidden_nurse_d4_meal_1`
- 배경: `store.png`
- 다음: `hidden_nurse_d4_meal_1_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 아 맵다! 나이 먹으니까 이런 거 못 먹겠어~

---

### `hidden_nurse_d4_meal_1_ins`
- 배경: `store.png`
- 다음: `hidden_nurse_d4_meal_1_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: 선생님도 학생 때 먹었을 텐데요.

---

### `hidden_nurse_d4_meal_1_ins2`
- 배경: `store.png`
- 다음: `hidden_nurse_d4_meal_1b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그때가 언젠데~ *웃으며* 나 이제 늙었어.

---

### `hidden_nurse_d4_meal_1b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_2`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건실로 돌아왔다.*

---

### `hidden_nurse_d4_meal_2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_2_ins`

- 캐릭터: `nurse_normal.png`
**{name}**: 안 늙었는데요.

---

### `hidden_nurse_d4_meal_2_ins`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_3`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 잠깐 멈춘다. 젓가락을 내려놓고.*

---

### `hidden_nurse_d4_meal_3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_3_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...그런 말. 학생한테 들으니까 이상하네.

---

### `hidden_nurse_d4_meal_3_ins`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_3_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: *장난기가 사라졌다. — 이 표정을 보면 가슴이 조여온다.*

---

### `hidden_nurse_d4_meal_3_ins2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_3_ins3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *다시 웃으며* 자, 다 먹었으면 해산! 선생님은 할 일이 아직 남았으니까~

---

### `hidden_nurse_d4_meal_3_ins3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_3_ins4`

- 캐릭터: `nurse_normal.png`
**{name}**: *헤어지는 길. 보건선생님이 뒤에서.*

---

### `hidden_nurse_d4_meal_3_ins4`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_4`

- 캐릭터: `nurse_normal.png`
**보건선생님**: {name}.

---

### `hidden_nurse_d4_meal_4`
- 배경: `nurse_room.png`
- 플래그: `nurse_day4`, `nurse_day4_help`
- 다음: `hidden_nurse_d4_meal_4_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: {name}. 오늘 고마웠어. — 진짜로.

---

### `hidden_nurse_d4_meal_4_ins`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_4_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: *'진짜로'가 붙었다. — 이 사람이 '진짜로'를 붙이면, 그 앞의 말이 전부 진심이라는 뜻이다.*

---

### `hidden_nurse_d4_meal_4_ins2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_freetalk`

- 캐릭터: `nurse_normal.png`
**{name}**: *'뭐라는 거야'라고 쏘아붙였지만 — 귀가 빨갛다. 또.*

---

### `hidden_nurse_d4_freetalk`
- 배경: `nurse_room.png`
- 타입: `free_talk`
- 다음: `morning4_end`
- 컨텍스트: "Day 4. 주말에 건강검진 준비를 도와주고 분식집에서 식사 후 보건실로 돌아와 대화. 대학병원 번아웃 이야기. 톤: 진지해진 대화. 데이트의 설렘과 긴장. 농담보다 진심이 많아진다. 감정이 솔직해지는 순간들."
- 성격: "보건선생님은 교실 밖에서 한결 편하게 다가온다. 장난기와 진심이 오가며, 이름을 불러주는 것의 무게를 안다."

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님과 보건실에서 대화 중.*

---

### `hidden_nurse_d4_pass`
- 배경: `nurse_room.png`
- 다음: `morning4_end`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그래~ 조심히 가! — 다음에 또 와.

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
  - [기본] → `date_seo_1`

- 캐릭터: `없음`
**{name}**: *거울을 한 번 더 본다. — 됐다. 나가자.*

---

## 4일차 — 점심 `day4_2_lunch`

### `date_seo_1`
- 배경: `park.png`
- BGM: `date.mp3`
- 조건: `route_seoyeon`
- 다음: `date_seo_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *분수대 앞. 서연이 서 있다. 먼저 와 있었다.*

---

### `date_seo_2`
- 배경: `park.png`
- 다음: `date_seo_compliment_choice`

- 캐릭터: `seyoun_normal.png`
**{name}**: *다른 사람 같다. 아니 — 같은 사람인데, 다른 면이다.*

---

### `date_seo_compliment_choice`
- 배경: `park.png`
- 선택지:
  1. "오늘, 진짜 예쁘다." → 호감분기: Seoyeon
    - [50+] → `date_seo_pretty_high`
    - [기본] → `date_seo_pretty_low`
  2. "신경 많이 썼다, 오늘." → `date_seo_bright` | Seoyeon +5

- 캐릭터: `seyoun_normal.png`
**{name}**: *뭐라고 하지?*

---

### `date_seo_pretty_high`
- 배경: `park.png`
- 스탯: Seoyeon +10
- 다음: `date_seo_pretty_high_ins`

- 캐릭터: `seyoun_shy.png`
**{name}**: *서연이 잠깐 멈춘다. — 그리고 웃는다. 입꼬리가 아니라 눈이 웃는다.*

---

### `date_seo_pretty_high_ins`
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
- 다음: `date_seo_pretty_high_3_ins`

- 캐릭터: `seyoun_shy2.png`
**{name}**: 지금 나온 거야.

---

### `date_seo_pretty_high_3_ins`
- 배경: `park.png`
- 다음: `date_seo_pretty_high_4`

- 캐릭터: `seyoun_shy2.png`
**서연**: *머리카락을 넘기며* ...착각하지 마.

---

### `date_seo_pretty_high_4`
- 배경: `park.png`
- 다음: `date_seo_walk`

- 캐릭터: `seyoun_shy2.png`
**{name}**: *'착각하지 마'라고 했는데 — 귀가 빨갛다. 또.*

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
- 다음: `date_seo_flower`

- 캐릭터: `seyoun_normal.png`
**{name}**: *무심한 말 같지만 — 거기에 서연의 경험이 묻어 있다.*

---

### `date_seo_flower`
- 배경: `park.png`
- 다음: `date_seo_flower_ins`

- 캐릭터: `seyoun_normal.png`
**{name}**: *꽃집 앞을 지나간다.*

---

### `date_seo_flower_ins`
- 배경: `park.png`
- 다음: `date_seo_flower_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *걸음을 멈추며* ...들어가 볼까?

---

### `date_seo_flower_2`
- 배경: `park.png`
- 다음: `date_seo_succulent`

- 캐릭터: `seyoun_normal.png`
**서연**: ...들어가 볼까?

---

### `date_seo_succulent`
- 배경: `park.png`
- 다음: `date_seo_succulent_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 작은 화분을 하나 고른다. 다육이.*

---

### `date_seo_succulent_2`
- 배경: `park.png`
- 다음: `date_seo_succulent_2_ins`

- 캐릭터: `seyoun_normal.png`
**서연**: 이건 관리하기 쉬워. 물 안 줘도 잘 살아.

---

### `date_seo_succulent_2_ins`
- 배경: `park.png`
- 다음: `date_seo_succulent_3`

- 캐릭터: `seyoun_normal.png`
**{name}**: 나한테 주는 거야?

---

### `date_seo_succulent_3`
- 배경: `park.png`
- 다음: `date_seo_freetalk`

- 캐릭터: `seyoun_laugh.png`
**서연**: 키울 수 있으면. — 못 키우면 내가 다시 가져갈 거니까.

---

### `date_seo_freetalk`
- 배경: `park.png`
- 타입: `free_talk`
- 다음: `date_seo_end`
- 컨텍스트: "4일차 데이트, 서연과 함께 시간을 보내는 중. 관계가 깊어지고 있다. 톤: 진지해진 대화. 데이트의 설렘과 긴장. 농담보다 진심이 많아진다. 감정이 솔직해지는 순간들."
- 성격: "서연은 쿨뷰티 학생회장. 데이트 중에는 평소의 여유가 흔들리고 솔직한 면이 더 나온다."

- 캐릭터: `seyoun_normal.png`
**서연**: *서연이와 데이트 중이다. 서연이 평소보다 부드럽다.*

---

### `date_seo_end`
- 배경: `park.png`
- 다음: `date_seo_end_b`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 건넨 것. — 받아든 손이 떨린다.*

---

### `date_seo_end_b`
- 배경: `street.png`
- 다음: `pre_confess_minsu`

- 캐릭터: `seyoun_normal.png`
**{name}**: *공원을 나서 거리를 걸었다.*

---

### `date_yuna_1`
- 배경: `cafe.png`
- BGM: `night1.mp3`
- 조건: `route_yuna`
- 다음: `date_yuna_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *카페 앞. 유나가 벽에 기대어 서 있다. 검은 원피스에 작은 크로스백.*

---

### `date_yuna_2`
- 배경: `cafe.png`
- 다음: `date_yuna_compliment_choice`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 이렇게 생겼었나. — 교복 밖의 유나를 처음 본다.*

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
- 스탯: Yuna +10
- 다음: `date_yuna_pretty_high_2`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나가 잠깐 멈춘다. 고개를 살짝 숙인다.*

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
- 다음: `date_yuna_pretty_high_5_ins`

- 캐릭터: `yuna_shy.png`
**{name}**: *한 번 더? — 유나가 '한 번 더'를 요구한다.*

---

### `date_yuna_pretty_high_5_ins`
- 배경: `cafe.png`
- 다음: `date_yuna_pretty_high_5_ins2`

- 캐릭터: `yuna_shy.png`
**{name}**: 예쁘다.

---

### `date_yuna_pretty_high_5_ins2`
- 배경: `cafe.png`
- 다음: `date_yuna_bookstore`

- 캐릭터: `yuna_normal.png`
**유나**: *귀가 빨개지며* ...됐어.

---

### `date_yuna_pretty_low`
- 배경: `cafe.png`
- 스탯: Yuna +3
- 다음: `date_yuna_bookstore`

- 캐릭터: `yuna_shy.png`
**유나**: ...그런 말 처음 듣는다.

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
- 다음: `date_yuna_bookstore_2_ins`

- 캐릭터: `yuna_normal.png`
**유나**: 여기 와 본 적 있어?

---

### `date_yuna_bookstore_2_ins`
- 배경: `bookstore.png`
- 다음: `date_yuna_bookstore_3`

- 캐릭터: `yuna_normal.png`
**{name}**: 처음이야.

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

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 이어폰을 한쪽 건넨다.*

---

### `date_yuna_earphone_2`
- 배경: `bookstore.png`
- 다음: `date_yuna_earphone_2_ins`

- 캐릭터: `yuna_normal.png`
**유나**: ...들어봐.

---

### `date_yuna_earphone_2_ins`
- 배경: `bookstore.png`
- 다음: `date_yuna_earphone_3`

- 캐릭터: `yuna_normal.png`
**{name}**: *조용한 피아노 곡이 흐른다. 서점의 소음이 멀어진다.*

---

### `date_yuna_earphone_3`
- 배경: `bookstore.png`
- 다음: `date_yuna_oldbook`

- 캐릭터: `yuna_shy.png`
**{name}**: *이어폰 줄의 길이만큼이 거리다. 30센티. — 이보다 가까우면 닿고, 이보다 멀면 빠진다.*

---

### `date_yuna_oldbook`
- 배경: `bookstore.png`
- 다음: `date_yuna_oldbook_ins`

- 캐릭터: `yuna_normal.png`
**{name}**: *헌책방을 지나간다. 유나가 걸음을 멈춘다.*

---

### `date_yuna_oldbook_ins`
- 배경: `bookstore.png`
- 다음: `date_yuna_oldbook_ins2`

- 캐릭터: `yuna_normal.png`
**유나**: ...여기.

---

### `date_yuna_oldbook_ins2`
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
- 다음: `date_yuna_freetalk`

- 캐릭터: `yuna_smile.png`
**유나**: ...지금은 다르게 읽혀.

---

### `date_yuna_freetalk`
- 배경: `bookstore.png`
- 타입: `free_talk`
- 다음: `date_yuna_end`
- 컨텍스트: "4일차 데이트, 유나와 함께. 유나의 벽이 많이 낮아진 상태. 톤: 진지해진 대화. 데이트의 설렘과 긴장. 농담보다 진심이 많아진다. 감정이 솔직해지는 순간들."
- 성격: "유나는 신비주의 문학소녀. 데이트 중에는 문장이 길어지고 감정이 묻어난다. 두 문장 이상 연속은 고백과 같다."

- 캐릭터: `yuna_normal.png`
**유나**: *유나와 함께 시간을 보내고 있다. 유나가 평소보다 말이 많다.*

---

### `date_yuna_end`
- 배경: `bookstore.png`
- 다음: `pre_confess_minsu`

- 캐릭터: `yuna_smile.png`
**{name}**: *유나가 나를 보며 말한다. — 그 눈에 '너 때문에'가 적혀 있다.*

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
**다인**: 왔다!! 늦을 뻔했지?!

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
**다인**: 나는 20분 전에 왔거든!!

---

### `date_dain_compliment_choice`
- 배경: `gym.png`
- 선택지:
  1. "그 캡모자 좋은데." → 호감분기: Dain
    - [50+] → `date_dain_pretty_high`
    - [기본] → `date_dain_pretty_low`
  2. "운동복인데 왜 예쁘지." → `date_dain_bright` | Dain +5

- 캐릭터: `dain_normal.png`
**{name}**: *이건 이제 패턴이다.*

---

### `date_dain_pretty_high`
- 배경: `gym.png`
- 스탯: Dain +10
- 다음: `date_dain_pretty_high_2`

- 캐릭터: `dain_shy.png`
**{name}**: *다인이 멈춘다. 눈이 커진다. — 그리고 캡모자를 푹 눌러쓴다.*

---

### `date_dain_pretty_high_2`
- 배경: `gym.png`
- 다음: `date_dain_pretty_high_3`

- 캐릭터: `dain_shy.png`
**다인**: 야!! 경고 없이!! 그런 말 하면!!

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
**{name}**: *때린다고 했지만 목소리가 떨리고 있다.*

---

### `date_dain_pretty_low`
- 배경: `gym.png`
- 스탯: Dain +3
- 다음: `date_dain_to_arcade`

- 캐릭터: `dain_shy.png`
**다인**: 뭐야 갑자기!! ...ㅋㅋ 고맙긴 한데 부끄러우니까 그만해.

---

### `date_dain_bright`
- 배경: `gym.png`
- 다음: `date_dain_to_arcade`

- 캐릭터: `dain_laugh.png`
**다인**: 당연하지!! 오늘 컨디션 최상이거든!!

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
**{name}**: *오락실로 간다. 리듬게임 앞에 선다.*

---

### `date_dain_arcade_2`
- 배경: `arcade.png`
- 다음: `date_dain_arcade_2_ins`

- 캐릭터: `dain_normal.png`
**다인**: 자, 내기다!! 진 사람 음료수!!

---

### `date_dain_arcade_2_ins`
- 배경: `arcade.png`
- 다음: `date_dain_arcade_3`

- 캐릭터: `dain_normal.png`
**{name}**: 또 내기?

---

### `date_dain_arcade_3`
- 배경: `arcade.png`
- 다음: `date_dain_arcade_3_ins`

- 캐릭터: `dain_normal.png`
**다인**: 내기 없으면 재미없잖아!!

---

### `date_dain_arcade_3_ins`
- 배경: `arcade.png`
- 다음: `date_dain_arcade_3_ins2`

- 캐릭터: `dain_normal.png`
**{name}**: *리듬게임. — 다인이 압도적으로 잘한다.*

---

### `date_dain_arcade_3_ins2`
- 배경: `arcade.png`
- 다음: `date_dain_rhythm`

- 캐릭터: `dain_normal.png`
**다인**: *꺄아 소리를 지르며* 풀콤보!! 봤어?!

---

### `date_dain_rhythm`
- 배경: `arcade.png`
- 다음: `date_dain_rhythm_2`

- 캐릭터: `dain_laugh.png`
**다인**: *화면을 가리키며* 이 스코어 — 역대 2등이야!!

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
**다인**: ㅋㅋㅋ 당연하지!! 이건 무릎 안 써도 되니까!!

---

### `date_dain_knee`
- 배경: `arcade.png`
- 다음: `date_dain_knee_2`

- 캐릭터: `dain_laugh.png`
**{name}**: *'무릎 안 써도 되니까'. — 가볍게 말했지만, 거기에 무게가 있다.*

---

### `date_dain_knee_2`
- 배경: `street.png`
- 다음: `date_dain_knee_2b`

- 캐릭터: `dain_normal.png`
**{name}**: *스포츠용품점을 지나간다. 다인이 쇼윈도 앞에서 멈춘다. 배구화가 진열돼 있다.*

---

### `date_dain_knee_2b`
- 배경: `street.png`
- 다음: `date_dain_shop`

- 캐릭터: `dain_normal.png`
**{name}**: *오락실을 나와 거리로 나왔다.*

---

### `date_dain_shop`
- 배경: `street.png`
- 다음: `date_dain_shop_2`

- 캐릭터: `dain_normal.png`
**다인**: ......

---

### `date_dain_shop_2`
- 배경: `street.png`
- 다음: `date_dain_shop_2_ins`

- 캐릭터: `dain_normal.png`
**{name}**: 다인?

---

### `date_dain_shop_2_ins`
- 배경: `street.png`
- 다음: `date_dain_shop_3`

- 캐릭터: `dain_normal.png`
**다인**: *고개를 돌리며* 아무것도 아냐! 가자!

---

### `date_dain_shop_3`
- 배경: `street.png`
- 다음: `date_dain_shop_3_ins`

- 캐릭터: `dain_laugh.png`
**다인**: *캡모자를 눌러 쓰며* ...쳐다보지 마.

---

### `date_dain_shop_3_ins`
- 배경: `street.png`
- 다음: `date_dain_freetalk`

- 캐릭터: `dain_normal.png`
**다인**: *캡모자 아래서* ...한 번만 더 말하면 진짜 때린다.

---

### `date_dain_freetalk`
- 배경: `street.png`
- 타입: `free_talk`
- 다음: `date_dain_end`
- 컨텍스트: "4일차 데이트, 다인과 함께. 진지한 분위기가 섞여 있다. 톤: 진지해진 대화. 데이트의 설렘과 긴장. 농담보다 진심이 많아진다. 감정이 솔직해지는 순간들."
- 성격: "다인은 에너지 넘치는 체육계. 데이트에서는 긴장해서 평소보다 볼륨이 줄어든다. 진심이 나올 때 느낌표가 사라진다."

- 캐릭터: `dain_normal.png`
**다인**: *다인이와 데이트 중이다. 다인이 평소보다 조심스럽다.*

---

### `date_dain_end`
- 배경: `street.png`
- 다음: `pre_confess_minsu`

- 캐릭터: `dain_normal.png`
**{name}**: *웃고 있다. — 근데 눈이 웃지 않는다.*

---

### `pre_confess_minsu`
- 배경: `street.png`
- 다음: `pre_confess_minsu_2`

- 캐릭터: `minsu_smirk.png`
**민수**: 야, 데이트 중이지? 한마디만 할게

---

### `pre_confess_minsu_2`
- 배경: `street.png`
- 다음: `pre_confess_callback`

- 캐릭터: `minsu_smirk.png`
**민수**: 이번엔 제대로 해. 도망치지 말고

---

### `pre_confess_callback`
- 배경: `street.png`
- 다음: `confess_seo_1`

- 캐릭터: `minsu_smirk.png`
**{name}**: *주머니 안의 핸드폰이 무겁다. 아무 알림도 없는데. — 첫날, 화면에 뜬 이름을 보고 주머니에 넣었던 그때처럼 도망치면 안 된다. 이번에는.*

---

## 4일차 — 방과후 `day4_3_afterschool`

### `confess_seo_1`
- 배경: `top_school.png`
- BGM: `confession.mp3`
- 분기:
  - [`route_seoyeon`] → `confess_seo_2`
  - [`route_yuna`] → `confess_yuna_1`
  - [`route_dain`] → `confess_dain_1`
  - [기본] → `day4_night_start`

- 캐릭터: `없음`
**{name}**: *데이트가 끝나가고 있다.*

---

### `confess_seo_2`
- 배경: `top_school.png`
- 분기:
  - [`chose_seoyeon_lunch`] → `confess_seo_3`
  - [기본] → `confess_seo_3b`

- 캐릭터: `seyoun_normal.png`
**서연**: 마지막으로 보여줄 데가 있어.

---

### `confess_seo_3`
- 배경: `top_school.png`
- 다음: `confess_seo_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: *옥상. 석양이 학교를 물들이고 있다. Day 1에서 처음 왔던 바로 그 장소.*

---

### `confess_seo_3b`
- 배경: `top_school.png`
- 다음: `confess_seo_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: *옥상. 석양이 학교를 물들이고 있다. 며칠 사이에 익숙해진 장소.*

---

### `confess_seo_4`
- 배경: `top_school.png`
- 다음: `confess_seo_4_ins`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 난간에 기대서 있다. 바람에 머리카락이 날린다. — 새끼손가락으로 넘기는 그 습관.*

---

### `confess_seo_4_ins`
- 배경: `top_school.png`
- 다음: `confess_seo_5`

- 캐릭터: `seyoun_normal.png`
**{name}**: *전 학교에서 못 했던 말이 떠오른다. — 이번에는 고백한다.*

---

### `confess_seo_5`
- 배경: `top_school.png`
- 다음: `confess_seo_choice`

- 캐릭터: `seyoun_normal.png`
**{name}**: ‹빈›

---

### `confess_seo_choice`
- 배경: `top_school.png`
- 선택지:
  1. "서연아. 잠깐만." → `confess_seo_yes_1` | 플래그: `confessed_seoyeon`
  2. "...바람 좋다." → `confess_seo_no_1` | 플래그: `postponed_seoyeon`

- 캐릭터: `seyoun_normal.png`
**{name}**: *손끝이 차갑다. 바람이 안 부는데. — 이 사람의 완벽한 가면 뒤에 뭐가 있는지, 나만 알고 싶다.*

---

### `confess_seo_yes_1`
- 배경: `top_school.png`
- 다음: `confess_seo_yes_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 돌아본다. 바람이 머리카락을 날린다.*

---

### `confess_seo_yes_2`
- 배경: `top_school.png`
- 다음: `confess_seo_yes_3`

- 캐릭터: `seyoun_normal.png`
**{name}**: *심장이 입 밖으로 나올 것 같다. — 괜찮다. 이번에는.*

---

### `confess_seo_yes_3`
- 배경: `top_school.png`
- 다음: `confess_seo_yes_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: *전 학교에서 못 했던 말이 떠오른다. 그때 말했으면 어땠을까, 라고 수백 번 되뇌었던 그 후회. — 이번에는 고백한다.*

---

### `confess_seo_yes_4`
- 배경: `top_school.png`
- 다음: `confess_seo_yes_5`

- 캐릭터: `seyoun_normal.png`
**{name}**: 서연아. 너 완벽하게 웃잖아. 항상. 근데 나는 — 네가 웃다가 멈추는 그 0.5초가 자꾸 신경 쓰여.

---

### `confess_seo_yes_5`
- 배경: `top_school.png`
- 다음: `confess_seo_yes_6`

- 캐릭터: `seyoun_normal.png`
**{name}**: *말이 엉망이다. 준비한 것도 아닌데 멈출 수가 없다.*

---

### `confess_seo_yes_6`
- 배경: `top_school.png`
- 다음: `confess_seo_yes_7`

- 캐릭터: `seyoun_normal.png`
**{name}**: 그때 네가 진짜 서연이었어. 나는 그 서연이 좋아.

---

### `confess_seo_yes_7`
- 배경: `top_school.png`
- 다음: `confess_seo_yes_8`

- 캐릭터: `seyoun_shy2.png`
**{name}**: ‹빈›

---

### `confess_seo_yes_8`
- 배경: `top_school.png`
- 다음: `confess_seo_yes_9`

- 캐릭터: `seyoun_shy2.png`
**{name}**: *서연이 아무 말도 안 한다. 입술이 떨린다. 학생회장이 아닌, 그냥 한 명의 여자아이가 거기 서 있다.*

---

### `confess_seo_yes_9`
- 배경: `top_school.png`
- 다음: `confess_seo_yes_10`

- 캐릭터: `seyoun_shy.png`
**서연**: ...나도.

---

### `confess_seo_yes_10`
- 배경: `top_school.png`
- 다음: `confess_seo_yes_11`

- 캐릭터: `seyoun_shy.png`
**서연**: ...네가 교문 앞에서 '과분한데'라고 했을 때부터.

---

### `confess_seo_yes_11`
- 배경: `top_school.png`
- 다음: `confess_seo_yes_11_ins`

- 캐릭터: `seyoun_shy2.png`
**서연**: — 이 말 하려고 얼마나 참았는지 몰라.

---

### `confess_seo_yes_11_ins`
- 배경: `top_school.png`
- 다음: `confess_seo_yes_12`

- 캐릭터: `seyoun_shy2.png`
**{name}**: *서연이 새끼손가락을 건넨다.*

---

### `confess_seo_yes_12`
- 배경: `top_school.png`
- 플래그: `day4_confession_accepted`, `isDating_Seoyeon`
- 다음: `day4_night_start`

- 캐릭터: `seyoun_shy2.png`
**{name}**: *서연이 새끼손가락을 건넨다. Day 1에서 봤던 새끼손가락. — 그때는 습관인 줄 알았는데, 이게 서연의 약속 방식이었다.*

---

### `confess_seo_no_1`
- 배경: `top_school.png`
- 다음: `confess_seo_no_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: ...바람 좋다.

---

### `confess_seo_no_2`
- 배경: `top_school.png`
- 다음: `confess_seo_no_3`

- 캐릭터: `seyoun_normal.png`
**{name}**: *Day 1에서도 같은 말을 했다. 그때는 진심이었는데. 지금은 도망이다.*

---

### `confess_seo_no_3`
- 배경: `top_school.png`
- 다음: `confess_seo_no_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 웃는다. 연습된 웃음으로. — 돌아서서 걷는다. 세 걸음째, 서연이 멈춘다.*

---

### `confess_seo_no_4`
- 배경: `top_school.png`
- 플래그: `day4_waited`
- 다음: `confess_seo_no_4_ins`

- 캐릭터: `seyoun_sad.png`
**서연**: ...다음에 올 때는, 다른 말 준비해 와.

---

### `confess_seo_no_4_ins`
- 배경: `top_school.png`
- 다음: `day4_night_start`

- 캐릭터: `seyoun_sad.png`
**{name}**: *등이 곧다. 떨리고 있다.*

---

### `confess_yuna_1`
- 배경: `yuna_hideout.png`
- BGM: `confession.mp3`
- 다음: `confess_yuna_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *데이트가 끝나가고 있다. 유나가 걸음을 멈춘다.*

---

### `confess_yuna_2`
- 배경: `yuna_hideout.png`
- 분기:
  - [`chose_yuna_lunch`] → `confess_yuna_3`
  - [기본] → `confess_yuna_3b`

- 캐릭터: `yuna_normal.png`
**유나**: ...마지막으로 갈 데가 있어.

---

### `confess_yuna_3`
- 배경: `yuna_hideout.png`
- 다음: `confess_yuna_4`

- 캐릭터: `yuna_normal.png`
**{name}**: *도서관 별관. 비밀 독서 공간. 창문으로 석양이 스며든다. Day 2에서 처음 왔던 바로 그 장소.*

---

### `confess_yuna_3b`
- 배경: `yuna_hideout.png`
- 다음: `confess_yuna_4`

- 캐릭터: `yuna_normal.png`
**{name}**: *도서관 별관. 창문으로 석양이 스며든다. 며칠 사이에 익숙해진 장소.*

---

### `confess_yuna_4`
- 배경: `yuna_hideout.png`
- 다음: `confess_yuna_5`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 소파에 앉아 나를 본다. 기다리고 있었다는 듯이.*

---

### `confess_yuna_5`
- 배경: `yuna_hideout.png`
- 다음: `confess_yuna_choice`

- 캐릭터: `yuna_normal.png`
**{name}**: ‹빈›

---

### `confess_yuna_choice`
- 배경: `yuna_hideout.png`
- 선택지:
  1. "유나. 하나만 물어볼게." → `confess_yuna_yes_1` | 플래그: `confessed_yuna`
  2. "...여기 진짜 좋다." → `confess_yuna_no_1` | 플래그: `postponed_yuna`

- 캐릭터: `yuna_normal.png`
**{name}**: *숨이 짧아졌다. 이 침묵이 편했던 건 — 유나니까였다. 그걸 말해야 한다.*

---

### `confess_yuna_yes_1`
- 배경: `yuna_hideout.png`
- 다음: `confess_yuna_yes_2`

- 캐릭터: `yuna_normal.png`
**{name}**: ‹빈›

---

### `confess_yuna_yes_2`
- 배경: `yuna_hideout.png`
- 다음: `confess_yuna_yes_3`

- 캐릭터: `yuna_normal.png`
**{name}**: ‹빈›

---

### `confess_yuna_yes_3`
- 배경: `yuna_hideout.png`
- 다음: `confess_yuna_yes_3_ins`

- 캐릭터: `yuna_normal.png`
**{name}**: 유나. 처음에 네가 말 안 하는 게 벽인 줄 알았어. 근데 아니더라.

---

### `confess_yuna_yes_3_ins`
- 배경: `yuna_hideout.png`
- 다음: `confess_yuna_yes_4`

- 캐릭터: `yuna_normal.png`
**{name}**: 너는 — 말 대신 옆에 앉아주는 사람이었어.

---

### `confess_yuna_yes_4`
- 배경: `yuna_hideout.png`
- 다음: `confess_yuna_yes_5`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나 앞에서는 긴 말이 필요 없다. 이 사람은 행간을 읽는 사람이니까.*

---

### `confess_yuna_yes_5`
- 배경: `yuna_hideout.png`
- 다음: `confess_yuna_yes_6`

- 캐릭터: `yuna_normal.png`
**{name}**: 너는 — 말 대신 옆에 앉아주는 사람이었어. 그 침묵이 누구의 말보다 따뜻했어.

---

### `confess_yuna_yes_6`
- 배경: `yuna_hideout.png`
- 다음: `confess_yuna_yes_6_ins`

- 캐릭터: `yuna_shy.png`
**{name}**: 좋아해.

---

### `confess_yuna_yes_6_ins`
- 배경: `yuna_hideout.png`
- 다음: `confess_yuna_yes_7`

- 캐릭터: `yuna_shy.png`
**{name}**: *이 방에서 제일 긴 문장을 내가 했다. — 유나의 영역에서.*

---

### `confess_yuna_yes_7`
- 배경: `yuna_hideout.png`
- 다음: `confess_yuna_yes_8`

- 캐릭터: `yuna_shy.png`
**{name}**: ‹빈›

---

### `confess_yuna_yes_8`
- 배경: `yuna_hideout.png`
- 다음: `confess_yuna_yes_8_ins`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나의 무표정이 갈라져 있다. 나른한 목소리가 사라지고, 아주 작은 — 거의 안 들리는 목소리로. 옷소매를 꽉 쥔다.*

---

### `confess_yuna_yes_8_ins`
- 배경: `yuna_hideout.png`
- 다음: `confess_yuna_yes_8_ins2`

- 캐릭터: `yuna_shy.png`
**{name}**: *옷소매를 꽉 쥔다.*

---

### `confess_yuna_yes_8_ins2`
- 배경: `yuna_hideout.png`
- 다음: `confess_yuna_yes_9`

- 캐릭터: `yuna_normal.png`
**유나**: ...가지 마. 갑자기 사라지면 싫어.

---

### `confess_yuna_yes_9`
- 배경: `yuna_hideout.png`
- 플래그: `day4_confession_accepted`, `isDating_Yuna`
- 다음: `confess_yuna_yes_9_ins`

- 캐릭터: `yuna_shy.png`
**유나**: ...가지 마. 이번엔 가지 마.

---

### `confess_yuna_yes_9_ins`
- 배경: `yuna_hideout.png`
- 다음: `day4_night_start`

- 캐릭터: `yuna_shy.png`
**{name}**: *'이번엔'. — 전에 떠난 사람이 있었다. 유나는 다시 그 상처를 꺼내면서도, 나를 잡고 있다.*

---

### `confess_yuna_no_1`
- 배경: `yuna_hideout.png`
- 다음: `confess_yuna_no_2`

- 캐릭터: `yuna_normal.png`
**{name}**: ...여기 진짜 좋다.

---

### `confess_yuna_no_2`
- 배경: `yuna_hideout.png`
- 다음: `confess_yuna_no_3`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나는 행간을 읽는 사람이다. 이 말이 도망이라는 걸 알고 있을 거다.*

---

### `confess_yuna_no_3`
- 배경: `yuna_hideout.png`
- 다음: `confess_yuna_no_4`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 책을 집어든다. 표지를 보고 있지만 읽고 있지 않다.*

---

### `confess_yuna_no_4`
- 배경: `yuna_hideout.png`
- 플래그: `day4_waited`
- 다음: `confess_yuna_no_4_ins`

- 캐릭터: `yuna_sad.png`
**유나**: ...결말은 아직이야.

---

### `confess_yuna_no_4_ins`
- 배경: `yuna_hideout.png`
- 다음: `day4_night_start`

- 캐릭터: `yuna_sad.png`
**{name}**: *세 걸음 뒤에서 돌아봤다. 유나도 책 너머로 이쪽을 보고 있었다.*

---

### `confess_dain_1`
- 배경: `gym.png`
- BGM: `confession.mp3`
- 다음: `confess_dain_2`

- 캐릭터: `dain_normal.png`
**{name}**: *데이트가 끝나가고 있다. 다인이 학교 쪽으로 뛰어간다.*

---

### `confess_dain_2`
- 배경: `gym.png`
- 분기:
  - [`chose_dain_lunch`] → `confess_dain_3`
  - [기본] → `confess_dain_3b`

- 캐릭터: `dain_normal.png`
**다인**: 마지막! 한 군데만 더 가자!!

---

### `confess_dain_3`
- 배경: `gym.png`
- 다음: `confess_dain_4`

- 캐릭터: `dain_normal.png`
**{name}**: *체육관. 비어 있다. 석양이 창문 사이로 코트를 물들이고 있다. Day 1에서 처음 같이 왔던 바로 그 장소.*

---

### `confess_dain_3b`
- 배경: `gym.png`
- 다음: `confess_dain_4`

- 캐릭터: `dain_normal.png`
**{name}**: *체육관. 비어 있다. 석양이 창문 사이로 코트를 물들이고 있다. 며칠 사이에 수많은 추억이 쌓인 장소.*

---

### `confess_dain_4`
- 배경: `gym.png`
- 다음: `confess_dain_5`

- 캐릭터: `dain_normal.png`
**{name}**: *다인이 공을 하나 들고 있다. 아무렇지 않게. — 근데 손가락이 하얗다. 꽉 쥐고 있다.*

---

### `confess_dain_5`
- 배경: `gym.png`
- 다음: `confess_dain_choice`

- 캐릭터: `dain_normal.png`
**{name}**: ‹빈›

---

### `confess_dain_choice`
- 배경: `gym.png`
- 선택지:
  1. "다인아. 공 내려놔." → `confess_dain_yes_1` | 플래그: `confessed_dain`
  2. "...한 판 더 할까?" → `confess_dain_no_1` | 플래그: `postponed_dain`

- 캐릭터: `dain_normal.png`
**{name}**: *체육관 바닥이 흔들리는 것 같다. — 이 사람의 느낌표 뒤에 숨은 떨림을, 나는 안다.*

---

### `confess_dain_yes_1`
- 배경: `gym.png`
- 다음: `confess_dain_yes_2`

- 캐릭터: `dain_normal.png`
**{name}**: ‹빈›

---

### `confess_dain_yes_2`
- 배경: `gym.png`
- 다음: `confess_dain_yes_3`

- 캐릭터: `dain_normal.png`
**{name}**: ‹빈›

---

### `confess_dain_yes_3`
- 배경: `gym.png`
- 다음: `confess_dain_yes_3_ins`

- 캐릭터: `dain_normal.png`
**{name}**: 다인아. 나 — 너한테 할 말이 있어.

---

### `confess_dain_yes_3_ins`
- 배경: `gym.png`
- 다음: `confess_dain_yes_4`

- 캐릭터: `dain_normal.png`
**{name}**: 그 눈이 나를 안 볼 때 — 좀 답답해.

---

### `confess_dain_yes_4`
- 배경: `gym.png`
- 다음: `confess_dain_yes_5`

- 캐릭터: `dain_normal.png`
**{name}**: *가위바위보 고백도 아니고. 근데 이게 나한테는 전부다.*

---

### `confess_dain_yes_5`
- 배경: `gym.png`
- 다음: `confess_dain_yes_6`

- 캐릭터: `dain_normal.png`
**{name}**: 그래서 자꾸 너한테 가게 돼.

---

### `confess_dain_yes_6`
- 배경: `gym.png`
- 다음: `confess_dain_yes_7`

- 캐릭터: `dain_normal.png`
**{name}**: 좋아해.

---

### `confess_dain_yes_7`
- 배경: `gym.png`
- 다음: `confess_dain_yes_8`

- 캐릭터: `dain_shy.png`
**{name}**: ‹빈›

---

### `confess_dain_yes_8`
- 배경: `gym.png`
- 다음: `confess_dain_yes_8_ins`

- 캐릭터: `dain_shy.png`
**{name}**: *다인이 멈춰 있다. 에너지가 사라졌다. — 그리고 눈이 천천히 차오른다. 두 손으로 얼굴을 푹 가려버린다. 목덜미까지 달아올라 있다.*

---

### `confess_dain_yes_8_ins`
- 배경: `gym.png`
- 다음: `confess_dain_yes_9`

- 캐릭터: `dain_shy.png`
**{name}**: *두 손으로 얼굴을 가린다. 손가락 사이로 빨간 볼이 보인다.*

---

### `confess_dain_yes_9`
- 배경: `gym.png`
- 다음: `confess_dain_yes_9_ins`

- 캐릭터: `dain_shy.png`
**다인**: ...잠깐. 숨차 — 나 지금 울 것 같은데 — 왜 울어, 기쁜 건데 —

---

### `confess_dain_yes_9_ins`
- 배경: `gym.png`
- 다음: `confess_dain_yes_10`

- 캐릭터: `dain_shy.png`
**{name}**: *손을 내리고 웃는다. 눈물이 흐르고 있다.*

---

### `confess_dain_yes_10`
- 배경: `gym.png`
- 플래그: `day4_confession_accepted`, `isDating_Dain`
- 다음: `confess_dain_yes_10_ins`

- 캐릭터: `dain_shy.png`
**다인**: 나도 좋아해. 엄청.

---

### `confess_dain_yes_10_ins`
- 배경: `gym.png`
- 다음: `day4_night_start`

- 캐릭터: `dain_laugh.png`
**{name}**: *'엄청'. — 다인은 늘 이렇다. 짧고 솔직하다. 그래서 믿긴다.*

---

### `confess_dain_no_1`
- 배경: `gym.png`
- 다음: `confess_dain_no_2`

- 캐릭터: `dain_normal.png`
**{name}**: ...한 판 더 할까?

---

### `confess_dain_no_2`
- 배경: `gym.png`
- 다음: `confess_dain_no_3`

- 캐릭터: `dain_normal.png`
**{name}**: *토스를 올려주는 건 되는데, 세 글자는 안 된다. 한심하다.*

---

### `confess_dain_no_3`
- 배경: `gym.png`
- 다음: `confess_dain_no_4`

- 캐릭터: `dain_normal.png`
**{name}**: *다인이 배구공을 튀긴다. 한 번. 두 번. — 세 번째에 멈춘다.*

---

### `confess_dain_no_4`
- 배경: `gym.png`
- 플래그: `day4_waited`
- 다음: `confess_dain_no_4_ins`

- 캐릭터: `dain_sad.png`
**다인**: ...다음에는 도망치지 마.

---

### `confess_dain_no_4_ins`
- 배경: `gym.png`
- 다음: `confess_dain_no_4_ins2`

- 캐릭터: `dain_sad.png`
**{name}**: *느낌표가 없다. — 진심이다.*

---

### `confess_dain_no_4_ins2`
- 배경: `room_my.png`
- 다음: `confess_dain_no_4_ins3`

- 캐릭터: `없음`
**{name}**: *--- 이른 아침 ---*

---

### `confess_dain_no_4_ins3`
- 배경: `street.png`
- 다음: `confess_dain_no_4_ins4`

- 캐릭터: `없음`
**{name}**: *주말 이른 아침. 등교 전 카페에 가려다 — 학교 앞을 지나는데, 빈 교실에 불이 켜져 있다.*

---

### `confess_dain_no_4_ins4`
- 배경: `room_school.png`
- 다음: `confess_dain_no_4_ins5`

- 캐릭터: `없음`
**{name}**: *담임이 창가에 서 있다. 손에 원고 뭉치를 들고 있다. 아침 햇살이 종이 위를 물들이고 있다.*

---

### `confess_dain_no_4_ins5`
- 배경: `room_school.png`
- 다음: `confess_dain_no_4_ins6`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...와줬네.

---

### `confess_dain_no_4_ins6`
- 배경: `room_school.png`
- 다음: `confess_dain_no_4_ins7`

- 캐릭터: `teacher_normal.png`
**{name}**: 부르셨잖아요.

---

### `confess_dain_no_4_ins7`
- 배경: `room_school.png`
- 다음: `confess_dain_no_4_ins8`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 부른 적 없어. *잠깐 멈추고* ...근데 올 줄 알았어.

---

### `confess_dain_no_4_ins8`
- 배경: `room_school.png`
- 다음: `confess_dain_no_4_ins9`

- 캐릭터: `teacher_normal.png`
**{name}**: *이 사람은 부르지 않고 기다리는 사람이다. — 그게 7년간 원고를 서랍에 넣어두었던 이유이기도 하다.*

---

### `confess_dain_no_4_ins9`
- 배경: `room_school.png`
- 다음: `confess_dain_no_4_ins10`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 원고를 내민다. 표지에 제목이 적혀 있다. — 처음 보는 제목이다.*

---

### `confess_dain_no_4_ins10`
- 배경: `room_school.png`
- 다음: `confess_dain_no_4_ins11`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 첫 번째 독자한테... 마지막 장을 보여주고 싶었어.

---

### `confess_dain_no_4_ins11`
- 배경: `room_school.png`
- 다음: `confess_dain_no_4_ins12`

- 캐릭터: `teacher_normal.png`
**{name}**: 마지막 장이요?

---

### `confess_dain_no_4_ins12`
- 배경: `room_school.png`
- 다음: `confess_dain_no_4_ins13`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 7년 걸렸어. — 쓰는 데 3년, 끝내는 데 4년.

---

### `confess_dain_no_4_ins13`
- 배경: `room_school.png`
- 다음: `confess_dain_no_4_ins14`

- 캐릭터: `teacher_normal.png`
**{name}**: *끝내는 데 4년. — 시작보다 끝이 어려운 사람이다. 글도, 감정도.*

---

### `confess_dain_no_4_ins14`
- 배경: `room_school.png`
- 다음: `confess_dain_no_4_ins15`

- 캐릭터: `teacher_normal.png`
**{name}**: *원고를 받는다. 읽기 시작한다. — 담임이 창밖을 본다. 아침 햇살. 손끝이 미세하게 떨린다.*

---

### `confess_dain_no_4_ins15`
- 배경: `room_school.png`
- 다음: `confess_dain_no_4_ins16`

- 캐릭터: `teacher_normal.png`
**{name}**: *읽는 동안 담임은 한 마디도 하지 않는다. 창밖만 보고 있다. — 근데 유리창에 비친 눈이 나를 향해 있다.*

---

### `confess_dain_no_4_ins16`
- 배경: `room_school.png`
- 다음: `confess_dain_no_4_ins17`

- 캐릭터: `teacher_normal.png`
**{name}**: *마지막 장. — 한 문장으로 끝난다. 그 문장을 읽는 순간, 이 원고가 왜 7년 걸렸는지 알 것 같다.*

---

### `confess_dain_no_4_ins17`
- 배경: `room_school.png`
- 다음: `confess_dain_no_4_ins18`

- 캐릭터: `teacher_normal.png`
**{name}**: ...좋아요. 이 결말.

---

### `confess_dain_no_4_ins18`
- 배경: `room_school.png`
- 다음: `confess_dain_no_4_ins19`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임의 어깨에서 힘이 빠진다. 아주 천천히.*

---

### `confess_dain_no_4_ins19`
- 배경: `room_school.png`
- 다음: `confess_dain_no_4_ins20`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...그래?

---

### `confess_dain_no_4_ins20`
- 배경: `room_school.png`
- 다음: `confess_dain_no_4_ins21`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...그래.

---

### `confess_dain_no_4_ins21`
- 배경: `room_school.png`
- 다음: `confess_dain_no_4_ins22`

- 캐릭터: `teacher_normal.png`
**{name}**: *두 번째 '그래'에 목소리가 갈라졌다. — 첫 번째 독자의 첫 번째 감상. 7년을 기다린 한마디.*

---

### `confess_dain_no_4_ins22`
- 배경: `room_school.png`
- 분기:
  - [`nurse_day4_afterschool`] → `confess_dain_no_4_nurse_skip`
  - [기본] → `confess_dain_no_4_ins23`

- 캐릭터: `없음`
**{name}**: *--- 아침 ---*

---

### `confess_dain_no_4_ins23`
- 배경: `school_hallway.png`
- 다음: `confess_dain_no_4_ins24`

- 캐릭터: `없음`
**{name}**: *주말 아침. 습관처럼 보건실로 향한다. — 습관이 된 건 언제부터였지.*

---

### `confess_dain_no_4_ins24`
- 배경: `nurse_room.png`
- 다음: `confess_dain_no_4_ins25`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건실 문을 열었다. 보건선생님이 의자에 앉아 있다. 흰 가운 차림. — 근데 평소와 다르다. 장난기가 없다.*

---

### `confess_dain_no_4_ins25`
- 배경: `nurse_room.png`
- 다음: `confess_dain_no_4_ins26`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 어, 왔어.

---

### `confess_dain_no_4_ins26`
- 배경: `nurse_room.png`
- 다음: `confess_dain_no_4_ins27`

- 캐릭터: `nurse_normal.png`
**{name}**: *'어, 왔어'가 평소보다 반 톤 낮다. — 이 사람의 감정은 톤으로 읽어야 한다.*

---

### `confess_dain_no_4_ins27`
- 배경: `nurse_room.png`
- 다음: `confess_dain_no_4_ins28`

- 캐릭터: `nurse_normal.png`
**{name}**: 마지막 상담이에요?

---

### `confess_dain_no_4_ins28`
- 배경: `nurse_room.png`
- 다음: `confess_dain_no_4_ins29`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 상담이라... *의자를 돌리며* 맞아. 마지막 상담.

---

### `confess_dain_no_4_ins29`
- 배경: `nurse_room.png`
- 다음: `confess_dain_no_4_ins30`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 책상 위 서류를 정리하는 척하지만 — 같은 종이를 세 번째 넘기고 있다.*

---

### `confess_dain_no_4_ins30`
- 배경: `nurse_room.png`
- 다음: `confess_dain_no_4_ins31`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 이런 거 물어봐도 돼?

---

### `confess_dain_no_4_ins31`
- 배경: `nurse_room.png`
- 다음: `confess_dain_no_4_ins32`

- 캐릭터: `nurse_normal.png`
**{name}**: 뭔데요?

---

### `confess_dain_no_4_ins32`
- 배경: `nurse_room.png`
- 다음: `confess_dain_no_4_ins33`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 안경을 만진다. 안경 너머로 보이는 눈이 생각보다 크다. 장난기 뒤에 숨어 있던 눈.*

---

### `confess_dain_no_4_ins33`
- 배경: `nurse_room.png`
- 다음: `confess_dain_no_4_ins34`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...졸업하고도 보건실에 올 거야?

---

### `confess_dain_no_4_ins34`
- 배경: `nurse_room.png`
- 다음: `confess_dain_no_4_ins35`

- 캐릭터: `nurse_normal.png`
**{name}**: *질문이 아니다. — 대답을 이미 두려워하고 있는 얼굴이다.*

---

### `confess_dain_no_4_ins35`
- 배경: `nurse_room.png`
- 다음: `confess_dain_no_4_ins36`

- 캐릭터: `nurse_normal.png`
**{name}**: *눈을 마주친다. 평소 장난기가 사라진 진지한 얼굴로. — 이 사람이 이렇게 무방비한 건 처음이다.*

---

### `confess_dain_no_4_ins36`
- 배경: `nurse_room.png`
- 다음: `confess_dain_no_4_ins37`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 아, 아니야. 이상한 질문이지? 선생님이 학생한테 이런 거 물으면 안 —

---

### `confess_dain_no_4_ins37`
- 배경: `nurse_room.png`
- 다음: `confess_dain_no_4_ins38`

- 캐릭터: `nurse_normal.png`
**{name}**: 올게요.

---

### `confess_dain_no_4_ins38`
- 배경: `nurse_room.png`
- 다음: `confess_dain_no_4_ins39`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 멈춘다. 안경을 만지작거리던 손이 멈춘다.*

---

### `confess_dain_no_4_ins39`
- 배경: `nurse_room.png`
- 다음: `confess_dain_no_4_ins40`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...진짜로?

---

### `confess_dain_no_4_ins40`
- 배경: `nurse_room.png`
- 다음: `confess_dain_no_4_ins41`

- 캐릭터: `nurse_normal.png`
**{name}**: *'진짜로'. — 이 사람의 진심 확인 단어. 오늘은 내가 먼저 들었다.*

---

### `confess_dain_no_4_ins41`
- 배경: `nurse_room.png`
- 다음: `confess_dain_no_4_ins42`

- 캐릭터: `nurse_normal.png`
**{name}**: 진짜로.

---

### `confess_dain_no_4_ins42`
- 배경: `nurse_room.png`
- 다음: `confess_dain_no_4_ins43`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님의 안경 너머로 눈이 촉촉하다. — 지금 울고 있는 건가. 마음이 무너진다.*

---

### `confess_dain_no_4_ins43`
- 배경: `nurse_room.png`
- 다음: `confess_dain_no_4_ins44`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *다시 밝은 톤으로, 하지만 목소리가 떨리며* 자~ 그럼 마지막 상담 끝! 다음 내원일은 — 졸업 후로 잡아둘게~

---

### `confess_dain_no_4_ins44`
- 배경: `nurse_room.png`
- 다음: `confess_dain_no_4_nurse_skip`

- 캐릭터: `nurse_normal.png`
**{name}**: *장난기가 돌아왔다. — 근데 웃는 눈 아래로 뭔가 흐른 자국이 있다.*

---

### `confess_dain_no_4_nurse_skip`
- 배경: `nurse_room.png`
- 다음: `confess_dain_no_4_ins45`

- 캐릭터: `없음`
**{name}**: *아침에 보건실에서 마지막 상담을 했다. — 선생님의 촉촉한 눈이 아직 머릿속에 남아 있다.*

---

### `confess_dain_no_4_ins45`
- 배경: `room_my.png`
- 다음: `confess_dain_no_4_ins46`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: *오늘 바람 좋았어*

---

### `confess_dain_no_4_ins46`
- 배경: `room_my.png`
- 다음: `confess_dain_no_4_ins47`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: *...다음에는 다른 말 기대할게*

---

### `confess_dain_no_4_ins47`
- 배경: `room_my.png`
- 다음: `confess_dain_no_4_ins48`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: *야 오늘 재밌었다ㅋㅋ*

---

### `confess_dain_no_4_ins48`
- 배경: `room_my.png`
- 다음: `confess_dain_no_4_ins49`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: *...근데 뭔가 빠진 거 없어?*

---

### `confess_dain_no_4_ins49`
- 배경: `room_my.png`
- 다음: `confess_dain_no_4_ins50`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *...오늘*

---

### `confess_dain_no_4_ins50`
- 배경: `room_my.png`
- 다음: `day4_night_start`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *괜찮았어*

---

## 4일차 — 밤 `day4_4_night`

### `day4_night_start`
- 배경: `room_my.png`
- BGM: `night2.mp3`
- 다음: `day4_night_branch`

- 캐릭터: `없음`
**{name}**: *집에 돌아왔다. 방에 누우니 오늘의 기억이 필름처럼 스쳐 지나간다.*

---

### `day4_night_branch`
- 배경: `room_my.png`
- 분기:
  - [`day4_waited`] → `day4_night_regret`
  - [`route_seoyeon`] → `wall_seo_1`
  - [`route_dain`] → `wall_dain_1`
  - [`route_yuna`] → `wall_yuna_1`
  - [`homeroom_route_unlocked`] → `night_homeroom_msg_1`
  - [`nurse_route_unlocked`] → `night_nurse_msg_1`
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
**{name}**: *서연이 먼저 입을 열었다. 자발적으로. — 처음이다.*

---

### `wall_seo_pre_low_1`
- 배경: `room_my.png`
- 다음: `wall_seo_pre_low_1b`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: *서연이 침묵한다. 내가 먼저 말을 꺼내야 한다.*

---

### `wall_seo_pre_low_1b`
- 배경: `room_my.png`
- 다음: `wall_seo_pre_low_2`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: *문자를 보냈다. '서연아, 지금 괜찮아?' — 1분. 읽음 표시가 뜬다. 답이 없다. 그리고 — 전화가 온다.*

---

### `wall_seo_pre_low_2`
- 배경: `room_my.png`
- 다음: `wall_seo_2`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: ...문자 봤어. 지금 나올 수 있어? 공원. — 미안, 갑자기.

---

### `wall_seo_2`
- 배경: `room_my.png`
- 다음: `wall_seo_to_park`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: ...지금 나올 수 있어? 공원. — 미안, 갑자기.

---

### `wall_seo_to_park`
- 배경: `park.png`
- 다음: `wall_seo_3`

- 캐릭터: `seyoun_normal.png`
**{name}**: *집을 나서 공원으로 향했다.*

---

### `wall_seo_3`
- 배경: `park.png`
- 다음: `wall_seo_4`

- 캐릭터: `seyoun_sad.png`
**{name}**: *공원 벤치에 서연이 앉아 있다. 눈이 빨갛다.*

---

### `wall_seo_4`
- 배경: `park.png`
- 다음: `wall_seo_5`

- 캐릭터: `seyoun_sad.png`
**{name}**: 서연. 무슨 일이야?

---

### `wall_seo_5`
- 배경: `park.png`
- 다음: `wall_seo_6`

- 캐릭터: `seyoun_sad.png`
**서연**: ...앉아.

---

### `wall_seo_6`
- 배경: `park.png`
- 다음: `wall_seo_7`

- 캐릭터: `seyoun_sad.png`
**{name}**: *옆에 앉는다. 서연이 앞을 보고 있다. 한참을.*

---

### `wall_seo_7`
- 배경: `park.png`
- 다음: `wall_seo_7_ins`

- 캐릭터: `seyoun_sad.png`
**서연**: 오늘 엄마한테 전화 왔어.

---

### `wall_seo_7_ins`
- 배경: `park.png`
- 다음: `wall_seo_8`

- 캐릭터: `seyoun_sad.png`
**{name}**: ......

---

### `wall_seo_8`
- 배경: `park.png`
- 다음: `wall_seo_9`

- 캐릭터: `seyoun_sad.png`
**서연**: 아빠랑 또 싸웠대.

---

### `wall_seo_9`
- 배경: `park.png`
- 다음: `wall_seo_9_ins`

- 캐릭터: `seyoun_sad.png`
**{name}**: *서연이 웃는다. — 평소의 여유로운 웃음이 아니다. 자기 보호를 위한 웃음.*

---

### `wall_seo_9_ins`
- 배경: `park.png`
- 다음: `wall_seo_9_ins2`

- 캐릭터: `seyoun_sad.png`
**서연**: 우리 집 겉으로는 멀쩡해 보이지? 넓은 집, 좋은 차, 학생회장 딸.

---

### `wall_seo_9_ins2`
- 배경: `park.png`
- 다음: `wall_seo_9_ins3`

- 캐릭터: `seyoun_sad.png`
**서연**: 근데 엄마 아빠는 1년째 같은 지붕 아래서 남남이야. 이혼 서류만 안 냈을 뿐.

---

### `wall_seo_9_ins3`
- 배경: `park.png`
- 다음: `wall_seo_10`

- 캐릭터: `seyoun_sad.png`
**{name}**: ......

---

### `wall_seo_10`
- 배경: `park.png`
- 다음: `wall_seo_11`

- 캐릭터: `seyoun_sad.png`
**서연**: 그래서 나도 연기하게 됐어. 집에서도, 학교에서도. — 웃는 게 제일 쉬운 가면이더라.

---

### `wall_seo_11`
- 배경: `park.png`
- 다음: `wall_seo_11_ins`

- 캐릭터: `seyoun_cry.png`
**서연**: 엄마가 그랬어. '너라도 완벽해야 이 집이 유지된다'고.

---

### `wall_seo_11_ins`
- 배경: `park.png`
- 다음: `wall_seo_12`

- 캐릭터: `seyoun_cry.png`
**{name}**: *서연이 입을 다문다. 삼키듯이.*

---

### `wall_seo_12`
- 배경: `park.png`
- 다음: `wall_seo_13`

- 캐릭터: `seyoun_cry.png`
**서연**: 열 살 때. — 열 살짜리한테 그런 말 하는 거야.

---

### `wall_seo_13`
- 배경: `park.png`
- 다음: `wall_seo_14`

- 캐릭터: `seyoun_cry.png`
**서연**: 그때부터 거울 보면서 웃는 연습했어. 입꼬리 올리는 각도, 눈 찡긋하는 타이밍.

---

### `wall_seo_14`
- 배경: `park.png`
- 다음: `wall_seo_14_ins`

- 캐릭터: `seyoun_cry.png`
**서연**: 칭찬받을 때마다 생각했어. '이 웃음도 연습한 건데, 진짜 나를 본 사람이 있긴 한 걸까.'

---

### `wall_seo_14_ins`
- 배경: `park.png`
- 다음: `wall_seo_14_ins2`

- 캐릭터: `seyoun_sad.png`
**서연**: ...근데 너는.

---

### `wall_seo_14_ins2`
- 배경: `park.png`
- 다음: `wall_seo_14_ins3`

- 캐릭터: `seyoun_cry.png`
**{name}**: *서연이 말을 멈췄다. 손이 무릎 위에서 꽉 쥐어져 있다.*

---

### `wall_seo_14_ins3`
- 배경: `park.png`
- 다음: `wall_seo_14_ins4`

- 캐릭터: `seyoun_cry.png`
**{name}**: *— 그리고 천천히, 아주 천천히, 완벽하게 유지하고 있던 표정이 무너졌다. 서연의 손끝이 떨린다.*

---

### `wall_seo_14_ins4`
- 배경: `park.png`
- 다음: `wall_seo_15`

- 캐릭터: `seyoun_cry.png`
**{name}**: *눈에서 물이 흘러내린다. 소리 없이. — 서연이 울고 있다.*

---

### `wall_seo_15`
- 배경: `park.png`
- 다음: `wall_seo_hug_choice`

- 캐릭터: `seyoun_cry.png`
**{name}**: *서연이 올려다본다. 무너진 표정을 이제는 숨길 생각이 없는 얼굴이다.*

---

### `wall_seo_hug_choice`
- 배경: `park.png`
- 선택지:
  1. "안아준다" → `wall_seo_hug_1` | Seoyeon +14
  2. "새끼손가락을 내민다" → `wall_seo_pinky_1` | Seoyeon +14

- 캐릭터: `seyoun_cry.png`
**{name}**: *서연이 울고 있다. 처음 보는 모습이다.*

---

### `wall_seo_hug_1`
- 배경: `park.png`
- 다음: `wall_seo_hug_2`

- 캐릭터: `seyoun_cry.png`
**{name}**: *서연을 안았다.*

---

### `wall_seo_hug_2`
- 배경: `park.png`
- 다음: `wall_seo_hug_2_ins`

- 캐릭터: `seyoun_cry.png`
**{name}**: *서연이 내 가슴에 얼굴을 묻었다. 교복 셔츠가 젖는다.*

---

### `wall_seo_hug_2_ins`
- 배경: `park.png`
- 다음: `wall_seo_hug_2_ins2`

- 캐릭터: `seyoun_cry.png`
**서연**: ...누구 앞에서 우는 거, 초등학교 이후로 처음이야.

---

### `wall_seo_hug_2_ins2`
- 배경: `park.png`
- 다음: `wall_seo_hug_3`

- 캐릭터: `seyoun_cry.png`
**서연**: 8년. — 그동안 혼자 화장실에서만 울었거든.

---

### `wall_seo_hug_3`
- 배경: `park.png`
- 다음: `wall_seo_line_choice`

- 캐릭터: `seyoun_cry.png`
**서연**: 엄마가 그랬어. '너라도 완벽해야 이 집이 유지된다'고.

---

### `wall_seo_pinky_1`
- 배경: `park.png`
- 다음: `wall_seo_pinky_2`

- 캐릭터: `seyoun_cry.png`
**{name}**: *새끼손가락을 내민다.*

---

### `wall_seo_pinky_2`
- 배경: `park.png`
- 다음: `wall_seo_pinky_3`

- 캐릭터: `seyoun_cry.png`
**{name}**: 울고 싶으면 나한테 연락해. 안 물어볼게.

---

### `wall_seo_pinky_3`
- 배경: `park.png`
- 다음: `wall_seo_pinky_4`

- 캐릭터: `seyoun_cry.png`
**{name}**: *서연이 새끼손가락을 바라본다.*

---

### `wall_seo_pinky_4`
- 배경: `park.png`
- 다음: `wall_seo_pinky_5`

- 캐릭터: `seyoun_cry.png`
**서연**: ...왜 이래. 왜 이렇게 — 쉽게 약속해.

---

### `wall_seo_pinky_5`
- 배경: `park.png`
- 다음: `wall_seo_pinky_5_ins`

- 캐릭터: `seyoun_cry.png`
**서연**: 사람들이 다 그렇게 말하고 사라지는 건데.

---

### `wall_seo_pinky_5_ins`
- 배경: `park.png`
- 다음: `wall_seo_line_choice`

- 캐릭터: `seyoun_cry.png`
**{name}**: *Day 1의 새끼손가락. Day 4의 새끼손가락. — 같은 손가락인데, 무게가 완전히 다르다.*

---

### `wall_seo_line_choice`
- 배경: `park.png`
- 선택지:
  1. "완벽 안 해도 돼. 지금 이 서연이 더 좋아." → `wall_seo_line_react_1` | Seoyeon +10
  2. "학생회장 서연 말고, 그냥 서연이가 내 여자친구인 거잖아." → `wall_seo_line_react_2` | Seoyeon +10
  3. "솔직히 다 잘하는 줄만 알았어. 이런 모습도 보여줘서 고마워." → `wall_seo_line_react_3` | Seoyeon +6

- 캐릭터: `seyoun_cry.png`
**{name}**: *서연이 눈물을 닦으며 떨리는 눈으로 올려다보고 있다.*

---

### `wall_seo_line_react_1`
- 배경: `park.png`
- 다음: `wall_seo_after_line`

- 캐릭터: `seyoun_cry.png`
**서연**: ...진짜?

---

### `wall_seo_line_react_2`
- 배경: `park.png`
- 다음: `wall_seo_after_line`

- 캐릭터: `seyoun_cry.png`
**서연**: ...여자친구?

---

### `wall_seo_line_react_3`
- 배경: `park.png`
- 다음: `wall_seo_line_react_3_ins`

- 캐릭터: `seyoun_cry.png`
**서연**: ...고맙긴.

---

### `wall_seo_line_react_3_ins`
- 배경: `park.png`
- 다음: `wall_seo_after_line`

- 캐릭터: `seyoun_cry.png`
**{name}**: *서연이 눈물을 닦으며.*

---

### `wall_seo_after_line`
- 배경: `park.png`
- 다음: `wall_seo_after_line_2`

- 캐릭터: `seyoun_sad.png`
**서연**: 이래도 괜찮아?

---

### `wall_seo_after_line_2`
- 배경: `park.png`
- 다음: `wall_seo_after_line_3`

- 캐릭터: `seyoun_sad.png`
**서연**: 이 얼굴, 지금 엉망이지? 화장 번지고, 눈 붓고. — 이래도 괜찮아?

---

### `wall_seo_after_line_3`
- 배경: `park.png`
- 다음: `wall_seo_after_line_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: 괜찮아.

---

### `wall_seo_after_line_4`
- 배경: `park.png`
- 다음: `wall_seo_after_line_4_ins`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 웃는다. 입꼬리가 제멋대로다. — 화장이 번지고, 눈이 부었는데. 근데 눈을 뗄 수가 없다.*

---

### `wall_seo_after_line_4_ins`
- 배경: `park.png`
- 다음: `wall_seo_after_line_5`

- 캐릭터: `seyoun_normal.png`
**서연**: ...오늘 거울 안 봐도 되겠다.

---

### `wall_seo_after_line_5`
- 배경: `park.png`
- 플래그: `day4_seoyeon_wall_broken`
- 다음: `wall_seo_mention_1`

- 캐릭터: `seyoun_normal.png`
**서연**: 8년 만에 처음으로, 연습 안 한 얼굴이 괜찮은 것 같아.

---

### `wall_seo_mention_1`
- 배경: `park.png`
- 다음: `wall_seo_mention_2`

- 캐릭터: `seyoun_sad.png`
**서연**: ...다인이 요즘 힘들어 보여. 네가 원인인 거 알아?

---

### `wall_seo_mention_2`
- 배경: `park.png`
- 다음: `wall_seo_mention_3`

- 캐릭터: `seyoun_sad.png`
**서연**: 난 괜찮아. 내가 먼저 선택받았으니까. — 그래도 좀 걸리긴 해.

---

### `wall_seo_mention_3`
- 배경: `park.png`
- 다음: `wall_seo_skin_check`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 잠깐 먼 곳을 본다. — 그리고 다시 나를 본다. 눈이 단단하다.*

---

### `wall_seo_skin_check`
- 배경: `park.png`
- 호감분기: Seoyeon
  - [70+] → `wall_seo_skin70_1`
  - [60+] → `wall_seo_skin60_1`
  - [기본] → `wall_seo_glimpse_1`

- 캐릭터: `seyoun_normal.png`

<!-- i18n -->

---

### `wall_seo_skin70_1`
- 배경: `park.png`
- 다음: `wall_seo_skin70_2`

- 캐릭터: `seyoun_shy.png`
**{name}**: *서연이 새끼손가락을 먼저 건넨다. 거기서 멈추지 않는다. 손을 잡는다.*

---

### `wall_seo_skin70_2`
- 배경: `park.png`
- 다음: `wall_seo_skin70_3`

- 캐릭터: `seyoun_shy.png`
**{name}**: *이마에 입술을 댄다.*

---

### `wall_seo_skin70_3`
- 배경: `park.png`
- 플래그: `day4_skinship_seoyeon_70`
- 다음: `wall_seo_glimpse_1`

- 캐릭터: `seyoun_shy.png`
**서연**: ...이건 처음이야. 진짜로.

---

### `wall_seo_skin60_1`
- 배경: `park.png`
- 다음: `wall_seo_skin60_2`

- 캐릭터: `seyoun_shy.png`
**{name}**: *벤치에 나란히 앉았다. 서연이 슬쩍 어깨에 기대온다.*

---

### `wall_seo_skin60_2`
- 배경: `park.png`
- 플래그: `day4_skinship_seoyeon_60`
- 다음: `wall_seo_glimpse_1`

- 캐릭터: `seyoun_shy.png`
**서연**: ...조금만 더 이러고 있자.

---

### `wall_seo_glimpse_1`
- 배경: `school_back.png`
- 다음: `wall_seo_glimpse_1_ins`

- 캐릭터: `없음`
**{name}**: *서연을 집까지 바래다주고 돌아오는 길. — 학교 앞을 지나가는데.*

---

### `wall_seo_glimpse_1_ins`
- 배경: `school_back.png`
- 다음: `wall_seo_glimpse_2`

- 캐릭터: `없음`
**{name}**: *체육관 창문에 불이 켜져 있다. 비상등.*

---

### `wall_seo_glimpse_2`
- 배경: `school_back.png`
- 다음: `wall_seo_glimpse_3`

- 캐릭터: `dain_sad.png`
**{name}**: *체육관 창문에 불이 켜져 있다. 비상등. 누군가 혼자 공을 튀기고 있다. — 등번호가 희미하게 보인다. 다인이다.*

---

### `wall_seo_glimpse_3`
- 배경: `school_back.png`
- 다음: `wall_seo_glimpse_4`

- 캐릭터: `dain_sad.png`
**{name}**: *...밤 11시에 혼자 체육관에서? 오늘 나한테 연락은 없었는데.*

---

### `wall_seo_glimpse_4`
- 배경: `school_back.png`
- 다음: `day4_final`

- 캐릭터: `dain_sad.png`
**{name}**: *잠깐 멈췄다가 — 걸음을 옮겼다. 지금은 서연의 밤이니까. 근데 발이 무겁다.*

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
**{name}**: *다인이 평소와 다르게 조용하다. — 처음 보는 톤이다.*

---

### `wall_dain_pre_low_1`
- 배경: `room_my.png`
- 다음: `wall_dain_pre_low_2`

- 캐릭터: `dain_normal.png` @ 0.35
**{name}**: *다인이 억지로 웃는다.*

---

### `wall_dain_pre_low_2`
- 배경: `room_my.png`
- 다음: `wall_dain_2`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 하하, 오늘 재밌었지!

---

### `wall_dain_2`
- 배경: `room_my.png`
- 다음: `wall_dain_2_ins`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 야 지금 시간 돼?ㅋㅋ

---

### `wall_dain_2_ins`
- 배경: `room_my.png`
- 다음: `wall_dain_3`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: *학교 오면 안 되지??*

---

### `wall_dain_3`
- 배경: `room_my.png`
- 다음: `wall_dain_4`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 아 그냥 와ㅋㅋ 체육관 뒷문 열어놨음!

---

### `wall_dain_4`
- 배경: `gym.png`
- 다음: `wall_dain_5`

- 캐릭터: `dain_laugh.png`
**{name}**: *비상등만 켜진 어두운 체육관. 다인이 혼자 배구공을 튀기고 있다. 평소보다 더 힘껏 웃고 있다.*

---

### `wall_dain_5`
- 배경: `gym.png`
- 다음: `wall_dain_6`

- 캐릭터: `dain_laugh.png`
**다인**: 왔어?! 늦었잖아!!

---

### `wall_dain_6`
- 배경: `gym.png`
- 다음: `wall_dain_7`

- 캐릭터: `dain_laugh.png`
**{name}**: 밤에 학교에 왜 있어?

---

### `wall_dain_7`
- 배경: `gym.png`
- 다음: `wall_dain_7_ins`

- 캐릭터: `dain_laugh.png`
**다인**: 가끔 몰래 들어와! 연습하려고!!

---

### `wall_dain_7_ins`
- 배경: `gym.png`
- 다음: `wall_dain_8`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인이 배구공을 건넨다.*

---

### `wall_dain_8`
- 배경: `gym.png`
- 다음: `wall_dain_8_ins`

- 캐릭터: `dain_laugh.png`
**다인**: 토스 올려줘!! 한 번만!!

---

### `wall_dain_8_ins`
- 배경: `gym.png`
- 다음: `wall_dain_8_ins2`

- 캐릭터: `dain_laugh.png`
**{name}**: *토스를 올려준다. 다인이 뛰어올라 — 스파이크.*

---

### `wall_dain_8_ins2`
- 배경: `gym.png`
- 다음: `wall_dain_9`

- 캐릭터: `dain_laugh.png`
**{name}**: *착지하는 순간 — 오른쪽 무릎을 움켜잡고 쪼그려 앉는다.*

---

### `wall_dain_9`
- 배경: `gym.png`
- 다음: `wall_dain_10`

- 캐릭터: `dain_sad.png`
**{name}**: *심장이 철렁 내려앉는다.*

---

### `wall_dain_10`
- 배경: `gym.png`
- 다음: `wall_dain_11`

- 캐릭터: `dain_sad.png`
**다인**: 아 아냐!! 괜찮아!! 그냥 삐끗한 거야ㅋㅋ 별거 아...

---

### `wall_dain_11`
- 배경: `gym.png`
- 다음: `wall_dain_12`

- 캐릭터: `dain_sweat.png`
**{name}**: *무릎 잡은 손이 하얗게 질려 있다. — 별거 아닌 게 아니다.*

---

### `wall_dain_12`
- 배경: `gym.png`
- 다음: `wall_dain_12_ins`

- 캐릭터: `dain_sad.png`
**{name}**: 다인. 괜찮지 않잖아.

---

### `wall_dain_12_ins`
- 배경: `gym.png`
- 다음: `wall_dain_12_ins2`

- 캐릭터: `dain_normal.png`
**다인**: 괜찮다니까!! 진짜로!!

---

### `wall_dain_12_ins2`
- 배경: `gym.png`
- 다음: `wall_dain_13`

- 캐릭터: `dain_normal.png`
**{name}**: ......

---

### `wall_dain_13`
- 배경: `gym.png`
- 다음: `wall_dain_13_ins`

- 캐릭터: `dain_sad.png`
**{name}**: *아무 말 없이 옆에 앉는다. 다인이 입을 다문다. 한참의 침묵.*

---

### `wall_dain_13_ins`
- 배경: `gym.png`
- 다음: `wall_dain_14`

- 캐릭터: `dain_sad.png`
**{name}**: *한참의 침묵.*

---

### `wall_dain_14`
- 배경: `gym.png`
- 다음: `wall_dain_14_ins`

- 캐릭터: `dain_sad.png`
**다인**: ...전방 십자인대.

---

### `wall_dain_14_ins`
- 배경: `gym.png`
- 다음: `wall_dain_15`

- 캐릭터: `dain_sad.png`
**{name}**: *느낌표가 없다.*

---

### `wall_dain_15`
- 배경: `gym.png`
- 다음: `wall_dain_16`

- 캐릭터: `dain_sad.png`
**다인**: 작년 여름이야.

---

### `wall_dain_16`
- 배경: `gym.png`
- 다음: `wall_dain_16_ins`

- 캐릭터: `dain_sad.png`
**{name}**: *다인이 한 번도 안 해본 표정을 짓고 있다. 웃지 않는 다인.*

---

### `wall_dain_16_ins`
- 배경: `gym.png`
- 다음: `wall_dain_17`

- 캐릭터: `dain_sad.png`
**다인**: 수술했는데 담당 의료진이 — 되게 조심스럽게 말하더라.

---

### `wall_dain_17`
- 배경: `gym.png`
- 다음: `wall_dain_18`

- 캐릭터: `dain_sad.png`
**다인**: 수술했는데 담당 의료진이 — 되게 조심스럽게 말하더라. '일상은 괜찮은데, 이전처럼 뛰는 건...' — 뒤에 뭐라고 했는지 기억 안 나. 그 뒤로 소리가 안 들렸거든.

---

### `wall_dain_18`
- 배경: `gym.png`
- 다음: `wall_dain_18_ins`

- 캐릭터: `dain_sad.png`
**다인**: 병원에서 나오는데 엄마가 울고 있었어. — 나는 못 울었어. 아직 실감이 안 났으니까.

---

### `wall_dain_18_ins`
- 배경: `gym.png`
- 다음: `wall_dain_18_ins2`

- 캐릭터: `dain_sad.png`
**다인**: 실감난 건 — 체육관 사물함 정리할 때였어.

---

### `wall_dain_18_ins2`
- 배경: `gym.png`
- 다음: `wall_dain_18_ins3`

- 캐릭터: `dain_sad.png`
**{name}**: ......

---

### `wall_dain_18_ins3`
- 배경: `gym.png`
- 다음: `wall_dain_19`

- 캐릭터: `dain_sad.png`
**다인**: 아무한테도 말 안 했어. 부모님한테도.

---

### `wall_dain_19`
- 배경: `gym.png`
- 다음: `wall_dain_19_ins`

- 캐릭터: `dain_sad.png`
**다인**: 아무한테도 말 안 했어. 부모님한테도. '다인이가 안 뛰면 다인이가 아니지!' — 그 말 듣고 싶지 않아서.

---

### `wall_dain_19_ins`
- 배경: `gym.png`
- 다음: `wall_dain_20`

- 캐릭터: `dain_sad.png`
**{name}**: *다인이 가슴을 짚는다.*

---

### `wall_dain_20`
- 배경: `gym.png`
- 다음: `wall_dain_20_ins`

- 캐릭터: `dain_sad.png`
**다인**: 학교에서 '에너지 넘치네!' 소리 들을 때마다 — 여기가. ...죽을 것 같았어.

---

### `wall_dain_20_ins`
- 배경: `gym.png`
- 다음: `wall_dain_21`

- 캐릭터: `dain_sad.png`
**다인**: ...죽을 것 같았어.

---

### `wall_dain_21`
- 배경: `gym.png`
- 다음: `wall_dain_22`

- 캐릭터: `dain_sad.png`
**다인**: 오늘도. 오늘 데이트하면서 뛰어다닐 때. 네 옆에서 밝은 척할 때. 무릎이 비명을 지르고 있었어.

---

### `wall_dain_22`
- 배경: `gym.png`
- 다음: `wall_dain_22_ins`

- 캐릭터: `dain_sad.png`
**다인**: — 근데 네 앞에서까지 아픈 모습 보이면, 나한테 남는 게 없잖아.

---

### `wall_dain_22_ins`
- 배경: `gym.png`
- 다음: `wall_dain_choice`

- 캐릭터: `dain_sad.png`
**{name}**: *다인 옆에 앉았다. 코트 바닥이 차갑다. 아무 말도 안 했다.*

---

### `wall_dain_choice`
- 배경: `gym.png`
- 선택지:
  1. "...아무 말 안 할게. 그냥 여기 있을게." → `wall_dain_newdream_1` | Dain +10
  2. "울어도 돼. 밝은 척 안 해도 돼. 나한테는." → `wall_dain_cry_1` | Dain +17
  3. "...같이 일어나볼까. 한 번만 더." → `wall_dain_lastspike_1` | Dain +12

- 캐릭터: `dain_sad.png`
**{name}**: *다인이 배구공을 꼭 안고 고개를 숙였다. 어깨가 떨리고 있다.*

---

### `wall_dain_newdream_1`
- 배경: `gym.png`
- 다음: `wall_dain_newdream_2`

- 캐릭터: `dain_sad.png`
**{name}**: *그대로 옆에 앉아 있었다. 아무 말도 안 했다.*

---

### `wall_dain_newdream_2`
- 배경: `gym.png`
- 다음: `wall_dain_newdream_2_ins`

- 캐릭터: `dain_sad.png`
**{name}**: *다인도 아무 말이 없다. — 이상한 시간이다. 다인 옆에서 1분 이상 침묵이 흐른 건 처음이다.*

---

### `wall_dain_newdream_2_ins`
- 배경: `gym.png`
- 다음: `wall_dain_newdream_3`

- 캐릭터: `dain_sad.png`
**{name}**: *다인이 먼저 입을 연다.*

---

### `wall_dain_newdream_3`
- 배경: `gym.png`
- 다음: `wall_dain_newdream_4`

- 캐릭터: `dain_sad.png`
**다인**: ...왜 아무 말 안 해?

---

### `wall_dain_newdream_4`
- 배경: `gym.png`
- 다음: `wall_dain_newdream_5`

- 캐릭터: `dain_normal.png`
**{name}**: 다인이 말하고 싶을 때 들으려고.

---

### `wall_dain_newdream_5`
- 배경: `gym.png`
- 다음: `wall_dain_newdream_6`

- 캐릭터: `dain_normal.png`
**{name}**: *다인이 무릎 위의 손을 본다. 주먹을 쥐었다 폈다 한다.*

---

### `wall_dain_newdream_6`
- 배경: `gym.png`
- 다음: `wall_dain_newdream_7`

- 캐릭터: `dain_sad.png`
**다인**: 진짜 웃기지? 5살 때부터 매일 이 코트에 섰는데... 이제 설 수 없다는 거.

---

### `wall_dain_newdream_7`
- 배경: `gym.png`
- 다음: `wall_dain_newdream_8`

- 캐릭터: `dain_shy.png`
**다인**: 근데 네가 옆에 앉으니까 — 바닥이 덜 차가워.

---

### `wall_dain_newdream_8`
- 배경: `gym.png`
- 다음: `wall_dain_farewell_1`

- 캐릭터: `dain_shy.png`
**{name}**: *코트 위에서 공을 치는 게 아니라, 누군가와 나란히 앉아 있는 것. — 다인에게는 그것도 처음이었을 거다.*

---

### `wall_dain_cry_1`
- 배경: `dain_depression_event1.png`
- 다음: `wall_dain_cry_2`

- 캐릭터: `없음`
**{name}**: *다인이 코트 위에 주저앉았다. 배구공을 껴안고 울기 시작했다.*

---

### `wall_dain_cry_2`
- 배경: `gym.png`
- 다음: `wall_dain_cry_3`

- 캐릭터: `dain_sad.png`
**{name}**: *억지로 참던 1년치 울음이 한꺼번에 터진 것처럼. 텅 빈 체육관에 목 놓아 우는 소리가 메아리친다.*

---

### `wall_dain_cry_3`
- 배경: `gym.png`
- 다음: `wall_dain_cry_4`

- 캐릭터: `dain_sad.png`
**다인**: 혼자서... 매일 아침에 무릎 붕대 감으면서...

---

### `wall_dain_cry_4`
- 배경: `gym.png`
- 다음: `wall_dain_cry_5`

- 캐릭터: `dain_sad.png`
**다인**: 핸드폰 알람에 적어놨어. '오늘도 웃어!!'라고...

---

### `wall_dain_cry_5`
- 배경: `gym.png`
- 다음: `wall_dain_cry_6`

- 캐릭터: `dain_sad.png`
**다인**: 매일 아침 그거 보고... 느낌표 두 개 보면서... 억지로 입꼬리 올렸어...

---

### `wall_dain_cry_6`
- 배경: `gym.png`
- 다음: `wall_dain_cry_6_ins`

- 캐릭터: `dain_sad.png`
**{name}**: *알람 메모에 느낌표를 두 개나 넣은 건 — 하나로는 자기 자신도 못 속이기 때문이겠지.*

---

### `wall_dain_cry_6_ins`
- 배경: `gym.png`
- 다음: `wall_dain_farewell_1`

- 캐릭터: `dain_sad.png`
**{name}**: *토스를 올려줬다.*

---

### `wall_dain_lastspike_1`
- 배경: `gym.png`
- 다음: `wall_dain_lastspike_2`

- 캐릭터: `dain_sad.png`
**{name}**: *손을 내밀었다. 다인이 잡았다. 둘 다 일어섰다. — 토스를 올려줬다.*

---

### `wall_dain_lastspike_2`
- 배경: `gym.png`
- 다음: `wall_dain_lastspike_3`

- 캐릭터: `dain_normal.png`
**{name}**: *다인이 이를 악물고 뛰어올라 — 최고의 스파이크. 공이 코트에 꽂힌다.*

---

### `wall_dain_lastspike_3`
- 배경: `gym.png`
- 다음: `wall_dain_lastspike_3_ins`

- 캐릭터: `dain_laugh.png`
**{name}**: *착지하며 무릎을 잡았지만 — 웃고 있다.*

---

### `wall_dain_lastspike_3_ins`
- 배경: `gym.png`
- 다음: `wall_dain_lastspike_3_ins2`

- 캐릭터: `dain_normal.png`
**다인**: *힘없이 웃는다.* ...아프다.

---

### `wall_dain_lastspike_3_ins2`
- 배경: `gym.png`
- 다음: `wall_dain_lastspike_4`

- 캐릭터: `dain_normal.png`
**다인**: 근데 이상하게 시원해.

---

### `wall_dain_lastspike_4`
- 배경: `gym.png`
- 다음: `wall_dain_lastspike_4_ins`

- 캐릭터: `dain_sad.png`
**다인**: ...ㅋㅋ 아프다. 근데 이상하게 시원해. — 여기서 마지막 공을 친 게 {name}이 올려준 토스라서 다행이야.

---

### `wall_dain_lastspike_4_ins`
- 배경: `gym.png`
- 다음: `wall_dain_lastspike_5`

- 캐릭터: `dain_sad.png`
**{name}**: *다인이 코트를 둘러본다. 어둡고 텅 빈 체육관.*

---

### `wall_dain_lastspike_5`
- 배경: `gym.png`
- 다음: `wall_dain_lastspike_6`

- 캐릭터: `dain_sad.png`
**다인**: 안녕, 코트.

---

### `wall_dain_lastspike_6`
- 배경: `gym.png`
- 다음: `wall_dain_farewell_1`

- 캐릭터: `dain_sad.png`
**다인**: — 5살부터 13년. 고마웠어.

---

### `wall_dain_farewell_1`
- 배경: `gym.png`
- 플래그: `day4_dain_wall_broken`
- 다음: `wall_dain_farewell_2`

- 캐릭터: `dain_normal.png`
**{name}**: *느낌표가 하나도 없는 다인의 문장. — 그 자체가 이별의 무게다.*

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
**다인**: 서연이가 나한테 뭐라 그랬는지 알아? ...아무 말도 안 했어. 그게 더 무서웠어.

---

### `wall_dain_mention_2`
- 배경: `school_back.png`
- 다음: `wall_dain_mention_3`

- 캐릭터: `dain_sad.png`
**다인**: 말이라도 해주면 싸울 수 있는데. 아무 말도 안 하면 내가 나쁜 사람 된 것 같잖아.

---

### `wall_dain_mention_3`
- 배경: `school_back.png`
- 다음: `wall_dain_skin_check`

- 캐릭터: `dain_normal.png`
**{name}**: *다인이 잠깐 멈췄다. — 다시 걷기 시작한다. 한결 가벼운 발걸음으로.*

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
**{name}**: *다인이 울다가 안긴다.*

---

### `wall_dain_skin70_2`
- 배경: `school_back.png`
- 다음: `wall_dain_skin70_3`

- 캐릭터: `dain_shy.png`
**다인**: 놓지 마.

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
**{name}**: *오락실에서 나와 벤치에 앉았다. 다인이 아무 예고 없이 무릎 위에 눕는다.*

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
- 다음: `wall_dain_glimpse_3`

- 캐릭터: `yuna_sad.png`
**{name}**: *유나다. 혼자 앉아 있다. — 가슴이 쿵 내려앉는다.*

---

### `wall_dain_glimpse_3`
- 배경: `yuna_hideout.png`
- 다음: `wall_dain_glimpse_4`

- 캐릭터: `yuna_sad.png`
**{name}**: *유나에게서 오늘 메시지는 없었다. — 미안하다.*

---

### `wall_dain_glimpse_4`
- 배경: `school_back.png`
- 다음: `wall_dain_glimpse_4_ins`

- 캐릭터: `없음`
**{name}**: *모른 척 지나갔다. — 근데 왜 마음이 이러지.*

---

### `wall_dain_glimpse_4_ins`
- 배경: `school_back.png`
- 다음: `wall_dain_glimpse_4_ins2`

- 캐릭터: `yuna_sad.png` @ 0.35
**{name}**: *밤 10시. 유나에게서 메시지.*

---

### `wall_dain_glimpse_4_ins2`
- 배경: `school_back.png`
- 다음: `day4_final`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *학교 후문. 지금 와.*

---

### `wall_yuna_1`
- 배경: `room_my.png`
- BGM: `night2.mp3`
- 호감분기: Yuna
  - [60+] → `wall_yuna_pre_high_1`
  - [기본] → `wall_yuna_pre_low_1`

- 캐릭터: `없음`
**{name}**: *밤 10시. 유나에게서 메시지. '학교 후문. 지금 와.'*

---

### `wall_yuna_pre_high_1`
- 배경: `room_my.png`
- 다음: `wall_yuna_pre_high_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: ...오늘은 쪽지 없이 말할게.

---

### `wall_yuna_pre_high_2`
- 배경: `room_my.png`
- 다음: `wall_yuna_3`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *유나가 쪽지 대신 직접 말한다. 문장이 이미 길다. — 벽이 내려가고 있다.*

---

### `wall_yuna_pre_low_1`
- 배경: `room_my.png`
- 다음: `wall_yuna_pre_low_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *유나가 쪽지를 건넨다.*

---

### `wall_yuna_pre_low_2`
- 배경: `room_my.png`
- 다음: `wall_yuna_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *아직 말로 하기엔 이르다는 뜻.*

---

### `wall_yuna_2`
- 배경: `school_back.png`
- 다음: `wall_yuna_3`

- 캐릭터: `yuna_normal.png`
**{name}**: *밤의 학교는 다른 곳 같다. 후문에 유나가 서 있다. 평소보다 — 불안해 보인다.*

---

### `wall_yuna_3`
- 배경: `school_back.png`
- 다음: `wall_yuna_4`

- 캐릭터: `yuna_normal.png`
**유나**: 따라와.

---

### `wall_yuna_4`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_5`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 도서관 별관으로 향한다. 비밀 독서 공간을 지나 — 더 안쪽. 지하 자료실.*

---

### `wall_yuna_5`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_6`

- 캐릭터: `yuna_normal.png`
**{name}**: *먼지가 쌓인 서가 사이. 유나가 오래된 봉투를 꺼낸다.*

---

### `wall_yuna_6`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_7`

- 캐릭터: `yuna_normal.png`
**유나**: 이거. 1년 전에 받은 거야.

---

### `wall_yuna_7`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_8`

- 캐릭터: `yuna_sad.png`
**{name}**: *봉투 안에 편지. — '유나에게. 미안해. 설명할 수 없는 이유로 떠나야 해. — 이준호'*

---

### `wall_yuna_8`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_9`

- 캐릭터: `yuna_sad.png`
**{name}**: ...이준호?

---

### `wall_yuna_9`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_9_ins`

- 캐릭터: `yuna_sad.png`
**유나**: 여기 같이 오던 선배. — 유일하게 친했던 사람.

---

### `wall_yuna_9_ins`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_10`

- 캐릭터: `yuna_sad.png`
**{name}**: *유나가 편지를 내려놓는다.*

---

### `wall_yuna_10`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_11`

- 캐릭터: `yuna_sad.png`
**유나**: 중학교 때 나 투명인간이었어. 반에서 아무도 말 안 걸었어.

---

### `wall_yuna_11`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_12`

- 캐릭터: `yuna_sad.png`
**유나**: 선배가 처음이었어. '네 글 좋더라'— 그 한마디. 나한테는 존재 증명이었어.

---

### `wall_yuna_12`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_13`

- 캐릭터: `yuna_sad.png`
**{name}**: *유나의 문장이 평소보다 훨씬 길다. — 이 사람이 이렇게 많이 말하는 건 처음이다.*

---

### `wall_yuna_13`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_14`

- 캐릭터: `yuna_normal.png`
**유나**: 어느 날 전학 갔어. 연락 없이. 이 편지만 남기고.

---

### `wall_yuna_14`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_14_ins`

- 캐릭터: `yuna_normal.png`
**유나**: 나를 증명해준 사람이 사라진 거야. 또 투명인간이 될 것 같았어.

---

### `wall_yuna_14_ins`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_14_ins2`

- 캐릭터: `yuna_normal.png`
**유나**: 1년 동안 혼자 여기 왔어. 혹시 뭔가 남겨놨을까 해서.

---

### `wall_yuna_14_ins2`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_14_ins3`

- 캐릭터: `yuna_normal.png`
**유나**: ...없었어.

---

### `wall_yuna_14_ins3`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_14_ins4`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 나를 본다.*

---

### `wall_yuna_14_ins4`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_14_ins5`

- 캐릭터: `yuna_normal.png`
**유나**: 처음에 네가 도서관에 왔을 때.

---

### `wall_yuna_14_ins5`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_14_ins6`

- 캐릭터: `yuna_normal.png`
**유나**: 선배랑 분위기가 비슷했어. — 그래서 무서웠어.

---

### `wall_yuna_14_ins6`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_14_ins7`

- 캐릭터: `yuna_normal.png`
**유나**: 또 친해지면 또 사라질까 봐.

---

### `wall_yuna_14_ins7`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_15`

- 캐릭터: `yuna_normal.png`
**{name}**: ......

---

### `wall_yuna_15`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_16`

- 캐릭터: `yuna_normal.png`
**유나**: *고개를 숙이며* ...그래서 일부러 차갑게 굴었어. 미리 밀어내면 덜 아플 줄 알았으니까.

---

### `wall_yuna_16`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_16_ins`

- 캐릭터: `yuna_sad.png`
**유나**: 근데 너는 매일 왔어. 조용히. — 사라지지 않고.

---

### `wall_yuna_16_ins`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_16_ins2`

- 캐릭터: `yuna_sad.png`
**{name}**: *유나가 옷소매를 꽉 쥐고 있다. — 문장이 점점 길어지고 있다.*

---

### `wall_yuna_16_ins2`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_choice`

- 캐릭터: `yuna_sad.png`
**{name}**: *유나가 잠깐 멈춘다.*

---

### `wall_yuna_choice`
- 배경: `yuna_hideout.png`
- 선택지:
  1. "나는 그 선배가 아니야. 나는 나야. 그래도 같이 있을게." → `wall_yuna_moved_1` | Yuna +14
  2. "선배 얘기는 됐어. 지금 내 앞에 있는 건 나야." → `wall_yuna_sub_1` | Yuna +10
  3. "...그래서 나한테 접근한 거야? 선배 대신?" → `wall_yuna_reject_1` | Yuna -10

- 캐릭터: `yuna_sad.png`
**{name}**: *유나의 속눈썹이 젖어 있다. — 유나가 이렇게 많이 말하는 건 처음이다.*

---

### `wall_yuna_moved_1`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_moved_2`

- 캐릭터: `yuna_normal.png`
**유나**: ...처음엔 선배의 그림자를 쫓았을지도 몰라.

---

### `wall_yuna_moved_2`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_moved_3`

- 캐릭터: `yuna_normal.png`
**유나**: 근데 지금은...

---

### `wall_yuna_moved_3`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_moved_4`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나가 고개를 든다. 나른하게 감긴 붉은 눈이 아니다. 똑바로, 흔들리지 않고 보고 있다.*

---

### `wall_yuna_moved_4`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_moved_5`

- 캐릭터: `yuna_shy.png`
**유나**: 지금은 네가 보여. 너만.

---

### `wall_yuna_moved_5`
- 배경: `yuna_hideout.png`
- 플래그: `day4_yuna_wall_broken`
- 다음: `wall_yuna_moved_5_ins`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나가 네 문장을 연속으로 말했다. — 이건 고백과 같다.*

---

### `wall_yuna_moved_5_ins`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_mention_1`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나의 표정이 굳는다.*

---

### `wall_yuna_mention_1`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_mention_2`

- 캐릭터: `yuna_sad.png`
**유나**: ...다인이 울고 있었어. 보건실에서.

---

### `wall_yuna_mention_2`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_mention_3`

- 캐릭터: `yuna_sad.png`
**유나**: 네가 고른 게 나라서. ...미안해야 하는 건 나인데.

---

### `wall_yuna_mention_3`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_skin_check`

- 캐릭터: `yuna_normal.png`
**{name}**: *짧은 침묵. — 유나의 솔직함이 더 무겁다.*

---

### `wall_yuna_skin_check`
- 배경: `yuna_hideout.png`
- 호감분기: Yuna
  - [70+] → `wall_yuna_skin70_1`
  - [60+] → `wall_yuna_skin60_1`
  - [기본] → `wall_yuna_glimpse_1`

- 캐릭터: `yuna_normal.png`

<!-- i18n -->

---

### `wall_yuna_skin70_1`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_skin70_2`

- 캐릭터: `yuna_shy.png`
**유나**: 가까이 와도 돼?

---

### `wall_yuna_skin70_2`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_skin70_3`

- 캐릭터: `yuna_shy.png`
**{name}**: *어깨에 기댄다. 손을 꼭 잡는다.*

---

### `wall_yuna_skin70_3`
- 배경: `yuna_hideout.png`
- 플래그: `day4_skinship_yuna_70`
- 다음: `wall_yuna_glimpse_1`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나의 손이 생각보다 따뜻하다. — 그것만.*

---

### `wall_yuna_skin60_1`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_skin60_2`

- 캐릭터: `yuna_shy.png`
**{name}**: *헌책방 서가 사이. 유나가 뒤에서 등에 이마를 댄다.*

---

### `wall_yuna_skin60_2`
- 배경: `yuna_hideout.png`
- 플래그: `day4_skinship_yuna_60`
- 다음: `wall_yuna_glimpse_1`

- 캐릭터: `yuna_shy.png`
**유나**: ...따뜻해서.

---

### `wall_yuna_sub_1`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_sub_2`

- 캐릭터: `yuna_sad.png`
**유나**: ...그래. 선배는 선배고. 너는 너야.

---

### `wall_yuna_sub_2`
- 배경: `yuna_hideout.png`
- 플래그: `day4_yuna_wall_broken`
- 다음: `wall_yuna_glimpse_1`

- 캐릭터: `yuna_smile.png`
**{name}**: *유나가 작게 웃었다. 어색하지만, 진심인 웃음.*

---

### `wall_yuna_reject_1`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_reject_1_ins`

- 캐릭터: `yuna_sad.png`
**유나**: ......그렇게 생각해?

---

### `wall_yuna_reject_1_ins`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_reject_2`

- 캐릭터: `yuna_sad.png`
**{name}**: *유나가 편지를 다시 집어든다.*

---

### `wall_yuna_reject_2`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_reject_3`

- 캐릭터: `yuna_sad.png`
**유나**: ...그래. 그랬을 수도 있어.

---

### `wall_yuna_reject_3`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_reject_4`

- 캐릭터: `yuna_sad.png`
**{name}**: *유나가 돌아선다. 걸음이 빠르다. — 뛰는 건 아닌데, 뛰고 싶은 사람의 걸음이다.*

---

### `wall_yuna_reject_4`
- 배경: `yuna_hideout.png`
- 다음: `wall_yuna_glimpse_1`

- 캐릭터: `yuna_sad.png`
**{name}**: *최악의 선택이었다. — 유나의 벽이 다시 닫히는 소리가 들린다.*

---

### `wall_yuna_glimpse_1`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_2`

- 캐릭터: `없음`
**{name}**: *유나를 두고 학교를 나온다. 정문을 지나가는데.*

---

### `wall_yuna_glimpse_2`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3`

- 캐릭터: `seyoun_normal.png`
**{name}**: *교문 앞 가로등 아래. 서연이 서 있다. — 아니, 서 있었다. 핸드폰을 들고 뭔가를 치다가 지운다. 치다가 지운다.*

---

### `wall_yuna_glimpse_3`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins`

- 캐릭터: `seyoun_normal.png`
**{name}**: *누구한테 보내려는 건지는 모르겠다. — 아니, 알 것 같다.*

---

### `wall_yuna_glimpse_3_ins`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 핸드폰을 주머니에 넣고 돌아선다. 등이 곧다. 완벽하게. — 떨리지 않는다. 이번에는 진짜로.*

---

### `wall_yuna_glimpse_3_ins2`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins3`

- 캐릭터: `seyoun_normal.png`
**{name}**: *선택하지 않은 사람에게도 밤은 온다. 그 밤을 혼자 보내고 있다.*

---

### `wall_yuna_glimpse_3_ins3`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins4`

- 캐릭터: `없음`
**{name}**: *밤 11시. 핸드폰이 울린다. 담임선생님.*

---

### `wall_yuna_glimpse_3_ins4`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins5`

- 캐릭터: `teacher_normal.png` @ 0.35
**담임선생님**: *메시지* 원고 마감이 가까운데.

---

### `wall_yuna_glimpse_3_ins5`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins6`

- 캐릭터: `teacher_normal.png` @ 0.35
**담임선생님**: *메시지* ...첫 번째 독자한테 보여주고 싶은 부분이 있어.

---

### `wall_yuna_glimpse_3_ins6`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins7`

- 캐릭터: `teacher_normal.png` @ 0.35
**담임선생님**: *메시지* 내일 시간 되면 교무실로 와. — 수업 끝나고.

---

### `wall_yuna_glimpse_3_ins7`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins8`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *메시지가 끊긴다. 추가 메시지는 오지 않는다.*

---

### `wall_yuna_glimpse_3_ins8`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins9`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *선생님의 문장은 늘 짧다. 군더더기가 없다. — 근데 이건 좀 달랐다. '보여주고 싶은 부분이 있어.' 그 한 줄에 무게가 실려 있다.*

---

### `wall_yuna_glimpse_3_ins9`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins10`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *첫 번째 독자. — 그 단어가 자꾸 머릿속에 남는다. 원고를 쓰는 사람이 가장 먼저 보여주고 싶은 사람. 그게 나라는 뜻인지, 아니면 그냥 가까이 있으니까 편해서인지.*

---

### `wall_yuna_glimpse_3_ins10`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins11`

- 캐릭터: `없음`
**{name}**: *...모르겠다. 근데 내일은 꼭 가야 할 것 같다.*

---

### `wall_yuna_glimpse_3_ins11`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins12`

- 캐릭터: `없음`
**{name}**: *밤 11시 반. 핸드폰 알림. 보건선생님.*

---

### `wall_yuna_glimpse_3_ins12`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins13`

- 캐릭터: `nurse_normal.png` @ 0.35
**보건선생님**: *메시지* 오늘 보건실에서 네가 한 말.

---

### `wall_yuna_glimpse_3_ins13`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins14`

- 캐릭터: `nurse_normal.png` @ 0.35
**보건선생님**: *메시지* ...밤에 자꾸 떠올라.

---

### `wall_yuna_glimpse_3_ins14`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins15`

- 캐릭터: `nurse_normal.png` @ 0.35
**{name}**: *읽음 표시가 뜬다. 10초. 20초. 추가 메시지 없음.*

---

### `wall_yuna_glimpse_3_ins15`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins16`

- 캐릭터: `nurse_normal.png` @ 0.35
**{name}**: *1분 뒤.*

---

### `wall_yuna_glimpse_3_ins16`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins17`

- 캐릭터: `nurse_normal.png` @ 0.35
**보건선생님**: *메시지* 아 이상한 뜻 아니야. 그냥 인상 깊었다는 거지.

---

### `wall_yuna_glimpse_3_ins17`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins18`

- 캐릭터: `nurse_normal.png` @ 0.35
**보건선생님**: *메시지* ...자.

---

### `wall_yuna_glimpse_3_ins18`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins19`

- 캐릭터: `없음`
**{name}**: *핸드폰 화면이 꺼진 뒤에도 마지막 문장이 망막에 남는다. 밤공기가 생각보다 차갑다.*

---

### `wall_yuna_glimpse_3_ins19`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins20`

- 캐릭터: `nurse_normal.png` @ 0.35
**{name}**: *'밤에 자꾸 떠올라.' — 그 문장을 보고 손가락이 멈췄다. 그다음 '이상한 뜻 아니야'가 오고 나서야 숨이 나왔다.*

---

### `wall_yuna_glimpse_3_ins20`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins21`

- 캐릭터: `nurse_normal.png` @ 0.35
**{name}**: *근데 이상한 건 — 변명이 1분이나 걸렸다는 거다. 1분 동안 뭘 고민한 거지. 보내고 나서 후회한 건지, 아니면 보내기 전에 이미 후회한 건지.*

---

### `wall_yuna_glimpse_3_ins21`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins22`

- 캐릭터: `없음`
**{name}**: *고개를 들자 교문 앞 가로등 자리가 비어 있다. 조금 전까지 누군가를 기다리던 자리만 남아 있다.*

---

### `wall_yuna_glimpse_3_ins22`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_3_ins23`

- 캐릭터: `없음`
**{name}**: *...내가 한 말이 뭐였는지 되짚어 본다. 별거 아닌 말이었다. — 근데 선생님한테는 아니었나 보다.*

---

### `wall_yuna_glimpse_3_ins23`
- 배경: `school_back.png`
- 다음: `wall_yuna_glimpse_4`

- 캐릭터: `없음`
**{name}**: *학교 건물 몇 칸에만 불이 남아 있다. 저 안 어딘가에서 유나가 다시 책장을 넘기고 있을지도 모른다. 방금 전까지 마주 보고 있었는데도, 다시 보고 싶다.*

---

### `wall_yuna_glimpse_4`
- 배경: `school_back.png`
- 다음: `day4_final`

- 캐릭터: `없음`
**{name}**: *발끝이 쉽게 떨어지지 않는다. 오늘 들은 말들은 다 가볍지 않았다. 그래서 더 오래 남는다.*

---

### `day4_night_regret`
- 배경: `room_my.png`
- 다음: `day4_night_regret_2`

- 캐릭터: `없음`
**{name}**: *...오늘 말했어야 했다. 그 사람이 먼저 마음을 내밀고 있었는데, 나는 또 가장 쉬운 말을 못 했다.*

---

### `day4_night_regret_2`
- 배경: `room_my.png`
- 다음: `day4_night_regret_msg_branch`

- 캐릭터: `없음`
**{name}**: *내일이 있다고 해서 오늘이 지워지는 건 아니다. 그걸 알면서도, 나는 또 미뤘다.*

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
**서연**: 오늘 바람 좋았어. 그래서... 조금 기대했어.

---

### `day4_night_regret_msg_dain`
- 배경: `room_my.png`
- 다음: `day4_night_regret_reply`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 야 오늘 재밌었다ㅋㅋ ...나 혼자만 그런 건 아니지?

---

### `day4_night_regret_msg_yuna`
- 배경: `room_my.png`
- 다음: `day4_night_regret_reply`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: ...오늘. 조금 기대했어.

---

### `day4_night_regret_msg`
- 배경: `room_my.png`
- 다음: `day4_night_regret_reply`

- 캐릭터: `없음`
**{name}**: *핸드폰 화면이 켜진다. 짧은 문장인데, 그래서 더 아프다.*

---

### `day4_night_regret_reply`
- 배경: `room_my.png`
- 다음: `day4_night_sleep`

- 캐릭터: `없음`
**{name}**: *답장을 쓰다 지운다. 뭐라고 해도 늦은 것 같다.*

---

### `night_homeroom_msg_1`
- 배경: `room_my.png`
- 다음: `night_homeroom_msg_2`

- 캐릭터: `teacher_normal.png` @ 0.35
**담임선생님**: *메시지* 원고 마감이 가까운데. ...첫 번째 독자한테 보여주고 싶은 부분이 있어.

---

### `night_homeroom_msg_2`
- 배경: `room_my.png`
- 다음: `night_homeroom_msg_3`

- 캐릭터: `teacher_normal.png` @ 0.35
**담임선생님**: *메시지* 내일 시간 되면 교무실로 와. — 수업 끝나고.

---

### `night_homeroom_msg_3`
- 배경: `room_my.png`
- 다음: `day4_night_sleep`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *밤 11시. 담임선생님에게서 문자가 왔다. 짧은 문장 세 줄. — '첫 번째 독자'. 그 단어가 자꾸 머릿속에 남는다.*

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

### `day4_night_reflect`
- 배경: `room_my.png`
- 다음: `day4_night_sleep`

- 캐릭터: `없음`
**{name}**: *토요일이 이렇게 지나갔다. 내일은 학교 행사. — 일요일인데도 등교다.*

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
- 다음: `morning5_start_ins`

- 캐릭터: `없음`
**{name}**: *다섯째 날. 일요일이지만 학교 행사가 있다. 교복이 편해졌다. — 이 사람들 때문이다. 알고 있다.*

---

### `morning5_start_ins`
- 배경: `room_school.png`
- 다음: `morning5_start_2`

- 캐릭터: `없음`
**{name}**: *교실에 들어서자마자 — 세 방향에서 신호가 온다.*

---

### `morning5_start_2`
- 배경: `room_school.png`
- 다음: `morning5_start_2_ins`

- 캐릭터: `없음`
**{name}**: *마지막 이벤트. 지금까지 쌓아온 시간이 오늘로 모인다.*

---

### `morning5_start_2_ins`
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
- 다음: `morning5_seo_note_1`

- 캐릭터: `없음`
**{name}**: 마지막 날이다. 이상하게 발걸음이 가볍다. 오늘은 — 말할 수 있을 것 같다.

---

### `morning5_mood_mid`
- 배경: `room_school.png`
- 다음: `morning5_seo_note_1`

- 캐릭터: `없음`
**{name}**: 마지막 날. 아직 확신이 없다. 하지만 가야 한다.

---

### `morning5_mood_low`
- 배경: `room_school.png`
- 다음: `morning5_seo_note_1`

- 캐릭터: `없음`
**{name}**: 마지막 날. 5일이 이렇게 빨리 지나갈 줄 몰랐다. ...뭘 한 건지 모르겠다.

---

### `morning5_seo_note_1`
- 배경: `room_school.png`
- 다음: `morning5_seo_note_1_ins`

- 캐릭터: `seyoun_normal.png`
**{name}**: *책상 위에 쪽지가 놓여 있다. 서연의 글씨. — '오후에 잠깐 시간 내. 옥상 열어 놓을게. — 서연'*

---

### `morning5_seo_note_1_ins`
- 배경: `school_hallway.png`
- 다음: `morning5_seo_note_1_ins2`

- 캐릭터: `없음`
**{name}**: *복도 문예부 전시 코너를 지나가다 — 게시판에 단편소설이 붙어 있다. 제목:*

---

### `morning5_seo_note_1_ins2`
- 배경: `school_hallway.png`
- 다음: `morning5_seo_note_1_ins3`

- 캐릭터: `없음`
**{name}**: *'도서관에서 만난 사람에게'*

---

### `morning5_seo_note_1_ins3`
- 배경: `school_hallway.png`
- 다음: `morning5_seo_note_1_ins4`

- 캐릭터: `없음`
**{name}**: *유나다. — 주인공만 알아볼 수 있는 이야기.*

---

### `morning5_seo_note_1_ins4`
- 배경: `school_hallway.png`
- 다음: `morning5_yuna_story_1`

- 캐릭터: `없음`
**{name}**: *붙임판 앞에 잠깐 더 서 있었다. 짧은 문장인데, 유나가 직접 얼굴을 들이민 것처럼 선명하다.*

---

### `morning5_yuna_story_1`
- 배경: `school_hallway.png`
- 다음: `morning5_return_class`

- 캐릭터: `yuna_normal.png`
**{name}**: *소설 속 인물은 도서관에서 잠든 누군가의 어깨에 담요를 덮어준다. — 그건 나밖에 모르는 장면이다. 유나가 이걸 쓴 거다.*

---

### `morning5_return_class`
- 배경: `room_school.png`
- 다음: `morning5_dain_1`

- 캐릭터: `dain_normal.png`
**{name}**: *교실로 돌아오니 다인이 기다리고 있다.*

---

### `morning5_dain_1`
- 배경: `room_school.png`
- 다음: `morning5_dain_1_ins`

- 캐릭터: `dain_normal.png`
**다인**: 야! 오늘 체육 이벤트에 파트너로 너 써놨어!

---

### `morning5_dain_1_ins`
- 배경: `room_school.png`
- 다음: `morning5_dain_2`

- 캐릭터: `dain_normal.png`
**{name}**: ...허락도 없이?

---

### `morning5_dain_2`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_check`

- 캐릭터: `dain_laugh.png`
**다인**: 도망가면 진짜 화난다?

---

### `hidden_homeroom_d5_check`
- 배경: `school_hallway.png`
- 분기:
  - [`homeroom_day4`] → `hidden_homeroom_d5_1`
  - [기본] → `hidden_nurse_d5_check`

- 캐릭터: `teacher_normal.png`
**{name}**: *행사 준비 시간. 복도를 걷는데 — 빈 교실 앞을 지나간다. 문이 열려 있다.*

---

### `hidden_homeroom_d5_1`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_1_ins`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 교탁에 앉아 있다. — 원고가 아니라, 봉투를 들고 있다. 갈색 봉투.*

---

### `hidden_homeroom_d5_1_ins`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_1_ins2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...아.

---

### `hidden_homeroom_d5_1_ins2`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_1_ins3`

- 캐릭터: `teacher_normal.png`
**{name}**: 선생님.

---

### `hidden_homeroom_d5_1_ins3`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_1_ins4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *봉투를 살짝 들어 보이며* ...이거.

---

### `hidden_homeroom_d5_1_ins4`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_2`

- 캐릭터: `teacher_normal.png`
**{name}**: 뭔데요?

---

### `hidden_homeroom_d5_2`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 원고. — 미완성이지만. 첫 번째 독자한테 주려고.

---

### `hidden_homeroom_d5_3`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 7년 동안 아무한테도 안 보여줬어. — 업무 외 행동이긴 한데.

---

### `hidden_homeroom_d5_4`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_5`

- 캐릭터: `teacher_normal.png`
**{name}**: ...원고를 받는다. 생각보다 무겁다.

---

### `hidden_homeroom_d5_5`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_choice`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...첫 번째 독자한테 건네는 거, 생각보다 떨리네.

---

### `hidden_homeroom_d5_choice`
- 배경: `room_school.png`
- 선택지:
  1. "졸업하면 이름으로 불러도 돼요?" → `hidden_homeroom_d5_choice_a` | Teacher +14
  2. "감상문, 한 줄이 아니라 한 페이지 써도 돼요?" → `hidden_homeroom_d5_choice_b` | Teacher +7

- 캐릭터: `teacher_normal.png`
**{name}**: *원고를 안고 있다. 이 사람의 7년이 손 안에 있다.*

---

### `hidden_homeroom_d5_choice_a`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_6`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *목소리가 갈라진다.* 그래. 졸업하면.

---

### `hidden_homeroom_d5_choice_b`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_choice_b_ins`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *피식* 한 페이지면 — 소감문이 아니라 서평이지.

---

### `hidden_homeroom_d5_choice_b_ins`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_choice_b_ins2`

- 캐릭터: `teacher_smile.png`
**{name}**: 서평 써도 돼요?

---

### `hidden_homeroom_d5_choice_b_ins2`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_choice_b_ins3`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *잠깐 웃다가, 표정이 진지해진다.* ...좋은 서평이면. 한 편 더 쓸 수 있을 것 같아.

---

### `hidden_homeroom_d5_choice_b_ins3`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_6`

- 캐릭터: `teacher_smile.png`
**{name}**: *한 편 더. — 7년 만에 끝낸 사람이 '한 편 더'를 말하고 있다.*

---

### `hidden_homeroom_d5_6`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_6_ins`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *머리카락을 넘기며* ...감상문은 안 받아. — *피식* ...맞아. 한 줄이라도 써 줘.

---

### `hidden_homeroom_d5_6_ins`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_6_ins2`

- 캐릭터: `teacher_normal.png`
**{name}**: *어제 카페에서 한 말. 첫 번째 독자. — 진짜 가져온 거다.*

---

### `hidden_homeroom_d5_6_ins2`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_6_ins3`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 봉투를 건넨다. — 손이 살짝 떨리고 있다.*

---

### `hidden_homeroom_d5_6_ins3`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_6_ins4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...읽고 나서 솔직하게 말해줘. — 선생님한테 예의 지킬 필요 없어.

---

### `hidden_homeroom_d5_6_ins4`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_6_ins5`

- 캐릭터: `teacher_normal.png`
**{name}**: 선생님.

---

### `hidden_homeroom_d5_6_ins5`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_6_ins6`

- 캐릭터: `teacher_normal.png`
**{name}**: 그 말, 이제 안 하셔도 될 것 같아요.

---

### `hidden_homeroom_d5_6_ins6`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_6_ins7`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 잠깐 멈춘다. — 그리고 웃는다. 건조하지 않은, 따뜻한 웃음.*

---

### `hidden_homeroom_d5_6_ins7`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_6_ins8`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...그 말을 학생한테 듣는 날이 올 줄은 몰랐다.

---

### `hidden_homeroom_d5_6_ins8`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_6_ins9`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 봉투를 내 손에 놓는다.*

---

### `hidden_homeroom_d5_6_ins9`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_6_ins10`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...첫 번째 독자가 되어줄래?

---

### `hidden_homeroom_d5_6_ins10`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_6_ins11`

- 캐릭터: `teacher_normal.png`
**{name}**: *어제와 같은 말이다. — 근데 오늘은 말이 아니라 행동이 따라왔다. 7년의 원고가 손 안에 있다.*

---

### `hidden_homeroom_d5_6_ins11`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_6_ins12`

- 캐릭터: `teacher_normal.png`
**{name}**: 읽을게요. 반드시.

---

### `hidden_homeroom_d5_6_ins12`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_6_ins13`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *머리카락을 넘기며* ...감상문은 안 받아.

---

### `hidden_homeroom_d5_6_ins13`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_6_ins14`

- 캐릭터: `teacher_normal.png`
**{name}**: 거짓말이시죠.

---

### `hidden_homeroom_d5_6_ins14`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_6_ins15`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *피식* ...맞아. 한 줄이라도 써 줘.

---

### `hidden_homeroom_d5_6_ins15`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_6_ins16`

- 캐릭터: `teacher_normal.png`
**{name}**: *한 줄. — 등단에 세 번 떨어진 사람이, 학생의 한 줄 감상을 기다리고 있다. 이게 고백이 아니면 뭔가.*

---

### `hidden_homeroom_d5_6_ins16`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_6_ins17`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 교실을 나서다 — 문 앞에서 멈춘다.*

---

### `hidden_homeroom_d5_6_ins17`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_6_ins18`

- 캐릭터: `teacher_normal.png`
**담임선생님**: {name}.

---

### `hidden_homeroom_d5_6_ins18`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_6_ins19`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 멈춘다. 클립보드를 꽉 잡는다. — 그리고 천천히 고개를 돌린다.*

---

### `hidden_homeroom_d5_6_ins19`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_6_ins20`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...졸업하면. *목소리가 갈라진다.* 그래. 졸업하면.

---

### `hidden_homeroom_d5_6_ins20`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_7`

- 캐릭터: `teacher_normal.png`
**{name}**: *'졸업하면'이 두 번이다. — 한 번은 허락, 한 번은 기다림.*

---

### `hidden_homeroom_d5_7`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_7_ins`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 졸업하면 — 한 번 보자. 선생님이 아닌 이름으로.

---

### `hidden_homeroom_d5_7_ins`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_7_ins2`

- 캐릭터: `teacher_normal.png`
**{name}**: *'선생님이 아닌 이름으로'. — 졸업 후를 말하고 있다. 지금은 아니지만, 언젠가.*

---

### `hidden_homeroom_d5_7_ins2`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_8`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...교육적 관심의 범위를 좀 넘긴 것 같다. 마지막이니까. 마지막 한 번만.

---

### `hidden_homeroom_d5_8`
- 배경: `room_school.png`
- 플래그: `homeroom_day5`
- 스탯: Teacher +5
- 다음: `hidden_homeroom_d5_freetalk`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 돌아선다. 긴 머리카락이 흔들린다. — 끝까지 흐트러지지 않으려는 사람 같다.*

---

### `hidden_homeroom_d5_freetalk`
- 배경: `room_school.png`
- 다음: `hidden_nurse_d5_check`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *담임선생님과 빈 교실에서 마지막 대화.*

---

### `hidden_nurse_d5_check`
- 배경: `school_hallway.png`
- 분기:
  - [`nurse_day4`] → `hidden_nurse_d5_1`
  - [기본] → `morning5_end`

- 캐릭터: `없음`
**{name}**: *행사 중간 쉬는 시간. 보건실 앞을 지나간다.*

---

### `hidden_nurse_d5_1`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_1_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 어? {name}. — 마지막 날이네. 행사 마지막 날이잖아. 5일. — 금방이다.

---

### `hidden_nurse_d5_1_ins`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_1_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: *행사 마지막 날이라고 했지만, 다른 의미가 묻어 있다.*

---

### `hidden_nurse_d5_1_ins2`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_1_ins3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *가볍게 웃으며* 졸업하면 놀러 와.

---

### `hidden_nurse_d5_1_ins3`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_1_ins4`

- 캐릭터: `nurse_normal.png`
**{name}**: 졸업은 아직 먼데요.

---

### `hidden_nurse_d5_1_ins4`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_1_ins5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...그전에도 아프면 와.

---

### `hidden_nurse_d5_1_ins5`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_2`

- 캐릭터: `nurse_normal.png`
**{name}**: *'졸업하면 놀러 와'에서 '아프면 와'로 후퇴했다. — 선을 넘으려다 다시 들어온 거다.*

---

### `hidden_nurse_d5_2`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_2_ins`

- 캐릭터: `nurse_normal.png`
**{name}**: *행사 중간 쉬는 시간. 보건실 앞을 지나가는데 — 문이 열린다.*

---

### `hidden_nurse_d5_2_ins`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_2_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 나온다. 코앞이다.*

---

### `hidden_nurse_d5_2_ins2`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_2_ins3`

- 캐릭터: `nurse_normal.png`
**{name}**: *— 마주쳤다. 코앞에서.*

---

### `hidden_nurse_d5_2_ins3`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 어? {name}.

---

### `hidden_nurse_d5_3`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_ins`

- 캐릭터: `nurse_normal.png`
**{name}**: 안 아파도 가면 안 돼요?

---

### `hidden_nurse_d5_3_ins`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 잠깐 멈춘다. 목소리가 한 톤 낮아진다.*

---

### `hidden_nurse_d5_3_ins2`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_ins3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...그건.

---

### `hidden_nurse_d5_3_ins3`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_ins4`

- 캐릭터: `nurse_normal.png`
**{name}**: 선생님?

---

### `hidden_nurse_d5_3_ins4`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_ins5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *다시 웃으며* 그건 졸업하고 물어봐. — 그때는 대답해줄게.

---

### `hidden_nurse_d5_3_ins5`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_ins6`

- 캐릭터: `nurse_normal.png`
**{name}**: *'졸업하고'. — 담임선생님과 같은 말이다. 지금은 안 되지만, 언젠가. 선생님이라는 직함이 벗겨지는 날.*

---

### `hidden_nurse_d5_3_ins6`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_ins7`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 자, 가 봐. 행사 빠지면 안 되지~

---

### `hidden_nurse_d5_3_ins7`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_ins8`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 보건실 안으로 들어가려다 — 멈춘다.*

---

### `hidden_nurse_d5_3_ins8`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_4`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...{name}.

---

### `hidden_nurse_d5_4`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_4_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...밴드 안 떨어지게 꼭 눌러. — 오늘은 직접 안 붙여줄게.

---

### `hidden_nurse_d5_4_ins`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_4_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: 선생님.

---

### `hidden_nurse_d5_4_ins2`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_4_ins3`

- 캐릭터: `nurse_normal.png`
**{name}**: *어색한 침묵. — 어제까지는 자연스러웠는데, 오늘은 뭔가 다르다.*

---

### `hidden_nurse_d5_4_ins3`
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
  1. "네, 마지막이니까. 한 번만." → `hidden_nurse_d5_choice_a` | Nurse +14
  2. "밴드 말고 전화번호요" → `hidden_nurse_d5_choice_b` | Nurse +7

- 캐릭터: `nurse_normal.png`
**{name}**: *다친 데 없는데. 알면서 묻는 거다.*

---

### `hidden_nurse_d5_choice_a`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_a_ins`

- 캐릭터: `nurse_shy.png`
**보건선생님**: *밴드를 천천히 붙인다. 밴드에 작은 글씨가 적혀 있다.*

---

### `hidden_nurse_d5_choice_a_ins`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...한 번만이라면서, 왜 그렇게 말해.

---

### `hidden_nurse_d5_choice_b`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_ins2`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *웃음이 멎는다.* ...그건.

---

### `hidden_nurse_d5_choice_b_ins2`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_ins3`

- 캐릭터: `nurse_normal.png`
**{name}**: *목소리가 한 톤 낮아졌다. 장난기가 완전히 사라진 얼굴. — 이 사람의 진심은 항상 이렇게 온다.*

---

### `hidden_nurse_d5_choice_b_ins3`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_ins4`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 웃다가 — 멈춘다. 입을 다문다.*

---

### `hidden_nurse_d5_choice_b_ins4`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_ins5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...전화번호. 의료 상담용?

---

### `hidden_nurse_d5_choice_b_ins5`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_ins6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *안경을 고쳐 쓰며* ...알았어. 근데 졸업하고 써.

---

### `hidden_nurse_d5_choice_b_ins6`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_ins7`

- 캐릭터: `nurse_normal.png`
**{name}**: *'졸업하고'. — 이 사람은 선을 넘지 않는다. 근데 선 앞에 전화번호를 놓아뒀다.*

---

### `hidden_nurse_d5_choice_b_ins7`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_ins8`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 밴드 붙여줄까?

---

### `hidden_nurse_d5_choice_b_ins8`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_6`

- 캐릭터: `nurse_normal.png`
**{name}**: ...상처 없는데요.

---

### `hidden_nurse_d5_6`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_6_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 알아. 그냥 핑계가 필요했어.

---

### `hidden_nurse_d5_6_ins`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_6_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: *Day 1의 대표 대사. — 그때는 캐릭터 소개였다. 지금은 진심이다.*

---

### `hidden_nurse_d5_6_ins2`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_6_ins3`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 밴드를 꺼내 내 손등에 붙인다. 천천히. — 밴드에 작은 글씨가 적혀 있다.*

---

### `hidden_nurse_d5_6_ins3`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_6_ins4`

- 캐릭터: `nurse_normal.png`
**{name}**: *'졸업하면 보건실 말고 카페에서 만나자 — ♡'*

---

### `hidden_nurse_d5_6_ins4`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_flag_check`

- 캐릭터: `nurse_normal.png`
**{name}**: *하트가 이번에는 — 의료적 관심이 아닌 것 같다.*

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
- 다음: `morning5_end`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님과 보건실 앞에서 마지막 대화.*

---

### `morning5_end`
- 배경: `room_school.png`
- 분기:
  - [`route_dain`] → `tour_dain_1_check`
  - [`route_yuna`] → `tour_yuna_1_check`
  - [`route_seoyeon`] → `tour_seo_1`
  - [기본] → `tour_seo_1`

- 캐릭터: `없음`
**{name}**: *세 방향에서 보낸 신호. — 답을 골라야 한다.*

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
**{name}**: 그때 '과분한데'라고 했다가 혼날 뻔했어.

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
**{name}**: *서연이 가방에서 뭔가를 꺼낸다. — 열쇠다. 옥상 열쇠.*

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
**{name}**: *열쇠를 건네는 손. 새끼손가락이 살짝 닿는다. — 이 사람은 '줄게'라고 안 하고 물건을 건넨다. 말 대신 행동. 처음부터 그랬다.*

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
**서연**: *서연이와 옥상에 서 있다. 마지막 점심시간.*

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
**{name}**: *도서관 별관. Day 2에서 처음 들어왔던 비밀 독서 공간. 낡은 소파, 창문으로 들어오는 오후 햇살.*

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
**{name}**: *유나가 소파에 앉는다. 옆자리를 비워둔다. — Day 2와 같은 구도.*

---

### `tour_yuna_3`
- 배경: `yuna_hideout.png`
- 다음: `tour_yuna_4`

- 캐릭터: `yuna_normal.png`
**{name}**: 여기 올 때마다 시간이 다르게 가는 것 같아.

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
**{name}**: *유나가 가방에서 노트를 꺼낸다. Day 3에서 들켰던 그 노트.*

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
**{name}**: 그때 '결말을 쓰면 끝나니까' 안 쓴다고 했잖아.

---

### `tour_yuna_9`
- 배경: `yuna_hideout.png`
- 다음: `tour_yuna_10`

- 캐릭터: `yuna_normal.png`
**유나**: 끝이 아니라 — 다음 이야기의 시작이면 괜찮을 것 같아서.

---

### `tour_yuna_10`
- 배경: `yuna_hideout.png`
- 다음: `tour_yuna_11`

- 캐릭터: `yuna_shy.png`
**{name}**: *노트를 내민다. 손이 살짝 떨린다. — 유나가 자기 글을 누군가에게 직접 건네는 건 이번이 처음이다.*

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
**유나**: *유나와 도서관에 서 있다. 마지막 점심시간.*

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
- 다음: `tour_dain_2`

- 캐릭터: `없음`
**{name}**: *체육관. Day 1에서 처음 내기를 하고, Day 4에서 마지막 스파이크를 쳤던 곳. — 오늘은 불이 켜져 있다.*

---

### `tour_dain_1b`
- 배경: `gym.png`
- 다음: `tour_dain_2`

- 캐릭터: `없음`
**{name}**: *체육관. 며칠 사이에 수많은 내기와 스파이크가 오갔던 곳. — 오늘은 불이 켜져 있다.*

---

### `tour_dain_2`
- 배경: `gym.png`
- 다음: `tour_dain_3`

- 캐릭터: `dain_normal.png`
**{name}**: *다인이 코트 한가운데 서 있다. 배구공을 하나 들고.*

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
**다인**: 이번엔 이긴다!!

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
**다인**: ...으아아!! 왜!! 5전 5패다!!

---

### `tour_dain_8`
- 배경: `gym.png`
- 다음: `tour_dain_9`

- 캐릭터: `dain_normal.png`
**{name}**: *화를 내면서도 웃고 있다. — 이게 다인이다. 지면서도 즐거운 사람.*

---

### `tour_dain_9`
- 배경: `gym.png`
- 다음: `tour_dain_10`

- 캐릭터: `dain_normal.png`
**{name}**: *다인이 배구공을 코트에 내려놓는다. 천천히.*

---

### `tour_dain_10`
- 배경: `gym.png`
- 다음: `tour_dain_11`

- 캐릭터: `dain_sad.png`
**다인**: 프로는... 모르겠지만.

---

### `tour_dain_11`
- 배경: `gym.png`
- 다음: `tour_dain_11_ins`

- 캐릭터: `dain_sad.png`
**{name}**: ......

---

### `tour_dain_11_ins`
- 배경: `gym.png`
- 다음: `tour_dain_12`

- 캐릭터: `dain_normal.png`
**다인**: 근데 이상한 게 — 예전엔 배구 없으면 나도 없다고 생각했거든. 근데 지금은 그렇지 않아.

---

### `tour_dain_12`
- 배경: `gym.png`
- 다음: `tour_dain_13`

- 캐릭터: `dain_sad.png`
**다인**: 뭐가 바뀐 건지 모르겠어. — 그냥... 코트 밖에도 내가 있더라.

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
**다인**: *다인이와 체육관에 서 있다. 마지막 점심시간.*

---

### `tour_dain_end_2`
- 배경: `gym.png`
- 다음: `after5_start`

- 캐릭터: `dain_shy.png`
**{name}**: *느낌표 없이 말한다. 근데 이번에는 이별이 아니라 — 시작이다. Day 4의 느낌표 없는 문장과 같은데, 온도가 다르다.*

---

## 5일차 — 방과후 `day5_3_afterschool`

### `after5_start`
- 배경: `school_hallway.png`
- BGM: `sunset1.mp3`
- 분기:
  - [`homeroom_day5`] → `after5_hidden_farewell_1`
  - [`nurse_day5`] → `after5_hidden_farewell_1`
  - [`route_seoyeon`] → `after5_farewell_yuna_check`
  - [기본] → `after5_farewell_seo_1`

- 캐릭터: `없음`
**{name}**: *행사가 끝나가고 있다. 선택하지 않은 두 사람과 자연스럽게 마주친다.*

---

### `after5_hidden_farewell_1`
- 배경: `school.png`
- 다음: `after5_hidden_farewell_2`

- 캐릭터: `없음`
**{name}**: *교문 앞. 멀리서 세 사람이 보인다. 서연이 하은과 걸어가고, 다인이 배구공을 던지며 뛰어가고, 유나가 책을 읽으며 천천히 걷는다.*

---

### `after5_hidden_farewell_2`
- 배경: `school.png`
- 다음: `after5_hidden_farewell_3`

- 캐릭터: `없음`
**{name}**: *아무도 이쪽을 보지 않는다. — 그게 오히려 다행이다. 지금은 누구하고도 눈을 마주칠 자신이 없다.*

---

### `after5_hidden_farewell_3`
- 배경: `school.png`
- 다음: `after5_hidden_farewell_3b`

- 캐릭터: `없음`
**{name}**: *미안하다는 말은 쉽게 못 하겠다. 그 말로 정리되는 마음들이 아니니까. 그냥 마음속으로만, 천천히. 고마웠어.*

---

### `after5_hidden_farewell_3b`
- 배경: `school_back.png`
- 다음: `after5_sunset_1`

- 캐릭터: `없음`
**{name}**: *학교 뒤편으로 걸어갔다.*

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
**{name}**: *서연이 머리카락을 넘기며.*

---

### `after5_farewell_seo_4`
- 배경: `school_hallway.png`
- 제외조건: `route_seoyeon`
- 다음: `after5_farewell_seo_5`

- 캐릭터: `seyoun_normal.png`
**서연**: 뭐, 알고 있었어. 넌 내 계획에 없는 변수였으니까.

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
- 다음: `after5_farewell_seo_6_ins`

- 캐릭터: `seyoun_normal.png`
**서연**: 다음엔 내가 먼저 데려갈 거야.

---

### `after5_farewell_seo_6_ins`
- 배경: `school_hallway.png`
- 다음: `after5_farewell_seo_6_ins2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 돌아서며 손을 흔든다. — Day 1과 같은 동작이다. 뒤돌아보지 않는다.*

---

### `after5_farewell_seo_6_ins2`
- 배경: `school_hallway.png`
- 다음: `after5_farewell_seo_7`

- 캐릭터: `seyoun_normal.png`
**{name}**: *등이 곧다. 완벽하게. — 근데 이번에는, 떨리지 않는다.*

---

### `after5_farewell_seo_7`
- 배경: `school_hallway.png`
- 다음: `after5_farewell_yuna_check`

- 캐릭터: `seyoun_normal.png`
**{name}**: *복도에 혼자 남았다. 서연의 발소리가 멀어진다. — 5일 전에는 저 뒷모습이 벽 같았는데. 지금은 문처럼 느껴진다.*

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

- 캐릭터: `yuna_normal.png`
**유나**: 재밌었어. ...다음 이야기에서 보자.

---

### `after5_farewell_yuna_4`
- 배경: `library_old.png`
- 제외조건: `route_yuna`
- 다음: `after5_farewell_yuna_5`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 돌아선다. 멈추지 않는다.*

---

### `after5_farewell_yuna_5`
- 배경: `library_old.png`
- 다음: `after5_farewell_yuna_5b`

- 캐릭터: `yuna_normal.png`
**{name}**: *'재밌었어'. — 유나가 할 수 있는 가장 큰 말이었을 거다.*

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
- 다음: `after5_farewell_dain_4_ins`

- 캐릭터: `dain_laugh.png`
**다인**: 근데 뭐, 네가 고른 거니까. 다음엔 나한테도 기회 줘야 해!

---

### `after5_farewell_dain_4_ins`
- 배경: `gym.png`
- 다음: `after5_farewell_dain_4_ins2`

- 캐릭터: `dain_laugh.png`
**{name}**: *씩 웃으며 주먹으로 어깨를 툭 친다. — Day 1에서와 같은 힘이다.*

---

### `after5_farewell_dain_4_ins2`
- 배경: `gym.png`
- 다음: `after5_farewell_dain_4_ins3`

- 캐릭터: `dain_normal.png`
**다인**: ...잘 해. 진짜로.

---

### `after5_farewell_dain_4_ins3`
- 배경: `gym.png`
- 다음: `after5_farewell_dain_5`

- 캐릭터: `dain_laugh.png`
**{name}**: *느낌표가 살아 있다. — 다인은 끝까지 다인이다. 그게 이 사람의 강함이다.*

---

### `after5_farewell_dain_5`
- 배경: `gym.png`
- 제외조건: `route_dain`
- 다음: `after5_farewell_dain_5b`

- 캐릭터: `dain_laugh.png`
**{name}**: *씩 웃으며 주먹으로 어깨를 툭 친다. Day 1에서와 같은 힘이다. 느낌표가 살아 있다. 다인은 끝까지 다인이다. 그게 이 사람의 강함이다.*

---

### `after5_farewell_dain_5b`
- 배경: `school_back.png`
- 다음: `after5_sunset_1`

- 캐릭터: `없음`
**{name}**: *체육관을 나서 학교 뒤편으로 향했다.*

---

### `after5_sunset_1`
- 배경: `school_back.png`
- BGM: `confession.mp3`
- 다음: `after5_end`

- 캐릭터: `없음`
**{name}**: *해가 지고 있다. 5일이 끝나간다.*

---

### `after5_end`
- 배경: `school_back.png`
- 다음: `after5_ending_check`

- 캐릭터: `없음`
**{name}**: *석양이 교정을 물들인다. 5일이라는 시간이 이렇게 짧았나. — 마지막 선택의 순간이 다가온다.*

---

### `after5_ending_check`
- 분기:
  - [`homeroom_day5`] → `after5_hidden_route_choice_check`
  - [`nurse_day5`] → `after5_hidden_route_choice_check`
  - [`day3_caught_multiple_dates`] → `ending_start`
  - [`ending_harem`] → `after5_set_harem`
  - [`day4_waited`] → `after5_last_chance_1`
  - [기본] → `ending_start`

<!-- i18n -->

---

### `after5_hidden_route_choice_check`
- 배경: `school_back.png`
- 분기:
  - [`day4_confession_accepted`] → `after5_hidden_route_choice`
  - [기본] → `ending_start`

- 캐릭터: `없음`
**{name}**: *마지막 발걸음이 두 갈래로 갈라진다. 이미 약속한 사람과, 끝내 모른 척하지 못한 마음.*

---

### `after5_hidden_route_choice`
- 배경: `school_back.png`
- 선택지:
  1. "약속했던 사람에게 간다" → `ending_start` | 플래그: `choose_main_over_hidden`
  2. "끝까지 마음에 남은 쪽으로 간다" → `ending_start`

- 캐릭터: `없음`
**{name}**: *어디로 가야 할까. 오늘은 — 내가 정해야 한다.*

---

### `after5_set_harem`
- 배경: `school_back.png`
- 다음: `after5_harem_walk_1`

- 캐릭터: `없음`
**{name}**: *점심때 억지로 웃으며 넘긴 균열이 아직 그대로다. 누구 하나로 끝낼 수 없는 밤이 될 것 같다.*

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
**{name}**: *억지로 덮어 둔 균열을 안은 채, 발걸음은 공원 쪽으로 향했다.*

---

### `after5_last_chance_1`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2`

- 캐릭터: `없음`
**{name}**: *걸음이 멈춘다. 석양이 등 뒤로 길게 그림자를 만든다.*

---

### `after5_last_chance_2`
- 배경: `school_back.png`
- 다음: `after5_last_chance_route_check`

- 캐릭터: `없음`
**{name}**: *전 학교에서도 이랬다. 말하지 못했다. 그리고 후회했다. — 이번에도 그럴 건가?*

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
  - [50+] → `after5_last_chance_2_ins`
  - [기본] → `after5_last_chance_seo_low_1`
- 다음: `after5_last_chance_seo_low_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_last_chance_2_ins`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_ins2`

- 캐릭터: `없음`
**{name}**: *또 도망칠 뻔했다. 전 학교에서처럼. 핸드폰을 주머니에 넣고 아무 말 못 하는 그 순간이 다시 올 뻔했다. — 안 된다. 이번에는.*

---

### `after5_last_chance_2_ins2`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_ins3`

- 캐릭터: `없음`
**{name}**: *다리가 움직인다. 입이 먼저 열린다. 준비한 말 같은 건 없다. — 그냥 몸이 먼저 움직인다.*

---

### `after5_last_chance_2_ins3`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_ins4`

- 캐릭터: `없음`
**{name}**: 서연아.

---

### `after5_last_chance_2_ins4`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_ins5`

- 캐릭터: `없음`
**{name}**: *서연이 돌아본다. 석양을 등지고 있다.*

---

### `after5_last_chance_2_ins5`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_ins6`

- 캐릭터: `seyoun_normal.png`
**서연**: ...늦었어.

---

### `after5_last_chance_2_ins6`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_ins7`

- 캐릭터: `seyoun_normal.png`
**{name}**: *잠깐 침묵. 바람이 머리카락을 날린다. 넘기지 않는다.*

---

### `after5_last_chance_2_ins7`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_ins8`

- 캐릭터: `seyoun_normal.png`
**서연**: 근데 — 안 늦었어. 네가 도망치지 않고 돌아왔으니까.

---

### `after5_last_chance_2_ins8`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_ins9`

- 캐릭터: `seyoun_normal.png`
**{name}**: *새끼손가락을 내민다. Day 4에서 못 잡았던 그 손가락.*

---

### `after5_last_chance_2_ins9`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_ins10`

- 캐릭터: `seyoun_normal.png`
**서연**: 이번엔 잡아.

---

### `after5_last_chance_2_ins10`
- 배경: `school_back.png`
- 다음: `after5_last_chance_choice`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 내민 손끝이 눈앞에 머문다. 지금 말하지 않으면, 또 놓친다.*

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
**서연**: *서연이 돌아본다. 발끝이 반쯤 돌아가 있다. 금방이라도 갈 수 있게.* ...왜.

---

### `after5_last_chance_dain_aff_check`
- 배경: `school_back.png`
- 호감분기: Dain
  - [50+] → `after5_last_chance_2_ins11`
  - [기본] → `after5_last_chance_dain_low_1`
- 다음: `after5_last_chance_dain_low_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_last_chance_2_ins11`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_ins12`

- 캐릭터: `없음`
**{name}**: 다인아.

---

### `after5_last_chance_2_ins12`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_ins13`

- 캐릭터: `없음`
**{name}**: *다인이 뛰어오다가 멈춘다.*

---

### `after5_last_chance_2_ins13`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_ins14`

- 캐릭터: `dain_laugh.png`
**다인**: 야, 진짜?!

---

### `after5_last_chance_2_ins14`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_ins15`

- 캐릭터: `dain_normal.png`
**{name}**: *눈이 커진다. 1초. 2초.*

---

### `after5_last_chance_2_ins15`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_ins16`

- 캐릭터: `dain_shy.png`
**다인**: ...진짜?

---

### `after5_last_chance_2_ins16`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_ins17`

- 캐릭터: `dain_sad.png`
**{name}**: *느낌표가 사라진다. 목소리가 작아진다. — 눈이 차오른다.*

---

### `after5_last_chance_2_ins17`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_ins18`

- 캐릭터: `dain_normal.png`
**다인**: 나 — 기다렸거든. 어제부터. 아니 그저께부터.

---

### `after5_last_chance_2_ins18`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_ins19`

- 캐릭터: `dain_sad.png`
**{name}**: *다인이 괜히 눈가를 문지른다. 웃고 있는데, 금방이라도 울 것 같다.*

---

### `after5_last_chance_2_ins19`
- 배경: `school_back.png`
- 다음: `after5_last_chance_choice`

- 캐릭터: `dain_laugh.png`
**다인**: 그러니까... 말해. 이번엔 끝까지 들을게.

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
**다인**: *다인이 멈추긴 한다. 근데 금방 웃지 못한다.* ...왜.

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

- 캐릭터: `없음`
**{name}**: *유나가 멈춘다. 책을 가슴 쪽으로 끌어안는다. 돌아보는 데 2초쯤 걸린다.*

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
**{name}**: *준비한 말은 없는데, 이상하게 이번엔 도망치고 싶지 않다. 유나는 재촉하지 않는다.*

---

### `after5_last_chance_yuna_5`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_6`

- 캐릭터: `yuna_shy.png`
**유나**: ...이번엔, 듣고 갈게.

---

### `after5_last_chance_yuna_6`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_7`

- 캐릭터: `yuna_normal.png`
**{name}**: *짧은 한마디. 근데 그 말이 등을 민다. 유나가 시선을 피하지 않는다.*

---

### `after5_last_chance_yuna_7`
- 배경: `school_back.png`
- 다음: `after5_last_chance_choice`

- 캐릭터: `없음`
**{name}**: *이 사람한테는 긴 설명보다 한 줄이면 된다. 문제는 — 내 한 줄이다.*

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
**유나**: *유나가 천천히 돌아본다. 책을 끌어안은 팔에 힘이 들어간다.* ...왜.

---

### `after5_last_chance_choice`
- 배경: `school_back.png`
- 선택지:
  1. "이번에는 고백하겠다" → `after5_confess_yes` | 플래그: `day5_confessed`
  2. "...아무 말도 하지 못했다" → `after5_confess_no`

- 캐릭터: `없음`
**{name}**: *지금 아니면 기회 없다.*

---

### `after5_confess_yes`
- 배경: `school_back.png`
- 다음: `after5_confess_yes_2`

- 캐릭터: `없음`
**{name}**: *또 도망칠 뻔했다. 전 학교에서처럼. 핸드폰을 주머니에 넣고 아무 말 못 하는 그 순간이 다시 올 뻔했다. — 안 된다. 이번에는.*

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
**서연**: *나란히 걸어가며.* ...늦었어. 근데 — 안 늦었어. 네가 도망치지 않고 돌아왔으니까.

---

### `after5_confess_react_seo_low`
- 배경: `school_back.png`
- 다음: `after5_confess_fail_walk_1`

- 캐릭터: `seyoun_sad.png`
**서연**: *한참 말이 없다.* ...고마워. 근데 지금은, 그 말만으로 괜찮은 척하면 안 될 것 같아.

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
**다인**: *학교를 나서며.* 야, 진짜?! ...진짜? 나 — 기다렸거든. 어제부터. 아니 그저께부터.

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
**유나**: *나란히 걸었다.* ...알고 있었어. ...읽었으면 됐어.

---

### `after5_confess_react_yuna_call`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_ins`

- 캐릭터: `yuna_normal.png`
**{name}**: 유나.

---

### `after5_confess_react_yuna_ins`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_ins2`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나가 책을 내려놓는다. 표정이 변하지 않는다. — 근데 손이 떨리고 있다.*

---

### `after5_confess_react_yuna_ins2`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_ins3`

- 캐릭터: `yuna_normal.png`
**유나**: ...알고 있었어.

---

### `after5_confess_react_yuna_ins3`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_ins4`

- 캐릭터: `yuna_normal.png`
**{name}**: *쪽지를 건넨다. 접힌 종이. 펼치면 한 줄.*

---

### `after5_confess_react_yuna_ins4`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_ins5`

- 캐릭터: `yuna_shy.png`
**{name}**: *'기다렸어. — 오래.'*

---

### `after5_confess_react_yuna_ins5`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_ins6`

- 캐릭터: `yuna_sad.png`
**{name}**: *한 줄인데 잉크가 번져 있다. — 쓰면서 울었다.*

---

### `after5_confess_react_yuna_ins6`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_ins7`

- 캐릭터: `yuna_normal.png`
**유나**: ...읽었으면 됐어.

---

### `after5_confess_react_yuna_ins7`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_ins8`

- 캐릭터: `yuna_normal.png`
**{name}**: *나란히 걸었다. 아무 말 없이.*

---

### `after5_confess_react_yuna_ins8`
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
**{name}**: *결론이 나지 않은 마음을 안은 채, 발걸음은 공원으로 이어졌다.*

---

### `after5_confess_no`
- 배경: `school_back.png`
- 다음: `after5_confess_no_2`

- 캐릭터: `없음`
**{name}**: *목구멍이 막힌 것처럼 아무 말도 나오지 않는다. 이번에도.*

---

### `after5_confess_no_2`
- 배경: `school_back.png`
- 다음: `after5_confess_no_2b`

- 캐릭터: `없음`
**{name}**: *저녁 바람이 불어온다. 등 뒤의 그림자가 길어진다. — 손에 아무것도 쥐지 못한 채 서 있다.*

---

### `after5_confess_no_2b`
- 배경: `room_my.png`
- 다음: `day5_ending_friend`

- 캐릭터: `없음`
**{name}**: *끝내 돌아서서 집으로 향했다.*

---

## 5일차 — 밤 `day5_4_night`

### `ending_start`
- 배경: `park.png`
- 분기:
  - [`choose_main_over_hidden`] → `ending_affinity_check`
  - [`both_hidden_day5`] → `hidden_dual_route_1`
  - [`homeroom_day5`] → `hidden_perfect_homeroom_check`
  - [`nurse_day5`] → `hidden_perfect_nurse_check`
  - [`day3_caught_multiple_dates`] → `day5_ending_mayhem`
  - [`ending_harem`] → `day5_ending_harem`
  - [`day4_confession_accepted`] → `ending_affinity_check`
  - [`day5_confessed`] → `ending_confessed_aff_check`
  - [`day4_waited`] → `day5_ending_friend`
  - [기본] → `day5_ending_alone`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `hidden_dual_route_1`
- 배경: `park.png`
- 다음: `hidden_dual_route_choice`

- 캐릭터: `없음`
**{name}**: *마지막까지 남은 건 한 사람의 목소리가 아니다. 교실에서 받은 봉투와 손등에 붙은 밴드가 같이 떠오른다.*

---

### `hidden_dual_route_choice`
- 배경: `park.png`
- 선택지:
  1. "원고를 건네준 사람에게 간다" → `hidden_perfect_homeroom_check`
  2. "손등에 답을 남긴 사람에게 간다" → `hidden_perfect_nurse_check`

- 캐릭터: `없음`
**{name}**: *이번엔 그것까지 정해야 한다.*

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
- 다음: `perfect_seo_1_ins`

- 캐릭터: `없음`
**{name}**: *서연의 옥상. 서연이 직접 가꾼 화분 사이에 서 있다.*

---

### `perfect_seo_1_ins`
- 배경: `top_school.png`
- 다음: `perfect_seo_2`

- 캐릭터: `seyoun_cry.png`
**{name}**: *처음으로 이렇게 무너진 서연을 본다. — 울고 있다.*

---

### `perfect_seo_2`
- 배경: `top_school.png`
- 다음: `perfect_seo_3`

- 캐릭터: `seyoun_cry.png`
**{name}**: *눈가가 다 젖어 있다. 그런데도 시선을 피하지 않는다.*

---

### `perfect_seo_3`
- 배경: `top_school.png`
- 다음: `perfect_seo_4`

- 캐릭터: `seyoun_cry.png`
**서연**: ...이런 얼굴, 너한테만 보여줄 거야.

---

### `perfect_seo_4`
- 배경: `top_school.png`
- 다음: `perfect_seo_5`

- 캐릭터: `seyoun_laugh.png`
**서연**: *옥상 바람이 분다.* 졸업해도 여기 올 거야. 이 화분은 네가 있어야 자라거든.

---

### `perfect_seo_5`
- 배경: `ending_perfect_seoyeon.png`
- 다음: `perfect_seo_5_ins`

- 캐릭터: `없음`
**{name}**: *서연이 손을 뻗는다. 새끼손가락이 아니다. 손 전체를.*

---

### `perfect_seo_5_ins`
- 배경: `ending_perfect_seoyeon.png`
- 다음: `perfect_epilogue_1_seo`

- 캐릭터: `없음`
**{name}**: *옥상 바람이 분다.*

---

### `perfect_epilogue_1_seo`
- 배경: `ending_perfect_seoyeon.png`
- 다음: `perfect_epilogue_bridge_seo`

- 캐릭터: `없음`
**{name}**: *모든 선택이 하나의 사람을 향해 있었다. 5일이 아니라, 하루하루가 전부였다.*

---

### `perfect_epilogue_bridge_seo`
- 배경: `ending_perfect_seoyeon.png`
- 다음: `perfect_epilogue_2_seo`

- 캐릭터: `없음`
**시스템**: *에필로그 — 1년 후*

---

### `perfect_epilogue_2_seo`
- 배경: `ending_perfect_seoyeon.png`
- 다음: `perfect_epilogue_3_seo`

- 캐릭터: `없음`
**{name}**: *대학 입학식 날. 핸드폰에 메시지. '오늘도 화분 물 줬어. — 근데 빨리 와.'*

---

### `perfect_epilogue_3_seo`
- 배경: `ending_perfect_seoyeon.png`
- 다음: `perfect_epilogue_4_seo`

- 캐릭터: `없음`
**{name}**: *서연이 달라졌다. 완벽하지 않아도 괜찮다는 걸 안다. 거울 안 보고 웃는 날이 늘었다.*

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
**{name}**: *고백은 했다. 받아들여졌다. 잠깐은 좋았다. — 근데 한 달쯤 지나서, 학교 앞 카페에서 만나자는 연락이 왔다.*

---

### `bitter_seo_2`
- 배경: `cafe.png`
- 다음: `bitter_seo_2_ins`

- 캐릭터: `seyoun_normal.png`
**서연**: ...우리 잘 될 줄 알았는데. 나도 너도, 뭔가 한 발짝씩 부족했던 것 같아.

---

### `bitter_seo_2_ins`
- 배경: `cafe.png`
- 다음: `bitter_seo_3`

- 캐릭터: `seyoun_normal.png`
**{name}**: *카페에서 만난 서연. 안경 너머 시선이 건조하다. 예전의 여유도, 떨림도 없다. 그냥 — 정리하러 온 사람의 눈이다.*

---

### `bitter_seo_3`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_epilogue_1`

- 캐릭터: `없음`
**{name}**: *카페를 나왔다. 비가 내린다. 서연의 안경 너머 시선이 건조했다. 예전의 여유도, 떨림도 없었다. 그냥 — 정리하러 온 사람의 눈이었다.*

---

### `true_seo_1`
- 배경: `seyoun_room.png`
- BGM: `ending.mp3`
- 플래그: `ending_true_love`
- 다음: `true_seo_2`

- 캐릭터: `없음`
**{name}**: *서연의 방. 부모는 외출 중이다. 방은 깔끔하다 — 너무 깔끔하다. 감정이 없는 방.*

---

### `true_seo_2`
- 배경: `seyoun_room.png`
- 다음: `true_seo_3`

- 캐릭터: `없음`
**{name}**: *— 하나만 빼고. 책상 위에 서연이 직접 키운 화분들이 줄지어 있다.*

---

### `true_seo_3`
- 배경: `seyoun_room.png`
- 다음: `true_seo_4`

- 캐릭터: `seyoun_normal.png`
**서연**: 너 앞에선 완벽하지 않아도 될 것 같아.

---

### `true_seo_4`
- 배경: `seyoun_room.png`
- 다음: `true_seo_5`

- 캐릭터: `seyoun_normal.png`
**{name}**: 처음부터 완벽하지 않아도 됐는데.

---

### `true_seo_5`
- 배경: `seyoun_room.png`
- 다음: `true_seo_6`

- 캐릭터: `seyoun_laugh.png`
**서연**: ...알아. 근데 그걸 믿는 데 5일이 걸렸어.

---

### `true_seo_6`
- 배경: `seyoun_room.png`
- 다음: `true_seo_6b`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *서연이 웃는다. 입꼬리가 제멋대로다.*

---

### `true_seo_6b`
- 배경: `seyoun_room.png`
- 다음: `true_seo_7`

- 캐릭터: `seyoun_shy.png`
**서연**: 항상 웃어야 했어. 근데 너 앞에선 그냥 나이고 싶어.

---

### `true_seo_7`
- 배경: `seyoun_room.png`
- 다음: `true_seo_7_ins`

- 캐릭터: `seyoun_shy.png`
**서연**: ...옆에 있어줘.

---

### `true_seo_7_ins`
- 배경: `seyoun_room.png`
- 다음: `true_seo_7b`

- 캐릭터: `seyoun_shy.png`
**{name}**: *서연이 망설이다 새끼손가락을 내민다.*

---

### `true_seo_7b`
- 배경: `seyoun_room.png`
- 다음: `true_seo_8`

- 캐릭터: `seyoun_shy.png`
**{name}**: *나도 손을 뻗는다. 닿기 직전, 서연이 먼저 웃는다.*

---

### `true_seo_8`
- 배경: `seyoun_room.png`
- 다음: `true_seo_bridge`

- 캐릭터: `seyoun_shy.png`
**{name}**: *새끼손가락을 걸었다. Day 1의 습관, Day 4의 약속, 그리고 지금. — 같은 손가락, 세 번째 의미.*

---

### `true_seo_bridge`
- 배경: `ending_true_seoyeon.png`
- 다음: `true_epilogue_1_seo`

- 캐릭터: `없음`
**{name}**: *서연의 약속이 아직 손끝에 남아 있다.*

---

### `true_epilogue_1_seo`
- 배경: `ending_true_seoyeon.png`
- 다음: `true_epilogue_2`

- 캐릭터: `없음`
**{name}**: *5일이었다.*

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
**{name}**: *소설의 마지막 문장: '사라지지 않는 사람이 있었다. 그 사람 덕분에, 나도 사라지지 않기로 했다.'*

---

### `perfect_yuna_5`
- 배경: `ending_perfect_yuna.png`
- 다음: `perfect_epilogue_1_yuna`

- 캐릭터: `없음`
**{name}**: *유나가 자리에서 일어나 안겼다. 아무 말 없이. 깨진 창문으로 달빛이 쏟아지고 — 문신이 새겨진 팔이 허리를 감쌌다. 은발이 어깨에 닿았다. 처음으로 유나의 고른 숨소리가 아지트를 채웠다.*

---

### `perfect_epilogue_1_yuna`
- 배경: `ending_perfect_yuna.png`
- 다음: `perfect_epilogue_bridge_yuna`

- 캐릭터: `없음`
**{name}**: *모든 선택이 하나의 사람을 향해 있었다. 5일이 아니라, 하루하루가 전부였다.*

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
**{name}**: *유나는 여전히 말이 적다. 하지만 문장의 길이가 달라졌다. 나한테만.*

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
**{name}**: *고백은 했다. 받아들여졌다. 잠깐은 좋았다. — 근데 한 달쯤 지나서, 학교 앞 카페에서 만나자는 연락이 왔다.*

---

### `bitter_yuna_2`
- 배경: `library_old.png`
- 다음: `bitter_yuna_3`

- 캐릭터: `yuna_sad.png`
**유나**: ...가끔 생각나. 도서관 냄새 맡으면. 그때 좀 더 말할 걸.

---

### `bitter_yuna_3`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_epilogue_1`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *교문을 나온다. 비가 내린다. — 우편함에 꽂혀 있던 유나의 마지막 쪽지. 짧다. 언제나 그랬듯. 근데 이번에는 짧은 게 아니라, 더 쓸 말이 없는 거다.*

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
- 다음: `true_yuna_2_ins`

- 캐릭터: `yuna_normal.png`
**유나**: 여기 아는 건 나뿐이었는데.

---

### `true_yuna_2_ins`
- 배경: `yuna_hideout.png`
- 다음: `true_yuna_2_ins2`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 다락방의 작은 사다리를 올라간다. 위로 향하는 해치가 있다. — 열리자 바람이 불어온다.*

---

### `true_yuna_2_ins2`
- 배경: `yuna_hideout.png`
- 다음: `true_yuna_2_ins3`

- 캐릭터: `yuna_normal.png`
**{name}**: *다락방 위는 옥상이었다. 도서관 별관의 옥상. — 아무도 모르는 비밀 통로.*

---

### `true_yuna_2_ins3`
- 배경: `yuna_hideout.png`
- 다음: `true_yuna_3`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 난간에 기대어 선다. 별이 보인다.*

---

### `true_yuna_3`
- 배경: `yuna_hideout.png`
- 다음: `true_yuna_4`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 작은 창문을 연다. 별이 보인다.*

---

### `true_yuna_4`
- 배경: `yuna_hideout.png`
- 다음: `true_yuna_5`

- 캐릭터: `yuna_smile.png`
**유나**: 이제 너도.

---

### `true_yuna_5`
- 배경: `yuna_hideout.png`
- 다음: `true_yuna_5_ins`

- 캐릭터: `yuna_smile.png`
**{name}**: 세 번째 별?

---

### `true_yuna_5_ins`
- 배경: `yuna_hideout.png`
- 다음: `true_yuna_6`

- 캐릭터: `yuna_smile.png`
**{name}**: *유나가 잠깐 멈춘다. — 웃는다. 처음 보는, 소리 없는 웃음.*

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
**{name}**: *Day 2의 수수께끼. 세 번째 별. — 유나가 처음부터 나를 보고 있었다는 증거.*

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
**{name}**: *5일이었다.*

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
**{name}**: *느낌표가 없다. 처음으로. — 다인이 배구가 아닌 다른 시작을 말하고 있다.*

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
**{name}**: *다인이 배구공을 코트에 내려놓는다. 돌아서서 웃는다. 느낌표 없는 웃음.*

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
**{name}**: *다인이 자리에서 뛰어올랐다. 준비가 안 됐다. 배구공이 바닥을 굴러갔고 — 노을 진 체육관에 두 사람의 그림자만 남았다.*

---

### `perfect_epilogue_1_dain`
- 배경: `ending_perfect_dain.png`
- 다음: `perfect_epilogue_bridge_dain`

- 캐릭터: `없음`
**{name}**: *모든 선택이 하나의 사람을 향해 있었다. 5일이 아니라, 하루하루가 전부였다.*

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
**{name}**: *다인은 스포츠 해설가가 됐다. 카메라 앞에서도 웃고 있다. 근데 이번에는 진짜 웃음이다.*

---

### `perfect_epilogue_3_dain`
- 배경: `ending_perfect_dain.png`
- 다음: `perfect_epilogue_4_dain`

- 캐릭터: `없음`
**{name}**: *가끔 무릎이 아프다고 한다. 그때마다 옆에 앉아서 아무 말 안 한다. 그게 우리의 방식이다.*

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
**{name}**: *고백은 했다. 받아들여졌다. 잠깐은 좋았다. — 근데 한 달쯤 지나서, 학교 앞 카페에서 만나자는 연락이 왔다.*

---

### `bitter_dain_2`
- 배경: `gym.png`
- 다음: `bitter_dain_3`

- 캐릭터: `dain_normal.png`
**다인**: 재밌었어, 진짜로! ...근데 재밌기만 했던 것 같아. 그게 좀 아쉬워.

---

### `bitter_dain_3`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_dain_3_ins`

- 캐릭터: `없음`
**{name}**: *체육관을 나왔다. 비가 내린다. — 느낌표가 돌아왔지만 마지막 문장에는 없었다. 다인이 마침표로 끝내는 건, 더 이상 함께할 에너지가 남지 않았다는 뜻이다.*

---

### `bitter_dain_3_ins`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_epilogue_1`

- 캐릭터: `없음`
**{name}**: *교문 밖으로 나왔다. 비가 내린다. — 우산은 없다. 벚꽃이 비에 젖어 발밑에 붙어 있다.*

---

### `bitter_epilogue_1`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_epilogue_2`

- 캐릭터: `없음`
**{name}**: *졸업 후. 연락이 뜸해졌다. 한 달에 한 번이 두 달에 한 번이 되고, 읽씹이 일상이 되고, 어느 날 메시지를 보내려다 뭐라고 하지?가 떠올랐을 때 — 끝났다는 걸 알았다.*

---

### `bitter_epilogue_2`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_epilogue_3`

- 캐릭터: `없음`
**{name}**: *5일의 기록은 남았다. 아프지 않다. 다만 — 충분하지 않았다. 서로에게.*

---

### `bitter_epilogue_3`
- 배경: `ending_bittersweet.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── BITTERSWEET END ───

---

### `true_dain_1`
- 배경: `gym.png`
- BGM: `ending.mp3`
- 플래그: `ending_true_love`
- 다음: `true_dain_2`

- 캐릭터: `없음`
**{name}**: *체육관. 어제와 같은 비상등. 매트 위에 나란히 누워 있다.*

---

### `true_dain_2`
- 배경: `gym.png`
- 다음: `true_dain_2b`

- 캐릭터: `없음`
**{name}**: *다인이 {name}의 손을 잡아 — 끌어당겨서 자기 왼쪽 가슴에 댄다. 아무 말 없이.*

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
**{name}**: *손끝에 닿는 박동이 선명하다.*

---

### `true_dain_4`
- 배경: `gym.png`
- 다음: `true_dain_5`

- 캐릭터: `dain_normal.png`
**{name}**: ‹빈›

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
**다인**: *배구공으로 얼굴을 반쯤 가리며* 왜 그렇게 봐... 반칙이잖아.

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
**다인**: 봤거든!! ...근데 계속 봐도 돼.

---

### `true_dain_8b`
- 배경: `gym.png`
- 다음: `true_dain_bridge`

- 캐릭터: `dain_laugh.png`
**{name}**: *느낌표가 돌아왔다. — 근데 이번에는, 진짜 감정의 느낌표다.*

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
**{name}**: *5일이었다.*

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
**{name}**: *근데 돌아보면 — 처음 눈 마주친 그 순간에 이미 끝나 있었던 것 같다. 다만 인정하기까지 5일이 걸렸을 뿐.*

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
**{name}**: *가정이 화목해진 건 아니다. 어머니의 전화는 여전히 차갑고, 거울 앞 연습은 끝나지 않았다. — 다만, 연습 안 한 표정을 보여줄 사람이 생긴 거다. 이제는.*

---

### `true_epilogue_4_yuna`
- 배경: `park.png`
- 다음: `true_epilogue_7`

- 캐릭터: `없음`
**{name}**: *사라진 사람이 돌아온 건 아니다. 선배의 연락처는 여전히 없고, 도서관 구석 자리는 비어 있다. — 다만, 쪽지가 아니라 목소리로 말할 사람이 생긴 거다. 이제는.*

---

### `true_epilogue_4_dain`
- 배경: `park.png`
- 다음: `true_epilogue_7`

- 캐릭터: `없음`
**{name}**: *무릎이 나은 건 아니다. 아침마다 붕대를 감고, 알람 메모에는 여전히 느낌표가 두 개다. — 다만, 마침표로 끝나는 문장을 들어줄 사람이 생긴 거다. 이제는.*

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
**{name}**: *5일이었다. 누군가에게 다가갔고, 다가가지 못했고, 결국 선택하지 못했다.*

---

### `alone_2`
- 배경: `ending_alone.png`
- 다음: `alone_2_ins`

- 캐릭터: `없음`
**{name}**: *전 학교에서는 말하지 못해서 후회했다. 이 학교에서는 — 말할 사람을 찾지 못해서 후회하나? 아니. 찾았는데 고르지 못한 거다. 아니, 고를 용기가 없었던 거다.*

---

### `alone_2_ins`
- 배경: `ending_alone.png`
- 다음: `alone_3`

- 캐릭터: `없음`
**{name}**: *방 안이 이상할 만큼 조용하다. 아까까지 귓가에 남아 있던 목소리들도, 문 닫히는 소리와 함께 멀어진다.*

---

### `alone_3`
- 배경: `ending_alone.png`
- 다음: `alone_4`

- 캐릭터: `없음`
**{name}**: *창밖으로 벚꽃이 진다. 5일 전에 코끝을 스쳤던 그 벚꽃이 지금은 바람에 날려 사라지고 있다.*

---

### `alone_4`
- 배경: `ending_alone.png`
- 다음: `alone_5`

- 캐릭터: `없음`
**{name}**: *...혼자라는 건 벌이 아니다. 다만 — 조용하다. 생각보다 많이.*

---

### `alone_5`
- 배경: `ending_alone.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── ALONE END ───

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

### `day5_ending_good`
- 배경: `park.png`
- BGM: `night2.mp3`
- 다음: `good_1`

- 캐릭터: `없음`
**{name}**: *좋아한다는 말 하나로 모든 게 풀리진 않았다. 그래도 끝내지 않기로 했다.*

---

### `good_1`
- 배경: `park.png`
- 다음: `good_1b`

- 캐릭터: `없음`
**{name}**: *서툴렀고, 늦었고, 몇 번은 엇갈렸다.*

---

### `good_1b`
- 배경: `park.png`
- 다음: `good_1c`

- 캐릭터: `없음`
**{name}**: *그래도 이번에는 같은 방향을 본다.*

---

### `good_1c`
- 배경: `park.png`
- 분기:
  - [`route_dain`] → `good_1_dain`
  - [`route_yuna`] → `good_1_yuna`
  - [`route_seoyeon`] → `good_1_seo`
  - [기본] → `good_1_seo`

- 캐릭터: `없음`
**{name}**: *완벽한 해피엔딩은 아니어도, 여기서부터 다시 시작할 수는 있다.*

---

### `good_1_seo`
- 배경: `park.png`
- 다음: `good_1_seo_ins`

- 캐릭터: `seyoun_normal.png`
**서연**: 완벽하진 않아. 너도 나도. ...근데 이번엔 중간에 놓진 마.

---

### `good_1_seo_ins`
- 배경: `park.png`
- 다음: `good_1_seo_ins2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 벚꽃잎을 떼어내듯 내 소매 끝을 한번 정리해 준다. 퉁명스러운 손길인데, 밀어내는 손은 아니다.*

---

### `good_1_seo_ins2`
- 배경: `park.png`
- 다음: `good_1_seo_ins3`

- 캐릭터: `seyoun_normal.png`
**{name}**: *말은 짧다. 대신 발걸음이 맞는다. 그걸로 오늘은 충분하다고 생각했다.*

---

### `good_1_seo_ins3`
- 배경: `park.png`
- 다음: `good_2_seo`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연과의 사이는 이제 겨우 모양을 잡기 시작했다. 불안정하지만, 끊기지 않았다.*

---

### `good_2_seo`
- 배경: `park.png`
- 다음: `good_3_seo`

- 캐릭터: `seyoun_normal.png`
**{name}**: *벚꽃길 끝. 서연이 반 걸음 앞에서 멈춘다. 돌아보는 눈빛이 예전보다 덜 날카롭다.*

---

### `good_3_seo`
- 배경: `park.png`
- 다음: `good_4_seo`

- 캐릭터: `seyoun_normal.png`
**{name}**: *"...왜 안 와." 작게 투덜대면서도, 기다려 준 사람의 속도였다.*

---

### `good_4_seo`
- 배경: `park.png`
- 다음: `good_5_seo`

- 캐릭터: `seyoun_normal.png`
**{name}**: *나는 웃었고, 서연은 못 본 척하다가 입꼬리를 아주 조금 올렸다.*

---

### `good_5_seo`
- 배경: `ending_good_seoyeon.png`
- 다음: `good_epilogue_1`

- 캐릭터: `없음`
**{name}**: *벚꽃길 끝을 지나 천천히 걸어 나가며 생각했다. 내년 봄에도 이 길을 같이 걷고 싶다. 이번엔 그렇게 말할 수 있었다.*

---

### `good_epilogue_1`
- 배경: `ending_good_seoyeon.png`
- 다음: `good_epilogue_2`

- 캐릭터: `없음`
**{name}**: *흔들렸으니까 알았다. 진짜 마음이 뭔지.*

---

### `good_epilogue_2`
- 배경: `ending_good_seoyeon.png`
- 다음: `good_epilogue_3`

- 캐릭터: `없음`
**{name}**: *돌아간 것 같았는데, 결국 여기였다.*

---

### `good_epilogue_3`
- 배경: `ending_good_seoyeon.png`
- 다음: `good_5_cg_seo`

- 캐릭터: `없음`
**{name}**: *서툴러도 괜찮다. 처음이니까.*

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
- 다음: `good_1_yuna_b_ins`

- 캐릭터: `yuna_smile.png`
**{name}**: *유나가 접힌 쪽지를 건넨다. 펼치면 한 줄이다. '다음에는 사라지지 마.'*

---

### `good_1_yuna_b_ins`
- 배경: `park.png`
- 다음: `good_2_yuna`

- 캐릭터: `yuna_smile.png`
**{name}**: *짧은 문장인데, 이번엔 부탁처럼 읽혔다.*

---

### `good_2_yuna`
- 배경: `yuna_hideout.png`
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
**{name}**: *대역이 아니라, 지금 여기 있는 사람으로 기억되고 싶다. 유나도, 나도.*

---

### `good_5_yuna`
- 배경: `ending_good_yuna.png`
- 다음: `good_epilogue_1_yuna`

- 캐릭터: `없음`
**{name}**: *옥상 문을 나서 계단을 내려오면서도 생각은 같았다. 시간이 더 걸려도 괜찮다. 이번엔 끝까지 읽고, 끝까지 말할 생각이다.*

---

### `good_epilogue_1_yuna`
- 배경: `ending_good_yuna.png`
- 다음: `good_epilogue_2_yuna`

- 캐릭터: `없음`
**{name}**: *흔들렸으니까 알았다. 진짜 마음이 뭔지.*

---

### `good_epilogue_2_yuna`
- 배경: `ending_good_yuna.png`
- 다음: `good_epilogue_3_yuna`

- 캐릭터: `없음`
**{name}**: *돌아간 것 같았는데, 결국 여기였다.*

---

### `good_epilogue_3_yuna`
- 배경: `ending_good_yuna.png`
- 다음: `good_5_cg_yuna`

- 캐릭터: `없음`
**{name}**: *서툴러도 괜찮다. 처음이니까.*

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
**다인**: 야, 아직 완전 안 풀린 건 맞아. ...근데 너한테 다시 공 던질 정도는 됐거든.

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
**{name}**: *받았다. 다인은 그걸 보고서야 웃는다. 화해는 늘 이 사람답게 온다.*

---

### `good_4_dain`
- 배경: `school.png`
- 다음: `good_5_dain`

- 캐릭터: `dain_laugh.png`
**{name}**: *무릎은 아직 아프고, 마음도 완전히 정리된 건 아니다. 그래도 같이 뛰어볼 수는 있다.*

---

### `good_5_dain`
- 배경: `ending_good_dain.png`
- 다음: `good_epilogue_1_dain`

- 캐릭터: `없음`
**{name}**: *교문을 지나 함께 걸어 나가며, 마지막 서브는 이미 넘어왔다는 생각이 들었다. 이제는 내가 받아낼 차례다.*

---

### `good_epilogue_1_dain`
- 배경: `ending_good_dain.png`
- 다음: `good_epilogue_2_dain`

- 캐릭터: `없음`
**{name}**: *흔들렸으니까 알았다. 진짜 마음이 뭔지.*

---

### `good_epilogue_2_dain`
- 배경: `ending_good_dain.png`
- 다음: `good_epilogue_3_dain`

- 캐릭터: `없음`
**{name}**: *돌아간 것 같았는데, 결국 여기였다.*

---

### `good_epilogue_3_dain`
- 배경: `ending_good_dain.png`
- 다음: `good_5_cg_dain`

- 캐릭터: `없음`
**{name}**: *서툴러도 괜찮다. 처음이니까.*

---

### `good_5_cg_dain`
- 배경: `ending_good_dain.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── GOOD END ───

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
**{name}**: ‹빈›

---

### `confess_fail_cg_yuna`
- 배경: `ending_confess_fail_yuna.png`
- 다음: `confess_fail_1`

- 캐릭터: `없음`
**{name}**: ‹빈›

---

### `confess_fail_cg_dain`
- 배경: `ending_confess_fail_dain.png`
- 다음: `confess_fail_1`

- 캐릭터: `없음`
**{name}**: ‹빈›

---

### `confess_fail_1`
- 배경: `ending_bittersweet.png`
- 다음: `confess_fail_2`

- 캐릭터: `없음`
**{name}**: *몇 걸음이나 걸어 나온 뒤에도, 그 말이 귓가에 남아 있다. "...고마워. 진짜로. 근데 나는 아직 — 5일은 너무 짧았나 봐."*

---

### `confess_fail_2`
- 배경: `ending_bittersweet.png`
- 다음: `confess_fail_3`

- 캐릭터: `없음`
**{name}**: *거절이 아니다. 타이밍이다. — 충분히 다가가지 못한 5일이 만든 결과.*

---

### `confess_fail_3`
- 배경: `ending_bittersweet.png`
- 다음: `confess_fail_4`

- 캐릭터: `없음`
**{name}**: *좋아한 마음이 가짜였던 건 아니다. 다만 그 마음이 닿기엔, 우리는 아직 서로를 너무 적게 알았다.*

---

### `confess_fail_4`
- 배경: `ending_bittersweet.png`
- 다음: `confess_fail_5`

- 캐릭터: `없음`
**{name}**: *이번 실패가 예전과 다른 건 하나다. 적어도 이번에는 말했고, 그래서 정말로 끝낼 수 있다.*

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
**{name}**: *좋아한다고 말할 수 있었던 순간은 분명 있었는데, 나는 또 가장 안전한 표정을 골랐다.*

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
**{name}**: *교문을 나서는데 핸드폰에 메시지가 와 있다. '오늘 고마웠어 ㅋㅋ' — 친구의 말투다. 완벽한 친구의 말투.*

---

### `friend_4_seo`
- 배경: `school.png`
- 다음: `friend_5`

- 캐릭터: `없음`
**{name}**: *교문을 나서는데 핸드폰에 메시지가 와 있다. '오늘 덕분에 덜 어색했어. 잘 들어가.' — 다정한 문장인데 틈이 없다. 선을 고르고, 정확히 지킨 말투다.*

---

### `friend_4_yuna`
- 배경: `school.png`
- 다음: `friend_5`

- 캐릭터: `없음`
**{name}**: *교문을 나서는데 핸드폰에 메시지가 와 있다. '...오늘. 고마웠어.' 짧다. 마침표가 붙어 있다. 예전 같으면 설렜을 문장인데, 지금은 선처럼 느껴진다.*

---

### `friend_4_dain`
- 배경: `school.png`
- 다음: `friend_5`

- 캐릭터: `없음`
**{name}**: *교문을 나서는데 핸드폰에 메시지가 와 있다. '야 조심히 가! 오늘 고마웠다!' 느낌표가 돌아왔다. 다행인데 — 이상하게 더 서늘하다. 친구한테 보내는 느낌표라서.*

---

### `friend_5`
- 배경: `park.png`
- 다음: `friend_6`

- 캐릭터: `없음`
**{name}**: *답장을 쳤다. '나도 고마워.' — 보내고 나서 화면을 본다. 두 줄의 대화. 웃고 있는데, 가슴이 서늘하다.*

---

### `friend_6`
- 배경: `park.png`
- 다음: `friend_7`

- 캐릭터: `없음`
**{name}**: *앞으로도 이렇게 메시지를 주고받겠지. 이모티콘 붙이고, 가끔 밥 먹고, 별일 없냐고 물으면 없다고 답하겠지. — 바로 옆인데 넘지 못하는 선. 그게 친구다.*

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
**{name}**: *졸업식 날. 핸드폰 갤러리를 넘긴다. 3년 전 소정이의 사진이 있던 자리에, 이제는 그녀와 다 같이 찍은 단체 사진이 있다.*

---

### `friend_9`
- 배경: `ending_friend.png`
- 다음: `friend_10`

- 캐릭터: `없음`
**{name}**: *나는 또 그 사람의 옆자리에 서서, 친구라는 완벽한 가면을 쓴 채 웃고 있다.*

---

### `friend_10`
- 배경: `ending_friend.png`
- 다음: `friend_11`

- 캐릭터: `없음`
**{name}**: *메모장을 켠다. '나 할 말이 있는데.' — 커서가 깜빡인다. 3년 전처럼. 백스페이스를 꾹 눌러 글자를 지운다.*

---

### `friend_11`
- 배경: `ending_friend.png`
- 다음: `friend_12`

- 캐릭터: `없음`
**{name}**: *전학을 와도, 도망쳐도 — 결국 나는 아무것도 변하지 않았다.*

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
**{name}**: *셋 다 좋았다. 진심이었다. — 그래서 아무도 선택하지 못했다.*

---

### `mayhem_1`
- 배경: `ending_mayhem.png`
- 다음: `mayhem_2`

- 캐릭터: `없음`
**{name}**: *서연이 복도에서 나를 스쳐 지나갔다. 고개를 돌리지 않았다. — 당연하다.*

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
**{name}**: *다인이 웃고 있었다. 평소처럼 밝게. — 근데 느낌표가 없었다. 잘 지내. 마침표로 끝나는 다인의 문장을 처음 들은 게 하필 이별이었다.*

---

### `mayhem_4`
- 배경: `ending_mayhem.png`
- 다음: `mayhem_5`

- 캐릭터: `없음`
**{name}**: *세 사람의 등을 봤다. 셋 다 돌아보지 않았다. — 그게 답이었다.*

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
**{name}**: *좋다는 말만으로는 아무것도 지킬 수 없다는 걸, 너무 늦게 배웠다.*

---

### `mayhem_7`
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
**{name}**: *전부 좋아해. — 그 말이 입에서 나왔을 때, 세 사람의 표정이 동시에 얼어붙었다.*

---

### `harem_1`
- 배경: `ending_harem.png`
- 다음: `harem_1_ins`

- 캐릭터: `없음`
**{name}**: *서연이 먼저 웃었다. ...그래. 솔직하네. 웃음 뒤에 이가 갈리는 소리가 들린 건 착각이 아니었다.*

---

### `harem_1_ins`
- 배경: `ending_harem.png`
- 다음: `harem_2`

- 캐릭터: `없음`
**{name}**: *유나가 고개를 숙였다. 한참을. 그리고 올려다봤을 때 눈이 마른 채로 웃고 있었다. ...멍청해. 그 한마디에 두 문장 분량의 감정이 들어 있었다.*

---

### `harem_2`
- 배경: `ending_harem.png`
- 다음: `harem_3`

- 캐릭터: `없음`
**유나**: ...멍청해.

---

### `harem_3`
- 배경: `ending_harem.png`
- 다음: `harem_4`

- 캐릭터: `없음`
**{name}**: *다인이 주먹으로 내 어깨를 쳤다. 아팠다. 야, 미친 거 아냐? ...근데 네가 그런 사람인 거 알면서 좋아한 건 나잖아. 씁.*

---

### `harem_4`
- 배경: `ending_harem.png`
- 다음: `harem_5`

- 캐릭터: `없음`
**{name}**: *월요일은 서연. 수요일은 유나. 금요일은 다인. 사이사이에 들키지 않기 위한 거짓말이 쌓인다. 달콤한 줄 알았는데 — 목을 조여온다.*

---

### `harem_5`
- 배경: `ending_harem.png`
- 다음: `harem_6`

- 캐릭터: `없음`
**{name}**: *이 균형은 반드시 깨진다. 누군가 먼저 울게 된다. 그때 이 이야기는 로맨스가 아니라 — 참사가 된다.*

---

### `harem_6`
- 배경: `ending_harem.png`
- 다음: `harem_7`

- 캐릭터: `없음`
**{name}**: *그래도 오늘은 세 사람이 웃고 있다. 내일의 파국을 알면서도 — 오늘을 놓지 못한다.*

---

### `harem_7`
- 배경: `ending_harem.png`
- 다음: `harem_8`

- 캐릭터: `없음`
**{name}**: *행복한 척은 할 수 있다. 하지만 이 미래의 끝이 좋을 거라고는, 나도 믿지 못한다.*

---

### `harem_8`
- 배경: `ending_harem.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── HAREM END ───

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
**담임선생님**: *잠깐 멈춘다. 뭔가 더 말하려다 입을 닫는다.* ...잘 지내.

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
**담임선생님**: *피식 웃는다.* 학교 그만두고 글만 쓰고 있어. 카페 알바도 하고. — 넌?

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
**{name}**: *그 '다음'이 다다음이 되고, 또 그다음이 됐다. 목요일마다 같은 자리. 카페 직원이 '커플석이에요?' 물었을 때 둘 다 대답을 못 했다. 어느 목요일. 카페 대신 거리를 걸었다. 나란히. 그림자가 겹치는 걸 둘 다 모른 척했다.*

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
**{name}**: *집으로 돌아와 원고를 읽었다. 밤새. — 주인공이 하는 말투가 익숙했다. 너무.*

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
**{name}**: *꽃다발을 건넸다.* 이거 교육적 관심 아닙니다. 제 쪽은요.

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

<!-- i18n -->

---

### `hidden_perfect_homeroom_ep1`
- 배경: `ending_perfect_teacher.png`
- 다음: `hidden_perfect_homeroom_ep2`

- 캐릭터: `없음`
**{name}**: *그날 카페에서 나가지 않았다. 해가 질 때까지. — 4년 전 교실에서 못 꺼낸 말들을 전부 꺼냈다.*

---

### `hidden_perfect_homeroom_ep2`
- 배경: `ending_perfect_teacher.png`
- 다음: `hidden_perfect_homeroom_ep3`

- 캐릭터: `없음`
**{name}**: *목요일의 카페는 우리 카페가 됐다. 직원이 더 이상 '커플석이에요?' 안 물어본다. 그냥 자리로 안내한다.*

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
**{name}**: *가끔 '선생님이었는데' 하면 '학생이었는데' 하고 받는다. 둘 다 웃는다. — 지금은 그냥 두 사람이니까.*

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
- 다음: `hidden_true_homeroom_2_ins`

- 캐릭터: `teacher_normal.png`
**{name}**: *빈 교실. 원고를 쓰던 그 교실. — 담임선생님이 기다리고 있다.*

---

### `hidden_true_homeroom_2_ins`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *교실 끝 창가에 기대 서 있다. 수업도, 업무도 없는 얼굴이다.*

---

### `hidden_true_homeroom_3`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_3_ins`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 졸업 축하해.

---

### `hidden_true_homeroom_3_ins`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_3_ins2`

- 캐릭터: `teacher_normal.png`
**{name}**: 감사합니다.

---

### `hidden_true_homeroom_3_ins2`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...그 말.

---

### `hidden_true_homeroom_4`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_4_ins`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...그 말. '선생님'이라고 안 했네. 처음으로.

---

### `hidden_true_homeroom_4_ins`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_4_ins2`

- 캐릭터: `teacher_normal.png`
**{name}**: *무의식이었다. — 졸업한 순간, 직함이 벗겨졌다.*

---

### `hidden_true_homeroom_4_ins2`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_4_ins3`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 봉투를 꺼낸다. 이번에는 갈색 봉투가 아니라 — 흰 봉투.*

---

### `hidden_true_homeroom_4_ins3`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_4_ins4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 원고 완성했어. — 네가 첫 번째 독자라서 쓸 수 있었어.

---

### `hidden_true_homeroom_4_ins4`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_4_ins5`

- 캐릭터: `teacher_normal.png`
**{name}**: 제 감상문이 도움이 됐어요?

---

### `hidden_true_homeroom_4_ins5`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_4_ins6`

- 캐릭터: `teacher_normal.png`
**담임선생님**: '한 줄이라도'라고 했는데 세 장을 써왔잖아. *피식* 문예창작과 출신 교사가 학생한테 감상문 받고 울 뻔한 건 비밀이야.

---

### `hidden_true_homeroom_4_ins6`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_4_ins7`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임이 창밖을 본다. 벚꽃이 지고 있다.*

---

### `hidden_true_homeroom_4_ins7`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *창밖을 보다 돌아서며* ...한 마디만.

---

### `hidden_true_homeroom_5`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_5_ins`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 원고 완성했어. — 네가 첫 번째 독자라서 쓸 수 있었어. '한 줄이라도'라고 했는데 세 장을 써왔잖아. *피식* 문예창작과 출신 교사가 학생한테 감상문 받고 울 뻔한 건 비밀이야.

---

### `hidden_true_homeroom_5_ins`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_5_ins2`

- 캐릭터: `teacher_normal.png`
**{name}**: *시간이 흘렀다. 원고를 읽고, 감상문을 건네고, 서로 말끝을 삼키던 날들이 지나고 — 졸업식 날.*

---

### `hidden_true_homeroom_5_ins2`
- 배경: `room_school.png`
- 다음: `hidden_true_homeroom_6`

- 캐릭터: `teacher_normal.png`
**{name}**: *교복은 이제 더 이상 뻣뻣하지 않다. 아니, 오늘 벗는 날이다.*

---

### `hidden_true_homeroom_6`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_6_ins`

- 캐릭터: `teacher_shy.png`
**담임선생님**: ...한 마디만. ...커피 마시러 가자. 이번엔 주스 말고 커피.

---

### `hidden_true_homeroom_6_ins`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_7`

- 캐릭터: `teacher_shy.png`
**{name}**: *주스에서 커피로. — 학생에서 어른으로. 선을 넘는 게 아니라, 선이 사라진 거다.*

---

### `hidden_true_homeroom_7`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_7_ins`

- 캐릭터: `teacher_shy.png`
**{name}**: 좋아요.

---

### `hidden_true_homeroom_7_ins`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_7_ins2`

- 캐릭터: `teacher_shy.png`
**{name}**: *담임이 웃는다. 건조하지 않은, 7년의 미완성 원고를 완성한 사람의 웃음.*

---

### `hidden_true_homeroom_7_ins2`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_7_ins3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...선생님이 이러면 안 되는데. *— 말끝이 흐려진다. 그리고 웃는다.*

---

### `hidden_true_homeroom_7_ins3`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_8`

- 캐릭터: `teacher_normal.png`
**{name}**: *마지막 한 번. 그리고 고쳐지는 습관. — 7년간의 '선생님'이 끝나고, 이름을 부르는 날이 왔다.*

---

### `hidden_true_homeroom_8`
- 배경: `ending_true_teacher.png`
- 다음: `hidden_true_homeroom_ending_title`

- 캐릭터: `없음`
**담임선생님**: ...선생님이 이러면 안 되는데.

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
**{name}**: *학교를 나서며. '원고 완성하면 연락할게. — 첫 번째 독자에게.' 전화번호가 적혀 있다.*

---

### `hidden_good_homeroom_4`
- 배경: `ending_good_teacher.png`
- 다음: `hidden_good_homeroom_ending_title`

- 캐릭터: `없음`
**{name}**: *선생님의 손이 — 3초쯤 더 길게 잡혀 있었다. 악수치고는 길고, 고백치고는 짧은.*

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
**보건선생님**: *문을 열어준 사람은 보건실에서보다 훨씬 편한 얼굴이다.* ...왔네. 진짜 올 줄은.

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
**보건선생님**: *기대온다.* ...이제 핑계 안 대도 돼. 환자도 아니고, 학생도 아니니까.

---

### `hidden_perfect_nurse_4`
- 배경: `nurse_home_event1.png`
- 다음: `hidden_perfect_nurse_4b`

- 캐릭터: `없음`
**보건선생님**: *손이 올라와 넥타이를 잡는다. 장난기가 아니다. 눈이 진지하다.* ...오늘은 안 돌려보낼 거야.

---

### `hidden_perfect_nurse_4b`
- 배경: `ending_perfect_nurse.png`
- 다음: `hidden_perfect_nurse_5`

- 캐릭터: `없음`
**{name}**: *아침. 커튼 사이로 빛이 들어온다. 옆에서 숨소리가 들린다. — 밴드 하나 붙이는 데 3분 걸리던 사람이, 지금은 내 손을 잡은 채 자고 있다.*

---

### `hidden_perfect_nurse_5`
- 배경: `ending_perfect_nurse.png`
- 다음: `hidden_perfect_nurse_5b`

- 캐릭터: `없음`
**보건선생님**: *눈을 뜬다. 웃는다.* ...어디 아파? 내가 봐줄까? *— 장난이 아니다. 이번엔.*

---

### `hidden_perfect_nurse_5b`
- 배경: `ending_perfect_nurse.png`
- 다음: `hidden_perfect_nurse_ending_title`

- 캐릭터: `없음`
**{name}**: *그냥 — 있고 싶은 사람. 여기에.*

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
**{name}**: *아침. 식탁에 밴드가 붙어 있다. 오늘의 메뉴가 적혀 있다. — 이 사람의 포스트잇이다.*

---

### `hidden_perfect_nurse_ep2`
- 배경: `ending_perfect_nurse.png`
- 다음: `hidden_perfect_nurse_ep3`

- 캐릭터: `없음`
**{name}**: *대학병원에 복직했다. 이번에는 환자들이 이름을 불러준다. — 이주원 선생님.*

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
**{name}**: *밴드는 아직 서랍에 있다. 쓸 일이 없어도. — 핑계가 필요 없어진 사람은, 그래도 습관을 버리지 못한다.*

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
- 다음: `hidden_true_nurse_2_ins`

- 캐릭터: `nurse_normal.png`
**{name}**: *'졸업 축하해. 카페에서 기다릴게.' — 밴드를 떼니 안쪽에 작은 약도가 있다. 카페에 보건선생님이 앉아 있다. 보건실에서 마주하던 때보다 훨씬 편한 얼굴이다. 그냥 — 나를 기다리던 사람처럼.*

---

### `hidden_true_nurse_2_ins`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_2_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: *선생님이 아니라 그냥 — 여자다.*

---

### `hidden_true_nurse_2_ins2`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_2_ins3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 졸업 축하해.

---

### `hidden_true_nurse_2_ins3`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_3`

- 캐릭터: `nurse_normal.png`
**{name}**: 감사합니다.

---

### `hidden_true_nurse_3`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_3_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 졸업 축하해. ...오늘부터 존댓말 안 해도 돼.

---

### `hidden_true_nurse_3_ins`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_4`

- 캐릭터: `nurse_normal.png`
**{name}**: 왜요?

---

### `hidden_true_nurse_4`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 있잖아. Day 1에 네가 보건실에 왔을 때. 이마 만지면서 '만져보고 싶었다'고 했잖아. 농담이었거든.

---

### `hidden_true_nurse_5`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: ...근데 지금은 농담이 아니야.

---

### `hidden_true_nurse_5_ins`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: *목소리가 한 톤 낮아졌다. 장난기가 완전히 사라졌다. — 이게 이 사람의 진심이다.*

---

### `hidden_true_nurse_5_ins2`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5_ins3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 선생님이 학생한테 감정이 생기면 안 되잖아. 알고 있었어. — 그래서 농담으로 포장했어. 계속.

---

### `hidden_true_nurse_5_ins3`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5_ins4`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 근데 너는 농담 뒤에 진심이 있다는 걸 알아챘잖아.

---

### `hidden_true_nurse_5_ins4`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5_ins5`

- 캐릭터: `nurse_normal.png`
**{name}**: 밴드 붙이는 데 3분 걸리는 건 정성이 아니잖아요.

---

### `hidden_true_nurse_5_ins5`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_6`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 잠깐 멈춘다. — 그리고 웃는다. 장난이 아닌 웃음.*

---

### `hidden_true_nurse_6`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_7`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그래서 졸업식 끝나면 — 그때 다시 와. 보건실 말고 여기로. 그때는 선생님이 아니라 나로 만나자.

---

### `hidden_true_nurse_7`
- 배경: `nurse_home_event1.png`
- 다음: `hidden_true_nurse_7_ins`

- 캐릭터: `없음`
**{name}**: *카페 문을 나선 뒤에도 손이 쉽게 떨어지지 않았다. 정신을 차리고 보니, 보건실이 아닌 선생님의 집 앞이었다.*

---

### `hidden_true_nurse_7_ins`
- 배경: `nurse_home_event1.png`
- 다음: `hidden_true_nurse_7_ins2`

- 캐릭터: `없음`
**보건선생님**: ...들킨 건 네가 처음이야.

---

### `hidden_true_nurse_7_ins2`
- 배경: `nurse_home_event1.png`
- 다음: `hidden_true_nurse_7_ins3`

- 캐릭터: `없음`
**{name}**: *보건선생님이 손을 뻗어 내 손등의 밴드를 만진다. 아침에 붙여준 그 밴드.*

---

### `hidden_true_nurse_7_ins3`
- 배경: `nurse_home_event1.png`
- 다음: `hidden_true_nurse_8`

- 캐릭터: `없음`
**{name}**: *핑계가 필요했던 사람. — 선생님이라는 직함이 핑계이자 벽이었다. 그 벽이 오늘 사라졌다.*

---

### `hidden_true_nurse_8`
- 배경: `ending_true_nurse.png`
- 다음: `hidden_true_nurse_ending_title`

- 캐릭터: `없음`
**보건선생님**: 이제는 아픈 척 안 해도 와. — 그게 더 좋으니까.

---

### `hidden_true_nurse_ending_title`
- 배경: `ending_true_nurse.png`
- 다음: `hidden_true_nurse_8_ins`

- 캐릭터: `없음`
**—**: ─── 보건선생님 TRUE LOVE END ───

---

### `hidden_true_nurse_8_ins`
- 배경: `ending_true_nurse.png`
- 다음: `hidden_true_nurse_8_ins2`

- 캐릭터: `없음`
**보건선생님**: *커피잔을 돌리며* 졸업장 효력, 생각보다 빠르네.

---

### `hidden_true_nurse_8_ins2`
- 배경: `ending_true_nurse.png`
- 다음: `hidden_true_nurse_8_ins3`

- 캐릭터: `없음`
**{name}**: *졸업이라는 날짜가 선을 지운다. — 보건실이 아닌 카페에서, 선생님이 아닌 사람과.*

---

### `hidden_true_nurse_8_ins3`
- 배경: `ending_true_nurse.png`
- 다음: `hidden_true_nurse_8_ins4`

- 캐릭터: `없음`
**{name}**: *보건선생님이 나를 본다. 장난기가 없다.*

---

### `hidden_true_nurse_8_ins4`
- 배경: `ending_true_nurse.png`
- 다음: `hidden_true_nurse_8_ins5`

- 캐릭터: `없음`
**보건선생님**: 있잖아. Day 1에 네가 보건실에 왔을 때.

---

### `hidden_true_nurse_8_ins5`
- 배경: `ending_true_nurse.png`
- 다음: `hidden_true_nurse_8_ins6`

- 캐릭터: `없음`
**{name}**: 어지러워서요.

---

### `hidden_true_nurse_8_ins6`
- 배경: `ending_true_nurse.png`
- 다음: `hidden_true_nurse_8_ins7`

- 캐릭터: `없음`
**보건선생님**: 그때 이마 만지면서 '만져보고 싶었다'고 했잖아. 농담이었거든.

---

### `hidden_true_nurse_8_ins7`
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
**보건선생님**: 아, 졸업생.

---

### `hidden_good_nurse_2`
- 배경: `nurse_room.png`
- 다음: `hidden_good_nurse_2_ins`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 비타민. — 대학 가면 건강 관리 잘해. ...의료적 관심. 이번에는 진짜로.

---

### `hidden_good_nurse_2_ins`
- 배경: `nurse_room.png`
- 다음: `hidden_good_nurse_2_ins2`

- 캐릭터: `nurse_normal.png`
**{name}**: 의료적 관심이에요?

---

### `hidden_good_nurse_2_ins2`
- 배경: `nurse_room.png`
- 다음: `hidden_good_nurse_2_ins3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *잠깐 멈추며* ...그래. 의료적 관심. *작게* 이번에는 진짜로.

---

### `hidden_good_nurse_2_ins3`
- 배경: `nurse_room.png`
- 다음: `hidden_good_nurse_3`

- 캐릭터: `nurse_normal.png`
**{name}**: *'이번에는 진짜로'. — 그동안은 아니었다는 뜻이다.*

---

### `hidden_good_nurse_3`
- 배경: `nurse_room.png`
- 다음: `hidden_good_nurse_3_ins`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건실을 나서며. 병 뚜껑 안쪽에 작은 글씨. '아프면 연락해. 안 아파도 연락해. — ♥'*

---

### `hidden_good_nurse_3_ins`
- 배경: `nurse_room.png`
- 다음: `hidden_good_nurse_4`

- 캐릭터: `nurse_normal.png`
**{name}**: *병 뚜껑을 닫고도 입가가 안 내려간다.*

---

### `hidden_good_nurse_4`
- 배경: `ending_good_nurse.png`
- 다음: `hidden_good_nurse_ending_title`

- 캐릭터: `없음`
**{name}**: *하트가 — 이번에는 확실히 의료적 관심이 아니다.*

---

### `hidden_good_nurse_ending_title`
- 배경: `ending_good_nurse.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**—**: ─── 보건선생님 GOOD END ───

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
