/**
 * @param {number[]} prices
 * @return {number}
 */
// Bottom Up Dynamic Programming
// Time and Space: O(n)...n * 2 = n
var maxProfit = function(prices) {
    let n = prices.length-1;
    let dp = [...new Array(prices.length+1)].map(a => [...new Array(2)].fill(0))

    for (let i = n; i >= 0; i--) {
        for (let j = 1; j >= 0; j--) {
            if (i  === n ) {
                dp[i][j] = j === 1 ? 0 : prices[i]
            } else {
                if (j === 1) {
                    dp[i][j] = Math.max(dp[i+1][j], dp[i+1][0] - prices[i])
                } else {
                    dp[i][j] = Math.max(dp[i+1][j], dp[i+2][1] + prices[i])
                }
            }
        }
    }
    return dp[0][1]
}