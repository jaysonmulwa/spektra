import { determinant } from "./src/determinant";
import { mean } from "./src/mean";
import { eigenvalues } from "./src/eigenvalues";
const matrix = [[4, 1], [4, 1]];
console.log(determinant(matrix), mean(matrix), eigenvalues(matrix));