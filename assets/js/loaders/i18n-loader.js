/**
 * i18n-loader.js
 * Fetches all extracted JSON translation strings and mounts them onto window.I18N_DATA
 */
(async function() {
    window.I18N_DATA = {};
    const lang = window.GAME_LANG || 'ko';
    const basePath = 'assets/js/i18n/' + lang;
    
    // We have 20 scenario files. We could hardcode them or use a list.
    // Given Cupid's 5 days x 4 slots, they are:
    const slots = ['morning', 'lunch', 'afterschool', 'night'];
    const days = [1, 2, 3, 4, 5];
    const fetchPromises = [];

    for (let day of days) {
        for (let i = 0; i < slots.length; i++) {
            const slot = slots[i];
            const file = \`day\${day}_\${i+1}_\${slot}.json\`;
            
            const promise = fetch(\`\${basePath}/\${file}\`)
                .then(res => {
                    if (res.ok) return res.json();
                    return {};
                })
                .then(data => {
                    Object.assign(window.I18N_DATA, data);
                })
                .catch(e => console.error('Failed to load', file, e));
            
            fetchPromises.push(promise);
        }
    }
    
    // Load common strings or prompts if they exist (for future)
    
    // We must await these fetches before GameEngine starts.
    // However, this script is loaded synchronously via document.write, while fetch is async.
    // We can delay window.initGame().
    const originalInitGame = window.initGame;
    window.initGame = async function() {
        await Promise.all(fetchPromises);
        await originalInitGame();
    };

    const originalInitGameFromSave = window.initGameFromSave;
    if (originalInitGameFromSave) {
        window.initGameFromSave = async function() {
            await Promise.all(fetchPromises);
            await originalInitGameFromSave();
        };
    }
})();
