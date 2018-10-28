/* eslint-env mocha */

const assert = require('assert');
const { recursion } = require('../src/recursion');


describe('Function recursion()', () => {
  it('#1 recursion(tree1) should return []', () => {
    const tree1 = {};
    assert.deepEqual([], recursion(tree1));
  });
  it('#2 recursion(tree2) should return [[100], [90, 130]]', () => {
    const tree2 = { value: 100, left: { value: 90 }, right: { value: 130 } };
    assert.deepEqual([[100], [90, 130]], recursion(tree2));
  });
  it('#3 recursion(tree3) should return [[100], [90, 120], [70, 99, 110, 130]]', () => {
    const tree3 = {
      value: 100,
      left: { value: 90, left: { value: 70 }, right: { value: 99 } },
      right: { value: 120, left: { value: 110 }, right: { value: 130 } },
    };
    assert.deepEqual([[100], [90, 120], [70, 99, 110, 130]], recursion(tree3));
  });
  it('#4 recursion(tree4) should return [[100], [90, 120], [70, 99, 110, 130], [85, 128, 180], [160, 245]]', () => {
    const tree4 = {
      value: 100,
      left: { value: 90, left: { value: 70, right: { value: 85 } }, right: { value: 99 } },
      right: {
        value: 120,
        left: { value: 110 },
        right: {
          value: 130,
          left: { value: 128 },
          right: {
            value: 180,
            left: { value: 160 },
            right: { value: 245 },
          },
        },
      },
    };
    assert.deepEqual([[100], [90, 120], [70, 99, 110, 130], [85, 128, 180], [160, 245]],
      recursion(tree4));
  });
});
