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
// WebP 지원 감지 (1회만 실행)
const _webpSupport = (() => {
    try {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        return canvas.toDataURL('image/webp').startsWith('data:image/webp');
    } catch (e) {
        return false;
    }
})();

/**
 * 이미지 URL을 WebP로 변환 (지원 시). PNG/JPG → WebP 폴백 로딩.
 * @param {string} url - 원본 이미지 URL
 * @returns {string} WebP URL (지원 시) 또는 원본 URL
 */
function toWebpUrl(url) {
    if (!_webpSupport || !url) return url;
    const text = String(url);
    if (text.indexOf('/api/media?') !== -1) {
        return text.replace(/\.(png|jpeg|jpg)(?=(&|$))/i, '.webp');
    }
    if (/(?:^|\/)assets\/images\/background\/[^/?#]+\.png(?=[?#]|$)/i.test(text)) {
        return text.replace(/\.png(?=[?#]|$)/i, '.lossless.webp');
    }
    return text.replace(/\.(png|jpg|jpeg)(?=[?#]|$)/i, '.webp');
}

/**
 * WebP 우선 로딩 + PNG 폴백
 * @param {HTMLImageElement} img - 이미지 엘리먼트
 * @param {string} url - 원본 이미지 URL (.png)
 * @param {Function} onload - 로드 성공 콜백
 * @param {Function} onerror - 로드 실패 콜백
 */
function loadImageWithFallback(img, url, onload, onerror) {
    const text = String(url || '');
    const stripQuery = (u) => String(u || '').split('?')[0];
    const pathOnly = stripQuery(text).replace(/^https?:\/\/[^/]+\//, '');
    const protectedPath = window.CupidMedia?.isProtectedPath?.(pathOnly) || window.CupidMedia?.isProtectedPath?.(text);
    if ((text.indexOf('/api/media?') !== -1 || protectedPath) && window.CupidMedia?.loadImageWithMediaFallback) {
        const source = text.indexOf('/api/media?') !== -1 ? text : (pathOnly || text);
        window.CupidMedia.loadImageWithMediaFallback(img, source, onload, onerror);
        return;
    }
    const webpUrl = toWebpUrl(url);
    if (webpUrl !== url) {
        img.onerror = () => {
            img.onerror = onerror || null;
            img.onload = onload || null;
            img.src = url;
        };
        img.onload = onload || null;
        img.src = webpUrl;
    } else {
        img.onload = onload || null;
        img.onerror = onerror || null;
        img.src = url;
    }
}

const BACKGROUND_LAYOUT_CLASS_PREFIX = 'bg-layout-';
const BACKGROUND_LAYOUT_CLASSES = {
    sojeong_flashback: 'bg-layout-sojeong-flashback-contain',
    ending_harem: 'bg-layout-full-art'
};
const FORCED_SEXUAL_VIOLATION_CHARACTER_IDS = Object.freeze({
    Seoyeon: 'seoyeon',
    Yuna: 'yuna',
    Dain: 'dain',
    Teacher: 'teacher',
    Nurse: 'nurse',
    Haeun: 'haeun'
});

// 2026-10-15 Day 2~3 중복 지문·이동 브릿지 정리로 지운 장면 ID -> 이어서 보여 줄 장면 ID
// 예전 세이브(currentSceneId, 마지막으로 본 장면 ID)가 지운 장면을 가리켜도 같은 흐름으로 이어 붙이는 용도
const REMOVED_SCENE_REDIRECTS = Object.freeze({
    morning2_greet_dain_others_2: 'morning2_yuna_seen',
    morning2_note_3: 'morning2_seo_1',
    morning2_dain_react_2: 'morning2_dain_react_3',
    morning2_break_1: 'morning2_seo_dust_1',
    morning2_end: 'lunch2_start',
    lunch2_dain_10: 'lunch2_dain_11',
    lunch2_dain_13_b: 'lunch2_dain_choice',
    lunch2_dain_end_h: 'lunch2_dain_end_i',
    lunch2_dain_end_ins8_first: 'lunch2_dain_end_i',
    lunch2_dain_end_k: 'lunch2_dain_end_l',
    lunch2_dain_end_b2: 'lunch2_dain_end_c2',
    lunch2_dain_end_d2: 'after2_start',
    lunch2_dain_end_nurse_short2: 'after2_start',
    lunch2_dain_end_nurse_short3: 'after2_start',
    lunch2_yuna_c1_14: 'lunch2_yuna_end',
    after2_dain_11b: 'after2_dain_12',
    after2_dain_end_first: 'after2_dain_end_b',
    after2_dain_return: 'after2_group_dain_companion',
    after2_seo_return: 'after2_group_seoyeon_companion',
    after2_yuna_return: 'after2_group_yuna_companion',
    hidden_nurse_d2_return: 'after2_choice',
    morning3_date_intro: 'morning3_date_intro_b',
    morning3_date_seo_accept_b: 'morning3_date_dain_1',
    morning3_date_seo_decline_b: 'morning3_date_dain_1',
    morning3_date_dain_decline_inner_2: 'morning3_date_yuna_1',
    hidden_homeroom_d3_4_e: 'hidden_homeroom_d3_4_g',
    hidden_homeroom_d3_4_f: 'hidden_homeroom_d3_4_g',
    hidden_homeroom_d3_4_h: 'hidden_homeroom_d3_choice',
    hidden_nurse_d3_5_l: 'hidden_nurse_d3_5_m',
    hidden_nurse_d3_8_b: 'hidden_nurse_d3_8_c',
    hidden_nurse_d3_8_g: 'hidden_nurse_d3_8_h',
    hidden_nurse_d3_9_e: 'hidden_nurse_d3_9_f',
    lunch3_meal_8: 'lunch3_meal_10',
    lunch3_meal_11: 'lunch3_choice',
    lunch3_seo_focus_1: 'lunch3_seo_focus_2',
    lunch3_expose_15: 'lunch3_expose_choice',
    after3_reject_for_dain_2b: 'after3_reject_for_dain_3',
    after3_reject_for_dain_3b: 'after3_rival_yuna_done',
    after3_reject_for_yuna_walk_gym: 'after3_reject_for_yuna_3',
    haeun_warn_2b: 'haeun_warn_3',
    haeun_warn_7_b: 'haeun_warn_7_c',
    night3_cheat_msg_1: 'night3_cheat_msg_2',
    night3_cheat_reflect_3_b: 'night3_cheat_reflect_3_c'
});

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
        this.cgTransition = window.CGTransition ? new window.CGTransition(
            [uiManager.bgLayer, document.getElementById('character-layer')], uiManager.dialogueBox
        ) : null;
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

        // 5. 정리 과정에서 지운 장면이면 대체 장면으로 이어 붙임
        const aliasId = this.resolveSceneAlias(id);
        if (aliasId !== id) return this.getScene(aliasId);

        return null;
    }

    /**
     * 지운 장면 ID를 현재 시나리오의 대체 장면 ID로 변환
     * 입력: 장면 ID -> REMOVED_SCENE_REDIRECTS를 끝까지 따라감 -> 대체 ID, 지운 장면이 아니면 입력 그대로
     * 표가 순환하면 원래 ID를 반환해 무한 루프 방지
     * @param {string} id - 장면 ID
     * @returns {string} 실제로 렌더링할 장면 ID
     */
    resolveSceneAlias(id) {
        let current = id;
        const seen = new Set();
        while (typeof current === 'string' && Object.prototype.hasOwnProperty.call(REMOVED_SCENE_REDIRECTS, current)) {
            if (seen.has(current)) return id;
            seen.add(current);
            current = REMOVED_SCENE_REDIRECTS[current];
        }
        return current;
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
        if (scene.__sourceFile) {
            Object.defineProperty(result, '__sourceFile', { value: scene.__sourceFile, enumerable: false });
        }

        for (const key of [
            'name',
            'text',
            'precedingHistory',
            'context',
            'personality',
            'affinityText',
            'buttonText',
            'groupLocation',
            'groupChoiceState',
            'groupAftermathCause',
            'companionTexts'
        ]) {
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
     * 호감도 라우팅에서 사용할 현재 값을 계산한다.
     * selectByHighestAffinity는 명시된 후보 중 가장 높은 실시간 호감도를 사용한다.
     */
    getRoutingAffinity(affinityChar, affinityCandidates = []) {
        if (affinityChar !== 'selectByHighestAffinity') {
            return this.stateManager.getAffinity(affinityChar);
        }

        const candidates = Array.isArray(affinityCandidates) && affinityCandidates.length > 0
            ? affinityCandidates
            : ['Seoyeon', 'Yuna', 'Dain', 'Teacher', 'Nurse'];
        return Math.max(...candidates.map(character => this.stateManager.getAffinity(character)));
    }

    /**
     * 장면 진입 전에 현재 호감도를 다시 확인한다.
     * 약속/루트 플래그가 남아 있어도 관계가 기준 아래로 내려갔다면 전용 장면으로 보낸다.
     */
    resolveAffinityGuard(scene) {
        const guard = scene?.affinityGuard;
        if (!guard?.character || !guard?.fallback) return null;

        const minAffinity = Number(guard.minAffinity);
        if (!Number.isFinite(minAffinity)) return null;
        const currentAffinity = this.stateManager.getAffinity(guard.character);
        return currentAffinity < minAffinity ? guard.fallback : null;
    }

    /**
     * 다음 씬 ID 결정 (분기 로직 처리)
     *
     * ▶ 분기 유형:
     *   1. 라이벌 분기 (rankedRivalBranches): 최소 호감도를 넘긴 실제 최고 호감도 라이벌로
     *   2. 호감도 분기 (affinityBranches): 호감도에 따라 다른 씬으로
     *   3. 플래그 분기 (branches): 조건에 따라 다른 씬으로
     *   4. 최고 호감도 분기 (selectByHighestAffinity): 가장 친한 캐릭터로
     *   5. 단순 다음 씬 (next)
     *
     * @param {Object} scene - 현재 씬 데이터
     * @returns {string|null} 다음 씬 ID
     */
    resolveNextScene(scene) {
        if (!scene) return null;

        const forcedViolation = this.stateManager.getFlag('forced_sexual_violation');
        if (scene.forcedSexualViolationResume === true) {
            return typeof forcedViolation?.returnScene === 'string' && forcedViolation.returnScene
                ? forcedViolation.returnScene
                : null;
        }

        if (scene.type === 'free_talk'
            && forcedViolation
            && typeof forcedViolation === 'object'
            && forcedViolation.handled !== true
            && forcedViolation.sceneId === this.currentSceneId) {
            const violationDay = Number(forcedViolation.day ?? this.stateManager.currentDay);
            const characterId = FORCED_SEXUAL_VIOLATION_CHARACTER_IDS[forcedViolation.character];
            const aftermathRoute = Number.isInteger(violationDay)
                && violationDay >= 1
                && violationDay <= 5
                && characterId
                ? `forced_violation_day${violationDay}_after_${characterId}`
                : null;
            const forcedReturnScene = typeof scene.forcedSexualViolationNext === 'string'
                && scene.forcedSexualViolationNext
                ? scene.forcedSexualViolationNext
                : scene.next;
            if (aftermathRoute && forcedReturnScene) {
                this.stateManager.setFlag('forced_sexual_violation', {
                    ...forcedViolation,
                    handled: true,
                    returnScene: forcedReturnScene
                });
                return aftermathRoute;
            }
        }

        // 실시간 라이벌 분기: 최소 호감도를 넘긴 최고 호감도 라이벌 선택
        if (Array.isArray(scene.rankedRivalBranches) && scene.rankedRivalBranches.length > 0) {
            const minRivalAffinity = Number(scene.minRivalAffinity ?? -100);
            const rankedRivals = scene.rankedRivalBranches
                .filter(branch => branch.character && branch.next)
                .map((branch, index) => ({
                    ...branch,
                    affinity: this.stateManager.getAffinity(branch.character),
                    _originalIndex: index
                }))
                .sort((a, b) => b.affinity - a.affinity || a._originalIndex - b._originalIndex);

            if (scene.randomTieFlag && rankedRivals.length > 0) {
                const saved = this.stateManager.getFlag(scene.randomTieFlag);
                const remembered = rankedRivals.find(branch => branch.character === saved);
                if (remembered) return remembered.next;
                const tied = rankedRivals.filter(branch => branch.affinity === rankedRivals[0].affinity);
                const chosen = tied[Math.floor(Math.random() * tied.length)];
                if (chosen.affinity >= minRivalAffinity) {
                    this.stateManager.setFlag(scene.randomTieFlag, chosen.character);
                    return chosen.next;
                }
            }

            const strongestRival = rankedRivals[0];
            const rivalIsEligible = strongestRival && strongestRival.affinity >= minRivalAffinity;
            if (rivalIsEligible) return strongestRival.next;
            if (scene.rankedRivalFallback) return scene.rankedRivalFallback;
        }

        // 🔀 호감도 분기: 특정 캐릭터의 호감도에 따라 분기
        if (scene.affinityBranches) {
            if (scene.affinityChar) {
                // 단일 캐릭터 호감도 분기
                const currentAff = this.getRoutingAffinity(scene.affinityChar, scene.affinityCandidates);
                const sortedBranches = [...scene.affinityBranches]
                    .map((branch, index) => ({ ...branch, _originalIndex: index }))
                    .sort((a, b) => b.minAffinity - a.minAffinity || a._originalIndex - b._originalIndex);
                for (const branch of sortedBranches) {
                    if (currentAff >= branch.minAffinity) return branch.next;
                }
            } else {
                // 다중 캐릭터 호감도 분기: 각 branch의 char별 호감도 비교 (동률 시 랜덤)
                let bestCandidates = [];
                let bestAffinity = -Infinity;
                for (const branch of scene.affinityBranches) {
                    if (branch.char) {
                        const aff = this.stateManager.getAffinity(branch.char);
                        if (aff >= (branch.minAffinity || 0)) {
                            if (aff > bestAffinity) {
                                bestAffinity = aff;
                                bestCandidates = [branch.next];
                            } else if (aff === bestAffinity) {
                                bestCandidates.push(branch.next);
                            }
                        }
                    }
                }
                if (bestCandidates.length === 1) return bestCandidates[0];
                if (bestCandidates.length > 1) return bestCandidates[Math.floor(Math.random() * bestCandidates.length)];
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
            window.reportCupidCaughtError?.(new Error(`Scene has no next: ${scene.id || scene.nodeId || 'unknown'}`), {
                source: 'cupid-scene-renderer',
                errorType: 'scene_next_missing',
                sessionId: scene.id || scene.nodeId || '',
                context: {
                    sceneId: scene.id || scene.nodeId || '',
                    sceneType: scene.type || '',
                    hasChoices: Array.isArray(scene.choices) && scene.choices.length > 0,
                    hasBranches: Array.isArray(scene.branches) && scene.branches.length > 0
                }
            });
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
    async setBackground(bgPath, { instant = false } = {}) {
        if (!bgPath) return;

        const cgFileName = bgPath.split(/[?#]/)[0].split('/').pop().replace(/\.(png|jpg|jpeg|webp)$/i, '');
        const isCG = typeof REGISTERED_CG_IDS !== 'undefined' && REGISTERED_CG_IDS.has(cgFileName);
        const transition = this.cgTransition?.prepare(cgFileName, isCG, instant);
        const requestId = this._backgroundRequestId = (this._backgroundRequestId ?? 0) + 1;
        try {
        this.galleryManager.unlockCG(cgFileName);
        try { await window.CupidMedia?.unlockCG?.(cgFileName); } catch (_) {}
        if (requestId !== this._backgroundRequestId) return;

        const bgUrl = (window.CupidMedia?.isProtectedPath?.(bgPath))
            ? window.CupidMedia.resolveUrl(bgPath)
            : getAssetUrl(bgPath);
        this.lastBgUrl = bgUrl;

        const bgLayer = this.uiManager.bgLayer;
        const layoutClasses = [...bgLayer.classList]
            .filter(className => className.startsWith(BACKGROUND_LAYOUT_CLASS_PREFIX));
        if (layoutClasses.length) bgLayer.classList.remove(...layoutClasses);
        if (BACKGROUND_LAYOUT_CLASSES[cgFileName]) {
            bgLayer.classList.add(BACKGROUND_LAYOUT_CLASSES[cgFileName]);
        }

        const currentBg = bgLayer.style.backgroundImage;

        // 이미지 프리로드 (WebP 우선 + PNG 폴백)
        const displayBgUrl = await new Promise((resolve) => {
            const img = new Image();
            loadImageWithFallback(img, bgUrl, () => resolve(img.src), () => resolve(null));
        });

        if (requestId !== this._backgroundRequestId || !displayBgUrl) return;
        this.cgTransition?.commit(cgFileName, isCG);

        if (transition || instant) {
            bgLayer.classList.remove('bg-crossfade', 'bg-crossfade-slow', 'bg-crossfade-long');
            bgLayer.style.removeProperty('--bg-next');
            bgLayer.style.backgroundImage = `url("${displayBgUrl}")`;
            if (transition) await this.cgTransition.reveal(transition);
            return;
        }

        // 첫 배경이거나 같은 배경이면 즉시 적용
        if (!currentBg || currentBg === 'none' || currentBg === `url("${displayBgUrl}")` || currentBg === `url(${displayBgUrl})` || currentBg === `url("${bgUrl}")` || currentBg === `url(${bgUrl})`) {
            bgLayer.style.backgroundImage = `url(${displayBgUrl})`;
            return;
        }

        // 엔딩 CG 여부 판별 (느린 페이드인 적용)
        const isHandoff = bgPath.includes('nurse_bedroom_pills') || bgPath.includes('riin_lab_pills');
        const isEndingCG = bgPath.includes('ending_');
        const fadeClass = isHandoff ? 'bg-crossfade-long' : (isEndingCG ? 'bg-crossfade-slow' : 'bg-crossfade');
        const fadeDuration = isHandoff ? 1800 : (isEndingCG ? 2100 : 420);
        if (isHandoff && !document.getElementById('cupid-long-fade')) {
            const style = document.createElement('style');
            style.id = 'cupid-long-fade';
            style.textContent = '#background-layer.bg-crossfade-long::after{transition:opacity 1.8s ease-in-out;opacity:1}';
            document.head.appendChild(style);
        }

        // 크로스페이드: ::after에 새 배경을 설정하고 페이드인
        // CSS 변수는 style.css 기준으로 URL이 해석되므로 절대 URL로 변환
        const absoluteBgUrl = new URL(displayBgUrl, document.baseURI).href;
        bgLayer.style.setProperty('--bg-next', `url(${absoluteBgUrl})`);
        bgLayer.classList.remove('bg-crossfade', 'bg-crossfade-slow', 'bg-crossfade-long');
        // ::after에 background-image 설정
        bgLayer.style.cssText = bgLayer.style.cssText; // force reflow
        void bgLayer.offsetWidth; // force reflow
        bgLayer.classList.add(fadeClass);

        // 페이드 완료 후 메인 배경으로 교체
        await new Promise(r => setTimeout(r, fadeDuration));
        if (this.lastBgUrl === bgUrl) {
            bgLayer.style.backgroundImage = `url(${displayBgUrl})`;
            bgLayer.classList.remove('bg-crossfade', 'bg-crossfade-slow', 'bg-crossfade-long');
            bgLayer.style.removeProperty('--bg-next');
        }
        } finally {
            if (transition && this.cgTransition?.active === transition) this.cgTransition.cancel();
        }
    }

    /**
     * 시간 필터 적용 (밤/석양 효과)
     * - CSS 클래스로 배경에 색상 오버레이 적용
     *
     * @param {boolean} night - 밤 효과 여부
     * @param {boolean} sunset - 석양 효과 여부
     */
    setTimeFilter(night, sunset, variant = null) {
        const bgLayer = this.uiManager.bgLayer;
        const variantClasses = Array.from(bgLayer.classList)
            .filter(className => className.startsWith('bg-variant-'));
        bgLayer.classList.remove('night', 'sunset', ...variantClasses);
        if (night) this.uiManager.bgLayer.classList.add('night');
        else if (sunset) this.uiManager.bgLayer.classList.add('sunset');

        if (typeof variant === 'string' && /^[a-z0-9_-]+$/i.test(variant)) {
            bgLayer.classList.add(`bg-variant-${variant.toLowerCase()}`);
        }
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
        if (
            !scene.hasOwnProperty('characters')
            && !scene.hasOwnProperty('character')
            && !(
                scene.background
                && typeof REGISTERED_CG_IDS !== 'undefined'
                && REGISTERED_CG_IDS.has(
                    scene.background.split('/').pop().replace(/\.(png|jpg|jpeg|webp)$/i, '')
                )
            )
        ) {
            this.syncPresentation(scene);
            return;
        }

        // 호출 ID로 이전 비동기 작업 무효화
        const backgroundId = scene.background
            ? scene.background.split('/').pop().replace(/\.(png|jpg|jpeg|webp)$/i, '')
            : '';
        const isRegisteredCG = !!backgroundId
            && typeof REGISTERED_CG_IDS !== 'undefined'
            && REGISTERED_CG_IDS.has(backgroundId);
        const shouldHideCharactersForCG = isRegisteredCG && !scene.allowCharacterOnCG;

        // Registered CG scenes should not render standing characters unless
        // they explicitly opt in.
        if (!shouldHideCharactersForCG
            && !scene.hasOwnProperty('characters')
            && !scene.hasOwnProperty('character')) {
            this.syncPresentation(scene);
            return;
        }

        this._charUpdateId = (this._charUpdateId || 0) + 1;
        const updateId = this._charUpdateId;

        const newCharMap = {};     // 슬롯별 새 이미지 URL
        const charOptions = {};    // 슬롯별 옵션 (투명도 등)

        // 씬 데이터 파싱
        if (!shouldHideCharactersForCG && scene.characters) {
            // 다중 캐릭터: { left: "url", center: {src: "url", opacity: 0.5}, ... }
            Object.entries(scene.characters).forEach(([pos, value]) => {
                const posKey = pos.toLowerCase();
                if (typeof value === 'object' && value?.src) {
                    // 객체 형태: {src, opacity}
                    newCharMap[posKey] = (window.CupidMedia?.isProtectedPath?.(value.src) ? window.CupidMedia.resolveUrl(value.src) : getAssetUrl(value.src));
                    charOptions[posKey] = { opacity: value.opacity ?? 1, framing: value.framing };
                } else {
                    // 문자열: 단순 URL
                    newCharMap[posKey] = (window.CupidMedia?.isProtectedPath?.(value) ? window.CupidMedia.resolveUrl(value) : getAssetUrl(value));
                    charOptions[posKey] = { opacity: 1 };
                }
            });
        } else if (!shouldHideCharactersForCG && scene.character) {
            // 단일 캐릭터: 중앙에 배치
            newCharMap['center'] = (window.CupidMedia?.isProtectedPath?.(scene.character) ? window.CupidMedia.resolveUrl(scene.character) : getAssetUrl(scene.character));
            charOptions['center'] = { opacity: 1 };
        }

        // 변경 필요한 슬롯 확인
        const changedSlots = [];
        Object.entries(this.uiManager.charSlots).forEach(([pos, slot]) => {
            if (!slot) return;
            const existingImg = slot.querySelector('img');
            const newUrl = newCharMap[pos];

            if (existingImg) {
                if (!newUrl || existingImg.dataset.rawSrc !== newUrl || existingImg.complete === false || existingImg.naturalWidth === 0) changedSlots.push(pos);
            } else {
                if (newUrl) changedSlots.push(pos);
            }
        });

        const syncPresentation = () => {
            Object.entries(this.uiManager.charSlots).forEach(([pos, slot]) => {
                if (!slot) return;
                const img = slot.querySelector('img');
                if (!img || !newCharMap[pos] || img.dataset.rawSrc !== newCharMap[pos]) return;
                const opacity = charOptions[pos]?.opacity ?? 1;
                img.style.opacity = opacity === 1 ? '' : String(opacity);
                img.classList.remove('char-fade-out');
                if (scene.silhouette) img.classList.add('silhouette');
                else img.classList.remove('silhouette');
                if (scene.thinking) img.classList.add('thinking');
                else img.classList.remove('thinking');
            });
            this.syncPresentation(scene);
        };
        if (changedSlots.length === 0) {
            syncPresentation();
            return;
        }

        // ★ 퇴장 캐릭터를 await 전에 즉시 처리 (레이스 컨디션 방지)
        // 새 이미지가 없는 슬롯의 기존 이미지를 바로 페이드아웃 시작
        const exitPromises = [];
        Object.keys(this.uiManager.charSlots).forEach(pos => {
            if (!newCharMap[pos] && changedSlots.includes(pos)) {
                const slot = this.uiManager.charSlots[pos];
                if (!slot) return;
                const oldImg = slot.querySelector('img');
                if (oldImg) {
                    oldImg.classList.add('char-fade-out');
                    exitPromises.push(new Promise(r => setTimeout(() => {
                        if (this.currentSceneId === sceneId && this._charUpdateId === updateId && slot.contains(oldImg)) slot.removeChild(oldImg);
                        r();
                    }, 260)));
                }
            }
        });

        // 이미지 프리로드
        // The renderer grants only expressions in the scene actually entered.
        // The shared image loader itself is read-only (also used by galleries).
        await window.CupidMedia?.unlock?.(Object.values(newCharMap));
        const charPromises = Object.entries(newCharMap)
            .filter(([pos]) => changedSlots.includes(pos))
            .map(([pos, charUrl]) => {
                return new Promise((resolve) => {
                    const img = document.createElement('img');
                    img.alt = '';
                    img.setAttribute('aria-hidden', 'true');
                    loadImageWithFallback(img, charUrl, () => {
                        img.dataset.rawSrc = charUrl;
                        const options = charOptions[pos] || { opacity: 1 };
                        if (options.opacity !== 1) img.style.opacity = options.opacity;
                        resolve({ pos, img, sceneId });
                    }, () => resolve(null));
                    if (scene.silhouette) img.classList.add('silhouette');
                    if (scene.thinking) img.classList.add('thinking');
                    img.classList.add('char-breathing');
                });
            });

        const loadedChars = await Promise.all(charPromises);

        // 비동기 대기 중 새 호출이 들어왔으면 무효화
        if (this.currentSceneId !== sceneId || this._charUpdateId !== updateId) return;

        const swapPromises = [];
        loadedChars.forEach(result => {
            const slot = result && this.uiManager.charSlots[result.pos];
            if (!slot) return;
            const oldImg = slot.querySelector('img');
            if (oldImg && window.CupidMedia?.fadeExpressionImage) {
                swapPromises.push(window.CupidMedia.fadeExpressionImage(oldImg, result.img.src, {
                    isCurrent: () => this.currentSceneId === sceneId && this._charUpdateId === updateId,
                    onCommit: () => {
                        oldImg.dataset.rawSrc = result.img.dataset.rawSrc;
                        oldImg.style.opacity = result.img.style.opacity;
                        oldImg.classList.remove('char-fade-out');
                        for (const name of ['silhouette', 'thinking']) {
                            if (scene[name]) oldImg.classList.add(name);
                            else oldImg.classList.remove(name);
                        }
                    }
                }));
            } else {
                if (oldImg) oldImg.remove();
                result.img.classList.add('char-fade-in');
                slot.appendChild(result.img);
                void result.img.offsetWidth;
                result.img.classList.remove('char-fade-in');
            }
        });

        await Promise.all([...exitPromises, ...swapPromises]);
        if (this.currentSceneId === sceneId && this._charUpdateId === updateId) syncPresentation();
    }

    syncPresentation(scene) {
        const frames = ['far', 'normal', 'close', 'intimate'];
        const layer = document.getElementById?.('character-layer');
        let count = 0;
        let intimate = false;
        for (const [pos, slot] of Object.entries(this.uiManager.charSlots)) {
            if (!slot) continue;
            const img = slot.querySelector('img');
            if (!img) {
                slot.classList.remove('char-dimmed', 'char-focused');
                continue;
            }
            const requested = scene.characters?.[pos]?.framing || scene.framing || 'normal';
            const frame = frames.includes(requested) ? requested : 'normal';
            img.classList.remove(...frames.map(name => `char-frame-${name}`));
            img.classList.add(`char-frame-${frame}`);
            count++;
            intimate = intimate || frame === 'intimate';
        }
        layer?.classList.toggle('multi-character-scene', count > 1);
        layer?.classList.toggle('three-character-scene', count === 3);
        layer?.classList.toggle('bg-depth-of-field', intimate && count > 0);
        this.uiManager.bgLayer?.classList.toggle('bg-depth-of-field', intimate && count > 0);
        if (count < 2) for (const slot of Object.values(this.uiManager.charSlots)) {
            slot?.classList.remove('char-dimmed', 'char-focused');
            slot?.querySelector('img')?.classList.remove('char-focused');
        }
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
        const live = this.getScene(this.currentSceneId);
        if (!live?.stats || window.CupidAffinityGate?.commitKey() !== `scene:${this.currentSceneId}`) return;
        if (scene && scene !== live && JSON.stringify(scene.stats || {}) !== JSON.stringify(live.stats)) return;

        // { Seoyeon: { affinity: 10 }, ... } 또는 { Seoyeon: 10, ... } 형태 모두 지원
        // 모든 호감도 변화를 수집 후 위치 분산 표시
        const changes = [];
        for (const [char, stats] of Object.entries(live.stats)) {
            const charKey = this.charNameMap[char] || char;
            const affinityChange = typeof stats === 'number' ? stats : stats?.affinity;
            if (affinityChange && this.stateManager.stats[charKey] && window.CupidAffinityGate?.grant(charKey, affinityChange)) {
                const newValue = this.stateManager.changeAffinity(charKey, affinityChange);
                this.galleryManager.updateMaxAffinity(charKey, newValue);
                this.galleryManager.checkAffinityUnlock(charKey, newValue);
                changes.push({ amount: affinityChange, charKey });
            }
        }

        if (changes.length === 1) {
            this.uiManager.showAffinityChange(changes[0].amount, changes[0].charKey);
        } else if (changes.length > 1) {
            this.uiManager.showAffinityChangeMulti(changes);
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
