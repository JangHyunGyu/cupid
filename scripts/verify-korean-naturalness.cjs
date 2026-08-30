'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const KO_SCENARIO_DIR = path.join(ROOT, 'assets/js/i18n/ko');
const errors = [];

const highConfidencePatterns = [
    ['기계적인 요약·결론 문구', /결론적으로|요약하면|정리하자면|종합하면/u],
    ['과장되거나 보고서 같은 문구', /시사하는 바|주목할 만|매우 중요/u],
    ['번역투 문장 틀', /에 있어서|되어진|할 수 있을 것으로 보인다|라는 점에서/u],
    ['부자연스러운 띄어쓰기', /새게임|30초만에|확인해보세요/u]
];
const connectiveComma = /(?:고|며|지만|면서|아서|어서|는데),/u;

function read(relativePath) {
    return fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
}

function walkStrings(value, location, records) {
    if (typeof value === 'string') {
        if (/[가-힣]/u.test(value)) records.push({ location, value });
        return;
    }
    if (Array.isArray(value)) {
        value.forEach((entry, index) => walkStrings(entry, `${location}[${index}]`, records));
        return;
    }
    if (value && typeof value === 'object') {
        Object.entries(value).forEach(([key, entry]) => walkStrings(entry, `${location}.${key}`, records));
    }
}

function scanText(location, value, checkComma = false) {
    for (const [label, pattern] of highConfidencePatterns) {
        if (pattern.test(value)) errors.push(`${location}: ${label} (${value.match(pattern)[0]})`);
    }
    if (checkComma && connectiveComma.test(value)) {
        errors.push(`${location}: 연결어미 뒤 쉼표 (${value.match(connectiveComma)[0]})`);
    }
}

const scenarioFiles = fs.readdirSync(KO_SCENARIO_DIR)
    .filter(file => /^day[1-5]_[1-4]_(?:morning|lunch|afterschool|night)\.json$/u.test(file))
    .sort();
const scenarioRecords = [];
for (const file of scenarioFiles) {
    const data = JSON.parse(fs.readFileSync(path.join(KO_SCENARIO_DIR, file), 'utf8'));
    walkStrings(data, `assets/js/i18n/ko/${file}`, scenarioRecords);
}
for (const record of scenarioRecords) scanText(record.location, record.value, true);

function collectJsFiles(relativeDir) {
    const absoluteDir = path.join(ROOT, relativeDir);
    const found = [];
    for (const entry of fs.readdirSync(absoluteDir, { withFileTypes: true })) {
        const relativePath = path.join(relativeDir, entry.name);
        if (entry.isDirectory()) {
            if (entry.name === 'i18n' || entry.name === 'scenario') continue;
            found.push(...collectJsFiles(relativePath));
        } else if (entry.isFile() && entry.name.endsWith('.js')) {
            found.push(relativePath.replace(/\\/g, '/'));
        }
    }
    return found;
}

const productionSources = [
    ...collectJsFiles('assets/js'),
    'scripts/example-dialogues-ko-data.cjs',
    'index.html',
    'game.html',
    'gallery.html',
    'seo/_generate.js'
];

for (const file of productionSources) {
    const filtered = read(file)
        .split(/\r?\n/u)
        .filter(line => !/남기지 마세요|영어 문장을 옮긴 듯한 틀보다/u.test(line))
        .join('\n');
    scanText(file, filtered);
}

const koreanSeoPages = fs.readdirSync(path.join(ROOT, 'seo'))
    .filter(file => file.endsWith('.html'))
    .filter(file => /<html\s+lang="ko"/iu.test(read(`seo/${file}`)))
    .sort();

for (const file of koreanSeoPages) {
    const relativePath = `seo/${file}`;
    const html = read(relativePath);
    scanText(relativePath, html);

    const intro = (html.match(/<p\s+class="intro">([\s\S]*?)<\/p>/iu) || [])[1];
    const finalCta = (html.match(/<section\s+class="final-cta"><p>([\s\S]*?)<\/p>/iu) || [])[1];
    if (intro && finalCta && intro.replace(/\s+/gu, ' ').trim() === finalCta.replace(/\s+/gu, ' ').trim()) {
        errors.push(`${relativePath}: 첫 문단과 마지막 CTA 문단이 같습니다.`);
    }
}

if (scenarioFiles.length !== 20) errors.push(`한국어 시나리오 파일 수가 20개가 아닙니다: ${scenarioFiles.length}`);
if (scenarioRecords.length < 4000) errors.push(`한국어 시나리오 문자열이 비정상적으로 적습니다: ${scenarioRecords.length}`);

if (errors.length) {
    console.error(`Korean naturalness verification failed with ${errors.length} error(s):`);
    errors.forEach(error => console.error(`- ${error}`));
    process.exit(1);
}

const scenarioChars = scenarioRecords.reduce((sum, record) => sum + record.value.length, 0);
console.log(
    `Verified Korean naturalness: ${scenarioFiles.length} scenario files, ` +
    `${scenarioRecords.length} scenario strings (${scenarioChars} chars), ` +
    `${productionSources.length} production sources, ${koreanSeoPages.length} Korean SEO pages.`
);
