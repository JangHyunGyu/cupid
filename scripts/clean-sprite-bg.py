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


def _guided_filter_alpha(guide_rgb, init_alpha_u8, radius=3, eps=1.5e-3):
    """
    원본 RGB 이미지와 초기 uint8 알파 마스크를 받아 가이디드 필터(Guided Filter, 원본 색 경계를 따라 마스크 테두리를 또렷하게 정렬하는 선형 필터)로 반투명 외곽선 보정 ->
    확정 전경 코어(alpha >= 248)와 완전 투명 외부 배경(alpha <= 4)은 그대로 잠그고 경계 구간만 고해상도 선화에 밀착시킨 uint8 알파 배열 반환 -> 연산 실패 시 초기 알파 그대로 반환
    """
    try:
        r_px = max(2, int(radius))
        win = 2 * r_px + 1
        a_in = init_alpha_u8.astype(np.float32) / 255.0
        g_lum = (
            0.299 * guide_rgb[:, :, 0].astype(np.float32)
            + 0.587 * guide_rgb[:, :, 1].astype(np.float32)
            + 0.114 * guide_rgb[:, :, 2].astype(np.float32)
        ) / 255.0

        mean_i = ndimage.uniform_filter(g_lum, size=win, mode="reflect")
        mean_p = ndimage.uniform_filter(a_in, size=win, mode="reflect")
        corr_i = ndimage.uniform_filter(g_lum * g_lum, size=win, mode="reflect")
        corr_ip = ndimage.uniform_filter(g_lum * a_in, size=win, mode="reflect")

        var_i = np.maximum(corr_i - mean_i * mean_i, 0.0)
        cov_ip = corr_ip - mean_i * mean_p
        coef_a = cov_ip / (var_i + float(eps))
        coef_b = mean_p - coef_a * mean_i

        mean_a = ndimage.uniform_filter(coef_a, size=win, mode="reflect")
        mean_b = ndimage.uniform_filter(coef_b, size=win, mode="reflect")
        q = np.clip(mean_a * g_lum + mean_b, 0.0, 1.0) * 255.0

        uncertain = (init_alpha_u8 > 4) & (init_alpha_u8 < 248)
        refined = np.where(uncertain, 0.65 * q + 0.35 * init_alpha_u8.astype(np.float32), init_alpha_u8.astype(np.float32))
        return np.clip(np.round(refined), 0, 255).astype(np.uint8)
    except Exception:
        return init_alpha_u8


def predict_sota_alpha(rgb_im, primary_model="birefnet-general", core_model="isnet-anime"):
    """
    RGB 이미지를 받아 고해상도 경계 추론 모델(bria-rmbg 또는 birefnet-general)과 애니메이션 내부 보호 모델(isnet-anime)을 앙상블하고 가이디드 필터로 테두리 정렬 ->
    2차원 uint8 알파 배열 반환 -> 고해상도 모델 실패 시 코어 모델 결과로 폴백하고 원인 로그 출력
    """
    rgb_conv = rgb_im.convert("RGB")
    w, h = rgb_conv.size
    sx = max(0.5, w / 1152.0)
    rgb_arr = np.array(rgb_conv)

    from rembg import remove
    core_a = None
    try:
        sess_core = get_rembg_session(core_model)
        core_rgba = np.array(remove(rgb_conv, session=sess_core))
        core_a = core_rgba[:, :, 3].astype(np.float32)
    except Exception as exc:
        print(f"[코어 알파 추론 폴백] core_model={core_model}, error={exc}", flush=True)

    hr_a = None
    bria_sess, bria_inp = get_bria_ort_session()
    if bria_sess is not None:
        try:
            img = np.array(rgb_conv.resize((1024, 1024), Image.Resampling.LANCZOS), dtype=np.float32) / 255.0
            img = (img - np.array([0.485, 0.456, 0.406], dtype=np.float32)) / np.array([0.229, 0.224, 0.225], dtype=np.float32)
            pred = bria_sess.run(None, {bria_inp: img.transpose(2, 0, 1)[None]})[0].squeeze()
            pred_im = Image.fromarray(np.clip(pred * 255.0, 0.0, 255.0).astype(np.uint8)).resize((w, h), Image.Resampling.LANCZOS)
            hr_a = np.array(pred_im, dtype=np.float32)
        except Exception as exc:
            print(f"[고해상도 알파 추론 폴백] model=bria-rmbg, error={exc}", flush=True)

    if hr_a is None:
        try:
            sess_hr = get_rembg_session(primary_model)
            hr_rgba = np.array(remove(rgb_conv, session=sess_hr))
            hr_a = hr_rgba[:, :, 3].astype(np.float32)
        except Exception as exc:
            print(f"[고해상도 알파 추론 폴백] primary_model={primary_model}, error={exc}", flush=True)
            if core_a is not None:
                return _guided_filter_alpha(rgb_arr, np.clip(np.round(core_a), 0, 255).astype(np.uint8), radius=max(2, int(round(3 * sx))))
            raise

    # 고해상도 경계 모델이 흰 가운·흰 셔츠·안경·손톱 내부를 반투명하게 침식하지 못하도록 애니메이션 코어 내부 불투명 보호
    if core_a is not None:
        erode_iter = max(3, int(round(5 * sx)))
        solid_core = ndimage.binary_erosion(core_a >= 210, iterations=erode_iter)
        combined_a = np.where(solid_core, np.maximum(hr_a, core_a), hr_a)
    else:
        combined_a = hr_a

    raw_u8 = np.clip(np.round(combined_a), 0, 255).astype(np.uint8)
    return _guided_filter_alpha(rgb_arr, raw_u8, radius=max(2, int(round(3 * sx))))


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
    "dohoon": {
        "silver_hair": False,
        "remove_flyaway_pockets": False,
        "neck_pocket_cleanup": True,
        "protect_white_coat": False,
        "protect_glasses": True,
    },
}


