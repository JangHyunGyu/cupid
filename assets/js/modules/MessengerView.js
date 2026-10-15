// ============================================================================================
// MessengerView.js - 밤 문자 장면 메신저 말풍선 모듈
// ============================================================================================
// 1~4일차 밤의 문자 장면을 대화창 텍스트 대신 휴대폰 메신저 화면으로 표시
// - 상대 메시지: '입력 중' 점 세 개를 캐릭터별 속도로 보여 준 뒤 왼쪽 말풍선 추가
// - 주인공 메시지: 오른쪽 말풍선 + 안 읽음 표시('1'), 잠시 뒤 읽음 처리
// - 지문(*...*)은 기존 대화창에 그대로 출력하고 휴대폰 화면은 유지
//
// 의존성:
//   - config.js         → CHAR_NAME_MAP (표시 이름 → 내부 캐릭터 키)
//   - DialogueSystem.js → processPlaceholders, _parseNarrationSegments ({name} 치환, 지문 분리)
//
// window 노출:
//   - window.MessengerView
// ============================================================================================

/** 메신저 화면을 쓰는 장면 파일: 1~4일차 밤 (5일차 밤은 엔딩 CG 위주라 제외) */
const MESSENGER_NIGHT_FILE_PATTERN = /^day[1-4]_4_night$/;

/**
 * 말풍선으로 보여 줄 상대 캐릭터
 * 담임·보건선생님은 재학 중 개인 메시지를 쓰지 않는 설정이라 제외 (학교 앱 공지는 기존 지문 유지)
 */
const MESSENGER_CONTACT_KEYS = new Set(['Seoyeon', 'Yuna', 'Dain', 'Haeun']);

/** 스프라이트 파일명 접두어 → 캐릭터 키 (주인공이 먼저 보내는 장면에서 대화 상대 추정용) */
const MESSENGER_SPRITE_PREFIX = Object.freeze({ seyoun: 'Seoyeon', yuna: 'Yuna', dain: 'Dain', haeun: 'Haeun' });

/**
 * 캐릭터별 입력 속도
 * base: 기본 대기(ms), perChar: 글자당 추가(ms), max: 상한(ms), pause: 입력 중 표시가 한 번 끊겼다 다시 뜨는 시간(ms)
 * 유나: 오래 망설이다 짧게 보냄 / 다인: 거의 바로 연달아 보냄 / 서연: 차분하고 일정한 속도
 */
const MESSENGER_TYPING_PROFILES = Object.freeze({
    Yuna: { base: 1300, perChar: 18, max: 2600, pause: 450, readDelay: 1500 },
    Dain: { base: 260, perChar: 7, max: 700, pause: 0, readDelay: 350 },
    Seoyeon: { base: 620, perChar: 12, max: 1300, pause: 0, readDelay: 800 },
    Haeun: { base: 700, perChar: 12, max: 1400, pause: 0, readDelay: 900 },
    default: { base: 650, perChar: 12, max: 1300, pause: 0, readDelay: 900 }
});

/** 언어별 UI 문구 (한국어 안 읽음 표시는 숫자 '1') */
const MESSENGER_LABELS = Object.freeze({
    ko: { panel: '메신저 대화', typing: '입력 중', unread: '1', read: '' },
    en: { panel: 'Messenger chat', typing: 'typing…', unread: 'Delivered', read: 'Read' },
    ja: { panel: 'メッセンジャー', typing: '入力中', unread: '', read: '既読' },
    zh: { panel: '聊天记录', typing: '正在输入', unread: '未读', read: '已读' },
    es: { panel: 'Chat de mensajería', typing: 'escribiendo…', unread: 'Entregado', read: 'Leído' },
    fr: { panel: 'Messagerie', typing: 'écrit…', unread: 'Distribué', read: 'Lu' },
    de: { panel: 'Messenger-Chat', typing: 'schreibt…', unread: 'Zugestellt', read: 'Gelesen' },
    pt: { panel: 'Conversa no mensageiro', typing: 'digitando…', unread: 'Entregue', read: 'Lida' }
});

/** 대화방 제목 기본값 (상대가 아직 말하지 않은 방에서 사용) */
const MESSENGER_CONTACT_NAMES = Object.freeze({
    ko: { Seoyeon: '서연', Yuna: '유나', Dain: '다인', Haeun: '하은' },
    ja: { Seoyeon: 'ソヨン', Yuna: 'ユナ', Dain: 'ダイン', Haeun: 'ハウン' },
    zh: { Seoyeon: '书妍', Yuna: '由娜', Dain: '多因', Haeun: '夏恩' },
    default: { Seoyeon: 'Seoyeon', Yuna: 'Yuna', Dain: 'Dain', Haeun: 'Haeun' }
});

