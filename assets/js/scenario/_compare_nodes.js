const fs = require('fs');
function getNodes(file) {
  const content = fs.readFileSync(file, 'utf8');
  const re = /"([a-z0-9_]+)"\s*:\s*\{/g;
  const nodes = [];
  let m;
  while ((m = re.exec(content)) !== null) nodes.push(m[1]);
  return nodes;
}

function getStructure(file) {
  const content = fs.readFileSync(file, 'utf8');
  // Extract each node block and its structural properties
  const result = {};
  const re = /"([a-z0-9_]+)"\s*:\s*\{/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    const nodeId = m[1];
    const startIdx = m.index + m[0].length;
    // Find balanced closing brace
    let depth = 1;
    let i = startIdx;
    while (i < content.length && depth > 0) {
      if (content[i] === '{') depth++;
      if (content[i] === '}') depth--;
      i++;
    }
    const block = content.substring(startIdx, i - 1);
    
    const node = {};
    // Extract key structural properties
    const nextMatch = block.match(/\bnext\s*:\s*"([^"]+)"/);
    if (nextMatch) node.next = nextMatch[1];
    
    const typeMatch = block.match(/\btype\s*:\s*"([^"]+)"/);
    if (typeMatch) node.type = typeMatch[1];
    
    // Count choices
    const choicesMatch = block.match(/choices\s*:\s*\[/);
    if (choicesMatch) {
      const choicesStart = block.indexOf('choices');
      const choicesBlock = block.substring(choicesStart);
      const choiceItems = choicesBlock.match(/\{\s*text\s*:/g);
      node.choiceCount = choiceItems ? choiceItems.length : 0;
      
      // Extract choice destinations
      const choiceNexts = [];
      const cnRe = /next\s*:\s*"([^"]+)"/g;
      let cn;
      const cBlock = choicesBlock.substring(0, choicesBlock.indexOf(']'));
      while ((cn = cnRe.exec(cBlock)) !== null) choiceNexts.push(cn[1]);
      node.choiceNexts = choiceNexts;
      
      // Check for stats in choices
      const choiceStats = (choicesBlock.substring(0, choicesBlock.indexOf(']')).match(/stats\s*:/g) || []).length;
      if (choiceStats) node.choiceStatsCount = choiceStats;
      
      // Check for setFlags in choices
      const choiceFlags = (choicesBlock.substring(0, choicesBlock.indexOf(']')).match(/setFlags\s*:/g) || []).length;
      if (choiceFlags) node.choiceFlagsCount = choiceFlags;
    }
    
    // Check for branches
    const branchesMatch = block.match(/branches\s*:\s*\[/);
    if (branchesMatch) {
      const bStart = block.indexOf('branches');
      const bBlock = block.substring(bStart, block.indexOf(']', bStart));
      const bNexts = [];
      const bnRe = /next\s*:\s*"([^"]+)"/g;
      let bn;
      while ((bn = bnRe.exec(bBlock)) !== null) bNexts.push(bn[1]);
      node.branches = bNexts;
      
      const bConditions = [];
      const bcRe = /condition\s*:\s*"([^"]+)"/g;
      let bc;
      while ((bc = bcRe.exec(bBlock)) !== null) bConditions.push(bc[1]);
      if (bConditions.length) node.branchConditions = bConditions;
    }
    
    // Check for affinityBranches
    const abMatch = block.match(/affinityBranches\s*:\s*\[/);
    if (abMatch) {
      const abStart = block.indexOf('affinityBranches');
      const abBlock = block.substring(abStart, block.indexOf(']', abStart));
      const abNexts = [];
      const abRe = /next\s*:\s*"([^"]+)"/g;
      let ab;
      while ((ab = abRe.exec(abBlock)) !== null) abNexts.push(ab[1]);
      node.affinityBranches = abNexts;
      
      const minAffs = [];
      const maRe = /minAffinity\s*:\s*(-?\d+)/g;
      let ma;
      while ((ma = maRe.exec(abBlock)) !== null) minAffs.push(parseInt(ma[1]));
      if (minAffs.length) node.minAffinities = minAffs;
    }
    
    // Check for stats at node level
    const statsMatch = block.match(/^\s*stats\s*:/m);
    if (statsMatch) {
      const sBlock = block.substring(block.indexOf('stats'));
      const charMatch = sBlock.match(/(\w+)\s*:\s*\{\s*affinity\s*:\s*(-?\d+)/);
      if (charMatch) node.stats = { [charMatch[1]]: parseInt(charMatch[2]) };
    }
    
    // Check for setFlag/setFlags at node level
    const sfMatch = block.match(/setFlag\s*:\s*"([^"]+)"/);
    if (sfMatch) node.setFlag = sfMatch[1];
    
    // Check for special props
    if (block.includes('sunset: true')) node.sunset = true;
    if (block.includes('night: true')) node.night = true;
    if (block.includes('changeDay')) node.changeDay = true;
    if (block.includes('selectByHighestAffinity')) node.selectByHighestAffinity = true;
    if (block.includes('affinityChar')) {
      const acMatch = block.match(/affinityChar\s*:\s*"([^"]+)"/);
      if (acMatch) node.affinityChar = acMatch[1];
    }
    if (block.includes('condition:') && !block.includes('branches')) {
      const condMatch = block.match(/\bcondition\s*:\s*"([^"]+)"/);
      if (condMatch) node.condition = condMatch[1];
    }
    if (block.includes('excludeCondition')) {
      const ecMatch = block.match(/excludeCondition\s*:\s*"([^"]+)"/);
      if (ecMatch) node.excludeCondition = ecMatch[1];
    }
    
    result[nodeId] = node;
  }
  return result;
}

