"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eigenvalues = void 0;
var determinant_1 = require("./determinant");
var mean_1 = require("./mean");
function eigenvalues(matrix) {
    var m = (0, mean_1.mean)(matrix);
    var p = (0, determinant_1.determinant)(matrix);
    var rootPart = Math.sqrt(Math.pow(m, 2) - p);
    var lambdaOne = m + rootPart;
    var lambdaTwo = m - rootPart;
    return {
        lambdaOne: lambdaOne,
        lambdaTwo: lambdaTwo,
    };
}
exports.eigenvalues = eigenvalues;
