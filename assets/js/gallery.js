/**
 * ============================================================================
 * Cupid Gallery - JavaScript (갤러리 메인 스크립트)
 * ============================================================================
 * 
 * 이 파일은 Cupid 게임의 갤러리 기능을 담당합니다.
 * 
 * 주요 기능:
 * 1. 캐릭터 도감 - 게임에 등장하는 캐릭터들의 정보와 다양한 표정 열람
 * 2. 이벤트 CG - 게임 진행 중 해금된 특별 이미지(CG) 감상
 * 3. 음악실 - 게임에서 들었던 배경음악(BGM) 다시 듣기
 * 
 * 해금 시스템:
 * - 캐릭터: 해당 캐릭터의 호감도가 100에 도달하면 해금
 * - CG: 게임에서 해당 CG가 표시되는 장면에 도달하면 해금
 * - BGM: 게임에서 해당 BGM이 재생되면 해금
 * 
 * 데이터 저장:
 * - localStorage의 'cupid_gallery' 키에 해금 상태가 JSON 형태로 저장됨
 */

// ==========================================================================
// 캐릭터 데이터 (Character Data)
// ==========================================================================
// 각 캐릭터의 상세 정보를 담고 있는 객체
// 'ko'(한국어)와 'en'(영어) 두 가지 언어를 지원
// 
// 구조 설명:
// - id: 캐릭터 고유 식별자 (이미지 파일명에 사용)
// - name: 캐릭터 이름
// - title: 캐릭터의 별명/칭호
// - description: 캐릭터 소개 텍스트
// - age, birthday, height, hobby, personality: 프로필 정보
// - expressions: 사용 가능한 표정 목록 (이미지 파일명에 사용)
//   예: 'normal' → 'seyoun_normal.png'

const GALLERY_CHARACTERS = {
    // ===== 한국어 데이터 =====
    ko: {
        // 서연 - 완벽한 학생회장 (메가데레)
        seyoun: {
            id: 'seyoun',
            name: '서연',
            title: '완벽한 학생회장',
            shortDescription: '모두에게 친절한 완벽한 학생회장.',
            description: '모두에게 친절한 완벽한 학생회장. 사실 외로움을 잘 타며, 단둘이 있을 때는 부끄러움을 많이 탄다. 규칙을 중시하지만, 당신을 위해서라면 가끔 규칙을 어기고 싶어 한다.',
            age: '18세',
            birthday: '3월 14일',
            height: '165cm',
            weight: '48kg',
            bust: '34-22-35 65E',
            hobby: '음악 감상, 독서',
            personality: '메가데레, 수줍음',
            expressions: ['normal', 'shy', 'shy2', 'angry', 'sad', 'laugh', 'cry', 'pout', 'worried', 'back', 'bikini']
        },
        // 유나 - 신비로운 쿨데레
        yuna: {
            id: 'yuna',
            name: '유나',
            title: '신비로운 쿨데레',
            shortDescription: '무표정하고 차가운 쿨데레의 정석.',
            description: '무표정하고 차가운 쿨데레의 정석. 당신의 "특별한 빛"에 깊고 집착적인 관심을 보이며, 가끔씩 툭 던지는 신비롭고 설레는 대사가 특징. 당신을 지키려는 묘한 분위기를 풍긴다.',
            age: '18세',
            birthday: '7월 22일',
            height: '162cm',
            weight: '47kg',
            bust: '33-21-34 65E',
            hobby: '별 보기, 시 쓰기',
            personality: '쿨데레, 신비',
            expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'bored', 'bikini']
        },
        // 다인 - 햇살 같은 소꿉친구 (현모양처형 츤데레)
        dain: {
            id: 'dain',
            name: '다인',
            title: '햇살 같은 소꿉친구',
            shortDescription: '밝고 활기찬 현모양처형 츤데레.',
            description: '밝고 활기찬 현모양처형 츤데레. 당신을 편한 친구처럼 대하지만, 로맨틱한 분위기가 되면 금방 얼굴이 빨개지며 당황한다. 감정에 솔직하지만 표현이 서툰 귀여운 매력이 있다.',
            age: '18세',
            birthday: '12월 25일',
            height: '158cm',
            weight: '46kg',
            bust: '35-23-36 65F',
            hobby: '요리, 운동',
            personality: '츤데레, 활발',
            expressions: ['normal', 'shy', 'angry', 'sad', 'laugh', 'pout', 'active', 'sweat']
        },
        // 담임선생님 - 갭 모에
        teacher: {
            id: 'teacher',
            name: '담임선생님',
            title: '의외의 허당 선생님',
            shortDescription: '공과 사가 뚜렷한 전문적인 교사.',
            description: '공과 사가 뚜렷한 전문적인 교사지만, 사실 허당끼가 있다. 당신의 예상치 못한 어른스러운 모습에 가슴 설레어 하며, 은근히 당신에게 의지하고 싶어 하는 갭 모에가 있다.',
            age: '28세',
            birthday: '5월 5일',
            height: '170cm',
            weight: '58kg',
            bust: '38-24-38 70G',
            hobby: '독서, 영화 감상',
            personality: '전문적, 허당',
            expressions: ['normal', 'smile', 'shy', 'angry', 'sad']
        },
        // 보건선생님 - 장난꾸러기 누나
        nurse: {
            id: 'nurse',
            name: '보건선생님',
            title: '장난꾸러기 보건교사',
            shortDescription: '성숙하고 장난기 많은 보건 교사.',
            description: '성숙하고 장난기 많은 보건 교사. 도발적인 말로 당신을 놀리는 것을 즐기지만, 사실 누구보다 학생들을 아끼고 보호하려 한다. 당신이 당황하는 모습에 귀여움을 느낀다.',
            age: '26세',
            birthday: '9월 12일',
            height: '168cm',
            weight: '60kg',
            bust: '40-24-40 70H',
            hobby: '원예, 명상',
            personality: '장난기, 성숙',
            expressions: ['normal', 'shy', 'angry', 'bikini']
        }
    },
    // ===== 영어 데이터 (English Data) =====
    // 한국어 데이터와 동일한 구조, 영어로 번역된 텍스트
    en: {
        // Seyoun - 완벽한 학생회장 (메가데레)
        seyoun: {
            id: 'seyoun',
            name: 'Seyoun',
            title: 'The Perfect President',
            shortDescription: 'A perfect student council president who is kind to everyone.',
            description: 'A perfect student council president who is kind to everyone. Actually gets lonely easily and becomes very shy when alone with you. Values rules, but sometimes wants to break them for you.',
            age: '18 years old',
            birthday: 'March 14',
            height: '165cm',
            weight: '48kg',
            bust: '34-22-35 65E',
            hobby: 'Music, Reading',
            personality: 'Megadere, Shy',
            expressions: ['normal', 'shy', 'shy2', 'angry', 'sad', 'laugh', 'cry', 'pout', 'worried', 'back', 'bikini']
        },
        // Yuna - 신비로운 쿨데레 (Kuudere)
        yuna: {
            id: 'yuna',
            name: 'Yuna',
            title: 'Mysterious Kuudere',
            shortDescription: 'The epitome of a cold, expressionless kuudere.',
            description: 'The epitome of a cold, expressionless kuudere. Shows deep, obsessive interest in your "special light". Known for occasional mysterious and heart-fluttering remarks. Gives off an aura of wanting to protect you.',
            age: '18 years old',
            birthday: 'July 22',
            height: '162cm',
            weight: '47kg',
            bust: '33-21-34 65E',
            hobby: 'Stargazing, Poetry',
            personality: 'Kuudere, Mysterious',
            expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'bored', 'bikini']
        },
        // Dain - 햇살 같은 소꿉친구 (Tsundere)
        dain: {
            id: 'dain',
            name: 'Dain',
            title: 'Sunny Childhood Friend',
            shortDescription: 'A bright and lively "wifey-type" tsundere.',
            description: 'A bright and lively "wifey-type" tsundere. Treats you like a comfortable friend, but quickly turns red and flustered in romantic moments. Honest about feelings but clumsy at expressing them.',
            age: '18 years old',
            birthday: 'December 25',
            height: '158cm',
            weight: '46kg',
            bust: '35-23-36 65F',
            hobby: 'Cooking, Sports',
            personality: 'Tsundere, Cheerful',
            expressions: ['normal', 'shy', 'angry', 'sad', 'laugh', 'pout', 'active', 'sweat']
        },
        // Teacher (Ms. Kim) - 의외의 허당 선생님 (Gap Moe)
        teacher: {
            id: 'teacher',
            name: 'Ms. Kim',
            title: 'The Clumsy Teacher',
            shortDescription: 'A professional teacher who separates work and personal life.',
            description: 'A professional teacher who separates work and personal life, but actually has a clumsy side. Her heart flutters at your unexpectedly mature moments. Has a gap moe of secretly wanting to rely on you.',
            age: '28 years old',
            birthday: 'May 5',
            height: '170cm',
            weight: '58kg',
            bust: '38-24-38 70G',
            hobby: 'Reading, Movies',
            personality: 'Professional, Clumsy',
            expressions: ['normal', 'smile', 'shy', 'angry', 'sad']
        },
        // Nurse (School Nurse) - 장난꾸러기 보건교사 (Playful)
        nurse: {
            id: 'nurse',
            name: 'School Nurse',
            title: 'Playful Health Teacher',
            shortDescription: 'A mature and playful school nurse.',
            description: 'A mature and playful school nurse. Enjoys teasing you with provocative words, but actually cares for and protects students more than anyone. Finds your flustered reactions adorable.',
            age: '26 years old',
            birthday: 'September 12',
            height: '168cm',
            weight: '60kg',
            bust: '40-24-40 70H',
            hobby: 'Gardening, Meditation',
            personality: 'Playful, Mature',
            expressions: ['normal', 'shy', 'angry', 'bikini']
        }
    }
};

