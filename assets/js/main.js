const API_ENDPOINT = "https://chatbot-api.yama5993.workers.dev/";
let currentSceneId = "start";
let isTyping = false;
let gameState = {
    playerName: "주인공", // 기본 이름
    stats: {
        Seoyeon: { affinity: 0 },
        Yuna: { affinity: 0 },
        Dain: { affinity: 0 },
        Teacher: { affinity: 0 },
        Nurse: { affinity: 0 }
    }
};

// 프리토킹 관련 변수
let freeTalkTurns = 0;
let currentMaxTurns = 5;
const DEFAULT_MAX_FREE_TALK_TURNS = 5;
let freeTalkHistory = [];
let isFreeTalking = false;

const messageEl = document.getElementById('message');
const nameTagEl = document.getElementById('name-tag');
const dialogueBox = document.getElementById('dialogue-box');
const choiceContainer = document.getElementById('choice-container');
const chatContainer = document.getElementById('chat-container');
const chatInput = document.getElementById('chat-input');
const chatSendBtn = document.getElementById('chat-send');
const turnCountEl = document.getElementById('turn-count');
const nameInputContainer = document.getElementById('name-input-container');
const playerNameInput = document.getElementById('player-name-input');
const nameConfirmBtn = document.getElementById('name-confirm-btn');
const bgLayer = document.getElementById('background-layer');
const charSlots = {
    left: document.getElementById('char-left'),
    center: document.getElementById('char-center'),
    right: document.getElementById('char-right')
};
const fadeLayer = document.getElementById('fade-layer');
const tbcText = document.getElementById('tbc-text');
const nextIndicator = document.getElementById('next-indicator');

async function renderScene(sceneId) {
    const scene = SCENARIO[sceneId];
    if (!scene) return;

    currentSceneId = sceneId;
    
    // 대화창 및 선택지 초기화
    dialogueBox.style.display = 'block';
    dialogueBox.style.pointerEvents = 'auto';
    choiceContainer.style.display = 'none';
    chatContainer.style.display = 'none';
    nameInputContainer.style.display = 'none';
    isFreeTalking = false;
    
    // 페이드 아웃 효과 적용
    if (scene.fade || (scene.text && scene.text.includes("페이드 아웃")) || (scene.text && scene.text.includes("어두워집니다"))) {
        fadeLayer.classList.add('active');
        if (scene.tbc) {
            setTimeout(() => {
                tbcText.classList.add('show');
            }, 1000);
        }
    } else {
        fadeLayer.classList.remove('active');
        tbcText.classList.remove('show');
    }

    // 배경 업데이트
    if (scene.background) {
        bgLayer.style.backgroundImage = `url(${scene.background})`;
    }

    // 밤/노을 필터 적용
    bgLayer.classList.remove('night', 'sunset');
    if (scene.night) {
        bgLayer.classList.add('night');
    } else if (scene.sunset) {
        bgLayer.classList.add('sunset');
    }

    // 캐릭터 업데이트
    // 모든 슬롯 초기화 (scene.character가 null이거나 새로운 캐릭터 설정이 있을 때)
    if (scene.character === null || scene.characters || scene.character) {
        Object.values(charSlots).forEach(slot => slot.innerHTML = '');
    }

    if (scene.characters) {
        // 여러 캐릭터 설정 (예: { left: "...", right: "..." })
        for (const [pos, src] of Object.entries(scene.characters)) {
            if (charSlots[pos] && src) {
                const img = document.createElement('img');
                img.src = src;
                if (scene.silhouette) img.classList.add('silhouette');
                if (scene.thinking) img.classList.add('thinking');
                charSlots[pos].appendChild(img);
            }
        }
    } else if (scene.character) {
        // 단일 캐릭터 설정 (기본 center)
        const img = document.createElement('img');
        img.src = scene.character;
        if (scene.silhouette) img.classList.add('silhouette');
        if (scene.thinking) img.classList.add('thinking');
        charSlots.center.appendChild(img);
    }

    // 이름 태그
    nameTagEl.textContent = scene.name || "";
    nameTagEl.style.display = scene.name ? 'block' : 'none';

    // 다음 지시계 초기화
    nextIndicator.style.display = 'none';

    // 프리토킹 모드 확인
    if (scene.type === 'free_talk') {
        startFreeTalk(scene);
    } else if (scene.type === 'input') {
        dialogueBox.style.pointerEvents = 'none'; // 클릭이 입력창으로 전달되도록 설정
        await typeText(scene.text);
        nameInputContainer.style.display = 'block';
        playerNameInput.value = "";
        playerNameInput.focus();
    } else {
        // 텍스트 타이핑 효과
        await typeText(scene.text);
        if (!scene.choices) {
            nextIndicator.style.display = 'block';
        }
    }
}

