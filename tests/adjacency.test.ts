import { adjacency } from '../src/adjacency';

describe('adjacency', () => {
  it('should return the adjacency matrix for a given set of edges', () => {
    const edges: [number, number][] = [[0, 1], [0, 2], [1, 2]];
    const numVertices = 3;
    const expectedMatrix = [
      [0, 1, 1],
      [1, 0, 1],
      [1, 1, 0],
    ];
    expect(adjacency(edges, numVertices)).toEqual(expectedMatrix);
  });
});