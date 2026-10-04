# Affinity persistence and correction audit (2026-10-04)

| Path | Finding / validation |
| --- | --- |
| Shared Worker correction peaks | The removed high-affinity +2 restriction discarded valid +3 gains above 90. Align with the current story +3 cap, including requalification at 100 in all eight locales and group dialogue. Keep correction ownership, newer realtime log IDs, one-time update and gallery/ending exclusions. |
| StateManager + progression ledger | Grant scope opened before acquiring the lock. Queued events overwrote each other's key; a completed event could clear a waiting event's grant. Scope the grant to the synchronous locked commit. Verify native Web Locks and fallback queue, failure cleanup, duplicate receipts and new-run fencing. |
| Storage adapter | A single quota/read error permanently disabled native storage. Previously saved affinity receipts and identity then appeared missing; replay could award a turn again. Keep native reads available, retain known values during transient read failure, track pending writes/deletions separately, and retry affected keys after recovery. A pending write compares its native baseline before retrying; newer values from another tab take precedence and still fence the old run. |
| Save/reload | Exercise real StateManager, FreeTalkSystem.applyAffinity, progression ledger and SaveManager in Chromium, including reload after quota recovery. Preserve existing save keys and affinity rebalance versions. |
| Stale requests / galleries | Existing request ownership guards reject late responses after scene/character changes. Story-turn receipts prevent duplicate awards. Post-ending affinity locks and gallery separation retain their existing rules. Existing regression suites cover rejected requests, correction migrations and edited saves/gallery records. |
| Cache rollout | Asset version 2.9.290 and service worker cache cupid-v3.3.209. Synchronize storage-adapter query versions on all 24 localized entry pages. |

Persistent browser storage denial still provides only an in-memory fallback until storage recovers; closing the page while writes remain denied cannot durably retain those writes. The client-side seals and stack guards detect ordinary edits but do not establish server-authoritative anti-cheat security against a user who controls all browser code. This change preserves their existing protection and fixes normal-play loss/duplication without claiming stronger security.

Regression proof before fixes: queued grant tests, native storage quota/read/deletion/reload tests and both server +3 cases failed. After fixes, run the complete Cupid and shared-backend suites, cache checks, public build and targeted Chromium tests before publishing.
