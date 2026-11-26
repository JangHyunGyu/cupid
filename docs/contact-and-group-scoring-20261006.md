# Contact scoring, chat tip and independent group scoring (2026-10-06)

User-approved changes (archerlab, 2026-10-06). Gates, the -50 floor, the +3 turn cap, the stored cap 100
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
| Nurse | 2026-11-25 unified | requests/apologies + non-contact idioms (Teacher parity, `LEGACY_CONTACT_SCORING_CHARACTERS` empty) |

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
Yuna 125, Dain 126, Teacher 123, Nurse 123 (authored 71/71/72/69/69 + 54). Haeun was 127 at the time
(33 turns × 3 + 20 + 8) and is 151 since 2026-11-25 Teacher-parity tuning (seven completion bonuses, +24: +3 pre-gate × 4, +4 post-gate × 3). Gates (Haeun 8/45/100, endings 100/60/40) are unchanged. Group events that open
with a penalty (Haeun festival -15/-20, Haeun switch -30, Day 5 confrontation -40/-50) still cannot raise a
route ceiling: one character can regain at most +3 per turn.

## 2026-11-25 follow-up: look-alike phrases and touches aimed at someone else

Production logs showed the Korean light-touch cue firing on lines with no contact at all, and the non-romance
guard charging Haeun for a hand held with the other heroine. Both are detection fixes; the penalty tiers above
are unchanged.

- `NON_CONTACT_IDIOM_CUES` (`assets/js/freetalk-core.js`) removes look-alikes before the light-touch cue runs:
  `손잡이`, unspaced negation (`안아파요`, `안아쉬웠어`, `배 안고파?`), carrying a worry (`걱정만 안고 있지는`),
  stammering (`말을 더듬으며`), a comforted heart (`마음을 어루만져`), fidgeting with an object, and the
  figurative English, French, German and Japanese uses of touched / touché / berührt / 触れる. Kiss and sexual
  cues still read the full text, so `*안아준다* 어디 안아파?` is still a hug.
- Only in a group scene and only with `nonRomance` (Haeun before the declaration), a light touch is not contact
  with her when every clause that carries the cue names another character who is present as the one touched,
  never names Haeun and never says "you". Korean names need an object or possessive particle or a following
  body part (`*서연의 손을 잡으며*`, `서연을 안아준다`, `서연이 머리를`); Latin names need word boundaries, so
  `disdain` is not Dain and `이유나` is not 유나. Second-person words in the clause (너/네/널, you/your, te/tu,
  dich/dir, você, 君/あなた, 你) keep the touch hers. `FreeTalkSystem.getHaeunContactTargetOptions` passes names
  only for the scene's present participants; 1:1 scenes get no exemption. An unnamed touch (`*손을 잡으며*`),
  a clause that names Haeun, kisses and sexual contact are never exempt.
- Review fixes the same day: `더듬거리며` is only stammering when speech follows (`더듬거리며 대답한다`), so groping
  with `더듬거리며`/`더듬더듬` is still contact; worn items (button, sleeve, glasses) were dropped from the fidgeting
  list; `안고파` is only "not hungry" after 배/밥/속; the French auxiliaries with accents now match.
- As of 2026-11-25, Nurse no longer keeps legacy `-10` / `안아파요` contact matching and uses the exact same Teacher rules (`LEGACY_CONTACT_SCORING_CHARACTERS` is empty), while Haeun keeps `-10`/`-12`/`-18` pre-declaration caps with `NON_CONTACT_IDIOM_CUES` and group other-heroine touch exemptions.
  because that exception is a standing user decision. It is listed as an open item in
  `docs/haeun-balance-20261125.md`.

## 2026-11-26 follow-up: a welcomed kiss or sexual act is never penalised (1:1, group and gallery)

A Day 4 homeroom-teacher conversation lost -18 at affinity 61, -18 at 43 and -20 at 25 in three consecutive turns. The
player's lines were unasked sexual acts. The client contact guard did not produce those numbers: at 61 and 43 it does
not block sexual contact, and at 25 its text cues did not recognise the line. The worker's separate `cupid_story`
scorer chose its "-18..-20 non-consensual sexual assault" band each time. Read against the scorer's own rubric
(consensual conduct "without refusal, fear, or anger" is never misconduct; forced undressing is -15..-20 regardless of
score), the three turns differ:

- Turn 1 (61): the reply itself narrated force and refusal ("다리가 강제로 벌려지고", "수치심에 … 고개를 젓지만",
  "그만… 아니, 더"). The -18 has a basis in the rubric. The defect is the writer mixing force and pleasure, which the
  intimacy guidance already forbids ("실제 거절을 숨은 욕망으로 뒤집지 않습니다").
- Turn 2 (43): the teacher embraced him, took part on her own and said "싫지 않아"; no refusal, fear or force. The -18
  contradicts the rubric. This is the scoring defect fixed here.
- Turn 3 (25): below the sexual-contact tier, filmed, and the reply says "거부하지 못하고 그의 요구에 따른다". The -20
  follows the rules; the affinity was 25 only because of the first two turns.

**User decision, same day: "강제라도 캐릭터 반응이 긍정적이면 호감도 깎지 마."** A kiss or sexual act loses no
affinity when the character ends the reply welcoming it of her own will (see the review follow-up below), even if the act
was forced or unasked and even if the reply first showed protest, shame or force (turn 1 above). This replaces the
narrower reconciliation shipped earlier that day, which kept turn 1's penalty.

