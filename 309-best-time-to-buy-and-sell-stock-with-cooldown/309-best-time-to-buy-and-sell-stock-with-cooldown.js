/**
 * State Variables: i ...... prices.length-1.   Day you're on.
 *                  h ......... 1 for buying ....... 0 for selling.
 *
 * Recurrence relation: if ( buying ) val =  dp(i+1, 0) - prices[i]
 *                      if ( selling ) val =  dp(i+2, 1) + prices[i]
 *                      d[i] = Math.max(val, dp(i+1, h) )
 */
var maxProfit = function(prices) {
    let memo = [...new Array(prices.length+1)].map(a => [...new Array(2).fill(-Infinity)])

    const dp = (i, h) => {
        if (i >= prices.length) return 0;
        if (memo[i][h] !== -Infinity) return memo[i][h]
        let val;

        if (h === 1) {
            val = dp(i+1, 0) - prices[i]
        } else {
            val = dp(i+2, 1) + prices[i]
        }

        memo[i][h] = Math.max(val, dp(i+1, h))
        return memo[i][h]
    }
    return dp(0, 1);
};