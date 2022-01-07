/**
 * State Variables: i ...... prices.length-1.   Day you're on.
 *                  h ......... 1 for buying ....... 0 for selling.
 *
 * Recurrence relation: if ( buying ) val =  dp(i+1, 0) - prices[i]
 *                      if ( selling ) val =  dp(i+2, 1) + prices[i]
 *                      d[i] = Math.max(val, dp(i+1, h) )
 */
var maxProfit = function(prices) {
    let [key, val, h] = ['', 0,  1]

    let dp = [...new Array(prices.length+2)].map(a => [...new Array(3).fill(0)])
    for (let i = prices.length-1; i >= 0; i--) {
        for (let v = h; v >= 0; v--) {
            if (v === 1) {
                val = dp[i+1][0] - prices[i]
            } else {
                val = dp[i+2][1] + prices[i]
            }
            dp[i][v] = Math.max(val, dp[i+1][v])
        }
        
    }
    return dp[0][1]
};