/**
 * Fix character flickering during dialogue sequences.
 *
 * Problem: When a character is talking and a narration node (name: "{name}" or "나")
 * appears in between, the character disappears because "character": null.
 *
 * Rule: During a dialogue sequence, narration nodes should keep the same character
 * as the surrounding dialogue.
 *
 * Algorithm:
 * 1. Load each scenario JS file and its ko i18n data
 * 2. Build a prev/next graph from the `next` chains
 * 3. For each node with character: null, check prev and next nodes
 * 4. If both prev and next have the same character base (e.g., seyoun_*), set the null to prev's character
 * 5. If prev and next have different character bases, keep null (it's a transition)
 * 6. Exclude nodes that should stay null per the rules
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SCENARIO_DIR = path.join(__dirname, 'assets', 'js', 'scenario');
const I18N_KO_DIR = path.join(__dirname, 'assets', 'js', 'i18n', 'ko');

const SCENARIO_FILES = [
    'day1_1_morning', 'day1_2_lunch', 'day1_3_afterschool', 'day1_4_night',
    'day2_1_morning', 'day2_2_lunch', 'day2_3_afterschool', 'day2_4_night',
    'day3_1_morning', 'day3_2_lunch', 'day3_3_afterschool', 'day3_4_night',
    'day4_1_morning', 'day4_2_lunch', 'day4_3_afterschool', 'day4_4_night',
    'day5_1_morning', 'day5_2_lunch', 'day5_3_afterschool', 'day5_4_night'
];

// Patterns to EXCLUDE from changes (keep null)
const EXCLUDE_NODE_PATTERNS = [
    /^start/,           // Opening sequence
    /^gate_/,           // Opening sequence
    /^name_input/,      // Name input
    /^after_kakao_/,    // Phone scene
    /^night_start/,     // Night bookends
    /^night_end/,       // Night bookends
    /^night\d+_start/,  // Night bookends (night3_start etc)
    /^night\d+_end$/,   // Night end nodes
    /^night3_nightmare_/, // Dream/nightmare sequence
    /^night3_dream_/,   // Dream sequence
    /^true_epilogue_/,  // Ending epilogues
    /^good_/,           // Good ending
    /^mayhem_/,         // Mayhem ending
    /^harem_/,          // Harem ending
    /^friend_/,         // Friend ending
    /^alone_/,          // Alone ending
    /^day5_credits/,    // Credits
    /^day5_ending_/,    // Ending routing nodes
    /^ending_start/,    // Ending start
    /^morning\d*_start/,// Morning start nodes
];

// Extract character base name (e.g., "seyoun" from "assets/images/characters/seyoun_normal.png")
function getCharacterBase(charPath) {
    if (!charPath) return null;
    const match = charPath.match(/characters\/([^_]+)/);
    return match ? match[1] : null;
}

function loadScenarioData(filename) {
    const jsPath = path.join(SCENARIO_DIR, filename + '.js');
    const jsContent = fs.readFileSync(jsPath, 'utf8');

    // Parse the scenario using vm
    const sandbox = { SCENARIO: {} };
    vm.createContext(sandbox);
    vm.runInContext(jsContent, sandbox);

    // The scenario data is stored under a numeric key (day number)
    let nodes = {};
    for (const dayKey of Object.keys(sandbox.SCENARIO)) {
        Object.assign(nodes, sandbox.SCENARIO[dayKey]);
    }

    return nodes;
}

function loadI18nData(filename) {
    const jsonPath = path.join(I18N_KO_DIR, filename + '.json');
    try {
        return JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    } catch (e) {
        return {};
    }
}

function isExcludedNode(nodeId) {
    return EXCLUDE_NODE_PATTERNS.some(pattern => pattern.test(nodeId));
}

function isNonDialogueNode(node) {
    // Branch/choice/input/credits nodes should keep null
    if (node.type === 'input' || node.type === 'credits') return true;
    if (node.choices) return true;
    if (node.branches) return true;
    return false;
}

function hasCharactersProperty(node) {
    // Some nodes use "characters" (multi-character with opacity) instead of "character"
    return !!node.characters;
}

// Build reverse map: nodeId -> list of nodeIds that point to it via `next`
function buildPrevMap(allNodes) {
    const prevMap = {};
    for (const [nodeId, node] of Object.entries(allNodes)) {
        if (node.next) {
            if (!prevMap[node.next]) prevMap[node.next] = [];
            prevMap[node.next].push(nodeId);
        }
        // Also handle choices and branches
        if (node.choices) {
            for (const choice of node.choices) {
                if (choice.next) {
                    if (!prevMap[choice.next]) prevMap[choice.next] = [];
                    prevMap[choice.next].push(nodeId);
                }
            }
        }
        if (node.branches) {
            for (const branch of node.branches) {
                if (branch.next) {
                    if (!prevMap[branch.next]) prevMap[branch.next] = [];
                    prevMap[branch.next].push(nodeId);
                }
            }
        }
    }
    return prevMap;
}

// Walk forward from a node to find the next node with a non-null character (max depth)
function findNextCharacter(nodeId, allNodes, maxDepth = 5) {
    let current = nodeId;
    for (let i = 0; i < maxDepth; i++) {
        const node = allNodes[current];
        if (!node) return null;

        let nextId = node.next;
        if (!nextId) {
            // Check branches/choices for a single non-conditional next
            if (node.branches && node.branches.length > 0) {
                // Look at all branch targets
                const chars = [];
                for (const b of node.branches) {
                    if (b.next && allNodes[b.next]) {
                        const c = allNodes[b.next].character;
                        if (c) chars.push(c);
                    }
                }
                if (chars.length > 0 && chars.every(c => getCharacterBase(c) === getCharacterBase(chars[0]))) {
                    return chars[0];
                }
            }
            return null;
        }

        const nextNode = allNodes[nextId];
        if (!nextNode) return null;

        if (nextNode.character) return nextNode.character;
        if (hasCharactersProperty(nextNode)) return null; // Different display mode, stop
        if (isNonDialogueNode(nextNode)) return null; // Choice/branch, stop

        current = nextId;
    }
    return null;
}

// Walk backward from a node to find the previous node with a non-null character (max depth)
function findPrevCharacter(nodeId, allNodes, prevMap, maxDepth = 5) {
    let current = nodeId;
    for (let i = 0; i < maxDepth; i++) {
        const prevIds = prevMap[current];
        if (!prevIds || prevIds.length === 0) return null;

        // If multiple predecessors, try to find consensus
        if (prevIds.length > 1) {
            const chars = prevIds
                .map(pid => allNodes[pid] ? allNodes[pid].character : null)
                .filter(c => c !== null && c !== undefined);
            if (chars.length > 0 && chars.every(c => getCharacterBase(c) === getCharacterBase(chars[0]))) {
                return chars[0];
            }
            return null; // Ambiguous
        }

        const prevId = prevIds[0];
        const prevNode = allNodes[prevId];
        if (!prevNode) return null;

        if (prevNode.character) return prevNode.character;
        if (hasCharactersProperty(prevNode)) return null; // Different display mode

        current = prevId;
    }
    return null;
}

// Apply changes to the actual JS file
function applyChanges(filename, changes) {
    if (changes.length === 0) return;

    const jsPath = path.join(SCENARIO_DIR, filename + '.js');
    let content = fs.readFileSync(jsPath, 'utf8');

    for (const change of changes) {
        // We need to find the node in the file and change "character": null to "character": "newChar"
        // Strategy: find the node by its key, then find the "character": null within it

        const nodeId = change.nodeId;
        const newChar = change.newCharacter;

        // Build a regex to find the node block and the character: null within it
        // The node format is: "nodeId": { ... "character": null ... }
        // We need to be careful to only change the character within this specific node

        // Find the position of the node key
        const nodeKeyPattern = new RegExp(`"${escapeRegExp(nodeId)}"\\s*:\\s*\\{`);
        const nodeMatch = nodeKeyPattern.exec(content);
        if (!nodeMatch) {
            console.error(`  ERROR: Could not find node "${nodeId}" in ${filename}.js`);
            continue;
        }

        const nodeStart = nodeMatch.index;

        // Find the closing brace of this node object
        // We need to handle nested objects (like stats, branches, etc.)
        let braceCount = 0;
        let nodeEnd = -1;
        let inString = false;
        let escapeNext = false;

        for (let i = nodeStart + nodeMatch[0].length - 1; i < content.length; i++) {
            const ch = content[i];

            if (escapeNext) {
                escapeNext = false;
                continue;
            }

            if (ch === '\\' && inString) {
                escapeNext = true;
                continue;
            }

            if (ch === '"' && !escapeNext) {
                inString = !inString;
                continue;
            }

            if (inString) continue;

            if (ch === '{') braceCount++;
            else if (ch === '}') {
                braceCount--;
                if (braceCount === 0) {
                    nodeEnd = i + 1;
                    break;
                }
            }
        }

        if (nodeEnd === -1) {
            console.error(`  ERROR: Could not find end of node "${nodeId}" in ${filename}.js`);
            continue;
        }

        const nodeContent = content.substring(nodeStart, nodeEnd);

        // Find "character": null within the node content
        const charNullPattern = /"character"\s*:\s*null/;
        const charMatch = charNullPattern.exec(nodeContent);
        if (!charMatch) {
            console.error(`  ERROR: Could not find "character": null in node "${nodeId}" in ${filename}.js`);
            continue;
        }

        // Replace it
        const absolutePos = nodeStart + charMatch.index;
        const oldStr = charMatch[0];
        const newStr = `"character": "${newChar}"`;

        content = content.substring(0, absolutePos) + newStr + content.substring(absolutePos + oldStr.length);
    }

    fs.writeFileSync(jsPath, content, 'utf8');
}

function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Main
const allChanges = {};
let totalChanges = 0;

for (const filename of SCENARIO_FILES) {
    console.log(`\nProcessing ${filename}...`);

    const nodes = loadScenarioData(filename);
    const i18n = loadI18nData(filename);
    const prevMap = buildPrevMap(nodes);

    const changes = [];

    for (const [nodeId, node] of Object.entries(nodes)) {
        // Skip if node already has a character
        if (node.character !== null) continue;

        // Skip if node uses "characters" property (multi-character with opacity)
        if (hasCharactersProperty(node)) continue;

        // Skip non-dialogue nodes
        if (isNonDialogueNode(node)) continue;

        // Skip excluded node patterns
        if (isExcludedNode(nodeId)) continue;

        // Look for prev and next characters
        const prevChar = findPrevCharacter(nodeId, nodes, prevMap);
        const nextChar = findNextCharacter(nodeId, nodes);

        if (!prevChar && !nextChar) {
            // Pure narration sequence, keep null
            continue;
        }

        let newCharacter = null;

        if (prevChar && nextChar) {
            const prevBase = getCharacterBase(prevChar);
            const nextBase = getCharacterBase(nextChar);

            if (prevBase === nextBase) {
                // Same character on both sides - use the previous character's exact sprite
                newCharacter = prevChar;
            } else {
                // Different characters - this is a transition, keep null
                continue;
            }
        } else if (prevChar && !nextChar) {
            // Character before but nothing after (end of sequence or branch)
            // Keep the character to avoid flicker at the end of a dialogue
            newCharacter = prevChar;
        } else if (!prevChar && nextChar) {
            // No character before, character after - this is an entrance, keep null for dramatic effect
            // BUT: if the node is clearly part of a character sequence (e.g., after_miss_*_1), set it
            // For safety, keep null here - let the forward walk handle it
            continue;
        }

        if (newCharacter) {
            // Double-check: if the i18n name is a character name (not {name} or narration),
            // make sure the character matches
            const i18nNode = i18n[nodeId];
            if (i18nNode) {
                const name = i18nNode.name;
                // If the speaking character's name doesn't match the sprite, be careful
                // But narration ({name}, 나) should show whatever character is around
                if (name && name !== '{name}' && name !== '나' && name !== '시스템') {
                    // This is a character speaking - the sprite should match
                    // e.g., if name is "서연" but newCharacter is "dain_*", skip
                    const charNameMap = {
                        '서연': 'seyoun',
                        '유나': 'yuna',
                        '다인': 'dain',
                        '담임': 'teacher',
                        '보건': 'nurse',
                        '민수': null, // no sprite
                    };
                    const expectedBase = charNameMap[name];
                    if (expectedBase && getCharacterBase(newCharacter) !== expectedBase) {
                        // Mismatch! This node has a different speaker than the surrounding character
                        // This shouldn't happen normally but let's be safe
                        continue;
                    }
                }
            }

            changes.push({
                nodeId,
                newCharacter,
                prevChar,
                nextChar,
                i18nName: i18n[nodeId] ? i18n[nodeId].name : '(unknown)'
            });
        }
    }

    if (changes.length > 0) {
        console.log(`  Found ${changes.length} nodes to fix:`);
        for (const c of changes) {
            console.log(`    ${c.nodeId}: null -> ${c.newCharacter} (name: ${c.i18nName})`);
        }
        allChanges[filename] = changes;
        totalChanges += changes.length;
    } else {
        console.log(`  No changes needed.`);
    }
}

console.log(`\n${'='.repeat(60)}`);
console.log(`Total changes: ${totalChanges}`);
console.log(`${'='.repeat(60)}\n`);

// Apply all changes
if (totalChanges > 0) {
    console.log('Applying changes...\n');
    for (const [filename, changes] of Object.entries(allChanges)) {
        console.log(`  Writing ${filename}.js (${changes.length} changes)`);
        applyChanges(filename, changes);
    }
    console.log('\nDone! All changes applied.');
} else {
    console.log('No changes to apply.');
}
