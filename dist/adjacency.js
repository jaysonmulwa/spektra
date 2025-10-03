"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjacency = adjacency;
function adjacency(edges, numVertices) {
    const matrix = Array(numVertices).fill(0).map(() => Array(numVertices).fill(0));
    for (const [u, v] of edges) {
        matrix[u][v] = 1;
        matrix[v][u] = 1;
    }
    return matrix;
}
