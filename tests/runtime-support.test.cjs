'use strict';
const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

test('all localized entry pages run the compatibility guard before application scripts', () => {
    const config = JSON.parse(read('config/project.json'));
    for (const page of config.localizedPages) for (const lang of config.languages) {
        const html = read(`${page}${lang === 'ko' ? '' : '-' + lang}.html`);
        const scripts = [...html.matchAll(/<script[^>]*src="([^"]+)"/g)];
        assert.equal(scripts[0][1], `assets/js/runtime-support.js?v=${config.assetVersion}`);
    }
});

test('unsupported browsers do not load the game or gallery runtime', () => {
    for (const file of ['game-loader.js', 'gallery-loader.js']) {
        let writes = 0;
        const window = { CupidRuntimeSupport: { supported: false }, __cupidErrorReporterInstalled: true };
        vm.runInNewContext(read(`assets/js/loaders/${file}`), {
            window, document: { write() { writes++; }, addEventListener() {} }
        });
        assert.equal(writes, 0);
        assert.equal(window.gameScriptsLoaded, undefined);
    }
});

function stripCommentsStringsAndRegex(code) {
    let out = '';
    let i = 0;
    const len = code.length;
    const exprStack = [];
    while (i < len) {
        const ch = code[i];
        const next = code[i + 1];
        if (ch === '/' && next === '/') {
            while (i < len && code[i] !== '\n') i++;
            continue;
        }
        if (ch === '/' && next === '*') {
            i += 2;
            while (i < len && !(code[i] === '*' && code[i + 1] === '/')) i++;
            i += 2;
            continue;
        }
        if (ch === "'" || ch === '"') {
            const q = ch;
            out += '""';
            i++;
            while (i < len && code[i] !== q) {
                if (code[i] === '\\') i += 2;
                else i++;
            }
            i++;
            continue;
        }
        if (ch === '`') {
            out += ' ';
            i++;
            while (i < len && code[i] !== '`') {
                if (code[i] === '\\') { i += 2; continue; }
                if (code[i] === '$' && code[i + 1] === '{') {
                    exprStack.push({ type: 'template', depth: 1 });
                    i += 2;
                    break;
                }
                i++;
            }
            if (code[i - 1] !== '{' && code[i] === '`') i++;
            continue;
        }
        if (exprStack.length && ch === '{') {
            exprStack[exprStack.length - 1].depth++;
        } else if (exprStack.length && ch === '}') {
            const top = exprStack[exprStack.length - 1];
            top.depth--;
            if (top.depth === 0) {
                exprStack.pop();
                out += ' ';
                i++;
                while (i < len && code[i] !== '`') {
                    if (code[i] === '\\') { i += 2; continue; }
                    if (code[i] === '$' && code[i + 1] === '{') {
                        exprStack.push({ type: 'template', depth: 1 });
                        i += 2;
                        break;
                    }
                    i++;
                }
                if (code[i] === '`') i++;
                continue;
            }
        }
        if (ch === '/') {
            const prev = out.trimEnd().slice(-1);
            const prevWord = (out.match(/([A-Za-z0-9_$]+)\s*$/) || [])[1] || '';
            const regexPrev = !prev || '([=,:;!&|?{}~^+-*%<>'.includes(prev) || ['return', 'case', 'throw', 'typeof', 'void', 'delete', 'await', 'yield', 'in', 'of', 'new'].includes(prevWord);
            if (regexPrev) {
                out += '/_/';
                i++;
                let inClass = false;
                while (i < len) {
                    if (code[i] === '\\') { i += 2; continue; }
                    if (code[i] === '[') inClass = true;
                    else if (code[i] === ']') inClass = false;
                    else if (code[i] === '/' && !inClass) { i++; break; }
                    i++;
                }
                while (i < len && /[a-z]/i.test(code[i])) i++;
                continue;
            }
        }
        out += ch;
        i++;
    }
    return out;
}

