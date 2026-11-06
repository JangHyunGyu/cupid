import os, sys, argparse, pathlib
import numpy as np
from PIL import Image
from scipy import ndimage


# 오픈소스 배경 제거 세션(bria-rmbg, birefnet-general, isnet-anime 등) 캐시
_SESSION = None
_SESSIONS = {}
_BRIA_ORT_SESS = None
_BRIA_INP_NAME = None


def get_rembg_session(model_name="isnet-anime"):
    """
    모델 이름을 받아 rembg 추론 세션을 반환 -> 이미 로드된 세션이 있으면 캐시에서 재사용 -> 세션 초기화 실패 시 예외 발생
    """
    global _SESSION, _SESSIONS
    if model_name in _SESSIONS:
        return _SESSIONS[model_name]
    from rembg import new_session
    sess = new_session(model_name)
    _SESSIONS[model_name] = sess
    if model_name == "isnet-anime" or _SESSION is None:
        _SESSION = sess
    return sess


def get_bria_ort_session():
    """
    로컬 bria-rmbg.onnx ONNX Runtime 세션을 초기화해 캐시에서 반환 -> 모델 파일이 없으면 None 반환
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
    RGB 이미지를 받아 Bria-RMBG(우선) 또는 BiRefNet + ISNet-Anime 코어 보호 앙상블로 알파 마스크를 추론 -> 2차원 uint8 알파 배열 반환 -> 추론 실패 시 기본 모델로 폴백
    """
    w, h = rgb_im.size
    sx = w / 1152.0

    bria_sess, bria_inp = get_bria_ort_session()
    if bria_sess is not None:
        import cv2
        comp = np.array(rgb_im.convert("RGB"))
        img = cv2.resize(comp, (1024, 1024)).astype(np.float32) / 255.0
        img = (img - np.array([0.485, 0.456, 0.406], dtype=np.float32)) / np.array([0.229, 0.224, 0.225], dtype=np.float32)
        pred = bria_sess.run(None, {bria_inp: img.transpose(2, 0, 1)[None]})[0].squeeze()
        return np.clip(np.round(cv2.resize(pred, (w, h)) * 255.0), 0, 255).astype(np.uint8)

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


