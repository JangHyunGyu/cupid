import os, sys, argparse, pathlib
import numpy as np
from PIL import Image
from scipy import ndimage

# 로컬 mask-python 가상환경 및 uv 캐시(onnxruntime 등) 경로 자동 포함
for _extra_site in (
    pathlib.Path(__file__).resolve().parent.parent / "tmp" / "mask-python",
    pathlib.Path("D:/workspace/harem/tmp/mask-python"),
    pathlib.Path.home() / "AppData" / "Local" / "uv" / "cache" / "archive-v0" / "0hR-NTl_AvN1Qyc7" / "Lib" / "site-packages",
    pathlib.Path.home() / "AppData" / "Local" / "uv" / "cache" / "archive-v0" / "f7rFsqsqsdx4nssO" / "Lib" / "site-packages",
):
    if _extra_site.exists() and str(_extra_site) not in sys.path:
        sys.path.insert(0, str(_extra_site))


# SOTA bria-rmbg / birefnet-general / isnet-anime 추론 세션 캐시
_BRIA_ORT_SESS = None
_BRIA_INP_NAME = None
_REMBG_SESSIONS = {}


def get_rembg_session(model_name="birefnet-general"):
    """
    모델 이름을 받아 rembg 추론 세션을 캐시에서 반환 -> 초기화 실패 시 예외 발생
    """
    global _REMBG_SESSIONS
    if model_name in _REMBG_SESSIONS:
        return _REMBG_SESSIONS[model_name]
    from rembg import new_session
    sess = new_session(model_name)
    _REMBG_SESSIONS[model_name] = sess
    return sess


def get_bria_ort_session():
    """
    로컬 bria-rmbg.onnx ONNX Runtime 세션을 초기화해 캐시에서 반환 -> 모델 파일이 없으면 (None, None) 반환
    """
    global _BRIA_ORT_SESS, _BRIA_INP_NAME
    if _BRIA_ORT_SESS is not None:
        return _BRIA_ORT_SESS, _BRIA_INP_NAME
    bria_path = pathlib.Path.home() / ".rembg" / "models" / "bria-rmbg" / "bria-rmbg.onnx"
    if not bria_path.exists():
        return None, None
    import onnxruntime as ort
    opts = ort.SessionOptions()
    opts.intra_op_num_threads = 4
    opts.inter_op_num_threads = 1
    opts.log_severity_level = 3
    _BRIA_ORT_SESS = ort.InferenceSession(str(bria_path), sess_options=opts, providers=["CPUExecutionProvider"])
    _BRIA_INP_NAME = _BRIA_ORT_SESS.get_inputs()[0].name
    return _BRIA_ORT_SESS, _BRIA_INP_NAME


def predict_sota_alpha(rgb_im, primary_model="birefnet-general", core_model="isnet-anime"):
    """
    RGB 이미지를 받아 SOTA Bria-RMBG(우선) 또는 BiRefNet-General + ISNet-Anime 코어 보호 앙상블로 정밀 알파 마스크를 추론 -> 2차원 uint8 알파 배열 반환
    """
    w, h = rgb_im.size
    sx = w / 1152.0
    bria_sess, bria_inp = get_bria_ort_session()
    if bria_sess is not None:
        comp = np.array(rgb_im.convert("RGB"))
        img = np.array(rgb_im.convert("RGB").resize((1024, 1024), Image.Resampling.BILINEAR), dtype=np.float32) / 255.0
        img = (img - np.array([0.485, 0.456, 0.406], dtype=np.float32)) / np.array([0.229, 0.224, 0.225], dtype=np.float32)
        pred = bria_sess.run(None, {bria_inp: img.transpose(2, 0, 1)[None]})[0].squeeze()
        pred_im = Image.fromarray(np.clip(pred * 255.0, 0.0, 255.0).astype(np.uint8)).resize((w, h), Image.Resampling.BILINEAR)
        return np.array(pred_im, dtype=np.uint8)

    from rembg import remove
    sess_core = get_rembg_session(core_model)
    core_rgba = np.array(remove(rgb_im, session=sess_core))
    core_a = core_rgba[:, :, 3].astype(np.float32)
    try:
        sess_hr = get_rembg_session(primary_model)
        hr_rgba = np.array(remove(rgb_im, session=sess_hr))
        hr_a = hr_rgba[:, :, 3].astype(np.float32)
    except Exception:
        return core_rgba[:, :, 3]

    erode_iter = max(3, int(round(5 * sx)))
    solid_core = ndimage.binary_erosion(core_a >= 210, iterations=erode_iter)
    combined_a = np.where(solid_core, np.maximum(hr_a, core_a), hr_a)
    return np.clip(np.round(combined_a), 0, 255).astype(np.uint8)


# 캐릭터별 배경 제거 및 잘림 복원 전용 프로파일 설정
CHARACTER_PROFILES = {
    "yuna": {
        "silver_hair": True,
        "remove_flyaway_pockets": True,
        "neck_pocket_cleanup": False,
        "protect_white_coat": False,
        "protect_glasses": False,
    },
    "nurse": {
        "silver_hair": False,
        "remove_flyaway_pockets": False,
        "neck_pocket_cleanup": True,
        "protect_white_coat": True,
        "protect_glasses": True,
    },
    "seoyeon": {
        "silver_hair": False,
        "remove_flyaway_pockets": False,
        "neck_pocket_cleanup": True,
        "protect_white_coat": False,
        "protect_glasses": True,
    },
    "haeun": {
        "silver_hair": False,
        "remove_flyaway_pockets": False,
        "neck_pocket_cleanup": True,
        "protect_white_coat": False,
        "protect_glasses": False,
    },
    "dain": {
        "silver_hair": False,
        "remove_flyaway_pockets": False,
        "neck_pocket_cleanup": True,
        "protect_white_coat": False,
        "protect_glasses": False,
    },
    "teacher": {
        "silver_hair": False,
        "remove_flyaway_pockets": False,
        "neck_pocket_cleanup": True,
        "protect_white_coat": False,
        "protect_glasses": False,
    },
    "minsu": {
        "silver_hair": False,
        "remove_flyaway_pockets": False,
        "neck_pocket_cleanup": True,
        "protect_white_coat": False,
        "protect_glasses": False,
    },
}


def detect_character_id(path_str=None, rgba=None):
    """
    파일 경로 문자열 또는 RGBA 이미지의 색상 특징으로부터 캐릭터 식별자(yuna, nurse, seoyeon, haeun, dain, teacher, minsu)를 반환
    """
    if path_str:
        norm = str(path_str).replace("\\", "/").lower()
        for cid in CHARACTER_PROFILES:
            if f"/{cid}/" in norm or f"_{cid}_" in norm or norm.startswith(f"{cid}/"):
                return cid
    if rgba is not None and detect_silver_hair(rgba):
        return "yuna"
    return None


def detect_silver_hair(rgba, character_id=None):
    """
    캐릭터 ID 또는 RGBA 배열 상단 두부 영역(y < 0.25*h, a >= 180)의 고명도·저채도/은청색(b >= r) 비율을 분석해 은발/백발 캐릭터(유나 전용) 여부를 반환 ->
    연보라 단발인 보건교사(nurse)가 은발로 오인되어 검정 배경 포켓이 생기는 현상을 원천 차단
    """
    if character_id in CHARACTER_PROFILES:
        return CHARACTER_PROFILES[character_id]["silver_hair"]
    h, w = rgba.shape[:2]
    r = rgba[:, :, 0].astype(np.float32)
    g = rgba[:, :, 1].astype(np.float32)
    b = rgba[:, :, 2].astype(np.float32)
    a = rgba[:, :, 3].astype(np.float32)
    cmin = np.minimum(np.minimum(r, g), b)
    cmax = np.maximum(np.maximum(r, g), b)
    sat = cmax - cmin
    yy, _ = np.mgrid[0:h, 0:w]
    head_fg = (yy < int(0.25 * h)) & (a >= 180)
    if head_fg.sum() == 0:
        return False
    # 순수 무채색 백발/은발(cmin >= 200, sat <= 14) 조건으로 엄격히 제한해 연보라색(nurse) 배제
    silver_ratio = float(((cmin[head_fg] >= 200) & (sat[head_fg] <= 14)).mean())
    return silver_ratio >= 0.38


