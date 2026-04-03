#!/usr/bin/env node
/**
 * generate-scenario.js
 * 코드(scenario JS + i18n JSON) → SCENARIO.md 자동 생성
 *
 * 사용법: node generate-scenario.js
 * 출력: SCENARIO.md
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SCENARIO_DIR = path.join(__dirname, 'assets/js/scenario');
const I18N_DIR = path.join(__dirname, 'assets/js/i18n/ko');
const OUTPUT = path.join(__dirname, 'SCENARIO.md');

const FILE_MAP = [
    { day: 1, period: '아침', base: 'day1_1_morning' },
    { day: 1, period: '점심', base: 'day1_2_lunch' },
    { day: 1, period: '방과후', base: 'day1_3_afterschool' },
    { day: 1, period: '밤', base: 'day1_4_night' },
    { day: 2, period: '아침', base: 'day2_1_morning' },
    { day: 2, period: '점심', base: 'day2_2_lunch' },
    { day: 2, period: '방과후', base: 'day2_3_afterschool' },
    { day: 2, period: '밤', base: 'day2_4_night' },
    { day: 3, period: '아침', base: 'day3_1_morning' },
    { day: 3, period: '점심', base: 'day3_2_lunch' },
    { day: 3, period: '방과후', base: 'day3_3_afterschool' },
    { day: 3, period: '밤', base: 'day3_4_night' },
    { day: 4, period: '아침', base: 'day4_1_morning' },
    { day: 4, period: '점심', base: 'day4_2_lunch' },
    { day: 4, period: '방과후', base: 'day4_3_afterschool' },
    { day: 4, period: '밤', base: 'day4_4_night' },
    { day: 5, period: '아침', base: 'day5_1_morning' },
    { day: 5, period: '점심', base: 'day5_2_lunch' },
    { day: 5, period: '방과후', base: 'day5_3_afterschool' },
    { day: 5, period: '밤', base: 'day5_4_night' },
];

// ─── 로더 ───

function loadScenarioFile(baseName) {
    const filePath = path.join(SCENARIO_DIR, `${baseName}.js`);
    const code = fs.readFileSync(filePath, 'utf-8');
    const dayNum = parseInt(baseName.match(/day(\d)/)[1]);

    const SCENARIO = {};
    for (let i = 1; i <= 5; i++) SCENARIO[i] = {};
    const sandbox = { SCENARIO, Object, console, parseInt, parseFloat };
    vm.createContext(sandbox);
    vm.runInContext(code, sandbox);

    // 이 파일에서 추가된 씬만 반환 (정의 순서 유지)
    return sandbox.SCENARIO[dayNum];
}

function loadI18n(baseName) {
    const filePath = path.join(I18N_DIR, `${baseName}.json`);
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

// ─── 포맷터 ───

function collectSceneTargets(scene) {
    const targets = [];
    const addTarget = (target) => {
        if (typeof target === 'string' && target.length > 0) targets.push(target);
    };

    addTarget(scene.next);

    if (scene.branches) {
        for (const branch of scene.branches) addTarget(branch.next);
    }

    if (scene.affinityBranches) {
        for (const branch of scene.affinityBranches) addTarget(branch.next);
    }

    if (scene.choices) {
        for (const choice of scene.choices) {
            addTarget(choice.next);
            if (choice.affinityBranches) {
                for (const branch of choice.affinityBranches) addTarget(branch.next);
            }
        }
    }

    return targets;
}

function insertBySourceOrder(queue, sceneId, indexById) {
    const sceneIndex = indexById.get(sceneId);
    let insertAt = queue.length;

    for (let i = 0; i < queue.length; i++) {
        if (indexById.get(queue[i]) > sceneIndex) {
            insertAt = i;
            break;
        }
    }

    queue.splice(insertAt, 0, sceneId);
}

function orderScenesForDocument(scenes) {
    const sceneIds = Object.keys(scenes);
    const indexById = new Map(sceneIds.map((sceneId, index) => [sceneId, index]));
    const indegree = new Map(sceneIds.map(sceneId => [sceneId, 0]));
    const adjacency = new Map(sceneIds.map(sceneId => [sceneId, []]));

    for (const sceneId of sceneIds) {
        const scene = scenes[sceneId];
        const orderedTargets = [...new Set(
            collectSceneTargets(scene).filter(target => Object.prototype.hasOwnProperty.call(scenes, target))
        )].sort((a, b) => indexById.get(a) - indexById.get(b));

        adjacency.set(sceneId, orderedTargets);

        for (const target of orderedTargets) {
            indegree.set(target, indegree.get(target) + 1);
        }
    }

    const queue = sceneIds
        .filter(sceneId => indegree.get(sceneId) === 0)
        .sort((a, b) => indexById.get(a) - indexById.get(b));

    const ordered = [];

    while (queue.length > 0) {
        const sceneId = queue.shift();
        ordered.push(sceneId);

        const newlyReady = [];

        for (const target of adjacency.get(sceneId)) {
            indegree.set(target, indegree.get(target) - 1);
            if (indegree.get(target) === 0) {
                newlyReady.push(target);
            }
        }

        newlyReady.sort((a, b) => indexById.get(a) - indexById.get(b));
        queue.unshift(...newlyReady);
    }

    if (ordered.length !== sceneIds.length) {
        const seen = new Set(ordered);
        for (const sceneId of sceneIds) {
            if (!seen.has(sceneId)) ordered.push(sceneId);
        }
    }

    return ordered;
}

function img(fullPath) {
    return fullPath ? path.basename(fullPath).replace(/\\/g, '/') : null;
}

function formatStats(stats) {
    const parts = [];
    for (const [char, val] of Object.entries(stats)) {
        if (typeof val === 'object' && val !== null && val.affinity !== undefined) {
            const sign = val.affinity >= 0 ? '+' : '';
            parts.push(`${char} ${sign}${val.affinity}`);
        } else if (typeof val === 'number') {
            const sign = val >= 0 ? '+' : '';
            parts.push(`${char} ${sign}${val}`);
        }
    }
    return parts.join(', ');
}

function formatAffinityBranches(scene) {
    const lines = [];
    const branches = scene.affinityBranches;
    const isMultiChar = branches.some(b => b.char);

    if (isMultiChar) {
        // 멀티캐릭터 호감분기: 각 분기에 char 포함
        lines.push(`- 호감분기:`);
        for (const b of branches) {
            lines.push(`  - [${b.char} ${b.minAffinity}+] → \`${b.next}\``);
        }
    } else {
        // 단일캐릭터 호감분기
        lines.push(`- 호감분기: ${scene.affinityChar}`);
        for (const b of branches) {
            if (b.minAffinity !== undefined && b.minAffinity > -100) {
                lines.push(`  - [${b.minAffinity}+] → \`${b.next}\``);
            } else {
                lines.push(`  - [기본] → \`${b.next}\``);
            }
        }
    }

    // fallback next
    if (scene.next) {
        lines.push(`- 다음: \`${scene.next}\``);
    }

    return lines;
}

function formatChoiceLine(choice, idx, choiceText) {
    // 선택지의 모든 플래그 수집 (setFlags 배열 + setFlag 단수)
    const choiceFlags = [];
    if (choice.setFlags) choiceFlags.push(...choice.setFlags);
    if (choice.setFlag) choiceFlags.push(choice.setFlag);
    const flagStr = choiceFlags.length ? ` | 플래그: ${choiceFlags.map(f => `\`${f}\``).join(', ')}` : '';

    // 호감분기가 있는 선택지
    if (choice.affinityBranches) {
        const lines = [];
        let header = `  ${idx + 1}.`;
        if (choiceText) header += ` "${choiceText}"`;
        header += ` → 호감분기: ${choice.affinityChar}${flagStr}`;
        lines.push(header);
        for (const b of choice.affinityBranches) {
            if (b.minAffinity !== undefined && b.minAffinity > -100) {
                lines.push(`    - [${b.minAffinity}+] → \`${b.next}\``);
            } else {
                lines.push(`    - [기본] → \`${b.next}\``);
            }
        }
        return lines.join('\n');
    }

    // 일반 선택지
    let line = `  ${idx + 1}.`;
    if (choiceText) line += ` "${choiceText}"`;
    line += ` → \`${choice.next}\``;
    if (choice.stats) line += ` | ${formatStats(choice.stats)}`;
    line += flagStr;
    return line;
}

function formatScene(sceneId, scene, i18n) {
    const lines = [];
    const entry = i18n[sceneId];

    lines.push(`### \`${sceneId}\``);

    // ── 메타데이터 ──

    if (scene.background) {
        lines.push(`- 배경: \`${img(scene.background)}\``);
    }

    if (scene.bgm) lines.push(`- BGM: \`${scene.bgm}\``);
    if (scene.type) lines.push(`- 타입: \`${scene.type}\``);
    if (scene.condition) lines.push(`- 조건: \`${scene.condition}\``);
    if (scene.excludeCondition) lines.push(`- 제외조건: \`${scene.excludeCondition}\``);

    // setFlags (배열) 또는 setFlag (단수 문자열)
    const allFlags = [];
    if (scene.setFlags) allFlags.push(...scene.setFlags);
    if (scene.setFlag) allFlags.push(scene.setFlag);
    if (allFlags.length) {
        lines.push(`- 플래그: ${allFlags.map(f => `\`${f}\``).join(', ')}`);
    }

    if (scene.stats) {
        lines.push(`- 스탯: ${formatStats(scene.stats)}`);
    }

    // ── 흐름 ──

    if (scene.choices) {
        lines.push(`- 선택지:`);
        scene.choices.forEach((choice, idx) => {
            const choiceText = entry?.choices?.[idx] ?? null;
            lines.push(formatChoiceLine(choice, idx, choiceText));
        });
    } else if (scene.affinityBranches) {
        lines.push(...formatAffinityBranches(scene));
    } else if (scene.branches) {
        lines.push(`- 분기:`);
        for (const b of scene.branches) {
            if (b.condition) {
                lines.push(`  - [\`${b.condition}\`] → \`${b.next}\``);
            } else {
                lines.push(`  - [기본] → \`${b.next}\``);
            }
        }
    } else if (scene.next) {
        lines.push(`- 다음: \`${scene.next}\``);
    }

    // ── 프리토킹 컨텍스트 ──

    if (scene.type === 'free_talk' && entry) {
        if (entry.context) lines.push(`- 컨텍스트: "${entry.context}"`);
        if (entry.personality) lines.push(`- 성격: "${entry.personality}"`);
    }

    // ── 캐릭터 + 대사 (흐름 뒤) ──
    // 원본 순서: 배경 → BGM → 다음/분기 → (빈줄) → 캐릭터 → 대사

    // 캐릭터 (단일)
    if (scene.character !== undefined && scene.character !== null) {
        lines.push('');
        lines.push(`- 캐릭터: \`${img(scene.character)}\``);
    } else if (scene.character === null && !scene.characters?.center) {
        lines.push('');
        lines.push(`- 캐릭터: \`없음\``);
    }

    // 캐릭터 (투명도 포함)
    if (scene.characters?.center) {
        const c = scene.characters.center;
        lines.push('');
        lines.push(`- 캐릭터: \`${img(c.src)}\` @ ${c.opacity}`);
    }

    if (entry) {
        if (entry.text !== undefined) {
            // 캐릭터 줄이 없으면 빈줄 추가
            if (scene.character === undefined && !scene.characters?.center) {
                lines.push('');
            }
            // name이 빈 문자열이면 '—'로 표시 (파서가 인식 가능하도록)
            const name = (entry.name === '' || entry.name === undefined) ? '—' : (entry.name || '{name}');
            if (entry.text === '') {
                lines.push(`**${name}**: ‹빈›`);
            } else {
                lines.push(`**${name}**: ${entry.text}`);
            }
        } else if (!entry.choices && !entry.context && !entry.personality && !entry.name) {
            // 완전 빈 엔트리 ({})
            lines.push('');
            lines.push(`<!-- i18n -->`);
        }
    }

    return lines.join('\n');
}

// ─── 마커 ───
const MARKER_START = '<!-- SCENARIO-AUTO-START -->';
const MARKER_END = '<!-- SCENARIO-AUTO-END -->';

// ─── 메인 ───

function generate() {
    // 기존 SCENARIO.md에서 게임 설정 부분 보존
    let header = '';
    let footer = '';

    if (fs.existsSync(OUTPUT)) {
        const existing = fs.readFileSync(OUTPUT, 'utf-8');
        const startIdx = existing.indexOf(MARKER_START);
        const endIdx = existing.indexOf(MARKER_END);

        if (startIdx !== -1 && endIdx !== -1) {
            // 마커가 있으면 마커 사이만 교체
            header = existing.slice(0, startIdx);
            footer = existing.slice(endIdx + MARKER_END.length);
        } else {
            // 마커가 없으면 "# 1일차" 이전까지 보존
            const dayMatch = existing.match(/^# 1일차$/m);
            if (dayMatch) {
                header = existing.slice(0, dayMatch.index);
            } else {
                header = existing + '\n\n';
            }
        }
    }

    const output = [];
    let totalScenes = 0;

    output.push(MARKER_START);
    output.push('');
    output.push('> 아래 시나리오 섹션은 `node generate-scenario.js`로 자동 생성되었습니다.');
    output.push('> 수정 후 `node parse-scenario.js`로 코드를 재생성할 수 있습니다.');
    output.push('');

    let currentDay = 0;

    for (const { day, period, base } of FILE_MAP) {
        if (day !== currentDay) {
            currentDay = day;
            output.push(`# ${day}일차`);
            output.push('');
        }

        output.push(`## ${day}일차 — ${period} \`${base}\``);
        output.push('');

        const scenes = loadScenarioFile(base);
        const i18n = loadI18n(base);
        const sceneIds = orderScenesForDocument(scenes);

        for (const sceneId of sceneIds) {
            output.push(formatScene(sceneId, scenes[sceneId], i18n));
            output.push('');
            output.push('---');
            output.push('');
            totalScenes++;
        }
    }

    output.push(MARKER_END);

    const finalContent = header + output.join('\n') + footer;
    fs.writeFileSync(OUTPUT, finalContent, 'utf-8');
    const sizeKB = (Buffer.byteLength(finalContent, 'utf-8') / 1024).toFixed(1);
    console.log(`✅ SCENARIO.md 시나리오 섹션 갱신 — ${totalScenes}개 씬, ${sizeKB}KB (게임 설정 보존)`);
}

generate();
