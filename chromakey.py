from PIL import Image
import numpy as np
import os
import glob

char_dir = r'c:\workspace\cupid\assets\images\characters'
files = glob.glob(os.path.join(char_dir, 'yuna_*.png'))

for filepath in files:
    img = Image.open(filepath).convert('RGBA')
    data = np.array(img, dtype=np.float64)

    r, g, b = data[:,:,0], data[:,:,1], data[:,:,2]

    # More aggressive green detection
    # Method: if green is the dominant channel by a margin, it's background
    green_ratio = g / (r + g + b + 1)  # proportion of green
    green_excess = g - np.maximum(r, b)

    alpha = np.ones(g.shape, dtype=np.float64) * 255

    # Fully transparent: green is clearly dominant
    bg_mask = (green_ratio > 0.38) & (green_excess > 15)
    alpha[bg_mask] = 0

    # Edge transition
    edge_mask = (green_ratio > 0.35) & (green_excess > 5) & ~bg_mask
    transition = (green_ratio[edge_mask] - 0.35) / 0.03
    alpha[edge_mask] = 255 * (1 - np.clip(transition, 0, 1))

    # Remove green spill from semi-transparent and nearby pixels
    spill_mask = green_excess > 3
    max_rb = np.maximum(r, b)
    data[:,:,1] = np.where(spill_mask, np.minimum(g, max_rb + 3), g)

    data[:,:,3] = np.clip(alpha, 0, 255).astype(np.uint8)

    result = Image.fromarray(data.astype(np.uint8))
    result.save(filepath)

    # Quick stats
    arr = np.array(Image.open(filepath))
    transparent_pct = (arr[:,:,3] == 0).sum() / arr[:,:,3].size * 100
    print(f'{os.path.basename(filepath)}: {transparent_pct:.1f}% transparent')

print('Done!')
