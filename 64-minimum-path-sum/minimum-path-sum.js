/**
 * @param {number[][]} grid
 * @return {number}
 */
// Top-Down Dynamic Programming
// Time and Space: O(n * m)
var minPathSum = function(grid) {
    let n = grid.length, m = grid[0].length
    
    let memo = [...new Array(n)].map(a => [...new Array(m)])

    const dp = (r, c) => {
        if (r === n-1 && c === m-1) return grid[r][c]
        if (r < 0 || c < 0 || r >= n || c >= m) return Infinity;
        if (memo[r][c] !== undefined) return memo[r][c]

        return memo[r][c] = grid[r][c] + Math.min(dp(r+1, c), dp(r, c+1))
    }
    return dp(0, 0)
};