/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let n = matrix.length, m = matrix[0].length;
    for (let r = 1; r < n; r++) {
        for (let c = 1; c < m; c++) {
            if (matrix[r-1][c-1] !== matrix[r][c]) return false;
        }
    }
    return true;
};