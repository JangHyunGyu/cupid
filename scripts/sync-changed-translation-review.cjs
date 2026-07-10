const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const KO_DIR = path.join(ROOT, 'assets/js/i18n/ko');
const LANGS = ['en', 'ja', 'es', 'fr', 'de', 'pt'];
const FILE_RE = /^day([1-5])_[1-4]_(?:morning|lunch|afterschool|night)\.json$/;
const GENERATED_AT = new Date().toISOString();

function readJson(file) {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function readHead(relativePath) {
    try {
        const source = execFileSync('git', ['show', `HEAD:${relativePath.replace(/\\/g, '/')}`], {
            cwd: ROOT,
            encoding: 'utf8',
            stdio: ['ignore', 'pipe', 'ignore']
        });
        return JSON.parse(source);
    } catch (_) {
        return {};
    }
}

let changedNodes = 0;

for (const file of fs.readdirSync(KO_DIR).filter(name => FILE_RE.test(name)).sort()) {
    const day = Number(file.match(FILE_RE)[1]);
    const section = path.basename(file, '.json');
    const relativePath = path.join('assets/js/i18n/ko', file);
    const current = readJson(path.join(ROOT, relativePath));
    const before = readHead(relativePath);
    const changed = Object.keys(current).filter(id => JSON.stringify(current[id]) !== JSON.stringify(before[id]));
    if (!changed.length) continue;

    const reviewPath = path.join(ROOT, `translation_review_day${day}.json`);
    const review = readJson(reviewPath);
    review._meta.generated = GENERATED_AT;
    review._meta.all_reviewed = false;
    review._meta.lang_avg = review._meta.lang_avg || {};
    for (const lang of LANGS) {
        if (!(lang in review._meta.lang_avg)) review._meta.lang_avg[lang] = 10;
    }

    for (const id of changed) {
        const node = current[id];
        const hasVisibleCopy = Object.prototype.hasOwnProperty.call(node, 'text') ||
            Object.prototype.hasOwnProperty.call(node, 'choices');
        if (!hasVisibleCopy) continue;

        if (!review[section]) review[section] = {};
        let record = review[section][id];
        if (!record) {
            record = {
                _ko_ref: `assets/js/i18n/ko/${file}#${id}`,
                _ko_name: '',
                _ko_text_preview: '',
                _has_choices: false
            };
            review[section][id] = record;
        }

        record._ko_name = node.name || '';
        record._ko_text_preview = node.text || '';
        record._has_choices = Array.isArray(node.choices) && node.choices.length > 0;
        for (const lang of LANGS) {
            if (!record[lang]) {
                record[lang] = {
                    _ref: `assets/js/i18n/${lang}/${file}#${id}`,
                    _reviewed: false,
                    _score: 10,
                    _issues: null
                };
            } else {
                record[lang]._reviewed = false;
            }
        }
        changedNodes++;
    }

    review._meta.total_nodes = Object.entries(review)
        .filter(([key, value]) => key !== '_meta' && value && typeof value === 'object')
        .reduce((sum, [, value]) => sum + Object.keys(value).length, 0);

    fs.writeFileSync(reviewPath, JSON.stringify(review, null, 2) + '\n', 'utf8');
}

console.log(`Synced translation review metadata for ${changedNodes} changed Korean nodes.`);
