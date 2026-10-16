const fs = require('fs');

let content = fs.readFileSync('c:/workspace/cupid/assets/js/modules/SceneRenderer.js', 'utf8');

content = content.replace(/this\._applyI18n\(SCENARIO\[this\.stateManager\.currentDay\]\[id\]\)/g, 'this._applyI18n(SCENARIO[this.stateManager.currentDay][id], id)');
content = content.replace(/this\._applyI18n\(SCENARIO\[day\]\[id\]\)/g, 'this._applyI18n(SCENARIO[day][id], id)');
content = content.replace(/this\._applyI18n\(SCENARIO\[0\]\[id\]\)/g, 'this._applyI18n(SCENARIO[0][id], id)');
content = content.replace(/this\._applyI18n\(SCENARIO\[id\]\)/g, 'this._applyI18n(SCENARIO[id], id)');

fs.writeFileSync('c:/workspace/cupid/assets/js/modules/SceneRenderer.js', content, 'utf8');
