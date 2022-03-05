/**
 * State var: m n for   row , column idx in grid
 *            (stands for amount of ways to reach end)
 * Base Case: 1 if you reach n-1 && m-1
 *            0 for out of bounds
 * Recurrence Relation:
 *  dp(i) = dp(i+1, j) + dp(i, j+1)
 * 
 * Time & Space: O(m * n)
 */
// Top Down
// var uniquePaths = function(m, n) {
//     const memo = [...new Array(m+1)].map(a => [...new Array(n+1)].fill(-Infinity));
//     const dp = (i, j) => {
//         if (i === m-1 && j === n-1) return 1;
//         if (i >= m || j >= n ) return 0;
//         if (memo[i][j] !== -Infinity) return memo[i][j];
//         return memo[i][j] = dp(i+1, j) + dp(i, j+1)
//     }
//     return dp(0, 0)
// };
// Bottom Up
var uniquePaths = function(m, n) {
    const dp = [...new Array(m+1)].map(a => [...new Array(n+1)].fill(0));
    dp[m-1][n-1] = 1;
    for (let i = m-1; i >= 0; i--) {
        for (let j = n-1; j >= 0; j--) {
            dp[i][j] += dp[i+1][j] + dp[i][j+1]     
        }   
    }
    return dp[0][0]
}