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


# SOTA bria-rmbg.onnx ONNX Runtime 세션 캐시 (구형 isnet-anime 등 영구 삭제됨)
_BRIA_ORT_SESS = None
_BRIA_INP_NAME = None


def get_bria_ort_session():
    """
    로컬 bria-rmbg.onnx ONNX Runtime 세션을 초기화해 캐시에서 반환 -> 모델 파일이 없으면 RuntimeError 발생
    """
    global _BRIA_ORT_SESS, _BRIA_INP_NAME
    if _BRIA_ORT_SESS is not None:
        return _BRIA_ORT_SESS, _BRIA_INP_NAME
    bria_path = pathlib.Path.home() / ".rembg" / "models" / "bria-rmbg" / "bria-rmbg.onnx"
    if not bria_path.exists():
        raise RuntimeError(f"Required SOTA model not found: {bria_path}")
    import onnxruntime as ort
    opts = ort.SessionOptions()
    opts.intra_op_num_threads = 4
    opts.inter_op_num_threads = 1
    opts.log_severity_level = 3
    _BRIA_ORT_SESS = ort.InferenceSession(str(bria_path), sess_options=opts, providers=["CPUExecutionProvider"])
    _BRIA_INP_NAME = _BRIA_ORT_SESS.get_inputs()[0].name
    return _BRIA_ORT_SESS, _BRIA_INP_NAME


def predict_sota_alpha(rgb_im):
    """
    RGB 이미지를 받아 SOTA Bria-RMBG(bria-rmbg.onnx) 단일 모델로 정밀 알파 마스크를 추론 -> 2차원 uint8 알파 배열 반환
    """
    import cv2
    w, h = rgb_im.size
    bria_sess, bria_inp = get_bria_ort_session()
    comp = np.array(rgb_im.convert("RGB"))
    img = cv2.resize(comp, (1024, 1024)).astype(np.float32) / 255.0
    img = (img - np.array([0.485, 0.456, 0.406], dtype=np.float32)) / np.array([0.229, 0.224, 0.225], dtype=np.float32)
    pred = bria_sess.run(None, {bria_inp: img.transpose(2, 0, 1)[None]})[0].squeeze()
    return np.clip(np.round(cv2.resize(pred, (w, h)) * 255.0), 0, 255).astype(np.uint8)


def detect_silver_hair(rgba):
    """
    RGBA 배열을 받아 상단 두부 영역(y < 0.25*h, a >= 180)의 고명도·저채도 비율을 분석해 은발/백발 캐릭터 여부를 반환
    """
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
    silver_ratio = float(((cmin[head_fg] >= 185) & (sat[head_fg] <= 25)).mean())
    return silver_ratio >= 0.42


def recover_silver_hair_locks(rgba):
    """
    은발/백발 캐릭터의 외곽 잔머리·옆머리 선화(hair_lines)와 두부 본체 사이의 반열린 루프 및 속 빈 구멍을 닫고,
    순백색(#FFFFFF) 캔버스 원본인 경우 포토샵 Remove-White-Matte 방식의 선화 기반 외곽 플러드필 + 서브픽셀 알파/색상 역산(Unmix)으로 은발 결을 100% 보존·정리
    """
    import cv2
    out = rgba.copy()
    if not detect_silver_hair(out):
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

    # 순백색(#FFFFFF) 배경 원본인 경우: 외곽 순백색 여백 플러드필 + 2.2px 선화 경계 서브픽셀 역산(Photoshop Remove-White-Matte)
    top_corners_white = (lum[0, 0] >= 250.0) and (lum[0, w - 1] >= 250.0) and (sat[0, 0] <= 5.0)
    if top_corners_white:
        is_pure_white = (lum >= 252.5) & (sat <= 3.0)
        k2 = np.ones((2, 2), dtype=np.uint8)
        barrier = cv2.dilate((~is_pure_white).astype(np.uint8), k2, iterations=1) > 0
        walkable = (~barrier).astype(np.uint8)
        num_l, labels, stats, _ = cv2.connectedComponentsWithStats(walkable, connectivity=4)
        ext_bg = np.zeros((h, w), dtype=bool)
        for lbl in range(1, num_l):
            x0, y0, cw, ch, area = stats[lbl]
            if x0 == 0 or y0 == 0 or (x0 + cw) >= w or (y0 + ch) >= h:
                ext_bg |= (labels == lbl)
        ext_bg = (cv2.dilate(ext_bg.astype(np.uint8), k2, iterations=1) > 0) & is_pure_white

        fg_mask = (~ext_bg).astype(np.uint8)
        num_h, h_labels, h_stats, _ = cv2.connectedComponentsWithStats(1 - fg_mask, connectivity=4)
        for lbl in range(1, num_h):
            x0, y0, cw, ch, area = h_stats[lbl]
            if x0 > 0 and y0 > 0 and (x0 + cw) < w and (y0 + ch) < h and area < int(350 * (scale ** 2)):
                ext_bg[h_labels == lbl] = False

        dist_to_ext = cv2.distanceTransform((~ext_bg).astype(np.uint8), cv2.DIST_L2, 3)
        ps_alpha = np.where(ext_bg, 0.0, 255.0).astype(np.float32)
        rim = (~ext_bg) & (dist_to_ext <= 2.2) & (lum > 100.0) & (sat <= 25.0)
        local_min_lum = cv2.erode(lum, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5)))
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
    k_close = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (r_close, r_close))
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