// ==========================================================================
// 표정 이름 매핑 (Expression Name Mappings)
// ==========================================================================
// 표정 코드(예: 'shy')를 사용자에게 표시할 이름(예: '수줍음')으로 변환
// 표정 선택 버튼에 텍스트로 표시됨

const EXPRESSION_NAMES = {
    // 한국어 표정 이름
    ko: {
        normal: '기본',      // 기본 표정
        shy: '수줍음',       // 수줍은 표정
        shy2: '수줍음2',     // 수줍은 표정 변형
        angry: '화남',       // 화난 표정
        sad: '슬픔',         // 슬픈 표정
        laugh: '웃음',       // 웃는 표정
        cry: '울음',         // 우는 표정
        pout: '삐짐',        // 삐친 표정
        worried: '걱정',     // 걱정하는 표정
        back: '뒷모습',      // 뒷모습
        smile: '미소',       // 미소짓는 표정
        bored: '지루함',     // 지루해하는 표정
        active: '활발',      // 활발한 표정
        sweat: '땀흘림',     // 땀에 젖은 표정
        bikini: '비키니'      // 특별 표정 (호감도 100 + 프리토킹 100회)
    },
    // 영어 표정 이름
    en: {
        normal: 'Normal',
        shy: 'Shy',
        shy2: 'Shy 2',
        angry: 'Angry',
        sad: 'Sad',
        laugh: 'Laugh',
        cry: 'Cry',
        pout: 'Pout',
        worried: 'Worried',
        back: 'Back',
        smile: 'Smile',
        bored: 'Bored',
        active: 'Active',
        sweat: 'Nervous',
        bikini: 'Bikini'         // Special expression (Affinity 100 + 100 Free Talks)
    }
};

// ==========================================================================
// CG 데이터 (이벤트 CG 목록)
// ==========================================================================
// 게임 내 특별 이벤트에서 표시되는 일러스트(CG) 목록
// 
// 구조 설명:
// - id: CG 고유 식별자 (해금 상태 저장에 사용)
// - name: CG 제목
// - character: 해당 CG에 등장하는 캐릭터
// - description: CG 설명
// - file: 원본 이미지 경로
// - thumbnail: 썸네일 이미지 경로 (목록에서 표시용)

const GALLERY_CG = {
    ko: [
        { 
            id: 'nurse_home_event1', 
            name: '보건선생님과의 특별한 만남', 
            character: '보건선생님',
            description: '보건선생님의 집에서 일어난 특별한 이벤트',
            file: 'assets/images/background/nurse_home_event1.png',
            thumbnail: 'assets/images/background/nurse_home_event1.png'
        }
        // 새 CG를 추가하려면 여기에 같은 형식으로 객체 추가
    ],
    en: [
        { 
            id: 'nurse_home_event1', 
            name: 'Special Moment with the Nurse', 
            character: 'School Nurse',
            description: 'A special event at the nurse\'s home',
            file: 'assets/images/background/nurse_home_event1.png',
            thumbnail: 'assets/images/background/nurse_home_event1.png'
        }
    ]
};

// ==========================================================================
// BGM 데이터 (배경음악 목록)
// ==========================================================================
// 게임에서 사용되는 배경음악 목록
// 게임 내에서 해당 BGM이 재생되면 자동으로 갤러리에서 해금됨
//
// 구조 설명:
// - id: BGM 고유 식별자 (파일명과 동일하게 설정 권장)
// - name: BGM 제목
// - artist: 작곡가/아티스트
// - duration: 재생 시간
// - file: 오디오 파일 경로

