const API_ENDPOINT = "https://chatbot-api.yama5993.workers.dev/";
const ASSET_VERSION = "1.0.15"; // 에셋 캐시 방지를 위한 버전 번호

// 에셋 URL에 버전을 추가하는 헬퍼 함수
function getAssetUrl(url) {
    if (!url) return url;
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}v=${ASSET_VERSION}`;
}

let currentSceneId = "start";
let lastBgUrl = ""; // 마지막으로 설정된 배경 이미지 URL
let isTyping = false;
let skipTyping = false;

// 호감도 변화 애니메이션 함수
function showAffinityChange(amount, charName = null) {
    if (amount === 0) return;
    
    const popup = document.createElement('div');
    popup.className = `affinity-popup ${amount > 0 ? 'positive' : 'negative'}`;
    
    const emoji = document.createElement('span');
    emoji.className = 'emoji';
    emoji.textContent = amount > 0 ? '💕' : '💔';
    
    const value = document.createElement('span');
    value.className = 'value';
    value.textContent = amount > 0 ? `+${amount}` : `${amount}`;
    
    popup.appendChild(emoji);
    popup.appendChild(value);
    document.body.appendChild(popup);
    
    // 애니메이션 완료 후 제거
    setTimeout(() => {
        popup.remove();
    }, 5000);
}

let gameState = {
    playerName: "주인공", // 기본 이름
    currentDay: 1, // 현재 진행 중인 날짜
    stats: {
        Seoyeon: { affinity: 0 },
        Yuna: { affinity: 0 },
        Dain: { affinity: 0 },
        Teacher: { affinity: 0 },
        Nurse: { affinity: 0 }
    },
    chatMemories: {} // 캐릭터별 대화 기록 저장
};

// ==========================================================================
// 게임 저장/로드 시스템 (Game Save/Load System)
// ==========================================================================

const SAVE_STORAGE_KEY = 'cupid_save';

/**
 * 현재 게임 상태를 localStorage에 저장
 */
function saveGameState() {
    // 현재 표시된 캐릭터 정보 수집
    const charSlots = {
        left: document.getElementById('char-left'),
        center: document.getElementById('char-center'),
        right: document.getElementById('char-right')
    };
    const currentCharacters = {};
    for (const [slot, el] of Object.entries(charSlots)) {
        const img = el?.querySelector('img');
        if (img && img.src) {
            currentCharacters[slot] = img.src;
        }
    }
    
    const saveData = {
        currentSceneId: currentSceneId,
        lastBgUrl: lastBgUrl,
        currentCharacters: currentCharacters,
        gameState: JSON.parse(JSON.stringify(gameState)), // deep copy
        savedAt: Date.now()
    };
    localStorage.setItem(SAVE_STORAGE_KEY, JSON.stringify(saveData));
    console.log('[Save] 게임 상태 저장 완료:', currentSceneId);
}

/**
 * 저장된 게임 상태 로드
 * @returns {Object|null} 저장된 데이터 또는 null
 */
function loadGameState() {
    const saved = localStorage.getItem(SAVE_STORAGE_KEY);
    if (!saved) return null;
    try {
        return JSON.parse(saved);
    } catch (e) {
        console.error('[Load] 저장 데이터 파싱 오류:', e);
        return null;
    }
}

/**
 * 저장된 게임이 있는지 확인
 * @returns {boolean}
 */
function hasSavedGame() {
    return localStorage.getItem(SAVE_STORAGE_KEY) !== null;
}

/**
 * 저장된 게임 삭제
 */
function clearSavedGame() {
    localStorage.removeItem(SAVE_STORAGE_KEY);
    console.log('[Save] 저장 데이터 삭제됨');
}

// 전역 노출
window.saveGameState = saveGameState;
window.loadGameState = loadGameState;
window.hasSavedGame = hasSavedGame;
window.clearSavedGame = clearSavedGame;

// ==========================================================================
// 갤러리 해금 시스템 (Gallery Unlock System)
// ==========================================================================

// 갤러리 진행 상황 저장 키
const GALLERY_STORAGE_KEY = 'cupid_gallery';
const GALLERY_DATA_VERSION = 2;

// 갤러리 진행 상황 초기화/로드
function getGalleryProgress() {
    const saved = localStorage.getItem(GALLERY_STORAGE_KEY);
    if (!saved) {
        return {
            version: GALLERY_DATA_VERSION,
            characters: {},
            cg: {},
            bgm: { intro: { unlocked: true } } // intro BGM은 기본 해금
        };
    }
    const data = JSON.parse(saved);
    // 버전이 없으면 추가
    if (!data.version) {
        data.version = GALLERY_DATA_VERSION;
    }
    return data;
}

// 갤러리 진행 상황 저장
function saveGalleryProgress(progress) {
    localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(progress));
}

// 최대 호감도 업데이트 (표정 해금용)
function updateMaxAffinity(charKey, currentAffinity) {
    const progress = getGalleryProgress();
    const charIdMap = {
        'Seoyeon': 'seyoun',
        'Yuna': 'yuna',
        'Dain': 'dain',
        'Teacher': 'teacher',
        'Nurse': 'nurse'
    };
    const charId = charIdMap[charKey];
    if (charId) {
        if (!progress.characters[charId]) {
            progress.characters[charId] = {};
        }
        const currentMax = progress.characters[charId].maxAffinity || 0;
        if (currentAffinity > currentMax) {
            progress.characters[charId].maxAffinity = currentAffinity;
            saveGalleryProgress(progress);
            console.log(`[Gallery] Max affinity updated for ${charId}: ${currentAffinity}`);
        }
    }
}

// 캐릭터 해금 (호감도 100 달성 시)
function unlockCharacterGallery(charKey) {
    const progress = getGalleryProgress();
    const charIdMap = {
        'Seoyeon': 'seyoun',
        'Yuna': 'yuna',
        'Dain': 'dain',
        'Teacher': 'teacher',
        'Nurse': 'nurse'
    };
    const charId = charIdMap[charKey];
    if (charId && !progress.characters[charId]?.unlocked) {
        if (!progress.characters[charId]) {
            progress.characters[charId] = { met: true };
        }
        progress.characters[charId].unlocked = true;
        progress.characters[charId].unlockedAt = Date.now();
        saveGalleryProgress(progress);
        console.log(`[Gallery] Character unlocked: ${charId}`);
    }
}

// 캐릭터를 만났을 때 기록 (갤러리 카드 표시용)
function markCharacterMet(charKey) {
    const progress = getGalleryProgress();
    const charIdMap = {
        'Seoyeon': 'seyoun',
        'Yuna': 'yuna',
        'Dain': 'dain',
        'Teacher': 'teacher',
        'Nurse': 'nurse',
        '서연': 'seyoun',
        '유나': 'yuna',
        '다인': 'dain',
        '담임선생님': 'teacher',
        '보건선생님': 'nurse'
    };
    const charId = charIdMap[charKey];
    if (charId && !progress.characters[charId]?.met) {
        if (!progress.characters[charId]) {
            progress.characters[charId] = {};
        }
        progress.characters[charId].met = true;
        progress.characters[charId].metAt = Date.now();
        saveGalleryProgress(progress);
        console.log(`[Gallery] Character met: ${charId}`);
    }
}

// CG 해금 (갤러리에 등록된 CG만 해금)
// 등록된 CG 목록 (gallery.js의 GALLERY_CG와 동기화 필요)
const REGISTERED_CG_IDS = new Set([
    'nurse_home_event1'
    // 새 CG 추가 시 여기에도 ID 추가
]);

function unlockCG(cgId) {
    // 등록된 CG가 아니면 무시
    if (!REGISTERED_CG_IDS.has(cgId)) return;
    
    const progress = getGalleryProgress();
    if (!progress.cg[cgId]?.unlocked) {
        progress.cg[cgId] = { unlocked: true, unlockedAt: Date.now() };
        saveGalleryProgress(progress);
        console.log(`[Gallery] CG unlocked: ${cgId}`);
    }
}

// BGM 해금
function unlockBGM(bgmId) {
    const progress = getGalleryProgress();
    if (!progress.bgm[bgmId]?.unlocked) {
        progress.bgm[bgmId] = { unlocked: true, unlockedAt: Date.now() };
        saveGalleryProgress(progress);
        console.log(`[Gallery] BGM unlocked: ${bgmId}`);
    }
}

// 호감도 체크 및 캐릭터 해금
function checkAffinityUnlock(charKey) {
    const affinity = gameState.stats[charKey]?.affinity || 0;
    if (affinity >= 100) {
        unlockCharacterGallery(charKey);
    }
}

// 캐릭터별 프리토킹 횟수 증가
function incrementFreeTalkCount(charKey) {
    const progress = getGalleryProgress();
    const charIdMap = {
        'Seoyeon': 'seyoun',
        'Yuna': 'yuna',
        'Dain': 'dain',
        'Teacher': 'teacher',
        'Nurse': 'nurse'
    };
    const charId = charIdMap[charKey];
    if (charId) {
        if (!progress.characters[charId]) {
            progress.characters[charId] = {};
        }
        progress.characters[charId].freeTalkCount = (progress.characters[charId].freeTalkCount || 0) + 1;
        saveGalleryProgress(progress);
        console.log(`[Gallery] FreeTalk count for ${charId}: ${progress.characters[charId].freeTalkCount}`);
    }
}

// 프리토킹 관련 변수
let freeTalkTurns = 0;
let currentMaxTurns = 3;
const DEFAULT_MAX_FREE_TALK_TURNS = 3;
let freeTalkHistory = [];
let isFreeTalking = false;

const messageEl = document.getElementById('message');
const nameTagEl = document.getElementById('name-tag');
const dialogueBox = document.getElementById('dialogue-box');
const choiceContainer = document.getElementById('choice-container');
const chatContainer = document.getElementById('chat-container');
const chatInput = document.getElementById('chat-input');
const chatSendBtn = document.getElementById('chat-send');
const chatSkipBtn = document.getElementById('chat-skip-btn');
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

// 커스텀 모달 요소
const customModal = document.getElementById('custom-modal');
const modalMessage = document.getElementById('modal-message');
const modalConfirmBtn = document.getElementById('modal-confirm-btn');
const modalCancelBtn = document.getElementById('modal-cancel-btn');

// 홈 버튼 관련 함수
function showHomeConfirm() {
    const homeModal = document.getElementById('homeConfirmModal');
    if (homeModal) {
        homeModal.style.display = 'flex';
    }
}

function closeHomeConfirm(e) {
    if (e && e.target !== e.currentTarget && e.target.id !== 'homeConfirmModal') return;
    const homeModal = document.getElementById('homeConfirmModal');
    if (homeModal) {
        homeModal.style.display = 'none';
    }
}

function goToHome() {
    // BGM 정지
    if (window.soundManager) {
        soundManager.stopBgm();
    }
    // 시작 화면으로 이동
    const isEn = document.documentElement.lang === 'en';
    window.location.href = isEn ? 'index-en.html' : 'index.html';
}

// 설정 모달 관련 함수
function openSettingsModal() {
    const settingsModal = document.getElementById('settingsModal');
    if (!settingsModal) return;
    
    settingsModal.style.display = 'flex';
    
    const savedSetting = localStorage.getItem('showAffinity');
    const showAffinity = savedSetting === null ? true : savedSetting === 'true';
    document.getElementById('affinityToggle').checked = showAffinity;

    const bgmVol = localStorage.getItem('bgmVolume') || 0.5;
    const sfxVol = localStorage.getItem('sfxVolume') || 0.5;
    
    document.getElementById('bgmVolume').value = bgmVol * 100;
    document.getElementById('sfxVolume').value = sfxVol * 100;
    document.getElementById('bgmVolumeVal').textContent = Math.round(bgmVol * 100) + '%';
    document.getElementById('sfxVolumeVal').textContent = Math.round(sfxVol * 100) + '%';
}

function closeSettingsModal(e) {
    if (e && e.target !== e.currentTarget && e.target.id !== 'settingsModal') return;
    document.getElementById('settingsModal').style.display = 'none';
}

function saveSettings() {
    const showAffinity = document.getElementById('affinityToggle').checked;
    localStorage.setItem('showAffinity', showAffinity);
    
    const bgmVol = document.getElementById('bgmVolume').value / 100;
    const sfxVol = document.getElementById('sfxVolume').value / 100;
    
    if (window.soundManager) {
        soundManager.setBgmVolume(bgmVol);
        soundManager.setSfxVolume(sfxVol);
    }
    
    closeSettingsModal();
    // 호감도 표시 설정 변경 시 즉시 반영을 위해 현재 씬 다시 렌더링하거나 태그 업데이트
    const scene = getScene(currentSceneId);
    if (scene) updateNameTag(scene.name);
}

// 볼륨 변경 실시간 반영
window.addEventListener('input', (e) => {
    if (e.target.id === 'bgmVolume') {
        const vol = e.target.value / 100;
        document.getElementById('bgmVolumeVal').textContent = e.target.value + '%';
        if (window.soundManager) soundManager.setBgmVolume(vol);
    } else if (e.target.id === 'sfxVolume') {
        const vol = e.target.value / 100;
        document.getElementById('sfxVolumeVal').textContent = e.target.value + '%';
        if (window.soundManager) soundManager.setSfxVolume(vol);
    }
});

// 시나리오 데이터 가져오기 헬퍼 함수
function getScene(id) {
    if (!id) return null;

    // 현재 날짜의 시나리오에서 먼저 검색
    if (SCENARIO[gameState.currentDay] && SCENARIO[gameState.currentDay][id]) {
        return SCENARIO[gameState.currentDay][id];
    }

    // 모든 날짜를 순회하며 검색 (날짜 변경 시점의 유연성을 위해)
    for (const day in SCENARIO) {
        if (SCENARIO[day] && SCENARIO[day][id]) {
            return SCENARIO[day][id];
        }
    }

    // 공통 시나리오(0)에서 검색
    if (SCENARIO[0] && SCENARIO[0][id]) {
        return SCENARIO[0][id];
    }

    // 하위 호환성을 위해 루트 레벨에서도 검색 (기존 구조 대응)
    if (SCENARIO[id]) {
        return SCENARIO[id];
    }

    return null;
}

/**
 * 이름 태그 및 호감도 게이지 업데이트
 * @param {string} name 캐릭터 이름
 */
/**
 * [캐릭터 움직임 관리] 현재 말하고 있는 캐릭터를 찾아 들썩거리는 효과를 줌
 * @param {string} charName - 지금 대사를 하고 있는 캐릭터 이름
 * @param {boolean} isStarting - 움직임을 시작할지(true), 멈출지(false) 결정
 */
function updateTalkingAnimation(charName, isStarting) {
    // [설정] 주인공("나")이 말하거나 시스템 메시지가 나올 때는 캐릭터 움직임을 멈춤
    if (!charName || charName === "나" || charName === "Me" || charName === "시스템" || charName === "System") {
        // 모든 캐릭터 칸(slot)을 하나씩 확인
        Object.values(charSlots).forEach(slot => {
            if (!slot) return;
            // 칸 안에 들어있는 캐릭터 이미지(img)를 모두 찾음
            const imgs = slot.querySelectorAll('img');
            // 'char-talking'(말하는 중) 클래스를 제거하여 움직임을 멈춤
            imgs.forEach(img => img.classList.remove('char-talking'));
        });
        return; // 함수 종료
    }
    
    // [매칭 서비스] 화면 이름과 실제 이미지 파일 이름을 연결하는 사전
    // 새로운 캐릭터 추가 시 여기에 "이름": "파일이름" 형식으로 추가하면 됨
    const charNameMap = {
        "서연": "seyoun", "유나": "yuna", "다인": "dain", 
        "담임선생님": "teacher", "보건선생님": "nurse",
        "Seoyeon": "seyoun", "Yuna": "yuna", "Dain": "dain",
        "???": "seyoun" // 이름이 '???'일 때도 서연이 이미지가 움직이게 설정
    };
    
    // 현재 화자 이름을 파일 이름 키워드(예: seyoun)로 변환
    const targetKey = charNameMap[charName] || charName.toLowerCase();
    
    // 화면상의 모든 캐릭터를 하나씩 검사
    Object.values(charSlots).forEach(slot => {
        if (!slot) return;
        const imgs = slot.querySelectorAll('img');
        imgs.forEach(img => {
            const src = img.src.toLowerCase(); // 이미지 파일 경로 획득
            
            // 이미지 파일 이름에 현재 화자 이름(예: seyoun)이 있는지 확인
            if (src.includes(targetKey)) {
                if (isStarting) {
                    // 말하기 시작 시 'char-talking' 클래스 추가하여 들썩이게 함
                    img.classList.add('char-talking');
                } else {
                    // 말이 끝나면 클래스 제거하여 정지시킴
                    img.classList.remove('char-talking');
                }
            } else {
                // 현재 화자가 아닌 캐릭터들은 전부 움직임을 멈춤
                img.classList.remove('char-talking');
            }
        });
    });
}

function updateNameTag(name) {
    nameTagEl.innerHTML = "";
    if (!name) {
        nameTagEl.style.display = 'none';
        return;
    }

    const nameSpan = document.createElement('span');
    nameSpan.textContent = name;
    nameTagEl.appendChild(nameSpan);

    // 캐릭터를 만났음을 기록 (갤러리용)
    markCharacterMet(name);

    // 호감도 게이지 표시 (설정 확인, 기본값 true)
    const showAffinity = localStorage.getItem('showAffinity') !== 'false';

    if (showAffinity) {
        const charNameMap = {
            "서연": "Seoyeon", "유나": "Yuna", "다인": "Dain", "담임선생님": "Teacher", "보건선생님": "Nurse",
            "Seoyeon": "Seoyeon", "Yuna": "Yuna", "Dain": "Dain", "Teacher": "Teacher", "Nurse": "Nurse"
        };
        const charKey = charNameMap[name];

        if (charKey && gameState.stats[charKey]) {
            const affinity = gameState.stats[charKey].affinity || 0;
            
            // 게이지 컨테이너
            const gaugeBox = document.createElement('span');
            gaugeBox.style.display = 'inline-flex';
            gaugeBox.style.alignItems = 'center';
            gaugeBox.style.marginLeft = '15px'; // 마진 증가
            gaugeBox.style.paddingLeft = '10px';
            gaugeBox.style.borderLeft = '1px solid rgba(255, 255, 255, 0.3)';
            gaugeBox.style.verticalAlign = 'middle';

            // 숫자 표시
            const valText = document.createElement('span');
            valText.textContent = (affinity > 0 ? "+" : "") + affinity;
            valText.style.fontSize = '0.8rem';
            valText.style.marginRight = '8px';
            valText.style.minWidth = '30px';
            valText.style.textAlign = 'right';
            valText.style.color = '#fff'; // 가독성을 위해 흰색으로 고정하거나 배경색에 맞춤
            valText.style.textShadow = '1px 1px 2px rgba(0,0,0,0.5)';

            // 게이지 트랙
            const track = document.createElement('span');
            track.style.display = 'inline-block';
            track.style.width = '80px';
            track.style.height = '6px';
            track.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            track.style.borderRadius = '3px';
            track.style.position = 'relative';
            track.style.overflow = 'hidden';
            track.style.border = '1px solid rgba(0, 0, 0, 0.4)';

            // 게이지 바
            const bar = document.createElement('span');
            bar.style.position = 'absolute';
            bar.style.height = '100%';
            bar.style.top = '0';
            
            // -100 (0%) ~ 100 (100%)
            const percent = (affinity + 100) / 2;
            bar.style.width = percent + '%';
            bar.style.left = '0';
            
            // 색상 결정
            if (affinity >= 70) bar.style.backgroundColor = '#ff7675'; // 호감
            else if (affinity >= 0) bar.style.backgroundColor = '#fab1a0'; // 우호
            else if (affinity > -40) bar.style.backgroundColor = '#81ecec'; // 불쾌
            else bar.style.backgroundColor = '#74b9ff'; // 혐오

            track.appendChild(bar);
            
            // 중앙선 (0점 기준선)
            const mid = document.createElement('span');
            mid.style.position = 'absolute';
            mid.style.left = '50%';
            mid.style.top = '0';
            mid.style.width = '1px';
            mid.style.height = '100%';
            mid.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            track.appendChild(mid);

            gaugeBox.appendChild(valText);
            gaugeBox.appendChild(track);
            nameTagEl.appendChild(gaugeBox);
        }
    }
    nameTagEl.style.display = 'block';
}

// 다음 장면 ID를 결정하는 헬퍼 함수 (분기 로직 처리)
function resolveNextScene(scene) {
    if (!scene) return null;

    // 호감도에 따른 결과 분기 처리 (affinityBranches가 있는 경우)
    if (scene.affinityBranches && scene.affinityChar && gameState.stats[scene.affinityChar]) {
        const currentAff = gameState.stats[scene.affinityChar].affinity;
        // 높은 문턱부터 체크하여 조건에 맞는 가장 높은 분기를 선택
        const sortedBranches = [...scene.affinityBranches].sort((a, b) => b.minAffinity - a.minAffinity);
        for (const branch of sortedBranches) {
            if (currentAff >= branch.minAffinity) {
                return branch.next;
            }
        }
    }

    // branches가 있는 경우
    if (scene.branches && Array.isArray(scene.branches)) {
        // 호감도 비교 분기 처리 (selectByHighestAffinity: true 인 경우)
        if (scene.selectByHighestAffinity) {
            let winnerNext = null;
            let maxAffinity = -999;
            let metAnyone = false;

            for (const branch of scene.branches) {
                // 만난 적이 있는 캐릭터인지 먼저 확인 (metSeoyeon, metDain 등)
                const metFlag = "met" + branch.character;
                if (gameState[metFlag] && branch.character && gameState.stats[branch.character]) {
                    metAnyone = true;
                    const currentAff = gameState.stats[branch.character].affinity;
                    if (currentAff > maxAffinity) {
                        maxAffinity = currentAff;
                        winnerNext = branch.next;
                    }
                }
            }
            // 만난 적이 있는 캐릭터가 있다면 그중 최고 호감도 반환
            if (metAnyone) return winnerNext;
        }

        // 일반적인 조건부 분기 처리 (또는 만난 사람이 아무도 없는 경우)
        for (const branch of scene.branches) {
            if (branch.condition && !gameState[branch.condition]) continue;
            if (branch.excludeCondition && gameState[branch.excludeCondition]) continue;
            return branch.next;
        }
    }

    // 기본 next 반환
    return scene.next;
}

async function renderScene(sceneId) {
    const scene = getScene(sceneId);
    if (!scene) {
        // 만약 sceneId가 .html로 끝나면 페이지 이동 (타이틀로 돌아가기 등)
        if (sceneId && sceneId.endsWith('.html')) {
            window.location.href = sceneId;
        }
        return;
    }

    currentSceneId = sceneId;

    // BGM 업데이트
    if (scene.bgm) {
        soundManager.playBgm(`assets/audio/bgm/${scene.bgm}`);
    } else if (scene.bgm === null) {
        soundManager.stopBgm();
    }

    // SFX 재생
    if (scene.sfx) {
        soundManager.playSfx(`assets/audio/sfx/${scene.sfx}`);
    }

    // 날짜 변경 처리
    if (scene.changeDay) {
        gameState.currentDay = scene.changeDay;
        console.log(`Day changed to: ${gameState.currentDay}`);
    }

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
        // 배경 이미지가 로드될 때까지 대기하여 배경이 먼저 나오도록 함
        const bgUrl = getAssetUrl(scene.background);
        lastBgUrl = bgUrl;
        
        // CG 이벤트 해금 체크 (갤러리에 등록된 CG 배경이면 해금)
        // 경로에 관계없이 파일명이 GALLERY_CG에 등록된 ID와 일치하면 해금
        const cgFileName = scene.background.split('/').pop().replace(/\.(png|jpg|jpeg|webp)$/i, '');
        unlockCG(cgFileName);
        
        await new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                if (lastBgUrl === bgUrl) {
                    bgLayer.style.backgroundImage = `url(${bgUrl})`;
                }
                resolve();
            };
            img.onerror = resolve; // 에러 발생 시에도 다음 단계로 진행
            img.src = bgUrl;
        });
    }

    // 레이스 컨디션 방지
    if (currentSceneId !== sceneId) return;

    // 플래그 설정 (노드 진입 시 자동 설정)
    if (scene.setFlag) {
        gameState[scene.setFlag] = true;
    }
    if (scene.setFlags && Array.isArray(scene.setFlags)) {
        scene.setFlags.forEach(flag => {
            gameState[flag] = true;
        });
    }

    // 스탯 업데이트 (노드 진입 시 자동 설정)
    if (scene.stats) {
        for (const [char, stats] of Object.entries(scene.stats)) {
            const charNameMap = {
                "서연": "Seoyeon", "유나": "Yuna", "다인": "Dain", "담임선생님": "Teacher", "보건선생님": "Nurse",
                "Seoyeon": "Seoyeon", "Yuna": "Yuna", "Dain": "Dain", "Teacher": "Teacher", "Nurse": "Nurse"
            };
            const charKey = charNameMap[char] || char;
            if (gameState.stats[charKey]) {
                if (stats.affinity) {
                    gameState.stats[charKey].affinity = Math.max(-100, Math.min(100, gameState.stats[charKey].affinity + stats.affinity));
                    console.log(`Scene Stat Change (${charKey}): Affinity ${stats.affinity} (Total: Aff ${gameState.stats[charKey].affinity})`);
                    showAffinityChange(stats.affinity, charKey);
                    // 최대 호감도 업데이트 (표정 해금용)
                    updateMaxAffinity(charKey, gameState.stats[charKey].affinity);
                    // 호감도 100 달성 시 갤러리 캐릭터 해금
                    checkAffinityUnlock(charKey);
                }
            }
        }
    }

    // 밤/노을 필터 적용
    bgLayer.classList.remove('night', 'sunset');
    if (scene.night) {
        bgLayer.classList.add('night');
    } else if (scene.sunset) {
        bgLayer.classList.add('sunset');
    }

    // 캐릭터 업데이트
    // 장면 데이터에 캐릭터 정보(character 또는 characters)가 명시되어 있을 때만 업데이트합니다.
    if (scene.hasOwnProperty('characters') || scene.hasOwnProperty('character')) {
        const newCharMap = {}; // 슬롯별로 표시되어야 할 이미지 URL과 옵션 맵
        const charOptions = {}; // 슬롯별 옵션 (opacity 등)
        if (scene.characters) {
            Object.entries(scene.characters).forEach(([pos, value]) => {
                const posKey = pos.toLowerCase();
                // value가 객체인 경우 { src, opacity } 형태
                if (typeof value === 'object' && value !== null && value.src) {
                    newCharMap[posKey] = getAssetUrl(value.src);
                    charOptions[posKey] = { opacity: value.opacity ?? 1 };
                } else {
                    // 단순 문자열인 경우 이미지 경로
                    newCharMap[posKey] = getAssetUrl(value);
                    charOptions[posKey] = { opacity: 1 };
                }
            });
        } else if (scene.character) {
            newCharMap['center'] = getAssetUrl(scene.character);
            charOptions['center'] = { opacity: 1 };
        }

        // 바뀌어야 할 슬롯 확인
        const changedSlots = [];
        Object.entries(charSlots).forEach(([pos, slot]) => {
            if (!slot) return;
            const existingImg = slot.querySelector('img');
            const newUrl = newCharMap[pos];

            if (existingImg) {
                // 기존 이미지가 있는데 새로운 데이터가 없거나, 경로가 바뀐 경우
                if (!newUrl || existingImg.dataset.rawSrc !== newUrl) {
                    changedSlots.push(pos);
                }
            } else {
                // 기존 이미지가 없는데 새로운 데이터가 있는 경우
                if (newUrl) changedSlots.push(pos);
            }
        });

        // 변경 사항이 있는 경우에만 처리
        if (changedSlots.length > 0) {
            const charPromises = Object.entries(newCharMap)
                .filter(([pos]) => changedSlots.includes(pos))
                .map(([pos, charUrl]) => {
                    return new Promise((resolve) => {
                        const img = document.createElement('img');
                        img.onload = () => {
                            img.dataset.rawSrc = charUrl;
                            // 캐릭터별 opacity 적용
                            const options = charOptions[pos] || { opacity: 1 };
                            if (options.opacity !== 1) {
                                img.style.opacity = options.opacity;
                            }
                            resolve({ pos, img, sceneId });
                        };
                        img.onerror = () => {
                            console.error("캐릭터 이미지 로드 실패:", charUrl);
                            resolve(null);
                        };
                        img.src = charUrl;
                        if (scene.silhouette) img.classList.add('silhouette');
                        if (scene.thinking) img.classList.add('thinking');
                        img.classList.add('char-breathing');
                    });
                });

            const loadedChars = await Promise.all(charPromises);
            
            // 레이스 컨디션 방지
            if (currentSceneId !== sceneId) return;

            // 바뀐 슬롯의 주체만 즉시 교체
            loadedChars.forEach(result => {
                if (result && charSlots[result.pos]) {
                    charSlots[result.pos].innerHTML = ''; // 즉시 교체 (페이드 없음)
                    charSlots[result.pos].appendChild(result.img);
                }
            });

            // 퇴장하는 슬롯 처리
            Object.keys(charSlots).forEach(pos => {
                if (!newCharMap[pos] && changedSlots.includes(pos)) {
                    if (charSlots[pos]) charSlots[pos].innerHTML = '';
                }
            });
        }
    }

    // 이름 태그 업데이트
    updateNameTag(scene.name);

    // 다음 지시계 초기화
    nextIndicator.style.display = 'none';
    nextIndicator.classList.remove('fade-in'); // 애니메이션 클래스 제거

    // 프리토킹 모드 확인
    if (scene.type === 'free_talk') {
        await startFreeTalk(scene);
    } else if (scene.type === 'input') {
        dialogueBox.style.pointerEvents = 'auto'; // 입력창이 대화창 안에 있으므로 auto 유지
        if (scene.text) {
            await typeText(scene.text, scene.name);
            if (currentSceneId !== sceneId) return;
        }
        nameInputContainer.style.display = 'block';
        playerNameInput.value = "";
        playerNameInput.focus();
    } else {
        // 텍스트 타이핑 효과
        if (scene.text) {
            await typeText(scene.text, scene.name);
            if (currentSceneId !== sceneId) return;
        } else {
            messageEl.textContent = "";
        }

        // 선택지가 없거나, 선택지가 하나뿐이고 그 텍스트가 "다음" 또는 "Next"인 경우 지시계 표시
        let showNextIndicator = !scene.choices;
        if (scene.choices) {
            const availableChoices = scene.choices.filter(choice => {
                if (choice.condition && !gameState[choice.condition]) return false;
                if (choice.excludeCondition && gameState[choice.excludeCondition]) return false;
                return true;
            });
            if (availableChoices.length === 1 && (availableChoices[0].text === "다음" || availableChoices[0].text === "Next")) {
                showNextIndicator = true;
            }
        }

        if (showNextIndicator) {
            // 시네마틱 모드 (텍스트 없는 장면) 등에서는 지시계 등장을 늦춤
            if (!scene.text && (!scene.choices || scene.choices.length === 0)) {
                setTimeout(() => {
                    if (currentSceneId === sceneId) {
                        nextIndicator.style.display = 'block';
                        nextIndicator.classList.add('fade-in');
                    }
                }, 1500);
            } else {
                nextIndicator.style.display = 'block';
            }
        }

        // 자동 진행 로직: 대사도 없고 선택지도 없는 라우팅 전용 노드 처리
        if (!scene.text && (!scene.choices || scene.choices.length === 0)) {
            const nextId = resolveNextScene(scene);
            if (nextId && nextId !== sceneId) {
                // 서비스신(이미지)만 보여주기
                if (scene.background || scene.character || scene.characters) {
                    // 대화창은 숨기고 지시계는 보이게
                    dialogueBox.style.display = 'none';
                    nextIndicator.style.display = 'block';
                    // 클릭 이벤트 리스너를 한 번만 작동하게 등록
                    const proceedToNext = () => {
                        window.removeEventListener('click', proceedToNext);
                        window.removeEventListener('touchstart', proceedToNext);
                        renderScene(nextId);
                    };
                    setTimeout(() => {
                        window.addEventListener('click', proceedToNext);
                        window.addEventListener('touchstart', proceedToNext);
                    }, 1500); // 지시계가 나타나는 시점인 1.5초 후에만 클릭 가능하도록 변경
                } else {
                    setTimeout(() => renderScene(nextId), 0);
                }
            }
        }
    }
}

const SEND_ICON = `<svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>`;

// 게임 내 플래그를 기반으로 캐릭터의 기억(컨텍스트)을 생성하는 함수
function getGameContext(charName, isEn) {
    const memories = FLAG_MEMORIES.filter(m => {
        // 캐릭터 이름 매칭 (한글/영어 모두 고려)
        const charMatch = m.char === charName ||
            (charName === "서연" && m.char === "Seoyeon") ||
            (charName === "Seoyeon" && m.char === "서연") ||
            (charName === "유나" && m.char === "Yuna") ||
            (charName === "Yuna" && m.char === "유나") ||
            (charName === "다인" && m.char === "Dain") ||
            (charName === "Dain" && m.char === "다인");
        return charMatch && gameState[m.flag];
    });

    if (memories.length === 0) return "";

    const header = isEn ? "\n\n[Recent Events & Memories]:\n" : "\n\n[최근 사건 및 기억]:\n";
    return header + memories.map(m => {
        let text = isEn ? m.en : m.ko;
        return `- ${text.replace(/{name}/g, gameState.playerName)}`;
    }).join("\n");
}

// 다른 캐릭터들에 대한 정보를 생성하는 함수
function getSocialContext(currentCharName, isEn) {
    const charNameMap = {
        "서연": "Seoyeon", "유나": "Yuna", "다인": "Dain", "담임선생님": "Teacher", "보건선생님": "Nurse",
        "Seoyeon": "Seoyeon", "Yuna": "Yuna", "Dain": "Dain", "Homeroom Teacher": "Teacher", "Nurse": "Nurse"
    };

    const characters = isEn ? {
        "Seoyeon": "Student Council President. Kind but lonely.",
        "Yuna": "Mysterious girl. Interested in the user's 'light'.",
        "Dain": "Energetic girl. Close friend of the user.",
        "Homeroom Teacher": "Professional but has a clumsy side.",
        "Nurse": "A mature and playful health teacher who cares deeply for her students."
    } : {
        "서연": "학생회장. 모두에게 친절하지만 외로움을 잘 탐.",
        "유나": "신비로운 소녀. 주인공의 '빛'에 집착함.",
        "다인": "활기찬 소녀. 주인공과 편한 친구 사이.",
        "담임선생님": "전문적인 교사지만 허당끼가 있음.",
        "보건선생님": "매혹적이고 장난기 많은 보건 교사."
    };

    const otherChars = Object.entries(characters)
        .filter(([name]) => name !== currentCharName)
        .map(([name, desc]) => {
            const charKey = charNameMap[name] || name;
            const affinity = gameState.stats[charKey] ? gameState.stats[charKey].affinity : 0;
            let status = "";
            
            if (gameState[`isDating_${charKey}`] || gameState[`isDating_${name}`]) {
                status = isEn ? " (Currently DATING the user)" : " (현재 사용자와 사귀는 사이)";
            } else if (affinity >= 70) {
                status = isEn ? " (Convinced they are dating the user)" : " (사용자와 사귀는 사이라고 확신함)";
            } else if (affinity >= 50) {
                status = isEn ? " (Suspecting they are dating the user)" : " (사용자와 사귀는 사이인지 의심함)";
            }
            
            const affinityText = isEn ? ` (Affinity: ${affinity})` : ` (호감도: ${affinity})`;
            return `- ${name}: ${desc}${affinityText}${status}`;
        })
        .join("\n");

    const header = isEn ? "\n\n[Other Characters in School & Your Awareness]:\n" : "\n\n[학교의 다른 인물들 및 당신의 인지 상태]:\n";
    const jealousyInstruction = isEn ? 
        "\nNote: You are aware of the user's relationship with others. If their affinity is high (50+), you may feel jealous, suspicious, or obsessive depending on your personality." :
        "\n참고: 당신은 사용자와 다른 캐릭터들의 관계를 인지하고 있습니다. 다른 캐릭터의 호감도가 높을 경우(50 이상), 당신의 성격에 따라 질투, 의심, 또는 집착을 보일 수 있습니다.";

    return header + otherChars + jealousyInstruction;
}

async function startFreeTalk(scene) {
    isFreeTalking = true;
    freeTalkTurns = 0;
    currentMaxTurns = scene.maxTurns || DEFAULT_MAX_FREE_TALK_TURNS;

    const isEn = document.documentElement.lang === 'en';
    const gameContext = getGameContext(scene.name, isEn);
    const socialContext = getSocialContext(scene.name, isEn);

    // 캐릭터별 대화 기록 불러오기
    if (!gameState.chatMemories[scene.name]) {
        gameState.chatMemories[scene.name] = [];
    }
    freeTalkHistory = [...gameState.chatMemories[scene.name]];

    // 현재 배경 이미지 파일명에서 장소 유추
    let locationName = isEn ? "School" : "학교";
    const bgUrl = bgLayer.style.backgroundImage;
    if (bgUrl.includes('room_school')) locationName = isEn ? "Classroom" : "교실";
    else if (bgUrl.includes('load_school')) locationName = isEn ? "Hallway" : "복도";
    else if (bgUrl.includes('school.png')) locationName = isEn ? "School Gate" : "교문 앞";
    else if (bgUrl.includes('top_school')) locationName = isEn ? "Rooftop" : "학교 옥상";
    else if (bgUrl.includes('playground')) locationName = isEn ? "Playground" : "운동장";
    else if (bgUrl.includes('gym')) locationName = isEn ? "Gym" : "체육관";
    else if (bgUrl.includes('nurse_room')) locationName = isEn ? "Nurse's Office" : "보건실";
    else if (bgUrl.includes('library')) locationName = isEn ? "Library" : "도서관";
    else if (bgUrl.includes('home_room')) locationName = isEn ? "My Room" : "주인공의 방";

    // 시스템 프롬프트 설정
    const charNameMap = {
        "서연": "Seoyeon", "유나": "Yuna", "다인": "Dain", "담임선생님": "Teacher", "보건선생님": "Nurse",
        "Seoyeon": "Seoyeon", "Yuna": "Yuna", "Dain": "Dain", "Homeroom Teacher": "Teacher", "Nurse": "Nurse"
    };
    const charKey = charNameMap[scene.name] || scene.name;
    const knowsName = gameState[`knowsName_${charKey}`];

    // 캐릭터 스탯 가져오기 (한글 이름 대응)
    const charStats = gameState.stats[charKey] || { affinity: 0 };

    // 프롬프트 데이터 가져오기 (분리된 파일)
    const promptData = window.getPromptData(isEn, gameState.playerName);

    // 사귀는 사이일 경우 호칭 가이드라인 추가
    let datingGuideline = "";
    const isDatingCurrent = gameState[`isDating_${charKey}`] || gameState[`isDating_${scene.name}`];

    if (isDatingCurrent) {
        datingGuideline = isEn ?
            `\n- SPECIAL: You are currently DATING the user. Use extremely intimate and affectionate nicknames regardless of the affinity tiers below. Do not hesitate to express deep romantic desire and lead a highly seductive atmosphere.` :
            `\n- 특별 지침: 당신은 현재 사용자와 사귀는 사이입니다. 아래의 호감도 등급과 상관없이 매우 친밀하고 애정 어린 호칭(자기야, 내 사랑, 여보 등)을 사용하세요. 깊은 연인 관계임을 강조하며, 농도 짙은 애정 표현과 도발적인 태도로 대화의 수위를 과감하게 높이세요.`;

        // 양다리(문어발) 감지 로직
        const otherDatingChars = Object.keys(charNameMap).filter(name => {
            const key = charNameMap[name];
            return key !== charKey && (gameState[`isDating_${key}`] || gameState[`isDating_${name}`]);
        });

        if (otherDatingChars.length > 0) {
            const jealousyPrompt = isEn ?
                `\n- JEALOUSY: You noticed the user is also dating other people (${otherDatingChars.join(", ")}). If the user acts unfaithfully or mentions them, react with intense jealousy, suspicion, or sadness according to your personality.` :
                `\n- 질투 지침: 당신은 사용자가 다른 사람들(${otherDatingChars.join(", ")})과도 사귀고 있다는 사실을 눈치챘습니다. 사용자가 불성실하게 행동하거나 다른 캐릭터를 언급할 경우, 당신의 성격에 맞춰 강한 질투, 의심, 또는 슬픔을 표현하세요.`;
            datingGuideline += jealousyPrompt;
        }
    }

    // 통신 매체 판단 (대면 vs 원격)
    const remoteKeywords = ["연락", "메시지", "전화", "톡", "문자", "Contact", "Message", "Call", "Text", "전송"];
    const isRemote = remoteKeywords.some(k =>
        (scene.context && scene.context.includes(k)) ||
        (scene.buttonText && scene.buttonText.includes(k)) ||
        (scene.text && scene.text.includes(k))
    );

    const mediumInstruction = isEn ?
        (isRemote ? "\n- MEDIUM: You are communicating via PHONE/MESSENGER. Do not mention physical actions like 'looking at the user' or 'touching'. Use text-style expressions if appropriate." : "\n- MEDIUM: You are talking FACE-TO-FACE. You can mention eye contact, facial expressions, and physical proximity.") :
        (isRemote ? "\n- 매체 지침: 현재 '전화' 또는 '메시지'로 연락 중입니다. '눈을 마주친다'거나 '손을 잡는다'는 등의 물리적 접촉 묘사는 피하세요. 대신 텍스트 메시지나 통화 상황에 맞는 표현을 사용하세요." : "\n- 매체 지침: 현재 '대면'하여 대화 중입니다. 눈맞춤, 표정 변화, 물리적 거리감 등을 자유롭게 묘사할 수 있습니다.");

    // 시스템 프롬프트 생성
    const systemPrompt = window.buildSystemPrompt({
        isEn,
        sceneName: charKey,
        displayName: scene.name,
        locationName,
        context: scene.context || (isEn ? "Talking with the user." : "사용자와 대화 중입니다."),
        affinity: charStats.affinity,
        extraGuideline: scene.extra_guideline || "",
        gameContext,
        socialContext,
        mediumInstruction,
        promptData,
        currentMaxTurns,
        playerName: gameState.playerName,
        knowsName,
        datingGuideline
    });

    // 시스템 프롬프트를 맨 앞에 배치
    freeTalkHistory = [{ role: "system", content: systemPrompt }, ...freeTalkHistory.filter(m => m.role !== "system")];

    chatContainer.style.display = 'block';

    // 채팅 가이드 업데이트
    const chatGuideEl = document.getElementById('chat-guide');
    if (chatGuideEl) {
        if (isEn) {
            chatGuideEl.innerHTML = isRemote 
                ? "<b>Tip:</b> Describe tone in brackets, e.g., <i>(smiling) Hey...</i>"
                : "<b>Tip:</b> Describe scene or actions, e.g., <i>(holds hand) Let's go.</i> or <i>(it's pouring rain) Take out the umbrella.</i>";
        } else {
            chatGuideEl.innerHTML = isRemote 
                ? "<b>Tip:</b> <i>(웃으며) 자?</i> 처럼 메신저에서도 어조나 상황을 표현해보세요."
                : "<b>Tip:</b> <i>(손을 잡으며) 같이 가자.</i> 또는 <i>(비가 쏟아진다) 비온다 우산 좀 꺼내줘.</i> 처럼 말해보세요.";
        }
    }

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
    if (chatSkipBtn) chatSkipBtn.disabled = false;

    if (scene.text) {
        await typeText(scene.text, scene.name);
        freeTalkHistory.push({ role: "assistant", content: scene.text });
    }
}


function hasBatchim(str) {
    if (!str || str.length === 0) return false;
    const lastChar = str[str.length - 1];
    const code = lastChar.charCodeAt(0);
   
    // 받침 계산: (유니코드 - 0xAC00) % 28
    return (code - 0xAC00) % 28 !== 0;
}

function getProperParticle(name, nextChars) {
    const batchim = hasBatchim(name);
   
    if (nextChars.startsWith('이가') || nextChars.startsWith('가')) {
        return batchim ? '이' : '가';
    } else if (nextChars.startsWith('을를') || nextChars.startsWith('를')) {
        return batchim ? '을' : '를';
    } else if (nextChars.startsWith('은는') || nextChars.startsWith('는')) {
        return batchim ? '은' : '는';
    } else if (nextChars.startsWith('이다') || nextChars.startsWith('다')) {
        return batchim ? '이다' : '다';
    } else if (nextChars.startsWith('으로') || nextChars.startsWith('로')) {
        return batchim ? '으로' : '로';
    } else if (nextChars.startsWith('와') || nextChars.startsWith('과')) {
        return batchim ? '과' : '와';
    } else if (nextChars.startsWith('이랑') || nextChars.startsWith('랑')) {
        return batchim ? '이랑' : '랑';
    } else if (nextChars.startsWith('이나') || nextChars.startsWith('나')) {
        return batchim ? '이나' : '나';
    } else if (nextChars.startsWith('야') || nextChars.startsWith('아')) {
        return batchim ? '아' : '야';
    }
    // 받침에 상관없는 조사
    else if (nextChars.startsWith('의') || 
             nextChars.startsWith('에') ||
             nextChars.startsWith('에서') ||
             nextChars.startsWith('에게') ||
             nextChars.startsWith('한테') ||
             nextChars.startsWith('에게서') ||
             nextChars.startsWith('한테서') ||
             nextChars.startsWith('하고') ||
             nextChars.startsWith('도') ||
             nextChars.startsWith('만') ||
             nextChars.startsWith('까지') ||
             nextChars.startsWith('부터') ||
             nextChars.startsWith('조차') ||
             nextChars.startsWith('마저') ||
             nextChars.startsWith('뿐') ||
             nextChars.startsWith('이나마') ||
             nextChars.startsWith('밖에') ||
             nextChars.startsWith('처럼') ||
             nextChars.startsWith('같이') ||
             nextChars.startsWith('보다') ||
             nextChars.startsWith('마다') ||
             nextChars.startsWith('씩') ||
             nextChars.startsWith('대로')) {
        return '';
    }
    
    return '';
}

function typeText(text, charName) {
    if (text === undefined || text === null) {
        console.warn("typeText called with null/undefined text");
        return Promise.resolve();
    }
    const isEn = document.documentElement.lang === 'en';
    const isPlayer = charName === "나" || charName === "Me" || charName === "시스템" || charName === "System";

    // {name}은 항상 순수 이름으로 (자기소개 등에서 자연스럽게)
    // 한국어이고 화자가 주인공이 아닐 때만 '군'을 붙임
    let rawName = gameState.playerName;
    if (!isEn && !isPlayer && rawName) {
        // 뒤에 '학생'이나 '님' 등이 붙어있으면 '군'을 붙이지 않음
        const nameIndex = text.indexOf("{name}");
        const nextChar = text.charAt(nameIndex + 6);
        if (nextChar !== ' ' && nextChar !== '학' && nextChar !== '님' && nextChar !== '이') {
            rawName += " 군";
        }
    }
    let processedText = text.replace(/{name}/g, rawName);

    // {name?} 처리: 이름을 알면 이름, 모르면 '전학생'
    const charNameMap = {
        "서연": "Seoyeon", "유나": "Yuna", "다인": "Dain", "담임선생님": "Teacher", "보건선생님": "Nurse",
        "Seoyeon": "Seoyeon", "Yuna": "Yuna", "Dain": "Dain", "Homeroom Teacher": "Teacher", "Nurse": "Nurse"
    };
    const charKey = charName && (charNameMap[charName] || charName);
    const nameKnown = charKey && gameState[`knowsName_${charKey}`];
    const defaultTitle = isEn ? "Transfer Student" : "전학생";
    let nameToUse = nameKnown ? gameState.playerName : defaultTitle;

    if (!isEn && !isPlayer && nameToUse) {
        // 이름을 알 때만 '군'을 붙이고, 뒤에 '학생' 등이 붙어있으면 붙이지 않음
        const nameIndex = processedText.indexOf("{name?}");
        const nextChar = processedText.charAt(nameIndex + 7);
        if (nameKnown && nextChar !== ' ' && nextChar !== '학' && nextChar !== '님' && nextChar !== '이') {
            nameToUse += " 군";
        }
    }

    processedText = processedText.replace(/{name\?}/g, nameToUse);

    // 호감도 리스트 치환 {affinity_list}
    if (processedText.includes("{affinity_list}")) {
        const charNames = isEn ?
            { Seoyeon: "Seoyeon", Yuna: "Yuna", Dain: "Dain", Teacher: "Teacher", Nurse: "Nurse" } :
            { Seoyeon: "서연", Yuna: "유나", Dain: "다인", Teacher: "담임선생님", Nurse: "보건선생님" };

        let listStr = isEn ? "\n\n[Affinity Status]\n" : "\n\n[호감도 현황]\n";
        for (const [key, name] of Object.entries(charNames)) {
            // 만난 적이 있는 캐릭터만 표시
            if (!gameState["met" + key]) continue;

            const affinity = gameState.stats[key].affinity;
            let bar = "";

            if (affinity >= 0) {
                // 양수일 때: 빨간 하트(❤️)와 하얀 하트(🤍)
                const filled = Math.min(10, Math.floor(affinity / 10));
                bar = "❤️".repeat(filled) + "🤍".repeat(10 - filled);
            } else {
                // 음수일 때: 깨진 하트(💔)와 하얀 하트(🤍)
                const broken = Math.min(10, Math.floor(Math.abs(affinity) / 10));
                bar = "💔".repeat(broken) + "🤍".repeat(10 - broken);
            }

            listStr += `${name}: ${bar} (${affinity}%)\n`;
        }
        processedText = processedText.replace(/{affinity_list}/g, listStr);
    }

    // [연출 시작] 글자가 한 글자씩 찍히기 시작하면 캐릭터를 들썩거리게 함
    updateTalkingAnimation(charName, true);

    // [약속] 글자가 다 써질 때까지 게임이 멈추지 않고 기다리게 만드는 장치
    return new Promise((resolve) => {
        isTyping = true; // "글자 쓰는 중" 상태 표시
        if (chatSkipBtn) chatSkipBtn.disabled = true; // 출력 중 전송 버튼 비활성화
        skipTyping = false; // 스킵 요청 초기화
        messageEl.textContent = ""; // 대화창 비움
        
        let charIndex = 0; // 현재 출력된 글자 인덱스
        let startTime = null; // 출력 시작 시각
        
        // [수정 가능] 글자 나오는 속도. 숫자가 작을수록(예: 5) 빨라지고, 클수록(예: 50) 느려짐
        const speed = 30; 

        // 한 글자씩 화면에 그려주는 핵심 함수
        function typeFrame(timestamp) {
            if (!startTime) startTime = timestamp; // 시작 시간 기록

            // 유저가 화면 클릭하여 스킵 요청한 경우
            if (skipTyping) {
                messageEl.textContent = processedText; // 전체 문장 즉시 노출
                isTyping = false; // 출력 종료
                if (chatSkipBtn) chatSkipBtn.disabled = false; // 버튼 활성화
                skipTyping = false; // 스킵 요청 처리 완료
                updateTalkingAnimation(charName, false); // 캐릭터 움직임 정지
                resolve(); // 작업 완료 보고
                return;
            }

            // 경과 시간 계산하여 현재 프레임에 보여줄 글자 수 결정
            const elapsed = timestamp - startTime;
            const targetIndex = Math.min(Math.floor(elapsed / speed), processedText.length);

            // 아직 출력할 글자가 있다면 화면에 추가
            if (charIndex < targetIndex) {
                messageEl.textContent = processedText.substring(0, targetIndex);
                charIndex = targetIndex;
            }

            // 출력할 글자가 남았다면 다음 프레임 요청
            if (charIndex < processedText.length) {
                requestAnimationFrame(typeFrame);
            } else {
                // 출력 완료 시 마무리 작업
                isTyping = false;
                if (chatSkipBtn) chatSkipBtn.disabled = false;
                updateTalkingAnimation(charName, false); // 캐릭터 움직임 정지
                resolve(); // 다음 대사 진행 허용
            }
        }

        // 애니메이션 루프 시작
        requestAnimationFrame(typeFrame);
    });
}

function getFallbackReply(charName, isEn) {
    const charNameMap = {
        "서연": "Seoyeon", "유나": "Yuna", "다인": "Dain", "담임선생님": "Teacher", "보건선생님": "Nurse",
        "Seoyeon": "Seoyeon", "Yuna": "Yuna", "Dain": "Dain", "Teacher": "Teacher", "Nurse": "Nurse"
    };
    const charKey = charNameMap[charName] || charName;
    const affinity = gameState.stats[charKey]?.affinity || 0;
    const isDating = gameState[`isDating_${charKey}`] || gameState[`isDating_${charName}`];

    const scene = getScene(currentSceneId);
    const remoteKeywords = ["연락", "메시지", "전화", "톡", "문자", "Contact", "Message", "Call", "Text", "전송"];
    const isRemote = remoteKeywords.some(k =>
        (scene.context && scene.context.includes(k)) ||
        (scene.buttonText && scene.buttonText.includes(k)) ||
        (scene.text && scene.text.includes(k))
    );

    // prompts.js에 정의된 공통 함수 호출
    return window.getFallbackReply(charKey, isEn, isDating, affinity, isRemote, gameState.playerName);
}

function showCustomModal(message, isAlert = false) {
    return new Promise((resolve) => {
        modalMessage.textContent = message;
        customModal.style.display = 'flex';

        if (isAlert) {
            modalCancelBtn.style.display = 'none';
        } else {
            modalCancelBtn.style.display = 'inline-block';
        }

        const onConfirm = () => {
            cleanup();
            resolve(true);
        };

        const onCancel = () => {
            cleanup();
            resolve(false);
        };

        const cleanup = () => {
            modalConfirmBtn.removeEventListener('click', onConfirm);
            modalCancelBtn.removeEventListener('click', onCancel);
            customModal.style.display = 'none';
        };

        modalConfirmBtn.addEventListener('click', onConfirm);
        modalCancelBtn.addEventListener('click', onCancel);
    });
}

async function skipFreeTalk() {
    if (isTyping || !isFreeTalking) return;

    const isEn = document.documentElement.lang === 'en';
    const confirmMsg = isEn ? "Do you want to stop the conversation and proceed to the next scene?" : "대화를 중단하고 다음 장면으로 넘어가시겠습니까?";

    const confirmed = await showCustomModal(confirmMsg);

    if (confirmed) {
        freeTalkTurns = currentMaxTurns;
        gameState[`messaged_${currentSceneId}`] = true;

        // 스킵 시에는 프리토킹 횟수 증가하지 않음

        chatContainer.style.display = 'none';
        isFreeTalking = false;

        const endMsg = isEn ?
            "\n\n(Conversation ended. Click the screen to continue.)" :
            "\n\n(대화가 종료되었습니다. 화면을 클릭하여 계속하세요.)";
        messageEl.textContent += endMsg;
    }
}

async function sendChatMessage() {
    const text = chatInput.value.trim();
    if (!text || freeTalkTurns >= currentMaxTurns || isTyping) return;

    chatInput.value = "";
    freeTalkTurns++;
    turnCountEl.textContent = currentMaxTurns - freeTalkTurns;

    // 프리토킹 횟수 증가 (매 턴마다 1회)
    const scene = getScene(currentSceneId);
    const charNameMap = {
        "서연": "Seoyeon", "유나": "Yuna", "다인": "Dain", "담임선생님": "Teacher", "보건선생님": "Nurse",
        "Seoyeon": "Seoyeon", "Yuna": "Yuna", "Dain": "Dain", "Homeroom Teacher": "Teacher", "Nurse": "Nurse"
    };
    const charKey = charNameMap[scene.name] || scene.name;
    incrementFreeTalkCount(charKey);

    // 시스템 프롬프트의 턴 수 정보를 현재 진행 상황에 맞춰 업데이트
    if (freeTalkHistory.length > 0 && freeTalkHistory[0].role === "system") {
        const isEn = document.documentElement.lang === 'en';
        const remaining = currentMaxTurns - freeTalkTurns;
        const progressTag = isEn ? 
            `\n[CURRENT_PROGRESS]: ${freeTalkTurns}/${currentMaxTurns} turns used. ${remaining} turns remaining. ${remaining > 1 ? "Continue the conversation actively." : "This is the FINAL turn. Wrap up now."}` :
            `\n[현재 진행 상황]: 총 ${currentMaxTurns}턴 중 ${freeTalkTurns}턴 진행됨. ${remaining}턴 남음. ${remaining > 1 ? "대화를 적극적으로 이어가세요." : "지금이 마지막 턴입니다. 대화를 갈무리하세요."}`;
        
        // 이전 진행 상황 태그가 있으면 제거하고 새 태그 추가 (중복 방지)
        const baseContent = freeTalkHistory[0].content.split('\n[CURRENT_PROGRESS]')[0].split('\n[현재 진행 상황]')[0];
        freeTalkHistory[0].content = baseContent + progressTag;
    }

    // 사용자 메시지 표시
    updateNameTag("나");
    messageEl.textContent = text;
    freeTalkHistory.push({ role: "user", content: text });

    // 로딩 표시
    chatSendBtn.disabled = true;
    if (chatSkipBtn) chatSkipBtn.disabled = true;
    chatInput.disabled = true;
    const originalBtnContent = chatSendBtn.innerHTML;
    chatSendBtn.innerHTML = `<span class="loading-dots">...</span>`;

    // 캐릭터 및 대화창에 '생각중' 상태 적용
    const allChars = document.querySelectorAll('.char-slot img');
    allChars.forEach(img => img.classList.add('thinking'));
    dialogueBox.classList.add('thinking-box');

    try {
        const response = await fetch(API_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: freeTalkHistory })
        });

        if (!response.ok) {
            throw new Error(`API HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        let reply = data?.choices?.[0]?.message?.content?.trim();

        // [Worker 호환성 패치] Worker가 JSON 응답을 강제하거나, AI가 JSON 형식으로 답변할 경우를 대비하여 파싱합니다.
        const likelyJson = reply && (reply.includes('{') || reply.includes('[') || reply.includes('```json'));
        if (likelyJson) {
            try {
                let jsonStr = reply;
                // markdown 코드 블록 제거
                if (jsonStr.includes('```')) {
                    const match = jsonStr.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
                    if (match) jsonStr = match[1];
                }
                
                // 순수 JSON 부분만 추출 시도 (텍스트가 앞뒤로 섞여 있을 경우)
                if (!jsonStr.trim().startsWith('{') && !jsonStr.trim().startsWith('[')) {
                    const startExpr = jsonStr.indexOf('{');
                    const startArray = jsonStr.indexOf('[');
                    let start = -1;
                    if (startExpr !== -1 && startArray !== -1) start = Math.min(startExpr, startArray);
                    else start = Math.max(startExpr, startArray);
                    
                    if (start !== -1) {
                        const lastExpr = jsonStr.lastIndexOf('}');
                        const lastArray = jsonStr.lastIndexOf(']');
                        const end = Math.max(lastExpr, lastArray);
                        if (end > start) {
                            jsonStr = jsonStr.substring(start, end + 1);
                        }
                    }
                }

                const parsed = JSON.parse(jsonStr);
                const getTextFromObj = (obj) => {
                    if (typeof obj === 'string') return obj;
                    // 우선순위가 높은 키들
                    let text = obj.text || obj.dialogue || obj.content || obj.message || obj.response || obj.msg || obj.result;
                    
                    // 만약 아직 텍스트를 못 찾았다면, 객체의 값 중 가장 긴 문자열을 찾아봅니다 (보통 대화가 가장 깁니다)
                    if (!text) {
                        let longestStr = "";
                        for (const key in obj) {
                            if (typeof obj[key] === 'string' && obj[key].length > longestStr.length) {
                                longestStr = obj[key];
                            }
                        }
                        if (longestStr.length > 5) text = longestStr;
                    }
                    return text;
                };
                
                if (Array.isArray(parsed)) {
                    if (parsed.length > 0) {
                        const item = parsed[0];
                        const extracted = getTextFromObj(item);
                        if (extracted && typeof extracted === 'string') reply = extracted;
                    }
                } else {
                    const extracted = getTextFromObj(parsed);
                    if (extracted && typeof extracted === 'string') reply = extracted;
                }
            } catch (e) {
                console.warn("JSON parsing failed, using raw text:", e);
            }
        }

        if (reply) {
            // 표정 변화 파싱 [EXPRESSION: name] - 전역 검색(/g)으로 모든 태그 제거
            const exprRegex = /\[EXPRESSION:\s*(\w+)\]/gi;
            let exprMatch;

            // 마지막으로 매칭된 표정을 적용
            while ((exprMatch = exprRegex.exec(reply)) !== null) {
                const exprName = exprMatch[1].toLowerCase();
                const scene = getScene(currentSceneId);
                const charExprs = CHARACTER_EXPRESSIONS[scene.name];
                if (charExprs && charExprs[exprName]) {
                    const centerSlot = charSlots.center;
                    const exprUrl = getAssetUrl(charExprs[exprName]);
                    if (centerSlot.firstChild) {
                        centerSlot.firstChild.src = exprUrl;
                    } else {
                        const img = document.createElement('img');
                        img.src = exprUrl;
                        centerSlot.appendChild(img);
                    }
                }
            }
            // 모든 표정 태그 제거
            reply = reply.replace(exprRegex, "").trim();

            // 스탯 변화 파싱 [STATS: affinity+X] - 전역 검색(/g)으로 모든 태그 제거
            const statsRegex = /\[STATS:\s*affinity\s*([+-]?\d+)\]/gi;
            let statMatch;

            while ((statMatch = statsRegex.exec(reply)) !== null) {
                const affinityChange = parseInt(statMatch[1]);
                const scene = getScene(currentSceneId);
                const charNameMap = {
                    "서연": "Seoyeon", "유나": "Yuna", "다인": "Dain", "담임선생님": "Teacher", "보건선생님": "Nurse",
                    "Seoyeon": "Seoyeon", "Yuna": "Yuna", "Dain": "Dain", "Teacher": "Teacher", "Nurse": "Nurse"
                };
                const charKey = charNameMap[scene.name] || scene.name;

                if (gameState.stats[charKey]) {
                    gameState.stats[charKey].affinity = Math.max(-100, Math.min(100, gameState.stats[charKey].affinity + affinityChange));
                    console.log(`AI Stat Change (${charKey}): Affinity ${affinityChange} (Total: Aff ${gameState.stats[charKey].affinity})`);
                    showAffinityChange(affinityChange, charKey);
                    // 최대 호감도 업데이트 (갤러리 표정 해금용)
                    updateMaxAffinity(charKey, gameState.stats[charKey].affinity);
                    // 호감도 100 달성 시 갤러리 캐릭터 해금
                    checkAffinityUnlock(charKey);
                }
            }
            // 모든 스탯 태그 제거
            reply = reply.replace(statsRegex, "").trim();

            // 태그 제거 후 내용이 비어있을 경우 대비
            if (!reply) {
                reply = "...";
            }

            const scene = getScene(currentSceneId);
            updateNameTag(scene.name);

            // 답변 출력 전 생각중 상태 해제
            const allChars = document.querySelectorAll('.char-slot img');
            allChars.forEach(img => img.classList.remove('thinking'));
            dialogueBox.classList.remove('thinking-box');

            await typeText(reply, scene.name); // 타이핑이 끝날 때까지 기다립니다.
            freeTalkHistory.push({ role: "assistant", content: reply });

            // 대화 기록 저장 (시스템 프롬프트 제외하고 최근 10개 정도만 유지하여 컨텍스트 최적화)
            const chatOnly = freeTalkHistory.filter(m => m.role !== "system");
            gameState.chatMemories[scene.name] = chatOnly.slice(-10);
        } else {
            // AI 응답이 비어있을 경우
            const scene = getScene(currentSceneId);
            updateNameTag(scene.name);
            const fallbackMsg = document.documentElement.lang === 'en' ? "..." : "...";
            await typeText(fallbackMsg, scene.name);
        }

        // 대화 종료 체크를 AI 응답 처리 이후로 이동 (응답 실패 시에도 종료 가능하도록)
        if (freeTalkTurns >= currentMaxTurns) {
            gameState[`messaged_${currentSceneId}`] = true;

            setTimeout(() => {
                chatContainer.style.display = 'none';
                isFreeTalking = false;
                const endMsg = document.documentElement.lang === 'en' ?
                    "\n\n(Conversation ended. Click the screen to continue.)" :
                    "\n\n(대화가 종료되었습니다. 화면을 클릭하여 계속하세요.)";
                messageEl.textContent += endMsg;
            }, 500);
        }
    } catch (error) {
        console.error("AI Chat Error:", error);

        const scene = getScene(currentSceneId);
        const isEn = document.documentElement.lang === 'en';
        const fallbackMsg = getFallbackReply(scene.name, isEn);

        updateNameTag(scene.name);
        await typeText(fallbackMsg, scene.name);
        freeTalkHistory.push({ role: "assistant", content: fallbackMsg });

        // 에러 발생 시 즉시 대화 종료 처리
        freeTalkTurns = currentMaxTurns;
        gameState[`messaged_${currentSceneId}`] = true;

        // 에러 시에는 프리토킹 횟수 증가하지 않음

        setTimeout(() => {
            chatContainer.style.display = 'none';
            isFreeTalking = false;
            const endMsg = isEn ?
                "\n\n(Conversation ended. Click the screen to continue.)" :
                "\n\n(대화가 종료되었습니다. 화면을 클릭하여 계속하세요.)";
            messageEl.textContent += endMsg;
        }, 500);
    } finally {
        chatSendBtn.disabled = false;
        if (chatSkipBtn) chatSkipBtn.disabled = false;
        chatInput.disabled = false;
        chatSendBtn.innerHTML = originalBtnContent;

        // 모든 생각중 상태 해제
        const allChars = document.querySelectorAll('.char-slot img');
        allChars.forEach(img => img.classList.remove('thinking'));
        dialogueBox.classList.remove('thinking-box');
        
        chatInput.focus();
    }
}

