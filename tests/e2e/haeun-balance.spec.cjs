'use strict';

const { test, expect } = require('@playwright/test');
const { installAffinitySeeder } = require('./helpers/affinity-seed.cjs');
const { isMediaFixtureRequest } = require('./helpers/media-fixture.cjs');

const ready = page => page.waitForFunction(
    () => window.gameScriptsLoaded && window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering
);

async function installAiMock(page, handler) {
    await page.addInitScript(() => {
        const widgets = [];
        window.turnstile = {
            render(_host, options) { widgets.push(options); return widgets.length - 1; },
            execute(id) { queueMicrotask(() => widgets[id]?.callback('test-proof-' + id)); },
            remove() {}
        };
    });
    return page.route('**/*', route => {
        const request = route.request();
        if (request.method() !== 'POST' || isMediaFixtureRequest(request)) return route.continue();
        const url = new URL(request.url());
        if (url.hostname !== '127.0.0.1' && url.hostname !== 'localhost' && url.pathname !== '/api/ai') {
            return route.continue();
        }
        let body = {};
        try { body = request.postDataJSON() || {}; } catch (_) { return route.continue(); }
        if (url.pathname === '/api/ai') {
            return route.fulfill({ json: handler(body) });
        }
        return route.fulfill({ json: { ok: true, eventIds: (body.events || []).map(event => event.eventId) } });
    });
}

function soloJson(text, affinity, extra = {}) {
    return {
        affinityDecision: { status: 'evaluated' },
        choices: [{
            message: {
                content: JSON.stringify({
                    segments: [{ type: 'dialogue', text }],
                    expression: 'normal',
                    affinity,
                    affinityEvaluation: { status: 'evaluated' },
                    forcedSexualViolation: 'none',
                    ...extra
                })
            }
        }]
    };
}

function groupJson(body, affinitiesBySpeaker, text = '네, 계속 말씀하세요.') {
    return {
        affinityDecision: { status: 'evaluated' },
        choices: [{
            message: {
                content: JSON.stringify({
                    conversations: body.responseSpeakers.map(speaker => ({
                        name: speaker.name,
                        segments: [{ type: 'dialogue', text }],
                        expression: 'normal',
                        affinity: affinitiesBySpeaker[speaker.id] ?? 1,
                        affinityEvaluation: { status: 'evaluated' }
                    }))
                })
            }
        }]
    };
}

async function sendSoloTurn(page, input) {
    await page.waitForFunction(() => !window.gameEngine.dialogueSystem.isCurrentlyTyping() && !window.gameEngine.freeTalkSystem.isProcessingChat);
    await page.evaluate(async text => {
        const e = window.gameEngine;
        e.dialogueSystem.typingSpeed = 0;
        e.uiManager.chatInput.value = text;
        await e.freeTalkSystem.sendChatMessage(id => e.sceneRenderer.getScene(id));
    }, input);
}

async function sendGroupTurn(page, input) {
    await page.waitForFunction(() => !window.gameEngine.dialogueSystem.isCurrentlyTyping() && !window.gameEngine.freeTalkSystem.isProcessingChat);
    await page.evaluate(text => {
        const e = window.gameEngine;
        e.dialogueSystem.typingSpeed = 0;
        e.uiManager.chatInput.value = text;
        window.__haeunBalanceTurn = e.freeTalkSystem.sendChatMessage(id => e.sceneRenderer.getScene(id));
    }, input);
    await page.waitForFunction(() => window.gameEngine.freeTalkSystem._groupAdvanceResolver);
    await page.evaluate(() => window.gameEngine.freeTalkSystem.advanceGroupMessageQueue());
    await page.evaluate(() => window.__haeunBalanceTurn);
}

