const fs = require('fs');
const path = require('path');

const nameMap = {
  'Me': 'Moi',
  'System': 'Système',
  'Seoyeon': 'Seoyeon',
  'Yuna': 'Yuna',
  'Dain': 'Dain',
  'School Nurse': 'Infirmière Scolaire',
  'Homeroom Teacher': 'Professeur Principal',
  'Teacher': 'Professeur',
  'Nurse': 'Infirmière Scolaire',
  '': ''
};

const choicesMap = {
  "Clean casual *comfortable and natural*": "Casual soigné *confortable et naturel*",
  "A little dressed up *today's special, after all*": "Un peu habillé *après tout, c'est un jour spécial*",
  "Start Over from the Beginning": "Recommencer depuis le Début",
  "Start over from the beginning": "Recommencer depuis le début",
};

function processFile(filePath) {
  console.log('Processing: ' + filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const result = [];
  let frBlocksAdded = 0;
  let idx = 0;
  
  // State tracking
  let insideI18n = false;
  let i18nBraceDepth = 0;
  let currentI18nHasFr = false;
  
  // Track en block
  let insideEn = false;
  let enBraceDepth = 0;
  let enBlock = [];
  let currentEnName = '';
  let currentEnText = '';
  let currentEnChoices = [];
  
  // Track ja block  
  let insideJa = false;
  let jaBraceDepth = 0;
  let jaIndent = '';
  let jaEndIdx = -1;
  
  while (idx < lines.length) {
    const line = lines[idx];
    
    if (!insideI18n) {
      // Detect _i18n start
      if (line.includes('"_i18n"') && line.includes('{')) {
        insideI18n = true;
        currentI18nHasFr = false;
        currentEnName = '';
        currentEnText = '';
        currentEnChoices = [];
        insideEn = false;
        insideJa = false;
        jaEndIdx = -1;
        
        let opens = (line.match(/\{/g) || []).length;
        let closes = (line.match(/\}/g) || []).length;
        // The first { is the _i18n opening brace
        i18nBraceDepth = opens - closes;
      }
      result.push(line);
      idx++;
      continue;
    }
    
    // Inside _i18n block
    let opens = (line.match(/\{/g) || []).length;
    let closes = (line.match(/\}/g) || []).length;
    i18nBraceDepth += opens - closes;
    
    // Check for existing fr
    if (/^\s*"fr"\s*:/.test(line)) {
      currentI18nHasFr = true;
    }
    
    // Track en block
    if (!insideEn && /^\s*"en"\s*:\s*\{/.test(line)) {
      insideEn = true;
      enBlock = [line];
      enBraceDepth = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
      if (enBraceDepth <= 0) {
        insideEn = false;
        parseEnBlock(enBlock);
      }
    } else if (insideEn) {
      enBlock.push(line);
      enBraceDepth += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
      if (enBraceDepth <= 0) {
        insideEn = false;
        parseEnBlock(enBlock);
      }
    }
    
    // Track ja block
    if (!insideJa && /^\s*"ja"\s*:\s*\{/.test(line)) {
      insideJa = true;
      jaIndent = line.match(/^(\s*)/)[1];
      jaBraceDepth = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
      if (jaBraceDepth <= 0) {
        insideJa = false;
        jaEndIdx = result.length; // will be set after push
      }
    } else if (insideJa) {
      jaBraceDepth += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
      if (jaBraceDepth <= 0) {
        insideJa = false;
        jaEndIdx = result.length; // will be set after push
      }
    }
    
    // Check if _i18n block is closing
    if (i18nBraceDepth <= 0) {
      insideI18n = false;
      
      if (!currentI18nHasFr && jaEndIdx >= 0) {
        // Insert fr block after ja block (at jaEndIdx + 1 position in result)
        // But first, ensure comma after ja closing
        let jaCloseLine = result[jaEndIdx];
        if (jaCloseLine && !jaCloseLine.trimEnd().endsWith(',')) {
          result[jaEndIdx] = jaCloseLine.replace(/(\s*)$/, function(m) { return ',' + m; });
        }
        
        let frName = nameMap[currentEnName] !== undefined ? nameMap[currentEnName] : currentEnName;
        let frText = currentEnText;
        
        let blockIndent = jaIndent;
        let innerIndent = blockIndent + '    ';
        
        let frLines = [];
        frLines.push(blockIndent + '"fr": {');
        frLines.push(innerIndent + '"name": "' + frName + '",');
        
        if (currentEnChoices.length > 0) {
          frLines.push(innerIndent + '"text": "' + frText + '",');
          frLines.push(innerIndent + '"choices": [');
          currentEnChoices.forEach(function(choice, ci) {
            let frChoice = choicesMap[choice] || choice;
            let comma = ci < currentEnChoices.length - 1 ? ',' : '';
            frLines.push(innerIndent + '    "' + frChoice + '"' + comma);
          });
          frLines.push(innerIndent + ']');
        } else {
          frLines.push(innerIndent + '"text": "' + frText + '"');
        }
        frLines.push(blockIndent + '}');
        
        // Insert after jaEndIdx
        let insertPos = jaEndIdx + 1;
        for (let fi = 0; fi < frLines.length; fi++) {
          result.splice(insertPos + fi, 0, frLines[fi]);
        }
        
        frBlocksAdded++;
      }
      
      result.push(line);
      idx++;
      continue;
    }
    
    result.push(line);
    idx++;
  }
  
  function parseEnBlock(block) {
    let text = block.join('\n');
    let nameMatch = text.match(/"name"\s*:\s*"([^"]*)"/);
    let textMatch = text.match(new RegExp('"text"\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"'));
    let choicesMatch = text.match(new RegExp('"choices"\\s*:\\s*\\[([\\s\\S]*?)\\]'));

    if (nameMatch) currentEnName = nameMatch[1];
    if (textMatch) currentEnText = textMatch[1];
    if (choicesMatch) {
      let items = choicesMatch[1].match(new RegExp('"((?:[^"\\\\]|\\\\.)*)"', 'g'));
      if (items) {
        currentEnChoices = items.map(function(c) { return c.slice(1, -1); });
      }
    }
  }
  
  fs.writeFileSync(filePath, result.join('\n'), 'utf8');
  console.log('  Added ' + frBlocksAdded + ' fr blocks');
  return frBlocksAdded;
}

// Process all 4 files
var baseDir = 'd:/workspace/cupid/assets/js/scenario';
var files = ['day5_1_morning.js','day5_2_lunch.js','day5_3_afterschool.js','day5_4_night.js'];
var total = 0;
files.forEach(function(f) {
  var fp = path.join(baseDir, f);
  if (fs.existsSync(fp)) {
    total += processFile(fp);
  } else {
    console.log('NOT FOUND: ' + fp);
  }
});
console.log('\nTotal fr blocks added: ' + total);
