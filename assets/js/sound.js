/**
 * Cupid Sound Manager (사운드 관리자)
 * 배경음악(BGM)과 효과음(SFX)의 재생, 일시정지, 볼륨 조절을 관리합니다.
 * Web Audio API(AudioContext + GainNode)를 사용하여 저사양 기기에서도
 * 노이즈 없이 부드러운 볼륨 전환을 제공합니다.
 */
class SoundManager {
    constructor() {
        // Web Audio API 컨텍스트 (사용자 상호작용 후 생성)
        this.audioContext = null;

        // 현재 재생 중인 BGM 관련
        this.bgm = null;           // Audio 엘리먼트
        this.bgmSource = null;     // MediaElementAudioSourceNode
        this.bgmGain = null;       // GainNode (볼륨 제어용)

        // 로컬 스토리지에서 저장된 설정값 불러오기
        const savedSfx = localStorage.getItem('sfxVolume');
        const savedBgm = localStorage.getItem('bgmVolume');

        this.sfxVolume = savedSfx !== null ? parseFloat(savedSfx) : 0.5;
        this.bgmVolume = savedBgm !== null ? parseFloat(savedBgm) : 0.5;

        this.muted = localStorage.getItem('soundMuted') === 'true';

        this.isInitialized = false;
        this.currentBgmPath = '';

        // 페이드 효과 설정
        this.fadeInDuration = 2;    // 초 단위 (Web Audio API는 초 사용)
        this.fadeOutDuration = 2;

        // 페이드 아웃 중인 이전 BGM을 추적 (리소스 정리용)
        this._fadingOutNodes = [];
    }

