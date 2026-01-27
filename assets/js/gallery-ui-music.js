/**
 * ============================================================================
 * GalleryUI - 음악실 확장
 * ============================================================================
 * 
 * 음악 목록 렌더링 및 BGM 재생 제어를 담당합니다.
 * GalleryUI 클래스의 prototype에 메서드를 추가하는 방식으로 확장합니다.
 */

// =========================================================================
// 음악실 렌더링
// =========================================================================

/**
 * 음악 목록 렌더링
 * 
 * 표시 정보:
 * - 해금된 BGM: 제목, 아티스트, 재생시간 표시
 * - 잠긴 BGM: ??? 표시, 클릭 시 해금 조건 팝업
 * - 재생 중인 BGM: playing 클래스 추가로 강조 표시
 */
GalleryUI.prototype.renderMusic = function () {
    const list = document.getElementById('music-list');
    if (!list) return;

    const bgmList = GalleryData.getBGMList(this.lang);
    let html = '';

    bgmList.forEach(bgm => {
        const unlocked = this.progress.isUnlocked('bgm', bgm.id);
        const isPlaying = this.currentBgm === bgm.id;

        html += `
            <div class="music-item ${unlocked ? '' : 'locked'} ${isPlaying ? 'playing' : ''}"
                 onclick="${unlocked ? `gallery.ui.toggleBgm('${bgm.id}', '${bgm.file}')` : `gallery.ui.showMusicLockPopup('${bgm.id}')`}">
                
                <div class="music-icon">
                    ${isPlaying ? '⏸️' : (unlocked ? '▶️' : '🔒')}
                </div>
                
                <div class="music-info">
                    <h4>${unlocked ? bgm.name : '???'}</h4>
                    <p>${unlocked ? bgm.artist : (this.lang === 'ko' ? '미해금' : 'Locked')}</p>
                </div>
                
                <div class="music-duration">
                    ${unlocked ? bgm.duration : '--:--'}
                </div>
            </div>
        `;
    });

    list.innerHTML = html;
};

/**
 * 음악 잠금 팝업 표시
 * 
 * @param {string} bgmId - BGM ID
 */
GalleryUI.prototype.showMusicLockPopup = function (bgmId) {
    this.showUnlockPopup({
        title: this.lang === 'ko' ? '음악 미해금' : 'Music Locked',
        message: this.lang === 'ko'
            ? '이 배경음악은 아직 해금되지 않았습니다.\n\n🎵 해금 조건: 게임에서 해당 음악이 재생되면 자동 해금됩니다!'
            : 'This BGM is not yet unlocked.\n\n🎵 Condition: Will unlock automatically when played in game!',
        icon: '🎵'
    });
};

/**
 * BGM 재생/정지 토글
 * 
 * 동작 설명:
 * 1. 현재 재생 중인 곡을 클릭한 경우: 재생 정지
 * 2. 다른 곡을 클릭한 경우: 기존 곡 정지 후 새 곡 재생
 * 
 * @param {string} id - BGM ID
 * @param {string} file - 오디오 파일 경로
 */
GalleryUI.prototype.toggleBgm = function (id, file) {
    if (this.currentBgm === id) {
        // 현재 재생 중인 곡을 클릭한 경우: 정지
        if (this.bgmAudio) {
            this.bgmAudio.pause();
            this.bgmAudio = null;
        }
        this.currentBgm = null;
    } else {
        // 다른 곡을 클릭한 경우: 재생
        if (this.bgmAudio) {
            this.bgmAudio.pause();
        }

        this.bgmAudio = new Audio(file);
        this.bgmAudio.volume = parseFloat(localStorage.getItem('bgmVolume') || 0.5);
        this.bgmAudio.loop = true;
        this.bgmAudio.play().catch(e => console.log('Audio play failed:', e));

        this.currentBgm = id;
    }

    // UI 업데이트
    this.renderMusic();
};
