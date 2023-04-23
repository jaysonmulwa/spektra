import { twoDmatrix } from "./types";

export function determinant(matrix: twoDmatrix) : number {
    let a = matrix[0][0];
    let b = matrix[0][1];
    let c = matrix[1][0];
    let d = matrix[1][1];
    return (a*b) - (c*d);
}