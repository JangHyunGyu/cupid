// ============================================================
// UIManager.js
// ============================================================
// 📌 파일 목적:
//   UI(사용자 인터페이스) 관리 모듈.
//   대화창, 선택지 버튼, 이름 태그, 호감도 게이지, 설정 모달 등
//   화면에 보이는 모든 DOM 요소에 대한 접근과 조작을 담당합니다.
//
// 📦 의존성:
//   - config.js → CHAR_NAME_MAP (캐릭터 표시 이름 → 내부 키 매핑)
//   - sound.js  → soundManager  (효과음·BGM 볼륨 제어)
//
// 🌐 window 노출:
//   window.UIManager = UIManager;
// ============================================================

// ============================================================================================
// 🎨 UIManager 클래스 - UI(사용자 인터페이스) 관리자
// ============================================================================================
// 📌 화면에 보이는 모든 것을 관리합니다.
//    대화창, 선택지 버튼, 이름 태그, 호감도 게이지, 설정 모달 등
//    DOM 요소에 대한 접근과 조작을 담당합니다.

/**
 * UI 관리 클래스
 *
 * ▶ 역할:
 *   - HTML의 DOM 요소들을 JavaScript에서 쉽게 접근할 수 있게 캐싱
 *   - 이름 태그에 캐릭터 이름과 호감도 게이지 표시
 *   - 모달(팝업) 창 표시 및 사용자 입력 처리
 *   - 설정 창 열기/닫기, 설정 저장
 *
 * ▶ DOM 요소 캐싱이란?
 *   document.getElementById()는 호출할 때마다 DOM을 검색합니다.
 *   자주 사용하는 요소는 변수에 저장해두면 성능이 향상됩니다.
 */
class UIManager {
    /**
     * @param {StateManager} stateManager - 게임 상태 관리자
     * @param {GalleryManager} galleryManager - 갤러리 관리자
     */
    constructor(stateManager, galleryManager) {
        this.stateManager = stateManager;
        this.galleryManager = galleryManager;

        // ====== DOM 요소 캐싱 (자주 사용하는 요소들) ======

        // 📜 대화 관련
        this.messageEl = document.getElementById('message');           // 대사 텍스트가 표시되는 영역
        this.nameTagEl = document.getElementById('name-tag');         // 캐릭터 이름 + 호감도 게이지
        this.dialogueBox = document.getElementById('dialogue-box');   // 대화창 전체 박스
        this.choiceContainer = document.getElementById('choice-container');  // 선택지 버튼들의 컨테이너
        this.uiLayer = document.getElementById('ui-layer');

        // 💬 채팅(프리토킹) 관련
        this.chatContainer = document.getElementById('chat-container');  // 채팅 UI 전체
        this.chatInput = document.getElementById('chat-input');          // 채팅 입력 필드
        this.chatSendBtn = document.getElementById('chat-send');         // 전송 버튼
        this.chatSkipBtn = document.getElementById('chat-skip-btn');     // 스킵 버튼
        this.turnCountEl = document.getElementById('turn-count');        // 남은 턴 수 표시

        // ✱ 행동 묘사(*) 토글 버튼
        this.actionToggleBtn = document.getElementById('action-toggle-btn');
        this._actionMode = false;

        // 🖼️ 이미지 업로드 관련
        this.imageUploadBtn = document.getElementById('upload-image-btn');
        this.imageUploadInput = document.getElementById('upload-image-input');
        this.imagePreviewContainer = document.getElementById('image-preview-container');
        this.imagePreview = document.getElementById('image-preview');
        this.removeImageBtn = document.getElementById('remove-image-btn');
        this.stagedImage = null; // 현재 업로드 준비된 이미지 (Base64)
        this._imageUploadVersion = 0;

        // ✏️ 이름 입력 관련
        this.nameInputContainer = document.getElementById('name-input-container');
        this.playerNameInput = document.getElementById('player-name-input');
        this.nameConfirmBtn = document.getElementById('name-confirm-btn');

        // 🖼️ 배경/효과 관련
        this.bgLayer = document.getElementById('background-layer');      // 배경 이미지 레이어
        this.fadeLayer = document.getElementById('fade-layer');          // 페이드 효과 레이어
        this.tbcText = document.getElementById('tbc-text');              // "To Be Continued" 텍스트
        this.nextIndicator = document.getElementById('next-indicator');  // "클릭하세요" 화살표

        // 👤 캐릭터 슬롯 (좌/중앙/우)
        this.charSlots = {
            left: document.getElementById('char-left'),      // 왼쪽 캐릭터
            center: document.getElementById('char-center'),  // 중앙 캐릭터
            right: document.getElementById('char-right')     // 오른쪽 캐릭터
        };

        // 🔔 모달(팝업) 관련
        this.customModal = document.getElementById('custom-modal');
        this.modalMessage = document.getElementById('modal-message');
        this.modalConfirmBtn = document.getElementById('modal-confirm-btn');
        this.modalCancelBtn = document.getElementById('modal-cancel-btn');

        // 캐릭터 표시 이름 → 내부 키 매핑 (공통 상수 참조)
        this.charNameMap = CHAR_NAME_MAP;

        // 설정 관련 이벤트 초기화
        this.bindSettingsEvents();

        // 이미지 업로드 관련 이벤트 초기화
        this.bindImageUploadEvents();

        this.setupMobileKeyboardHandling();
    }

