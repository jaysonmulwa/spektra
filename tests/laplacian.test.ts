import { laplacian } from '../src/laplacian';

describe('laplacian', () => {
  it('should calculate the Laplacian matrix of a simple graph', () => {
    const edges: [number, number][] = [[0, 1], [1, 2]];
    const numVertices = 3;
    const expectedLaplacian = [
      [1, -1, 0],
      [-1, 2, -1],
      [0, -1, 1],
    ];
    expect(laplacian(edges, numVertices)).toEqual(expectedLaplacian);
  });

  it('should return a matrix of zeros for a graph with no edges', () => {
    const edges: [number, number][] = [];
    const numVertices = 3;
    const expectedLaplacian = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(laplacian(edges, numVertices)).toEqual(expectedLaplacian);
  });

  it('should handle a complete graph', () => {
    const edges: [number, number][] = [[0, 1], [0, 2], [1, 2]];
    const numVertices = 3;
    const expectedLaplacian = [
      [2, -1, -1],
      [-1, 2, -1],
      [-1, -1, 2],
    ];
    expect(laplacian(edges, numVertices)).toEqual(expectedLaplacian);
  });

  it('should handle a disconnected graph', () => {
    const edges: [number, number][] = [[0, 1]];
    const numVertices = 3;
    const expectedLaplacian = [
        [1, -1, 0],
        [-1, 1, 0],
        [0, 0, 0],
    ];
    expect(laplacian(edges, numVertices)).toEqual(expectedLaplacian);
  });
});