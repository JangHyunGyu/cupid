/**
 * Cupid 시나리오 종합 검증 스크립트
 * - 씬 참조 무결성
 * - 캐릭터/배경 이미지 파일 존재 확인
 * - i18n 캐릭터 이름 ↔ 시나리오 캐릭터 이미지 매칭
 * - 프리토킹 배경 전후 일관성
 * - 선택지 수 일치
 * - night 플래그 일관성
 */
const fs = require('fs');
const path = require('path');

const cliArgs = process.argv.slice(2);
const noReport = cliArgs.includes('--no-report');
const seedArg = cliArgs.find(arg => arg.startsWith('--seed='));
const reportSeedLabel = seedArg ? seedArg.slice('--seed='.length) : 'cupid-default';

function hashSeed(value) {
    let hash = 2166136261;
    for (const char of String(value)) {
        hash ^= char.charCodeAt(0);
        hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
}

function createSeededRandom(seed) {
    let state = seed >>> 0;
    return function seededRandom() {
        state += 0x6D2B79F5;
        let value = state;
        value = Math.imul(value ^ (value >>> 15), value | 1);
        value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
        return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    };
}

const reportRandom = createSeededRandom(hashSeed(reportSeedLabel));

const BASE = path.join(__dirname, 'assets/js');
const SCENARIO_DIR = path.join(BASE, 'scenario');
const I18N_DIR = path.join(BASE, 'i18n/ko');
const IMAGES_DIR = path.join(__dirname, 'assets/images');

// ===== Load Scenarios =====
var SCENARIO = {};
for (let i = 0; i <= 5; i++) SCENARIO[i] = {};

const scenarioFiles = fs.readdirSync(SCENARIO_DIR).filter(f => /^day\d/.test(f) && f.endsWith('.js'));
for (const file of scenarioFiles) {
    const content = fs.readFileSync(path.join(SCENARIO_DIR, file), 'utf8');
    try {
        const fn = new Function('SCENARIO', 'Object', content);
        fn(SCENARIO, Object);
    } catch (e) {
        console.error('Error loading ' + file + ': ' + e.message);
    }
}

// Build flat scene map
const allScenes = {};
for (const day of Object.keys(SCENARIO)) {
    for (const sceneId of Object.keys(SCENARIO[day])) {
        allScenes[sceneId] = { day: parseInt(day), scene: SCENARIO[day][sceneId] };
    }
}

// ===== Load i18n =====
const i18nData = {};
if (fs.existsSync(I18N_DIR)) {
    const i18nFiles = fs.readdirSync(I18N_DIR).filter(f => f.endsWith('.json'));
    for (const file of i18nFiles) {
        try {
            const data = JSON.parse(fs.readFileSync(path.join(I18N_DIR, file), 'utf8'));
            Object.assign(i18nData, data);
        } catch (e) {
            console.error('[I18N_LOAD] ' + file + ': ' + e.message);
        }
    }
}

// ===== Character name → image prefix mapping =====
const NAME_TO_PREFIX = {
    "서연": "seyoun", "유나": "yuna", "다인": "dain",
    "담임선생님": "teacher", "담임": "teacher", "보건선생님": "nurse", "보건": "nurse",
    "Seoyeon": "seyoun", "Yuna": "yuna", "Dain": "dain",
    "Teacher": "teacher", "Nurse": "nurse",
    "Homeroom Teacher": "teacher", "School Nurse": "nurse"
};

const errors = [];
const warnings = [];

function sceneExists(id) {
    if (!id) return true;
    if (id.endsWith('.html')) return true; // HTML 리다이렉트는 유효
    return allScenes[id] !== undefined;
}

// ===== 1. Scene Reference Integrity =====
for (const [sceneId, { day, scene }] of Object.entries(allScenes)) {
    // next
    if (scene.next && !sceneExists(scene.next)) {
        errors.push('[SCENE_REF] ' + sceneId + ' (day' + day + '): next="' + scene.next + '" not found');
    }
    // choices
    if (scene.choices) {
        scene.choices.forEach((c, i) => {
            if (c.next && !sceneExists(c.next)) {
                errors.push('[SCENE_REF] ' + sceneId + ' choices[' + i + '].next="' + c.next + '" not found');
            }
        });
    }
    // branches
    if (scene.branches) {
        scene.branches.forEach((b, i) => {
            if (b.next && !sceneExists(b.next)) {
                errors.push('[SCENE_REF] ' + sceneId + ' branches[' + i + '].next="' + b.next + '" not found');
            }
        });
    }
    // affinityBranches
    if (scene.affinityBranches) {
        scene.affinityBranches.forEach((b, i) => {
            if (b.next && !sceneExists(b.next)) {
                errors.push('[SCENE_REF] ' + sceneId + ' affinityBranches[' + i + '].next="' + b.next + '" not found');
            }
        });
    }
}

// ===== 2. Image File Existence =====
for (const [sceneId, { day, scene }] of Object.entries(allScenes)) {
    // character image
    if (scene.character && typeof scene.character === 'string') {
        const imgPath = path.join(__dirname, scene.character);
        if (!fs.existsSync(imgPath)) {
            errors.push('[IMG_MISSING] ' + sceneId + ': character="' + scene.character + '" file not found');
        }
    }
    // character가 객체인 경우 — characters(복수) 필드를 써야 함
    if (scene.character && typeof scene.character === 'object') {
        errors.push('[CHAR_TYPE] ' + sceneId + ': character 필드에 객체가 들어옴 — "characters"(복수) 필드를 사용해야 합니다. getAssetUrl() 런타임 에러 발생');
    }
    // characters (multi-position)
    if (scene.characters) {
        for (const [pos, val] of Object.entries(scene.characters)) {
            const src = typeof val === 'object' ? val.src : val;
            if (src) {
                const imgPath = path.join(__dirname, src);
                if (!fs.existsSync(imgPath)) {
                    errors.push('[IMG_MISSING] ' + sceneId + ': characters.' + pos + '="' + src + '" file not found');
                }
            }
        }
    }
    // background image
    if (scene.background && typeof scene.background === 'string') {
        const bgPath = path.join(__dirname, scene.background);
        if (!fs.existsSync(bgPath)) {
            errors.push('[IMG_MISSING] ' + sceneId + ': background="' + scene.background + '" file not found');
        }
    }
}

// ===== 3. i18n Name ↔ Character Image Matching =====
for (const [sceneId, { day, scene }] of Object.entries(allScenes)) {
    const i18n = i18nData[sceneId];
    if (!i18n || !i18n.name) continue;

    const speakerName = i18n.name.replace(/{name}/g, '').trim();
    if (!speakerName || speakerName === '나' || speakerName === '민수' || speakerName === '???' || speakerName === '') continue;

    // 하은, 현규 등 전용 이미지 없는 NPC
    const isMinorNPC = !NAME_TO_PREFIX[speakerName];

    if (isMinorNPC) {
        // NPC가 말하는데 메인 캐릭터 이미지가 표시되면 문제
        if (scene.character && typeof scene.character === 'string') {
            const charFile = scene.character.split('/').pop().split('_')[0];
            if (['seyoun', 'yuna', 'dain', 'teacher', 'nurse'].includes(charFile)) {
                errors.push('[CHAR_MISMATCH] ' + sceneId + ': speaker="' + speakerName + '" (NPC) but showing ' + charFile + ' image');
            }
        }
        continue;
    }

    // 메인 캐릭터가 말하는데 다른 캐릭터 이미지가 표시되는 경우
    // (character 필드가 없으면 이전 씬 캐릭터 유지이므로 체크 안 함)
    const expectedPrefix = NAME_TO_PREFIX[speakerName];
    if (scene.hasOwnProperty('character') && scene.character && typeof scene.character === 'string' && expectedPrefix) {
        const charFile = scene.character.split('/').pop();
        const actualPrefix = charFile.split('_')[0];
        if (actualPrefix !== expectedPrefix) {
            // 다중 캐릭터 대화 장면에서 다른 캐릭터가 등장해 있는 건 허용 (단순 경고)
            errors.push('[CHAR_SPEAKER] ' + sceneId + ': speaker="' + speakerName + '" expects ' + expectedPrefix + ' but shows ' + actualPrefix + ' (' + charFile + ')');
        }
    }
}

// ===== 4. Freetalk Background Consistency =====
// Build reverse map: which scenes point to each free_talk scene
const freeTalkScenes = {};
for (const [sceneId, { day, scene }] of Object.entries(allScenes)) {
    if (scene.type === 'free_talk') {
        freeTalkScenes[sceneId] = { day, scene, predecessors: [] };
    }
}
for (const [sceneId, { scene }] of Object.entries(allScenes)) {
    const targets = [];
    if (scene.next) targets.push(scene.next);
    if (scene.choices) scene.choices.forEach(c => { if (c.next) targets.push(c.next); });
    if (scene.branches) scene.branches.forEach(b => { if (b.next) targets.push(b.next); });
    for (const t of targets) {
        if (freeTalkScenes[t]) {
            freeTalkScenes[t].predecessors.push({
                id: sceneId,
                bg: scene.background,
                isRouter: /_router$/.test(sceneId) && Array.isArray(scene.branches)
            });
        }
    }
}
for (const [ftId, { scene: ftScene, predecessors }] of Object.entries(freeTalkScenes)) {
    if (predecessors.length === 0) continue;
    const ftBg = ftScene.background;
    for (const pred of predecessors) {
        if (pred.isRouter) continue;
        if (pred.bg && ftBg && pred.bg !== ftBg) {
            warnings.push('[FREETALK_BG] ' + ftId + ': bg="' + ftBg + '" but predecessor ' + pred.id + ' uses bg="' + pred.bg + '"');
        }
    }
}

// ===== 5. Night Freetalk missing night flag =====
for (const [sceneId, { scene }] of Object.entries(allScenes)) {
    const sourceFile = scene.__sourceFile || '';
    const nightFromFile = scene.type === 'free_talk' && /_night$/.test(sourceFile);
    if (scene.type === 'free_talk' && /night/i.test(sceneId) && !scene.night && !nightFromFile) {
        errors.push('[NIGHT_FLAG] ' + sceneId + ': night freetalk missing night filter metadata');
    }
}

// ===== 6. i18n Choices Count Match =====
for (const [sceneId, { day, scene }] of Object.entries(allScenes)) {
    if (!scene.choices) continue;
    const i18n = i18nData[sceneId];
    if (!i18n || !i18n.choices) continue;
    if (scene.choices.length !== i18n.choices.length) {
        errors.push('[CHOICES_COUNT] ' + sceneId + ': JS=' + scene.choices.length + ' i18n=' + i18n.choices.length);
    }
}

// ===== 7. Flag Integrity =====
const setFlags = new Set();
const checkedFlags = new Set();
for (const [, { scene }] of Object.entries(allScenes)) {
    if (scene.setFlag) setFlags.add(scene.setFlag);
    if (scene.setFlags) scene.setFlags.forEach(f => setFlags.add(f));
    if (scene.choices) scene.choices.forEach(c => {
        if (c.setFlag) setFlags.add(c.setFlag);
        if (c.setFlags) c.setFlags.forEach(f => setFlags.add(f));
    });

    const addChecked = (c) => { if (typeof c === 'string') c.split(/\s*(?:\|\||&&)\s*/).forEach(f => { if (f) checkedFlags.add(f); }); };
    if (scene.condition) addChecked(scene.condition);
    if (scene.choices) scene.choices.forEach(c => { addChecked(c.condition); addChecked(c.excludeCondition); });
    if (scene.branches) scene.branches.forEach(b => { addChecked(b.condition); addChecked(b.excludeCondition); });
}
for (const f of checkedFlags) {
    if (!setFlags.has(f)) {
        warnings.push('[FLAG] "' + f + '" checked but never set in scenario');
    }
}

// ===== 8. i18n Missing Entries =====
for (const [sceneId, { day, scene }] of Object.entries(allScenes)) {
    if (scene.type === 'credits') continue;
    if (!i18nData[sceneId]) {
        // 텍스트가 필요한 씬인데 i18n이 없으면 경고
        // (라우팅/브랜치 노드는 텍스트 없어도 됨)
        const isRoutingNode = !scene.text && !scene.choices &&
            (scene.branches || scene.selectByHighestAffinity || scene.condition || scene.setFlag || scene.setFlags);
        const hasText = scene.text;
        const needsText = !isRoutingNode && scene.choices;
        if (hasText || needsText) {
            warnings.push('[I18N_MISSING] ' + sceneId + ' (day' + day + ') has no ko i18n entry');
        }
    }
}

// ===== 9. Speaker talks but character is null =====
// 캐릭터가 대사를 하는데 이미지가 null인 경우 (의도적인 경우 제외)
for (const [sceneId, { day, scene }] of Object.entries(allScenes)) {
    const i18n = i18nData[sceneId];
    if (!i18n || !i18n.name) continue;
    const name = i18n.name.replace(/{name}/g, '').trim();
    if (!name || name === '나' || name === '민수' || name === '???' || name === '') continue;

    const prefix = NAME_TO_PREFIX[name];
    if (!prefix) continue; // NPC는 null이 맞음

    // 메인 캐릭터가 말하는데 character가 null이면 이전 씬 캐릭터가 유지됨
    // 이건 의도적일 수 있으므로 warning으로만
    // 단, character가 명시적으로 null로 설정된 경우만
    if (scene.hasOwnProperty('character') && scene.character === null) {
        // 전후 맥락 확인: 같은 캐릭터가 연속 대화하면 OK
        // 여기서는 단순히 경고만
    }
}

// ===== 10. Unreachable scene detection =====
const reachable = new Set(['start', 'morning2_start', 'morning3_start', 'morning4_start', 'morning5_start',
    'lunch_start', 'lunch2_start', 'lunch3_start', 'lunch4_start', 'lunch5_start',
    'after_start', 'after2_start', 'after3_start', 'after4_start', 'after5_start',
    'night_start', 'night2_start', 'night3_start', 'night4_start', 'night5_start']);
// BFS from all entry points
const queue = [...reachable];
while (queue.length > 0) {
    const id = queue.shift();
    const entry = allScenes[id];
    if (!entry) continue;
    const scene = entry.scene;
    const addTarget = (t) => {
        if (t && !reachable.has(t) && allScenes[t]) {
            reachable.add(t);
            queue.push(t);
        }
    };
    addTarget(scene.next);
    if (scene.choices) scene.choices.forEach(c => {
        addTarget(c.next);
        if (c.affinityBranches) c.affinityBranches.forEach(ab => addTarget(ab.next));
    });
    if (scene.branches) scene.branches.forEach(b => addTarget(b.next));
    if (scene.affinityBranches) scene.affinityBranches.forEach(b => addTarget(b.next));
    if (scene.fallback) addTarget(scene.fallback);
}
const unreachable = Object.keys(allScenes).filter(id => !reachable.has(id));
if (unreachable.length > 0) {
    // 프리토킹/히든 씬은 별도 진입점이므로 제외
    const realUnreachable = unreachable.filter(id =>
        !id.includes('freetalk') && !id.includes('hidden') && !id.includes('ending')
    );
    realUnreachable.forEach(id => {
        warnings.push('[UNREACHABLE] ' + id + ' (day' + allScenes[id].day + ') not reachable from any entry point');
    });
}

// ===== 11. Cross-language i18n key consistency =====
const i18nLangs = ['en', 'ja', 'fr', 'es', 'de', 'pt'];
for (const lang of i18nLangs) {
    const langDir = path.join(BASE, 'i18n', lang);
    if (!fs.existsSync(langDir)) continue;
    const langData = {};
    const langFiles = fs.readdirSync(langDir).filter(f => f.endsWith('.json'));
    for (const file of langFiles) {
        try {
            Object.assign(langData, JSON.parse(fs.readFileSync(path.join(langDir, file), 'utf8')));
        } catch (e) { /* skip parse errors */ }
    }
    const koKeys = Object.keys(i18nData);
    const langKeys = Object.keys(langData);
    const missingInLang = koKeys.filter(k => !langData[k]);
    if (missingInLang.length > 5) {
        warnings.push('[I18N_LANG] ' + lang + ': ' + missingInLang.length + ' ko keys missing (e.g. ' + missingInLang.slice(0, 3).join(', ') + ')');
    }
}

// ===== 12. JS Code Pattern Bugs =====
const JS_DIRS = [
    path.join(__dirname, 'assets/js/modules'),
    path.join(__dirname, 'assets/js/loaders'),
    path.join(__dirname, 'assets/js'),
];
const HTML_DIR = __dirname;

// JS 파일 수집 (재귀 X, 지정 디렉토리만)
const jsFiles = [];
for (const dir of JS_DIRS) {
    if (!fs.existsSync(dir)) continue;
    fs.readdirSync(dir).filter(f => f.endsWith('.js')).forEach(f => {
        const full = path.join(dir, f);
        if (!jsFiles.some(x => x.path === full)) {
            jsFiles.push({ path: full, name: f, content: fs.readFileSync(full, 'utf8') });
        }
    });
}
// HTML 파일 수집
const htmlFiles = fs.readdirSync(HTML_DIR)
    .filter(f => f.endsWith('.html'))
    .map(f => ({ path: path.join(HTML_DIR, f), name: f, content: fs.readFileSync(path.join(HTML_DIR, f), 'utf8') }));

const allCodeFiles = [...jsFiles, ...htmlFiles];

// 12-1. localStorage.getItem(...) || 기본값 패턴 (볼륨 0이 무시되는 버그)
for (const file of allCodeFiles) {
    const lines = file.content.split('\n');
    lines.forEach((line, i) => {
        // localStorage.getItem('...') || 기본값 (단, || '{}', || '[]', || '' 같은 문자열 폴백은 정상)
        if (/localStorage\.getItem\([^)]*\)\s*\|\|/.test(line) && !/\/\//.test(line.split('localStorage')[0]) && !/\|\|\s*['"`]/.test(line)) {
            errors.push('[CODE_PATTERN] ' + file.name + ':' + (i + 1) + ' localStorage || 기본값 → ?? 또는 !== null 사용 필요: ' + line.trim().substring(0, 80));
        }
    });
}

// 12-2. soundManager 호출에 가드 누락
for (const file of allCodeFiles) {
    const lines = file.content.split('\n');
    lines.forEach((line, i) => {
        const trimmed = line.trim();
        // soundManager.xxx() 직접 호출 (가드 없이)
        if (/(?<!\w)soundManager\.\w+\(/.test(trimmed) && !/if\s*\(/.test(trimmed) && !/typeof\s+soundManager/.test(trimmed) && !/window\.soundManager/.test(trimmed)) {
            // 같은 줄이나 바로 윗줄에 가드가 있는지 확인
            const prevLine = i > 0 ? lines[i - 1].trim() : '';
            const hasPrevGuard = /typeof\s+soundManager/.test(prevLine) || /window\.soundManager/.test(prevLine) || /if\s*\(.*soundManager/.test(prevLine);
            if (!hasPrevGuard && !/\/\//.test(trimmed.split('soundManager')[0])) {
                errors.push('[CODE_PATTERN] ' + file.name + ':' + (i + 1) + ' soundManager 가드 없음: ' + trimmed.substring(0, 80));
            }
        }
    });
}

// 12-3. .firstChild.src 패턴 (텍스트 노드에 src 설정 시 무시됨)
for (const file of jsFiles) {
    const lines = file.content.split('\n');
    lines.forEach((line, i) => {
        if (/\.firstChild\s*\.src\s*=/.test(line) || /\.firstChild\s*\)?\s*\.src/.test(line)) {
            warnings.push('[CODE_PATTERN] ' + file.name + ':' + (i + 1) + ' firstChild.src → querySelector("img").src 권장: ' + line.trim().substring(0, 80));
        }
    });
}

// 12-4. || false, || 0 패턴 (getFlag 등에서 0/false가 유효값일 때)
for (const file of jsFiles) {
    const lines = file.content.split('\n');
    lines.forEach((line, i) => {
        // this.xxx || false 또는 this.xxx || 0 에서 ?? 사용 권장
        if (/\]\s*\|\|\s*(false|0)\s*[;,)]/.test(line) && !/\/\//.test(line.split('||')[0])) {
            warnings.push('[CODE_PATTERN] ' + file.name + ':' + (i + 1) + ' || false/0 → ?? 사용 권장: ' + line.trim().substring(0, 80));
        }
    });
}

