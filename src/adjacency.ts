import { twoDmatrix } from './types';

export function adjacency(edges: [number, number][], numVertices: number): twoDmatrix {
  const matrix: twoDmatrix = Array(numVertices).fill(0).map(() => Array(numVertices).fill(0));

  for (const [u, v] of edges) {
    matrix[u][v] = 1;
    matrix[v][u] = 1;
  }

  return matrix;
}