"""Wrapper to invoke shared harem <-> cupid character sprite synchronization via workspace-relative path."""
import os
import pathlib
import runpy
import sys

SCRIPT_DIR = pathlib.Path(__file__).resolve().parent
CUPID_ROOT = SCRIPT_DIR.parent
HAREM_ROOT = pathlib.Path(os.environ.get('HAREM_ROOT') or (CUPID_ROOT.parent / 'harem')).resolve()
HAREM_SCRIPT = HAREM_ROOT / 'scripts' / 'sync-cupid-sprites.py'

if __name__ == '__main__':
    if HAREM_SCRIPT.exists():
        runpy.run_path(str(HAREM_SCRIPT), run_name='__main__')
    else:
        print(f'[sync-cupid-sprites] Skipping: {HAREM_SCRIPT} not found', file=sys.stderr)
