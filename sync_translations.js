#!/usr/bin/env node
/**
 * sync_translations.js
 * SCENARIO.md 수정 후 변경된 ko 텍스트를 5개 언어로 번역 동기화
 * OpenRouter 무료 Nemotron 3 Ultra 사용
 */
const fs = require('fs');
const path = require('path');
const { callDeepSeek } = require('./deepseek_api');

const i18nDir = path.join(__dirname, 'assets', 'js', 'i18n');
const LANGS = ['en', 'ja', 'es', 'fr', 'de', 'pt'];

// 변경된 노드 목록 (파일별)
// Round 2: only the skipped nodes with corrected file mappings
const CHANGED_NODES = {
    "day4_1_morning": ["hidden_nurse_d4_5"],
    "day4_2_lunch": ["date_seo_pretty_high_2", "date_dain_rhythm", "date_dain_shop_3"],
    "day4_3_afterschool": ["confess_dain_yes_3"],
    "day5_1_morning": ["hidden_nurse_d5_2", "hidden_nurse_d5_2_ins", "hidden_homeroom_d5_6_ins3", "hidden_nurse_d5_4"],
    "day5_4_night": ["bitter_seo_1", "bitter_yuna_1", "bitter_dain_1"]
};

function loadJSON(lang, file) {
    const p = path.join(i18nDir, lang, `${file}.json`);
    if (!fs.existsSync(p)) return null;
    return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function saveJSON(lang, file, data) {
    const p = path.join(i18nDir, lang, `${file}.json`);
    fs.writeFileSync(p, JSON.stringify(data, null, 4), 'utf8');
}

async function translateBatch(koTexts, targetLang) {
    const langNames = { en: 'English', ja: 'Japanese', es: 'Spanish', fr: 'French', de: 'German', pt: 'Brazilian Portuguese' };
    const langName = langNames[targetLang];

    const prompt = `You are translating visual novel dialogue for a Korean high school romance game called "Cupid".

RULES:
- Translate naturally as a native ${langName} speaker would write — NO literal/word-by-word translation
- Keep *italic* markers for narration/thoughts exactly as-is
- Keep {name} placeholder exactly as-is
- Character names: 서연=Seoyeon, 유나=Yuna, 다인=Dain, 민수=Minsu, 하은=Haeun
- For Japanese: use katakana for names (ソヨン, ユナ, ダイン, ミンス, ハウン)
- Keep the tone: modern, trendy Korean drama vibe. Short, witty, with breathing room
- NO cringe, NO overly dramatic expressions, NO anime translation patterns
- ‹빈› means empty/blank — keep as ‹empty›(en), ‹空›(ja), ‹vacío›(es), ‹vide›(fr), ‹leer›(de)

Translate each numbered Korean text to ${langName}. Return ONLY a JSON object with the same keys mapping to translated strings.

${JSON.stringify(koTexts, null, 2)}`;

    const text = await callDeepSeek(prompt, { temperature: 0.3, maxTokens: 8192, json: true });
    return JSON.parse(text);
}

async function main() {
    let totalUpdated = 0;
    let totalSkipped = 0;

    for (const [file, nodeIds] of Object.entries(CHANGED_NODES)) {
        const ko = loadJSON('ko', file);
        if (!ko) { console.log(`⚠️  ko/${file}.json not found, skip`); continue; }

        // Collect ko texts for changed nodes
        const koTexts = {};
        for (const id of nodeIds) {
            if (ko[id]) {
                koTexts[id] = ko[id];
            } else {
                console.log(`  ⚠️  ${file}/${id} not in ko JSON, skip`);
                totalSkipped++;
            }
        }

        if (Object.keys(koTexts).length === 0) continue;

        console.log(`\n📄 ${file}.json — ${Object.keys(koTexts).length} nodes`);

        // Translate to each language
        for (const lang of LANGS) {
            const langData = loadJSON(lang, file);
            if (!langData) { console.log(`  ⚠️  ${lang}/${file}.json not found, skip`); continue; }

            try {
                const translations = await translateBatch(koTexts, lang);
                let updated = 0;
                for (const [id, text] of Object.entries(translations)) {
                    if (langData[id] !== undefined) {
                        langData[id] = text;
                        updated++;
                    }
                }
                saveJSON(lang, file, langData);
                totalUpdated += updated;
                console.log(`  ✅ ${lang}: ${updated} nodes updated`);
            } catch (e) {
                console.error(`  ❌ ${lang}: ${e.message}`);
            }

            // Rate limit
            await new Promise(r => setTimeout(r, 500));
        }
    }

    // Also delete removed nodes from all languages
    const deletedNodes = {
        "day3_4_night": ["night3_faithful_reflect_4_ins4", "night3_faithful_reflect_4_ins5"]
    };

    for (const [file, nodeIds] of Object.entries(deletedNodes)) {
        for (const lang of LANGS) {
            const langData = loadJSON(lang, file);
            if (!langData) continue;
            let deleted = 0;
            for (const id of nodeIds) {
                if (langData[id] !== undefined) {
                    delete langData[id];
                    deleted++;
                }
            }
            if (deleted > 0) {
                saveJSON(lang, file, langData);
                console.log(`  🗑️  ${lang}/${file}: ${deleted} deleted nodes removed`);
            }
        }
    }

    console.log(`\n✅ 번역 동기화 완료 — ${totalUpdated} entries updated, ${totalSkipped} skipped`);
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
