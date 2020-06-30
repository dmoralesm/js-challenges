const subset_sum = require('./');

test('subset_sum function is defined', () => {
  expect(typeof subset_sum).toEqual('function');
});

test('calculates correct subset for [1,4,5] and 6', () => {
  expect(subset_sum([1, 4, 5], 6)).toEqual([0, 2]);
});

test('calculates correct subset for [1,4,5] and 8', () => {
  expect(subset_sum([1, 4, 5], 8)).toEqual([]);
});

test('calculates correct subset for [1,4,5] and 5', () => {
  expect(subset_sum([1, 4, 5], 5)).toEqual([0, 1]);
});

test('calculates correct subset for [1,2,3] and 4', () => {
  expect(subset_sum([1, 2, 3], 4)).toEqual([0, 2]);
});

test('calculates correct subset for [1,2,3] and 5', () => {
  expect(subset_sum([1, 2, 3], 5)).toEqual([1, 2]);
});

test('calculates correct subset for [1,2,3] and 6', () => {
  expect(subset_sum([1, 2, 3], 6)).toEqual([]);
});

test('calculates correct subset for [2,1,8,9] and 10', () => {
  expect(subset_sum([2, 1, 8, 9], 10)).toEqual([0, 2]);
});

test('calculates correct subset for [3,2,8,9,4,6,7,12,11] and 20', () => {
  expect(subset_sum([3, 2, 8, 9, 4, 6, 7, 12, 11], 20)).toEqual([2, 7]);
});
