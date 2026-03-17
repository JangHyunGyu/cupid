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
            freeTalkScenes[t].predecessors.push({ id: sceneId, bg: scene.background });
        }
    }
}
for (const [ftId, { scene: ftScene, predecessors }] of Object.entries(freeTalkScenes)) {
    if (predecessors.length === 0) continue;
    const ftBg = ftScene.background;
    for (const pred of predecessors) {
        if (pred.bg && ftBg && pred.bg !== ftBg) {
            warnings.push('[FREETALK_BG] ' + ftId + ': bg="' + ftBg + '" but predecessor ' + pred.id + ' uses bg="' + pred.bg + '"');
        }
    }
}

// ===== 5. Night Freetalk missing night flag =====
for (const [sceneId, { scene }] of Object.entries(allScenes)) {
    if (scene.type === 'free_talk' && /night/i.test(sceneId) && !scene.night) {
        errors.push('[NIGHT_FLAG] ' + sceneId + ': night freetalk missing "night": true');
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

    const addChecked = (c) => { if (typeof c === 'string') checkedFlags.add(c); };
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
const i18nLangs = ['en', 'ja', 'fr', 'es', 'de'];
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
    const langIndexFiles = htmlFiles.filter(f => /^index-(en|es|ja|fr|de)\.html$/.test(f.name));

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

// game.html(KO)도 동일 체크
const koGame = htmlFiles.find(f => f.name === 'game.html');
if (koGame) {
    const langGameFiles = htmlFiles.filter(f => /^game-(en|es|ja|fr|de)\.html$/.test(f.name));
    for (const langFile of langGameFiles) {
        // maxlength 불일치
        const koMax = (koGame.content.match(/maxlength="(\d+)"/) || [])[1];
        const langMax = (langFile.content.match(/maxlength="(\d+)"/) || [])[1];
        if (koMax && langMax && koMax !== langMax) {
            warnings.push('[HTML_SYNC] ' + langFile.name + ': maxlength="' + langMax + '" ≠ KO의 maxlength="' + koMax + '"');
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
        if (['ko', 'en', 'es', 'ja', 'fr', 'de'].includes(charId)) continue;
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
    const loaderVersion = (loaderConfigContent.match(/VERSION:\s*'([^']+)'/) || [])[1];

    // game-loader.js hardcoded version
    const gameLoaderPath = path.join(__dirname, 'assets/js/loaders/game-loader.js');
    const gameLoaderContent = fs.readFileSync(gameLoaderPath, 'utf8');
    const gameLoaderVersion = (gameLoaderContent.match(/const\s+version\s*=\s*'([^']+)'/) || [])[1];

    // gallery-loader.js hardcoded version
    const galleryLoaderPath = path.join(__dirname, 'assets/js/loaders/gallery-loader.js');
    const galleryLoaderContent = fs.readFileSync(galleryLoaderPath, 'utf8');
    const galleryLoaderVersion = (galleryLoaderContent.match(/const\s+version\s*=\s*'([^']+)'/) || [])[1];

    // modules/config.js ASSET_VERSION
    const modulesConfigPath = path.join(__dirname, 'assets/js/modules/config.js');
    const modulesConfigContent = fs.readFileSync(modulesConfigPath, 'utf8');
    const assetVersion = (modulesConfigContent.match(/ASSET_VERSION\s*=\s*'([^']+)'/) || [])[1];

    const versions = { 'loaders/config.js(LoaderConfig)': loaderVersion, 'game-loader.js': gameLoaderVersion, 'gallery-loader.js': galleryLoaderVersion, 'modules/config.js(ASSET_VERSION)': assetVersion };
    const uniqueVersions = new Set(Object.values(versions).filter(Boolean));
    if (uniqueVersions.size > 1) {
        const detail = Object.entries(versions).map(([k, v]) => k + '=' + v).join(', ');
        errors.push('[VERSION_SYNC] JS 버전 불일치: ' + detail);
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

// ===== Print Results =====
console.log('\n========== CUPID VALIDATION RESULTS ==========\n');
console.log('Total scenes: ' + Object.keys(allScenes).length);
console.log('Total i18n entries: ' + Object.keys(i18nData).length);
console.log('Total flags set: ' + setFlags.size + ', checked: ' + checkedFlags.size);
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
