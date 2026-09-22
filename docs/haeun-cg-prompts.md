# Haeun event CG masters

Both assets were originally generated through Higgsfield, using existing Cupid character and campus artwork as references. At the user's request, the deployed CGs are now 1:1 side crops of those existing images. No new images were generated and no resizing was applied. Original landscape PNGs are preserved in `assets/images/masters`; WebP delivery copies are lossless and pixel-identical to the square PNGs.

| CG | Approved scene | Native size | Generator |
| --- | --- | --- | --- |
| event_haeun_trust | Day 5, Haeun speaks in the protagonist's defense after the explanatory choice | 3840 × 2160 | Higgsfield / GPT Image 2, resolution 4k, quality high |
| event_haeun_reputation | Day 4, Haeun states her position at the school gate | 5504 × 3072 | Higgsfield reported Nano Banana 2; requested catalog model nano_banana_pro, resolution 4k |

The low-trust model exposes a resolution control, not a separate quality setting. Its prompt explicitly requests maximum supported native resolution and quality. Two earlier high-trust bracelet compositions were rejected because the wrist interaction did not match the scene; the approved high-trust CG depicts Haeun's defense after the buildup instead.

Files:
- assets/images/background/event_haeun_trust.png
- assets/images/background/event_haeun_trust.webp
- assets/images/background/event_haeun_reputation.png
- assets/images/background/event_haeun_reputation.webp

## Square crops

| CG | Original master | Crop rectangle (left, top, right, bottom) | Deployed PNG/WebP |
| --- | --- | --- | --- |
| event_haeun_trust | assets/images/masters/event_haeun_trust_landscape.png | (840, 0, 3000, 2160) | 2160 × 2160 |
| event_haeun_reputation | assets/images/masters/event_haeun_reputation_landscape.png | (1216, 0, 4288, 3072) | 3072 × 3072 |

Coordinates use exclusive right/bottom bounds. Native height is retained; only the left and right edges were removed. Haeun's face, hands and the paperwork box or school-gate setting remain visible. The prompts below document the original landscape generation, not a new generation request. Future Cupid event and ending CGs default to 1:1.

Approved generation IDs:
- High trust: 6e816ec6-f1af-4e76-ac7f-85d1bb6f7187
- Low trust: a79a4d02-c8b5-43bf-ad3c-e3469f2fba2d

References:
- assets/images/characters/haeun_normal.png
- assets/images/characters/haeun_firm.png
- assets/images/background/school_hallway.png
- assets/images/background/school.png

## High-trust prompt

Use case: illustration-story. Generate a NEW final event CG for the Korean visual novel CUPID. Image 1 is Haeun's exact identity and anime illustration style; image 2 is the exact school hallway architecture and lighting style. Faithfully preserve the same short shoulder-length black bob with curled ends and wispy parted bangs, white headband, warm brown eyes, navy blazer with small gold crest, neatly buttoned white shirt, modest school uniform. Scene: in the sunlit school hallway outside the broadcasting room on festival day, Haeun has just told an unseen person that she was the one who asked the protagonist to help with council paperwork. This is a moment of friendship and high trust: she calmly stands by the protagonist and speaks in his defense. Haeun is the only person shown; no other faces, silhouettes, foreground arms or hands. She holds a small plain cardboard box of paperwork at waist level, with two natural hands resting on its upper rim, and turns her face slightly toward the unseen protagonist beside the camera. A tiny navy fabric student-council bracelet is visible on ONE of her wrists, but there is NO clasp-tangling action and no one else's wrist. Her expression is composed, earnest and gently reassuring, lips slightly parted as she speaks, no blush or romantic expression. Cinematic waist-up medium shot with her face centered in the upper middle, the box in the lower center; center composition should work in a narrow mobile crop. Beautiful hand-painted anime visual-novel rendering consistent with the references, refined linework, soft warm window light, detailed eyes and hair, understated emotional expression, polished realistic architecture. Do not reproduce the static standing pose of reference 1; this is a fully illustrated narrative scene. No text or readable lettering anywhere (blank labels and notices), no logos or watermark, no interface. Highest supported quality HIGH and maximum native resolution 4K, landscape 16:9, crisp finished master. Keep all clothing appropriate and avoid fanservice.

## Low-trust prompt

