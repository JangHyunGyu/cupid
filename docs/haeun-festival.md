# Haeun festival events

Haeun's trust uses the same boundaries after the Day 3 conversation and before the Day 5 festival: high at 8 or above, neutral at 0–7, and low below zero. Neutral trust continues the existing route. Existing images and layouts are reused.

High trust opens a misunderstanding about the protagonist's closeness to Haeun. Low trust opens a confrontation after Haeun describes her discomfort during their earlier conversation. Both events choose the highest current affinity among Seoyeon, Yuna, Dain, Teacher and Nurse. Ties are random; `day5_haeun_rival` persists the chosen character before any event penalty and survives saves.

The selected character loses 15 affinity before the group conversation, or 20 if the protagonist delays explaining. Each conversation has five turns and uses the existing shared positive budget of three per turn. The event therefore cannot increase the existing romance route's theoretical ceiling. Its starting penalty is not applied again on reload or by the AI.

The low-trust prompt includes the raw user/assistant messages from Haeun's earlier personal conversation, with explicit transcript boundaries. This evidence belongs after the cache boundary. Haeun distinguishes what was said from her interpretation. Missing history does not permit invented insults, threats or quotes. The opening has the selected character express disappointment and ask the protagonist what they said to Haeun.

After the low-trust conversation, the protagonist can apologize and finish an inspection with Haeun (+5 Haeun trust), help without apologizing (+2), or leave (no recovery). These choices preserve the romance characters' existing scripted rewards and ending conditions. Completion prevents the festival gate from reopening the event during the same playthrough.

The Harem backup viewer uses two labels:

- `하은 관계 오해 그룹챗`: `day5_haeun_<character>_group_talk`
- `하은 평판 해명 그룹챗`: `day5_haeun_concern_<character>_group_talk`

The archive separates five-turn replay occurrences and retains both character identities, session IDs, message ranges and affinity records.

## Verification

- Regression tests cover boundary values, all five candidates, random ties, persisted selection after penalties, both penalty choices, all seven locales, existing assets, raw-history evidence, and stable cache fingerprints.
- Browser tests cover both event types with all five candidates, save/reload before and during chat, completed five-turn conversations, per-speaker scores, and archived messages.
- Existing route and layout checks remain in place. The old fullscreen tests now verify the already-disabled fullscreen helper; runtime fullscreen behavior is unchanged. Prompt verifiers call the shared gallery helpers through their actual scope.
- Korean review follows `D:/workspace/im-not-ai/codex/skills/humanize-korean/SKILL.md` and the repository's quick rules. Review artifacts are saved at `D:/workspace/_workspace/2026-09-22-001`: source mapping, original, final text, six-point review and measured change rate (0.47%). Character voices, names, numbers, placeholders and event facts were preserved.
- Visual comparison of the unchanged festival scene is identical on desktop; mobile has two pixels differing by one color value, with no visible layout change. The Harem viewer's existing card screenshots are identical on desktop and mobile; both new labels fit all five required viewports.