    /**
     * 설정 관련 이벤트 바인딩
     * - 볼륨 슬라이더 조작 시 실시간으로 사운드에 반영
     */
    bindSettingsEvents() {
        // 볼륨 슬라이더 실시간 반영 (input 이벤트는 드래그 중에도 발생)
        window.addEventListener('input', (e) => {
            // BGM 볼륨 조절
            if (e.target.id === 'bgmVolume') {
                const vol = e.target.value / 100;  // 0~100 → 0~1로 변환
                document.getElementById('bgmVolumeVal').textContent = e.target.value + '%';
                if (window.soundManager) soundManager.setBgmVolume(vol);
            }
            // 효과음 볼륨 조절
            else if (e.target.id === 'sfxVolume') {
                const vol = e.target.value / 100;
                document.getElementById('sfxVolumeVal').textContent = e.target.value + '%';
                if (window.soundManager) soundManager.setSfxVolume(vol);
            }
        });
    }

    /**
     * 이미지 업로드 관련 이벤트 바인딩
     */
    bindImageUploadEvents() {
        // 만약 요소가 아직 DOM에 추가되지 않았다면 MutationObserver로 대기
        if (!this.imageUploadBtn || !this.imageUploadInput) {
            const observer = new MutationObserver((mutations, obs) => {
                this.imageUploadBtn = document.getElementById('upload-image-btn');
                this.imageUploadInput = document.getElementById('upload-image-input');
                this.imagePreviewContainer = document.getElementById('image-preview-container');
                this.imagePreview = document.getElementById('image-preview');
                this.removeImageBtn = document.getElementById('remove-image-btn');

                if (this.imageUploadBtn && this.imageUploadInput) {
                    obs.disconnect();
                    // 버튼 아이콘을 카메라 이모지로 맞춤
                    try { this.imageUploadBtn.innerHTML = '<span aria-hidden="true">📸</span>'; } catch (e) {}
                    // 요소가 생겼으면 실제 바인딩 로직을 다시 실행
                    this.bindImageUploadEvents();
                }
            });

            observer.observe(document.body, { childList: true, subtree: true });
            // 폴백: 일정 시간(1.5s) 후에도 요소가 없으면 자동으로 생성하여 바인딩
            setTimeout(() => {
                this.imageUploadBtn = document.getElementById('upload-image-btn');
                this.imageUploadInput = document.getElementById('upload-image-input');
                if (!this.imageUploadBtn || !this.imageUploadInput) {
                    const container = document.getElementById('chat-container') || document.getElementById('chat-input-wrapper');
                    if (container) {
                        // input 생성
                        if (!document.getElementById('upload-image-input')) {
                            const input = document.createElement('input');
                            input.type = 'file';
                            input.id = 'upload-image-input';
                            input.accept = 'image/*';
                            input.style.display = 'none';
                            container.appendChild(input);
                            this.imageUploadInput = input;
                        }
                        // 버튼 생성
                        if (!document.getElementById('upload-image-btn')) {
                            const btn = document.createElement('button');
                            btn.type = 'button';
                            btn.id = 'upload-image-btn';
                            btn.title = { es: 'Subir imagen', ja: '画像をアップロード', en: 'Upload image', fr: 'Ajouter une image', de: 'Bild hochladen', pt: 'Enviar imagem' }[(window.GAME_LANG || document.documentElement.lang)] || '이미지 업로드';
                            btn.innerHTML = '<span aria-hidden="true">📸</span>';
                            container.appendChild(btn);
                            this.imageUploadBtn = btn;
                        }

                        // 미리보기 컨테이너가 없으면 생성 (img + 제거 버튼 포함)
                        if (!document.getElementById('image-preview-container')) {
                            const previewDiv = document.createElement('div');
                            previewDiv.id = 'image-preview-container';
                            previewDiv.style.display = 'none';
                            previewDiv.style.alignItems = 'center';
                            previewDiv.style.justifyContent = 'center';
                            previewDiv.style.flexDirection = 'column';

                            const img = document.createElement('img');
                            img.id = 'image-preview';
                            img.src = '';
                            img.alt = '';
                            previewDiv.appendChild(img);

                            const remBtn = document.createElement('button');
                            remBtn.id = 'remove-image-btn';
                            remBtn.type = 'button';
                            remBtn.title = { es: 'Eliminar imagen', ja: '画像を削除', en: 'Remove image', fr: 'Supprimer l\'image', de: 'Bild entfernen', pt: 'Remover imagem' }[(window.GAME_LANG || document.documentElement.lang)] || '미리보기 제거';
                            remBtn.textContent = '×';
                            previewDiv.appendChild(remBtn);

                            container.appendChild(previewDiv);

                            this.imagePreviewContainer = previewDiv;
                            this.imagePreview = img;
                            this.removeImageBtn = remBtn;
                        }
                    }
                }
            }, 1500);

            return;
        }

        // 업로드 버튼 클릭 시 파일 선택창 열기
        // 버튼이 채팅 입력 래퍼 안에 있는지 확인 — 그렇지 않으면 적절한 위치로 이동
        const chatInputWrapper = document.getElementById('chat-input-wrapper');
        if (chatInputWrapper && this.imageUploadBtn && this.imageUploadBtn.parentElement !== chatInputWrapper) {
            chatInputWrapper.insertBefore(this.imageUploadBtn, chatInputWrapper.firstChild);
        }

        // 버튼 안의 아이콘을 카메라 이모지로 통일
        try { this.imageUploadBtn.innerHTML = '<span aria-hidden="true">📸</span>'; } catch (e) {}

        if (!this.imageUploadBtn.dataset.bound) {
            this.imageUploadBtn.addEventListener('click', () => {
                if (this.chatInput && this.chatInput.disabled) return;
                this.imageUploadInput.click();
            });
            this.imageUploadBtn.dataset.bound = '1';
        }

        // input 역시 채팅 입력 래퍼 안으로 이동
        if (chatInputWrapper && this.imageUploadInput && this.imageUploadInput.parentElement !== chatInputWrapper) {
            chatInputWrapper.appendChild(this.imageUploadInput);
        }

        // 행동 묘사(*) 토글 버튼
        this._bindActionToggle();

        // 파일 선택 시 처리
        this.imageUploadInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) this.handleImageUpload(file);
        });

        // 미리보기 제거 버튼 클릭 시 (dataset.bound로 중복 방지)
        if (this.removeImageBtn && !this.removeImageBtn.dataset.bound) {
            this.removeImageBtn.addEventListener('click', () => {
                this.removeStagedImage();
            });
            this.removeImageBtn.dataset.bound = '1';
        }
    }

    /**
     * 모바일 가상 키보드가 하단 UI를 덮지 않도록 보정합니다.
     */
    setupMobileKeyboardHandling() {
        this.uiLayer = this.uiLayer || document.getElementById('ui-layer');
        if (!this.uiLayer || this._mobileKeyboardBound) return;
        this._mobileKeyboardBound = true;

        this._keyboardViewportHandler = () => this._queueMobileKeyboardUpdate();

        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', this._keyboardViewportHandler);
            window.visualViewport.addEventListener('scroll', this._keyboardViewportHandler);
        }
        window.addEventListener('resize', this._keyboardViewportHandler);
        this._keyboardOrientationHandler = () => this._queueMobileKeyboardUpdate(160);
        window.addEventListener('orientationchange', this._keyboardOrientationHandler);

        [this.chatInput, this.playerNameInput].forEach((input) => {
            if (!input || input.dataset.cupidKeyboardBound) return;
            input.addEventListener('focus', () => this._queueMobileKeyboardUpdate(120));
            input.addEventListener('blur', () => this._queueMobileKeyboardUpdate(120));
            input.dataset.cupidKeyboardBound = '1';
        });

        this._queueMobileKeyboardUpdate();
    }

    _queueMobileKeyboardUpdate(delay = 0) {
        clearTimeout(this._keyboardUpdateTimer);
        this._keyboardUpdateTimer = setTimeout(() => {
            requestAnimationFrame(() => this._updateMobileKeyboardOffset());
        }, delay);
    }

    _updateMobileKeyboardOffset() {
        if (!this.uiLayer) return;

        const focusedElement = document.activeElement;
        const shouldTrack = focusedElement && this.uiLayer.contains(focusedElement);
        const keyboardOffset = shouldTrack && typeof window.getCupidKeyboardOffset === 'function'
            ? window.getCupidKeyboardOffset(focusedElement)
            : 0;

        this.uiLayer.style.setProperty('--keyboard-offset', `${keyboardOffset}px`);
        this.uiLayer.classList.toggle('keyboard-active', keyboardOffset > 0);
        this.uiLayer.style.transform = keyboardOffset > 0
            ? `translate3d(0, -${keyboardOffset}px, 0)`
            : '';
        document.body.classList.toggle('cupid-keyboard-active', keyboardOffset > 0);
    }

    /**
     * 행동 묘사(*) 버튼 바인딩 — **를 삽입하고 커서를 사이에 둠
     */
    resizeChatInput() {
        const input = this.chatInput || document.getElementById('chat-input');
        if (!input) return;
        const maxHeight = this._getTextareaMaxHeight(input, 5);
        input.style.height = 'auto';
        input.style.height = `${Math.min(input.scrollHeight, maxHeight)}px`;
        input.style.overflowY = input.scrollHeight > maxHeight + 1 ? 'auto' : 'hidden';
    }

    _getTextareaMaxHeight(input, maxRows = 5) {
        const style = window.getComputedStyle(input);
        const parsePx = (value) => Number.parseFloat(value) || 0;
        const fontSize = parsePx(style.fontSize) || 16;
        const lineHeight = parsePx(style.lineHeight) || fontSize * 1.4;
        const verticalPadding = parsePx(style.paddingTop) + parsePx(style.paddingBottom);
        const verticalBorder = parsePx(style.borderTopWidth) + parsePx(style.borderBottomWidth);
        return Math.ceil((lineHeight * maxRows) + verticalPadding + verticalBorder);
    }

    _bindActionToggle() {
        const btn = this.actionToggleBtn || document.getElementById('action-toggle-btn');
        const input = this.chatInput;
        if (!btn || !input || btn.dataset.bound) return;
        btn.dataset.bound = '1';

        btn.addEventListener('click', () => {
            const start = input.selectionStart || 0;
            const end = input.selectionEnd || 0;
            const val = input.value;
            input.value = val.substring(0, start) + '**' + val.substring(end);
            const cursor = start + 1;
            input.setSelectionRange(cursor, cursor);
            this.resizeChatInput();
            input.focus();
        });
    }

    /**
     * 이미지 파일을 읽어서 Base64로 변환 및 리사이징
     * @param {File} file - 선택된 파일 객체
     */
    _setImageUploadState(isUploading, previewSrc = null) {
        const lang = window.GAME_LANG || document.documentElement.lang;
        const label = {
            ko: '\uc5c5\ub85c\ub4dc \uc911',
            en: 'Uploading',
            es: 'Subiendo',
            ja: '\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u4e2d',
            fr: 'Téléversement en cours',
            de: 'Wird hochgeladen',
            pt: 'Enviando'
        }[String(lang).toLowerCase().split('-')[0]] || 'Uploading';

        if (previewSrc && this.imagePreview) {
            this.imagePreview.src = previewSrc;
        }

        if (this.imagePreviewContainer) {
            if (previewSrc || isUploading || this.stagedImage) {
                this.imagePreviewContainer.style.display = 'inline-flex';
                this.imagePreviewContainer.style.visibility = 'visible';
            }
            this.imagePreviewContainer.classList.toggle('is-uploading', isUploading);
            this.imagePreviewContainer.setAttribute('data-upload-label', label);
        }

        if (this.imageUploadBtn) {
            this.imageUploadBtn.classList.toggle('is-uploading', isUploading);
            this.imageUploadBtn.setAttribute('aria-busy', isUploading ? 'true' : 'false');
            this.imageUploadBtn.disabled = isUploading;
        }

        if (this.removeImageBtn) {
            this.removeImageBtn.disabled = isUploading;
        }
    }

    handleImageUpload(file) {
        if (!file.type.startsWith('image/')) {
            alert({ es: 'Solo se pueden subir archivos de imagen.', ja: '画像ファイルのみアップロードできます。', en: 'Only image files can be uploaded.', fr: 'Seuls les fichiers image peuvent être ajoutés.', de: 'Nur Bilddateien können hochgeladen werden.', pt: 'Apenas arquivos de imagem podem ser enviados.' }[(window.GAME_LANG || document.documentElement.lang)] || '이미지 파일만 업로드 가능합니다.');
            return;
        }
        if (file.size > 50 * 1024 * 1024) {
            alert({ es: 'La imagen supera el límite de 50 MB.', ja: '画像サイズが50MBを超えています。', en: 'The image exceeds the 50 MB limit.', fr: "L’image dépasse la limite de 50 Mo.", de: 'Das Bild überschreitet das Limit von 50 MB.', pt: 'A imagem excede o limite de 50 MB.' }[(window.GAME_LANG || document.documentElement.lang)] || '이미지 크기가 50MB를 초과합니다.');
            return;
        }

        const uploadVersion = ++this._imageUploadVersion;
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                // 이미지 리사이징 (최대 1024px)
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                const max_size = 1024;

                if (width > height) {
                    if (width > max_size) {
                        height *= max_size / width;
                        width = max_size;
                    }
                } else {
                    if (height > max_size) {
                        width *= max_size / height;
                        height = max_size;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                // JPEG 품질 0.8로 압축
                const base64 = canvas.toDataURL('image/jpeg', 0.8);
                console.debug('[UIManager] handleImageUpload: prepared base64, size=', base64.length);
                // 즉시 미리보기는 base64로 (UX), 백그라운드로 R2 업로드 후 stagedImage를 URL로 교체
                this.updateImagePreview(base64);
                this._setImageUploadState(true, base64);
                if (typeof window.uploadImageToR2 === 'function') {
                    window.uploadImageToR2(base64, 'chat').then(url => {
                        if (this._imageUploadVersion !== uploadVersion) return;
                        if (url) {
                            this.stagedImage = url;
                            console.debug('[UIManager] R2 업로드 완료:', url);
                        }
                    }).catch(err => {
                        console.warn('[UIManager] R2 업로드 실패, base64 폴백:', err.message);
                        window.reportCupidCaughtError?.(err, {
                            source: 'cupid-ui-manager',
                            errorType: 'image_upload_fallback',
                            context: { uploadContext: 'game-chat' }
                        });
                    }).finally(() => {
                        if (this._imageUploadVersion === uploadVersion) {
                            this._setImageUploadState(false);
                        }
                    });
                } else {
                    this._setImageUploadState(false);
                }
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    /**
     * 이미지 미리보기 영역 업데이트
     * @param {string|null} base64Data - 이미지 데이터 (null이면 제거)
     */
    updateImagePreview(base64Data) {
        console.debug('[UIManager] updateImagePreview called. hasData=', !!base64Data);
        if (base64Data) {
            this.stagedImage = base64Data;
            if (this.imagePreview) {
                this.imagePreview.src = base64Data;
                const previewLang = String(window.GAME_LANG || document.documentElement.lang || 'ko')
                    .toLowerCase()
                    .split('-')[0];
                this.imagePreview.alt = {
                    ko: '선택한 이미지',
                    en: 'Selected image',
                    es: 'Imagen seleccionada',
                    ja: '選択した画像',
                    fr: 'Image sélectionnée',
                    de: 'Ausgewähltes Bild',
                    pt: 'Imagem selecionada'
                }[previewLang] || 'Selected image';
            }
            if (this.imagePreviewContainer) {
                this.imagePreviewContainer.style.display = 'inline-flex';
                this.imagePreviewContainer.style.visibility = 'visible';
            }

            // Ensure remove button is bound
            if (this.removeImageBtn && !this.removeImageBtn.dataset.bound) {
                this.removeImageBtn.addEventListener('click', () => {
                    console.debug('[UIManager] removeImageBtn clicked');
                    this.removeStagedImage();
                });
                this.removeImageBtn.dataset.bound = '1';
            }
        } else {
            this.stagedImage = null;
            if (this.imagePreview) this.imagePreview.src = '';
            if (this.imagePreviewContainer) {
                this.imagePreviewContainer.style.display = 'none';
                this.imagePreviewContainer.style.visibility = 'hidden';
            }
        }
    }

    /**
     * 업로드 대기 중인 이미지 제거
     */
    removeStagedImage() {
        this._imageUploadVersion++;
        this._setImageUploadState(false);
        this.updateImagePreview(null);
        if (this.imageUploadInput) this.imageUploadInput.value = '';
    }

    /**
     * 이름 태그 업데이트 (캐릭터 이름 + 호감도 게이지)
     *
     * ▶ 대화할 때마다 호출되어 현재 말하는 캐릭터의 정보를 표시
     * ▶ 설정에서 호감도 게이지를 끌 수 있음
     *
     * @param {string} name - 캐릭터 이름 (null이면 이름 태그 숨김)
     */
    updateNameTag(name) {
        // 기존 내용 초기화
        this.nameTagEl.innerHTML = "";

        // 이름이 없으면 태그 숨기고 종료
        if (!name) {
            this.nameTagEl.style.display = 'none';
            return;
        }

        // 이름 텍스트 추가
        const nameSpan = document.createElement('span');
        nameSpan.textContent = name;
        this.nameTagEl.appendChild(nameSpan);

        const charKey = this.charNameMap[name];  // 예: "서연" → "Seoyeon"

        // 🔧 갤러리에 캐릭터 만남 기록 (최초 1회만 기록됨)
        // 다국어 표시 이름은 공용 내부 키로 정규화한 뒤 전달한다.
        this.galleryManager.markCharacterMet(charKey || name);

        // 호감도 게이지 표시 여부 확인 (설정에서 끌 수 있음)
        const showAffinity = window.CupidStorage.getItem('showAffinity') !== 'false';

        // 캐릭터가 호감도 대상이고 설정이 켜져있으면 게이지 표시
        if (showAffinity && charKey && this.stateManager.stats[charKey]) {
            const affinity = this.stateManager.getAffinity(charKey);
            const gaugeBox = this.createAffinityGauge(affinity);
            this.nameTagEl.appendChild(gaugeBox);
        }

        this.nameTagEl.style.display = 'inline-block';
    }

    /**
     * 호감도 게이지 UI 생성
     *
     * ▶ 이름 태그 옆에 표시되는 막대형 게이지
     * ▶ -100 ~ 100 범위를 0% ~ 100%로 변환
     * ▶ 호감도에 따라 색상이 변함:
     *    - 70 이상: 분홍색 (매우 친밀)
     *    - 0 이상: 연한 분홍 (호감)
     *    - -40 이상: 청록색 (비호감)
     *    - -40 미만: 파란색 (매우 비호감)
     *
     * @param {number} affinity - 호감도 값 (-100 ~ 100)
     * @returns {HTMLElement} 게이지가 담긴 span 요소
     */
    createAffinityGauge(affinity) {
        // 게이지 컨테이너
        const gaugeBox = document.createElement('span');
        gaugeBox.style.cssText = 'display:inline-flex;align-items:center;margin-left:15px;padding-left:10px;border-left:1px solid rgba(255,255,255,0.3);vertical-align:middle;';

        // 호감도 수치 텍스트 (예: "+50", "-30")
        const valText = document.createElement('span');
        valText.textContent = (affinity > 0 ? "+" : "") + affinity;
        valText.style.cssText = 'font-size:0.8rem;margin-right:8px;min-width:30px;text-align:right;color:#fff;text-shadow:1px 1px 2px rgba(0,0,0,0.5);';

        // 게이지 트랙 (배경)
        const track = document.createElement('span');
        track.style.cssText = 'display:inline-block;width:80px;height:6px;background:rgba(255,255,255,0.2);border-radius:3px;position:relative;overflow:hidden;border:1px solid rgba(0,0,0,0.4);';

        // 게이지 바 (채워지는 부분)
        const bar = document.createElement('span');
        bar.style.cssText = 'position:absolute;height:100%;top:0;left:0;';

        // -100~100 → 0%~100%로 변환 (0이 50% 지점)
        const percent = (affinity + 100) / 2;
        bar.style.width = percent + '%';

        // 🎨 호감도별 색상 지정
        if (affinity >= 70) bar.style.backgroundColor = '#ff7675';      // 분홍색 💗
        else if (affinity >= 0) bar.style.backgroundColor = '#fab1a0'; // 연분홍 💕
        else if (affinity > -40) bar.style.backgroundColor = '#81ecec'; // 청록색 💔
        else bar.style.backgroundColor = '#74b9ff';                     // 파란색 💙

        track.appendChild(bar);

        // 중앙선 표시 (0점 기준선)
        const mid = document.createElement('span');
        mid.style.cssText = 'position:absolute;left:50%;top:0;width:1px;height:100%;background:rgba(255,255,255,0.5);';
        track.appendChild(mid);

        gaugeBox.appendChild(valText);
        gaugeBox.appendChild(track);
        return gaugeBox;
    }

    /**
     * 호감도 변화 팝업 애니메이션
     *
     * ▶ 호감도가 변할 때 화면에 "+10 💕" 같은 팝업이 뜸
     * ▶ 5초 후 자동으로 사라짐
     * ▶ CSS 애니메이션으로 위로 떠오르면서 사라지는 효과
     *
     * @param {number} amount - 변화량 (양수: 증가, 음수: 감소)
     * @param {string} charName - 캐릭터 이름 (선택사항)
     */
    showAffinityChange(amount, charName = null) {
        // 변화량이 0이면 표시 안 함
        if (amount === 0) return;

        // 효과음 재생 (soundManager가 존재하는 경우에만)
        if (window.soundManager) {
            const sfxPath = amount > 0
                ? 'assets/audio/sfx/affinity_up.mp3'
                : 'assets/audio/sfx/affinity_down.mp3';
            if (window.soundManager) soundManager.playSfx(sfxPath);
        }

        // 팝업 요소 생성
        const popup = document.createElement('div');
        popup.className = `affinity-popup ${amount > 0 ? 'positive' : 'negative'}`;

        // 이모지 (증가: 💕, 감소: 💔)
        const emoji = document.createElement('span');
        emoji.className = 'emoji';
        emoji.textContent = amount > 0 ? '💕' : '💔';

        // 변화량 텍스트
        const value = document.createElement('span');
        value.className = 'value';
        value.textContent = amount > 0 ? `+${amount}` : `${amount}`;

        popup.appendChild(emoji);
        popup.appendChild(value);
        document.body.appendChild(popup);

        // 4초 후 자동 제거
        setTimeout(() => popup.remove(), 4000);
    }

    /**
     * 여러 캐릭터 호감도 동시 변화 표시 (좌/우 분산 배치)
     * @param {Array} changes - [{amount, charKey}, ...]
     */
    showAffinityChangeMulti(changes) {
        if (!changes || changes.length === 0) return;

        // 양수를 먼저, 음수를 나중에 정렬
        const sorted = [...changes].sort((a, b) => b.amount - a.amount);

        // 캐릭터 이름 매핑
        const lang = window.GAME_LANG || document.documentElement.lang || 'ko';
        const nameMapByLang = {
            ko: { Seoyeon: '서연', Yuna: '유나', Dain: '다인', Teacher: '담임', Nurse: '보건' },
            ja: { Seoyeon: 'ソヨン', Yuna: 'ユナ', Dain: 'ダイン', Teacher: '担任の先生', Nurse: '保健室の先生' },
            en: { Seoyeon: 'Seoyeon', Yuna: 'Yuna', Dain: 'Dain', Teacher: 'Homeroom Teacher', Nurse: 'School Nurse' },
            es: { Seoyeon: 'Seoyeon', Yuna: 'Yuna', Dain: 'Dain', Teacher: 'Profesora tutora', Nurse: 'Enfermera escolar' },
            fr: { Seoyeon: 'Seoyeon', Yuna: 'Yuna', Dain: 'Dain', Teacher: 'Professeure', Nurse: 'Infirmière' },
            de: { Seoyeon: 'Seoyeon', Yuna: 'Yuna', Dain: 'Dain', Teacher: 'Klassenlehrerin', Nurse: 'Schulkrankenschwester' },
            pt: { Seoyeon: 'Seoyeon', Yuna: 'Yuna', Dain: 'Dain', Teacher: 'Professora da turma', Nurse: 'Enfermeira escolar' }
        };
        const nameMap = nameMapByLang[lang] || nameMapByLang['ko'];

        // 캐릭터 키 → 이미지 파일명 매핑 (화면 표시 여부 판별용)
        const charFileMap = {
            Seoyeon: 'seyoun', Yuna: 'yuna', Dain: 'dain',
            Teacher: 'teacher', Nurse: 'nurse'
        };

        // 현재 화면에 보이는 캐릭터 슬롯 확인
        const slots = [
            { el: document.getElementById('char-left'), pos: '20%' },
            { el: document.getElementById('char-center'), pos: '50%' },
            { el: document.getElementById('char-right'), pos: '75%' }
        ];
        const visibleChars = {};
        for (const slot of slots) {
            const img = slot.el?.querySelector('img');
            if (img && img.src) {
                const src = img.src.toLowerCase();
                for (const [key, file] of Object.entries(charFileMap)) {
                    if (src.includes(file)) visibleChars[key] = slot.pos;
                }
            }
        }

        // 위치 계산: 화면에 보이는 캐릭터는 해당 슬롯 위치, 안 보이는 캐릭터는 나머지에 분산
        const onScreen = [];
        const offScreen = [];
        for (const change of sorted) {
            if (visibleChars[change.charKey]) {
                onScreen.push({ ...change, left: visibleChars[change.charKey] });
            } else {
                offScreen.push(change);
            }
        }

        // 화면에 없는 캐릭터들의 분산 위치 (화면 캐릭터 위치 피해서)
        const usedPositions = new Set(onScreen.map(c => c.left));
        const sidePositions = ['25%', '75%', '15%', '85%'].filter(p => !usedPositions.has(p));
        offScreen.forEach((change, i) => {
            change.left = sidePositions[i] ?? (i % 2 === 0 ? '25%' : '75%');
        });

        // 양수 효과음 1번만
        if (window.soundManager) {
            const hasPositive = sorted.some(c => c.amount > 0);
            const sfx = hasPositive ? 'assets/audio/sfx/affinity_up.mp3' : 'assets/audio/sfx/affinity_down.mp3';
            window.soundManager.playSfx(sfx);
        }

        // 화면에 보이는 캐릭터: 기존 팝업
        onScreen.forEach((change) => {
            const popup = document.createElement('div');
            popup.className = `affinity-popup affinity-popup-multi ${change.amount > 0 ? 'positive' : 'negative'}`;
            popup.style.left = change.left;

            const label = document.createElement('span');
            label.className = 'affinity-char-label';
            label.textContent = nameMap[change.charKey] ?? change.charKey;

            const emoji = document.createElement('span');
            emoji.className = 'emoji';
            emoji.textContent = change.amount > 0 ? '💕' : '💔';

            const value = document.createElement('span');
            value.className = 'value';
            value.textContent = change.amount > 0 ? `+${change.amount}` : `${change.amount}`;

            popup.appendChild(label);
            popup.appendChild(emoji);
            popup.appendChild(value);
            document.body.appendChild(popup);

            setTimeout(() => popup.remove(), 4000);
        });

        // 화면에 안 보이는 캐릭터: 옆에서 슬라이드인 되는 이름 태그
        offScreen.forEach((change, i) => {
            const tag = document.createElement('div');
            const isPositive = change.amount > 0;
            const side = i % 2 === 0 ? 'left' : 'right';
            tag.className = `affinity-nametag affinity-nametag-${side} ${isPositive ? 'positive' : 'negative'}`;

            const name = document.createElement('span');
            name.className = 'affinity-nametag-name';
            name.textContent = nameMap[change.charKey] ?? change.charKey;

            const val = document.createElement('span');
            val.className = 'affinity-nametag-value';
            val.textContent = `${isPositive ? '+' : ''}${change.amount} ${isPositive ? '💕' : '💔'}`;

            tag.appendChild(name);
            tag.appendChild(val);
            document.body.appendChild(tag);

            setTimeout(() => tag.remove(), 4000);
        });
    }

    /**
     * 커스텀 모달(팝업) 표시
     *
     * ▶ 브라우저 기본 alert/confirm 대신 사용하는 예쁜 팝업
     * ▶ Promise를 반환해서 async/await로 사용 가능
     *
     * @param {string} message - 표시할 메시지
     * @param {boolean} isAlert - true면 확인 버튼만, false면 확인+취소
     * @returns {Promise<boolean>} 확인 클릭 시 true, 취소 시 false
     */
    showModal(message, isAlert = false) {
        return new Promise((resolve) => {
            this.modalMessage.textContent = message;
            this.customModal.style.display = 'flex';

            // alert 모드면 취소 버튼 숨김
            this.modalCancelBtn.style.display = isAlert ? 'none' : 'inline-block';

            // 버튼 클릭 핸들러
            const cleanup = () => {
                this.modalConfirmBtn.removeEventListener('click', onConfirm);
                this.modalCancelBtn.removeEventListener('click', onCancel);
                this.customModal.style.display = 'none';
            };
            const onConfirm = () => { cleanup(); resolve(true); };
            const onCancel = () => { cleanup(); resolve(false); };

            this.modalConfirmBtn.addEventListener('click', onConfirm);
            this.modalCancelBtn.addEventListener('click', onCancel);
        });
    }

    /**
     * "클릭하세요" 다음 지시계 표시/숨김
     * @param {boolean} show - 표시 여부
     * @param {boolean} delayed - true면 1.5초 후 표시 (시네마틱용)
     */
    showNextIndicator(show, delayed = false) {
        // 이전 지연 타이머가 있으면 취소
        if (this._nextIndicatorTimer) {
            clearTimeout(this._nextIndicatorTimer);
            this._nextIndicatorTimer = null;
        }
        if (show) {
            if (delayed) {
                // 시네마틱 장면에서 자연스럽게 지연 표시
                this._nextIndicatorTimer = setTimeout(() => {
                    this._nextIndicatorTimer = null;
                    this.nextIndicator.style.display = 'block';
                    this.nextIndicator.classList.add('fade-in');
                }, 1500);
            } else {
                this.nextIndicator.style.display = 'block';
            }
        } else {
            this.nextIndicator.style.display = 'none';
            this.nextIndicator.classList.remove('fade-in');
        }
    }

    /**
     * 페이드 효과 (화면 어두워짐)
     * @param {boolean} active - 페이드 활성화 여부
     * @param {boolean} showTbc - "To Be Continued" 텍스트 표시 여부
     */
    setFade(active, showTbc = false) {
        if (this._tbcTimer) {
            clearTimeout(this._tbcTimer);
            this._tbcTimer = null;
        }
        this.fadeLayer.setAttribute('aria-hidden', active ? 'false' : 'true');
        if (active) {
            this.fadeLayer.classList.add('active');
            // TBC 텍스트는 1초 후 표시 (페이드 완료 후)
            if (showTbc) {
                this._tbcTimer = setTimeout(() => {
                    if (this.fadeLayer.classList.contains('active')) this.tbcText.classList.add('show');
                    this._tbcTimer = null;
                }, 1000);
            }
        } else {
            this.fadeLayer.classList.remove('active');
            this.tbcText.classList.remove('show');
        }
    }

    /** 홈으로 돌아가기 확인 모달 표시 */
    showHomeConfirm() {
        const modal = document.getElementById('homeConfirmModal');
        if (modal) modal.style.display = 'flex';
    }

    /**
     * 홈 확인 모달 닫기
     * @param {Event} e - 클릭 이벤트 (배경 클릭으로 닫기 방지용)
     */
    closeHomeConfirm(e) {
        // 모달 외부 클릭 시에만 닫기
        if (e && e.target !== e.currentTarget && e.target.id !== 'homeConfirmModal') return;
        const modal = document.getElementById('homeConfirmModal');
        if (modal) modal.style.display = 'none';
    }

    /** 홈으로 이동 (BGM 정지 후 메인 페이지로) */
    goToHome() {
        if (window.soundManager) soundManager.stopBgm();
        const lang = (window.GAME_LANG || document.documentElement.lang) || 'ko';
        window.location.href = { es: '/index-es', ja: '/index-ja', en: '/index-en', fr: '/index-fr', de: '/index-de', pt: '/index-pt' }[lang] || '/';
    }

    /**
     * 설정 모달 열기
     * - 저장된 설정값을 불러와서 UI에 반영
     */
    openSettingsModal() {
        const modal = document.getElementById('settingsModal');
        if (!modal) return;

        modal.style.display = 'flex';

        // 호감도 표시 설정 불러오기
        try {
            const savedSetting = window.CupidStorage.getItem('showAffinity');
            document.getElementById('affinityToggle').checked = savedSetting === null ? true : savedSetting === 'true';

            // 볼륨 설정 불러오기
            const bgmVol = window.CupidStorage.getItem('bgmVolume') !== null ? parseFloat(window.CupidStorage.getItem('bgmVolume')) : 0.5;
            const sfxVol = window.CupidStorage.getItem('sfxVolume') !== null ? parseFloat(window.CupidStorage.getItem('sfxVolume')) : 0.5;

            document.getElementById('bgmVolume').value = bgmVol * 100;
            document.getElementById('sfxVolume').value = sfxVol * 100;
            document.getElementById('bgmVolumeVal').textContent = Math.round(bgmVol * 100) + '%';
            document.getElementById('sfxVolumeVal').textContent = Math.round(sfxVol * 100) + '%';
        } catch (e) {
            // 프라이빗 브라우징 등에서 localStorage 사용 불가 시 기본값 사용
            document.getElementById('affinityToggle').checked = true;
            document.getElementById('bgmVolume').value = 50;
            document.getElementById('sfxVolume').value = 50;
            document.getElementById('bgmVolumeVal').textContent = '50%';
            document.getElementById('sfxVolumeVal').textContent = '50%';
        }
    }

    /** 설정 모달 닫기 */
    closeSettingsModal(e) {
        if (e && e.target !== e.currentTarget) return;
        const modal = document.getElementById('settingsModal');
        if (modal) modal.style.display = 'none';
    }

    /**
     * 설정 저장
     * @param {string} currentSceneId - 현재 씬 ID (이름 태그 갱신용)
     * @param {Function} getSceneFn - 씬 조회 함수
     */
    saveSettings(currentSceneId, getSceneFn) {
        // 호감도 표시 설정 저장
        const showAffinity = document.getElementById('affinityToggle').checked;
        try {
            window.CupidStorage.setItem('showAffinity', showAffinity);
        } catch (e) {
            // 프라이빗 브라우징 등에서 localStorage 사용 불가 시 무시
        }

        // 볼륨 설정 저장 및 적용
        const bgmVol = document.getElementById('bgmVolume').value / 100;
        const sfxVol = document.getElementById('sfxVolume').value / 100;

        if (window.soundManager) soundManager.setBgmVolume(bgmVol);
        if (window.soundManager) soundManager.setSfxVolume(sfxVol);

        // 볼륨 설정도 localStorage에 저장 (새로고침 후에도 유지)
        try {
            window.CupidStorage.setItem('bgmVolume', bgmVol);
            window.CupidStorage.setItem('sfxVolume', sfxVol);
        } catch (e) {
            // 프라이빗 브라우징 등에서 localStorage 사용 불가 시 무시
        }

        this.closeSettingsModal();

        // 호감도 표시 설정이 바뀌었을 수 있으니 이름 태그 갱신
        const scene = getSceneFn(currentSceneId);
        if (scene) this.updateNameTag(scene.name);
    }
}

window.UIManager = UIManager;
