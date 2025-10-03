import { characteristicPolynomial } from '../src/characteristicPolynomial';

describe('characteristicPolynomial', () => {
  it('should calculate the characteristic polynomial of a 2x2 matrix', () => {
    const A = [[1, 2], [3, 4]];
    // Expected: λ^2 - 5λ - 2, so coefficients are [-2, -5, 1]
    const expected = [-2, -5, 1];
    const result = characteristicPolynomial(A);
    result.forEach((value, index) => {
        expect(value).toBeCloseTo(expected[index]);
    });
  });

  it('should calculate the characteristic polynomial of a 3x3 matrix', () => {
    const A = [[1, 0, 0], [0, 2, 0], [0, 0, 3]];
    // Expected: (λ-1)(λ-2)(λ-3) = λ^3 - 6λ^2 + 11λ - 6, so coefficients are [-6, 11, -6, 1]
    const expected = [-6, 11, -6, 1];
    const result = characteristicPolynomial(A);
    result.forEach((value, index) => {
        expect(value).toBeCloseTo(expected[index]);
    });
  });

  it('should handle an empty matrix', () => {
    const A: number[][] = [];
    expect(characteristicPolynomial(A)).toEqual([1]);
  });

  it('should calculate the characteristic polynomial of an identity matrix', () => {
    const A = [[1, 0], [0, 1]];
    // Expected: (λ-1)^2 = λ^2 - 2λ + 1, so coefficients are [1, -2, 1]
    const expected = [1, -2, 1];
    const result = characteristicPolynomial(A);
    result.forEach((value, index) => {
        expect(value).toBeCloseTo(expected[index]);
    });
  });
});