def restore_interior_erosion(rgba, min_hole_alpha=12, max_hole_size_norm=7500, protect_rois=None):
    """
    RGBA 배열과 보호 영역 좌표를 받아 캐릭터 중심 척추 영역(머리띠·안경·눈동자·카라·넥타이·명찰·몸통)의 닫힌 홀과 반투명 내부 침식 구멍을 복원 -> 복원된 RGBA 배열 반환
    """
    out = rgba.copy()
    h, w = out.shape[:2]
    scale_area = (w * h) / (1152.0 * 1536.0)

    r = out[:, :, 0].astype(np.float32)
    g = out[:, :, 1].astype(np.float32)
    b = out[:, :, 2].astype(np.float32)
    a = out[:, :, 3].astype(np.float32)

    cmin = np.minimum(np.minimum(r, g), b)
    cmax = np.maximum(np.maximum(r, g), b)
    chroma = cmax - cmin

    yy, xx = np.mgrid[0:h, 0:w]
    # 1) 캐릭터 중심 척추 영역(x=0.33..0.67, y=0.03..0.76) 내부에 완전히 포함된 닫힌 홀(흰 머리띠·흰 셔츠 카라·안경알·눈동자·문양)만 100% 불투명 복원
    #    (팔을 들어 올린 포즈에서 x=0.33 또는 x=0.67 경계를 가로지르는 겨드랑이/팔 사이 실제 배경 공간은 절대 채우지 않음)
    solid_spine = a >= 180
    filled_spine = ndimage.binary_fill_holes(solid_spine)
    spine_holes = filled_spine & (a < 250)
    s_lbl, _ = ndimage.label(spine_holes)
    for s_idx, s_sl in enumerate(ndimage.find_objects(s_lbl), 1):
        if s_sl is None:
            continue
        sy0, sy1 = s_sl[0].start, s_sl[0].stop
        sx0, sx1 = s_sl[1].start, s_sl[1].stop
        if sx0 >= int(0.33 * w) and sx1 <= int(0.67 * w) and sy0 >= int(0.03 * h) and sy1 <= int(0.76 * h):
            a[s_sl][s_lbl[s_sl] == s_idx] = 255.0

    # 2) 불투명 전경(a >= 235)으로 둘러싸인 내부 닫힌 저알파 구멍 탐지
    solid = a >= 235
    filled = ndimage.binary_fill_holes(solid)
    interior_holes = filled & (~solid)

    if protect_rois:
        for (nx0, ny0, nx1, ny1) in protect_rois:
            x0, y0 = int(nx0 * w), int(ny0 * h)
            x1, y1 = int(nx1 * w), int(ny1 * h)
            interior_holes[y0:y1, x0:x1] = False

    lbl, num = ndimage.label(interior_holes)
    if num == 0:
        out[:, :, 3] = np.clip(np.round(a), 0, 255).astype(np.uint8)
        return out

    max_area = int(round(max_hole_size_norm * scale_area))
    objs = ndimage.find_objects(lbl)
    for idx, sl in enumerate(objs, 1):
        if sl is None:
            continue
        sub_comp = (lbl[sl] == idx)
        area = int(sub_comp.sum())
        if area == 0 or area > max_area:
            continue
        sub_a = a[sl]
        comp_a = sub_a[sub_comp]
        semi_ratio = float((comp_a >= min_hole_alpha).mean())
        if semi_ratio < 0.55:
            continue
        mean_cmin = float(cmin[sl][sub_comp].mean())
        mean_chroma = float(chroma[sl][sub_comp].mean())
        if mean_cmin >= 232.0 and mean_chroma <= 14.0:
            continue
        restore_px = sub_comp & (sub_a >= min_hole_alpha)
        sub_a[restore_px] = 255.0

    out[:, :, 3] = np.clip(np.round(a), 0, 255).astype(np.uint8)
    return out


def defringe_with_pymatting(rgba, edge_width_norm=4.0):
    """
    RGBA 배열과 테두리 폭을 받아 PyMatting 다중 해상도 전경 색상 역산(estimate_foreground_ml)으로 반투명 외곽선의 흰 배경 번짐을 제거 -> 서브픽셀 알파 경계에 순수 전경 RGB를 합성한 RGBA 배열 반환 -> PyMatting 미설치 시 거리 변환 방식으로 자동 폴백
    """
    out = rgba.copy()
    h, w = out.shape[:2]
    scale = max(1.0, w / 1152.0)

    a_u8 = out[:, :, 3]
    semi = (a_u8 > 0) & (a_u8 < 250)
    if not np.any(semi):
        return out

    try:
        from pymatting import estimate_foreground_ml
    except Exception:
        return out

    ys, xs = np.where(a_u8 > 0)
    if len(xs) == 0:
        return out
    pad = max(8, int(round(12 * scale)))
    x0, y0 = max(0, int(xs.min()) - pad), max(0, int(ys.min()) - pad)
    x1, y1 = min(w, int(xs.max()) + pad + 1), min(h, int(ys.max()) + pad + 1)

    crop_rgb = out[y0:y1, x0:x1, :3].astype(np.float64) / 255.0
    crop_a = out[y0:y1, x0:x1, 3].astype(np.float64) / 255.0

    fg = np.clip(estimate_foreground_ml(crop_rgb, crop_a, n_small_iterations=6, n_big_iterations=2), 0.0, 1.0)
    fg_u8 = np.clip(np.round(fg * 255.0), 0.0, 255.0).astype(np.uint8)

    edge_zone = (out[y0:y1, x0:x1, 3] > 0) & (out[y0:y1, x0:x1, 3] < 245)
    for c in range(3):
        ch = out[y0:y1, x0:x1, c]
        ch[edge_zone] = np.minimum(ch[edge_zone], fg_u8[:, :, c][edge_zone])
        out[y0:y1, x0:x1, c] = ch

    return out


