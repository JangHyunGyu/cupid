const fs = require('fs');
const files = [
    'd:/workspace/cupid/assets/js/scenario/day2_1_morning.js',
    'd:/workspace/cupid/assets/js/scenario/day2_2_lunch.js',
    'd:/workspace/cupid/assets/js/scenario/day2_3_afterschool.js',
    'd:/workspace/cupid/assets/js/scenario/day2_4_night.js',
];

for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    let pos = 0;
    let count = 0;
    let frCount = 0;
    let choicesCount = 0;
    let contextCount = 0;

    while (true) {
        const i18nIdx = content.indexOf('"_i18n"', pos);
        if (i18nIdx === -1) break;

        let braceStart = content.indexOf('{', i18nIdx + 7);
        if (braceStart === -1) break;

        let depth = 0;
        let blockEnd = -1;
        for (let j = braceStart; j < content.length; j++) {
            if (content[j] === '{') depth++;
            if (content[j] === '}') { depth--; if (depth === 0) { blockEnd = j; break; } }
        }
        if (blockEnd === -1) break;

        const block = content.substring(braceStart, blockEnd + 1);
        count++;

        if (block.includes('"fr"')) frCount++;
        if (block.includes('"choices"')) choicesCount++;
        if (block.includes('"context"')) contextCount++;

        pos = blockEnd + 1;
    }

    console.log(file.split('/').pop() + ': ' + count + ' blocks, ' + frCount + ' already have fr, ' + choicesCount + ' with choices, ' + contextCount + ' with context');
}
