/**
 * @param {number[][]} grid
 * @return {number}
 */
// Bottom-Up
var minPathSum = function(grid) {
    let n = grid.length, m = grid[0].length
    let memo = [...new Array(n+2)].map(a => [...new Array(m+2)].fill(Infinity))

    for (let r = n-1; r >= 0; r--) {
        for (let c = m-1; c >= 0; c--) {
            if (r === n-1 && c === m-1) {
                memo[r][c] = grid[r][c]; 
                continue;
            }
            memo[r][c] = grid[r][c] + Math.min(memo[r+1][c], memo[r][c+1])
        }
    }
    return memo[0][0]
}