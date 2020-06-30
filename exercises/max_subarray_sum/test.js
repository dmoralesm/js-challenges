const max_subarray_sum = require('./');

test('max_subarray_sum function is defined', () => {
  expect(typeof max_subarray_sum).toEqual('function');
});

test('calculates correct sum for [-1,2,4,-3,5,2,-5,2]', () => {
  expect(max_subarray_sum([-1, 2, 4, -3, 5, 2, -5, 2])).toEqual(10);
});

test('calculates correct sum for [-2, 1, -3, 4, -1, 2, 1, -5, 4]', () => {
  expect(max_subarray_sum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
});

test('calculates correct sum for [-1,1,2,3]', () => {
  expect(max_subarray_sum([-1, 1, 2, 3])).toEqual(6);
});

test('calculates correct sum for [5,3,-4]', () => {
  expect(max_subarray_sum([5, 3, -4])).toEqual(8);
});

test('calculates correct sum for [-1]', () => {
  expect(max_subarray_sum([-1])).toEqual(0);
});

test('calculates correct sum for [-1,-2]', () => {
  expect(max_subarray_sum([-1, -2])).toEqual(0);
});

test('calculates correct sum for [-1,2,-1,3]', () => {
  expect(max_subarray_sum([-1, 2, -1, 3])).toEqual(4);
});

test('calculates correct sum for [5]', () => {
  expect(max_subarray_sum([5])).toEqual(5);
});

test('calculates correct sum for [1,2,3,4,5]', () => {
  expect(max_subarray_sum([1, 2, 3, 4, 5])).toEqual(15);
});
