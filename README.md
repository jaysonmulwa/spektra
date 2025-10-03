# Spektra
 spectral graph theory library

 In mathematics, spectral graph theory is the study of the properties of a graph in relationship to the characteristic polynomial, eigenvalues, and eigenvectors of matrices associated with the graph, such as its adjacency matrix or Laplacian matrix.


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
## Roadmap
- [x] 1. Adjacency matrix 
- [x] 2. Laplacian matrix.
- [x] 3. Characteristic polynomial
- [x] 4. Cospectrality

## Contribute

There are many ways to contribute to Spectra.
* Submit bugs and help us verify fixes as they are checked in.
* Review the source code changes.

## License

[MIT](LICENSE)