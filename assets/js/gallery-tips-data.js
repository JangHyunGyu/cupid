'use strict';

/**
 * ============================================================================
 * GalleryTipsData - 프리토킹 팁 데이터 (공개, 스포일러 최소)
 * ============================================================================
 *
 * 갤러리의 "팁" 탭에서 쓰는 정적 데이터입니다. 진행도와 무관하게 누구에게나 보입니다.
 * - items: 언어와 무관한 목록 정의(순서, 그룹, 아이콘, 캐릭터 ID)
 * - copy[lang].items[id]: 언어별 제목(일반 팁만)·요약·본문(points)
 * - 캐릭터 팁의 제목은 GalleryData의 캐릭터 이름을 사용합니다.
 * - gateByMet 항목(하은)은 캐릭터를 만나기 전에는 "???" 잠금 행으로만 보입니다.
 *
 * 내용은 게임 코드 기준입니다(턴당 +3 한도, 그룹은 캐릭터별 독립 +3, 그룹 건너뛰기 -20,
 * 엔딩 후 0점 등). 내부 프롬프트 문구는 옮기지 않고 경향만 풀어 썼습니다.
 * 수치가 바뀌면 이 파일과 tests/gallery-tips.test.cjs를 함께 갱신하세요.
 */
class GalleryTipsData {
    static LANGUAGES = Object.freeze(['ko', 'en', 'es', 'ja', 'fr', 'de', 'pt', 'zh']);

    static items = Object.freeze([
        { id: 'basics', group: 'general', icon: '💬' },
        { id: 'earn', group: 'general', icon: '✨' },
        { id: 'group', group: 'general', icon: '👥' },
        { id: 'mistakes', group: 'general', icon: '⚠️' },
        { id: 'pace', group: 'general', icon: '🧭' },
        { id: 'timing', group: 'general', icon: '⏳' },
        { id: 'perfect', group: 'general', icon: '🏆' },
        { id: 'privacy', group: 'general', icon: '🔒' },
        { id: 'seyoun', group: 'character', charId: 'seyoun', icon: '📋' },
        { id: 'yuna', group: 'character', charId: 'yuna', icon: '📚' },
        { id: 'dain', group: 'character', charId: 'dain', icon: '🏐' },
        { id: 'teacher', group: 'character', charId: 'teacher', icon: '🖋️' },
        { id: 'nurse', group: 'character', charId: 'nurse', icon: '🌿' },
        { id: 'haeun', group: 'character', charId: 'haeun', icon: '🤝', gateByMet: true }
    ]);

