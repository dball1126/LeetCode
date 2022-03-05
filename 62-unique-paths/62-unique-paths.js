var uniquePaths = function(m, n) {
    const memo = [...new Array(m+1)].map(a => [...new Array(n+1)].fill(-Infinity));
    const dp = (i, j) => {
        if (i === m-1 && j === n-1) return 1;
        if (i >= m || j >= n ) return 0;
        if (memo[i][j] !== -Infinity) return memo[i][j];
        return memo[i][j] = dp(i+1, j) + dp(i, j+1)
    }
    return dp(0, 0)
};