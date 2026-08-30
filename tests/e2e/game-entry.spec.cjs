'use strict';

const { expect, test } = require('@playwright/test');

async function waitForRuntime(page) {
    try {
        await page.waitForFunction(() => window.gameScriptsLoaded === true, null, { timeout: 15_000 });
    } catch (error) {
        const state = await page.evaluate(() => ({
            href: location.href,
            title: document.title,
            body: document.body?.innerText?.slice(0, 200) || '',
            loaded: window.gameScriptsLoaded,
            lastError: window.__cupidLastLoadError || null
        }));
        throw new Error(`game runtime did not load: ${JSON.stringify(state)}; ${error.message}`);
    }
}

const localizedGamePages = [
    'game.html', 'game-en.html', 'game-ja.html', 'game-es.html',
    'game-fr.html', 'game-de.html', 'game-pt.html'
];

for (const pageName of ['index.html', 'index-en.html', ...localizedGamePages]) {
    test(`${pageName} loads the complete game runtime`, async ({ page }) => {
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        const response = await page.goto(`/${pageName}`, { waitUntil: 'domcontentloaded' });
        expect(response?.status()).toBe(200);
        await waitForRuntime(page);
        if (pageName.startsWith('index')) {
            await expect(page.locator('#start-btn')).toBeEnabled();
        } else {
            await expect(page.locator('#game-container')).toHaveCount(1);
            await expect(page.locator('#fade-layer')).toHaveAttribute('aria-hidden', 'true');
            await expect(page.locator('#credits-layer')).toHaveAttribute('aria-hidden', 'true');
        }
        expect(errors).toEqual([]);
    });
}

test('explicit localized landing URL overrides a stale stored language', async ({ page }) => {
    await page.goto('/index.html');
    await page.evaluate(() => localStorage.setItem('cupid:language', 'ko'));

    const response = await page.goto('/index-en.html', { waitUntil: 'domcontentloaded' });
    expect(response?.status()).toBe(200);
    await waitForRuntime(page);

    expect(new URL(page.url()).pathname).toBe('/index-en.html');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.getByRole('button', { name: 'New Game' })).toBeEnabled();
    await expect.poll(() => page.evaluate(() => localStorage.getItem('cupid:language'))).toBe('en');
});

test('four-choice affinity scene renders all options and applies a trap penalty', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/game.html');
    await waitForRuntime(page);
    await page.waitForFunction(() => window.gameEngine?.dialogueSystem);

    await page.evaluate(async () => {
        window.gameEngine.dialogueSystem.typingSpeed = 0;
        window.gameEngine.stateManager.stats.Seoyeon.affinity = 50;
        await window.gameEngine.renderScene('lunch_seo_choice');
    });
    await page.locator('#dialogue-box').click();

    const choices = page.locator('.choice-btn');
    await expect(choices).toHaveCount(4);
    await expect(choices).toHaveClass([/choice-ready/, /choice-ready/, /choice-ready/, /choice-ready/]);

    const trapChoice = page.getByRole('button', {
        name: '정성까지 들였는데 한 입만 먹어줄게',
        exact: true
    });
    await expect(trapChoice).toBeVisible();
    await trapChoice.click();

    await expect.poll(() => page.evaluate(
        () => window.gameEngine.stateManager.stats.Seoyeon.affinity
    )).toBe(47);
});

