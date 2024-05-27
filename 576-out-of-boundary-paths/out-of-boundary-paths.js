/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    let memo = [...new Array(m+1)].map(a => [...new Array(n+1)].map(a =>
                [...new Array(maxMove+1)]))
        const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    let mod = 10**9+7
    const dp = (r, c, move) => {
        if (r < 0 || c < 0 || r >= m || c >= n) return 1
        if (move >= maxMove) return 0
        if (memo[r][c][move] !== undefined) return memo[r][c][move]

        let v = 0
        for (let [x, y] of dirs) {
            v += (dp(r+x, c+y, move+1) % mod)
        }
        return memo[r][c][move] = v % mod;
    }
    return dp(startRow, startColumn, 0)
};