# Image storage and recovery

Image binaries are excluded from Git and Pages output. Existing public URLs are
served by a Pages Function backed by the private `archerlab-site-images` R2 bucket.
The `PUBLIC_IMAGE_BUCKET` binding is required in both Pages environments. Cupid's
`MEDIA_BUCKET`, session checks, grants and private `/api/media` handler are unchanged.
The backup bucket must never be bound to the public image handler.

## Versioning

- `config/public-images.json`: canonical and historical public paths, content hash,
  immutable R2 key, byte count, content type and ETag.
- `config/image-sources.json`: every original, including reference and test images,
  with its SHA-256 and private backup location.
- `config/image-publication.json`: checksums of the verified manifests. Builds fail
  if metadata changes without a new upload and full read-back verification.
- `config/character-assets.json` remains the character and alias registry.

Keys include the SHA-256 of the actual bytes. Publishing a new revision creates a
new object. Keep old objects and snapshot parts: reverting the Git metadata restores
the old image mapping. Do not run a bucket cleanup based only on the latest manifest.
This is application-managed immutable versioning, not R2 native bucket versioning.
Git history was not rewritten; old commits still contain their original binaries.
Consequently an unshallowed clone can still be large. Pages builds use the current
binary-free tree and need no image downloads or image credentials.

## Restore originals

Python 3.10+ is required. Restore refuses to overwrite a locally edited file and
verifies every selected file before installing it.

```sh
# From private R2: install Wrangler, authenticate with wrangler login first.
npm run images:restore

# From the separate local snapshot; use the project's directory containing ZIPs.
npm run images:restore -- --local-backup D:/backups/image-r2-migration/20261030/cupid

# Historical baseline fallback; fetches the recorded commit if necessary.
npm run images:restore -- --from-git

# Optional partial restoration.
npm run images:restore -- --prefix assets/characters/CHARACTER/
```

The 2026-10-30 migration snapshot is stored in
`archerlab-image-backups/snapshots/20261030/cupid/`. Each ZIP part and every image
was independently SHA-256 verified locally and after downloading from R2. The
snapshot contains the complete tracked source tree, not just the selected images.
The separate local directory is outside the project and is not affected by builds
or Git cleanup. Cupid's already-live private plaintext image objects were also
backed up under `objects/cupid-live/`, with local copies in `cupid-live/images/`.

Full image tests need restored originals. CI restores the migration baseline from
Git without sharing private credentials. For later images that have never existed
in Git, configure an authenticated Wrangler environment (`CLOUDFLARE_API_TOKEN` and
`CLOUDFLARE_ACCOUNT_ID`) for the restore step, or restore before running tests.
Do not skip image tests to accommodate missing originals.

## Publish new or changed images

Keep the working files locally, update character metadata using the existing
`characters:sync` command when relevant, then upload the changed paths:

```sh
npm run images:publish -- assets/characters/CHARACTER/avatar/01/portrait.webp
# New public images outside the character catalog need an explicit declaration.
npm run images:publish -- --public assets/images/background/new-location.webp
npm run images:check
npm run cache:check
npm run build
```

The publisher verifies the local source, uploads an immutable private backup,
uploads public runtime images, downloads both again and checks SHA-256 before
writing new metadata. It also backs up the new metadata by content hash. It refuses
to publish protected Cupid images as public assets. Continue Cupid's existing
private-media publication procedure for its protected delivery objects, then back
up the encrypted originals with `images:publish`. The private manifest generator
still checks source hashes against the private media registry.

Commit the reviewed metadata and code directly on current `main`. Image extensions
are ignored; do not force-add binaries. No Git history rewrite is required.

## Delivery and rollback

The Function only accepts manifest-listed public images. Unknown image URLs return
404, mutation methods return 405, and missing or mismatched R2 objects return an
uncached 503. Objects are streamed without decoding or resizing. Historical aliases
share an immutable edge cache entry. Browser caching lasts one hour, with ETag/304
revalidation; edge entries are keyed by the actual content hash. Different image
revisions therefore never share an edge cache entry.

Revert the public/source/publication manifests together to a previously verified
Git revision to roll back image changes. To return to the old static delivery
architecture, revert the migration commit and restore the recorded baseline image
tree before building. Keep the R2 objects and both backups until the rollback is
fully verified. Removing images from current Git does not erase old Git commits,
past Pages deployments, browser caches, or local ignored working originals.
