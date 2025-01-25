/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i+1; j < matrix[i].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
        let lo = 0, hi = matrix[i].length-1
        while (lo < hi) {
            [matrix[i][lo], matrix[i][hi]] = [matrix[i][hi], matrix[i][lo]]
            lo++; hi--;
        }
    }
};