const GALLERY_BGM = {
    ko: [
        { id: 'intro', name: '메인 테마', artist: 'Cupid OST', duration: '2:30', file: 'assets/audio/bgm/intro.mp3' },
        { id: 'daily', name: '학교 일상', artist: 'Cupid OST', duration: '3:15', file: 'assets/audio/bgm/daily.mp3' },
        { id: 'daily2', name: '평화로운 오후', artist: 'Cupid OST', duration: '3:00', file: 'assets/audio/bgm/daily2.mp3' },
        { id: 'sunset1', name: '노을 지는 하교길', artist: 'Cupid OST', duration: '2:45', file: 'assets/audio/bgm/sunset1.mp3' },
        { id: 'sunset2', name: '설레는 순간', artist: 'Cupid OST', duration: '2:50', file: 'assets/audio/bgm/sunset2.mp3' },
        { id: 'night1', name: '고요한 밤', artist: 'Cupid OST', duration: '3:20', file: 'assets/audio/bgm/night1.mp3' },
        { id: 'night2', name: '비밀스러운 밤', artist: 'Cupid OST', duration: '3:10', file: 'assets/audio/bgm/night2.mp3' }
    ],
    en: [
        { id: 'intro', name: 'Main Theme', artist: 'Cupid OST', duration: '2:30', file: 'assets/audio/bgm/intro.mp3' },
        { id: 'daily', name: 'School Days', artist: 'Cupid OST', duration: '3:15', file: 'assets/audio/bgm/daily.mp3' },
        { id: 'daily2', name: 'Peaceful Afternoon', artist: 'Cupid OST', duration: '3:00', file: 'assets/audio/bgm/daily2.mp3' },
        { id: 'sunset1', name: 'Sunset Walk Home', artist: 'Cupid OST', duration: '2:45', file: 'assets/audio/bgm/sunset1.mp3' },
        { id: 'sunset2', name: 'Romantic Moment', artist: 'Cupid OST', duration: '2:50', file: 'assets/audio/bgm/sunset2.mp3' },
        { id: 'night1', name: 'Quiet Night', artist: 'Cupid OST', duration: '3:20', file: 'assets/audio/bgm/night1.mp3' },
        { id: 'night2', name: 'Secret Night', artist: 'Cupid OST', duration: '3:10', file: 'assets/audio/bgm/night2.mp3' }
    ]
};

// ==========================================================================
// 갤러리 상태 변수 (Gallery State)
// ==========================================================================
// 현재 갤러리의 상태를 추적하는 전역 변수들

let currentLang = 'ko';           // 현재 선택된 언어 ('ko' 또는 'en')
let currentTab = 'characters';    // 현재 선택된 탭 ('characters', 'cg', 'music')
let currentCharacter = null;      // 현재 모달에서 보고 있는 캐릭터 ID
let currentExpression = 'normal'; // 현재 선택된 표정
let currentBgm = null;            // 현재 재생 중인 BGM ID (null이면 재생 중 아님)
let bgmAudio = null;              // 현재 재생 중인 Audio 객체

// ==========================================================================
// 초기화 (Initialization)
// ==========================================================================

/**
 * 페이지 로드 완료 시 실행되는 초기화 함수
 * DOMContentLoaded 이벤트: HTML 파싱이 완료되면 발생 (이미지 로드 전)
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. URL에서 언어 감지
    // gallery-en.html이면 영어, gallery.html이면 한국어
    currentLang = window.location.pathname.includes('-en') ? 'en' : 'ko';
    
    // 2. localStorage에서 갤러리 해금 상태 로드
    loadGalleryProgress();
    
    // 3. 탭 버튼에 클릭 이벤트 등록
    initTabs();
    
    // 4. 초기 콘텐츠 렌더링 (캐릭터 탭)
    renderCharacters();
});

/**
 * 탭 네비게이션 초기화
 * 각 탭 버튼에 클릭 이벤트 리스너를 등록
 */
function initTabs() {
    // 모든 .tab-btn 요소를 가져옴
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    // 각 버튼에 클릭 이벤트 등록
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // data-tab 속성에서 탭 이름 가져오기
            const tab = btn.dataset.tab;
            // 해당 탭으로 전환
            switchTab(tab);
        });
    });
}

/**
 * 탭 전환 함수
 * @param {string} tab - 전환할 탭 이름 ('characters', 'cg', 'music')
 */
function switchTab(tab) {
    // 현재 탭 상태 업데이트
    currentTab = tab;
    
    // 1. 탭 버튼 활성화 상태 업데이트
    // 선택된 탭 버튼에만 'active' 클래스 추가
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    
    // 2. 탭 콘텐츠 표시 상태 업데이트
    // 선택된 탭 콘텐츠만 'active' 클래스 추가 (CSS에서 display: block)
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.toggle('active', content.id === `tab-${tab}`);
    });
    
    // 3. 해당 탭의 콘텐츠 렌더링
    switch (tab) {
        case 'characters':
            renderCharacters();
            break;
        case 'cg':
            renderCG();
            break;
        case 'music':
            renderMusic();
            break;
    }
}

// ==========================================================================
// 진행도 관리 (Progress Management)
// ==========================================================================
// localStorage를 사용하여 갤러리 해금 상태를 저장/로드

// 갤러리 데이터 버전 (구조 변경 시 버전 올리면 자동 리셋)
const GALLERY_DATA_VERSION = 2;

/**
 * 갤러리 진행 상태 로드
 * localStorage에서 저장된 해금 상태를 불러옴
 * 저장된 데이터가 없거나 버전이 다르면 기본값을 생성하여 저장
 * 
 * @returns {Object} 해금 상태 객체
 */
function loadGalleryProgress() {
    const saved = localStorage.getItem('cupid_gallery');
    let needsReset = false;
    
    if (saved) {
        try {
            const data = JSON.parse(saved);
            // 버전 체크: 버전이 없거나 다르면 리셋
            if (!data.version || data.version < GALLERY_DATA_VERSION) {
                needsReset = true;
                console.log('[Gallery] 데이터 버전 업데이트로 인해 초기화됩니다.');
            }
        } catch (e) {
            needsReset = true;
        }
    } else {
        needsReset = true;
    }
    
    if (needsReset) {
        // 기본값: 모든 캐릭터/CG 잠금, intro BGM만 해금
        const defaultProgress = {
            version: GALLERY_DATA_VERSION,
            characters: {
                seyoun: { unlocked: false },
                yuna: { unlocked: false },
                dain: { unlocked: false },
                teacher: { unlocked: false },
                nurse: { unlocked: false }
            },
            cg: {},                           // CG는 기본적으로 없음 (게임 진행 시 추가)
            bgm: {
                intro: { unlocked: true }      // intro BGM만 기본 해금
            }
        };
        
        // localStorage에 저장
        localStorage.setItem('cupid_gallery', JSON.stringify(defaultProgress));
        return defaultProgress;
    }
    
    // 저장된 데이터가 있고 버전이 맞으면 파싱하여 반환
    return JSON.parse(saved);
}

/**
 * 현재 갤러리 진행 상태 가져오기
 * @returns {Object} 현재 저장된 해금 상태 객체
 */
function getProgress() {
    return JSON.parse(localStorage.getItem('cupid_gallery') || '{}');
}

/**
 * 특정 항목의 해금 여부 확인
 * @param {string} type - 항목 유형 ('characters', 'cg', 'bgm')
 * @param {string} id - 항목 ID (예: 'seyoun', 'nurse_home_event1', 'intro')
 * @returns {boolean} 해금되었으면 true, 아니면 false
 */
function isUnlocked(type, id) {
    const progress = getProgress();
    // ?. (옵셔널 체이닝): progress[type]이 undefined여도 에러 안 남
    return progress[type]?.[id]?.unlocked || false;
}

/**
 * CG 해금 (게임에서 CG 배경 도달 시 호출)
 * 배경 이미지 경로에서 CG ID를 추출하여 해금 상태를 저장
 * main.js에서 배경 설정 시 호출됨
 * 
 * @param {string} cgId - CG 고유 식별자 (예: 'nurse_home_event1')
 * @returns {boolean} 새로 해금되었으면 true, 이미 해금되어 있었으면 false
 */