test('entry scripts and deployed browser scripts avoid iOS 12 unsupported syntax', () => {
    for (const file of ['runtime-support.js', 'modal-accessibility.js', 'loaders/game-loader.js', 'loaders/gallery-loader.js']) {
        const source = read('assets/js/' + file);
        assert.doesNotMatch(source, /\?\.|\?\?/);
        new vm.Script(source);
    }
    const checkList = ['service-worker.js'];
    function collectJs(dir) {
        for (const ent of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
            const rel = dir + '/' + ent.name;
            if (ent.isDirectory()) collectJs(rel);
            else if (ent.name.endsWith('.js') && !rel.startsWith('assets/js/scenario/extract')) checkList.push(rel);
        }
    }
    collectJs('assets/js');
    for (const rel of checkList) {
        const source = read(rel);
        new vm.Script(source);
        const stripped = stripCommentsStringsAndRegex(source);
        assert.doesNotMatch(stripped, /\?\.(?![0-9])|\?\?|\|\|=|&&=|catch\s*\{/, rel);
        assert.doesNotMatch(source, /\(\?<[=!]/, rel);
    }
});

test('modern and iOS 12 browsers are accepted while missing ES2017/fetch runtimes are rejected', () => {
    const source = read('assets/js/runtime-support.js');
    const supported = { window: {} };
    vm.runInNewContext(source, supported);
    assert.equal(supported.window.CupidRuntimeSupport.supported, true);

    const legacyIos12 = {
        window: {},
        navigator: { userAgent: 'Mozilla/5.0 (iPad; CPU OS 12_5_7 like Mac OS X) Safari/604.1' },
        fetch: async () => ({})
    };
    vm.runInNewContext([
        'delete Object.hasOwn; delete Object.fromEntries; delete Array.prototype.at; delete String.prototype.at;',
        'delete Array.prototype.findLast; delete Array.prototype.findLastIndex;',
        'delete String.prototype.replaceAll; delete String.prototype.matchAll; delete Promise.allSettled; delete Promise.any;',
        source,
        'window.polyCheck = {',
        '  hasOwn: Object.hasOwn({ ok: 1 }, "ok"),',
        '  arrAt: [4, 5, 6].at(-1),',
        '  strAt: "cupid".at(-1),',
        '  replaceAll: "a-b-c".replaceAll("-", "_"),',
        '  fromEntries: JSON.stringify(Object.fromEntries([["x", 2]])),',
        '  allSettled: typeof Promise.allSettled',
        '};'
    ].join('\n'), legacyIos12);
    assert.equal(legacyIos12.window.CupidRuntimeSupport.supported, true);
    assert.deepEqual(JSON.parse(JSON.stringify(legacyIos12.window.polyCheck)), {
        hasOwn: true,
        arrAt: 6,
        strAt: 'd',
        replaceAll: 'a_b_c',
        fromEntries: '{"x":2}',
        allSettled: 'function'
    });

    let listener;
    const unsupported = { window: {}, document: { readyState: 'loading', addEventListener: (event, fn) => { listener = fn; } } };
    vm.runInNewContext('Object.values = undefined;\n' + source, unsupported);
    assert.equal(unsupported.window.CupidRuntimeSupport.supported, false);
    assert.equal(typeof listener, 'function');
});

test('reverse array search helpers are polyfilled for older WebViews', () => {
    const source = read('assets/js/runtime-support.js');
    const context = { window: {} };
    vm.runInNewContext(`delete Array.prototype.findLastIndex; delete Array.prototype.findLast;\n${source}\n` +
        'window.result = [' +
        '[1, 2, 3, 2].findLastIndex(value => value === 2),' +
        '[1, 2, 3].findLastIndex(value => value === 9),' +
        '[1, 2, 3, 2].findLast(value => value < 3),' +
        '[].findLast(value => true),' +
        'Object.keys([1, 2, 3])' +
        '];', context);
    assert.deepEqual(JSON.parse(JSON.stringify(context.window.result)), [3, -1, 2, null, ['0', '1', '2']]);
});
