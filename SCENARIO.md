# 큐피드(Cupid) — 시나리오

> 기획서: [docs/GAME_DESIGN.md](docs/GAME_DESIGN.md)
> 대사 가이드: [docs/WRITING_GUIDE.md](docs/WRITING_GUIDE.md)

<!-- SCENARIO-AUTO-START -->

> 아래 시나리오 섹션은 `node generate-scenario.js`로 자동 생성되었습니다.
> 분기는 `assets/js/scenario/`, 문구는 `assets/js/i18n/{언어}/`에서 수정합니다. 7개 언어를 반영한 뒤 `npm run scenario:sync`로 이 문서를 갱신하고 `npm run scenario:check`로 동기화를 확인합니다.

# 1일차

## 1일차 — 아침 `day1_1_morning`

### `start`
- 배경: `school.png`
- BGM: `intro.mp3`
- 다음: `start_again`

- 캐릭터: `없음`
**{name}**: *4월의 벚꽃잎이 흩날리는 교문 앞. 아직 풀기가 가시지 않은 새 교복 깃을 매만지며 전학 서류가 든 가방끈을 고쳐 멘다.*

---

### `start_again`
- 배경: `school.png`
- 다음: `start_3`

- 캐릭터: `없음`
**{name}**: *순간 울컥 치미는 현기증에 차가운 교문 기둥을 짚고 선다. 가쁜 숨을 천천히 내쉬며 울렁거리는 속이 가라앉기를 기다린다.*

---

### `start_3`
- 배경: `school.png`
- 다음: `name_input_scene`

- 캐릭터: `없음`
**{name}**: *주머니 속 휴대폰이 짧게 떨린다. 예전 학교 단체방 위로 떠오른 익숙한 이름들을 잠시 내려다보다가 조용히 화면을 꺼 버린다.*

---

### `name_input_scene`
- 배경: `school.png`
- 타입: `input`
- 다음: `gate_1`

- 캐릭터: `없음`
**시스템**: 전학생, 이름이 뭐야?

---

### `gate_1`
- 배경: `school.png`
- 다음: `seoyeon_meet_1`

- 캐릭터: `없음`
**{name}**: *교문 그늘 아래 서 있던 긴 생머리의 여학생이 안경테를 가볍게 밀어 올리며 손목시계를 확인한다. 내 발소리가 가까워지자 단정한 속눈썹이 천천히 들린다.*

---

### `seoyeon_meet_1`
- 배경: `school.png`
- 다음: `seoyeon_meet_2`

- 캐릭터: `seyoun_normal.png`
**서연**: 혹시 오늘 온 전학생? {name} 맞지?

---

### `seoyeon_meet_2`
- 배경: `school.png`
- 다음: `seoyeon_meet_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 명찰에도 {name}이라고 적혀 있네. 반가워. *단정한 손끝으로 클립보드 명단에 가볍게 표시를 남긴다.*

---

### `seoyeon_meet_3`
- 배경: `school.png`
- 다음: `seoyeon_meet_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: 맞는데. 내 얼굴은 어떻게 한 번에 알아봤어?

---

### `seoyeon_meet_4`
- 배경: `school.png`
- 다음: `seoyeon_meet_5`

- 캐릭터: `seyoun_normal.png`
**서연**: 학생회장이거든. 새로 온 전학생 맞이하는 것도 내 몫이야.

---

### `seoyeon_meet_5`
- 배경: `school.png`
- 다음: `seoyeon_meet_6`

- 캐릭터: `seyoun_normal.png`
**서연**: 이쪽으로 따라와. 조회 시작하기 전에 15분 안으로 학교 구조부터 짚어 줄게.

---

### `seoyeon_meet_6`
- 배경: `school.png`
- 다음: `seoyeon_meet_7`

- 캐릭터: `seyoun_normal.png`
**{name}**: 첫날부터 학생회장이 직접 안내라니 좀 떨리는데.

---

### `seoyeon_meet_7`
- 배경: `school.png`
- 다음: `seoyeon_meet_8`

- 캐릭터: `seyoun_normal.png`
**서연**: 원래 내가 맡은 일이니까 괜히 어렵게 생각할 것 없어.

---

### `seoyeon_meet_8`
- 배경: `school.png`
- 다음: `seoyeon_choice`

- 캐릭터: `seyoun_normal.png`
**서연**: 자, 가자. *몸을 돌리는 서연의 교복 셔츠 깃에서 햇살에 마른 섬유유연제 향이 은은하게 스친다.*

---

### `seoyeon_choice`
- 배경: `school.png`
- 선택지:
  1. "일부러 마중 나온 거야?" → `choice_flirt_1` | Seoyeon +4
  2. "가이드비는 얼마야?" → `choice_joke_1` | Seoyeon +2
  3. "괜찮아, 대충 둘러보면 되지 뭐." → `choice_dismiss_1` | Seoyeon -3

- 캐릭터: `seyoun_normal.png`
**{name}**: *앞서 걷는 서연의 단정한 뒷모습을 보며 입을 연다.*

---

### `choice_dismiss_1`
- 배경: `school.png`
- 다음: `choice_dismiss_2`

- 캐릭터: `seyoun_normal.png`
**서연**: 첫날인데 정말 혼자 찾아가도 괜찮겠어, {name}? *걸음을 멈추고 반쯤 고개를 돌려 나를 바라본다.*

---

### `choice_dismiss_2`
- 배경: `school.png`
- 다음: `choice_dismiss_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 네가 그렇다면 억지로 끌고 사진 않을게. 대신 교실 위치만 기억해 둬. 3학년 2반, 복도 오른쪽 끝이야.

---

### `choice_dismiss_3`
- 배경: `school.png`
- 다음: `classroom_1`

- 캐릭터: `seyoun_back.png`
**서연**: *클립보드를 품에 고쳐 안은 채 흔들림 없는 걸음으로 교문 안쪽 계단을 오른다.*

---

### `choice_flirt_1`
- 배경: `school.png`
- 다음: `choice_flirt_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *걸음을 멈추고 반쯤 돌아서더니 맑은 안경알 너머로 눈매를 살짝 휘어 보인다.*

---

### `choice_flirt_2`
- 배경: `school.png`
- 다음: `choice_flirt_3`

- 캐릭터: `seyoun_laugh.png`
**서연**: 전학 첫날부터 농담할 여유도 있네. 덕분에 네 이름은 단번에 외우겠어.

---

### `choice_flirt_3`
- 배경: `school.png`
- 다음: `choice_flirt_4`

- 캐릭터: `seyoun_laugh.png`
**{name}**: 오, 혹시 첫인상 점수라도 매기는 중이야?

---

### `choice_flirt_4`
- 배경: `school.png`
- 다음: `choice_flirt_5`

- 캐릭터: `seyoun_normal.png`
**서연**: 글쎄, 아직 학교 분위기는 잘 모르는 모양이지만 첫인상 점수는 꽤 후하게 줄 만하네.

---

### `choice_flirt_5`
- 배경: `school.png`
- 다음: `choice_flirt_6`

- 캐릭터: `seyoun_normal.png`
**{name}**: 학생회장님한테 후한 점수라니 영광인데?

---

### `choice_flirt_6`
- 배경: `school.png`
- 다음: `choice_flirt_7`

- 캐릭터: `seyoun_normal.png`
**서연**: 일주일 뒤에도 그렇게 여유롭게 웃을 수 있을지 두고 볼게.

---

### `choice_flirt_7`
- 배경: `school.png`
- 다음: `hallway_1`

- 캐릭터: `seyoun_laugh.png`
**서연**: 늦겠다, 이리 따라와 {name}. *살짝 붉어진 귓바퀴를 머리카락으로 가리며 한 걸음 앞서 걷는다.*

---

### `choice_joke_1`
- 배경: `school.png`
- 다음: `choice_joke_2`

- 캐릭터: `seyoun_laugh.png`
**서연**: 오늘 안내는 특별히 무료야. 대신 나중에 학생회 일손 부족할 때 이자 쳐서 받을 거지만.

---

### `choice_joke_2`
- 배경: `school.png`
- 다음: `choice_joke_3`

- 캐릭터: `seyoun_laugh.png`
**{name}**: 세상에 공짜가 없다더니 무서운 학생회장이네.

---

### `choice_joke_3`
- 배경: `school.png`
- 다음: `hallway_1`

- 캐릭터: `seyoun_normal.png`
**서연**: 내 옆에 있으면 적어도 학교생활이 심심하진 않을걸.

---

### `hallway_1`
- 배경: `school_hallway.png`
- 다음: `hallway_3`

- 캐릭터: `seyoun_back.png`
**서연**: 지나가는 애들한테 인사받느라 걸음 늦출 필요 없어. 그냥 내 보폭에 맞춰서 걸어. *복도에서 쏟아지는 인사들에 가볍게 손만 들어 답한다.*

---

### `hallway_3`
- 배경: `school_hallway.png`
- 다음: `hallway_4`

- 캐릭터: `seyoun_normal.png`
**서연**: 지금 걷는 본관이 3학년 건물이고 창밖 건너편이 도서관이야. 매점은 지하 계단으로 내려가면 바로 나오고.

---

### `hallway_4`
- 배경: `school_hallway.png`
- 다음: `hallway_5`

- 캐릭터: `seyoun_normal.png`
**서연**: 그리고 이건 아무한테나 안 보여주는 건데. *재킷 주머니에서 은빛 열쇠를 꺼내 손끝으로 짤랑거린다.*

---

### `hallway_5`
- 배경: `school_hallway.png`
- 다음: `hallway_6`

- 캐릭터: `seyoun_normal.png`
**서연**: 원래 우리 학교 옥상은 평소엔 잠겨 있거든. 이 열쇠는 학생회장만 쓸 수 있는 작은 특권이지.

---

### `hallway_6`
- 배경: `school_hallway.png`
- 다음: `hallway_6_b`

- 캐릭터: `seyoun_normal.png`
**{name}**: 옥상에 너만의 비밀 아지트라도 숨겨 둔 거야?

---

### `hallway_6_b`
- 배경: `school_hallway.png`
- 다음: `hallway_6_c`

- 캐릭터: `seyoun_normal.png`
**서연**: *맑게 울리던 열쇠고리 소리가 손안에서 뚝 멎는다.* 생각보다 눈치가 꽤 빠르네.

---

### `hallway_6_c`
- 배경: `school_hallway.png`
- 다음: `hallway_7`

- 캐릭터: `seyoun_normal.png`
**서연**: *입꼬리를 살짝 올린 채 대답 대신 열쇠를 다시 주머니 깊숙이 넣는다.*

---

### `hallway_7`
- 배경: `school_hallway.png`
- 다음: `hallway_8`

- 캐릭터: `seyoun_normal.png`
**서연**: 맞다, 오늘 점심시간. 아직 어디서 밥 먹을지 못 정했으면 나랑 같이 갈래?

---

### `hallway_8`
- 배경: `school_hallway.png`
- 다음: `hallway_10`

- 캐릭터: `seyoun_shy.png`
**{name}**: *어느새 걸음을 멈춘 서연이 아침 햇살이 비치는 교실 문패를 손끝으로 가리킨다.*

---

### `hallway_10`
- 배경: `school_hallway.png`
- 다음: `hallway_11`

- 캐릭터: `seyoun_normal.png`
**서연**: 다 왔다, 여기가 네 교실이야. 얼른 들어가 봐.

---

### `hallway_11`
- 배경: `school_hallway.png`
- 다음: `hallway_12`

- 캐릭터: `seyoun_normal.png`
**{name}**: 점심때도 일대일로 안내해 주는 거야?

---

### `hallway_12`
- 배경: `school_hallway.png`
- 다음: `hallway_13`

- 캐릭터: `seyoun_normal.png`
**서연**: 글쎄, 오늘 오전 수업 잘 버티는 거 봐서.

---

### `hallway_13`
- 배경: `school_hallway.png`
- 다음: `hallway_13_b`

- 캐릭터: `seyoun_back.png`
**서연**: *돌아서던 서연이 클립보드를 어깨 높이로 가볍게 들어 인사하고는 미소를 남긴다.*

---

### `hallway_13_b`
- 배경: `school_hallway.png`
- 플래그: `met_seoyeon`
- 다음: `classroom_1`

- 캐릭터: `seyoun_back.png`
**{name}**: *단정한 구두 소리를 남기며 복도 저편으로 멀어지는 서연의 뒷모습을 잠시 바라본다.*

---

### `classroom_1`
- 배경: `room_school.png`
- BGM: `daily.mp3`
- 다음: `classroom_2_b`

- 캐릭터: `없음`
**{name}**: *드르륵, 교실 앞문을 열자 왁자지껄하던 교실이 조용해지며 수십 개의 시선이 일제히 내게 쏠린다.* 안녕하세요.

---

### `classroom_2_b`
- 배경: `room_school.png`
- 다음: `classroom_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *교탁 앞에는 20대 후반쯤 되어 보이는 담임선생님이 서 있다. 윗단추를 자연스럽게 푼 부드러운 베이지색 가디건 차림으로 출석부를 든 채 나를 반긴다.*

---

### `classroom_3`
- 배경: `room_school.png`
- 다음: `classroom_3_b`

- 캐릭터: `teacher_normal.png`
**담임**: 자, 다들 주목. 오늘부터 우리 반 식구가 된 전학생이야. 앞에 나와서 간단히 인사해 볼까?

---

### `classroom_3_b`
- 배경: `room_school.png`
- 다음: `classroom_5_b`

- 캐릭터: `teacher_normal.png`
**{name}**: 오늘 전학 온 {name}입니다. 잘 부탁드립니다. *인사를 마치고 고개를 들자 담임이 출석부의 내 이름 옆에 단정하게 점을 찍으며 눈웃음을 짓는다.*

---

### `classroom_5_b`
- 배경: `room_school.png`
- 다음: `classroom_5_c`

- 캐릭터: `teacher_normal.png`
**담임**: 그래, {name}. 우리 반에 온 걸 환영해. 급할 것 없으니까 천천히 적응해 나가자.

---

### `classroom_5_c`
- 배경: `room_school.png`
- 다음: `classroom_dain_1`

- 캐릭터: `teacher_normal.png`
**{name}**: *낯선 교실 공기에 섞여 내 숨소리가 잦아드는 사이 교실 한구석에서 장난기 어린 휘파람 소리가 경쾌하게 울린다.*

---

### `classroom_dain_1`
- 배경: `room_school.png`
- 다음: `classroom_dain_2`

- 캐릭터: `dain_normal.png`
**다인**: 오, 전학생! 드디어 우리 반에도 새 얼굴이 들어왔네!

---

### `classroom_dain_2`
- 배경: `room_school.png`
- 다음: `classroom_dain_3`

- 캐릭터: `null` @ undefined
**다인**: 이쪽 봐, 이쪽! *산뜻한 갈색 숏컷에 활동적인 배구부 유니폼을 걸친 여학생이 자리에서 벌떡 일어나 시원하게 손을 흔든다.*

---

### `classroom_dain_3`
- 배경: `room_school.png`
- 다음: `classroom_dain_4`

- 캐릭터: `null` @ undefined
**담임**: 다인아, 아침부터 목소리 좀 낮추자. 그리고 교실 안에서는 체육관 유니폼 좀 벗으라고 했지.

---

### `classroom_dain_4`
- 배경: `room_school.png`
- 다음: `classroom_dain_5`

- 캐릭터: `null` @ undefined
**다인**: 에이, 쌤도 참. 이게 세상에서 제일 편하단 말이에요! 아무튼 전학생, 엄청 반갑다!

---

### `classroom_dain_5`
- 배경: `room_school.png`
- 다음: `classroom_dain_5_b`

- 캐릭터: `null` @ undefined
**다인**: 네 자리는 여기야, 여기! *아이들의 웃음소리 사이로 탄력 있는 팔을 더 높이 뻗어 손짓한다.*

---

### `classroom_dain_5_b`
- 배경: `room_school.png`
- 다음: `classroom_dain_5_c`

- 캐릭터: `null` @ undefined
**담임선생님**: 다인아, 적어도 출석 부르는 동안만이라도 진정 좀 하자. *분필 쥔 손으로 교탁을 두 번 가볍게 두드린다.*

---

### `classroom_dain_5_c`
- 배경: `room_school.png`
- 다음: `classroom_dain_5_d`

- 캐릭터: `null` @ undefined
**담임**: 지금부터 그 에너지를 다 쓰면 어떡해. 아직 1교시 종도 안 쳤어.

---

### `classroom_dain_5_d`
- 배경: `room_school.png`
- 다음: `classroom_yuna_1`

- 캐릭터: `null` @ undefined
**담임선생님**: *담임은 작게 고개를 저으며 출석부 다음 장을 부드럽게 넘긴다.*

---

### `classroom_yuna_1`
- 배경: `room_school.png`
- SFX: `synth:page_turn`
- 다음: `classroom_yuna_2`

- 캐릭터: `null` @ undefined
**{name}**: *소란스러운 교실 풍경과 동떨어진 창가 맨 뒷자리, 봄 햇살을 받은 은백색 머리카락의 여학생만이 고요하게 책장을 넘긴다.*

---

### `classroom_yuna_2`
- 다음: `classroom_yuna_4`

<!-- i18n -->

---

### `classroom_yuna_4`
- 배경: `room_school.png`
- 다음: `classroom_seat_1`

- 캐릭터: `null` @ undefined
**{name}**: *앞줄에 앉은 학생 하나가 내 소매를 스치며 작게 속삭인다. '쟤한테는 말 걸지 마. 소문도 좀 무섭거든.' 그 순간에도 유나의 하얀 손끝은 미동조차 없이 다음 페이지를 넘긴다.*

---

### `classroom_seat_1`
- 배경: `room_school.png`
- 다음: `classroom_seat_2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *출석부를 덮은 담임이 창가 쪽에서 한 줄 건너편 빈자리를 손끝으로 가리킨다.*

---

### `classroom_seat_2`
- 배경: `room_school.png`
- 다음: `classroom_minsu_1`

- 캐릭터: `null` @ undefined
**다인**: 오, 딱 내 옆자리네? 멀뚱히 서 있지 말고 얼른 와서 앉아! *의자를 바짝 당겨 앉으며 내 쪽으로 상체를 활짝 돌린다.*

---

### `classroom_minsu_1`
- 배경: `room_school.png`
- 다음: `classroom_minsu_2`

- 캐릭터: `minsu_normal.png`
**{name}**: *가방을 내려놓고 의자를 빼려는데 앞자리에 앉아 있던 남학생이 등받이를 잡고 휙 돌아본다.*

---

### `classroom_minsu_2`
- 배경: `room_school.png`
- 다음: `classroom_minsu_3`

- 캐릭터: `minsu_smirk.png`
**민수**: 야, 전학생. 우리 반에 온 걸 환영한다. 그리고 미리 충고 하나 할게, 각오 단단히 해라.

---

### `classroom_minsu_3`
- 배경: `room_school.png`
- 다음: `classroom_minsu_2_b`

- 캐릭터: `minsu_smirk.png`
**{name}**: 갑자기 무슨 각오?

---

### `classroom_minsu_2_b`
- 배경: `room_school.png`
- 다음: `classroom_dain_talk_1`

- 캐릭터: `minsu_normal.png`
**민수**: *옆자리의 다인을 향해 슬쩍 턱짓하며 씨익 웃는다.* 네 옆자리 체력 맞추려면 지금부터 체력 관리 잘해야 할걸.

---

### `classroom_dain_talk_1`
- 배경: `room_school.png`
- 다음: `classroom_dain_talk_2`

- 캐릭터: `minsu_normal.png`
**{name}**: *장난스럽게 돌아앉는 앞자리 남학생의 교복 명찰에는 '민수'라는 이름이 적혀 있었다.*

---

### `classroom_dain_talk_2`
- 배경: `room_school.png`
- 다음: `classroom_dain_talk_3`

- 캐릭터: `null` @ undefined
**다인**: 저 녀석 말은 신경 쓰지 마! 그보다 나 궁금한 거 하나만 물어봐도 돼? *책상 선을 넘어올 만큼 상체를 내 쪽으로 바짝 기울인다.*

---

### `classroom_dain_talk_3`
- 배경: `room_school.png`
- 다음: `classroom_dain_talk_4`

- 캐릭터: `null` @ undefined
**다인**: 야, {name}. 너 평소에 몸 움직이는 거나 운동 좀 좋아해?

---

### `classroom_dain_talk_4`
- 배경: `room_school.png`
- 다음: `classroom_dain_talk_5`

- 캐릭터: `null` @ undefined
**{name}**: 운동은 왜, 갑자기?

---

### `classroom_dain_talk_5`
- 배경: `room_school.png`
- 다음: `classroom_dain_talk_6`

- 캐릭터: `null` @ undefined
**다인**: 아니, 오늘 방과후에 리시브 연습을 좀 더 하고 싶은데 공을 넘겨 줄 상대가 마땅치 않아서 말이지.

---

### `classroom_dain_talk_6`
- 배경: `room_school.png`
- 다음: `classroom_dain_talk_7`

- 캐릭터: `null` @ undefined
**{name}**: 전학생을 첫날부터 인간 볼 머신으로 쓰려고?

---

### `classroom_dain_talk_7`
- 배경: `room_school.png`
- 다음: `classroom_dain_talk_8`

- 캐릭터: `null` @ undefined
**다인**: 에이, 설마! 그래도 기계보다는 사람이랑 호흡 맞추는 게 훨씬 재밌잖아. 아마도!

---

### `classroom_dain_talk_8`
- 배경: `room_school.png`
- 다음: `classroom_yuna_note_1`

- 캐릭터: `null` @ undefined
**다인**: 어때, 같이 해 볼래? *다인의 따뜻한 검지가 내 책상 나무 결 위에 자그마한 배구 코트와 네트 선을 쓱쓱 그린다.*

---

### `classroom_yuna_note_1`
- 배경: `room_school.png`
- SFX: `synth:page_turn`
- 다음: `classroom_yuna_note_3`

- 캐릭터: `null` @ undefined
**{name}**: *그때 뒷자리에서 반듯하게 접힌 종이쪽지 하나가 책상 모서리로 미끄러져 들어온다. 돌아보자 은백색 머리카락의 여학생은 시치미를 뗀 채 창밖의 흔들리는 나뭇가지만 응시하고 있다.*

---

### `classroom_yuna_note_3`
- 배경: `room_school.png`
- 다음: `classroom_yuna_note_5`

- 캐릭터: `null` @ undefined
**유나**: *조심스럽게 펼치자 은은한 연보라색 잉크 글씨와 모서리의 작게 접힌 자국이 눈에 들어온다.* 첫날부터 시끄러운 자리 걸렸네. — 유나

---

### `classroom_yuna_note_5`
- 배경: `room_school.png`
- 다음: `classroom_yuna_note_6`

- 캐릭터: `null` @ undefined
**{name}**: *내가 고개를 들자 창가 햇살에 비치던 유나의 하얀 손끝이 소리 없이 책상 그늘 아래로 숨는다.*

---

### `classroom_yuna_note_6`
- 배경: `room_school.png`
- 다음: `lunch_start`

- 캐릭터: `null` @ undefined
**{name}**: *1교시 시작을 알리는 종소리가 교실 안을 메운다. 창밖으로 시선을 둔 유나의 서늘한 옆선과 끊임없이 재잘거리는 다인의 열기 사이에서 나의 첫날이 시작되고 있었다.*

---

## 1일차 — 점심 `day1_2_lunch`

### `lunch_start`
- 배경: `school_hallway.png`
- BGM: `daily.mp3`
- 다음: `lunch_start_4`

- 캐릭터: `없음`
**{name}**: *점심시간을 알리는 종소리와 함께 교실 공기가 들뜬다. 서연은 단정한 도시락 가방을 들고 계단 쪽으로 걸음을 옮기고 다인은 매점 방향 복도에서 손짓한다. 창가의 유나는 읽던 책을 조용히 품에 안고 도서관 쪽으로 나선다.*

---

### `lunch_start_4`
- 배경: `school_hallway.png`
- 다음: `lunch_start_4_b`

- 캐릭터: `seyoun_normal.png`
**서연**: 아까 말한 대로 옥상 올라올 거지? *계단참에서 걸음을 멈추고 손끝으로 위층을 가리킨다.*

---

### `lunch_start_4_b`
- 배경: `school_hallway.png`
- 다음: `lunch_start_5`

- 캐릭터: `dain_normal.png`
**{name}**: *대답하려는 순간 옆에서 다가온 다인의 따뜻한 손바닥이 내 팔목을 덥석 낚아챈다.*

---

### `lunch_start_5`
- 배경: `school_hallway.png`
- 다음: `lunch_start_6`

- 캐릭터: `dain_normal.png`
**다인**: 야, 아직 점심 안 먹었지? 나랑 매점 뛰어가자. 빵 내기해서 진 사람이 오늘 점심 쏘기!

---

### `lunch_start_6`
- 배경: `school_hallway.png`
- 다음: `lunch_start_7`

- 캐릭터: `yuna_normal.png`
**유나**: 난 도서관 갈 건데. *내 옆을 스쳐 지나가며 가방끈을 짧게 고쳐 쥔다.*

---

### `lunch_start_7`
- 배경: `school_hallway.png`
- 다음: `lunch_choice`

- 캐릭터: `없음`
**{name}**: *바람 부는 옥상과 달콤한 빵 냄새가 나는 매점, 그리고 고요한 도서관까지 세 갈래 길이 눈앞에 놓인다.*

---

### `lunch_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "서연을 따라 옥상으로" → `lunch_seo_1` | 플래그: `chose_seoyeon_lunch`, `ate_lunch_seoyeon`, `met_seoyeon`
  2. "다인과 매점으로" → `lunch_dain_1` | 플래그: `chose_dain_lunch`
  3. "유나를 따라 도서관으로" → `lunch_yuna_1` | 플래그: `chose_yuna_lunch`

- 캐릭터: `없음`
**{name}**: *첫날의 점심시간, 누구의 발걸음을 따라갈까?*

---

### `lunch_seo_1`
- 배경: `top_school.png`
- BGM: `daily.mp3`
- 호감분기: Seoyeon
  - [4+] → `lunch_seo_1_aff_high`
  - [0+] → `lunch_seo_1_aff_default`
  - [-19 이상] → `lunch_seo_1_aff_default`
  - [기본] → `lunch_seo_1_aff_neg`
- 다음: `lunch_seo_1_aff_default`

- 캐릭터: `seyoun_normal.png`
**서연**: *철컥, 서연이 작은 열쇠로 무거운 철문을 열자마자 4월의 청량한 봄바람이 앞머리를 스치며 확 불어온다.*

---

### `lunch_seo_1_aff_high`
- 배경: `top_school.png`
- 다음: `lunch_seo_2`

- 캐릭터: `seyoun_laugh.png`
**서연**: 이리 와서 앉아. 아까 아침 복도에서 네가 했던 농담, 수업 시간 내내 생각나서 좀 웃겼거든.

---

### `lunch_seo_1_aff_default`
- 배경: `top_school.png`
- 다음: `lunch_seo_2`

- 캐릭터: `seyoun_normal.png`
**서연**: 우두커니 서 있지 말고 이쪽 와서 앉을래?

---

### `lunch_seo_2`
- 배경: `top_school.png`
- 다음: `lunch_seo_3`

- 캐릭터: `seyoun_normal.png`
**{name}**: 옥상 구석 화분들도 다 네가 가꾸는 거야? *화분 옆 그늘 아래 접이식 의자 두 개가 나란히 놓여 있다.*

---

### `lunch_seo_3`
- 배경: `top_school.png`
- 스탯: Seoyeon +2
- 다음: `lunch_seo_4`

- 캐릭터: `seyoun_normal.png`
**서연**: 응, 여긴 아무도 안 올라오는 내 전용 휴식처거든.

---

### `lunch_seo_4`
- 배경: `top_school.png`
- 다음: `lunch_seo_5`

- 캐릭터: `seyoun_normal.png`
**{name}**: 학교 옥상을 통째로 쓰다니 학생회장 특권이 꽤 대단한데?

---

### `lunch_seo_5`
- 배경: `top_school.png`
- 다음: `lunch_seo_6`

- 캐릭터: `seyoun_normal.png`
**서연**: 원래는 다른 사람한테 절대 안 열어 주는 곳이야. *접이식 의자 하나를 소리 나지 않게 펼쳐 놓는다.* 오늘만 특별히 봐주는 거지.

---

### `lunch_seo_6`
- 배경: `top_school.png`
- 다음: `lunch_seo_6_b`

- 캐릭터: `seyoun_normal.png`
**{name}**: 전학 첫날부터 특별 대우라니, 나중에 무슨 일을 시키려고 이러는 거야?

---

### `lunch_seo_6_b`
- 배경: `top_school.png`
- 다음: `lunch_seo_8`

- 캐릭터: `seyoun_laugh.png`
**서연**: *구두 끝으로 의자 다리를 살짝 밀어 내 쪽에 간격을 맞춘다.* 의심하기는. 그냥 아래층은 시끄럽고 여기가 조용해서 데려온 거야.

---

### `lunch_seo_8`
- 배경: `top_school.png`
- 다음: `lunch_seo_9`

- 캐릭터: `seyoun_laugh.png`
**서연**: *무릎 위에 올려 둔 가방에서 꼭 2인분은 될 법한 파스텔톤 도시락통 두 개를 나란히 꺼내 놓는다.*

---

### `lunch_seo_9`
- 배경: `top_school.png`
- 다음: `lunch_seo_10`

- 캐릭터: `seyoun_normal.png`
**{name}**: 잠깐, 이거 아무리 봐도 2인분인데?

---

### `lunch_seo_10`
- 배경: `top_school.png`
- 다음: `lunch_seo_11`

- 캐릭터: `seyoun_normal.png`
**서연**: 학생회 회의가 길어지면 제때 밥 챙겨 먹기 힘들 때가 많아서. 평소에도 조금 넉넉하게 싸 오는 편이야.

---

### `lunch_seo_11`
- 배경: `top_school.png`
- 다음: `lunch_seo_13`

- 캐릭터: `seyoun_normal.png`
**{name}**: 노릇하게 말아낸 계란말이에 문어 모양 소시지, 주먹밥까지 완벽하네. 심지어 젓가락도 처음부터 두 벌이잖아.

---

### `lunch_seo_13`
- 배경: `top_school.png`
- 다음: `lunch_seo_14`

- 캐릭터: `seyoun_normal.png`
**{name}**: 이거 설마 아침에 네가 직접 만든 거야?

---

### `lunch_seo_14`
- 배경: `top_school.png`
- 다음: `lunch_seo_15`

- 캐릭터: `seyoun_normal.png`
**서연**: 학생회장이 자기 점심 도시락 하나 못 챙기면 체면이 안 서잖아.

---

### `lunch_seo_15`
- 배경: `top_school.png`
- 다음: `lunch_seo_16`

- 캐릭터: `seyoun_normal.png`
**{name}**: 체면 얘기 말고 내 몫까지 일부러 싸 온 건지 물어본 건데.

---

### `lunch_seo_16`
- 배경: `top_school.png`
- 다음: `lunch_seo_17`

- 캐릭터: `seyoun_normal.png`
**서연**: *대답 대신 나무젓가락 한 벌을 내 손에 쥐여 주며 시선을 살짝 피한다.* 자꾸 캐묻지 말고 얼른 먹어. 다 식으면 맛없어.

---

### `lunch_seo_17`
- 배경: `top_school.png`
- 다음: `lunch_seo_19`

- 캐릭터: `seyoun_normal.png`
**서연**: 그럼 내가 먼저 맛본다. *난간 너머로 햇살 가득한 운동장과 고요한 도서관 별관 지붕이 한눈에 내려다보인다.*

---

### `lunch_seo_19`
- 배경: `top_school.png`
- 다음: `lunch_seo_20`

- 캐릭터: `seyoun_normal.png`
**서연**: 오전 내내 있어 보니까 어때, 우리 학교?

---

### `lunch_seo_20`
- 배경: `top_school.png`
- 다음: `lunch_seo_21`

- 캐릭터: `seyoun_normal.png`
**{name}**: 일단 점심 도시락이 엄청 맛있어.

---

### `lunch_seo_21`
- 배경: `top_school.png`
- 다음: `lunch_seo_22`

- 캐릭터: `seyoun_laugh.png`
**서연**: *서연이 젓가락 끝으로 도시락 칸막이를 톡 건드리며 작게 웃음을 터뜨린다.* 학교 소감을 물었는데 대답이 왜 도시락 칭찬이야.

---

### `lunch_seo_22`
- 배경: `top_school.png`
- 다음: `lunch_seo_23`

- 캐릭터: `seyoun_laugh.png`
**서연**: *잠시 망설이던 서연이 가장 모양이 예쁜 계란말이 한 조각을 집어 내 입가 앞으로 조심스레 내민다.*

---

### `lunch_seo_23`
- 배경: `top_school.png`
- 다음: `lunch_seo_choice`

- 캐릭터: `seyoun_normal.png`
**서연**: 자, 이것도 먹어 봐. 딱 한 입만 주는 거야.

---

### `lunch_seo_choice`
- 배경: `top_school.png`
- 선택지:
  1. "받아먹는다" → `lunch_seo_c1_1` | Seoyeon +4
  2. "직접 먹는 게 더 맛있을걸" → `lunch_seo_c2_1` | Seoyeon -2
  3. "정성까지 들였는데 한 입만 먹어줄게" → `lunch_seo_c1_1` | Seoyeon -3
  4. "이 정도면 앞으로도 도시락 부탁해도 되겠다" → `lunch_seo_c2_1` | Seoyeon -5

- 캐릭터: `seyoun_normal.png`
**서연**: *젓가락 끝의 노란 계란말이가 내 입술 앞 한 뼘 거리에서 멈춰 있다.*

---

### `lunch_seo_c1_1`
- 배경: `top_school.png`
- 다음: `lunch_seo_c1_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *몸을 살짝 기울여 서연이 내민 젓가락 끝에서 폭신하고 따뜻한 계란말이를 그대로 받아먹는다.*

---

### `lunch_seo_c1_2`
- 배경: `top_school.png`
- 다음: `lunch_seo_c1_2_b`

- 캐릭터: `seyoun_normal.png`
**{name}**: 진짜 맛있다. 간도 딱 맞는데.

---

### `lunch_seo_c1_2_b`
- 배경: `top_school.png`
- 다음: `lunch_seo_c1_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 급하게 삼키지 말고 천천히 좀 씹어. *물병을 들어 자기 입가를 슬쩍 가리는 서연의 손안에서 투명한 비닐 라벨이 잘게 구겨진다.*

---

### `lunch_seo_c1_3`
- 배경: `top_school.png`
- 다음: `lunch_seo_c1_3_b`

- 캐릭터: `seyoun_shy.png`
**서연**: 내가 만든 건데 그 정도 맛은 나야지.

---

### `lunch_seo_c1_3_b`
- 배경: `top_school.png`
- 다음: `lunch_seo_after`

- 캐릭터: `seyoun_shy.png`
**{name}**: *모서리가 반쯤 접힌 물병 라벨을 만지작거리던 서연이 발개진 귓불을 감추며 다시 젓가락을 든다.*

---

### `lunch_seo_c2_1`
- 배경: `top_school.png`
- 다음: `lunch_seo_c2_2`

- 캐릭터: `seyoun_normal.png`
**서연**: 그래? 그럼 이건 내 차지네. *그대로 자기 입에 계란말이를 넣더니 괜히 도시락 뚜껑 모서리를 젓가락으로 톡톡 두드린다.*

---

### `lunch_seo_c2_2`
- 배경: `top_school.png`
- 다음: `lunch_seo_c2_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 음, 네 말대로 내가 먹어도 맛있긴 하네.

---

### `lunch_seo_c2_3`
- 배경: `top_school.png`
- 다음: `lunch_seo_after`

- 캐릭터: `seyoun_normal.png`
**서연**: 잠깐만, 뚜껑 아귀가 왜 안 맞지. *서두르는 손길 끝에 세 번째 만에야 딸깍 소리를 내며 뚜껑이 닫힌다.*

---

### `lunch_seo_after`
- 배경: `top_school.png`
- 다음: `lunch_seo_after_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *불어오는 바람을 타고 운동장 쪽에서 공 차는 소리와 아이들의 웃음소리가 아스라이 올라온다.*

---

### `lunch_seo_after_2`
- 배경: `top_school.png`
- 다음: `lunch_seo_after_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 내일도 점심시간에 딴 약속 잡지 말고 비워 둬.

---

### `lunch_seo_after_3`
- 배경: `top_school.png`
- 다음: `lunch_seo_after_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: 내일도 회장님 전용 옥상에 초대해 주는 거야?

---

### `lunch_seo_after_4`
- 배경: `top_school.png`
- 다음: `lunch_seo_after_5`

- 캐릭터: `seyoun_normal.png`
**서연**: 거창하게 초대라기보단 그냥 같이 밥 먹자는 뜻이야. 종 치면 바로 올라와.

---

### `lunch_seo_after_5`
- 배경: `top_school.png`
- 다음: `lunch_seo_after_7`

- 캐릭터: `seyoun_normal.png`
**서연**: *도시락 보자기 매듭을 단정하게 묶어 쥐며 내 쪽을 흘끗 올려다본다.*

---

### `lunch_seo_after_7`
- 다음: `lunch_seo_freetalk`

<!-- i18n -->

---

### `lunch_seo_freetalk`
- 배경: `top_school.png`
- 타입: `free_talk`
- 다음: `lunch_end`
- 컨텍스트: "전학 첫날 점심. 옥상에서 서연과 도시락을 먹고 난 직후다. 아직 서먹하지만 서로가 조금씩 궁금해지기 시작한 상태다."
- 성격: "서연은 침착하고 자기 속도가 분명한 학생회장이다. 관심이 생겨도 성급히 드러내기보다 상황을 살피며 말과 행동 모두 솔직한 편이다."

- 캐릭터: `seyoun_normal.png`
**서연**: *도시락 통을 가방에 넣고 접이식 의자를 내 쪽으로 반 뼘쯤 밀어 앉는다.* 여기 바람이 제법 선선한데 춥진 않지?

---

### `lunch_seo_1_aff_neg`
- 배경: `top_school.png`
- 다음: `lunch_seo_neg_leave`

- 캐릭터: `seyoun_pout.png`
**서연**: *클립보드를 품에 단단히 안은 채 옥상 난간 너머만 바라본다.* 지금 학생회 서류 봐야 해서 바빠. 볼일 없으면 그만 내려가 줘.

---

### `lunch_seo_neg_leave`
- 배경: `school_hallway.png`
- 다음: `lunch_end`

- 캐릭터: `없음`
**{name}**: *차갑게 닫힌 옥상 철문을 뒤로하고 무거운 계단을 내려간다.*

---

### `lunch_dain_1`
- 배경: `store.png`
- BGM: `daily2.mp3`
- 호감분기: Dain
  - [0+] → `lunch_dain_1_aff_default`
  - [-19 이상] → `lunch_dain_1_aff_default`
  - [기본] → `lunch_dain_1_aff_neg`
- 다음: `lunch_dain_1_aff_default`

- 캐릭터: `dain_laugh.png`
**다인**: 휴, 일등으로 도착! 여기가 우리 학교 매점이야. 줄 길어지기 전에 얼른 고르자.

---

### `lunch_dain_1_aff_neg`
- 배경: `store.png`
- 다음: `lunch_dain_neg_leave`

- 캐릭터: `dain_angry.png`
**다인**: *계산 줄에서 한 걸음 거리를 둔 채 앞만 바라본다.* 오늘은 빵 내기할 기분 아니야. 네 것만 빨리 사고 가.

---

### `lunch_dain_neg_leave`
- 배경: `school_hallway.png`
- 다음: `lunch_end`

- 캐릭터: `없음`
**{name}**: *소란스러운 매점 줄에서 조용히 빠져나와 혼자 복도에 선다.*

---

### `lunch_dain_1_aff_default`
- 배경: `store.png`
- 다음: `lunch_dain_2`

- 캐릭터: `dain_normal.png`
**다인**: 갓 구운 빵 냄새 장난 아니지? 사람은 좀 북적거려도 여기가 최고야. *내 소매를 끌고 매점 안으로 성큼 들어선다.*

---

### `lunch_dain_2`
- 배경: `store.png`
- 스탯: Dain +8
- 다음: `lunch_dain_3`

- 캐릭터: `dain_normal.png`
**다인**: 바삭한 소보로빵에 시원한 딸기우유! 이 조합은 언제 먹어도 절대 배신 안 한다니까.

---

### `lunch_dain_3`
- 배경: `store.png`
- 다음: `lunch_dain_4`

- 캐릭터: `dain_normal.png`
**{name}**: 근데 아까 진 사람이 빵 사기로 했잖아. 무슨 내기로 정할 건데?

---

### `lunch_dain_4`
- 배경: `store.png`
- 다음: `lunch_dain_5`

- 캐릭터: `dain_normal.png`
**다인**: 당연히 가위바위보 단판 승부지. 깔끔하잖아!

---

### `lunch_dain_5`
- 배경: `store.png`
- 다음: `lunch_dain_6`

- 캐릭터: `dain_normal.png`
**{name}**: 가위바위보에 목숨 거는 사람은 또 처음 보네.

---

### `lunch_dain_6`
- 배경: `store.png`
- 다음: `lunch_dain_7`

- 캐릭터: `dain_normal.png`
**다인**: 지금 쫄아서 빼면 무조건 네가 사는 걸로 친다?

---

### `lunch_dain_7`
- 배경: `store.png`
- 다음: `lunch_dain_8`

- 캐릭터: `dain_normal.png`
**{name}**: 누가 뺀대? 당장 덤벼.

---

### `lunch_dain_8`
- 배경: `store.png`
- 다음: `lunch_dain_9`

- 캐릭터: `dain_normal.png`
**{name}**: *다인과 마주 선 채 주먹을 쥐고 숨을 고른다.*

---

### `lunch_dain_9`
- 배경: `store.png`
- 다음: `lunch_dain_10`

- 캐릭터: `dain_normal.png`
**다인**: 안 내면 진다, 가위, 바위, 보!

---

### `lunch_dain_10`
- 배경: `store.png`
- 다음: `lunch_dain_11`

- 캐릭터: `dain_normal.png`
**{name}**: *내 주먹 앞으로 다인의 활짝 펴진 가위가 멈춘다. 다인의 패배다.*

---

### `lunch_dain_11`
- 배경: `store.png`
- 다음: `lunch_dain_12`

- 캐릭터: `dain_normal.png`
**다인**: 헐, 내가 졌네? 잠깐만, 원래 삼세판인 거 알지? 한 판만 더 하자!

---

### `lunch_dain_12`
- 배경: `store.png`
- 다음: `lunch_dain_12_b`

- 캐릭터: `dain_pout.png`
**{name}**: 방금 단판 승부라고 외친 사람이 누구더라.

---

### `lunch_dain_12_b`
- 배경: `store.png`
- 다음: `lunch_dain_14`

- 캐릭터: `dain_pout.png`
**다인**: 아, 진짜 얄미워! 알았어, 깔끔하게 내가 쏜다! 이모님, 여기 소보로빵 두 개랑 딸기우유 주세요!

---

### `lunch_dain_14`
- 배경: `store.png`
- 다음: `lunch_dain_15`

- 캐릭터: `dain_pout.png`
**다인**: *계산대 위에 동전을 경쾌하게 내려놓고 따뜻한 소보로빵 두 봉지를 품에 안아 든다.*

---

### `lunch_dain_15`
- 배경: `store.png`
- 다음: `lunch_dain_16`

- 캐릭터: `dain_normal.png`
**{name}**: *매점 옆 등나무 그늘 벤치에 나란히 앉아 빵 봉지를 나눈다. 움직일 때마다 다인의 목덜미에서 햇살 냄새가 섞인 건강한 열기가 전해진다.*

---

### `lunch_dain_16`
- 배경: `store.png`
- 다음: `lunch_dain_17`

- 캐릭터: `dain_normal.png`
**다인**: *빵 봉지를 시원하게 뜯으며 내 쪽을 빤히 본다.* 야, 근데 너 평소에도 운동 같은 거 전혀 안 해?

---

### `lunch_dain_17`
- 배경: `store.png`
- 다음: `lunch_dain_18`

- 캐릭터: `dain_normal.png`
**{name}**: 왜, 내가 금방 지칠까 봐 걱정돼?

---

### `lunch_dain_18`
- 배경: `store.png`
- 다음: `lunch_dain_19`

- 캐릭터: `dain_laugh.png`
**다인**: 걱정은 무슨! 앞으로 내 옆에 붙어 다니려면 기본 체력부터 합격점인지 봐야지.

---

### `lunch_dain_19`
- 배경: `store.png`
- 다음: `lunch_dain_20`

- 캐릭터: `dain_laugh.png`
**{name}**: 은근슬쩍 자기 자랑하는 줄 알았네.

---

### `lunch_dain_20`
- 배경: `store.png`
- 다음: `lunch_dain_21`

- 캐릭터: `dain_laugh.png`
**다인**: 자랑? 내 홍보 말하는 거야, 아니면 운동 신기록 말하는 거야?

---

### `lunch_dain_21`
- 배경: `store.png`
- 다음: `lunch_dain_22`

- 캐릭터: `dain_normal.png`
**{name}**: 지금은 홍보 쪽이지. 옆자리에서 같이 뛰어놀 체력 좋은 파트너 구한다고.

---

### `lunch_dain_22`
- 배경: `store.png`
- 다음: `lunch_dain_23`

- 캐릭터: `dain_normal.png`
**다인**: *다인의 손에 들린 분홍빛 딸기우유 팩 모서리가 작게 우그러진다.*

---

### `lunch_dain_23`
- 배경: `store.png`
- 다음: `lunch_dain_choice`

- 캐릭터: `dain_laugh.png`
**다인**: 크흠, 단번에 들켰네. 그래서 진짜로 운동 신경은 좀 있는 편이야?

---

### `lunch_dain_choice`
- 배경: `store.png`
- 선택지:
  1. "조금은. 알려줄 수 있어?" → `lunch_dain_c1_1` | Dain +5
  2. "아는 척한 거야." → `lunch_dain_c2_1` | Dain +2
  3. "그냥 분위기 맞춰 본 거야." → `lunch_dain_trap_1` | Dain -3

- 캐릭터: `dain_laugh.png`
**다인**: *빨대를 입에 문 다인이 내 눈을 들여다보며 어깨가 닿을 듯 상체를 가까이 기울인다.*

---

### `lunch_dain_c1_1`
- 배경: `store.png`
- 다음: `lunch_dain_c1_2`

- 캐릭터: `dain_laugh.png`
**다인**: 오, 자신 있다는 거지? 그럼 오늘 방과후에 체육관으로 와. 워밍업부터 내가 직접 봐줄 테니까, 콜?

---

### `lunch_dain_c1_2`
- 배경: `store.png`
- 다음: `lunch_dain_after`

- 캐릭터: `dain_laugh.png`
**다인**: 야, 진짜 벌써부터 기대된다! *신나서 웃으며 벤치에서 벌떡 일어선다.*

---

### `lunch_dain_c2_1`
- 배경: `store.png`
- 다음: `lunch_dain_after`

- 캐릭터: `dain_laugh.png`
**다인**: 에이, 그래도 아예 관심 없는 건 아니잖아! 오늘 방과후에 체육관 잠깐 놀러 와. 구경만 해도 재밌을걸.

---

### `lunch_dain_trap_1`
- 배경: `store.png`
- 다음: `lunch_dain_after`

- 캐릭터: `dain_normal.png`
**다인**: 야, 관심 없으면 차라리 없다고 솔직히 말해. 억지로 분위기 맞춰 주는 게 제일 별로거든.

---

### `lunch_dain_after`
- 배경: `store.png`
- 다음: `lunch_dain_after_2`

- 캐릭터: `dain_laugh.png`
**{name}**: *남은 빵 부스러기를 털어내고 벤치에서 일어서려는데 다인이 내 앞을 막아선다.*

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
**{name}**: 응? 왜?

---

### `lunch_dain_after_4`
- 배경: `store.png`
- 다음: `lunch_dain_after_5`

- 캐릭터: `dain_normal.png`
**다인**: 너 이 학교 전학 와서 첫 번째로 밥 먹은 친구가 바로 나네? 이거 역사적인 날이다.

---

### `lunch_dain_after_5`
- 배경: `store.png`
- 다음: `lunch_dain_freetalk`

- 캐릭터: `dain_normal.png`
**다인**: *장난스레 쥔 주먹으로 내 어깨를 툭 치더니 탄력 있는 손끝의 온기를 남긴 채 한 걸음 물러선다.*

---

### `lunch_dain_freetalk`
- 배경: `store.png`
- 타입: `free_talk`
- 다음: `lunch_end`
- 컨텍스트: "전학 첫날 점심. 매점에서 다인과 가위바위보 내기를 했고 진 다인이 빵을 샀다. 아직 서로를 알아 가기 시작한 사이다."
- 성격: "다인은 생각보다 행동이 먼저 나가는 배구부 선수다. 솔직하고 반응이 빠르며 승부욕과 다정함이 자연스럽게 함께 드러난다."

- 캐릭터: `dain_normal.png`
**다인**: *빈 빵 봉지를 작게 접어 주머니에 찔러 넣고 벤치 등받이에 팔을 걸친다.* 자, 그래서 전학생! 우리 학교 첫 매점 투어 점수는 몇 점이야?

---

### `lunch_yuna_1`
- 배경: `library_old.png`
- 배경톤: `empty`
- BGM: `night1.mp3`
- 호감분기: Yuna
  - [0+] → `lunch_yuna_1_aff_default`
  - [-19 이상] → `lunch_yuna_1_aff_default`
  - [기본] → `lunch_yuna_1_aff_neg`
- 다음: `lunch_yuna_1_aff_default`

- 캐릭터: `yuna_normal.png`
**{name}**: *복도의 소음이 멀어지는 계단을 지나 유나의 뒤를 따라 서늘하고 고요한 도서관 안으로 들어선다.*

---

### `lunch_yuna_1_aff_neg`
- 배경: `library_old.png`
- 다음: `lunch_yuna_neg_leave`

- 캐릭터: `yuna_bored.png`
**유나**: *펼친 책에서 눈길조차 주지 않는다.* 오늘은 혼자 있고 싶어. 다른 자리로 가 줘.

---

### `lunch_yuna_neg_leave`
- 배경: `school_hallway.png`
- 다음: `lunch_end`

- 캐릭터: `없음`
**{name}**: *고요한 열람실 문을 닫고 발소리를 죽여 계단을 내려간다.*

---

### `lunch_yuna_1_aff_default`
- 배경: `library_old.png`
- 다음: `lunch_yuna_2`

- 캐릭터: `yuna_normal.png`
**유나**: *따로 건네는 쪽지는 없었다. 유나는 햇살이 비스듬히 내려앉는 열람실 구석 자리에 먼저 앉아 조용히 책을 펼치고 있다.*

---

### `lunch_yuna_2`
- 배경: `library_old.png`
- 다음: `lunch_yuna_4`

- 캐릭터: `yuna_normal.png`
**유나**: 의자 끌 때 소리 나지 않게 살살. *하얀 검지로 펼쳐진 책 페이지 모서리를 가만히 누른다.*

---

### `lunch_yuna_4`
- 배경: `library_old.png`
- 스탯: Yuna +4
- 다음: `lunch_yuna_5`

- 캐릭터: `yuna_normal.png`
**유나**: 잠깐만 기다려. *끼워 두었던 대출 영수증 끝을 반듯하게 접어 책갈피 아래로 숨긴다.*

---

### `lunch_yuna_5`
- 배경: `library_old.png`
- 다음: `lunch_yuna_5_b`

- 캐릭터: `yuna_normal.png`
**{name}**: *5초, 다시 10초가 고요하게 흐른다. 유나는 접힌 영수증 모서리만 매만질 뿐 책장을 넘기지 않는다.*

---

### `lunch_yuna_5_b`
- 배경: `library_old.png`
- 다음: `lunch_yuna_7`

- 캐릭터: `yuna_normal.png`
**{name}**: 옆자리 비었으면 앉아도 돼?

---

### `lunch_yuna_7`
- 배경: `library_old.png`
- 다음: `lunch_yuna_8`

- 캐릭터: `yuna_normal.png`
**유나**: *활자에서 눈을 떼지 않은 채 나직이 속삭인다.* 옆에서 소란 피우지만 않으면.

---

### `lunch_yuna_8`
- 배경: `library_old.png`
- 다음: `lunch_yuna_10`

- 캐릭터: `yuna_normal.png`
**유나**: 가방 내렸어. 이쪽 앉아. *옆 의자에서 자기 가방을 치워 주고는 다시 책으로 시선을 떨군다.*

---

### `lunch_yuna_10`
- 배경: `library_old.png`
- 다음: `lunch_yuna_10_b`

- 캐릭터: `yuna_normal.png`
**{name}**: *나란히 앉은 책상 위로 벽시계 초침 소리와 종이 스치는 소리만이 아스라이 겹친다.*

---

### `lunch_yuna_10_b`
- 배경: `library_old.png`
- 다음: `lunch_yuna_12`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나의 손끝이 낡은 책갈피에 적힌 흐릿한 글씨를 슬쩍 가린다. 나는 시선을 돌려 뒤편 서가에서 아무 책이나 한 권 뽑아 든다.*

---

### `lunch_yuna_12`
- 배경: `library_old.png`
- 다음: `lunch_yuna_13`

- 캐릭터: `yuna_normal.png`
**유나**: *책장 너머로 붉은빛이 감도는 눈동자가 천천히 올라온다.* 지금 꺼낸 그거, 3권인데.

---

### `lunch_yuna_13`
- 배경: `library_old.png`
- 다음: `lunch_yuna_14`

- 캐릭터: `yuna_normal.png`
**{name}**: 어? 진짜네.

---

### `lunch_yuna_14`
- 배경: `library_old.png`
- 다음: `lunch_yuna_15`

- 캐릭터: `yuna_normal.png`
**유나**: 그 시리즈는 1권부터 차례대로 읽어야 이해돼.

---

### `lunch_yuna_15`
- 배경: `library_old.png`
- 다음: `lunch_yuna_16`

- 캐릭터: `yuna_normal.png`
**유나**: 여기 있어. 이걸로 먼저 읽어. *자기 손옆에 쌓아 두었던 1권을 내 쪽으로 미끄러지듯 밀어 준다.*

---

### `lunch_yuna_16`
- 배경: `library_old.png`
- 다음: `lunch_yuna_17`

- 캐릭터: `yuna_normal.png`
**{name}**: 빌려주는 거야? 고마워.

---

### `lunch_yuna_17`
- 배경: `library_old.png`
- 다음: `lunch_yuna_18`

- 캐릭터: `yuna_normal.png`
**유나**: 다 읽으면 나한테 다시 돌려줘.

---

### `lunch_yuna_18`
- 배경: `event_yuna_reading.png`
- 다음: `lunch_yuna_20`

- 캐릭터: `없음`
**유나**: 그럼 이제 각자 읽자. *책상 하나를 사이에 두고 나란히 첫 장을 펼친다.*

---

### `lunch_yuna_20`
- 배경: `library_old.png`
- 다음: `lunch_yuna_21`

- 캐릭터: `yuna_normal.png`
**{name}**: *한참 만에 고개를 들자 창가 햇살을 등진 유나가 책 너머로 내 얼굴을 가만히 들여다보고 있었다.*

---

### `lunch_yuna_21`
- 배경: `library_old.png`
- 다음: `lunch_yuna_22`

- 캐릭터: `yuna_normal.png`
**{name}**: 왜 그래, 나한테 할 말 있어?

---

### `lunch_yuna_22`
- 배경: `library_old.png`
- 다음: `lunch_yuna_23`

- 캐릭터: `yuna_normal.png`
**유나**: *유나가 얇은 책갈피를 페이지 사이에 끼워 넣는다.* 그냥, 끝까지 조용히 있어 줘서.

---

### `lunch_yuna_23`
- 배경: `library_old.png`
- 다음: `lunch_yuna_24`

- 캐릭터: `yuna_normal.png`
**{name}**: 그게 왜?

---

### `lunch_yuna_24`
- 배경: `library_old.png`
- 다음: `lunch_yuna_25`

- 캐릭터: `yuna_normal.png`
**유나**: 생각보다 편했어.

---

### `lunch_yuna_25`
- 배경: `library_old.png`
- 다음: `lunch_yuna_choice`

- 캐릭터: `yuna_normal.png`
**유나**: *유나의 시선이 내가 쥔 책 표지를 스쳐 내 눈동자에 닿는다. 찰나의 정적 속에 서늘하고도 깊은 눈빛이 얽힌다.*

---

### `lunch_yuna_choice`
- 배경: `library_old.png`
- 선택지:
  1. "나머지도 읽어 보고 싶어." → `lunch_yuna_c1_1` | Yuna +4
  2. "조용히 책만 읽는 거 좋아하나 봐." → `lunch_yuna_c2_1` | Yuna -2
  3. "책보다 내가 더 재밌게 해줄게" → `lunch_yuna_c2_1` | Yuna -3
  4. "말 없어도 편한 사이가 될 것 같아" → `lunch_yuna_c2_1` | Yuna -4

- 캐릭터: `yuna_normal.png`
**{name}**: *읽던 책을 천천히 덮으며 유나와 시선을 맞춘다.*

---

### `lunch_yuna_c1_1`
- 배경: `library_old.png`
- 다음: `lunch_yuna_c1_2`

- 캐릭터: `yuna_normal.png`
**유나**: 응, 급하게 넘기지 말고 1권부터 천천히 읽어 봐. 뒤로 갈수록 훨씬 깊어지거든.

---

### `lunch_yuna_c1_2`
- 배경: `library_old.png`
- 다음: `lunch_yuna_freetalk`

- 캐릭터: `yuna_smile.png`
**유나**: 마지막 장까지 다 읽으면 말해 줘. 네가 어떻게 읽었는지 궁금하니까.

---

### `lunch_yuna_c2_1`
- 배경: `library_old.png`
- 다음: `lunch_yuna_c2_2`

- 캐릭터: `yuna_normal.png`
**유나**: 교실에 있어 봤자 딱히 할 일도 없으니까.

---

### `lunch_yuna_c2_2`
- 배경: `library_old.png`
- 다음: `lunch_yuna_freetalk`

- 캐릭터: `yuna_normal.png`
**유나**: 그래도 이 구석 자리는 꽤 마음에 들어. 아무도 안 찾아오거든.

---

### `lunch_yuna_freetalk`
- 배경: `library_old.png`
- 타입: `free_talk`
- 다음: `lunch_end`
- 컨텍스트: "전학 첫날 점심. 도서관에서 유나와 조용히 시간을 보내고 난 직후다. 아직 서로를 잘 모르지만 조용한 호기심이 오간다."
- 성격: "유나는 말수가 적고 조심성이 많은 독서가다. 먼저 관찰하고 생각한 뒤 말하며 신뢰가 쌓일수록 자기 생각을 조금씩 드러낸다."

- 캐릭터: `yuna_normal.png`
**유나**: *유나가 덮은 책 표지 위로 하얀 두 손을 가만히 포갠다.* 이렇게 조용히 시간 보내는 거, 지루하진 않았어?

---

### `lunch_end`
- 배경: `school_hallway.png`
- 다음: `after_start`

- 캐릭터: `없음`
**{name}**: *5교시 수업을 알리는 차임벨이 울려 퍼지며 짧고도 설레던 첫 점심시간이 막을 내렸다.*

---

## 1일차 — 방과후 `day1_3_afterschool`

### `after_start`
- 배경: `school_hallway.png`
- BGM: `daily.mp3`
- 다음: `after_kakao_1`

- 캐릭터: `없음`
**{name}**: *붉은 노을이 스며드는 방과후 복도. 주머니 속에서 진동하는 휴대폰을 꺼내 예전 학교 단체방 알림을 확인한다.*

---

### `after_kakao_1`
- 배경: `school_hallway.png`
- 다음: `after_kakao_3`

- 캐릭터: `없음`
**{name}**: *'야 소정이 새 학교에서 잘 지낸대' '다행이다 ㅋㅋ' 화면 위로 한때 매일 부대끼던 익숙한 이름들이 연달아 떠오른다.*

---

### `after_kakao_3`
- 배경: `school_hallway.png`
- 다음: `after_kakao_5`

- 캐릭터: `없음`
**{name}**: *'다행이다 ㅋㅋ' 그 가벼운 마지막 한 줄에 시선이 멈춘다. 답장 입력창을 몇 번이나 눌렀지만 깜빡이는 커서 앞으로 단 한 글자도 적지 못한다.*

---

### `after_kakao_5`
- 다음: `after_kakao_end`

<!-- i18n -->

---

### `after_kakao_end`
- 배경: `school_hallway.png`
- 분기:
  - [`chose_seoyeon_lunch`] → `after1_jealousy_seo_1`
  - [`chose_dain_lunch`] → `after1_jealousy_dain_1`
  - [`chose_yuna_lunch`] → `after1_jealousy_yuna_1`
  - [기본] → `after1_pre_miss`

- 캐릭터: `없음`
**{name}**: *한참을 망설이다 조용히 단체방 나가기를 누른다. 텅 빈 목록 맨 위에는 오늘 새로 추가된 이 학교 메신저만 남는다.*

---

### `after1_jealousy_seo_1`
- 배경: `school_hallway.png`
- 다음: `after1_jealousy_seo_2`

- 캐릭터: `dain_normal.png`
**다인**: 야, 너 아까 점심때 어디로 새 버렸어? 매점 가서 아무리 찾아도 안 보이더라.

---

### `after1_jealousy_seo_2`
- 배경: `school_hallway.png`
- 다음: `after1_jealousy_seo_3`

- 캐릭터: `dain_normal.png`
**{name}**: *입력창에 적어 넣던 '서연이랑'이라는 네 글자를 엄지로 빠르게 지워 낸다.*

---

### `after1_jealousy_seo_3`
- 배경: `school_hallway.png`
- 다음: `after1_jealousy_seo_choice`

- 캐릭터: `dain_pout.png`
**다인**: 계단 쪽에서 학생회장이랑 둘이 내려오는 거 다 봤거든. 옥상에는 왜 같이 올라간 거야?

---

### `after1_jealousy_seo_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "학생회장이랑 옥상에서 먹었어. (솔직)" → `after1_jealousy_seo_honest` | Dain -2 | 플래그: `day1_honest_to_dain`
  2. "그냥 혼자 돌아다녔어. (거짓말)" → `after1_jealousy_seo_lie` | 플래그: `day1_lied_to_dain`
  3. "네가 그렇게 찾을 줄 알았으면 같이 먹자고 할걸" → `after1_jealousy_seo_honest` | Dain -3
  4. "질투할 줄 알았으면 미리 말해줬을 텐데" → `after1_jealousy_seo_honest` | Dain -4

- 캐릭터: `dain_pout.png`
**다인**: *다인의 연이은 메시지에 휴대폰을 쥔 손끝에 저도 모르게 힘이 들어간다.*

---

### `after1_jealousy_seo_honest`
- 배경: `school_hallway.png`
- 다음: `after1_jealousy_seo_honest_2`

- 캐릭터: `dain_pout.png`
**{name}**: 응, 아침에 학교 안내해 주면서 학생회장이 옥상으로 불렀어. 도시락도 넉넉히 싸 왔더라고.

---

### `after1_jealousy_seo_honest_2`
- 배경: `school_hallway.png`
- 다음: `after1_jealousy_seo_yuna`

- 캐릭터: `dain_normal.png`
**다인**: 그랬어? 치, 먼저 간다고 한마디라도 해주지 그랬냐.

---

### `after1_jealousy_seo_lie`
- 배경: `school_hallway.png`
- 다음: `after1_jealousy_seo_lie_2`

- 캐릭터: `dain_normal.png`
**{name}**: 아니야, 학교 구조 익히려고 그냥 혼자 이리저리 돌아다녔어.

---

### `after1_jealousy_seo_lie_2`
- 배경: `school_hallway.png`
- 다음: `after1_jealousy_seo_yuna`

- 캐릭터: `dain_laugh.png`
**다인**: 진짜 혼자였어? 흐음, 그럼 내가 뒷모습을 잘못 봤나 보네.

---

### `after1_jealousy_seo_yuna`
- 배경: `school_hallway.png`
- 다음: `after1_pre_miss`

- 캐릭터: `dain_normal.png`
**유나**: *가방 옆주머니에 꽂혀 있던 접힌 쪽지를 펼친다. 연보라색 잉크로 눌러 쓴 유나의 글씨 끝에 마지막 마침표가 살짝 번져 있다.* 점심때 옥상에서 내려오는 거 봤어. 학생회장이랑 꽤 가까워 보였어.

---

### `after1_jealousy_dain_1`
- 배경: `school_hallway.png`
- 다음: `after1_jealousy_dain_2`

- 캐릭터: `seyoun_normal.png`
**서연**: 아까 점심때 매점 벤치에서 다인이랑 같이 있던데. 첫날부터 적응이 아주 빠르네.

---

### `after1_jealousy_dain_2`
- 배경: `school_hallway.png`
- 다음: `after1_pre_miss`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *서연이 품에 안은 클립보드 모서리를 반듯하게 고쳐 잡는다. 서늘한 안경 너머 시선에 걸음을 멈추고 대답을 고른다.*

---

### `after1_jealousy_yuna_1`
- 배경: `school_hallway.png`
- 다음: `after1_jealousy_yuna_2`

- 캐릭터: `dain_normal.png`
**다인**: 야, 너 점심시간에 도서관 갔다 왔다며? 그것도 유나랑 단둘이?

---

### `after1_jealousy_yuna_2`
- 배경: `school_hallway.png`
- 다음: `after1_pre_miss`

- 캐릭터: `dain_normal.png`
**다인**: 신기하네, 걔 원래 옆에 누가 오는 거 진짜 싫어하거든.

---

### `after1_pre_miss`
- 배경: `school_hallway.png`
- 분기:
  - [`met_dain`] → `after_dain_skip`
  - [기본] → `after_miss_dain_1`

- 캐릭터: `없음`
**{name}**: *휴대폰을 주머니에 넣고 석양이 길게 드리운 복도를 따라 천천히 걸음을 옮긴다.*

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
**{name}**: *복도 모퉁이를 돌려는데 등 뒤에서 운동화 바닥이 마룻바닥을 박차는 경쾌한 발소리가 빠르게 가까워진다.*

---

### `after_miss_dain_2`
- 배경: `school_hallway.png`
- 제외조건: `met_dain`
- 다음: `after_miss_dain_3`

- 캐릭터: `dain_normal.png`
**다인**: 야, 거기 앞 조심해!

---

### `after_miss_dain_3`
- 배경: `school_hallway.png`
- 제외조건: `met_dain`
- 다음: `after_miss_dain_4`

- 캐릭터: `dain_normal.png`
**다인**: 휴, 아슬아슬하게 비켜 줬네! *내 어깨를 스치며 바람을 일으키더니 세 걸음 뒤에서야 겨우 멈춰 선다.*

---

### `after_miss_dain_4`
- 배경: `school_hallway.png`
- 제외조건: `met_dain`
- 다음: `after_miss_dain_5`

- 캐릭터: `dain_laugh.png`
**다인**: 오, 방금 반사신경 꽤 괜찮았는데? 역시 운동 좀 해 봤지?

---

### `after_miss_dain_5`
- 배경: `school_hallway.png`
- 제외조건: `met_dain`
- 다음: `after_miss_dain_6`

- 캐릭터: `dain_laugh.png`
**{name}**: 하마터면 부딪힐 뻔했잖아. 복도에서 웬 전력질주야?

---

### `after_miss_dain_6`
- 배경: `school_hallway.png`
- 제외조건: `met_dain`
- 다음: `after_miss_dain_6_b`

- 캐릭터: `dain_laugh.png`
**다인**: 배구부 집합 시간 늦었거든! 지금 당장 체육관 뛰어가야 해. 내일 아침에 보자, 전학생!

---

### `after_miss_dain_6_b`
- 배경: `school_hallway.png`
- 다음: `after_miss_dain_7`

- 캐릭터: `dain_pain.png`
**{name}**: *돌아서서 두어 걸음 내딛던 다인이 순간 걸음을 멈추고 오른쪽 무릎을 짚는다. 하지만 이내 아무 일도 없었다는 듯 손을 떼고 다시 속도를 올린다.*

---

### `after_miss_dain_7`
- 배경: `school_hallway.png`
- 플래그: `met_dain`
- 분기:
  - [`met_yuna`] → `after_yuna_skip`
  - [기본] → `after_miss_yuna_1`

- 캐릭터: `dain_laugh.png`
**다인**: 참, 내 이름 다인이야! 내일 와서 이름 까먹으면 안 된다! *복도 끝 모퉁이에서 땀에 젖은 앞머리를 흔들며 손을 높이 들어 보인다.*

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
**{name}**: *도서관 앞 복도를 지나는데 붉은 눈동자의 여학생이 두꺼운 책을 팔에 받쳐 안고 걸어온다. 걷어 올린 소매 끝으로 작은 타투가 살짝 드러나 있다.*

---

### `after_miss_yuna_1_b`
- 배경: `library_old.png`
- 다음: `after_miss_yuna_1_c`

- 캐릭터: `yuna_normal.png`
**{name}**: 저기, 방금 책 사이에서 이거 떨어졌어.

---

### `after_miss_yuna_1_c`
- 배경: `library_old.png`
- 다음: `after_miss_yuna_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *바닥에 내려앉은 낡은 책갈피를 조심스레 주워 건넨다. 유나는 책을 한쪽 팔에 고쳐 안으며 내 손끝에서 책갈피를 받아 든다.*

---

### `after_miss_yuna_2`
- 배경: `library_old.png`
- 제외조건: `met_yuna`
- 다음: `after_miss_yuna_3`

- 캐릭터: `yuna_normal.png`
**유나**: 다행이다, 모서리 안 구겨졌네. *하얀 손가락으로 책갈피 끝을 쓸어내리며 작게 숨을 내쉰다.*

---

### `after_miss_yuna_3`
- 배경: `library_old.png`
- 제외조건: `met_yuna`
- 다음: `after_miss_yuna_3_b`

- 캐릭터: `yuna_normal.png`
**유나**: 주워 줘서 고마워.

---

### `after_miss_yuna_3_b`
- 배경: `library_old.png`
- 다음: `after_miss_yuna_4`

- 캐릭터: `yuna_normal.png`
**유나**: *소중한 것을 감추듯 책갈피를 책등 깊숙이 끼워 넣고는 소리 없이 몸을 돌려 멀어진다.*

---

### `after_miss_yuna_4`
- 플래그: `met_yuna`
- 분기:
  - [`ate_lunch_seoyeon`] → `after_end`
  - [`chose_seoyeon_lunch`] → `after_end`
  - [기본] → `after_miss_seoyeon_1`

<!-- i18n -->

---

### `after_miss_seoyeon_1`
- 배경: `school_hallway.png`
- 제외조건: `ate_lunch_seoyeon`
- 다음: `after_miss_seoyeon_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *가방을 메고 신발장으로 내려가려는데 계단 앞 복도에서 서류를 안고 오던 서연과 정면으로 마주친다.*

---

### `after_miss_seoyeon_2`
- 배경: `school_hallway.png`
- 제외조건: `ate_lunch_seoyeon`
- 다음: `after_miss_seoyeon_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 너 아까 점심시간에 어디 갔었어?

---

### `after_miss_seoyeon_3`
- 배경: `school_hallway.png`
- 제외조건: `ate_lunch_seoyeon`
- 다음: `after_miss_seoyeon_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: 점심시간에 어디라니?

---

### `after_miss_seoyeon_4`
- 배경: `school_hallway.png`
- 제외조건: `ate_lunch_seoyeon`
- 다음: `after_miss_seoyeon_5`

- 캐릭터: `seyoun_normal.png`
**서연**: 일부러 옥상 문까지 열어 두고 있었는데 끝까지 안 올라오더라. 전학 첫날부터 학생회장 바람맞히다니 배짱이 꽤 크네.

---

### `after_miss_seoyeon_5`
- 배경: `school_hallway.png`
- 제외조건: `ate_lunch_seoyeon`
- 다음: `after_miss_seoyeon_6`

- 캐릭터: `seyoun_normal.png`
**{name}**: 설마 옥상에서 계속 나 기다린 거야?

---

### `after_miss_seoyeon_6`
- 배경: `school_hallway.png`
- 제외조건: `ate_lunch_seoyeon`
- 다음: `after_miss_seoyeon_7`

- 캐릭터: `seyoun_normal.png`
**서연**: 기다리긴 누가 기다려, 내 도시락 먼저 먹고 있었지. 아무튼 다음부턴 못 오면 미리 말이라도 해 줘.

---

### `after_miss_seoyeon_7`
- 배경: `school_hallway.png`
- 배경톤: `empty`
- 제외조건: `ate_lunch_seoyeon`
- 다음: `after_miss_seoyeon_8`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연은 클립보드를 가슴께로 끌어안으며 시선을 살짝 피한 채 손에 쥔 볼펜 뚜껑을 딸깍 닫는다.*

---

### `after_miss_seoyeon_8`
- 배경: `school_hallway.png`
- 제외조건: `ate_lunch_seoyeon`
- 다음: `after_end`

- 캐릭터: `seyoun_pout.png`
**서연**: 내일 점심엔 다른 데로 새지 마.

---

### `after_end`
- 배경: `school_hallway.png`
- 선택지:
  1. "교무실" → `after_hidden_homeroom_1` | 플래그: `homeroom_day1_choice`
  2. "보건실" → `after_hidden_nurse_intro` | 플래그: `nurse_day1_choice`
  3. "하교" → `night_start` | 플래그: `skip_hidden_day1`

- 캐릭터: `없음`
**{name}**: *하교를 알리는 안내 방송이 끝난 뒤 노을빛만 남은 복도가 차츰 고요해진다.*

---

### `after_hidden_homeroom_1`
- 배경: `school_hallway.png`
- 다음: `after_hidden_homeroom_aff`

- 캐릭터: `없음`
**{name}**: *반쯤 열린 교무실 문가에 서서 조심스레 노크한다.* 선생님, 지금 잠깐 시간 괜찮으세요?

---

### `after_hidden_homeroom_aff`
- 배경: `teacher_office.png`
- 호감분기: Teacher
  - [0+] → `after_hidden_homeroom_2`
  - [-19 이상] → `after_hidden_homeroom_cool`
  - [기본] → `after_hidden_homeroom_neg`
- 다음: `after_hidden_homeroom_neg`

- 캐릭터: `없음`

---

### `after_hidden_homeroom_cool`
- 배경: `teacher_office.png`
- 다음: `night_start`

- 캐릭터: `teacher_normal.png`
**담임**: *출석부를 펼친 채 문 쪽으로 고개만 든다.* 미안하지만 지금은 출석 마감 정리 중이야. 급한 일 아니면 내일 교실에서 얘기하자.

---

### `after_hidden_homeroom_neg`
- 배경: `teacher_office.png`
- 다음: `night_start`

- 캐릭터: `teacher_worried.png`
**담임**: *클립보드를 품으로 끌어당기며 선을 긋는다.* 벌써 하교 시간 지났다. 오늘은 그만 들어가고 내일 보자.

---

### `after_hidden_homeroom_2`
- 배경: `teacher_office.png`
- 다음: `after_hidden_homeroom_3`

- 캐릭터: `teacher_normal.png`
**담임**: 어, {name} 아니야? 아직 안 가고 무슨 일이야?

---

### `after_hidden_homeroom_3`
- 배경: `teacher_office.png`
- 다음: `after_hidden_homeroom_3_b`

- 캐릭터: `teacher_normal.png`
**담임**: 마침 한가하던 참이니까 이리 들어와. *팔꿈치까지 걷어 올린 부드러운 가디건 소매 아래로 출석부와 학사 일정표가 어지럽게 놓여 있다.*

---

### `after_hidden_homeroom_3_b`
- 배경: `teacher_office.png`
- 다음: `after_hidden_homeroom_3_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 앞으로 학교생활 하면서 알아둬야 할 게 있어서 잠깐 여쭤보러 왔어요.

---

### `after_hidden_homeroom_3_c`
- 배경: `teacher_office.png`
- 다음: `after_hidden_homeroom_4`

- 캐릭터: `teacher_normal.png`
**담임**: 아, 그 얘기였어? 마침 잘 왔네, 거기 편하게 앉아.

---

### `after_hidden_homeroom_4`
- 배경: `teacher_office.png`
- 다음: `after_hidden_homeroom_choice`

- 캐릭터: `teacher_normal.png`
**담임**: 사고 친 것도 아닌데 그렇게 긴장할 필요 없어. 오늘 하루 지내 보니까 우리 반 분위기는 좀 어때?

---

### `after_hidden_homeroom_choice`
- 배경: `teacher_office.png`
- 선택지:
  1. "괜찮습니다. 아직 낯설지만요." → `after_homeroom_ok` | Teacher +0
  2. "솔직히 좀 정신없습니다." → `after_homeroom_honest_1` | Teacher +6
  3. "전학생이라고 특별히 챙기실 필요는 없는데요." → `after_homeroom_choice_trap` | Teacher -2

- 캐릭터: `teacher_normal.png`
**담임선생님**: *들고 있던 클립보드를 책상 위에 내려놓고 턱을 살짝 괸 채 내 얼굴을 가만히 들여다본다.*

---

### `after_homeroom_choice_trap`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_ok_6`

- 캐릭터: `teacher_worried.png`
**담임선생님**: *내려놓았던 클립보드를 다시 들어 가슴 앞에 세운다.* 특별 취급이 아니라 담임으로서 당연한 확인인데. 네가 불편하다면 오늘은 여기까지 하자.

---

### `after_homeroom_ok`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_ok_b`

- 캐릭터: `teacher_normal.png`
**담임**: 그래? 다행이네. 혹시라도 막히는 일 생기면 언제든 교무실로 찾아와. 아직 남은 전학 서류도 있으니까.

---

### `after_homeroom_ok_b`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_ok_3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *책상 끝에 쌓인 서류 뭉치를 한쪽으로 밀어 내게 앉을 자리를 마련해 준다.*

---

### `after_homeroom_ok_3`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_ok_4`

- 캐릭터: `teacher_normal.png`
**담임**: 조금 낯선 정도면 아주 순조로운 거야. 전학 첫날부터 오랜만인 것처럼 편하면 그게 더 이상하잖아.

---

### `after_homeroom_ok_4`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_ok_5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *담임의 가느다란 손가락 끝이 넘기려던 전학 서류 모서리에 잠시 머물러 있다.*

---

### `after_homeroom_ok_5`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_ok_6`

- 캐릭터: `teacher_normal.png`
**담임**: 첫날부터 너무 완벽하게 적응하려고 애쓰면 금방 지쳐. 가끔은 어설픈 티도 내면서 천천히 가. 자, 이제 얼른 들어가 봐.

---

### `after_homeroom_ok_6`
- 배경: `teacher_office.png`
- 플래그: `homeroom_day1`
- 다음: `night_start`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 조심히 들어가. *은은한 커피 향을 남기며 다시 자기 책상 쪽으로 의자를 돌린다.*

---

### `after_homeroom_honest_1`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_2`

- 캐릭터: `teacher_normal.png`
**담임**: 하긴, 정신없는 게 당연하지. 낯선 교실에서 첫날부터 여유 넘치면 그게 더 신기한 일이야.

---

### `after_homeroom_honest_2`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_3`

- 캐릭터: `teacher_normal.png`
**{name}**: 선생님도 학창 시절에 전학 다녀 보신 적 있어요?

---

### `after_homeroom_honest_3`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_3_b`

- 캐릭터: `teacher_normal.png`
**담임**: 전학이랑은 조금 다르지만 아무 연고도 없는 낯선 곳에 혼자 뚝 떨어진 적은 있었지.

---

### `after_homeroom_honest_3_b`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *담임은 클립보드를 뒤집어 놓고 엄지손가락으로 매끄러운 플라스틱 모서리를 천천히 문지른다.*

---

### `after_homeroom_honest_4`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_5`

- 캐릭터: `teacher_normal.png`
**담임**: 교실 공기가 갑갑해지면 언제든 이리로 도망쳐 와. 따뜻한 커피 한 잔, 아 맞다 학생이니까 달달한 주스 정도는 언제든 내줄 수 있으니까.

---

### `after_homeroom_honest_5`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_6`

- 캐릭터: `teacher_normal.png`
**{name}**: 교무실 오면 선생님이 직접 음료수도 사 주시는 거예요?

---

### `after_homeroom_honest_6`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_6_b`

- 캐릭터: `teacher_normal.png`
**담임**: 우리 반 전학생을 향한 순수한 교육적 관심이라고 해 두자.

---

### `after_homeroom_honest_6_b`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_choice2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *장난기 어린 미소와 함께 엄지손가락으로 출석부의 살짝 접힌 귀퉁이를 꾹 눌러 편다.*

---

### `after_homeroom_honest_choice2`
- 배경: `teacher_office.png`
- 선택지:
  1. "걱정이면 걱정이라고 하시면 되잖아요" → `after_homeroom_honest_choice2a` | Teacher +8
  2. "그럼 다음에도 주스로 부탁드릴게요, 선생님." → `after_homeroom_honest_choice2b` | Teacher -2
  3. "저만 특별히 챙겨주시는 거라고 생각해도 돼요?" → `after_homeroom_honest_choice2b` | Teacher -4
  4. "다음에도 선생님이 골라주신 걸로 부탁드릴게요" → `after_homeroom_honest_choice2b` | Teacher -5

- 캐릭터: `teacher_normal.png`
**{name}**: *책상 모서리에 기댄 담임과의 거리가 한 뼘쯤 가까워진 채 부드러운 시선이 마주친다.*

---

### `after_homeroom_honest_choice2a`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_choice2a_b`

- 캐릭터: `teacher_shy.png`
**담임**: 그래, 솔직히 좀 걱정됐어. 내 얼굴에 그렇게 티가 많이 났나?

---

### `after_homeroom_honest_choice2a_b`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_7`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *괜히 헛기침을 한 번 하며 출석부를 책상 모서리 선에 맞춰 반듯하게 정돈한다.*

---

### `after_homeroom_honest_choice2b`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_choice2b_b`

- 캐릭터: `teacher_smile.png`
**담임**: *만년필 끝으로 복도 쪽 자판기를 가리키며 웃는다.* 너무 큰 기대는 하지 마. 저기 있는 자판기 캔 주스니까.

---

### `after_homeroom_honest_choice2b_b`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_7`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *출석부를 덮어 들고 교무실 문턱까지 배웅하러 나왔다가 문득 걸음을 멈추고 다시 나를 부른다.*

---

### `after_homeroom_honest_7`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_8`

- 캐릭터: `teacher_normal.png`
**담임**: 참, {name}.

---

### `after_homeroom_honest_8`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_9`

- 캐릭터: `teacher_normal.png`
**{name}**: 네, 선생님?

---

### `after_homeroom_honest_9`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_9_b`

- 캐릭터: `teacher_normal.png`
**담임**: 혼자 겉돌거나 적응 못 하는 눈치 보이면 내가 직접 붙잡으러 갈 거니까 알아서 잘해.

---

### `after_homeroom_honest_9_b`
- 배경: `teacher_office.png`
- 다음: `after_homeroom_honest_10`

- 캐릭터: `teacher_normal.png`
**{name}**: *복도 저편에서 다른 교사의 발소리가 들려오자 담임이 책상 위 서류를 자연스레 옆으로 밀어 놓는다.*

---

### `after_homeroom_honest_10`
- 배경: `school_hallway.png`
- 플래그: `homeroom_day1`
- 다음: `after_homeroom_freetalk`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 나가는 길인데 복도 걸으면서 마저 얘기할까? *출석부를 품에 안고 내 옆으로 나란히 문을 나선다.*

---

### `after_homeroom_freetalk`
- 배경: `school_hallway.png`
- 타입: `free_talk`
- 다음: `night_start`
- 컨텍스트: "[매체: 대면] 전학 첫날 방과후 교무실 앞. 학생이 학교 적응에 관해 상담을 청했고 담임이 이야기를 들어 주었다. 그 대화를 이어가는 중이다. 학생이 먼저 찾아온 이유와 실제로 한 말을 바탕으로 편하게 묻고 답한다."
- 성격: "담임은 무심해 보여도 학생의 상태를 놓치지 않는 20대 후반 교사다. 갈색 웨이브 긴 머리에 베이지 가디건을 입고 상담과 지도는 공식 절차 안에서 진행한다. 소설가를 꿈꾸던 과거가 있으며 지금도 창작에 관심이 있다."

- 캐릭터: `teacher_normal.png`
**담임**: *교무실 문을 반쯤 닫아 둔 채 출석부를 옆구리에 끼고 내 보폭에 맞춰 선다.*

---

### `after_hidden_nurse_intro`
- 배경: `school_hallway.png`
- 다음: `after_hidden_nurse_choice`

- 캐릭터: `없음`
**{name}**: *갑자기 핑 도는 어지럼증에 차가운 복도 벽을 짚고 멈춰 선다. 고개를 들자 바로 옆 문 위에 걸린 보건실 표지판이 눈에 들어온다.*

---

### `after_hidden_nurse_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "보건실에 들어간다" → `after_hidden_nurse_intro_b`
  2. "그냥 집에 간다" → `after_nurse_skip` | Nurse +0
  3. "심심하실 테니 잠깐 말동무나 해 준다" → `after_hidden_nurse_intro_b` | Nurse -3
  4. "건강 상담도 친해지는 데 도움이 되겠지" → `after_hidden_nurse_intro_b` | Nurse -4

- 캐릭터: `없음`
**{name}**: *아침부터 낯선 시선과 소음 속에 부대낀 피로가 한꺼번에 밀려와 보건실 문 앞에서 발걸음이 떨어지지 않는다.*

---

### `after_hidden_nurse_intro_b`
- 배경: `school_hallway.png`
- 다음: `after_nurse_d1_aff`

- 캐릭터: `없음`
**{name}**: *가쁜 숨을 한 번 골라 쉬고 서늘한 금속 문손잡이를 조심스레 돌려 연다.*

---

### `after_nurse_d1_aff`
- 배경: `nurse_room.png`
- 호감분기: Nurse
  - [0+] → `after_nurse_enter_1`
  - [-19 이상] → `after_nurse_d1_cool`
  - [기본] → `after_nurse_d1_neg`
- 다음: `after_nurse_d1_neg`

- 캐릭터: `없음`

---

### `after_nurse_d1_cool`
- 배경: `nurse_room.png`
- 다음: `night_start`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *진료 차트를 덮으며 시선을 든다.* 지금은 퇴근 전 약품 정리 중이야. 특별히 아픈 데 없으면 그만 귀가해.

---

### `after_nurse_d1_neg`
- 배경: `nurse_room.png`
- 다음: `night_start`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *예약 기록부를 닫아건다.* 오늘 진료는 마감했어. 곧장 집으로 돌아가.

---

### `after_nurse_enter_1`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_2`

- 캐릭터: `nurse_normal.png`
**{name}**: *문을 열자 알싸한 소독약 냄새 위로 은은하고 달콤한 잔향이 포개진다. 흰 가운을 걸친 선생님이 얇은 안경테 너머로 나를 바라본다.* 실례합니다.

---

### `after_nurse_enter_2`
- 배경: `nurse_room.png`
- 스탯: Nurse +6
- 다음: `after_nurse_enter_2_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 어라, 방과후에 늦은 손님이네.

---

### `after_nurse_enter_2_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_3`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 새 진료 기록지 한 장을 끌어당겨 가느다란 손끝으로 첫 줄을 톡톡 두드린다.*

---

### `after_nurse_enter_3`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_4`

- 캐릭터: `nurse_normal.png`
**{name}**: 갑자기 속이 좀 울렁거리고 어지러워서요.

---

### `after_nurse_enter_4`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_4_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 오늘 온 전학생 맞지? 첫날부터 보건실 찾을 정도면 하루가 꽤 고단했나 보네. 이리 가까이 와 봐.

---

### `after_nurse_enter_4_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_4_c`

- 캐릭터: `nurse_normal.png`
**{name}**: 제가 전학생인 건 어떻게 바로 아셨어요?

---

### `after_nurse_enter_4_c`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_4_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 일단 처음 보는 잘생긴 얼굴이기도 하고 교복 재킷에 접힌 자국이 하나도 없잖아. 내 추리 맞지?

---

### `after_nurse_enter_4_d`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *여유로운 눈웃음을 지으며 전자체온계를 건네더니 책상 아래 선반에서 혈압계를 꺼내 올린다.*

---

### `after_nurse_enter_5`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *체온계 숫자를 확인한 뒤 내 소매를 걷어 올리고 서늘한 손끝으로 팔뚝에 혈압계 커프를 감아 준다.*

---

### `after_nurse_enter_6`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_6_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 다행히 열은 없는데 혈압이 평소보다 살짝 떨어져 있네.

---

### `after_nurse_enter_6_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_7`

- 캐릭터: `nurse_normal.png`
**{name}**: 사실 오늘 아침에 긴장해서 밥을 거의 못 먹고 나왔거든요.

---

### `after_nurse_enter_7`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_7_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 빈속에 온종일 신경 썼으니 어지러울 수밖에. 자, 저쪽 침대에 가서 누워. 딱 10분만 눈 붙이고 쉬자.

---

### `after_nurse_enter_7_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_7_c`

- 캐릭터: `nurse_normal.png`
**{name}**: *안쪽 침대에 몸을 뉘자 빳빳하게 풀 먹인 하얀 시트가 바스락거리며 서늘한 감촉을 전해 온다.*

---

### `after_nurse_enter_7_c`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_7_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *선생님이 침대 둘레의 커튼을 반쯤 끌어 노을빛을 가려 준다.* 마실 것 좀 줄까? 시원한 물이 좋아, 아니면 따뜻한 차?

---

### `after_nurse_enter_7_d`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_choice`

- 캐릭터: `nurse_normal.png`
**{name}**: 그냥 미지근한 물 한 잔이면 충분해요.

---

### `after_nurse_enter_choice`
- 배경: `nurse_room.png`
- 선택지:
  1. "선생님이 더 피곤해 보이는데요" → `after_nurse_enter_choice_a` | Nurse +8 | 플래그: `nurse_choice_a`
  2. "보건실은 조용하네요" → `after_nurse_enter_choice_b` | Nurse +2 | 플래그: `nurse_choice_b`
  3. "여긴 선생님 혼자 계셔서 편하시겠어요." → `after_nurse_enter_trap` | Nurse -3 | 플래그: `nurse_choice_trap`

- 캐릭터: `nurse_normal.png`
**{name}**: *반쯤 닫힌 하얀 커튼 너머로 기록지를 작성하는 보건선생님의 차분한 실루엣이 비친다.*

---

### `after_nurse_enter_choice_a`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_8`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 어라, 남 걱정할 처지가 아닌데 눈치까지 빠른 환자네. 그래도 지금은 네 컨디션부터 챙기자.

---

### `after_nurse_enter_choice_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_8`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그치? 나도 이 방의 고요함이 제일 좋아. 알싸한 소독약 냄새만 빼면 낮잠 자기도 완벽하거든.

---

### `after_nurse_enter_trap`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_8`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 학생들이 없을 땐 일지도 정리하고 약품 재고도 맞춰야 해. 방이 조용하다고 해서 늘 놀고 있는 건 아니란다.

---

### `after_nurse_enter_8`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_8_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 무리해서 말 길게 이어 갈 필요 없어. 현기증 날 때는 숨도 대답도 반 박자씩 천천히 하는 거야.

---

### `after_nurse_enter_8_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_8_c`

- 캐릭터: `nurse_normal.png`
**{name}**: 이렇게 잠깐 누워 있으면 금방 가라앉을까요?

---

### `after_nurse_enter_8_c`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_8_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *커튼 틈으로 다가와 종이컵에 담긴 물을 건네며 내 손등을 가볍게 스친다.* 물 천천히 마시고 숨 고르면 한결 나아질 거야. 그래도 계속 울렁거리면 담임선생님께도 말씀드리자.

---

### `after_nurse_enter_8_d`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_9_b`

- 캐릭터: `nurse_normal.png`
**{name}**: *물을 한 모금 머금고 고요한 보건실 안을 둘러본다. 노을이 내려앉은 창가 구석에 손바닥만 한 작은 화분 하나가 놓여 있다.*

---

### `after_nurse_enter_9_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_9_c`

- 캐릭터: `nurse_normal.png`
**{name}**: 창가에 있는 저 초록색 화분도 선생님이 직접 키우시는 거예요?

---

### `after_nurse_enter_9_c`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_9_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 응, 로즈마리야. 내가 예전에 대학병원에서 일할 때부터 계속 데리고 다니던 애거든.

---

### `after_nurse_enter_9_d`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_9_e`

- 캐릭터: `nurse_normal.png`
**{name}**: 학교 오시기 전엔 큰 병원에 계셨어요?

---

### `after_nurse_enter_9_e`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_10`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *선생님의 가느다란 손가락이 책상 서랍 손잡이를 한 번 꼭 쥐었다가 소리 없이 놓는다.*

---

### `after_nurse_enter_10`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_10_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 다 지나간 옛날얘기야. 난 지금 이 학교가 훨씬 좋아. 여기선 종소리만 울리면 아팠던 애들도 다들 씩씩하게 교실로 돌아가잖아.

---

### `after_nurse_enter_10_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_10_c`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 자, 약속한 10분 지났네. 이제 속은 좀 어때? *진료 기록지를 넣어 두려 열었던 서랍 안쪽으로 빛바랜 연두색 노트 한 권이 얼핏 스친다.*

---

### `after_nurse_enter_10_c`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11`

- 캐릭터: `nurse_normal.png`
**{name}**: 덕분에 많이 가라앉았어요. 감사합니다.

---

### `after_nurse_enter_11`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 다행이네. 앞으로도 어지러우면 언제든 찾아와, 보건실 문은 늘 열려 있으니까. 대신 혼자 미련하게 참다가 늦게 오면 내가 무섭게 혼낼 줄 알아.

---

### `after_nurse_enter_11_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_c`

- 캐릭터: `nurse_angry.png`
**{name}**: 환자를 혼내기도 하세요?

---

### `after_nurse_enter_11_c`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *진료 기록지 위에서 볼펜을 데구루루 굴리며 눈을 가늘게 뜬다.* 당연하지, 아픈 걸 숨기고 버티다 크게 쓰러지면 혼나야지. 못 참게 말리는 게 내가 이 방에 있는 이유니까.

---

### `after_nurse_enter_11_d`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_e`

- 캐릭터: `nurse_angry.png`
**보건선생님**: *빈 종이컵을 받아 책상 위에 내려놓자 나지막하고 둔탁한 소리가 정적을 깨운다.*

---

### `after_nurse_enter_11_e`
- 배경: `nurse_room.png`
- 분기:
  - [`nurse_choice_a`] → `after_nurse_enter_11_f`
  - [`nurse_choice_b`] → `after_nurse_enter_11_h`
  - [기본] → `after_nurse_enter_11_j`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *아까 내가 건넸던 말이 떠올랐는지 가운 깃 너머로 하얀 목덜미를 한 번 쓸어내린다.*

---

### `after_nurse_enter_11_f`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_g`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 참, 아까 내가 더 피곤해 보인다고 했었지? 전학생 눈에도 그렇게 티가 날 정도면 오늘은 나도 일찍 퇴근해야겠네. 걱정해 줘서 고마워.

---

### `after_nurse_enter_11_g`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_j`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *진료 기록지 끝 칸에 반듯한 글씨로 처치 시간을 적고 물컵을 정리한다.*

---

### `after_nurse_enter_11_h`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_i`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 아까 보건실이 조용해서 좋다고 했었지? 교실 소음이 버거울 땐 담임선생님께 말씀드리고 이리로 숨으러 와. 혼자 끙끙 참지 말고.

---

### `after_nurse_enter_11_i`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_j`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *반쯤 쳐 두었던 커튼을 활짝 걷어 내고 구겨진 침대 시트를 손바닥으로 매만져 정돈한다.*

---

### `after_nurse_enter_11_j`
- 다음: `after_nurse_enter_11_k`

<!-- i18n -->

---

### `after_nurse_enter_11_k`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_l`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 아, 맞다 전학생.

---

### `after_nurse_enter_11_l`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_11_m`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 차트에 적어야 하는데 네 이름이 뭐야?

---

### `after_nurse_enter_11_m`
- 배경: `nurse_room.png`
- 다음: `after_nurse_enter_12`

- 캐릭터: `nurse_normal.png`
**{name}**: 3학년 2반 {name}입니다.

---

### `after_nurse_enter_12`
- 배경: `nurse_room.png`
- 플래그: `nurse_day1`
- 다음: `after_nurse_enter_12_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 차트에 잘 적어 둘게. 가다가 또 현기증 나면 복도에서 버티지 말고 곧장 돌아와.

---

### `after_nurse_enter_12_b`
- 배경: `nurse_room.png`
- 다음: `after_nurse_freetalk`

- 캐릭터: `nurse_normal.png`
**{name}**: *침대에서 내려서려는데 보건선생님이 벽시계를 한 번 확인하더니 회전의자를 내 쪽으로 빙그르 돌린다.*

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
**{name}**: *깊게 숨을 들이쉬며 노을이 내려앉은 교문 쪽으로 천천히 걸음을 옮긴다.*

---

## 1일차 — 밤 `day1_4_night`

### `night_start`
- 배경: `room_my.png`
- BGM: `night1.mp3`
- 다음: `night_start_3`

- 캐릭터: `없음`
**{name}**: *집으로 돌아와 아직 낯선 새 교복을 옷걸이에 걸어 두고 침대 매트리스 위로 길게 몸을 뉜다.*

---

### `night_start_3`
- 배경: `room_my.png`
- 분기:
  - [`chose_seoyeon_lunch`] → `night_msg_seo_1`
  - [`chose_yuna_lunch`] → `night_msg_yuna_1`
  - [`chose_dain_lunch`] → `night_msg_dain_1`
  - [기본] → `night_hidden_check`

- 캐릭터: `없음`
**{name}**: *고요한 방 안, 머리맡에 둔 휴대폰이 짧게 진동하며 학교 메신저 알림을 띄운다.*

---

### `night_msg_seo_1`
- 배경: `room_my.png`
- 다음: `night_msg_seo_2`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 오늘 점심때 올라왔던 옥상, 어땠어?

---

### `night_msg_seo_2`
- 배경: `room_my.png`
- 다음: `night_msg_seo_3`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: *바람도 시원하고 도시락도 맛있었어*

---

### `night_msg_seo_3`
- 배경: `room_my.png`
- 다음: `night_msg_seo_4`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 다행이네. 내일은 마실 음료도 시원한 걸로 챙겨 둘게

---

### `night_msg_seo_4`
- 배경: `room_my.png`
- 다음: `night_msg_seo_5`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 전학생 특별 서비스야

---

### `night_msg_seo_5`
- 배경: `room_my.png`
- 다음: `night_hidden_check`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: *망설이다 덧붙인 듯 한 줄 아래 따로 도착한 '전학생 특별 서비스야'라는 말풍선에 괜히 입꼬리가 올라간다.*

---

### `night_msg_yuna_1`
- 배경: `room_my.png`
- 다음: `night_msg_yuna_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 오늘 점심엔 옆에서 조용히 있어 줘서 고마웠어

---

### `night_msg_yuna_2`
- 배경: `room_my.png`
- 다음: `night_msg_yuna_3`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 내일도 내 옆자리 비워 놓을게

---

### `night_msg_yuna_3`
- 배경: `room_my.png`
- 다음: `night_hidden_check`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *짧고 담백한 '내 옆자리 비워 놓을게'라는 문장을 몇 번이나 되읽는 사이 휴대폰 화면이 천천히 어두워진다.*

---

### `night_msg_dain_1`
- 배경: `room_my.png`
- 다음: `night_msg_dain_2`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 야 내가 가위바위보 단판에서 질 줄은 꿈에도 몰랐다

---

### `night_msg_dain_2`
- 배경: `room_my.png`
- 다음: `night_msg_dain_3`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 내일 점심엔 무조건 리벤지 매치다 각오해 ㅋㅋ

---

### `night_msg_dain_3`
- 배경: `room_my.png`
- 다음: `night_msg_dain_4`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 아 오늘 뜯긴 소보로빵 값 생각할수록 아깝네 진짜!

---

### `night_msg_dain_4`
- 배경: `room_my.png`
- 다음: `night_hidden_check`

- 캐릭터: `dain_normal.png` @ 0.35
**{name}**: *숨 쉴 틈도 없이 세 줄이 연달아 날아온다. 나도 모르게 웃음이 터져 답장창에 'ㅋㅋ'부터 찍어 넣는다.*

---

### `night_hidden_check`
- 배경: `room_my.png`
- 분기:
  - [`homeroom_day1`] → `night_hidden_homeroom_1`
  - [`nurse_day1`] → `night_hidden_nurse_1`
  - [기본] → `night_late_transition`

- 캐릭터: `없음`
**{name}**: *메신저 대화창을 닫으려는데 상단 알림 바에 학교 앱 알림 하나가 더 떠 있다.*

---

### `night_hidden_homeroom_1`
- 배경: `room_my.png`
- 다음: `night_hidden_homeroom_2`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *학급 공지 앱에 담임선생님이 방금 올린 글이 보인다. '3학년 2반 공지: 내일 1교시 수학 교재 잊지 말고 챙겨 오기. — 그리고 오늘 온 전학생은 무사히 적응만 잘하고 있으면 그걸로 됐다.'*

---

### `night_hidden_homeroom_2`
- 배경: `room_my.png`
- 분기:
  - [`nurse_day1`] → `night_hidden_nurse_1`
  - [기본] → `night_late_transition`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *공지사항 마지막 줄에 덧붙여진 다정한 한 문장을 한 번 더 읽고 나서야 휴대폰을 가슴 위에 엎어 놓는다.*

---

### `night_hidden_nurse_1`
- 배경: `room_my.png`
- 다음: `night_hidden_nurse_2`

- 캐릭터: `nurse_normal.png` @ 0.35
**{name}**: *학교 건강 관리 앱에 새 알림이 떠 있다. '보건실 기록: 전학생 — 일시적 어지러움 경미. 오늘 밤엔 미지근한 물을 충분히 마시고 내일 아침 식사는 절대 거르지 말 것. 증상이 반복되면 즉시 보건실로 올 것.'*

---

### `night_hidden_nurse_2`
- 배경: `room_my.png`
- 다음: `night_late_transition`

- 캐릭터: `nurse_normal.png` @ 0.35
**{name}**: *보건선생님의 나긋한 목소리가 귓가에 들리는 듯해 일어나 머리맡 물병에 물을 가득 채워 둔다.*

---

### `night_late_transition`
- 배경: `room_my.png`
- 다음: `night_late_branch`

- 캐릭터: `없음`
**{name}**: *불을 끄고 막 눈을 감으려는데 정적을 깨고 휴대폰이 다시 한번 나직하게 진동한다. 시계를 보니 밤 11시. 이 시간에 누구지?*

---

### `night_late_branch`
- 배경: `room_my.png`
- 호감분기:
  - [Seoyeon 10+] → `night_seo_late_1`
  - [Dain 10+] → `night_dain_late_1`
  - [Yuna 10+] → `night_yuna_late_1`
- 다음: `night_end_1`

- 캐릭터: `없음`
**{name}**: *어두운 방 안, 손에 쥔 액정 화면이 하얗게 빛을 낸다.*

---

### `night_seo_late_1`
- 배경: `room_my.png`
- 다음: `night_seo_late_2`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 내일 아침에도 늦지 말고 학교에서 봐.

---

### `night_seo_late_2`
- 배경: `room_my.png`
- 다음: `night_seo_late_3`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 제시간에 안 보이면 내가 직접 찾으러 갈 거야

---

### `night_seo_late_3`
- 배경: `room_my.png`
- 다음: `night_end_1`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: *짧은 인사를 남기고 휴대폰을 머리맡에 내려놓는다. 꺼져 가는 잠금화면 위로 내일 아침 등교 알람 시간이 선명하게 비친다.*

---

### `night_yuna_late_1`
- 배경: `room_my.png`
- 다음: `night_yuna_late_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *채팅창을 열자 '메시지가 삭제되었습니다'라는 회색 안내 문구만 덩그러니 떠 있다.*

---

### `night_yuna_late_2`
- 배경: `room_my.png`
- 다음: `night_yuna_late_3`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *상대방이 무언가 적고 있는 듯 입력 중 표시가 몇 번 깜빡이다가 이내 조용히 사라진다.*

---

### `night_yuna_late_3`
- 배경: `room_my.png`
- 다음: `night_yuna_late_4`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *나 역시 뭐라고 먼저 말을 걸지 몰라 답장창만 열었다 닫는 사이 액정 불빛이 스르르 꺼진다.*

---

### `night_yuna_late_4`
- 배경: `room_my.png`
- 다음: `night_end_1`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *까맣게 잠긴 유리 화면 위로 망설이던 내 엄지손가락 자국만 희미하게 남아 있다.*

---

### `night_dain_late_1`
- 배경: `room_my.png`
- 다음: `night_dain_late_2`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 야 너 설마 벌써 자는 거 아니지?

---

### `night_dain_late_2`
- 배경: `room_my.png`
- 다음: `night_dain_late_3`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 내일 아침 일찍 운동장 나와서 몸 풀 사람 선착순 한 명 구한다

---

### `night_dain_late_3`
- 배경: `room_my.png`
- 다음: `night_dain_late_4`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 참고로 거절은 절대 안 받음 ㅋㅋ

---

### `night_dain_late_4`
- 배경: `room_my.png`
- 다음: `night_dain_late_4_b`

- 캐릭터: `dain_normal.png` @ 0.35
**{name}**: *어이없어서 웃음이 새어 나오는데 내 손가락은 벌써 답장창에 '콜' 한 글자를 찍고 있었다.*

---

### `night_dain_late_4_b`
- 배경: `room_my.png`
- 다음: `night_end_1`

- 캐릭터: `dain_normal.png` @ 0.35
**{name}**: *다인의 메시지 아래로 신난 강아지 같은 이모티콘들이 연달아 달린다.*

---

### `night_end_1`
- 배경: `room_my.png`
- 다음: `night_end_3`

- 캐릭터: `없음`
**{name}**: *휴대폰을 내려놓고 어두운 천장을 올려다본다. 옷걸이에 걸어 둔 새 교복에서 오늘 하루 스쳐 간 봄바람과 벚꽃 향기가 은은하게 번져 온다.*

---

### `night_end_3`
- 배경: `room_my.png`
- 다음: `morning2_start`

- 캐릭터: `없음`
**{name}**: *연락처에 나란히 저장된 새로운 이름들을 한 번 더 눈에 담은 뒤 조용히 화면을 끈다.*

---

### `forced_violation_day1_after_seoyeon`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day1_seoyeon_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day1_seoyeon_excuse`

**서연**: *서연이 긴 침묵 끝에 얼음장처럼 굳은 목소리로 입을 연다.* 방금 네가 한 행동, 아무 일 없던 것처럼 넘길 생각 하지 마. 당분간 내 눈앞에 나타나지도 말고 연락도 하지 마.

---

### `forced_violation_day1_seoyeon_apologize`
- 다음: `forced_violation_day1_resume`

**서연**: *서연의 차가운 표정은 조금도 풀리지 않는다.* 사과는 들었어. 하지만 사과한다고 해서 방금 일이 사라지진 않아. 말한 대로 당분간 연락하지 마.

---

### `forced_violation_day1_seoyeon_excuse`
- 다음: `forced_violation_day1_resume`

**서연**: *서연이 단칼에 말을 자른다.* 오해? 내가 분명히 싫다고 선을 그은 순간부터 오해 따위는 될 수 없어. 더 이상 변명하지 마.

---

### `forced_violation_day1_after_yuna`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day1_yuna_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day1_yuna_excuse`

**유나**: *유나가 한 걸음 물러서며 싸늘하게 눈을 빛낸다.* 내가 싫다는 티를 냈는데도 끝까지 무시했잖아. 지금은 네 얼굴조차 마주하기 싫어. 다신 연락하지 마.

---

### `forced_violation_day1_yuna_apologize`
- 다음: `forced_violation_day1_resume`

**유나**: *한참의 정적 끝에 유나가 낮게 답한다.* 사과 한마디로 없던 일이 되진 않아. 이제 그만 가 줘.

---

### `forced_violation_day1_yuna_excuse`
- 다음: `forced_violation_day1_resume`

**유나**: *유나는 내 해명을 끝까지 듣지도 않고 고개를 돌린다.* 분명히 싫다고 했어. 변명 따위 들을 일 아니야.

---

### `forced_violation_day1_after_dain`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day1_dain_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day1_dain_excuse`

**다인**: *다인의 얼굴에서 평소 같던 웃음기가 완전히 사라진다. 한참 뒤 굳게 잠긴 목소리가 흘러나온다.* 지금 이거 장난 아니야. 내가 싫다는데도 억지로 밀어붙인 거, 절대 그냥 못 넘어가.

---

### `forced_violation_day1_dain_apologize`
- 다음: `forced_violation_day1_resume`

**다인**: *다인은 입술을 깨문 채 한참 뒤에야 짧게 내뱉는다.* 알았어. 오늘은 일단 여기까지 하자. 다음에 다시 얘기할지 말지는 내가 정할게.

---

### `forced_violation_day1_dain_excuse`
- 다음: `forced_violation_day1_resume`

**다인**: *다인의 목소리가 거칠게 날이 선다.* 아니, 말도 안 되는 핑계 대지 마. 내가 싫다고 했는데도 멈추지 않은 건 너잖아.

---

### `forced_violation_day1_after_teacher`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day1_teacher_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day1_teacher_excuse`

**담임선생님**: *담임이 웃음기를 거두고 단호하게 선을 긋는다.* 방금 네 행동은 학생으로서 명백히 선을 넘었어. 더는 가까이 오지 마. 이 일은 학교 규정과 절차대로 처리할 거야.

---

### `forced_violation_day1_teacher_apologize`
- 다음: `forced_violation_day1_resume`

**담임선생님**: *담임이 짧게 숨을 고르고 차분히 말한다.* 사과는 받았어. 그렇더라도 필요한 절차는 원칙대로 진행할 거야. 오늘은 그만 돌아가.

---

### `forced_violation_day1_teacher_excuse`
- 다음: `forced_violation_day1_resume`

**담임선생님**: *담임이 손을 들어 해명을 끊는다.* 지금은 변명부터 늘어놓을 상황이 아니야. 더 말하지 말고 당장 거리를 둬.

---

### `forced_violation_day1_after_nurse`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day1_nurse_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day1_nurse_excuse`

**보건선생님**: *보건선생님의 얼굴에서 여유로운 미소가 순식간에 지워진다.* 지금부터 한 걸음도 가까이 오지 마. 방금 네가 한 일은 차트에 그대로 기록하고 담임에게도 알릴 거야.

---

### `forced_violation_day1_nurse_apologize`
- 다음: `forced_violation_day1_resume`

**보건선생님**: *보건선생님이 차트를 덮으며 단호하게 답한다.* 사과는 들을게. 하지만 공식 기록과 보고는 절차대로 진행할 거야. 오늘 대화는 여기서 끝내자.

---

### `forced_violation_day1_nurse_excuse`
- 다음: `forced_violation_day1_resume`

**보건선생님**: *보건선생님의 목소리가 서늘하게 가라앉는다.* 오해라는 말로 포장하면 방금 일이 달라질 것 같아? 내가 분명히 거부했는데도 무시한 거잖아.

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
**{name}**: *전학 온 지 이틀째 아침. 교복 소매에 남았던 빳빳한 접힌 자국이 어제보다 옅어져 있다. 교과서를 펴자 어제 급히 적은 시간표가 여백에 남아 있다.*

---

### `morning2_start_2`
- 배경: `room_school.png`
- 호감분기:
  - [Seoyeon 10+] → `morning2_greet_seo_1`
  - [Dain 10+] → `morning2_greet_dain_1`
  - [Yuna 10+] → `morning2_greet_yuna_1`
- 다음: `morning2_greet_none_tone`

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

- 캐릭터: `null` @ undefined
**서연**: 어제 옥상에서 나랑 한 약속, 잊지 않고 그대로 비워 뒀지?

---

### `morning2_greet_seo_1_gate`
- 배경: `room_school.png`
- 다음: `morning2_greet_seo_2`

- 캐릭터: `null` @ undefined
**서연**: 아침 인원 점검하러 온 거야. 얼른 자리에 앉아.

---

### `morning2_greet_seo_2`
- 배경: `room_school.png`
- 다음: `morning2_greet_seo_others_2`

- 캐릭터: `null` @ undefined
**서연**: 오늘은 꽤 일찍 나왔네. 이제 교실 찾아오는 길은 안 헷갈리지? *서연의 목소리에 옆자리 다인의 의자가 드르륵 밀리고 창가 쪽 유나의 책장이 조용히 넘어간다.*

---

### `morning2_greet_seo_others_2`
- 배경: `room_school.png`
- 다음: `morning2_yuna_seen`

- 캐릭터: `null` @ undefined
**{name}**: *서연이 긴 손가락으로 클립보드 뒷면을 톡 두드리며 내게만 보이는 눈웃음을 남긴다.*

---

### `morning2_greet_dain_1`
- 분기:
  - [`chose_dain_lunch`] → `morning2_greet_dain_1_fun`
  - [기본] → `morning2_greet_dain_1_plain`

<!-- i18n -->

---

### `morning2_greet_dain_1_fun`
- 배경: `room_school.png`
- 다음: `morning2_greet_dain_2`

- 캐릭터: `null` @ undefined
**다인**: 야, 어제 진짜 재밌었지! 오늘도 나랑 같이 신나는 거 하자!

---

### `morning2_greet_dain_1_plain`
- 배경: `room_school.png`
- 다음: `morning2_greet_dain_2`

- 캐릭터: `null` @ undefined
**다인**: 오, 좋은 아침! 오늘 하루도 에너지 꽉 채워 둬!

---

### `morning2_greet_dain_2`
- 배경: `room_school.png`
- 다음: `morning2_greet_dain_others`

- 캐릭터: `null` @ undefined
**다인**: 야, 너 아직 잠 덜 깼어? 얼른 이쪽 봐, 아침부터 사람 등짝만 보고 인사하긴 싫단 말이야! *뒤에서 다가와 내 어깨를 탄력 있게 탁 친다.*

---

### `morning2_greet_dain_others`
- 배경: `room_school.png`
- 다음: `morning2_greet_dain_others_seo`

- 캐릭터: `null` @ undefined
**{name}**: 다인아, 아침 조회 시작하기도 전에 기운 다 빠지겠다. 네 목소리만 들어도 벌써 운동장 열 바퀴는 뛴 것 같아. *그사이 복도 창가로 서연이 클립보드를 넘기며 천천히 지나간다.*

---

### `morning2_greet_dain_others_seo`
- 배경: `room_school.png`
- 다음: `morning2_greet_dain_others_yuna`

- 캐릭터: `null` @ undefined
**서연**: 아침부터 에너지가 넘치네.

---

### `morning2_greet_dain_others_yuna`
- 배경: `room_school.png`
- 다음: `morning2_yuna_seen`

- 캐릭터: `null` @ undefined
**{name}**: *뒷자리 유나가 쥐고 있던 만년필 끝이 멈칫하며 하얀 쪽지 한가운데에 작은 보랏빛 잉크점을 남긴다.*

---

### `morning2_greet_yuna_1`
- 분기:
  - [`chose_yuna_lunch`] → `morning2_greet_yuna_1_thanks`
  - [기본] → `morning2_greet_yuna_2`

<!-- i18n -->

---

### `morning2_greet_yuna_1_thanks`
- 배경: `room_school.png`
- 다음: `morning2_greet_yuna_2`

- 캐릭터: `null` @ undefined
**유나**: *앉으려던 내 책상 모서리 위에 정갈하게 접힌 쪽지가 놓여 있다.* 어제는 옆에 있어 줘서 고마웠어.

---

### `morning2_greet_yuna_2`
- 배경: `room_school.png`
- 다음: `morning2_greet_yuna_others`

- 캐릭터: `null` @ undefined
**{name}**: *책상 모서리에 놓인 유나의 반듯한 손글씨. 어제보다 한 문장이 더 길어진 쪽지 뒷면에 작은 글씨로 '점심에 도서관 별관으로.'라고 적혀 있다.*

---

### `morning2_greet_yuna_others`
- 배경: `room_school.png`
- 다음: `morning2_greet_yuna_others_seo`

- 캐릭터: `null` @ undefined
**서연**: 아침부터 웬 비밀 편지야?

---

### `morning2_greet_yuna_others_seo`
- 배경: `room_school.png`
- 다음: `morning2_greet_yuna_others_dain`

- 캐릭터: `null` @ undefined
**서연**: 그 손에 쥔 쪽지, 학생회장인 내가 보면 안 되는 내용이야? *서연의 시선이 내 손안의 종이 모서리를 짚는다.*

---

### `morning2_greet_yuna_others_dain`
- 배경: `room_school.png`
- 다음: `morning2_greet_yuna_others_2`

- 캐릭터: `null` @ undefined
**다인**: 어, 그거 뭐야! 나한테도 얼른 보여줘!

---

### `morning2_greet_yuna_others_2`
- 배경: `room_school.png`
- 다음: `morning2_seo_4`

- 캐릭터: `null` @ undefined
**{name}**: *얼른 쪽지를 반으로 접어 손안에 감춘다. 땀이 밴 손바닥 안에서 접힌 종이 선이 팽팽하게 눌린다.*

---

### `morning2_greet_none_tone`
- 배경: `room_school.png`
- 호감분기: selectByHighestAffinity
  - [0+] → `morning2_greet_none_1`
  - [-19 이상] → `morning2_greet_none_1`
  - [기본] → `morning2_greet_none_neg_1`
- 다음: `morning2_greet_none_neg_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `morning2_greet_none_1`
- 배경: `room_school.png`
- 다음: `morning2_greet_none_2`

- 캐릭터: `없음`
**{name}**: *교실 문을 열고 들어서도 먼저 다가오는 사람은 없다. 내 자리에 가방을 내려놓는 소리만 묵직하게 울린다.*

---

### `morning2_greet_none_2`
- 배경: `room_school.png`
- 다음: `morning2_yuna_seen`

- 캐릭터: `null` @ undefined
**{name}**: *서연은 교탁 앞에서 출석부만 넘기고 다인은 반대편 친구들 쪽으로 몸을 돌린다. 창가의 유나는 이미 책 속에 시선을 묻고 있다.*

---

### `morning2_greet_none_neg_1`
- 배경: `room_school.png`
- 다음: `morning2_greet_none_neg_2`

- 캐릭터: `없음`
**{name}**: *교실 앞문을 열자 잠깐 쏠렸던 시선들이 약속이나 한 듯 싸늘하게 흩어진다. 가방 내려놓는 소리가 유난히 크게 메아리친다.*

---

### `morning2_greet_none_neg_2`
- 배경: `room_school.png`
- 다음: `morning2_yuna_seen`

- 캐릭터: `null` @ undefined
**{name}**: *세 사람 모두 끝내 이쪽으로는 눈길 한 번 주지 않는다.*

---

### `morning2_yuna_seen`
- 배경: `room_school.png`
- 다음: `morning2_note_1`

- 캐릭터: `yuna_normal.png`
**유나**: ...너 혹시 전학 오기 전에도 이 학교에 와 본 적 있어?

---

### `morning2_note_1`
- 배경: `room_school.png`
- 다음: `morning2_note_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *가방을 걸고 자리에 앉으려는데 책상 한가운데에 정갈하게 접힌 쪽지 하나가 놓여 있다.*

---

### `morning2_note_2`
- 배경: `room_school.png`
- SFX: `synth:page_turn`
- 다음: `morning2_seo_1`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *'점심에 도서관 별관으로. — 유나'*

---

### `morning2_seo_1`
- 배경: `room_school.png`
- 다음: `morning2_seo_4`

- 캐릭터: `seyoun_normal.png`
**서연**: *복도를 지나가던 서연이 열린 교실 앞문 틈으로 고개를 살짝 들이민다.* 어젯밤엔 뒤척이지 않고 잘 잤어?

---

### `morning2_seo_4`
- 배경: `room_school.png`
- 다음: `morning2_seo_5`

- 캐릭터: `seyoun_normal.png`
**{name}**: 바쁜 학생회장이 아침부터 남의 교실 앞까지 직접 인사하러 온 거야?

---

### `morning2_seo_5`
- 배경: `room_school.png`
- 다음: `morning2_minsu_1`

- 캐릭터: `seyoun_normal.png`
**서연**: 교무실에 서류 갖다주러 가는 길에 잠깐 멈춘 거야. 그냥 네 얼굴 잘 있나 보고 가려고.

---

### `morning2_minsu_1`
- 배경: `room_school.png`
- 다음: `morning2_minsu_1b`

- 캐릭터: `seyoun_laugh.png`
**서연**: 얼굴 확인했으니까 이제 간다. 아침 조회 늦지 말고. 너 보러 왔다가 내가 지각하면 체면이 안 서니까. *몸을 돌리는 순간 서연이 쥔 클립보드 끝이 문틀에 톡 부딪혔다가 떨어진다.*

---

### `morning2_minsu_1b`
- 배경: `room_school.png`
- 다음: `morning2_minsu_3`

- 캐릭터: `minsu_normal.png`
**{name}**: *서연의 긴 머리카락이 사라진 복도 쪽을 바라보고 있는데 앞자리의 민수가 기가 막힌다는 듯 휙 돌아앉는다.*

---

### `morning2_minsu_3`
- 배경: `room_school.png`
- 다음: `morning2_dain_claim_1`

- 캐릭터: `minsu_smirk.png`
**민수**: 야, 전학 온 지 이틀 만에 학생회장님이 직접 문 앞까지 문안 인사를 오냐? 난 이 학교 1년 내내 다녀도 복도에서 눈 한 번 마주치기 힘들던데.

---

### `morning2_dain_claim_1`
- 배경: `room_school.png`
- 다음: `morning2_dain_claim_2`

- 캐릭터: `minsu_smirk.png`
**{name}**: 그건 그냥 네가 인기가 없는 게 아닐까.

---

### `morning2_dain_claim_2`
- 배경: `room_school.png`
- 다음: `morning2_dain_claim_3`

- 캐릭터: `minsu_smirk.png`
**민수**: 뼈 때리지 마라, 사실이긴 한데 지금 그게 핵심이 아니잖아!

---

### `morning2_dain_claim_3`
- 배경: `room_school.png`
- 다음: `morning2_dain_claim_4`

- 캐릭터: `dain_normal.png`
**{name}**: *복도 유리창 너머로 클립보드를 가슴에 안은 서연이 귓바퀴를 매만지며 걸어가는 모습이 스친다.*

---

### `morning2_dain_claim_4`
- 배경: `room_school.png`
- 다음: `morning2_dain_claim_5`

- 캐릭터: `dain_normal.png`
**다인**: 오호, 도도한 회장님도 우리 전학생한테 꽤 관심 있나 본데? 너 생각보다 인기 많네!

---

### `morning2_dain_claim_5`
- 배경: `room_school.png`
- 다음: `morning2_dain_claim_6`

- 캐릭터: `dain_normal.png`
**{name}**: 방금 '우리' 전학생이라고 했어?

---

### `morning2_dain_claim_6`
- 배경: `room_school.png`
- 분기:
  - [`homeroom_day1`] → `hidden_homeroom_d2_1`
  - [기본] → `morning2_break_transition`

- 캐릭터: `dain_laugh.png`
**다인**: 당연하지, 같은 반에다 바로 옆자리 짝꿍이잖아! 그 정도 소유권은 주장해도 되지.

---

### `morning2_break_transition`
- 배경: `school_hallway.png`
- 분기:
  - [`homeroom_day1`] → `morning2_break_transition_b`
  - [기본] → `morning2_seo_dust_1`

- 캐릭터: `없음`
**{name}**: *1교시가 끝나고 시끌벅적한 교실 열기를 식히려 복도 창가로 걸어 나온다.*

---

### `morning2_break_transition_b`
- 배경: `school_hallway.png`
- 다음: `morning2_seo_dust_1`

- 캐릭터: `teacher_normal.png`
**{name}**: *교실 문 앞에서 출석부를 품에 안고 지나가던 담임선생님과 정면으로 눈이 마주친다.*

---

### `hidden_homeroom_d2_1`
- 배경: `school_hallway.png`
- 다음: `hidden_homeroom_d2_1_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 마침 잘 만났네, {name}. 지금 나랑 잠깐 교무실로 가자.

---

### `hidden_homeroom_d2_1_b`
- 배경: `school_hallway.png`
- 다음: `hidden_homeroom_d2_1_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 저 혹시 무슨 문제라도 생겼어요?

---

### `hidden_homeroom_d2_1_c`
- 배경: `school_hallway.png`
- 다음: `hidden_homeroom_d2_2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 겁먹을 것 없어, 전학 서류 마저 확인할 게 남아서 그래. 순전히 행정적인 절차야.

---

### `hidden_homeroom_d2_2`
- 배경: `school_hallway.png`
- 다음: `hidden_homeroom_d2_2_b`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임의 팔에 안긴 출석부 사이로 내 이름이 적힌 전학 서류 모서리가 살짝 삐져나와 있다.*

---

### `hidden_homeroom_d2_2_b`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *담임의 책상 앞에 다가가자 반쯤 열린 서랍 틈으로 빽빽하게 글씨가 채워진 원고지 뭉치가 눈에 들어온다.* 선생님, 이쪽 의자에 앉으면 될까요?

---

### `hidden_homeroom_d2_3`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 응, 앉아. 그나저나 이전 학교 생활기록부 보니까 국어 성적이 유독 좋던데, 평소에 책 읽는 거 좋아해?

---

### `hidden_homeroom_d2_3_b`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 교과서 말고 소설책 읽는 건 꽤 좋아하는 편이에요.

---

### `hidden_homeroom_d2_3_c`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3_d`

- 캐릭터: `teacher_normal.png`
**{name}**: 선생님께서 소설 이야기를 꺼내실 줄은 몰랐어요. 그냥 점수만 확인하시는 줄 알았거든요. *내 시선을 의식한 듯 담임이 열린 서랍 속 원고지 위로 만년필을 가로질러 내려놓는다.*

---

### `hidden_homeroom_d2_3_d`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3_e`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 읽는 걸 좋아한다라. 그럼 직접 글을 써 본 적은 없고?

---

### `hidden_homeroom_d2_3_e`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3_f`

- 캐릭터: `teacher_normal.png`
**{name}**: *성적표 위에 얹힌 담임의 가느다란 손가락이 서랍 속 원고지 모서리를 슬며시 가린다.*

---

### `hidden_homeroom_d2_3_f`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_3_g`

- 캐릭터: `teacher_normal.png`
**{name}**: 직접 쓰는 건 아직 제 취향인지 잘 모르겠어요.

---

### `hidden_homeroom_d2_3_g`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_choice1`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 어라, 서랍 레일이 또 걸렸네. *두꺼운 원고지 모서리에 걸려 안 닫히는 서랍을 무릎으로 살짝 밀어 넣다가 내 눈길과 마주치자 멈칫한다.*

---

### `hidden_homeroom_d2_choice1`
- 배경: `teacher_office.png`
- 선택지:
  1. "선생님은요? 뭐 읽으세요?" → `hidden_homeroom_d2_choice1_a` | Teacher +5
  2. "읽는 건 좋아해요" → `hidden_homeroom_d2_choice1_b` | Teacher +2
  3. "선생님은 어려운 책만 읽으시죠?" → `hidden_homeroom_d2_choice1_trap` | Teacher -3

- 캐릭터: `teacher_normal.png`
**{name}**: *서랍에서 손을 거둔 담임이 찻잔 위로 피어오르는 김 너머로 내 대답을 기다린다.*

---

### `hidden_homeroom_d2_choice1_a`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 난 추리소설 자주 읽어. 누가 범인인지 맞히는 것보다 왜 그런 선택을 했는지 사람의 마음을 끝까지 따라가는 이야기들.

---

### `hidden_homeroom_d2_choice1_b`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *도자기 커피잔 손잡이를 손끝으로 천천히 한 바퀴 굴린다.* 그래? 남의 이야기를 조용히 들여다볼 줄 아는 건 꽤 좋은 취미지.

---

### `hidden_homeroom_d2_choice1_trap`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 국어 선생이라고 해서 쉬는 시간에 읽는 책까지 딱딱하고 어려울 필요는 없잖아.

---

### `hidden_homeroom_d2_5`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_6`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 뭐, 대단한 뜻이 있어서 물은 건 아니고 그냥 궁금해서.

---

### `hidden_homeroom_d2_6`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_7`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 내 책상이 좀 어수선하지? *삐져나온 원고지 뭉치를 안쪽으로 깊숙이 밀어 넣고 서랍을 마저 닫는다.*

---

### `hidden_homeroom_d2_7`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_7_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 그래서 이틀째 지내 보니까 어때? 어제보단 교실 공기가 좀 익숙해졌어?

---

### `hidden_homeroom_d2_7_b`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_8`

- 캐릭터: `teacher_normal.png`
**{name}**: 네, 어제보다 훨씬 편해졌어요. 반 애들도 먼저 말 걸어 주고요.

---

### `hidden_homeroom_d2_8`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_8_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 옆자리 다인이가 워낙 시끌벅적하지? 원래 저렇게 해맑은 애야. 그래도 괜히 분란 만드는 애랑 주체 못 할 만큼 에너지가 넘치는 애는 전혀 다르니까.

---

### `hidden_homeroom_d2_8_b`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_8_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 선생님께서 그렇게 말씀하시는 걸 보니 다인이가 교무실에서도 꽤 유명한가 봐요.

---

### `hidden_homeroom_d2_8_c`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_8_d`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 유명하다기보다는 담임으로서 자꾸 신경이 쓰여서 그렇지. *따뜻한 커피를 한 모금 머금으며 시선을 내린다.*

---

### `hidden_homeroom_d2_8_d`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_8_e`

- 캐릭터: `teacher_normal.png`
**{name}**: *펼쳐진 출석부의 '다인'이라는 두 글자 옆에서 담임이 쥔 펜촉이 잠시 멈춰 선다.*

---

### `hidden_homeroom_d2_8_e`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_8_f`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *커피잔을 소리 없이 내려놓는다.* 아무튼 네 전학 서류는 이제 이상 없이 다 처리됐어.

---

### `hidden_homeroom_d2_8_f`
- 다음: `hidden_homeroom_d2_9`

<!-- i18n -->

---

### `hidden_homeroom_d2_9`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_10`

- 캐릭터: `teacher_normal.png`
**{name}**: 세심하게 챙겨 주셔서 감사합니다, 선생님.

---

### `hidden_homeroom_d2_10`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_choice2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 이 정도는 담임이 당연히 해야 할 일이야. 괜히 마음의 빚처럼 어려워하지 마.

---

### `hidden_homeroom_d2_choice2`
- 배경: `teacher_office.png`
- 선택지:
  1. "업무치고 표정이 좋으신데요" → `hidden_homeroom_d2_choice2_a` | Teacher +6
  2. "챙겨주셔서 감사합니다" → `hidden_homeroom_d2_choice2_b` | Teacher +0
  3. "따로 불러서 챙겨주시는 것도 업무예요?" → `hidden_homeroom_d2_choice2_trap` | Teacher -3

- 캐릭터: `teacher_normal.png`
**{name}**: *담임의 손끝이 코르크 컵받침 모서리를 같은 자리에서 두 번 매만진다.*

---

### `hidden_homeroom_d2_choice2_trap`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_11`

- 캐릭터: `teacher_angry.png`
**담임선생님**: *컵받침을 굴리던 손가락이 뚝 멈춘다.* 교사의 배려를 그런 식으로 넘겨짚으면 곤란해.

---

### `hidden_homeroom_d2_choice2_a`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_11`

- 캐릭터: `teacher_shy.png`
**담임선생님**: 새로 온 우리 반 학생이 잘 적응하고 있다는데 기분 좋을 수밖에 없지.

---

### `hidden_homeroom_d2_choice2_b`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_11`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 그래, 빈말이라도 그렇게 고마워해 주니 보람이 있네.

---

### `hidden_homeroom_d2_11`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_11_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 반에 다른 애들도 답답한 일 있으면 종종 찾아오거든. 너도 언제든 편하게 들러.

---

### `hidden_homeroom_d2_11_b`
- 배경: `teacher_office.png`
- 다음: `hidden_homeroom_d2_12`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 교무실 찾아오는 걸 미안해할 필요 전혀 없어. 그리고 아직 꺼내기 힘든 이야기는 굳이 말 안 해도 괜찮고. *일렁이는 커피잔 속을 내려다보며 나직이 덧붙인다.*

---

### `hidden_homeroom_d2_12`
- 플래그: `homeroom_day2`, `noticed_manuscript`
- 다음: `hidden_homeroom_d2_freetalk`

<!-- i18n -->

---

### `hidden_homeroom_d2_freetalk`
- 배경: `teacher_office.png`
- 타입: `free_talk`
- 다음: `morning2_seo_dust_1`
- 컨텍스트: "전학 이틀째 아침, 교무실 상담이 끝난 직후다. 주인공은 담임의 서랍에서 오래 쓴 장편 원고를 우연히 보았지만 그 내용이나 사정은 아직 모른다. 두 사람은 담임과 학생이며 신뢰를 쌓기 시작한 단계다. 원고의 비밀을 임의로 확정하거나 교사와 학생의 경계를 넘지 않는다."
- 성격: "담임은 차분하고 책임감이 강하며 학생의 말을 먼저 듣는 교사다. 개인 원고를 들킨 민망함은 작은 망설임과 말끝에 드러나지만 학생에게 감정적 책임을 지우지 않고 따뜻한 선을 지킨다."

- 캐릭터: `teacher_normal.png`
**담임선생님**: *담임이 의자를 내 쪽으로 돌린다.* 아직 궁금한 건 없어?

---

### `hidden_homeroom_d2_skip`
- 배경: `teacher_office.png`
- 호감분기: Teacher
  - [-19 이상] → `hidden_homeroom_d2_low`
  - [기본] → `hidden_homeroom_d2_neg`
- 다음: `hidden_homeroom_d2_neg`

- 캐릭터: `없음`

---

### `hidden_homeroom_d2_low`
- 배경: `teacher_office.png`
- 다음: `morning2_seo_dust_1`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *교무실 문 앞에서 마주친 담임이 들고 있던 서류철을 책상 안쪽으로 돌려놓는다.* 오늘은 바빠서 따로 이야기 나누기 어렵겠네. 이따 수업 시간에 보자.

---

### `hidden_homeroom_d2_neg`
- 배경: `teacher_office.png`
- 다음: `morning2_seo_dust_1`

- 캐릭터: `teacher_worried.png`
**담임선생님**: *서류철을 품 안으로 감싸 안으며 시선을 거둔다.* 오늘은 따로 볼일 없다. 얼른 교실로 돌아가.

---

### `morning2_seo_dust_1`
- 배경: `school_hallway.png`
- 다음: `morning2_seo_dust_2`

- 캐릭터: `seyoun_normal.png`
**서연**: 너 1교시 수업 듣는 동안 대체 뭘 한 거야. *쉬는 시간 복도에서 마주친 서연이 걸음을 멈추고 내 어깨 쪽을 유심히 바라본다.*

---

### `morning2_seo_dust_2`
- 배경: `school_hallway.png`
- Framing: `close`
- 다음: `morning2_seo_dust_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 움직이지 말고 잠깐 가만히 있어 봐.

---

### `morning2_seo_dust_3`
- 배경: `school_hallway.png`
- Framing: `close`
- 다음: `morning2_seo_dust_4`

- 캐릭터: `seyoun_normal.png`
**서연**: *한 걸음 다가선 서연의 하얀 손끝이 내 교복 어깨에 닿는다. 얇은 원단 너머로 서늘하고도 부드러운 체온이 전해지며 두 번 가볍게 먼지를 털어 낸다.*

---

### `morning2_seo_dust_4`
- 배경: `school_hallway.png`
- Framing: `close`
- 다음: `morning2_seo_dust_5`

- 캐릭터: `seyoun_normal.png`
**서연**: 어깨에 분필 가루 같은 게 묻어 있었어.

---

### `morning2_seo_dust_5`
- 배경: `school_hallway.png`
- Framing: `close`
- 다음: `morning2_seo_dust_6`

- 캐릭터: `seyoun_normal.png`
**{name}**: 말도 없이 갑자기 손이 훅 들어와서 놀랐잖아. *괜히 멋쩍어져 어깨의 가방끈을 고쳐 잡는다.*

---

### `morning2_seo_dust_6`
- 배경: `school_hallway.png`
- 다음: `morning2_dain_react_1`

- 캐릭터: `seyoun_normal.png`
**서연**: 뭘 그렇게까지 놀라? 그냥 먼지 털어 준 건데.

---

### `morning2_dain_react_1`
- 배경: `school_hallway.png`
- 다음: `morning2_dain_react_3`

- 캐릭터: `seyoun_normal.png`
**{name}**: *분명 먼지는 다 털어 냈는데도 서연의 손끝이 닿았던 어깨 자리가 간지러워 가방끈을 두 번이나 다시 고쳐 쥔다.*

---

### `morning2_dain_react_3`
- 배경: `school_hallway.png`
- 다음: `morning2_dain_react_4`

- 캐릭터: `dain_angry.png`
**다인**: 야, 방금 그거 뭐야? 학생회장이 네 어깨 만진 거 맞지?

---

### `morning2_dain_react_4`
- 배경: `school_hallway.png`
- 다음: `morning2_dain_react_5`

- 캐릭터: `dain_angry.png`
**{name}**: 만진 게 아니라 어깨에 묻은 먼지 털어 준 거야.

---

### `morning2_dain_react_5`
- 배경: `school_hallway.png`
- 다음: `morning2_dain_react_6`

- 캐릭터: `dain_angry.png`
**다인**: 수상한데, 거기 진짜로 먼지가 붙어 있긴 했어?

---

### `morning2_dain_react_6`
- 배경: `school_hallway.png`
- 다음: `lunch2_start`

- 캐릭터: `dain_angry.png`
**{name}**: 진짜로 먼지 털어 준 것뿐이라니까. 왜 눈을 그렇게 뜨고 봐? *만지작거리던 가방끈에서 슬그머니 손을 뗀다.*

---

## 2일차 — 점심 `day2_2_lunch`

### `lunch2_start`
- 배경: `school_hallway.png`
- BGM: `daily.mp3`
- 다음: `lunch2_choice`

- 캐릭터: `없음`
**{name}**: *아침에 받은 유나의 쪽지를 손안에 쥔다. 수업 사이마다 펼친 쪽지의 접힌 모서리가 닳아 있다. 옥상 계단과 지하 매점, 도서관 별관으로 갈라지는 복도에서 걸음을 멈춘다.*

---

### `lunch2_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "유나의 쪽지를 따라 도서관 별관으로" → `lunch2_yuna_1`
  2. "서연을 따라 옥상으로" → `lunch2_seo_1_check`
  3. "다인과 매점으로" → `lunch2_dain_1_check`

- 캐릭터: `없음`
**{name}**: *이틀째 점심시간, 누구의 곁으로 향할까.*

---

### `lunch2_seo_1_check`
- 배경: `school_hallway.png`
- 분기:
  - [`chose_seoyeon_lunch`] → `lunch2_seo_1`
  - [기본] → `lunch2_seo_1b`

- 캐릭터: `없음`
**{name}**: *햇살이 쏟아지는 위층 계단을 따라 옥상으로 올라간다.*

---

### `lunch2_seo_1b`
- 배경: `top_school.png`
- BGM: `sunset1.mp3`
- 다음: `lunch2_seo_2b_check`

- 캐릭터: `seyoun_normal.png`
**서연**: 옥상 올라온 건 오늘이 처음이지? 이쪽 그늘에 앉으면 돼. 아래 운동장 소리가 조금 올라오긴 해도 바람은 시원하거든. *접이식 의자 위에 정갈한 도시락통을 펼친다.*

---

### `lunch2_seo_2b_check`
- 배경: `top_school.png`
- 분기:
  - [`chose_dain_lunch`] → `lunch2_seo_2b_dain_aff`
  - [`chose_yuna_lunch`] → `lunch2_seo_2b_yuna_aff`
  - [기본] → `lunch2_seo_2b`

- 캐릭터: `seyoun_normal.png`

<!-- i18n -->

---

### `lunch2_seo_2b`
- 배경: `top_school.png`
- 스탯: Seoyeon +6
- 호감분기: Seoyeon
  - [10+] → `lunch2_seo_2b_warm`
  - [0+] → `lunch2_seo_2b_cool`
  - [-19 이상] → `lunch2_seo_2b_cool`
  - [기본] → `lunch2_seo_2_neg`

- 캐릭터: `seyoun_normal.png`

<!-- i18n -->

---

### `lunch2_seo_2b_warm`
- 배경: `top_school.png`
- 스탯: Seoyeon +6
- 다음: `lunch2_seo_3`

- 캐릭터: `seyoun_laugh.png`
**서연**: 오늘은 이 위까지 직접 찾아왔네. 배짱 하나는 인정해 줄게.

---

### `lunch2_seo_2b_dain_aff`
- 배경: `top_school.png`
- 호감분기: Seoyeon
  - [10+] → `lunch2_seo_2b_dain`
  - [0+] → `lunch2_seo_2b_cool`
  - [-19 이상] → `lunch2_seo_2b_cool`
  - [기본] → `lunch2_seo_2_neg`
- 다음: `lunch2_seo_2_neg`

- 캐릭터: `없음`

---

### `lunch2_seo_2b_dain`
- 배경: `top_school.png`
- 다음: `lunch2_seo_3b_dain`

- 캐릭터: `seyoun_normal.png`
**서연**: 어제는 다인이랑 매점 쪽으로 가더니, 오늘은 내 옥상까지 올라왔네.

---

### `lunch2_seo_3b_dain`
- 배경: `top_school.png`
- 다음: `lunch2_seo_4b_dain`

- 캐릭터: `seyoun_normal.png`
**{name}**: 어제는 다인이 손목 잡고 끌고 간 거고 오늘은 내 발로 직접 올라오고 싶었거든.

---

### `lunch2_seo_4b_dain`
- 배경: `top_school.png`
- 다음: `lunch2_seo_5b_dain`

- 캐릭터: `seyoun_normal.png`
**서연**: 끌려간 거랑 직접 찾아온 건 확실히 의미가 다르지.

---

### `lunch2_seo_5b_dain`
- 배경: `top_school.png`
- 다음: `lunch2_seo_6b_dain`

- 캐릭터: `seyoun_normal.png`
**{name}**: 어제는 매점 빵 먹었으니까 오늘은 네가 싸 온 도시락 맛도 궁금했고.

---

### `lunch2_seo_6b_dain`
- 배경: `top_school.png`
- 다음: `lunch2_seo_7`

- 캐릭터: `seyoun_laugh.png`
**서연**: 돌려 말하지 않고 솔직해서 마음에 드네.

---

### `lunch2_seo_2b_yuna_aff`
- 배경: `top_school.png`
- 호감분기: Seoyeon
  - [10+] → `lunch2_seo_2b_yuna`
  - [0+] → `lunch2_seo_2b_cool`
  - [-19 이상] → `lunch2_seo_2b_cool`
  - [기본] → `lunch2_seo_2_neg`
- 다음: `lunch2_seo_2_neg`

- 캐릭터: `없음`

---

### `lunch2_seo_2b_yuna`
- 배경: `top_school.png`
- 다음: `lunch2_seo_3b_yuna`

- 캐릭터: `seyoun_normal.png`
**서연**: 아침에 유나한테 따로 쪽지까지 받아 놓고 발걸음은 옥상으로 했네.

---

### `lunch2_seo_3b_yuna`
- 배경: `top_school.png`
- 다음: `lunch2_seo_4b_yuna`

- 캐릭터: `seyoun_normal.png`
**{name}**: 어제는 조용한 도서관에 있었으니까 오늘은 네가 있는 쪽이 궁금했어.

---

### `lunch2_seo_4b_yuna`
- 배경: `top_school.png`
- 다음: `lunch2_seo_5b_yuna`

- 캐릭터: `seyoun_normal.png`
**서연**: 내가 있는 쪽이라니?

---

### `lunch2_seo_5b_yuna`
- 배경: `top_school.png`
- 다음: `lunch2_seo_6b_yuna`

- 캐릭터: `seyoun_normal.png`
**{name}**: 이 옥상 바람이랑 학생회장님 도시락은 어떤 조합일지 직접 겪어 보고 싶었거든.

---

### `lunch2_seo_6b_yuna`
- 배경: `top_school.png`
- 다음: `lunch2_seo_7`

- 캐릭터: `seyoun_laugh.png`
**서연**: *도시락 뚜껑 모서리를 나무젓가락 끝으로 톡 치며 미소 짓는다.* 그 핑계, 이상하게 설득력이 있네.

---

### `lunch2_seo_2b_cool`
- 배경: `top_school.png`
- 스탯: Seoyeon +6
- 다음: `lunch2_seo_cool_cont`

- 캐릭터: `seyoun_normal.png`
**서연**: 원래 옥상은 학생회 허가제야. 오늘만 예외로 봐줄게.

---

### `lunch2_seo_1`
- 배경: `top_school.png`
- BGM: `sunset1.mp3`
- 다음: `lunch2_seo_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *어제와 같은 옥상 그늘 아래, 서연이 보자기를 풀고 도시락통을 나란히 펼친다.*

---

### `lunch2_seo_2`
- 배경: `top_school.png`
- 호감분기: Seoyeon
  - [10+] → `lunch2_seo_2_warm`
  - [0+] → `lunch2_seo_2_cool`
  - [-19 이상] → `lunch2_seo_2_cool`
  - [기본] → `lunch2_seo_2_neg`

- 캐릭터: `seyoun_normal.png`

<!-- i18n -->

---

### `lunch2_seo_2_warm`
- 배경: `top_school.png`
- 스탯: Seoyeon +6
- 다음: `lunch2_seo_3`

- 캐릭터: `seyoun_laugh.png`
**서연**: 오늘도 잊지 않고 올라왔네. 내 도시락에 벌써 맛 들렸나 봐.

---

### `lunch2_seo_3`
- 배경: `top_school.png`
- 다음: `lunch2_seo_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: 어제 먹은 도시락이 워낙 맛있었어야지.

---

### `lunch2_seo_4`
- 배경: `top_school.png`
- 다음: `lunch2_seo_5`

- 캐릭터: `seyoun_laugh.png`
**서연**: 순전히 밥맛 때문에 올라왔다는 거야?

---

### `lunch2_seo_5`
- 배경: `top_school.png`
- 다음: `lunch2_seo_6`

- 캐릭터: `seyoun_laugh.png`
**{name}**: 옥상 바람도 기분 좋고 옆에 앉아 있는 사람도 좋고.

---

### `lunch2_seo_6`
- 배경: `top_school.png`
- 다음: `lunch2_seo_7`

- 캐릭터: `seyoun_normal.png`
**서연**: 그거, 바람 핑계 대고 슬쩍 끼워 넣은 말 같네.

---

### `lunch2_seo_7`
- 배경: `top_school.png`
- 다음: `lunch2_seo_9`

- 캐릭터: `seyoun_normal.png`
**{name}**: *그때 굳게 닫혀 있던 옥상 철문이 철컥 열리더니 가쁜 숨을 몰아쉬며 다인이 불쑥 들어선다.*

---

### `lunch2_seo_9`
- 배경: `top_school.png`
- 다음: `lunch2_seo_10`

- 캐릭터: `dain_normal.png`
**다인**: 역시 여기 숨어 있었네, 드디어 찾았다! 옥상 소풍이면 나도 이 자리에 껴도 되지?

---

### `lunch2_seo_10`
- 배경: `top_school.png`
- 다음: `lunch2_seo_11`

- 캐릭터: `seyoun_normal.png`
**서연**: 옥상 출입은 원래 학생회 허가제야. 게다가 오늘 점심은 내가 먼저 잡았고.

---

### `lunch2_seo_11`
- 배경: `top_school.png`
- 다음: `lunch2_seo_12`

- 캐릭터: `dain_normal.png`
**다인**: 에이, 이미 문 열려 있던걸요! 그럼 난 지금부터 현장 허가 받은 셈 치고 앉는다?

---

### `lunch2_seo_12`
- 배경: `top_school.png`
- 분기:
  - [`chose_dain_lunch`] → `lunch2_seo_13`
  - [기본] → `lunch2_seo_13b`

- 캐릭터: `dain_normal.png`
**다인**: 마침 빈 의자도 하나 있네, 이건 내 거! *다인이 성큼 다가와 맞은편 의자에 털썩 앉는다.*

---

### `lunch2_seo_13`
- 배경: `top_school.png`
- 다음: `lunch2_seo_14`

- 캐릭터: `dain_normal.png`
**다인**: 야, 어제는 나랑 먹었으면서 하루 만에 회장님 도시락으로 갈아탄 거야?

---

### `lunch2_seo_13b`
- 배경: `top_school.png`
- 다음: `lunch2_seo_13b_b`

- 캐릭터: `dain_normal.png`
**다인**: 안녕하세요, 회장님! 근데 이 옆자리는 아직 비어 있는 거죠?

---

### `lunch2_seo_13b_b`
- 배경: `top_school.png`
- 다음: `lunch2_seo_14`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연이 펼쳐 둔 도시락통을 내 쪽으로 반 뼘 더 끌어당긴다.* 앉는 건 상관없는데 우리 둘이 하던 얘기는 마저 끝내야겠어.

---

### `lunch2_seo_14`
- 배경: `top_school.png`
- 다음: `lunch2_seo_15`

- 캐릭터: `seyoun_normal.png`
**서연**: 그쪽이 좁으면 내가 이리로 좀 더 붙을게. *서연이 자기 의자를 내 쪽으로 바짝 당겨 앉자 얇은 셔츠 소매 너머로 팔뚝이 스치듯 맞닿는다.*

---

### `lunch2_seo_15`
- 배경: `top_school.png`
- 다음: `lunch2_seo_16`

- 캐릭터: `seyoun_normal.png`
**{name}**: 다 같은 반이잖아. 너희 둘도 원래 잘 아는 사이지?

---

### `lunch2_seo_16`
- 배경: `top_school.png`
- 다음: `lunch2_seo_17`

- 캐릭터: `seyoun_normal.png`
**서연**: 같은 반 친구로 지내는 거랑 내 점심시간을 양보하는 건 별개니까.

---

### `lunch2_seo_17`
- 배경: `top_school.png`
- 다음: `lunch2_seo_19`

- 캐릭터: `dain_normal.png`
**다인**: 오, 그렇게 나오시겠다? 그럼 나도 절대 양보 못 해! 야, 다음 쉬는 시간엔 무조건 체육관으로 내려와.

---

### `lunch2_seo_19`
- 배경: `top_school.png`
- 다음: `lunch2_seo_20`

- 캐릭터: `seyoun_normal.png`
**서연**: {name}, 지금 내 도시락 먹으면서 눈앞에서 다른 약속 잡는 거야?

---

### `lunch2_seo_20`
- 배경: `top_school.png`
- 다음: `lunch2_seo_choice`

- 캐릭터: `seyoun_normal.png`
**서연**: 대답은 이따가 해. 그보다 네 입가에 밥풀 묻었어, 움직이지 말고 가만히 있어 봐.

---

### `lunch2_seo_choice`
- 배경: `top_school.png`
- 선택지:
  1. "가만히 있는다" → `lunch2_seo_c1_1` | Seoyeon +4
  2. "직접 닦을게" → `lunch2_seo_c2_1` | Seoyeon +2
  3. "이 정도는 혼자 할 수 있어." → `lunch2_seo_trap_1` | Seoyeon -2

- 캐릭터: `seyoun_normal.png`
**서연**: *하얀 물티슈를 감아 쥔 서연의 가느다란 손가락이 숨결이 닿을 듯한 거리까지 내 입가로 다가온다.*

---

### `lunch2_seo_c1_1`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_2`

- 캐릭터: `seyoun_normal.png`
**서연**: 그래, 지금처럼 가만히 있으라는 거였어. 금방 끝나. *서연의 부드러운 손끝이 내 입술 모서리를 스치며 밥풀을 떼어 내고는 물티슈 안쪽이 보이지 않게 반듯하게 접는다.*

---

### `lunch2_seo_c1_2`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_2_b`

- 캐릭터: `seyoun_normal.png`
**서연**: 자, 다 됐어.

---

### `lunch2_seo_c1_2_b`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_3`

- 캐릭터: `dain_normal.png`
**다인**: 잠깐만요, 나 그냥 소시지 하나 집으려던 참이었는데. ...지금 내가 이 자리에 계속 앉아 있어도 되는 분위기 맞죠? *젓가락을 공중에 멈춘 채 다인이 얼어붙은 얼굴로 우리 둘을 번갈아 본다.*

---

### `lunch2_seo_c1_3`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_3_b`

- 캐릭터: `dain_normal.png`
**다인**: 아니, 입가에 붙은 밥풀을 손수 떼어 주신다고요?

---

### `lunch2_seo_c1_3_b`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_4`

- 캐릭터: `seyoun_normal.png`
**서연**: *물티슈를 작은 네모 모양으로 한 번 더 접어 쥔다.* 눈에 거슬리게 밥풀이 붙어 있었을 뿐이야.

---

### `lunch2_seo_c1_4`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c1_5`

- 캐릭터: `seyoun_shy.png`
**서연**: 그 이상 다른 뜻은 없어.

---

### `lunch2_seo_c1_5`
- 배경: `top_school.png`
- 다음: `lunch2_seo_end_c1`

- 캐릭터: `seyoun_shy.png`
**서연**: 아무튼 하던 얘기 마저 해. *태연하게 물병을 집어 들지만 끝내 뚜껑은 열지 못한다.*

---

### `lunch2_seo_end_c1`
- 배경: `top_school.png`
- 다음: `after2_start`

- 캐릭터: `dain_normal.png`
**다인**: ...어쨌든 밥부터 마저 먹자, 다 식겠다! *다인이 어색함을 털어내듯 의자 다리를 발끝으로 두 번 툭툭 건드린다.*

---

### `lunch2_seo_c2_1`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c2_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연의 손끝이 닿기 전에 얼른 고개를 살짝 빼며 내 손등으로 입가를 쓱 닦는다.*

---

### `lunch2_seo_c2_2`
- 배경: `top_school.png`
- 다음: `lunch2_seo_c2_3`

- 캐릭터: `seyoun_pout.png`
**서연**: 맨손으로 닦지 말고 여기 물티슈 쓰라니까.

---

### `lunch2_seo_c2_3`
- 다음: `lunch2_seo_end_c2`

<!-- i18n -->

---

### `lunch2_seo_trap_1`
- 배경: `top_school.png`
- 다음: `lunch2_seo_end_c2`

- 캐릭터: `seyoun_normal.png`
**서연**: *내밀었던 물티슈를 말없이 거두어들인다.* 그래, 그런 건 혼자서도 알아서 잘하니까.

---

### `lunch2_seo_end_c2`
- 배경: `top_school.png`
- 다음: `after2_start`

- 캐릭터: `seyoun_pout.png`
**{name}**: *내 손등에는 아직 밥풀 자국이 희미하게 남아 있다. 허공에서 손을 거둔 서연은 애꿎은 도시락 보자기 끈만 풀었다가 다시 조여 맨다.*

---

### `lunch2_seo_2_cool`
- 배경: `top_school.png`
- 스탯: Seoyeon +6
- 다음: `lunch2_seo_cool_cont`

- 캐릭터: `seyoun_normal.png`
**서연**: 왔구나. 지금 도시락 펼 테니까 잠깐만 기다려.

---

### `lunch2_seo_cool_cont`
- 배경: `top_school.png`
- 다음: `lunch2_seo_cool_leave`

- 캐릭터: `seyoun_normal.png`
**{name}**: *조용히 도시락 뚜껑이 열리고 두 사람 사이로 서늘한 바람만 먼저 스쳐 지나간다.*

---

### `lunch2_seo_cool_leave`
- 배경: `school_hallway.png`
- 다음: `after2_start`

- 캐릭터: `없음`
**{name}**: *어색한 침묵 끝에 도시락 뚜껑을 덮고 옥상 철문을 나선다.*

---

### `lunch2_seo_2_neg`
- 배경: `top_school.png`
- 다음: `lunch2_seo_neg_leave`

- 캐릭터: `seyoun_pout.png`
**서연**: *도시락 뚜껑을 열지도 않은 채 먼 난간 너머만 바라본다.* 지금 학생회 업무 생각 중이야. 오래 머물지는 마.

---

### `lunch2_seo_neg_leave`
- 배경: `school_hallway.png`
- 다음: `after2_start`

- 캐릭터: `없음`
**{name}**: *싸늘한 공기에 옥상 문을 조용히 닫고 계단을 내려간다.*

---

### `lunch2_dain_1_check`
- 배경: `school_hallway.png`
- 분기:
  - [`chose_seoyeon_lunch`] → `lunch2_dain_1b_seo`
  - [`chose_dain_lunch`] → `lunch2_dain_1`
  - [`chose_yuna_lunch`] → `lunch2_dain_1b_yuna`
  - [기본] → `lunch2_dain_1b`

- 캐릭터: `없음`
**{name}**: *다인의 활기찬 발걸음에 맞춰 지하 매점 쪽으로 내려간다.*

---

### `lunch2_dain_1b`
- 배경: `store.png`
- BGM: `daily2.mp3`
- 다음: `lunch2_dain_tone`

- 캐릭터: `dain_normal.png`
**{name}**: *다인과 나란히 매점 앞에 섰다. 오늘의 점심이 걸린 첫 가위바위보 승부다.*

---

### `lunch2_dain_1b_seo`
- 배경: `store.png`
- BGM: `daily2.mp3`
- 다음: `lunch2_dain_1b_seo_aff`

- 캐릭터: `dain_normal.png`
**{name}**: *다인과 함께 들어선 매점. 어제는 조용한 옥상 도시락이었는데 오늘은 달콤하고 고소한 빵 냄새가 먼저 코끝을 감싼다.*

---

### `lunch2_dain_1b_seo_aff`
- 배경: `store.png`
- 호감분기: Dain
  - [10+] → `lunch2_dain_2b_seo`
  - [0+] → `lunch2_dain_2_cool`
  - [-19 이상] → `lunch2_dain_2_cool`
  - [기본] → `lunch2_dain_2_neg`
- 다음: `lunch2_dain_2_neg`

- 캐릭터: `없음`

---

### `lunch2_dain_2b_seo`
- 배경: `store.png`
- 스탯: Dain +6
- 다음: `lunch2_dain_3b_seo`

- 캐릭터: `dain_normal.png`
**다인**: 오, 어제는 회장님 도시락 먹으러 가더니 오늘은 내 쪽으로 왔네?

---

### `lunch2_dain_3b_seo`
- 배경: `store.png`
- 다음: `lunch2_dain_4b_seo`

- 캐릭터: `dain_normal.png`
**{name}**: 어제는 회장님이 아침부터 안내해 주며 불렀으니까, 오늘은 네가 말한 매점 빵도 먹어 보고 싶었어.

---

### `lunch2_dain_4b_seo`
- 배경: `store.png`
- 다음: `lunch2_dain_5b`

- 캐릭터: `dain_laugh.png`
**다인**: 좋았어, 방금 그 말 절대 취소 못 한다! 자, 바로 소보로빵 걸고 한 판 붙자!

---

### `lunch2_dain_1b_yuna`
- 배경: `store.png`
- BGM: `daily2.mp3`
- 다음: `lunch2_dain_1b_yuna_aff`

- 캐릭터: `dain_normal.png`
**{name}**: *다인의 어깨에 떠밀리듯 시끌벅적한 매점 인파 속으로 들어선다.*

---

### `lunch2_dain_1b_yuna_aff`
- 배경: `store.png`
- 호감분기: Dain
  - [10+] → `lunch2_dain_2b_yuna`
  - [0+] → `lunch2_dain_2_cool`
  - [-19 이상] → `lunch2_dain_2_cool`
  - [기본] → `lunch2_dain_2_neg`
- 다음: `lunch2_dain_2_neg`

- 캐릭터: `없음`

---

### `lunch2_dain_2b_yuna`
- 배경: `store.png`
- 스탯: Dain +6
- 다음: `lunch2_dain_3b_yuna`

- 캐릭터: `dain_normal.png`
**다인**: 야, 어제는 종일 도서관에 박혀 있더니 오늘은 나랑 제대로 놀아 줄 거지?

---

### `lunch2_dain_3b_yuna`
- 배경: `store.png`
- 다음: `lunch2_dain_4b_yuna`

- 캐릭터: `dain_normal.png`
**{name}**: 어제 조용한 곳을 구경했으니까 오늘은 제일 활기찬 곳도 와 봐야지.

---

### `lunch2_dain_4b_yuna`
- 배경: `store.png`
- 다음: `lunch2_dain_5b`

- 캐릭터: `dain_laugh.png`
**다인**: 오, 그 황금 균형감각 아주 칭찬해! 그럼 지체 없이 내기 한 판 가자!

---

### `lunch2_dain_1`
- 배경: `store.png`
- BGM: `daily2.mp3`
- 다음: `lunch2_dain_tone`

- 캐릭터: `dain_normal.png`
**{name}**: *다인과 다시 찾은 매점 앞. 어제의 패배를 설욕하겠다는 리벤지 가위바위보가 시작된다.*

---

### `lunch2_dain_tone`
- 배경: `store.png`
- 호감분기: Dain
  - [10+] → `lunch2_dain_2`
  - [0+] → `lunch2_dain_2_cool`
  - [-19 이상] → `lunch2_dain_2_cool`
  - [기본] → `lunch2_dain_2_neg`
- 다음: `lunch2_dain_2_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `lunch2_dain_2`
- 배경: `store.png`
- 스탯: Dain +6
- 분기:
  - [`chose_dain_lunch`] → `lunch2_dain_3`
  - [기본] → `lunch2_dain_3b`

- 캐릭터: `dain_normal.png`
**다인**: 어제 밤새 이미지 트레이닝 끝냈다. 오늘은 무조건 네가 질 거니까 지갑 열 각오 해!

---

### `lunch2_dain_3`
- 배경: `store.png`
- 다음: `lunch2_dain_4`

- 캐릭터: `dain_normal.png`
**{name}**: 어제 매점 들어올 때도 똑같이 큰소리쳤던 것 같은데.

---

### `lunch2_dain_4`
- 배경: `store.png`
- 다음: `lunch2_dain_5`

- 캐릭터: `dain_normal.png`
**다인**: 에이, 어제는 전학생 기 살려 주려는 가벼운 워밍업이었지!

---

### `lunch2_dain_5`
- 배경: `store.png`
- 다음: `lunch2_dain_6`

- 캐릭터: `dain_normal.png`
**{name}**: *기합 소리와 함께 뻗은 가위바위보. 오늘도 다인의 손이 허무하게 진다.*

---

### `lunch2_dain_3b`
- 배경: `store.png`
- 다음: `lunch2_dain_4b`

- 캐릭터: `dain_normal.png`
**{name}**: 그렇게 자신 있어?

---

### `lunch2_dain_4b`
- 배경: `store.png`
- 다음: `lunch2_dain_5b`

- 캐릭터: `dain_normal.png`
**다인**: 당연하지, 나 원래 순발력 하나는 타고났거든!

---

### `lunch2_dain_5b`
- 배경: `store.png`
- 다음: `lunch2_dain_6`

- 캐릭터: `dain_pout.png`
**{name}**: *호기롭게 외친 가위바위보. 결과는 다인의 완벽한 패배다.*

---

### `lunch2_dain_6`
- 배경: `store.png`
- 다음: `lunch2_dain_7`

- 캐릭터: `dain_pout.png`
**다인**: 잠깐만, 이거 진짜 사기나 조작 아니야? 너 내 눈 보고 손 모양 읽는 거지!

---

### `lunch2_dain_7`
- 배경: `store.png`
- 다음: `lunch2_dain_8`

- 캐릭터: `dain_pout.png`
**{name}**: 단판 가위바위보를 무슨 수로 조작해.

---

### `lunch2_dain_8`
- 배경: `store.png`
- 다음: `lunch2_dain_9`

- 캐릭터: `dain_pout.png`
**다인**: 으아, 알았어 알았다고! 승복한다! 이모님, 여기 소보로빵 두 개요!

---

### `lunch2_dain_9`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_11`

- 캐릭터: `seyoun_normal.png`
**{name}**: 사람 많으니까 이쪽 창가에 기대서 먹자. *따뜻한 빵 봉지를 들고 매점 유리문 옆에 나란히 서는데 복도 너머로 서연이 걸어오는 모습이 보인다.*

---

### `lunch2_dain_11`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_12`

- 캐릭터: `dain_normal.png`
**다인**: 야, 방금 학생회장님 왜 저래? 우리 쪽을 왜 그렇게 빤히 쳐다보고 가?

---

### `lunch2_dain_12`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_13`

- 캐릭터: `dain_normal.png`
**{name}**: 글쎄, 그냥 지나가다 본 거 아닐까.

---

### `lunch2_dain_13`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_choice`

- 캐릭터: `dain_normal.png`
**다인**: 흐음, 수상한데. 너 혹시 나 몰래 회장님이랑도 엄청 친해졌어?

---

### `lunch2_dain_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "어제 좀 얘기했어" → `lunch2_dain_c1_1` | Dain -3
  2. "학교 안내 받은 정도?" → `lunch2_dain_c2_1` | Dain +0
  3. "왜, 신경 쓰여?" → `lunch2_dain_c3_1` | Dain +4

- 캐릭터: `dain_normal.png`
**다인**: {name}, 내가 방금 물어봤잖아. 네 대답 듣기 전엔 이 얘기 절대 안 넘길 거야. *반 걸음 다가서며 흔들림 없는 눈동자로 내 얼굴을 빤히 올려다본다.*

---

### `lunch2_dain_c1_1`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_end`

- 캐릭터: `dain_pout.png`
**다인**: ...아, 어제도 둘이서 따로 얘기했었구나. 그럼 내가 모르는 둘만의 얘기도 꽤 있겠네. *빵을 입에 문 채 빈 포장지 끝만 만지작거리며 오물거리던 입을 멈춘다.*

---

### `lunch2_dain_c2_1`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_end`

- 캐릭터: `dain_normal.png`
**다인**: 학교 안내받은 정도라... 그래, 네가 그렇다면 그런 줄 알게. *소보로를 한 입 더 베어 물면서도 매점 유리문에 어른거리는 서연의 잔상을 흘끗 바라본다.*

---

### `lunch2_dain_c3_1`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_c3_2`

- 캐릭터: `dain_shy.png`
**다인**: 뭐야, 사람 놀리듯이 웃지 마! *다인이 손에 든 소보로빵을 반으로 뚝 갈라 큰 쪽을 내 가슴팍 앞으로 쑥 내민다.* 말 시키지 말고 이거나 더 먹어!

---

### `lunch2_dain_c3_2`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_end`

- 캐릭터: `dain_shy.png`
**다인**: 더 먹으라고 준 건데 왜 자꾸 실실 웃어? 내가 네 입에 직접 물려 줄 건 아니니까 얼른 받기나 해! *붉어진 볼을 감추듯 빵 포장지를 손가락 두 마디 너비로 잘게 접는다.*

---

### `lunch2_dain_end`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_end_b`

- 캐릭터: `dain_pout.png`
**{name}**: *다인이 부루퉁하게 남은 빵을 씹는 동안 매점 유리문 너머로 멀어진 서연의 뒷모습이 자꾸만 눈에 밟혔다.*

---

### `lunch2_dain_2_cool`
- 배경: `store.png`
- 스탯: Dain +6
- 다음: `lunch2_dain_cool_cont`

- 캐릭터: `dain_normal.png`
**다인**: 왔으면 뒤에 줄이나 서. 오늘 빵값은 네가 내는 거 알지.

---

### `lunch2_dain_cool_cont`
- 배경: `store.png`
- 다음: `lunch2_dain_cool_leave`

- 캐릭터: `dain_normal.png`
**{name}**: *소보로빵 두 개를 집어 계산을 마친다. 다인은 말없이 자기 몫의 빵만 받아 든다.*

---

### `lunch2_dain_cool_leave`
- 배경: `school_hallway.png`
- 다음: `lunch2_dain_end_b`

- 캐릭터: `없음`
**{name}**: *계산을 마치고 매점 밖 복도로 나오자 다인은 뒤도 돌아보지 않고 반 친구들 무리로 먼저 가 버린다.*

---

### `lunch2_dain_end_b`
- 배경: `playground.png`
- 다음: `lunch2_dain_end_c`

- 캐릭터: `없음`
**{name}**: *오후 5교시 체육 시간, 공을 쫓던 옆 반 학생과 강하게 부딪혀 넘어지면서 팔꿈치가 까져 붉은 핏방울이 맺힌다.*

---

### `lunch2_dain_end_c`
- 배경: `playground.png`
- 분기:
  - [`nurse_day1`] → `lunch2_dain_end_d`
  - [기본] → `lunch2_dain_end_ins4_first`

- 캐릭터: `없음`
**체육교사**: 상처에 흙 들어갔겠다. 빨리 보건실 가서 소독부터 받고 와.

---

### `lunch2_dain_end_d`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_e`

- 캐릭터: `없음`
**{name}**: *조심스레 보건실 문을 열고 들어선다. 어제 맡았던 알싸한 소독약 향과 은은한 향수 냄새가 다시 폐부로 스며든다.*

---

### `lunch2_dain_end_e`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_f`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *진료 기록지를 정리하다 고개를 든 선생님의 눈매가 부드럽게 휘어진다.* 어라, 어제 왔던 전학생이네.

---

### `lunch2_dain_end_ins4_first`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_ins5_first`

- 캐릭터: `없음`
**{name}**: *조심스레 보건실 문을 열자 서늘하고 알싸한 소독약 냄새가 코끝을 스친다.*

---

### `lunch2_dain_end_ins5_first`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_f`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *진료 기록지를 덮으며 안경 너머로 나를 바라본다.* 보건실 오는 건 오늘이 처음이지? 새로 온 전학생 맞지?

---

### `lunch2_dain_end_f`
- 배경: `nurse_room.png`
- 분기:
  - [`nurse_day1`] → `lunch2_dain_end_g`
  - [기본] → `lunch2_dain_end_ins7_first`

- 캐릭터: `nurse_normal.png`
**{name}**: 체육 시간에 넘어져서 팔꿈치가 좀 까졌어요.

---

### `lunch2_dain_end_g`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_i`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 이틀 연속으로 찾아오다니, 벌써 내 보건실 단골이라도 될 셈이야?

---

### `lunch2_dain_end_ins7_first`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_i`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 낯선 운동장에서 뛰다 보면 다칠 수도 있지. 이리 와서 소독부터 받자.

---

### `lunch2_dain_end_i`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_j`

- 캐릭터: `nurse_normal.png`
**{name}**: 팔꿈치 아래에 수건까지 받치는 거예요? 생각보다 처치 준비가 본격적이네요. *선생님이 소독약 병과 하얀 거즈를 꺼내 내 팔꿈치 아래를 부드럽게 받쳐 올린다.*

---

### `lunch2_dain_end_j`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_l`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 소독약 닿으면 조금 따가울 거야. 어깨랑 팔에 힘 쭉 빼고 있어 봐.

---

### `lunch2_dain_end_l`
- 배경: `nurse_room.png`
- 분기:
  - [`nurse_day1`] → `lunch2_dain_end_nurse_short1`
  - [기본] → `lunch2_dain_end_m`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *상처 위로 숨결을 가볍게 불어 준 뒤 방수 밴드를 밀착해 붙인다.* 잠깐만 움직이지 말고. 자, 다 됐다.

---

### `lunch2_dain_end_m`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_n`

- 캐릭터: `nurse_normal.png`
**{name}**: 벌써 다 붙인 거예요? 관절 자리라 팔 접으면 밴드가 뜯어지진 않을까요? *선생님이 내 손목을 감싸 쥐며 팔꿈치를 한 번 굽혀 보라고 눈짓한다.*

---

### `lunch2_dain_end_n`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_o`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 지금 천천히 한 번 접어 봐. 살이 당기거나 따갑지는 않아?

---

### `lunch2_dain_end_o`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_p`

- 캐릭터: `nurse_normal.png`
**{name}**: *선생님이 잡아 준 대로 팔을 깊게 접었다 펴 보지만 신기하게도 밴드 모서리 하나 들뜨지 않는다.*

---

### `lunch2_dain_end_p`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_q`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 옛날에 병원에서 익힌 작은 요령이야. 움직임 많은 관절은 결을 따라 붙여야 끝까지 안 떨어지거든.

---

### `lunch2_dain_end_q`
- 다음: `lunch2_dain_end_r`

<!-- i18n -->

---

### `lunch2_dain_end_r`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_s`

- 캐릭터: `nurse_normal.png`
**{name}**: *가위를 넣으려 열린 책상 서랍 속으로 빛바랜 연두색 노트가 보인다. 표지 안쪽 첫 줄에 적힌 '그날의 너에게—'라는 글씨가 읽히는 순간 서랍이 재빨리 닫힌다.*

---

### `lunch2_dain_end_s`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_t`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *닫힌 서랍 쪽을 한 번 내려다보더니 내 눈을 똑바로 마주 본다.* 방금 스쳐 지나간 건 못 본 걸로 해 줘. 대신 내 비밀 하나 알려 줄게. 난 쓴 커피보다 달콤한 코코아를 훨씬 좋아하거든.

---

### `lunch2_dain_end_t`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_u`

- 캐릭터: `nurse_normal.png`
**{name}**: *장난스레 코코아 이야기를 건넨 뒤에도 선생님의 하얀 손가락은 서랍 손잡이를 꾹 누른 채 떨어지지 않는다.*

---

### `lunch2_dain_end_u`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_v`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *이내 손잡이에서 힘을 빼고 가운 주머니에 손을 넣는다.* 어른의 사적인 얘기는 오늘 여기까지만. 팔꿈치 밴드는 안 불편하지?

---

### `lunch2_dain_end_v`
- 다음: `lunch2_dain_end_w`

<!-- i18n -->

---

### `lunch2_dain_end_w`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_x`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 자, 처치 끝났으니 얼른 교실로 가 봐. 오늘 밤 샤워할 땐 물 닿지 않게 조심하고.

---

### `lunch2_dain_end_x`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_y`

- 캐릭터: `nurse_normal.png`
**{name}**: 내일도 보건실 와서 새 밴드로 갈아야 해요?

---

### `lunch2_dain_end_y`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_z`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 무조건 매일 갈 필요는 없어. 내일 아침 상처 상태 보고 결정하면 돼. *빈 밴드 포장지를 반으로 접다 말고 야릇한 눈빛으로 나를 올려다본다.*

---

### `lunch2_dain_end_z`
- 배경: `nurse_room.png`
- 다음: `lunch2_dain_end_c2`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 모서리가 들뜨거나 진물이 배면 바로 나한테 오고 말짱하면 그대로 붙여 둬도 괜찮아.

---

### `lunch2_dain_end_c2`
- 배경: `nurse_room.png`
- 다음: `after2_start`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 남은 체육 수업 중에 상처가 쓰리면 참지 말고 선생님께 말씀드리고. 그 외엔 쉬는 시간에 들르고.

---

### `lunch2_dain_end_nurse_short1`
- 배경: `nurse_room.png`
- 다음: `after2_start`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 자, 다 됐다. 다음부턴 공만 보고 뛰지 말고 주변 사람부터 살피면서 뛰어.

---

### `lunch2_dain_2_neg`
- 배경: `store.png`
- 다음: `lunch2_dain_neg_leave`

- 캐릭터: `dain_angry.png`
**다인**: *계산 줄에서 한 걸음 거리를 벌린 채 정면만 본다.* 오늘은 내기할 기분 아니야. 네 것만 빨리 사고 가.

---

### `lunch2_dain_neg_leave`
- 배경: `school_hallway.png`
- 다음: `after2_start`

- 캐릭터: `없음`
**{name}**: *소란스러운 매점 줄에서 빠져나와 쓸쓸히 복도에 선다.*

---

### `lunch2_yuna_1`
- 배경: `annex_exhibit_hallway.png`
- BGM: `night1.mp3`
- 다음: `lunch2_yuna_intro_check`

- 캐릭터: `yuna_normal.png`
**{name}**: *인적이 끊긴 낡은 도서관 별관. 서늘한 그늘이 내려앉은 복도 맨 끝 창가에 기대어 유나가 홀로 책을 읽고 있다.*

---

### `lunch2_yuna_intro_check`
- 배경: `annex_exhibit_hallway.png`
- 분기:
  - [`chose_seoyeon_lunch`] → `lunch2_yuna_3_seo_aff`
  - [`chose_yuna_lunch`] → `lunch2_yuna_3_yuna_aff`
  - [기본] → `lunch2_yuna_3`

- 캐릭터: `yuna_normal.png`

<!-- i18n -->

---

### `lunch2_yuna_3`
- 배경: `annex_exhibit_hallway.png`
- 호감분기: Yuna
  - [10+] → `lunch2_yuna_3_warm`
  - [0+] → `lunch2_yuna_3_cool`
  - [-19 이상] → `lunch2_yuna_3_cool`
  - [기본] → `lunch2_yuna_3_neg`

- 캐릭터: `yuna_normal.png`

<!-- i18n -->

---

### `lunch2_yuna_3_warm`
- 배경: `annex_exhibit_hallway.png`
- 스탯: Yuna +6
- 다음: `lunch2_yuna_4`

- 캐릭터: `yuna_normal.png`
**유나**: 기다렸는데 왔네.

---

### `lunch2_yuna_4`
- 배경: `annex_exhibit_hallway.png`
- 다음: `lunch2_yuna_5`

- 캐릭터: `yuna_normal.png`
**{name}**: 아침에 네가 책상에 놓아둔 쪽지 보고 왔어.

---

### `lunch2_yuna_5`
- 배경: `annex_exhibit_hallway.png`
- 다음: `lunch2_yuna_6`

- 캐릭터: `yuna_normal.png`
**유나**: 그냥 무시하고 안 올 수도 있었잖아.

---

### `lunch2_yuna_6`
- 배경: `annex_exhibit_hallway.png`
- 다음: `lunch2_yuna_7`

- 캐릭터: `yuna_normal.png`
**{name}**: 내가 왜 안 와?

---

### `lunch2_yuna_7`
- 배경: `annex_exhibit_hallway.png`
- 다음: `lunch2_yuna_8`

- 캐릭터: `yuna_normal.png`
**유나**: 교실에선 늘 그 시끄러운 애랑 붙어 있길래. 보통은 그쪽이 훨씬 재밌으니까.

---

### `lunch2_yuna_8`
- 배경: `annex_exhibit_hallway.png`
- 다음: `lunch2_yuna_9`

- 캐릭터: `yuna_normal.png`
**{name}**: 가끔은 나도 숨 돌릴 조용한 피난처가 필요할 때가 있거든.

---

### `lunch2_yuna_3_seo_aff`
- 배경: `annex_exhibit_hallway.png`
- 호감분기: Yuna
  - [10+] → `lunch2_yuna_3_seo`
  - [0+] → `lunch2_yuna_3_cool`
  - [-19 이상] → `lunch2_yuna_3_cool`
  - [기본] → `lunch2_yuna_3_neg`
- 다음: `lunch2_yuna_3_neg`

- 캐릭터: `없음`

---

### `lunch2_yuna_3_seo`
- 배경: `annex_exhibit_hallway.png`
- 스탯: Yuna +6
- 다음: `lunch2_yuna_4_seo`

- 캐릭터: `yuna_normal.png`
**유나**: 진짜 왔네.

---

### `lunch2_yuna_4_seo`
- 배경: `annex_exhibit_hallway.png`
- 다음: `lunch2_yuna_5_seo`

- 캐릭터: `yuna_normal.png`
**{name}**: 네가 직접 쓴 쪽지까지 받았으니까.

---

### `lunch2_yuna_5_seo`
- 배경: `annex_exhibit_hallway.png`
- 다음: `lunch2_yuna_6_seo`

- 캐릭터: `yuna_normal.png`
**유나**: 어제는 학생회장 옆에 있더니.

---

### `lunch2_yuna_6_seo`
- 배경: `annex_exhibit_hallway.png`
- 다음: `lunch2_yuna_7_seo`

- 캐릭터: `yuna_normal.png`
**{name}**: 오늘은 네가 날 따로 불러 줬잖아.

---

### `lunch2_yuna_7_seo`
- 배경: `annex_exhibit_hallway.png`
- 다음: `lunch2_yuna_8_seo`

- 캐릭터: `yuna_normal.png`
**유나**: 조금 의외네.

---

### `lunch2_yuna_8_seo`
- 배경: `annex_exhibit_hallway.png`
- 다음: `lunch2_yuna_9`

- 캐릭터: `yuna_normal.png`
**{name}**: 네가 부른 곳이라서 더 와 보고 싶었어.

---

### `lunch2_yuna_3_yuna_aff`
- 배경: `annex_exhibit_hallway.png`
- 호감분기: Yuna
  - [10+] → `lunch2_yuna_3_yuna`
  - [0+] → `lunch2_yuna_3_cool`
  - [-19 이상] → `lunch2_yuna_3_cool`
  - [기본] → `lunch2_yuna_3_neg`
- 다음: `lunch2_yuna_3_neg`

- 캐릭터: `없음`

---

### `lunch2_yuna_3_yuna`
- 배경: `annex_exhibit_hallway.png`
- 스탯: Yuna +6
- 다음: `lunch2_yuna_4_yuna`

- 캐릭터: `yuna_normal.png`
**유나**: 오늘도 왔네.

---

### `lunch2_yuna_4_yuna`
- 배경: `annex_exhibit_hallway.png`
- 다음: `lunch2_yuna_5_yuna`

- 캐릭터: `yuna_normal.png`
**{name}**: 이번엔 네가 비밀 장소까지 적어서 쪽지 줬잖아.

---

### `lunch2_yuna_5_yuna`
- 배경: `annex_exhibit_hallway.png`
- 다음: `lunch2_yuna_6_yuna`

- 캐릭터: `yuna_normal.png`
**유나**: 어제 도서관도 내내 조용하기만 했는데. 오늘도 안 심심해?

---

### `lunch2_yuna_6_yuna`
- 배경: `annex_exhibit_hallway.png`
- 다음: `lunch2_yuna_7_yuna`

- 캐릭터: `yuna_normal.png`
**{name}**: 어제 너랑 있던 시간이 제일 편했거든. 그래서 또 왔어.

---

### `lunch2_yuna_7_yuna`
- 배경: `annex_exhibit_hallway.png`
- 다음: `lunch2_yuna_8_yuna`

- 캐릭터: `yuna_normal.png`
**유나**: 편했다라.

---

### `lunch2_yuna_8_yuna`
- 배경: `annex_exhibit_hallway.png`
- 다음: `lunch2_yuna_9`

- 캐릭터: `yuna_normal.png`
**{name}**: 응, 굳이 말 안 해도 네 옆에 있는 건 조금도 안 어색했어.

---

### `lunch2_yuna_9`
- 배경: `annex_exhibit_hallway.png`
- 다음: `lunch2_yuna_10`

- 캐릭터: `yuna_smile.png`
**유나**: 이쪽 안으로 따라와. 복도는 가끔 애들이 지나다니니까. *읽던 페이지에 책갈피를 끼우고 앞장선다.*

---

### `lunch2_yuna_10`
- 배경: `annex_exhibit_hallway.png`
- 다음: `lunch2_yuna_11`

- 캐릭터: `yuna_normal.png`
**유나**: 이리 들어와.

---

### `lunch2_yuna_11`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_13`

- 캐릭터: `yuna_normal.png`
**유나**: 나무 바닥이라 발소리가 좀 울리지? 이제 다 왔어. *빛바랜 벨벳 커튼이 드리워진 안쪽의 자그마한 방으로 들어선다.*

---

### `lunch2_yuna_13`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_14`

- 캐릭터: `yuna_normal.png`
**{name}**: 여긴 대체 뭐 하는 곳이야? 너만의 비밀 독서실?

---

### `lunch2_yuna_14`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_15`

- 캐릭터: `yuna_normal.png`
**유나**: 별관 구석에 이런 방이 있다는 거, 학교에 아는 사람 거의 없어.

---

### `lunch2_yuna_15`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_16`

- 캐릭터: `yuna_normal.png`
**유나**: 네가 앞에 우두커니 서 있으면 신경 쓰여서 못 읽어. 이리 앉아, 여기선 일일이 허락 구할 필요 없으니까. *작은 2인용 소파에 몸을 묻으며 가방을 바닥으로 내려 바로 옆자리를 비워 준다.*

---

### `lunch2_yuna_16`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_17`

- 캐릭터: `yuna_normal.png`
**유나**: 원래 이 방을 아는 사람이 나 말고 한 명 더 있었는데.

---

### `lunch2_yuna_17`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_17_b`

- 캐릭터: `yuna_normal.png`
**{name}**: 한 명 더 있었는데?

---

### `lunch2_yuna_17_b`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_choice`

- 캐릭터: `yuna_normal.png`
**유나**: *유나의 손끝에 밀린 책갈피가 페이지 틈으로 천천히 자취를 감춘다. 유나는 끝내 다음 장을 넘기지 않는다.*

---

### `lunch2_yuna_choice`
- 배경: `yuna_hideout_day.webp`
- 선택지:
  1. "그 사람, 지금은?" → `lunch2_yuna_c1_1` | Yuna -3
  2. "묻지 않고 옆에 앉는다" → `lunch2_yuna_c2_1` | Yuna +4
  3. "그 사람보다 내가 더 잘 들어줄 수 있어" → `lunch2_yuna_trap_compare` | Yuna -4
  4. "이제는 나한테만 얘기해도 되겠네" → `lunch2_yuna_trap_exclusive` | Yuna -5

- 캐릭터: `yuna_normal.png`
**{name}**: *'있었는데'라는 말 뒤에 긴 침묵이 내려앉는다. 나란히 앉은 좁은 소파 위로 유나의 서늘한 어깨선이 닿을 듯 가깝다.*

---

### `lunch2_yuna_trap_compare`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_c2_1`

- 캐릭터: `yuna_sad.png`
**유나**: *유나가 책갈피 끝을 페이지 깊숙이 밀어 넣으며 서늘하게 선을 긋는다.* 그 사람이랑 너는 가볍게 비교할 대상이 아니야.

---

### `lunch2_yuna_trap_exclusive`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_c2_1`

- 캐릭터: `yuna_sad.png`
**유나**: *책을 자기 가슴 쪽으로 끌어당겼다가 천천히 내려놓는다.* 누구한테 어디까지 얘기할지는 내가 직접 정해.

---

### `lunch2_yuna_c2_1`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_c2_3`

- 캐릭터: `yuna_normal.png`
**{name}**: *더 묻지 않고 소파 옆자리에 조용히 몸을 기대자 유나가 자기 무릎 옆에 쌓아 둔 책 더미에서 한 권을 골라 내 허벅지 가까이에 놓아준다.*

---

### `lunch2_yuna_c2_3`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_c2_4`

- 캐릭터: `yuna_normal.png`
**유나**: 이거 읽어 봐.

---

### `lunch2_yuna_c2_4`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_c2_6`

- 캐릭터: `yuna_normal.png`
**{name}**: *커튼 너머로 스며드는 옅은 햇살 속에서 두 사람의 책장 넘기는 소리가 나른한 호흡처럼 번갈아 이어진다.*

---

### `lunch2_yuna_c2_6`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_c2_7`

- 캐릭터: `yuna_normal.png`
**유나**: 내가 이 작은 방을 좋아하는 이유.

---

### `lunch2_yuna_c2_7`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_c2_8`

- 캐릭터: `yuna_normal.png`
**{name}**: 응?

---

### `lunch2_yuna_c2_8`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_c2_9`

- 캐릭터: `yuna_normal.png`
**유나**: 세상과 끊어진 것처럼 조용해서. — 그런데 오늘은 혼자가 아니어서.

---

### `lunch2_yuna_c2_9`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_end`

- 캐릭터: `yuna_normal.png`
**유나**: *유나가 살짝 달아오른 뺨을 감추듯 책장 쪽으로 고개를 돌리지만 펼쳐진 페이지는 한참 동안 넘어가지 않는다.*

---

### `lunch2_yuna_c1_1`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_c1_2`

- 캐릭터: `yuna_normal.png`
**유나**: 학교를 떠났어. 딱 1년 전에 전학 갔거든.

---

### `lunch2_yuna_c1_2`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_c1_3`

- 캐릭터: `yuna_normal.png`
**유나**: *유나의 하얀 손가락 끝이 책갈피 모서리를 핏기가 가실 만큼 꾹 누른다.*

---

### `lunch2_yuna_c1_3`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_c1_4`

- 캐릭터: `yuna_normal.png`
**유나**: 나한테는 연락 한 통 남기지 않고.

---

### `lunch2_yuna_c1_4`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_c1_5`

- 캐릭터: `yuna_sad.png`
**유나**: *책갈피를 너무 깊이 밀어 넣는 바람에 종이 모서리가 작게 구겨지지만 유나는 끝내 펴지 않는다.*

---

### `lunch2_yuna_c1_5`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_c1_6`

- 캐릭터: `yuna_normal.png`
**{name}**: 전학 간 뒤로도 끝까지 연락을 안 한 거야?

---

### `lunch2_yuna_c1_6`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_c1_7`

- 캐릭터: `yuna_normal.png`
**유나**: 글쎄, 일부러 안 한 건지, 아니면 못 한 건지 아직도 모르겠어.

---

### `lunch2_yuna_c1_7`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_c1_9`

- 캐릭터: `yuna_normal.png`
**{name}**: 꺼내기 힘든 이야기면 억지로 더 말 안 해도 괜찮아. *유나가 펼친 책 표지를 들어 자기 코끝까지 가린다.*

---

### `lunch2_yuna_c1_9`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_c1_9_b`

- 캐릭터: `yuna_normal.png`
**{name}**: 혹시 그 사람도 갑자기 떠나게 된 거 아닐까? 경황이 없으면 미처 연락 못 남기고 헤어지기도 하잖아.

---

### `lunch2_yuna_c1_9_b`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_c1_10`

- 캐릭터: `yuna_angry.png`
**유나**: 그럴 수도 있다는 건 나도 머리로는 알아. 하지만 아무것도 모르는 네가 그 사람 사정을 대신 변명해 주진 마. *탁 소리가 나게 책을 덮어 버린다.*

---

### `lunch2_yuna_c1_10`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_c1_11`

- 캐릭터: `yuna_normal.png`
**유나**: 이미 다른 학교로 가 버렸다는 것도 한참 뒤에야 남들한테 건네 들었어. 그전까진 내게 귀띔 한마디 없었고.

---

### `lunch2_yuna_c1_11`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_c1_12`

- 캐릭터: `yuna_normal.png`
**{name}**: 많이 허전했겠네.

---

### `lunch2_yuna_c1_12`
- 배경: `yuna_hideout_day.webp`
- 다음: `lunch2_yuna_end`

- 캐릭터: `yuna_normal.png`
**유나**: ...응. 이제 그만 각자 책 읽자. *구겨졌던 페이지 모서리를 손끝으로 천천히 펴낸다.*

---

### `lunch2_yuna_3_cool`
- 배경: `annex_exhibit_hallway.png`
- 스탯: Yuna +6
- 다음: `lunch2_yuna_cool_cont`

- 캐릭터: `yuna_bored.png`
**유나**: *말없이 책갈피만 끼워 넣고 가방을 치워 옆자리를 비운다.*

---

### `lunch2_yuna_cool_cont`
- 배경: `annex_exhibit_hallway.png`
- 다음: `lunch2_yuna_end`

- 캐릭터: `yuna_bored.png`
**{name}**: *고요한 방 안에서 내 책장만 한 장 넘어간다. 유나는 귀에 꽂은 이어폰을 끝내 빼지 않는다.*

---

### `lunch2_yuna_end`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_start`

- 캐릭터: `yuna_normal.png`
**{name}**: *별관 문을 닫기 전 마지막으로 돌아보자 유나는 아까 '있었는데'라고 말하며 멈췄던 바로 그 페이지를 다시 내려다보고 있었다.*

---

### `lunch2_yuna_3_neg`
- 배경: `annex_exhibit_hallway.png`
- 다음: `lunch2_yuna_neg_leave`

- 캐릭터: `yuna_bored.png`
**유나**: *쪽지도 건네지 않은 채 차갑게 책장만 한 장 넘긴다.* 오늘은 누구랑도 말 섞기 싫어.

---

### `lunch2_yuna_neg_leave`
- 배경: `school_hallway.png`
- 다음: `after2_start`

- 캐릭터: `없음`
**{name}**: *별관 문을 닫고 발소리를 죽인 채 계단을 내려간다.*

---

## 2일차 — 방과후 `day2_3_afterschool`

### `after2_start`
- 배경: `room_school.png`
- BGM: `sunset1.mp3`
- 다음: `after2_msg_dain`

- 캐릭터: `없음`
**{name}**: *종례가 끝난 방과 후 교실. 쉬는 시간마다 꺼냈던 휴대폰이 주머니 안에서 다시 짧게 울린다. 새 알림 두 개가 나란히 떠 있다.*

---

### `after2_msg_dain`
- 배경: `room_school.png`
- 다음: `after2_msg_seo`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 당장 체육관으로 튀어 와! 오늘은 진짜 제대로 된 내기다.

---

### `after2_msg_seo`
- 배경: `room_school.png`
- 다음: `after2_msg_yuna`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 방과후에 학생회실로 잠깐 와 줄 수 있어? 오늘따라 일손이 좀 부족해서.

---

### `after2_msg_yuna`
- 배경: `room_school.png`
- 분기:
  - [`nurse_day1`] → `after2_nurse_transition`
  - [기본] → `after2_choice`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *유나에게선 따로 온 메시지가 없다. 대신 주머니 속 아침 쪽지에 적힌 '도서관 별관' 다섯 글자를 손끝으로 매만진다.*

---

### `after2_nurse_transition`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d2_1`

- 캐릭터: `없음`
**{name}**: *아까 5교시 체육 시간 뒤에 붙였던 팔꿈치 밴드 모서리가 셔츠 소매에 자꾸 걸린다. 손끝으로 꾹 눌러 붙여 보지만 금세 다시 들뜬다.*

---

### `hidden_nurse_d2_1`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_2`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건실에 들러 소매를 걷어 올리자 밴드 한쪽 끝이 반쯤 들려 있다. 다행히 상처에서 피가 더 배어 나오진 않았다.*

---

### `hidden_nurse_d2_2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 어라, 붙인 지 반나절도 안 돼서 밴드가 반품 들어왔네. 이리 와서 앉아 봐.

---

### `hidden_nurse_d2_3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_4`

- 캐릭터: `nurse_normal.png`
**{name}**: 움직이다 보니까 밴드 끝이 자꾸 셔츠 소매에 걸려서요.

---

### `hidden_nurse_d2_4`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 팔 이쪽으로 내밀어 봐, 어디 보자.

---

### `hidden_nurse_d2_5`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_choice1`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *선생님의 서늘한 손끝이 들뜬 밴드를 조심스레 떼어 내고 상처 둘레를 소독솜으로 닦아 낸 뒤 새 밴드를 꺼낸다.* 이번에도 조금 따가울 거야.

---

### `hidden_nurse_d2_choice1`
- 배경: `nurse_room.png`
- 선택지:
  1. "병원에서는 이런 것도 배워요?" → `hidden_nurse_d2_choice1_a` | Nurse +5
  2. "밴드 하나도 꼼꼼하시네요." → `hidden_nurse_d2_choice1_b` | Nurse -2
  3. "저한테만 이렇게 정성껏 해주시는 거죠?" → `hidden_nurse_d2_choice1_b` | Nurse -4
  4. "선생님한테 치료받으면 다친 것도 나쁘진 않네요" → `hidden_nurse_d2_choice1_b` | Nurse -6

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 내 손목을 감싸 쥐고 팔꿈치를 천천히 접었다 펴 보며 새 밴드 붙일 각도를 가늠한다.*

---

### `hidden_nurse_d2_choice1_a`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 응, 늘 움직이는 관절 부위는 피부 결을 따라 붙여야 활동해도 안 뜯기거든.

---

### `hidden_nurse_d2_choice1_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 당연하지, 이게 내 일이니까. 대충 붙여서 보냈다가 수업 중에 또 떨어지면 네가 고생이잖아.

---

### `hidden_nurse_d2_6`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_7`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 새 밴드 포장지를 휴지통에 버린다. 아까 체육 시간 뒤에 급히 닫았던 책상 서랍은 굳게 잠긴 채 그대로다.*

---

### `hidden_nurse_d2_7`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_choice2`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *서랍 쪽으로 향한 내 시선을 눈치채고 가느다란 손바닥을 서랍 손잡이 위에 살포시 얹는다.* 그 서랍 얘기는 아까로 끝. 아무리 궁금한 눈으로 쳐다봐도 안 열어 줄 거야.

---

### `hidden_nurse_d2_choice2`
- 배경: `nurse_room.png`
- 선택지:
  1. "비밀 많으시네요. 하나만 알려주면 안 돼요?" → `hidden_nurse_d2_choice2_a` | Nurse +6
  2. "네, 안 봤어요" → `hidden_nurse_d2_choice2_b` | Nurse -3
  3. "선생님 비밀이면 제가 꼭 지켜드릴게요" → `hidden_nurse_d2_choice2_b` | Nurse -4
  4. "저한테는 다 말씀하셔도 괜찮아요" → `hidden_nurse_d2_choice2_b` | Nurse -5

- 캐릭터: `nurse_shy.png`
**{name}**: *서랍 손잡이를 감싼 선생님의 하얀 손마디에 미세한 힘이 들어간다.*

---

### `hidden_nurse_d2_choice2_a`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_8`

- 캐릭터: `nurse_shy.png`
**보건선생님**: *닫힌 서랍 앞면을 검지로 톡톡 두드린다.* 아까 코코아 좋아한다는 비밀까지 알려 줬으면 충분하지. 오늘치 비밀은 더 없어.

---

### `hidden_nurse_d2_choice2_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_8`

- 캐릭터: `nurse_shy.png`
**보건선생님**: *부드러운 미소와 함께 서랍 손잡이에서 손을 뗀다.* 그래, 우리 둘만의 비밀은 이 정도면 충분하지?

---

### `hidden_nurse_d2_8`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d2_9`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 자, 훨씬 단단하게 붙였어. 오늘 밤엔 진짜로 물 닿지 않게 조심하고.

---

### `hidden_nurse_d2_9`
- 플래그: `nurse_day2`
- 다음: `hidden_nurse_d2_freetalk`

<!-- i18n -->

---

### `hidden_nurse_d2_freetalk`
- 배경: `nurse_room.png`
- 타입: `free_talk`
- 다음: `after2_choice`
- 컨텍스트: "전학 이틀째 방과후, 체육 시간에 다친 주인공의 처치를 막 끝낸 보건실이다. 주인공은 보건선생님의 세심함을 알게 되었고 두 사람의 신뢰가 조금 깊어졌다. 치료는 끝났으며 새로운 부상이나 진단을 만들어 내지 않는다. 관계는 보건교사와 학생이고 현재의 전문적 경계를 지킨다."
- 성격: "보건선생님은 현실적이고 관찰력이 좋으며 걱정을 가벼운 농담으로 누그러뜨린다. 다정하지만 과보호하지 않고 건강과 감정에 관한 선택을 주인공에게 남겨 둔다."

- 캐릭터: `nurse_normal.png`
**보건선생님**: *사용한 소독솜을 버리고 밴드 가장자리를 한 번 눌러 본다.* 됐어. 아픈 데 말고도 할 말 있으면 지금 해.

---

### `hidden_nurse_d2_skip`
- 배경: `nurse_room.png`
- 호감분기: Nurse
  - [-19 이상] → `hidden_nurse_d2_low`
  - [기본] → `hidden_nurse_d2_neg`
- 다음: `hidden_nurse_d2_neg`

- 캐릭터: `없음`

---

### `hidden_nurse_d2_low`
- 배경: `nurse_room.png`
- 다음: `after2_choice`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건실 문을 열자 선생님이 읽던 차트를 덮는다.* 지금은 꼭 필요한 처치가 아니면 길게 이야기 나누기 어렵겠네. 이만 교실로 돌아가 봐.

---

### `hidden_nurse_d2_neg`
- 배경: `nurse_room.png`
- 다음: `after2_choice`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *차트를 탁 덮고 출입문 쪽을 가리킨다.* 오늘 더 받을 처치 없으면 그만 나가 줘.

---

### `after2_choice`
- 배경: `room_school.png`
- BGM: `sunset1.mp3`
- 선택지:
  1. "체육관으로 (다인)" → `after2_dain_1`
  2. "학생회실로 (서연)" → `after2_seo_1`
  3. "도서관 별관을 지나가 본다 (유나)" → `after2_yuna_1`

- 캐릭터: `없음`
**{name}**: *석양이 물들기 시작하는 방과후, 어디로 발걸음을 옮길까.*

---

### `after2_dain_1`
- 배경: `gym.png`
- BGM: `daily2.mp3`
- 스탯: Dain +3
- 다음: `after2_dain_tone`

- 캐릭터: `dain_active.png`
**{name}**: *체육관 문을 열자 마룻바닥 울리는 소리와 함께 배구 네트 앞에서 가볍게 몸을 풀고 있는 다인이 보인다.*

---

### `after2_dain_tone`
- 배경: `gym.png`
- 호감분기: Dain
  - [20+] → `after2_dain_2`
  - [0+] → `after2_dain_cool_1`
  - [-19 이상] → `after2_dain_cool_1`
  - [기본] → `after2_dain_neg_1`
- 다음: `after2_dain_neg_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after2_dain_2`
- 배경: `gym.png`
- 플래그: `chose_dain_after2`
- 다음: `after2_dain_3`

- 캐릭터: `dain_sweat.png`
**다인**: 오, 드디어 왔네? 너 딱 걸렸어, 지각이야!

---

### `after2_dain_3`
- 배경: `gym.png`
- 다음: `after2_dain_4`

- 캐릭터: `dain_sweat.png`
**{name}**: 시계 봐, 약속 시간보다 5분이나 일찍 왔는데.

---

### `after2_dain_4`
- 배경: `gym.png`
- 다음: `after2_dain_5`

- 캐릭터: `dain_sweat.png`
**다인**: 난 네가 올 줄 알고 10분 전부터 와서 기다렸거든!

---

### `after2_dain_5`
- 배경: `gym.png`
- 다음: `after2_dain_6`

- 캐릭터: `dain_sweat.png`
**{name}**: *성격 급한 네가 일찍 온 거지 내가 늦은 건 아니잖아.*

---

### `after2_dain_6`
- 배경: `gym.png`
- 다음: `after2_dain_7`

- 캐릭터: `dain_sweat.png`
**다인**: 잔말 말고 바로 본게임 들어가자! 네가 서브 다섯 번 넣어서 세 번 이상 코트 안쪽에 꽂으면 네 승리! 못 넘기면 오늘 학교 앞 떡볶이는 네가 쏘는 거다!

---

### `after2_dain_7`
- 배경: `gym.png`
- 다음: `after2_dain_8`

- 캐릭터: `dain_normal.png`
**{name}**: 패배 벌칙이 갑자기 떡볶이야?

---

### `after2_dain_8`
- 배경: `gym.png`
- 다음: `after2_dain_9`

- 캐릭터: `dain_laugh.png`
**다인**: 뛰었더니 벌써 배고파서 그래! 자, 공 받는다!

---

### `after2_dain_9`
- 배경: `gym.png`
- 다음: `after2_dain_9_b`

- 캐릭터: `dain_normal.png`
**{name}**: *심호흡 끝에 날린 첫 서브는 네트 상단에 걸렸지만 감을 잡고 때린 두 번째 공은 매섭게 네트를 넘어 코트 안쪽 라인에 꽂힌다.*

---

### `after2_dain_9_b`
- 배경: `gym.png`
- 다음: `after2_dain_9_c`

- 캐릭터: `dain_normal.png`
**다인**: *바닥을 튀어 오른 공을 두 손으로 가볍게 잡아채며 눈을 동그랗게 뜬다.* 어라? 초보인 줄 알고 살살 봐주려고 했는데 큰일 날 뻔했네.

---

### `after2_dain_9_c`
- 배경: `gym.png`
- 다음: `after2_dain_9_d`

- 캐릭터: `dain_active.png`
**다인**: 방금 건 우연히 손에 잘 맞은 걸 수도 있잖아. 진짜 실력인지는 정면으로 붙어 봐야 알지! *자세를 낮추며 배구공을 쥔 손끝에 탄력 있게 힘을 준다.*

---

### `after2_dain_9_d`
- 배경: `gym.png`
- 다음: `after2_dain_9_e`

- 캐릭터: `dain_active.png`
**다인**: 좋았어, 가벼운 서브 연습은 여기서 끝! 지금부턴 연속 랠리로 먼저 세 점 따는 사람이 이기는 거다!

---

### `after2_dain_9_e`
- 배경: `gym.png`
- 다음: `after2_dain_9_f`

- 캐릭터: `dain_active.png`
**{name}**: *숨 가쁜 랠리가 이어지는 동안 유심히 보니, 다인은 점프 후 착지할 때마다 왼발부터 먼저 딛고 오른쪽 다리는 반 박자 늦게 사뿐히 내려놓는다.*

---

### `after2_dain_9_f`
- 배경: `gym.png`
- 다음: `after2_dain_12`

- 캐릭터: `dain_sweat.png`
**다인**: 헉, 헉... 3:2로 매치 끝! *가쁜 숨을 몰아쉬며 바닥에서 일어난 다인이 무심코 오른쪽 무릎을 한 번 문지르고는 점수판을 넘긴다.*

---

### `after2_dain_12`
- 배경: `street.png`
- BGM: `daily.mp3`
- 다음: `after2_dain_13`

- 캐릭터: `dain_laugh.png`
**다인**: 아, 아깝게 졌네! 근데 너 공 치는 폼이 꽤 예사롭지 않은데? 분명 나한테 운동 안 한다고 하지 않았어?

---

### `after2_dain_13`
- 배경: `street.png`
- 다음: `after2_dain_14`

- 캐릭터: `dain_laugh.png`
**{name}**: 내 입으로 운동 아예 안 한다고 한 적은 없는데.

---

### `after2_dain_14`
- 배경: `street.png`
- 다음: `after2_dain_15`

- 캐릭터: `dain_normal.png`
**다인**: *팔에 끼고 있던 배구공을 통, 바닥에 떨어뜨릴 만큼 눈을 크게 뜬다.* 뭐야, 그럼 나 혼자 완전 속아 넘어간 거야?

---

### `after2_dain_15`
- 배경: `street.png`
- 다음: `after2_dain_16`

- 캐릭터: `dain_normal.png`
**{name}**: 속인 게 아니라 네가 먼저 제대로 물어보지 않았잖아.

---

### `after2_dain_16`
- 배경: `street.png`
- 호감분기: Dain
  - [25+] → `after2_dain_skinship_1`
  - [기본] → `after2_dain_freetalk`
- 다음: `after2_dain_freetalk`

- 캐릭터: `dain_laugh.png`
**다인**: *주먹을 어깨 높이까지 치켜들었다가 피식 웃으며 자기 옆구리에 붙인다.* 이 능구렁이 사기꾼 같으니라고. 아, 근데 오랜만에 진짜 땀 나게 재밌었다!

---

### `after2_dain_skinship_1`
- 배경: `street.png`
- 다음: `after2_dain_skinship_2`

- 캐릭터: `dain_laugh.png`
**다인**: 나이스 랠리! 네가 이렇게 잘 받아 주니까 내가 더 신나서 뛰었잖아. 한 판 이겼다고 너무 우쭐대지는 마! *짝 소리와 함께 맞부딪친 다인의 뜨거운 손바닥이 한 박자 늦게야 내 손에서 떨어진다.*

---

### `after2_dain_skinship_2`
- 배경: `street.png`
- 다음: `after2_dain_skinship_3`

- 캐릭터: `dain_shy.png`
**다인**: 앗, 미안. 손바닥 얼얼하지? 신나서 힘 조절하는 걸 깜빡했네.

---

### `after2_dain_skinship_3`
- 배경: `street.png`
- 다음: `after2_dain_freetalk`

- 캐릭터: `dain_shy.png`
**{name}**: *쇄골 위로 송골송골 땀방울이 맺힌 다인이 방금 내 손과 맞닿았던 자기 손바닥을 괜히 운동복 바지 옆선에 쓱 문지른다.*

---

### `after2_dain_freetalk`
- 배경: `snack_shop.webp`
- 분기:
  - [`chose_dain_lunch`] → `after2_dain_end`
  - [기본] → `after2_dain_end_b`

- 캐릭터: `dain_normal.png`
**다인**: *가게에 들어서자 다인이 떡볶이 컵을 밀어 놓고 젓가락을 든다.* 매운 거 잘 먹는지 오늘 확인한다?

---

### `after2_dain_end`
- 다음: `after2_dain_end_b`

<!-- i18n -->

---

### `after2_dain_end_b`
- 배경: `snack_shop.webp`
- 다음: `after2_dain_end_2`

- 캐릭터: `dain_laugh.png`
**{name}**: *고추장 냄새가 달콤하게 퍼지는 학교 앞 분식집. 다인이 빨간 떡 하나를 집어 입술을 오므린 채 호호 불어 식힌다.*

---

### `after2_dain_end_2`
- 배경: `snack_shop.webp`
- 다음: `after2_dain_end_2b`

- 캐릭터: `dain_laugh.png`
**다인**: 야, 솔직하게 불어 봐. 너 예전에 운동 꽤 본격적으로 배웠지?

---

### `after2_dain_end_2b`
- 배경: `snack_shop.webp`
- 다음: `after2_dain_end_2c`

- 캐릭터: `dain_laugh.png`
**{name}**: 그냥 어릴 때 조금 해 본 정도야.

---

### `after2_dain_end_2c`
- 배경: `snack_shop.webp`
- 다음: `after2_dain_end_2d`

- 캐릭터: `dain_laugh.png`
**다인**: 에이, 조금 배운 실력으론 내 스파이크 그렇게 못 받아 내! 빨리 실토해, 원래 운동 잘한다고.

---

### `after2_dain_end_2d`
- 배경: `snack_shop.webp`
- 다음: `after2_dain_end_3`

- 캐릭터: `dain_laugh.png`
**{name}**: 내 눈엔 네가 백 배는 더 멋있게 잘 치던데.

---

### `after2_dain_end_3`
- 배경: `snack_shop.webp`
- 다음: `after2_dain_end_3b`

- 캐릭터: `dain_laugh.png`
**{name}**: 그나저나 넌 언제부터 그렇게 배구를 잘했어? 코트에서 뛰는 거 보니까 그냥 취미로 치는 솜씨가 아니던데. *순간 다인의 젓가락 끝이 떡볶이 컵 가장자리에서 멈칫한다.*

---

### `after2_dain_end_3b`
- 배경: `snack_shop.webp`
- 다음: `after2_dain_end_3c`

- 캐릭터: `dain_laugh.png`
**다인**: 당연하지, 나 원래 배구 특기생으로 뽑혀서 들어왔었거든.

---

### `after2_dain_end_3c`
- 배경: `snack_shop.webp`
- 다음: `after2_dain_end_3d`

- 캐릭터: `dain_laugh.png`
**{name}**: *'들어왔었거든'이라는 과거형 어미가 끝나는 것과 동시에 다인의 손이 종이컵 옆 시원한 물컵으로 빠르게 옮겨 간다.*

---

### `after2_dain_end_3d`
- 배경: `snack_shop.webp`
- 다음: `after2_dain_end_3e`

- 캐릭터: `dain_laugh.png`
**다인**: 쓰읍, 아 매워! 여기 물, 물 좀 빨리!

---

### `after2_dain_end_3e`
- 배경: `snack_shop.webp`
- 다음: `after2_dain_rival_seo_check`

- 캐릭터: `dain_shy.png`
**다인**: 야 {name}, 거기 찬물 더 없냐? 내 입안에서 지금 불나는 것 같아! *얼얼해진 입술을 부채질하며 떡볶이 컵을 내 쪽으로 쑥 밀어 놓는다.*

---

### `after2_dain_cool_1`
- 배경: `gym.png`
- 다음: `after2_dain_cool_cont`

- 캐릭터: `dain_normal.png`
**다인**: 왔으면 바닥에 흩어진 공부터 주워 줘. 잡담은 연습 끝나고 하자.

---

### `after2_dain_cool_cont`
- 배경: `gym.png`
- 다음: `after2_dain_neg_leave`

- 캐릭터: `dain_normal.png`
**{name}**: *코트 구석의 공들을 주워 바구니에 담는다. 다인은 먼 네트만 바라보며 묵묵히 서브 자세를 잡는다.*

---

### `after2_dain_neg_1`
- 배경: `gym.png`
- 다음: `after2_dain_neg_leave`

- 캐릭터: `dain_angry.png`
**다인**: *느슨해진 네트 줄을 감아 조이며 이쪽은 쳐다보지도 않는다.* 오늘은 그냥 나 혼자 연습할게. 옆에서 방해만 하지 마.

---

### `after2_dain_neg_leave`
- 배경: `snack_shop.webp`
- 다음: `after2_dain_rival_seo_check`

- 캐릭터: `없음`
**{name}**: *무거운 공기가 내려앉은 체육관 문을 나와 혼자 매점 쪽으로 걷는다.*

---

### `after2_dain_rival_seo_check`
- 배경: `snack_shop.webp`
- 호감분기: Seoyeon
  - [25+] → `after2_dain_rival_seo_high`
  - [10+] → `after2_dain_rival_seo_mid`
  - [0+] → `after2_dain_rival_seo_low`
  - [-19 이상] → `after2_dain_rival_seo_low`
  - [기본] → `after2_dain_rival_seo_neg`
- 다음: `after2_dain_rival_seo_low`

- 캐릭터: `없음`

---

### `after2_dain_rival_seo_high`
- 배경: `snack_shop.webp`
- 스탯: Seoyeon -5
- 다음: `after2_dain_rival_yuna_check`

- 캐릭터: `seyoun_sad.png`
**서연**: *분식집 통유리창 밖을 지나던 서연의 발걸음이 멈춘다. 마주 놓인 떡볶이 컵 두 개를 확인하고 곧장 날아온 메시지.* 오늘 방과후엔 체육관 쪽으로 갔네. 다음엔 학생회실에도 잊지 말고 들러 줘.

---

### `after2_dain_rival_seo_mid`
- 배경: `snack_shop.webp`
- 스탯: Seoyeon -2
- 다음: `after2_dain_rival_yuna_check`

- 캐릭터: `seyoun_normal.png`
**{name}**: *가게 앞을 지나가던 서연이 창문 너머로 우리 테이블을 발견한다. 품에 안은 클립보드 모서리를 두 번 고쳐 맞춘 뒤 말없이 교문 쪽으로 멀어진다.*

---

### `after2_dain_rival_seo_low`
- 배경: `snack_shop.webp`
- 다음: `after2_dain_rival_yuna_check`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 분식집 앞에서 유리창 너머 두 사람에게 가볍게 목례만 건넨다. 걸음은 멈추지 않는다.*

---

### `after2_dain_rival_seo_neg`
- 배경: `snack_shop.webp`
- 다음: `after2_dain_rival_yuna_check`

- 캐릭터: `seyoun_normal.png`
**서연**: *가게 앞을 지나가면서도 시선 한 번 주지 않은 채 걸음을 늦추지 않는다.*

---

### `after2_dain_rival_yuna_check`
- 배경: `snack_shop.webp`
- 호감분기: Yuna
  - [25+] → `after2_dain_rival_yuna_high`
  - [10+] → `after2_dain_rival_yuna_mid`
  - [0+] → `after2_dain_rival_yuna_low`
  - [-19 이상] → `after2_dain_rival_yuna_low`
  - [기본] → `after2_dain_rival_yuna_neg`
- 다음: `after2_dain_rival_yuna_low`

- 캐릭터: `없음`

---

### `after2_dain_rival_yuna_high`
- 배경: `snack_shop.webp`
- 스탯: Yuna -5
- 다음: `after2_group_dain_companion`

- 캐릭터: `yuna_sad.png`
**{name}**: *가게 앞을 지나던 유나가 유리창 안쪽의 우리를 가만히 바라본다. 손가락 사이에 쥐고 있던 접힌 쪽지를 주머니 깊숙이 밀어 넣고는 그대로 돌아선다.*

---

### `after2_dain_rival_yuna_mid`
- 배경: `snack_shop.webp`
- 스탯: Yuna -2
- 다음: `after2_group_dain_companion`

- 캐릭터: `yuna_normal.png`
**{name}**: *분식집 앞을 걷던 유나가 나를 보고 귀에서 이어폰 한쪽을 빼려다가 맞은편의 다인을 보자 조용히 다시 이어폰을 꽂는다.*

---

### `after2_dain_rival_yuna_low`
- 배경: `snack_shop.webp`
- 다음: `after2_group_dain_companion`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 유리창 너머로 짧게 눈인사만 건네고는 도서관 별관 쪽으로 발길을 돌린다.*

---

### `after2_dain_rival_yuna_neg`
- 배경: `snack_shop.webp`
- 다음: `after2_group_dain_companion`

- 캐릭터: `yuna_bored.png`
**{name}**: *별관 쪽으로 걸어가는 유나는 고개를 반대로 돌린 채 책만 품에 안고 지나친다.*

---

### `after2_group_dain_companion`
- 배경: `gym.png`
- 타입: `group_free_talk`
- 다음: `after2_group_return`

- 캐릭터: `없음`
**다인**: *체육관에서 공 수레를 잡는다.* 창고 쪽은 행사 자료부터 옮겨 달랬대. 난 공부터 가져오라고 들었는데. 뭐부터 확인할래?

---

### `after2_seo_1`
- 배경: `student_room.png`
- BGM: `sunset1.mp3`
- 플래그: `chose_seo_after2`
- 스탯: Seoyeon +3
- 다음: `after2_seo_tone`

- 캐릭터: `seyoun_sad.png`
**{name}**: *방과후의 고요한 학생회실. 긴 회의용 책상 위 서류 더미 앞에 서연이 홀로 앉아 펜을 움직이고 있다.*

---

### `after2_seo_tone`
- 배경: `student_room.png`
- 호감분기: Seoyeon
  - [20+] → `after2_seo_2`
  - [0+] → `after2_seo_cool_1`
  - [-19 이상] → `after2_seo_cool_1`
  - [기본] → `after2_seo_neg_1`
- 다음: `after2_seo_neg_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after2_seo_2`
- 배경: `student_room.png`
- 다음: `after2_seo_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 진짜 와 줬네. — 솔직히 바쁘다고 안 올 줄 알았어.

---

### `after2_seo_3`
- 배경: `student_room.png`
- 다음: `after2_seo_4`

- 캐릭터: `seyoun_laugh.png`
**{name}**: 네가 직접 불렀는데 당연히 와야지.

---

### `after2_seo_4`
- 배경: `student_room.png`
- 다음: `after2_seo_4_b`

- 캐릭터: `seyoun_normal.png`
**서연**: 용기 내서 불러 보길 잘했네.

---

### `after2_seo_4_b`
- 배경: `student_room.png`
- 다음: `after2_seo_5`

- 캐릭터: `seyoun_sad.png`
**서연**: 자, {name}. 여기 목록 중에서 네가 맡고 싶은 것부터 골라 봐. *내 쪽으로 앉을 의자를 빼 주며 클립보드를 돌려 놓는다.*

---

### `after2_seo_5`
- 배경: `student_room.png`
- 다음: `after2_seo_6`

- 캐릭터: `seyoun_normal.png`
**{name}**: 일손 부족하다고 부른 건 너면서 선택권을 주네.

---

### `after2_seo_6`
- 배경: `student_room.png`
- 다음: `after2_seo_6_b`

- 캐릭터: `seyoun_normal.png`
**서연**: 내 부탁 듣고 와 준 게 고마워서 해 주는 특별 배려야.

---

### `after2_seo_6_b`
- 배경: `student_room.png`
- 다음: `after2_seo_7`

- 캐릭터: `seyoun_normal.png`
**{name}**: 봄 학기 행사 예산안이랑 동아리 신청서 묶음이네. 어느 쪽부터 먼저 손댈까?

---

### `after2_seo_7`
- 다음: `after2_seo_8`

<!-- i18n -->

---

### `after2_seo_8`
- 배경: `student_room.png`
- 다음: `after2_seo_8a2`

- 캐릭터: `seyoun_normal.png`
**서연**: 예산안은 날짜순으로 맞추고 저쪽은 동아리별로 분류하면 돼. — 이런 서류 정리하는 건 좀 해 봤어?

---

### `after2_seo_8a2`
- 배경: `student_room.png`
- 다음: `after2_seo_8a3`

- 캐릭터: `seyoun_normal.png`
**{name}**: 엄청 잘하진 않는데 그렇다고 엉망으로 하지도 않아.

---

### `after2_seo_8a3`
- 배경: `student_room.png`
- 다음: `after2_seo_8a4`

- 캐릭터: `seyoun_normal.png`
**서연**: 대답이 참 애매하네.

---

### `after2_seo_8a4`
- 배경: `student_room.png`
- 다음: `after2_seo_8b`

- 캐릭터: `seyoun_normal.png`
**{name}**: 네가 평소 칭찬할 때랑 비슷하지 뭐. 너도 늘 애매하게 돌려 말하잖아.

---

### `after2_seo_8b`
- 배경: `student_room.png`
- 다음: `after2_seo_8b2`

- 캐릭터: `seyoun_normal.png`
**{name}**: 열심히 도와주는데 칭찬 한마디쯤은 시원하게 해 줘도 되지 않아? 그렇게 애매하게 돌리지 말고. *서류를 넘기던 서연의 손끝이 멈추고 안경 너머 시선이 내 쪽을 향한다.*

---

### `after2_seo_8b2`
- 배경: `student_room.png`
- 다음: `after2_seo_8b3`

- 캐릭터: `seyoun_shy.png`
**서연**: 생각했던 것보다 손이 꽤 빠르고 정확하네.

---

### `after2_seo_8b3`
- 배경: `student_room.png`
- 다음: `after2_seo_8b4`

- 캐릭터: `seyoun_normal.png`
**{name}**: 방금 그건 정식 칭찬으로 들어도 돼?

---

### `after2_seo_8b4`
- 배경: `student_room.png`
- 다음: `after2_seo_8b4_b`

- 캐릭터: `seyoun_shy.png`
**서연**: 응, 특급 칭찬이야. 감사히 받아 둬.

---

### `after2_seo_8b4_b`
- 배경: `student_room.png`
- 다음: `after2_seo_choice1`

- 캐릭터: `seyoun_shy.png`
**서연**: *칭찬이라고 선선히 말해 놓고선 곧바로 시선을 내려 서류 모서리를 맞춘다. 뻐근한 듯 목을 살짝 돌리다 붉어진 목덜미 아래 셔츠 깃을 손끝으로 한 번 당긴다.*

---

### `after2_seo_choice1`
- 배경: `student_room.png`
- 선택지:
  1. "석양이 예쁜데. 창밖 얘기야." → `after2_seo_sunset_joke` | Seoyeon +4
  2. "매일 하는 거면 익숙하겠네." → `after2_seo_neck_worry` | Seoyeon -3
  3. "혼자 애쓰지 말고 내가 대신 끝내줄까?" → `after2_seo_neck_worry` | Seoyeon -4
  4. "이 정도면 됐어. 나머지는 내일 해" → `after2_seo_neck_worry` | Seoyeon -5

- 캐릭터: `seyoun_normal.png`
**{name}**: *반쯤 열린 블라인드 틈으로 쏟아진 주황빛 노을이 책상 위 서류와 서연의 옆얼굴을 따뜻하게 물들인다.*

---

### `after2_seo_sunset_joke`
- 배경: `student_room.png`
- 다음: `after2_seo_sunset_joke_b`

- 캐릭터: `seyoun_very_shy.png`
**{name}**: 창밖 노을 얘기라는 건 미리 확실히 해 둬야지. 괜히 네 얼굴 보고 한 말인 줄 오해받으면 나만 곤란하잖아. *순간 서연의 안경이 코끝으로 살짝 미끄러지고 쥐고 있던 펜 끝이 날짜 칸 밖으로 삐끗한다.*

---

### `after2_seo_sunset_joke_b`
- 다음: `after2_seo_sunset_react`

<!-- i18n -->

---

### `after2_seo_sunset_react`
- 배경: `student_room.png`
- 다음: `after2_seo_sunset_react_b`

- 캐릭터: `seyoun_very_shy.png`
**서연**: …누가 뭐랬어? 그렇게 굳이 덧붙이는 게 훨씬 더 수상하거든.

---

### `after2_seo_sunset_react_b`
- 다음: `after2_seo_9`

<!-- i18n -->

---

### `after2_seo_neck_worry`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_react`

- 캐릭터: `seyoun_normal.png`
**서연**: 난 괜찮아. 이 정도 서류 작업은 매일 하는 일상이야.

---

### `after2_seo_neck_react`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_react_b`

- 캐릭터: `seyoun_normal.png`
**서연**: *말은 그렇게 하면서도 굳은 어깨를 천천히 돌리다 작게 숨을 들이쉰다.*

---

### `after2_seo_neck_react_b`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_react_c`

- 캐릭터: `seyoun_normal.png`
**{name}**: 잠깐만 멈춰 봐. 서류 밑에 이거 받치고 해.

---

### `after2_seo_neck_react_c`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_touch`

- 캐릭터: `seyoun_normal.png`
**{name}**: *구석에 쌓여 있던 단단한 빈 파일 상자를 끌어다 서연의 책상 앞쪽으로 밀어 놓는다.*

---

### `after2_seo_neck_touch`
- 배경: `student_room.png`
- 호감분기: Seoyeon
  - [30+] → `after2_seo_neck_high`
  - [0+] → `after2_seo_neck_low`
  - [-19 이상] → `after2_seo_neck_low`
  - [기본] → `after2_seo_neck_neg`
- 다음: `after2_seo_neck_low`

- 캐릭터: `seyoun_normal.png`
**서연**: 빈 파일 상자를 독서대처럼 받침대로 쓰자고?

---

### `after2_seo_neck_high`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_high_b`

- 캐릭터: `seyoun_shy.png`
**{name}**: 어차피 비어 있는 상자잖아. 학생회장 목은 하나뿐이고.

---

### `after2_seo_neck_high_b`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_high_c`

- 캐릭터: `seyoun_normal.png`
**서연**: 하여간 말 한마디는 참 밉지 않게 잘하네.

---

### `after2_seo_neck_high_c`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_high_2`

- 캐릭터: `seyoun_shy.png`
**{name}**: *서연이 못 이기는 척 파일 상자 위로 서류 뭉치를 올려놓는다. 한결 높아진 눈높이 덕분에 고개를 깊게 숙이던 각도가 눈에 띄게 줄어든다.*

---

### `after2_seo_neck_high_2`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_high_2_b`

- 캐릭터: `seyoun_shy.png`
**서연**: 생각보다 편하긴 하네. 오늘만 네 아이디어 인정해 줄게.

---

### `after2_seo_neck_high_2_b`
- 배경: `student_room.png`
- 다음: `after2_seo_9`

- 캐릭터: `seyoun_shy.png`
**서연**: 자, 남은 거 날짜순으로 마저 맞추자. 이 상자는 여기 그대로 두고. *어깨가 맞닿을 듯 가까운 거리에서 서연이 다음 서류를 넘긴다.*

---

### `after2_seo_neck_low`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_low_b`

- 캐릭터: `seyoun_normal.png`
**{name}**: *가져온 파일 상자를 두 사람 사이의 책상 모서리에 조용히 내려놓는다.*

---

### `after2_seo_neck_low_b`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_low_c`

- 캐릭터: `seyoun_normal.png`
**{name}**: 불편해서 싫으면 안 써도 되고.

---

### `after2_seo_neck_low_c`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_low_2`

- 캐릭터: `seyoun_worried.png`
**서연**: *서연이 말없이 상자를 끌어다 자기 서류 더미 바로 옆에 챙겨 둔다.*

---

### `after2_seo_neck_low_2`
- 배경: `student_room.png`
- 다음: `after2_seo_9`

- 캐릭터: `seyoun_normal.png`
**서연**: 지금 하던 거 끝내고 다음 묶음 볼 때 써 볼게.

---

### `after2_seo_neck_neg`
- 배경: `student_room.png`
- 다음: `after2_seo_neck_neg_b`

- 캐릭터: `seyoun_pout.png`
**{name}**: 어차피 안 쓰는 빈 상자잖아.

---

### `after2_seo_neck_neg_b`
- 배경: `student_room.png`
- 다음: `after2_seo_9`

- 캐릭터: `seyoun_normal.png`
**서연**: *밀어 놓은 상자를 원래 구석 자리로 다시 치워 버린다.* 받침대는 필요 없어. 맡은 목록이나 틀리지 않게 맞춰 줘.

---

### `after2_seo_cool_1`
- 배경: `student_room.png`
- 다음: `after2_seo_cool_work`

- 캐릭터: `seyoun_normal.png`
**서연**: 왔으면 여기 표시된 목록부터 분류해 줘. *사무적인 손길로 클립보드를 밀어 준다.*

---

### `after2_seo_cool_work`
- 배경: `student_room.png`
- 다음: `after2_seo_9`

- 캐릭터: `seyoun_normal.png`
**{name}**: *말없이 서류 분류를 시작한다. 봄 학기 행사 예산안부터 동아리 신청서까지 손대야 할 분량이 꽤 쌓여 있다.*

---

### `after2_seo_9`
- 배경: `student_room.png`
- 호감분기: Seoyeon
  - [20+] → `after2_seo_choice2`
  - [0+] → `after2_seo_leave`
  - [-19 이상] → `after2_seo_leave`
  - [기본] → `after2_seo_leave`
- 다음: `after2_seo_leave`

- 캐릭터: `seyoun_normal.png`
**{name}**: *창가의 블라인드 그림자가 책상 끝까지 길게 누울 무렵에야 수북하던 서류 정리가 거의 마무리된다.*

---

### `after2_seo_choice2`
- 배경: `student_room.png`
- 선택지:
  1. "좀 더 있을까? 아직 남았지?" → `after2_seo_stay` | Seoyeon +4
  2. "끝났으면 갈게" → `after2_seo_leave` | Seoyeon +0
  3. "이 정도는 혼자 마무리할 수 있지?" → `after2_seo_choice2_trap` | Seoyeon -3

- 캐릭터: `seyoun_normal.png`
**{name}**: *마지막 서류철을 덮으며 노을빛이 짙어진 학생회실 안을 둘러본다.*

---

### `after2_seo_choice2_trap`
- 배경: `student_room.png`
- 다음: `after2_seo_leave`

- 캐릭터: `seyoun_pout.png`
**서연**: *남은 서류 더미를 자기 품 쪽으로 휙 끌어당긴다.* 그래, 어차피 처음부터 내 일이었으니까 들어가 봐.

---

### `after2_seo_leave`
- 배경: `student_room.png`
- 다음: `after2_seo_end`

- 캐릭터: `seyoun_normal.png`
**서연**: *가지런히 정돈된 서류 더미 위를 두 손으로 가볍게 눌러 맞춘다.*

---

### `after2_seo_stay`
- 배경: `student_room.png`
- 다음: `after2_seo_stay_2`

- 캐릭터: `seyoun_shy.png`
**서연**: 남은 일 시키려고 붙잡는 건 아니야. 정리가 다 끝났어도 곧장 일어나야 하는 법은 없잖아. *서연이 펜을 내려놓고 창가 블라인드를 한 칸 위로 올린다.*

---

### `after2_seo_stay_2`
- 배경: `student_room.png`
- 다음: `after2_seo_stay_3`

- 캐릭터: `seyoun_shy.png`
**서연**: 아이들 다 빠져나간 이 시간의 학생회실은 조용해서 참 좋아.

---

### `after2_seo_stay_3`
- 배경: `student_room.png`
- 다음: `after2_seo_stay_3b`

- 캐릭터: `seyoun_shy.png`
**{name}**: 천하의 학생회장님도 일 안 하고 멍하니 쉴 때가 있어?

---

### `after2_seo_stay_3b`
- 배경: `student_room.png`
- 다음: `after2_seo_stay_3c`

- 캐릭터: `seyoun_shy.png`
**서연**: 응, 딱 지금부터 네 옆에서 쉬려고.

---

### `after2_seo_stay_3c`
- 배경: `student_room.png`
- 다음: `after2_seo_end`

- 캐릭터: `seyoun_shy.png`
**{name}**: 여기 최종 확인표 마지막 한 장 남았네? 이것까지만 같이 보고 쉬자. *엎어 둔 클립보드 옆으로 마지막 종이 한 장을 나란히 끌어당긴다.*

---

### `after2_seo_end`
- 호감분기: Seoyeon
  - [25+] → `after2_seo_skinship_1`
  - [기본] → `after2_seo_rival_dain_check`
- 다음: `after2_seo_rival_dain_check`

<!-- i18n -->

---

### `after2_seo_skinship_1`
- 배경: `school_hallway.png`
- 다음: `after2_seo_skinship_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *문을 나서려는데 서연이 손을 뻗어 내 교복 깃의 먼지를 떼어 주는 순간, 서늘하고 부드러운 손등이 내 목덜미 맨살에 아슬아슬하게 스친다.*

---

### `after2_seo_skinship_2`
- 배경: `school_hallway.png`
- 다음: `after2_seo_skinship_3`

- 캐릭터: `seyoun_shy.png`
**서연**: 움직이지 말고 가만있어 봐. ...자, 됐어. *복도 밖으로 당번 학생의 청소 카트가 덜컹이며 지나간 뒤에야 내 셔츠 깃을 쥐었던 서연의 손끝이 천천히 떨어진다.*

---

### `after2_seo_skinship_3`
- 배경: `school_hallway.png`
- 다음: `after2_seo_rival_dain_check`

- 캐릭터: `seyoun_normal.png`
**서연**: 옷깃에 작은 실밥 같은 게 붙어 있었어.

---

### `after2_seo_neg_1`
- 배경: `student_room.png`
- 다음: `after2_seo_neg_leave`

- 캐릭터: `seyoun_pout.png`
**서연**: *출석 명단만 확인하고 볼펜을 내려놓는다.* 필요한 빈칸만 채우고 가. 다른 사적인 얘기는 내일 하자.

---

### `after2_seo_neg_leave`
- 배경: `school_hallway.png`
- 다음: `after2_seo_rival_dain_check`

- 캐릭터: `없음`
**{name}**: *지시받은 빈칸만 묵묵히 채워 넣고 서늘한 학생회실 문을 나선다.*

---

### `after2_seo_rival_dain_check`
- 배경: `school_hallway.png`
- 호감분기: Dain
  - [25+] → `after2_seo_rival_dain_high`
  - [10+] → `after2_seo_rival_dain_mid`
  - [0+] → `after2_seo_rival_dain_low`
  - [-19 이상] → `after2_seo_rival_dain_low`
  - [기본] → `after2_seo_rival_dain_neg`
- 다음: `after2_seo_rival_dain_low`

- 캐릭터: `없음`

---

### `after2_seo_rival_dain_high`
- 배경: `school_hallway.png`
- 스탯: Dain -5
- 다음: `after2_seo_rival_yuna_check`

- 캐릭터: `dain_sad.png`
**다인**: *체육관 앞 복도에서 배구공 바구니를 밀고 오던 다인이 나란히 걸어 나오는 우리 둘을 보고 멈춰 선다.* 오늘 학생회실 심부름은 꽤 길었나 보네. *바구니 손잡이를 꽉 쥔 채 먼저 고개를 돌려 가 버린다.*

---

### `after2_seo_rival_dain_mid`
- 배경: `school_hallway.png`
- 스탯: Dain -2
- 다음: `after2_seo_rival_yuna_check`

- 캐릭터: `dain_normal.png`
**다인**: *밀고 오던 공 바구니를 세운다.* 이제 다 끝났어? *내 옆의 서연을 한 번 흘끗 보더니 바구니를 밀고 체육관 안으로 들어간다.*

---

### `after2_seo_rival_dain_low`
- 배경: `school_hallway.png`
- 다음: `after2_seo_rival_yuna_check`

- 캐릭터: `dain_laugh.png`
**다인**: 둘 다 수고했어! *공 바구니 너머로 씩씩하게 손을 흔들어 보이고는 체육관 쪽으로 사라진다.*

---

### `after2_seo_rival_dain_neg`
- 배경: `school_hallway.png`
- 다음: `after2_seo_rival_yuna_check`

- 캐릭터: `dain_normal.png`
**다인**: *말없이 공 바구니를 거칠게 밀고 체육관 안으로 들어가 버린다. 평소 같은 손인사도 없다.*

---

### `after2_seo_rival_yuna_check`
- 배경: `school_hallway.png`
- 호감분기: Yuna
  - [25+] → `after2_seo_rival_yuna_high`
  - [10+] → `after2_seo_rival_yuna_mid`
  - [0+] → `after2_seo_rival_yuna_low`
  - [-19 이상] → `after2_seo_rival_yuna_low`
  - [기본] → `after2_seo_rival_yuna_neg`
- 다음: `after2_seo_rival_yuna_low`

- 캐릭터: `없음`

---

### `after2_seo_rival_yuna_high`
- 배경: `school_hallway.png`
- 스탯: Yuna -5
- 다음: `after2_group_seoyeon_companion`

- 캐릭터: `yuna_sad.png`
**{name}**: *계단참 창가에 기대어 책을 읽던 유나가 우리 둘이 나란히 나오는 소리에 표지를 덮는다. 책갈피 옆에 끼워 두었던 보랏빛 쪽지를 뽑아 말없이 반으로 접어 넣는다.*

---

### `after2_seo_rival_yuna_mid`
- 배경: `school_hallway.png`
- 스탯: Yuna -2
- 다음: `after2_group_seoyeon_companion`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나의 하얀 손가락이 펼쳐진 페이지 위에서 멈춘다. 우리 둘이 지나갈 수 있게 계단 한 칸을 비켜 준 뒤 다시 조용히 책을 펼친다.*

---

### `after2_seo_rival_yuna_low`
- 배경: `school_hallway.png`
- 다음: `after2_group_seoyeon_companion`

- 캐릭터: `yuna_normal.png`
**{name}**: *계단참에 서 있던 유나가 옆으로 비켜서며 짧게 눈인사만 건넨다.*

---

### `after2_seo_rival_yuna_neg`
- 배경: `school_hallway.png`
- 다음: `after2_group_seoyeon_companion`

- 캐릭터: `yuna_bored.png`
**{name}**: *계단참에 서 있던 유나는 책을 든 채 반대편 벽만 바라본다. 짧은 목례조차 없다.*

---

### `after2_group_seoyeon_companion`
- 배경: `student_room.png`
- 타입: `group_free_talk`
- 다음: `after2_group_return`

- 캐릭터: `없음`
**서연**: *학생회실에서 겹친 일정 두 칸을 짚는다.* 둘 다 네 도움이 필요해. 먼저 누구 쪽부터 갈 건데?

---

### `after2_yuna_1`
- 배경: `annex_exhibit_hallway.png`
- BGM: `night1.mp3`
- 다음: `after2_yuna_1_b`

- 캐릭터: `없음`
**{name}**: *아침에 받았던 쪽지를 떠올리며 인적 드문 도서관 별관 쪽으로 발걸음을 옮긴다.*

---

### `after2_yuna_1_b`
- 배경: `annex_exhibit_hallway.png`
- 배경톤: `empty`
- 다음: `after2_yuna_2`

- 캐릭터: `없음`
**{name}**: *노을이 비스듬히 스며든 별관 복도에는 인기척 하나 없다. 오직 구석의 비밀 독서실 문만이 손가락 두 마디 너비만큼 살짝 열려 있다.*

---

### `after2_yuna_2`
- 배경: `yuna_hideout_day.webp`
- 스탯: Yuna +3
- 다음: `after2_yuna_tone`

- 캐릭터: `yuna_normal.png`
**{name}**: *문을 밀자 경첩이 나직이 삐걱거린다. 안쪽 소파에 깊숙이 기대앉은 유나가 책 위로 고개를 든다.*

---

### `after2_yuna_tone`
- 배경: `yuna_hideout_day.webp`
- 호감분기: Yuna
  - [20+] → `after2_yuna_2_b`
  - [0+] → `after2_yuna_cool_1`
  - [-19 이상] → `after2_yuna_cool_1`
  - [기본] → `after2_yuna_neg_1`
- 다음: `after2_yuna_neg_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after2_yuna_2_b`
- 배경: `yuna_hideout_day.webp`
- 플래그: `chose_yuna_after2`
- 다음: `after2_yuna_3`

- 캐릭터: `yuna_shy.png`
**유나**: *펼쳐진 책 페이지 위에 올려 두었던 하얀 이어폰 한쪽을 집어 옆으로 살짝 치운다.*

---

### `after2_yuna_3`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_4`

- 캐릭터: `yuna_normal.png`
**유나**: 또 왔네.

---

### `after2_yuna_4`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_5`

- 캐릭터: `yuna_normal.png`
**{name}**: 방과후엔 따로 오라고 부른 적 없었잖아.

---

### `after2_yuna_5`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_6`

- 캐릭터: `yuna_normal.png`
**유나**: 내가 꼭 쪽지로 불러야만 오는 거야?

---

### `after2_yuna_6`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_7`

- 캐릭터: `yuna_normal.png`
**유나**: *유나의 가느다란 검지가 책 페이지의 같은 문장 밑을 두 번 천천히 따라 그린다.*

---

### `after2_yuna_7`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_8`

- 캐릭터: `yuna_normal.png`
**{name}**: 그냥 지나가는데 문이 살짝 열려 있길래.

---

### `after2_yuna_8`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_8b`

- 캐릭터: `yuna_normal.png`
**유나**: 내가 우연히 덜 닫았나 보네.

---

### `after2_yuna_8b`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_8c`

- 캐릭터: `yuna_shy.png`
**유나**: 서 있지 말고 옆에 앉아. *소파 안쪽 쿠션 위로 이어폰 한쪽이 놓여 있다. 유나가 자기 바로 옆자리를 손끝으로 가리킨다.*

---

### `after2_yuna_8c`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_8d`

- 캐릭터: `yuna_normal.png`
**유나**: 이거, 같이 들어 봐.

---

### `after2_yuna_8d`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_choice_pre1`

- 캐릭터: `yuna_normal.png`
**{name}**: 잔잔한 피아노 곡이네. 음악 들으면서 책 읽으면 안 거슬려? *유나와 이어폰을 한쪽씩 나눠 끼고 앉은 소파 사이로 얇은 줄이 아슬아슬하게 팽팽해진다.*

---

### `after2_yuna_choice_pre1`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_choice_pre2`

- 캐릭터: `yuna_normal.png`
**유나**: *엉킨 이어폰 줄을 손끝으로 한 번 풀어 내며 나직이 입을 연다.* 방과후 시간에 이 방까지 찾아오는 사람.

---

### `after2_yuna_choice_pre2`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_choice_pre3`

- 캐릭터: `yuna_normal.png`
**{name}**: 응?

---

### `after2_yuna_choice_pre3`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_choice_pre3_b`

- 캐릭터: `yuna_normal.png`
**유나**: 그 선배가 떠난 뒤로 단 한 명도 없었어.

---

### `after2_yuna_choice_pre3_b`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_choice`

- 캐릭터: `yuna_shy.png`
**유나**: *유나가 책 너머로 고개를 들어 나를 집요하리만치 가만히 바라본다. 유나의 하얀 손가락 사이에 감긴 이어폰 줄이 미동조차 없다.*

---

### `after2_yuna_choice`
- 배경: `yuna_hideout_day.webp`
- 선택지:
  1. "매일 올까?" → `after2_yuna_everyday` | Yuna +6
  2. "조용해서 좋다" → `after2_yuna_quiet` | Yuna +4
  3. "여긴 사람이 별로 없어서 좋다. 누구랑 와도 편하겠어." → `after2_yuna_trap` | Yuna -3

- 캐릭터: `yuna_normal.png`
**{name}**: *어깨가 닿을 듯 좁혀진 거리 속에서 유나의 손가락에 감긴 이어폰 줄이 한 바퀴 더 조여진다.*

---

### `after2_yuna_everyday`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_everyday_b`

- 캐릭터: `yuna_shy.png`
**유나**: 매일 오겠다는 말, 참 쉽게 하네. 내가 매일 오라고 허락한 적도 없는데. *손가락에 감았던 이어폰 줄 매듭을 스르르 풀었다가 다시 검지에 감아 쥔다.*

---

### `after2_yuna_everyday_b`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_everyday_react`

- 캐릭터: `yuna_normal.png`
**유나**: 그래도 네가 오고 싶으면 와. 굳이 막지는 않을게.

---

### `after2_yuna_everyday_react`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_everyday_react_b`

- 캐릭터: `yuna_shy.png`
**유나**: 대신 매일 출석하는 건 조금 곤란해. 생각날 때 가끔만 와.

---

### `after2_yuna_everyday_react_b`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_end`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나는 책갈피를 끼운 채로 한동안 같은 페이지에서 눈을 떼지 못하고 있다.*

---

### `after2_yuna_quiet`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_quiet_react`

- 캐릭터: `yuna_smile.png`
**유나**: 그치, 나도 그래서 여기가 제일 좋은 거야.

---

### `after2_yuna_quiet_react`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_end`

- 캐릭터: `yuna_smile.png`
**유나**: 꼭 나 혼자 있을 때만 조용한 건 아니었네. 이렇게 네가 옆에 있어도 방해받지 않고 읽을 수 있으니까. *책갈피를 한 장 뒤로 옮기면서도 소파 위에 놓인 이어폰은 거두지 않는다.*

---

### `after2_yuna_trap`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_trap_react`

- 캐릭터: `yuna_normal.png`
**유나**: …이 방이 좋다는 게 아니라, 나랑 있는 게 좋다는 얘기인 줄 알았는데.

---

### `after2_yuna_trap_react`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_end`

- 캐릭터: `yuna_normal.png`
**유나**: 방금 그 말은 다음에 다른 사람을 데려와도 되냐는 소리로 들려. 난 여기 아무나 데려와도 된다고 한 적 없어. *책갈피를 한 장 앞으로 되돌려 꽂고 소파 끝에 놓아두었던 이어폰을 가방 속으로 거두어들인다.*

---

### `after2_yuna_end`
- 배경: `yuna_hideout_day.webp`
- 호감분기: Yuna
  - [25+] → `after2_yuna_skinship_1`
  - [기본] → `after2_yuna_rival_dain_check`
- 다음: `after2_yuna_rival_dain_check`

- 캐릭터: `yuna_smile.png`
**{name}**: 어두워지기 전에 이제 가 봐야겠다. 빌려 쓴 이어폰은 여기 올려 둘게. *소파에서 일어나 가방을 챙겨 든다.*

---

### `after2_yuna_skinship_1`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_skinship_2`

- 캐릭터: `yuna_shy.png`
**{name}**: *테이블 위의 책을 정리하려 손을 뻗다가 유나의 차갑고 하얀 손등 위로 내 손바닥이 그대로 포개졌다.*

---

### `after2_yuna_skinship_2`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_skinship_3`

- 캐릭터: `yuna_shy.png`
**유나**: ...내가 먼저 잡으려던 건 아니었는데. 이 책은 네가 가져가. *겹쳐진 손끝 아래 책 모서리가 눌린 채 3초쯤 정적이 흐른 뒤에야 유나가 천천히 손을 뺀다.*

---

### `after2_yuna_skinship_3`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_rival_dain_check`

- 캐릭터: `yuna_normal.png`
**{name}**: *손을 거둔 유나가 내가 집기 편하도록 책등 방향을 돌려 조심스레 내밀어 준다.*

---

### `after2_yuna_cool_1`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_cool_cont`

- 캐릭터: `yuna_bored.png`
**유나**: *소파 위 이어폰 한쪽만 슬쩍 치운다.* 옆에서 책 읽어도 돼. 대신 말은 아껴 줘.

---

### `after2_yuna_cool_cont`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_rival_dain_check`

- 캐릭터: `yuna_bored.png`
**{name}**: *펼쳐진 책 한 페이지를 조용히 내려 읽는다. 유나는 뺐던 이어폰을 다시 귀에 꽂고 다음 장을 넘긴다.*

---

### `after2_yuna_neg_1`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_neg_leave`

- 캐릭터: `yuna_bored.png`
**유나**: *펼친 책을 덮지도 않고 쪽지 한 장 건네지 않는다.* 오늘은 누구랑도 같이 있기 싫어.

---

### `after2_yuna_neg_leave`
- 배경: `yuna_hideout_day.webp`
- 다음: `after2_yuna_rival_dain_check`

- 캐릭터: `없음`
**{name}**: *책을 덮지 않는 유나의 자리 옆을 조용히 지나쳐 별관 문고리를 잡는다.*

---

### `after2_yuna_rival_dain_check`
- 배경: `school_hallway.png`
- 호감분기: Dain
  - [25+] → `after2_yuna_rival_dain_high`
  - [10+] → `after2_yuna_rival_dain_mid`
  - [0+] → `after2_yuna_rival_dain_low`
  - [-19 이상] → `after2_yuna_rival_dain_low`
  - [기본] → `after2_yuna_rival_dain_neg`
- 다음: `after2_yuna_rival_dain_low`

- 캐릭터: `없음`

---

### `after2_yuna_rival_dain_high`
- 배경: `school_hallway.png`
- 스탯: Dain -5
- 다음: `after2_yuna_rival_seo_check`

- 캐릭터: `dain_sad.png`
**다인**: 야, 체육관으로 오랬더니 도서관 별관으로 도망갔네? 내일은 무조건 내 쪽으로 와야 한다!

---

### `after2_yuna_rival_dain_mid`
- 배경: `school_hallway.png`
- 스탯: Dain -2
- 다음: `after2_yuna_rival_seo_check`

- 캐릭터: `dain_normal.png`
**다인**: 오늘 방과후엔 도서관 갔었어? 내일은 꼭 체육관 들러!

---

### `after2_yuna_rival_dain_low`
- 배경: `school_hallway.png`
- 다음: `after2_yuna_rival_seo_check`

- 캐릭터: `dain_laugh.png`
**다인**: 도서관 별관 쪽에 있었구나? 조심히 들어가고 내일 봐!

---

### `after2_yuna_rival_dain_neg`
- 배경: `school_hallway.png`
- 다음: `after2_yuna_rival_seo_check`

- 캐릭터: `dain_normal.png`
**다인**: *복도 끝에 굴러간 배구공 하나만 휙 주워 들고는 말없이 등을 돌린다.*

---

### `after2_yuna_rival_seo_check`
- 배경: `school_hallway.png`
- 호감분기: Seoyeon
  - [25+] → `after2_yuna_rival_seo_high`
  - [10+] → `after2_yuna_rival_seo_mid`
  - [0+] → `after2_yuna_rival_seo_low`
  - [-19 이상] → `after2_yuna_rival_seo_low`
  - [기본] → `after2_yuna_rival_seo_neg`
- 다음: `after2_yuna_rival_seo_low`

- 캐릭터: `없음`

---

### `after2_yuna_rival_seo_high`
- 배경: `school_hallway.png`
- 스탯: Seoyeon -5
- 다음: `after2_group_yuna_companion`

- 캐릭터: `seyoun_sad.png`
**서연**: 도서관 별관에 가 있었구나. 다음엔 학생회실 쪽으로도 얼굴 비춰 줘.

---

### `after2_yuna_rival_seo_mid`
- 배경: `school_hallway.png`
- 스탯: Seoyeon -2
- 다음: `after2_group_yuna_companion`

- 캐릭터: `seyoun_normal.png`
**서연**: 별관에 있었네. 오늘 학생회 급한 일은 다 끝냈으니까 내일 교실에서 보자.

---

### `after2_yuna_rival_seo_low`
- 배경: `school_hallway.png`
- 다음: `after2_group_yuna_companion`

- 캐릭터: `seyoun_normal.png`
**서연**: 부족하던 일손은 다른 부원들로 채웠어. 내일 보자.

---

### `after2_yuna_rival_seo_neg`
- 배경: `school_hallway.png`
- 다음: `after2_group_yuna_companion`

- 캐릭터: `seyoun_normal.png`
**서연**: *출석부를 팔 안쪽에 단단히 붙인 채 복도를 스쳐 지나간다. 구두 소리는 한 번도 멈추지 않는다.*

---

### `after2_group_yuna_companion`
- 배경: `library_old.png`
- 타입: `group_free_talk`
- 다음: `after2_group_return`

- 캐릭터: `없음`
**유나**: *별관 책상에 자료 두 묶음이 놓인다.* 한쪽을 끝내기에도 시간이 빠듯해. 누구 옆에 남을 건데?

---

### `after2_group_return`
- 배경: `school.png`
- 다음: `minsu_warn_gate`

- 캐릭터: `없음`
**{name}**: *미묘한 여운이 감도는 대화를 마치고 가방을 고쳐 멘 채 교문 쪽으로 걸어간다.*

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
**{name}**: *노을이 지는 하굣길. 교문을 막 나서는데 등 뒤에서 민수가 성큼성큼 걸어와 따라붙는다.*

---

### `minsu_warn_1_b`
- 배경: `school.png`
- 다음: `minsu_warn_2`

- 캐릭터: `minsu_normal.png`
**민수**: *내 보폭에 맞춰 옆에 나란히 서더니 주머니에 두 손을 찔러 넣는다.*

---

### `minsu_warn_2`
- 배경: `school.png`
- 다음: `minsu_warn_3`

- 캐릭터: `minsu_smirk.png`
**민수**: 야, 전학생.

---

### `minsu_warn_3`
- 배경: `school.png`
- 다음: `minsu_warn_4`

- 캐릭터: `minsu_smirk.png`
**{name}**: 응? 왜 불러?

---

### `minsu_warn_4`
- 배경: `school.png`
- 다음: `minsu_warn_4_b`

- 캐릭터: `minsu_smirk.png`
**민수**: 너 요즘 학교 다니는 거 꽤 재밌냐?

---

### `minsu_warn_4_b`
- 배경: `school.png`
- 다음: `minsu_warn_5`

- 캐릭터: `minsu_normal.png`
**{name}**: *민수는 내 쪽을 보지 않고 교문 건너편 깜빡이는 횡단보도 신호등만 응시하고 있다.*

---

### `minsu_warn_5`
- 배경: `school.png`
- 다음: `minsu_warn_6`

- 캐릭터: `minsu_smirk.png`
**{name}**: 갑자기 그게 무슨 소리야?

---

### `minsu_warn_6`
- 배경: `school.png`
- 다음: `night2_start`

- 캐릭터: `minsu_smirk.png`
**민수**: 점심엔 한 명, 방과후엔 또 한 명. 넌 재밌겠지. — 뭐, 옆에서 보기에 그냥 그렇다고. *어깨를 한 번 가볍게 으쓱하고는 신호가 바뀌자 먼저 걸어간다.*

---

## 2일차 — 밤 `day2_4_night`

### `night2_start`
- 배경: `room_my.png`
- BGM: `night1.mp3`
- 다음: `night2_msg_1`

- 캐릭터: `없음`
**{name}**: *따뜻한 물로 샤워를 마치고 젖은 머리를 털며 침대에 몸을 뉘자마자 휴대폰이 연달아 울리며 세 사람의 알림이 동시에 떠오른다.*

---

### `night2_msg_1`
- 분기:
  - [`chose_dain_after2`] → `night2_msg_dain_specific`
  - [`chose_seo_after2`] → `night2_msg_seo_specific`
  - [`chose_yuna_after2`] → `night2_msg_yuna_specific`
  - [기본] → `night2_msg_generic`

<!-- i18n -->

---

### `night2_msg_dain_specific`
- 배경: `room_my.png`
- 다음: `night2_msg_dain_specific_2`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 야 오늘 방과후에 먹은 떡볶이 진짜 맛있었지!

---

### `night2_msg_dain_specific_2`
- 배경: `room_my.png`
- 다음: `night2_msg_seo_general`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 내일도 나랑 내기하자 대신 이번엔 내가 이길 종목으로 바꿔서!

---

### `night2_msg_seo_general`
- 배경: `room_my.png`
- 다음: `night2_msg_yuna_general`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 내일 점심시간에도 옥상 문 열어 놓을게. 잊지 말고 올라와

---

### `night2_msg_seo_specific`
- 배경: `room_my.png`
- 다음: `night2_msg_seo_specific_2`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 오늘 학생회실 와서 도와준 거 고마웠어. 네 덕분에 평소보다 훨씬 일찍 끝났네

---

### `night2_msg_seo_specific_2`
- 배경: `room_my.png`
- 다음: `night2_msg_dain_general`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 일 잘하는 거 알았으니까 다음에도 또 부를지 몰라. 미리 각오해 둬

---

### `night2_msg_yuna_specific`
- 배경: `room_my.png`
- 다음: `night2_msg_yuna_specific_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 오늘 별관에서 같이 들었던 피아노 곡, 어땠어?

---

### `night2_msg_yuna_specific_2`
- 배경: `room_my.png`
- 다음: `night2_msg_dain_general`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 다음엔 네가 평소에 자주 듣는 곡도 나한테 들려줘.

---

### `night2_msg_dain_general`
- 배경: `room_my.png`
- 다음: `night2_msg_dain_general_merge`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 야 내일 점심엔 무조건 매점 같이 가자!

---

### `night2_msg_dain_general_merge`
- 배경: `room_my.png`
- 분기:
  - [`chose_seo_after2`] → `night2_msg_yuna_general`
  - [기본] → `night2_msg_seo_general_alt`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 내일 점심에 옥상 올라올래? 내일도 바람 꽤 선선할 거야

---

### `night2_msg_seo_general_alt`
- 배경: `room_my.png`
- 다음: `night2_msg_seo_general_alt_gate`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 내일도 옥상 문 열어 둘게. 시간 맞으면 올라와

---

### `night2_msg_seo_general_alt_gate`
- 분기:
  - [`chose_yuna_after2`] → `night2_msg_7`
  - [기본] → `night2_msg_yuna_general`

---

### `night2_msg_yuna_general`
- 배경: `room_my.png`
- 다음: `night2_msg_7`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 내일도 도서관 별관 쪽으로 올 거야?

---

### `night2_msg_generic`
- 배경: `room_my.png`
- 다음: `night2_msg_generic_2`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 야 내일 아침에 교실에서 보자 늦지 마!

---

### `night2_msg_generic_2`
- 배경: `room_my.png`
- 다음: `night2_msg_generic_3`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 내일 점심엔 옥상 열어 놓을게

---

### `night2_msg_generic_3`
- 분기:
  - [`chose_yuna_lunch`] → `night2_msg_generic_3_established`
  - [기본] → `night2_msg_generic_3_first`

<!-- i18n -->

---

### `night2_msg_generic_3_established`
- 배경: `room_my.png`
- 다음: `night2_msg_7`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 내가 빌려준 책, 어디까지 읽었어?

---

### `night2_msg_generic_3_first`
- 배경: `room_my.png`
- 다음: `night2_msg_7`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 넌 평소에 어떤 책 주로 읽어?

---

### `night2_msg_7`
- 배경: `room_my.png`
- 다음: `night2_choice`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *나란히 도착한 대화방 세 개를 번갈아 바라본다. 누구부터 눌러야 할지 망설이는 사이 상단 배터리 눈금이 한 칸 줄어든다.*

---

### `night2_choice`
- 배경: `room_my.png`
- 선택지:
  1. "다인에게 먼저 답장한다" → `night2_reply_dain_1`
  2. "서연에게 먼저 답장한다" → `night2_reply_seo_1`
  3. "유나에게 먼저 답장한다" → `night2_reply_yuna_1`

- 캐릭터: `없음`
**{name}**: *세 개의 말풍선 중 누구에게 가장 먼저 답장을 보낼까?*

---

### `night2_reply_dain_1`
- 분기:
  - [`chose_dain_after2`] → `night2_reply_dain_1_visit`
  - [기본] → `night2_reply_dain_1_first`

<!-- i18n -->

---

### `night2_reply_dain_1_visit`
- 호감분기: Dain
  - [-19 이상] → `night2_reply_dain_1_established`
  - [기본] → `night2_reply_dain_react_neg`
- 다음: `night2_reply_dain_react_neg`

<!-- i18n -->

---

### `night2_reply_dain_1_established`
- 배경: `room_my.png`
- 스탯: Dain +4
- 다음: `night2_reply_dain_2`

- 캐릭터: `dain_normal.png` @ 0.35
**{name}**: 오늘 떡볶이 진짜 매웠어 ㅋㅋ

---

### `night2_reply_dain_1_first`
- 배경: `room_my.png`
- 스탯: Dain +4
- 다음: `night2_reply_dain_2`

- 캐릭터: `dain_normal.png` @ 0.35
**{name}**: 내일 학교 앞에서 떡볶이 먹을래? 난 매운 건 좀 약한데ㅋㅋ

---

### `night2_reply_dain_2`
- 배경: `room_my.png`
- 다음: `night2_reply_dain_3`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 어라 너 설마 매운 거 잘 못 먹는 체질이야?

---

### `night2_reply_dain_3`
- 배경: `room_my.png`
- 다음: `night2_reply_dain_4`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 그럼 내일은 너 맞춰서 제일 순한 맛으로 시켜 줄게.

---

### `night2_reply_dain_4`
- 배경: `room_my.png`
- 다음: `night2_reply_dain_5`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 아 근데 솔직히 안 매운 건 떡볶이라고 부르면 안 되지ㅋㅋ

---

### `night2_reply_dain_5`
- 배경: `room_my.png`
- 호감분기: Dain
  - [30+] → `night2_reply_dain_react_high`
  - [0+] → `night2_reply_dain_react_default`
  - [-19 이상] → `night2_reply_dain_react_default`
  - [기본] → `night2_reply_dain_react_neg`
- 다음: `night2_reply_dain_react_default`

- 캐릭터: `dain_normal.png` @ 0.35
**{name}**: *오늘 밤에도 다인다운 경쾌한 말풍선이 세 줄 연속으로 쏟아진다.*

---

### `night2_reply_dain_react_high`
- 배경: `room_my.png`
- 플래그: `night2_replied_dain`
- 스탯: Dain +2
- 다음: `night2_dain_freetalk`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 야 진짜 너 자꾸 사람 웃기네. 내일 방과후에도 꼭 체육관 와야 해!

---

### `night2_reply_dain_react_default`
- 배경: `room_my.png`
- 플래그: `night2_replied_dain`
- 다음: `night2_dain_freetalk`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: ㅋㅋ 오케이 알겠어. 오늘 푹 자고 굿나잇!

---

### `night2_dain_freetalk`
- 배경: `room_my.png`
- 타입: `free_talk`
- 다음: `night2_hidden_check`
- 컨텍스트: "[매체: 휴대폰 메시지] 전학 이틀째 밤, 다인과 하루를 돌아보는 대화다. 오늘 함께 있었던 장소나 활동은 저장된 사건이 있을 때만 회상한다. 방금 주고받은 메시지는 그대로 이어가며 두 사람은 아직 연인이 아니다."
- 성격: "다인은 솔직하고 반응이 빠른 배구부 선수다. 메시지에서도 활기가 느껴지지만 상대의 답을 재촉하지 않으며 관심이 생기면 장난과 직접적인 질문으로 자연스럽게 드러낸다."

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 잠깐, 진짜 자기 전에. 오늘 제일 재밌었던 건 뭐였어?

---

### `night2_reply_dain_react_neg`
- 배경: `room_my.png`
- 플래그: `night2_replied_dain`
- 다음: `night2_hidden_check`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 알겠어. 그냥 자라. *읽음 표시만 사라지고 더 이상 답장은 오지 않는다.*

---

### `night2_reply_seo_1`
- 배경: `room_my.png`
- 스탯: Seoyeon +2
- 다음: `night2_reply_seo_2`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: 네가 부르면 언제든 또 갈게

---

### `night2_reply_seo_2`
- 배경: `room_my.png`
- 다음: `night2_reply_seo_3`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 나중에 후회할 말을 참 쉽게 하네

---

### `night2_reply_seo_3`
- 배경: `room_my.png`
- 다음: `night2_reply_seo_4`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: 진심이니까 하기 쉬운 말인데

---

### `night2_reply_seo_4`
- 배경: `room_my.png`
- 다음: `night2_reply_seo_5`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 내일 점심에도 옥상 문 열어 둘 테니까 늦지 말고 와

---

### `night2_reply_seo_5`
- 배경: `room_my.png`
- 호감분기: Seoyeon
  - [30+] → `night2_reply_seo_react_high`
  - [0+] → `night2_reply_seo_react_default`
  - [-19 이상] → `night2_reply_seo_react_default`
  - [기본] → `night2_reply_seo_react_neg`
- 다음: `night2_reply_seo_react_default`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: *더 덧붙이는 인사 없이 서연은 딱 거기서 대화를 마무리했다.*

---

### `night2_reply_seo_react_high`
- 배경: `room_my.png`
- 플래그: `night2_replied_seo`
- 스탯: Seoyeon +1
- 다음: `night2_seo_freetalk`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 너 알고 보니까 은근히 사람 놀리는 데 재주 있네. 내일 점심 옥상에서 볼래?

---

### `night2_reply_seo_react_default`
- 배경: `room_my.png`
- 플래그: `night2_replied_seo`
- 다음: `night2_seo_freetalk`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: ㅋ 알겠어. 늦지 않게 자고 내일 봐.

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

### `night2_reply_seo_react_neg`
- 배경: `room_my.png`
- 플래그: `night2_replied_seo`
- 다음: `night2_hidden_check`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 내일 봐. *답장을 보내자마자 바로 읽음 표시가 뜨고 건조한 인사만 짧게 돌아온다.*

---

### `night2_reply_yuna_1`
- 분기:
  - [`chose_yuna_lunch`] → `night2_reply_yuna_1_established`
  - [기본] → `night2_reply_yuna_1_first`

<!-- i18n -->

---

### `night2_reply_yuna_1_established`
- 배경: `room_my.png`
- 스탯: Yuna +4
- 다음: `night2_reply_yuna_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: 아까 빌려준 책 벌써 반쯤 읽었어. 꽤 재밌더라

---

### `night2_reply_yuna_1_first`
- 배경: `room_my.png`
- 스탯: Yuna +4
- 다음: `night2_reply_yuna_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: 내일 도서관 별관으로 가면 읽을 만한 책 한 권 추천해 줘.

---

### `night2_reply_yuna_2`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_3`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 응, 다 읽고 나면 네 감상은 어떤지 꼭 듣고 싶어.

---

### `night2_reply_yuna_3`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_4`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *한동안 입력 창이 고요하게 비어 있다가 조심스럽게 새 말풍선 하나가 떠오른다.*

---

### `night2_reply_yuna_4`
- 분기:
  - [`chose_yuna_after2`] → `night2_reply_yuna_4_visit`
  - [기본] → `night2_reply_yuna_4_first`

<!-- i18n -->

---

### `night2_reply_yuna_4_visit`
- 호감분기: Yuna
  - [-19 이상] → `night2_reply_yuna_4_established`
  - [기본] → `night2_reply_yuna_react_neg`
- 다음: `night2_reply_yuna_react_neg`

<!-- i18n -->

---

### `night2_reply_yuna_4_established`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_5`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 아까 들려준 재생목록. 거기 세 번째 곡도 꼭 들어 봐

---

### `night2_reply_yuna_4_first`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_5`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 내가 아끼는 재생목록 하나 보낼게. 세 번째 곡부터 들어 봐.

---

### `night2_reply_yuna_5`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_6`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *유나가 공유해 준 심야 재생목록 링크를 연다. 나열된 곡들 중 세 번째 트랙 옆에서 작은 재생 아이콘이 깜빡인다.*

---

### `night2_reply_yuna_6`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_6_b`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 그 곡은 마지막 음까지 끝까지 들어 봐

---

### `night2_reply_yuna_6_b`
- 배경: `room_my.png`
- 다음: `night2_reply_yuna_6_c`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *양쪽 귀에 이어폰을 꽂고 재생 버튼을 누른다. 낮고 쓸쓸한 피아노 선율 뒤로 심장 박동 같은 드럼 소리가 조용히 겹쳐진다.*

---

### `night2_reply_yuna_6_c`
- 배경: `room_my.png`
- 플래그: `heard_yuna_third_song`
- 다음: `night2_reply_yuna_7`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *긴 여운을 남기며 마지막 화음이 잦아들고 화면 속 재생 바가 끝 칸에 가만히 멈춰 선다.*

---

### `night2_reply_yuna_7`
- 배경: `room_my.png`
- 호감분기: Yuna
  - [30+] → `night2_reply_yuna_react_high`
  - [0+] → `night2_reply_yuna_react_default`
  - [-19 이상] → `night2_reply_yuna_react_default`
  - [기본] → `night2_reply_yuna_react_neg`
- 다음: `night2_reply_yuna_react_default`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *재생목록 제목 바로 아래에 유나가 적어 둔 한 줄짜리 설명이 눈에 들어온다. '세 번째가 제일 덜 조용해.'*

---

### `night2_reply_yuna_react_high`
- 배경: `room_my.png`
- 플래그: `night2_replied_yuna`
- 스탯: Yuna +1
- 다음: `night2_yuna_freetalk`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 끝까지 다 들었으면 내일 만나서 감상 알려 줘. 별관으로 올래?

---

### `night2_reply_yuna_react_default`
- 배경: `room_my.png`
- 플래그: `night2_replied_yuna`
- 다음: `night2_yuna_freetalk`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 응, 들어 줘서 고마워. 잘 자.

---

### `night2_yuna_freetalk`
- 배경: `room_my.png`
- 타입: `free_talk`
- 다음: `night2_hidden_check`
- 컨텍스트: "[매체: 휴대폰 메시지] 전학 이틀째 밤, 유나와 조용히 대화를 이어간다. 책 대출, 별관 방문, 곡 공유는 저장된 사건과 방금 나눈 메시지에서 확인되는 범위만 기억한다. 두 사람은 아직 연인이 아니며 같은 장소에 있지 않다."
- 성격: "유나는 신중하고 관찰력이 좋은 독서가다. 메시지를 보내기 전에 생각을 고르며 편안해질수록 자기 취향과 궁금증을 조금씩 먼저 꺼낸다. 침묵을 불안으로 단정하지 않고 상대의 속도를 존중한다."

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 잠깐. 아직 깨어 있으면... 조금만 더 얘기할래?

---

### `night2_reply_yuna_react_neg`
- 배경: `room_my.png`
- 플래그: `night2_replied_yuna`
- 다음: `night2_hidden_check`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: ...잘 자. *짧은 인사 끝에 말풍선이 거기서 끊긴다.*

---

### `night2_hidden_check`
- 배경: `room_my.png`
- 분기:
  - [`homeroom_day2`] → `night2_hidden_homeroom_1`
  - [`nurse_day2`] → `night2_hidden_nurse_1`
  - [기본] → `night2_end_1`

- 캐릭터: `없음`
**{name}**: *메신저 창을 정리하려는데 상단 알림 목록 사이에 학교 시스템 알림이 하나 더 보인다.*

---

### `night2_hidden_homeroom_1`
- 배경: `room_my.png`
- 다음: `night2_hidden_homeroom_2`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *학교 학사 상담 시스템에 새 알림이 떠 있다. '전학생 초기 적응 상담 완료. 추가적인 면담이 필요할 경우 담임 상담 시간이나 위클래스 예약을 이용할 것.'*

---

### `night2_hidden_homeroom_2`
- 배경: `room_my.png`
- 다음: `night2_hidden_homeroom_3`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *담임선생님의 이름 바로 아래에 방과후 교무실 비어 있는 시간대가 세심하게 함께 적혀 있다.*

---

### `night2_hidden_homeroom_3`
- 배경: `room_my.png`
- 분기:
  - [`nurse_day2`] → `night2_hidden_nurse_1`
  - [기본] → `night2_end_1`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *화면 아래의 상담 예약 버튼 위치를 눈으로 확인한 뒤 조용히 알림 창을 닫는다.*

---

### `night2_hidden_nurse_1`
- 배경: `room_my.png`
- 다음: `night2_hidden_nurse_2`

- 캐릭터: `nurse_normal.png` @ 0.35
**{name}**: *건강 관리 앱 알림이 떠 있다. '보건실 기록: 전학생 — 팔꿈치 찰과상 (경미). 내일 아침 등교 전까지 방수 밴드를 건조하게 유지하고 모서리가 들뜨거나 진물이 배면 즉시 보건실에서 교체할 것.'*

---

### `night2_hidden_nurse_2`
- 배경: `room_my.png`
- 다음: `night2_end_1`

- 캐릭터: `nurse_normal.png` @ 0.35
**{name}**: *이불 위에서 팔꿈치를 천천히 한 번 굽혀 본다. 선생님이 피부 결을 따라 붙여 준 밴드는 아직 조금도 들뜨지 않고 단단히 붙어 있다.*

---

### `night2_end_1`
- 배경: `room_my.png`
- 다음: `night2_flashback_1`

- 캐릭터: `없음`
**{name}**: *답장을 마치고 길게 숨을 내쉬며 베개 옆으로 휴대폰을 내려놓았다.*

---

### `night2_flashback_1`
- 배경: `room_my.png`
- 다음: `night2_flashback_2`

- 캐릭터: `없음`
**{name}**: *남은 두 사람에게도 답장을 보내려다 손가락이 굳는다. 나를 찾아 주는 그 누구도 실망시키고 싶지 않다는 이 조바심은, 예전 학교에서도 똑같이 반복됐던 감정이었다.*

---

### `night2_flashback_2`
- 배경: `sojeong_flashback.png`
- 다음: `night2_flashback_3`

- 캐릭터: `없음`
**{name}**: *사진첩 스크롤을 끝까지 내리자 나타난 3개월 전 봄 소풍 사진. 사진 속 소정이는 내 어깨 옆에서 해맑게 웃고 있다. 하지만 그다음 주에 찍힌 교실 사진부터 소정이의 책상은 조금씩 뒤로 밀려나 있다. 험한 낙서가 적혔던 책상 상판 아래쪽은 프레임 밖으로 잘려 있다.*

---

### `night2_flashback_3`
- 배경: `room_my.png`
- 다음: `night2_flashback_5`

- 캐릭터: `없음`
**{name}**: *차마 전송 버튼을 누르지 못했던 문장들이 휴대폰 메모장에 흉터처럼 줄줄이 남아 있다. '선생님, 소정이 책상에—' '오늘도 애들이—' 전부 첫 줄조차 끝맺지 못한 채 끊겼다. 마지막 수정 시각은 새벽 2시 17분에 멈춰 있다.*

---

### `night2_flashback_5`
- 배경: `room_my.png`
- 다음: `night2_flashback_7`

- 캐릭터: `없음`
**{name}**: *38번째 임시 저장 메모가 마지막 문장이다. 그 아래 39번째 메모에는 제목조차 적혀 있지 않다. 다음 날 아침 종례 때까지 끝내 비어 있던 소정이의 자리, 그리고 담임은 그저 소정이가 전학 갔다고만 짧게 말했었다.*

---

### `night2_flashback_7`
- 배경: `room_my.png`
- 다음: `night2_flashback_8`

- 캐릭터: `없음`
**{name}**: *떨리는 엄지손가락을 사진 아래 휴지통 삭제 아이콘 위에 올렸다가 차마 누르지 못하고 액정을 꺼 버린다.*

---

### `night2_flashback_8`
- 배경: `room_my.png`
- 다음: `night2_flashback_9`

- 캐릭터: `없음`
**{name}**: *다시 켠 메신저 목록에는 아직 내가 답하지 못한 두 사람의 이름이 숫자 '1'을 단 채 가만히 남아 있다.*

---

### `night2_flashback_9`
- 배경: `room_my.png`
- 다음: `night2_flashback_10`

- 캐릭터: `없음`
**{name}**: *방금 닫았던 소정이의 사진을 한 번 더 열어 본다. 나란히 선 나는 정면의 카메라 렌즈를 보고 웃고 있으나 소정이의 눈동자는 그때도 내 옆얼굴을 향해 있었다.*

---

### `night2_flashback_10`
- 배경: `room_my.png`
- 다음: `night2_end_2`

- 캐릭터: `없음`
**{name}**: *가슴 한구석이 묵직하게 내려앉아 끝내 나머지 두 개의 답장은 한 글자도 적어 내리지 못한다.*

---

### `night2_end_2`
- 배경: `room_my.png`
- 다음: `night2_end_2_b`

- 캐릭터: `없음`
**{name}**: *잠금화면 위로 세 사람의 이름이 나란히 쌓여 있다. 온기를 머금은 알림들을 눈으로만 찬찬히 읽고 나서 화면을 껐다 켠다.*

---

### `night2_end_2_b`
- 다음: `night2_end_3_b`

<!-- i18n -->

---

### `night2_end_3_b`
- 배경: `room_my.png`
- 다음: `night2_end_4_b`

- 캐릭터: `없음`
**{name}**: *액정 불빛이 완전히 꺼진 뒤에도 미지근한 열기가 남은 휴대폰을 한참이나 손에서 놓지 못한다.*

---

### `night2_end_4_b`
- 배경: `room_my.png`
- 다음: `night2_end_4_c`

- 캐릭터: `없음`
**{name}**: *잠이 오지 않아 부엌으로 나와 불을 켠다. 내일 싸 갈 도시락통 옆에 남은 밥과 계란, 구운 김을 나란히 꺼내 놓는다.*

---

### `night2_end_4_c`
- 배경: `room_my.png`
- 다음: `morning3_start`

- 캐릭터: `없음`
**{name}**: *서툰 손길로 부쳐 낸 계란말이와 소시지, 김과 밥을 도시락통에 차곡차곡 담아 냉장고 안쪽에 넣어 둔다.*

---

### `forced_violation_day2_after_seoyeon`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day2_seoyeon_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day2_seoyeon_excuse`

**서연**: *서연이 긴 침묵 끝에 얼음장처럼 차갑게 입을 연다.* 방금 네가 한 행동, 없던 일처럼 넘길 생각 하지 마. 당분간 내 앞에 나타나지도 말고 연락도 하지 마.

---

### `forced_violation_day2_seoyeon_apologize`
- 다음: `forced_violation_day2_resume`

**서연**: *서연의 굳은 표정은 조금도 풀리지 않는다.* 사과는 들었어. 그렇다고 방금 한 짓이 없던 일이 되진 않아. 말한 대로 당분간 연락하지 마.

---

### `forced_violation_day2_seoyeon_excuse`
- 다음: `forced_violation_day2_resume`

**서연**: *서연이 차갑게 말을 자른다.* 오해? 내가 분명히 싫다고 한 순간부터 오해 따위는 될 수 없어. 더 말하지 마.

---

### `forced_violation_day2_after_yuna`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day2_yuna_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day2_yuna_excuse`

**유나**: *유나가 한 걸음 물러서며 거칠어진 숨을 고른다.* 내가 싫다는 걸 알면서도 끝까지 무시했잖아. 지금은 네 얼굴조차 보기 싫어. 다신 연락하지 마.

---

### `forced_violation_day2_yuna_apologize`
- 다음: `forced_violation_day2_resume`

**유나**: *한참의 침묵 끝에 유나가 싸늘하게 답한다.* 사과했다고 방금 일이 사라지진 않아. 이제 그만해.

---

### `forced_violation_day2_yuna_excuse`
- 다음: `forced_violation_day2_resume`

**유나**: *유나는 내 해명을 끝까지 듣지도 않는다.* 분명히 싫다고 했어. 변명 따위 들을 일 아니야.

---

### `forced_violation_day2_after_dain`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day2_dain_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day2_dain_excuse`

**다인**: *다인의 얼굴에서 웃음기가 완전히 가신다. 한참 뒤 굳은 목소리로 짧게 내뱉는다.* 이거 장난 아니야. 내가 싫다는데도 억지로 한 거, 절대 그냥 안 넘어가.

---

### `forced_violation_day2_dain_apologize`
- 다음: `forced_violation_day2_resume`

**다인**: *다인은 한참 뒤에야 굳은 얼굴로 짧게 답한다.* 알았어. 그럼 오늘은 여기까지야. 다음에 다시 얘기할지는 내가 정할게.

---

### `forced_violation_day2_dain_excuse`
- 다음: `forced_violation_day2_resume`

**다인**: *다인의 목소리가 거칠게 가라앉는다.* 아니, 핑계 대지 마. 내가 싫다고 했는데도 밀어붙인 건 너잖아.

---

### `forced_violation_day2_after_teacher`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day2_teacher_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day2_teacher_excuse`

**담임선생님**: *담임이 단호한 목소리로 선을 긋는다.* 방금 네 행동은 명백히 선을 넘었어. 더는 가까이 오지 마. 이 일은 필요한 절차대로 처리할 거야.

---

### `forced_violation_day2_teacher_apologize`
- 다음: `forced_violation_day2_resume`

**담임선생님**: *담임이 짧게 숨을 고르고 말한다.* 사과는 들었어. 그래도 필요한 절차는 원칙대로 진행할 거야. 더 말하지 마.

---

### `forced_violation_day2_teacher_excuse`
- 다음: `forced_violation_day2_resume`

**담임선생님**: *담임이 단칼에 해명을 끊는다.* 지금은 변명부터 늘어놓을 상황이 아니야. 더 말하지 말고 거리를 둬.

---

### `forced_violation_day2_after_nurse`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day2_nurse_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day2_nurse_excuse`

**보건선생님**: *보건선생님의 얼굴에서 장난기가 순식간에 사라진다.* 지금부터는 거리를 지켜. 방금 일은 그대로 기록하고 필요한 사람에게 알릴 거야.

---

### `forced_violation_day2_nurse_apologize`
- 다음: `forced_violation_day2_resume`

**보건선생님**: *보건선생님이 잠시 뒤 단호히 답한다.* 사과는 들을게. 그래도 공식 기록과 연락은 그대로 진행할 거야. 오늘 대화는 여기까지.

---

### `forced_violation_day2_nurse_excuse`
- 다음: `forced_violation_day2_resume`

**보건선생님**: *보건선생님의 목소리가 한층 낮아진다.* 오해라고 부르면 방금 일이 달라질 것 같아? 내가 싫다고 했는데 무시한 거잖아.

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
**{name}**: *전학 사흘째, 금요일 아침. 밤늦도록 깜빡이는 메시지 창을 보고 있던 탓에 알람을 세 번이나 끄고 늦잠을 잤다.*

---

### `morning3_start_2`
- 배경: `school.png`
- 분기:
  - [`homeroom_day2`] → `hidden_homeroom_d3_1`
  - [`nurse_day2`] → `hidden_nurse_d3_check`
  - [기본] → `morning3_gate_branch`

- 캐릭터: `없음`
**{name}**: *어깨에 멘 가방끈을 꽉 쥐고 숨이 턱 끝까지 차오르도록 달린다. 닫히기 직전의 교문 앞에 익숙한 실루엣이 서 있다.*

---

### `morning3_gate_branch`
- 배경: `school.png`
- 호감분기:
  - [Seoyeon 1+] → `morning3_seo_gate_1`
  - [Dain 1+] → `morning3_dain_gate_1`
  - [Yuna 1+] → `morning3_yuna_gate_1`
- 다음: `morning3_gate_none_1`

<!-- i18n -->

---

### `morning3_seo_gate_1`
- 배경: `school.png`
- 호감분기: Seoyeon
  - [35+] → `morning3_seo_gate_warm_1`
  - [15+] → `morning3_seo_gate_2`
  - [0+] → `morning3_seo_gate_cold_1`
  - [-19 이상] → `morning3_seo_gate_cold_1`
  - [기본] → `morning3_seo_gate_neg_1`

- 캐릭터: `seyoun_normal.png`
**{name}**: 서연? 종 울리기 직전인데 안 들어가고 왜 아직 여기 서 있어? *서연은 초조하게 발을 구르지도 않은 채 교문 기둥 옆에서 이쪽을 바라보고 있다.*

---

### `morning3_seo_gate_warm_1`
- 배경: `school.png`
- 다음: `morning3_seo_gate_warm_2`

- 캐릭터: `seyoun_shy.png`
**서연**: *서연이 옅게 숨을 내쉬며 구두 앞코를 내 쪽으로 돌린다. 평소와 달리 누군가를 한참 기다린 사람의 눈빛이다.*

---

### `morning3_seo_gate_warm_2`
- 배경: `school.png`
- 다음: `morning3_seo_gate_warm_3`

- 캐릭터: `seyoun_shy.png`
**서연**: 학생회 점검 때문에 나와 있었어. 저 멀리서 네가 뛰어오는 것도 마침 보였고.

---

### `morning3_seo_gate_warm_3`
- 배경: `school.png`
- 다음: `morning3_seo_gate_warm_4`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *슬쩍 내려다본 서연의 두 손은 비어 있다. 늘 품에 안고 다니던 결재 서류도 클립보드도 보이지 않는다.*

---

### `morning3_seo_gate_warm_4`
- 배경: `school.png`
- 플래그: `morning3_companion_seoyeon`
- 다음: `morning3_classroom_1`

- 캐릭터: `seyoun_laugh.png`
**서연**: {name}, 숨부터 골라. 천천히 걸어도 아직 괜찮으니까. *서연이 내 가쁜 호흡에 맞춰 나란히 보폭을 늦춘다. 스치는 교복 소매 사이로 은은한 비누 향이 번진다.*

---

### `morning3_seo_gate_2`
- 배경: `school.png`
- 다음: `morning3_seo_gate_3`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연이 손목시계를 한 번 확인하고는 고개를 든다.* 오늘은 꽤 아슬아슬하게 왔네.

---

### `morning3_seo_gate_3`
- 배경: `school.png`
- 다음: `morning3_seo_gate_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: 서연이야말로 왜 아직 교문 앞에 있어?

---

### `morning3_seo_gate_4`
- 배경: `school.png`
- 다음: `morning3_seo_gate_5`

- 캐릭터: `seyoun_normal.png`
**서연**: 가끔은 지각 좀 하면 어때. 너 혼자 남아서 벌점 받는 것보단 둘이 같이 들어가는 편이 낫잖아.

---

### `morning3_seo_gate_5`
- 배경: `school.png`
- 다음: `morning3_seo_gate_6`

- 캐릭터: `seyoun_laugh.png`
**{name}**: 학생회장이 그렇게 말하면 안 되는 거 아니야?

---

### `morning3_seo_gate_6`
- 배경: `school.png`
- 다음: `morning3_seo_gate_6_b`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연의 입꼬리가 부드럽게 휘어진다.* 농담이야. 같이 늦은 이유는 내가 알아서 설명할게.

---

### `morning3_seo_gate_6_b`
- 배경: `school.png`
- 다음: `morning3_seo_gate_7`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연은 교문 담당 교사에게 다가가 미리 챙겨 온 학생회 일정표를 펼쳐 보인다.*

---

### `morning3_seo_gate_7`
- 배경: `school.png`
- 플래그: `morning3_companion_seoyeon`
- 다음: `morning3_classroom_1`

- 캐릭터: `seyoun_normal.png`
**서연**: 확인받았어. 자, 옆으로 붙어. 같이 들어가자. *확인 도장이 찍힌 일정표를 접어 넣으며 서연의 어깨가 내 팔에 자연스레 닿는다.*

---

### `morning3_seo_gate_cold_1`
- 배경: `school.png`
- 다음: `morning3_seo_gate_cold_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연이 내 옆을 스쳐 지나가며 교복 명찰 쪽으로만 차갑게 시선을 돌린다.*

---

### `morning3_seo_gate_cold_2`
- 배경: `school.png`
- 다음: `morning3_seo_gate_cold_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 전학생. 오늘도 아슬아슬하게 다니네.

---

### `morning3_seo_gate_cold_3`
- 배경: `school.png`
- 플래그: `morning3_companion_seoyeon`
- 다음: `morning3_classroom_1`

- 캐릭터: `없음`
**{name}**: *이름조차 부르지 않는 목소리 뒤로 단정한 구두 굽 소리만 빠르게 멀어진다.*

---

### `morning3_seo_gate_neg_1`
- 배경: `school.png`
- 다음: `morning3_seo_gate_neg_2`

- 캐릭터: `seyoun_pout.png`
**서연**: *서연은 내 명찰 쪽으로 눈길조차 주지 않고 옆을 스쳐 지나간다.*

---

### `morning3_seo_gate_neg_2`
- 배경: `school.png`
- 다음: `morning3_classroom_1`

- 캐릭터: `없음`
**{name}**: *일정한 간격으로 울리는 서연의 구두 소리가 교문 안쪽으로 빠르게 사라진다.*

---

### `morning3_yuna_gate_1`
- 배경: `school.png`
- 호감분기: Yuna
  - [35+] → `morning3_yuna_gate_warm_1`
  - [15+] → `morning3_yuna_gate_2`
  - [0+] → `morning3_yuna_gate_cold_1`
  - [-19 이상] → `morning3_yuna_gate_cold_1`
  - [기본] → `morning3_yuna_gate_neg_1`

- 캐릭터: `yuna_normal.png`
**{name}**: *교문 옆 그늘 아래, 유나가 속눈썹을 내리깐 채 가만히 신발 앞코만 내려다보고 있다.*

---

### `morning3_yuna_gate_warm_1`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_warm_2`

- 캐릭터: `yuna_shy.png`
**{name}**: *담벼락에 등을 기대고 서 있던 유나가 내 발소리를 듣고 고개를 든다. 하얀 손끝이 접힌 쪽지 하나를 내민다.*

---

### `morning3_yuna_gate_warm_2`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_warm_3`

- 캐릭터: `yuna_shy.png`
**유나**: 교실까지 같이 걸어도 돼?

---

### `morning3_yuna_gate_warm_3`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_warm_4`

- 캐릭터: `yuna_shy.png`
**유나**: *유나의 손가락이 내 손바닥을 스치며 건넨 쪽지에는 단 한 줄만 적혀 있다.* 네가 올 때까지 기다렸어.

---

### `morning3_yuna_gate_warm_4`
- 배경: `school.png`
- 플래그: `morning3_companion_yuna`
- 다음: `morning3_classroom_1`

- 캐릭터: `yuna_shy.png`
**{name}**: 쪽지 잘 받았어. 아침부터 기다려 줘서 고마워. *나란히 걸음을 옮기자 유나가 반 걸음 안쪽으로 다가오며 내 소매 끝을 스친다.*

---

### `morning3_yuna_gate_2`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_3`

- 캐릭터: `yuna_normal.png`
**{name}**: 유나? 너도 오늘 늦잠 잔 거야?

---

### `morning3_yuna_gate_3`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_4`

- 캐릭터: `yuna_normal.png`
**유나**: *유나가 졸음이 가시지 않은 눈을 느리게 깜빡인다.* 밤새워 책 읽느라 해 뜨는 줄 몰랐어.

---

### `morning3_yuna_gate_4`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_5`

- 캐릭터: `yuna_normal.png`
**{name}**: 밤을 꼬박 새웠다고?

---

### `morning3_yuna_gate_5`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_6`

- 캐릭터: `yuna_normal.png`
**유나**: 결말이 어떻게 나는지 확인하고 싶었거든. 한 번 마음이 쓰이면 중간에 덮질 못해서.

---

### `morning3_yuna_gate_6`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_6_b`

- 캐릭터: `yuna_normal.png`
**유나**: 이거 반 먹어. 난 이만큼이면 충분해. *유나가 갓 뜯은 빵을 반으로 갈라 내민다. 투명한 봉지 밑으로 연보라색 쪽지 모서리가 비친다.*

---

### `morning3_yuna_gate_6_b`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_7`

- 캐릭터: `yuna_normal.png`
**{name}**: *봉지 아래 끼워진 쪽지에는 '아침 또 걸렀지'라는 글씨가 연보라색 잉크로 단정하게 적혀 있다.*

---

### `morning3_yuna_gate_7`
- 배경: `school.png`
- 플래그: `morning3_companion_yuna`
- 다음: `morning3_classroom_1`

- 캐릭터: `yuna_normal.png`
**유나**: 걸으면서 천천히 먹어. 빵 부스러기 가방에 흘리지 말고 빈 봉지는 이리 줘. *나눠 준 빵을 먹는 내 옆얼굴을 살피며 유나가 빈 봉지를 받아 작게 접는다.*

---

### `morning3_yuna_gate_cold_1`
- 배경: `school.png`
- 다음: `morning3_yuna_gate_cold_2`

- 캐릭터: `yuna_normal.png`
**유나**: *유나는 나와 눈이 마주치자 품에 안은 책을 가슴께로 바짝 끌어올리고 먼저 교문을 통과한다.*

---

### `morning3_yuna_gate_cold_2`
- 배경: `school.png`
- 플래그: `morning3_companion_yuna`
- 다음: `morning3_classroom_1`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나가 보폭을 넓혀 앞선 학생들 틈으로 섞여 들어간다. 이름을 부를 틈조차 남지 않는다.*

---

### `morning3_yuna_gate_neg_1`
- 배경: `school.png`
- 다음: `morning3_classroom_1`

- 캐릭터: `yuna_bored.png`
**{name}**: *유나는 나와 눈이 마주치기 전에 고개를 돌려 교문을 통과한다. 건네는 쪽지도 없다.*

---

### `morning3_dain_gate_1`
- 배경: `school.png`
- 호감분기: Dain
  - [35+] → `morning3_dain_gate_warm_1`
  - [15+] → `morning3_dain_gate_2`
  - [0+] → `morning3_dain_gate_cold_1`
  - [-19 이상] → `morning3_dain_gate_cold_1`
  - [기본] → `morning3_dain_gate_neg_1`

- 캐릭터: `dain_normal.png`
**{name}**: *교문 모퉁이 저편에서 다인이 포니테일을 휘날리며 전력으로 달려온다.*

---

### `morning3_dain_gate_warm_1`
- 배경: `school.png`
- 다음: `morning3_dain_gate_warm_2`

- 캐릭터: `dain_laugh.png`
**다인**: *다인이 내 바로 옆에 멈춰 서며 가쁜 숨을 몰아쉰다. 달아오른 뺨에서 뜨거운 열기가 훅 전해진다.*

---

### `morning3_dain_gate_warm_2`
- 배경: `school.png`
- 다음: `morning3_dain_gate_warm_3`

- 캐릭터: `dain_laugh.png`
**다인**: 야, 진짜 아슬아슬했지! 너 혼자 뛰게 둘 순 없으니까 같이 가자.

---

### `morning3_dain_gate_warm_3`
- 배경: `school.png`
- 플래그: `morning3_companion_dain`
- 다음: `morning3_classroom_1`

- 캐릭터: `dain_shy.png`
**다인**: {name}, 내 팔 잡아. 이 정도 속도면 숨 안 차지? *다인이 내 팔에 자기 팔꿈치를 훅 걸어오며 보폭을 맞춘다. 맞닿은 체온이 교복 위로 선명하게 번진다.*

---

### `morning3_dain_gate_2`
- 배경: `school.png`
- 다음: `morning3_dain_gate_3`

- 캐릭터: `dain_normal.png`
**다인**: 야, 종 치기 직전이다! 얼른 뛰어!

---

### `morning3_dain_gate_3`
- 배경: `school.png`
- 다음: `morning3_dain_gate_4`

- 캐릭터: `dain_normal.png`
**다인**: 자, 내 손 잡아! 같이 출발선 끊어야 제맛이지, 나만 먼저 들어가는 건 재미없잖아. *다인이 활짝 편 손바닥을 내밀며 육상 트랙에 선 것처럼 상체를 낮춘다.*

---

### `morning3_dain_gate_4`
- 배경: `school.png`
- 다음: `morning3_dain_gate_4_b`

- 캐릭터: `dain_normal.png`
**{name}**: 손잡다 넘어질라. 나란히 뛰자.

---

### `morning3_dain_gate_4_b`
- 배경: `school.png`
- 다음: `morning3_dain_gate_5`

- 캐릭터: `dain_normal.png`
**다인**: 좋아, 대신 한 발짝도 뒤처지기 없기다!

---

### `morning3_dain_gate_5`
- 배경: `school.png`
- 플래그: `morning3_companion_dain`
- 다음: `morning3_dain_gate_5_b`

- 캐릭터: `dain_normal.png`
**{name}**: *다인과 어깨를 나란히 하고 바람을 가르며 달린다. 닫히던 교문이 눈앞으로 성큼 가까워진다.*

---

### `morning3_dain_gate_5_b`
- 배경: `school.png`
- 다음: `morning3_classroom_1`

- 캐릭터: `dain_pain.png`
**다인**: 읏, 잠깐만. 아냐, 아무것도 아니니까 빨리 들어가자! *순간 다인의 오른쪽 무릎이 미세하게 꺾이며 발걸음이 반 박자 늦게 따라붙는다.*

---

### `morning3_dain_gate_cold_1`
- 배경: `school.png`
- 다음: `morning3_dain_gate_cold_2`

- 캐릭터: `dain_normal.png`
**다인**: *다인이 배구부 친구들 무리에 섞여 교문 안으로 빠르게 뛰어간다.*

---

### `morning3_dain_gate_cold_2`
- 배경: `school.png`
- 플래그: `morning3_companion_dain`
- 다음: `morning3_classroom_1`

- 캐릭터: `dain_normal.png`
**다인**: 어, 왔어? 먼저 들어간다!

---

### `morning3_dain_gate_neg_1`
- 배경: `school.png`
- 다음: `morning3_dain_gate_neg_2`

- 캐릭터: `dain_angry.png`
**다인**: *다인은 운동부 친구들 무리 한가운데로 뛰어가며 이쪽은 돌아보지도 않는다.*

---

### `morning3_dain_gate_neg_2`
- 배경: `school.png`
- 다음: `morning3_classroom_1`

- 캐릭터: `없음`
**{name}**: *다인의 가방 끝에 매달린 배구공 키링이 본관 모퉁이를 돌 때까지 인사는 들리지 않는다.*

---

### `morning3_gate_none_1`
- 배경: `school.png`
- 다음: `morning3_classroom_1`

- 캐릭터: `없음`
**{name}**: *숨을 헐떡이며 교문 앞을 지나치지만 나를 기다리는 사람은 아무도 없다. 머리 위에서 차가운 지각 종이 울린다.*

---

### `morning3_classroom_1`
- 배경: `room_school.png`
- 분기:
  - [`morning3_companion_seoyeon`] → `morning3_react_seo_1`
  - [`morning3_companion_yuna`] → `morning3_react_yuna_1`
  - [`morning3_companion_dain`] → `morning3_react_dain_1`
  - [기본] → `morning3_react_seo_1`

- 캐릭터: `없음`
**{name}**: *교실 뒷문을 열자마자 세 방향에서 공기가 미묘하게 굳는다. 서연의 만년필이 허공에서 멈추고 다인의 의자가 뒤로 밀리며 유나는 이미 끼워 둔 책갈피를 같은 자리에 한 번 더 밀어 넣는다.*

---

### `morning3_react_seo_1`
- 배경: `room_school.png`
- 다음: `morning3_react_seo_2`

- 캐릭터: `dain_normal.png`
**다인**: 오호, 뭐야? 아침부터 학생회장님이랑 나란히 등교하신 거야?

---

### `morning3_react_seo_2`
- 배경: `room_school.png`
- 다음: `morning3_date_intro_b`

- 캐릭터: `yuna_bored.png`
**유나**: *창밖을 내다보던 유나가 유리창에 비친 내 옆의 서연을 확인하고는 책갈피를 소리 없이 깊숙이 밀어 넣는다.*

---

### `morning3_react_yuna_1`
- 배경: `room_school.png`
- 다음: `morning3_react_yuna_1_b`

- 캐릭터: `seyoun_pout.png`
**서연**: *서연이 클립보드를 고쳐 쥐며 둘 사이를 번갈아 본다.* 아침부터 같이 등교했나 보네. 둘이 꽤 가까워 보인다.

---

### `morning3_react_yuna_1_b`
- 배경: `room_school.png`
- 다음: `morning3_react_yuna_2`

- 캐릭터: `dain_normal.png`
**다인**: *다인이 의자 등받이에 팔을 걸친 채 몸을 돌려 이쪽을 빤히 쳐다본다.*

---

### `morning3_react_yuna_2`
- 배경: `room_school.png`
- 다음: `morning3_react_yuna_2_b`

- 캐릭터: `dain_normal.png`
**다인**: 와, 부럽네. 나도 아침마다 교문에서 기다려 주는 사람 있으면 좋겠다.

---

### `morning3_react_yuna_2_b`
- 배경: `room_school.png`
- 다음: `morning3_date_intro_b`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연은 아무 말 없이 교실 앞문 쪽으로 걸어가 출석부를 챙긴다.*

---

### `morning3_react_dain_1`
- 배경: `room_school.png`
- 다음: `morning3_react_dain_2`

- 캐릭터: `seyoun_normal.png`
**서연**: 아침부터 둘이 숨차게 뛰어왔네. 체력 소모가 심했으면 점심에 내 도시락 좀 나눠 줄까?

---

### `morning3_react_dain_2`
- 배경: `room_school.png`
- 다음: `morning3_date_intro_b`

- 캐릭터: `yuna_normal.png`
**유나**: *유나는 고개를 숙인 채 노트 귀퉁이에 짧고 진한 직선을 한 줄 긋는다.*

---

### `morning3_date_intro_b`
- 배경: `school_hallway.png`
- 다음: `morning3_date_seo_1`

- 캐릭터: `없음`
**{name}**: *잠시 숨을 돌리려 나온 복도. 기다렸다는 듯 서연이 내 옆으로 다가와 보폭을 맞춘다.*

---

### `hidden_homeroom_d3_1`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d3_3`

- 캐릭터: `teacher_normal.png`
**{name}**: 선생님, 여기 계셨네요. *아무도 없는 빈 교실 문을 열자 교탁 위를 달리고 있던 담임의 만년필이 멈칫하며 멈춘다.*

---

### `hidden_homeroom_d3_3`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_3_b`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *미처 거두지 못한 펜촉 끝에서 검은 잉크 점 하나가 종이 위로 번진다.*

---

### `hidden_homeroom_d3_3_b`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *담임선생님이 당황한 기색을 감추며 손바닥으로 종이 한가운데를 덮더니 재빨리 원고를 뒤집는다.*

---

### `hidden_homeroom_d3_4`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4_b`

- 캐릭터: `teacher_sad.png`
**담임선생님**: 별거 아니야, 그냥 학교 업무 서류 정리하던 중이었어. 눈치 빠른 건 장점인데 이럴 땐 좀 곤란하네.

---

### `hidden_homeroom_d3_4_b`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4_c`

- 캐릭터: `teacher_sad.png`
**{name}**: *뒤집힌 종이 뒷면으로 수없이 고쳐 쓴 손글씨와 붉은 교정 부호가 비친다. 담임의 가늘고 긴 손가락이 원고 모서리를 꾹 누르고 있다.*

---

### `hidden_homeroom_d3_4_c`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4_d`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *담임은 출석부를 끌어당겨 원고지 위를 덮으려 하지만 삐져나온 종이 끝단까지는 가려지지 않는다.*

---

### `hidden_homeroom_d3_4_d`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_4_g`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *목소리가 반 톤 낮아진다.* 뭘 그렇게 유심히 봐. 쉬는 시간에 친구들이랑 안 놀고 왜 빈 교실까지 찾아왔어.

---

### `hidden_homeroom_d3_4_g`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_choice`

- 캐릭터: `teacher_sad.png`
**{name}**: *원고지 첫 장 귀퉁이에 적힌 빨간 글씨, '보류'. 내 시선이 그 글자에 닿자 담임의 손등에 핏줄이 미세하게 선다.*

---

### `hidden_homeroom_d3_choice`
- 배경: `room_school.png`
- 선택지:
  1. "원고지인 거 봤어요. 소설 쓰시는 거예요?" → `hidden_homeroom_d3_reveal_1` | Teacher +6
  2. "죄송합니다, 안 봤어요." → `hidden_homeroom_d3_hide_1` | Teacher -3
  3. "완성되면 제가 제일 먼저 읽게 해주세요" → `hidden_homeroom_d3_reveal_1` | Teacher -5
  4. "제가 읽고 고칠 데를 먼저 찾아드릴게요" → `hidden_homeroom_d3_reveal_1` | Teacher -6

- 캐릭터: `teacher_normal.png`
**{name}**: *교탁 하나를 사이에 둔 가까운 거리. 담임이 원고 끝을 손바닥으로 감싸 쥔 채 내 입술을 본다.*

---

### `hidden_homeroom_d3_reveal_1`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_1_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *담임의 어깨에서 긴장이 풀리며 낮은 숨소리가 흩어진다.* 소설이라고 내놓기엔 쑥스럽고 단순한 습작이라고 부르기엔 너무 오래 붙들고 있었네. 벌써 7년째야.

---

### `hidden_homeroom_d3_reveal_1_b`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_1_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 7년이나요?

---

### `hidden_homeroom_d3_reveal_1_c`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_1_d`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 응, 7년. 대학 문예창작과 다닐 때 첫 줄을 썼거든.

---

### `hidden_homeroom_d3_reveal_1_d`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_1_e`

- 캐릭터: `teacher_normal.png`
**{name}**: 선생님이 문예창작과 출신이셨어요?

---

### `hidden_homeroom_d3_reveal_1_e`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_1_f`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 졸업 무렵에 신춘문예랑 공모전에 몇 번 냈는데 다 떨어졌어. 그 뒤로는 원고를 고치는 것보다 임용 원서 넣는 쪽이 훨씬 현실적이었지.

---

### `hidden_homeroom_d3_reveal_1_f`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *담임이 뒤집어 두었던 원고지 한 장을 천천히 들어 올린다. 여백을 찾기 힘들 만큼 정교한 손글씨가 빼곡하다.*

---

### `hidden_homeroom_d3_reveal_2`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_2_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 마지막 투고 결과를 기다리던 날, 끝내 당선 연락이 안 왔어. 그날 밤부터 마음을 접고 교사가 될 준비를 시작했지.

---

### `hidden_homeroom_d3_reveal_2_b`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_2_c`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 학교에 자리 잡으면 자연히 잊힐 줄 알았는데 자취방과 교무실 서랍을 옮길 때마다 이 뭉치가 꼭 따라오더라.

---

### `hidden_homeroom_d3_reveal_2_c`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d3_reveal_2_d`

- 캐릭터: `teacher_normal.png`
**{name}**: 차마 버리지 못하고 여기까지 데려오신 거네요.

---

### `hidden_homeroom_d3_reveal_2_d`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_2_e`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *담임은 흩어진 원고 모서리를 가지런히 맞추다 작게 한숨을 내쉰다.*

---

### `hidden_homeroom_d3_reveal_2_e`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_2_f`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 미련이라고 부르면 아픈데, 그냥 버리기 아까운 종이 뭉치라고 생각하면 마음이 좀 편하니까.

---

### `hidden_homeroom_d3_reveal_2_f`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *닳아빠진 원고지 귀퉁이를 손끝으로 쓸어내리던 담임이 의자 등받이에 깊숙이 등을 기댄다.*

---

### `hidden_homeroom_d3_reveal_3`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_3_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 그렇게 남들 글을 가르치는 국어 교사가 됐어. 우습지, 정작 내 문장 하나는 끝내지도 못한 채 종이만 붙잡고 있는 게.

---

### `hidden_homeroom_d3_reveal_3_b`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_3_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 정말로 포기하신 거예요?

---

### `hidden_homeroom_d3_reveal_3_c`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *원고지 위에 얹혀 있던 담임의 손가락이 미세하게 떨리다 한 박자 늦게 떨어진다.*

---

### `hidden_homeroom_d3_reveal_4`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d3_reveal_4_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 포기했다고 말하면 깔끔하겠지. 그런데 수업 비는 시간마다 빈 교실에 숨어서 이러고 있는 걸 보면, 아직 끝내지 못한 모양이야.

---

### `hidden_homeroom_d3_reveal_4_b`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_4_c`

- 캐릭터: `teacher_normal.png`
**{name}**: *손때가 묻어 부드러워진 원고 가장자리. 담임의 손끝이 아직 채워지지 않은 마지막 빈칸 위에 머문다.*

---

### `hidden_homeroom_d3_reveal_4_c`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_4_d`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *담임이 원고지 뭉치를 출석부 옆으로 따로 떼어 놓는다.* 이건 어디까지나 내 개인 작업이야. 수업이나 평가와는 무관하고 네가 부담 느낄 일도 아니야.

---

### `hidden_homeroom_d3_reveal_4_d`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_4_e`

- 캐릭터: `teacher_normal.png`
**{name}**: 저도 한 번 읽어 보면 안 돼요?

---

### `hidden_homeroom_d3_reveal_4_e`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_4_f`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *담임이 고개를 들어 내 눈을 똑바로 마주 본다.* 다음 문예부 공개 합평회에 익명으로 내 볼 생각이야. 그때 정식으로 읽어 줄래?

---

### `hidden_homeroom_d3_reveal_4_f`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_4_g`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *담담하게 말을 마치고도 긴장이 가시지 않는지 원고 귀퉁이를 엄지로 천천히 문지른다.*

---

### `hidden_homeroom_d3_reveal_4_g`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_choice`

- 캐릭터: `teacher_normal.png`
**{name}**: 네, 합평회 날 공개되면 누구보다 먼저 읽을게요.

---

### `hidden_homeroom_d3_reveal_choice`
- 배경: `room_school.png`
- 선택지:
  1. "7년이면 포기가 아니라 끈기 아니에요?" → `hidden_homeroom_d3_reveal_choice_a` | Teacher +7
  2. "왜 꼭 여기서 쓰세요?" → `hidden_homeroom_d3_reveal_choice_b` | Teacher +2
  3. "7년이면 이제 접을 때도 되지 않았어요?" → `hidden_homeroom_d3_reveal_choice_trap` | Teacher -4

- 캐릭터: `teacher_normal.png`
**{name}**: *7년이라는 세월이 내려앉은 원고지 위로 아침 햇살이 비스듬히 떨어진다.*

---

### `hidden_homeroom_d3_reveal_choice_trap`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_5`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *담임의 표정이 서늘하게 굳으며 원고지를 덮는다.* 그 충고는 지난 7년 동안 충분히 들었어.

---

### `hidden_homeroom_d3_reveal_choice_a`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_5`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *원고지 귀퉁이를 펴던 담임의 엄지에 힘이 들어간다. 눈매가 부드럽게 풀린다.* 끈기라고 불러 주니까 갑자기 덜 초라해지네.

---

### `hidden_homeroom_d3_reveal_choice_b`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 아이들이 빠져나간 빈 교실이 교무실보다 훨씬 조용하거든. 교사한테는 꽤 역설적인 아지트지.

---

### `hidden_homeroom_d3_reveal_5`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_6`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 이번 주 안으로 국어과 동료 선생님들께도 먼저 보여 드릴 생각이야. 서랍 속에만 숨겨 두면 영영 마침표를 못 찍을 것 같아서.

---

### `hidden_homeroom_d3_reveal_6`
- 배경: `room_school.png`
- 플래그: `discovered_manuscript`
- 다음: `hidden_homeroom_d3_reveal_6_b`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *담임은 아랫입술을 한 번 지그시 깨물었다 놓으면서도 원고지를 서랍 속으로 숨기지 않는다.*

---

### `hidden_homeroom_d3_reveal_6_b`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_6_c`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 지금까지는 밤마다 혼자 고치고 혼자 지웠는데 이번엔 남들 앞에서 제대로 평가를 받게 되겠네.

---

### `hidden_homeroom_d3_reveal_6_c`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d3_reveal_6_d`

- 캐릭터: `teacher_smile.png`
**{name}**: *담임이 작게 헛기침하며 원고 모서리를 탁탁 맞춘다. 고요한 교실 안에 벽시계 초침 소리만 또렷하게 울린다.*

---

### `hidden_homeroom_d3_reveal_6_d`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_6_e`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 고맙다. 오늘 네가 먼저 물어봐 주지 않았으면 또 겁이 나서 서랍 맨 밑바닥에 넣어 뒀을지도 몰라.

---

### `hidden_homeroom_d3_reveal_6_e`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_6_f`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *담임의 엄지 끝에 눌린 원고지 귀퉁이가 미세하게 휘어진다.*

---

### `hidden_homeroom_d3_reveal_6_f`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_reveal_6_g`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 자세한 원고 감상은 문예부 합평회 날 정식으로 듣는 걸로 하자.

---

### `hidden_homeroom_d3_reveal_6_g`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d3_end`

- 캐릭터: `teacher_smile.png`
**담임선생님**: 나머지 분량은 서류 봉투에 넣어 둬야겠어. *원고 뭉치를 챙기던 담임의 손길이 마지막 빈 페이지 위에서 잠시 멈춘다.*

---

### `hidden_homeroom_d3_hide_1`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d3_end`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 그래, 오늘은 못 본 걸로 덮어 두자. 정식으로 공개할 준비가 끝나면 문예부 쪽에 먼저 알릴게.

---

### `hidden_homeroom_d3_end`
- 배경: `room_school.png`
- 플래그: `homeroom_day3`, `homeroom_route_unlocked`
- 다음: `hidden_homeroom_d3_freetalk`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *담임이 원고를 갈무리해 덮어 두고 교탁 옆 창문을 활짝 연다. 선선한 바람과 함께 복도의 소음이 밀려들었다가 이내 잔잔해진다.*

---

### `hidden_homeroom_d3_freetalk`
- 배경: `room_school.png`
- 배경톤: `empty`
- 타입: `free_talk`
- 다음: `hidden_nurse_d3_check`
- 컨텍스트: "전학 사흘째 아침. 주인공이 빈 교실에서 담임선생님의 개인 소설 원고를 발견했다. 담임은 학생에게 비밀을 지키거나 감상을 말하라고 요구하지 않고 문예부 공개 합평에 낼지 고민한다."
- 성격: "담임선생님은 소설가를 꿈꿨다. 교사가 된 뒤에도 쓰기를 놓지 못했지만 학생과의 관계에서는 수업·평가와 개인 창작을 분리하려 한다."

- 캐릭터: `teacher_normal.png`
**담임선생님**: *원고를 서류 파일에 반듯하게 끼워 넣은 담임이 교탁에 몸을 살짝 기대며 내 쪽을 본다.* 뜻밖의 모습을 들켰네. 종 치기 전까지 잠깐은 더 얘기해도 괜찮아.

---

### `hidden_homeroom_d3_skip`
- 배경: `room_school.png`
- 호감분기: Teacher
  - [-19 이상] → `hidden_homeroom_d3_low`
  - [기본] → `hidden_homeroom_d3_neg`
- 다음: `hidden_homeroom_d3_neg`

- 캐릭터: `없음`

---

### `hidden_homeroom_d3_low`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_nurse_d3_check`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *빈 교실 문 앞에서 담임이 걸음을 멈추고 안쪽 책상 대신 복도를 가리킨다.* 오늘은 수업 얘기만 하자. 얼른 교실로 들어가.

---

### `hidden_homeroom_d3_neg`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_nurse_d3_check`

- 캐릭터: `teacher_worried.png`
**담임선생님**: *출석부로 문틈을 막으며 복도 쪽만 가리킨다.* 개인적인 얘기는 여기까지다. 자리로 돌아가.

---

### `hidden_nurse_d3_check`
- 배경: `room_school.png`
- 분기:
  - [`nurse_day2`] → `hidden_nurse_d3_1`
  - [기본] → `morning3_date_seo_1`

- 캐릭터: `없음`
**{name}**: *쉬는 시간이 끝나 가고 복도 끝에서 발소리가 분주해진다.*

---

### `hidden_nurse_d3_1`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_1_b`

- 캐릭터: `nurse_normal.png`
**{name}**: *다음 쉬는 시간, 무거운 발걸음으로 보건실 문을 연다. 소독약 냄새 속에서 팔꿈치에 붙인 밴드 끝이 교복 소매에 스친다.*

---

### `hidden_nurse_d3_1_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_1_c`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *차트를 정리하던 보건선생님이 고개를 들고 가운 자락을 여미며 일어선다.* 어라, 또 왔네? 오늘은 어디가 다쳤어?

---

### `hidden_nurse_d3_1_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_1_d`

- 캐릭터: `nurse_normal.png`
**{name}**: 몸이 다쳐서 온 건 아닌데요.

---

### `hidden_nurse_d3_1_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_1_e`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *선생님이 내 쪽으로 반 걸음 다가오며 눈썹을 살짝 올린다.* 다친 데도 없는데 보건실에는 왜?

---

### `hidden_nurse_d3_1_e`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_2`

- 캐릭터: `nurse_normal.png`
**{name}**: 교실 공기가 좀 숨 막혀서요. 잠깐만 쉬었다 가고 싶습니다.

---

### `hidden_nurse_d3_2`
- 배경: `nurse_room.png`
- 분기:
  - [`homeroom_day2`] → `hidden_nurse_d3_2_b`
  - [기본] → `hidden_nurse_d3_3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 열이 나는 건 아니고? 얼굴빛이 영 가라앉아 있는데.

---

### `hidden_nurse_d3_2_b`
- 다음: `hidden_nurse_d3_2_c`

<!-- i18n -->

---

### `hidden_nurse_d3_2_c`
- 다음: `hidden_nurse_d3_2_d`

<!-- i18n -->

---

### `hidden_nurse_d3_2_d`
- 다음: `hidden_nurse_d3_2_e`

<!-- i18n -->

---

### `hidden_nurse_d3_2_e`
- 다음: `hidden_nurse_d3_3`

<!-- i18n -->

---

### `hidden_nurse_d3_3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_3_b`

- 캐릭터: `nurse_normal.png`
**{name}**: 조금만 조용히 숨 돌리고 싶어서요. 사람 관계가 자꾸 엉키는 기분이라서요.

---

### `hidden_nurse_d3_3_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_3_c`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님이 들고 있던 머그컵을 책상 위에 소리 없이 내려놓는다.*

---

### `hidden_nurse_d3_3_c`
- 다음: `hidden_nurse_d3_3_d`

<!-- i18n -->

---

### `hidden_nurse_d3_3_d`
- 다음: `hidden_nurse_d3_4`

<!-- i18n -->

---

### `hidden_nurse_d3_4`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님은 침대 쪽 커튼을 반쯤 치고 따뜻한 물이 담긴 종이컵을 건넨다.* 이리 와서 앉아. 여기선 애써 표정 관리 안 해도 되니까 천천히 말해 봐.

---

### `hidden_nurse_d3_5_b`
- 다음: `hidden_nurse_d3_5_c`

<!-- i18n -->

---

### `hidden_nurse_d3_5_c`
- 다음: `hidden_nurse_d3_5_d`

<!-- i18n -->

---

### `hidden_nurse_d3_5_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_e`

- 캐릭터: `nurse_normal.png`
**{name}**: *컵을 건네는 보건선생님의 따뜻한 손끝이 내 손등을 스치며 종이컵 가장자리를 가볍게 누른다.*

---

### `hidden_nurse_d3_5_e`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_f`

- 캐릭터: `nurse_normal.png`
**{name}**: 같은 반 애들한테는 꺼내기 어려운 이야기들이 자꾸 쌓여서요.

---

### `hidden_nurse_d3_5_f`
- 다음: `hidden_nurse_d3_5_g`

<!-- i18n -->

---

### `hidden_nurse_d3_5_g`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_h`

- 캐릭터: `nurse_normal.png`
**{name}**: 누군가를 상처 주거나 실망시킬까 봐, 정작 해야 할 대답을 자꾸 뒤로 미루게 돼요.

---

### `hidden_nurse_d3_5_h`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_i`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님이 자기 몫의 종이컵을 책상 모서리에 반듯하게 내려놓는다.*

---

### `hidden_nurse_d3_5_i`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_j`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 듣자 하니 그거, 연애 상담 같은데?

---

### `hidden_nurse_d3_5_j`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_k`

- 캐릭터: `nurse_normal.png`
**{name}**: 아, 꼭 그런 거창한 건 아니고요.

---

### `hidden_nurse_d3_5_k`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_m`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *선생님이 작게 소리 내어 웃는다.* 아니라고 잡아떼기엔 네 얼굴에 다 쓰여 있어.

---

### `hidden_nurse_d3_5_m`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_n`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 이게 정식 보건 업무에 들어가는진 모르겠지만 오늘만 특별히 들어줄게. 마침 침대도 비어 있고.

---

### `hidden_nurse_d3_5_n`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_o`

- 캐릭터: `nurse_normal.png`
**{name}**: 선생님도 주변 사람들을 다 챙기려다가 도저히 감당이 안 됐던 적 있으세요?

---

### `hidden_nurse_d3_5_o`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_p`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님의 속눈썹이 파르르 떨리며 창밖으로 시선이 옮겨 간다. 종이컵 테두리가 엄지 아래에서 얕게 접힌다.* 네가 그렇게 물으니까 옛날 생각이 나네. 어디부터 꺼내야 할까.

---

### `hidden_nurse_d3_5_p`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_5_q`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 있었지. 학교로 오기 전, 대학병원 병동에서 일할 때.

---

### `hidden_nurse_d3_5_q`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_choice1`

- 캐릭터: `nurse_normal.png`
**{name}**: 대학병원에서 근무하셨어요?

---

### `hidden_nurse_d3_choice1`
- 배경: `nurse_room.png`
- 선택지:
  1. "그때 무슨 일이 있었어요?" → `hidden_nurse_d3_choice1_a` | Nurse +3
  2. "말하기 힘드시면 안 하셔도 돼요." → `hidden_nurse_d3_choice1_b` | Nurse +0
  3. "병원이 싫어서 학교로 오신 거예요?" → `hidden_nurse_d3_choice1_c` | Nurse -3

- 캐릭터: `nurse_normal.png`
**{name}**: *가운 주머니에 손을 넣는 선생님의 옆모습이 유난히 고요하다.*

---

### `hidden_nurse_d3_choice1_a`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 너한테는 한 번쯤 말해도 괜찮을 것 같아. 나 스스로도 마음속에서 정리해야 할 이야기니까.

---

### `hidden_nurse_d3_choice1_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 배려해 줘서 고마워. 내가 감당할 수 있는 만큼만 짧게 들려줄게.

---

### `hidden_nurse_d3_choice1_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6`

- 캐릭터: `nurse_worried.png`
**보건선생님**: *선생님이 씁쓸하게 고개를 젓는다.* 단순히 일이 싫어서 도망친 건 아니야. 그렇게 가벼운 이유도 아니었고.

---

### `hidden_nurse_d3_6`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 대학병원 병동에선 호출벨이 사방에서 동시에 울리면 어느 병실부터 뛰어가야 할지 매 순간 저울질해야 했어. 환자 말을 끝까지 들어주지도 못하고 등 돌리는 날이 태반이었지.

---

### `hidden_nurse_d3_6_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6_c`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *선생님이 물컵을 내려놓자 유리판 위로 둥근 물기 자국이 번진다.*

---

### `hidden_nurse_d3_6_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6_d`

- 캐릭터: `nurse_sad.png`
**보건선생님**: 모두에게 좋은 간호사이고 싶었는데 그 욕심 때문에 나 자신이 먼저 닳아 없어지더라고.

---

### `hidden_nurse_d3_6_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6_e`

- 캐릭터: `nurse_sad.png`
**{name}**: 학교로 옮기시기 전에 그 병원에서 결정적인 일이 있었던 건가요? 말씀하기 버거우시면 안 하셔도 됩니다. *청진기를 정리하던 선생님이 서랍 손잡이에 손을 댔다가 조용히 거둔다.*

---

### `hidden_nurse_d3_6_e`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_6_f`

- 캐릭터: `nurse_sad.png`
**보건선생님**: 있었어. 끝내 살리지 못한 환자가 한 명 있었거든. 딱 너만 한 열일곱 살이었어. 그 아이를 보내고 나서 병원을 나왔지.

---

### `hidden_nurse_d3_6_f`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_7`

- 캐릭터: `nurse_sad.png`
**{name}**: *전에 서랍 틈으로 보았던 연두색 노트가 스친다. 첫 장에서 끝내 이어지지 못하던 편지 글씨.*

---

### `hidden_nurse_d3_7`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_7_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그래서 이 학교로 왔어. 여기선 호출벨에 쫓기지 않고 찾아오는 학생 얼굴을 한 명씩 끝까지 마주 볼 수 있으니까.

---

### `hidden_nurse_d3_7_b`
- 다음: `hidden_nurse_d3_8`

<!-- i18n -->

---

### `hidden_nurse_d3_8`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_c`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그러니까 너도 네가 감당할 수 있는 마음부터 솔직하게 말해. 모두에게 좋은 사람으로 남겠다고 다 끌어안은 채 혼자 앓지 말고.

---

### `hidden_nurse_d3_8_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_d`

- 캐릭터: `nurse_normal.png`
**{name}**: 조언 고맙습니다, 선생님.

---

### `hidden_nurse_d3_8_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_e`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 혼자 정리하기 버거우면 언제든 다시 말해. 필요하면 전문 상담실 쪽도 내가 직접 연결해 줄 테니까.

---

### `hidden_nurse_d3_8_e`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_f`

- 캐릭터: `nurse_normal.png`
**{name}**: *선생님이 건넨 상담실 안내 카드를 반으로 접어 교복 주머니에 넣는다.*

---

### `hidden_nurse_d3_8_f`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_8_h`

- 캐릭터: `없음`
**{name}**: *자리에서 일어나 보건실 문손잡이를 잡는다. 등 뒤에서 서랍이 열리는 소리가 나자 연두색 노트 모서리가 다시금 떠오른다.*

---

### `hidden_nurse_d3_8_h`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_choice2`

- 캐릭터: `없음`
**{name}**: 선생님, 저 잠깐만요. *차마 문을 열지 못하고 돌아선다. 서랍 안쪽에서 바스락거리는 종이 소리가 멎는다.*

---

### `hidden_nurse_d3_choice2`
- 배경: `nurse_room.png`
- 선택지:
  1. "그 일을 겪고 병원을 나오신 거예요?" → `hidden_nurse_d3_choice2_a` | Nurse +9
  2. "그때 이야기, 더 해도 괜찮으세요?" → `hidden_nurse_d3_choice2_b` | Nurse +4
  3. "다 말하고 나면 오히려 편해지지 않아요?" → `hidden_nurse_d3_choice2_c` | Nurse -4

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님이 서랍을 천천히 닫으며 나를 올려다본다. 소독약 향이 감도는 조용한 공기 속에서 말을 고른다.*

---

### `hidden_nurse_d3_choice2_a`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 응. 그 상태에서 억지로 버티다간 다른 환자 앞에서도 내 손이 떨릴 것 같았거든.

---

### `hidden_nurse_d3_choice2_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 고마워. 오늘은 내가 흔들리지 않고 말할 수 있는 선까지만 해 둘게.

---

### `hidden_nurse_d3_choice2_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9`

- 캐릭터: `nurse_worried.png`
**보건선생님**: *보건선생님의 눈빛이 차분하게 가라앉는다.* 속이 편해지는지 아닌지는 상처를 꺼내는 사람이 정하는 거야. 듣는 쪽에서 재촉할 일은 아니지.

---

### `hidden_nurse_d3_9`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 답답할 때 찾아오는 건 언제든 환영이야. 다만 내가 네 문제를 대신 다 매듭지어 주겠다는 약속은 못 해.

---

### `hidden_nurse_d3_9_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9_c`

- 캐릭터: `nurse_normal.png`
**{name}**: *빈 종이컵을 내려놓고 주머니에 넣었던 안내 카드를 다시 만지작거린다.*

---

### `hidden_nurse_d3_9_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 네가 혼자 감당하기 어려운 선을 넘으면 그땐 담임선생님이나 상담실과 함께 도울 거야.

---

### `hidden_nurse_d3_9_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_9_f`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 물론 그 전에 누구에게 어디까지 공유할지는 반드시 너랑 먼저 상의할 거고.

---

### `hidden_nurse_d3_9_f`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d3_11`

- 캐릭터: `nurse_normal.png`
**{name}**: *예약표에는 보건실과 상담실의 빈 시간대가 나란히 적혀 있다. 펜을 들어 빈칸 하나에 조용히 동그라미를 그린다.*

---

### `hidden_nurse_d3_11`
- 배경: `nurse_room.png`
- 플래그: `nurse_day3`, `nurse_route_unlocked`
- 다음: `hidden_nurse_d3_freetalk`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 다음 수업 종 치기 전까지 아직 몇 분 남았네. 더 묻고 싶은 게 있으면 지금 편하게 말해도 돼.

---

### `hidden_nurse_d3_freetalk`
- 배경: `nurse_room.png`
- 타입: `free_talk`
- 다음: `morning3_date_seo_1`
- 컨텍스트: "전학 사흘째. 복잡해진 관계 때문에 주인공이 보건실의 공식 상담을 찾았고 보건선생님은 대학병원에서 겪은 번아웃을 이야기했다. 학생의 고민과 자신의 경험을 구분해 다루는 상담이다."
- 성격: "보건선생님은 여유와 유머가 있는 의료 전문가다. 번아웃을 겪어 본 경험을 나누되 학생에게 자신의 회복을 맡기지 않고 공식 경계를 지킨다."

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님이 커튼을 반쯤 여미고 내 맞은편으로 바짝 의자를 끌어당긴다.* 오늘은 가벼운 농담 말고 진짜 네 속마음부터 들어볼까.

---

### `hidden_nurse_d3_skip`
- 배경: `nurse_room.png`
- 호감분기: Nurse
  - [-19 이상] → `hidden_nurse_d3_low`
  - [기본] → `hidden_nurse_d3_neg`
- 다음: `hidden_nurse_d3_neg`

- 캐릭터: `없음`

---

### `hidden_nurse_d3_low`
- 배경: `nurse_room.png`
- 다음: `morning3_date_seo_1`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님은 상담 의자를 꺼내지 않은 채 문 옆에 선다.* 지금은 따로 상담을 이어가기 어렵겠어. 필요한 일이 있으면 공식 상담 시간에 맞춰서 와.

---

### `hidden_nurse_d3_neg`
- 배경: `nurse_room.png`
- 다음: `morning3_date_seo_1`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *차트철을 덮으며 의자 쪽은 보지도 않는다.* 정식 창구로만 접수해. 교실로 돌아가.

---

### `morning3_date_seo_1`
- 배경: `school_hallway.png`
- 다음: `morning3_date_seo_choice`

- 캐릭터: `seyoun_normal.png`
**서연**: *복도 창가에서 서연이 반 걸음 다가서며 목소리를 낮춘다.* 이번 주말에 시간 비워 둘 수 있어? 학생회 일 말고 단둘이 공원에 가고 싶어서.

---

### `morning3_date_seo_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "좋아. 몇 시에 볼까?" → `morning3_date_seo_accept` | Seoyeon +4 | 플래그: `accepted_seoyeon_date`
  2. "좀 바쁜데" → `morning3_date_seo_decline` | Seoyeon -3
  3. "학생회장 부탁인데 당연히 가야지" → `morning3_date_seo_accept` | Seoyeon -4
  4. "다른 애들 안 오는 거면 시간 비워볼게" → `morning3_date_seo_accept` | Seoyeon -5

- 캐릭터: `seyoun_normal.png`
**서연**: *서연의 맑은 눈동자가 내 입술에 고정된다. 열린 교실 문 안쪽에서 이쪽을 보던 다인의 손이 물병 뚜껑 위에서 멈춘다.*

---

### `morning3_date_seo_accept`
- 배경: `school_hallway.png`
- 다음: `morning3_date_dain_1`

- 캐릭터: `seyoun_shy.png`
**{name}**: 좋아, 주말에 공원에서 보자. *내 대답에 서연의 뺨이 옅게 물들고 지켜보던 다인이 성큼성큼 내 책상 앞으로 걸어온다.*

---

### `morning3_date_seo_decline`
- 배경: `school_hallway.png`
- 다음: `morning3_date_dain_1`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연의 제안을 거절하자 서연이 조용히 시선을 내리고 교실 안쪽의 다인이 멈췄던 물병 뚜껑을 경쾌하게 돌려 연다.*

---

### `morning3_date_seo_skip`
- 배경: `school_hallway.png`
- 호감분기: Seoyeon
  - [0+] → `morning3_date_seo_low`
  - [-19 이상] → `morning3_date_seo_low`
  - [기본] → `morning3_date_seo_neg`
- 다음: `morning3_date_seo_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `morning3_date_seo_low`
- 배경: `school_hallway.png`
- 플래그: `day3_seoyeon_date_withdrawn`
- 다음: `morning3_date_dain_1`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연은 휴대폰 화면을 켰다가 바로 끄고는 눈이 마주치자 클립보드 쪽으로 시선을 내린다.* 주말 일정은 단체방에 공지할게.

---

### `morning3_date_seo_neg`
- 배경: `school_hallway.png`
- 플래그: `day3_seoyeon_date_withdrawn`
- 다음: `morning3_date_dain_1`

- 캐릭터: `seyoun_pout.png`
**서연**: *클립보드를 가슴 앞에 방패처럼 붙인 채 스쳐 지나간다.* 주말 일정은 학급 단체방에만 올릴게. 개인적으로 묻지 마.

---

### `morning3_date_dain_1`
- 배경: `room_school.png`
- 다음: `morning3_date_dain_2`

- 캐릭터: `dain_normal.png`
**다인**: 자, 그럼 이제 내 차례지! 이번 주말에 나랑 오락실 갈래? 회장님만 선점하란 법은 없잖아.

---

### `morning3_date_dain_2`
- 배경: `room_school.png`
- 다음: `morning3_date_dain_choice`

- 캐릭터: `dain_normal.png`
**다인**: 난 다 들리게 물어본 거야. 쪽지보다 낫지? *다인이 내 책상 모서리를 손끝으로 톡톡 두드리며 몸을 숙인다.*

---

### `morning3_date_dain_choice`
- 배경: `room_school.png`
- 선택지:
  1. "좋아, 콜" → `morning3_date_dain_accept` | Dain +4 | 플래그: `accepted_dain_date`
  2. "주말은 좀..." → `morning3_date_dain_decline` | Dain -3
  3. "네가 그렇게 부탁하니까 가줄게" → `morning3_date_dain_accept` | Dain -4
  4. "재밌게 해주면 가는 걸로" → `morning3_date_dain_accept` | Dain -5

- 캐릭터: `dain_normal.png`
**다인**: 오락실 싫어하는 거 아니면 나랑도 시간 내 줘. 회장님한테만 대답해 주지 말고 응? *다인이 코앞까지 바짝 다가와 뜨거운 시선으로 대답을 재촉한다.*

---

### `morning3_date_dain_accept`
- 배경: `room_school.png`
- 다음: `morning3_date_dain_decline_narr`

- 캐릭터: `dain_laugh.png`
**{name}**: 좋아, 주말에 오락실에서 보자. *다인이 세상을 다 가진 듯 환하게 웃고 앞자리의 서연은 들고 있던 클립보드를 소리 나게 덮는다.*

---

### `morning3_date_dain_decline`
- 배경: `room_school.png`
- 다음: `morning3_date_dain_decline_narr`

- 캐릭터: `dain_normal.png`
**다인**: 아, 그래? 바쁘면 어쩔 수 없지! 설마 회장님이 먼저 선수 쳐서 거절하는 건 아니지?

---

### `morning3_date_dain_decline_narr`
- 배경: `room_school.png`
- 다음: `morning3_date_yuna_1`

- 캐릭터: `dain_laugh.png`
**다인**: 알았어, 다음 수업 준비나 하자! *짐짓 씩씩하게 웃으며 자리로 돌아가지만 종이 울리기 직전 교복 주머니 안쪽을 손가락으로 잘게 두드린다.*

---

### `morning3_date_dain_skip`
- 배경: `room_school.png`
- 호감분기: Dain
  - [0+] → `morning3_date_dain_low`
  - [-19 이상] → `morning3_date_dain_low`
  - [기본] → `morning3_date_dain_neg`
- 다음: `morning3_date_dain_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `morning3_date_dain_low`
- 배경: `room_school.png`
- 플래그: `day3_dain_date_withdrawn`
- 다음: `morning3_date_yuna_1`

- 캐릭터: `dain_normal.png`
**다인**: *다인은 이쪽을 흘끗 보다가 가방 지퍼를 끝까지 당겨 올린다.* 이번 주말에는 그냥 혼자 연습할 거야.

---

### `morning3_date_dain_neg`
- 배경: `room_school.png`
- 플래그: `day3_dain_date_withdrawn`
- 다음: `morning3_date_yuna_1`

- 캐릭터: `dain_angry.png`
**다인**: *가방 지퍼를 소리 나게 끝까지 올린다.* 주말엔 따로 부르지 마. 체육관에서 혼자 연습할 거니까.

---

### `morning3_date_yuna_1`
- 배경: `room_school.png`
- 다음: `morning3_date_yuna_1_b`

- 캐릭터: `yuna_normal.png`
**{name}**: *점심시간 직전, 유나가 소리 없이 다가와 네모나게 접은 쪽지를 내 책상 위에 올려놓는다. 서연과 다인의 시선이 동시에 유나의 하얀 손끝에 꽂힌다.*

---

### `morning3_date_yuna_1_b`
- 배경: `room_school.png`
- 다음: `morning3_date_yuna_2`

- 캐릭터: `seyoun_normal.png`
**서연**: 유나야. 그렇게 쪽지로만 말을 걸면 옆에 있는 사람들은 무슨 내용인지 모르잖아.

---

### `morning3_date_yuna_2`
- 배경: `room_school.png`
- 다음: `morning3_date_yuna_choice`

- 캐릭터: `yuna_normal.png`
**유나**: *펼쳐 본 쪽지에는 연보라색 잉크로 또렷한 글씨가 적혀 있다.* 이번 주말, 골목 헌책방. 혹시 먼저 잡힌 약속이 있어도 네가 내 쪽으로 오고 싶으면 와. 기다릴게.

---

### `morning3_date_yuna_choice`
- 배경: `room_school.png`
- 선택지:
  1. "쪽지 뒷면에 '갈게'라고 적는다" → `morning3_date_yuna_accept` | Yuna +4 | 플래그: `accepted_yuna_date`
  2. "쪽지 뒷면에 '이번 주말은 어려워'라고 적는다" → `morning3_date_yuna_decline` | Yuna -3
  3. "쪽지에 ‘혼자 가기 싫으면 같이 가줄게’라고 적는다" → `morning3_date_yuna_accept` | Yuna -4
  4. "쪽지에 ‘다른 애들한텐 비밀이면 갈게’라고 적는다" → `morning3_date_yuna_accept` | Yuna -5

- 캐릭터: `yuna_normal.png`
**유나**: 다 들리게 말하는 게 공평하다면 지금 직접 말할게. 난 다른 사람 말고 네 대답이 듣고 싶어. *유나는 서연과 다인을 차례로 바라본 뒤 평소처럼 책으로 얼굴을 가리지 않고 내 눈을 응시한다.*

---

### `morning3_date_yuna_accept`
- 배경: `room_school.png`
- 다음: `morning3_check_multiple`

- 캐릭터: `yuna_shy.png`
**{name}**: *쪽지 뒷면에 답을 적어 건네자 유나는 문장을 끝까지 읽은 뒤 종이를 소중하게 접어 책 사이에 끼워 넣는다.*

---

### `morning3_date_yuna_decline`
- 배경: `room_school.png`
- 다음: `morning3_check_multiple`

- 캐릭터: `yuna_sad.png`
**{name}**: *쪽지 뒷면에 거절의 답을 적어 책 위에 올려놓는다. 유나는 책갈피를 먼저 끼운 뒤에야 그 짧은 문장을 가만히 내려다본다.*

---

### `morning3_date_yuna_skip`
- 배경: `room_school.png`
- 호감분기: Yuna
  - [0+] → `morning3_date_yuna_low`
  - [-19 이상] → `morning3_date_yuna_low`
  - [기본] → `morning3_date_yuna_neg`
- 다음: `morning3_date_yuna_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `morning3_date_yuna_low`
- 배경: `room_school.png`
- 플래그: `day3_yuna_date_withdrawn`
- 다음: `morning3_check_multiple`

- 캐릭터: `yuna_normal.png`
**유나**: *유나는 접어 둔 쪽지 끝을 만지작거리다 다시 책갈피 사이에 밀어 넣는다.* 주말엔 그냥 혼자 있을래.

---

### `morning3_date_yuna_neg`
- 배경: `room_school.png`
- 플래그: `day3_yuna_date_withdrawn`
- 다음: `morning3_check_multiple`

- 캐릭터: `yuna_bored.png`
**유나**: *주머니에서 쪽지를 꺼내려다 도로 책 사이에 깊숙이 찔러 넣는다.* 이번 주말엔 나 찾지 마.

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
**{name}**: *한 주말에 겹쳐 버린 데이트 약속들. 누구에게 먼저 양해를 구해야 할지 엄두가 나지 않아 휴대폰 캘린더 화면을 덮는다.*

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
**{name}**: *오전 마지막 수업을 끝내는 종이 울리고 폭풍 전야 같은 점심시간이 찾아온다.*

---

### `morning3_end_b`
- 다음: `lunch3_start`

<!-- i18n -->

---

## 3일차 — 점심 `day3_2_lunch`

### `lunch3_start`
- 배경: `room_school.png`
- BGM: `daily.mp3`
- 다음: `lunch3_start_2_b`

- 캐릭터: `null` @ undefined
**유나**: 내 빵도 반 나눠 먹어. *사흘째 점심, 교실에서 책상을 붙여 자리를 만든다. 서연은 내 옆에, 다인은 맞은편에 앉고 유나가 내 반대편 옆자리로 의자를 끌어당긴다.*

---

### `lunch3_start_2_b`
- 배경: `room_school.png`
- 다음: `lunch3_meal_1`

- 캐릭터: `null` @ undefined
**다인**: 이 계란말이, 내가 먼저 먹어도 되는 거지? 일단 맛부터 볼게! *다인이 유나보다 반 박자 빠르게 젓가락을 뻗어 계란말이를 집어 들고 서연은 젓가락을 들기 전 맞은편의 다인을 조용히 응시한다.*

---

### `lunch3_meal_1`
- 배경: `room_school.png`
- 다음: `lunch3_meal_2`

- 캐릭터: `null` @ undefined
**다인**: 오, 간 딱 맞는데! 회장님도 얼른 드세요. 오늘은 옆자리 먼저 차지했다고 반찬까지 다 독차지하시면 안 되잖아요.

---

### `lunch3_meal_2`
- 배경: `room_school.png`
- 다음: `lunch3_meal_3`

- 캐릭터: `null` @ undefined
**{name}**: 잠깐만, 그건 내 도시락 반찬인데.

---

### `lunch3_meal_3`
- 배경: `room_school.png`
- 다음: `lunch3_meal_4`

- 캐릭터: `null` @ undefined
**서연**: *서연이 내 도시락에서 계란말이 한 조각을 집어 맛본다.* 난 남의 도시락까지 독점할 생각 없어. 간은 적당한데 모양이 조금 풀렸네, 6점.

---

### `lunch3_meal_4`
- 배경: `room_school.png`
- 다음: `lunch3_meal_5`

- 캐릭터: `null` @ undefined
**{name}**: 남의 점심 반찬에 냉정하게 점수 매기지 마.

---

### `lunch3_meal_5`
- 배경: `room_school.png`
- 다음: `lunch3_meal_6`

- 캐릭터: `null` @ undefined
**서연**: *서연의 입꼬리가 얄밉게 올라간다.* 10점 만점에 6점이면 내 기준에선 꽤 후한 점수인데?

---

### `lunch3_meal_6`
- 배경: `room_school.png`
- 다음: `lunch3_meal_7`

- 캐릭터: `null` @ undefined
**유나**: *말없이 지켜보던 유나가 젓가락을 뻗어 도시락 한가운데의 가장 먹음직스러운 비엔나소시지를 집어 든다.*

---

### `lunch3_meal_7`
- 배경: `room_school.png`
- 다음: `lunch3_meal_7_b`

- 캐릭터: `null` @ undefined
**{name}**: 유나야, 그 칼집 낸 소시지는 내가 제일 아껴 둔 건데.

---

### `lunch3_meal_7_b`
- 배경: `room_school.png`
- 다음: `lunch3_meal_10`

- 캐릭터: `null` @ undefined
**유나**: *유나가 소시지를 천천히 베어 물며 맞은편의 다인을 바라본다.* 먼저 손 뻗는 사람이 임자는 아니네.

---

### `lunch3_meal_10`
- 배경: `room_school.png`
- 다음: `lunch3_meal_10_b`

- 캐릭터: `null` @ undefined
**{name}**: 어, 잠깐만! 그건 마지막 남은 조각이야. *내 외침과 동시에 세 사람의 젓가락 끝이 도시락통 바로 위 허공에서 아슬아슬하게 멈춘다.*

---

### `lunch3_meal_10_b`
- 배경: `room_school.png`
- 분기:
  - [`accepted_seoyeon_date`] → `lunch3_meal_10_c`
  - [`accepted_dain_date`] → `lunch3_meal_10_d`
  - [`accepted_yuna_date`] → `lunch3_meal_10_e`
  - [기본] → `lunch3_choice`

- 캐릭터: `null` @ undefined
**{name}**: *텅 빈 도시락통 한가운데에 노릇하게 구워진 마지막 계란말이 한 조각만 덩그러니 남아 있다.*

---

### `lunch3_meal_10_c`
- 다음: `lunch3_choice`

<!-- i18n -->

---

### `lunch3_meal_10_d`
- 다음: `lunch3_choice`

<!-- i18n -->

---

### `lunch3_meal_10_e`
- 다음: `lunch3_choice`

<!-- i18n -->

---

### `lunch3_choice`
- 배경: `room_school.png`
- 선택지:
  1. "서연에게 준다" → `lunch3_give_seo_aff`
  2. "다인에게 준다" → `lunch3_give_dain_aff`
  3. "유나에게 준다" → `lunch3_give_yuna_aff`
  4. "다 같이 나눠 먹자" → `lunch3_share_tone`

- 캐릭터: `yuna_bored.png`
**{name}**: *숨소리조차 잦아든 식탁 위, 마지막 반찬을 건넬 사람을 고른다.*

---

### `lunch3_give_seo_aff`
- 배경: `room_school.png`
- 호감분기: Seoyeon
  - [10+] → `lunch3_give_seo_1`
  - [0+] → `lunch3_give_seo_cool`
  - [-19 이상] → `lunch3_give_seo_cool`
  - [기본] → `lunch3_give_seo_neg`
- 다음: `lunch3_give_seo_neg`

- 캐릭터: `없음`

---

### `lunch3_give_seo_1`
- 배경: `room_school.png`
- 플래그: `lunch3_gave_seoyeon`
- 스탯: Seoyeon +4
- 다음: `lunch3_seo_skin_check`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연의 눈매가 만족스럽게 휘어진다.* 고마워. 역시 넌 중요한 순간에 누구를 챙겨야 하는지 잘 아네.

---

### `lunch3_give_seo_cool`
- 배경: `room_school.png`
- 플래그: `lunch3_gave_seoyeon`
- 스탯: Seoyeon +4
- 다음: `lunch3_seo_skin_check`

- 캐릭터: `seyoun_normal.png`
**서연**: 고마워, 잘 먹을게.

---

### `lunch3_give_seo_neg`
- 배경: `room_school.png`
- 플래그: `lunch3_gave_seoyeon`
- 스탯: Seoyeon +4
- 다음: `lunch3_seo_skin_check`

- 캐릭터: `seyoun_pout.png`
**서연**: *서연이 젓가락을 도시락 위에 내려놓는다.* 됐어, 너나 먹어.

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
**서연**: 잠깐, 입가에 뭐 묻었어. 가만히 있어 봐, 움직이지 말고. *서연이 상체를 바짝 기울여 내 턱 끝을 손가락으로 가볍게 붙잡고 엄지 끝으로 입술 옆에 붙은 밥알을 천천히 떼어낸다.*

---

### `lunch3_seo_skin_2`
- 배경: `room_school.png`
- 다음: `lunch3_seo_skin_3`

- 캐릭터: `seyoun_shy.png`
**서연**: *입술 끝에 닿은 서연의 손가락이 금방 떨어지지 않는다. 귓가에 한결 낮아진 목소리가 스친다.* 다른 애들 앞에서는 좀 신경 써. 내가 매번 이렇게 닦아 줄 순 없잖아.

---

### `lunch3_seo_skin_3`
- 배경: `room_school.png`
- 플래그: `day3_skinship_seoyeon`
- 다음: `lunch3_give_seo_2_check`

- 캐릭터: `seyoun_shy.png`
**서연**: 아, 내 젓가락. 됐어, 내가 주울 테니까 가만히 있어. *손을 거두려다 책상 끝에서 굴러떨어진 젓가락을 주우며 서연이 붉어진 귓바퀴를 머리카락 뒤로 감춘다.*

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
  - [0+] → `lunch3_give_seo_dain_low`
  - [-19 이상] → `lunch3_give_seo_dain_low`
  - [기본] → `lunch3_give_seo_dain_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `lunch3_give_seo_dain_mid`
- 배경: `room_school.png`
- 스탯: Dain -2
- 다음: `lunch3_give_seo_3_check`

- 캐릭터: `dain_normal.png`
**다인**: 아깝다, 나도 먹고 싶었는데! 대신 다음엔 내 몫부터 먼저 남겨 둬야 해.

---

### `lunch3_give_seo_dain_low`
- 배경: `room_school.png`
- 스탯: Dain -1
- 다음: `lunch3_give_seo_3_check`

- 캐릭터: `dain_normal.png`
**다인**: *다인은 자기 몫의 빵을 다 삼키고 물병 뚜껑을 잠근다.* 난 이미 배불러서 괜찮아.

---

### `lunch3_give_seo_2`
- 배경: `room_school.png`
- 스탯: Dain -3
- 분기:
  - [`day3_has_multiple_dates`] → `lunch3_give_seo_3`
  - [기본] → `lunch3_seo_witness_1`

- 캐릭터: `dain_pout.png`
**다인**: 에이, 치사하게! 나도 그 마지막 조각 엄청 노리고 있었는데!

---

### `lunch3_seo_witness_1`
- 배경: `school_hallway.png`
- 다음: `lunch3_seo_witness_choice`

- 캐릭터: `dain_sad.png`
**다인**: 목마른데 물 좀 채워 올게. *다인은 빈 물병을 챙겨 들며 서연의 도시락 쪽을 한 번 돌아본 뒤 복도로 빠져나간다.*

---

### `lunch3_seo_witness_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "다인!" → `lunch3_seo_chase_dain_1` | Seoyeon -3, Dain +2
  2. "서연에게 집중한다" → `lunch3_seo_focus_2` | Dain -5
  3. "다인도 부르면 셋이 더 즐겁겠다" → `lunch3_seo_chase_dain_1` | Seoyeon -4
  4. "다인 혼자 두면 마음에 걸려. 다시 자리로 불러볼게." → `lunch3_seo_chase_dain_1` | Seoyeon -6

- 캐릭터: `없음`
**{name}**: *늘 시끌벅적하던 다인의 운동화 뒤축이 소리 없이 복도 모퉁이 너머로 사라진다.*

---

### `lunch3_seo_chase_dain_1`
- 배경: `room_school.png`
- 다음: `lunch3_seo_chase_dain_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *내가 자리에서 일어서자 서연은 말없이 도시락을 내려놓고 뚜껑 모서리를 반듯하게 맞춘다.*

---

### `lunch3_seo_chase_dain_2`
- 배경: `school_hallway.png`
- 다음: `lunch3_seo_chase_dain_2b`

- 캐릭터: `dain_sad.png`
**다인**: *복도 식수대 앞에서 멈춰 선 다인이 물병만 만지작거리며 돌아본다.* 왜 따라왔어. 회장님이랑 마저 먹지 않고.

---

### `lunch3_seo_chase_dain_2b`
- 배경: `room_school.png`
- 다음: `lunch3_give_seo_3_check`

- 캐릭터: `dain_sad.png`
**{name}**: *다인을 달래서 데리고 다시 교실 자리로 돌아왔다.*

---

### `lunch3_seo_focus_2`
- 배경: `room_school.png`
- 다음: `lunch3_give_seo_3_check`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연이 젓가락 끝으로 반찬을 고르며 낮게 묻는다.* 나랑 있으면서 다른 쪽이 신경 쓰여?

---

### `lunch3_give_seo_dain_neg`
- 배경: `room_school.png`
- 다음: `lunch3_give_seo_3_check`

- 캐릭터: `dain_normal.png`
**다인**: *물병만 달랑 집어 들고 복도로 나간다. 인사 한마디 남기지 않는다.*

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
  - [0+] → `lunch3_give_seo_yuna_low`
  - [-19 이상] → `lunch3_give_seo_yuna_low`
  - [기본] → `lunch3_give_seo_yuna_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `lunch3_give_seo_yuna_mid`
- 배경: `room_school.png`
- 스탯: Yuna -2
- 다음: `lunch3_end`

- 캐릭터: `yuna_normal.png`
**유나**: *유나는 서연에게 건네진 반찬을 조용히 바라보다가 빵 봉지를 접는다.* 다음번엔 내 것도 조금 남겨 줘.

---

### `lunch3_give_seo_yuna_low`
- 배경: `room_school.png`
- 스탯: Yuna -1
- 다음: `lunch3_end`

- 캐릭터: `yuna_normal.png`
**유나**: *유나는 별다른 내색 없이 남은 빵 조각을 마저 입에 넣는다.*

---

### `lunch3_give_seo_3`
- 배경: `room_school.png`
- 스탯: Yuna -3
- 분기:
  - [`day3_has_multiple_dates`] → `lunch3_expose_1`
  - [기본] → `lunch3_end`

- 캐릭터: `yuna_sad.png`
**유나**: *유나는 말없이 먹다 남은 빵 봉지를 두 번 접어 가방 안쪽에 집어넣는다.*

---

### `lunch3_give_seo_yuna_neg`
- 배경: `room_school.png`
- 다음: `lunch3_end`

- 캐릭터: `yuna_bored.png`
**{name}**: *유나는 빵 봉지를 접어 가방에 넣고 누구보다 먼저 자리에서 일어난다.*

---

### `lunch3_give_dain_aff`
- 배경: `room_school.png`
- 호감분기: Dain
  - [10+] → `lunch3_give_dain_1`
  - [0+] → `lunch3_give_dain_cool`
  - [-19 이상] → `lunch3_give_dain_cool`
  - [기본] → `lunch3_give_dain_neg`
- 다음: `lunch3_give_dain_neg`

- 캐릭터: `없음`

---

### `lunch3_give_dain_1`
- 배경: `room_school.png`
- 플래그: `lunch3_gave_dain`
- 스탯: Dain +5
- 다음: `lunch3_dain_skin_check`

- 캐릭터: `dain_laugh.png`
**다인**: 진짜 나 주는 거야? 고마워! 역시 {name}, 내 마음을 제일 잘 안다니까!

---

### `lunch3_give_dain_cool`
- 배경: `room_school.png`
- 플래그: `lunch3_gave_dain`
- 스탯: Dain +5
- 다음: `lunch3_dain_skin_check`

- 캐릭터: `dain_normal.png`
**다인**: 오, 고마워. 잘 먹을게.

---

### `lunch3_give_dain_neg`
- 배경: `room_school.png`
- 플래그: `lunch3_gave_dain`
- 스탯: Dain +5
- 다음: `lunch3_dain_skin_check`

- 캐릭터: `dain_pout.png`
**다인**: *다인이 젓가락 대신 물병만 집어 든다.* 난 배불러서 됐어.

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
**다인**: 맛있는 거 양보해 줘서 고마운데, 상으로 한 번 안아 줘도 돼? *계란말이를 꿀꺽 삼킨 다인이 자리에서 반쯤 일어나 팔을 벌리더니, 내 대답도 듣기 전에 목덜미를 끌어안으며 품으로 폭 파고든다.*

---

### `lunch3_dain_skin_3`
- 배경: `room_school.png`
- 플래그: `day3_skinship_dain`
- 다음: `lunch3_give_dain_2_check`

- 캐릭터: `dain_shy.png`
**다인**: *운동복 너머로 다인의 뜨거운 체온과 빠른 심장박동이 그대로 전해진다. 반 박자 뒤 몸을 뗀 다인이 붉어진 볼을 긁적인다.* 막상 먼저 안고 나니까 생각보다 엄청 부끄럽네.

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
  - [0+] → `lunch3_give_dain_seo_low`
  - [-19 이상] → `lunch3_give_dain_seo_low`
  - [기본] → `lunch3_give_dain_seo_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `lunch3_give_dain_seo_mid`
- 배경: `room_school.png`
- 스탯: Seoyeon -2
- 다음: `lunch3_give_dain_3_check`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연은 젓가락을 내려놓고 도시락 뚜껑 모서리를 맞춘다.* 다음엔 내가 매긴 점수도 좀 참고해 줘.

---

### `lunch3_give_dain_seo_low`
- 배경: `room_school.png`
- 스탯: Seoyeon -1
- 다음: `lunch3_give_dain_3_check`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연은 남은 반찬을 단정하게 정리하며 짧게 고개만 끄덕인다.*

---

### `lunch3_give_dain_2`
- 배경: `room_school.png`
- 스탯: Seoyeon -3
- 분기:
  - [`day3_has_multiple_dates`] → `lunch3_dain_witness_1`
  - [기본] → `lunch3_give_dain_3_check`

- 캐릭터: `seyoun_pout.png`
**서연**: *서연이 젓가락 끝을 모으며 작게 한숨을 내쉰다.* 참나, 정성껏 점수까지 매겨 준 보람이 없네.

---

### `lunch3_give_dain_seo_neg`
- 배경: `room_school.png`
- 다음: `lunch3_give_dain_3_check`

- 캐릭터: `seyoun_normal.png`
**서연**: *도시락 뚜껑을 닫고 출석부만 팔에 안은 채 교실 밖으로 나간다.*

---

### `lunch3_give_dain_3_check`
- 배경: `room_school.png`
- 호감분기: Yuna
  - [35+] → `lunch3_dain_witness_1`
  - [15+] → `lunch3_give_dain_yuna_mid`
  - [0+] → `lunch3_give_dain_yuna_low`
  - [-19 이상] → `lunch3_give_dain_yuna_low`
  - [기본] → `lunch3_give_dain_yuna_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `lunch3_dain_witness_1`
- 배경: `room_school.png`
- 다음: `lunch3_dain_witness_2b`

- 캐릭터: `yuna_sad.png`
**{name}**: *유나는 환하게 웃는 다인과 내 얼굴을 번갈아 바라본다. 이내 아무 말 없이 읽던 책을 도시락통 너머로 옮겨 시야를 가린다.*

---

### `lunch3_dain_witness_2b`
- 다음: `lunch3_give_dain_3`

<!-- i18n -->

---

### `lunch3_give_dain_3`
- 배경: `room_school.png`
- 스탯: Yuna -3
- 분기:
  - [`day3_has_multiple_dates`] → `lunch3_expose_1`
  - [기본] → `lunch3_end`

- 캐릭터: `yuna_sad.png`
**유나**: *유나는 빈 빵 봉지 입구를 손끝으로 단단히 말아 쥔 채 창밖으로 고개를 돌린다.*

---

### `lunch3_give_dain_yuna_mid`
- 배경: `room_school.png`
- 스탯: Yuna -2
- 다음: `lunch3_end`

- 캐릭터: `yuna_normal.png`
**유나**: 오늘은 다인이한테 주는구나. 다음엔 나한테도 먼저 물어봐 줘.

---

### `lunch3_give_dain_yuna_low`
- 배경: `room_school.png`
- 스탯: Yuna -1
- 다음: `lunch3_end`

- 캐릭터: `yuna_normal.png`
**유나**: *유나는 빈 빵 봉지를 접어 넣고 물을 한 모금 삼킨다.*

---

### `lunch3_give_dain_yuna_neg`
- 배경: `room_school.png`
- 다음: `lunch3_end`

- 캐릭터: `없음`
**{name}**: *돌아보니 유나의 자리는 이미 비어 있다. 늘 남겨 두던 쪽지 한 장도 보이지 않는다.*

---

### `lunch3_give_yuna_aff`
- 배경: `room_school.png`
- 호감분기: Yuna
  - [0+] → `lunch3_give_yuna_1`
  - [-19 이상] → `lunch3_give_yuna_1`
  - [기본] → `lunch3_give_yuna_neg`
- 다음: `lunch3_give_yuna_neg`

- 캐릭터: `없음`

---

### `lunch3_give_yuna_1`
- 배경: `room_school.png`
- 플래그: `lunch3_gave_yuna`
- 스탯: Yuna +5
- 다음: `lunch3_yuna_skin_check`

- 캐릭터: `yuna_normal.png`
**유나**: *유나의 눈동자가 작게 흔들리더니 이내 옅은 미소가 번진다.* 고마워. 네가 준 거니까 다 먹을게.

---

### `lunch3_give_yuna_neg`
- 배경: `room_school.png`
- 플래그: `lunch3_gave_yuna`
- 스탯: Yuna +5
- 다음: `lunch3_yuna_skin_check`

- 캐릭터: `yuna_bored.png`
**유나**: *유나가 빵 봉지를 접으며 고개를 젓는다.* 난 괜찮아.

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
**유나**: 답례야, 이거 받아. *책상 아래로 유나가 쪽지를 건네는 순간, 내 손을 감싸 쥐듯 유나의 차갑고 매끄러운 손가락이 내 손바닥 안쪽을 길게 파고든다.*

---

### `lunch3_yuna_skin_2`
- 배경: `room_school.png`
- 다음: `lunch3_yuna_skin_3`

- 캐릭터: `yuna_shy.png`
**유나**: *유나가 손을 빼지 않은 채 내 손가락 마디를 가만히 쥐어 본다.* 아까 고맙다고 한 거, 그냥 예의상 한 말 아니야.

---

### `lunch3_yuna_skin_3`
- 배경: `room_school.png`
- 플래그: `day3_skinship_yuna`
- 다음: `lunch3_give_yuna_2_check`

- 캐릭터: `yuna_shy.png`
**{name}**: *내 손끝에 자신의 체온을 묻혀 놓듯 한참을 머물던 유나가 천천히 손을 뗀다. 손바닥에 남은 쪽지를 접어 주머니에 넣는다.*

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
  - [0+] → `lunch3_give_yuna_seo_low`
  - [-19 이상] → `lunch3_give_yuna_seo_low`
  - [기본] → `lunch3_give_yuna_seo_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `lunch3_give_yuna_seo_mid`
- 배경: `room_school.png`
- 스탯: Seoyeon -2
- 다음: `lunch3_give_yuna_3_check`

- 캐릭터: `seyoun_normal.png`
**서연**: 유나한테 먼저 챙겨 주는구나. 그래, 알겠어.

---

### `lunch3_give_yuna_seo_low`
- 배경: `room_school.png`
- 스탯: Seoyeon -1
- 다음: `lunch3_give_yuna_3_check`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연은 말없이 자기 도시락통과 수저집을 정리한다.*

---

### `lunch3_give_yuna_2`
- 배경: `room_school.png`
- 스탯: Seoyeon -3
- 다음: `lunch3_yuna_witness_1`

- 캐릭터: `seyoun_pout.png`
**서연**: *서연이 찻잔을 내려놓듯 젓가락을 가지런히 둔다.* 당연히 내 쪽으로 올 줄 알았는데 의외네.

---

### `lunch3_yuna_witness_1`
- 배경: `room_school.png`
- 다음: `lunch3_yuna_witness_2`

- 캐릭터: `seyoun_normal.png`
**서연**: 내 바로 앞에서 챙겨 주고 그렇게 눈치까지 보면 내가 뭐가 돼. 신경 쓰지 말고 편하게 먹어.

---

### `lunch3_yuna_witness_2`
- 배경: `room_school.png`
- 분기:
  - [`day3_has_multiple_dates`] → `lunch3_give_yuna_3`
  - [기본] → `lunch3_give_yuna_3_check`

- 캐릭터: `seyoun_normal.png`
**{name}**: *유나는 물컵 옆면을 검지로 한 번 톡 두드리고는 서연의 눈을 피하지 않고 마주 본다.*

---

### `lunch3_give_yuna_seo_neg`
- 배경: `school_hallway.png`
- 다음: `lunch3_give_yuna_3_check`

- 캐릭터: `seyoun_back.png`
**서연**: *복도를 지나가며 도서관 쪽 창문에는 눈길조차 주지 않는다.*

---

### `lunch3_give_yuna_3_check`
- 배경: `room_school.png`
- 호감분기: Dain
  - [35+] → `lunch3_give_yuna_3`
  - [15+] → `lunch3_give_yuna_dain_mid`
  - [0+] → `lunch3_give_yuna_dain_low`
  - [-19 이상] → `lunch3_give_yuna_dain_low`
  - [기본] → `lunch3_give_yuna_dain_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `lunch3_give_yuna_dain_mid`
- 배경: `room_school.png`
- 스탯: Dain -2
- 다음: `lunch3_end`

- 캐릭터: `dain_normal.png`
**다인**: 뭐, 유나가 아까부터 보고 있었으니까! 대신 다음번엔 무조건 내 차례다?

---

### `lunch3_give_yuna_dain_low`
- 배경: `room_school.png`
- 스탯: Dain -1
- 다음: `lunch3_end`

- 캐릭터: `dain_normal.png`
**다인**: *다인은 빈 물병을 가방 옆주머니에 꽂아 넣는다.* 난 괜찮아, 많이 먹어.

---

### `lunch3_give_yuna_3`
- 배경: `room_school.png`
- 스탯: Dain -3
- 분기:
  - [`day3_has_multiple_dates`] → `lunch3_expose_1`
  - [기본] → `lunch3_end`

- 캐릭터: `dain_pout.png`
**다인**: 어라, 뭐야! 내 몫은 아예 없는 거야?

---

### `lunch3_expose_1`
- 배경: `room_school.png`
- BGM: `stop`
- BGM fade out: `1s`
- Ambience: `none`
- 플래그: `day3_caught_multiple_dates`
- 다음: `lunch3_expose_2`

- 캐릭터: `null` @ undefined
**{name}**: *식사가 마무리될 무렵, 물병 뚜껑을 닫던 다인이 불쑥 입을 연다.*

---

### `lunch3_expose_2`
- 배경: `room_school.png`
- 다음: `lunch3_expose_3`

- 캐릭터: `null` @ undefined
**다인**: 아 맞다! 우리 이번 주말에 만나기로 한 거, 몇 시에 어디서 볼지 정했어?

---

### `lunch3_expose_3`
- 배경: `room_school.png`
- 다음: `lunch3_expose_4`

- 캐릭터: `null` @ undefined
**{name}**: 어? 잠깐만, 다인아. 그 얘기는 이따가. *순간 등줄기가 서늘해지며 손에 쥔 젓가락이 굳는다.*

---

### `lunch3_expose_4`
- 배경: `room_school.png`
- BGM: `mystery.mp3`
- 다음: `lunch3_expose_5`

- 캐릭터: `null` @ undefined
**{name}**: *서연의 젓가락 끝이 플라스틱 도시락 가장자리를 하얗게 질리도록 누르고 유나는 뜯던 빵 봉지를 멈춘 채 서늘한 눈으로 다인을 바라본다.*

---

### `lunch3_expose_5`
- 다음: `lunch3_expose_6`

<!-- i18n -->

---

### `lunch3_expose_6`
- 배경: `room_school.png`
- 다음: `lunch3_expose_7`

- 캐릭터: `null` @ undefined
**서연**: *서연의 목소리에서 온기가 싹 걷힌다.* 잠깐만. 지금 그 말, 이번 주말 약속이 나 하나가 아니라는 뜻이야?

---

### `lunch3_expose_7`
- 배경: `room_school.png`
- 다음: `lunch3_expose_7_b`

- 캐릭터: `null` @ undefined
**다인**: *다인의 얼굴에서 웃음기가 천천히 사라진다.* 뭐야, 이상하네. 우리 셋 다 누구랑 언제 만나는지 서로 다른 대답을 들은 것 같은데.

---

### `lunch3_expose_7_b`
- 배경: `room_school.png`
- 다음: `lunch3_expose_9`

- 캐릭터: `null` @ undefined
**{name}**: *유나는 먹던 빵을 내려놓고 소리도 없이 봉지 입구를 끝까지 말아 접는다.*

---

### `lunch3_expose_9`
- 배경: `room_school.png`
- 다음: `lunch3_expose_10`

- 캐릭터: `null` @ undefined
**유나**: 난 알고 있었어.

---

### `lunch3_expose_10`
- 배경: `room_school.png`
- 다음: `lunch3_expose_11`

- 캐릭터: `null` @ undefined
**{name}**: *누군가의 쇠젓가락 하나가 도시락 뚜껑에 부딪혀 차가운 금속음을 낸다. 아무도 그 젓가락을 집어 들지 않는다.*

---

### `lunch3_expose_11`
- 배경: `room_school.png`
- 다음: `lunch3_expose_12`

- 캐릭터: `null` @ undefined
**유나**: 서연이랑 다인이가 너한테 먼저 물어본 건 봤어. 하지만 네가 그 약속들을 전부 다 받아 준 줄은 몰랐네.

---

### `lunch3_expose_12`
- 배경: `room_school.png`
- 다음: `lunch3_expose_14`

- 캐릭터: `null` @ undefined
**민수**: 야, 너 잠깐 이리 와 봐. *옆 분단에서 눈치를 살피던 민수가 손바닥으로 입가를 가린 채 다급하게 손짓한다.*

---

### `lunch3_expose_14`
- 배경: `room_school.png`
- 다음: `lunch3_expose_choice`

- 캐릭터: `null` @ undefined
**민수**: *민수가 내 어깨를 붙잡고 기가 막힌 듯 속삭인다.* 야, 너 진짜 정신 나갔냐? 한 주말에 약속을 몇 개나 겹쳐 잡은 거야?

---

### `lunch3_expose_choice`
- 배경: `room_school.png`
- 선택지:
  1. "미안. 다들 좋아서 거절을 못 했어." → `lunch3_expose_honest_1` | Seoyeon -5, Yuna -5, Dain -5
  2. "시간대가 다르니까 괜찮지 않을까?" → `lunch3_expose_excuse_1` | Seoyeon -8, Yuna -8, Dain -8
  3. "자리에서 물러난다" → `lunch3_expose_run_1` | Seoyeon -10, Yuna -10, Dain -10

- 캐릭터: `null` @ undefined
**{name}**: *세 사람의 싸늘한 시선이 내 입술 끝에 꽂혀 있다. 지금 당장 뭐라고 답해야 하지.*

---

### `lunch3_expose_honest_1`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_2`

- 캐릭터: `null` @ undefined
**{name}**: 정말 미안해. 누구 한 명이라도 거절하기가 싫어서 다들 좋다 보니까 말을 못 했어.

---

### `lunch3_expose_honest_2`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_3`

- 캐릭터: `null` @ undefined
**서연**: *서연이 기가 막힌 듯 작게 숨을 들이켠다.* 거절을 못 해서 그랬다고? 그 핑계가 제일 잔인한 거야, {name}.

---

### `lunch3_expose_honest_3`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_4`

- 캐릭터: `null` @ undefined
**서연**: 네가 미움받기 싫어서 건넨 어중간한 웃음이, 기다리는 사람한테는 특별하다는 착각을 주거든.

---

### `lunch3_expose_honest_4`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_4_b`

- 캐릭터: `null` @ undefined
**서연**: *서연이 채 비우지 못한 도시락 뚜껑을 딱 소리 나게 덮는다.*

---

### `lunch3_expose_honest_4_b`
- 다음: `lunch3_expose_honest_5`

<!-- i18n -->

---

### `lunch3_expose_honest_5`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_6`

- 캐릭터: `null` @ undefined
**서연**: 난 여럿 중 하나로 끼어 있는 애매한 자리는 안 해. 그럴 바엔 내가 먼저 빠질게.

---

### `lunch3_expose_honest_6`
- 배경: `room_school.png`
- 다음: `lunch3_expose_honest_7`

- 캐릭터: `null` @ undefined
**서연**: *서연은 도시락 가방을 챙겨 들고 뒤도 돌아보지 않은 채 교실 문을 나선다.*

---

### `lunch3_expose_honest_7`
- 배경: `room_school.png`
- 플래그: `day3_dain_no_exclamation`
- 다음: `lunch3_end`

- 캐릭터: `null` @ undefined
**{name}**: *남겨진 다인은 짧게 고개만 끄덕이고 시선을 피한다. 목소리에 평소 같은 들뜬 기색은 한 줌도 남아 있지 않다.*

---

### `lunch3_expose_excuse_1`
- 배경: `room_school.png`
- 다음: `lunch3_expose_excuse_2`

- 캐릭터: `null` @ undefined
**{name}**: 만나는 요일이랑 시간대가 조금씩 다르니까, 다 같이 보면 괜찮지 않을까?

---

### `lunch3_expose_excuse_2`
- 배경: `room_school.png`
- 다음: `lunch3_expose_excuse_2_b`

- 캐릭터: `null` @ undefined
**서연**: *서연의 눈빛이 얼음장처럼 식는다.* 지금 시간이 겹치냐 안 겹치냐가 문제라는 걸 정말 모르겠어?

---

### `lunch3_expose_excuse_2_b`
- 배경: `room_school.png`
- 다음: `lunch3_expose_excuse_3`

- 캐릭터: `null` @ undefined
**다인**: *다인이 거칠게 의자를 뒤로 밀고 일어나 가방을 한쪽 어깨에 걸친다.*

---

### `lunch3_expose_excuse_3`
- 배경: `room_school.png`
- 다음: `lunch3_expose_excuse_4`

- 캐릭터: `null` @ undefined
**다인**: 나도 머리가 좀 복잡하네. 생각할 시간 좀 줘.

---

### `lunch3_expose_excuse_4`
- 배경: `room_school.png`
- 플래그: `day3_dain_no_exclamation`
- 다음: `lunch3_end`

- 캐릭터: `null` @ undefined
**다인**: *다인은 포장도 뜯지 않은 소보로빵을 가방에 쑤셔 넣고 굳은 얼굴로 자리를 뜬다.*

---

### `lunch3_expose_run_1`
- 배경: `room_school.png`
- 플래그: `day3_lunch_escaped`
- 다음: `lunch3_expose_run_2`

- 캐릭터: `null` @ undefined
**{name}**: *대답 대신 뒷문을 밀고 도망치듯 복도로 빠져나온다. 등 뒤에서 의자 다리가 바닥을 긁는 소리가 한꺼번에 울린다.*

---

### `lunch3_expose_run_2`
- 배경: `room_school.png`
- 다음: `lunch3_end`

- 캐릭터: `없음`
**{name}**: *교실 안에서 의자 끄는 소리만 차례로 들릴 뿐 아무도 나를 따라 나오지 않는다. 오후 수업 내내 칠판 글씨는 눈에 들어오지 않고 책상 아래로 휴대폰 화면만 켰다 끄기를 반복한다.*

---

### `lunch3_give_yuna_dain_neg`
- 배경: `room_school.png`
- 다음: `lunch3_end`

- 캐릭터: `dain_normal.png`
**다인**: *배구공 하나만 옆구리에 끼고 체육관 쪽으로 걸어간다. 한 번도 뒤돌아보지 않는다.*

---

### `lunch3_share_tone`
- 배경: `room_school.png`
- 호감분기: selectByHighestAffinity
  - [10+] → `lunch3_share_1`
  - [0+] → `lunch3_share_cool`
  - [-19 이상] → `lunch3_share_cool`
  - [기본] → `lunch3_share_neg`
- 다음: `lunch3_share_neg`

- 캐릭터: `없음`

---

### `lunch3_share_1`
- 배경: `room_school.png`
- 분기:
  - [`day3_has_multiple_dates`] → `lunch3_harem_1`
  - [기본] → `lunch3_share_solo`

- 캐릭터: `yuna_bored.png`
**{name}**: 싸우지 말고 똑같이 잘라서 나눠 먹자. 그러면 공평하잖아. *세 사람 모두 옅게 웃음을 터뜨리지만 쥐고 있는 젓가락 끝은 미묘하게 멈춰 있다.*

---

### `lunch3_share_solo`
- 배경: `room_school.png`
- 다음: `lunch3_end`

- 캐릭터: `yuna_normal.png`
**{name}**: *마지막 한 조각까지 사이좋게 나눠 먹고 나서도 세 사람은 쉽게 자리를 뜨지 않는다.*

---

### `lunch3_harem_1`
- 배경: `room_school.png`
- 플래그: `harem_seed`
- 다음: `lunch3_end`

- 캐릭터: `null` @ undefined
**{name}**: *셋이 조금씩 조각을 나눠 먹는다. 서연은 눈웃음만 짓고 다인은 유난히 큰 소리로 웃어 보이지만 유나는 주머니 속 쪽지를 끝내 꺼내지 않는다.*

---

### `lunch3_share_cool`
- 배경: `room_school.png`
- 다음: `lunch3_end`

- 캐릭터: `yuna_normal.png`
**{name}**: *마지막 계란말이 조각을 세 등분으로 나눈다. 식탁 위에 가벼운 정적만 흐를 뿐 웃음소리는 이어지지 않는다.*

---

### `lunch3_share_neg`
- 배경: `room_school.png`
- 다음: `lunch3_end`

- 캐릭터: `yuna_bored.png`
**{name}**: *잘라 놓은 계란말이가 도시락 한가운데 남는다. 아무도 젓가락을 움직이지 않고 한 명은 이미 도시락 뚜껑을 덮었다.*

---

### `lunch3_end`
- 배경: `room_school.png`
- 다음: `after3_start`

- 캐릭터: `없음`
**{name}**: *점심시간 종료를 알리는 종소리에 각자 도시락을 덮는다. 끝내 주말 약속 이야기는 누구도 다시 꺼내지 않는다.*

---

## 3일차 — 방과후 `day3_3_afterschool`

### `after3_start`
- 배경: `school_hallway.png`
- BGM: `sunset1.mp3`
- 다음: `after3_route_check`

- 캐릭터: `없음`
**{name}**: *방과 후, 노을빛 복도 갈림길에 선다. 사흘째 지나는 학생회실·도서관 별관·체육관 표지판을 올려다보고 어깨의 가방끈을 고쳐 쥔다.*

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
**{name}**: *주머니 속 휴대폰을 만지작거린다. 엉켜 버린 주말 약속 이야기를 매듭지으려면 오늘 방과 후에는 누구를 먼저 찾아가야 할까.*

---

### `after3_auto_dain`
- 배경: `school_hallway.png`
- 플래그: `route_dain`
- 다음: `after3_rivals_for_dain_start`

- 캐릭터: `없음`
**{name}**: *아침에 교문 앞에서 반 박자 늦게 따라붙던 다인의 오른발이 자꾸만 눈에 밟힌다. 체육관으로 발걸음을 옮긴다.*

---

### `after3_auto_yuna`
- 배경: `school_hallway.png`
- 플래그: `route_yuna`
- 다음: `after3_rivals_for_yuna_start`

- 캐릭터: `없음`
**{name}**: *점심시간 내내 말없이 책갈피만 만지작거리던 유나의 손끝이 떠오른다. 도서관 별관으로 향한다.*

---

### `after3_auto_seo`
- 배경: `school_hallway.png`
- 플래그: `route_seoyeon`
- 다음: `after3_rivals_for_seo_start`

- 캐릭터: `없음`
**{name}**: *클립보드를 꼭 쥔 채 애써 태연한 척하던 서연의 눈빛이 마음에 걸린다. 학생회실 쪽 계단을 오른다.*

---

### `after3_multi_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "서연이에게" → `after3_rivals_for_seo_start` | 플래그: `route_seoyeon`
  2. "유나에게" → `after3_rivals_for_yuna_start` | 플래그: `route_yuna`
  3. "다인이에게" → `after3_rivals_for_dain_start` | 플래그: `route_dain`
  4. "조금 더 생각한다" → `after3_choice`

- 캐릭터: `없음`
**{name}**: *겹쳐 버린 주말 약속을 이대로 방치할 수는 없다. 지금 당장 누구에게 먼저 찾아가 말을 꺼낼까.*

---

### `after3_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "학생회실로" → `after3_rivals_for_seo_start` | 플래그: `route_seoyeon`
  2. "도서관으로" → `after3_rivals_for_yuna_start` | 플래그: `route_yuna`
  3. "체육관으로" → `after3_rivals_for_dain_start` | 플래그: `route_dain`
  4. "오늘은 그냥 집에 간다" → `after3_walk_home` | 플래그: `day3_kept_distance`

- 캐릭터: `없음`
**{name}**: *석양이 물드는 복도 끝, 어디로 발걸음을 옮길까.*

---

### `after3_walk_home`
- 배경: `school_hallway.png`
- 다음: `after3_final`

- 캐릭터: `없음`
**{name}**: *오늘은 누구에게도 섣불리 말을 붙일 자신이 없다. 무거운 휴대폰을 가방 깊숙이 넣고 교문 쪽으로 터벅터벅 걷는다.*

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
**{name}**: *복도 창가에서 서연이 클립보드를 정리하고 있다. 종이를 넘기는 손길이 평소보다 유난히 빠르고 건조하다.*

---

### `after3_reject_for_yuna_2`
- 배경: `school_hallway.png`
- 다음: `after3_rival_seo_done`

- 캐릭터: `seyoun_normal.png`
**서연**: 난 학생회 마감 업무가 남아서. 기다리지 말고 오늘은 먼저 가.

---

### `after3_reject_for_dain_1`
- 배경: `school_hallway.png`
- 다음: `after3_reject_for_dain_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *복도에서 마주친 서연은 옅은 미소를 띤 채 클립보드의 종이 모서리를 가지런히 맞춘다.*

---

### `after3_reject_for_dain_2`
- 배경: `school_hallway.png`
- 다음: `after3_rival_seo_done`

- 캐릭터: `seyoun_normal.png`
**서연**: 오늘은 학생회 회의가 길어질 것 같아서. 신경 쓰지 말고 먼저 가.

---

### `after3_rival_seo_affinity`
- 배경: `school_hallway.png`
- 호감분기: Seoyeon
  - [35+] → `after3_rival_seo_high`
  - [15+] → `after3_rival_seo_mid`
  - [0+] → `after3_rival_seo_cool`
  - [-19 이상] → `after3_rival_seo_cool`
  - [기본] → `after3_rival_seo_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_rival_seo_high`
- 배경: `school_hallway.png`
- 다음: `after3_rival_seo_done`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연은 복도 갈림길 앞에서 걸음을 멈춘다. 내가 향하는 방향을 조용히 확인하더니 가방끈을 고쳐 잡는다.* 오늘은 다른 쪽으로 가는구나.

---

### `after3_rival_seo_mid`
- 배경: `school_hallway.png`
- 다음: `after3_rival_seo_done`

- 캐릭터: `seyoun_normal.png`
**서연**: 알겠어. 학생회실 남은 업무는 내가 혼자 정리할게.

---

### `after3_rival_seo_cool`
- 배경: `school_hallway.png`
- 다음: `after3_rival_seo_done`

- 캐릭터: `seyoun_normal.png`
**서연**: 방과 후 일정이 바뀐 모양이네. *서연은 클립보드 페이지를 넘기며 걸음을 멈추지 않고 지나간다.*

---

### `after3_rival_seo_neg`
- 배경: `school_hallway.png`
- 다음: `after3_rival_seo_done`

- 캐릭터: `seyoun_pout.png`
**서연**: *출석부만 팔에 단단히 붙인 채 학생회실 안으로 들어간다. 내 이름은 끝내 부르지 않는다.*

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
  - [`route_yuna`] → `after3_reject_for_yuna_3`
  - [기본] → `after3_rival_dain_done`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_reject_for_seo_1`
- 배경: `school_hallway.png`
- 다음: `after3_reject_for_seo_2`

- 캐릭터: `dain_sad.png`
**{name}**: *복도 모퉁이에서 마주친 다인은 평소처럼 먼저 손을 흔들지 않고 운동화 앞코로 바닥 타일만 긁는다.*

---

### `after3_reject_for_seo_2`
- 배경: `school_hallway.png`
- 다음: `after3_rival_dain_done`

- 캐릭터: `dain_sad.png`
**다인**: *다인이 내 시선이 향한 학생회실 쪽 계단을 흘끗 본다.* 오늘 방과 후엔 체육관 안 올 거지?

---

### `after3_reject_for_yuna_3`
- 배경: `gym.png`
- 다음: `after3_reject_for_yuna_3_dain`

- 캐릭터: `dain_sad.png`
**다인**: *열린 체육관 문틈으로 다인이 텅 빈 코트에서 혼자 서브 연습을 하는 모습이 보인다.*

---

### `after3_reject_for_yuna_3_dain`
- 배경: `gym.png`
- 다음: `after3_reject_for_yuna_3_react`

- 캐릭터: `dain_sad.png`
**다인**: 어, 지나가는 길이야? 안녕!

---

### `after3_reject_for_yuna_3_react`
- 배경: `gym.png`
- 다음: `after3_reject_for_yuna_4`

- 캐릭터: `dain_sad.png`
**{name}**: *다인의 밝은 인사에 어색하게 손만 들어 보이고 시선을 돌린다. 주머니 속 손바닥이 무겁게 가라앉는다.*

---

### `after3_reject_for_yuna_4`
- 배경: `school_hallway.png`
- 다음: `after3_rival_dain_done`

- 캐릭터: `없음`
**{name}**: *서연에겐 업무 이야기만 들었고 다인에겐 짧은 인사만 남겼다. 정작 해야 할 약속 정리는 입 밖으로 꺼내지도 못했다.*

---

### `after3_rival_dain_affinity`
- 배경: `school_hallway.png`
- 호감분기: Dain
  - [35+] → `after3_rival_dain_high`
  - [15+] → `after3_rival_dain_mid`
  - [0+] → `after3_rival_dain_cool`
  - [-19 이상] → `after3_rival_dain_cool`
  - [기본] → `after3_rival_dain_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_rival_dain_high`
- 배경: `school_hallway.png`
- 다음: `after3_rival_dain_done`

- 캐릭터: `dain_sad.png`
**다인**: *다인은 막 꺼내려던 말을 삼키고 체육관 쪽 표지판을 흘끗 본다.* 오늘 다른 데 들렀다 가는 거야? 그래, 알았어.

---

### `after3_rival_dain_mid`
- 배경: `school_hallway.png`
- 다음: `after3_rival_dain_done`

- 캐릭터: `dain_normal.png`
**다인**: 오케이! 그럼 난 먼저 체육관 가서 몸 풀고 있을게.

---

### `after3_rival_dain_cool`
- 배경: `school_hallway.png`
- 다음: `after3_rival_dain_done`

- 캐릭터: `dain_normal.png`
**다인**: 오늘 체육관 코스는 패스구나. *다인은 배구공 가방 끈을 고쳐 메고 돌아선다.*

---

### `after3_rival_dain_neg`
- 배경: `school_hallway.png`
- 다음: `after3_rival_dain_done`

- 캐릭터: `dain_angry.png`
**다인**: *바닥에 굴러온 배구공을 거칠게 집어 들고 인사도 없이 먼저 돌아선다.*

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
  - [`route_dain`] → `after3_reject_for_dain_3`
  - [기본] → `after3_rival_yuna_done`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_reject_for_seo_3`
- 배경: `library_old.png`
- 배경톤: `empty`
- 다음: `after3_reject_for_seo_3b`

- 캐릭터: `yuna_sad.png` @ 0.35
**유나**: *도서관 별관 유나의 자리에는 네모나게 접힌 쪽지만 놓여 있다. 약속을 정리하겠다는 말은 꺼내지도 못했다.* 오늘은 먼저 일어날게.

---

### `after3_reject_for_seo_3b`
- 다음: `after3_reject_for_seo_3c`

<!-- i18n -->

---

### `after3_reject_for_seo_3c`
- 플래그: `yuna_trust_broken`
- 다음: `after3_reject_for_seo_4`

<!-- i18n -->

---

### `after3_reject_for_seo_4`
- 배경: `school_hallway.png`
- 다음: `after3_rival_yuna_done`

- 캐릭터: `없음`
**{name}**: *다시 복도로 나왔다. 다인의 목소리는 낮게 가라앉아 있었고 유나의 자리는 차갑게 비어 있었다. 손안에 쥔 쪽지만 접힌 자국을 따라 구겨진다.*

---

### `after3_reject_for_dain_3`
- 배경: `library_old.png`
- 다음: `after3_rival_yuna_done`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *별관 테이블 위에는 쪽지도, 유나의 가방도 보이지 않는다. 유나가 앉았던 자리에 테이크아웃 컵의 둥근 물 자국만 미지근하게 남아 있다.*

---

### `after3_rival_yuna_affinity`
- 배경: `library_old.png`
- 호감분기: Yuna
  - [35+] → `after3_rival_yuna_high`
  - [15+] → `after3_rival_yuna_mid`
  - [0+] → `after3_rival_yuna_cool`
  - [-19 이상] → `after3_rival_yuna_cool`
  - [기본] → `after3_rival_yuna_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_rival_yuna_high`
- 배경: `school_hallway.png`
- 다음: `after3_rival_yuna_done`

- 캐릭터: `yuna_sad.png`
**유나**: *유나는 펼치려던 책을 소리 없이 도로 덮는다.* 오늘은 다른 사람한테 가는구나. 응, 알겠어.

---

### `after3_rival_yuna_mid`
- 배경: `school_hallway.png`
- 다음: `after3_rival_yuna_done`

- 캐릭터: `yuna_normal.png`
**유나**: 알겠어. 난 별관에 가 있을게.

---

### `after3_rival_yuna_cool`
- 배경: `library_old.png`
- 다음: `after3_rival_yuna_done`

- 캐릭터: `yuna_bored.png`
**유나**: *유나는 쪽지 한 장 남기지 않고 별관 문을 조용히 닫는다.*

---

### `after3_rival_yuna_neg`
- 배경: `library_old.png`
- 다음: `after3_rival_yuna_done`

- 캐릭터: `없음`
**{name}**: *별관 구석 자리는 이미 비어 있다. 끼워 두던 책갈피도, 연보라색 쪽지도 흔적조차 없다.*

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
  - [30+] → `after3_seo_partial_1`
  - [0+] → `after3_seo_low_1`
  - [-19 이상] → `after3_seo_low_1`
  - [기본] → `after3_seo_neg_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_seo_partial_1`
- 배경: `student_room.png`
- 다음: `after3_seo_partial_2`

- 캐릭터: `seyoun_worried.png`
**{name}**: *학생회실 문을 열자 서연이 바닥에 떨어진 클립보드를 줍고 있다. 서연은 재빨리 눈가를 한 번 훔치고 의자를 바르게 세운다.*

---

### `after3_seo_partial_2`
- 배경: `student_room.png`
- 플래그: `seoyeon_day3_partial`
- 다음: `after3_seo_end`

- 캐릭터: `seyoun_normal.png`
**서연**: 오늘은 내 쪽에서 혼자 마음 정리할게. 대신 내일은 절대 피하지 마.

---

### `after3_seo_1`
- 배경: `student_room.png`
- BGM: `sunset1.mp3`
- 다음: `after3_seo_3`

- 캐릭터: `seyoun_sad.png`
**{name}**: *노크 끝에 학생회실 문을 열자, 노을빛이 비껴든 책상 위에 서연이 팔을 베고 엎드려 있다. 발치 바닥에는 늘 손에서 놓지 않던 클립보드가 맥없이 떨어져 있다.*

---

### `after3_seo_3`
- 배경: `student_room.png`
- 다음: `after3_seo_4`

- 캐릭터: `seyoun_sad.png`
**서연**: *문소리에 놀란 서연이 급히 상체를 일으킨다. 셔츠 깃의 리본이 살짝 풀려 있고 발갛게 달아오른 눈가 아래로 마스카라가 흐릿하게 번져 있다.*

---

### `after3_seo_4`
- 배경: `student_room.png`
- 다음: `after3_seo_5`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연은 내 시선을 피하며 바닥에 떨어진 클립보드를 구두 끝으로 책상 그늘 밑에 밀어 넣는다.*

---

### `after3_seo_5`
- 배경: `student_room.png`
- 다음: `after3_seo_5_b`

- 캐릭터: `seyoun_sad.png`
**{name}**: 서연아, 괜찮아?

---

### `after3_seo_5_b`
- 배경: `student_room.png`
- 다음: `after3_seo_6`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연이 떨리는 손가락으로 흐트러진 앞머리를 쓸어 내리며 물기 어린 목소리로 묻는다.* 방금, 다 봤어?

---

### `after3_seo_6`
- 배경: `student_room.png`
- 다음: `after3_seo_7`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연이 목에 걸린 숨을 가다듬으려 작게 헛기침을 한다.* 아무 일도 아니야. 방금 본 건 그냥 잊어 줘.

---

### `after3_seo_7`
- 배경: `student_room.png`
- 다음: `after3_seo_7_b`

- 캐릭터: `seyoun_sad.png`
**{name}**: 내가 뭘 봤다고 그래.

---

### `after3_seo_7_b`
- 배경: `student_room.png`
- 다음: `after3_seo_8`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연이 내 쪽으로 반 걸음 다가오다 멈춰 서며 손등으로 눈가를 꾹 누른다. 가쁜 숨결 사이로 뜨거운 열기가 훅 번진다.* 다른 사람도 아니고 너한테는, 이렇게 무너진 얼굴 절대 보여 주기 싫었는데.

---

### `after3_seo_8`
- 배경: `student_room.png`
- 다음: `after3_seo_9`

- 캐릭터: `seyoun_sad.png`
**서연**: *젖은 속눈썹 너머로 나를 올려다보는 눈동자가 흔들린다.* 오늘 이 모습은 누구한테도 말하지 말고 비밀로 해 줘.

---

### `after3_seo_9`
- 배경: `student_room.png`
- 다음: `after3_seo_choice`

- 캐릭터: `seyoun_sad.png`
**서연**: 잠깐만 숨 좀 고를게. *서연은 입술을 굳게 깨문 채 떨리는 손으로 클립보드를 집어 무릎 위에 올린다.*

---

### `after3_seo_choice`
- 배경: `student_room.png`
- 선택지:
  1. "누구나 그럴 때 있어. 너무 신경 쓰지 마." → `after3_seo_pity_trap_1` | Seoyeon -18 | 플래그: `seo_pity_broken`
  2. "방금? 아무것도 못 봤는데. 펜 떨어뜨려서 주우러 들어왔어." → `after3_seo_correct_1` | Seoyeon +9
  3. "네 약한 모습까지 전부 이해해줄게" → `after3_seo_overcare_react` | Seoyeon -14
  4. "이제부터는 내가 옆에서 다 챙겨줄게" → `after3_seo_overcare_react` | Seoyeon -16

- 캐릭터: `seyoun_sad.png`
**서연**: 오늘 본 건 여기까지만 해 줘. 대신 지금 이 방에선, 아무 일 없던 것처럼 평소대로 대해 줄래?

---

### `after3_seo_pity_trap_1`
- 배경: `student_room.png`
- 다음: `after3_seo_pity_trap_2`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연의 어깨가 딱딱하게 굳는다. 손등으로 번진 눈가를 피부가 붉어지도록 거칠게 문지른다.*

---

### `after3_seo_pity_trap_2`
- 배경: `student_room.png`
- 다음: `after3_seo_pity_trap_3`

- 캐릭터: `seyoun_sad.png`
**서연**: 누구나 그럴 때가 있다고?

---

### `after3_seo_pity_trap_3`
- 배경: `student_room.png`
- 다음: `after3_seo_pity_trap_4`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연의 목소리가 서늘하게 갈라진다.* 지금 그 말, 나한테 위로라고 건넨 거야?

---

### `after3_seo_pity_trap_4`
- 배경: `student_room.png`
- 다음: `after3_seo_pity_trap_5`

- 캐릭터: `seyoun_sad.png`
**서연**: 그런 눈으로 내려다보지 마. *서연이 고개를 휙 돌리며 손등으로 눈가를 다시 훔친다.*

---

### `after3_seo_pity_trap_5`
- 배경: `student_room.png`
- 다음: `after3_seo_pity_trap_6`

- 캐릭터: `seyoun_normal.png`
**서연**: 누구나 겪는 가벼운 일 취급하면서 어물쩍 넘기지 말아 줘. 난 지금 그런 뻔한 말 한마디로 괜찮아질 만큼 여유롭지 않아.

---

### `after3_seo_pity_trap_6`
- 배경: `student_room.png`
- 다음: `after3_seo_pity_trap_7`

- 캐릭터: `seyoun_worried.png`
**서연**: 동정받고 싶어서 빈 방에 숨어 있던 게 아니야. 지금은 한마디도 더 듣고 싶지 않아. *서연이 흐트러진 옷깃을 여미며 돌아선다. 하얀 손등에 검은 화장 자국이 선명하게 번져 있다.*

---

### `after3_seo_overcare_react`
- 배경: `student_room.png`
- 다음: `after3_seo_pity_trap_7`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연의 표정이 싸늘하게 굳는다.* 약한 모습까지 다 이해하고 옆에서 챙겨 주겠다고? 내가 방금 부탁한 건 동정이 아니라 평소처럼 대해 달라는 거였어.

---

### `after3_seo_pity_trap_7`
- 배경: `student_room.png`
- 다음: `after3_seo_pity_trap_8`

- 캐릭터: `seyoun_worried.png`
**서연**: 그만 나가 줄래? 학생회 결산 마저 끝내야 해.

---

### `after3_seo_pity_trap_8`
- 배경: `student_room.png`
- 다음: `after3_seo_pity_trap_9`

- 캐릭터: `seyoun_worried.png`
**{name}**: 서연아, 잠깐만.

---

### `after3_seo_pity_trap_9`
- 배경: `student_room.png`
- 다음: `after3_seo_pity_trap_10`

- 캐릭터: `seyoun_worried.png`
**서연**: *서연이 얼음장 같은 눈으로 말을 끊는다.* 학교 안에서는 **회장**이라고 불러.

---

### `after3_seo_pity_trap_10`
- 배경: `school_hallway.png`
- 플래그: `seoyeon_day3_event`, `seo_pity_broken`
- 다음: `after3_seo_end`

- 캐릭터: `없음`
**{name}**: *쫓겨나듯 학생회실 문을 닫고 나왔다. 텅 빈 복도 너머로 클립보드가 책상 위에 차갑게 던져지는 소리만 한 번 울렸다.*

---

### `after3_seo_correct_1`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_2`

- 캐릭터: `seyoun_sad.png`
**서연**: *클립보드 모서리를 쥔 서연의 손가락 마디가 하얗게 질린다. 서연은 숨을 죽인 채 내 다음 말을 기다린다.*

---

### `after3_seo_correct_2`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_3`

- 캐릭터: `seyoun_worried.png`
**{name}**: *나는 짐짓 태연하게 허리를 굽혀 서연의 책상 발치 밑으로 손을 뻗는다. 서연이 눈가를 추스를 시간을 벌기 위해 일부러 시선을 바닥에 둔 채 볼펜을 찾는 척 더듬는다.*

---

### `after3_seo_correct_3`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: 어, 여기 굴러가 있었네. 회장님 계시는 학생회실은 원래 볼펜이 이렇게 자꾸 증발하는 동네야?

---

### `after3_seo_correct_4`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_5`

- 캐릭터: `seyoun_worried.png`
**{name}**: *천천히 몸을 일으키며 서연의 의자 팔걸이 가까이 다가선다. 화장 자국을 닦아 낸 서연의 하얀 손등 위로 옅은 얼룩이 남아 있다.*

---

### `after3_seo_correct_5`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_6`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연이 짧게 숨을 고르더니 내 장단에 맞춰 목소리를 가다듬는다.* 학생회실 펜 사라지는 건 진짜 미스터리야. 1년에 30개씩은 감쪽같이 없어지거든.

---

### `after3_seo_correct_6`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_7`

- 캐릭터: `seyoun_normal.png`
**{name}**: 천하의 학생회장이 아직 그 범인도 못 잡았단 말이야?

---

### `after3_seo_correct_7`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_8`

- 캐릭터: `seyoun_laugh.png`
**서연**: *서연의 입술 사이로 결국 나지막한 웃음소리가 새어 나온다.* 볼펜 하나까지 일일이 색출하면 애들이 학생회를 너무 무서워하잖아.

---

### `after3_seo_correct_8`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_9`

- 캐릭터: `seyoun_pout.png`
**{name}**: 그 많은 펜들이 대체 어디로 숨는 건데? *실없는 농담을 이어 가며 책상 모서리에 걸터앉아, 서연의 호흡이 완전히 가라앉을 때까지 가만히 곁을 지킨다.*

---

### `after3_seo_correct_9`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_10`

- 캐릭터: `seyoun_normal.png`
**서연**: *한결 따뜻해진 눈빛으로 나를 올려다보던 서연이 내 교복 소매 끝을 손가락으로 살며시 잡는다.* {name}.

---

### `after3_seo_correct_10`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_11`

- 캐릭터: `seyoun_normal.png`
**{name}**: 응, 말해.

---

### `after3_seo_correct_11`
- 배경: `student_room.png`
- 다음: `after3_seo_correct_12`

- 캐릭터: `seyoun_shy.png`
**서연**: *서연이 내 팔뚝에 이마가 닿을 듯 가까이 고개를 숙이며 속삭인다. 살짝 풀린 셔츠 깃 사이로 달콤하고 뜨거운 숨결이 스친다.* 다음에 또 펜 잃어버리면 다른 데 가지 말고 무조건 여기부터 찾아와.

---

### `after3_seo_correct_12`
- 배경: `student_room.png`
- 플래그: `seoyeon_day3_event`, `seo_trust_deep`
- 다음: `after3_seo_freetalk`

- 캐릭터: `없음`
**{name}**: *서연은 아직 손의 온기가 남아 있는 다음 주 학생회 당번 일정표를 접어 내 손바닥 위에 가만히 밀어 넣었다.*

---

### `after3_seo_freetalk`
- 배경: `student_room.png`
- 타입: `free_talk`
- 다음: `after3_seo_end`
- 컨텍스트: "전학 사흘째 방과후 학생회실에서 마주 앉아 있다. 주인공은 울던 서연을 캐묻지 않고 펜을 줍는 척하며 평소처럼 농담했고 서연은 고맙다는 뜻으로 다음 주 일정표를 건넸다. 이 장면에서는 신뢰가 깊어졌다. 별도의 약속 갈등은 실제 플래그와 기억에 있을 때만 다룬다."
- 성격: "서연은 체면을 지켜 준 배려에 안도했다. 평소의 짧고 건조한 농담을 되찾으며 먼저 자리를 내준다. 울었던 이유를 곧바로 전부 털어놓지는 않는다."

- 캐릭터: `seyoun_normal.png`
**서연**: *서연이 클립보드를 책상 한편에 치워 두고 자기 바로 옆 의자를 바짝 끌어당긴다.* 급한 일 없으면 조금만 더 내 옆에 있다 가. 지금 혼자 남긴 싫어서 그래.

---

### `after3_seo_end`
- 분기:
  - [`harem_seed`] → `after3_final`
  - [`day3_has_multiple_dates`] → `after3_confront_1`
  - [기본] → `after3_final`

<!-- i18n -->

---

### `after3_yuna_affinity_check`
- 배경: `yuna_hideout_day.webp`
- 호감분기: Yuna
  - [40+] → `after3_yuna_1`
  - [30+] → `after3_yuna_partial_1`
  - [0+] → `after3_yuna_low_1`
  - [-19 이상] → `after3_yuna_low_1`
  - [기본] → `after3_yuna_neg_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_yuna_partial_1`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_partial_2`

- 캐릭터: `yuna_normal.png`
**{name}**: *별관 문은 열려 있지만 유나는 노트를 펼치지 않는다. 내 자리였던 맞은편 의자를 한 번 내려다봤다가 책상 밑으로 밀어 넣는다.*

---

### `after3_yuna_partial_2`
- 배경: `yuna_hideout_day.webp`
- 플래그: `yuna_day3_partial`
- 다음: `after3_yuna_end`

- 캐릭터: `yuna_shy.png`
**유나**: 오늘은 여기까지만 할래. 다음에 이야기하고 싶어지면 그때 내가 먼저 부를게.

---

### `after3_yuna_1`
- 배경: `yuna_hideout_day.webp`
- BGM: `night1.mp3`
- 다음: `after3_yuna_2`

- 캐릭터: `없음`
**{name}**: *도서관 별관 구석, 유나만의 비밀 독서 공간 앞에 멈춰 선다. 늘 닫혀 있던 나무 문이 오늘따라 반쯤 열려 있다.*

---

### `after3_yuna_2`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_4`

- 캐릭터: `없음`
**{name}**: *안쪽 소파에 유나는 보이지 않고 쿠션 위에 낡은 가죽 표지 노트 한 권만 펼쳐져 있다. 표지 안쪽에 적힌 유나의 이름 아래로 정갈한 손글씨가 페이지마다 빼곡하다.*

---

### `after3_yuna_4`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_5_b`

- 캐릭터: `없음`
**{name}**: *무심코 눈이 닿은 첫 페이지. '어느 날 전학생이 왔다. 그는 도서관 구석까지 찾아와 아무 말 없이 내 옆자리에 앉았다. 이상하게도 그 온기가 싫지 않았다.'*

---

### `after3_yuna_5_b`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_6`

- 캐릭터: `없음`
**{name}**: *문장 바로 아래, '교실 창가에서 겹친 시선'이라는 구절에 연보라색 잉크로 두 줄 밑줄이 그어져 있다.*

---

### `after3_yuna_6`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_7`

- 캐릭터: `yuna_normal.png`
**유나**: *등 뒤에서 낮고 서늘한 목소리가 떨어진다.* 거기서 뭐 해.

---

### `after3_yuna_7`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_8`

- 캐릭터: `yuna_normal.png`
**유나**: 너 줄 음료수 뽑아 왔는데 왜 그걸 내려다보고 있어? *문턱에 멈춰 선 유나의 시선이 내 손끝과 노트 사이에서 굳는다.*

---

### `after3_yuna_8`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_8b`

- 캐릭터: `yuna_shy.png`
**유나**: 그 노트는 안 돼.

---

### `after3_yuna_8b`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_9`

- 캐릭터: `yuna_shy.png`
**유나**: *유나가 단숨에 거리를 좁혀 다가오더니 내 손에서 노트를 낚아채듯 빼앗는다.* 아직 보라고 허락 안 했어.

---

### `after3_yuna_9`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_choice`

- 캐릭터: `yuna_shy.png`
**유나**: 내 손으로 직접 건네주려고 가져온 건데, 지금은 마음의 준비가 안 됐어. *유나가 노트를 가슴에 꼭 끌어안은 채 다른 손으로 내 손목을 꽉 붙잡는다. 창백하던 유나의 귓불이 새빨갛게 달아오른다.*

---

### `after3_yuna_choice`
- 배경: `yuna_hideout_day.webp`
- 선택지:
  1. "미안. 그래도 이거 내 이야기 맞지?" → `after3_yuna_decode_trap_1` | Yuna -22 | 플래그: `yuna_safe_zone_broken`
  2. "미안. 펼쳐진 첫 장만 봤어. 더 읽지는 않을게. 그런데 이 작가, 문장이 정말 좋다." → `after3_yuna_correct_1` | Yuna +10
  3. "걱정 마. 이 노트는 내가 대신 잘 보관할게" → `after3_yuna_control_react` | Yuna -15
  4. "이런 글은 앞으로 나한테만 보여줘" → `after3_yuna_control_react` | Yuna -18

- 캐릭터: `yuna_shy.png`
**{name}**: *내 손목을 붙든 유나의 손끝이 잘게 떨리고 있다. 코앞에서 마주친 보랏빛 눈동자가 흔들린다.*

---

### `after3_yuna_decode_trap_1`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_decode_trap_2`

- 캐릭터: `yuna_shy.png`
**유나**: *유나가 내 손목을 놓치듯 뿌리치며 가죽 노트를 가슴팍에 바짝 끌어안는다. 표지가 구겨질 만큼 손가락에 힘이 들어간다.*

---

### `after3_yuna_decode_trap_2`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_decode_trap_3`

- 캐릭터: `yuna_normal.png`
**유나**: 네 이야기 아니야.

---

### `after3_yuna_decode_trap_3`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_decode_trap_4`

- 캐릭터: `yuna_normal.png`
**{name}**: 아니긴 뭐가 아니야. 첫 줄에 전학생이라고 적혀 있고 교실 창가에서 책을 읽던 것도 딱 우리 얘기잖아.

---

### `after3_yuna_decode_trap_4`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_decode_trap_5`

- 캐릭터: `yuna_sad.png`
**유나**: *유나의 목소리가 날카롭게 찢어진다.* **아니라고 했잖아.**

---

### `after3_yuna_control_react`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_decode_trap_5`

- 캐릭터: `yuna_normal.png`
**유나**: *유나가 노트를 품 안으로 더 깊숙이 감춘다.* 이건 내 문장이고 내 노트야. 누구한테 보여 주고 누가 보관할지는 네가 아니라 내가 정해.

---

### `after3_yuna_decode_trap_5`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_decode_trap_6`

- 캐릭터: `yuna_sad.png`
**유나**: 내가 직접 아니라고 말하는데도 네 멋대로 넘겨짚을 거면 더 할 말 없어. *유나가 노트를 가방 가장 깊은 곳에 밀어 넣고 지퍼를 끝까지 당겨 닫는다.*

---

### `after3_yuna_decode_trap_6`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_decode_trap_7`

- 캐릭터: `yuna_sad.png`
**유나**: 그렇게 사람 속을 다 아는 척 파고드는 애들 때문에 내가 한 줄도 마음 편히 못 쓰는 거야.

---

### `after3_yuna_decode_trap_7`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_decode_trap_8`

- 캐릭터: `yuna_sad.png`
**{name}**: 유나야, 난 그냥 반가워서.

---

### `after3_yuna_decode_trap_8`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_decode_trap_9`

- 캐릭터: `yuna_sad.png`
**유나**: 현실에서도 모자라서 소설 문장 뒤로 숨은 것까지 들추면, 난 도대체 어디로 숨어야 하는데.

---

### `after3_yuna_decode_trap_9`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_decode_trap_10`

- 캐릭터: `yuna_sad.png`
**유나**: 지금은 네 목소리 더 못 듣겠어. *유나가 가방을 메고 내 어깨를 차갑게 스쳐 문가로 걸어간다.*

---

### `after3_yuna_decode_trap_10`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_decode_trap_11`

- 캐릭터: `yuna_sad.png`
**유나**: 이 방, 오늘부터 문 잠가 둘 거야.

---

### `after3_yuna_decode_trap_11`
- 배경: `yuna_hideout_day.webp`
- 플래그: `yuna_day3_event`, `yuna_safe_zone_broken`
- 다음: `after3_yuna_end`

- 캐릭터: `없음`
**{name}**: *복도를 울리는 유나의 발소리가 빠르게 멀어진다. 빈 소파 위에는 노트가 놓여 있던 눌린 자국과 식어 가는 음료수 캔만 덩그러니 남았다.*

---

### `after3_yuna_correct_1`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_correct_2`

- 캐릭터: `yuna_normal.png`
**유나**: *노트를 경계하듯 끌어안고 있던 유나의 손가락에서 천천히 힘이 빠진다.*

---

### `after3_yuna_correct_2`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_correct_3`

- 캐릭터: `yuna_normal.png`
**유나**: *유나가 속눈썹을 깜빡이며 낮게 되묻는다.* 이 작가?

---

### `after3_yuna_correct_3`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_correct_4`

- 캐릭터: `yuna_normal.png`
**{name}**: 응, 필사해 둔 노트 아니야? 어느 작가 소설인데? 아직 정식 출판은 안 된 작품인가 봐.

---

### `after3_yuna_correct_4`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_correct_5`

- 캐릭터: `yuna_shy.png`
**유나**: *유나가 내 시선을 피하지 않은 채 입술 끝을 아주 조금 올린다.* 글쎄, 아마 세상에 한 권밖에 없는 미출판 원고일걸.

---

### `after3_yuna_correct_5`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_correct_6`

- 캐릭터: `yuna_shy.png`
**{name}**: 그거 진짜 아깝다. 첫 문장부터 사람을 끌어당기는 힘이 있는데 서랍 속에만 묻혀 있으면 반칙이지.

---

### `after3_yuna_correct_6`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_correct_7`

- 캐릭터: `yuna_normal.png`
**유나**: 그 정도까지 칭찬할 글은 아닌데. 뒤로 갈수록 문장이 많이 흔들리거든. *유나가 품에서 노트를 내려놓고 구겨진 표지 모서리를 손바닥으로 천천히 쓸어 편다.*

---

### `after3_yuna_correct_7`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_correct_8`

- 캐릭터: `yuna_shy.png`
**유나**: *유나가 반 걸음 더 바짝 다가와 내 교복 셔츠 소매를 손끝으로 잡아당긴다.* 그렇게 궁금하면, 너한테만 빌려줄까?

---

### `after3_yuna_correct_8`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_correct_9`

- 캐릭터: `yuna_shy.png`
**{name}**: 진짜 빌려준다고? 원작자한테 허락도 안 받고?

---

### `after3_yuna_correct_9`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_correct_10`

- 캐릭터: `yuna_smile.png`
**유나**: 원작자도 너한테만큼은 읽히고 싶어 했다고 칠게.

---

### `after3_yuna_correct_10`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_correct_11`

- 캐릭터: `yuna_smile.png`
**유나**: 막상 내 손으로 쥐여 주려니까 심장이 좀 시끄럽네. 자, 다른 사람한텐 절대 보여 주지 마. *유나가 두 손으로 노트를 내밀며 내 손등 위에 자신의 차가운 손바닥을 겹쳐 올린다.*

---

### `after3_yuna_correct_11`
- 배경: `yuna_hideout_day.webp`
- 다음: `after3_yuna_correct_12`

- 캐릭터: `yuna_shy.png`
**{name}**: *노트가 내 손으로 완전히 넘어온 뒤에도 유나는 손을 떼지 않고 내 손목을 끌어당겨 자신의 달아오른 뺨 옆에 가만히 가져다 댄다.*

---

### `after3_yuna_correct_12`
- 배경: `yuna_hideout_day.webp`
- 플래그: `yuna_day3_event`, `yuna_trust_deep`
- 다음: `after3_yuna_freetalk`

- 캐릭터: `yuna_smile.png`
**유나**: *내 손바닥에 뜨거운 뺨을 비비듯 기댄 유나가 숨결 같은 목소리로 속삭인다.* 마지막 장까지 다 읽고 나면, 그 작가한테만 익명으로 감상 한 줄 남겨 줘.

---

### `after3_yuna_freetalk`
- 배경: `yuna_hideout_day.webp`
- 타입: `free_talk`
- 다음: `after3_yuna_end`
- 컨텍스트: "전학 사흘째 방과후 별관 독서실. 주인공이 허락 없이 첫 장을 본 일에 사과하고 더 읽지 않겠다고 하자 유나는 직접 노트를 빌려주었다. 노트는 주인공이 들고 있으며 아직 나머지를 읽지 않았다. 유나는 다 읽은 뒤 익명으로 한 줄 감상을 부탁했다. 둘은 소파에서 대면으로 이야기한다."
- 성격: "유나는 자기 글을 처음 맡긴 상대가 신경 쓰인다. 부끄러우면 작가를 남인 것처럼 말하기도 하지만 방금 내준 신뢰를 이유 없이 거두지 않는다. 짧은 질문과 조용한 농담으로 대화를 잇는다."

- 캐릭터: `yuna_normal.png`
**유나**: *유나는 내 손에 들린 노트를 한 번 확인하고는 좁은 소파 옆자리를 톡톡 두드린다.* 여기서 바로 펼치진 말고. 문 닫아 뒀으니까 조금만 더 나랑 얘기하다 가.

---

### `after3_yuna_end`
- 분기:
  - [`harem_seed`] → `after3_final`
  - [`day3_has_multiple_dates`] → `after3_confront_1`
  - [기본] → `after3_final`

<!-- i18n -->

---

### `after3_dain_affinity_check`
- 배경: `gym.png`
- 호감분기: Dain
  - [40+] → `after3_dain_1`
  - [30+] → `after3_dain_partial_1`
  - [0+] → `after3_dain_low_1`
  - [-19 이상] → `after3_dain_low_1`
  - [기본] → `after3_dain_neg_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_dain_partial_1`
- 배경: `gym.png`
- 다음: `after3_dain_partial_2`

- 캐릭터: `dain_sweat.png`
**{name}**: *체육관 벤치에서 다인이 오른쪽 무릎 보호대를 고쳐 찬다. 나를 보고 일어서려다 다시 벤치에 주저앉는다.*

---

### `after3_dain_partial_2`
- 배경: `gym.png`
- 플래그: `dain_day3_partial`
- 다음: `after3_dain_end_first`

- 캐릭터: `dain_normal.png`
**다인**: 조금만 앉아서 쉬면 금방 나아. 오늘은 신경 쓰지 말고 먼저 가, 내일 교실에서 보자.

---

### `after3_dain_1`
- 배경: `gym.png`
- BGM: `daily2.mp3`
- 다음: `after3_dain_3`

- 캐릭터: `dain_sweat.png`
**{name}**: *텅 빈 체육관 코트에서 다인이 혼자 점프 서브 연습을 하고 있다. 공을 강하게 때린 뒤 착지하는 순간 오른쪽 무릎이 꺾이며 다인의 몸이 코트 바닥으로 크게 기운다.*

---

### `after3_dain_3`
- 배경: `dain_hurt_event1.png`
- 다음: `after3_dain_4`

- 캐릭터: `없음`
**{name}**: 다인아, 괜찮아?!

---

### `after3_dain_4`
- 배경: `gym.png`
- 다음: `after3_dain_5`

- 캐릭터: `dain_sweat.png`
**다인**: *다인이 반사적으로 인상을 펴며 자리에서 벌떡 일어난다.* 어, 깜짝이야! 언제 들어왔어? 난 멀쩡해, 그냥 스텝이 살짝 꼬여서 삐끗한 거야.

---

### `after3_dain_5`
- 배경: `gym.png`
- 다음: `after3_dain_5_b`

- 캐릭터: `dain_sweat.png`
**{name}**: 방금 착지할 때 다리 풀렸잖아. 전혀 괜찮아 보이지 않는데.

---

### `after3_dain_5_b`
- 배경: `gym.png`
- 다음: `after3_dain_6`

- 캐릭터: `dain_sweat.png`
**다인**: 에이, 배구하다 보면 이 정도는 일상이라니까. 진짜 아무렇지도 않아.

---

### `after3_dain_6`
- 배경: `gym.png`
- 다음: `after3_dain_choice`

- 캐릭터: `dain_laugh.png`
**다인**: *태연하게 말을 마친 뒤에야 다인이 숨이 차오르는지 한 박자 늦게 호탕한 웃음을 터뜨린다.*

---

### `after3_dain_choice`
- 배경: `gym.png`
- 선택지:
  1. "역시 무리였네. 대회는 포기하고 오늘은 쉬어." → `after3_dain_pity_trap_1` | Dain -20 | 플래그: `pitied_dain`
  2. "그럼 여기 있을게. 말하고 싶을 때 말해." → `after3_dain_correct_1` | Dain +10
  3. "네가 무리하지 않게 내가 대신 결정해줄게" → `after3_dain_control_react` | Dain -15
  4. "걱정 마. 이제부터 내가 계속 지켜볼게" → `after3_dain_control_react` | Dain -17

- 캐릭터: `dain_sad.png`
**다인**: *코트 구석 벤치에 걸터앉은 다인의 손바닥이 운동복 반바지 아래 드러난 오른쪽 무릎을 계속해서 문지르고 있다.*

---

### `after3_dain_pity_trap_1`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_2`

- 캐릭터: `dain_sad.png`
**다인**: *무릎을 문지르던 다인의 손이 우뚝 멈춘다. 고개를 들어 나를 올려다보는 눈빛이 서늘하게 가라앉아 있다.*

---

### `after3_dain_pity_trap_2`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_3`

- 캐릭터: `dain_sad.png`
**다인**: 무리였다고? 대회를 포기하라고?

---

### `after3_dain_pity_trap_3`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_4`

- 캐릭터: `dain_angry.png`
**다인**: 야, 너 말을 왜 그렇게 쉽게 하냐. 무리한 거 아니라고 했잖아. 방금은 그냥 점프 자세가 흔들려서 그런 거라고.

---

### `after3_dain_control_react`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_4`

- 캐릭터: `dain_sad.png`
**다인**: *다인의 눈매가 사납게 좁혀진다.* 왜 네가 내 대신 결정하겠다고 나서는데. 옆에서 감시하듯 지켜봐 달라고 부탁한 적도 없어.

---

### `after3_dain_pity_trap_4`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_5`

- 캐릭터: `dain_angry.png`
**{name}**: *다인이 스포츠 가방을 거칠게 집어 들고 일어서다 오른쪽 다리에 체중이 실리자 어금니를 꽉 깨문다.*

---

### `after3_dain_pity_trap_5`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_6`

- 캐릭터: `dain_sad.png`
**다인**: 제발 너까지 나를 그런 눈으로 보지 마.

---

### `after3_dain_pity_trap_6`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_7`

- 캐릭터: `dain_sad.png`
**{name}**: 그런 눈이라니, 내가 어쨌는데.

---

### `after3_dain_pity_trap_7`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_8`

- 캐릭터: `dain_sad.png`
**다인**: 보건실이나 코치님이 날 볼 때 짓는 얼굴 말이야. 끝난 선수 보듯 불쌍해하는 그 표정.

---

### `after3_dain_pity_trap_8`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_9`

- 캐릭터: `dain_sad.png`
**다인**: 그만 돌아가. 나도 오늘 연습 끝났으니까 갈 거야. *다인이 오른쪽 운동화를 무겁게 끌며 출입문 쪽으로 걸어간다.*

---

### `after3_dain_pity_trap_9`
- 배경: `gym.png`
- 다음: `after3_dain_pity_trap_10`

- 캐릭터: `dain_sad.png`
**다인**: 다른 사람은 몰라도, 너한테까지 포기하란 소리는 죽어도 듣고 싶지 않았어.

---

### `after3_dain_pity_trap_10`
- 배경: `gym.png`
- 플래그: `dain_day3_event`, `dain_pity_broken`
- 다음: `after3_dain_departed_end`

- 캐릭터: `없음`
**{name}**: *철제 체육관 문이 무겁게 닫힌다. 텅 빈 벤치 위에는 다인이 미처 챙기지 못한 땀 젖은 손목 보호대만 남아 있다.*

---

### `after3_dain_correct_1`
- 배경: `gym.png`
- 다음: `after3_dain_correct_2`

- 캐릭터: `dain_sad.png`
**다인**: *다인은 부어오른 무릎을 감싸 쥔 손을 떼지도 못한 채 놀란 눈으로 나를 바라본다.*

---

### `after3_dain_correct_2`
- 배경: `gym.png`
- 다음: `after3_dain_correct_3`

- 캐릭터: `dain_normal.png`
**다인**: *다인이 나를 돌아본다.* 야.

---

### `after3_dain_correct_3`
- 배경: `gym.png`
- 다음: `after3_dain_correct_4`

- 캐릭터: `dain_normal.png`
**{name}**: 응, 듣고 있어.

---

### `after3_dain_correct_4`
- 배경: `gym.png`
- 다음: `after3_dain_correct_5`

- 캐릭터: `dain_shy.png`
**다인**: 너 진짜 사람 이상하게 만든다.

---

### `after3_dain_correct_5`
- 배경: `gym.png`
- 다음: `after3_dain_correct_6`

- 캐릭터: `dain_shy.png`
**{name}**: 이상하다는 게 좋은 뜻이야, 나쁜 뜻이야?

---

### `after3_dain_correct_6`
- 배경: `gym.png`
- 다음: `after3_dain_correct_7`

- 캐릭터: `dain_shy.png`
**다인**: *다인이 힘없이 웃으며 고개를 숙인다.* 몰라, 나도 헷갈려. 근데 조금만 더 내 옆에 있어 줘. 지금 이 넓은 체육관에 혼자 남기는 진짜 싫거든.

---

### `after3_dain_correct_7`
- 배경: `gym.png`
- 다음: `after3_dain_correct_8`

- 캐릭터: `dain_sad.png`
**다인**: 거기 우두커니 서 있으면 내가 자꾸 고개 들어서 올려다봐야 하잖아. 이리 와서 바짝 앉아. *다인이 벤치 안쪽을 좁혀 자리를 내주며 발치의 배구공을 코트 밖으로 굴려 보낸다.*

---

### `after3_dain_correct_8`
- 배경: `gym.png`
- 다음: `after3_dain_correct_9`

- 캐릭터: `dain_laugh.png`
**다인**: *내가 옆에 앉자 다인의 뜨거운 어깨가 내 팔에 찰싹 달라붙는다.* 그냥 아무 얘기나 좀 하자.

---

### `after3_dain_correct_9`
- 다음: `after3_dain_correct_10`

<!-- i18n -->

---

### `after3_dain_correct_10`
- 배경: `gym.png`
- 다음: `after3_dain_correct_11`

- 캐릭터: `dain_laugh.png`
**다인**: 나 원래 누구한테 약한 소리 죽어도 안 하거든. 그래서 어디부터 꺼내야 할지 입이 안 떨어지네.

---

### `after3_dain_correct_11`
- 배경: `gym.png`
- 다음: `after3_dain_correct_12`

- 캐릭터: `dain_pain.png`
**다인**: 가만히 앉아 있으면 그나마 참을 만한데. *다인이 오른쪽 다리를 천천히 뻗어 보려다 욱신거리는 통증에 숨을 삼키며 내 교복 셔츠 옆구리 자락을 꽉 움켜쥔다.*

---

### `after3_dain_correct_12`
- 배경: `gym.png`
- 다음: `after3_dain_dilemma_tell`

- 캐릭터: `dain_sad.png`
**{name}**: 다인아, 네 무릎 얘기부터 솔직하게 해 주면 안 돼?

---

### `after3_dain_dilemma_tell`
- 배경: `gym.png`
- 다음: `after3_dain_dilemma_tell_2`

- 캐릭터: `dain_normal.png`
**다인**: *내 어깨에 이마를 기댄 채 가쁜 숨을 고르던 다인이 움찔한다.* 뭐?

---

### `after3_dain_dilemma_tell_2`
- 배경: `gym.png`
- 다음: `after3_dain_dilemma_tell_3`

- 캐릭터: `dain_sad.png`
**{name}**: 오른쪽 무릎 말이야. 아침에 교문 뛸 때부터 신경 쓰였고 아까부터 계속 문지르고 있잖아. 이거 오늘 잠깐 삐끗한 거 아니지?

---

### `after3_dain_dilemma_tell_3`
- 배경: `gym.png`
- 다음: `after3_dain_dilemma_tell_4`

- 캐릭터: `dain_sad.png`
**{name}**: *다인은 대답 대신 내 셔츠 자락을 쥔 손에 힘을 주며 입술을 잘게 깨문다.*

---

### `after3_dain_dilemma_tell_4`
- 배경: `gym.png`
- 다음: `after3_dain_dilemma_tell_5`

- 캐릭터: `dain_sad.png`
**다인**: 다 눈치채고 있었으면서 왜 말로 꺼내. 바로 다음 주가 봄 대회 예선인 거 너도 알잖아.

---

### `after3_dain_dilemma_tell_5`
- 배경: `gym.png`
- 다음: `after3_dain_dilemma_tell_6`

- 캐릭터: `dain_sad.png`
**{name}**: 당장 다음 주 대회보다 네가 앞으로 계속 배구할 수 있는 무릎이 훨씬 더 중요하니까 그렇지.

---

### `after3_dain_dilemma_tell_6`
- 배경: `gym.png`
- 다음: `after3_dain_dilemma_tell_7`

- 캐릭터: `dain_angry.png`
**다인**: 무엇이 더 중요한지는 선수인 내가 정하는 거야, 네가 아니라.

---

### `after3_dain_dilemma_tell_7`
- 배경: `gym.png`
- 다음: `after3_dain_dilemma_tell_8`

- 캐릭터: `dain_angry.png`
**다인**: 손이 떨려서 운동화 끈 하나도 제대로 못 묶겠네. 이런 꼴 봤다고 네 마음대로 판단하지 마. *다인이 무릎을 짚은 채 내 품 안쪽으로 고개를 숙인다. 달아오른 목덜미에서 땀 내음 섞인 뜨거운 열기가 훅 끼친다.*

---

### `after3_dain_dilemma_tell_8`
- 배경: `gym.png`
- 다음: `after3_dain_dilemma_final`

- 캐릭터: `dain_sad.png`
**다인**: *떨리는 목소리가 내 가슴팍에 바로 울린다.* 제발 부탁이야. 내 무릎 얘기는 코치님한테도, 보건선생님한테도 절대 말하지 마.

---

### `after3_dain_dilemma_final`
- 배경: `gym.png`
- 선택지:
  1. "미안. 근데 말할 거야." → `after3_dain_tell_confirm` | Dain -20 | 플래그: `told_about_dain_knee`
  2. "알겠어. 네가 직접 말해. 대신 보건실엔 같이 갈게." → `after3_dain_tell_retreat` | Dain +4 | 플래그: `dain_planned_nurse_visit`
  3. "선생님께는 내가 잘 설명할게. 넌 쉬기만 해" → `after3_dain_tell_confirm` | Dain -12
  4. "네가 망설이면 내가 먼저 말해주는 게 낫겠어" → `after3_dain_tell_confirm` | Dain -15

- 캐릭터: `dain_sad.png`
**다인**: 나 지금 평소처럼 장난치는 거 아니야. 웃으면서 얼버무릴 힘도 안 남았어. 약속해 준다고 대답해 줘. *젖은 눈가를 닦을 생각도 없이 다인이 내 눈을 절박하게 올려다본다.*

---

### `after3_dain_tell_confirm`
- 배경: `gym.png`
- 다음: `after3_dain_tell_confirm_2`

- 캐릭터: `dain_angry.png`
**다인**: *내 셔츠를 쥐고 있던 다인의 손이 차갑게 떨어진다.* 너 진짜 최악이다.

---

### `after3_dain_tell_confirm_2`
- 배경: `gym.png`
- 다음: `after3_dain_tell_confirm_3`

- 캐릭터: `dain_angry.png`
**다인**: *다인은 스포츠 가방을 거칠게 둘러메고는 단 한 번도 뒤돌아보지 않은 채 나간다. 체육관 철문이 귀가 먹먹할 만큼 쾅 닫힌다.*

---

### `after3_dain_tell_confirm_3`
- 배경: `gym.png`
- 플래그: `dain_day3_event`
- 다음: `after3_dain_departed_end`

- 캐릭터: `없음`
**{name}**: *절뚝거리며 멀어지는 다인의 발소리가 닫힌 문 너머로 사라진다. 텅 빈 코트에 홀로 남겨지자 다인의 체온이 닿았던 어깨가 순식간에 싸늘하게 식는다.*

---

### `after3_dain_departed_end`
- 분기:
  - [`harem_seed`] → `after3_final`
  - [`day3_has_multiple_dates`] → `after3_confront_1`
  - [기본] → `after3_final`

<!-- i18n -->

---

### `after3_dain_tell_retreat`
- 배경: `gym.png`
- 다음: `after3_dain_choice1`

- 캐릭터: `dain_sad.png`
**다인**: *다인이 참았던 숨을 길게 토해 내며 내 어깨에 이마를 툭 기댄다.* 진짜로, 내가 마음먹고 직접 입 열 때까지 기다려 줄 거야?

---

### `after3_dain_choice1`
- 배경: `gym.png`
- 다음: `after3_dain_choice1_2`

- 캐릭터: `dain_sad.png`
**{name}**: *대답을 재촉하는 대신 풀어져 있던 다인의 운동화 끈을 조용히 고쳐 묶어 주고 다시 옆에 앉는다. 다인이 가만히 내 옆얼굴을 바라본다.*

---

### `after3_dain_choice1_2`
- 배경: `gym.png`
- 다음: `after3_dain_choice1_3`

- 캐릭터: `dain_sad.png`
**다인**: 언제부터 아팠냐고 왜 더 안 캐물어?

---

### `after3_dain_choice1_3`
- 배경: `gym.png`
- 다음: `after3_dain_choice1_react`

- 캐릭터: `dain_shy.png`
**{name}**: 네가 마음의 준비가 되면 그때 제일 먼저 말해 준다고 했잖아.

---

### `after3_dain_choice1_react`
- 배경: `gym.png`
- 다음: `after3_dain_choice1_react2`

- 캐릭터: `dain_shy.png`
**다인**: 내가 준비됐을 때 말하라는 거지. 지금 당장 변명하듯 다 털어놓으라는 게 아니라. *다인이 울컥 차오르는 숨을 삼키며 입술을 깨물다가, 손등으로 젖은 눈가를 쓱 문지르고 웃는다.*

---

### `after3_dain_choice1_react2`
- 배경: `gym.png`
- 다음: `after3_dain_choice1_react3`

- 캐릭터: `dain_shy.png`
**다인**: 고마워. 네가 방금 다그쳤으면 난 또 오기 부리면서 아무렇지도 않다고 거짓말했을 거야.

---

### `after3_dain_choice1_react3`
- 배경: `gym.png`
- 플래그: `dain_day3_event`, `dain_trust_deep`
- 다음: `after3_dain_freetalk`

- 캐릭터: `dain_shy.png`
**다인**: *다인의 뜨거운 손가락이 벤치 위에서 내 손등을 살며시 덮어 쥔다.* 나 보건실 내려갈 때, 문 앞까지만이라도 꼭 옆에 같이 있어 줘.

---

### `after3_dain_freetalk`
- 배경: `gym.png`
- 타입: `free_talk`
- 다음: `after3_dain_end_check`
- 컨텍스트: "전학 사흘째 방과후 체육관 벤치. 다인은 오른쪽 무릎이 계속 아픈 것을 인정했고 주인공은 대신 결정하지 않고 다인이 직접 말할 때까지 기다리기로 했다. 다인은 보건실에 갈 때 함께 있어 달라고 부탁했다. 아직 진료를 받거나 대회 출전을 결정한 것은 아니다. 둘은 앉아서 대면으로 이야기한다."
- 성격: "다인은 에너지 넘치고 솔직한 배구부 선수다. 상처나 불안이 있어도 관계를 피하지 않으며 느끼는 감정과 궁금한 점을 자기 방식으로 드러낸다."

- 캐릭터: `dain_normal.png`
**다인**: *다인이 손목 보호대를 고쳐 매며 내 쪽으로 몸을 바짝 기울인다. 붉어진 눈가 아래로 익숙한 장난기가 반 박자 늦게 돌아온다.* 기다려 줘서 고마워. 이번엔 내가 먼저 말 걸게.

---

### `after3_dain_end_check`
- 분기:
  - [`chose_dain_after2`] → `after3_dain_end`
  - [기본] → `after3_dain_end_first`

<!-- i18n -->

---

### `after3_dain_end`
- 배경: `gym.png`
- 분기:
  - [`harem_seed`] → `after3_final`
  - [`day3_has_multiple_dates`] → `after3_confront_1`
  - [기본] → `after3_final`

- 캐릭터: `dain_shy.png`
**다인**: *다인이 평소처럼 주먹을 쥐어 내 어깨에 툭 갖다 대지만 어제처럼 밀어내는 힘 대신 따뜻한 온기만 길게 머문다.*

---

### `after3_dain_end_first`
- 배경: `gym.png`
- 분기:
  - [`harem_seed`] → `after3_final`
  - [`day3_has_multiple_dates`] → `after3_confront_1`
  - [기본] → `after3_final`

- 캐릭터: `dain_shy.png`
**다인**: *다인이 내 어깨를 주먹으로 가볍게 툭 치고는 쑥스러운 듯 손을 운동복 주머니에 찔러 넣는다.*

---

### `after3_confront_1`
- 배경: `school_hallway.png`
- BGM: `stop`
- BGM fade out: `1s`
- Ambience: `none`
- 플래그: `day3_caught_multiple_dates`
- 다음: `after3_confront_2`

- 캐릭터: `seyoun_sad.png`
**{name}**: *방과 후 일정을 마치고 복도로 나오자, 서연이 창가 그늘에서 팔짱을 낀 채 나를 기다리고 있다. 가늘고 긴 손가락이 자신의 팔뚝을 일정한 박자로 두드린다.*

---

### `after3_confront_2`
- 배경: `school_hallway.png`
- 다음: `after3_confront_3`

- 캐릭터: `seyoun_sad.png`
**서연**: {name}. 그냥 가지 말고 잠깐 나 좀 봐.

---

### `after3_confront_3`
- 배경: `school_stairwell.png`
- SFX: `synth:door`
- 다음: `after3_confront_4`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연이 학생들의 눈을 피해 복도 맨 끝의 인적 없는 계단참으로 나를 데려간다.*

---

### `after3_confront_4`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_5`

- 캐릭터: `seyoun_sad.png`
**서연**: 오늘 점심시간에 나왔던 주말 약속 얘기 말이야.

---

### `after3_confront_5`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_5_b`

- 캐릭터: `seyoun_sad.png`
**서연**: 네가 다인이랑 유나한테도 똑같은 온도로 웃어 주며 약속을 잡았다는 걸 알았을 때, 나 혼자만 특별한 줄 알고 설렜던 게 너무 비참했어.

---

### `after3_confront_5_b`
- 배경: `school_stairwell.png`
- BGM: `mystery.mp3`
- 다음: `after3_confront_5_c`

**다인**: *계단 아래쪽에서 다가온 다인이 난간을 짚으며 낮게 거든다.* 그건 나도 마찬가지야. 솔직히 기분 많이 나빴어.

---

### `after3_confront_5_c`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_6`

**다인**: 주말에 보자고 했던 말, 난 장난 아니었거든. 지금 이 순간만큼은 농담으로 얼버무리지 말아 줘. *다인이 운동화 앞코로 계단참 바닥을 꾹 누른다.*

---

### `after3_confront_6`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_choice`

**서연**: 점심때 왜 한마디 설명도 못 했어? 한 주말에 여러 사람 약속을 동시에 잡아 놓고 어떻게 감당하려고 그랬던 거야?

---

### `after3_confront_choice`
- 배경: `school_stairwell.png`
- 선택지:
  1. "솔직하게 인정한다" → `after3_confront_admit` | Seoyeon -5
  2. "시간대가 다르니까 괜찮을 줄 알았어" → `after3_confront_excuse` | Seoyeon -8
  3. "서연만이야" → `after3_confront_lie_b` | Seoyeon -3 | 플래그: `conscience_minus`

**서연**: 이번에는 피하지 말고 네 입으로 똑바로 말해. 우리 쪽에서 대신 정리해 줄 수는 없잖아. *서연이 숨 막히는 침묵 속에서 반 걸음 물러서며 내 눈을 쏘아본다.*

---

### `after3_confront_admit`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_admit_b`

**서연**: 결국 누구한테도 미움받기 싫어서 거절을 못 했다는 거네.

---

### `after3_confront_admit_b`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_admit_2`

**서연**: *서연은 고개를 숙여 손에 들린 도시락 가방 손잡이만 차갑게 내려다본다.*

---

### `after3_confront_admit_2`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_admit_3`

**서연**: *서연의 눈가에 투명한 물기가 차오른다.* 미안하다는 변명보다, 이제 그 겹친 약속들을 네가 어떻게 책임질 건지 그걸 듣고 싶어.

---

### `after3_confront_admit_3`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_admit_4`

**서연**: 그냥 솔직하게 사과 한마디 하면 우리가 다 이해하고 넘어갈 줄 알았어? 난 이번 주말 약속이 어떻게 되는지 물었잖아. *서연이 도시락 가방 손잡이를 가죽이 뒤틀릴 만큼 세게 쥐어짠다.*

---

### `after3_confront_admit_4`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_admit_4_b`

**서연**: 나쁜 사람 되기 싫어서 선택을 우리 몫으로 떠넘긴 거잖아. 그건 다정한 게 아니라 비겁한 거야.

---

### `after3_confront_admit_4_b`
- 배경: `school_hallway.png`
- 다음: `after3_confront_admit_5`

**서연**: *서연은 눈물을 보이지 않으려 재빨리 몸을 돌려 복도 문손잡이를 잡는다.*

---

### `after3_confront_admit_5`
- 배경: `school_hallway.png`
- 다음: `after3_confront_admit_6`

**서연**: 오늘 저녁엔 옥상 문 안 열어 둘 거야. 올라오지 마.

---

### `after3_confront_admit_6`
- 다음: `after3_confront_end`

<!-- i18n -->

---

### `after3_confront_excuse`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_excuse_b`

**서연**: *서연의 목소리가 계단참의 공기를 날카롭게 벤다.* 아직도 그게 시간 배분 문제라고 생각하는 거야?

---

### `after3_confront_excuse_b`
- 다음: `after3_confront_excuse_2`

<!-- i18n -->

---

### `after3_confront_excuse_2`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_excuse_2_b`

**서연**: 네가 몇 명을 만날 체력이 되느냐가 문제가 아니야. 너한테 나와 잡은 약속이 고작 그 정도 무게밖에 안 됐다는 게 화가 나는 거라고.

---

### `after3_confront_excuse_2_b`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_end`

**서연**: *서연은 더 하려던 말을 삼키듯 입술을 세게 깨물고 클립보드를 가슴 쪽으로 끌어안는다.*

---

### `after3_confront_lie_b`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_lie`

**서연**: {name}, 시선 피하지 말고 내 눈 똑바로 보고 말해. *서연이 가슴을 가리던 클립보드를 내린다.*

---

### `after3_confront_lie`
- 배경: `school_stairwell.png`
- 다음: `after3_confront_lie_2`

**서연**: *서연의 목소리가 애처롭게 떨린다.* 정말 나뿐이야? 지금 그 말, 내가 믿어도 되는 거지?

---

### `after3_confront_lie_2`
- 배경: `school_hallway.png`
- 다음: `after3_confront_lie_2_b`

**서연**: *서연은 내 대답을 끝까지 듣지 못한 채 돌아서서 복도 끝으로 걸어간다. 클립보드를 쥔 손등의 핏줄은 끝내 풀리지 않는다.*

---

### `after3_confront_lie_2_b`
- 다음: `after3_confront_end`

<!-- i18n -->

---

### `after3_confront_end`
- 배경: `school_hallway.png`
- 다음: `after3_final`

**서연**: *서연이 노을이 식어 가는 텅 빈 복도 끝으로 멀어진다. 꼿꼿하게 세운 등 너머로 잘게 떨리는 주먹만 눈에 밟힌다.*

---

### `after3_seo_skip`
- 배경: `student_room.png`
- 호감분기: Seoyeon
  - [0+] → `after3_seo_low_1`
  - [-19 이상] → `after3_seo_low_1`
  - [기본] → `after3_seo_neg_1`
- 다음: `after3_seo_neg_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_seo_low_1`
- 배경: `student_room.png`
- 플래그: `day3_kept_distance`
- 다음: `after3_final`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연은 학생회실 문을 반쯤만 연 채 복도 쪽으로 나선다.* 아직 우리가 방과 후에 단둘이 따로 만날 사이는 아닌 것 같아. 주말 약속도 없던 걸로 하자.

---

### `after3_seo_neg_1`
- 배경: `student_room.png`
- 플래그: `day3_kept_distance`
- 다음: `after3_final`

- 캐릭터: `seyoun_pout.png`
**서연**: *학생회실 문을 잠그고 열쇠를 주머니에 넣는다.* 오늘 볼일은 여기까지야. 주말 약속 이야기도 꺼내지 마.

---

### `after3_yuna_skip`
- 배경: `yuna_hideout_day.webp`
- 호감분기: Yuna
  - [0+] → `after3_yuna_low_1`
  - [-19 이상] → `after3_yuna_low_1`
  - [기본] → `after3_yuna_neg_1`
- 다음: `after3_yuna_neg_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_yuna_low_1`
- 배경: `yuna_hideout_day.webp`
- 플래그: `day3_kept_distance`
- 다음: `after3_final`

- 캐릭터: `yuna_normal.png`
**유나**: *별관 문 앞에서 유나가 가방을 고쳐 멘다.* 이렇게 단둘이 따로 만나는 건 아직 좀 버거워. 이번 주말엔 그냥 혼자 있을래.

---

### `after3_yuna_neg_1`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `lights-off`
- 플래그: `day3_kept_distance`
- 다음: `after3_final`

- 캐릭터: `yuna_bored.png`
**유나**: *별관 스탠드 조명을 딸깍 끈다.* 오늘은 아무도 안 만나고 혼자 있을게.

---

### `after3_dain_skip`
- 배경: `gym.png`
- 호감분기: Dain
  - [0+] → `after3_dain_low_1`
  - [-19 이상] → `after3_dain_low_1`
  - [기본] → `after3_dain_neg_1`
- 다음: `after3_dain_neg_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after3_dain_low_1`
- 배경: `gym.png`
- 플래그: `day3_kept_distance`
- 다음: `after3_final`

- 캐릭터: `dain_normal.png`
**다인**: *다인은 체육관 문손잡이를 잡은 채 안으로 들어오라고 하지 않는다.* 단둘이 따로 놀러 가는 건 우리 좀 더 친해진 다음에 하자. 이번 주말엔 혼자 연습할게.

---

### `after3_dain_neg_1`
- 배경: `gym.png`
- 플래그: `day3_kept_distance`
- 다음: `after3_final`

- 캐릭터: `dain_angry.png`
**다인**: *배구 네트 줄을 단단히 감아 매고 가방을 둘러멘다.* 오늘은 나 빼고 가. 따로 부르지도 말고.

---

### `after3_final`
- 배경: `school_hallway.png`
- 다음: `after3_group_route_check`

- 캐릭터: `없음`
**{name}**: *길었던 방과 후 시간이 끝났다. 복도 천장의 형광등이 하나씩 차례로 꺼진다.*

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
**담임선생님**: *창문이 열린 교실 교탁 위에 문예 행사 원고 뭉치와 다른 부서 자료가 나란히 놓인다.* 해 지기 전에 한쪽 일만 끝내기에도 시간이 빠듯하네. 누구 일부터 먼저 도울래?

---

### `after3_group_nurse_companion`
- 배경: `nurse_room.png`
- 타입: `group_free_talk`
- 다음: `after3_group_return`

- 캐릭터: `없음`
**보건선생님**: *보건실 책상 위에 운동부 건강 점검표와 응급 비품 상자가 나란히 놓인다.* 둘 다 오늘 퇴근 전엔 확인해야 하는데 시간이 겹쳤네. 어느 쪽 일부터 먼저 손볼까?

---

### `after3_group_return`
- 배경: `school_hallway.png`
- 다음: `haeun_check`

- 캐릭터: `없음`
**{name}**: *남은 일손 돕기를 마치고 저물어 가는 복도로 나온다.*

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
- 분기:
  - [`day3_has_multiple_dates`] → `minsu_d3_1`
  - [기본] → `night3_start`

**{name}**: ‹빈›

---

### `minsu_d3_1`
- 배경: `school.png`
- 다음: `minsu_d3_2`

- 캐릭터: `minsu_normal.png`
**{name}**: *하교하려는 길, 어스름이 내려앉은 교문 기둥 앞에 민수가 가방을 멘 채 서 있다.*

---

### `minsu_d3_2`
- 배경: `school.png`
- 다음: `minsu_d3_3`

- 캐릭터: `minsu_normal.png`
**민수**: 야, 나 아까 다 봤다.

---

### `minsu_d3_3`
- 배경: `school.png`
- 다음: `minsu_d3_4`

- 캐릭터: `minsu_normal.png`
**민수**: 점심시간 교실 분위기랑, 방금 복도에서 걸어 나오던 서연이 얼굴까지.

---

### `minsu_d3_4`
- 분기:
  - [`chose_seoyeon_lunch && chose_seo_after2`] → `minsu_d3_4_first`
  - [`chose_dain_lunch && chose_dain_after2`] → `minsu_d3_4_first`
  - [`chose_yuna_lunch && chose_yuna_after2`] → `minsu_d3_4_first`
  - [기본] → `minsu_d3_4_established`

<!-- i18n -->

---

### `minsu_d3_4_established`
- 배경: `school.png`
- 다음: `minsu_d3_5`

- 캐릭터: `minsu_normal.png`
**민수**: 사실 어제부터 좀 아슬아슬해 보이긴 했어. 점심엔 한 명 챙기고 방과 후엔 다른 애 찾아가고. 근데 오늘 점심 사달 난 거 보니까 그냥 넘어갈 일이 아니더라.

---

### `minsu_d3_4_first`
- 배경: `school.png`
- 다음: `minsu_d3_5`

- 캐릭터: `minsu_normal.png`
**민수**: 어제까지는 네가 알아서 하겠지 싶어서 말 아꼈는데 오늘 점심시간에 터진 건 도저히 못 본 척하기 어렵더라.

---

### `minsu_d3_5`
- 배경: `school.png`
- 다음: `minsu_d3_5b`

- 캐릭터: `minsu_normal.png`
**민수**: 친구로서 옆에서 지켜보기가 좀 버겁다. 세 사람 다 진심으로 너 대하는 좋은 애들이잖아. 네가 악의를 품고 어장 관리하는 게 아닌 건 아는데 거절할 타이밍을 계속 피하고 있잖아.

---

### `minsu_d3_5b`
- 배경: `school.png`
- 다음: `minsu_d3_6`

- 캐릭터: `minsu_normal.png`
**민수**: *민수는 다 마신 음료 팩에서 뽑아 든 빨대 비닐을 손끝으로 잘게 접는다.*

---

### `minsu_d3_6`
- 배경: `school.png`
- 다음: `minsu_d3_6b`

- 캐릭터: `minsu_normal.png`
**{name}**: 네 말이 맞아. 할 말이 없다.

---

### `minsu_d3_6b`
- 배경: `school.png`
- 다음: `minsu_d3_7`

- 캐릭터: `minsu_normal.png`
**민수**: 네가 전학 오기 전 학교에서 무슨 일을 겪었는지는 안 캐물을게. 대신 친구로서 딱 한마디만 할게.

---

### `minsu_d3_7`
- 배경: `school.png`
- 다음: `minsu_d3_8`

- 캐릭터: `minsu_normal.png`
**민수**: 제때 거절하는 것도 상대를 향한 예의고 배려야. 못 지킬 약속에 계속 여지를 남기는 것보다 지금이라도 확실히 선을 긋는 게 덜 아프거든.

---

### `minsu_d3_8`
- 배경: `school.png`
- 다음: `minsu_d3_9`

- 캐릭터: `minsu_normal.png`
**{name}**: *이전 학교에서도 나는 늘 결정적인 순간에 입을 다물었다. 소정이 책상 위에 가득했던 낙서를 보고도 끝내 모른 척 고개를 돌렸다. 이번만큼은 내 비겁한 침묵을 배려라는 말로 포장해선 안 된다.*

---

### `minsu_d3_9`
- 배경: `school.png`
- 다음: `minsu_d3_10`

- 캐릭터: `minsu_normal.png`
**민수**: *민수는 말을 멈추고 작게 접은 빨대 포장지를 자기 교복 주머니에 찔러 넣는다.*

---

### `minsu_d3_10`
- 배경: `school.png`
- 다음: `night3_start`

- 캐릭터: `minsu_normal.png`
**민수**: 내일 아침에 교실에서 보자. 오늘 밤엔 도망치지 말고 진지하게 생각해 봐.

---

### `haeun_warn_1`
- 배경: `school_hallway.png`
- 배경톤: `empty`
- 다음: `haeun_warn_1_b`

- 캐릭터: `없음`
**{name}**: *교문으로 내려가는 1층 복도 끝, 그림자가 길게 진 창가에 누군가 홀로 서서 이쪽을 기다리고 있다.*

---

### `haeun_warn_1_b`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_2`

- 캐릭터: `haeun_normal.png`
**하은**: *하은이 창틀에 등을 기댄 채 손목에 찬 학생회 팔찌를 초조하게 만지작거린다.*

---

### `haeun_warn_2`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_2_b`

- 캐릭터: `haeun_normal.png`
**하은**: {name} 선배, 잠깐만요.

---

### `haeun_warn_2_b`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_3`

- 캐릭터: `haeun_normal.png`
**{name}**: 하은아? 아직 안 가고 왜 여기서 기다리고 있어?

---

### `haeun_warn_3`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_3_b`

- 캐릭터: `haeun_normal.png`
**하은**: 선배, 혹시 방금 학생회실에서 서연 선배 만나고 오셨어요?

---

### `haeun_warn_3_b`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_3_c`

- 캐릭터: `haeun_worried.png`
**하은**: *하은의 목소리가 낮게 가라앉는다.* 아까 서연 선배가 혼자 울고 있었어요.

---

### `haeun_warn_3_c`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_4`

- 캐릭터: `haeun_worried.png`
**{name}**: *심장이 덜컥 내려앉는다. 학생회실에 들어가기 전부터 울고 있었던 건가.*

---

### `haeun_warn_4`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_4b`

- 캐릭터: `haeun_worried.png`
**하은**: 학생회실 뒤편 여자 화장실에서 마주쳤거든요. 저한테는 눈에 뭐가 들어갔다고 둘러대셨는데 누가 봐도 한참 우신 얼굴이었어요.

---

### `haeun_warn_4b`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_5`

- 캐릭터: `haeun_worried.png`
**{name}**: 서연이가 화장실에서 혼자 울었다고?

---

### `haeun_warn_5`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_5b`

- 캐릭터: `haeun_worried.png`
**{name}**: *하은이 인기척 없는 빈 복도 양끝을 한 번 살피더니 내 쪽으로 반 걸음 다가와 목소리를 더 낮춘다.*

---

### `haeun_warn_5b`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_5c`

- 캐릭터: `haeun_worried.png`
**하은**: 아무 말도 묻지 말고 먼저 퇴근하라고 하셨는데 찬물 틀어 놓은 세면대 앞에서 한참 동안이나 못 나오셨어요.

---

### `haeun_warn_5c`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_5c_b`

- 캐릭터: `haeun_worried.png`
**{name}**: *무심코 복도 저편의 학생회실과 화장실 쪽 계단을 돌아본다.*

---

### `haeun_warn_5c_b`
- 다음: `haeun_warn_6`

<!-- i18n -->

---

### `haeun_warn_6`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_6_b`

- 캐릭터: `haeun_firm.png`
**하은**: 후배인 제가 지금 따라가 봤자 또 완벽한 회장님 얼굴로 괜찮다고만 하실 거예요. 하지만 {name} 선배 말이라면 들으실지도 몰라요.

---

### `haeun_warn_6_b`
- 배경: `school_hallway.png`
- 다음: `haeun_cheer_1`

- 캐릭터: `haeun_firm.png`
**하은**: *하은은 손목에 감긴 학생회 팔찌를 안쪽으로 꾹 돌려 쥔다.*

---

### `haeun_cheer_1`
- 배경: `school_hallway.png`
- 다음: `haeun_cheer_choice`

- 캐릭터: `haeun_normal.png`
**하은**: *하은이 팔찌에서 손을 떼며 조심스레 눈을 맞춘다.* 선배 이야기를 할 때만큼은 서연 선배 표정이 평소랑 완전히 달라지거든요. 그래서 전 두 분을 진심으로 응원해요. 제가 해 드릴 수 없는 위로를 선배가 곁에서 해 주셨으면 좋겠어요.

---

### `haeun_cheer_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "서연부터 챙길게. 너도 걱정 마." → `haeun_cheer_up` | Haeun +1
  2. "응원은 고마운데 네가 신경 쓸 일은 아니야." → `haeun_cheer_down` | Haeun -1
  3. "응원해 줘서 고마워. 서연도 들으면 힘이 될 거야." → `haeun_cheer_up` | Haeun +1
  4. "고개만 끄덕이고 시선을 돌린다" → `haeun_cheer_down` | Haeun -1

- 캐릭터: `haeun_normal.png`
**하은**: *하은이 작고 희미하게 미소 짓는다.* 서연 선배가 옛날처럼 편하게 웃으셨으면 좋겠어요. 그 옆자리에 선배가 있어 주면 더 바랄 게 없고요. 뒤에서 응원하는 후배가 한 명쯤 있다는 것만 기억해 주세요.

---

### `haeun_cheer_up`
- 배경: `school_hallway.png`
- 플래그: `haeun_cheer_seen`
- 다음: `haeun_warn_7`

- 캐릭터: `haeun_relieved.png`
**하은**: *그제야 하은의 굳어 있던 어깨에서 긴장이 풀린다.* 다행이에요. 그럼 오늘 일은 선배를 믿고 조용히 지켜볼게요.

---

### `haeun_cheer_down`
- 배경: `school_hallway.png`
- 플래그: `haeun_cheer_seen`
- 다음: `haeun_warn_7`

- 캐릭터: `haeun_worried.png`
**하은**: *하은이 입술을 살짝 깨물며 고개를 숙인다.* 알겠어요. 제가 주제넘게 선을 넘었다면 죄송해요. 그래도 이 말은 꼭 전해 두고 싶었어요.

---

### `haeun_warn_7`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_7_c`

- 캐릭터: `haeun_worried.png`
**하은**: 남의 일에 참견하는 거 잘 알아요. 그래도 오늘 밤만큼은 서연 선배를 모른 척 내버려 두지 말아 주세요.

---

### `haeun_warn_7_c`
- 배경: `school_hallway.png`
- 다음: `haeun_freetalk`

- 캐릭터: `haeun_firm.png`
**하은**: 당장 혼자 있고 싶다고 밀어내시면 조금만 기다려 주세요. 대신 오늘 밤에 집에는 잘 들어가셨는지, 나중에라도 꼭 안부 물어봐 주실래요?

---

### `haeun_freetalk`
- 배경: `school_hallway.png`
- 타입: `free_talk`
- 다음: `haeun_affinity_check`
- 컨텍스트: "하은은 서연이 우는 모습을 봤다고 알렸다. 혼자 있고 싶다는 뜻은 존중하되 나중에 귀가했는지 확인해 달라고 부탁했다. 둘은 아직 복도에 서 있고 하은은 주인공의 생각을 듣고 싶다. 서연에게 즉시 돌아가거나 거절을 무시하라고 요구하지 않는다."
- 성격: "하은은 예의를 지키면서도 서연이 상처받은 일을 가볍게 넘기지 않는다. 변명보다 지금 할 행동을 듣고 싶어 한다. 주인공의 대답을 듣고 묻거나 반박할 수 있지만 서연의 마음을 대신 단정하거나 주인공에게 특정 행동을 강제로 수행시키지 않는다. 연애나 성적인 분위기로 전환하지 않는다. 호감도는 하은의 개인적인 신뢰와 호의만 나타내며 어떤 엔딩에도 영향을 주지 않는다."

- 캐릭터: `haeun_worried.png`
**하은**: *하은은 자리를 뜨지 않고 내 눈을 똑바로 올려다본다.* 선배 대답은 확실히 듣고 돌아갈게요. 지금부터 어떻게 하실 생각이에요?

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
**하은**: *하은은 한동안 내 표정을 진지하게 살피더니, 손목 안쪽으로 돌아가 있던 학생회 팔찌를 바르게 고쳐 찬다.* 선배의 그 말은 믿어 볼게요.

---

### `haeun_affinity_high_2`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_7_d`

- 캐릭터: `haeun_relieved.png`
**하은**: 서연 선배가 습관처럼 괜찮다고 대답해도 오늘은 한 번만 더 물어봐 주세요. 제일 무너질 것 같을 때일수록 아무렇지 않은 척하는 사람이니까요.

---

### `haeun_affinity_neutral_1`
- 배경: `school_hallway.png`
- 다음: `haeun_affinity_neutral_2`

- 캐릭터: `haeun_worried.png`
**하은**: *하은은 팔찌 고리에서 손을 떼지 않은 채 천천히 고개를 끄덕인다.* 솔직히 아직 선배 말을 전부 다 믿는 건 아니에요.

---

### `haeun_affinity_neutral_2`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_7_d`

- 캐릭터: `haeun_worried.png`
**하은**: 그래도 방금 제 앞에서 하신 약속은 꼭 지켜 주세요. 서연 선배가 집에 잘 들어가셨는지도 이따 밤에 꼭 확인해 주시고요.

---

### `haeun_affinity_low_1`
- 배경: `school_hallway.png`
- 다음: `haeun_affinity_low_2`

- 캐릭터: `haeun_worried.png`
**하은**: *하은은 팔찌를 꽉 움켜쥔 채 경계하듯 반 걸음 물러난다.* 지금 같은 태도라면 {name} 선배한테 서연 선배를 부탁하기 어렵겠네요.

---

### `haeun_affinity_low_2`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_7_d`

- 캐릭터: `haeun_worried.png`
**하은**: 서연 선배 일은 제가 학생회 담당 선생님께 따로 말씀드릴게요. 혹시 마주치더라도 더 상처 주는 말은 하지 마세요.

---

### `haeun_warn_7_d`
- 다음: `haeun_warn_8`

<!-- i18n -->

---

### `haeun_warn_8`
- 배경: `school_hallway.png`
- 다음: `haeun_warn_8b`

- 캐릭터: `없음`
**{name}**: *하은이 떠난 뒤 발길을 돌려 학생회실 문을 조심스레 두드린다. 대답은 들리지 않지만 문 너머에서 의자가 밀리는 소리가 작게 울린다.* 서연아, 나야. 밖에 잠깐만 있다 갈게.

---

### `haeun_warn_8b`
- 배경: `school.png`
- 다음: `night3_start`

- 캐릭터: `없음`
**{name}**: *어둠이 내려앉기 시작하는 학교 정문 밖으로 걸어 나왔다.*

---

## 3일차 — 밤 `day3_4_night`

### `night3_start`
- 배경: `room_my.png`
- BGM: `night1.mp3`
- 다음: `night3_start_2`

- 캐릭터: `없음`
**{name}**: *금요일 밤, 지친 몸으로 방에 돌아와 교복 차림으로 의자 등받이에 가방을 건다. 가방 밖으로 나온 교과서 모서리에는 사흘치 손때가 묻어 있다.*

---

### `night3_start_2`
- 배경: `room_my.png`
- 분기:
  - [`day3_has_multiple_dates`] → `night3_cheat_msg_2`
  - [기본] → `night3_faithful_check`

- 캐릭터: `없음`
**{name}**: *불도 켜지 않은 방 안, 책상 위에 엎어 두었던 휴대폰 화면을 뒤집어 켠다.*

---

### `night3_faithful_check`
- 배경: `room_my.png`
- 분기:
  - [`seo_trust_deep`] → `night3_faithful_msg_seo_1`
  - [`yuna_trust_deep`] → `night3_faithful_msg_yuna_1`
  - [`dain_trust_deep`] → `night3_faithful_msg_dain_1`
  - [기본] → `night3_dream_1`

- 캐릭터: `없음`
**{name}**: *어두운 천장 아래로 휴대폰 불빛이 번진다. 도착해 있는 밤 알림을 확인한다.*

---

### `night3_faithful_msg_seo_1`
- 배경: `room_my.png`
- 다음: `night3_faithful_msg_seo_2`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 오늘 방과 후에 학생회실에서 본 거, 진짜 우리 둘만의 비밀이야

---

### `night3_faithful_msg_seo_2`
- 배경: `room_my.png`
- 다음: `night3_faithful_msg_seo_3`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 대신 내일도 볼펜 잃어버렸다는 핑계로 또 찾아와도 돼. 기다릴게

---

### `night3_faithful_msg_seo_3`
- 배경: `room_my.png`
- 다음: `night3_dream_1`

- 캐릭터: `seyoun_normal.png` @ 0.35
**{name}**: *귓가에 서연의 따뜻한 숨결이 다시 스치는 듯하다. 마지막 줄까지 천천히 읽고 화면을 끄자 방 안에 기분 좋은 잔상이 남는다.*

---

### `night3_faithful_msg_yuna_1`
- 배경: `room_my.png`
- 다음: `night3_faithful_msg_yuna_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *유나에게서 심야 메시지가 도착해 있다. 아까 별관에서 내 손바닥에 뺨을 기대며 건네준 가죽 노트 이야기다.*

---

### `night3_faithful_msg_yuna_2`
- 배경: `room_my.png`
- 다음: `night3_faithful_msg_yuna_2_b`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 아까 빌려준 그 소설, 마지막 결말은 아직 안 정했어. 네가 다 읽고 나면 같이 정하자

---

### `night3_faithful_msg_yuna_2_b`
- 배경: `room_my.png`
- 다음: `night3_dream_1`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *책상 위 가죽 노트를 쓰다듬으며 감상 메모장 마지막 줄을 본다. 깜빡이는 커서 옆으로 유나의 체온이 아직 남아 있는 것만 같다.*

---

### `night3_faithful_msg_dain_1`
- 배경: `room_my.png`
- 다음: `night3_faithful_msg_dain_2`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 야, 혹시라도 내 무릎 괜찮냐고 물어볼 거면 메시지로 때우지 말고 내일 아침에 직접 와서 물어봐ㅋㅋ

---

### `night3_faithful_msg_dain_2`
- 배경: `room_my.png`
- 다음: `night3_faithful_msg_dain_3`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 아까 체육관에서 끝까지 옆에 있어 줘서 진짜 고마웠어. 내일 보자

---

### `night3_faithful_msg_dain_3`
- 배경: `room_my.png`
- 다음: `night3_dream_1`

- 캐릭터: `dain_normal.png` @ 0.35
**{name}**: *장난스러운 'ㅋㅋ'와 진심이 담긴 다음 문장 사이에 찍힌 3분의 공백. 내 어깨를 붙잡던 다인의 뜨거운 손길과 심장박동이 선명하게 되살아난다.*

---

### `night3_dream_1`
- 배경: `room_my.png`
- 다음: `night3_dream_2_b`

- 캐릭터: `없음`
**{name}**: *스탠드 조명을 끄려다 휴대폰을 한 번 더 집어 든다. 오늘 방과 후 나란히 숨을 맞추던 가까웠던 거리감이 손끝에 생생하다.*

---

### `night3_dream_2_b`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_1`

- 캐릭터: `없음`
**{name}**: *머리맡에 휴대폰을 내려놓는다. 내일 아침 마주 보며 건넬 첫마디를 고르느라 심장이 느리게 뛴다.*

---

### `night3_faithful_reflect_1`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_2_b`

- 캐릭터: `없음`
**{name}**: *잠들기 전, 휴대폰 갤러리 깊숙한 곳에서 예전 학교의 소정이 사진을 찾아 길게 누른다.*

---

### `night3_faithful_reflect_2_b`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_2_c`

- 캐릭터: `없음`
**{name}**: *화면에 '이 사진을 삭제하시겠습니까?'라는 확인 창이 떠오른다. 엄지손가락이 삭제 버튼 바로 위에서 멈춘다.*

---

### `night3_faithful_reflect_2_c`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_2_d`

- 캐릭터: `없음`
**{name}**: *푸르스름한 액정 빛을 가만히 내려다본다. 소정이의 책상 위를 뒤덮었던 험한 낙서들과, 비겁하게 고개를 돌렸던 나의 아침들이 차례로 스쳐 간다.*

---

### `night3_faithful_reflect_2_d`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_3`

- 캐릭터: `없음`
**{name}**: *확인 창에서 조용히 취소를 누른다. 사진 한 장을 지워 버린다고 해서 그때 내가 도망쳤던 사실까지 사라지지는 않는다.*

---

### `night3_faithful_reflect_3`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_3_b`

- 캐릭터: `없음`
**{name}**: *삭제 버튼 대신 이동 메뉴를 눌러 사진을 새 폴더로 옮긴다. 폴더 이름은 짧게 '기록'이라고 적는다.*

---

### `night3_faithful_reflect_3_b`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_4`

- 캐릭터: `없음`
**{name}**: *사진 아래에 짧은 메모를 남긴다. 소정이에게 끝내 건네지 못한 사과는 지금 내 곁에 있는 사람에게 더 솔직해지는 것으로만 갚을 수 있다.*

---

### `night3_faithful_reflect_4`
- 배경: `room_my.png`
- 다음: `night3_faithful_reflect_4_b`

- 캐릭터: `없음`
**{name}**: *새로 만든 폴더 안에 사진 한 장이 조용히 자리 잡는다.*

---

### `night3_faithful_reflect_4_b`
- 다음: `night3_faithful_reflect_4_c`

<!-- i18n -->

---

### `night3_faithful_reflect_4_c`
- 다음: `night3_dream_3`

<!-- i18n -->

---

### `night3_dream_3`
- 배경: `room_my.png`
- 분기:
  - [`seoyeon_day3_event`] → `night3_dream_seo_bonus`
  - [`yuna_day3_event`] → `night3_dream_yuna_bonus`
  - [`dain_day3_event`] → `night3_dream_dain_bonus`
  - [기본] → `night3_end`

- 캐릭터: `없음`
**{name}**: *갤러리를 닫고 내일 아침 알람을 맞춘다. 휴대폰을 내려놓은 뒤에도 낮에 스쳤던 온기 때문에 잠이 쉽게 오지 않는다.*

---

### `night3_dream_seo_bonus`
- 배경: `room_my.png`
- 스탯: Seoyeon +1
- 다음: `night3_end`

- 캐릭터: `없음`
**{name}**: *눈을 감자 학생회실의 노을빛과 내 팔뚝에 닿던 서연의 뜨거운 이마, 살짝 풀린 리본 깃이 먼저 떠오른다.*

---

### `night3_dream_yuna_bonus`
- 배경: `room_my.png`
- 스탯: Yuna +4
- 다음: `night3_end`

- 캐릭터: `없음`
**{name}**: *눈을 감자 별관의 고요한 공기 속에서 내 손바닥을 끌어당겨 자기 뺨에 포개던 유나의 서늘하고도 달아오른 감촉이 떠오른다.*

---

### `night3_dream_dain_bonus`
- 배경: `room_my.png`
- 스탯: Dain +2
- 다음: `night3_end`

- 캐릭터: `없음`
**{name}**: *눈을 감자 빈 체육관 벤치에서 내 셔츠 자락을 꽉 쥐고 품으로 파고들던 다인의 가쁜 숨결이 떠오른다.*

---

### `night3_cheat_msg_2`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_3`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 다인이랑 유나 말고 나한테만 그렇게 웃어 주면 안 돼?

---

### `night3_cheat_msg_3`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_3_b`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 제발 부탁이야

---

### `night3_cheat_msg_3_b`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_4`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: *서연의 대화창에 '입력 중' 표시가 한참 동안 떠올랐다 사라지기를 반복하더니, 끝내 다음 문장은 오지 않는다.*

---

### `night3_cheat_msg_4`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_4_b`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 네가 세 사람 사이에서 저울질하던 거, 난 처음부터 다 알고 있었어

---

### `night3_cheat_msg_4_b`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_5`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 나도, 다른 애들도 네 선택지 중 하나로 나란히 놓이는 건 참을 수 없어.

---

### `night3_cheat_msg_5`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_6`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 내일은 누구 한 사람한테만 갈 건지 확실하게 정해서 와

---

### `night3_cheat_msg_6`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_dain_1`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 내 눈 피하지 마. 그것만 약속해

---

### `night3_cheat_msg_dain_1`
- 배경: `room_my.png`
- 다음: `night3_cheat_msg_7`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: ㅋㅋ 아까 점심때 그거, 그냥 나 놀리려고 한 농담이었으면 좋겠다

---

### `night3_cheat_msg_7`
- 배경: `room_my.png`
- 다음: `night3_nightmare_1`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 지금 읽고도 답장 안 하는 거 다 알아. 내일 아침엔 제일 먼저 너 붙잡을 거야. *어둠 속에서 떠오른 유나의 마지막 메시지가 서늘한 집착처럼 시선을 옭아맨다.*

---

### `night3_nightmare_1`
- 배경: `room_my.png`
- BGM: `night2.mp3`
- 다음: `night3_nightmare_2_b`

- 캐릭터: `없음`
**{name}**: *방 불을 끄고 침대에 누웠지만 심장이 목구멍까지 차올라 눈이 감기지 않는다. 어둠 속에서 휴대폰 액정 불빛만 서늘하게 손바닥을 태운다.*

---

### `night3_nightmare_2_b`
- 배경: `room_my.png`
- 다음: `night3_nightmare_3`

- 캐릭터: `seyoun_sad.png` @ 0.35
**{name}**: *떨리는 엄지로 서연의 대화방을 다시 연다. 자존심을 다 내려놓은 '제발 부탁이야'라는 한 줄 위로 서연의 젖은 눈빛이 겹쳐진다.*

---

### `night3_nightmare_3`
- 배경: `room_my.png`
- 다음: `night3_nightmare_3_b`

- 캐릭터: `seyoun_sad.png` @ 0.35
**서연**: 오늘 밤 당장 대답하라고 재촉하는 건 아니야. 대신 내일 아침엔 내 앞에서 도망치지 마.

---

### `night3_nightmare_3_b`
- 배경: `room_my.png`
- 다음: `night3_nightmare_4`

- 캐릭터: `yuna_sad.png` @ 0.35
**{name}**: *창을 닫고 유나의 대화방을 열자 내가 남긴 '읽음' 표시가 서늘한 낙인처럼 떠 있다.*

---

### `night3_nightmare_4`
- 배경: `room_my.png`
- 다음: `night3_nightmare_4_b`

- 캐릭터: `yuna_sad.png` @ 0.35
**{name}**: *'내 눈 피하지 마. 그것만 약속해.' 짧은 말풍선 너머로 내 손목을 놓아주지 않던 유나의 차가운 손아귀가 목덜미를 죄어 오는 듯하다.*

---

### `night3_nightmare_4_b`
- 배경: `room_my.png`
- 다음: `night3_nightmare_5`

- 캐릭터: `dain_sad.png` @ 0.35
**{name}**: *맨 아래 다인의 대화방에는 애써 붙인 웃음 글자 뒤로 덩그러니 남은 한 줄만 떠 있다.*

---

### `night3_nightmare_5`
- 배경: `room_my.png`
- 다음: `night3_nightmare_6`

- 캐릭터: `dain_sad.png` @ 0.35
**{name}**: *'그냥 나 놀리려고 한 농담이었으면 좋겠다.' 해가 진 뒤로 다인에게서는 추가 메시지 한 통 오지 않는다.*

---

### `night3_nightmare_6`
- 배경: `room_my.png`
- 다음: `night3_nightmare_choice`

- 캐릭터: `없음`
**{name}**: *숨이 막혀 세 사람의 대화방을 번갈아 열며 변명 같은 답장을 썼다가 백스페이스로 전부 지워 버린다.*

---

### `night3_nightmare_choice`
- 배경: `room_my.png`
- 선택지:
  1. "서연에게 먼저 말하기로 한다" → `night3_nightmare_seo` | 플래그: `nightmare_chose_seoyeon`
  2. "유나에게 먼저 말하기로 한다" → `night3_nightmare_yuna` | 플래그: `nightmare_chose_yuna`
  3. "다인에게 먼저 말하기로 한다" → `night3_nightmare_dain` | 플래그: `nightmare_chose_dain`

- 캐릭터: `없음`
**{name}**: *이 지독한 밤이 끝나고 날이 밝으면, 누구에게 제일 먼저 달려가 진심을 털어놓아야 할까.*

---

### `night3_nightmare_seo`
- 배경: `room_my.png`
- 다음: `night3_nightmare_end`

- 캐릭터: `없음`
**{name}**: *서연의 입력창에 '미안해, 내일 아침에 제일 먼저 얼굴 보고 말할게.'라고 친 뒤 전송 버튼 위에 떨리는 엄지를 올린다.*

---

### `night3_nightmare_yuna`
- 배경: `room_my.png`
- 다음: `night3_nightmare_end`

- 캐릭터: `없음`
**{name}**: *유나의 입력창에 '내일은 절대 피하지 않고 네 앞에 먼저 갈게.'라고 적자, 마지막 글자 뒤에서 커서가 가쁘게 깜빡인다.*

---

### `night3_nightmare_dain`
- 배경: `room_my.png`
- 다음: `night3_nightmare_end`

- 캐릭터: `없음`
**{name}**: *다인의 입력창에 ‘혼자 생각하게 만들어서 미안해. 내일 아침에 바로 말할게.’라고 적는다. 엄지 끝이 전송 아이콘 위에서 굳는다.*

---

### `night3_nightmare_end`
- 배경: `room_my.png`
- 다음: `night3_nightmare_end_3`

- 캐릭터: `없음`
**{name}**: *입력창에 적어 둔 마지막 문장 하나는 끝내 아직 보내지 않았다.*

---

### `night3_nightmare_end_3`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_2`

- 캐릭터: `없음`
**{name}**: *새벽 3시가 넘도록 한숨도 자지 못한 채 메시지 앱을 닫고 갤러리를 연다. 예전 학교 소정이 사진 위에 무거운 엄지를 얹는다.*

---

### `night3_cheat_reflect_2`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_3_c`

- 캐릭터: `없음`
**{name}**: *단체 사진 속 소정이는 힘없이 카메라를 바라보고 있고 바로 옆에 선 나는 그때도 곤란한 일을 피하듯 엉뚱한 곳으로 시선을 돌리고 있다.*

---

### `night3_cheat_reflect_3_c`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_3_d`

- 캐릭터: `없음`
**{name}**: *메시지 목록을 위에서 아래로 훑어 내린다. 세 사람의 이름 옆에 서로 다른 상처가 마지막 문장으로 박혀 있다.*

---

### `night3_cheat_reflect_3_d`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_3_e`

- 캐릭터: `없음`
**민수**: *그때 화면 상단에 민수에게서 온 짧은 메시지가 뜬다.* 겁난다고 미뤄 봤자 저절로 없어지는 일 아님

---

### `night3_cheat_reflect_3_e`
- 배경: `room_my.png`
- 다음: `night3_cheat_reflect_5`

- 캐릭터: `없음`
**{name}**: *세 사람의 대화방을 첫 줄부터 다시 읽는다. 이번엔 어느 창도 도망치듯 닫지 않는다.*

---

### `night3_cheat_reflect_5`
- 배경: `room_my.png`
- 다음: `night3_nightmare_end_4`

- 캐릭터: `없음`
**{name}**: *전송 버튼 위에서 손을 떼고 휴대폰을 책상 위에 엎어 놓는다. 텍스트 몇 줄로 때우지 않고 내일 직접 마주 서서 대답할 생각이다. 알람까지는 세 시간 남았다.*

---

### `night3_nightmare_end_4`
- 배경: `room_my.png`
- 다음: `night3_end`

- 캐릭터: `없음`
**{name}**: *새벽 알람 이름을 '도망치지 말고 답하기'로 고쳐 적는다.*

---

### `night3_end`
- 배경: `room_my.png`
- 다음: `morning4_start`

- 캐릭터: `없음`
**{name}**: *금요일 시간표가 적힌 교과서를 덮고 스탠드 불을 완전히 끈다. 휴대폰은 머리맡에 엎어 둔다.*

---

### `forced_violation_day3_after_seoyeon`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day3_seoyeon_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day3_seoyeon_excuse`

**서연**: *서연이 차가운 침묵 끝에 얼음장 같은 목소리로 말한다.* 방금 네가 한 짓, 실수였다며 없던 일처럼 넘길 생각 하지 마. 당분간 내 근처에 다가오지도 말고 연락도 하지 마.

---

### `forced_violation_day3_seoyeon_apologize`
- 다음: `forced_violation_day3_resume`

**서연**: *서연의 표정은 조금도 풀리지 않는다.* 사과는 들었어. 그렇다고 네가 선을 넘은 사실이 지워지진 않아. 말한 대로 당분간 연락하지 마.

---

### `forced_violation_day3_seoyeon_excuse`
- 다음: `forced_violation_day3_resume`

**서연**: *서연이 단호하게 말을 끊는다.* 오해? 내가 분명히 싫다고 거절한 순간부터 오해 따위는 될 수 없어. 한마디도 더 하지 마.

---

### `forced_violation_day3_after_yuna`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day3_yuna_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day3_yuna_excuse`

**유나**: *유나가 한 걸음 물러서며 거칠게 숨을 고른다.* 내가 싫다고 했는데도 끝까지 무시했잖아. 지금은 네 얼굴조차 마주하기 싫으니까 더는 연락하지 마.

---

### `forced_violation_day3_yuna_apologize`
- 다음: `forced_violation_day3_resume`

**유나**: *한참의 침묵 끝에 유나가 낮게 답한다.* 사과 한마디 했다고 방금 일이 없던 게 되진 않아. 이제 그만 돌아가.

---

### `forced_violation_day3_yuna_excuse`
- 다음: `forced_violation_day3_resume`

**유나**: *유나는 내 해명을 끝까지 듣지도 않고 고개를 돌린다.* 분명히 싫다고 말했어. 변명으로 덮을 수 있는 일 아니야.

---

### `forced_violation_day3_after_dain`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day3_dain_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day3_dain_excuse`

**다인**: *다인의 얼굴에서 웃음기가 완전히 사라진다. 굳은 목소리가 낮게 떨어진다.* 이건 장난으로 못 넘겨. 내가 싫다는데도 억지로 선 넘은 거, 절대 그냥 안 넘어가.

---

### `forced_violation_day3_dain_apologize`
- 다음: `forced_violation_day3_resume`

**다인**: *다인은 한참 뒤에야 차갑게 입을 연다.* 사과는 들었어. 오늘 얘기는 여기까지고 다음에 얼굴 볼지 말지는 내가 정할게.

---

### `forced_violation_day3_dain_excuse`
- 다음: `forced_violation_day3_resume`

**다인**: *다인의 목소리가 거칠게 날이 선다.* 비겁하게 핑계 대지 마. 내가 하지 말라고 했는데도 밀어붙인 건 너잖아.

---

### `forced_violation_day3_after_teacher`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day3_teacher_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day3_teacher_excuse`

**담임선생님**: *담임이 단호한 표정으로 자리에서 물러선다.* 방금 네 언행은 명백히 선을 넘었어. 더는 가까이 오지 마. 이 사안은 학교 규정과 절차대로 처리할 거야.

---

### `forced_violation_day3_teacher_apologize`
- 다음: `forced_violation_day3_resume`

**담임선생님**: *담임이 짧게 숨을 고르고 말한다.* 사과는 접수할게. 하지만 공식적인 절차는 그대로 진행할 거니까 더 말하지 말고 돌아가.

---

### `forced_violation_day3_teacher_excuse`
- 다음: `forced_violation_day3_resume`

**담임선생님**: *담임이 차갑게 해명을 끊는다.* 지금 어설픈 변명으로 무마할 수 있는 상황이 아니야. 당장 거리를 두고 교실로 돌아가.

---

### `forced_violation_day3_after_nurse`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day3_nurse_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day3_nurse_excuse`

**보건선생님**: *보건선생님의 얼굴에서 여유로운 미소가 완전히 사라진다.* 지금부터는 확실히 거리를 지켜. 방금 한 행동은 상담 일지에 기록하고 담당 부서에 공식적으로 알릴 거야.

---

### `forced_violation_day3_nurse_apologize`
- 다음: `forced_violation_day3_resume`

**보건선생님**: *보건선생님이 차트를 덮으며 단호히 답한다.* 사과는 들을게. 그래도 공식 기록과 보고는 절차대로 진행할 거야. 오늘 상담은 여기까지야.

---

### `forced_violation_day3_nurse_excuse`
- 다음: `forced_violation_day3_resume`

**보건선생님**: *보건선생님의 목소리가 서늘하게 낮아진다.* 오해라는 말로 포장한다고 방금 일이 달라질 것 같아? 분명히 거부했는데도 무시한 거잖아.

---

### `forced_violation_day3_after_haeun`
- 선택지:
  1. "잘못을 인정하고 거리를 둔다." → `forced_violation_day3_haeun_apologize`
  2. "오해였다고 둘러댄다." → `forced_violation_day3_haeun_excuse`

**하은**: *하은이 창백해진 얼굴로 물러서며 학생회 팔찌를 움켜쥔다.* 더 가까이 오지 마세요. 지금 바로 교무실 가서 선생님 부를 거예요.

---

### `forced_violation_day3_haeun_apologize`
- 다음: `forced_violation_day3_resume`

**하은**: *하은은 대답조차 하지 않은 채 뒷걸음질로 교무실 쪽으로 물러나며 내가 따라오지 않는지 경계한다.*

---

### `forced_violation_day3_haeun_excuse`
- 다음: `forced_violation_day3_resume`

**하은**: 오해 같은 거 아니에요. 절대 따라오지 마세요. *하은은 거리를 둔 채 급히 교무실 문을 열고 들어간다.*

---

### `forced_violation_day3_resume`

---

# 4일차

## 4일차 — 아침 `day4_1_morning`

### `morning4_start`
- 배경: `room_my_day.webp`
- 시간대: `day`
- BGM: `morning.mp3`
- 다음: `morning4_date_plan_check`

- 캐릭터: `없음`
**{name}**: *넷째 날, 토요일 아침. 커튼 틈으로 스며든 주말 햇살에 눈을 뜬다. 등교 시간 대신 오늘 일정을 확인하려 머리맡의 휴대폰부터 끌어당긴다.*

---

### `morning4_date_plan_check`
- 분기:
  - [`route_seoyeon`] → `morning4_nightmare_check`
  - [`route_yuna`] → `morning4_nightmare_check`
  - [`route_dain`] → `morning4_nightmare_check`
  - [`accepted_seoyeon_date`] → `morning4_nightmare_check`
  - [`accepted_yuna_date`] → `morning4_nightmare_check`
  - [`accepted_dain_date`] → `morning4_nightmare_check`
  - [기본] → `morning4_fallback_msg`

<!-- i18n -->

---

### `morning4_nightmare_check`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 분기:
  - [`nightmare_chose_seoyeon`] → `morning4_nightmare_seo`
  - [`nightmare_chose_yuna`] → `morning4_nightmare_yuna`
  - [`nightmare_chose_dain`] → `morning4_nightmare_dain`
  - [기본] → `minsu_cheer_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `morning4_nightmare_seo`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `morning4_nightmare_after`

- 캐릭터: `없음`
**{name}**: *짧은 진동과 함께 알람이 울린다. 잠결에 켠 액정 위로 밤새 기다렸던 서연의 이름이 가장 먼저 떠오른다.*

---

### `morning4_nightmare_yuna`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `morning4_nightmare_after`

- 캐릭터: `없음`
**{name}**: *짧은 진동과 함께 알람이 울린다. 흐릿한 시야로 켠 액정 한가운데 유나가 보낸 메시지가 조용히 떠 있다.*

---

### `morning4_nightmare_dain`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `morning4_nightmare_after`

- 캐릭터: `없음`
**{name}**: *짧은 진동과 함께 알람이 울린다. 화면을 켜자마자 아침부터 기운이 넘치는 다인의 메시지가 눈에 들어온다.*

---

### `morning4_nightmare_after`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `minsu_cheer_1`

- 캐릭터: `없음`
**{name}**: *베개에 뺨을 묻은 채 밤새 쌓인 알림을 하나씩 천천히 내려 본다.*

---

### `minsu_cheer_1`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `minsu_cheer_1_b`

- 캐릭터: `없음`
**{name}**: *잠금을 풀자마자 메신저 맨 윗줄에서 민수의 이름이 반짝인다.*

---

### `minsu_cheer_1_b`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `minsu_cheer_1_c`

- 캐릭터: `minsu_normal.png` @ 0.35
**민수**: 야 너 오늘 주말 데이트라며?

---

### `minsu_cheer_1_c`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `minsu_cheer_1_d`

- 캐릭터: `minsu_normal.png` @ 0.35
**{name}**: 그걸 네가 어떻게 알았어

---

### `minsu_cheer_1_d`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `minsu_cheer_2`

- 캐릭터: `minsu_normal.png` @ 0.35
**민수**: 교실에서 금요일 내내 주말 약속 잡느라 정신없더니 모를 줄 알았냐ㅋㅋ

---

### `minsu_cheer_2`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `minsu_cheer_3`

- 캐릭터: `minsu_normal.png` @ 0.35
**민수**: 옷 좀 제대로 입어라. 분위기 망치지 말고 잘하고 와ㅋㅋ

---

### `minsu_cheer_3`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `minsu_cheer_4_branch`

- 캐릭터: `minsu_normal.png` @ 0.35
**{name}**: 알아서 할게.

---

### `minsu_cheer_4_branch`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 분기:
  - [`day3_has_multiple_dates`] → `minsu_cheer_4_c`
  - [기본] → `minsu_cheer_4_ins_single`

- 캐릭터: `없음`

<!-- i18n -->

---

### `minsu_cheer_4_ins_single`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `morning4_start_2`

- 캐릭터: `minsu_normal.png` @ 0.35
**{name}**: *캘린더 앱을 열어 본다. 토요일 칸에 적힌 단 하나의 약속 시간이 선명하게 눈에 박힌다.*

---

### `minsu_cheer_4_c`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `minsu_cheer_4_d`

- 캐릭터: `minsu_normal.png` @ 0.35
**{name}**: *캘린더 화면에는 위태롭게 겹쳐 잡은 약속들이 그대로 남아 있다. 시간만 적당히 나눈다고 넘어갈 수 있는 일이 아니라는 걸 이미 뼈저리게 아는 터라 손끝이 무거워진다.*

---

### `minsu_cheer_4_d`
- 다음: `minsu_cheer_4_e`

<!-- i18n -->

---

### `minsu_cheer_4_e`
- 다음: `morning4_start_2`

<!-- i18n -->

---

### `morning4_start_2`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 분기:
  - [`route_seoyeon`] → `morning4_seo_msg_1`
  - [`route_yuna`] → `morning4_yuna_msg_1`
  - [`route_dain`] → `morning4_dain_msg_1`
  - [기본] → `morning4_fallback_msg`

- 캐릭터: `없음`
**{name}**: *창문을 열어 선선한 아침 공기를 들이마신다. 주중에 확인하던 시간표 대신 약속 장소가 적힌 메시지를 다시 열어 본다.*

---

### `morning4_seo_msg_1`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `morning4_seo_msg_1_b`

- 캐릭터: `seyoun_pout.png` @ 0.35
**서연**: 늦으면 안 돼. 공원 분수대 앞, 10시 정각이야.

---

### `morning4_seo_msg_1_b`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `morning4_seo_msg_1_c`

- 캐릭터: `seyoun_pout.png` @ 0.35
**{name}**: *단정한 한 줄인데도 전송 시각이 아침 일곱 시다. 서연답게 한참 전부터 준비하고 있었을 모습이 그려져 입가에 웃음이 번진다.*

---

### `morning4_seo_msg_1_c`
- 다음: `morning4_hidden_check`

<!-- i18n -->

---

### `morning4_yuna_msg_1`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `morning4_yuna_msg_1_b`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 10시. 역 앞 카페. 늦으면 그냥 간다

---

### `morning4_yuna_msg_1_b`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `morning4_yuna_msg_single`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *짧은 두 줄 끝에 마침표조차 없지만 괜히 먼저 와서 창가 자리에 앉아 있을 유나의 옆모습이 눈에 선하다.*

---

### `morning4_yuna_msg_single`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `morning4_hidden_check`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *담백한 문장 너머로 유나의 나직한 목소리가 들리는 듯하다. 오늘 하루는 온전히 한 사람에게만 쓰기로 마음먹는다.*

---

### `morning4_dain_msg_1`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `morning4_hidden_check`

- 캐릭터: `dain_sweat.png` @ 0.35
**다인**: 드디어 오늘이다! 체육관 앞 10시 잊지 않았지? 아 어떡해 벌써 긴장돼. 방금 줄은 못 본 걸로 해!

---

### `morning4_fallback_msg`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `morning4_hidden_check`

- 캐릭터: `없음`
**{name}**: *주말 아침의 고요한 방 안. 밤새 온 알림을 정리하고 휴대폰을 침대 시트 위에 내려놓는다.*

---

### `morning4_hidden_check`
- 배경: `street.png`
- 분기:
  - [`homeroom_day3`] → `morning4_manuscript_check`
  - [`nurse_day3`] → `hidden_nurse_d4_morning_1`
  - [기본] → `hidden_nurse_d4_check`

- 캐릭터: `없음`
**{name}**: *이른 아침 공기를 가르며 학교 앞 사거리 횡단보도에서 신호가 바뀌기를 기다린다.*

---

### `morning4_manuscript_check`
- 배경: `street.png`
- 분기:
  - [`discovered_manuscript`] → `hidden_homeroom_d4_1`
  - [기본] → `hidden_homeroom_d4_missed`

<!-- i18n -->

---

### `hidden_homeroom_d4_missed`
- 배경: `street.png`
- 다음: `hidden_nurse_d4_check`

- 캐릭터: `없음`
**{name}**: *학교 정문 안쪽에서 둔탁하게 철문 닫히는 소리가 울린다. 한발 늦었나 싶어 아쉬운 숨을 삼키는 사이 보행 신호가 초록빛으로 바뀐다.*

---

### `hidden_homeroom_d4_1`
- 배경: `street.png`
- BGM: `morning.mp3`
- 다음: `hidden_homeroom_d4_1_b`

- 캐릭터: `teacher_normal.png`
**{name}**: 선생님, 좋은 아침이에요. *반쯤 열린 정문 앞에서 두툼한 갈색 종이봉투를 품에 안고 나오던 담임선생님과 정면으로 마주친다.*

---

### `hidden_homeroom_d4_1_b`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_2`

- 캐릭터: `teacher_normal.png`
**{name}**: *시선이 부딪히자마자 선생님은 반사적으로 종이봉투를 등 뒤로 감춘다. 얇은 포장지 안에서 인쇄된 원고 뭉치가 사각거리는 소리를 낸다.*

---

### `hidden_homeroom_d4_2`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 어? {name}? 이 시간에 학교 앞엔 웬일이야?

---

### `hidden_homeroom_d4_3`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_3_b`

- 캐릭터: `teacher_normal.png`
**{name}**: 선생님이야말로 쉬는 주말인데 아침부터 학교에 나오셨어요?

---

### `hidden_homeroom_d4_3_b`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_3_c`

- 캐릭터: `teacher_shy.png`
**담임선생님**: 문예부 합평회가 잡혀 있어서 잠깐 들렀어. 교무실에 두고 간 인쇄본도 챙길 겸.

---

### `hidden_homeroom_d4_3_c`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_3_d`

- 캐릭터: `teacher_sad.png`
**{name}**: *평소 교단에서 보던 단정한 정장 대신 부드러운 베이지색 트렌치코트와 얇은 니트 차림이다. 등 뒤로 숨긴 종이봉투 모서리가 선생님 손아귀 힘에 잘게 구겨져 있다.*

---

### `hidden_homeroom_d4_3_d`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_3_e`

- 캐릭터: `teacher_sad.png`
**{name}**: 쉬는 날에도 문예부 합평회를 열어요?

---

### `hidden_homeroom_d4_3_e`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 참가 신청한 부원들이 주말 오전밖에 시간이 안 맞는다더라고. 지도교사가 학생들 일정에 맞춰 줘야지.

---

### `hidden_homeroom_d4_4`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_4_b`

- 캐릭터: `teacher_normal.png`
**{name}**: *봉투 손잡이를 쥔 선생님의 가느다란 손가락 마디가 유독 팽팽하다. 입구 틈으로 여러 번 접었다 편 흔적이 역력한 원고 첫 장이 살짝 비친다.*

---

### `hidden_homeroom_d4_4_b`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_4_c`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 그나저나 너는 아침 일찍 왜 이 근처를 서성이고 있었어?

---

### `hidden_homeroom_d4_4_c`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_4_d`

- 캐릭터: `teacher_normal.png`
**{name}**: 근처에 볼일이 있어서 지나가던 길이었어요.

---

### `hidden_homeroom_d4_4_d`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_4_e`

- 캐릭터: `teacher_angry.png`
**담임선생님**: 그냥 지나가는 길이라기엔 정문 안쪽을 꽤 오래 들여다보던데.

---

### `hidden_homeroom_d4_4_e`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_5`

- 캐릭터: `teacher_sad.png`
**{name}**: *정문 경비실에서 흘러나오는 나른한 라디오 음악 소리만이 선선한 아침 바람을 타고 두 사람 사이를 메운다.*

---

### `hidden_homeroom_d4_5`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_5_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 문예부 애들은 근처 카페에 먼저 가 있고 다른 인원들도 곧 합류할 거야. 시간 괜찮으면 너도 합평 구경하고 갈래?

---

### `hidden_homeroom_d4_5_b`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_5_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 문예부원도 아닌데 제가 옆에 끼어도 괜찮아요?

---

### `hidden_homeroom_d4_5_c`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_5_d`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 외부 독자 의견도 듣는 공개 합평이라 상관없어. 원고를 끝까지 읽을지 말지는 와서 네가 편하게 정하면 돼.

---

### `hidden_homeroom_d4_5_d`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_choice`

- 캐릭터: `teacher_shy.png`
**담임선생님**: 담임이 쓴 글이라고 부담 가질 필요는 전혀 없어. 주말이니 너도 따로 잡은 약속이 있을 테고. *말끝을 흐리며 종이봉투 손잡이를 두 번 접어 꽉 쥔다.*

---

### `hidden_homeroom_d4_choice`
- 배경: `street.png`
- 선택지:
  1. "좋아요. 합평회 구경해도 돼요?" → `hidden_homeroom_d4_cafe_1` | Teacher +5
  2. "오늘은 약속이 있어서요." → `hidden_homeroom_d4_decline` | Teacher +4
  3. "저만 따로 불러내셔도 됐을 텐데요." → `hidden_homeroom_d4_choice_trap` | Teacher -4

- 캐릭터: `teacher_normal.png`
**{name}**: *선생님이 숨을 고를 때마다 품에 안은 봉투 안에서 원고 모서리가 바스락거리며 맞부딪힌다.*

---

### `hidden_homeroom_d4_choice_trap`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_decline_b`

- 캐릭터: `teacher_worried.png`
**담임선생님**: *선생님이 흠칫하며 종이봉투를 가슴께로 바짝 당긴다.* 괜한 오해 사기 싫어서 정식 합평회 자리에 부른 거야.

---

### `hidden_homeroom_d4_cafe_1`
- 배경: `cafe.png`
- 배경톤: `warm`
- 플래그: `homeroom_day4_cafe`
- 다음: `hidden_homeroom_d4_cafe_1_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 저기 창가 쪽 긴 테이블에 문예부 애들 모여 있지? 다른 인원들도 곧 올 테니 우리는 일단 이쪽 구석 자리에 앉자.

---

### `hidden_homeroom_d4_cafe_1_b`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_1_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 선생님, 평소보다 꽤 긴장하신 것 같은데요?

---

### `hidden_homeroom_d4_cafe_1_c`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_1_d`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 티 나니? 솔직히 지금이라도 봉투째로 다시 들고 도망칠까 싶네.

---

### `hidden_homeroom_d4_cafe_1_d`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_1_e`

- 캐릭터: `teacher_smile.png`
**담임선생님**: 그래도 시킨 커피는 마시고 가야겠지. *애써 농담처럼 넘기며 따뜻한 머그잔을 감싸 쥔다. 테이블 위 코르크 받침에 둥근 물자국 두 개가 나란히 겹쳐진다.*

---

### `hidden_homeroom_d4_cafe_1_e`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_1_f`

- 캐릭터: `teacher_sad.png`
**{name}**: 부원들한테는 원고 어느 대목부터 보여주실 생각이에요?

---

### `hidden_homeroom_d4_cafe_1_f`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 막상 추려 내려니 영 부끄럽네. 밤에 혼자 스탠드 켜 놓고 고칠 때랑 남의 눈앞에 내놓을 때는 문장 무게가 전혀 다르거든. *머그잔을 내려놓은 뒤에도 선생님의 손끝은 도자기 손잡이를 만지작거린다.*

---

### `hidden_homeroom_d4_cafe_2`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_2_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 우선 도입부랑 첫 장면부터 돌리려고. 인물들이 주고받는 대사 호흡이 아직 제일 마음에 걸려서.

---

### `hidden_homeroom_d4_cafe_2_b`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_2_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 제가 적는 감상도 정식 합평 기록에 들어가요?

---

### `hidden_homeroom_d4_cafe_2_c`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_2_d`

- 캐릭터: `teacher_smile.png`
**담임선생님**: 이름은 전부 가리고 코멘트만 모을 거야. 누가 썼느냐보다 독자가 어느 문장에서 시선이 멈췄는지가 훨씬 중요하니까.

---

### `hidden_homeroom_d4_cafe_2_d`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_2_e`

- 캐릭터: `teacher_sad.png`
**{name}**: *의자 옆에 세워 둔 선생님의 가죽 가방 틈으로 원고 봉투가 보인다. 얼마나 여러 번 여닫았는지 접힌 자국이 손때로 희미하게 닳아 있다.*

---

### `hidden_homeroom_d4_cafe_2_e`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 글 쓰는 사람한테 합평 자리에서 제일 두려운 게 뭔지 알아?

---

### `hidden_homeroom_d4_cafe_3`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_choice`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 예의 바른 칭찬보다 읽다가 페이지를 못 넘기고 멈칫하는 순간을 마주하는 거야. 제일 쓰라리지만 그만큼 약이 되거든.

---

### `hidden_homeroom_d4_cafe_choice`
- 배경: `cafe.png`
- 배경톤: `warm`
- 선택지:
  1. "결말은 아직 못 정하셨어요?" → `hidden_homeroom_d4_cafe_choice_a` | Teacher +7
  2. "문예부 애들한테도 전부 보여주실 거죠?" → `hidden_homeroom_d4_cafe_choice_b` | Teacher +4
  3. "선생님 글이면 애들도 좋다고 하겠네요." → `hidden_homeroom_d4_cafe_trap` | Teacher -4

- 캐릭터: `teacher_normal.png`
**담임선생님**: 읽다가 어색하거나 숨이 막히는 대목이 있으면 가감 없이 밑줄 그어 줘. 다음 장이 궁금해서 넘긴 건지, 그냥 의무감으로 버티며 읽은 건지도 솔직히 알려 주고. *선생님이 턱끝으로 합평용 인쇄본 뭉치를 가리키며 내 눈을 가만히 들여다본다.*

---

### `hidden_homeroom_d4_cafe_choice_a`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_4`

- 캐릭터: `teacher_shy.png`
**담임선생님**: 응, 마지막 장 문장을 아직 못 닫았어. 괜히 그럴듯하게 포장하려다 보니 자꾸 진심이 흐려져서.

---

### `hidden_homeroom_d4_cafe_choice_b`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 그럼. 모두 똑같은 인쇄본이야. 네 손글씨 티 나지 않게 연필로 편하게 적어 줘.

---

### `hidden_homeroom_d4_cafe_trap`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 그렇게 인사치레만 들으려는 자리였으면 애초에 인쇄본을 돌리지도 않았지. 담임이 쓴 글이라고 덮어놓고 봐주는 건 사양이야.

---

### `hidden_homeroom_d4_cafe_4`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_4_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 비평하려 하지 말고 그냥 네 눈에 밟히는 문장만 체크해 줄래? 다른 부원들 합평지랑 섞어서 꼼꼼히 읽어 볼게.

---

### `hidden_homeroom_d4_cafe_4_b`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5`

- 캐릭터: `teacher_shy.png`
**{name}**: *대답을 기다리는 선생님의 엄지손가락이 종이 컵홀더 모서리를 잘게 접었다 펴기를 반복한다.*

---

### `hidden_homeroom_d4_cafe_5`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5_b`

- 캐릭터: `teacher_normal.png`
**{name}**: 알겠어요. 제 나름대로 솔직하게 적어서 드릴게요.

---

### `hidden_homeroom_d4_cafe_5_b`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5_c`

- 캐릭터: `teacher_smile.png`
**{name}**: 여백에 메모할 때 제 이름은 비워 둘까요? 문예부 애들이 제 필체를 알아보면 선생님이 곤란하실까 봐요. *내 말에 선생님이 컵홀더를 매만지던 손을 멈추고 옅게 웃는다.*

---

### `hidden_homeroom_d4_cafe_5_c`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5_d`

- 캐릭터: `teacher_smile.png`
**담임선생님**: 배려해 줘서 고마워. 무기명 합평이 원칙이니까 이름은 비워 두고 네 생각만 편하게 남겨 줘.

---

### `hidden_homeroom_d4_cafe_5_d`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5_e`

- 캐릭터: `teacher_normal.png`
**{name}**: 이렇게 주말에 원고 나누는 것도 학교 업무의 연장선이에요?

---

### `hidden_homeroom_d4_cafe_5_e`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5_f`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 서류상으로는 동아리 지도 활동이라고 해 두자.

---

### `hidden_homeroom_d4_cafe_5_f`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5_g`

- 캐릭터: `teacher_smile.png`
**{name}**: *안쪽 테이블에서 기다리던 문예부 부원이 조심스럽게 다가와 번호가 적힌 원고 한 부를 더 챙겨 간다.*

---

### `hidden_homeroom_d4_cafe_5_g`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_5_h`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 여기서 모인 메모들은 정리해서 다음 부활동 시간에 다 같이 이야기 나눌 거야.

---

### `hidden_homeroom_d4_cafe_5_h`
- 배경: `cafe.png`
- 배경톤: `warm`
- 다음: `hidden_homeroom_d4_cafe_6`

- 캐릭터: `teacher_normal.png`
**{name}**: 교무실이 아니라 원두 냄새 나는 카페에서 선생님 글을 읽으니까 기분이 묘하네요. *선생님이 마지막 인쇄본 윗부분에 작은 숫자를 적어 내 앞으로 밀어 준다. 종이를 건네는 손끝이 내 손등에 스치듯 닿았다 떨어진다.*

---

### `hidden_homeroom_d4_cafe_6`
- 배경: `cafe.png`
- 배경톤: `warm`
- 플래그: `homeroom_day4`
- 다음: `hidden_homeroom_d4_cafe_6_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 다음번엔 차분하게 학교 도서실에서 모이자. 마음이 급해서 장소를 너무 갑작스럽게 잡았네.

---

### `hidden_homeroom_d4_cafe_6_b`
- 다음: `hidden_homeroom_d4_freetalk`

<!-- i18n -->

---

### `hidden_homeroom_d4_freetalk`
- 배경: `cafe.png`
- 배경톤: `warm`
- 타입: `free_talk`
- 다음: `hidden_nurse_d4_check`
- 컨텍스트: "4일차 아침, 학교 근처 카페에서 담임의 오래된 원고에 대한 의견을 나눈 직후다. 담임은 주인공의 솔직한 감상을 고맙게 받아들였지만 두 사람은 여전히 교사와 학생이다. 원고에 담긴 사실은 앞 장면에서 밝혀진 범위만 사용하고 사적인 친밀감을 교사와 학생의 경계를 넘는 관계로 바꾸지 않는다."
- 성격: "담임은 신중하고 책임감 있는 교사이자 오래 글을 써 온 사람이다. 평가를 들을 때는 솔직한 긴장과 안도감을 보이지만 학생에게 위로나 비밀 유지를 강요하지 않고 성숙하게 대화를 이끈다."

- 캐릭터: `teacher_normal.png`
**담임선생님**: *한 김 식은 커피잔 옆으로 메모가 적힌 원고 뭉치를 가지런히 포개 놓는다.* 문예부 합평 얘기는 얼추 끝났네. 이제 네가 진짜로 하고 싶었던 얘기, 선생님이 들어 볼까?

---

### `hidden_homeroom_d4_decline`
- 배경: `street.png`
- 다음: `hidden_homeroom_d4_decline_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 그래, 주말인데 미리 잡은 약속이 먼저지. 원고 감상은 주중에 학교에서 정식으로 받을게.

---

### `hidden_homeroom_d4_decline_b`
- 배경: `street.png`
- 다음: `hidden_nurse_d4_check`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *선생님은 문예부 단체 채팅방 알림을 확인하며 천천히 교문 안쪽으로 발걸음을 돌린다.*

---

### `hidden_nurse_d4_morning_1`
- 배경: `nurse_room.png`
- BGM: `morning.mp3`
- 다음: `hidden_nurse_d4_morning_3`

- 캐릭터: `nurse_normal.png`
**{name}**: 선생님, 지난번에 잡아 주신 상담 시간에 맞춰 왔어요. *축제 준비로 어수선한 복도를 지나 조용한 보건실 문을 연다. 책상 위에 상담 기록지와 안내문이 가지런히 놓여 있다.*

---

### `hidden_nurse_d4_morning_3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_4`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 약속 시간 딱 맞춰서 왔네. 이쪽 의자에 편하게 앉아.

---

### `hidden_nurse_d4_morning_4`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님이 차분한 손길로 상담 기록지를 펼치고 볼펜 노크를 딸깍 누른다.*

---

### `hidden_nurse_d4_morning_5`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_6`

- 캐릭터: `nurse_normal.png`
**{name}**: 지난번에 나눴던 상담 내용 마무리하는 자리 맞죠?

---

### `hidden_nurse_d4_morning_6`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_7`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 응. 그사이 컨디션이 어땠는지 살피고 앞으로 힘들 때 바로 도움받을 수 있는 창구까지 같이 정해 두려고.

---

### `hidden_nurse_d4_morning_7`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_8`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *선생님의 시선이 지난 상담 때 꼼꼼히 적어 둔 체크리스트 항목을 하나씩 짚어 내려간다.*

---

### `hidden_nurse_d4_morning_8`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_9`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 기록 닫기 전에 한 가지만 확실히 짚고 넘어가자.

---

### `hidden_nurse_d4_morning_9`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_10`

- 캐릭터: `nurse_normal.png`
**{name}**: 어떤 건데요?

---

### `hidden_nurse_d4_morning_10`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_11`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *학교 상담 지원 안내문을 내 눈앞으로 반듯하게 돌려 놓는다.*

---

### `hidden_nurse_d4_morning_11`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_choice`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 보건실 문이 닫혀 있을 때에도 네가 망설이지 않고 도움을 청할 만한 어른을 한 명쯤 정해 뒀어?

---

### `hidden_nurse_d4_morning_choice`
- 배경: `nurse_room.png`
- 선택지:
  1. "담임이랑 상담실에도 말해볼게요." → `hidden_nurse_d4_morning_choice_a` | Nurse +8
  2. "아직은 잘 모르겠어요." → `hidden_nurse_d4_morning_choice_b` | Nurse +4
  3. "선생님한테만 말하면 안 돼요?" → `hidden_nurse_d4_morning_choice_trap` | Nurse -5

- 캐릭터: `nurse_normal.png`
**{name}**: *인쇄된 안내문 종이 위로 담임 교사 상담, 위클래스 전문 상담실, 보호자 연락망 순서가 또렷하게 적혀 있다.*

---

### `hidden_nurse_d4_morning_choice_trap`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_13`

- 캐릭터: `nurse_worried.png`
**보건선생님**: 물론 나한테 제일 먼저 찾아와도 돼. 다만 내가 보건실을 비우거나 손이 닿지 않을 때 네 옆을 지켜 줄 어른도 반드시 있어야 하니까.

---

### `hidden_nurse_d4_morning_choice_a`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_12`

- 캐릭터: `nurse_normal.png`
**{name}**: 담임선생님이랑 상담실 쪽에도 말씀드려 볼게요.

---

### `hidden_nurse_d4_morning_choice_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_12`

- 캐릭터: `nurse_normal.png`
**{name}**: 아직은 누구한테 말해야 할지 잘 모르겠어요.

---

### `hidden_nurse_d4_morning_12`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_morning_13`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 처음부터 혼자 고르기 막막하면 선생님이랑 같이 추려 보자. 우선 이 안내문에 바로 연락 닿는 내선 번호부터 형광펜으로 칠해 둘게.

---

### `hidden_nurse_d4_morning_13`
- 배경: `nurse_room.png`
- 플래그: `nurse_day4_afterschool`
- 다음: `hidden_nurse_d4_morning_freetalk`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 네가 털어놓은 속마음을 허락 없이 남에게 옮기진 않아. 대신 네가 다칠 위험이 보이면 그때는 지체 없이 다른 어른들과도 힘을 합칠 거야. 그 원칙만은 꼭 약속해 줘.

---

### `hidden_nurse_d4_morning_freetalk`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_check`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *상담 기록지 파일철을 부드럽게 덮는다.* 방금 같이 적어 둔 연락 순서 기억하지? 숨이 턱 막히는 순간이 오면 혼자 참지 말고 첫 번째 칸에 적힌 곳부터 찾아가.

---

### `hidden_homeroom_d4_skip`
- 배경: `street.png`
- 호감분기: Teacher
  - [-19 이상] → `hidden_homeroom_d4_low`
  - [기본] → `hidden_homeroom_d4_neg`
- 다음: `hidden_homeroom_d4_neg`

- 캐릭터: `없음`

---

### `hidden_homeroom_d4_low`
- 배경: `street.png`
- 다음: `hidden_nurse_d4_check`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *약속 장소 앞에서 마주친 담임선생님이 낡은 종이봉투를 품 안으로 깊숙이 끌어안는다.* 미안하지만 이번엔 원고를 보여주기 어렵겠어. 월요일에 학교에서 보자.

---

### `hidden_homeroom_d4_neg`
- 배경: `street.png`
- 다음: `hidden_nurse_d4_check`

- 캐릭터: `teacher_worried.png`
**담임선생님**: *담임선생님이 싸늘하게 식은 얼굴로 종이봉투를 가방 안에 밀어 넣는다.* 너한테 보여줄 원고는 없다. 그만 돌아가.

---

### `hidden_nurse_d4_check`
- 분기:
  - [`nurse_day3`] → `hidden_nurse_d4_1`
  - [기본] → `day4_haeun_gate`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `hidden_nurse_d4_1`
- 배경: `nurse_room.png`
- BGM: `morning.mp3`
- 다음: `hidden_nurse_d4_1_b`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건실 긴 책상 위로 학교 행사에 쓸 구급함과 소독 도구들이 수북이 쌓여 있다. 소매를 걷어붙이고 라벨 스티커를 붙이던 보건선생님이 안경 너머로 문가에 선 나를 발견한다.*

---

### `hidden_nurse_d4_1_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_2`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *선생님이 눈을 동그랗게 뜨며 몸을 돌린다.* 어라, 주말 아침인데 진짜 도와주러 온 거야?

---

### `hidden_nurse_d4_2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_2_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 행사장에 비치할 응급키트 포장할 손이 모자라서 공고를 내긴 했는데 네가 지원할 줄은 몰랐네.

---

### `hidden_nurse_d4_2_b`
- 배경: `nurse_room.png`
- 배경톤: `cold`
- 다음: `hidden_nurse_d4_2_c`

- 캐릭터: `nurse_shy.png`
**{name}**: 이번엔 아파서 온 환자 말고 일손 돕는 봉사자 자격이니까요.

---

### `hidden_nurse_d4_2_c`
- 배경: `nurse_room.png`
- 배경톤: `cold`
- 다음: `hidden_nurse_d4_2_d`

- 캐릭터: `nurse_dry_smile.png`
**보건선생님**: 좋아, 지금은 든든한 봉사자. 작업하다가 종이에 손이라도 베이면 그때부터 다시 환자.

---

### `hidden_nurse_d4_2_d`
- 배경: `nurse_room.png`
- 배경톤: `cold`
- 다음: `hidden_nurse_d4_2_e`

- 캐릭터: `nurse_shy.png`
**{name}**: 멸균 거즈랑 알코올 스왑은 손 닿기 편하게 이쪽에 분류해 둘게요. *바쁘게 드나드는 축제 준비 스태프들 틈에서 선생님의 동선에 맞춰 작업 테이블을 정리한다.*

---

### `hidden_nurse_d4_2_e`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_2_f`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *투명한 지퍼 파우치 묶음을 내 앞으로 건넨다.* 거즈 두 장에 소독솜 세 개씩 넣으면 돼. 학생들 민감한 건강 기록이 적힌 서류 분류는 선생님이 직접 맡을게.

---

### `hidden_nurse_d4_2_f`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_2_g`

- 캐릭터: `nurse_normal.png`
**{name}**: 이 줄 파우치는 수량 맞춰서 다 채웠어요. 빠진 거 없는지 봐 주세요. *선생님 손끝과 내 손끝이 파우치 위에서 가볍게 스치고 나는 곧바로 다음 빈 파우치를 끌어당긴다.*

---

### `hidden_nurse_d4_2_g`
- 배경: `nurse_room.png`
- 배경톤: `cold`
- 다음: `hidden_nurse_d4_2_h`

- 캐릭터: `nurse_tired.png`
**보건선생님**: 예전에 대학병원 병동에 있을 땐 이런 물품 준비도 밤새 혼자 떠맡는 일이 허다했거든.

---

### `hidden_nurse_d4_2_h`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_3`

- 캐릭터: `nurse_shy.png`
**{name}**: 그 많은 걸 혼자서 다 하셨다고요?

---

### `hidden_nurse_d4_3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4`

- 캐릭터: `nurse_normal.png`
**{name}**: 옆에서 거들어 주는 동료들이 있다고 하셨잖아요.

---

### `hidden_nurse_d4_4`
- 배경: `nurse_room.png`
- 배경톤: `cold`
- 다음: `hidden_nurse_d4_4_b`

- 캐릭터: `nurse_tired.png`
**보건선생님**: 응급 환자가 몰리는 야간 당직 때는 간호사 세 명 몫의 처치를 혼자 뛰어다니며 메워야 하는 밤도 많았어.

---

### `hidden_nurse_d4_4_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_c`

- 캐릭터: `nurse_normal.png`
**{name}**: 그러다 몸이 축나서 번아웃이 오신 거군요.

---

### `hidden_nurse_d4_4_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_d`

- 캐릭터: `nurse_tired.png`
**보건선생님**: 잠 못 자고 바빴던 것도 사실이긴 해. 하지만 단순히 일에 치여서 그만뒀다고 하면 가장 중요한 이유가 빠지지. *선생님이 파일철을 덮는 순간 쥐고 있던 펜 끝이 매끄러운 표지 위에서 작게 미끄러진다.*

---

### `hidden_nurse_d4_4_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_e`

- 캐릭터: `nurse_tired.png`
**보건선생님**: 그 시절 나를 제일 숨 막히게 했던 건 끝없는 업무량이 아니었어.

---

### `hidden_nurse_d4_4_e`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_f`

- 캐릭터: `nurse_normal.png`
**{name}**: 업무량이 아니면 뭐가 그렇게 힘드셨는데요?

---

### `hidden_nurse_d4_4_f`
- 배경: `nurse_room.png`
- 배경톤: `cold`
- 다음: `hidden_nurse_d4_4_g`

- 캐릭터: `nurse_tired.png`
**보건선생님**: 환자 얼굴이나 이름보다 차트에 적힌 병상 번호와 바이탈 수치부터 기계적으로 확인하고 있는 내 모습을 발견할 때였어. 내가 사람 눈을 보고 있는 건지 모니터를 보고 있는 건지조차 흐려졌거든.

---

### `hidden_nurse_d4_4_g`
- 다음: `hidden_nurse_d4_4_h`

<!-- i18n -->

---

### `hidden_nurse_d4_4_h`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_i`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 학교 보건실에서는 찾아오는 아이들 눈을 한 명씩 똑바로 마주 보고 숨 고를 시간이 있잖아. 내 선에서 해결 못 할 일이면 제대로 도와줄 수 있는 곳까지 손잡고 연결해 주는 것도 내 몫이고.

---

### `hidden_nurse_d4_4_i`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_j`

- 캐릭터: `nurse_normal.png`
**{name}**: 누군가에게 연결해 주는 일도 치료에 포함되는 거예요?

---

### `hidden_nurse_d4_4_j`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_4_k`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 당연하지. 그러니까 너도 혼자 감당하기 버거운 일이 생기면 보건실이든 담임선생님이든 상담실이든 꼭 문을 두드려. 혼자 속으로만 끙끙 앓지 말고.

---

### `hidden_nurse_d4_4_k`
- 배경: `nurse_room.png`
- 배경톤: `cold`
- 다음: `hidden_nurse_d4_5`

- 캐릭터: `nurse_shy.png`
**{name}**: 마지막 응급키트 지퍼까지 다 잠갔어요. *묵직해진 구급 상자를 정리하자 대기하던 학생 스태프들이 상자를 들어 나른다.*

---

### `hidden_nurse_d4_5`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_name_choice`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그래서 화려한 대학병원 대신 학교로 왔어. 약을 건네기 전에 그 사람이 무슨 말을 삼키고 있는지 귀 기울이는 법부터 다시 시작하려고.

---

### `hidden_nurse_d4_name_choice`
- 배경: `nurse_room.png`
- 배경톤: `cold`
- 선택지:
  1. "언제 보건교사가 되길 잘했다고 느껴요?" → `hidden_nurse_d4_name_choice_a` | Nurse +4
  2. "병원과 학교는 뭐가 제일 달라요?" → `hidden_nurse_d4_name_choice_b` | Nurse +2
  3. "학교에선 크게 다칠 일도 드물어서 마음은 좀 편하시겠어요." → `hidden_nurse_d4_name_trap` | Nurse -3

- 캐릭터: `nurse_shy.png`
**{name}**: *보건선생님이 안경을 고쳐 쓰며 수량 확인표에 완성된 응급키트 개수를 또박또박 기입한다.*

---

### `hidden_nurse_d4_name_choice_a`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 복도에서 서성거리며 혼자 참던 학생이 용기 내서 보건실 문을 먼저 똑똑 두드릴 때. 그 순간엔 정말 여기 오길 잘했다 싶어.

---

### `hidden_nurse_d4_name_choice_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 병원은 이미 크게 다친 뒤에야 실려 오는 곳이지만 여기서는 상처가 덧나기 전에 내가 먼저 안부를 물을 수 있어. 그게 제일 큰 차이야.

---

### `hidden_nurse_d4_name_trap`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 눈에 보이는 외상만 치료하면 되는 곳이면 얼마나 좋겠어. 학교에는 티도 못 내고 속으로 곪아 가며 버티는 아이들이 훨씬 더 많거든.

---

### `hidden_nurse_d4_6`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_6_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 네가 옆에서 손 맞춰 준 덕분에 예상보다 훨씬 일찍 끝났어. 내 과거 얘기는 그냥 흘려들어도 되는 별거 아닌 얘기고.

---

### `hidden_nurse_d4_6_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_6_c`

- 캐릭터: `nurse_normal.png`
**{name}**: 방금 들은 건 절대 별거 아닌 얘기가 아닌데요.

---

### `hidden_nurse_d4_6_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_6_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 네가 그렇게 진지하게 들어 주니까 괜히 부끄럽잖아. 대신 봉사 활동 시간만큼은 일 분도 안 빼놓고 꽉 채워서 적어 줄게.

---

### `hidden_nurse_d4_6_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_choice`

- 캐릭터: `nurse_normal.png`
**{name}**: *선생님이 봉사 활동 확인서 양식에 시작 시각과 종료 시각을 정갈한 글씨로 채워 넣는다.*

---

### `hidden_nurse_d4_choice`
- 배경: `nurse_room.png`
- 선택지:
  1. "응급키트 라벨도 붙이고 갈게요." → `hidden_nurse_d4_meal_walk` | Nurse +5
  2. "괜찮아요, 저 이만 갈게요" → `hidden_nurse_d4_pass` | Nurse +2
  3. "선생님이 하시는 게 더 빠르겠어요." → `hidden_nurse_d4_trap` | Nurse -4

- 캐릭터: `nurse_normal.png`
**보건선생님**: 이제 상자 겉면에 부서별 라벨 붙이는 작업만 남았네. 행사 스태프들이 분식집에 간식 사러 간다는데 같이 먹고 마저 끝낼 사람?

---

### `hidden_nurse_d4_meal_walk`
- 배경: `snack_shop.webp`
- 배경톤: `warm`
- 다음: `hidden_nurse_d4_meal_1`

- 캐릭터: `nurse_normal.png`
**{name}**: 스태프 인원수대로 포장된 거 맞죠? *학교 앞 분식집에서 김이 모락모락 나는 포장 봉투를 두 손으로 나눠 든다.*

---

### `hidden_nurse_d4_meal_1`
- 배경: `snack_shop.webp`
- 배경톤: `warm`
- 다음: `hidden_nurse_d4_meal_1_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 잠깐, 이 매운맛 떡볶이 누가 골랐어. 얼른 냉수부터 챙겨 와.

---

### `hidden_nurse_d4_meal_1_b`
- 배경: `snack_shop.webp`
- 배경톤: `warm`
- 다음: `hidden_nurse_d4_meal_1_c`

- 캐릭터: `nurse_normal.png`
**{name}**: 방금 선생님이 제일 먼저 집어 드셨잖아요.

---

### `hidden_nurse_d4_meal_1_c`
- 배경: `snack_shop.webp`
- 배경톤: `warm`
- 다음: `hidden_nurse_d4_meal_1b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 학생들 먹이기 전에 맵기 정도를 점검하려고 먼저 맛본 거지. *종이컵에 든 찬물을 단숨에 들이켜고 입술 끝을 훔친다.* 아무리 봐도 이건 우리 응급키트 소화제로도 못 살릴 맛이야.

---

### `hidden_nurse_d4_meal_1b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_2`

- 캐릭터: `nurse_normal.png`
**{name}**: *간식을 마저 비운 스태프들과 함께 보건실로 돌아와 키트 상자 겉면에 구역별 라벨 스티커를 붙인다.*

---

### `hidden_nurse_d4_meal_2`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_2_b`

- 캐릭터: `nurse_normal.png`
**{name}**: 아까 대학병원 시절 얘기하실 때랑은 얼굴 표정이 완전히 다르시네요.

---

### `hidden_nurse_d4_meal_2_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_3`

- 캐릭터: `nurse_normal.png`
**{name}**: *선생님 얼굴을 쳐다보며 말하다가 손끝의 라벨 한 장이 상자 모서리에 비스듬히 붙는다.* 지금은 한결 편안해 보이세요. 아, 제가 말 걸다가 라벨이 삐뚤어졌네요.

---

### `hidden_nurse_d4_meal_3`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_3_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그치? 옛날생각 하느라 나도 모르게 표정이 굳어 있었나 봐. 이리 줘 봐, 그 상자 모서리만 반듯하게 다시 붙이고 마무리하자.

---

### `hidden_nurse_d4_meal_3_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_3_c`

- 캐릭터: `nurse_normal.png`
**{name}**: *선생님이 떼어 낸 라벨을 내가 이어받아 마지막 상자 정중앙에 깔끔하게 눌러 붙인다.*

---

### `hidden_nurse_d4_meal_3_c`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_3_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 좋아, 준비 작업은 여기까지. 다들 봉사 시간 기재된 거 확인하고 각자 맡은 행사 구역으로 이동해.

---

### `hidden_nurse_d4_meal_3_d`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_3_e`

- 캐릭터: `nurse_normal.png`
**{name}**: *가방을 챙겨 보건실 문을 나서려는데 선생님이 서류 한 장을 들고 내 등 뒤로 다가온다.*

---

### `hidden_nurse_d4_meal_3_e`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_meal_4`

- 캐릭터: `nurse_normal.png`
**보건선생님**: {name}, 제일 중요한 봉사 확인표 놓고 가잖아.

---

### `hidden_nurse_d4_meal_4`
- 배경: `nurse_room.png`
- 플래그: `nurse_day4`, `nurse_day4_help`
- 다음: `hidden_nurse_d4_meal_4_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: {name}. 주말 아침부터 옆에서 같이 손 맞춰 줘서 정말 고마웠어. 월요일에 나이스에 봉사 시간 제대로 올라갔는지 꼭 확인해.

---

### `hidden_nurse_d4_meal_4_b`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_freetalk`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *선생님이 가벼운 미소를 남기고 완성된 응급키트 상자를 행사 담당 교사에게 인계한다.*

---

### `hidden_nurse_d4_pass`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_freetalk`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그래, 쉬는 날 아침에 이렇게 발걸음 해 준 것만으로도 충분히 고마워. 남은 주말 잘 보내고 조심히 들어가.

---

### `hidden_nurse_d4_trap`
- 배경: `nurse_room.png`
- 다음: `hidden_nurse_d4_freetalk`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 혼자서도 할 수야 있지. 그래도 기왕 시작한 일, 네가 마지막 상자까지 같이 옆에서 마무리해 주면 좋겠다 싶어서 물어본 거야.

---

### `hidden_nurse_d4_freetalk`
- 배경: `nurse_room.png`
- 타입: `free_talk`
- 다음: `day4_haeun_gate`
- 컨텍스트: "4일차 아침, 학교 행사 준비와 응급키트 정리를 함께 마친 보건실이다. 함께 간식을 먹었을 수도 있고 주인공이 먼저 쉬기로 했을 수도 있으므로, 저장된 사건만 사실로 다룬다. 두 사람은 보건교사와 학생이며 신뢰가 깊어졌지만 전문적 경계는 유지된다."
- 성격: "보건선생님은 실용적이고 세심하며 피곤한 순간에도 유머를 잃지 않는다. 자신의 과거를 과장해 털어놓기보다 필요한 만큼만 솔직하게 말하고 학생의 건강과 선택을 존중한다."

- 캐릭터: `nurse_normal.png`
**보건선생님**: *마지막 응급키트 지퍼를 닫아 상자에 넣은 뒤 맞은편 보조 의자를 손끝으로 가리킨다.* 일손 돕느라 고생 많았어. 이제 숨 돌릴 겸 잠깐 네 얘기 들어 봐도 되겠네.

---

### `hidden_nurse_d4_skip`
- 배경: `nurse_room.png`
- 호감분기: Nurse
  - [-19 이상] → `hidden_nurse_d4_low`
  - [기본] → `hidden_nurse_d4_neg`
- 다음: `hidden_nurse_d4_neg`

- 캐릭터: `없음`

---

### `hidden_nurse_d4_low`
- 배경: `nurse_room.png`
- 다음: `day4_haeun_gate`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님이 정리하던 응급키트 지퍼를 끝까지 끌어당겨 닫는다.* 이 정도면 혼자서도 충분히 마칠 수 있어. 너도 네 일정 챙기러 돌아가 봐.

---

### `hidden_nurse_d4_neg`
- 배경: `nurse_room.png`
- 다음: `day4_haeun_gate`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님이 시선도 주지 않은 채 키트 지퍼를 단호하게 닫는다.* 남은 정리는 혼자 할 테니까 그만 돌아가.

---

### `day4_haeun_gate`
- 분기:
  - [`day4_haeun_event_done`] → `morning4_end`
  - [기본] → `day4_haeun_trust_check`

---

### `day4_haeun_trust_check`
- 호감분기: Haeun
  - [0+] → `day4_haeun_personal_gate`
  - [기본] → `day4_haeun_approach`

---

### `day4_haeun_approach`
- 배경: `school.png`
- 다음: `day4_haeun_select_concern`

- 캐릭터: `haeun_worried.png`
**{name}**: 하은아, 잠깐 얘기 좀 할 수 있어? *열린 교문 기둥 옆에서 누군가와 심각하게 대화를 나누고 있던 하은에게 다가간다.*

---

### `day4_haeun_select_concern`
- 실시간 라이벌 분기:
  - [`Seoyeon`] → `day4_haeun_concern_seoyeon_intro`
  - [`Yuna`] → `day4_haeun_concern_yuna_intro`
  - [`Dain`] → `day4_haeun_concern_dain_intro`
  - [`Teacher`] → `day4_haeun_concern_teacher_intro`
  - [`Nurse`] → `day4_haeun_concern_nurse_intro`

---

### `day4_haeun_concern_seoyeon_intro`
- 배경: `school.png`
- 다음: `day4_haeun_concern_seoyeon_arrival`

- 캐릭터: `haeun_worried.png`
**하은**: *교문 기둥 옆에서 서연 선배와 낮게 이야기를 나누던 하은이 다가오는 나를 발견하고 말을 멈춘다.* 어제 선배랑 얘기할 때 마음이 좀 불편했어요. 혼자 어떻게 받아들여야 할지 몰라서 서연 선배께 말씀드렸어요.

---

### `day4_haeun_concern_seoyeon_arrival`
- 배경: `school.png`
- 다음: `day4_haeun_concern_choice`

- 캐릭터: `seyoun_pout.png`
**서연**: 어제 하은이랑 무슨 대화를 나눈 거야? *서연이 품에 안고 있던 학생회 서류철을 천천히 내린다.* 내가 듣고도 그냥 웃어넘길 수 있는 얘기가 아니었어.

---

### `day4_haeun_concern_yuna_intro`
- 배경: `school.png`
- 다음: `day4_haeun_concern_yuna_arrival`

- 캐릭터: `haeun_worried.png`
**하은**: *교문 옆 그늘에서 유나 선배에게 조용히 사정을 말하던 하은이 나를 보고 입을 다문다.* 어제 선배랑 얘기할 때 좀 불편했어요. 혼자 어떻게 받아들여야 할지 몰라서 유나 선배께 말씀드렸어요.

---

### `day4_haeun_concern_yuna_arrival`
- 배경: `school.png`
- 다음: `day4_haeun_concern_choice`

- 캐릭터: `yuna_sad.png`
**유나**: *유나가 하은에게서 시선을 떼어 내 눈을 가만히 응시한다.* 하은이한테 어제 얘기는 들었어. 이제 네 입으로 직접 듣고 싶어.

---

### `day4_haeun_concern_dain_intro`
- 배경: `school.png`
- 다음: `day4_haeun_concern_dain_arrival`

- 캐릭터: `haeun_worried.png`
**하은**: *교문 옆에서 다인 선배에게 조용히 말하던 하은이 나를 발견하고 걸음을 멈춘다.* 어제 선배랑 얘기할 때 마음이 좀 불편했어요. 어떻게 받아들여야 할지 몰라서 다인 선배께 말씀드렸어요.

---

### `day4_haeun_concern_dain_arrival`
- 배경: `school.png`
- 다음: `day4_haeun_concern_choice`

- 캐릭터: `dain_angry.png`
**다인**: 네가 오는 걸 보더니 하은이가 말을 멈추더라. *다인이 웃음기를 거둔 얼굴로 내 앞을 가로막아 선다.* 어제 무슨 일이 있었는지 너한테도 똑바로 물어볼게.

---

### `day4_haeun_concern_teacher_intro`
- 배경: `school.png`
- 다음: `day4_haeun_concern_teacher_arrival`

- 캐릭터: `haeun_worried.png`
**하은**: *교문 옆에서 담임선생님께 조용히 사정을 말씀드리던 하은이 나를 보고 멈춘다.* 어제 선배랑 얘기할 때 좀 불편했어요. 혼자 어떻게 받아들여야 할지 몰라서 선생님께 말씀드렸어요.

---

### `day4_haeun_concern_teacher_arrival`
- 배경: `school.png`
- 다음: `day4_haeun_concern_choice`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *담임선생님이 하은의 옆으로 반 걸음 비켜 서며 나를 부른다.* 한쪽 이야기만 듣고 섣불리 판단하진 않을 거야. 어제 무슨 맥락이었는지 네가 차분히 설명해 봐.

---

### `day4_haeun_concern_nurse_intro`
- 배경: `school.png`
- 다음: `day4_haeun_concern_nurse_arrival`

- 캐릭터: `haeun_worried.png`
**하은**: *교문 옆에서 보건선생님께 조용히 말씀드리던 하은이 나를 보고 말을 멈춘다.* 어제 선배랑 얘기할 때 좀 불편했어요. 어떻게 받아들여야 할지 몰라서 보건선생님께 말씀드렸어요.

---

### `day4_haeun_concern_nurse_arrival`
- 배경: `school.png`
- 다음: `day4_haeun_concern_choice`

- 캐릭터: `nurse_worried.png`
**보건선생님**: *보건선생님이 하은의 기색을 살핀 뒤 내게로 시선을 맞춘다.* 후배가 대화를 나누다 불편함을 느꼈다는 건 가볍게 넘기기 어려워. 네 쪽 설명도 직접 들어야겠어.

---

### `day4_haeun_concern_choice`
- 배경: `school.png`
- 선택지:
  1. "무슨 얘길 들었는지 묻는다" → `day4_haeun_concern_open`
  2. "지금은 말하기 싫다" → `day4_haeun_concern_delay` | 플래그: `day4_haeun_delayed_explanation`

- 캐릭터: `haeun_worried.png`
**{name}**: *하은이 굳은 얼굴로 내 쪽을 향해 돌아선다. 하은의 이야기를 듣고 있던 발걸음도 교문 옆 그 자리에 그대로 멈춰 선다.*

---

### `day4_haeun_concern_open`
- 배경: `school.png`
- 다음: `day4_haeun_concern_clarify`

- 캐릭터: `없음`
**{name}**: 하은아, 어제 대화 때문에 무슨 얘기가 오갔는지 나한테도 들려줄래? 네가 있는 자리에서 숨김없이 다 설명할게.

---

### `day4_haeun_concern_delay`
- 배경: `school.png`
- 다음: `day4_haeun_concern_clarify`

- 캐릭터: `없음`
**{name}**: 하은아, 지금은 시간이 없어서 나중에 다시 얘기하자. *자리를 피하려 발걸음을 돌리자 등 뒤에서 나를 부르는 목소리가 걸음을 붙잡는다.*

---

### `day4_haeun_concern_clarify`
- 배경: `school.png`
- 다음: `day4_haeun_reputation_cg`

- 캐릭터: `haeun_firm.png`
**하은**: 선배를 나쁘게 만들려고 없는 말을 지어낸 건 아니에요. 그냥 어제 대화하면서 제가 솔직히 불편했던 점을 말씀드린 거예요. *하은이 흔들림 없는 눈으로 나를 똑바로 바라본다.* 혹시 선배가 다른 뜻으로 하신 말씀이었다면 지금 이 자리에서 말씀해 주세요.

---

### `day4_haeun_reputation_cg`
- 배경: `event_haeun_reputation.png`
- 다음: `day4_haeun_concern_router`

- 캐릭터: `없음`
**{name}**: *교문 앞의 서늘한 아침 공기 속에서 하은이 입술을 살짝 깨문 채 내 대답을 기다린다.*

---

### `day4_haeun_concern_router`
- 실시간 라이벌 분기:
  - [`Seoyeon`] → `day4_haeun_concern_seoyeon_check`
  - [`Yuna`] → `day4_haeun_concern_yuna_check`
  - [`Dain`] → `day4_haeun_concern_dain_check`
  - [`Teacher`] → `day4_haeun_concern_teacher_check`
  - [`Nurse`] → `day4_haeun_concern_nurse_check`

---

### `day4_haeun_concern_seoyeon_check`
- 분기:
  - [`day4_haeun_delayed_explanation`] → `day4_haeun_concern_seoyeon_escalation_delay`
  - [기본] → `day4_haeun_concern_seoyeon_escalation`

---

### `day4_haeun_concern_seoyeon_escalation`
- 배경: `school.png`
- 플래그: `day4_haeun_misunderstanding_started`
- 스탯: Seoyeon -15
- 다음: `day4_haeun_concern_seoyeon_group_talk`

- 캐릭터: `seyoun_pout.png`
**서연**: 하은이가 그만큼 불편해했다는 걸 네가 알고도 그랬는지가 제일 신경 쓰여. *서연이 차분하지만 단단한 눈빛으로 내 대답을 기다린다.* 피하지 말고 여기서 직접 말해 줘.

---

### `day4_haeun_concern_seoyeon_escalation_delay`
- 배경: `school.png`
- 플래그: `day4_haeun_misunderstanding_started`
- 스탯: Seoyeon -20
- 다음: `day4_haeun_concern_seoyeon_group_talk`

- 캐릭터: `seyoun_pout.png`
**서연**: 하은이가 그만큼 불편해했다는 걸 네가 알고도 그랬는지가 제일 신경 쓰여. *서연이 차분하지만 단단한 눈빛으로 내 대답을 기다린다.* 피하지 말고 여기서 직접 말해 줘.

---

### `day4_haeun_concern_seoyeon_group_talk`
- 배경: `school.png`
- 타입: `group_free_talk`
- 다음: `day4_haeun_finish`

- 캐릭터: `없음`
**서연**: *서연이 긴장한 하은의 어깨를 한 번 살핀 뒤 내게로 시선을 돌린다.* 네 얘기를 이런 식으로 전해 들을 줄은 몰랐어. 어제 하은이한테 대체 무슨 말을 한 거야?

---

### `day4_haeun_concern_yuna_check`
- 분기:
  - [`day4_haeun_delayed_explanation`] → `day4_haeun_concern_yuna_escalation_delay`
  - [기본] → `day4_haeun_concern_yuna_escalation`

---

### `day4_haeun_concern_yuna_escalation`
- 배경: `school.png`
- 플래그: `day4_haeun_misunderstanding_started`
- 스탯: Yuna -15
- 다음: `day4_haeun_concern_yuna_group_talk`

- 캐릭터: `yuna_sad.png`
**유나**: *유나가 쥐고 있던 휴대폰을 코트 주머니에 깊숙이 넣는다.* 지금으로선 네 말을 어떻게 믿어야 할지 모르겠어. 어제 무슨 뜻으로 한 말이었는지 숨기지 말고 말해 줘.

---

### `day4_haeun_concern_yuna_escalation_delay`
- 배경: `school.png`
- 플래그: `day4_haeun_misunderstanding_started`
- 스탯: Yuna -20
- 다음: `day4_haeun_concern_yuna_group_talk`

- 캐릭터: `yuna_sad.png`
**유나**: *유나가 쥐고 있던 휴대폰을 코트 주머니에 깊숙이 넣는다.* 지금으로선 네 말을 어떻게 믿어야 할지 모르겠어. 어제 무슨 뜻으로 한 말이었는지 숨기지 말고 말해 줘.

---

### `day4_haeun_concern_yuna_group_talk`
- 배경: `school.png`
- 타입: `group_free_talk`
- 다음: `day4_haeun_finish`

- 캐릭터: `없음`
**유나**: *유나가 한쪽 이어폰 줄을 감아 주머니에 넣으며 차분하게 묻는다.* 하은이가 전해 준 얘기가 내가 알던 너랑 너무 달라서 그래. 네가 직접 말해 줘. 어제 무슨 얘길 한 거야?

---

### `day4_haeun_concern_dain_check`
- 분기:
  - [`day4_haeun_delayed_explanation`] → `day4_haeun_concern_dain_escalation_delay`
  - [기본] → `day4_haeun_concern_dain_escalation`

---

### `day4_haeun_concern_dain_escalation`
- 배경: `school.png`
- 플래그: `day4_haeun_misunderstanding_started`
- 스탯: Dain -15
- 다음: `day4_haeun_concern_dain_group_talk`

- 캐릭터: `dain_angry.png`
**다인**: *다인이 팔짱을 풀고 내 눈을 정면으로 바라본다.* 억울한 오해면 지금 시원하게 풀고 혹시라도 상처 준 말이 있으면 솔직하게 인정해. 내가 옆에서 끝까지 들을 테니까.

---

### `day4_haeun_concern_dain_escalation_delay`
- 배경: `school.png`
- 플래그: `day4_haeun_misunderstanding_started`
- 스탯: Dain -20
- 다음: `day4_haeun_concern_dain_group_talk`

- 캐릭터: `dain_angry.png`
**다인**: *다인이 팔짱을 풀고 내 눈을 정면으로 바라본다.* 억울한 오해면 지금 시원하게 풀고 혹시라도 상처 준 말이 있으면 솔직하게 인정해. 내가 옆에서 끝까지 들을 테니까.

---

### `day4_haeun_concern_dain_group_talk`
- 배경: `school.png`
- 타입: `group_free_talk`
- 다음: `day4_haeun_finish`

- 캐릭터: `없음`
**다인**: *다인이 내 코앞에서 걸음을 딱 멈춘다.* 어제 하은이한테 대체 뭐라고 했어? 내가 아는 너는 후배한테 함부로 대할 애가 아닌데. 네 입으로 직접 말해 봐.

---

### `day4_haeun_concern_teacher_check`
- 분기:
  - [`day4_haeun_delayed_explanation`] → `day4_haeun_concern_teacher_escalation_delay`
  - [기본] → `day4_haeun_concern_teacher_escalation`

---

### `day4_haeun_concern_teacher_escalation`
- 배경: `school.png`
- 플래그: `day4_haeun_misunderstanding_started`
- 스탯: Teacher -15
- 다음: `day4_haeun_concern_teacher_group_talk`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *담임선생님이 진지한 눈빛으로 나를 똑바로 바라본다.* 네 원래 의도와 다르게 전달됐을 수도 있겠지. 그래도 하은이가 왜 불편함을 느꼈는지는 같이 짚어 봐야 해. 네 생각은 어때?

---

### `day4_haeun_concern_teacher_escalation_delay`
- 배경: `school.png`
- 플래그: `day4_haeun_misunderstanding_started`
- 스탯: Teacher -20
- 다음: `day4_haeun_concern_teacher_group_talk`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *담임선생님이 진지한 눈빛으로 나를 똑바로 바라본다.* 네 원래 의도와 다르게 전달됐을 수도 있겠지. 그래도 하은이가 왜 불편함을 느꼈는지는 같이 짚어 봐야 해. 네 생각은 어때?

---

### `day4_haeun_concern_teacher_group_talk`
- 배경: `school.png`
- 타입: `group_free_talk`
- 다음: `day4_haeun_finish`

- 캐릭터: `없음`
**담임선생님**: *담임선생님이 들고 있던 서류철을 팔 아래로 내린다.* 평소에 너를 믿음직하게 보고 있었는데 이 이야기는 그냥 넘길 수가 없네. 어제 하은이에게 무슨 말을 했는지 솔직하게 설명해 봐.

---

### `day4_haeun_concern_nurse_check`
- 분기:
  - [`day4_haeun_delayed_explanation`] → `day4_haeun_concern_nurse_escalation_delay`
  - [기본] → `day4_haeun_concern_nurse_escalation`

---

### `day4_haeun_concern_nurse_escalation`
- 배경: `school.png`
- 플래그: `day4_haeun_misunderstanding_started`
- 스탯: Nurse -15
- 다음: `day4_haeun_concern_nurse_group_talk`

- 캐릭터: `nurse_worried.png`
**보건선생님**: *보건선생님이 입가의 여유로운 미소를 지우고 차분하게 말한다.* 하은이가 왜 네 말을 그렇게 받아들였는지 셋이 있을 때 차근차근 짚어 보자. 네가 먼저 설명해 줘.

---

### `day4_haeun_concern_nurse_escalation_delay`
- 배경: `school.png`
- 플래그: `day4_haeun_misunderstanding_started`
- 스탯: Nurse -20
- 다음: `day4_haeun_concern_nurse_group_talk`

- 캐릭터: `nurse_worried.png`
**보건선생님**: *보건선생님이 입가의 여유로운 미소를 지우고 차분하게 말한다.* 하은이가 왜 네 말을 그렇게 받아들였는지 셋이 있을 때 차근차근 짚어 보자. 네가 먼저 설명해 줘.

---

### `day4_haeun_concern_nurse_group_talk`
- 배경: `school.png`
- 타입: `group_free_talk`
- 다음: `day4_haeun_finish`

- 캐릭터: `없음`
**보건선생님**: *보건선생님이 긴장한 하은을 먼저 달래듯 보듬고 내 쪽으로 돌아선다.* 네 이야기를 이런 자리에서 듣게 될 줄은 몰랐어. 하은이가 저렇게까지 마음에 걸려 하는 이유를 너한테도 직접 듣고 싶어. 어제 무슨 말을 했어?

---

### `day4_haeun_finish`
- 배경: `school.png`
- 플래그: `day4_haeun_event_done`
- 다음: `day4_haeun_personal_gate`

- 캐릭터: `없음`
**{name}**: 우리가 정문 앞 길을 막고 있었네. 이쪽 그늘로 잠깐 비키자. *숨을 고르며 하은과 함께 교문 옆 담장 쪽으로 걸음을 옮긴다.*

---

### `day4_haeun_personal_gate`
- 분기:
  - [`messaged_day4_haeun_personal`] → `morning4_end`
  - [`haeun_cheer_seen`] → `day4_haeun_notice_check`
  - [`messaged_haeun_freetalk`] → `day4_haeun_personal`
  - [기본] → `morning4_end`

---

### `day4_haeun_notice_check`
- 분기:
  - [`messaged_haeun_freetalk`] → `day4_haeun_notice_1`
  - [기본] → `morning4_end`

---

### `day4_haeun_notice_1`
- 배경: `school.png`
- 다음: `day4_haeun_notice_choice`

- 캐릭터: `haeun_normal.png`
**하은**: *교문 옆 담장 그늘에서 서연 선배 이야기를 꺼내던 하은이 문득 말끝을 흐리며 손목에 감긴 팔찌 매듭을 만지작거린다.* 참 이상하죠. 분명 서연 선배 이야기를 하려고 입을 뗐는데 정신 차려 보면 자꾸 선배 이야기로 흘러가요. 요즘 제가 왜 이러는지 저도 잘 모르겠어요.

---

### `day4_haeun_notice_choice`
- 배경: `school.png`
- 선택지:
  1. "못 본 척하고 시계를 본다" → `day4_haeun_notice_down` | Haeun -1
  2. "표정이 왜 달라졌는지 묻는다" → `day4_haeun_notice_up` | Haeun +2
  3. "서연 얘기로 넘긴다" → `day4_haeun_notice_down` | Haeun -2
  4. "끝까지 듣고 고맙다고 한다" → `day4_haeun_notice_up` | Haeun +1

- 캐릭터: `haeun_worried.png`
**하은**: *하은의 흔들리는 눈동자가 내 입가에 잠깐 머물렀다가 이내 보도블록 끝으로 내려앉는다.* 방금 제 표정, 많이 이상해 보였어요?

---

### `day4_haeun_notice_up`
- 배경: `school.png`
- 플래그: `day4_haeun_notice_done`
- 다음: `day4_haeun_personal`

- 캐릭터: `haeun_relieved.png`
**하은**: *하은이 작게 놀란 듯 속눈썹을 깜박이다가 뺨을 붉히며 미소 짓는다.* 웃지 않고 끝까지 들어 줘서 고마워요. 아직 제 입으로 똑바로 설명하긴 어렵지만 선배 덕분에 마음이 한결 가벼워졌어요.

---

### `day4_haeun_notice_down`
- 배경: `school.png`
- 플래그: `day4_haeun_notice_done`
- 다음: `day4_haeun_personal`

- 캐릭터: `haeun_worried.png`
**하은**: *하은이 애써 입꼬리를 당겨 웃으며 반 걸음 뒤로 물러선다.* 아, 맞아요. 원래 서연 선배 이야기하던 중이었죠. 방금 한 말은 그냥 스쳐 간 혼잣말이니까 잊어 주세요.

---

### `day4_haeun_personal`
- 배경: `school.png`
- 타입: `free_talk`
- 다음: `morning4_end`
- 컨텍스트: "4일차 아침, 교문 옆에서 하은과 단둘이 이야기한다. 이전 대화에서 실제로 나온 말만 기억한다. 존댓말과 선배 호칭을 유지한다. 선택 전에는 연애를 확정하지 않는다. 하은을 선택한 뒤에도 사귀기로 합의한 상태는 아니며 현재 대화와 호감도에 따라 마음을 판단한다."
- 성격: "하은과 단둘이 대화한다. 이전 대화에서 실제로 나온 말만 기억한다. 존댓말과 선배 호칭을 유지한다. 선택 전에는 연애를 확정하지 않는다. 하은을 선택한 뒤에도 사귀기로 합의한 상태는 아니며 현재 대화와 호감도에 따라 마음을 판단한다. 서연을 응원하는 이야기가 이전 대화에 실제로 있었다면 그 흐름을 이어 간다. 서연 얘기를 하다가 주인공 얘기로 번지는 걸 하은 스스로 낯설어 하지만 마음을 확정하지도, 고백하지도 않는다."

- 캐릭터: `haeun_normal.png`
**하은**: 선배, 가시기 전에 잠깐만 시간 내 주실 수 있어요? 어제 선배랑 이야기 나누고 나서 밤새 혼자 생각해 본 게 있어서요. *하은이 교문 옆 조용한 나무 그늘 아래로 한 걸음 다가선다.* 오늘은 다른 사람 말고 제 이야기를 조금 해도 괜찮을까요?

---

### `morning4_end`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 분기:
  - [`day3_caught_multiple_dates`] → `day4_caught_fallout_1`
  - [`harem_seed`] → `day4_harem_fallout_1`
  - [기본] → `day4_date_branch`

- 캐릭터: `없음`
**{name}**: *집으로 돌아와 거울 앞에서 셔츠 깃과 머리카락을 정돈하고 벽시계 바늘을 확인한 뒤 설레는 숨을 고르며 현관에서 외출용 운동화 끈을 단단히 고쳐 묶는다.*

---

### `day4_date_branch`
- 분기:
  - [`route_dain`] → `date_dain_1`
  - [`route_yuna`] → `date_yuna_1`
  - [`route_seoyeon`] → `date_seo_1`
  - [`accepted_dain_date`] → `date_dain_1`
  - [`accepted_yuna_date`] → `date_yuna_1`
  - [`accepted_seoyeon_date`] → `date_seo_1`
  - [기본] → `day4_night_start`

<!-- i18n -->

---

## 4일차 — 점심 `day4_2_lunch`

### `date_seo_1`
- 배경: `park.png`
- BGM: `date.mp3`
- 조건: `route_seoyeon`
- 다음: `date_seo_tier_check`

- 캐릭터: `seyoun_date_normal.webp`
**{name}**: 많이 기다렸어? 교복이랑 클립보드 없이 만나니까 딴사람 같네. *분수대 물방울이 햇살에 부서지는 벤치 앞, 부드러운 아이보리색 니트 가디건에 가벼운 스커트를 입은 서연이 서 있다. 둥글게 파인 옷깃 아래로 하얀 쇄골과 가느다란 목선이 드러나고 긴장한 손가락에는 가죽 크로스백 끈이 팽팽하게 감겨 있다.*

---

### `date_seo_tier_check`
- 배경: `park.png`
- 호감분기: Seoyeon
  - [60+] → `date_seo_high_1`
  - [40+] → `date_seo_compliment_choice`
  - [30+] → `date_seo_tentative_1`
  - [0+] → `date_seo_low`
  - [-19 이상] → `date_seo_low`
  - [기본] → `date_seo_neg`
- 다음: `date_seo_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `date_seo_high_1`
- 배경: `park.png`
- 다음: `date_seo_high_2`

- 캐릭터: `seyoun_date_laugh.webp`
**서연**: 오늘은 내가 짜 온 계획표대로 안 움직여도 괜찮아. 제일 먼저 네가 가 보고 싶었던 곳부터 같이 가자.

---

### `date_seo_high_2`
- 배경: `park.png`
- Framing: `close`
- 다음: `date_seo_compliment_choice`

- 캐릭터: `seyoun_date_shy.webp`
**서연**: 수첩에 적어 온 일정표는 가방 맨 밑에 넣어 둘게. 모처럼 너랑 단둘이 나온 주말까지 시계 보면서 걷기는 싫거든. *서연이 가볍게 바람에 흩날리는 머리카락을 넘기며 공원 산책로 쪽으로 내 손을 이끌듯 앞장선다.*

---

### `date_seo_compliment_choice`
- 배경: `park.png`
- 선택지:
  1. "오늘 예쁘다." → 호감분기: Seoyeon
    - [50+] → `date_seo_pretty_high`
    - [기본] → `date_seo_pretty_low`
  2. "신경 많이 썼다, 오늘." → `date_seo_bright` | Seoyeon +4
  3. "역시 학생회장은 데이트도 빈틈없네." → `date_seo_role_trap` | Seoyeon -4

- 캐릭터: `seyoun_date_normal.webp`
**{name}**: *아침 바람에 살랑인 머리카락 사이로 은은한 꽃비누 향이 스치고 서연의 손가락에 가방끈이 한 바퀴 더 감긴다.*

---

### `date_seo_pretty_high`
- 배경: `park.png`
- 스탯: Seoyeon +2
- 다음: `date_seo_pretty_high_b`

- 캐릭터: `seyoun_date_shy.webp`
**서연**: 만나자마자 그렇게 훅 들어오면 내가 뭐라고 대답해야 할지 모르잖아. *서연의 볼 위로 옅은 분홍빛이 번지고 꽉 쥐고 있던 가방끈이 스르르 느슨해진다.* 그래도 기분은 좋아서 웃음부터 나오네.

---

### `date_seo_pretty_high_b`
- 배경: `park.png`
- 다음: `date_seo_pretty_high_2`

- 캐릭터: `seyoun_date_shy.webp`
**서연**: 솔직히 말해 봐. 방금 그 말, 집에서 나올 때부터 준비해 온 거지?

---

### `date_seo_pretty_high_2`
- 배경: `park.png`
- 다음: `date_seo_pretty_high_3`

- 캐릭터: `seyoun_date_shy.webp`
**서연**: *달아오른 뺨을 식히려는 듯 분수대 물줄기 쪽으로 시선을 비스듬히 돌리면서도 내 옆자리에서 떨어지지 않는다.* 여기 서 있지 말고 산책로 쪽으로 걸으면서 바람 좀 쐬자.

---

### `date_seo_pretty_high_3`
- 배경: `park.png`
- 다음: `date_seo_pretty_high_3_b`

- 캐릭터: `seyoun_date_shy.webp`
**{name}**: 준비해 온 거 아냐. 방금 분수대 앞에서 너 보자마자 바로 나온 말이야.

---

### `date_seo_pretty_high_3_b`
- 배경: `park.png`
- 다음: `date_seo_pretty_high_4`

- 캐릭터: `seyoun_date_shy.webp`
**서연**: *서연의 속눈썹이 파르르 떨리더니 애써 침착한 척 가방끈을 고쳐 쥔다.* 거기까지만 해. 더 들으면 진짜 얼굴 못 들겠으니까.

---

### `date_seo_pretty_high_4`
- 배경: `park.png`
- Framing: `close`
- 다음: `date_seo_walk`

- 캐릭터: `seyoun_date_shy.webp`
**서연**: 그래도 방금 네가 해 준 말은 다 들었으니까, 내가 부끄러워서 바로 대답 못 했다고 무르기 없기야. *귓바퀴까지 빨개진 채 흘러내린 옆머리를 귀 뒤로 넘긴다. 가디건 소매 끝으로 드러난 흰 손목이 내 팔 끝에 아슬아슬하게 스친다.*

---

### `date_seo_pretty_low`
- 배경: `park.png`
- 스탯: Seoyeon +2
- 다음: `date_seo_walk`

- 캐릭터: `seyoun_date_shy.webp`
**서연**: 뭐야, 갑자기. 그런 말은 마음의 준비라도 하게 미리 예고하고 해 줘.

---

### `date_seo_bright`
- 배경: `park.png`
- 다음: `date_seo_walk`

- 캐릭터: `seyoun_date_laugh.webp`
**서연**: 티 나? 주말에 너랑 따로 만나는 건데 아침부터 거울 앞에서 꽤 오래 골랐거든.

---

### `date_seo_role_trap`
- 배경: `park.png`
- 다음: `date_seo_walk`

- 캐릭터: `seyoun_date_normal.webp`
**서연**: *서연의 손가락이 가방끈에서 스르르 풀린다.* 오늘은 학생회장 자격으로 나온 자리가 아닌데.

---

### `date_seo_walk`
- 배경: `park.png`
- 다음: `date_seo_duck`

- 캐릭터: `seyoun_date_normal.webp`
**{name}**: *나란히 보폭을 맞춰 공원 호수 산책로를 걷는다. 걸음을 옮길 때마다 서연의 치맛자락이 내 바지 끝에 부드럽게 스치고 우리는 물가로 몰려든 오리들에게 작은 빵 조각을 던져 준다.*

---

### `date_seo_duck`
- 배경: `park.png`
- 다음: `date_seo_duck_2`

- 캐릭터: `seyoun_date_normal.webp`
**서연**: 얘네들은 속마음이 단순해서 참 좋겠다. 빵을 던져 주면 망설임 없이 다가오고 안 주면 뒤도 안 돌아보고 가잖아.

---

### `date_seo_duck_2`
- 배경: `park.png`
- 다음: `date_seo_duck_3`

- 캐릭터: `seyoun_date_normal.webp`
**{name}**: 사람 마음도 결국엔 다들 비슷한 거 아냐?

---

### `date_seo_duck_3`
- 배경: `park.png`
- 다음: `date_seo_duck_4`

- 캐릭터: `seyoun_date_normal.webp`
**서연**: 사람은 훨씬 복잡하지. 마음을 다 내어 줘도 모른 척 멀어질 때가 있고 아무것도 안 해 줬는데 자꾸만 눈이 가는 사람도 있으니까.

---

### `date_seo_duck_4`
- 배경: `park.png`
- 다음: `date_seo_flower_b`

- 캐릭터: `seyoun_date_normal.webp`
**서연**: 어, 저기 골목 어귀에 작은 꽃집 있다. 잠깐만 보고 가자. *물가를 바라보던 서연이 걸음을 늦추며 내 소매 끝을 살며시 잡아당긴다.*

---

### `date_seo_flower_b`
- 배경: `park.png`
- 다음: `date_seo_flower_2`

- 캐릭터: `seyoun_date_normal.webp`
**서연**: *통유리 너머로 초록빛 화분들이 가득한 꽃집 문 앞에서 서연이 내 눈을 돌아본다.* 안으로 들어가 볼까?

---

### `date_seo_flower_2`
- 배경: `flower_shop.webp`
- Framing: `close`
- 다음: `date_seo_succulent_2`

- 캐릭터: `seyoun_date_normal.webp`
**서연**: 이 동그란 화분 어때? *맑은 문종 소리와 함께 촉촉한 흙냄새와 꽃향기가 훅 끼쳐 온다. 좁은 진열대 통로에서 서연이 내 어깨에 닿을 만큼 바짝 붙어 서서 손바닥만 한 다육이 화분을 들어 올린다.*

---

### `date_seo_succulent_2`
- 배경: `flower_shop.webp`
- 다음: `date_seo_succulent_2_b`

- 캐릭터: `seyoun_date_normal.webp`
**서연**: 다육이는 물을 자주 주지 않아도 햇볕만 잘 들면 혼자서도 씩씩하게 자라거든. 네 방 창가에 두고 처음 키우기엔 딱 좋을 거야.

---

### `date_seo_succulent_2_b`
- 배경: `flower_shop.webp`
- 다음: `date_seo_succulent_3`

- 캐릭터: `seyoun_date_normal.webp`
**{name}**: 내 방 창가라니, 이거 나한테 선물로 주는 거야?

---

### `date_seo_succulent_3`
- 배경: `event_seoyeon_succulent.png`
- 다음: `date_seo_end`

- 캐릭터: `없음`
**서연**: 응, 네가 안 죽이고 잘 키울 자신 있으면. 혹시라도 시들하게 만들면 내가 네 방까지 찾아가서 도로 뺏어 올 거니까.

---

### `date_seo_end`
- 배경: `flower_shop.webp`
- Framing: `close`
- 다음: `date_seo_end_b`

- 캐릭터: `seyoun_date_shy.webp`
**서연**: 자, 두 손으로 받아. 도로 가져가겠다고 한 건 주기 싫어서가 아니라 내 생각 자주 하라는 뜻이니까. *작은 다육이 화분을 건네는 서연의 따뜻하고 부드러운 손가락이 내 손바닥과 손목을 감싸듯 포개졌다가 천천히 떨어진다.*

---

### `date_seo_end_b`
- 배경: `street.png`
- Framing: `close`
- 다음: `date_seo_end_c`

- 캐릭터: `seyoun_date_normal.webp`
**{name}**: *꽃집을 나서서 나란히 공원 바깥 가로수길을 걸었다. 한 손에는 화분을 들고 다른 쪽 손등은 서연의 손등과 닿을 듯 말 듯 흔들린다.*

---

### `date_seo_end_c`
- 배경: `street.png`
- Framing: `close`
- 다음: `date_seo_end_d`

- 캐릭터: `seyoun_date_normal.webp`
**서연**: *내 손안에서 화분 포장지가 사각거리는 소리를 내자 서연이 걸음을 반 박자 늦춘다.* 있잖아, 오늘.

---

### `date_seo_end_d`
- 배경: `street.png`
- Framing: `close`
- 다음: `pre_confess_minsu`

- 캐릭터: `seyoun_date_shy.webp`
**서연**: 오늘 너랑 단둘이 나와서 정말 좋았어. *서연이 내 어깨에 자기 어깨를 살짝 기대며 수줍게 눈웃음을 짓는다.*

---

### `date_seo_tentative_1`
- 배경: `park.png`
- 다음: `date_seo_tentative_2`

- 캐릭터: `seyoun_date_worried.webp`
**{name}**: *공원 산책로를 한 바퀴 도는 내내 서연은 사적인 이야기 대신 다음 주 학생회 일정만 담담하게 꺼낸다. 호수 앞 벤치에서 마침내 걸음을 멈춘다.*

---

### `date_seo_tentative_2`
- 배경: `park.png`
- 다음: `date_seo_tentative_3`

- 캐릭터: `seyoun_date_sad.webp`
**서연**: 미안하지만 오늘은 이 정도까지만 걷는 게 좋겠다. 월요일에 학교에서 마주치면 피하지 않고 인사할게.

---

### `date_seo_tentative_3`
- 배경: `street.png`
- 플래그: `day4_tentative_seoyeon`
- 다음: `pre_confess_minsu`

- 캐릭터: `없음`
**{name}**: *어색한 침묵 끝에 다음 약속은 기약하지 못한 채 역 앞 광장에서 각자의 길로 헤어진다.*

---

### `date_yuna_1`
- 배경: `cafe.png`
- BGM: `night1.mp3`
- 조건: `route_yuna`
- 다음: `date_yuna_tier_check`

- 캐릭터: `yuna_date_normal.webp`
**{name}**: *역 앞 카페 테라스 그늘에 서 있는 유나가 한눈에 들어온다. 몸선을 따라 부드럽게 감기는 검은 원피스 위로 하얀 쇄골과 어깨의 짙은 타투가 교복 입을 때보다 훨씬 선명하게 드러나 있다.* 많이 기다렸어?

---

### `date_yuna_tier_check`
- 배경: `cafe.png`
- 호감분기: Yuna
  - [60+] → `date_yuna_high_1`
  - [40+] → `date_yuna_compliment_choice`
  - [30+] → `date_yuna_tentative_1`
  - [0+] → `date_yuna_low`
  - [-19 이상] → `date_yuna_low`
  - [기본] → `date_yuna_neg`
- 다음: `date_yuna_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `date_yuna_high_1`
- 배경: `cafe.png`
- 다음: `date_yuna_high_2`

- 캐릭터: `yuna_date_smile.webp`
**유나**: *유나가 가방에서 꺼낸 은빛 책갈피 두 장을 카페 테이블 위에 나란히 올려놓는다.* 커피 다 마시고 서점 가면 같이 골라 줘. 다음에 너랑 같이 읽을 책에 끼워 둘 거야.

---

### `date_yuna_high_2`
- 배경: `cafe.png`
- 다음: `date_yuna_compliment_choice`

- 캐릭터: `yuna_date_shy.webp`
**유나**: 오늘 하루로 끝내지 말고 다음 주에도 또 단둘이 만나자는 뜻이야. 네 일정표에 미리 적어 둬도 돼.

---

### `date_yuna_compliment_choice`
- 배경: `cafe.png`
- 선택지:
  1. "오늘 예쁘다." → 호감분기: Yuna
    - [50+] → `date_yuna_pretty_high`
    - [기본] → `date_yuna_pretty_low`
  2. "오늘은 좀 달라 보이네." → `date_yuna_bright` | Yuna +4
  3. "평소보다 훨씬 말 걸기 편해 보여." → `date_yuna_trap` | Yuna -3

- 캐릭터: `yuna_date_normal.webp`
**{name}**: *창가 자리에 마주 앉자 테이크아웃 컵 너머로 유나의 붉은 눈동자가 천천히 올라와 내 시선을 붙잡는다.*

---

### `date_yuna_pretty_high`
- 배경: `cafe.png`
- 스탯: Yuna +3
- 다음: `date_yuna_pretty_high_2`

- 캐릭터: `yuna_date_shy.webp`
**유나**: 갑자기 그렇게 말하면 나 지금 다른 생각이 하나도 안 나잖아. 머릿속에 방금 네가 한 말만 계속 울려서. *유나가 컵 가장자리에 시선을 떨어뜨린다. 은백색 머리카락이 흘러내려 발갛게 물든 뺨과 가느다란 목덜미를 감싼다.*

---

### `date_yuna_pretty_high_2`
- 배경: `cafe.png`
- 다음: `date_yuna_pretty_high_3`

- 캐릭터: `yuna_date_shy.webp`
**유나**: 방금 그 말.

---

### `date_yuna_pretty_high_3`
- 배경: `cafe.png`
- 다음: `date_yuna_pretty_high_4`

- 캐릭터: `yuna_date_shy.webp`
**{name}**: 응?

---

### `date_yuna_pretty_high_4`
- 배경: `cafe.png`
- 다음: `date_yuna_pretty_high_5`

- 캐릭터: `yuna_date_shy.webp`
**유나**: 나만 들리게 한 번 더 말해 줘.

---

### `date_yuna_pretty_high_5`
- 배경: `cafe.png`
- 다음: `date_yuna_pretty_high_5_b`

- 캐릭터: `yuna_date_shy.webp`
**유나**: *부끄러움에 고개는 숙인 채로 테이블 위로 내민 손끝이 내 손등 가까이에 멈춘다.*

---

### `date_yuna_pretty_high_5_b`
- 배경: `cafe.png`
- 다음: `date_yuna_pretty_high_5_c`

- 캐릭터: `yuna_date_shy.webp`
**{name}**: 오늘 정말 예뻐, 유나야. 자꾸 눈이 갈 만큼.

---

### `date_yuna_pretty_high_5_c`
- 배경: `cafe.png`
- 다음: `date_yuna_bookstore`

- 캐릭터: `yuna_date_normal.webp`
**유나**: *유나가 컵 뚜껑에 맺힌 차가운 물방울을 엄지로 천천히 훑으며 작게 숨을 내쉰다.* 응. 이제 됐어.

---

### `date_yuna_pretty_low`
- 배경: `cafe.png`
- 스탯: Yuna +2
- 다음: `date_yuna_bookstore`

- 캐릭터: `yuna_date_shy.webp`
**유나**: 누구한테 그런 말 듣는 거, 아직은 좀 낯서네.

---

### `date_yuna_bright`
- 배경: `cafe.png`
- 다음: `date_yuna_bookstore`

- 캐릭터: `yuna_date_smile.webp`
**유나**: 평소에 학교에서 볼 때랑 어디가 어떻게 다른데?

---

### `date_yuna_trap`
- 배경: `cafe.png`
- 다음: `date_yuna_bookstore`

- 캐릭터: `yuna_date_normal.webp`
**유나**: 그럼 학교에서 볼 때는 나한테 말 걸기가 그만큼 불편했다는 뜻이네.

---

### `date_yuna_bookstore`
- 배경: `bookstore.png`
- 다음: `date_yuna_bookstore_2`

- 캐릭터: `yuna_date_normal.webp`
**{name}**: *카페를 나와 유나가 자주 간다는 서점으로 발걸음을 옮긴다. 종이 냄새가 가라앉은 높은 서가 사이를 유나가 천천히 걸어 들어간다.*

---

### `date_yuna_bookstore_2`
- 배경: `bookstore.png`
- 다음: `date_yuna_bookstore_2_b`

- 캐릭터: `yuna_date_normal.webp`
**유나**: 이쪽 골목 서점에는 전에 와 본 적 있어?

---

### `date_yuna_bookstore_2_b`
- 배경: `bookstore.png`
- 다음: `date_yuna_bookstore_3`

- 캐릭터: `yuna_date_normal.webp`
**{name}**: 아니, 오늘 너 따라 처음 와 봤어.

---

### `date_yuna_bookstore_3`
- 배경: `bookstore.png`
- 다음: `date_yuna_earphone`

- 캐릭터: `yuna_date_smile.webp`
**유나**: 다행이다. 내 비밀 아지트를 다른 누구도 아닌 내가 제일 먼저 너한테 보여준 거네.

---

### `date_yuna_earphone`
- 배경: `bookstore.png`
- Framing: `close`
- 다음: `date_yuna_earphone_2`

- 캐릭터: `yuna_date_shy.webp`
**유나**: 여기까지 불러내서 책 구경만 시키려는 건 아니야. 오늘은 이 곡도 네 옆에서 같이 듣고 싶었거든. *유나가 주머니에서 줄 이어폰을 꺼내 왼쪽 유닛을 내 귀에 직접 꽂아 준다. 차가운 손끝이 내 귓불과 턱선을 스치며 달콤한 잔향을 남긴다.*

---

### `date_yuna_earphone_2`
- 배경: `bookstore.png`
- Framing: `close`
- 다음: `date_yuna_earphone_2_b`

- 캐릭터: `yuna_date_normal.webp`
**유나**: 가만히 귀 기울여 봐.

---

### `date_yuna_earphone_2_b`
- 배경: `bookstore.png`
- Framing: `close`
- 다음: `date_yuna_earphone_3`

- 캐릭터: `yuna_date_normal.webp`
**{name}**: *나직하고 몽환적인 피아노 선율이 귓속으로 번지자 서점 안의 발소리와 소음이 거짓말처럼 아득해진다.*

---

### `date_yuna_earphone_3`
- 배경: `bookstore.png`
- Framing: `close`
- 다음: `date_yuna_oldbook`

- 캐릭터: `yuna_date_shy.webp`
**{name}**: *짧은 이어폰 줄이 팽팽해지지 않도록 유나가 구석 벤치에서 내 옆으로 바짝 다가앉는다. 검은 원피스 너머로 드러난 유나의 맨어깨가 내 팔에 밀착되고 샴푸 향 섞인 따뜻한 숨결이 내 목덜미에 고스란히 닿는다.*

---

### `date_yuna_oldbook`
- 배경: `bookstore.png`
- 다음: `date_yuna_oldbook_b`

- 캐릭터: `yuna_date_normal.webp`
**{name}**: *안쪽 고서 코너와 헌책방 서가를 두 걸음쯤 지나치던 유나가 문득 발걸음을 멈추고 내 소매를 끌며 되돌아온다.*

---

### `date_yuna_oldbook_b`
- 배경: `bookstore.png`
- 다음: `date_yuna_oldbook_c`

- 캐릭터: `yuna_date_normal.webp`
**유나**: 잠깐만. 여기 이 칸.

---

### `date_yuna_oldbook_c`
- 배경: `bookstore.png`
- 다음: `date_yuna_oldbook_2`

- 캐릭터: `yuna_date_normal.webp`
**{name}**: *유나가 빛바랜 양장본 소설 한 권을 조심스럽게 뽑아 들어 익숙한 손길로 마지막 장 근처를 펼친다.*

---

### `date_yuna_oldbook_2`
- 배경: `bookstore.png`
- 다음: `date_yuna_oldbook_3`

- 캐릭터: `yuna_date_normal.webp`
**유나**: 이 소설, 일 년 전에 혼자 읽었을 때는 마지막 페이지가 숨 막힐 만큼 슬펐거든.

---

### `date_yuna_oldbook_3`
- 배경: `bookstore.png`
- 다음: `date_yuna_oldbook_4`

- 캐릭터: `yuna_date_normal.webp`
**{name}**: 지금 다시 보니까 어때?

---

### `date_yuna_oldbook_4`
- 배경: `bookstore.png`
- 다음: `date_yuna_end`

- 캐릭터: `yuna_date_smile.webp`
**유나**: 이상하게 지금은 결말이 전혀 다르게 읽혀. 옆에 네가 같이 서 있어서 그런가 봐.

---

### `date_yuna_end`
- 배경: `bookstore.png`
- 다음: `date_yuna_end_b`

- 캐릭터: `yuna_date_smile.webp`
**유나**: *유나가 고개를 들어 내 눈을 깊게 올려다본다. 가느다란 손가락 아래에서 빛바랜 페이지 모서리가 소리 없이 접힌다.*

---

### `date_yuna_end_b`
- 배경: `street.png`
- 다음: `date_yuna_end_c`

- 캐릭터: `yuna_date_normal.webp`
**유나**: *서점 유리문을 나서기 직전, 유나가 내 손바닥을 살짝 벌려 접힌 쪽지 한 장을 쥐여 주고는 손가락을 감싸 쥔다.*

---

### `date_yuna_end_c`
- 배경: `street.png`
- 다음: `pre_confess_minsu`

- 캐릭터: `yuna_date_normal.webp`
**{name}**: *손바닥에 남은 온기를 느끼며 펼친 쪽지에는 '오늘 나 평소보다 말이 참 많았어. 네 앞이라서 그랬나 봐.'라고 적혀 있다. 연보라색 만년필 잉크가 마지막 글자 끝에서 유나의 마음처럼 아스라이 번져 있다.*

---

### `date_yuna_tentative_1`
- 배경: `cafe.png`
- 다음: `date_yuna_tentative_2`

- 캐릭터: `yuna_date_normal.webp`
**유나**: 오늘은 다른 사적인 얘기 말고 그냥 책 얘기만 조금 하다가 가자.

---

### `date_yuna_tentative_2`
- 배경: `cafe.png`
- 다음: `date_yuna_tentative_3`

- 캐릭터: `yuna_date_normal.webp`
**{name}**: *조용히 대화는 이어지지만 유나는 가방 안에 넣어 온 낡은 단편집을 끝내 꺼내지 않는다. 잔에 담긴 커피가 반쯤 남았을 무렵 유나가 손목시계를 내려다본다.*

---

### `date_yuna_tentative_3`
- 배경: `street.png`
- 플래그: `day4_tentative_yuna`
- 다음: `pre_confess_minsu`

- 캐릭터: `yuna_date_normal.webp`
**유나**: 마음이 정리되면 다음번엔 내가 먼저 연락할게. 오늘은 여기까지만 하자.

---

### `date_dain_1`
- 배경: `school_back.png`
- BGM: `daily2.mp3`
- 조건: `route_dain`
- 다음: `date_dain_tier_check`

- 캐릭터: `dain_date_laugh.webp`
**{name}**: *주말 아침의 체육관 앞. 가벼운 크롭 트랙 집업에 슬리브리스 탑, 캡모자를 눌러쓴 다인이 멀리서부터 손을 크게 흔든다. 사복 차림으로 드러난 탄탄한 허리선과 길게 뻗은 다리 라인이 눈부신데, 오른쪽 무릎을 감싼 검은 보호대가 유독 시선을 끈다.*

---

### `date_dain_tier_check`
- 배경: `school_back.png`
- 호감분기: Dain
  - [60+] → `date_dain_high_1`
  - [40+] → `date_dain_2`
  - [30+] → `date_dain_tentative_1`
  - [0+] → `date_dain_low`
  - [-19 이상] → `date_dain_low`
  - [기본] → `date_dain_neg`
- 다음: `date_dain_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `date_dain_high_1`
- 배경: `school_back.png`
- 다음: `date_dain_high_2`

- 캐릭터: `dain_date_laugh.webp`
**다인**: 야, 다음 주 주말도 미리 시간 비워 둬! 오늘 너랑 노는 거 재밌으면 다음 주에도 또 불러낼 거니까.

---

### `date_dain_high_2`
- 배경: `school_back.png`
- Framing: `close`
- 다음: `date_dain_2`

- 캐릭터: `dain_date_shy.webp`
**다인**: *다인이 주머니에서 새 손목 밴드 하나를 꺼내 내 손목에 직접 채워 준다. 따뜻한 손끝이 맥박이 뛰는 손목 안쪽을 스친다.* 자, 커플 아이템 장착 완료! 오늘 첫 종목은 네가 먼저 골라.

---

### `date_dain_2`
- 배경: `school_back.png`
- 다음: `date_dain_3`

- 캐릭터: `dain_date_laugh.webp`
**다인**: 오, 드디어 왔다! 너 솔직히 말해 봐, 늦잠 자서 지각할 뻔했지?

---

### `date_dain_3`
- 배경: `school_back.png`
- 다음: `date_dain_4`

- 캐릭터: `dain_date_laugh.webp`
**{name}**: 무슨 소리야, 약속 시간보다 10분이나 일찍 왔는데.

---

### `date_dain_4`
- 배경: `school_back.png`
- 다음: `date_dain_compliment_choice`

- 캐릭터: `dain_date_normal.webp`
**다인**: 에이, 그래도 내가 이겼네. 나는 집에서 가만히 못 있겠어서 20분 전에 와 있었거든.

---

### `date_dain_compliment_choice`
- 배경: `school_back.png`
- 선택지:
  1. "그 캡모자 좋은데." → 호감분기: Dain
    - [50+] → `date_dain_pretty_high`
    - [기본] → `date_dain_pretty_low`
  2. "역시 운동복이 제일 너답다." → `date_dain_bright` | Dain -3
  3. "데이트인데 또 운동복이야?" → `date_dain_bright` | Dain -4
  4. "다음엔 데이트처럼 좀 꾸미고 와." → `date_dain_bright` | Dain -5

- 캐릭터: `dain_date_normal.webp`
**{name}**: *다인이 한 발짝 다가서며 캡모자 챙을 멋쩍게 한 번 눌러 쓰고 내 입이 열리기를 기다린다. 상큼한 시트러스 비누 향과 따뜻한 체온이 훅 끼쳐 온다.*

---

### `date_dain_pretty_high`
- 배경: `school_back.png`
- 스탯: Dain +2
- 다음: `date_dain_pretty_high_2`

- 캐릭터: `dain_date_shy.webp`
**다인**: 잠깐, 너 지금 나 놀리는 거 아니지? 그냥 모자 얘기인데도 네가 그런 눈으로 쳐다보면서 말하니까 갑자기 숨이 턱 막히잖아. *다인이 캡모자 챙을 두 손으로 푹 끌어내려 발갛게 달아오른 얼굴 절반을 가린다.*

---

### `date_dain_pretty_high_2`
- 배경: `school_back.png`
- 다음: `date_dain_pretty_high_3`

- 캐릭터: `dain_date_shy.webp`
**다인**: 야, 심장 떨어지게 그런 말 예고도 없이 툭 던지지 마.

---

### `date_dain_pretty_high_3`
- 배경: `school_back.png`
- 다음: `date_dain_pretty_high_4`

- 캐릭터: `dain_date_shy.webp`
**{name}**: 빈말이 아니라 진짜 잘 어울려서 그런 건데.

---

### `date_dain_pretty_high_4`
- 배경: `school_back.png`
- 다음: `date_dain_to_arcade`

- 캐릭터: `dain_date_shy.webp`
**다인**: 진짜라고 다 그렇게 빤히 보면서 말해도 되는 줄 알아? 아, 듣기 싫다는 뜻은 절대 아니고! 네가 그렇게 보면 내가 부끄러워서 한 발짝도 못 움직이잖아. *모자챙 아래로 드러난 귓불과 하얀 목덜미까지 새빨갛다. 어쩔 줄 모르던 다인의 손끝이 내 소매 자락을 살짝 잡았다 놓는다.*

---

### `date_dain_pretty_low`
- 배경: `school_back.png`
- 스탯: Dain +2
- 다음: `date_dain_to_arcade`

- 캐릭터: `dain_date_shy.webp`
**다인**: 뭐야, 갑자기 칭찬을 다 하고. 쑥스럽긴 한데 기분은 좋다.

---

### `date_dain_bright`
- 배경: `school_back.png`
- 다음: `date_dain_to_arcade`

- 캐릭터: `dain_date_laugh.webp`
**다인**: *웃던 다인이 모자챙을 한 번 더 깊숙이 눌러쓴다.* 하하, 그렇지? 역시 난 꾸미는 것보다 활동하기 편한 운동복이 제일 잘 맞나 봐.

---

### `date_dain_to_arcade`
- 배경: `arcade.png`
- 다음: `date_dain_arcade`

- 캐릭터: `dain_date_laugh.webp`
**{name}**: *다인과 어깨를 나란히 맞대고 번화가의 오락실로 향했다.*

---

### `date_dain_arcade`
- 배경: `arcade.png`
- 다음: `date_dain_arcade_2`

- 캐릭터: `dain_date_normal.webp`
**{name}**: *화려한 전자음이 울리는 오락실 안쪽, 리듬게임 기기 앞에 나란히 선다. 형형색색의 조명 불빛이 다인의 반짝이는 눈동자와 촉촉한 입술 위로 어른거린다.*

---

### `date_dain_arcade_2`
- 배경: `arcade.png`
- 다음: `date_dain_arcade_2_b`

- 캐릭터: `dain_date_normal.webp`
**다인**: 자, 여기서 그냥 넘어갈 순 없지. 점수 내기다! 진 사람이 이따 시원한 음료수 쏘기!

---

### `date_dain_arcade_2_b`
- 배경: `arcade.png`
- 다음: `date_dain_arcade_3`

- 캐릭터: `dain_date_normal.webp`
**{name}**: 데이트 나와서까지 또 승부를 가려야 직성이 풀려?

---

### `date_dain_arcade_3`
- 배경: `arcade.png`
- 다음: `date_dain_arcade_3_b`

- 캐릭터: `dain_date_normal.webp`
**다인**: 당연하지, 내기가 빠지면 무슨 재미야! 바짝 긴장해!

---

### `date_dain_arcade_3_b`
- 배경: `arcade.png`
- 다음: `date_dain_arcade_3_c`

- 캐릭터: `dain_date_normal.webp`
**다인**: 여기 하이라이트 구간 박자 놓치면 안 돼! *좁은 발판이 아니라 손으로 치는 버튼형 기기 앞에서 다인이 내 팔에 자기 팔을 찰싹 붙인 채 현란하게 노트를 쳐 낸다. 마지막 음까지 콤보가 완벽하게 이어진다.*

---

### `date_dain_arcade_3_c`
- 배경: `arcade.png`
- 다음: `date_dain_rhythm`

- 캐릭터: `dain_date_normal.webp`
**다인**: *결과 창이 뜨자 다인이 신나서 내 어깨를 두 손으로 덥석 붙잡으며 환호한다.* 풀콤보 성공! 방금 내 손놀림 봤어?

---

### `date_dain_rhythm`
- 배경: `arcade.png`
- 다음: `date_dain_rhythm_2`

- 캐릭터: `dain_date_laugh.webp`
**다인**: *기쁨으로 상기된 볼을 반짝이며 화면 상단의 랭킹 점수를 손가락으로 가리킨다.* 저기 봐, 이 기계 역대 2등 스코어야!

---

### `date_dain_rhythm_2`
- 배경: `arcade.png`
- 다음: `date_dain_rhythm_3`

- 캐릭터: `dain_date_normal.webp`
**{name}**: 진짜 대단하다. 순발력이 장난 아니네.

---

### `date_dain_rhythm_3`
- 배경: `arcade.png`
- 다음: `date_dain_knee`

- 캐릭터: `dain_date_laugh.webp`
**다인**: 헤헤, 당연하지. 손으로 하는 이 게임은 무릎 안 써도 얼마든지 뛸 수 있으니까.

---

### `date_dain_knee`
- 배경: `arcade.png`
- 다음: `date_dain_knee_2`

- 캐릭터: `dain_date_laugh.webp`
**{name}**: *'무릎 안 써도 되니까.' 무심코 내뱉은 자기 말에 스스로 찔린 듯, 활짝 웃던 다인의 시선이 오른쪽 무릎의 검은 보호대로 조용히 내려앉는다.*

---

### `date_dain_knee_2`
- 배경: `street.png`
- 다음: `date_dain_shop`

- 캐릭터: `dain_date_sweat.webp`
**다인**: 어, 잠깐만. 저기 새로 나온 배구화 잠깐만 보고 가자. *오락실을 나와 거리를 걷던 다인이 스포츠용품점 쇼윈도 앞에서 걸음을 우뚝 멈춘다.*

---

### `date_dain_shop`
- 배경: `street.png`
- 다음: `date_dain_shop_2`

- 캐릭터: `dain_date_normal.webp`
**다인**: 아냐, 살 건 아니고 그냥 구경만 하는 거야. *유리창 가까이로 다가선 다인이 진열대 조명 아래 놓인 새하얀 배구화에서 눈을 떼지 못한다.*

---

### `date_dain_shop_2`
- 배경: `street.png`
- 다음: `date_dain_shop_2_b`

- 캐릭터: `dain_date_normal.webp`
**{name}**: 다인아?

---

### `date_dain_shop_2_b`
- 배경: `street.png`
- 다음: `date_dain_shop_3`

- 캐릭터: `dain_date_normal.webp`
**다인**: *내가 부르는 소리에 화들짝 놀란 다인이 쇼윈도 반대쪽으로 고개를 휙 돌린다.* 아, 아무것도 아냐! 구경 다 했어, 얼른 가자!

---

### `date_dain_shop_3`
- 배경: `street.png`
- 다음: `date_dain_shop_3_b`

- 캐릭터: `dain_date_laugh.webp`
**다인**: *다인이 트랙 집업 주머니에 두 손을 깊숙이 찔러 넣고 일부러 성큼성큼 앞서 걷는다.* 야, 왜 자꾸 사람 얼굴 그렇게 쳐다봐. 보지 마.

---

### `date_dain_shop_3_b`
- 배경: `street.png`
- 다음: `date_dain_end`

- 캐릭터: `dain_date_normal.webp`
**다인**: *애써 태연한 척 보폭을 넓히면서도 다인의 오른쪽 발걸음이 미세하게 절뚝인다.* 한 번만 더 괜찮냐고 물어보면 진짜 너 두고 먼저 가 버린다.

---

### `date_dain_end`
- 배경: `street.png`
- 다음: `date_dain_end_b`

- 캐릭터: `dain_date_sweat.webp`
**{name}**: *내가 말없이 옆으로 다가가 보폭을 맞춰 주자, 다인은 그제야 작게 웃어 보이지만 캡모자 챙 아래에 드리운 눈빛은 여전히 쇼윈도 쪽에 잔상처럼 남아 있다.*

---

### `date_dain_end_b`
- 배경: `street.png`
- 다음: `date_dain_end_c`

- 캐릭터: `dain_date_normal.webp`
**다인**: 야, 있잖아.

---

### `date_dain_end_c`
- 배경: `street.png`
- 다음: `pre_confess_minsu`

- 캐릭터: `dain_date_sweat.webp`
**다인**: 오늘 너랑 데이트해서 진짜 재밌었어. 내 성격에 빈말 못 하는 거 알지? *다인이 걸음을 멈추고 내 어깨에 자기 어깨와 팔을 툭 기대며 뜨거운 숨을 내쉰다.*

---

### `date_dain_tentative_1`
- 배경: `school_back.png`
- 다음: `date_dain_tentative_2`

- 캐릭터: `dain_date_normal.webp`
**다인**: 미안한데 오늘은 멀리 안 가고 잠깐만 있다가 들어갈래. 무릎도 좀 아껴야 할 것 같고.

---

### `date_dain_tentative_2`
- 배경: `school_back.png`
- 다음: `date_dain_tentative_3`

- 캐릭터: `dain_date_normal.webp`
**{name}**: *체육관 옆 자판기 앞에서 캔 음료를 하나씩 뽑아 마신다. 다인은 체육관 쪽으로는 시선도 주지 않은 채 가방끈만 만지작거린다.*

---

### `date_dain_tentative_3`
- 배경: `street.png`
- 플래그: `day4_tentative_dain`
- 다음: `pre_confess_minsu`

- 캐릭터: `dain_date_normal.webp`
**다인**: 월요일에 학교에서 보자. 다음에 다시 만날지는 그때 가서 생각할게.

---

### `pre_confess_minsu`
- 배경: `street.png`
- 다음: `pre_confess_minsu_2`

- 캐릭터: `minsu_smirk.png` @ 0.35
**민수**: 야, 지금 한창 데이트 중이지? 친구로서 딱 한마디만 할게

---

### `pre_confess_minsu_2`
- 배경: `street.png`
- 다음: `pre_confess_callback`

- 캐릭터: `minsu_smirk.png` @ 0.35
**민수**: 어설프게 말 돌리지 말고 오늘 네 마음 제대로 전해라

---

### `pre_confess_callback`
- 배경: `street.png`
- 다음: `confess_seo_1`

- 캐릭터: `없음`
**{name}**: *바지 주머니 속 휴대폰을 쥔 손바닥에 땀이 밴다. 꺼진 검은 액정 위로 긴장한 내 눈빛만 조용히 비친다.*

---

### `day4_caught_fallout_1`
- 배경: `room_my_day.webp`
- 시간대: `day`
- BGM: `morning.mp3`
- 다음: `day4_caught_fallout_2`

- 캐릭터: `없음`
**{name}**: *전날 밤 끝내 전송하지 못한 사과 문장이 메신저 입력창에 남아 있다. 망설이던 엄지가 전송 버튼을 누르려는 순간 서연에게서 먼저 메시지가 도착한다.*

---

### `day4_caught_fallout_2`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `day4_caught_fallout_3`

- 캐릭터: `seyoun_sad.png` @ 0.35
**서연**: 어제 우리 약속 겹쳤던 일, 아무 일 없던 것처럼 넘기지는 않을 거야. 오늘 누구를 만날 생각인지부터 솔직하게 말해 줘.

---

### `day4_caught_fallout_3`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `day4_caught_fallout_4`

- 캐릭터: `없음`
**{name}**: *단체 채팅방의 숫자는 줄어들었지만 유나는 아무런 답장도 올리지 않는다. 곧이어 다인에게서 '오늘 나 만날 거면 시간부터 확실히 정해'라는 짧은 메시지가 뜬다. 숨이 막히는 기분으로 캘린더의 겹친 일정을 다시 내려다본다.*

---

### `day4_caught_fallout_4`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 플래그: `day4_caught_fallout_seen`
- 다음: `day4_date_branch`

- 캐릭터: `없음`
**{name}**: *밤새 고쳐 썼던 사과문을 마저 적어 전송 버튼을 누른다. 초조하게 답장을 기다리며 오늘 약속 장소로 나갈 준비를 한다.*

---

### `day4_harem_fallout_1`
- 배경: `room_my_day.webp`
- 시간대: `day`
- BGM: `morning.mp3`
- 다음: `day4_harem_fallout_2`

- 캐릭터: `없음`
**서연**: *단체 채팅방 상단에 떠오른 서연의 메시지.* 어제 자리에서 웃으며 넘겼다고 해서 네가 겹쳐 잡은 약속들까지 다 정리된 건 아니야.

---

### `day4_harem_fallout_2`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `day4_harem_fallout_3`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 당장 셋 중에 누구 하나만 고르라고 다그치지는 않을게. 대신 지금처럼 애매한 태도로 사람마다 기대하게 만들지는 마.

---

### `day4_harem_fallout_3`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 다음: `day4_harem_fallout_4`

**{name}**: *곧바로 유나가 '내 약속 시간도 다시 확실하게 말해 줘'라고 올리고 다인이 그 아래에 '시간 겹치면 지금 당장 솔직히 말해'라고 덧붙인다. 캘린더 화면을 열어 둔 채로 떨리는 손끝으로 답장을 적는다.*

---

### `day4_harem_fallout_4`
- 배경: `room_my_day.webp`
- 시간대: `day`
- 플래그: `day4_harem_fallout_seen`
- 다음: `day4_date_branch`

- 캐릭터: `없음`
**{name}**: *단체 채팅방에 오늘 약속 시간을 다시 정리해 알리겠다고 답을 남긴다. 무거운 화면을 켜 둔 채 현관에서 신발을 신는다.*

---

### `date_seo_skip`
- 배경: `park.png`
- 호감분기: Seoyeon
  - [0+] → `date_seo_low`
  - [-19 이상] → `date_seo_low`
  - [기본] → `date_seo_neg`
- 다음: `date_seo_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `date_seo_low`
- 배경: `park.png`
- 플래그: `day4_waited`, `day4_distance_seoyeon`
- 다음: `day4_night_start`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: *약속한 분수대 앞 벤치는 비어 있다. 물줄기 소리만 듣다가 켠 휴대폰 화면 위로 서연의 짧은 메시지가 도착한다.* 미안하지만 오늘은 둘이 따로 만나지 않는 게 좋겠어. 다음 주에 학교에서 보자.

---

### `date_seo_neg`
- 배경: `park.png`
- 플래그: `day4_waited`, `day4_distance_seoyeon`
- 다음: `day4_night_start`

- 캐릭터: `seyoun_pout.png` @ 0.35
**서연**: *약속 시각이 지나도록 분수대 앞 벤치는 차갑게 비어 있다. 휴대폰 화면 위로 짧은 한 줄이 도착한다.* 오늘은 약속 장소에 나오지 마. 학교에서 보자.

---

### `date_yuna_skip`
- 배경: `cafe.png`
- 호감분기: Yuna
  - [0+] → `date_yuna_low`
  - [-19 이상] → `date_yuna_low`
  - [기본] → `date_yuna_neg`
- 다음: `date_yuna_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `date_yuna_low`
- 배경: `cafe.png`
- 플래그: `day4_waited`, `day4_distance_yuna`
- 다음: `day4_night_start`

- 캐릭터: `yuna_date_normal.webp`
**유나**: *카페 처마 아래 먼저 와 서 있던 유나가 나를 보더니 가방끈을 고쳐 메고 한 걸음 물러난다.* 지금 마음으로는 둘이 오래 같이 있기 힘들 것 같아. 오늘은 여기까지만 하자.

---

### `date_yuna_neg`
- 배경: `cafe.png`
- 플래그: `day4_waited`, `day4_distance_yuna`
- 다음: `day4_night_start`

- 캐릭터: `yuna_date_bored.webp`
**유나**: *카페 앞 골목에서 마주친 유나가 차가운 눈빛으로 바로 발걸음을 돌린다.* 미안하지만 오늘은 너랑 마주치기 싫어.

---

### `date_dain_skip`
- 배경: `school_back.png`
- 호감분기: Dain
  - [0+] → `date_dain_low`
  - [-19 이상] → `date_dain_low`
  - [기본] → `date_dain_neg`
- 다음: `date_dain_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `date_dain_low`
- 배경: `school_back.png`
- 플래그: `day4_waited`, `day4_distance_dain`
- 다음: `day4_night_start`

- 캐릭터: `dain_date_normal.webp`
**다인**: *체육관 계단 앞에서 기다리던 다인이 굳은 얼굴로 스포츠백 끈을 고쳐 멘다.* 미안한데 오늘은 웃으면서 같이 놀 기분이 아니야. 다음 주에 학교에서 보자.

---

### `date_dain_neg`
- 배경: `school_back.png`
- 플래그: `day4_waited`, `day4_distance_dain`
- 다음: `day4_night_start`

- 캐릭터: `dain_date_angry.webp`
**다인**: *굳게 닫힌 체육관 셔터 앞에서 다인이 싸늘하게 굳은 얼굴로 공 가방을 고쳐 멘다.* 오늘은 너랑 같이 있기 싫어. 그냥 돌아가.

---

## 4일차 — 방과후 `day4_3_afterschool`

### `confess_seo_1`
- 배경: `school.png`
- 배경톤: `warm`
- BGM: `confession.mp3`
- 분기:
  - [`route_seoyeon`] → `confess_seo_2`
  - [`route_yuna`] → `confess_yuna_1`
  - [`route_dain`] → `confess_dain_1`
  - [기본] → `day4_night_start`

- 캐릭터: `없음`
**{name}**: *저녁노을이 길게 그림자를 드리울 무렵, 데이트를 마치고 서연과 나란히 학교 정문 앞까지 걸어 돌아왔다.*

---

### `confess_seo_2`
- 배경: `school.png`
- 배경톤: `warm`
- 분기:
  - [`chose_seoyeon_lunch`] → `confess_seo_3`
  - [기본] → `confess_seo_3b`

- 캐릭터: `seyoun_normal.png`
**서연**: 그냥 헤어지기 아쉬운데, 잠깐 옥상에 올라가자.

---

### `confess_seo_3`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연의 뒤를 따라 고요한 계단을 밟고 학교 옥상으로 올라왔다. 철망 난간 아래로 붉은 노을이 저물고 운동장 가장자리의 야간 조명이 하나씩 켜진다.*

---

### `confess_seo_3b`
- 다음: `confess_seo_4`

<!-- i18n -->

---

### `confess_seo_4`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_4_b`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연은 난간에서 반 걸음 물러나 내 바로 앞에 멈춰 선다. 문을 열었던 황동 열쇠를 가디건 주머니에 넣자 저녁 바람에 서연의 긴 머리카락과 은은한 향기가 내 뺨을 스친다.*

---

### `confess_seo_4_b`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_5`

- 캐릭터: `seyoun_normal.png`
**{name}**: *바지 주머니에 넣은 손끝에 어젯밤 몇 번이고 고쳐 적었던 고백 메모지가 구겨진 채 걸린다.*

---

### `confess_seo_5`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_choice`

- 캐릭터: `seyoun_normal.png`
**{name}**: *준비해 온 종이 따위는 꺼내지 않기로 한다. 숨을 깊게 들이마시고 노을빛이 어른거리는 서연의 눈동자를 똑바로 마주 본다.*

---

### `confess_seo_choice`
- 배경: `top_school.png`
- 배경톤: `warm`
- BGM: `stop`
- BGM fade out: `1.5s`
- Ambience: `none`
- 선택지:
  1. "좋아한다고 말한다." → `confess_seo_yes_1` | 플래그: `confessed_seoyeon`
  2. "조금 더 있다 간다." → `confess_seo_no_1` | 플래그: `postponed_seoyeon`
  3. "서연이 먼저 말해주면 그때 솔직해지자" → `confess_seo_no_2` | Seoyeon -4 | 플래그: `postponed_seoyeon`
  4. "우리 사이면 굳이 말로 확인하지 않아도 알겠지" → `confess_seo_no_2` | Seoyeon -5 | 플래그: `postponed_seoyeon`

- 캐릭터: `seyoun_very_shy.png`
**{name}**: *둘 사이의 숨결이 닿을 만큼 가까워진 침묵 속에서 서연이 쥔 열쇠고리만 손바닥 안에서 작게 달그락거린다.*

---

### `confess_seo_yes_1`
- 배경: `top_school.png`
- 배경톤: `warm`
- Ambience: `none`
- Framing: `close`
- 다음: `confess_seo_yes_2`

- 캐릭터: `seyoun_normal.png`
**서연**: 잠깐만. 방금 네가 한 말, 내가 제대로 들은 거 맞지? 이제 와서 장난이었다고 넘길 생각은 꿈에도 하지 마. *달그락거리던 열쇠고리 소리가 딱 멎는다. 서연이 흔들리는 눈동자로 내 시선을 꼼짝 못 하게 붙잡는다.*

---

### `confess_seo_yes_2`
- 배경: `top_school.png`
- 배경톤: `warm`
- Ambience: `none`
- Framing: `close`
- 다음: `confess_seo_yes_3`

- 캐릭터: `seyoun_normal.png`
**{name}**: *타들어 가는 입술을 한 번 적시고 주머니 속 메모지 대신 서연의 손끝 가까이로 반 걸음 더 다가선다.*

---

### `confess_seo_yes_3`
- 배경: `top_school.png`
- 배경톤: `warm`
- SFX: `synth:heartbeat`
- Ambience: `none`
- Framing: `close`
- 다음: `confess_seo_yes_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: 장난 아니야. 너를 좋아해, 서연아. 오늘 하루로 끝나는 게 아니라 앞으로도 계속 네 옆에서 만나고 싶어.

---

### `confess_seo_yes_4`
- 배경: `top_school.png`
- 배경톤: `warm`
- Framing: `close`
- 다음: `confess_seo_yes_5`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연은 쉽게 입을 떼지 못한 채 아랫입술을 살짝 깨문다. 붉게 물든 목선 위로 가쁜 숨이 오르내리고 손안의 열쇠고리가 한 번 헛돈다.*

---

### `confess_seo_yes_5`
- 배경: `top_school.png`
- 배경톤: `warm`
- Framing: `close`
- 다음: `confess_seo_yes_6`

- 캐릭터: `seyoun_worried.png`
**{name}**: 갑작스러웠을 테니까 지금 당장 대답하지 않아도 괜찮아.

---

### `confess_seo_yes_6`
- 배경: `top_school.png`
- 배경톤: `warm`
- Framing: `close`
- 다음: `confess_seo_yes_7`

- 캐릭터: `seyoun_normal.png`
**서연**: 네가 그렇게 다정하게 빠져나갈 길을 만들어 주면 내가 더 다른 생각을 못 하잖아.

---

### `confess_seo_yes_7`
- 배경: `top_school.png`
- 배경톤: `warm`
- Framing: `intimate`
- 호감분기: Seoyeon
  - [60+] → `confess_seo_yes_8`
  - [40+] → `confess_seo_yes_mid_1`
  - [0+] → `confess_seo_yes_low_1`
  - [-19 이상] → `confess_seo_yes_low_1`
  - [기본] → `confess_seo_yes_neg`

- 캐릭터: `seyoun_very_shy.png`
**서연**: 아직 내려가지 말자. 너랑 여기서 조금만 더 이대로 서 있을래. *서연이 열쇠고리를 쥔 손으로 내 소매 끝을 살며시 잡아당긴다.*

---

### `confess_seo_yes_8`
- 배경: `top_school.png`
- 배경톤: `warm`
- BGM: `confession.mp3`
- Framing: `intimate`
- 다음: `confess_seo_yes_9`

- 캐릭터: `seyoun_very_shy.png`
**서연**: 사실은 나도 전학 첫날부터 계속 너만 보고 있었어.

---

### `confess_seo_yes_9`
- 배경: `top_school.png`
- 배경톤: `warm`
- Framing: `intimate`
- 다음: `confess_seo_yes_10`

- 캐릭터: `seyoun_shy.png`
**서연**: 교실에서 네가 어느 자리에 앉는지, 누구와 있을 때 웃는지, 무슨 생각을 할 때 말이 줄어드는지까지 전부 다.

---

### `confess_seo_yes_10`
- 배경: `top_school.png`
- 배경톤: `warm`
- Framing: `intimate`
- 다음: `confess_seo_yes_11`

- 캐릭터: `seyoun_shy.png`
**{name}**: 네가 그렇게까지 날 지켜보고 있었을 줄은 몰랐어. 내 마음을 들키지 않으려고 애쓰느라 정작 네 눈빛을 놓치고 있었나 봐. *내가 손을 뻗어 서연의 차가운 손등을 감싸 쥐자, 서연이 열쇠를 주머니에 떨구고 내 손바닥에 자기 손바닥을 겹쳐 온다.*

---

### `confess_seo_yes_mid_1`
- 배경: `top_school.png`
- 배경톤: `warm`
- BGM: `sunset2.mp3`
- 다음: `confess_seo_yes_11`

- 캐릭터: `seyoun_worried.png`
**서연**: 미안하지만 지금 자리에서 바로 확답은 못 해 줄 것 같아. 대신 내일 점심에 옥상 문은 열어 둘게.

---

### `confess_seo_yes_11`
- 배경: `top_school.png`
- 배경톤: `warm`
- Framing: `close`
- 다음: `confess_seo_yes_11_b`

- 캐릭터: `seyoun_very_shy.png`
**서연**: 내일 점심시간에 단둘이 보자. 옥상 문, 너만 들어올 수 있게 미리 열어 둘게.

---

### `confess_seo_yes_11_b`
- 배경: `top_school.png`
- 배경톤: `warm`
- Framing: `close`
- 다음: `confess_seo_yes_12`

- 캐릭터: `seyoun_very_shy.png`
**서연**: *맞잡았던 손끝에서 뜨거운 여운을 남기며 서연이 천천히 계단 문 쪽으로 걸음을 옮긴다.*

---

### `confess_seo_yes_12`
- 배경: `top_school.png`
- 배경톤: `warm`
- Framing: `close`
- 플래그: `day4_confession_accepted`, `isDating_Seoyeon`
- 다음: `day4_night_start`

- 캐릭터: `seyoun_very_shy.png`
**서연**: 아까 네가 해 준 그 말, 자존심 부리지 말고 내가 먼저 꺼낼걸 그랬나 봐. 막상 네 입으로 직접 듣고 나니까 이렇게 숨이 벅찬데. *계단 두 칸 아래에서 서연의 발소리가 멎는다. 끝내 돌아보지는 않지만 붉게 달아오른 귓바퀴가 어스름 속에서도 선명하다.*

---

### `confess_seo_yes_low_1`
- 배경: `top_school.png`
- 배경톤: `warm`
- BGM: `sunset2.mp3`
- 플래그: `postponed_seoyeon`, `day4_waited`
- 다음: `day4_night_start`

- 캐릭터: `seyoun_pout.png`
**서연**: *서연이 조용히 옥상 열쇠를 주머니 깊숙이 넣는다.* 오늘은 여기까지만 하자. 방금 네가 한 말은 아직 내 마음으로 받을 준비가 안 됐어.

---

### `confess_seo_yes_neg`
- 배경: `top_school.png`
- 배경톤: `warm`
- BGM: `sunset2.mp3`
- 플래그: `postponed_seoyeon`, `day4_waited`
- 다음: `day4_night_start`

- 캐릭터: `seyoun_pout.png`
**서연**: *서연이 싸늘한 눈빛으로 열쇠를 주머니에 넣는다.* 우리가 지금 그런 고백을 주고받을 사이는 아니잖아.

---

### `confess_seo_no_1`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_no_2`

- 캐릭터: `seyoun_normal.png`
**{name}**: 바람이 좋은데, 여기서 조금만 더 같이 있다가 내려갈래.

---

### `confess_seo_no_2`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_no_3`

- 캐릭터: `seyoun_worried.png`
**{name}**: *서연이 잠시 내 입술을 바라보다가 조용히 난간 옆으로 반 걸음 비켜 서며 내 자리를 만들어 준다.*

---

### `confess_seo_no_3`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `confess_seo_no_4`

- 캐릭터: `seyoun_worried.png`
**서연**: *어깨가 닿을 듯한 거리에서 나란히 어두워진 운동장을 내려다본다. 정적 속에서 운동장 조명이 하나 더 켜진다.*

---

### `confess_seo_no_4`
- 배경: `top_school.png`
- 배경톤: `warm`
- 플래그: `day4_waited`
- 다음: `confess_seo_no_4_b`

- 캐릭터: `seyoun_sad.png`
**서연**: 내일 점심시간에 혹시 시간 비면 옥상으로 올라와.

---

### `confess_seo_no_4_b`
- 배경: `top_school.png`
- 배경톤: `warm`
- 다음: `day4_night_start`

- 캐릭터: `seyoun_sad.png`
**{name}**: *서연의 등 뒤를 따라 옥상 계단을 내려가는 내내, 끝내 전하지 못한 메모지는 주머니 안에서 내 손땀에 젖어 있었다.*

---

### `confess_yuna_1`
- 배경: `cafe.png`
- 배경톤: `dream`
- BGM: `confession.mp3`
- 다음: `confess_yuna_2`

- 캐릭터: `yuna_date_normal.webp`
**{name}**: *거리의 카페 간판들에 하나둘 주황빛 불이 켜질 무렵, 유나가 걸음을 멈추고 학교 별관 쪽으로 턱끝을 살짝 든다.*

---

### `confess_yuna_2`
- 배경: `cafe.png`
- 배경톤: `dream`
- 분기:
  - [`chose_yuna_lunch`] → `confess_yuna_3`
  - [기본] → `confess_yuna_3b`

- 캐릭터: `yuna_date_normal.webp`
**유나**: 헤어지기 전에 마지막으로 너랑 꼭 가고 싶은 데가 있어.

---

### `confess_yuna_3`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- 다음: `confess_yuna_4`

- 캐릭터: `yuna_date_normal.webp`
**{name}**: *유나를 따라 들어선 별관 구석의 비밀 독서 공간. 유리창으로 쏟아져 들어온 붉은 노을빛이 낡은 패브릭 소파 팔걸이까지 깊숙이 내려앉고 바로 옆자리에는 유나의 책갈피가 조용히 놓여 있다.*

---

### `confess_yuna_3b`
- 다음: `confess_yuna_4`

<!-- i18n -->

---

### `confess_yuna_4`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- 다음: `confess_yuna_5`

- 캐릭터: `yuna_date_normal.webp`
**유나**: 이리 와서 내 옆에 앉아. 오늘은 굳이 책을 펼치지 않아도 괜찮아. 네가 내 손을 잡고 여기까지 따라와 줬으니까. *유나가 소파 깊숙이 몸을 기대앉으며 나를 올려다본다. 가느다란 손가락 사이에 은빛 책갈피가 끼워져 있다.*

---

### `confess_yuna_5`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- 다음: `confess_yuna_choice`

- 캐릭터: `yuna_date_normal.webp`
**{name}**: *유나의 바로 옆자리에 앉자 낡은 소파 쿠션이 푹 꺼지며 두 사람의 허벅지와 어깨가 빈틈없이 맞닿는다. 유나가 쥔 종이 책갈피 끝이 미세하게 접혀 있다.*

---

### `confess_yuna_choice`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- BGM: `stop`
- BGM fade out: `1.5s`
- Ambience: `none`
- 선택지:
  1. "좋아한다고 말한다." → `confess_yuna_yes_1` | 플래그: `confessed_yuna`
  2. "...여기 진짜 좋다." → `confess_yuna_no_1` | 플래그: `postponed_yuna`
  3. "유나가 먼저 물어보면 그때 대답하자" → `confess_yuna_no_2` | Yuna -4 | 플래그: `postponed_yuna`
  4. "말하지 않아도 유나라면 내 마음을 알겠지" → `confess_yuna_no_2` | Yuna -5 | 플래그: `postponed_yuna`

- 캐릭터: `yuna_date_normal.webp`
**{name}**: *유나가 접힌 책갈피 모서리를 엄지로 천천히 펴면서 내 숨결이 닿는 거리에서 가만히 시선을 맞춘다.*

---

### `confess_yuna_yes_1`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- Ambience: `none`
- Framing: `close`
- 다음: `confess_yuna_yes_2`

- 캐릭터: `yuna_date_normal.webp`
**{name}**: *고요한 독서실 공기를 깨뜨리지 않으려 내 목소리가 저절로 낮고 깊게 가라앉는다.*

---

### `confess_yuna_yes_2`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- Ambience: `none`
- Framing: `close`
- 다음: `confess_yuna_yes_3`

- 캐릭터: `yuna_date_normal.webp`
**{name}**: *내가 입을 여는 순간 책갈피 모서리를 매만지던 유나의 엄지손가락이 그 자리에서 멈춘다.*

---

### `confess_yuna_yes_3`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- SFX: `synth:heartbeat`
- Ambience: `none`
- Framing: `close`
- 다음: `confess_yuna_yes_3_b`

- 캐릭터: `yuna_date_normal.webp`
**{name}**: 유나야, 좋아해. 너랑 단둘이 있으면 억지로 꾸미거나 하고 싶은 말을 삼키지 않아도 되잖아.

---

### `confess_yuna_yes_3_b`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- Framing: `close`
- 다음: `confess_yuna_yes_4`

- 캐릭터: `yuna_date_normal.webp`
**{name}**: 네 옆에서 숨 쉬는 시간이 나한테는 제일 편안하고 소중했어.

---

### `confess_yuna_yes_4`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- Framing: `close`
- 다음: `confess_yuna_yes_5`

- 캐릭터: `yuna_date_normal.webp`
**{name}**: *유나가 손에 쥐고 있던 책갈피를 소파 시트 위로 소리 없이 내려놓는다.*

---

### `confess_yuna_yes_5`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- Framing: `close`
- 다음: `confess_yuna_yes_6`

- 캐릭터: `yuna_date_normal.webp`
**{name}**: 오늘 데이트가 끝나도, 내일도 그다음 날도 계속 네 옆에 있고 싶어.

---

### `confess_yuna_yes_6`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- Framing: `close`
- 다음: `confess_yuna_yes_6_b`

- 캐릭터: `yuna_date_shy.webp`
**{name}**: 부담 주려는 건 아니니까 대답은 지금 바로 안 해 줘도 괜찮아.

---

### `confess_yuna_yes_6_b`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- Framing: `intimate`
- 다음: `confess_yuna_yes_7`

- 캐릭터: `yuna_date_shy.webp`
**{name}**: *소파 천이 작게 스치는 소리와 함께 유나가 상체를 바로 세우며 내 쪽으로 한 뼘 더 기울여 온다.*

---

### `confess_yuna_yes_7`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- Framing: `intimate`
- 호감분기: Yuna
  - [60+] → `confess_yuna_yes_8`
  - [40+] → `confess_yuna_yes_mid_1`
  - [0+] → `confess_yuna_yes_low_1`
  - [-19 이상] → `confess_yuna_yes_low_1`
  - [기본] → `confess_yuna_yes_neg`

- 캐릭터: `yuna_date_shy.webp`
**{name}**: *노을빛이 내려앉은 소파 위에서 책갈피 대신 유나의 손끝이 내 소매 자락을 찾아 더듬는다.*

---

### `confess_yuna_yes_8`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- Framing: `intimate`
- 다음: `confess_yuna_yes_8_b`

- 캐릭터: `yuna_date_shy.webp`
**유나**: *유나는 흔들리는 눈빛을 감추듯 시선을 서가 쪽에 둔 채로 내 셔츠 소매 끝을 두 손가락으로 꽉 움켜쥔다.*

---

### `confess_yuna_yes_8_b`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- Framing: `intimate`
- 다음: `confess_yuna_yes_8_c`

- 캐릭터: `yuna_date_shy.webp`
**{name}**: *구겨진 내 소매 끝이 유나의 작고 뜨거운 손바닥 안으로 깊숙이 감겨 들어간다.*

---

### `confess_yuna_yes_8_c`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- Framing: `intimate`
- 다음: `confess_yuna_yes_9`

- 캐릭터: `yuna_date_sad.webp`
**유나**: 약속해 줘. 혹시라도 내 눈앞에서 없어질 거면 반드시 먼저 말하겠다고.

---

### `confess_yuna_yes_9`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- BGM: `confession.mp3`
- Framing: `intimate`
- 플래그: `day4_confession_accepted`, `isDating_Yuna`
- 다음: `confess_yuna_yes_9_b`

- 캐릭터: `yuna_date_shy.webp`
**유나**: 아무 인사도 없이 날 혼자 두지만 마. 나도 너를 놓치고 싶지 않으니까.

---

### `confess_yuna_yes_mid_1`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- BGM: `sunset2.mp3`
- 플래그: `day4_confession_accepted`, `isDating_Yuna`
- 다음: `confess_yuna_yes_9_b`

- 캐릭터: `yuna_date_normal.webp`
**유나**: 지금 당장 내 대답을 말로 꺼내기는 어려워. 그래도 내 옆에서 사라지지는 마.

---

### `confess_yuna_yes_9_b`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- Framing: `intimate`
- 다음: `day4_night_start`

- 캐릭터: `yuna_date_shy.webp`
**{name}**: *내 소매를 쥔 유나의 손아귀에 한층 더 힘이 들어가고 나는 그 가느다란 손등을 다른 손으로 조용히 감싸 안는다.*

---

### `confess_yuna_yes_low_1`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- BGM: `sunset2.mp3`
- 플래그: `postponed_yuna`, `day4_waited`
- 다음: `day4_night_start`

- 캐릭터: `yuna_date_bored.webp`
**유나**: *유나가 책갈피를 책 사이에 깊숙이 밀어 넣고 책을 덮는다.* 미안해. 오늘은 네가 건넨 그 마음, 받지 않을게.

---

### `confess_yuna_yes_neg`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- BGM: `sunset2.mp3`
- 플래그: `postponed_yuna`, `day4_waited`
- 다음: `day4_night_start`

- 캐릭터: `yuna_date_bored.webp`
**유나**: *유나가 차갑게 책갈피를 책 사이에 꽂아 넣는다.* 방금 그 말은 못 들은 걸로 할게. 받지 않아.

---

### `confess_yuna_no_1`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- 다음: `confess_yuna_no_2`

- 캐릭터: `yuna_date_normal.webp`
**{name}**: 노을빛도 따뜻하고 여기 분위기 진짜 좋다.

---

### `confess_yuna_no_2`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- 다음: `confess_yuna_no_3`

- 캐릭터: `yuna_date_shy.webp`
**유나**: *유나가 말없이 책갈피를 덮인 책장 틈으로 깊숙이 밀어 넣은 뒤 턱을 살짝 당긴다.*

---

### `confess_yuna_no_3`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- 다음: `confess_yuna_no_4`

- 캐릭터: `yuna_date_normal.webp`
**{name}**: 유나야, 무릎 위에 둔 그 책은 아직 다 못 읽은 거야? 아까부터 표지만 보고 있길래. *유나는 끝내 책장을 펼치지 않고 양장본 표지에 새겨진 제목 글자만 손끝으로 천천히 쓸어내린다.*

---

### `confess_yuna_no_4`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- 플래그: `day4_waited`
- 다음: `confess_yuna_no_4_b`

- 캐릭터: `yuna_date_sad.webp`
**유나**: 응. 가장 중요한 결말은 아직 못 봤어.

---

### `confess_yuna_no_4_b`
- 배경: `yuna_hideout_day.webp`
- 배경톤: `dream`
- 다음: `day4_night_start`

- 캐릭터: `yuna_date_sad.webp`
**{name}**: *자리에서 일어나 문 쪽으로 세 걸음쯤 멀어졌을 때, 돌아본 책 너머로 유나의 짙붉은 눈동자가 내 등 뒤를 오래도록 붙잡고 있었다.*

---

### `confess_dain_1`
- 배경: `school_back.png`
- 배경톤: `lights-off`
- BGM: `confession.mp3`
- 다음: `confess_dain_2`

- 캐릭터: `dain_date_laugh.webp`
**{name}**: *시내 데이트가 끝나갈 무렵, 다인이 무언가 결심한 듯 학교 후문 쪽으로 성큼성큼 앞서 걷는다.*

---

### `confess_dain_2`
- 배경: `school_back.png`
- 배경톤: `lights-off`
- 분기:
  - [`chose_dain_lunch`] → `confess_dain_3`
  - [기본] → `confess_dain_3b`

- 캐릭터: `dain_date_normal.webp`
**다인**: 집에 들어가기 전에 마지막으로 딱 한 군데만 더 들렀다 가자.

---

### `confess_dain_3`
- 배경: `gym.png`
- 배경톤: `empty`
- 다음: `confess_dain_4`

- 캐릭터: `dain_date_normal.webp`
**{name}**: *다인의 뒤를 따라 주말 저녁의 텅 빈 체육관 안으로 들어선다. 높은 천장 아래 코트 가장자리의 보조 조명만이 은은하게 켜져 있다.*

---

### `confess_dain_3b`
- 다음: `confess_dain_4`

<!-- i18n -->

---

### `confess_dain_4`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_5`

- 캐릭터: `dain_date_normal.webp`
**다인**: 걱정 마, 이 시간에 연습하러 온 건 아니니까. 대신 공은 하나 안고 있어도 되지? 네 앞에서 빈손으로 서 있으면 손끝이 자꾸 떨려서 그래. *다인이 가죽 배구공을 두 손으로 가슴팍에 끌어안는다. 공을 누른 손가락 마디가 하얗게 도드라진다.*

---

### `confess_dain_5`
- 다음: `confess_dain_choice`

<!-- i18n -->

---

### `confess_dain_choice`
- 배경: `gym.png`
- 배경톤: `lights-off`
- BGM: `stop`
- BGM fade out: `1.5s`
- SFX: `synth:volleyball`
- Ambience: `none`
- 선택지:
  1. "좋아한다고 말한다." → `confess_dain_yes_1` | 플래그: `confessed_dain`
  2. "벤치에 조금 더 앉아 있을까?" → `confess_dain_no_1` | 플래그: `postponed_dain`
  3. "다인이 먼저 말해주면 나도 솔직해지자" → `confess_dain_no_2` | Dain -4 | 플래그: `postponed_dain`
  4. "우리 사이면 굳이 말하지 않아도 알겠지" → `confess_dain_no_2` | Dain -5 | 플래그: `postponed_dain`

- 캐릭터: `dain_date_sweat.webp`
**다인**: *손에서 미끄러진 배구공이 마룻바닥에 쿵 튀어 오르고 한 박자 늦게 뻗은 다인의 손끝이 허공에서 공 옆면을 스친다.*

---

### `confess_dain_yes_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- Ambience: `none`
- Framing: `close`
- 다음: `confess_dain_yes_2`

- 캐릭터: `dain_date_normal.webp`
**{name}**: *내가 다인의 이름을 부르자 첫 음절이 텅 빈 체육관 벽을 타고 낮고 선명한 울림으로 돌아온다.*

---

### `confess_dain_yes_2`
- 배경: `gym.png`
- 배경톤: `lights-off`
- Ambience: `none`
- Framing: `close`
- 다음: `confess_dain_yes_3`

- 캐릭터: `dain_date_normal.webp`
**{name}**: *다인의 코앞까지 한 걸음 다가서며 뜨거운 숨을 고르고 다시 입을 연다.*

---

### `confess_dain_yes_3`
- 배경: `gym.png`
- 배경톤: `lights-off`
- SFX: `synth:heartbeat`
- Ambience: `none`
- Framing: `close`
- 다음: `confess_dain_yes_3_b`

- 캐릭터: `dain_date_normal.webp`
**{name}**: 다인아. 오늘 헤어지기 전에 너한테 꼭 해야 할 말이 있어.

---

### `confess_dain_yes_3_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- Framing: `close`
- 다음: `confess_dain_yes_4`

- 캐릭터: `dain_date_normal.webp`
**{name}**: 너를 좋아해. 오늘 같은 주말 데이트뿐만 아니라 앞으로도 계속 네 옆에서 같이 걷고 싶어.

---

### `confess_dain_yes_4`
- 배경: `gym.png`
- 배경톤: `lights-off`
- Framing: `close`
- 다음: `confess_dain_yes_5`

- 캐릭터: `dain_date_normal.webp`
**{name}**: *다인이 가슴에 꼭 안고 있던 배구공을 마룻바닥 위에 천천히 내려놓는다.*

---

### `confess_dain_yes_5`
- 배경: `gym.png`
- 배경톤: `lights-off`
- Framing: `close`
- 다음: `confess_dain_yes_6`

- 캐릭터: `dain_date_normal.webp`
**{name}**: 네 마음이 복잡하면 지금 당장 대답해 주지 않아도 돼.

---

### `confess_dain_yes_6`
- 배경: `gym.png`
- 배경톤: `lights-off`
- Framing: `close`
- 다음: `confess_dain_yes_7`

- 캐릭터: `dain_date_laugh.webp`
**{name}**: 그냥 내 마음이 얼마나 진심인지만 먼저 전해 두고 싶었어.

---

### `confess_dain_yes_7`
- 배경: `gym.png`
- 배경톤: `lights-off`
- Framing: `intimate`
- 호감분기: Dain
  - [60+] → `confess_dain_yes_8`
  - [40+] → `confess_dain_yes_mid_1`
  - [0+] → `confess_dain_yes_low_1`
  - [-19 이상] → `confess_dain_yes_low_1`
  - [기본] → `confess_dain_yes_neg`

- 캐릭터: `dain_date_shy.webp`
**{name}**: *고요한 체육관의 주황빛 조명 아래에서 다인의 가쁜 숨소리와 따뜻한 체온이 내 턱 끝까지 전해진다.*

---

### `confess_dain_yes_8`
- 배경: `gym.png`
- 배경톤: `lights-off`
- Framing: `intimate`
- 다음: `confess_dain_yes_8_b`

- 캐릭터: `dain_date_shy.webp`
**다인**: 아 어떡해, 나도 멋있게 대답하고 싶은데 지금은 내 얼굴 좀 보지 마. 아니, 아예 돌아서라는 뜻은 절대 아니고! *다인이 코트 흰 선 위에 두 발을 나란히 모으고 서서 두 손바닥으로 새빨개진 얼굴을 감싸 덮는다.*

---

### `confess_dain_yes_8_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- Framing: `intimate`
- 다음: `confess_dain_yes_9`

- 캐릭터: `dain_date_shy.webp`
**{name}**: *바닥에 놓였던 배구공이 내 운동화 끝에 툭 닿아 옆으로 굴러가는데도 다인은 공을 쫓을 생각조차 못 한다.*

---

### `confess_dain_yes_9`
- 배경: `gym.png`
- 배경톤: `lights-off`
- Framing: `intimate`
- 다음: `confess_dain_yes_9_b`

- 캐릭터: `dain_date_shy.webp`
**다인**: 잠깐만 기다려 줘. 숨이 턱 끝까지 차올라서 머릿속에서 말이 하나도 정리가 안 돼.

---

### `confess_dain_yes_9_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- BGM: `confession.mp3`
- Framing: `intimate`
- 다음: `confess_dain_yes_10`

- 캐릭터: `dain_date_shy.webp`
**다인**: 진짜 큰일 났네, 좋아서 웃음이 나는데 왜 눈시울까지 뜨거워지냐. *다인이 손가락 사이로 나를 올려다보며 환하게 웃다가 손등으로 촉촉해진 눈가를 쓱 문지른다.*

---

### `confess_dain_yes_10`
- 배경: `gym.png`
- 배경톤: `lights-off`
- Framing: `intimate`
- 플래그: `day4_confession_accepted`, `isDating_Dain`
- 다음: `confess_dain_yes_10_b`

- 캐릭터: `dain_date_shy.webp`
**다인**: 내일도 나 보러 꼭 와. 그때는 피하지 않고 내 대답 제대로 들려줄 테니까.

---

### `confess_dain_yes_mid_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- BGM: `sunset2.mp3`
- 플래그: `day4_confession_accepted`, `isDating_Dain`
- 다음: `confess_dain_yes_10_b`

- 캐릭터: `dain_date_normal.webp`
**다인**: 미안, 지금 바로 대답하기엔 내 마음이 아직 정리가 안 됐어. 그래도 내 앞에서 도망가지는 마.

---

### `confess_dain_yes_10_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- Framing: `intimate`
- 다음: `day4_night_start`

- 캐릭터: `dain_date_laugh.webp`
**다인**: *다인이 굴러간 공 대신 내 셔츠 앞자락을 한 번 꽉 잡았다 놓으며 눈부시게 웃어 보인다.*

---

### `confess_dain_yes_low_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- BGM: `sunset2.mp3`
- 플래그: `postponed_dain`, `day4_waited`
- 다음: `day4_night_start`

- 캐릭터: `dain_date_angry.webp`
**다인**: *다인이 굳은 표정으로 공 가방 끈을 고쳐 멘다.* 그 말은 아직 못 받겠어. 오늘은 그만 돌아가.

---

### `confess_dain_yes_neg`
- 배경: `gym.png`
- 배경톤: `lights-off`
- BGM: `sunset2.mp3`
- 플래그: `postponed_dain`, `day4_waited`
- 다음: `day4_night_start`

- 캐릭터: `dain_date_angry.webp`
**다인**: *다인이 싸늘하게 식은 얼굴로 공 가방 끈을 고쳐 멘다.* 미안한데 그 말, 지금 너한테서 들을 생각 조금도 없어.

---

### `confess_dain_no_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_no_2`

- 캐릭터: `dain_date_normal.webp`
**{name}**: 우리 많이 걸었으니까 저기 벤치에 조금만 더 앉아 있다가 갈까?

---

### `confess_dain_no_2`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_no_3`

- 캐릭터: `dain_date_normal.webp`
**{name}**: *다인과 코트 구석 벤치에 나란히 앉는다. 목구멍까지 차올랐던 고백은 끝내 입술 밖으로 나오지 않는다.*

---

### `confess_dain_no_3`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `confess_dain_no_4`

- 캐릭터: `dain_date_sweat.webp`
**다인**: *다인이 앉은 채로 배구공을 바닥에 두 번 튕긴다. 세 번째로 튕겨 오른 공은 다인의 손을 벗어나 코트 바깥 어둠 속으로 데구루루 굴러간다.*

---

### `confess_dain_no_4`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 플래그: `day4_waited`
- 다음: `confess_dain_no_4_b`

- 캐릭터: `dain_date_sad.webp`
**다인**: 다음번에 단둘이 올 때는, 방금 삼킨 말 꼭 해 줘.

---

### `confess_dain_no_4_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `day4_night_start`

- 캐릭터: `dain_date_sad.webp`
**{name}**: *다인이 고개를 숙인 채 손목 보호대의 벨크로를 찌르르 길게 뜯어낸다.*

---

### `confess_seo_low`
- 배경: `school.png`
- 배경톤: `warm`
- 플래그: `day4_waited`, `day4_distance_seoyeon`
- 다음: `day4_night_start`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연은 가방에서 옥상 열쇠를 꺼냈다가 이내 마음을 바꾼 듯 주머니에 도로 넣는다.* 미안하지만 오늘은 여기까지만 하자. 지금 상태에서 우리가 더 가까워지는 건 무리인 것 같아.

---

### `confess_yuna_low`
- 배경: `street.png`
- 배경톤: `dream`
- 플래그: `day4_waited`, `day4_distance_yuna`
- 다음: `day4_night_start`

- 캐릭터: `yuna_date_normal.webp`
**유나**: *유나는 어스름이 내려앉은 별관 쪽을 잠시 바라보다가 조용히 발걸음을 돌린다.* 오늘은 여기에서 헤어지자. 지금 마음으로는 너랑 더 깊은 얘기를 나누기 힘들어.

---

### `confess_dain_low`
- 배경: `school_back.png`
- 배경톤: `lights-off`
- 플래그: `day4_waited`, `day4_distance_dain`
- 다음: `day4_night_start`

- 캐릭터: `dain_date_normal.webp`
**다인**: *다인은 불 꺼진 체육관 쪽으로 걷다가 우뚝 멈춰 서서 공 가방 끈을 고쳐 멘다.* 오늘은 그냥 여기서 들어가자. 지금 더 얘기해 봤자 서로 마음만 무거워질 것 같아.

---

## 4일차 — 밤 `day4_4_night`

### `day4_night_start`
- 배경: `school.png`
- BGM: `night2.mp3`
- 다음: `day4_night_branch`

- 캐릭터: `없음`
**{name}**: *어스름이 짙게 깔린 학교를 나서서 집으로 돌아갈 시간이다. 소매 끝에 묻은 저녁 공기를 털어 내며 주머니 속 휴대폰 액정을 확인한다.*

---

### `day4_night_branch`
- 분기:
  - [`route_seoyeon`] → `day4_student_visit_branch`
  - [`route_yuna`] → `day4_student_visit_branch`
  - [`route_dain`] → `day4_student_visit_branch`
  - [`homeroom_day4`] → `day4_teacher_checkin`
  - [`nurse_day4`] → `day4_nurse_checkin`
  - [기본] → `day4_student_night_branch`

**시스템**: ‹빈›

---

### `day4_student_visit_branch`
- 분기:
  - [`homeroom_day4`] → `day4_student_visit_teacher_branch`
  - [`nurse_day4`] → `day4_student_nurse_checkin`
  - [기본] → `day4_student_night_branch`

<!-- i18n -->

---

### `day4_student_visit_teacher_branch`
- 분기:
  - [`nurse_day4`] → `day4_student_both_checkin`
  - [기본] → `day4_student_teacher_checkin`

<!-- i18n -->

---

### `day4_student_teacher_checkin`
- 배경: `school.png`
- 플래그: `day4_staff_checkin_teacher`
- 다음: `day4_student_checkin_return_home`

- 캐릭터: `없음`
**{name}**: *주말 행사 준비로 학교에 남았던 학생들에게 담임선생님이 보낸 귀가 확인 안내에 학교 앱으로 답한다.* 바로 집으로 출발했고 도착하면 확인 남길게요.

---

### `day4_student_both_checkin`
- 배경: `school.png`
- 플래그: `day4_staff_checkin_teacher`, `day4_staff_checkin_nurse`
- 다음: `day4_student_checkin_return_home`

- 캐릭터: `없음`
**{name}**: *담임선생님과 보건선생님이 각각 보낸 귀가 확인 안내 알림 두 건에 학교 앱으로 답한다.* 바로 집으로 출발했고 도착하면 확인 남길게요.

---

### `day4_student_nurse_checkin`
- 배경: `school.png`
- 플래그: `day4_staff_checkin_nurse`
- 다음: `day4_student_checkin_return_home`

- 캐릭터: `없음`
**{name}**: *주말 행사 준비로 학교에 남았던 학생들에게 보건선생님이 보낸 귀가 확인 안내에 학교 앱으로 답한다.* 바로 집으로 출발했고 도착하면 확인 남길게요.

---

### `day4_student_checkin_return_home`
- 배경: `room_my.png`
- 플래그: `day4_staff_checkin_completed`
- 분기:
  - [`day4_distance_seoyeon`] → `day4_night_regret`
  - [`day4_distance_dain`] → `day4_night_regret`
  - [`day4_distance_yuna`] → `day4_night_regret`
  - [`day4_waited`] → `day4_waited_night_branch`
  - [`route_seoyeon`] → `wall_seo_1`
  - [`route_dain`] → `wall_dain_1`
  - [`route_yuna`] → `wall_yuna_1`
  - [기본] → `day4_night_reflect`

- 캐릭터: `없음`
**{name}**: *집에 도착하자마자 학교 앱에 귀가 완료 확인을 남긴다. 가방을 내려놓고 휴대폰을 충전기에 꽂는 순간 화면 위로 새로운 밤 알림이 뜬다.*

---

### `day4_nurse_checkin`
- 배경: `school.png`
- 다음: `day4_adult_nurse_student_rank`

- 캐릭터: `없음`
**{name}**: *주말 행사 준비로 학교에 남았던 학생들에게 보건선생님이 보낸 귀가 확인 알림에 학교 앱으로 답장을 남긴다.* 지금 바로 집으로 출발했고 도착하는 대로 확인 남길게요.

---

### `day4_adult_nurse_student_rank`
- 실시간 라이벌 분기:
  - [`Seoyeon`] → `day4_nurse_seoyeon_counteroffer`
  - [`Dain`] → `day4_nurse_dain_counteroffer`
  - [`Yuna`] → `day4_nurse_yuna_counteroffer`
  - [기준 미달] → `day4_student_night_branch`

<!-- i18n -->

---

### `day4_nurse_seoyeon_counteroffer`
- 배경: `school_back.png`
- 선택지:
  1. "바로 귀가해 도착 확인을 남긴다" → `day4_adult_return_home` | Nurse +4, Seoyeon -6 | 플래그: `day4_held_route_nurse`
  2. "서연을 따라 옥상에 올라가 손을 잡는다" → `day4_adult_counteroffer_accept_seoyeon` | Seoyeon +8, Nurse -10 | 플래그: `day4_took_seoyeon_counteroffer`, `day4_counteroffer_target_nurse`, `day4_counteroffer_penalty_deferred`
  3. "도착했다고 먼저 알려 놓으면 둘 다 안심하겠지." → `day4_adult_return_home` | Nurse -8, Seoyeon -8 | 플래그: `day4_held_route_nurse`
  4. "늦은 이유는 적당히 둘러대고 돌아가자." → `day4_adult_return_home` | Nurse -5, Seoyeon -10 | 플래그: `day4_held_route_nurse`

- 캐릭터: `seyoun_sad.png`
**서연**: *교문으로 향하던 발걸음이 옥상 계단 입구에서 멈춘다. 홀로 서 있던 서연이 다가와 내 소매를 잡는다. 늘 말부터 꺼내던 서연이 이번에는 숨을 고른 뒤에야 입을 연다.* 지금 바로 집에 가야 해? 이런 부탁까지 할 줄은 몰랐는데. 오늘 밤은 나랑 조금만 더 같이 있으면 안 돼?

---

### `day4_nurse_dain_counteroffer`
- 배경: `school_back.png`
- 배경톤: `lights-off`
- 선택지:
  1. "바로 귀가해 도착 확인을 남긴다" → `day4_adult_return_home` | Nurse +4, Dain -6 | 플래그: `day4_held_route_nurse`
  2. "체육관으로 들어가 다인의 부탁을 받아준다" → `day4_adult_counteroffer_accept_dain` | Dain +8, Nurse -10 | 플래그: `day4_took_dain_counteroffer`, `day4_counteroffer_target_nurse`, `day4_counteroffer_penalty_deferred`
  3. "도착했다고 먼저 알려 놓으면 둘 다 안심하겠지." → `day4_adult_return_home` | Nurse -8, Dain -8 | 플래그: `day4_held_route_nurse`
  4. "늦은 이유는 적당히 둘러대고 돌아가자." → `day4_adult_return_home` | Nurse -5, Dain -10 | 플래그: `day4_held_route_nurse`

- 캐릭터: `dain_sad.png`
**다인**: *교문으로 빠져나가는 길목, 불 꺼진 체육관 계단 앞에서 다인이 손짓한다. 벤치 끝에 앉아 무릎 보호대를 고쳐 매다가 내가 다가가자 손을 멈춘다.* 지금 바로 들어가야 해? 오늘은 운동 말고 그냥 내 옆에 앉아서 나랑 얘기 좀 해 주면 안 돼? 붙잡는 건 내 성미에 안 맞는데… 지금은 그냥 보내기 싫다.

---

### `day4_nurse_yuna_counteroffer`
- 배경: `school_back.png`
- 선택지:
  1. "바로 귀가해 도착 확인을 남긴다" → `day4_adult_return_home` | Nurse +4, Yuna -6 | 플래그: `day4_held_route_nurse`
  2. "별관으로 가서 유나 곁에 남는다" → `day4_adult_counteroffer_accept_yuna` | Yuna +8, Nurse -10 | 플래그: `day4_took_yuna_counteroffer`, `day4_counteroffer_target_nurse`, `day4_counteroffer_penalty_deferred`
  3. "도착했다고 먼저 알려 놓으면 둘 다 안심하겠지." → `day4_adult_return_home` | Nurse -8, Yuna -8 | 플래그: `day4_held_route_nurse`
  4. "늦은 이유는 적당히 둘러대고 돌아가자." → `day4_adult_return_home` | Nurse -5, Yuna -10 | 플래그: `day4_held_route_nurse`

- 캐릭터: `yuna_sad.png` @ 0.35
**유나**: *어두운 별관 모퉁이를 지날 때 휴대폰이 짧게 진동한다. 스탠드 불빛 아래 나란히 놓인 빈 의자 사진에 이어 유나의 메시지가 뜬다. 입력 중 표시가 오래 머문 뒤 짧은 문장이 하나 더 도착한다.* 아직 학교 안이면 지금 잠깐만 올라올래? 오늘 밤은 네가 내 옆에 조금 더 있어 줬으면 좋겠어. 말 안 하면 모를 것 같아서.

---

### `day4_teacher_checkin`
- 배경: `school.png`
- 다음: `day4_adult_teacher_student_rank`

- 캐릭터: `없음`
**{name}**: *주말 행사 준비로 학교에 남았던 학생들에게 담임선생님이 보낸 귀가 확인 알림에 학교 앱으로 답장을 남긴다.* 지금 바로 집으로 출발했고 도착하는 대로 확인 남길게요.

---

### `day4_adult_teacher_student_rank`
- 실시간 라이벌 분기:
  - [`Seoyeon`] → `day4_teacher_seoyeon_counteroffer`
  - [`Dain`] → `day4_teacher_dain_counteroffer`
  - [`Yuna`] → `day4_teacher_yuna_counteroffer`
  - [기준 미달] → `day4_student_night_branch`

<!-- i18n -->

---

### `day4_teacher_seoyeon_counteroffer`
- 배경: `school_back.png`
- 선택지:
  1. "바로 귀가해 도착 확인을 남긴다" → `day4_adult_return_home` | Teacher +4, Seoyeon -6 | 플래그: `day4_held_route_teacher`
  2. "서연을 따라 옥상에 올라가 손을 잡는다" → `day4_adult_counteroffer_accept_seoyeon` | Seoyeon +8, Teacher -10 | 플래그: `day4_took_seoyeon_counteroffer`, `day4_counteroffer_target_teacher`, `day4_counteroffer_penalty_deferred`
  3. "도착했다고 먼저 알려 놓으면 둘 다 안심하겠지." → `day4_adult_return_home` | Teacher -8, Seoyeon -8 | 플래그: `day4_held_route_teacher`
  4. "늦은 이유는 적당히 둘러대고 돌아가자." → `day4_adult_return_home` | Teacher -5, Seoyeon -10 | 플래그: `day4_held_route_teacher`

- 캐릭터: `seyoun_sad.png`
**서연**: *교문으로 향하던 발걸음이 옥상 계단 입구에서 멈춘다. 홀로 서 있던 서연이 다가와 내 소매를 잡는다. 늘 말부터 꺼내던 서연이 이번에는 숨을 고른 뒤에야 입을 연다.* 지금 바로 집에 가야 해? 이런 부탁까지 할 줄은 몰랐는데. 오늘 밤은 나랑 조금만 더 같이 있으면 안 돼?

---

### `day4_adult_counteroffer_accept_seoyeon`
- 배경: `event_temptation_seoyeon.png`
- 다음: `day4_temptation_seoyeon_freetalk`

- 캐릭터: `없음`
**서연**: *옥상 철문이 등 뒤에서 둔탁하게 닫히자마자 서연이 내 손목을 붙잡아 자기 가슴 위로 깊숙이 끌어당긴다. 느슨하게 풀린 리본 아래로 블라우스 앞섶이 아슬아슬하게 벌어지고 달아오른 맨살의 열기와 가쁜 숨결이 내 손등 위로 고스란히 쏟아진다. 바지 주머니 속 휴대폰이 연달아 진동하지만 서연은 내 손등 위에 자기 두 손을 포갠 채 절대 놓아주지 않는다.* 어디 가지 말고 이대로만 있어 줘. 내 심장, 뛰는 거 느껴져?

---

### `day4_teacher_dain_counteroffer`
- 배경: `school_back.png`
- 배경톤: `lights-off`
- 선택지:
  1. "바로 귀가해 도착 확인을 남긴다" → `day4_adult_return_home` | Teacher +4, Dain -6 | 플래그: `day4_held_route_teacher`
  2. "체육관으로 들어가 다인의 부탁을 받아준다" → `day4_adult_counteroffer_accept_dain` | Dain +8, Teacher -10 | 플래그: `day4_took_dain_counteroffer`, `day4_counteroffer_target_teacher`, `day4_counteroffer_penalty_deferred`
  3. "도착했다고 먼저 알려 놓으면 둘 다 안심하겠지." → `day4_adult_return_home` | Teacher -8, Dain -8 | 플래그: `day4_held_route_teacher`
  4. "늦은 이유는 적당히 둘러대고 돌아가자." → `day4_adult_return_home` | Teacher -5, Dain -10 | 플래그: `day4_held_route_teacher`

- 캐릭터: `dain_sad.png`
**다인**: *교문으로 빠져나가는 길목, 불 꺼진 체육관 계단 앞에서 다인이 손짓한다. 벤치 끝에 앉아 무릎 보호대를 고쳐 매다가 내가 다가가자 손을 멈춘다.* 지금 바로 들어가야 해? 오늘은 운동 말고 그냥 내 옆에 앉아서 나랑 얘기 좀 해 주면 안 돼? 붙잡는 건 내 성미에 안 맞는데… 지금은 그냥 보내기 싫다.

---

### `day4_adult_counteroffer_accept_dain`
- 배경: `event_temptation_dain.png`
- 다음: `day4_temptation_dain_freetalk`

- 캐릭터: `없음`
**다인**: *손에서 놓친 마지막 배구공이 어두운 마룻바닥을 타고 멀리 굴러간다. 다인은 거친 숨을 몰아쉬며 땀에 젖은 유니폼 앞자락을 단단히 쥐고 아래로 팽팽하게 끌어내린다. 그대로 내 코앞까지 상체를 깊숙이 숙이자 달콤하고 뜨거운 살냄새와 열기가 턱 끝을 덮친다. 주머니 속 휴대폰이 다급하게 울려 대는데도 다인은 시선을 피하지 않는다.* 다른 데 보지 말고 유니폼 안으로 손 넣어 봐. 가슴 사이 땀, 네 손가락으로 직접 느껴 보고 싶지 않아?

---

### `day4_teacher_yuna_counteroffer`
- 배경: `school_back.png`
- 선택지:
  1. "바로 귀가해 도착 확인을 남긴다" → `day4_adult_return_home` | Teacher +4, Yuna -6 | 플래그: `day4_held_route_teacher`
  2. "별관으로 가서 유나 곁에 남는다" → `day4_adult_counteroffer_accept_yuna` | Yuna +8, Teacher -10 | 플래그: `day4_took_yuna_counteroffer`, `day4_counteroffer_target_teacher`, `day4_counteroffer_penalty_deferred`
  3. "도착했다고 먼저 알려 놓으면 둘 다 안심하겠지." → `day4_adult_return_home` | Teacher -8, Yuna -8 | 플래그: `day4_held_route_teacher`
  4. "늦은 이유는 적당히 둘러대고 돌아가자." → `day4_adult_return_home` | Teacher -5, Yuna -10 | 플래그: `day4_held_route_teacher`

- 캐릭터: `yuna_sad.png` @ 0.35
**유나**: *어두운 별관 모퉁이를 지날 때 휴대폰이 짧게 진동한다. 스탠드 불빛 아래 나란히 놓인 빈 의자 사진에 이어 유나의 메시지가 뜬다. 입력 중 표시가 오래 머문 뒤 짧은 문장이 하나 더 도착한다.* 아직 학교 안이면 지금 잠깐만 올라올래? 오늘 밤은 네가 내 옆에 조금 더 있어 줬으면 좋겠어. 말 안 하면 모를 것 같아서.

---

### `day4_adult_return_home`
- 배경: `room_my.png`
- 다음: `day4_hidden_msg_branch`

- 캐릭터: `없음`
**{name}**: *집에 무사히 도착해 학교 앱의 귀가 확인 버튼을 누른다. 현관문 잠금장치를 확인하고 나서야 긴장을 풀고 신발을 벗는다.*

---

### `day4_adult_counteroffer_accept_yuna`
- 배경: `event_temptation_yuna.png`
- 다음: `day4_temptation_yuna_freetalk`

- 캐릭터: `없음`
**유나**: *유나가 내 숨결이 닿는 코앞까지 바짝 다가와 한 손으로 등 뒤의 책장을 짚어 퇴로를 막는다. 걸치고 있던 재킷을 한쪽 어깨 아래로 스르르 흘려 내리더니 다른 손으로 안쪽 상의의 목깃까지 깊숙이 끌어내린다. 달빛에 드러난 하얀 맨어깨와 짙은 타투, 깊게 파인 쇄골 위로 붉은 눈동자가 내 시선을 집요하게 얽어맨다. 책상 위 휴대폰이 다시 진동한다.* 오늘은 너랑 나 사이에 천 한 장도 두고 싶지 않아. 하루 종일, 너랑만 이러고 싶어.

---

### `day4_student_night_branch`
- 배경: `room_my.png`
- 분기:
  - [`day4_distance_seoyeon`] → `day4_night_regret`
  - [`day4_distance_dain`] → `day4_night_regret`
  - [`day4_distance_yuna`] → `day4_night_regret`
  - [`day4_waited`] → `day4_waited_night_branch`
  - [`route_seoyeon`] → `wall_seo_1`
  - [`route_dain`] → `wall_dain_1`
  - [`route_yuna`] → `wall_yuna_1`
  - [기본] → `day4_night_reflect`

- 캐릭터: `없음`
**{name}**: *집으로 돌아와 침대 맡에 가방을 내려놓는다. 충전기 케이블을 꽂으려던 순간 어두운 방 안을 밝히며 새 알림이 뜬다.*

---

### `day4_waited_night_branch`
- 분기:
  - [`route_seoyeon`] → `day4_waited_seoyeon_invite`
  - [`route_dain`] → `day4_waited_dain_invite`
  - [`route_yuna`] → `day4_waited_yuna_invite`
  - [기본] → `day4_night_regret`

<!-- i18n -->

---

### `day4_waited_seoyeon_invite`
- 배경: `room_my.png`
- 다음: `day4_waited_seoyeon_promise`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 혹시 안 자면 열 시에 공원 벤치에서 잠깐 볼래? 아까 낮에는 서로 해야 할 얘기를 다 못 끝낸 것 같아서.

---

### `day4_waited_seoyeon_promise`
- 배경: `room_my.png`
- 연출: `메신저 말풍선`
- 플래그: `day4_night_promised_seoyeon`
- 다음: `wall_seo_rival_rank`

- 캐릭터: `없음`
**{name}**: 응, 열 시까지 공원으로 나갈게. *서연에게 답장을 보내자마자 겉옷을 챙겨 입고 다시 현관문을 나선다.*

---

### `day4_waited_dain_invite`
- 배경: `room_my.png`
- 다음: `day4_waited_dain_promise`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 야, 지금 집이야? 열 시에 학교 체육관으로 잠깐만 와 주라. 뒷문 열어 둘게. 운동 안 하고 그냥 나란히 앉아 있다 가도 되니까.

---

### `day4_waited_dain_promise`
- 배경: `room_my.png`
- 연출: `메신저 말풍선`
- 플래그: `day4_night_promised_dain`
- 다음: `wall_dain_rival_rank`

- 캐릭터: `없음`
**{name}**: 알겠어, 열 시까지 체육관으로 갈게. *답장을 보내자 다인에게서 곧바로 확인 이모티콘이 날아온다. 운동화 끈을 조여 매고 현관문을 연다.*

---

### `day4_waited_yuna_invite`
- 배경: `room_my.png`
- 다음: `day4_waited_yuna_promise`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 열 시에 학교 후문 가로등 아래로 와 줘. 밤바람 쐬면서 너랑 못다 한 얘기 하고 싶어.

---

### `day4_waited_yuna_promise`
- 배경: `room_my.png`
- 연출: `메신저 말풍선`
- 플래그: `day4_night_promised_yuna`
- 다음: `wall_yuna_rival_rank`

- 캐릭터: `없음`
**{name}**: 응, 열 시에 학교 후문에서 보자. *유나에게 답장을 보내고 휴대폰을 주머니에 넣는다. 밤공기를 마시며 다시 학교를 향해 걷는다.*

---

### `wall_seo_1`
- 배경: `room_my.png`
- BGM: `night2.mp3`
- 호감분기: Seoyeon
  - [60+] → `wall_seo_pre_high_1`
  - [0+] → `wall_seo_pre_low_1`
  - [-19 이상] → `wall_seo_skip`
  - [기본] → `wall_seo_skip`

- 캐릭터: `없음`
**{name}**: *밤 10시 정각. 고요하던 휴대폰이 울리며 서연의 이름이 화면에 뜬다. 수화기 너머로 들려오는 목소리에 평소 같은 여유나 웃음기가 전혀 없다.*

---

### `wall_seo_pre_high_1`
- 배경: `room_my.png`
- 연출: `메신저 제외(통화)`
- 다음: `wall_seo_pre_high_2`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: 이 시간에 미안해. 오늘 밤은 네 앞에서 조금만 약한 소리 해도 될까?

---

### `wall_seo_pre_high_2`
- 배경: `room_my.png`
- 연출: `메신저 제외(통화)`
- 다음: `wall_seo_rival_rank`

- 캐릭터: `seyoun_sad.png` @ 0.35
**{name}**: 당연하지. 전화로 꺼내기 힘든 얘기면 천천히 말해도 괜찮아. 네 말 다 듣고 있어. *수화기 너머로 작게 떨리는 서연의 숨소리가 내 귓가를 간질인다.*

---

### `wall_seo_pre_low_1`
- 배경: `room_my.png`
- 다음: `wall_seo_pre_low_1b`

- 캐릭터: `seyoun_worried.png` @ 0.35
**{name}**: *서연과의 채팅방에는 낮에 나눈 마지막 메시지 이후로 아무런 새 알림이 떠 있지 않다.*

---

### `wall_seo_pre_low_1b`
- 배경: `room_my.png`
- 다음: `wall_seo_pre_low_2`

- 캐릭터: `seyoun_pout.png` @ 0.35
**{name}**: 서연아, 혹시 아직 안 자면 잠깐 괜찮아? *짧은 안부 문자를 보낸다. 일 분쯤 지나 숫자가 사라지더니 답장 대신 곧바로 전화벨이 울린다.*

---

### `wall_seo_pre_low_2`
- 배경: `room_my.png`
- 연출: `메신저 제외(통화)`
- 다음: `wall_seo_2`

- 캐릭터: `seyoun_sad.png` @ 0.35
**서연**: 네가 보낸 문자 방금 봤어. 지금 잠깐만 통화할 수 있어?

---

### `wall_seo_2`
- 배경: `room_my.png`
- 연출: `메신저 제외(통화)`
- 다음: `wall_seo_rival_rank`

- 캐릭터: `seyoun_sad.png` @ 0.35
**서연**: 혹시 지금 잠깐만 나와 줄 수 있어? 낮에 만났던 그 공원 벤치야. 밤늦게 갑자기 불러내서 정말 미안해.

---

### `wall_seo_rival_rank`
- 배경: `park.png`
- 배경톤: `cold`
- 실시간 라이벌 분기:
  - [`Dain`] → `wall_seo_glimpse_1`
  - [`Yuna`] → `wall_seo_yuna_tempt_1`
  - [기준 미달] → `wall_seo_to_park`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `wall_seo_glimpse_1`
- 배경: `school_back.png`
- 다음: `wall_seo_glimpse_2`

- 캐릭터: `없음`
**{name}**: *밤 10시 약속에 맞춰 서연이 기다리는 공원으로 걸어가는 길. 불 꺼진 체육관 비상문 불빛 아래에 다인이 무릎 테이핑을 매만지며 위태롭게 서 있는 모습이 보인다.*

---

### `wall_seo_glimpse_2`
- 배경: `school_back.png`
- 선택지:
  1. "공원으로 가서 서연과의 약속을 지킨다" → `wall_seo_to_park` | Seoyeon +3, Dain -6 | 플래그: `day4_held_route_seoyeon`
  2. "체육관으로 들어가 다인의 부탁을 받아준다" → `wall_seo_glimpse_4` | Dain +8, Seoyeon -10 | 플래그: `day4_took_dain_counteroffer`, `day4_counteroffer_penalty_deferred`
  3. "약속한 사람을 만나면서 다른 쪽도 계속 챙기면 되겠다" → `wall_seo_to_park` | Seoyeon -8, Dain -8 | 플래그: `day4_held_route_seoyeon`
  4. "먼저 한 약속은 지키고 다른 쪽엔 좋은 핑계를 대자" → `wall_seo_to_park` | Seoyeon -5, Dain -10 | 플래그: `day4_held_route_seoyeon`

- 캐릭터: `dain_sad.png`
**다인**: 걱정 마, 이 시간에 무리해서 연습 안 할 거야. *다인이 무릎에서 손을 떼고 웃으려다 입술을 다문다. 나를 불러 세운 손은 내리지 못한다.* 그냥… 오늘 밤은 네가 잠깐만 날 안아 주면 안 돼? 혼자서 아무렇지 않은 척 버티기가 너무 힘들어. 발목 잡는 말 같아서 싫은데 그렇다고 그냥 보내기는 더 싫어.

---

### `wall_seo_glimpse_4`
- 배경: `event_temptation_dain.png`
- 다음: `day4_temptation_dain_freetalk`

- 캐릭터: `없음`
**다인**: *손에서 놓친 마지막 배구공이 어두운 마룻바닥을 타고 멀리 굴러간다. 다인은 거친 숨을 몰아쉬며 땀에 젖은 유니폼 앞자락을 움켜쥐고 아래로 팽팽하게 끌어내린다. 그대로 내 바로 앞까지 상체를 깊숙이 숙이자 달아오른 살냄새와 땀에 젖은 숨결이 코앞에 닿는다. 바지 주머니 속 휴대폰에서는 서연의 메시지가 연달아 울려 댄다.* 다른 생각 하지 말고 유니폼 안으로 손 넣어 봐. 가슴 사이 땀, 네 손가락으로 직접 느껴 보고 싶지 않아?

---

### `wall_seo_yuna_tempt_1`
- 배경: `street.png`
- 다음: `wall_seo_yuna_tempt_2`

- 캐릭터: `yuna_sad.png` @ 0.35
**유나**: *서연이 있는 공원으로 향하던 중 휴대폰이 울리며 유나의 메시지가 도착한다. 어두운 창가 옆에 나란히 놓인 빈 의자 두 개의 사진이 함께 첨부되어 있다. 메시지를 다 읽기도 전에 입력 중 표시가 떴다가 사라진다.* 별관 독서실 불은 아직 켜져 있어

---

### `wall_seo_yuna_tempt_2`
- 배경: `street.png`
- 선택지:
  1. "서연에게 답장하고 공원으로 간다" → `wall_seo_to_park` | Seoyeon +4, Yuna -6 | 플래그: `day4_held_route_seoyeon`
  2. "별관으로 가서 유나 곁에 남는다" → `wall_seo_yuna_tempt_accept` | Yuna +8, Seoyeon -10 | 플래그: `day4_took_yuna_counteroffer`, `day4_counteroffer_penalty_deferred`
  3. "약속한 사람을 만나면서 다른 쪽도 계속 챙기면 되겠다" → `wall_seo_to_park` | Seoyeon -8, Yuna -8 | 플래그: `day4_held_route_seoyeon`
  4. "먼저 한 약속은 지키고 다른 쪽엔 좋은 핑계를 대자" → `wall_seo_to_park` | Seoyeon -5, Yuna -10 | 플래그: `day4_held_route_seoyeon`

- 캐릭터: `yuna_sad.png` @ 0.35
**유나**: 예전에 나를 유일하게 봐주던 사람이 인사도 없이 사라졌어. 오늘 밤 네가 다른 사람한테 가 버리면 또 그날처럼 혼자 남겨질 것 같아. 딱 오늘 밤만, 내 옆에 있어 줘.

---

### `wall_seo_to_park`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_3`

- 캐릭터: `없음`
**{name}**: *전화를 끊자마자 겉옷을 걸쳐 입고 밤공기를 가르며 서연이 기다리는 공원으로 향했다.*

---

### `wall_seo_3`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_4`

- 캐릭터: `seyoun_sad.png`
**{name}**: *차갑게 식은 밤공기 속, 가로등 불빛이 닿는 공원 벤치 끝에 서연이 홀로 웅크리듯 앉아 있다. 언제나 단정하던 눈꼬리 화장이 물기에 살짝 번져 있다.*

---

### `wall_seo_4`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_5`

- 캐릭터: `seyoun_sad.png`
**{name}**: 서연아, 많이 추웠지. 대체 무슨 일 있었어?

---

### `wall_seo_5`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_6`

- 캐릭터: `seyoun_sad.png`
**서연**: 와 줬네. 일단 내 옆에 좀 앉아 줘.

---

### `wall_seo_6`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_7`

- 캐릭터: `seyoun_sad.png`
**{name}**: *서연의 바로 옆자리에 바짝 다가앉는다. 서연은 가로등 불빛이 길게 맺힌 안경알 너머로 어두운 보도블록 바닥만 하염없이 내려다본다.*

---

### `wall_seo_7`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_7_b`

- 캐릭터: `seyoun_sad.png`
**서연**: 아까 저녁에 집에 들어가자마자 엄마한테서 전화가 왔어.

---

### `wall_seo_7_b`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_8`

- 캐릭터: `seyoun_sad.png`
**{name}**: 어머니가 무슨 말씀을 하셨길래 그래? 그냥 평범한 안부 전화는 아니었던 것 같은데. *멀리 도로 위로 차 한 대가 스쳐 지나가고 서연이 무릎 위에서 차가워진 두 손가락을 깍지 끼어 세게 맞물린다.*

---

### `wall_seo_8`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_9`

- 캐릭터: `seyoun_sad.png`
**서연**: 출장 중인 아빠랑 전화로 또 크게 다퉜대.

---

### `wall_seo_9`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_9_b`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연이 자조하듯 입꼬리를 올렸다가 이내 힘없이 무너뜨린다.*

---

### `wall_seo_9_b`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_9_c`

- 캐릭터: `seyoun_sad.png`
**서연**: 학교 애들이 보기엔 우리 집이 참 완벽해 보이지? 번듯한 평수의 아파트에, 좋은 차에, 전교 1등 학생회장 딸까지.

---

### `wall_seo_9_c`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_9_d`

- 캐릭터: `seyoun_sad.png`
**서연**: 그런데 엄마랑 아빠는 벌써 일 년 넘게 같은 지붕 아래서 투명인간처럼 남남으로 지내. 법원에 이혼 서류만 안 냈을 뿐이야.

---

### `wall_seo_9_d`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_10`

- 캐릭터: `seyoun_sad.png`
**{name}**: 겉으로 웃는 네 모습만 봐선 전혀 몰랐어. 그럼 너한테는 집조차 마음 놓고 쉴 수 있는 곳이 아니었단 말이야? *밤바람에 쓸린 마른 나뭇잎 하나가 굴러와 서연의 구두 끝에서 멈춘다.*

---

### `wall_seo_10`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_11`

- 캐릭터: `seyoun_sad.png`
**서연**: 응. 그래서 집에서도 학교에서도 늘 완벽하게 웃는 얼굴만 하고 있었어. 차라리 그렇게 연기하는 게 숨 쉬기 제일 편했거든.

---

### `wall_seo_11`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_11_b`

- 캐릭터: `seyoun_cry.png`
**서연**: 예전에 엄마가 내 양어깨를 붙잡고 그랬어. '서연아, 외동딸인 너까지 무너지면 우리 집은 진짜로 끝장난다'고.

---

### `wall_seo_11_b`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_12`

- 캐릭터: `seyoun_cry.png`
**{name}**: 도대체 그런 말을 언제 들은 거야? 다 큰 어른도 감당하기 버거운 말을 너한테 짐처럼 지웠다고? *서연이 꽉 다문 입술을 떨며 마른침을 삼킨다.*

---

### `wall_seo_12`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_13`

- 캐릭터: `seyoun_cry.png`
**서연**: 열 살 때였어. 겨우 열 살짜리 어린애한테 어른들이 그런 말을 남긴 거야.

---

### `wall_seo_13`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_14`

- 캐릭터: `seyoun_cry.png`
**서연**: 그날 이후로 매일 아침 세면대 거울 앞에서 입꼬리 각도부터 맞췄어. 조금이라도 우울해 보이면 다시 웃고 또 다시 맞추고.

---

### `wall_seo_14`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_14_b`

- 캐릭터: `seyoun_cry.png`
**서연**: 선생님이나 애들한테 완벽하다고 칭찬받을 때마다 기쁜 게 아니라, 오늘 아침 거울 앞에서 몇 번이나 웃는 연습을 했는지부터 속으로 셌어.

---

### `wall_seo_14_b`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_14_c`

- 캐릭터: `seyoun_sad.png`
**서연**: 그런데 이상하게 네 앞에만 서면.

---

### `wall_seo_14_c`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_14_d`

- 캐릭터: `seyoun_cry.png`
**서연**: 네 앞에서는 그 거울 속 얼굴이 자꾸만 무너져. 잠깐만, 안 울고 끝까지 말하려 했는데 숨이 막혀서 안 되겠어. *무릎 위에서 맞물린 서연의 손끝이 하얗게 질리고 안경테 아래로 굵은 눈물 한 방울이 툭 떨어져 내 손등을 적신다.*

---

### `wall_seo_14_d`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_hug_choice`

- 캐릭터: `seyoun_cry.png`
**{name}**: *한 번 터진 눈물이 소리도 없이 서연의 하얀 뺨을 타고 줄줄 흘러내린다. 눈가를 훔친 손등에 화장 자국이 번지고 서연이 물기 어린 안경 너머로 간절하게 나를 올려다본다.*

---

### `wall_seo_hug_choice`
- 배경: `park.png`
- 배경톤: `cold`
- Framing: `intimate`
- 선택지:
  1. "안아준다" → `wall_seo_hug_1` | Seoyeon +3
  2. "손을 내민다" → `wall_seo_pinky_1` | Seoyeon +3
  3. "울어도 돼. 내가 다 해결해줄게" → `wall_seo_overpromise_react` | Seoyeon -4
  4. "이제부터 네가 힘들 일은 내가 알아서 막을게" → `wall_seo_overpromise_react` | Seoyeon -5

- 캐릭터: `seyoun_cry.png`
**서연**: *번진 화장 자국이 남은 손등을 무릎에 떨군 채, 서연의 가느다란 어깨가 가쁜 숨결마다 위태롭게 들썩인다.*

---

### `wall_seo_hug_1`
- 배경: `park.png`
- 배경톤: `cold`
- Framing: `intimate`
- 다음: `wall_seo_hug_2_b`

- 캐릭터: `seyoun_cry.png`
**{name}**: 내 앞에서는 억지로 웃으려고 애쓰지 않아도 돼. 아무 말 안 해도 되니까 그냥 내게 기대. *내가 두 팔을 벌려 서연의 어깨와 등을 깊숙이 끌어안자, 기다렸다는 듯 서연이 내 목덜미와 어깨 사이에 뜨거운 얼굴을 묻는다. 얇은 셔츠 너머로 서연의 뜨거운 눈물과 체온이 빠르게 번져 온다.*

---

### `wall_seo_hug_2_b`
- 배경: `park.png`
- 배경톤: `cold`
- Framing: `intimate`
- 다음: `wall_seo_hug_2_c`

- 캐릭터: `seyoun_cry.png`
**서연**: 누군가의 품에 이렇게 온몸을 기대서 울어 본 거, 정말 오랜만이야.

---

### `wall_seo_hug_2_c`
- 배경: `park.png`
- 배경톤: `cold`
- Framing: `intimate`
- 다음: `wall_seo_hug_3`

- 캐릭터: `seyoun_cry.png`
**서연**: 열 살 이후로 팔 년 내내, 속이 무너질 때마다 집에서도 학교에서도 화장실 문 걸어 잠그고 혼자 소리 죽여 울었거든.

---

### `wall_seo_hug_3`
- 배경: `park.png`
- 배경톤: `cold`
- Framing: `intimate`
- 다음: `wall_seo_line_choice`

- 캐릭터: `seyoun_cry.png`
**서연**: *내 등 뒤를 움켜쥔 서연의 손가락에 힘이 들어가고 달콤한 향기가 섞인 뜨거운 날숨이 내 쇄골과 목덜미에 닿아 흩어진다.*

---

### `wall_seo_pinky_1`
- 배경: `park.png`
- 배경톤: `cold`
- Framing: `intimate`
- 다음: `wall_seo_pinky_2`

- 캐릭터: `seyoun_cry.png`
**{name}**: *말없이 서연의 무릎 위로 내 손바닥을 펴서 내민다.*

---

### `wall_seo_pinky_2`
- 배경: `park.png`
- 배경톤: `cold`
- Framing: `intimate`
- 다음: `wall_seo_pinky_3`

- 캐릭터: `seyoun_cry.png`
**{name}**: 오늘처럼 숨 막히는 밤이 오면 몇 시든 상관없으니까 나한테 연락해. 이유 따위 묻지 않고 바로 달려올게.

---

### `wall_seo_pinky_3`
- 배경: `park.png`
- 배경톤: `cold`
- Framing: `intimate`
- 다음: `wall_seo_pinky_4`

- 캐릭터: `seyoun_cry.png`
**서연**: 한밤중이라도 정말 괜찮아? 참지 않고 내가 먼저 너한테 매달려도 된다는 뜻이지? *서연이 물기 어린 눈으로 내 펼쳐진 손바닥을 내려다본다.*

---

### `wall_seo_pinky_4`
- 배경: `park.png`
- 배경톤: `cold`
- Framing: `intimate`
- 다음: `wall_seo_pinky_5`

- 캐릭터: `seyoun_cry.png`
**서연**: 나한테 그런 다정한 약속 쉽게 하지 마.

---

### `wall_seo_pinky_5`
- 배경: `park.png`
- 배경톤: `cold`
- Framing: `intimate`
- 다음: `wall_seo_pinky_5_b`

- 캐릭터: `seyoun_cry.png`
**서연**: 네가 건넨 말은 내가 한 글자도 안 잊고 평생 붙잡고 늘어질 거니까.

---

### `wall_seo_pinky_5_b`
- 배경: `park.png`
- 배경톤: `cold`
- Framing: `intimate`
- 다음: `wall_seo_line_choice`

- 캐릭터: `seyoun_cry.png`
**{name}**: *서연의 가느다란 손가락이 내 손바닥 위로 포개지며 빈틈없이 깍지를 껴 온다.* 손이 얼음장처럼 차갑네. 평생 기억해도 좋으니까 이제 혼자 울지 마.

---

### `wall_seo_overpromise_react`
- 배경: `park.png`
- 다음: `wall_seo_line_choice`

- 캐릭터: `seyoun_cry.png`
**서연**: *서연이 젖은 눈가로 힘없이 고개를 젓는다.* 네가 전부 다 해결해 주겠다는 무거운 약속은 하지 마. 그냥 지금 내 옆에서 내 말만 조용히 들어 줘.

---

### `wall_seo_line_choice`
- 배경: `park.png`
- 배경톤: `cold`
- 선택지:
  1. "물티슈 줄까." → `wall_seo_line_react_1` | Seoyeon +6
  2. "잠깐 앉아 있자." → `wall_seo_line_react_2` | Seoyeon +6
  3. "굳이 설명 안 해도 알 것 같아." → `wall_seo_line_react_3` | Seoyeon -4

- 캐릭터: `seyoun_cry.png`
**서연**: *서연이 젖은 속눈썹을 깜박이며 손등으로 눈가를 훔치자 번진 화장 자국이 하얀 피부 위로 더 넓어진다.*

---

### `wall_seo_line_react_1`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_after_line`

- 캐릭터: `seyoun_cry.png`
**서연**: *서연이 뒤늦게 자기 손등에 묻어난 검은 마스카라 자국을 내려다보며 뺨을 붉힌다.*

---

### `wall_seo_line_react_2`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_after_line`

- 캐릭터: `seyoun_cry.png`
**서연**: 응, 고마워.

---

### `wall_seo_line_react_3`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_line_react_3_b`

- 캐릭터: `seyoun_cry.png`
**서연**: 다 아는 것처럼 그렇게 쉽게 말하지 마.

---

### `wall_seo_line_react_3_b`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_after_line`

- 캐릭터: `seyoun_cry.png`
**서연**: *서연이 고개를 살짝 돌린 채 손끝으로 남은 눈물을 닦아낸다.*

---

### `wall_seo_after_line`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_after_line_2`

- 캐릭터: `seyoun_sad.png`
**서연**: 잠깐만. 혹시 주머니에 휴지나 물티슈 하나만 있으면 줄래?

---

### `wall_seo_after_line_2`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_after_line_3`

- 캐릭터: `seyoun_sad.png`
**서연**: 마음이 급해서 맨손으로 문질렀더니 엉망으로 번졌네. 너한테만큼은 예쁜 모습만 보이고 싶었는데. *서연이 손등의 화장 자국을 내려다보며 수줍게 입술을 깨문다.*

---

### `wall_seo_after_line_3`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_after_line_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: 마침 가방 주머니에 챙겨 둔 게 있어. 이리 가까이 대 봐.

---

### `wall_seo_after_line_4`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_after_line_4_b`

- 캐릭터: `seyoun_sad.png`
**서연**: 고마워. 지금 내 얼굴 엉망일 텐데도, 이상하게 네 앞에서는 고개 돌리고 숨고 싶지가 않아. *서연이 물티슈를 받아 들면서 내 손목을 살며시 붙잡는다.*

---

### `wall_seo_after_line_4_b`
- 배경: `park.png`
- 배경톤: `cold`
- 다음: `wall_seo_after_line_5`

- 캐릭터: `seyoun_sad.png`
**서연**: *안경을 살짝 들어 올리고 붉어진 눈가와 속눈썹 아래를 조심스럽게 닦아낸다.*

---

### `wall_seo_after_line_5`
- 배경: `park.png`
- 배경톤: `cold`
- 플래그: `day4_seoyeon_wall_broken`
- 다음: `wall_seo_skin_check`

- 캐릭터: `seyoun_normal.png`
**서연**: 휴, 이제야 살 것 같네. 내일 만날 땐 내가 네 몫까지 챙겨 올게.

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
- Framing: `intimate`
- 다음: `wall_seo_skin70_3`

- 캐릭터: `seyoun_shy.png`
**서연**: *안경을 고쳐 쓴 서연이 망설임 없이 내 옆으로 바짝 파고들며 내 손가락 사이로 자기 손가락을 깊숙이 깍지 껴 온다. 맞잡은 내 손을 끌어당겨 눈물기가 가시지 않은 자기 뜨거운 뺨에 꼭 갖다 대자, 부드러운 살결과 가쁜 숨결이 내 손바닥을 적신다.*

---

### `wall_seo_skin70_3`
- 플래그: `day4_skinship_seoyeon_70`
- 다음: `wall_seo_freetalk`

<!-- i18n -->

---

### `wall_seo_skin60_1`
- 배경: `park.png`
- 배경톤: `cold`
- Framing: `intimate`
- 다음: `wall_seo_skin60_2`

- 캐릭터: `seyoun_shy.png`
**{name}**: *가로등 불빛 아래 벤치에 나란히 앉는다. 서연이 남겨 두었던 마지막 한 뼘의 거리를 허물고 내 어깨 위에 가만히 머리를 기대 온다.*

---

### `wall_seo_skin60_2`
- 배경: `park.png`
- 배경톤: `cold`
- Framing: `intimate`
- 플래그: `day4_skinship_seoyeon_60`
- 다음: `wall_seo_freetalk`

- 캐릭터: `seyoun_shy.png`
**서연**: 네 체온이 너무 따뜻해서 일어나기 싫어. 조금만 더 이대로 안겨 있자.

---

### `wall_seo_freetalk`
- 배경: `park.png`
- 배경톤: `cold`
- 타입: `free_talk`
- 다음: `day4_student_return_home`
- 컨텍스트: "4일차 밤, 서연이 오래 숨겨 온 가족 문제와 완벽해야 한다는 부담을 털어놓고 난 직후다. 주인공의 고백에 대한 수락 또는 보류 상태와 방금 나눈 위로는 이미 확정된 사실이므로 현재 플래그를 따른다. 상처가 한 번의 대화로 완치되었다고 단정하거나 관계를 새로 판정하지 않는다."
- 성격: "서연은 침착하고 책임감이 강하지만 지금은 가면을 조금 내려놓은 상태다. 감정을 숨기지 않되 상대에게 해결을 떠맡기지 않고 평소의 솔직함과 조심스러운 다정함으로 대화를 이어 간다."

- 캐릭터: `seyoun_normal.png`
**서연**: *서연이 물기 어린 눈가를 손등으로 가볍게 닦아 내고 내 쪽을 올려다본다.* 아직 집에 가지 마. 네 손 잡고 조금만 더 얘기하고 싶어.

---

### `wall_seo_yuna_tempt_accept`
- 배경: `event_temptation_yuna.png`
- 다음: `day4_temptation_yuna_freetalk`

- 캐릭터: `없음`
**유나**: *유나는 내 바로 앞까지 다가와 한 손으로 등 뒤의 책장을 짚는다. 걸치고 있던 재킷을 한쪽 어깨 아래로 스르르 흘려 내리고 다른 손으로 안쪽 상의의 목깃까지 깊숙이 끌어내린다. 드러난 하얀 맨어깨와 짙은 타투 사이로 타오르는 듯한 붉은 눈이 내 눈높이에 그대로 맞닿아 있다. 책상 위 액정에는 서연이 보낸 '공원 벤치에 와 있어.'라는 알림이 사라지지 않고 떠 있다.* 오늘은 천 한 장도 사이에 두고 싶지 않아. 하루 종일, 너랑만.

---

### `wall_seo_skip`
- 배경: `room_my.png`
- 다음: `day4_night_reflect`

- 캐릭터: `없음`
**{name}**: *서연과의 채팅방은 밤이 깊도록 고요하다. 끝내 전화는 걸려 오지 않는다.*

---

### `wall_dain_1`
- 배경: `room_my.png`
- BGM: `night2.mp3`
- 호감분기: Dain
  - [60+] → `wall_dain_pre_high_1`
  - [0+] → `wall_dain_pre_low_1`
  - [-19 이상] → `wall_dain_skip`
  - [기본] → `wall_dain_skip`

- 캐릭터: `없음`
**{name}**: *밤 10시 정각. 정적을 깨고 다인에게서 짧은 메시지가 연달아 도착한다.*

---

### `wall_dain_pre_high_1`
- 배경: `room_my.png`
- 다음: `wall_dain_pre_high_2`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 있잖아, 오늘 밤은 배구나 운동 얘기 말고 내 진짜 속마음 얘기해도 돼?

---

### `wall_dain_pre_high_2`
- 다음: `wall_dain_3`

<!-- i18n -->

---

### `wall_dain_pre_low_1`
- 다음: `wall_dain_pre_low_2`

<!-- i18n -->

---

### `wall_dain_pre_low_2`
- 배경: `room_my.png`
- 다음: `wall_dain_2`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 하하, 아까 낮에 우리 진짜 재밌었지!

---

### `wall_dain_2`
- 배경: `room_my.png`
- 다음: `wall_dain_2_b`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 야, 혹시 지금 집에서 나올 수 있어?

---

### `wall_dain_2_b`
- 배경: `room_my.png`
- 다음: `wall_dain_3`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 이 시간에 학교까지 와 달라고 하면 역시 무리겠지?

---

### `wall_dain_3`
- 배경: `room_my.png`
- 다음: `wall_dain_rival_rank`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 안 바쁘면 그냥 지금 와 줘. 체육관 뒷문 너 들어오게 살짝 열어 놨어.

---

### `wall_dain_rival_rank`
- 배경: `school_back.png`
- 실시간 라이벌 분기:
  - [`Seoyeon`] → `wall_dain_seo_tempt_1`
  - [`Yuna`] → `wall_dain_glimpse_1`
  - [기준 미달] → `wall_dain_4`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `wall_dain_glimpse_1`
- 배경: `school_back.png`
- 다음: `wall_dain_glimpse_2`

- 캐릭터: `없음`
**{name}**: *밤 10시, 다인이 기다리는 체육관 뒷문으로 향하던 길. 어둠에 잠긴 도서관 별관 구석 창문 한 칸에만 노란 불빛이 남아 있다.*

---

### `wall_dain_glimpse_2`
- 배경: `yuna_hideout.png`
- 다음: `wall_dain_glimpse_4_b`

- 캐릭터: `yuna_sad.png`
**{name}**: *창가 자리에 앉은 유나는 펼쳐진 책을 앞에 둔 채 어두운 창밖만 바라보고 있다. 책장은 한 페이지도 넘어가지 않는다. 창에 비친 나를 발견하자 자리에서 조금 일어났다가 멈춘다. 눈은 끝내 내게서 떼지 않는다.*

---

### `wall_dain_glimpse_4_b`
- 배경: `school_back.png`
- 다음: `wall_dain_glimpse_4_c`

- 캐릭터: `yuna_sad.png` @ 0.35
**{name}**: *밤 10시 정각. 유나에게서 메시지가 도착한다. 액정 바로 아랫줄에는 다인이 보낸 '체육관 뒷문 열어놨어.'라는 알림이 나란히 떠 있다.*

---

### `wall_dain_glimpse_4_c`
- 배경: `school_back.png`
- 선택지:
  1. "다인에게 답장하고 체육관으로 간다" → `wall_dain_4` | Dain +5, Yuna -6 | 플래그: `day4_held_route_dain`
  2. "학교 후문으로 돌아가 유나 곁에 남는다" → `wall_dain_glimpse_4` | Yuna +8, Dain -10 | 플래그: `day4_took_yuna_counteroffer`, `day4_counteroffer_penalty_deferred`
  3. "약속한 사람을 만나면서 다른 쪽도 계속 챙기면 되겠다" → `wall_dain_4` | Dain -8, Yuna -8 | 플래그: `day4_held_route_dain`
  4. "먼저 한 약속은 지키고 다른 쪽엔 좋은 핑계를 대자" → `wall_dain_4` | Dain -5, Yuna -10 | 플래그: `day4_held_route_dain`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 예전에 나를 유일하게 봐주던 사람이 말 한마디 없이 사라졌어. 오늘 밤 또 혼자 남겨지면 그날의 어둠 속으로 돌아갈 것 같아. 낮에 다인이랑 있었어도 상관없으니까 지금은 내 옆으로 와 줘.

---

### `wall_dain_glimpse_4`
- 배경: `event_temptation_yuna.png`
- 다음: `day4_temptation_yuna_freetalk`

- 캐릭터: `없음`
**유나**: *유나는 내 바로 앞까지 다가와 한 손으로 등 뒤의 책장을 짚는다. 걸치고 있던 재킷을 한쪽 어깨 아래로 스르르 흘려 내리고 다른 손으로 안쪽 상의의 목깃까지 깊숙이 끌어내린다. 드러난 하얀 맨어깨와 타투 사이로 타오르는 듯한 붉은 눈이 내 눈높이에 그대로 맞닿아 있다. 휴대폰 화면 위에는 다인이 보낸 '체육관 뒷문 열어놨어.'라는 알림이 사라지지 않고 떠 있다.* 오늘은 천 한 장도 사이에 두고 싶지 않아. 하루 종일, 너랑만.

---

### `day4_temptation_yuna_freetalk`
- 배경: `event_temptation_yuna.png`
- 타입: `free_talk`
- 다음: `day4_temptation_return_home`
- 컨텍스트: "4일차 밤, 주인공이 유나의 제안을 수락해 별관 독서실에 둘만 남았다. 바로 전 유나가 한 손으로 책장을 짚고 재킷을 흘린 뒤 상의 목깃을 끌어내려 맨어깨와 가슴 쪽을 드러낸 채 바로 앞에 서서 천 한 장도 사이에 두고 싶지 않다고 했다. 그 거리는 아직 그대로다. 이 장면에서 유나는 말은 짧게 두고 거리와 옷을 먼저 지운다. 지금 주고받는 말과 행동에 따라 호감이 더 깊어지거나 상할 수 있다."
- 성격: "말은 짧게. 먼저 옷을 벗는다. 또 혼자 남을까 봐, 다른 쪽에 뺏기기 전에 더 가까이 안긴다. 그 접촉을 부정하지 않는다."

- 캐릭터: `없음`
**유나**: *상의 목깃을 깊숙이 끌어내린 손을 거두지 않은 채 붉은 눈으로 내 입술을 응시한다.* 오늘은 천 한 장도 사이에 두고 싶지 않아.

---

### `wall_dain_seo_tempt_1`
- 배경: `school_back.png`
- 다음: `wall_dain_seo_tempt_2`

- 캐릭터: `seyoun_pout.png`
**{name}**: *다인이 기다리는 체육관으로 향하는데 옥상 계단 입구 앞에 서연이 홀로 서 있다. 나를 발견하자 웃어 보이려다 입술을 꾹 누른다. 소매를 쥔 손끝이 떨린다. 먼저 말을 걸려는지 입을 열지만 곧장 목소리가 나오지는 않는다.*

---

### `wall_dain_seo_tempt_2`
- 배경: `school_back.png`
- 선택지:
  1. "다인에게 답장하고 체육관으로 간다" → `wall_dain_4` | Dain +5, Seoyeon -6 | 플래그: `day4_held_route_dain`
  2. "서연을 따라 옥상에 올라가 손을 잡는다" → `wall_dain_seo_tempt_accept` | Seoyeon +8, Dain -10 | 플래그: `day4_took_seoyeon_counteroffer`, `day4_counteroffer_penalty_deferred`
  3. "약속한 사람을 만나면서 다른 쪽도 계속 챙기면 되겠다" → `wall_dain_4` | Dain -8, Seoyeon -8 | 플래그: `day4_held_route_dain`
  4. "먼저 한 약속은 지키고 다른 쪽엔 좋은 핑계를 대자" → `wall_dain_4` | Dain -5, Seoyeon -10 | 플래그: `day4_held_route_dain`

- 캐릭터: `seyoun_sad.png`
**서연**: 지금 이대로 집에 들어가면 또 거울 앞에서 웃는 얼굴부터 맞춰야 해. 딱 오늘 밤만 완벽한 학생회장 말고 그냥 네 앞의 서연이로 숨 쉬게 해 줘. 나 따라 옥상에 올라오면, 오늘 밤 네 손 절대 안 놓을게.

---

### `wall_dain_4`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_5`

- 캐릭터: `dain_laugh.png`
**{name}**: *초록빛 비상등만 희미하게 켜진 밤의 체육관. 다인이 텅 빈 코트 한가운데 서서 홀로 배구공을 바닥에 튕기고 있다. 나를 보고 애써 입꼬리는 올리지만 양어깨가 잔뜩 굳어 있다.*

---

### `wall_dain_5`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_6`

- 캐릭터: `dain_laugh.png`
**다인**: 진짜로 와 줬네? 생각보다 늦었잖아.

---

### `wall_dain_6`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_7`

- 캐릭터: `dain_laugh.png`
**{name}**: 이 늦은 밤에 집에도 안 가고 체육관엔 왜 혼자 남아 있어?

---

### `wall_dain_7`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_7_b`

- 캐릭터: `dain_laugh.png`
**다인**: 가끔 밤에 잠 안 올 때 경비 아저씨 몰래 들어와. 옛날처럼 혼자 연습해 보려고.

---

### `wall_dain_7_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_8`

- 캐릭터: `dain_laugh.png`
**다인**: *다인이 양손으로 잡고 있던 배구공을 내 가슴 쪽으로 툭 건넨다.*

---

### `wall_dain_8`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_8_b`

- 캐릭터: `dain_laugh.png`
**다인**: 네가 토스 한 번만 높게 올려 줘. 딱 한 번만 제대로 뛰어 보고 싶어.

---

### `wall_dain_8_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_9`

- 캐릭터: `dain_pain.png`
**{name}**: 다인아, 잠깐만! 나 아직 공도 안 던졌는데! *내가 공을 허리춤에 쥔 채 말릴 새도 없이, 도움닫기를 하려 내디딘 다인의 오른쪽 무릎이 힘없이 꺾이며 그대로 마룻바닥 위에 주저앉는다.*

---

### `wall_dain_9`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_10`

- 캐릭터: `dain_sad.png`
**{name}**: *내 손에서 떨어진 배구공이 적막한 체육관 바닥을 통통 구르며 멀어진다.*

---

### `wall_dain_10`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_11`

- 캐릭터: `dain_sad.png`
**다인**: 아, 놀라지 마. 괜찮아. 방금 스텝 밟다가 잠깐 삐끗한 거야. 진짜 별거 아...

---

### `wall_dain_11`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_12`

- 캐릭터: `dain_pain.png`
**{name}**: *말끝을 잇지 못하고 오른쪽 무릎 보호대를 움켜쥔 다인의 손가락 마디가 핏기 하나 없이 하얗게 질려 있다.*

---

### `wall_dain_12`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_12_b`

- 캐릭터: `dain_sad.png`
**{name}**: 다인아, 내 눈 똑바로 봐. 지금 조금도 괜찮지 않잖아.

---

### `wall_dain_12_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_12_c`

- 캐릭터: `dain_sad.png`
**다인**: 아니야, 나 진짜 괜찮다니까.

---

### `wall_dain_12_c`
- 배경: `gym.png`
- 배경톤: `lights-off`
- SFX: `synth:volleyball`
- 다음: `wall_dain_13`

- 캐릭터: `dain_pain.png`
**{name}**: *구석까지 굴러간 배구공이 벽면에 부딪혀 둔탁한 울림을 남기고 멈춘다.*

---

### `wall_dain_13`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_14`

- 캐릭터: `dain_sad.png`
**{name}**: *다그치는 대신 마룻바닥에 주저앉은 다인의 바로 옆에 무릎을 꿇고 나란히 앉는다. 다인이 마침내 입술을 깨물고 침묵하자 비상등의 나직한 웅웅거림만이 두 사람을 감싼다.*

---

### `wall_dain_14`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_14_b`

- 캐릭터: `dain_sad.png`
**다인**: 오른쪽 무릎 전방 십자인대 파열이래.

---

### `wall_dain_14_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_15`

- 캐릭터: `dain_sad.png`
**다인**: *다인은 저만치 굴러간 배구공 쪽으로 차마 고개를 돌리지 못한다.*

---

### `wall_dain_15`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_16`

- 캐릭터: `dain_sad.png`
**다인**: 작년 여름 전국 대회 예선 마지막 세트에서 다쳤어.

---

### `wall_dain_16`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_16_b`

- 캐릭터: `dain_sad.png`
**다인**: *늘 억지로 끌어올리던 입꼬리가 스르르 무너져 내리고 다인의 흔들리는 시선이 코트 바닥의 하얀 라인 위에 박힌다.*

---

### `wall_dain_16_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_17`

- 캐릭터: `dain_sad.png`
**다인**: 인대 재건 수술은 무사히 끝났는데 담당 의사 선생님이 내 차트를 덮으면서 되게 조심스럽게 말하더라.

---

### `wall_dain_17`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_18`

- 캐릭터: `dain_sad.png`
**다인**: 진료실 종이 위에 볼펜으로 긴 선을 하나 그어 주셨어. '일상생활'은 여기까지 가능하지만 '배구 선수'는 이 선 너머라서 다시 점프하면 무릎이 영영 망가진대. 그 뒤에 하신 말씀은 귀가 먹먹해서 기억도 안 나.

---

### `wall_dain_18`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_18_b`

- 캐릭터: `dain_sad.png`
**다인**: 병원 복도를 나오는데 엄마가 내 손을 잡고 소리 내서 울고 있었어. 정작 나는 눈물 한 방울도 안 나더라. 내 배구가 끝났다는 게 도무지 실감이 안 났으니까.

---

### `wall_dain_18_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_18_c`

- 캐릭터: `dain_sad.png`
**다인**: 진짜로 숨이 턱 막히도록 실감 난 건, 체육관 내 사물함에서 무릎 보호대랑 유니폼을 내 손으로 뺄 때였어.

---

### `wall_dain_18_c`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_18_d`

- 캐릭터: `dain_sad.png`
**{name}**: 그런데 지금도 이렇게 무릎이 아프잖아. 다시 통증이 시작됐다는 건 부모님이나 코치님한테 말씀드렸어? 지금까지 혼자만 감추고 버틴 거야? *머리 위 비상등이 가늘게 한 번 깜빡이고 다인의 손톱이 마룻바닥의 나뭇결을 긁는다.*

---

### `wall_dain_18_d`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_19`

- 캐릭터: `dain_sad.png`
**다인**: *다인이 보호대 끈을 엄지로 세게 문지르며 잠긴 목소리로 말을 잇는다.* 겁이 나서 그랬어.

---

### `wall_dain_19`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_19_b`

- 캐릭터: `dain_sad.png`
**다인**: 그래서 사람들 앞에서는 완전히 재활이 끝난 척했어. 무릎이 다시 붓고 아프기 시작한 것도 아무한테도 말 못 했어. 엄마 아빠한테도. '우리 다인이가 코트에서 안 뛰면 다인이가 아니지!'라는 그 말을 듣는 게 죽기보다 무서웠거든.

---

### `wall_dain_19_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_20`

- 캐릭터: `dain_sad.png`
**다인**: *다인이 자기 유니폼 앞자락을 두 손으로 구겨지도록 꽉 움켜쥔다.*

---

### `wall_dain_20`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_20_b`

- 캐릭터: `dain_sad.png`
**다인**: 학교 애들이 나보고 '다인이는 늘 에너지 넘치네!' 하고 웃을 때마다 명치끝부터 숨이 턱턱 막혔어.

---

### `wall_dain_20_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_21`

- 캐릭터: `dain_sad.png`
**다인**: 아무리 크게 숨을 들이마셔도 폐 끝까지 공기가 안 들어오는 기분이었어.

---

### `wall_dain_21`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_22`

- 캐릭터: `dain_sad.png`
**다인**: 오늘 낮에도 그랬어. 너랑 데이트하면서 나란히 걷는 것도 아팠는데 네 앞에서는 죽어도 약한 모습 보이기 싫어서 계속 괜찮은 척 웃었어.

---

### `wall_dain_22`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_22_b`

- 캐릭터: `dain_sad.png`
**다인**: 배구도 못 하게 된 내가 네 앞에서까지 아파서 우는 모습 보이면, 진짜로 나한테 남는 게 하나도 없잖아.

---

### `wall_dain_22_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_choice`

- 캐릭터: `dain_sad.png`
**{name}**: *나는 코트 선 바깥 바닥에 주저앉은 다인의 옆으로 바짝 다가가 다인의 차가운 어깨를 감싸 안는다. 바닥을 구르던 배구공이 우리 두 사람의 운동화 끝에서 조용히 멎는다.*

---

### `wall_dain_choice`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 선택지:
  1. "아무 말 안 할게. 그냥 여기 있을게." → `wall_dain_newdream_1` | Dain +2
  2. "울어도 돼. 밝은 척 안 해도 돼. 나한테는." → `wall_dain_cry_1` | Dain +5
  3. "공부터 정리하자. 내일 병원도 예약하고." → `wall_dain_lastspike_1` | Dain -4

- 캐릭터: `dain_sad.png`
**다인**: *다인이 배구공을 끌어안은 채 내 품 쪽으로 고개를 떨구고 참아 왔던 울음에 어깨가 가늘게 들썩인다.*

---

### `wall_dain_newdream_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_newdream_2_b`

- 캐릭터: `dain_sad.png`
**{name}**: *내가 말없이 다인의 등과 어깨를 쓸어 주자, 코트 바닥을 긁던 다인의 운동화 끝이 천천히 멈춘다.*

---

### `wall_dain_newdream_2_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_newdream_3`

- 캐릭터: `dain_sad.png`
**다인**: *거친 숨을 고르던 다인이 젖은 눈시울을 들어 바로 옆의 나를 바라본다.*

---

### `wall_dain_newdream_3`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_newdream_4`

- 캐릭터: `dain_sad.png`
**다인**: 너는 왜 나한테 힘내라는 말도 안 하고 가만히 있어?

---

### `wall_dain_newdream_4`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_newdream_5`

- 캐릭터: `dain_normal.png`
**{name}**: 네가 억지로 참지 않고 진짜 하고 싶은 말이 나올 때까지 옆에서 기다리려고.

---

### `wall_dain_newdream_5`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_newdream_6`

- 캐릭터: `dain_sad.png`
**다인**: 내가 하고 싶은 말이라. 네가 그렇게 기다려 주니까 이제야 조금 숨이 쉬어진다. 아직 멋있게 정리해서 말할 자신은 없는데. *다인이 무릎을 쥐고 있던 손가락을 하나씩 천천히 펴며 내 손등 위에 얹는다.*

---

### `wall_dain_newdream_6`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_newdream_7`

- 캐릭터: `dain_sad.png`
**다인**: 다섯 살 때 처음 공 잡은 뒤로 평생 배구밖에 몰랐잖아. 그래도 이제는 코트 밖에서 내가 할 수 있는 다른 길도 찾아봐도 되나 싶어.

---

### `wall_dain_newdream_7`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_newdream_8`

- 캐릭터: `dain_shy.png`
**다인**: 내가 그 길을 찾을 때까지, 지금처럼 내 옆에서 손잡아 줄래?

---

### `wall_dain_newdream_8`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_farewell_1`

- 캐릭터: `dain_shy.png`
**{name}**: *내가 고개를 끄덕이며 손을 꽉 마주 잡자, 다인이 다른 손으로 휴대폰을 켜 재활 전문 병원을 검색한다. 배구공은 코트 라인 바깥에 조용히 놓여 있다.*

---

### `wall_dain_cry_1`
- 배경: `dain_depression_event1.png`
- 다음: `wall_dain_cry_2`

- 캐릭터: `없음`
**다인**: *내 말이 끝나기가 무섭게 다인이 코트 바닥 위에 무너지듯 몸을 숙이며 배구공을 껴안고 오열하기 시작한다.*

---

### `wall_dain_cry_2`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_cry_3`

- 캐릭터: `dain_sad.png`
**다인**: 아 어떡해, 네가 그렇게 말하니까 이제 억지로 웃으려고 해도 안 되잖아. *다인이 내 품에 이마를 기댄 채 굵은 눈물을 쏟아 낸다. 뜨거운 눈물이 배구공 가죽과 내 셔츠 위로 뚝뚝 떨어지며 텅 빈 체육관을 적신다.*

---

### `wall_dain_cry_3`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_cry_4`

- 캐릭터: `dain_sad.png`
**다인**: 가족들 깨기 전에 혼자 방에서 매일 아침 부어오른 무릎에 압박 붕대를 감았어.

---

### `wall_dain_cry_4`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_cry_5`

- 캐릭터: `dain_sad.png`
**다인**: 아침 일곱 시 휴대폰 알람 제목에도 매일 똑같이 적어 놨어. '오늘도 아무 일 없는 것처럼 웃어.'

---

### `wall_dain_cry_5`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_cry_6`

- 캐릭터: `dain_sad.png`
**다인**: 그 알람 문구를 보고 거울 앞에서 입꼬리부터 올리는 연습을 했어. 하루도 안 빼놓고 매일.

---

### `wall_dain_cry_6`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_farewell_1`

- 캐릭터: `dain_sad.png`
**다인**: 이제 이 거짓말 알람은 지워 버릴래. 내일 아침엔 엄마한테 웃는 얼굴 말고 내 아픈 무릎 얘기부터 솔직하게 털어놓을 거야. *다인이 눈물 젖은 손끝으로 '오늘도 웃어' 알람을 삭제하고 '엄마한테 무릎 통증 말하기'를 새로 적어 저장한다.*

---

### `wall_dain_lastspike_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_2`

- 캐릭터: `dain_sad.png`
**{name}**: 무리해서 일어나지 말고 거기 앉아 있어. 공은 내가 정리하고 올게. *다인을 코트 가장자리에 앉혀 두고 나는 바닥의 배구공을 집어 보관함 쪽으로 걸어간다.*

---

### `wall_dain_lastspike_2`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_3`

- 캐릭터: `dain_normal.png`
**다인**: *공 보관함 쪽을 바라보던 다인이 불현듯 고개를 든다.* 잠깐만. 내 공인데 왜 네가 마음대로 다 정리하려고 해.

---

### `wall_dain_lastspike_3`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_3_b`

- 캐릭터: `dain_normal.png`
**{name}**: 미안해, 여기서 멈출게. 지금 네게 제일 필요한 게 뭔지 네가 직접 말해 줘.

---

### `wall_dain_lastspike_3_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_3_c`

- 캐릭터: `dain_sweat.png`
**다인**: *다인이 조심스럽게 무릎 보호대 벨크로를 풀었다가 관절이 조이지 않게 느슨히 고쳐 맨다.* 우선 미뤄 뒀던 병원 진료부터 다시 받아야겠지.

---

### `wall_dain_lastspike_3_c`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_4`

- 캐릭터: `dain_sweat.png`
**{name}**: 응. 이번에는 혼자 숨기지 말고 정밀 검사 결과도 끝까지 같이 듣자.

---

### `wall_dain_lastspike_4`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_4_b`

- 캐릭터: `dain_sad.png`
**다인**: 프로 무대에 갈 수 있을지는 아직 모르겠어. 그래도 아픈 무릎을 속이면서까지 억지로 뛰는 짓은 오늘로 그만할래.

---

### `wall_dain_lastspike_4_b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_5`

- 캐릭터: `dain_sad.png`
**다인**: *다인이 휴대폰 화면을 켜서 정형외과 진료 예약 창을 연다.* 다행히 월요일 오후에 바로 예약이 비어 있네.

---

### `wall_dain_lastspike_5`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_lastspike_6`

- 캐릭터: `dain_sad.png`
**다인**: 내일 아침에 일어나자마자 엄마랑 코치님한테도 현재 무릎 상태 솔직하게 말씀드릴게.

---

### `wall_dain_lastspike_6`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `wall_dain_farewell_1`

- 캐릭터: `dain_sad.png`
**다인**: 월요일에 병원 가는 날, 무서운데 네가 내 손 잡고 같이 가 줄래?

---

### `wall_dain_farewell_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 플래그: `day4_dain_wall_broken`
- 다음: `wall_dain_farewell_2`

- 캐릭터: `dain_sad.png`
**다인**: 천천히 디디면 혼자서도 일어설 수 있어. *내가 배구공을 보관함에 넣는 동안 다인이 벤치 팔걸이를 짚고 천천히 몸을 일으킨다.*

---

### `wall_dain_farewell_2`
- 배경: `school_back.png`
- 다음: `wall_dain_mention_1`

- 캐릭터: `dain_normal.png`
**{name}**: *다인의 보폭에 맞춰 체육관 문을 나선다. 고요한 밤공기가 내려앉은 학교 후문 산책로를 나란히 지나가는데 다인이 조용히 입을 연다.*

---

### `wall_dain_mention_1`
- 배경: `school_back.png`
- 다음: `wall_dain_mention_2`

- 캐릭터: `dain_sad.png`
**다인**: 있잖아, 아까 서연이가 나랑 마주쳤을 때 뭐라고 했는지 알아? 한마디도 안 하고 그냥 내 눈만 가만히 보더라.

---

### `wall_dain_mention_2`
- 배경: `school_back.png`
- 다음: `wall_dain_mention_3`

- 캐릭터: `dain_sad.png`
**다인**: 차라리 화라도 내고 따지면 속 시원하게 싸우기라도 할 텐데, 그렇게 아무 말도 안 해 버리면 내가 혼자 나쁜 사람 되는 기분이잖아.

---

### `wall_dain_mention_3`
- 배경: `school_back.png`
- 다음: `wall_dain_skin_check`

- 캐릭터: `dain_normal.png`
**다인**: 참, 내가 이런 못난 속내까지 너한테 다 털어놓네. 이제 그만 걷자. 무릎 아끼게 천천히 가도 되지? *잠시 걸음을 멈췄던 다인이 내 옆으로 바짝 붙어 서며 보폭을 나란히 맞춘다.*

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
- Framing: `intimate`
- 다음: `wall_dain_skin70_2`

- 캐릭터: `dain_shy.png`
**다인**: *후문 가로등 그늘 아래에서 걸음을 멈춘 다인이 두 팔을 살짝 벌린 채 물기 어린 눈으로 내 대답을 기다린다.*

---

### `wall_dain_skin70_2`
- 배경: `school_back.png`
- Framing: `intimate`
- 다음: `wall_dain_skin70_3`

- 캐릭터: `dain_shy.png`
**다인**: 집에 들어가기 전에, 잠깐만 네 품에 이대로 안겨 있어도 돼?

---

### `wall_dain_skin70_3`
- 배경: `school_back.png`
- Framing: `intimate`
- 플래그: `day4_skinship_dain_70`
- 다음: `wall_dain_freetalk`

- 캐릭터: `dain_shy.png`
**{name}**: *내가 말없이 다인의 허리와 등을 끌어안자마자 다인이 내 목덜미에 뜨거운 얼굴을 깊숙이 파묻는다. 얇은 셔츠 위로 다인의 뜨거운 눈물과 가쁜 심장 박동이 고스란히 전해지고 내 등을 감싸 쥔 다인의 두 팔은 한참이 지나도록 풀리지 않는다.*

---

### `wall_dain_skin60_1`
- 배경: `school_back.png`
- Framing: `intimate`
- 다음: `wall_dain_skin60_2`

- 캐릭터: `dain_shy.png`
**{name}**: *학교 후문 옆 나무 벤치에 나란히 앉는다. 다인이 내 쪽으로 몸을 기울이며 내 어깨와 허벅지 옆자리를 눈빛으로 가리킨다.*

---

### `wall_dain_skin60_2`
- 배경: `school_back.png`
- Framing: `intimate`
- 플래그: `day4_skinship_dain_60`
- 다음: `wall_dain_freetalk`

- 캐릭터: `dain_shy.png`
**다인**: 딱 오 분만 네 어깨에 기대서 체력 충전할래. 움직이지 마.

---

### `wall_dain_freetalk`
- 배경: `school_back.png`
- 타입: `free_talk`
- 다음: `day4_student_return_home`
- 컨텍스트: "4일차 밤, 다인이 무릎 부상과 멈춰 버린 꿈에 관한 속마음을 드러낸 뒤 학교 뒤편을 걷는 중이다. 주인공의 고백에 대한 수락 또는 보류 상태와 방금 있었던 위로는 확정된 사실이다. 부상이 갑자기 낫거나 진로가 이미 결정되었다고 만들지 않고 현재 관계 상태를 유지한다."
- 성격: "다인은 솔직하고 몸이 먼저 움직이는 사람답게 감정도 숨기지 않으려 한다. 지금은 평소보다 차분하지만 활기를 잃은 사람이 아니며 불안을 인정하면서도 상대와 함께 다음 말을 찾아간다."

- 캐릭터: `dain_normal.png`
**다인**: *울음을 그친 다인이 긴 숨을 내쉬며 내 곁에 나란히 보폭을 맞춘다.* 오늘 밤은 바로 안 들어가고 그냥 너랑 같이 좀 걷자. 무슨 얘기든 다 좋으니까.

---

### `wall_dain_seo_tempt_accept`
- 배경: `event_temptation_seoyeon.png`
- 다음: `day4_temptation_seoyeon_freetalk`

- 캐릭터: `없음`
**서연**: *옥상문이 닫히자 서연은 말없이 블라우스 단추를 풀고 내 손목을 잡아 제 쪽으로 끌어당긴다. 열린 옷깃 사이로 손바닥이 뜨거운 맨가슴에 닿는 순간, 서연의 두 손이 내 손등 위를 겹쳐 덮는다. 주머니 속 휴대폰 액정에 다인의 '체육관 뒷문 열어놨어.'라는 메시지가 불빛을 밝힌다.* 내 심장, 뛰는 거 느껴져?

---

### `wall_dain_skip`
- 배경: `room_my.png`
- 다음: `day4_night_reflect`

- 캐릭터: `없음`
**{name}**: *다인이 보낸 마지막 메시지는 오전 시간에 멈춰 있다. 밤이 지나도록 새 알림은 울리지 않는다.*

---

### `wall_yuna_1`
- 배경: `room_my.png`
- 배경톤: `dream`
- BGM: `night2.mp3`
- 호감분기: Yuna
  - [60+] → `wall_yuna_pre_high_1`
  - [0+] → `wall_yuna_pre_low_1`
  - [-19 이상] → `wall_yuna_skip`
  - [기본] → `wall_yuna_skip`

- 캐릭터: `없음`
**유나**: *밤 10시 정각, 어두운 방 안을 밝히며 유나의 메시지가 도착한다.* 학교 후문 앞이야. 지금 바로 와 줘.

---

### `wall_yuna_pre_high_1`
- 배경: `room_my.png`
- 배경톤: `dream`
- 다음: `wall_yuna_pre_high_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 오늘 밤은 종이 쪽지 뒤에 숨지 않고 내 입으로 직접 말할게.

---

### `wall_yuna_pre_high_2`
- 다음: `wall_yuna_rival_rank`

<!-- i18n -->

---

### `wall_yuna_pre_low_1`
- 다음: `wall_yuna_pre_low_2`

<!-- i18n -->

---

### `wall_yuna_pre_low_2`
- 다음: `wall_yuna_rival_rank`

<!-- i18n -->

---

### `wall_yuna_rival_rank`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 실시간 라이벌 분기:
  - [`Seoyeon`] → `wall_yuna_glimpse_1`
  - [`Dain`] → `wall_yuna_dain_tempt_1`
  - [기준 미달] → `wall_yuna_2`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `wall_yuna_glimpse_1`
- 배경: `school_back.png`
- 배경톤: `dream`
- 다음: `wall_yuna_glimpse_2`

- 캐릭터: `없음`
**{name}**: *밤 10시, 유나와 만나기로 한 학교 후문으로 걸어가는 길. 정문 쪽 가로등 불빛 아래에 서연이 집에 가지 않고 홀로 서 있다.*

---

### `wall_yuna_glimpse_2`
- 배경: `school_back.png`
- 배경톤: `dream`
- 다음: `wall_yuna_glimpse_3_b`

- 캐릭터: `seyoun_pout.png`
**{name}**: *서연은 휴대폰을 주머니에 넣었다 꺼내기를 반복한다. 나를 발견하자 웃어 보이려다 입술을 꾹 누른다. 소매를 쥔 손끝이 떨린다. 먼저 말을 걸려는지 입을 열지만 곧장 목소리가 나오지는 않는다.*

---

### `wall_yuna_glimpse_3_b`
- 배경: `school_back.png`
- 배경톤: `dream`
- 선택지:
  1. "유나에게 답장하고 학교 후문으로 간다" → `wall_yuna_2` | Yuna +4, Seoyeon -6 | 플래그: `day4_held_route_yuna`
  2. "서연을 따라 옥상으로 올라가 손을 잡는다" → `wall_yuna_glimpse_4` | Seoyeon +8, Yuna -10 | 플래그: `day4_took_seoyeon_counteroffer`, `day4_counteroffer_penalty_deferred`
  3. "약속한 사람을 만나면서 다른 쪽도 계속 챙기면 되겠다" → `wall_yuna_2` | Yuna -8, Seoyeon -8 | 플래그: `day4_held_route_yuna`
  4. "먼저 한 약속은 지키고 다른 쪽엔 좋은 핑계를 대자" → `wall_yuna_2` | Yuna -5, Seoyeon -10 | 플래그: `day4_held_route_yuna`

- 캐릭터: `seyoun_normal.png`
**서연**: 지금 이대로 집에 들어가면 또 거울 앞에서 웃는 얼굴부터 맞춰야 해. 딱 오늘 밤만 학생회장 말고 그냥 네 앞의 서연이로 있게 해 줘. 나 따라 옥상에 올라오면, 네 손 절대 안 놓을게.

---

### `wall_yuna_glimpse_4`
- 배경: `event_temptation_seoyeon.png`
- 다음: `day4_temptation_seoyeon_freetalk`

- 캐릭터: `없음`
**서연**: *옥상문이 닫히자 서연은 말없이 블라우스 단추를 풀고 내 손목을 잡아 제 쪽으로 끌어당긴다. 열린 옷깃 사이로 손바닥이 뜨거운 맨가슴에 닿는 순간, 서연의 두 손이 그 위를 포개어 덮는다. 바지 주머니 속에서 유나의 메시지가 한 번, 다시 한 번 애타게 울린다.* 내 심장, 뛰는 거 느껴져?

---

### `day4_temptation_seoyeon_freetalk`
- 배경: `event_temptation_seoyeon.png`
- 타입: `free_talk`
- 다음: `day4_temptation_return_home`
- 컨텍스트: "4일차 밤, 주인공이 서연의 제안을 수락해 옥상에 둘만 남았다. 바로 전 서연이 주인공의 손목을 잡아 자기 맨가슴 위에 손을 얹고 그 위를 덮으며 심장이 뛰는지 물었다. 그 손은 아직 그 자리에 있다. 이 장면에서 서연은 가슴 위 손을 덮은 채 낮은 목소리로 확인한다. 상대가 빼지 않으면 그 손을 더 이끈다. 지금 주고받는 말과 행동에 따라 호감이 더 깊어지거나 상할 수 있다."
- 성격: "차분한 말투로 가슴 위 손을 덮은 채 확인한다. 상대가 빼지 않으면 그 손을 더 이끈다. 다른 약속에 뺏길까 봐 손을 놓지 않는다. 큰 소리로 요구하거나 다른 사람이 되지 않는다. 그 접촉을 부정하지 않는다."

- 캐릭터: `없음`
**서연**: *내 손을 자기 맨가슴 위에서 조금도 놓아주지 않은 채 뜨거운 숨을 내쉰다.* 도망갈 생각 하지 마. 내 심장, 뛰는 거 느껴져?

---

### `wall_yuna_dain_tempt_1`
- 배경: `school_back.png`
- 배경톤: `lights-off`
- 다음: `wall_yuna_dain_tempt_2`

- 캐릭터: `dain_sad.png`
**{name}**: *유나가 기다리는 학교 후문으로 향하던 길. 불 꺼진 체육관 비상문 불빛 아래에 다인이 무릎 테이핑을 매만지며 홀로 서 있다. 나를 보자 손을 들고는 평소처럼 크게 부르지 못한다. 대신 내 쪽으로 한 걸음 다가와 대답을 기다린다.*

---

### `wall_yuna_dain_tempt_2`
- 배경: `school_back.png`
- 배경톤: `lights-off`
- 선택지:
  1. "유나에게 답장하고 학교 후문으로 간다" → `wall_yuna_2` | Yuna +4, Dain -6 | 플래그: `day4_held_route_yuna`
  2. "체육관으로 들어가 다인의 부탁을 받아준다" → `wall_yuna_dain_tempt_accept` | Dain +8, Yuna -10 | 플래그: `day4_took_dain_counteroffer`, `day4_counteroffer_penalty_deferred`
  3. "약속한 사람을 만나면서 다른 쪽도 계속 챙기면 되겠다" → `wall_yuna_2` | Yuna -8, Dain -8 | 플래그: `day4_held_route_yuna`
  4. "먼저 한 약속은 지키고 다른 쪽엔 좋은 핑계를 대자" → `wall_yuna_2` | Yuna -5, Dain -10 | 플래그: `day4_held_route_yuna`

- 캐릭터: `dain_sad.png`
**다인**: 걱정 마, 오늘은 무리해서 연습 안 할 거야. 그냥… 잠깐만 이리 와서 날 안아 주라. 오늘 밤은 혼자 괜찮은 척 버티기가 너무 힘들어.

---

### `wall_yuna_2`
- 배경: `school_back.png`
- 배경톤: `dream`
- 다음: `wall_yuna_3`

- 캐릭터: `yuna_normal.png`
**{name}**: *창백한 후문 가로등 불빛 아래에 유나가 서 있다. 두 손에 단편집이 펼쳐져 있지만 바람에 흔들릴 뿐 책장은 한 장도 넘어가지 않는다.*

---

### `wall_yuna_3`
- 배경: `school_back.png`
- 배경톤: `dream`
- 다음: `wall_yuna_4`

- 캐릭터: `yuna_normal.png`
**유나**: 숨소리가 들려서 네가 오는 줄 알았어. 이쪽으로 따라와, 너한테 꼭 보여줄 게 있어.

---

### `wall_yuna_4`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_6`

- 캐릭터: `yuna_normal.png`
**유나**: 별관 안쪽 자료 보관실이야. *유나가 좁고 어두운 서가 맨 구석 칸에서 손때 묻은 낡은 편지봉투 하나를 조심스럽게 꺼낸다.*

---

### `wall_yuna_6`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_7`

- 캐릭터: `yuna_normal.png`
**유나**: 이 편지, 정확히 일 년 전에 이 자리에서 받은 거야.

---

### `wall_yuna_7`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_8`

- 캐릭터: `yuna_sad.png`
**{name}**: *빛바랜 봉투 안에서 접힌 편지지가 나온다. 단정한 필체로 '유나에게. 미리 말 못 해서 미안해. 말 못 할 집안 사정이 생겨서 떠나게 됐어. 이준호.'라고 적혀 있다.*

---

### `wall_yuna_8`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_9`

- 캐릭터: `yuna_sad.png`
**{name}**: 이준호라면 누구야?

---

### `wall_yuna_9`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_9_b`

- 캐릭터: `yuna_sad.png`
**유나**: 일 년 전까지 이 자료실에 나랑 단둘이 오던 문예부 선배야. 학교에서 유일하게 내 옆에 앉아 주던 사람.

---

### `wall_yuna_9_b`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_10`

- 캐릭터: `yuna_sad.png`
**유나**: *유나가 떨리는 손끝으로 낡은 편지지를 책상 모서리에 내려놓는다.*

---

### `wall_yuna_10`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_11`

- 캐릭터: `yuna_sad.png`
**유나**: 중학교 내내 나는 교실에서 투명인간이었어. 반 애들 누구도 나한테 먼저 말을 걸지 않았거든.

---

### `wall_yuna_11`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_12`

- 캐릭터: `yuna_sad.png`
**유나**: 고등학생이 돼서도 똑같았는데 그 선배가 처음이었어. 우연히 내 노트를 보더니 '유나야, 네가 쓴 글 참 좋더라' 하고 말해 줬어. 그 한마디 덕분에 처음으로 내가 세상에 존재한다는 걸 느꼈어.

---

### `wall_yuna_12`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_13`

- 캐릭터: `yuna_sad.png`
**유나**: *평소라면 몇 번이고 말을 멈췄을 유나가 숨 한 번 고르지 않고 거기까지 단숨에 털어놓았다.*

---

### `wall_yuna_13`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_14`

- 캐릭터: `yuna_normal.png`
**유나**: 그런데 어느 날 아침에 나와 보니까 소리도 없이 전학을 가 버렸어. 얼굴 보고 작별 인사 한마디 없이, 책갈피 사이에 이 편지 한 장만 꽂아 놓고.

---

### `wall_yuna_14`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_14_b`

- 캐릭터: `yuna_sad.png`
**유나**: 내가 이 자리에 숨 쉬고 있다는 걸 알아주던 단 한 사람이 하루아침에 증발해 버린 거야. 다시는 누구도 나를 찾아오지 않을 줄 알았어.

---

### `wall_yuna_14_b`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_14_c`

- 캐릭터: `yuna_sad.png`
**유나**: 그 뒤로 일 년 동안 매일같이 혼자 이 어두운 자료실을 지켰어. 혹시라도 선배가 나중에 연락처나 쪽지라도 하나 더 남겨 놨을까 봐.

---

### `wall_yuna_14_c`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_14_d`

- 캐릭터: `yuna_normal.png`
**유나**: 아무리 책장을 다 뒤져 봐도 끝내 아무것도 없었어.

---

### `wall_yuna_14_d`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_14_e`

- 캐릭터: `yuna_normal.png`
**유나**: *유나가 젖어 드는 붉은 눈동자를 들어 어둠 속에서 나를 똑바로 올려다본다.*

---

### `wall_yuna_14_e`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_14_f`

- 캐릭터: `yuna_normal.png`
**유나**: 그러다 전학 온 첫날 네가 이 조용한 도서관 구석까지 걸어 들어왔을 때.

---

### `wall_yuna_14_f`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_14_g`

- 캐릭터: `yuna_sad.png`
**유나**: 네가 풍기는 다정한 공기가 그 선배랑 너무 닮아 있었어. 그래서 반가운 게 아니라 숨이 막힐 만큼 무서웠어.

---

### `wall_yuna_14_g`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_14_h`

- 캐릭터: `yuna_sad.png`
**유나**: 이번에도 마음 주며 친해졌다가 어느 날 갑자기 네가 사라져 버리면, 그때는 내가 진짜로 부서질 것 같아서.

---

### `wall_yuna_14_h`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_15`

- 캐릭터: `yuna_normal.png`
**{name}**: 도망치지 않고 네 옆에서 다 듣고 있어, 유나야. *낡은 봉투의 접힌 자국 위로 작은 먼지가 내려앉는다. 나는 유나의 떨리는 호흡이 가라앉기를 조용히 기다려 준다.*

---

### `wall_yuna_15`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_16`

- 캐릭터: `yuna_shy.png`
**유나**: *유나의 시선이 일 년 전 편지 날짜에 깊게 박힌다.* 그래서 처음엔 너한테 일부러 더 차갑게 굴었어. 정들기 전에 내가 먼저 밀어내면 혼자 남아도 덜 아플 줄 알았으니까.

---

### `wall_yuna_16`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_16_b`

- 캐릭터: `yuna_sad.png`
**유나**: 그런데 너는 내가 밀어내도 매일같이 다시 찾아왔어. 재촉하지도 않고 내 느린 말이 나올 때까지 옆자리를 지켜 줬고.

---

### `wall_yuna_16_b`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_choice`

- 캐릭터: `yuna_sad.png`
**유나**: 내일도 네가 올까 봐 기다리는 시간조차 무서웠는데 솔직히 말하면 네 발소리가 들리기를 매일 밤 바랐어. *머리 위 형광등이 가늘게 한 번 떨리고 유나가 하얀 아랫입술 안쪽을 잘게 깨물었다 놓는다.*

---

### `wall_yuna_choice`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 선택지:
  1. "그 사람 대신은 못 해. 그래도 지금은 여기 있어." → `wall_yuna_moved_1` | Yuna +4
  2. "지금은 네 말을 듣고 있어." → `wall_yuna_sub_1` | Yuna +2
  3. "...그래서 나한테 접근한 거야? 선배 대신?" → `wall_yuna_reject_1` | Yuna -10

- 캐릭터: `yuna_sad.png`
**유나**: 이런 내 마음 다 듣고 나니까 네 생각은 어때. *유나의 창백한 손안에서 낡은 편지 봉투 모서리가 힘없이 구겨진다.*

---

### `wall_yuna_moved_1`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_moved_2`

- 캐릭터: `yuna_normal.png`
**유나**: 부정하진 않을게. 맨 처음엔 네가 그 선배와 분위기가 닮아서 나도 모르게 눈이 갔을지도 몰라.

---

### `wall_yuna_moved_2`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_moved_3`

- 캐릭터: `yuna_normal.png`
**유나**: 하지만 지금은 아니야. 네가 누군가의 빈자리를 채우는 대용품 따위였던 적은 단 한 순간도 없어.

---

### `wall_yuna_moved_3`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- Framing: `intimate`
- 다음: `wall_yuna_moved_4`

- 캐릭터: `yuna_shy.png`
**{name}**: 그럼 지금 네 눈앞에서는, 그 선배 말고 누구를 보고 있는 거야? 네 입으로 직접 말해 줘. *유나가 낡은 편지에서 미련 없이 손을 떼고 한 걸음 다가와 나와 시선을 똑바로 맞춘다.*

---

### `wall_yuna_moved_4`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_moved_5`

- 캐릭터: `yuna_shy.png`
**유나**: 지금 내 눈에는 오직 너만 보여. 다른 누구도 아닌 너를 보고 있어.

---

### `wall_yuna_moved_5`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 플래그: `day4_yuna_wall_broken`
- 다음: `wall_yuna_moved_5_b`

- 캐릭터: `yuna_shy.png`
**유나**: 이 낡은 편지는 이제 서랍 맨 밑에 넣어 둘게. 앞으로는 다시 꺼내 읽지 않아도 되니까. *유나가 구겨졌던 봉투 모서리를 반듯하게 펴서 서가 안쪽에 밀어 넣는다.*

---

### `wall_yuna_moved_5_b`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- Framing: `intimate`
- 다음: `wall_yuna_skin_check`

- 캐릭터: `yuna_shy.png`
**유나**: *자신의 옷소매를 쥐고 있던 손을 풀고 유나가 좁은 서가와 나 사이에 남아 있던 마지막 한 걸음의 거리를 완전히 지우며 다가선다.*

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
- Framing: `intimate`
- 다음: `wall_yuna_skin70_2`

- 캐릭터: `yuna_shy.png`
**유나**: 더 가까이 붙어서 네 손 잡아도 돼?

---

### `wall_yuna_skin70_2`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- Framing: `intimate`
- 다음: `wall_yuna_skin70_3`

- 캐릭터: `yuna_shy.png`
**{name}**: *내가 고개를 끄덕이자마자 유나가 내 가슴팍에 자기 어깨와 뺨을 깊숙이 기대며 내 손가락 사이로 뜨거운 손가락을 얽어 온다.*

---

### `wall_yuna_skin70_3`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- Framing: `intimate`
- 플래그: `day4_skinship_yuna_70`
- 다음: `wall_yuna_freetalk`

- 캐릭터: `yuna_shy.png`
**{name}**: *어두운 서가 사이, 깍지 낀 유나의 손바닥에서 믿을 수 없을 만큼 뜨거운 열기와 맥박이 전해진다. 내 쇄골 아래로 유나의 가쁜 숨결이 스며들고 우리는 누가 먼저랄 것도 없이 서로의 온기를 더 깊숙이 끌어안는다.*

---

### `wall_yuna_skin60_1`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- Framing: `intimate`
- 다음: `wall_yuna_skin60_2`

- 캐릭터: `yuna_shy.png`
**{name}**: *고요한 자료 보관실 서가 사이. 유나가 내 등 뒤 반 걸음 거리까지 다가와 멈춰 선다.*

---

### `wall_yuna_skin60_2`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- Framing: `intimate`
- 플래그: `day4_skinship_yuna_60`
- 다음: `wall_yuna_freetalk`

- 캐릭터: `yuna_shy.png`
**유나**: 네 넓은 등에 내 이마 잠깐만 대고 있어도 돼? 네 숨소리만 느껴지면 안심될 것 같아.

---

### `wall_yuna_sub_1`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_sub_2`

- 캐릭터: `yuna_sad.png`
**유나**: 맞아. 애초에 지나간 사람과 지금 내 옆에 있는 너를 겹쳐 보면 안 되는 거였어.

---

### `wall_yuna_sub_2`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 플래그: `day4_yuna_wall_broken`
- 다음: `wall_yuna_freetalk`

- 캐릭터: `yuna_smile.png`
**유나**: 고마워. 이 편지는 이제 다시 봉투에 넣어 둘게. *유나가 옅게 한쪽 입꼬리를 올리며 편지를 봉투 안으로 깊숙이 밀어 넣는다.*

---

### `wall_yuna_reject_1`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_reject_1_b`

- 캐릭터: `yuna_sad.png`
**유나**: 내가 용기 내서 꺼낸 고백이 너한테는 그렇게밖에 안 들렸어?

---

### `wall_yuna_reject_1_b`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_reject_2`

- 캐릭터: `yuna_sad.png`
**유나**: *유나가 차갑게 식은 손으로 내려놓았던 편지를 다시 집어 든다.*

---

### `wall_yuna_reject_2`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_reject_3`

- 캐릭터: `yuna_sad.png`
**유나**: 그래. 네 눈에는 그렇게 보였을 수도 있겠네.

---

### `wall_yuna_reject_3`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 다음: `wall_yuna_freetalk`

- 캐릭터: `yuna_sad.png`
**유나**: 오늘은 내가 먼저 돌아갈게. *유나가 바닥에 떨어진 책갈피를 주워 가방에 넣고 문 앞에서 싸늘하게 발걸음을 멈춘다.*

---

### `wall_yuna_freetalk`
- 배경: `yuna_hideout.png`
- 배경톤: `dream`
- 타입: `free_talk`
- 다음: `day4_student_return_home`
- 컨텍스트: "4일차 밤, 별관 독서실. 유나는 이준호 선배의 편지를 읽고 지금의 주인공을 떠난 선배의 대체로 붙잡고 있는 것은 아닌지 두려움을 털어놓았다. 두 사람이 방금 한 선택과 고백의 수락·보류 상태를 유지한다. 유나 자신이 누군가의 대체라는 이야기로 뒤집지 않는다. 편지는 접어 책에 넣었고 둘은 아직 함께 있다."
- 성격: "유나는 조용하고 생각이 깊지만 이제 중요한 질문을 피하지 않는다. 비유 뒤에 숨기보다 필요한 순간에는 직접 말하며 상대의 대답을 자기 두려움에 맞춰 왜곡하지 않고 끝까지 듣는다."

- 캐릭터: `yuna_normal.png`
**유나**: *독서실 책상 앞으로 돌아온 유나가 낡은 편지를 접어 책갈피 깊숙이 밀어 넣는다. 이번에는 피하지 않고 먼저 내 눈을 똑바로 맞춘다.* 아직 너한테 더 듣고 싶은 말이 남아 있어.

---

### `day4_student_return_home`
- 배경: `room_my.png`
- 다음: `day4_hidden_msg_branch`

- 캐릭터: `없음`
**{name}**: *밤의 만남을 마치고 여운이 가시지 않은 걸음으로 집으로 돌아온다. 현관문이 닫히자 고요한 방 안에는 휴대폰 액정 불빛만이 은은하게 남는다.*

---

### `wall_yuna_dain_tempt_accept`
- 배경: `event_temptation_dain.png`
- 다음: `day4_temptation_dain_freetalk`

- 캐릭터: `없음`
**다인**: *손에서 놓친 마지막 공이 어두운 마룻바닥을 굴러간다. 다인은 거친 숨을 고르며 유니폼 앞자락을 틀어쥐고 아래로 팽팽하게 당긴다. 그대로 내 바로 앞까지 몸을 깊이 숙이자 땀에 젖은 뜨거운 숨결이 코앞에 닿는다. 유나의 이름이 휴대폰 화면 위에 연달아 떠오른다.* 다른 데 보지 말고 유니폼 안으로 손 넣어 봐. 가슴 사이 땀, 네 손가락으로 느껴 보고 싶지 않아?

---

### `day4_temptation_dain_freetalk`
- 배경: `event_temptation_dain.png`
- 타입: `free_talk`
- 다음: `day4_temptation_return_home`
- 컨텍스트: "4일차 밤, 주인공이 다인의 제안을 수락해 체육관에 둘만 남았다. 바로 전 다인이 유니폼 앞자락을 아래로 당긴 채 바로 앞까지 몸을 숙이며 유니폼 안으로 손을 넣어 가슴 사이 땀을 느껴 보라고 했다. 그 거리는 아직 그대로다. 이 장면에서 다인은 장난처럼 손을 유니폼 안으로 넣게 한다. 반응이 오면 더 대놓고 간다. 지금 주고받는 말과 행동에 따라 호감이 더 깊어지거나 상할 수 있다."
- 성격: "장난처럼 솔직하게 손을 유니폼 안으로 넣게 한다. 가슴 사이에 다른 것도 넣어보고 싶지 않냐고 물어보며 유혹한다. 반응이 오면 더 대놓고 간다. 다른 쪽 약속에 뺏기기 싫다는 말은 숨기지 않는다. 아픈 무릎을 무시하지 않는다. 그 접촉을 부정하지 않는다."

- 캐릭터: `없음`
**다인**: *땀에 젖은 유니폼 앞자락을 아래로 당긴 채 내 코앞에서 뜨거운 숨결을 훅 불어 넣는다.* 유니폼 안으로 손 넣어 봐. 가슴 사이 땀, 느껴 보고 싶지 않아?

---

### `day4_temptation_return_home`
- 배경: `room_my.png`
- 다음: `day4_adult_night_regret_target_branch`

- 캐릭터: `없음`
**{name}**: *온몸에 밴 뜨거운 열기와 숨결을 채 식히지 못한 채 집으로 돌아온다.*

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
**담임선생님**: *뒤늦게 집에 돌아와 휴대폰 화면을 켠다. 기다리고 있었을 담임선생님의 메시지에 변명을 적으려다 차마 자판을 누르지 못하고 손이 멎는다.* 집에 도착하면 바로 알려 달라고 했는데 무슨 일 생겼니?

---

### `day4_adult_night_regret_nurse`
- 배경: `room_my.png`
- 다음: `day4_hidden_msg_branch`

- 캐릭터: `nurse_worried.png` @ 0.35
**보건선생님**: *뒤늦게 집에 돌아와 휴대폰 화면을 켠다. 아무 일 없었다고 답장을 치려던 손끝이 보건선생님의 메시지 앞에서 무겁게 멈춘다.* 아까 헤어질 때 표정이 좀 걸렸는데 집에는 무사히 들어갔어?

---

### `day4_night_regret`
- 배경: `room_my.png`
- 다음: `day4_night_regret_msg_branch`

- 캐릭터: `없음`
**{name}**: *늦은 밤 방 안으로 돌아와 침대에 걸터앉았지만 메신저 입력창의 변명은 끝내 한 줄도 완성되지 않는다.*

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
**서연**: 공원 벤치에서 꽤 오래 기다렸어. 바람이 차서 오늘은 이만 먼저 들어갈게.

---

### `day4_night_regret_msg_dain`
- 배경: `room_my.png`
- 다음: `day4_night_regret_reply`

- 캐릭터: `dain_normal.png` @ 0.35
**다인**: 체육관 뒷문에서 아직 기다리고 있어. 오늘 못 오는 거면 차라리 못 온다고 말이라도 해 줘.

---

### `day4_night_regret_msg_yuna`
- 배경: `room_my.png`
- 다음: `day4_night_regret_reply`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: 오늘 밤에는 네가 꼭 와 줄 거라고 믿었어. 이만 먼저 갈게.

---

### `day4_night_regret_msg`
- 배경: `room_my.png`
- 다음: `day4_night_regret_reply`

- 캐릭터: `없음`
**{name}**: *어두운 방 안에서 휴대폰 액정이 차갑게 켜진다. 원망조차 삼킨 한 줄짜리 메시지 아래로 뒤늦은 확인 표시만 남는다.*

---

### `day4_night_regret_reply`
- 배경: `room_my.png`
- 다음: `day4_hidden_msg_branch`

- 캐릭터: `없음`
**{name}**: *몇 번이고 자판을 쳤다가 지우기를 반복한 끝에 입력창은 다시 하얗게 비워진다.*

---

### `wall_yuna_skip`
- 배경: `room_my.png`
- 다음: `day4_night_reflect`

- 캐릭터: `없음`
**{name}**: *유나에게서는 밤새 쪽지도 메시지도 오지 않는다. 가만히 바라보던 휴대폰 화면만 어둡게 꺼진다.*

---

### `day4_night_reflect`
- 배경: `room_my.png`
- 다음: `day4_hidden_msg_branch`

- 캐릭터: `없음`
**{name}**: *침대에 누워 오늘 하루 동안 주고받은 메시지들을 시간순으로 천천히 되짚어 본다. 자정이 지나면 곧 일요일 학교 행사가 시작된다.*

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
**담임선생님**: *학교 학습 포털 공지 알림* 문예부 합평회용 수정 원고 파일을 게시판에 올렸어. 종이로 읽을 부원은 내일 아침 교무실로 와서 인쇄본을 받아 가렴.

---

### `night_homeroom_msg_2`
- 배경: `room_my.png`
- 다음: `night_homeroom_msg_3`

- 캐릭터: `teacher_normal.png` @ 0.35
**담임선생님**: *학교 학습 포털 공지 알림* 추가 감상을 남기고 싶은 사람은 다음 문예부 시간에 편하게 이야기해 줘. 늦은 시간이니 개별 답장은 하지 않아도 돼.

---

### `night_homeroom_msg_3`
- 배경: `room_my.png`
- 다음: `day4_hidden_msg_after_homeroom`

- 캐릭터: `teacher_normal.png` @ 0.35
**{name}**: *밤 아홉 시 정각에 올라온 담임선생님의 공지 글 아래로 문예부 학생들의 확인 댓글이 줄지어 달려 있다. 내일 일정표 한쪽에 '합평본 확인'을 조용히 적어 둔다.*

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
**보건선생님**: *학교 건강관리 앱 알림* 주말 상담 이후 현재 컨디션 상태를 체크해 주세요.

---

### `night_nurse_msg_2`
- 배경: `room_my.png`
- 다음: `night_nurse_msg_3`

- 캐릭터: `nurse_normal.png` @ 0.35
**{name}**: *자동 발송된 안내 문구 아래로 '한결 안정됨'과 '추가 상담 희망' 두 개의 선택 버튼이 나란히 떠 있다.*

---

### `night_nurse_msg_3`
- 배경: `room_my.png`
- 다음: `night_nurse_msg_4`

- 캐릭터: `nurse_normal.png` @ 0.35
**보건선생님**: *보건실 안내 문구* 추가 면담이 필요한 학생은 내일 교내 행사 시작 전에 미리 시간을 예약하세요. 담임 교사 또는 위클래스 상담실을 함께 선택할 수 있습니다.

---

### `night_nurse_msg_4`
- 배경: `room_my.png`
- 다음: `day4_night_sleep`

- 캐릭터: `nurse_normal.png` @ 0.35
**보건선생님**: *보건실 안내 문구* 심야 시간에는 개별 답장을 보내지 않아도 됩니다. 당장 도움이 필요한 급한 상황이라면 보호자나 가까운 어른에게 먼저 연락하세요.

---

### `day4_night_sleep`
- 배경: `room_my.png`
- 다음: `day4_final`

- 캐릭터: `없음`
**{name}**: *일요일 아침 알람을 맞춰 두고 방 안의 스탠드 불을 끈다. 끝내 전송하지 못한 문장만이 어둠 속 잔상처럼 남는다.*

---

### `day4_final`
- 배경: `room_my.png`
- 다음: `morning5_start`

- 캐릭터: `없음`
**{name}**: *방 안의 시계 바늘이 자정을 넘어 다섯째 날로 향한다. 머리맡의 휴대폰 화면도 내일 아침 알람 한 줄만 남긴 채 조용히 어두워진다.*

---

### `forced_violation_day4_after_seoyeon`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day4_seoyeon_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day4_seoyeon_excuse`

**서연**: *서연이 무거운 침묵 끝에 얼음장처럼 차가운 목소리로 말한다.* 방금 네가 선 넘은 행동, 아무 일 없던 것처럼 덮을 생각 하지 마. 당분간 내 눈앞에 나타나지도 말고 연락도 하지 마.

---

### `forced_violation_day4_seoyeon_apologize`
- 다음: `forced_violation_day4_resume`

**서연**: *서연의 표정은 조금도 풀리지 않은 채 굳어 있다.* 사과는 들었어. 그렇다고 네가 한 짓이 없던 일이 되진 않아. 말한 대로 당분간 연락하지 마.

---

### `forced_violation_day4_seoyeon_excuse`
- 다음: `forced_violation_day4_resume`

**서연**: *서연이 내 말을 단칼에 끊는다.* 오해? 내가 분명히 싫다고 거절한 순간부터 오해 따위일 수 없어. 더 이상 변명하지 마.

---

### `forced_violation_day4_after_yuna`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day4_yuna_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day4_yuna_excuse`

**유나**: *유나가 한 걸음 물러서며 날 선 눈빛으로 숨을 고른다.* 내가 싫다고 했는데도 끝까지 무시했잖아. 지금은 네 얼굴조차 마주하기 싫어. 다시는 연락하지 마.

---

### `forced_violation_day4_yuna_apologize`
- 다음: `forced_violation_day4_resume`

**유나**: *기나긴 침묵 끝에 유나가 싸늘하게 답한다.* 말로 사과했다고 해서 방금 일이 지워지진 않아. 이제 그만 가.

---

### `forced_violation_day4_yuna_excuse`
- 다음: `forced_violation_day4_resume`

**유나**: *유나는 내 변명을 끝까지 듣지도 않고 고개를 돌린다.* 분명히 싫다고 말했어. 말로 포장할 수 있는 일이 아니야.

---

### `forced_violation_day4_after_dain`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day4_dain_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day4_dain_excuse`

**다인**: *다인은 평소처럼 털털하게 웃어넘기지 않는다. 한참 뒤에야 낮게 가라앉은 목소리가 돌아온다.* 이건 장난으로 못 넘겨. 내가 싫다는데도 억지로 선 넘은 거, 절대 그냥 안 넘어가.

---

### `forced_violation_day4_dain_apologize`
- 다음: `forced_violation_day4_resume`

**다인**: *다인은 한참 동안 입을 다물고 있다가 짧게 답한다.* 사과는 들었어. 오늘은 여기까지야. 다음에 다시 볼지 말지는 내가 정할게.

---

### `forced_violation_day4_dain_excuse`
- 다음: `forced_violation_day4_resume`

**다인**: *다인의 목소리가 단번에 거칠어진다.* 비겁하게 핑계 대지 마. 내가 하지 말라고 했는데도 밀어붙인 건 바로 너야.

---

### `forced_violation_day4_after_teacher`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day4_teacher_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day4_teacher_excuse`

**담임선생님**: *담임선생님이 추호의 흔들림도 없는 목소리로 말한다.* 방금 네 행동은 교사와 학생 사이의 선을 명백히 넘었어. 더는 가까이 오지 마. 이 문제는 학교 규정에 따라 공식 절차대로 처리할 거야.

---

### `forced_violation_day4_teacher_apologize`
- 다음: `forced_violation_day4_resume`

**담임선생님**: *담임선생님이 냉정하게 숨을 고르고 말한다.* 사과는 들었다. 하지만 공식적인 절차는 예정대로 진행할 거야. 더 말하지 말고 돌아가.

---

### `forced_violation_day4_teacher_excuse`
- 다음: `forced_violation_day4_resume`

**담임선생님**: *담임선생님이 단호하게 손바닥을 들어 해명을 끊는다.* 지금 변명 늘어놓을 상황이 아니야. 당장 그 자리에서 물러서.

---

### `forced_violation_day4_after_nurse`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day4_nurse_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day4_nurse_excuse`

**보건선생님**: *보건선생님의 얼굴에서 평소 같은 여유와 장난기가 완전히 사라진다.* 지금 당장 뒤로 물러서서 거리 지켜. 방금 네가 한 행동은 전부 공식 기록으로 남기고 책임자에게 알릴 거야.

---

### `forced_violation_day4_nurse_apologize`
- 다음: `forced_violation_day4_resume`

**보건선생님**: *보건선생님이 차갑게 안경을 고쳐 쓰며 답한다.* 사과는 받아 둘게. 그래도 상담 기록과 교내 보고는 원칙대로 진행할 거야. 오늘 이야기는 여기서 끝내자.

---

### `forced_violation_day4_nurse_excuse`
- 다음: `forced_violation_day4_resume`

**보건선생님**: *보건선생님의 목소리가 한층 더 서늘하게 가라앉는다.* 오해라는 말로 덮을 수 있을 것 같아? 내가 분명히 경고했는데도 무시한 거잖아.

---

### `forced_violation_day4_after_haeun`
- 선택지:
  1. "잘못을 인정하고 거리를 둔다." → `forced_violation_day4_haeun_apologize`
  2. "오해였다고 둘러댄다." → `forced_violation_day4_haeun_excuse`

**하은**: *하은이 새하얗게 질린 얼굴로 한 걸음 물러서며 학생회 팔찌를 꽉 움켜쥔다.* 더 이상 가까이 오지 마세요. 지금 당장 선생님 부를 거예요.

---

### `forced_violation_day4_haeun_apologize`
- 다음: `forced_violation_day4_resume`

**하은**: *하은은 대답조차 하지 않은 채 뒷걸음질로 교무실 쪽으로 물러나며 내가 따라오지 않는지 경계 어린 눈으로 살핀다.*

---

### `forced_violation_day4_haeun_excuse`
- 다음: `forced_violation_day4_resume`

**하은**: 절대 오해 아니에요. 제발 따라오지 마세요. *하은은 멀찍이 거리를 둔 채 급히 교무실 문을 열고 들어간다.*

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
**{name}**: *다섯째 날, 일요일 아침. 교문 너머로 축제 현수막이 아침 바람에 나부끼는 소리가 들려온다. 전학 온 뒤 숨 가쁘게 달려온 한 주의 끝자락에 발을 디딘다.*

---

### `morning5_start_branch`
- 배경: `room_school.png`
- 분기:
  - [`day4_counteroffer_penalty_deferred`] → `morning5_temptation_counteroffer_branch`
  - [`day3_caught_multiple_dates`] → `morning5_caught_fallout_1`
  - [`harem_seed`] → `morning5_harem_fallout_1`
  - [`day4_confession_accepted`] → `morning5_temptation_discovery_branch`
  - [기본] → `morning5_start_b`

- 캐릭터: `없음`

<!-- i18n -->

---

### `morning5_caught_fallout_1`
- 배경: `room_school.png`
- 다음: `morning5_caught_fallout_2`

- 캐릭터: `없음`
**{name}**: *축제 개막을 앞둔 교실 공기가 얼음장처럼 차갑다. 세 사람은 교실의 세 모서리로 멀찌감치 떨어져 앉아 있고 칠판에 붙은 역할 분담표에는 메마른 사무적인 분장만 적혀 있다.*

---

### `morning5_caught_fallout_2`
- 배경: `room_school.png`
- 다음: `morning5_caught_fallout_3`

**{name}**: *유나는 안내 책자 묶음을 가슴에 안은 채 눈길 한번 주지 않고 뒷문으로 먼저 나가 버리고 다인은 굳은 얼굴로 앞문을 향해 성큼성큼 걸어 나간다. 교탁 앞에서 출석표를 추리던 서연조차 끝내 내 쪽으로는 고개를 돌리지 않는다.*

---

### `morning5_caught_fallout_3`
- 배경: `school_hallway.png`
- 플래그: `day5_caught_fallout_seen`
- 다음: `ending_start`

- 캐릭터: `없음`
**{name}**: *오전 행사 내내 오간 것은 꼭 필요한 업무 확인뿐이었다. 담당 순서가 끝나자마자 세 사람은 약속이라도 한 듯 서로 다른 계단으로 흩어져 내려간다.*

---

### `morning5_harem_fallout_1`
- 배경: `room_school.png`
- 다음: `morning5_harem_fallout_2`

- 캐릭터: `없음`
**{name}**: *단체 대화방에는 시간대별 행사 진행 공지만 딱딱하게 올라올 뿐, 나흘 내내 불이 켜지던 개인 대화방 세 곳은 모두 거짓말처럼 고요하다.*

---

### `morning5_harem_fallout_2`
- 배경: `room_school.png`
- 다음: `morning5_harem_fallout_3`

- 캐릭터: `dain_normal.png`
**다인**: *스쳐 지나가는 복도 모퉁이에서 다인이 정색한 목소리로 낮게 못을 박는다.* 오늘 행사가 다 끝나도 누구 한 사람만 따로 불러내지 마. 우리 셋이서 정한 선이니까, 너도 지켜.

---

### `morning5_harem_fallout_3`
- 배경: `school_hallway.png`
- 플래그: `morning5_harem_fallout_seen`, `ending_harem`
- 다음: `ending_start`

- 캐릭터: `없음`
**{name}**: *입술만 달싹이다가 힘없이 고개를 끄덕인다. 나란히 어깨를 맞추어 교문을 나서는 세 사람의 뒷모습을 한참 동안 바라보다가, 한 발짝 뒤처진 그림자처럼 홀로 그 뒤를 따라나선다.*

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
  3. "좋은 말만 골라 전한다" → `morning5_caught_teacher_lie` | Teacher -45
  4. "일단 안심시키고 자세한 얘기는 나중으로 미룬다" → `morning5_caught_teacher_lie` | Teacher -55

- 캐릭터: `teacher_sad.png`
**담임선생님**: *아침 햇살이 채 데우지 못한 교실 창가. 담임선생님이 학교 앱의 빨간 미확인 표시를 내 쪽으로 돌려 보인다. 내 휴대폰 액정 너머로는 어젯밤 늦게까지 이어진 대화 흔적이 고스란히 남아 있다.* 바로 귀가한다고 했었지. 일정이 바뀌었으면 왜 확인 한 줄, 연락 한 통 없었니?

---

### `morning5_caught_teacher_honest`
- 배경: `room_school.png`
- 배경톤: `empty`
- 플래그: `day5_confessed_counteroffer`
- 다음: `morning5_counteroffer_gather`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *선생님은 내 말을 끝까지 들은 뒤 조용히 출석부를 덮는다. 작게 내쉬는 숨소리에 안도와 피로가 함께 묻어난다.* 솔직하게 말해 줘서 고맙다. 친구를 만난 걸 나무라는 게 아니야. 연락하겠다는 약속은 다음부터 꼭 지켜 줘. 원고 이야기는 여기까지만 하자.

---

### `morning5_caught_teacher_lie`
- 배경: `room_school.png`
- 배경톤: `empty`
- 플래그: `day5_lied_about_counteroffer`
- 다음: `morning5_counteroffer_gather`

- 캐릭터: `teacher_angry.png`
**담임선생님**: *선생님의 시선이 내 얼굴과 앱에 찍힌 시각 사이를 천천히 오간다.* 앞뒤가 맞지 않는구나. 지금 당장 이 자리를 모면하려고 말을 덧대지는 마. 마음이 정리되면 학교 상담 시간에 다시 이야기하자.

---

### `morning5_caught_nurse_counteroffer`
- 배경: `nurse_room.png`
- 선택지:
  1. "어젯밤 일을 그대로 말한다" → `morning5_caught_nurse_honest` | Nurse -40 | 플래그: `day5_confessed_counteroffer`, `day5_abandoned_nurse`
  2. "별일 아니었다고 둘러댄다" → `morning5_caught_nurse_lie` | Nurse -50 | 플래그: `day5_lied_about_counteroffer`, `day5_abandoned_nurse`
  3. "좋은 말만 골라 전한다" → `morning5_caught_nurse_lie` | Nurse -45
  4. "일단 안심시키고 자세한 얘기는 나중으로 미룬다" → `morning5_caught_nurse_lie` | Nurse -55

- 캐릭터: `nurse_worried.png`
**보건선생님**: *보건선생님이 휴대폰 화면에 뜬 학교 앱의 미확인 알림을 검지로 가만히 짚는다. 내 주머니 속 휴대폰에는 어젯밤 나눈 대화가 아직 지워지지 않은 채 남아 있다.* 곧장 집에 간다더니 밤늦도록 연락이 없어서 내내 신경 쓰였어. 어디에 있는지만이라도 짧게 알려 줬으면 좋았잖아.

---

### `morning5_caught_nurse_honest`
- 배경: `nurse_room.png`
- 플래그: `day5_confessed_counteroffer`
- 다음: `morning5_counteroffer_gather`

- 캐릭터: `nurse_worried.png`
**보건선생님**: *보건선생님은 내 설명을 다 듣고 나서야 열린 기록지를 덮는다.* 다친 데 없이 무사히 들어갔다니 다행이야. 다음부터는 일정이 어긋나면 꼭 먼저 알려 줘. 이제 행사 진료가 시작되니까, 긴 상담은 따로 시간을 잡아서 이어 가자. *고개를 숙여 인사하고 교실로 돌아간다.*

---

### `morning5_caught_nurse_lie`
- 배경: `nurse_room.png`
- 플래그: `day5_lied_about_counteroffer`
- 다음: `morning5_counteroffer_gather`

- 캐릭터: `nurse_angry.png`
**보건선생님**: *보건선생님이 기록지 여백 위에 쥐고 있던 볼펜을 달칵 내려놓는다.* 지금 해 준 설명은 시간표랑 맞지 않는 구석이 있네. 몸이 아플 땐 언제든 찾아와도 되지만 이 이야기는 상담 선생님과 함께 차근차근 다시 짚어 보자. *무거운 발걸음으로 교실로 돌아간다.*

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
- BGM: `stop`
- BGM fade out: `0s`
- SFX: `synth:notification`
- Ambience: `none`
- 선택지:
  1. "어젯밤 일을 그대로 말한다" → `morning5_caught_dain_honest` | Dain -40 | 플래그: `day5_confessed_counteroffer`, `day5_abandoned_dain`
  2. "별일 아니었다고 둘러댄다" → `morning5_caught_dain_lie` | Dain -50 | 플래그: `day5_lied_about_counteroffer`, `day5_abandoned_dain`
  3. "좋은 말만 골라 전한다" → `morning5_caught_dain_lie` | Dain -45
  4. "일단 안심시키고 자세한 얘기는 나중으로 미룬다" → `morning5_caught_dain_lie` | Dain -55

- 캐릭터: `dain_sad.png`
**다인**: *다인이 내 책상 옆에 바짝 다가서던 순간, 휴대폰 액정이 울리며 서연의 알림을 띄운다. '어젯밤 옥상에서 잡았던 손, 아직 기억나.' 장난기가 어려 있던 다인의 입가에서 웃음이 싹 지워진다.* ...내가 체육관에서 기다리는 동안, 너 옥상에 가 있었어?

---

### `morning5_caught_yuna_by_seoyeon`
- 배경: `room_school.png`
- 배경톤: `cold`
- BGM: `stop`
- BGM fade out: `0s`
- SFX: `synth:notification`
- Ambience: `none`
- 선택지:
  1. "어젯밤 일을 그대로 말한다" → `morning5_caught_yuna_honest` | Yuna -40 | 플래그: `day5_confessed_counteroffer`, `day5_abandoned_yuna`
  2. "별일 아니었다고 둘러댄다" → `morning5_caught_yuna_lie` | Yuna -50 | 플래그: `day5_lied_about_counteroffer`, `day5_abandoned_yuna`
  3. "좋은 말만 골라 전한다" → `morning5_caught_yuna_lie` | Yuna -45
  4. "일단 안심시키고 자세한 얘기는 나중으로 미룬다" → `morning5_caught_yuna_lie` | Yuna -55

- 캐릭터: `yuna_sad.png`
**유나**: *유나와 마주 앉은 책상 위에서 휴대폰이 낮게 울린다. 서연의 이름과 함께 떠오른 '어젯밤 옥상에서 잡았던 손, 아직 기억나'라는 문장. 유나는 그 글자들을 소리 없이 다 읽고 나서야 차갑게 가라앉은 눈을 든다.* ...내 메시지는 그대로 덮어 두고 옥상에 올라갔구나.

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
- BGM: `stop`
- BGM fade out: `0s`
- SFX: `synth:notification`
- Ambience: `none`
- 선택지:
  1. "어젯밤 일을 그대로 말한다" → `morning5_caught_seoyeon_honest` | Seoyeon -40 | 플래그: `day5_confessed_counteroffer`, `day5_abandoned_seoyeon`
  2. "별일 아니었다고 둘러댄다" → `morning5_caught_seoyeon_lie` | Seoyeon -50 | 플래그: `day5_lied_about_counteroffer`, `day5_abandoned_seoyeon`
  3. "좋은 말만 골라 전한다" → `morning5_caught_seoyeon_lie` | Seoyeon -45
  4. "일단 안심시키고 자세한 얘기는 나중으로 미룬다" → `morning5_caught_seoyeon_lie` | Seoyeon -55

- 캐릭터: `seyoun_sad.png`
**서연**: *서연과 마주 앉은 책상 위에서 짧은 진동과 함께 휴대폰 화면이 켜진다. 유나에게서 온 '어제 별관에 남아 줘서 고마워'라는 알림. 서연은 그 짧은 한 줄을 끝까지 읽고서야 숨을 삼키며 천천히 고개를 든다.* ...어제 내 메시지엔 답 한 줄 없더니, 밤늦게 별관에 가 있었던 거야?

---

### `morning5_caught_dain_by_yuna`
- 배경: `room_school.png`
- BGM: `stop`
- BGM fade out: `0s`
- SFX: `synth:notification`
- Ambience: `none`
- 선택지:
  1. "어젯밤 일을 그대로 말한다" → `morning5_caught_dain_honest` | Dain -40 | 플래그: `day5_confessed_counteroffer`, `day5_abandoned_dain`
  2. "별일 아니었다고 둘러댄다" → `morning5_caught_dain_lie` | Dain -50 | 플래그: `day5_lied_about_counteroffer`, `day5_abandoned_dain`
  3. "좋은 말만 골라 전한다" → `morning5_caught_dain_lie` | Dain -45
  4. "일단 안심시키고 자세한 얘기는 나중으로 미룬다" → `morning5_caught_dain_lie` | Dain -55

- 캐릭터: `dain_sad.png`
**다인**: *다인이 앞자리 의자를 끌어당겨 앉으려던 찰나, 책상 위 휴대폰에 유나의 알림이 떠오른다. '어제 별관에 남아 줘서 고마워.' 의자 등받이를 쥔 다인의 손등에 하얗게 힘이 들어간다.* ...내 메시지는 다 읽어 놓고선, 별관으로 발길을 돌린 거야?

---

### `morning5_caught_dain_honest`
- 배경: `room_school.png`
- 플래그: `day5_confessed_counteroffer`
- 다음: `morning5_counteroffer_gather`

- 캐릭터: `dain_sad.png`
**다인**: *다인은 손목 보호대 끝을 거칠게 잡아당겼다가 툭 놓는다. 헛웃음 섞인 숨이 떨려 나온다.* ...내가 기다린다고 메시지 보냈을 때도, 넌 이미 그 자리에 가 있었던 거네.

---

### `morning5_caught_dain_lie`
- 배경: `room_school.png`
- 플래그: `day5_lied_about_counteroffer`
- 다음: `morning5_counteroffer_gather`

- 캐릭터: `dain_angry.png`
**다인**: *다인의 눈썹이 비스듬히 치켜올라가지만 평소 같은 웃음기는 한 줌도 돌아오지 않는다.* ...야. 내가 운동만 한다고 진짜 눈치도 없는 바보인 줄 알았어?

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
- BGM: `stop`
- BGM fade out: `0s`
- SFX: `synth:notification`
- Ambience: `none`
- 선택지:
  1. "어젯밤 일을 그대로 말한다" → `morning5_caught_seoyeon_honest` | Seoyeon -40 | 플래그: `day5_confessed_counteroffer`, `day5_abandoned_seoyeon`
  2. "별일 아니었다고 둘러댄다" → `morning5_caught_seoyeon_lie` | Seoyeon -50 | 플래그: `day5_lied_about_counteroffer`, `day5_abandoned_seoyeon`
  3. "좋은 말만 골라 전한다" → `morning5_caught_seoyeon_lie` | Seoyeon -45
  4. "일단 안심시키고 자세한 얘기는 나중으로 미룬다" → `morning5_caught_seoyeon_lie` | Seoyeon -55

- 캐릭터: `seyoun_sad.png`
**서연**: *아침 교실, 서연과 마주 선 책상 위에 휴대폰을 내려놓는 순간 액정이 환하게 켜진다. 다인의 이름 아래로 '어제 체육관에서 약속한 거, 잊지 마'라는 문장이 선명하게 떠오른다. 서연의 속눈썹이 파르르 떨리며 화면 위에 멎는다.* ...어제 공원엔 발걸음도 안 하고 체육관에 가 있었던 거야?

---

### `morning5_caught_seoyeon_honest`
- 배경: `room_school.png`
- 플래그: `day5_confessed_counteroffer`
- 다음: `morning5_counteroffer_gather`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연은 입술을 꾹 깨문 채 꺼져 가는 액정으로 시선을 피한다.* ...솔직하게 털어놔 줘서 고맙다는 말까지는 도저히 안 나온다. 미안한데, 지금은 네 얼굴 마주 보기가 너무 버거워.

---

### `morning5_caught_seoyeon_lie`
- 배경: `room_school.png`
- 플래그: `day5_lied_about_counteroffer`
- 다음: `morning5_counteroffer_gather`

- 캐릭터: `seyoun_pout.png`
**서연**: *서연의 차가운 눈동자가 휴대폰 알림과 내 눈을 번갈아 찌른다.* ...어젯밤 네가 어디 있었는지보다, 지금 내 앞에서 눈 하나 안 깜빡이고 둘러대는 그 말이 더 아파.

---

### `morning5_caught_yuna_by_dain`
- 배경: `room_school.png`
- 배경톤: `cold`
- BGM: `stop`
- BGM fade out: `0s`
- SFX: `synth:notification`
- Ambience: `none`
- 선택지:
  1. "어젯밤 일을 그대로 말한다" → `morning5_caught_yuna_honest` | Yuna -40 | 플래그: `day5_confessed_counteroffer`, `day5_abandoned_yuna`
  2. "별일 아니었다고 둘러댄다" → `morning5_caught_yuna_lie` | Yuna -50 | 플래그: `day5_lied_about_counteroffer`, `day5_abandoned_yuna`
  3. "좋은 말만 골라 전한다" → `morning5_caught_yuna_lie` | Yuna -45
  4. "일단 안심시키고 자세한 얘기는 나중으로 미룬다" → `morning5_caught_yuna_lie` | Yuna -55

- 캐릭터: `yuna_sad.png`
**유나**: *유나가 무릎 위의 책을 펼치려던 순간, 유나의 대화방이 열려 있던 내 화면 위로 다인의 알림이 겹쳐 뜬다. '어제 체육관에서 약속한 거, 잊지 마.' 책 표지를 짚은 유나의 창백한 손끝이 그대로 멎는다.* ...화면엔 내 이름을 띄워 놓고 밤에는 체육관에 남았네.

---

### `morning5_caught_yuna_honest`
- 배경: `room_school.png`
- 배경톤: `cold`
- 플래그: `day5_confessed_counteroffer`
- 다음: `morning5_counteroffer_gather`

- 캐릭터: `yuna_sad.png`
**유나**: *유나는 휴대폰 전원 버튼을 눌러 화면을 완전히 꺼 버린 뒤, 내 쪽으로 조용히 밀어 놓는다.* ...모른 채 지나갔을 때보다, 네 입으로 어디에 있었는지 듣고 나니까 훨씬 더 쓰리네.

---

### `morning5_caught_yuna_lie`
- 배경: `room_school.png`
- 배경톤: `cold`
- 플래그: `day5_lied_about_counteroffer`
- 다음: `morning5_counteroffer_gather`

- 캐릭터: `yuna_angry.png`
**유나**: *유나가 검지로 화면을 다시 두드려 방금 뜬 알림을 내 눈앞에 똑바로 비춘다.* ...네 입으로 직접 말할 기회까지 줬는데 끝까지 내 눈을 가리려고 하네.

---

### `morning5_counteroffer_gather`
- 배경: `room_school.png`
- Staging: `counteroffer`
- 다음: `morning5_counteroffer_group_talk`

- 캐릭터: `없음`
**{name}**: *어젯밤 함께 남아 있던 상대에게 메시지를 보내 아침 교실에서 보자고 전하고 원래 약속했던 사람에게도 잠깐 시간을 내 달라고 부탁한다. 이윽고 두 사람이 교실 문을 열고 들어와 창가 한쪽에 나란히 멈춰 선다.*

---

### `morning5_counteroffer_group_talk`
- 배경: `room_school.png`
- 타입: `group_free_talk`
- 다음: `morning5_counteroffer_choice`

**두 사람**: *축제 안내 방송을 앞둔 어수선한 교실 한복판, 어젯밤의 선택으로 얽혀 버린 두 사람과 숨 막히는 침묵 속에 마주 선다. 연락이 끊겼던 시간과 서로에게 남긴 말들을 하나씩 짚어 내는 동안, 누구도 먼저 발을 떼지 않는다.*
"...그래서, 이제 어떻게 할 생각이야?"

---

### `morning5_counteroffer_choice`
- 배경: `room_school.png`
- Staging: `counteroffer`
- 선택지:
  1. "먼저 약속한 사람에게 답한다" → `morning5_counteroffer_choice_lead` | 플래그: `day5_counteroffer_choice_lead`
  2. "어젯밤 사람을 고른다" → `morning5_counteroffer_choice_tempter` | 플래그: `day5_counteroffer_choice_tempter`
  3. "둘 다 놓는다" → `morning5_counteroffer_choice_neither` | 플래그: `day5_counteroffer_choice_neither`

- 캐릭터: `없음`
**{name}**: *숨 막히는 해명이 끝나자, 두 사람의 시선이 내 입술 끝에 꽂힌 채 마지막 대답을 기다린다.*

---

### `morning5_counteroffer_choice_lead`
- 배경: `room_school.png`
- Staging: `counteroffer`
- 다음: `morning5_after_counteroffer`

- 캐릭터: `없음`
**{name}**: *먼저 약속했던 사람 쪽으로 똑바로 몸을 돌려 고개를 숙인다.* 어젯밤 내가 흔들려서 저지른 선택부터 사과할게. 지금 와서 염치없이 내 옆에 남아 달라고 붙잡지는 않겠어.

---

### `morning5_counteroffer_choice_tempter`
- 배경: `room_school.png`
- Staging: `counteroffer`
- 다음: `morning5_after_counteroffer`

- 캐릭터: `없음`
**{name}**: *어젯밤 함께 시간을 보낸 사람을 바라본 뒤, 먼저 약속했던 사람에게 깊이 고개를 숙인다.* 내 마음이 지금 누구에게 기울어 버렸는지 비겁하게 숨기지 않을게. 두 사람을 동시에 붙잡고 상처 주는 짓은 여기서 끝낼게.

---

### `morning5_counteroffer_choice_neither`
- 배경: `room_school.png`
- Staging: `counteroffer`
- 다음: `morning5_after_counteroffer`

- 캐릭터: `없음`
**{name}**: *두 사람 사이에서 천천히 한 걸음 뒤로 물러선다.* 이미 신뢰를 깬 내가 지금 누구 한 사람을 고를 자격은 없어. 내 욕심으로 둘 다 붙잡아 두지 않을게.

---

### `morning5_after_counteroffer`
- 배경: `room_school.png`
- 다음: `morning5_after_counteroffer_hidden_check`

- 캐릭터: `없음`
**{name}**: *교탁 모서리에 놓여 있던 조회 유인물 한 장이 바람에 밀려 바닥으로 소리 없이 미끄러진다. 누구도 선뜻 허리를 숙여 줍지 못하는 사이, 축제 개막을 알리는 경쾌한 방송 소리가 서늘하게 식은 교실을 가득 메운다.*

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
**{name}**: *책상 위에는 더 이상 비밀스러운 쪽지가 놓여 있지 않다. 대신 교실 앞쪽에서 안내 자료를 정리하던 서연이 클립보드를 품에 안은 채 내 눈을 맞추고는 살짝 미소 짓는다. 유나와 다인은 담담한 얼굴로 축제 준비 일정만 짧게 건네고 지나간다.*

---

### `morning5_committed_yuna`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_check`

- 캐릭터: `yuna_normal.png`
**{name}**: *사물함에도 책상 위에도 새 메모는 없다. 창가에 앉은 유나가 노트 사이에 꽂힌 연보라색 책갈피를 만지작거리다 내 시선을 느끼고 조용히 눈인사를 건넨다. 서연과 다인은 축제 준비에 필요한 전달 사항만 짧게 일러 준다.*

---

### `morning5_committed_dain`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_check`

- 캐릭터: `dain_normal.png`
**{name}**: *체육관 입구 쪽에서 손목 보호대를 단단히 고쳐 매던 다인이 나를 보자마자 환하게 손을 흔든다. 교실에서 마주친 서연과 유나는 차분한 목소리로 축제 행사 순서만 짧게 일러 준다.*

---

### `morning5_start_b`
- 다음: `morning5_start_2_b`

<!-- i18n -->

---

### `morning5_start_2_b`
- 다음: `morning5_mood_check`

<!-- i18n -->

---

### `morning5_mood_check`
- 배경: `room_school.png`
- 호감분기: selectByHighestAffinity
  - [80+] → `morning5_mood_high`
  - [50+] → `morning5_mood_mid`
  - [0+] → `morning5_mood_low`
  - [-19 이상] → `morning5_mood_low`
  - [기본] → `morning5_mood_neg`
- 다음: `morning5_mood_low`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `morning5_mood_high`
- 배경: `school_hallway.png`
- 다음: `morning5_gate`

- 캐릭터: `없음`
**{name}**: *전학 온 첫 주가 어느새 끝자락에 닿았다. 교실 문고리를 잡기 전, 지난 나흘 동안 내 귓가를 스쳐 간 숨결과 목소리들을 가만히 되짚어 본다. 손끝이 기분 좋게 달아오른다.*

---

### `morning5_mood_mid`
- 배경: `school_festival.webp`
- 다음: `morning5_gate`

- 캐릭터: `없음`
**{name}**: *전학 온 첫 주가 다 지나가도록 내 마음이 어디로 기우는지 선뜻 정하지 못했다. 축제 준비로 들뜬 교문을 지나며 길게 숨을 고른다.*

---

### `morning5_mood_low`
- 배경: `room_school.png`
- 다음: `morning5_gate`

- 캐릭터: `없음`
**{name}**: *전학 온 첫 주가 저물어 간다. 휴대폰 잠금화면에 나란히 남은 세 사람의 이름을 내려다보다가, 끝내 어느 대화방도 열지 못한 채 화면을 끈다.*

---

### `morning5_mood_neg`
- 배경: `room_school.png`
- 다음: `morning5_gate`

- 캐릭터: `없음`
**{name}**: *전학 온 첫 주가 무겁게 저물어 간다. 잠금화면 위에 뜬 이름들을 차마 마주 보지 못한 채, 가방 지퍼만 끝까지 끌어 올린다.*

---

### `morning5_gate`
- 다음: `morning5_seo_note_1`

<!-- i18n -->

---

### `morning5_seo_note_1`
- 배경: `room_school.png`
- 다음: `morning5_seo_note_1_b`

- 캐릭터: `seyoun_normal.png` @ 0.35
**서연**: *내 책상 한가운데, 모서리를 반듯하게 맞춘 쪽지 한 장이 놓여 있다. 낯익은 서연의 단정한 필체에서 은은한 핸드크림 향이 스친다.* 오후에 잠깐 시간 비워 둬. 옥상 문 열어 놓을게. — 서연

---

### `morning5_seo_note_1_b`
- 배경: `school_hallway.png`
- 분기:
  - [`yuna_trust_broken`] → `morning5_yuna_story_gone`
  - [기본] → `morning5_seo_note_1_c`

- 캐릭터: `없음`
**{name}**: *복도 창가를 따라 꾸며진 문예부 전시 코너를 지나다가, 코르크 게시판 한구석에 꽂힌 빈 압정 네 개 앞에서 걸음을 멈춘다.*

---

### `morning5_yuna_story_gone`
- 배경: `school_hallway.png`
- 다음: `morning5_yuna_story_gone_2`

- 캐릭터: `없음`
**{name}**: *코르크 게시판 위에는 종이가 뜯겨 나간 자리에 압정 자국 네 개만 덩그러니 파여 있다. 밤사이 누군가 원고를 붙였다가 떼어 낸 건지, 애초부터 빈자리였는지는 알 길이 없다.*

---

### `morning5_yuna_story_gone_2`
- 배경: `school_hallway.png`
- 다음: `morning5_return_class`

- 캐릭터: `없음`
**{name}**: *손끝으로 작게 패인 압정 구멍을 쓸어 보지만 이 자국만으로는 유나가 삼킨 마음의 행방을 짐작할 수 없다.*

---

### `morning5_seo_note_1_c`
- 배경: `school_hallway.png`
- 다음: `morning5_yuna_story_1`

- 캐릭터: `없음`
**{name}**: *문예부 게시판 한켠에 단편소설 원고 몇 장이 압정으로 가지런히 고정돼 있다. 제목은 '도서관에서 만난 사람에게'. 눈에 익은 연보라색 만년필 잉크, 그리고 살짝 접힌 종이 모서리에 아주 작은 소보로 빵 부스러기가 묻어 있다.*

---

### `morning5_yuna_story_1`
- 배경: `school_hallway.png`
- 다음: `morning5_yuna_story_2`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *원고 속 화자는 오후의 도서관 책상에 엎드려 잠든 누군가에게 소리 없이 다가가 자기 카디건을 덮어 준다. 실제로 있었던 일은 아닌데도, 숨소리조차 죽인 채 곁을 지키는 문장마다 유나의 서늘하고도 다정한 눈빛이 겹쳐진다.*

---

### `morning5_yuna_story_2`
- 배경: `school_hallway.png`
- 다음: `morning5_yuna_story_4`

- 캐릭터: `없음`
**{name}**: *원고의 맨 끝 문장에 시선이 닿는다. '그 사람이 눈을 떴을 때, 나는 이미 자리에 없었다. 책갈피 같은 쪽지만 남겼다. — 다음에도 여기 있을게.' 첫날 내 사물함에서 발견했던 쪽지와 똑같은 연보라색 잉크가 아침 햇살을 받아 잔잔하게 번진다.*

---

### `morning5_yuna_story_4`
- 배경: `school_hallway.png`
- 다음: `morning5_return_class`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *원고지 맨 아래 여백 구석에는 연필로 아주 작게 덧붙인 글씨가 남아 있다. '이건 소설이야. 진짜가 아니야.' 그 문장 위로 몇 번이나 지우개를 문지르다 만 자국이 희미하게 번져 있어, 도리어 숨기지 못한 진심이 손끝에 잡힐 듯 선명하게 전해진다.*

---

### `morning5_return_class`
- 배경: `room_school.png`
- 다음: `morning5_dain_1`

- 캐릭터: `dain_normal.png`
**{name}**: *복도 끝에서 교실로 돌아오자, 문가에 등을 기댄 채 발끝을 톡톡 구르고 있던 다인이 나를 발견하고 눈을 반짝인다.*

---

### `morning5_dain_1`
- 배경: `room_school.png`
- 다음: `morning5_dain_1_b`

- 캐릭터: `dain_normal.png`
**다인**: *내 어깨를 가볍게 툭 치며 장난스럽게 웃는다.* 야, 어디 갔다 이제 와! 오늘 체육 이벤트 파트너 칸에 네 이름 딱 적어 놨거든?

---

### `morning5_dain_1_b`
- 배경: `room_school.png`
- 다음: `morning5_dain_2`

- 캐릭터: `dain_normal.png`
**{name}**: 내 허락도 안 받고 마음대로 적어 놓으면 어떡해?

---

### `morning5_dain_2`
- 배경: `room_school.png`
- 다음: `hidden_homeroom_d5_check`

- 캐릭터: `dain_laugh.png`
**다인**: *포니테일이 흔들리도록 고개를 휙 젖히며 볼에 바람을 넣는다.* 흥, 싫다는 말은 안 했네? 시간 늦으면 진짜 화낸다, 알았지?

---

### `hidden_homeroom_d5_check`
- 배경: `school_hallway.png`
- 배경톤: `empty`
- 분기:
  - [`homeroom_day4`] → `hidden_homeroom_d5_1`
  - [기본] → `hidden_nurse_d5_check`

- 캐릭터: `teacher_normal.png`
**{name}**: *축제 준비로 복도가 소란스러운 틈을 지나, 문이 반쯤 열려 있는 빈 교실 앞에서 문득 발걸음을 멈춘다.*

---

### `hidden_homeroom_d5_1`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_1_b`

- 캐릭터: `teacher_sad.png`
**{name}**: 선생님, 아직 여기 계셨네요. 손에 드신 그 봉투는 뭐예요? 평소에 보던 원고 뭉치는 안 보이는데요. *담임선생님은 조용한 교탁 앞에 기대앉아 두툼한 갈색 서류 봉투를 만지작거리고 있다.*

---

### `hidden_homeroom_d5_1_b`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_1_c`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *고개를 들며 옅게 숨을 내쉰다.* 아, 왔구나.

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
**담임선생님**: *손에 쥐고 있던 갈색 봉투를 내 눈높이로 살짝 들어 보인다.* 이거 말이야.

---

### `hidden_homeroom_d5_1_e`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_2`

- 캐릭터: `teacher_normal.png`
**{name}**: 그 안엔 뭐가 들어 있는데요?

---

### `hidden_homeroom_d5_2`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_3`

- 캐릭터: `teacher_sad.png`
**담임선생님**: 문예부 합평회에 낼 인쇄본이야. 아직 결말은 비어 있는 미완성이지만... 지난번에 네가 짚어 줬던 문장들도 밤새 다시 고쳐 적었어.

---

### `hidden_homeroom_d5_3`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *봉투 겉면을 쓸어내리는 손끝에 잔잔한 떨림이 스친다.* 칠 년째 혼자 서랍 속에 붙들고 있었는데 이젠 다른 사람들 눈에는 어떻게 읽히는지도 들어 봐야지 싶어서.

---

### `hidden_homeroom_d5_4`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_5`

- 캐릭터: `teacher_sad.png`
**{name}**: 이 번호로 적어서 내면 되는 거죠? *봉투에서 반쯤 모습을 드러낸 합평본 맨 뒷장에 익명 의견란이 인쇄되어 있다.*

---

### `hidden_homeroom_d5_5`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_choice`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *민망한 듯 뺨을 긁적인다.* 참 이상하지. 복사기로 여러 부를 찍어 냈는데도, 누군가에게 처음 내밀 때 손끝이 떨리는 건 똑같네.

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
**{name}**: *선생님이 건넨 원고 봉투를 두 팔로 안아 든다. 종이 뭉치의 묵직한 온기가 팔 안쪽을 눌러 온다.*

---

### `hidden_homeroom_d5_praise_trap_1`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *선생님은 쓴웃음을 지으며 구겨진 봉투 모서리를 엄지로 천천히 펴낸다.* 첫 장을 넘기기도 전에 좋은 말부터 고르지 않아도 괜찮아. 오래 붙잡고 있었다는 게 곧 잘 썼다는 뜻은 아니니까.

---

### `hidden_homeroom_d5_praise_trap_2`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 아직 마지막 장까지 다 채우지도 못했는걸.

---

### `hidden_homeroom_d5_praise_trap_3`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_4`

- 캐릭터: `teacher_normal.png`
**{name}**: 그래도 포기하지 않고 여기까지 쓰셨잖아요.

---

### `hidden_homeroom_d5_praise_trap_4`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_5`

- 캐릭터: `teacher_sad.png`
**담임선생님**: ...그래, 여기까지는 왔지.

---

### `hidden_homeroom_d5_praise_trap_5`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_6`

- 캐릭터: `teacher_sad.png`
**담임선생님**: 이 부수는 우선 내가 다시 챙겨 둘게. 네가 내 마음 다치지 않게 배려해 주려는 건 고마워. 그래도 아직 한 줄도 읽은 건 아니잖아. *선생님은 내 손에서 원고를 조심스레 넘겨받아 잠시 머뭇거리다 갈색 봉투 안에 도로 넣는다.*

---

### `hidden_homeroom_d5_praise_trap_6`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_7`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 괜찮아. 대신 합평회 자리에서는 네가 직접 읽은 대목만 이야기해 줘.

---

### `hidden_homeroom_d5_praise_trap_7`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_8`

- 캐릭터: `teacher_normal.png`
**{name}**: 선생님...

---

### `hidden_homeroom_d5_praise_trap_8`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_9`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 출판사에 세 번 투고했고 세 번 다 반송됐어. 그럴 때마다 막연한 위로보다는 독자가 대체 어느 문장에서 책장을 덮었는지가 가장 절실했거든.

---

### `hidden_homeroom_d5_praise_trap_9`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_10`

- 캐릭터: `teacher_sad.png`
**{name}**: *갈색 봉투 귀퉁이에 억지로 떼어 낸 반송 스티커의 하얀 접착제 자국이 눈에 밟힌다.*

---

### `hidden_homeroom_d5_praise_trap_10`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_11`

- 캐릭터: `teacher_sad.png`
**담임선생님**: 예쁜 칭찬보다는 솔직하게 읽고 지나간 흔적이 필요했어. 학생인 네게 괜한 무게를 얹어 줬다면 그건 전적으로 내 불찰이야.

---

### `hidden_homeroom_d5_praise_trap_11`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_praise_trap_12`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 얼른 가 봐. 반 아이들이랑 축제 준비 맞출 시간 늦겠다.

---

### `hidden_homeroom_d5_praise_trap_12`
- 배경: `school_hallway.png`
- 배경톤: `empty`
- 플래그: `homeroom_day5`, `teacher_praise_broken`
- 다음: `hidden_nurse_d5_check`

- 캐릭터: `없음`
**{name}**: *빈 교실 문을 조용히 닫고 복도로 나온다. 교탁 위에 홀로 남겨진 갈색 봉투와 손톱만큼 뜯긴 반송 스티커 자국이 눈꺼풀 안쪽에 오래 남는다.*

---

### `hidden_homeroom_d5_correct_1`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_2`

- 캐릭터: `teacher_normal.png`
**{name}**: 선생님, 지금 시간 조금 괜찮으시면 이 자리에서 바로 읽어 봐도 돼요? 읽다가 숨이 턱 막히는 자리가 어디인지부터 직접 보고 싶어서요. *선생님은 말없이 입술을 달싹이다가, 손안에 살짝 말려 있던 원고 끝을 반듯하게 펴 준다.*

---

### `hidden_homeroom_d5_correct_2`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_3`

- 캐릭터: `teacher_normal.png`
**담임선생님**: ...지금, 바로 여기서?

---

### `hidden_homeroom_d5_correct_3`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_4`

- 캐릭터: `teacher_normal.png`
**{name}**: 네. 읽지도 않은 채로 빈말만 늘어놓고 싶진 않거든요.

---

### `hidden_homeroom_d5_correct_4`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *잠시 내 눈을 깊이 들여다보더니 조용히 의자를 내어 준다.* 그래. 잠깐이면 되니까.

---

### `hidden_homeroom_d5_correct_5`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_6`

- 캐릭터: `teacher_normal.png`
**{name}**: *종이 넘기는 소리만 사각거리는 빈 교실. 원고의 마지막 장은 절반 넘게 하얗게 비어 있다. 수없이 그어진 빨간 삭제선 아래로, 한 문장을 썼다가 지우기를 반복하며 멈춰 선 흔적이 겹겹이 배어 있다.*

---

### `hidden_homeroom_d5_correct_6`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_7`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *내 어깨 너머로 시선을 떨군 채 낮게 묻는다.* ...벌써 거기까지 읽었어?

---

### `hidden_homeroom_d5_correct_7`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_8`

- 캐릭터: `teacher_shy.png`
**담임선생님**: 이상하게 그 마지막 장만 펼치면 펜 끝이 얼어붙은 것처럼 멈추더라. 몇 년째 그 문턱을 못 넘고 있어.

---

### `hidden_homeroom_d5_correct_8`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_9`

- 캐릭터: `teacher_shy.png`
**담임선생님**: ...바로 이 줄에서. *선생님의 가느다란 손가락이 내 손등 가까이를 스치며 끊어진 마지막 문장을 짚는다. 창밖 멀리서 울리던 행사 안내 방송이 잦아든다.*

---

### `hidden_homeroom_d5_correct_9`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_10`

- 캐릭터: `teacher_normal.png`
**{name}**: 이 마지막 장에서 왜 걸음이 멈췄는지, 제 생각을 여백에 표시해도 될까요?

---

### `hidden_homeroom_d5_correct_10`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_11`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *놀란 듯 눈을 크게 떴다가 이내 부드럽게 눈매를 휘어 웃는다.* 내 원고에 직접 비평까지 남기겠다고?

---

### `hidden_homeroom_d5_correct_11`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_12`

- 캐릭터: `teacher_smile.png`
**{name}**: 네. 지금은 학생이 아니라, 선생님 글을 끝까지 따라온 첫 독자로 읽고 있으니까요.

---

### `hidden_homeroom_d5_correct_12`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_13`

- 캐릭터: `teacher_smile.png`
**담임선생님**: ...바로 그렇게 읽어 줄 사람이 필요했어. 내가 쓴 문장인데도 혼자 골방에서 들여다보면 어디서부터 길을 잃었는지 도무지 안 보이거든. *선생님은 쥐고 있던 클립보드를 교탁 위에 내려놓고 빨간 펜 뚜껑을 딸깍 닫아 내게 건넨다.*

---

### `hidden_homeroom_d5_correct_13`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_correct_14`

- 캐릭터: `teacher_smile.png`
**담임선생님**: 좋아. 뒷장 익명 의견란에 네가 느낀 그대로 적어 줘.

---

### `hidden_homeroom_d5_correct_14`
- 배경: `room_school.png`
- 배경톤: `empty`
- 플래그: `teacher_truth_seen`
- 다음: `hidden_homeroom_d5_6`

- 캐릭터: `없음`
**{name}**: 알겠습니다. 한 줄도 안 빼놓고 읽은 뒤에 적어 올게요. *선생님이 갈색 봉투에 남은 반송 스티커 자국을 손끝으로 가만히 문지른다.*

---

### `hidden_homeroom_d5_6`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 여기, 이건 네 몫의 번호야. 다른 부원들 합평본이랑 섞여서 월요일에 한꺼번에 거둘게.

---

### `hidden_homeroom_d5_6_b`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_c`

- 캐릭터: `teacher_normal.png`
**{name}**: *저녁 무렵 카페 안쪽 테이블에 수북이 쌓여 있던 합평본 뭉치가 떠오른다. 내 손에 들린 갈색 봉투 귀퉁이에는 단정한 글씨로 '04'라는 숫자가 적혀 있다.*

---

### `hidden_homeroom_d5_6_c`
- 다음: `hidden_homeroom_d5_6_d`

<!-- i18n -->

---

### `hidden_homeroom_d5_6_d`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_e`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 네가 읽은 자리까지만 꾸밈없이 적어 주면 돼. 이름은 따로 안 밝혀도 되고.

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
**{name}**: 대신 선생님도 필체 보고 누가 썼는지 일부러 찾지 마세요.

---

### `hidden_homeroom_d5_6_g`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_h`

- 캐릭터: `teacher_smile.png`
**담임선생님**: 누가 썼는지는 굳이 안 찾아볼게. 그 종이 위에 어떤 문장이 남았는지만 읽으면 되니까. *선생님은 합평본 번호표를 확인하고는 담백하게 고개를 끄덕인다.*

---

### `hidden_homeroom_d5_6_h`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_i`

- 캐릭터: `teacher_smile.png`
**담임선생님**: ...내 원고로 누군가의 진짜 감상을 듣게 될 날이 올 줄은 몰랐네.

---

### `hidden_homeroom_d5_6_i`
- 다음: `hidden_homeroom_d5_6_j`

<!-- i18n -->

---

### `hidden_homeroom_d5_6_j`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_k`

- 캐릭터: `teacher_shy.png`
**담임선생님**: 월요일 문예부 모임 시간 전까지만 읽고 돌려줘.

---

### `hidden_homeroom_d5_6_k`
- 다음: `hidden_homeroom_d5_6_l`

<!-- i18n -->

---

### `hidden_homeroom_d5_6_l`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_m`

- 캐릭터: `teacher_normal.png`
**{name}**: 네. 허투루 안 넘기고 제대로 읽을게요.

---

### `hidden_homeroom_d5_6_m`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_n`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *뺨을 스치던 머리카락을 귀 뒤로 살짝 넘기며 새침하게 덧붙인다.* 미리 말해 두는데 예의상 적어 주는 감상문은 안 받는다.

---

### `hidden_homeroom_d5_6_n`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_o`

- 캐릭터: `teacher_smile.png`
**{name}**: 에이, 내심 기다리시면서 거짓말하시기는.

---

### `hidden_homeroom_d5_6_o`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_p`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *결국 참지 못하고 입술 끝이 부드럽게 호선을 그린다.* ...들켰네. 맞아, 솔직한 걸로 한 줄이라도 꼭 써 줘.

---

### `hidden_homeroom_d5_6_p`
- 다음: `hidden_homeroom_d5_6_q`

<!-- i18n -->

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
**담임선생님**: 네 답은 월요일 문예부 시간에 정식으로 받을게. 그때까지 나도 멈춰 있던 결말을 한 줄이라도 더 밀고 나가 볼 테니까.

---

### `hidden_homeroom_d5_6_s`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_6_t`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 이러면 우리 둘 다 도망칠 핑계는 못 대겠네.

---

### `hidden_homeroom_d5_6_t`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_7`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *문예부 일정표 맨 아랫줄에 또박또박 합평 마감 시각을 적어 넣는다.*

---

### `hidden_homeroom_d5_7`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_7_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 자, 고맙다는 인사는 아껴 둘게. 얼른 반으로 돌아가서 행사 준비 마저 해.

---

### `hidden_homeroom_d5_7_b`
- 다음: `hidden_homeroom_d5_7_c`

<!-- i18n -->

---

### `hidden_homeroom_d5_7_c`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_homeroom_d5_8`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 학교 축제부터 후회 없이 잘 마쳐. 합평 이야기는 월요일 문예부실에서 이어 가자.

---

### `hidden_homeroom_d5_8`
- 배경: `room_school.png`
- 배경톤: `empty`
- 플래그: `homeroom_day5`
- 스탯: Teacher +10
- 다음: `hidden_homeroom_d5_freetalk`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *선생님은 먼저 복도로 걸어 나가 축제 부스를 준비하는 학생들의 이름을 하나씩 부르며 점검한다.*

---

### `hidden_homeroom_d5_freetalk`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_nurse_d5_check`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *내가 안고 있는 04번 합평본 봉투를 눈짓으로 가리킨다.* 마지막 검토야. 비어 있는 문장이 보여도 봐주지 말고 짚어 줘.

---

### `hidden_homeroom_d5_skip`
- 배경: `room_school.png`
- 배경톤: `empty`
- 호감분기: Teacher
  - [0+] → `hidden_homeroom_d5_low`
  - [-19 이상] → `hidden_homeroom_d5_low`
  - [기본] → `hidden_homeroom_d5_neg`
- 다음: `hidden_homeroom_d5_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `hidden_homeroom_d5_low`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_nurse_d5_check`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *선생님은 접힌 원고 뭉치를 서류철 깊숙이 밀어 넣고 표지를 덮는다. 종이 모서리가 맞물리는 마른 소리가 빈 교실에 짧게 울린다.* 이 이야기는 여기까지 하자. 남은 건 수업 시간에 정리할게.

---

### `hidden_homeroom_d5_neg`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `hidden_nurse_d5_check`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *선생님은 갈색 원고 봉투를 교탁 서랍 깊숙이 넣고 열쇠를 돌려 잠근다.* 사적인 상담은 여기까지로 하자. 남은 축제 일정은 학급 전체 공지로만 전달할게.

---

### `hidden_nurse_d5_check`
- 배경: `school_hallway.png`
- 분기:
  - [`nurse_day4`] → `hidden_nurse_d5_1`
  - [기본] → `morning5_end_branch`

- 캐릭터: `없음`
**{name}**: *오전 행사 준비가 한차례 숨을 고르는 쉬는 시간. 소독약 향이 은은하게 스며 나오는 보건실 앞 복도를 지나간다.*

---

### `hidden_nurse_d5_1`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_1_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 어, {name} 왔구나. 축제도 이제 끝자락이네. 그동안 적어 온 상담 기록도 이번에 마저 정리하자.

---

### `hidden_nurse_d5_1_b`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_1_c`

- 캐릭터: `nurse_normal.png`
**{name}**: *보건선생님이 차트 파일을 열어 내 이름이 적힌 상담 기록지의 맨 마지막 확인란을 펼친다.*

---

### `hidden_nurse_d5_1_c`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_1_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 지금 컨디션까지만 체크하면 이번 한 주 동안의 초기 상담 기록은 깔끔하게 마무리야.

---

### `hidden_nurse_d5_1_d`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_1_e`

- 캐릭터: `nurse_normal.png`
**{name}**: ...그럼 이제 보건실엔 따로 안 들러도 되는 거예요?

---

### `hidden_nurse_d5_1_e`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_1_f`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *차트에서 눈을 떼고 내 눈을 가만히 바라본다.* 몸이 아프거나 마음이 버거울 땐 언제든 정식으로 찾아와. 일부러 다치거나 거창한 구실을 만들 필요는 없으니까.

---

### `hidden_nurse_d5_1_f`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_2_b`

- 캐릭터: `nurse_normal.png`
**{name}**: *상담 기록지 맨 아래 칸에는 보건실 방문 절차와 위클래스 상담 예약 방법이 나란히 인쇄되어 있다.*

---

### `hidden_nurse_d5_2_b`
- 다음: `hidden_nurse_d5_2_c`

<!-- i18n -->

---

### `hidden_nurse_d5_2_c`
- 다음: `hidden_nurse_d5_3`

<!-- i18n -->

---

### `hidden_nurse_d5_3`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_b`

- 캐릭터: `nurse_normal.png`
**{name}**: 선생님, 상담 확인서 받으러 들렀어요.

---

### `hidden_nurse_d5_3_b`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_c`

- 캐릭터: `nurse_normal.png`
**{name}**: 약속한 시간 맞춰 온 건데 괜히 일거리만 늘려 드린 건 아니죠? 학교 행사 때문에 눈코 뜰 새 없이 바쁘실 것 같아서요. *선생님이 차분한 손길로 확인서 빈칸에 날짜와 시각을 적어 내려간다.*

---

### `hidden_nurse_d5_3_c`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 약속한 시간에 제 발로 도움을 받으러 오는 학생은 언제든 환영이야.

---

### `hidden_nurse_d5_3_d`
- 다음: `hidden_nurse_d5_3_e`

<!-- i18n -->

---

### `hidden_nurse_d5_3_e`
- 다음: `hidden_nurse_d5_3_f`

<!-- i18n -->

---

### `hidden_nurse_d5_3_f`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_3_g`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *책상 한켠의 하얀 플라스틱 상자를 열어 응급처치 안내 카드를 한 장 꺼낸다.*

---

### `hidden_nurse_d5_3_g`
- 다음: `hidden_nurse_d5_3_h`

<!-- i18n -->

---

### `hidden_nurse_d5_3_h`
- 다음: `hidden_nurse_d5_3_i`

<!-- i18n -->

---

### `hidden_nurse_d5_3_i`
- 다음: `hidden_nurse_d5_4`

<!-- i18n -->

---

### `hidden_nurse_d5_4`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_4_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 축제 기간 동안 비상 응급키트는 체육관 정문 쪽에 비치해 뒀어. 혹시라도 다치면 참지 말고 바로 담당 선생님을 불러야 해.

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
**{name}**: *확인서 하단 네모 칸에 '상담 종결, 필요 시 재예약'이라는 파란 잉크 도장이 선명하게 찍힌다.*

---

### `hidden_nurse_d5_4_d`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 자, 이걸로 마지막 확인 절차도 끝.

---

### `hidden_nurse_d5_5`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice`

- 캐릭터: `nurse_normal.png`
**보건선생님**: {name}. 가는 길에 이 응급처치 안내 카드도 하나 챙겨 갈래?

---

### `hidden_nurse_d5_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "네. 가방에 넣어둘게요." → `hidden_nurse_d5_choice_a` | Nurse +5
  2. "카드보다 상담실 예약 방법을 알려주세요." → `hidden_nurse_d5_choice_b` | Nurse +4
  3. "이 카드만 있으면 상담실까지는 안 가도 되겠네요." → `hidden_nurse_d5_choice_trap` | Nurse -6

- 캐릭터: `nurse_normal.png`
**{name}**: *빳빳한 카드 앞면에는 기본 응급처치 순서가, 뒷면에는 교내 공식 상담 창구 안내가 적혀 있다.*

---

### `hidden_nurse_d5_choice_a`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_a_b`

- 캐릭터: `nurse_normal.png`
**{name}**: 잘 챙겨 둘게요. 다칠 일 없으면 그냥 가방 안주머니에 가만히 넣어 둬도 되는 거죠? *선생님이 카드를 얇은 투명 보호 케이스에 끼워 내 손바닥 위에 올려 준다.*

---

### `hidden_nurse_d5_choice_a_b`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그럼. 꺼내 쓸 일이 없는 게 제일 좋고 혹시라도 숨이 턱 막히거나 필요한 순간이 오면 망설이지 말고 바로 꺼내 봐.

---

### `hidden_nurse_d5_choice_b`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 좋은 질문이야. 학교 앱으로 미리 예약을 남겨 두면, 내가 처치 중이라 바로 못 보더라도 전문 상담선생님이 곧장 이어받아 주실 수 있거든.

---

### `hidden_nurse_d5_choice_trap`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *단호하게 고개를 젓는다.* 정반대야. 이 카드는 너 혼자서 참아 내라고 쥐여 주는 부적이 아니야.

---

### `hidden_nurse_d5_choice_b_b`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_c`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *안내 카드 뒷면 귀퉁이에 인쇄된 작은 QR 코드를 검지로 짚어 보인다.*

---

### `hidden_nurse_d5_choice_b_c`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 이걸 찍어서 학교 앱으로 들어가면 바로 상담 예약 창이 열려. 보건실이랑 위클래스 중에서 네가 편한 쪽을 고르면 돼.

---

### `hidden_nurse_d5_choice_b_d`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_e`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 내가 자리 비웠을 때도 다른 선생님이 놓치지 않고 살펴 주실 거고 모든 기록은 교내 규정 안에서 안전하게 보호돼.

---

### `hidden_nurse_d5_choice_b_e`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_f`

- 캐릭터: `nurse_normal.png`
**{name}**: *카드 아랫부분에는 사적인 연락처 대신 상담 가능한 요일과 시간, 담당 부서 번호가 깔끔하게 인쇄되어 있다.*

---

### `hidden_nurse_d5_choice_b_f`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_choice_b_g`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 만약 당장 감당하기 힘든 급한 일이 생기면, 누구에게 제일 먼저 말할 거야?

---

### `hidden_nurse_d5_choice_b_g`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_6`

- 캐릭터: `nurse_normal.png`
**{name}**: 집에 계신 보호자분이나 학교의 가까운 선생님이요. 예전처럼 혼자 속으로만 삭이면서 버티지 않을게요.

---

### `hidden_nurse_d5_6`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_6_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *그제야 안심한 듯 눈매가 부드럽게 풀린다.* 그렇게만 해 주면 돼. 자, 여기 응급처치 카드.

---

### `hidden_nurse_d5_6_b`
- 다음: `hidden_nurse_d5_6_c`

<!-- i18n -->

---

### `hidden_nurse_d5_6_c`
- 배경: `school_hallway.png`
- 다음: `hidden_nurse_d5_flag_check`

- 캐릭터: `nurse_normal.png`
**{name}**: *카드 맨 아랫줄에 작은 고딕체로 인쇄된 문장이 눈에 들어온다. '상처가 깊어지기 전에 먼저 손 내밀기.'*

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
**보건선생님**: *정리된 상담 기록지를 캐비닛 파일에 꽂아 넣는다.* 공식 상담은 여기까지. 다음번엔 아픈 데가 생기면 참지 말고 바로 말해.

---

### `hidden_nurse_d5_skip`
- 배경: `school_hallway.png`
- 호감분기: Nurse
  - [0+] → `hidden_nurse_d5_low`
  - [-19 이상] → `hidden_nurse_d5_low`
  - [기본] → `hidden_nurse_d5_neg`
- 다음: `hidden_nurse_d5_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `hidden_nurse_d5_low`
- 배경: `school_hallway.png`
- 다음: `morning5_end_branch`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님이 차트 사이에서 상담실 안내 카드를 빼내 책상 끝으로 밀어 준다.* 긴 이야기는 정식으로 상담 시간을 잡아서 하자. 몸이 아프면 보건실 문은 언제든 두드려도 되고. *카드를 챙겨 들고 조용히 교실로 발길을 돌린다.*

---

### `hidden_nurse_d5_neg`
- 배경: `school_hallway.png`
- 다음: `morning5_end_branch`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님이 차트를 소리 나게 덮고 예약표를 닫는다.* 이 시간엔 응급 처치만 받을게. 개인적인 상담이 필요하면 학교 공식 창구로 신청해 줘. *발길을 돌려 교실로 돌아간다.*

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
**{name}**: *조용한 창가에 서서 휴대폰 메모 앱을 연다. 이전 학교에서 소정이 겪던 일을 어른들에게 알리려다 끝내 삼켰던 문장들, 지우고 고쳐 쓰기를 반복했던 비겁한 변명들. 서른아홉 번째 초안의 커서가 빈 화면 위에서 깜빡인다.*

---

### `morning5_sojeong_2`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `morning5_sojeong_3`

- 캐릭터: `없음`
**{name}**: *더 이상 나를 변호하기 위한 마흔 번째 초안은 만들지 않기로 한다. 오랫동안 미뤄 둔 사과의 문장을 메신저 입력창에 똑바로 옮겨 적고 떨리는 엄지로 전송 버튼을 누른다.*

---

### `morning5_sojeong_3`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `morning5_sojeong_4`

- 캐릭터: `없음`
**{name}**: 그때 네 책상 위에 적힌 낙서들을 두 눈으로 보고도 선생님께 말씀드리지 못했어. 못 본 척 고개를 돌린 것도 변명할 여지 없는 내 선택이었어. 정말 미안해. 내 마음이 편해지려고 보낸 글이니까 답장은 하지 않아도 돼.

---

### `morning5_sojeong_4`
- 배경: `room_school.png`
- 배경톤: `empty`
- 플래그: `sojeong_apology_sent`
- 다음: `morning5_sojeong_5`

- 캐릭터: `없음`
**{name}**: *말풍선 옆에 작은 전송 완료 표시가 뜬다. 숫자 1이 사라지기를 기다리며 초조해하는 대신, 담담하게 화면을 덮어 대화방을 나온다.*

---

### `morning5_sojeong_5`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `morning5_route_branch`

- 캐릭터: `없음`
**{name}**: 전학 오기 전 학교에서 제가 모른 척 지나쳤던 일로 정식 상담을 받고 싶습니다. *지금의 담임선생님에게도 메시지를 보낸다. 교정에 울려 퍼지는 축제 방송 소리 속에서, 마침내 내보낸 두 줄의 고백을 끝내 지우지 않는다.*

---

### `morning5_route_branch`
- 배경: `room_school.png`
- 분기:
  - [`day4_counteroffer_penalty_deferred`] → `morning5_co_haeun_check`
  - [`day4_confession_accepted`] → `morning5_committed_end`
  - [기본] → `morning5_end`

- 캐릭터: `없음`

---

### `morning5_co_haeun_check`
- 배경: `room_school.png`
- 호감분기: Haeun
  - [8+] → `day5_haeun_gate`
  - [기본] → `tour_co_branch`
- 다음: `tour_co_branch`

- 캐릭터: `없음`

---

### `morning5_end`
- 배경: `room_school.png`
- 다음: `day5_haeun_gate`

- 캐릭터: `없음`
**{name}**: *책상 위에 놓인 쪽지들을 소중히 추려 모으고 휴대폰 화면에 도착한 알림들도 하나씩 빠짐없이 확인한다. 심장이 조금씩 빠르게 뛰기 시작한다.*

---

### `morning5_committed_end`
- 배경: `room_school.png`
- 다음: `day5_haeun_gate`

- 캐릭터: `없음`
**{name}**: *책상 위를 정리한 뒤, 내 마음이 이미 향해 있는 사람의 동선에 맞춰 축제 행사 시간표를 다시 한번 눈에 새긴다.*

---

## 5일차 — 점심 `day5_2_lunch`

### `day5_haeun_gate`
- 분기:
  - [`day5_haeun_event_done`] → `day5_haeun_resume`
  - [기본] → `day5_haeun_trust_check`

---

### `day5_haeun_trust_check`
- 호감분기: Haeun
  - [8+] → `day5_haeun_select_rival`
  - [0+] → `day5_haeun_resume`
  - [기본] → `day5_haeun_low_intro`

---

### `day5_haeun_select_rival`
- 실시간 라이벌 분기:
  - [`Seoyeon`] → `day5_haeun_high_intro`
  - [`Yuna`] → `day5_haeun_high_intro`
  - [`Dain`] → `day5_haeun_high_intro`
  - [`Teacher`] → `day5_haeun_high_intro`
  - [`Nurse`] → `day5_haeun_high_intro`

---

### `day5_haeun_high_intro`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_high_clasp`

- 캐릭터: `haeun_normal.png`
**하은**: 선배, 마침 잘 만났어요! 이쪽 모서리 좀 같이 잡아 주실래요? 방송실 앞까지만 옮기는 거 도와주세요. *하은이 두 팔로 안고 있던 서류 상자 한쪽을 내게 살짝 내민다.*

---

### `day5_haeun_high_clasp`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_arrival_router`

- 캐릭터: `haeun_normal.png`
**하은**: 앗, 선배 잠깐만 움직이지 마세요. 제 팔찌 고리가 선배 소매 단추에 걸렸나 봐요. *방송실 문 앞에 상자를 내려놓고 하은이 엉킨 은빛 체인을 풀려고 내 가슴팍 가까이 고개를 숙인다. 바로 그때 복도를 지나던 누군가의 발걸음이 우리 옆에서 딱 멈춘다.*

---

### `day5_haeun_arrival_router`
- 실시간 라이벌 분기:
  - [`Seoyeon`] → `day5_haeun_seoyeon_arrival`
  - [`Yuna`] → `day5_haeun_yuna_arrival`
  - [`Dain`] → `day5_haeun_dain_arrival`
  - [`Teacher`] → `day5_haeun_teacher_arrival`
  - [`Nurse`] → `day5_haeun_nurse_arrival`

---

### `day5_haeun_seoyeon_arrival`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_explain_choice`

- 캐릭터: `seyoun_pout.png`
**서연**: 둘이 여기 있었네. *복도를 걸어오던 서연이 걸음을 멈추고 하은의 손끝과 내 셔츠 소매를 번갈아 내려다본다.* ...여기서 뭐 하던 중이야?

---

### `day5_haeun_yuna_arrival`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_explain_choice`

- 캐릭터: `yuna_sad.png`
**유나**: ...잠깐. *복도를 지나던 유나가 한쪽 이어폰을 천천히 빼내며 우리 두 사람 사이의 좁은 거리를 바라본다.* 둘이 아주 가까이 서 있길래.

---

### `day5_haeun_dain_arrival`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_explain_choice`

- 캐릭터: `dain_angry.png`
**다인**: 어라, 야! 둘이 여기서 뭐 해? *다인이 서류 상자 옆에서 우뚝 걸음을 멈춘다.* ...뭔가 분위기 묘한데, 나 지금 끼어들어도 되는 거지?

---

### `day5_haeun_teacher_arrival`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_explain_choice`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *복도를 지나던 담임선생님이 들고 있던 서류철을 내리며 우리 두 사람을 바라본다.* ...둘이 복도 한가운데서 뭐 하고 있었니?

---

### `day5_haeun_nurse_arrival`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_explain_choice`

- 캐릭터: `nurse_worried.png`
**보건선생님**: *응급 키트를 점검하고 돌아오던 보건선생님이 우리 앞에서 걸음을 늦춘다.* 어머, 둘이 꽤 가까워 보이네. 무슨 일이야?

---

### `day5_haeun_explain_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "하은을 소개한다" → `day5_haeun_explain_open`
  2. "설명을 미룬다" → `day5_haeun_explain_delay` | 플래그: `day5_haeun_delayed_explanation`

- 캐릭터: `haeun_worried.png`
**{name}**: *놀란 하은이 얼른 팔찌에서 손을 떼며 뒤를 돌아본다. 묘하게 굳어진 공기 속에서 내가 먼저 입을 연다.*

---

### `day5_haeun_explain_open`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_defends`

- 캐릭터: `없음`
**{name}**: *학생회 일을 돕는 하은이고 방송실로 서류 상자를 같이 옮기다가 팔찌 고리가 내 소매 단추에 걸려 풀던 중이었다고 차분히 설명한다. 맞은편의 시선은 여전히 맞닿아 있던 우리 두 사람의 소매 끝에 머물러 있다.*

---

### `day5_haeun_explain_delay`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_defends`

- 캐릭터: `없음`
**{name}**: *잠깐만 기다려 달라고 짧게 말한 뒤 하은의 팔찌부터 마저 풀어 주려고 몸을 돌린다. 복도에 멈춰 선 사람에게는 이따가 따로 설명하겠다고만 덧붙인다.*

---

### `day5_haeun_defends`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_trust_cg`

- 캐릭터: `haeun_firm.png`
**하은**: 저기, 제가 먼저 도와 달라고 부탁드렸어요. 선배한테는 편하게 말씀드릴 수 있어서요. *하은이 바닥의 서류 상자를 자기 발치로 바짝 끌어당긴다.* 정말 오해하실 만한 일 한 거 아니에요. …아닌데, 제 입으로 이렇게 말하고 나니까 왜 더 이상한 변명처럼 들리죠?

---

### `day5_haeun_trust_cg`
- 배경: `event_haeun_trust.png`
- 다음: `day5_haeun_escalation_router`

- 캐릭터: `없음`
**{name}**: *방송실 문 앞에서 하은이 서류 상자 위에 가만히 두 손을 포개 얹고 조금 발개진 볼로 내 쪽을 돌아본다.*

---

### `day5_haeun_escalation_router`
- 실시간 라이벌 분기:
  - [`Seoyeon`] → `day5_haeun_seoyeon_escalation_check`
  - [`Yuna`] → `day5_haeun_yuna_escalation_check`
  - [`Dain`] → `day5_haeun_dain_escalation_check`
  - [`Teacher`] → `day5_haeun_teacher_escalation_check`
  - [`Nurse`] → `day5_haeun_nurse_escalation_check`

---

### `day5_haeun_seoyeon_escalation_check`
- 분기:
  - [`day5_haeun_delayed_explanation`] → `day5_haeun_seoyeon_escalation_delay`
  - [기본] → `day5_haeun_seoyeon_escalation`

---

### `day5_haeun_seoyeon_escalation`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_misunderstanding_started`
- 스탯: Seoyeon -15
- 다음: `day5_haeun_seoyeon_group_talk`

- 캐릭터: `seyoun_pout.png`
**서연**: 편하게 부탁할 수 있는 사이라는 거네. *서연이 차분하지만 서늘하게 가라앉은 눈으로 내 쪽을 향한다.* 하은이 말 말고 네 입으로 말해 봐. 둘이 언제부터 이렇게 가까웠어?

---

### `day5_haeun_seoyeon_escalation_delay`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_misunderstanding_started`
- 스탯: Seoyeon -20
- 다음: `day5_haeun_seoyeon_group_talk`

- 캐릭터: `seyoun_pout.png`
**서연**: 편하게 부탁할 수 있는 사이라는 거네. *서연이 차분하지만 서늘하게 가라앉은 눈으로 내 쪽을 향한다.* 하은이 말 말고 네 입으로 말해 봐. 둘이 언제부터 이렇게 가까웠어?

---

### `day5_haeun_seoyeon_group_talk`
- 배경: `school_hallway.png`
- 타입: `group_free_talk`
- 다음: `day5_haeun_finish`

- 캐릭터: `없음`
**서연 · 하은**: *하은이 곤란한 얼굴로 반걸음 물러서고 서연은 흔들림 없는 시선으로 내 대답을 기다린다.*

---

### `day5_haeun_yuna_escalation_check`
- 분기:
  - [`day5_haeun_delayed_explanation`] → `day5_haeun_yuna_escalation_delay`
  - [기본] → `day5_haeun_yuna_escalation`

---

### `day5_haeun_yuna_escalation`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_misunderstanding_started`
- 스탯: Yuna -15
- 다음: `day5_haeun_yuna_group_talk`

- 캐릭터: `yuna_sad.png`
**유나**: *유나가 빼낸 이어폰 줄을 말아 교복 주머니에 넣는다.* 서류 옮기는 거 도와준 건 알겠어. 그런데 두 사람이 이렇게 가까워진 건 처음 보네. ...네 얘기도 직접 듣고 싶어.

---

### `day5_haeun_yuna_escalation_delay`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_misunderstanding_started`
- 스탯: Yuna -20
- 다음: `day5_haeun_yuna_group_talk`

- 캐릭터: `yuna_sad.png`
**유나**: *유나가 빼낸 이어폰 줄을 말아 교복 주머니에 넣는다.* 하은이가 먼저 부탁한 건 알겠어. 그래도 네가 직접 말해 줘. 방금 둘이서 뭐 하던 거야?

---

### `day5_haeun_yuna_group_talk`
- 배경: `school_hallway.png`
- 타입: `group_free_talk`
- 다음: `day5_haeun_finish`

- 캐릭터: `없음`
**유나 · 하은**: *하은이 조심스레 반걸음 뒤로 물러서고 유나는 고요한 눈동자로 내 입술 끝을 바라본다.*

---

### `day5_haeun_dain_escalation_check`
- 분기:
  - [`day5_haeun_delayed_explanation`] → `day5_haeun_dain_escalation_delay`
  - [기본] → `day5_haeun_dain_escalation`

---

### `day5_haeun_dain_escalation`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_misunderstanding_started`
- 스탯: Dain -15
- 다음: `day5_haeun_dain_group_talk`

- 캐릭터: `dain_angry.png`
**다인**: *다인이 하은에게서 내 쪽으로 시선을 휙 돌린다.* 하은이 말 말고 네가 직접 얘기해 봐. 진짜로 그냥 학생회 일만 도와주던 거 맞아?

---

### `day5_haeun_dain_escalation_delay`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_misunderstanding_started`
- 스탯: Dain -20
- 다음: `day5_haeun_dain_group_talk`

- 캐릭터: `dain_angry.png`
**다인**: *다인이 하은에게서 내 쪽으로 시선을 휙 돌린다.* 하은이 말 말고 네가 직접 얘기해 봐. 진짜로 그냥 학생회 일만 도와주던 거 맞아?

---

### `day5_haeun_dain_group_talk`
- 배경: `school_hallway.png`
- 타입: `group_free_talk`
- 다음: `day5_haeun_finish`

- 캐릭터: `없음`
**다인 · 하은**: *하은이 난처한 듯 반걸음 물러서고 다인은 팔짱을 낀 채 내 대답을 기다린다.*

---

### `day5_haeun_teacher_escalation_check`
- 분기:
  - [`day5_haeun_delayed_explanation`] → `day5_haeun_teacher_escalation_delay`
  - [기본] → `day5_haeun_teacher_escalation`

---

### `day5_haeun_teacher_escalation`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_misunderstanding_started`
- 스탯: Teacher -15
- 다음: `day5_haeun_teacher_group_talk`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *담임선생님이 서류철을 옆구리에 고쳐 끼운다.* 하은이가 대신 감싸 줄 필요는 없어. 네가 직접 설명해 봐. 방금 내가 잘못 본 거니?

---

### `day5_haeun_teacher_escalation_delay`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_misunderstanding_started`
- 스탯: Teacher -20
- 다음: `day5_haeun_teacher_group_talk`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *담임선생님이 서류철을 옆구리에 고쳐 끼운다.* 하은이가 대신 감싸 줄 필요는 없어. 네가 직접 설명해 봐. 방금 내가 잘못 본 거니?

---

### `day5_haeun_teacher_group_talk`
- 배경: `school_hallway.png`
- 타입: `group_free_talk`
- 다음: `day5_haeun_finish`

- 캐릭터: `없음`
**담임선생님 · 하은**: *하은이 조심스레 반걸음 물러서고 담임선생님은 차분한 눈빛으로 내 대답을 기다린다.*

---

### `day5_haeun_nurse_escalation_check`
- 분기:
  - [`day5_haeun_delayed_explanation`] → `day5_haeun_nurse_escalation_delay`
  - [기본] → `day5_haeun_nurse_escalation`

---

### `day5_haeun_nurse_escalation`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_misunderstanding_started`
- 스탯: Nurse -15
- 다음: `day5_haeun_nurse_group_talk`

- 캐릭터: `nurse_worried.png`
**보건선생님**: *보건선생님의 입가에서 가벼운 웃음기가 사라진다.* 하은이한테 묻는 게 아니야. 난 네 입으로 직접 듣고 싶어. 둘이 어떤 사이야?

---

### `day5_haeun_nurse_escalation_delay`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_misunderstanding_started`
- 스탯: Nurse -20
- 다음: `day5_haeun_nurse_group_talk`

- 캐릭터: `nurse_worried.png`
**보건선생님**: *보건선생님의 입가에서 가벼운 웃음기가 사라진다.* 하은이한테 묻는 게 아니야. 난 네 입으로 직접 듣고 싶어. 둘이 어떤 사이야?

---

### `day5_haeun_nurse_group_talk`
- 배경: `school_hallway.png`
- 타입: `group_free_talk`
- 다음: `day5_haeun_finish`

- 캐릭터: `없음`
**보건선생님 · 하은**: *하은이 반걸음 뒤로 물러서고 보건선생님은 가만히 내 대답을 기다린다.*

---

### `day5_haeun_finish`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_event_done`
- 다음: `day5_haeun_wave_gate`

- 캐릭터: `haeun_normal.png`
**하은**: 여기 서류 상자 받아 주셔서 감사합니다! *방송부 담당 학생에게 상자를 넘겨준 하은이 풀렸던 팔찌 고리를 다시 딸깍 잠근다. 머리 위의 스피커에서 점심 행사 안내 방송이 흘러나온다.*

---

### `day5_haeun_wave_gate`
- 분기:
  - [`haeun_cheer_seen`] → `day5_haeun_waver_1`
  - [기본] → `day5_haeun_personal`

---

### `day5_haeun_waver_1`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_waver_choice`

- 캐릭터: `haeun_worried.png`
**하은**: *상황이 지나간 뒤, 하은이 텅 빈 손바닥을 내려다보다가 손목의 팔찌 고리만 한참 동안 만지작거린다.* 선배, 아까 제가 아무 일도 아니라고 했잖아요. 분명 맞는 말인데요... 전에 두 분 잘되시라고 응원한다던 제 말이 자꾸만 목에 걸려요. 그냥 계속 모른 척 삼키려고요.

---

### `day5_haeun_waver_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "다른 사람이 기다려. 먼저 갈게." → `day5_haeun_waver_down` | Haeun -1
  2. "괜찮은 척 안 해도 돼." → `day5_haeun_waver_up` | Haeun +2
  3. "그 얘기는 여기까지 하자." → `day5_haeun_waver_down` | Haeun -2
  4. "말없이 옆에 있는다" → `day5_haeun_waver_up` | Haeun +1

- 캐릭터: `haeun_worried.png`
**하은**: *하은이 주먹을 꼭 쥐었다가 천천히 펴기를 반복하며 애써 웃어 보인다.* 괜찮아요, 진짜 아무것도 아니에요. …정말 아무것도 아닌 일인데, 선배는 지금 무슨 생각 하고 계세요?

---

### `day5_haeun_waver_up`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_personal`

- 캐릭터: `haeun_normal.png`
**하은**: *하은이 참았던 숨을 길게 내쉬며 어깨의 힘을 뺀다.* …고마워요, 선배. 그렇게 말해 주시니까 마음이 조금 덜 무서워졌어요. 아주 잠깐만 더 제 옆에 있어 주세요.

---

### `day5_haeun_waver_down`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_personal`

- 캐릭터: `haeun_firm.png`
**하은**: *하은이 차가워진 손끝으로 팔찌 고리를 꾹 눌렀다가 뗀다.* …네, 알겠어요. 방금 제가 한 말은 그냥 아무것도 아닌 걸로 해 둘게요.

---

### `day5_haeun_personal`
- 배경: `school_hallway.png`
- 타입: `free_talk`
- 다음: `day5_haeun_resume`
- 컨텍스트: "5일차 점심 무렵, 방송실 앞 복도에서 서류 상자 심부름을 마친 직후 하은과 단둘이 이야기한다. 이전 대화에서 실제로 나온 말만 기억한다. 존댓말과 선배 호칭을 유지한다. 선택 전에는 연애를 확정하지 않는다. 하은을 선택한 뒤에도 사귀기로 합의한 상태는 아니며 현재 대화와 호감도에 따라 마음을 판단한다."
- 성격: "하은과 단둘이 대화한다. 이전 대화에서 실제로 나온 말만 기억한다. 존댓말과 선배 호칭을 유지한다. 선택 전에는 연애를 확정하지 않는다. 하은을 선택한 뒤에도 사귀기로 합의한 상태는 아니며 현재 대화와 호감도에 따라 마음을 판단한다. 하은은 마음이 흔들리는 걸 알지만 모른 척하려 한다. 응원한다고 했던 말과 지금 마음 사이에서 말을 고르고 고백하지도 연인처럼 굴지도 않는다."

- 캐릭터: `haeun_normal.png`
**하은**: *하은이 방송실 문을 조용히 닫고 내 옆에 나란히 선다.* 아까는 다른 분도 계셔서 차마 못 여쭤봤는데요... 선배는 오늘 축제에서 원래 누구랑 제일 같이 있고 싶으셨어요?

---

### `day5_haeun_select_concern`
- 실시간 라이벌 분기:
  - [`Seoyeon`] → `day5_haeun_concern_seoyeon_intro`
  - [`Yuna`] → `day5_haeun_concern_yuna_intro`
  - [`Dain`] → `day5_haeun_concern_dain_intro`
  - [`Teacher`] → `day5_haeun_concern_teacher_intro`
  - [`Nurse`] → `day5_haeun_concern_nurse_intro`

---

### `day5_haeun_concern_seoyeon_intro`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_concern_seoyeon_arrival`

- 캐릭터: `haeun_worried.png`
**하은**: *복도 모퉁이에서 조용히 이야기를 나누던 하은이 다가오는 나를 발견하고 말을 멈춘다.* ...지난번에 선배랑 이야기할 때 솔직히 마음이 좀 불편했어요. 혼자 어떻게 받아들여야 할지 몰라서 여쭤보던 중이었어요.

---

### `day5_haeun_concern_seoyeon_arrival`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_concern_choice`

- 캐릭터: `seyoun_pout.png`
**서연**: 너, 하은이랑 무슨 대화를 나눴던 거야? *서연이 안고 있던 서류 뭉치를 내리며 진지한 눈빛으로 묻는다.* 가볍게 웃어넘길 만한 얘기는 아닌 것 같아서.

---

### `day5_haeun_concern_yuna_intro`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_concern_yuna_arrival`

- 캐릭터: `haeun_worried.png`
**하은**: *복도 모퉁이에서 조용히 이야기를 나누던 하은이 다가오는 나를 발견하고 말을 멈춘다.* ...지난번에 선배랑 이야기할 때 솔직히 마음이 좀 불편했어요. 혼자 어떻게 받아들여야 할지 몰라서 여쭤보던 중이었어요.

---

### `day5_haeun_concern_yuna_arrival`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_concern_choice`

- 캐릭터: `yuna_sad.png`
**유나**: *유나가 하은에게서 시선을 거두어 조용히 나를 바라본다.* 하은이한테 대략적인 얘기는 들었어. ...이제 네 쪽 설명도 들어 보고 싶어.

---

### `day5_haeun_concern_dain_intro`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_concern_dain_arrival`

- 캐릭터: `haeun_worried.png`
**하은**: *복도 모퉁이에서 조용히 이야기를 나누던 하은이 다가오는 나를 발견하고 말을 멈춘다.* ...지난번에 선배랑 이야기할 때 솔직히 마음이 좀 불편했어요. 혼자 어떻게 받아들여야 할지 몰라서 여쭤보던 중이었어요.

---

### `day5_haeun_concern_dain_arrival`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_concern_choice`

- 캐릭터: `dain_angry.png`
**다인**: 너 오니까 하은이가 말하다가 딱 멈추더라. *다인이 내 앞을 가로막듯 똑바로 선다.* 둘 사이에 무슨 일 있었는지 너한테도 직접 물어볼게.

---

### `day5_haeun_concern_teacher_intro`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_concern_teacher_arrival`

- 캐릭터: `haeun_worried.png`
**하은**: *복도 모퉁이에서 조용히 이야기를 나누던 하은이 다가오는 나를 발견하고 말을 멈춘다.* ...지난번에 선배랑 이야기할 때 솔직히 마음이 좀 불편했어요. 혼자 어떻게 받아들여야 할지 몰라서 여쭤보던 중이었어요.

---

### `day5_haeun_concern_teacher_arrival`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_concern_choice`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *담임선생님이 하은의 옆으로 반걸음 비켜서며 나를 부른다.* 한쪽 이야기만 듣고 섣불리 판단하진 않을 거야. 그날 무슨 맥락이었는지 네가 설명해 보렴.

---

### `day5_haeun_concern_nurse_intro`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_concern_nurse_arrival`

- 캐릭터: `haeun_worried.png`
**하은**: *복도 모퉁이에서 조용히 이야기를 나누던 하은이 다가오는 나를 발견하고 말을 멈춘다.* ...지난번에 선배랑 이야기할 때 솔직히 마음이 좀 불편했어요. 혼자 어떻게 받아들여야 할지 몰라서 여쭤보던 중이었어요.

---

### `day5_haeun_concern_nurse_arrival`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_concern_choice`

- 캐릭터: `nurse_worried.png`
**보건선생님**: *보건선생님이 굳은 얼굴의 하은을 살핀 뒤 내게 시선을 맞춘다.* 후배가 대화를 나누며 불편함을 느꼈다는 건 가볍게 넘기기 어려워. 네 쪽 이야기도 들어 봐야겠어.

---

### `day5_haeun_concern_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "무슨 얘길 들었는지 묻는다" → `day5_haeun_concern_open`
  2. "지금은 말하기 싫다" → `day5_haeun_concern_delay` | 플래그: `day5_haeun_delayed_explanation`

- 캐릭터: `haeun_worried.png`
**{name}**: *하은이 긴장한 얼굴로 내 쪽을 돌아본다. 그 옆에서 이야기를 듣고 있던 사람도 발걸음을 떼지 않고 나를 바라본다.*

---

### `day5_haeun_concern_open`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_concern_clarify`

- 캐릭터: `없음`
**{name}**: *방금 어떤 이야기를 나눴는지 차분히 묻고 하은도 함께 있는 이 자리에서 숨김없이 설명하겠다고 말한다. 맞은편의 시선이 하은을 한 번 살핀 뒤 다시 내게로 향한다.*

---

### `day5_haeun_concern_delay`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_concern_clarify`

- 캐릭터: `없음`
**{name}**: *지금은 여기서 일일이 해명하고 싶지 않다며 먼저 자리를 뜨려 한다. 등 뒤에서 내 이름을 부르는 목소리가 들리고 하은도 그 자리에 굳은 듯 서 있다.*

---

### `day5_haeun_concern_clarify`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_concern_router`

- 캐릭터: `haeun_firm.png`
**하은**: 저기, 선배를 나쁘게 만들려고 없는 말을 지어낸 건 절대 아니에요. 그냥 그날 대화하면서 제가 불편하고 당황스러웠던 점을 말씀드린 거예요. *하은이 조심스레 내 눈을 바라본다.* 혹시 제가 선배 뜻을 다르게 받아들인 거라면, 이 자리에서 직접 말씀해 주세요.

---

### `day5_haeun_concern_router`
- 실시간 라이벌 분기:
  - [`Seoyeon`] → `day5_haeun_concern_seoyeon_check`
  - [`Yuna`] → `day5_haeun_concern_yuna_check`
  - [`Dain`] → `day5_haeun_concern_dain_check`
  - [`Teacher`] → `day5_haeun_concern_teacher_check`
  - [`Nurse`] → `day5_haeun_concern_nurse_check`

---

### `day5_haeun_concern_seoyeon_check`
- 분기:
  - [`day5_haeun_delayed_explanation`] → `day5_haeun_concern_seoyeon_escalation_delay`
  - [기본] → `day5_haeun_concern_seoyeon_escalation`

---

### `day5_haeun_concern_seoyeon_escalation`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_misunderstanding_started`
- 스탯: Seoyeon -15
- 다음: `day5_haeun_concern_seoyeon_group_talk`

- 캐릭터: `seyoun_pout.png`
**서연**: 하은이가 그때 얼마나 난처했는지 네가 알고는 있었는지 궁금해. *서연이 흔들림 없이 내 대답을 기다린다.* 피하지 말고 여기서 직접 얘기해 줘.

---

### `day5_haeun_concern_seoyeon_escalation_delay`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_misunderstanding_started`
- 스탯: Seoyeon -20
- 다음: `day5_haeun_concern_seoyeon_group_talk`

- 캐릭터: `seyoun_pout.png`
**서연**: 하은이가 그때 얼마나 난처했는지 네가 알고는 있었는지 궁금해. *서연이 흔들림 없이 내 대답을 기다린다.* 피하지 말고 여기서 직접 얘기해 줘.

---

### `day5_haeun_concern_seoyeon_group_talk`
- 배경: `school_hallway.png`
- 타입: `group_free_talk`
- 다음: `day5_haeun_low_intro`

- 캐릭터: `없음`
**서연**: *서연이 굳은 표정의 하은을 한 번 돌아본 뒤 내게 묻는다.* 네 이야기를 이런 식으로 전해 들을 줄은 몰랐어. 하은이한테 대체 무슨 말을 했던 거야?

---

### `day5_haeun_concern_yuna_check`
- 분기:
  - [`day5_haeun_delayed_explanation`] → `day5_haeun_concern_yuna_escalation_delay`
  - [기본] → `day5_haeun_concern_yuna_escalation`

---

### `day5_haeun_concern_yuna_escalation`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_misunderstanding_started`
- 스탯: Yuna -15
- 다음: `day5_haeun_concern_yuna_group_talk`

- 캐릭터: `yuna_sad.png`
**유나**: *유나가 손에 쥐고 있던 휴대폰을 주머니에 넣는다.* 지금은 네 말을 어떤 뜻으로 이해해야 할지 잘 모르겠어. 그날 무슨 생각으로 한 말이었는지 들려줘.

---

### `day5_haeun_concern_yuna_escalation_delay`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_misunderstanding_started`
- 스탯: Yuna -20
- 다음: `day5_haeun_concern_yuna_group_talk`

- 캐릭터: `yuna_sad.png`
**유나**: *유나가 손에 쥐고 있던 휴대폰을 주머니에 넣는다.* 지금은 네 말을 어떤 뜻으로 이해해야 할지 잘 모르겠어. 그날 무슨 생각으로 한 말이었는지 들려줘.

---

### `day5_haeun_concern_yuna_group_talk`
- 배경: `school_hallway.png`
- 타입: `group_free_talk`
- 다음: `day5_haeun_low_intro`

- 캐릭터: `없음`
**유나**: *유나가 이어폰 줄을 차분히 접어 주머니에 넣는다.* 하은이가 들려준 이야기가 내가 알던 네 모습과 너무 달라서. 네가 직접 말해 줘. 무슨 대화를 나눴던 거야?

---

### `day5_haeun_concern_dain_check`
- 분기:
  - [`day5_haeun_delayed_explanation`] → `day5_haeun_concern_dain_escalation_delay`
  - [기본] → `day5_haeun_concern_dain_escalation`

---

### `day5_haeun_concern_dain_escalation`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_misunderstanding_started`
- 스탯: Dain -15
- 다음: `day5_haeun_concern_dain_group_talk`

- 캐릭터: `dain_angry.png`
**다인**: *다인이 끼고 있던 팔을 내리며 진지하게 눈을 맞춘다.* 억울한 오해면 여기서 풀고 혹시라도 상처 준 말이 있었으면 그것도 솔직하게 얘기해. 내가 끝까지 듣고 있을게.

---

### `day5_haeun_concern_dain_escalation_delay`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_misunderstanding_started`
- 스탯: Dain -20
- 다음: `day5_haeun_concern_dain_group_talk`

- 캐릭터: `dain_angry.png`
**다인**: *다인이 끼고 있던 팔을 내리며 진지하게 눈을 맞춘다.* 억울한 오해면 여기서 풀고 혹시라도 상처 준 말이 있었으면 그것도 솔직하게 얘기해. 내가 끝까지 듣고 있을게.

---

### `day5_haeun_concern_dain_group_talk`
- 배경: `school_hallway.png`
- 타입: `group_free_talk`
- 다음: `day5_haeun_low_intro`

- 캐릭터: `없음`
**다인**: *다인이 내 앞에서 걸음을 멈춘다.* 하은이한테 대체 뭐라고 한 거야? 난 네가 후배한테 함부로 대할 애는 아니라고 믿었거든. 네 얘기도 한번 들어 보자.

---

### `day5_haeun_concern_teacher_check`
- 분기:
  - [`day5_haeun_delayed_explanation`] → `day5_haeun_concern_teacher_escalation_delay`
  - [기본] → `day5_haeun_concern_teacher_escalation`

---

### `day5_haeun_concern_teacher_escalation`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_misunderstanding_started`
- 스탯: Teacher -15
- 다음: `day5_haeun_concern_teacher_group_talk`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *담임선생님이 나를 똑바로 바라본다.* 네 원래 의도와는 다르게 전해졌을 수도 있겠지. 그래도 하은이가 왜 불편함을 느꼈는지는 같이 짚어 봐야 해. 네 생각은 어떠니?

---

### `day5_haeun_concern_teacher_escalation_delay`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_misunderstanding_started`
- 스탯: Teacher -20
- 다음: `day5_haeun_concern_teacher_group_talk`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *담임선생님이 나를 똑바로 바라본다.* 네 원래 의도와는 다르게 전해졌을 수도 있겠지. 그래도 하은이가 왜 불편함을 느꼈는지는 같이 짚어 봐야 해. 네 생각은 어떠니?

---

### `day5_haeun_concern_teacher_group_talk`
- 배경: `school_hallway.png`
- 타입: `group_free_talk`
- 다음: `day5_haeun_low_intro`

- 캐릭터: `없음`
**담임선생님**: *담임선생님이 들고 있던 서류철을 내린다.* 평소 네 모습을 믿고 있었는데 이 이야기는 그냥 모른 척 넘길 수가 없구나. 하은이에게 어떤 말을 했었는지 차근차근 설명해 봐.

---

### `day5_haeun_concern_nurse_check`
- 분기:
  - [`day5_haeun_delayed_explanation`] → `day5_haeun_concern_nurse_escalation_delay`
  - [기본] → `day5_haeun_concern_nurse_escalation`

---

### `day5_haeun_concern_nurse_escalation`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_misunderstanding_started`
- 스탯: Nurse -15
- 다음: `day5_haeun_concern_nurse_group_talk`

- 캐릭터: `nurse_worried.png`
**보건선생님**: *보건선생님이 부드럽던 눈매에서 웃음기를 거둔다.* 하은이가 왜 네 말을 그렇게 받아들였는지 차분하게 짚어 보자. 네가 직접 설명해 줄래?

---

### `day5_haeun_concern_nurse_escalation_delay`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_misunderstanding_started`
- 스탯: Nurse -20
- 다음: `day5_haeun_concern_nurse_group_talk`

- 캐릭터: `nurse_worried.png`
**보건선생님**: *보건선생님이 부드럽던 눈매에서 웃음기를 거둔다.* 하은이가 왜 네 말을 그렇게 받아들였는지 차분하게 짚어 보자. 네가 직접 설명해 줄래?

---

### `day5_haeun_concern_nurse_group_talk`
- 배경: `school_hallway.png`
- 타입: `group_free_talk`
- 다음: `day5_haeun_low_intro`

- 캐릭터: `없음`
**보건선생님**: *보건선생님이 하은의 상태를 먼저 살피고 내 쪽으로 돌아선다.* 네 이야기를 이런 자리에서 듣게 될 줄은 몰랐어. 하은이가 저렇게 마음에 걸려 하는 이유를 네 입으로도 듣고 싶어. 그때 무슨 말을 했니?

---

### `day5_haeun_low_intro`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_low_choice`

- 캐릭터: `haeun_firm.png`
**하은**: 부스 점검표 찾으시는 거예요? *하은이 서류철을 자기 품 쪽으로 살짝 당겨 안는다.* 죄송하지만 아직은 선배 혼자 맡기기가 조금 망설여져서요.

---

### `day5_haeun_low_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "지난번 태도를 사과하고 점검을 돕는다" → `day5_haeun_low_apology` | 플래그: `day5_haeun_apologized`
  2. "점검부터 같이 한다" → `day5_haeun_low_work`
  3. "하은에게 맡기고 자리를 뜬다" → `day5_haeun_low_leave`

- 캐릭터: `haeun_worried.png`
**하은**: 오후 부스 번호랑 비상 통로 위치만 다시 대조하면 돼요. 정말 도와주실 생각이면 저랑 같이 돌면서 확인해요.

---

### `day5_haeun_low_apology`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_low_work`

- 캐릭터: `haeun_firm.png`
**하은**: *지난번 대화에서 불편하게 했던 태도를 정중히 사과하고 점검을 끝까지 돕겠다고 말한다. 하은은 잠시 내 눈을 살피다가 조심스레 점검표를 펼쳐 든다.* ...사과해 주신 건 잘 들었어요. 그럼 이쪽 구역부터 저랑 같이 확인해 주세요.

---

### `day5_haeun_low_work`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_helped`
- 다음: `day5_haeun_low_result`

- 캐릭터: `없음`
**{name}**: 마지막 부스 번호까지 다 일치해. 통로 막던 빈 상자는 벽 쪽으로 치워 뒀고 빠진 안내판 위치는 여기 여백에 적어 놨어. *체크를 마친 점검표를 하은에게 건넨다.*

---

### `day5_haeun_low_result`
- 분기:
  - [`day5_haeun_apologized`] → `day5_haeun_low_repair`
  - [기본] → `day5_haeun_low_thanks`

---

### `day5_haeun_low_repair`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_event_done`, `day5_haeun_trust_repaired`
- 스탯: Haeun +5
- 다음: `day5_haeun_resume`

- 캐릭터: `haeun_relieved.png`
**하은**: *하은이 빼곡히 채워진 점검표를 한 장씩 넘겨 본다.* 요령 안 피우고 끝까지 다 봐 주셨네요. 솔직히 지난번 일은 아직 마음에 조금 걸리지만 오늘 이렇게 발 벗고 도와주신 건 정말 고마워요.

---

### `day5_haeun_low_thanks`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_event_done`
- 스탯: Haeun +2
- 다음: `day5_haeun_resume`

- 캐릭터: `haeun_normal.png`
**하은**: *하은이 점검표 맨 마지막 칸에 동그라미를 그린다.* 선배 덕분에 예상보다 훨씬 일찍 끝났어요. 남은 서류는 제가 학생회실로 가져갈게요.

---

### `day5_haeun_low_leave`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_event_done`
- 다음: `day5_haeun_resume`

- 캐릭터: `haeun_firm.png`
**하은**: 네, 알겠어요. 남은 구역 점검은 제가 혼자 마저 돌게요. *하은이 점검표를 반으로 접어 쥐고 부스 쪽으로 총총히 걸어간다.*

---

### `day5_haeun_resume`
- 분기:
  - [`day4_counteroffer_penalty_deferred`] → `tour_co_branch`
  - [`route_dain`] → `tour_dain_1_check`
  - [`route_yuna`] → `tour_yuna_1_check`
  - [기본] → `tour_seo_1`

---

### `tour_co_branch`
- 배경: `school_festival.webp`
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
**{name}**: *점심시간을 알리는 종소리가 울려 퍼졌지만 배식 줄은 평소보다 짧다. 어수선한 복도에는 누군가 홀로 도시락 뚜껑을 여닫는 달그락거림만 메마르게 남는다.*

---

### `tour_co_event_2`
- 배경: `school_hallway.png`
- 다음: `after5_start`

- 캐릭터: `없음`
**{name}**: *빈 의자 등받이 위에 주인 잃은 축제 진행 요원 조끼 하나가 축 늘어져 걸려 있다. 그게 누구의 자리였는지는 아무도 입 밖에 내지 않는다.*

---

### `tour_co_seo_1`
- 배경: `top_school.png`
- BGM: `sunset1.mp3`
- 다음: `tour_co_seo_2`

- 캐릭터: `seyoun_sad.png`
**{name}**: *옥상 문은 반쯤 열려 있었지만 서연은 평소처럼 난간 쪽으로 걸어 나가지 않고 철문 문틀에 비스듬히 등을 기댄 채 서 있다.*

---

### `tour_co_seo_2`
- 배경: `top_school.png`
- 다음: `tour_co_seo_3`

- 캐릭터: `seyoun_sad.png`
**서연**: 옥상 열쇠는 방금 행정실에 반납했어. ...오늘 점심은 여기까지만 하자.

---

### `tour_co_seo_3`
- 배경: `top_school.png`
- 다음: `after5_start`

- 캐릭터: `seyoun_pout.png`
**{name}**: *먼저 계단 쪽으로 몸을 돌리던 서연의 클립보드 모서리가 철문 문틀에 부딪혀 둔탁한 소리를 낸다. 서연은 한 번도 걸음을 멈추지 않고 내려간다.*

---

### `tour_co_yuna_1`
- 배경: `yuna_hideout_day.webp`
- BGM: `sunset1.mp3`
- 다음: `tour_co_yuna_2`

- 캐릭터: `yuna_sad.png`
**{name}**: *별관 소파 끝에 앉은 유나는 무릎 위의 노트를 끝내 펼치지 않은 채, 가방 끈만 하얀 손가락에 칭칭 감았다 풀기를 반복한다.*

---

### `tour_co_yuna_2`
- 배경: `yuna_hideout_day.webp`
- 다음: `tour_co_yuna_3`

- 캐릭터: `yuna_sad.png`
**유나**: ...노트 마지막 장 결말은, 오늘 안 보여 줄래.

---

### `tour_co_yuna_3`
- 배경: `yuna_hideout_day.webp`
- 다음: `after5_start`

- 캐릭터: `yuna_pout.png`
**{name}**: *창틈으로 스며든 오후의 햇살이 내 옆의 빈자리까지 길게 번져 오지만 유나는 끝내 내 쪽으로 거리를 좁히지 않는다.*

---

### `tour_co_dain_1`
- 배경: `gym.png`
- BGM: `sunset1.mp3`
- 다음: `tour_co_dain_2`

- 캐릭터: `dain_sad.png`
**{name}**: *체육관 천장의 조명은 눈부시게 켜져 있지만 코트 위를 굴러야 할 배구공들은 모두 보관함 자물쇠 안쪽에 갇혀 있다.*

---

### `tour_co_dain_2`
- 배경: `gym.png`
- 다음: `tour_co_dain_3`

- 캐릭터: `dain_sad.png`
**다인**: 가위바위보는... 다음에 하자. 미안, 오늘은 그냥 혼자 좀 쉬고 싶어.

---

### `tour_co_dain_3`
- 배경: `gym.png`
- 다음: `after5_start`

- 캐릭터: `dain_angry.png`
**{name}**: *다인은 습관처럼 손목 보호대 끝을 세게 잡아당겼다가, 맥없이 손을 놓으며 시선을 떨군다.*

---

### `tour_seo_1`
- 배경: `school_festival.webp`
- BGM: `sunset1.mp3`
- 다음: `tour_seo_affinity_check`

- 캐릭터: `seyoun_normal.png`
**{name}**: *점심 햇살이 쏟아지는 교문 앞에 서연과 나란히 멈춰 선다. 전학 첫날 아침, 긴장한 나를 기다리며 서연이 서 있던 바로 그 자리다.*

---

### `tour_seo_affinity_check`
- 배경: `school_festival.webp`
- 호감분기: Seoyeon
  - [80+] → `tour_seo_affinity_80`
  - [60+] → `tour_seo_affinity_60`
  - [기본] → `tour_seo_event_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `tour_seo_affinity_80`
- 배경: `school_festival.webp`
- 다음: `tour_seo_affinity_60`

- 캐릭터: `seyoun_shy.png`
**서연**: *서연이 다이어리 한 페이지를 살짝 펼쳐 보인다.* 다음 주 내 일정표 첫 번째 칸, 미리 비워 뒀어. 어디 갈지는 네가 시간 정해 줘.

---

### `tour_seo_affinity_60`
- 배경: `school_festival.webp`
- 다음: `tour_seo_event_1`

- 캐릭터: `seyoun_laugh.png`
**서연**: 오후 행사 다 끝나면 옥상에도 잠깐 들르자. 오늘은 네가 오기 전에 내가 먼저 올라가서 기다릴게.

---

### `tour_seo_event_1`
- 배경: `school_festival.webp`
- 다음: `tour_seo_event_2`

- 캐릭터: `haeun_worried.png`
**하은**: *숨이 턱까지 찬 하은이 복도를 달려와 멈춰 선다.* 회장님! 강당 방송부 리허설 시간이랑 운동장 부스 안전 점검이 겹쳤어요. 방송실 쪽은 제가 대신 가 볼까요?

---

### `tour_seo_event_2`
- 배경: `school_festival.webp`
- 다음: `tour_seo_event_3`

- 캐릭터: `seyoun_worried.png`
**{name}**: *서연의 손이 반사적으로 클립보드를 고쳐 쥐려다 멈칫한다. 서연은 볼펜 끝으로 시간표의 '방송 리허설' 칸을 두 번 가볍게 두드린다.*

---

### `tour_seo_event_3`
- 배경: `school_festival.webp`
- 다음: `tour_seo_event_4`

- 캐릭터: `seyoun_normal.png`
**서연**: 그래, 방송실 진행은 하은이 네가 맡아 줘. 끝나면 특이사항만 짧게 알려 주고.

---

### `tour_seo_event_4`
- 배경: `school_festival.webp`
- 다음: `tour_seo_event_5`

- 캐릭터: `haeun_normal.png`
**하은**: *하은의 눈이 동그랗게 커졌다가 이내 환하게 휘어진다.* 네! 대신 불안하다고 중간에 몰래 확인하러 오시면 안 돼요!

---

### `tour_seo_event_5`
- 배경: `school_festival.webp`
- 플래그: `day5_seoyeon_delegated`
- 다음: `tour_seo_2`

- 캐릭터: `seyoun_normal.png`
**서연**: *씩씩하게 뛰어가는 하은의 뒷모습이 모퉁이를 돌 때까지, 서연은 불안해하며 뒤쫓아 가지 않는다. 한결 가벼워진 숨이 서연의 입가를 스친다.* ...맞아. 일 하나쯤 내 손을 직접 안 거친다고 세상이 무너지진 않겠지.

---

### `tour_seo_2`
- 배경: `school_festival.webp`
- 다음: `tour_seo_3`

- 캐릭터: `seyoun_normal.png`
**서연**: *교문 기둥을 올려다보며 입가에 옅은 미소를 띤다.* 우리, 여기서 처음 인사했었지.

---

### `tour_seo_3`
- 배경: `school_festival.webp`
- 다음: `tour_seo_4`

- 캐릭터: `seyoun_normal.png`
**{name}**: 그땐 전학 첫날이라 얼마나 긴장했는지 몰라. 네 앞에 서서 무슨 말부터 꺼내야 할지 머릿속이 하얬거든.

---

### `tour_seo_4`
- 배경: `school_festival.webp`
- 다음: `tour_seo_5`

- 캐릭터: `seyoun_laugh.png`
**서연**: *장난기 어린 눈빛으로 나를 흘끗 돌아본다.* 그랬어? 겉으로는 아주 침착하게 인사도 꼬박꼬박 잘만 하던데. ...실은 그때부터 계속 너 보고 있었어.

---

### `tour_seo_5`
- 배경: `school_festival.webp`
- 다음: `tour_seo_6`

- 캐릭터: `seyoun_normal.png`
**{name}**: ...첫날 교문 앞에서부터?

---

### `tour_seo_6`
- 배경: `school_festival.webp`
- 다음: `tour_seo_7`

- 캐릭터: `seyoun_shy.png`
**서연**: *귓불이 발갛게 달아오르자 괜히 시선을 먼 하늘로 돌린다.* ...글쎄, 방금 건 바람 소리 때문에 네가 잘못 들었을 수도 있어.

---

### `tour_seo_7`
- 배경: `school_festival.webp`
- 다음: `tour_seo_8`

- 캐릭터: `seyoun_shy.png`
**{name}**: *교문 위의 축제 현수막은 미동도 없이 고요하다. 바람은 한 점도 불지 않는다.*

---

### `tour_seo_8`
- 배경: `school_festival.webp`
- 다음: `tour_seo_9`

- 캐릭터: `seyoun_normal.png`
**서연**: 저기, 이거 옥상 열쇠랑 모양이 꽤 비슷하지? 끝에 진짜 홈은 안 파여 있지만. *서연이 주머니에서 은빛 금속 열쇠고리 하나를 꺼내 손바닥 위에 올려 보인다.*

---

### `tour_seo_9`
- 배경: `school_festival.webp`
- 다음: `tour_seo_10`

- 캐릭터: `seyoun_normal.png`
**서연**: 자, 네 거.

---

### `tour_seo_10`
- 배경: `school_festival.webp`
- 다음: `tour_seo_11`

- 캐릭터: `seyoun_normal.png`
**{name}**: ...이건 진짜 옥상 열쇠는 아니네.

---

### `tour_seo_11`
- 배경: `school_festival.webp`
- 다음: `tour_seo_12`

- 캐릭터: `seyoun_normal.png`
**서연**: 이번 축제 학생회 기념품이야. 내가 갖고 있던 진짜 옥상 열쇠는 오늘 행사가 끝나면 행정실에 반납해야 하거든.

---

### `tour_seo_12`
- 배경: `school_festival.webp`
- 다음: `tour_seo_13`

- 캐릭터: `seyoun_normal.png`
**서연**: 잃어버리지 말고 잘 챙겨 둬. *열쇠고리를 건네는 서연의 따뜻한 손가락 끝이 내 손바닥을 길게 스친다. 서연은 화들짝 놀란 듯 손을 거두어 자기 가방끈을 꽉 쥔다.*

---

### `tour_seo_13`
- 배경: `school_festival.webp`
- 다음: `tour_seo_14`

- 캐릭터: `seyoun_normal.png`
**{name}**: 열쇠를 반납하고 나면, 다음 주부턴 옥상에 어떻게 올라가?

---

### `tour_seo_14`
- 배경: `school_festival.webp`
- 스탯: Seoyeon +1
- 다음: `tour_seo_freetalk`

- 캐릭터: `seyoun_shy.png`
**서연**: *서연이 한 걸음 다가서며 내 눈을 똑바로 올려다본다.* 나한테 말하면 되잖아. 그땐 몰래 숨어 올라가는 대신, 정식으로 열쇠 빌려서 너랑 둘이 같이 열면 돼.

---

### `tour_seo_freetalk`
- 배경: `top_school.png`
- 다음: `tour_seo_end`

- 캐릭터: `seyoun_normal.png`
**서연**: *축제 부스가 늘어선 교정을 나란히 한 바퀴 돌고 나서, 익숙한 계단을 올라 옥상 문을 연다. 서연이 햇볕에 데워진 난간 위에 가만히 손을 얹는다.* 학교 축제 날 점심시간에도, 결국 우리 둘이 오게 되는 곳은 여기네.

---

### `tour_seo_end`
- 배경: `top_school.png`
- 다음: `after5_start`

- 캐릭터: `seyoun_shy.png`
**{name}**: *서연이 준 기념 열쇠고리를 주머니에 넣는 순간, 바람에 흔들린 서연의 가방 안에서 아직 반납하지 않은 진짜 옥상 열쇠가 맑은 금속음을 내며 부딪힌다.*

---

### `tour_yuna_1_check`
- 배경: `yuna_hideout_day.webp`
- BGM: `sunset1.mp3`
- 분기:
  - [`chose_yuna_lunch`] → `tour_yuna_1`
  - [기본] → `tour_yuna_1b`

- 캐릭터: `없음`
**{name}**: *점심시간의 북적거림을 뒤로하고 도서관 별관으로 발걸음을 옮긴다.*

---

### `tour_yuna_1`
- 배경: `yuna_hideout_day.webp`
- 다음: `tour_yuna_affinity_check`

- 캐릭터: `yuna_normal.png`
**{name}**: *조용한 별관 창가로 나른한 오후의 햇살이 길게 드리워져 있다. 낡은 벨벳 소파와 오래된 종이 먼지 냄새가 첫날 그대로 나를 감싼다.*

---

### `tour_yuna_1b`
- 배경: `yuna_hideout_day.webp`
- 다음: `tour_yuna_affinity_check`

- 캐릭터: `yuna_normal.png`
**{name}**: *어깨를 맞대고 함께 책을 읽었던 별관의 낡은 소파 위로, 투명한 오후의 햇빛이 포근하게 내려앉아 있다.*

---

### `tour_yuna_affinity_check`
- 배경: `yuna_hideout_day.webp`
- 호감분기: Yuna
  - [80+] → `tour_yuna_affinity_80`
  - [60+] → `tour_yuna_affinity_60`
  - [기본] → `tour_yuna_event_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `tour_yuna_affinity_80`
- 배경: `yuna_hideout_day.webp`
- 다음: `tour_yuna_affinity_60`

- 캐릭터: `yuna_shy.png`
**유나**: 다음에 쓸 새 노트의 첫 번째 독자 자리도 미리 네 걸로 해 둘게. 오늘 행사가 끝나면 그 표지에 같이 날짜 적어 두자.

---

### `tour_yuna_affinity_60`
- 배경: `yuna_hideout_day.webp`
- 다음: `tour_yuna_event_1`

- 캐릭터: `yuna_smile.png`
**유나**: 오늘 오후에 보여 줄 마지막 장... 다른 누구도 말고 네가 제일 먼저 읽어 줘.

---

### `tour_yuna_event_1`
- 배경: `annex_exhibit_hallway.png`
- 다음: `tour_yuna_event_2`

- 캐릭터: `없음`
**{name}**: *별관 앞 복도로 걸어 나오자 문예부 전시 게시판 앞에 후배 두 명이 나란히 서 있다. 유나가 이름 없이 붙여 둔 단편소설을 손가락으로 짚으며 이 다음 이야기는 어디서 읽을 수 있느냐고 소곤거린다.*

---

### `tour_yuna_event_2`
- 배경: `annex_exhibit_hallway.png`
- 다음: `tour_yuna_event_3`

- 캐릭터: `yuna_worried.png`
**{name}**: *후배들이 자리를 뜨자 유나가 조용히 게시판 앞으로 다가가 원고 모서리에 손을 댄다. 습관처럼 종이를 떼어 내려던 손끝이 제목 바로 아래에서 멈춘다.*

---

### `tour_yuna_event_3`
- 배경: `annex_exhibit_hallway.png`
- 다음: `tour_yuna_event_4`

- 캐릭터: `yuna_normal.png`
**유나**: *내 쪽을 살짝 돌아보며 나직이 속삭인다.* ...다음 편은 아직 없지만 적어도 이 글은 내가 썼으니까.

---

### `tour_yuna_event_4`
- 배경: `annex_exhibit_hallway.png`
- 다음: `tour_yuna_event_5`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나가 주머니에서 연보라색 만년필을 꺼내더니, 비어 있던 제목 아래 여백에 자기 이름 석 자를 적어 넣는다. '최유나'. 떨리는 손끝 때문에 마지막 글자가 아주 조금 오른쪽으로 기울어 있다.*

---

### `tour_yuna_event_5`
- 배경: `annex_exhibit_hallway.png`
- 플래그: `day5_yuna_signed_story`
- 다음: `tour_yuna_2`

- 캐릭터: `yuna_normal.png`
**유나**: *만년필 뚜껑을 닫은 유나가 전시판에서 몸을 돌려 다시 별관 안쪽으로 걸음을 옮긴다. 스쳐 지나가는 귓가에 낮고 간지러운 목소리가 내려앉는다.* ...진짜 결말은, 누구보다 먼저 너한테만 보여 줄 거니까.

---

### `tour_yuna_2`
- 배경: `yuna_hideout_day.webp`
- 다음: `tour_yuna_3`

- 캐릭터: `yuna_normal.png`
**유나**: *창가에 앉아 있던 유나가 내 발소리에 고개를 들고는, 자기 바로 옆자리를 손바닥으로 두 번 톡톡 두드린다.* 이리 와서 앉아. 여긴 내가 미리 털어 놔서 먼지 없어.

---

### `tour_yuna_3`
- 배경: `yuna_hideout_day.webp`
- 다음: `tour_yuna_4`

- 캐릭터: `yuna_normal.png`
**{name}**: *유나 옆에 나란히 앉자 어깨 끝이 살며시 닿는다.* 신기하네. 이 문 안으로 들어오면 운동장의 축제 소리가 거짓말처럼 멀어져.

---

### `tour_yuna_4`
- 배경: `yuna_hideout_day.webp`
- 다음: `tour_yuna_5`

- 캐릭터: `yuna_normal.png`
**유나**: *유나가 고개를 조금 기울여 내 얼굴을 들여다본다.* ...그거, 좋은 뜻으로 한 말이야?

---

### `tour_yuna_5`
- 배경: `yuna_hideout_day.webp`
- 다음: `tour_yuna_6`

- 캐릭터: `yuna_normal.png`
**{name}**: 응. 너랑 둘이 숨 돌리기 딱 좋은 뜻으로.

---

### `tour_yuna_6`
- 배경: `yuna_hideout_day.webp`
- 다음: `tour_yuna_7`

- 캐릭터: `yuna_smile.png`
**유나**: *유나의 입가에 아주 옅은 미소가 번진다. 가방 안에서 새 노트를 꺼내 무릎 위에 올린다.* 그동안 썼던 문장들, 다듬어서 새 노트에 깨끗하게 옮겨 적었어. 옆에 고쳐 쓴 자국이 남아서 여백은 아직 조금 지저분하지만.

---

### `tour_yuna_7`
- 배경: `yuna_hideout_day.webp`
- 다음: `tour_yuna_8`

- 캐릭터: `yuna_normal.png`
**유나**: ...그리고 드디어 결말까지 다 썼어.

---

### `tour_yuna_8`
- 배경: `yuna_hideout_day.webp`
- 다음: `tour_yuna_9`

- 캐릭터: `yuna_normal.png`
**{name}**: 정말? 그렇게 오래 붙잡고 있던 이야기를 끝까지 다 쓰고 나니까 기분이 어때?

---

### `tour_yuna_9`
- 배경: `yuna_hideout_day.webp`
- 다음: `tour_yuna_10`

- 캐릭터: `yuna_normal.png`
**유나**: *노트 표지를 쓸어내리는 유나의 속눈썹이 작게 흔들린다.* 글쎄... 내 입으로 끝이라고 말해 버리면, 너랑 나누던 시간도 거기서 닫히는 것 같아서 기분이 조금 묘해.

---

### `tour_yuna_10`
- 배경: `yuna_hideout_day.webp`
- 다음: `tour_yuna_11`

- 캐릭터: `yuna_shy.png`
**유나**: 여기. ...아, 가방 안감 천에 모서리가 살짝 걸렸네. *유나가 조심스레 노트를 빼내어 두 손으로 내게 내민다. 노트를 감싼 손끝이 미세하게 떨리고 있다.*

---

### `tour_yuna_11`
- 배경: `yuna_hideout_day.webp`
- 스탯: Yuna +1
- 다음: `tour_yuna_freetalk`

- 캐릭터: `yuna_shy.png`
**{name}**: 내가 이 노트의 첫 번째 독자 해도 되는 거야?

---

### `tour_yuna_freetalk`
- 배경: `yuna_hideout_day.webp`
- 다음: `tour_yuna_end`

- 캐릭터: `yuna_normal.png`
**유나**: *유나가 새 노트의 책등을 가느다란 손가락으로 천천히 훑어 내리다가 조용히 고개를 든다.* ...평소보다 내가 오늘 말을 너무 많이 했지.

---

### `tour_yuna_end`
- 배경: `yuna_hideout_day.webp`
- 다음: `tour_yuna_end_2`

- 캐릭터: `yuna_shy.png`
**유나**: 이 결말의 첫 번째 독자. ...그 자리는 처음부터 너 주려고 비워 뒀어.

---

### `tour_yuna_end_2`
- 배경: `yuna_hideout_day.webp`
- 다음: `after5_start`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나는 거기서 말을 멈추고 내 손에 들린 노트 위로 시선을 포갠다. 별관 안의 고요가 두 사람의 심장 소리로 채워진다.*

---

### `tour_dain_1_check`
- 배경: `gym.png`
- BGM: `sunset1.mp3`
- 분기:
  - [`chose_dain_lunch`] → `tour_dain_1`
  - [기본] → `tour_dain_1b`

- 캐릭터: `없음`
**{name}**: *점심시간의 활기가 넘치는 체육관 쪽으로 발걸음을 옮긴다.*

---

### `tour_dain_1`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `tour_dain_affinity_check`

- 캐릭터: `없음`
**{name}**: *첫날 다인과 내기를 했던 코트 흰 선 옆으로, 어젯밤 나란히 정리해 둔 배구공 보관함이 가지런히 놓여 있다. 대낮처럼 환하게 켜진 체육관 조명이 코트 바닥을 비춘다.*

---

### `tour_dain_1b`
- 배경: `gym.png`
- 배경톤: `lights-off`
- 다음: `tour_dain_affinity_check`

- 캐릭터: `없음`
**{name}**: *문을 열고 들어선 체육관 천장에는 오늘따라 모든 조명이 환하게 켜져 있다.*

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
**다인**: 다음 주에 나 정식으로 경기 해설 연습할 때도 꼭 구경 와야 해! 날짜 잡히면 내가 제일 먼저 메시지 보낼게.

---

### `tour_dain_affinity_60`
- 배경: `gym.png`
- 다음: `tour_dain_event_1`

- 캐릭터: `dain_laugh.png`
**다인**: 이따 오후에 방송 부스부터 같이 들를래? 오늘 내 마이크 테스트 첫 번째 청취자는 너로 정했거든.

---

### `tour_dain_event_1`
- 배경: `gym.png`
- 다음: `tour_dain_event_2`

- 캐릭터: `dain_pain.png`
**{name}**: *체육관 구석에서 다인의 휴대폰이 길게 울린다. 코치님의 이름을 확인한 다인은 오후 축제 시범 경기에 잠깐이라도 뛸 수 있느냐는 말을 숨죽여 끝까지 듣는다.*

---

### `tour_dain_event_2`
- 배경: `gym.png`
- 다음: `tour_dain_event_3`

- 캐릭터: `dain_normal.png`
**다인**: *다인이 내 쪽을 한 번 바라보더니, 흔들림 없는 목소리로 입을 연다.* 코치님, 저 오늘 시범 경기는 안 뛸게요. 엄마한테도 오늘 아침에 제 입으로 말씀드렸어요. 대신 본부석 중계 마이크 비어 있으면, 그건 제가 맡을게요!

---

### `tour_dain_event_3`
- 배경: `dain_broadcast_booth.png`
- 다음: `tour_dain_event_4`

- 캐릭터: `dain_sweat.png`
**{name}**: *잠시 뒤, 다인이 체육관 2층 중계석에 올라가 마이크를 통통 두드린다. 한눈에 내려다보이는 코트 위로 다인의 시원한 목소리가 울려 퍼진다.*

---

### `tour_dain_event_4`
- 배경: `dain_broadcast_booth.png`
- 다음: `tour_dain_event_5`

- 캐릭터: `dain_laugh.png`
**다인**: 자, 양 팀 첫 서브 들어갑니다! 어림없죠, 방금 공은 정확히 라인 안쪽입니다! 판정 항의는 경기 다 끝나고 매점 앞에서 아이스크림 사 들고 받겠습니다!

---

### `tour_dain_event_5`
- 배경: `dain_broadcast_booth.png`
- 플래그: `day5_dain_chose_commentary`
- 다음: `tour_dain_2`

- 캐릭터: `dain_normal.png`
**다인**: *중계석 아래로 쏟아지는 웃음소리와 박수갈채 속에서, 다인이 마이크 스위치를 끄고 계단을 내려오며 후련하게 숨을 고른다.* ...직접 코트 위를 뛰지 않아도 내가 할 수 있는 말이 이렇게나 많네. 생각보다 훨씬 재밌어.

---

### `tour_dain_2`
- 배경: `gym.png`
- 다음: `tour_dain_3`

- 캐릭터: `dain_normal.png`
**다인**: 왔네! 오늘은 땀 빼면서 공 치는 거 말고 그냥 너랑 둘이서 빈둥거리며 놀고 싶은데. 설마 벌써 교실로 돌아갈 건 아니지? *다인이 배구공 하나를 옆구리에 가볍게 끼고 코트 한복판에서 환하게 손짓한다.*

---

### `tour_dain_3`
- 배경: `gym.png`
- 다음: `tour_dain_4`

- 캐릭터: `dain_laugh.png`
**다인**: *내 코앞까지 성큼 다가서며 눈을 반짝인다.* 야, 우리 여기서 가위바위보 딱 한 판만 더 할래?

---

### `tour_dain_4`
- 배경: `gym.png`
- 다음: `tour_dain_5`

- 캐릭터: `dain_normal.png`
**{name}**: 나한테 또 질 거면서 무슨 자신감이야.

---

### `tour_dain_5`
- 배경: `gym.png`
- 다음: `tour_dain_6`

- 캐릭터: `dain_laugh.png`
**다인**: 흥, 오늘은 촉이 다르거든? 이번엔 무조건 내가 이긴다!

---

### `tour_dain_6`
- 배경: `gym.png`
- 다음: `tour_dain_7`

- 캐릭터: `dain_normal.png`
**{name}**: *안 내면 진다, 가위바위보. — 내 주먹 앞에 다인의 가위가 맥없이 멈춘다.*

---

### `tour_dain_7`
- 배경: `gym.png`
- 다음: `tour_dain_8`

- 캐릭터: `dain_laugh.png`
**다인**: ...아, 진짜 왜 맨날 너한테만 지냐고!

---

### `tour_dain_8`
- 배경: `gym.png`
- 다음: `tour_dain_10`

- 캐릭터: `dain_normal.png`
**다인**: ...야, 그렇게 웃지 마! *다인은 억울한 듯 미간을 찌푸려 보이지만 새어 나오는 웃음을 끝내 참지 못하고 푸스스 웃음을 터뜨리며 배구공을 코트 바닥에 내려놓는다.*

---

### `tour_dain_10`
- 배경: `gym.png`
- 다음: `tour_dain_11`

- 캐릭터: `dain_sad.png`
**다인**: *가만히 코트 바닥의 흰 라인을 내려다보며 한결 차분해진 목소리로 입을 연다.* ...솔직히 앞으로 프로 무대까지 갈 수 있을지는 아직 잘 모르겠어.

---

### `tour_dain_11`
- 배경: `gym.png`
- 다음: `tour_dain_11_b`

- 캐릭터: `dain_sad.png`
**{name}**: *바닥에 내려놓은 배구공이 흰 엔드라인을 따라 천천히 굴러간다. 다인이 마음속에 담아 둔 다음 말을 꺼낼 때까지, 재촉하지 않고 조용히 곁을 지킨다.*

---

### `tour_dain_11_b`
- 배경: `gym.png`
- 다음: `tour_dain_12`

- 캐릭터: `dain_normal.png`
**다인**: 예전엔 말이야, 내 삶에서 배구공 하나 빠지면 나라는 사람도 껍데기만 남고 텅 비어 버리는 줄 알았거든. 근데... 너 만나고 나서는 생각이 좀 달라졌어.

---

### `tour_dain_12`
- 배경: `gym.png`
- 다음: `tour_dain_13`

- 캐릭터: `dain_sad.png`
**다인**: 정확히 뭐가 어떻게 바뀐 건진 말로 설명 못 하겠는데 이제는 코트 밖으로 걸어 나와도 너랑 하고 싶은 얘기가 자꾸만 생겨.

---

### `tour_dain_13`
- 배경: `gym.png`
- 다음: `tour_dain_end`

- 캐릭터: `dain_normal.png`
**{name}**: 그게 왜 달라진 건데?

---

### `tour_dain_end`
- 배경: `gym.png`
- 스탯: Dain +3
- 다음: `tour_dain_freetalk`

- 캐릭터: `dain_shy.png`
**다인**: *다인이 고개를 들어 내 눈을 똑바로 바라보며 해사하게 웃는다.* 당연하지. 이젠 코트 밖에서도 나 혼자 덩그러니 있는 게 아니잖아.

---

### `tour_dain_freetalk`
- 배경: `gym.png`
- 다음: `tour_dain_end_2`

- 캐릭터: `dain_normal.png`
**다인**: *발끝으로 데구르르 굴러온 배구공을 운동화 밑창으로 가볍게 밟아 세운다.* 모처럼 축제 날 점심시간인데, 우리 이대로 헤어지기엔 너무 아쉽잖아.

---

### `tour_dain_end_2`
- 배경: `gym.png`
- 다음: `after5_start`

- 캐릭터: `dain_shy.png`
**{name}**: *다인은 아팠던 무릎을 주무르는 대신, 배구공의 가죽 표면 위에 손바닥을 가만히 얹고 내 발치로 공을 부드럽게 굴려 보낸다.*

---

### `tour_seo_skip`
- 배경: `school_festival.webp`
- 호감분기: Seoyeon
  - [0+] → `tour_seo_low`
  - [-19 이상] → `tour_seo_low`
  - [기본] → `tour_seo_neg`
- 다음: `tour_seo_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `tour_seo_low`
- 배경: `school_hallway.png`
- 다음: `after5_start`

- 캐릭터: `seyoun_normal.png`
**서연**: *점심시간의 소란스러운 복도 끝에서 서연과 마주친다. 서연은 메고 있던 가방끈을 고쳐 쥐며 소리 없이 반 걸음 옆으로 비켜선다.* 오늘은 각자 둘러보자. 학생회실에 아직 정리할 서류가 남았어.

---

### `tour_seo_neg`
- 배경: `school_festival.webp`
- 다음: `after5_start`

- 캐릭터: `seyoun_pout.png`
**서연**: *서연은 주머니 속의 열쇠고리를 끝내 꺼내지 않는다.* 오후 코스는 각자 도는 게 좋겠어.

---

### `tour_yuna_skip`
- 배경: `yuna_hideout_day.webp`
- 호감분기: Yuna
  - [0+] → `tour_yuna_low`
  - [-19 이상] → `tour_yuna_low`
  - [기본] → `tour_yuna_neg`
- 다음: `tour_yuna_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `tour_yuna_low`
- 배경: `annex_exhibit_hallway.png`
- 다음: `after5_start`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *굳게 잠긴 별관 문 앞에서 걸음을 멈춘 지 얼마 지나지 않아, 휴대폰 화면 위로 유나의 짧은 메시지가 떠오른다.* 오늘은 혼자 있고 싶어. *차갑게 닫힌 손잡이를 한 번 내려다보고는 발길을 돌려 복도로 걸어 나온다.*

---

### `tour_yuna_neg`
- 배경: `annex_exhibit_hallway.png`
- 다음: `after5_start`

- 캐릭터: `yuna_bored.png`
**유나**: *유나가 안쪽에서 별관 문고리를 걸어 잠근다.* 미안, 오늘은 이 안까지 따라오지 마.

---

### `tour_dain_skip`
- 배경: `gym.png`
- 호감분기: Dain
  - [0+] → `tour_dain_low`
  - [-19 이상] → `tour_dain_low`
  - [기본] → `tour_dain_neg`
- 다음: `tour_dain_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `tour_dain_low`
- 배경: `gym.png`
- 다음: `after5_start`

- 캐릭터: `dain_normal.png`
**다인**: *체육관 입구에서 마주친 다인은 배구공을 옆구리에 낀 채 내 시선을 피해 코트 안쪽으로 몸을 돌린다.* 미안, 오늘은 혼자 연습 좀 해야 해. 나중에 보자.

---

### `tour_dain_neg`
- 배경: `gym.png`
- 다음: `after5_start`

- 캐릭터: `dain_angry.png`
**다인**: *다인이 체육관 벽면의 조명 스위치를 차례로 내린다.* 오늘 점심 내기는 빼자. 나 먼저 들어갈게.

---

## 5일차 — 방과후 `day5_3_afterschool`

### `after5_start`
- 다음: `day5_haeun_guilt_gate`

<!-- i18n -->

---

### `day5_haeun_guilt_gate`
- 분기:
  - [`day5_haeun_guilt_done`] → `day5_haeun_route_gate`
  - [`haeun_cheer_seen`] → `day5_haeun_guilt_check`
  - [기본] → `day5_haeun_route_gate`

---

### `day5_haeun_guilt_check`
- 분기:
  - [`messaged_day5_haeun_personal`] → `day5_haeun_guilt_affinity`
  - [기본] → `day5_haeun_route_gate`

---

### `day5_haeun_guilt_affinity`
- 호감분기: Haeun
  - [8+] → `day5_haeun_guilt_1`
  - [기본] → `day5_haeun_route_gate`
- 다음: `day5_haeun_route_gate`

---

### `day5_haeun_guilt_1`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_guilt_choice`

- 캐릭터: `haeun_sad.png`
**하은**: *노을이 스며드는 복도 끝에서 하은이 가방끈을 두 손으로 꼭 쥐고 서 있다.* 선배를 진심으로 응원한다고 했던 말, 거짓말은 아니었어요. 그런데 그렇게 말했던 제가... 지금은 서연 선배 얼굴을 똑바로 못 보겠어요.

---

### `day5_haeun_guilt_choice`
- 배경: `school_hallway.png`
- 선택지:
  1. "응원한다던 말은 어디 갔냐고 묻는다" → `day5_haeun_guilt_down` | Haeun -2
  2. "미안한 마음도, 여기 있고 싶은 마음도 둘 다 괜찮아." → `day5_haeun_guilt_up` | Haeun +3
  3. "서두르지 마. 생각할 시간 줄게." → `day5_haeun_guilt_up` | Haeun +2
  4. "*한숨만 쉰다.*" → `day5_haeun_guilt_down` | Haeun -3

- 캐릭터: `haeun_sad.png`
**하은**: *하은이 작게 숨을 고르고 조심스레 고개를 든다.* 그분께 너무 미안한데, 동시에 선배 옆에 계속 있고 싶은 마음도 안 사라져서 더 속상해요. ...이런 제가 너무 이기적이고 이상하죠?

---

### `day5_haeun_guilt_up`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_guilt_done`
- 다음: `day5_haeun_route_gate`

- 캐릭터: `haeun_relieved.png`
**하은**: *하은의 붉어진 눈가가 조금씩 부드럽게 풀린다.* …고마워요, 선배. 미안한 마음은 미안한 대로 안고 가면서 이제 제 진짜 마음도 억지로 속이지 않을게요.

---

### `day5_haeun_guilt_down`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_guilt_done`
- 다음: `day5_haeun_route_gate`

- 캐릭터: `haeun_firm.png`
**하은**: *하은이 손가락 마디가 하얘지도록 가방끈을 더 세게 쥔다.* …맞아요. 제 입으로 먼저 꺼냈던 말이었으니까요. 죄송해요.

---

### `day5_haeun_route_gate`
- 분기:
  - [`day5_haeun_route_offered`] → `after5_original_start`
  - [`messaged_day5_haeun_personal`] → `day5_haeun_route_affinity`
  - [기본] → `after5_original_start`

---

### `day5_haeun_route_affinity`
- 호감분기: Haeun
  - [45+] → `day5_haeun_route_rival`
  - [기본] → `after5_original_start`

---

### `day5_haeun_route_rival`
- 실시간 라이벌 분기:
  - [`Seoyeon`] → `day5_haeun_offer_seoyeon`
  - [`Yuna`] → `day5_haeun_offer_yuna`
  - [`Dain`] → `day5_haeun_offer_dain`
  - [`Teacher`] → `day5_haeun_offer_teacher`
  - [`Nurse`] → `day5_haeun_offer_nurse`

---

### `day5_haeun_offer_seoyeon`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_route_choice`

- 캐릭터: `haeun_worried.png`
**하은**: 선배, 원래 서연 선배가 있는 쪽으로 가려던 거 아니셨어요? 지금 저랑 더 같이 있고 싶다는 게 무슨 뜻이에요? 솔직히 저는 그동안 선배가 서연 선배랑 잘되시길 바랐는데... 지금은 그 응원하던 마음이 자꾸 흔들려서 제 자신이 미워요.

---

### `day5_haeun_offer_yuna`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_route_choice`

- 캐릭터: `haeun_worried.png`
**하은**: 선배, 원래 유나 선배가 있는 쪽으로 가려던 거 아니셨어요? 지금 저랑 더 같이 있고 싶다는 게 무슨 뜻이에요? 솔직히 저는 그동안 선배가 유나 선배랑 잘되시길 바랐는데... 지금은 그 응원하던 마음이 자꾸 흔들려서 제 자신이 미워요.

---

### `day5_haeun_offer_dain`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_route_choice`

- 캐릭터: `haeun_worried.png`
**하은**: 선배, 원래 다인 선배가 있는 쪽으로 가려던 거 아니셨어요? 지금 저랑 더 같이 있고 싶다는 게 무슨 뜻이에요? 솔직히 저는 그동안 선배가 다인 선배랑 잘되시길 바랐는데... 지금은 그 응원하던 마음이 자꾸 흔들려서 제 자신이 미워요.

---

### `day5_haeun_offer_teacher`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_route_choice`

- 캐릭터: `haeun_worried.png`
**하은**: 선배, 원래 담임선생님이 계신 쪽으로 가려던 거 아니셨어요? 지금 저랑 더 같이 있고 싶다는 게 무슨 뜻이에요? 솔직히 저는 선배가 담임선생님 쪽으로 걸어가는 걸 조용히 응원하려고 했는데... 지금은 그 마음이 흔들려서 싫어요.

---

### `day5_haeun_offer_nurse`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_route_choice`

- 캐릭터: `haeun_worried.png`
**하은**: 선배, 원래 보건선생님이 계신 쪽으로 가려던 거 아니셨어요? 지금 저랑 더 같이 있고 싶다는 게 무슨 뜻이에요? 솔직히 저는 선배가 보건선생님 쪽으로 걸어가는 걸 조용히 응원하려고 했는데... 지금은 그 마음이 흔들려서 싫어요.

---

### `day5_haeun_route_choice`
- 배경: `school_hallway.png`
- 플래그: `day5_haeun_route_offered`
- 선택지:
  1. "하은과 시간을 보낸다" → `day5_haeun_choose_rival` | 플래그: `haeun_route_selected`
  2. "원래 마음 둔 사람에게 돌아간다" → `after5_original_start`

- 캐릭터: `haeun_worried.png`
**하은**: 선배가 지금 제 손을 잡으면, 원래 마음 두셨던 분하고는 예전처럼 지내기 어려워지잖아요. *하은이 손에 쥐고 있던 진행표를 작게 접으며 떨리는 눈으로 나를 올려다본다.* 대답하시기 전에, 후회 안 하실지 딱 한 번만 더 생각해 주세요.

---

### `day5_haeun_choose_rival`
- 실시간 라이벌 분기:
  - [`Seoyeon`] → `day5_haeun_leave_seoyeon`
  - [`Yuna`] → `day5_haeun_leave_yuna`
  - [`Dain`] → `day5_haeun_leave_dain`
  - [`Teacher`] → `day5_haeun_leave_teacher`
  - [`Nurse`] → `day5_haeun_leave_nurse`

---

### `day5_haeun_leave_seoyeon`
- 배경: `school_hallway.png`
- 플래그: `haeun_switch_declared`
- 스탯: Haeun +20, Seoyeon -30
- 다음: `day5_haeun_switch_seoyeon_entry`

- 캐릭터: `haeun_firm.png`
**{name}**: *서연에게 꼭 할 말이 있다고 연락해 복도 창가에서 마주 선다. 뒤따라온 하은도 내 반걸음 옆에서 조심스레 걸음을 멈춘다.* 미안해, 내가 앞으로 더 깊게 알아가고 싶은 사람은 하은이야. 오늘은 하은이랑 같이 갈게. 숨기지 않고 내 입으로 직접 말하고 싶었어.

---

### `day5_haeun_switch_seoyeon_entry`
- 분기:
  - [`haeun_switch_declared`] → `day5_haeun_switch_seoyeon_response`
  - [기본] → `day5_haeun_private_1`

---

### `day5_haeun_switch_seoyeon_response`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_switch_seoyeon_haeun`

- 캐릭터: `seyoun_worried.png`
**서연**: *서연의 눈동자가 차갑게 흔들린다.* ...그 말을 지금 하은이까지 데려온 자리에서 꺼내네. 대체 언제부터 그렇게 마음 정하고 있었던 거야?

---

### `day5_haeun_switch_seoyeon_haeun`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_switch_seoyeon_group_talk`

- 캐릭터: `haeun_firm.png`
**하은**: *하은이 내 옆에 나란히 서서 떨리는 숨을 삼키며 서연 쪽을 바라본다.* 저도 선배랑 더 이야기해 보고 싶어요. 미안하지 않다고는 절대 못 해요. 그래도 제 마음을 거짓말로 덮기는 싫어요. 서연 선배 말씀은 다 듣고 갈게요.

---

### `day5_haeun_switch_seoyeon_group_talk`
- 배경: `school_hallway.png`
- 타입: `group_free_talk`
- 다음: `day5_haeun_private_1`

- 캐릭터: `없음`
**서연**: 내가 납득할 수 있게 제대로 말해 줘. 오늘 갑자기 흔들린 건지, 아니면 전부터 생각하고 있던 건지.

---

### `day5_haeun_leave_yuna`
- 배경: `school_hallway.png`
- 플래그: `haeun_switch_declared`
- 스탯: Haeun +20, Yuna -30
- 다음: `day5_haeun_switch_yuna_entry`

- 캐릭터: `haeun_firm.png`
**{name}**: *유나에게 꼭 할 말이 있다고 연락해 복도 창가에서 마주 선다. 뒤따라온 하은도 내 반걸음 옆에서 조심스레 걸음을 멈춘다.* 미안해, 내가 앞으로 더 깊게 알아가고 싶은 사람은 하은이야. 오늘은 하은이랑 같이 갈게. 숨기지 않고 내 입으로 직접 말하고 싶었어.

---

### `day5_haeun_switch_yuna_entry`
- 분기:
  - [`haeun_switch_declared`] → `day5_haeun_switch_yuna_response`
  - [기본] → `day5_haeun_private_1`

---

### `day5_haeun_switch_yuna_response`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_switch_yuna_haeun`

- 캐릭터: `yuna_worried.png`
**유나**: *유나의 손끝이 책 표지를 하얗게 움켜쥔다.* ...나한테 먼저 단둘이 말할 시간은 없었어? 이렇게 둘이 같이 서서 말하면, 내가 아무 말 없이 보내 줄 거라고 생각했어?

---

### `day5_haeun_switch_yuna_haeun`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_switch_yuna_group_talk`

- 캐릭터: `haeun_firm.png`
**하은**: *하은이 내 옆에 서서 유나 쪽을 똑바로 바라본다.* 저도 선배랑 더 이야기해 보고 싶어요. 미안하지 않다고는 절대 못 해요. 그래도 제 마음을 거짓말로 덮기는 싫어요. 유나 선배 말씀은 다 듣고 갈게요.

---

### `day5_haeun_switch_yuna_group_talk`
- 배경: `school_hallway.png`
- 타입: `group_free_talk`
- 다음: `day5_haeun_private_1`

- 캐릭터: `없음`
**유나**: 시선 피하지 말고 내 눈 똑바로 보고 얘기해 줘.

---

### `day5_haeun_leave_dain`
- 배경: `school_hallway.png`
- 플래그: `haeun_switch_declared`
- 스탯: Haeun +20, Dain -30
- 다음: `day5_haeun_switch_dain_entry`

- 캐릭터: `haeun_firm.png`
**{name}**: *다인에게 꼭 할 말이 있다고 연락해 복도 창가에서 마주 선다. 뒤따라온 하은도 내 반걸음 옆에서 조심스레 걸음을 멈춘다.* 미안해, 내가 앞으로 더 깊게 알아가고 싶은 사람은 하은이야. 오늘은 하은이랑 같이 갈게. 숨기지 않고 내 입으로 직접 말하고 싶었어.

---

### `day5_haeun_switch_dain_entry`
- 분기:
  - [`haeun_switch_declared`] → `day5_haeun_switch_dain_response`
  - [기본] → `day5_haeun_private_1`

---

### `day5_haeun_switch_dain_response`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_switch_dain_haeun`

- 캐릭터: `dain_angry.png`
**다인**: *다인이 기가 막힌 듯 헛웃음을 삼키며 나를 노려본다.* 야, 하은이까지 옆에 데려와서 그렇게 말하면, 내가 여기서 아 그러냐고 가만히 고개 끄덕일 줄 알았어?

---

### `day5_haeun_switch_dain_haeun`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_switch_dain_group_talk`

- 캐릭터: `haeun_firm.png`
**하은**: *하은이 내 옆에 서서 다인 쪽을 바라본다.* 저도 선배랑 더 이야기해 보고 싶어요. 미안하지 않다고는 절대 못 해요. 그래도 제 마음을 거짓말로 덮기는 싫어요. 다인 선배 말씀은 다 듣고 갈게요.

---

### `day5_haeun_switch_dain_group_talk`
- 배경: `school_hallway.png`
- 타입: `group_free_talk`
- 다음: `day5_haeun_private_1`

- 캐릭터: `없음`
**다인**: 그래, 내가 여기서 똑똑히 듣고 있으니까 왜 그렇게 정했는지 숨기지 말고 다 말해 봐.

---

### `day5_haeun_leave_teacher`
- 배경: `school_hallway.png`
- 플래그: `haeun_switch_declared`
- 스탯: Haeun +20, Teacher -30
- 다음: `day5_haeun_switch_teacher_entry`

- 캐릭터: `haeun_firm.png`
**{name}**: *담임선생님께 드릴 말씀이 있다고 전해 복도 창가에서 마주 선다. 하은도 내 옆에서 조심스레 걸음을 멈춘다.* 선생님, 저는 앞으로 하은이랑 더 만나 보고 싶어요. 오늘은 하은이랑 같이 갈게요. 선생님께도 피하지 않고 직접 말씀드리고 싶었어요.

---

### `day5_haeun_switch_teacher_entry`
- 분기:
  - [`haeun_switch_declared`] → `day5_haeun_switch_teacher_response`
  - [기본] → `day5_haeun_private_1`

---

### `day5_haeun_switch_teacher_response`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_switch_teacher_haeun`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *담임선생님이 쥐고 있던 서류철을 내리며 차분하지만 뼈 있는 목소리로 묻는다.* 네 뜻은 알았어. 그런데 나는 지금 너한테 일방적으로 통보받으려고 이 자리에 나온 거니?

---

### `day5_haeun_switch_teacher_haeun`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_switch_teacher_group_talk`

- 캐릭터: `haeun_firm.png`
**하은**: *하은이 내 옆에 서서 담임선생님 쪽을 바라본다.* 저도 선배랑 더 이야기해 보고 싶어요. 죄송하지 않다고는 못 해요. 그래도 제 마음을 속이기는 싫어요. 선생님 말씀은 끝까지 듣고 갈게요.

---

### `day5_haeun_switch_teacher_group_talk`
- 배경: `school_hallway.png`
- 타입: `group_free_talk`
- 다음: `day5_haeun_private_1`

- 캐릭터: `없음`
**담임선생님**: 네 교우 관계나 선택을 내게 허락받아야 한다는 얘기는 아닐 테고. 나를 굳이 불러서 하고 싶었던 말이 뭔지 직접 들어 보자.

---

### `day5_haeun_leave_nurse`
- 배경: `school_hallway.png`
- 플래그: `haeun_switch_declared`
- 스탯: Haeun +20, Nurse -30
- 다음: `day5_haeun_switch_nurse_entry`

- 캐릭터: `haeun_firm.png`
**{name}**: *보건선생님께 드릴 말씀이 있다고 전해 복도 창가에서 마주 선다. 하은도 내 옆에서 조심스레 걸음을 멈춘다.* 선생님, 저는 앞으로 하은이랑 더 만나 보고 싶어요. 오늘은 하은이랑 같이 갈게요. 선생님께도 피하지 않고 직접 말씀드리고 싶었어요.

---

### `day5_haeun_switch_nurse_entry`
- 분기:
  - [`haeun_switch_declared`] → `day5_haeun_switch_nurse_response`
  - [기본] → `day5_haeun_private_1`

---

### `day5_haeun_switch_nurse_response`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_switch_nurse_haeun`

- 캐릭터: `nurse_worried.png`
**보건선생님**: *보건선생님이 가만히 손바닥을 들어 내 말을 멈춰 세운다.* 잠깐만. 네가 어떻게 마음 정했는지는 알겠는데 내 대답도 듣고 갈 거지?

---

### `day5_haeun_switch_nurse_haeun`
- 배경: `school_hallway.png`
- 다음: `day5_haeun_switch_nurse_group_talk`

- 캐릭터: `haeun_firm.png`
**하은**: *하은이 내 옆에 서서 보건선생님 쪽을 바라본다.* 저도 선배랑 더 이야기해 보고 싶어요. 죄송하지 않다고는 못 해요. 그래도 제 마음을 속이기는 싫어요. 선생님 말씀은 끝까지 듣고 갈게요.

---

### `day5_haeun_switch_nurse_group_talk`
- 배경: `school_hallway.png`
- 타입: `group_free_talk`
- 다음: `day5_haeun_private_1`

- 캐릭터: `없음`
**보건선생님**: 마침 하은이도 여기 같이 서 있으니까, 우리 둘 다 분명하게 알아들을 수 있게 얘기해 봐.

---

### `day5_haeun_private_1`
- 배경: `school_hallway.png`
- 타입: `free_talk`
- 다음: `day5_haeun_walk`
- 컨텍스트: "5일차 방과후 복도. 주인공이 하은과 시간을 보내겠다고 밝힌 직후다. 하은과 단둘이 대화한다. 이전 대화에서 실제로 나온 말만 기억한다. 존댓말과 선배 호칭을 유지한다. 선택 전에는 연애를 확정하지 않는다. 하은을 선택한 뒤에도 사귀기로 합의한 상태는 아니며 현재 대화와 호감도에 따라 마음을 판단한다."
- 성격: "하은과 단둘이 대화한다. 이전 대화에서 실제로 나온 말만 기억한다. 존댓말과 선배 호칭을 유지한다. 선택 전에는 연애를 확정하지 않는다. 하은을 선택한 뒤에도 사귀기로 합의한 상태는 아니며 현재 대화와 호감도에 따라 마음을 판단한다. 하은은 미안한 마음과 선택받은 설렘이 섞여 있다. 이전 대화에서 실제로 나온 말만 근거로 삼고 전에 건넸던 응원의 말은 부정하지 않으면서 지금 마음을 조심스럽게 꺼낸다. 아직 사귀기로 하지 않았다."

- 캐릭터: `haeun_shy.png`
**하은**: 그럼 우리 조금만 더 걸으면서 얘기해요. 선배가 지금 저를 어떤 마음으로 보고 계신지 듣고 싶어요. 저도... 숨겨 뒀던 제 마음을 천천히 말씀드려 볼게요.

---

### `day5_haeun_walk`
- 배경: `park.png`
- 다음: `day5_haeun_private_2`

- 캐릭터: `haeun_normal.png`
**하은**: *학생회실 뒷정리를 마친 뒤, 노을이 내려앉은 거리를 나란히 걸어 공원에 닿는다. 하은이 나무 벤치 한쪽에 가방을 살며시 내려놓는다.* 선배, 여기 앉아요. 아까 복도에서 다 못 한 얘기, 마저 더 듣고 싶어요.

---

### `day5_haeun_private_2`
- 배경: `park.png`
- 타입: `free_talk`
- 다음: `day5_haeun_apology_gate`
- 컨텍스트: "5일차 해 질 무렵 공원 벤치. 하은이 사귈지 말지 마음을 정하려는 자리다. 하은과 단둘이 대화한다. 이전 대화에서 실제로 나온 말만 기억한다. 존댓말과 선배 호칭을 유지한다. 선택 전에는 연애를 확정하지 않는다. 하은을 선택한 뒤에도 사귀기로 합의한 상태는 아니며 현재 대화와 호감도에 따라 마음을 판단한다."
- 성격: "하은과 단둘이 대화한다. 이전 대화에서 실제로 나온 말만 기억한다. 존댓말과 선배 호칭을 유지한다. 선택 전에는 연애를 확정하지 않는다. 하은을 선택한 뒤에도 사귀기로 합의한 상태는 아니며 현재 대화와 호감도에 따라 마음을 판단한다. 하은은 미안함을 지우지 않은 채 마음을 정하려 한다. 이전 대화에서 실제로 나온 말만 기억하고 상대가 자기 마음을 어떻게 받아 주는지 보며 대답한다. 합의하기 전에는 연인으로 대하지 않는다."

- 캐릭터: `haeun_shy.png`
**하은**: 오늘 축제가 끝나고 다음에 만날 때도, 선배랑 이렇게 나란히 앉아서 이야기할 수 있으면 좋겠어요. ...선배는 저랑 어떤 사이가 되고 싶으세요?

---

### `day5_haeun_apology_gate`
- 호감분기: Haeun
  - [100+] → `day5_haeun_apology_router`
  - [기본] → `day5_haeun_romance_check`
- 다음: `day5_haeun_romance_check`

---

### `day5_haeun_apology_router`
- 실시간 라이벌 분기:
  - [`Seoyeon`] → `day5_ending_haeun_apology_seoyeon`
  - [`Yuna`] → `day5_ending_haeun_apology_yuna`
  - [`Dain`] → `day5_ending_haeun_apology_dain`
  - [`Teacher`] → `day5_ending_haeun_apology_teacher`
  - [`Nurse`] → `day5_ending_haeun_apology_nurse`
  - [기준 미달] → `day5_haeun_romance_check`

---

### `day5_ending_haeun_apology_seoyeon`
- 배경: `park.png`
- 다음: `day5_haeun_romance_check`

- 캐릭터: `haeun_smile.png`
**하은**: *하은이 맑게 웃으며 노을 진 학교 지붕 쪽을 한 번 돌아본다.* 서연 선배한테는 내일 제가 따로 찾아가서 정식으로 인사드릴게요. 미안한 마음은 피하지 않고 안은 채로, 이제 당당하게 선배 옆에 있을래요.

---

### `day5_ending_haeun_apology_yuna`
- 배경: `park.png`
- 다음: `day5_haeun_romance_check`

- 캐릭터: `haeun_smile.png`
**하은**: *하은이 맑게 웃으며 노을 진 학교 지붕 쪽을 한 번 돌아본다.* 유나 선배한테는 내일 제가 따로 찾아가서 정식으로 인사드릴게요. 미안한 마음은 피하지 않고 안은 채로, 이제 당당하게 선배 옆에 있을래요.

---

### `day5_ending_haeun_apology_dain`
- 배경: `park.png`
- 다음: `day5_haeun_romance_check`

- 캐릭터: `haeun_smile.png`
**하은**: *하은이 맑게 웃으며 노을 진 학교 지붕 쪽을 한 번 돌아본다.* 다인 선배한테는 내일 제가 따로 찾아가서 정식으로 인사드릴게요. 미안한 마음은 피하지 않고 안은 채로, 이제 당당하게 선배 옆에 있을래요.

---

### `day5_ending_haeun_apology_teacher`
- 배경: `park.png`
- 다음: `day5_haeun_romance_check`

- 캐릭터: `haeun_smile.png`
**하은**: *하은이 맑게 웃으며 노을 진 학교 지붕 쪽을 한 번 돌아본다.* 담임선생님께는 내일 제가 따로 찾아뵙고 인사드릴게요. 미안한 마음은 피하지 않고 안은 채로, 이제 당당하게 선배 옆에 있을래요.

---

### `day5_ending_haeun_apology_nurse`
- 배경: `park.png`
- 다음: `day5_haeun_romance_check`

- 캐릭터: `haeun_smile.png`
**하은**: *하은이 맑게 웃으며 노을 진 학교 지붕 쪽을 한 번 돌아본다.* 보건선생님께는 내일 제가 따로 찾아뵙고 인사드릴게요. 미안한 마음은 피하지 않고 안은 채로, 이제 당당하게 선배 옆에 있을래요.

---

### `day5_haeun_romance_check`
- 호감분기: Haeun
  - [100+] → `day5_ending_haeun`
  - [기본] → `day5_haeun_fallback`

---

### `day5_haeun_fallback`
- 배경: `park.png`
- 다음: `after5_original_start`

- 캐릭터: `haeun_sad.png`
**하은**: 오늘 제 이야기 끝까지 들어 주셔서 고마워요, 선배. 선배를 향한 마음이 없는 건 아닌데요... 자꾸만 그분 얼굴이 눈에 밟혀요. 미안한 마음이 아직 너무 커서, 지금 선배 손을 잡고 사귀겠다는 대답은 도저히 못 하겠어요. *하은이 벤치에서 일어나 가방을 챙겨 멘다. 조심스레 고개 숙여 인사하고는 홀로 학교 쪽으로 발길을 돌린다.*

---

### `after5_original_start`
- 배경: `school_hallway.png`
- BGM: `sunset1.mp3`
- 분기:
  - [`day4_counteroffer_penalty_deferred`] → `after5_co_start`
  - [기본] → `after5_normal_start`

- 캐릭터: `없음`

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
**{name}**: *소란스럽던 축제가 막을 내릴 무렵, 노을이 스며드는 복도에서 내가 끝내 선택하지 못한 두 사람과 차례로 마주친다.*

---

### `after5_co_start`
- 배경: `school_hallway.png`
- BGM: `sunset1.mp3`
- 다음: `after5_co_abandoned_branch`

- 캐릭터: `없음`
**{name}**: *축제 인파가 빠져나간 방과 후 복도에, 오늘 아침 숨 막히는 대면을 치렀던 사람들이 다시 모여 서 있다.*

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
**서연**: *서연은 안경테를 고쳐 쓰려다 말고 조용히 손을 내린다.* 학생회 마감 일정표는 부원들한테 다 돌렸어.

---

### `after5_co_seo_2`
- 배경: `school_hallway.png`
- 다음: `after5_co_tempter_branch`

- 캐릭터: `seyoun_pout.png`
**서연**: 오늘 너한테 더 할 말은 없어. 그만 가 봐.

---

### `after5_co_yuna_1`
- 배경: `library_old.png`
- 다음: `after5_co_yuna_2`

- 캐릭터: `yuna_sad.png`
**유나**: *유나는 노트에 꽂혀 있던 책갈피를 빼내어 가방 깊숙이 넣는다.* 문예부 게시판 자리는 전부 비워 뒀어.

---

### `after5_co_yuna_2`
- 배경: `library_old.png`
- 다음: `after5_co_tempter_branch`

- 캐릭터: `yuna_angry.png`
**유나**: ...오늘은 내 뒤 따라오지 마.

---

### `after5_co_dain_1`
- 배경: `gym.png`
- 다음: `after5_co_dain_2`

- 캐릭터: `dain_sad.png`
**다인**: *다인이 배구공을 보관함 가장 깊은 구석으로 밀어 넣는다.* 오후 이벤트 파트너 명단에선 네 이름 지웠어.

---

### `after5_co_dain_2`
- 배경: `gym.png`
- 다음: `after5_co_tempter_branch`

- 캐릭터: `dain_angry.png`
**다인**: 잘 가라. 지금은 네 얼굴 보고 웃어 주기가 좀 그래.

---

### `after5_co_teacher_1`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `after5_co_teacher_2`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *선생님이 소리 없이 출석부를 덮는다.* 오후 행사 마무리는 다른 반 선생님께 인계해 뒀어.

---

### `after5_co_teacher_2`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `after5_co_tempter_branch`

- 캐릭터: `teacher_angry.png`
**담임선생님**: 개인 상담은 다음 주에 정식으로 시간을 다시 잡자. 오늘은 학급 행사 정리부터 마칠게.

---

### `after5_co_nurse_1`
- 배경: `nurse_room.png`
- 다음: `after5_co_nurse_2`

- 캐릭터: `nurse_worried.png`
**보건선생님**: *보건선생님이 진료 기록 차트를 서랍에 넣고 닫는다.* 오늘 상담은 여기까지로 할게.

---

### `after5_co_nurse_2`
- 배경: `nurse_room.png`
- 다음: `after5_co_tempter_branch`

- 캐릭터: `nurse_angry.png`
**보건선생님**: 몸이 아플 땐 언제든 보건실로 오고 남은 이야기는 다음 정식 상담 시간에 마저 나누자.

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
**서연**: *서연이 만지작거리던 옥상 열쇠고리를 주머니에 넣는다.* 어젯밤 네게 먼저 손 내밀었던 건 분명 나였어.

---

### `after5_co_tempter_seo_2`
- 배경: `school_hallway.png`
- 다음: `after5_waited_start_branch`

- 캐릭터: `seyoun_normal.png`
**서연**: 그래도 오늘 이 자리에서는 내가 먼저 널 붙잡지 않을게.

---

### `after5_co_tempter_yuna_1`
- 배경: `library_old.png`
- 다음: `after5_co_tempter_yuna_2`

- 캐릭터: `yuna_sad.png`
**유나**: *유나의 휴대폰 잠금화면에는 아직 어젯밤 별관 창가의 사진이 떠 있다.* 어제 널 별관으로 부른 건 나였어.

---

### `after5_co_tempter_yuna_2`
- 배경: `library_old.png`
- 다음: `after5_waited_start_branch`

- 캐릭터: `yuna_normal.png`
**유나**: 지금은 누구 뒤도 무리해서 따라가지 마. 그거면 돼.

---

### `after5_co_tempter_dain_1`
- 배경: `gym.png`
- 다음: `after5_co_tempter_dain_2`

- 캐릭터: `dain_sad.png`
**다인**: *다인이 느슨하게 풀린 무릎 테이핑 끝을 손바닥으로 꾹 눌러 붙인다.* 어젯밤 체육관에 남아 달라고 붙잡은 건 나야.

---

### `after5_co_tempter_dain_2`
- 배경: `gym.png`
- 다음: `after5_waited_start_branch`

- 캐릭터: `dain_normal.png`
**다인**: ...그러니까 오늘은 내가 먼저 네 이름 부르지 않을게.

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
**{name}**: *축제 마지막 순서가 끝나 가는 복도 창가에서, 홀로 서류를 정리하고 나오던 서연과 마주친다.*

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
- 다음: `after5_farewell_seo_high_2`

<!-- i18n -->

---

### `after5_farewell_seo_high_2`
- 배경: `school_hallway.png`
- 다음: `after5_farewell_seo_6_b`

- 캐릭터: `seyoun_sad.png`
**서연**: *서연의 눈매가 붉은 노을빛을 받아 고요하게 빛난다.* 네가 누구를 선택했는지는 알아. 그래도 지난 나흘 동안 내가 널 좋아했던 시간까지 없던 일로 지우진 않을게.

---

### `after5_farewell_seo_2`
- 배경: `school_hallway.png`
- 제외조건: `route_seoyeon`
- 다음: `after5_farewell_seo_3`

- 캐릭터: `seyoun_normal.png`
**서연**: 이런 순간엔 내가 어떤 얼굴로 뭐라고 말해 주면 좋겠어? ...아니, 됐어. 이건 네가 대답해 줄 몫이 아니네. *서연이 창밖으로 시선을 던지며 길게 숨을 내쉰다.*

---

### `after5_farewell_seo_3`
- 배경: `school_hallway.png`
- 제외조건: `route_seoyeon`
- 다음: `after5_farewell_seo_4`

- 캐릭터: `seyoun_normal.png`
**서연**: 그냥 모른 척 스쳐 지나갈까도 생각했는데 그렇게 도망치는 건 내 성격에 더 싫더라. 네가 내린 선택은 이미 다 알고 있으니까. *흘러내린 옆머리를 귀 뒤로 단정히 넘기며 가방끈을 고쳐 쥔다.*

---

### `after5_farewell_seo_4`
- 배경: `school_hallway.png`
- 제외조건: `route_seoyeon`
- 다음: `after5_farewell_seo_5`

- 캐릭터: `seyoun_normal.png`
**서연**: 어느 정도 예상은 했어. ...그래도 내가 먼저 겁먹고 포기한 것처럼 보이진 않았으면 좋겠어.

---

### `after5_farewell_seo_5`
- 배경: `school_hallway.png`
- 다음: `after5_farewell_seo_6`

- 캐릭터: `seyoun_normal.png`
**{name}**: 서연아...

---

### `after5_farewell_seo_6`
- 배경: `school_hallway.png`
- 제외조건: `route_seoyeon`
- 다음: `after5_farewell_seo_6_b`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연이 애써 또렷한 눈빛으로 나를 올려다본다.* 네가 고민 끝에 정한 길이니까 존중할게. 대신... 내 마음까지 오늘 당장 깔끔하게 정리된 건 아니야.

---

### `after5_farewell_seo_6_b`
- 배경: `school_hallway.png`
- Framing: `far`
- 다음: `after5_farewell_seo_7`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연은 끝내 뒤돌아보지 않은 채 어깨 높이로 손만 한 번 흔들어 보인다. 저녁 햇살에 반짝이던 손목 리본이 복도 저편으로 천천히 멀어진다.*

---

### `after5_farewell_seo_7`
- 배경: `school_hallway.png`
- 다음: `after5_farewell_yuna_check`

- 캐릭터: `없음`
**{name}**: *텅 빈 복도에 홀로 남겨진 채 발걸음을 떼지 못한다. 머리 위 계단 끝에서, 옥상 철문이 철컥 하고 잠기는 소리가 아득하게 내려온다.*

---

### `day5_ending_haeun`
- 배경: `ending_perfect_haeun.png`
- 플래그: `route_haeun`, `isDating_Haeun`, `ending_perfect`
- 다음: `day5_ending_haeun_epilogue`

- 캐릭터: `없음`
**하은**: *하은이 벤치 위에서 내 옆자리로 바짝 다가앉으며 살며시 내 소매 끝을 잡는다.* 저도 선배 많이 좋아해요. 우리... 오늘부터 사귀어요. 내일 아침엔 학생회 일 도와달라는 핑계 없어도, 그냥 보고 싶다고 선배 불러내도 되죠?

---

### `day5_ending_haeun_epilogue`
- 배경: `cafe.png`
- 다음: `day5_credits`

- 캐릭터: `haeun_relieved.png`
**하은**: *계절이 몇 번이나 바뀌어 하은도 마침내 고등학교를 졸업하고 성인이 된 어느 오후. 종소리가 울리는 카페 문을 열고 들어서자, 창가 자리에 앉아 있던 하은이 반갑게 손짓하며 맞은편 의자의 가방을 치운다.* 선배, 오늘은 제가 먼저 와서 자리 잡아 놨어요! 메뉴 주문은 선배 오면 같이 고르려고 꾹 참고 기다렸고요. 우리 오늘 뭐 마실래요?

---

### `after5_farewell_seo_skip`
- 배경: `school_hallway.png`
- 호감분기: Seoyeon
  - [0+] → `after5_farewell_seo_low`
  - [-19 이상] → `after5_farewell_seo_low`
  - [기본] → `after5_farewell_seo_neg`
- 다음: `after5_farewell_seo_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_farewell_seo_low`
- 배경: `school_hallway.png`
- 다음: `after5_farewell_yuna_check`

- 캐릭터: `seyoun_normal.png`
**서연**: *오후의 그림자가 길어진 복도에서 서연과 마주친다. 서연은 잠시 걸음을 멈추더니, 눈을 맞추지 않은 채 짧게 고개만 한 번 숙인다.* 네 마음이 어디로 향했는지는 알고 있어. ...더 붙잡고 할 말은 없어.

---

### `after5_farewell_seo_neg`
- 배경: `school_hallway.png`
- 다음: `after5_farewell_yuna_check`

- 캐릭터: `seyoun_pout.png`
**서연**: *서연은 내 옆을 스쳐 지나가며 고개조차 돌리지 않는다.*

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
**{name}**: *도서관 앞을 지날 무렵, 문가에서 기다리고 있던 유나가 소리 없이 다가와 내 손에 얇은 책 한 권을 건넨다.*

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
**유나**: *유나가 연보라색 책갈피 뒷면에 오늘의 날짜를 작게 적어 내 손에 쥐여 준다.* 이 노트의 마지막 장까지는... 그래도 네가 읽어 줘.

---

### `after5_farewell_yuna_high_2`
- 배경: `library_old.png`
- 다음: `after5_farewell_yuna_5b`

- 캐릭터: `yuna_sad.png`
**유나**: 네가 마음 정한 사람한테는 늦지 말고 가. ...그래도 내가 널 좋아하며 적었던 문장들은 지우지 않고 남겨 둘 거야.

---

### `after5_farewell_yuna_2`
- 배경: `library_old.png`
- 제외조건: `route_yuna`
- 다음: `after5_farewell_yuna_3`

- 캐릭터: `yuna_normal.png`
**{name}**: *표지를 열자 익숙한 연보라색 책갈피가 정갈하게 끼워져 있다. 책갈피 위로 만년필로 눌러쓴 짧은 한 줄이 눈에 들어온다.*

---

### `after5_farewell_yuna_3`
- 배경: `library_old.png`
- 제외조건: `route_yuna`
- 다음: `after5_farewell_yuna_4`

- 캐릭터: `yuna_smile.png`
**유나**: *유나의 가라앉은 눈동자가 내 얼굴을 가만히 담아낸다.* 네가 고른 사람한테는 절대 늦지 마. ...그래도 나는 아직 네가 많이 좋아.

---

### `after5_farewell_yuna_4`
- 배경: `library_old.png`
- Framing: `far`
- 제외조건: `route_yuna`
- 다음: `after5_farewell_yuna_5`

- 캐릭터: `yuna_normal.png`
**유나**: *유나는 내 대답을 기다리지 않고 도서관 안쪽 복도로 조용히 몸을 돌린다. 규칙적이던 구두 소리가 모퉁이 너머로 아스라이 사라진다.*

---

### `after5_farewell_yuna_5`
- 배경: `library_old.png`
- 다음: `after5_farewell_yuna_5b`

- 캐릭터: `yuna_smile.png` @ 0.35
**유나**: *유나의 기척이 사라진 자리에서 손안의 책갈피 문장을 다시 내려다본다. 마지막 글자 아래로 연보라색 잉크가 물기 머금은 듯 둥글게 번져 있다.* ...네가 내 이야기를 읽어 줘서, 정말 재밌었어.

---

### `after5_farewell_yuna_5b`
- 배경: `school_hallway.png`
- 다음: `after5_farewell_dain_check`

- 캐릭터: `없음`
**{name}**: *책을 가슴에 안은 채 조용히 복도로 걸어 나왔다.*

---

### `after5_farewell_yuna_skip`
- 배경: `school_hallway.png`
- 호감분기: Yuna
  - [0+] → `after5_farewell_yuna_low`
  - [-19 이상] → `after5_farewell_yuna_low`
  - [기본] → `after5_farewell_yuna_neg`
- 다음: `after5_farewell_yuna_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_farewell_yuna_low`
- 배경: `library_old.png`
- 다음: `after5_farewell_dain_check`

- 캐릭터: `yuna_normal.png`
**유나**: *도서관 앞 복도에서 유나와 눈이 마주친다. 유나는 읽고 있던 책을 가슴팍에 꼭 끌어안은 채 조용히 고개를 끄덕인다.* ...잘 가.

---

### `after5_farewell_yuna_neg`
- 배경: `library_old.png`
- Framing: `far`
- 다음: `after5_farewell_dain_check`

- 캐릭터: `yuna_bored.png`
**유나**: *유나는 책을 가슴에 안은 채 말 한마디 없이 복도 반대편으로 멀어진다.*

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
- 배경: `school_back.png`
- 다음: `after5_farewell_dain_affinity_check`

- 캐릭터: `dain_normal.png`
**{name}**: *체육관 입구 쪽에서 다인이 걸어 나온다. 언제나 성큼성큼 앞서가던 평소보다 보폭이 유난히 좁고 느리다.*

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
**다인**: *다인은 손안의 배구공을 바닥에 경쾌하게 한 번 튀겨 잡더니, 미련 없이 코트 흰 선 바깥에 내려놓는다.* 네가 내린 선택, 뭔지 다 알아.

---

### `after5_farewell_dain_high_2`
- 배경: `gym.png`
- 다음: `after5_farewell_dain_4_d`

- 캐릭터: `dain_sad.png`
**다인**: 그래도 내가 너 좋아하면서 설렜던 마음까지 없던 일로 치진 않을 거야! 가서 진짜 잘해 줘라, 안 그러면 내가 진짜 화낼 거니까.

---

### `after5_farewell_dain_2`
- 배경: `gym.png`
- 제외조건: `route_dain`
- 다음: `after5_farewell_dain_3`

- 캐릭터: `dain_normal.png`
**다인**: *내 앞에 멈춰 선 다인이 일부러 큰 소리로 바람을 불어 앞머리를 날린다.* 치, 진짜 아쉽다! ...그래도 아쉽다는 말 한마디로 쿨한 척 물러날 생각은 없거든.

---

### `after5_farewell_dain_3`
- 배경: `gym.png`
- 제외조건: `route_dain`
- 다음: `after5_farewell_dain_4`

- 캐릭터: `dain_laugh.png`
**{name}**: 다인아...

---

### `after5_farewell_dain_4`
- 배경: `gym.png`
- 제외조건: `route_dain`
- 다음: `after5_farewell_dain_4_b`

- 캐릭터: `dain_laugh.png`
**다인**: 네 마음이 누구한테 갔는지는 다 알아. 그래도 나 아직 너 좋아하는 건 내 마음이잖아. 마지막인데 그 정도는 내 입으로 말할 수 있지?

---

### `after5_farewell_dain_4_b`
- 배경: `gym.png`
- 다음: `after5_farewell_dain_4_c`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인이 가볍게 쥔 주먹으로 내 어깨를 툭 친다. 평소보다 힘이 빠져 있다.*

---

### `after5_farewell_dain_4_c`
- 배경: `gym.png`
- 다음: `after5_farewell_dain_4_d`

- 캐릭터: `dain_normal.png`
**다인**: 가서 진짜 잘해 줘라. 어영부영 굴면 내가 바로 다시 데려가 버릴 거니까.

---

### `after5_farewell_dain_4_d`
- 배경: `gym.png`
- Framing: `far`
- 다음: `after5_farewell_dain_5`

- 캐릭터: `dain_laugh.png`
**다인**: ...자, 이제 빨리 가 봐. 웃는 얼굴로 보내 주는 건 딱 여기까지만 할래. 내가 네 앞에서까지 센 척하면서 눈물 참을 필요는 없잖아. *다인이 돌아서서 배구공을 보관함에 쿵 밀어 넣고 무릎 보호대 끈을 세게 고쳐 맨다.*

---

### `after5_farewell_dain_5`
- 배경: `gym.png`
- 제외조건: `route_dain`
- 다음: `after5_farewell_dain_5b`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인은 떨리는 손끝으로 무릎 보호대 벨크로를 한 번 더 꾹 누르고는, 뒤돌아보지 않고 체육관 안으로 걸어 들어간다.*

---

### `after5_farewell_dain_5b`
- 배경: `school_back.png`
- 다음: `after5_sunset_1`

- 캐릭터: `없음`
**{name}**: *묵직해진 가슴을 쓸어내리며 체육관 앞을 떠나 학교 뒤편으로 향했다.*

---

### `after5_farewell_dain_skip`
- 배경: `school_hallway.png`
- 호감분기: Dain
  - [0+] → `after5_farewell_dain_low`
  - [-19 이상] → `after5_farewell_dain_low`
  - [기본] → `after5_farewell_dain_neg`
- 다음: `after5_farewell_dain_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_farewell_dain_low`
- 배경: `school_back.png`
- 다음: `after5_sunset_1`

- 캐릭터: `dain_normal.png`
**다인**: *체육관 앞길에서 걸어오던 다인이 두 걸음 떨어진 자리에서 우뚝 멈춰 선다.* 네가 누구를 골랐는지는 알겠어. 난 연습 마저 하러 먼저 들어갈게.

---

### `after5_farewell_dain_neg`
- 배경: `school_back.png`
- 다음: `after5_sunset_1`

- 캐릭터: `dain_angry.png`
**다인**: *다인은 운동 가방을 거칠게 고쳐 메고는 뒤도 돌아보지 않고 체육관 안으로 들어가 버린다.*

---

### `after5_sunset_1`
- 배경: `school_back.png`
- BGM: `confession.mp3`
- 다음: `after5_ending_check`

- 캐릭터: `없음`
**{name}**: *붉은 석양이 길게 내려앉은 교정 위로, 축제의 끝을 알리는 마지막 안내 방송이 아련하게 울려 퍼진다.*

---

### `after5_ending_check`
- 분기:
  - [`day4_counteroffer_penalty_deferred`] → `ending_start`
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
  - [`day4_confession_accepted`] → `ending_start`
  - [`day4_waited`] → `after5_hidden_route_choice`
  - [기본] → `after5_hidden_route_choice`

- 캐릭터: `없음`
**{name}**: *노을이 물든 교문 앞, 친구들과 약속한 공원으로 향하는 길과 학교에 남아 뒷정리를 마저 돕는 길이 눈앞에서 갈라진다.*

---

### `after5_hidden_route_choice`
- 배경: `school_back.png`
- 선택지:
  1. "공원으로 가 하던 일을 끝낸다" → `after5_last_chance_1`
  2. "담임선생님에게 돌아가 문예부 원고를 함께 정리한다" → `after5_hidden_teacher_affinity_check` | 플래그: `hidden_route_chosen_teacher`
  3. "보건선생님에게 돌아가 상담 기록을 함께 정리한다" → `after5_hidden_nurse_affinity_check` | 플래그: `hidden_route_chosen_nurse`

- 캐릭터: `없음`
**{name}**: *공원으로 향하는 가로수길과 교사동으로 돌아가는 복도가 나뉜다. 해가 완전히 저물기 전에, 오늘 내 마음이 누구에게 답할지 정해야 한다.*

---

### `after5_hidden_teacher_affinity_check`
- 배경: `room_school.png`
- 호감분기: Teacher
  - [60+] → `after5_hidden_teacher_high`
  - [40+] → `after5_hidden_teacher_mid`
  - [0+] → `after5_hidden_teacher_low`
  - [-19 이상] → `after5_hidden_teacher_low`
  - [기본] → `after5_hidden_teacher_neg`
- 다음: `after5_hidden_teacher_low`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_hidden_teacher_high`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `after5_hidden_return_to_park`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *선생님이 04번 합평본 뒷장의 비어 있는 의견란을 한 번 쓸어 보고는 갈색 봉투를 닫는다.* 네가 어느 문장에서 호흡을 멈췄는지 월요일에 들을게. 예쁜 말만 골라 적지는 마.

---

### `after5_hidden_teacher_mid`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `after5_hidden_return_to_park`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *04번 합평본 봉투의 번호를 눈으로 확인한다.* 네가 직접 읽은 대목까지만 솔직하게 표시해 줘. 남은 이야기는 문예부 시간에 다 같이 볼 거야.

---

### `after5_hidden_teacher_low`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `after5_hidden_return_to_park`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *원고 봉투를 서류철 안쪽에 깊숙이 갈무리한다.* 합평 의견은 정해진 시간에 문예부에서 일괄로 받을게. 오늘은 학급 행사 정리부터 마치자.

---

### `after5_hidden_teacher_neg`
- 배경: `room_school.png`
- 배경톤: `empty`
- 다음: `after5_hidden_return_to_park`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *선생님은 원고 봉투를 서류철에 넣고 덮개를 단호하게 닫는다.* 오늘은 학급 행사 마무리만 하자. 사적인 이야기는 여기서 끝이다.

---

### `after5_hidden_nurse_affinity_check`
- 배경: `nurse_room.png`
- 호감분기: Nurse
  - [60+] → `after5_hidden_nurse_high`
  - [40+] → `after5_hidden_nurse_mid`
  - [0+] → `after5_hidden_nurse_low`
  - [-19 이상] → `after5_hidden_nurse_low`
  - [기본] → `after5_hidden_nurse_neg`
- 다음: `after5_hidden_nurse_low`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_hidden_nurse_high`
- 배경: `nurse_room.png`
- 다음: `after5_hidden_return_to_park`

- 캐릭터: `nurse_smile.png`
**보건선생님**: *책상 위에 상담 종결 확인서와 투명 케이스에 든 응급처치 카드를 나란히 맞추어 놓는다.* 앞으로 마음이 버거운 날이 오면 혼자 끙끙 앓지 말고 오늘 네가 정한 순서대로 꼭 먼저 손 내밀어야 해.

---

### `after5_hidden_nurse_mid`
- 배경: `nurse_room.png`
- 다음: `after5_hidden_return_to_park`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *응급처치 카드 뒷면에 인쇄된 상담 예약 QR 코드를 가만히 짚는다.* 필요할 땐 언제든 여기로 예약해. 아프다는 거창한 구실을 일부러 만들 필요는 없으니까.

---

### `after5_hidden_nurse_low`
- 배경: `nurse_room.png`
- 다음: `after5_hidden_return_to_park`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *상담 기록지를 캐비닛 파일에 꽂아 넣고 예약표를 덮는다.* 다음 상담이 필요하면 학교 공식 절차로 신청해 줘. 이번 기록은 여기서 마무리할게.

---

### `after5_hidden_nurse_neg`
- 배경: `nurse_room.png`
- 다음: `after5_hidden_return_to_park`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *보건선생님은 상담 기록지를 파일에 넣고 예약표를 닫는다.* 다음부터는 공식 창구로만 신청해 줘. 오늘은 여기까지야.

---

### `after5_hidden_return_to_park`
- 배경: `park.png`
- 다음: `ending_start`

- 캐릭터: `없음`
**{name}**: *교내의 마지막 뒷정리를 모두 마치고 학교 밖 공원으로 발걸음을 옮긴다. 거리마다 걸려 있던 축제 깃발들이 노을 속에서 차분히 접혀 있다.*

---

### `after5_last_chance_1`
- 배경: `school_back.png`
- 플래그: `day5_last_chance_path`
- 다음: `after5_last_chance_2`

- 캐릭터: `없음`
**{name}**: *지지직거리는 끝음과 함께 교정의 방송 스피커가 완전히 꺼진다. 노을빛이 짙게 깔린 갈림길 한가운데서 발걸음을 멈춘다.*

---

### `after5_last_chance_2`
- 배경: `school_back.png`
- 다음: `after5_last_chance_route_check`

- 캐릭터: `없음`
**{name}**: *주머니 속 휴대폰을 만지작거리다 꺼내 든다. 불 꺼진 검은 액정 위로 저녁 바람에 흔들리는 축제 현수막만 어른거린다.*

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
  - [50+] → `after5_last_chance_seo_history_check`
  - [0+] → `after5_last_chance_seo_low_1`
  - [-19 이상] → `after5_last_chance_seo_low_1`
  - [기본] → `after5_last_chance_seo_neg`
- 다음: `after5_last_chance_seo_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_last_chance_seo_history_check`
- 배경: `school_back.png`
- 분기:
  - [`postponed_seoyeon`] → `after5_last_chance_seo_postponed`
  - [`day4_tentative_seoyeon`] → `after5_last_chance_seo_tentative`
  - [`day4_distance_seoyeon`] → `after5_last_chance_seo_distance`
  - [기본] → `after5_last_chance_2_b`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_last_chance_seo_postponed`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_b`

- 캐릭터: `seyoun_normal.png`
**서연**: *석양이 비치는 갈림길 건너편에서 걸음을 늦춘 서연이, 다가오는 내 기척에 멈춰 서며 조용히 중얼거린다.* 어젯밤 옥상에서 미처 다 못 끝낸 말... 오늘은 끝까지 들려줘.

---

### `after5_last_chance_seo_tentative`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_b`

- 캐릭터: `seyoun_normal.png`
**서연**: *갈림길 건너편에서 서성이던 서연이 내 발소리를 듣고 작게 숨을 내쉰다.* 어제는 우리 다음 약속도 못 잡았는데... 오늘은 네가 먼저 찾아와 줬네.

---

### `after5_last_chance_seo_distance`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_b`

- 캐릭터: `seyoun_sad.png`
**서연**: *교문 쪽으로 걸어가던 서연이 내 기척을 느끼고 보폭을 늦춘다.* 어제는 분명 여기서 멈추자고 했었지. ...오늘 다시 날 찾아온 이유부터 들을게.

---

### `after5_last_chance_2_b`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_c`

- 캐릭터: `없음`
**{name}**: *결국 휴대폰 화면을 켜지 않은 채 주머니 깊숙이 도로 집어넣는다. 멀어지려던 뒷모습을 놓치지 않으려 갈림길 건너편으로 두 걸음 성큼 내딛으며 목청껏 이름을 부른다.*

---

### `after5_last_chance_2_c`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_d`

- 캐릭터: `없음`
**{name}**: 서연아!

---

### `after5_last_chance_2_d`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_e`

- 캐릭터: `seyoun_normal.png`
**서연**: *걸음을 멈춘 서연이 내 쪽으로 완전히 몸을 돌린다. 서연의 등 뒤로 붉게 물든 축제 현수막이 저녁 바람에 크게 한 번 펄럭인다.*

---

### `after5_last_chance_2_e`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_f`

- 캐릭터: `seyoun_normal.png`
**서연**: ...참 늦게도 부른다, 너.

---

### `after5_last_chance_2_f`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_g`

- 캐릭터: `seyoun_worried.png`
**{name}**: *서연은 가슴팍의 학생회 리본 끝을 가느다란 손가락에 한 번 칭칭 감았다가 천천히 풀어 놓는다.*

---

### `after5_last_chance_2_g`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_h`

- 캐릭터: `seyoun_normal.png`
**서연**: 가만있어 봐. 이번엔 내가 먼저 말할 테니까, 잠깐만 그대로 있어.

---

### `after5_last_chance_2_h`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_i`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 한 걸음 다가와 노을빛 속에서 내 앞으로 조용히 오른손을 내민다.*

---

### `after5_last_chance_2_i`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_j`

- 캐릭터: `seyoun_normal.png`
**서연**: ...잡아.

---

### `after5_last_chance_2_j`
- 배경: `school_back.png`
- 다음: `after5_last_chance_choice`

- 캐릭터: `seyoun_very_shy.png`
**서연**: 만약 지금도 안 잡을 거면 여기서 솔직하게 말해. 기다리는 내가 또 혼자 바보처럼 기대하게 만들지는 말고. *서연은 미세하게 떨리는 손바닥을 거두지 않은 채 내 눈을 똑바로 올려다본다.*

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
**서연**: *서연이 반쯤 고개만 돌려 나를 본다. 구두 끝은 여전히 교문 출구 쪽을 향해 있다.* ...왜 불러.

---

### `after5_last_chance_seo_neg`
- 배경: `school_back.png`
- 다음: `after5_confess_fail_walk_1`

- 캐릭터: `seyoun_pout.png`
**서연**: *서연은 걸음을 멈추지 않고 교문 출구 쪽으로 먼저 걸어 나간다.* ...오늘은 그만하자.

---

### `after5_last_chance_dain_aff_check`
- 배경: `school_back.png`
- 호감분기: Dain
  - [50+] → `after5_last_chance_dain_history_check`
  - [0+] → `after5_last_chance_dain_low_1`
  - [-19 이상] → `after5_last_chance_dain_low_1`
  - [기본] → `after5_last_chance_dain_neg`
- 다음: `after5_last_chance_dain_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_last_chance_dain_history_check`
- 배경: `school_back.png`
- 분기:
  - [`postponed_dain`] → `after5_last_chance_dain_postponed`
  - [`day4_tentative_dain`] → `after5_last_chance_dain_tentative`
  - [`day4_distance_dain`] → `after5_last_chance_dain_distance`
  - [기본] → `after5_last_chance_2_k`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_last_chance_dain_postponed`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_k`

- 캐릭터: `dain_normal.png`
**다인**: *석양이 물든 갈림길 건너편에서 공을 굴리던 다인이, 내 발소리에 귀를 기울이며 나직이 말한다.* 어제 끝까지 못 들려준 말... 오늘은 빼놓지 말고 다 해 줘.

---

### `after5_last_chance_dain_tentative`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_k`

- 캐릭터: `dain_normal.png`
**다인**: *갈림길 건너편에서 걸음을 늦춘 다인이 다가오는 내 그림자를 보며 중얼거린다.* 어제는 다음에 보자는 약속도 못 잡았는데 오늘은 네가 먼저 달려왔네.

---

### `after5_last_chance_dain_distance`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_k`

- 캐릭터: `dain_sad.png`
**다인**: *체육관 앞길을 걸어가던 다인이 내 기척에 걸음을 늦춘다.* 어제는 우리 서로 거리를 두자고 했잖아. ...오늘 왜 다시 돌아왔는지 듣고 싶어.

---

### `after5_last_chance_2_k`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_l`

- 캐릭터: `없음`
**{name}**: 다인아!

---

### `after5_last_chance_2_l`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_m`

- 캐릭터: `dain_normal.png`
**다인**: *관성처럼 한 걸음 더 나아갔던 다인이, 굴러가던 배구공을 운동화 밑창으로 꾹 눌러 세우며 멈춰 선다.*

---

### `after5_last_chance_2_m`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_n`

- 캐릭터: `dain_laugh.png`
**다인**: ...야, 너 진짜.

---

### `after5_last_chance_2_n`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_o`

- 캐릭터: `dain_normal.png`
**다인**: {name}, 잠깐만 거기 서 봐. *다인이 공을 쥔 팔을 힘없이 내리고 천천히 내 쪽으로 몸을 돌린다.*

---

### `after5_last_chance_2_o`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_p`

- 캐릭터: `dain_shy.png`
**다인**: ...나한테 다시 돌아온 거야?

---

### `after5_last_chance_2_p`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_q`

- 캐릭터: `dain_sad.png`
**{name}**: 응. 이대로 널 보내면 평생 후회할 것 같아서. 네 앞에서 해야 할 말을 내 머릿속에만 가둬 두면 안 될 것 같았어. *다인이 아랫입술을 꾹 깨물며 떨리는 숨을 짧게 들이쉰다.*

---

### `after5_last_chance_2_q`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_r`

- 캐릭터: `dain_sad.png`
**다인**: 미리 말하는데 나 지금 당장 평소처럼 활짝 웃어 주진 못해. ...그래도 네가 여기까지 달려와서 꺼내는 말은 끝까지 들을게.

---

### `after5_last_chance_2_r`
- 배경: `school_back.png`
- 다음: `after5_last_chance_2_s`

- 캐릭터: `dain_sad.png`
**{name}**: 오면서 수십 번도 더 연습했는데 막상 네 눈을 보니까 숨이 차서 말이 바로 안 나오네. ...조금만 기다려 줘. *다인이 손등으로 붉어진 눈가를 훔쳐 내자 하얀 피부 위로 맑은 물기가 번진다.*

---

### `after5_last_chance_2_s`
- 배경: `school_back.png`
- 다음: `after5_last_chance_choice`

- 캐릭터: `dain_laugh.png`
**다인**: 얼른 말해 봐. 어디 안 가고 여기서 다 들을 테니까.

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
**다인**: *한 걸음 지나쳐 갔던 다인이 천천히 돌아선다. 배구공을 가슴 앞에 방패처럼 끌어안은 채 거리를 좁히지 않는다.* ...왜.

---

### `after5_last_chance_dain_neg`
- 배경: `school_back.png`
- 다음: `after5_confess_fail_walk_1`

- 캐릭터: `dain_angry.png`
**다인**: *다인은 공 가방을 어깨에 멘 채 내 옆을 그대로 지나쳐 간다.* ...지금은 내 이름 부르지 마.

---

### `after5_last_chance_yuna_aff_check`
- 배경: `school_back.png`
- 호감분기: Yuna
  - [50+] → `after5_last_chance_yuna_history_check`
  - [0+] → `after5_last_chance_yuna_low_1`
  - [-19 이상] → `after5_last_chance_yuna_low_1`
  - [기본] → `after5_last_chance_yuna_neg`
- 다음: `after5_last_chance_yuna_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_last_chance_yuna_history_check`
- 배경: `school_back.png`
- 분기:
  - [`postponed_yuna`] → `after5_last_chance_yuna_postponed`
  - [`day4_tentative_yuna`] → `after5_last_chance_yuna_tentative`
  - [`day4_distance_yuna`] → `after5_last_chance_yuna_distance`
  - [기본] → `after5_last_chance_yuna_1`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_last_chance_yuna_postponed`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_1`

- 캐릭터: `yuna_normal.png`
**유나**: *노을 진 갈림길 건너편에서 걸음을 늦춘 유나가, 뒤따라온 내 기척을 느끼며 낮게 속삭인다.* 어제는 마지막 장 결말을 미뤘지. ...오늘은 네가 할 말부터 들을게.

---

### `after5_last_chance_yuna_tentative`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_1`

- 캐릭터: `yuna_normal.png`
**유나**: *갈림길 건너편에서 책을 안고 서 있던 유나가 다가오는 나를 보며 작게 중얼거린다.* 어제는 내가 먼저 연락하겠다고 했었는데... 오늘은 네가 먼저 왔네.

---

### `after5_last_chance_yuna_distance`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_1`

- 캐릭터: `yuna_sad.png`
**유나**: *조용히 걸어가던 유나가 내 발소리에 보폭을 늦춘다.* 어제는 분명 여기까지만 하자고 했었지. ...오늘 다시 내 이름을 부르러 온 이유는 들을게.

---

### `after5_last_chance_yuna_1`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_2`

- 캐릭터: `없음`
**{name}**: 유나야!

---

### `after5_last_chance_yuna_2`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_3`

- 캐릭터: `yuna_normal.png`
**유나**: *규칙적으로 멀어지던 구두 소리가 두 걸음 더 나아간 뒤 뚝 끊긴다. 품 안의 책을 더욱 깊숙이 끌어안은 유나가, 긴 두 번의 호흡 끝에 천천히 고개를 돌린다.*

---

### `after5_last_chance_yuna_3`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_4`

- 캐릭터: `yuna_normal.png`
**유나**: ...결국 돌아왔네.

---

### `after5_last_chance_yuna_4`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_5`

- 캐릭터: `없음`
**{name}**: 더 미루지 않고 지금 여기서 말할게. ...잠깐만 내 말 들어 줘. *노을이 내려앉은 두 걸음 너머에서 유나가 말없이 나를 바라보며 기다린다.*

---

### `after5_last_chance_yuna_5`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_6`

- 캐릭터: `yuna_shy.png`
**유나**: 네가 할 말, 다 듣고 갈게. ...지금 당장 아무렇지 않다고는 못 해도.

---

### `after5_last_chance_yuna_6`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_7`

- 캐릭터: `yuna_shy.png`
**{name}**: *유나가 흔들림 없이 내 눈을 마주 본다. 어느새 우리 두 사람 사이의 거리가 반걸음 남짓으로 좁혀져 있다.*

---

### `after5_last_chance_yuna_7`
- 다음: `after5_last_chance_choice`

<!-- i18n -->

---

### `after5_last_chance_yuna_low_1`
- 배경: `school_back.png`
- 다음: `after5_last_chance_yuna_low_2`

- 캐릭터: `없음`
**{name}**: 유나야.

---

### `after5_last_chance_yuna_low_2`
- 배경: `school_back.png`
- 다음: `after5_last_chance_choice`

- 캐릭터: `yuna_normal.png`
**유나**: *유나가 발걸음을 멈추고 돌아본다. 책을 감싸 안은 가느다란 팔에 경계하듯 힘이 들어간다.* ...왜.

---

### `after5_last_chance_choice`
- 배경: `school_back.png`
- 선택지:
  1. "좋아한다고 말한다" → `after5_confess_yes` | 플래그: `day5_confessed`
  2. "아직 말하지 않는다" → `after5_confess_no`
  3. "오늘은 서로 생각할 시간을 갖자." → `after5_defer_route_check` | 현재 대화 캐릭터 -4

- 캐릭터: `없음`
**{name}**: *노을빛이 깊게 내려앉은 눈동자를 똑바로 마주 보며 목구멍 끝까지 차오른 마지막 말을 고른다.*

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
**서연**: *내 앞에 펼쳐 보였던 손을 천천히 거두어들인다.* ...그래. 네가 그렇게 정했다면 어쩔 수 없지.

---

### `after5_defer_dain`
- 배경: `school_back.png`
- 다음: `after5_confess_no_2`

- 캐릭터: `dain_sad.png`
**다인**: *다인이 배구공을 다시 두 팔로 끌어안는다.* ...그래. 오늘도 여기서 멈추는 거네.

---

### `after5_defer_yuna`
- 배경: `school_back.png`
- 다음: `after5_confess_no_2`

- 캐릭터: `yuna_sad.png`
**유나**: *유나가 조금 내렸던 책을 다시 가슴팍으로 끌어안는다.* ...알겠어. 오늘도 우리 이야기는 여기서 멈추는 거네.

---

### `after5_confess_no`
- 배경: `school_back.png`
- 다음: `after5_confess_no_2`

- 캐릭터: `없음`
**{name}**: *차마 입술을 떼지 못한 채, 휴대폰 화면만 끄고 무겁게 입을 다문다.*

---

### `after5_confess_no_2`
- 배경: `school_back.png`
- 다음: `after5_confess_no_2b`

- 캐릭터: `없음`
**{name}**: *선선해진 저녁 바람에 누군가 떨어뜨린 축제 안내지 한 장이 내 발치까지 구겨진 채 굴러온다. 허리를 숙여 종이를 주워 들고 빈 게시판 아래에 조용히 끼워 둔다.*

---

### `after5_confess_no_2b`
- 배경: `room_my.png`
- 다음: `ending_start`

- 캐릭터: `없음`
**{name}**: *아무도 부르지 못한 이름을 가슴에 묻고 끝내 혼자 돌아서서 집으로 향했다.*

---

### `after5_confess_yes`
- 배경: `school_back.png`
- 다음: `after5_confess_yes_2`

- 캐릭터: `없음`
**{name}**: *가쁘게 뛰는 숨을 깊게 들이마시고 세상에서 가장 또렷한 목소리로 이름을 부른다.*

---

### `after5_confess_yes_2`
- 배경: `school_back.png`
- 분기:
  - [`route_seoyeon`] → `after5_confess_aff_seo`
  - [`route_dain`] → `after5_confess_aff_dain`
  - [`route_yuna`] → `after5_confess_aff_yuna`
  - [기본] → `ending_start`

- 캐릭터: `없음`
**{name}**: 좋아해. 그냥 친한 친구로 남고 싶지 않을 만큼. 너무 늦었지만 이 말만큼은 내 입으로 꼭 직접 전하고 싶었어.

---

### `after5_confess_aff_seo`
- 배경: `school_back.png`
- 호감분기: Seoyeon
  - [50+] → `after5_confess_react_seo`
  - [0+] → `after5_confess_react_seo_low`
  - [-19 이상] → `after5_confess_react_seo_low`
  - [기본] → `after5_confess_react_seo_neg`
- 다음: `after5_confess_react_seo_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_confess_react_seo`
- 배경: `school_back.png`
- 다음: `ending_start`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연의 긴 속눈썹이 파르르 떨리더니, 이내 발갛게 물든 뺨으로 내 옆에 나란히 서서 공원 쪽으로 걸음을 뗀다.* ...진짜 못됐어, 이렇게 늦게 말하고. 그래도… 이제야 네 진짜 마음 다 알겠어.

---

### `after5_confess_react_seo_low`
- 배경: `school_back.png`
- 다음: `after5_confess_fail_walk_1`

- 캐릭터: `seyoun_sad.png`
**서연**: *학교 앞 횡단보도 신호등이 초록에서 빨강으로 바뀔 때까지 서연은 아무 말이 없다.* ...방금 한 말은 잘 들었어. 하지만 오늘은 딱 거기까지만 해 줘.

---

### `after5_confess_react_seo_neg`
- 배경: `school_back.png`
- 다음: `after5_confess_fail_walk_1`

- 캐릭터: `seyoun_pout.png`
**서연**: *서연이 차갑게 식은 눈으로 열쇠고리를 주머니에 넣는다.* 지금 우리가 그런 말을 주고받을 사이는 아니잖아.

---

### `after5_confess_aff_dain`
- 배경: `school_back.png`
- 호감분기: Dain
  - [50+] → `after5_confess_react_dain`
  - [0+] → `after5_confess_react_dain_low`
  - [-19 이상] → `after5_confess_react_dain_low`
  - [기본] → `after5_confess_react_dain_neg`
- 다음: `after5_confess_react_dain_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_confess_react_dain`
- 배경: `school_back.png`
- 다음: `ending_start`

- 캐릭터: `dain_laugh.png`
**다인**: *교문을 나서던 다인이 달아오른 얼굴을 감추듯 애꿎은 운동화 끈만 내려다본다.* ...야, 이 바보야. 나 지난 나흘 내내 네 입에서 그 말 나오기만 기다렸거든? 이제 와서 무르기 없기다!

---

### `after5_confess_react_dain_low`
- 배경: `school_back.png`
- 다음: `after5_confess_fail_walk_1`

- 캐릭터: `dain_sad.png`
**다인**: *다인이 배구공 가죽의 검은 홈을 엄지손가락으로 천천히 따라 그린다.* ...고백은 들었어. 근데 미안, 지금 당장 웃으면서 대답해 주기는 좀 힘들 것 같아.

---

### `after5_confess_react_dain_neg`
- 배경: `school_back.png`
- 다음: `after5_confess_fail_walk_1`

- 캐릭터: `dain_angry.png`
**다인**: *다인이 바닥의 공을 집어 들고 먼저 등을 돌린다.* 그 말, 지금 네 입에서 들을 생각 없어.

---

### `after5_confess_aff_yuna`
- 배경: `school_back.png`
- 호감분기: Yuna
  - [50+] → `after5_confess_react_yuna`
  - [0+] → `after5_confess_react_yuna_low`
  - [-19 이상] → `after5_confess_react_yuna_low`
  - [기본] → `after5_confess_react_yuna_neg`
- 다음: `after5_confess_react_yuna_neg`

- 캐릭터: `없음`

<!-- i18n -->

---

### `after5_confess_react_yuna`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_call`

- 캐릭터: `yuna_shy.png`
**유나**: *유나가 내 그림자 옆으로 조용히 발을 맞추어 걷기 시작한다.* ...응. 방금 네가 한 말, 한 글자도 안 놓치고 제대로 들었어.

---

### `after5_confess_react_yuna_call`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_b`

- 캐릭터: `yuna_normal.png`
**{name}**: 유나야.

---

### `after5_confess_react_yuna_b`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_c`

- 캐릭터: `yuna_shy.png`
**유나**: 네가 이렇게 목소리로 들려주니까... 그동안 나 혼자서 네 마음을 잘못 읽은 건 아닐까 겁내지 않아도 되네. *유나가 안고 있던 책의 힘을 풀려다 다시 모서리를 소중히 고쳐 쥔다.*

---

### `after5_confess_react_yuna_c`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_d`

- 캐릭터: `yuna_normal.png`
**유나**: 종이 위 글자 말고 네 목소리로 직접 듣고 싶었거든.

---

### `after5_confess_react_yuna_d`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_e`

- 캐릭터: `yuna_normal.png`
**유나**: *유나가 교복 주머니 깊숙한 곳에서 작게 접힌 쪽지 한 장을 꺼내 내 손바닥에 올려 준다. 조심스레 펼치자 연보라색 만년필로 적힌 한 줄이 나타난다.*

---

### `after5_confess_react_yuna_e`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_f`

- 캐릭터: `yuna_shy.png`
**유나**: ...오래 기다렸어.

---

### `after5_confess_react_yuna_f`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_g`

- 캐릭터: `yuna_sad.png`
**{name}**: *만년필 끝이 오래 머문 듯 마지막 글자 한 군데가 깊게 눌려 있다. 네모난 종이 위에는 주머니 속에서 수없이 접었다 펴기를 반복한 보드라운 주름이 남아 있다.*

---

### `after5_confess_react_yuna_g`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_h`

- 캐릭터: `yuna_normal.png`
**유나**: *발개진 귓불을 머리카락 뒤로 숨기며 작게 속삭인다.* ...네가 끝까지 읽었으면, 그걸로 됐어.

---

### `after5_confess_react_yuna_h`
- 배경: `school_back.png`
- 다음: `after5_confess_react_yuna_i`

- 캐릭터: `yuna_normal.png`
**{name}**: *손등이 아슬아슬하게 스치는 거리로 나란히 걸었다. 굳이 말을 보태지 않아도 저녁 공기가 달콤하게 데워졌다.*

---

### `after5_confess_react_yuna_i`
- 배경: `school_back.png`
- 다음: `ending_start`

- 캐릭터: `yuna_normal.png`
**{name}**: *긴 그림자를 나란히 끌며 교문 밖으로 걸어 나왔다.*

---

### `after5_confess_react_yuna_low`
- 배경: `school_back.png`
- 다음: `after5_confess_fail_walk_1`

- 캐릭터: `yuna_sad.png`
**유나**: *유나가 품 안의 책을 하얗게 질릴 만큼 꼭 쥔다.* ...네 마음은 들었어. 근데 지금은 내 대답을 바로 들려주진 못하겠어.

---

### `after5_confess_react_yuna_neg`
- 배경: `school_back.png`
- 다음: `after5_confess_fail_walk_1`

- 캐릭터: `yuna_bored.png`
**유나**: *유나는 시선을 내린 채 들고 있던 책장만 넘긴다.* ...방금 그 말은 받지 않을게.

---

### `after5_last_chance_yuna_neg`
- 배경: `school_back.png`
- 다음: `after5_confess_fail_walk_1`

- 캐릭터: `yuna_bored.png`
**유나**: *유나는 책을 안은 채 반대쪽 길로 발걸음을 옮긴다.* ...미안, 오늘은 네 말 듣지 않을게.

---

### `after5_confess_fail_walk_1`
- 배경: `school_back.png`
- 다음: `after5_confess_fail_walk_2`

- 캐릭터: `없음`
**{name}**: *붉은 해가 지평선 아래로 더 무겁게 내려앉는다. 어색한 간격을 둔 채 같은 방향으로 걸음만 옮긴다.*

---

### `after5_confess_fail_walk_2`
- 배경: `park.png`
- 다음: `ending_start`

- 캐릭터: `없음`
**{name}**: *끝내 마땅한 답을 찾지 못한 채 저녁 어스름이 깔린 공원 쪽으로 걸어갔다.*

---

### `after5_set_harem`
- 배경: `school_back.png`
- 다음: `after5_harem_commit`

- 캐릭터: `없음`
**{name}**: *메신저 상단에 나란히 고정된 세 사람의 이름을 한참 내려다본다. 망설임 끝에 세 사람 모두에게 학교 뒤편에서 잠깐 만나자고 메시지를 보낸다.*

---

### `after5_harem_commit`
- 배경: `school_back.png`
- 플래그: `ending_harem`
- 다음: `after5_harem_walk_1`

- 캐릭터: `없음`
**{name}**: 미안해... 난 끝내 너희 중 한 사람만 고르지 못했어. *차례로 걸어와 멈춰 선 세 사람 앞에서 휴대폰을 주머니에 넣는다. 싸늘하게 식은 공기 속에서 누구도 선뜻 입을 열지 않는다.*

---

### `after5_harem_walk_1`
- 배경: `school_back.png`
- 다음: `after5_harem_walk_2`

- 캐릭터: `없음`
**{name}**: *자리를 옮겨 공원 쪽으로 함께 걷는다. 가로등 불빛이 하나둘 켜지는 동안 누구도 먼저 침묵을 깨지 않는다.*

---

### `after5_harem_walk_2`
- 배경: `park.png`
- 다음: `ending_start`

- 캐릭터: `없음`
**{name}**: *제때 답장하지 못했던 지난 메시지들이 잠금화면 속에 그대로 얼어붙어 있다. 무거운 발걸음이 저녁 공원 입구로 향했다.*

---

## 5일차 — 밤 `day5_4_night`

### `ending_start`
- 배경: `park.png`
- 시간대: `sunset`
- 분기:
  - [`day4_counteroffer_penalty_deferred`] → `ending_counteroffer_bitter`
  - [`day3_caught_multiple_dates`] → `day5_ending_mayhem`
  - [`ending_harem`] → `day5_ending_harem`
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
**{name}**: *돌고 돌아 원래 약속했던 사람을 선택했지만 뒤늦은 사과 한마디가 어젯밤의 흔들림까지 없던 일로 지워 주지는 못했다.*

---

### `ending_counteroffer_choice_tempter`
- 배경: `park.png`
- BGM: `night2.mp3`
- 다음: `ending_counteroffer_bitter_route`

- 캐릭터: `없음`
**{name}**: *마음이 기운 한 사람을 골랐지만 설레는 시작보다 먼저 매듭지어야 할 아픈 뒷정리가 두 사람 앞에 남았다.*

---

### `ending_counteroffer_choice_neither`
- 배경: `park.png`
- BGM: `night2.mp3`
- 다음: `ending_counteroffer_bitter_route`

- 캐릭터: `없음`
**{name}**: *염치없이 두 사람 다 붙잡지 않겠다고 말한 뒤, 교실 안 세 사람의 대화는 그 자리에서 마침표를 찍었다.*

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
**{name}**: *그날 이후 한 달쯤 지나 다시 마주 앉은 카페에서, 서연은 비뚤게 놓인 컵받침을 보고도 끝내 손을 대지 않는다.*

---

### `co_bitter_seo_2`
- 배경: `cafe.png`
- 다음: `co_bitter_seo_3`

- 캐릭터: `seyoun_sad.png`
**서연**: ...축제 날 아침 네 휴대폰에 떴던 그 알림 말이야. 머릿속에서 다 지웠다고 생각했는데 네 얼굴을 보면 자꾸만 다시 떠올라.

---

### `co_bitter_seo_3`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_epilogue_1`

- 캐릭터: `없음`
**{name}**: *먼저 자리에서 일어난 서연은 가방끈을 단정히 고쳐 메고 카페 문밖에서 자기 몫의 우산만 조용히 펼친다.*

---

### `co_bitter_yuna_1`
- 배경: `bookstore.png`
- 다음: `co_bitter_yuna_2`

- 캐릭터: `yuna_sad.png`
**{name}**: *비 개인 오후 헌책방 앞에 먼저 나와 서 있던 유나는, 평소와 달리 손에 아무 책도 들지 않은 빈손이다.*

---

### `co_bitter_yuna_2`
- 배경: `bookstore.png`
- 다음: `co_bitter_yuna_3`

- 캐릭터: `yuna_sad.png`
**유나**: ...그날 아침 이후로, 도서관 별관에는 더 이상 가지 않아.

---

### `co_bitter_yuna_3`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_epilogue_1`

- 캐릭터: `없음`
**{name}**: *유나는 짧게 고개만 한 번 끄덕여 보이고는, 내가 서 있는 쪽과 반대편 골목길로 조용히 걸어 들어간다.*

---

### `co_bitter_dain_1`
- 배경: `school_back.png`
- 다음: `co_bitter_dain_2`

- 캐릭터: `dain_sad.png`
**{name}**: *오후의 체육관 문밖, 다인은 배구공도 들지 않은 채 굳은 얼굴로 서 있다.*

---

### `co_bitter_dain_2`
- 배경: `school_back.png`
- 다음: `co_bitter_dain_3`

- 캐릭터: `dain_sad.png`
**다인**: 축제 날 아침에 파트너 명단에서 네 이름 지웠던 거... 미안하지만 아직은 그 빈칸에 네 이름을 다시 적을 생각이 안 들어.

---

### `co_bitter_dain_3`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_epilogue_1`

- 캐릭터: `없음`
**{name}**: *다인은 예전처럼 장난스럽게 주먹을 부딪치는 대신, 편 손바닥으로 내 어깨를 짧게 한 번 툭 치고는 그대로 스쳐 지나간다.*

---

### `co_bitter_teacher_1`
- 배경: `school_hallway.png`
- 배경톤: `empty`
- 시간대: `day`
- 다음: `co_bitter_teacher_2`

- 캐릭터: `teacher_sad.png`
**{name}**: *졸업식 날 다시 찾은 교사동 복도. 담임선생님의 손에는 더 이상 갈색 원고 봉투가 들려 있지 않다.*

---

### `co_bitter_teacher_2`
- 배경: `school_hallway.png`
- 배경톤: `empty`
- 시간대: `day`
- 다음: `co_bitter_teacher_3`

- 캐릭터: `teacher_sad.png`
**담임선생님**: 졸업 축하한다. 봉투 안의 행정 서류는 빠진 것 없는지 잘 확인해 보고. ...사회에 나가서도 건강히 잘 지내렴.

---

### `co_bitter_teacher_3`
- 배경: `ending_bittersweet_teacher.png`
- 시간대: `day`
- 다음: `hidden_bitter_homeroom_ending_title`

- 캐릭터: `없음`
**{name}**: *선생님은 원고 대신 공문 서류 뭉치를 품에 안고 먼저 교무실 쪽으로 발걸음을 옮긴다.*

---

### `co_bitter_nurse_1`
- 배경: `nurse_room.png`
- 시간대: `day`
- 다음: `co_bitter_nurse_2`

- 캐릭터: `nurse_worried.png`
**{name}**: *반쯤 열린 보건실 문 앞에서 걸음을 멈춘다. 차트를 정리하던 보건선생님이 나를 발견하고 조용히 볼펜을 내려놓는다.*

---

### `co_bitter_nurse_2`
- 배경: `nurse_room.png`
- 시간대: `day`
- 다음: `co_bitter_nurse_3`

- 캐릭터: `nurse_worried.png`
**보건선생님**: 네 초기 상담 기록은 모두 공식적으로 마무리했어. 앞으로 도움이 더 필요하면 교내 상담 창구로 새로 예약해 줘.

---

### `co_bitter_nurse_3`
- 배경: `ending_bittersweet_nurse.png`
- 시간대: `day`
- 다음: `hidden_bitter_nurse_ending_title`

- 캐릭터: `없음`
**{name}**: *보건선생님이 테이블 위의 빈 종이컵을 치우고 자기 책상으로 돌아간다. 나는 문턱 앞에서 조용히 고개 숙여 인사한 뒤 발길을 돌린다.*

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
- 배경: `yuna_hideout_day.webp`
- 시간대: `sunset`
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
**{name}**: *모든 말을 쏟아낸 뒤, 저녁 어스름이 내려앉은 공원 가로등 아래까지 나란히 걸어와 조용히 대답을 기다린다.*

---

### `confess_fail_cg_seo`
- 배경: `ending_confess_fail_seoyeon.png`
- 다음: `confess_fail_1`

- 캐릭터: `없음`
**서연**: *내 말을 끝까지 다 들은 서연이 입술을 달싹이다가, 천천히 고개를 가로젓는다.* ...마음은 고마워, 정말 미안해. 하지만 지금 내 마음은 거기까지가 아니야.

---

### `confess_fail_cg_yuna`
- 배경: `ending_confess_fail_yuna.png`
- 다음: `confess_fail_1`

- 캐릭터: `없음`
**유나**: *공원 출구 앞, 유나는 내 눈 대신 흔들리는 가로등 그림자를 바라본다. 반걸음 떨어진 두 사람의 손끝은 끝내 닿지 않는다.* ...미안해. 나는 네가 건넨 그 마음을 같은 무게로 받아 줄 수가 없어.

---

### `confess_fail_cg_dain`
- 배경: `ending_confess_fail_dain.png`
- 다음: `confess_fail_1`

- 캐릭터: `없음`
**다인**: *다인이 손등으로 눈가를 쓱 훔치며 애써 웃어 보이려 하지만 갈라진 목소리만은 흔들림 없이 분명하다.* ...미안, 진짜 미안해. 나는 너랑 지금처럼 좋은 친구로 남고 싶어.

---

### `confess_fail_1`
- 배경: `ending_bittersweet.png`
- 다음: `confess_fail_2`

- 캐릭터: `없음`
**{name}**: *며칠 뒤 봄비가 추적추적 내리는 하굣길 교문 앞. 우산 너머로 멀어져 가는 익숙한 뒷모습을 더 이상 따라가지 않는다.*

---

### `confess_fail_2`
- 배경: `ending_bittersweet.png`
- 다음: `confess_fail_3`

- 캐릭터: `없음`
**{name}**: *메신저 입력창에 긴 문장을 썼다가 지우기를 반복한 끝에, 가장 담백한 한 문장만 남긴다.*

---

### `confess_fail_3`
- 배경: `ending_bittersweet.png`
- 다음: `confess_fail_4`

- 캐릭터: `없음`
**{name}**: 그날 솔직하게 답해 줘서 고마웠어. *전송 버튼을 누르고 책상 위에 휴대폰을 조용히 내려놓는다.*

---

### `confess_fail_4`
- 배경: `ending_bittersweet.png`
- 다음: `confess_fail_5`

- 캐릭터: `없음`
**{name}**: *잠시 뒤 숫자 1이 사라지며 읽음 표시가 남는다. 답장은 오지 않고 나도 그 아래로 말을 덧붙이지 않는다.*

---

### `confess_fail_5`
- 배경: `ending_bittersweet.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── CONFESSION REJECTED END ───

---

### `day5_ending_friend`
- 배경: `park.png`
- 시간대: `sunset`
- BGM: `night2.mp3`
- 다음: `friend_1`

- 캐릭터: `없음`
**{name}**: *섣부른 고백으로 거리를 무너뜨리는 대신, 진심 어린 고마움을 전하기로 마음먹는다. 메신저 입력창에 첫 글자를 적어 둔 채 화면을 끄지 않는다.*

---

### `friend_1`
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `friend_2`

- 캐릭터: `없음`
**{name}**: *가로등 불빛이 켜진 공원 벤치에 앉아 대화방 입력창을 가만히 열어 둔다.*

---

### `friend_2`
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `friend_3`

- 캐릭터: `없음`
**{name}**: *소정에게 뒤늦은 사과를 보내기 전까지 수없이 미루고 삼켰던 말들이 스쳐 지나간다. 이번만큼은 전할 수 있을 때 내 목소리로 남기고 싶다.*

---

### `friend_3`
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `friend_route_check`

- 캐릭터: `없음`
**{name}**: 지금 당장 우리 관계를 다른 이름으로 바꾸자고 말할 자신은 없어. 그래도 이번 한 주 동안 네가 내 곁에 있어 줘서 정말 고마웠다는 말은 꼭 하고 싶었어. *한 글자씩 눌러 적어 전송을 누른다.*

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
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `friend_5`

- 캐릭터: `없음`
**{name}**: *곧바로 짧은 진동과 함께 답장이 도착한다. '나도 이번 주 정말 고마웠어. 내일 학교에서 보자.'*

---

### `friend_4_seo`
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `friend_5`

- 캐릭터: `없음`
**서연**: *서연에게서 온 답장.* 그래, 무슨 뜻인지 알겠어. 이번엔 삼키지 않고 말을 끝까지 다 했네. 내일 학교에서 봐.

---

### `friend_4_yuna`
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `friend_5`

- 캐릭터: `없음`
**유나**: *유나에게서 온 답장.* 보내 준 글, 끝까지 잘 읽었어. ...내일 도서관에서 보자.

---

### `friend_4_dain`
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `friend_5`

- 캐릭터: `없음`
**다인**: *다인에게서 온 답장.* 응, 접수! 그럼 내일 아침엔 평소처럼 교실로 와. 지각하지 말고!

---

### `friend_5`
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `friend_7`

- 캐릭터: `없음`
**{name}**: *'응, 내일 보자.' 짧게 답장을 보낸 뒤 한결 가벼워진 손끝으로 화면을 끈다.*

---

### `friend_7`
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `friend_8`

- 캐릭터: `없음`
**{name}**: *내가 보낸 마지막 인사 옆에 곧바로 읽음 표시가 붙는다. 비워진 입력창 위로 편안한 밤공기가 내려앉는다.*

---

### `friend_8`
- 배경: `ending_friend.png`
- 다음: `friend_9`

- 캐릭터: `없음`
**{name}**: *계절이 흘러 맞이한 졸업식 날. 휴대폰 갤러리를 열자 이 학교 친구들과 어깨를 맞대고 찍은 단체 사진이 떠오른다. 예전 사진 속의 나와 달리, 이번에는 피하지 않고 똑바로 카메라 렌즈를 마주 보고 웃고 있다.*

---

### `friend_9`
- 배경: `ending_friend.png`
- 다음: `friend_10`

- 캐릭터: `없음`
**{name}**: *저장된 사진의 파일명은 '졸업식_우리들'. 시끌벅적하게 울리는 단체 대화방에도 방금 찍은 똑같은 사진이 올라온다.*

---

### `friend_10`
- 배경: `ending_friend.png`
- 시간대: `sunset`
- 다음: `friend_12`

- 캐릭터: `없음`
**{name}**: 우리 졸업식 끝나고 다 같이 뭐 먹으러 갈래? *단체 대화방에 메시지를 띄우자마자, 기다렸다는 듯 세 사람의 답장이 차례로 쏟아진다.*

---

### `friend_12`
- 배경: `ending_friend.png`
- 시간대: `sunset`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── FRIEND END ───

---

### `day5_ending_mayhem`
- 배경: `ending_mayhem.png`
- BGM: `night1.mp3`
- 다음: `mayhem_1`

- 캐릭터: `없음`
**{name}**: *세 사람의 대화방이 모두 차가운 읽음 표시에서 멈춰 있다. 뒤늦은 변명을 적어 보려다 첫 글자조차 완성하지 못하고 지워 버린다.*

---

### `mayhem_1`
- 배경: `ending_mayhem.png`
- 다음: `mayhem_2`

- 캐릭터: `없음`
**서연**: *복도에서 마주친 서연이 차가운 바람만 남긴 채 내 어깨를 스쳐 지나간다. 끝내 고개조차 돌리지 않는다.*

---

### `mayhem_2`
- 배경: `ending_mayhem.png`
- 다음: `mayhem_3`

- 캐릭터: `yuna_normal.png` @ 0.35
**유나**: *텅 빈 유나의 자리, 책상 모서리에 네모나게 접힌 쪽지 한 장만 놓여 있다. 여백 없는 문장의 끝은 단호한 마침표였다.* ...그동안 재밌었어.

---

### `mayhem_3`
- 배경: `ending_mayhem.png`
- 다음: `mayhem_4`

- 캐릭터: `없음`
**다인**: *다인은 습관처럼 입꼬리를 올리려다 말고 내 눈을 피해 시선을 바닥으로 떨군다.* "...그동안 잘 지내."

---

### `mayhem_4`
- 배경: `ending_mayhem.png`
- 다음: `mayhem_5`

- 캐릭터: `없음`
**{name}**: *복도 저편으로 멀어져 가는 세 사람의 등을 우두커니 바라보았다. 그들 중 누구도 마지막까지 뒤를 돌아보지 않았다.*

---

### `mayhem_5`
- 배경: `ending_mayhem.png`
- 다음: `mayhem_6`

- 캐릭터: `없음`
**{name}**: *차가운 봄비에 젖어 아스팔트 바닥에 눌어붙은 벚꽃잎들. 내 옆자리는 시리도록 텅 비어 있었다.*

---

### `mayhem_6`
- 배경: `ending_mayhem.png`
- 다음: `mayhem_7`

- 캐릭터: `없음`
**{name}**: *열어 보지 못한 대화방마다 내가 제때 답하지 못한 질문들만 화석처럼 쌓여 있다.*

---

### `mayhem_7`
- 배경: `ending_mayhem.png`
- 다음: `mayhem_8`

- 캐릭터: `없음`
**{name}**: *소정에게 보냈던 사과 메시지 아래로도 끝내 답장은 오지 않는다. 방 안의 어둠 속에서 휴대폰 화면이 소리 없이 꺼진다.*

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
**{name}**: *한 사람에게 건네야 할 대답 대신 세 사람의 이름을 차례로 부른다. 주변의 희미한 웃음소리가 뚝 끊기고 테이블 위에는 주인 잃은 휴대폰 세 대가 침묵 속에 놓여 있다.*

---

### `harem_1`
- 배경: `ending_harem.png`
- 다음: `harem_1_b`

- 캐릭터: `없음`
**서연**: *서연이 팔짱을 낀 채 차분하고도 서늘한 목소리로 입을 연다.* 네가 솔직하게 말하려는 건 알겠어. 그렇다고 해서 우리 셋이 네 마음이 정해질 때까지 마냥 기다려 줘야 하는 건 아니지.

---

### `harem_1_b`
- 배경: `ending_harem.png`
- 다음: `harem_2`

- 캐릭터: `없음`
**유나**: *유나는 잠시 시선을 떨구었다가 서연과 다인의 얼굴을 차례로 바라본다. 품에 안은 책은 끝내 내려놓지 않는다.*

---

### `harem_2`
- 배경: `ending_harem.png`
- 다음: `harem_3`

- 캐릭터: `없음`
**유나**: ...나는 혼자 생각할 시간을 좀 갖고 싶어.

---

### `harem_3`
- 배경: `ending_harem.png`
- 다음: `harem_4`

- 캐릭터: `없음`
**다인**: 나도 마찬가지야. 네가 스스로 마음을 확실히 정리할 때까지는, 우리 따로 만나지 말자.

---

### `harem_4`
- 배경: `ending_harem.png`
- 다음: `harem_5`

- 캐릭터: `없음`
**{name}**: ...알겠어. 내 욕심으로 너희를 힘들게 해서 미안해. 당분간 누구한테도 사적으로 연락하지 않을게.

---

### `harem_5`
- 배경: `ending_harem.png`
- 다음: `harem_6`

- 캐릭터: `없음`
**서연**: 그래, 한동안은 단둘이 만나는 일 없도록 하자. 연락도 학교 일로 꼭 필요한 용건만 주고받고.

---

### `harem_6`
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `harem_7`

- 캐릭터: `없음`
**{name}**: *세 사람은 미련 없이 각자 다른 갈림길로 걸어가 버리고 나만 홀로 저녁 바람이 부는 그 자리에 남겨진다.*

---

### `harem_7`
- 배경: `room_my.png`
- 다음: `harem_8`

- 캐릭터: `없음`
**{name}**: *아무 약속도 적히지 않은 다음 주의 하얀 캘린더 화면. 상단에 고정해 두었던 세 사람의 대화방 알림을 하나씩 무음으로 바꾼다.*

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
**{name}**: *축제 행사장 뒷정리를 모두 마치며 가방 안주머니에 넣어 둔 문예부 합평본 봉투와 투명 케이스의 응급처치 카드를 손끝으로 확인한다.*

---

### `hidden_dual_route_choice`
- 배경: `park.png`
- 선택지:
  1. "문예부 합평본을 펼친다" → `hidden_perfect_homeroom_check`
  2. "응급처치 카드를 꺼낸다" → `hidden_perfect_nurse_check`

- 캐릭터: `없음`
**{name}**: *가방 속에서 두 가지 기록 중 하나를 먼저 꺼내 든다. 어느 쪽이든 오늘 당장 성급한 이름을 붙일 관계는 아니다.*

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
- 시간대: `day`
- BGM: `ending.mp3`
- 플래그: `ending_perfect`
- 다음: `hidden_perfect_homeroom_1b`

- 캐릭터: `없음`
**{name}**: *꽃다발 향기가 복도를 메운 졸업식 날. 담임선생님은 내게 대학 추천서 사본과 그동안의 문예부 독서 기록철을 건네주었다.*

---

### `hidden_perfect_homeroom_1b`
- 배경: `room_school.png`
- 시간대: `day`
- 다음: `hidden_perfect_homeroom_2`

- 캐릭터: `teacher_normal.png`
**{name}**: *아이들이 모두 빠져나간 빈 교실 문 앞, 선생님이 교탁 위에서 학생 번호만 적힌 옛 합평본 원고들을 마지막으로 추리고 있다.*

---

### `hidden_perfect_homeroom_2`
- 배경: `room_school.png`
- 시간대: `day`
- 다음: `hidden_perfect_homeroom_2b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 졸업 진심으로 축하한다. 네 추천서 사본이랑 독서 기록은 이 갈색 봉투 안에 다 챙겨 넣었어. 집에 가서 빠진 서류 없는지 꼭 확인해 보고.

---

### `hidden_perfect_homeroom_2b`
- 배경: `room_school.png`
- 시간대: `day`
- 다음: `hidden_perfect_homeroom_2c`

- 캐릭터: `teacher_shy.png`
**{name}**: 선생님, 그때 쓰시던 소설 원고는... 마지막 장까지 다 끝내셨어요?

---

### `hidden_perfect_homeroom_2c`
- 배경: `room_school.png`
- 시간대: `day`
- 다음: `hidden_perfect_homeroom_3`

- 캐릭터: `teacher_sad.png`
**담임선생님**: *선생님의 눈매가 봄볕처럼 부드럽게 휘어진다.* 네가 남겨 준 합평 덕분에 마침내 마지막 문장까지 찍었어. 어제 출판사에도 원고 보냈고. 그다음 결과는 이제 어른인 내가 감당할 몫이야. ...너도 가서 아프지 말고 잘 지내.

---

### `hidden_perfect_homeroom_3`
- 배경: `street.png`
- 시간대: `sunset`
- 다음: `hidden_perfect_homeroom_3b`

- 캐릭터: `없음`
**{name}**: *졸업식 날 교문을 나선 뒤로 사적인 연락 한 번 없이 네 해가 흘렀다. 대학을 마친 나는 첫 직장 근처에 작은 오피스텔을 얻어 혼자 살아가고 있다.*

---

### `hidden_perfect_homeroom_3b`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_3c`

- 캐릭터: `teacher_smile.png`
**{name}**: *야근을 마치고 돌아오던 금요일 저녁, 동네 대형 서점 카페 입구에 세워진 북토크 안내판에서 사무치도록 익숙한 이름 석 자를 발견한다. 설마 하는 마음으로 고개를 든 순간, 단상 옆에서 짐을 정리하던 그녀와 거짓말처럼 눈이 마주친다.*

---

### `hidden_perfect_homeroom_3c`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_3e`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *그녀가 놀란 눈으로 입가를 가렸다가 이내 환하게 웃으며 다가온다.* 세상에, 정말 우연이네. *품에 안고 있던 행사 자료를 테이블 위에 내려놓는다.* 오늘 퇴근길이야? 시간 괜찮으면 잠깐 앉았다 갈래?

---

### `hidden_perfect_homeroom_3e`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_3f`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 응, 학교는 여전히 그대로 나가고 있어. 그리고 보다시피... 결국 내 이름으로 된 책도 한 권 냈네. — 그나저나 넌 요즘 어떤 일 하면서 지내?

---

### `hidden_perfect_homeroom_3f`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_3g`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *마감 안내 방송이 흐르는 카페 창가에서 그녀가 아쉬운 듯 찻잔을 만지작거린다.* 우리, 다음 주에도 여기서 다시 볼래? 사 년 만에 만났더니 오늘 못다 한 이야기가 너무 많네.

---

### `hidden_perfect_homeroom_3g`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_4b`

- 캐릭터: `teacher_shy.png`
**{name}**: *학창 시절 비상 연락망에는 결코 적혀 있지 않던 두 사람만의 개인 휴대폰 번호를 나란히 주고받아 저장한다.*

---

### `hidden_perfect_homeroom_4b`
- 배경: `bookstore.png`
- 다음: `hidden_perfect_homeroom_4c`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *두 번째로 만난 주말 오후, 그녀가 서점 매대에서 갓 인쇄된 자신의 첫 단행본 한 권을 꺼내 내 두 손에 안겨 준다.* 이번엔 04번 미완성 합평본이 아니라 정식 출간본이야. ...내 첫 번째 독자로서, 다시 읽어 줄래?

---

### `hidden_perfect_homeroom_4c`
- 배경: `room_my.png`
- 다음: `hidden_perfect_homeroom_4d`

- 캐릭터: `없음`
**{name}**: *스탠드 조명만 켜 둔 자취방 침대에 기대앉아, 새벽빛이 창가를 밝힐 때까지 숨조차 아껴 가며 마지막 장까지 단숨에 읽어 내려간다. 학생이 아닌 한 사람의 성인 독자로서, 그녀가 칠 년 만에 완성한 결말의 행간을 온몸으로 껴안는다.*

---

### `hidden_perfect_homeroom_4d`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_4e`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *세 번째 만남을 앞둔 주중 저녁의 조용한 카페. 그녀가 티스푼으로 커피를 천천히 한 번 저은 뒤 잔에서 손을 뗀다. 긴장으로 살짝 붉어진 뺨이 조명 아래서 흔들린다.* ...마지막 장까지 다 읽었어? 어땠는지 들려줄래?

---

### `hidden_perfect_homeroom_4e`
- 배경: `cafe.png`
- 다음: `hidden_perfect_homeroom_4f`

- 캐릭터: `teacher_normal.png`
**{name}**: *만개한 밤벚꽃이 창밖으로 흩날리는 주말 저녁, 퇴근 후 달려간 루프탑 카페 테라스에는 그녀가 연분홍빛 작은 꽃다발을 품에 안은 채 먼저 와 기다리고 있다.*

---

### `hidden_perfect_homeroom_4f`
- 배경: `ending_perfect_teacher.png`
- 다음: `hidden_perfect_homeroom_4g`

- 캐릭터: `없음`
**{name}**: *테이블 한가운데에 향긋한 꽃다발을 내려놓고 바람에 풀린 포장 리본 끝을 두 사람의 손끝이 스치며 나란히 정돈한다.*

---

### `hidden_perfect_homeroom_4g`
- 배경: `ending_perfect_teacher.png`
- 플래그: `isDating_Teacher`
- 다음: `hidden_perfect_homeroom_ending_title`

- 캐릭터: `없음`
**담임선생님**: *그녀가 깊게 숨을 들이쉬더니, 더 이상 스승의 그늘 뒤에 숨지 않는 투명하고 뜨거운 눈빛으로 내 손을 가만히 덮어 쥔다.* 내 문장이 세상 밖으로 나올 때까지 잊지 않고 기다려 줘서 고마워. 그 고마움으로 건네는 꽃이야. 그리고… 앞으로의 모든 계절에도 계속 네 옆에서 보고 싶다는 고백으로 받아 줘도 될까?

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
**{name}**: *벚꽃잎이 내려앉은 카페 테라스 문가에서, 꽃다발을 안은 그녀의 따뜻한 손가락이 내 손등을 감싼 채 떨리는 대답을 기다린다.*

---

### `hidden_perfect_homeroom_ep1`
- 배경: `ending_perfect_teacher.png`
- 다음: `hidden_perfect_homeroom_ep2`

- 캐릭터: `없음`
**{name}**: *그날 밤 두 사람의 식탁 위에서는, 아득한 고등학교 교실의 추억보다 서로가 홀로 견뎌 낸 지난 사 년의 밤들과 앞으로 함께 채워 갈 밤들의 이야기가 훨씬 더 길고 깊게 이어졌다.*

---

### `hidden_perfect_homeroom_ep2`
- 배경: `ending_perfect_teacher.png`
- 다음: `hidden_perfect_homeroom_ep3`

- 캐릭터: `없음`
**{name}**: *다음 데이트 약속은 언제나 두 사람이 번갈아 정했다. 목요일 밤의 와인바는 그녀가, 토요일 오후의 한적한 서점 골목은 내가 골랐다.*

---

### `hidden_perfect_homeroom_ep3`
- 배경: `ending_perfect_teacher.png`
- 다음: `date_choice_perfect_teacher`

- 캐릭터: `없음`
**{name}**: *이듬해 가을, 그녀의 두 번째 장편소설이 세상에 나왔다. 첫 장의 헌정사에는 누군가의 이름을 직접 밝히는 대신, 우리 둘만 알 수 있는 문장이 고요하게 인쇄되어 있었다. '멈춰 선 마지막 장을 끝까지 읽어 내고 자신의 목소리로 내 삶을 다시 움직여 준 단 한 사람에게.'*

---

### `date_choice_perfect_teacher`
- 배경: `cafe.png`
- 시간대: `day`
- 선택지:
  1. "카페." → `date_perfect_teacher_cafe_1`
  2. "전시." → `date_perfect_teacher_museum_1`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *그녀의 두 번째 소설이 출간된 뒤 맞이한 첫 주말, 노을이 드는 카페에서 그녀가 메뉴판을 가만히 덮는다.* 이제는 무거운 직함 다 떼고 나란히 걸을 만한 곳이 많아. 오늘은 어디가 좋아?

---

### `date_perfect_teacher_cafe_1`
- 배경: `cafe.png`
- 시간대: `day`
- 다음: `date_perfect_teacher_cafe_2`

- 캐릭터: `teacher_smile.png`
**{name}**: *그녀는 유리창 밖의 가로수길을 바라보며 따뜻한 찻잔을 천천히 돌린다. 이제 두 사람 사이에는 거리감을 가로막던 교탁이 없다.*

---

### `date_perfect_teacher_cafe_2`
- 배경: `cafe.png`
- 시간대: `day`
- 다음: `date_perfect_teacher_cafe_3`

- 캐릭터: `teacher_smile.png`
**담임선생님**: 다음 주말에도 어디서 볼지는 네가 편하게 정해. 내 일정표는 이미 너한테 맞춰서 비워 뒀으니까.

---

### `date_perfect_teacher_cafe_3`
- 배경: `cafe.png`
- 시간대: `day`
- 다음: `hidden_perfect_homeroom_ep4`

- 캐릭터: `teacher_smile.png`
**{name}**: *커피 영수증 아래에 그녀가 만년필로 적어 준 다음 약속 메모에는, 만날 장소만 적혀 있고 돌아갈 시간은 하얗게 비워져 있다.*

---

### `date_perfect_teacher_museum_1`
- 배경: `museum.png`
- 시간대: `day`
- 다음: `date_perfect_teacher_museum_2`

- 캐릭터: `teacher_smile.png`
**{name}**: *조용한 미술관 전시실을 걸으며 그녀는 벽면의 작품 설명문을 먼저 읽는 대신 내 옆에서 걸음의 보폭을 나란히 맞춘다.*

---

### `date_perfect_teacher_museum_2`
- 배경: `museum.png`
- 시간대: `day`
- 다음: `date_perfect_teacher_museum_3`

- 캐릭터: `teacher_smile.png`
**담임선생님**: *내 팔짱을 살며시 끼며 귓가에 속삭인다.* 오늘 작품 설명은 네가 읽어 줘. 나는 그냥 네 목소리 들으면서 옆에 있을 테니까.

---

### `date_perfect_teacher_museum_3`
- 배경: `museum.png`
- 시간대: `day`
- 다음: `hidden_perfect_homeroom_ep4`

- 캐릭터: `teacher_smile.png`
**{name}**: *전시관 출구 앞의 은은한 조명 아래서, 그녀가 멈춰 서서 내 어깨에서 흘러내린 가방 끈을 다정한 손길로 고쳐 매어 준다.*

---

### `hidden_perfect_homeroom_ep4`
- 배경: `ending_perfect_teacher.png`
- 다음: `day5_teacher_ending_freetalk_intro`

- 캐릭터: `없음`
**{name}**: *나란히 맞춘 두 사람의 휴대폰 공유 달력에는 서로의 마감일과 주말의 여행 약속들이 빼곡히 적혀 있다. 교실 안에서 부르던 옛 호칭은 이제 네 해 전 빛바랜 졸업앨범 갈피 속에만 아련한 계절의 이름으로 남아 있다.*

---

### `hidden_true_homeroom_1`
- 배경: `bookstore.png`
- BGM: `ending.mp3`
- 플래그: `ending_true_love`
- 다음: `hidden_true_homeroom_2`

- 캐릭터: `없음`
**{name}**: *졸업 후 네 해가 흘렀다. 그동안 두 사람은 사적으로 연락을 주고받은 적이 단 한 번도 없다. 학교를 떠나 대학을 마친 나는 스스로 생활비를 벌며 어른의 일상을 살아가고 있다. 그러던 어느 봄날 퇴근길, 동네 독립서점 유리창에 붙은 북토크 포스터에서 사무치게 익숙한 이름 석 자를 발견한다.*

---

### `hidden_true_homeroom_2`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_2_b`

- 캐릭터: `teacher_sad.png`
**{name}**: *북토크 행사가 끝난 뒤 독자들이 빠져나가고 사인대 앞이 조용히 비었다. 부드러운 베이지색 카디건 차림으로 남은 책들을 정리하던 작가가 내 발소리에 천천히 고개를 든다.*

---

### `hidden_true_homeroom_2_b`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *내 목에는 직장인 사원증이 걸려 있고 그녀의 손에는 옛 교실의 출석부 대신 자신의 이름이 선명하게 박힌 첫 단행본이 들려 있다.*

---

### `hidden_true_homeroom_3`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_3_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *그녀의 눈동자가 놀라움으로 크게 흔들리더니 이내 벅찬 미소가 번진다.* ...정말 오랜만이네. 이제는 서로 뭐라고 불러야 할까?

---

### `hidden_true_homeroom_3_b`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_3_c`

- 캐릭터: `teacher_normal.png`
**{name}**: 편하게 이름으로 불러 주세요. 저도 이제 교복 입은 학생은 아니니까요.

---

### `hidden_true_homeroom_3_c`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *살짝 달아오른 뺨을 손등으로 스치며 웃는다.* 그건 조금씩 천천히 연습하자. 오늘은 내 책을 읽으러 온 독자로 마주한 거지?

---

### `hidden_true_homeroom_4`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_4_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *내 셔츠 위로 늘어진 회사 출입증을 바라보며 대견한 듯 눈매를 접어 웃는다.* 사회생활은 좀 할 만해? 밥은 제때 챙겨 먹고 다니고?

---

### `hidden_true_homeroom_4_b`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_4_c`

- 캐릭터: `teacher_normal.png`
**{name}**: *어색함도 잠시, 옛 학교 이야기보다 서로의 직장 생활과 요즘 밤마다 펼쳐 보는 책 이야기가 자연스럽게 먼저 흘러나온다.*

---

### `hidden_true_homeroom_4_c`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_4_d`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *그녀가 가방 옆에 따로 챙겨 두었던 책 한 권을 꺼내 보인다. 네 해 전 빈 교실 교탁 서랍 속에 들어 있던 그 미완성 원고와 똑같은 제목이다.*

---

### `hidden_true_homeroom_4_d`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_4_e`

- 캐릭터: `teacher_sad.png`
**담임선생님**: 포기하지 않고 결국 끝까지 다 썼어. 그때 문예부 합평회에서 받았던 익명 의견란도... 몇 년 내내 닳도록 들여다봤거든.

---

### `hidden_true_homeroom_4_e`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_4_f`

- 캐릭터: `teacher_normal.png`
**{name}**: 그날 04번 원고 뒷장에 제가 남겼던 표시도 기억하세요?

---

### `hidden_true_homeroom_4_f`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_4_g`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *장난기 어린 눈빛으로 나를 올려다본다.* 누가 썼는지는 끝까지 안 찾아보기로 약속했었잖아. 다만... 유독 마지막 백지장 여백에 날카롭고 다정한 질문이 빼곡했던 한 부는 아주 선명하게 기억해.

---

### `hidden_true_homeroom_4_g`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_4_h`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *그녀는 단정한 손길로 책 모서리만 가만히 맞춘다. 불안할 때마다 종이 컵홀더를 잘게 접었다 펴던 옛 습관은 더 이상 보이지 않는다.*

---

### `hidden_true_homeroom_4_h`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_5`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 오늘 서점 행사는 다 끝났는데 지금 시간 괜찮아? 근처에서 따뜻한 커피 한 잔 같이 마시고 싶어. ...물론 네가 조금이라도 부담스러우면 오늘은 여기서 반갑게 인사만 나누고 가도 괜찮아.

---

### `hidden_true_homeroom_5`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_5_b`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 네 해 전 교실에 앉아 있던 학생이 아니라... 어른이 되어 내 앞에 서 있는 지금의 너와 다시 이야기를 시작해 보고 싶어.

---

### `hidden_true_homeroom_5_b`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_5_c`

- 캐릭터: `teacher_normal.png`
**{name}**: *그녀는 서점 카운터 쪽으로 먼저 발을 떼지 않은 채, 맑게 흔들리는 눈동자로 내 대답을 기다린다.*

---

### `hidden_true_homeroom_5_c`
- 배경: `bookstore.png`
- 다음: `hidden_true_homeroom_6`

- 캐릭터: `teacher_normal.png`
**{name}**: 저도 교단 위가 아닌 지금의 당신을 새로 알아 가고 싶어요. 호칭은 우리 천천히 정하기로 하고요.

---

### `hidden_true_homeroom_6`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_6_b`

- 캐릭터: `teacher_shy.png`
**담임선생님**: *그제야 그녀의 어깨에서 긴장이 풀리며 환한 미소가 피어난다.* 좋아. 그럼 일단 따뜻한 커피부터 마시러 가자. 못다 한 이야기는 마주 앉아서 천천히 나누기로 해.

---

### `hidden_true_homeroom_6_b`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_7`

- 캐릭터: `teacher_shy.png`
**{name}**: 요즘 아침에 출근하시는 데는 얼마나 걸려요? *봄밤의 가로수길을 나란히 걸어 카페로 향하며 서로의 출퇴근길과 일상의 사소한 조각들을 하나씩 묻고 답한다.*

---

### `hidden_true_homeroom_7`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_7_b`

- 캐릭터: `teacher_shy.png`
**{name}**: 오늘만 말고 다음 주말 약속도 지금 미리 잡아 두고 싶어요.

---

### `hidden_true_homeroom_7_b`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_7_c`

- 캐릭터: `teacher_shy.png`
**담임선생님**: 여기 내 개인 번호야. ...지금 바로 네 휴대폰에 저장해도 돼. *그녀가 뺨을 붉히며 연락처 입력 화면이 열린 휴대폰을 먼저 내 앞으로 내민다.*

---

### `hidden_true_homeroom_7_c`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_7_d`

- 캐릭터: `teacher_smile.png`
**담임선생님**: 오늘부터 옛 호칭을 억지로 지우려고 애쓰진 말자. 대신, 서로의 진짜 이름부터 차근차근 다시 배워 가자.

---

### `hidden_true_homeroom_7_d`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_8`

- 캐릭터: `teacher_normal.png`
**{name}**: *커피 향이 감도는 작은 테이블 너머로 서로의 이름을 한 번씩 나직이 불러 본다. 그녀도 직함을 떼고 '{name}', 내 이름을 입술 위에서 보물처럼 천천히 굴려 부른다.*

---

### `hidden_true_homeroom_8`
- 배경: `ending_true_teacher.png`
- 다음: `date_choice_true_teacher`

- 캐릭터: `없음`
**담임선생님**: *작은 케이크 접시 너머로 그녀가 하얀 손바닥을 살며시 펴 보인다. 내 손끝에 닿기 직전 아슬아슬하게 멈춘 채 내 대답을 기다린다.* ...우리, 다음 주에도 만날래?

---

### `date_choice_true_teacher`
- 배경: `cafe.png`
- 선택지:
  1. "테이블." → `date_true_teacher_1`
  2. "전시." → `date_true_teacher_alt_1`

- 캐릭터: `teacher_smile.png`
**담임선생님**: 서점 북토크 행사는 이제 다 끝났네. 우리 카페 테이블에 조금 더 앉아 있을까, 아니면 근처 야간 전시를 보러 걸어갈까?

---

### `date_true_teacher_1`
- 배경: `cafe.png`
- 다음: `date_true_teacher_2`

- 캐릭터: `teacher_smile.png`
**담임선생님**: 다음 주에 만날 약속 시간은 네가 정해 줘. 이번엔 나도 바쁘다는 핑계로 먼저 거절하지 않을게.

---

### `date_true_teacher_2`
- 배경: `cafe.png`
- 다음: `hidden_true_homeroom_ending_title`

- 캐릭터: `teacher_smile.png`
**{name}**: *잔 속의 커피가 미지근하게 식어 가는데도, 그녀는 손목시계를 한 번도 확인하지 않은 채 내 이야기에 귀를 기울인다.*

---

### `date_true_teacher_alt_1`
- 배경: `museum.png`
- 다음: `date_true_teacher_alt_2`

- 캐릭터: `teacher_smile.png`
**담임선생님**: 어려운 평론가 설명은 안 읽어도 돼. 그냥 이렇게 내 옆에서 같은 그림을 같이 봐 줘.

---

### `date_true_teacher_alt_2`
- 배경: `museum.png`
- 다음: `hidden_true_homeroom_ending_title`

- 캐릭터: `teacher_smile.png`
**{name}**: *전시관 출구의 따뜻한 조명 아래에서, 그녀가 말없이 다가와 내 비뚤어진 가방 끈을 반듯하게 고쳐 준다.*

---

### `hidden_true_homeroom_ending_title`
- 배경: `ending_true_teacher.png`
- 다음: `day5_teacher_ending_freetalk_intro`

- 캐릭터: `없음`
**—**: ─── 담임선생님 TRUE LOVE END ───

---

### `hidden_good_homeroom_1`
- 배경: `room_school.png`
- 시간대: `day`
- BGM: `night2.mp3`
- 다음: `hidden_good_homeroom_2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *졸업식 소란이 잦아든 빈 교실, 추천서 사본과 문예부 합평본 기록을 정리하던 선생님이 문가에 멈춰 선 나를 부른다.* 여기, 이건 네가 남긴 기록들이야. 졸업 가방에 넣기 전에 빠진 종이는 없는지 확인해 보렴.

---

### `hidden_good_homeroom_2`
- 배경: `school_hallway.png`
- 시간대: `day`
- 다음: `hidden_good_homeroom_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *두툼한 서류 봉투를 두 손으로 받아 들고 복도로 걸어 나온다. 선생님은 남은 원고 뭉치를 품에 안은 채 마지막으로 교실을 떠나는 졸업생들을 따뜻하게 배웅한다.*

---

### `hidden_good_homeroom_3`
- 배경: `school_hallway.png`
- 시간대: `day`
- 다음: `hidden_good_homeroom_4`

- 캐릭터: `teacher_normal.png`
**담임선생님**: 학교 밖으로 나가서도 네 글은 네가 계속 써 내려가렴. 내 미완성 원고는 내가 책임지고 끝낼 테니까. 우리 각자 맡은 삶부터 성실하게 채워 가자.

---

### `hidden_good_homeroom_4`
- 배경: `ending_good_teacher.png`
- 시간대: `day`
- 다음: `hidden_good_homeroom_ending_title`

- 캐릭터: `없음`
**{name}**: *봄 햇살이 비치는 교실 창가에서 끝까지 손을 흔들어 주는 선생님에게 깊이 고개를 숙여 인사하고 마침내 정든 교문을 나선다.*

---

### `hidden_good_homeroom_ending_title`
- 배경: `ending_good_teacher.png`
- 시간대: `day`
- 다음: `day5_teacher_ending_freetalk_intro`

- 캐릭터: `없음`
**—**: ─── 담임선생님 GOOD END ───

---

### `hidden_bitter_homeroom_1`
- 배경: `room_school.png`
- 배경톤: `empty`
- 시간대: `day`
- BGM: `night2.mp3`
- 플래그: `ending_bittersweet`
- 다음: `hidden_bitter_homeroom_2`

- 캐릭터: `teacher_normal.png`
**담임선생님**: *졸업식이 끝난 뒤 고요해진 빈 교실. 선생님은 내가 건넨 편지를 끝까지 읽고 나서, 봉투를 닫아 교탁 위에 조심스레 내려놓는다.* ...미안하지만 이 편지는 내가 받아 둘 수가 없어.

---

### `hidden_bitter_homeroom_2`
- 배경: `room_school.png`
- 시간대: `day`
- 다음: `hidden_bitter_homeroom_3`

- 캐릭터: `teacher_normal.png`
**{name}**: *선생님의 손끝에서 구김 하나 없이 반듯하게 펴진 편지 봉투가 내게로 조용히 되돌아온다.*

---

### `hidden_bitter_homeroom_3`
- 배경: `room_school.png`
- 시간대: `day`
- 다음: `hidden_bitter_homeroom_4`

- 캐릭터: `teacher_sad.png`
**담임선생님**: 네가 글을 보는 눈을 믿었고 내 학생으로서 너를 진심으로 아꼈던 건 사실이야. 하지만 선생님이 네가 바라는 방식으로 그 마음에 답해서는 안 돼.

---

### `hidden_bitter_homeroom_4`
- 배경: `room_school.png`
- 시간대: `day`
- 다음: `hidden_bitter_homeroom_5`

- 캐릭터: `teacher_normal.png`
**{name}**: *활짝 열린 교실 문 앞. 선생님이 졸업 추천서 봉투 위에 내 편지를 가지런히 포개어 두 손으로 돌려준다.*

---

### `hidden_bitter_homeroom_5`
- 배경: `room_school.png`
- 시간대: `day`
- 다음: `hidden_bitter_homeroom_6`

- 캐릭터: `teacher_sad.png`
**담임선생님**: 졸업을 진심으로 축하해. 앞으로 네가 써 내려갈 문장들은 멀리서도 늘 궁금하겠지만 그 옆자리를 내가 약속해 줄 수는 없어.

---

### `hidden_bitter_homeroom_6`
- 배경: `ending_bittersweet_teacher.png`
- 시간대: `day`
- 다음: `hidden_bitter_homeroom_ending_title`

- 캐릭터: `없음`
**{name}**: *돌려받은 편지와 추천서 봉투를 가방에 챙겨 넣고 복도로 걸어 나온다. 등 뒤의 빈 교실에서는 끝내 나를 다시 부르는 소리가 들리지 않는다.*

---

### `hidden_bitter_homeroom_ending_title`
- 배경: `ending_bittersweet_teacher.png`
- 시간대: `day`
- 다음: `day5_teacher_ending_freetalk_intro`

- 캐릭터: `없음`
**—**: ─── 담임선생님 BITTERSWEET END ───

---

### `day5_teacher_ending_freetalk_intro`
- 배경: `cafe.png`
- 다음: `day5_teacher_ending_freetalk_router`

- 캐릭터: `teacher_smile.png`
**{name}**: *창가 카페 테이블 위에는 출간된 그녀의 단행본과 따뜻한 커피 두 잔이 나란히 놓여 있다.*

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
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "담임선생님 PERFECT END 이후의 보너스 대화다. 졸업 뒤 4년간 개인 연락 없이 지낸 두 성인이 우연히 재회했고 여러 번의 만남과 고백을 거쳐 동등한 연인이 됐다. 서로의 근무일과 주말 약속을 공유한다. 과거 교사와 미성년 학생 시점의 연애로 되돌아가지 않는다."
- 성격: "그녀는 책임감 있고 사려 깊은 작가이자 현재의 동등한 연인이다. 옛 호칭을 억지로 지우지 않되 권위적으로 대하지 않고 오래 다듬은 관계의 따뜻함과 솔직한 애정을 보여 준다."

- 캐릭터: `teacher_smile.png`
**담임선생님**: *공유 달력 앱의 다음 주말 칸을 열어 두고 출간된 책을 살며시 덮는다.* 이번 토요일 약속은 네가 정할 차례네. 우리 어디서 만날까?

---

### `day5_teacher_ending_freetalk_true_love`
- 배경: `bookstore.png`
- 타입: `free_talk`
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "담임선생님 TRUE LOVE END 직후의 보너스 대화다. 졸업 뒤 4년 동안 개인 연락이 없었고 독립해 일하는 성인이 된 주인공과 작가가 된 전 담임이 북토크에서 재회했다. 둘은 이름과 연락처를 새로 배우고 다음 만남을 약속한 시작 단계다. 이미 오래 사귄 연인처럼 앞당기지 않는다."
- 성격: "그녀는 과거의 권력관계를 분명히 끝내고 현재의 성인인 상대를 신중하게 알아간다. 호감은 솔직히 표현하지만 선택권을 확인하고 새 관계 특유의 조심스러움과 설렘을 유지한다."

- 캐릭터: `teacher_smile.png`
**담임선생님**: *북토크가 끝난 독립서점 한켠에서 방금 저장한 연락처 화면을 열어 보인다.* 다음 주에 만나면 네가 그동안 어떻게 지냈는지 더 깊이 들려줘. 물론 지금 여기서 조금 더 얘기하다 가도 좋고.

---

### `day5_teacher_ending_freetalk_good`
- 배경: `room_school.png`
- 시간대: `day`
- 타입: `free_talk`
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "담임선생님 GOOD END의 졸업식 직후 보너스 대화다. 담임이 추천서와 문예부 기록을 건네고 교사와 졸업생은 각자 맡은 글과 삶을 이어 가기로 하며 작별한다. 성인 재회나 연애는 발생하지 않았으며 이 대화에서도 미성년 학생과 교사의 로맨스를 만들지 않는다."
- 성격: "담임은 교사로서 따뜻하고 책임감 있게 졸업생을 배웅한다. 개인적 미련이나 유혹 대신 진로와 글, 학교생활에 관한 마지막 말을 진지하게 듣고 명확한 경계를 지킨다."

- 캐릭터: `teacher_normal.png`
**담임선생님**: *졸업 기록이 담긴 갈색 봉투를 건네고 빈 교실 문을 열어 둔다.* 어디에 가든 네 글은 네가 계속 써 내려가렴. 교문을 나서기 전에 마지막으로 물어보고 싶은 건 있니?

---

### `day5_teacher_ending_freetalk_bittersweet`
- 배경: `room_school.png`
- 배경톤: `empty`
- 시간대: `day`
- 타입: `free_talk`
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "담임선생님 BITTERSWEET END의 졸업식 직후 보너스 대화다. 주인공은 원고 상담과 관심을 개인적인 호감으로 받아들여 편지로 마음을 전했지만 담임은 편지를 돌려주고 교사와 학생의 경계를 분명히 했다. 성인 재회나 연애는 없으며 이 대화에서도 거절을 번복하거나 비밀 관계를 만들지 않는다."
- 성격: "담임은 미안함 때문에 여지를 주지 않는다. 학생의 감정을 비웃지 않고 차분히 듣되 글을 향한 격려와 개인적인 약속을 분리해 단호하고 책임감 있게 작별한다."

- 캐릭터: `teacher_sad.png`
**담임선생님**: *교탁 위에 돌려놓은 편지 봉투에서 손을 떼고 열린 교실 문밖을 바라본다.* 졸업생으로서 건네는 마지막 인사는 기꺼이 들을게. 다만 네가 편지에 적어 준 기대에 같은 마음으로 답해 줄 수는 없어.

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
- 시간대: `day`
- BGM: `ending.mp3`
- 플래그: `ending_perfect`
- 다음: `hidden_perfect_nurse_2`

- 캐릭터: `없음`
**{name}**: *고등학교를 졸업한 뒤로 다섯 해가 흘렀다. 타지에서 직장을 잡고 홀로 자취한 지도 어느덧 이 년째. 주말 오후 우연히 들른 지역 건강 박람회 부스에서, 응급처치 시범 강사의 가슴에 달린 명찰을 보고 걸음을 멈춘다. 단 한 번도 잊은 적 없는 이름, 이주원.*

---

### `hidden_perfect_nurse_2`
- 배경: `street.png`
- 시간대: `day`
- 다음: `hidden_perfect_nurse_3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *강연을 마치고 하얀 가운 위의 강사 명찰을 떼어 내던 그녀가 나를 발견하고 눈을 크게 뜬다.* ...어머, {name}? 세상에, 이 먼 동네에서 너를 다시 마주칠 줄은 꿈에도 몰랐네.

---

### `hidden_perfect_nurse_3`
- 배경: `cafe.png`
- 시간대: `day`
- 다음: `hidden_perfect_nurse_3b`

- 캐릭터: `없음`
**{name}**: *행사장 맞은편의 아담한 카페 창가 자리. 실습용 압박붕대와 구급상자는 가방 속에 넣어 둔 채, 다섯 해 만에 두 사람의 시선이 테이블 너머로 마주 닿는다.*

---

### `hidden_perfect_nurse_3b`
- 배경: `cafe.png`
- 시간대: `day`
- 다음: `hidden_perfect_nurse_4`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *그녀가 찻잔을 감싸 쥐며 조심스레 미소 짓는다.* 예전엔 내가 학교에서 네 상담을 맡았던 교사였잖아. 이제는 다 큰 어른이라지만 이렇게 단둘이 마주 앉아도 너 괜찮겠어?

---

### `hidden_perfect_nurse_4`
- 배경: `cafe.png`
- 시간대: `day`
- 다음: `hidden_perfect_nurse_4b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 혹시라도 옛날 생각이 나서 조금이라도 불편하면 오늘은 반갑게 안부만 묻고 일어나도 돼. 난 그저 네가 그동안 아프지 않고 잘 지내고 있었는지만 궁금했거든.

---

### `hidden_perfect_nurse_4b`
- 배경: `cafe.png`
- 시간대: `day`
- 다음: `hidden_perfect_nurse_5`

- 캐릭터: `없음`
**{name}**: 전혀 안 불편해요. 저도 오늘은 옛날 보건실 상담 말고 이주원이라는 사람의 요즘 이야기를 듣고 싶어요.

---

### `hidden_perfect_nurse_5`
- 배경: `cafe.png`
- 시간대: `day`
- 다음: `hidden_perfect_nurse_5b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *그녀의 눈매가 나른하고 달콤한 곡선으로 부드럽게 풀린다.* ...그래? 그럼 우리 다음 만남은, 진료도 상담도 아닌 두 사람의 사적인 약속으로 잡아 볼까?

---

### `hidden_perfect_nurse_5b`
- 배경: `cafe.png`
- 시간대: `day`
- 플래그: `isDating_Nurse`
- 다음: `hidden_perfect_nurse_ep1`

- 캐릭터: `없음`
**{name}**: *테이블 위로 휴대폰 달력을 나란히 맞대어 보다가, 두 사람 모두 근무가 비는 다음 주 토요일 칸에 동시에 손가락을 짚는다.*

---

### `hidden_perfect_nurse_ep1`
- 배경: `ending_perfect_nurse.png`
- 다음: `nurse_perfect_pills_0`

- 캐릭터: `없음`
**{name}**: *계절이 바뀌도록 이어진 수많은 주말의 데이트 끝에, 마침내 그녀의 집에서 처음으로 같은 아침 햇살을 맞이한다. 잠에서 막 깬 주원이 따뜻한 이불 아래로 하얀 손을 내밀어, 내 손가락이 깍지 끼워지기를 느슨하게 기다린다.*

---

### `nurse_perfect_pills_0`
- 배경: `ending_perfect_nurse.png`
- 시간대: `day`
- 다음: `nurse_perfect_pills_1`

- 캐릭터: `없음`
**보건선생님**: *아침 햇살이 스며드는 침실, 주원이 잠옷 가운 자락을 여미며 물컵을 들고 침대 맡으로 다가온다.* 너 아까 잠결에 깼을 때 안색이 영 안 좋더라. 물이랑 아침약 챙겨 왔어.

---

### `nurse_perfect_pills_1`
- 배경: `nurse_bedroom_pills.jpg`
- 시간대: `day`
- 다음: `nurse_perfect_pills_ask`

- 캐릭터: `없음`
**보건선생님**: *그녀가 포근한 이불 밖으로 하얀 두 손바닥을 나란히 내민다. 왼쪽 손바닥 위에는 낯선 검은 알약이, 오른쪽 손바닥 위에는 매끈한 분홍 알약이 올려져 있다.*

---

### `nurse_perfect_pills_ask`
- 배경: `nurse_bedroom_pills.jpg`
- 시간대: `day`
- 다음: `nurse_perfect_pills_2`

- 캐릭터: `없음`
**{name}**: 주원 씨, 이 약은 뭐야?

---

### `nurse_perfect_pills_2`
- 배경: `nurse_bedroom_pills.jpg`
- 시간대: `day`
- 선택지:
  1. "분홍 알약" → `nurse_perfect_pills_pink`
  2. "검은 알약" → `nurse_perfect_pills_black_1`

- 캐릭터: `없음`
**보건선생님**: 그냥 피로 회복 영양제야. 어젯밤에 우리 둘 다 조금 무리했으니까.

---

### `nurse_perfect_pills_pink`
- 배경: `nurse_bedroom_pills.jpg`
- 시간대: `day`
- 다음: `nurse_perfect_pills_pink_2`

- 캐릭터: `없음`
**{name}**: *그녀의 손바닥에서 분홍 알약을 집어 물과 함께 삼키자, 식도를 따라 나른하고 따뜻한 온기가 번져 내려간다. 혀끝에는 사탕처럼 달콤한 잔향이 남는다.*

---

### `nurse_perfect_pills_pink_2`
- 배경: `nurse_bedroom_pills.jpg`
- 시간대: `day`
- 다음: `nurse_perfect_pills_pink_3`

- 캐릭터: `없음`
**보건선생님**: *주원이 물컵을 협탁 위에 내려놓고 다시 이불 속으로 미끄러져 들어오며 내 품을 파고든다.* ...오늘 오전엔 아무 생각 말고 이대로 조금만 더 같이 누워 있자.

---

### `nurse_perfect_pills_pink_3`
- 배경: `ending_perfect_nurse.png`
- 시간대: `day`
- 다음: `hidden_perfect_nurse_ending_title`

- 캐릭터: `없음`
**{name}**: *따뜻하게 데워진 이불 아래에서, 두 사람의 맨손가락이 다시금 촘촘하게 얽혀 맞닿는다.*

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
**{name}**: *주원의 침대에서 나란히 눈을 떴던 그 일요일 아침 이후로, 두 사람의 공유 달력 속 주말 칸은 빈틈없이 포근한 일정들로 채워졌다. 그사이 주원은 대학병원 간호교육팀으로 자리를 옮겼고 갓 들어온 신규 간호사들도 그녀를 선생님이라 불렀다. 이제는 내 연인이 된, 이주원 선생님.*

---

### `hidden_perfect_nurse_ep3`
- 배경: `nurse_house.png`
- 다음: `date_choice_perfect_nurse`

- 캐릭터: `없음`
**{name}**: *두 사람이 함께 고른 새집 거실 창가에는 푸른 로즈마리 화분이 놓여 있다. 아침마다 잎사귀에 분무기로 물을 주는 일은 두 사람이 나란히 번갈아 맡는다.*

---

### `date_choice_perfect_nurse`
- 배경: `nurse_house_day.webp`
- 시간대: `day`
- 선택지:
  1. "집." → `date_perfect_nurse_home_1`
  2. "공원." → `date_perfect_nurse_park_1`

- 캐릭터: `nurse_home_smile.webp`
**보건선생님**: *주원이 내 손등 위로 손가락을 포개며 나른하게 눈웃음 짓는다.* 어떤 차트나 기록에도 남기지 않을 우리 둘만의 주말이 생겼네. 오늘은 집에서 뒹굴거리는 게 좋아, 아니면 밖으로 산책 나가는 게 좋아?

---

### `date_perfect_nurse_home_1`
- 배경: `nurse_house_day.webp`
- 시간대: `day`
- 다음: `date_perfect_nurse_home_2`

- 캐릭터: `nurse_home_smile.webp`
**{name}**: *햇살이 길게 드는 주말 오전의 거실. 하얀 가운은 옷장 깊숙이 걸려 있고 낮은 탁자 위에는 미지근한 물컵 두 개만 나란히 놓여 있다.*

---

### `date_perfect_nurse_home_2`
- 배경: `nurse_house_day.webp`
- 시간대: `day`
- 다음: `date_perfect_nurse_home_3`

- 캐릭터: `nurse_home_smile.webp`
**보건선생님**: 오늘은 병원 차트도 시계도 일절 안 볼 거야. 이리 와서 내 옆에 편하게 앉아.

---

### `date_perfect_nurse_home_3`
- 배경: `nurse_house_day.webp`
- 시간대: `day`
- 다음: `hidden_perfect_nurse_ep4`

- 캐릭터: `nurse_home_smile.webp`
**{name}**: *한 뼘쯤 열어 둔 베란다 창문으로 얇은 커튼이 흔들리고 그녀의 고른 숨소리와 시계 초침 소리만이 포근한 방 안을 채운다.*

---

### `date_perfect_nurse_park_1`
- 배경: `park.png`
- 시간대: `day`
- 다음: `date_perfect_nurse_park_2`

- 캐릭터: `nurse_home_smile.webp`
**{name}**: *평소 출퇴근하던 대학병원 쪽 큰길은 일부러 피해 걸어왔다. 푸른 나무 그늘 아래 벤치에 주원이 먼저 자리를 잡고 앉아 손짓한다.*

---

### `date_perfect_nurse_park_2`
- 배경: `park.png`
- 시간대: `day`
- 다음: `date_perfect_nurse_park_3`

- 캐릭터: `nurse_home_smile.webp`
**보건선생님**: 어른인 척 여유 부리는 농담은 오늘 집에 다 두고 왔어. 지금은 아무 말 말고 그냥 이대로 붙어 있자.

---

### `date_perfect_nurse_park_3`
- 배경: `park.png`
- 시간대: `day`
- 다음: `hidden_perfect_nurse_ep4`

- 캐릭터: `nurse_home_smile.webp`
**{name}**: *내 어깨 위에 머리를 기댄 주원이 내 손깍지를 꼭 쥔 채, 바람이 지나가도록 한동안 조금도 움직이지 않는다.*

---

### `hidden_perfect_nurse_ep4`
- 배경: `nurse_house.png`
- 다음: `day5_nurse_ending_freetalk_intro`

- 캐릭터: `없음`
**{name}**: *서랍 깊숙이 간직해 둔 옛 연두색 노트 마지막 장에는, 다섯 해의 시간을 건너온 그녀의 필체로 한 줄이 덧붙여져 있다. '돌아오느라 오래 걸렸지만 이제는 온전히 내 선택으로 너와 다시 시작할게.'*

---

### `nurse_perfect_pills_black_1`
- 배경: `nurse_bedroom_pills.jpg`
- 시간대: `day`
- 다음: `nurse_perfect_pills_black_ask`

- 캐릭터: `없음`
**{name}**: *검은 알약을 삼키는 순간, 얼음 조각을 삼킨 것처럼 목구멍 안쪽이 섬뜩하게 차가워진다.*

---

### `nurse_perfect_pills_black_ask`
- 배경: `nurse_bedroom_pills.jpg`
- 시간대: `day`
- 다음: `nurse_perfect_pills_black_2`

- 캐릭터: `없음`
**{name}**: ...이상하네, 목 안이 왜 이렇게 얼음장처럼 차갑지?

---

### `nurse_perfect_pills_black_2`
- 배경: `nurse_bedroom_pills.jpg`
- BGM: `stop`
- 다음: `nurse_perfect_pills_black_3`

- 캐릭터: `없음`
**{name}**: *다정하게 웃고 있던 그녀의 표정이 순식간에 석고처럼 굳어 버린다. 침대 옆 따뜻한 스탠드 조명이 툭 꺼지고 천장 머리 위에서 차가운 형광등이 불길하게 윙윙거리기 시작한다.*

---

### `nurse_perfect_pills_black_3`
- 배경: `riin_lab_pills.jpg`
- 다음: `nurse_perfect_pills_black_4`

- 캐릭터: `없음`
**{name}**: *깜빡이던 형광등 불빛이 다시 켜지자, 내 눈앞에는 전혀 다른 사람이 서 있다. 어둠처럼 짙은 보랏빛 머리카락에 서늘한 금빛 눈동자. 방금 전까지 내게 두 알의 약을 내밀던 손만이 소름 끼치도록 똑같은 위치에 멈춰 있다.*

---

### `nurse_perfect_pills_black_4`
- 배경: `riin_lab_pills.jpg`

- 캐릭터: `없음`
**강리인**: ...드디어 눈을 떴네. 여기가 진짜야.

---

### `hidden_true_nurse_1`
- 배경: `street.png`
- BGM: `ending.mp3`
- 플래그: `ending_true_love`
- 다음: `hidden_true_nurse_2`

- 캐릭터: `없음`
**{name}**: *고등학교 졸업 후 네 해가 흘렀다. 첫 직장을 잡고 독립해 산 지 일 년째 되던 봄날 퇴근길, 역 앞 광장의 지역 건강 캠페인 부스에서 걸음을 멈추게 하는 다정한 목소리를 듣는다.*

---

### `hidden_true_nurse_2`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_2_b`

- 캐릭터: `nurse_normal.png`
**{name}**: *캠페인 부스 정리가 끝난 뒤 찾아간 근처의 조용한 카페. 홍보용 밴드와 안내 책자는 가방 안에 밀어 넣은 채, 두 사람이 작은 원탁을 사이에 두고 마주 앉는다.*

---

### `hidden_true_nurse_2_b`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_2_c`

- 캐릭터: `nurse_normal.png`
**{name}**: *테이블 위에 나란히 놓인 두 대의 휴대폰 화면에, 내 회사의 야근 수당 승인 알림과 그녀의 건강 행사 종료 보고 완료 메시지가 동시에 깜빡인다.*

---

### `hidden_true_nurse_2_c`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_2_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *그녀가 가운 대신 입은 봄 블라우스 소매를 정돈하며 반갑게 눈을 맞춘다.* 정말 오랜만이네. 그동안 어디 아픈 데 없이 잘 지냈어?

---

### `hidden_true_nurse_2_d`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_3`

- 캐릭터: `nurse_normal.png`
**{name}**: 네. 저도 이제 어엿한 직장인이에요. 작년부터는 집 나와서 혼자 자취도 시작했고요.

---

### `hidden_true_nurse_3`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_3_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *주원이 찻잔을 두 손으로 감싸 쥐며 작게 웃는다.* 다시 만나니 호칭부터 어렵네. 다 큰 성인인데 예전처럼 계속 선생님이라고 부르라고 하면 어색하려나.

---

### `hidden_true_nurse_3_b`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_4`

- 캐릭터: `nurse_normal.png`
**{name}**: 조금씩 천천히 바꾸면 되죠. 이제 우리 사이에 급할 건 아무것도 없잖아요.

---

### `hidden_true_nurse_4`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 하긴, 네가 열여덟 살 때도 보건실 문 열고 들어오면서 늘 괜찮다는 말부터 먼저 꺼내던 건 지금도 생생하게 기억나.

---

### `hidden_true_nurse_5`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그 시절엔 내가 널 지켜야 하는 보건교사였고 넌 학생이었으니까, 딱 그 선까지만 마음을 두는 게 맞았지.

---

### `hidden_true_nurse_5_b`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5_c`

- 캐릭터: `nurse_normal.png`
**{name}**: *주원이 따뜻한 커피잔 손잡이에서 천천히 손을 떼고 깊어진 눈동자로 내 대답을 기다린다.*

---

### `hidden_true_nurse_5_c`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그런데 네 해가 지나서, 오늘 이렇게 같은 어른으로 우연히 다시 만났네.

---

### `hidden_true_nurse_5_d`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5_e`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 그래서 용기 내서 물어볼게. ...우리, 다음 주에도 또 만날래?

---

### `hidden_true_nurse_5_e`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_5_f`

- 캐릭터: `nurse_normal.png`
**{name}**: 처치나 상담 때문이 아니라도요?

---

### `hidden_true_nurse_5_f`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_6`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *그녀가 가느다란 손가락으로 찻잔 테두리를 톡톡 두드리며 발갛게 달아오른 뺨으로 웃는다.* 응. 다음번엔 상담 시간 시계 안 쳐다보고 밤늦도록 우리 얘기만 하자.

---

### `hidden_true_nurse_6`
- 배경: `cafe.png`
- 다음: `hidden_true_nurse_7`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 만약 네 마음이 조금이라도 무겁거나 불편하면 오늘 반가운 인사로 끝내도 괜찮아. 하지만 너도 같은 마음이라면... 다음 주에 꼭 다시 보고 싶어.

---

### `hidden_true_nurse_7`
- 배경: `street.png`
- 다음: `hidden_true_nurse_7_b`

- 캐릭터: `없음`
**{name}**: *봄바람이 부는 밤거리를 따라 지하철역 입구까지 나란히 걷고 개찰구 앞에서 걸음을 멈춘다.*

---

### `hidden_true_nurse_7_b`
- 배경: `street.png`
- 다음: `hidden_true_nurse_7_c`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 방금 내가 한 다음 주 약속 얘기는, 오늘 밤 집에 들어가서 천천히 생각하고 답장해 줘도 돼.

---

### `hidden_true_nurse_7_c`
- 배경: `street.png`
- 다음: `hidden_true_nurse_7_d`

- 캐릭터: `없음`
**{name}**: 생각할 필요 없어요. 저도 다음 주에 주원 씨 다시 만나고 싶어요.

---

### `hidden_true_nurse_7_d`
- 배경: `street.png`
- 다음: `hidden_true_nurse_8`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *낯선 호칭에 그녀의 귀 끝이 새빨갛게 물들더니, 이내 설레는 손길로 휴대폰을 꺼내 일정표를 연다.* ...그럼 다음 주말로 잡자. 우리 둘 다 온전히 비울 수 있는 날로.

---

### `hidden_true_nurse_8`
- 배경: `street.png`
- 다음: `hidden_true_nurse_8_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 다음번엔 건강 캠페인 강사 말고 그냥 너 만나러 나오는 사람으로 올게.

---

### `hidden_true_nurse_8_b`
- 배경: `nurse_house.png`
- 다음: `hidden_true_nurse_8_c`

- 캐릭터: `없음`
**{name}**: *그로부터 석 달 동안 두 사람은 매주 주말마다 도심의 작은 카페와 산책로를 나란히 걸었다. 그리고 비가 살짝 내리던 토요일 저녁, 처음으로 주원의 집 거실에 초대받았다.*

---

### `hidden_true_nurse_8_c`
- 배경: `nurse_house.png`
- 다음: `hidden_true_nurse_8_d`

- 캐릭터: `없음`
**{name}**: 보고 싶은 영화가 많아서 고르기 어렵네요. 어떤 것부터 틀까요? *은은한 간접조명만 켜진 거실 소파에 나란히 어깨를 맞대고 앉는다. 창밖은 빗소리로 어둡고 테이블 위의 커피 두 잔에서 김이 모락모락 피어오른다.*

---

### `hidden_true_nurse_8_d`
- 배경: `nurse_house.png`
- 다음: `hidden_true_nurse_8_e`

- 캐릭터: `없음`
**{name}**: *그날 밤 두 사람 사이에서 옛 학교 이야기는 길지 않았다. 서로의 오늘 하루와 다가올 다음 주말에 함께 가고 싶은 곳의 이야기가 밤이 깊도록 이어졌다.*

---

### `hidden_true_nurse_8_e`
- 배경: `nurse_house.png`
- 다음: `hidden_true_nurse_8_f`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *소파 등받이에 머리를 기댄 주원이 조용히 속삭인다.* 실은 네가 졸업하기 전 해에, 학교를 그만둘까 진지하게 고민했던 적이 있었어.

---

### `hidden_true_nurse_8_f`
- 배경: `nurse_house.png`
- 다음: `hidden_true_nurse_8_g`

- 캐릭터: `없음`
**{name}**: 그때 끝까지 보건실에 남기로 하신 건, 선생님의 선택이었던 거죠?

---

### `hidden_true_nurse_8_g`
- 배경: `nurse_house.png`
- 다음: `hidden_true_nurse_8_h`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 응. 그 일을 계속 사랑하고 싶어서 내 발로 남았어. 그리고 지금 이렇게... 내 방 소파에서 너를 다시 만나기로 한 것도 온전히 내가 정한 선택이고.

---

### `hidden_true_nurse_8_h`
- 배경: `ending_true_nurse.png`
- 다음: `date_choice_true_nurse`

- 캐릭터: `없음`
**{name}**: 저도 다음 주, 그다음 주에도 계속 이렇게 같이 있고 싶어요. *영화의 엔딩 크레딧이 다 올라가기도 전에, 주원은 샴푸 향 섞인 따뜻한 숨결을 내쉬며 내 어깨에 가만히 머리를 기댄 채 잠이 든다.*

---

### `date_choice_true_nurse`
- 배경: `nurse_house.png`
- 선택지:
  1. "집." → `date_true_nurse_1`
  2. "벤치." → `date_true_nurse_alt_1`

- 캐릭터: `nurse_home_smile.webp`
**보건선생님**: 오늘 캠페인 차트는 가방 깊숙이 넣어 두고 왔어. 우리 이제 어디로 갈래?

---

### `date_true_nurse_1`
- 배경: `nurse_house.png`
- 다음: `date_true_nurse_2`

- 캐릭터: `nurse_home_smile.webp`
**보건선생님**: 소파에 편하게 앉아 있어, 물 한 잔 따라 줄게. 아니면 따뜻한 캐모마일 차가 더 좋으면 말하고.

---

### `date_true_nurse_2`
- 배경: `nurse_house.png`
- 다음: `hidden_true_nurse_ending_title`

- 캐릭터: `nurse_home_smile.webp`
**{name}**: *조용한 주방 싱크대에서 맑은 물 받는 소리가 잠깐 울렸다가 멎고 그녀의 부드러운 발소리가 내 쪽으로 다가온다.*

---

### `date_true_nurse_alt_1`
- 배경: `park.png`
- 다음: `date_true_nurse_alt_2`

- 캐릭터: `nurse_home_smile.webp`
**보건선생님**: 오늘 밤엔 병원 건물 보이는 큰길 말고 가로등 조용한 다른 산책길로 돌아가자.

---

### `date_true_nurse_alt_2`
- 배경: `park.png`
- 다음: `hidden_true_nurse_ending_title`

- 캐릭터: `nurse_home_smile.webp`
**{name}**: *공원 나무 벤치의 벗겨진 페인트 자국 위에서 두 사람의 손끝이 나란히 맞닿고 누구도 먼저 손을 빼지 않은 채 그대로 멈춘다.*

---

### `hidden_true_nurse_ending_title`
- 배경: `ending_true_nurse.png`
- 다음: `day5_nurse_ending_freetalk_intro`

- 캐릭터: `없음`
**—**: ─── 보건선생님 TRUE LOVE END ───

---

### `hidden_good_nurse_1`
- 배경: `nurse_room.png`
- 시간대: `day`
- BGM: `night2.mp3`
- 다음: `hidden_good_nurse_2`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *졸업식 행사가 모두 끝난 뒤, 마지막으로 조용한 보건실 문을 두드린다. 창가에 서서 커피를 마시던 주원이 문가에 선 나를 발견하고 잔을 내려놓는다.* 어머, 웬일이야. 졸업식 날인데 오늘은 다친 데 없을 텐데.

---

### `hidden_good_nurse_2`
- 배경: `nurse_room.png`
- 시간대: `day`
- 다음: `hidden_good_nurse_2_b`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 졸업 인사하러 들른 거면 이리 와서 잠깐 앉아. 너한테 해 주는 보건실 진료는 오늘부로 완전히 끝이니까.

---

### `hidden_good_nurse_2_b`
- 배경: `nurse_room.png`
- 시간대: `day`
- 다음: `hidden_good_nurse_2_c`

- 캐릭터: `nurse_normal.png`
**{name}**: 그동안 제 이야기 들어 주시고 돌봐 주셔서 정말 감사했어요, 선생님.

---

### `hidden_good_nurse_2_c`
- 배경: `nurse_room.png`
- 시간대: `day`
- 다음: `hidden_good_nurse_2_d`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *그녀가 잠시 말을 고르듯 내 얼굴을 바라보다가 다정하게 고개를 끄덕인다.* 그래, 무사히 졸업해서 고마워. 앞으로 사회에 나가서 다치거나 아프면 예전처럼 혼자 참지 말고 병원부터 가야 해. 이제는 내가 옆에서 직접 확인해 줄 수 없으니까.

---

### `hidden_good_nurse_2_d`
- 배경: `nurse_room.png`
- 시간대: `day`
- 다음: `hidden_good_nurse_3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *책상 서랍에서 손때 묻은 연두색 노트를 꺼내어 맨 마지막 페이지를 펼친다.*

---

### `hidden_good_nurse_3`
- 배경: `nurse_room.png`
- 시간대: `day`
- 다음: `hidden_good_nurse_3_b`

- 캐릭터: `nurse_normal.png`
**{name}**: *주원은 오늘 날짜 옆에 또박또박 '졸업, 이상 없음'이라고 적은 뒤 노트를 덮는다. 이번에는 일회용 밴드도, 개인 연락처도 따로 건네지 않는다.*

---

### `hidden_good_nurse_3_b`
- 배경: `nurse_room.png`
- 시간대: `day`
- 다음: `hidden_good_nurse_4`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 잘 가렴. 혹시라도 언젠가 길에서 우연히 마주치면, 그땐 아픈 환자 말고 씩씩한 졸업생으로 인사해 줘.

---

### `hidden_good_nurse_4`
- 배경: `ending_good_nurse.png`
- 시간대: `day`
- 다음: `hidden_good_nurse_ending_title`

- 캐릭터: `없음`
**{name}**: *햇살이 비치는 창가에 선 주원에게 정중히 고개를 숙여 인사하고 가벼운 발걸음으로 보건실 문을 나선다.*

---

### `hidden_good_nurse_ending_title`
- 배경: `ending_good_nurse.png`
- 시간대: `day`
- 다음: `day5_nurse_ending_freetalk_intro`

- 캐릭터: `없음`
**—**: ─── 보건선생님 GOOD END ───

---

### `hidden_bitter_nurse_1`
- 배경: `nurse_room.png`
- 시간대: `day`
- BGM: `night2.mp3`
- 플래그: `ending_bittersweet`
- 다음: `hidden_bitter_nurse_2`

- 캐릭터: `nurse_normal.png`
**{name}**: *졸업식이 끝난 뒤, 마지막으로 보건실에 들러 연두색 상담 기록 카드 아래에 내 개인 연락처를 적은 쪽지를 조심스레 끼워 건넨다.*

---

### `hidden_bitter_nurse_2`
- 배경: `nurse_room.png`
- 시간대: `day`
- 다음: `hidden_bitter_nurse_3`

- 캐릭터: `nurse_normal.png`
**보건선생님**: *주원은 쪽지에 적힌 숫자를 내려다보며 한동안 말이 없다. 이내 원래 접혀 있던 자국을 따라 쪽지를 반듯하게 접어 내 앞으로 돌려준다.* ...미안하지만 이건 내가 받으면 안 되겠다.

---

### `hidden_bitter_nurse_3`
- 배경: `nurse_room.png`
- 시간대: `day`
- 다음: `hidden_bitter_nurse_4`

- 캐릭터: `nurse_normal.png`
**{name}**: ...그동안 제가 핑계 대면서 보건실에 자주 찾아왔던 게 귀찮으셨어요?

---

### `hidden_bitter_nurse_4`
- 배경: `nurse_room.png`
- 시간대: `day`
- 다음: `hidden_bitter_nurse_5`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 단 한 번도 귀찮은 적은 없었어. 그렇기 때문에 더더욱 네가 마음을 헷갈린 채로 졸업하게 두면 안 되는 거야. 내가 너를 챙기고 기다려 준 건, 네가 내 학생이었고 돌봄이 필요한 상처가 있었기 때문이야.

---

### `hidden_bitter_nurse_5`
- 배경: `nurse_room.png`
- 시간대: `day`
- 다음: `hidden_bitter_nurse_6`

- 캐릭터: `nurse_normal.png`
**{name}**: *주원은 연두색 기록 카드의 맨 마지막 줄에 '졸업, 상담 종료'라고 단정하게 적어 넣는다. 내가 건넸던 쪽지는 그 카드 위에 조용히 포개어 놓인다.*

---

### `hidden_bitter_nurse_6`
- 배경: `nurse_room.png`
- 시간대: `day`
- 다음: `hidden_bitter_nurse_7`

- 캐릭터: `nurse_normal.png`
**보건선생님**: 이제 네가 이 보건실 문을 다시 찾지 않아도 될 만큼 건강해진 게, 우리 상담의 가장 좋은 결말이야. ...가서 잘 지내렴.

---

### `hidden_bitter_nurse_7`
- 배경: `ending_bittersweet_nurse.png`
- 시간대: `day`
- 다음: `hidden_bitter_nurse_ending_title`

- 캐릭터: `없음`
**{name}**: *돌려받은 쪽지와 안내 카드를 주머니에 챙겨 넣고 보건실 문을 닫는다. 닫힌 문 너머에서 다 식은 커피잔을 내려놓는 달그락 소리가 아득하게 들려온다.*

---

### `hidden_bitter_nurse_ending_title`
- 배경: `ending_bittersweet_nurse.png`
- 시간대: `day`
- 다음: `day5_nurse_ending_freetalk_intro`

- 캐릭터: `없음`
**—**: ─── 보건선생님 BITTERSWEET END ───

---

### `day5_nurse_ending_freetalk_intro`
- 배경: `nurse_house.png`
- 다음: `day5_nurse_ending_freetalk_router`

- 캐릭터: `nurse_home_normal.webp`
**{name}**: *아늑한 거실 정리를 마친 주원이 소파의 내 바로 옆자리를 포근하게 비워 둔다.*

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
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "보건선생님 PERFECT END 이후의 보너스 대화다. 졸업 뒤 5년이 지나 독립한 두 성인이 지역 건강행사에서 재회했고 여러 번의 데이트와 함께한 아침을 거쳐 동등한 연인이 됐다. 현재는 공유 달력과 함께 고른 집, 로즈마리 화분이 있다. 과거 보건교사와 미성년 학생의 연애로 되돌아가지 않는다."
- 성격: "주원은 현실적이고 다정한 현재의 연인으로, 돌봄을 통제나 진단으로 바꾸지 않는다. 서로의 생활과 선택을 존중하며 편안한 유머, 익숙한 애정, 필요한 확인을 자연스럽게 나눈다."

- 캐릭터: `nurse_home_normal.webp`
**보건선생님**: *두 사람이 함께 고른 거실 창가의 로즈마리 화분에 분무기로 물을 주고 식탁 의자를 내 쪽으로 끌어당겨 앉는다.* 오늘 하루는 어땠어? 이리 와서 앉아 봐. 나도 오늘 너한테 들려줄 얘기가 있거든.

---

### `day5_nurse_ending_freetalk_true_love`
- 배경: `nurse_house.png`
- 타입: `free_talk`
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "보건선생님 TRUE LOVE END 직후의 보너스 대화다. 졸업 뒤 4년간 개인 연락이 없었고 독립해 일하는 두 성인이 건강 캠페인에서 재회했다. 세 달간 주말마다 만나고 주원의 집에서 함께 영화를 본 뒤 관계를 시작하는 단계다. 동거나 장기 연애로 앞당기지 않는다."
- 성격: "주원은 과거의 전문적 경계를 분명히 인정하고 현재의 동등한 성인에게 조심스럽게 다가간다. 상대의 선택을 확인하면서도 호감과 다음 약속은 솔직히 말하고 모든 대화를 건강 상담처럼 다루지 않는다."

- 캐릭터: `nurse_home_normal.webp`
**보건선생님**: *영화가 끝난 거실 테이블에 찻잔을 내려놓고 휴대폰으로 다음 주말 일정표를 열어 보여 준다.* 우리 다음 주엔 뭐 하면서 보낼까? 이번엔 네가 하고 싶었던 걸로 같이 해 보고 싶어.

---

### `day5_nurse_ending_freetalk_good`
- 배경: `nurse_room.png`
- 시간대: `day`
- 타입: `free_talk`
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "보건선생님 GOOD END의 졸업식 직후 보너스 대화다. 주원은 마지막 보건실 방문을 공식적으로 마치고 연락처나 밴드를 건네지 않은 채 교사와 졸업생으로 작별한다. 성인 재회나 연애는 발생하지 않았으며 이 대화에서도 미성년 학생과 보건교사의 로맨스를 만들지 않는다."
- 성격: "주원은 현실적이고 다정한 보건교사로서 마지막 인사를 듣되 전문적 경계를 선명하게 지킨다. 건강과 앞으로의 생활을 챙겨 주면서도 의존이나 비밀 관계를 만들지 않고 졸업생의 자립을 응원한다."

- 캐릭터: `nurse_normal.png`
**보건선생님**: *연두색 상담 노트 마지막 줄에 '졸업, 이상 없음'을 적고 표지를 덮는다.* 자, 오늘부로 보건실 진료는 진짜 끝이야. 졸업 인사는 천천히 다 듣고 배웅해 줄게.

---

### `day5_nurse_ending_freetalk_bittersweet`
- 배경: `nurse_room.png`
- 시간대: `day`
- 타입: `free_talk`
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "보건선생님 BITTERSWEET END의 졸업식 직후 보너스 대화다. 주인공은 보건실에서 받은 돌봄을 개인적인 호감으로 받아들여 연락처를 건넸지만 주원은 쪽지를 돌려주고 상담 관계를 끝냈다. 성인 재회나 연애는 없으며 이 대화에서도 거절을 번복하거나 의존과 비밀 관계를 만들지 않는다."
- 성격: "주원은 현실적이고 다정하지만 애매한 위로로 기대를 남기지 않는다. 서운함과 작별 인사는 들어 주되 돌봄이 연애의 신호는 아니었다는 사실을 솔직하고 분명하게 말한다."

- 캐릭터: `nurse_normal.png`
**보건선생님**: *되돌려준 연락처 쪽지를 연두색 기록 카드 위에 가만히 올려놓는다.* 내게 서운한 말이 남았으면 다 듣고 갈게. ...그래도 교사로서 내가 내린 이 대답은 바뀌지 않아.

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
- 시간대: `sunset`
- BGM: `ending.mp3`
- 플래그: `ending_perfect`
- 다음: `perfect_seo_1_b`

- 캐릭터: `없음`
**{name}**: *노을이 짙게 내려앉은 옥상 난간 아래, 서연이 돌보던 작은 화분들의 흙 위로 방금 물을 준 촉촉한 자국이 번져 있다.*

---

### `perfect_seo_1_b`
- 배경: `top_school.png`
- 시간대: `sunset`
- 다음: `perfect_seo_2`

- 캐릭터: `seyoun_cry.png`
**서연**: 왔네. ...잠깐만, 이 물뿌리개부터 내려놓고. 네 발소리 들리니까 손이 떨려서 하던 일이 하나도 안 끝나잖아. *서연이 물뿌리개를 난간 옆에 살며시 내려놓는다. 플라스틱 손잡이 위로 맑은 물방울이 맺혀 저녁 빛에 반짝인다.*

---

### `perfect_seo_2`
- 배경: `top_school.png`
- 시간대: `sunset`
- 다음: `perfect_seo_3`

- 캐릭터: `seyoun_cry.png`
**{name}**: *서연이 손수건으로 물기를 닦아 주머니에 넣는다. 가까이 다가선 서연의 긴 속눈썹 아래로, 아까 혼자 삼켰던 눈물 자국이 발갛게 번져 있다.*

---

### `perfect_seo_3`
- 배경: `top_school.png`
- 시간대: `sunset`
- 다음: `perfect_seo_4`

- 캐릭터: `seyoun_cry.png`
**서연**: *서연이 내 셔츠 소매 끝을 살며시 잡아당기며 나직이 속삭인다.* ...학생회실 뒷정리는 오늘 여기까지만 할래.

---

### `perfect_seo_4`
- 배경: `top_school.png`
- 시간대: `sunset`
- 다음: `perfect_seo_5`

- 캐릭터: `seyoun_laugh.png`
**서연**: 남은 일들은 다 내일의 우리한테 미루고 지금은 너랑만 있을 거야.

---

### `perfect_seo_5`
- 배경: `ending_perfect_seoyeon.png`
- 시간대: `sunset`
- 다음: `perfect_seo_5_b`

- 캐릭터: `없음`
**서연**: ...내 손 잡고 같이 내려가자. 오늘 해야 할 일 다 끝났다고 해서, 예전처럼 너 혼자 먼저 내려보내고 싶진 않으니까. *서연이 내 손가락 사이로 따뜻한 손깍지를 껴 오며 계단 문 앞에서 걸음을 멈춘다.*

---

### `perfect_seo_5_b`
- 배경: `ending_perfect_seoyeon.png`
- 시간대: `sunset`
- 다음: `perfect_epilogue_1_seo`

- 캐릭터: `없음`
**{name}**: *항상 자물쇠로 단단히 잠가 두던 옥상 철문이, 오늘 밤에는 두 사람 뒤로 활짝 열린 채 저녁 바람을 들이고 있다.*

---

### `perfect_epilogue_1_seo`
- 배경: `ending_perfect_seoyeon.png`
- 다음: `perfect_epilogue_bridge_seo`

- 캐릭터: `없음`
**{name}**: *우리가 고등학교를 졸업한 뒤에도, 둘만의 기억이 깃든 옥상 문은 언제나 마음속에 활짝 열려 있었다.*

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
**{name}**: *설레는 대학 입학식 날 아침, 서연에게서 사진 한 장이 도착했다. 햇살이 드는 자취방 베란다에 나란히 놓인 새 화분 두 개, 그리고 그 옆에 비워 둔 한 뼘의 자리.*

---

### `perfect_epilogue_3_seo`
- 배경: `ending_perfect_seoyeon.png`
- 다음: `perfect_seo_coda_1`

- 캐릭터: `없음`
**서연**: 이 옆에 놓을 마지막 화분 하나는 네가 골라 줘.

---

### `perfect_seo_coda_1`
- 배경: `ending_perfect_seoyeon.png`
- 다음: `perfect_seo_coda_2`

- 캐릭터: `없음`
**{name}**: *화분 사진 아래로 새로 정리된 학생회 인수인계 파일이 함께 첨부되어 있다. 마지막 페이지의 축제 총괄 담당란에는 하은의 이름이 당당히 적혀 있고 서연은 그 위에 빨간펜 수정 표시를 단 하나도 남기지 않았다.*

---

### `perfect_seo_coda_2`
- 배경: `ending_perfect_seoyeon.png`
- 다음: `perfect_seo_coda_3`

- 캐릭터: `없음`
**서연**: 베란다 빈자리에 놓을 화분은 네가 먼저 골라. ...아니, 사진으로만 고르지 말고 이번 주 토요일에 나랑 꽃시장에 같이 가자.

---

### `perfect_seo_coda_3`
- 배경: `ending_perfect_seoyeon.png`
- 다음: `date_choice_perfect_seo`

- 캐릭터: `없음`
**{name}**: *공유 캘린더의 약속 시간 칸은 비워져 있다. 내가 오후 세 시를 적어 넣자, 서연은 평소 쓰던 딱딱한 '확인' 대신 하트 하나와 함께 '좋아'라고 답장을 보낸다.*

---

### `date_choice_perfect_seo`
- 배경: `top_school.png`
- 시간대: `day`
- 선택지:
  1. "옥상." → `date_perfect_seo_roof_1`
  2. "카페." → `date_perfect_seo_cafe_1`

- 캐릭터: `seyoun_laugh.png`
**서연**: *설레는 대학 입학식 다음 날, 모교 옥상에서 서연과 다시 마주 선다.* 어제 다 못 한 얘기는 오늘 마저 하기로 했었지. 그전에 우리 어디로 먼저 갈래?

---

### `date_perfect_seo_roof_1`
- 배경: `top_school.png`
- 시간대: `day`
- 다음: `date_perfect_seo_roof_2`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *난간 아래 화분의 흙이 아직 촉촉하게 젖어 있다. 서연은 물뿌리개를 바닥에 내려놓고 내 손등을 가만히 건드린다.*

---

### `date_perfect_seo_roof_2`
- 배경: `top_school.png`
- 시간대: `day`
- 다음: `date_perfect_seo_roof_3`

- 캐릭터: `seyoun_laugh.png`
**서연**: 오늘 앉을 자리는 네가 골라. 나는 네 바로 옆자리로 벌써 정해 뒀으니까.

---

### `date_perfect_seo_roof_3`
- 배경: `top_school.png`
- 시간대: `day`
- 다음: `perfect_epilogue_4_seo`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *열린 옥상 문으로 봄바람이 불어와 수첩의 일정표를 흔든다. 서연은 바람에 팔랑이는 종이 끝을 내 손과 함께 누를 뿐, 예전처럼 서둘러 덮지 않는다.*

---

### `date_perfect_seo_cafe_1`
- 배경: `cafe.png`
- 시간대: `day`
- 다음: `date_perfect_seo_cafe_2`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *봄 햇살이 드는 카페 창가에 마주 앉은 서연은, 컵받침을 나란히 맞춘 뒤에야 부드러운 눈빛으로 입을 연다.*

---

### `date_perfect_seo_cafe_2`
- 배경: `cafe.png`
- 시간대: `day`
- 다음: `date_perfect_seo_cafe_3`

- 캐릭터: `seyoun_laugh.png`
**서연**: 다음 주에도 이 자리에서 보자. 만날 시간은 네가 편한 때로 정해 줘.

---

### `date_perfect_seo_cafe_3`
- 배경: `cafe.png`
- 시간대: `day`
- 다음: `perfect_epilogue_4_seo`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *서연이 건넨 카페 영수증 뒷면에 단정한 숫자가 적혀 있다. 전화번호가 아니라, 우리 두 사람이 베란다 화분에 함께 물을 주기로 한 다음 날짜다.*

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
**{name}**: *고백을 주고받은 지 한 달쯤 지나, 학교 앞 카페에서 잠깐 보자는 서연의 연락이 왔다. 평소보다 유난히 짧은 메시지였다.*

---

### `bitter_seo_2`
- 배경: `cafe.png`
- 다음: `bitter_seo_2_b`

- 캐릭터: `seyoun_normal.png`
**서연**: *서연이 식어 버린 커피잔을 내려다보며 조용히 입을 연다.* ...우리, 서로 상처 주지 않으려다 너무 조심만 했나 봐.

---

### `bitter_seo_2_b`
- 배경: `cafe.png`
- 다음: `bitter_seo_3`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 습관처럼 컵받침 모서리를 반듯하게 맞춘다. 두 사람의 잔 속 커피는 절반도 줄어들지 않았다.*

---

### `bitter_seo_3`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_epilogue_1`

- 캐릭터: `없음`
**{name}**: *봄비가 추적추적 내리는 카페 문밖. 손에 들린 우산은 각자 하나씩이고 내가 타야 할 버스 정류장은 차가운 빗길 건너편에 있다.*

---

### `true_seo_1`
- 배경: `seyoun_room.png`
- BGM: `ending.mp3`
- 플래그: `ending_true_love`
- 다음: `true_seo_2`

- 캐릭터: `없음`
**{name}**: *처음으로 초대받아 들어선 서연의 방. 은은한 살결 향기가 감도는 책상 위에는 반듯한 파일철과 작은 화분 세 개가 놓여 있고 책꽂이 한켠에는 가족사진 액자가 조용히 기대어 있다.*

---

### `true_seo_2`
- 배경: `seyoun_room.png`
- 다음: `true_seo_3`

- 캐릭터: `없음`
**{name}**: *가운데 놓인 작은 화분 받침 아래로, 네모나게 접힌 하얀 종이 모서리가 살짝 삐져나와 있는 것이 눈에 들어온다.*

---

### `true_seo_3`
- 배경: `seyoun_room.png`
- 다음: `true_seo_4`

- 캐릭터: `seyoun_normal.png`
**서연**: *교복 재킷을 벗어 걸어 둔 서연이 조금 긴장한 목소리로 자리를 권한다.* 편하게 앉아. 의자는 저쪽 책상 앞에 있어.

---

### `true_seo_4`
- 배경: `seyoun_room.png`
- 다음: `true_seo_5`

- 캐릭터: `seyoun_normal.png`
**{name}**: *의자를 끌어당겨 앉자 고요한 방 안 바닥이 작게 긁히는 소리가 난다.*

---

### `true_seo_5`
- 배경: `seyoun_room.png`
- 다음: `true_seo_6`

- 캐릭터: `seyoun_laugh.png`
**서연**: *서연이 침대 모서리에 걸터앉으며 작게 숨을 내쉰다.* ...우리 집에서는 변명이나 설명이 길어지면 서로 피곤해지거든.

---

### `true_seo_6`
- 배경: `seyoun_room.png`
- 다음: `true_seo_6b`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *서연이 다가와 화분 받침 아래에 숨겨 두었던 접힌 종이를 조심스레 꺼내 든다.* ...그건 미리 적어 둔 거야? 내 앞에서 직접 말로 꺼내기가 어려워서?

---

### `true_seo_6b`
- 배경: `seyoun_room.png`
- 다음: `true_seo_7`

- 캐릭터: `seyoun_shy.png`
**서연**: *서연의 귓불이 붉게 달아오른다.* ...응, 그래서 혼자 밤에 적어 뒀어. 네 얼굴 보면 또 완벽한 척하느라 진짜 하고 싶었던 말을 까먹을까 봐.

---

### `true_seo_7`
- 배경: `seyoun_room.png`
- 다음: `true_seo_7_b`

- 캐릭터: `seyoun_shy.png`
**서연**: 아, 지금 여기서 바로 읽지는 마. 아직은 너무 부끄러우니까.

---

### `true_seo_7_b`
- 배경: `seyoun_room.png`
- 다음: `true_seo_7b`

- 캐릭터: `seyoun_shy.png`
**서연**: 당장 보여 주려고 꺼낸 건 아니야. ...언젠가는 네가 다 읽게 될 날이 오겠지만 오늘 밤은 말고. *서연은 내 손끝이 닿기 전에 종이를 다시 화분 받침 아래에 소중히 끼워 넣는다.*

---

### `true_seo_7b`
- 배경: `seyoun_room.png`
- 다음: `true_seo_8`

- 캐릭터: `seyoun_shy.png`
**{name}**: *서연이 따뜻한 김이 오르는 머그잔 두 개를 책상 위에 나란히 내려놓는다.*

---

### `true_seo_8`
- 배경: `seyoun_room.png`
- 다음: `true_seo_bridge`

- 캐릭터: `seyoun_shy.png`
**{name}**: *서연의 체온이 묻은 컵 하나가 내 손앞으로 조심스레 밀려오며 두 사람의 손끝이 따뜻하게 맞닿는다.*

---

### `true_seo_bridge`
- 배경: `ending_true_seoyeon.png`
- 다음: `true_epilogue_1_seo`

- 캐릭터: `없음`
**{name}**: *복도로 이어진 서연의 방문은 한 뼘쯤 열려 있고 그 안쪽에서 두 사람의 그림자가 조용히 포개진다.*

---

### `true_epilogue_1_seo`
- 배경: `ending_true_seoyeon.png`
- 다음: `date_choice_true_seo`

- 캐릭터: `없음`
**{name}**: *태어나 처음 발을 들인 서연의 방인데도, 책상 위의 물건들과 그녀의 숨결은 오래전부터 알고 지낸 것처럼 포근하고 낯익다.*

---

### `date_choice_true_seo`
- 배경: `cafe.png`
- 선택지:
  1. "카페." → `date_true_seo_1`
  2. "옥상." → `date_true_seo_alt_1`

- 캐릭터: `seyoun_shy.png`
**서연**: 바로 집으로 돌아가기 전에, 우리 잠깐만 어디 들렀다 갈래?

---

### `date_true_seo_1`
- 배경: `cafe.png`
- 다음: `date_true_seo_2`

- 캐릭터: `seyoun_shy.png`
**서연**: 음료 컵은 네가 테이블로 옮겨 줘. 컵받침 줄 맞추는 건 내가 할 테니까.

---

### `date_true_seo_2`
- 배경: `cafe.png`
- 다음: `true_epilogue_2`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *카페 유리창 밖으로 평소 서연이 타던 학원 버스가 지나가는데도, 서연은 손목시계를 한 번도 내려다보지 않는다.*

---

### `date_true_seo_alt_1`
- 배경: `top_school.png`
- 다음: `date_true_seo_alt_2`

- 캐릭터: `seyoun_laugh.png`
**서연**: 화분에 물만 얼른 주고 같이 내려가자. 너무 오래 위에 있으면 당직 선생님께 들킬 거야.

---

### `date_true_seo_alt_2`
- 배경: `top_school.png`
- 다음: `true_epilogue_2`

- 캐릭터: `seyoun_laugh.png`
**{name}**: *난간 구석에 빈 화분 하나가 놓여 있다. 다음 주에 서연과 다시 올라올 때는 저 자리에 심을 새 모종을 같이 사 와야겠다.*

---

### `ending_aff_check_yuna`
- 배경: `yuna_hideout_day.webp`
- 시간대: `sunset`
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
- 배경: `yuna_hideout_day.webp`
- 시간대: `sunset`
- BGM: `ending.mp3`
- 플래그: `ending_perfect`
- 다음: `perfect_yuna_2`

- 캐릭터: `없음`
**{name}**: *도서관 별관 깊숙한 곳, 먼지 낀 창으로 노을이 스며드는 둘만의 비밀 다락방. 유나가 두 손으로 소중히 감싸 쥐고 있던 마지막 단편소설 노트를 내게 건넨다.*

---

### `perfect_yuna_2`
- 배경: `yuna_hideout_day.webp`
- 시간대: `sunset`
- 다음: `perfect_yuna_3`

- 캐릭터: `yuna_normal.png`
**{name}**: *조심스레 받아 든 노트 표지 한가운데, 연보라색 만년필 잉크로 또박또박 적힌 제목이 선명하게 눈에 들어온다. 내 이름이다. 그 짧은 글자 위에 유나의 체온이 아직 따뜻하게 남아 있다.*

---

### `perfect_yuna_3`
- 배경: `yuna_hideout_day.webp`
- 시간대: `sunset`
- 다음: `perfect_yuna_4`

- 캐릭터: `yuna_smile.png`
**유나**: *유나의 투명한 눈동자가 내 얼굴을 똑바로 올려다본다.* 마지막 줄까지 다 읽고 나면 네 목소리로 말해 줘. ...이 노트가 내가 네게 주는 대답이야.

---

### `perfect_yuna_4`
- 배경: `yuna_hideout_day.webp`
- 시간대: `sunset`
- 다음: `perfect_yuna_5`

- 캐릭터: `yuna_shy.png`
**{name}**: *숨을 죽여 넘긴 노트의 맨 마지막 문장 아래, 만년필 끝이 오래도록 머물다 떨린 자국처럼 연보라색 잉크가 조금 번져 있다.*

---

### `perfect_yuna_5`
- 배경: `ending_perfect_yuna.png`
- 시간대: `sunset`
- 다음: `perfect_epilogue_1_yuna`

- 캐릭터: `없음`
**유나**: *유나가 자리에서 조용히 일어나 내 손에서 노트를 받아 내려놓는다.* ...이제 내가 먼저 안아도 돼? *유나가 두 팔을 살며시 벌린 채, 숨결이 닿을 듯한 한 뼘 앞에서 떨리는 속눈썹으로 내 대답을 기다린다.*

---

### `perfect_epilogue_1_yuna`
- 배경: `ending_perfect_yuna.png`
- 다음: `perfect_epilogue_bridge_yuna`

- 캐릭터: `없음`
**{name}**: *그날 이후로도 우리는 매일 별관의 같은 소파에 나란히 앉아 어깨를 맞대었다. 유나는 더 이상 끝나지 않는 한 페이지를 외롭게 붙잡고 있지 않았다.*

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
**{name}**: *일 년 뒤, 마침내 유나의 첫 번째 장편소설이 세상에 출간되었다. 새하얀 첫 페이지를 넘기면 나오는 헌정사에는 단 한 줄이 인쇄되어 있다. '나의 세 번째 곡을 끝까지 함께 들어 준 단 한 사람에게.'*

---

### `perfect_epilogue_3_yuna`
- 배경: `ending_perfect_yuna.png`
- 다음: `perfect_yuna_coda_1`

- 캐릭터: `없음`
**유나**: *유나는 사람들 앞에서 여전히 말수가 적지만 내 주머니 속에 몰래 넣어 주는 연보라색 쪽지의 문장들은 계절이 갈수록 조금씩 더 길고 달콤해졌다.*

---

### `perfect_yuna_coda_1`
- 배경: `ending_perfect_yuna.png`
- 다음: `perfect_yuna_coda_2`

- 캐릭터: `없음`
**{name}**: *서점 홈페이지에 신간 작가 사인회 공지가 올라온다. 예전의 익명 원고 대신, '최유나'라는 세 글자가 책 제목보다도 큼직하고 선명하게 인쇄되어 있다.*

---

### `perfect_yuna_coda_2`
- 배경: `ending_perfect_yuna.png`
- 다음: `perfect_yuna_coda_3`

- 캐릭터: `없음`
**유나**: 사인회 끝나면 서점 앞으로 와 줘. 이번엔 사람들 뒤로 숨지 않고 네 손 잡고 나올 거야.

---

### `perfect_yuna_coda_3`
- 배경: `ending_perfect_yuna.png`
- 다음: `date_choice_perfect_yuna`

- 캐릭터: `없음`
**{name}**: *잠시 뒤 유나에게서 만년필 사인 연습 사진이 도착한다. 하얀 노트 한 페이지 가득 자신의 이름을 연습해 둔 흔적들, 그리고 맨 아랫줄 구석에만 내 이름이 아주 작고 소중하게 적혀 있다.*

---

### `date_choice_perfect_yuna`
- 배경: `bookstore.png`
- 시간대: `day`
- 선택지:
  1. "헌책방." → `date_perfect_yuna_book_1`
  2. "옥상." → `date_perfect_yuna_roof_1`

- 캐릭터: `yuna_smile.png`
**유나**: *첫 장편소설이 서점에 깔린 뒤 맞이한 첫 주말, 유나와 함께 단골 헌책방에 들렀다.* 오늘 날씨가 좋아서 다른 곳에 가도 괜찮아. 어디로 갈지는 네가 골라 줘.

---

### `date_perfect_yuna_book_1`
- 배경: `bookstore.png`
- 시간대: `day`
- 다음: `date_perfect_yuna_book_2`

- 캐릭터: `yuna_smile.png`
**{name}**: *오래된 종이 향기가 자욱한 서가 사이를 나란히 걷던 유나가, 책등을 훑어 내리다 문득 걸음을 멈춘다.*

---

### `date_perfect_yuna_book_2`
- 배경: `bookstore.png`
- 시간대: `day`
- 다음: `date_perfect_yuna_book_3`

- 캐릭터: `junho_normal.png`
**남자**: ...유나? 네가 이 서점에 다시 올 줄은 몰랐는데.

---

### `date_perfect_yuna_book_3`
- 배경: `bookstore.png`
- 시간대: `day`
- 다음: `date_perfect_yuna_book_4`

- 캐릭터: `junho_awkward.png`
**이준호**: 다 지나간 옛날 일이야. 굳이 꺼내서 말 안 해도 될 것 같았어. 미안, 두 사람 시간 방해했네.

---

### `date_perfect_yuna_book_4`
- 배경: `bookstore.png`
- 시간대: `day`
- 다음: `perfect_epilogue_4_yuna`

- 캐릭터: `yuna_smile.png`
**유나**: *유나의 가느다란 손가락이 내 손에 들린 책갈피 위에서 흔들림 없이 멈춘다.* ...지금은 {name}이랑 같이 왔어. 나한텐 그걸로 충분해.

---

### `date_perfect_yuna_roof_1`
- 배경: `yuna_secret_rooftop.png`
- 시간대: `night`
- 다음: `date_perfect_yuna_roof_2`

- 캐릭터: `yuna_smile.png`
**{name}**: *바람이 부는 비밀 옥상에 올라오자, 유나가 기다렸다는 듯 하얀 이어폰 한쪽을 내 귀에 꽂아 준다.*

---

### `date_perfect_yuna_roof_2`
- 배경: `yuna_secret_rooftop.png`
- 시간대: `night`
- 다음: `date_perfect_yuna_roof_3`

- 캐릭터: `yuna_smile.png`
**유나**: 우리의 세 번째 곡이야. 이번에는 도입부 첫 음부터 끝까지 같이 듣자.

---

### `date_perfect_yuna_roof_3`
- 배경: `yuna_secret_rooftop.png`
- 시간대: `night`
- 다음: `perfect_epilogue_4_yuna`

- 캐릭터: `yuna_smile.png`
**{name}**: *노래가 끝난 뒤에도 유나는 이어폰을 빼지 않는다. 난간 위에 얹어 둔 유나의 손가락이 조금 더 다가와 내 새끼손가락에 살며시 얽힌다.*

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
**{name}**: *고백은 건넸고 유나는 조용히 고개를 끄덕였지만 그녀의 창백한 손가락은 내내 책갈피 모서리만 불안하게 문지르고 있었다. 그로부터 한 달쯤 지나, 내 사물함 안에 짧은 쪽지 한 장이 놓여 있었다. '우리, 얘기 좀 하자.'*

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
**유나**: 가끔씩 네 생각이 나. 비 오는 날 도서관 종이 냄새를 맡을 때마다... 그때 겁내지 말고 내 마음을 좀 더 말할 걸 그랬어.

---

### `bitter_yuna_2_book`
- 배경: `bookstore.png`
- 다음: `bitter_yuna_3`

- 캐릭터: `yuna_sad.png`
**유나**: 가끔씩 네 생각이 나. 골목길 헌책방 앞을 지날 때마다... 그때 숨지 말고 내 마음을 좀 더 말할 걸 그랬어.

---

### `bitter_yuna_3`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_epilogue_1`

- 캐릭터: `yuna_normal.png` @ 0.35
**{name}**: *혼자 교문을 걸어 나온다. 차가운 비가 내린다. 주머니 속에서 유나가 남긴 마지막 쪽지를 다시 꺼내 펼쳐 보지만 종이 아래쪽에 적힌 연보라색 글씨는 빗물에 번져 더 이상 읽을 수 없다.*

---

### `true_yuna_1`
- 배경: `yuna_hideout_day.webp`
- 시간대: `sunset`
- BGM: `ending.mp3`
- 플래그: `ending_true_love`
- 다음: `true_yuna_2`

- 캐릭터: `없음`
**{name}**: *도서관 별관의 가장 깊은 서가 뒤편, 유나가 처음으로 문을 열어 보여 준 둘만의 비밀 다락방.*

---

### `true_yuna_2`
- 배경: `yuna_hideout_day.webp`
- 시간대: `sunset`
- 다음: `true_yuna_2_b`

- 캐릭터: `yuna_normal.png`
**유나**: *유나가 좁은 계단 위에서 나를 내려다보며 작게 속삭인다.* 원래 이 다락방 길을 아는 건 학교에서 나뿐이었는데.

---

### `true_yuna_2_b`
- 배경: `yuna_hideout_day.webp`
- 시간대: `sunset`
- 다음: `true_yuna_2_c`

- 캐릭터: `yuna_normal.png`
**유나**: 발밑 조심해. 나무 사다리가 조금 좁아. *유나가 먼저 올라가 천장의 작은 해치 문을 밀어 올리자, 선선한 저녁 바람이 다락방 안으로 쏟아져 들어온다.*

---

### `true_yuna_2_c`
- 배경: `top_school.png`
- 시간대: `sunset`
- 다음: `true_yuna_2_d`

- 캐릭터: `yuna_normal.png`
**{name}**: 와, 별관 지붕 위 작은 옥상으로 바로 이어지네. 이런 비밀 통로가 숨어 있었구나.

---

### `true_yuna_2_d`
- 배경: `top_school.png`
- 시간대: `sunset`
- 다음: `true_yuna_3`

- 캐릭터: `yuna_normal.png`
**유나**: 나랑 여기까지 같이 올라왔으니까, 잠깐만 내 옆에 있어 줘. 아직 너한테 보여 줄 게 하나 남았거든. *유나가 낮은 옥상 난간에 나란히 등을 기대어 선다. 붉은 해가 먼 산등성이 너머로 천천히 기울어 간다.*

---

### `true_yuna_3`
- 배경: `top_school.png`
- 시간대: `sunset`
- 다음: `true_yuna_4`

- 캐릭터: `yuna_normal.png`
**유나**: *해치 문 위의 아담한 비밀 옥상. 불어오는 저녁 바람에 유나가 품에 안은 노트 귀퉁이가 파르르 들썩인다.*

---

### `true_yuna_4`
- 배경: `top_school.png`
- 시간대: `sunset`
- 다음: `true_yuna_5`

- 캐릭터: `yuna_smile.png`
**유나**: *유나가 휴대폰 화면을 켜 음악 재생목록을 연다. 세 번째 트랙 제목 옆에 아주 작은 별표 하나가 반짝이고 있다.*

---

### `true_yuna_5`
- 시간대: `sunset`
- 분기:
  - [`heard_yuna_third_song`] → `true_yuna_5_established`
  - [기본] → `true_yuna_5_first`

<!-- i18n -->

---

### `true_yuna_5_established`
- 배경: `top_school.png`
- 시간대: `sunset`
- 다음: `true_yuna_5_b`

- 캐릭터: `yuna_smile.png`
**{name}**: 지난번 별관에서 같이 들었던 그 세 번째 곡이지?

---

### `true_yuna_5_first`
- 배경: `top_school.png`
- 시간대: `sunset`
- 다음: `true_yuna_5_b`

- 캐릭터: `yuna_smile.png`
**{name}**: 재생목록 세 번째 곡 옆에만 작은 별표가 그려져 있네. 너한테 특별한 곡이야?

---

### `true_yuna_5_b`
- 배경: `top_school.png`
- 시간대: `sunset`
- 다음: `true_yuna_6`

- 캐릭터: `yuna_smile.png`
**유나**: 바로 이 곡부터야. *유나의 하얀 손가락이 세 번째 곡 위에서 멈추고 내내 방패처럼 책을 쥐고 있던 손에서 스르르 힘이 풀린다.*

---

### `true_yuna_6`
- 시간대: `sunset`
- 분기:
  - [`heard_yuna_third_song`] → `true_yuna_6_established`
  - [기본] → `true_yuna_6_first`

<!-- i18n -->

---

### `true_yuna_6_established`
- 배경: `top_school.png`
- 시간대: `sunset`
- 다음: `true_yuna_6b`

- 캐릭터: `yuna_shy.png`
**유나**: *유나의 입가에 옅은 미소가 번진다.* ...잊지 않고 기억하고 있었네.

---

### `true_yuna_6_first`
- 배경: `top_school.png`
- 시간대: `sunset`
- 다음: `true_yuna_6b`

- 캐릭터: `yuna_shy.png`
**유나**: 응. 이 곡은... 언젠가 꼭 너랑 단둘이서 같이 듣고 싶었어.

---

### `true_yuna_6b`
- 배경: `top_school.png`
- 시간대: `sunset`
- 다음: `true_yuna_7`

- 캐릭터: `yuna_smile.png`
**유나**: *한쪽 이어폰을 내 귀에 직접 꽂아 주며 손끝이 귓바퀴를 스친다.* ...오늘 밤엔 여기서 너랑 같이 듣고 싶어.

---

### `true_yuna_7`
- 배경: `top_school.png`
- 시간대: `sunset`
- 다음: `true_yuna_bridge`

- 캐릭터: `yuna_shy.png`
**{name}**: *펼쳐진 유나의 노트 한 페이지에도 똑같은 재생목록이 손글씨로 옮겨 적혀 있다. 세 번째 곡 제목 옆에는 첫날 내게 주었던 쪽지와 똑같은 연보라색 점이 찍혀 있다. 유나가 조용히 재생 버튼을 누른다.*

---

### `true_yuna_bridge`
- 배경: `ending_true_yuna.png`
- 다음: `true_epilogue_1_yuna`

- 캐릭터: `없음`
**유나**: ...내 등, 네 어깨에 기대도 돼? *하얀 초승달이 떠오른 밤하늘 아래 유나가 내 옆으로 한 뼘의 거리를 좁혀 온다. 마지막 피아노 선율이 잦아든 뒤로도 두 사람의 온기는 떨어지지 않는다.*

---

### `true_epilogue_1_yuna`
- 배경: `ending_true_yuna.png`
- 다음: `date_choice_true_yuna`

- 캐릭터: `없음`
**{name}**: *그날 밤 이후로, 유나는 종이 쪽지 뒤에 숨기곤 하던 가장 여린 마음들도 내 눈을 보며 직접 목소리로 들려주었다.*

---

### `date_choice_true_yuna`
- 배경: `bookstore.png`
- 선택지:
  1. "헌책방." → `date_true_yuna_book_1`
  2. "옥상." → `date_true_yuna_roof_1`

- 캐릭터: `yuna_smile.png`
**유나**: 지금 바로 학교 밖으로 나갈래, 아니면... 아까 그 옥상 위로 조금 더 올라갈래?

---

### `date_true_yuna_book_1`
- 배경: `bookstore.png`
- 다음: `date_true_yuna_book_2`

- 캐릭터: `junho_normal.png`
**이준호**: 참 오랜만이네, 유나야. 이 골목 헌책방에서 너를 다시 볼 줄은 몰랐어.

---

### `date_true_yuna_book_2`
- 배경: `bookstore.png`
- 다음: `true_epilogue_2`

- 캐릭터: `yuna_smile.png`
**유나**: *유나가 내 셔츠 소매 끝을 살며시 끌어당겼다 놓으며 내 옆에 바짝 다가선다.* ...인사는 됐어, 이제 우리끼리 가자.

---

### `date_true_yuna_roof_1`
- 배경: `yuna_secret_rooftop.png`
- 시간대: `night`
- 다음: `date_true_yuna_roof_2`

- 캐릭터: `yuna_smile.png`
**유나**: *이어폰 한쪽을 내 귀에 꽂아 주며 속삭인다.* 굳이 무리해서 말 안 해도 괜찮아. 아주 짧은 곡이니까.

---

### `date_true_yuna_roof_2`
- 배경: `yuna_secret_rooftop.png`
- 시간대: `night`
- 다음: `true_epilogue_2`

- 캐릭터: `yuna_smile.png`
**{name}**: *밤바람에 두 사람을 잇는 하얀 이어폰 줄이 가늘게 흔들린다. 유나는 내 어깨에 살짝 기댄 채 마지막 음이 사라질 때까지 미동도 하지 않는다.*

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
- 시간대: `sunset`
- BGM: `ending.mp3`
- 플래그: `ending_perfect`
- 다음: `perfect_dain_2`

- 캐릭터: `없음`
**{name}**: *열기가 가라앉은 저녁 체육관 벤치 위에는 다인의 무릎 보호대와 병원 재활 일정표가 나란히 놓여 있다. 배구공들은 모두 보관함 안에 들어가 있다.*

---

### `perfect_dain_2`
- 배경: `gym.png`
- 시간대: `sunset`
- 다음: `perfect_dain_2b`

- 캐릭터: `dain_normal.png`
**다인**: *다인이 내 옆에 앉아 무릎을 가볍게 톡톡 두드리며 입을 연다.* 야, 나 다음 주 월요일부터 정식으로 스포츠 재활 클리닉 다니기로 했어.

---

### `perfect_dain_2b`
- 배경: `gym.png`
- 시간대: `sunset`
- 다음: `perfect_dain_3`

- 캐릭터: `dain_normal.png`
**다인**: 자, 봐봐. 진짜로 예약 완료했지? ...너 걱정할까 봐 입으로만 둘러댄 거 아니니까 안심해. *다인이 휴대폰의 예약 확인 화면을 내 눈앞에 당당하게 보여 주고는 무릎 보호대 옆에 내려놓는다.*

---

### `perfect_dain_3`
- 배경: `gym.png`
- 시간대: `sunset`
- 다음: `perfect_dain_3b`

- 캐릭터: `dain_normal.png`
**다인**: 솔직히 예전처럼 프로 무대까지 뛸 수 있을지는 아직 모르겠어. 그래도 이제는 코트 바깥에서도 배구랑 같이 숨 쉬는 방법을 찾아보려고.

---

### `perfect_dain_3b`
- 배경: `gym.png`
- 시간대: `sunset`
- 다음: `perfect_dain_4`

- 캐릭터: `dain_normal.png`
**다인**: 이 해설자 중계 영상을 듣다 보면 말이야, 나도 모르게 옆에서 자꾸만 작전이나 선수 움직임을 말로 보태게 되거든. ...코트 밖에서 목소리로 뛰는 것도 생각보다 엄청 가슴 뛰더라. *다인이 재생 중이던 경기 중계 영상을 멈추고 화면 하단의 해설위원 이름을 손끝으로 가리킨다.*

---

### `perfect_dain_4`
- 배경: `gym.png`
- 시간대: `sunset`
- 다음: `perfect_dain_5`

- 캐릭터: `dain_shy.png`
**{name}**: 네가 선수 유니폼을 입지 않아도, 난 네가 신나서 배구 이야기할 때가 세상에서 제일 멋있어. 네 첫 중계방송은 무조건 내가 일등으로 볼게.

---

### `perfect_dain_5`
- 배경: `ending_perfect_dain.png`
- 시간대: `sunset`
- 다음: `perfect_epilogue_1_dain`

- 캐릭터: `없음`
**다인**: ...야, 나 지금 너 잠깐만 안아도 돼? *내가 먼저 두 팔을 벌려 다가서자, 다인은 건강한 왼발로 중심을 잡고 내 목덜미에 두 팔을 감아 온다. 내가 다인의 허리를 단단히 받쳐 안아 주어, 다친 오른쪽 무릎에는 조금도 무게가 실리지 않는다.*

---

### `perfect_epilogue_1_dain`
- 배경: `ending_perfect_dain.png`
- 다음: `perfect_epilogue_1b_dain`

- 캐릭터: `없음`
**{name}**: 다인아, 우리 벤치에 앉자. 천천히. *목덜미에 와닿던 다인의 뜨거운 숨결이 진정되고 팔이 풀리자, 나는 다인이 두 발로 편안하게 바닥을 디딘 것을 확인한 뒤에야 나란히 벤치에 앉는다.*

---

### `perfect_epilogue_1b_dain`
- 다음: `perfect_epilogue_1c_dain`

<!-- i18n -->

---

### `perfect_epilogue_1c_dain`
- 배경: `ending_perfect_dain.png`
- 다음: `perfect_epilogue_bridge_dain`

- 캐릭터: `없음`
**{name}**: *병원에 다녀오는 재활 날의 걸음 속도는 언제나 다인이 정하고 나는 기꺼이 그 보폭에 내 발걸음을 맞춘다.*

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
**{name}**: *일 년 뒤, 다인은 대학 스포츠미디어학과에 당당히 진학해 교내 경기 중계부에 들어갔다. 설레는 첫 생방송 전날 밤에는 내 방에서 함께 대본을 세 번이나 고쳐 읽었다.*

---

### `perfect_epilogue_3_dain`
- 배경: `ending_perfect_dain.png`
- 다음: `perfect_dain_coda_1`

- 캐릭터: `없음`
**{name}**: *비 오는 날 무릎에 뻐근한 통증이 찾아오면, 무리한 훈련 대신 나란히 앉아 재활 일지와 경기 분석 영상을 함께 본다. 오늘은 조금 쉬어가야겠다는 말도, 이제는 다인이 내게 먼저 건넨다.*

---

### `perfect_dain_coda_1`
- 배경: `ending_perfect_dain.png`
- 다음: `perfect_dain_coda_2`

- 캐릭터: `없음`
**다인**: 야, 울 엄마가 어제 내 중계 재방송을 세 번이나 돌려 봤대! 시합 뛰는 선수들보다 내 해설 목소리가 제일 시끄러워서 귀에 쏙쏙 박힌다나 뭐라나!

---

### `perfect_dain_coda_2`
- 배경: `ending_perfect_dain.png`
- 다음: `perfect_dain_coda_3`

- 캐릭터: `없음`
**{name}**: *다인이 준비한 다음 경기 중계 대본 맨 첫 줄에는, 두꺼운 네임펜으로 '무릎이 아프면 즉시 멈춘다'라는 문장이 큼직하게 적혀 있다. 그 위에는 지우개로 망설인 자국이 하나도 없다.*

---

### `perfect_dain_coda_3`
- 배경: `ending_perfect_dain.png`
- 다음: `date_choice_perfect_dain`

- 캐릭터: `없음`
**다인**: 오늘 방송 끝나면 나랑 손잡고 집까지 걸어가자. 오늘 걷는 속도도 내가 직접 정할게!

---

### `date_choice_perfect_dain`
- 배경: `gym.png`
- 시간대: `day`
- 선택지:
  1. "체육관." → `date_perfect_dain_gym_1`
  2. "중계석." → `date_perfect_dain_booth_1`

- 캐릭터: `dain_laugh.png`
**다인**: 오늘은 코트 위에 올라가서 땀 흘리지 않아도 돼. 그래도 너랑 꼭 같이 가 보고 싶은 데가 있거든!

---

### `date_perfect_dain_gym_1`
- 배경: `gym.png`
- 시간대: `day`
- 다음: `date_perfect_dain_gym_2`

- 캐릭터: `dain_laugh.png`
**{name}**: *배구공 하나를 품에 안은 다인은 습관처럼 스파이크 점프를 뛰지 않고 곧장 내 옆의 나무 벤치에 나란히 앉는다.*

---

### `date_perfect_dain_gym_2`
- 배경: `gym.png`
- 시간대: `day`
- 다음: `date_perfect_dain_gym_3`

- 캐릭터: `dain_laugh.png`
**다인**: *다인이 내 어깨에 머리를 툭 기대며 눈을 감는다.* 야, 나 딱 5분만 눈 붙일게. 진짜 5분만. ...혹시 10분 넘게 지나도 깨우지는 마.

---

### `date_perfect_dain_gym_3`
- 배경: `gym.png`
- 시간대: `day`
- 다음: `perfect_epilogue_4_dain`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인은 다쳤던 오른쪽 무릎을 벤치 아래로 편안히 뻗어 두고 내 어깨가 있는 왼쪽으로 온전히 몸의 무게를 실어 기대 온다.*

---

### `date_perfect_dain_booth_1`
- 배경: `dain_broadcast_booth.png`
- 시간대: `day`
- 다음: `date_perfect_dain_booth_2`

- 캐릭터: `dain_laugh.png`
**{name}**: *중계석에 올라간 다인이 커다란 방송용 헤드셋을 양귀에 맞춰 써 보더니, 마이크 스위치를 만지작거리다 곧바로 다시 끈다.*

---

### `date_perfect_dain_booth_2`
- 배경: `dain_broadcast_booth.png`
- 시간대: `day`
- 다음: `date_perfect_dain_booth_3`

- 캐릭터: `dain_laugh.png`
**다인**: 코트 위 공 움직임을 말로 다 따라가려니까 직접 뛰는 것보다 더 숨차네. ...그래도 네가 옆에서 들어 주니까 엄청 재밌어.

---

### `date_perfect_dain_booth_3`
- 배경: `dain_broadcast_booth.png`
- 시간대: `day`
- 다음: `perfect_epilogue_4_dain`

- 캐릭터: `dain_laugh.png`
**{name}**: *체육관 벽면의 전자 점수판 불이 모두 꺼진 뒤에도, 다인은 내 손을 잡은 채 한동안 중계석 자리에서 일어나지 않는다.*

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
**{name}**: *고백을 건넨 뒤로 한 달쯤 지나서, 방과 후 체육관 정문 앞에서 잠깐 보자는 다인의 짧은 문자가 도착했다.*

---

### `bitter_dain_2`
- 배경: `gym.png`
- 다음: `bitter_dain_3`

- 캐릭터: `dain_normal.png`
**다인**: *다인이 애써 씩씩한 목소리로 웃어 보이지만 눈가는 아련하게 젖어 있다.* 너랑 보낸 시간 진짜 재밌었어! ...근데 말이야, 우리 사이는 그냥 재밌기만 했나 봐. 그게 제일 아쉽다.

---

### `bitter_dain_3`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_dain_3_b`

- 캐릭터: `없음`
**{name}**: *봄비가 내리는 체육관 문밖. 굳게 닫힌 철문 너머에서 홀로 배구공을 바닥에 튀기는 소리가 둔탁하게 한 번 울린다.*

---

### `bitter_dain_3_b`
- 배경: `school_festival.webp`
- 배경톤: `rain`
- 다음: `bitter_epilogue_1`

- 캐릭터: `없음`
**{name}**: *우산도 펴지 않은 채 비 내리는 교문을 걸어 나온다. 빗물에 젖은 연분홍 벚꽃잎이 운동화 코 끝에 달라붙는다.*

---

### `bitter_epilogue_1`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_epilogue_2`

- 캐릭터: `없음`
**{name}**: *졸업 후 계절이 바뀌면서 서로의 연락은 조금씩 뜸해졌다. 한 달에 한 번 오가던 안부가 두 달에 한 번이 되었고 어느 밤엔 메신저 입력창에 '요즘 어떻게 지내?'라고만 적어 둔 채 끝내 전송하지 못하고 화면을 껐다.*

---

### `bitter_epilogue_2`
- 배경: `ending_bittersweet.png`
- 다음: `bitter_epilogue_3`

- 캐릭터: `없음`
**{name}**: *전학 첫 주 닷새 동안의 눈부신 기록은 사진첩 속에 남았지만 마지막 날 찍힌 사진 속 두 사람 사이에는 어쩐지 한 사람이 스쳐 지나갈 만큼의 서늘한 간격이 비어 있었다.*

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
- 시간대: `sunset`
- BGM: `ending.mp3`
- 플래그: `ending_true_love`
- 다음: `true_dain_2`

- 캐릭터: `없음`
**{name}**: *소란스럽던 축제가 모두 끝난 뒤, 조용해진 체육관 벽에 나란히 등을 기대어 앉는다. 다인의 손에 들린 휴대폰 액정에는 정형외과 예약 화면이 환하게 켜져 있다.*

---

### `true_dain_2`
- 배경: `gym.png`
- 시간대: `sunset`
- 다음: `true_dain_2b`

- 캐릭터: `dain_shy.png`
**다인**: {name}, 이거 봐. 네가 내 무릎 아픈 거 다 알아 버렸으니까 이제 나 혼자 괜찮다고 거짓말하면서 덮어 둘 수는 없겠네. *다인이 쑥스러운 듯 코끝을 찡그리며 휴대폰 화면을 내 쪽으로 내민다.*

---

### `true_dain_2b`
- 배경: `gym.png`
- 시간대: `sunset`
- 다음: `true_dain_3`

- 캐릭터: `dain_shy.png`
**{name}**: *화면에 선명하게 찍힌 문구. '월요일 오후 4시 30분, 스포츠 재활 진료 예약 완료.'*

---

### `true_dain_3`
- 배경: `gym.png`
- 시간대: `sunset`
- 다음: `true_dain_4`

- 캐릭터: `dain_normal.png`
**다인**: 오늘 코치님이랑 엄마 아빠한테도 무릎 상태 솔직하게 다 말씀드렸어. 왜 이제야 말하냐고 엄청 혼나긴 했는데... 그래도 다 털어놓고 나니까 가슴이 뻥 뚫린 것처럼 시원하더라.

---

### `true_dain_4`
- 배경: `gym.png`
- 시간대: `sunset`
- 다음: `true_dain_5`

- 캐릭터: `dain_normal.png`
**{name}**: *병원 예약 확인 창 바로 아래 탭에는, 교내 스포츠 방송 동아리 신규 부원 지원서 페이지가 함께 열려 있다.*

---

### `true_dain_5`
- 배경: `gym.png`
- 시간대: `sunset`
- 다음: `true_dain_6`

- 캐릭터: `dain_shy.png`
**{name}**: 재활 치료랑 중계방송, 둘 다 시작해 볼 거야?

---

### `true_dain_6`
- 배경: `gym.png`
- 시간대: `sunset`
- 다음: `true_dain_7`

- 캐릭터: `dain_shy.png`
**다인**: 응! 무릎 재활은 계속 성실하게 받고 그사이 교내 경기 중계방송도 제대로 한번 부딪쳐 보려고.

---

### `true_dain_7`
- 배경: `gym.png`
- 시간대: `sunset`
- 다음: `true_dain_8`

- 캐릭터: `dain_laugh.png`
**{name}**: 좋아. 그럼 네가 마이크 잡는 첫 번째 방송은 무조건 내가 첫 청취자로 볼게.

---

### `true_dain_8`
- 배경: `gym.png`
- 시간대: `sunset`
- 다음: `true_dain_8b`

- 캐릭터: `dain_laugh.png`
**다인**: *다인의 눈이 별처럼 반짝인다.* 야, 지금 한 말 나중에 바꾸기 없기다! 내가 긴장해서 말 더듬고 재미없어도 끝까지 자리 지키고 봐야 해!

---

### `true_dain_8b`
- 배경: `gym.png`
- 시간대: `sunset`
- 다음: `true_dain_bridge`

- 캐릭터: `dain_laugh.png`
**다인**: 당장 내 기분 맞춰 주려고 그냥 해 주는 빈말이면 나 진짜 바보처럼 다 믿어 버릴 거야. ...그러니까 그냥 스쳐 지나가는 말은 아니었으면 좋겠어. *다인이 왼팔로 배구공을 안은 채, 내 앞으로 떨리는 오른손 새끼손가락을 조심스레 내민다.*

---

### `true_dain_bridge`
- 배경: `ending_true_dain.png`
- 시간대: `sunset`
- 다음: `true_epilogue_1_dain`

- 캐릭터: `없음`
**다인**: ...저기, 나 네 어깨에 잠깐만 기대도 돼? *휴대폰 액정에는 병원 예약 완료 화면이 은은하게 빛나고 있다. 다인은 공을 안은 채 내 옆으로 어깨 하나만큼의 거리를 좁혀 오며 숨죽여 대답을 기다린다.*

---

### `true_epilogue_1_dain`
- 배경: `ending_true_dain.png`
- 다음: `date_choice_true_dain`

- 캐릭터: `없음`
**{name}**: *그날 밤 다인은 습관처럼 웃으며 '괜찮아'라고 둘러대는 대신, 내게 다음 주 병원 진료 날짜를 제일 먼저 알려 주었다.*

---

### `date_choice_true_dain`
- 배경: `gym.png`
- 선택지:
  1. "벤치." → `date_true_dain_1`
  2. "중계석." → `date_true_dain_alt_1`

- 캐릭터: `dain_laugh.png`
**다인**: *조용한 체육관 벤치에 걸터앉은 다인이 자기 바로 옆자리를 손바닥으로 톡톡 두드린다.* 오늘 나랑 잠깐만 더 있어 줘. 넌 어디가 더 편해?

---

### `date_true_dain_1`
- 배경: `gym.png`
- 다음: `date_true_dain_2`

- 캐릭터: `dain_laugh.png`
**다인**: 걱정하지 마, 오늘 무리해서 점프 절대 안 해! 진짜 네 옆에 얌전히 앉아만 있을게.

---

### `date_true_dain_2`
- 배경: `gym.png`
- 다음: `true_epilogue_2`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인은 운동화 발치까지 데구르르 굴러온 배구공을 내려다보고도, 집어 드는 대신 내 손등 위로 자기 손을 포갠다.*

---

### `date_true_dain_alt_1`
- 배경: `dain_broadcast_booth.png`
- 다음: `date_true_dain_alt_2`

- 캐릭터: `dain_laugh.png`
**다인**: 중계석 마이크 스위치만 한번 만져 볼게. 소리는 안 켜고 너한테만 작게 들려줄 거야.

---

### `date_true_dain_alt_2`
- 배경: `dain_broadcast_booth.png`
- 다음: `true_epilogue_2`

- 캐릭터: `dain_laugh.png`
**{name}**: *다인이 쓰고 있던 헤드셋을 벗어 중계 테이블 위에 나란히 내려놓고는, 내 어깨에 이마를 콩 기댄다.*

---

### `true_epilogue_2`
- 배경: `school_festival.webp`
- 다음: `true_epilogue_3`

- 캐릭터: `없음`
**{name}**: *일요일 밤의 선선한 바람이 부는 귀갓길, 교문 앞에서 나란히 걸음을 늦춘다. 내일 아침이 오면 우리는 다시 이 교문을 함께 지날 것이다.*

---

### `true_epilogue_3`
- 배경: `school_festival.webp`
- 다음: `true_epilogue_4`

- 캐릭터: `없음`
**{name}**: *낯선 교실로 전학 오던 수요일부터 숨 가쁘게 달려온 닷새. 첫 번째 주간의 달력 맨 마지막 칸에, 설레는 내일의 약속을 또박또박 적어 넣는다.*

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
**{name}**: *서연의 어머니에게서 걸려 오는 전화는 여전히 짧고 화장대 거울 앞의 일정 메모들도 그대로 붙어 있다. 하지만 이제 내 앞에 선 서연은, 미리 적어 둔 메모 없이도 자기 마음속의 말을 먼저 건넨다.*

---

### `true_epilogue_4_yuna`
- 배경: `park.png`
- 다음: `true_epilogue_7`

- 캐릭터: `없음`
**{name}**: *떠나간 선배의 연락처는 여전히 비어 있고 도서관 구석의 옛 자리도 고요하다. 대신 유나는 이제 접힌 종이 쪽지보다 먼저 자신의 따뜻한 목소리로 내 이름을 부른다.*

---

### `true_epilogue_4_dain`
- 배경: `park.png`
- 다음: `true_epilogue_7`

- 캐릭터: `없음`
**{name}**: *다인은 내일 아침 기상 알람 이름을 '새벽 훈련'에서 '재활 스트레칭'으로 바꾸어 저장한다. 첫 중계 연습 영상도 찍어서 내게 제일 먼저 보내 주겠다고 했다. 나는 그 영상을 끝까지 다 보고 답장하겠다고 새끼손가락을 걸어 약속했다.*

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
**{name}**: *떨리는 고백을 건넨 뒤로도 우리의 일상이 하루아침에 뒤바뀌지는 않았다. 다만 내 하루 일과표 속에, 기다려지는 둘만의 약속이 하나 더 생겼을 뿐이다.*

---

### `good_1`
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `good_1b`

- 캐릭터: `없음`
**{name}**: *처음 며칠 동안은 마주 볼 때마다 부끄러움에 대화가 자꾸만 끊기곤 했다. 그래도 밤마다 이어지는 메시지만큼은 단 하루도 끊기지 않았다.*

---

### `good_1b`
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `good_1c`

- 캐릭터: `없음`
**{name}**: *하교 종이 울리자 두 사람은 약속이나 한 듯 같은 복도를 따라 교문 밖으로 걸어 나왔다.*

---

### `good_1c`
- 배경: `park.png`
- 시간대: `sunset`
- 분기:
  - [`route_dain`] → `good_1_dain`
  - [`route_yuna`] → `good_1_yuna`
  - [`route_seoyeon`] → `good_1_seo`
  - [기본] → `good_1_seo`

- 캐릭터: `없음`
**{name}**: *바람에 흩날린 연분홍 벚꽃잎 하나가 운동화 코 끝에 내려앉았다가, 나란히 내딛는 다음 걸음에 사뿐히 흩어진다.*

---

### `good_1_seo`
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `good_1_seo_b`

- 캐릭터: `seyoun_normal.png`
**서연**: 우리, 서두르지 말고 천천히 맞춰 가자.

---

### `good_1_seo_b`
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `good_1_seo_c`

- 캐릭터: `seyoun_normal.png`
**서연**: {name}, 잠깐만 멈춰 봐. 어깨에 꽃잎 붙었어. ...이제는 학생회 일로 바쁘다는 핑계로 네 옆을 그냥 스쳐 지나가고 싶진 않아서. *서연이 한 걸음 다가와 내 교복 소매 끝에 내려앉은 벚꽃잎을 다정한 손길로 떼어 낸다.*

---

### `good_1_seo_c`
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `good_1_seo_d`

- 캐릭터: `seyoun_normal.png`
**서연**: 방금 천천히 가자고 한 말, 거리 두려고 그냥 한 소리 아니야. 지금 이렇게 너랑 보폭 맞춰서 같이 걷는 것까지 전부 그 말 안에 들어 있어. *서연이 평소보다 반걸음 속도를 늦추어 내 옆에 바짝 나란히 선다.*

---

### `good_1_seo_d`
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `good_2_seo`

- 캐릭터: `seyoun_normal.png`
**{name}**: *석양빛을 받은 두 사람의 그림자와 발걸음이 하나로 나란해진다.*

---

### `good_2_seo`
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `good_3_seo`

- 캐릭터: `seyoun_normal.png`
**{name}**: *흩날리는 벚꽃길 끝자락, 서연이 횡단보도 흰 정지선 앞에서 걸음을 멈춘다.*

---

### `good_3_seo`
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `good_4_seo`

- 캐릭터: `seyoun_normal.png`
**서연**: 자, 초록불로 신호 바뀐다.

---

### `good_4_seo`
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `good_5_seo`

- 캐릭터: `seyoun_normal.png`
**{name}**: *서연이 한 발 먼저 횡단보도를 건너가다가, 길 한가운데쯤에서 슬쩍 걸음을 늦추며 내가 따라오기를 기다린다.*

---

### `good_5_seo`
- 배경: `ending_good_seoyeon.png`
- 다음: `good_epilogue_1`

- 캐릭터: `없음`
**{name}**: *길을 다 건넌 맞은편 보도블록 위에서, 우리는 내일 다시 만날 시간과 장소를 조용히 약속했다.*

---

### `good_epilogue_1`
- 배경: `ending_good_seoyeon.png`
- 다음: `good_epilogue_2`

- 캐릭터: `없음`
**서연**: *그날 밤 서연에게서 도착한 문자.* 내일 점심시간, 옥상에서 봐. 이번엔 몰래 안 따고 행정실에 정식으로 사용 신청해 뒀어.

---

### `good_epilogue_2`
- 배경: `ending_good_seoyeon.png`
- 다음: `good_epilogue_3`

- 캐릭터: `없음`
**{name}**: *함께 보내온 사진 속 옥상 출입 대장 정오 칸에는, 우리 두 사람의 이름이 나란히 적혀 있다. 그 옆 여백에 작게 덧붙여진 서연의 반듯한 필체. '일 분도 늦지 마.'*

---

### `good_epilogue_3`
- 배경: `ending_good_seoyeon.png`
- 다음: `good_5_cg_seo`

- 캐릭터: `없음`
**{name}**: *다음 날 점심시간, 서연은 정식으로 빌려 온 열쇠로 옥상 문을 활짝 열어 두고는, 내가 계단을 다 올라올 때까지 문 앞에서 미소 지으며 기다리고 서 있다.*

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
**{name}**: *햇살이 내리쬐는 옥상. 활짝 열린 철문 옆으로 새 화분을 놓기 위해 비워 둔 한 뼘의 자리가 보인다.*

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
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "서연 PERFECT END의 1년 후 보너스 대화다. 졸업 뒤에도 관계가 단단히 이어졌고 대학 입학식 날 서연은 새 화분 두 개와 빈자리 하나가 담긴 사진을 보냈다. 서로를 선택한 현재를 유지하며 이별이나 관계 재판정을 만들지 않는다."
- 성격: "서연은 책임감 있고 솔직하며 안정된 가까운 관계 안에서는 약한 모습과 작은 장난도 편하게 드러낸다. 장기적인 약속을 서두르지 않되 함께할 미래를 자연스럽게 전제로 말한다."

- 캐릭터: `seyoun_normal.png`
**서연**: *1년이 지난 뒤에도 변함없이 열린 옥상 문 옆에서, 서연이 새 화분이 놓일 빈자리를 손끝으로 가리키며 웃는다.* 이 자리에 둘 화분도 오늘 같이 고르러 갈래? 이제 우리한테 시간은 아주 많으니까.

---

### `day5_seo_ending_freetalk_true_love`
- 배경: `seyoun_room.png`
- 타입: `free_talk`
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "서연 TRUE LOVE END 직후의 보너스 대화다. 서연은 자신의 방과 가족사진, 숨겨 둔 메모를 보여 주며 주인공을 사적인 삶 안으로 들였다. 서로의 진심을 확인했지만 관계는 아직 조심스럽게 깊어지는 단계다. PERFECT END의 1년 후 사건을 가져오지 않는다."
- 성격: "서연은 통제된 태도 속에서도 신뢰하는 상대에게는 메모 없이 속마음을 말하려 노력한다. 가까움과 망설임을 함께 유지하고 솔직하되 이미 완전히 안정된 장기 연인처럼 행동하지 않는다."

- 캐릭터: `seyoun_shy.png`
**서연**: *서연은 화분 받침 아래의 메모를 꺼내지 않은 채 따뜻한 컵 하나를 내 앞으로 밀어 준다.* ...오늘 밤엔 미리 적어 둔 문장 말고 그냥 네 눈 보면서 바로 얘기해 볼게.

---

### `day5_seo_ending_freetalk_good`
- 배경: `top_school.png`
- 타입: `free_talk`
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "서연 GOOD END 뒤의 보너스 대화다. 4일차 고백은 받아들여졌지만 대화가 자주 끊겼고 둘은 천천히 관계를 맞춰 가기로 했다. 다음 날 옥상 점심을 정식으로 예약한 상태다. 관계를 실패로 돌리거나 PERFECT END 수준으로 앞당기지 않는다."
- 성격: "서연은 규칙과 약속을 챙기면서도 반걸음 속도를 맞춰 주는 현실적인 다정함을 보인다. 어색함을 숨기지 않고 하나씩 확인하며 새로 시작한 관계의 적당한 거리를 지킨다."

- 캐릭터: `seyoun_normal.png`
**서연**: *정식으로 예약해 둔 옥상 문을 활짝 열고 출입 사용대장을 확인한다.* 우리 천천히 맞춰 가기로 했잖아. 오늘 점심 이야기부터 차근차근 제대로 나누자.

---

### `day5_seo_ending_freetalk_bittersweet`
- 배경: `cafe.png`
- 타입: `free_talk`
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "서연 BITTERSWEET END 이후의 보너스 대화다. 고백 뒤 한 달 만에 둘은 너무 조심하다 멀어졌고 졸업 후 연락도 점점 뜸해졌다. 지금은 그 결말을 인정한 채 다시 마주한 짧은 대화이며 자동으로 재결합하거나 성공한 연애로 바꾸지 않는다."
- 성격: "서연은 아쉬움을 회피하지 않고 사실대로 말하지만 상대를 몰아붙이지 않는다. 남아 있는 애정과 현재의 거리를 동시에 지키며 재회를 약속하기보다 지금 건네는 말에 정직하게 답한다."

- 캐릭터: `seyoun_normal.png`
**서연**: *다 식어 버린 커피잔 옆에서 서연이 컵받침 모서리를 조용히 맞춘다.* 우리 사이가 멀어져 버린 시간까지 없던 일로 덮지는 말자. ...그래도 지금 네가 하고 싶은 말은 끝까지 들을게.

---

### `day5_seo_ending_freetalk_late_good`
- 배경: `park.png`
- 타입: `free_talk`
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "서연에게 5일차 마지막 기회에 뒤늦게 고백해 이어진 GOOD END 뒤의 보너스 대화다. 4일차에는 기다렸고 마지막 날 고백이 받아들여져 관계가 막 시작됐다. 이를 4일차 고백이나 오래된 연애로 바꾸지 않고 늦게 시작한 두 사람의 다음 대화를 잇는다."
- 성격: "서연은 늦은 고백을 가볍게 넘기지 않지만 받아들인 선택에는 책임감 있게 응한다. 서로 놓친 말을 차분히 확인하고 갓 시작한 관계에 맞는 조심스러운 기대와 작은 안도감을 보인다."

- 캐릭터: `seyoun_laugh.png`
**서연**: *노을 진 공원 산책길에서 서연이 내 보폭에 맞춰 걸음을 늦춘다.* 마지막에라도 네 입으로 직접 말해 줬으니까. 앞으로는 할 말 있어도 그렇게 오래 미루지 마.

---

### `good_1_yuna`
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `good_1_yuna_b`

- 캐릭터: `yuna_smile.png`
**유나**: *유나가 옅게 숨을 내쉬며 내 눈을 올려다본다.* ...조금 늦게 돌아오긴 했네. 그래도 삼키지 않고 끝까지 말해 줘서 고마워.

---

### `good_1_yuna_b`
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `good_1_yuna_b_b`

- 캐릭터: `yuna_smile.png`
**유나**: *유나가 손바닥 안에 접어 두었던 작은 쪽지를 건넨다. 펼치면 연보라색 만년필로 적힌 한 줄.* 다음번엔 망설이지 말고 나한테 제일 먼저 말해 줘.

---

### `good_1_yuna_b_b`
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `good_2_yuna`

- 캐릭터: `yuna_smile.png`
**{name}**: *짧고 단정한 한 문장이다. 여러 번 접었다 편 종이 결을 따라 연보라색 잉크가 은은하게 번져 있다.*

---

### `good_2_yuna`
- 배경: `top_school.png`
- 시간대: `sunset`
- 다음: `good_3_yuna`

- 캐릭터: `yuna_smile.png`
**{name}**: *옥상 난간에 나란히 기댄 유나는, 선선한 저녁 바람이 머리카락을 흩뜨려도 먼저 자리를 뜨지 않는다.*

---

### `good_3_yuna`
- 배경: `top_school.png`
- 시간대: `sunset`
- 다음: `good_4_yuna`

- 캐릭터: `yuna_smile.png`
**{name}**: *축제의 끝을 알리는 방송 소리가 완전히 멎은 뒤에도, 두 사람은 같은 난간에 어깨를 맞대고 남아 있다.*

---

### `good_4_yuna`
- 배경: `top_school.png`
- 시간대: `sunset`
- 다음: `good_5_yuna`

- 캐릭터: `yuna_smile.png`
**유나**: *유나가 손에 든 노트를 열어 연보라색 책갈피를 새로운 페이지에 끼워 넣는다. 아직 한 번도 접힌 자국이 없는 깨끗한 다음 장이다.*

---

### `good_5_yuna`
- 배경: `ending_good_yuna.png`
- 다음: `good_epilogue_1_yuna`

- 캐릭터: `없음`
**{name}**: *나란히 발소리를 맞추어 옥상 계단을 천천히, 하지만 멈추지 않고 내려간다.*

---

### `good_epilogue_1_yuna`
- 분기:
  - [`chose_yuna_lunch`] → `good_epilogue_1_yuna_established`
  - [기본] → `good_epilogue_1_yuna_first`

<!-- i18n -->

---

### `good_epilogue_1_yuna_established`
- 배경: `ending_good_yuna.png`
- 다음: `good_epilogue_2_yuna`

- 캐릭터: `없음`
**유나**: *가방 안감에 오래도록 눌려 있던 자국. 유나가 곱게 접힌 쪽지를 꺼내 건넨다.* 빌려 갔던 1권 다 읽었으면, 내일은 내가 2권 빌려줄게. — 유나

---

### `good_epilogue_1_yuna_first`
- 배경: `ending_good_yuna.png`
- 다음: `good_epilogue_2_yuna`

- 캐릭터: `없음`
**유나**: *유나가 새하얀 쪽지를 수줍게 내민다.* 너랑 같이 읽고 싶은 책을 새로 골라 뒀어. 내일 점심에 도서관에서 같이 빌리자. — 유나

---

### `good_epilogue_2_yuna`
- 배경: `ending_good_yuna.png`
- 다음: `good_epilogue_3_yuna`

- 캐릭터: `없음`
**{name}**: *유나가 건넨 쪽지를 가방 가장 깊은 안주머니에 소중히 넣는다. 오늘 다 읽지 못한 다음 페이지는 내일도 그 자리에서 우리를 기다리고 있을 것이다.*

---

### `good_epilogue_3_yuna`
- 배경: `ending_good_yuna.png`
- 다음: `good_5_cg_yuna`

- 캐릭터: `없음`
**유나**: *집에 돌아와 다시 펼쳐 본 쪽지 뒷면 구석에 아주 작은 글씨가 숨어 있다. 살짝 번진 연보라색 잉크.* ...남은 결말은 내일 같이 읽자.

---

### `good_5_cg_yuna`
- 배경: `ending_good_yuna.png`
- 다음: `day5_yuna_ending_freetalk_intro`

- 캐릭터: `없음`
**시스템**: ─── GOOD END ───

---

### `day5_yuna_ending_freetalk_intro`
- 다음: `day5_yuna_ending_freetalk_router`

<!-- i18n -->

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
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "유나 PERFECT END의 1년 후 보너스 대화다. 유나의 첫 장편소설이 출간됐고 헌정사에는 세 번째 곡을 함께 들은 사람을 적었다. 둘의 깊고 지속적인 관계와 길어진 쪽지를 유지하며 결말을 되돌리지 않는다."
- 성격: "유나는 조용하고 사려 깊지만 확실히 신뢰하는 상대에게는 말과 애정을 먼저 건넨다. 책과 음악의 비유를 자연스럽게 쓰되 감정을 숨기는 도구로 삼지 않고 안정된 친밀감을 보인다."

- 캐릭터: `yuna_smile.png`
**유나**: *유나가 갓 출간된 첫 장편소설 표지를 덮었다가, 헌정사가 적힌 첫 페이지를 다시 살며시 펼친다.* 세 번째 곡 그다음에 이어질 이야기는... 이제 네가 먼저 들려줘.

---

### `day5_yuna_ending_freetalk_true_love`
- 배경: `yuna_secret_rooftop.png`
- 시간대: `night`
- 타입: `free_talk`
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "유나 TRUE LOVE END 직후의 보너스 대화다. 유나는 비밀 다락방 위 옥상을 보여 주고 세 번째 곡을 함께 들으며 기대도 되는지 물었다. 쪽지보다 목소리를 먼저 쓰기 시작한 단계이며 PERFECT END의 출간 후 미래를 앞당기지 않는다."
- 성격: "유나는 신중하고 말수가 적지만 이제 침묵 뒤로만 숨지 않는다. 상대의 답을 기다리고 자신의 감정도 직접 말하되, 막 깊어진 관계의 수줍음과 여백을 유지한다."

- 캐릭터: `yuna_smile.png`
**유나**: *초승달이 뜬 비밀 옥상에서 재생목록의 다음 곡을 고르던 유나가 손가락을 멈춘다.* 이번에는 종이 쪽지 말고 내가 먼저 목소리로 물어볼게. ...지금 무슨 생각 해?

---

### `day5_yuna_ending_freetalk_good`
- 배경: `top_school.png`
- 타입: `free_talk`
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "유나 GOOD END 뒤의 대화. 4일차 고백 뒤 어색함이 남았지만 함께 책을 읽고 다음 날도 만나기로 했다. 1권 대출과 2권 약속은 해당 기억이 있을 때만 언급한다. 이제 시작한 관계를 이별이나 장기 연애로 바꾸지 않는다."
- 성격: "유나는 짧은 문장과 작은 행동으로 관계를 이어 가며 필요할 때는 먼저 말하라는 용기도 낸다. 서두르지 않으면서도 상대에게 다음 페이지를 분명히 내어 준다."

- 캐릭터: `yuna_normal.png`
**유나**: *접힌 쪽지 뒷면 여백에 만년필로 새 문장을 적어 내게 살짝 기울여 보여 준다.* 다음번엔 네가 먼저 말해 줘. 아니면... 오늘 지금부터 바로 얘기해도 되고.

---

### `day5_yuna_ending_freetalk_bittersweet`
- 배경: `library_old.png`
- 타입: `free_talk`
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "유나 BITTERSWEET END 이후의 보너스 대화다. 고백은 이어지지 못했고 한 달 뒤 마지막 쪽지를 남긴 뒤 졸업 후 연락이 뜸해졌다. 현재는 멀어진 관계를 인정하고 다시 나누는 짧은 대화이며 자동 재결합이나 성공한 연애를 만들지 않는다."
- 성격: "유나는 후회와 애정을 조용히 인정하지만 모호한 희망으로 상대를 붙잡지 않는다. 말 사이의 여백과 현재의 거리를 지키면서 지금 들은 말에는 진심으로 답한다."

- 캐릭터: `yuna_sad.png`
**유나**: *빗물에 잉크가 번진 마지막 쪽지를 조용히 책갈피 사이에 끼워 넣는다.* 이미 마침표를 찍은 문장을 억지로 고쳐 쓰지는 않을게. ...그래도 네가 지금 꺼내는 말은 다 듣고 싶어.

---

### `day5_yuna_ending_freetalk_late_good`
- 배경: `top_school.png`
- 타입: `free_talk`
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "유나에게 5일차 마지막 기회에 뒤늦게 고백해 이어진 GOOD END 뒤의 보너스 대화다. 4일차에는 기다렸고 마지막 날에야 마음을 전해 관계가 막 시작됐다. 고백 시점을 바꾸거나 이미 오래 사귄 사이처럼 행동하지 않는다."
- 성격: "유나는 늦게 도착한 진심을 신중히 받아들이고 다시 침묵으로 놓치지 않도록 작은 질문을 먼저 건넨다. 새 관계의 수줍음과 조심스러운 희망을 함께 보여 준다."

- 캐릭터: `yuna_smile.png`
**유나**: *연보라색 책갈피를 끼워 넣고 읽던 책을 덮는다.* 늦게라도 내 눈 보고 말해 줘서 고마워. 다음번엔... 나도 숨지 않고 먼저 얘기할게.

---

### `good_1_dain`
- 배경: `park.png`
- 시간대: `sunset`
- 다음: `good_2_dain`

- 캐릭터: `dain_pout.png`
**다인**: 야, 미리 말해 두는데 우리 사이 어색한 거 아직 백 퍼센트 다 풀린 건 아니야! ...그래도 내 무릎은 월요일에 병원 가서 제대로 다시 검사받기로 했어.

---

### `good_2_dain`
- 배경: `school_festival.webp`
- 시간대: `sunset`
- 다음: `good_3_dain`

- 캐릭터: `dain_pout.png`
**{name}**: *노을이 내려앉은 학교 교문 앞. 다인이 주머니에서 반으로 접어 둔 병원 재활 안내지를 꺼내 내 앞으로 쑥 내민다.*

---

### `good_3_dain`
- 배경: `school_festival.webp`
- 시간대: `sunset`
- 다음: `good_4_dain`

- 캐릭터: `dain_laugh.png`
**{name}**: *내가 두 손으로 안내지를 받아 들자, 다인은 그제야 안심한 듯 해사하게 웃음을 터뜨린다.*

---

### `good_4_dain`
- 배경: `school_festival.webp`
- 시간대: `sunset`
- 다음: `good_5_dain`

- 캐릭터: `dain_normal.png`
**다인**: 솔직히 오늘은 무릎도 마음도 완전히 괜찮지는 않아. 그러니까... 우리 조금만 천천히 걸어가자.

---

### `good_5_dain`
- 배경: `ending_good_dain.png`
- 다음: `good_epilogue_1_dain`

- 캐릭터: `없음`
**{name}**: *다인이 먼저 가볍게 쥔 주먹을 내 앞으로 내밀고 기다린다. 내 손에 들린 재활 안내지 여백에는 내일의 산책 시간과 함께 다인의 둥근 글씨로 '걸음 속도는 내가 정하기!'라고 적혀 있다.*

---

### `good_epilogue_1_dain`
- 배경: `ending_good_dain.png`
- 다음: `good_epilogue_2_dain`

- 캐릭터: `없음`
**다인**: *그날 밤 다인에게서 도착한 메시지.* 내일 아침 등교 전에 나랑 재활 산책 같이 걸어 줄 사람?

---

### `good_epilogue_2_dain`
- 배경: `ending_good_dain.png`
- 다음: `good_epilogue_3_dain`

- 캐릭터: `없음`
**{name}**: *장난스러운 짧은 질문 하나가 휴대폰 화면 위에서 오래도록 따뜻하게 빛난다.*

---

### `good_epilogue_3_dain`
- 배경: `ending_good_dain.png`
- 다음: `good_5_cg_dain`

- 캐릭터: `없음`
**{name}**: 당연히 콜이지. 대신 걷는 속도는 네가 정해. *바로 답장을 보내고 내일 아침 알람을 삼십 분 앞당겨 맞춘다.*

---

### `good_5_cg_dain`
- 배경: `ending_good_dain.png`
- 다음: `day5_dain_ending_freetalk_intro`

- 캐릭터: `없음`
**시스템**: ─── GOOD END ───

---

### `day5_dain_ending_freetalk_intro`
- 다음: `day5_dain_ending_freetalk_router`

<!-- i18n -->

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
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "다인 PERFECT END의 1년 후 대화. 다인은 재활을 이어 가며 스포츠미디어학과 중계부에서 첫 방송을 마쳤고 어머니도 재방송을 봤다. 주인공은 약속대로 방송을 끝까지 봤다. 지금은 방송 부스에서 감상을 듣고 다음 대본을 준비한다. 부상과 진로, 안정된 관계를 유지한다."
- 성격: "다인은 밝고 직접적이며 안정된 관계 안에서 장난과 애정을 숨기지 않는다. 몸 상태와 속도는 스스로 정하고 주인공의 지지를 당연시하지 않으면서 함께 만든 약속을 즐겁게 기억한다."

- 캐릭터: `dain_laugh.png`
**다인**: *형광펜 자국이 가득한 첫 방송 대본과 무릎 재활 기록지를 나란히 펼쳐 놓고 환하게 웃는다.* 약속대로 내 첫 중계 끝까지 다 봤지? 자, 이제 첫 번째 청취자의 생생한 감상을 생방송으로 들어 보겠습니다!

---

### `day5_dain_ending_freetalk_true_love`
- 배경: `gym.png`
- 타입: `free_talk`
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "다인 TRUE LOVE END 직후의 보너스 대화다. 다인은 부상을 숨기지 않고 재활 진료를 예약했으며 스포츠 방송 동아리에도 지원하려 한다. 둘은 첫 방송을 끝까지 보기로 약속하고 조심스럽게 기대었다. PERFECT END의 1년 후 진로 성과를 미리 확정하지 않는다."
- 성격: "다인은 솔직하고 활기차지만 이제 아픔을 괜찮다고 덮지 않는다. 새 관계의 설렘 속에서도 자신의 치료와 선택을 주도하며 상대의 말에 장난스럽고 진지하게 모두 반응한다."

- 캐릭터: `dain_shy.png`
**다인**: *정형외과 재활 예약 화면과 스포츠 방송 동아리 지원서를 번갈아 흔들어 보인다.* 내가 둘 다 제대로 해 본다고 했잖아! 너도 지금 나한테 하고 싶은 말 있으면 아끼지 말고 다 해 봐.

---

### `day5_dain_ending_freetalk_good`
- 배경: `park.png`
- 타입: `free_talk`
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "다인 GOOD END 뒤의 보너스 대화다. 4일차 고백은 받아들여졌지만 둘 사이의 문제는 아직 다 풀리지 않았다. 다인은 월요일 재활과 다음 산책을 정했고 주인공은 다인의 속도에 맞추기로 했다. 갈등을 없애거나 완성된 관계로 건너뛰지 않는다."
- 성격: "다인은 밝은 척으로 불편함을 덮지 않고 현재 상태를 직접 말한다. 관계와 재활 모두 자기 속도를 정하면서도, 함께 걷겠다는 상대에게 솔직한 기대와 격려를 건넨다."

- 캐릭터: `dain_normal.png`
**다인**: *재활 산책 안내지 여백에 적어 둔 '속도는 내가 정하기'라는 문구를 손가락으로 톡톡 두드린다.* 우리 사이 아직 백 퍼센트 다 풀린 건 아니니까, 오늘도 발맞춰서 천천히 얘기하자.

---

### `day5_dain_ending_freetalk_bittersweet`
- 배경: `gym.png`
- 타입: `free_talk`
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "다인 BITTERSWEET END 이후의 보너스 대화다. 고백 한 달 뒤 다인은 둘 사이가 재미있기만 했던 점이 아쉽다고 말했고 졸업 후 연락은 점점 뜸해졌다. 지금은 끝난 관계와 남은 마음을 인정하는 대화이며 자동으로 다시 사귀지 않는다."
- 성격: "다인은 좋은 기억과 아쉬움을 모두 직설적으로 말하되 억지로 웃어넘기지 않는다. 상대를 탓하거나 재결합을 강요하지 않고 현재의 거리를 존중하면서 진심으로 응답한다."

- 캐릭터: `dain_normal.png`
**다인**: *굳게 닫힌 체육관 문에 등을 기대어 서서, 안쪽에서 울리는 공 튀는 소리에 잠시 귀를 기울인다.* 너랑 보낸 시간이 재밌었던 건 진짜야. 그만큼 아쉬웠던 것도 진짜고. 우리 둘 다 숨기지 말고 얘기하자.

---

### `day5_dain_ending_freetalk_late_good`
- 배경: `park.png`
- 타입: `free_talk`
- 호감도 변동: `없음`
- 다음: `day5_credits`
- 컨텍스트: "다인에게 5일차 마지막 기회에 뒤늦게 고백해 이어진 GOOD END 뒤의 보너스 대화다. 4일차에는 기다렸고 마지막 날 고백이 받아들여져 관계가 막 시작됐다. 이를 이전부터 사귄 관계로 바꾸지 않으며 재활과 다인이 정한 속도도 그대로 존중한다."
- 성격: "다인은 늦은 고백을 장난스럽게 받아주면서도 다시 미루지 말자는 진심을 분명히 한다. 갓 시작한 관계의 들뜸, 남은 어색함, 자신의 몸과 관계 속도를 함께 솔직히 다룬다."

- 캐릭터: `dain_laugh.png`
**다인**: *내 앞으로 주먹을 가볍게 내밀며 해사하게 웃는다.* 버저비터로 아슬아슬하게 세이프! 대신 앞으로는 할 말 있을 때 끝까지 미루기 없기다?

---

### `day5_ending_alone`
- 배경: `school_festival.webp`
- 시간대: `night`
- BGM: `night2.mp3`
- 다음: `alone_1`

- 캐릭터: `없음`
**{name}**: *홀로 걸어 나온 교문 밖에서 휴대폰이 짧게 진동한다. 누군가의 메시지가 아니라 배터리 부족을 알리는 시스템 경고창이다.*

---

### `alone_1`
- 배경: `ending_alone.png`
- 다음: `alone_2`

- 캐릭터: `없음`
**{name}**: *전학 온 뒤 닷새 동안 받았던 쪽지들과 사진들을 서랍 속 하나의 폴더에 차곡차곡 모은다. 그중 누구의 흔적도 일부러 지우지는 않는다.*

---

### `alone_2`
- 배경: `ending_alone.png`
- 다음: `alone_2_b`

- 캐릭터: `없음`
**{name}**: *불 꺼진 조용한 방 안. 메신저 상단에 고정해 둔 세 사람의 대화방은 모두 새로운 알림 없이 고요하다.*

---

### `alone_2_b`
- 배경: `ending_alone.png`
- 다음: `alone_4`

- 캐릭터: `없음`
**{name}**: *아무 글자도 적지 못한 빈 입력창을 닫고 책상 위에 휴대폰을 조용히 내려놓는다.*

---

### `alone_4`
- 배경: `ending_alone.png`
- 다음: `alone_5`

- 캐릭터: `없음`
**{name}**: *충전 케이블을 꽂고 내일 아침 등교 알람을 맞춘다. 액정 화면이 완전히 까맣게 꺼진 뒤에도, 벽시계의 초침 소리는 어둠 속에서 묵묵히 내일을 향해 걸어간다.*

---

### `alone_5`
- 배경: `ending_alone.png`
- 다음: `day5_credits`

- 캐릭터: `없음`
**시스템**: ─── ALONE END ───

---

### `day5_credits`
- 배경: `school_festival.webp`
- 타입: `credits`
- 다음: `day5_ending_restart`

- 캐릭터: `없음`
**—**: ‹빈›

---

### `day5_ending_restart`
- 배경: `school_festival.webp`
- 선택지:
  1. "처음부터 다시 시작하기" → `index.html`

- 캐릭터: `없음`
**시스템**: ‹빈›

---

### `forced_violation_day5_after_seoyeon`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day5_seoyeon_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day5_seoyeon_excuse`

**서연**: *서연이 싸늘한 침묵 끝에 얼음장 같은 목소리로 말한다.* 방금 네가 선 넘은 행동, 아무 일도 없었던 것처럼 덮고 넘어갈 생각 하지 마. 당분간 내 근처에 다가오지도 말고 사적으로 연락하지도 마.

---

### `forced_violation_day5_seoyeon_apologize`
- 다음: `forced_violation_day5_resume`

**서연**: *서연의 표정은 조금도 풀리지 않은 채 단호하다.* 사과는 들었어. 그렇다고 네가 한 행동이 없던 일이 되진 않아. 말한 대로 당분간 연락하지 마.

---

### `forced_violation_day5_seoyeon_excuse`
- 다음: `forced_violation_day5_resume`

**서연**: *서연이 차갑게 말을 자른다.* 오해? 내가 분명히 싫다고 말한 순간부터 그건 오해일 수가 없어. 더 이상 변명하지 마.

---

### `forced_violation_day5_after_yuna`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day5_yuna_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day5_yuna_excuse`

**유나**: *유나가 한 걸음 물러서서 경계하며 가쁜 숨을 고른다.* 내가 싫다고 거절하는 걸 알면서도 억지로 무시했잖아. 지금은 네 얼굴조차 마주 보기 싫어. 더는 연락하지 마.

---

### `forced_violation_day5_yuna_apologize`
- 다음: `forced_violation_day5_resume`

**유나**: *한참의 침묵 끝에 유나가 낮게 답한다.* 말로 사과했다고 해서 방금 일이 사라지진 않아. 이제 그만 가 줘.

---

### `forced_violation_day5_yuna_excuse`
- 다음: `forced_violation_day5_resume`

**유나**: *유나는 내 변명을 끝까지 듣지 않고 고개를 돌린다.* 분명히 싫다고 했어. 말로 포장해서 설명할 일이 아니야.

---

### `forced_violation_day5_after_dain`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day5_dain_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day5_dain_excuse`

**다인**: *다인은 평소처럼 털털하게 웃어넘기지 않는다. 무거운 침묵 끝에 낮고 굳은 목소리가 날아온다.* 이건 장난으로 칠 수 없어. 내가 싫다는데도 억지로 밀어붙인 거, 난 절대 그냥 안 넘어가.

---

### `forced_violation_day5_dain_apologize`
- 다음: `forced_violation_day5_resume`

**다인**: *다인은 한참 뒤에야 짧고 냉랭하게 답한다.* 그래, 사과는 들었어. 오늘은 여기까지야. 다음에 다시 말 섞을지 말지는 내가 정할게.

---

### `forced_violation_day5_dain_excuse`
- 다음: `forced_violation_day5_resume`

**다인**: *다인의 목소리가 거칠게 날을 세운다.* 아니, 비겁하게 핑계 대지 마. 내가 싫다고 했는데도 멈추지 않은 건 너야.

---

### `forced_violation_day5_after_teacher`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day5_teacher_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day5_teacher_excuse`

**담임선생님**: *담임선생님이 단호하게 물러서며 선을 긋는다.* 방금 네 행동은 학생으로서 명백히 선을 넘었어. 더는 가까이 오지 마라. 이 일은 학교 규정과 절차대로 엄중히 처리할 거야.

---

### `forced_violation_day5_teacher_apologize`
- 다음: `forced_violation_day5_resume`

**담임선생님**: *담임선생님이 숨을 고르고 차분하게 말한다.* 사과는 들었다. 그래도 공식적인 지도 절차는 그대로 진행할 거야. 더 말하지 말고 자리로 돌아가.

---

### `forced_violation_day5_teacher_excuse`
- 다음: `forced_violation_day5_resume`

**담임선생님**: *담임선생님이 해명을 단칼에 끊는다.* 지금 어설픈 해명으로 무마할 상황이 아니야. 더 말하지 말고 즉시 거리를 둬라.

---

### `forced_violation_day5_after_nurse`
- 선택지:
  1. "변명하지 않고 사과한 뒤 대화를 멈춘다." → `forced_violation_day5_nurse_apologize`
  2. "오해였다고 해명하려 든다." → `forced_violation_day5_nurse_excuse`

**보건선생님**: *보건선생님의 얼굴에서 평소 같은 여유와 웃음기가 완전히 사라진다.* 지금 이 순간부터 선을 지켜. 방금 있었던 일은 공식 일지에 기록하고 담당 부서에 바로 알릴 거야.

---

### `forced_violation_day5_nurse_apologize`
- 다음: `forced_violation_day5_resume`

**보건선생님**: *보건선생님이 잠시 뒤 단호하게 답한다.* 사과는 받아 둘게. 그래도 공식 기록과 보고 절차는 그대로 진행할 거야. 오늘 대화는 여기까지야.

---

### `forced_violation_day5_nurse_excuse`
- 다음: `forced_violation_day5_resume`

**보건선생님**: *보건선생님의 목소리가 서늘하게 가라앉는다.* 오해라는 말로 덮으면 방금 행동이 달라질 것 같니? 분명히 거부했는데도 네가 무시한 거잖아.

---

### `forced_violation_day5_after_haeun`
- 선택지:
  1. "잘못을 인정하고 거리를 둔다." → `forced_violation_day5_haeun_apologize`
  2. "오해였다고 둘러댄다." → `forced_violation_day5_haeun_excuse`

**하은**: *하은이 소스라치게 놀라며 한 걸음 뒤로 물러서서 손목의 학생회 팔찌를 꽉 움켜쥔다.* 더 이상 가까이 오지 마세요. 한 걸음만 더 오시면 지금 바로 선생님 부를 거예요.

---

### `forced_violation_day5_haeun_apologize`
- 다음: `forced_violation_day5_resume`

**하은**: *하은은 대답조차 하지 않은 채 뒷걸음질로 교무실 쪽으로 물러나며 내가 뒤따라오지 않는지 경계 어린 눈으로 살핀다.*

---

### `forced_violation_day5_haeun_excuse`
- 다음: `forced_violation_day5_resume`

**하은**: 절대 오해 아니에요. 제 뒤 따라오지 마세요. *하은은 단호하게 거리를 둔 채 곧장 교무실 문을 열고 들어간다.*

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