function unlockCG(cgId) {
    const progress = getProgress();
    
    // CG 객체가 없으면 생성
    if (!progress.cg) {
        progress.cg = {};
    }
    
    // 이미 해금된 경우 false 반환
    if (progress.cg[cgId]?.unlocked) {
        return false;
    }
    
    // CG 해금
    progress.cg[cgId] = { unlocked: true, unlockedAt: Date.now() };
    localStorage.setItem('cupid_gallery', JSON.stringify(progress));
    console.log(`[Gallery] CG 해금: ${cgId}`);
    return true;
}

/**
 * 배경 이미지 경로에서 CG ID 추출
 * CG 이미지 경로가 'assets/images/cg/' 또는 'assets/images/background/'에 있고
 * GALLERY_CG에 등록된 ID와 매칭되면 해당 ID를 반환
 * 
 * @param {string} bgPath - 배경 이미지 경로
 * @returns {string|null} CG ID 또는 null
 */
function getCGIdFromPath(bgPath) {
    if (!bgPath) return null;
    
    // 파일명 추출 (확장자 제외)
    const filename = bgPath.split('/').pop().replace(/\.[^.]+$/, '');
    
    // GALLERY_CG에서 해당 ID가 존재하는지 확인 (ko/en 모두 체크)
    const allCGIds = new Set([
        ...GALLERY_CG.ko.map(cg => cg.id),
        ...GALLERY_CG.en.map(cg => cg.id)
    ]);
    
    // 파일명이 CG ID와 일치하면 반환
    if (allCGIds.has(filename)) {
        return filename;
    }
    
    // '_thumb' 접미사 제거 후 다시 확인
    const baseFilename = filename.replace(/_thumb$/, '');
    if (allCGIds.has(baseFilename)) {
        return baseFilename;
    }
    
    return null;
}

// main.js에서 사용할 수 있도록 전역으로 노출
window.unlockCG = unlockCG;
window.getCGIdFromPath = getCGIdFromPath;

/**
 * 캐릭터를 만난 적이 있는지 확인
 * @param {string} charId - 캐릭터 ID
 * @returns {boolean} 만난 적 있으면 true
 */
function isMet(charId) {
    const progress = getProgress();
    return progress.characters?.[charId]?.met || false;
}

/**
 * 현재 호감도 가져오기 (최고점 기준)
 * 
 * 항상 localStorage에 저장된 최대 호감도(maxAffinity)를 사용
 * 한 번 달성한 호감도는 떨어지지 않으므로 영구 해금 방식
 * 
 * @param {string} charId - 캐릭터 ID (seyoun, yuna, dain, teacher, nurse)
 * @returns {number} 최대 호감도 (0 ~ 100)
 */
function getCurrentAffinity(charId) {
    // localStorage에 저장된 최대 호감도를 사용 (영구 해금)
    const progress = getProgress();
    return progress.characters?.[charId]?.maxAffinity || 0;
}

/**
 * 표정별 해금 필요 호감도 계산
 * 
 * 호감도 0~100을 표정 개수에 따라 균등 분배
 * 예시: 5개 표정이면 각각 0, 25, 50, 75, 100에서 해금
 * 첫 번째 표정(normal)은 항상 해금 (0 필요)
 * 
 * @param {number} expressionIndex - 표정 인덱스 (0부터 시작, 0=normal)
 * @param {number} totalExpressions - 전체 표정 개수
 * @returns {number} 해금에 필요한 호감도 (0~100)
 */
function getExpressionUnlockRequirement(expressionIndex, totalExpressions) {
    // 표정이 1개 이하면 무조건 해금
    if (totalExpressions <= 1) return 0;
    // 첫 번째 표정(normal, index=0)은 항상 해금
    if (expressionIndex === 0) return 0;
    // 나머지 표정은 균등 분배
    // 예: 5개 표정일 때 index 1 -> 25, index 2 -> 50, ...
    return Math.round((expressionIndex / (totalExpressions - 1)) * 100);
}

/**
 * 특정 표정이 해금되었는지 확인
 * 
 * 일반 표정: 호감도 기준 균등 분배
 * 특별 표정 (bikini): 호감도 100 + 프리토킹 100회 필요
 * 
 * @param {string} charId - 캐릭터 ID
 * @param {number} expressionIndex - 표정 인덱스
 * @param {number} totalExpressions - 전체 표정 개수
 * @param {string} expressionName - 표정 코드명 (선택적)
 * @returns {boolean} 해금 여부
 */
function isExpressionUnlocked(charId, expressionIndex, totalExpressions, expressionName = null) {
    // 특별 표정 체크 (bikini)
    if (expressionName === 'bikini') {
        const affinity = getCurrentAffinity(charId);
        const freeTalkCount = getFreeTalkCount(charId);
        return affinity >= 100 && freeTalkCount >= 100;
    }
    
    // 일반 표정: 호감도 기준
    const requiredAffinity = getExpressionUnlockRequirement(expressionIndex, totalExpressions);
    const currentAffinity = getCurrentAffinity(charId);
    return currentAffinity >= requiredAffinity;
}

/**
 * 프리토킹 횟수 가져오기
 * localStorage에 저장된 프리토킹 횟수 반환
 * 
 * @param {string} charId - 캐릭터 ID
 * @returns {number} 프리토킹 횟수
 */
function getFreeTalkCount(charId) {
    const progress = getProgress();
    return progress.characters?.[charId]?.freeTalkCount || 0;
}

// ==========================================================================
// 캐릭터 갤러리 렌더링 (Character Gallery Rendering)
// ==========================================================================

/**
 * 캐릭터 그리드 렌더링
 * 캐릭터 카드들을 HTML로 생성하여 화면에 표시
 * 
 * 해금 단계:
 * 1. met (만남): 게임에서 캐릭터를 만난 적 있으면 카드 표시, 상세 정보 열람 가능
 * 2. 표정 해금: 호감도에 따라 개별 표정 해금 (0~100 균등 분배)
 * 3. 소개/몸무게: 호감도 80 이상에서 해금
 * 4. 신체사이즈: 호감도 100에서 해금
 */
function renderCharacters() {
    // 캐릭터 그리드 컨테이너 가져오기
    const grid = document.getElementById('character-grid');
    if (!grid) return;  // 요소가 없으면 종료
    
    // 현재 언어에 맞는 캐릭터 데이터 가져오기
    const characters = GALLERY_CHARACTERS[currentLang];
    let html = '';
    
    // 각 캐릭터에 대해 카드 HTML 생성
    Object.values(characters).forEach(char => {
        const met = isMet(char.id);           // 만난 적 있는지
        const expressionCount = char.expressions.length;
        
        // 캐릭터 카드 HTML 생성
        // met 여부에 따라 카드 표시
        html += `
            <div class="character-card ${met ? '' : 'not-met'}" 
                 onclick="handleCharacterClick('${char.id}')">
                
                <!-- 캐릭터 이미지 영역 -->
                <div class="card-image">
                    <!-- 항상 이미지 표시, 미만남 시 실루엣으로 -->
                    <img src="assets/images/characters/${char.id}_normal.png" alt="${met ? char.name : '???'}" class="${met ? '' : 'silhouette'}">
                </div>
                
                <!-- 캐릭터 정보 영역 -->
                <div class="card-info">
                    <!-- 만남 시 이름 표시, 미만남 시 ??? 표시 -->
                    <h3>${met ? char.name : '???'}</h3>
                    <!-- 만남 시 타이틀, 미만남 시 안내 메시지 -->
                    <p>${met ? char.title : (currentLang === 'ko' ? '아직 만나지 못함' : 'Not yet met')}</p>
                    <!-- 만남 시에만 표정 개수 표시 -->
                    ${met ? `<span class="expression-count">${currentLang === 'ko' ? '표정' : 'Expressions'} ${expressionCount}</span>` : ''}
                </div>
            </div>
        `;
    });
    
    // 생성된 HTML을 그리드에 삽입
    grid.innerHTML = html;
}

