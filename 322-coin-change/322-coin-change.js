/**
 * State Var: a for amount remaining
 * Base Case: 0 if amount is 0
 * Recurrence Relation:
 *  amt = Infinity
 *  for c .... of coin
 *      if a -c >= 0 && a <= c
 *          amt = Math.min(amt, 1 + dp(a-c))
 * return amt
 */
// Top-Down
var coinChange = function(coins, amount) {
    const memo = [...new Array(amount+1)].fill(-1)

    const dp = (a) => {
        if (a === 0) return 0;
        if (memo[a] !== -1) return memo[a];
        memo[a] = Infinity;
        for (let c of coins) {
            // console.log("coin: " + c)
            if (a - c >= 0 && a >= c) {
                memo[a] = Math.min(memo[a], 1 + dp(a-c))
            }
        }
        return memo[a];
    }
    const result = dp(amount)
    return result === Infinity ? -1 : result;
}