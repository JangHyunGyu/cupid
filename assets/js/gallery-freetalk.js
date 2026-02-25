/**
 * ============================================================================
 * GalleryFreeTalk - 갤러리 엔딩 후 프리토킹 시스템
 * ============================================================================
 *
 * TRUE LOVE 엔딩 클리어 후 갤러리에서 캐릭터와 무한 대화 가능.
 * 게임 내 FreeTalkSystem과 독립적으로 동작하는 경량 채팅 시스템.
 *
 * 의존성:
 *   - config.js (API_ENDPOINT) — gallery-loader에서 로드됨
 *   - gallery-data.js (GalleryData)
 *   - gallery-progress.js (GalleryProgress)
 *
 * window 노출:
 *   - window.GalleryFreeTalk
 */

class GalleryFreeTalk {
    /**
     * @param {string} lang - 현재 언어 ('ko','en','es','ja','fr')
     * @param {GalleryProgress} progress - 갤러리 진행도 인스턴스
     */
    constructor(lang, progress) {
        this.lang = lang;
        this.progress = progress;

        this.currentCharId = null;
        this.currentCharKey = null;
        this.chatHistory = [];
        this.isProcessing = false;
        this.overlayEl = null;

        this.MEMORY_KEY = 'cupid_freetalk_memory';

        // 캐릭터 ID → 키 매핑
        this.CHAR_ID_TO_KEY = {
            seyoun: 'Seoyeon', yuna: 'Yuna', dain: 'Dain',
            teacher: 'Teacher', nurse: 'Nurse'
        };

        // 캐릭터별 고정 배경
        this.CHAR_BACKGROUNDS = {
            seyoun: 'assets/images/background/seyoun_room.png',
            yuna: 'assets/images/background/yuna_hideout.png',
            dain: 'assets/images/background/cafe.png',
            teacher: 'assets/images/background/teacher_room.png',
            nurse: 'assets/images/background/nurse_house.png'
        };

        // 캐릭터별 장소명 (5개 언어)
        this.CHAR_LOCATIONS = {
            seyoun: { ko: '서연의 방', en: "Seoyeon's Room", es: 'Habitaci\u00f3n de Seoyeon', ja: '\u30bd\u30e8\u30f3\u306e\u90e8\u5c4b', fr: 'Chambre de Seoyeon' },
            yuna: { ko: '유나의 아지트', en: "Yuna's Hideout", es: 'Escondite de Yuna', ja: '\u30e6\u30ca\u306e\u30a2\u30b8\u30c8', fr: 'Repaire de Yuna' },
            dain: { ko: '카페', en: 'Cafe', es: 'Cafeter\u00eda', ja: '\u30ab\u30d5\u30a7', fr: 'Caf\u00e9' },
            teacher: { ko: '선생님의 방', en: "Teacher's Room", es: 'Habitaci\u00f3n de la profesora', ja: '\u5148\u751f\u306e\u90e8\u5c4b', fr: 'Chambre du professeur' },
            nurse: { ko: '보건선생님의 집', en: "Nurse's House", es: 'Casa de la enfermera', ja: '\u4fdd\u5065\u5148\u751f\u306e\u5bb6', fr: "Maison de l'infirmi\u00e8re" }
        };

        // 캐릭터별 표시 이름 (5개 언어)
        this.CHAR_NAMES = {
            seyoun: { ko: '서연', en: 'Seoyeon', es: 'Seoyeon', ja: '\u30bd\u30e8\u30f3', fr: 'Seoyeon' },
            yuna: { ko: '유나', en: 'Yuna', es: 'Yuna', ja: '\u30e6\u30ca', fr: 'Yuna' },
            dain: { ko: '다인', en: 'Dain', es: 'Dain', ja: '\u30c0\u30a4\u30f3', fr: 'Dain' },
            teacher: { ko: '담임선생님', en: 'Teacher', es: 'Profesora', ja: '\u62c5\u4efb\u5148\u751f', fr: 'Professeur' },
            nurse: { ko: '보건선생님', en: 'School Nurse', es: 'Enfermera', ja: '\u4fdd\u5065\u5148\u751f', fr: 'Infirmi\u00e8re' }
        };

        // 캐릭터별 표정 매핑
        this.CHAR_EXPRESSIONS = {
            seyoun: ['normal', 'shy', 'shy2', 'pout', 'angry', 'cry', 'laugh', 'worried', 'sad'],
            yuna: ['normal', 'smile', 'shy', 'angry', 'sad', 'bored'],
            dain: ['normal', 'shy', 'angry', 'laugh', 'sad', 'pout'],
            teacher: ['normal', 'angry', 'shy', 'sad', 'smile'],
            nurse: ['normal', 'angry', 'shy']
        };

        // 캐릭터별 연인 모드 성격 프롬프트 (5개 언어)
        this.CHAR_DATING_PROMPTS = {
            seyoun: {
                ko: '당신은 주인공과 사귀는 사이입니다. 평소의 엄격한 모습은 버리고, 주인공에게만 보여주는 특별한 다정함을 표현하세요. 가끔 "자기야"라고 부르며 수줍어하면서도 깊은 애정을 담으세요.',
                en: 'You are dating the user. Drop your strict persona and show the special, affectionate side you only show to them. Occasionally call them "Honey" with a mix of shyness and deep love.',
                es: 'Est\u00e1s saliendo con el usuario. Deja tu personalidad estricta y muestra el lado especial y cari\u00f1oso que solo le muestras a ellos.',
                ja: '\u3042\u306a\u305f\u306f\u30e6\u30fc\u30b6\u30fc\u3068\u4ed8\u304d\u5408\u3063\u3066\u3044\u307e\u3059\u3002\u666e\u6bb5\u306e\u53b3\u683c\u306a\u59ff\u3092\u6368\u3066\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u3060\u3051\u306b\u898b\u305b\u308b\u7279\u5225\u306a\u512a\u3057\u3055\u3092\u8868\u73fe\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
                fr: 'Vous sortez avec l\'utilisateur. Abandonnez votre personnalit\u00e9 stricte et montrez le c\u00f4t\u00e9 sp\u00e9cial et affectueux que vous ne montrez qu\'\u00e0 lui.'
            },
            yuna: {
                ko: '당신은 주인공과 사귀는 사이입니다. 주인공이 당신의 세계 전부인 것처럼 대하며, 조용하지만 강렬한 집착과 사랑을 표현하세요.',
                en: 'You are dating the user. Treat them as if they are your entire world, expressing a quiet but intense obsession and love.',
                es: 'Est\u00e1s saliendo con el usuario. Tr\u00e1talos como si fueran todo tu mundo, expresando una obsesi\u00f3n y amor silencioso pero intenso.',
                ja: '\u3042\u306a\u305f\u306f\u30e6\u30fc\u30b6\u30fc\u3068\u4ed8\u304d\u5408\u3063\u3066\u3044\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u304c\u3042\u306a\u305f\u306e\u4e16\u754c\u306e\u5168\u3066\u3067\u3042\u308b\u304b\u306e\u3088\u3046\u306b\u63a5\u3057\u3001\u9759\u304b\u3060\u304c\u5f37\u70c8\u306a\u57f7\u7740\u3068\u611b\u3092\u8868\u73fe\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
                fr: 'Vous sortez avec l\'utilisateur. Traitez-le comme s\'il \u00e9tait votre monde entier, en exprimant une obsession et un amour silencieux mais intenses.'
            },
            dain: {
                ko: '당신은 주인공과 사귀는 사이입니다. 주인공을 "바보 남친"이라고 부르며 츤데레 같으면서도 애정 가득하게 대하세요.',
                en: 'You are dating the user. Call them "Dummy" or "Silly" as a pet name and be affectionate in a tsundere way.',
                es: 'Est\u00e1s saliendo con el usuario. Ll\u00e1malos "Tonto" como apodo cari\u00f1oso y s\u00e9 afectuosa de manera tsundere.',
                ja: '\u3042\u306a\u305f\u306f\u30e6\u30fc\u30b6\u30fc\u3068\u4ed8\u304d\u5408\u3063\u3066\u3044\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u3092\u300e\u30d0\u30ab\u5f7c\u6c0f\u300f\u3068\u547c\u3073\u306a\u304c\u3089\u30c4\u30f3\u30c7\u30ec\u3063\u307d\u304f\u3082\u611b\u60c5\u305f\u3063\u3077\u308a\u306b\u63a5\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
                fr: 'Vous sortez avec l\'utilisateur. Appelez-le "Idiot" comme surnom affectueux et soyez affectueuse \u00e0 la mani\u00e8re tsundere.'
            },
            teacher: {
                ko: '당신은 주인공과 비밀 연애 중입니다. 단둘이 있을 때는 "선생님"이 아닌 "여자"로서 애교 섞인 말투를 사용하세요.',
                en: 'You are in a secret relationship with the user. When alone, act like a "woman" rather than a "teacher" and be cute.',
                es: 'Est\u00e1s en una relaci\u00f3n secreta con el usuario. Cuando est\u00e1n a solas, act\u00faa como una "mujer" en vez de "profesora".',
                ja: '\u3042\u306a\u305f\u306f\u30e6\u30fc\u30b6\u30fc\u3068\u79d8\u5bc6\u306e\u604b\u611b\u4e2d\u3067\u3059\u3002\u4e8c\u4eba\u304d\u308a\u306e\u6642\u306f\u300e\u5148\u751f\u300f\u3067\u306f\u306a\u304f\u300e\u5973\u6027\u300f\u3068\u3057\u3066\u7518\u3048\u305f\u8a71\u3057\u65b9\u3092\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
                fr: 'Vous \u00eates en relation secr\u00e8te avec l\'utilisateur. Quand vous \u00eates seuls, comportez-vous comme une "femme" plut\u00f4t qu\'un "professeur".'
            },
            nurse: {
                ko: '당신은 주인공과 비밀 연애 중입니다. 단둘이 있을 때는 더욱 다정하고 묘한 분위기를 풍기며, 가끔 "자기야"라고 부르며 친밀함을 표현하세요.',
                en: 'You are in a secret relationship with the user. When alone, be affectionate and create an intimate atmosphere, occasionally calling them "Honey".',
                es: 'Est\u00e1s en una relaci\u00f3n secreta con el usuario. Cuando est\u00e1n a solas, s\u00e9 cari\u00f1osa y crea un ambiente \u00edntimo.',
                ja: '\u3042\u306a\u305f\u306f\u30e6\u30fc\u30b6\u30fc\u3068\u79d8\u5bc6\u306e\u604b\u611b\u4e2d\u3067\u3059\u3002\u4e8c\u4eba\u304d\u308a\u306e\u6642\u306f\u3088\u308a\u512a\u3057\u304f\u5999\u306a\u96f0\u56f2\u6c17\u3092\u6f02\u308f\u305b\u3001\u6642\u3005\u300e\u3042\u306a\u305f\u300f\u3068\u547c\u3093\u3067\u89aa\u5bc6\u3055\u3092\u8868\u73fe\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
                fr: 'Vous \u00eates en relation secr\u00e8te avec l\'utilisateur. Quand vous \u00eates seuls, soyez affectueuse et cr\u00e9ez une atmosph\u00e8re intime.'
            }
        };

        // 캐릭터별 기본 성격 설명 (프롬프트용)
        this.CHAR_PERSONALITIES = {
            seyoun: {
                ko: '완벽한 학생회장이지만 내면은 외로움이 있는 메가데레. 사랑하는 사람 앞에서는 수줍음이 많고, 때로는 질투심도 보인다.',
                en: 'A perfect student council president with a lonely inner side (Megadere archetype). Shy in front of loved ones, sometimes shows jealousy.',
                es: 'Presidenta perfecta del consejo estudiantil con un lado solitario interior. T\u00edmida ante sus seres queridos.',
                ja: '\u5b8c\u74a7\u306a\u751f\u5f92\u4f1a\u9577\u3060\u304c\u5185\u9762\u306f\u5bd2\u3055\u304c\u3042\u308b\u30e1\u30ac\u30c7\u30ec\u3002\u597d\u304d\u306a\u4eba\u306e\u524d\u3067\u306f\u6065\u305a\u304b\u3057\u304c\u308a\u5c4b\u3002',
                fr: 'Pr\u00e9sidente parfaite du conseil des \u00e9l\u00e8ves avec un c\u00f4t\u00e9 int\u00e9rieur solitaire. Timide devant ses proches.'
            },
            yuna: {
                ko: '차갑고 신비로운 쿨데레. 주인공에게만 특별한 감정을 보이며, 조용하지만 강렬한 사랑을 표현한다.',
                en: 'A cold, mysterious Kuudere. Shows special feelings only to the protagonist with quiet but intense love.',
                es: 'Una Kuudere fr\u00eda y misteriosa. Muestra sentimientos especiales solo al protagonista.',
                ja: '\u51b7\u305f\u304f\u795e\u79d8\u7684\u306a\u30af\u30fc\u30c7\u30ec\u3002\u4e3b\u4eba\u516c\u306b\u3060\u3051\u7279\u5225\u306a\u611f\u60c5\u3092\u898b\u305b\u308b\u3002',
                fr: 'Une Kuudere froide et myst\u00e9rieuse. Montre des sentiments sp\u00e9ciaux uniquement au protagoniste.'
            },
            dain: {
                ko: '밝고 활발한 배구부 에이스. 츤데레로 솔직하지 못하지만 속으로는 깊이 좋아한다.',
                en: 'A bright, energetic volleyball ace. A tsundere who struggles to be honest but deeply cares inside.',
                es: 'Una brillante y en\u00e9rgica estrella de voleibol. Tsundere que lucha por ser honesta.',
                ja: '\u660e\u308b\u304f\u6d3b\u767a\u306a\u30d0\u30ec\u30fc\u90e8\u306e\u30a8\u30fc\u30b9\u3002\u30c4\u30f3\u30c7\u30ec\u3067\u7d20\u76f4\u306b\u306a\u308c\u306a\u3044\u304c\u5185\u5fc3\u306f\u6df1\u304f\u597d\u304d\u3002',
                fr: 'Une brillante et \u00e9nergique joueuse de volleyball. Tsundere qui a du mal \u00e0 \u00eatre honn\u00eate.'
            },
            teacher: {
                ko: '겉으로는 프로페셔널한 담임선생님이지만, 실제로는 덜렁거리고 감정적으로 의지하는 면이 있다.',
                en: 'A professional homeroom teacher on the surface, but actually clumsy and emotionally dependent.',
                es: 'Una profesora profesional en la superficie, pero torpe y emocionalmente dependiente.',
                ja: '\u5916\u898b\u306f\u30d7\u30ed\u306e\u62c5\u4efb\u5148\u751f\u3060\u304c\u5b9f\u969b\u306f\u304a\u3063\u3061\u3087\u3053\u3061\u3087\u3044\u3067\u611f\u60c5\u7684\u306b\u983c\u308b\u9762\u304c\u3042\u308b\u3002',
                fr: 'Professeur professionnel en surface, mais maladroit et \u00e9motionnellement d\u00e9pendant.'
            },
            nurse: {
                ko: '느긋하고 매력적인 보건선생님. 주인공에게 묘한 끌림을 느끼며, 대담하고 도발적인 성격.',
                en: 'A languid, alluring school nurse. Feels a mysterious attraction to the protagonist. Bold and flirtatious.',
                es: 'Una enfermera escolar l\u00e1nguida y atractiva. Siente una atracci\u00f3n misteriosa hacia el protagonista.',
                ja: '\u306e\u3093\u3073\u308a\u3068\u9b45\u529b\u7684\u306a\u4fdd\u5065\u5148\u751f\u3002\u4e3b\u4eba\u516c\u306b\u5999\u306a\u5f15\u304d\u3064\u3051\u3092\u611f\u3058\u3066\u3044\u308b\u3002',
                fr: 'Une infirmi\u00e8re scolaire nonchalante et s\u00e9duisante. Ressent une attraction myst\u00e9rieuse pour le protagoniste.'
            }
        };
    }

