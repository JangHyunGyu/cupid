import os, sys, argparse
import numpy as np
from PIL import Image
from scipy import ndimage


# 오픈소스 배경 제거 세션(isnet-anime, birefnet-general, bria-rmbg 등) 캐시
_SESSION = None
_SESSIONS = {}


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


def predict_sota_alpha(rgb_im, primary_model="birefnet-general", core_model="isnet-anime"):
    """
    RGB 이미지를 받아 고해상도 경계 모델(birefnet-general)과 애니메이션 코어 보호 모델(isnet-anime)을 결합한 알파 마스크를 추론 -> 의상·피부 내부 코어는 보존하고 머리카락 끝단은 정밀 마스크로 합성해 2차원 uint8 알파 배열 반환 -> 추론 실패 시 기본 모델로 폴백
    """
    from rembg import remove
    w, h = rgb_im.size
    sx = w / 1152.0

    sess_core = get_rembg_session(core_model)
    core_rgba = np.array(remove(rgb_im, session=sess_core))
    core_a = core_rgba[:, :, 3].astype(np.float32)

    try:
        sess_hr = get_rembg_session(primary_model)
        hr_rgba = np.array(remove(rgb_im, session=sess_hr))
        hr_a = hr_rgba[:, :, 3].astype(np.float32)
    except Exception:
        return core_rgba[:, :, 3]

    # 애니메이션 특화 모델의 내부 불투명 코어(침식된 중심부)를 보존해 흰 셔츠·가운·안경·눈동자 내부 구멍 발생 차단
    erode_iter = max(3, int(round(5 * sx)))
    solid_core = ndimage.binary_erosion(core_a >= 210, iterations=erode_iter)
    combined_a = np.where(solid_core, np.maximum(hr_a, core_a), hr_a)
    return np.clip(np.round(combined_a), 0, 255).astype(np.uint8)


def restore_interior_erosion(rgba, min_hole_alpha=12, max_hole_size_norm=7500, protect_rois=None):
    """
    RGBA 배열과 보호 영역 좌표를 받아 배경 제거 모델이 캐릭터 내부(치마·재킷·목·머리카락 안쪽)를 잘못 깎아 만든 반투명 침식 구멍을 복원 -> 외곽 배경과 분리된 내부 닫힌 홀 중 RGB 색상이 온전한 반투명 영역의 알파를 불투명으로 복구 -> 복원된 RGBA 배열 반환 -> 입력 차원 오류 시 예외 발생
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

    # 불투명 전경(a >= 235)으로 둘러싸인 내부 닫힌 저알파 구멍 탐지
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
        return out

    max_area = int(round(max_hole_size_norm * scale_area))
    for idx in range(1, num + 1):
        comp = (lbl == idx)
        area = int(comp.sum())
        if area == 0 or area > max_area:
            continue
        comp_a = a[comp]
        # 이미 완전 투명(a == 0)으로 뚫린 팔-몸통 사이 실제 배경 구멍은 건드리지 않고, 반투명하게 침식된 내부 손상만 복원
        semi_ratio = float((comp_a >= min_hole_alpha).mean())
        if semi_ratio < 0.55:
            continue
        # 순백색 배경 잔여물(cmin >= 235, chroma <= 12)이 아닌 실제 의상/피부/머리카락 채색 영역인지 확인
        mean_cmin = float(cmin[comp].mean())
        mean_chroma = float(chroma[comp].mean())
        if mean_cmin >= 232.0 and mean_chroma <= 14.0:
            continue
        restore_px = comp & (a >= min_hole_alpha)
        a[restore_px] = 255.0

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

    # 전체 고해상도 이미지 대신 캐릭터 바운딩 박스 내부만 잘라 전경 역산 속도와 메모리 효율 확보
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

    # 반투명 테두리 구간(0 < a < 245)에만 역산된 순수 전경 색상을 적용하고 내부 불투명 원본 픽셀은 그대로 보존
    edge_zone = (out[y0:y1, x0:x1, 3] > 0) & (out[y0:y1, x0:x1, 3] < 245)
    for c in range(3):
        ch = out[y0:y1, x0:x1, c]
        ch[edge_zone] = np.minimum(ch[edge_zone], fg_u8[:, :, c][edge_zone])
        out[y0:y1, x0:x1, c] = ch

    return out


def clean_sprite_defringe(rgba, ref_rgba=None, extra_gap_rois=None, use_pymatting=False):
    """
    알파 채널이 포함된 RGBA 배열을 받아 외곽 흰끼(할로)와 고립된 배경 포켓을 제거 -> 거리 변환과 다중 해상도 전경 역산으로 내부 코어 색상을 참조해 반투명 테두리 색상을 복원 -> 정리된 RGBA 배열 반환 -> 입력 배열 차원이 맞지 않으면 예외 발생
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

    # 동일 포즈의 클린 레퍼런스가 주어지면 레퍼런스에서 투명한 내부 구멍 영역의 흰 배경 잔여물을 동기화 제거
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

    # 추가 관심 영역(ROI) 내부의 평탄한 흰 배경 포켓 제거
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

    # 가장 큰 캐릭터 본체 연결 요소만 남기고 외곽에 떨어진 미세 노이즈 섬 제거 (a > 20, a >= 10, a >= 1 단계별 클리닝)
    for thresh in (21, 10, 1):
        vis = a >= thresh
        lbl, num = ndimage.label(vis)
        if num > 1:
            sizes = ndimage.sum(vis, lbl, range(1, num + 1))
            main_lbl = int(np.argmax(sizes)) + 1
            main_mask = (lbl == main_lbl)
            a[vis & (~main_mask)] = 0.0

    # 거리 변환(EDT)으로 캐릭터 외곽선에서 안쪽 코어 픽셀까지의 거리를 계산해 흰색 할로 색상 복원
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


