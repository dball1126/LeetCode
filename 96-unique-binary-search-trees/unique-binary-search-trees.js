/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const dp = [...new Array(n+1)]
    dp[0] = 1; dp[1] = 1;
    
    for (let i = 1; i <= n; i++) {
        let val = 0
        for (let j = 1; j <= i; j++) {
            val += (dp[j-1] * dp[i-j])
        }
        dp[i] = val
    }
    return dp[n]
};