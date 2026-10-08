"""Create pixel-identical delivery copies; keep source PNGs and existing gallery WebPs."""
import argparse
import re
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument('--check', action='store_true')
args = parser.parse_args()
catalog = (root / 'assets/js/gallery-data.js').read_text(encoding='utf-8')
protected = set(re.findall(r'assets/images/background/([a-z0-9_-]+)\.(?:png|webp|jpg)', catalog))

def prepare(source):
    target = source.with_suffix('.lossless.webp')
    with Image.open(source) as original:
        pixels = original.convert('RGBA').tobytes()
        if target.exists():
            try:
                with Image.open(target) as existing:
                    if existing.size == original.size and existing.convert('RGBA').tobytes() == pixels:
                        return
            except OSError:
                pass
        if args.check:
            raise RuntimeError(f'Missing or changed lossless background: {target.name}')
        original.save(target, 'WEBP', lossless=True, quality=100, method=6, exact=True)
        with Image.open(target) as decoded:
            if decoded.size != original.size or decoded.convert('RGBA').tobytes() != pixels:
                raise RuntimeError(f'Lossless pixel verification failed: {target.name}')

sources = [f for f in (root / 'assets/images/background').glob('*.png') if f.stem not in protected]
with ThreadPoolExecutor(max_workers=3) as executor:
    list(executor.map(prepare, sources))
print(f'Verified {len(sources)} lossless backgrounds at original resolution')
