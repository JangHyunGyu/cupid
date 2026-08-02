# Cupid Repository Instructions

## Context Cache Verification (Permanent)
- Run `npm run cache:check` after every file modification in this repository, including unrelated UI, scenario, localization, media, and documentation changes.
- Keep common language/output rules, character canon, voice, medium, and other durable route guidance before the single `===CACHE_BOUNDARY===`. Keep player name, affinity, location, current scene context, game/social memory, repetition guards, incident state, and all other live turn data after it unless a value is deliberately session-stable and covered by the stable fingerprint.
- Main FreeTalk and Gallery FreeTalk must both fingerprint the exact stable prefix in `x-cache-key`. Stable changes must split cache lineage; dynamic changes must not.
- Any new character route, prompt builder, AI endpoint, retry/failover path, language, summary, or gallery mode must gain cache regression coverage in the same change.
- Preserve cached/miss token reporting from the shared Harem OpenRouter Worker. Cache-check failures block completion and must not be bypassed or weakened.
