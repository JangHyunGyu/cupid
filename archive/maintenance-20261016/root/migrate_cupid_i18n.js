const fs = require('fs');
const path = require('path');

const scenarioDir = path.join(__dirname, 'assets', 'js', 'scenario');
const i18nDir = path.join(__dirname, 'assets', 'js', 'i18n');

const langs = ['ko', 'en', 'ja', 'fr', 'es'];
const extractedLangs = {};

langs.forEach(lang => {
    extractedLangs[lang] = {};
});

// Helper to use regex to extract and remove _i18n
function processFile(file) {
    if (!file.startsWith('day') || !file.endsWith('.js')) return;
    const filePath = path.join(scenarioDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // We can evaluate the file to get the SCENARIO object, 
    // but the file just adds properties to SCENARIO[x].
    try {
        let capture = content;
        // Mock SCENARIO wrapper to extract the object
        const mockScript = `
        var SCENARIO = {};
        ` + content + `
        module.exports = SCENARIO;
        `;
        const modulePath = path.join(__dirname, '_temp_script_' + file);
        fs.writeFileSync(modulePath, mockScript);
        
        const SCENARIO_OBJ = require(modulePath);
        
        // Build JSON for each language based on file
        const baseName = file.replace('.js', '');
        
        langs.forEach(lang => {
            extractedLangs[lang][baseName] = {};
        });

        // Find the day (usually 1, 2, 3...)
        let dayKeys = Object.keys(SCENARIO_OBJ);
        for (let day of dayKeys) {
            for (let nodeId in SCENARIO_OBJ[day]) {
                const node = SCENARIO_OBJ[day][nodeId];
                if (node._i18n) {
                    langs.forEach(lang => {
                        if (node._i18n[lang]) {
                            extractedLangs[lang][baseName][nodeId] = node._i18n[lang];
                        }
                    });
                }
            }
        }
        
        // Remove the temporary file
        fs.unlinkSync(modulePath);

        // We also need to strip the _i18n object from original JS.
        // For simplicity, we can just regex replace:
        // /"_i18n":\s*\{[\s\S]*?\}(?=\n\s*(?:}|\,))/g but that's risky.
        // Let's use string manipulation or a simpler approach, e.g. replacing the _i18n block in the file string.
        let strippedContent = content.replace(/"_i18n":\s*\{[\s\S]*?(?=\s+\}\s+}[,\s])\s+\}\s+\}/g, '');
        // We will just let the loader merge them.

        // Write individual JSON files
        langs.forEach(lang => {
            const outPath = path.join(i18nDir, lang, baseName + '.json');
            fs.writeFileSync(outPath, JSON.stringify(extractedLangs[lang][baseName], null, 4));
        });

    } catch (e) {
        console.error('Error processing', file, e);
    }
}

const files = fs.readdirSync(scenarioDir);
files.forEach(processFile);
console.log('Done migrating i18n data!');
