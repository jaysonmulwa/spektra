"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var determinant_1 = require("./src/determinant");
var mean_1 = require("./src/mean");
var eigenvalues_1 = require("./src/eigenvalues");
var matrix = [[4, 1], [4, 1]];
console.log((0, determinant_1.determinant)(matrix), (0, mean_1.mean)(matrix), (0, eigenvalues_1.eigenvalues)(matrix));