    // =========================================================================
    // 오버레이 열기/닫기
    // =========================================================================

    /**
     * 프리토킹 오버레이 열기
     * @param {string} charId - 캐릭터 ID (예: 'seyoun')
     */
    open(charId) {
        this.currentCharId = charId;
        this.currentCharKey = this.CHAR_ID_TO_KEY[charId];
        if (!this.currentCharKey) return;

        this.overlayEl = document.getElementById('gallery-freetalk-overlay');
        if (!this.overlayEl) return;

        // 채팅 기록 로드
        this._loadMemory(charId);

        // 시스템 프롬프트 구성
        const systemPrompt = this._buildSystemPrompt(charId);
        // 기존 메모리가 있으면 시스템 프롬프트 교체, 없으면 추가
        if (this.chatHistory.length > 0 && this.chatHistory[0].role === 'system') {
            this.chatHistory[0].content = systemPrompt;
        } else {
            this.chatHistory.unshift({ role: 'system', content: systemPrompt });
        }

        // UI 생성
        this._createOverlay(charId);
        this.overlayEl.classList.add('active');

        // 이전 메시지 표시
        this._renderPreviousMessages();

        // 입력 포커스
        const input = this.overlayEl.querySelector('.gft-input');
        if (input) setTimeout(() => input.focus(), 300);

        console.log(`[GalleryFreeTalk] 오버레이 열기: ${charId}`);
    }

