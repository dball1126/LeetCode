/**
 * @param {number[]} prices
 * @return {number}
 */
// State Machine DP Pattern
// Bottom-Down Dynamic Programming
// Time & Space: O(n)
var maxProfit = function(prices) {
    const n = prices.length
    const dp = [...new Array(n+1)].map(a => [...new Array(3)].fill(0))
    dp[n-1][1] = 0; dp[n-1][0] = prices[n-1]

    for (let i = n-2; i >= 0; i--) {
        for (let state = 0; state <= 1; state++) {
            let nx = dp[i+1][state], v = 0
            if ( state === 1 ) {
                v = dp[i+1][0] - prices[i]
            } else {
                v = dp[i+2][1] + prices[i]
            }
            dp[i][state] = Math.max(nx, v)
        }
    }
    return dp[0][1]
}