const pairs = [
  ['ko_day1_1_morning.js','en_day1_1_morning.js'],
  ['ko_day1_2_lunch.js','en_day1_2_lunch.js'],
  ['ko_day1_3_afterschool.js','en_day1_3_afterschool.js'],
  ['ko_day1_4_night.js','en_day1_4_night.js']
];

pairs.forEach(([ko, en]) => {
  console.log('\n========================================');
  console.log(`${ko} vs ${en}`);
  console.log('========================================');
  
  const koNodes = getNodes(ko);
  const enNodes = getNodes(en);
  const koSet = new Set(koNodes);
  const enSet = new Set(enNodes);
  
  const onlyKo = koNodes.filter(n => !enSet.has(n));
  const onlyEn = enNodes.filter(n => !koSet.has(n));
  
  console.log(`KO nodes: ${koNodes.length}, EN nodes: ${enNodes.length}`);
  if (onlyKo.length) console.log('Only in KO:', onlyKo);
  if (onlyEn.length) console.log('Only in EN:', onlyEn);
  if (!onlyKo.length && !onlyEn.length) console.log('Node IDs: ALL MATCH');
  
  // Now compare structure of matching nodes
  const koStruct = getStructure(ko);
  const enStruct = getStructure(en);
  
  let diffs = 0;
  const commonNodes = koNodes.filter(n => enSet.has(n));
  commonNodes.forEach(nodeId => {
    const k = koStruct[nodeId];
    const e = enStruct[nodeId];
    if (!k || !e) return;
    
    const differences = [];
    
    if (k.next !== e.next) differences.push(`next: KO="${k.next}" vs EN="${e.next}"`);
    if (k.type !== e.type) differences.push(`type: KO="${k.type}" vs EN="${e.type}"`);
    if (k.choiceCount !== e.choiceCount) differences.push(`choiceCount: KO=${k.choiceCount} vs EN=${e.choiceCount}`);
    if (JSON.stringify(k.choiceNexts) !== JSON.stringify(e.choiceNexts)) differences.push(`choiceNexts: KO=${JSON.stringify(k.choiceNexts)} vs EN=${JSON.stringify(e.choiceNexts)}`);
    if (JSON.stringify(k.branches) !== JSON.stringify(e.branches)) differences.push(`branches: KO=${JSON.stringify(k.branches)} vs EN=${JSON.stringify(e.branches)}`);
    if (JSON.stringify(k.affinityBranches) !== JSON.stringify(e.affinityBranches)) differences.push(`affinityBranches: KO=${JSON.stringify(k.affinityBranches)} vs EN=${JSON.stringify(e.affinityBranches)}`);
    if (JSON.stringify(k.minAffinities) !== JSON.stringify(e.minAffinities)) differences.push(`minAffinities: KO=${JSON.stringify(k.minAffinities)} vs EN=${JSON.stringify(e.minAffinities)}`);
    if (JSON.stringify(k.stats) !== JSON.stringify(e.stats)) differences.push(`stats: KO=${JSON.stringify(k.stats)} vs EN=${JSON.stringify(e.stats)}`);
    if (k.setFlag !== e.setFlag) differences.push(`setFlag: KO="${k.setFlag}" vs EN="${e.setFlag}"`);
    if (k.choiceStatsCount !== e.choiceStatsCount) differences.push(`choiceStatsCount: KO=${k.choiceStatsCount} vs EN=${e.choiceStatsCount}`);
    if (k.choiceFlagsCount !== e.choiceFlagsCount) differences.push(`choiceFlagsCount: KO=${k.choiceFlagsCount} vs EN=${e.choiceFlagsCount}`);
    if (k.affinityChar !== e.affinityChar) differences.push(`affinityChar: KO="${k.affinityChar}" vs EN="${e.affinityChar}"`);
    if (k.selectByHighestAffinity !== e.selectByHighestAffinity) differences.push(`selectByHighestAffinity diff`);
    if (k.changeDay !== e.changeDay) differences.push(`changeDay diff`);
    if (JSON.stringify(k.branchConditions) !== JSON.stringify(e.branchConditions)) differences.push(`branchConditions: KO=${JSON.stringify(k.branchConditions)} vs EN=${JSON.stringify(e.branchConditions)}`);
    if (k.condition !== e.condition) differences.push(`condition: KO="${k.condition}" vs EN="${e.condition}"`);
    if (k.excludeCondition !== e.excludeCondition) differences.push(`excludeCondition: KO="${k.excludeCondition}" vs EN="${e.excludeCondition}"`);
    
    if (differences.length) {
      console.log(`\n  DIFF in "${nodeId}":`);
      differences.forEach(d => console.log(`    - ${d}`));
      diffs++;
    }
  });
  
  if (diffs === 0) console.log('\nStructural comparison: ALL IDENTICAL');
  else console.log(`\nTotal nodes with differences: ${diffs}`);
});