// ===== 13. Multi-language HTML Inline JS Sync =====
// index.html(KO)을 기준으로 다른 언어 index 파일의 인라인 JS 패턴 비교
const koIndex = htmlFiles.find(f => f.name === 'index.html');
if (koIndex) {
    const langIndexFiles = htmlFiles.filter(f => /^index-(en|es|ja|fr|de|pt)\.html$/.test(f.name));

    // 체크할 패턴: KO에 있는 수정된 패턴이 다른 언어에도 적용되었는지
    const syncPatterns = [
        { name: 'volume_nullcheck', fixed: "!== null ? parseFloat", broken: /localStorage\.getItem\([^)]*[Vv]olume[^)]*\)\s*\|\|/ },
        { name: 'soundManager_guard', fixed: "window.soundManager", broken: /(?<![.\w])soundManager\.playBgm\(/ },
        { name: 'modal_close_fix', fixed: "if (e && e.target !== e.currentTarget) return", broken: /e\.target\.id\s*!==\s*['"].*Modal['"]/ },
    ];

    for (const langFile of langIndexFiles) {
        for (const pat of syncPatterns) {
            const koHas = koIndex.content.includes(pat.fixed);
            const langHasBroken = pat.broken.test(langFile.content);
            if (koHas && langHasBroken) {
                errors.push('[HTML_SYNC] ' + langFile.name + ': "' + pat.name + '" 패턴이 index.html(KO)에는 수정됨, 이 파일은 미적용');
            }
        }
    }
}

// maxlength는 언어별로 다를 수 있음 (한글 6자, 일본어 8자, 영문 12자) — 검사 스킵

// ===== 13-2. HTML Structure Sync (KO 기준 핵심 HTML 요소가 다른 언어에도 존재하는지) =====
for (const file of htmlFiles.filter(f => /^index(?:-(?:en|es|ja|fr|de|pt))?\.html$/.test(f.name))) {
    const earlyContactHandlerIndex = file.content.indexOf('window.openContactModal = function');
    const gameLoaderIndex = file.content.indexOf('data-cupid-entry-script="true"');
    if (earlyContactHandlerIndex < 0 || gameLoaderIndex < 0 || earlyContactHandlerIndex > gameLoaderIndex) {
        errors.push('[LANDING_CONTROLS] ' + file.name + ': contact modal handlers must be defined before the blocking game loader');
    }
}

const htmlStructureChecks = [
    { name: 'title-heroines', selector: 'class="title-heroines"', context: 'index' },
    { name: 'title-heroine images', selector: 'class="title-heroine pos-1"', context: 'index' },
    { name: 'character-layer', selector: 'id="character-layer"', context: 'index' },
    { name: 'game-container', selector: 'id="game-container"', context: 'index' },
    { name: 'landing-container', selector: 'id="landing-container"', context: 'index' },
];

for (const check of htmlStructureChecks) {
    const koFile = htmlFiles.find(f => f.name === check.context + '.html');
    if (!koFile || !koFile.content.includes(check.selector)) continue;
    const langFiles = htmlFiles.filter(f => new RegExp('^' + check.context + '-(en|es|ja|fr|de|pt)\\.html$').test(f.name));
    for (const langFile of langFiles) {
        if (!langFile.content.includes(check.selector)) {
            errors.push('[HTML_STRUCTURE] ' + langFile.name + ': "' + check.name + '" (' + check.selector + ') 가 index.html(KO)에는 있지만 이 파일에는 누락');
        }
    }
}

// game.html, gallery.html 구조 체크
const gameStructureChecks = [
    { name: 'character-layer', selector: 'id="character-layer"', context: 'game' },
    { name: 'dialogue-box', selector: 'id="dialogue-box"', context: 'game' },
];
for (const check of gameStructureChecks) {
    const koFile = htmlFiles.find(f => f.name === check.context + '.html');
    if (!koFile || !koFile.content.includes(check.selector)) continue;
    const langFiles = htmlFiles.filter(f => new RegExp('^' + check.context + '-(en|es|ja|fr|de|pt)\\.html$').test(f.name));
    for (const langFile of langFiles) {
        if (!langFile.content.includes(check.selector)) {
            errors.push('[HTML_STRUCTURE] ' + langFile.name + ': "' + check.name + '" (' + check.selector + ') 누락');
        }
    }
}

// ===== 14. CSS Version Consistency =====
const cssVersions = {};
for (const file of htmlFiles) {
    const matches = file.content.matchAll(/style\.css\?v=([0-9.]+)/g);
    for (const m of matches) {
        if (!cssVersions[m[1]]) cssVersions[m[1]] = [];
        cssVersions[m[1]].push(file.name);
    }
}
const cssVersionKeys = Object.keys(cssVersions);
if (cssVersionKeys.length > 1) {
    const latest = cssVersionKeys.sort().pop();
    for (const [ver, files] of Object.entries(cssVersions)) {
        if (ver !== latest) {
            files.forEach(f => {
                errors.push('[CSS_VERSION] ' + f + ': style.css?v=' + ver + ' → 최신 v=' + latest + '로 업데이트 필요');
            });
        }
    }
}

// ===== 16. Audio File Existence =====
const AUDIO_BGM_DIR = path.join(__dirname, 'assets/audio/bgm');
const AUDIO_SFX_DIR = path.join(__dirname, 'assets/audio/sfx');
for (const [sceneId, { day, scene }] of Object.entries(allScenes)) {
    if (scene.bgm && typeof scene.bgm === 'string') {
        const bgmPath = path.join(AUDIO_BGM_DIR, scene.bgm);
        if (!fs.existsSync(bgmPath)) {
            errors.push('[AUDIO_MISSING] ' + sceneId + ' (day' + day + '): bgm="' + scene.bgm + '" file not found');
        }
    }
    if (scene.sfx && typeof scene.sfx === 'string') {
        const sfxPath = path.join(AUDIO_SFX_DIR, scene.sfx);
        if (!fs.existsSync(sfxPath)) {
            errors.push('[AUDIO_MISSING] ' + sceneId + ' (day' + day + '): sfx="' + scene.sfx + '" file not found');
        }
    }
}

// ===== 17. Gallery Data — CG/BGM 파일 존재 확인 =====
try {
    const galleryDataPath = path.join(__dirname, 'assets/js/gallery-data.js');
    const gdContent = fs.readFileSync(galleryDataPath, 'utf8');

    // CG file paths
    const cgFileMatches = gdContent.matchAll(/file:\s*'([^']+)'/g);
    for (const m of cgFileMatches) {
        const filePath = path.join(__dirname, m[1]);
        if (!fs.existsSync(filePath)) {
            errors.push('[GALLERY_ASSET] gallery-data.js: CG/BGM file="' + m[1] + '" not found');
        }
    }
    // thumbnail paths (별도 파일인 경우만)
    const thumbMatches = gdContent.matchAll(/thumbnail:\s*'([^']+)'/g);
    for (const m of thumbMatches) {
        const filePath = path.join(__dirname, m[1]);
        if (!fs.existsSync(filePath)) {
            errors.push('[GALLERY_ASSET] gallery-data.js: thumbnail="' + m[1] + '" not found');
        }
    }

    // Expression images — expressions 배열에서 캐릭터별 이미지 확인
    const charImgDir = path.join(__dirname, 'assets/images/characters');
    const exprBlockRegex = /(\w+):\s*\{[^}]*expressions:\s*\[([^\]]+)\]/g;
    let exprMatch;
    while ((exprMatch = exprBlockRegex.exec(gdContent)) !== null) {
        const charId = exprMatch[1];
        if (['ko', 'en', 'es', 'ja', 'fr', 'de', 'pt'].includes(charId)) continue;
        const exprs = exprMatch[2].match(/'([^']+)'/g);
        if (!exprs) continue;
        for (const expr of exprs) {
            const exprName = expr.replace(/'/g, '');
            const imgFile = charId + '_' + exprName + '.png';
            const imgPath = path.join(charImgDir, imgFile);
            if (!fs.existsSync(imgPath)) {
                errors.push('[GALLERY_ASSET] gallery-data.js: ' + charId + ' expression "' + exprName + '" → ' + imgFile + ' not found');
            }
        }
    }

    // Every canonical main-character sprite must be exposed by every language's gallery data.
    // Generated/working derivatives are intentionally excluded from the public gallery.
    const GalleryDataClass = new Function('window', gdContent + '\nreturn GalleryData;')({});
    const galleryLanguages = ['ko', 'en', 'es', 'ja', 'fr', 'de', 'pt'];
    const mainGalleryCharacters = ['seyoun', 'yuna', 'dain', 'teacher', 'nurse'];
    const ignoredCharacterImages = new Set();
    for (const charId of mainGalleryCharacters) {
        const diskExpressions = fs.readdirSync(charImgDir)
            .filter(file => file.startsWith(charId + '_') && file.endsWith('.png') && !ignoredCharacterImages.has(file))
            .map(file => file.slice((charId + '_').length, -'.png'.length))
            .sort();
        for (const lang of galleryLanguages) {
            const galleryExpressions = GalleryDataClass.characters?.[lang]?.[charId]?.expressions || [];
            const missingFromGallery = diskExpressions.filter(expr => !galleryExpressions.includes(expr));
            if (missingFromGallery.length > 0) {
                errors.push('[GALLERY_ASSET] gallery-data.js: ' + lang + '/' + charId
                    + ' missing expressions: ' + missingFromGallery.join(', '));
            }
        }
    }

    // Concerned replies in gallery free-talk must be able to select the new worried sprites.
    const galleryFreeTalkContent = fs.readFileSync(path.join(__dirname, 'assets/js/gallery-freetalk.js'), 'utf8');
    const freeTalkExpressionBlock = (galleryFreeTalkContent.match(/this\.CHAR_EXPRESSIONS\s*=\s*\{([\s\S]*?)\n\s*\};/) || [])[1] || '';
    for (const charId of ['yuna', 'teacher', 'nurse']) {
        const charMatch = freeTalkExpressionBlock.match(new RegExp(charId + ':\\s*\\[([^\\]]+)\\]'));
        const freeTalkExpressions = charMatch ? (charMatch[1].match(/'([^']+)'/g) || []).map(value => value.slice(1, -1)) : [];
        if (!freeTalkExpressions.includes('worried')) {
            errors.push('[GALLERY_FREETALK] ' + charId + ' worried expression missing');
        }
    }
} catch (e) {
    warnings.push('[GALLERY_ASSET] gallery-data.js 파싱 실패: ' + e.message);
}

// ===== 18. Duplicate Scene ID Across Days =====
const sceneIdDays = {};
for (const day of Object.keys(SCENARIO)) {
    for (const sceneId of Object.keys(SCENARIO[day])) {
        if (!sceneIdDays[sceneId]) sceneIdDays[sceneId] = [];
        sceneIdDays[sceneId].push(day);
    }
}
for (const [sceneId, days] of Object.entries(sceneIdDays)) {
    if (days.length > 1) {
        errors.push('[DUPLICATE_ID] "' + sceneId + '" exists in days: ' + days.join(', ') + ' — later day overwrites earlier');
    }
}

