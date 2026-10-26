# Cupid portrait transition

Applied Harem's portrait dissolve to Cupid's shared `preservePrevious` image-loading path used by main, group, and gallery FreeTalk.

- Duration: 1500 ms; easing: `cubic-bezier(0.4, 0, 0.2, 1)`.
- Matches Harem's outgoing blur/brightness, incoming blur/saturation, vertical gradient masks, and moving pink/gold screen-blended veil.
- Mask position uses the same Web Animations timeline as opacity/filter so Cupid's existing idle animation remains independent.
- Loading, media unlocks, expression selection, and saved variants are unchanged. Failed replacements retain the previous image; stale loads cannot replace a newer selection.
- Reduced motion skips the dissolve. Temporary masks, outgoing images, and veils are removed after completion.

## Verification

- `npm run cache:check`: passed after implementation.
- `npm run build`: passed; all 24 localized pages have synchronized cache versions.
- `npm test`: passed, including media security/loading, scenario and localization checks, and deterministic playtests.
- `npx playwright test tests/e2e/expression-shuffle.spec.cjs --workers=2`: 10 passed across small/large phones, landscape, tablet, and desktop.
- `node --test tests/expression-shuffle-parity.test.cjs tests/media-gate-render.test.cjs`: 12 passed before the change; the same coverage is included in the post-change cache check.
- Chromium checks at 390 × 900 and 1440 × 900 for main, group expression application, and gallery FreeTalk: six cases passed.
- Saved resting screenshots before and after implementation are byte-identical in all six cases. Idle motion was disabled identically for this comparison. No layout, text, controls, or persistent styling changed.
- Paused each transition at 750 ms and verified the gradient mask, blur, 1500 ms duration, outgoing image, and veil. Captured transition screenshots and inspected mobile gallery and desktop main views.
- Completed each transition and checked temporary layer/class cleanup, then checked a reduced-motion replacement creates no outgoing image or veil.
- Local screenshots and the browser verification script are retained in ignored `tmp/expression-visual/` and `tmp/expression-visual.cjs`.

Asset version: `2.9.359`; service-worker cache: `cupid-v3.3.278`. Visible version label is unchanged.