test('Day 5 misunderstanding group grants +6 to Haeun only on turn 5 and persists across reload', async ({ page }) => {
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await installAiMock(page, body => groupJson(body, { Seoyeon: 1, Haeun: 1 }));
    await installAffinitySeeder(page);
    await page.goto('/game.html', { waitUntil: 'domcontentloaded' });
    await ready(page);

    await page.evaluate(async () => {
        const e = window.gameEngine;
        e.dialogueSystem.typingSpeed = 0;
        e.stateManager.currentDay = 5;
        window.cupidTestSeedAffinities({ Seoyeon: 65, Haeun: 12 });
        e.stateManager.flags = { day5_haeun_rival: 'Seoyeon', day5_haeun_misunderstanding_started: true };
        await e.renderScene('day5_haeun_seoyeon_group_talk');
    });

    for (let turn = 0; turn < 4; turn++) {
        await sendGroupTurn(page, '오해야. 하은이는 나를 도우려던 것뿐이야.');
    }
    const beforeFinal = await page.evaluate(() => ({
        haeun: window.gameEngine.stateManager.getAffinity('Haeun'),
        seoyeon: window.gameEngine.stateManager.getAffinity('Seoyeon'),
        flag: window.gameEngine.stateManager.getFlag('completed_bonus_day5_haeun_seoyeon_group_talk')
    }));
    expect(beforeFinal).toEqual({ haeun: 16, seoyeon: 69, flag: false });

    await sendGroupTurn(page, '하은이 입장도 난처했지? 내가 제대로 설명할게.');
    await page.waitForFunction(() => !window.gameEngine.freeTalkSystem.isFreeTalking);

    const afterFinal = await page.evaluate(() => ({
        haeun: window.gameEngine.stateManager.getAffinity('Haeun'),
        seoyeon: window.gameEngine.stateManager.getAffinity('Seoyeon'),
        flag: window.gameEngine.stateManager.getFlag('completed_bonus_day5_haeun_seoyeon_group_talk')
    }));
    expect(afterFinal).toEqual({ haeun: 23, seoyeon: 70, flag: true });

    await page.reload({ waitUntil: 'domcontentloaded' });
    await ready(page);
    const persisted = await page.evaluate(() => ({
        haeun: window.gameEngine.stateManager.getAffinity('Haeun'),
        seoyeon: window.gameEngine.stateManager.getAffinity('Seoyeon'),
        flag: window.gameEngine.stateManager.getFlag('completed_bonus_day5_haeun_seoyeon_group_talk')
    }));
    expect(persisted).toEqual({ haeun: 23, seoyeon: 70, flag: true });
    expect(errors).toEqual([]);
});

