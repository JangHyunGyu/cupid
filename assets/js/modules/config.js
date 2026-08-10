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

/**
 * 에셋 버전 번호
 * - 이미지, 오디오 등 에셋 파일 URL 뒤에 "?v=2.2.3" 형태로 붙습니다
 * - 버전을 바꾸면 브라우저가 캐시를 무시하고 새 파일을 다운로드합니다
 * - 이미지나 오디오를 수정했는데 반영이 안 될 때 이 숫자를 올리세요
 */
const ASSET_VERSION = "2.9.143";

const CUPID_PROMPT_EPOCH_VERSION = 1;

function _getCupidPromptEpochMessageText(message) {
    const content = message?.content;
    if (typeof content === 'string') return content;
    if (!Array.isArray(content)) return String(content || '');

    return content.map(part => {
        if (typeof part === 'string') return part;
        if (part?.type === 'text') return part.text || '';
        if (part?.type === 'image_url' || part?.image_url) return '[image attachment]';
        return '';
    }).filter(Boolean).join(' ');
}

function _getCupidPromptEpochMessageKey(message) {
    const text = _getCupidPromptEpochMessageText(message);
    let hash = 2166136261;
    for (let i = 0; i < text.length; i++) {
        hash ^= text.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
    }

    return [
        message?.role || '',
        message?.speakerId || message?.speakerName || '',
        Number(message?.timestamp || message?.ts || 0) || '',
        (hash >>> 0).toString(36)
    ].join('|');
}

function _compactCupidPromptEpochMessages(messages = []) {
    return (Array.isArray(messages) ? messages : []).map(message => {
        const rawText = _getCupidPromptEpochMessageText(message)
            .replace(/data:image\/[^;]+;base64,[a-zA-Z0-9+/=\s]+/g, '[image attachment]')
            .replace(/===CACHE_BOUNDARY===/g, '')
            .replace(/\r\n?/g, '\n')
            .replace(/[ \t]+/g, ' ')
            .replace(/\n{3,}/g, '\n\n')
            .trim();
        if (!rawText) return '';

        const text = rawText.length > 420 ? `${rawText.slice(0, 417).trim()}...` : rawText;
        const label = message?.speakerName || (message?.role === 'assistant' ? 'Character' : 'User');
        return `${label}: ${text}`;
    }).filter(Boolean).join('\n');
}

function _mergeCupidPromptEpochCarryover(previousCarryover, droppedMessages, maxChars) {
    const nextBlock = _compactCupidPromptEpochMessages(droppedMessages);
    let merged = [String(previousCarryover || '').trim(), nextBlock].filter(Boolean).join('\n');
    if (merged.length <= maxChars) return merged;

    merged = merged.slice(-maxChars);
    const firstLineBreak = merged.indexOf('\n');
    if (firstLineBreak >= 0 && firstLineBreak < 420) merged = merged.slice(firstLineBreak + 1);
    return `...\n${merged}`;
}

/**
 * Keeps request history append-only inside an epoch. Once the epoch exceeds its
 * cap, older turns become a frozen checkpoint and only a small verbatim tail is
 * carried into the next epoch.
 */
function buildCupidPromptEpoch(history, options = {}) {
    if (!Array.isArray(history) || history.length === 0) {
        return { messages: [], state: null };
    }

    const systemMessage = history[0]?.role === 'system' ? history[0] : null;
    const source = (systemMessage ? history.slice(1) : history).filter(Boolean);
    if (source.length === 0) {
        return { messages: systemMessage ? [systemMessage] : [], state: null };
    }

    const maxMessages = Math.max(4, Number(options.maxMessages) || 10);
    const retainMessages = Math.max(2, Math.min(maxMessages - 1, Number(options.retainMessages) || 2));
    const carryoverChars = Math.max(800, Number(options.carryoverChars) || 1800);
    const savedState = options.state?.version === CUPID_PROMPT_EPOCH_VERSION ? options.state : {};
    const state = {
        version: CUPID_PROMPT_EPOCH_VERSION,
        anchorKeys: Array.isArray(savedState.anchorKeys) ? savedState.anchorKeys : [],
        carryover: String(savedState.carryover || '')
    };

    let anchorIndex = 0;
    if (state.anchorKeys.length > 0) {
        anchorIndex = -1;
        for (let i = 0; i <= source.length - state.anchorKeys.length; i++) {
            const matches = state.anchorKeys.every((key, offset) =>
                _getCupidPromptEpochMessageKey(source[i + offset]) === key
            );
            if (matches) {
                anchorIndex = i;
                break;
            }
        }
        if (anchorIndex < 0) anchorIndex = 0;
    }

    let epochMessages = source.slice(anchorIndex);
    if (epochMessages.length > maxMessages) {
        const droppedMessages = epochMessages.slice(0, -retainMessages);
        epochMessages = epochMessages.slice(-retainMessages);
        state.carryover = _mergeCupidPromptEpochCarryover(
            state.carryover,
            droppedMessages,
            carryoverChars
        );
    }

    state.anchorKeys = epochMessages
        .slice(0, Math.min(2, epochMessages.length))
        .map(_getCupidPromptEpochMessageKey);
    state.updatedAt = Date.now();

    const carryover = state.carryover.trim();
    const checkpointMessage = carryover ? {
        role: 'system',
        content: `[Earlier conversation checkpoint]\nThis is a frozen compact handoff from completed earlier turns. If it conflicts with newer verbatim messages, prefer the newer messages.\n${carryover}`
    } : null;

    return {
        messages: [
            ...(systemMessage ? [systemMessage] : []),
            ...(checkpointMessage ? [checkpointMessage] : []),
            ...epochMessages
        ],
        state
    };
}

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
    'event_temptation_seoyeon',
    'event_temptation_yuna',
    'event_temptation_dain',
    'ending_bittersweet_teacher',
    'ending_bittersweet_nurse',
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
    "담임선생님": "Teacher", "담임": "Teacher",
    "보건선생님": "Nurse", "보건": "Nurse",
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
    "担任先生": "Teacher", "担任の先生": "Teacher", "保健先生": "Nurse", "保健室の先生": "Nurse",
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

