"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mean = void 0;
function mean(matrix) {
    var a = matrix[0][0];
    var d = matrix[1][1];
    return (a * d) / 2;
}
exports.mean = mean;
