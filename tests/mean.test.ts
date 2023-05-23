const { eigenvalues, mean, determinant } = require('./../dist/index.js');
const { describe, expect, test } = require('@jest/globals');

describe('mean property test', () => {
    test('get mean', () => {
        const A = [[1, 2], [2, 1]];
        const response = mean(A);
        expect(response).toBe(0.5);
    });
});

describe('eigen value tests', () => {
    test('get 2d array', () =>{
        const A = [[1, 2], [2, 1]];
        const response = eigenvalues(A);
        expect(response).toEqual([1, 0]);
    });
});

describe('determinant tests', () => {
    test('2by2 array determinant', () =>{
        const A = [[1, 2], [2, 1]];
        const response = determinant(A);
        expect(response).toBe(0);
    });
});