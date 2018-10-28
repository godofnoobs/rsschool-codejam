/* eslint-env mocha */

const assert = require('assert');
const { make } = require('../src/make');


describe('Function make()', () => {
  describe('make(...)(...)(...)(sum) where sum = (a, b) => a + b', () => {
    const sum = (a, b) => a + b;
    it('#1 make(15)(34, 21, 666)(41)(sum) should return 777', () => {
      assert.equal(make(15)(34, 21, 666)(41)(sum), 777);
    });
    it('#2 make(1, 2)(33)(sum) should return 36', () => {
      assert.equal(make(1, 2)(33)(sum), 36);
    });
    it('#3 make(1, 2)(1, 2, 3, 900)(300)(12)(-56)(sum) should return 1165', () => {
      assert.equal(make(1, 2)(1, 2, 3, 900)(300)(12)(-56)(sum), 1165);
    });
  });
  describe('make(...)(...)(...)(div) where div = (a, b) => a / b', () => {
    const div = (a, b) => a / b;
    it('#4 make(45)(3, 1)(5)(div) should return 3', () => {
      assert.equal(make(45)(3, 1)(5)(div), 3);
    });
    it('#5 make(45)(3, 1)(5)(0.1, 0.2)(div) should return 150', () => {
      assert.equal(make(45)(3, 1)(5)(0.1, 0.2)(div), 150);
    });
    it('#6 make(-45, 2)(3, 0)(5, 0.4)(div) should return -Infinity', () => {
      assert.equal(make(-45, 2)(3, 0)(5, 0.4)(div), -Infinity);
    });
  });
});
