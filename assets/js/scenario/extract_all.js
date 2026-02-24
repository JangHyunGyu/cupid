const fs = require('fs');

const files = [
    'd:/workspace/cupid/assets/js/scenario/day1_1_morning.js',
    'd:/workspace/cupid/assets/js/scenario/day1_2_lunch.js',
    'd:/workspace/cupid/assets/js/scenario/day1_3_afterschool.js',
    'd:/workspace/cupid/assets/js/scenario/day1_4_night.js',
];

let allTexts = [];
let allChoiceTexts = [];
let allContextTexts = [];
let allPersonalityTexts = [];

for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf8');

    // More robust extraction - find en blocks by tracking braces
    let pos = 0;
    while (true) {
        const enIdx = content.indexOf('"en":', pos);
        if (enIdx === -1) break;

        // Find the opening brace
        let braceStart = content.indexOf('{', enIdx);
        if (braceStart === -1) break;

        // Find matching closing brace
        let depth = 1;
        let i = braceStart + 1;
        while (i < content.length && depth > 0) {
            if (content[i] === '{') depth++;
            if (content[i] === '}') depth--;
            i++;
        }

        const block = content.substring(braceStart, i);

        // Check if this is inside _i18n by looking backwards
        const before = content.substring(Math.max(0, enIdx - 200), enIdx);
        if (before.includes('_i18n')) {
            const nameMatch = block.match(/"name":\s*"((?:[^"\\]|\\.)*)"/);
            const textMatch = block.match(/"text":\s*"((?:[^"\\]|\\.)*)"/);

            if (textMatch) allTexts.push(textMatch[1]);

            const ctxMatch = block.match(/"context":\s*"((?:[^"\\]|\\.)*)"/);
            if (ctxMatch) allContextTexts.push(ctxMatch[1]);

            const persMatch = block.match(/"personality":\s*"((?:[^"\\]|\\.)*)"/);
            if (persMatch) allPersonalityTexts.push(persMatch[1]);

            // Extract choices
            const choicesMatch = block.match(/"choices":\s*\[([\s\S]*?)\]/);
            if (choicesMatch) {
                const choicesStr = choicesMatch[1];
                const choiceRegex = /"((?:[^"\\]|\\.)*)"/g;
                let cm;
                while ((cm = choiceRegex.exec(choicesStr)) !== null) {
                    allChoiceTexts.push(cm[1]);
                }
            }
        }

        pos = i;
    }
}

// Deduplicate
const uniqueTexts = [...new Set(allTexts)];
const uniqueChoices = [...new Set(allChoiceTexts)];
const uniqueContexts = [...new Set(allContextTexts)];
const uniquePersonalities = [...new Set(allPersonalityTexts)];

// Output as JSON for easy processing
const output = {
    texts: uniqueTexts,
    choices: uniqueChoices,
    contexts: uniqueContexts,
    personalities: uniquePersonalities
};

fs.writeFileSync('d:/workspace/cupid/assets/js/scenario/en_texts.json', JSON.stringify(output, null, 2), 'utf8');
console.log(`Extracted: ${uniqueTexts.length} texts, ${uniqueChoices.length} choices, ${uniqueContexts.length} contexts, ${uniquePersonalities.length} personalities`);
console.log('Saved to en_texts.json');
