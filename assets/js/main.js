let currentSceneId = "start";
let isTyping = false;

const messageEl = document.getElementById('message');
const nameTagEl = document.getElementById('name-tag');
const dialogueBox = document.getElementById('dialogue-box');
const choiceContainer = document.getElementById('choice-container');
const bgLayer = document.getElementById('background-layer');
const charSlots = {
    left: document.getElementById('char-left'),
    center: document.getElementById('char-center'),
    right: document.getElementById('char-right')
};
const fadeLayer = document.getElementById('fade-layer');

function renderScene(sceneId) {
    const scene = SCENARIO[sceneId];
    if (!scene) return;

    currentSceneId = sceneId;
    
    // 대화창 및 선택지 초기화
    dialogueBox.style.display = 'block';
    choiceContainer.style.display = 'none';
    
    // 페이드 아웃 묘사가 있는 경우 실제 페이드 효과 적용
    if (scene.text && scene.text.includes("페이드 아웃")) {
        fadeLayer.classList.add('active');
    } else {
        fadeLayer.classList.remove('active');
    }

    // 배경 업데이트
    if (scene.background) {
        bgLayer.style.backgroundImage = `url(${scene.background})`;
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
                charSlots[pos].appendChild(img);
            }
        }
    } else if (scene.character) {
        // 단일 캐릭터 설정 (기본 center)
        const img = document.createElement('img');
        img.src = scene.character;
        charSlots.center.appendChild(img);
    }

    // 이름 태그
    nameTagEl.textContent = scene.name || "";
    nameTagEl.style.display = scene.name ? 'block' : 'none';

    // 텍스트 타이핑 효과
    typeText(scene.text);
}

function typeText(text) {
    isTyping = true;
    messageEl.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
        messageEl.textContent += text[i];
        i++;
        if (i >= text.length) {
            clearInterval(interval);
            isTyping = false;
        }
    }, 30);
}

function checkChoices() {
    const scene = SCENARIO[currentSceneId];
    if (scene.choices) {
        choiceContainer.innerHTML = "";
        scene.choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = choice.text;
            btn.onclick = () => {
                renderScene(choice.next);
            };
            choiceContainer.appendChild(btn);
        });
        choiceContainer.style.display = 'flex';
    }
}

dialogueBox.onclick = () => {
    if (isTyping) return;
    
    const scene = SCENARIO[currentSceneId];
    if (scene.choices) {
        dialogueBox.style.display = 'none'; // 대화창 숨기기
        checkChoices(); // 선택지 표시
    } else if (scene.next) {
        renderScene(scene.next);
    } else {
        // 다음 장면이 없고 선택지도 없는 경우 (게임 종료)
        location.href = 'index.html';
    }
};

// 초기 실행
window.onload = () => {
    renderScene("start");
};
