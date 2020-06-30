const _FUNCTION_NAME = require('./');

test('_FUNCTION_NAME function is defined', () => {
  expect(typeof _FUNCTION_NAME).toEqual('function');
});

test('calculates correct sum for 1+2', () => {
  expect(_FUNCTION_NAME(1, 2)).toEqual(3);
});
