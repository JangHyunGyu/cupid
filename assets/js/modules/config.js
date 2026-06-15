/**
 * ============================================================================
 * config.js - 게임 전역 설정 상수 및 유틸리티 함수
 * ============================================================================
 *
 * 이 파일은 게임 전체에서 공통으로 사용하는 설정값과 유틸리티 함수를 정의합니다.
 * 모든 모듈이 이 파일에 정의된 상수들을 참조하므로, 가장 먼저 로드되어야 합니다.
 *
 * 【포함 내용】
 * - API_ENDPOINT              : 서비스 API 서버 주소
 * - AI_API_ENDPOINT           : AI 채팅 서버 주소
 * - ASSET_VERSION             : 에셋 캐시 버스팅용 버전 번호
 * - DEFAULT_MAX_FREE_TALK_TURNS : 프리토킹 기본 최대 턴 수
 * - SEND_ICON                 : 채팅 전송 버튼 SVG 아이콘
 * - REGISTERED_CG_IDS         : 갤러리에 등록된 CG ID 목록
 * - CHAR_NAME_MAP             : 캐릭터 표시 이름 → 내부 키 매핑
 * - getAssetUrl()             : URL에 버전 쿼리 파라미터를 추가하는 함수
 *
 * 【다른 모듈과의 관계】
 * - 모든 모듈보다 먼저 로드되어야 합니다
 * - GalleryManager, UIManager, DialogueSystem, FreeTalkSystem, SceneRenderer에서 참조
 *
 * 【window 전역 노출】
 * const로 선언된 변수는 window 속성이 되지 않으므로,
 * 다른 파일에서 window.XXX 형태로 접근할 수 있도록 명시적으로 할당합니다.
 * (같은 전역 렉시컬 환경에서는 bare name 접근도 가능합니다)
 *
 * @version 2.1.0
 */

// ============================================================================
// 전역 설정 상수
// ============================================================================

/**
 * 서비스 API 엔드포인트
 * - 이미지 업로드, 로그 저장 등 서비스성 요청에 사용합니다
 */
const API_ENDPOINT = "https://chatbot-api.yama5993.workers.dev/";

/**
 * AI 채팅 API 엔드포인트
 * - FreeTalkSystem에서 이 주소로 HTTP POST 요청을 보내 AI 응답을 받아옵니다
 */
const AI_API_ENDPOINT = "https://openrouter-api.yama5993.workers.dev/";
const AI_MODEL_ID = "deepseek-v4-flash";

/**
 * 에셋 버전 번호
 * - 이미지, 오디오 등 에셋 파일 URL 뒤에 "?v=2.2.3" 형태로 붙습니다
 * - 버전을 바꾸면 브라우저가 캐시를 무시하고 새 파일을 다운로드합니다
 * - 이미지나 오디오를 수정했는데 반영이 안 될 때 이 숫자를 올리세요
 */
        const ASSET_VERSION = "2.9.34";

/**
 * 프리토킹(자유 대화) 기본 최대 턴 수
 * - AI 캐릭터와 주고받을 수 있는 대화 횟수의 기본값
 * - 시나리오에서 scene.maxTurns로 개별 설정 가능
 * - 5로 설정하면 플레이어가 5번 말할 수 있음
 */
const DEFAULT_MAX_FREE_TALK_TURNS = 5;

/**
 * 채팅 전송 버튼의 SVG 아이콘 (종이비행기 모양)
 * - 프리토킹 UI의 전송 버튼에 표시됩니다
 */
const SEND_ICON = `<svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>`;

const CUPID_IS_IOS = /iPhone|iPad|iPod/i.test(navigator.userAgent || '')
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
let cupidKeyboardBaselineHeight = Math.max(
    window.innerHeight || 0,
    document.documentElement?.clientHeight || 0,
    window.visualViewport?.height || 0
);

function isCupidDesktopPointer() {
    return window.matchMedia?.('(hover: hover) and (pointer: fine)').matches ?? false;
}

function isCupidEditableElement(element) {
    if (!element || element === document.body) return false;
    return element.matches?.('input, textarea, [contenteditable="true"]') ?? false;
}

function updateCupidKeyboardBaseline() {
    const viewport = window.visualViewport;
    cupidKeyboardBaselineHeight = Math.max(
        cupidKeyboardBaselineHeight,
        window.innerHeight || 0,
        document.documentElement?.clientHeight || 0,
        viewport?.height || 0
    );
}

