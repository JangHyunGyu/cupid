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
    "담임선생님": "teacher", "보건선생님": "nurse",
    "Seoyeon": "seyoun", "Yuna": "yuna", "Dain": "dain",
    "Teacher": "teacher", "Nurse": "nurse"
};

const errors = [];
const warnings = [];

function sceneExists(id) {
    return !id || allScenes[id] !== undefined;
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
    const expectedPrefix = NAME_TO_PREFIX[speakerName];
    if (scene.character && typeof scene.character === 'string' && expectedPrefix) {
        const charFile = scene.character.split('/').pop();
        const actualPrefix = charFile.split('_')[0];
        if (actualPrefix !== expectedPrefix) {
            warnings.push('[CHAR_SPEAKER] ' + sceneId + ': speaker="' + speakerName + '" expects ' + expectedPrefix + ' but shows ' + actualPrefix + ' (' + charFile + ')');
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
