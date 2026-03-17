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
    getFlag(name) { return this.flags[name] ?? false; }
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
            if (/\b(window|document)\b/.test(al.text)) {
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

console.log('[PLAYTEST] 메모리 누수 검사 완료\n');

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
