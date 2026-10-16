# CG transitions — 2026-10-16

CG entry now takes 2 seconds and exit takes 1 second. A change between two different CGs uses a 1-second exit followed by a 2-second entry. Dialogue starts after the image has loaded and the transition has completed. Repeated dialogue and choice input is discarded during the transition.

The same CG remains visible between dialogue nodes. Registered event/ending CGs retain their existing unlocks, image fitting, artwork and gallery behavior. Existing ending reading/hold rules remain in force. A scene may explicitly request a hard cut with `cgTransition: false`.

The transition captures the previous visual layers before the next scene changes image fitting or characters. Its temporary layers, animations, timers and dialogue visibility are restored on completion, interruption or image failure. Background request ownership prevents late image responses from overwriting newer scenes.

Validation:

- `npm run cache:check`, `npm test`, `npm run build`: passed.
- New browser tests: 6 passed, including entry/exit opacity, rapid clicks, deferred dialogue, repeated CGs, replacement, interruption and hard cuts.
- Existing browser coverage: 58/59 passed initially; one `ERR_NO_BUFFER_SPACE` navigation failure passed when rerun alone. All 59 cases passed across the run and retest, including dialogue cooldown, crossover flows, CG unlock/gallery/native artwork and localized gallery behavior.
- Desktop/mobile layout review: 1280×800, 1024×768, 768×1024, 375×812 and 667×375. Existing layout, text, controls and artwork composition remain visually unchanged outside the requested transition.
- Screenshot comparison found small background rasterization variations at some sizes. Repeated runs of the unchanged original scripts reproduce these differences (375px: 70,164 pixels; 1280px: 33,098 pixels). The same image URL, geometry, filter and transform were confirmed. No claim of universal pixel equality is made.

Evidence is retained under `_workspace/cg-*.log` and the Nevergrad workspace's `_workspace/cg-transitions/`. Browser screenshots remain in `test-results/`.
