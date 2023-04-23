"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.determinant = void 0;
function determinant(matrix) {
    var a = matrix[0][0];
    var b = matrix[0][1];
    var c = matrix[1][0];
    var d = matrix[1][1];
    return (a * b) - (c * d);
}
exports.determinant = determinant;