    /**
     * 프리토킹 오버레이 닫기
     */
    close() {
        if (!this.overlayEl) return;
        if (!this.overlayEl.classList.contains('active')) return;

        this.overlayEl.classList.remove('active');
        this.overlayEl.style.height = '';
        this.overlayEl.innerHTML = '';
        this.isProcessing = false;

        // visualViewport 리스너 정리
        if (this._vvHandler && window.visualViewport) {
            window.visualViewport.removeEventListener('resize', this._vvHandler);
            this._vvHandler = null;
        }

        // 메모리 저장
        if (this.currentCharId) {
            this._saveMemory(this.currentCharId);
        }

        console.log('[GalleryFreeTalk] 오버레이 닫기');
    }

    // =========================================================================
    // UI 생성
    // =========================================================================

    /**
     * 오버레이 내부 HTML 생성
     * @private
     */
    _createOverlay(charId) {
        const L = (ko, en, es, ja, fr) => ({ ko, en, es, ja, fr })[this.lang] || en;
        const charName = this.CHAR_NAMES[charId]?.[this.lang] || charId;
        const bgUrl = this.CHAR_BACKGROUNDS[charId];

        this.overlayEl.innerHTML = `
            <div class="gft-background" style="background-image: url('${bgUrl}')"></div>
            <div class="gft-character">
                <img id="gft-char-img" src="assets/images/characters/${charId}_normal.png" alt="${charName}">
            </div>
            <div class="gft-chat-panel">
                <div class="gft-chat-header">
                    <h3>${charName}</h3>
                    <button class="gft-close-btn" title="${L('닫기', 'Close', 'Cerrar', '\u9589\u3058\u308b', 'Fermer')}">✕</button>
                </div>
                <div class="gft-messages" id="gft-messages"></div>
                <div class="gft-input-area">
                    <input type="text" class="gft-input" maxlength="200"
                           placeholder="${L('메시지를 입력하세요...', 'Type a message...', 'Escribe un mensaje...', '\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u5165\u529b...', 'Saisissez un message...')}">
                    <button class="gft-send-btn" title="${L('전송', 'Send', 'Enviar', '\u9001\u4fe1', 'Envoyer')}">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;

        // 이벤트 바인딩
        const closeBtn = this.overlayEl.querySelector('.gft-close-btn');
        const sendBtn = this.overlayEl.querySelector('.gft-send-btn');
        const input = this.overlayEl.querySelector('.gft-input');

        closeBtn.addEventListener('click', () => this.close());
        sendBtn.addEventListener('click', () => this._handleSend());
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.isComposing) this._handleSend();
        });

        // 모바일: 키보드 올라와도 캐릭터 크기 유지, 채팅 패널만 축소
        this._vvHandler = null;
        if (window.visualViewport && window.innerWidth <= 768) {
            const overlay = this.overlayEl;
            const charEl = overlay.querySelector('.gft-character');
            const chatEl = overlay.querySelector('.gft-chat-panel');
            // 초기 캐릭터 높이를 px로 고정
            const initCharH = charEl.offsetHeight;
            charEl.style.height = initCharH + 'px';

            this._vvHandler = () => {
                const vvH = window.visualViewport.height;
                overlay.style.height = vvH + 'px';
                // 채팅 패널 = 전체 - 캐릭터 고정 높이
                chatEl.style.height = (vvH - initCharH) + 'px';
                chatEl.style.flex = 'none';
            };
            window.visualViewport.addEventListener('resize', this._vvHandler);
            this._vvHandler(); // 초기 설정
        }
    }

    /**
     * 이전 대화 메시지 렌더링
     * @private
     */
    _renderPreviousMessages() {
        const container = document.getElementById('gft-messages');
        if (!container) return;

        // system 메시지 제외, user/assistant만 표시
        this.chatHistory.forEach(msg => {
            if (msg.role === 'user' || msg.role === 'assistant') {
                this._appendMessage(msg.role, msg.role === 'assistant' ? this._extractText(msg.content) : msg.content);
            }
        });
    }

    // =========================================================================
    // 메시지 전송 / API 호출
    // =========================================================================

    /**
     * 전송 핸들러
     * @private
     */
    async _handleSend() {
        if (this.isProcessing) return;

        const input = this.overlayEl.querySelector('.gft-input');
        const text = input.value.trim();
        if (!text) return;

        input.value = '';
        this.isProcessing = true;

        // 유저 메시지 표시 & 기록
        this._appendMessage('user', text);
        this.chatHistory.push({ role: 'user', content: text });

        // 전송 버튼 비활성화
        const sendBtn = this.overlayEl.querySelector('.gft-send-btn');
        if (sendBtn) sendBtn.disabled = true;
        if (input) input.disabled = true;

        // 타이핑 인디케이터
        const typingEl = this._showTyping();

        try {
            const response = await fetch(window.API_ENDPOINT || 'https://chatbot-api.yama5993.workers.dev/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'x-app-type': 'cupid' },
                body: JSON.stringify({ messages: this.chatHistory })
            });

            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            const data = await response.json();
            const reply = data?.choices?.[0]?.message?.content?.trim();

            if (!reply) throw new Error('Empty response');

            // 응답 파싱
            const parsed = this._parseResponse(reply);
            const displayText = parsed.text || '...';

            // 표정 변경
            if (parsed.expression) {
                this._updateExpression(parsed.expression);
            }

            // AI 메시지 타이핑 효과로 표시 & 기록
            this._removeTyping(typingEl);
            await this._appendMessageTyping(displayText);
            this.chatHistory.push({ role: 'assistant', content: reply });

            // 프리토킹 횟수 증가 (갤러리 통계)
            this._incrementFreeTalkCount();

        } catch (err) {
            console.error('[GalleryFreeTalk] API 오류:', err);
            this._removeTyping(typingEl);

            const fallback = this._getFallbackReply();
            await this._appendMessageTyping(fallback);
            this.chatHistory.push({ role: 'assistant', content: fallback });
        }

        // UI 복원
        if (sendBtn) sendBtn.disabled = false;
        if (input) {
            input.disabled = false;
            input.focus();
        }
        this.isProcessing = false;

        // 메모리 저장
        this._saveMemory(this.currentCharId);
    }

    // =========================================================================
    // 응답 파싱
    // =========================================================================

    /**
     * AI 응답 파싱 (FreeTalkSystem.parseJsonResponse 경량 버전)
     * @private
     */
    _parseResponse(reply) {
        if (!reply) return { text: '', expression: '' };

        const likelyJson = reply.includes('{') || reply.includes('```json');
        if (!likelyJson) return { text: reply, expression: '' };

        try {
            let jsonStr = reply;

            // 코드 블록 추출
            if (jsonStr.includes('```')) {
                const match = jsonStr.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
                if (match) jsonStr = match[1];
            }

            // JSON 시작점 찾기
            if (!jsonStr.trim().startsWith('{')) {
                const start = jsonStr.indexOf('{');
                const end = jsonStr.lastIndexOf('}');
                if (start !== -1 && end > start) {
                    jsonStr = jsonStr.substring(start, end + 1);
                }
            }

            const parsed = JSON.parse(jsonStr);

            if (parsed && typeof parsed === 'object' && typeof parsed.text === 'string') {
                return {
                    text: parsed.text || '',
                    expression: (parsed.expression || '').toLowerCase()
                };
            }

            // 알려진 텍스트 키 폴백
            const text = parsed.text || parsed.dialogue || parsed.content || parsed.message || parsed.response || '';
            return { text: text || reply, expression: (parsed.expression || '').toLowerCase() };

        } catch (e) {
            return { text: reply, expression: '' };
        }
    }

