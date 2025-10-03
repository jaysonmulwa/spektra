import { areCospectral } from '../src/cospectral';
import { adjacency } from '../src/adjacency';

describe('areCospectral', () => {
  it('should return true for cospectral graphs (C4 U K1 and K1,4)', () => {
    // C4 U K1 (a cycle of 4 vertices and an isolated vertex)
    const edges1: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 0]];
    const A1 = adjacency(edges1, 5);

    // K1,4 (star graph)
    const edges2: [number, number][] = [[0, 4], [1, 4], [2, 4], [3, 4]];
    const A2 = adjacency(edges2, 5);

    expect(areCospectral(A1, A2)).toBe(true);
  });

  it('should return false for non-cospectral graphs', () => {
    const edges1: [number, number][] = [[0, 1], [1, 2]];
    const A1 = adjacency(edges1, 3);

    const edges2: [number, number][] = [[0, 1], [0, 2], [1, 2]];
    const A2 = adjacency(edges2, 3);

    expect(areCospectral(A1, A2)).toBe(false);
  });

  it('should return false for graphs with different numbers of vertices', () => {
    const A1 = [[0, 1], [1, 0]];
    const A2 = [[0, 1, 0], [1, 0, 1], [0, 1, 0]];
    expect(areCospectral(A1, A2)).toBe(false);
  });

    it('should return true for identical graphs', () => {
        const edges: [number, number][] = [[0, 1], [1, 2], [2, 0]];
        const A1 = adjacency(edges, 3);
        const A2 = adjacency(edges, 3);

        expect(areCospectral(A1, A2)).toBe(true);
    });
});