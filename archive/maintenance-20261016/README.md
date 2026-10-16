# Historical maintenance files

The `root/` directory preserves 114 retired root-level translation helpers,
image-generation helpers, review dumps and old reports. File contents are
unchanged. `manifest.json` records original paths, archive paths, byte sizes and
SHA-256 hashes so every move can be checked or reversed.
Snapshots contain the source commit's exact bytes. Checkout-only CRLF conversion
is normalized away; original checkout sizes and hashes remain in the manifest.
The local .gitattributes disables line-ending conversion for these snapshots so
the recorded bytes also survive checkout on other operating systems.

These are historical records. Some old helpers assume their original working
directory and are not supported entrypoints from this archive. Current commands
remain in package.json, scripts/, tests/ and the root validation/scenario tools.
The local deepseek_api.js and model_adapters/ interfaces retain their paths.

New validation reports are written to the ignored tmp/reports/ directory. The
archived PLAYTEST_REPORT.md and test_i18n_result.json retain the old snapshots.
The public builder excludes this archive and all current maintenance sources.
