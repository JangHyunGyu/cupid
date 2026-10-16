const fs = require('fs');

const files = [
    ['day2_2_lunch', 'lunch2_seo_end'],
    ['day2_4_night', 'night2_msg_2'],
    ['day2_4_night', 'night2_msg_3'],
    ['day2_4_night', 'night2_msg_4'],
    ['day2_4_night', 'night2_msg_5'],
    ['day2_4_night', 'night2_msg_6'],
    ['day4_4_night', 'wall_seo_2'],
];

files.forEach(([file, node]) => {
    const content = fs.readFileSync('assets/js/scenario/' + file + '.js', 'utf8');
    const defRegex = new RegExp('"' + node + '"\\s*:\\s*\\{');
    const refRegex = new RegExp('"next"\\s*:\\s*"' + node + '"');
    const branchRegex = new RegExp('"' + node + '"');
    const isDefined = defRegex.test(content);
    const isReferenced = refRegex.test(content);
    console.log(file + '/' + node + ': defined=' + isDefined + ', referenced=' + isReferenced);
});
