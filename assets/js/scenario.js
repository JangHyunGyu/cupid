const SCENARIO = {
    "start": {
        name: "???",
        text: "(따스한 봄 햇살이 내리쬐는 교문 앞. 전학 첫날의 설렘과 긴장감이 가슴 속에서 소용돌이친다. 낯선 교복, 낯선 풍경... 모든 것이 생경하기만 하다.)\n\n\"안녕? 처음 보는 얼굴이네. 이 시간에 교문 앞에 멍하니 서 있는 걸 보니... 혹시 오늘 온다는 그 전학생이니?\"",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "intro_1"
    },
    "intro_1": {
        name: "???",
        text: "(그녀가 생긋 웃으며 한 걸음 다가온다. 바람에 살짝 흔들리는 그녀의 긴 머리카락에서 은은한 라벤더 향기가 코끝을 간지럽힌다. 맑은 눈동자가 나를 빤히 바라보자 심장 박동이 빨라지는 게 느껴진다.)\n\n\"나는 학생회장 '서연'이라고 해. 선생님께 부탁받아서 널 마중 나왔어. 만나서 반가워!\"",
        choices: [
            { text: "응, 반가워. 학교가 너무 커서 길을 좀 헤매고 있었어.", next: "path_friendly_1" },
            { text: "학생회장이 직접 마중까지? 내가 좀 특별한 대우를 받는 건가?", next: "path_tease_1" },
            { text: "너... 정말 예쁘다. (나도 모르게 본심이 튀어나와 버렸다!)", next: "path_blush_1" },
            { text: "(너무 긴장해서 목소리가 나오지 않는다. 그저 멍하니 그녀를 바라볼 뿐...)", next: "path_silent_1" }
        ]
    },
    "path_friendly_1": {
        name: "서연",
        text: "(나의 대답에 그녀가 안심한 듯 꽃이 피어나듯 밝게 웃는다. 그 미소에 긴장이 조금 풀리는 기분이다.)\n\n\"후훗, 역시 그랬구나. 우리 학교가 처음 오면 좀 복잡하긴 하지? 내가 교무실까지 완벽하게 가이드해줄게. 자, 나만 믿고 따라와!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1"
    },
    "path_tease_1": {
        name: "서연",
        text: "(그녀가 살짝 눈을 가늘게 뜨며 장난스럽게 대답한다. 하지만 입가에는 여전히 미소가 걸려 있다.)\n\n\"어머, 자신감이 넘치는 전학생이네? 특별 대우라기보다는... 학생회장으로서의 책임감이랄까? 하지만 네가 그렇게 생각한다면, 오늘 하루는 특별히 신경 써줄게!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1"
    },
    "path_blush_1": {
        name: "서연",
        text: "(서연이의 얼굴이 순식간에 잘 익은 사과처럼 빨개진다. 당황해서 시선을 피하며 머리카락을 만지작거리는 모습이 무척이나 신선하고 귀엽다.)\n\n\"에...? 그, 갑자기 무슨 소리를 하는 거야! 전학생은 다 너처럼 이렇게... 능글맞니? 어서 따라오기나 해! 늦으면 선생님께 혼난다구!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_1"
    },
    "path_silent_1": {
        name: "서연",
        text: "(그녀가 내 눈앞에서 손을 살랑살랑 흔든다. 걱정스러운 눈빛이 나를 향하자 왠지 모를 보호 본능이 자극된다.)\n\n\"저기... 괜찮니? 어디 아픈 건 아니지? 얼굴이 좀 빨간 것 같은데... 일단 보건실보다는 교무실부터 가는 게 좋겠어. 내가 부축해줄까?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1"
    },
    "hallway_1": {
        name: "서연",
        text: "(서연이의 뒤를 따라 복도를 걷는다. 복도 창문 너머로 학생들의 활기찬 목소리와 운동장에서 들려오는 호각 소리가 어우러진다. 그녀의 뒷모습을 보고 있자니 왠지 모를 설렘이 가시지 않는다.)\n\n\"복도를 지나면서 학교 시설들을 간단히 설명해줄게. 저기 보이는 곳이 우리 학교의 자랑인 도서관이야. 그리고 저쪽은...\"",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "학교가 정말 활기차네. 서연이 너도 동아리 활동 하니?", next: "hallway_talk_club" },
            { text: "시설도 좋지만, 안내해주는 사람이 좋아서 더 멋져 보여.", next: "hallway_talk_flatter" },
            { text: "(조용히 그녀의 설명을 경청하며 걷는다.)", next: "hallway_talk_listen" }
        ]
    },
    "hallway_talk_club": {
        name: "서연",
        text: "(그녀가 반가운 듯 고개를 돌려 나를 바라본다.)\n\n\"응! 나는 학생회 활동도 하지만, 사실 원예부 소속이기도 해. 꽃을 가꾸는 걸 좋아하거든. 나중에 시간 되면 우리 온실에도 놀러 와!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2"
    },
    "hallway_talk_flatter": {
        name: "서연",
        text: "(그녀가 쑥스러운 듯 헛기침을 하며 대답한다. 하지만 기분이 나빠 보이지는 않는다.)\n\n\"정말... 너는 말을 참 예쁘게 하는구나. 학생회장으로서 그런 칭찬을 들으니 보람찬걸? 하지만 너무 띄워주지는 마, 부끄러우니까.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_2"
    },
    "hallway_talk_listen": {
        name: "서연",
        text: "(그녀는 나의 진지한 태도가 마음에 든 듯 더욱 열정적으로 설명을 이어간다.)\n\n\"내 설명을 이렇게 잘 들어주니 정말 고마워. 전학생 군은 참 성실한 사람인 것 같네!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2"
    },
    "hallway_2": {
        name: "서연",
        text: "(그녀가 갑자기 멈춰 서서 나를 돌아본다. 진지하면서도 기대에 찬 눈빛에 나도 모르게 침을 꼴깍 삼켰다.)\n\n\"너는 어떤 동아리에 관심 있어? 우리 학생회도 항상 새로운 인재를 환영하고 있거든. 만약 네가 들어온다면... 내가 직접 업무를 가르쳐줄 수도 있어.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "학생회에 들어가면 너랑 매일 같이 있을 수 있는 거야? 그럼 무조건 신청할게!", next: "path_flirt_2" },
            { text: "원예부도 끌리는데? 꽃보다 예쁜 부장이 있다면 더더욱.", next: "path_club_flower" },
            { text: "아직은 잘 모르겠어. 학교생활에 좀 적응하고 나서 결정할게.", next: "path_normal_2" },
            { text: "동아리보다는... 서연이 너에 대해 더 알고 싶어. (직구!)", next: "path_direct_2" }
        ]
    },
    "path_flirt_2": {
        name: "서연",
        text: "(서연이의 얼굴이 다시 한번 붉어진다. 당황해서 시선을 피하면서도 입가에는 작은 미소가 번진다.)\n\n\"매, 매일이라니... 업무가 얼마나 많은데! 하지만 네가 들어온다면... 나도 조금은 즐거울지도 모르겠네. 기대하고 있을게?\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "classroom_1"
    },
    "path_club_flower": {
        name: "서연",
        text: "(그녀가 장난스럽게 내 어깨를 살짝 친다. 거리감이 한층 가까워진 기분이다.)\n\n\"치... 너 정말 선수 아니니? 원예부는 부원이 적어서 걱정이었는데, 너 같은 사람이 들어오면 시끌벅적해지겠어. 꼭 와야 해?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_1"
    },
    "path_normal_2": {
        name: "서연",
        text: "(그녀는 고개를 끄덕이며 다시 앞장서 걷기 시작한다. 조금은 아쉬운 기분이 드는 건 왜일까.)\n\n\"응, 서두를 필요는 없지. 전학 첫날이니까 학교 분위기부터 익히는 게 중요해. 도움이 필요하면 언제든 학생회실로 찾아와.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_1"
    },
    "path_direct_2": {
        name: "서연",
        text: "(그녀가 멍하니 나를 바라보다가, 이내 풋 하고 맑은 웃음을 터뜨린다. 그 웃음소리가 마치 은방울 소리처럼 복도에 울려 퍼진다.)\n\n\"후훗, 너 정말 솔직하구나? 나에 대해서라... 글쎄, 그건 네가 앞으로 어떻게 하느냐에 따라 알려줄 수도 있고, 아닐 수도 있지. 기대해볼게!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_1"
    },
    "classroom_1": {
        name: "서연",
        text: "(교실 문 앞에 도착했다. 안쪽에서 아이들의 웅성거리는 소리와 웃음소리가 들려온다. 서연이가 내 어깨를 가볍게 두드리며 응원해준다.)\n\n\"자, 여기가 네가 앞으로 지낼 2학년 3반이야. 긴장하지 마. 내가 옆에 있으니까, 넌 그냥 평소대로 하면 돼. 알았지?\"",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_2"
    },
    "classroom_2": {
        name: "선생님",
        text: "(교탁 앞에 서자 수십 개의 시선이 일제히 나에게 꽂힌다. 호기심 어린 눈빛, 경계하는 눈빛... 서연이는 내 옆에서 든든하게 미소 지으며 나를 지켜봐 주고 있다.)\n\n\"자, 다들 주목! 오늘부터 우리와 함께하게 된 전학생이다. 다들 사이좋게 지내도록. 자, 자기소개 한마디 할까?\"",
        character: null,
        choices: [
            { text: "안녕! 운동하는 걸 좋아하고 활발한 성격이야. 같이 운동할 사람 언제든 환영해!", next: "class_after_active" },
            { text: "만나서 반가워. 조용히 책 읽는 걸 좋아하는 편이야. 잘 부탁해.", next: "class_after_quiet" },
            { text: "빨리 친해지고 싶어! 오늘 방과 후에 다 같이 떡볶이 먹으러 갈 사람?", next: "class_after_party" },
            { text: "공부하러 왔어. 방해받는 건 딱 질색이니까 적당히 지내자.", next: "class_after_study" }
        ]
    },
    "class_after_active": {
        name: "아이들",
        text: "(교실 여기저기서 환호성이 터져 나온다. 특히 뒷자리에 앉은 남학생들이 눈을 빛낸다.)\n\n\"오~ 운동 좀 하나 본데? 점심시간에 축구 한 판 고? 전학생 실력 좀 보자구!\"",
        next: "lunch_time"
    },
    "class_after_quiet": {
        name: "아이들",
        text: "(아이들이 고개를 끄덕이며 차분하게 나를 받아들인다. 몇몇 여학생들이 소곤거리며 나를 쳐다본다.)\n\n\"와, 왠지 분위기 있다... 나중에 도서관에서 마주치면 인사해도 될까?\"",
        next: "lunch_time"
    },
    "class_after_party": {
        name: "아이들",
        text: "(교실이 순식간에 시장통처럼 시끌벅적해진다. 벌써부터 내 주변으로 아이들이 몰려든다.)\n\n\"와! 전학생 성격 진짜 대박! 좋아, 오늘 떡볶이는 내가 쏜다! 노래방까지 풀코스로 가자!\"",
        next: "lunch_time"
    },
    "class_after_study": {
        name: "아이들",
        text: "(교실에 차가운 정적이 흐른다. 아이들이 조금 당황한 듯 서로 눈치를 보며 수군거린다.)\n\n\"와... 장난 아니네. 완전 공부 벌레인가 봐? 건드리면 큰일 나겠는데... (왠지 모르게 벽이 생긴 기분이다.)\"",
        next: "lunch_time"
    },
    "lunch_time": {
        name: "나",
        text: "(정신없이 오전 수업이 지나가고, 드디어 기다리던 점심시간 종이 울렸다. 아이들이 우르르 급식실로 향하는 가운데, 나는 어떻게 할까?)",
        background: "assets/images/background/load_school.png",
        choices: [
            { text: "서연이에게 다가가 같이 점심 먹자고 제안한다.", next: "lunch_seoyeon" },
            { text: "혼자 학교를 둘러보며 조용한 곳에서 먹을 곳을 찾는다.", next: "lunch_alone" },
            { text: "매점으로 달려가 전설의 '초코 소라빵'을 사 먹는다.", next: "lunch_store" },
            { text: "교실에 남아서 부족한 잠을 보충한다. (어제 너무 설쳤어...)", next: "lunch_sleep" }
        ]
    },
    "lunch_seoyeon": {
        name: "서연",
        text: "(서연이에게 다가가자 그녀가 기다렸다는 듯 가방에서 예쁜 체크무늬 도시락을 꺼낸다.)\n\n\"아, 전학생 군! 마침 나도 혼자 먹기 심심해서 널 찾으려던 참이었어. 우리 옥상에 비밀 장소가 있는데, 거기서 같이 먹을래?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_1"
    },
    "rooftop_1": {
        name: "서연",
        text: "(시원한 바람이 기분 좋게 불어오는 학교 옥상. 서연이가 정성스럽게 싸온 3단 도시락을 펼친다. 알록달록한 반찬들이 정말 먹음직스럽다.)\n\n\"자, 이건 내가 오늘 아침에 일찍 일어나서 만든 거야. 네 입맛에 맞을지 모르겠네... 특히 이 문어 모양 소시지는 내 회심의 역작이야! 한 번 먹어볼래?\"",
        background: "assets/images/background/top_school.png",
        choices: [
            { text: "와, 정말 맛있어 보여! 서연이는 요리도 잘하는구나.", next: "rooftop_talk_food" },
            { text: "아... 아 해줘. (용기를 내어 본다!)", next: "rooftop_talk_ah" },
            { text: "이렇게 정성 가득한 도시락은 처음이야. 정말 고마워.", next: "rooftop_talk_thanks" }
        ]
    },
    "rooftop_talk_food": {
        name: "서연",
        text: "(그녀가 기쁜 듯 뺨을 붉히며 대답한다.)\n\n\"정말? 다행이다! 사실 전학생 군이 좋아할지 걱정돼서 어제 메뉴 고민하느라 잠도 설쳤거든. 많이 먹어, 아직 많이 남았으니까!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_2"
    },
    "rooftop_talk_ah": {
        name: "서연",
        text: "(서연이의 얼굴이 폭발할 듯이 빨개진다. 젓가락을 든 손이 파르르 떨린다.)\n\n\"뭐, 뭐뭐뭐라고?! 너 정말... 그런 소리를 아무렇지도 않게... 하아, 정말 못 말린다니까. 자, 이번 한 번뿐이야! 아... 해...\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_2"
    },
    "rooftop_talk_thanks": {
        name: "서연",
        text: "(그녀가 부드러운 미소를 지으며 내 눈을 지긋이 바라본다.)\n\n\"고맙긴... 나야말로 같이 먹어줘서 고마워. 혼자 먹는 것보다 훨씬 맛있는 것 같아. 앞으로도 종종 이렇게 같이 먹어줄래?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_2"
    },
    "rooftop_2": {
        name: "서연",
        text: "(식사를 마치고 우리는 나란히 앉아 먼 하늘을 바라본다. 평화로운 오후의 한때... 서연이가 조심스럽게 입을 연다.)\n\n\"저기, 전학생 군... 사실 나, 처음 널 봤을 때부터 왠지 모르게... 예전부터 알고 지냈던 사이 같은 기분이 들었어. 너는 어때?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "나도 그래. 왠지 운명 같은 느낌이랄까?", next: "rooftop_destiny" },
            { text: "아마 서연이가 너무 친절하게 대해줘서 그런 거 아닐까?", next: "rooftop_kind" },
            { text: "글쎄, 난 아직 잘 모르겠어. 하지만 너랑 있으면 편안해.", next: "rooftop_comfortable" }
        ]
    },
    "rooftop_destiny": {
        name: "서연",
        text: "(그녀가 수줍게 웃으며 내 손 위에 자신의 손을 살며시 겹친다. 따뜻한 온기가 전해져 온다.)\n\n\"운명... 후훗, 그 말 참 듣기 좋다. 우리, 앞으로 더 즐거운 추억 많이 만들자. 약속이야?\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "end_demo"
    },
    "rooftop_kind": {
        name: "서연",
        text: "(그녀가 살짝 토라진 듯 입술을 내민다. 그 모습마저 사랑스럽다.)\n\n\"치... 너무 정석적인 대답이잖아. 하지만 뭐, 틀린 말은 아니니까 봐줄게. 앞으로는 좀 더 솔직한 대답 기대할게?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "end_demo"
    },
    "rooftop_comfortable": {
        name: "서연",
        text: "(그녀가 만족스러운 듯 고개를 끄덕인다.)\n\n\"편안하다니 다행이야. 나도 너랑 있으면 학생회장이라는 짐을 잠시 내려놓을 수 있는 것 같아. 고마워, 전학생 군.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "end_demo"
    },
    "lunch_alone": {
        name: "나",
        text: "(혼자 조용한 복도를 걷다 보니, 아침에는 보지 못했던 구석진 곳에 위치한 도서관 별관에 도착했다. 그곳에서 창가에 기대어 책을 읽고 있는 신비로운 분위기의 소녀와 마주쳤다.)",
        background: "assets/images/background/load_school.png",
        next: "alone_2"
    },
    "alone_2": {
        name: "???",
        text: "(그녀는 책에서 눈을 떼지 않은 채 나지막한 목소리로 말을 건넨다. 차가운 듯하면서도 왠지 모를 슬픔이 서린 목소리다.)\n\n\"...길을 잃었어? 아니면, 보이지 않는 무언가에 이끌려 여기까지 온 거야? 전학생.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_intro"
    },
    "yuna_intro": {
        name: "???",
        text: "(그녀가 천천히 고개를 들어 나를 바라본다. 깊고 신비로운 보랏빛 눈동자가 마치 내 영혼까지 꿰뚫어 보는 것 같다.)\n\n\"난 '유나'라고 해. 이 학교의 그림자 속에 숨겨진 진실을 기록하는 사람이지. 너한테서는... 아주 흥미로운 향기가 나네.\"",
        choices: [
            { text: "학교의 비밀? 그게 무슨 소리야?", next: "yuna_secret" },
            { text: "향기라니... 나한테서 무슨 냄새라도 나?", next: "yuna_scent" },
            { text: "너, 왠지 위험해 보여. 하지만 눈을 뗄 수가 없어.", next: "yuna_danger" }
        ]
    },
    "yuna_secret": {
        name: "유나",
        text: "(그녀가 입가에 묘한 미소를 띠며 책을 덮는다.)\n\n\"후훗, 궁금해? 하지만 진실은 때로 감당하기 힘든 법이지. 준비가 되면 다시 와. 그때는... 네가 알고 싶지 않은 것까지 알려줄지도 모르니까.\"",
        next: "end_demo"
    },
    "yuna_scent": {
        name: "유나",
        text: "(그녀가 한 걸음 다가와 내 목덜미 근처에서 숨을 들이킨다. 차가운 숨결에 소름이 돋는다.)\n\n\"운명의 수레바퀴가 돌아가는 소리... 그리고 피할 수 없는 파멸의 향기. 넌 참으로 가혹한 운명을 타고났구나. 하지만 걱정 마, 내가 지켜봐 줄 테니까.\"",
        next: "end_demo"
    },
    "yuna_danger": {
        name: "유나",
        text: "(그녀가 차가운 손가락으로 내 뺨을 살짝 스친다.)\n\n\"위험한 것에 끌리는 건 인간의 본능이지. 너의 그 눈빛... 마음에 들어. 우리, 앞으로 자주 보게 될 것 같네. 후훗...\"",
        next: "end_demo"
    },
    "lunch_store": {
        name: "나",
        text: "(매점으로 전력 질주하여 마지막 남은 '초코 소라빵'을 쟁취했다! 승리자의 기분으로 빵을 한 입 베어 물자, 진한 초콜릿의 달콤함이 뇌를 자극한다.)\n\n\"크으~ 역시 이 맛이야! 전학 첫날의 피로가 싹 가시는 기분인걸? 혼자 먹는 빵도 이렇게 맛있을 수 있다니!\"",
        next: "end_demo"
    },
    "lunch_sleep": {
        name: "나",
        text: "(책상에 엎드려 잠을 청한다. 멀리서 들려오는 아이들의 웃음소리가 자장가처럼 들린다. 의식이 서서히 흐릿해지며 깊은 어둠 속으로 빠져든다.)\n\n\"(꿈속에서 누군가 내 이름을 부르는 소리가 들렸다. 아주 그립고도 슬픈 목소리... 하지만 눈을 떴을 때 내 곁에는 아무도 없었다.)\"",
        next: "end_demo"
    },
    "end_demo": {
        name: "시스템",
        text: "(화면이 서서히 페이드 아웃되며 감미로운 배경음악이 흐른다.)\n\n데모 버전의 시나리오가 여기까지 준비되었습니다. 서연이와의 달콤한 로맨스, 혹은 유나와의 미스터리한 만남... 당신의 선택은 어떤 결과를 가져올까요? 정식 버전을 기대해주세요!",
        next: null
    }
};
