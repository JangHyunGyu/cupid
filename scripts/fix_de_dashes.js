const fs = require('fs');
const path = require('path');

const deDir = path.join(__dirname, '..', 'assets', 'js', 'i18n', 'de');
const files = fs.readdirSync(deDir).filter(f => f.endsWith('.json'));

let totalCount = 0;

for (const file of files) {
    const filePath = path.join(deDir, file);
    const raw = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw);
    let fileCount = 0;

    for (const key of Object.keys(data)) {
        const entry = data[key];

        // Only fix "text" fields (not name, context, personality, or other fields)
        if (entry.text && typeof entry.text === 'string' && entry.text.includes('--')) {
            const before = entry.text;
            entry.text = entry.text.replace(/--/g, '\u2014');
            if (entry.text !== before) {
                // Count how many replacements happened
                const matches = before.match(/--/g);
                fileCount += matches ? matches.length : 0;
            }
        }

        // Also fix inside choices arrays (they are text values)
        if (entry.choices && Array.isArray(entry.choices)) {
            for (let i = 0; i < entry.choices.length; i++) {
                if (typeof entry.choices[i] === 'string' && entry.choices[i].includes('--')) {
                    const before = entry.choices[i];
                    entry.choices[i] = entry.choices[i].replace(/--/g, '\u2014');
                    if (entry.choices[i] !== before) {
                        const matches = before.match(/--/g);
                        fileCount += matches ? matches.length : 0;
                    }
                }
            }
        }

        // Also fix inside context fields
        if (entry.context && typeof entry.context === 'string' && entry.context.includes('--')) {
            const before = entry.context;
            entry.context = entry.context.replace(/--/g, '\u2014');
            if (entry.context !== before) {
                const matches = before.match(/--/g);
                fileCount += matches ? matches.length : 0;
            }
        }
    }

    if (fileCount > 0) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 4) + '\n', 'utf8');
        console.log(`${file}: ${fileCount} replacements`);
        totalCount += fileCount;
    } else {
        console.log(`${file}: 0 replacements`);
    }
}

console.log(`\nTotal: ${totalCount} replacements across ${files.length} files`);
