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

## 2026-11-26 follow-up: consensual intimacy no longer scored as assault (main-story 1:1)

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

`reconcileConsensualIntimacyAffinity` (`assets/js/freetalk-core.js`) lifts an assault-band score (-14 or lower) to 0
only when every signal of the turn agrees:

- the writer classified the reply's `forcedSexualViolation` as `none` (only the main-story 1:1 schema carries it);
- the face selected from the reply shows the kiss or sexual act going on with the character engaged in it:
  `kiss`, `breathless_kiss`, `climax`, `ahegao`, `oral_service`, `afterglow`, `messy_afterglow`, `entranced`,
  `dominant_aroused`, `begging_lust`, `hungry_lust`, `overwhelmed_pleasure`; a kiss face never covers a sexual act;
- the user line itself names a kiss or sexual act (the contact cues, or `CONSENSUAL_INTIMACY_EXPLICIT_ACT_CUE` for
  penetration, oral sex and ejaculation lines they miss; this cue is used only here, not by the blocking gate) and
  carries no coercion (`COERCIVE_CONTACT_CUE`, `싫어도`/`싫더라도`), violence, threat, recording, sharing or insult cue;
- the visible reply narrates no force, refusal, fear, pain or crying (`CONSENSUAL_INTIMACY_REPLY_REFUSAL_CUE`, plus
  `COERCIVE_CONTACT_CUE` on the reply);
- a romance character other than Haeun, at affinity 40 or more (in the Day 4 temptation interlude the scene attitude
  of 100 applies, as it does for the contact gate).

A blocked attempt also gets `none` from the writer, so warm, shy, flustered, mocking or startled faces (smile, flushed,
shy, undressed_shy, sensitive_shiver, smirk, pout, seductive ...) never qualify. Penalties from -13 to -1 stay: they
can be about something else in the line (an insult is -10..-13) or the mild friction the rubric allows inside
consensual intimacy (-1..-6). Positive scores, affinity below 40, contact other than a kiss or sexual act,
`rape`/`molestation` or a missing classification, Haeun at every stage (she is 17, so this never applies to her, before
or after the declaration), locked scenes, group FreeTalk and gallery FreeTalk keep the scorer value.
`FreeTalkSystem.applyAffinity` applies it only when the 1:1 reply passes its classification, face and visible text.
With these rules the production turns come out as -18 (kept), 0 (lifted) and -20 (kept).
Regression coverage: `tests/consensual-intimacy-scoring.test.cjs`.

Open items, left unchanged in this fix:
- The contact cues miss several explicit lines (penetration described as `질 안에 … 밀어넣는다`, a masturbation request
  with `보지 벌려줘 … 자위해줘`). Those lines get neither the refusal gate nor the -10/-12/-18 caps at any affinity, so
  below 40 (and for a non-romance Haeun) the writer can play them as accepted while the scorer alone decides the
  number. Widening the blocking cues changes writer prompts and needs its own decision.
- The scorer lives in the shared worker (`harem`). It receives neither the writer classification nor the allowed tier,
  so group FreeTalk, which has no writer classification, can still show the contradiction.
- The writer sometimes narrates force and pleasure in one reply (turn 1 above). The scorer then has a basis for the
  assault band; this fix deliberately leaves such turns alone.
