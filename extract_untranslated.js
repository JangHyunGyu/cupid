var SCENARIO = {};
const fs = require('fs');
const files = [
    'assets/js/scenario/day3_1_morning.js',
    'assets/js/scenario/day3_2_lunch.js',
    'assets/js/scenario/day3_3_afterschool.js',
    'assets/js/scenario/day3_4_night.js'
];
for (const f of files) {
    eval(fs.readFileSync(f, 'utf8'));
}
const keys = Object.keys(SCENARIO[3]);
const untranslated = [];

for (const k of keys) {
    const node = SCENARIO[3][k];
    if (!node._i18n || !node._i18n.en || !node._i18n.es) continue;
    const en = node._i18n.en;
    const es = node._i18n.es;
    if (es.text === en.text) {
        let entry = { key: k, name: en.name, text: en.text };
        if (en.choices) entry.choices = en.choices;
        if (en.context) entry.context = en.context;
        untranslated.push(entry);
    }
}

fs.writeFileSync('untranslated_day3.json', JSON.stringify(untranslated, null, 2), 'utf8');
console.log('Wrote ' + untranslated.length + ' untranslated entries to untranslated_day3.json');