function normalizeCupidConversationDay(value) {
    if (value === undefined || value === null || value === '') return null;
    const day = Number(value);
    return Number.isInteger(day) && day >= 1 && day <= 5 ? day : null;
}

function inferCupidConversationDay(sessionId) {
    const id = String(sessionId || '').trim().toLowerCase();
    if (!id || id === 'gallery-freetalk' || id === 'migrated-gallery' || id === 'migrated-main') return null;
    if (/^(?:day5_|morning5_|tour_)/.test(id) || /(?:^|_)d5(?:_|$)/.test(id)) return 5;
    if (/^wall_/.test(id) || /(?:^|_)d4(?:_|$)/.test(id)) return 4;
    if (/^after3_/.test(id) || /(?:^|_)d3(?:_|$)/.test(id)) return 3;
    if (/^(?:night2_|after2_)/.test(id) || /(?:^|_)d2(?:_|$)/.test(id)) return 2;
    if (/^lunch_/.test(id) || /^(?:after_homeroom|after_nurse)_freetalk$/.test(id)
        || /(?:^|_)d1(?:_|$)/.test(id)) return 1;
    return null;
}

function resolveCupidConversationDay(value, sessionId) {
    return inferCupidConversationDay(sessionId) ?? normalizeCupidConversationDay(value);
}

function getCurrentCupidConversationDay() {
    return normalizeCupidConversationDay(window.gameEngine?.stateManager?.currentDay);
}

