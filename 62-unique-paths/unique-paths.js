var uniquePaths = function(m, n) {
    
    let dp = [...new Array(m)].map(a => [...new Array(n)].fill(0))
    dp[0][0] = 1
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            let prev1 = 0, prev2 = 0
            if (r -1 >= 0) {
                prev1 = dp[r-1][c]
            }
            if (c -1 >= 0) {
                prev2 = dp[r][c-1]
            }
            dp[r][c]+= prev1 + prev2;
        }
    }
    return dp[m-1][n-1];
};