/**
 * Cupid Sound Manager
 * Handles BGM and SFX playback with volume control and browser autoplay handling.
 */
class SoundManager {
    constructor() {
        this.bgm = null;
        this.sfxVolume = parseFloat(localStorage.getItem('sfxVolume')) || 0.5;
        this.bgmVolume = parseFloat(localStorage.getItem('bgmVolume')) || 0.5;
        this.muted = localStorage.getItem('soundMuted') === 'true';
        this.isInitialized = false;
        this.currentBgmPath = '';
    }

    init() {
        if (this.isInitialized) return;
        
        // 브라우저 오토플레이 제한 수동 해제용 더미 오디오 context 또는 상호작용 필요
        this.isInitialized = true;
        
        // 저장된 설정 적용
        if (this.bgm) {
            this.bgm.volume = this.muted ? 0 : this.bgmVolume;
        }
    }

    playBgm(path, loop = true) {
        if (this.currentBgmPath === path && this.bgm && !this.bgm.paused) return;
        
        if (this.bgm) {
            this.bgm.pause();
            this.bgm = null;
        }

        this.currentBgmPath = path;
        this.bgm = new Audio(path);
        this.bgm.loop = loop;
        this.bgm.volume = this.muted ? 0 : this.bgmVolume;
        
        this.bgm.play().catch(e => {
            console.log("BGM Autoplay blocked. Waiting for user interaction.");
            // 클릭 시 재생되도록 이벤트 리스너 등록
            const startPlay = () => {
                this.bgm.play();
                window.removeEventListener('click', startPlay);
                window.removeEventListener('touchstart', startPlay);
            };
            window.addEventListener('click', startPlay);
            window.addEventListener('touchstart', startPlay);
        });
    }

    stopBgm() {
        if (this.bgm) {
            this.bgm.pause();
            this.currentBgmPath = '';
        }
    }

    playSfx(path) {
        if (this.muted) return;
        
        const sfx = new Audio(path);
        sfx.volume = this.sfxVolume;
        sfx.play().catch(e => console.log("SFX play failed:", e));
    }

    setBgmVolume(volume) {
        this.bgmVolume = volume;
        localStorage.setItem('bgmVolume', volume);
        if (this.bgm) {
            this.bgm.volume = this.muted ? 0 : volume;
        }
    }

    setSfxVolume(volume) {
        this.sfxVolume = volume;
        localStorage.setItem('sfxVolume', volume);
    }

    setMuted(muted) {
        this.muted = muted;
        localStorage.setItem('soundMuted', muted);
        if (this.bgm) {
            this.bgm.volume = muted ? 0 : this.bgmVolume;
        }
    }
}

const soundManager = new SoundManager();
window.soundManager = soundManager;
