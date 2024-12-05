/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let n = matrix.length, m = matrix[0].length
    for (let r = 0; r < n; r++) {
        for (let c  = 0; c < m; c++) {
            if (r -1 >= 0 && c - 1 >= 0) {
                if (matrix[r-1][c-1] !== matrix[r][c]) return false
            }
        }
    }
    return true;
};