def clean_sprite_defringe(rgba, ref_rgba=None, extra_gap_rois=None, use_pymatting=False):
    """
    알파 채널이 포함된 RGBA 배열을 받아 외곽 흰끼(할로)와 고립된 배경 포켓을 제거 -> 거리 변환과 다중 해상도 전경 역산으로 내부 코어 색상을 참조해 반투명 테두리 색상을 복원 -> 정리된 RGBA 배열 반환
    """
    out = rgba.copy()
    h, w = out.shape[:2]
    scale = max(1, int(round(w / 1152.0)))

    r = out[:, :, 0].astype(np.float32)
    g = out[:, :, 1].astype(np.float32)
    b = out[:, :, 2].astype(np.float32)
    a = out[:, :, 3].astype(np.float32)

    cmin = np.minimum(np.minimum(r, g), b)
    cmax = np.maximum(np.maximum(r, g), b)
    chroma = cmax - cmin
    lum = (r + g + b) / 3.0

    if ref_rgba is not None:
        if ref_rgba.shape[:2] != (h, w):
            ref_pil = Image.fromarray(ref_rgba).resize((w, h), Image.Resampling.BILINEAR)
            ref_arr = np.array(ref_pil)
        else:
            ref_arr = ref_rgba
        ref_a = ref_arr[:, :, 3]
        ref_trans = ref_a < 24
        ref_trans_core = ndimage.binary_erosion(ref_trans, iterations=max(1, scale))
        hole_kill = ref_trans_core & (cmin >= 175) & (chroma <= 38)
        a[hole_kill] = 0.0

    if extra_gap_rois:
        gy, gx = np.gradient(lum)
        grad = np.hypot(gx, gy)
        for (nx0, ny0, nx1, ny1, rgb_min, ch_max) in extra_gap_rois:
            x0, y0 = int(nx0 * w), int(ny0 * h)
            x1, y1 = int(nx1 * w), int(ny1 * h)
            roi = np.zeros((h, w), dtype=bool)
            roi[y0:y1, x0:x1] = True
            seed = roi & (((a > 0) & (cmin >= rgb_min) & (chroma <= ch_max) & (grad <= 12.0)) | (a < 16))
            grow = roi & (cmin >= rgb_min - 25) & (chroma <= ch_max + 12) & (grad <= 24.0)
            pocket = ndimage.binary_propagation(seed, mask=grow) & (a > 0)
            a[pocket] = 0.0

    for thresh in (21, 10, 1):
        vis = a >= thresh
        lbl, num = ndimage.label(vis)
        if num > 1:
            sizes = ndimage.sum(vis, lbl, range(1, num + 1))
            main_lbl = int(np.argmax(sizes)) + 1
            main_mask = (lbl == main_lbl)
            a[vis & (~main_mask)] = 0.0

    fg = a > 0
    dist_in = ndimage.distance_transform_edt(fg)
    edge_radius = 4.5 * scale

    core_mask = (dist_in > edge_radius) & (a >= 230) & (~((cmin >= 220) & (chroma <= 20) & (a < 250)))
    if not np.any(core_mask):
        core_mask = dist_in > 2.0

    _, nearest_idx = ndimage.distance_transform_edt(~core_mask, return_indices=True)
    ref_r = r[nearest_idx[0], nearest_idx[1]]
    ref_g = g[nearest_idx[0], nearest_idx[1]]
    ref_b = b[nearest_idx[0], nearest_idx[1]]
    ref_cmin = np.minimum(np.minimum(ref_r, ref_g), ref_b)
    ref_cmax = np.maximum(np.maximum(ref_r, ref_g), ref_b)
    ref_chroma = ref_cmax - ref_cmin

    in_edge_zone = fg & ((dist_in <= edge_radius) | (a < 190))
    non_white_interior = (ref_cmin < 215) | (ref_chroma > 22)
    is_white_halo = in_edge_zone & non_white_interior & (cmin > np.maximum(ref_cmin + 12.0, 175.0)) & (chroma <= 32.0)
    is_semi_white_halo = in_edge_zone & ((a < 190) | ((dist_in <= edge_radius) & (a < 225))) & (cmin >= 198.0) & (chroma <= 26.0)
    is_outer_rim_white = fg & (dist_in <= 2.2 * scale) & (cmin >= 232.0) & (chroma <= 16.0)

    halo_mask = is_white_halo | is_semi_white_halo | is_outer_rim_white

    denom = np.maximum(255.0 - np.minimum(ref_cmin, 185.0), 40.0)
    pigment_frac = np.clip((255.0 - cmin) / denom, 0.0, 1.0)
    ramp = np.clip((pigment_frac - 0.22) / (0.75 - 0.22), 0.0, 1.0)

    new_a = a.copy()
    new_a[halo_mask] = a[halo_mask] * ramp[halo_mask]
    new_a[halo_mask & (new_a < 24.0)] = 0.0

    alpha_eff = np.clip(new_a / 255.0, 0.15, 1.0)
    decontam_r = np.clip((r - (1.0 - alpha_eff) * 255.0) / alpha_eff, 0.0, 255.0)
    decontam_g = np.clip((g - (1.0 - alpha_eff) * 255.0) / alpha_eff, 0.0, 255.0)
    decontam_b = np.clip((b - (1.0 - alpha_eff) * 255.0) / alpha_eff, 0.0, 255.0)

    blend_mask = halo_mask & (new_a > 0)
    r[blend_mask] = 0.70 * ref_r[blend_mask] + 0.30 * decontam_r[blend_mask]
    g[blend_mask] = 0.70 * ref_g[blend_mask] + 0.30 * decontam_g[blend_mask]
    b[blend_mask] = 0.70 * ref_b[blend_mask] + 0.30 * decontam_b[blend_mask]

    vis2 = new_a > 16
    lbl2, num2 = ndimage.label(vis2)
    if num2 > 0:
        sizes2 = ndimage.sum(vis2, lbl2, range(1, num2 + 1))
        main_lbl2 = int(np.argmax(sizes2)) + 1
        main_mask2 = (lbl2 == main_lbl2)
        new_a[vis2 & (~main_mask2)] = 0.0
        adj2 = ndimage.binary_dilation(main_mask2, iterations=1)
        new_a[(new_a > 0) & (~adj2)] = 0.0

    zero_a = (new_a < 1.0)
    new_a[zero_a] = 0.0
    r[zero_a] = 0.0
    g[zero_a] = 0.0
    b[zero_a] = 0.0

    out[:, :, 0] = np.clip(np.round(r), 0, 255).astype(np.uint8)
    out[:, :, 1] = np.clip(np.round(g), 0, 255).astype(np.uint8)
    out[:, :, 2] = np.clip(np.round(b), 0, 255).astype(np.uint8)
    out[:, :, 3] = np.clip(np.round(new_a), 0, 255).astype(np.uint8)

    if use_pymatting:
        out = defringe_with_pymatting(out)
    return out


