'use strict';
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { createHash } = require('node:crypto');
const root = path.resolve(__dirname, '..');
const languages = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt', 'zh'];
const visualKeys = new Set(['background', 'backgroundVariant', 'character', 'characters', 'night', 'sunset', 'timeOfDay']);
const hash = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');

function loadCorpus() {
    const context = vm.createContext({ window: {} });
    const files = fs.readdirSync(path.join(root, 'assets/js/scenario')).filter(file => /^day\d.*\.js$/.test(file)).sort();
    for (const file of files) vm.runInContext(fs.readFileSync(path.join(root, 'assets/js/scenario', file), 'utf8'), context);
    vm.runInContext(fs.readFileSync(path.join(root, 'assets/js/gallery-data.js'), 'utf8'), context);
    const locales = Object.fromEntries(languages.map(lang => [lang, Object.assign({}, ...files.map(file =>
        JSON.parse(fs.readFileSync(path.join(root, 'assets/js/i18n', lang, file.replace('.js', '.json')), 'utf8'))))]));
    const rows = Object.entries(context.SCENARIO).flatMap(([day, scenes]) => Object.entries(scenes).map(([id, scene]) => ({ id, day: Number(day), scene, file: scene.__sourceFile + '.js' })));
    return { rows, locales, GalleryData: context.window.GalleryData };
}

