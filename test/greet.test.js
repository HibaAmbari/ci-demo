const test = require('node:test');
const assert = require('node:assert');
const { greet } = require('../src/greet');

test('greet says hello to the name', () => {
  assert.strictEqual(greet('Hiba'), 'Hello, Hiba!');
});
