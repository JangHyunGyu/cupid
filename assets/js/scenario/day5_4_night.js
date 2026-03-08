/**
 * ============================================================================
 * CUPID - day5_4_night
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[5]) SCENARIO[5] = {};

Object.assign(SCENARIO[5], {
    "day5_ending_true": {
        "background": null,
        "character": null,
        "night": true,
        "bgm": null,
        "fade": true,
        "next": "day5_ending_true_2"
    },
    "day5_ending_true_2": {
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "day5_ending_true_3"
    },
    "day5_ending_true_3": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_4"
    },
    "day5_ending_true_4": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_5"
    },
    "day5_ending_true_5": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_6"
    },
    "day5_ending_true_6": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_7"
    },
    "day5_ending_true_7": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_8"
    },
    "day5_ending_true_8": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_9"
    },
    "day5_ending_true_9": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_10"
    },
    "day5_ending_true_10": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_11"
    },
    "day5_ending_true_11": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_12"
    },
    "day5_ending_true_12": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_13"
    },
    "day5_ending_true_13": {
        "night": true,
        "fade": true,
        "next": "day5_credits"
    },
    "day5_ending_good": {
        "background": null,
        "character": null,
        "night": true,
        "bgm": null,
        "fade": true,
        "next": "day5_ending_good_route"
    },
    "day5_ending_good_route": {
        "night": true,
        "branches": [
            {
                "next": "day5_ending_good_faithful_2",
                "condition": "day5_confessed"
            },
            {
                "next": "day5_ending_good_2"
            }
        ]
    },
    "day5_ending_good_faithful_2": {
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "day5_ending_good_faithful_3"
    },
    "day5_ending_good_faithful_3": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_faithful_4"
    },
    "day5_ending_good_faithful_4": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_faithful_5"
    },
    "day5_ending_good_faithful_5": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_7"
    },
    "day5_ending_good_2": {
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "day5_ending_good_3"
    },
    "day5_ending_good_3": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_4"
    },
    "day5_ending_good_4": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_5"
    },
    "day5_ending_good_5": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_6"
    },
    "day5_ending_good_6": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_7"
    },
    "day5_ending_good_7": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_8"
    },
    "day5_ending_good_8": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_9"
    },
    "day5_ending_good_9": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_10"
    },
    "day5_ending_good_10": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_11"
    },
    "day5_ending_good_11": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_12"
    },
    "day5_ending_good_12": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_13"
    },
    "day5_ending_good_13": {
        "night": true,
        "fade": true,
        "next": "day5_credits"
    },
    "day5_ending_mayhem": {
        "background": null,
        "character": null,
        "night": true,
        "bgm": null,
        "fade": true,
        "next": "day5_ending_mayhem_2"
    },
    "day5_ending_mayhem_2": {
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "day5_ending_mayhem_3"
    },
    "day5_ending_mayhem_3": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_4"
    },
    "day5_ending_mayhem_4": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_5"
    },
    "day5_ending_mayhem_5": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_6"
    },
    "day5_ending_mayhem_6": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_7"
    },
    "day5_ending_mayhem_7": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_8"
    },
    "day5_ending_mayhem_8": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_9"
    },
    "day5_ending_mayhem_9": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_10"
    },
    "day5_ending_mayhem_10": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_11"
    },
    "day5_ending_mayhem_11": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_12"
    },
    "day5_ending_mayhem_12": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_13"
    },
    "day5_ending_mayhem_13": {
        "night": true,
        "fade": true,
        "next": "day5_credits"
    },
    "day5_ending_harem": {
        "background": null,
        "character": null,
        "night": true,
        "bgm": null,
        "fade": true,
        "next": "day5_ending_harem_2"
    },
    "day5_ending_harem_2": {
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "day5_ending_harem_3"
    },
    "day5_ending_harem_3": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_4"
    },
    "day5_ending_harem_4": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_5"
    },
    "day5_ending_harem_5": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_6"
    },
    "day5_ending_harem_6": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_7"
    },
    "day5_ending_harem_7": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_8"
    },
    "day5_ending_harem_8": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_9"
    },
    "day5_ending_harem_9": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_10"
    },
    "day5_ending_harem_10": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_11"
    },
    "day5_ending_harem_11": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_12"
    },
    "day5_ending_harem_12": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_13"
    },
    "day5_ending_harem_13": {
        "night": true,
        "fade": true,
        "next": "day5_credits"
    },
    "day5_ending_friend": {
        "background": null,
        "character": null,
        "night": true,
        "bgm": null,
        "fade": true,
        "next": "day5_ending_friend_2"
    },
    "day5_ending_friend_2": {
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "day5_ending_friend_3"
    },
    "day5_ending_friend_3": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_4"
    },
    "day5_ending_friend_4": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_5"
    },
    "day5_ending_friend_5": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_6"
    },
    "day5_ending_friend_6": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_7"
    },
    "day5_ending_friend_7": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_8"
    },
    "day5_ending_friend_8": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_9"
    },
    "day5_ending_friend_9": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_10"
    },
    "day5_ending_friend_10": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_11"
    },
    "day5_ending_friend_11": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_12"
    },
    "day5_ending_friend_12": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_13"
    },
    "day5_ending_friend_13": {
        "night": true,
        "fade": true,
        "next": "day5_credits"
    },
    "day5_ending_alone": {
        "background": null,
        "character": null,
        "night": true,
        "bgm": null,
        "fade": true,
        "next": "day5_ending_alone_2"
    },
    "day5_ending_alone_2": {
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "day5_ending_alone_3"
    },
    "day5_ending_alone_3": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_4"
    },
    "day5_ending_alone_4": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_5"
    },
    "day5_ending_alone_5": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_6"
    },
    "day5_ending_alone_6": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_7"
    },
    "day5_ending_alone_7": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_8"
    },
    "day5_ending_alone_8": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_9"
    },
    "day5_ending_alone_9": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_10"
    },
    "day5_ending_alone_10": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_11"
    },
    "day5_ending_alone_11": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_12"
    },
    "day5_ending_alone_12": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_13"
    },
    "day5_ending_alone_13": {
        "night": true,
        "fade": true,
        "next": "day5_credits"
    },
    "day5_credits": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "type": "credits",
        "next": "day5_ending_restart"
    },
    "day5_ending_restart": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "choices": [
            {
                "next": "index.html"
            }
        ]
    }
});