test('cinematic overlays only enter the accessibility tree while active', async ({ page }) => {
    await page.goto('/game.html');
    await waitForRuntime(page);
    await page.waitForFunction(() => window.gameEngine?.uiManager);

    const fadeLayer = page.locator('#fade-layer');
    const tbcText = page.locator('#tbc-text');
    await page.evaluate(() => {
        window.gameEngine.uiManager.setFade(true, true);
        window.gameEngine.uiManager.setFade(false);
    });
    await expect(fadeLayer).toHaveAttribute('aria-hidden', 'true');
    await page.waitForTimeout(1100);
    await expect(tbcText).not.toHaveClass(/show/);

    await page.evaluate(() => window.gameEngine.uiManager.setFade(true));
    await expect(fadeLayer).toHaveAttribute('aria-hidden', 'false');
    await page.evaluate(() => window.gameEngine.uiManager.setFade(false));
    await expect(fadeLayer).toHaveAttribute('aria-hidden', 'true');

    await page.evaluate(() => window.gameEngine.renderScene('day5_credits'));
    const creditsLayer = page.locator('#credits-layer');
    await expect(creditsLayer).toHaveClass(/active/);
    await expect(creditsLayer).toHaveAttribute('aria-hidden', 'false');
    await page.locator('#credits-skip-btn').click();
    await expect(creditsLayer).toHaveAttribute('aria-hidden', 'true');
});

test('mobile landing keeps its primary actions and footer inside the viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/index.html');
    await waitForRuntime(page);

    const layout = await page.evaluate(() => {
        const footer = document.querySelector('.footer');
        const landing = document.querySelector('#landing-container');
        const continueButton = document.querySelector('#continue-btn');
        const footerRect = footer.getBoundingClientRect();
        const continueRect = continueButton.getBoundingClientRect();
        const footerStyle = getComputedStyle(footer);
        return {
            viewportWidth: window.innerWidth,
            viewportHeight: window.innerHeight,
            scrollWidth: document.documentElement.scrollWidth,
            footerTop: footerRect.top,
            footerBottom: footerRect.bottom,
            continueBottom: continueRect.bottom,
            footerBackground: footerStyle.backgroundImage,
            landingBackground: getComputedStyle(landing).backgroundImage
        };
    });

    expect(layout.scrollWidth).toBeLessThanOrEqual(layout.viewportWidth);
    expect(layout.continueBottom).toBeLessThan(layout.footerTop);
    expect(layout.footerBottom).toBeLessThanOrEqual(layout.viewportHeight);
    expect(layout.footerBackground).not.toBe('none');
    expect(layout.landingBackground).toContain('title_portrait.webp');
});