async function prepareCupidPromptMemoryRecall({ charId = '', value = '', messages = [] } = {}) {
    const core = window.CupidFreeTalkCore;
    if (!charId || typeof fetch !== 'function' || !core?.getPromptMemoryRetrievalDecision) return [];
    const decision = core.getPromptMemoryRetrievalDecision(value, messages);
    if (!decision.retrieve) return [];
    const query = core.buildPromptMemoryQuery(value, messages);
    if (!query) return [];

    const controller = typeof AbortController === 'function' ? new AbortController() : null;
    let timer = null;
    try {
        const request = fetch(`${API_ENDPOINT}search-memory`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-app-id': getCupidAppId()
            },
            body: JSON.stringify({
                userId: getCupidDeviceId(),
                charId,
                query,
                topK: 6
            }),
            ...(controller ? { signal: controller.signal } : {})
        }).then(async response => response.ok ? response.json() : null);
        const timeout = new Promise(resolve => {
            timer = setTimeout(() => {
                controller?.abort();
                resolve(null);
            }, 900);
        });
        const data = await Promise.race([request, timeout]);
        return core.filterPromptMemoryHits(data?.hits, query, messages);
    } catch (_) {
        return [];
    } finally {
        if (timer) clearTimeout(timer);
    }
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
    const userId = getCupidDeviceId();
    const language = getCupidLanguage();
    const appId = getCupidAppId();
    let totalSaved = 0;

    function migratedClientMsgId(parts) {
        return `cupid-migrated-${hashCupidLogText(parts.join('|')).replace(':', '-')}`;
    }

    async function postOne({
        charId,
        role,
        content,
        sessionId,
        context,
        conversationDay = null,
        speakerId = null,
        playerName = '',
        groupParticipants = null,
        groupJoinIndices = null,
        groupPairId = '',
        affinityChange = null,
        affinityCurrent = null,
        clientMsgId
    }) {
        try {
            const entry = makeCupidChatLogEntry({
                userId,
                charId,
                sessionId,
                role,
                content,
                context,
                conversationDay,
                playerName,
                language,
                appId,
                speakerId,
                groupParticipants,
                groupJoinIndices,
                groupPairId,
                affinityChange,
                affinityCurrent,
                clientMsgId
            });
            entry.logSource = 'local-recovery';
            await postCupidChatLogEntry(entry);
            totalSaved++;
        } catch (e) {
            console.warn('[Migrate] post 실패:', e.message);
            reportCupidCaughtError(e, {
                source: 'cupid-migration',
                errorType: 'migration_chat_log_post_failed',
                sessionId,
                context: { charId, role, logContext: context },
                extra: {
                    contentLength: String(content || '').length,
                    contentHash: hashCupidLogText(content)
                }
            });
            throw e;
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
                reportCupidCaughtError(e, {
                    source: 'cupid-migration',
                    errorType: 'migration_image_upload_failed',
                    context: { imageLength: b64.length, imageHash: hashCupidLogText(b64) }
                });
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
        for (let index = 0; index < history.length; index++) {
            const msg = history[index];
            if (!msg || msg.role === 'system' || !msg.content) continue;
            let content = _unwrapAssistantJson(msg.content, msg.role);
            content = await convertBase64ToR2(content);
            await postOne({
                charId: normalizedCharId,
                role: msg.role,
                content,
                sessionId,
                context,
                clientMsgId: migratedClientMsgId([
                    'legacy', normalizedCharId, sessionId, context, msg.role, String(index), hashCupidLogText(content)
                ])
            });
        }
    }

    let parsedSave = null;
    const saveRaw = localStorage.getItem('cupid_save');
    if (saveRaw) {
        try {
            parsedSave = JSON.parse(saveRaw);
        } catch (e) {
            console.warn('[Migrate] cupid_save 파싱 실패:', e.message);
            reportCupidCaughtError(e, {
                source: 'cupid-migration',
                errorType: 'migration_save_parse_failed',
                context: { storageKey: 'cupid_save', savedLength: saveRaw.length }
            });
        }
    }

    // v1 플래그가 이미 있어도 그룹 턴은 매 로드마다 결정적 clientMsgId로 재확인한다.
    // D1에는 upsert되므로 중복되지 않으며, 과거 배포에서 빠진 그룹 로그도 복구된다.
    try {
        const groupMemories = parsedSave?.gameState?.groupConversationMemories;
        if (Array.isArray(groupMemories)) {
            for (let turnIndex = 0; turnIndex < groupMemories.length; turnIndex++) {
                const memory = groupMemories[turnIndex];
                if (!memory || typeof memory !== 'object') continue;
                const participants = Array.isArray(memory.participants)
                    ? memory.participants.map(item => String(item?.id || item || '')).filter(Boolean)
                    : [];
                if (participants.length < 2) continue;
                const sessionId = String(memory.sessionId || 'migrated-group');
                const turnId = String(memory.turnId || `${sessionId}-${turnIndex}`);
                const conversationDay = resolveCupidConversationDay(memory.day, sessionId);
                const groupJoinIndices = Object.fromEntries(participants.map((id, index) => [id, index]));
                const groupPairId = `cupid:${participants.join(':')}`;
                const shared = {
                    charId: 'group',
                    sessionId,
                    context: 'group',
                    conversationDay,
                    playerName: String(memory.playerName || ''),
                    groupParticipants: participants,
                    groupJoinIndices,
                    groupPairId
                };
                if (String(memory.userContent || '').trim()) {
                    await postOne({
                        ...shared,
                        role: 'user',
                        content: memory.userContent,
                        speakerId: '__player__',
                        clientMsgId: migratedClientMsgId(['group', turnId, 'user', hashCupidLogText(memory.userContent)])
                    });
                }
                const assistantMessages = Array.isArray(memory.assistantMessages) ? memory.assistantMessages : [];
                for (let messageIndex = 0; messageIndex < assistantMessages.length; messageIndex++) {
                    const message = assistantMessages[messageIndex];
                    const speakerId = String(message?.speakerId || '');
                    if (!participants.includes(speakerId) || !String(message?.content || '').trim()) continue;
                    await postOne({
                        ...shared,
                        role: 'assistant',
                        content: message.content,
                        speakerId,
                        affinityChange: message.affinityChange,
                        affinityCurrent: message.affinityCurrent,
                        clientMsgId: migratedClientMsgId([
                            'group', turnId, 'assistant', speakerId, String(messageIndex), hashCupidLogText(message.content)
                        ])
                    });
                }
            }
        }
    } catch (e) {
        console.warn('[Migrate] 그룹 대화 복구 오류:', e.message);
        reportCupidCaughtError(e, {
            source: 'cupid-migration',
            errorType: 'migration_group_recovery_failed'
        });
    }

    if (localStorage.getItem(FLAG)) {
        if (totalSaved > 0) console.info(`[Migrate] cupid 그룹 대화 ${totalSaved}건 D1 복구 확인 완료`);
        return;
    }

    try {
        // 1. 본편 cupid_save
        if (parsedSave) {
            const memories = parsedSave?.gameState?.chatMemories || {};
            for (const charName of Object.keys(memories)) {
                await migrateChatArray(charName, memories[charName], 'migrated-main', '1:1');
            }
        }

        // 2. Gallery cupid_freetalk_memory
        const gftRaw = localStorage.getItem('cupid_freetalk_memory');
        if (gftRaw) {
            const gft = JSON.parse(gftRaw);
            for (const charId of Object.keys(gft)) {
                await migrateChatArray(charId, gft[charId], 'migrated-gallery', '1:1');
            }
        }

        localStorage.setItem(FLAG, new Date().toISOString());
        if (totalSaved > 0) {
            console.info(`[Migrate] cupid 기존 대화 ${totalSaved}건 D1 마이그레이션 완료`);
        }
    } catch (e) {
        console.warn('[Migrate] 마이그레이션 오류:', e.message);
        reportCupidCaughtError(e, {
            source: 'cupid-migration',
            errorType: 'migration_failed'
        });
    }
}