    static copy = {
        ko: {
            tab: '💡 팁',
            heading: '프리토킹 팁',
            intro: '직접 입력하는 대화에서 호감도를 잘 쌓는 방법을 모았어요. 카드를 누르면 자세한 설명이 열립니다. 줄거리는 알려 주지 않으니 안심하고 읽어도 돼요. AI가 매번 판단하기 때문에 같은 말도 점수가 다르게 나올 수 있어요. 아래 내용은 경향일 뿐 보장은 아닙니다.',
            generalHeading: '공통 팁',
            characterHeading: '캐릭터별 팁',
            lockedTitle: '???',
            lockedHint: '아직 만나지 못한 인물이에요.',
            closeLabel: '닫기',
            openLabel: '자세히 보기',
            dialogSuffix: '프리토킹 팁',
            items: {
                basics: { title: '대화 횟수와 점수 한도', summary: '한 장면에서 3~5번, 메시지 하나당 최대 +3이에요.', points: [
                    '자유 대화 장면마다 보낼 수 있는 메시지 수가 정해져 있어요. 화면의 남은 횟수로 확인할 수 있고, 장면에 따라 3번이나 5번입니다.',
                    '메시지 하나로 오르는 호감도는 아무리 좋아도 최대 +3이에요. 한 문장으로 단번에 끌어올리기는 어렵고, 여러 장면에 걸쳐 꾸준히 쌓아야 해요.',
                    '답변은 AI가 그 자리에서 만들어서 같은 말도 결과가 다를 수 있어요.'
                ] },
                earn: { title: '점수가 잘 붙는 말', summary: '따뜻함, 솔직함, 그리고 기억하고 있다는 마음이에요.', points: [
                    '따뜻함, 솔직함, 관심, 책임감이 느껴지는 말에 점수가 붙어요. 습관적인 인사나 형식적인 맞장구, 한 단어짜리 대답으로는 거의 오르지 않아요.',
                    '짧게 쓴다고 깎이지는 않아요. 다만 짧은 말은 점수도 작은 편이에요.',
                    '방금 장면에서 일어난 일이나 캐릭터가 전에 들려준 이야기를 기억한다는 걸 보여 주면 반응이 한결 따뜻해져요. 칭찬 한마디보다 구체적인 기억이 더 잘 통해요.'
                ] },
                group: { title: '그룹 대화', summary: '캐릭터마다 점수를 따로 받아요. 중간에 건너뛰면 각각 -20이에요.', points: [
                    '두 사람 이상이 함께 있는 장면에서는 메시지 하나에 여러 캐릭터가 반응해요. 점수는 캐릭터마다 따로 매겨져서 각자 최대 +3까지 오를 수 있어요.',
                    '두 사람을 모두 챙기면 둘 다 점수를 얻어요. 한 사람 편만 들면 다른 사람은 서운해서 점수가 내려갈 수 있어요.',
                    '그룹 대화를 중간에 건너뛰면 함께한 두 캐릭터의 호감도가 각각 20 떨어져요. 건너뛰기 전에 안내 창이 먼저 뜹니다. 1:1 대화는 건너뛰어도 감점은 없지만 남은 메시지의 점수를 놓치게 돼요.'
                ] },
                mistakes: { title: '감점과 만회', summary: '무례함과 거짓말은 크게 깎여요. 진심 어린 사과는 도움이 돼요.', points: [
                    '무례한 말, 모욕, 거짓말, 약속 어기기, 선 넘기는 두 자릿수 감점이 될 수 있어요. 반복되거나 심하면 더 크게 깎입니다. 캐릭터가 싫어한다고 보여 준 말을 되풀이해도 감점입니다.',
                    '캐릭터가 웃으며 넘겼다고 안심하지 마세요. 표정과 호감도는 따로 움직여서 겉으로 괜찮아 보여도 호감도는 내려갈 수 있어요.',
                    '실수했다면 같은 메시지 안에서 진심으로 사과하고 설명하세요. 일부는 회복할 수 있어요. 시간이 지나면 풀리겠지 하고 두면 그대로 남습니다.'
                ] },
                pace: { title: '속도와 선', summary: '너무 빠른 접근은 거절당해요.', points: [
                    '호감도가 낮은데 너무 빨리 가까워지려 하거나 흐름에 맞지 않는 스킨십을 시도하면 거절당해서 0점이나 감점이 돼요.',
                    '호감도가 높아도 캐릭터는 싫다고 말할 수 있고 그 뜻은 존중돼요.',
                    '일어나지 않은 일을 있었던 것처럼 말하면 이야기가 어긋나요.'
                ] },
                timing: { title: '점수가 들어가는 때', summary: '엔딩 뒤와 이미 끝낸 장면에서는 오르지 않아요.', points: [
                    '엔딩을 본 뒤의 자유 대화는 호감도를 올리지도 내리지도 않아요. 점수가 필요하면 엔딩 전에 쌓아야 합니다.',
                    '이미 끝낸 장면을 다시 해도 그 장면의 점수는 다시 들어오지 않아요. 점수는 아직 하지 않은 장면에서 나옵니다.'
                ] },
                perfect: { title: '퍼펙트(PERFECT)를 노린다면', summary: '호감도 100과 4일차 고백이 필요해요.', points: [
                    '퍼펙트(PERFECT) 엔딩에는 호감도 100이 필요한데 고정 선택지만으로는 100에 닿지 않아요. 자유 대화에서도 점수를 꾸준히 쌓아야 해요.',
                    '4일차 고백이 받아들여져야 하고, 여러 사람과 겹친 약속이나 정리하지 못한 관계가 남아 있으면 안 돼요. 5일차로 미루면 뒤늦은 고백 굿 엔딩까지만 갈 수 있습니다.',
                    '3일차까지 모두에게 시간을 똑같이 나누면 누구와도 깊어지기 어려워요. 누구를 중심에 둘지 일찍 정하세요.'
                ] },
                privacy: { title: '개인정보와 저장', summary: '개인정보는 입력하지 말고, 저장소 허용을 확인하세요.', points: [
                    '입력한 내용은 서버를 거쳐 AI 모델로 전달돼요. 실명, 연락처, 계정 정보, 주소 같은 개인정보는 쓰지 마세요.',
                    '진행 상황은 브라우저에 저장돼요. 사이트 저장소를 허용해 두세요. 시크릿 모드에서는 진행이 남지 않을 수 있어요.',
                    '답변이 어색하거나 캐릭터답지 않을 때가 있어요. 그럴 땐 표현을 바꿔서 다시 시도해 보세요.'
                ] },
                seyoun: { summary: '지킨 약속과 작은 배려에 마음을 열어요.', points: [
                    '시간이나 계획을 구체적으로 말하고 실제로 지키는 사람에게 마음을 열어요. 약속을 지켰는지 눈여겨봅니다.',
                    '거창한 말보다 작고 현실적인 배려에 반응해요. 칭찬보다 그녀가 전에 들려준 이야기를 꺼내 보세요.',
                    '속마음을 보여 준 뒤에는 모든 걸 해결하려 들지 말고 곁에서 들어 주세요. 사생활을 여럿 앞에서 꺼내거나 자기 감정을 떠넘기는 건 싫어해요.',
                    '선택을 요구받았을 때 얼버무리지 마세요. 솔직하고 배려 있는 답이 상처를 줄여 줘요.',
                    '침착해 보여도 변명이나 지키지 못할 약속, 남의 시간을 낭비하는 일은 점수가 깎여요. 질투가 나면 목소리가 커지는 대신 질문이 날카로워지니 그럴 땐 피하지 말고 답하세요.'
                ] },
                yuna: { summary: '조용한 시간과 정확한 말이 잘 통해요.', points: [
                    '오래된 책, 별자리, 옛날 괴담 같은 이야기를 좋아해요. 말이 없어도 어색해하지 않고 침묵을 거절로 받아들이지도 않아요.',
                    '신뢰는 천천히 쌓여요. 사정을 캐묻거나 그녀의 개성을 구경거리처럼 대하면 신뢰를 잃어요. 연락 없이 약속을 깨도 마찬가지예요.',
                    '그녀처럼 짧고 관찰력 있는 말이 잘 통해요. 길게 쓰기보다 정확하게 쓰세요.',
                    '글이나 고민을 보여 주면 솔직하게 존중해 주고, 두려움을 논리로 반박하지 마세요.'
                ] },
                dain: { summary: '함께 뛰는 제안은 좋고, 동정은 금물이에요.', points: [
                    '배구, 리듬게임, 소보로빵과 딸기우유를 좋아해서 함께 움직이거나 겨루는 데이트를 신나게 즐겨요. 활동적이고 구체적이며 장난기 있는 제안이 잘 맞아요.',
                    '환자 취급이나 동정, 밀당, 두루뭉술한 약속을 싫어해요. 약해 보이게 대하지 마세요.',
                    '무릎 이야기가 나오면 본인이 말할 때까지 기다리고 대신 결정하지 마세요. 앞날을 대신 고쳐 주려 하거나 부상이 없던 일인 척하지 말고 그녀 편에 서 주세요.',
                    '장난과 승부욕은 잘 받아 줘요. 진지해질 때는 말수가 줄어드니 같이 조용해지고 농담을 거두세요.'
                ] },
                teacher: { summary: '선을 지키는 존중과 진솔한 관심이 통해요.', points: [
                    '재학 중에는 교사로서 선을 분명히 지켜요. 자기 일을 존중하고 솔직하며 맡은 몫을 제대로 해내는 사람에게 호감을 가져요. 연애 감정을 들이밀면 통하지 않아요.',
                    '잘 고친 문장, 조용한 서점, 끝까지 해내는 사람을 좋아해요. 그녀가 쓴 글에는 칭찬보다 솔직하고 깊이 있는 감상이 훨씬 값져요.',
                    '비밀을 지켜 달라거나 위로와 구원을 요구하지 마세요. 감정으로 교사와 학생의 선을 흐리려 하면 단호해져요. 그녀도 당신에게 감정을 돌봐 달라고 하지 않아요.',
                    '한 번의 큰 표현보다 여러 장면에 걸친 차분한 관심이 더 잘 통해요.'
                ] },
                nurse: { summary: '솔직함과 가벼운 온기에 마음을 열어요.', points: [
                    '느긋하고 장난기가 있어서 자기 상태를 솔직히 말하는 사람을 좋아해요. 로즈마리 향, 정돈된 보건실, 힘든 날 끝의 늦은 식사 이야기가 잘 통해요.',
                    '아픈 척하거나 치료를 핑계로 선을 넘거나 괜찮지 않은데 괜찮다고 하는 건 모두 역효과예요.',
                    '지친 속사정을 꺼내면 부담을 얹지 말고 들어 주세요. 그녀도 그렇게 들어 주고 당신이 환자가 되길 바라지 않아요.',
                    '그녀가 진심으로 걱정할 때는 짧고 따뜻하게 말해요. 농담을 더하지 말고 같은 온도로 답하세요.'
                ] },
                haeun: { summary: '구체적이고 진심 어린 배려가 가장 잘 통해요.', points: [
                    '직접 나눈 대화를 믿는 후배예요. 약속을 지키고 불편한 이야기도 끝까지 들어 주며 상처받은 사람에게서 눈을 돌리지 않는 사람을 신뢰해요.',
                    '구체적이고 진심 어린 배려에 가장 높은 점수를 줘요. 상황이나 망설임을 알아챘다는 걸 보여 주세요. 빈말, 공식 같은 칭찬, 평범한 예의는 거의 점수가 되지 않아요. 한두 마디 대꾸나 가볍게 던진 농담 한 줄도 마찬가지예요.',
                    '누구의 아픔이든 소문거리로 만들거나 책임을 피하면 신뢰를 잃어요. 존댓말을 쓰는 후배니 예의 있게 대하세요.',
                    '그녀가 연애 상대로 제안되기 전에는 연애 감정을 드러내거나 스킨십을 시도하지 마세요. 거절당하고 점수도 깎여요.'
                ] }
            }
        },
        en: {
            tab: '💡 Tips',
            heading: 'Free Talk Tips',
            intro: 'How to build affinity in the conversations you type yourself. Tap a card to read the details. There are no story spoilers. An AI judges every message, so the same line can score differently: treat these as tendencies, not guarantees.',
            generalHeading: 'General tips',
            characterHeading: 'Tips by character',
            lockedTitle: '???',
            lockedHint: 'You haven\u2019t met this character yet.',
            closeLabel: 'Close',
            openLabel: 'Read more',
            dialogSuffix: 'Free Talk tip',
            items: {
                basics: { title: 'Message limits and the score cap', summary: '3 to 5 messages per scene, at most +3 per message.', points: [
                    'Every free talk scene allows a fixed number of messages. The counter on screen shows how many are left: 3 or 5, depending on the scene.',
                    'A single message can add at most +3 affinity, however good it is. One perfect line will not carry you, so build up steadily across many scenes.',
                    'The AI writes each reply on the spot, so the same message can get a different result.'
                ] },
                earn: { title: 'What earns points', summary: 'Warmth, honesty, and showing you remember.', points: [
                    'Points go to messages that show warmth, honesty, attention, or responsibility. Routine greetings, polite filler, and one-word answers earn very little.',
                    'A short message is not penalized, but it rarely earns much either.',
                    'Showing that you remember what just happened in the scene, or something the character told you earlier, gets a warmer reaction. A specific memory beats a quick compliment.'
                ] },
                group: { title: 'Group talk', summary: 'Each character is scored separately, and skipping costs \u221220 each.', points: [
                    'In scenes with several characters, one message gets reactions from more than one of them. Each character is scored separately and can gain up to +3 from that message.',
                    'Looking out for both of them can earn points with both. Siding with only one may leave the other hurt and cost you points with her.',
                    'Skipping a group conversation lowers the affinity of both characters in it by 20 each. The game asks you to confirm first. Skipping a one-on-one scene costs nothing, but you give up the points from its remaining messages.'
                ] },
                mistakes: { title: 'Penalties and making amends', summary: 'Rudeness and lies cost a lot. A sincere apology helps.', points: [
                    'Rude remarks, insults, lies, broken promises, and crossing a boundary can each cost double digits, and repeated or serious cases cost more. Repeating something a character has shown she dislikes also costs you.',
                    'Do not relax just because a character laughed it off. Her expression and your affinity move separately, so you can lose points even when she looks fine.',
                    'If you slip, apologize sincerely and explain in the same message. That can win some of it back. Hoping it blows over on its own leaves the loss in place.'
                ] },
                pace: { title: 'Pace and boundaries', summary: 'Moving too fast gets turned down.', points: [
                    'Trying to get close too quickly at low affinity, or making a physical move that does not fit the moment, is turned down and scores zero or negative.',
                    'Even at high affinity a character can say no, and that answer is respected.',
                    'Claiming something happened when it did not makes the story drift.'
                ] },
                timing: { title: 'When points count', summary: 'Nothing after an ending, nothing from replayed scenes.', points: [
                    'Free talk after an ending neither raises nor lowers affinity. Any points you want must come before it.',
                    'Replaying a scene you have already finished does not award its points again. Points come from scenes you have not played yet.'
                ] },
                perfect: { title: 'Aiming for PERFECT', summary: 'You need affinity 100 and a Day 4 confession.', points: [
                    'A PERFECT ending needs affinity of 100, and the fixed choices alone cannot reach it. Free talk has to add points steadily.',
                    'Your Day 4 confession must be accepted, and no double-booked plans or tangled relationships may be left over. Waiting until Day 5 only leads as far as the \u201clate confession\u201d good ending.',
                    'If you split your time evenly through Day 3, it is hard to get close to anyone. Decide early whom you are focusing on.'
                ] },
                privacy: { title: 'Privacy and saving', summary: 'Keep personal info out, and allow site storage.', points: [
                    'What you type is sent through a server to an AI model. Do not enter your real name, contact details, account data, or address.',
                    'Your progress is saved in your browser. Allow site storage, because private browsing may not keep your progress.',
                    'Replies can occasionally feel off or out of character. If that happens, try again with different wording.'
                ] },
                seyoun: { summary: 'She opens up to kept promises and small kindnesses.', points: [
                    'She trusts people who name a concrete time or plan and then follow through. She notices whether you show up.',
                    'Small, practical gestures work better than speeches. Bring up something she told you earlier instead of a general compliment.',
                    'After she lets her guard down, listen beside her without trying to fix everything. She dislikes having private matters made public, and she does not want to carry your feelings.',
                    'Do not dodge when she asks you to choose. An honest, considerate answer keeps the hurt smaller.',
                    'She stays composed, but excuses, flaky promises, and wasting other people\u2019s time still cost points. When she is jealous her questions get sharper rather than louder, so answer them directly.'
                ] },
                yuna: { summary: 'Quiet company and precise words work best.', points: [
                    'She likes old books, constellations, and old ghost stories. Silence does not bother her, and she does not take it as rejection.',
                    'Trust builds slowly. Prying into her past or treating her individuality as a spectacle loses it, and so does vanishing or breaking a plan without warning.',
                    'Short, observant messages suit her, so go for precision over length.',
                    'When she shares her writing or her worries, respond honestly and respectfully, and do not argue her fears away with logic.'
                ] },
                dain: { summary: 'Active plans win her over. Pity does not.', points: [
                    'She likes volleyball, rhythm games, and soboro bread with strawberry milk, and she lights up at dates where you move or compete together. Offer plans that are active, specific, and playful.',
                    'She hates being treated as fragile, pity, mind games, and vague promises.',
                    'When her knee comes up, wait for her to speak and do not decide for her. Do not try to fix her future or pretend the injury is gone. Stay on her side.',
                    'Teasing and a competitive streak go over well. When she gets serious she gets quieter, so match her and drop the jokes.'
                ] },
                teacher: { summary: 'Respect within the line she keeps, and honest attention.', points: [
                    'During the school timeline she holds a firm professional line. She rewards respect for her work, honesty, and doing your own share well. Romantic pressure does not work on her.',
                    'She likes a well-fixed sentence, quiet bookshops, and people who finish what they start. Honest, thoughtful reactions to her writing mean far more to her than flattery.',
                    'Do not demand secrecy, comfort, or rescue from her, and do not lean on emotion to blur the teacher/student line, because she holds firm. She never asks you to look after her feelings either.',
                    'Steady, low-drama attention across several scenes works better than one big gesture.'
                ] },
                nurse: { summary: 'She warms to honesty and a light touch.', points: [
                    'She is relaxed and playful, and she likes people who say honestly how they feel. Rosemary, a tidy office, and a late meal after a hard day all go over well.',
                    'Faking being ill, using treatment as an excuse to cross a line, and saying \u201cI\u2019m fine\u201d when you are not all work against you.',
                    'When she talks about being worn out, listen without making her carry anything extra. She does the same for you and does not want you to become her patient.',
                    'Her real concern is short and warm. Answer in kind instead of adding more jokes.'
                ] },
                haeun: { summary: 'Specific, heartfelt care works best.', points: [
                    'She trusts what she hears in person. She values people who keep promises, listen to uncomfortable things to the end, and do not look away from someone who is hurt.',
                    'Specific, heartfelt care earns the most. Show that you noticed her situation or her hesitation. Empty phrases, formula compliments, and plain courtesy earn very little. One- or two-word replies and throwaway one-line jokes earn just as little.',
                    'Turning anyone\u2019s pain into gossip, or dodging responsibility, loses her trust. She speaks politely, so keep your tone respectful.',
                    'Until she is offered to you as a route, do not make romantic or physical approaches. They are turned down and cost points.'
                ] }
            }
        },
        es: {
            tab: '💡 Consejos',
            heading: 'Consejos de charla libre',
            intro: 'Cómo ganar afinidad en las conversaciones que escribes tú. Toca una tarjeta para ver los detalles. No hay spoilers de la historia. Una IA juzga cada mensaje, así que la misma frase puede puntuar distinto: son tendencias, no garantías.',
            generalHeading: 'Consejos generales',
            characterHeading: 'Consejos por personaje',
            lockedTitle: '???',
            lockedHint: 'Aún no conoces a este personaje.',
            closeLabel: 'Cerrar',
            openLabel: 'Ver más',
            dialogSuffix: 'Consejo de charla libre',
            items: {
                basics: { title: 'Mensajes y límite de puntos', summary: 'De 3 a 5 mensajes por escena, como máximo +3 por mensaje.', points: [
                    'Cada escena de charla libre permite un número fijo de mensajes. El contador en pantalla muestra cuántos quedan: 3 o 5, según la escena.',
                    'Un solo mensaje suma como máximo +3 de afinidad, por bueno que sea. Una frase perfecta no basta, así que acumula poco a poco a lo largo de varias escenas.',
                    'La IA escribe cada respuesta en el momento, así que el mismo mensaje puede dar un resultado distinto.'
                ] },
                earn: { title: 'Qué da puntos', summary: 'Calidez, sinceridad y demostrar que recuerdas.', points: [
                    'Dan puntos los mensajes con calidez, sinceridad, atención o responsabilidad. Los saludos de rutina, los comentarios de cortesía y las respuestas de una palabra suman muy poco.',
                    'Escribir poco no se penaliza, pero rara vez suma mucho.',
                    'Mostrar que recuerdas lo que acaba de pasar en la escena o algo que el personaje te contó antes provoca una reacción más cálida. Un recuerdo concreto vale más que un cumplido rápido.'
                ] },
                group: { title: 'Charla en grupo', summary: 'Cada personaje puntúa por separado y saltarla cuesta \u221220 a cada uno.', points: [
                    'En las escenas con varios personajes, un mensaje recibe reacciones de más de uno. Cada personaje puntúa por separado y puede ganar hasta +3 con ese mensaje.',
                    'Si cuidas de las dos, puedes ganar puntos con ambas. Si solo te pones de parte de una, la otra puede sentirse dolida y perderás puntos con ella.',
                    'Saltarte una conversación de grupo baja 20 puntos la afinidad de cada uno de los dos personajes. El juego te pide confirmación antes. Saltarte una escena a solas no se penaliza, pero pierdes los puntos de los mensajes restantes.'
                ] },
                mistakes: { title: 'Penalizaciones y cómo repararlas', summary: 'La grosería y las mentiras restan mucho. Una disculpa sincera ayuda.', points: [
                    'Las groserías, los insultos, las mentiras, las promesas rotas y cruzar un límite pueden restar dos cifras, y los casos repetidos o graves restan más. Repetir algo que el personaje ya mostró que no le gusta también resta.',
                    'No te relajes porque el personaje se lo tomara a risa. Su expresión y tu afinidad se mueven por separado, así que puedes perder puntos aunque parezca estar bien.',
                    'Si metes la pata, pide perdón con sinceridad y explícate en el mismo mensaje. Así puedes recuperar parte. Esperar a que se pase solo deja la pérdida tal cual.'
                ] },
                pace: { title: 'Ritmo y límites', summary: 'Ir demasiado rápido se rechaza.', points: [
                    'Intentar acercarte demasiado deprisa con poca afinidad, o hacer un gesto físico que no encaja con el momento, se rechaza y da cero o puntos negativos.',
                    'Aunque la afinidad sea alta, el personaje puede decir que no, y esa respuesta se respeta.',
                    'Afirmar que pasó algo que no pasó hace que la historia se desvíe.'
                ] },
                timing: { title: 'Cuándo cuentan los puntos', summary: 'Nada tras un final ni al repetir escenas.', points: [
                    'La charla libre después de un final no sube ni baja la afinidad. Los puntos que quieras deben llegar antes.',
                    'Repetir una escena que ya terminaste no vuelve a dar sus puntos. Los puntos salen de escenas que aún no has jugado.'
                ] },
                perfect: { title: 'Si buscas el final PERFECT', summary: 'Necesitas afinidad 100 y confesarte el día 4.', points: [
                    'El final PERFECT exige 100 de afinidad, y solo con las elecciones fijas no se llega. La charla libre tiene que aportar puntos de forma constante.',
                    'Tu confesión del día 4 debe ser aceptada, y no puede quedar ninguna cita doble ni relaciones sin resolver. Esperar al día 5 solo lleva hasta el final bueno «confesión tardía».',
                    'Si repartes el tiempo por igual hasta el día 3, cuesta acercarse a alguien. Decide pronto en quién te centras.'
                ] },
                privacy: { title: 'Privacidad y guardado', summary: 'No escribas datos personales y permite el almacenamiento.', points: [
                    'Lo que escribes se envía a través de un servidor a un modelo de IA. No introduzcas tu nombre real, datos de contacto, datos de cuenta ni tu dirección.',
                    'Tu progreso se guarda en el navegador. Permite el almacenamiento del sitio, porque en navegación privada puede que no se conserve.',
                    'A veces las respuestas suenan raras o poco propias del personaje. Si pasa, vuelve a intentarlo con otras palabras.'
                ] },
                seyoun: { summary: 'Se abre ante promesas cumplidas y pequeños gestos.', points: [
                    'Confía en quien propone una hora o un plan concretos y luego lo cumple. Se fija en si apareces.',
                    'Los gestos pequeños y prácticos funcionan mejor que los discursos. Menciona algo que ella te contó antes en lugar de un cumplido genérico.',
                    'Cuando baja la guardia, escúchala a su lado sin intentar arreglarlo todo. No le gusta que sus asuntos privados se hagan públicos ni cargar con tus emociones.',
                    'No esquives cuando te pida elegir. Una respuesta sincera y considerada reduce el daño.',
                    'Se mantiene serena, pero las excusas, las promesas que no se cumplen y hacer perder el tiempo a los demás también restan. Cuando siente celos, sus preguntas se vuelven más afiladas, no más fuertes, así que respóndelas con claridad.'
                ] },
                yuna: { summary: 'Funcionan la compañía tranquila y las palabras precisas.', points: [
                    'Le gustan los libros viejos, las constelaciones y las historias de fantasmas antiguas. El silencio no la incomoda y no lo toma como un rechazo.',
                    'La confianza se gana despacio. Curiosear en su pasado o tratar su forma de ser como un espectáculo la pierde, igual que desaparecer o romper un plan sin avisar.',
                    'Le encajan los mensajes cortos y observadores: mejor precisión que longitud.',
                    'Cuando comparte su escritura o sus preocupaciones, responde con sinceridad y respeto, y no rebatas sus miedos con lógica.'
                ] },
                dain: { summary: 'Los planes activos la conquistan. La lástima, no.', points: [
                    'Le gustan el voleibol, los juegos de ritmo y el pan soboro con leche de fresa, y disfruta de las citas en las que os movéis o competís juntos. Propón planes activos, concretos y juguetones.',
                    'Odia que la traten como frágil, la compasión, los juegos mentales y las promesas vagas.',
                    'Cuando salga el tema de la rodilla, espera a que hable ella y no decidas por ella. No intentes arreglarle el futuro ni finjas que la lesión no existe. Ponte de su lado.',
                    'Las bromas y el espíritu competitivo le gustan. Cuando se pone seria se queda más callada, así que acompáñala y deja los chistes.'
                ] },
                teacher: { summary: 'Respeto dentro de la línea que mantiene y atención sincera.', points: [
                    'Durante la etapa escolar mantiene una línea profesional firme. Valora el respeto por su trabajo, la sinceridad y que cumplas bien tu parte. La presión romántica no funciona con ella.',
                    'Le gustan las frases bien pulidas, las librerías tranquilas y la gente que termina lo que empieza. Las reacciones sinceras y meditadas a sus textos valen mucho más para ella que los halagos.',
                    'No le exijas secreto, consuelo ni rescate, y no uses la emoción para difuminar la línea entre profesora y alumno, porque se mantiene firme. Tampoco te pide que cuides sus sentimientos.',
                    'Una atención constante y tranquila a lo largo de varias escenas funciona mejor que un gran gesto.'
                ] },
                nurse: { summary: 'Se abre ante la sinceridad y un toque ligero.', points: [
                    'Es relajada y juguetona, y le gusta la gente que dice con sinceridad cómo se siente. El romero, una consulta ordenada y una cena tardía después de un día duro van bien.',
                    'Fingir que estás enfermo, usar el tratamiento como excusa para pasarte de la raya y decir «estoy bien» cuando no lo estás van en tu contra.',
                    'Cuando hable de lo agotada que está, escucha sin cargarle nada extra. Ella hace lo mismo por ti y no quiere que seas su paciente.',
                    'Su preocupación sincera es breve y cálida. Responde igual, sin añadir más bromas.'
                ] },
                haeun: { summary: 'Funciona mejor el cuidado concreto y sincero.', points: [
                    'Confía en lo que habla en persona. Valora a quien cumple sus promesas, escucha hasta el final lo incómodo y no aparta la vista de alguien herido.',
                    'El cuidado concreto y sincero es lo que más puntúa. Demuestra que te has fijado en su situación o en sus dudas. Las frases vacías, los cumplidos de fórmula y la simple cortesía suman muy poco. Las respuestas de una o dos palabras y las bromas sueltas de una línea suman igual de poco.',
                    'Convertir el dolor de alguien en chisme o esquivar tu responsabilidad hace perder su confianza. Habla con educación, así que mantén un tono respetuoso.',
                    'Mientras no se te ofrezca como ruta, no tengas acercamientos románticos ni físicos. Se rechazan y restan puntos.'
                ] }
            }
        },
        ja: {
            tab: '💡 ヒント',
            heading: 'フリートークのヒント',
            intro: '自分で入力する会話で好感度を上げるコツをまとめました。カードを押すと詳しい説明が開きます。ストーリーのネタバレはありません。AIがその都度判断するので、同じ言葉でも点数が変わることがあります。ここに書いたのは傾向であって、保証ではありません。',
            generalHeading: '共通のヒント',
            characterHeading: 'キャラクター別のヒント',
            lockedTitle: '???',
            lockedHint: 'まだ出会っていないキャラクターです。',
            closeLabel: '閉じる',
            openLabel: '詳しく見る',
            dialogSuffix: 'フリートークのヒント',
            items: {
                basics: { title: '送れる回数と点数の上限', summary: '1シーンで3〜5回、1通につき最大+3です。', points: [
                    'フリートークのシーンごとに、送れるメッセージの数が決まっています。画面の残り回数で確認でき、シーンによって3回か5回です。',
                    'メッセージ1通で上がる好感度は、どんなに良い内容でも最大+3です。一言で一気に上げるのは難しいので、いくつものシーンで少しずつ積み重ねましょう。',
                    '返事はAIがその場で作るため、同じ言葉でも結果が変わることがあります。'
                ] },
                earn: { title: '点数がつきやすい言葉', summary: '温かさと誠実さ、そして覚えていることを伝える気持ちです。', points: [
                    '温かさ、誠実さ、関心、責任感が伝わる言葉に点数がつきます。いつもの挨拶や形だけの相づち、一言だけの返事では、ほとんど上がりません。',
                    '短く書いても減点にはなりません。ただ、短い言葉は点数も小さめです。',
                    'いまのシーンで起きたことや、キャラクターが以前話してくれたことを覚えていると伝えると、反応がぐっと温かくなります。ひと言の褒め言葉より、具体的な記憶のほうがよく伝わります。'
                ] },
                group: { title: 'グループトーク', summary: '点数はキャラクターごとに別々で、途中でスキップするとそれぞれ-20です。', points: [
                    '複数のキャラクターがいるシーンでは、1通のメッセージに何人かが反応します。点数はキャラクターごとに別々に計算され、それぞれ最大+3まで上がります。',
                    '2人とも気にかければ、2人から点数をもらえます。片方の肩だけ持つと、もう片方は寂しく感じて点数が下がることもあります。',
                    'グループトークを途中でスキップすると、その場にいた2人の好感度がそれぞれ20下がります。スキップする前に確認の画面が出ます。一対一の会話はスキップしても減点されませんが、残りのメッセージの点数は逃してしまいます。'
                ] },
                mistakes: { title: '減点と挽回', summary: '失礼な言葉や嘘は大きく下がります。心からの謝罪は助けになります。', points: [
                    '失礼な発言、侮辱、嘘、約束を破ること、一線を越えることは、二桁の減点になることがあります。繰り返したり深刻だったりすると、さらに大きく下がります。キャラクターが嫌がると示した言葉を繰り返しても減点です。',
                    'キャラクターが笑って流してくれても安心しないでください。表情と好感度は別々に動くので、見た目は平気そうでも好感度は下がっていることがあります。',
                    '失敗したら、同じメッセージの中で心から謝って説明しましょう。一部は取り戻せます。時間が解決してくれると放っておくと、そのまま残ります。'
                ] },
                pace: { title: '距離の縮め方と一線', summary: '急ぎすぎる接近は断られます。', points: [
                    '好感度が低いのに急に距離を縮めようとしたり、流れに合わないスキンシップを試したりすると、断られて0点か減点になります。',
                    '好感度が高くても、キャラクターは断ることがあり、その意思は尊重されます。',
                    '起きていないことを起きたように話すと、話がちぐはぐになります。'
                ] },
                timing: { title: '点数が入るタイミング', summary: 'エンディングの後と、終えたシーンの再プレイでは上がりません。', points: [
                    'エンディングを見た後のフリートークでは、好感度は上がりも下がりもしません。点数が必要なら、エンディングの前に積み上げましょう。',
                    'すでに終えたシーンをもう一度遊んでも、そのシーンの点数は再び入りません。点数は、まだ遊んでいないシーンで得られます。'
                ] },
                perfect: { title: 'パーフェクトを目指すなら', summary: '好感度100と、4日目の告白が必要です。', points: [
                    'パーフェクトエンディングには好感度100が必要ですが、固定の選択肢だけでは100に届きません。フリートークでも着実に点数を積み上げる必要があります。',
                    '4日目の告白が受け入れられ、重なった約束や片づいていない関係が残っていてはいけません。5日目まで待つと、行けるのは「遅い告白」のグッドエンディングまでです。',
                    '3日目まで全員に同じだけ時間を使うと、誰とも深まりにくくなります。誰を中心にするか、早めに決めましょう。'
                ] },
                privacy: { title: '個人情報と保存', summary: '個人情報は入力せず、サイトの保存を許可してください。', points: [
                    '入力した内容はサーバーを通してAIモデルに送られます。本名、連絡先、アカウント情報、住所などの個人情報は入力しないでください。',
                    '進行状況はブラウザに保存されます。サイトの保存を許可しておいてください。プライベートモードでは進行状況が残らないことがあります。',
                    '返事が不自然だったり、キャラクターらしくなかったりすることがあります。そのときは、言い方を変えてもう一度試してみてください。'
                ] },
                seyoun: { summary: '守った約束と小さな気遣いに心を開きます。', points: [
                    '時間や計画を具体的に伝え、実際に守る人に心を開きます。約束を守ったかどうかをよく見ています。',
                    '大げさな言葉より、小さくて現実的な気遣いに反応します。褒め言葉より、彼女が以前話してくれたことを持ち出してみてください。',
                    '本音を見せてくれた後は、何もかも解決しようとせず、そばで聞いてあげてください。私的なことをみんなの前で話されたり、自分の感情を押しつけられたりするのは苦手です。',
                    '選択を求められたときは、ごまかさないでください。誠実で思いやりのある答えが、傷を小さくしてくれます。',
                    '落ち着いて見えても、言い訳や守れない約束、他人の時間を無駄にすることは減点されます。嫉妬すると、声が大きくなる代わりに質問が鋭くなるので、避けずに答えましょう。'
                ] },
                yuna: { summary: '静かな時間と的確な言葉がよく伝わります。', points: [
                    '古い本、星座、昔の怪談のような話が好きです。無言でも気まずがらず、沈黙を拒絶とも受け取りません。',
                    '信頼はゆっくり積み上がります。事情を詮索したり、彼女の個性を見世物のように扱ったりすると信頼を失います。連絡なしに約束を破るのも同じです。',
                    '彼女のように短くて観察力のある言葉がよく通じます。長く書くより、的確に書きましょう。',
                    '文章や悩みを見せてくれたら、率直に、敬意を持って向き合ってください。彼女の不安を理屈で言い負かそうとしないでください。'
                ] },
                dain: { summary: '一緒に動く誘いは大歓迎、同情は禁物です。', points: [
                    'バレーボール、リズムゲーム、ソボロパンといちご牛乳が好きで、一緒に体を動かしたり競い合ったりするデートを楽しみます。活動的で具体的、そして遊び心のある誘いがよく合います。',
                    '病人扱いや同情、駆け引き、あいまいな約束が大嫌いです。弱い人として扱わないでください。',
                    '膝の話が出たら、本人が話すまで待ち、代わりに決めないでください。彼女の将来を代わりに直そうとしたり、けがを無かったことにしたりせず、彼女の味方でいてあげてください。',
                    '冗談や負けず嫌いなところはうまく受け止めてくれます。真剣になると口数が減るので、一緒に静かになり、冗談は控えましょう。'
                ] },
                teacher: { summary: '一線を守る敬意と、誠実な関心が伝わります。', points: [
                    '在学中は、教師としての一線をはっきり守ります。自分の仕事を尊重し、誠実で、任された分をきちんとやり遂げる人に好感を持ちます。恋愛感情を押しつけても通じません。',
                    '推敲された一文、静かな書店、最後までやり遂げる人が好きです。彼女の書いたものには、褒め言葉よりも率直で深みのある感想のほうがずっと価値があります。',
                    '秘密を守ってほしい、慰めてほしい、助けてほしいと求めないでください。感情で教師と生徒の一線をぼかそうとすると、毅然とした態度になります。彼女のほうも、あなたに自分の気持ちを気遣うよう求めることはありません。',
                    '一度の大きな表現より、いくつものシーンにわたる穏やかな関心のほうがよく伝わります。'
                ] },
                nurse: { summary: '率直さと軽やかなぬくもりに心を開きます。', points: [
                    'のんびりして茶目っ気があり、自分の状態を正直に話す人が好きです。ローズマリーの香り、整った保健室、つらい日の終わりの遅い食事の話がよく合います。',
                    '具合が悪いふりをする、治療を口実に一線を越える、大丈夫ではないのに大丈夫と言う。どれも逆効果です。',
                    '疲れた事情を打ち明けられたら、負担を上乗せせずに聞いてあげてください。彼女もそうしてくれますし、あなたに患者でいてほしいとは思っていません。',
                    '彼女が本当に心配しているときは、短くて温かい言葉になります。冗談を重ねず、同じ温度で答えましょう。'
                ] },
                haeun: { summary: '具体的で心のこもった気遣いが一番伝わります。', points: [
                    '直接交わした会話を信じる後輩です。約束を守り、言いにくい話も最後まで聞き、傷ついた人から目をそらさない人を信頼します。',
                    '具体的で心のこもった気遣いに最も高い点をつけます。状況やためらいに気づいたことを伝えましょう。空虚な言葉、型どおりの褒め言葉、ありきたりな礼儀では、ほとんど点になりません。一言二言の返事や、軽く投げた一行の冗談も同じです。',
                    '誰の痛みでもうわさ話の種にしたり、責任を避けたりすると、信頼を失います。敬語で話す後輩なので、礼儀正しく接してください。',
                    '彼女が恋の相手として示される前は、恋愛感情を見せたりスキンシップをしたりしないでください。断られて、点数も下がります。'
                ] }
            }
        },
        fr: {
            tab: '💡 Astuces',
            heading: 'Astuces de discussion libre',
            intro: 'Comment gagner de l’affinité dans les conversations que vous tapez vous-même. Touchez une carte pour lire le détail. Aucun spoiler sur l’histoire. Une IA juge chaque message, donc une même phrase peut être notée différemment : ce sont des tendances, pas des garanties.',
            generalHeading: 'Astuces générales',
            characterHeading: 'Astuces par personnage',
            lockedTitle: '???',
            lockedHint: 'Vous ne l’avez pas encore rencontrée.',
            closeLabel: 'Fermer',
            openLabel: 'Lire la suite',
            dialogSuffix: 'Astuce de discussion libre',
            items: {
                basics: { title: 'Nombre de messages et plafond de points', summary: 'De 3 à 5 messages par scène, +3 au maximum par message.', points: [
                    'Chaque scène de discussion libre autorise un nombre fixe de messages. Le compteur à l’écran indique ce qu’il reste : 3 ou 5, selon la scène.',
                    'Un seul message rapporte au maximum +3 d’affinité, aussi bon soit-il. Une phrase parfaite ne suffit pas : progressez régulièrement sur plusieurs scènes.',
                    'L’IA écrit chaque réponse sur le moment, donc un même message peut donner un résultat différent.'
                ] },
                earn: { title: 'Ce qui rapporte des points', summary: 'De la chaleur, de la sincérité et la preuve que vous vous souvenez.', points: [
                    'Les messages qui montrent de la chaleur, de la sincérité, de l’attention ou du sens des responsabilités rapportent des points. Les salutations de routine, les formules de politesse et les réponses d’un mot rapportent très peu.',
                    'Un message court n’est pas pénalisé, mais il rapporte rarement beaucoup.',
                    'Montrer que vous vous souvenez de ce qui vient de se passer dans la scène, ou de ce que le personnage vous a confié plus tôt, provoque une réaction plus chaleureuse. Un souvenir précis vaut mieux qu’un compliment vite fait.'
                ] },
                group: { title: 'Discussion de groupe', summary: 'Chaque personnage est noté séparément, et passer coûte \u221220 à chacun.', points: [
                    'Dans les scènes avec plusieurs personnages, un message déclenche des réactions de plusieurs d’entre eux. Chaque personnage est noté séparément et peut gagner jusqu’à +3 avec ce message.',
                    'Prendre soin des deux peut vous rapporter des points auprès des deux. Ne soutenir que l’une peut blesser l’autre et vous coûter des points auprès d’elle.',
                    'Passer une conversation de groupe fait baisser de 20 l’affinité de chacun des deux personnages. Le jeu vous demande d’abord de confirmer. Passer une scène en tête-à-tête n’est pas pénalisé, mais vous perdez les points des messages restants.'
                ] },
                mistakes: { title: 'Pénalités et réparation', summary: 'La grossièreté et les mensonges coûtent cher. Des excuses sincères aident.', points: [
                    'Les remarques grossières, les insultes, les mensonges, les promesses non tenues et le franchissement d’une limite peuvent coûter deux chiffres, et les cas répétés ou graves coûtent plus. Répéter ce qu’un personnage a montré ne pas aimer coûte aussi.',
                    'Ne vous rassurez pas parce que le personnage en a ri. Son expression et votre affinité évoluent séparément : vous pouvez perdre des points même si elle a l’air d’aller bien.',
                    'Si vous faites un faux pas, excusez-vous sincèrement et expliquez-vous dans le même message. Vous pouvez en récupérer une partie. Attendre que ça passe tout seul laisse la perte intacte.'
                ] },
                pace: { title: 'Rythme et limites', summary: 'Aller trop vite se fait refuser.', points: [
                    'Chercher à vous rapprocher trop vite avec peu d’affinité, ou tenter un geste physique qui ne correspond pas au moment, est refusé et rapporte zéro ou des points négatifs.',
                    'Même avec une affinité élevée, un personnage peut dire non, et ce refus est respecté.',
                    'Affirmer qu’un événement a eu lieu alors que ce n’est pas le cas fait dériver l’histoire.'
                ] },
                timing: { title: 'Quand les points comptent', summary: 'Rien après une fin, rien en rejouant une scène.', points: [
                    'La discussion libre après une fin ne fait ni monter ni baisser l’affinité. Les points que vous voulez doivent venir avant.',
                    'Rejouer une scène déjà terminée ne redonne pas ses points. Les points viennent des scènes que vous n’avez pas encore jouées.'
                ] },
                perfect: { title: 'Viser la fin PERFECT', summary: 'Il faut une affinité de 100 et une déclaration au jour 4.', points: [
                    'La fin PERFECT demande 100 d’affinité, et les choix fixes seuls n’y suffisent pas. La discussion libre doit ajouter des points régulièrement.',
                    'Votre déclaration du jour 4 doit être acceptée, sans double rendez-vous ni relation en suspens. Attendre le jour 5 ne mène qu’à la bonne fin « déclaration tardive ».',
                    'Si vous répartissez votre temps de façon égale jusqu’au jour 3, il est difficile de se rapprocher de qui que ce soit. Décidez tôt sur qui vous vous concentrez.'
                ] },
                privacy: { title: 'Vie privée et sauvegarde', summary: 'Ne saisissez pas de données personnelles et autorisez le stockage.', points: [
                    'Ce que vous tapez est envoyé via un serveur à un modèle d’IA. Ne saisissez ni votre vrai nom, ni vos coordonnées, ni vos données de compte, ni votre adresse.',
                    'Votre progression est enregistrée dans votre navigateur. Autorisez le stockage du site, car la navigation privée peut ne pas la conserver.',
                    'Les réponses peuvent parfois sembler étranges ou peu fidèles au personnage. Dans ce cas, réessayez avec une autre formulation.'
                ] },
                seyoun: { summary: 'Elle s’ouvre aux promesses tenues et aux petites attentions.', points: [
                    'Elle fait confiance à ceux qui annoncent une heure ou un plan précis, puis s’y tiennent. Elle remarque si vous venez.',
                    'Les petits gestes pratiques marchent mieux que les grands discours. Évoquez ce qu’elle vous a dit plus tôt plutôt qu’un compliment général.',
                    'Quand elle baisse sa garde, écoutez-la à ses côtés sans chercher à tout régler. Elle n’aime pas que ses affaires privées deviennent publiques, ni porter vos émotions.',
                    'Ne vous dérobez pas quand elle vous demande de choisir. Une réponse sincère et attentionnée limite la peine.',
                    'Elle reste posée, mais les excuses, les promesses en l’air et le temps des autres gaspillé coûtent quand même des points. Quand elle est jalouse, ses questions deviennent plus précises plutôt que plus fortes : répondez-y franchement.'
                ] },
                yuna: { summary: 'La compagnie tranquille et les mots justes fonctionnent le mieux.', points: [
                    'Elle aime les vieux livres, les constellations et les anciennes histoires de fantômes. Le silence ne la gêne pas et elle ne le prend pas pour un rejet.',
                    'La confiance se construit lentement. Fouiller dans son passé ou traiter sa singularité comme un spectacle la fait perdre, tout comme disparaître ou annuler un projet sans prévenir.',
                    'Les messages courts et observateurs lui conviennent : visez la précision plutôt que la longueur.',
                    'Quand elle partage ses écrits ou ses inquiétudes, répondez avec franchise et respect, et ne réfutez pas ses peurs par la logique.'
                ] },
                dain: { summary: 'Les plans actifs la séduisent. La pitié, non.', points: [
                    'Elle aime le volley, les jeux de rythme et le pain soboro avec du lait à la fraise, et elle adore les rendez-vous où l’on bouge ou se mesure ensemble. Proposez des plans actifs, précis et joueurs.',
                    'Elle déteste qu’on la traite comme une personne fragile, la pitié, les jeux psychologiques et les promesses vagues.',
                    'Quand son genou est évoqué, attendez qu’elle en parle et ne décidez pas à sa place. N’essayez pas de réparer son avenir et ne faites pas comme si la blessure n’existait pas. Restez de son côté.',
                    'Les taquineries et l’esprit de compétition passent bien. Quand elle devient sérieuse, elle parle moins : faites de même et laissez les blagues de côté.'
                ] },
                teacher: { summary: 'Le respect dans la limite qu’elle tient, et une attention sincère.', points: [
                    'Pendant la période scolaire, elle garde une ligne professionnelle ferme. Elle apprécie le respect de son travail, l’honnêteté et le fait de bien faire sa part. La pression sentimentale ne marche pas avec elle.',
                    'Elle aime une phrase bien ciselée, les librairies tranquilles et ceux qui vont au bout de ce qu’ils commencent. Des réactions honnêtes et réfléchies à ses textes comptent bien plus pour elle que la flatterie.',
                    'Ne lui demandez ni secret, ni réconfort, ni sauvetage, et n’usez pas de l’émotion pour brouiller la ligne entre professeure et élève, car elle tient bon. Elle ne vous demande pas non plus de ménager ses sentiments.',
                    'Une attention régulière et sans drame sur plusieurs scènes fonctionne mieux qu’un grand geste.'
                ] },
                nurse: { summary: 'Elle s’ouvre à la franchise et à une touche de légèreté.', points: [
                    'Elle est détendue et espiègle, et aime les gens qui disent honnêtement ce qu’ils ressentent. Le romarin, un bureau bien rangé et un repas tardif après une dure journée lui parlent.',
                    'Faire semblant d’être malade, prendre le soin comme prétexte pour dépasser les bornes et dire « ça va » quand ce n’est pas vrai jouent contre vous.',
                    'Quand elle parle de son épuisement, écoutez sans lui faire porter quoi que ce soit en plus. Elle fait de même pour vous et ne veut pas que vous deveniez son patient.',
                    'Son inquiétude sincère est brève et chaleureuse. Répondez sur le même ton plutôt que d’ajouter des plaisanteries.'
                ] },
                haeun: { summary: 'Une attention concrète et sincère marche le mieux.', points: [
                    'Elle croit ce qui se dit en face. Elle estime ceux qui tiennent leurs promesses, écoutent jusqu’au bout les choses gênantes et ne détournent pas le regard de quelqu’un qui souffre.',
                    'L’attention concrète et sincère rapporte le plus. Montrez que vous avez remarqué sa situation ou son hésitation. Les phrases creuses, les compliments de convenance et la simple politesse rapportent très peu. Les réponses d’un ou deux mots et les blagues lancées en une ligne rapportent tout aussi peu.',
                    'Faire de la peine de quelqu’un un sujet de ragots, ou éviter vos responsabilités, lui fait perdre confiance. Elle parle poliment : gardez un ton respectueux.',
                    'Tant qu’elle ne vous est pas proposée comme route, évitez les approches romantiques ou physiques. Elles sont refusées et coûtent des points.'
                ] }
            }
        },
        de: {
            tab: '💡 Tipps',
            heading: 'Tipps fürs freie Gespräch',
            intro: 'So sammelst du in den Gesprächen, die du selbst tippst, Zuneigung. Tippe auf eine Karte, um die Details zu lesen. Es gibt keine Spoiler zur Handlung. Eine KI bewertet jede Nachricht, deshalb kann derselbe Satz unterschiedlich punkten: Das sind Tendenzen, keine Garantien.',
            generalHeading: 'Allgemeine Tipps',
            characterHeading: 'Tipps zu den Figuren',
            lockedTitle: '???',
            lockedHint: 'Diese Figur ist dir noch unbekannt.',
            closeLabel: 'Schließen',
            openLabel: 'Mehr lesen',
            dialogSuffix: 'Tipp fürs freie Gespräch',
            items: {
                basics: { title: 'Nachrichtenzahl und Punktelimit', summary: '3 bis 5 Nachrichten pro Szene, höchstens +3 pro Nachricht.', points: [
                    'Jede Szene mit freiem Gespräch erlaubt eine feste Zahl von Nachrichten. Der Zähler auf dem Bildschirm zeigt, wie viele übrig sind: 3 oder 5, je nach Szene.',
                    'Eine einzelne Nachricht bringt höchstens +3 Zuneigung, egal wie gut sie ist. Ein perfekter Satz reicht nicht, also sammle über viele Szenen hinweg gleichmäßig.',
                    'Die KI schreibt jede Antwort spontan, deshalb kann dieselbe Nachricht ein anderes Ergebnis haben.'
                ] },
                earn: { title: 'Was Punkte bringt', summary: 'Wärme, Ehrlichkeit und zu zeigen, dass du dich erinnerst.', points: [
                    'Punkte gibt es für Nachrichten mit Wärme, Ehrlichkeit, Aufmerksamkeit oder Verantwortungsgefühl. Routinegrüße, höfliche Füllsätze und Ein-Wort-Antworten bringen sehr wenig.',
                    'Eine kurze Nachricht wird nicht bestraft, bringt aber selten viel.',
                    'Wenn du zeigst, dass du dich an das erinnerst, was gerade in der Szene passiert ist oder was die Figur dir früher erzählt hat, fällt die Reaktion wärmer aus. Eine konkrete Erinnerung wirkt besser als ein schnelles Kompliment.'
                ] },
                group: { title: 'Gruppengespräch', summary: 'Jede Figur wird einzeln bewertet, Überspringen kostet je \u221220.', points: [
                    'In Szenen mit mehreren Figuren reagieren auf eine Nachricht mehrere von ihnen. Jede Figur wird einzeln bewertet und kann mit dieser Nachricht bis zu +3 gewinnen.',
                    'Wenn du dich um beide kümmerst, kannst du bei beiden punkten. Hältst du nur zu einer, kann die andere gekränkt sein, und du verlierst bei ihr Punkte.',
                    'Wer ein Gruppengespräch überspringt, senkt die Zuneigung beider beteiligten Figuren um jeweils 20. Das Spiel fragt vorher nach. Eine Szene unter vier Augen zu überspringen kostet nichts, aber du verlierst die Punkte der restlichen Nachrichten.'
                ] },
                mistakes: { title: 'Punktabzug und Wiedergutmachung', summary: 'Unhöflichkeit und Lügen kosten viel. Eine ehrliche Entschuldigung hilft.', points: [
                    'Unhöfliche Bemerkungen, Beleidigungen, Lügen, gebrochene Versprechen und Grenzüberschreitungen können zweistellige Abzüge kosten, wiederholte oder schwere Fälle noch mehr. Auch das Wiederholen von etwas, das eine Figur sichtlich nicht mag, kostet Punkte.',
                    'Wiege dich nicht in Sicherheit, nur weil eine Figur darüber gelacht hat. Ihr Gesichtsausdruck und deine Zuneigung bewegen sich getrennt, du kannst also Punkte verlieren, auch wenn sie gelassen wirkt.',
                    'Wenn dir ein Fehler passiert, entschuldige dich ehrlich und erkläre dich in derselben Nachricht. Das kann einen Teil zurückholen. Wer darauf hofft, dass es sich von selbst legt, lässt den Verlust bestehen.'
                ] },
                pace: { title: 'Tempo und Grenzen', summary: 'Zu schnelles Vorgehen wird abgewiesen.', points: [
                    'Wer bei niedriger Zuneigung zu schnell Nähe sucht oder körperlich etwas versucht, das nicht zum Moment passt, wird abgewiesen und bekommt null oder Minuspunkte.',
                    'Auch bei hoher Zuneigung kann eine Figur Nein sagen, und das wird respektiert.',
                    'Wenn du behauptest, etwas sei passiert, was nicht passiert ist, gerät die Geschichte aus dem Takt.'
                ] },
                timing: { title: 'Wann Punkte zählen', summary: 'Nach einem Ende und in wiederholten Szenen gibt es nichts.', points: [
                    'Freie Gespräche nach einem Ende erhöhen oder senken die Zuneigung nicht. Punkte, die du willst, musst du davor sammeln.',
                    'Eine bereits abgeschlossene Szene noch einmal zu spielen bringt ihre Punkte nicht erneut. Punkte kommen aus Szenen, die du noch nicht gespielt hast.'
                ] },
                perfect: { title: 'Wenn du das PERFECT-Ende willst', summary: 'Du brauchst Zuneigung 100 und ein Geständnis an Tag 4.', points: [
                    'Für das PERFECT-Ende brauchst du 100 Zuneigung, und mit den festen Entscheidungen allein erreichst du das nicht. Das freie Gespräch muss gleichmäßig Punkte liefern.',
                    'Dein Geständnis an Tag 4 muss angenommen werden, und es dürfen keine doppelten Verabredungen oder ungeklärten Beziehungen übrig bleiben. Wer bis Tag 5 wartet, kommt nur bis zum guten Ende „Spätes Geständnis“.',
                    'Wenn du deine Zeit bis Tag 3 gleichmäßig verteilst, wird es schwer, jemandem nahezukommen. Entscheide früh, auf wen du dich konzentrierst.'
                ] },
                privacy: { title: 'Datenschutz und Speichern', summary: 'Gib keine persönlichen Daten ein und erlaube die Speicherung.', points: [
                    'Was du tippst, wird über einen Server an ein KI-Modell gesendet. Gib weder deinen echten Namen noch Kontaktdaten, Kontodaten oder deine Adresse ein.',
                    'Dein Fortschritt wird im Browser gespeichert. Erlaube die Speicherung für die Seite, denn im privaten Modus bleibt er womöglich nicht erhalten.',
                    'Antworten wirken manchmal seltsam oder unpassend für die Figur. Versuche es dann mit anderen Worten noch einmal.'
                ] },
                seyoun: { summary: 'Sie öffnet sich bei gehaltenen Versprechen und kleinen Aufmerksamkeiten.', points: [
                    'Sie vertraut Menschen, die eine konkrete Zeit oder einen Plan nennen und ihn dann einhalten. Sie merkt, ob du auftauchst.',
                    'Kleine, praktische Gesten wirken besser als große Worte. Sprich etwas an, das sie dir früher erzählt hat, statt ein allgemeines Kompliment zu machen.',
                    'Wenn sie ihre Deckung fallen lässt, hör ihr zur Seite stehend zu, ohne alles lösen zu wollen. Sie mag es nicht, wenn Privates öffentlich wird, und sie will nicht deine Gefühle tragen.',
                    'Weiche nicht aus, wenn sie dich bittet, dich zu entscheiden. Eine ehrliche, rücksichtsvolle Antwort hält den Schmerz klein.',
                    'Sie bleibt gelassen, doch Ausreden, unzuverlässige Versprechen und vergeudete Zeit anderer kosten trotzdem Punkte. Wenn sie eifersüchtig ist, werden ihre Fragen schärfer statt lauter, also beantworte sie direkt.'
                ] },
                yuna: { summary: 'Stille Gesellschaft und genaue Worte kommen am besten an.', points: [
                    'Sie mag alte Bücher, Sternbilder und alte Gespenstergeschichten. Schweigen stört sie nicht, und sie versteht es nicht als Ablehnung.',
                    'Vertrauen wächst langsam. Wer in ihrer Vergangenheit bohrt oder ihre Eigenart wie eine Schau behandelt, verspielt es, genauso wie wer verschwindet oder einen Plan ohne Vorwarnung platzen lässt.',
                    'Kurze, aufmerksame Nachrichten passen zu ihr: lieber genau als lang.',
                    'Wenn sie ihre Texte oder Sorgen zeigt, antworte ehrlich und respektvoll und widerlege ihre Ängste nicht mit Logik.'
                ] },
                dain: { summary: 'Aktive Pläne überzeugen sie. Mitleid nicht.', points: [
                    'Sie mag Volleyball, Rhythmusspiele und Soboro-Brot mit Erdbeermilch und blüht bei Dates auf, bei denen ihr euch bewegt oder messt. Schlag aktive, konkrete und verspielte Pläne vor.',
                    'Sie hasst es, als zerbrechlich behandelt zu werden, außerdem Mitleid, Psychospielchen und vage Versprechen.',
                    'Wenn ihr Knie zur Sprache kommt, warte, bis sie selbst spricht, und entscheide nicht für sie. Versuche nicht, ihre Zukunft zu richten, und tu nicht so, als gäbe es die Verletzung nicht. Steh auf ihrer Seite.',
                    'Necken und Wettkampfgeist kommen gut an. Wenn sie ernst wird, wird sie stiller, also werde mit ihr still und lass die Witze.'
                ] },
                teacher: { summary: 'Respekt innerhalb ihrer Grenze und ehrliche Aufmerksamkeit.', points: [
                    'Während der Schulzeit hält sie eine klare professionelle Linie. Sie schätzt Respekt vor ihrer Arbeit, Ehrlichkeit und dass du deinen Teil gut erledigst. Romantischer Druck wirkt bei ihr nicht.',
                    'Sie mag einen gut überarbeiteten Satz, ruhige Buchläden und Menschen, die zu Ende bringen, was sie beginnen. Ehrliche, durchdachte Reaktionen auf ihre Texte bedeuten ihr weit mehr als Schmeichelei.',
                    'Verlange von ihr weder Geheimhaltung noch Trost oder Rettung, und verwische die Grenze zwischen Lehrerin und Schüler nicht mit Gefühlen, denn sie bleibt standhaft. Sie bittet dich auch nie, auf ihre Gefühle Rücksicht zu nehmen.',
                    'Stetige, unaufgeregte Aufmerksamkeit über mehrere Szenen wirkt besser als eine große Geste.'
                ] },
                nurse: { summary: 'Sie taut bei Ehrlichkeit und einer leichten Hand auf.', points: [
                    'Sie ist entspannt und verspielt und mag Menschen, die ehrlich sagen, wie es ihnen geht. Rosmarin, ein aufgeräumtes Behandlungszimmer und ein spätes Essen nach einem harten Tag kommen gut an.',
                    'Krankheit vortäuschen, eine Behandlung als Vorwand für Grenzüberschreitungen nutzen und „Mir geht’s gut“ sagen, obwohl es nicht stimmt: Das alles wirkt gegen dich.',
                    'Wenn sie davon erzählt, wie erschöpft sie ist, hör zu, ohne ihr noch mehr aufzuladen. Sie tut dasselbe für dich und möchte nicht, dass du ihr Patient wirst.',
                    'Ihre echte Sorge ist kurz und warm. Antworte im gleichen Ton, statt noch mehr Witze zu machen.'
                ] },
                haeun: { summary: 'Konkrete, herzliche Fürsorge kommt am besten an.', points: [
                    'Sie vertraut dem, was sie im direkten Gespräch hört. Sie schätzt Menschen, die Versprechen halten, Unbequemes bis zum Ende anhören und vor einem verletzten Menschen nicht wegsehen.',
                    'Konkrete, herzliche Fürsorge bringt am meisten. Zeige, dass du ihre Lage oder ihr Zögern bemerkt hast. Leere Phrasen, Standardkomplimente und bloße Höflichkeit bringen sehr wenig. Antworten aus ein, zwei Wörtern und hingeworfene Einzeiler-Witze bringen ebenso wenig.',
                    'Wer den Schmerz anderer zu Klatsch macht oder Verantwortung scheut, verliert ihr Vertrauen. Sie spricht höflich, also bleib respektvoll im Ton.',
                    'Solange sie dir nicht als Route angeboten wird, mach keine romantischen oder körperlichen Annäherungen. Sie werden abgewiesen und kosten Punkte.'
                ] }
            }
        },
        pt: {
            tab: '💡 Dicas',
            heading: 'Dicas de conversa livre',
            intro: 'Como ganhar afinidade nas conversas que você digita. Toque em um cartão para ver os detalhes. Não há spoilers da história. Uma IA avalia cada mensagem, então a mesma frase pode pontuar de forma diferente: são tendências, não garantias.',
            generalHeading: 'Dicas gerais',
            characterHeading: 'Dicas por personagem',
            lockedTitle: '???',
            lockedHint: 'Você ainda não conhece esta personagem.',
            closeLabel: 'Fechar',
            openLabel: 'Ver mais',
            dialogSuffix: 'Dica de conversa livre',
            items: {
                basics: { title: 'Mensagens e limite de pontos', summary: 'De 3 a 5 mensagens por cena, no máximo +3 por mensagem.', points: [
                    'Cada cena de conversa livre permite um número fixo de mensagens. O contador na tela mostra quantas restam: 3 ou 5, conforme a cena.',
                    'Uma única mensagem soma no máximo +3 de afinidade, por melhor que seja. Uma frase perfeita não basta, então acumule aos poucos ao longo de várias cenas.',
                    'A IA escreve cada resposta na hora, então a mesma mensagem pode ter um resultado diferente.'
                ] },
                earn: { title: 'O que rende pontos', summary: 'Carinho, sinceridade e mostrar que você lembra.', points: [
                    'Ganham pontos as mensagens que mostram carinho, sinceridade, atenção ou responsabilidade. Cumprimentos de rotina, frases de cortesia e respostas de uma palavra rendem muito pouco.',
                    'Escrever pouco não é penalizado, mas raramente rende muito.',
                    'Mostrar que você lembra do que acabou de acontecer na cena, ou de algo que a personagem contou antes, provoca uma reação mais calorosa. Uma lembrança concreta vale mais que um elogio rápido.'
                ] },
                group: { title: 'Conversa em grupo', summary: 'Cada personagem é pontuada separadamente, e pular custa \u221220 a cada uma.', points: [
                    'Em cenas com várias personagens, uma mensagem recebe reações de mais de uma. Cada personagem é pontuada separadamente e pode ganhar até +3 com essa mensagem.',
                    'Dar atenção às duas pode render pontos com ambas. Ficar do lado de só uma pode magoar a outra e custar pontos com ela.',
                    'Pular uma conversa em grupo reduz em 20 a afinidade de cada uma das duas personagens. O jogo pede confirmação antes. Pular uma cena a dois não é penalizado, mas você perde os pontos das mensagens restantes.'
                ] },
                mistakes: { title: 'Penalidades e reparação', summary: 'Grosseria e mentiras custam caro. Um pedido de desculpas sincero ajuda.', points: [
                    'Comentários grosseiros, insultos, mentiras, promessas quebradas e ultrapassar um limite podem custar dois dígitos, e casos repetidos ou graves custam mais. Repetir algo que a personagem já mostrou não gostar também custa pontos.',
                    'Não relaxe só porque a personagem levou na brincadeira. A expressão dela e a sua afinidade se movem separadamente, então você pode perder pontos mesmo que ela pareça bem.',
                    'Se errar, peça desculpas com sinceridade e explique-se na mesma mensagem. Isso pode recuperar uma parte. Esperar que passe sozinho deixa a perda como está.'
                ] },
                pace: { title: 'Ritmo e limites', summary: 'Ir rápido demais é recusado.', points: [
                    'Tentar se aproximar depressa demais com pouca afinidade, ou fazer um gesto físico que não combina com o momento, é recusado e rende zero ou pontos negativos.',
                    'Mesmo com afinidade alta, a personagem pode dizer não, e essa resposta é respeitada.',
                    'Afirmar que algo aconteceu quando não aconteceu faz a história desandar.'
                ] },
                timing: { title: 'Quando os pontos contam', summary: 'Nada depois de um final nem ao repetir cenas.', points: [
                    'A conversa livre depois de um final não sobe nem desce a afinidade. Os pontos que você quer têm de vir antes.',
                    'Repetir uma cena que você já terminou não dá seus pontos de novo. Os pontos vêm de cenas que você ainda não jogou.'
                ] },
                perfect: { title: 'Se você quer o final PERFECT', summary: 'É preciso afinidade 100 e confissão no dia 4.', points: [
                    'O final PERFECT exige 100 de afinidade, e só com as escolhas fixas não se chega lá. A conversa livre precisa somar pontos de forma constante.',
                    'Sua confissão do dia 4 precisa ser aceita, e não pode sobrar nenhum encontro duplo nem relação mal resolvida. Esperar até o dia 5 só leva ao final bom «confissão tardia».',
                    'Se você dividir o tempo igualmente até o dia 3, fica difícil se aproximar de alguém. Decida cedo em quem vai se concentrar.'
                ] },
                privacy: { title: 'Privacidade e salvamento', summary: 'Não digite dados pessoais e permita o armazenamento.', points: [
                    'O que você digita é enviado por um servidor a um modelo de IA. Não informe seu nome real, contatos, dados de conta nem endereço.',
                    'Seu progresso é salvo no navegador. Permita o armazenamento do site, porque na navegação privada ele pode não ser mantido.',
                    'Às vezes as respostas soam estranhas ou pouco condizentes com a personagem. Se isso acontecer, tente de novo com outras palavras.'
                ] },
                seyoun: { summary: 'Ela se abre para promessas cumpridas e pequenos gestos.', points: [
                    'Ela confia em quem combina um horário ou plano concreto e depois cumpre. Ela percebe se você aparece.',
                    'Gestos pequenos e práticos funcionam melhor do que discursos. Cite algo que ela contou antes em vez de um elogio genérico.',
                    'Depois que ela baixa a guarda, ouça ao lado dela sem tentar resolver tudo. Ela não gosta que assuntos particulares virem assunto público, nem de carregar as suas emoções.',
                    'Não escape quando ela pedir que você escolha. Uma resposta sincera e atenciosa deixa a mágoa menor.',
                    'Ela mantém a calma, mas desculpas, promessas furadas e fazer os outros perderem tempo também custam pontos. Quando sente ciúme, as perguntas dela ficam mais afiadas, não mais altas, então responda direto.'
                ] },
                yuna: { summary: 'Companhia tranquila e palavras precisas funcionam melhor.', points: [
                    'Ela gosta de livros antigos, constelações e histórias de fantasmas antigas. O silêncio não a incomoda e ela não o toma como rejeição.',
                    'A confiança cresce devagar. Bisbilhotar o passado dela ou tratar o jeito dela como espetáculo faz perder essa confiança, assim como sumir ou desfazer um plano sem avisar.',
                    'Mensagens curtas e observadoras combinam com ela: prefira precisão a tamanho.',
                    'Quando ela mostrar seus textos ou preocupações, responda com sinceridade e respeito, e não rebata os medos dela com lógica.'
                ] },
                dain: { summary: 'Planos ativos a conquistam. Pena, não.', points: [
                    'Ela gosta de vôlei, jogos de ritmo e pão soboro com leite de morango, e se anima com encontros em que vocês se movem ou competem juntos. Proponha planos ativos, específicos e divertidos.',
                    'Ela odeia ser tratada como frágil, além de pena, jogos mentais e promessas vagas.',
                    'Quando o joelho dela vier à tona, espere ela falar e não decida por ela. Não tente consertar o futuro dela nem finja que a lesão não existe. Fique do lado dela.',
                    'Provocações e espírito competitivo caem bem. Quando ela fica séria, fala menos, então acompanhe o silêncio e deixe as piadas de lado.'
                ] },
                teacher: { summary: 'Respeito dentro do limite que ela mantém e atenção sincera.', points: [
                    'Durante o período escolar, ela mantém uma linha profissional firme. Valoriza o respeito pelo trabalho dela, a sinceridade e você fazer bem a sua parte. Pressão romântica não funciona com ela.',
                    'Ela gosta de uma frase bem ajustada, de livrarias tranquilas e de quem termina o que começa. Reações sinceras e ponderadas aos textos dela valem muito mais do que bajulação.',
                    'Não exija dela segredo, consolo nem resgate, e não use a emoção para borrar a linha entre professora e aluno, porque ela se mantém firme. Ela também nunca pede que você cuide dos sentimentos dela.',
                    'Uma atenção constante e sem drama ao longo de várias cenas funciona melhor do que um grande gesto.'
                ] },
                nurse: { summary: 'Ela se abre para a sinceridade e um toque leve.', points: [
                    'Ela é descontraída e brincalhona e gosta de quem diz com sinceridade como se sente. Alecrim, uma sala arrumada e uma refeição tardia depois de um dia difícil combinam com ela.',
                    'Fingir estar doente, usar o tratamento como desculpa para passar do limite e dizer «estou bem» quando não está funcionam contra você.',
                    'Quando ela falar do cansaço dela, ouça sem sobrecarregá-la com nada extra. Ela faz o mesmo por você e não quer que você seja paciente dela.',
                    'A preocupação verdadeira dela é curta e calorosa. Responda no mesmo tom, sem acrescentar mais piadas.'
                ] },
                haeun: { summary: 'Cuidado concreto e sincero funciona melhor.', points: [
                    'Ela confia no que ouve pessoalmente. Valoriza quem cumpre promessas, escuta até o fim o que é desconfortável e não desvia o olhar de alguém ferido.',
                    'O cuidado concreto e sincero é o que mais pontua. Mostre que você notou a situação ou a hesitação dela. Frases vazias, elogios de fórmula e simples cortesia rendem muito pouco. Respostas de uma ou duas palavras e piadas soltas de uma linha rendem igualmente pouco.',
                    'Transformar a dor de alguém em fofoca ou fugir da responsabilidade faz perder a confiança dela. Ela fala com educação, então mantenha um tom respeitoso.',
                    'Enquanto ela não for oferecida como rota, não faça aproximações românticas ou físicas. Elas são recusadas e custam pontos.'
                ] }
            }
        },
        zh: {
            tab: '💡 攻略',
            heading: '自由对话小贴士',
            intro: '这里整理了在亲手输入的对话中提升好感度的方法。点击卡片可以查看详细说明。内容不含剧情剧透。每条消息都由AI判断，同一句话的得分可能不同，所以这些只是倾向，并非保证。',
            generalHeading: '通用小贴士',
            characterHeading: '角色小贴士',
            lockedTitle: '???',
            lockedHint: '你还没有遇见这个角色。',
            closeLabel: '关闭',
            openLabel: '查看详情',
            dialogSuffix: '自由对话小贴士',
            items: {
                basics: { title: '发送次数与得分上限', summary: '每个场景3到5条，每条最多+3。', points: [
                    '每个自由对话场景能发送的消息数量是固定的。可以在屏幕上的剩余次数中查看，根据场景是3次或5次。',
                    '无论内容多好，一条消息最多只能提升+3好感度。想靠一句话一下子拉满很难，需要在多个场景中稳步积累。',
                    '回复由AI当场生成，所以同一句话也可能得到不同的结果。'
                ] },
                earn: { title: '容易得分的话', summary: '温暖、真诚，以及表明你记得。', points: [
                    '能体现温暖、真诚、关心和责任感的话会得分。例行的问候、客套的附和和只有一个词的回答几乎不会加分。',
                    '写得短不会被扣分，只是短句得分通常也比较少。',
                    '如果你表现出记得刚才场景里发生的事，或角色之前讲过的话，对方的反应会温暖得多。具体的回忆比一句夸奖更管用。'
                ] },
                group: { title: '小组对话', summary: '每位角色单独计分，中途跳过各扣20。', points: [
                    '在有多个角色的场景里，一条消息会引来不止一个角色的反应。每位角色单独计分，各自最多+3。',
                    '同时照顾到两个人，就能在两人那里都得分。只偏向其中一人，另一人可能会失落，好感度也会下降。',
                    '中途跳过小组对话，在场的两位角色好感度会各下降20。跳过之前游戏会先弹出确认。跳过一对一对话不会扣分，但会错过剩余消息的得分。'
                ] },
                mistakes: { title: '扣分与补救', summary: '无礼和谎言扣得很重，真诚道歉有帮助。', points: [
                    '无礼的话、侮辱、说谎、违背约定和越界都可能扣到两位数，重复或严重时扣得更多。重复角色明显不喜欢的话也会扣分。',
                    '别因为角色笑着带过就放心。她的表情和好感度是分开变化的，表面看起来没事，好感度也可能已经下降。',
                    '如果出了差错，请在同一条消息里真诚道歉并解释，可以挽回一部分。指望时间自然化解，损失就会原样留着。'
                ] },
                pace: { title: '节奏与分寸', summary: '太快靠近会被拒绝。', points: [
                    '好感度还低时就急着拉近距离，或做出不符合当时气氛的肢体接触，会被拒绝，得0分或被扣分。',
                    '即使好感度很高，角色也可以说不，这个意愿会被尊重。',
                    '把没发生过的事说成发生过，会让剧情走偏。'
                ] },
                timing: { title: '得分的时机', summary: '结局之后、重玩已完成的场景都不会加分。', points: [
                    '看过结局之后的自由对话不会提升也不会降低好感度。想要的分数必须在结局之前积累。',
                    '重玩已经完成的场景，不会再次获得该场景的分数。分数来自你还没玩过的场景。'
                ] },
                perfect: { title: '想要完美结局', summary: '需要好感度100和第4天的告白。', points: [
                    '完美结局需要好感度达到100，而只靠固定选项是够不到100的。自由对话也要持续积累分数。',
                    '第4天的告白必须被接受，并且不能留下重叠的约定或没处理好的关系。拖到第5天，最多只能到“迟来的告白”好结局。',
                    '到第3天为止把时间平均分给所有人，就很难和任何人深入。尽早决定以谁为重心。'
                ] },
                privacy: { title: '个人信息与存档', summary: '不要输入个人信息，并允许网站存储。', points: [
                    '你输入的内容会经由服务器发送给AI模型。请不要输入真实姓名、联系方式、账号信息和住址等个人信息。',
                    '进度保存在浏览器中。请允许网站存储，因为在隐私模式下进度可能无法保留。',
                    '回复偶尔会显得别扭，或不太像这个角色。遇到这种情况，请换种说法再试一次。'
                ] },
                seyoun: { summary: '对守住的约定和细小的体贴会敞开心扉。', points: [
                    '她会对那些把时间或计划说得具体，并真正做到的人敞开心扉。她会留意你有没有守约。',
                    '比起夸张的话，她更看重细小而实际的体贴。比起夸奖，不如提起她之前讲过的事。',
                    '她流露心声之后，不要想着替她解决一切，在身边倾听就好。她不喜欢私事被当众提起，也不喜欢被迫承担别人的情绪。',
                    '她要你做出选择时不要含糊其辞。坦诚而体贴的回答能减少伤害。',
                    '她看起来沉着，但借口、说了做不到的约定和浪费别人的时间照样会扣分。她吃醋时不是声音变大，而是问题变得尖锐，别躲避，直接回答。'
                ] },
                yuna: { summary: '安静的陪伴和准确的话最有效。', points: [
                    '她喜欢旧书、星座和老式怪谈。沉默不会让她尴尬，她也不会把沉默当作拒绝。',
                    '信任需要慢慢积累。打听她的过往，或把她的个性当成看点，都会失去信任，不打招呼就爽约也一样。',
                    '短小而善于观察的话最适合她，与其写得长，不如写得准。',
                    '当她给你看她的文字或倾诉烦恼时，请坦诚并带着尊重回应，不要用道理去反驳她的恐惧。'
                ] },
                dain: { summary: '一起行动的邀约很受欢迎，同情则不行。', points: [
                    '她喜欢排球、节奏游戏，还有肉松面包配草莓牛奶，对一起活动或较量的约会特别来劲。提议要活跃、具体又带点俏皮。',
                    '她讨厌被当成病人，也讨厌同情、拉扯和含糊的约定。别把她当成脆弱的人。',
                    '提到她的膝盖时，等她自己开口，不要替她做决定。不要试图替她安排未来，也别假装伤病不存在，站在她这一边。',
                    '她能接住玩笑和好胜心。她认真起来话会变少，这时就陪她安静下来，把玩笑收一收。'
                ] },
                teacher: { summary: '在她守住的分寸之内表示尊重，并给予真诚的关注。', points: [
                    '在校期间，她会明确守住作为教师的界线。她欣赏尊重自己工作、坦诚、并把分内的事做好的人。用恋爱感情施压对她没有用。',
                    '她喜欢字斟句酌的句子、安静的书店和做事有始有终的人。对她写的文字，坦率而有深度的感想远比奉承更可贵。',
                    '不要要求她保密、安慰或拯救，也不要借感情模糊师生的界线，她会很坚定。她同样不会要求你照顾她的感受。',
                    '比起一次盛大的表达，跨越多个场景的平静关注更管用。'
                ] },
                nurse: { summary: '对坦率和轻松的暖意会敞开心扉。', points: [
                    '她放松又爱开玩笑，喜欢坦率说出自己状态的人。迷迭香的气味、整洁的保健室，以及辛苦一天后的晚餐话题都很合她心意。',
                    '装病、拿治疗当借口越界、明明不好却说“我没事”，这些都会适得其反。',
                    '她讲起自己的疲惫时，请倾听，不要再给她增添负担。她也会这样对你，并不希望你成为她的病人。',
                    '她真心担心时，话会简短而温暖。请用同样的温度回应，不要再加玩笑。'
                ] },
                haeun: { summary: '具体而真诚的关心最管用。', points: [
                    '她相信当面交流的内容。她看重守约、把难听的话听到最后、不对受伤的人移开视线的人。',
                    '具体而真诚的关心得分最高。表明你留意到了她的处境或犹豫。空话、套路式的夸奖和普通的礼貌几乎不会加分。一两个词的回应、随口抛出的一句玩笑也一样。',
                    '把任何人的痛苦当成闲话，或逃避责任，都会失去她的信任。她说话有礼貌，所以你也要保持尊重的语气。',
                    '在她被当作恋爱对象提出之前，不要表露恋爱感情或做肢体接触。会被拒绝并且扣分。'
                ] }
            }
        }
    };

    static getCopy(lang) {
        return this.copy[lang] || this.copy.en;
    }

    /**
     * 화면에 그릴 팁 목록을 반환합니다.
     * @param {string} lang - 언어 코드
     * @param {{ getName?: (charId: string) => string, isMet?: (charId: string) => boolean }} [options]
     * @returns {Array<{id, group, icon, charId, title, summary, points, locked}>}
     */
    static getTips(lang, options = {}) {
        const copy = this.getCopy(lang);
        const getName = options.getName || (() => '');
        const isMet = options.isMet || (() => true);
        return this.items.map(item => {
            const text = copy.items[item.id];
            const locked = Boolean(item.gateByMet && !isMet(item.charId));
            return {
                id: item.id,
                group: item.group,
                icon: locked ? '❓' : item.icon,
                charId: item.charId || null,
                title: locked ? copy.lockedTitle : (text.title || getName(item.charId) || item.id),
                summary: locked ? copy.lockedHint : text.summary,
                points: locked ? [] : text.points.slice(),
                locked
            };
        });
    }
}

window.GalleryTipsData = GalleryTipsData;
