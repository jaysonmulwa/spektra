# Spektra
 spectral graph theory library

 In mathematics, spectral graph theory is the study of the properties of a graph in relationship to the characteristic polynomial, eigenvalues, and eigenvectors of matrices associated with the graph, such as its adjacency matrix or Laplacian matrix.

 ## Limitations
 Galois theory


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
## Roadmap
1. Adjacency matrix 
2. Laplacian matrix.
3. Characteristic polynomial
4. Cospectrality

## Contribute

There are many ways to contribute to Spectra.
* Submit bugs and help us verify fixes as they are checked in.
* Review the source code changes.

## License

[MIT](LICENSE)