# Remaining performance and maintenance improvements, 2026-10-16

This delivery covers items 4, 5 and 6 after the locale/public-build/gallery-loader
release. Runtime assets are 2.9.331; the service worker is cupid-v3.3.250.

## Initial runtime

The main game no longer downloads six gallery-only UI/controller scripts. Gallery
data and progression remain eager because the game records unlocks. Shared
freetalk-core.js remains eager because state restoration and FreeTalkSystem use it.

Korean examples and prompts.js load after the first rendered scene, using the
existing ordered script loader and retry handling. A shared promise ensures that
on-demand entry and background prefetch never execute these definitions twice.
Entering or restoring individual/group free talk awaits readiness. A delayed,
superseded free-talk render cannot replace a newer scene. Direct expression
updates also wait for definitions when needed. A failed optional prefetch leaves
the initial scene usable and can be retried on demand.

- Removed from game downloads: 81,742 uncompressed source bytes in six files
- Deferred beyond the first scene: 329,822 source bytes in two files
- Total removed from the first-scene dependency chain: 411,564 source bytes
- No claim that compressed network transfer or wall-clock startup time improves
  by the same percentage; those depend on connection and browser cache state

## CG snapshots

Snapshot property selection comes from all readable authored stylesheets, inline
declarations and active animation keyframes, rather than a fixed short list that
could lose ID-dependent layout. CSS declarations are assigned together. Opaque
stylesheets and `all` resets retain the original full computed-style fallback.
Stylesheet properties are rediscovered per transition so dynamic CSS is covered.

Complete computed-style comparisons against the old algorithm pass at desktop,
portrait phone and landscape phone sizes for normal/night views, dynamically
added styles, animated properties, unreadable stylesheets and reset fallbacks.

Median warmed browser benchmark, including property discovery and all snapshot layers:

| Viewport | Previous | Updated | Reduction |
| --- | ---: | ---: | ---: |
| 1440 x 1000 | 3.065 ms | 1.350 ms | 56.0% |
| 390 x 844 | 3.050 ms | 1.445 ms | 52.6% |
| 667 x 375 | 3.085 ms | 1.405 ms | 54.5% |

These are desktop Chromium measurements at the listed viewports, not claims about
physical phone hardware or the elimination of every dropped frame. Existing
1.5-second entrances, one-second exits, replacement timing, dialogue fade and
click protection remain unchanged, including existing reduced-motion behavior.

## Error classification

assets/js/error-classifier.js is the canonical browser/worker classification
source. scripts/sync-error-classifier.cjs embeds the same source in the primary
reporter, game loader, gallery loader and service worker. This adds no new network
dependency to early error reporting. Build and cache checks reject stale copies.
New bundles refresh the shared pure classifier so an earlier cached bootstrap
cannot pin an outdated classification implementation.

The corpus covers injected/minified rejections, known external scripts, network
and CSP failures, real application stacks and worker interruption handling.
Standalone loader tests verify that actual errors are still sent when the
primary reporter is unavailable. Existing queue, retry, deduplication and worker
report identifiers remain in their original execution contexts.

## Repository maintenance

114 root-level historical helpers/review files, 9,313,346 bytes, moved to
archive/maintenance-20261016/root/. All original SHA-256 hashes and sizes match
the manifest. Active source/command references were checked before moving them.
Archive snapshots disable Git line-ending conversion to retain those byte hashes
on Windows and Linux checkouts.
The stored snapshots match the source Git blobs exactly; checkout-only CRLF
conversion is normalized away and the original working copies are retained in
the external verification directory.
The root now has 63 files instead of 177. Supported validation/scenario commands,
deepseek_api.js and model_adapters/ keep their existing paths. Generated reports
now go to ignored tmp/reports/ so future checks do not recreate root dumps.

## Verification artifacts

- 48 title/game/gallery screenshots in all eight languages, at 1440 x 1000 and
  390 x 844: pixel-identical before/after; all rendered text and translations match
- Dedicated startup regressions: blocked prompts, saved free-talk entry,
  superseded render cancellation and recovery after a failed background fetch
- Dedicated CG computed-style parity and existing transition timing/cleanup tests
- Error-classifier and primary-reporter-unavailable regression tests
- Archive manifest test verifies all 114 archived files and active entrypoints
- Full browser run: 372 passed; one font-comparison failure was 17 translucent
  pixels at a maximum 2/255 channel difference, against a 16-pixel limit. The font
  test now swaps only the stylesheet in the same document to isolate font shape
  from unrelated compositor rounding. The original pixel limits remain intact,
  and a separate cold document retains the font-download and geometry checks.
- The stabilized complete font suite passes all 17 checks at the original limits.
- Screenshots, benchmarks and command logs are retained outside public output at
  D:/workspace/_workspace/cupid-final-optimizations-20261016/

No character artwork, visible copy, CSS, scenario content, affinity budgets,
provider routing or generated roleplay prompt text is changed.