function getCupidKeyboardOffset(focusedElement = document.activeElement) {
    const viewport = window.visualViewport;
    if (!viewport || window.innerWidth > 768 || !isCupidEditableElement(focusedElement)) {
        updateCupidKeyboardBaseline();
        return 0;
    }

    const viewportHeight = viewport.height;
    const viewportTop = viewport.offsetTop || 0;
    const layoutHeight = Math.max(
        cupidKeyboardBaselineHeight,
        window.innerHeight || 0,
        document.documentElement?.clientHeight || 0,
        viewportHeight + viewportTop
    );
    const rawOffset = Math.max(layoutHeight - viewportHeight - viewportTop, 0);
    const threshold = CUPID_IS_IOS ? 120 : 80;
    return rawOffset > threshold ? rawOffset : 0;
}

/**
 * 갤러리에 등록된 CG(이벤트 그림) ID 목록
 * - 여기에 등록된 CG만 갤러리에서 해금 및 표시됩니다
 * - 새로운 CG를 추가하면 이 Set에 ID를 추가해야 갤러리에 나타납니다
 * - 예: 'nurse_home_event1' → assets/images/cg/nurse_home_event1.webp
 */
const REGISTERED_CG_IDS = new Set([
    'nurse_home_event1',
    'dain_hurt_event1',
    'dain_depression_event1',
    'ending_perfect_seoyeon',
    'ending_perfect_yuna',
    'ending_perfect_dain',
    'ending_bittersweet',
    'ending_true_teacher',
    'ending_true_nurse',
    'ending_harem',
    'ending_alone',
    'ending_friend',
    'ending_good_seoyeon',
    'ending_good_yuna',
    'ending_good_dain',
    'ending_confess_fail_seoyeon',
    'ending_confess_fail_yuna',
    'ending_confess_fail_dain',
    'ending_mayhem',
    'ending_good_teacher',
    'ending_good_nurse',
    'ending_true_seoyeon',
    'ending_true_yuna',
    'ending_true_dain',
    'ending_perfect_teacher',
    'ending_perfect_nurse'
]);

/**
 * 캐릭터 표시 이름 → 내부 키 매핑 (공통 상수)
 * - 한국어/영어 이름 모두 내부 키로 변환
 * - UIManager, DialogueSystem, FreeTalkSystem, SceneRenderer 등에서 공유
 * - 캐릭터 추가/변경 시 여기만 수정하면 전체 반영
 */
const CHAR_NAME_MAP = Object.freeze({
    // Korean
    "서연": "Seoyeon", "유나": "Yuna", "다인": "Dain",
    "담임선생님": "Teacher", "보건선생님": "Nurse",
    // English
    "Seoyeon": "Seoyeon", "Yuna": "Yuna", "Dain": "Dain",
    "Teacher": "Teacher", "Nurse": "Nurse",
    "Homeroom Teacher": "Teacher", "School Nurse": "Nurse",
    // Spanish
    "Profesora": "Teacher", "Enfermera": "Nurse",
    // Portuguese (PT-BR)
    "Professora": "Teacher", "Enfermeira": "Nurse",
    // Japanese
    "ソヨン": "Seoyeon", "ユナ": "Yuna", "ダイン": "Dain",
    "担任先生": "Teacher", "保健先生": "Nurse", "保健室の先生": "Nurse",
    // French
    "Professeur Principal": "Teacher", "Professeure principale": "Teacher", "Professeure": "Teacher", "Infirmière Scolaire": "Nurse", "Infirmière scolaire": "Nurse", "Infirmière": "Nurse",
    // German
    "Klassenlehrerin": "Teacher", "Lehrerin": "Teacher", "Schulkrankenschwester": "Nurse"
});


// ============================================================================
// 유틸리티 함수
// ============================================================================

/**
 * 에셋 URL에 버전 쿼리 파라미터를 추가하는 함수
 *
 * 브라우저는 같은 URL의 파일을 캐시해서 재사용합니다.
 * 이미지를 수정해도 URL이 같으면 예전 이미지가 보일 수 있습니다.
 * URL 뒤에 ?v=버전 을 붙이면 브라우저가 새 파일로 인식합니다.
 *
 * 사용 예시:
 *   getAssetUrl("images/char.png")  → "images/char.png?v=2.2.3"
 *
 * @param {string} url - 원본 URL (예: "assets/images/bg.webp")
 * @returns {string} 버전이 추가된 URL (예: "assets/images/bg.webp?v=2.2.3")
 */
