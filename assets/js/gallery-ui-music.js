/**
 * ============================================================================
 * MusicRenderer - 음악실 렌더러
 * ============================================================================
 * 
 * 음악 목록 렌더링 및 BGM 재생 제어를 담당합니다.
 * GalleryUI에서 Composition으로 주입받아 사용합니다.
 * 
 * 의존성:
 *   - GalleryData: BGM 데이터 조회
 *   - GalleryProgress: 해금 상태 확인
 *   - GalleryUI (parent): 팝업 표시 기능
 */
class MusicRenderer {
    /**
     * MusicRenderer 생성자
     * 
     * @param {GalleryUI} ui - 부모 GalleryUI 인스턴스
     */
    constructor(ui) {
        /** @type {GalleryUI} 부모 UI 인스턴스 */
        this.ui = ui;

        /** @type {HTMLElement|null} 음악 목록 컨테이너 */
        this.listEl = null;

        /** @type {Audio|null} 현재 재생 중인 오디오 객체 */
        this.audio = null;

        /** @type {string|null} 현재 재생 중인 BGM ID */
        this.currentBgmId = null;
    }

    /**
     * 초기화 - DOM 요소 캐싱 및 이벤트 위임 설정
     */
    init() {
        this.listEl = document.getElementById('music-list');

        // 이벤트 위임: 목록 전체에 한 번만 이벤트 등록
        if (this.listEl) {
            this.listEl.addEventListener('click', (e) => this._handleListClick(e));
        }
    }

    /**
     * 목록 클릭 이벤트 핸들러 (이벤트 위임)
     * @private
     * @param {Event} e - 클릭 이벤트
     */
    _handleListClick(e) {
        const item = e.target.closest('.music-item');
        if (!item) return;

        const bgmId = item.dataset.bgmId;
        const bgmFile = item.dataset.bgmFile;
        if (!bgmId) return;

        const isLocked = item.classList.contains('locked');

        if (isLocked) {
            this.showLockPopup(bgmId);
        } else {
            this.toggle(bgmId, bgmFile);
        }
    }

    /**
     * 음악 목록 렌더링
     */
    render() {
        if (!this.listEl) {
            this.listEl = document.getElementById('music-list');
            if (!this.listEl) return;

            // 첫 렌더링 시 이벤트 위임 설정
            this.listEl.addEventListener('click', (e) => this._handleListClick(e));
        }

        const bgmList = GalleryData.getBGMList(this.ui.lang);
        let html = '';

        bgmList.forEach(bgm => {
            const unlocked = this.ui.progress.isUnlocked('bgm', bgm.id);
            const isPlaying = this.currentBgmId === bgm.id;

            // data 속성으로 ID와 파일 경로 전달 (인라인 onclick 제거)
            html += `
                <div class="music-item ${unlocked ? '' : 'locked'} ${isPlaying ? 'playing' : ''}"
                     data-bgm-id="${bgm.id}" data-bgm-file="${bgm.file}">
                    
                    <div class="music-icon">
                        ${isPlaying 
                            ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="white"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>' 
                            : (unlocked 
                                ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M8 5v14l11-7z"/></svg>' 
                                : '<svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"/></svg>')}
                    </div>
                    
                    <div class="music-info">
                        <h4>${unlocked ? bgm.name : '???'}</h4>
                        <p>${unlocked ? bgm.artist : ({ ko: '미해금', en: 'Locked', es: 'Bloqueado', ja: '未解放', fr: 'Verrouillé', de: 'Gesperrt', pt: 'Bloqueado' }[this.ui.lang] || 'Locked')}</p>
                    </div>

                    <div class="music-duration">
                        ${unlocked ? bgm.duration : '--:--'}
                    </div>
                </div>
            `;
        });

        this.listEl.innerHTML = html;
    }

