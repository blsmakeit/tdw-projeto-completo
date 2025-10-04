const sum = require('./sum');

test('adiciona 2 + 2 para ser 4', () => {
  expect(sum(2, 2)).toBe(4);
});