function getAssetUrl(url) {
    // URL이 없으면 그대로 반환
    if (!url) return url;

    // URL에 이미 ?가 있으면 &로 연결, 없으면 ?로 연결
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}v=${ASSET_VERSION}`;
}


// ============================================================================
// 디바이스 ID (chat-logs / R2 업로드 / error-logs 공용)
// ============================================================================
// 유저 식별을 위한 영구 디바이스 ID. localStorage에 저장.
// harem/chatbot의 user_id와 동일한 역할.
function getCupidDeviceId() {
    try {
        let id = localStorage.getItem('cupid_device_id');
        if (!id) {
            id = 'cupid_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 10);
            localStorage.setItem('cupid_device_id', id);
        }
        return id;
    } catch (_) {
        return 'cupid_anon';
    }
}

const CUPID_SUPPORTED_LANGS = new Set(['ko', 'en', 'es', 'ja', 'fr', 'de', 'pt']);

function getCupidLanguage() {
    const raw = String(window.GAME_LANG || document.documentElement.lang || 'ko')
        .toLowerCase()
        .replace('_', '-');
    const lang = raw.split('-')[0];
    return CUPID_SUPPORTED_LANGS.has(lang) ? lang : 'ko';
}

function getCupidAppId() {
    const lang = getCupidLanguage();
    return lang === 'ko' ? 'cupid' : `cupid-${lang}`;
}

// ============================================================================
// R2 이미지 업로드 (harem 패턴과 동일)
// ============================================================================
async function uploadImageToR2(base64Image, subPath = 'upload_image', retries = 2) {
    const endpoint = API_ENDPOINT;
    let lastError;
    for (let attempt = 0; attempt <= retries; attempt++) {
        try {
            if (attempt > 0) await new Promise(r => setTimeout(r, 1000 * attempt));
            const res = await fetch(endpoint + 'upload-image', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ image: base64Image, path: 'cupid_image/' + subPath })
            });
            const data = await res.json();
            if (!data.ok) throw new Error(data.error || 'Image upload failed');
            return data.url;
        } catch (e) {
            lastError = e;
            console.warn(`[R2] cupid 이미지 업로드 시도 ${attempt + 1}/${retries + 1} 실패:`, e.message);
        }
    }
    throw lastError;
}

// ============================================================================
// 기존 localStorage 대화 → D1 일괄 마이그레이션 (소급 적용)
// ============================================================================
// 디바이스 ID 첫 생성 시 1회 실행. 기존 base64 이미지는 R2로 변환 후 URL로 교체.
// 본편: cupid_save → gameState.chatMemories[charName] = [...]
// Gallery: cupid_freetalk_memory = { [charId]: [...] }
async function migrateCupidChatHistoryToD1() {
    const FLAG = 'cupid_chat_migrated_v1';
    if (localStorage.getItem(FLAG)) return;

    const userId = getCupidDeviceId();
    const language = getCupidLanguage();
    const headers = { 'Content-Type': 'application/json', 'x-app-id': getCupidAppId() };
    let totalSaved = 0;

    async function postOne(charId, role, content, sessionId, context) {
        try {
            await fetch(API_ENDPOINT + 'chat-logs', {
                method: 'POST',
                headers,
                body: JSON.stringify({ userId, charId, sessionId, role, content, context, language })
            });
            totalSaved++;
        } catch (e) {
            console.warn('[Migrate] post 실패:', e.message);
        }
    }

    // base64 이미지가 포함된 content를 R2로 변환
    async function convertBase64ToR2(content) {
        if (!content || typeof content !== 'string') return content;
        const dataImageRegex = /(data:image\/[a-z]+;base64,[A-Za-z0-9+/=]+)/g;
        const matches = content.match(dataImageRegex);
        if (!matches) return content;

        let result = content;
        for (const b64 of matches) {
            try {
                const url = await uploadImageToR2(b64, 'migrated');
                if (url) result = result.replace(b64, url);
            } catch (e) {
                console.warn('[Migrate] base64 → R2 변환 실패:', e.message);
            }
        }
        return result;
    }

    // 마이그레이션 시 charId 정규화: 다국어 표시 이름 / lowercase 키 → 표준 대문자 영문 키
    // 예: '보건선생님' / 'Infirmière' / 'nurse' → 'Nurse'
    const GALLERY_LOWERCASE_MAP = { seyoun: 'Seoyeon', yuna: 'Yuna', dain: 'Dain', teacher: 'Teacher', nurse: 'Nurse' };
    function _normalizeCharId(raw) {
        if (!raw) return raw;
        if (CHAR_NAME_MAP[raw]) return CHAR_NAME_MAP[raw];
        if (GALLERY_LOWERCASE_MAP[raw]) return GALLERY_LOWERCASE_MAP[raw];
        return raw;
    }

    // gallery-freetalk 레거시: assistant content가 원본 JSON 문자열인 경우 .text만 추출
    function _unwrapAssistantJson(content, role) {
        if (role !== 'assistant' || typeof content !== 'string') return content;
        const trimmed = content.trim();
        if (!trimmed.startsWith('{') && !trimmed.startsWith('```')) return content;
        try {
            let s = trimmed;
            const m = s.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
            if (m) s = m[1].trim();
            const obj = JSON.parse(s);
            if (obj && typeof obj.text === 'string') return obj.text;
        } catch {}
        return content;
    }

    async function migrateChatArray(charId, history, sessionId, context) {
        if (!Array.isArray(history)) return;
        const normalizedCharId = _normalizeCharId(charId);
        for (const msg of history) {
            if (!msg || msg.role === 'system' || !msg.content) continue;
            let content = _unwrapAssistantJson(msg.content, msg.role);
            content = await convertBase64ToR2(content);
            await postOne(normalizedCharId, msg.role, content, sessionId, context);
        }
    }

    try {
        // 1. 본편 cupid_save
        const saveRaw = localStorage.getItem('cupid_save');
        if (saveRaw) {
            try {
                const save = JSON.parse(saveRaw);
                const memories = save?.gameState?.chatMemories || {};
                for (const charName of Object.keys(memories)) {
                    await migrateChatArray(charName, memories[charName], 'migrated-main', '1:1');
                }
            } catch (e) {
                console.warn('[Migrate] cupid_save 파싱 실패:', e.message);
            }
        }

        // 2. Gallery cupid_freetalk_memory
        const gftRaw = localStorage.getItem('cupid_freetalk_memory');
        if (gftRaw) {
            try {
                const gft = JSON.parse(gftRaw);
                for (const charId of Object.keys(gft)) {
                    await migrateChatArray(charId, gft[charId], 'migrated-gallery', '1:1');
                }
            } catch (e) {
                console.warn('[Migrate] cupid_freetalk_memory 파싱 실패:', e.message);
            }
        }

        localStorage.setItem(FLAG, new Date().toISOString());
        if (totalSaved > 0) {
            console.info(`[Migrate] cupid 기존 대화 ${totalSaved}건 D1 마이그레이션 완료`);
        }
    } catch (e) {
        console.warn('[Migrate] 마이그레이션 오류:', e.message);
    }
}

