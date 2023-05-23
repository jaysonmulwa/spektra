"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.determinant = void 0;
function determinant(matrix) {
    let a = matrix[0][0];
    let b = matrix[0][1];
    let c = matrix[1][0];
    let d = matrix[1][1];
    return (a * b) - (c * d);
}
exports.determinant = determinant;
//# sourceMappingURL=determinant.js.map