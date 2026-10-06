# Contact scoring, chat tip and independent group scoring (2026-10-06)

User-approved changes (장현규, 2026-10-06). Gates, the -50 floor, the +3 turn cap, the stored cap 100
and the penalty tiers outside skinship are unchanged. Nurse scoring is unchanged by user decision.
Haeun is a 17-year-old student: every related rule stays non-sexual and age-appropriate.

## 1. Face-to-face chat tip
The in-game tip under the chat box (`FreeTalkSystem`, face-to-face mode, all characters) used
`*손을 잡으며* 같이 가자.` and its translations. Under affinity 20 unasked contact is penalised, and all
13 Seoyeon players who followed the tip received -12. The example is now a non-physical, concrete caring
line that the shared rubric rewards (noticing the other person and doing something specific):

| lang | example |
| --- | --- |
| ko | `*음료수를 건네며* 아까 좀 지쳐 보이더라. 이거 마시고 잠깐 쉬어.` |
| en | `*hands her a drink* You looked worn out earlier. Take a break with this.` |
| ja | `*飲み物を差し出して* さっき疲れてるみたいだったから。これ飲んで少し休んで` |
| es | `*le ofrece una bebida* Antes se te veía cansada. Tómate esto y descansa un poco.` |
| fr | `*lui tend une boisson* Tu avais l’air épuisée tout à l’heure. Bois ça et fais une pause.` |
| de | `*reicht ihr ein Getränk* Du sahst vorhin ziemlich erschöpft aus. Trink das und mach kurz Pause.` |
| pt | `*oferece uma bebida* Você parecia cansada mais cedo. Toma isto e descansa um pouco.` |
| zh | `*递给她一瓶饮料* 刚才看你挺累的。喝点这个，歇一会儿吧。` |

It fits every character's persona (Seoyeon, Yuna, Dain, Haeun, Teacher, Nurse) and contains no contact.
`tests/contact-and-group-scoring.test.cjs` checks parity and that the example never trips a contact
boundary at affinity 0-19, including non-romance Haeun and Nurse.

Korean check (humanize-korean quick rules): original `*손을 잡으며* 같이 가자. 처럼 말해보세요.` →
final `*음료수를 건네며* 아까 좀 지쳐 보이더라. 이거 마시고 잠깐 쉬어. 처럼 행동과 말을 함께 써 보세요.`
No translation-ese (A), no connective comma (C-11), single register (banmal line, 해요체 guide), no
inflated idiom (D). Group tip `점수를 나눠 갖고, 중간에…` → `캐릭터마다 점수를 따로 받아요. 중간에…`
removes the connective comma. Prompt line `아직 허락을 구한 단계이며 실제 접촉은 없었습니다.` avoids
`-고,`.

## 2. Contact scoring (`freetalk-core.js`)
`classifyCupidIntimacyAdvance` now separates three modes for a contact cue:
- `action` — a marked (`*...*`, `(...)`) or completed act, or coercion. Unilateral contact.
- `request` — asking or inviting without acting: consent forms (`해도 돼`, `잡을래`, `손잡고 갈래?`,
  `can I`, `darf ich`, `posso`, `可以…吗`, `してもいい` …) or any question.
- `apology` — `미안/죄송/sorry/ごめん/lo siento/désolé/Entschuldigung/desculpa/对不起…` without a new
  consent ask. Apologies are never blocked and are scored by the normal rubric.

`getCupidAffinityIntimacyBoundary` / `enforceCupidAffinityIntimacyBoundary`:

| case | before | now |
| --- | --- | --- |
| polite request, blocked (affinity < 20 etc.) | ≤ 0, model often gave -10 (many requests were misread as actions) | clamped to 0 or -1 |
| pestering request (`제발`, `왜 안 돼`, `come on` …) | ≤ 0 | ≤ 0, no floor |
| apology about contact | -10 cap (misread as action) | not blocked, normal rubric |
| unasked light contact, affinity 0-19 | ≤ -10 (players got -12) | -9 to -5 |
| light contact at negative affinity / non-romance (Haeun) | ≤ -10 | ≤ -10 (unchanged) |
| kiss / sexual contact while blocked | ≤ -12 / ≤ -18 | unchanged |
| Nurse | legacy | legacy (`LEGACY_CONTACT_SCORING_CHARACTERS`) |

Hand-holding phrases in en/es/fr/de/pt and Chinese contact cues were added so the same rule applies
in every language (previously only `hold hands`-style phrases and no Chinese were detected). The
latest-turn gate text (ko, and en used for the other six languages) states the same ranges. Main 1:1,
group and gallery call sites pass `characterId`.

## 3. Independent group scoring
`FreeTalkSystem._applyGroupAffinity` no longer shares a +3 positive budget between the two speakers.
Each speaker gets its own change per turn, capped at `GROUP_FREE_TALK_PER_CHARACTER_TURN_GAIN_MAX = 3`
(both +3, one +3 and the other -3, etc.). Social, rivalry, Haeun switch and confrontation prompts
(ko + en) now say affinity is scored separately for each character; the "positive sum ≤ +3" and
"recovery total ≤ +3" clauses were removed. Gallery group tips (8 languages) say the same.

Budget: each romance/hidden route has 4 personal scenes × 3 turns + 2 group scenes × 3 turns = 18 turns
before the ending, so the pre-ending free-talk budget is 18 × 3 = 54 per character. With the old shared
budget a character could only reach 54 if the partner received nothing in every group turn (about 36 in
practice). The documented maxima are unchanged and now hold for both group participants: Seoyeon 125,
Yuna 125, Dain 126, Teacher 123, Nurse 123 (authored 71/71/72/69/69 + 54). Haeun stays at 127
(33 turns × 3 + 20 + 8). Gates (Haeun 8/45/100, endings 100/60/40) are unchanged. Group events that open
with a penalty (Haeun festival -15/-20, Haeun switch -30, Day 5 confrontation -40/-50) still cannot raise a
route ceiling: one character can regain at most +3 per turn.