function inspect() {
    const { rows, locales, GalleryData } = loadCorpus();
    const ids = new Set(rows.map(row => row.id)), byId = new Map(rows.map(row => [row.id, row]));
    const cgIds = GalleryData.getAllCGIds(), errors = [], predecessors = new Map(rows.map(row => [row.id, new Set()]));
    const actorNames = { '서연': 'seyoun', '유나': 'yuna', '다인': 'dain', '담임': 'teacher', '담임선생님': 'teacher', '보건선생님': 'nurse', '하은': 'haeun', '민수': 'minsu', '이준호': 'junho' };
    const embedded = path => cgIds.has(base(path)) || /(?:sojeong_flashback|nurse_bedroom_pills|riin_lab_pills)/.test(path || '');
    function base(asset) { return String(asset || '').split('/').pop().replace(/\.(png|webp|jpe?g)$/i, ''); }
    function assets(scene) {
        if (scene.characters) return Object.values(scene.characters).map(value => typeof value === 'string' ? value : value?.src).filter(Boolean);
        return scene.character ? [scene.character] : [];
    }
    function layouts(scene) {
        if (embedded(scene.background)) return [];
        if (scene.characters) return Object.entries(scene.characters).filter(([, value]) => !!value).map(([slot, value]) => ({
            slot, src: typeof value === 'string' ? value : value.src, opacity: typeof value === 'string' ? 1 : value.opacity ?? 1
        }));
        return scene.character ? [{ slot: 'center', src: scene.character, opacity: 1 }] : [];
    }
    function targets(value, result = new Set()) {
        if (typeof value === 'string' && ids.has(value)) result.add(value);
        else if (Array.isArray(value)) value.forEach(item => targets(item, result));
        else if (value && typeof value === 'object') Object.values(value).forEach(item => targets(item, result));
        return result;
    }
    for (const row of rows) for (const next of targets(row.scene)) if (next !== row.id) predecessors.get(next).add(row.id);
    const effective = new Map(rows.map(row => [row.id, {
        backgrounds: new Set(row.scene.background ? [row.scene.background] : []),
        portraits: new Set(Object.hasOwn(row.scene, 'character') || Object.hasOwn(row.scene, 'characters')
            ? [JSON.stringify(layouts(row.scene))] : [])
    }]));
    for (let pass = 0; pass < rows.length; pass++) {
        let changed = false;
        for (const row of rows) for (const previous of predecessors.get(row.id)) {
            const current = effective.get(row.id), prior = effective.get(previous);
            for (const field of ['backgrounds', 'portraits']) {
                if (field === 'backgrounds' && row.scene.background) continue;
                if (field === 'portraits' && (Object.hasOwn(row.scene, 'character') || Object.hasOwn(row.scene, 'characters') || embedded(row.scene.background))) continue;
                for (const value of prior[field]) if (!current[field].has(value)) { current[field].add(value); changed = true; }
            }
        }
        if (!changed) break;
    }
    const changes = JSON.parse(fs.readFileSync(path.join(root, 'docs/qa/scene-visual-corrections-20261008.json'), 'utf8'));
    const corrected = new Map(changes.changes.map(change => [change.id, change]));
    const ledger = rows.map(row => {
        const scene = row.scene, text = locales.ko[row.id] || {}, shown = assets(scene);
        for (const asset of [scene.background, ...shown].filter(Boolean)) {
            if (!fs.existsSync(path.join(root, asset))) errors.push(`${row.id}: missing ${asset}`);
        }
        if (scene.timeOfDay && !['day', 'sunset', 'night'].includes(scene.timeOfDay)) errors.push(`${row.id}: invalid timeOfDay`);
        const expectedActor = actorNames[text.name];
        const actors = shown.map(asset => base(asset).split('_')[0]);
        const noteBesideDain = row.id === 'after1_jealousy_seo_yuna' && /쪽지/.test(text.text || '') && /유나의 글씨/.test(text.text || '');
        if (expectedActor && actors.length && !actors.includes(expectedActor) && !embedded(scene.background) && !noteBesideDain && scene.type !== 'group_free_talk') {
            errors.push(`${row.id}: ${text.name} speaks while ${actors.join(', ')} is shown`);
        }
        const remote = !!scene.characters && Object.values(scene.characters).some(value => value && typeof value === 'object' && value.opacity < 1);
        const category = scene.routeBeforeRender ? 'router' : scene.inheritVisualContext ? 'runtime-inherited'
            : scene.type === 'group_free_talk' ? 'dynamic-group' : embedded(scene.background) ? 'illustrated-scene'
            : remote ? 'message-note-or-recollection' : expectedActor ? 'dialogue' : 'narration-or-system';
        return {
            id: row.id, day: row.day, file: row.file, category,
            background: scene.background || null, portraits: shown,
            timeOfDay: scene.timeOfDay || (scene.night || row.file.endsWith('_night.js') ? 'night' : scene.sunset || row.file.includes('_3_afterschool') ? 'sunset' : 'day'),
            renderedTimeFilter: cgIds.has(base(scene.background)) ? 'none' : scene.inheritVisualContext ? 'inherited' : 'scene-time',
            effectiveBackgrounds: [...effective.get(row.id).backgrounds].sort(),
            effectivePortraitSets: [...effective.get(row.id).portraits].sort().map(value => JSON.parse(value)),
            predecessors: [...predecessors.get(row.id)].sort(),
            dialogueHashes: Object.fromEntries(languages.map(lang => [lang, hash(locales[lang][row.id] || {})])),
            gameplayHash: hash(Object.fromEntries(Object.entries(scene).filter(([key]) => !visualKeys.has(key)))),
            review: corrected.has(row.id) ? 'corrected' : 'reviewed-retained',
            reasons: corrected.get(row.id)?.reasons || [category === 'router' ? 'Routing-only record; inherited context checked.'
                : category === 'runtime-inherited' ? 'Runtime preserves the originating conversation layout.'
                : noteBesideDain ? 'Yuna is quoted from a note while Dain remains present.'
                : 'Retained after canonical dialogue, scene context and existing artwork review.']
        };
    });
    for (const lang of languages) for (const character of Object.values(GalleryData.characters[lang])) {
        for (const expression of character.expressions) {
            const stem = `assets/images/characters/${character.id}_${expression}`;
            if (!['.png', '.webp'].some(ext => fs.existsSync(path.join(root, stem + ext)))) errors.push(`${lang}: missing gallery expression ${stem}`);
            if (!GalleryData.getExpressionName(lang, expression)) errors.push(`${lang}: missing expression label ${expression}`);
        }
    }
    return { rows, locales, ledger, errors, summary: { scenes: rows.length, languages, correctedScenes: corrected.size, portraits: new Set(ledger.flatMap(row => row.portraits)).size, backgrounds: new Set(ledger.map(row => row.background).filter(Boolean)).size } };
}
module.exports = { loadCorpus, inspect, visualKeys, hash };
if (require.main === module) {
    const result = inspect();
    if (process.argv.includes('--write')) fs.writeFileSync(path.join(root, 'docs/qa/scene-visual-ledger-20261008.json'), JSON.stringify({ summary: result.summary, canonicalReviewLanguage: 'ko', translationScope: 'Shared visual bindings and unchanged dialogue hashes across all eight locales', rows: result.ledger }, null, 2) + '\n');
    for (const error of result.errors) console.error(error);
    console.log(JSON.stringify({ ...result.summary, errors: result.errors.length }));
    process.exitCode = result.errors.length ? 1 : 0;
}
