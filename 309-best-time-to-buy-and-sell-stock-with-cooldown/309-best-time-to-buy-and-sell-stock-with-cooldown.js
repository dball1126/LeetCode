/**
 * State Variables: i ...... prices.length-1.   Day you're on.
 *                  h ......... 1 for buying ....... 0 for selling.
 *
 * Recurrence relation: if ( buying ) val =  dp(i+1, 0) - prices[i]
 *                      if ( selling ) val =  dp(i+2, 1) + prices[i]
 *                      d[i] = Math.max(val, dp(i+1, h) )
 */
var maxProfit = function(prices) {
    let memo = new Map();

    const dp = (i, h) => {
        if (i >= prices.length) return 0;
        let key = i + "" + h
        if (memo.has(key)) return memo.get(key)
        let val;

        if (h === 1) {
            val = dp(i+1, 0) - prices[i]
        } else {
            val = dp(i+2, 1) + prices[i]
        }

        memo.set(key, Math.max(val, dp(i+1, h)))
        return memo.get(key)
    }
    return dp(0, 1);
};