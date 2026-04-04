#!/usr/bin/env node
/**
 * parse-scenario.js
 * SCENARIO.md → 코드(scenario JS + i18n ko JSON) 변환
 *
 * 사용법: node parse-scenario.js
 * 출력: assets/js/scenario/day*_*.js, assets/js/i18n/ko/day*_*.json
 *
 * ⚠️ 기존 JS/JSON 파일을 덮어씁니다!
 * ⚠️ 한국어(ko) i18n만 생성합니다. 다른 언어는 별도 번역 필요.
 */

const fs = require('fs');
const path = require('path');

const INPUT = path.join(__dirname, 'SCENARIO.md');
const SCENARIO_DIR = path.join(__dirname, 'assets/js/scenario');
const I18N_DIR = path.join(__dirname, 'assets/js/i18n/ko');

const BG_PREFIX = 'assets/images/background/';
const CHAR_PREFIX = 'assets/images/characters/';

// ─── 파서 ───

function parse() {
    const md = fs.readFileSync(INPUT, 'utf-8');
    const lines = md.split('\n');

    // 마커 사이만 파싱 (게임 설정 부분 스킵)
    const MARKER_START = '<!-- SCENARIO-AUTO-START -->';
    const MARKER_END = '<!-- SCENARIO-AUTO-END -->';
    const startIdx = lines.findIndex(l => l.trim() === MARKER_START);
    const endIdx = lines.findIndex(l => l.trim() === MARKER_END);
    const parseLines = (startIdx !== -1 && endIdx !== -1)
        ? lines.slice(startIdx + 1, endIdx)
        : lines; // 마커 없으면 전체 파싱 (하위호환)

    const files = {}; // baseName → { scenes: Map<id, sceneObj>, i18n: Map<id, i18nObj> }
    let currentBase = null;
    let currentSceneId = null;
    let currentScene = null;
    let currentI18n = null;
    let inChoices = false;
    let inBranches = false;
    let inAffinityBranches = false;
    let inChoiceAffinityBranch = false;
    let lastChoiceIdx = -1;

    for (let i = 0; i < parseLines.length; i++) {
        const line = parseLines[i];
        const trimmed = line.trim();

        // ── 파일 섹션 헤더 ──
        const fileMatch = trimmed.match(/^## \d일차 — .+ `([^`]+)`$/);
        if (fileMatch) {
            flushScene();
            currentBase = fileMatch[1];
            if (!files[currentBase]) {
                files[currentBase] = { scenes: new Map(), i18n: new Map() };
            }
            continue;
        }

        // Day 헤더, 빈 줄, 구분선, 블록인용(설명) 스킵
        if (/^# \d일차$/.test(trimmed)) continue;
        if (/^# CUPID/.test(trimmed)) continue;
        if (/^>/.test(trimmed) && !currentSceneId) continue;
        if (trimmed === '---') continue;
        if (trimmed === '') continue;

        // ── 씬 헤더 ──
        const sceneMatch = trimmed.match(/^### `([^`]+)`$/);
        if (sceneMatch) {
            flushScene();
            currentSceneId = sceneMatch[1];
            currentScene = {};
            currentI18n = {};
            inChoices = false;
            inBranches = false;
            inAffinityBranches = false;
            inChoiceAffinityBranch = false;
            continue;
        }

        if (!currentSceneId || !currentBase) continue;

        // ── 선택지 내 호감분기 하위항목 ──
        if (inChoiceAffinityBranch) {
            const abMatch = trimmed.match(/^- \[(\d+)\+\] → `([^`]+)`$/);
            if (abMatch) {
                const choice = currentScene.choices[lastChoiceIdx];
                if (!choice.affinityBranches) choice.affinityBranches = [];
                choice.affinityBranches.push({ minAffinity: parseInt(abMatch[1]), next: abMatch[2] });
                continue;
            }
            const abDefault = trimmed.match(/^- \[기본\] → `([^`]+)`$/);
            if (abDefault) {
                const choice = currentScene.choices[lastChoiceIdx];
                if (!choice.affinityBranches) choice.affinityBranches = [];
                choice.affinityBranches.push({ minAffinity: -100, next: abDefault[1] });
                continue;
            }
            inChoiceAffinityBranch = false;
        }

        // ── 선택지 항목 ──
        if (inChoices) {
            // 호감분기 선택지: N. "text" → 호감분기: CharName | ...
            const choiceAffMatch = trimmed.match(/^(\d+)\.\s*(?:"([^"]*)")?\s*→ 호감분기: (\w+)(?:\s*\|\s*플래그: (.+))?$/);
            if (choiceAffMatch) {
                const idx = parseInt(choiceAffMatch[1]) - 1;
                lastChoiceIdx = idx;
                const choiceText = choiceAffMatch[2] || null;
                const charName = choiceAffMatch[3];
                const flagStr = choiceAffMatch[4];

                if (!currentScene.choices) currentScene.choices = [];
                const choice = { affinityChar: charName };
                if (flagStr) {
                    choice.setFlags = flagStr.match(/`([^`]+)`/g)?.map(f => f.replace(/`/g, '')) || [];
                }
                currentScene.choices[idx] = choice;

                if (!currentI18n.choices) currentI18n.choices = [];
                if (choiceText) currentI18n.choices[idx] = choiceText;

                inChoiceAffinityBranch = true;
                continue;
            }

            // 일반 선택지: N. "text" → `next` | stats | 플래그: ...
            const choiceMatch = trimmed.match(/^(\d+)\.\s*(?:"([^"]*)")?\s*→ `([^`]+)`(?:\s*\|\s*(.+))?$/);
            if (choiceMatch) {
                const idx = parseInt(choiceMatch[1]) - 1;
                const choiceText = choiceMatch[2] || null;
                const nextScene = choiceMatch[3];
                const rest = choiceMatch[4] || '';

                if (!currentScene.choices) currentScene.choices = [];
                const choice = { next: nextScene };

                // rest 파싱: "CharName +N, ..." 또는 "플래그: ..."
                const restParts = rest.split(/\s*\|\s*/);
                for (const part of restParts) {
                    const flagMatch = part.match(/^플래그:\s*(.+)$/);
                    if (flagMatch) {
                        choice.setFlags = flagMatch[1].match(/`([^`]+)`/g)?.map(f => f.replace(/`/g, '')) || [];
                    } else if (part.trim()) {
                        choice.stats = parseStats(part.trim());
                    }
                }

                currentScene.choices[idx] = choice;

                if (!currentI18n.choices) currentI18n.choices = [];
                if (choiceText) currentI18n.choices[idx] = choiceText;

                continue;
            }

            // 선택지 구간이 아닌 줄 → 선택지 끝
            if (!trimmed.startsWith('-') && !trimmed.match(/^\d+\./)) {
                inChoices = false;
            }
        }

        // ── 분기 하위항목 ──
        if (inBranches) {
            const condMatch = trimmed.match(/^- \[`([^`]+)`\] → `([^`]+)`$/);
            if (condMatch) {
                currentScene.branches.push({ condition: condMatch[1], next: condMatch[2] });
                continue;
            }
            const defaultMatch = trimmed.match(/^- \[기본\] → `([^`]+)`$/);
            if (defaultMatch) {
                currentScene.branches.push({ next: defaultMatch[1] });
                continue;
            }
            inBranches = false;
        }

        // ── 호감분기 하위항목 (씬 레벨) ──
        if (inAffinityBranches) {
            // 멀티캐릭터: [CharName N+] → `scene`
            const multiCharMatch = trimmed.match(/^- \[(\w+) (\d+)\+\] → `([^`]+)`$/);
            if (multiCharMatch) {
                currentScene.affinityBranches.push({
                    char: multiCharMatch[1],
                    minAffinity: parseInt(multiCharMatch[2]),
                    next: multiCharMatch[3]
                });
                continue;
            }
            // 단일캐릭터: [N+] → `scene`
            const abMatch = trimmed.match(/^- \[(\d+)\+\] → `([^`]+)`$/);
            if (abMatch) {
                currentScene.affinityBranches.push({ minAffinity: parseInt(abMatch[1]), next: abMatch[2] });
                continue;
            }
            const abDefault = trimmed.match(/^- \[기본\] → `([^`]+)`$/);
            if (abDefault) {
                currentScene.affinityBranches.push({ minAffinity: -100, next: abDefault[1] });
                continue;
            }
            // "- 다음:" 은 호감분기의 fallback → 분기 끝내지 않고 처리
            const fallbackMatch = trimmed.match(/^- 다음: `([^`]+)`$/);
            if (fallbackMatch) {
                currentScene.next = fallbackMatch[1];
                inAffinityBranches = false;
                continue;
            }
            inAffinityBranches = false;
        }

        // ── 메타데이터 ──
        if (trimmed.startsWith('- ')) {
            const meta = trimmed.slice(2);

            // 배경
            const bgMatch = meta.match(/^배경: `([^`]+)`$/);
            if (bgMatch) {
                currentScene.background = BG_PREFIX + bgMatch[1];
                continue;
            }

            // 캐릭터 (투명도 포함)
            const charOpMatch = meta.match(/^캐릭터: `([^`]+)` @ ([\d.]+)$/);
            if (charOpMatch) {
                currentScene.characters = {
                    center: { src: CHAR_PREFIX + charOpMatch[1], opacity: parseFloat(charOpMatch[2]) }
                };
                continue;
            }

            // 캐릭터: 없음 (명시적으로 캐릭터 제거)
            if (meta === '캐릭터: `없음`') {
                currentScene.character = null;
                continue;
            }

            // 캐릭터 (단일)
            const charMatch = meta.match(/^캐릭터: `([^`]+)`$/);
            if (charMatch) {
                currentScene.character = CHAR_PREFIX + charMatch[1];
                continue;
            }

            // BGM
            const bgmMatch = meta.match(/^BGM: `([^`]+)`$/);
            if (bgmMatch) {
                currentScene.bgm = bgmMatch[1];
                continue;
            }

            // 야간
            if (meta === '야간: true') {
                currentScene.night = true;
                continue;
            }

            // 타입
            const typeMatch = meta.match(/^타입: `([^`]+)`$/);
            if (typeMatch) {
                currentScene.type = typeMatch[1];
                continue;
            }

            // 조건
            const condMatch = meta.match(/^조건: `([^`]+)`$/);
            if (condMatch) {
                currentScene.condition = condMatch[1];
                continue;
            }

            // 제외조건
            const exclMatch = meta.match(/^제외조건: `([^`]+)`$/);
            if (exclMatch) {
                currentScene.excludeCondition = exclMatch[1];
                continue;
            }

            // 플래그
            const flagMatch = meta.match(/^플래그: (.+)$/);
            if (flagMatch) {
                currentScene.setFlags = flagMatch[1].match(/`([^`]+)`/g)?.map(f => f.replace(/`/g, '')) || [];
                continue;
            }

            // 스탯
            const statMatch = meta.match(/^스탯: (.+)$/);
            if (statMatch) {
                currentScene.stats = parseStats(statMatch[1]);
                continue;
            }

            // 다음
            const nextMatch = meta.match(/^다음: `([^`]+)`$/);
            if (nextMatch) {
                currentScene.next = nextMatch[1];
                continue;
            }

            // 선택지
            if (meta === '선택지:') {
                inChoices = true;
                currentScene.choices = [];
                currentI18n.choices = [];
                continue;
            }

            // 분기
            if (meta === '분기:') {
                inBranches = true;
                currentScene.branches = [];
                continue;
            }

            // 호감분기 (멀티캐릭터 — 캐릭터명 없음)
            if (meta === '호감분기:') {
                currentScene.affinityBranches = [];
                inAffinityBranches = true;
                continue;
            }

            // 호감분기 (단일캐릭터)
            const affMatch = meta.match(/^호감분기: (\w+)$/);
            if (affMatch) {
                currentScene.affinityChar = affMatch[1];
                currentScene.affinityBranches = [];
                inAffinityBranches = true;
                continue;
            }

            // 컨텍스트
            const ctxMatch = meta.match(/^컨텍스트: "(.+)"$/);
            if (ctxMatch) {
                currentI18n.context = ctxMatch[1];
                continue;
            }

            // 성격
            const persMatch = meta.match(/^성격: "(.+)"$/);
            if (persMatch) {
                currentI18n.personality = persMatch[1];
                continue;
            }
        }

        // ── 완전 빈 i18n 마커 ──
        if (trimmed === '<!-- i18n -->') {
            if (!currentI18n.__empty) currentI18n.__empty = true;
            continue;
        }

        // ── 대사 ──
        // 빈 텍스트: **Name**: ‹빈›
        const emptyTextMatch = trimmed.match(/^\*\*(.+?)\*\*: ‹빈›$/);
        if (emptyTextMatch) {
            const name = emptyTextMatch[1] === '—' ? '' : emptyTextMatch[1];
            currentI18n.name = name;
            currentI18n.text = '';
            continue;
        }

        const dialogueMatch = trimmed.match(/^\*\*(.+?)\*\*: (.+)$/);
        if (dialogueMatch) {
            currentI18n.name = dialogueMatch[1] === '—' ? '' : dialogueMatch[1];
            currentI18n.text = dialogueMatch[2];
            continue;
        }
    }

    flushScene();
    return files;

    function flushScene() {
        if (currentSceneId && currentScene && currentBase) {
            const f = files[currentBase];
            if (f) {
                f.scenes.set(currentSceneId, currentScene);
                // i18n 엔트리 저장
                if (currentI18n.__empty) {
                    // 완전 빈 엔트리 ({})
                    f.i18n.set(currentSceneId, {});
                } else if (currentI18n.name !== undefined || currentI18n.text !== undefined || currentI18n.choices || currentI18n.context) {
                    const cleaned = { ...currentI18n };
                    delete cleaned.__empty;
                    f.i18n.set(currentSceneId, cleaned);
                }
            }
        }
        currentSceneId = null;
        currentScene = null;
        currentI18n = null;
        inChoices = false;
        inBranches = false;
        inAffinityBranches = false;
        inChoiceAffinityBranch = false;
    }
}

function parseStats(str) {
    const stats = {};
    // "Seoyeon +5, Dain -3" or "conscience -10"
    const parts = str.split(/,\s*/);
    for (const part of parts) {
        const m = part.trim().match(/^(\w+)\s*([+-]\d+)$/);
        if (m) {
            const char = m[1];
            const val = parseInt(m[2]);
            // 캐릭터 스탯 (Seoyeon, Dain, Yuna, Teacher, Nurse 등)
            const charNames = ['Seoyeon', 'Dain', 'Yuna', 'Teacher', 'Nurse'];
            if (charNames.includes(char)) {
                stats[char] = { affinity: val };
            } else {
                stats[char] = val;
            }
        }
    }
    return stats;
}

// ─── JS 생성 ───

function generateJS(baseName, scenes) {
    const dayNum = parseInt(baseName.match(/day(\d)/)[1]);
    const entries = [];

    for (const [id, scene] of scenes) {
        entries.push(`    ${JSON.stringify(id)}: ${formatSceneJS(scene)}`);
    }

    const code = `/**
 * ============================================================================
 * CUPID - ${baseName}
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[${dayNum}]) SCENARIO[${dayNum}] = {};

(() => {
    const scenes = {
${entries.join(',\n')}
    };
    for (const scene of Object.values(scenes)) {
        if (scene && typeof scene === 'object') {
            Object.defineProperty(scene, "__sourceFile", {
                value: ${JSON.stringify(baseName)},
                enumerable: false
            });
        }
    }
    Object.assign(SCENARIO[${dayNum}], scenes);
})();
`;
    return code;
}

function formatSceneJS(scene) {
    // 커스텀 직렬화: 가독성 높은 JSON
    const props = [];

    if (scene.background) props.push(`"background": ${JSON.stringify(scene.background)}`);
    if (scene.character !== undefined) props.push(`"character": ${JSON.stringify(scene.character)}`);
    if (scene.characters) props.push(`"characters": ${JSON.stringify(scene.characters)}`);
    if (scene.bgm) props.push(`"bgm": ${JSON.stringify(scene.bgm)}`);
    if (scene.night) props.push(`"night": true`);
    if (scene.type) props.push(`"type": ${JSON.stringify(scene.type)}`);
    if (scene.condition) props.push(`"condition": ${JSON.stringify(scene.condition)}`);
    if (scene.excludeCondition) props.push(`"excludeCondition": ${JSON.stringify(scene.excludeCondition)}`);
    if (scene.setFlags?.length) props.push(`"setFlags": ${JSON.stringify(scene.setFlags)}`);
    if (scene.stats) props.push(`"stats": ${JSON.stringify(scene.stats)}`);

    // Flow
    if (scene.choices) {
        const choiceStrs = scene.choices.map(c => {
            const parts = [];
            if (c.next) parts.push(`"next": ${JSON.stringify(c.next)}`);
            if (c.affinityChar) parts.push(`"affinityChar": ${JSON.stringify(c.affinityChar)}`);
            if (c.affinityBranches) parts.push(`"affinityBranches": ${JSON.stringify(c.affinityBranches)}`);
            if (c.stats) parts.push(`"stats": ${JSON.stringify(c.stats)}`);
            if (c.setFlags?.length) parts.push(`"setFlags": ${JSON.stringify(c.setFlags)}`);
            return `{ ${parts.join(', ')} }`;
        });
        props.push(`"choices": [\n            ${choiceStrs.join(',\n            ')}\n        ]`);
    } else if (scene.affinityBranches) {
        // 멀티캐릭터 (char 속성이 branch에 있음) vs 단일캐릭터 (affinityChar가 scene에 있음)
        if (scene.affinityChar) {
            props.push(`"affinityChar": ${JSON.stringify(scene.affinityChar)}`);
        }
        props.push(`"affinityBranches": ${JSON.stringify(scene.affinityBranches)}`);
        if (scene.next) props.push(`"next": ${JSON.stringify(scene.next)}`);
    } else if (scene.branches) {
        const branchStrs = scene.branches.map(b => {
            const parts = [];
            if (b.condition) parts.push(`"condition": ${JSON.stringify(b.condition)}`);
            parts.push(`"next": ${JSON.stringify(b.next)}`);
            return `{ ${parts.join(', ')} }`;
        });
        props.push(`"branches": [\n            ${branchStrs.join(',\n            ')}\n        ]`);
    } else if (scene.next) {
        props.push(`"next": ${JSON.stringify(scene.next)}`);
    }

    // 항상 여러 줄 포맷 (원본 스타일 유지)
    return `{\n        ${props.join(',\n        ')}\n    }`;
}

// ─── i18n JSON 생성 ───

function generateI18n(i18nMap) {
    const obj = {};
    for (const [id, entry] of i18nMap) {
        const item = {};
        if (entry.name !== undefined) item.name = entry.name;
        if (entry.text !== undefined) item.text = entry.text;
        if (entry.choices) item.choices = entry.choices;
        if (entry.context) item.context = entry.context;
        if (entry.personality) item.personality = entry.personality;
        obj[id] = item;
    }
    return JSON.stringify(obj, null, 4);
}

// ─── 메인 ───

function main() {
    console.log('📖 SCENARIO.md 파싱 중...');
    const files = parse();

    let totalScenes = 0;
    let totalI18n = 0;

    for (const [baseName, data] of Object.entries(files)) {
        const sceneCount = data.scenes.size;
        const i18nCount = data.i18n.size;
        totalScenes += sceneCount;
        totalI18n += i18nCount;

        // JS 파일 생성
        const jsPath = path.join(SCENARIO_DIR, `${baseName}.js`);
        fs.writeFileSync(jsPath, generateJS(baseName, data.scenes), 'utf-8');

        // i18n JSON 생성
        const jsonPath = path.join(I18N_DIR, `${baseName}.json`);
        fs.writeFileSync(jsonPath, generateI18n(data.i18n), 'utf-8');

        console.log(`  ✅ ${baseName} — ${sceneCount} scenes, ${i18nCount} i18n`);
    }

    console.log(`\n✅ 변환 완료 — ${totalScenes}개 씬, ${totalI18n}개 i18n`);
    console.log('⚠️  한국어(ko) i18n만 생성되었습니다. 다른 언어는 별도 번역이 필요합니다.');
    console.log('💡 node validate.js 로 검증하세요.');
}

main();