for (const { label, extraTurnGain, expectedAffinity, expectedScene } of [
    { label: 'all +1 turns reach 99 and fall back', extraTurnGain: 1, expectedAffinity: 99, expectedScene: 'day5_haeun_fallback' },
    { label: 'one +2 turn reaches 100 and unlocks ending', extraTurnGain: 2, expectedAffinity: 100, expectedScene: 'day5_ending_haeun' }
]) {
    test(`45-gate post-declaration path: ${label}`, async ({ page }) => {
        test.setTimeout(90000);
        const errors = [];
        let soloCalls = 0;
        page.on('pageerror', e => errors.push(e.message));
        await installAiMock(page, body => {
            if (body.responseSpeakers?.length === 2) {
                return groupJson(body, { Yuna: -1, Haeun: 1 }, '이해해 보려고 할게요.');
            }
            soloCalls += 1;
            const gain = soloCalls === 6 ? extraTurnGain : 1;
            return soloJson('이야기해 줘서 고마워요.', gain);
        });
        await installAffinitySeeder(page);
        await page.goto('/game.html', { waitUntil: 'domcontentloaded' });
        await ready(page);

        await page.evaluate(async () => {
            const e = window.gameEngine;
            e.dialogueSystem.typingSpeed = 0;
            e.stateManager.currentDay = 5;
            window.cupidTestSeedAffinities({ Haeun: 45, Yuna: 80 });
            e.stateManager.flags = { route_yuna: true, day4_confession_accepted: true, isDating_Yuna: true, messaged_day5_haeun_personal: true };
            await e.renderScene('after5_start');
            await e.renderScene('day5_haeun_route_choice');
            await e.executeChoice(e.sceneRenderer.getScene('day5_haeun_route_choice').choices[0]);
            for (let step = 0; step < 4; step++) {
                const scene = e.sceneRenderer.getScene(e.sceneRenderer.currentSceneId);
                if (scene.type === 'group_free_talk') break;
                await e.renderScene(scene.next);
            }
        });
        expect(await page.evaluate(() => window.gameEngine.stateManager.getAffinity('Haeun'))).toBe(65);

        for (let turn = 0; turn < 3; turn++) {
            await sendGroupTurn(page, '하은이를 선택한 이유를 솔직하게 말할게.');
        }
        await page.waitForFunction(() => !window.gameEngine.freeTalkSystem.isFreeTalking);
        expect(await page.evaluate(() => window.gameEngine.stateManager.getAffinity('Haeun'))).toBe(75);

        await page.evaluate(async () => {
            const e = window.gameEngine;
            e.dialogueSystem.typingSpeed = 0;
            await e.renderScene('day5_haeun_private_1');
        });
        for (let turn = 0; turn < 5; turn++) {
            await sendSoloTurn(page, '네가 부담 갖지 않도록 내가 먼저 이야기할게.');
        }
        await page.waitForFunction(() => !window.gameEngine.freeTalkSystem.isFreeTalking);
        expect(await page.evaluate(() => window.gameEngine.stateManager.getAffinity('Haeun'))).toBe(87);

        await page.evaluate(async () => {
            const e = window.gameEngine;
            e.dialogueSystem.typingSpeed = 0;
            await e.renderScene('day5_haeun_walk');
            await e.renderScene('day5_haeun_private_2');
        });
        for (let turn = 0; turn < 5; turn++) {
            await sendSoloTurn(page, '오늘 네 마음이 어떤지 천천히 들려줘.');
        }
        await page.waitForFunction(() => !window.gameEngine.freeTalkSystem.isFreeTalking);

        const result = await page.evaluate(async () => {
            const e = window.gameEngine;
            const affinity = e.stateManager.getAffinity('Haeun');
            await e.renderScene('day5_haeun_romance_check');
            return { affinity, sceneId: e.sceneRenderer.currentSceneId };
        });
        expect(result).toEqual({ affinity: expectedAffinity, sceneId: expectedScene });
        expect(errors).toEqual([]);
    });
}

test('haeun_freetalk awards +6 completion bonus only on turn 5', async ({ page }) => {
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await installAiMock(page, () => soloJson('오늘 말씀 감사해요.', 1));
    await installAffinitySeeder(page);
    await page.goto('/game.html', { waitUntil: 'domcontentloaded' });
    await ready(page);

    await page.evaluate(async () => {
        const e = window.gameEngine;
        e.dialogueSystem.typingSpeed = 0;
        e.stateManager.currentDay = 3;
        window.cupidTestSeedAffinities({ Haeun: 0 });
        await e.renderScene('haeun_freetalk');
    });

    for (let turn = 0; turn < 4; turn++) {
        await sendSoloTurn(page, '오늘 학생회 준비 때문에 많이 바빴지?');
    }
    const beforeFinal = await page.evaluate(() => ({
        haeun: window.gameEngine.stateManager.getAffinity('Haeun'),
        flag: window.gameEngine.stateManager.getFlag('completed_bonus_haeun_freetalk')
    }));
    expect(beforeFinal).toEqual({ haeun: 4, flag: false });

    await sendSoloTurn(page, '무리하지 말고 잠깐이라도 쉬면서 해.');
    await page.waitForFunction(() => !window.gameEngine.freeTalkSystem.isFreeTalking);

    const afterFinal = await page.evaluate(() => ({
        haeun: window.gameEngine.stateManager.getAffinity('Haeun'),
        flag: window.gameEngine.stateManager.getFlag('completed_bonus_haeun_freetalk')
    }));
    expect(afterFinal).toEqual({ haeun: 11, flag: true });
    expect(errors).toEqual([]);
});

