/**
 * ============================================================================
 * SceneRenderer.js - 씬(장면) 렌더링 클래스
 * ============================================================================
 *
 * 게임의 각 장면(씬)을 화면에 그리는 역할을 합니다.
 * 배경 이미지, 캐릭터 배치, 시간 필터(밤/석양) 등을 처리하고,
 * 시나리오 데이터에서 씬을 검색하여 분기 로직을 결정합니다.
 *
 * 【외부 의존성】
 * - config.js      → CHAR_NAME_MAP (캐릭터 이름 매핑), getAssetUrl (에셋 경로 변환)
 * - scenario files  → SCENARIO (시나리오 데이터 전역 객체)
 * - game-loader.js  → GAME_LANG (현재 게임 언어 설정)
 *
 * 【이 파일이 window에 노출하는 것】
 * - window.SceneRenderer → GameEngine에서 new SceneRenderer()로 사용
 */

// ============================================================================================
// 🎬 SceneRenderer 클래스 - 씬(장면) 렌더링
// ============================================================================================
// 📌 게임의 각 장면(씬)을 화면에 그리는 역할을 합니다.
//    배경 이미지, 캐릭터 배치, 시간 필터(밤/석양) 등을 처리합니다.

/**
 * 씬 렌더링 클래스
 *
 * ▶ 역할:
 *   - 시나리오 데이터에서 씬 검색
 *   - 배경 이미지 설정 및 프리로딩
 *   - 캐릭터 이미지 배치 (좌/중앙/우)
 *   - 시간 필터 적용 (night, sunset)
 *   - 분기 조건 처리 (호감도, 플래그 기반)
 */
class SceneRenderer {
    /**
     * @param {StateManager} stateManager - 게임 상태 관리자
     * @param {GalleryManager} galleryManager - 갤러리 관리자
     * @param {UIManager} uiManager - UI 관리자
     */
    constructor(stateManager, galleryManager, uiManager) {
        this.stateManager = stateManager;
        this.galleryManager = galleryManager;
        this.uiManager = uiManager;

        /** 현재 표시 중인 씬 ID */
        this.currentSceneId = "start";

        /** 마지막으로 설정한 배경 URL (중복 로딩 방지용) */
        this.lastBgUrl = "";

        /** 캐릭터 이름 매핑 (공통 상수 참조) */
        this.charNameMap = CHAR_NAME_MAP;
    }

    /**
     * 시나리오에서 씬 데이터 찾기
     *
     * ▶ 검색 순서:
     *   1. 현재 날짜의 시나리오 (SCENARIO[currentDay])
     *   2. 모든 날짜 검색
     *   3. 공통 시나리오 (SCENARIO[0])
     *   4. 루트 레벨 (하위 호환성)
     *
     * @param {string} id - 씬 ID
     * @returns {Object|null} 씬 데이터, 없으면 null
     */
    getScene(id) {
        if (!id) return null;

        // 1. 현재 날짜 시나리오에서 먼저 검색
        if (SCENARIO[this.stateManager.currentDay]?.[id]) {
            return this._applyI18n(SCENARIO[this.stateManager.currentDay][id], id);
        }

        // 2. 모든 날짜 검색 (다른 날짜의 씬으로 점프할 경우)
        for (const day in SCENARIO) {
            if (SCENARIO[day]?.[id]) return this._applyI18n(SCENARIO[day][id], id);
        }

        // 3. 공통 시나리오(0)에서 검색 (날짜 무관한 씬들)
        if (SCENARIO[0]?.[id]) return this._applyI18n(SCENARIO[0][id], id);

        // 4. 루트 레벨 검색 (구버전 호환)
        if (SCENARIO[id]) return this._applyI18n(SCENARIO[id], id);

        return null;
    }

