#!/usr/bin/env node
/**
 * rename_ins_ids.js
 * `_ins`, `_ins2`...`_insN` 후행 패턴을 가진 씬 ID를 깔끔한 letter suffix(b/c/d...)로 일괄 리네이밍.
 *
 *  - JS 시나리오 파일 20개
 *  - i18n JSON 파일 6개 언어 × 20개
 *  - translation_review_day{1~5}.json
 *  - SCENARIO.md (generate-scenario.js로 사후 재생성)
 *
 * 사용법:
 *   node rename_ins_ids.js --dry-run            # 변경 사항만 출력 (파일 미변경)
 *   node rename_ins_ids.js --dry-run --file=day1_2_lunch  # 특정 파일 범위만
 *   node rename_ins_ids.js                      # 실제 적용
 *
 * 안전장치:
 *   - `_ins`가 ID 끝에 오는 경우만 (`/_ins\d*$/`). 중간 삽입형은 건너뜀.
 *   - letter suffix(b~z)가 이미 존재하면 다음 글자로. 25개 초과 시 b2,c2... 오버플로.
 *   - 모든 변경 전 충돌 검사. 충돌 시 abort.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;
const SCENARIO_DIR = path.join(ROOT, 'assets/js/scenario');
const I18N_BASE = path.join(ROOT, 'assets/js/i18n');
const LANGS = ['ko', 'en', 'ja', 'es', 'fr', 'de'];
const TRANS_REVIEW_FILES = [1, 2, 3, 4, 5].map(d => path.join(ROOT, `translation_review_day${d}.json`));

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const FILE_FILTER = (args.find(a => a.startsWith('--file=')) || '').replace('--file=', '');

// ─────────────────────────────────────────────────────────────
// 1. 모든 시나리오 JS 로딩 → 전체 씬 ID 집합 + 파일별 출처 매핑
// ─────────────────────────────────────────────────────────────
function loadAllScenes() {
    const files = fs.readdirSync(SCENARIO_DIR)
        .filter(f => /^day\d/.test(f) && f.endsWith('.js'))
        .sort();

    const sceneToFile = new Map(); // sceneId → baseName
    const allIds = new Set();

    for (const f of files) {
        const baseName = f.replace(/\.js$/, '');
        const code = fs.readFileSync(path.join(SCENARIO_DIR, f), 'utf-8');
        const SCENARIO = {};
        for (let i = 0; i <= 5; i++) SCENARIO[i] = {};
        const sandbox = { SCENARIO, Object, console, parseInt, parseFloat };
        vm.createContext(sandbox);
        vm.runInContext(code, sandbox);
        for (const day of Object.keys(sandbox.SCENARIO)) {
            for (const id of Object.keys(sandbox.SCENARIO[day])) {
                if (!sceneToFile.has(id)) {
                    sceneToFile.set(id, baseName);
                    allIds.add(id);
                }
            }
        }
    }
    return { sceneToFile, allIds, files: files.map(f => f.replace(/\.js$/, '')) };
}

// ─────────────────────────────────────────────────────────────
// 2. 리네임 맵 생성
// ─────────────────────────────────────────────────────────────
function buildRenameMap(allIds, sceneToFile, fileFilter) {
    const reserved = new Set(allIds);
    const renameMap = new Map(); // oldId → newId
    const skipped = []; // 자동 처리 불가 케이스
    const grouped = new Map(); // baseId → [{oldId, num}]

    // 정확히 후행 _ins\d*만 매치 (중간 _ins_xxx 는 제외)
    const TAIL_INS = /^(.*)_ins(\d*)$/;

    for (const id of allIds) {
        if (fileFilter && sceneToFile.get(id) !== fileFilter) continue;
        const m = id.match(TAIL_INS);
        if (!m) continue;
        // 중간형 (e.g. lunch2_dain_end_ins4_first) 은 m이 안 잡히지만 한번 더 확인
        if (id.replace(TAIL_INS, '').includes('_ins')) {
            skipped.push(id);
            continue;
        }
        const base = m[1];
        const num = m[2] === '' ? 1 : parseInt(m[2]);
        if (!grouped.has(base)) grouped.set(base, []);
        grouped.get(base).push({ oldId: id, num });
    }

    // letter 시퀀스 (b~z, 그 다음 b2~z2, b3~z3...) — 배열로 풀어둠 (generator close 회피)
    const SUFFIX_POOL = (() => {
        const letters = 'bcdefghijklmnopqrstuvwxyz';
        const out = [];
        for (let round = 1; round <= 10; round++) {
            for (const l of letters) out.push(round === 1 ? l : `${l}${round}`);
        }
        return out;
    })();

    for (const [base, items] of grouped) {
        items.sort((a, b) => a.num - b.num);
        let cursor = 0;
        for (const { oldId } of items) {
            let newId;
            while (cursor < SUFFIX_POOL.length) {
                const candidate = `${base}_${SUFFIX_POOL[cursor]}`;
                cursor++;
                if (!reserved.has(candidate)) {
                    newId = candidate;
                    break;
                }
            }
            if (!newId) {
                throw new Error(`No available suffix for ${oldId} (base=${base})`);
            }
            renameMap.set(oldId, newId);
            reserved.add(newId);
        }
    }

    return { renameMap, skipped };
}

// ─────────────────────────────────────────────────────────────
// 3. 충돌 / 무결성 검증
// ─────────────────────────────────────────────────────────────
function verifyMap(renameMap, allIds) {
    const issues = [];
    const newIds = new Set();
    for (const [oldId, newId] of renameMap) {
        if (newIds.has(newId)) issues.push(`Duplicate target: ${newId} (from ${oldId})`);
        newIds.add(newId);
        if (allIds.has(newId) && !renameMap.has(newId)) {
            issues.push(`Target collides with existing: ${newId} (from ${oldId})`);
        }
    }
    return issues;
}

// ─────────────────────────────────────────────────────────────
// 4. 텍스트 안에서 ID 치환 (정확 매칭)
// ─────────────────────────────────────────────────────────────
function applyRenameToText(text, renameMap) {
    // 긴 ID 먼저 치환 (짧은 게 긴 거의 prefix면 잘못 매칭됨 — _ins → _b 케이스)
    const sortedEntries = [...renameMap.entries()].sort((a, b) => b[0].length - a[0].length);
    let modified = text;
    let count = 0;
    for (const [oldId, newId] of sortedEntries) {
        // double-quoted 매칭 ("oldId")
        const dq = new RegExp(`"${oldId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g');
        const before = modified;
        modified = modified.replace(dq, `"${newId}"`);
        if (before !== modified) {
            // 카운트 정확하게
            count += (before.match(dq) || []).length;
        }
    }
    return { text: modified, count };
}

// 원본 JSON 파일의 들여쓰기 폭을 감지 (4-space, 2-space 등 보존)
function detectIndent(text) {
    const m = text.match(/^\{\s*\r?\n( +)"/);
    return m ? m[1].length : 2;
}

// translation_review.json 의 키 자체를 바꾸려면 객체 재구성 필요
function applyRenameToJsonKeys(jsonText, renameMap) {
    const indent = detectIndent(jsonText);
    const hasTrailingNewline = jsonText.endsWith('\n');
    const data = JSON.parse(jsonText);
    let count = 0;
    function recurse(obj) {
        if (!obj || typeof obj !== 'object') return obj;
        if (Array.isArray(obj)) {
            return obj.map(recurse);
        }
        const result = {};
        for (const [k, v] of Object.entries(obj)) {
            const newK = renameMap.has(k) ? renameMap.get(k) : k;
            if (newK !== k) count++;
            result[newK] = recurse(v);
        }
        return result;
    }
    const renamed = recurse(data);
    let out = JSON.stringify(renamed, null, indent);
    if (hasTrailingNewline) out += '\n';
    return { text: out, count };
}

// ─────────────────────────────────────────────────────────────
// 5. 메인
// ─────────────────────────────────────────────────────────────
function main() {
    console.log(`[mode] ${DRY_RUN ? 'DRY RUN' : 'APPLY'}`);
    if (FILE_FILTER) console.log(`[filter] ${FILE_FILTER}`);

    const { sceneToFile, allIds } = loadAllScenes();
    console.log(`[load] ${allIds.size} scene IDs across ${new Set(sceneToFile.values()).size} files`);

    const { renameMap, skipped } = buildRenameMap(allIds, sceneToFile, FILE_FILTER);
    console.log(`[plan] ${renameMap.size} renames; ${skipped.length} skipped (mid-_ins pattern)`);

    if (skipped.length > 0) {
        console.log('  skipped:', skipped);
    }

    const issues = verifyMap(renameMap, allIds);
    if (issues.length > 0) {
        console.error('[FATAL] integrity issues:');
        issues.forEach(i => console.error('  ' + i));
        process.exit(1);
    }

    if (renameMap.size === 0) {
        console.log('[done] no renames needed');
        return;
    }

    // 샘플 출력 (최대 20개)
    console.log('\n[sample renames]');
    const samples = [...renameMap.entries()].slice(0, 20);
    samples.forEach(([o, n]) => console.log(`  ${o}  →  ${n}`));
    if (renameMap.size > 20) console.log(`  ... +${renameMap.size - 20} more`);

    // 영향받는 파일 카운트
    const targets = collectTargetFiles(sceneToFile);
    console.log(`\n[files] ${targets.length} files will be touched`);

    // 적용
    let totalReplacements = 0;
    let modifiedFiles = 0;
    for (const target of targets) {
        const content = fs.readFileSync(target.path, 'utf-8');
        let result;
        if (target.type === 'json-keys') {
            result = applyRenameToJsonKeys(content, renameMap);
        } else {
            result = applyRenameToText(content, renameMap);
        }
        if (result.count > 0) {
            modifiedFiles++;
            totalReplacements += result.count;
            if (!DRY_RUN) fs.writeFileSync(target.path, result.text, 'utf-8');
            if (DRY_RUN || modifiedFiles <= 5) {
                console.log(`  ${target.label}: ${result.count} edits`);
            }
        }
    }
    console.log(`\n[summary] ${totalReplacements} text replacements across ${modifiedFiles} files`);
    if (DRY_RUN) {
        console.log('[dry run] no files written');
    } else {
        console.log('[applied] now run: node generate-scenario.js && node validate.js');
    }
}

function collectTargetFiles(sceneToFile) {
    const targets = [];
    // 시나리오 JS
    const scenarioFiles = fs.readdirSync(SCENARIO_DIR)
        .filter(f => /^day\d/.test(f) && f.endsWith('.js'))
        .sort();
    for (const f of scenarioFiles) {
        targets.push({
            path: path.join(SCENARIO_DIR, f),
            label: `scenario/${f}`,
            type: 'text'
        });
    }
    // i18n: 6 langs × 20 files
    for (const lang of LANGS) {
        const dir = path.join(I18N_BASE, lang);
        if (!fs.existsSync(dir)) continue;
        for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.json'))) {
            targets.push({
                path: path.join(dir, f),
                label: `i18n/${lang}/${f}`,
                type: 'json-keys'
            });
        }
    }
    // translation_review (key 변경)
    for (const f of TRANS_REVIEW_FILES) {
        if (fs.existsSync(f)) {
            targets.push({
                path: f,
                label: path.basename(f),
                type: 'json-keys'
            });
        }
    }
    return targets;
}

main();
