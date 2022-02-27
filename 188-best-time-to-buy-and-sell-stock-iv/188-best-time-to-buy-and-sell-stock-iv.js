/**
 * State var: i for idx of prices
 *            t for 1(buying),0(selling)
 *            k transactions remaining
 * Base Case:
 *  0 if k === 0 || t === 1 && i >= prices.length || k === 0
 * Recurrence Relation:
 *  if (i === 1) 
 *      memo[i] = Math.max(dp(i+1, t, k), dp(i+1, 0, k))
 *  else
 *      memo[i] = Math.max(dp(i+1, t, k), dp(i+1, 1, k-1))
 *  Space: O(n * k)
 *  Time: O(n * k)
 */
// Top Down
var maxProfit = function(k, prices) {
    const memo = [...new Array(prices.length+1)]
    .map(a => [...new Array(k+1)]
    .map(a => [... new Array(3)].fill(-Infinity)))
    
    const dp = (i, t, k2) => {
        if (i >= prices.length || k2 === 0 || (t === 1 && i === prices.length-1)) {
            return 0;
        }
        if (memo[i][k2][t] !== -Infinity) return memo[i][k2][t];
        if (t === 1) {
            return memo[i][k2][t] = Math.max(dp(i+1, t, k2), dp(i+1, 0, k2) - prices[i])
        } else {
            return memo[i][k2][t] = Math.max(dp(i+1, t, k2), dp(i+1, 1, k2-1) + prices[i])
        }
    }
    return dp(0, 1, k)
};