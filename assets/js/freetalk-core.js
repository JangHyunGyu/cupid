/**
 * CupidFreeTalkCore
 *
 * 게임 프리토킹과 엔딩 갤러리 프리토킹이 공유하는 순수 로직입니다.
 * DOM, 저장소, 네트워크 호출을 직접 다루지 않아 두 화면의 기존 동작과
 * 수명 주기를 바꾸지 않습니다.
 */
(function exposeCupidFreeTalkCore(global) {
    'use strict';

    const CACHE_BOUNDARY_MARKER = '===CACHE_BOUNDARY===';
    const FAILOVER_HTTP_STATUSES = new Set([408, 422, 425, 429]);
    const RETRY_HTTP_STATUSES = new Set([408, 425, 429]);
    const AFFINITY_CHANGE_MIN = -50;
    const AFFINITY_CHANGE_MAX = 5;

    function normalizeAffinityChange(value) {
        const numeric = Number(value);
        if (!Number.isFinite(numeric)) return 0;
        return Math.max(
            AFFINITY_CHANGE_MIN,
            Math.min(AFFINITY_CHANGE_MAX, Math.round(numeric))
        );
    }

    function buildAffinityChangeGuidance(lang = 'ko') {
        const isKo = String(lang || 'ko').toLowerCase().startsWith('ko');
        if (isKo) {
            return `affinity에는 이번 사용자 입력과 이번 턴에 실제로 완결된 상호작용만 평가해 ${AFFINITY_CHANGE_MIN}~+${AFFINITY_CHANGE_MAX}의 정수를 넣으세요. 평범한 턴은 대부분 0입니다. 긍정 변화는 +1~+5, 가벼운 불편은 -1~-5, 명백한 무례나 신뢰 훼손은 -6~-15, 심각한 배신·경계 침해는 -16~-30, 극단적이거나 반복적인 폭언·강요·위협은 -31~-50만 사용하세요. 단순 인사나 일상적인 예의마다 점수를 주거나 호감도 설명으로 연기를 대신하지 마세요.`;
        }
        return `Set affinity to an integer from ${AFFINITY_CHANGE_MIN} to +${AFFINITY_CHANGE_MAX}, judging only the user's latest contribution and the interaction completed in this turn. Most ordinary turns are 0. Use +1 to +5 for earned positive change, -1 to -5 for mild discomfort, -6 to -15 for clear disrespect or damaged trust, -16 to -30 for a serious betrayal or boundary violation, and -31 to -50 only for extreme or repeated abuse, coercion, or threats. Do not award points for every generic greeting or replace roleplay with score commentary.`;
    }

    function normalizePromptBlockForCache(content) {
        if (!content) return '';
        return String(content)
            .replace(/\r\n?/g, '\n')
            .replace(/[ \t]+\n/g, '\n')
            .replace(/\n{3,}/g, '\n\n')
            .trim();
    }

    function shouldFailOverAiResponse(response) {
        return !!response && (
            FAILOVER_HTTP_STATUSES.has(response.status)
            || response.status >= 500
        );
    }

    function shouldRetryAiResponse(response) {
        return !!response && !response.ok && (
            RETRY_HTTP_STATUSES.has(response.status)
            || response.status >= 500
        );
    }

    function appendDynamicContext(content, addition) {
        if (!addition) return content || '';
        const base = normalizePromptBlockForCache(content || '');
        const dynamic = normalizePromptBlockForCache(addition);
        if (!dynamic) return base;
        if (base.includes(CACHE_BOUNDARY_MARKER)) {
            return `${base}\n${dynamic}`;
        }
        return `${base}\n${CACHE_BOUNDARY_MARKER}\n${dynamic}`;
    }

    function getStablePromptHash(content) {
        const prompt = normalizePromptBlockForCache(content || '');
        const markerIndex = prompt.indexOf(CACHE_BOUNDARY_MARKER);
        const stable = markerIndex >= 0 ? prompt.slice(0, markerIndex).trim() : prompt;
        let hash = 2166136261;
        for (let i = 0; i < stable.length; i++) {
            hash ^= stable.charCodeAt(i);
            hash = Math.imul(hash, 16777619);
        }
        return (hash >>> 0).toString(36);
    }

    function getStablePromptFingerprint(content) {
        const prompt = normalizePromptBlockForCache(content || '');
        const markerIndex = prompt.indexOf(CACHE_BOUNDARY_MARKER);
        const stable = markerIndex >= 0 ? prompt.slice(0, markerIndex).trim() : prompt;
        return `${stable.length.toString(36)}_${getStablePromptHash(stable)}`;
    }

    function encodeCacheKeyPart(value) {
        const text = String(value ?? '');
        try {
            return encodeURIComponent(text);
        } catch {
            return getStablePromptHash(text);
        }
    }

    function keepRuntimeBoundary(content) {
        const prompt = normalizePromptBlockForCache(content);
        const markerIndex = prompt.indexOf(CACHE_BOUNDARY_MARKER);
        if (markerIndex < 0) return prompt;

        const stable = prompt.slice(0, markerIndex).trim();
        const sceneContext = normalizePromptBlockForCache(
            prompt.slice(markerIndex + CACHE_BOUNDARY_MARKER.length)
        );
        return [stable, CACHE_BOUNDARY_MARKER, sceneContext].filter(Boolean).join('\n');
    }

    function recentPhraseMatches(pattern, text) {
        pattern.lastIndex = 0;
        return pattern.test(text || '');
    }

    function buildRecentExpressionRepetitionGuard(messages = [], lang = 'ko') {
        const allMessages = Array.isArray(messages) ? messages : [];
        const assistantTexts = allMessages
            .filter(message =>
                message
                && message.role === 'assistant'
                && typeof message.content === 'string'
                && String(message.content || '').trim()
            )
            .slice(-6)
            .map(message => String(message.content || '').replace(/\s+/g, ' ').trim())
            .filter(Boolean);

        if (assistantTexts.length < 3) return '';

        const latestUserText = String([...allMessages].reverse().find(message =>
            message
            && message.role === 'user'
            && typeof message.content === 'string'
        )?.content || '');

        const isKo = lang === 'ko';
        const formatList = (items, limit = 6) => items.filter(Boolean).slice(0, limit).join(', ');
        const normalizeOpening = (text = '') => {
            const firstSentence = String(text || '').replace(/\\n/g, ' ').split(/[.!?。！？\n]/u)[0] || '';
            return firstSentence
                .replace(/^[\s"'“”‘’`*<>\[\]{}()]+/g, '')
                .replace(/\s+/g, ' ')
                .trim()
                .slice(0, 34);
        };

        const openingCounts = assistantTexts
            .map(normalizeOpening)
            .filter(opening => opening.length >= 8)
            .reduce((map, opening) => {
                const key = opening
                    .toLowerCase()
                    .replace(/["'“”‘’`*<>\[\]{}(),.?!:;，。！？]/g, '')
                    .replace(/\s+/g, ' ')
                    .trim()
                    .slice(0, 24);
                if (!key || key.length < 6) return map;
                const entry = map.get(key) || { label: opening, count: 0 };
                entry.count += 1;
                map.set(key, entry);
                return map;
            }, new Map());

        const repeatedOpenings = [...openingCounts.values()]
            .filter(entry => entry.count >= 2)
            .map(entry => `"${entry.label}"`);

        const stockPatterns = [
            { ko: '"결국"', en: '"eventually/in the end" transitions', pattern: /결국|끝내|마침내/iu },
            { ko: '"서로의 마음"', en: 'mutual-feeling summaries', pattern: /서로의\s*마음|마음을\s*확인|진심을\s*확인|감정을\s*확인|마음이\s*닿/iu },
            { ko: '"다시 한번"', en: '"once again" beats', pattern: /다시\s*한\s*번|한\s*번\s*더|다시금/iu },
            { ko: '"작게 웃었다"와 비슷한 표현', en: 'small-smile beats', pattern: /작게\s*웃|살짝\s*웃|희미하게\s*웃|쓴웃음|미소를\s*(?:지|띠|머금)/iu },
            { ko: '"고개를 끄덕였다"와 비슷한 표현', en: 'nod/lift/lower-head beats', pattern: /고개(?:를)?\s*(?:끄덕|숙|들|돌|젓)/iu },
            { ko: '감정을 정리하며 끝내는 문장', en: 'neat emotional-summary endings', pattern: /감정(?:을|이)?\s*(?:정리|가라앉|흘러|번져)|마음(?:을|이)?\s*(?:정리|가라앉|흘러|번져)/iu }
        ];

        const stockHits = stockPatterns
            .filter(item =>
                assistantTexts.reduce(
                    (count, text) => count + (recentPhraseMatches(item.pattern, text) ? 1 : 0),
                    0
                ) >= 2
                && !recentPhraseMatches(item.pattern, latestUserText)
            )
            .map(item => isKo ? item.ko : item.en);

        if (repeatedOpenings.length === 0 && stockHits.length === 0) return '';

        const guardLines = [];
        if (stockHits.length) {
            guardLines.push(isKo
                ? `- 최근 되풀이한 상투 표현: ${formatList(stockHits)}`
                : `- Recent stock expressions: ${formatList(stockHits)}`);
        }
        if (repeatedOpenings.length) {
            guardLines.push(isKo
                ? `- 되풀이한 문장 첫머리: ${formatList(repeatedOpenings, 4)}`
                : `- Repeated sentence openings: ${formatList(repeatedOpenings, 4)}`);
        }
        const guardBody = guardLines.join('\n');
        return isKo
            ? `\n\n[표현 겹침]\n${guardBody}\n사용자가 방금 다시 꺼낸 표현이 아니라면 이번 답변에서 그대로 되풀이하지 말고, 같은 캐릭터가 지금 할 법한 다른 말이나 행동으로 자연스럽게 이어가세요.`
            : `\n\n[Repeated wording]\n${guardBody}\nUnless the user just brought one of these back, avoid repeating it verbatim and continue with a different line or action that still feels like this character.`;
    }

    function sanitizeLatestUserText(text) {
        return String(text || '')
            .replace(/data:image\/[a-zA-Z0-9.+-]+;base64,[A-Za-z0-9+/=\s]+/g, ' ')
            .replace(/https?:\/\/\S+/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function truncateLatestUserText(text, maxChars = 420) {
        const cleaned = sanitizeLatestUserText(text);
        if (cleaned.length <= maxChars) return cleaned;
        return `${cleaned.slice(0, maxChars)}...`;
    }

    function findLatestUserText(messages = [], fallbackText = '') {
        if (Array.isArray(messages)) {
            for (let i = messages.length - 1; i >= 0; i--) {
                const message = messages[i];
                if (!message || message.role !== 'user') continue;
                const text = String(message.content || '').trim();
                if (text) return text;
            }
        }
        return String(fallbackText || '').trim();
    }

    function buildLatestUserCanonBlock(messages = [], lang = 'ko', fallbackText = '') {
        const latestText = findLatestUserText(messages, fallbackText);
        if (!latestText) return '';

        const excerpt = truncateLatestUserText(latestText);
        const isKo = String(lang || 'ko').toLowerCase().startsWith('ko');

        if (isKo) {
            return `\n\n**[이번 턴 사용자 입력]**
최신 사용자 입력: """${excerpt}"""
- 사용자가 확정한 극중 사실·상태·사건 결과는 가장 최근의 극중 사실입니다. 이전 설정, 캐릭터 카드, 저장 요약, 장면 상태와 충돌해도 같습니다. 캐릭터별 사실 잠금만 예외입니다.
- 완료형으로 쓴 행동은 성적 접촉도 이미 일어난 사건이며 시도·착각·바람으로 되돌리지 않습니다. 이는 캐릭터의 동의나 호응을 대신 정하지 않으므로, 캐릭터는 자신의 성격·관계·경계에 맞게 반응합니다.
- 최신 입력의 "내/제 손·입술·손끝"은 사용자 캐릭터의 몸입니다.
- 끝난 일을 되돌리지 않고 현재 캐릭터의 다음 반응으로 이어갑니다. 사용자의 말·행동·장면 맥락에서 반응·감정·속마음을 자연스럽게 추론하거나 서술할 수 있지만, 이번 입력에서 명확히 밝힌 상태·선택·동의·거절과 충돌시키지는 않습니다.`;
        }

        return `\n\n**[Latest-turn user canon]**
Latest user: """${excerpt}"""
- Explicit in-world facts, states, and outcomes in this message are the newest canon, even when it conflicts with prior setup, the character card, saved summary, or scene state. Only character-specific canon locks remain exceptions.
- A user action written as completed, including sexual contact, already happened in the scene and must not be reduced to an attempt, misperception, or wish. This does not decide the character's consent or reciprocation; the character responds from their personality, relationship, and boundaries.
- "My hand/fingertip/lips" in the latest input belong to the user character.
- Continue with the current character's reaction without undoing a completed result. You may naturally infer or narrate the user's response, emotion, or inner thought from their words, actions, and the scene context, while keeping it compatible with any state, choice, consent, or refusal explicitly stated in the current input.`;
    }

    global.CupidFreeTalkCore = Object.freeze({
        CACHE_BOUNDARY_MARKER,
        FAILOVER_HTTP_STATUSES,
        RETRY_HTTP_STATUSES,
        AFFINITY_CHANGE_MIN,
        AFFINITY_CHANGE_MAX,
        normalizeAffinityChange,
        buildAffinityChangeGuidance,
        normalizePromptBlockForCache,
        shouldFailOverAiResponse,
        shouldRetryAiResponse,
        appendDynamicContext,
        getStablePromptHash,
        getStablePromptFingerprint,
        encodeCacheKeyPart,
        keepRuntimeBoundary,
        buildRecentExpressionRepetitionGuard,
        sanitizeLatestUserText,
        truncateLatestUserText,
        findLatestUserText,
        buildLatestUserCanonBlock
    });
})(window);
