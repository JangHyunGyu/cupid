/**
 * Automated fix script for Day 5 scenario files.
 * FIX 1: Set character to null for all shared/common nodes
 * FIX 2: Set background to null for bed/morning shared nodes  
 * FIX 8: Remove stats from corridor2
 */
const fs = require('fs');

const morningSharedNodes = [
    'day5_morning_ready', 'day5_morning_closet', 'day5_outfit_choice',
    'day5_outfit_casual', 'day5_outfit_special', 'day5_breakfast',
    'day5_outfit_check', 'day5_morning_items', 'day5_morning_depart',
    'day5_arrive_start', 'day5_arrive_nostalgia', 'day5_arrive_firstday',
    'day5_arrive_now', 'day5_walk_couple_common', 'day5_walk_couple_common2'
];

const lunchSharedNodes = [
    'day5_walk_together', 'day5_walk_enter', 'day5_corridor1', 'day5_corridor2',
    'day5_classroom_enter', 'day5_classroom1', 'day5_classroom2', 'day5_classroom3',
    'day5_memory_spot_suggest', 'day5_memory_common', 'day5_memory_common2',
    'day5_rooftop_suggest', 'day5_rooftop_stairs1', 'day5_rooftop_stairs2',
    'day5_rooftop_door', 'day5_rooftop_view1', 'day5_rooftop_view2',
    'day5_rooftop_lean', 'day5_rooftop_silence',
    'day5_rooftop_future_talk', 'day5_rooftop_feeling1', 'day5_rooftop_feeling2',
    'day5_lunch_suggest', 'day5_lunch_setup', 'day5_lunch_sit',
    'day5_lunch_eat1', 'day5_lunch_talk1', 'day5_lunch_talk2',
    'day5_lunch_talk3', 'day5_lunch_talk4',
    'day5_lunch_after', 'day5_lunch_cleanup',
    'day5_pre_afternoon1', 'day5_pre_afternoon2', 'day5_pre_afternoon3', 'day5_pre_afternoon4'
];

const afterschoolSharedNodes = [
    'day5_true_kiss_buildup', 'day5_true_kiss_2', 'day5_true_kiss_3',
    'day5_true_kiss_4', 'day5_true_kiss_5', 'day5_true_kiss_6', 'day5_true_kiss_after',
    'day5_bed_common_1', 'day5_bed_common_2', 'day5_bed_common_3',
    'day5_true_morning', 'day5_true_morning_2', 'day5_true_morning_3', 'day5_true_final',
    'day5_good_final', 'day5_friend_final'
];

const bedBgNullNodes = [
    'day5_bed_common_1', 'day5_bed_common_2', 'day5_bed_common_3',
    'day5_true_morning', 'day5_true_morning_2', 'day5_true_morning_3', 'day5_true_final'
];

const statsRemoveNodes = ['day5_corridor2'];

function processFile(filePath, charNullNodes, bgNullNodes, statsRemoveNodeList) {
    let lines = fs.readFileSync(filePath, 'utf8').split('\n');
    let currentNode = null;
    let changes = 0;

    for (let i = 0; i < lines.length; i++) {
        const nodeMatch = lines[i].match(/^\s*"(day5_[^"]+)":\s*\{/);
        if (nodeMatch) {
            currentNode = nodeMatch[1];
        }

        if (currentNode && charNullNodes.includes(currentNode)) {
            if (/\s*character:\s*"assets\/images\/characters\/[^"]+\.png"/.test(lines[i])) {
                lines[i] = lines[i].replace(
                    /character:\s*"assets\/images\/characters\/[^"]+\.png"/,
                    'character: null'
                );
                changes++;
            }
        }

        if (currentNode && bgNullNodes && bgNullNodes.includes(currentNode)) {
            if (/\s*background:\s*"assets\/images\/background\/[^"]+\.(png|jpg)"/.test(lines[i])) {
                lines[i] = lines[i].replace(
                    /background:\s*"assets\/images\/background\/[^"]+\.(png|jpg)"/,
                    'background: null'
                );
                changes++;
            }
        }

        if (currentNode && statsRemoveNodeList && statsRemoveNodeList.includes(currentNode)) {
            if (/^\s*stats:\s*\{.*\},?\s*$/.test(lines[i])) {
                lines.splice(i, 1);
                i--;
                changes++;
            }
        }
    }

    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    console.log(`${filePath}: ${changes} changes applied`);
}

const base = 'c:/workspace/cupid/assets/js/scenario/';

processFile(base + 'ko_day5_1_morning.js', morningSharedNodes, [], []);
processFile(base + 'en_day5_1_morning.js', morningSharedNodes, [], []);
processFile(base + 'ko_day5_2_lunch.js', lunchSharedNodes, [], statsRemoveNodes);
processFile(base + 'en_day5_2_lunch.js', lunchSharedNodes, [], statsRemoveNodes);
processFile(base + 'ko_day5_3_afterschool.js', afterschoolSharedNodes, bedBgNullNodes, []);
processFile(base + 'en_day5_3_afterschool.js', afterschoolSharedNodes, bedBgNullNodes, []);

console.log('\nFIX 1 (character→null), FIX 2 (background→null), FIX 8 (stats removal) complete.');
