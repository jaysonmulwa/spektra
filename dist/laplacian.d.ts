import { twoDmatrix } from './types';
/**
 * Calculates the Laplacian matrix of a simple graph.
 * L = D - A
 * @param edges - An array of edges, where each edge is a tuple of two vertex indices.
 * @param numVertices - The total number of vertices in the graph.
 * @returns The Laplacian matrix of the graph.
 */
export declare function laplacian(edges: [number, number][], numVertices: number): twoDmatrix;
