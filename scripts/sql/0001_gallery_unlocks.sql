-- Cupid gallery media unlock ledger (D1)
-- Threat note: guest_id unlock rows are client-asserted; blocks direct static URL
-- spoiling, not determined API abuse.

CREATE TABLE IF NOT EXISTS cupid_gallery_unlocks (
  guest_id TEXT NOT NULL,
  asset_id TEXT NOT NULL,
  unlocked_at INTEGER NOT NULL,
  PRIMARY KEY (guest_id, asset_id)
);

CREATE INDEX IF NOT EXISTS idx_cupid_gallery_unlocks_guest
  ON cupid_gallery_unlocks (guest_id);