test('landing modals expose dialog semantics and keep keyboard focus contained', async ({ page }) => {
    await page.goto('/index.html');
    await waitForRuntime(page);

    const settingsButton = page.getByRole('button', { name: '설정' });
    await settingsButton.click();
    const settingsModal = page.locator('#settingsModal');
    await expect(settingsModal).toHaveAttribute('role', 'dialog');
    await expect(settingsModal).toHaveAttribute('aria-modal', 'true');
    await expect(settingsModal).toHaveAttribute('aria-hidden', 'false');
    await expect.poll(() => page.evaluate(() => (
        document.activeElement?.closest('#settingsModal')?.id || ''
    ))).toBe('settingsModal');

    await page.keyboard.press('Escape');
    await expect(settingsModal).toHaveAttribute('aria-hidden', 'true');
    await expect(settingsButton).toBeFocused();

    await page.evaluate(() => {
        const continueButton = document.getElementById('continue-btn');
        continueButton.disabled = false;
        continueButton.style.opacity = '1';
    });
    const startButton = page.getByRole('button', { name: '새 게임' });
    await startButton.click();
    const newGameModal = page.locator('#newGameConfirmModal');
    await expect(newGameModal).toHaveAttribute('role', 'alertdialog');
    await expect(newGameModal).toHaveAttribute('aria-labelledby', 'newGameConfirmModal-title');
    await expect(newGameModal).toHaveAttribute('aria-describedby', 'newGameConfirmModal-description');
    await expect(newGameModal.locator('.modal-btn.cancel')).toBeFocused();

    await page.keyboard.press('Shift+Tab');
    await expect(newGameModal.locator('.modal-btn.confirm')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(newGameModal.locator('.modal-btn.cancel')).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(newGameModal).toHaveAttribute('aria-hidden', 'true');
    await expect(startButton).toBeFocused();
});

test('new game reaches the name input scene without changing UI contracts', async ({ page }) => {
    await page.goto('/index.html');
    await waitForRuntime(page);
    await page.locator('#start-btn').click();
    await expect(page.locator('#game-container')).toBeVisible();
    await page.waitForFunction(() => window.gameEngine?.dialogueSystem);
    await page.evaluate(() => { window.gameEngine.dialogueSystem.typingSpeed = 0; });

    for (let step = 0; step < 40; step += 1) {
        if (await page.locator('#name-input-container').isVisible()) break;
        const readyChoice = page.locator('.choice-btn.choice-ready').first();
        if (await readyChoice.isVisible()) await readyChoice.click();
        else if (await page.locator('#dialogue-box').isVisible()) await page.locator('#dialogue-box').click();
        await page.waitForTimeout(50);
    }
    await expect(page.locator('#name-input-container')).toBeVisible();
});

test('new game clears main chat context but preserves separate gallery memory', async ({ page }) => {
    await page.goto('/game.html');
    await waitForRuntime(page);
    await page.waitForFunction(() => window.gameEngine?.freeTalkSystem);

    const result = await page.evaluate(async () => {
        const galleryMemory = {
            seyoun: [{ role: 'user', content: 'gallery conversation stays' }]
        };
        localStorage.setItem('cupid_freetalk_memory', JSON.stringify(galleryMemory));
        localStorage.setItem('cupid_freetalk_prompt_epochs_v1', JSON.stringify({
            seyoun: { version: 1, carryover: 'gallery checkpoint' }
        }));

        const engine = window.gameEngine;
        engine.stateManager.playerName = 'Previous Player';
        engine.stateManager.currentDay = 5;
        engine.stateManager.stats.Seoyeon.affinity = 87;
        engine.stateManager.flags.ending_perfect_seoyeon = true;
        engine.stateManager.storyFreeTalkGains.Seoyeon = 22;
        engine.stateManager.chatMemories.Seoyeon = [{ role: 'user', content: 'old main run' }];
        engine.stateManager.chatPromptEpochs.Seoyeon = { version: 1, carryover: 'old main run' };
        engine.freeTalkSystem.freeTalkHistory = [{ role: 'user', content: 'in-flight old run' }];

        await engine.startNewGame();

        return {
            playerName: engine.stateManager.playerName,
            day: engine.stateManager.currentDay,
            affinity: engine.stateManager.stats.Seoyeon.affinity,
            flags: engine.stateManager.flags,
            storyFreeTalkGains: engine.stateManager.storyFreeTalkGains,
            chatMemories: engine.stateManager.chatMemories,
            promptEpochs: engine.stateManager.chatPromptEpochs,
            runtimeHistory: engine.freeTalkSystem.freeTalkHistory,
            galleryMemory: JSON.parse(localStorage.getItem('cupid_freetalk_memory') || '{}'),
            galleryEpochs: JSON.parse(localStorage.getItem('cupid_freetalk_prompt_epochs_v1') || '{}')
        };
    });

    expect(result.playerName).toBe('주인공');
    expect(result.day).toBe(1);
    expect(result.affinity).toBe(0);
    expect(result.flags).toEqual({});
    expect(result.storyFreeTalkGains).toEqual({});
    expect(result.chatMemories).toEqual({});
    expect(result.promptEpochs).toEqual({});
    expect(result.runtimeHistory).toEqual([]);
    expect(result.galleryMemory.seyoun[0].content).toBe('gallery conversation stays');
    expect(result.galleryEpochs.seyoun.carryover).toBe('gallery checkpoint');
});

test('main free-talk request keeps the complete per-character run history', async ({ page }) => {
    await page.goto('/game.html');
    await waitForRuntime(page);
    await page.waitForFunction(() => window.FreeTalkSystem);

    const result = await page.evaluate(() => {
        const history = [{ role: 'system', content: 'current scene prompt' }];
        for (let i = 0; i < 18; i += 1) {
            history.push({ role: 'user', content: `user-${i}` });
            history.push({ role: 'assistant', content: `assistant-${i}` });
        }
        const cleared = [];
        const complete = window.FreeTalkSystem.prototype._buildWindowedHistory.call({
            freeTalkHistory: history,
            currentCharKey: 'Seoyeon',
            stateManager: { clearChatPromptEpoch: charKey => cleared.push(charKey) }
        }, history, 'Seoyeon');
        return {
            length: complete.length,
            first: complete[0].content,
            firstUser: complete[1].content,
            last: complete[complete.length - 1].content,
            cleared
        };
    });

    expect(result.length).toBe(37);
    expect(result.first).toBe('current scene prompt');
    expect(result.firstUser).toBe('user-0');
    expect(result.last).toBe('assistant-17');
    expect(result.cleared).toEqual(['Seoyeon']);
});

test('main free-talk affinity pacing can recover after prior positive gains', async ({ page }) => {
    await page.goto('/game.html');
    await waitForRuntime(page);
    await page.waitForFunction(() => window.gameEngine?.freeTalkSystem);

    const result = await page.evaluate(() => {
        const engine = window.gameEngine;
        const state = engine.stateManager;
        state.stats.Seoyeon.affinity = 80;
        state.storyFreeTalkGains.Seoyeon = 0;

        const changes = [];
        for (let turn = 0; turn < 8; turn += 1) {
            changes.push(engine.freeTalkSystem.applyAffinity(5, { name: 'Seoyeon' }).change);
        }

        state.storyFreeTalkGains.Seoyeon = 22;
        state.changeAffinity('Seoyeon', -20);
        const recoveryChanges = [];
        for (let turn = 0; turn < 8; turn += 1) {
            recoveryChanges.push(engine.freeTalkSystem.applyAffinity(5, { name: 'Seoyeon' }).change);
        }

        const saved = state.exportState();
        const restored = new window.StateManager();
        restored.importState(saved);
        return {
            changes,
            recoveryChanges,
            affinity: state.getAffinity('Seoyeon'),
            legacyGain: state.getStoryFreeTalkGain('Seoyeon'),
            restoredLegacyGain: restored.getStoryFreeTalkGain('Seoyeon')
        };
    });

    expect(result.changes).toEqual([3, 3, 3, 3, 2, 2, 2, 2]);
    expect(result.recoveryChanges).toEqual([3, 3, 3, 3, 2, 2, 2, 2]);
    expect(result.affinity).toBe(100);
    expect(result.legacyGain).toBe(22);
    expect(result.restoredLegacyGain).toBe(22);
});

test('gallery runtime includes the shared free-talk core', async ({ page }) => {
    await page.goto('/gallery.html');
    await page.waitForFunction(() => window.GalleryFreeTalk && window.CupidFreeTalkCore);
    await expect(page.locator('#gallery-freetalk-overlay')).toHaveCount(1);
});

test('game and gallery preserve valid outward expressions independently of affinity', async ({ page }) => {
    await page.goto('/game.html');
    await waitForRuntime(page);
    const gameAvatar = await page.evaluate(() => {
        const slot = document.createElement('div');
        const image = document.createElement('img');
        slot.appendChild(image);
        window.FreeTalkSystem.prototype.applyExpression.call(
            { uiManager: { charSlots: { center: slot } } },
            'smile',
            { name: 'Yuna' }
        );
        return image.getAttribute('src');
    });
    expect(gameAvatar).toContain('yuna_smile.png');

    await page.goto('/gallery.html');
    await page.waitForFunction(() => window.GalleryFreeTalk && window.CupidFreeTalkCore);
    const galleryAvatar = await page.evaluate(() => {
        const image = document.createElement('img');
        image.id = 'gft-char-img';
        document.body.appendChild(image);
        window.GalleryFreeTalk.prototype._updateExpression.call(
            {
                currentCharId: 'yuna',
                CHAR_EXPRESSIONS: {
                    yuna: ['normal', 'smile', 'shy', 'angry', 'sad', 'worried']
                }
            },
            'angry',
            'yuna'
        );
        return image.getAttribute('src');
    });
    expect(galleryAvatar).toContain('yuna_angry.png');
});

test('gallery free-talk injects all eight affinity temperature bands into every turn prompt', async ({ page }) => {
    await page.goto('/gallery.html');
    await page.waitForFunction(() => window.GalleryFreeTalk && window.CupidFreeTalkCore);

    const result = await page.evaluate(() => {
        let currentAffinity = 0;
        const talk = new window.GalleryFreeTalk('en', {
            getPlayerName: () => 'Tester',
            getCurrentAffinity: () => currentAffinity
        });
        const scores = [95, 75, 50, 20, 0, -20, -50, -80];
        return scores.map(score => {
            currentAffinity = score;
            const label = talk._getGalleryRelationshipState(score).en;
            const prompt = talk._buildSystemPrompt('yuna');
            return {
                label,
                hasScore: prompt.includes(`current_affinity=${score}/100`),
                hasLabel: prompt.includes(`relationship=${label}`),
                hasBehaviorAxes: ['speech', 'initiative', 'touch', 'restraint', 'refusal', 'openness']
                    .every(axis => prompt.includes(axis))
            };
        });
    });

    expect(new Set(result.map(item => item.label)).size).toBe(8);
    expect(result.every(item => item.hasScore && item.hasLabel && item.hasBehaviorAxes)).toBe(true);
});

test('gallery high-severity trust incident commits one completed turn and an immediate -50 impact', async ({ page }) => {
    await page.goto('/gallery.html');
    await page.waitForFunction(() => window.GalleryFreeTalk && window.CupidFreeTalkCore);

    const result = await page.evaluate(() => {
        let savedState = null;
        const talk = Object.create(window.GalleryFreeTalk.prototype);
        talk.currentCharId = 'yuna';
        talk.progress = {
            setGalleryIncidentState(_charId, state) {
                savedState = window.CupidFreeTalkCore.normalizeGalleryIncidentState(state);
                return savedState;
            }
        };

        const state = window.CupidFreeTalkCore.normalizeGalleryIncidentState({
            completedTurns: 399,
            quietTurns: 99,
            negativeSignals: [{
                turn: 398,
                weight: 6,
                excerpt: '싫다고 해도 계속 강요할 거야.'
            }]
        });
        const committed = talk._commitGalleryIncidentTurn({
            charId: 'yuna',
            runtime: { state, plan: { category: 'crisis' } },
            payload: {
                status: 'started',
                summary: '반복된 강요 때문에 유나가 신뢰 문제를 꺼냈다.',
                severity: 'high',
                impact: -50
            },
            visibleText: '유나는 더는 넘길 수 없다고 말했다.',
            latestUserText: '무슨 일이야?',
            turnAffinity: 5
        });
        return { committed, savedState };
    });

    expect(result.committed.affinityChange).toBe(-50);
    expect(result.committed.completedTurns).toBe(400);
    expect(result.savedState.activeIncident.category).toBe('crisis');
    expect(result.savedState.activeIncident.severity).toBe('high');
    expect(result.savedState.lastCrisisTurn).toBe(400);
    expect(result.savedState.negativeSignals).toEqual([]);
});

test('gallery preserves the AI-selected crisis severity without an evidence-based override', async ({ page }) => {
    await page.goto('/gallery.html');
    await page.waitForFunction(() => window.GalleryFreeTalk && window.CupidFreeTalkCore);

    const result = await page.evaluate(() => {
        let savedState = null;
        const talk = Object.create(window.GalleryFreeTalk.prototype);
        talk.currentCharId = 'yuna';
        talk.progress = {
            setGalleryIncidentState(_charId, state) {
                savedState = window.CupidFreeTalkCore.normalizeGalleryIncidentState(state);
                return savedState;
            }
        };
        const state = window.CupidFreeTalkCore.normalizeGalleryIncidentState({
            completedTurns: 399,
            quietTurns: 99,
            negativeSignals: [{ turn: 398, weight: 6, excerpt: 'single severe signal' }]
        });
        const committed = talk._commitGalleryIncidentTurn({
            charId: 'yuna',
            runtime: { state, plan: { category: 'crisis' } },
            payload: {
                status: 'started',
                summary: 'A serious misunderstanding damages trust.',
                severity: 'medium',
                impact: -35
            },
            latestUserText: 'What happened?',
            turnAffinity: 5
        });
        return { committed, savedState };
    });

    expect(result.committed.affinityChange).toBe(-35);
    expect(result.committed.startedSeverity).toBe('medium');
    expect(result.savedState.activeIncident.severity).toBe('medium');
});

test('gallery rejects a crisis payload with no AI-selected severity instead of inferring one', async ({ page }) => {
    await page.goto('/gallery.html');
    await page.waitForFunction(() => window.GalleryFreeTalk && window.CupidFreeTalkCore);

    const result = await page.evaluate(() => {
        let savedState = null;
        const talk = Object.create(window.GalleryFreeTalk.prototype);
        talk.currentCharId = 'yuna';
        talk.progress = {
            setGalleryIncidentState(_charId, state) {
                savedState = window.CupidFreeTalkCore.normalizeGalleryIncidentState(state);
                return savedState;
            }
        };
        const committed = talk._commitGalleryIncidentTurn({
            charId: 'yuna',
            runtime: {
                state: window.CupidFreeTalkCore.normalizeGalleryIncidentState({
                    completedTurns: 399,
                    quietTurns: 99,
                    negativeSignals: [{ turn: 398, weight: 6, excerpt: 'actual evidence' }]
                }),
                plan: { category: 'crisis' }
            },
            payload: {
                status: 'started',
                summary: 'The payload omitted severity.',
                impact: -50
            },
            latestUserText: 'What happened?',
            turnAffinity: 2
        });
        return { committed, savedState };
    });

    expect(result.committed.affinityChange).toBe(2);
    expect(result.committed.startedCategory).toBe('');
    expect(result.savedState.activeIncident).toBeNull();
});

test('gallery does not penalize a planned incident that the AI failed to establish', async ({ page }) => {
    await page.goto('/gallery.html');
    await page.waitForFunction(() => window.GalleryFreeTalk && window.CupidFreeTalkCore);

    const result = await page.evaluate(() => {
        let savedState = null;
        const talk = Object.create(window.GalleryFreeTalk.prototype);
        talk.currentCharId = 'yuna';
        talk.progress = {
            setGalleryIncidentState(_charId, state) {
                savedState = window.CupidFreeTalkCore.normalizeGalleryIncidentState(state);
                return savedState;
            }
        };
        const committed = talk._commitGalleryIncidentTurn({
            charId: 'yuna',
            runtime: {
                state: window.CupidFreeTalkCore.normalizeGalleryIncidentState({
                    completedTurns: 99,
                    quietTurns: 99
                }),
                plan: { category: 'crisis' }
            },
            payload: null,
            visibleText: '유나는 평소처럼 책장을 넘겼다.',
            latestUserText: '오늘은 어땠어?',
            turnAffinity: 2
        });
        return { committed, savedState };
    });

    expect(result.committed.affinityChange).toBe(2);
    expect(result.committed.startedCategory).toBe('');
    expect(result.savedState.activeIncident).toBeNull();
    expect(result.savedState.quietTurns).toBe(100);
});

test('legacy 100-point gallery progress drops to 99 and relocks perfect content once', async ({ page }) => {
    await page.goto('/gallery.html');
    await page.waitForFunction(() => window.GalleryProgress && window.GalleryData && window.CupidFreeTalkCore);

    const result = await page.evaluate(() => {
        localStorage.setItem('cupid_gallery', JSON.stringify({
            version: window.GalleryData.VERSION,
            playerName: '테스터',
            characters: {
                seyoun: {
                    met: true,
                    maxAffinity: 100,
                    currentAffinity: 100,
                    freeTalkCount: 30,
                    unlocked: true,
                    perfectEndingCleared: true
                },
                yuna: { met: true, maxAffinity: 100, currentAffinity: 100, unlocked: true, perfectEndingCleared: true },
                dain: { met: true, maxAffinity: 100, currentAffinity: 100, unlocked: true, perfectEndingCleared: true },
                teacher: { met: true, maxAffinity: 100, currentAffinity: 100, unlocked: true, perfectEndingCleared: true },
                nurse: { met: true, maxAffinity: 100, currentAffinity: 100, unlocked: true, perfectEndingCleared: true }
            },
            cg: {
                ending_perfect_seoyeon: { unlocked: true },
                ending_perfect_yuna: { unlocked: true },
                ending_perfect_dain: { unlocked: true },
                ending_perfect_teacher: { unlocked: true },
                ending_perfect_nurse: { unlocked: true }
            },
            bgm: { intro: { unlocked: true } }
        }));

        const progress = new window.GalleryProgress();
        const incidentState = progress.getGalleryIncidentState('seyoun');
        const unlockedBefore = progress.isFreeTalkUnlocked('seyoun');
        progress.changeCurrentAffinity('seyoun', -50);
        const saved = JSON.parse(localStorage.getItem('cupid_gallery'));
        const ids = ['seyoun', 'yuna', 'dain', 'teacher', 'nurse'];
        const perfectCgIds = ids.map(id => id === 'seyoun' ? 'ending_perfect_seoyeon' : `ending_perfect_${id}`);
        return {
            incidentState,
            unlockedBefore,
            unlockedAfter: progress.isFreeTalkUnlocked('seyoun'),
            currentAffinity: progress.getCurrentAffinity('seyoun'),
            maxAffinities: ids.map(id => progress.getAffinity(id)),
            allPerfectFlagsCleared: ids.every(id => !saved.characters[id].perfectEndingCleared),
            allCharacterUnlocksCleared: ids.every(id => !saved.characters[id].unlocked),
            allPerfectCgsRelocked: perfectCgIds.every(id => !progress.isUnlocked('cg', id)),
            migrationVersion: saved.affinityRebalanceVersion
        };
    });

    expect(result.incidentState.completedTurns).toBe(0);
    expect(result.unlockedBefore).toBe(false);
    expect(result.unlockedAfter).toBe(false);
    expect(result.currentAffinity).toBe(49);
    expect(result.maxAffinities).toEqual([99, 99, 99, 99, 99]);
    expect(result.allPerfectFlagsCleared).toBe(true);
    expect(result.allCharacterUnlocksCleared).toBe(true);
    expect(result.allPerfectCgsRelocked).toBe(true);
    expect(result.migrationVersion).toBe(1);
});

test('legacy 100-point main save drops to 99, reroutes, and never downgrades twice', async ({ page }) => {
    await page.goto('/game.html');
    await page.waitForFunction(() => window.SaveManager && window.StateManager);

    const result = await page.evaluate(() => {
        localStorage.setItem('cupid_save', JSON.stringify({
            currentSceneId: 'perfect_seo_5',
            lastBgUrl: 'assets/images/background/ending_perfect_seoyeon.png',
            currentCharacters: { center: 'assets/images/characters/seyoun_shy.png' },
            gameState: {
                stats: { Seoyeon: { affinity: 100 } },
                flags: {
                    route_seoyeon: true,
                    ending_perfect: true,
                    isDating_Seoyeon: true
                }
            }
        }));

        const manager = new window.SaveManager();
        const migrated = manager.load();
        const persisted = JSON.parse(localStorage.getItem('cupid_save'));
        persisted.gameState.stats.Seoyeon.affinity = 100;
        localStorage.setItem('cupid_save', JSON.stringify(persisted));
        const loadedAgain = manager.load();
        return {
            firstAffinity: migrated.gameState.stats.Seoyeon.affinity,
            firstScene: migrated.currentSceneId,
            endingPerfect: migrated.gameState.flags.ending_perfect,
            isDating: migrated.gameState.flags.isDating_Seoyeon,
            migrationVersion: migrated.gameState.affinityRebalanceVersion,
            persistedAffinity: persisted.gameState.stats.Seoyeon.affinity,
            secondAffinity: loadedAgain.gameState.stats.Seoyeon.affinity
        };
    });

    expect(result.firstAffinity).toBe(99);
    expect(result.firstScene).toBe('ending_aff_check_seo');
    expect(result.endingPerfect).toBe(false);
    expect(result.isDating).toBe(false);
    expect(result.migrationVersion).toBe(1);
    expect(result.persistedAffinity).toBe(100);
    expect(result.secondAffinity).toBe(100);
});

test('first gallery free-talk starts at max affinity and never resets a played relationship', async ({ page }) => {
    await page.goto('/gallery.html');
    await page.waitForFunction(() => window.galleryFreeTalk?.progress && window.GalleryData && window.CupidFreeTalkCore);

    const result = await page.evaluate(() => {
        localStorage.setItem('cupid_freetalk_memory', JSON.stringify({
            yuna: [{ role: 'user', content: '이미 이어 온 갤러리 대화' }]
        }));
        localStorage.setItem('cupid_gallery', JSON.stringify({
            version: window.GalleryData.VERSION,
            affinityRebalanceVersion: window.GalleryData.AFFINITY_REBALANCE_VERSION,
            characters: {
                seyoun: {
                    met: true,
                    maxAffinity: 100,
                    currentAffinity: 0,
                    freeTalkCount: 30,
                    perfectEndingCleared: true
                },
                yuna: {
                    met: true,
                    maxAffinity: 100,
                    currentAffinity: 0,
                    freeTalkCount: 30,
                    perfectEndingCleared: true,
                    galleryIncident: { completedTurns: 3 }
                },
                dain: {
                    met: true,
                    maxAffinity: 100,
                    currentAffinity: 45,
                    freeTalkCount: 30,
                    perfectEndingCleared: true
                }
            },
            cg: {},
            bgm: { intro: { unlocked: true } }
        }));

        const talk = window.galleryFreeTalk;
        const progress = talk.progress;
        talk.open('seyoun');
        const firstStart = progress.getCurrentAffinity('seyoun');
        talk.close();
        progress.changeCurrentAffinity('seyoun', -50);
        talk.open('seyoun');
        const reopened = progress.getCurrentAffinity('seyoun');
        talk.close();
        talk.open('yuna');
        const legacyPlayed = progress.getCurrentAffinity('yuna');
        talk.close();
        talk.open('dain');
        const legacyChangedAffinity = progress.getCurrentAffinity('dain');
        talk.close();
        const saved = JSON.parse(localStorage.getItem('cupid_gallery'));

        return {
            firstStart,
            reopened,
            legacyPlayed,
            legacyChangedAffinity,
            seyounInitialized: saved.characters.seyoun.galleryFreeTalkAffinityInitialized,
            yunaInitialized: saved.characters.yuna.galleryFreeTalkAffinityInitialized,
            dainInitialized: saved.characters.dain.galleryFreeTalkAffinityInitialized
        };
    });

    expect(result.firstStart).toBe(100);
    expect(result.reopened).toBe(50);
    expect(result.legacyPlayed).toBe(0);
    expect(result.legacyChangedAffinity).toBe(45);
    expect(result.seyounInitialized).toBe(true);
    expect(result.yunaInitialized).toBe(true);
    expect(result.dainInitialized).toBe(true);
});