    /**
     * 씬의 _i18n 블록에서 현재 언어 텍스트를 꺼내 최상위 필드로 주입
     *
     * _i18n 블록이 없는 씬(구버전 or 언어 중립 씬)은 그대로 반환.
     *
     * @param {Object} scene - 원본 씬 데이터
     * @returns {Object} 언어 텍스트가 주입된 씬 (원본 불변)
     */
    _applyI18n(scene, id) {
        if (!scene) return scene;

        const lang = window.GAME_LANG || 'ko';
        let i18n = {};

        if (window.I18N_DATA && window.I18N_DATA[id]) {
            i18n = window.I18N_DATA[id];
        } else if (scene._i18n) {
            i18n = scene._i18n[lang] ?? scene._i18n['en'] ?? scene._i18n['ko'] ?? {};
        } else {
            return scene; // No text data found
        }

        const result = { ...scene };

        for (const key of ['name', 'text', 'context', 'personality', 'affinityText']) {
            if (i18n[key] !== undefined) result[key] = i18n[key];
        }

        if (i18n.choices && Array.isArray(result.choices)) {
            result.choices = result.choices.map((choice, idx) => ({
                ...choice,
                text: i18n.choices[idx] ?? choice.text ?? '',
            }));
        }

        return result;
    }

    /**
     * 다음 씬 ID 결정 (분기 로직 처리)
     *
     * ▶ 분기 유형:
     *   1. 호감도 분기 (affinityBranches): 호감도에 따라 다른 씬으로
     *   2. 플래그 분기 (branches): 조건에 따라 다른 씬으로
     *   3. 최고 호감도 분기 (selectByHighestAffinity): 가장 친한 캐릭터로
     *   4. 단순 다음 씬 (next)
     *
     * @param {Object} scene - 현재 씬 데이터
     * @returns {string|null} 다음 씬 ID
     */
    resolveNextScene(scene) {
        if (!scene) return null;

        // 🔀 호감도 분기: 특정 캐릭터의 호감도에 따라 분기
        if (scene.affinityBranches) {
            if (scene.affinityChar) {
                // 단일 캐릭터 호감도 분기
                const currentAff = this.stateManager.getAffinity(scene.affinityChar);
                const sortedBranches = [...scene.affinityBranches]
                    .map((branch, index) => ({ ...branch, _originalIndex: index }))
                    .sort((a, b) => b.minAffinity - a.minAffinity || a._originalIndex - b._originalIndex);
                for (const branch of sortedBranches) {
                    if (currentAff >= branch.minAffinity) return branch.next;
                }
            } else {
                // 다중 캐릭터 호감도 분기: 각 branch의 char별 호감도 비교
                let bestNext = null;
                let bestAffinity = -Infinity;
                for (const branch of scene.affinityBranches) {
                    if (branch.char) {
                        const aff = this.stateManager.getAffinity(branch.char);
                        if (aff >= (branch.minAffinity || 0) && aff > bestAffinity) {
                            bestAffinity = aff;
                            bestNext = branch.next;
                        }
                    }
                }
                if (bestNext) return bestNext;
            }
        }

        // 🔀 branches 분기: 플래그 조건에 따라 분기
        if (scene.branches && Array.isArray(scene.branches)) {
            // 최고 호감도 캐릭터 선택 분기
            if (scene.selectByHighestAffinity) {
                // condition 플래그 필터링: condition이 있으면 해당 플래그가 true여야 후보에 포함
                const eligibleBranches = scene.branches.filter(branch =>
                    !branch.condition || this.stateManager.getFlag(branch.condition)
                );

                let winnerNext = null;
                let maxAffinity = -999;
                let metAnyone = false;

                for (const branch of eligibleBranches) {
                    const metFlag = "met_" + (branch.character || "").toLowerCase();
                    // 만난 적 있는 캐릭터만 후보에 포함
                    if (this.stateManager.getFlag(metFlag) && branch.character) {
                        metAnyone = true;
                        const currentAff = this.stateManager.getAffinity(branch.character);
                        if (currentAff > maxAffinity) {
                            maxAffinity = currentAff;
                            winnerNext = branch.next;
                        }
                    }
                }
                if (metAnyone) return winnerNext;
            }

            // 일반 조건 분기
            for (const branch of scene.branches) {
                // condition이 있으면 그 플래그가 true여야 함
                if (branch.condition && !this.stateManager.getFlag(branch.condition)) continue;
                // excludeCondition이 있으면 그 플래그가 false여야 함
                if (branch.excludeCondition && this.stateManager.getFlag(branch.excludeCondition)) continue;
                return branch.next;
            }
        }

        // 분기 없으면 단순히 next 반환
        if (!scene.next) {
            console.error(`[SceneRenderer] next가 정의되지 않은 씬:`, scene);
        }
        return scene.next || null;
    }