    /**
     * AudioContext를 생성하거나 resume합니다.
     * 브라우저 정책상 사용자 상호작용 후에만 활성화됩니다.
     */
    _ensureAudioContext() {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume().catch(() => {});
        }
        return this.audioContext;
    }

    /**
     * 사운드 매니저를 초기화합니다.
     */
    init() {
        if (this.isInitialized) return;

        console.log("SoundManager: 시스템 초기화 중...");
        this.isInitialized = true;

        const unlock = () => {
            console.log("SoundManager: 사용자 상호작용 감지, 오디오 잠금 해제 시도");

            this._ensureAudioContext();

            if (this.bgm) {
                if (this.bgm.paused && this.currentBgmPath) {
                    this.bgm.play()
                        .then(() => {
                            console.log("SoundManager: 잠금 해제 후 BGM 재생 성공");
                            this._fadeIn(this.muted ? 0 : this.bgmVolume);
                        })
                        .catch(e => console.error("SoundManager: BGM 재생 실패:", e));
                }
            } else if (this.currentBgmPath) {
                this.playBgm(this.currentBgmPath);
            }

            if (this.bgm && !this.bgm.paused) {
                window.removeEventListener('click', unlock);
                window.removeEventListener('touchstart', unlock);
                console.log("SoundManager: 오디오 리스너 제거 완료");
            }
        };

        window.addEventListener('click', unlock);
        window.addEventListener('touchstart', unlock);
    }

    /**
     * 오디오 잠금을 강제로 해제합니다.
     */
    unlock() {
        this._ensureAudioContext();
    }

    /**
     * 배경음악을 재생합니다. (canplaythrough 대기 + GainNode 페이드 인)
     * @param {string} path 오디오 파일 경로
     * @param {boolean} loop 반복 재생 여부 (기본값 true)
     * @param {boolean} force 같은 곡이라도 강제로 다시 재생할지 여부
     */
    playBgm(path, loop = true, force = false) {
        if (!force && this.currentBgmPath === path && this.bgm && !this.bgm.paused) return;

        console.log("SoundManager: BGM 재생 요청 ->", path);

        // BGM 갤러리 해금
        const bgmId = path.split('/').pop().replace('.mp3', '').replace('.ogg', '');
        if (typeof unlockBGM === 'function') {
            unlockBGM(bgmId);
        }

        // 1. 기존 음악 페이드 아웃
        if (this.bgm) {
            this._fadeOutAndCleanup();
        }

        const ctx = this._ensureAudioContext();
        this.currentBgmPath = path;

        // 2. 새로운 오디오 엘리먼트 생성
        const audio = new Audio();
        audio.crossOrigin = 'anonymous';
        audio.preload = 'auto';
        audio.loop = false; // onended로 반복 처리

        // 3. Web Audio API 노드 연결: Audio → GainNode → Destination
        const source = ctx.createMediaElementSource(audio);
        const gainNode = ctx.createGain();
        gainNode.gain.value = 0; // 0에서 시작 (페이드 인)
        source.connect(gainNode);
        gainNode.connect(ctx.destination);

        this.bgm = audio;
        this.bgmSource = source;
        this.bgmGain = gainNode;

        // 4. 반복 재생 설정
        if (loop) {
            audio.onended = () => {
                console.log("SoundManager: BGM 트랙 종료, 반복 재생");
                this.playBgm(path, true, true);
            };
        }

        // 5. 에러 처리
        audio.onerror = (e) => {
            console.error("SoundManager: 오디오 파일 로드 실패 ->", path, e);
        };

        // 6. 충분히 버퍼링된 후 재생 (canplaythrough)
        audio.addEventListener('canplaythrough', () => {
            // 이미 다른 곡으로 전환된 경우 무시
            if (this.bgm !== audio) return;

            audio.play()
                .then(() => {
                    console.log("SoundManager: BGM 버퍼링 완료, 재생 시작");
                    this._fadeIn(this.muted ? 0 : this.bgmVolume);
                })
                .catch(e => {
                    console.warn("SoundManager: 자동 재생 차단, 사용자 상호작용 대기 중");
                });
        }, { once: true });

        // 7. src 설정 → 로딩 시작
        audio.src = path;
        audio.load();
    }

    /**
     * 현재 재생 중인 배경음악을 서서히 멈춥니다.
     */
    stopBgm() {
        if (this.bgm) {
            console.log("SoundManager: BGM 페이드 아웃 정지");
            this._fadeOutAndCleanup();
            this.bgm = null;
            this.bgmSource = null;
            this.bgmGain = null;
            this.currentBgmPath = '';
        }
    }

    /**
     * GainNode를 사용하여 부드럽게 볼륨을 올립니다.
     * linearRampToValueAtTime으로 노이즈 없는 전환을 보장합니다.
     * @param {number} targetVolume 목표 볼륨
     */
    _fadeIn(targetVolume) {
        if (!this.bgmGain || !this.audioContext) return;

        const now = this.audioContext.currentTime;
        this.bgmGain.gain.cancelScheduledValues(now);
        this.bgmGain.gain.setValueAtTime(0, now);

        if (targetVolume <= 0) {
            this.bgmGain.gain.setValueAtTime(0, now);
            return;
        }

        this.bgmGain.gain.linearRampToValueAtTime(targetVolume, now + this.fadeInDuration);
    }

    /**
     * 현재 BGM을 페이드 아웃시키고 리소스를 정리합니다.
     */
    _fadeOutAndCleanup() {
        if (!this.bgmGain || !this.audioContext || !this.bgm) return;

        const audio = this.bgm;
        const gainNode = this.bgmGain;
        const source = this.bgmSource;
        const now = this.audioContext.currentTime;

        // onended 핸들러 제거 (반복 재생 방지)
        audio.onended = null;

        // GainNode 페이드 아웃
        gainNode.gain.cancelScheduledValues(now);
        gainNode.gain.setValueAtTime(gainNode.gain.value, now);
        gainNode.gain.linearRampToValueAtTime(0, now + this.fadeOutDuration);

        // 페이드 아웃 완료 후 리소스 정리
        const cleanupDelay = (this.fadeOutDuration + 0.1) * 1000;
        setTimeout(() => {
            audio.pause();
            audio.src = '';
            try {
                source.disconnect();
                gainNode.disconnect();
            } catch (e) { /* 이미 해제됨 */ }
        }, cleanupDelay);
    }

    /**
     * 효과음(SFX)을 1회 재생합니다.
     * @param {string} path 효과음 파일 경로
     */
    playSfx(path) {
        if (this.muted) return;

        const sfx = new Audio(path);
        sfx.volume = this.sfxVolume;
        sfx.play().catch(e => console.log("SoundManager: SFX 재생 실패:", e));
    }

    /**
     * 배경음악의 볼륨을 실시간으로 조절합니다.
     * @param {number} volume 0.0 ~ 1.0 사이의 값
     */
    setBgmVolume(volume) {
        this.bgmVolume = volume;
        localStorage.setItem('bgmVolume', volume);
        if (this.bgmGain && this.audioContext) {
            const now = this.audioContext.currentTime;
            const targetVol = this.muted ? 0 : volume;
            this.bgmGain.gain.cancelScheduledValues(now);
            this.bgmGain.gain.setValueAtTime(this.bgmGain.gain.value, now);
            this.bgmGain.gain.linearRampToValueAtTime(targetVol, now + 0.05);
        }
    }

    /**
     * 효과음의 볼륨을 설정합니다.
     * @param {number} volume 0.0 ~ 1.0 사이의 값
     */
    setSfxVolume(volume) {
        this.sfxVolume = volume;
        localStorage.setItem('sfxVolume', volume);
    }

    /**
     * 전체 소리를 켜거나 끕니다.
     * @param {boolean} muted true면 전체 음소거
     */
    setMuted(muted) {
        this.muted = muted;
        localStorage.setItem('soundMuted', muted);

        if (this.bgmGain && this.audioContext) {
            const now = this.audioContext.currentTime;
            const targetVol = muted ? 0 : this.bgmVolume;
            this.bgmGain.gain.cancelScheduledValues(now);
            this.bgmGain.gain.setValueAtTime(this.bgmGain.gain.value, now);
            this.bgmGain.gain.linearRampToValueAtTime(targetVol, now + 0.05);
        }
    }
}

// 사운드 매니저 전역 인스턴스 생성 및 창(Window) 객체에 등록
const soundManager = new SoundManager();
window.soundManager = soundManager;
