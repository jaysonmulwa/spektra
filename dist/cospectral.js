"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areCospectral = areCospectral;
const characteristicPolynomial_1 = require("./characteristicPolynomial");
/**
 * Checks if two graphs are cospectral.
 * Two graphs are cospectral if their adjacency matrices have the same characteristic polynomial.
 * @param A1 - The adjacency matrix of the first graph.
 * @param A2 - The adjacency matrix of the second graph.
 * @returns True if the graphs are cospectral, false otherwise.
 */
function areCospectral(A1, A2) {
    if (A1.length !== A2.length) {
        return false;
    }
    const p1 = (0, characteristicPolynomial_1.characteristicPolynomial)(A1);
    const p2 = (0, characteristicPolynomial_1.characteristicPolynomial)(A2);
    if (p1.length !== p2.length) {
        return false;
    }
    for (let i = 0; i < p1.length; i++) {
        // Using a tolerance for floating point comparisons
        if (Math.abs(p1[i] - p2[i]) > 1e-9) {
            return false;
        }
    }
    return true;
}
