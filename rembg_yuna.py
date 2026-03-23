from rembg import remove
from PIL import Image
import os
import glob

char_dir = r'c:\workspace\cupid\assets\images\characters'
files = glob.glob(os.path.join(char_dir, 'yuna_*.png'))

for filepath in files:
    if 'v22' in filepath:
        continue
    inp = Image.open(filepath)
    out = remove(inp)
    out.save(filepath)
    print(f'Done: {os.path.basename(filepath)} mode={out.mode}')

print('All done!')
