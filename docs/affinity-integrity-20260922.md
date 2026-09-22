# Affinity integrity and Haeun route, 2026-09-22

## Haeun

Stored affinity remains -100 to 100. The best route supplies a theoretical 110 points: 35 personal conversation turns and five existing group turns, with +3 per turn below 90 and +2 at 90 or higher. No new choice directly awards Haeun points. The other five main routes retain their budgets.

After the existing Day 3 conversation, Day 4 adds five personal turns for players who have met and talked with Haeun. Day 5 adds five personal turns after the high-trust group conversation. At the start of the afternoon, 45 affinity plus that Day 5 personal conversation opens an explicit route choice. The highest current affinity among the five existing romance characters is selected at that moment, with a persisted random tie-break. Choosing Haeun costs that character 10 affinity and opens two ten-turn personal conversations. At 100, Haeun agrees to date; below 100, she declines and the original afternoon and ending conditions resume using current scores and incident flags. Original route flags are preserved until the decision, and incidents are never erased on fallback.

The gallery includes Haeun, her four existing expressions, the two previously registered square CGs, a new ending entry and post-ending FreeTalk. The gallery conversation occurs after Haeun has also graduated and become an adult. It requires her completed ending and peak 100. No new CG was generated or substituted.

## Progress receipts

`cupid_progress_integrity_v1` stores a run ID, revision, scene/choice/turn receipts and conversation checkpoints separately from the ordinary save. Reopening an old save restores the committed score and turn count. Repeated scene rewards, duplicate choices and repeated completed turns cannot add points. A new playthrough starts a new run rather than inheriting the previous run's stats. Web Locks serialize browser tabs; stale revisions cannot overwrite newer saves. Router-based choices persist their final arrived scene. Early conversation completion consumes the scene's remaining turns. Retry/failed/pending AI responses do not award points.

Choices are checked against the current available authored choices. Score inputs must be finite integers and stay within -100..100. Legacy `[STATS]` tags are stripped without changing scores. The public `?admin` gallery bypass is restricted to local development hosts; gallery opening and message sending both check unlocks.

These safeguards protect normal browser workflows and old saves. They are not a cryptographic server authority: a person who rewrites the complete browser storage, modifies JavaScript or forges anonymous client logs can bypass client-owned state. The fallback on browsers without Web Locks serializes only that document. Removing those trust boundaries requires server-owned authenticated progression; the audit does not claim that has been implemented.

## D1 audit and corrections

Audit window: 2026-09-15 06:27:04 through 2026-09-22 06:27:04 UTC. `chat_logs.created_at` contains KST wall-clock values, so the corresponding chat filter is 15:27:04 to 15:27:04 KST; route event timestamps are UTC. The window contains 4,869 chat rows, 89 device IDs and 1,282 route events.

No logged main-story turn exceeded +3, or +2 after 90. Repeated runs that reset scores were not treated as farming. Two devices had gallery 100s inconsistent with the retained main-story and perfect-ending conversation history. They are classified as suspected unlock bypass, not proven malicious intent. One affects Dain; the other affects all five existing romance characters.

Six idempotent correction rows cap those character peaks at 99. Raw chat logs are unchanged. The client manifest uses hashed device IDs, caps old save/gallery values, removes 100/perfect unlock flags, perfect CGs and perfect ending entries, and routes affected ending saves back to the appropriate affinity check. A later legitimate new achievement may requalify. The backend rejects requalification from gallery, ending, recovered, zero-gain or invalid-gain logs.

Private query results, before-state, correction statements, verification output and Korean review artifacts are retained outside the repository at `D:/workspace/_workspace/cupid-affinity-audit-20260922`. Original user identifiers and chat text are not published in this report.
