"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mean = mean;
function mean(matrix) {
    let a = matrix[0][0];
    let d = matrix[1][1];
    return (a * d) / 2;
}