def remove_trapped_hair_pockets(rgba, y_limit_ratio=0.45):
    """
    RGBA 배열과 상단 검사 비율을 받아 머리카락 컬 사이에 갇힌 흰/회색 배경 포켓을 연결 요소 단위로 제거 -> 얼굴·피부·흰 셔츠와 맞닿은 영역은 보호 -> 정리된 RGBA 배열 반환 -> 입력 배열 차원이 맞지 않으면 예외 발생
    """
    out = rgba.copy()
    h, w = out.shape[:2]
    yy, xx = np.mgrid[0:h, 0:w]
    sx = w / 1152.0
    sy = h / 1536.0
    nx = xx / sx
    ny = yy / sy

    r = out[:, :, 0].astype(np.float32)
    g = out[:, :, 1].astype(np.float32)
    b = out[:, :, 2].astype(np.float32)
    a = out[:, :, 3].astype(np.float32)

    cmin = np.minimum(np.minimum(r, g), b)
    cmax = np.maximum(np.maximum(r, g), b)
    sat = cmax - cmin
    lum = 0.299 * r + 0.587 * g + 0.114 * b

    # 1) 외곽 배경(테두리와 연결된 순백색 영역) 플러드필 제거로 rembg가 남긴 테두리 흰 배경 조각 정리
    is_pure_bg = (cmin >= 248) & (sat <= 8)
    # 은발/연보라 머리카락 내부 하이라이트가 외곽 배경과 이어지지 않도록 상단 코어 보호 (얇은 잔머리 다리는 열림 연산으로 끊어 배경만 통과)
    head_open = ndimage.binary_opening(a > 200, iterations=max(2, int(round(2 * sx))))
    head_interior = ndimage.binary_erosion(head_open, iterations=max(2, int(round(2 * sx)))) & (ny < 390) & (nx > 420) & (nx < 660)
    lbl_bg, num_bg = ndimage.label(is_pure_bg & (~head_interior))
    border_labels = set(lbl_bg[0, :]) | set(lbl_bg[-1, :]) | set(lbl_bg[:, 0]) | set(lbl_bg[:, -1])
    border_labels.discard(0)
    if border_labels:
        ext_bg = np.isin(lbl_bg, list(border_labels))
        out[ext_bg, 3] = 0
        out[ext_bg, :3] = 0
        a = out[:, :, 3].astype(np.float32)

    # 2) 눈동자 하이라이트·치아·얼굴 중심부와 은발 정수리 영역은 포켓 후보에서 제외
    face_box = (nx >= 415) & (nx <= 705) & (ny >= 150) & (ny <= 425)
    crown_box = (nx >= 340) & (nx <= 810) & (ny >= 15) & (ny <= 245)
    upper_hair_zone = (ny <= 1536.0 * y_limit_ratio) & (~face_box) & (~crown_box)

    cand = upper_hair_zone & (a > 0) & (cmin >= 185) & (sat <= 26) & ((r - b) <= 16)
    lbl, num = ndimage.label(cand)
    pocket_mask = np.zeros((h, w), dtype=bool)

    for idx in range(1, num + 1):
        comp = (lbl == idx)
        area = int(comp.sum())
        if area > int(8500 * sx * sy):
            continue
        # 포켓 내부에 실제 흰 배경 코어(cmin >= 225)가 포함되어 있는지 확인 (회색/은발 음영 오판 방지)
        if float(cmin[comp].max()) < 222.0:
            continue
        dil = ndimage.binary_dilation(comp, iterations=max(2, int(round(2 * sx)))) & (~comp) & (a > 180)
        if dil.sum() == 0:
            pocket_mask |= comp
            continue
        # 주변 불투명 픽셀이 어두운 머리카락(평균 밝기 <= 105)일 때만 갇힌 배경 포켓으로 판정
        mean_rb = float((r[dil] - b[dil]).mean())
        mean_lum = float(lum[dil].mean())
        if mean_rb > 15.0 or mean_lum > 105.0:
            continue
        pocket_mask |= comp

    out[pocket_mask, 3] = 0
    out[pocket_mask, :3] = 0
    return out


