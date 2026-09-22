# Haeun festival events

Haeun's trust uses the same boundaries after the Day 3 conversation: high at 8 or above, neutral at 0–7, and low below zero. The low-trust reputation event takes place on Saturday morning, Day 4, after the existing morning errands and before returning home to prepare for the date. The high-trust relationship misunderstanding remains at lunchtime on Day 5. Neutral trust continues the existing route. Existing layouts are retained; two dedicated Haeun CGs mark the end of each buildup.

High trust opens a misunderstanding about the protagonist's closeness to Haeun. Low trust opens a confrontation at the school gate after Haeun describes her discomfort during the previous day's conversation. Both events choose the highest current affinity among Seoyeon, Yuna, Dain, Teacher and Nurse. Ties are random; the independent `day4_haeun_rival` and `day5_haeun_rival` flags persist each day's chosen character before any penalty and survive saves. If trust recovers to 8 or above after Day 4, Day 5 may open its separate event and select the current highest-affinity character anew.

The selected character loses 15 affinity before the group conversation, or 20 if the protagonist delays explaining. Each conversation has five turns and uses the existing shared positive budget of three per turn. The event therefore cannot increase the existing romance route's theoretical ceiling. Its starting penalty is not applied again on reload or by the AI.

The low-trust prompt includes the raw user/assistant messages from Haeun's earlier personal conversation, with explicit transcript boundaries. This evidence belongs after the cache boundary. Haeun distinguishes what was said from her interpretation. Missing history does not permit invented insults, threats or quotes. The opening has the selected character express disappointment and ask the protagonist what they said to Haeun.

After the Day 4 conversation, players who previously talked with Haeun can have five personal turns before returning to the existing morning ending and date preparation; `day4_haeun_event_done` prevents a repeat of the group event. At the Day 5 festival, trust still below zero opens only the existing inspection follow-up: apologize and finish an inspection with Haeun (+5 Haeun trust), help without apologizing (+2), or leave (no recovery). These choices preserve the romance characters' existing scripted rewards and ending conditions. Day 5 does not start another reputation conversation. The high-trust event now leads to five personal turns; the subsequent optional romance route is described in [the affinity integrity report](affinity-integrity-20260922.md).

The Harem backup viewer uses two labels:

- `하은 관계 오해 그룹챗`: `day5_haeun_<character>_group_talk`
- `하은 평판 해명 그룹챗`: `day4_haeun_concern_<character>_group_talk`

Existing Day 5 reputation scenes and their locale entries remain available exclusively for old saves. Old `day5_haeun_concern_<character>_group_talk` archives retain their original day and label; new conversations are recorded as Day 4. The legacy selector is a runtime entry point, not a route from the new festival gate.

The archive separates five-turn replay occurrences and retains both character identities, session IDs, message ranges and affinity records.

## Collectible CGs

- `event_haeun_trust` / `day5_haeun_trust_cg`: follows Haeun's defense of the protagonist, before the selected character's escalation. Deployed square crop: 2160 × 2160; preserved landscape original: 3840 × 2160.
- `event_haeun_reputation` / `day4_haeun_reputation_cg`: follows Haeun's explanation of her discomfort at the gate, before the selected character's escalation. Deployed square crop: 3072 × 3072; preserved landscape original: 5504 × 3072.

Each CG unlocks only when its scene is viewed. The existing gallery stores that unlock separately from game saves and exposes the square image, localized name, description and unlock hint in all seven languages. Standing sprites are hidden during the CG and restored for subsequent scenes. CGs do not change scores or group-chat behavior. The user-approved square crops remove only side pixels, without resizing. Full landscape originals are archived separately; square PNG and lossless WebP files are pixel-identical. Prompts, crop coordinates and provenance are in [haeun-cg-prompts.md](haeun-cg-prompts.md).

## Verification

- Regression tests cover boundary values, all five candidates, random ties, persisted selection after penalties, both penalty choices, all seven locales, existing assets, raw-history evidence, and stable cache fingerprints.
- Browser tests cover both event types with all five candidates, save/reload before and during chat, completed five-turn conversations, per-speaker scores, and archived messages.
- Existing route and layout checks remain in place. The old fullscreen tests now verify the already-disabled fullscreen helper; runtime fullscreen behavior is unchanged. Prompt verifiers call the shared gallery helpers through their actual scope.
- Korean review follows `D:/workspace/im-not-ai/codex/skills/humanize-korean/SKILL.md` and the repository's quick rules. Review artifacts are saved at `D:/workspace/_workspace/2026-09-22-001`: source mapping, original, final text, six-point review and measured change rate (0.47%). Character voices, names, numbers, placeholders and event facts were preserved.
- Timing-split Korean review is recorded at `D:/workspace/_workspace/2026-09-22-002`. The Day 4 entrance, exit, previous-day reference and prompt location were reviewed after adapting the scene; no additional stylistic rewrite was needed. Tests cover both dates, independent rival selection, recovery before the festival, archive dates and legacy save continuation.
- Visual comparison of the unchanged festival scene is identical on desktop; mobile has two pixels differing by one color value, with no visible layout change. The Harem viewer's existing card screenshots are identical on desktop and mobile; both new labels fit all five required viewports.