    /**
     * 배경 이미지 설정
     * - 이미지를 프리로드한 후 화면에 적용 (깜빡임 방지)
     * - CG 이미지면 갤러리에 해금 기록
     *
     * @param {string} bgPath - 배경 이미지 경로
     */
    async setBackground(bgPath) {
        if (!bgPath) return;

        const bgUrl = getAssetUrl(bgPath);
        this.lastBgUrl = bgUrl;

        // CG 해금 체크 (파일명으로 판단)
        const cgFileName = bgPath.split('/').pop().replace(/\.(png|jpg|jpeg|webp)$/i, '');
        this.galleryManager.unlockCG(cgFileName);

        const bgLayer = this.uiManager.bgLayer;
        const currentBg = bgLayer.style.backgroundImage;

        // 이미지 프리로드
        await new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = bgUrl;
        });

        if (this.lastBgUrl !== bgUrl) return;

        // 첫 배경이거나 같은 배경이면 즉시 적용
        if (!currentBg || currentBg === 'none' || currentBg === `url("${bgUrl}")` || currentBg === `url(${bgUrl})`) {
            bgLayer.style.backgroundImage = `url(${bgUrl})`;
            return;
        }

        // 크로스페이드: ::after에 새 배경을 설정하고 페이드인
        // CSS 변수는 style.css 기준으로 URL이 해석되므로 절대 URL로 변환
        const absoluteBgUrl = new URL(bgUrl, document.baseURI).href;
        bgLayer.style.setProperty('--bg-next', `url(${absoluteBgUrl})`);
        bgLayer.classList.remove('bg-crossfade');
        // ::after에 background-image 설정
        bgLayer.style.cssText = bgLayer.style.cssText; // force reflow
        void bgLayer.offsetWidth; // force reflow
        bgLayer.classList.add('bg-crossfade');

        // 페이드 완료 후 메인 배경으로 교체
        await new Promise(r => setTimeout(r, 420));
        if (this.lastBgUrl === bgUrl) {
            bgLayer.style.backgroundImage = `url(${bgUrl})`;
            bgLayer.classList.remove('bg-crossfade');
        }
    }

    /**
     * 시간 필터 적용 (밤/석양 효과)
     * - CSS 클래스로 배경에 색상 오버레이 적용
     *
     * @param {boolean} night - 밤 효과 여부
     * @param {boolean} sunset - 석양 효과 여부
     */
    setTimeFilter(night, sunset) {
        this.uiManager.bgLayer.classList.remove('night', 'sunset');
        if (night) this.uiManager.bgLayer.classList.add('night');
        else if (sunset) this.uiManager.bgLayer.classList.add('sunset');
    }

    /**
     * 캐릭터 이미지 업데이트
     *
     * ▶ 처리 과정:
     *   1. 씬 데이터에서 캐릭터 정보 파싱
     *   2. 변경된 슬롯만 파악
     *   3. 새 이미지 프리로드
     *   4. 화면에 적용
     *
     * @param {Object} scene - 씬 데이터
     * @param {string} sceneId - 씬 ID (씬 전환 체크용)
     */
    async updateCharacters(scene, sceneId) {
        // 캐릭터 정보가 없으면 리턴 (이전 캐릭터 유지)
        if (!scene.hasOwnProperty('characters') && !scene.hasOwnProperty('character')) return;

        const newCharMap = {};     // 슬롯별 새 이미지 URL
        const charOptions = {};    // 슬롯별 옵션 (투명도 등)

        // 씬 데이터 파싱
        if (scene.characters) {
            // 다중 캐릭터: { left: "url", center: {src: "url", opacity: 0.5}, ... }
            Object.entries(scene.characters).forEach(([pos, value]) => {
                const posKey = pos.toLowerCase();
                if (typeof value === 'object' && value?.src) {
                    // 객체 형태: {src, opacity}
                    newCharMap[posKey] = getAssetUrl(value.src);
                    charOptions[posKey] = { opacity: value.opacity ?? 1 };
                } else {
                    // 문자열: 단순 URL
                    newCharMap[posKey] = getAssetUrl(value);
                    charOptions[posKey] = { opacity: 1 };
                }
            });
        } else if (scene.character) {
            // 단일 캐릭터: 중앙에 배치
            newCharMap['center'] = getAssetUrl(scene.character);
            charOptions['center'] = { opacity: 1 };
        }

        // 변경 필요한 슬롯 확인
        const changedSlots = [];
        Object.entries(this.uiManager.charSlots).forEach(([pos, slot]) => {
            if (!slot) return;
            const existingImg = slot.querySelector('img');
            const newUrl = newCharMap[pos];

            if (existingImg) {
                if (!newUrl || existingImg.dataset.rawSrc !== newUrl) changedSlots.push(pos);
            } else {
                if (newUrl) changedSlots.push(pos);
            }
        });

        if (changedSlots.length === 0) {
            // 이미지 변경 없어도 silhouette/thinking 상태는 업데이트
            Object.entries(this.uiManager.charSlots).forEach(([pos, slot]) => {
                if (!slot) return;
                const img = slot.querySelector('img');
                if (!img) return;
                if (scene.silhouette) img.classList.add('silhouette');
                else img.classList.remove('silhouette');
                if (scene.thinking) img.classList.add('thinking');
                else img.classList.remove('thinking');
            });
            return;
        }

        // 이미지 프리로드
        const charPromises = Object.entries(newCharMap)
            .filter(([pos]) => changedSlots.includes(pos))
            .map(([pos, charUrl]) => {
                return new Promise((resolve) => {
                    const img = document.createElement('img');
                    img.onload = () => {
                        img.dataset.rawSrc = charUrl;
                        const options = charOptions[pos] || { opacity: 1 };
                        if (options.opacity !== 1) img.style.opacity = options.opacity;
                        resolve({ pos, img, sceneId });
                    };
                    img.onerror = () => resolve(null);
                    img.src = charUrl;
                    if (scene.silhouette) img.classList.add('silhouette');
                    if (scene.thinking) img.classList.add('thinking');
                    img.classList.add('char-breathing');
                });
            });

        const loadedChars = await Promise.all(charPromises);
        if (this.currentSceneId !== sceneId) return;

        // 캐릭터 이름 프리픽스 추출 (seyoun_normal.png → seyoun)
        const getCharPrefix = (src) => {
            if (!src) return null;
            const filename = src.split('/').pop().replace(/\.(png|jpg|jpeg|webp)$/i, '');
            return filename.split('_')[0];
        };

        // 퇴장 캐릭터 페이드아웃
        const exitPromises = [];
        Object.keys(this.uiManager.charSlots).forEach(pos => {
            if (!newCharMap[pos] && changedSlots.includes(pos)) {
                const slot = this.uiManager.charSlots[pos];
                if (!slot) return;
                const oldImg = slot.querySelector('img');
                if (oldImg) {
                    oldImg.classList.add('char-fade-out');
                    exitPromises.push(new Promise(r => setTimeout(() => {
                        if (slot.contains(oldImg)) slot.removeChild(oldImg);
                        r();
                    }, 260)));
                }
            }
        });

        // 교체 캐릭터 처리
        const swapPromises = [];
        loadedChars.forEach(result => {
            if (!result || !this.uiManager.charSlots[result.pos]) return;
            const slot = this.uiManager.charSlots[result.pos];
            const oldImg = slot.querySelector('img');
            const oldPrefix = oldImg ? getCharPrefix(oldImg.dataset.rawSrc) : null;
            const newPrefix = getCharPrefix(result.img.dataset.rawSrc);
            const sameChar = oldPrefix && newPrefix && oldPrefix === newPrefix;

            if (sameChar) {
                // 같은 캐릭터 표정 변화 → 즉시 교체
                if (oldImg) {
                    if (slot.contains(oldImg)) slot.removeChild(oldImg);
                }
                slot.appendChild(result.img);
            } else if (oldImg) {
                // 다른 캐릭터 → 페이드아웃 후 페이드인
                oldImg.classList.add('char-fade-out');
                swapPromises.push(new Promise(r => setTimeout(() => {
                    if (slot.contains(oldImg)) slot.removeChild(oldImg);
                    result.img.classList.add('char-fade-in');
                    slot.appendChild(result.img);
                    void result.img.offsetWidth;
                    result.img.classList.remove('char-fade-in');
                    r();
                }, 280)));
            } else {
                // 새 등장 → 페이드인
                result.img.classList.add('char-fade-in');
                slot.appendChild(result.img);
                void result.img.offsetWidth;
                result.img.classList.remove('char-fade-in');
            }
        });

        await Promise.all([...exitPromises, ...swapPromises]);
    }
    // ============================================================================================
    // 🚩 연락처 합성 플래그 계산
    // ============================================================================================
    // 📌 여러 개의 기본 플래그를 조합해서
    //    시나리오에서 쓰기 좋은 단일 플래그를 생성합니다.
    //    예: has_any_contact = 서연/유나/다인/선생님 중 누구라도 연락처가 있음
    updateCompositeFlags() {
        const contactFlags = [
            "has_number_seyoun",
            "has_number_yuna",
            "has_number_dain",
            "has_number_nurse",
            "has_number_teacher"
        ];

        // 하나라도 true면 has_any_contact = true
        const hasAnyContact = contactFlags.some(
            flag => this.stateManager.getFlag(flag)
        );

        if (hasAnyContact) {
            this.stateManager.setFlag("has_any_contact");
        }
    }

    /**
     * 씬의 플래그/날짜 변경 처리
     * @param {Object} scene - 씬 데이터
     */
    processSceneFlags(scene) {
        // 플래그 초기화 (false로 설정)
        if (scene.clearFlags?.length) scene.clearFlags.forEach(flag => this.stateManager.setFlag(flag, false));
        // 단일 플래그 설정
        if (scene.setFlag) this.stateManager.setFlag(scene.setFlag);
        // 복수 플래그 설정
        if (scene.setFlags?.length) scene.setFlags.forEach(flag => this.stateManager.setFlag(flag));
        // 날짜 변경
        if (scene.changeDay) this.stateManager.setDay(scene.changeDay);
    }

    /**
     * 씬의 스탯(호감도) 변화 처리
     * @param {Object} scene - 씬 데이터
     */
    processSceneStats(scene) {
        if (!scene.stats) return;

        // { Seoyeon: { affinity: 10 }, ... } 또는 { Seoyeon: 10, ... } 형태 모두 지원
        for (const [char, stats] of Object.entries(scene.stats)) {
            const charKey = this.charNameMap[char] || char;
            // 숫자 직접 지정(예: { Seoyeon: 3 }) 또는 객체 지정(예: { Seoyeon: { affinity: 3 } }) 모두 처리
            const affinityChange = typeof stats === 'number' ? stats : stats?.affinity;
            if (affinityChange && this.stateManager.stats[charKey]) {
                const newValue = this.stateManager.changeAffinity(charKey, affinityChange);
                this.uiManager.showAffinityChange(affinityChange, charKey);
                this.galleryManager.updateMaxAffinity(charKey, newValue);
                this.galleryManager.checkAffinityUnlock(charKey, newValue);
            }
        }
    }

    /**
     * 현재 렌더링 상태 내보내기 (저장용)
     * @returns {Object} 현재 화면 상태 {sceneId, bgUrl, characters}
     */
    exportRenderState() {
        // 현재 표시된 캐릭터들 수집
        const currentCharacters = {};
        for (const [slot, el] of Object.entries(this.uiManager.charSlots)) {
            const img = el?.querySelector('img');
            if (img && img.src) currentCharacters[slot] = img.src;
        }

        return {
            sceneId: this.currentSceneId,
            bgUrl: this.lastBgUrl,
            characters: currentCharacters
        };
    }
}

window.SceneRenderer = SceneRenderer;
