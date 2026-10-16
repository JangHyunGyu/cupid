const fs = require('fs');
const filePath = 'd:/workspace/cupid/assets/js/scenario/day1_1_morning.js';
let content = fs.readFileSync(filePath, 'utf8');

// Check if fr already exists
if (content.includes('"fr":')) {
    console.log('French translations already exist in some blocks');
}

// Name translations
const nameMap = {
    'Me': 'Moi',
    'System': 'Système',
    '???': '???',
    'Seoyeon': 'Seoyeon',
    'Homeroom Teacher': 'Professeur Principal',
    'Classmates': 'Camarades',
    'School Nurse': 'Infirmière Scolaire'
};

console.log('Starting processing...');
console.log('File length:', content.length);

// Count _i18n blocks
let count = 0;
let idx = 0;
while ((idx = content.indexOf('"_i18n"', idx)) !== -1) {
    count++;
    idx += 7;
}
console.log('Found', count, '_i18n blocks');
