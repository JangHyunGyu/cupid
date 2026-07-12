/**
 * Cupid Sound Manager (사운드 관리자)
 *
 * 오디오 노이즈 완전 제거 설계:
 *   1. fetch()로 오디오 파일 전체를 ArrayBuffer로 다운로드
 *   2. decodeAudioData()로 메모리에 디코딩
 *   3. AudioBufferSourceNode로 메모리에서 직접 재생
 *   → 네트워크 스트리밍 제로. 인터넷 속도와 무관하게 노이즈 없음.
 *
 * GainNode + linearRampToValueAtTime으로 볼륨 전환도 노이즈 없음.
 */
class SoundManager {
    constructor() {
        this.audioContext = null;

        // 현재 재생 중인 BGM
        this.bgmSourceNode = null;   // AudioBufferSourceNode
        this.bgmGain = null;         // GainNode
        this.bgmBuffer = null;       // 현재 재생 중인 AudioBuffer

        // 디코딩된 오디오 버퍼 캐시 (같은 파일 재다운로드 방지)
        this._bufferCache = {};
        // 진행 중인 로딩 Promise 캐시 (중복 fetch 방지)
        this._loadingPromises = {};

        // 볼륨 설정 로드 (시크릿 모드 등 localStorage 차단 환경 대응)
        try {
            const savedSfx = localStorage.getItem('sfxVolume');
            const savedBgm = localStorage.getItem('bgmVolume');
            this.sfxVolume = savedSfx !== null ? parseFloat(savedSfx) : 0.5;
            this.bgmVolume = savedBgm !== null ? parseFloat(savedBgm) : 0.5;
            this.muted = localStorage.getItem('soundMuted') === 'true';
        } catch (e) {
            this.sfxVolume = 0.5;
            this.bgmVolume = 0.5;
            this.muted = false;
        }

        this.isInitialized = false;
        this.currentBgmPath = '';
        this._bgmLoop = true;

        // 페이드 설정 (초 단위)
        this.fadeInDuration = 2;
        this.fadeOutDuration = 2;

        // 사용자 상호작용으로 AudioContext 활성화 여부
        this._unlocked = false;
        this._audioUnavailable = false;
        // 잠금 해제 대기 중인 재생 요청
        this._pendingPlay = null;
    }