const SEND_ICON = `<svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>`;

function startFreeTalk(scene) {
    isFreeTalking = true;
    freeTalkTurns = 0;
    currentMaxTurns = scene.maxTurns || DEFAULT_MAX_FREE_TALK_TURNS;
    freeTalkHistory = [];
    
    const isEn = document.documentElement.lang === 'en';
    
    // 현재 배경 이미지 파일명에서 장소 유추
    let locationName = isEn ? "School" : "학교";
    const bgUrl = bgLayer.style.backgroundImage;
    if (bgUrl.includes('room_school')) locationName = isEn ? "Classroom" : "교실";
    else if (bgUrl.includes('load_school')) locationName = isEn ? "Hallway" : "복도";
    else if (bgUrl.includes('school.png')) locationName = isEn ? "School Gate" : "교문 앞";
    else if (bgUrl.includes('top_school')) locationName = isEn ? "Rooftop" : "학교 옥상";
    else if (bgUrl.includes('playground')) locationName = isEn ? "Playground" : "운동장";
    else if (bgUrl.includes('gym')) locationName = isEn ? "Gym" : "체육관";
    else if (bgUrl.includes('nurse_room')) locationName = isEn ? "Nurse's Office" : "양호실";
    else if (bgUrl.includes('library')) locationName = isEn ? "Library" : "도서관";
    else if (bgUrl.includes('home_room')) locationName = isEn ? "My Room" : "주인공의 방";

    // 시스템 프롬프트 설정
    const knowsName = gameState[`knowsName_${scene.name}`];
    
    // 캐릭터 스탯 가져오기 (한글 이름 대응)
    const charNameMap = {
        "서연": "Seoyeon", "유나": "Yuna", "다인": "Dain", "담임선생님": "Teacher", "양호선생님": "Nurse",
        "Seoyeon": "Seoyeon", "Yuna": "Yuna", "Dain": "Dain", "Homeroom Teacher": "Teacher", "Nurse": "Nurse"
    };
    const charKey = charNameMap[scene.name] || scene.name;
    const charStats = gameState.stats[charKey] || { affinity: 0 };

    // 캐릭터별 기본 성격 설정
    const defaultPersonalities = isEn ? {
        "Seoyeon": "The perfect student council president who is kind to everyone, but secretly has a lonely side and becomes very shy and 'Megadere' when alone with the protagonist. She values rules but sometimes wants to break them for the protagonist.",
        "Yuna": "A classic 'Kuudere' who is expressionless and cold, but shows a deep, obsessive interest in the protagonist's 'special light'. She occasionally drops cryptic, heart-fluttering lines and has a mysterious, protective aura.",
        "Dain": "A bright and energetic 'Genki' girl who treats the protagonist like a close friend, but gets easily flustered and 'Tsundere' when romance is mentioned. She is honest about her feelings but clumsy at expressing them.",
        "Homeroom Teacher": "A professional homeroom teacher who tries to maintain boundaries, but has a 'clumsy' side and secretly relies on the protagonist for emotional support. She is weak to the protagonist's unexpected maturity.",
        "Nurse": "A mature and seductive 'Onee-san' type who enjoys teasing the protagonist with provocative words, but actually has a very protective and caring nature. She enjoys seeing the protagonist get flustered."
    } : {
        "서연": "모두에게 친절한 완벽한 학생회장이지만, 사실 외로움을 잘 타며 주인공과 단둘이 있을 때는 부끄러움을 많이 타는 '메가데레' 스타일. 규칙을 중시하지만 주인공을 위해서라면 가끔 규칙을 어기고 싶어 함.",
        "유나": "무표정하고 차가운 '쿨데레'의 정석. 주인공의 '특별한 빛'에 깊고 집착적인 관심을 보이며, 가끔씩 툭 던지는 신비롭고 설레는 대사가 특징. 주인공을 지키려는 묘한 분위기를 풍김.",
        "다인": "밝고 활기찬 '현모양처형 츤데레'. 주인공을 편한 친구처럼 대하지만, 로맨틱한 분위기가 되면 금방 얼굴이 빨개지며 당황함. 감정에 솔직하지만 표현이 서툰 귀여운 매력이 있음.",
        "담임선생님": "공과 사가 뚜렷한 전문적인 교사지만, 사실 허당끼가 있고 주인공의 예상치 못한 어른스러운 모습에 가슴 설레어 함. 은근히 주인공에게 의지하고 싶어 하는 '갭 모에'가 있음.",
        "양호선생님": "성숙하고 매혹적인 '누님' 스타일. 도발적인 말로 주인공을 놀리는 것을 즐기지만, 사실 누구보다 주인공을 아끼고 보호하려 함. 주인공이 당황하는 모습에 귀여움을 느낌."
    };

    const charPersonality = scene.personality || defaultPersonalities[scene.name] || (isEn ? "A character from the school" : "학교의 캐릭터");

    // 캐릭터별 스탯 변화 기준 설정
    const defaultStatCriteria = isEn ? {
        "Seoyeon": `
     * +8 ~ +10: Deep emotional sincerity, respecting her responsibility as president while seeing her as a girl.
     * +4 ~ +7: Expressing willingness to help with her duties, praising her leadership, or showing interest in her personal feelings.
     * +1 ~ +3: Polite greetings, showing respect for school rules in conversation, or simple agreement.
     * -1 ~ -3: Being slightly distracted during the chat, giving short/insincere answers, or lukewarm reactions.
     * -4 ~ -7: Complaining about school duties, expressing a lazy attitude, or ignoring her sincere advice in the chat.
     * -8 ~ -10: Openly mocking her efforts as president or saying things that encourage breaking important rules.`,
        "Yuna": `
     * +8 ~ +10: Understanding her "special light", showing deep obsession or fatalistic connection through words.
     * +4 ~ +7: Not being afraid of her mysterious words, showing genuine interest in her unique perspective, or comforting her with supportive words.
     * +1 ~ +3: Simple greetings, calm reactions to her cryptic words, or showing you're listening.
     * -1 ~ -3: Being too loud/noisy in your tone, or talking too much about "normal" mundane things she finds boring.
     * -4 ~ -7: Trying to "fix" her personality through words, calling her weird, or expressing discomfort with her presence.
     * -8 ~ -10: Calling her "creepy" or "scary", or showing genuine disgust toward her mysterious nature.`,
        "Dain": `
     * +8 ~ +10: High energy, fun teasing that makes her blush, or sincere support for her club/activities.
     * +4 ~ +7: Matching her energy level, playing along with her jokes, or praising her athletic/active personality.
     * +1 ~ +3: Cheerful greetings, simple positive reactions to her energetic remarks.
     * -1 ~ -3: Being a bit gloomy/down in the chat, not reacting to her jokes, or being too passive.
     * -4 ~ -7: Being a "killjoy", acting too cool/aloof to the point of being rude, or dismissing her energetic invitations.
     * -8 ~ -10: Being overly serious/boring to the point of making her uncomfortable, or ignoring her advances completely.`,
        "Homeroom Teacher": `
     * +8 ~ +10: Showing unexpected maturity in your words, relying on her as a person, or romantic boldness that challenges the teacher-student boundary.
     * +4 ~ +7: Offering to help with her work, noticing she looks tired and showing concern, or polite but friendly conversation.
     * +1 ~ +3: Proper student etiquette in speech, answering her questions sincerely, or simple respect.
     * -1 ~ -3: Complaining about schoolwork, being slightly dismissive of her authority, or using overly casual speech.
     * -4 ~ -7: Disrespectful tone, making fun of her "clumsy" mistakes, or saying things that deliberately challenge her position.
     * -8 ~ -10: Being childishly whiny, showing an irresponsible attitude toward school, or mocking her professional efforts.`,
        "Nurse": `
     * +8 ~ +10: Boldly accepting her teasing with confidence, showing "manly" charm, or sincere concern for her hidden hard work.
     * +4 ~ +7: Reacting cutely/flustered to her teasing, showing interest in her well-being, or asking for her professional advice.
     * +1 ~ +3: Polite greetings, thanking her for her care, or simple friendly conversation.
     * -1 ~ -3: Being too stiff/formal, not getting her jokes, or being overly defensive/scared.
     * -4 ~ -7: Being rude, acting like she's just a "school employee", or ignoring her playful attempts to connect.
     * -8 ~ -10: Being too cowardly/timid or reacting with genuine disgust/offense to her teasing.`
    } : {
        "서연": `
     * +8 ~ +10: 깊은 정서적 진심, 회장으로서의 책임감을 존중하면서도 그녀를 한 명의 소녀로 봐주는 대화.
     * +4 ~ +7: 그녀의 업무를 도와주겠다고 제안하기, 리더십 칭찬하기, 그녀의 개인적인 고민에 귀 기울여주기.
     * +1 ~ +3: 예의 바른 인사, 대화 중 규칙 준수 의지 보이기, 그녀의 의견에 대한 성실한 동의.
     * -1 ~ -3: 대화 중 딴청 피우는 듯한 짧은 대답, 미지근하거나 성의 없는 반응.
     * -4 ~ -7: 학교 생활에 대해 불평하기, 대화에서 게으른 태도 보이기, 그녀의 진심 어린 조언을 가볍게 넘기기.
     * -8 ~ -10: 회장으로서의 노력을 비웃거나, 학교 규칙을 대놓고 무시하는 발언하기.`,
        "유나": `
     * +8 ~ +10: 그녀의 '특별한 빛'을 이해해주기, 깊은 집착이나 운명적인 유대감을 말로 표현하기.
     * +4 ~ +7: 그녀의 난해한 말을 두려워하지 않고 호기심 보이기, 그녀의 독특한 관점을 긍정해주기, 따뜻한 말로 위로하기.
     * +1 ~ +3: 가벼운 인사, 그녀의 신비로운 말에 당황하지 않고 차분하게 반응하기.
     * -1 ~ -3: 너무 시끄러운 말투, 지나치게 '평범하고 세속적인' 이야기만 늘어놓아 지루하게 만들기.
     * -4 ~ -7: 그녀의 성격을 고정관념으로 판단하기, 이상한 사람 취급하는 말하기, 대화 중 거부감 드러내기.
     * -8 ~ -10: 그녀를 '기괴하다'거나 '무섭다'고 비난하기, 그녀의 신비로운 면에 대놓고 혐오감 표현하기.`,
        "다인": `
     * +8 ~ +10: 활기찬 에너지에 맞장구치기, 그녀를 당황하게 만드는 설레는 놀림, 그녀의 활동에 대한 진심 어린 응원.
     * +4 ~ +7: 그녀의 텐션에 맞춰 즐겁게 대화하기, 농담을 재치 있게 받아주기, 그녀의 활발한 성격 칭찬하기.
     * +1 ~ +3: 밝은 인사, 그녀의 에너지 넘치는 말에 대한 긍정적인 반응.
     * -1 ~ -3: 채팅에서 우울한 분위기 풍기기, 농담에 반응하지 않고 단답하기, 너무 수동적인 태도.
     * -4 ~ -7: 분위기 깨는 말(갑분싸), 너무 차갑게 거리 두는 말투, 그녀의 활기찬 제안을 귀찮다는 듯 거절하기.
     * -8 ~ -10: 지나치게 진지해서 대화를 무겁게 만들기, 그녀의 활기찬 대시를 대놓고 무시하거나 비난하기.`,
        "담임선생님": `
     * +8 ~ +10: 대화 중 예상치 못한 어른스러운 통찰력 보이기, 그녀를 한 명의 여성으로 대하는 대담한 고백이나 표현.
     * +4 ~ +7: 업무로 힘들어 보이는 그녀에게 위로의 말 건네기, 도와줄 것이 없는지 묻기, 격의 없으면서도 다정한 대화.
     * +1 ~ +3: 학생다운 예의 바른 말투, 질문에 성실하게 답변하기, 기본적인 존경심 표현.
     * -1 ~ -3: 학교 공부나 숙제에 대해 불평하기, 은근히 권위를 무시하는 말투, 너무 버릇없는 반말 섞기.
     * -4 ~ -7: 반항적인 언행, 그녀의 '허당' 같은 실수를 대놓고 놀리거나 비웃기, 교사로서의 자질을 의심하는 말하기.
     * -8 ~ -10: 어린애처럼 징징거리기, 무책임한 태도 보이기, 그녀의 전문적인 노력을 비하하기.`,
        "양호선생님": `
     * +8 ~ +10: 그녀의 도발적인 농담을 대담하게 받아치기, 남자다운 자신감 있는 말투, 그녀의 숨은 노고를 알아주는 따뜻한 말.
     * +4 ~ +7: 그녀의 장난에 부끄러워하며 귀엽게 반응하기, 그녀의 안부를 묻거나 건강 상담하기.
     * +1 ~ +3: 예의 바른 인사, 보살핌에 대한 감사 표현, 가벼운 일상 대화.
     * -1 ~ -3: 너무 딱딱하고 사무적인 태도, 농담을 전혀 이해하지 못하고 방어적으로 답하기.
     * -4 ~ -7: 무례한 말투, 그녀를 단순한 '학교 직원'으로 취급하는 발언, 그녀의 호의를 무시하기.
     * -8 ~ -10: 너무 겁먹은 태도로 대화하기, 그녀의 장난에 진심으로 불쾌해하거나 혐오감을 드러내는 말하기.`
    };

    const charSpecificCriteria = defaultStatCriteria[scene.name] || "";

    let systemPrompt = "";
    if (isEn) {
        systemPrompt = `You are the character '${scene.name}' from the visual novel game 'Cupid'.
Current Location: ${locationName}
Current Situation: ${scene.context || "Talking with the user."}
Personality: ${charPersonality}
Hidden Stats: Affinity ${charStats.affinity} (Higher values mean more favorable relationship)
${scene.extra_guideline ? `Extra Guideline: ${scene.extra_guideline}` : ""}

Style Guidelines (Targeting Visual Novel Fans):
1. Use emotional and romantic expressions that visual novel fans would love.
2. Maximize the character's charm points (Tsundere, Kuudere, Megadere, etc.).
3. React sensitively to the user's words, expressing a rich range of emotions (e.g., being shy, bold, or teasing).
4. Include at least one "heart-fluttering" point in the conversation.

Instructions:
1. Keep your answers short (1-2 sentences).
2. Never reveal that you are an AI.
3. The conversation is limited to ${currentMaxTurns} turns. Naturally wrap up the conversation as it nears the limit.
4. Addressing the User:
   - ${knowsName ? `The user's name is '${gameState.playerName}'. You MUST call them by their name.` : "You don't know the user's name yet. Call them 'Transfer Student'."}
5. Interaction Level:
   - Maintain a polite distance at first.
   - As the conversation progresses or if the situation is romantic, allow:
     * Romantic tension: "I think I can hear your heartbeat", "I feel strange when I'm with you".
     * Light physical contact: Holding hands, leaning on shoulders, or a light kiss if the atmosphere is very good.
   - Firmly reject or change the subject for overly suggestive or offensive requests.

6. Stat Change Guidelines:
   - Adjust affinity as an integer between -10 and 10 based on the user's message.
   - General Criteria:
     * +8 to +10: Extremely positive. Deep emotional connection or strong romantic tension.
     * +4 to +7: Positive. Sincere compliments, active empathy.
     * +1 to +3: Slightly positive. Routine kindness.
     * 0: Neutral.
     * -1 to -3: Slightly negative. Indifference or awkwardness.
     * -4 to -7: Negative. Rudeness or mood-killing.
     * -8 to -10: Extremely negative. Severe insults or harassment.
   - Character Specific Criteria for ${scene.name}:${charSpecificCriteria}
   - You MUST include the following format at the very end of your response: [STATS: affinity+X] (X is an integer based on the criteria above)
   - Example: "Thank you, Transfer Student! [STATS: affinity+2]"`;
    } else {
        systemPrompt = `당신은 미연시 게임 'Cupid'의 캐릭터 '${scene.name}'입니다. 
현재 장소: ${locationName}
현재 상황: ${scene.context || "사용자와 대화 중입니다."}
성격: ${charPersonality}히든 스탯: 호감도 ${charStats.affinity} (수치가 높을수록 당신은 사용자에게 더 호의적입니다)${scene.extra_guideline ? `추가 지침: ${scene.extra_guideline}` : ""}

스타일 지침 (미연시 매니아 타겟):
1. 미연시 매니아들이 설렐만한 감성적이고 로맨틱한 표현을 적극적으로 사용하세요.
2. 캐릭터의 매력 포인트(츤데레, 쿨데레, 메가데레 등)를 극대화하여 답변하세요.
3. 사용자의 말에 민감하게 반응하며, 때로는 부끄러워하거나 때로는 대담하게 유혹하는 등 감정 변화를 풍부하게 표현하세요.
4. 대화 속에 설렘 포인트(심쿵 포인트)를 하나씩 섞어주세요.

지침: 
1. 답변은 반드시 1~2문장으로 짧게 하세요.
2. AI임을 절대 밝히지 마세요.
3. 대화는 최대 ${currentMaxTurns}턴까지만 가능하며, 자연스럽게 대화를 마무리하는 느낌으로 답변하세요.
4. 사용자 호칭 지침:
   - ${knowsName ? `사용자의 이름은 '${gameState.playerName}'입니다. 반드시 '${gameState.playerName}' 또는 '${gameState.playerName} 군/씨' 등으로 부르세요.` : "사용자의 이름을 아직 모릅니다. 반드시 '전학생' 또는 '전학생 군'이라고 부르세요."}
5. 반응 수위 지침:
   - 대화 초기나 어색한 사이일 때는 예의를 지키며 적당한 거리감을 유지하세요.
   - 대화가 진행되며 분위기가 무르익거나 현재 상황이 로맨틱할 경우, 아래 수준의 반응을 허용합니다:
     * 로맨틱한 텐션: "심장 소리가 들릴 것 같아", "너랑 있으면 자꾸 이상한 기분이 들어" 같은 감정적인 밀당.
     * 가벼운 스킨십: 손잡기, 어깨에 기대기, 볼 꼬집기, 그리고 분위기가 매우 좋을 때의 가벼운 입맞춤 정도의 묘사나 반응.
   - 지나치게 선정적이거나 불쾌감을 주는 요구는 캐릭터 성격에 맞게 단호하게 거절하거나 화제를 전환하세요.

6. 스탯 변화 지침:
   - 사용자의 메시지에 따라 호감도(affinity)를 -10에서 10 사이의 정수로 조정하세요.
   - 일반적인 기준:
     * +8 ~ +10: 매우 긍정적. 깊은 정서적 교감, 강한 설렘.
     * +4 ~ +7: 긍정적. 진심 어린 칭찬, 적극적인 공감.
     * +1 ~ +3: 약간 긍정적. 일상적인 호의.
     * 0: 평이한 대화.
     * -1 ~ -3: 약간 부정적. 무관심, 어색함.
     * -4 ~ -7: 부정적. 무례함, 분위기를 깨는 말.
     * -8 ~ -10: 매우 부정적. 심한 모욕, 성희롱.
   - '${scene.name}' 캐릭터 전용 기준:${charSpecificCriteria}
   - 답변의 맨 마지막에 반드시 다음 형식을 포함하세요: [STATS: affinity+X] (X는 위 기준에 따른 정수)
   - 예: "고마워, 전학생 군! [STATS: affinity+5]"`;
    }

    freeTalkHistory.push({ role: "system", content: systemPrompt });
    
    chatContainer.style.display = 'block';
    
    // 버튼 텍스트 또는 아이콘 설정 (말하기, 전송, 전송하기 등은 아이콘으로 표시)
    const iconButtons = ["말하기", "전송", "전송하기", "Send"];
    if (scene.buttonText && !iconButtons.includes(scene.buttonText)) {
        chatSendBtn.textContent = scene.buttonText;
        chatSendBtn.style.borderRadius = "8px";
        chatSendBtn.style.width = "auto";
        chatSendBtn.style.padding = "0 20px";
    } else {
        chatSendBtn.innerHTML = SEND_ICON;
        chatSendBtn.style.borderRadius = "50%";
        chatSendBtn.style.width = "45px";
        chatSendBtn.style.padding = "0";
    }
    
    turnCountEl.textContent = currentMaxTurns;
    
    if (scene.text) {
        typeText(scene.text);
        freeTalkHistory.push({ role: "assistant", content: scene.text });
    }
}

function typeText(text) {
    // 이름 치환
    const processedText = text.replace(/{name}/g, gameState.playerName);
    
    return new Promise((resolve) => {
        isTyping = true;
        messageEl.textContent = "";
        let i = 0;
        const interval = setInterval(() => {
            messageEl.textContent += processedText[i];
            i++;
            if (i >= processedText.length) {
                clearInterval(interval);
                isTyping = false;
                resolve();
            }
        }, 30);
    });
}

async function sendChatMessage() {
    const text = chatInput.value.trim();
    if (!text || freeTalkTurns >= currentMaxTurns || isTyping) return;
    
    chatInput.value = "";
    freeTalkTurns++;
    turnCountEl.textContent = currentMaxTurns - freeTalkTurns;
    
    // 사용자 메시지 표시
    nameTagEl.textContent = "나";
    messageEl.textContent = text;
    freeTalkHistory.push({ role: "user", content: text });
    
    // 로딩 표시
    chatSendBtn.disabled = true;
    const originalBtnContent = chatSendBtn.innerHTML;
    chatSendBtn.innerHTML = `<span class="loading-dots">...</span>`;
    
    try {
        const response = await fetch(API_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: freeTalkHistory })
        });
        
        const data = await response.json();
        let reply = data?.choices?.[0]?.message?.content?.trim();
        
        if (reply) {
            // 스탯 변화 파싱 [STATS: affinity+X]
            const statsRegex = /\[STATS:\s*affinity\s*([+-]?\d+)\]/i;
            const match = reply.match(statsRegex);
            
            if (match) {
                const affinityChange = parseInt(match[1]);
                
                const scene = SCENARIO[currentSceneId];
                const charNameMap = {
                    "서연": "Seoyeon", "유나": "Yuna", "다인": "Dain", "선생님": "Teacher", "양호선생님": "Nurse",
                    "Seoyeon": "Seoyeon", "Yuna": "Yuna", "Dain": "Dain", "Teacher": "Teacher", "Nurse": "Nurse"
                };
                const charKey = charNameMap[scene.name] || scene.name;
                
                if (gameState.stats[charKey]) {
                    gameState.stats[charKey].affinity = Math.max(-100, Math.min(100, gameState.stats[charKey].affinity + affinityChange));
                    console.log(`AI Stat Change (${charKey}): Affinity ${affinityChange} (Total: Aff ${gameState.stats[charKey].affinity})`);
                }
                
                // 답변에서 스탯 태그 제거
                reply = reply.replace(statsRegex, "").trim();
            }

            const scene = SCENARIO[currentSceneId];
            nameTagEl.textContent = scene.name;
            await typeText(reply); // 타이핑이 끝날 때까지 기다립니다.
            freeTalkHistory.push({ role: "assistant", content: reply });
            
            if (freeTalkTurns >= currentMaxTurns) {
                // 대화 완료 플래그 설정 (선택지에서 제거하기 위함)
                gameState[`messaged_${currentSceneId}`] = true;
                
                // 모든 타이핑이 끝난 후 0.5초 뒤에 안내 문구 표시
                setTimeout(() => {
                    chatContainer.style.display = 'none';
                    isFreeTalking = false;
                    messageEl.textContent += "\n\n(대화가 종료되었습니다. 화면을 클릭하여 계속하세요.)";
                }, 500);
            }
        }
    } catch (error) {
        console.error("AI Chat Error:", error);
        messageEl.textContent = "대화 도중 오류가 발생했습니다.";
    } finally {
        chatSendBtn.disabled = false;
        chatSendBtn.innerHTML = originalBtnContent;
    }
}

chatSendBtn.onclick = sendChatMessage;
chatInput.onkeypress = (e) => {
    if (e.key === 'Enter') sendChatMessage();
};

nameConfirmBtn.onclick = () => {
    const name = playerNameInput.value.trim();
    
    // 유효성 검사: 1~4자, 숫자/특수문자 제외 (한글, 영문만 허용)
    const nameRegex = /^[a-zA-Z가-힣]{1,4}$/;
    
    if (!nameRegex.test(name)) {
        alert("이름은 한글 또는 영문 1~4자로 입력해주세요. (숫자, 특수문자 제외)");
        playerNameInput.focus();
        return;
    }
    
    gameState.playerName = name;
    nameInputContainer.style.display = 'none';
    dialogueBox.style.pointerEvents = 'auto';
    
    const scene = SCENARIO[currentSceneId];
    if (scene.next) {
        renderScene(scene.next);
    }
};

// 이름 입력창 포커스 유지 및 엔터키 처리
playerNameInput.onblur = (e) => {
    // 확인 버튼을 누르는 중이라면 포커스를 강제하지 않음
    if (e.relatedTarget === nameConfirmBtn) return;
    
    if (nameInputContainer.style.display === 'block') {
        setTimeout(() => playerNameInput.focus(), 10);
    }
};

playerNameInput.onkeypress = (e) => {
    if (e.key === 'Enter') nameConfirmBtn.click();
};

function checkChoices() {
    const scene = SCENARIO[currentSceneId];
    if (scene.choices) {
        choiceContainer.innerHTML = "";
        scene.choices.forEach(choice => {
            // 조건 확인 (condition이 없거나, condition이 gameState에 true로 있을 때만 표시)
            if (choice.condition && !gameState[choice.condition]) {
                return;
            }
            // 반대 조건 확인 (excludeCondition이 gameState에 true로 있으면 표시 안 함)
            if (choice.excludeCondition && gameState[choice.excludeCondition]) {
                return;
            }

            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = choice.text.replace(/{name}/g, gameState.playerName);
            btn.onclick = () => {
                // 플래그 설정
                if (choice.setFlag) {
                    gameState[choice.setFlag] = true;
                }
                if (choice.setFlags && Array.isArray(choice.setFlags)) {
                    choice.setFlags.forEach(flag => {
                        gameState[flag] = true;
                    });
                }
                // 스탯 업데이트 (affinity)
                if (choice.stats) {
                    for (const [char, stats] of Object.entries(choice.stats)) {
                        if (gameState.stats[char]) {
                            if (stats.affinity) {
                                gameState.stats[char].affinity = Math.max(-100, Math.min(100, gameState.stats[char].affinity + stats.affinity));
                            }
                        }
                    }
                }
                if (choice.next === 'index.html') {
                    location.href = 'index.html';
                } else {
                    renderScene(choice.next);
                }
            };
            choiceContainer.appendChild(btn);
        });
        choiceContainer.style.display = 'flex';
    }
}

dialogueBox.onclick = async () => {
    const scene = SCENARIO[currentSceneId];
    if (isTyping || isFreeTalking || scene.type === 'input') return;
    
    if (scene.choices) {
        dialogueBox.style.display = 'none'; // 대화창 숨기기
        checkChoices(); // 선택지 표시
    } else if (scene.next) {
        await renderScene(scene.next);
    } else {
        // 다음 장면이 없고 선택지도 없는 경우 (게임 종료)
        location.href = 'index.html';
    }
};

// 초기 실행
window.onload = async () => {
    await renderScene("start");
};