def remove_trapped_hair_pockets(rgba, y_limit_ratio=0.78, protect_white_garments=True):
    """
    RGBA 배열을 받아 외곽 머리카락 루프 사이에 갇힌 순백색(#FFFFFF) 배경 포켓과 교차하는 가는 머리카락 테두리 흰끼를 연속 알파·색상 역산으로 제거 -> 피부(18px 확장으로 손목 커프스 외곽선 통과 보호)·몸통·카라·머리띠·흰 가운은 완벽 보호 -> 정리된 RGBA 배열 반환
    """
    out = rgba.copy()
    h, w = out.shape[:2]
    yy, xx = np.mgrid[0:h, 0:w]

    r = out[:, :, 0].astype(np.float32)
    g = out[:, :, 1].astype(np.float32)
    b = out[:, :, 2].astype(np.float32)
    a = out[:, :, 3].astype(np.float32)

    cmin = np.minimum(np.minimum(r, g), b)
    cmax = np.maximum(np.maximum(r, g), b)
    sat = cmax - cmin
    lum = 0.299 * r + 0.587 * g + 0.114 * b

    # 피부에서 18px 확장(검은 선화를 넘어 흰 손목 커프스·셔츠 목깃까지 보호) 및 중앙 몸통·머리띠 영역 보호
    warm_skin = (a >= 150) & ((r - b) >= 20) & (lum >= 110)
    near_skin = ndimage.binary_dilation(warm_skin, iterations=max(14, int(round(18 * w / 1152.0))))
    central_body = (xx >= int(0.32 * w)) & (xx <= int(0.68 * w)) & (yy >= int(0.02 * h)) & (yy <= int(0.92 * h))

    outer_hair_zone = (~central_body) & (~near_skin) & (yy < int(y_limit_ratio * h))
    cand = outer_hair_zone & (a > 0) & (cmin >= 200) & (sat <= 18) & ((r - b) <= 14)
    lbl, num = ndimage.label(cand)
    objs = ndimage.find_objects(lbl)
    pocket_mask = np.zeros((h, w), dtype=bool)
    max_pocket_area = int(4500 * (w / 1152.0) ** 2)

    for idx, sl in enumerate(objs, 1):
        if sl is None:
            continue
        y0, y1 = max(0, sl[0].start - 4), min(h, sl[0].stop + 4)
        x0, x1 = max(0, sl[1].start - 4), min(w, sl[1].stop + 4)
        sub_c = (lbl[y0:y1, x0:x1] == idx)
        area = int(sub_c.sum())
        if area < 8 or area > max_pocket_area:
            continue
        sub_cmin = cmin[y0:y1, x0:x1][sub_c]
        sub_sat = sat[y0:y1, x0:x1][sub_c]
        # 음영이 들어간 흰 커프스·가운(RGB 215..245)과 구별되도록 순백색(#FFFFFF, cmin >= 249) 코어 비율이 35% 이상인 실제 배경 포켓만 제거
        pct_pure = float(((sub_cmin >= 249) & (sub_sat <= 6)).mean())
        if float(sub_cmin.max()) < 250.0 or pct_pure < 0.35:
            continue
        sub_a = a[y0:y1, x0:x1]
        border = ndimage.binary_dilation(sub_c, iterations=4) & (~sub_c) & (sub_a >= 150)
        if border.sum() == 0:
            pocket_mask[y0:y1, x0:x1] |= sub_c
            continue
        sub_lum = lum[y0:y1, x0:x1]
        dark_ratio = float((sub_lum[border] < 85).mean())
        if dark_ratio >= 0.70:
            pocket_mask[y0:y1, x0:x1] |= sub_c

    if pocket_mask.any():
        a[pocket_mask] = 0.0
        rim = ndimage.binary_dilation(pocket_mask, iterations=3) & outer_hair_zone & (sat <= 28) & ((r - b) <= 18)
        unmix_a = np.clip((215.0 - cmin) / (215.0 - 45.0), 0.0, 1.0) * 255.0
        a[rim] = np.minimum(a[rim], unmix_a[rim])

    # 외곽 어두운 머리카락 구멍 경계의 회백색 안티앨리어싱 잔여물을 연속 알파·전경 색상 역산으로 매끄럽게 제거
    trans = a < 25
    near_trans = ndimage.binary_dilation(trans, iterations=4) & (a > 0)
    dark_hair = (a >= 160) & (lum < 80) & (sat <= 40)
    near_dark = ndimage.binary_dilation(dark_hair, iterations=4)
    hair_crust = outer_hair_zone & near_trans & near_dark & (cmin >= 85) & (sat <= 28) & ((r - b) <= 18)
    if hair_crust.any():
        unmix_a = np.clip((210.0 - cmin) / (210.0 - 45.0), 0.0, 1.0) * 255.0
        a[hair_crust] = np.minimum(a[hair_crust], unmix_a[hair_crust])
        semi = hair_crust & (a > 0) & (a < 245)
        alpha_norm = np.maximum(a[semi] / 255.0, 0.12)
        for ch_idx in range(3):
            ch_arr = out[:, :, ch_idx].astype(np.float32)
            ch_unmix = np.clip((ch_arr[semi] - (1.0 - alpha_norm) * 250.0) / alpha_norm, 12.0, 55.0)
            ch_arr[semi] = np.minimum(ch_arr[semi], ch_unmix)
            out[:, :, ch_idx] = np.clip(np.round(ch_arr), 0, 255).astype(np.uint8)

    a[a < 16] = 0.0
    out[:, :, 3] = np.clip(np.round(a), 0, 255).astype(np.uint8)
    out[out[:, :, 3] == 0, :3] = 0
    return out


