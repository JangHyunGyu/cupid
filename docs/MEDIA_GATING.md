# Cupid media unlock gating

## What this does
Sensitive character sprites and gallery CG files are stored encrypted at rest
(`CUPIDENC1` + AES-256-GCM). Browsers load them through `GET /api/media` only
after a D1 unlock row exists for the guest.

## Security boundary
The server issues its own random guest ID in a signed `__Host-cupid-media`
cookie (Secure, HttpOnly, SameSite=Strict). It never signs a client-selected ID.
The signing key is derived with HKDF from the existing media secret, using a
separate purpose label. A copied guest URL, forged cookie, mismatched guest ID,
or cross-origin browser request does not grant access. Mutation endpoints require
an exact same-origin Origin header. Unlock payloads are bounded to 16 KiB and
100 known encrypted assets; responses and session creation are never cached.

Progression is still anonymous and client-reported. A determined player can
obtain their own valid session and fabricate progression grants. This change
does not claim server-authoritative gameplay or DRM. Preventing that requires
server validation of the game state and all progression transitions, including
legacy saves. Already delivered images can be saved; public Git history may
also retain plaintext ancestors. Editing masters remain in the repository but
their deployed `/assets/images/masters/*` URLs return 404.

## Secrets / D1
1. Generate a 32-byte key: `openssl rand -base64 32 > .cupid-media-key`
2. Encrypt: `npm run media:encrypt` (uses env `CUPID_MEDIA_KEY` or `.cupid-media-key`)
3. Pages secret: `npx wrangler pages secret put CUPID_MEDIA_KEY --project-name cupid`
4. D1: create `cupid-gallery-unlocks`, put `database_id` in `wrangler.toml`, apply `scripts/sql/0001_gallery_unlocks.sql`

## Client
- `cupid_guest_id` mirrors the server session ID for private cache partitioning.
- On upgrade, existing local gallery achievements are re-synchronized into the
  new server-issued identity; unsigned legacy IDs cannot read the old ledger.
- Unlocks synced from `cupid_gallery` on boot and on meet / CG / expression unlock
- Locked gallery cards and unmet characters never fetch real media
- Reads, error recovery and prefetch never issue an implicit unlock. The scene
  renderer explicitly grants only expressions of the scene actually entered.
- Concurrent grants share a batch and a per-image acknowledgement promise.
- Preloading considers only previously granted images in an unconditional next
  scene, at most two requests in flight and four retained image references;
  Save-Data disables it. Decoding completes before the renderer swaps images.

## Caching and release process
`npm run build` generates ciphertext hashes and per-image content versions in
the server manifest and client gate. `npm run build:check` rejects stale manifests
or unencrypted protected files. Encrypt changed delivery assets before building.
Unchanged image URLs remain stable across application releases; public title
images use the same content versions and omit guest IDs.

Every protected network request validates the signed session and queries D1
before looking up the internal edge cache. The cache key includes the ciphertext
hash and secret fingerprint, so changed files and key rotations cannot reuse
old plaintext. Internal cache keys cannot be fetched as media URLs. Cache writes
use waitUntil and cache failures do not prevent delivery. Response headers expose
HIT/MISS and Server-Timing for authorization, edge lookup, asset fetch and decryption,
without exposing keys, cookies or player text.

The browser uses private HTTP caching and a separate content-versioned service
worker cache, limited to 64 images. Session/guest identity partitions private
URLs. Invalid versions, failed responses and session/unlock API responses are
not persisted by the service worker. Disk writes do not delay image responses.
Browser caches retain previously delivered images; revoking a server grant does
not erase an image that was already downloaded.

## Verification
`npm test` includes media session, authorization, edge-cache isolation, manifest,
duplicate-grant, read-only loader and bounded-preload regressions. Run
`npm run cache:check` after changes. Verify cold and warm responses independently,
and confirm a locked session is still denied after another session warms the cache.
