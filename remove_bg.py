from PIL import Image
import numpy as np
import os
import glob

char_dir = r'c:\workspace\cupid\assets\images\characters'

# Process all yuna images that need background removal
files = glob.glob(os.path.join(char_dir, 'yuna_*.png'))

for filepath in files:
    img = Image.open(filepath).convert('RGBA')
    data = np.array(img)

    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]

    # Detect green chroma key OR fake checkerboard transparency
    # Green screen: high green, lower red and blue
    green_mask = (g > 100) & (g > r + 30) & (g > b + 30)

    # Checkerboard pattern: alternating light gray (191,191,191) and white (255,255,255)
    checker_light = (np.abs(r.astype(int) - 191) < 15) & (np.abs(g.astype(int) - 191) < 15) & (np.abs(b.astype(int) - 191) < 15)
    checker_white = (r > 240) & (g > 240) & (b > 240)

    # Combined background mask
    bg_mask = green_mask | checker_light

    # Apply transparency
    data[:,:,3] = np.where(bg_mask, 0, 255)

    # Anti-alias: semi-transparent edges
    from scipy import ndimage
    # Dilate the mask slightly for edge detection
    try:
        dilated = ndimage.binary_dilation(bg_mask, iterations=1)
        edge = dilated & ~bg_mask
        data[:,:,3] = np.where(edge, 128, data[:,:,3])
    except:
        pass

    result = Image.fromarray(data)
    result.save(filepath)
    print(f'Processed: {os.path.basename(filepath)}')

print('Done!')
