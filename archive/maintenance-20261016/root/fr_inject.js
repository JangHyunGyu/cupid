/**
 * Universal French translation injector for Cupid scenario files.
 *
 * Usage:
 *   node fr_inject.js <translations_js> <scenario_file1> [scenario_file2 ...]
 *
 * The translations JS file must export an object: { "English text": "French text", ... }
 * It can also export a nameOverrides object to add custom name mappings.
 */
const fs = require('fs');
const path = require('path');

// ── Name map ────────────────────────────────────────────────────────────
const NAME_FR = {
    'Me': 'Moi',
    'Seoyeon': 'Seoyeon',
    'Yuna': 'Yuna',
    'Dain': 'Dain',
    'School Nurse': 'Infirmière Scolaire',
    'Homeroom Teacher': 'Professeur Principal',
    'System': 'Système',
    '???': '???',
    'Student': 'Élève',
    'Teacher': 'Professeur',
    'Classmates': 'Camarades',
    'Ms. Kim': 'Professeur Principal',
    'Nurse': 'Infirmière Scolaire',
    '': '',
};

// ── Load translations ───────────────────────────────────────────────────
const args = process.argv.slice(2);
if (args.length < 2) {
    console.error('Usage: node fr_inject.js <translations.js> <file1.js> [file2.js ...]');
    process.exit(1);
}

const transFile = path.resolve(args[0]);
const trans = require(transFile);
const T = trans.texts || trans;
const nameOverrides = trans.names || {};
Object.assign(NAME_FR, nameOverrides);

const scenarioFiles = args.slice(1);

