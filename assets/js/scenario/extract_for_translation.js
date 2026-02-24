const fs = require('fs');

const files = [
    'd:/workspace/cupid/assets/js/scenario/day1_1_morning.js',
    'd:/workspace/cupid/assets/js/scenario/day1_2_lunch.js',
    'd:/workspace/cupid/assets/js/scenario/day1_3_afterschool.js',
    'd:/workspace/cupid/assets/js/scenario/day1_4_night.js',
];

function findMatchingBrace(text, startPos) {
    let depth = 0;
    for (let i = startPos; i < text.length; i++) {
        if (text[i] === '{') depth++;
        else if (text[i] === '}') { depth--; if (depth === 0) return i; }
    }
    return -1;
}

function findMatchingBracket(text, startPos) {
    let depth = 0;
    for (let i = startPos; i < text.length; i++) {
        if (text[i] === '[') depth++;
        else if (text[i] === ']') { depth--; if (depth === 0) return i; }
    }
    return -1;
}

let allTexts = new Set();
let allChoices = new Set();
let allContexts = new Set();
let allPersonalities = new Set();

for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf8');

    // Find all "fr" blocks (which currently have English text)
    const frRegex = /"fr"\s*:\s*\{/g;
    let frMatch;

    while ((frMatch = frRegex.exec(content)) !== null) {
        const braceStart = content.indexOf('{', frMatch.index + 4);
        const braceEnd = findMatchingBrace(content, braceStart);
        if (braceEnd === -1) continue;

        const block = content.substring(braceStart, braceEnd + 1);

        const textMatch = block.match(/"text"\s*:\s*"((?:[^"\\]|\\.)*)"/);
        if (textMatch) allTexts.add(textMatch[1]);

        const ctxMatch = block.match(/"context"\s*:\s*"((?:[^"\\]|\\.)*)"/);
        if (ctxMatch) allContexts.add(ctxMatch[1]);

        const persMatch = block.match(/"personality"\s*:\s*"((?:[^"\\]|\\.)*)"/);
        if (persMatch) allPersonalities.add(persMatch[1]);

        // Choices
        const choicesIdx = block.indexOf('"choices"');
        if (choicesIdx !== -1) {
            const arrStart = block.indexOf('[', choicesIdx);
            if (arrStart !== -1) {
                const arrEnd = findMatchingBracket(block, arrStart);
                if (arrEnd !== -1) {
                    const arrText = block.substring(arrStart + 1, arrEnd);
                    const choiceRegex = /"((?:[^"\\]|\\.)*)"/g;
                    let cm;
                    while ((cm = choiceRegex.exec(arrText)) !== null) {
                        allChoices.add(cm[1]);
                    }
                }
            }
        }
    }
}

console.log(`Unique texts: ${allTexts.size}`);
console.log(`Unique choices: ${allChoices.size}`);
console.log(`Unique contexts: ${allContexts.size}`);
console.log(`Unique personalities: ${allPersonalities.size}`);

// Write to file
const output = {
    texts: [...allTexts],
    choices: [...allChoices],
    contexts: [...allContexts],
    personalities: [...allPersonalities]
};

fs.writeFileSync('d:/workspace/cupid/assets/js/scenario/to_translate.json', JSON.stringify(output, null, 2));
console.log('Written to to_translate.json');
