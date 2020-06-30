const correct_hours = require('./');

test('correct_hours function is defined', () => {
  expect(typeof correct_hours).toEqual('function');
});

test('calculates correct times for 2, 3, 3, 2', () => {
  expect(correct_hours(2, 3, 3, 2)).toEqual(3);
});

test('calculates correct times for 1, 8, 3, 2', () => {
  expect(correct_hours(1, 8, 3, 2)).toEqual(6);
});

test('calculates correct times for 6, 2, 4, 7', () => {
  expect(correct_hours(6, 2, 4, 7)).toEqual(0);
});

test('calculates correct times for 1, 1, 1, 2', () => {
  expect(correct_hours(1, 1, 1, 2)).toEqual(4);
});

test('calculates correct times for 1, 2, 3, 4', () => {
  expect(correct_hours(1, 2, 3, 4)).toEqual(10);
});

test('calculates correct times for 1, 0, 1, 0', () => {
  expect(correct_hours(1, 0, 1, 0)).toEqual(6);
});

test('calculates correct times for 0, 0, 0, 0', () => {
  expect(correct_hours(0, 0, 0, 0)).toEqual(1);
});

test('calculates correct times for -1, 2, -3, -4', () => {
  expect(correct_hours(-1, 2, -3, -4)).toEqual(0);
});