// ===== 19. Version String Consistency =====
try {
    // LoaderConfig VERSION
    const loaderConfigPath = path.join(__dirname, 'assets/js/loaders/config.js');
    const loaderConfigContent = fs.readFileSync(loaderConfigPath, 'utf8');
    const loaderVersion = (loaderConfigContent.match(/VERSION:\s*(['"])([^'"]+)\1/) || [])[2];

    // game-loader.js hardcoded version
    const gameLoaderPath = path.join(__dirname, 'assets/js/loaders/game-loader.js');
    const gameLoaderContent = fs.readFileSync(gameLoaderPath, 'utf8');
    const gameLoaderVersion = (gameLoaderContent.match(/const\s+version\s*=\s*(['"])([^'"]+)\1/) || [])[2];

    // gallery-loader.js hardcoded version
    const galleryLoaderPath = path.join(__dirname, 'assets/js/loaders/gallery-loader.js');
    const galleryLoaderContent = fs.readFileSync(galleryLoaderPath, 'utf8');
    const galleryLoaderVersion = (galleryLoaderContent.match(/const\s+version\s*=\s*(['"])([^'"]+)\1/) || [])[2];
    const i18nLoaderContent = fs.readFileSync(path.join(__dirname, 'assets/js/loaders/i18n-loader.js'), 'utf8');
    for (const [name, content] of Object.entries({
        'game-loader.js': gameLoaderContent,
        'gallery-loader.js': galleryLoaderContent,
        'i18n-loader.js': i18nLoaderContent
    })) {
        if (content.includes('?.')) {
            errors.push('[LOADER_COMPAT] Safari 12 호환 진입 로더에 optional chaining이 남아 있음: ' + name);
        }
    }

    // modules/config.js ASSET_VERSION
    const modulesConfigPath = path.join(__dirname, 'assets/js/modules/config.js');
    const modulesConfigContent = fs.readFileSync(modulesConfigPath, 'utf8');
    const assetVersion = (modulesConfigContent.match(/ASSET_VERSION\s*=\s*(['"])([^'"]+)\1/) || [])[2];

    const errorReporterContent = fs.readFileSync(path.join(__dirname, 'assets/js/error-reporter.js'), 'utf8');
    const errorReporterVersion = (errorReporterContent.match(/var\s+VERSION\s*=\s*(['"])([^'"]+)\1/) || [])[2];
    if (!errorReporterVersion) {
        errors.push('[ERROR_REPORTER] 리포터 버전 누락');
    }
    if (!errorReporterContent.includes('ssl\\.pstatic\\.net\\/melona\\/libs\\/gfp-nac-module\\/synchronizer\\.js')) {
        errors.push('[ERROR_REPORTER] 선택적 네이버 synchronizer 스크립트 필터 누락');
    }
    if (!errorReporterContent.includes('pretendard\\/pretendard\\.css')
        || !errorReporterContent.includes('optional, same-origin font stylesheet')) {
        errors.push('[ERROR_REPORTER] optional local Pretendard stylesheet filter missing');
    }
    if (!errorReporterContent.includes('ga-engagement\\.js')) {
        errors.push('[ERROR_REPORTER] optional engagement analytics script filter missing');
    }
    const seoDir = path.join(__dirname, 'seo');
    const seoHtmlFiles = fs.readdirSync(seoDir).filter(file => file.endsWith('.html')).map(file => ({
        name: `seo/${file}`,
        content: fs.readFileSync(path.join(seoDir, file), 'utf8')
    }));
    for (const file of [...htmlFiles, ...seoHtmlFiles]) {
        if (file.content.includes('error-reporter.js')
            && !file.content.includes(`error-reporter.js?v=${errorReporterVersion}`)) {
            errors.push('[ERROR_REPORTER] 버전 불일치: ' + file.name);
        }
    }
    const seoGeneratorContent = fs.readFileSync(path.join(seoDir, '_generate.js'), 'utf8');
    if (!seoGeneratorContent.includes(`error-reporter.js?v=${errorReporterVersion}`)) {
        errors.push('[ERROR_REPORTER] seo/_generate.js 리포터 버전 불일치');
    }

    const chatLogQueueMarkers = [
        'CUPID_CHAT_LOG_QUEUE_KEY',
        'clientMsgId:',
        "window.addEventListener('online', _cupidFlushChatLogsOnOnline)"
    ];
    for (const marker of chatLogQueueMarkers) {
        if (!modulesConfigContent.includes(marker)) {
            errors.push('[CHAT_LOG_QUEUE] 오프라인 대화 로그 복구 마커 누락: ' + marker);
        }
    }
    if (modulesConfigContent.includes("errorType: 'chat_log_save_failed'")) {
        errors.push('[CHAT_LOG_QUEUE] 일시적 전송 실패를 D1 오류로 재보고하는 레거시 경로가 남아 있음');
    }
    const chatRenderReceiptContent = [
        modulesConfigContent,
        fs.readFileSync(path.join(__dirname, 'assets/js/modules/DialogueSystem.js'), 'utf8'),
        fs.readFileSync(path.join(__dirname, 'assets/js/modules/FreeTalkSystem.js'), 'utf8'),
        fs.readFileSync(path.join(__dirname, 'assets/js/gallery-freetalk.js'), 'utf8')
    ].join('\n');
    for (const marker of [
        "chat-logs/render-ack",
        'assistantRenderReceipt',
        'getChatRenderReceipt',
        '_getChatRenderReceipt',
        'renderedContent'
    ]) {
        if (!chatRenderReceiptContent.includes(marker)) {
            errors.push('[CHAT_RENDER_ACK] 실제 화면 렌더 영수증 마커 누락: ' + marker);
        }
    }

    const versions = { 'loaders/config.js(LoaderConfig)': loaderVersion, 'game-loader.js': gameLoaderVersion, 'gallery-loader.js': galleryLoaderVersion, 'modules/config.js(ASSET_VERSION)': assetVersion };
    for (const [label, value] of Object.entries(versions)) {
        if (!value) errors.push('[VERSION_SYNC] JS version missing: ' + label);
    }
    const uniqueVersions = new Set(Object.values(versions).filter(Boolean));
    if (uniqueVersions.size > 1) {
        const detail = Object.entries(versions).map(([k, v]) => k + '=' + v).join(', ');
        errors.push('[VERSION_SYNC] JS 버전 불일치: ' + detail);
    }
    const projectConfig = JSON.parse(fs.readFileSync(path.join(__dirname, 'config/project.json'), 'utf8'));
    if (loaderVersion !== projectConfig.assetVersion) {
        errors.push('[VERSION_SYNC] 프리토킹 런타임 캐시 버전이 config/project.json과 다름: ' + loaderVersion);
    }
    if (!galleryLoaderContent.includes(`assets/js/loaders/config.js?v=${loaderVersion}`)) {
        errors.push('[VERSION_SYNC] gallery-loader의 config.js 캐시 버전 불일치');
    }
    for (const file of htmlFiles) {
        if (file.content.includes('data-cupid-entry-script="true"')
            && !file.content.includes(`?v=${loaderVersion}`)) {
            errors.push('[VERSION_SYNC] 진입 로더 캐시 버전 불일치: ' + file.name);
        }
        if (file.content.includes('assets/js/browser-check.js')
            && !file.content.includes('assets/js/browser-check.js?v=2.9.8')) {
            errors.push('[VERSION_SYNC] browser-check.js 캐시 버전 불일치: ' + file.name);
        }
    }
    const swContent = fs.readFileSync(path.join(__dirname, 'service-worker.js'), 'utf8');
    if (!swContent.includes(`const CACHE_VERSION = '${projectConfig.serviceWorkerCacheVersion}'`)) {
        errors.push('[VERSION_SYNC] service-worker 캐시 버전이 config/project.json과 다름');
    }
    const soundContent = fs.readFileSync(path.join(__dirname, 'assets/js/sound.js'), 'utf8');
    if (!soundContent.includes('_isAudioDecodeError')
        || !soundContent.includes('audio-recovery=')
        || !soundContent.includes('{ bypassCache: true }')) {
        errors.push('[AUDIO_RECOVERY] 디코딩 실패 후 캐시 우회 재다운로드 경로가 없음');
    }
    if (!soundContent.includes('optional SFX skipped')) {
        errors.push('[AUDIO_RECOVERY] transient one-shot SFX failures must remain non-fatal and out of D1');
    }
    if (!swContent.includes("url.searchParams.has('audio-recovery')")
        || !swContent.includes('refreshMediaFromNetwork')
        || !swContent.includes("url.searchParams.delete('audio-recovery')")) {
        errors.push('[AUDIO_RECOVERY] Service Worker가 오디오 복구 요청을 네트워크로 갱신하지 않음');
    }
} catch (e) {
    warnings.push('[VERSION_SYNC] 버전 파일 읽기 실패: ' + e.message);
}

// ===== 20. i18n Text/Choices Field Completeness =====
for (const lang of ['ko', ...i18nLangs]) {
    const langDir = path.join(BASE, 'i18n', lang);
    if (!fs.existsSync(langDir)) continue;
    const langData = {};
    const langFiles = fs.readdirSync(langDir).filter(f => f.endsWith('.json'));
    for (const file of langFiles) {
        try { Object.assign(langData, JSON.parse(fs.readFileSync(path.join(langDir, file), 'utf8'))); } catch (e) {}
    }
    for (const [sceneId, entry] of Object.entries(langData)) {
        const scene = allScenes[sceneId];
        if (!scene) continue;
        // 텍스트가 필요한 씬인데 text가 비어있으면
        if (scene.scene.text && (!entry.text || entry.text.trim() === '')) {
            warnings.push('[I18N_EMPTY] ' + lang + '/' + sceneId + ': text 필드가 비어있음');
        }
        // 선택지 수가 다르거나 빈 선택지
        if (scene.scene.choices && entry.choices) {
            entry.choices.forEach((c, i) => {
                if (!c || (typeof c === 'string' && c.trim() === '')) {
                    warnings.push('[I18N_EMPTY] ' + lang + '/' + sceneId + ': choices[' + i + '] 비어있음');
                }
            });
        }
    }
}

// ===== 21. HTML Resource References =====
for (const file of htmlFiles) {
    // <script src="..."> 체크
    const scriptMatches = file.content.matchAll(/src="([^"]+\.js)(\?[^"]*)?"/g);
    for (const m of scriptMatches) {
        if (m[1].startsWith('http') || m[1].startsWith('//')) continue;
        const filePath = path.join(__dirname, m[1]);
        if (!fs.existsSync(filePath)) {
            errors.push('[HTML_RESOURCE] ' + file.name + ': <script src="' + m[1] + '"> file not found');
        }
    }
    // <link href="...css"> 체크
    const cssMatches = file.content.matchAll(/href="([^"]+\.css)(\?[^"]*)?"/g);
    for (const m of cssMatches) {
        if (m[1].startsWith('http') || m[1].startsWith('//')) continue;
        const filePath = path.join(__dirname, m[1]);
        if (!fs.existsSync(filePath)) {
            errors.push('[HTML_RESOURCE] ' + file.name + ': <link href="' + m[1] + '"> file not found');
        }
    }
}

// ===== 22. HTML Redirect Targets =====
for (const [sceneId, { day, scene }] of Object.entries(allScenes)) {
    const checkHtmlTarget = (target, context) => {
        if (target && target.endsWith('.html')) {
            const filePath = path.join(__dirname, target);
            if (!fs.existsSync(filePath)) {
                errors.push('[HTML_TARGET] ' + sceneId + ' ' + context + '="' + target + '" file not found');
            }
        }
    };
    checkHtmlTarget(scene.next, 'next');
    if (scene.choices) scene.choices.forEach((c, i) => checkHtmlTarget(c.next, 'choices[' + i + '].next'));
    if (scene.branches) scene.branches.forEach((b, i) => checkHtmlTarget(b.next, 'branches[' + i + '].next'));
}

// ===== 23. Manifest Icon Existence =====
const manifestFiles = fs.readdirSync(__dirname).filter(f => f.startsWith('manifest') && f.endsWith('.json'));
for (const mf of manifestFiles) {
    try {
        const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, mf), 'utf8'));
        if (manifest.icons) {
            for (const icon of manifest.icons) {
                const iconPath = path.join(__dirname, icon.src);
                if (!fs.existsSync(iconPath)) {
                    errors.push('[MANIFEST] ' + mf + ': icon "' + icon.src + '" not found');
                }
            }
        }
    } catch (e) {}
}

// ===== 15. i18n Character Name Format Check =====
// "한글명(English)" 형식이 남아있는지 검사
const nameFormatRegex = /[\uAC00-\uD7A3]+\([A-Za-z]+\)/;
for (const lang of i18nLangs) {
    const langDir = path.join(BASE, 'i18n', lang);
    if (!fs.existsSync(langDir)) continue;
    const langFiles = fs.readdirSync(langDir).filter(f => f.endsWith('.json'));
    for (const file of langFiles) {
        const content = fs.readFileSync(path.join(langDir, file), 'utf8');
        const data = JSON.parse(content);
        for (const [sceneId, entry] of Object.entries(data)) {
            if (entry.name && nameFormatRegex.test(entry.name)) {
                errors.push('[I18N_NAME] ' + lang + '/' + file + ' ' + sceneId + ': "' + entry.name + '" → 현지화 이름 사용 필요');
            }
        }
    }
}

// =====================================================================
// ===== PLAYTHROUGH SIMULATION (실제 브라우저 플레이 시뮬레이션) =====
// =====================================================================

// 간이 StateManager (Node.js 환경)
class SimState {
    constructor() {
        this.playerName = '테스트';
        this.currentDay = 1;
        this.stats = { Seoyeon: 0, Yuna: 0, Dain: 0, Teacher: 0, Nurse: 0 };
        this.flags = {};
    }
    changeAffinity(char, amount) {
        if (!this.stats[char] && this.stats[char] !== 0) return;
        this.stats[char] = Math.max(-100, Math.min(100, this.stats[char] + amount));
    }
    getAffinity(char) { return this.stats[char] ?? 0; }
    setFlag(name, val = true) { this.flags[name] = val; }
    getFlag(name) {
        if (name.includes('||')) return name.split('||').some(f => this.flags[f.trim()] ?? false);
        if (name.includes('&&')) return name.split('&&').every(f => this.flags[f.trim()] ?? false);
        return this.flags[name] ?? false;
    }
    setDay(d) { this.currentDay = d; }
    clone() {
        const c = new SimState();
        c.playerName = this.playerName;
        c.currentDay = this.currentDay;
        c.stats = { ...this.stats };
        c.flags = { ...this.flags };
        return c;
    }
}

// 간이 resolveNextScene (SceneRenderer 로직 재현)
function simResolveNext(scene, state) {
    // 1. affinityBranches
    if (scene.affinityBranches && scene.affinityBranches.length > 0) {
        if (scene.affinityChar) {
            // 단일 캐릭터 호감도 분기 (affinityChar 지정)
            const currentAff = state.getAffinity(scene.affinityChar);
            const sorted = [...scene.affinityBranches]
                .map((b, i) => ({ ...b, _i: i }))
                .sort((a, b) => (b.minAffinity || 0) - (a.minAffinity || 0) || a._i - b._i);
            for (const branch of sorted) {
                if (currentAff >= (branch.minAffinity || 0)) return branch.next;
            }
            return scene.next || scene.fallback || null;
        }
        // 다중 캐릭터 호감도 분기 (각 branch에 char 지정)
        for (const ab of scene.affinityBranches) {
            const charKey = ab.char || ab.character;
            if (charKey && state.getAffinity(charKey) >= (ab.minAffinity || 0)) {
                if (ab.condition && !state.getFlag(ab.condition)) continue;
                if (ab.excludeCondition && state.getFlag(ab.excludeCondition)) continue;
                return ab.next;
            }
        }
        // fallback
        return scene.next || scene.fallback || null;
    }
    // 2. branches
    if (scene.branches && scene.branches.length > 0) {
        if (scene.selectByHighestAffinity) {
            let best = null, bestAff = -Infinity;
            for (const b of scene.branches) {
                const charKey = b.character;
                if (b.condition && !state.getFlag(b.condition)) continue;
                if (b.excludeCondition && state.getFlag(b.excludeCondition)) continue;
                if (charKey) {
                    const metFlag = 'met_' + charKey.toLowerCase();
                    if (!state.getFlag(metFlag) && !state.getFlag('met_' + charKey)) continue;
                    const aff = state.getAffinity(charKey);
                    if (aff > bestAff) { bestAff = aff; best = b.next; }
                }
            }
            return best || scene.fallback || scene.next || null;
        }
        for (const b of scene.branches) {
            if (b.condition && !state.getFlag(b.condition)) continue;
            if (b.excludeCondition && state.getFlag(b.excludeCondition)) continue;
            if (!b.condition && !b.excludeCondition || b.next) return b.next;
        }
        return scene.next || null;
    }
    // 3. next
    return scene.next || null;
}

// 씬에 진입할 때 효과 적용 (플래그, 호감도, 날짜 변경)
function simApplyScene(scene, state) {
    if (scene.setFlag) state.setFlag(scene.setFlag);
    if (scene.setFlags) scene.setFlags.forEach(f => state.setFlag(f));
    if (scene.clearFlags) scene.clearFlags.forEach(f => state.setFlag(f, false));
    if (scene.changeDay) state.setDay(scene.changeDay);
    if (scene.stats) {
        for (const [charKey, val] of Object.entries(scene.stats)) {
            const amount = typeof val === 'number' ? val : (val && val.affinity) || 0;
            state.changeAffinity(charKey, amount);
        }
    }
}

// 선택지에서 효과 적용
function simApplyChoice(choice, state) {
    if (choice.setFlag) state.setFlag(choice.setFlag);
    if (choice.setFlags) choice.setFlags.forEach(f => state.setFlag(f));
    if (choice.stats) {
        for (const [charKey, val] of Object.entries(choice.stats)) {
            const amount = typeof val === 'number' ? val : (val && val.affinity) || 0;
            state.changeAffinity(charKey, amount);
        }
    }
}

// 선택지 필터링 (condition/excludeCondition)
function simGetAvailableChoices(choices, state) {
    if (!choices) return [];
    return choices.filter(c => {
        if (c.condition && !state.getFlag(c.condition)) return false;
        if (c.excludeCondition && state.getFlag(c.excludeCondition)) return false;
        return true;
    });
}

// ===== TEST 1: 전체 경로 탐색 (DFS) — 모든 선택지 조합으로 데드엔드 탐지 =====
console.log('[PLAYTEST] 전체 경로 탐색 시작...');
const MAX_STEPS = 2000;      // 무한루프 방지
const MAX_PATHS = 5000;      // 탐색 경로 수 제한
const deadEnds = [];
const completedPaths = [];
let pathsExplored = 0;

// DFS 스택: { sceneId, state, path, depth }
const dfsStack = [{ sceneId: 'start', state: new SimState(), path: ['start'], depth: 0 }];

while (dfsStack.length > 0 && pathsExplored < MAX_PATHS) {
    const { sceneId, state, path, depth } = dfsStack.pop();

    if (depth > MAX_STEPS) {
        warnings.push('[PLAYTEST_LOOP] 경로가 ' + MAX_STEPS + '스텝 초과 — 무한루프 의심: ' + path.slice(-5).join(' → '));
        continue;
    }

    // HTML 리다이렉트면 완료
    if (sceneId && sceneId.endsWith('.html')) {
        completedPaths.push(path);
        pathsExplored++;
        continue;
    }

    const entry = allScenes[sceneId];
    if (!entry) {
        // 이미 SCENE_REF 체크에서 잡히므로 여기서는 패스
        continue;
    }
    const scene = entry.scene;

    // 씬 효과 적용
    simApplyScene(scene, state);

    // credits 타입은 완료
    if (scene.type === 'credits') {
        const nextId = simResolveNext(scene, state);
        if (nextId) {
            dfsStack.push({ sceneId: nextId, state: state.clone(), path: [...path, nextId], depth: depth + 1 });
        } else {
            completedPaths.push(path);
        }
        pathsExplored++;
        continue;
    }

    // free_talk → 다음 씬으로
    if (scene.type === 'free_talk') {
        const nextId = simResolveNext(scene, state);
        if (nextId) {
            dfsStack.push({ sceneId: nextId, state: state.clone(), path: [...path, nextId], depth: depth + 1 });
        } else {
            deadEnds.push({ sceneId, path, reason: 'free_talk에 next 없음' });
        }
        continue;
    }

    // input → 다음 씬으로
    if (scene.type === 'input') {
        const nextId = simResolveNext(scene, state);
        if (nextId) {
            dfsStack.push({ sceneId: nextId, state: state.clone(), path: [...path, nextId], depth: depth + 1 });
        }
        continue;
    }

    // 선택지가 있는 경우 → 각 선택지를 별도 경로로 분기
    if (scene.choices && scene.choices.length > 0) {
        const available = simGetAvailableChoices(scene.choices, state);
        if (available.length === 0) {
            deadEnds.push({ sceneId, path, reason: '모든 선택지가 condition에 의해 필터됨' });
            continue;
        }
        for (const choice of available) {
            const choiceState = state.clone();
            simApplyChoice(choice, choiceState);
            // choice 안에 affinityBranches가 있는 경우 (중첩 분기)
            if (choice.affinityBranches && choice.affinityBranches.length > 0) {
                for (const ab of choice.affinityBranches) {
                    if (ab.next) {
                        dfsStack.push({ sceneId: ab.next, state: choiceState.clone(), path: [...path, sceneId + '→' + ab.next], depth: depth + 1 });
                    }
                }
                if (choice.next) {
                    dfsStack.push({ sceneId: choice.next, state: choiceState.clone(), path: [...path, sceneId + '→' + choice.next], depth: depth + 1 });
                }
            } else if (choice.next) {
                dfsStack.push({ sceneId: choice.next, state: choiceState, path: [...path, sceneId + '→' + choice.next], depth: depth + 1 });
            } else {
                deadEnds.push({ sceneId, path, reason: 'choice에 next/affinityBranches 없음' });
            }
        }
        continue;
    }

    // 텍스트만 있는 씬 → resolveNext
    const nextId = simResolveNext(scene, state);
    if (nextId) {
        dfsStack.push({ sceneId: nextId, state: state.clone(), path: [...path, nextId], depth: depth + 1 });
    } else if (scene.text || scene.name) {
        // 텍스트가 있는데 다음이 없으면 데드엔드
        deadEnds.push({ sceneId, path, reason: '대사가 있지만 next/branches 없음' });
    }
    // 라우팅 노드(텍스트 없고 next 없음)는 조건 분기 실패 — 이미 다른 체크에서 잡힘
}

for (const de of deadEnds) {
    errors.push('[PLAYTEST_DEAD] "' + de.sceneId + '" 데드엔드: ' + de.reason + ' (경로: ...' + de.path.slice(-3).join(' → ') + ')');
}

// ===== TEST 2: Day 전환 검증 — 각 Day의 시작점에서 다음 Day 시작점까지 도달 가능한지 =====
const dayEntries = { 1: 'start', 2: 'morning2_start', 3: 'morning3_start', 4: 'morning4_start', 5: 'morning5_start' };
for (let day = 1; day <= 4; day++) {
    const startScene = dayEntries[day];
    const nextDayStart = dayEntries[day + 1];
    // BFS로 현재 Day에서 다음 Day 진입점 도달 가능한지 확인
    const visited = new Set();
    const bfsQueue = [startScene];
    let found = false;
    while (bfsQueue.length > 0) {
        const sid = bfsQueue.shift();
        if (!sid || visited.has(sid) || sid.endsWith('.html')) continue;
        visited.add(sid);
        if (sid === nextDayStart) { found = true; break; }
        const e = allScenes[sid];
        if (!e) continue;
        const s = e.scene;
        if (s.next) bfsQueue.push(s.next);
        if (s.fallback) bfsQueue.push(s.fallback);
        if (s.choices) s.choices.forEach(c => { if (c.next) bfsQueue.push(c.next); });
        if (s.branches) s.branches.forEach(b => { if (b.next) bfsQueue.push(b.next); });
        if (s.affinityBranches) s.affinityBranches.forEach(b => { if (b.next) bfsQueue.push(b.next); });
    }
    if (!found) {
        errors.push('[PLAYTEST_DAY] Day' + day + ' ("' + startScene + '") → Day' + (day + 1) + ' ("' + nextDayStart + '") 도달 불가');
    }
}

// ===== TEST 3: 엔딩 도달 검증 — 모든 엔딩 씬이 실제로 도달 가능한지 =====
const endingScenes = Object.keys(allScenes).filter(id => id.includes('ending') || id.includes('credits') || id.includes('epilogue'));
const reachableFromStart = new Set();
{
    const q = ['start'];
    while (q.length > 0) {
        const sid = q.shift();
        if (!sid || reachableFromStart.has(sid) || sid.endsWith('.html')) continue;
        reachableFromStart.add(sid);
        const e = allScenes[sid];
        if (!e) continue;
        const s = e.scene;
        if (s.next) q.push(s.next);
        if (s.fallback) q.push(s.fallback);
        if (s.choices) s.choices.forEach(c => { if (c.next) q.push(c.next); });
        if (s.branches) s.branches.forEach(b => { if (b.next) q.push(b.next); });
        if (s.affinityBranches) s.affinityBranches.forEach(b => { if (b.next) q.push(b.next); });
    }
}
for (const endId of endingScenes) {
    if (!reachableFromStart.has(endId)) {
        warnings.push('[PLAYTEST_ENDING] 엔딩 씬 "' + endId + '" 이 start에서 도달 불가');
    }
}

// ===== TEST 4: 선택지 0개 상황 시뮬레이션 — 조건부 선택지만 있는 씬에서 모든 선택지가 숨겨질 수 있는지 =====
for (const [sceneId, { scene }] of Object.entries(allScenes)) {
    if (!scene.choices || scene.choices.length === 0) continue;
    const allConditional = scene.choices.every(c => c.condition || c.excludeCondition);
    if (allConditional) {
        // 기본 선택지(condition 없는)가 하나도 없으면 위험
        const hasDefault = scene.choices.some(c => !c.condition && !c.excludeCondition);
        if (!hasDefault) {
            warnings.push('[PLAYTEST_CHOICES] "' + sceneId + '": 모든 선택지가 조건부 — 특정 상태에서 선택지 0개 가능');
        }
    }
}

// ===== TEST 5: 배경 깜빡임 검사 — 연속 대화 중 배경이 갑자기 바뀌는지 =====
for (const [sceneId, { scene }] of Object.entries(allScenes)) {
    if (!scene.next || !scene.text) continue;
    const nextEntry = allScenes[scene.next];
    if (!nextEntry) continue;
    const nextScene = nextEntry.scene;
    // 현재 씬에 배경이 있고, 바로 다음 씬에도 다른 배경이 있는데 같은 화자의 연속 대화인 경우
    if (scene.background && nextScene.background && scene.background !== nextScene.background) {
        const curName = i18nData[sceneId]?.name;
        const nextName = i18nData[scene.next]?.name;
        if (curName && nextName && curName === nextName && curName !== '나' && curName !== '{name}') {
            warnings.push('[PLAYTEST_BG_FLASH] "' + sceneId + '" → "' + scene.next + '": 같은 화자(' + curName + ') 연속 대화 중 배경 변경');
        }
    }
}

// ===== TEST 6: affinityBranches 캐릭터 키 검증 =====
const validCharKeys = ['Seoyeon', 'Yuna', 'Dain', 'Teacher', 'Nurse'];
for (const [sceneId, { scene }] of Object.entries(allScenes)) {
    if (scene.affinityBranches) {
        scene.affinityBranches.forEach((ab, i) => {
            const charKey = ab.char || ab.character;
            if (charKey && !validCharKeys.includes(charKey)) {
                errors.push('[PLAYTEST_AFFINITY] "' + sceneId + '" affinityBranches[' + i + ']: "' + charKey + '" 유효하지 않은 캐릭터 키');
            }
        });
    }
    if (scene.selectByHighestAffinity && scene.branches) {
        scene.branches.forEach((b, i) => {
            if (b.character && !validCharKeys.includes(b.character)) {
                errors.push('[PLAYTEST_AFFINITY] "' + sceneId + '" selectByHighestAffinity branches[' + i + ']: "' + b.character + '" 유효하지 않은 캐릭터 키');
            }
        });
    }
}

// ===== TEST 7: stats 캐릭터 키 검증 =====
for (const [sceneId, { scene }] of Object.entries(allScenes)) {
    if (scene.stats) {
        for (const charKey of Object.keys(scene.stats)) {
            if (!validCharKeys.includes(charKey)) {
                errors.push('[PLAYTEST_STATS] "' + sceneId + '" stats: "' + charKey + '" 유효하지 않은 캐릭터 키');
            }
        }
    }
    if (scene.choices) {
        scene.choices.forEach((c, ci) => {
            if (c.stats) {
                for (const charKey of Object.keys(c.stats)) {
                    if (!validCharKeys.includes(charKey)) {
                        errors.push('[PLAYTEST_STATS] "' + sceneId + '" choices[' + ci + '].stats: "' + charKey + '" 유효하지 않은 캐릭터 키');
                    }
                }
            }
        });
    }
}

console.log('[PLAYTEST] 탐색 완료: ' + pathsExplored + '개 경로, ' + completedPaths.length + '개 완료, ' + deadEnds.length + '개 데드엔드');

// ===== TEST 8: 전 언어 i18n 완전 커버리지 — 모든 텍스트 씬이 모든 언어에 번역되어 있는지 =====
console.log('[PLAYTEST] 전 언어 i18n 커버리지 검사...');
const allLangs = ['ko', 'en', 'es', 'ja', 'fr', 'de'];
const allLangData = {};
for (const lang of allLangs) {
    allLangData[lang] = {};
    const langDir = path.join(BASE, 'i18n', lang);
    if (!fs.existsSync(langDir)) { errors.push('[I18N_COVERAGE] ' + lang + ' 디렉토리 없음'); continue; }
    const langFiles = fs.readdirSync(langDir).filter(f => f.endsWith('.json'));
    for (const file of langFiles) {
        try { Object.assign(allLangData[lang], JSON.parse(fs.readFileSync(path.join(langDir, file), 'utf8'))); } catch (e) {}
    }
}
// 텍스트가 필요한 씬 목록
const textScenes = Object.keys(allScenes).filter(id => {
    const s = allScenes[id].scene;
    return s.text || (s.choices && s.choices.length > 0);
});
for (const lang of allLangs) {
    let missingCount = 0;
    const missingExamples = [];
    for (const sceneId of textScenes) {
        const entry = allLangData[lang][sceneId];
        if (!entry) { missingCount++; if (missingExamples.length < 3) missingExamples.push(sceneId); continue; }
        // text가 필요한데 없거나 빈 경우
        const scene = allScenes[sceneId].scene;
        if (scene.text && (!entry.text || entry.text.trim() === '')) {
            missingCount++;
            if (missingExamples.length < 3) missingExamples.push(sceneId + '(빈 text)');
        }
        // choices가 필요한데 누락/불일치
        if (scene.choices && scene.choices.length > 0) {
            if (!entry.choices) {
                missingCount++;
                if (missingExamples.length < 3) missingExamples.push(sceneId + '(choices 누락)');
            } else if (entry.choices.length !== scene.choices.length) {
                errors.push('[I18N_COVERAGE] ' + lang + '/' + sceneId + ': choices 수 불일치 (JS=' + scene.choices.length + ', i18n=' + entry.choices.length + ')');
            }
        }
    }
    if (missingCount > 0) {
        warnings.push('[I18N_COVERAGE] ' + lang + ': ' + missingCount + '개 씬 번역 누락 (예: ' + missingExamples.join(', ') + ')');
    }
}

// ===== TEST 9: 메모리 누수 패턴 검사 (JS 코드 정적 분석) =====
console.log('[PLAYTEST] 메모리 누수 패턴 검사...');

for (const file of jsFiles) {
    const lines = file.content.split('\n');
    // 9-1. addEventListener 없이 removeEventListener가 없는 패턴
    const addListeners = [];
    const removeListeners = [];
    lines.forEach((line, i) => {
        if (/\.addEventListener\s*\(/.test(line)) addListeners.push({ line: i + 1, text: line.trim() });
        if (/\.removeEventListener\s*\(/.test(line)) removeListeners.push({ line: i + 1, text: line.trim() });
    });
    // 익명 함수로 addEventListener하면 removeEventListener 불가
    for (const al of addListeners) {
        // 익명 함수: addEventListener('event', () => 또는 addEventListener('event', function(
        if (/addEventListener\s*\(\s*['"][^'"]+['"]\s*,\s*(function\s*\(|\([^)]*\)\s*=>|\(\s*\)\s*=>)/.test(al.text)) {
            // window나 document에 대한 것만 (전역 리스너가 누수 위험 큼)
            // 단, 1회성 이벤트(DOMContentLoaded, error, unhandledrejection, beforeunload, input, keydown)는 제외
            if (/\b(window|document)\b/.test(al.text) && !/DOMContentLoaded|error|unhandledrejection|beforeunload|input|keydown/.test(al.text)) {
                warnings.push('[MEMORY_LEAK] ' + file.name + ':' + al.line + ' window/document에 익명 함수 addEventListener — 제거 불가: ' + al.text.substring(0, 80));
            }
        }
    }

    // 9-2. setInterval 없이 clearInterval이 없는 패턴
    const setIntervals = [];
    const clearIntervals = [];
    lines.forEach((line, i) => {
        if (/setInterval\s*\(/.test(line)) setIntervals.push({ line: i + 1, text: line.trim() });
        if (/clearInterval\s*\(/.test(line)) clearIntervals.push({ line: i + 1, text: line.trim() });
    });
    // setInterval이 있는데 변수에 저장 안 하면 clearInterval 불가
    for (const si of setIntervals) {
        if (!/=\s*setInterval/.test(si.text) && !/this\.\w+\s*=\s*setInterval/.test(si.text)) {
            errors.push('[MEMORY_LEAK] ' + file.name + ':' + si.line + ' setInterval 반환값 미저장 — clearInterval 불가: ' + si.text.substring(0, 80));
        }
    }
    if (setIntervals.length > 0 && clearIntervals.length === 0) {
        warnings.push('[MEMORY_LEAK] ' + file.name + ': setInterval ' + setIntervals.length + '건 사용, clearInterval 0건 — 정리 안 됨');
    }

    // 9-3. setTimeout 반환값 미저장 (단, 단순 지연은 허용하되, 반복적으로 호출되는 함수 내에서만 경고)
    // → 이미 타이머 관련 버그를 다른 체크에서 잡으므로 여기서는 setInterval만 집중

    // 9-4. MutationObserver/IntersectionObserver disconnect 누락
    const observerCreates = [];
    const observerDisconnects = [];
    lines.forEach((line, i) => {
        if (/new\s+(MutationObserver|IntersectionObserver|ResizeObserver)\s*\(/.test(line)) observerCreates.push({ line: i + 1, text: line.trim() });
        if (/\.disconnect\s*\(/.test(line)) observerDisconnects.push({ line: i + 1 });
    });
    if (observerCreates.length > 0 && observerDisconnects.length === 0) {
        warnings.push('[MEMORY_LEAK] ' + file.name + ': Observer 생성 ' + observerCreates.length + '건, disconnect 0건 — 정리 안 됨');
    }

    // 9-5. DOM 요소 배열/맵에 계속 push만 하고 제거 안 하는 패턴
    // → 정적 분석으로는 한계가 있으므로, 명백한 패턴만 (배열에 push만 있고 splice/pop/length=0 없는 경우)
    const pushPattern = /this\.\w+\.push\(/;
    const clearPattern = /this\.\w+\s*=\s*\[\]|this\.\w+\.splice\(|this\.\w+\.pop\(|this\.\w+\.length\s*=\s*0|this\.\w+\.shift\(/;
    const pushLines = lines.filter(l => pushPattern.test(l));
    const clearLines = lines.filter(l => clearPattern.test(l));
    // push하는 변수 이름 추출
    const pushVars = new Set(pushLines.map(l => (l.match(/this\.(\w+)\.push\(/) || [])[1]).filter(Boolean));
    const clearVars = new Set(clearLines.map(l => {
        const m = l.match(/this\.(\w+)\s*=\s*\[\]/) || l.match(/this\.(\w+)\.splice/) || l.match(/this\.(\w+)\.pop/) || l.match(/this\.(\w+)\.shift/) || l.match(/this\.(\w+)\.length\s*=\s*0/);
        return m ? m[1] : null;
    }).filter(Boolean));
    for (const v of pushVars) {
        if (!clearVars.has(v) && !['chatHistory', 'freeTalkHistory', 'conversationHistory'].includes(v)) {
            // 채팅 히스토리는 의도적으로 누적 (slice로 제한함)
            warnings.push('[MEMORY_LEAK] ' + file.name + ': this.' + v + '에 push만 있고 제거 로직 없음 — 메모리 누적 가능');
        }
    }

    // 9-6. FileReader/Image/Audio 생성 후 참조 해제 안 됨 (onload 콜백에서만 사용)
    // → 단발성이라 GC가 처리하므로 skip

    // 9-7. closures에서 큰 객체 캡처 (정적 분석 한계)
    // → skip
}

// 9-8. HTML 인라인 JS에서의 메모리 누수
for (const file of htmlFiles) {
    const lines = file.content.split('\n');
    lines.forEach((line, i) => {
        // setInterval 미저장
        if (/setInterval\s*\(/.test(line) && !/=\s*setInterval/.test(line)) {
            errors.push('[MEMORY_LEAK] ' + file.name + ':' + (i + 1) + ' setInterval 반환값 미저장: ' + line.trim().substring(0, 80));
        }
    });
}

console.log('[PLAYTEST] 메모리 누수 검사 완료');

// =====================================================================
// ===== UI / GALLERY / SETTINGS / NAVIGATION 검증 =====
// =====================================================================
console.log('[UI_CHECK] UI 인터랙션 검증 시작...');

// ===== UI-1: HTML getElementById vs 실제 DOM id 일치 =====
for (const file of htmlFiles) {
    // 인라인 <script> 블록 추출
    const scriptBlocks = file.content.match(/<script[^>]*>([\s\S]*?)<\/script>/gi) || [];
    const inlineJS = scriptBlocks.map(b => b.replace(/<\/?script[^>]*>/gi, '')).join('\n');
    // getElementById 호출에서 ID 추출
    const idRefs = [...inlineJS.matchAll(/getElementById\(\s*['"]([^'"]+)['"]\s*\)/g)].map(m => m[1]);
    // HTML 내 id="..." 추출
    const htmlIds = new Set([...file.content.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
    for (const refId of idRefs) {
        if (!htmlIds.has(refId)) {
            // 동적 생성 요소는 허용 (game-loader가 생성하는 것들)
            const dynamicIds = ['upload-image-btn', 'upload-image-input', 'image-preview-container', 'image-preview', 'remove-image-btn'];
            if (!dynamicIds.includes(refId)) {
                errors.push('[UI_DOM_ID] ' + file.name + ': getElementById("' + refId + '") 호출하지만 id="' + refId + '" 없음');
            }
        }
    }
}

// ===== UI-2: 설정 모달 DOM ID 다국어 일관성 =====
const settingsIds = ['settingsModal', 'affinityToggle', 'bgmVolume', 'sfxVolume', 'bgmVolumeVal', 'sfxVolumeVal'];
const koIndexFile = htmlFiles.find(f => f.name === 'index.html');
if (koIndexFile) {
    const langIndexes = htmlFiles.filter(f => /^index-(en|es|ja|fr|de|pt)\.html$/.test(f.name));
    for (const langFile of langIndexes) {
        for (const sid of settingsIds) {
            const koHas = koIndexFile.content.includes('id="' + sid + '"');
            const langHas = langFile.content.includes('id="' + sid + '"');
            if (koHas && !langHas) {
                errors.push('[UI_SETTINGS] ' + langFile.name + ': 설정 모달 id="' + sid + '" 누락 (index.html에는 있음)');
            }
        }
    }
}

// ===== UI-3: gallery-data.js 다국어 데이터 동등성 =====
try {
    const gdPath = path.join(__dirname, 'assets/js/gallery-data.js');
    const gdRaw = fs.readFileSync(gdPath, 'utf8');

    // 캐릭터 ID 파싱 (각 언어 블록에서)
    const charIdsByLang = {};
    for (const lang of allLangs) {
        const ids = [];
        // 간단 파싱: id: 'xxx' 패턴
        const langSection = gdRaw.split(new RegExp('\\b' + lang + ':\\s*\\{'))[1];
        if (langSection) {
            const idMatches = langSection.match(/id:\s*'([^']+)'/g);
            if (idMatches) {
                idMatches.forEach(im => {
                    const id = im.match(/id:\s*'([^']+)'/)[1];
                    if (['seyoun', 'yuna', 'dain', 'teacher', 'nurse'].includes(id)) ids.push(id);
                });
            }
        }
        charIdsByLang[lang] = [...new Set(ids)].sort();
    }
    const koCharIds = charIdsByLang.ko || [];
    for (const lang of allLangs) {
        if (lang === 'ko') continue;
        const langIds = charIdsByLang[lang] || [];
        if (koCharIds.length > 0 && JSON.stringify(koCharIds) !== JSON.stringify(langIds)) {
            const missing = koCharIds.filter(id => !langIds.includes(id));
            if (missing.length > 0) {
                errors.push('[GALLERY_DATA] gallery-data.js ' + lang + ': 캐릭터 누락 — ' + missing.join(', '));
            }
        }
    }

    // BGM ID 다국어 동등성 — static bgm 블록만 파싱
    const bgmSection = gdRaw.split(/static\s+bgm\s*=\s*\{/)[1]?.split(/static\s+/)[0] || '';
    const bgmIdsByLang = {};
    for (const lang of allLangs) {
        const langBlock = bgmSection.split(new RegExp(lang + ':\\s*\\['))[1]?.split(/\]\s*[,}]/)[0] || '';
        const bgmMatches = langBlock.match(/id:\s*'([^']+)'/g) || [];
        bgmIdsByLang[lang] = bgmMatches.map(bm => bm.match(/id:\s*'([^']+)'/)[1]);
    }
    const koBgmIds = bgmIdsByLang.ko || [];
    for (const lang of allLangs) {
        if (lang === 'ko') continue;
        const langBgmIds = bgmIdsByLang[lang] || [];
        if (koBgmIds.length > 0 && koBgmIds.length !== langBgmIds.length) {
            errors.push('[GALLERY_DATA] gallery-data.js ' + lang + ': BGM 수 불일치 (ko=' + koBgmIds.length + ', ' + lang + '=' + langBgmIds.length + ')');
        }
    }
} catch (e) {
    warnings.push('[GALLERY_DATA] gallery-data.js 파싱 실패: ' + e.message);
}

// ===== UI-4: REGISTERED_CG_IDS ↔ gallery-data CG ID 동기화 =====
try {
    const configContent = fs.readFileSync(path.join(__dirname, 'assets/js/modules/config.js'), 'utf8');
    const cgIdMatch = configContent.match(/REGISTERED_CG_IDS\s*=\s*new\s+Set\(\[([^\]]+)\]\)/);
    if (cgIdMatch) {
        const registeredIds = cgIdMatch[1].match(/'([^']+)'/g).map(s => s.replace(/'/g, ''));
        const gdContent = fs.readFileSync(path.join(__dirname, 'assets/js/gallery-data.js'), 'utf8');
        const cgOnlySection = gdContent.split(/static\s+cg\s*=\s*\{/)[1]?.split(/static\s+bgm/)[0] || '';
        const galleryCgIds = [...new Set((cgOnlySection.match(/id:\s*'([^']+)'/g) || []).map(m => m.match(/id:\s*'([^']+)'/)[1]))];

        for (const gcid of galleryCgIds) {
            if (!registeredIds.includes(gcid)) {
                errors.push('[CG_SYNC] gallery-data CG "' + gcid + '" 가 REGISTERED_CG_IDS에 없음 — 해금 불가');
            }
        }
        for (const rcid of registeredIds) {
            if (!galleryCgIds.includes(rcid)) {
                warnings.push('[CG_SYNC] REGISTERED_CG_IDS "' + rcid + '" 가 gallery-data에 없음 — 갤러리에 표시 안 됨');
            }
        }
    }
} catch (e) {}

// ===== UI-5: gallery-freetalk 캐릭터/표정/배경/언어맵 검증 =====
try {
    const ftContent = fs.readFileSync(path.join(__dirname, 'assets/js/gallery-freetalk.js'), 'utf8');

    // 표정 이미지 존재 확인
    const charImgDir = path.join(__dirname, 'assets/images/characters');
    const exprMapMatch = ftContent.match(/CHAR_EXPRESSIONS\s*=\s*\{([\s\S]*?)\};/);
    if (exprMapMatch) {
        const exprBlock = exprMapMatch[1];
        const charExprRegex = /(\w+):\s*\{([^}]+)\}/g;
        let cem;
        while ((cem = charExprRegex.exec(exprBlock)) !== null) {
            const charId = cem[1];
            const exprValues = cem[2].match(/'([^']+\.png)'/g) || [];
            for (const ev of exprValues) {
                const fileName = ev.replace(/'/g, '');
                const filePath = path.join(charImgDir, fileName);
                if (!fs.existsSync(filePath)) {
                    errors.push('[FREETALK_ASSET] gallery-freetalk.js CHAR_EXPRESSIONS ' + charId + ': "' + fileName + '" not found');
                }
            }
        }
    }

    // 배경 이미지 존재 확인
    const bgMapMatch = ftContent.match(/CHAR_BACKGROUNDS\s*=\s*\{([\s\S]*?)\};/);
    if (bgMapMatch) {
        const bgPaths = bgMapMatch[1].match(/'(assets\/[^']+)'/g) || [];
        for (const bp of bgPaths) {
            const bgFile = bp.replace(/'/g, '');
            if (!fs.existsSync(path.join(__dirname, bgFile))) {
                errors.push('[FREETALK_ASSET] gallery-freetalk.js CHAR_BACKGROUNDS: "' + bgFile + '" not found');
            }
        }
    }

    // 언어 맵 완전성 — CHAR_NAMES, CHAR_LOCATIONS 등에 6개 언어 있는지
    const langMaps = ['CHAR_NAMES', 'CHAR_LOCATIONS', 'CHAR_DATING_PROMPTS', 'CHAR_PERSONALITIES'];
    for (const mapName of langMaps) {
        const mapMatch = ftContent.match(new RegExp(mapName + '\\s*=\\s*\\{([\\s\\S]*?)\\};'));
        if (mapMatch) {
            for (const lang of allLangs) {
                if (!mapMatch[1].includes("'" + lang + "'") && !mapMatch[1].includes(lang + ':')) {
                    warnings.push('[FREETALK_LANG] gallery-freetalk.js ' + mapName + ': "' + lang + '" 언어 누락');
                }
            }
        }
    }
} catch (e) {
    warnings.push('[FREETALK] gallery-freetalk.js 파싱 실패: ' + e.message);
}

// ===== UI-6: 페이지 간 네비게이션 — <a href> 링크 타겟 존재 확인 =====
for (const file of htmlFiles) {
    const hrefMatches = file.content.matchAll(/<a[^>]+href="([^"#][^"]*)"[^>]*>/gi);
    for (const m of hrefMatches) {
        const href = m[1];
        if (href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('javascript:')) continue;
        // 상대 경로 정리
        let target = href.replace(/^\//, '');
        if (!target.includes('.')) target += '.html';  // /index-en → index-en.html
        const filePath = path.join(__dirname, target);
        if (!fs.existsSync(filePath)) {
            errors.push('[NAV_LINK] ' + file.name + ': <a href="' + href + '"> → "' + target + '" not found');
        }
    }
}

// ===== UI-7: gallery-progress 기본 데이터 캐릭터 키 ↔ gallery-data 캐릭터 ID =====
try {
    const gpContent = fs.readFileSync(path.join(__dirname, 'assets/js/gallery-progress.js'), 'utf8');
    const defaultDataMatch = gpContent.match(/_createDefaultData[\s\S]*?characters:\s*\{([\s\S]*?)\n\s{12}\}/);
    if (defaultDataMatch) {
        const defaultCharIds = [...defaultDataMatch[1].matchAll(/(\w+):\s*\{/g)].map(m => m[1]);
        const expectedIds = ['seyoun', 'yuna', 'dain', 'teacher', 'nurse'];
        for (const eid of expectedIds) {
            if (!defaultCharIds.includes(eid)) {
                errors.push('[SAVE_SCHEMA] gallery-progress.js _createDefaultData: 캐릭터 "' + eid + '" 누락');
            }
        }
    }
} catch (e) {}

// ===== UI-8: Service Worker 캐시 버전 일관성 =====
try {
    const swContent = fs.readFileSync(path.join(__dirname, 'service-worker.js'), 'utf8');
    // PRECACHE_URLS 존재 확인
    const precacheMatch = swContent.match(/PRECACHE_URLS\s*=\s*\[([^\]]*)\]/);
    if (precacheMatch && precacheMatch[1].trim()) {
        const urls = precacheMatch[1].match(/'([^']+)'/g) || [];
        for (const u of urls) {
            const url = u.replace(/'/g, '');
            if (!fs.existsSync(path.join(__dirname, url))) {
                errors.push('[SW_CACHE] service-worker.js PRECACHE_URLS: "' + url + '" not found');
            }
        }
    }
    // SW가 모든 메인 HTML에서 등록되는지
    for (const file of htmlFiles) {
        if (/^(index|game)\.html$/.test(file.name) || /^(index|game)-(en|es|ja|fr|de|pt)\.html$/.test(file.name)) {
            if (!file.content.includes('service-worker.js') && !file.content.includes('serviceWorker')) {
                warnings.push('[SW_REG] ' + file.name + ': Service Worker 등록 코드 없음');
            }
        }
    }
} catch (e) {}

// ===== UI-9: 갤러리 HTML DOM ID vs 갤러리 JS getElementById =====
const galleryJsFiles = jsFiles.filter(f => f.name.startsWith('gallery'));
const galleryHtmlFiles = htmlFiles.filter(f => f.name.startsWith('gallery'));
if (galleryJsFiles.length > 0 && galleryHtmlFiles.length > 0) {
    // 갤러리 JS에서 참조하는 모든 ID 수집
    const galleryJsIds = new Set();
    for (const gf of galleryJsFiles) {
        const idMatches = gf.content.matchAll(/getElementById\(\s*['"]([^'"]+)['"]\s*\)/g);
        for (const m of idMatches) galleryJsIds.add(m[1]);
    }
    // 각 갤러리 HTML에서 확인
    for (const gh of galleryHtmlFiles) {
        const htmlIds = new Set([...gh.content.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
        for (const jsId of galleryJsIds) {
            if (!htmlIds.has(jsId)) {
                // freetalk overlay는 JS가 동적 생성
                // 갤러리 freetalk/모달이 JS로 동적 생성하는 요소들
                const dynamicGalleryIds = ['gallery-freetalk-overlay', 'freetalk-overlay', 'message', 'name-tag',
                    'chat-input', 'chat-send', 'expression-buttons', 'unlock-condition-popup',
                    'dialogue-box', 'upload-image-btn', 'gft-file-input', 'remove-image-btn',
                    'gft-char-img', 'image-preview-container', 'image-preview',
                    'cg-modal-image', 'cg-modal-title', 'cg-modal-desc',
                    'action-toggle-btn'];
                if (!dynamicGalleryIds.includes(jsId)) {
                    warnings.push('[UI_GALLERY_ID] ' + gh.name + ': 갤러리 JS가 getElementById("' + jsId + '") 호출하지만 해당 id 없음');
                }
            }
        }
    }
}

console.log('[UI_CHECK] UI 인터랙션 검증 완료');

// =====================================================================
// ===== AI FREE TALK 검증 =====
// =====================================================================
console.log('[FREETALK_CHECK] AI 프리토킹 검증 시작...');

// FT-1: 모든 free_talk 씬에 필수 필드 확인 (name, next)
for (const [sceneId, { day, scene }] of Object.entries(allScenes)) {
    if (scene.type !== 'free_talk') continue;
    if (!scene.name && !scene.character && !scene.characters) {
        errors.push('[FREETALK_SCENE] "' + sceneId + '" (day' + day + '): free_talk 씬에 name/character 없음 — 캐릭터 식별 불가');
    }
    if (!scene.next && !scene.branches && !scene.affinityBranches) {
        errors.push('[FREETALK_SCENE] "' + sceneId + '" (day' + day + '): free_talk 씬에 next 없음 — 대화 후 진행 불가');
    }
}

// FT-2: free_talk 씬의 캐릭터가 CHAR_NAME_MAP에 있는지 (프리토킹 시스템이 매핑 가능한지)
try {
    const configContent = fs.readFileSync(path.join(__dirname, 'assets/js/modules/config.js'), 'utf8');
    const charNameMapMatch = configContent.match(/CHAR_NAME_MAP\s*=\s*Object\.freeze\(\{([\s\S]*?)\}\)/);
    if (charNameMapMatch) {
        const mapEntries = charNameMapMatch[1].match(/"([^"]+)":\s*"([^"]+)"/g) || [];
        const charNameMap = {};
        mapEntries.forEach(e => {
            const [, key, val] = e.match(/"([^"]+)":\s*"([^"]+)"/);
            charNameMap[key] = val;
        });
        // free_talk 씬의 i18n name이 CHAR_NAME_MAP에 매핑되는지
        for (const [sceneId, { scene }] of Object.entries(allScenes)) {
            if (scene.type !== 'free_talk') continue;
            for (const lang of allLangs) {
                const langEntry = allLangData[lang]?.[sceneId];
                const charName = langEntry?.name || scene.name;
                if (charName && lang !== 'ko') {
                    // 영문/일문 이름이 CHAR_NAME_MAP에 있어야 매핑 가능
                    const mapped = charNameMap[charName];
                    if (!mapped && !['나', '{name}', ''].includes(charName)) {
                        // 직접 키(Seoyeon, Yuna 등)인 경우는 OK
                        const isDirectKey = validCharKeys.includes(charName);
                        if (!isDirectKey) {
                            warnings.push('[FREETALK_CHARMAP] "' + sceneId + '" ' + lang + ': 캐릭터 "' + charName + '" 가 CHAR_NAME_MAP에 없음');
                        }
                    }
                }
            }
        }
    }
} catch (e) {}

// FT-3: 게임 내 프리토킹 — FreeTalkSystem.js의 API_ENDPOINT 접근 가능성
try {
    const ftSysContent = fs.readFileSync(path.join(__dirname, 'assets/js/modules/FreeTalkSystem.js'), 'utf8');
    // API 호출 부분에서 endpoint 사용 확인
    if (ftSysContent.includes('API_ENDPOINT') || ftSysContent.includes('window.API_ENDPOINT')) {
        const configContent = fs.readFileSync(path.join(__dirname, 'assets/js/modules/config.js'), 'utf8');
        if (!configContent.includes('API_ENDPOINT')) {
            errors.push('[FREETALK_API] FreeTalkSystem.js가 API_ENDPOINT를 사용하지만 config.js에 정의되지 않음');
        }
    }
    // 갤러리 프리토킹도 동일
    const gftContent = fs.readFileSync(path.join(__dirname, 'assets/js/gallery-freetalk.js'), 'utf8');
    if (gftContent.includes('API_ENDPOINT') || gftContent.includes('window.API_ENDPOINT')) {
        // fallback URL 존재 확인
        if (!gftContent.includes("'https://") && !gftContent.includes('"https://')) {
            warnings.push('[FREETALK_API] gallery-freetalk.js: API_ENDPOINT 폴백 URL 없음');
        }
    }
} catch (e) {}

// FT-4: 프리토킹 프롬프트 — prompts.js의 FLAG_MEMORIES 캐릭터 매칭
try {
    const ftSysContent = fs.readFileSync(path.join(__dirname, 'assets/js/modules/FreeTalkSystem.js'), 'utf8');
    const gftContent = fs.readFileSync(path.join(__dirname, 'assets/js/gallery-freetalk.js'), 'utf8');
    if (!ftSysContent.includes('encodeFreeTalkCacheKeyPart(_lang)')
        || !ftSysContent.includes('encodeFreeTalkCacheKeyPart(charKey)')
        || !gftContent.includes('encodeGalleryFreeTalkCacheKeyPart(this.lang)')
        || !gftContent.includes('encodeGalleryFreeTalkCacheKeyPart(requestCharId)')) {
        errors.push('[FREETALK_API] non-ASCII cache-key parts must be URI encoded before use in request headers');
    }
    if (!ftSysContent.includes('"x-output-language": _lang')
        || !ftSysContent.includes('outputLanguage: _lang')
        || !gftContent.includes("'x-output-language': this.lang")
        || !gftContent.includes('outputLanguage: this.lang')) {
        errors.push('[FREETALK_API] game and gallery requests must send the explicit output-language contract in both header and body');
    }
    if (!ftSysContent.includes('primaryError instanceof TypeError')
        || !ftSysContent.includes('fallbackEndpoint !== aiEndpoint')
        || !ftSysContent.includes('FREE_TALK_AI_FAILOVER_HTTP_STATUSES')
        || !gftContent.includes('primaryError instanceof TypeError')
        || !gftContent.includes('fallbackEndpoint !== aiEndpoint')
        || !gftContent.includes('GALLERY_AI_FAILOVER_HTTP_STATUSES')) {
        errors.push('[FREETALK_API] game and gallery chat requests must keep network and HTTP-status failover');
    }
    if (!ftSysContent.includes('fetchWithTransientRetry')
        || !gftContent.includes('fetchWithTransientRetry')) {
        errors.push('[FREETALK_API] game and gallery chat requests must retry transient fetch failures before failover');
    }
    if (!ftSysContent.includes('shouldRetryFreeTalkAiResponse')
        || !gftContent.includes('shouldRetryGalleryAiResponse')
        || !ftSysContent.includes('attempt < 3')
        || !gftContent.includes('attempt < 3')) {
        errors.push('[FREETALK_API] game and gallery chat requests must retry transient HTTP and fetch failures three times');
    }
    if (!ftSysContent.includes('AI Chat transport interruption:')
        || !gftContent.includes('[GalleryFreeTalk] transport interruption:')) {
        errors.push('[FREETALK_API] transient transport failures must not create duplicate console-error reports');
    }
    if (!ftSysContent.includes('isOfflineTransportFailure')
        || !gftContent.includes('isOfflineTransportFailure')) {
        errors.push('[FREETALK_API] offline transport failures must not be persisted to D1');
    }
} catch (e) {
    errors.push('[FREETALK_API] request-safety validation failed: ' + e.message);
}

try {
    const promptsPath = path.join(__dirname, 'assets/js/prompts.js');
    if (fs.existsSync(promptsPath)) {
        const promptsContent = fs.readFileSync(promptsPath, 'utf8');
        // FLAG_MEMORIES에서 참조하는 캐릭터 이름 확인
        const charRefs = promptsContent.matchAll(/char:\s*['"]([^'"]+)['"]/g);
        const promptCharNames = new Set();
        for (const m of charRefs) promptCharNames.add(m[1]);

        // i18n 이름과 config CHAR_NAME_MAP 매핑 확인
        for (const name of promptCharNames) {
            // '서연', 'Seoyeon' 등의 이름이 CHAR_NAME_MAP을 통해 매핑 가능한지
            if (!NAME_TO_PREFIX[name] && !validCharKeys.includes(name)) {
                warnings.push('[FREETALK_PROMPT] prompts.js FLAG_MEMORIES char: "' + name + '" 가 NAME_TO_PREFIX에 없음');
            }
        }
    }
} catch (e) {}

// FT-4B: 최신 유저 사실은 캐릭터별 잠금만 제외하고 항상 정사 우선
try {
    const promptsContent = fs.readFileSync(path.join(__dirname, 'assets/js/prompts.js'), 'utf8');
    const ftSysContent = fs.readFileSync(path.join(__dirname, 'assets/js/modules/FreeTalkSystem.js'), 'utf8');
    const gftContent = fs.readFileSync(path.join(__dirname, 'assets/js/gallery-freetalk.js'), 'utf8');
    const ftCoreContent = fs.readFileSync(path.join(__dirname, 'assets/js/freetalk-core.js'), 'utf8');
    const mainRuntimeContent = ftSysContent + '\n' + ftCoreContent;
    const galleryRuntimeContent = gftContent + '\n' + ftCoreContent;
    const requiredKo = '이전 설정, 캐릭터 카드, 저장 요약, 장면 상태와 충돌해도 같습니다';
    const requiredEn = 'even when it conflicts with prior setup, the character card, saved summary, or scene state';
    if (!mainRuntimeContent.includes(requiredKo) || !galleryRuntimeContent.includes(requiredKo)) {
        errors.push('[FREETALK_CANON] 게임/갤러리 최신 유저 사실화 규칙이 동일하지 않음');
    }
    if (!mainRuntimeContent.includes(requiredEn) || !galleryRuntimeContent.includes(requiredEn)) {
        errors.push('[FREETALK_CANON] 영문 최신 유저 사실화 규칙이 동일하지 않음');
    }
    const staticCanonLock = '위의 캐릭터별 사실 잠금만 예외입니다';
    if (!promptsContent.includes(staticCanonLock) || !gftContent.includes(staticCanonLock)) {
        errors.push('[FREETALK_CANON] 정적 프롬프트의 유일 예외 규칙 누락');
    }
    const ownershipKo = '"내/제 손·입술·손끝"은 사용자 캐릭터의 몸입니다';
    if (!mainRuntimeContent.includes(ownershipKo) || !galleryRuntimeContent.includes(ownershipKo)) {
        errors.push('[FREETALK_CANON] 게임/갤러리 사용자 신체 소유 주체 규칙 누락');
    }
    const structuralOutputKo = '허용 type: narration, dialogue.';
    if (!promptsContent.includes(structuralOutputKo) || !gftContent.includes(structuralOutputKo)) {
        errors.push('[FREETALK_SCHEMA] 구조적 출력 type 계약이 게임/갤러리에 동일하게 유지되지 않음');
    }
} catch (e) {
    errors.push('[FREETALK_CANON] 사실화 규칙 검증 실패: ' + e.message);
}

try {
    require('./scripts/verify-korean-prompts.cjs');
} catch (e) {
    errors.push('[KOREAN_PROMPT_CHECK] 한국어 런타임 프롬프트 검증 실패: ' + e.message);
}

try {
    require('./scripts/verify-multilingual-prompts.cjs');
} catch (e) {
    errors.push('[MULTILINGUAL_PROMPT_CHECK] 7언어 프리토킹 프롬프트 검증 실패: ' + e.message);
}

try {
    require('./scripts/verify-repetition-guards.cjs');
} catch (e) {
    errors.push('[REPETITION_GUARD_CHECK] 조건부 표현 반복 감지 검증 실패: ' + e.message);
}

// FT-5: 프리토킹 턴 수 / maxTurns 설정 일관성
try {
    const ftSysContent = fs.readFileSync(path.join(__dirname, 'assets/js/modules/FreeTalkSystem.js'), 'utf8');
    const maxTurnsMatch = ftSysContent.match(/maxTurns\s*[=:]\s*(\d+)/);
    const gftContent = fs.readFileSync(path.join(__dirname, 'assets/js/gallery-freetalk.js'), 'utf8');
    const gftMaxTurnsMatch = gftContent.match(/maxTurns\s*[=:]\s*(\d+)/);
    if (maxTurnsMatch && gftMaxTurnsMatch) {
        // 둘 다 있으면 비교 (같을 필요는 없지만 정보 출력)
    }
    // isProcessingChat 잠금 해제 확인 — early return 전에 해제하는지
    if (ftSysContent.includes('this.isProcessingChat = true')) {
        // finally 블록이 있는지
        if (!ftSysContent.includes('finally')) {
            errors.push('[FREETALK_LOCK] FreeTalkSystem.js: isProcessingChat = true 설정 후 finally 블록 없음 — 잠금 해제 누락 가능');
        }
    }
} catch (e) {}

// FT-6: 제거한 프롬프트 압박 블록이 런타임 경로에 되살아나지 않는지 확인
try {
    const promptsContent = fs.readFileSync(path.join(__dirname, 'assets/js/prompts.js'), 'utf8');
    const ftSysContent = fs.readFileSync(path.join(__dirname, 'assets/js/modules/FreeTalkSystem.js'), 'utf8');
    const gftContent = fs.readFileSync(path.join(__dirname, 'assets/js/gallery-freetalk.js'), 'utf8');
    const ftCoreContent = fs.readFileSync(path.join(__dirname, 'assets/js/freetalk-core.js'), 'utf8');
    const configContent = fs.readFileSync(path.join(__dirname, 'assets/js/modules/config.js'), 'utf8');
    const dialogueContent = fs.readFileSync(path.join(__dirname, 'assets/js/modules/DialogueSystem.js'), 'utf8');
    const activePromptSources = [promptsContent, ftCoreContent, ftSysContent, gftContent].join('\n');
    const promptVersion = (promptsContent.match(/const PROMPT_VERSION = '([^']+)'/) || [])[1];
    const galleryPromptVersion = (gftContent.match(/const GALLERY_FREETALK_PROMPT_VERSION = '([^']+)'/) || [])[1];
    if (promptVersion !== '2.7.41') {
        errors.push('[FREETALK_PROMPT] 메인 프롬프트 캐시 버전이 2.7.41이 아님: ' + promptVersion);
    }
    if (galleryPromptVersion !== '2.7.41') {
        errors.push('[FREETALK_PROMPT] 갤러리 프롬프트 캐시 버전이 2.7.41이 아님: ' + galleryPromptVersion);
    }
    const galleryProgressContent = fs.readFileSync(path.join(__dirname, 'assets/js/gallery-progress.js'), 'utf8');
    const galleryLoaderAffinityContent = fs.readFileSync(path.join(__dirname, 'assets/js/loaders/gallery-loader.js'), 'utf8');
    const galleryControllerContent = fs.readFileSync(path.join(__dirname, 'assets/js/gallery.js'), 'utf8');
    const galleryFreeTalkCss = fs.readFileSync(path.join(__dirname, 'assets/css/gallery-freetalk.css'), 'utf8');
    const galleryAffinityRuntime = [
        gftContent,
        galleryProgressContent,
        galleryLoaderAffinityContent,
        galleryControllerContent,
        galleryFreeTalkCss
    ].join('\n');
    const galleryAffinitySignals = [
        'currentAffinity',
        'changeCurrentAffinity',
        'requestedChange',
        'gft-affinity-display',
        '.gft-affinity-display',
        'affinity_up.mp3',
        "'sound.js'",
        'soundManager?.init?.()',
        'Math.max(-100',
        '"affinity":0',
        '이미 PERFECT 엔딩 이후의 성인 연인',
        'current_affinity='
    ];
    if (galleryAffinitySignals.some(signal => !galleryAffinityRuntime.includes(signal))) {
        errors.push('[FREETALK_AFFINITY] 갤러리 현재 호감도·연인 관계 온도 계약 누락');
    }
    const completedActionCanonSignals = [
        '완료형으로 쓴 행동은 성적 접촉도 이미 일어난 사건이며',
        '이는 캐릭터의 동의나 호응을 대신 정하지 않으므로',
        'including sexual contact, already happened in the scene',
        "This does not decide the character's consent or reciprocation"
    ];
    for (const source of [ftSysContent + ftCoreContent, gftContent + ftCoreContent]) {
        if (completedActionCanonSignals.some(signal => !source.includes(signal))) {
            errors.push('[FREETALK_PROMPT] 완료형 성적 행동의 사실성과 캐릭터 동의가 분리되어 있지 않음');
        }
    }
    const thirdPersonAdultCameraSignals = [
        '모든 narration은 3인칭 시점입니다',
        '성기·삽입·애액·정액·절정이 장면에 있다면',
        'All narration uses third person',
        'genitals, penetration, arousal fluid, semen, or climax',
        '캐릭터의 행동·신체 감각·욕망·내면 반응',
        "character's action, physical sensation, desire, and inner response",
        "infer or narrate the user's response, emotion, or inner thought"
    ];
    for (const [label, source] of [['main', promptsContent], ['gallery', gftContent]]) {
        if (thirdPersonAdultCameraSignals.some(signal => !source.includes(signal))) {
            errors.push('[FREETALK_PROMPT] ' + label + ' 3인칭 성인 친밀 장면 카메라 계약 누락');
        }
        const localizedThirdPersonSignals = [
            '너는·네가·너를·너의·당신은·당신이·당신을·당신의',
            '«Tú», «te», «ti», «tu/tus» y «usted»',
            '「あなた・君・お前」',
            'Les pronoms et déterminants de deuxième personne (« tu », « te », « toi », « ton/ta/tes », « vous », « votre »)',
            '„Du“, „dir“, „dich“, „dein“, „Sie“ und „Ihr“',
            '“Você”, “te”, “ti”, “seu/sua/seus/suas”'
        ];
        if (localizedThirdPersonSignals.some(signal => !source.includes(signal))) {
            errors.push('[FREETALK_PROMPT] ' + label + ' 언어별 narration 2인칭 금지 계약 누락');
        }
        if (!source.includes('segments must contain at least one item with non-empty text')
            || !source.includes('segments에는 빈 문자열이 아닌 항목을 하나 이상 넣습니다')
            || source.includes('Never repeat the same sentence or segment twice in one reply')
            || source.includes('한 답변 안에서 같은 문장이나 segment를 두 번 쓰지 않고')) {
            errors.push('[FREETALK_PROMPT] ' + label + ' 빈 구조 방지 계약 또는 전역 문구 반복 금지 제거 상태 불일치');
        }
    }
    for (const [label, source] of [['main runtime', ftSysContent + ftCoreContent], ['gallery runtime', gftContent + ftCoreContent]]) {
        if (!source.includes('반응·감정·속마음을 자연스럽게 추론하거나 서술')
            || !source.includes("infer or narrate the user's response, emotion, or inner thought")) {
            errors.push('[FREETALK_PROMPT] ' + label + ' 사용자 맥락 추론 유연화 계약 누락');
        }
    }
    for (const [label, source] of [['main', promptsContent], ['gallery', gftContent]]) {
        if (!source.includes('짧거나 수동적')
            || !source.includes('brief or passive')
            || !source.includes('제안·예고·허락')
            || !source.includes('proposal, preview, or permission')) {
            errors.push('[FREETALK_PROMPT] ' + label + ' 짧은 입력 선제 진행 계약 누락');
        }
    }
    const removedAlwaysOnPromptBrakes = [
        '입력을 복창하지 말고',
        'without undoing or echoing',
        'without recap or reversal',
        '복창하거나 되돌리지 말고',
        '고정 수위나 매 턴 체크리스트',
        'fixed intensity target nor a per-turn checklist',
        'una cuota fija',
        '固定ノルマ',
        'quota fixe',
        'festen Quote',
        'cota fixa',
        'A dialogue-only reply is normal',
        '대사만으로 자연스러우면 dialogue 하나면 충분하며',
        '설정을 요약하거나 상담원처럼 확인하지 말고',
        'No premise recap',
        'or restate the user\'s message'
    ];
    for (const phrase of removedAlwaysOnPromptBrakes) {
        if (activePromptSources.includes(phrase)) {
            errors.push('[FREETALK_PROMPT] 제거한 상시 복창·출력·수위 제동 문구가 남아 있음: ' + phrase);
        }
    }
    if (!ftCoreContent.includes('function buildRecentExpressionRepetitionGuard(')
        || !ftSysContent.includes('CupidFreeTalkCore.buildRecentExpressionRepetitionGuard')
        || !gftContent.includes('GalleryFreeTalkCore.buildRecentExpressionRepetitionGuard')) {
        errors.push('[FREETALK_PROMPT] 실제 최근 표현 중복 감지기가 누락됨');
    }
    if (ftSysContent.includes('const gesturePatterns = [')
        || gftContent.includes('const gesturePatterns = [')
        || !/\)\s*>=\s*2\s*&&/.test(ftCoreContent)) {
        errors.push('[FREETALK_PROMPT] 반복 감지가 실제 2회 이상 문구 중복보다 넓게 작동함');
    }
    if (!promptsContent.includes('function getCupidRoleplayQualityIssue(')
        || !promptsContent.includes('unicode_replacement_character')
        || !promptsContent.includes('narration_player_point_of_view')
        || !promptsContent.includes('yuna_hair_canon')
        || !promptsContent.includes('nurse_profession_canon')
        || !promptsContent.includes('german_blick_grammar')) {
        errors.push('[FREETALK_OUTPUT_QUALITY] 다국어 시점·문자·캐릭터 설정 검증기 누락');
    }
    if (!ftSysContent.includes('requestCupidReplyData(repairMessages)')
        || !gftContent.includes('requestCupidGalleryReplyData(repairMessages)')
        || !ftSysContent.includes("qualityError.reason = 'ROLEPLAY_QUALITY_REJECTED'")
        || !gftContent.includes("qualityError.reason = 'ROLEPLAY_QUALITY_REJECTED'")) {
        errors.push('[FREETALK_OUTPUT_QUALITY] 게임/갤러리 저장 전 재생성 경로 누락');
    }
    if (!promptsContent.includes('At the adult reunion exactly four or five years after graduation, she is 30–31, never 36')
        || !promptsContent.includes('Yuna always has silver-white hair and red eyes')
        || !promptsContent.includes('hält seinem/deinem Blick stand')) {
        errors.push('[FREETALK_CANON] 유나/보건선생님/독일어 설정 잠금 누락');
    }
    for (const removedSymbol of [
        'CHAR_SPEECH_STYLES',
        'getRoleplayHardRules',
        'getRoleplayPerformanceGuide',
        'getRoleplayStoryInvariants',
        'GRAPHIC_SEXUAL_REPETITION_GUARD_NOTE',
        '_buildLatestOutsideCueNarrationOverride',
        'buildCupidActionFollowThroughGuard',
        'getSocialContext',
        'otherDatingChars',
        'HIDDEN_KEYWORDS',
        'function getFallbackReply(',
        '_getFallbackReply'
    ]) {
        if (activePromptSources.includes(removedSymbol)) {
            errors.push('[FREETALK_PROMPT] 제거한 압박 프롬프트 심볼이 남아 있음: ' + removedSymbol);
        }
    }
    for (const removedPhrase of [
        '[출력 전 한국어 점검]',
        '짧게 다시 씁니다',
        '실제 말처럼 짧고',
        '실제 연인의 말처럼 짧고',
        'answer in polished target-language prose',
        'silently rewrite every dialogue and narration line',
        'Before outputting JSON, do a native English rewrite pass',
        'Most spoken lines should be one or two short sentences',
        '사용자의 다음 행동·대사·선택·속마음은 대신 쓰지 마세요',
        "Do not write the user's next action, dialogue, choice, or hidden thought",
        '속마음은 겉으로 드러나기 전까지 캐릭터가 알지 못합니다',
        'private thoughts remain unknown until expressed',
        '현재 장면에서는 문장과 몸짓을 새로 쓰세요',
        'Write fresh wording and actions for the current scene',
        '10〜35字程度',
        'una o dos frases cortas',
        'une ou deux phrases courtes',
        'ein oder zwei kurze Sätze',
        'uma ou duas frases curtas'
    ]) {
        if (activePromptSources.includes(removedPhrase)) {
            errors.push('[FREETALK_PROMPT] 제거한 편집/강제 축약 압박이 남아 있음: ' + removedPhrase);
        }
    }
    for (const removedTurnPressure of [
        '[CURRENT_PROGRESS]',
        '[현재 진행 상황]',
        '[Progreso del escenario]',
        '[シナリオ進行度]',
        '[Progression du scénario]',
        '[Szenariofortschritt]',
        '[Progresso do cenário]',
        '; turns=',
        '; 턴=',
        'use compact dialogue and only helpful narration',
        '대사를 짧게 쓰고 꼭 필요한 지문만 붙이세요'
    ]) {
        if (activePromptSources.includes(removedTurnPressure)) {
            errors.push('[FREETALK_PROMPT] 제거한 턴 예산/강제 축약 압박이 남아 있음: ' + removedTurnPressure);
        }
    }
    const galleryPromptBuilderStart = gftContent.indexOf('    _buildSystemPrompt(charId) {');
    const galleryPromptBuilderEnd = gftContent.indexOf('_sanitizeDainOutfitHistory', galleryPromptBuilderStart);
    const galleryPromptBuilder = galleryPromptBuilderStart >= 0 && galleryPromptBuilderEnd > galleryPromptBuilderStart
        ? gftContent.slice(galleryPromptBuilderStart, galleryPromptBuilderEnd)
        : '';
    if (!galleryPromptBuilder.includes("const playerName = String(this.progress.getPlayerName() || '').trim();")
        || /Honey|Cariño|Chéri\(e\)|Liebling|Amor/.test(galleryPromptBuilder)) {
        errors.push('[FREETALK_PROMPT] 갤러리 system prompt가 빈 이름을 고정 애칭으로 주입함');
    }
    for (const fakeCharacterFailure of [
        '응답을 이해할 수 없습니다. 다시 시도하겠습니다.',
        "I couldn't understand the response. Let me try again.",
        '...미안, 잠깐 멍했어. 다시 말해줄래?',
        '...Sorry, I spaced out for a moment.'
    ]) {
        if (activePromptSources.includes(fakeCharacterFailure)) {
            errors.push('[FREETALK_PROMPT] 캐릭터 대사로 위장한 오류 폴백이 남아 있음: ' + fakeCharacterFailure);
        }
    }
    const mainVoiceExampleCalls = (promptsContent.match(/getFreeTalkVoiceExamples\(/g) || []).length;
    if (mainVoiceExampleCalls !== 1 || gftContent.includes('getFreeTalkVoiceExamples(')) {
        errors.push('[FREETALK_PROMPT] 활성 프리토킹 system prompt에 예시 대사 블록이 다시 주입됨');
    }
    const mainSendIndex = ftSysContent.indexOf('async sendChatMessage');
    const gallerySendIndex = gftContent.indexOf('async _handleSend');
    const mainCatchIndex = ftSysContent.indexOf('} catch (error)', mainSendIndex);
    const galleryCatchIndex = gftContent.indexOf('} catch (err)', gallerySendIndex);
    const affinityLogContracts = [
        ['config', configContent, ['affinityChange = null', 'affinityCurrent = null', 'entry.affinityChange', 'entry.affinityCurrent']],
        ['main', ftSysContent, ['const affinityResult = this.applyAffinity(parsed.affinity, scene)', 'affinityChange: affinityResult?.change', 'affinityCurrent: affinityResult?.value', 'const actualChange = newValue - previousValue']],
        ['gallery', gftContent, ['const affinityResult = this._applyAffinityChange(parsed.affinity, requestCharId)', 'affinityChange: affinityResult?.change', 'affinityCurrent: affinityResult?.value']]
    ];
    for (const [label, source, required] of affinityLogContracts) {
        for (const token of required) {
            if (!source.includes(token)) {
                errors.push(`[FREETALK_AFFINITY_LOG] ${label} missing Cupid affinity backup contract: ${token}`);
            }
        }
    }
    for (const [label, source, required] of [
        ['main', ftSysContent, [
            '_freeTalkEpoch', '_invalidateFreeTalkContext', '_activeRequestOwner', '_activeRequestContext',
            'sceneId: requestSceneId', 'charKey', 'history: requestHistory',
            'this._rollbackRequestHistory(requestContext)',
            'this.freeTalkTurns = requestContext.freeTalkTurnsBefore',
            'if (this._activeRequestOwner === requestOwner)'
        ]],
        ['gallery', gftContent, [
            '_galleryTalkEpoch', '_invalidateGalleryTalkContext', '_activeRequestOwner', '_activeRequestContext',
            'charId: this.currentCharId', 'charKey: this.currentCharKey', 'history: this.chatHistory',
            'this._rollbackRequestHistory(requestContext)',
            'if (this._activeRequestOwner === requestOwner)',
            'this._saveMemory(requestCharId, requestHistory)',
            'this._saveMemory(closingCharId, closingHistory)'
        ]]
    ]) {
        for (const snippet of required) {
            if (!source.includes(snippet)) {
                errors.push('[FREETALK_STALE] ' + label + ' 요청 소유권/롤백 계약 누락: ' + snippet);
            }
        }
    }
    const mainInvalidations = (ftSysContent.match(/this\._invalidateFreeTalkContext\(/g) || []).length;
    const galleryInvalidations = (gftContent.match(/this\._invalidateGalleryTalkContext\(/g) || []).length;
    const mainAssertions = (ftSysContent.match(/this\._assertRequestContext\(requestContext/g) || []).length;
    const galleryAssertions = (gftContent.match(/this\._assertRequestContext\(requestContext/g) || []).length;
    if (mainInvalidations < 3 || galleryInvalidations < 2 || mainAssertions < 7 || galleryAssertions < 7) {
        errors.push('[FREETALK_STALE] start/open/skip/end/close 무효화 또는 단계별 요청 소유권 검사가 부족함');
    }
    const mainRollbackIndex = ftSysContent.indexOf('this._rollbackRequestHistory(requestContext)', mainCatchIndex);
    const mainTurnRollbackIndex = ftSysContent.indexOf('this.freeTalkTurns = requestContext.freeTalkTurnsBefore', mainCatchIndex);
    const mainStaleIndex = ftSysContent.indexOf('if (!ownsCurrentContext || error?.isStaleTurn', mainCatchIndex);
    const galleryRollbackIndex = gftContent.indexOf('this._rollbackRequestHistory(requestContext)', galleryCatchIndex);
    const galleryStaleIndex = gftContent.indexOf('if (!ownsCurrentContext || err?.isStaleTurn', galleryCatchIndex);
    if (!(mainCatchIndex >= 0 && mainRollbackIndex > mainCatchIndex && mainTurnRollbackIndex > mainRollbackIndex && mainTurnRollbackIndex < mainStaleIndex)
        || !(galleryCatchIndex >= 0 && galleryRollbackIndex > galleryCatchIndex && galleryRollbackIndex < galleryStaleIndex)) {
        errors.push('[FREETALK_STALE] stale 분기 전에 원래 history/턴을 안전하게 롤백하지 않음');
    }
    if (!dialogueContent.includes('isStillCurrent')
        || !dialogueContent.includes('_renderGeneration')
        || !dialogueContent.includes('_activeRenderOwner')
        || !dialogueContent.includes('if (!ownsRender())')
        || !ftSysContent.includes('() => this._isRequestContextCurrent(requestContext)')
        || !gftContent.includes('requestContext && !this._isRequestContextCurrent(requestContext)')
        || !gftContent.includes('_typingGeneration')
        || !gftContent.includes('_activeTypingOwner')
        || !gftContent.includes('if (!ownsTyping())')) {
        errors.push('[FREETALK_STALE] 장면 전환 중 진행 중인 타이핑 렌더 취소 계약이 누락됨');
    }
    const mainRenderIndex = ftSysContent.indexOf('await this.dialogueSystem.typeText(', mainSendIndex);
    const mainExpressionIndex = ftSysContent.indexOf('this.applyExpression(parsed.expression');
    const mainAffinityIndex = ftSysContent.indexOf('this.applyAffinity(parsed.affinity');
    const galleryRenderIndex = gftContent.indexOf('await this._typeText(displayText, displaySegments, requestContext)', gallerySendIndex);
    const galleryExpressionIndex = gftContent.indexOf('this._updateExpression(parsed.expression, requestCharId', galleryRenderIndex);
    if (!(mainRenderIndex >= 0 && mainExpressionIndex > mainRenderIndex && mainAffinityIndex > mainRenderIndex)
        || !(galleryRenderIndex >= 0 && galleryExpressionIndex > galleryRenderIndex)) {
        errors.push('[FREETALK_ERROR] 렌더 실패 전에 표정 또는 호감도를 적용하는 경로가 남아 있음');
    }
    if (!ftCoreContent.includes('resolveAffinityExpression')
        || !ftCoreContent.includes('buildExpressionAffinityGuidance')
        || !ftSysContent.includes('CupidFreeTalkCore.resolveAffinityExpression')
        || !gftContent.includes('GalleryFreeTalkCore.resolveAffinityExpression')) {
        errors.push('[FREETALK_EXPRESSION] 호감도 증감과 표정의 공용 일관성 계약이 누락됨');
    }
    if (ftSysContent.includes('reply = this.processExpressionTags(reply, scene)')
        || ftSysContent.includes('reply = this.processStatsTags(reply, scene)')) {
        errors.push('[FREETALK_ERROR] 렌더 전에 상태를 바꾸는 레거시 인라인 태그 경로가 남아 있음');
    }
    if (!ftSysContent.includes('방금 입력은 대화 기록에 저장되지 않았습니다.')
        || !gftContent.includes('방금 입력은 대화 기록에 저장되지 않았습니다.')) {
        errors.push('[FREETALK_ERROR] 캐릭터 밖 중립 오류 안내가 누락됨');
    }
    const mainAssistantPush = ftSysContent.indexOf('requestHistory.push({ role: "assistant"', mainSendIndex);
    const mainFreeTalkIncrement = ftSysContent.indexOf('this.galleryManager.incrementFreeTalkCount(charKey)');
    if (mainAssistantPush < 0 || mainFreeTalkIncrement < mainAssistantPush) {
        errors.push('[FREETALK_ERROR] 메인 프리토킹 횟수가 성공 응답 저장 전에 증가함');
    }
    if (gftContent.includes('this._saveMemory(this.currentCharId);')) {
        errors.push('[FREETALK_STALE] gallery 요청 종료 시 현재 캐릭터 메모리를 무조건 덮어쓰는 경로가 남아 있음');
    }
    if (ftSysContent.includes('parsed.text || "..."') || gftContent.includes("parsed.text || '...'")) {
        errors.push('[FREETALK_ERROR] 빈 AI 응답을 캐릭터의 말줄임표 대사로 저장하는 경로가 남아 있음');
    }
    for (const [label, source] of [['main', promptsContent], ['gallery', gftContent]]) {
        if (!source.includes('"segments"') || !source.includes('"expression"')) {
            errors.push('[FREETALK_PROMPT] ' + label + ' segments/expression 계약 누락');
        }
    }
} catch (e) {
    errors.push('[FREETALK_PROMPT] 압박 프롬프트 제거 검증 실패: ' + e.message);
}

console.log('[FREETALK_CHECK] AI 프리토킹 검증 완료\n');

// ===== Relationship Continuity Check: 재회 대사 분기 누락 탐지 =====
console.log('[REL_CHECK] 관계 연속성(재회 대사) 검증 시작...');

const SPEAKER_TO_MET_FLAG = {
    '서연': 'met_seoyeon',
    '유나': 'met_yuna',
    '다인': 'met_dain',
    '담임': 'homeroom_day1',
    '담임선생님': 'homeroom_day1',
    '보건': 'nurse_day1',
    '보건선생님': 'nurse_day1',
    'Seoyeon': 'met_seoyeon',
    'Yuna': 'met_yuna',
    'Dain': 'met_dain',
    'Teacher': 'homeroom_day1',
    'Nurse': 'nurse_day1',
    'Homeroom Teacher': 'homeroom_day1',
    'School Nurse': 'nurse_day1'
};

// "이전에 만난 관계"를 전제로 하는 문맥만 추려서 점검
const REUNION_CUE_REGEX = /(어제의\s*전학생|어제\s*만났|어제도\s*그렇|어제와\s*같은|또\s*왔네|다시\s*왔|어제\s*옥상|어제\s*카페)/;

function hasAnyConditionGuard(scene, requiredFlag) {
    // 씬 자체 condition
    if (scene.condition && scene.condition.includes(requiredFlag)) return true;
    if (scene.excludeCondition && scene.excludeCondition.includes(requiredFlag)) return true;

    // branches 조건
    if (scene.branches && scene.branches.some(b =>
        (b.condition && b.condition.includes(requiredFlag)) ||
        (b.excludeCondition && b.excludeCondition.includes(requiredFlag))
    )) return true;

    // choices 조건
    if (scene.choices && scene.choices.some(c =>
        (c.condition && c.condition.includes(requiredFlag)) ||
        (c.excludeCondition && c.excludeCondition.includes(requiredFlag))
    )) return true;

    return false;
}

function canReachSceneWithoutFlag(targetSceneId, requiredFlag) {
    const keyOf = (sid, st) => sid + '|' + (st.currentDay || 1) + '|' + Object.keys(st.flags).filter(k => st.flags[k]).sort().join(',');
    const q = [{ sceneId: 'start', state: new SimState(), depth: 0 }];
    const visited = new Set();
    const MAX_REL_STEPS = 2500;
    const MAX_REL_STATES = 20000;
    let expanded = 0;

    while (q.length > 0 && expanded < MAX_REL_STATES) {
        const { sceneId, state, depth } = q.shift();
        if (!sceneId || sceneId.endsWith('.html') || depth > MAX_REL_STEPS) continue;
        const entry = allScenes[sceneId];
        if (!entry) continue;

        const sig = keyOf(sceneId, state);
        if (visited.has(sig)) continue;
        visited.add(sig);
        expanded++;

        // 타겟 도달 시 requiredFlag가 false면 "누락 가능"으로 판정
        if (sceneId === targetSceneId && !state.getFlag(requiredFlag)) return true;

        const scene = entry.scene;
        const nextState = state.clone();
        simApplyScene(scene, nextState);

        if (scene.type === 'free_talk' || scene.type === 'input' || scene.type === 'credits') {
            const n = simResolveNext(scene, nextState);
            if (n) q.push({ sceneId: n, state: nextState, depth: depth + 1 });
            continue;
        }

        if (scene.choices && scene.choices.length > 0) {
            const available = simGetAvailableChoices(scene.choices, nextState);
            for (const c of available) {
                const cs = nextState.clone();
                simApplyChoice(c, cs);
                let cn = c.next || null;
                if (!cn && c.affinityBranches && c.affinityChar) {
                    const aff = cs.getAffinity(c.affinityChar);
                    const sorted = [...c.affinityBranches].sort((a, b) => (b.minAffinity || 0) - (a.minAffinity || 0));
                    for (const ab of sorted) {
                        if (aff >= (ab.minAffinity || 0)) { cn = ab.next; break; }
                    }
                }
                if (cn) q.push({ sceneId: cn, state: cs, depth: depth + 1 });
            }
            continue;
        }

        const n = simResolveNext(scene, nextState);
        if (n) q.push({ sceneId: n, state: nextState, depth: depth + 1 });
    }

    return false;
}

let relWarnings = 0;
for (const [sceneId, { scene }] of Object.entries(allScenes)) {
    const i18n = i18nData[sceneId];
    if (!i18n || !i18n.text || !i18n.name) continue;
    if (!REUNION_CUE_REGEX.test(i18n.text)) continue;

    const speaker = i18n.name.replace(/{name}/g, '').trim();
    const requiredFlag = SPEAKER_TO_MET_FLAG[speaker];
    if (!requiredFlag) continue;

    // 이미 명시적인 조건 가드가 있으면 통과
    if (hasAnyConditionGuard(scene, requiredFlag)) continue;

    // 실제로 met_* 없이도 도달 가능한지 시뮬레이션
    if (canReachSceneWithoutFlag(sceneId, requiredFlag)) {
        warnings.push('[REL_CONTINUITY] ' + sceneId + ': "' + speaker + '" 재회 문맥 대사인데 ' + requiredFlag + ' 없이 도달 가능 (분기/플래그 가드 누락 의심)');
        relWarnings++;
    }
}

console.log('[REL_CHECK] 관계 연속성 검증 완료 (' + relWarnings + '건 발견)\n');

// ===== Style Check: 지문 형식 + 오글/올드체 검출 =====
console.log('[STYLE_CHECK] 대사 스타일 검증 시작...');

const BANNED_PATTERNS = [
    { pattern: /\([^)]*웃으며\)/g, desc: '(괄호) 지문 형식 사용 — *이탤릭* 형식으로 변경 필요' },
    { pattern: /\([^)]*하며\)/g, desc: '(괄호) 지문 형식 사용 — *이탤릭* 형식으로 변경 필요' },
    { pattern: /\([^)]*치며\)/g, desc: '(괄호) 지문 형식 사용 — *이탤릭* 형식으로 변경 필요' },
    { pattern: /심장이 미친 듯이|심장이 뛴다|심장이 빨리/g, desc: '과도한 감정 서술 — 행동/디테일로 대체' },
    { pattern: /바, 바보|후훗|쿡쿡/g, desc: '일본식 번역체' },
    { pattern: /콩닥콩닥|두근두근/g, desc: '올드 미연시 클리셰' },
    { pattern: /~쥬|~냥|~데스/g, desc: '유치한 애교' },
];

let styleIssues = 0;
for (const [sceneId, entry] of Object.entries(i18nData)) {
    const text = entry.text || '';
    const choices = entry.choices || [];
    const allTexts = [text, ...choices];
    for (const t of allTexts) {
        for (const { pattern, desc } of BANNED_PATTERNS) {
            pattern.lastIndex = 0;
            if (pattern.test(t)) {
                errors.push('[STYLE] ' + sceneId + ': ' + desc + ' → "' + t.substring(0, 60) + '"');
                styleIssues++;
            }
        }
    }
}

console.log('[STYLE_CHECK] 대사 스타일 검증 완료 (' + styleIssues + '건 발견)\n');

// ===== Image Matching Check =====
console.log('[IMAGE_CHECK] 이미지 매칭 검증 시작...');

// 1. 이미지 파일 존재 확인
const referencedImages = new Set();
for (const day of Object.keys(SCENARIO)) {
    for (const [id, scene] of Object.entries(SCENARIO[day])) {
        if (scene.character) referencedImages.add(scene.character);
        if (scene.background) referencedImages.add(scene.background);
        if (scene.characters) {
            for (const slot of Object.values(scene.characters)) {
                if (slot.src) referencedImages.add(slot.src);
            }
        }
    }
}

let imageMissing = 0;
for (const img of referencedImages) {
    if (!fs.existsSync(path.join(__dirname, img))) {
        errors.push('[IMAGE_MISSING] ' + img + ' 파일이 존재하지 않음');
        imageMissing++;
    }
}

// 2. 캐릭터 이미지 매칭 - character:null인데 name이 특정 캐릭터인 경우 warning
let charMatchWarnings = 0;
for (const [sceneId, { day, scene }] of Object.entries(allScenes)) {
    const i18n = i18nData[sceneId];
    if (!i18n || !i18n.name) continue;

    const speakerName = i18n.name.replace(/{name}/g, '').trim();
    if (!speakerName || speakerName === '' || speakerName === '???' || speakerName === '나') continue;

    // character가 명시적으로 null이고, name이 메인 캐릭터인 경우 → warning
    if (scene.hasOwnProperty('character') && scene.character === null && NAME_TO_PREFIX[speakerName]) {
        // characters 슬롯이 있으면 괜찮음 (메신저/투명 캐릭터 연출)
        if (!scene.characters) {
            // CG/이벤트/엔딩 배경에서는 캐릭터가 이미지에 포함되어 있으므로 제외
            const bg = scene.background || '';
            const isCgBackground = /ending_|_event\d/.test(bg);
            if (!isCgBackground) {
                warnings.push('[IMAGE_MATCH] ' + sceneId + ': speaker="' + speakerName + '" 인데 character=null (캐릭터가 말하는데 이미지 없음)');
                charMatchWarnings++;
            }
        }
    }
    // 반대: character가 있는데 name이 "{name}"(주인공)인 경우는 정상 (나레이션에서 대화 상대 유지)
}

// 3. 배경 이미지 일관성 - 같은 next 체인 내에서 배경이 갑자기 바뀌는데 장소 이동 나레이션이 없는 경우
let bgInconsistencies = 0;
for (const [sceneId, { day, scene }] of Object.entries(allScenes)) {
    if (!scene.next || !allScenes[scene.next]) continue;
    const nextEntry = allScenes[scene.next];
    const nextScene = nextEntry.scene;
    const nextId = scene.next;
    const lookaheadEntry = nextScene.next && allScenes[nextScene.next] ? allScenes[nextScene.next] : null;

    // 현재 씬과 다음 씬 모두 배경이 명시적으로 있고, 서로 다른 경우
    if (scene.background && nextScene.background && scene.background !== nextScene.background) {
        // Day 전환 / 타임슬롯 전환 패턴은 배경 변경이 정상이므로 제외
        const isTimeSlotTransition =
            (/night/.test(sceneId) && /^morning/.test(nextId)) ||  // 밤→아침
            (/_freetalk/.test(sceneId) && /_end/.test(nextId)) ||  // 프리토킹→종료
            (/^(morning|classroom|room_school)/.test(sceneId) && /^lunch/.test(nextId)) ||  // 아침→점심
            (/^lunch/.test(sceneId) && /^after/.test(nextId)) ||  // 점심→방과후
            (/_end$/.test(sceneId) && /_(start|1)$/.test(nextId)) ||  // 타임슬롯 종료→시작
            (/^morning\d*_end/.test(sceneId) && /^(tour|lunch|after)/.test(nextId));  // 아침 종료→다음
        if (isTimeSlotTransition) continue;

        // 의도적 연출 (플래시백, CG 전환, 엔딩 몽타주, 회상/비전)은 제외
        const isIntentionalCut =
            /^night\d*_flashback_/.test(sceneId) ||  // 플래시백 전환
            (sceneId === 'after3_dain_2' && nextId === 'after3_dain_3') ||  // 부상 이벤트 CG
            (sceneId === 'after3_dain_3' && nextId === 'after3_dain_4') ||  // CG → 원래 배경 복귀
            /^bitter_/.test(sceneId) ||  // 엔딩 몽타주 (시간 경과)
            /^hidden_true_/.test(sceneId) ||  // 히든 엔딩 몽타주
            /^ending_/.test(path.basename(nextScene.background || '')) ||  // 엔딩 CG 전환
            /^wall_dain_glimpse_/.test(sceneId) ||  // 회상/비전 연출
            (/^wall_dain_skin\d+_/.test(sceneId) && /^wall_dain_glimpse_/.test(nextId)) ||  // 비전 진입
            /^night\d*_(dream|nightmare)_/.test(sceneId) ||
            /^night\d*_(dream|nightmare)_/.test(nextId) ||
            nextId === 'night3_faithful_msg_yuna_2_ins' ||
            nextId === 'night3_cheat_msg_3_ins' ||
            /^day\d+_final$/.test(sceneId) ||
            /^day\d+_final$/.test(nextId) ||
            scene.type === 'credits' ||
            nextScene.type === 'credits';
        if (isIntentionalCut) continue;

        // 다음 씬의 i18n 텍스트에 장소 이동 힌트가 있는지 확인
        const nextI18n = i18nData[scene.next];
        const currentI18n = i18nData[sceneId];
        const lookaheadI18n = lookaheadEntry ? i18nData[nextScene.next] : null;
        const nextText = nextI18n ? (nextI18n.text || '') : '';
        const currentText = currentI18n ? (currentI18n.text || '') : '';
        const lookaheadText = lookaheadI18n ? (lookaheadI18n.text || '') : '';
        const combinedText = currentText + ' ' + nextText + ' ' + lookaheadText;

        // 장소 이동 관련 키워드
        const locationHints = /이동|걸어|걸었|걷|향하|향했|도착|들어서|나가|나서|나와|나왔|올라|내려|교실|복도|옥상|보건실|운동장|체육관|카페|오락실|집으로|집에서|학교|문을 열|자리에서|돌아|수업이 이어지|점심시간|꿈|악몽|아침 햇살|밤이 깊어|마지막 날|졸업식|졸업 후|\d+년 후|에필로그|move|walk|head|arrive|enter|leave|went|go to|came to|left the|stepped out|back to/i;
        if (!locationHints.test(combinedText)) {
            warnings.push('[BG_CHANGE] ' + sceneId + ' → ' + scene.next + ': 배경 변경 (' + path.basename(scene.background) + ' → ' + path.basename(nextScene.background) + ') 인데 장소 이동 나레이션 없음');
            bgInconsistencies++;
        }
    }
}

console.log('[IMAGE_CHECK] 이미지 매칭 검증 완료 (누락: ' + imageMissing + ', 캐릭터매칭: ' + charMatchWarnings + ', 배경일관성: ' + bgInconsistencies + ')\n');

// =====================================================================
// ===== 렌더링 규칙 검증 (밤 메신저 opacity, 캐릭터 깜빡임, 호감도 데드엔드) =====
// =====================================================================
console.log('[RENDER_CHECK] 렌더링 규칙 검증 시작...');
let renderIssues = 0;

// RD-1: 밤 메신저 씬 opacity 검사 — room_my + night + NPC 화자 + opacity 없음
for (const [sceneId, { day, scene }] of Object.entries(allScenes)) {
    const nightFromFile = scene.type === 'free_talk' && /_night$/.test(scene.__sourceFile || '');
    if ((!scene.night && !nightFromFile) || !scene.background) continue;
    if (!scene.background.includes('room_my')) continue;
    if (scene.type === 'free_talk') continue;

    const i18n = i18nData[sceneId];
    const speaker = i18n?.name;
    if (!speaker || speaker === '{name}' || speaker === '나') continue;

    // characters 형식(opacity 포함)이면 OK
    if (scene.characters) continue;

    // character가 있으면 opacity 누락
    if (scene.character && scene.character !== null) {
        errors.push('[RENDER_OPACITY] "' + sceneId + '" (day' + day + '): 밤 메신저 씬인데 opacity 누락 (화자: ' + speaker + ', 캐릭터: ' + path.basename(scene.character) + ')');
        renderIssues++;
    }
}

// RD-2: 호감도 분기 데드엔드 검사 — affinityBranches의 최저 minAffinity가 0 이상이고 fallback 없음
for (const [sceneId, { day, scene }] of Object.entries(allScenes)) {
    if (!scene.affinityBranches) continue;
    const mins = scene.affinityBranches.map(b => b.minAffinity ?? 0);
    const lowest = Math.min(...mins);
    const hasFallback = !!scene.next || !!scene.fallback;
    if (lowest >= 0 && !hasFallback) {
        errors.push('[RENDER_DEADEND] "' + sceneId + '" (day' + day + '): affinityBranches 최소=' + lowest + ', fallback 없음 — 음수 호감도에서 데드엔드');
        renderIssues++;
    }
}

console.log('[RENDER_CHECK] 렌더링 규칙 검증 완료 (' + renderIssues + '건 발견)\n');

// =====================================================================
// ===== 플레이테스트 리포트 생성 (PLAYTEST_REPORT.md) =====
// =====================================================================
if (!noReport) {
console.log('[REPORT] 플레이테스트 리포트 생성 (seed=' + reportSeedLabel + ')...');

// 엔딩 식별: credits 직전 씬을 엔딩명으로 사용
function getEndingName(pathRenders) {
    for (let i = pathRenders.length - 1; i >= 0; i--) {
        const sid = pathRenders[i];
        if (sid !== 'day5_credits' && sid !== 'day5_ending_restart' && !sid.endsWith('.html')) return sid;
    }
    return pathRenders[pathRenders.length - 1] || 'unknown';
}

// 렌더링 상태 추출
function extractRenderInfo(sceneId) {
    const entry = allScenes[sceneId];
    if (!entry) return null;
    const scene = entry.scene;
    const i18n = i18nData[sceneId] || {};

    let character = null, opacity = 1;
    if (scene.characters) {
        const center = scene.characters.center;
        if (center) {
            character = typeof center === 'object' ? center.src : center;
            opacity = typeof center === 'object' ? (center.opacity ?? 1) : 1;
        }
    } else if (scene.character) {
        character = scene.character;
    }

    const charShort = character ? character.replace(/assets\/images\/characters\//g, '').replace(/\.png/g, '') : '없음';
    const bgShort = scene.background ? scene.background.replace('assets/images/background/', '').replace(/\.(png|jpg)/, '') : '없음';

    const sourceFile = scene.__sourceFile || '';

    return {
        sceneId, day: entry.day,
        speaker: i18n.name || null,
        text: i18n.text || null,
        background: bgShort, character: charShort, opacity,
        night: !!scene.night || (scene.type === 'free_talk' && /_night$/.test(sourceFile)),
        sunset: !!scene.sunset || /_3_afterschool$/.test(sourceFile),
        type: scene.type || 'dialogue',
    };
}

// DFS 리포트용 — 선택지 셔플 + 엔딩 다양성 확보
const reportPaths = [];
const reportMax = 10000;
let reportExplored = 0;

// 셔플 함수 (Fisher-Yates)
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(reportRandom() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// 타겟 캐릭터 전용 선택 — 해당 캐릭터 관련 선택지만 고름 (DFS 아닌 단일 경로)
function pickBestChoice(choices, target, sceneId) {
    if (!target || choices.length <= 1) return choices[0];
    const keywords = {
        Seoyeon: ['seo', 'seoyeon', '서연'],
        Yuna: ['yuna', '유나'],
        Dain: ['dain', '다인'],
        Teacher: ['homeroom', 'teacher', '담임'],
        Nurse: ['nurse', '보건'],
    }[target] || [];
    for (const c of choices) {
        const parts = [c.text || '', c.next || '', sceneId || '', c.setFlag || '', ...(c.setFlags || [])];
        if (c.stats) parts.push(...Object.keys(c.stats));
        const txt = parts.join(' ').toLowerCase();
        if (keywords.some(k => txt.includes(k))) return c;
    }
    return choices[0]; // 매칭 없으면 첫 번째
}

// 단일 경로 시뮬레이션 — 타겟 캐릭터에 맞춰 최적 선택지를 고르며 한 경로만 추적
function simulateSinglePath(target) {
    const state = new SimState();
    const trail = ['start'];
    const choicesMade = [];
    let sceneId = 'start';

    for (let step = 0; step < MAX_STEPS; step++) {
        if (!sceneId || sceneId.endsWith('.html')) break;
        const entry = allScenes[sceneId];
        if (!entry) break;
        const scene = entry.scene;
        simApplyScene(scene, state);

        if (scene.type === 'credits') {
            const nextId = simResolveNext(scene, state);
            if (nextId) { trail.push(nextId); sceneId = nextId; } else break;
            continue;
        }
        if (scene.type === 'free_talk' || scene.type === 'input') {
            const nextId = simResolveNext(scene, state);
            if (nextId) { trail.push(nextId); sceneId = nextId; } else break;
            continue;
        }
        if (scene.choices && scene.choices.length > 0) {
            const available = simGetAvailableChoices(scene.choices, state);
            if (available.length === 0) break;
            const chosen = pickBestChoice(available, target, sceneId);
            simApplyChoice(chosen, state);
            const cText = chosen.text || (i18nData[sceneId]?.choices?.[available.indexOf(chosen)]?.text) || '(선택)';
            choicesMade.push({ scene: sceneId, text: cText });
            // choice-level affinityBranches resolve
            let nextId = null;
            if (chosen.affinityBranches && chosen.affinityChar) {
                const aff = state.getAffinity(chosen.affinityChar);
                const sorted = [...chosen.affinityBranches].sort((a, b) => (b.minAffinity || 0) - (a.minAffinity || 0));
                for (const b of sorted) { if (aff >= (b.minAffinity || 0)) { nextId = b.next; break; } }
            }
            if (!nextId) nextId = chosen.next;
            if (nextId) { trail.push(nextId); sceneId = nextId; } else break;
            continue;
        }
        const nextId = simResolveNext(scene, state);
        if (nextId) { trail.push(nextId); sceneId = nextId; } else break;
    }
    return { endScene: getEndingName(trail), trail, choices: choicesMade, stats: { ...state.stats } };
}

// 전략별 타겟 경로 생성 — 각 캐릭터 루트 + 특수 엔딩 조합
const strategies = [
    'Seoyeon', 'Yuna', 'Dain', 'Teacher', 'Nurse',   // 메인 5캐릭터
    null,                                               // 무작위 (alone/friend 등)
];
const foundEndings = new Set();

for (const target of strategies) {
    const result = simulateSinglePath(target);
    reportPaths.push(result);
    foundEndings.add(result.endScene);
    reportExplored++;
}

// 추가 DFS 탐색 — 남은 경로 수 채우기 (셔플 다양성)
function shuffleArr(arr) { const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(reportRandom()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
const ROUNDS = 10;
const PER_ROUND = Math.floor((reportMax - reportExplored) / ROUNDS);

for (let round = 0; round < ROUNDS && reportExplored < reportMax; round++) {
    const rStack = [{ sceneId: 'start', state: new SimState(), trail: ['start'], choices: [], depth: 0 }];
    let roundExplored = 0;

    while (rStack.length > 0 && roundExplored < PER_ROUND && reportExplored < reportMax) {
        const { sceneId, state, trail, choices, depth } = rStack.pop();
        if (depth > MAX_STEPS) continue;

        if (sceneId && sceneId.endsWith('.html')) {
            reportPaths.push({ endScene: getEndingName(trail), trail, choices, stats: { ...state.stats } });
            reportExplored++; roundExplored++;
            continue;
        }
        const entry = allScenes[sceneId];
        if (!entry) continue;
        const scene = entry.scene;
        simApplyScene(scene, state);

        if (scene.type === 'credits') {
            const nextId = simResolveNext(scene, state);
            if (nextId) rStack.push({ sceneId: nextId, state: state.clone(), trail: [...trail, nextId], choices, depth: depth + 1 });
            else reportPaths.push({ endScene: getEndingName(trail), trail, choices, stats: { ...state.stats } });
            reportExplored++; roundExplored++;
            continue;
        }
        if (scene.type === 'free_talk' || scene.type === 'input') {
            const nextId = simResolveNext(scene, state);
            if (nextId) rStack.push({ sceneId: nextId, state: state.clone(), trail: [...trail, nextId], choices, depth: depth + 1 });
            continue;
        }
        if (scene.choices && scene.choices.length > 0) {
            for (const choice of shuffleArr(simGetAvailableChoices(scene.choices, state))) {
                const cs = state.clone();
                simApplyChoice(choice, cs);
                const cText = choice.text || (i18nData[sceneId]?.choices?.[simGetAvailableChoices(scene.choices, state).indexOf(choice)]?.text) || '(선택)';
                const nc = [...choices, { scene: sceneId, text: cText }];
                if (choice.affinityBranches) {
                    for (const ab of choice.affinityBranches) {
                        if (ab.next) rStack.push({ sceneId: ab.next, state: cs.clone(), trail: [...trail, ab.next], choices: nc, depth: depth + 1 });
                    }
                    if (choice.next) rStack.push({ sceneId: choice.next, state: cs.clone(), trail: [...trail, choice.next], choices: nc, depth: depth + 1 });
                } else if (choice.next) {
                    rStack.push({ sceneId: choice.next, state: cs, trail: [...trail, choice.next], choices: nc, depth: depth + 1 });
                }
            }
            continue;
        }
        const nextId = simResolveNext(scene, state);
        if (nextId) rStack.push({ sceneId: nextId, state: state.clone(), trail: [...trail, nextId], choices, depth: depth + 1 });
    }
}

// 엔딩 통계
const endingStats = {};
for (const p of reportPaths) {
    endingStats[p.endScene] = (endingStats[p.endScene] || 0) + 1;
}
const sortedEndings = Object.entries(endingStats).sort((a, b) => b[1] - a[1]);

// 엔딩별 대표 경로 (가장 짧은 것)
const repPaths = {};
for (const p of reportPaths) {
    if (!repPaths[p.endScene] || p.trail.length < repPaths[p.endScene].trail.length) {
        repPaths[p.endScene] = p;
    }
}

// MD 리포트 생성
let md = '# Cupid 플레이테스트 리포트\n\n';
md += '> 결정론적 시드: `' + reportSeedLabel + '`\n\n';
md += '## 요약\n\n| 항목 | 값 |\n|------|----|';
md += '\n| 탐색 경로 | ' + reportExplored + '개 |';
md += '\n| 완료 경로 | ' + reportPaths.length + '개 |';
md += '\n| 엔딩 종류 | ' + sortedEndings.length + '종 |';
md += '\n| 전체 씬 | ' + Object.keys(allScenes).length + '개 |\n\n';

md += '## 엔딩 도달 통계\n\n| 엔딩 | 도달 경로 수 |\n|------|-------------|\n';
for (const [ending, count] of sortedEndings) {
    md += '| `' + ending + '` | ' + count + ' |\n';
}
md += '\n';

md += '## 경로 상세 (엔딩별 대표 경로)\n\n';
for (const [ending, p] of Object.entries(repPaths).sort((a, b) => a[0].localeCompare(b[0]))) {
    md += '### ' + ending + '\n\n';
    if (p.choices.length > 0) {
        md += '**선택지:**\n';
        for (const c of p.choices) md += '- `' + c.scene + '`: ' + c.text + '\n';
        md += '\n';
    }
    md += '**최종 호감도:** 서연=' + p.stats.Seoyeon + ' 유나=' + p.stats.Yuna + ' 다인=' + p.stats.Dain + ' 담임=' + p.stats.Teacher + ' 보건=' + p.stats.Nurse + '\n\n';

    md += '<details>\n<summary>씬 타임라인 (' + p.trail.length + '씬)</summary>\n\n';
    md += '| # | 씬 ID | 화자 | 배경 | 캐릭터 | OP | 밤 | 대사 (앞 30자) |\n';
    md += '|---|--------|------|------|--------|----|----|----------------|\n';
    let curDay = 0;
    for (let i = 0; i < p.trail.length; i++) {
        const r = extractRenderInfo(p.trail[i]);
        if (!r) continue;
        if (r.day !== curDay) { curDay = r.day; md += '| | **Day ' + curDay + '** | | | | | | |\n'; }
        const txt = r.text ? r.text.replace(/\|/g, '｜').replace(/\n/g, ' ').slice(0, 30) : '';
        md += '| ' + (i+1) + ' | `' + r.sceneId + '` | ' + (r.speaker||'') + ' | ' + r.background + ' | ' + r.character + ' | ' + (r.opacity < 1 ? r.opacity : '') + ' | ' + (r.night ? '🌙' : r.sunset ? '🌅' : '') + ' | ' + txt + ' |\n';
    }
    md += '\n</details>\n\n';
}

// 씬 커버리지
const visitedInReport = new Set();
for (const p of reportPaths) p.trail.forEach(s => visitedInReport.add(s));
const unvisitedReport = Object.keys(allScenes).filter(id => !visitedInReport.has(id));
md += '## 씬 커버리지\n\n';
md += '- 전체: ' + Object.keys(allScenes).length + '개\n';
md += '- 방문: ' + visitedInReport.size + '개 (' + (visitedInReport.size / Object.keys(allScenes).length * 100).toFixed(1) + '%)\n';
md += '- 미방문: ' + unvisitedReport.length + '개\n';
if (unvisitedReport.length > 0) {
    md += '\n**미방문 씬:**\n';
    const byDay = {};
    for (const id of unvisitedReport) { const d = allScenes[id].day; (byDay[d] = byDay[d] || []).push(id); }
    for (const d of Object.keys(byDay).sort()) md += '- Day ' + d + ': ' + byDay[d].join(', ') + '\n';
}

fs.writeFileSync(path.join(__dirname, 'PLAYTEST_REPORT.md'), md, 'utf8');
console.log('[REPORT] 플레이테스트 리포트 생성 완료 — ' + reportExplored + '경로, ' + sortedEndings.length + '종 엔딩');
console.log('[REPORT] → PLAYTEST_REPORT.md\n');
} else {
    console.log('[REPORT] --no-report: 플레이테스트 리포트 파일 생성을 건너뜁니다.\n');
}

// 엔딩 도달 케이스 정의: { name, flags, stats, expectedScenes(도달해야 할 씬 목록) }
const endingTests = [
    // 메인 3인 PERFECT (80+)
    { name: '서연 PERFECT', flags: { day4_confession_accepted: true, route_seoyeon: true, met_seoyeon: true }, stats: { Seoyeon: 85 }, expect: ['perfect_epilogue_4_seo'] },
    { name: '유나 PERFECT', flags: { day4_confession_accepted: true, route_yuna: true, met_yuna: true }, stats: { Yuna: 85 }, expect: ['perfect_epilogue_4_yuna'] },
    { name: '다인 PERFECT', flags: { day4_confession_accepted: true, route_dain: true, met_dain: true }, stats: { Dain: 85 }, expect: ['perfect_epilogue_4_dain'] },
    // 메인 3인 TRUE (60~79)
    { name: '서연 TRUE', flags: { day4_confession_accepted: true, route_seoyeon: true, met_seoyeon: true }, stats: { Seoyeon: 70 }, expect: ['true_epilogue_7'] },
    { name: '유나 TRUE', flags: { day4_confession_accepted: true, route_yuna: true, met_yuna: true }, stats: { Yuna: 70 }, expect: ['true_epilogue_7'] },
    { name: '다인 TRUE', flags: { day4_confession_accepted: true, route_dain: true, met_dain: true }, stats: { Dain: 70 }, expect: ['true_epilogue_7'] },
    // 메인 3인 GOOD (40~59)
    { name: '서연 GOOD', flags: { day4_confession_accepted: true, route_seoyeon: true, met_seoyeon: true }, stats: { Seoyeon: 50 }, expect: ['good_5_cg_seo'] },
    { name: '유나 GOOD', flags: { day4_confession_accepted: true, route_yuna: true, met_yuna: true }, stats: { Yuna: 50 }, expect: ['good_5_cg_yuna'] },
    { name: '다인 GOOD', flags: { day4_confession_accepted: true, route_dain: true, met_dain: true }, stats: { Dain: 50 }, expect: ['good_5_cg_dain'] },
    // 메인 3인 BITTERSWEET (<40)
    { name: '서연 BITTERSWEET', flags: { day4_confession_accepted: true, route_seoyeon: true, met_seoyeon: true }, stats: { Seoyeon: 20 }, expect: ['bitter_epilogue_3'] },
    { name: '유나 BITTERSWEET', flags: { day4_confession_accepted: true, route_yuna: true, met_yuna: true }, stats: { Yuna: 20 }, expect: ['bitter_epilogue_3'] },
    { name: '다인 BITTERSWEET', flags: { day4_confession_accepted: true, route_dain: true, met_dain: true }, stats: { Dain: 20 }, expect: ['bitter_epilogue_3'] },
    // 담임 3종
    { name: '담임 PERFECT', flags: { homeroom_day5: true }, stats: { Teacher: 85 }, expect: ['hidden_perfect_homeroom_ep4'] },
    { name: '담임 TRUE LOVE', flags: { homeroom_day5: true }, stats: { Teacher: 70 }, expect: ['hidden_true_homeroom_8'] },
    { name: '담임 GOOD', flags: { homeroom_day5: true }, stats: { Teacher: 40 }, expect: ['hidden_good_homeroom_4'] },
    // 보건 3종
    { name: '보건 PERFECT', flags: { nurse_day5: true }, stats: { Nurse: 85 }, expect: ['hidden_perfect_nurse_ep4'] },
    { name: '보건 TRUE LOVE', flags: { nurse_day5: true }, stats: { Nurse: 70 }, expect: ['hidden_true_nurse_8'] },
    { name: '보건 GOOD', flags: { nurse_day5: true }, stats: { Nurse: 40 }, expect: ['hidden_good_nurse_4'] },
    // 특수 엔딩
    { name: 'HAREM END', flags: { ending_harem: true }, stats: {}, expect: ['harem_8'] },
    { name: 'GOOD END (고백 수락)', flags: { day4_confession_accepted: true, route_seoyeon: true, met_seoyeon: true }, stats: { Seoyeon: 50 }, expect: ['good_5_cg_seo'] },
    { name: 'MAYHEM END', flags: { day3_has_multiple_dates: true, day3_caught_multiple_dates: true }, stats: {}, expect: ['mayhem_7'] },
    { name: 'GOOD END (뒤늦은 고백)', flags: { day5_confessed: true, route_seoyeon: true, met_seoyeon: true }, stats: { Seoyeon: 55 }, expect: ['good_5_cg_seo'] },
    { name: 'CONFESS FAIL END', flags: { day5_confessed: true, route_seoyeon: true, met_seoyeon: true }, stats: { Seoyeon: 30 }, expect: ['confess_fail_5'] },
    { name: 'FRIEND END', flags: { day4_waited: true }, stats: {}, expect: ['friend_12'] },
    { name: 'ALONE END', flags: {}, stats: {}, expect: ['alone_5'] },
];

// ===== TEST: 엔딩 도달 케이스 검증 =====
console.log('[ENDING_CHECK] ' + endingTests.length + '개 엔딩 케이스 도달 검증 시작...');

const endingResults = { pass: [], fail: [] };
for (const test of endingTests) {
    const state = new SimState();
    // 플래그 설정
    for (const [flag, val] of Object.entries(test.flags)) state.setFlag(flag, val);
    // 스탯 설정
    for (const [char, val] of Object.entries(test.stats)) state.stats[char] = val;
    // ending_start에서 시뮬레이션
    const trail = [];
    let current = 'ending_start';
    let reached = false;
    for (let i = 0; i < 500; i++) {
        if (!current || current.endsWith('.html')) break;
        trail.push(current);
        if (test.expect.includes(current)) { reached = true; break; }
        const entry = allScenes[current];
        if (!entry) break;
        const scene = entry.scene;
        simApplyScene(scene, state);
        if (scene.type === 'credits') {
            const nxt = simResolveNext(scene, state);
            if (nxt) { current = nxt; continue; } else break;
        }
        if (scene.choices && scene.choices.length > 0) {
            const avail = simGetAvailableChoices(scene.choices, state);
            if (avail.length === 0) break;
            simApplyChoice(avail[0], state);
            current = avail[0].next || simResolveNext(scene, state);
            continue;
        }
        const next = simResolveNext(scene, state);
        if (!next) break;
        current = next;
    }
    if (reached) {
        endingResults.pass.push(test.name);
    } else {
        endingResults.fail.push({ name: test.name, lastScene: trail[trail.length - 1] || '(none)', trail: trail.slice(-5) });
        errors.push('[ENDING_CHECK] "' + test.name + '" 미도달 — 마지막 씬: ' + (trail[trail.length - 1] || 'none') + ' (기대: ' + test.expect.join('/') + ')');
    }
}

console.log('[ENDING_CHECK] 결과: ' + endingResults.pass.length + '/' + endingTests.length + ' 도달, ' + endingResults.fail.length + '개 실패');
if (endingResults.fail.length > 0) {
    for (const f of endingResults.fail) {
        console.log('  ❌ ' + f.name + ' → 마지막: ' + f.lastScene + ' (경로: ' + f.trail.join(' → ') + ')');
    }
}

// ===== I18N_HANGUL_CHECK: 비-ko i18n JSON에 한글 유출 감지 (하드블록) =====
// 유저가 비한국어 페이지에서 한국어를 보는 사고 방지용
console.log('[I18N_HANGUL_CHECK] 비한국어 i18n 한글 유출 검증 시작...');
{
    const I18N_BASE = path.join(BASE, 'i18n');
    const HANGUL_RE = /[\u3131-\u318E\uAC00-\uD7A3]/;
    const scanFields = ['name', 'text', 'context', 'personality', 'affinityText'];
    const langs = ['en', 'ja', 'es', 'fr', 'de', 'pt'];
    let hangulLeaks = 0;
    for (const lang of langs) {
        const dir = path.join(I18N_BASE, lang);
        if (!fs.existsSync(dir)) continue;
        const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
        for (const file of files) {
            let data;
            try { data = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')); } catch (_) { continue; }
            for (const nodeId of Object.keys(data)) {
                const node = data[nodeId];
                if (!node || typeof node !== 'object') continue;
                for (const f of scanFields) {
                    const v = node[f];
                    if (typeof v === 'string' && HANGUL_RE.test(v)) {
                        errors.push('[I18N_HANGUL_LEAK] ' + lang + '/' + file + ' :: ' + nodeId + '.' + f + ' → 한글 포함: ' + v.slice(0, 60));
                        hangulLeaks++;
                    }
                }
                if (Array.isArray(node.choices)) {
                    for (let i = 0; i < node.choices.length; i++) {
                        const v = node.choices[i];
                        if (typeof v === 'string' && HANGUL_RE.test(v)) {
                            errors.push('[I18N_HANGUL_LEAK] ' + lang + '/' + file + ' :: ' + nodeId + '.choices[' + i + '] → 한글 포함: ' + v.slice(0, 60));
                            hangulLeaks++;
                        }
                    }
                }
            }
        }
    }
    console.log('[I18N_HANGUL_CHECK] 완료 (' + hangulLeaks + '건 발견)');
}

// ===== Print Results =====
console.log('========== CUPID VALIDATION RESULTS ==========\n');
console.log('Total scenes: ' + Object.keys(allScenes).length);
console.log('Total i18n entries: ' + Object.keys(i18nData).length);
console.log('Total flags set: ' + setFlags.size + ', checked: ' + checkedFlags.size);
console.log('Playtest paths: ' + pathsExplored + ' explored, ' + completedPaths.length + ' completed, ' + deadEnds.length + ' dead ends');
console.log();

if (errors.length === 0 && warnings.length === 0) {
    console.log('✅ ALL CHECKS PASSED - 0 errors, 0 warnings!');
} else {
    if (errors.length > 0) {
        console.log('❌ ERRORS (' + errors.length + '):\n');
        errors.forEach(e => console.log('  ' + e));
        console.log();
    }
    if (warnings.length > 0) {
        console.log('⚠️ WARNINGS (' + warnings.length + '):\n');
        warnings.forEach(w => console.log('  ' + w));
        console.log();
    }
}