def recover_silver_hair_locks(rgba, character_id=None):
    """
    은발/백발 캐릭터(yuna)의 외곽 잔머리·옆머리 선화(hair_lines)와 두부 본체 사이의 반열린 루프 및 속 빈 구멍을 닫고,
    순백색(#FFFFFF) 캔버스 원본인 경우 포토샵 Remove-White-Matte 방식의 선화 기반 외곽 플러드필 + 서브픽셀 알파/색상 역산(Unmix)으로 은발 결을 100% 보존·정리 ->
    이미 투명 배경이 적용된 RGBA 입력인 경우 배경의 검은 픽셀(a == 0, RGB == 0)을 머리카락 선화로 오인해 검정 덩어리를 만드는 현상을 원천 차단하고, 잔머리 루프 안쪽 순백색(#FFFFFF) 포켓만 정밀 제거
    """
    out = rgba.copy()
    if not detect_silver_hair(out, character_id=character_id):
        return out

    h, w = out.shape[:2]
    scale = w / 1152.0
    r = out[:, :, 0].astype(np.float32)
    g = out[:, :, 1].astype(np.float32)
    b = out[:, :, 2].astype(np.float32)
    a = out[:, :, 3].astype(np.float32)
    cmin = np.minimum(np.minimum(r, g), b)
    cmax = np.maximum(np.maximum(r, g), b)
    sat = cmax - cmin
    lum = 0.299 * r + 0.587 * g + 0.114 * b
    yy, xx = np.mgrid[0:h, 0:w]

    # 이미 투명 배경이 적용된 RGBA인 경우: 잔머리 루프 내부에 갇힌 순백색(#FFFFFF) 배경 포켓만 정밀 제거하고, 투명 픽셀(a==0, RGB==0)은 절대 불투명화하지 않음
    top_corners_transparent = (a[0, 0] < 10.0) and (a[0, w - 1] < 10.0)
    if top_corners_transparent:
        ext_bg = a < 25.0
        dist_from_ext0 = ndimage.distance_transform_edt(~ext_bg)
        in_face_or_neck_core = (
            ((((xx - 0.473 * w) / (0.117 * w)) ** 2 + ((yy - 0.221 * h) / (0.098 * h)) ** 2) <= 1.0)
            | ((xx >= int(0.347 * w)) & (xx <= int(0.655 * w)) & (yy >= int(0.221 * h)) & (yy <= int(0.404 * h)) & (dist_from_ext0 > 12.0 * scale))
        )
        # 정수리 은발 하이라이트(대형 단일 연결 성분, area > 5000)가 사각 박스에 잘려 조각나지 않도록 분할 전 전체 연결 성분을 먼저 라벨링
        cand_pocket = (a >= 120.0) & (cmin >= 246.0) & (sat <= 6.0) & (~in_face_or_neck_core)
        p_labels, _ = ndimage.label(cand_pocket, structure=np.ones((3, 3), dtype=bool))
        min_p_area = max(12, int(18 * (scale ** 2)))
        max_p_area = int(650 * (scale ** 2))
        killed_p = np.zeros((h, w), dtype=bool)
        for lbl_i, sl in enumerate(ndimage.find_objects(p_labels), 1):
            if sl is None:
                continue
            if sl[0].start < int(0.11 * h):
                continue
            comp = (p_labels[sl] == lbl_i)
            p_area = int(comp.sum())
            if p_area < min_p_area or p_area > int(4500 * (scale ** 2)):
                continue
            d_sub = dist_from_ext0[sl][comp]
            sub_cmin_mean = float(cmin[sl][comp].mean())
            sub_sat_mean = float(sat[sl][comp].mean())
            if p_area <= max_p_area:
                if float(d_sub.min()) <= 3.0 * scale and float(d_sub.max()) <= 11.5 * scale and sub_cmin_mean >= 250.2:
                    killed_p[sl] |= comp
            elif (float(d_sub.min()) <= 1.5 * scale and float(d_sub.max()) <= 32.0 * scale and sub_cmin_mean >= 253.9 and sub_sat_mean <= 0.45) or (p_area <= int(1200 * (scale ** 2)) and float(d_sub.min()) <= 2.0 * scale and float(d_sub.max()) <= 9.5 * scale and sub_cmin_mean >= 252.5):
                killed_p[sl] |= comp
        if np.any(killed_p):
            a[killed_p] = 0.0
            p_rim = ndimage.binary_dilation(killed_p, iterations=2) & (~killed_p) & (a > 0) & (lum > 160.0) & (sat <= 20.0)
            a[p_rim] = np.minimum(a[p_rim], np.clip((253.0 - lum[p_rim]) / 65.0, 0.0, 1.0) * 255.0)
            valid_rim = p_rim & (a >= 16.0) & (a < 245.0)
            a01 = np.clip(a[valid_rim] / 255.0, 0.15, 1.0)
            r[valid_rim] = np.clip((r[valid_rim] - (1.0 - a01) * 255.0) / a01, 0.0, 255.0)
            g[valid_rim] = np.clip((g[valid_rim] - (1.0 - a01) * 255.0) / a01, 0.0, 255.0)
            b[valid_rim] = np.clip((b[valid_rim] - (1.0 - a01) * 255.0) / a01, 0.0, 255.0)
        out[:, :, 0] = np.clip(np.round(r), 0, 255).astype(np.uint8)
        out[:, :, 1] = np.clip(np.round(g), 0, 255).astype(np.uint8)
        out[:, :, 2] = np.clip(np.round(b), 0, 255).astype(np.uint8)
        out[:, :, 3] = np.clip(np.round(a), 0, 255).astype(np.uint8)
        return out

    # 순백색(#FFFFFF) 배경 원본인 경우: 외곽 순백색 여백 플러드필 + 2.2px 선화 경계 서브픽셀 역산(Photoshop Remove-White-Matte)
    top_corners_white = (lum[0, 0] >= 250.0) and (lum[0, w - 1] >= 250.0) and (sat[0, 0] <= 5.0)
    if top_corners_white:
        is_pure_white = (lum >= 252.5) & (sat <= 3.0)
        k2 = np.ones((2, 2), dtype=bool)
        barrier = ndimage.binary_dilation(~is_pure_white, structure=k2, iterations=1)
        walkable = ~barrier
        labels, num_l = ndimage.label(walkable)
        ext_bg = np.zeros((h, w), dtype=bool)
        for lbl_i, sl in enumerate(ndimage.find_objects(labels), 1):
            if sl is None:
                continue
            if sl[0].start == 0 or sl[1].start == 0 or sl[0].stop >= h or sl[1].stop >= w:
                ext_bg[sl] |= (labels[sl] == lbl_i)
        ext_bg = ndimage.binary_dilation(ext_bg, structure=k2, iterations=1) & is_pure_white

        h_labels, _ = ndimage.label(ext_bg)
        max_hole_area = int(350 * (scale ** 2))
        for lbl_i, sl in enumerate(ndimage.find_objects(h_labels), 1):
            if sl is None:
                continue
            if sl[0].start > 0 and sl[1].start > 0 and sl[0].stop < h and sl[1].stop < w:
                sub_h = (h_labels[sl] == lbl_i)
                if int(sub_h.sum()) < max_hole_area:
                    ext_bg[sl][sub_h] = False

        # 외곽 잔머리 루프(flyaway hair loop) 내부에 갇힌 순백색(#FFFFFF) 배경 여백 포켓 제거
        dist_from_ext0 = ndimage.distance_transform_edt(~ext_bg)
        in_crown_highlight = (
            ((xx >= int(0.330 * w)) & (xx <= int(0.742 * w)) & (yy <= int(0.042 * h)))
            | ((xx >= int(0.378 * w)) & (xx <= int(0.742 * w)) & (yy <= int(0.218 * h)))
        )
        in_face_or_neck_core = (
            ((((xx - 0.473 * w) / (0.117 * w)) ** 2 + ((yy - 0.221 * h) / (0.098 * h)) ** 2) <= 1.0)
            | ((xx >= int(0.347 * w)) & (xx <= int(0.655 * w)) & (yy >= int(0.221 * h)) & (yy <= int(0.404 * h)) & (dist_from_ext0 > 12.0 * scale))
        )
        cand_pocket = (lum >= 250.5) & (sat <= 4.0) & (~ext_bg) & (~(in_crown_highlight | in_face_or_neck_core)) & (yy < int(0.42 * h))
        p_labels, _ = ndimage.label(cand_pocket, structure=np.ones((3, 3), dtype=bool))
        min_p_area = max(12, int(18 * (scale ** 2)))
        for lbl_i, sl in enumerate(ndimage.find_objects(p_labels), 1):
            if sl is None:
                continue
            comp = (p_labels[sl] == lbl_i)
            if int(comp.sum()) < min_p_area:
                continue
            d_sub = dist_from_ext0[sl][comp]
            if float(d_sub.min()) <= 15.0 * scale and float(d_sub.max()) <= 65.0 * scale:
                ext_bg[sl] |= comp

        dist_to_ext = ndimage.distance_transform_edt(~ext_bg)
        ps_alpha = np.where(ext_bg, 0.0, 255.0).astype(np.float32)
        rim = (~ext_bg) & (dist_to_ext <= 2.2) & (lum > 100.0) & (sat <= 25.0)
        local_min_lum = ndimage.minimum_filter(lum, size=5)
        fg_lum = np.minimum(local_min_lum, 90.0)
        rim_a = np.clip((254.0 - lum) / np.maximum(254.0 - fg_lum, 30.0), 0.0, 1.0) * 255.0
        ps_alpha[rim] = np.minimum(ps_alpha[rim], rim_a[rim])

        hair_zone = yy < int(0.385 * h)
        a[hair_zone] = ps_alpha[hair_zone]
        valid_rim = rim & hair_zone & (a > 1.0) & (a < 250.0)
        a01 = np.clip(a[valid_rim] / 255.0, 0.08, 1.0)
        r[valid_rim] = np.clip((r[valid_rim] - (1.0 - a01) * 255.0) / a01, 0.0, 255.0)
        g[valid_rim] = np.clip((g[valid_rim] - (1.0 - a01) * 255.0) / a01, 0.0, 255.0)
        b[valid_rim] = np.clip((b[valid_rim] - (1.0 - a01) * 255.0) / a01, 0.0, 255.0)
        out[:, :, 0] = np.clip(np.round(r), 0, 255).astype(np.uint8)
        out[:, :, 1] = np.clip(np.round(g), 0, 255).astype(np.uint8)
        out[:, :, 2] = np.clip(np.round(b), 0, 255).astype(np.uint8)
        out[:, :, 3] = np.clip(np.round(a), 0, 255).astype(np.uint8)
        return out

    hair_roi = (yy < int(0.365 * h)) & (xx >= int(0.18 * w)) & (xx <= int(0.82 * w))
    near_fg = ndimage.binary_dilation(a >= 32, iterations=max(6, int(round(12 * scale))))
    hair_lines = hair_roi & near_fg & ((a >= 18) | ((lum < 246.0) & (sat <= 35.0)))
    main_head = a >= 180
    hair_lines = ndimage.binary_propagation(main_head & hair_roi, mask=hair_lines | main_head)

    r_close = max(9, int(round(19 * scale)))
    if r_close % 2 == 0:
        r_close += 1
    yg, xg = np.ogrid[-r_close // 2:r_close // 2 + 1, -r_close // 2:r_close // 2 + 1]
    k_close = (xg * xg + yg * yg) <= (r_close / 2.0) ** 2
    closed = ndimage.binary_closing(hair_lines, structure=k_close)
    filled = ndimage.binary_fill_holes(closed)

    k_horiz = np.ones((1, max(15, int(round(25 * scale)))), dtype=bool)
    k_vert = np.ones((max(15, int(round(25 * scale))), 1), dtype=bool)
    hv_closed = ndimage.binary_closing(hair_lines, structure=k_horiz) & ndimage.binary_closing(hair_lines, structure=k_vert)
    filled = ndimage.binary_fill_holes(filled | hv_closed)

    # 외곽 선화(hair_lines) 바깥쪽으로 브릿징된 외부 배경만 다시 깎아내고, 선화 안쪽의 은발 머리카락 가닥 내부는 100% 보존
    added_bg = filled & (~hair_lines)
    outside = ~filled
    peel = outside.copy()
    for _ in range(r_close // 2 + 2):
        step = ndimage.binary_dilation(peel, iterations=1) & added_bg
        if not np.any(step):
            break
        peel |= step
    filled = filled & (~peel)
    filled = ndimage.binary_fill_holes(filled)

    interior_lock = ndimage.binary_erosion(filled, iterations=1) & hair_roi
    a[interior_lock] = np.maximum(a[interior_lock], 255.0)

    outer_rim = filled & (~interior_lock) & hair_roi
    line_aa = np.clip((253.0 - lum) / (253.0 - 175.0), 0.0, 1.0) * 255.0
    a[outer_rim] = np.maximum(a[outer_rim], np.maximum(line_aa[outer_rim], 180.0 * (lum[outer_rim] < 244.0)))

    out[:, :, 3] = np.clip(np.round(a), 0, 255).astype(np.uint8)
    return out


def restore_crown_if_needed(rgba):
    """
    상단 경계(y = 0)에 정수리 머리카락이 잘린 스프라이트를 하단 고정 아핀 변환 + 포물선 정수리 돔 아크 합성으로 자연스럽게 복원 -> (복원된 RGBA 배열, 변경 여부) 반환
    """
    h, w = rgba.shape[:2]
    a = rgba[:, :, 3]
    ys = np.where(a > 20)[0]
    if len(ys) == 0:
        return rgba, False
    min_y = int(ys.min())
    top_cols = np.where(a[0, :] > 20)[0]
    top_px = len(top_cols)

    if top_px == 0 and min_y >= 6:
        return rgba, False

    if top_px > 0:
        x_left, x_right = int(top_cols.min()), int(top_cols.max())
        w_top = x_right - x_left + 1
        cap_h = max(4, min(20, int(round(0.14 * w_top))))
    else:
        cap_h = 0

    dy = max(8 - min_y, cap_h + 8)
    new_h = max(1, h - dy)
    new_w = max(1, int(round(w * (h - dy * 0.45) / float(h))))
    tx = int(round((w - new_w) * 0.5))
    ty = int(round(dy))

    rgb_f = rgba[:, :, :3].astype(np.float32)
    a_f = rgba[:, :, 3:4].astype(np.float32) / 255.0
    premult = np.dstack([np.clip(np.round(rgb_f * a_f), 0, 255).astype(np.uint8), rgba[:, :, 3]])
    scaled_pil = Image.fromarray(premult, mode="RGBA").resize((new_w, new_h), Image.Resampling.LANCZOS)
    canvas_pil = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    canvas_pil.paste(scaled_pil, (tx, ty))
    warped = np.array(canvas_pil, dtype=np.float32)
    w_a = np.clip(warped[:, :, 3], 0.0, 255.0)
    w_rgb = np.zeros_like(rgb_f)
    vis = w_a > 1.0
    w_rgb[vis] = np.clip(warped[:, :, :3][vis] / (w_a[vis, None] / 255.0), 0.0, 255.0)
    out = np.dstack([np.round(w_rgb).astype(np.uint8), np.round(w_a).astype(np.uint8)])

    if top_px > 0 and cap_h > 0:
        y_base = int(round(ty))
        base_cols = np.where(out[min(h - 1, y_base + 1), :, 3] > 40)[0]
        if len(base_cols) >= 4:
            xl, xr = int(base_cols.min()), int(base_cols.max())
            xm = 0.5 * (xl + xr)
            half_w = max(2.0, 0.5 * (xr - xl))
            edge_rgb = out[min(h - 1, y_base + 2), xl, :3].astype(np.float32)
            for x in range(xl, xr + 1):
                u = (x - xm) / half_w
                if abs(u) >= 1.0:
                    continue
                hx = cap_h * (1.0 - u * u)
                if hx < 0.5:
                    continue
                y_start = max(2, int(np.floor(y_base - hx)))
                base_a = float(out[min(h - 1, y_base + 1), x, 3])
                for y in range(y_start, y_base + 1):
                    dist_from_arc = (y - (y_base - hx))
                    if dist_from_arc <= 0:
                        continue
                    ramp = min(1.0, dist_from_arc / 2.0)
                    new_alpha = int(round(base_a * ramp))
                    if new_alpha <= out[y, x, 3]:
                        continue
                    src_y = min(h - 1, y_base + 2 + (y_base - y))
                    sample_rgb = out[src_y, x, :3].astype(np.float32)
                    if dist_from_arc < 2.2:
                        t_line = max(0.0, min(1.0, (dist_from_arc - 0.5) / 1.7))
                        outline_col = np.minimum(sample_rgb * 0.55, edge_rgb)
                        pix_rgb = outline_col * (1.0 - t_line) + sample_rgb * t_line
                    else:
                        pix_rgb = sample_rgb
                    out[y, x, :3] = np.clip(np.round(pix_rgb), 0, 255).astype(np.uint8)
                    out[y, x, 3] = np.clip(new_alpha, 0, 255)

    out[:3, :, :] = 0
    return out, True


def measure_body_proportions(rgba):
    """
    RGBA 배열을 받아 캐릭터 두부 상단(top_y), 관자놀이·두상 폭 비율(head_w_ratio), 어깨 폭 비율(shoulder_w_ratio), 몸통 폭 비율(torso_w_ratio), 두부 중심 X좌표(head_cx)를 계산해 딕셔너리로 반환
    """
    h, w = rgba.shape[:2]
    a = rgba[:, :, 3] >= 128
    ys = np.where(a)[0]
    if len(ys) == 0:
        return {"top_y": 0, "head_w_ratio": 0.345, "shoulder_w_ratio": 0.515, "torso_w_ratio": 0.695, "head_cx": 0.5 * w}
    top_y = int(ys.min())
    widths = []
    centers = []
    for y in range(top_y + int(0.05 * h), min(h, top_y + int(0.20 * h))):
        xs = np.where(a[y, :])[0]
        if len(xs) > 10:
            splits = np.where(np.diff(xs) > max(4, int(0.012 * w)))[0]
            runs = np.split(xs, splits + 1)
            best_run = min(runs, key=lambda r: abs(0.5 * (r[0] + r[-1]) - 0.5 * w))
            widths.append(best_run[-1] - best_run[0])
            centers.append(0.5 * (best_run[0] + best_run[-1]))
    head_w = float(np.percentile(widths, 85)) if widths else 0.345 * w
    head_cx = float(np.median(centers)) if centers else 0.5 * w

    def row_span_ratio(yf):
        ry = min(h - 1, max(0, int(round(yf * h))))
        xs = np.where(a[ry, :])[0]
        return float(xs.max() - xs.min()) / float(w) if len(xs) > 5 else 0.0

    return {
        "top_y": top_y,
        "head_w_ratio": head_w / float(w),
        "shoulder_w_ratio": row_span_ratio(0.35),
        "torso_w_ratio": row_span_ratio(0.50),
        "head_cx": head_cx,
    }


def validate_proportion_against_ref(rgba, ref_rgba, max_head_ratio_diff=0.08):
    """
    생성된 스프라이트와 기준 스프라이트(smile/normal)의 머리 크기·어깨·몸통 비율을 비교해 인위적인 이미지 왜곡(워핑) 없이 정량 일치 여부(passed, metrics)를 반환
    """
    cur = measure_body_proportions(rgba)
    if ref_rgba is None:
        return True, {"cur": cur, "ref": None, "head_scale_ratio": 1.0}
    ref = measure_body_proportions(ref_rgba)
    head_scale_ratio = cur["head_w_ratio"] / max(0.05, ref["head_w_ratio"])
    passed = abs(head_scale_ratio - 1.0) <= max_head_ratio_diff
    return passed, {
        "cur": cur,
        "ref": ref,
        "head_scale_ratio": head_scale_ratio,
        "passed": passed,
    }


def harmonize_style_to_ref(rgba, ref_rgba):
    """
    기하 왜곡(워핑) 없이 기준 스프라이트(smile/normal)의 머리카락 톤·의상(재킷) 톤·선화 농도를 참조해 생성 이미지의 그림체(색감·대비·과장된 먹선·녹색 크로마키 잔류물)를 자연스럽게 통일
    """
    if ref_rgba is None:
        return rgba
    h, w = rgba.shape[:2]
    rh, rw = ref_rgba.shape[:2]
    if (rh, rw) != (h, w):
        ref_arr = np.array(Image.fromarray(ref_rgba).resize((w, h), Image.Resampling.LANCZOS))
    else:
        ref_arr = ref_rgba

    rgb = rgba[:, :, :3].astype(np.float64)
    a = rgba[:, :, 3]
    fg = a > 128

    r_rgb = ref_arr[:, :, :3].astype(np.float64)
    r_fg = ref_arr[:, :, 3] > 128

    yy = np.arange(h)[:, None]
    xx = np.arange(w)[None, :]

    # 중앙 얼굴·목·칼라 보호 영역(목 그림자가 머리카락으로 오인되어 어두워지는 현상 원천 차단)
    inner_face_neck = (yy > int(0.15 * h)) & (yy < int(0.38 * h)) & (xx > int(0.405 * w)) & (xx < int(0.608 * w))

    def get_hair_mask(c_rgb, c_fg):
        skin = (c_rgb[:, :, 0] > 135.0) & (c_rgb[:, :, 0] >= c_rgb[:, :, 1]) & ((c_rgb[:, :, 0] - c_rgb[:, :, 2]) > 16.0)
        white_acc = c_rgb.min(axis=2) > 190.0
        blue_cloth = ((c_rgb[:, :, 2] - c_rgb[:, :, 0]) > 10.0) & (yy > int(0.26 * h))
        return c_fg & (yy < int(0.34 * h)) & (~skin) & (~inner_face_neck) & (~white_acc) & (~blue_cloth) & (c_rgb.max(axis=2) < 160.0) & (c_rgb.max(axis=2) > 18.0)

    cur_hair = get_hair_mask(rgb, fg)
    ref_hair = get_hair_mask(r_rgb, r_fg)
    if cur_hair.sum() > 500 and ref_hair.sum() > 500:
        tgt_mean = r_rgb[ref_hair].mean(axis=0)
        tgt_std = np.maximum(r_rgb[ref_hair].std(axis=0), 8.0)
        cur_mean = rgb[cur_hair].mean(axis=0)
        cur_std = np.maximum(rgb[cur_hair].std(axis=0), 8.0)
        if np.abs(cur_mean - tgt_mean).max() > 5.0 or np.abs(cur_std - tgt_std).max() > 4.0:
            hair_w = ndimage.gaussian_filter(cur_hair.astype(np.float64), sigma=2.0)
            for c in range(3):
                mapped = (rgb[:, :, c] - cur_mean[c]) * (tgt_std[c] / cur_std[c]) + tgt_mean[c]
                rgb[:, :, c] = rgb[:, :, c] * (1.0 - 0.80 * hair_w) + np.clip(mapped, 14.0, 185.0) * (0.80 * hair_w)

    # 의상(네이비 교복 재킷 등) 톤·대비 정합
    cur_jkt = fg & (yy > int(0.30 * h)) & (yy < int(0.80 * h)) & ((rgb[:, :, 2] - rgb[:, :, 0]) > 8.0) & (rgb.max(axis=2) < 145.0) & (rgb.max(axis=2) > 16.0)
    ref_jkt = r_fg & (yy > int(0.30 * h)) & (yy < int(0.80 * h)) & ((r_rgb[:, :, 2] - r_rgb[:, :, 0]) > 8.0) & (r_rgb.max(axis=2) < 145.0) & (r_rgb.max(axis=2) > 16.0)
    if cur_jkt.sum() > 1000 and ref_jkt.sum() > 1000:
        tgt_jm = r_rgb[ref_jkt].mean(axis=0)
        tgt_js = np.maximum(r_rgb[ref_jkt].std(axis=0), 9.0)
        cur_jm = rgb[cur_jkt].mean(axis=0)
        cur_js = np.maximum(rgb[cur_jkt].std(axis=0), 9.0)
        if np.abs(cur_jm - tgt_jm).max() > 5.0 or np.abs(cur_js - tgt_js).max() > 4.0:
            jkt_w = ndimage.gaussian_filter(cur_jkt.astype(np.float64), sigma=2.0)
            for c in range(3):
                mapped = (rgb[:, :, c] - cur_jm[c]) * (tgt_js[c] / cur_js[c]) + tgt_jm[c]
                rgb[:, :, c] = rgb[:, :, c] * (1.0 - 0.78 * jkt_w) + np.clip(mapped, 14.0, 165.0) * (0.78 * jkt_w)

    # 피부 인접 과장된 순검정 먹선(RGB < 36)을 부드러운 웜 차콜 브라운 선화로 완화
    skin_m = fg & (rgb[:, :, 0] > 140.0) & (rgb[:, :, 0] >= rgb[:, :, 1]) & ((rgb[:, :, 0] - rgb[:, :, 2]) > 18.0)
    skin_dil = ndimage.binary_dilation(skin_m, iterations=3)
    line_m = fg & (yy > int(0.11 * h)) & (yy < int(0.62 * h)) & skin_dil & (rgb.max(axis=2) < 36.0)
    if line_m.any():
        lw = ndimage.gaussian_filter(line_m.astype(np.float64), sigma=0.8)
        rgb[:, :, 0] = rgb[:, :, 0] + np.maximum(0.0, 42.0 - rgb[:, :, 0]) * 0.50 * lw
        rgb[:, :, 1] = rgb[:, :, 1] + np.maximum(0.0, 35.0 - rgb[:, :, 1]) * 0.50 * lw
        rgb[:, :, 2] = rgb[:, :, 2] + np.maximum(0.0, 35.0 - rgb[:, :, 2]) * 0.50 * lw

    # 상단부 머리카락·목 주변 녹색 크로마키 잔류물 제거
    green_tint = (a > 0) & (yy < int(0.34 * h)) & ((rgb[:, :, 1] - rgb[:, :, 0]) > 2.0) & (~skin_m)
    if green_tint.any():
        rgb[:, :, 1][green_tint] = np.minimum(rgb[:, :, 1][green_tint], 0.5 * (rgb[:, :, 0][green_tint] + rgb[:, :, 2][green_tint]))

    out = rgba.copy()
    out[:, :, :3] = np.clip(np.round(rgb), 0, 255).astype(np.uint8)
    out[out[:, :, 3] == 0, :3] = 0
    return out


def restore_outer_hair_from_ref(rgba, ref_rgba):
    """
    동일 기본 포즈 표정에서 배경 제거 중 과도하게 잘린 좌우 외곽 머리카락 가닥을 기준 스프라이트(normal/smile)로부터 복원하고 상단부 녹색 크로마키 잔류물을 제거
    """
    if ref_rgba is None:
        return rgba
    th, tw = rgba.shape[:2]
    rh, rw = ref_rgba.shape[:2]
    sx, sy = tw / 1152.0, th / 1536.0
    if (rh, rw) != (th, tw):
        r_arr = np.array(Image.fromarray(ref_rgba).resize((tw, th), Image.Resampling.LANCZOS)).astype(np.float64)
    else:
        r_arr = ref_rgba.astype(np.float64)

    t_arr = rgba.astype(np.float64)
    yy = np.arange(th)[:, None]
    xx = np.arange(tw)[None, :]

    t_rgb = t_arr[:, :, :3]
    t_a = t_arr[:, :, 3] > 128
    is_green_chroma = (t_rgb[:, :, 1] - t_rgb[:, :, 0]) > 2.0

    keep_target = np.zeros((th, tw), dtype=bool)
    keep_target[int(502 * sy):, :] = True
    keep_target[(yy >= int(170 * sy)) & (yy <= int(455 * sy)) & (xx >= int(452 * sx)) & (xx <= int(702 * sx))] = True
    neck_skin_or_collar = (yy >= int(360 * sy)) & (yy <= int(510 * sy)) & (xx >= int(475 * sx)) & (xx <= int(685 * sx)) & (t_rgb[:, :, 0] > 115.0) & (~is_green_chroma)
    keep_target |= ndimage.binary_dilation(neck_skin_or_collar, iterations=max(1, int(2 * sx)))
    is_skin = t_a & (yy >= int(195 * sy)) & (yy <= int(510 * sy)) & (xx >= int(412 * sx)) & (xx <= int(740 * sx)) & (
        (t_rgb[:, :, 0] > 150.0) & ((t_rgb[:, :, 0] - t_rgb[:, :, 2]) > 20.0)
    )
    keep_target |= ndimage.binary_dilation(is_skin, iterations=max(2, int(4 * sx)))
    is_blazer = t_a & (yy >= int(410 * sy)) & ((t_rgb[:, :, 2] - t_rgb[:, :, 0]) > 10.0)
    keep_target |= ndimage.binary_dilation(is_blazer, iterations=max(1, int(2 * sx)))
    keep_target[is_green_chroma & (yy < int(515 * sy))] = False

    w_t = ndimage.gaussian_filter(keep_target.astype(np.float64), sigma=4.0 * sx)
    core_keep = ndimage.binary_erosion(keep_target, iterations=max(1, int(3 * sx)))
    w_t[core_keep] = 1.0
    w_t[int(515 * sy):, :] = 1.0

    t_af = t_arr[:, :, 3:4] / 255.0
    r_af = r_arr[:, :, 3:4] / 255.0
    w_3 = w_t[:, :, None]
    out_a = t_af * w_3 + r_af * (1.0 - w_3)
    out_premul = (t_arr[:, :, :3] * t_af) * w_3 + (r_arr[:, :, :3] * r_af) * (1.0 - w_3)

    out_rgb = np.zeros_like(out_premul)
    nz = out_a[:, :, 0] > 1e-3
    for c in range(3):
        out_rgb[:, :, c][nz] = np.clip(out_premul[:, :, c][nz] / out_a[:, :, 0][nz], 0.0, 255.0)

    green_tint = (out_a[:, :, 0] > 0) & (yy < int(520 * sy)) & ((out_rgb[:, :, 1] - out_rgb[:, :, 0]) > 1.5)
    if green_tint.any():
        out_rgb[:, :, 1][green_tint] = np.minimum(out_rgb[:, :, 1][green_tint], 0.5 * (out_rgb[:, :, 0][green_tint] + out_rgb[:, :, 2][green_tint]))

    res = np.zeros((th, tw, 4), dtype=np.uint8)
    res[:, :, :3] = np.round(out_rgb).astype(np.uint8)
    res[:, :, 3] = np.round(np.clip(out_a[:, :, 0] * 255.0, 0.0, 255.0)).astype(np.uint8)
    res[res[:, :, 3] == 0, :3] = 0
    return res


def resolve_default_ref_rgba(input_path, explicit_ref_path=None):
    """
    명시된 기준 이미지 경로 또는 입력 경로의 상위 expressions 폴더 내 smile/normal 기본 스프라이트를 자동 탐색하여 RGBA 배열로 반환
    """
    candidates = []
    if explicit_ref_path:
        candidates.append(explicit_ref_path)
    else:
        abs_in = os.path.abspath(input_path)
        parts = abs_in.replace("\\", "/").split("/")
        if "expressions" in parts:
            idx = parts.index("expressions")
            expr_root = "/".join(parts[:idx + 1])
            for base_expr in ("smile", "normal"):
                cand = os.path.join(expr_root, base_expr, "01", "sprite.png")
                if os.path.abspath(cand) != abs_in:
                    candidates.append(cand)
    for c in candidates:
        if c and os.path.exists(c):
            try:
                return np.array(Image.open(c).convert("RGBA"))
            except Exception:
                pass
    return None


def generate_verification_sheet(rgba, sheet_path, ref_rgba=None):
    """
    최종 RGBA 스프라이트를 어두운 배경(#181824) 및 고대비 네온 마젠타(#FF00FF) 배경에 합성하고 기준선(눈·턱·어깨)과 머리·몸통 비율 수치를 표시한 검수 시트 생성
    """
    from PIL import ImageDraw
    h, w = rgba.shape[:2]
    pw, ph = 384, int(round(384 * h / float(w)))
    panels = []
    if ref_rgba is not None:
        rm = measure_body_proportions(ref_rgba)
        panels.append((ref_rgba, (24, 24, 36), f"REF (head={rm['head_w_ratio']:.3f} shld={rm['shoulder_w_ratio']:.3f})"))
    cm = measure_body_proportions(rgba)
    panels.append((rgba, (24, 24, 36), f"DARK #181824 (head={cm['head_w_ratio']:.3f} shld={cm['shoulder_w_ratio']:.3f})"))
    panels.append((rgba, (255, 0, 255), f"MAGENTA #FF00FF (head={cm['head_w_ratio']:.3f})"))

    canvas = Image.new("RGB", (pw * len(panels), ph), (24, 24, 36))
    for i, (arr, bg_col, title) in enumerate(panels):
        im_r = Image.fromarray(arr).resize((pw, ph), Image.Resampling.LANCZOS)
        bg = Image.new("RGBA", (pw, ph), (*bg_col, 255))
        bg.alpha_composite(im_r)
        rgb_p = bg.convert("RGB")
        d = ImageDraw.Draw(rgb_p)
        for yf, lcol in ((0.142, (0, 255, 255)), (0.245, (0, 255, 0)), (0.350, (255, 200, 0))):
            yl = int(round(yf * ph))
            d.line([(0, yl), (pw, yl)], fill=lcol, width=1)
        d.rectangle([4, 4, pw - 4, 26], fill=(0, 0, 0))
        d.text((10, 8), title, fill=(255, 255, 0))
        canvas.paste(rgb_p, (i * pw, 0))
    os.makedirs(os.path.dirname(os.path.abspath(sheet_path)), exist_ok=True)
    canvas.save(sheet_path, quality=92)


def restore_clipped_contours_by_lineart(rgba, orig_rgb=None):
    """
    원본 RGB에 선화(Line-art)나 채색이 온전히 존재함에도 AI 배경 제거 모델이 흰 가운 소매·흰 셔츠 카라·리본·창백한 손가락·외곽 잔머리 가닥을 배경으로 오인해 잘라낸 영역을 전신 선화 장벽(Line-Art Contour Barrier) 기반으로 자동 복원:
    1. 선화/비순백색 장벽으로 외부 여백과 격리된 닫힌 내부 공간(흰 셔츠/가운/소매/피부/안경/치아)을 좌표 무관 100% 불투명(a=255) 및 원본 RGB로 복원.
    2. 캐릭터 본체에서 바깥으로 뻗어나간 얇은 머리카락/옷깃/장식 선화 가닥(lum < 238 또는 채도 >= 14)이 AI 마스크에서 끊긴 경우 본체 연결 성분을 따라 서브픽셀 안티앨리어싱 알파와 원본 RGB를 복원.
    """
    out = rgba.copy()
    h, w = out.shape[:2]
    scale = max(1.0, w / 1152.0)

    src_rgb = orig_rgb.astype(np.float32) if orig_rgb is not None else out[:, :, :3].astype(np.float32)
    r = src_rgb[:, :, 0]
    g = src_rgb[:, :, 1]
    b = src_rgb[:, :, 2]
    a = out[:, :, 3].astype(np.float32)

    # 이미 투명 배경이 적용된 RGBA 입력인지, 아니면 순백색(#FFFFFF) 배경 원본 RGB 입력인지 판별
    top_corners_transparent = (a[0, 0] < 10.0) and (a[0, w - 1] < 10.0)
    zero_black = (a == 0.0) & (r == 0.0) & (g == 0.0) & (b == 0.0)
    r_bg = np.where(zero_black, 255.0, r)
    g_bg = np.where(zero_black, 255.0, g)
    b_bg = np.where(zero_black, 255.0, b)

    cmin = np.minimum(np.minimum(r_bg, g_bg), b_bg)
    cmax = np.maximum(np.maximum(r_bg, g_bg), b_bg)
    sat = cmax - cmin
    lum = 0.299 * r_bg + 0.587 * g_bg + 0.114 * b_bg
    gy, gx = np.gradient(lum)
    grad = np.hypot(gx, gy)

    main_fg = a >= 180.0
    if not np.any(main_fg):
        return out

    # 1. 선화 및 비순백색 장벽(Line-Art & Non-White Barrier) 검출
    #    이미 외곽이 투명(a < 16)으로 정리된 RGBA의 경우, 외부 여백과 2x2 클로징으로 작은 틈새가 브릿징되어 정상 반투명 테두리가 닫히는 현상을 막기 위해
    #    실제 불투명 전경(a >= 180) 또는 투명 영역 아래에 숨겨진 실제 원본 선화/채색((a == 0) & (~zero_black) & (lum < 245))만 클로징 없이 장벽으로 인정
    if top_corners_transparent:
        hidden_real_paint = (~zero_black) & (a == 0.0) & ((lum < 245.0) | (sat >= 12.0))
        valid_barrier = main_fg | hidden_real_paint
    else:
        is_flat_white_bg = (lum >= 251.5) & (sat <= 4.5) & (grad <= 6.0) & (a < 180.0)
        line_or_paint_barrier = (~is_flat_white_bg) | main_fg
        k2 = np.ones((2, 2), dtype=bool)
        closed_barrier = ndimage.binary_closing(line_or_paint_barrier, structure=k2, iterations=1)
        near_main_24 = ndimage.binary_dilation(main_fg, iterations=max(8, int(round(18 * scale))))
        valid_barrier = ndimage.binary_propagation(main_fg, mask=closed_barrier & near_main_24)

    # 캔버스 테두리(x=0, y=0, x=w-1, y=h-1)와 연결된 진짜 외부 배경만 플러드필로 추출
    walkable_bg = ~valid_barrier
    bg_lbl, _ = ndimage.label(walkable_bg)
    true_ext_bg = np.zeros((h, w), dtype=bool)
    for lbl_i, sl in enumerate(ndimage.find_objects(bg_lbl), 1):
        if sl is None:
            continue
        if sl[0].start == 0 or sl[1].start == 0 or sl[0].stop >= h or sl[1].stop >= w:
            true_ext_bg[sl] |= (bg_lbl[sl] == lbl_i)

    # 선화 폐곡선 안쪽에 갇혀 외부 여백과 분리된 내부 영역 중 AI가 잘못 파먹은 영역(a < 235) 검사
    # (단, 외부 배경과 3px 이내로 맞닿은 정상 반투명 안티앨리어싱 테두리는 제외하고 실제 내부 침식 구멍만 대상)
    dist_to_ext_bg = ndimage.distance_transform_edt(~true_ext_bg)
    trapped_inside_contour = (~true_ext_bg) & (dist_to_ext_bg >= 3.0) & (a < 235.0)
    in_lbl, _ = ndimage.label(trapped_inside_contour)
    max_sleeve_or_collar_hole = int(18000 * (scale ** 2))

    for lbl_i, sl in enumerate(ndimage.find_objects(in_lbl), 1):
        if sl is None:
            continue
        comp = (in_lbl[sl] == lbl_i)
        area = int(comp.sum())
        if area == 0 or area > max_sleeve_or_collar_hole:
            continue

        sub_lum = lum[sl][comp]
        sub_sat = sat[sl][comp]
        sub_a = a[sl][comp]
        # 이미 투명 배경이 적용된 스프라이트에서 어두운 머리카락·입김·목 그림자 틈새(평균 명도 < 185 또는 최소 알파 < 60)는 침식 홀이 아니므로 원형 보존
        if float(zero_black[sl][comp].mean()) >= 0.20 or (top_corners_transparent and (float(sub_a.min()) < 60.0 or float(sub_lum.mean()) < 185.0)):
            continue

        # 주변 경계(border) 픽셀 분석: 선화·피부·어두운 의상으로 둘러싸인 내부 홀(흰 셔츠/가운/소매/치아/안경)인지, 팔-몸통 사이 실제 배경 구멍인지 구분
        y0_b, y1_b = max(0, sl[0].start - 3), min(h, sl[0].stop + 3)
        x0_b, x1_b = max(0, sl[1].start - 3), min(w, sl[1].stop + 3)
        sub_m = (in_lbl[y0_b:y1_b, x0_b:x1_b] == lbl_i)
        rim_b = ndimage.binary_dilation(sub_m, iterations=2) & (~sub_m)
        if rim_b.any():
            rim_a_mean = float(a[y0_b:y1_b, x0_b:x1_b][rim_b].mean())
            rim_lum_mean = float(lum[y0_b:y1_b, x0_b:x1_b][rim_b].mean())
        else:
            rim_a_mean, rim_lum_mean = 255.0, 128.0

        # 팔-몸통 사이 넓은 배경 구멍(area > 2200*scale^2 이고 내부가 95% 이상 순백색 평탄면)만 투명으로 유지하고,
        # 선화/의상/피부로 둘러싸인 흰 셔츠 카라·소매 커프스·리본·안경·손가락·치아는 100% 불투명 복원
        pure_white_ratio = float(((sub_lum >= 252.0) & (sub_sat <= 3.0)).mean())
        if area > int(2200 * (scale ** 2)) and pure_white_ratio >= 0.96 and rim_lum_mean < 70.0:
            continue

        if rim_a_mean >= 180.0 and float((sub_a > 0).mean()) >= 0.35:
            a[sl][comp] = 255.0
            out[:, :, 0][sl][comp] = np.clip(np.round(r[sl][comp]), 0, 255).astype(np.uint8)
            out[:, :, 1][sl][comp] = np.clip(np.round(g[sl][comp]), 0, 255).astype(np.uint8)
            out[:, :, 2][sl][comp] = np.clip(np.round(b[sl][comp]), 0, 255).astype(np.uint8)

    # 2. 본체 외곽에서 끊어진 잔머리 가닥·옷깃 선화·손가락 윤곽선(Clipped Strands & Contours) 연속 복원
    #    순백색 배경 원본인 경우에만 끊긴 가닥 복원 수행 (이미 정상 안티앨리어싱된 반투명 테두리 보호)
    if not top_corners_transparent:
        near_main_14 = ndimage.binary_dilation(a >= 180.0, iterations=max(5, int(round(12 * scale))))
        visible_strand_px = (~zero_black) & near_main_14 & ((lum < 236.0) | (sat >= 15.0)) & (grad >= 5.0)
        connected_strands = ndimage.binary_propagation(a >= 180.0, mask=(a >= 180.0) | visible_strand_px)
        newly_recovered_strand = connected_strands & (a < 210.0)

        if np.any(newly_recovered_strand):
            strand_alpha = np.clip((252.0 - lum) / (252.0 - 115.0), 0.20, 1.0) * 255.0
            colored_boost = np.clip(sat / 32.0, 0.0, 1.0) * 255.0
            target_a = np.maximum(a, np.maximum(strand_alpha, colored_boost))
            a[newly_recovered_strand] = target_a[newly_recovered_strand]

            a01 = np.clip(a[newly_recovered_strand] / 255.0, 0.20, 1.0)
            out[:, :, 0][newly_recovered_strand] = np.clip(np.round((r[newly_recovered_strand] - (1.0 - a01) * 255.0) / a01), 0, 255).astype(np.uint8)
            out[:, :, 1][newly_recovered_strand] = np.clip(np.round((g[newly_recovered_strand] - (1.0 - a01) * 255.0) / a01), 0, 255).astype(np.uint8)
            out[:, :, 2][newly_recovered_strand] = np.clip(np.round((b[newly_recovered_strand] - (1.0 - a01) * 255.0) / a01), 0, 255).astype(np.uint8)

    out[:, :, 3] = np.clip(np.round(a), 0, 255).astype(np.uint8)
    return out


def sota_clean_one_shot(rgba, character_id=None, is_fresh_cutout=False):
    """
    RGBA 배열과 캐릭터 식별자(character_id)를 받아 캐릭터별 맞춤형 원샷(One-Shot) 무결점 배경 정리 파이프라인을 수행:
    1. 은발 캐릭터(yuna)인 경우 외곽 은발 잔머리 루프(recover_silver_hair_locks) 복원 및 잔머리 루프 포켓 제거 + 전신 선화 장벽 기반 잘림 복원(restore_clipped_contours_by_lineart).
    2. 기존 투명 영역(a < 35)과 8px 이내로 맞닿은 두부·목·손 주변(y < 0.305*h) 순백색(#FFFFFF) 잔여 코너 전파 제거 + 턱 밑·손가락-목 사이(y=0.19..0.300*h) 외곽 투명 경계 인접 미세 순백색 배경 조각(<=650px) 제거.
    3. 부유 노이즈 섬 제거 + 외곽 반투명 경계(0 < a < 235) 서브픽셀 전경 색상 역산(unmix).
    4. 두부·얼굴 내부(눈동자·공막·코끝 하이라이트·치아·혀·머리띠 등, 외곽 윤곽선에서 안쪽으로 10px 이상 들어간 내부 영역 및 피부로 둘러싸인 미세 하이라이트) 100% 불투명(a=255) 및 원본 RGB 복원(코/눈 구멍 원천 차단).
    """
    if character_id is None:
        character_id = detect_character_id(rgba=rgba)
    if not is_fresh_cutout and (rgba[0, 0, 3] < 10) and (rgba[0, rgba.shape[1] - 1, 3] < 10):
        rgba = rgba.copy()
        rgba[rgba[:, :, 3] == 0, :3] = 0
    orig_rgb = rgba[:, :, :3].copy()
    out = recover_silver_hair_locks(rgba.copy(), character_id=character_id)
    out = restore_clipped_contours_by_lineart(out, orig_rgb=orig_rgb)
    is_silver = detect_silver_hair(out, character_id=character_id)
    h, w = out.shape[:2]
    scale = w / 1152.0

    r = out[:, :, 0].astype(np.float32)
    g = out[:, :, 1].astype(np.float32)
    b = out[:, :, 2].astype(np.float32)
    a = out[:, :, 3].astype(np.float32)
    cmin = np.minimum(np.minimum(r, g), b)
    cmax = np.maximum(np.maximum(r, g), b)
    sat = cmax - cmin
    yy, xx = np.mgrid[0:h, 0:w]

    # 두부 실루엣 내부 깊이(dist_head_in) 및 피부 마스크 계산: 얼굴 안쪽(코끝 하이라이트·눈·치아)은 절대 지우지 않도록 보호
    head_filled_init = ndimage.binary_fill_holes(a >= 180)
    dist_head_in = ndimage.distance_transform_edt(head_filled_init)
    warm_skin = (a >= 150) & ((r - b) >= 18.0) & (r >= 135.0)
    dist_ext_init = ndimage.distance_transform_edt(~(a < 25.0))
    deep_face_interior = (yy >= int(0.08 * h)) & (yy <= int(0.285 * h)) & (xx >= int(0.39 * w)) & (xx <= int(0.62 * w)) & (dist_ext_init >= 12.0 * scale)

    # 1. 기존 투명 영역(a < 35)과 인접한 상단 순백색 코너 및 턱 밑/목-손가락 사이 미세 순백색 배경 조각 제거
    if not is_silver:
        # 턱 밑·귀 밑·목 외곽 경계(외부 투명 배경으로부터 6px 이내)의 미세 순백색 배경 삼각형 제거
        # (near_trans 스트립으로 사전 절단하지 않고 전체 흰색 연결 성분을 먼저 라벨링하여 들어올린 팔의 흰 소매 커프스·셔츠 칼라·코끝 하이라이트·치아를 100% 보존)
        dist_ext_tw = ndimage.distance_transform_edt(~(a < 35.0))
        neck_band = (yy >= int(0.185 * h)) & (yy < int(0.272 * h)) & (xx >= int(0.33 * w)) & (xx <= int(0.76 * w)) & (~deep_face_interior)
        tiny_white_cand = (a > 0) & (cmin >= 228.0) & (sat <= 14.0) & ((r - b) <= 10.0) & (~deep_face_interior)
        tw_lbl, _ = ndimage.label(tiny_white_cand)
        max_tw_area = int(650 * (scale ** 2))
        killed_tw = np.zeros((h, w), dtype=bool)
        for tw_i, tw_sl in enumerate(ndimage.find_objects(tw_lbl), 1):
            if tw_sl is None:
                continue
            sub_tw = (tw_lbl[tw_sl] == tw_i)
            tw_area = int(sub_tw.sum())
            if 3 <= tw_area <= max_tw_area:
                if not bool(neck_band[tw_sl][sub_tw].any()):
                    continue
                d_tw = dist_ext_tw[tw_sl][sub_tw]
                if float(d_tw.min()) > 6.0 * scale or float(d_tw.max()) > 16.0 * scale:
                    continue
                sub_cm = cmin[tw_sl][sub_tw]
                if float(sub_cm.max()) < 242.0:
                    continue
                # 피부로만 둘러싸인 작은 점(코끝 하이라이트 등)은 절대 지우지 않음
                y0_t, y1_t = max(0, tw_sl[0].start - 3), min(h, tw_sl[0].stop + 3)
                x0_t, x1_t = max(0, tw_sl[1].start - 3), min(w, tw_sl[1].stop + 3)
                pad_m = (tw_lbl[y0_t:y1_t, x0_t:x1_t] == tw_i)
                rim_m = ndimage.binary_dilation(pad_m, iterations=2) & (~pad_m)
                skin_frac = float(warm_skin[y0_t:y1_t, x0_t:x1_t][rim_m].mean()) if rim_m.any() else 0.0
                if skin_frac >= 0.65 and tw_area <= int(180 * (scale ** 2)):
                    continue
                killed_tw[tw_sl] |= sub_tw
        if np.any(killed_tw):
            a[killed_tw] = 0.0
            tw_rim = ndimage.binary_dilation(killed_tw, iterations=2) & (~killed_tw) & (~deep_face_interior) & (a > 0) & (cmin >= 180.0) & (sat <= 26.0)
            a[tw_rim] *= np.clip((235.0 - cmin[tw_rim]) / 55.0, 0.0, 0.65)

        # 전신 외곽(머리카락·어깨·소매·치마 경계)에서 어두운 선화/의상 테두리 바깥쪽에 갇힌 순백색(#FFFFFF) 배경 포켓 제거 (흰 가운·셔츠 하이라이트는 주변 전경 명도가 높으므로 100% 보존)
        lum_cur = 0.299 * r + 0.587 * g + 0.114 * b
        ext_bg_cur = a < 25.0
        dist_ext_cur = ndimage.distance_transform_edt(~ext_bg_cur)
        outer_pw_cand = (~deep_face_interior) & (a >= 120.0) & (cmin >= 246.0) & (sat <= 6.0)
        op_lbl, _ = ndimage.label(outer_pw_cand)
        min_op_area = max(12, int(15 * (scale ** 2)))
        max_op_area = int(950 * (scale ** 2))
        killed_op = np.zeros((h, w), dtype=bool)
        for op_i, op_sl in enumerate(ndimage.find_objects(op_lbl), 1):
            if op_sl is None:
                continue
            sub_op = (op_lbl[op_sl] == op_i)
            op_area = int(sub_op.sum())
            if op_area < min_op_area or op_area > max_op_area:
                continue
            if float(dist_ext_cur[op_sl][sub_op].min()) > 8.0 * scale:
                continue
            if float(cmin[op_sl][sub_op].mean()) < 250.5 or float(sat[op_sl][sub_op].mean()) > 3.5:
                continue
            y0_o, y1_o = max(0, op_sl[0].start - 3), min(h, op_sl[0].stop + 3)
            x0_o, x1_o = max(0, op_sl[1].start - 3), min(w, op_sl[1].stop + 3)
            pad_o = (op_lbl[y0_o:y1_o, x0_o:x1_o] == op_i)
            rim_o = ndimage.binary_dilation(pad_o, iterations=3) & (~pad_o) & (a[y0_o:y1_o, x0_o:x1_o] >= 150.0)
            if not rim_o.any():
                killed_op[op_sl] |= sub_op
                continue
            if op_area <= int(180 * (scale ** 2)) and float(warm_skin[y0_o:y1_o, x0_o:x1_o][rim_o].mean()) >= 0.15:
                continue
            rim_lums = lum_cur[y0_o:y1_o, x0_o:x1_o][rim_o]
            fg_lum_mean = float(rim_lums.mean())
            fg_lum_p25 = float(np.percentile(rim_lums, 25))
            if fg_lum_mean <= 165.0 and fg_lum_p25 <= 120.0:
                killed_op[op_sl] |= sub_op
        if np.any(killed_op):
            a[killed_op] = 0.0
            op_rim = ndimage.binary_dilation(killed_op, iterations=2) & (~killed_op) & (~deep_face_interior) & (a > 0) & (cmin >= 180.0) & (sat <= 26.0)
            a[op_rim] *= np.clip((242.0 - cmin[op_rim]) / 55.0, 0.0, 0.65)

    # 2. 부유 노이즈 섬 제거 (메인 캐릭터 연결 성분만 유지)
    for thresh in (20, 10, 1):
        vis = a >= thresh
        lbl, num = ndimage.label(vis)
        if num > 1:
            sizes = ndimage.sum(vis, lbl, range(1, num + 1))
            main_lbl = int(np.argmax(sizes)) + 1
            a[vis & (lbl != main_lbl)] = 0.0

    # 3. 반투명 외곽 경계 픽셀(0 < a < 235)에 한해서만 서브픽셀 전경 색상 역산 수행 (불투명 흰 의상/어깨 하이라이트는 100% 보존)
    semi = (a > 0) & (a < 235) & (cmin >= 180.0) & (sat <= 28.0) & (~deep_face_interior)
    if np.any(semi):
        white_fringe = semi & (cmin >= 225.0) & (sat <= 14.0)
        a[white_fringe] *= np.clip((252.0 - cmin[white_fringe]) / 35.0, 0.0, 0.75)
        still_vis = (a >= 16.0) & semi
        alpha_norm = np.clip(a[still_vis] / 255.0, 0.15, 1.0)
        for ch in (r, g, b):
            ch[still_vis] = np.clip((ch[still_vis] - (1.0 - alpha_norm) * 255.0) / alpha_norm, 0.0, 255.0)

    a[a < 16.0] = 0.0

    # 4. 얼굴 내부(눈동자·공막·코끝 하이라이트·치아·혀·머리띠 등) 구멍 원천 차단 및 원본 RGB 복원
    #    어떤 각도/줌의 표정이든 두부 실루엣 안쪽(dist_head_in >= 10px)이거나 피부 안쪽에 생긴 미세 구멍(<=450px)은 100% 불투명 복원
    #    (단, 이미 투명 배경으로 도려내진 외곽 잔머리 루프 구멍(orig_a == 0, orig_RGB == 0)은 검정 점으로 메워지지 않도록 배제)
    top_corners_trans_now = (rgba[0, 0, 3] < 10) and (rgba[0, w - 1, 3] < 10)
    near_any_trans = ndimage.distance_transform_edt(a >= 20.0)
    head_filled_now = ndimage.binary_fill_holes(a >= 180)
    face_holes = head_filled_now & (a < 250) & (yy >= int(0.04 * h)) & (yy <= int(0.32 * h))
    fh_lbl, _ = ndimage.label(face_holes)
    max_face_hole = int(1500 * (scale ** 2))
    for fh_i, fh_sl in enumerate(ndimage.find_objects(fh_lbl), 1):
        if fh_sl is None:
            continue
        sub_fh = (fh_lbl[fh_sl] == fh_i)
        fh_area = int(sub_fh.sum())
        if fh_area == 0 or fh_area > max_face_hole:
            continue
        if top_corners_trans_now and float(a[fh_sl][sub_fh].min()) < 60.0:
            continue
        min_d_in = float(dist_head_in[fh_sl][sub_fh].min())
        y0_f, y1_f = max(0, fh_sl[0].start - 2), min(h, fh_sl[0].stop + 2)
        x0_f, x1_f = max(0, fh_sl[1].start - 2), min(w, fh_sl[1].stop + 2)
        pad_f = (fh_lbl[y0_f:y1_f, x0_f:x1_f] == fh_i)
        rim_f = ndimage.binary_dilation(pad_f, iterations=2) & (~pad_f) & (a[y0_f:y1_f, x0_f:x1_f] >= 180)
        skin_f = float(warm_skin[y0_f:y1_f, x0_f:x1_f][rim_f].mean()) if rim_f.any() else 0.0
        is_headband_or_bright = (fh_sl[0].stop <= int(0.13 * h)) and (float(cmin[fh_sl][sub_fh].mean()) >= 185.0) and (min_d_in >= 10.0 * scale)
        # 피부로 둘러싸인 얼굴 내부(눈·코·입·볼) 홀이거나 상단 흰 머리띠 침식 홀만 복원하고, 머리카락·입김·목 옆 틈새는 원형 보존
        if is_headband_or_bright or (skin_f >= 0.45 and fh_area <= int(500 * (scale ** 2))):
            a[fh_sl][sub_fh] = 255.0
            r[fh_sl][sub_fh] = orig_rgb[:, :, 0][fh_sl][sub_fh]
            g[fh_sl][sub_fh] = orig_rgb[:, :, 1][fh_sl][sub_fh]
            b[fh_sl][sub_fh] = orig_rgb[:, :, 2][fh_sl][sub_fh]

    # 양끝 두부 윤곽 내부의 눈·코 중심부(xl_e .. xr_e) 불투명도 최종 보장
    for y_face in range(int(0.14 * h), int(0.255 * h)):
        xs_head = np.where(a[y_face, :] >= 200)[0]
        if len(xs_head) >= int(0.12 * w):
            xl_e = max(int(xs_head.min()) + int(round(12 * scale)), int(0.40 * w))
            xr_e = min(int(xs_head.max()) - int(round(12 * scale)), int(0.64 * w))
            if xr_e > xl_e:
                span_a = a[y_face, xl_e:xr_e + 1]
                eroded_f = (span_a < 250.0) & (near_any_trans[y_face, xl_e:xr_e + 1] >= 4.0 * scale)
                if np.any(eroded_f):
                    span_a[eroded_f] = 255.0
                    r[y_face, xl_e:xr_e + 1][eroded_f] = orig_rgb[y_face, xl_e:xr_e + 1, 0][eroded_f]
                    g[y_face, xl_e:xr_e + 1][eroded_f] = orig_rgb[y_face, xl_e:xr_e + 1, 1][eroded_f]
                    b[y_face, xl_e:xr_e + 1][eroded_f] = orig_rgb[y_face, xl_e:xr_e + 1, 2][eroded_f]

    zero = a == 0.0
    r[zero] = 0.0
    g[zero] = 0.0
    b[zero] = 0.0

    out[:, :, 0] = np.clip(np.round(r), 0, 255).astype(np.uint8)
    out[:, :, 1] = np.clip(np.round(g), 0, 255).astype(np.uint8)
    out[:, :, 2] = np.clip(np.round(b), 0, 255).astype(np.uint8)
    out[:, :, 3] = np.clip(np.round(a), 0, 255).astype(np.uint8)
    return out


def trimap_closed_form_matting(rgba):
    """
    단독/신규 포즈 스프라이트의 RGBA 배열을 받아 내부 코어(dist_in >= 6px)는 alpha=255 및 원본 RGB로 100% 고정 잠금하고,
    외곽 반투명 미확정 경계(Trimap unknown zone, 0 < a < 245)만 PyMatting 다중 해상도 전경 색상 역산(estimate_foreground_ml)으로 정밀 분리 ->
    좌표 하드코딩 없이 흰 의상/눈/치아 내부 구멍 0% 및 외곽 흰끼 0%를 보장한 RGBA 배열 반환
    """
    out = rgba.copy()
    h, w = out.shape[:2]
    scale = max(1.0, w / 1152.0)
    a_u8 = out[:, :, 3]
    ys, xs = np.where(a_u8 > 0)
    if len(xs) == 0:
        return out

    solid_fg = a_u8 >= 220
    dist_in = ndimage.distance_transform_edt(solid_fg)
    locked_interior = dist_in >= (4.0 * scale)

    # 확정 내부 코어 영역은 알파 255로 잠금해 의상·피부·얼굴 내부 침식 원천 차단 (단, 원래 투명 배경 구멍은 제외)
    out[:, :, 3][locked_interior] = 255

    unknown_zone = (out[:, :, 3] > 0) & (out[:, :, 3] < 245) & (~locked_interior)
    if not np.any(unknown_zone):
        return out

    try:
        from pymatting import estimate_foreground_ml
        pad = max(8, int(round(12 * scale)))
        x0, y0 = max(0, int(xs.min()) - pad), max(0, int(ys.min()) - pad)
        x1, y1 = min(w, int(xs.max()) + pad + 1), min(h, int(ys.max()) + pad + 1)

        crop_rgb = out[y0:y1, x0:x1, :3].astype(np.float64) / 255.0
        crop_a = out[y0:y1, x0:x1, 3].astype(np.float64) / 255.0
        fg = np.clip(estimate_foreground_ml(crop_rgb, crop_a, n_small_iterations=6, n_big_iterations=2), 0.0, 1.0)
        fg_u8 = np.clip(np.round(fg * 255.0), 0.0, 255.0).astype(np.uint8)

        sub_unknown = unknown_zone[y0:y1, x0:x1]
        for c in range(3):
            ch = out[y0:y1, x0:x1, c]
            ch[sub_unknown] = np.minimum(ch[sub_unknown], fg_u8[:, :, c][sub_unknown])
            out[y0:y1, x0:x1, c] = ch
    except Exception:
        pass

    out[out[:, :, 3] == 0, :3] = 0
    return out


def is_pose_compatible_with_base(rgba, ref_rgba, min_iou=0.91):
    """
    현재 표정 RGBA와 기준 스프라이트(normal/smile) RGBA의 실루엣 IoU 및 두부·어깨 비율 일치도를 검사해
    동일 포즈 표정 차분(외곽 마스크 100% 재사용 및 얼굴 내부 패치 가능 대상)인지 여부를 반환
    """
    if ref_rgba is None:
        return False
    th, tw = rgba.shape[:2]
    rh, rw = ref_rgba.shape[:2]
    if (rh, rw) != (th, tw):
        r_arr = np.array(Image.fromarray(ref_rgba).resize((tw, th), Image.Resampling.LANCZOS))
    else:
        r_arr = ref_rgba

    cur_m = rgba[:, :, 3] >= 128
    ref_m = r_arr[:, :, 3] >= 128
    inter = int((cur_m & ref_m).sum())
    union = int((cur_m | ref_m).sum())
    if union == 0:
        return False
    iou = inter / float(union)
    if iou < min_iou:
        return False

    passed, _ = validate_proportion_against_ref(rgba, r_arr, max_head_ratio_diff=0.06)
    return passed


def locate_face_skin_bounds(rgba):
    """
    RGBA 배열에서 상단 두부 영역(0.08*h <= y <= 0.31*h) 내 피부 연결 요소(얼굴 본체)를 찾아
    (x_min, y_min, x_max, y_max, cx, cy) 튜플을 반환 -> 피부 영역이 없으면 기본 비율 좌표를 반환
    """
    h, w = rgba.shape[:2]
    r = rgba[:, :, 0].astype(np.float32)
    g = rgba[:, :, 1].astype(np.float32)
    b = rgba[:, :, 2].astype(np.float32)
    a = rgba[:, :, 3] >= 160
    yy, xx = np.mgrid[0:h, 0:w]

    # 턱 밑 목 그림자(y > 0.275*h)를 제외한 순수 얼굴 피부 마스크 추출
    head_zone = (yy >= int(0.09 * h)) & (yy <= int(0.278 * h)) & (xx >= int(0.28 * w)) & (xx <= int(0.72 * w))
    skin = a & head_zone & (r >= 145.0) & (r >= g) & ((r - b) >= 16.0)
    skin_closed = ndimage.binary_fill_holes(ndimage.binary_closing(skin, iterations=2))
    lbl, num = ndimage.label(skin_closed)
    if num == 0:
        bm = measure_body_proportions(rgba)
        cx = bm["head_cx"]
        top_y = bm["top_y"]
        return (int(cx - 0.11 * w), int(top_y + 0.08 * h), int(cx + 0.11 * w), int(top_y + 0.235 * h), cx, top_y + 0.16 * h)

    sizes = ndimage.sum(skin_closed, lbl, range(1, num + 1))
    main_lbl = int(np.argmax(sizes)) + 1
    face_m = (lbl == main_lbl)
    ys, xs = np.where(face_m)
    x0, x1 = int(xs.min()), int(xs.max())
    y0, y1 = int(ys.min()), int(ys.max())
    return (x0, y0, x1, y1, 0.5 * (x0 + x1), 0.5 * (y0 + y1))


def patch_face_onto_base_ref(rgba, ref_rgba):
    """
    동일 포즈의 표정 차분 이미지(rgba)에서 검증된 기본 표정(ref_rgba: smile/normal)의 외곽 알파 마스크·머리카락·정수리·몸통·손가락 사이 여백을 100% 그대로 고정하고,
    얼굴 내부(눈썹·눈·코·입·볼 홍조·땀/눈물) 영역만 실제 얼굴 피부 경계(locate_face_skin_bounds) 기반으로 정밀 추출해 가우시안 페더링 합성 ->
    표정 교체 시 외곽선 떨림, 머리카락/턱 밑 흰 배경 포켓, 정수리 잘림을 원천 0건으로 차단한 RGBA 배열 반환
    """
    if ref_rgba is None:
        return rgba
    th, tw = rgba.shape[:2]
    rh, rw = ref_rgba.shape[:2]
    sx, sy = tw / 1152.0, th / 1536.0
    if (rh, rw) != (th, tw):
        base_arr = np.array(Image.fromarray(ref_rgba).resize((tw, th), Image.Resampling.LANCZOS)).astype(np.float64)
    else:
        base_arr = ref_rgba.astype(np.float64)

    expr_arr = harmonize_style_to_ref(rgba, base_arr.astype(np.uint8)).astype(np.float64)
    base_a = base_arr[:, :, 3]
    base_solid = ndimage.binary_fill_holes(base_a >= 180)
    dist_base_in = ndimage.distance_transform_edt(base_solid)

    fx0, fy0, fx1, fy1, fcx, _ = locate_face_skin_bounds(base_arr.astype(np.uint8))
    fw = max(80.0 * sx, float(fx1 - fx0))
    fh = max(90.0 * sy, float(fy1 - fy0))

    # 눈썹 상단부터 턱선 직전(입·혀·볼 전체 포함)까지 정밀 포괄하는 얼굴 내부 슈퍼타원 마스크
    top_band = max(int(0.08 * th), int(fy0 - 0.18 * fh))
    bot_band = min(int(0.285 * th), int(fy1 - 0.03 * fh))
    face_cy = 0.5 * (top_band + bot_band)
    ry = max(45.0 * sy, 0.52 * (bot_band - top_band))
    rx = max(60.0 * sx, 0.46 * fw)

    yy, xx = np.mgrid[0:th, 0:tw]
    ellipse = (((xx - fcx) / rx) ** 2 + ((yy - face_cy) / ry) ** 2) <= 1.0

    # 외곽 윤곽선에서 최소 10px 이상 안쪽인 두부 내부만 패치 영역으로 허용해 외곽 머리카락/귀/턱선 여백 침범을 100% 차단
    safe_interior = dist_base_in >= (10.0 * sx)
    face_core = ellipse & safe_interior & (expr_arr[:, :, 3] >= 220)

    if int(face_core.sum()) < int(400 * sx * sy):
        return rgba

    feather_w = ndimage.gaussian_filter(face_core.astype(np.float64), sigma=5.0 * sx)
    inner_lock = ndimage.binary_erosion(face_core, iterations=max(2, int(round(3 * sx))))
    feather_w[inner_lock] = 1.0
    feather_w[~safe_interior] = 0.0

    w_3 = feather_w[:, :, None]
    out_rgb = expr_arr[:, :, :3] * w_3 + base_arr[:, :, :3] * (1.0 - w_3)

    res = np.zeros((th, tw, 4), dtype=np.uint8)
    res[:, :, :3] = np.clip(np.round(out_rgb), 0, 255).astype(np.uint8)
    # 알파 채널은 검증된 기준 스프라이트(base_a)를 100% 그대로 사용하여 표정 간 외곽선·여백 불일치를 원천 제거
    res[:, :, 3] = np.clip(np.round(base_a), 0, 255).astype(np.uint8)
    res[res[:, :, 3] == 0, :3] = 0
    return res


def clean_sprite(rgba, ref_rgba=None, extra_gap_rois=None, restore_holes=True, use_pymatting=False, restore_crown=True, harmonize_style=False, restore_outer_hair=False, style_ref_rgba=None, patch_face_from_base=False, character_id=None, is_fresh_cutout=False):
    """
    RGBA 배열을 받아:
    1. 캐릭터별 원샷(One-Shot) 무결점 SOTA 배경 정리(sota_clean_one_shot) 및 상단 정수리 잘림 복원 수행.
    2. use_pymatting=True(또는 단독/신규 포즈 정밀 매팅) 시 내부 코어 잠금 Trimap + PyMatting 전경 역산(trimap_closed_form_matting) 수행.
    3. patch_face_from_base=True이고 기준 스프라이트(normal/smile)와 포즈가 호환되면 기준 외곽 마스크·몸통을 100% 고정하고 얼굴 내부만 패치(patch_face_onto_base_ref).
    4. 포즈가 다른 표정인 경우 기준 스프라이트 기반 외곽 머리카락 복원 및 그림체/색감 정합을 수행해 정리된 RGBA 배열 반환.
    """
    out = sota_clean_one_shot(rgba, character_id=character_id, is_fresh_cutout=is_fresh_cutout)
    if restore_crown:
        out, _ = restore_crown_if_needed(out)
    if use_pymatting:
        out = trimap_closed_form_matting(out)
    target_ref = style_ref_rgba if style_ref_rgba is not None else ref_rgba
    if patch_face_from_base and target_ref is not None and is_pose_compatible_with_base(out, target_ref):
        return patch_face_onto_base_ref(out, target_ref)
    if restore_outer_hair and target_ref is not None:
        out = restore_outer_hair_from_ref(out, target_ref)
    if harmonize_style and target_ref is not None:
        out = harmonize_style_to_ref(out, target_ref)
    return out


def process_sprite_file(input_path, output_path, use_rembg=True, use_sota_ensemble=True, use_pymatting=False, ref_path=None, verify_sheet_path=None, harmonize_style=False, restore_outer_hair=False, patch_face_from_base=False, character_id=None):
    """
    입력 이미지 경로와 출력 경로를 받아 캐릭터별 SOTA 추론 및 원샷 무결점 배경 정리(sota_clean_one_shot)·Trimap 매팅·베이스 마스크 고정 얼굴 패치·정수리 복원을 순서대로 수행하고 기준 스프라이트 대비 신체비율 검수 시트를 생성 -> 원본 해상도(width x height) 보존 및 용량 최적화(optimize=True, compress_level=9)로 저장
    """
    if character_id is None:
        character_id = detect_character_id(path_str=output_path or input_path)
    im = Image.open(input_path)
    if use_rembg:
        rgb_im = im.convert("RGB")
        alpha = predict_sota_alpha(rgb_im)
        rgba = np.dstack([np.array(rgb_im), alpha])
    else:
        rgba = np.array(im.convert("RGBA"))

    prop_ref_rgba = resolve_default_ref_rgba(output_path or input_path, explicit_ref_path=ref_path)
    rgba = clean_sprite(
        rgba,
        restore_holes=True,
        use_pymatting=use_pymatting,
        restore_crown=True,
        harmonize_style=harmonize_style,
        restore_outer_hair=restore_outer_hair,
        style_ref_rgba=prop_ref_rgba,
        patch_face_from_base=patch_face_from_base,
        character_id=character_id,
        is_fresh_cutout=use_rembg,
    )
    Image.fromarray(rgba).save(output_path, format="PNG", optimize=True, compress_level=9)
    if verify_sheet_path:
        generate_verification_sheet(rgba, verify_sheet_path, ref_rgba=prop_ref_rgba)
    if prop_ref_rgba is not None:
        passed, report = validate_proportion_against_ref(rgba, prop_ref_rgba)
        if not passed:
            print(f"[WARN] Proportion mismatch vs reference: head_scale_ratio={report['head_scale_ratio']:.3f} (cur={report['cur']['head_w_ratio']:.3f}, ref={report['ref']['head_w_ratio']:.3f})")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Clean character sprite background using SOTA pipeline, Trimap matting, and Base-Mask Face Patching")
    parser.add_argument("input", help="Input image file path")
    parser.add_argument("output", help="Output PNG file path")
    parser.add_argument("--no-rembg", action="store_true", help="Run sota_clean_one_shot on existing alpha without re-running rembg (auto-reruns if hidden RGB mismatch is detected)")
    parser.add_argument("--sota", action="store_true", help="Use SOTA alpha prediction and matting")
    parser.add_argument("--trimap-matting", action="store_true", help="Lock solid interior (alpha=255) and apply PyMatting multi-level foreground estimation on unknown boundary zone")
    parser.add_argument("--ref", default=None, help="Reference base sprite (smile/01/sprite.png) for proportion verification and base-mask face patching")
    parser.add_argument("--patch-face", action="store_true", help="Reuse 100%% of verified base sprite's outer mask/hair/body and patch only the inner facial expression when pose matches")
    parser.add_argument("--harmonize-style", action="store_true", help="Harmonize hair/uniform tone, linework darkness, and green chroma residue to match reference sprite without geometric warping")
    parser.add_argument("--restore-outer-hair", action="store_true", help="Restore over-eroded outer hair strands from reference sprite for matching base head poses")
    parser.add_argument("--verify-sheet", default=None, help="Optional output path for dual-background (#181824 + #FF00FF) verification sheet")
    args = parser.parse_args()
    process_sprite_file(
        args.input,
        args.output,
        use_rembg=not args.no_rembg,
        use_sota_ensemble=True,
        use_pymatting=args.trimap_matting or args.sota,
        ref_path=args.ref,
        verify_sheet_path=args.verify_sheet,
        harmonize_style=args.harmonize_style,
        restore_outer_hair=args.restore_outer_hair,
        patch_face_from_base=args.patch_face,
    )
