import { twoDmatrix } from './types';
/**
 * Checks if two graphs are cospectral.
 * Two graphs are cospectral if their adjacency matrices have the same characteristic polynomial.
 * @param A1 - The adjacency matrix of the first graph.
 * @param A2 - The adjacency matrix of the second graph.
 * @returns True if the graphs are cospectral, false otherwise.
 */
export declare function areCospectral(A1: twoDmatrix, A2: twoDmatrix): boolean;
