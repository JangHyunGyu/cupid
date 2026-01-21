/**
 * Cupid Sound Manager (사운드 관리자)
 * 배경음악(BGM)과 효과음(SFX)의 재생, 일시정지, 볼륨 조절을 관리합니다.
 * 최신 브라우저의 오디오 자동 재생 차단 정책(Autoplay Policy)을 처리하는 로직을 포함합니다.
 */
class SoundManager {
    constructor() {
        // 현재 재생 중인 배경음악 Audio 객체
        this.bgm = null;
        
        // 로컬 스토리지에서 저장된 설정값 불러오기 (값이 없으면 기본값 0.5 사용)
        // 0(음소거 상태)도 유효한 값으로 처리하기 위해 직접 null 체크 수행
        const savedSfx = localStorage.getItem('sfxVolume');
        const savedBgm = localStorage.getItem('bgmVolume');
        
        this.sfxVolume = savedSfx !== null ? parseFloat(savedSfx) : 0.5; // 효과음 기본 볼륨
        this.bgmVolume = savedBgm !== null ? parseFloat(savedBgm) : 0.5; // 배경음악 기본 볼륨
        
        // 전체 음소거 여부 체크
        this.muted = localStorage.getItem('soundMuted') === 'true';
        
        // 초기화 완료 여부 플래그
        this.isInitialized = false;
        
        // 현재 재생 시도 중인 배경음악 파일 경로 (중복 재생 방지용)
        this.currentBgmPath = '';

        // 페이드 효과 관련 설정 (크로스페이드 효과를 위해 시간을 늘림)
        this.fadeInDuration = 2000;  // 페이드 인 지속 시간 (2초)
        this.fadeOutDuration = 2000; // 페이드 아웃 지속 시간 (2초)
    }

    /**
     * 사운드 매니저를 초기화합니다.
     * 브라우저의 오디오 차단을 해제하기 위해 전역 클릭/터치 이벤트를 등록합니다.
     */
    init() {
        if (this.isInitialized) return;
        
        console.log("SoundManager: 시스템 초기화 중...");
        this.isInitialized = true;
        
        // [중요] 최신 브라우저는 보안/사용자 경험을 위해 첫 클릭 전까지 소리 재생을 막습니다.
        // 사용자가 화면 어디든 클릭하거나 터치하는 순간, 대기 중이던 배경음악을 재생합니다.
        const unlock = () => {
            console.log("SoundManager: 사용자 상호작용 감지, 오디오 잠금 해제 시도");
            
            if (this.bgm) {
                // 이미 생성된 배경음악 객체가 정지 상태라면 재생 시도
                if (this.bgm.paused && this.currentBgmPath) {
                    this.bgm.play()
                        .then(() => {
                            console.log("SoundManager: 잠금 해제 후 BGM 재생 성공");
                            // 잠금 해제와 동시에 페이드 인 처리
                            this._fadeIn(this.bgm, this.muted ? 0 : this.bgmVolume);
                        })
                        .catch(e => console.error("SoundManager: BGM 재생 실패:", e));
                }
            } else if (this.currentBgmPath) {
                // 파일 경로는 설정되었으나 오디오 객체가 아직 없는 경우 새로 생성 시도
                this.playBgm(this.currentBgmPath);
            }
            
            // 소리가 성공적으로 나오기 시작하면 더 이상 클릭 감시가 필요 없으므로 리스너 제거
            if (this.bgm && !this.bgm.paused) {
                window.removeEventListener('click', unlock);
                window.removeEventListener('touchstart', unlock);
                console.log("SoundManager: 오디오 리스너 제거 완료");
            }
        };

        // 클릭 및 터치 이벤트에 잠금 해제 함수 연결
        window.addEventListener('click', unlock);
        window.addEventListener('touchstart', unlock);
    }
    
    /**
     * 오디오 잠금을 강제로 해제합니다. (SPA 시작 시 호출 가능)
     */
    unlock() {
        const unlockHandler = () => {
            // 빈 소리로 오디오 컨텍스트 활성화
            const dummy = new Audio();
            dummy.play().catch(() => {});
        };
        unlockHandler();
    }

