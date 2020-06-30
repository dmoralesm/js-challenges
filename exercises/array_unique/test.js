const array_unique = require('./');

test('array_unique function is defined', () => {
  expect(typeof array_unique).toEqual('function');
});

test('calculates unique elements for []', () => {
  expect(array_unique([])).toEqual([]);
});

test('calculates unique elements for [-1]', () => {
  expect(array_unique([-1])).toEqual([-1]);
});

test('calculates unique elements for [1]', () => {
  expect(array_unique([1])).toEqual([1]);
});

test('calculates unique elements for [5,5]', () => {
  expect(array_unique([5, 5])).toEqual([5]);
});

test('calculates unique elements for [1,1,2]', () => {
  expect(array_unique([1, 1, 2])).toEqual([1, 2]);
});

test('calculates unique elements for [0,1,-1,0,1,-1]', () => {
  expect(array_unique([0, 1, -1, 0, 1, -1])).toEqual([0, 1, -1]);
});