const CUPID_CHAT_LOG_QUEUE_KEY = 'cupid_pending_chat_logs_v1';
const CUPID_CHAT_LOG_QUEUE_LIMIT = 80;
const CUPID_RENDER_ACK_QUEUE_KEY = 'cupid_pending_render_acks_v1';
const CUPID_RENDER_ACK_QUEUE_LIMIT = 120;
let cupidChatLogFlushPromise = null;
let cupidRenderAckFlushPromise = null;

function readCupidChatLogQueue() {
    try {
        const parsed = JSON.parse(localStorage.getItem(CUPID_CHAT_LOG_QUEUE_KEY) || '[]');
        return Array.isArray(parsed) ? parsed.filter(entry => entry && entry.clientMsgId) : [];
    } catch (_) {
        try { localStorage.removeItem(CUPID_CHAT_LOG_QUEUE_KEY); } catch (_) {}
        return [];
    }
}

function writeCupidChatLogQueue(queue) {
    try {
        if (!queue.length) localStorage.removeItem(CUPID_CHAT_LOG_QUEUE_KEY);
        else localStorage.setItem(CUPID_CHAT_LOG_QUEUE_KEY, JSON.stringify(queue.slice(-CUPID_CHAT_LOG_QUEUE_LIMIT)));
        return true;
    } catch (_) {
        return false;
    }
}

function enqueueCupidChatLog(entry) {
    const queue = readCupidChatLogQueue();
    if (!queue.some(item => item.clientMsgId === entry.clientMsgId)) queue.push(entry);
    return writeCupidChatLogQueue(queue);
}

function normalizeCupidChatLogAffinity(value) {
    if (value === null || value === undefined || value === '') return null;
    const number = Number(value);
    return Number.isFinite(number) ? Math.round(number) : null;
}

function makeCupidChatLogEntry({
    userId,
    charId,
    sessionId,
    role,
    content,
    context,
    playerName,
    language,
    appId,
    speakerId = null,
    groupParticipants = null,
    groupJoinIndices = null,
    groupPairId = '',
    conversationDay = null,
    affinityChange = null,
    affinityCurrent = null,
    clientMsgId = ''
}) {
    const createdAt = new Date().toISOString();
    const entry = {
        userId,
        charId,
        sessionId,
        role,
        content,
        context,
        playerName,
        language,
        appId,
        createdAt,
        clientMsgId: String(clientMsgId || '').trim()
            || `cupid-${Date.now().toString(36)}-${role.charAt(0)}-${Math.random().toString(36).slice(2, 10)}`
    };
    if (speakerId) entry.speakerId = String(speakerId);
    if (Array.isArray(groupParticipants) && groupParticipants.length > 0) {
        entry.groupParticipants = groupParticipants.map(value => String(value)).filter(Boolean);
    }
    if (groupJoinIndices && typeof groupJoinIndices === 'object') entry.groupJoinIndices = groupJoinIndices;
    if (groupPairId) entry.groupPairId = String(groupPairId);
    const normalizedConversationDay = normalizeCupidConversationDay(conversationDay);
    if (normalizedConversationDay !== null) entry.conversationDay = normalizedConversationDay;
    const normalizedAffinityChange = normalizeCupidChatLogAffinity(affinityChange);
    const normalizedAffinityCurrent = normalizeCupidChatLogAffinity(affinityCurrent);
    if (normalizedAffinityChange !== null) entry.affinityChange = normalizedAffinityChange;
    if (normalizedAffinityCurrent !== null) entry.affinityCurrent = normalizedAffinityCurrent;
    return entry;
}

async function postCupidChatLogEntry(entry) {
    const res = await fetch(API_ENDPOINT + 'chat-logs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-app-id': entry.appId || getCupidAppId() },
        body: JSON.stringify(entry),
        credentials: 'omit',
        cache: 'no-store',
        keepalive: true
    });
    if (!res.ok) {
        const error = new Error(`HTTP ${res.status}`);
        error.cupidStatus = res.status;
        throw error;
    }
    return res;
}

