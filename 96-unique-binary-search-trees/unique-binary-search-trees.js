/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    
    const dp = [...new Array(n+1)]
    dp[0] = 1; dp[1] = 1

    // start at 2 since we already set the 0 and 1 base cases
    for (let i = 2; i <= n; i++) { 
        let v = 0;
        for (let j = 1; j <= i; j++) {
            v += (dp[j-1] * dp[i - j])
        }
        dp[i] = v;
    }
    return dp[n]
}
