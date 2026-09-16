'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const config = fs.readFileSync(path.join(root, 'assets/js/modules/config.js'), 'utf8');
const ui = fs.readFileSync(path.join(root, 'assets/js/modules/UIManager.js'), 'utf8');

test('cupid keyboard offset uses visual viewport shrink and fullscreen virtual keyboard height', () => {
  assert.match(config, /fullscreen \? virtualKeyboardHeight/);
  assert.doesNotMatch(ui, /archer-immersive-keyboard/);
});