function isTransientCupidChatLogError(error) {
    const status = Number(error?.cupidStatus || 0);
    return !status || status === 408 || status === 429 || status >= 500;
}

async function flushCupidChatLogQueue() {
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return false;
    if (cupidChatLogFlushPromise) return cupidChatLogFlushPromise;

    cupidChatLogFlushPromise = (async () => {
        let sent = 0;
        while (typeof navigator === 'undefined' || navigator.onLine !== false) {
            const queue = readCupidChatLogQueue();
            const entry = queue[0];
            if (!entry) break;
            try {
                await postCupidChatLogEntry(entry);
                const latestQueue = readCupidChatLogQueue();
                writeCupidChatLogQueue(latestQueue.filter(item => item.clientMsgId !== entry.clientMsgId));
                sent++;
            } catch (error) {
                if (isTransientCupidChatLogError(error)) {
                    console.warn('[ChatLog] cupid pending queue retained:', error.message);
                    logCupidError(error, {
                        source: 'flushCupidChatLogQueue',
                        errorType: 'chat_log_queue_transient_failure',
                        sessionId: entry.sessionId,
                        context: {
                            charId: entry.charId,
                            role: entry.role,
                            logContext: entry.context,
                            conversationDay: entry.conversationDay ?? null
                        },
                        extra: { clientMsgId: entry.clientMsgId }
                    });
                    break;
                }
                writeCupidChatLogQueue(queue.slice(1));
                logCupidError(error, {
                    source: 'flushCupidChatLogQueue',
                    errorType: 'chat_log_queue_rejected',
                    sessionId: entry.sessionId,
                    context: { charId: entry.charId, role: entry.role, logContext: entry.context },
                    extra: {
                        contentLength: String(entry.content || '').length,
                        contentHash: hashCupidLogText(entry.content),
                        clientMsgId: entry.clientMsgId
                    }
                });
            }
        }
        return sent;
    })().finally(() => {
        cupidChatLogFlushPromise = null;
    });
    return cupidChatLogFlushPromise;
}

function normalizeCupidRenderedText(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
}

function getCupidRenderAckQueueId(payload = {}) {
    return `${payload.appId || ''}|${payload.userId || ''}|${payload.clientMsgId || ''}`;
}

function readCupidRenderAckQueue() {
    try {
        const parsed = JSON.parse(localStorage.getItem(CUPID_RENDER_ACK_QUEUE_KEY) || '[]');
        return Array.isArray(parsed) ? parsed.filter(entry => entry && entry.clientMsgId) : [];
    } catch (_) {
        try { localStorage.removeItem(CUPID_RENDER_ACK_QUEUE_KEY); } catch (_) {}
        return [];
    }
}

function writeCupidRenderAckQueue(queue) {
    try {
        if (!queue.length) localStorage.removeItem(CUPID_RENDER_ACK_QUEUE_KEY);
        else localStorage.setItem(CUPID_RENDER_ACK_QUEUE_KEY, JSON.stringify(queue.slice(-CUPID_RENDER_ACK_QUEUE_LIMIT)));
        return true;
    } catch (_) {
        return false;
    }
}

function enqueueCupidRenderAck(payload) {
    const queue = readCupidRenderAckQueue();
    const queueId = getCupidRenderAckQueueId(payload);
    if (!queue.some(item => getCupidRenderAckQueueId(item) === queueId)) queue.push(payload);
    return writeCupidRenderAckQueue(queue);
}

function makeCupidChatRenderAckPayload(entry, receipt = {}) {
    const expectedContent = String(receipt.expectedContent || '').substring(0, 8000);
    const renderedContent = String(receipt.renderedContent || '').substring(0, 8000);
    const expectedComparable = normalizeCupidRenderedText(expectedContent);
    const renderedComparable = normalizeCupidRenderedText(renderedContent);
    const requestedStatus = String(receipt.status || '').toLowerCase();
    const status = ['rendered', 'mismatch', 'failed'].includes(requestedStatus)
        ? requestedStatus
        : (!renderedComparable
            ? 'failed'
            : (expectedComparable === renderedComparable ? 'rendered' : 'mismatch'));
    return {
        appId: entry.appId || getCupidAppId(),
        userId: entry.userId,
        clientMsgId: entry.clientMsgId,
        charId: entry.charId,
        sessionId: entry.sessionId,
        speakerId: entry.speakerId || entry.charId,
        context: entry.context || '1:1',
        expectedContent,
        renderedContent,
        status,
        renderedAt: receipt.renderedAt || Date.now()
    };
}

async function postCupidChatRenderAckPayload(payload) {
    const res = await fetch(API_ENDPOINT + 'chat-logs/render-ack', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-app-id': payload.appId || getCupidAppId() },
        body: JSON.stringify(payload),
        credentials: 'omit',
        cache: 'no-store',
        keepalive: true
    });
    if (!res.ok) {
        const error = new Error(`HTTP ${res.status}`);
        error.cupidStatus = res.status;
        throw error;
    }
    return res;
}