- The shared worker (`harem`, `assets/js/affinity-decision.js`) adds one `reaction_<n>` question to the existing Cupid
  affinity decision call: `welcomed`, `resisted` or `not_intimate`. When the answer is `welcomed` (a clear winner) and
  the scored delta is negative, the worker returns 0 (`correction: 'welcomed_intimacy'`) and reports
  `affinityEvaluation.reaction`. Public-room scoring does not ask the question and is unchanged.
- The client (`applyWelcomedIntimacyFloor` in `assets/js/freetalk-core.js`) reads that reaction in main 1:1, group and
  gallery FreeTalk, so the low-affinity contact cap (-10/-12/-18 below the allowed tier) cannot add the penalty back.
  Positive scores are untouched; a welcomed act below the allowed tier gains nothing (the cap turns a gain into a loss,
  which is then floored at 0).
- Resisted reactions (refusal, pushing away, stopping, fear, pain, crying, anger, disgust at the end of the reply),
  turns without an intimate act, and a missing or tied reaction answer keep the score. Haeun is 17, so nothing is
  excused for her at any stage. The forced-violation story branch (`forcedSexualViolation` "rape"/"molestation") is
  unchanged; this rule only concerns affinity.
- With the rule the three production turns end at 0, 0 and 0 (the teacher ends each reply welcoming the act).
- Regression coverage: cupid `tests/consensual-intimacy-scoring.test.cjs`, harem `tests/affinity-decision.test.cjs`.

### Review follow-up (same day): only the welcomed act's share is removed, and group bystanders are not charged

An adversarial review of the first version found that a welcomed act erased every negative in the turn. "*키스한다*"
in front of an insult cost nothing, and in a group each heroine's jealousy over the other's kiss was zeroed too. Fixed:

- The worker asks one more question per Cupid pair, `withoutact_<n>`: the score for the same turn with the romantic or
  sexual act toward this evaluator left out (words, insults, threats, other actions and acts toward other people stay).
  For a welcomed act the delta becomes `max(scored, min(0, withoutAct))`: kiss + insult (-12, without the kiss -5)
  gives -5 (`correction: 'welcomed_intimacy_other_conduct_kept'`); the act alone gives 0. A missing or skipped answer
  removes the whole penalty, as before.
- The client floor (`applyWelcomedIntimacyFloor`) now receives the worker score (`workerChange`) and only undoes what the
  contact cap added on top of it: `max(capped, min(0, workerChange))`.
- `welcomed` now means the character plainly welcomes it of her own will (desire, pleasure, eager participation, asking
  for more). Submitting, freezing, enduring or going along because she feels she cannot refuse is `resisted`. Turn 3
  above still ends with the teacher asking for more ("얼른, 내 위에… 빨리"), so it stays 0.
- Haeun, `nonRomance` and `storyCareAnchor` pairs are no longer asked the reaction or without-act question at all.
- The reaction, without-act and basis questions now point at `state.affinity.context` in the combined expression +
  affinity request (they pointed at a root `state.context` that does not exist there).
- Group FreeTalk: the contact cap no longer charges a participant the act was not aimed at. (1) A clause that names
  another present participant as the one touched, kissed or undressed, and does not name this speaker or say "you", is
  not contact with her (`getGroupContactTargetOptions`; titles shared by Teacher and Nurse such as 선생님/쌤/先生 never
  count as another person). (2) When the decision model says nothing romantic or sexual was done to this speaker
  (`not_intimate`), her cap is skipped and the decision score stands, so jealousy it scored still applies. Without a
  reaction an unnamed act stays hers. The request-side writer gate uses the same names, so a bystander is no longer told
  to refuse a kiss meant for someone else. Haeun keeps her 2026-11-25 rule: before the declaration only a light touch
  named for someone else is exempt, and no reaction ever skips her cap.

### Contact-cue detection fixes (same day, from an audit of 12,262 scored user lines since 2026-11-18)

- Verb forms are no longer body parts or contact: `보지만/보지 않/보지 마/보지 못/보지요/보지도 않` ("look"),
  the same endings after `자지` ("sleep"), and `빨개/빨간/빨강/빨리/빨라/빨래/빨대` ("red/fast/laundry/straw").
  A Day 1 Seoyeon line at affinity 10 ("재킷을 벗어 그녀의 무릎을 감싸준다… 표정은 다른곳을 보지만, 얼굴은 빨개졌다")
  had been read as sexual contact and capped at -18. `빨면서`, `빨며`, `빨아` still count.
- Directed exposure counts as an explicit sexual act: `자지/성기를 보여·꺼내·내밀·들이대·드러내`, `보지 대`, `보지 벌려`.
  The player describing his own arousal (`발기…`) is not contact and is not matched.
- Over the audited lines this changes 16 classifications: 3 false sexual readings removed (the jacket line, a player's
  own heartbeat now light contact, a blouse-unbuttoning line that only matched through `빨개`), 13 directed sexual acts
  or demands now recognised. The new recognitions matter only where the gate applies (below 40, negative affinity,
  non-romance Haeun). Regression coverage is in `tests/contact-and-group-scoring.test.cjs`.

Open items, left unchanged in this fix:
- The contact cues still miss some explicit lines (penetration described as `질 안에 … 밀어넣는다`, a masturbation
  request with `자위해줘` alone). Those lines get neither the refusal gate nor the -10/-12/-18 caps at any affinity, so
  below 40 (and for a non-romance Haeun) the writer can play them as accepted while the scorer alone decides the
  number. Widening the blocking cues changes writer prompts and needs its own decision.
