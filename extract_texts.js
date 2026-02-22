const fs = require('fs');
function extractTexts(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    // Find all es text fields (which currently have English text)
    const re = /"es": \{[^}]*?"text":\s*"((?:[^"\]|\.)*)"/g;
    let m, texts = new Set();
    while ((m = re.exec(content)) !== null) {
        texts.add(m[1]);
    }
    return [...texts];
}

// Also extract choices from es blocks  
function extractChoices(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const re = /"es": \{[^}]*?"choices":\s*\[([\s\S]*?)\]/g;
    let m, texts = new Set();
    while ((m = re.exec(content)) !== null) {
        const choiceItems = m[1].match(/"((?:[^"\]|\.)*)"/g);
        if (choiceItems) {
            choiceItems.forEach(c => texts.add(c.slice(1, -1)));
        }
    }
    return [...texts];
}

const t1 = extractTexts('C:/workspace/cupid/assets/js/scenario/day1_1_morning.js');
const t2 = extractTexts('C:/workspace/cupid/assets/js/scenario/day1_2_lunch.js');
const c1 = extractChoices('C:/workspace/cupid/assets/js/scenario/day1_1_morning.js');
const c2 = extractChoices('C:/workspace/cupid/assets/js/scenario/day1_2_lunch.js');
const allTexts = [...new Set([...t1, ...t2])];
const allChoices = [...new Set([...c1, ...c2])];
console.log('Unique text entries: ' + allTexts.length);
console.log('Unique choice entries: ' + allChoices.length);
console.log('\n=== TEXTS ===');
allTexts.forEach((t, i) => console.log(i + '|||' + t));
console.log('\n=== CHOICES ===');
allChoices.forEach((t, i) => console.log(i + '|||' + t));