async function flushCupidChatRenderAckQueue() {
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return false;
    if (cupidRenderAckFlushPromise) return cupidRenderAckFlushPromise;

    cupidRenderAckFlushPromise = (async () => {
        let sent = 0;
        while (typeof navigator === 'undefined' || navigator.onLine !== false) {
            const queue = readCupidRenderAckQueue();
            const payload = queue[0];
            if (!payload) break;
            if (readCupidChatLogQueue().some(entry => entry.clientMsgId === payload.clientMsgId)) break;
            const queueId = getCupidRenderAckQueueId(payload);
            try {
                await postCupidChatRenderAckPayload(payload);
                const latestQueue = readCupidRenderAckQueue();
                writeCupidRenderAckQueue(latestQueue.filter(item => getCupidRenderAckQueueId(item) !== queueId));
                sent += 1;
            } catch (error) {
                if (isTransientCupidChatLogError(error)) {
                    console.warn('[ChatLog] cupid render acknowledgement queue retained:', error.message);
                    break;
                }
                writeCupidRenderAckQueue(queue.slice(1));
                logCupidError(error, {
                    source: 'flushCupidChatRenderAckQueue',
                    errorType: 'chat_render_ack_queue_rejected',
                    sessionId: payload.sessionId,
                    context: { charId: payload.charId, logContext: payload.context },
                    extra: { clientMsgId: payload.clientMsgId, status: payload.status }
                });
            }
        }
        return sent;
    })().finally(() => {
        cupidRenderAckFlushPromise = null;
    });
    return cupidRenderAckFlushPromise;
}

async function postCupidChatRenderAck(entry, receipt = {}) {
    if (!entry?.clientMsgId || entry.role !== 'assistant') return false;
    const payload = makeCupidChatRenderAckPayload(entry, receipt);
    if (enqueueCupidRenderAck(payload)) {
        await flushCupidChatRenderAckQueue();
        return true;
    }
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return false;
    try {
        await postCupidChatRenderAckPayload(payload);
        return true;
    } catch (error) {
        console.warn('[ChatLog] cupid render acknowledgement could not be persisted:', error?.message || error);
        logCupidError(error, {
            source: 'postCupidChatRenderAck',
            errorType: 'chat_render_ack_save_failed',
            sessionId: entry.sessionId,
            context: {
                charId: entry.charId,
                logContext: entry.context,
                conversationDay: entry.conversationDay ?? null
            },
            extra: { clientMsgId: entry.clientMsgId }
        });
        return false;
    }
}

// user/assistant 메시지 한 페어를 D1에 저장. 전송 실패 시 오프라인 큐에서 복구한다.
async function saveCupidChatLog({
    charId,
    userContent,
    assistantContent,
    sessionId = '',
    context = '1:1',
    playerName: _pn,
    assistantRenderReceipt = null,
    conversationDay = getCurrentCupidConversationDay(),
    affinityChange = null,
    affinityCurrent = null
}) {
    if (!charId) return;
    const shared = {
        userId: getCupidDeviceId(),
        charId,
        sessionId,
        context,
        playerName: _pn || window.gameEngine?.stateManager?.playerName || '',
        language: getCupidLanguage(),
        appId: getCupidAppId(),
        conversationDay: resolveCupidConversationDay(conversationDay, sessionId)
    };
    const queueAndFlush = async (role, content, affinity = {}) => {
        const entry = makeCupidChatLogEntry({ ...shared, role, content, ...affinity });
        if (enqueueCupidChatLog(entry)) {
            await flushCupidChatLogQueue();
            return entry;
        }
        if (navigator.onLine === false) return entry;
        try {
            await postCupidChatLogEntry(entry);
        } catch (error) {
            logCupidError(error, {
                source: 'saveCupidChatLog',
                errorType: isTransientCupidChatLogError(error)
                    ? 'chat_log_direct_transient_failure'
                    : 'chat_log_direct_rejected',
                sessionId,
                context: { charId, role, logContext: context, conversationDay }
            });
        }
        return entry;
    };

    // 순서 보장: user 먼저 저장 후 assistant 저장 (병렬 시 created_at/id 역전 방지)
    if (userContent) await queueAndFlush('user', userContent);
    const assistantLogContent = window.CupidFreeTalkCore?.resolveCupidAssistantLogContent?.(
        assistantContent,
        assistantRenderReceipt
    ) ?? String(assistantContent || '');
    if (assistantLogContent) {
        const assistantEntry = await queueAndFlush('assistant', assistantLogContent, {
            affinityChange,
            affinityCurrent
        });
        if (assistantEntry && assistantRenderReceipt) {
            await postCupidChatRenderAck(assistantEntry, assistantRenderReceipt);
        }
    }
}