chatSendBtn.onclick = sendChatMessage;
if (chatSkipBtn) chatSkipBtn.onclick = skipFreeTalk;
chatInput.onkeydown = (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        sendChatMessage();
    }
};

nameConfirmBtn.onclick = async () => {
    const name = playerNameInput.value.trim();

    // 유효성 검사: 1~4자, 숫자/특수문자 제외 (한글, 영문만 허용)
    const nameRegex = /^[a-zA-Z가-힣]{1,4}$/;

    if (!nameRegex.test(name)) {
        const isEn = document.documentElement.lang === 'en';
        const msg = isEn ? "Please enter a name between 1-4 characters (Korean or English only)." : "이름은 한글 또는 영문 1~4자로 입력해주세요. (숫자, 특수문자 제외)";
        await showCustomModal(msg, true);
        playerNameInput.focus();
        return;
    }

    gameState.playerName = name;
    nameInputContainer.style.display = 'none';
    dialogueBox.style.pointerEvents = 'auto';

    const scene = getScene(currentSceneId);
    const nextId = resolveNextScene(scene);
    if (nextId) {
        renderScene(nextId);
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

function executeChoice(choice) {
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
                    showAffinityChange(stats.affinity, char);
                }
            }
        }
    }

    let nextScene = choice.next;

    // 호감도에 따른 결과 분기 처리
    if (choice.affinityBranches && choice.affinityChar && gameState.stats[choice.affinityChar]) {
        const currentAff = gameState.stats[choice.affinityChar].affinity;
        // 높은 문턱부터 체크하여 조건에 맞는 가장 높은 분기를 선택
        const sortedBranches = [...choice.affinityBranches].sort((a, b) => b.minAffinity - a.minAffinity);
        for (const branch of sortedBranches) {
            if (currentAff >= branch.minAffinity) {
                nextScene = branch.next;
                break;
            }
        }
    }

    if (nextScene === 'index.html') {
        location.href = 'index.html';
    } else {
        renderScene(nextScene);
    }
}

