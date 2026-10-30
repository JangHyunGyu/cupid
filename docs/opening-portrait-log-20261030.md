# FreeTalk opening portrait snapshot repair

The rooftop opening `lunch_seo_freetalk` already selected `seyoun_soft_smile.png`.
The backup still received `expression: normal` and `seyoun_normal.webp` after a
previous AI reply had set `img.dataset.cupidAvatarAsset` on the reused image.
SceneRenderer updated `src` and `rawSrc` during its crossfade but retained this
higher-priority log snapshot. The viewer faithfully displayed the incorrect log.

Earlier changes were incomplete: `0b91fa31` assigned scene-specific opening art;
`dfa5c132` added opening expression logs, but its fixtures used fresh image objects
and did not exercise the crossfade introduced in `7e42ba40`.

SceneRenderer now synchronizes the logical portrait snapshot on initial load,
crossfade commit, and unchanged-image presentation. Failed or superseded image
loads still preserve the previous portrait. No dialogue, prompt, image object,
access rule, historical conversation row, or viewer mapping is changed.

Validation:

- Before the fix, the browser regression showed a `soft_smile` image and failed
  with `Expected: soft_smile; Received: normal` for the opening log.
- After the fix, six characters were exercised at 320x568, 430x932, 932x430,
  768x1024, 1024x768, and 1440x900, with reduced motion and screenshots.
- Existing speaker ownership, opening/recovery logs, scene expression matching,
  and asynchronous crossfade regressions passed (16 tests).
- Harem's `scripts/test-conversation-viewer-dedupe.cjs` passed.
- `npm run cache:check`, `npm run scenario:check`, and `npm run build` passed.
- Asset version: `2.9.368`; service worker cache: `cupid-v3.3.287`.

Old log rows retain the values originally saved; this fix applies to new openings
after the updated client loads. Deployment smoke-test evidence is retained outside
the repository in `D:/workspace/_workspace/cupid-opening-portrait-20261030/`.
