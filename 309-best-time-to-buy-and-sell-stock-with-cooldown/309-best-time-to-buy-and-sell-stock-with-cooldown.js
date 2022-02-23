/**
 * State Var: i for idx of days to ....end of input
 *            t for transaction (1 for buying, 0 for selling)
 * Base Case: 0 for idx out of bounds OR t === 1 &&  i >= input.length-1
 * Recurrence Relation:
 *  if t === 1
 *      dp[i] = Math.max(dp(i+1, t), dp(i+1, 0) - dp[i])
 *  else
 *      dp[i] = Math.max(dp(i+1, t), dp(i+2, 1) + dp[i])
 */
// Top-Down
var maxProfit = function(prices) {
    const memo = [...new Array(prices.length+1)].map(a => [...new Array(3)].fill(-Infinity));

    const dp = (i, t) => {
        if (i >= prices.length || (t === 1 && i >= prices.length-1)) return 0;
        if (memo[i][t] !== -Infinity) return memo[i][t];
        if (t === 1) {
            return memo[i][t] = Math.max(dp(i+1, t), dp(i+1, 0) - prices[i])
        } else {
            return memo[i][t] = Math.max(dp(i+1, t), dp(i+2, 1) + prices[i])
        }
    }
    return dp(0, 1);
}