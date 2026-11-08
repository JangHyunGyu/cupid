#!/usr/bin/env node
'use strict';

/**
 * Unified Character Expression Generator & SOTA Consistency Post-Processor
 *
 * Enforces:
 * 1. Base Reference Lock: Always uses `smile/01/sprite.png` (fallback `normal/01/sprite.png`)
 *    composited on pure #FFFFFF white background as `contextImages` reference (never `climax` or `flushed`).
 * 2. Prompt Helper Disabled: `promptHelper: { enable: false }` to prevent prompt bloat, red blotches, or facial distortion.
 * 3. Canonical Head/Body Proportion Lock: Injects character's base head-width ratio (~34.5%), eye-line (~14.2%),
 *    and chin-line (~24.5%) proportion constraints into the generation prompt.
 * 4. Automated SOTA Post-Processing (`scripts/clean-sprite-bg.py`):
 *    - Bria-RMBG / BiRefNet + ISNet-Anime core protection alpha segmentation
 *    - Mismatched alpha auto-recovery & tilted-head eye/iris opacity protection
 *    - Trapped hair & ear/jawline boundary pocket removal + EDT/PyMatting defringing
 *    - Top crown (y = 0) clipping restoration
 *    - Reference-guided C1-smooth isotropic head & upper-body proportion normalization (`normalize_proportion_to_ref`)
 *    - Mandatory dual-background (#181824 dark + #FF00FF neon magenta) verification sheet generation
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const { execFileSync } = require('child_process');

const BASE_URL = 'https://api.pixai.art/v1';
const DEFAULT_MODEL_ID = '2050048243034896798';

/**
 * 환경 변수 또는 바탕화면 키 파일에서 PixAI API 토큰을 읽어 반환
 */
function loadPixaiKey() {
  if (process.env.PIXAI_API_KEY) return process.env.PIXAI_API_KEY.trim();
  const desk = path.join(os.homedir(), 'Desktop');
  if (fs.existsSync(desk)) {
    const f = fs.readdirSync(desk).find((n) => /pixai/i.test(n) && n.endsWith('.txt'));
    if (f) {
      const t = fs.readFileSync(path.join(desk, f), 'utf8');
      const toks = t.match(/sk-[A-Za-z0-9._\-]{20,}/g) || t.match(/[A-Za-z0-9._\-]{20,}/g) || [];
      if (toks.length) return toks[toks.length - 1];
    }
  }
  throw new Error('PixAI API key not found in PIXAI_API_KEY or Desktop/*pixai*.txt');
}

/**
 * PixAI REST API 호출을 수행하고 JSON 응답을 반환
 */
async function pixaiRequest(method, url, body, key, extraHeaders = {}) {
  const headers = {
    Authorization: `Bearer ${key}`,
    ...(body && !Buffer.isBuffer(body) ? { 'Content-Type': 'application/json' } : {}),
    ...extraHeaders,
  };
  const res = await fetch(url, {
    method,
    headers,
    body: body ? (Buffer.isBuffer(body) ? body : JSON.stringify(body)) : undefined,
  });
  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    json = text;
  }
  if (!res.ok) {
    throw new Error(`${method} ${url} -> ${res.status} ${typeof json === 'string' ? json.slice(0, 400) : JSON.stringify(json).slice(0, 400)}`);
  }
  return json;
}

/**
 * 투명 배경 기준 스프라이트(smile/normal)를 순백색(#FFFFFF) 배경 PNG로 합성해 임시 경로 반환
 */
function buildWhiteBgReference(refSpritePath, tmpWhitePath) {
  const pyCode = `
import sys
from PIL import Image
im = Image.open(sys.argv[1]).convert("RGBA")
bg = Image.new("RGBA", im.size, (255, 255, 255, 255))
bg.alpha_composite(im)
bg.convert("RGB").save(sys.argv[2], format="PNG", optimize=True)
`;
  execFileSync('python', ['-c', pyCode, refSpritePath, tmpWhitePath], { stdio: 'inherit' });
  return tmpWhitePath;
}

/**
 * 캐릭터 기준 스프라이트(smile/01/sprite.png 우선, 없으면 normal/01/sprite.png) 경로를 탐색해 반환
 */
function resolveBaseReferenceSprite(memberExprDir, explicitRef) {
  if (explicitRef && fs.existsSync(explicitRef)) return path.resolve(explicitRef);
  for (const name of ['smile', 'normal']) {
    const cand = path.join(memberExprDir, name, '01', 'sprite.png');
    if (fs.existsSync(cand)) return cand;
  }
  throw new Error(`Could not find base reference sprite (smile/01/sprite.png or normal/01/sprite.png) under ${memberExprDir}`);
}

/**
 * 그림체·두부 크기·신체 비율 일관성 고정 프롬프트 접두사를 생성해 반환
 */
function buildConsistencyPromptPrefix() {
  return [
    'Keep the EXACT SAME character identity, camera distance, upright standing thigh-up framing, small compact head-to-body ratio (8-head-tall mature proportions with a small compact head ~34% of canvas width, long slender visible neck, wide toned shoulders, full upper-body volume, slender waist, and curvy hips/thighs), 2D Korean anime visual novel art style, crisp cel-shaded linework, coloring, and pure solid white background (#FFFFFF) from the reference image: solo, single character isolated on plain white background.',
    'STRICT PROPORTION & POSTURE LOCK: Match the exact head-to-shoulder scale and vertical alignment of the reference image (eye line at ~14% from top, chin tip at ~24.5% from top, shoulders at ~28-35% from top).',
    'NEVER enlarge the head, NEVER draw chibi or big-headed proportions, NEVER lean forward toward the camera (which causes foreshortened oversized heads), NEVER hunch the shoulders up to hide the neck, and NEVER crop the crown of the head at the top edge.',
  ].join(' ');
}

