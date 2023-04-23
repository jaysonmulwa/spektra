// Works with 2by2 matrix only for now.
import { twoDmatrix } from "./types";
export function mean(matrix: twoDmatrix) : number {
  let a = matrix[0][0];
  let d = matrix[1][1];
  return (a * d) / 2;
}