// 2인 대면 프리토킹을 Harem 백업 뷰어의 canonical group 형식으로 저장한다.
// user는 한 번, assistant는 실제 화자별로 분리해 같은 sessionId에 순서대로 기록한다.
async function saveCupidGroupChatLog({
    userContent,
    assistantMessages = [],
    participants = [],
    sessionId = '',
    playerName: _pn = '',
    conversationDay = getCurrentCupidConversationDay()
}) {
    const participantIds = participants.map(item => String(item?.id || item || '')).filter(Boolean);
    if (participantIds.length < 2) return;
    const groupJoinIndices = Object.fromEntries(participantIds.map((id, index) => [id, index]));
    const shared = {
        userId: getCupidDeviceId(),
        charId: 'group',
        sessionId,
        context: 'group',
        playerName: _pn || window.gameEngine?.stateManager?.playerName || '',
        language: getCupidLanguage(),
        appId: getCupidAppId(),
        groupParticipants: participantIds,
        groupJoinIndices,
        groupPairId: `cupid:${participantIds.join(':')}`,
        conversationDay: resolveCupidConversationDay(conversationDay, sessionId)
    };
    const queueAndFlush = async (role, content, details = {}) => {
        if (!String(content || '').trim()) return null;
        const entry = makeCupidChatLogEntry({ ...shared, role, content, ...details });
        if (enqueueCupidChatLog(entry)) {
            await flushCupidChatLogQueue();
            return entry;
        }
        if (navigator.onLine === false) return entry;
        try {
            await postCupidChatLogEntry(entry);
        } catch (error) {
            logCupidError(error, {
                source: 'saveCupidGroupChatLog',
                errorType: isTransientCupidChatLogError(error)
                    ? 'group_chat_log_direct_transient_failure'
                    : 'group_chat_log_direct_rejected',
                sessionId,
                context: {
                    charId: 'group',
                    role,
                    speakerId: details.speakerId || '',
                    logContext: 'group',
                    conversationDay
                }
            });
        }
        return entry;
    };

    if (userContent) {
        await queueAndFlush('user', userContent, { speakerId: '__player__' });
    }
    for (const message of assistantMessages) {
        const speakerId = String(message?.speakerId || '');
        if (!participantIds.includes(speakerId)) continue;
        const assistantContent = window.CupidFreeTalkCore?.resolveCupidAssistantLogContent?.(
            message.content,
            message.renderReceipt
        ) ?? String(message.content || '');
        const entry = await queueAndFlush('assistant', assistantContent, {
            speakerId,
            affinityChange: message.affinityChange,
            affinityCurrent: message.affinityCurrent
        });
        if (entry && message.renderReceipt) await postCupidChatRenderAck(entry, message.renderReceipt);
    }
}

// ============================================================================
// 대화 히스토리 이미지 최적화 (윈도우 가드)
// ============================================================================
// 현재 텍스트 모델이 이미지 파트를 받지 않으므로,
// 최근 이미지는 서버 Vision 분석용 참조로, 오래된 이미지는 텍스트 안내로 치환합니다.
// 실제 채팅 UI/저장 데이터의 이미지는 그대로 유지됩니다.
function limitCupidLogText(value, maxLength = 500) {
    if (value === undefined || value === null) return '';
    const text = String(value);
    return text.length > maxLength ? text.slice(0, maxLength) : text;
}

function hashCupidLogText(value) {
    const text = String(value || '');
    const sample = text.length > 8192 ? text.slice(0, 4096) + text.slice(-4096) : text;
    let hash = 2166136261;
    for (let i = 0; i < sample.length; i++) {
        hash ^= sample.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
    }
    return `${(hash >>> 0).toString(36)}:${text.length}`;
}

function makeCupidLogSafe(value) {
    if (value === undefined || value === null) return value;
    if (typeof value !== 'object') return value;
    try {
        return JSON.parse(JSON.stringify(value));
    } catch (_) {
        return String(value);
    }
}

function logCupidError(error, options = {}) {
    try {
        if (typeof window !== 'undefined' && typeof window.__cupidReportCaughtError === 'function') {
            return window.__cupidReportCaughtError(error, options);
        }
        const message = error?.message || String(error || 'Unknown Cupid error');
        const currentLocation = typeof location !== 'undefined' ? location : null;
        const payload = {
            appId: options.appId || getCupidAppId(),
            userId: options.userId || getCupidDeviceId(),
            message: limitCupidLogText(message, 500),
            stack: limitCupidLogText(error?.stack || '', 4000),
            url: limitCupidLogText(currentLocation?.href || '', 500),
            source: limitCupidLogText(options.source || 'cupid', 500),
            errorType: limitCupidLogText(options.errorType || 'runtime', 100),
            errorClass: limitCupidLogText(options.errorClass || error?.name || '', 50),
            sessionId: limitCupidLogText(options.sessionId || '', 64),
            context: makeCupidLogSafe({
                language: getCupidLanguage(),
                page: currentLocation?.pathname || '',
                ...(options.context || {})
            }),
            extra: makeCupidLogSafe(options.extra || null)
        };

        const body = JSON.stringify(payload);
        const endpoint = API_ENDPOINT + 'error-logs';
        if (typeof navigator !== 'undefined' && navigator.sendBeacon && typeof Blob !== 'undefined') {
            try {
                const sent = navigator.sendBeacon(endpoint, new Blob([body], { type: 'application/json' }));
                if (sent) return true;
            } catch (_) {}
        }
        fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body,
            keepalive: true
        }).catch(err => console.warn('[ErrorLog] cupid 저장 실패:', err.message));
        return true;
    } catch (e) {
        console.warn('[ErrorLog] cupid logCupidError 오류:', e.message);
        return false;
    }
}