/**
 * 캐릭터 카드 클릭 핸들러
 * met 상태에 따라 다른 동작 수행
 * 
 * 동작:
 * - 만난 적 없는 캐릭터: 안내 팝업 표시
 * - 만난 캐릭터: 상세 모달 열기 (표정은 호감도에 따라 개별 해금)
 * 
 * @param {string} charId - 클릭한 캐릭터 ID (seyoun, yuna, dain, teacher, nurse)
 */
function handleCharacterClick(charId) {
    const met = isMet(charId);
    
    if (!met) {
        // 아직 만나지 못한 캐릭터
        showUnlockConditionPopup({
            title: currentLang === 'ko' ? '캐릭터 미발견' : 'Character Not Found',
            message: currentLang === 'ko' 
                ? '아직 이 캐릭터를 만나지 못했습니다.\n게임을 진행하여 캐릭터를 만나보세요!'
                : 'You haven\'t met this character yet.\nPlay the game to meet them!',
            icon: '❓'
        });
    } else {
        // 만난 캐릭터 - 바로 상세 모달 열기 (표정은 호감도에 따라 개별 해금)
        openCharacterModal(charId);
    }
}

/**
 * 해금 조건 팝업 표시
 * 잠긴 콘텐츠 클릭 시 해금 조건을 알려주는 팝업
 * 
 * 팝업 구성:
 * - icon: 팝업 상단에 표시되는 이모지
 * - title: 팝업 제목
 * - message: 해금 조건 설명 (개행문자 \n 지원)
 * 
 * @param {Object} options - 팝업 옵션 { title: string, message: string, icon: string }
 */
function showUnlockConditionPopup(options) {
    // 기존 팝업이 있으면 제거
    const existingPopup = document.getElementById('unlock-condition-popup');
    if (existingPopup) existingPopup.remove();
    
    // 팝업 생성
    const popup = document.createElement('div');
    popup.id = 'unlock-condition-popup';
    popup.className = 'unlock-popup-overlay';
    popup.onclick = (e) => { 
        if (e.target === popup) closeUnlockConditionPopup(); 
    };
    
    popup.innerHTML = `
        <div class="unlock-popup-content">
            <div class="unlock-popup-icon">${options.icon}</div>
            <h3 class="unlock-popup-title">${options.title}</h3>
            <p class="unlock-popup-message">${options.message.replace(/\n/g, '<br>')}</p>
            <button class="unlock-popup-btn" onclick="closeUnlockConditionPopup()">
                ${currentLang === 'ko' ? '확인' : 'OK'}
            </button>
        </div>
    `;
    
    document.body.appendChild(popup);
    
    // 애니메이션을 위해 약간의 딜레이 후 active 클래스 추가
    requestAnimationFrame(() => {
        popup.classList.add('active');
    });
}

/**
 * 해금 조건 팝업 닫기
 */
function closeUnlockConditionPopup() {
    const popup = document.getElementById('unlock-condition-popup');
    if (popup) {
        popup.classList.remove('active');
        setTimeout(() => popup.remove(), 300);
    }
}

/**
 * 표정 잠금 팝업 표시
 * 미해금 표정 버튼 클릭 시 호출
 * 현재 호감도와 필요 호감도를 보여줌
 * 
 * @param {string} charName - 캐릭터 이름 (표시용)
 * @param {string} exprName - 표정 이름 (표시용)
 * @param {number} requiredAffinity - 해금에 필요한 호감도
 */
function showExpressionLockPopup(charName, exprName, requiredAffinity) {
    const currentAffinity = getCurrentAffinity(currentCharacter);
    
    showUnlockConditionPopup({
        title: currentLang === 'ko' ? '표정 미해금' : 'Expression Locked',
        message: currentLang === 'ko' 
            ? `"${exprName}" 표정을 해금하려면\n호감도 ${requiredAffinity}이(가) 필요합니다.\n\n💕 최대 호감도: ${currentAffinity}\n🎯 필요 호감도: ${requiredAffinity}`
            : `To unlock "${exprName}" expression,\nyou need ${requiredAffinity} affinity.\n\n💕 Max Affinity: ${currentAffinity}\n🎯 Required: ${requiredAffinity}`,
        icon: '🔒'
    });
}

/**
 * 비키니 특별 표정 잠금 팝업 표시
 * 호감도 100 + 프리토킹 100회 조건
 * 
 * @param {string} charName - 캐릭터 이름
 */
function showBikiniLockPopup(charName) {
    const currentAffinity = getCurrentAffinity(currentCharacter);
    const freeTalkCount = getFreeTalkCount(currentCharacter);
    
    showUnlockConditionPopup({
        title: currentLang === 'ko' ? '💎 특별 표정' : '💎 Special Expression',
        message: currentLang === 'ko' 
            ? `${charName}의 특별한 모습을 보려면\n두 가지 조건을 모두 달성해야 합니다!\n\n💕 최대 호감도: ${currentAffinity}/100 ${currentAffinity >= 100 ? '✅' : '❌'}\n💬 프리토킹: ${freeTalkCount}/100회 ${freeTalkCount >= 100 ? '✅' : '❌'}`
            : `To see ${charName}'s special look,\nyou need to achieve both conditions!\n\n💕 Max Affinity: ${currentAffinity}/100 ${currentAffinity >= 100 ? '✅' : '❌'}\n💬 Free Talks: ${freeTalkCount}/100 ${freeTalkCount >= 100 ? '✅' : '❌'}`,
        icon: '👙'
    });
}

/**
 * 소개 더보기 잠금 팝업 표시
 * 호감도 80 미만일 때 "소개 더 보기" 버튼 클릭 시 호출
 * 전체 소개를 보려면 호감도 80이 필요함을 안내
 * 
 * @param {string} charId - 캐릭터 ID
 */
function showDescriptionLockPopup(charId) {
    const currentAffinity = getCurrentAffinity(charId);
    const char = GALLERY_CHARACTERS[currentLang][charId];
    
    showUnlockConditionPopup({
        title: currentLang === 'ko' ? '소개 미해금' : 'Description Locked',
        message: currentLang === 'ko' 
            ? `${char.name}의 전체 소개를 보려면\n호감도 80이 필요합니다.\n\n💕 최대 호감도: ${currentAffinity}\n🎯 필요 호감도: 80`
            : `To view ${char.name}'s full description,\nyou need 80 affinity.\n\n💕 Max Affinity: ${currentAffinity}\n🎯 Required: 80`,
        icon: '📖'
    });
}

