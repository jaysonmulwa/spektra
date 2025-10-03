# Spektra
spectral graph theory library

In mathematics, spectral graph theory is the study of the properties of a graph in relationship to the characteristic polynomial, eigenvalues, and eigenvectors of matrices associated with the graph, such as its adjacency matrix or Laplacian matrix.

Spectral graph theory is central to many modern applications such as clustering algorithms, graph partitioning, network robustness analysis, image segmentation, and even emerging fields like quantum computing. The development of algorithms that leverage spectral properties allows for efficient handling of massive graphs where traditional combinatorial methods are insufficient.

## Installation

```console
$ npm install spektra
```

## Features
 1. Eigenvalues
    ```js
    const { eigenvalues } = require('spectra');
    const A = [[1, 2], [2, 1]];
    const eig = eigenvalues(A);
    console.log(eig);
    // [3, -1]
    ```

 2. Determinant
    ```js
    const { determinant } = require('spectra');
    const A = [[1, 2], [2, 1]];
    const det = determinant(A);
    console.log(det);
    // -3
    ```
 3. Mean
    ```js
    const { mean } = require('spectra');
    const A = [[1, 2], [2, 1]];
    const m = mean(A);
    console.log(m);
    // 1.5
    ```
 4. Laplacian Matrix
    ```js
    const { laplacian } = require('spectra');
    const edges = [[0, 1], [1, 2]];
    const numVertices = 3;
    const L = laplacian(edges, numVertices);
    console.log(L);
    // [[1, -1, 0], [-1, 2, -1], [0, -1, 1]]
    ```
 5. Characteristic Polynomial
    ```js
    const { characteristicPolynomial } = require('spectra');
    const A = [[1, 2], [3, 4]];
    const p = characteristicPolynomial(A);
    console.log(p);
    // [-2, -5, 1]  (represents λ^2 - 5λ - 2)
    ```
 6. Cospectrality
    ```js
    const { areCospectral, adjacency } = require('spectra');
    const edges1 = [[0, 1], [1, 2], [2, 3], [3, 0]]; // C4
    const A1 = adjacency(edges1, 5); // C4 U K1
    const edges2 = [[0, 4], [1, 4], [2, 4], [3, 4]]; // K1,4 (star graph)
    const A2 = adjacency(edges2, 5);
    const cospectral = areCospectral(A1, A2);
    console.log(cospectral);
    // true
    ```

## Roadmap - Completed

| Item | Status |
|---|---:|
| Adjacency matrix | Completed |
| Laplacian matrix | Completed |
| Characteristic polynomial | Completed |
| Cospectrality | Completed |

## Roadmap - Spectral Properties and Algorithms

| Function / Feature | Description | Relevance to Current Roadmap |
|---|---|---|
| Eigenvalues and Eigenvectors | Compute eigenvalues and eigenvectors for adjacency and Laplacian matrices. | Essential for characteristic polynomial and cospectrality. |
| Spectral Radius | Largest absolute eigenvalue of the adjacency matrix. | Derived from eigenvalue computation; useful in network analysis. |
| Spectral Clustering Utility | Utilities using Laplacian eigenvectors for graph partitioning (e.g., Fiedler vector). | Practical application of Laplacian spectrum. |
| Matching Polynomial | Polynomial related to number of matchings of various sizes. | Similar role to characteristic polynomial in revealing structure. |


## Roadmap - Utilities and Input/Output
| Function / Feature | Description | Relevance to Current Roadmap |
|---|---|---|
| Graph Input/Output (e.g., GML, DOT, JSON) | Standardized methods to load a graph from and save a graph to common formats. | Crucial for real-world usability. |
| Graph Generation (e.g., specific graph types) | Functions to generate common graph structures like complete graphs (K_n), cycles (C_n), paths (P_n), or basic random graphs (Erdos-Renyi). | Provides test cases and ready-to-use examples for the spectral functions. |
| Graph Isomorphism Check | Determine if two graphs are structurally identical (potentially using spectral methods as a quick check, though not a complete solution). | |

## Contribute

| Ways to help | Details |
|---|---|
| Report bugs | Submit issues and help verify fixes. |
| Review code | Review pull requests and changes in source. |

## License

| Type |
|---|
| [MIT](LICENSE) |
