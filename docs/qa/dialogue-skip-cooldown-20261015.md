# Manual reveal cooldown — 2026-10-15

Clicking during ordinary text reveal still completes the current line immediately.
Only that manual completion starts a 250ms dialogue input cooldown, measured from
the full text being written to the message element. Skipping messenger typing
starts the same cooldown after the current bubble arrives.

During the cooldown, dialogue advance input is discarded. It is neither queued nor
used to extend the deadline. Naturally completed text and restored messenger
bubbles do not start a cooldown. Entering a scene clears the previous deadline.
Existing ending and CG locks remain in place. Scenario text, route rewards,
free-talk turns, saved affinity and visible design are unchanged.

Implementation uses a monotonic performance clock where available and stores a
deadline rather than scheduling an advance timer. No Korean dialogue, prompts,
comments or log messages were added or rewritten.

Validation:

- `npm test`: passed, including seven new deterministic cooldown cases
- Focused browser checks: eight cases at 1440×900 and 390×844, with mouse and touch
- Boundary checks: input at 249ms is ignored; a fresh input at 250ms advances
- Messenger cancellation, natural arrival and save restoration are covered
- Existing messenger and story-continuity browser checks: all 34 passed
- Before/after comparison at 1440×900 and 390×844: identical content, geometry,
  computed text styles and screenshots (zero changed pixels in both comparisons)
- `text:check`, `scenario:check`, `cache:check` and build: passed

Visual baseline: `794ca64a`. Native PNG captures and comparison data are retained
locally under `_workspace/skip-ui-comparison`. The 250ms guard changes only input
timing; no CSS, asset or authored scenario changes are included.

Internal release: asset `2.9.321`, service-worker cache `cupid-v3.3.240`.
