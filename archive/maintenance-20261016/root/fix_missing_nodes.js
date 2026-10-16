const fs = require('fs');
const path = require('path');

// 1. Add wall_seo_2 to ko/day4_4_night.json
const fp = path.join(__dirname, 'assets/js/i18n/ko/day4_4_night.json');
const data = JSON.parse(fs.readFileSync(fp, 'utf8'));
const entries = Object.entries(data);

// Insert wall_seo_2 after wall_seo_pre_low_2
const idx = entries.findIndex(([k]) => k === 'wall_seo_pre_low_2');
if (idx === -1) {
    console.log('ERROR: wall_seo_pre_low_2 not found!');
    process.exit(1);
}

if (data['wall_seo_2']) {
    console.log('wall_seo_2 already exists in ko, skipping');
} else {
    entries.splice(idx + 1, 0, ['wall_seo_2', {
        "name": "서연",
        "text": "...지금 나올 수 있어? 공원. — 미안, 갑자기."
    }]);
    const rebuilt = Object.fromEntries(entries);
    fs.writeFileSync(fp, JSON.stringify(rebuilt, null, 4), 'utf8');
    console.log('Added wall_seo_2 to ko/day4_4_night.json');
}

// 2. Remove orphan nodes from all foreign language files
// lunch2_seo_end from day2_2_lunch (not in scenario JS)
// night2_msg_2~6 from day2_4_night (not in scenario JS)
const orphans = [
    { file: 'day2_2_lunch', keys: ['lunch2_seo_end'] },
    { file: 'day2_4_night', keys: ['night2_msg_2', 'night2_msg_3', 'night2_msg_4', 'night2_msg_5', 'night2_msg_6'] },
];

const langs = ['en', 'ja', 'es', 'fr', 'de'];
for (const { file, keys } of orphans) {
    for (const lang of langs) {
        const filePath = path.join(__dirname, 'assets/js/i18n', lang, file + '.json');
        const d = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        let changed = false;
        for (const key of keys) {
            if (d[key]) {
                delete d[key];
                changed = true;
                console.log(`Removed orphan "${key}" from ${lang}/${file}.json`);
            }
        }
        if (changed) {
            fs.writeFileSync(filePath, JSON.stringify(d, null, 4), 'utf8');
        }
    }
}

console.log('\nDone!');