    /**
     * AudioContext 생성/resume
     */
    _ensureAudioContext() {
        if (this._audioUnavailable) return null;
        if (!this.audioContext) {
            const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
            if (typeof AudioContextCtor !== 'function') {
                this._audioUnavailable = true;
                console.warn("SoundManager: Web Audio API is unavailable in this browser context.");
                return null;
            }
            try {
                this.audioContext = new AudioContextCtor();
            } catch (e) {
                this._audioUnavailable = true;
                console.warn("SoundManager: AudioContext initialization failed.", e);
                return null;
            }
        }
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume?.().catch(() => {});
        }
        return this.audioContext;
    }

    /**
     * 초기화: 사용자 상호작용 감지하여 AudioContext 잠금 해제
     */
    init() {
        if (this.isInitialized) return;
        console.log("SoundManager: 시스템 초기화 중...");
        this.isInitialized = true;

        const unlock = () => {
            console.log("SoundManager: 사용자 상호작용 감지");
            const ctx = this._ensureAudioContext();
            if (!ctx) {
                window.removeEventListener('click', unlock);
                window.removeEventListener('touchstart', unlock);
                return;
            }

            if (ctx.state === 'running') {
                this._unlocked = true;
                window.removeEventListener('click', unlock);
                window.removeEventListener('touchstart', unlock);
                console.log("SoundManager: AudioContext 잠금 해제 완료");

                // 대기 중인 재생 요청 처리
                if (this._pendingPlay) {
                    const { path, loop } = this._pendingPlay;
                    this._pendingPlay = null;
                    this._startPlayback(path, loop);
                }
            }

            // suspended → running 전환 대기
            ctx.resume?.().then(() => {
                if (!this._unlocked && ctx.state === 'running') {
                    this._unlocked = true;
                    window.removeEventListener('click', unlock);
                    window.removeEventListener('touchstart', unlock);

                    if (this._pendingPlay) {
                        const { path, loop } = this._pendingPlay;
                        this._pendingPlay = null;
                        this._startPlayback(path, loop);
                    }
                }
            });
        };

        window.addEventListener('click', unlock);
        window.addEventListener('touchstart', unlock);
    }

    unlock() {
        return this._ensureAudioContext();
    }

    _sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async _fetchAudioResponse(path) {
        let lastError = null;
        for (let attempt = 0; attempt < 3; attempt++) {
            const separator = path.includes('?') ? '&' : '?';
            const url = attempt === 0 ? path : `${path}${separator}retry=${Date.now()}`;
            try {
                if (attempt > 0) await this._sleep(350 * attempt);
                const response = await fetch(url, {
                    cache: attempt === 0 ? 'default' : 'reload'
                });
                if (response.ok) return response;
                lastError = new Error(`HTTP ${response.status}`);
            } catch (error) {
                lastError = error;
            }
        }
        throw lastError || new Error('Audio load failed');
    }

    /**
     * 오디오 파일을 완전히 다운로드 + 디코딩하여 AudioBuffer로 변환.
     * 캐시하여 같은 파일은 재다운로드하지 않음.
     */
    async _loadBuffer(path) {
        // 이미 캐시에 있으면 즉시 반환
        if (this._bufferCache[path]) {
            return this._bufferCache[path];
        }

        // 이미 로딩 중이면 기존 Promise 반환 (중복 fetch 방지)
        if (this._loadingPromises[path]) {
            return this._loadingPromises[path];
        }

        const ctx = this._ensureAudioContext();
        if (!ctx) return null;

        this._loadingPromises[path] = (async () => {
            try {
                console.log("SoundManager: 오디오 다운로드 시작 ->", path);
                const response = await this._fetchAudioResponse(path);

                const arrayBuffer = await response.arrayBuffer();
                console.log("SoundManager: 다운로드 완료, 디코딩 중 ->", path);

                const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
                console.log("SoundManager: 디코딩 완료 ->", path,
                    `(${audioBuffer.duration.toFixed(1)}초)`);

                // 캐시에 저장
                this._bufferCache[path] = audioBuffer;
                return audioBuffer;
            } catch (e) {
                console.error("SoundManager: 오디오 로드 실패 ->", path, e);
                if (typeof window.__cupidReportCaughtError === 'function') {
                    window.__cupidReportCaughtError(e, {
                        errorType: 'SoundLoadError',
                        source: path || 'sound-manager'
                    });
                } else if (typeof window.__cupidLogRuntimeError === 'function') {
                    window.__cupidLogRuntimeError('SoundLoadError', e?.message, e?.stack || '', path || 'sound-manager');
                }
                return null;
            } finally {
                delete this._loadingPromises[path];
            }
        })();

        return this._loadingPromises[path];
    }

    /**
     * BGM 재생 요청
     */
    async playBgm(path, loop = true, force = false) {
        if (!force && this.currentBgmPath === path && this.bgmSourceNode) return;

        console.log("SoundManager: BGM 재생 요청 ->", path);

        // BGM 갤러리 해금
        const bgmId = path.split('/').pop().replace('.mp3', '').replace('.ogg', '');
        if (window.gameEngine?.galleryManager) {
            window.gameEngine.galleryManager.unlockBGM(bgmId);
        }

        // 기존 BGM 페이드 아웃
        this._fadeOutAndCleanup();

        this.currentBgmPath = path;
        this._bgmLoop = loop;

        // 파일 다운로드 + 디코딩 (완료될 때까지 대기)
        const buffer = await this._loadBuffer(path);
        if (!buffer) return;

        // 다운로드 중 다른 곡으로 전환된 경우 무시
        if (this.currentBgmPath !== path) return;

        // AudioContext가 잠금 상태면 대기
        if (!this._unlocked) {
            console.log("SoundManager: AudioContext 잠금 상태, 사용자 상호작용 대기 중");
            this._pendingPlay = { path, loop };
            return;
        }

        this._startPlayback(path, loop);
    }

    /**
     * 실제 재생 시작 (버퍼 준비 + AudioContext 활성 상태에서만 호출)
     */
    _startPlayback(path, loop) {
        const buffer = this._bufferCache[path];
        if (!buffer) return;

        // 다른 곡으로 전환된 경우 무시
        if (this.currentBgmPath !== path) return;

        const ctx = this._ensureAudioContext();
        if (!ctx) return;

        // AudioBufferSourceNode 생성 (메모리에서 직접 재생)
        const sourceNode = ctx.createBufferSource();
        sourceNode.buffer = buffer;
        sourceNode.loop = loop;

        // GainNode 생성
        const gainNode = ctx.createGain();
        gainNode.gain.value = 0; // 0에서 시작 → 페이드 인

        // 연결: SourceNode → GainNode → Destination
        sourceNode.connect(gainNode);
        gainNode.connect(ctx.destination);

        // 이전 노드 정리
        this._stopCurrentBgm();

        this.bgmSourceNode = sourceNode;
        this.bgmGain = gainNode;
        this.bgmBuffer = buffer;

        // 재생 시작
        sourceNode.start(0);
        console.log("SoundManager: BGM 재생 시작 (메모리 버퍼) ->", path);

        // 페이드 인
        const targetVol = this.muted ? 0 : this.bgmVolume;
        const now = ctx.currentTime;
        gainNode.gain.setValueAtTime(0, now);
        if (targetVol > 0) {
            gainNode.gain.linearRampToValueAtTime(targetVol, now + this.fadeInDuration);
        }

        // 비루프 모드에서 곡 끝나면 이벤트
        if (!loop) {
            sourceNode.onended = () => {
                if (this.bgmSourceNode === sourceNode) {
                    this.bgmSourceNode = null;
                    this.bgmGain = null;
                }
            };
        }
    }

    /**
     * 현재 재생 중인 BGM을 즉시 정지 (페이드 없이)
     */
    _stopCurrentBgm() {
        if (this.bgmSourceNode) {
            try {
                this.bgmSourceNode.onended = null;
                this.bgmSourceNode.stop();
                this.bgmSourceNode.disconnect();
            } catch (e) { /* 이미 정지됨 */ }
        }
        if (this.bgmGain) {
            try { this.bgmGain.disconnect(); } catch (e) {}
        }
        this.bgmSourceNode = null;
        this.bgmGain = null;
    }

    /**
     * BGM 페이드 아웃 후 정지
     */
    stopBgm() {
        if (this.bgmSourceNode || this._pendingPlay) {
            console.log("SoundManager: BGM 페이드 아웃 정지");
            this._fadeOutAndCleanup();
            this.currentBgmPath = '';
            this._pendingPlay = null;
        }
    }

    /**
     * 현재 BGM을 페이드 아웃시키고 정리
     */
    _fadeOutAndCleanup() {
        if (!this.bgmSourceNode || !this.bgmGain || !this.audioContext) {
            this._stopCurrentBgm();
            return;
        }

        const sourceNode = this.bgmSourceNode;
        const gainNode = this.bgmGain;
        const ctx = this.audioContext;
        const now = ctx.currentTime;

        // 현재 참조 해제 (새 BGM이 즉시 설정 가능하도록)
        this.bgmSourceNode = null;
        this.bgmGain = null;

        // 페이드 아웃
        sourceNode.onended = null;
        gainNode.gain.cancelScheduledValues(now);
        gainNode.gain.setValueAtTime(gainNode.gain.value, now);
        gainNode.gain.linearRampToValueAtTime(0, now + this.fadeOutDuration);

        // 페이드 완료 후 정리
        setTimeout(() => {
            try {
                sourceNode.stop();
                sourceNode.disconnect();
                gainNode.disconnect();
            } catch (e) {}
        }, (this.fadeOutDuration + 0.1) * 1000);
    }

    /**
     * 효과음 재생 (메모리 버퍼 방식)
     */
    async playSfx(path) {
        if (this.muted) return;

        const buffer = await this._loadBuffer(path);
        if (!buffer || !this._unlocked) return;

        const ctx = this._ensureAudioContext();
        if (!ctx) return;
        const source = ctx.createBufferSource();
        source.buffer = buffer;

        const gainNode = ctx.createGain();
        gainNode.gain.value = this.sfxVolume;

        source.connect(gainNode);
        gainNode.connect(ctx.destination);
        source.start(0);

        // 재생 완료 후 자동 정리
        source.onended = () => {
            try {
                source.disconnect();
                gainNode.disconnect();
            } catch (e) {}
        };
    }

    /**
     * BGM 볼륨 조절
     */
    setBgmVolume(volume) {
        this.bgmVolume = volume;
        try { localStorage.setItem('bgmVolume', volume); } catch (e) {}
        if (this.bgmGain && this.audioContext) {
            const now = this.audioContext.currentTime;
            const targetVol = this.muted ? 0 : volume;
            this.bgmGain.gain.cancelScheduledValues(now);
            this.bgmGain.gain.setValueAtTime(this.bgmGain.gain.value, now);
            this.bgmGain.gain.linearRampToValueAtTime(targetVol, now + 0.05);
        }
    }

    /**
     * SFX 볼륨 설정
     */
    setSfxVolume(volume) {
        this.sfxVolume = volume;
        try { localStorage.setItem('sfxVolume', volume); } catch (e) {}
    }

    /**
     * 음소거 토글
     */
    setMuted(muted) {
        this.muted = muted;
        try { localStorage.setItem('soundMuted', muted); } catch (e) {}
        if (this.bgmGain && this.audioContext) {
            const now = this.audioContext.currentTime;
            const targetVol = muted ? 0 : this.bgmVolume;
            this.bgmGain.gain.cancelScheduledValues(now);
            this.bgmGain.gain.setValueAtTime(this.bgmGain.gain.value, now);
            this.bgmGain.gain.linearRampToValueAtTime(targetVol, now + 0.05);
        }
    }
}

let soundManager;
try {
    soundManager = new SoundManager();
} catch (e) {
    console.warn('[SoundManager] 초기화 실패, 더미 매니저 사용:', e);
    if (typeof window.__cupidLogRuntimeError === 'function') {
        window.__cupidLogRuntimeError(
            'SoundInitError',
            e?.message || String(e || 'SoundManager init failed'),
            e?.stack || '',
            'sound-manager'
        );
    }
    soundManager = { init() {}, playBgm() {}, stopBgm() {}, playSfx() {}, setBgmVolume() {}, setSfxVolume() {}, setMuted() {}, muted: false, bgmVolume: 0.5, sfxVolume: 0.5, isInitialized: false };
}
window.soundManager = soundManager;