def restore_crown_if_needed(rgba):
    """
    상단 경계(y = 0)에 정수리 머리카락이 잘린 스프라이트를 하단 고정 아핀 변환 + 포물선 정수리 돔 아크 합성으로 자연스럽게 복원 -> (복원된 RGBA 배열, 변경 여부) 반환
    """
    import cv2
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
    sy = (h - dy) / float(h)
    sx = (h - dy * 0.45) / float(h)
    tx = (1.0 - sx) * (w * 0.5)
    ty = float(dy)

    M = np.array([[sx, 0.0, tx], [0.0, sy, ty]], dtype=np.float32)
    rgb_f = rgba[:, :, :3].astype(np.float32)
    a_f = rgba[:, :, 3:4].astype(np.float32) / 255.0
    premult = np.dstack([rgb_f * a_f, a_f * 255.0])
    warped = cv2.warpAffine(premult, M, (w, h), flags=cv2.INTER_LANCZOS4, borderMode=cv2.BORDER_CONSTANT, borderValue=(0, 0, 0, 0))
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


def clean_sprite(rgba, ref_rgba=None, extra_gap_rois=None, restore_holes=True, use_pymatting=False, restore_crown=True):
    """
    RGBA 배열을 받아 내부 반투명 침식 및 척추 홀 복원 -> 외곽 머리카락 루프 포켓 및 가는 머리카락 흰끼 역산 제거 -> 외곽선 흰끼 및 부유 노이즈 섬 제거 -> 상단 정수리 잘림 복원을 순서대로 수행해 정리된 RGBA 배열 반환
    """
    out = rgba.copy()
    if restore_holes:
        out = restore_interior_erosion(out)
    out = remove_trapped_hair_pockets(out)
    out = clean_sprite_defringe(out, ref_rgba=ref_rgba, extra_gap_rois=extra_gap_rois, use_pymatting=use_pymatting)
    if restore_crown:
        out, _ = restore_crown_if_needed(out)
    return out


