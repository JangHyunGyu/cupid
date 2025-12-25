const SCENARIO = {
    "start": {
        name: "나",
        text: "(따스한 봄 햇살이 내리쬐는 교문 앞. 전학 첫날의 설렘과 긴장감이 가슴 속에서 소용돌이친다.)",
        background: "assets/images/background/school.png",
        character: null,
        next: "start_2"
    },
    "start_2": {
        name: "나",
        text: "(낯선 교복의 까슬까슬한 감촉, 낯선 풍경의 이질감... 모든 것이 생경하기만 하다.)",
        next: "start_3"
    },
    "start_3": {
        name: "나",
        text: "(심장 소리가 귓가에 울릴 정도로 크게 들려온다. 나는 심호흡을 하며 교문을 향해 한 걸음을 내디뎠다.)",
        next: "start_4"
    },
    "start_4": {
        name: "???",
        text: "\"안녕? 처음 보는 얼굴이네. 이 시간에 교문 앞에 멍하니 서 있는 걸 보니... 혹시 오늘 온다는 그 전학생이니?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "intro_1"
    },
    "intro_1": {
        name: "나",
        text: "(그녀가 생긋 웃으며 한 걸음 다가온다. 바람에 살짝 흔들리는 그녀의 긴 머리카락에서 은은한 라벤더 향기가 코끝을 간지럽힌다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "intro_2"
    },
    "intro_2": {
        name: "나",
        text: "(맑은 눈동자가 나를 빤히 바라보자 심장 박동이 걷잡을 수 없이 빨라진다. 마치 시간이 멈춘 것만 같은 착각이 든다.)",
        next: "intro_3"
    },
    "intro_3": {
        name: "서연",
        text: "\"나는 학생회장 '서연'이라고 해. 선생님께 부탁받아서 널 마중 나왔어. 만나서 반가워!\"",
        choices: [
            { text: "응, 반가워. 학교가 너무 커서 길을 좀 헤매고 있었어.", next: "path_friendly_1" },
            { text: "학생회장이 직접 마중까지? 내가 좀 특별한 대우를 받는 건가?", next: "path_tease_1" },
            { text: "너... 정말 예쁘다. (나도 모르게 본심이 튀어나와 버렸다!)", next: "path_blush_1" },
            { text: "(너무 긴장해서 목소리가 나오지 않는다. 그저 멍하니 그녀를 바라볼 뿐...)", next: "path_silent_1" }
        ]
    },
    "path_friendly_1": {
        name: "서연",
        text: "(나의 대답에 그녀가 안심한 듯 꽃이 피어나듯 밝게 웃는다. 그 미소에 얼어붙었던 긴장이 조금씩 녹아내리는 기분이다. 그녀의 미소는 마치 봄날의 햇살처럼 따스하다. 그녀는 내 가방 끈을 살짝 잡아당기며 앞장선다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "path_friendly_1_2"
    },
    "path_friendly_1_2": {
        name: "서연",
        text: "\"후훗, 역시 그랬구나. 우리 학교가 처음 오면 좀 복잡하긴 하지? 내가 교무실까지 완벽하게 가이드해줄게. 자, 나만 믿고 따라와!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1"
    },
    "path_tease_1": {
        name: "서연",
        text: "(그녀가 살짝 눈을 가늘게 뜨며 장난스럽게 대답한다. 하지만 입가에는 여전히 기분 좋은 미소가 걸려 있다. 그녀의 눈동자 속에서 장난기 어린 빛이 반짝인다. 그녀는 검지 손가락을 입술에 갖다 대며 윙크를 한다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "path_tease_1_2"
    },
    "path_tease_1_2": {
        name: "서연",
        text: "\"어머, 자신감이 넘치는 전학생이네? 특별 대우라기보다는... 학생회장으로서의 책임감이랄까? 하지만 네가 그렇게 생각한다면, 오늘 하루는 특별히 신경 써줄게!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1"
    },
    "path_blush_1": {
        name: "서연",
        text: "(서연이의 얼굴이 순식간에 잘 익은 사과처럼 빨개진다. 당황해서 시선을 피하며 머리카락을 만지작거리는 모습이 무척이나 신선하고 귀엽다. 그녀의 손끝이 미세하게 떨리는 것이 보인다. 그녀는 헛기침을 하며 서둘러 뒤를 돈다.)",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "path_blush_1_2"
    },
    "path_blush_1_2": {
        name: "서연",
        text: "\"에...? 그, 갑자기 무슨 소리를 하는 거야! 전학생은 다 너처럼 이렇게... 능글맞니? 어서 따라오기나 해! 늦으면 선생님께 혼난다구!\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "hallway_1"
    },
    "path_silent_1": {
        name: "서연",
        text: "(그녀가 내 눈앞에서 손을 살랑살랑 흔든다. 걱정스러운 눈빛이 나를 향하자 왠지 모를 보호 본능이 자극된다. 그녀의 맑은 눈동자에 비친 내 모습이 무척이나 바보 같아 보인다. 그녀는 내 이마에 손을 얹어 열을 확인한다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "path_silent_1_2"
    },
    "path_silent_1_2": {
        name: "서연",
        text: "\"저기... 괜찮니? 어디 아픈 건 아니지? 얼굴이 좀 빨간 것 같은데... 일단 보건실보다는 교무실부터 가는 게 좋겠어. 내가 부축해줄까?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1"
    },
    "hallway_1": {
        name: "서연",
        text: "(서연이의 뒤를 따라 복도를 걷는다. 복도 창문 너머로 학생들의 활기찬 목소리와 운동장에서 들려오는 호각 소리가 어우러진다.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1_2"
    },
    "hallway_1_2": {
        name: "서연",
        text: "(그녀의 뒷모습을 보고 있자니 왠지 모를 설렘이 가시지 않는다. 그녀의 걸음걸이는 가볍고 우아하다. 복도에는 은은한 왁스 냄새와 아이들의 열기가 섞여 있다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1_3"
    },
    "hallway_1_3": {
        name: "서연",
        text: "\"복도를 지나면서 학교 시설들을 간단히 설명해줄게. 저기 보이는 곳이 우리 학교의 자랑인 도서관이야. 그리고 저쪽은...\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "학교가 정말 활기차네. 서연이 너도 동아리 활동 하니?", next: "hallway_talk_club" },
            { text: "시설도 좋지만, 안내해주는 사람이 좋아서 더 멋져 보여.", next: "hallway_talk_flatter" },
            { text: "(조용히 그녀의 설명을 경청하며 걷는다.)", next: "hallway_talk_listen" }
        ]
    },
    "hallway_talk_club": {
        name: "서연",
        text: "(그녀가 반가운 듯 고개를 돌려 나를 바라본다. 그녀의 눈이 반짝이며 열정을 내비친다. 그녀는 자신의 가슴에 손을 얹으며 자랑스럽게 말한다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_talk_club_2"
    },
    "hallway_talk_club_2": {
        name: "서연",
        text: "\"응! 나는 학생회 활동도 하지만, 사실 원예부 소속이기도 해. 꽃을 가꾸는 걸 좋아하거든. 흙을 만지고 있으면 마음이 편안해지거든. 나중에 시간 되면 우리 온실에도 놀러 와!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2"
    },
    "hallway_talk_flatter": {
        name: "서연",
        text: "(그녀가 쑥스러운 듯 헛기침을 하며 대답한다. 하지만 기분이 나빠 보이지는 않는다. 그녀의 뺨에 옅은 홍조가 스친다. 그녀는 부끄러운 듯 가방 끈을 꽉 쥔다.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_talk_flatter_2"
    },
    "hallway_talk_flatter_2": {
        name: "서연",
        text: "\"정말... 너는 말을 참 예쁘게 하는구나. 학생회장으로서 그런 칭찬을 들으니 보람찬걸? 하지만 너무 띄워주지는 마, 부끄러우니까.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_2"
    },
    "hallway_talk_listen": {
        name: "서연",
        text: "(그녀는 나의 진지한 태도가 마음에 든 듯 더욱 열정적으로 설명을 이어간다. 그녀의 목소리는 맑고 고와서 듣는 것만으로도 기분이 좋아진다. 그녀는 손가락으로 이곳저곳을 가리키며 신나게 말한다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_talk_listen_2"
    },
    "hallway_talk_listen_2": {
        name: "서연",
        text: "\"내 설명을 이렇게 잘 들어주니 정말 고마워. 전학생 군은 참 성실한 사람인 것 같네! 이런 태도라면 학교생활도 금방 적응할 거야.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2"
    },
    "hallway_2": {
        name: "서연",
        text: "(그녀가 갑자기 멈춰 서서 나를 돌아본다. 진지하면서도 기대에 찬 눈빛에 나도 모르게 침을 꼴깍 삼켰다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2_2"
    },
    "hallway_2_2": {
        name: "서연",
        text: "(복도의 소음이 멀어지고 오직 우리 두 사람만 남은 것 같은 정적이 흐른다. 그녀의 눈동자가 내 눈을 뚫어지게 쳐다본다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2_3"
    },
    "hallway_2_3": {
        name: "서연",
        text: "\"너는 어떤 동아리에 관심 있어? 우리 학생회도 항상 새로운 인재를 환영하고 있거든. 만약 네가 들어온다면... 내가 직접 업무를 가르쳐줄 수도 있어.\"",
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
        text: "(서연이의 얼굴이 다시 한번 붉어진다. 당황해서 시선을 피하면서도 입가에는 작은 미소가 번진다. 그녀의 손가락이 교복 치맛자락을 만지작거린다. 그녀는 수줍은 듯 발끝으로 바닥을 톡톡 친다.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "path_flirt_2_2"
    },
    "path_flirt_2_2": {
        name: "서연",
        text: "\"매, 매일이라니... 업무가 얼마나 많은데! 하지만 네가 들어온다면... 나도 조금은 즐거울지도 모르겠네. 기대하고 있을게?\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "classroom_1_1"
    },
    "path_club_flower": {
        name: "서연",
        text: "(그녀가 장난스럽게 내 어깨를 살짝 친다. 거리감이 한층 가까워진 기분이다. 그녀의 손길에서 기분 좋은 온기가 느껴진다. 그녀는 장난기 가득한 표정으로 나를 올려다본다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "path_club_flower_2"
    },
    "path_club_flower_2": {
        name: "서연",
        text: "\"치... 너 정말 선수 아니니? 원예부는 부원이 적어서 걱정이었는데, 너 같은 사람이 들어오면 시끌벅적해지겠어. 꼭 와야 해? 약속한 거다?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_1_1"
    },
    "path_normal_2": {
        name: "서연",
        text: "(그녀는 고개를 끄덕이며 다시 앞장서 걷기 시작한다. 조금은 아쉬운 기분이 드는 건)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_1_1"
    },
    "path_direct_2": {
        name: "서연",
        text: "(그녀가 멍하니 나를 바라보다가, 이내 풋 하고 맑은 웃음을 터뜨린다. 그 웃음소리가 마치 은방울 소리처럼 복도에 울려 퍼진다. 그녀의 눈가에 맺힌 작은 눈물이 햇빛에 반짝인다. 그녀는 배를 잡고 한참을 웃는다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "path_direct_2_2"
    },
    "path_direct_2_2": {
        name: "서연",
        text: "\"후훗, 너 정말 솔직하구나? 나에 대해서라... 글쎄, 그건 네가 앞으로 어떻게 하느냐에 따라 알려줄 수도 있고, 아닐 수도 있지. 기대해볼게!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "classroom_1_1"
    },
    "classroom_1_1": {
        name: "서연",
        text: "(교실 문 앞에 도착했다. 안쪽에서 아이들의 웅성거리는 소리와 웃음소리가 들려온다. 서연이가 내 어깨를 가볍게 두드리며 응원해준다.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_1_2"
    },
    "classroom_1_2": {
        name: "서연",
        text: "(그녀의 손길이 닿은 곳이 화끈거린다. 그녀는 내 눈을 보며 작게 파이팅을 외친다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_1_3"
    },
    "classroom_1_3": {
        name: "서연",
        text: "\"자, 여기가 네가 앞으로 지낼 2학년 3반이야. 긴장하지 마. 내가 옆에 있으니까, 넌 그냥 평소대로 하면 돼. 알았지?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_2"
    },
    "classroom_2": {
        name: "선생님",
        text: "(교탁 앞에 서자 수십 개의 시선이 일제히 나에게 꽂힌다. 호기심 어린 눈빛, 경계하는 눈빛... 서연이는 내 옆에서 든든하게 미소 지으며 나를 지켜봐 주고 있다.)",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/teacher.png",
        next: "classroom_2_2"
    },
    "classroom_2_2": {
        name: "선생님",
        text: "(교실 안의 공기가 무겁게 느껴진다. 선생님이 교탁을 탁탁 치며 주의를 집중시킨다.)",
        character: "assets/images/characters/teacher.png",
        next: "classroom_2_3"
    },
    "classroom_2_3": {
        name: "선생님",
        text: "\"자, 다들 주목! 오늘부터 우리와 함께하게 된 전학생이다. 다들 사이좋게 지내도록. 자, 자기소개 한마디 할까?\"",
        character: "assets/images/characters/teacher.png",
        choices: [
            { text: "안녕! 운동하는 걸 좋아하고 활발한 성격이야. 같이 운동할 사람 언제든 환영해!", next: "class_after_active", setFlag: "personality_active" },
            { text: "만나서 반가워. 조용히 책 읽는 걸 좋아하는 편이야. 잘 부탁해.", next: "class_after_quiet", setFlag: "personality_quiet" },
            { text: "빨리 친해지고 싶어! 오늘 방과 후에 다 같이 떡볶이 먹으러 갈 사람?", next: "class_after_party", setFlag: "personality_party" },
            { text: "공부하러 왔어. 방해받는 건 딱 질색이니까 적당히 지내자.", next: "class_after_study", setFlag: "personality_study" }
        ]
    },
    "class_after_active": {
        name: "아이들",
        text: "(교실 여기저기서 환호성이 터져 나온다. 특히 뒷자리에 앉은 남학생들이 눈을 빛낸다. 서연이도 흐뭇한 미소를 지으며 박수를 쳐준다.)",
        character: null,
        next: "class_after_active_2"
    },
    "class_after_active_2": {
        name: "아이들",
        text: "(아이들은 벌써부터 나를 팀에 영입하려 수군거린다.)",
        character: null,
        next: "class_after_active_3"
    },
    "class_after_active_3": {
        name: "아이들",
        text: "\"오~ 운동 좀 하나 본데? 점심시간에 배구 한 판 고? 전학생 실력 좀 보자구!\"",
        character: null,
        next: "lunch_time"
    },
    "class_after_quiet": {
        name: "아이들",
        text: "(아이들이 고개를 끄덕이며 차분하게 나를 받아들인다. 몇몇 여학생들이 소곤거리며 나를 쳐다본다.)",
        character: null,
        next: "class_after_quiet_2"
    },
    "class_after_quiet_2": {
        name: "아이들",
        text: "(서연이는 내 진지한 모습이 마음에 든 듯 고개를 끄덕인다. 교실 분위기가 한결 차분해진다.)",
        character: null,
        next: "class_after_quiet_3"
    },
    "class_after_quiet_3": {
        name: "아이들",
        text: "\"와, 왠지 분위기 있다... 나중에 도서관에서 마주치면 인사해도 될까?\"",
        character: null,
        next: "lunch_time"
    },
    "class_after_party": {
        name: "아이들",
        text: "(교실이 순식간에 시장통처럼 시끌벅적해진다. 벌써부터 내 주변으로 아이들이 몰려든다.)",
        character: null,
        next: "class_after_party_2"
    },
    "class_after_party_2": {
        name: "아이들",
        text: "(서연이는 조금 당황한 듯하지만 이내 웃음을 터뜨린다. 아이들은 벌써 메뉴를 정하느라 바쁘다.)",
        character: null,
        next: "class_after_party_3"
    },
    "class_after_party_3": {
        name: "아이들",
        text: "\"와! 전학생 성격 진짜 대박! 좋아, 오늘 떡볶이는 내가 쏜다! 노래방까지 풀코스로 가자!\"",
        character: null,
        next: "lunch_time"
    },
    "class_after_study": {
        name: "아이들",
        text: "(교실에 차가운 정적이 흐른다. 아이들이 조금 당황한 듯 서로 눈치를 보며 수군거린다.)",
        character: null,
        next: "class_after_study_2"
    },
    "class_after_study_2": {
        name: "아이들",
        text: "(서연이의 표정도 조금 굳어진다. 왠지 모르게 벽이 생긴 기분이다. 아이들은 내 눈치를 보며 조용해진다.)",
        character: null,
        next: "class_after_study_3"
    },
    "class_after_study_3": {
        name: "아이들",
        text: "\"와... 장난 아니네. 완전 공부 벌레인가 봐? 건드리면 큰일 나겠는데...\"",
        character: null,
        next: "lunch_time"
    },
    "lunch_time": {
        name: "나",
        text: "(정신없이 오전 수업이 지나가고, 드디어 기다리던 점심시간 종이 울렸다. 아이들이 우르르 급식실로 향한다.)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "lunch_time_2"
    },
    "lunch_time_2": {
        name: "나",
        text: "(나는 어떻게 할까? 창밖으로 보이는 운동장에는 벌써 배구공을 주고받는 아이들이 보인다. 배꼽시계가 요란하게 울린다.)",
        choices: [
            { text: "서연이에게 다가가 같이 점심 먹자고 제안한다.", next: "lunch_seoyeon", setFlag: "metSeoyeon" },
            { text: "혼자 학교를 둘러보며 조용한 곳에서 먹을 곳을 찾는다.", next: "lunch_alone", setFlag: "metYuna" },
            { text: "운동장으로 나가 활기찬 아이들과 어울린다.", next: "lunch_dain", setFlag: "metDain" },
            { text: "매점으로 달려가 전설의 '초코 소라빵'을 사 먹는다.", next: "lunch_store" },
            { text: "교실에 남아서 부족한 잠을 보충한다. (어제 너무 설쳤어...)", next: "lunch_sleep" }
        ]
    },
    "lunch_seoyeon": {
        name: "서연",
        text: "(서연이에게 다가가자 그녀가 기다렸다는 듯 가방에서 예쁜 체크무늬 도시락을 꺼낸다. 그녀의 눈이 반짝이며 나를 반긴다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "lunch_seoyeon_2"
    },
    "lunch_seoyeon_2": {
        name: "서연",
        text: "\"마침 널 찾으려던 참이었어. 우리 옥상에 비밀 장소가 있는데, 거기서 같이 먹을래?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_1"
    },
    "rooftop_1": {
        name: "서연",
        text: "(시원한 바람이 기분 좋게 불어오는 학교 옥상. 서연이가 정성스럽게 싸온 3단 도시락을 펼친다. 알록달록한 반찬들이 정말 먹음직스럽다.)",
        background: "assets/images/background/top_school.png",
        next: "rooftop_1_2"
    },
    "rooftop_1_2": {
        name: "서연",
        text: "(고소한 냄새가 코끝을 자극한다. 그녀는 젓가락을 건네며 수줍게 웃는다.)",
        background: "assets/images/background/top_school.png",
        next: "rooftop_1_2_2"
    },
    "rooftop_1_2_2": {
        name: "서연",
        text: "\"자, 이건 내가 오늘 아침에 일찍 일어나서 만든 거야. 네 입맛에 맞을지 모르겠네...\"",
        background: "assets/images/background/top_school.png",
        next: "rooftop_1_3"
    },
    "rooftop_1_3": {
        name: "서연",
        text: "\"특히 이 문어 모양 소시지는 내 회심의 역작이야! 한 번 먹어볼래?\"",
        background: "assets/images/background/top_school.png",
        choices: [
            { text: "와, 정말 맛있어 보여! 서연이는 요리도 잘하는구나.", next: "rooftop_talk_food" },
            { text: "아... 아 해줘. (용기를 내어 본다!)", next: "rooftop_talk_ah" },
            { text: "이렇게 정성 가득한 도시락은 처음이야. 정말 고마워.", next: "rooftop_talk_thanks" }
        ]
    },
    "rooftop_talk_food": {
        name: "서연",
        text: "(그녀가 기쁜 듯 뺨을 붉히며 대답한다. 그녀의 눈동자가 행복으로 가득 차 있다. 그녀는 자신이 만든 음식을 맛있게 먹는 내 모습을 보며 뿌듯해한다.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_talk_food_2"
    },
    "rooftop_talk_food_2": {
        name: "서연",
        text: "\"정말? 다행이다! 사실 전학생 군이 좋아할지 걱정돼서 어제 메뉴 고민하느라 잠도 설쳤거든. 많이 먹어, 아직 많이 남았으니까!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_2"
    },
    "rooftop_talk_ah": {
        name: "서연",
        text: "(서연이의 얼굴이 폭발할 듯이 빨개진다. 젓가락을 든 손이 파르르 떨린다. 그녀의 숨소리가 조금 거칠어진다. 그녀는 주변 눈치를 살피더니 조심스럽게 소시지를 집어 내 입으로 가져온다.)",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "rooftop_talk_ah_2"
    },
    "rooftop_talk_ah_2": {
        name: "서연",
        text: "\"뭐, 뭐뭐뭐라고?! 너 정말... 그런 소리를 아무렇지도 않게... 하아, 정말 못 말린다니까. 자, 이번 한 번뿐이야! 아... 해...\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "rooftop_2"
    },
    "rooftop_talk_thanks": {
        name: "서연",
        text: "(그녀가 부드러운 미소를 지으며 내 눈을 지긋이 바라본다. 그녀의 눈빛에서 진심 어린 애정이 느껴진다. 그녀는 내 입가에 묻은 소스를 손가락으로 살짝 닦아준다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_talk_thanks_2"
    },
    "rooftop_talk_thanks_2": {
        name: "서연",
        text: "\"고맙긴... 나야말로 같이 먹어줘서 고마워. 혼자 먹는 것보다 훨씬 맛있는 것 같아. 앞으로도 종종 이렇게 같이 먹어줄래?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_2"
    },
    "rooftop_2": {
        name: "서연",
        text: "(식사를 마치고 우리는 나란히 앉어 먼 하늘을 바라본다. 평화로운 오후의 한때... 서연이가 조심스럽게 입을 연다. 그녀의 목소리가 평소보다 조금 낮고 진지하다. 그녀는 내 어깨에 살짝 머리를 기댄다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_2_2"
    },
    "rooftop_2_2": {
        name: "서연",
        text: "\"저기, 전학생 군... 사실 나, 처음 널 봤을 때부터 왠지 모르게... 예전부터 알고 지냈던 사이 같은 기분이 들었어. 너는 어때?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "나도 그래. 왠지 운명 같은 느낌이랄까?", next: "rooftop_destiny" },
            { text: "아마 서연이가 너무 친절하게 대해줘서 그런 거 아닐까?", next: "rooftop_kind" },
            { text: "글쎄, 난 아직 잘 모르겠어. 하지만 너랑 있으면 편안해.", next: "rooftop_comfortable" }
        ]
    },
    "rooftop_destiny": {
        name: "서연",
        text: "(그녀가 수줍게 웃으며 내 손 위에 자신의 손을 살며시 겹친다. 따뜻한 온기가 전해져 온다. 그녀의 손은 작고 부드럽다. 그녀는 내 손가락을 만지작거리며 약속을 청한다.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_destiny_2"
    },
    "rooftop_destiny_2": {
        name: "서연",
        text: "\"운명... 후훗, 그 말 참 듣기 좋다. 우리, 앞으로 더 즐거운 추억 많이 만들자. 약속이야?\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "after_school_start"
    },
    "rooftop_kind": {
        name: "서연",
        text: "(그녀가 살짝 토라진 듯 입술을 내민다. 그 모습마저 사랑스럽다. 그녀의 눈동자가 살짝 흔들린다. 그녀는 내 팔을 살짝 꼬집으며 투정을 부린다.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "rooftop_kind_2"
    },
    "rooftop_kind_2": {
        name: "서연",
        text: "\"치... 너무 정석적인 대답이잖아. 하지만 뭐, 틀린 말은 아니니까 봐줄게. 앞으로는 좀 더 솔직한 대답 기대할게?\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "after_school_start"
    },
    "rooftop_comfortable": {
        name: "서연",
        text: "(그녀가 만족스러운 듯 고개를 끄덕인다. 그녀의 표정이 한결 편안해 보인다. 그녀는 깊은 한숨을 내쉬며 긴장을 푼다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_comfortable_2"
    },
    "rooftop_comfortable_2": {
        name: "서연",
        text: "\"편안하다니 다행이야. 나도 너랑 있으면 학생회장이라는 짐을 잠시 내려놓을 수 있는 것 같아. 고마워, 전학생 군.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_school_start"
    },
    "lunch_alone": {
        name: "나",
        text: "(혼자 조용한 복도를 걷다 보니, 아침에는 보지 못했던 구석진 곳에 위치한 도서관 별관에 도착했다. 낡은 나무 문 사이로 오래된 종이 냄새가 흘러나온다. 그곳에서 창가에 기대어 책을 읽고 있는 신비로운 분위기의 소녀와 마주쳤다. 그녀의 주변에는 먼지가 햇빛에 반짝이며 춤을 추고 있다.)",
        background: "assets/images/background/library_old.png",
        next: "alone_2"
    },
    "alone_2": {
        name: "???",
        text: "(그녀는 책에서 눈을 떼지 않은 채 나지막한 목소리로 말을 건넨다. 차가운 듯하면서도 왠지 모를 슬픔이 서린 목소리다. 그녀의 주변만 공기가 차갑게 가라앉은 것 같다. 그녀는 책장을 천천히 넘기며 나를 의식한다.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "alone_2_2"
    },
    "alone_2_2": {
        name: "???",
        text: "\"...길을 잃었어? 여긴 학생들이 잘 안 오는 곳인데. 용케 찾았네, 전학생.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_intro"
    },
    "yuna_intro": {
        name: "???",
        text: "(그녀가 천천히 고개를 들어 나를 바라본다. 깊고 신비로운 보랏빛 눈동자가 나를 조용히 관찰한다. 그녀의 눈동자 속에는 남들은 모르는 사연이 담겨 있는 듯하다. 그녀는 책을 덮고 나에게 다가온다.)",
        next: "yuna_intro_2"
    },
    "yuna_intro_2": {
        name: "???",
        text: "\"난 '유나'라고 해. 그냥... 조용히 지내는 걸 좋아하는 사람이야. 이 학교... 겉보기와는 많이 다르거든. 너한테서는... 왠지 낯익은 분위기가 느껴져.\"",
        choices: [
            { text: "학교가 다르다니? 그게 무슨 소리야?", next: "yuna_secret" },
            { text: "낯익다니... 나를 본 적 있어?", next: "yuna_scent" },
            { text: "너, 왠지 위험해 보여. 하지만 눈을 뗄 수가 없어.", next: "yuna_danger" }
        ]
    },
    "yuna_secret": {
        name: "유나",
        text: "(그녀가 입가에 묘한 미소를 띠며 책을 덮는다. 책이 덮이는 소리가 정적을 깨뜨린다. 그녀는 내 귓가에 입술을 가까이 대고 속삭인다.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_secret_2"
    },
    "yuna_secret_2": {
        name: "유나",
        text: "\"후훗, 궁금해? 하지만 비밀은 모르는 게 약일 수도 있어. 학교가 숨기고 싶어 하는 이야기들은... 알면 다칠 수도 있거든.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "yuna_scent": {
        name: "유나",
        text: "(그녀가 한 걸음 다가와 나를 빤히 바라본다. 그녀의 시선이 내 얼굴 구석구석을 훑는다. 그녀는 씁쓸한 표정으로 중얼거린다.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_scent_2"
    },
    "yuna_scent_2": {
        name: "유나",
        text: "\"아니, 처음 봐. 하지만 눈빛이 닮았어. 이 학교 아이들은 다들 경쟁에 지쳐서 눈이 죽어있는데... 넌 아직 살아있네. 부디 그 빛을 잃지 않았으면 좋겠어.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_school_start"
    },
    "yuna_danger": {
        name: "유나",
        text: "(그녀가 차가운 손가락으로 내 뺨을 살짝 스친다. 그녀의 손가락 끝이 닿은 곳이 서늘하다. 그녀는 내 눈을 빤히 바라보며 도발적인 미소를 짓는다.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_danger_2"
    },
    "yuna_danger_2": {
        name: "유나",
        text: "\"위험해 보인다니... 칭찬으로 들을게. 남들과 조금 다르다는 건, 그만큼 특별하다는 뜻일 수도 있으니까. 너도 평범한 건 싫어하나 봐?\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "lunch_store": {
        name: "나",
        text: "(매점으로 전력 질주하여 마지막 남은 '초코 소라빵'을 쟁취했다! 승리자의 기분으로 빵을 한 입 베어 물자, 진한 초콜릿의 달콤함이 뇌를 자극한다. 매점 아주머니의 호탕한 웃음소리가 들려온다. 나는 빵을 소중하게 품에 안고 교실로 돌아왔다.)",
        next: "lunch_store_2"
    },
    "lunch_store_2": {
        name: "나",
        text: "\"크으~ 역시 이 맛이야! 전학 첫날의 피로가 싹 가시는 기분인걸? 혼자 먹는 빵도 이렇게 맛있을 수 있다니!\"",
        next: "after_school_start"
    },
    "lunch_sleep": {
        name: "나",
        text: "(책상에 엎드려 잠을 청한다. 멀리서 들려오는 아이들의 웃음소리가 자장가처럼 들린다. 의식이 서서히 흐릿해지며 깊은 어둠 속으로 빠져든다. 창가로 들어오는 햇살이 등을 따뜻하게 데워준다. 나는 꿈속에서 누군가와 즐겁게 대화하는 환상을 보았다.)",
        next: "lunch_sleep_2"
    },
    "lunch_sleep_2": {
        name: "나",
        text: "(꿈속에서 누군가 내 이름을 부르는 소리가 들렸다. 아주 그립고도 슬픈 목소리... 하지만 눈을 떴을 때 내 곁에는 아무도 없었다.)",
        next: "after_school_start"
    },
    "lunch_dain": {
        name: "나",
        text: "(운동장으로 나가자 활기찬 기운이 가득하다. 그중에서도 유독 눈에 띄는 한 소녀가 있다. 짧은 머리에 건강미 넘치는 그녀는 아이들 사이에서 시원시원하게 스파이크를 때리고 있다.)",
        background: "assets/images/background/playground.png",
        next: "lunch_dain_2"
    },
    "lunch_dain_2": {
        name: "???",
        text: "(그녀가 나를 발견하고는 환하게 웃으며 손을 흔든다. 그녀의 미소는 태양처럼 눈부시다.)",
        background: "assets/images/background/playground.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "lunch_dain_3"
    },
    "lunch_dain_3": {
        name: "???",
        text: "\"어이, 전학생! 거기서 구경만 하지 말고 이리 와서 한 판 붙자! 너, 운동 좀 하게 생겼는데?\"",
        background: "assets/images/background/playground.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "lunch_dain_4"
    },
    "lunch_dain_4": {
        name: "다인",
        text: "\"난 배구부 '다인'이야. 우리 학교에서 나보다 점프력 좋은 사람은 없으니까 긴장하라구! 자, 간다!\"",
        background: "assets/images/background/playground.png",
        character: "assets/images/characters/dain_nomal.png",
        setFlag: "metDain",
        next: "after_school_start"
    },
    "after_school_start": {
        name: "나",
        text: "(어느덧 모든 수업이 끝나고 방과 후를 알리는 종소리가 울려 퍼진다. 노을빛이 교실 안을 붉게 물들이고 있다.)",
        background: "assets/images/background/room_school.png",
        character: null,
        sunset: true,
        next: "after_school_start_2"
    },
    "after_school_start_2": {
        name: "나",
        text: "(가방을 챙겨 교실을 나서려는데... 복도에는 하교하는 아이들의 발소리가 가득하다.)",
        sunset: true,
        next: "after_school_start_3"
    },
    "after_school_start_3": {
        name: "나",
        text: "(오늘 하루도 참 길었네. 이제 어떻게 할까?)",
        sunset: true,
        choices: [
            { text: "서연이가 있는 학생회실에 들러본다.", next: "after_seoyeon", condition: "metSeoyeon" },
            { text: "학생회실 쪽을 한 번 가본다.", next: "after_seoyeon", excludeCondition: "metSeoyeon", setFlag: "metSeoyeon" },
            { text: "유나가 있던 도서관 별관으로 향한다.", next: "after_yuna", condition: "metYuna" },
            { text: "학교의 조용한 곳을 좀 더 둘러본다.", next: "after_yuna_new", excludeCondition: "metYuna" },
            { text: "운동장에서 연습 중인 다인이를 보러 간다.", next: "after_dain", condition: "metDain" },
            { text: "활기찬 소리가 들리는 운동장으로 향한다.", next: "after_dain_new", excludeCondition: "metDain" },
            { text: "오늘은 피곤하니 바로 집으로 돌아간다.", next: "after_home" }
        ]
    },
    "after_dain_new": {
        name: "나",
        text: "(운동장으로 향하자 노을 아래에서 땀 흘리며 배구 연습을 하는 아이들이 보인다. 그중에서도 유독 눈에 띄는 한 소녀가 있다.)",
        background: "assets/images/background/playground.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_new_intro"
    },
    "after_dain_new_intro": {
        name: "???",
        text: "\"안녕! 난 배구부 다인이야. 너 오늘 전학 온 그 애 맞지?\"",
        background: "assets/images/background/playground.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        setFlag: "metDain",
        next: "after_dain_2"
    },
    "after_dain": {
        name: "다인",
        text: "(운동장에 도착하자 다인이가 높게 뛰어올라 강력한 스파이크를 내리꽂고 있다. 그녀의 건강한 에너지가 주변을 밝히는 것 같다.)",
        background: "assets/images/background/playground.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_2"
    },
    "after_dain_2": {
        name: "다인",
        text: "(연습이 잠시 멈춘 사이, 다인이가 나를 발견하고는 수건으로 땀을 닦으며 달려온다.)",
        background: "assets/images/background/playground.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_3"
    },
    "after_dain_3": {
        name: "다인",
        text: "\"어이, 전학생! 여기까지 웬일이야? 나 연습하는 거 구경하러 온 거야? 후훗, 내 멋진 모습에 반하기라도 한 건 아니지?\"",
        background: "assets/images/background/playground.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        choices: [
            { text: "응, 다인이 연습하는 거 보니까 나도 힘이 나는 것 같아.", next: "after_dain_cheer" },
            { text: "그냥 학교 둘러보다가 소리가 들려서 와봤어.", next: "after_dain_normal" }
        ]
    },
    "after_dain_cheer": {
        name: "다인",
        text: "(다인이가 쑥스러운 듯 코끝을 찡긋하며 웃는다. 그녀의 얼굴에 건강한 홍조가 핀다.)",
        background: "assets/images/background/playground.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_cheer_2"
    },
    "after_dain_cheer_2": {
        name: "다인",
        text: "\"뭐, 뭐야... 갑자기 그렇게 칭찬하면 부끄럽잖아! 그래도 고마워. 네 응원 덕분에 오늘 연습은 더 잘 될 것 같아!\"",
        background: "assets/images/background/playground.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_end"
    },
    "after_dain_normal": {
        name: "다인",
        text: "(다인이가 장난스럽게 내 어깨를 툭 친다. 그녀의 손길에서 기분 좋은 온기가 느껴진다.)",
        background: "assets/images/background/playground.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_normal_2"
    },
    "after_dain_normal_2": {
        name: "다인",
        text: "\"에이~ 솔직하지 못하긴! 뭐, 좋아. 온 김에 우리 연습 끝날 때까지 좀 기다려줄래? 같이 떡볶이라도 먹으러 가자!\"",
        background: "assets/images/background/playground.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_end"
    },
    "after_dain_end": {
        name: "나",
        text: "(다인이의 연습이 끝날 때까지 운동장 스탠드에 앉아 그녀를 지켜보았다. 노을이 지고 어둠이 깔릴 때까지 그녀의 열정은 식을 줄 몰랐다. 연습이 끝나고 우리는 약속대로 학교 앞 분식집으로 향했다.)",
        background: "assets/images/background/school.png",
        sunset: true,
        setFlag: "datedDainDay1",
        next: "after_dain_tteokbokki"
    },
    "after_dain_tteokbokki": {
        name: "다인",
        text: "(김이 모락모락 나는 떡볶이를 한 입 베어 물며 다인이가 행복한 미소를 짓는다. 운동 후라 그런지 평소보다 더 맛있게 느껴진다.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "after_dain_tteokbokki_2"
    },
    "after_dain_tteokbokki_2": {
        name: "다인",
        text: "\"캬~ 역시 운동 끝나고 먹는 떡볶이가 최고라니까! 오늘 같이 와줘서 정말 고마워. 덕분에 평소보다 두 배는 더 맛있는 것 같아!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "after_dain_tteokbokki_3"
    },
    "after_dain_tteokbokki_3": {
        name: "다인",
        text: "\"우리 내일도... 아니, 앞으로도 자주 같이 먹으러 오자! 약속이다?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "evening_home"
    },
    "after_yuna_new": {
        name: "나",
        text: "(학교의 조용한 곳을 찾아 걷다 보니, 낡은 도서관 별관에 도착했다. 노을빛이 스며드는 그곳에는 한 소녀가 창가에 앉아 있다.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_new_2"
    },
    "after_yuna_new_2": {
        name: "???",
        text: "\"안녕? 이 시간에 여기까지 오다니... 너도 참 특이하네. 나는 유나라고 해.\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        setFlag: "metYuna",
        next: "after_yuna_3"
    },
    "after_seoyeon": {
        name: "서연",
        text: "(학생회실 문을 열자, 산더미처럼 쌓인 서류들 사이에서 고군분투하고 있는 서연이가 보인다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_2"
    },
    "after_seoyeon_2": {
        name: "서연",
        text: "(내가 들어오자 그녀가 깜짝 놀라며 고개를 든다. 그녀의 안경 너머로 피곤함이 묻어난다. 그녀는 펜을 내려놓고 기지개를 켠다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_3"
    },
    "after_seoyeon_3": {
        name: "서연",
        text: "\"어? 전학생 군! 이 시간에 어쩐 일이야? 설마... 나 기다려준 거야?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "응, 같이 하교하고 싶어서. 도와줄까?", next: "after_seoyeon_help", setFlag: "helpedSeoyeon" },
            { text: "그냥 얼굴 보고 싶어서 왔어. 너무 무리하는 거 아냐?", next: "after_seoyeon_worry" }
        ]
    },
    "after_seoyeon_help": {
        name: "서연",
        text: "(그녀가 감동한 듯 눈을 크게 뜬다. 이내 환한 미소를 지으며 내 옆자리를 내어준다. 그녀의 곁에서 종이 냄새와 그녀의 향기가 섞여 난다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "after_seoyeon_help_2"
    },
    "after_seoyeon_help_2": {
        name: "서연",
        text: "(우리는 말없이 서류를 정리하며 묘한 유대감을 느낀다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_help_2_2"
    },
    "after_seoyeon_help_2_2": {
        name: "서연",
        text: "\"정말? 고마워! 네가 도와준다면 금방 끝낼 수 있을 것 같아. 자, 이 서류들 분류하는 것 좀 도와줄래?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "after_seoyeon_help_3"
    },
    "after_seoyeon_help_3": {
        name: "서연",
        text: "\"우리... 끝나고 같이 맛있는 거 먹으러 가자!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "after_seoyeon_cafe"
    },
    "after_seoyeon_cafe": {
        name: "서연",
        text: "(서류 정리를 마치고 우리는 학교 앞 작은 카페에 들렀다. 따뜻한 코코아 향기가 카페 안을 가득 채우고 있다.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe_2"
    },
    "after_seoyeon_cafe_2": {
        name: "서연",
        text: "(서연이는 생크림이 듬뿍 올라간 음료를 마시며 행복한 표정을 짓는다.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe_2_2"
    },
    "after_seoyeon_cafe_2_2": {
        name: "서연",
        text: "\"하아~ 이제야 좀 살 것 같아. 오늘 정말 고마웠어, 전학생 군.\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe_3"
    },
    "after_seoyeon_cafe_3": {
        name: "서연",
        text: "\"네 덕분에 학생회 일도 즐겁게 마무리할 수 있었어. 우리... 내일도 같이 하교할 수 있을까?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "물론이지. 내일도 기다릴게.", next: "after_seoyeon_promise" },
            { text: "글쎄, 내일 기분 봐서? (장난)", next: "after_seoyeon_tease" }
        ]
    },
    "after_seoyeon_promise": {
        name: "서연",
        text: "(그녀가 새끼손가락을 내밀며 환하게 웃는다. 카페의 조명이 그녀의 눈동자 속에서 반짝인다. 그녀의 웃음소리가 카페 안의 소음과 어우러져 감미롭게 들린다.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "after_seoyeon_promise_2"
    },
    "after_seoyeon_promise_2": {
        name: "서연",
        text: "\"약속한 거다? 어기면 안 돼! 그럼 내일 봐, 전학생 군. 조심히 들어가!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "evening_home"
    },
    "after_seoyeon_tease": {
        name: "서연",
        text: "(그녀가 볼을 빵빵하게 부풀리며 나를 째려본다. 하지만 눈가에는 장난기가 가득하다. 그녀는 내 팔을 살짝 때리며 웃음을 터뜨린다.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "after_seoyeon_tease_2"
    },
    "after_seoyeon_tease_2": {
        name: "서연",
        text: "\"치... 정말 못됐다니까! 그래도 꼭 와야 해? 안 오면 학생회장의 권한으로 벌을 줄 테니까! 후훗, 농담이야. 내일 봐!\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "evening_home"
    },
    "after_seoyeon_worry": {
        name: "서연",
        text: "(그녀가 쑥스러운 듯 머리를 긁적이며 웃는다. 그녀의 미소에 피로가 조금 가신 듯 보인다. 그녀는 내 걱정이 진심임을 느끼고 감동한 듯 눈시울이 붉어진다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_worry_2"
    },
    "after_seoyeon_worry_2": {
        name: "서연",
        text: "\"헤헤, 들켰네. 학생회장이라는 게 생각보다 할 일이 많거든. 하지만 네가 이렇게 걱정해주니까 힘이 불끈 솟는걸? 조금만 기다려줘, 금방 끝내고 같이 가자!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe"
    },
    "after_yuna": {
        name: "유나",
        text: "(도서관 별관은 낮보다 더 어둡고 고요하다. 그곳에는 한 소녀가 창가에 앉아 노을을 바라보고 있다.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_2"
    },
    "after_yuna_2": {
        name: "유나",
        text: "(그녀의 옆모습이 마치 한 폭의 그림처럼 아름답고도 위태로워 보인다. 그녀는 내가 온 것을 알면서도 한참 동안 창밖만 바라본다.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_3"
    },
    "after_yuna_3": {
        name: "유나",
        text: "\"아, 전학생... 방과 후의 도서관은 더 고요해서 좋아. 넌 무슨 일로 온 거야?\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        choices: [
            { text: "너에 대해 더 알고 싶어서 왔어.", next: "after_yuna_know" },
            { text: "이 학교의 비밀... 그게 뭔지 알려줘.", next: "after_yuna_secret", condition: "metYuna" },
            { text: "이 학교는 어떤 곳이야?", next: "after_yuna_secret", excludeCondition: "metYuna" }
        ]
    },
    "after_yuna_know": {
        name: "유나",
        text: "(그녀가 천천히 고개를 돌려 나를 바라본다. 그녀의 눈동자에 붉은 노을빛이 서린다. 그녀의 입가에 희미한 미소가 번진다.)",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "after_yuna_know_2"
    },
    "after_yuna_know_2": {
        name: "유나",
        text: "(그녀는 내 손을 잡고 별관 옥상으로 나를 이끈다.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_yuna_know_2_2"
    },
    "after_yuna_know_2_2": {
        name: "유나",
        text: "\"나에 대해...? 후훗, 용감한 건지 무모한 건지 모르겠네.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_yuna_know_3"
    },
    "after_yuna_know_3": {
        name: "유나",
        text: "\"좋아, 오늘 밤은 길 테니까. 조금씩... 아주 조금씩 알려줄게. 따라와.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_yuna_rooftop"
    },
    "after_yuna_rooftop": {
        name: "유나",
        text: "(별관 옥상에서 내려다보는 학교는 낮과는 전혀 다른 모습이다. 차가운 밤공기가 우리를 감싸고, 멀리서 도시의 불빛이 반짝인다.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "after_yuna_rooftop_2"
    },
    "after_yuna_rooftop_2": {
        name: "유나",
        text: "(유나는 난간에 기대어 먼 곳을 응시한다.)",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "after_yuna_rooftop_2_2"
    },
    "after_yuna_rooftop_2_2": {
        name: "유나",
        text: "\"사람들은 이 학교가 완벽하다고 생각하지. 하지만 완벽한 건 없어.\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        next: "after_yuna_rooftop_3"
    },
    "after_yuna_rooftop_3": {
        name: "유나",
        text: "\"겉으로 드러나지 않은 문제들이 곪아가고 있을 뿐이야. 넌 그런 위화감, 못 느꼈어?\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        choices: [
            { text: "너와 함께라면 어디든 갈 수 있어.", next: "after_yuna_together" },
            { text: "어둠이라니... 좀 무서운데.", next: "after_yuna_scared" }
        ]
    },
    "after_yuna_together": {
        name: "유나",
        text: "(그녀가 내 손을 꽉 쥔다. 그녀의 손은 여전히 차갑지만, 그 속에서 뜨거운 열망이 느껴진다. 그녀는 내 눈을 보며 슬픈 미소를 짓는다.)",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        next: "after_yuna_together_2"
    },
    "after_yuna_together_2": {
        name: "유나",
        text: "\"바보 같은 소리... 하지만 그 대답, 싫지 않아. 좋아, 그럼 우리... 서로의 비밀을 공유하는 사이가 되는 건 어때?\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        next: "evening_home"
    },
    "after_yuna_scared": {
        name: "유나",
        text: "(그녀가 차갑게 웃으며 내 손을 놓는다. 그녀의 눈빛이 다시 무심해진다. 그녀는 다시 창밖으로 시선을 돌리며 나를 밀어낸다.)",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "after_yuna_scared_2"
    },
    "after_yuna_scared_2": {
        name: "유나",
        text: "\"후훗, 역시 그렇겠지. 평범한 학생에게는 너무 무거운 이야기니까. 오늘은 이만 돌아가. 더 이상 깊이 알려고 하지 마.\"",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "evening_home"
    },
    "after_yuna_secret": {
        name: "유나",
        text: "(그녀가 손가락을 입술에 갖다 대며 조용히 하라는 신호를 보낸다. 그녀의 눈빛이 날카롭게 빛난다. 그녀는 내 옷깃을 잡아당겨 자신에게 밀착시킨다.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_yuna_secret_2"
    },
    "after_yuna_secret_2": {
        name: "유나",
        text: "\"쉿... 벽에도 귀가 있는 법이야. 진실을 알게 되면 넌 더 이상 평범한 일상으로 돌아갈 수 없어. 그래도 괜찮다면... 내 손을 잡아.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_yuna_rooftop"
    },
    "after_home": {
        name: "나",
        text: "(교문을 나서며 오늘 하루를 되돌아본다. 서연이와의 만남, 그리고 학교 곳곳에서 느꼈던 묘한 분위기들... 전학 첫날치고는 정말 많은 일이 있었다.)",
        background: "assets/images/background/school.png",
        sunset: true,
        next: "after_home_2"
    },
    "after_home_2": {
        name: "나",
        text: "(노을이 지는 거리를 걸으며 내일은 또 어떤 일이 벌어질지 기대해본다. 가로등이 하나둘씩 켜지며 밤을 준비한다.)",
        sunset: true,
        next: "after_home_2_2"
    },
    "after_home_2_2": {
        name: "나",
        text: "(내일도... 그녀들을 만날 수 있겠지?)",
        sunset: true,
        next: "evening_home"
    },
    "evening_home": {
        name: "나",
        text: "(집에 돌아와 침대에 눕자 오늘 하루의 일들이 주마등처럼 스쳐 지나간다. 서연이의 따뜻한 미소, 유나의 신비로운 눈동자...)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        next: "evening_home_2"
    },
    "evening_home_2": {
        name: "나",
        text: "(천장을 바라보며 나는 깊은 생각에 잠긴다. 방 안에는 시계 초침 소리만이 규칙적으로 울려 퍼진다.)",
        night: true,
        next: "evening_home_2_2"
    },
    "evening_home_2_2": {
        name: "나",
        text: "(전학 첫날부터 이렇게 파란만장할 줄이야... 내일은 또 어떤 일이 기다리고 있을까?)",
        night: true,
        choices: [
            { text: "서연이에게 오늘 고마웠다고 메시지를 보낸다.", next: "evening_message_seoyeon", condition: "metSeoyeon" },
            { text: "유나가 했던 말들을 곱씹어 본다.", next: "evening_think_yuna_met", condition: "metYuna" },
            { text: "다인이의 활기찬 미소를 떠올려 본다.", next: "evening_think_dain", condition: "metDain" },
            { text: "학교에 대해 느꼈던 의문점들을 떠올려 본다.", next: "evening_think_yuna", excludeCondition: "metYuna" },
            { text: "피곤하니 아무 생각 말고 잠이나 자자.", next: "evening_sleep" }
        ]
    },
    "evening_think_dain": {
        name: "나",
        text: "(다인이의 건강한 웃음소리가 귓가에 맴도는 것 같다. 그녀와 함께라면 이 낯선 학교생활도 즐겁게 해낼 수 있을 것 같은 기분이 든다. 나는 내일 그녀와 함께 먹을 떡볶이를 기대하며 잠을 청했다.)",
        night: true,
        next: "day2_start"
    },
    "evening_message_seoyeon": {
        name: "나",
        text: "(조심스럽게 휴대폰을 들어 서연이에게 메시지를 보냈다. '오늘 안내해줘서 정말 고마웠어. 덕분에 학교에 잘 적응할 수 있을 것 같아.')",
        night: true,
        next: "evening_message_seoyeon_2"
    },
    "evening_message_seoyeon_2": {
        name: "나",
        text: "(잠시 후, 휴대폰이 진동하며 답장이 왔다. 심장이 두근거린다.)",
        night: true,
        next: "evening_message_seoyeon_2_2"
    },
    "evening_message_seoyeon_2_2": {
        name: "나",
        text: "\"[서연]: 아니야, 나도 오늘 정말 즐거웠어! 전학생 군 덕분에 학생회 일도 빨리 끝났고. 내일 학교에서 봐! 잘 자~ (하트 이모티콘)\"",
        night: true,
        next: "day2_start"
    },
    "evening_think_yuna": {
        name: "나",
        text: "(학교 곳곳에서 느껴졌던 기묘한 분위기와 소문들이 머릿속을 떠나지 않는다. 누군가 나를 지켜보고 있는 듯한 기분... 대체 이 학교는 무엇을 숨기고 있는 걸까? 창밖의 어둠이 평소보다 더 깊게 느껴진다. 나는 밤늦게까지 잠을 이루지 못했다.)",
        night: true,
        next: "day2_start"
    },
    "evening_think_yuna_met": {
        name: "나",
        text: "(유나가 했던 '학교의 비밀'이라는 말이 머릿속을 떠나지 않는다. 그녀의 차가운 손길과 슬픈 눈빛... 그녀는 대체 무엇을 알고 있는 걸까? 창밖의 어둠이 평소보다 더 깊게 느껴진다. 나는 밤늦게까지 잠을 이루지 못했다.)",
        night: true,
        next: "day2_start"
    },
    "evening_sleep": {
        name: "나",
        text: "(눈을 감자마자 깊은 잠에 빠져들었다. 꿈속에서 나는 끝없는 복도를 달리고 있었다. 저 멀리서 누군가 나를 부르는 소리가 들렸지만, 아무리 달려도 닿을 수 없었다. 차가운 땀을 흘리며 나는 새벽녘에 눈을 떴다.)",
        night: true,
        next: "day2_start"
    },
    "day2_start": {
        name: "나",
        text: "(알람 소리에 눈을 떴다. 창밖으로 비치는 아침 햇살이 눈부시다. 어제의 긴장감은 사라지고, 이제는 조금 익숙해진 교복을 입는다.)",
        background: "assets/images/background/room_my.png",
        next: "day2_start_2"
    },
    "day2_start_2": {
        name: "나",
        text: "(거울 속의 내 모습이 어제보다 조금 더 당당해 보인다. 나는 가방을 챙겨 집을 나섰다.)",
        next: "day2_gate"
    },
    "day2_gate": {
        name: "서연",
        text: "(교문 앞에 도착하자, 멀리서 누군가 손을 흔들며 달려온다. 서연이다!)",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_gate_2"
    },
    "day2_gate_2": {
        name: "서연",
        text: "(그녀는 오늘도 활기찬 모습으로 나를 반겨준다. 아침 이슬을 머금은 꽃처럼 싱그러운 미소다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_gate_2_2"
    },
    "day2_gate_2_2": {
        name: "서연",
        text: "\"안녕, 전학생 군! 좋은 아침이야!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_gate_3"
    },
    "day2_gate_3": {
        name: "서연",
        text: "\"어제 잠은 잘 잤니? 얼굴색이 좋아 보여서 다행이야.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "응, 서연이 덕분에 푹 잤어. 너도 잘 잤니?", next: "day2_gate_talk_1" },
            { text: "아침부터 서연이를 보니까 힘이 나네!", next: "day2_gate_talk_2" },
            { text: "어제 유나라는 애를 만났는데... (유나 이야기를 꺼낸다)", next: "day2_gate_talk_yuna_met", condition: "metYuna" },
            { text: "어제 다인이라는 애를 만났는데... (다인 이야기를 꺼낸다)", next: "day2_gate_talk_dain_met", condition: "metDain" },
            { text: "혹시 이 학교에 좀... 신비로운 분위기의 학생이 있어?", next: "day2_gate_talk_yuna", excludeCondition: "metYuna" }
        ]
    },
    "day2_gate_talk_dain_met": {
        name: "서연",
        text: "(다인이의 이름을 듣자 서연이가 환하게 웃는다. 그녀의 표정이 한결 부드러워진다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_gate_talk_dain_met_2"
    },
    "day2_gate_talk_dain_met_2": {
        name: "서연",
        text: "\"아, 다인이! 그 아이 정말 활기차지? 우리 학교의 분위기 메이커야. 다인이랑 친해지면 학교생활이 정말 즐거워질 거야. 나랑도 꽤 친한 사이니까, 나중에 셋이서 같이 놀자!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_classroom"
    },
    "day2_gate_talk_1": {
        name: "서연",
        text: "(그녀가 기분 좋은 듯 웃으며 내 옆으로 다가온다. 은은한 샴푸 향기가 바람을 타고 전해진다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_gate_talk_1_2"
    },
    "day2_gate_talk_1_2": {
        name: "서연",
        text: "(그녀는 내 팔을 살짝 건드리며 장난스럽게 말한다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_gate_talk_1_2_2"
    },
    "day2_gate_talk_1_2_2": {
        name: "서연",
        text: "\"후훗, 다행이다! 나도 오늘 아침에 일찍 눈이 떠지더라고.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_gate_talk_1_3"
    },
    "day2_gate_talk_1_3": {
        name: "서연",
        text: "\"왠지 좋은 일이 생길 것 같은 예감이 들어. 자, 같이 교실로 갈까?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_classroom"
    },
    "day2_gate_talk_2": {
        name: "서연",
        text: "(서연이의 얼굴이 살짝 붉어진다. 그녀는 부끄러운 듯 시선을 피하며 머리카락을 귀 뒤로 넘긴다.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_gate_talk_2_2"
    },
    "day2_gate_talk_2_2": {
        name: "서연",
        text: "(그녀의 수줍은 모습이 아침 햇살 아래 더욱 빛난다.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_gate_talk_2_2_2"
    },
    "day2_gate_talk_2_2_2": {
        name: "서연",
        text: "\"정말... 아침부터 그런 소리를... 너 정말 못 말린다니까.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_gate_talk_2_3"
    },
    "day2_gate_talk_2_3": {
        name: "서연",
        text: "\"그래도 고마워. 나도 네 얼굴 보니까 기운이 나는 것 같아.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom"
    },
    "day2_gate_talk_yuna_met": {
        name: "서연",
        text: "(유나의 이름을 듣자 서연이의 표정이 순식간에 어두워진다. 그녀는 주변을 살피더니 목소리를 낮춰 말한다. 그녀의 눈동자에 걱정 어린 빛이 서린다.)",
        character: "assets/images/characters/seyoun_worried.png",
        next: "day2_gate_talk_yuna_met_2"
    },
    "day2_gate_talk_yuna_met_2": {
        name: "서연",
        text: "\"유나...? 아, 그 아이를 만났구나. 유나는 좀... 신비로운 구석이 있지. 하지만 너무 깊게 엮이지 않는 게 좋을 거야. 선생님들도 그 아이에 대해서는 말을 아끼시거든.\"",
        character: "assets/images/characters/seyoun_worried.png",
        next: "day2_classroom"
    },
    "day2_gate_talk_yuna": {
        name: "서연",
        text: "(유나의 이름을 듣자 서연이의 표정이 순식간에 어두워진다. 그녀는 주변을 살피더니 목소리를 낮춰 말한다. 그녀의 눈동자에 걱정 어린 빛이 서린다.)",
        character: "assets/images/characters/seyoun_worried.png",
        next: "day2_gate_talk_yuna_2"
    },
    "day2_gate_talk_yuna_2": {
        name: "서연",
        text: "\"신비로운 분위기...? 아, 혹시 유나를 말하는 거니? 유나는 좀... 신비로운 구석이 있지. 하지만 너무 깊게 엮이지 않는 게 좋을 거야. 선생님들도 그 아이에 대해서는 말을 아끼시거든.\"",
        character: "assets/images/characters/seyoun_worried.png",
        next: "day2_classroom"
    },
    "day2_classroom": {
        name: "나",
        text: "(교실에 들어서자 어제보다 훨씬 편안한 분위기가 느껴진다. 아이들이 나에게 손을 흔들며 인사를 건넨다.)",
        background: "assets/images/background/room_school.png",
        character: null,
        choices: [
            { text: "자리에 앉는다.", next: "day2_classroom_2", condition: "metYuna" },
            { text: "자리에 앉는다.", next: "day2_lesson", excludeCondition: "metYuna" }
        ]
    },
    "day2_classroom_2": {
        name: "나",
        text: "(내 자리에 앉아 책을 꺼내는데, 책상 위에 작은 쪽지 하나가 놓여 있다. 보랏빛 향기가 은은하게 배어 있는 쪽지다.)",
        choices: [
            { text: "쪽지를 열어본다.", next: "day2_note_open", setFlag: "readNote" },
            { text: "무시하고 가방에 넣는다.", next: "day2_note_ignore" }
        ]
    },
    "day2_note_open": {
        name: "나",
        text: "(쪽지를 펼치자 정갈하면서도 날카로운 필체가 눈에 들어온다. '오늘 점심시간, 도서관 별관에서 기다릴게. 할 말이 있어. - Y' ...누구지?)",
        next: "day2_note_open_2"
    },
    "day2_note_open_2": {
        name: "나",
        text: "(그녀가 나에게 할 말이란 게 대체 뭘까? 가슴이 두근거리기 시작한다.)",
        next: "day2_lesson"
    },
    "day2_note_ignore": {
        name: "나",
        text: "(왠지 모를 불안감에 쪽지를 가방 깊숙이 집어넣었다. 하지만 수업 시간 내내 그 쪽지의 내용이 궁금해서 집중할 수가 없었다.)",
        next: "day2_note_ignore_2"
    },
    "day2_note_ignore_2": {
        name: "나",
        text: "(왠지 모를 기묘한 기분이 자꾸만 머릿속을 맴돈다. 그 쪽지의 주인공은 대체 누구일까?)",
        next: "day2_lesson"
    },
    "day2_lesson": {
        name: "선생님",
        text: "(지루한 수학 수업이 이어지고 있다. 칠판을 가득 채운 공식들이 마치 외계어처럼 보인다.)",
        character: "assets/images/characters/teacher.png",
        next: "day2_lesson_2"
    },
    "day2_lesson_2": {
        name: "선생님",
        text: "(창밖으로는 체육 수업을 하는 아이들의 활기찬 목소리가 들려온다. 나는 턱을 괴고 창밖을 바라보며 생각에 잠긴다.)",
        character: "assets/images/characters/teacher.png",
        next: "day2_lesson_3"
    },
    "day2_lesson_3": {
        name: "선생님",
        text: "\"자, 거기 전학생! 딴짓하지 말고 이 문제 한번 풀어볼까?\"",
        character: "assets/images/characters/teacher.png",
        choices: [
            { text: "당당하게 일어나서 문제를 푼다.", next: "day2_lesson_solve_study", condition: "personality_study" },
            { text: "당당하게 일어나서 문제를 푼다.", next: "day2_lesson_solve_active", condition: "personality_active" },
            { text: "당당하게 일어나서 문제를 푼다.", next: "day2_lesson_solve_normal", condition: "personality_quiet" },
            { text: "당당하게 일어나서 문제를 푼다.", next: "day2_lesson_solve_normal", condition: "personality_party" },
            { text: "모르겠다고 솔직하게 말한다.", next: "day2_lesson_fail" }
        ]
    },
    "day2_lesson_solve_active": {
        name: "아이들",
        text: "(칠판 앞으로 나가 거침없이 문제를 풀어나갔다. 분필 소리가 경쾌하게 울려 퍼진다. 정답을 맞히자 아이들이 감탄 섞인 박수를 보낸다. 서연이도 뒤에서 엄지를 치켜세우며 웃어준다.)",
        character: null,
        next: "day2_lesson_solve_2_active"
    },
    "day2_lesson_solve_normal": {
        name: "아이들",
        text: "(칠판 앞으로 나가 거침없이 문제를 풀어나갔다. 분필 소리가 경쾌하게 울려 퍼진다. 정답을 맞히자 아이들이 감탄 섞인 박수를 보낸다. 서연이도 뒤에서 엄지를 치켜세우며 웃어준다.)",
        character: null,
        next: "day2_lesson_solve_2"
    },
    "day2_lesson_solve_study": {
        name: "아이들",
        text: "(칠판 앞으로 나가 거침없이 문제를 풀어나갔다. 분필 소리가 경쾌하게 울려 퍼진다. 정답을 맞히자 아이들이 감탄 섞인 박수를 보낸다. 서연이도 뒤에서 엄지를 치켜세우며 웃어준다.)",
        character: null,
        next: "day2_lesson_solve_2"
    },
    "day2_lesson_solve_2": {
        name: "아이들",
        text: "\"와~ 전학생 공부도 잘하네! 완전 사기 캐릭터 아니야?\"",
        character: null,
        next: "day2_lunch_choice"
    },
    "day2_lesson_solve_2_active": {
        name: "아이들",
        text: "\"오~ 전학생, 운동만 잘하는 줄 알았더니 공부도 좀 하는데? 의외인걸!\"",
        character: null,
        next: "day2_lunch_choice"
    },
    "day2_lesson_fail": {
        name: "아이들",
        text: "(머리를 긁적이며 모르겠다고 하자 교실에 작은 웃음이 터진다. 선생님은 허허 웃으며 다시 설명해주신다. 서연이가 안타까운 듯 나를 바라보며 나중에 가르쳐주겠다고 입모양으로 말한다.)",
        character: null,
        next: "day2_lesson_fail_2"
    },
    "day2_lesson_fail_2": {
        name: "아이들",
        text: "\"괜찮아, 전학생! 저 문제는 원래 좀 어렵긴 해. 나중에 내가 도와줄게!\"",
        character: null,
        next: "day2_lunch_choice"
    },
    "day2_lunch_choice": {
        name: "나",
        text: "(드디어 점심시간! 배꼽시계가 요란하게 울린다. 오늘은 어떻게 할까? 서연이는 벌써 도시락을 챙겨 나를 바라보고 있고... 선택의 시간이 다가왔다.)",
        choices: [
            { text: "서연이와 함께 옥상으로 간다.", next: "day2_lunch_seoyeon" },
            { text: "쪽지의 내용대로 도서관 별관으로 간다.", next: "day2_lunch_yuna", condition: "readNote" },
            { text: "유나가 있는 도서관 별관으로 향한다.", next: "day2_lunch_yuna", condition: "metYuna", excludeCondition: "readNote" },
            { text: "조용한 도서관 별관으로 향한다.", next: "day2_lunch_yuna_new", excludeCondition: "metYuna" },
            { text: "다인이가 있는 운동장으로 배구를 하러 간다.", next: "day2_lunch_volleyball", condition: "metDain" },
            { text: "운동장으로 나가서 아이들과 배구를 한다.", next: "day2_lunch_volleyball_new", excludeCondition: "metDain" },
            { text: "몸이 좀 안 좋은 것 같아 양호실로 간다.", next: "day2_lunch_nurse" }
        ]
    },
    "day2_lunch_volleyball_new": {
        name: "나",
        text: "(운동장으로 나가니 활기찬 기운이 느껴진다. 한 소녀가 아이들을 이끌며 열정적으로 배구를 가르치고 있다.)",
        background: "assets/images/background/playground.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_lunch_volleyball_new_2"
    },
    "day2_lunch_volleyball_new_2": {
        name: "???",
        text: "\"어이, 거기 전학생! 멍하니 서 있지 말고 이리 와서 같이 한 게임 어때? 난 배구부 다인이야!\"",
        background: "assets/images/background/playground.png",
        character: "assets/images/characters/dain_nomal.png",
        setFlag: "metDain",
        next: "day2_lunch_volleyball"
    },
    "day2_lunch_seoyeon": {
        name: "서연",
        text: "(옥상에 올라가자 서연이가 어제보다 더 화려한 도시락을 꺼낸다. 오늘은 무려 수제 샌드위치다!)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "다음", next: "day2_lunch_seoyeon_special", condition: "helpedSeoyeon" },
            { text: "다음", next: "day2_lunch_seoyeon_1_2", excludeCondition: "helpedSeoyeon" }
        ]
    },
    "day2_lunch_seoyeon_special": {
        name: "서연",
        text: "\"어제 네가 학생회 일을 도와준 덕분에 시간이 좀 남아서, 오늘은 특별히 더 신경 써서 준비했어. 자, 어서 먹어봐!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_lunch_seoyeon_1_2_2"
    },
    "day2_lunch_seoyeon_1_2": {
        name: "서연",
        text: "(그녀는 기대에 찬 눈빛으로 나를 바라본다. 그녀의 정성이 가득 담긴 샌드위치에서 고소한 냄새가 난다.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_lunch_seoyeon_1_2_2"
    },
    "day2_lunch_seoyeon_1_2_2": {
        name: "서연",
        text: "\"짜잔! 오늘은 샌드위치를 만들어 봤어.\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_lunch_seoyeon_1_3"
    },
    "day2_lunch_seoyeon_1_3": {
        name: "서연",
        text: "\"전학생 군이 좋아할 것 같아서 아침부터 서둘렀지. 어때, 맛있어 보여?\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_lunch_seoyeon_2"
    },
    "day2_lunch_seoyeon_2": {
        name: "서연",
        text: "(샌드위치를 한 입 베어 물자 신선한 야채와 소스의 조화가 일품이다. 내가 맛있게 먹는 모습을 보며 서연이가 행복한 듯 웃는다.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_lunch_seoyeon_2_2"
    },
    "day2_lunch_seoyeon_2_2": {
        name: "서연",
        text: "(그녀는 내 입가에 묻은 소스를 손가락으로 살짝 닦아준다. 순간 심장이 멎는 줄 알았다.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_lunch_seoyeon_2_2_2"
    },
    "day2_lunch_seoyeon_2_2_2": {
        name: "서연",
        text: "\"후훗, 그렇게 맛있어? 천천히 먹어. 체하겠다.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_lunch_seoyeon_2_3"
    },
    "day2_lunch_seoyeon_2_3": {
        name: "서연",
        text: "\"아, 맞다! 이번 주말에 학교 축제가 있는데... 혹시 시간 되니?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "당연하지! 서연이랑 같이 축제 구경하고 싶어.", next: "day2_festival_promise" },
            { text: "축제? 재미있겠다. 학생회 일로 바쁘지 않아?", next: "day2_festival_worry" }
        ]
    },
    "day2_festival_promise": {
        name: "서연",
        text: "(그녀가 너무 기쁜 나머지 내 손을 덥석 잡는다. 따뜻하고 부드러운 감촉에 얼굴이 화끈거린다. 그녀는 자신의 행동에 놀라 서둘러 손을 떼지만, 여전히 얼굴에는 미소가 가득하다.)",
        character: "assets/images/characters/seyoun_shy2.png",
        setFlag: "promisedFestival",
        next: "day2_festival_promise_2"
    },
    "day2_festival_promise_2": {
        name: "서연",
        text: "\"정말?! 약속한 거다? 그럼 내가 축제 때 입을 옷도 골라야겠네... 아, 아니! 아무것도 아니야! 암튼 기대하고 있을게!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_afternoon"
    },
    "day2_festival_worry": {
        name: "서연",
        text: "(그녀가 씩씩하게 가슴을 펴며 대답한다. 하지만 눈가에는 살짝 피로가 묻어난다. 그녀는 내 걱정이 고마운 듯 내 어깨에 살짝 머리를 기댄다. 그녀의 머리카락에서 은은한 꽃향기가 난다.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_festival_worry_2"
    },
    "day2_festival_worry_2": {
        name: "서연",
        text: "\"응, 좀 바쁘긴 하겠지만... 너랑 같이 보낼 시간은 어떻게든 만들 거야. 학생회장의 권한으로 말이지! 후훗, 농담이야. 같이 가줄 거지?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_afternoon"
    },
    "day2_lunch_yuna_new": {
        name: "나",
        text: "(조용한 곳을 찾아 도서관 별관으로 향했다. 그곳에는 한 소녀가 창가에 앉아 책을 읽고 있었다.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_lunch_yuna_new_2"
    },
    "day2_lunch_yuna_new_2": {
        name: "유나",
        text: "\"안녕? 여기까지 찾아오다니, 너도 참 특이하네. 나는 유나라고 해.\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        setFlag: "metYuna",
        next: "day2_lunch_yuna_1_2"
    },
    "day2_lunch_yuna": {
        name: "유나",
        text: "(도서관 별관에 들어서자 유나가 창가에 앉아 먼 곳을 응시하고 있다. 내가 다가가자 그녀가 천천히 고개를 돌린다.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_1_2"
    },
    "day2_lunch_yuna_1_2": {
        name: "유나",
        text: "(그녀의 눈동자 속에 알 수 없는 슬픔이 서려 있다. 그녀는 내 손을 잡고 구석진 서가로 나를 이끈다.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_1_2_2"
    },
    "day2_lunch_yuna_1_2_2": {
        name: "유나",
        text: "(그녀가 나를 빤히 바라본다. 마치 내 마음속을 꿰뚫어 보려는 것 같다.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_sadsmile.png",
        choices: [
            { text: "다음", next: "day2_lunch_yuna_1_2_2_note", condition: "readNote" },
            { text: "다음", next: "day2_lunch_yuna_1_2_2_no_note", excludeCondition: "readNote" }
        ]
    },
    "day2_lunch_yuna_1_2_2_note": {
        name: "유나",
        text: "\"왔구나. 쪽지를 보고 올 줄 알았어.\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_1_3"
    },
    "day2_lunch_yuna_1_2_2_no_note": {
        name: "유나",
        text: "\"여기까지 발걸음을 하다니... 너와 나는 역시 연결되어 있는 걸까?\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_1_3"
    },
    "day2_lunch_yuna_1_3": {
        name: "유나",
        text: "\"이 학교의 비밀... 그리고 너와 나의 연결고리에 대해 이야기해줄 때가 된 것 같네.\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_2"
    },
    "day2_lunch_yuna_2": {
        name: "유나",
        text: "(그녀가 낡은 책 한 권을 꺼내 펼친다. 그 안에는 오래된 사진 한 장이 끼워져 있다.)",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_2_2"
    },
    "day2_lunch_yuna_2_2": {
        name: "유나",
        text: "(사진 속에는 우리 학교의 옛 모습과 함께... 나와 꼭 닮은 소년이 서 있다. 나는 충격에 휩싸여 말을 잇지 못한다.)",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_2_3"
    },
    "day2_lunch_yuna_2_3": {
        name: "유나",
        text: "\"이 소년... 누군지 알겠어? 2년 전, 이 학교에서 사라진 선배야.\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_2_4"
    },
    "day2_lunch_yuna_2_4": {
        name: "유나",
        text: "(그녀는 나를 잃고 싶지 않다는 듯 내 옷깃을 꽉 쥔다.)",
        character: "assets/images/characters/yuna_sadsmile.png",
        next: "day2_lunch_yuna_2_4_2"
    },
    "day2_lunch_yuna_2_4_2": {
        name: "유나",
        text: "\"학교의 부당한 대우에 맞서다가... 억울하게 누명을 쓰고 쫓겨났지. 넌 그 선배랑 참 많이 닮았어.\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        choices: [
            { text: "말도 안 돼! 그럴 리가 없어.", next: "day2_yuna_denial" },
            { text: "그 선배...? 그럼 너는 나를 알고 있었던 거야?", next: "day2_yuna_accept" }
        ]
    },
    "day2_yuna_denial": {
        name: "유나",
        text: "(그녀가 차갑게 웃으며 사진을 다시 책 속에 넣는다. 그녀의 눈빛이 다시 무심해진다. 그녀는 내 가슴에 손을 얹으며 심장 박동을 느낀다. 그녀의 손길이 얼음처럼 차갑다.)",
        next: "day2_yuna_denial_2"
    },
    "day2_yuna_denial_2": {
        name: "유나",
        text: "\"믿기 힘들겠지. 하지만 이건 실제로 있었던 일이야. 너도 조심해. 튀는 행동을 하면 학교는 가만히 있지 않으니까. 이미 넌 그들의 눈에 띄었을지도 몰라.\"",
        setFlag: "knowsSecret",
        next: "day2_afternoon"
    },
    "day2_yuna_accept": {
        name: "유나",
        text: "(그녀의 눈에 이슬이 맺힌다. 그녀는 내 뺨을 부드럽게 어루만지며 속삭인다. 그녀의 목소리가 가늘게 떨린다. 그녀는 나를 잃고 싶지 않다는 듯 내 옷깃을 꽉 쥔다.)",
        character: "assets/images/characters/yuna_sad.png",
        next: "day2_yuna_accept_2"
    },
    "day2_yuna_accept_2": {
        name: "유나",
        text: "\"그 선배는... 나에게 아주 소중한 사람이었어. 널 보면 자꾸 그 선배가 생각나서... 이번에는 지켜주고 싶어. 너만은 다치지 않게.\"",
        character: "assets/images/characters/yuna_sad.png",
        setFlag: "knowsSecret",
        next: "day2_afternoon"
    },
    "day2_lunch_volleyball": {
        name: "나",
        text: "(운동장으로 달려나가 다인이가 이끄는 아이들과 땀을 흘리며 배구를 했다. 날아오는 공을 받아내고 넘기다 보니 잡생각이 사라지고 기분이 상쾌해진다. 강력한 스파이크를 성공시키자 다인이가 나를 얼싸안으며 환호한다.)",
        background: "assets/images/background/playground.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_lunch_volleyball_2"
    },
    "day2_lunch_volleyball_2": {
        name: "다인",
        text: "\"와! 전학생 스파이크 실력 대박인데? 우리 팀 에이스로 임명한다! 오늘 정말 최고였어!\"",
        background: "assets/images/background/playground.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_afternoon"
    },
    "day2_lunch_nurse": {
        name: "나",
        text: "(어제부터 쌓인 긴장 탓인지 머리가 지끈거린다. 나는 조용한 양호실로 발걸음을 옮겼다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_2"
    },
    "day2_lunch_nurse_2": {
        name: "양호선생님",
        text: "\"어머, 전학생이구나? 얼굴색이 안 좋네. 어디가 아파서 왔니?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_3": {
        name: "양호선생님",
        text: "(선생님은 따뜻한 미소를 지으며 나를 침대로 안내한다. 그녀의 손길에서 포근한 약초 향기가 난다.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "머리가 좀 아파요.", next: "day2_lunch_nurse_head" },
            { text: "그냥 좀 쉬고 싶어서요.", next: "day2_lunch_nurse_rest" }
        ]
    },
    "day2_lunch_nurse_head": {
        name: "양호선생님",
        text: "\"긴장성 두통인 것 같네. 전학 첫날부터 너무 무리했나 봐. 자, 이 약 먹고 한숨 자고 나면 괜찮아질 거야.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        next: "day2_lunch_nurse_sleep"
    },
    "day2_lunch_nurse_rest": {
        name: "양호선생님",
        text: "\"후훗, 가끔은 그런 날도 있지. 우리 학교가 좀... 기운이 세거든. 여기 커튼 치고 편하게 쉬렴.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        choices: [
            { text: "다음", next: "day2_lunch_nurse_rest_yuna", condition: "metYuna" },
            { text: "다음", next: "day2_lunch_nurse_sleep", excludeCondition: "metYuna" }
        ]
    },
    "day2_lunch_nurse_rest_yuna": {
        name: "나",
        text: "\"(기운이 세다고...? 유나가 했던 말들이 떠오른다. 이 학교, 정말 뭔가가 있는 걸까?)\"",
        background: "assets/images/background/nurse_room.jpg",
        next: "day2_lunch_nurse_sleep"
    },
    "day2_lunch_nurse_sleep": {
        name: "나",
        text: "(선생님이 덮어준 이불의 포근함에 나도 모르게 깊은 잠에 빠져들었다. 양호실의 고요함 속에서 어제의 피로가 씻겨 내려가는 기분이다.)",
        background: "assets/images/background/nurse_room.jpg",
        next: "day2_lunch_nurse_wake"
    },
    "day2_lunch_nurse_wake": {
        name: "나",
        text: "(얼마나 잤을까... 눈을 뜨니 창밖으로 붉은 노을이 스며들고 있다. 양호실은 이미 텅 비어 고요함만이 감돈다.)",
        background: "assets/images/background/nurse_room.jpg",
        sunset: true,
        next: "day2_afternoon"
    },
    "day2_afternoon": {
        name: "나",
        text: "(오후 수업도 모두 끝나고, 다시 노을이 지는 시간이 찾아왔다. 오늘은 어제보다 더 많은 일이 있었던 것 같다.)",
        background: "assets/images/background/room_school.png",
        character: null,
        sunset: true,
        choices: [
            { text: "다음", next: "day2_afternoon_dain", condition: "metDain" },
            { text: "다음", next: "day2_afternoon_2", excludeCondition: "metDain" }
        ]
    },
    "day2_afternoon_dain": {
        name: "나",
        text: "(다인이는 배구부 연습이 있다며 활기차게 손을 흔들고 운동장으로 뛰어갔다.)",
        background: "assets/images/background/room_school.png",
        sunset: true,
        next: "day2_afternoon_2"
    },
    "day2_afternoon_2": {
        name: "나",
        text: "(가방을 챙겨 교실을 나서려는데, 두 소녀가 동시에 나를 부른다. 복도에 묘한 긴장감이 흐른다.)",
        characters: {
            left: "assets/images/characters/seyoun_nomal.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        next: "day2_afternoon_2_2"
    },
    "day2_afternoon_2_2": {
        name: "나",
        text: "\"(어라... 이거 분위기가 좀 이상한데? 누구에게 먼저 가야 하지?)\"",
        characters: {
            left: "assets/images/characters/seyoun_nomal.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        choices: [
            { text: "서연이에게 다가간다.", next: "day2_final_seoyeon" },
            { text: "유나에게 다가간다.", next: "day2_final_yuna", condition: "metYuna" },
            { text: "낯선 소녀에게 다가간다.", next: "day2_final_yuna_new", excludeCondition: "metYuna" },
            { text: "운동장에서 기다리는 다인에게 간다.", next: "day2_final_dain", condition: "metDain" },
            { text: "둘 다 모른 척하고 서둘러 하교한다.", next: "day2_final_run" }
        ]
    },
    "day2_final_yuna_new": {
        name: "나",
        text: "(낯선 소녀에게 다가가자 그녀가 옅은 미소를 짓는다. 서연이의 얼굴이 순식간에 굳어진다.)",
        characters: {
            left: "assets/images/characters/seyoun_angry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        choices: [
            { text: "다음", next: "day2_final_yuna_new_betrayal", condition: "promisedFestival" },
            { text: "다음", next: "day2_final_yuna_new_2", excludeCondition: "promisedFestival" }
        ]
    },
    "day2_final_yuna_new_betrayal": {
        name: "서연",
        text: "\"전학생 군... 아까 축제 때 같이 가기로 약속했으면서... 처음 보는 애한테 가버리는 거야?\"",
        characters: {
            left: "assets/images/characters/seyoun_angry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        next: "day2_final_yuna_new_betrayal_2"
    },
    "day2_final_yuna_new_betrayal_2": {
        name: "서연",
        text: "(서연이의 입술이 파르르 떨린다. 화를 내려는 것 같았지만, 이내 참지 못한 눈물이 뺨을 타고 흘러내린다.)",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        choices: [
            { text: "서연아, 미안해... 역시 너랑 같이 갈게.", next: "day2_final_seoyeon_back_yuna_new" },
            { text: "미안해. 하지만 난 유나랑 할 이야기가 있어.", next: "day2_final_yuna_new_2" }
        ]
    },
    "day2_final_seoyeon_back_yuna_new": {
        name: "???",
        text: "\"후훗... 결국 마음이 약해졌나 보네. 좋아, 오늘은 양보해 줄게. 하지만 다음엔 도망칠 수 없을 거야.\"",
        characters: {
            left: "assets/images/characters/seyoun_shy.png",
            right: "assets/images/characters/yuna_sadsmile.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_2"
    },
    "day2_final_yuna_new_2": {
        name: "???",
        text: "\"안녕? 전학생. 나는 유나라고 해. 어제부터 널 지켜보고 있었어.\"",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        setFlag: "metYuna",
        next: "day2_final_yuna_2_2"
    },
    "day2_final_seoyeon": {
        name: "서연",
        text: "(서연이에게 다가가자 그녀가 안심한 듯 미소 짓는다. 하지만 옆에 서 있는 소녀를 의식하는지 눈빛이 날카롭다.)",
        characters: {
            left: "assets/images/characters/seyoun_laugh.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_yuna_react"
    },
    "day2_final_seoyeon_yuna_react": {
        name: "나",
        text: "(내가 다가가자 옆에 서 있던 소녀가 나지막하게 입을 연다.)",
        characters: {
            left: "assets/images/characters/seyoun_pout.png",
            right: "assets/images/characters/yuna_sadsmile.png"
        },
        sunset: true,
        choices: [
            { text: "다음", next: "day2_final_seoyeon_yuna_react_met", condition: "metYuna" },
            { text: "다음", next: "day2_final_seoyeon_yuna_react_new", excludeCondition: "metYuna" }
        ]
    },
    "day2_final_seoyeon_yuna_react_met": {
        name: "유나",
        text: "\"...그래, 네 선택이 그렇다면 어쩔 수 없지. 하지만 조심해. 빛이 강할수록 그림자도 깊은 법이니까.\"",
        characters: {
            left: "assets/images/characters/seyoun_pout.png",
            right: "assets/images/characters/yuna_sadsmile.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_2"
    },
    "day2_final_seoyeon_yuna_react_new": {
        name: "???",
        text: "\"...그래, 네 선택이 그렇다면 어쩔 수 없지. 하지만 조심해. 빛이 강할수록 그림자도 깊은 법이니까.\"",
        characters: {
            left: "assets/images/characters/seyoun_pout.png",
            right: "assets/images/characters/yuna_sadsmile.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_2"
    },
    "day2_final_seoyeon_2": {
        name: "서연",
        text: "(그녀는 내 팔짱을 끼며 유나를 쳐다본다. 그녀의 손에 힘이 들어간다.)",
        characters: {
            left: "assets/images/characters/seyoun_pout.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_2_2"
    },
    "day2_final_seoyeon_2_2": {
        name: "서연",
        text: "\"전학생 군, 오늘 학생회 회의가 있는데 같이 가줄 수 있지?\"",
        characters: {
            left: "assets/images/characters/seyoun_nomal.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_3"
    },
    "day2_final_seoyeon_3": {
        name: "서연",
        text: "\"중요한 안건이 있거든. 유나 양, 전학생 군은 내가 데려갈게.\"",
        characters: {
            left: "assets/images/characters/seyoun_nomal.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_4"
    },
    "day2_final_seoyeon_4": {
        name: "나",
        text: "(서연이와 함께 학생회실로 향했다. 회의는 늦게까지 이어졌지만, 그녀와 함께라면 힘들지 않았다. 회의가 끝나고 우리는 나란히 밤길을 걸으며 축제 때 입을 옷에 대해 이야기했다.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_laugh.png",
        night: true,
        next: "day2_ending_pre"
    },
    "day2_final_yuna": {
        name: "유나",
        text: "(유나에게 다가가자 그녀가 승리자의 미소를 짓는다. 서연이의 얼굴이 순식간에 굳어진다.)",
        characters: {
            left: "assets/images/characters/seyoun_angry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        choices: [
            { text: "다음", next: "day2_final_yuna_betrayal", condition: "promisedFestival" },
            { text: "다음", next: "day2_final_yuna_2", excludeCondition: "promisedFestival" }
        ]
    },
    "day2_final_yuna_betrayal": {
        name: "서연",
        text: "\"전학생 군... 아까 축제 때 같이 가기로 약속했으면서... 어떻게 이럴 수 있어?\"",
        characters: {
            left: "assets/images/characters/seyoun_angry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        next: "day2_final_yuna_betrayal_2"
    },
    "day2_final_yuna_betrayal_2": {
        name: "서연",
        text: "(서연이의 목소리가 떨리기 시작하더니, 이내 맑은 눈동자에 눈물이 고여 흐르기 시작한다.)",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        choices: [
            { text: "서연아, 미안해... 역시 너랑 같이 갈게.", next: "day2_final_seoyeon_back_yuna" },
            { text: "미안해. 하지만 난 유나랑 할 이야기가 있어.", next: "day2_final_yuna_2" }
        ]
    },
    "day2_final_seoyeon_back_yuna": {
        name: "유나",
        text: "\"후훗... 결국 마음이 약해졌나 보네. 좋아, 오늘은 양보해 줄게. 하지만 다음엔 도망칠 수 없을 거야.\"",
        characters: {
            left: "assets/images/characters/seyoun_shy.png",
            right: "assets/images/characters/yuna_sadsmile.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_2"
    },
    "day2_final_yuna_2": {
        name: "유나",
        text: "(유나는 내 손을 잡고 서연이를 지나쳐 걷는다. 그녀의 손에서 차가운 승리감이 느껴진다.)",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        next: "day2_final_yuna_2_2"
    },
    "day2_final_yuna_2_2": {
        name: "유나",
        text: "\"후훗, 역시 넌 남들과 달라.\"",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        next: "day2_final_yuna_3"
    },
    "day2_final_yuna_3": {
        name: "유나",
        text: "\"서연 양, 미안하지만 이 사람은 나랑 할 이야기가 있어서.\"",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        choices: [
            { text: "다음", next: "day2_final_yuna_secret", condition: "knowsSecret" },
            { text: "다음", next: "day2_final_yuna_no_secret", excludeCondition: "knowsSecret" }
        ]
    },
    "day2_final_yuna_secret": {
        name: "유나",
        text: "\"학교의 '진짜' 모습에 대해서 말이야. 아까 하던 이야기, 마저 해야지?\"",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        next: "day2_final_yuna_4"
    },
    "day2_final_yuna_no_secret": {
        name: "유나",
        text: "\"우리 학교에 대해 네가 꼭 알아야 할 게 있거든. 아주 흥미로운 이야기야.\"",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_smile.png"
        },
        sunset: true,
        next: "day2_final_yuna_4"
    },
    "day2_final_yuna_4": {
        name: "나",
        text: "(유나와 함께 어두운 복도를 걸으며 그녀가 들려주는 학교의 진실에 귀를 기울였다. 그녀의 목소리는 차가웠지만, 잡은 손에서는 미세한 떨림이 느껴졌다. 우리는 어느새 어둠이 짙게 깔린 교문 앞에 서 있었다.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        next: "day2_ending_pre"
    },
    "day2_final_dain": {
        name: "나",
        text: "(서연이와 옆에 서 있는 소녀의 따가운 시선을 뒤로하고, 나는 운동장에서 손을 흔드는 다인에게 발걸음을 옮겼다.)",
        characters: {
            left: "assets/images/characters/seyoun_pout.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        choices: [
            { text: "다음", next: "day2_final_dain_betrayal", condition: "promisedFestival" },
            { text: "다음", next: "day2_final_dain_react", excludeCondition: "promisedFestival" }
        ]
    },
    "day2_final_dain_betrayal": {
        name: "서연",
        text: "\"잠깐, 전학생 군! 나랑 축제 가기로 했잖아! 그런데 지금 다인이한테 가는 거야...?\"",
        characters: {
            left: "assets/images/characters/seyoun_angry.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        next: "day2_final_dain_betrayal_2"
    },
    "day2_final_dain_betrayal_2": {
        name: "서연",
        text: "\"정말... 너무해. 나만 진심이었던 거야? (서연이의 눈에서 굵은 눈물방울이 툭 떨어지기 시작한다.)\"",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        sunset: true,
        choices: [
            { text: "서연아, 울지 마... 내가 잘못했어. 너랑 같이 갈게.", next: "day2_final_seoyeon_back_dain" },
            { text: "미안해, 서연아. 하지만 다인이랑 약속이 먼저야.", next: "day2_final_dain_react" }
        ]
    },
    "day2_final_seoyeon_back_dain": {
        name: "다인",
        text: "\"뭐야~ 전학생! 서연이를 울리면 어떡해! 좋아, 오늘은 서연이한테 양보할 테니까 내일은 꼭 나랑 놀아줘야 해?\"",
        characters: {
            left: "assets/images/characters/seyoun_shy.png",
            right: "assets/images/characters/dain_nomal.png"
        },
        sunset: true,
        next: "day2_final_seoyeon_2"
    },
    "day2_final_dain_react": {
        name: "나",
        text: "(서연이와 옆에 서 있는 소녀의 시선을 뒤로하고 다인이에게 달려갔다. 뒤에서 나지막한 목소리가 들려온다.)",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_sadsmile.png"
        },
        sunset: true,
        choices: [
            { text: "다음", next: "day2_final_dain_react_yuna_met", condition: "metYuna" },
            { text: "다음", next: "day2_final_dain_react_yuna_new", excludeCondition: "metYuna" }
        ]
    },
    "day2_final_dain_react_yuna_met": {
        name: "유나",
        text: "\"후훗... 결국 저런 활기찬 타입이 취향이었나 보네. 서연 양, 우리 둘 다 차인 것 같은데?\"",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_sadsmile.png"
        },
        sunset: true,
        next: "day2_final_dain_start"
    },
    "day2_final_dain_react_yuna_new": {
        name: "???",
        text: "\"후훗... 결국 저런 활기찬 타입이 취향이었나 보네. 서연 양, 우리 둘 다 차인 것 같은데?\"",
        characters: {
            left: "assets/images/characters/seyoun_cry.png",
            right: "assets/images/characters/yuna_sadsmile.png"
        },
        sunset: true,
        next: "day2_final_dain_start"
    },
    "day2_final_dain_start": {
        name: "다인",
        text: "(운동장 쪽으로 고개를 돌리자, 다인이가 배구공을 들고 나를 향해 손을 흔들고 있다. 그녀의 건강한 미소가 노을빛에 반짝인다.)",
        background: "assets/images/background/playground.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "day2_final_dain_2"
    },
    "day2_final_dain_2": {
        name: "다인",
        text: "\"어이! 전학생! 연습 끝나고 기다리고 있었다구! 오늘 같이 떡볶이 먹으러 가기로 한 거 안 잊었지?\"",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "day2_final_dain_3"
    },
    "day2_final_dain_3": {
        name: "나",
        text: "(서연이와 유나의 시선을 뒤로하고 다인이에게 달려갔다. 그녀의 활기찬 에너지에 복잡했던 마음이 한순간에 풀리는 기분이다.)",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "day2_final_dain_4"
    },
    "day2_final_dain_4": {
        name: "나",
        text: "(우리는 학교 앞 분식집에서 떡볶이를 먹으며 배구 이야기로 꽃을 피웠다. 다인이와 함께라면 어떤 고민도 금방 사라질 것만 같다.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        choices: [
            { text: "다음", next: "day2_final_dain_4_again", condition: "datedDainDay1" },
            { text: "다음", next: "day2_ending_pre", excludeCondition: "datedDainDay1" }
        ]
    },
    "day2_final_dain_4_again": {
        name: "다인",
        text: "\"어제도 오늘도, 너랑 먹는 떡볶이가 세상에서 제일 맛있어! 우리 내일도... 같이 올 수 있을까?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "day2_ending_pre"
    },
    "day2_final_run": {
        name: "나",
        text: "(두 사람의 시선이 너무 무서워서 나도 모르게 뒷문으로 도망치듯 빠져나왔다. 뒤에서 나를 부르는 소리가 들리는 것 같지만 돌아보지 않고 달렸다. 심장이 터질 것만 같다. 나는 숨을 헐떡이며 교문을 나섰다.)",
        background: "assets/images/background/school.png",
        character: null,
        sunset: true,
        next: "day2_final_run_2"
    },
    "day2_final_run_2": {
        name: "나",
        text: "\"(하아... 하아... 살았다. 하지만 내일 학교에 어떻게 가지? 벌써부터 걱정이 태산이네...)\"",
        background: "assets/images/background/school.png",
        sunset: true,
        choices: [
            { text: "다음", next: "day2_final_run_3", condition: "promisedFestival" },
            { text: "다음", next: "day2_ending_pre", excludeCondition: "promisedFestival" }
        ]
    },
    "day2_final_run_3": {
        name: "나",
        text: "\"(서연이랑 축제 약속도 했는데... 이렇게 도망쳐버리면 어떡하지? 내일 얼굴 보기가 정말 힘들 것 같아...)\"",
        background: "assets/images/background/school.png",
        sunset: true,
        next: "day2_ending_pre"
    },
    "day2_ending_pre": {
        name: "나",
        text: "(학교를 나서며 밤하늘을 올려다본다. 수많은 별이 반짝이며 나를 내려다보고 있다. 전학 온 지 겨우 이틀... 하지만 내 인생은 이미 거대한 소용돌이 속에 휘말린 것 같다. 앞으로 어떤 미래가 나를 기다리고 있을까?)",
        background: "assets/images/background/school.png",
        character: null,
        night: true,
        next: "end_demo_real"
    },
    "end_demo_real": {
        name: "시스템",
        text: "(감미로운 피아노 선율이 흐르며 여운을 남깁니다...)",
        fade: true,
        tbc: true,
        characters: {
            left: "assets/images/characters/seyoun_nomal.png",
            center: "assets/images/characters/dain_nomal.png",
            right: "assets/images/characters/yuna_nomal.png"
        },
        silhouette: true,
        next: "end_demo_real_2"
    },
    "end_demo_real_2": {
        name: "시스템",
        text: "당신은 학교의 숨겨진 진실에 한 걸음 더 다가갔습니다.",
        fade: true,
        next: "end_demo_real_3"
    },
    "end_demo_real_3": {
        name: "시스템",
        text: "축하합니다! 당신은 데모 버전의 모든 시나리오를 완료하셨습니다.\n\n서연이와의 설레는 로맨스, 유나와의 미스터리한 진실, 그리고 다인이와의 활기찬 우정... 당신의 선택이 어떤 결말을 맺을지, 정식 버전에서 확인해주세요! 플레이해주셔서 감사합니다.",
        character: null,
        fade: true,
        choices: [
            { text: "처음으로 돌아가기", next: "index.html" }
        ]
    }
};