function reportCupidCaughtError(error, options = {}) {
    try {
        if (typeof logCupidError === 'function') {
            return logCupidError(error, options);
        }
        if (typeof window !== 'undefined' && typeof window.__cupidLogRuntimeError === 'function') {
            window.__cupidLogRuntimeError(
                options.errorType || error?.name || 'Error',
                error?.message || String(error || 'Unknown Cupid error'),
                error?.stack || '',
                options.source || 'cupid'
            );
            return true;
        }
    } catch (_) {}
    return false;
}

function optimizeImageHistory(messages, recentCount = 5) {
    const r2ImageRegex = /https?:\/\/[^\s]+\.(?:jpg|jpeg|png|gif|webp)(?:\?[^\s]*)?/i;
    const lang = window.GAME_LANG || document.documentElement.lang || 'ko';
    const placeholder = {
        ko: '[첨부 이미지: 현재 텍스트 모델은 이미지 픽셀을 직접 읽을 수 없습니다. 유저의 텍스트와 대화 맥락에만 근거해 반응하세요.]',
        en: '[Image attachment: the current text model cannot inspect image pixels directly. Respond using only the user text and conversation context.]',
        es: '[Imagen adjunta: el modelo de texto actual no puede analizar directamente los píxeles de la imagen. Responde basándote únicamente en el texto del usuario y el contexto de la conversación.]',
        ja: '[画像添付：現在のテキストモデルは画像そのものを読み取れません。ユーザーの文章と会話の文脈だけをもとに返答してください。]',
        fr: '[Image jointe : le modèle texte actuel ne peut pas analyser directement l’image. Répondez uniquement à partir du texte de l’utilisateur et du contexte de la conversation.]',
        de: '[Bildanhang: Das aktuelle Textmodell kann den Bildinhalt nicht direkt auswerten. Antworte ausschließlich anhand des Benutzertexts und des Gesprächskontexts.]',
        pt: '[Imagem anexada: o modelo de texto atual não consegue analisar diretamente o conteúdo da imagem. Responda apenas com base no texto do usuário e no contexto da conversa.]'
    }[String(lang).toLowerCase().split('-')[0]]
        || '[Image attachment: the current text model cannot inspect image pixels directly. Respond using only the user text and conversation context.]';

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
window.ASSET_VERSION = ASSET_VERSION;
window.buildCupidPromptEpoch = buildCupidPromptEpoch;
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
window.inferCupidConversationDay = inferCupidConversationDay;
window.resolveCupidConversationDay = resolveCupidConversationDay;
window.prepareCupidPromptMemoryRecall = prepareCupidPromptMemoryRecall;
window.uploadImageToR2 = uploadImageToR2;
window.optimizeImageHistory = optimizeImageHistory;
window.saveCupidChatLog = saveCupidChatLog;
window.saveCupidGroupChatLog = saveCupidGroupChatLog;
window.flushCupidChatLogQueue = flushCupidChatLogQueue;
window.flushCupidChatRenderAckQueue = flushCupidChatRenderAckQueue;
window.logCupidError = logCupidError;
window.reportCupidCaughtError = reportCupidCaughtError;
window.hashCupidLogText = hashCupidLogText;
window.migrateCupidChatHistoryToD1 = migrateCupidChatHistoryToD1;

// 페이지 로드 후 백그라운드로 마이그레이션 1회 실행 (idle 시간에)
function _cupidMigrateOnLoad() {
    window.removeEventListener('load', _cupidMigrateOnLoad);
    setTimeout(() => {
        Promise.resolve(flushCupidChatLogQueue())
            .then(() => flushCupidChatRenderAckQueue())
            .catch(() => {});
    }, 1000);
    setTimeout(() => {
        try { migrateCupidChatHistoryToD1(); } catch (_) {}
    }, 3000);
}
function _cupidFlushChatLogsOnOnline() {
    try {
        Promise.resolve(flushCupidChatLogQueue())
            .then(() => flushCupidChatRenderAckQueue())
            .catch(() => {});
    } catch (_) {}
}
if (typeof window !== 'undefined') {
    window.addEventListener('online', _cupidFlushChatLogsOnOnline);
    if (document.readyState === 'complete') {
        _cupidMigrateOnLoad();
    } else {
        window.addEventListener('load', _cupidMigrateOnLoad);
    }
}
