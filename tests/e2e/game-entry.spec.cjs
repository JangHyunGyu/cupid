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

for (const pageName of ['index.html', 'index-en.html', 'game.html', 'game-en.html']) {
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
        }
        expect(errors).toEqual([]);
    });
}

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

test('main free-talk affinity pacing reaches 100 only after sustained strong turns', async ({ page }) => {
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

        const saved = state.exportState();
        const restored = new window.StateManager();
        restored.importState(saved);
        return {
            changes,
            affinity: state.getAffinity('Seoyeon'),
            earnedGain: state.getStoryFreeTalkGain('Seoyeon'),
            restoredGain: restored.getStoryFreeTalkGain('Seoyeon')
        };
    });

    expect(result.changes).toEqual([3, 3, 3, 3, 2, 2, 2, 2]);
    expect(result.affinity).toBe(100);
    expect(result.earnedGain).toBe(20);
    expect(result.restoredGain).toBe(20);
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
                hasBehaviorAxes: prompt.includes('speech, initiative, touch, restraint, refusal, and emotional openness')
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

test('legacy gallery progress gains incident state without relocking earned content', async ({ page }) => {
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
                    perfectEndingCleared: true
                }
            },
            cg: { ending_perfect_seoyeon: { unlocked: true } },
            bgm: { intro: { unlocked: true } }
        }));

        const progress = new window.GalleryProgress();
        const incidentState = progress.getGalleryIncidentState('seyoun');
        const unlockedBefore = progress.isFreeTalkUnlocked('seyoun');
        progress.changeCurrentAffinity('seyoun', -50);
        return {
            incidentState,
            unlockedBefore,
            unlockedAfter: progress.isFreeTalkUnlocked('seyoun'),
            currentAffinity: progress.getCurrentAffinity('seyoun'),
            maxAffinity: progress.getAffinity('seyoun'),
            cgStillUnlocked: progress.isUnlocked('cg', 'ending_perfect_seoyeon')
        };
    });

    expect(result.incidentState.completedTurns).toBe(0);
    expect(result.unlockedBefore).toBe(true);
    expect(result.unlockedAfter).toBe(true);
    expect(result.currentAffinity).toBe(50);
    expect(result.maxAffinity).toBe(100);
    expect(result.cgStillUnlocked).toBe(true);
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