// ── Process a single file ───────────────────────────────────────────────
function processFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const result = [];
    let frBlocksAdded = 0;
    let idx = 0;

    let insideI18n = false, i18nBraceDepth = 0, currentI18nHasFr = false;
    let insideEn = false, enBraceDepth = 0, enBlock = [];
    let currentEnName = '', currentEnText = '', currentEnChoices = [];
    let currentEnContext = '', currentEnPersonality = '';
    let insideJa = false, jaBraceDepth = 0, jaIndent = '', jaEndIdx = -1;

    while (idx < lines.length) {
        const line = lines[idx];

        if (!insideI18n) {
            if (line.includes('"_i18n"') && line.includes('{')) {
                insideI18n = true;
                currentI18nHasFr = false;
                currentEnName = ''; currentEnText = ''; currentEnChoices = [];
                currentEnContext = ''; currentEnPersonality = '';
                insideEn = false; insideJa = false; jaEndIdx = -1;
                let opens = (line.match(/\{/g) || []).length;
                let closes = (line.match(/\}/g) || []).length;
                i18nBraceDepth = opens - closes;
            }
            result.push(line);
            idx++;
            continue;
        }

        // Inside _i18n
        let opens = (line.match(/\{/g) || []).length;
        let closes = (line.match(/\}/g) || []).length;
        i18nBraceDepth += opens - closes;

        if (/^\s*"fr"\s*:/.test(line)) currentI18nHasFr = true;

        // Track en block
        if (!insideEn && /^\s*"en"\s*:\s*\{/.test(line)) {
            insideEn = true;
            enBlock = [line];
            enBraceDepth = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
            if (enBraceDepth <= 0) { insideEn = false; parseEnBlock(enBlock); }
        } else if (insideEn) {
            enBlock.push(line);
            enBraceDepth += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
            if (enBraceDepth <= 0) { insideEn = false; parseEnBlock(enBlock); }
        }

        // Track ja block
        if (!insideJa && /^\s*"ja"\s*:\s*\{/.test(line)) {
            insideJa = true;
            jaIndent = line.match(/^(\s*)/)[1];
            jaBraceDepth = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
            if (jaBraceDepth <= 0) { insideJa = false; jaEndIdx = result.length; }
        } else if (insideJa) {
            jaBraceDepth += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
            if (jaBraceDepth <= 0) { insideJa = false; jaEndIdx = result.length; }
        }

        // _i18n block closing
        if (i18nBraceDepth <= 0) {
            insideI18n = false;

            if (!currentI18nHasFr && jaEndIdx >= 0 && (currentEnName || currentEnText)) {
                // Ensure comma after ja closing
                let jaCloseLine = result[jaEndIdx];
                if (jaCloseLine && !jaCloseLine.trimEnd().endsWith(',')) {
                    result[jaEndIdx] = jaCloseLine.replace(/(\}\s*)$/, '},$1'.replace('$1', ''));
                    // Simpler: just append comma before trailing whitespace
                    result[jaEndIdx] = result[jaEndIdx].trimEnd();
                    if (!result[jaEndIdx].endsWith(',')) {
                        result[jaEndIdx] = result[jaEndIdx] + ',';
                    }
                }

                let frName = NAME_FR[currentEnName] !== undefined ? NAME_FR[currentEnName] : currentEnName;
                let frText = T[currentEnText] || currentEnText;
                let blockIndent = jaIndent;
                let innerIndent = blockIndent + '    ';

                let frLines = [];
                frLines.push(blockIndent + '"fr": {');
                frLines.push(innerIndent + '"name": ' + JSON.stringify(frName) + ',');

                if (currentEnChoices.length > 0) {
                    frLines.push(innerIndent + '"text": ' + JSON.stringify(frText) + ',');
                    frLines.push(innerIndent + '"choices": [');
                    currentEnChoices.forEach(function (choice, ci) {
                        let frChoice = T[choice] || choice;
                        let comma = ci < currentEnChoices.length - 1 ? ',' : '';
                        frLines.push(innerIndent + '    ' + JSON.stringify(frChoice) + comma);
                    });
                    frLines.push(innerIndent + ']');
                } else if (currentEnContext) {
                    frLines.push(innerIndent + '"text": ' + JSON.stringify(frText) + ',');
                    frLines.push(innerIndent + '"context": ' + JSON.stringify(T[currentEnContext] || currentEnContext));
                    if (currentEnPersonality) {
                        // remove last line's closing and add comma
                        frLines[frLines.length - 1] += ',';
                        frLines.push(innerIndent + '"personality": ' + JSON.stringify(T[currentEnPersonality] || currentEnPersonality));
                    }
                } else {
                    frLines.push(innerIndent + '"text": ' + JSON.stringify(frText));
                }
                frLines.push(blockIndent + '}');

                let insertPos = jaEndIdx + 1;
                for (let fi = 0; fi < frLines.length; fi++) {
                    result.splice(insertPos + fi, 0, frLines[fi]);
                }
                frBlocksAdded++;
            }

            result.push(line);
            idx++;
            continue;
        }

        result.push(line);
        idx++;
    }

    function parseEnBlock(block) {
        let text = block.join('\n');
        let nameMatch = text.match(/"name"\s*:\s*"([^"]*)"/);
        let textMatch = text.match(/"text"\s*:\s*"((?:[^"\\]|\\.)*)"/);
        let choicesMatch = text.match(/"choices"\s*:\s*\[([\s\S]*?)\]/);
        let contextMatch = text.match(/"context"\s*:\s*"((?:[^"\\]|\\.)*)"/);
        let personalityMatch = text.match(/"personality"\s*:\s*"((?:[^"\\]|\\.)*)"/);

        if (nameMatch) currentEnName = nameMatch[1];
        if (textMatch) currentEnText = textMatch[1];
        if (choicesMatch) {
            let items = choicesMatch[1].match(/"((?:[^"\\]|\\.)*)"/g);
            if (items) currentEnChoices = items.map(function (c) { return c.slice(1, -1); });
        } else {
            currentEnChoices = [];
        }
        if (contextMatch) currentEnContext = contextMatch[1];
        if (personalityMatch) currentEnPersonality = personalityMatch[1];
    }

    fs.writeFileSync(filePath, result.join('\n'), 'utf8');
    console.log('[DONE] ' + path.basename(filePath) + ': added ' + frBlocksAdded + ' fr blocks');
    return frBlocksAdded;
}

// ── Run ─────────────────────────────────────────────────────────────────
let totalAdded = 0;
for (const f of scenarioFiles) {
    const absPath = path.resolve(f);
    if (!fs.existsSync(absPath)) {
        console.error('[NOT FOUND] ' + f);
        continue;
    }
    totalAdded += processFile(absPath);
}
console.log('\nTotal fr blocks added: ' + totalAdded);