def sota_clean_one_shot(rgba):
    """
    RGBA 배열을 받아 원샷(One-Shot) 무결점 배경 정리 파이프라인을 수행:
    1. 은발 캐릭터인 경우 외곽 은발 잔머리 루프(recover_silver_hair_locks) 복원.
    2. 기존 투명 영역(a < 35)과 8px 이내로 맞닿은 두부·목·손 주변(y < 0.305*h) 순백색(#FFFFFF) 잔여 코너 전파 제거 + 턱 밑·손가락-목 사이(y=0.19..0.300*h) 외곽 투명 경계 인접 미세 순백색 배경 조각(<=650px) 제거.
    3. 부유 노이즈 섬 제거 + 외곽 반투명 경계(0 < a < 235) 서브픽셀 전경 색상 역산(unmix).
    4. 두부·얼굴 내부(눈동자·공막·코끝 하이라이트·치아·혀·머리띠 등, 외곽 윤곽선에서 안쪽으로 10px 이상 들어간 내부 영역 및 피부로 둘러싸인 미세 하이라이트) 100% 불투명(a=255) 및 원본 RGB 복원(코/눈 구멍 원천 차단).
    """
    orig_rgb = rgba[:, :, :3].copy()
    out = recover_silver_hair_locks(rgba.copy())
    is_silver = detect_silver_hair(out)
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
    deep_face_interior = (yy >= int(0.08 * h)) & (yy <= int(0.285 * h)) & (dist_head_in >= 12.0 * scale)

    # 1. 기존 투명 영역(a < 35)과 인접한 상단 순백색 코너 및 턱 밑/목-손가락 사이 미세 순백색 배경 조각 제거
    if not is_silver:
        trans_seed = a < 35
        near_trans_8 = ndimage.binary_dilation(trans_seed, iterations=max(6, int(round(8 * scale))))
        pure_white_corner = (yy < int(0.305 * h)) & (~deep_face_interior) & near_trans_8 & (cmin >= 242.0) & (sat <= 10.0)
        prop_mask = ndimage.binary_propagation(trans_seed, mask=trans_seed | pure_white_corner)
        new_eroded = prop_mask & (~trans_seed)
        a[new_eroded] = 0.0

        # 턱 밑·귀 밑·손가락-목 사이의 미세 순백색 배경 삼각형 제거 (단, 얼굴 내부 코끝 하이라이트·치아는 철저히 제외)
        neck_band = (yy >= int(0.19 * h)) & (yy < int(0.300 * h)) & (~deep_face_interior)
        tiny_white_cand = neck_band & (a > 0) & (cmin >= 228.0) & (sat <= 14.0) & ((r - b) <= 10.0)
        tw_lbl, _ = ndimage.label(tiny_white_cand)
        max_tw_area = int(650 * (scale ** 2))
        killed_tw = np.zeros((h, w), dtype=bool)
        for tw_i, tw_sl in enumerate(ndimage.find_objects(tw_lbl), 1):
            if tw_sl is None:
                continue
            sub_tw = (tw_lbl[tw_sl] == tw_i)
            tw_area = int(sub_tw.sum())
            if 3 <= tw_area <= max_tw_area:
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
        min_d_in = float(dist_head_in[fh_sl][sub_fh].min())
        y0_f, y1_f = max(0, fh_sl[0].start - 2), min(h, fh_sl[0].stop + 2)
        x0_f, x1_f = max(0, fh_sl[1].start - 2), min(w, fh_sl[1].stop + 2)
        pad_f = (fh_lbl[y0_f:y1_f, x0_f:x1_f] == fh_i)
        rim_f = ndimage.binary_dilation(pad_f, iterations=2) & (~pad_f) & (a[y0_f:y1_f, x0_f:x1_f] >= 180)
        skin_f = float(warm_skin[y0_f:y1_f, x0_f:x1_f][rim_f].mean()) if rim_f.any() else 0.0
        # 두부 외곽선에서 안쪽으로 8px 이상 들어간 내부 홀이거나, 피부로 둘러싸인 코/볼/입 주변 홀이면 100% 복원
        if min_d_in >= 8.0 * scale or (skin_f >= 0.45 and fh_area <= int(500 * (scale ** 2))):
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
                eroded_f = span_a < 250.0
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


