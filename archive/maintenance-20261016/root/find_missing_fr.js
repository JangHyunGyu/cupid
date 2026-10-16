/**
 * Find all English texts in the "fr" blocks that weren't translated
 * (i.e., the fr text is identical to the en text).
 */
const fs = require('fs');

const files = [
    'assets/js/scenario/day3_1_morning.js',
    'assets/js/scenario/day3_2_lunch.js',
    'assets/js/scenario/day3_3_afterschool.js',
    'assets/js/scenario/day3_4_night.js',
];

const missing = [];

for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf8');
    const SCENARIO = {};
    SCENARIO[3] = {};
    try {
        const cleaned = content
            .replace(/if \(typeof SCENARIO[^;]+;/g, '')
            .replace(/if \(!SCENARIO\[\d+\]\)[^;]+;/g, '');
        const fn = new Function('SCENARIO', cleaned);
        fn(SCENARIO);
    } catch (e) {
        console.error(`Error parsing ${filePath}: ${e.message}`);
        continue;
    }

    for (const [key, scene] of Object.entries(SCENARIO[3])) {
        if (!scene._i18n || !scene._i18n.en || !scene._i18n.fr) continue;
        const en = scene._i18n.en;
        const fr = scene._i18n.fr;

        if (en.text && en.text === fr.text) {
            missing.push({ file: filePath, key, type: 'text', en: en.text });
        }
        if (en.choices && fr.choices) {
            en.choices.forEach((c, i) => {
                if (c === fr.choices[i]) {
                    missing.push({ file: filePath, key, type: 'choice', index: i, en: c });
                }
            });
        }
        if (en.context && en.context === fr.context) {
            missing.push({ file: filePath, key, type: 'context', en: en.context });
        }
    }
}

// Group by unique English text
const unique = {};
for (const m of missing) {
    if (!unique[m.en]) unique[m.en] = [];
    unique[m.en].push({ file: m.file, key: m.key, type: m.type });
}

console.log(`Total missing: ${missing.length}`);
console.log(`Unique strings: ${Object.keys(unique).length}`);
console.log('\n--- UNIQUE MISSING TEXTS ---');
for (const [en] of Object.entries(unique)) {
    console.log(JSON.stringify(en));
}
