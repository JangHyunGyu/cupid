# Cupid private media delivery

## Storage and delivery
Character sprites and gallery CG originals are normal PNG/WebP/JPEG objects in
the private `cupid-media-private` R2 bucket. Its managed r2.dev URL and all custom
domains must remain disabled. Only the Pages `MEDIA_BUCKET` binding reads them.
There is no application image encryption or decryption on the delivery path.

`GET /api/media` accepts only manifest-listed logical asset IDs, never arbitrary
object keys. Protected requests validate the signed session and D1 unlock BEFORE
edge-cache access. Cold responses stream the R2 body after checking size and the
expected single-part upload ETag. No full-image buffering, hashing or decryption
delays delivery. Uploads use immutable SHA-256 keys and full readback verification.
Five normal title sprites are intentionally public through the API.

## Public build boundary
`npm run build` publishes only allowlisted runtime files in `dist`. All protected
images, editing masters, repository configuration, tests, maintenance scripts and
credentials are excluded. Direct original paths return 404. Pages compiles
`functions/` separately. Never deploy the repository root again.

Existing CUPIDENC1 files remain encrypted OFFLINE source archives for audits,
local preview and rollback. Production neither deploys nor reads them. Do not
decrypt archives in the public repository; plaintext originals belong outside it.
Historical Git commits and older deployments may contain old assets. This
migration does not rewrite history or retract previously published copies.

## Sessions and progression
The server issues a random guest identity in a signed `__Host-cupid-media` cookie
(Secure, HttpOnly, SameSite=Strict). Copied URLs, forged cookies, mismatched guest
IDs and cross-origin calls do not grant access. Mutations require exact same-origin
Origin headers and bounded payloads. `CUPID_MEDIA_KEY` remains only as the HKDF
session-signing seed, preserving existing signed identities and gallery progress.

Progression is still anonymous and client-reported. A player with their own valid
session can fabricate progression grants. Preventing this requires separate
server-authoritative progression, including legacy save migration. This storage
migration preserves that existing boundary; it is not DRM. Already delivered
images can be saved, and grant revocation cannot erase downloaded browser copies.

## Caching and rendering
Per-image versions and guest-specific URLs stay unchanged during migration.
The protected SW cache survives application releases and is bounded to 64 images.
Failed requests and session/unlock responses are never persisted. Reads and
recovery never implicitly grant an image. Explicit scene grants are acknowledged
before rendering. Prefetch uses only already unlocked images, at most two
concurrent requests/four retained images, and is disabled by Save-Data. Decoding
finishes before the visible image swap.

The edge cache uses a content hash in an R2-specific namespace. Authorization
still runs on every network request, including cache hits. Cache writes use
waitUntil without delaying responses. Server-Timing reports authorization,
edge lookup and storage-header latency. Storage timing does not measure full
body transfer; there is no decrypt stage.

## Updating protected assets
1. Maintain source archives and matching plaintext originals in an external
   private directory, preserving their `assets/images/...` relative paths.
2. Set `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in the environment.
   Run `node scripts/upload-private-media.cjs <private-original-directory>`.
   The tool rejects public buckets, verifies every upload by reading it back,
   then publishes `catalog/media-v1.json` inside the private bucket and writes
   `config/media-storage.json` after all objects succeed. Harem's authenticated
   backup image proxy resolves archived paths through this private catalog;
   its 60-second metadata cache picks up new assets without a separate manifest
   copy or public access to originals.
3. Run `npm run build`, `npm test`, `npm run cache:check` and browser/media checks.
   A source changed without matching uploaded catalog metadata fails the build.
   Commit the catalog and generated manifest together.
4. Push main. Pages runs `npm run build` and publishes `dist` with private R2,
   existing D1 and session-secret bindings. Verify locked reads, cross-session
   denial after warming the cache, direct-path denial and rendered images.

## References
- [R2 Worker API](https://developers.cloudflare.com/r2/api/workers/workers-api-reference/)
- [R2 public access](https://developers.cloudflare.com/r2/buckets/public-buckets/)
- [Pages R2 bindings](https://developers.cloudflare.com/pages/functions/bindings/#r2-buckets)