def clean_sprite(rgba, ref_rgba=None, extra_gap_rois=None, restore_holes=True, use_pymatting=False, restore_crown=True, harmonize_style=False, restore_outer_hair=False, style_ref_rgba=None):
    """
    RGBA 배열을 받아 원샷(One-Shot) 무결점 SOTA 배경 정리(sota_clean_one_shot) -> 상단 정수리 잘림 복원 -> (선택) 기준 스프라이트 기반 외곽 머리카락 복원 및 그림체/색감 정합을 순서대로 수행해 정리된 RGBA 배열 반환
    """
    out = sota_clean_one_shot(rgba)
    if restore_crown:
        out, _ = restore_crown_if_needed(out)
    target_ref = style_ref_rgba if style_ref_rgba is not None else ref_rgba
    if restore_outer_hair and target_ref is not None:
        out = restore_outer_hair_from_ref(out, target_ref)
    if harmonize_style and target_ref is not None:
        out = harmonize_style_to_ref(out, target_ref)
    return out


def process_sprite_file(input_path, output_path, use_rembg=True, use_sota_ensemble=True, use_pymatting=False, ref_path=None, verify_sheet_path=None, harmonize_style=False, restore_outer_hair=False):
    """
    입력 이미지 경로와 출력 경로를 받아 SOTA bria-rmbg.onnx 추론 및 원샷 무결점 배경 정리(sota_clean_one_shot)·정수리 복원을 순서대로 수행하고 기준 스프라이트 대비 신체비율 검수 시트를 생성 -> 원본 해상도(width x height) 보존 및 용량 최적화(optimize=True, compress_level=9)로 저장
    """
    im = Image.open(input_path)
    if use_rembg:
        rgb_im = im.convert("RGB")
        alpha = predict_sota_alpha(rgb_im)
        rgba = np.dstack([np.array(rgb_im), alpha])
    else:
        rgba = np.array(im.convert("RGBA"))
        # 다른 표정의 알파 마스크가 잘못 덮어씌워져 투명 영역(a==0) 아래에 원본 RGB가 숨겨진 손상 파일 자동 감지 및 SOTA 재추론
        h_im, w_im = rgba.shape[:2]
        hidden_rgb_px = int(((rgba[:, :, 3] == 0) & (rgba[:, :, :3].max(axis=2) > 10)).sum())
        if hidden_rgb_px > int(0.05 * h_im * w_im):
            rgb_im = Image.fromarray(rgba[:, :, :3], mode="RGB")
            alpha = predict_sota_alpha(rgb_im)
            rgba = np.dstack([rgba[:, :, :3], alpha])

    prop_ref_rgba = resolve_default_ref_rgba(output_path or input_path, explicit_ref_path=ref_path)
    rgba = clean_sprite(
        rgba,
        restore_holes=True,
        use_pymatting=use_pymatting,
        restore_crown=True,
        harmonize_style=harmonize_style,
        restore_outer_hair=restore_outer_hair,
        style_ref_rgba=prop_ref_rgba,
    )
    Image.fromarray(rgba).save(output_path, format="PNG", optimize=True, compress_level=9)
    if verify_sheet_path:
        generate_verification_sheet(rgba, verify_sheet_path, ref_rgba=prop_ref_rgba)
    if prop_ref_rgba is not None:
        passed, report = validate_proportion_against_ref(rgba, prop_ref_rgba)
        if not passed:
            print(f"[WARN] Proportion mismatch vs reference: head_scale_ratio={report['head_scale_ratio']:.3f} (cur={report['cur']['head_w_ratio']:.3f}, ref={report['ref']['head_w_ratio']:.3f})")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Clean character sprite background using SOTA bria-rmbg.onnx and sota_clean_one_shot")
    parser.add_argument("input", help="Input image file path")
    parser.add_argument("output", help="Output PNG file path")
    parser.add_argument("--no-rembg", action="store_true", help="Run sota_clean_one_shot on existing alpha without re-running bria-rmbg (auto-reruns if hidden RGB mismatch is detected)")
    parser.add_argument("--sota", action="store_true", help="Use SOTA Bria-RMBG (default and only model)")
    parser.add_argument("--ref", default=None, help="Reference base sprite (smile/01/sprite.png) for proportion verification and style/hair restoration")
    parser.add_argument("--harmonize-style", action="store_true", help="Harmonize hair/uniform tone, linework darkness, and green chroma residue to match reference sprite without geometric warping")
    parser.add_argument("--restore-outer-hair", action="store_true", help="Restore over-eroded outer hair strands from reference sprite for matching base head poses")
    parser.add_argument("--verify-sheet", default=None, help="Optional output path for dual-background (#181824 + #FF00FF) verification sheet")
    args = parser.parse_args()
    process_sprite_file(
        args.input,
        args.output,
        use_rembg=not args.no_rembg,
        use_sota_ensemble=True,
        use_pymatting=False,
        ref_path=args.ref,
        verify_sheet_path=args.verify_sheet,
        harmonize_style=args.harmonize_style,
        restore_outer_hair=args.restore_outer_hair,
    )
