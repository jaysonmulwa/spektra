import { twoDmatrix } from './types';

/**
 * Calculates the trace of a square matrix.
 * @param A - The input matrix.
 * @returns The trace of the matrix.
 */
function trace(A: twoDmatrix): number {
  let t = 0;
  for (let i = 0; i < A.length; i++) {
    t += A[i][i];
  }
  return t;
}

/**
 * Multiplies two matrices.
 * @param A - The first matrix.
 * @param B - The second matrix.
 * @returns The product of the two matrices.
 */
function multiply(A: twoDmatrix, B: twoDmatrix): twoDmatrix {
  const n = A.length;
  const C: twoDmatrix = Array(n).fill(0).map(() => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        C[i][j] += A[i][k] * B[k][j];
      }
    }
  }
  return C;
}

/**
 * Adds two matrices.
 * @param A - The first matrix.
 * @param B - The second matrix.
 * @returns The sum of the two matrices.
 */
function add(A: twoDmatrix, B: twoDmatrix): twoDmatrix {
    const n = A.length;
    const C: twoDmatrix = Array(n).fill(0).map(() => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            C[i][j] = A[i][j] + B[i][j];
        }
    }
    return C;
}

/**
 * Multiplies a matrix by a scalar.
 * @param A - The input matrix.
 * @param s - The scalar value.
 * @returns The resulting matrix.
 */
function scalarMultiply(A: twoDmatrix, s: number): twoDmatrix {
    const n = A.length;
    const C: twoDmatrix = Array(n).fill(0).map(() => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            C[i][j] = A[i][j] * s;
        }
    }
    return C;
}


/**
 * Calculates the characteristic polynomial of a matrix using the Faddeev-LeVerrier algorithm.
 * @param A - The input matrix.
 * @returns An array of coefficients of the characteristic polynomial, from the constant term to the highest power.
 */
export function characteristicPolynomial(A: twoDmatrix): number[] {
  const n = A.length;
  if (n === 0) {
    return [1];
  }

  const p = new Array<number>(n + 1);
  p[n] = 1;

  let M = Array(n).fill(0).map(() => Array(n).fill(0));
  const I = Array(n).fill(0).map(() => Array(n).fill(0));
  for(let i = 0; i < n; i++) {
    I[i][i] = 1;
  }

  for (let k = 1; k <= n; k++) {
    const AM = multiply(A, M);
    const cI = scalarMultiply(I, p[n - k + 1]);
    const M_k = add(AM, cI);

    const AM_k = multiply(A, M_k);
    p[n-k] = -1/k * trace(AM_k);

    M = M_k;
  }

  return p;
}