// user/assistant 메시지 한 페어를 D1에 저장. 실패해도 게임 흐름 영향 없음.
async function saveCupidChatLog({ charId, userContent, assistantContent, sessionId = '', context = '1:1', playerName: _pn }) {
    if (!charId) return;
    const userId = getCupidDeviceId();
    const playerName = _pn || window.gameEngine?.stateManager?.playerName || '';
    const language = getCupidLanguage();
    const headers = { 'Content-Type': 'application/json', 'x-app-id': getCupidAppId() };
    const post = (role, content) => fetch(API_ENDPOINT + 'chat-logs', {
        method: 'POST',
        headers,
        body: JSON.stringify({ userId, charId, sessionId, role, content, context, playerName, language })
    }).catch(err => console.warn('[ChatLog] cupid 저장 실패:', err.message));

    try {
        // 순서 보장: user 먼저 저장 후 assistant 저장 (병렬 시 created_at/id 역전 방지)
        if (userContent) await post('user', userContent);
        if (assistantContent) await post('assistant', assistantContent);
    } catch (e) {
        console.warn('[ChatLog] cupid saveCupidChatLog 오류:', e.message);
    }
}

// ============================================================================
// 대화 히스토리 이미지 최적화 (윈도우 가드)
// ============================================================================
// DeepSeek 텍스트 API가 이미지 파트를 받지 않으므로,
// 최근 이미지는 서버 Vision 분석용 참조로, 오래된 이미지는 텍스트 안내로 치환합니다.
// 실제 채팅 UI/저장 데이터의 이미지는 그대로 유지됩니다.
function optimizeImageHistory(messages, recentCount = 5) {
    const r2ImageRegex = /https?:\/\/[^\s]+\.(?:jpg|jpeg|png|gif|webp)(?:\?[^\s]*)?/i;
    const lang = window.GAME_LANG || document.documentElement.lang || 'ko';
    const placeholder = lang === 'ko'
        ? '[첨부 이미지: 현재 DeepSeek 텍스트 API는 이미지 픽셀을 직접 읽을 수 없습니다. 유저의 텍스트와 대화 맥락에만 근거해 반응하세요.]'
        : '[Image attachment: the current DeepSeek text API cannot inspect image pixels directly. Respond using only the user text and conversation context.]';

    return messages.map((msg, idx) => {
        const isRecent = idx >= messages.length - recentCount;
        const content = msg && msg.content;
        if (!content || typeof content !== 'string') return msg;

        const hasBase64 = content.startsWith('data:image/') || content.includes('\n\ndata:image/');
        const hasR2 = r2ImageRegex.test(content);
        if (!hasBase64 && !hasR2) return msg;

        let textOnly = content;
        let imageRef = '';
        if (content.includes('\n\ndata:image/')) {
            imageRef = `data:image/${content.split('\n\ndata:image/')[1] || ''}`.trim();
            textOnly = content.split('\n\ndata:image/')[0].trim();
        } else if (content.startsWith('data:image/')) {
            imageRef = content;
            textOnly = '';
        } else {
            textOnly = content.replace(r2ImageRegex, (match) => {
                imageRef = match;
                return '';
            }).replace(/\n{3,}/g, '\n\n').trim();
        }
        const imageNotice = isRecent && imageRef
            ? `[Image attachment for server vision: ${imageRef}]`
            : placeholder;
        return { ...msg, content: textOnly ? `${textOnly}\n\n${imageNotice}` : imageNotice };
    });
}

