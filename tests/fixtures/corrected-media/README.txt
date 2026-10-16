Full-resolution Higgsfield background-removal results for four existing standing expressions.
Native input and output: 864 x 1152, PNG with alpha. No resize or recoloring.

These deterministic QA sources let read-plain-media.cjs recover the encrypted asset
when the local archive key is unavailable. Both the encrypted source hash and the
decoded PNG hash must match config/media-storage.json. Old images remain in Git history.

The public builder excludes this entire tests directory. Production reads the
private R2 object through the existing signed-session/unlock endpoint; no direct
static route exposes these fixtures or the encrypted archives.

Higgsfield image_background_remover job IDs:
yuna_laugh: 43f50289-39bd-45bb-9c86-6d0d91f9b071
yuna_pout: 7612254a-09c7-4a8f-a3b1-bd73b1ac26ab
nurse_smile: 3d0a980d-6788-41c1-97c0-f9caad5ddb9b
nurse_sad: 37b2e916-d8c4-40d5-8571-7dc572e524fc

The remover exposes no prompt, quality, or size controls; actual original dimensions
were retained and the cutouts were checked in the game. Background delivery copies
are separately encoded losslessly; they do not replace the full-quality source PNGs.

Teacher flushed correction, 2026-10-16:
teacher_flushed.png and teacher_flushed.webp are full-resolution, pixel-identical
3600 x 4800 delivery sources. Higgsfield image job 3772cd5a-c351-4948-85f9-f048abfde047,
background-removal job e5c73d91-ad63-4b6c-8988-0d49783ebfa3. The generated image and
alpha master are 3584 x 4800; delivery adds eight transparent columns on each side
to retain the existing 3:4 rendering box without changing any source pixel.
See docs/qa/teacher-flushed-consistency-20261016.md for prompt and review evidence.
