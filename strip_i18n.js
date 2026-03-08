const fs = require('fs');
const path = require('path');

const scenarioDir = path.join(__dirname, 'assets', 'js', 'scenario');

function processFile(file) {
    if (!file.startsWith('day') || !file.endsWith('.js')) return;
    const filePath = path.join(scenarioDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    try {
        const mockScript = `
        var SCENARIO = {};
        ` + content + `
        module.exports = SCENARIO;
        `;
        const modulePath = path.join(__dirname, '_temp_script2_' + file);
        fs.writeFileSync(modulePath, mockScript);
        
        const SCENARIO_OBJ = require(modulePath);
        fs.unlinkSync(modulePath);

        let dayKeys = Object.keys(SCENARIO_OBJ);
        let dayNum = dayKeys[0];
        let nodesObj = SCENARIO_OBJ[dayNum];

        for (let nodeId in nodesObj) {
            delete nodesObj[nodeId]._i18n;
        }

        let newContent = `/**
 * ============================================================================
 * CUPID - ${file.replace('.js', '')}
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[${dayNum}]) SCENARIO[${dayNum}] = {};

Object.assign(SCENARIO[${dayNum}], ${JSON.stringify(nodesObj, null, 4)});
`;
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log('Processed and cleaned:', file);
    } catch(e) {
        console.error('Failed to process', file, e);
    }
}

const files = fs.readdirSync(scenarioDir);
files.forEach(processFile);
