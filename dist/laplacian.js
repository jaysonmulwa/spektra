"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.laplacian = laplacian;
const adjacency_1 = require("./adjacency");
/**
 * Calculates the degree matrix of a graph.
 * @param edges - An array of edges, where each edge is a tuple of two vertex indices.
 * @param numVertices - The total number of vertices in the graph.
 * @returns The degree matrix of the graph.
 */
function degreeMatrix(edges, numVertices) {
    const matrix = Array(numVertices).fill(0).map(() => Array(numVertices).fill(0));
    const degrees = Array(numVertices).fill(0);
    for (const [u, v] of edges) {
        degrees[u]++;
        degrees[v]++;
    }
    for (let i = 0; i < numVertices; i++) {
        matrix[i][i] = degrees[i];
    }
    return matrix;
}
/**
 * Calculates the Laplacian matrix of a simple graph.
 * L = D - A
 * @param edges - An array of edges, where each edge is a tuple of two vertex indices.
 * @param numVertices - The total number of vertices in the graph.
 * @returns The Laplacian matrix of the graph.
 */
function laplacian(edges, numVertices) {
    const D = degreeMatrix(edges, numVertices);
    const A = (0, adjacency_1.adjacency)(edges, numVertices);
    const L = Array(numVertices).fill(0).map(() => Array(numVertices).fill(0));
    for (let i = 0; i < numVertices; i++) {
        for (let j = 0; j < numVertices; j++) {
            L[i][j] = D[i][j] - A[i][j];
        }
    }
    return L;
}
