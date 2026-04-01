/**
 * fix_ja_quotes.js
 *
 * Fixes missing 「」 Japanese quotation marks on dialogue lines in _ins (inserted)
 * nodes across all Japanese i18n JSON files.
 *
 * Rules:
 *   - Only processes keys containing "_ins"
 *   - Skips entries where name is "{name}" (protagonist narration/monologue) or "システム"
 *   - Skips entries where text starts with "*" (stage direction/narration)
 *   - Skips entries where text already starts with "「"
 *   - If text has a "*...*" stage direction prefix followed by dialogue, only wraps
 *     the dialogue portion (should already have 「」 in that pattern, so rarely applies)
 *   - For text that starts with dialogue followed by 」 (missing opening 「), prepends 「
 *   - For plain dialogue text, wraps entirely in 「」
 */

const fs = require('fs');
const path = require('path');

const JA_DIR = path.join(__dirname, '..', 'assets', 'js', 'i18n', 'ja');
const files = fs.readdirSync(JA_DIR).filter(f => f.endsWith('.json')).sort();

console.log(`Found ${files.length} Japanese i18n files.\n`);

let totalFixed = 0;

for (const file of files) {
    const filePath = path.join(JA_DIR, file);
    const raw = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw);
    let fixedInFile = 0;

    for (const [key, entry] of Object.entries(data)) {
        // Only process _ins nodes
        if (!key.includes('_ins')) continue;

        // Skip protagonist narration/monologue and system messages
        if (entry.name === '{name}' || entry.name === 'システム') continue;

        const text = entry.text;

        // Skip stage directions (text entirely wrapped in *...*)
        if (text.startsWith('*')) continue;

        // Skip if already properly quoted
        if (text.startsWith('「')) continue;

        // Now we need to add 「」 to dialogue text
        const newText = addQuotes(text);

        if (newText !== text) {
            entry.text = newText;
            fixedInFile++;
            // Uncomment for debugging:
            // console.log(`  ${key}: "${text}" → "${newText}"`);
        }
    }

    if (fixedInFile > 0) {
        // Write back with 4-space indent, preserving formatting
        const output = JSON.stringify(data, null, 4);
        fs.writeFileSync(filePath, output, 'utf8');
        console.log(`${file}: ${fixedInFile} entries fixed`);
        totalFixed += fixedInFile;
    } else {
        console.log(`${file}: 0 entries fixed`);
    }
}

console.log(`\n=== Total: ${totalFixed} entries fixed across ${files.length} files ===`);

/**
 * Add 「」 quotes to a dialogue text string.
 *
 * Handles several patterns:
 *   1. Plain dialogue: "何を読んでるの？" → "「何を読んでるの？」"
 *   2. Text starting with dialogue, containing 」 mid-text (missing opening 「):
 *      "…そう。覚えたわ」 *独り言* 「名前は…」" → "「…そう。覚えたわ」 *独り言* 「名前は…」"
 *   3. Text with embedded 「」 as inner quotes within dialogue:
 *      "親には「現実を見なさい」って。" → "「親には「現実を見なさい」って。」"
 *   4. Text ending with 」 followed by stage direction *...*:
 *      "……ダメなのにね。」*——語尾がかすれる。*" → "「……ダメなのにね。」*——語尾がかすれる。*"
 */
function addQuotes(text) {
    // Pattern: text starts with dialogue and has a closing 」 somewhere
    // This means it's missing the opening 「
    // Examples:
    //   "…そう。{name}ね。覚えたわ」 *小さく* 「名前は一回で覚える主義だから」"
    //   "7年」 *窓の外を見ながら* 「大学の時に始めたの。文芸創作科」"
    //   "……卒業したら。」*声がかすれる。*「うん。卒業したら。」"
    //   "……先生がこんなことしちゃダメなのにね。」*——語尾がかすれる。そして笑う。*"
    //
    // For these, we just need to prepend 「 at the start.
    //
    // Pattern: text has embedded 「」 as quoted speech within the dialogue
    // Examples:
    //   "卒業して…親には「もう現実を見なさい」って。"
    //   "学校では「保健先生」でしょ？ また肩書き。」 *少し笑って* 「でもあなたは…"
    //   "もう「あとで」じゃない。今だよ。"
    //
    // For these, we wrap the entire text in 「」.
    //
    // Pattern: plain dialogue without any 「」
    // Examples:
    //   "何を読んでるの？"
    //   "大丈夫だってば！！ マジで！！"
    //
    // For these, we simply wrap in 「」.

    // Check if text contains 」 - if so, it might have partial quotes
    // We need to figure out if this is a "missing opening 「" case or
    // a "quoted phrase embedded in dialogue" case.

    // Strategy: Check if text ends with a closing pattern that indicates
    // the end is already properly closed.

    // Case: text has 」 but no preceding 「 before the first 」
    // This means the opening 「 is missing at the start
    const firstClose = text.indexOf('」');
    const firstOpen = text.indexOf('「');

    if (firstClose !== -1 && (firstOpen === -1 || firstClose < firstOpen)) {
        // The first bracket found is a closing one → missing opening 「
        // Just prepend 「
        return '「' + text;
    }

    if (firstOpen !== -1 && firstOpen < firstClose) {
        // There are embedded 「」 quotes (inner quoted speech)
        // We need to wrap the whole thing in outer 「」
        // But check if text already ends with 」
        const trimmed = text.trimEnd();
        if (trimmed.endsWith('」')) {
            // Embedded quotes, text ends with 」 already
            // Check if the last 」 is part of an inner quote or could serve as outer
            // Since we know text doesn't start with 「, we need to add outer quotes
            return '「' + text + '」';
        }
        // Embedded quotes but text doesn't end with 」
        return '「' + text + '」';
    }

    // No 「」 at all - simple case, wrap entirely
    return '「' + text + '」';
}