class MessengerView {
    /**
     * @param {UIManager} uiManager - 대화창·게임 컨테이너 DOM 접근
     * @param {DialogueSystem} dialogueSystem - {name} 치환과 지문 분리 재사용
     */
    constructor(uiManager, dialogueSystem) {
        this.uiManager = uiManager;
        this.dialogueSystem = dialogueSystem;
        this.panel = null;
        this.threadEl = null;
        this.titleEl = null;
        this.avatarEl = null;
        /** 현재 열린 대화방 상대 캐릭터 키 */
        this.contactKey = null;
        /** 입력 중 연출 진행 여부 (클릭 시 건너뛰기 판단) */
        this._animating = false;
        this._finishAnimation = null;
        this._readTimers = [];
        this._generation = 0;
    }

    _lang() {
        const lang = String(window.GAME_LANG || document.documentElement.lang || 'ko').toLowerCase().split('-')[0];
        return MESSENGER_LABELS[lang] ? lang : 'en';
    }

    _labels() {
        return MESSENGER_LABELS[this._lang()];
    }

    /** 패널 DOM이 처음 필요할 때 한 번만 생성 */
    _ensurePanel() {
        if (this.panel?.isConnected) return this.panel;
        const container = document.getElementById('game-container') || document.body;
        const panel = document.createElement('div');
        panel.id = 'messenger-panel';
        panel.setAttribute('role', 'log');
        panel.setAttribute('aria-live', 'polite');
        panel.setAttribute('aria-label', this._labels().panel);
        panel.innerHTML = '<div class="messenger-header"><span class="messenger-avatar" aria-hidden="true"></span><span class="messenger-title"></span></div><div class="messenger-thread"></div>';
        // 휴대폰 화면을 눌러도 대화창 클릭과 똑같이 다음 장면으로 진행
        panel.addEventListener('click', () => this.uiManager.dialogueBox?.click());
        container.appendChild(panel);
        this.panel = panel;
        this.threadEl = panel.querySelector('.messenger-thread');
        this.titleEl = panel.querySelector('.messenger-title');
        this.avatarEl = panel.querySelector('.messenger-avatar');
        if (typeof ResizeObserver !== 'undefined') {
            this._layoutObserver = new ResizeObserver(() => this._syncLayout());
            for (const element of [container, this.uiManager.dialogueBox, this.uiManager.choiceContainer]) {
                if (element) this._layoutObserver.observe(element);
            }
        }
        return panel;
    }

    _syncLayout() {
        if (!this.panel?.classList.contains('is-visible')) return;
        const container = this.panel.parentElement;
        const top = container.getBoundingClientRect().top + this.panel.offsetTop;
        const controls = [this.uiManager.dialogueBox, this.uiManager.choiceContainer]
            .filter(element => element && getComputedStyle(element).display !== 'none')
            .map(element => element.getBoundingClientRect())
            .filter(rect => rect.height > 0);
        const bottom = Math.min(container.getBoundingClientRect().bottom, ...controls.map(rect => rect.top));
        const available = Math.max(0, Math.floor(bottom - top - 12));
        const choosing = this.uiManager.choiceContainer?.getBoundingClientRect().height > 0;
        this.panel.style.setProperty('--messenger-available-height', `${available}px`);
        this.panel.style.visibility = choosing && available < 64 ? 'hidden' : '';
        this._scrollToEnd();
    }

    /**
     * 휴대폰 화면을 유지할 장면인지 판단
     * 조건: 1~4일차 밤 파일 + 프리토킹·입력 장면 아님 + (messenger:true 명시 또는 반투명 스프라이트)
     * 반투명(opacity < 1) 스프라이트는 기존 시나리오에서 '화면 너머 상대'를 뜻하는 표기
     * messenger:false로 통화 장면 등을 직접 제외 가능
     */
    isPhoneContext(scene) {
        if (!scene || scene.messenger === false) return false;
        const speakerKey = typeof CHAR_NAME_MAP !== 'undefined' && CHAR_NAME_MAP[scene.name];
        if (speakerKey && !MESSENGER_CONTACT_KEYS.has(speakerKey)) return false;
        if (['free_talk', 'group_free_talk', 'input', 'credits'].includes(scene.type)) return false;
        if (!MESSENGER_NIGHT_FILE_PATTERN.test(scene.__sourceFile || '')) return false;
        if (scene.messenger === true) return true;
        const opacity = scene.characters?.center?.opacity;
        return typeof opacity === 'number' && opacity < 1;
    }