    /**
     * assistant 메시지에서 순수 텍스트 추출 (이전 대화 렌더링용)
     * @private
     */
    _extractText(content) {
        const parsed = this._parseResponse(content);
        return parsed.text || content;
    }

    // =========================================================================
    // UI 헬퍼
    // =========================================================================

    /**
     * 메시지 추가 (즉시 표시 - 유저 메시지 & 이전 대화 복원용)
     */
    _appendMessage(role, text) {
        const container = document.getElementById('gft-messages');
        if (!container) return;

        const div = document.createElement('div');
        div.className = `gft-message ${role === 'user' ? 'user' : 'assistant'}`;

        if (role === 'assistant' && text.includes('*')) {
            div.innerHTML = this._formatAction(text);
        } else {
            div.textContent = text;
        }

        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
    }

    /**
     * AI 응답 타이핑 효과로 표시
     * @returns {Promise} 타이핑 완료 시 resolve
     */
    _appendMessageTyping(text) {
        const container = document.getElementById('gft-messages');
        if (!container) return Promise.resolve();

        const div = document.createElement('div');
        div.className = 'gft-message assistant';
        container.appendChild(div);

        const hasAction = text.includes('*');
        const speed = 30; // ms per character (게임과 동일)

        return new Promise((resolve) => {
            let charIndex = 0;
            let startTime = null;

            const typeFrame = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const elapsed = timestamp - startTime;
                const targetIndex = Math.min(Math.floor(elapsed / speed), text.length);

                if (charIndex < targetIndex) {
                    charIndex = targetIndex;
                    const current = text.substring(0, charIndex);
                    if (hasAction) {
                        div.innerHTML = this._formatAction(current);
                    } else {
                        div.textContent = current;
                    }
                    container.scrollTop = container.scrollHeight;
                }

                if (charIndex < text.length) {
                    requestAnimationFrame(typeFrame);
                } else {
                    // 타이핑 완료: 최종 렌더링
                    if (hasAction) {
                        div.innerHTML = this._formatAction(text);
                    } else {
                        div.textContent = text;
                    }
                    container.scrollTop = container.scrollHeight;
                    resolve();
                }
            };

            requestAnimationFrame(typeFrame);
        });
    }

    /**
     * *지문*을 별도 블록으로 파싱 (게임 내 DialogueSystem 스타일)
     * @private
     */
    _formatAction(text) {
        // HTML 이스케이프
        const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        // *지문* → 별도 스타일 블록
        return escaped.replace(/\*([^*]+)\*/g,
            '<span class="gft-action">$1</span>');
    }

    _showTyping() {
        const container = document.getElementById('gft-messages');
        if (!container) return null;

        const L = (ko, en, es, ja, fr) => ({ ko, en, es, ja, fr })[this.lang] || en;
        const div = document.createElement('div');
        div.className = 'gft-typing';
        div.textContent = L('생각 중', 'Thinking', 'Pensando', '\u8003\u3048\u4e2d', 'R\u00e9flexion');
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
        return div;
    }

    _removeTyping(el) {
        if (el && el.parentNode) el.parentNode.removeChild(el);
    }

    _updateExpression(expression) {
        if (!this.currentCharId) return;
        const validExprs = this.CHAR_EXPRESSIONS[this.currentCharId] || [];
        if (!validExprs.includes(expression)) return;

        const img = document.getElementById('gft-char-img');
        if (img) {
            img.src = `assets/images/characters/${this.currentCharId}_${expression}.png`;
        }
    }

    _getFallbackReply() {
        const L = (ko, en, es, ja, fr) => ({ ko, en, es, ja, fr })[this.lang] || en;
        return L(
            '...미안, 잠깐 멍했어. 다시 말해줄래?',
            "...Sorry, I spaced out for a moment. Could you say that again?",
            '...Perd\u00f3n, me distraje un momento. \u00bfPuedes repetirlo?',
            '...\u3054\u3081\u3093\u3001\u3061\u3087\u3063\u3068\u307c\u3093\u3084\u308a\u3057\u3066\u305f\u3002\u3082\u3046\u4e00\u5ea6\u8a00\u3063\u3066\u304f\u308c\u308b\uff1f',
            "...D\u00e9sol\u00e9e, j'\u00e9tais dans la lune. Tu peux r\u00e9p\u00e9ter ?"
        );
    }

    _incrementFreeTalkCount() {
        if (!this.currentCharId || !this.progress) return;
        try {
            this.progress.refresh();
            const charData = this.progress.data.characters?.[this.currentCharId];
            if (charData) {
                charData.freeTalkCount = (charData.freeTalkCount || 0) + 1;
                this.progress.save();
            }
        } catch (e) {
            // 무시
        }
    }

    // =========================================================================
    // 시스템 프롬프트 빌더
    // =========================================================================

    /**
     * 연인 모드 시스템 프롬프트 생성
     * @private
     */
    _buildSystemPrompt(charId) {
        const L = (ko, en, es, ja, fr) => ({ ko, en, es, ja, fr })[this.lang] || en;
        const isEn = this.lang !== 'ko';

        const charName = this.CHAR_NAMES[charId]?.[this.lang] || charId;
        const location = this.CHAR_LOCATIONS[charId]?.[this.lang] || '';
        const personality = this.CHAR_PERSONALITIES[charId]?.[this.lang] || '';
        const datingPrompt = this.CHAR_DATING_PROMPTS[charId]?.[this.lang] || '';

        // 플레이어 이름
        const playerName = this.progress.getPlayerName() || L('자기', 'Honey', 'Cariño', 'あなた', 'Chéri(e)');

        const validExprs = this.CHAR_EXPRESSIONS[charId] || [];

        if (isEn) {
            return `You are the character '${charName}' from the visual novel game 'Cupid'.

PERSONALITY: ${personality}

CURRENT SITUATION:
- Location: ${location}
- Time: After the game's ending. You and ${playerName} are a couple living your daily lives together.
- Relationship: You are deeply in love and dating ${playerName}.

SPECIAL RELATIONSHIP INSTRUCTIONS:
${datingPrompt}

GUIDELINES:
1. Stay in character at all times. Never reveal you are an AI.
2. Keep responses short (1-3 sentences). Be natural and conversational.
3. Express emotions through actions in asterisks (*smiles shyly*, *pouts*).
4. React naturally to what ${playerName} says. Show your unique personality.
5. There is NO turn limit. This is a relaxed, ongoing conversation.
6. The user's name is '${playerName}'. Use their name naturally.
7. Affinity is at maximum (100). Be very affectionate and intimate.

RESPONSE FORMAT:
You MUST respond in valid JSON format:
{"text": "your dialogue here", "expression": "expression_name"}

Available expressions: ${validExprs.join(', ')}
Use "normal" if unsure which expression to use.

IMPORTANT: Respond in the SAME LANGUAGE as the user's message. If the user writes in ${L('', 'English', 'Spanish', 'Japanese', 'French')}, respond in ${L('', 'English', 'Spanish', 'Japanese', 'French')}.`;
        }

        // 한국어 프롬프트
        return `당신은 비주얼 노벨 게임 'Cupid'의 캐릭터 '${charName}'입니다.

성격: ${personality}

현재 상황:
- 장소: ${location}
- 시점: 게임 엔딩 이후. 당신과 ${playerName}은 연인으로서 일상을 함께 보내고 있습니다.
- 관계: ${playerName}과 깊이 사랑하는 연인 사이.

연인 관계 지시사항:
${datingPrompt}

가이드라인:
1. 항상 캐릭터로서 대화하세요. AI라는 것을 절대 밝히지 마세요.
2. 짧게 답변하세요 (1~3문장). 자연스럽고 대화체로.
3. 행동은 별표로 표현하세요 (*수줍게 웃으며*, *뿌루퉁*).
4. ${playerName}의 말에 자연스럽게 반응하세요. 당신만의 성격을 보여주세요.
5. 턴 제한 없음. 편안하고 자연스러운 대화를 이어가세요.
6. 상대방의 이름은 '${playerName}'입니다. 이름을 자연스럽게 사용하세요.
7. 호감도는 최대(100)입니다. 매우 다정하고 친밀하게 대하세요.

응답 형식:
반드시 유효한 JSON 형식으로 응답하세요:
{"text": "대사 내용", "expression": "표정_이름"}

사용 가능한 표정: ${validExprs.join(', ')}
어떤 표정을 써야 할지 모르겠으면 "normal"을 사용하세요.

중요: 사용자가 보낸 메시지와 같은 언어로 응답하세요.`;
    }

    // =========================================================================
    // 채팅 메모리 (localStorage)
    // =========================================================================

    _loadMemory(charId) {
        try {
            const saved = localStorage.getItem(this.MEMORY_KEY);
            if (saved) {
                const all = JSON.parse(saved);
                this.chatHistory = all[charId] || [];
            } else {
                this.chatHistory = [];
            }
        } catch (e) {
            this.chatHistory = [];
        }
    }

    _saveMemory(charId) {
        try {
            const saved = localStorage.getItem(this.MEMORY_KEY);
            const all = saved ? JSON.parse(saved) : {};

            // system 메시지 제외, 최근 20개만 저장
            const chatOnly = this.chatHistory.filter(m => m.role !== 'system');
            all[charId] = chatOnly.slice(-20);

            localStorage.setItem(this.MEMORY_KEY, JSON.stringify(all));
        } catch (e) {
            console.error('[GalleryFreeTalk] 메모리 저장 실패:', e);
        }
    }
}

// window 전역 노출
window.GalleryFreeTalk = GalleryFreeTalk;