Use case: illustration-story. Create a finished collectible event CG for the Korean visual novel CUPID. Reference image 1 is the exact identity and illustration style of Haeun, not a pose to copy: shoulder-length charcoal-black bob with softly curled ends and short parted bangs, wide white headband, warm brown eyes, navy school blazer with a small gold crest, neatly buttoned white shirt. Preserve her face, hairstyle, headband and modest uniform exactly. Reference image 2 is the setting and architectural/art-style reference. Refined hand-painted anime visual-novel illustration, delicate confident linework, nuanced eyes, natural hands, softly painted realistic background, cinematic depth, coherent daylight. Highest supported native resolution and maximum supported image quality, 4K landscape 16:9; exceptionally polished final artwork, no upscaled draft. Haeun is the only identifiable person. Natural eye-level framing, no fanservice, no erotic cues, no exaggerated blush, no text, lettering, UI, logo or watermark. Keep her face and the story-defining hand gesture together near the horizontal center, primarily in the upper 60 percent, so a portrait center-crop still reads clearly and a lower dialogue box does not hide the face. Scene: Day 4 Saturday morning at the open school entrance gate, consistent with the campus reference. Haeun has just told another person that yesterday's conversation with the protagonist made her uncomfortable, and she now addresses the unseen protagonist directly. The picture must not depict an insult, threat or any invented abusive act. Show Haeun alone, waist-up medium-close at eye level. She stands slightly guarded but speaks steadily, one hand lightly holding her own student-council bracelet wrist near the lower center of her chest. Natural anatomically correct two hands. Her mouth is just slightly open mid-sentence; firm brows and attentive brown eyes convey that she expects an explanation, without crying, screaming, melodrama or an evil expression. A breeze lightly moves the ends of her bob. Clear cooler morning light and soft shadows, campus gate and school building softly painted in the background. She is neither romantically jealous nor flirtatious. Keep the exact uniform and white headband from reference; an emotionally specific moment of strained trust, not a generic sad portrait.

## Integration and review

The CGs use the existing registered-CG rendering, hide standing sprites, and retain the normal conversation layout when the scene advances. They appear after day5_haeun_defends and day4_haeun_concern_clarify, before their respective escalation routers. No affinity rewards, participant selection or conversation turn counts change.

Both IDs are registered in REGISTERED_CG_IDS and all seven GalleryData.cg locale lists with names, descriptions, character labels and unlock hints. Gallery unlocks are view-based and survive reload and a new game.

Korean wording was checked against the im-not-ai Codex humanize-korean workflow. Original, reviewed text and review notes are stored in D:/workspace/_workspace/2026-09-22-003.

## Dedicated Haeun ending CG (2026-09-22)

- ID: `ending_perfect_haeun`; displayed by `day5_ending_haeun` only after the 100-affinity route check
- Files: `assets/images/background/ending_perfect_haeun.png` (native master) and `.webp` (pixel-identical lossless delivery)
- Generator: Higgsfield / GPT Image 2; requested `quality: high`, `resolution: 4k`, `aspect_ratio: 1:1`
- Actual output: **2880 × 2880**, retained without resizing; PNG 12,238,507 bytes, WebP 8,088,188 bytes
- Generation ID: `9adf41b9-9407-436a-8fa3-3aa701f7676c`
- References: existing `haeun_relieved.png` (media `8d1016d7-95ab-4c9a-94b0-e71b4c249968`) and `park.png` (media `17bfbcba-e8df-448d-947a-19f6ce1c9280`)
- Review: matching bob, white headband, brown eyes and navy uniform; seated bench composition, warm afternoon park light and unobstructed face. The lower hands are naturally cropped. No text, watermark, extra person or suggestive pose. Both game and gallery use the same square master.

Prompt:

```text
Create one finished collectible romance ending CG for the Korean visual novel CUPID. This is a NEW illustration, using reference 1 only for Haeun's exact identity and painterly anime rendering, and reference 2 for the park setting. Preserve Haeun's shoulder-length charcoal-black bob, softly curled ends, short parted bangs, wide white headband, warm brown eyes, navy blazer with small gold crest and neatly buttoned white shirt. Wholesome, nonsexual first-romance confession between schoolmates. Scene: late afternoon after the festival, Haeun has moved to sit beside the unseen protagonist on a wooden park bench and has just agreed to date him. Eye-level intimate medium close-up from the seated protagonist's viewpoint, Haeun turned slightly toward the viewer, relaxed shoulders, a small spontaneous happy smile, direct warm eye contact, a hint of natural cheek warmth, her two hands resting loosely together on her own lap. She is the only visible identifiable person. No kiss, no suggestive pose, no fanservice. Avoid the reference's static standing sprite pose: fully compose her seated posture and the bench, with a little empty seat beside her implied at the frame edge. The background softly suggests the reference park's brick path, pink flowering trees and distant fountain in golden late-afternoon light. Delicate confident linework, detailed eyes and hair, nuanced warm skin shading, painted foliage, beautiful rim lighting and cinematic depth; keep the same visual-novel art style. Face centered horizontally in the upper 45 percent, hands near the middle, with quieter park/bench detail in the lower 30 percent behind the game's dialogue overlay. Exactly 1:1 SQUARE composition from the start. Maximum supported native resolution 4K and highest supported quality HIGH, exceptionally polished final master, no upscaled draft. No text, captions, logos, readable signs, speech balloons, UI or watermark. Natural hands, correct five fingers per hand, no duplicated limbs.
```