    /**
     * 장면 화자를 메신저 기준으로 분류
     * 반환: { kind: 'player' } | { kind: 'contact', key } | null(말풍선 대상 아님)
     */
    _speaker(scene) {
        const name = String(scene?.name || '');
        if (!name) return null;
        if (name.includes('{name}')) return { kind: 'player' };
        const key = (typeof CHAR_NAME_MAP !== 'undefined' && CHAR_NAME_MAP[name]) || null;
        return key && MESSENGER_CONTACT_KEYS.has(key) ? { kind: 'contact', key } : null;
    }

    /** 대사(말풍선)와 지문(대화창)을 원문 기준으로 분리, 둘 다 {name} 치환은 출력 직전에 처리 */
    _split(text) {
        const segments = this.dialogueSystem?._parseNarrationSegments
            ? this.dialogueSystem._parseNarrationSegments(String(text || ''))
            : [{ type: 'text', content: String(text || '') }];
        const spoken = segments.filter(seg => seg.type !== 'action').map(seg => seg.content.trim()).filter(Boolean).join(' ');
        const narration = segments.filter(seg => seg.type === 'action').map(seg => `*${seg.content.trim()}*`).join(' ');
        return { spoken, narration };
    }

    /** 말풍선을 추가할 장면인지 판단 (휴대폰 맥락 + 허용 화자 + 실제 대사 존재) */
    shouldBubble(scene) {
        if (!this.isPhoneContext(scene)) return false;
        const speaker = this._speaker(scene);
        if (!speaker) return false;
        if (speaker.kind === 'player' && !this._inferContact(scene)) return false;
        return !!this._split(scene.text).spoken;
    }

    /** 주인공 메시지의 대화 상대: 장면 지정값 → 스프라이트 파일명 → 열린 방 순으로 추정 */
    _inferContact(scene) {
        if (MESSENGER_CONTACT_KEYS.has(scene?.messengerContact)) return scene.messengerContact;
        const src = String(scene?.characters?.center?.src || scene?.character || '');
        const file = src.split('/').pop() || '';
        const prefix = Object.keys(MESSENGER_SPRITE_PREFIX).find(key => file.startsWith(key));
        return prefix ? MESSENGER_SPRITE_PREFIX[prefix] : this.contactKey;
    }

    _contactName(key, sceneName) {
        if (sceneName && !String(sceneName).includes('{name}')) return String(sceneName);
        const lang = this._lang();
        return (MESSENGER_CONTACT_NAMES[lang] || MESSENGER_CONTACT_NAMES.default)[key] || key;
    }

    /** 상대가 바뀌면 다른 대화방으로 넘어간 것으로 보고 말풍선 목록을 비움 */
    _openThread(key, displayName) {
        this._ensurePanel();
        if (this.contactKey !== key) {
            this._clearReadTimers();
            this.threadEl.textContent = '';
            this.contactKey = key;
        }
        this.titleEl.textContent = displayName;
        this.avatarEl.textContent = Array.from(displayName)[0] || '';
        this.panel.dataset.contact = key;
        this.panel.setAttribute('aria-label', `${this._labels().panel}: ${displayName}`);
        this.panel.classList.add('is-visible');
        this._syncLayout();
    }

    _scrollToEnd() {
        if (this.threadEl) this.threadEl.scrollTop = this.threadEl.scrollHeight;
    }

    _appendRow(kind, text) {
        const row = document.createElement('div');
        row.className = `messenger-row is-${kind}`;
        const bubble = document.createElement('div');
        bubble.className = 'messenger-bubble';
        bubble.textContent = text;
        row.appendChild(bubble);
        this.threadEl.appendChild(row);
        this._scrollToEnd();
        return row;
    }

    _clearReadTimers() {
        this._readTimers.forEach(timer => clearTimeout(timer));
        this._readTimers = [];
    }