test('skipping personal or group FreeTalk grants no completion bonus', async ({ page }) => {
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await installAiMock(page, () => soloJson('응', 1));
    await installAffinitySeeder(page);
    await page.goto('/game.html', { waitUntil: 'domcontentloaded' });
    await ready(page);

    const soloSkipped = await page.evaluate(async () => {
        const e = window.gameEngine;
        e.dialogueSystem.typingSpeed = 0;
        e.uiManager.showModal = async () => true;
        e.stateManager.currentDay = 3;
        window.cupidTestSeedAffinities({ Haeun: 0 });
        await e.renderScene('haeun_freetalk');
        await e.freeTalkSystem.skipFreeTalk();
        return {
            haeun: e.stateManager.getAffinity('Haeun'),
            flag: e.stateManager.getFlag('completed_bonus_haeun_freetalk'),
            active: e.freeTalkSystem.isFreeTalking
        };
    });
    expect(soloSkipped).toEqual({ haeun: 0, flag: false, active: false });

    const groupSkipped = await page.evaluate(async () => {
        const e = window.gameEngine;
        e.dialogueSystem.typingSpeed = 0;
        e.uiManager.showModal = async () => true;
        e.stateManager.currentDay = 5;
        window.cupidTestSeedAffinities({ Seoyeon: 65, Haeun: 12 });
        e.stateManager.flags = { day5_haeun_rival: 'Seoyeon', day5_haeun_misunderstanding_started: true };
        await e.renderScene('day5_haeun_seoyeon_group_talk');
        await e.freeTalkSystem.skipFreeTalk();
        return {
            haeun: e.stateManager.getAffinity('Haeun'),
            flag: e.stateManager.getFlag('completed_bonus_day5_haeun_seoyeon_group_talk'),
            active: e.freeTalkSystem.isFreeTalking
        };
    });
    expect(groupSkipped).toEqual({ haeun: -8, flag: false, active: false });
    expect(errors).toEqual([]);
});

test('truncated final reply still awards +6 completion bonus on haeun_freetalk', async ({ page }) => {
    const errors = [];
    let mode = 'normal';
    page.on('pageerror', e => errors.push(e.message));
    await installAiMock(page, () => {
        if (mode === 'truncated') {
            return { choices: [{ message: { content: '{"segments":[{"type":"dialogue","text":"선배, 잠깐만요...' } }] };
        }
        return soloJson('차근차근 들어줘서 고마워요.', 1);
    });
    await installAffinitySeeder(page);
    await page.goto('/game.html', { waitUntil: 'domcontentloaded' });
    await ready(page);

    await page.evaluate(async () => {
        const e = window.gameEngine;
        e.dialogueSystem.typingSpeed = 0;
        e.stateManager.currentDay = 3;
        window.cupidTestSeedAffinities({ Haeun: 0 });
        await e.renderScene('haeun_freetalk');
    });
    for (let turn = 0; turn < 4; turn++) {
        await sendSoloTurn(page, '하은이 얘기 좀 더 들려줄래?');
    }
    mode = 'truncated';
    await sendSoloTurn(page, '잠깐 쉬면서 천천히 얘기하자.');
    await page.waitForFunction(() => !window.gameEngine.freeTalkSystem.isFreeTalking);

    const truncatedResult = await page.evaluate(() => ({
        turns: window.gameEngine.freeTalkSystem.freeTalkTurns,
        haeun: window.gameEngine.stateManager.getAffinity('Haeun'),
        flag: window.gameEngine.stateManager.getFlag('completed_bonus_haeun_freetalk')
    }));
    expect(truncatedResult).toEqual({ turns: 5, haeun: 10, flag: true });
    expect(errors).toEqual([]);
});

