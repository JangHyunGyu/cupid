# Cupid media unlock gating

## What this does
Sensitive character sprites and gallery CG files are stored encrypted at rest
(`CUPIDENC1` + AES-256-GCM). Browsers load them through `GET /api/media` only
after a D1 unlock row exists for the guest.

## Threat model (intentional)
`POST /api/gallery/unlocks` is forgeable. This blocks casual direct URL / path
guessing spoiling. It does **not** stop a determined attacker who posts unlocks
then fetches media. The public repo may still contain older plaintext blobs in
git history.

## Secrets / D1
1. Generate a 32-byte key: `openssl rand -base64 32 > .cupid-media-key`
2. Encrypt: `npm run media:encrypt` (uses env `CUPID_MEDIA_KEY` or `.cupid-media-key`)
3. Pages secret: `npx wrangler pages secret put CUPID_MEDIA_KEY --project-name cupid`
4. D1: create `cupid-gallery-unlocks`, put `database_id` in `wrangler.toml`, apply `scripts/sql/0001_gallery_unlocks.sql`

## Client
- Stable `cupid_guest_id` in localStorage
- Unlocks synced from `cupid_gallery` on boot and on meet / CG / expression unlock
- Locked gallery cards and unmet characters never fetch real media
