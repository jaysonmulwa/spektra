import { determinant } from '../src/determinant';

describe('determinant', () => {
  it('should return the determinant of a 2x2 matrix', () => {
    const A = [[1, 2], [3, 4]];
    expect(determinant(A)).toBe(-2);
  });
});