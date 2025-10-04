const sum = require('./sum');

describe('sum function', () => {
  test('adiciona 2 + 2 para ser 4', () => {
    expect(sum(2, 2)).toBe(4);
  });

  test('adiciona números negativos', () => {
    expect(sum(-1, -1)).toBe(-2);
  });
});
