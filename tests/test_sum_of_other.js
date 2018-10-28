/* eslint-env mocha */

const expect = require('expect');
const assert = require('assert');
const { sumOfOther } = require('../src/sum_of_other');


describe('Function sumOfOther(array)', () => {
  describe('Input value is not an array', () => {
    const err = new TypeError('Argument must be array !!!');
    it('#1 should throw TypeError when input is "BOOM"', () => {
      expect(() => sumOfOther('BOOM')).toThrow(err);
    });
    it('#2 should throw TypeError when input is 77', () => {
      expect(() => sumOfOther(77)).toThrow(err);
    });
  });
  describe('Input value is an array of integers with length > 1', () => {
    it('#3 should return [8, 7, 6, 9] when the input is [2, 3, 4, 1]', () => {
      assert.deepEqual([8, 7, 6, 9], sumOfOther([2, 3, 4, 1]));
    });
    it('#4 should return [12, 10, 8] when the input is [3, 5, 7]', () => {
      assert.deepEqual([12, 10, 8], sumOfOther([3, 5, 7]));
    });
  });
  describe('Input value is an empty array', () => {
    it('#5 should return [] when the input is []', () => {
      assert.deepEqual([], sumOfOther([]));
    });
  });
  describe('Input value is an array of integers with length = 1', () => {
    it('#6 should return [undefined] when the input is [2]', () => {
      assert.deepEqual([undefined], sumOfOther([2]));
    });
    it('#7 should return [undefined] when the input is [628]', () => {
      assert.deepEqual([undefined], sumOfOther([628]));
    });
  });
});
