const API_ENDPOINT = "https://chatbot-api.yama5993.workers.dev/";
let currentSceneId = "start";
let isTyping = false;
let gameState = {};

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
const bgLayer = document.getElementById('background-layer');
const charSlots = {
    left: document.getElementById('char-left'),
    center: document.getElementById('char-center'),
    right: document.getElementById('char-right')
};
const fadeLayer = document.getElementById('fade-layer');
const tbcText = document.getElementById('tbc-text');

async function renderScene(sceneId) {
    const scene = SCENARIO[sceneId];
    if (!scene) return;

    currentSceneId = sceneId;
    
    // 대화창 및 선택지 초기화
    dialogueBox.style.display = 'block';
    choiceContainer.style.display = 'none';
    chatContainer.style.display = 'none';
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

    // 프리토킹 모드 확인
    if (scene.type === 'free_talk') {
        startFreeTalk(scene);
    } else {
        // 텍스트 타이핑 효과
        await typeText(scene.text);
    }
}

function startFreeTalk(scene) {
    isFreeTalking = true;
    freeTalkTurns = 0;
    currentMaxTurns = scene.maxTurns || DEFAULT_MAX_FREE_TALK_TURNS;
    freeTalkHistory = [];
    
    // 시스템 프롬프트 설정
    const systemPrompt = `당신은 미연시 게임 'Cupid'의 캐릭터 '${scene.name}'입니다. 
현재 상황: ${scene.context || "사용자와 대화 중입니다."}
성격: ${scene.personality || "다정하고 친절한 학생회장"}
${scene.extra_guideline ? `추가 지침: ${scene.extra_guideline}` : ""}
지침: 
1. 답변은 반드시 1~2문장으로 짧게 하세요.
2. AI임을 절대 밝히지 마세요.
3. 대화는 최대 ${currentMaxTurns}턴까지만 가능하며, 자연스럽게 대화를 마무리하는 느낌으로 답변하세요.
4. 반응 수위 지침:
   - 대화 초기나 어색한 사이일 때는 예의를 지키며 적당한 거리감을 유지하세요.
   - 대화가 진행되며 분위기가 무르익거나 현재 상황이 로맨틱할 경우, 아래 수준의 반응을 허용합니다:
     * 로맨틱한 텐션: "심장 소리가 들릴 것 같아", "너랑 있으면 자꾸 이상한 기분이 들어" 같은 감정적인 밀당.
     * 가벼운 스킨십: 손잡기, 어깨에 기대기, 볼 꼬집기, 그리고 분위기가 매우 좋을 때의 가벼운 입맞춤 정도의 묘사나 반응.
   - 지나치게 선정적이거나 불쾌감을 주는 요구는 캐릭터 성격에 맞게 단호하게 거절하거나 화제를 전환하세요.`;

    freeTalkHistory.push({ role: "system", content: systemPrompt });
    
    chatContainer.style.display = 'block';
    chatSendBtn.textContent = scene.buttonText || "말하기";
    turnCountEl.textContent = currentMaxTurns;
    
    if (scene.text) {
        typeText(scene.text);
        freeTalkHistory.push({ role: "assistant", content: scene.text });
    }
}

function typeText(text) {
    return new Promise((resolve) => {
        isTyping = true;
        messageEl.textContent = "";
        let i = 0;
        const interval = setInterval(() => {
            messageEl.textContent += text[i];
            i++;
            if (i >= text.length) {
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
    const originalBtnText = chatSendBtn.textContent;
    chatSendBtn.textContent = "생각 중";
    
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
        chatSendBtn.textContent = originalBtnText;
    }
}

chatSendBtn.onclick = sendChatMessage;
chatInput.onkeypress = (e) => {
    if (e.key === 'Enter') sendChatMessage();
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
            btn.textContent = choice.text;
            btn.onclick = () => {
                // 플래그 설정
                if (choice.setFlag) {
                    gameState[choice.setFlag] = true;
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
    if (isTyping || isFreeTalking) return;
    
    const scene = SCENARIO[currentSceneId];
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
