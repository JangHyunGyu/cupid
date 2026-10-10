# Repeated response and missing log investigation (2026-10-10 KST)

Evidence: the player named King has a Yuna affinity=100 row at 05:35:44.764.
Neither that player's transcript nor all retained Cupid chat logs/render receipts
contain the screenshot's `our our our` string. No error row identifies that
player's screenshot. This does not establish who received it, its timestamp, or
whether the repetition originated upstream or in display. Prompt caching and
sampling settings are not proven causes.

Confirmed gaps: raw streaming deltas could reach the UI before validation;
main/group/gallery logging ran only after paced display and state updates. The
old server watcher checked successful final events only, retained no response
body, and could miss cancelled/incomplete streams. A user row alone could also
satisfy the watcher even when its assistant row was missing.

Changes: buffer and validate before preview; reject long consecutive token/phrase
loops using the existing empty display fallback (zero affinity/turn consumption,
no new generation). The shared Harem AI Worker archives replies in chat_logs
before delivery and returns stable log IDs. Browser receipts promote those rows
to realtime and retain actual displayed text and affinity. Older clients are
deduplicated by request and speaker in the backup viewer. API-only rows are
explicitly marked as unconfirmed display. Diagnostic incidents retain bounded
original response/transport in cupid_ai_reply_incidents and link error_logs by
request ID, user, character, model/provider and interruption status.

Delivery waits for complete validation and D1 acknowledgement, so first text can
appear later; paced rendering is retained. A D1 archival failure returns an error
instead of unlogged dialogue. Evidence is bounded to 256 Ki characters; this is a
transport safety limit, not a prose limit. Existing safety blocks remain terminal.
No provider preset, sampling parameter, roleplay prompt or authored Korean copy
changed. Missing historical content cannot be reconstructed from the screenshot.

Verification: cache checks in both repositories; scenario:check (3449 scenes);
Worker unit/integration checks for archival, interruption, repeats, receipt
promotion, dedupe and metadata; mocked browser checks for main/group/gallery and
offline/keepalive recovery. Repeat fixtures cover 320x568, 430x932, 768x1024,
1024x768, 844x390 and 1440x900. Visual review found and fixed a narrow-phone input
that collapsed to one character per line. No production player data was edited.