/**
 * 프로필 스탯 잠금 팝업 표시
 * 잠긴 프로필 항목(몸무게, 신체사이즈) 클릭 시 호출
 * 
 * 해금 조건:
 * - 몸무게 (weight): 호감도 80 이상
 * - 신체사이즈 (bust): 호감도 100
 * 
 * @param {string} statType - 스탯 종류 ('weight' 또는 'bust')
 * @param {string} charName - 캐릭터 이름 (표시용)
 */
function showStatLockPopup(statType, charName) {
    const currentAffinity = getCurrentAffinity(currentCharacter);
    
    if (statType === 'weight') {
        showUnlockConditionPopup({
            title: currentLang === 'ko' ? '몸무게 미해금' : 'Weight Locked',
            message: currentLang === 'ko' 
                ? `${charName}의 몸무게를 보려면\n호감도 80이 필요합니다.\n\n💕 최대 호감도: ${currentAffinity}\n🎯 필요 호감도: 80`
                : `To view ${charName}'s weight,\nyou need 80 affinity.\n\n💕 Max Affinity: ${currentAffinity}\n🎯 Required: 80`,
            icon: '⚖️'
        });
    } else if (statType === 'bust') {
        showUnlockConditionPopup({
            title: currentLang === 'ko' ? '신체사이즈 미해금' : 'Body Size Locked',
            message: currentLang === 'ko' 
                ? `${charName}의 신체사이즈를 보려면\n호감도 100이 필요합니다.\n\n💕 최대 호감도: ${currentAffinity}\n🎯 필요 호감도: 100`
                : `To view ${charName}'s body size,\nyou need 100 affinity.\n\n💕 Max Affinity: ${currentAffinity}\n🎯 Required: 100`,
            icon: '💝'
        });
    }
}

// ==========================================================================
// 캐릭터 상세 모달 (Character Detail Modal)
// ==========================================================================

/**
 * 캐릭터 상세 모달 열기
 * 캐릭터 카드 클릭 시 호출됨
 * 
 * 모달에 표시되는 내용:
 * - 캐릭터 이름과 타이틀
 * - 캐릭터 소개 (호감도 80 미만시 짧은 소개 + 더보기 버튼)
 * - 표정 선택 버튼들 (호감도에 따라 개별 해금)
 * - 프로필 정보 (몸무게: 80+, 신체사이즈: 100)
 * 
 * @param {string} charId - 표시할 캐릭터 ID
 */
function openCharacterModal(charId) {
    // 현재 캐릭터 및 표정 상태 업데이트
    currentCharacter = charId;
    currentExpression = 'normal';  // 기본 표정으로 초기화
    
    // 캐릭터 데이터 가져오기
    const char = GALLERY_CHARACTERS[currentLang][charId];
    const modal = document.getElementById('character-modal');
    const affinity = getCurrentAffinity(charId);
    
    // 모달 내용 업데이트
    document.getElementById('modal-char-name').textContent = char.name;
    document.getElementById('modal-char-title').textContent = char.title;
    
    // 소개 표시 (호감도 80 이상이면 전체, 미만이면 짧은 소개 + 더보기 버튼)
    const descContainer = document.getElementById('modal-char-desc');
    if (affinity >= 80) {
        descContainer.innerHTML = char.description;
    } else {
        const moreBtn = currentLang === 'ko' ? '소개 더 보기' : 'Read More';
        descContainer.innerHTML = `${char.shortDescription} <button class="desc-more-btn" onclick="showDescriptionLockPopup('${charId}')">${moreBtn}</button>`;
    }
    
    // 캐릭터 이미지 업데이트
    updateCharacterImage();
    
    // 표정 선택 버튼들 렌더링
    renderExpressionButtons(char);
    
    // 프로필 정보 렌더링
    renderCharacterStats(char);
    
    // 모달 표시 (active 클래스 추가)
    modal.classList.add('active');
}

/**
 * 캐릭터 상세 모달 닫기
 * X 버튼 클릭 또는 모달 외부 클릭 시 호출
 * 모달을 숨기고 현재 캐릭터 상태 초기화
 */
function closeCharacterModal() {
    document.getElementById('character-modal').classList.remove('active');
    currentCharacter = null;
}

/**
 * 캐릭터 이미지 업데이트
 * 현재 선택된 캐릭터와 표정에 맞는 이미지로 변경
 * 이미지 경로 형식: assets/images/characters/{charId}_{expression}.png
 */
function updateCharacterImage() {
    const img = document.getElementById('modal-char-image');
    // 이미지 경로: assets/images/characters/{캐릭터ID}_{표정}.png
    img.src = `assets/images/characters/${currentCharacter}_${currentExpression}.png`;
}

/**
 * 표정 선택 버튼 렌더링
 * 캐릭터의 모든 표정에 대해 버튼 생성
 * 
 * 표정 해금 시스템:
 * - 호감도 0~100을 표정 개수에 따라 균등 분배
 * - 첫 번째 표정(normal)은 항상 해금
 * - 해금된 표정: 클릭 시 해당 표정으로 변경
 * - 미해금 표정: 클릭 시 해금 조건 팝업 표시
 * 
 * @param {Object} char - 캐릭터 데이터 객체
 */
function renderExpressionButtons(char) {
    const container = document.getElementById('expression-buttons');
    const names = EXPRESSION_NAMES[currentLang];
    const totalExpressions = char.expressions.length;
    
    let html = '';
    // 캐릭터가 가진 각 표정에 대해 버튼 생성
    char.expressions.forEach((expr, index) => {
        // 특별 표정(bikini)은 expressionName 전달
        const unlocked = isExpressionUnlocked(char.id, index, totalExpressions, expr);
        
        if (unlocked) {
            // 해금된 표정: 정상 버튼
            html += `
                <button class="expression-btn ${expr === currentExpression ? 'active' : ''}"
                        onclick="changeExpression('${expr}')">
                    ${names[expr] || expr}
                </button>
            `;
        } else {
            // 미해금 표정: 잠긴 버튼 (특별 표정은 별도 팝업)
            if (expr === 'bikini') {
                html += `
                    <button class="expression-btn locked special"
                            onclick="showBikiniLockPopup('${char.name}')">
                        💎 ${names[expr] || expr}
                    </button>
                `;
            } else {
                const requiredAffinity = getExpressionUnlockRequirement(index, totalExpressions);
                html += `
                    <button class="expression-btn locked"
                            onclick="showExpressionLockPopup('${char.name}', '${names[expr] || expr}', ${requiredAffinity})">
                        🔒 ${names[expr] || expr}
                    </button>
                `;
            }
        }
    });
    
    container.innerHTML = html;
}

/**
 * 표정 변경
 * 표정 버튼 클릭 시 호출됨
 * 캐릭터 이미지를 선택한 표정으로 변경하고 버튼 활성화 상태 업데이트
 * 
 * @param {string} expr - 변경할 표정 코드 (normal, shy, angry 등)
 */
