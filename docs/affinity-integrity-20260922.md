# Affinity integrity and Haeun route, 2026-09-22

## Haeun

Stored affinity remains -100 to 100. The best route supplies a theoretical 110 points: 25 personal conversation turns, eight group rounds and the explicit choice bonus of +20. Conversation rewards remain +3 per turn below 90 and +2 at 90 or higher. The other five main routes retain their budgets.

After the existing Day 3 conversation, Day 4 adds five personal turns for players who have met and talked with Haeun. Day 5 adds five personal turns after the high-trust group conversation. At the start of the afternoon, 45 affinity plus that Day 5 personal conversation opens an explicit route choice. The highest current affinity among the five existing romance characters is selected at that moment, with a persisted random tie-break. The protagonist declares the choice in front of both characters: Haeun gains 20 and the displaced character loses 30 before a three-round face-to-face group conversation. Two five-turn personal scenes follow. At 100, Haeun agrees to date; below 100, she declines and the original afternoon and ending conditions resume using current scores and incident flags. Incidents are never erased on fallback. Old saves already inside the former route retain the original ten-turn personal scenes and skip the new group; the declaration receipt distinguishes those saves without granting the new bonus again.

The gallery includes Haeun, her four existing expressions, the two previously registered square CGs, the new square `ending_perfect_haeun` CG, an ending entry and post-ending FreeTalk. The ending CG unlocks when the 100-point ending is viewed. The gallery conversation occurs after Haeun has also graduated and become an adult. It requires her completed ending and peak 100. The backup viewer labels the new event `하은 선택 갈등 그룹챗`; its three-round occurrences remain separate from the earlier misunderstanding and reputation chats.

## Progress receipts

`cupid_progress_integrity_v1` stores a run ID, revision, scene/choice/turn receipts and conversation checkpoints separately from the ordinary save. Reopening an old save restores the committed score and turn count. Repeated scene rewards, duplicate choices and repeated completed turns cannot add points. A new playthrough starts a new run rather than inheriting the previous run's stats. Web Locks serialize browser tabs; stale revisions cannot overwrite newer saves. Router-based choices persist their final arrived scene. Early conversation completion consumes the scene's remaining turns. Retry/failed/pending AI responses do not award points.

Choices are checked against the current available authored choices. Score inputs must be finite integers and stay within -100..100. Legacy `[STATS]` tags are stripped without changing scores. The public `?admin` gallery bypass is restricted to local development hosts; gallery opening and message sending both check unlocks.

These safeguards protect normal browser workflows and old saves. They are not a cryptographic server authority: a person who rewrites the complete browser storage, modifies JavaScript or forges anonymous client logs can bypass client-owned state. The fallback on browsers without Web Locks serializes only that document. Removing those trust boundaries requires server-owned authenticated progression; the audit does not claim that has been implemented.

## D1 audit and corrections

Audit window: 2026-09-15 06:27:04 through 2026-09-22 06:27:04 UTC. `chat_logs.created_at` contains KST wall-clock values, so the corresponding chat filter is 15:27:04 to 15:27:04 KST; route event timestamps are UTC. The window contains 4,869 chat rows, 89 device IDs and 1,282 route events.

No logged main-story turn exceeded +3, or +2 after 90. Repeated runs that reset scores were not treated as farming. Two devices had gallery 100s inconsistent with the retained main-story and perfect-ending conversation history. They are classified as suspected unlock bypass, not proven malicious intent. One affects Dain; the other affects all five existing romance characters.

The initial six corrections used 99. The user requested restoration to evidenced values instead. The follow-up read only the first 100-point conversation for each affected character and numeric score history, not all conversations. All six first-100 rows were gallery entries with zero gain. Six additional idempotent correction records supersede the 99 cap; the client handles both untouched 100s and already-corrected 99s. Raw logs remain unchanged and 100/perfect unlocks remain revoked until earned again. Valid new main-story gains can raise the corrected peak gradually; gallery, ending, recovered and invalid-gain records cannot requalify it.

| Hashed device prefix | Character | Restored peak | Restored current |
| --- | --- | ---: | ---: |
| ede48cab5f44 | Dain | 10 | -2 |
| 62a80221a16c | Seoyeon | 97 | 97 |
| 62a80221a16c | Yuna | 92 | 5 |
| 62a80221a16c | Dain | 45 | -4 |
| 62a80221a16c | Teacher | 19 | 8 |
| 62a80221a16c | Nurse | 11 | 11 |

The second device's current values come from the last main-story score before each first 100, and peaks from the earlier main-story maximum. For the first device's Dain there is no pre-100 score in retained logs: 10/-2 is an explicitly documented fallback to the retained later main-story peak/latest score, not a claim to reconstruct missing history. Already-lower current values are preserved.

Private query results, before-state, correction statements, verification output and Korean review artifacts are retained outside the repository at `D:/workspace/_workspace/cupid-affinity-audit-20260922` and `D:/workspace/_workspace/cupid-haeun-switch-20260922`. Original user identifiers and chat text are not published in this report.