def detect_character_id(path_str=None, rgba=None):
    """
    파일 경로 문자열 또는 RGBA 이미지의 색상 특징으로부터 캐릭터 식별자(yuna, nurse, seoyeon, haeun, dain, teacher, minsu, dohoon)를 반환
    """
    if path_str:
        norm = str(path_str).replace("\\", "/").lower()
        if "/male_21/" in norm or "_male_21_" in norm or "male21" in norm:
            return "dohoon"
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

    # 순백색(#FFFFFF) 배경 원본인 경우: 상단 여백 패딩만 흰색이고 실제 배경(y=0.22*h)이 유색 배경인 경우를 배제하기 위해 상단 코너 불투명도 및 중단 좌우 여백을 함께 검증
    y_mid_chk = min(h - 1, int(0.22 * h))
    top_corners_white = (
        (a[0, 0] >= 250.0)
        and (a[0, w - 1] >= 250.0)
        and (lum[0, 0] >= 250.0)
        and (lum[0, w - 1] >= 250.0)
        and (sat[0, 0] <= 5.0)
        and (lum[y_mid_chk, 2] >= 250.0)
        and (sat[y_mid_chk, 2] <= 5.0)
    )
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
    RGBA 배열을 받아 이마 쪽으로 들어올린 팔·소매 비대칭 돌출을 배제한 두부 상단(top_y)·관자놀이 두상 폭 비율(head_w_ratio)·어깨 폭 비율(shoulder_w_ratio)·몸통 폭 비율(torso_w_ratio)·두부 중심(head_cx) 계산 ->
    비율 수치 딕셔너리 반환 -> 불투명 픽셀이 없으면 기본 표준 비율 반환
    """
    h, w = rgba.shape[:2]
    a = rgba[:, :, 3] >= 128
    ys = np.where(a)[0]
    if len(ys) == 0:
        return {"top_y": 0, "head_w_ratio": 0.345, "shoulder_w_ratio": 0.515, "torso_w_ratio": 0.695, "head_cx": 0.5 * w}
    top_y = int(ys.min())

    # 정수리 상단 돔(top_y + 0.02*h .. 0.09*h)에서 들어올린 팔 간섭이 없는 순수 두상 중심축 먼저 산출
    crown_centers = []
    for cy in range(top_y + int(0.02 * h), min(h, top_y + int(0.09 * h))):
        cxs = np.where(a[cy, :])[0]
        if len(cxs) > 10:
            crown_centers.append(0.5 * (cxs[0] + cxs[-1]))
    anchor_cx = float(np.median(crown_centers)) if crown_centers else 0.5 * w

    widths = []
    centers = []
    for y in range(top_y + int(0.05 * h), min(h, top_y + int(0.20 * h))):
        xs = np.where(a[y, :])[0]
        if len(xs) > 10:
            splits = np.where(np.diff(xs) > max(4, int(0.012 * w)))[0]
            runs = np.split(xs, splits + 1)
            best_run = min(runs, key=lambda r: abs(0.5 * (r[0] + r[-1]) - anchor_cx))
            left_span = anchor_cx - float(best_run[0])
            right_span = float(best_run[-1]) - anchor_cx
            if left_span > 0 and right_span > 0 and max(left_span, right_span) > 1.32 * min(left_span, right_span):
                sym_half = min(left_span, right_span) * 1.06
                widths.append(2.0 * sym_half)
                centers.append(anchor_cx)
            else:
                widths.append(float(best_run[-1] - best_run[0]))
                centers.append(0.5 * (best_run[0] + best_run[-1]))
    head_w = float(np.percentile(widths, 80)) if widths else 0.345 * w
    head_cx = float(np.median(centers)) if centers else anchor_cx

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


def audit_sprite_quality(rgba, expected_size=None):
    """
    최종 RGBA 배열과 기대 해상도(expected_size)를 받아 부유 노이즈 섬·내부 반투명 침식 홀·외곽 흰끼 픽셀·상단 정수리 잘림 여부를 정량 집계 ->
    검수 지표 딕셔너리 반환 -> 불투명 픽셀이 없으면 빈 카운트 반환
    """
    h, w = rgba.shape[:2]
    scale = max(0.5, w / 1152.0)
    a = rgba[:, :, 3]
    r = rgba[:, :, 0].astype(np.float32)
    g = rgba[:, :, 1].astype(np.float32)
    b = rgba[:, :, 2].astype(np.float32)
    cmin = np.minimum(np.minimum(r, g), b)
    sat = np.maximum(np.maximum(r, g), b) - cmin

    # 연결 요소(Connected Component, 서로 맞닿은 픽셀 묶음) 개수로 본체 밖 부유 노이즈 섬 검출
    _, num_islands = ndimage.label(a >= 1)
    floating_islands = max(0, int(num_islands) - 1)

    # 유클리드 거리 변환(EDT, 투명 경계에서 안쪽까지의 픽셀 거리 계산)으로 확정 내부 코어 안쪽 반투명 침식 홀 집계
    ext_bg = a < 20
    bg_lbl, _ = ndimage.label(ext_bg)
    open_ext = np.zeros((h, w), dtype=bool)
    for idx, sl in enumerate(ndimage.find_objects(bg_lbl), 1):
        if sl is None:
            continue
        comp = (bg_lbl[sl] == idx)
        if sl[0].start == 0 or sl[1].start == 0 or sl[0].stop >= h or sl[1].stop >= w or int(comp.sum()) >= int(1600 * scale * scale):
            open_ext[sl] |= comp
    dist_open = ndimage.distance_transform_edt(~open_ext)
    interior_holes = int(((dist_open >= 5.0 * scale) & (a > 0) & (a < 235)).sum())

    halo_px = int(((dist_open <= 2.5 * scale) & (a >= 32) & (a < 210) & (cmin >= 242.0) & (sat <= 6.0)).sum())
    edge_clip_top = int((a[0, :] > 20).sum())
    resolution_ok = True if expected_size is None else ((w, h) == tuple(expected_size))

    return {
        "width": w,
        "height": h,
        "resolution_ok": resolution_ok,
        "floating_islands": floating_islands,
        "interior_holes": interior_holes,
        "white_halo_px": halo_px,
        "edge_clip_top": edge_clip_top,
    }


def generate_verification_sheet(rgba, sheet_path, ref_rgba=None):
    """
    최종 RGBA 스프라이트를 어두운 배경(#181824)·네온 마젠타(#FF00FF)·네온 그린(#00FF00) 3중 대비 배경에 합성하고 정량 검수 수치와 비율 기준선 표시 ->
    지정된 경로(sheet_path)에 JPEG 시트 저장 -> 상위 디렉터리가 없으면 자동 생성
    """
    from PIL import ImageDraw
    h, w = rgba.shape[:2]
    pw, ph = 384, int(round(384 * h / float(w)))
    audit = audit_sprite_quality(rgba)
    panels = []
    if ref_rgba is not None:
        rm = measure_body_proportions(ref_rgba)
        panels.append((ref_rgba, (24, 24, 36), f"REF (head={rm['head_w_ratio']:.3f} shld={rm['shoulder_w_ratio']:.3f})"))
    cm = measure_body_proportions(rgba)
    panels.append((rgba, (24, 24, 36), f"DARK #181824 (head={cm['head_w_ratio']:.3f} isl={audit['floating_islands']})"))
    panels.append((rgba, (255, 0, 255), f"MAGENTA #FF00FF (hole={audit['interior_holes']}px)"))
    panels.append((rgba, (0, 255, 0), f"GREEN #00FF00 (halo={audit['white_halo_px']}px)"))

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

        # 손가락 끝 흰 손톱·단추·장신구처럼 선화 폐곡선(~true_ext_bg) 안쪽에 갇혀 있으나 AI가 알파를 0으로 통째로 날린 소형 부위(<=450px, 주변 살색 인접)도 함께 복원
        warm_skin_rim = (
            (a[y0_b:y1_b, x0_b:x1_b] >= 140.0)
            & ((r[y0_b:y1_b, x0_b:x1_b] - b[y0_b:y1_b, x0_b:x1_b]) >= 14.0)
            & (r[y0_b:y1_b, x0_b:x1_b] >= 140.0)
        )
        skin_rim_frac = float(warm_skin_rim[rim_b].mean()) if rim_b.any() else 0.0
        is_small_skin_adj_detail = (not top_corners_transparent) and (area <= int(450 * (scale ** 2))) and (skin_rim_frac >= 0.12)

        if (rim_a_mean >= 180.0 and float((sub_a > 0).mean()) >= 0.35) or is_small_skin_adj_detail:
            fill_m = comp
            if is_small_skin_adj_detail:
                # 얇은 외곽 선화 안쪽 1px 경계까지 빈틈없이 채워 손톱 상단 초승달 구멍 방지
                sub_inside = (~true_ext_bg[sl]) & (dist_to_ext_bg[sl] >= 1.2)
                fill_m = ndimage.binary_dilation(comp, iterations=2) & sub_inside
            a[sl][fill_m] = 255.0
            out[:, :, 0][sl][fill_m] = np.clip(np.round(r[sl][fill_m]), 0, 255).astype(np.uint8)
            out[:, :, 1][sl][fill_m] = np.clip(np.round(g[sl][fill_m]), 0, 255).astype(np.uint8)
            out[:, :, 2][sl][fill_m] = np.clip(np.round(b[sl][fill_m]), 0, 255).astype(np.uint8)

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


_TEACHER_PAIN_REF_1152 = None


def _get_teacher_pain_ref_1152():
    """
    담임교사(teacher) 우측 머리카락 구멍 및 침식 컬 복원용 기준 스프라이트(pain/01/sprite.png)를 로드해
    외곽 흰끼 제거 및 내부 반투명 홀 인페인팅을 마친 1152x1536 float32 RGBA 배열로 반환 -> 파일이 없으면 None 반환
    """
    global _TEACHER_PAIN_REF_1152
    if _TEACHER_PAIN_REF_1152 is not None:
        return _TEACHER_PAIN_REF_1152
    cand_paths = [
        r"d:\workspace\harem\assets\characters\mixed_5\members\teacher\expressions\pain\01\sprite.png",
        r"d:\workspace\cupid\assets\characters\teacher\expressions\pain\01\sprite.png",
    ]
    p_pain = next((p for p in cand_paths if os.path.exists(p)), None)
    if p_pain is None:
        return None
    try:
        ref = np.array(Image.open(p_pain).convert("RGBA").resize((1152, 1536), Image.Resampling.LANCZOS)).astype(np.float32)
        r_p, g_p, b_p, a_p = ref[:, :, 0], ref[:, :, 1], ref[:, :, 2], ref[:, :, 3]
        cmin_p = np.minimum(np.minimum(r_p, g_p), b_p)
        cmax_p = np.maximum(np.maximum(r_p, g_p), b_p)
        sat_p = cmax_p - cmin_p
        lum_p = 0.299 * r_p + 0.587 * g_p + 0.114 * b_p
        yy_p, xx_p = np.mgrid[0:1536, 0:1152]

        rim_top = (yy_p < 220) & (xx_p > 680) & (a_p > 0) & (cmin_p > 170) & (sat_p < 30)
        a_p[rim_top] = 0.0
        outer_zone = (yy_p >= 220) & (yy_p <= 505) & (xx_p >= 720) & (xx_p <= 855) & (a_p > 0)
        dist_ext_p = ndimage.distance_transform_edt(~(a_p < 30))
        edge_halo = outer_zone & (dist_ext_p <= 3.5) & ((sat_p < 28) | (cmin_p > 110))
        a_p[edge_halo] = np.clip((185.0 - cmin_p[edge_halo]) / 110.0, 0.0, 1.0) * a_p[edge_halo]
        a_p[a_p < 24] = 0.0

        valid_hair_px = (a_p >= 210) & (lum_p >= 25.0) & (lum_p <= 155.0) & ((r_p - b_p) >= 18.0)
        _, (iy, ix) = ndimage.distance_transform_edt(~valid_hair_px, return_indices=True)
        inpainted_r = ndimage.gaussian_filter(r_p[iy, ix], sigma=2.0)
        inpainted_g = ndimage.gaussian_filter(g_p[iy, ix], sigma=2.0)
        inpainted_b = ndimage.gaussian_filter(b_p[iy, ix], sigma=2.0)

        curl_solid = ndimage.binary_fill_holes(a_p >= 120)
        curl_hole = curl_solid & (a_p < 245) & (yy_p >= 300) & (yy_p <= 502) & (xx_p >= 700) & (xx_p <= 845)
        w_hole = np.clip((245.0 - a_p) / 200.0, 0.0, 1.0) * curl_hole.astype(np.float32)
        ref[:, :, 0] = r_p * (1.0 - w_hole) + inpainted_r * w_hole
        ref[:, :, 1] = g_p * (1.0 - w_hole) + inpainted_g * w_hole
        ref[:, :, 2] = b_p * (1.0 - w_hole) + inpainted_b * w_hole
        a_p[curl_hole] = 255.0
        ref[:, :, 3] = a_p
        _TEACHER_PAIN_REF_1152 = ref
        return _TEACHER_PAIN_REF_1152
    except Exception:
        return None


def repair_seoyeon_right_hair(rgba, character_id=None):
    """
    서연(seoyeon) RGBA 배열을 받아 귀 위·뒤편 우측 머리카락 삼각형 영역(y=80..445, x=625..745, 1086x1448 기준)의
    검은색 삼각형 단절 및 밝은 회색 블록·세로 경계선을 주변 흑갈색/차콜색 머리카락 톤(명도 35..46)으로 자연스럽게 보정 ->
    귀 피부·셔츠/재킷 칼라·목 입김은 보존한 RGBA 배열 반환
    """
    if character_id != "seoyeon":
        return rgba
    out = rgba.copy()
    h, w = out.shape[:2]
    sx, sy = w / 1086.0, h / 1448.0
    y0, y1 = int(round(80 * sy)), int(round(445 * sy))
    x0, x1 = int(round(625 * sx)), int(round(745 * sx))
    sub = out[y0:y1, x0:x1].copy()
    rgb = sub[:, :, :3].astype(np.float32)
    a = sub[:, :, 3].astype(np.float32)
    yy, xx = np.mgrid[y0:y1, x0:x1]
    lum = rgb.mean(axis=2)

    skin_seed = (
        (a > 150)
        & (xx <= int(round(665 * sx)))
        & (yy >= int(round(158 * sy)))
        & (yy <= int(round(398 * sy)))
        & (rgb[:, :, 0] > 130.0)
        & (((rgb[:, :, 0] - rgb[:, :, 2]) > 14.0) | ((lum > 175.0) & (xx <= int(round(662 * sx)))))
    )
    ear_skin_filled = ndimage.binary_fill_holes(skin_seed)
    is_ear_area = ear_skin_filled | (ndimage.binary_dilation(ear_skin_filled, iterations=1) & (xx <= int(round(665 * sx))))

    is_collar = (yy >= int(round(400 * sy))) & (((rgb[:, :, 2] - rgb[:, :, 0]) > 12.0) | (lum > 170.0))
    is_collar = ndimage.binary_dilation(is_collar, iterations=max(1, int(round(2 * sx))))

    steam_cand = (
        (yy >= int(round(262 * sy)))
        & (yy <= int(round(372 * sy)))
        & (xx <= int(round(688 * sx)))
        & (rgb[:, :, 2] > 82.0)
        & ((rgb[:, :, 0] - rgb[:, :, 2]) < 22.0)
        & (~is_ear_area)
    )
    is_steam = ndimage.gaussian_filter(steam_cand.astype(np.float32), sigma=2.5 * sx) > 0.15

    hair_base_lum = np.minimum(lum, rgb[:, :, 2] + 6.0)
    target_cap = 45.0
    dark_w = np.clip((xx.astype(np.float32) - 630.0 * sx) / (14.0 * sx), 0.0, 1.0)
    dark_w[is_ear_area | is_collar | is_steam] = 0.0

    excess = np.maximum(0.0, hair_base_lum - target_cap)
    compressed_lum = hair_base_lum - excess * 0.85 * dark_w

    too_dark = (
        (yy >= int(round(110 * sy)))
        & (yy <= int(round(215 * sy)))
        & (xx >= int(round(645 * sx)))
        & (compressed_lum < 34.0)
        & (a > 180.0)
        & (~is_ear_area)
    )
    compressed_lum[too_dark] = 35.0 + (compressed_lum[too_dark] / 34.0) * 7.0

    scale = compressed_lum / np.maximum(lum, 1.0)
    scaled_rgb = np.clip(rgb * scale[:, :, None], 0.0, 255.0)

    neutral_hair = (xx >= int(round(648 * sx))) & (~is_ear_area) & (~is_collar) & (~is_steam)
    if np.any(neutral_hair):
        nh_lum = compressed_lum[neutral_hair]
        w_n = dark_w[neutral_hair]
        scaled_rgb[neutral_hair, 0] = scaled_rgb[neutral_hair, 0] * (1.0 - w_n) + nh_lum * w_n
        scaled_rgb[neutral_hair, 1] = scaled_rgb[neutral_hair, 1] * (1.0 - w_n) + nh_lum * w_n
        scaled_rgb[neutral_hair, 2] = scaled_rgb[neutral_hair, 2] * (1.0 - w_n) + np.clip(nh_lum + 2.0, 0.0, 255.0) * w_n

    outer_rim = (a > 0) & (~ndimage.binary_erosion(a >= 245, iterations=max(1, int(round(2 * sx))))) & (xx >= int(round(655 * sx))) & (~is_ear_area) & (~is_collar)
    rim_bright = outer_rim & (scaled_rgb.mean(axis=2) > 42.0)
    if np.any(rim_bright):
        scaled_rgb[rim_bright] = np.minimum(scaled_rgb[rim_bright], 38.0)

    sub[:, :, :3] = np.clip(np.round(scaled_rgb), 0, 255).astype(np.uint8)
    out[y0:y1, x0:x1] = sub
    return out


def repair_teacher_hair_holes(rgba, character_id=None):
    """
    담임교사(teacher) RGBA 배열을 받아 우측 어깨 위 갈색 웨이브 머리카락(y=210..508, x=665..855)의 침식 구멍·외곽 파먹힘과
    좌측 머리카락 내부 세로 틈새(y=260..410, x=325..385)를 온전한 기준 머리카락(pain/01) 및 주변 갈색 모발 인페인팅으로 복원한 RGBA 배열 반환
    """
    if character_id != "teacher":
        return rgba
    ref_pain = _get_teacher_pain_ref_1152()
    if ref_pain is None:
        return rgba
    out = rgba.copy().astype(np.float32)
    h, w = out.shape[:2]
    if (h, w) != (1536, 1152):
        ref = np.array(Image.fromarray(ref_pain.astype(np.uint8)).resize((w, h), Image.Resampling.LANCZOS)).astype(np.float32)
    else:
        ref = ref_pain

    full_solid_head = ndimage.binary_fill_holes(out[:, :, 3] >= 210)
    ry0, ry1 = int(round(210 * h / 1536.0)), int(round(508 * h / 1536.0))
    rx0, rx1 = int(round(665 * w / 1152.0)), int(round(855 * w / 1152.0))
    sub = out[ry0:ry1, rx0:rx1]
    r_sub = ref[ry0:ry1, rx0:rx1]
    solid_sub = full_solid_head[ry0:ry1, rx0:rx1]
    sh, sw = sub.shape[:2]
    yy, xx = np.mgrid[0:sh, 0:sw]
    abs_y = yy + ry0
    abs_x = xx + rx0

    r, g, b, a = sub[:, :, 0], sub[:, :, 1], sub[:, :, 2], sub[:, :, 3]
    lum = 0.299 * r + 0.587 * g + 0.114 * b
    cmin = np.minimum(np.minimum(r, g), b)
    sat = np.maximum(np.maximum(r, g), b) - cmin

    white_tip = (abs_y >= int(445 * h / 1536.0)) & (abs_x >= int(815 * w / 1152.0)) & (cmin >= 175.0) & (sat <= 30.0)
    a[white_tip] = 0.0
    sub[:, :, 3] = a

    is_ear = (abs_y < int(305 * h / 1536.0)) & (abs_x < int(718 * w / 1152.0)) & (a >= 180)
    is_shoulder = (abs_y >= int(482 * h / 1536.0)) & (a >= 200) & (r >= 175.0) & (g >= 130.0)
    protect_r = ndimage.binary_dilation(is_ear | is_shoulder, iterations=2)

    core_mask = (
        (abs_y >= int(280 * h / 1536.0))
        & (abs_y <= int(430 * h / 1536.0))
        & (abs_x >= int(685 * w / 1152.0))
        & (abs_x <= int(740 * w / 1152.0))
        & (a >= 220)
        & (r_sub[:, :, 3] >= 220)
        & (~protect_r)
        & (cmin < 130)
    )
    is_cel_shaded = (core_mask.sum() > 80) and (np.median(r[core_mask] - b[core_mask]) < 29.0)

    if is_cel_shaded:
        own_valid_hair = (a >= 245) & (lum >= 42.0) & (lum <= 95.0) & ((r - b) >= 12.0) & (abs_y >= int(300 * h / 1536.0))
        if own_valid_hair.sum() > 50:
            _, (oy, ox) = ndimage.distance_transform_edt(~own_valid_hair, return_indices=True)
            inp_r = ndimage.gaussian_filter(r[oy, ox], sigma=2.0)
            inp_g = ndimage.gaussian_filter(g[oy, ox], sigma=2.0)
            inp_b = ndimage.gaussian_filter(b[oy, ox], sigma=2.0)
            enc_hole = (
                solid_sub
                & ((a < 245) | ((sat < 10) & (lum > 70)))
                & (abs_y >= int(412 * h / 1536.0))
                & (abs_y <= int(455 * h / 1536.0))
                & (abs_x >= int(760 * w / 1152.0))
                & (abs_x <= int(792 * w / 1152.0))
            )
            if np.any(enc_hole):
                sub[enc_hole, 0] = inp_r[enc_hole]
                sub[enc_hole, 1] = inp_g[enc_hole]
                sub[enc_hole, 2] = inp_b[enc_hole]
                sub[enc_hole, 3] = 255.0
            outer_halo = (abs_x >= int(720 * w / 1152.0)) & (abs_y < int(472 * h / 1536.0)) & (sub[:, :, 3] > 0) & ((sub[:, :, 3] < 240) | (cmin > 120)) & (sat < 22)
            sub[outer_halo, :3] *= 0.28
            faint_cel = (abs_x >= int(725 * w / 1152.0)) & (abs_y < int(472 * h / 1536.0)) & (sub[:, :, 3] < 110)
            sub[faint_cel, 3] = 0.0
            out[ry0:ry1, rx0:rx1] = sub
    else:
        if core_mask.sum() > 80:
            exp_med = np.median(sub[core_mask, :3], axis=0)
            ref_med = np.median(r_sub[core_mask, :3], axis=0)
            scale_rgb = np.clip(exp_med / np.maximum(ref_med, 15.0), 0.72, 1.18)
        else:
            scale_rgb = np.array([1.0, 1.0, 1.0], dtype=np.float32)

        adapted_r = r_sub.copy()
        for c_i in range(3):
            adapted_r[:, :, c_i] = np.clip(r_sub[:, :, c_i] * scale_rgb[c_i], 0.0, 255.0)

        wx_outer = np.clip((abs_x - 716.0 * w / 1152.0) / (14.0 * w / 1152.0), 0.0, 1.0)
        wy_lower = np.clip((abs_y - 355.0 * h / 1536.0) / (16.0 * h / 1536.0), 0.0, 1.0)
        wx_lower = np.clip((abs_x - 696.0 * w / 1152.0) / (16.0 * w / 1152.0), 0.0, 1.0)
        w_zone = np.maximum(wx_outer, wy_lower * wx_lower)

        wy_top = np.clip((abs_y - 215.0 * h / 1536.0) / (18.0 * h / 1536.0), 0.0, 1.0)
        wy_bot = np.clip((506.0 * h / 1536.0 - abs_y) / (6.0 * h / 1536.0), 0.0, 1.0)
        w_blend = w_zone * wy_top * wy_bot * (~protect_r).astype(np.float32) * (r_sub[:, :, 3] > 15).astype(np.float32)

        is_target_hole = (a < 240) & (r_sub[:, :, 3] >= 200) & (~protect_r) & (abs_y >= int(225 * h / 1536.0))
        w_blend = np.maximum(w_blend, is_target_hole.astype(np.float32))

        for c_i in range(3):
            sub[:, :, c_i] = sub[:, :, c_i] * (1.0 - w_blend) + adapted_r[:, :, c_i] * w_blend
        sub[:, :, 3] = np.maximum(sub[:, :, 3], adapted_r[:, :, 3] * w_blend)
        out[ry0:ry1, rx0:rx1] = sub

    ly0, ly1 = int(round(260 * h / 1536.0)), int(round(410 * h / 1536.0))
    lx0, lx1 = int(round(325 * w / 1152.0)), int(round(385 * w / 1152.0))
    lsub = out[ly0:ly1, lx0:lx1]
    lr_sub = ref[ly0:ly1, lx0:lx1]
    lsolid_sub = full_solid_head[ly0:ly1, lx0:lx1]
    la = lsub[:, :, 3]
    lcmin = np.minimum(np.minimum(lsub[:, :, 0], lsub[:, :, 1]), lsub[:, :, 2])
    has_left_opaque = np.maximum.accumulate(la >= 180, axis=1)
    slit = lsolid_sub & has_left_opaque & ((la < 240) | (lcmin > 145)) & (lr_sub[:, :, 3] >= 200)
    if np.any(slit):
        slit_f = np.clip(ndimage.gaussian_filter(slit.astype(np.float32), sigma=1.2) * 1.6, 0.0, 1.0) * (lsolid_sub & has_left_opaque).astype(np.float32)
        for c_i in range(3):
            lsub[:, :, c_i] = lsub[:, :, c_i] * (1.0 - slit_f) + lr_sub[:, :, c_i] * slit_f
        lsub[:, :, 3] = np.maximum(lsub[:, :, 3], lr_sub[:, :, 3] * slit_f)
        out[ly0:ly1, lx0:lx1] = lsub

    return np.clip(np.round(out), 0, 255).astype(np.uint8)


def clean_dohoon_hospital_bg(rgba, character_id=None):
    """
    도훈(dohoon / male_21) 전용 병원 진료실·나무문 배경 잔여물 정리:
    1. 상단 갈색 머리카락 외곽(y < 0.34*h)의 밝은 베이지색 벽면 헤일로(lum > 135, a < 150) 제거.
    2. 청록색 수술복(scrubs) 포즈 하단 중앙(y >= 0.989*h)의 흰색 책상/베개 테두리 잔여물 제거.
    3. 상의 탈의(afterglow_02 등) 포즈에서 좌측 팔뚝 외곽 V-클레프트 나무문 그림자 색번짐 보정 및 좌측 겨드랑이-몸통 사이 어두운 문틀 삼각 포켓 제거.
    """
    if character_id != "dohoon":
        return rgba
    out = rgba.copy()
    h, w = out.shape[:2]
    sx, sy = w / 1152.0, h / 1536.0
    yy, xx = np.mgrid[0:h, 0:w]
    r = out[:, :, 0].astype(np.float32)
    g = out[:, :, 1].astype(np.float32)
    b = out[:, :, 2].astype(np.float32)
    a = out[:, :, 3].astype(np.float32)
    lum = 0.299 * r + 0.587 * g + 0.114 * b

    hair_halo = (yy < int(520 * sy)) & (a < 150.0) & (lum > 135.0) & ((r - b) < 38.0)
    a[hair_halo] = 0.0
    a[(yy < int(480 * sy)) & (a < 48.0)] = 0.0

    desk_rim = (yy >= int(1520 * sy)) & (xx >= int(350 * sx)) & (xx <= int(700 * sx)) & ((g - r) < 10.0) & (lum > 165.0)
    a[desk_rim] = 0.0

    armpit_probe = (yy >= int(1180 * sy)) & (yy <= int(1320 * sy)) & (xx >= int(220 * sx)) & (xx <= int(265 * sx))
    if np.any(armpit_probe) and float((a[armpit_probe] > 128).mean()) > 0.25 and float((g[armpit_probe] - r[armpit_probe]).mean()) < -5.0:
        if float(lum[armpit_probe][a[armpit_probe] > 128].mean()) < 135.0:
            x_bicep = (106.0 + (yy / sy - 1040.0) * (20.0 / 70.0)) * sx
            x_forearm = (126.0 - (yy / sy - 1105.0) * (42.0 / 65.0)) * sx
            x_outer_arm = np.minimum(x_bicep, x_forearm)
            cleft_zone = (yy >= int(1035 * sy)) & (yy <= int(1175 * sy)) & (xx <= int(135 * sx))
            cleft_alpha = np.clip((xx - (x_outer_arm - 1.0 * sx)) / (2.5 * sx), 0.0, 1.0) * 255.0
            a = np.where(cleft_zone, np.minimum(a, cleft_alpha), a)

            x_left_upper = (264.0 - (yy / sy - 1158.0) * (50.0 / 107.0)) * sx
            x_left_lower = (214.0 - (yy / sy - 1265.0) * (12.0 / 90.0)) * sx
            x_inner_arm = np.where(yy < int(1265 * sy), x_left_upper, x_left_lower)

            x_right_upper = (264.0 + (yy / sy - 1158.0) * (13.0 / 87.0)) * sx
            x_right_lower = (277.0 + (yy / sy - 1245.0) * (10.0 / 115.0)) * sx
            x_torso = np.where(yy < int(1245 * sy), x_right_upper, x_right_lower)

            steth_earpiece = (yy >= int(1235 * sy)) & (yy <= int(1272 * sy)) & (xx >= int(242 * sx)) & (lum < 95.0)
            armpit_v = (yy >= int(1158 * sy)) & (yy <= int(1355 * sy)) & (xx > x_inner_arm) & (xx < x_torso) & (~steth_earpiece)
            dist_edge = np.minimum(xx - x_inner_arm, x_torso - xx)
            v_keep = np.where(armpit_v, np.clip(1.0 - dist_edge / (2.2 * sx), 0.0, 1.0), 1.0)
            a = a * v_keep

            crease_zone = (yy >= int(1095 * sy)) & (yy <= int(1165 * sy)) & (xx >= int(88 * sx)) & (xx <= int(127 * sx)) & (a > 0)
            blend_w = np.clip((165.0 - lum) / 55.0, 0.0, 0.78) * np.clip((127.0 * sx - xx) / (10.0 * sx), 0.0, 1.0)
            for ch_idx, target_v in enumerate([210.0, 162.0, 146.0]):
                ch_arr = out[:, :, ch_idx].astype(np.float32)
                out[:, :, ch_idx] = np.clip(np.where(crease_zone, ch_arr * (1.0 - blend_w) + target_v * blend_w, ch_arr), 0, 255).astype(np.uint8)

    out[:, :, 3] = np.clip(np.round(a), 0, 255).astype(np.uint8)
    out[out[:, :, 3] == 0, :3] = 0
    return out


def clean_nurse_sprite_bg(rgba, character_id=None):
    """
    보건교사(nurse) RGBA 배열을 받아 내부 침식 구멍 복원 -> 좌측 관자놀이 부유 잔머리 실선 제거 ->
    오른손 엄지·검지-옆머리 및 들어올린 팔뚝 소매-머리카락 흰 배경 포켓 제거 -> 목-머리카락-청진기/옷깃 배경 포켓 제거 ->
    전신 외곽 흰끼 제거 및 전경 색상 역산(unmix)을 순서대로 수행해 정리된 RGBA 배열 반환
    """
    if character_id is not None and character_id != "nurse":
        return rgba
    out = rgba.copy()
    h, w = out.shape[:2]
    sx, sy = w / 1152.0, h / 1536.0
    yy, xx = np.mgrid[0:h, 0:w]

    r = out[:, :, 0].astype(np.float32)
    g = out[:, :, 1].astype(np.float32)
    b = out[:, :, 2].astype(np.float32)
    a = out[:, :, 3].astype(np.float32)
    cmin = np.minimum(np.minimum(r, g), b)
    cmax = np.maximum(np.maximum(r, g), b)
    sat = cmax - cmin
    lum = 0.299 * r + 0.587 * g + 0.114 * b

    # 창백한 잿빛 피부 연출 표정(betrayed/01 등) 판별하여 창백한 손·목 피부가 흰 배경으로 오인되지 않도록 보호
    face_sample = (yy >= int(260 * sy)) & (yy <= int(360 * sy)) & (xx >= int(520 * sx)) & (xx <= int(650 * sx)) & (a >= 200)
    is_pale_face_expr = float((r[face_sample] - b[face_sample]).mean()) < 12.0 if np.any(face_sample) else False

    # 우측 머리카락 및 좌측 가운 하단 등의 반투명 내부 침식 구멍을 배경 포켓 제거보다 먼저 복원
    bg_orig = a < 30.0
    bglbl, _ = ndimage.label(bg_orig)
    open_bg = np.zeros((h, w), dtype=bool)
    for bi, bsl in enumerate(ndimage.find_objects(bglbl), 1):
        if bsl is None:
            continue
        bcomp = (bglbl[bsl] == bi)
        barea = int(bcomp.sum())
        touches_border = (bsl[0].start == 0 or bsl[1].start == 0 or bsl[0].stop >= h or bsl[1].stop >= w)
        in_intentional_gap = (
            ((bsl[0].start >= int(260 * sy)) and (bsl[0].stop <= int(565 * sy)) and (bsl[1].start >= int(300 * sx)) and (bsl[1].stop <= int(605 * sx)) and barea >= int(40 * sx * sy))
            or ((bsl[0].start >= int(430 * sy)) and (bsl[0].stop <= int(482 * sy)) and (bsl[1].start >= int(712 * sx)) and (bsl[1].stop <= int(748 * sx)) and barea >= int(40 * sx * sy))
            or ((bsl[0].start >= int(350 * sy)) and (bsl[0].stop <= int(750 * sy)) and (bsl[1].start <= int(420 * sx)) and barea >= int(500 * sx * sy))
            or ((bsl[0].start >= int(600 * sy)) and (bsl[1].start >= int(980 * sx)) and barea >= int(200 * sx * sy))
        )
        if touches_border or in_intentional_gap:
            open_bg[bsl] |= bcomp

    dist_to_open_bg = ndimage.distance_transform_edt(~open_bg)
    interior_eroded = (dist_to_open_bg >= 3.5 * sx) & (a < 250.0)
    ilbl, _ = ndimage.label(interior_eroded)
    valid_paint = (a >= 210.0) & (cmax > 15.0)
    _, (ny, nx) = ndimage.distance_transform_edt(~valid_paint, return_indices=True)

    for ii, isl in enumerate(ndimage.find_objects(ilbl), 1):
        if isl is None:
            continue
        icomp = (ilbl[isl] == ii)
        iarea = int(icomp.sum())
        sub_a = a[isl][icomp]
        if isl[1].start >= int(740 * sx) and isl[0].start >= int(160 * sy) and isl[0].stop <= int(415 * sy) and float(sub_a.min()) == 0.0 and iarea >= int(120 * sx * sy):
            continue
        if isl[1].stop <= int(385 * sx) and isl[0].stop <= int(385 * sy) and float(sub_a.min()) == 0.0 and iarea >= int(120 * sx * sy):
            continue

        need_rgb_inpaint = icomp & ((a[isl] < 80.0) | ((cmin[isl] >= 230.0) & (sat[isl] <= 12.0) & (isl[0].stop < int(480 * sy))))
        if np.any(need_rgb_inpaint):
            r[isl][need_rgb_inpaint] = r[ny[isl][need_rgb_inpaint], nx[isl][need_rgb_inpaint]]
            g[isl][need_rgb_inpaint] = g[ny[isl][need_rgb_inpaint], nx[isl][need_rgb_inpaint]]
            b[isl][need_rgb_inpaint] = b[ny[isl][need_rgb_inpaint], nx[isl][need_rgb_inpaint]]
        a[isl][icomp] = 255.0

    cmin = np.minimum(np.minimum(r, g), b)
    cmax = np.maximum(np.maximum(r, g), b)
    sat = cmax - cmin
    lum = 0.299 * r + 0.587 * g + 0.114 * b

    # 좌측 관자놀이·볼 바깥의 분리된 세로 잔머리 실선(폭 <= 9px) 및 외곽 흰끼 제거 (들어올린 흰 소매는 폭 조건으로 보호)
    for y_i in range(int(95 * sy), int(475 * sy)):
        x_start = int(245 * sx)
        x_end = int(382 * sx)
        row_a = a[y_i, x_start:x_end]
        vis_cols = np.where(row_a >= 160.0)[0]
        if len(vis_cols) == 0:
            continue
        main_edge = int(vis_cols[-1])
        left_slice = row_a[:main_edge]
        trans_idx = np.where(left_slice < 45.0)[0]
        if len(trans_idx) > 0:
            last_gap = int(trans_idx[-1])
            outer_vis = np.where(left_slice[:last_gap] >= 25.0)[0]
            if 0 < len(outer_vis) <= int(round(9 * sx)):
                sub_x = np.arange(x_start, x_start + last_gap + 1)
                is_finger_skin = (y_i >= int(325 * sy)) & ((r[y_i, sub_x] - b[y_i, sub_x]) >= 16.0) & (r[y_i, sub_x] >= 140.0)
                a[y_i, sub_x[~is_finger_skin]] = 0.0

    dist_ext = ndimage.distance_transform_edt(a >= 25.0)
    is_climax05_sleeve = (xx < int(336 * sx)) & (yy > int(300 * sy))
    lhair_edge = (yy >= int(70 * sy)) & (yy <= int(470 * sy)) & (xx >= int(245 * sx)) & (xx <= int(365 * sx)) & (~is_climax05_sleeve) & (dist_ext <= 5.5 * sx)
    is_skin_px = ((r - b) >= 16.0) & (r >= 140.0)
    if not is_pale_face_expr:
        lhair_halo = lhair_edge & (~is_skin_px) & ((lum >= 162.0) | ((a < 185.0) & (lum >= 115.0))) & (sat <= 26.0)
        a[lhair_halo] = 0.0

    # 오른손 엄지·검지-안경다리-옆머리 사이 흰 배경 포켓 제거 (손가락 윤곽 안쪽에 닫힌 흰 손톱은 침식되지 않도록 보호)
    if not is_pale_face_expr:
        dist_ext = ndimage.distance_transform_edt(a >= 25.0)
        hand_enclosed = ndimage.binary_fill_holes(ndimage.binary_closing(a >= 115.0, iterations=max(3, int(round(6 * sx)))))
        warm_skin_px = ((r - b) >= 14.0) & (r >= 145.0)
        near_finger_skin = ndimage.binary_dilation(warm_skin_px & (a >= 150.0), iterations=max(3, int(round(6 * sx))))
        finger_zone = (yy >= int(280 * sy)) & (yy <= int(415 * sy)) & (xx >= int(300 * sx)) & (xx <= int(445 * sx))
        finger_bg = finger_zone & (dist_ext <= 12.0 * sx) & (cmin >= 224.0) & (sat <= 13.0) & ((r - b) <= 10.0) & ((yy < int(358 * sy)) | ((~hand_enclosed) & (~near_finger_skin)))
        a[finger_bg] = 0.0

        wrist_hair_zone = (yy >= int(395 * sy)) & (yy <= int(500 * sy)) & (xx >= int(335 * sx)) & (xx <= int(392 * sx))
        wrist_white = wrist_hair_zone & (cmin >= 218.0) & (sat <= 14.0) & ((r - b) <= 10.0)
        wlbl, _ = ndimage.label(wrist_white)
        killed_wrist = np.zeros((h, w), dtype=bool)
        for wi, wsl in enumerate(ndimage.find_objects(wlbl), 1):
            if wsl is None:
                continue
            wcomp = (wlbl[wsl] == wi)
            warea = int(wcomp.sum())
            if warea < int(30 * sx * sy) or float(cmin[wsl][wcomp].max()) < 236.0:
                continue
            wy0, wy1 = max(0, wsl[0].start - 3), min(h, wsl[0].stop + 3)
            wx0, wx1 = max(0, wsl[1].start - 3), min(w, wsl[1].stop + 3)
            wpad = (wlbl[wy0:wy1, wx0:wx1] == wi)
            wrim = ndimage.binary_dilation(wpad, iterations=2) & (~wpad)
            w_trans = bool((wrim & (a[wy0:wy1, wx0:wx1] < 35.0)).any())
            w_vis = wrim & (a[wy0:wy1, wx0:wx1] >= 120.0)
            w_skin = float(warm_skin_px[wy0:wy1, wx0:wx1][w_vis].mean()) if w_vis.any() else 0.0
            # 손가락 안쪽에 닫힌 흰 손톱(투명 배경 비접촉 + 주변 살색 인접)은 제거 대상에서 제외
            if not w_trans and warea <= int(350 * sx * sy) and w_skin >= 0.15:
                continue
            killed_wrist[wsl] |= wcomp
        if np.any(killed_wrist):
            w_rim = ndimage.binary_dilation(killed_wrist, iterations=max(2, int(round(3 * sx)))) & wrist_hair_zone & (cmin >= 180.0) & (sat <= 20.0) & ((r - b) <= 10.0)
            a[killed_wrist | w_rim] = 0.0

    # 목-좌측 머리카락 끝-청진기/옷깃 사이 삼각 흰 배경 포켓 제거 (볼을 감싼 손바닥 땀 하이라이트 및 연보라 머리카락 끝은 피부·색상 비율로 보호)
    if not is_pale_face_expr:
        lower_neck_tri = (yy >= int(460 * sy)) & (yy <= int(555 * sy)) & (xx >= int(435 * sx)) & (xx <= int(585 * sx))
        tri_cand = lower_neck_tri & (a > 0) & (cmin >= 216.0) & (sat <= 18.0) & ((r - b) <= 16.0) & ((b - g) <= 7.0)
        tlbl, _ = ndimage.label(tri_cand, structure=np.ones((3, 3), dtype=bool))
        killed_tri = np.zeros((h, w), dtype=bool)
        for ti, tsl in enumerate(ndimage.find_objects(tlbl), 1):
            if tsl is None:
                continue
            tcomp = (tlbl[tsl] == ti)
            if int(tcomp.sum()) < int(6 * sx * sy) or tsl[1].start > int(548 * sx):
                continue
            if float(cmin[tsl][tcomp].max()) < 232.0:
                continue
            ry0, ry1 = max(0, tsl[0].start - 3), min(h, tsl[0].stop + 3)
            rx0, rx1 = max(0, tsl[1].start - 3), min(w, tsl[1].stop + 3)
            pad_t = (tlbl[ry0:ry1, rx0:rx1] == ti)
            rim_t = ndimage.binary_dilation(pad_t, iterations=2) & (~pad_t) & (a[ry0:ry1, rx0:rx1] >= 120.0)
            if rim_t.any() and float(warm_skin_px[ry0:ry1, rx0:rx1][rim_t].mean()) >= 0.40:
                continue
            killed_tri[tsl] |= tcomp
        if np.any(killed_tri):
            tri_rim1 = ndimage.binary_dilation(killed_tri, iterations=2) & (~killed_tri) & lower_neck_tri & ((r - b) <= 16.0) & (cmin >= 216.0) & (sat <= 16.0)
            a[killed_tri | tri_rim1] = 0.0
            tri_rim2 = ndimage.binary_dilation(killed_tri | tri_rim1, iterations=2) & (~(killed_tri | tri_rim1)) & lower_neck_tri & ((r - b) <= 16.0) & (cmin >= 185.0) & (sat <= 20.0)
            a[tri_rim2] *= np.clip((232.0 - lum[tri_rim2]) / 48.0, 0.0, 0.40)

    y_chin = (422.0 + (xx / sx - 460.0) * 0.92) * sy
    y_lapel = (560.0 - (xx / sx - 490.0) * 0.60) * sy
    neck_pocket_zone = (yy >= int(465 * sy)) & (yy >= y_chin) & (yy < y_lapel) & (xx >= int(472 * sx)) & (xx <= int(582 * sx))
    orig_trans_in_neck = int(np.sum((rgba[:, :, 3] < 30) & (yy >= int(462 * sy)) & (yy <= int(558 * sy)) & (xx >= int(460 * sx)) & (xx <= int(590 * sx))))
    if orig_trans_in_neck >= int(320 * sx * sy):
        neck_dark_p = neck_pocket_zone & (lum <= 72.0) & (sat <= 28.0)
        neck_white_p = neck_pocket_zone & (not is_pale_face_expr) & (cmin >= 180.0) & (sat <= 20.0) & ((r - b) <= 12.0)
        a[neck_dark_p | neck_white_p] = 0.0
        if np.any(neck_dark_p | neck_white_p):
            np_rim = ndimage.binary_dilation(neck_dark_p | neck_white_p, iterations=2) & (~(neck_dark_p | neck_white_p)) & neck_pocket_zone & ((lum <= 95.0) | ((not is_pale_face_expr) & (cmin >= 165.0)))
            a[np_rim] = 0.0

    right_neck_gap = (yy >= int(432 * sy)) & (yy <= int(478 * sy)) & (xx >= int(715 * sx)) & (xx <= int(746 * sx))
    if np.any(right_neck_gap & (a < 30.0)):
        rn_junk = right_neck_gap & (a > 0) & (((lum <= 55.0) & (sat <= 20.0)) | ((cmin >= 205.0) & (sat <= 15.0)))
        a[rn_junk] = 0.0

    # 전신 외곽 및 포켓 경계 반투명 흰끼 제거 + 서브픽셀 전경 색상 역산(unmix)
    deep_face = (yy >= int(160 * sy)) & (yy <= int(410 * sy)) & (xx >= int(455 * sx)) & (xx <= int(725 * sx))
    dist_ext = ndimage.distance_transform_edt(a >= 25.0)
    if not is_pale_face_expr:
        nail_guard = (yy >= int(358 * sy)) & (yy <= int(412 * sy)) & (xx >= int(330 * sx)) & (xx <= int(430 * sx)) & near_finger_skin
        upper_outer = (yy < int(555 * sy)) & (~deep_face) & (~is_climax05_sleeve) & (~nail_guard) & (dist_ext <= 3.5 * sx) & (a > 0)
        upper_white_fringe = upper_outer & (cmin >= 180.0) & (sat <= 18.0) & ((r - b) <= 12.0)
        a[upper_white_fringe] *= np.clip((210.0 - cmin[upper_white_fringe]) / 45.0, 0.0, 0.25)
        a[upper_outer & (cmin >= 212.0) & (sat <= 14.0) & ((r - b) <= 12.0)] = 0.0

    lower_outer = (yy >= int(520 * sy)) & (dist_ext <= 2.2 * sx) & (a > 0)
    local_min_lum = ndimage.minimum_filter(lum, size=max(3, int(round(5 * sx))))
    coat_edge_halo = lower_outer & (cmin >= 238.0) & (sat <= 8.0) & (local_min_lum <= 145.0)
    a[coat_edge_halo] *= np.clip((248.0 - cmin[coat_edge_halo]) / 20.0, 0.0, 0.25)

    dist_any_trans = ndimage.distance_transform_edt(a >= 25.0)
    boundary_semi = (a > 0) & (a < 238.0) & (dist_any_trans <= 3.5 * sx) & (~deep_face)
    bright_semi = boundary_semi & (cmin >= 170.0) & (sat <= 24.0)
    a[bright_semi] *= np.clip((245.0 - cmin[bright_semi]) / 65.0, 0.0, 0.60)

    vis_semi = (a >= 18.0) & (a < 242.0) & (dist_any_trans <= 3.5 * sx) & (~deep_face)
    a01 = np.clip(a[vis_semi] / 255.0, 0.18, 1.0)
    r[vis_semi] = np.clip((r[vis_semi] - (1.0 - a01) * 255.0) / a01, 0.0, 255.0)
    g[vis_semi] = np.clip((g[vis_semi] - (1.0 - a01) * 255.0) / a01, 0.0, 255.0)
    b[vis_semi] = np.clip((b[vis_semi] - (1.0 - a01) * 255.0) / a01, 0.0, 255.0)

    a[a < 20.0] = 0.0
    for thresh in (24, 12, 1):
        vis = a >= thresh
        lbl, num = ndimage.label(vis)
        if num > 1:
            sizes = ndimage.sum(vis, lbl, range(1, num + 1))
            main_lbl = int(np.argmax(sizes)) + 1
            a[vis & (lbl != main_lbl)] = 0.0

    zero = a == 0.0
    r[zero] = 0.0
    g[zero] = 0.0
    b[zero] = 0.0

    out[:, :, 0] = np.clip(np.round(r), 0, 255).astype(np.uint8)
    out[:, :, 1] = np.clip(np.round(g), 0, 255).astype(np.uint8)
    out[:, :, 2] = np.clip(np.round(b), 0, 255).astype(np.uint8)
    out[:, :, 3] = np.clip(np.round(a), 0, 255).astype(np.uint8)
    return out


def restore_interior_erosion(rgba, orig_rgb=None, character_id=None):
    """
    RGBA 배열과 원본 RGB(orig_rgb)를 받아 선화 장벽 복원(restore_clipped_contours_by_lineart) 후 팔-몸통·머리카락-목 사이 완전 투명 공간(alpha == 0)은 보존하면서 의상·피부·손톱·안경·머리카락 내부에 잘못 파먹힌 닫힌 반투명 침식 구멍을 불투명(255) 복원 ->
    내부 침식이 복원된 RGBA 배열 반환 -> 전경이 전혀 없으면 입력 그대로 반환
    """
    src_rgb = orig_rgb.copy() if orig_rgb is not None else rgba[:, :, :3].copy()
    out = restore_clipped_contours_by_lineart(rgba.copy(), orig_rgb=src_rgb)
    h, w = out.shape[:2]
    scale = max(0.5, w / 1152.0)
    a = out[:, :, 3].astype(np.float32)
    if not np.any(a >= 180.0):
        return out

    r = out[:, :, 0].astype(np.float32)
    g = out[:, :, 1].astype(np.float32)
    b = out[:, :, 2].astype(np.float32)
    sr = src_rgb[:, :, 0].astype(np.float32)
    sg = src_rgb[:, :, 1].astype(np.float32)
    sb = src_rgb[:, :, 2].astype(np.float32)
    zero_src = (rgba[:, :, 3] == 0) & (sr == 0.0) & (sg == 0.0) & (sb == 0.0)

    # 캔버스 외곽과 연결된 외부 배경 및 실제 팔-몸통/머리카락-목 사이 완전 투명 공간(alpha == 0) 분리
    true_zero_bg = a == 0.0
    z_lbl, _ = ndimage.label(true_zero_bg)
    open_space = np.zeros((h, w), dtype=bool)
    for idx, sl in enumerate(ndimage.find_objects(z_lbl), 1):
        if sl is None:
            continue
        comp = (z_lbl[sl] == idx)
        touches_border = (sl[0].start == 0 or sl[1].start == 0 or sl[0].stop >= h or sl[1].stop >= w)
        # 완전 투명 공간 중 면적이 18px 이상이면 의도된 배경 투과 구멍으로 보호하고, 손톱·단추 내부 미세 침식 점(< 18px, 원본 RGB 존재)만 복원 허용
        if touches_border or int(comp.sum()) >= max(14, int(18 * scale * scale)) or bool(zero_src[sl][comp].all()):
            open_space[sl] |= comp

    dist_open = ndimage.distance_transform_edt(~open_space)
    eroded_interior = (dist_open >= 3.5 * scale) & (a < 250.0) & (~open_space)

    # 손가락 끝 흰 손톱처럼 얇은 선화로 둘러싸여 경계 근처에서 파먹힌 소형 닫힌 홀(<= 260px, 원본 채색 온전) 추가 복원
    closed_silhouette = ndimage.binary_fill_holes(ndimage.binary_closing(a >= 120.0, iterations=max(2, int(round(4 * scale)))))
    warm_skin = (a >= 150.0) & ((r - b) >= 14.0) & (r >= 140.0)
    tiny_enclosed = closed_silhouette & (~open_space) & (a < 250.0) & (~zero_src)
    te_lbl, _ = ndimage.label(tiny_enclosed)
    for idx, sl in enumerate(ndimage.find_objects(te_lbl), 1):
        if sl is None:
            continue
        comp = (te_lbl[sl] == idx)
        area = int(comp.sum())
        if 1 <= area <= int(260 * scale * scale):
            ry0, ry1 = max(0, sl[0].start - 3), min(h, sl[0].stop + 3)
            rx0, rx1 = max(0, sl[1].start - 3), min(w, sl[1].stop + 3)
            pad = (te_lbl[ry0:ry1, rx0:rx1] == idx)
            rim = ndimage.binary_dilation(pad, iterations=2) & (~pad) & (a[ry0:ry1, rx0:rx1] >= 150.0)
            if rim.any() and float(warm_skin[ry0:ry1, rx0:rx1][rim].mean()) >= 0.35:
                eroded_interior[sl] |= comp

    if np.any(eroded_interior):
        valid_core = (a >= 215.0) & ((r + g + b) > 20.0)
        _, (ny, nx) = ndimage.distance_transform_edt(~valid_core, return_indices=True)
        use_src = eroded_interior & (~zero_src)
        use_edt = eroded_interior & zero_src
        if np.any(use_src):
            r[use_src] = sr[use_src]
            g[use_src] = sg[use_src]
            b[use_src] = sb[use_src]
        if np.any(use_edt):
            r[use_edt] = r[ny[use_edt], nx[use_edt]]
            g[use_edt] = g[ny[use_edt], nx[use_edt]]
            b[use_edt] = b[ny[use_edt], nx[use_edt]]
        a[eroded_interior] = 255.0

    out[:, :, 0] = np.clip(np.round(r), 0, 255).astype(np.uint8)
    out[:, :, 1] = np.clip(np.round(g), 0, 255).astype(np.uint8)
    out[:, :, 2] = np.clip(np.round(b), 0, 255).astype(np.uint8)
    out[:, :, 3] = np.clip(np.round(a), 0, 255).astype(np.uint8)
    return out


def remove_trapped_hair_pockets(rgba, orig_rgb=None, character_id=None):
    """
    RGBA 배열과 원본 RGB를 받아 크로마 서브샘플링(Chroma Subsampling, JPEG 압축 시 색상 해상도가 줄어 주변 피부·선화 색이 흰 배경으로 번지는 현상)을 감안해 머리카락 끝·목·옷깃·손가락 사이에 갇힌 흰/회색 배경 포켓만 정밀 제거 ->
    손톱·손바닥 땀 광택·연보라/은발 머리카락·흰 가운은 보존하고 포켓과 반투명 흰 테두리만 정리한 RGBA 배열 반환 -> 제거 대상이 없으면 입력 그대로 반환
    """
    if detect_silver_hair(rgba, character_id=character_id):
        return rgba
    out = rgba.copy()
    h, w = out.shape[:2]
    scale = max(0.5, w / 1152.0)
    src = orig_rgb.astype(np.float32) if orig_rgb is not None else out[:, :, :3].astype(np.float32)
    r = out[:, :, 0].astype(np.float32)
    g = out[:, :, 1].astype(np.float32)
    b = out[:, :, 2].astype(np.float32)
    a = out[:, :, 3].astype(np.float32)

    sr, sg, sb = src[:, :, 0], src[:, :, 1], src[:, :, 2]
    zero_src = (a > 0) & (sr == 0.0) & (sg == 0.0) & (sb == 0.0)
    sr = np.where(zero_src, r, sr)
    sg = np.where(zero_src, g, sg)
    sb = np.where(zero_src, b, sb)

    cmin = np.minimum(np.minimum(sr, sg), sb)
    cmax = np.maximum(np.maximum(sr, sg), sb)
    sat = cmax - cmin
    lum = 0.299 * sr + 0.587 * sg + 0.114 * sb
    yy, xx = np.mgrid[0:h, 0:w]

    # 얼굴 중심부(눈동자 공막·안경 반사광·치아) 및 창백한 피부 연출 표정 보호
    face_probe = (yy >= int(0.16 * h)) & (yy <= int(0.24 * h)) & (xx >= int(0.44 * w)) & (xx <= int(0.57 * w)) & (a >= 200.0)
    if np.any(face_probe) and float((sr[face_probe] - sb[face_probe]).mean()) < 12.0:
        return out

    dist_ext = ndimage.distance_transform_edt(a >= 25.0)
    deep_face = (yy >= int(0.11 * h)) & (yy <= int(0.29 * h)) & (xx >= int(0.39 * w)) & (xx <= int(0.63 * w)) & (dist_ext >= 10.0 * scale)
    warm_skin = (a >= 140.0) & ((sr - sb) >= 14.0) & (sr >= 145.0)
    hand_closed = ndimage.binary_fill_holes(ndimage.binary_closing(a >= 120.0, iterations=max(3, int(round(5 * scale)))))

    # 상반신 머리카락·턱·목·옷깃·손가락 주변(y < 0.38*h)에서 좁은 틈새 JPEG 링잉까지 포괄하는 저채도 고명도 후보 추출
    pocket_zone = (yy < int(0.38 * h)) & (~deep_face) & (a > 0)
    cand = pocket_zone & (cmin >= 222.0) & (sat <= 18.0) & ((sr - sb) <= 16.0) & ((sb - sg) <= 7.0)
    lbl, _ = ndimage.label(cand, structure=np.ones((3, 3), dtype=bool))

    killed = np.zeros((h, w), dtype=bool)
    max_area = int(4800 * scale * scale)
    for idx, sl in enumerate(ndimage.find_objects(lbl), 1):
        if sl is None:
            continue
        comp = (lbl[sl] == idx)
        area = int(comp.sum())
        if area < max(5, int(6 * scale * scale)) or area > max_area:
            continue
        # 포켓 중심 최고 명도가 235 미만이면 연보라·회색 머리카락 하이라이트이므로 제외
        if float(cmin[sl][comp].max()) < 235.0:
            continue
        ry0, ry1 = max(0, sl[0].start - 3), min(h, sl[0].stop + 3)
        rx0, rx1 = max(0, sl[1].start - 3), min(w, sl[1].stop + 3)
        pad = (lbl[ry0:ry1, rx0:rx1] == idx)
        rim = ndimage.binary_dilation(pad, iterations=3) & (~pad)
        touches_trans = bool((rim & (a[ry0:ry1, rx0:rx1] < 35.0)).any())
        rim_vis = rim & (a[ry0:ry1, rx0:rx1] >= 120.0)
        if not rim_vis.any():
            killed[sl] |= comp
            continue
        skin_frac = float(warm_skin[ry0:ry1, rx0:rx1][rim_vis].mean())
        cool_hair_frac = float(((sb[ry0:ry1, rx0:rx1][rim_vis] - sr[ry0:ry1, rx0:rx1][rim_vis]) >= 5.0).mean())
        # 손가락 내부에 닫힌 흰 손톱(외부 투명 여백 비접촉 + 주변 살색 + 한색 머리카락 비인접) 및 손바닥·목 땀 반사광 보호
        is_pure_white_notch = touches_trans and (float(cmin[sl][comp].max()) >= 250.0) and (float(np.percentile(sat[sl][comp], 15)) <= 5.0)
        if skin_frac >= 0.42 and not is_pure_white_notch:
            continue
        if not touches_trans and area <= int(320 * scale * scale) and skin_frac >= 0.18 and cool_hair_frac < 0.15:
            continue
        rim_lums = lum[ry0:ry1, rx0:rx1][rim_vis]
        # 흰 가운 소매·흰 셔츠 카라의 밝은 천 명암(주변 중앙값 명도 >= 196, 투명 경계 비접촉) 보호
        if float(np.median(rim_lums)) >= 196.0 and not touches_trans:
            continue
        # 어두운 머리카락·옷깃·청진기 선화로 둘러싸였거나 외부 투명 여백과 맞닿은 진짜 흰 배경 포켓만 제거
        if touches_trans or float(np.percentile(rim_lums, 30)) <= 148.0:
            killed[sl] |= comp

    if np.any(killed):
        a[killed] = 0.0
        rim1 = ndimage.binary_dilation(killed, iterations=2) & (~killed) & (~deep_face) & (a > 0)
        fringe = rim1 & (cmin >= 188.0) & (sat <= 20.0) & ((sr - sb) <= 16.0)
        a[fringe] *= np.clip((236.0 - lum[fringe]) / 48.0, 0.0, 0.42)
        a[rim1 & (cmin >= 224.0) & (sat <= 14.0) & ((sr - sb) <= 16.0)] = 0.0
        unmix = rim1 & (a >= 16.0) & (a < 242.0)
        a01 = np.clip(a[unmix] / 255.0, 0.20, 1.0)
        r[unmix] = np.clip((sr[unmix] - (1.0 - a01) * 255.0) / a01, 0.0, 255.0)
        g[unmix] = np.clip((sg[unmix] - (1.0 - a01) * 255.0) / a01, 0.0, 255.0)
        b[unmix] = np.clip((sb[unmix] - (1.0 - a01) * 255.0) / a01, 0.0, 255.0)

    a[a < 16.0] = 0.0
    zero = a == 0.0
    r[zero] = 0.0
    g[zero] = 0.0
    b[zero] = 0.0
    out[:, :, 0] = np.clip(np.round(r), 0, 255).astype(np.uint8)
    out[:, :, 1] = np.clip(np.round(g), 0, 255).astype(np.uint8)
    out[:, :, 2] = np.clip(np.round(b), 0, 255).astype(np.uint8)
    out[:, :, 3] = np.clip(np.round(a), 0, 255).astype(np.uint8)
    return out


def sota_clean_one_shot(rgba, character_id=None, is_fresh_cutout=False):
    """
    RGBA 배열과 캐릭터 식별자(character_id)를 받아 내부 침식 복원(restore_interior_erosion) -> 캐릭터별 특화 보정 -> 갇힌 흰 배경 포켓 제거(remove_trapped_hair_pockets) -> 외곽 디프린징을 순서대로 수행 ->
    정리된 RGBA 배열 반환 -> 캐릭터 미식별 시 색상 프로파일로 자동 판별
    """
    if character_id is None:
        character_id = detect_character_id(rgba=rgba)
    if not is_fresh_cutout and (rgba[0, 0, 3] < 10) and (rgba[0, rgba.shape[1] - 1, 3] < 10):
        rgba = rgba.copy()
        rgba[rgba[:, :, 3] == 0, :3] = 0
    orig_rgb = rgba[:, :, :3].copy()
    out = recover_silver_hair_locks(rgba.copy(), character_id=character_id)
    out = restore_interior_erosion(out, orig_rgb=orig_rgb, character_id=character_id)
    out = repair_seoyeon_right_hair(out, character_id=character_id)
    out = repair_teacher_hair_holes(out, character_id=character_id)
    out = clean_dohoon_hospital_bg(out, character_id=character_id)
    out = clean_nurse_sprite_bg(out, character_id=character_id)
    out = remove_trapped_hair_pockets(out, orig_rgb=orig_rgb, character_id=character_id)
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
                if (skin_frac >= 0.65 and tw_area <= int(180 * (scale ** 2))) or (float(d_tw.min()) >= 2.0 * scale and skin_frac >= 0.18 and tw_area <= int(340 * (scale ** 2))):
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
            if op_area <= int(280 * (scale ** 2)) and float(warm_skin[y0_o:y1_o, x0_o:x1_o][rim_o].mean()) >= 0.10:
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


def clean_sprite_defringe(rgba):
    """
    RGBA 배열을 받아 다단계 연결 요소 필터링(alpha >= 21, 10, 1)으로 외곽 부유 노이즈 섬을 제거하고 EDT 내부 코어 색상 참조로 반투명 외곽선 흰끼를 역산 제거 ->
    외곽 할로와 노이즈 섬이 제거된 RGBA 배열 반환 -> 전경이 없으면 입력 그대로 반환
    """
    out = rgba.copy()
    h, w = out.shape[:2]
    scale = max(0.5, w / 1152.0)
    a = out[:, :, 3].astype(np.float32)
    if not np.any(a > 0):
        return out

    for thresh in (21, 10, 1):
        vis = a >= thresh
        lbl, num = ndimage.label(vis)
        if num > 1:
            sizes = ndimage.sum(vis, lbl, range(1, num + 1))
            main_lbl = int(np.argmax(sizes)) + 1
            a[vis & (lbl != main_lbl)] = 0.0

    r = out[:, :, 0].astype(np.float32)
    g = out[:, :, 1].astype(np.float32)
    b = out[:, :, 2].astype(np.float32)
    cmin = np.minimum(np.minimum(r, g), b)
    sat = np.maximum(np.maximum(r, g), b) - cmin

    core_mask = a >= 238.0
    if np.any(core_mask):
        dist_ext = ndimage.distance_transform_edt(a >= 20.0)
        _, (cy, cx) = ndimage.distance_transform_edt(~core_mask, return_indices=True)
        core_r, core_g, core_b = r[cy, cx], g[cy, cx], b[cy, cx]
        core_lum = 0.299 * core_r + 0.587 * core_g + 0.114 * core_b

        # 어두운 선화 코어(core_lum <= 145) 바깥 반투명 테두리에 섞인 순백색 배경 번짐만 알파 감쇠 및 코어 색상 클램핑
        rim_semi = (a > 0) & (a < 235.0) & (dist_ext <= 3.0 * scale)
        halo_rim = rim_semi & (cmin >= 215.0) & (sat <= 14.0) & (core_lum <= 145.0)
        if np.any(halo_rim):
            a[halo_rim] *= np.clip((250.0 - cmin[halo_rim]) / 42.0, 0.0, 0.65)
            still = halo_rim & (a >= 16.0)
            r[still] = np.minimum(r[still], core_r[still] + 24.0)
            g[still] = np.minimum(g[still], core_g[still] + 24.0)
            b[still] = np.minimum(b[still], core_b[still] + 24.0)

    a[a < 16.0] = 0.0
    zero = a == 0.0
    r[zero] = 0.0
    g[zero] = 0.0
    b[zero] = 0.0
    out[:, :, 0] = np.clip(np.round(r), 0, 255).astype(np.uint8)
    out[:, :, 1] = np.clip(np.round(g), 0, 255).astype(np.uint8)
    out[:, :, 2] = np.clip(np.round(b), 0, 255).astype(np.uint8)
    out[:, :, 3] = np.clip(np.round(a), 0, 255).astype(np.uint8)
    return out


def defringe_with_pymatting(rgba):
    """
    RGBA 배열을 받아 트라이맵(Trimap, 확정 전경·확정 배경·미확정 경계 3구간 분할 맵) 내부 코어를 알파 255로 고정 잠금하고 미확정 경계만 알파 매팅(Alpha Matting, 반투명 경계에서 전경 색과 투명도를 분리하는 연산) 다중 해상도 전경 역산(PyMatting estimate_foreground_ml) 수행 ->
    내부 구멍 0%와 외곽 흰끼 제거를 동시에 만족하는 RGBA 배열 반환 -> PyMatting 미설치 또는 수렴 실패 시 EDT 디프린징 결과 반환
    """
    out = clean_sprite_defringe(rgba)
    h, w = out.shape[:2]
    scale = max(1.0, w / 1152.0)
    a_u8 = out[:, :, 3]
    ys, xs = np.where(a_u8 > 0)
    if len(xs) == 0:
        return out

    solid_fg = a_u8 >= 220
    dist_in = ndimage.distance_transform_edt(solid_fg)
    locked_interior = dist_in >= (4.0 * scale)
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
        fg = np.clip(estimate_foreground_ml(crop_rgb, crop_a, n_small_iterations=8, n_big_iterations=3), 0.0, 1.0)
        fg_u8 = np.clip(np.round(fg * 255.0), 0.0, 255.0).astype(np.uint8)

        sub_unknown = unknown_zone[y0:y1, x0:x1]
        for c in range(3):
            ch = out[y0:y1, x0:x1, c]
            ch[sub_unknown] = np.minimum(ch[sub_unknown], fg_u8[:, :, c][sub_unknown])
            out[y0:y1, x0:x1, c] = ch
    except Exception as exc:
        print(f"[PyMatting 전경 역산 폴백] error={exc}", flush=True)

    # 매팅 후 발생할 수 있는 미세 분리 픽셀 최종 정리
    for thresh in (21, 10, 1):
        vis = out[:, :, 3] >= thresh
        lbl, num = ndimage.label(vis)
        if num > 1:
            sizes = ndimage.sum(vis, lbl, range(1, num + 1))
            main_lbl = int(np.argmax(sizes)) + 1
            out[:, :, 3][vis & (lbl != main_lbl)] = 0

    out[out[:, :, 3] == 0, :3] = 0
    return out


def trimap_closed_form_matting(rgba):
    """
    기존 호출부 호환용 래퍼로 RGBA 배열을 받아 defringe_with_pymatting 결과 그대로 반환
    """
    return defringe_with_pymatting(rgba)


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
    RGBA 배열을 받아 원샷 배경·구멍·포켓 정리(sota_clean_one_shot) -> 정수리 잘림 복원 -> EDT 디프린징 및 PyMatting 전경 역산 -> 기준 포즈 호환 시 얼굴 패치 또는 색감 정합 순서로 처리 ->
    원본 해상도가 그대로 유지된 최종 RGBA 배열 반환
    """
    in_shape = rgba.shape[:2]
    out = sota_clean_one_shot(rgba, character_id=character_id, is_fresh_cutout=is_fresh_cutout)
    if restore_crown:
        out, _ = restore_crown_if_needed(out)
    if use_pymatting:
        out = defringe_with_pymatting(out)
    else:
        out = clean_sprite_defringe(out)
    target_ref = style_ref_rgba if style_ref_rgba is not None else ref_rgba
    if patch_face_from_base and target_ref is not None and is_pose_compatible_with_base(out, target_ref):
        return patch_face_onto_base_ref(out, target_ref)
    if restore_outer_hair and target_ref is not None:
        out = restore_outer_hair_from_ref(out, target_ref)
    if harmonize_style and target_ref is not None:
        out = harmonize_style_to_ref(out, target_ref)
    if out.shape[:2] != in_shape:
        raise RuntimeError(f"[스프라이트 해상도 불일치 오류] expected={in_shape}, actual={out.shape[:2]}")
    return out


def export_chat_crops(sprite_rgba, output_dir, webp_quality=92):
    """
    정리된 스프라이트 RGBA 배열과 저장 폴더(output_dir)를 받아 상단 정사각형 영역(w x w)을 768x768로 리사이즈한 chat.png 및 chat.webp 저장 ->
    생성된 (chat_png_path, chat_webp_path) 튜플 반환 -> 저장 실패 시 IOError 전파
    """
    h, w = sprite_rgba.shape[:2]
    side = min(w, h)
    im_chat = Image.fromarray(sprite_rgba).crop((0, 0, side, side)).resize((768, 768), Image.Resampling.LANCZOS)
    chat_arr = np.array(im_chat)
    chat_arr[chat_arr[:, :, 3] == 0, :3] = 0
    im_chat = Image.fromarray(chat_arr)
    out_d = pathlib.Path(output_dir)
    out_d.mkdir(parents=True, exist_ok=True)
    chat_png = out_d / "chat.png"
    chat_webp = out_d / "chat.webp"
    im_chat.save(chat_png, format="PNG", optimize=True, compress_level=9)
    im_chat.save(chat_webp, format="WEBP", quality=webp_quality, method=6)
    return str(chat_png), str(chat_webp)


def process_sprite_file(input_path, output_path, use_rembg=True, use_sota_ensemble=True, use_pymatting=True, ref_path=None, verify_sheet_path=None, harmonize_style=False, restore_outer_hair=False, patch_face_from_base=False, character_id=None, target_size=None, emit_webp=False, emit_chat_crop=False):
    """
    입력 파일(input_path)과 출력 파일(output_path)을 받아 5단계 SOTA 배경 제거·내부 침식 복원·포켓 제거·PyMatting 디프린징·3중 배경 정량 검수를 수행하고 PNG(및 선택 시 WebP·768x768 chat 크롭) 저장 ->
    정량 검수 결과 딕셔너리 반환 -> 해상도 변형 발생 시 예외 발생
    """
    if character_id is None:
        character_id = detect_character_id(path_str=output_path or input_path)
    im = Image.open(input_path)
    if target_size is not None and im.size != tuple(target_size):
        im = im.resize(tuple(target_size), Image.Resampling.LANCZOS)
    expected_wh = im.size

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

    audit = audit_sprite_quality(rgba, expected_size=expected_wh)
    if not audit["resolution_ok"]:
        raise RuntimeError(f"[스프라이트 해상도 검증 실패] expected={expected_wh}, actual=({audit['width']}, {audit['height']})")

    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    im_out = Image.fromarray(rgba)
    im_out.save(output_path, format="PNG", optimize=True, compress_level=9)
    if emit_webp:
        webp_path = str(pathlib.Path(output_path).with_suffix(".webp"))
        im_out.save(webp_path, format="WEBP", quality=92, method=6)
    if emit_chat_crop:
        export_chat_crops(rgba, os.path.dirname(os.path.abspath(output_path)))
    if verify_sheet_path:
        generate_verification_sheet(rgba, verify_sheet_path, ref_rgba=prop_ref_rgba)
    if prop_ref_rgba is not None:
        passed, report = validate_proportion_against_ref(rgba, prop_ref_rgba)
        if not passed:
            print(f"[신체 비율 검증 경고] output_path={output_path}, head_scale_ratio={report['head_scale_ratio']:.3f}, cur_head={report['cur']['head_w_ratio']:.3f}, ref_head={report['ref']['head_w_ratio']:.3f}", flush=True)
    return audit


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Clean character sprite background using 5-stage SOTA pipeline, Trimap PyMatting, and 3-way verification")
    parser.add_argument("input", help="Input image file path")
    parser.add_argument("output", help="Output PNG file path")
    parser.add_argument("--no-rembg", action="store_true", help="Run sota_clean_one_shot on existing alpha without re-running rembg")
    parser.add_argument("--sota", action="store_true", help="Use SOTA alpha prediction and PyMatting foreground estimation")
    parser.add_argument("--no-pymatting", action="store_true", help="Skip PyMatting multi-level foreground estimation and use fast EDT defringing only")
    parser.add_argument("--trimap-matting", action="store_true", help="Lock solid interior (alpha=255) and apply PyMatting multi-level foreground estimation on unknown boundary zone")
    parser.add_argument("--character-id", default=None, help="Explicit character profile id (nurse, yuna, seoyeon, haeun, dain, teacher, minsu, dohoon)")
    parser.add_argument("--target-size", default=None, help="Optional WxH target canvas size before cutout (e.g. 1152x1536)")
    parser.add_argument("--webp", action="store_true", help="Also emit matching .webp file next to output PNG")
    parser.add_argument("--chat-crop", action="store_true", help="Also emit 768x768 chat.png and chat.webp in the output directory")
    parser.add_argument("--ref", default=None, help="Reference base sprite (smile/01/sprite.png) for proportion verification and base-mask face patching")
    parser.add_argument("--patch-face", action="store_true", help="Reuse 100%% of verified base sprite's outer mask/hair/body and patch only the inner facial expression when pose matches")
    parser.add_argument("--harmonize-style", action="store_true", help="Harmonize hair/uniform tone, linework darkness, and green chroma residue to match reference sprite without geometric warping")
    parser.add_argument("--restore-outer-hair", action="store_true", help="Restore over-eroded outer hair strands from reference sprite for matching base head poses")
    parser.add_argument("--verify-sheet", default=None, help="Optional output path for triple-background (#181824 + #FF00FF + #00FF00) verification sheet")
    args = parser.parse_args()
    parsed_size = None
    if args.target_size:
        w_s, h_s = args.target_size.lower().split("x")
        parsed_size = (int(w_s), int(h_s))
    process_sprite_file(
        args.input,
        args.output,
        use_rembg=not args.no_rembg,
        use_sota_ensemble=True,
        use_pymatting=(not args.no_pymatting) or args.trimap_matting or args.sota,
        ref_path=args.ref,
        verify_sheet_path=args.verify_sheet,
        harmonize_style=args.harmonize_style,
        restore_outer_hair=args.restore_outer_hair,
        patch_face_from_base=args.patch_face,
        character_id=args.character_id,
        target_size=parsed_size,
        emit_webp=args.webp,
        emit_chat_crop=args.chat_crop,
    )
