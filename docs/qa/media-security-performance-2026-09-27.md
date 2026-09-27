# Media security and rendering verification

Scope: protected media delivery, anonymous browser sessions, content versions,
service-worker caching, explicit scene/conversation grants, gallery image callbacks.
No Korean player-facing text, scenario content, translations or gameplay values changed.

## Changes
- Signed, server-generated HttpOnly guest session; same-origin mutations; bounded
  payloads; known encrypted asset allowlist; generic failure responses.
- Authorization before every edge cache read, including cache hits. Ciphertext
  hashes and key fingerprints partition internal cached plaintext. Browser
  responses remain private; public title normals are the explicit exception.
- Per-image content hashes replace application versions in media URLs. The
  protected browser cache survives app-only releases, is capped at 64 entries,
  coalesces concurrent reads, and writes to disk after handing off the response.
- Read-only image loader, acknowledgement sharing for explicit grants, decoded
  image callbacks and bounded prefetch of already-granted next-scene images.
- Main conversation expressions explicitly grant their active image. Fixed a
  missing gallery conversation hydration method and the asynchronous CG modal
  callback handoff. Editing-master URLs return 404.
- Existing local gallery achievements migrate to the new server-issued identity.
  Anonymous progression remains client-reported; this is not authoritative
  server validation of gameplay. See `docs/MEDIA_GATING.md` for the threat boundary.

## Verification before deployment
- `npm test`, `npm run build:check`, `npm run scenario:check` (3,419 scenes),
  and `npm run cache:check` passed.
- Media regression cases verify signed-cookie tampering/expiry, guest mismatch,
  cross-origin grants, oversized bodies, locked access after cache warming,
  inaccessible internal cache keys, key rotation, plaintext/hash mismatch refusal,
  deduplicated grants, read-only loading, bounded prefetch, async disk writes,
  private browser-cache partitions and retention across application releases.
- Three focused browser media tests passed: locked read without a grant,
  one acknowledged grant before decoded rendering, and visible decoded CG modal.
- All 23 painted-UI browser tests passed: 320/360/390/430 phones,
  568/844 landscape phones, 768/1024 tablets, 1280/1920/2560 desktops,
  all seven languages, dynamic viewport height, simulated safe areas, reduced
  motion, keyboard activation and touch-sized controls.
- Manual browser inspection covered title images at 320x568, 430x932,
  844x390, 768x1024, 1024x768 and 1440x900; no horizontal overflow and all
  five title images loaded. Normal gameplay reached name entry and the first
  character scene with a loaded protected sprite.
- Pages Functions compiled successfully with Wrangler.

## Existing expanded-suite failures
The combined painted-UI/game-entry run passed 53 of 60 tests. All seven failures
were reproduced against unmodified `c18d42b5` via a read-only baseline server:
game-entry lines 79, 412, 460, 486, 720, 783 and 828. These concern existing
progression/affinity test fixtures and missing fixture methods. The missing real
gallery image-hydration method was fixed here; line 828 then advances past that
error but still fails its existing affinity assertion (100 versus expected 50).
No gameplay integrity guards or checks were weakened to make these tests pass.

Logs and post-deployment probes are retained outside the repository in
`D:/workspace/cupid-media-*.log` and `D:/workspace/_workspace/`. Production checks
are performed after the main-branch deployment; this pre-deployment record does
not claim live results in advance.