function changeExpression(expr) {
    currentExpression = expr;
    
    // 캐릭터 이미지 업데이트
    updateCharacterImage();
    
    // 버튼 활성화 상태 업데이트
    document.querySelectorAll('.expression-btn').forEach(btn => {
        const btnText = btn.textContent.trim();
        const exprName = EXPRESSION_NAMES[currentLang][expr] || expr;
        btn.classList.toggle('active', btnText === exprName);
    });
}

/**
 * 캐릭터 프로필 정보 렌더링
 * 캐릭터의 상세 정보를 표시하는 HTML 생성
 * 
 * 표시 항목:
 * - 나이, 생일, 키: 항상 표시
 * - 몸무게: 호감도 80 이상에서 표시 (미만시 자물쇠)
 * - 신체사이즈: 호감도 100에서 표시 (미만시 자물쇠)
 * - 취미: 항상 표시
 * 
 * 자물쇠 클릭 시 해금 조건 팝업 표시
 * 
 * @param {Object} char - 캐릭터 데이터 객체
 */
function renderCharacterStats(char) {
    const container = document.getElementById('char-stats');
    const affinity = getCurrentAffinity(char.id);
    
    // 현재 언어에 맞는 라벨
    const labels = currentLang === 'ko' ? 
        { age: '나이', birthday: '생일', height: '키', weight: '몸무게', bust: '신체사이즈', hobby: '취미', personality: '성격' } :
        { age: 'Age', birthday: 'Birthday', height: 'Height', weight: 'Weight', bust: 'Body Size', hobby: 'Hobby', personality: 'Personality' };
    
    const lockText = currentLang === 'ko' ? '🔒' : '🔒';
    
    // 몸무게 표시 (호감도 80 이상)
    const weightValue = affinity >= 80 ? char.weight : 
        `<span class="locked-stat" onclick="showStatLockPopup('weight', '${char.name}')">${lockText}</span>`;
    
    // 가슴 사이즈 표시 (호감도 100 이상)
    const bustValue = affinity >= 100 ? char.bust : 
        `<span class="locked-stat" onclick="showStatLockPopup('bust', '${char.name}')">${lockText}</span>`;
    
    // 프로필 정보 HTML 생성
    container.innerHTML = `
        <div class="stat-item">
            <div class="stat-label">${labels.age}</div>
            <div class="stat-value">${char.age}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">${labels.birthday}</div>
            <div class="stat-value">${char.birthday}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">${labels.height}</div>
            <div class="stat-value">${char.height}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">${labels.weight}</div>
            <div class="stat-value">${weightValue}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">${labels.bust}</div>
            <div class="stat-value">${bustValue}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">${labels.hobby}</div>
            <div class="stat-value">${char.hobby}</div>
        </div>
    `;
}

// ==========================================================================
// CG 갤러리 렌더링 (CG Gallery Rendering)
// ==========================================================================

/**
 * CG 그리드 렌더링
 * CG 카드들을 HTML로 생성하여 화면에 표시
 * 
 * CG가 없는 경우 빈 상태 메시지 표시
 * 해금된 CG는 썸네일 표시, 미해금은 자물쇠 표시
 */
