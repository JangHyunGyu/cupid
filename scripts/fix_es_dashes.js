const fs = require('fs');
const path = require('path');

const esDir = path.join(__dirname, '..', 'assets', 'js', 'i18n', 'es');
const files = fs.readdirSync(esDir).filter(f => f.endsWith('.json'));

let totalCount = 0;

for (const file of files) {
    const filePath = path.join(esDir, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let fileCount = 0;

    for (const key of Object.keys(data)) {
        const entry = data[key];
        if (entry.text && entry.text.includes('--')) {
            const before = entry.text;
            entry.text = entry.text.replace(/--/g, '\u2014');
            // Count how many replacements happened in this text field
            const matches = before.match(/--/g);
            fileCount += matches ? matches.length : 0;
        }
    }

    if (fileCount > 0) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 4) + '\n', 'utf8');
    }

    console.log(`${file}: ${fileCount} replacements`);
    totalCount += fileCount;
}

console.log(`\nTotal: ${totalCount} replacements across ${files.length} files`);