def process_sprite_file(input_path, output_path, use_rembg=True, use_sota_ensemble=True, use_pymatting=False):
    """
    입력 이미지 경로와 출력 경로를 받아 배경 제거·내부 침식 복원·머리카락 포켓 제거·외곽 디프린징·정수리 복원을 순서대로 수행 -> 원본 해상도(width x height) 보존 및 용량 최적화(optimize=True, compress_level=9)로 저장
    """
    im = Image.open(input_path)
    if use_rembg:
        rgb_im = im.convert("RGB")
        if use_sota_ensemble:
            alpha = predict_sota_alpha(rgb_im)
            rgba = np.dstack([np.array(rgb_im), alpha])
        else:
            from rembg import remove
            session = get_rembg_session("isnet-anime")
            rgba_im = remove(rgb_im, session=session)
            rgba = np.array(rgba_im)
    else:
        rgba = np.array(im.convert("RGBA"))

    rgba = clean_sprite(rgba, restore_holes=True, use_pymatting=use_pymatting, restore_crown=True)
    Image.fromarray(rgba).save(output_path, format="PNG", optimize=True, compress_level=9)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Clean character sprite background, internal erosion, hair pockets, white halo, and top crown")
    parser.add_argument("input", help="Input image file path")
    parser.add_argument("output", help="Output PNG file path")
    parser.add_argument("--no-rembg", action="store_true", help="Run pocket removal and defringing on existing alpha without re-running rembg")
    parser.add_argument("--sota", action="store_true", help="Use Bria-RMBG / BiRefNet + ISNet-Anime core protection ensemble")
    args = parser.parse_args()
    process_sprite_file(args.input, args.output, use_rembg=not args.no_rembg, use_sota_ensemble=True, use_pymatting=False)
