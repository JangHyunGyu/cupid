const { execSync } = require('child_process');
const fs = require('fs');

function getChangedNodes(file, commitRange) {
    const diff = execSync(`git diff ${commitRange} ${file}`).toString();
    const lines = diff.split('\n');
    let currentNode = '';
    const changedNodes = [];
    for (const line of lines) {
        const matchNode = line.match(/^ {4}\"([^\"]+)\": \{/);
        if (matchNode) {
            currentNode = matchNode[1];
        }
        if (line.match(/^\+ {8}text: /)) {
            if (currentNode && !changedNodes.includes(currentNode)) {
                changedNodes.push(currentNode);
            }
        }
    }
    return changedNodes;
}

const day5Nodes = getChangedNodes('assets/js/scenario/ko_day5_4_night.js', 'HEAD~1 HEAD');
const day4Nodes = getChangedNodes('assets/js/scenario/ko_day4_4_night.js', 'HEAD~2 HEAD~1');

console.log('Day 5 Nodes:', day5Nodes);
console.log('Day 4 Nodes:', day4Nodes);
