/**
 * ============================================================================
 * CUPID - day4_4_night
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[4]) SCENARIO[4] = {};

(function() {
const _scenes = {
    "day4_night_start": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "bgm": "night2.mp3",
        "next": "day4_night_branch"
    },
    "day4_night_branch": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "branches": [
            { "condition": "day4_waited", "next": "day4_night_regret" },
            { "condition": "route_seoyeon", "next": "wall_seo_1" },
            { "condition": "route_dain", "next": "wall_dain_1" },
            { "condition": "route_yuna", "next": "wall_yuna_1" },
            { "condition": "homeroom_route_unlocked", "next": "night_homeroom_msg_1" },
            { "condition": "nurse_route_unlocked", "next": "night_nurse_msg_1" },
            { "next": "day4_night_reflect" }
        ]
    },
    "wall_seo_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "bgm": "night2.mp3",
        "affinityChar": "Seoyeon",
        "affinityBranches": [{"minAffinity":60,"next":"wall_seo_pre_high_1"},{"minAffinity":-100,"next":"wall_seo_pre_low_1"}]
    },
    "wall_seo_pre_high_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "wall_seo_pre_high_2"
    },
    "wall_seo_pre_high_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_sad.png","opacity":0.35}},
        "next": "wall_seo_to_park"
    },
    "wall_seo_pre_low_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "wall_seo_pre_low_1b"
    },
    "wall_seo_pre_low_1b": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "wall_seo_pre_low_2"
    },
    "wall_seo_pre_low_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "wall_seo_2"
    },
    "wall_seo_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "wall_seo_to_park"
    },
    "wall_seo_to_park": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "wall_seo_3"
    },
    "wall_seo_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "wall_seo_4"
    },
    "wall_seo_4": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "wall_seo_5"
    },
    "wall_seo_5": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "wall_seo_6"
    },
    "wall_seo_6": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "wall_seo_7"
    },
    "wall_seo_7": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "wall_seo_7_ins"
    },
    "wall_seo_8": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "wall_seo_9"
    },
    "wall_seo_9": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "wall_seo_9_ins"
    },
    "wall_seo_10": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "wall_seo_11"
    },
    "wall_seo_11": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_11_ins"
    },
    "wall_seo_12": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_13"
    },
    "wall_seo_13": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_14"
    },
    "wall_seo_14": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_14_ins"
    },
    "wall_seo_15": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_hug_choice"
    },
    "wall_seo_hug_choice": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "choices": [
            { "next": "wall_seo_hug_1", "stats": {"Seoyeon":{"affinity":14}} },
            { "next": "wall_seo_pinky_1", "stats": {"Seoyeon":{"affinity":14}} }
        ]
    },
    "wall_seo_hug_1": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_hug_2"
    },
    "wall_seo_hug_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_hug_2_ins"
    },
    "wall_seo_hug_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_line_choice"
    },
    "wall_seo_pinky_1": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_pinky_2"
    },
    "wall_seo_pinky_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_pinky_3"
    },
    "wall_seo_pinky_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_pinky_4"
    },
    "wall_seo_pinky_4": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_pinky_5"
    },
    "wall_seo_pinky_5": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_pinky_5_ins"
    },
    "wall_seo_line_choice": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "choices": [
            { "next": "wall_seo_line_react_1", "stats": {"Seoyeon":{"affinity":10}} },
            { "next": "wall_seo_line_react_2", "stats": {"Seoyeon":{"affinity":10}} },
            { "next": "wall_seo_line_react_3", "stats": {"Seoyeon":{"affinity":6}} }
        ]
    },
    "wall_seo_line_react_1": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_after_line"
    },
    "wall_seo_line_react_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_after_line"
    },
    "wall_seo_line_react_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_line_react_3_ins"
    },
    "wall_seo_after_line": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "wall_seo_after_line_2"
    },
    "wall_seo_after_line_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "wall_seo_after_line_3"
    },
    "wall_seo_after_line_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "wall_seo_after_line_4"
    },
    "wall_seo_after_line_4": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "wall_seo_after_line_4_ins"
    },
    "wall_seo_after_line_5": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "setFlags": ["day4_seoyeon_wall_broken"],
        "next": "wall_seo_mention_1"
    },
    "wall_seo_mention_1": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "wall_seo_mention_2"
    },
    "wall_seo_mention_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "wall_seo_mention_3"
    },
    "wall_seo_mention_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "wall_seo_skin_check"
    },
    "wall_seo_skin_check": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "affinityChar": "Seoyeon",
        "affinityBranches": [{"minAffinity":70,"next":"wall_seo_skin70_1"},{"minAffinity":60,"next":"wall_seo_skin60_1"},{"minAffinity":-100,"next":"wall_seo_glimpse_1"}]
    },
    "wall_seo_skin70_1": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "wall_seo_skin70_2"
    },
    "wall_seo_skin70_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "wall_seo_skin70_3"
    },
    "wall_seo_skin70_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "setFlags": ["day4_skinship_seoyeon_70"],
        "next": "wall_seo_glimpse_1"
    },
    "wall_seo_skin60_1": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "wall_seo_skin60_2"
    },
    "wall_seo_skin60_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "setFlags": ["day4_skinship_seoyeon_60"],
        "next": "wall_seo_glimpse_1"
    },
    "wall_seo_glimpse_1": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "wall_seo_glimpse_1_ins"
    },
    "wall_seo_glimpse_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_seo_glimpse_3"
    },
    "wall_seo_glimpse_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_seo_glimpse_4"
    },
    "wall_seo_glimpse_4": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "day4_final"
    },
    "wall_dain_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "bgm": "night2.mp3",
        "affinityChar": "Dain",
        "affinityBranches": [{"minAffinity":60,"next":"wall_dain_pre_high_1"},{"minAffinity":-100,"next":"wall_dain_pre_low_1"}]
    },
    "wall_dain_pre_high_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "wall_dain_pre_high_2"
    },
    "wall_dain_pre_high_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_sad.png","opacity":0.35}},
        "next": "wall_dain_3"
    },
    "wall_dain_pre_low_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "wall_dain_pre_low_2"
    },
    "wall_dain_pre_low_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_laugh.png","opacity":0.35}},
        "next": "wall_dain_2"
    },
    "wall_dain_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "wall_dain_2_ins"
    },
    "wall_dain_3": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "wall_dain_4"
    },
    "wall_dain_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "wall_dain_5"
    },
    "wall_dain_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "wall_dain_6"
    },
    "wall_dain_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "wall_dain_7"
    },
    "wall_dain_7": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "wall_dain_7_ins"
    },
    "wall_dain_8": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "wall_dain_8_ins"
    },
    "wall_dain_9": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_10"
    },
    "wall_dain_10": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_11"
    },
    "wall_dain_11": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "next": "wall_dain_12"
    },
    "wall_dain_12": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_12_ins"
    },
    "wall_dain_13": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_13_ins"
    },
    "wall_dain_14": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_14_ins"
    },
    "wall_dain_15": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_16"
    },
    "wall_dain_16": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_16_ins"
    },
    "wall_dain_17": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_18"
    },
    "wall_dain_18": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_18_ins"
    },
    "wall_dain_19": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_19_ins"
    },
    "wall_dain_20": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_20_ins"
    },
    "wall_dain_21": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_22"
    },
    "wall_dain_22": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_22_ins"
    },
    "wall_dain_choice": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "choices": [
            { "next": "wall_dain_newdream_1", "stats": {"Dain":{"affinity":10}} },
            { "next": "wall_dain_cry_1", "stats": {"Dain":{"affinity":17}} },
            { "next": "wall_dain_lastspike_1", "stats": {"Dain":{"affinity":12}} }
        ]
    },
    "wall_dain_newdream_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_newdream_2"
    },
    "wall_dain_newdream_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_newdream_2_ins"
    },
    "wall_dain_newdream_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_newdream_4"
    },
    "wall_dain_newdream_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "wall_dain_newdream_5"
    },
    "wall_dain_newdream_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "wall_dain_newdream_6"
    },
    "wall_dain_newdream_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_newdream_7"
    },
    "wall_dain_newdream_7": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "wall_dain_newdream_8"
    },
    "wall_dain_newdream_8": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "wall_dain_farewell_1"
    },
    "wall_dain_cry_1": {
        "background": "assets/images/background/dain_depression_event1.png",
        "character": null,
        "next": "wall_dain_cry_2"
    },
    "wall_dain_cry_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_cry_3"
    },
    "wall_dain_cry_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_cry_4"
    },
    "wall_dain_cry_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_cry_5"
    },
    "wall_dain_cry_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_cry_6"
    },
    "wall_dain_cry_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_cry_6_ins"
    },
    "wall_dain_lastspike_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_lastspike_2"
    },
    "wall_dain_lastspike_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "wall_dain_lastspike_3"
    },
    "wall_dain_lastspike_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "wall_dain_lastspike_3_ins"
    },
    "wall_dain_lastspike_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_lastspike_4_ins"
    },
    "wall_dain_lastspike_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_lastspike_6"
    },
    "wall_dain_lastspike_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_farewell_1"
    },
    "wall_dain_farewell_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "setFlags": ["day4_dain_wall_broken"],
        "next": "wall_dain_farewell_2"
    },
    "wall_dain_farewell_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "wall_dain_mention_1"
    },
    "wall_dain_mention_1": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_mention_2"
    },
    "wall_dain_mention_2": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_mention_3"
    },
    "wall_dain_mention_3": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "wall_dain_skin_check"
    },
    "wall_dain_skin_check": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_normal.png",
        "affinityChar": "Dain",
        "affinityBranches": [{"minAffinity":70,"next":"wall_dain_skin70_1"},{"minAffinity":60,"next":"wall_dain_skin60_1"},{"minAffinity":-100,"next":"wall_dain_glimpse_1"}]
    },
    "wall_dain_skin70_1": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "wall_dain_skin70_2"
    },
    "wall_dain_skin70_2": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "wall_dain_skin70_3"
    },
    "wall_dain_skin70_3": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_shy.png",
        "setFlags": ["day4_skinship_dain_70"],
        "next": "wall_dain_glimpse_1"
    },
    "wall_dain_skin60_1": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "wall_dain_skin60_2"
    },
    "wall_dain_skin60_2": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_shy.png",
        "setFlags": ["day4_skinship_dain_60"],
        "next": "wall_dain_glimpse_1"
    },
    "wall_dain_glimpse_1": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "wall_dain_glimpse_2"
    },
    "wall_dain_glimpse_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "wall_dain_glimpse_3"
    },
    "wall_dain_glimpse_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "wall_dain_glimpse_4"
    },
    "wall_dain_glimpse_4": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "wall_dain_glimpse_4_ins"
    },
    "wall_yuna_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "bgm": "night2.mp3",
        "affinityChar": "Yuna",
        "affinityBranches": [{"minAffinity":60,"next":"wall_yuna_pre_high_1"},{"minAffinity":-100,"next":"wall_yuna_pre_low_1"}]
    },
    "wall_yuna_pre_high_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "wall_yuna_pre_high_2"
    },
    "wall_yuna_pre_high_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "wall_yuna_3"
    },
    "wall_yuna_pre_low_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "wall_yuna_pre_low_2"
    },
    "wall_yuna_pre_low_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "wall_yuna_2"
    },
    "wall_yuna_2": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "wall_yuna_3"
    },
    "wall_yuna_3": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "wall_yuna_4"
    },
    "wall_yuna_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "wall_yuna_5"
    },
    "wall_yuna_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "wall_yuna_6"
    },
    "wall_yuna_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "wall_yuna_7"
    },
    "wall_yuna_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "wall_yuna_8"
    },
    "wall_yuna_8": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "wall_yuna_9"
    },
    "wall_yuna_9": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "wall_yuna_9_ins"
    },
    "wall_yuna_10": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "wall_yuna_11"
    },
    "wall_yuna_11": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "wall_yuna_12"
    },
    "wall_yuna_12": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "wall_yuna_13"
    },
    "wall_yuna_13": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "wall_yuna_14"
    },
    "wall_yuna_14": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "wall_yuna_14_ins"
    },
    "wall_yuna_15": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "wall_yuna_16"
    },
    "wall_yuna_16": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "wall_yuna_16_ins"
    },
    "wall_yuna_choice": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "choices": [
            { "next": "wall_yuna_moved_1", "stats": {"Yuna":{"affinity":14}} },
            { "next": "wall_yuna_sub_1", "stats": {"Yuna":{"affinity":10}} },
            { "next": "wall_yuna_reject_1", "stats": {"Yuna":{"affinity":-10}} }
        ]
    },
    "wall_yuna_moved_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "wall_yuna_moved_2"
    },
    "wall_yuna_moved_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "wall_yuna_moved_3"
    },
    "wall_yuna_moved_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "wall_yuna_moved_4"
    },
    "wall_yuna_moved_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "wall_yuna_moved_5"
    },
    "wall_yuna_moved_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "setFlags": ["day4_yuna_wall_broken"],
        "next": "wall_yuna_moved_5_ins"
    },
    "wall_yuna_mention_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "wall_yuna_mention_2"
    },
    "wall_yuna_mention_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "wall_yuna_mention_3"
    },
    "wall_yuna_mention_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "wall_yuna_skin_check"
    },
    "wall_yuna_skin_check": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "affinityChar": "Yuna",
        "affinityBranches": [{"minAffinity":70,"next":"wall_yuna_skin70_1"},{"minAffinity":60,"next":"wall_yuna_skin60_1"},{"minAffinity":-100,"next":"wall_yuna_glimpse_1"}]
    },
    "wall_yuna_skin70_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "wall_yuna_skin70_2"
    },
    "wall_yuna_skin70_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "wall_yuna_skin70_3"
    },
    "wall_yuna_skin70_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "setFlags": ["day4_skinship_yuna_70"],
        "next": "wall_yuna_glimpse_1"
    },
    "wall_yuna_skin60_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "wall_yuna_skin60_2"
    },
    "wall_yuna_skin60_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "setFlags": ["day4_skinship_yuna_60"],
        "next": "wall_yuna_glimpse_1"
    },
    "wall_yuna_sub_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "wall_yuna_sub_2"
    },
    "wall_yuna_sub_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "setFlags": ["day4_yuna_wall_broken"],
        "next": "wall_yuna_glimpse_1"
    },
    "wall_yuna_reject_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "wall_yuna_reject_1_ins"
    },
    "wall_yuna_reject_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "wall_yuna_reject_3"
    },
    "wall_yuna_reject_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "wall_yuna_reject_4"
    },
    "wall_yuna_reject_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "wall_yuna_glimpse_1"
    },
    "wall_yuna_glimpse_1": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "wall_yuna_glimpse_2"
    },
    "wall_yuna_glimpse_2": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "wall_yuna_glimpse_3"
    },
    "wall_yuna_glimpse_3": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "wall_yuna_glimpse_3_ins"
    },
    "wall_yuna_glimpse_4": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day4_final"
    },
    "day4_night_regret": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "day4_night_regret_2"
    },
    "day4_night_regret_2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "day4_night_regret_msg_branch"
    },
    "day4_night_regret_msg_branch": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "branches": [
            { "condition": "route_seoyeon", "next": "day4_night_regret_msg_seo" },
            { "condition": "route_dain", "next": "day4_night_regret_msg_dain" },
            { "condition": "route_yuna", "next": "day4_night_regret_msg_yuna" },
            { "next": "day4_night_regret_msg" }
        ]
    },
    "day4_night_regret_msg_seo": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "day4_night_regret_reply"
    },
    "day4_night_regret_msg_dain": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "day4_night_regret_reply"
    },
    "day4_night_regret_msg_yuna": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "day4_night_regret_reply"
    },
    "day4_night_regret_msg": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "day4_night_regret_reply"
    },
    "day4_night_regret_reply": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "day4_night_sleep"
    },
    "night_homeroom_msg_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/teacher_normal.png","opacity":0.35}},
        "next": "night_homeroom_msg_2"
    },
    "night_homeroom_msg_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/teacher_normal.png","opacity":0.35}},
        "next": "night_homeroom_msg_3"
    },
    "night_homeroom_msg_3": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/teacher_normal.png","opacity":0.35}},
        "next": "day4_night_sleep"
    },
    "night_nurse_msg_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/nurse_normal.png","opacity":0.35}},
        "next": "night_nurse_msg_2"
    },
    "night_nurse_msg_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/nurse_normal.png","opacity":0.35}},
        "next": "night_nurse_msg_3"
    },
    "night_nurse_msg_3": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/nurse_normal.png","opacity":0.35}},
        "next": "night_nurse_msg_4"
    },
    "night_nurse_msg_4": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/nurse_normal.png","opacity":0.35}},
        "next": "day4_night_sleep"
    },
    "day4_night_reflect": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "day4_night_sleep"
    },
    "day4_night_sleep": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "day4_final"
    },
    "day4_final": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "morning5_start"
    },
    "wall_seo_7_ins": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "wall_seo_8"
    },
    "wall_seo_9_ins": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "wall_seo_9_ins2"
    },
    "wall_seo_9_ins2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "wall_seo_9_ins3"
    },
    "wall_seo_9_ins3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "wall_seo_10"
    },
    "wall_seo_11_ins": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_12"
    },
    "wall_seo_14_ins": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "wall_seo_14_ins2"
    },
    "wall_seo_14_ins2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_14_ins3"
    },
    "wall_seo_14_ins3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_14_ins4"
    },
    "wall_seo_14_ins4": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_15"
    },
    "wall_seo_hug_2_ins": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_hug_2_ins2"
    },
    "wall_seo_hug_2_ins2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_hug_3"
    },
    "wall_seo_pinky_5_ins": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_line_choice"
    },
    "wall_seo_line_react_3_ins": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "wall_seo_after_line"
    },
    "wall_seo_after_line_4_ins": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "wall_seo_after_line_5"
    },
    "wall_seo_glimpse_1_ins": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "wall_seo_glimpse_2"
    },
    "wall_dain_2_ins": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "wall_dain_3"
    },
    "wall_dain_7_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "wall_dain_8"
    },
    "wall_dain_8_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "wall_dain_8_ins2"
    },
    "wall_dain_8_ins2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "wall_dain_9"
    },
    "wall_dain_12_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "wall_dain_12_ins2"
    },
    "wall_dain_12_ins2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "wall_dain_13"
    },
    "wall_dain_13_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_14"
    },
    "wall_dain_14_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_15"
    },
    "wall_dain_16_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_17"
    },
    "wall_dain_18_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_18_ins2"
    },
    "wall_dain_18_ins2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_18_ins3"
    },
    "wall_dain_18_ins3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_19"
    },
    "wall_dain_19_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_20"
    },
    "wall_dain_20_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_21"
    },
    "wall_dain_22_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_choice"
    },
    "wall_dain_newdream_2_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_newdream_3"
    },
    "wall_dain_cry_6_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_farewell_1"
    },
    "wall_dain_lastspike_3_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "wall_dain_lastspike_3_ins2"
    },
    "wall_dain_lastspike_3_ins2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "wall_dain_lastspike_4"
    },
    "wall_dain_lastspike_4_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "wall_dain_lastspike_5"
    },
    "wall_dain_glimpse_4_ins": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "wall_dain_glimpse_4_ins2"
    },
    "wall_dain_glimpse_4_ins2": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day4_final"
    },
    "wall_yuna_9_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "wall_yuna_10"
    },
    "wall_yuna_14_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "wall_yuna_14_ins2"
    },
    "wall_yuna_14_ins2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "wall_yuna_14_ins3"
    },
    "wall_yuna_14_ins3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "wall_yuna_14_ins4"
    },
    "wall_yuna_14_ins4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "wall_yuna_14_ins5"
    },
    "wall_yuna_14_ins5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "wall_yuna_14_ins6"
    },
    "wall_yuna_14_ins6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "wall_yuna_14_ins7"
    },
    "wall_yuna_14_ins7": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "wall_yuna_15"
    },
    "wall_yuna_16_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "wall_yuna_16_ins2"
    },
    "wall_yuna_16_ins2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "wall_yuna_choice"
    },
    "wall_yuna_moved_5_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "wall_yuna_mention_1"
    },
    "wall_yuna_reject_1_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "wall_yuna_reject_2"
    },
    "wall_yuna_glimpse_3_ins": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "wall_yuna_glimpse_3_ins2"
    },
    "wall_yuna_glimpse_3_ins2": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "wall_yuna_glimpse_3_ins3"
    },
    "wall_yuna_glimpse_3_ins3": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "wall_yuna_glimpse_3_ins4"
    },
    "wall_yuna_glimpse_3_ins4": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "wall_yuna_glimpse_3_ins5"
    },
    "wall_yuna_glimpse_3_ins5": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "wall_yuna_glimpse_3_ins6"
    },
    "wall_yuna_glimpse_3_ins6": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "wall_yuna_glimpse_3_ins7"
    },
    "wall_yuna_glimpse_3_ins7": {
        "background": "assets/images/background/school_back.png",
        "characters": {"center":{"src":"assets/images/characters/teacher_normal.png","opacity":0.35}},
        "next": "wall_yuna_glimpse_3_ins8"
    },
    "wall_yuna_glimpse_3_ins8": {
        "background": "assets/images/background/school_back.png",
        "characters": {"center":{"src":"assets/images/characters/teacher_normal.png","opacity":0.35}},
        "next": "wall_yuna_glimpse_3_ins9"
    },
    "wall_yuna_glimpse_3_ins9": {
        "background": "assets/images/background/school_back.png",
        "characters": {"center":{"src":"assets/images/characters/teacher_normal.png","opacity":0.35}},
        "next": "wall_yuna_glimpse_3_ins10"
    },
    "wall_yuna_glimpse_3_ins10": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "wall_yuna_glimpse_3_ins11"
    },
    "wall_yuna_glimpse_3_ins11": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "wall_yuna_glimpse_3_ins12"
    },
    "wall_yuna_glimpse_3_ins12": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "wall_yuna_glimpse_3_ins13"
    },
    "wall_yuna_glimpse_3_ins13": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "wall_yuna_glimpse_3_ins14"
    },
    "wall_yuna_glimpse_3_ins14": {
        "background": "assets/images/background/school_back.png",
        "characters": {"center":{"src":"assets/images/characters/nurse_normal.png","opacity":0.35}},
        "next": "wall_yuna_glimpse_3_ins15"
    },
    "wall_yuna_glimpse_3_ins15": {
        "background": "assets/images/background/school_back.png",
        "characters": {"center":{"src":"assets/images/characters/nurse_normal.png","opacity":0.35}},
        "next": "wall_yuna_glimpse_3_ins16"
    },
    "wall_yuna_glimpse_3_ins16": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "wall_yuna_glimpse_3_ins17"
    },
    "wall_yuna_glimpse_3_ins17": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "wall_yuna_glimpse_3_ins18"
    },
    "wall_yuna_glimpse_3_ins18": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "wall_yuna_glimpse_3_ins19"
    },
    "wall_yuna_glimpse_3_ins19": {
        "background": "assets/images/background/school_back.png",
        "characters": {"center":{"src":"assets/images/characters/nurse_normal.png","opacity":0.35}},
        "next": "wall_yuna_glimpse_3_ins20"
    },
    "wall_yuna_glimpse_3_ins20": {
        "background": "assets/images/background/school_back.png",
        "characters": {"center":{"src":"assets/images/characters/nurse_normal.png","opacity":0.35}},
        "next": "wall_yuna_glimpse_3_ins21"
    },
    "wall_yuna_glimpse_3_ins21": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "wall_yuna_glimpse_3_ins22"
    },
    "wall_yuna_glimpse_3_ins22": {
        "background": "assets/images/background/school_back.png",
        "characters": {"center":{"src":"assets/images/characters/nurse_normal.png","opacity":0.35}},
        "next": "wall_yuna_glimpse_3_ins23"
    },
    "wall_yuna_glimpse_3_ins23": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "wall_yuna_glimpse_4"
    }
};
Object.assign(SCENARIO[4], _scenes);
Object.values(_scenes).forEach(s => { if (!(s.background||'').includes('ending_') && !(s.background||'').includes('_event')) s.night = true; });
})();