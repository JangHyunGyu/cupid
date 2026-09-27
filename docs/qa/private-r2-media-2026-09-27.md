# Private R2 media migration, 2026-09-27

## Change
- Production media reads private R2 objects through the MEDIA_BUCKET binding.
- Removed all runtime AES image decryption and full-image arrayBuffer reads.
- Cold responses stream after authorization and size/ETag validation; cache
  writes do not block the first response bytes.
- Retained existing signed identities, D1 unlocks and per-image URL versions.
- The public build is now dist, excluding all protected images, editing masters,
  maintenance code and repository configuration.
- Existing encrypted files are offline source archives only. No Korean copy,
  scenario data, image composition, progression rules or layout was changed.

## Local verification
- Security regressions cover signed/expired/forged sessions, cross-origin and
  oversized grants, authorization before warmed-cache reads, missing/mismatched
  R2 objects, outage handling, and public title images without a session secret.
- A delayed ReadableStream and blocked cache writer prove that the first image
  bytes can be consumed before the remaining image or cache write is available.
- The public-build test checks every protected path is absent and essential
  HTML, loaders, game code, service worker, metadata and SEO pages remain.
- Focused media and responsive Playwright suite: 26 passed. Coverage includes
  320/360/390/430 px phones, 568/844 px landscape, 768/1024 px tablets,
  1280/1920/2560 px desktop, seven languages, dynamic height, safe-area
  simulation, reduced motion, keyboard activation, sprite and CG rendering.
- Required cache verification passes. Production Functions compile successfully.
- All 194 R2 objects passed SHA-256 readback verification; all 100 logical image
  versions match the previous release. Full npm test, build:check, scenario:check
  (3419 scenes), cache:check and 14 focused media/build regressions passed.

## Release gates
Before push: finish SHA-256 readback verification of every uploaded object;
generate catalog/manifest; run npm test, build:check, scenario:check and cache:check;
confirm all per-image versions match the previous release.

After Git deployment: confirm version 2.9.273 / SW cupid-v3.3.192, private-r2
response source, cold and warm rendering, returned PNG/WebP SHA-256 checksums,
locked access denial even after another session warms the cache, original/static
path 404s, R2 public-domain denial, and desktop/mobile browser rendering.
Store actual timing and deployment evidence outside the published directory.

## Limits
First-request latency still includes authorization, R2 lookup and transfer.
Removing decryption does not prove a fixed end-to-end speedup; Server-Timing
storage measures headers, not the whole transfer. Unlock grants remain
client-reported, as documented in MEDIA_GATING.md. Previously delivered images
and historical Git assets cannot be retracted by this migration.
