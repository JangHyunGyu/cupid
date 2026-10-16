const fs = require('fs');

let content = fs.readFileSync('c:/workspace/cupid/assets/js/modules/SceneRenderer.js', 'utf8');

const regex = /_applyI18n\(scene\) \{[\s\S]*?return result;\s*\}/;

const newStr = `_applyI18n(scene, id) {
        if (!scene) return scene;

        const lang = window.GAME_LANG || 'ko';
        let i18n = {};

        if (window.I18N_DATA && window.I18N_DATA[id]) {
            i18n = window.I18N_DATA[id];
        } else if (scene._i18n) {
            i18n = scene._i18n[lang] ?? scene._i18n['en'] ?? scene._i18n['ko'] ?? {};
        } else {
            return scene; // No text data found
        }

        const result = { ...scene };

        for (const key of ['name', 'text', 'context', 'personality', 'affinityText']) {
            if (i18n[key] !== undefined) result[key] = i18n[key];
        }

        if (i18n.choices && Array.isArray(result.choices)) {
            result.choices = result.choices.map((choice, idx) => ({
                ...choice,
                text: i18n.choices[idx] ?? choice.text ?? '',
            }));
        }

        return result;
    }`;

content = content.replace(regex, newStr);
fs.writeFileSync('c:/workspace/cupid/assets/js/modules/SceneRenderer.js', content, 'utf8');