// ============================================================================
// window 전역 노출
// ============================================================================
// const로 선언된 변수는 window의 속성이 되지 않으므로,
// 다른 모듈 파일에서 window.XXX 형태로도 접근할 수 있도록 명시적으로 할당합니다.

window.API_ENDPOINT = API_ENDPOINT;
window.AI_API_ENDPOINT = AI_API_ENDPOINT;
window.AI_MODEL_ID = AI_MODEL_ID;
window.ASSET_VERSION = ASSET_VERSION;
window.DEFAULT_MAX_FREE_TALK_TURNS = DEFAULT_MAX_FREE_TALK_TURNS;
window.SEND_ICON = SEND_ICON;
window.REGISTERED_CG_IDS = REGISTERED_CG_IDS;
window.CHAR_NAME_MAP = CHAR_NAME_MAP;
window.CUPID_IS_IOS = CUPID_IS_IOS;
window.getAssetUrl = getAssetUrl;
window.isCupidDesktopPointer = isCupidDesktopPointer;
window.getCupidKeyboardOffset = getCupidKeyboardOffset;
window.updateCupidKeyboardBaseline = updateCupidKeyboardBaseline;
window.getCupidDeviceId = getCupidDeviceId;
window.getCupidLanguage = getCupidLanguage;
window.getCupidAppId = getCupidAppId;
window.uploadImageToR2 = uploadImageToR2;
window.optimizeImageHistory = optimizeImageHistory;
window.saveCupidChatLog = saveCupidChatLog;
window.migrateCupidChatHistoryToD1 = migrateCupidChatHistoryToD1;

// 페이지 로드 후 백그라운드로 마이그레이션 1회 실행 (idle 시간에)
function _cupidMigrateOnLoad() {
    window.removeEventListener('load', _cupidMigrateOnLoad);
    setTimeout(() => {
        try { migrateCupidChatHistoryToD1(); } catch (_) {}
    }, 3000);
}
if (typeof window !== 'undefined') {
    if (document.readyState === 'complete') {
        _cupidMigrateOnLoad();
    } else {
        window.addEventListener('load', _cupidMigrateOnLoad);
    }
}
