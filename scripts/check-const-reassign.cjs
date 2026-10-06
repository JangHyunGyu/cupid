'use strict';
// Static guard: fails when a `const` binding is reassigned (a runtime TypeError that `node --check` misses).
// Uses the acorn parser bundled with Node (requires --expose-internals), so no extra dependency is needed.
const fs = require('node:fs');
const path = require('node:path');
let acorn;
try {
    acorn = require('internal/deps/acorn/acorn/dist/acorn');
} catch (error) {
    console.error('check-const-reassign: run with `node --expose-internals` (Node 18+) to load the bundled acorn parser.');
    process.exit(2);
}

const FUNCTION_TYPES = new Set(['FunctionDeclaration', 'FunctionExpression', 'ArrowFunctionExpression']);

function patternNames(pattern, out = []) {
    if (!pattern) return out;
    switch (pattern.type) {
        case 'Identifier': out.push(pattern); break;
        case 'ObjectPattern': pattern.properties.forEach(p => patternNames(p.type === 'RestElement' ? p.argument : p.value, out)); break;
        case 'ArrayPattern': pattern.elements.forEach(e => patternNames(e, out)); break;
        case 'RestElement': patternNames(pattern.argument, out); break;
        case 'AssignmentPattern': patternNames(pattern.left, out); break;
        default: break;
    }
    return out;
}

class Scope {
    constructor(parent, isFunction) { this.parent = parent; this.isFunction = isFunction; this.names = new Map(); }
    declare(name, kind) { this.names.set(name, kind); }
    functionScope() { let s = this; while (!s.isFunction && s.parent) s = s.parent; return s; }
    resolve(name) { for (let s = this; s; s = s.parent) if (s.names.has(name)) return s.names.get(name); return null; }
}

function hoistVars(node, scope) {
    if (!node || typeof node.type !== 'string') return;
    if (FUNCTION_TYPES.has(node.type)) return;
    if (node.type === 'VariableDeclaration' && node.kind === 'var') {
        node.declarations.forEach(d => patternNames(d.id).forEach(id => scope.declare(id.name, 'var')));
    }
    for (const key of Object.keys(node)) {
        const child = node[key];
        if (Array.isArray(child)) child.forEach(c => c && typeof c.type === 'string' && hoistVars(c, scope));
        else if (child && typeof child.type === 'string') hoistVars(child, scope);
    }
}

function declareLexical(statements, scope) {
    for (const stmt of statements || []) {
        const decl = stmt && (stmt.type === 'ExportNamedDeclaration' ? stmt.declaration : stmt);
        if (!decl) continue;
        if (decl.type === 'VariableDeclaration' && decl.kind !== 'var') {
            decl.declarations.forEach(d => patternNames(d.id).forEach(id => scope.declare(id.name, decl.kind)));
        } else if ((decl.type === 'FunctionDeclaration' || decl.type === 'ClassDeclaration') && decl.id) {
            scope.declare(decl.id.name, decl.type === 'ClassDeclaration' ? 'let' : 'var');
        }
    }
}

function findConstReassignments(source, file = '<source>') {
    let ast;
    const options = { ecmaVersion: 'latest', locations: true, allowHashBang: true, allowReturnOutsideFunction: true };
    try { ast = acorn.parse(source, { ...options, sourceType: 'script' }); }
    catch { ast = acorn.parse(source, { ...options, sourceType: 'module' }); }
    const problems = [];
    const report = (id, scope) => {
        if (scope.resolve(id.name) === 'const') problems.push({ file, line: id.loc.start.line, column: id.loc.start.column + 1, name: id.name });
    };

    function visit(node, scope) {
        if (!node || typeof node.type !== 'string') return;
        let inner = scope;
        if (node.type === 'Program') {
            inner = new Scope(null, true);
            hoistVars(node, inner);
            declareLexical(node.body, inner);
        } else if (FUNCTION_TYPES.has(node.type)) {
            inner = new Scope(scope, true);
            if (node.type === 'FunctionExpression' && node.id) inner.declare(node.id.name, 'var');
            node.params.forEach(p => patternNames(p).forEach(id => inner.declare(id.name, 'param')));
            if (node.body.type === 'BlockStatement') {
                hoistVars(node.body, inner);
                declareLexical(node.body.body, inner);
                node.params.forEach(p => visit(p, inner));
                node.body.body.forEach(s => visit(s, inner));
            } else {
                node.params.forEach(p => visit(p, inner));
                visit(node.body, inner);
            }
            return;
        } else if (node.type === 'BlockStatement' || node.type === 'StaticBlock') {
            inner = new Scope(scope, false);
            declareLexical(node.body, inner);
        } else if (node.type === 'SwitchStatement') {
            visit(node.discriminant, scope);
            inner = new Scope(scope, false);
            node.cases.forEach(c => declareLexical(c.consequent, inner));
            node.cases.forEach(c => visit(c, inner));
            return;
        } else if (node.type === 'ForStatement' || node.type === 'ForInStatement' || node.type === 'ForOfStatement') {
            inner = new Scope(scope, false);
            const head = node.type === 'ForStatement' ? node.init : node.left;
            if (head && head.type === 'VariableDeclaration' && head.kind !== 'var') {
                head.declarations.forEach(d => patternNames(d.id).forEach(id => inner.declare(id.name, head.kind)));
            } else if (head && node.type !== 'ForStatement' && head.type !== 'VariableDeclaration') {
                patternNames(head).forEach(id => report(id, inner));
            }
        } else if (node.type === 'CatchClause') {
            inner = new Scope(scope, false);
            patternNames(node.param).forEach(id => inner.declare(id.name, 'param'));
        } else if (node.type === 'ClassExpression' && node.id) {
            inner = new Scope(scope, false);
            inner.declare(node.id.name, 'const-class');
        } else if (node.type === 'AssignmentExpression') {
            patternNames(node.left).forEach(id => report(id, scope));
        } else if (node.type === 'UpdateExpression' && node.argument.type === 'Identifier') {
            report(node.argument, scope);
        }
        for (const key of Object.keys(node)) {
            if (key === 'loc' || key === 'start' || key === 'end') continue;
            const child = node[key];
            if (Array.isArray(child)) child.forEach(c => c && typeof c.type === 'string' && visit(c, inner));
            else if (child && typeof child.type === 'string') visit(child, inner);
        }
    }
    visit(ast, null);
    return problems;
}

module.exports = { findConstReassignments };

if (require.main === module) {
    const files = process.argv.slice(2);
    let failed = 0;
    for (const file of files) {
        const problems = findConstReassignments(fs.readFileSync(file, 'utf8'), path.relative(process.cwd(), file));
        for (const p of problems) {
            failed++;
            console.error(`${p.file}:${p.line}:${p.column} assignment to const '${p.name}'`);
        }
    }
    if (failed) process.exit(1);
    console.log(`check-const-reassign: ${files.length} files OK`);
}
