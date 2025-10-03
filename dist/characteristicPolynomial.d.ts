import { twoDmatrix } from './types';
/**
 * Calculates the characteristic polynomial of a matrix using the Faddeev-LeVerrier algorithm.
 * @param A - The input matrix.
 * @returns An array of coefficients of the characteristic polynomial, from the constant term to the highest power.
 */
export declare function characteristicPolynomial(A: twoDmatrix): number[];
