# Teacher flushed expression consistency, 2026-10-16

Replaced the existing teacher `flushed` image with an expression derived from the
canonical normal sprite. Removed glasses, matched warm chestnut hair and brown
eyes, retained the cream cardigan, white shirt, taupe skirt and hands at waist,
and removed the white background. No scene, dialogue, unlock rule or gallery
expression registration changed. Existing expression paths work in all languages.

## Sources and generation

- Higgsfield image job: `3772cd5a-c351-4948-85f9-f048abfde047`
- Requested model: `nano_banana_pro`, maximum exposed `resolution: 4k`, 3:4
- Job status reported execution model `nano_banana_2`
- Background removal: `e5c73d91-ad63-4b6c-8988-0d49783ebfa3`
- Generated and alpha-cutout native dimensions: **3584 x 4800**, preserved in masters
- Delivery PNG and lossless WebP: **3600 x 4800**, eight transparent columns added
  on each side; original image pixels unchanged, no resampling or downscaling
- PNG and WebP decoded RGBA bytes match exactly
- Original pre-edit PNG preserved in `assets/images/masters/teacher-flushed-20261016/original-before.png`
- Generated master: `assets/images/masters/teacher-flushed-20261016/generated-3584x4800.png`
- Native alpha master: `assets/images/masters/teacher-flushed-20261016/cutout-native-3584x4800.png`
- Protected archives retain the existing encrypted packaging; deterministic
  full-resolution recovery PNG/WebP fixtures match both source and catalog hashes
- Both final R2 objects uploaded and downloaded again; SHA-256 matched locally
- Final logical media version: `0b9d293b4710428be939e296`

## Visual verification

Reviewed the actual output, alpha cutout on a dark background, game scene
`classroom_2_b`, and gallery teacher/flushed modal at 1440 x 1000 and 390 x 844.
No glasses, white rectangle, missing hands or gross face/hair artifacts remain.
Image rectangles before and after match exactly in all six captured states.
No horizontal overflow. Both normal-expression game screens are pixel-identical.
Mobile game/gallery pixels outside the changed illustration match exactly.
Desktop differences outside the illustration are confined to a small existing
translucent home-button region and one modal border pixel; manual review found
no layout, control, typography or styling change. No CSS or rendering code changed.

Screenshots, measurements and command logs are retained outside the repository at
`%TEMP%/cupid-glasses-review/` (`before`, `final`, `stable-before`, `stable-final`).

## Validation

- `npm test`: passed before final transparent-padding-only adjustment
- `npm run cache:check`: passed after final asset installation
- `npm run build`: passed; 482 public runtime files, no protected art or masters
- Final media security, rendering, service-worker and scene-visual checks: 21 passed
- Final Playwright media-rendering suite: 3 passed
- Asset version `2.9.327`, service-worker cache `cupid-v3.3.246`; visible version unchanged
- Delivery WebP is 12,460,258 bytes; native resolution and lossless pixels retained

## Final generation prompt

Use case: identity-preserve, visual novel standing character expression edit.
Image 1 is the authoritative adult teacher identity, outfit, exact silhouette,
body proportions, hand pose, hair shape, chestnut brown hair color, brown eyes,
skin rendering, lighting, framing and painterly anime art style. Edit image 1
ONLY to give her a flushed, bashful expression: noticeably rosy cheeks, slightly
worried raised inner eyebrows, gently parted lips in a small shy smile. Image 2
is ONLY a reference for the blush/expression intensity, NOT identity, hair color,
linework or accessories. Absolutely NO eyeglasses, frames, lenses, sunglasses or
eyewear anywhere. Keep exactly the same adult woman, long wavy warm chestnut hair
swept over one shoulder, cream cardigan over opaque white shirt, taupe pencil
skirt, hands held together at waist, same anatomy and original upright composition
as image 1. Keep the entire visible character and all hair/hands within the image,
same padding and bottom crop. Do not add objects, text or scenery. Transparent
background if supported, otherwise perfectly uniform white background for clean
extraction. Maximum supported native resolution and highest image quality; finely
detailed clean edges and natural hands.
