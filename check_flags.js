const fs = require('fs');
const jsDir = 'c:/workspace/cupid/assets/js/scenario';
const files = fs.readdirSync(jsDir).filter(f => f.endsWith('.js'));
for(let file of files) {
  let content = fs.readFileSync(jsDir + '/' + file, 'utf8');
  let matches = [...content.matchAll(/"setFlags"\s*:\s*\[(.*?)\]/g)];
  if(matches.length > 0) {
    console.log(file, matches.map(m => m[1]).join(' | '));
  }
}
