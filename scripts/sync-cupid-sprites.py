"""Wrapper to invoke shared harem <-> cupid character sprite synchronization."""
import pathlib
import runpy
import sys

HAREM_SCRIPT = pathlib.Path('c:/workspace/harem/scripts/sync-cupid-sprites.py')
if __name__ == '__main__':
    if HAREM_SCRIPT.exists():
        runpy.run_path(str(HAREM_SCRIPT), run_name='__main__')
    else:
        print('[sync-cupid-sprites] Skipping: c:/workspace/harem/scripts/sync-cupid-sprites.py not found', file=sys.stderr)