def clean_sprite(rgba, ref_rgba=None, extra_gap_rois=None, restore_holes=True, use_pymatting=False):
    """
    RGBA 배열을 받아 내부 반투명 침식 구멍 복원 -> 머리카락 사이 갇힌 배경 포켓 제거 -> 외곽선 흰끼 및 부유 노이즈 섬 제거를 순서대로 수행해 정리된 RGBA 배열 반환 -> 입력 배열 형식 오류 시 예외 발생
    """
    out = rgba.copy()
    if restore_holes:
        out = restore_interior_erosion(out)
    out = remove_trapped_hair_pockets(out)
    out = clean_sprite_defringe(out, ref_rgba=ref_rgba, extra_gap_rois=extra_gap_rois, use_pymatting=use_pymatting)
    return out


def process_sprite_file(input_path, output_path, use_rembg=True, use_sota_ensemble=False, use_pymatting=False):
    """
    입력 이미지 경로와 출력 경로를 받아 배경 제거·내부 침식 복원·머리카락 포켓 제거·외곽 디프린징을 순서대로 수행 -> 출력 경로에 PNG 저장 -> 파일 읽기나 저장 실패 시 예외 발생
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

    rgba = clean_sprite(rgba, restore_holes=True, use_pymatting=use_pymatting)
    Image.fromarray(rgba).save(output_path)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Clean character sprite background, internal erosion, and white halo")
    parser.add_argument("input", help="Input image file path")
    parser.add_argument("output", help="Output PNG file path")
    parser.add_argument("--no-rembg", action="store_true", help="Run pocket removal and defringing on existing alpha without re-running rembg")
    parser.add_argument("--sota", action="store_true", help="Use BiRefNet + ISNet-Anime core protection ensemble and PyMatting foreground estimation")
    args = parser.parse_args()
    process_sprite_file(args.input, args.output, use_rembg=not args.no_rembg, use_sota_ensemble=args.sota, use_pymatting=args.sota)
