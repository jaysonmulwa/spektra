"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eigenvalues = void 0;
const determinant_1 = require("./determinant");
const mean_1 = require("./mean");
function eigenvalues(matrix) {
    const m = (0, mean_1.mean)(matrix);
    const p = (0, determinant_1.determinant)(matrix);
    const rootPart = Math.sqrt(Math.pow(m, 2) - p);
    const lambdaOne = m + rootPart;
    const lambdaTwo = m - rootPart;
    return {
        lambdaOne: lambdaOne,
        lambdaTwo: lambdaTwo,
    };
}
exports.eigenvalues = eigenvalues;
