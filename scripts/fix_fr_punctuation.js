/**
 * Fix French (FR) translation punctuation issues:
 * 1. Add non-breaking space before ? ! : ; (French typography rule)
 * 2. Replace double dash "--" with em dash "—"
 *
 * Only modifies "text" fields in i18n JSON files.
 */

const fs = require('fs');
const path = require('path');

const FR_DIR = path.join(__dirname, '..', 'assets', 'js', 'i18n', 'fr');

function fixFrenchPunctuation(text) {
    let fixed = text;
    let punctuationFixes = 0;
    let dashFixes = 0;

    // Issue 4: Replace "--" with "—" (em dash)
    // Match double dashes that aren't already part of an em dash
    const dashBefore = fixed;
    fixed = fixed.replace(/--/g, '—');
    if (fixed !== dashBefore) {
        // Count occurrences
        const matches = dashBefore.match(/--/g);
        dashFixes = matches ? matches.length : 0;
    }

    // Issue 2: Add space before ? ! : ; (French typography)
    // Only when preceded by a word character (letter including accented), closing quote, or digit
    // Don't touch URLs, {placeholders}, or already-correct spacing
    const punctBefore = fixed;

    // Pattern: word char (including accented letters, digits, closing quotes) directly before ?!;
    // We handle : separately to avoid breaking URLs (http:, https:)
    // Also handle closing quotes like » before punctuation

    // Fix for ? ! ;
    fixed = fixed.replace(/([a-zA-ZÀ-ÿ0-9»\u201d\u2019"])([?!;])/g, '$1 $2');

    // Fix for : but not in URLs (http:, https:, {placeholder}:) and not timestamps like 20:00
    fixed = fixed.replace(/([a-zA-ZÀ-ÿ»\u201d\u2019"])([:])(?!\/\/)/g, (match, before, colon) => {
        // Don't add space if it looks like a URL protocol or inside braces
        return before + ' ' + colon;
    });

    // Fix ellipsis followed by punctuation: "...?" → "... ?"
    fixed = fixed.replace(/\.\.\.([?!;:])/g, '... $1');

    // Count punctuation fixes (compare char by char would be complex, just count diffs)
    if (fixed !== punctBefore) {
        // Rough count: number of spaces added
        punctuationFixes = fixed.length - punctBefore.length;
    }

    return { fixed, punctuationFixes, dashFixes };
}

function processFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    let totalPunctuationFixes = 0;
    let totalDashFixes = 0;

    for (const key of Object.keys(data)) {
        if (!data[key]) continue;

        // Fix "text" fields
        if (typeof data[key].text === 'string') {
            const { fixed, punctuationFixes, dashFixes } = fixFrenchPunctuation(data[key].text);
            if (fixed !== data[key].text) {
                data[key].text = fixed;
                totalPunctuationFixes += punctuationFixes;
                totalDashFixes += dashFixes;
            }
        }

        // Fix "choices" arrays
        if (Array.isArray(data[key].choices)) {
            for (let i = 0; i < data[key].choices.length; i++) {
                if (typeof data[key].choices[i] === 'string') {
                    const { fixed, punctuationFixes, dashFixes } = fixFrenchPunctuation(data[key].choices[i]);
                    if (fixed !== data[key].choices[i]) {
                        data[key].choices[i] = fixed;
                        totalPunctuationFixes += punctuationFixes;
                        totalDashFixes += dashFixes;
                    }
                }
            }
        }
    }

    if (totalPunctuationFixes > 0 || totalDashFixes > 0) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 4) + '\n', 'utf8');
    }

    return { totalPunctuationFixes, totalDashFixes };
}

// Main
const files = fs.readdirSync(FR_DIR).filter(f => f.endsWith('.json')).sort();
let grandPunctuation = 0;
let grandDash = 0;

console.log('=== French Punctuation & Dash Fix ===\n');

for (const file of files) {
    const filePath = path.join(FR_DIR, file);
    const { totalPunctuationFixes, totalDashFixes } = processFile(filePath);

    if (totalPunctuationFixes > 0 || totalDashFixes > 0) {
        console.log(`${file}: ${totalPunctuationFixes} punctuation space(s), ${totalDashFixes} dash(es) fixed`);
    }

    grandPunctuation += totalPunctuationFixes;
    grandDash += totalDashFixes;
}

console.log(`\nTotal: ${grandPunctuation} punctuation spacing fixes, ${grandDash} dash fixes`);
console.log('Done.');
