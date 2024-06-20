/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let n = matrix.length, m = matrix[0].length
    
    let nMat = [...new Array(m)].map(a => [...new Array(n)])


    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            nMat[c][r] = matrix[r][c]
        }
    }
    return nMat;
};