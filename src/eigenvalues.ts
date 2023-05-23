import { determinant } from "./determinant";
import { mean } from "./mean";
import { twoDmatrix, array2params } from "./types";

export function eigenvalues(matrix: twoDmatrix) : array2params {
  const m = mean(matrix);
  const p = determinant(matrix);
  const rootPart = Math.sqrt(Math.pow(m, 2) - p);
  const lambdaOne = m + rootPart;
  const lambdaTwo = m - rootPart;
  return [lambdaOne, lambdaTwo];
}
