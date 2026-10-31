# Prompt cache audit — 2026-11-01

Main and Gallery FreeTalk share `freetalk-core.js`. Their fingerprint helpers used
to normalize the complete prompt, including dynamic recall, and then normalize the
stable section again while hashing. They now split at the first cache boundary
before doing any work and hash the exact trimmed stable text once. Dynamic tails
do not affect the key; differing transmitted newlines and internal whitespace do.

The common Harem OpenRouter Worker also excludes runtime system messages following
the boundary from session affinity and fingerprints the assembled stable wire
messages. See Harem's `docs/prompt-cache-20261101.md` for transport coverage.

No Korean or other prompt wording, scenario, relationship rule, model preset,
protected media flow or UI layout changed. Frontend and service-worker asset
versions were synchronized across all eight locales.

Verification: `npm run cache:check`, `npm run scenario:check`, `npm run build`,
`npm run build:check` and browser handoff checks passed. Fingerprint regression
coverage includes large dynamic tails, internal whitespace and newline differences.

A local synthetic benchmark with about 30k stable characters and 290k dynamic
characters (500 iterations after warm-up) measured 0.649ms before and 0.066ms after
per fingerprint. This measures client fingerprint work only, not request latency,
provider hit rate or production savings.