    /**
     * 배경음악을 재생합니다. (페이드 인/아웃 효과 적용)
     * @param {string} path 오디오 파일 경로 (예: 'assets/audio/bgm/intro.mp3')
     * @param {boolean} loop 반복 재생 여부 (기본값 true)
     * @param {boolean} force 같은 곡이라도 강제로 다시 페이드하며 재생할지 여부
     */
    playBgm(path, loop = true, force = false) {
        // [최적화] 이미 같은 곡이 재생 중이라면 무시 (단, force가 true면 다시 페이드하며 재생)
        if (!force && this.currentBgmPath === path && this.bgm && !this.bgm.paused) return;
        
        console.log("SoundManager: BGM 재생 요청 ->", path);
        
        // BGM 갤러리 해금 (파일명에서 ID 추출)
        const bgmId = path.split('/').pop().replace('.mp3', '').replace('.ogg', '');
        if (typeof unlockBGM === 'function') {
            unlockBGM(bgmId);
        }
        
        // 1. 기존 음악이 있다면 페이드 아웃 후 정지
        if (this.bgm) {
            this._fadeOut(this.bgm);
        }

        this.currentBgmPath = path;
        
        // 2. 새로운 오디오 객체 생성
        this.bgm = new Audio(path);
        
        // [변경] 브라우저 기본 loop 대신 onended 이벤트를 활용해 반복 시에도 페이드 효과 적용
        this.bgm.loop = false;
        if (loop) {
            this.bgm.onended = () => {
                console.log("SoundManager: BGM 트랙 종료, 페이드 효과와 함께 반복 진행");
                this.playBgm(path, true, true);
            };
        }
        
        this.bgm.volume = 0; // 0에서 시작하여 페이드 인
        
        // 3. 파일 로드 에러 처리
        this.bgm.onerror = (e) => {
            console.error("SoundManager: 오디오 파일 로드 실패 ->", path, e);
        };

        // 4. 페이드 인 재생 시도
        this._fadeIn(this.bgm, this.muted ? 0 : this.bgmVolume);
    }

    /**
     * 현재 재생 중인 배경음악을 서서히 멈춥니다.
     */
    stopBgm() {
        if (this.bgm) {
            console.log("SoundManager: BGM 페이드 아웃 정지");
            this._fadeOut(this.bgm);
            this.bgm = null;
            this.currentBgmPath = ''; 
        }
    }

    /**
     * 배경음악 볼륨을 서서히 올리는 내부 함수
     */
    _fadeIn(audio, targetVolume) {
        if (!audio || targetVolume <= 0) {
            if (audio) audio.volume = 0;
            audio.play().catch(() => {});
            return;
        }

        audio.volume = 0;
        audio.play().catch(e => {
            console.warn("SoundManager: 자동 재생 차단으로 페이드 인 대기 중");
        });

        const step = targetVolume / (this.fadeInDuration / 50);
        const timer = setInterval(() => {
            if (audio.volume + step < targetVolume) {
                audio.volume += step;
            } else {
                audio.volume = targetVolume;
                clearInterval(timer);
            }
        }, 50);
    }

    /**
     * 배경음악 볼륨을 서서히 낮추고 끄는 내부 함수
     */
    _fadeOut(audio) {
        if (!audio) return;
        
        // 이미 멈춰있거나 볼륨이 0인 경우 처리
        const startVolume = audio.volume;
        if (audio.paused || startVolume <= 0) {
            audio.pause();
            audio.volume = 0;
            return;
        }

        const step = startVolume / (this.fadeOutDuration / 50);
        const timer = setInterval(() => {
            if (audio.volume > step) {
                audio.volume -= step;
            } else {
                audio.volume = 0;
                audio.pause();
                clearInterval(timer);
            }
        }, 50);
    }

    /**
     * 효과음(SFX)을 1회 재생합니다. 배경음악과 별개로 중첩 재생이 가능합니다.
     * @param {string} path 효과음 파일 경로
     */
    playSfx(path) {
        if (this.muted) return; // 전체 음소거 시 무시
        
        const sfx = new Audio(path);
        sfx.volume = this.sfxVolume;
        sfx.play().catch(e => console.log("SoundManager: SFX 재생 실패 (상존하는 제한일 수 있음):", e));
    }

    /**
     * 배경음악의 볼륨을 실시간으로 조절합니다.
     * @param {number} volume 0.0 ~ 1.0 사이의 값
     */
    setBgmVolume(volume) {
        this.bgmVolume = volume;
        localStorage.setItem('bgmVolume', volume); // 브라우저에 저장
        if (this.bgm) {
            // 전체 음소거 상태가 아닐 때만 실제 오디오 객체 볼륨 변경
            this.bgm.volume = this.muted ? 0 : volume;
        }
    }

    /**
     * 효과음의 볼륨을 설정합니다. (다음 재생부터 적용)
     * @param {number} volume 0.0 ~ 1.0 사이의 값
     */
    setSfxVolume(volume) {
        this.sfxVolume = volume;
        localStorage.setItem('sfxVolume', volume); // 브라우저에 저장
    }

    /**
     * 전체 소리를 켜거나 끕니다.
     * @param {boolean} muted true면 전체 음소거
     */
    setMuted(muted) {
        this.muted = muted;
        localStorage.setItem('soundMuted', muted); // 브라우저에 저장
        
        // 배경음악이 재생 중이라면 즉시 적용
        if (this.bgm) {
            this.bgm.volume = muted ? 0 : this.bgmVolume;
        }
    }
}

// 사운드 매니저 전역 인스턴스 생성 및 창(Window) 객체에 등록
const soundManager = new SoundManager();
window.soundManager = soundManager;
