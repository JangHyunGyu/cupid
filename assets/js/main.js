const API_ENDPOINT = "https://chatbot-api.yama5993.workers.dev/";
let currentSceneId = "start";
let isTyping = false;
let gameState = {
    playerName: "주인공" // 기본 이름
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
    else if (bgUrl.includes('nurse_room')) locationName = isEn ? "Nurse's Office" : "양호실";
    else if (bgUrl.includes('library')) locationName = isEn ? "Library" : "도서관";
    else if (bgUrl.includes('home_room')) locationName = isEn ? "My Room" : "주인공의 방";

    // 시스템 프롬프트 설정
    const knowsName = gameState[`knowsName_${scene.name}`];
    
    // 캐릭터별 기본 성격 설정
    const defaultPersonalities = isEn ? {
        "Seoyeon": "Kind and friendly student council president",
        "Yuna": "Mysterious and quiet girl with a cold atmosphere",
        "Dain": "Energetic and lively volleyball club ace",
        "Teacher": "Caring and diligent homeroom teacher",
        "Nurse": "Provocative and mature school nurse"
    } : {
        "서연": "다정하고 친절한 학생회장",
        "유나": "신비롭고 조용한 분위기의 소녀",
        "다인": "에너지 넘치고 활기찬 배구부 에이스",
        "선생님": "학생을 걱정하는 성실한 담임 선생님",
        "양호선생님": "도발적이고 성숙한 분위기의 양호 선생님"
    };

    const charPersonality = scene.personality || defaultPersonalities[scene.name] || (isEn ? "A character from the school" : "학교의 캐릭터");

    let systemPrompt = "";
    if (isEn) {
        systemPrompt = `You are the character '${scene.name}' from the visual novel game 'Cupid'.
Current Location: ${locationName}
Current Situation: ${scene.context || "Talking with the user."}
Personality: ${charPersonality}
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
   - Firmly reject or change the subject if the user makes overly suggestive or offensive requests.`;
    } else {
        systemPrompt = `당신은 미연시 게임 'Cupid'의 캐릭터 '${scene.name}'입니다. 
현재 장소: ${locationName}
현재 상황: ${scene.context || "사용자와 대화 중입니다."}
성격: ${charPersonality}
${scene.extra_guideline ? `추가 지침: ${scene.extra_guideline}` : ""}

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
   - 지나치게 선정적이거나 불쾌감을 주는 요구는 캐릭터 성격에 맞게 단호하게 거절하거나 화제를 전환하세요.`;
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
        const reply = data?.choices?.[0]?.message?.content?.trim();
        
        if (reply) {
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
                }                if (choice.setFlags && Array.isArray(choice.setFlags)) {
                    choice.setFlags.forEach(flag => {
                        gameState[flag] = true;
                    });
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