function renderCG() {
    const grid = document.getElementById('cg-grid');
    if (!grid) return;
    
    // 현재 언어에 맞는 CG 목록 가져오기
    const cgList = GALLERY_CG[currentLang];
    
    // CG가 없는 경우 빈 상태 메시지 표시
    if (cgList.length === 0) {
        const emptyMsg = currentLang === 'ko' ? 
            { title: '아직 이벤트 CG가 없습니다', desc: '게임을 진행하며 특별한 순간을 수집하세요!' } :
            { title: 'No Event CG yet', desc: 'Collect special moments as you play!' };
        
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <div class="icon">🖼️</div>
                <h3>${emptyMsg.title}</h3>
                <p>${emptyMsg.desc}</p>
            </div>
        `;
        return;
    }
    
    // CG 카드들 렌더링
    let html = '';
    cgList.forEach(cg => {
        const unlocked = isUnlocked('cg', cg.id);
        
        html += `
            <div class="cg-card ${unlocked ? '' : 'locked'}" 
                 onclick="${unlocked ? `openCGModal('${cg.id}')` : `showCGLockPopup('${cg.id}')`}">
                
                <!-- CG 이미지 영역 -->
                <div class="card-image">
                    ${unlocked ? 
                        // 해금됨: 썸네일 또는 원본 이미지 표시
                        `<img src="${cg.thumbnail || cg.file}" alt="${cg.name}">` :
                        // 잠김: 자물쇠 표시
                        `<div class="lock-overlay">🔒</div>`
                    }
                </div>
                
                <!-- CG 정보 영역 -->
                <div class="card-info">
                    <h4>${cg.name}</h4>
                    <p>${unlocked ? cg.character : (currentLang === 'ko' ? '미해금' : 'Locked')}</p>
                </div>
            </div>
        `;
    });
    
    grid.innerHTML = html;
}

/**
 * CG 잠금 팝업 표시
 * 잠긴 CG 클릭 시 해금 조건 안내
 * CG는 게임에서 해당 이벤트를 경험하면 자동 해금
 * 
 * @param {string} cgId - CG ID
 */
function showCGLockPopup(cgId) {
    showUnlockConditionPopup({
        title: currentLang === 'ko' ? 'CG 미해금' : 'CG Locked',
        message: currentLang === 'ko' 
            ? '이 이벤트 CG는 아직 해금되지 않았습니다.\n\n💕 해금 조건: 게임에서 해당 이벤트를 경험하세요!'
            : 'This event CG is not yet unlocked.\n\n💕 Condition: Experience this event in the game!',
        icon: '🖼️'
    });
}

/**
 * CG 모달 열기
 * 해금된 CG 카드 클릭 시 호출됨
 * CG 이미지를 크게 보여주는 모달 표시
 * 
 * @param {string} cgId - 표시할 CG ID
 */
function openCGModal(cgId) {
    // CG 데이터 찾기
    const cg = GALLERY_CG[currentLang].find(c => c.id === cgId);
    if (!cg) return;
    
    // CG 모달 가져오기 (없으면 동적 생성)
    const modal = document.getElementById('cg-modal') || createCGModal();
    
    // 모달 내용 업데이트
    const cgImage = document.getElementById('cg-modal-image');
    cgImage.src = cg.file;
    cgImage.classList.remove('cg-image-loaded');
    
    document.getElementById('cg-modal-title').textContent = cg.name;
    document.getElementById('cg-modal-desc').textContent = cg.description;
    
    // 모달 표시 (애니메이션 트리거)
    modal.classList.add('active');
    
    // 이미지 로드 완료 시 효과 시작
    cgImage.onload = () => {
        requestAnimationFrame(() => {
            cgImage.classList.add('cg-image-loaded');
        });
    };
}

/**
 * CG 모달 닫기
 * X 버튼 클릭 또는 모달 외부 클릭 시 호출
 */
function closeCGModal() {
    const modal = document.getElementById('cg-modal');
    if (modal) modal.classList.remove('active');
}

/**
 * CG 모달 동적 생성
 * 페이지에 CG 모달 HTML이 없는 경우 JavaScript로 생성
 * 모달 외부 클릭 시 닫기 기능 포함
 * 
 * @returns {HTMLElement} 생성된 모달 요소
 */
function createCGModal() {
    const modal = document.createElement('div');
    modal.id = 'cg-modal';
    modal.className = 'modal-overlay cg-modal-overlay';
    
    // 모달 외부 클릭 시 닫기
    modal.onclick = (e) => { 
        if (e.target === modal) closeCGModal(); 
    };
    
    // 모달 내용 HTML (파티클 효과 포함)
    modal.innerHTML = `
        <div class="cg-particles"></div>
        <div class="cg-glow-effect"></div>
        <div class="modal-content cg-modal-content">
            <button class="modal-close cg-close-btn" onclick="closeCGModal()">×</button>
            <div class="cg-viewer">
                <img id="cg-modal-image" src="" alt="CG">
            </div>
            <div class="cg-info">
                <h3 id="cg-modal-title"></h3>
                <p id="cg-modal-desc"></p>
            </div>
        </div>
    `;
    
    // body에 추가
    document.body.appendChild(modal);
    
    // 파티클 생성
    createCGParticles(modal.querySelector('.cg-particles'));
    
    return modal;
}

// ==========================================================================
// 음악실 렌더링 (Music Room Rendering)
// ==========================================================================

/**
 * 음악 목록 렌더링
 * BGM 항목들을 HTML로 생성하여 화면에 표시
 * 
 * 표시 정보:
 * - 해금된 BGM: 제목, 아티스트, 재생시간 표시
 * - 잠긴 BGM: ??? 표시, 클릭 시 해금 조건 팝업
 * - 재생 중인 BGM: playing 클래스 추가로 강조 표시
 */
function renderMusic() {
    const list = document.getElementById('music-list');
    if (!list) return;
    
    // 현재 언어에 맞는 BGM 목록 가져오기
    const bgmList = GALLERY_BGM[currentLang];
    let html = '';
    
    // 각 BGM에 대해 항목 HTML 생성
    bgmList.forEach(bgm => {
        const unlocked = isUnlocked('bgm', bgm.id);
        const isPlaying = currentBgm === bgm.id;  // 현재 재생 중인지 확인
        
        html += `
            <div class="music-item ${unlocked ? '' : 'locked'} ${isPlaying ? 'playing' : ''}"
                 onclick="${unlocked ? `toggleBgm('${bgm.id}', '${bgm.file}')` : `showMusicLockPopup('${bgm.id}')`}">
                
                <!-- 재생/잠금 아이콘 -->
                <div class="music-icon">
                    ${isPlaying ? '⏸️' : (unlocked ? '▶️' : '🔒')}
                </div>
                
                <!-- BGM 정보 -->
                <div class="music-info">
                    <h4>${unlocked ? bgm.name : '???'}</h4>
                    <p>${unlocked ? bgm.artist : (currentLang === 'ko' ? '미해금' : 'Locked')}</p>
                </div>
                
                <!-- 재생 시간 -->
                <div class="music-duration">
                    ${unlocked ? bgm.duration : '--:--'}
                </div>
            </div>
        `;
    });
    
    list.innerHTML = html;
}

/**
 * 음악 잠금 팝업 표시
 * 잠긴 BGM 클릭 시 해금 조건 안내
 * BGM은 게임에서 해당 음악이 재생되면 자동 해금
 * 
 * @param {string} bgmId - BGM ID
 */
function showMusicLockPopup(bgmId) {
    showUnlockConditionPopup({
        title: currentLang === 'ko' ? '음악 미해금' : 'Music Locked',
        message: currentLang === 'ko' 
            ? '이 배경음악은 아직 해금되지 않았습니다.\n\n🎵 해금 조건: 게임에서 해당 음악이 재생되면 자동 해금됩니다!'
            : 'This BGM is not yet unlocked.\n\n🎵 Condition: Will unlock automatically when played in game!',
        icon: '🎵'
    });
}

/**
 * BGM 재생/정지 토글
 * 음악 항목 클릭 시 호출됨
 * 
 * 동작 설명:
 * 1. 현재 재생 중인 곡을 클릭한 경우: 재생 정지
 * 2. 다른 곡을 클릭한 경우: 기존 곡 정지 후 새 곡 재생
 * 
 * Audio 설정:
 * - 볼륨: localStorage에 저장된 값 사용 (기본값 0.5 = 50%)
 * - 반복: loop = true (무한 반복)
 * 
 * @param {string} id - BGM ID (예: 'intro', 'school')
 * @param {string} file - 오디오 파일 경로 (예: 'assets/audio/bgm/intro.mp3')
 */
function toggleBgm(id, file) {
    if (currentBgm === id) {
        // 현재 재생 중인 곡을 클릭한 경우: 정지
        if (bgmAudio) {
            bgmAudio.pause();
            bgmAudio = null;
        }
        currentBgm = null;
    } else {
        // 다른 곡을 클릭한 경우: 재생
        
        // 기존에 재생 중인 곡이 있으면 정지
        if (bgmAudio) {
            bgmAudio.pause();
        }
        
        // 새 Audio 객체 생성
        bgmAudio = new Audio(file);
        
        // 볼륨 설정 (localStorage에서 저장된 볼륨 사용, 기본값 0.5)
        bgmAudio.volume = parseFloat(localStorage.getItem('bgmVolume') || 0.5);
        
        // 반복 재생 설정
        bgmAudio.loop = true;
        
        // 재생 시작 (실패 시 에러 무시)
        bgmAudio.play().catch(e => console.log('Audio play failed:', e));
        
        currentBgm = id;
    }
    
    // UI 업데이트 (재생 상태 반영)
    renderMusic();
}

// ==========================================================================
// CG 모달 특수 효과 (CG Modal Special Effects)
// ==========================================================================

/**
 * CG 모달 파티클 생성
 * 반짝이는 별/하트 파티클을 배경에 생성
 * 
 * @param {HTMLElement} container - 파티클을 넣을 컨테이너
 */
function createCGParticles(container) {
    if (!container) return;
    
    const particles = ['✨', '💕', '💖', '⭐', '🌟', '💗'];
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('span');
        particle.className = 'cg-particle';
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (3 + Math.random() * 4) + 's';
        particle.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
        container.appendChild(particle);
    }
}

// ==========================================================================
// 유틸리티 함수 (Utility Functions)
// ==========================================================================

/**
 * 모달 외부 클릭 시 닫기
 * 오버레이(어두운 배경) 클릭 시 모달이 닫힘
 * 모달 내부 클릭은 이벤트 버블링으로 전파되지 않음
 */
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeCharacterModal();
    }
});

/**
 * 키보드 단축키 지원
 * ESC 키로 모달 닫기
 * 캐릭터 모달과 CG 모달 모두 ESC로 닫을 수 있음
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCharacterModal();
        closeCGModal();
    }
});

/**
 * 페이지 떠나기 전 오디오 정리
 * 다른 페이지로 이동하거나 탭을 닫을 때 BGM 정지
 * 메모리 누수 방지 및 깨끗한 종료를 위해 Audio 객체 정리
 */
window.addEventListener('beforeunload', () => {
    if (bgmAudio) {
        bgmAudio.pause();
        bgmAudio = null;
    }
});