function checkChoices() {
    const scene = getScene(currentSceneId);
    if (scene.choices) {
        choiceContainer.innerHTML = "";

        // 선택지 복사 및 필터링
        let availableChoices = scene.choices.filter(choice => {
            if (choice.condition && !gameState[choice.condition]) return false;
            if (choice.excludeCondition && gameState[choice.excludeCondition]) return false;
            return true;
        });

        // 선택지 무작위 셔플 (난이도 상승)
        availableChoices.sort(() => Math.random() - 0.5);

        availableChoices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = choice.text.replace(/{name}/g, gameState.playerName);
            btn.onclick = () => executeChoice(choice);
            choiceContainer.appendChild(btn);
        });
        choiceContainer.style.display = 'flex';
    }
}

dialogueBox.onclick = async () => {
    // 타이핑 중에는 타이핑 스킵
    if (isTyping) {
        skipTyping = true;
        return;
    }

    const scene = getScene(currentSceneId);
    console.log('[DialogueBox Click] currentSceneId:', currentSceneId, 'scene.type:', scene?.type, 'isFreeTalking:', isFreeTalking);
    
    // 프리톡 종료 후 클릭 시 다음 장면으로 진행 (프리톡 타입이지만 isFreeTalking이 false인 경우)
    if (scene?.type === 'free_talk' && !isFreeTalking) {
        const nextId = resolveNextScene(scene);
        console.log('[FreeTalk Ended] Proceeding to next scene:', nextId);
        if (nextId) {
            await renderScene(nextId);
        }
        return;
    }
    
    if (isFreeTalking || scene.type === 'input') return;

    // 시네마틱 모드 (텍스트 없는 라우팅 노드)에서는 일반 클릭 방지 (자동 진행 로직에서 1.5초 후 window 리스너로 처리)
    if (!scene.text && (!scene.choices || scene.choices.length === 0)) {
        return;
    }

    if (scene.choices) {
        // 선택지가 하나뿐이고 그 텍스트가 "다음" 또는 "Next"인 경우 자동 진행
        const availableChoices = scene.choices.filter(choice => {
            if (choice.condition && !gameState[choice.condition]) return false;
            if (choice.excludeCondition && gameState[choice.excludeCondition]) return false;
            return true;
        });

        if (availableChoices.length === 1 && (availableChoices[0].text === "다음" || availableChoices[0].text === "Next")) {
            executeChoice(availableChoices[0]);
            return;
        }

        dialogueBox.style.display = 'none'; // 대화창 숨기기
        checkChoices(); // 선택지 표시
    } else {
        const nextId = resolveNextScene(scene);
        if (nextId) {
            await renderScene(nextId);
        } else {
            // 다음 장면이 없고 선택지도 없는 경우 (게임 종료)
            location.href = 'index.html';
        }
    }
};

