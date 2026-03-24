"""다인 이미지 일괄 처리: 이름 변경 + 마젠타 크로마키 배경 제거"""
from PIL import Image
import numpy as np
import os, shutil

char_dir = os.path.join(os.path.dirname(__file__), "assets", "images", "characters")
backup_dir = os.path.join(char_dir, "backup")
os.makedirs(backup_dir, exist_ok=True)

# 처리할 파일 목록
files = {
    "dain_normal_edited_1.png": "dain_normal.png",
    "dain_active_new.png": "dain_active.png",
    "dain_shy_new.png": "dain_shy.png",
    "dain_laugh_new.png": "dain_laugh.png",
    "dain_angry_new.png": "dain_angry.png",
    "dain_sad_new.png": "dain_sad.png",
    "dain_pout_new.png": "dain_pout.png",
    "dain_sweat_new.png": "dain_sweat.png",
    "dain_bikini_new.png": "dain_bikini.png",
}

def remove_magenta_bg(img_path, out_path, tolerance=60):
    """마젠타 크로마키 배경을 투명으로 변환"""
    img = Image.open(img_path).convert("RGBA")
    data = np.array(img)

    # 마젠타 핑크 범위 (R높, G낮, B높)
    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]

    # 마젠타: R > 180, G < 100, B > 120
    magenta_mask = (r > 160) & (g < 120) & (b > 100)

    # 경계 부분 부드럽게 처리
    # 마젠타에 가까운 정도에 따라 알파를 조절
    magenta_ref = np.array([230, 0, 150])
    diff = np.sqrt(
        (data[:,:,0].astype(float) - magenta_ref[0])**2 +
        (data[:,:,1].astype(float) - magenta_ref[1])**2 +
        (data[:,:,2].astype(float) - magenta_ref[2])**2
    )

    # 거리 기반 알파: 가까우면 투명, 멀면 불투명
    alpha = np.clip((diff - 40) / 60 * 255, 0, 255).astype(np.uint8)

    # 확실한 마젠타는 완전 투명
    alpha[magenta_mask] = 0

    # 확실히 마젠타가 아닌 영역은 원본 알파 유지
    non_magenta = diff > 120
    alpha[non_magenta] = a[non_magenta]

    data[:,:,3] = alpha
    result = Image.fromarray(data)
    result.save(out_path)
    return result.size

for src_name, dst_name in files.items():
    src_path = os.path.join(char_dir, src_name)
    dst_path = os.path.join(char_dir, dst_name)

    if not os.path.exists(src_path):
        print(f"  SKIP: {src_name} not found")
        continue

    # 기존 파일 백업
    if os.path.exists(dst_path):
        backup_path = os.path.join(backup_dir, f"old_{dst_name}")
        shutil.copy2(dst_path, backup_path)

    # 배경 제거 후 저장
    size = remove_magenta_bg(src_path, dst_path)
    file_size = os.path.getsize(dst_path)
    print(f"  {dst_name}: {size[0]}x{size[1]}, {file_size} bytes")

    # 소스 파일 정리
    os.remove(src_path)

print("\nDone! All files processed.")