    /**
     * 음악 잠금 팝업 표시
     * @param {string} bgmId - BGM ID
     */
    showLockPopup(bgmId) {
        const L = (ko, en, es, ja, fr, de) => ({ ko, en, es, ja, fr, de })[this.ui.lang] || en;
        this.ui.showUnlockPopup({
            title: L('음악 미해금', 'Music Locked', 'Música bloqueada', '音楽未解放', 'Musique verrouillée', 'Musik gesperrt'),
            message: L(
                '이 배경음악은 아직 해금되지 않았습니다.<br><br><span class="condition-line">🎵 해금 조건: 게임에서 해당 음악이 재생되면 자동 해금됩니다!</span>',
                'This BGM is not yet unlocked.<br><br><span class="condition-line">🎵 Condition: Will unlock automatically when played in game!</span>',
                'Esta música de fondo aún no está desbloqueada.<br><br><span class="condition-line">🎵 Condición: ¡Se desbloqueará automáticamente cuando se reproduzca en el juego!</span>',
                'このBGMはまだ解放されていません。<br><br><span class="condition-line">🎵 解放条件: ゲームで再生されると自動的に解放されます！</span>',
                'Cette musique de fond n\'est pas encore débloquée.<br><br><span class="condition-line">🎵 Condition : Se débloquera automatiquement une fois jouée dans le jeu !</span>'
            ),
            icon: '🎵'
        });
    }

    /**
     * BGM 재생/정지 토글
     * 
     * @param {string} id - BGM ID
     * @param {string} file - 오디오 파일 경로
     */
    toggle(id, file) {
        if (this.currentBgmId === id) {
            // 현재 재생 중인 곡을 클릭한 경우: 정지
            this.stop();
        } else {
            // 다른 곡을 클릭한 경우: 재생
            this.play(id, file);
        }

        // UI 업데이트
        this.render();
    }

    /**
     * BGM 재생
     * @param {string} id - BGM ID
     * @param {string} file - 오디오 파일 경로
     */
    async play(id, file) {
        // 기존 재생 중지
        this.stop();

        this.currentBgmId = id;

        // soundManager의 버퍼 캐시 활용 (이미 다운로드된 파일 재사용)
        if (window.soundManager && window.soundManager._loadBuffer) {
            try {
                const ctx = window.soundManager ? soundManager._ensureAudioContext() : null;
                const buffer = window.soundManager ? await soundManager._loadBuffer(file) : null;
                if (!buffer || this.currentBgmId !== id) return;

                const source = ctx.createBufferSource();
                source.buffer = buffer;
                source.loop = true;

                const gain = ctx.createGain();
                gain.gain.value = localStorage.getItem('bgmVolume') !== null ? parseFloat(localStorage.getItem('bgmVolume')) : 0.5;

                source.connect(gain);
                gain.connect(ctx.destination);
                source.start(0);

                this._sourceNode = source;
                this._gainNode = gain;
                return;
            } catch (e) {
                console.log('Gallery: AudioBuffer 방식 실패, fallback 사용:', e);
            }
        }

        // Fallback: 기존 Audio 방식
        this.audio = new Audio(file);
        this.audio.volume = localStorage.getItem('bgmVolume') !== null ? parseFloat(localStorage.getItem('bgmVolume')) : 0.5;
        this.audio.loop = true;
        this.audio.play().catch(e => console.log('Audio play failed:', e));
    }

    /**
     * BGM 정지
     */
    stop() {
        // AudioBufferSourceNode 정리
        if (this._sourceNode) {
            try {
                this._sourceNode.stop();
                this._sourceNode.disconnect();
            } catch (e) {}
            this._sourceNode = null;
        }
        if (this._gainNode) {
            try { this._gainNode.disconnect(); } catch (e) {}
            this._gainNode = null;
        }
        // Fallback Audio 정리
        if (this.audio) {
            this.audio.pause();
            this.audio = null;
        }
        this.currentBgmId = null;
    }

    /**
     * 리소스 정리 (페이지 떠나기 전 호출)
     */
    cleanup() {
        this.stop();
    }
}

// 전역 접근을 위해 window에 노출
window.MusicRenderer = MusicRenderer;
