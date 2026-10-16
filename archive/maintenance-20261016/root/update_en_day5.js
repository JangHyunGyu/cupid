const fs = require('fs');
let enContent = fs.readFileSync('assets/js/scenario/en_day5_4_night.js', 'utf8');

const replacements = {
    'day5_ending_true_10': "*Tomorrow, the day after, even a year from now I can see myself unable to escape from this person.*",
    'day5_ending_true_11': "*Let's make a promise. No matter what season comes, you will be tied to my side forever.*",
    'day5_ending_true_12': "*To love someone completely is to hold one single obsession amid all the uncertainty in the world.*",
    'day5_ending_good_8': "*I wasn't lost. It was just a process to make you mine.*",
    'day5_ending_good_9': "*If there had been no hesitation, there would be no such terrible possessiveness now.*",
    'day5_ending_good_10': "*Imperfect love is still love. No perhaps it's more perfect because it's broken.*",
    'day5_ending_good_11': "*I'll make mistakes again. We'll clash. But with this person, falling into ruin together wouldn't be so bad.*",
    'day5_ending_good_12': "*So it's okay. This obsession took a long time to form that's exactly why it will never be undone.*",
    'day5_ending_mayhem_8': "*Maybe it's selfish. Wanting to cherish everyone. But it's already too late.*",
    'day5_ending_mayhem_9': "*Their obsession is already suffocating me. The moment I choose one, I will be ruined.*",
    'day5_ending_mayhem_10': "*Honestly, this hellish daily life... isn't so bad. I wonder what chaos tomorrow will bring.*",
    'day5_ending_harem_7': "*But strangely enough all of them are smiling. As if they completely own me.*",
    'day5_ending_harem_8': "*Call it greed if you want. If I can't escape from this terrible cycle of obsession.*",
    'day5_ending_harem_9': "*No regrets. No, they don't even give me time to regret. They are watching my every move.*",
    'day5_ending_harem_10': "*Of course, no one knows when this balance will break. The moment someone crosses the line, a bloodbath will begin.*",
    'day5_ending_harem_12': "*Tomorrow I'll be watched again. The day after, they'll tighten their grip even more. But these bloody days, I accept them.*",
    'day5_ending_friend_8': "*Still, it's not all bad. I can see their smile right beside me. Waiting for the day I can shatter that smile.*",
    'day5_ending_friend_9': "*Maybe this isn't cowardice, but a quiet hunt. Staying by their side while holding my prey.*",
    'day5_ending_friend_10': "*Still I don't regret it. Someday, the chance to make you completely mine will come.*",
    'day5_ending_alone_8': "*Being alone doesn't mean being lonely. There are things you can only hear when you're on your own. Their footsteps, their breathing, the eyes watching me.*",
    'day5_ending_alone_9': "*The sound of the wind, my footsteps, my own heartbeat. Within that quiet rhythm, I was slowly going mad.*",
    'day5_ending_alone_10': "*Even if I couldn't reach anyone, these times are never meaningless. Because I am definitely sinking into a deeper darkness than yesterday.*"
};

for (const [key, newText] of Object.entries(replacements)) {
    const regex = new RegExp('("' + key + '": \\{[\\s\\S]*?text: ")(.*?)(")', 'g');
    enContent = enContent.replace(regex, `$1${newText}$3`);
}

fs.writeFileSync('assets/js/scenario/en_day5_4_night.js', enContent, 'utf8');
console.log('Updated en_day5_4_night.js');
