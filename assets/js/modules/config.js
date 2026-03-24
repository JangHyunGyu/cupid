/**
 * ============================================================================
 * config.js - 게임 전역 설정 상수 및 유틸리티 함수
 * ============================================================================
 *
 * 이 파일은 게임 전체에서 공통으로 사용하는 설정값과 유틸리티 함수를 정의합니다.
 * 모든 모듈이 이 파일에 정의된 상수들을 참조하므로, 가장 먼저 로드되어야 합니다.
 *
 * 【포함 내용】
 * - API_ENDPOINT              : AI 채팅 서버 주소
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
 * AI 채팅 API 엔드포인트
 * - Cloudflare Worker에서 동작하는 AI 채팅 서버 주소
 * - FreeTalkSystem에서 이 주소로 HTTP POST 요청을 보내 AI 응답을 받아옵니다
 */
const API_ENDPOINT = "https://chatbot-api.yama5993.workers.dev/";

/**
 * 에셋 버전 번호
 * - 이미지, 오디오 등 에셋 파일 URL 뒤에 "?v=2.2.3" 형태로 붙습니다
 * - 버전을 바꾸면 브라우저가 캐시를 무시하고 새 파일을 다운로드합니다
 * - 이미지나 오디오를 수정했는데 반영이 안 될 때 이 숫자를 올리세요
 */
const ASSET_VERSION = "2.3.2";

/**
 * 프리토킹(자유 대화) 기본 최대 턴 수
 * - AI 캐릭터와 주고받을 수 있는 대화 횟수의 기본값
 * - 시나리오에서 scene.maxTurns로 개별 설정 가능
 * - 3으로 설정하면 플레이어가 3번 말할 수 있음
 */
const DEFAULT_MAX_FREE_TALK_TURNS = 3;

/**
 * 채팅 전송 버튼의 SVG 아이콘 (종이비행기 모양)
 * - 프리토킹 UI의 전송 버튼에 표시됩니다
 */
const SEND_ICON = `<svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>`;

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
    // Japanese
    "ソヨン": "Seoyeon", "ユナ": "Yuna", "ダイン": "Dain",
    "担任先生": "Teacher", "保健先生": "Nurse",
    // French
    "Professeur Principal": "Teacher", "Infirmière Scolaire": "Nurse", "Infirmière": "Nurse",
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
// window 전역 노출
// ============================================================================
// const로 선언된 변수는 window의 속성이 되지 않으므로,
// 다른 모듈 파일에서 window.XXX 형태로도 접근할 수 있도록 명시적으로 할당합니다.

window.API_ENDPOINT = API_ENDPOINT;
window.ASSET_VERSION = ASSET_VERSION;
window.DEFAULT_MAX_FREE_TALK_TURNS = DEFAULT_MAX_FREE_TALK_TURNS;
window.SEND_ICON = SEND_ICON;
window.REGISTERED_CG_IDS = REGISTERED_CG_IDS;
window.CHAR_NAME_MAP = CHAR_NAME_MAP;
window.getAssetUrl = getAssetUrl;
