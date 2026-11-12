const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const CLEAN_SCRIPT = path.resolve(__dirname, '..', 'scripts', 'clean-sprite-bg.py');

test('clean-sprite-bg --native-rgba preserves outer anti-aliased hair, fixes interior leaks/pinholes, and strips exterior dust', () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'native-rgba-test-'));
  try {
    const driverPath = path.join(tmpDir, 'run_check.py');
    const inPng = path.join(tmpDir, 'raw_native.png');
    const outPng = path.join(tmpDir, 'out', 'sprite.png');
    const verifySheet = path.join(tmpDir, 'out', 'verify_sprite.jpg');

    // 합성 네이티브 투명 스프라이트 생성 후 CLI 실행 및 정량 결과 JSON 출력
    const pyDriver = [
      'import importlib.util, json, os, subprocess, sys',
      'sys.dont_write_bytecode = True',
      'import numpy as np',
      'from PIL import Image',
      '',
      'script_path, in_png, out_png, verify_sheet = sys.argv[1:5]',
      'w, h = 576, 768',
      'rgba = np.zeros((h, w, 4), dtype=np.uint8)',
      '',
      '# 본체 실루엣(흰 의사 가운 포함) 채우기',
      'rgba[90:740, 170:406] = [246, 248, 252, 255]',
      '',
      '# 팔과 몸통 사이 실제 개방 배경 공간(alpha == 0, 2400px) 생성',
      'rgba[320:400, 195:225] = [0, 0, 0, 0]',
      '',
      '# 본체에 붙은 밝은 은발/흰색 반투명 외곽 잔머리(흰 배경 역산이 돌면 깎이거나 어두워지는 영역)',
      'rgba[140:160, 169] = [244, 246, 250, 96]',
      '',
      '# 가운 내부 밝은 부위의 반투명 알파 누수(alpha = 192)',
      'rgba[250:280, 270:310] = [250, 252, 255, 192]',
      '',
      '# PNG 인코더가 RGB를 0으로 비운 내부 닫힌 미세 핀홀(3x3, alpha = 0)',
      'rgba[460:463, 285:288] = [0, 0, 0, 0]',
      '',
      '# 허공 미세 고스트 노이즈(alpha = 8) 및 분리된 부유 노이즈 섬(5x5, alpha = 150)',
      'rgba[40:55, 30:45] = [255, 255, 255, 8]',
      'rgba[200:205, 480:485] = [220, 225, 235, 150]',
      '',
      'Image.fromarray(rgba).save(in_png, format="PNG")',
      'subprocess.run([',
      '    sys.executable, "-B", script_path, in_png, out_png,',
      '    "--native-rgba", "--webp", "--chat-crop", "--verify-sheet", verify_sheet',
      '], check=True)',
      '',
      'spec = importlib.util.spec_from_file_location("clean_sprite_bg", script_path)',
      'mod = importlib.util.module_from_spec(spec)',
      'spec.loader.exec_module(mod)',
      '',
      'out_rgba = np.array(Image.open(out_png).convert("RGBA"))',
      'audit = mod.audit_sprite_quality(out_rgba, expected_size=(w, h))',
      'hair_strand_px = out_rgba[150, 169].tolist()',
      'open_gap_max_a = int(out_rgba[330:390, 200:220, 3].max())',
      'leak_min_a = int(out_rgba[250:280, 270:310, 3].min())',
      'pinhole_min_a = int(out_rgba[460:463, 285:288, 3].min())',
      'pinhole_min_rgb = int(out_rgba[460:463, 285:288, :3].min())',
      'ghost_max_a = int(out_rgba[40:55, 30:45, 3].max())',
      'island_max_a = int(out_rgba[200:205, 480:485, 3].max())',
      'chat_size = list(Image.open(os.path.join(os.path.dirname(out_png), "chat.png")).size)',
      'print(json.dumps({',
      '    "audit": audit,',
      '    "hair_strand_px": hair_strand_px,',
      '    "open_gap_max_a": open_gap_max_a,',
      '    "leak_min_a": leak_min_a,',
      '    "pinhole_min_a": pinhole_min_a,',
      '    "pinhole_min_rgb": pinhole_min_rgb,',
      '    "ghost_max_a": ghost_max_a,',
      '    "island_max_a": island_max_a,',
      '    "chat_size": chat_size,',
      '}))',
    ].join('\n');

    fs.writeFileSync(driverPath, pyDriver, 'utf8');
    const stdout = execFileSync('python', [driverPath, CLEAN_SCRIPT, inPng, outPng, verifySheet], {
      encoding: 'utf8',
    });
    const lines = stdout.trim().split(/\r?\n/);
    const report = JSON.parse(lines[lines.length - 1]);

    assert.equal(report.audit.resolution_ok, true);
    assert.equal(report.audit.floating_islands, 0);
    assert.equal(report.audit.floating_islands_18, 0);
    assert.equal(report.audit.interior_holes, 0);
    assert.equal(report.audit.enclosed_pinholes, 0);

    // 외곽 반투명 은발/흰색 잔머리는 역산 왜곡 없이 원본 RGB·알파 그대로 유지
    assert.deepEqual(report.hair_strand_px, [244, 246, 250, 96]);
    // 실제 팔·몸통 개방 공간은 메우지 않고 투명 유지
    assert.equal(report.open_gap_max_a, 0);
    // 내부 반투명 누수와 닫힌 핀홀은 검은 점 없이 불투명 복원
    assert.equal(report.leak_min_a, 255);
    assert.equal(report.pinhole_min_a, 255);
    assert.ok(report.pinhole_min_rgb >= 240, `Expected inpainted white-coat RGB >= 240, got ${report.pinhole_min_rgb}`);
    // 외곽 먼지와 부유 섬은 완전 제거
    assert.equal(report.ghost_max_a, 0);
    assert.equal(report.island_max_a, 0);
    // 파생 파일 및 1:1 무손실 대비 시트 생성 검증
    assert.deepEqual(report.chat_size, [768, 768]);
    assert.equal(fs.existsSync(path.join(tmpDir, 'out', 'sprite.webp')), true);
    assert.equal(fs.existsSync(path.join(tmpDir, 'out', 'chat.webp')), true);
    assert.equal(fs.existsSync(path.join(tmpDir, 'out', 'verify_sprite_top_1to1.png')), true);
    assert.equal(fs.existsSync(path.join(tmpDir, 'out', 'verify_sprite_bot_1to1.png')), true);
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
});

test('clean-sprite-bg --native-rgba rejects solid opaque background input with clear Korean diagnostic', () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'native-rgba-opaque-'));
  try {
    const makeOpaque = path.join(tmpDir, 'make_opaque.py');
    const opaquePng = path.join(tmpDir, 'opaque.png');
    const outPng = path.join(tmpDir, 'out.png');
    fs.writeFileSync(
      makeOpaque,
      [
        'import sys, numpy as np',
        'from PIL import Image',
        'arr = np.full((128, 96, 4), 255, dtype=np.uint8)',
        'Image.fromarray(arr).save(sys.argv[1], format="PNG")',
      ].join('\n'),
      'utf8'
    );
    execFileSync('python', [makeOpaque, opaquePng]);

    assert.throws(
      () => {
        execFileSync('python', ['-B', CLEAN_SCRIPT, opaquePng, outPng, '--native-rgba'], {
          encoding: 'utf8',
          stdio: 'pipe',
        });
      },
      (err) => String(err.stderr || err.message).includes('[네이티브 투명 배경 검증 실패]')
    );
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
});