// 초기 실행 제어 (index.html에서 startGame 호출 시 실행되도록 변경 가능)
if (!window.preventAutoStart) {
    window.addEventListener('DOMContentLoaded', async () => {
        soundManager.init();
        await renderScene("start");
    });
}

// 명시적 게임 시작 함수
window.initGame = async () => {
    soundManager.init();
    // 새 게임 시작 시 저장 데이터 삭제
    if (window.clearSavedGame) {
        window.clearSavedGame();
    }
    await renderScene("start");
};

// 저장된 게임에서 시작하는 함수
window.initGameFromSave = async (saveData) => {
    soundManager.init();
    
    // 저장된 상태 복원
    if (saveData.gameState) {
        // gameState 복원
        Object.assign(gameState, saveData.gameState);
    }
    
    // 현재 씬 ID 복원
    if (saveData.currentSceneId) {
        currentSceneId = saveData.currentSceneId;
    }
    
    // 마지막 배경 URL 복원
    if (saveData.lastBgUrl) {
        lastBgUrl = saveData.lastBgUrl;
    }
    
    // 배경 이미지 직접 설정 (renderScene 전에 미리 설정)
    if (saveData.lastBgUrl) {
        const bgLayer = document.getElementById('background-layer');
        if (bgLayer) {
            bgLayer.style.backgroundImage = `url(${saveData.lastBgUrl})`;
        }
    }
    
    // 캐릭터 이미지 복원
    if (saveData.currentCharacters) {
        const charSlots = {
            left: document.getElementById('char-left'),
            center: document.getElementById('char-center'),
            right: document.getElementById('char-right')
        };
        for (const [slot, src] of Object.entries(saveData.currentCharacters)) {
            if (charSlots[slot] && src) {
                charSlots[slot].innerHTML = `<img src="${src}" alt="character">`;
            }
        }
    }
    
    console.log('[Load] 게임 상태 복원 완료:', currentSceneId, gameState);
    
    // 저장된 씬부터 렌더링
    await renderScene(currentSceneId);
};