/**
 * 후처리 완료된 PNG로부터 sprite.webp, chat.png, chat.webp 파생 포맷을 원본 해상도 그대로 생성
 */
function exportDerivativeFormats(spritePngPath) {
  const dir = path.dirname(spritePngPath);
  const pyCode = `
import sys, os
from PIL import Image
p = sys.argv[1]
d = os.path.dirname(p)
im = Image.open(p).convert("RGBA")
im.save(os.path.join(d, "sprite.webp"), format="WEBP", lossless=True, quality=100, method=6)
chat_png = os.path.join(d, "chat.png")
chat_webp = os.path.join(d, "chat.webp")
im.save(chat_png, format="PNG", optimize=True, compress_level=9)
im.save(chat_webp, format="WEBP", lossless=True, quality=100, method=6)
`;
  execFileSync('python', ['-c', pyCode, spritePngPath], { stdio: 'inherit' });
}

async function main() {
  const args = process.argv.slice(2);
  const opts = {
    memberDir: null,
    expr: null,
    prompt: null,
    ref: null,
    inputRaw: null,
    outPng: null,
    verifySheet: null,
    width: 1152,
    height: 1536,
    modelId: DEFAULT_MODEL_ID,
  };

  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--member-dir') opts.memberDir = args[++i];
    else if (a === '--expr') opts.expr = args[++i];
    else if (a === '--prompt') opts.prompt = args[++i];
    else if (a === '--ref') opts.ref = args[++i];
    else if (a === '--input-raw') opts.inputRaw = args[++i];
    else if (a === '--out') opts.outPng = args[++i];
    else if (a === '--verify-sheet') opts.verifySheet = args[++i];
    else if (a === '--width') opts.width = Number(args[++i]);
    else if (a === '--height') opts.height = Number(args[++i]);
    else if (a === '--model-id') opts.modelId = args[++i];
  }

  const exprRoot = opts.memberDir ? path.join(path.resolve(opts.memberDir), 'expressions') : null;
  const refSprite = resolveBaseReferenceSprite(exprRoot || path.dirname(path.resolve(opts.ref || opts.outPng || '.')), opts.ref);
  const targetPng = opts.outPng
    ? path.resolve(opts.outPng)
    : path.join(exprRoot, opts.expr, '01', 'sprite.png');
  const verifySheet = opts.verifySheet
    ? path.resolve(opts.verifySheet)
    : path.join(path.dirname(targetPng), `verify_${opts.expr || 'sprite'}.jpg`);

  let rawSourcePath = opts.inputRaw ? path.resolve(opts.inputRaw) : null;

  if (!rawSourcePath) {
    if (!opts.prompt) {
      throw new Error('Either --input-raw <path> or --prompt <text> must be provided.');
    }
    const key = loadPixaiKey();
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'expr-gen-'));
    const whiteRefPath = buildWhiteBgReference(refSprite, path.join(tmpDir, 'ref_white.png'));
    const refBuf = fs.readFileSync(whiteRefPath);
    const uploadRes = await pixaiRequest('POST', `${BASE_URL}/media/upload`, refBuf, key, {
      'Content-Type': 'image/png',
      'Content-Length': String(refBuf.length),
    });
    const fullPrompt = `${buildConsistencyPromptPrefix()} ${opts.prompt}`;
    const created = await pixaiRequest('POST', `${BASE_URL}/task`, {
      parameters: {
        priority: 1000,
        modelId: opts.modelId,
        prompts: fullPrompt,
        contextImages: [uploadRes.id],
        width: opts.width,
        height: opts.height,
        batchSize: 1,
        inferenceProfile: 'flash',
        promptHelper: { enable: false },
        controlNets: [],
        isPrivate: false,
        enablePreview: false,
        hidePrompts: false,
      },
    }, key);

    let done = null;
    for (let pollIdx = 0; pollIdx < 120; pollIdx++) {
      await new Promise((r) => setTimeout(r, 3000));
      const t = await pixaiRequest('GET', `${BASE_URL}/task/${created.id}`, null, key);
      if (['completed', 'failed', 'cancelled'].includes(t.status)) {
        done = t;
        break;
      }
    }
    if (!done || done.status !== 'completed') {
      throw new Error(`PixAI task failed or timed out: ${done ? done.status : 'timeout'}`);
    }
    const mediaUrl = done.outputs?.mediaUrls?.[0];
    if (!mediaUrl) throw new Error('No output mediaUrl returned from PixAI task');
    const imgRes = await fetch(mediaUrl);
    const imgBuf = Buffer.from(await imgRes.arrayBuffer());
    rawSourcePath = path.join(tmpDir, 'raw_generated.png');
    fs.writeFileSync(rawSourcePath, imgBuf);
  }

  fs.mkdirSync(path.dirname(targetPng), { recursive: true });
  const cleanScript = path.join(__dirname, 'clean-sprite-bg.py');
  const cleanArgs = [
    cleanScript,
    rawSourcePath,
    targetPng,
    '--sota',
    '--ref',
    refSprite,
    '--harmonize-style',
    '--verify-sheet',
    verifySheet,
  ];
  if (args.includes('--restore-outer-hair')) {
    cleanArgs.push('--restore-outer-hair');
  }
  execFileSync('python', cleanArgs, { stdio: 'inherit' });

  exportDerivativeFormats(targetPng);
  console.log(`[OK] Processed & verified expression sprite: ${targetPng}`);
  console.log(`[OK] Dual-background verification sheet: ${verifySheet}`);
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err.message || err);
    process.exit(1);
  });
}

module.exports = {
  resolveBaseReferenceSprite,
  buildConsistencyPromptPrefix,
  exportDerivativeFormats,
};
