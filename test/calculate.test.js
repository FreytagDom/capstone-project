import handleInsulinUnit from '../utils/calculate';

describe(handleInsulinUnit, () => {
  test(handleInsulinUnit, () => {
    expect(handleInsulinUnit(236, 65, 12, 10)).toBe('18.9');
  });
  test(handleInsulinUnit, () => {
    expect(handleInsulinUnit(220, 55, 13, 12)).toBe('14.1');
  });
  test(handleInsulinUnit, () => {
    expect(handleInsulinUnit(180, 40, 14, 15)).toBe('8.1');
  });
});
