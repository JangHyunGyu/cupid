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
    // 호감분기가 있는 선택지
    if (choice.affinityBranches) {
        const lines = [];
        let header = `  ${idx + 1}.`;
        if (choiceText) header += ` "${choiceText}"`;
        header += ` → 호감분기: ${choice.affinityChar}`;
        if (choice.setFlags?.length) {
            header += ` | 플래그: ${choice.setFlags.map(f => `\`${f}\``).join(', ')}`;
        }
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
    if (choice.setFlags?.length) {
        line += ` | 플래그: ${choice.setFlags.map(f => `\`${f}\``).join(', ')}`;
    }
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

    // 캐릭터 (단일)
    if (scene.character !== undefined && scene.character !== null) {
        lines.push(`- 캐릭터: \`${img(scene.character)}\``);
    }

    // 캐릭터 (투명도 포함)
    if (scene.characters?.center) {
        const c = scene.characters.center;
        lines.push(`- 캐릭터: \`${img(c.src)}\` @ ${c.opacity}`);
    }

    if (scene.bgm) lines.push(`- BGM: \`${scene.bgm}\``);
    if (scene.night) lines.push(`- 야간: true`);
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

    // ── 대사 ──

    if (entry && entry.text !== undefined && entry.text !== '') {
        lines.push('');
        const name = entry.name || '{name}';
        lines.push(`**${name}**: ${entry.text}`);
    }

    return lines.join('\n');
}

// ─── 메인 ───

function generate() {
    const output = [];
    let totalScenes = 0;

    output.push('# CUPID 시나리오');
    output.push('');
    output.push('> 이 파일은 `node generate-scenario.js`로 자동 생성되었습니다.');
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
        const sceneIds = Object.keys(scenes);

        for (const sceneId of sceneIds) {
            output.push(formatScene(sceneId, scenes[sceneId], i18n));
            output.push('');
            output.push('---');
            output.push('');
            totalScenes++;
        }
    }

    fs.writeFileSync(OUTPUT, output.join('\n'), 'utf-8');
    const sizeKB = (Buffer.byteLength(output.join('\n'), 'utf-8') / 1024).toFixed(1);
    console.log(`✅ SCENARIO.md 생성 완료 — ${totalScenes}개 씬, ${sizeKB}KB`);
}

generate();