test('empty final reply rolls back turn without bonus and retries cleanly', async ({ page }) => {
    const errors = [];
    let mode = 'normal';
    page.on('pageerror', e => errors.push(e.message));
    await installAiMock(page, () => {
        if (mode === 'empty') {
            return { choices: [{ message: { content: '' } }] };
        }
        return soloJson('차근차근 들어줘서 고마워요.', 1);
    });
    await installAffinitySeeder(page);
    await page.goto('/game.html', { waitUntil: 'domcontentloaded' });
    await ready(page);
    await page.evaluate(async () => {
        const e = window.gameEngine;
        e.dialogueSystem.typingSpeed = 0;
        e.stateManager.currentDay = 3;
        window.cupidTestSeedAffinities({ Haeun: 0 });
        await e.renderScene('haeun_freetalk');
    });
    for (let turn = 0; turn < 4; turn++) {
        await sendSoloTurn(page, '하은이 얘기 좀 더 들려줄래?');
    }
    mode = 'empty';
    await sendSoloTurn(page, '빈 응답 테스트 턴이야.');

    const afterEmpty = await page.evaluate(() => ({
        turns: window.gameEngine.freeTalkSystem.freeTalkTurns,
        haeun: window.gameEngine.stateManager.getAffinity('Haeun'),
        flag: window.gameEngine.stateManager.getFlag('completed_bonus_haeun_freetalk'),
        active: window.gameEngine.freeTalkSystem.isFreeTalking
    }));
    expect(afterEmpty).toEqual({ turns: 4, haeun: 4, flag: false, active: true });

    mode = 'normal';
    await sendSoloTurn(page, '다시 제대로 얘기해 볼까?');
    await page.waitForFunction(() => !window.gameEngine.freeTalkSystem.isFreeTalking);
    const afterRetry = await page.evaluate(() => ({
        turns: window.gameEngine.freeTalkSystem.freeTalkTurns,
        haeun: window.gameEngine.stateManager.getAffinity('Haeun'),
        flag: window.gameEngine.stateManager.getFlag('completed_bonus_haeun_freetalk')
    }));
    expect(afterRetry).toEqual({ turns: 5, haeun: 11, flag: true });
    expect(errors).toEqual([]);
});

test('non-romance contact guard exempts named other-heroine touches and idioms in live engine', async ({ page }) => {
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await installAiMock(page, body => {
        if (body.responseSpeakers?.length === 2) {
            return groupJson(body, { Seoyeon: 1, Haeun: 2 }, '무슨 말인지 알겠어요.');
        }
        return soloJson('고마워요, 선배.', 2);
    });
    await installAffinitySeeder(page);
    await page.goto('/game.html', { waitUntil: 'domcontentloaded' });
    await ready(page);

    await page.evaluate(async () => {
        const e = window.gameEngine;
        e.dialogueSystem.typingSpeed = 0;
        e.stateManager.currentDay = 5;
        window.cupidTestSeedAffinities({ Seoyeon: 65, Haeun: 12 });
        e.stateManager.flags = { day5_haeun_rival: 'Seoyeon', day5_haeun_misunderstanding_started: true };
        await e.renderScene('day5_haeun_seoyeon_group_talk');
    });

    await sendGroupTurn(page, '*서연의 손을 잡으며* 오해야, 내 말 좀 들어 줘.');
    expect(await page.evaluate(() => window.gameEngine.stateManager.getAffinity('Haeun'))).toBe(14);

    await sendGroupTurn(page, '*손을 잡으며* 오해야.');
    expect(await page.evaluate(() => window.gameEngine.stateManager.getAffinity('Haeun'))).toBe(4);

    await page.evaluate(async () => {
        const e = window.gameEngine;
        e.dialogueSystem.typingSpeed = 0;
        e.stateManager.currentDay = 3;
        window.cupidTestSeedAffinities({ Haeun: 10 });
        await e.renderScene('haeun_freetalk');
    });

    await sendSoloTurn(page, '학생회실 문손잡이를 잡으며 들어간다. 하은아, 오늘 고생 많았어.');
    expect(await page.evaluate(() => window.gameEngine.stateManager.getAffinity('Haeun'))).toBe(12);
    expect(errors).toEqual([]);
});