    /**
     * 상대 입력 중 표시 대기
     * 입력: 프로필, 대사 길이, 현재 연출 번호 → 점 세 개 표시 후 대기(유나는 중간에 한 번 끊김)
     * 반환: 대기가 끝나거나 skip()이 호출되면 resolve
     */
    _showTyping(profile, length, generation) {
        const total = Math.min(profile.max, profile.base + profile.perChar * length);
        const indicator = document.createElement('div');
        indicator.className = 'messenger-row is-contact messenger-typing-row';
        indicator.innerHTML = '<div class="messenger-typing"><span></span><span></span><span></span></div>';
        indicator.setAttribute('aria-label', this._labels().typing);
        this.threadEl.appendChild(indicator);
        this._scrollToEnd();

        return new Promise(resolve => {
            const timers = [];
            const done = () => {
                timers.forEach(timer => clearTimeout(timer));
                indicator.remove();
                if (this._finishAnimation === done) this._finishAnimation = null;
                resolve();
            };
            this._finishAnimation = done;
            if (profile.pause > 0 && total > profile.pause * 2) {
                // 입력 중 표시가 사라졌다가 다시 뜨는 망설임 연출
                const firstHalf = Math.round((total - profile.pause) / 2);
                timers.push(setTimeout(() => { if (generation === this._generation) indicator.classList.add('is-paused'); }, firstHalf));
                timers.push(setTimeout(() => { if (generation === this._generation) indicator.classList.remove('is-paused'); }, firstHalf + profile.pause));
            }
            timers.push(setTimeout(done, total));
        });
    }

    /**
     * 장면 하나를 메신저에 반영
     * 입력: 장면 데이터, { restoring: 세이브 복원 여부, isStillCurrent: 장면 전환 감지 함수 }
     * 처리: 대화방 열기 → (상대) 입력 중 대기 후 말풍선 / (주인공) 말풍선 + 읽음 타이머
     * 반환: 대화창에 따로 출력할 지문 원문(없으면 빈 문자열)
     * 장면이 중간에 바뀌면 말풍선을 추가하지 않고 빈 문자열 반환
     */
    async present(scene, { restoring = false, isStillCurrent = null } = {}) {
        const speaker = this._speaker(scene);
        const { spoken, narration } = this._split(scene.text);
        const generation = ++this._generation;
        const stillCurrent = () => generation === this._generation && (typeof isStillCurrent !== 'function' || isStillCurrent());

        if (speaker.kind === 'contact') {
            this._openThread(speaker.key, this._contactName(speaker.key, scene.name));
            const bubbleText = this.dialogueSystem.processPlaceholders(spoken, scene.name);
            const profile = MESSENGER_TYPING_PROFILES[speaker.key] || MESSENGER_TYPING_PROFILES.default;
            if (!restoring) {
                this._animating = true;
                try {
                    await this._showTyping(profile, Array.from(bubbleText).length, generation);
                } finally {
                    if (generation === this._generation) this._animating = false;
                }
                if (!stillCurrent()) return '';
            }
            this._appendRow('contact', bubbleText);
            return narration;
        }

        const contact = this._inferContact(scene);
        this._openThread(contact, this._contactName(contact, null));
        const row = this._appendRow('player', this.dialogueSystem.processPlaceholders(spoken, scene.name));
        const labels = this._labels();
        const receipt = document.createElement('span');
        receipt.className = 'messenger-receipt';
        receipt.textContent = labels.unread;
        row.insertBefore(receipt, row.firstChild);
        const profile = MESSENGER_TYPING_PROFILES[contact] || MESSENGER_TYPING_PROFILES.default;
        const markRead = () => {
            receipt.textContent = labels.read;
            receipt.classList.add(labels.read ? 'is-read' : 'is-gone');
        };
        if (restoring) markRead();
        else this._readTimers.push(setTimeout(markRead, profile.readDelay));
        return narration;
    }

    /** 입력 중 연출 진행 여부 */
    isAnimating() {
        return this._animating;
    }

    /** 클릭 시 입력 중 대기를 즉시 끝내고 말풍선 표시 */
    skip() {
        if (typeof this._finishAnimation === 'function') this._finishAnimation();
    }

    /** 문자 장면이 끝나면 휴대폰 화면을 닫고 대화방 상태 초기화 */
    hide() {
        this._generation += 1;
        this._animating = false;
        this.skip();
        this._clearReadTimers();
        this.contactKey = null;
        if (this.panel) {
            this.panel.classList.remove('is-visible');
            if (this.threadEl) this.threadEl.textContent = '';
        }
    }

    /** 새 메시지 진동 효과를 휴대폰 화면에 적용 */
    vibrate() {
        if (!this.panel?.classList.contains('is-visible')) return false;
        this.panel.classList.remove('msg-vibrate');
        void this.panel.offsetWidth;
        this.panel.classList.add('msg-vibrate');
        return true;
    }
}

window.MessengerView = MessengerView;
if (typeof module !== 'undefined' && module.exports) module.exports = MessengerView;
