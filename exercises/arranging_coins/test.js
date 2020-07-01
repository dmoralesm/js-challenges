const arranging_coins = require('./');

test('arranging_coins function is defined', () => {
  expect(typeof arranging_coins).toEqual('function');
});

test('calculates correct rows with n = 0', () => {
  expect(arranging_coins(0)).toEqual(0);
});

test('calculates correct rows with n = 5', () => {
  expect(arranging_coins(5)).toEqual(2);
});

test('calculates correct rows with n = 6', () => {
  expect(arranging_coins(6)).toEqual(3);
});

test('calculates correct rows with n = 8', () => {
  expect(arranging_coins(8)).toEqual(3);
});

test('calculates correct rows with n = 100', () => {
  expect(arranging_coins(100)).toEqual(13);
});
