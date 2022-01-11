/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
/**
 * State var: 
 *  i for the index of the day you're on.
 *  a for the amount that has currently been added up.
 *  Recurrence Relation:
 *  val = 0;
 *  if (a - coins[i] >= 0) val = dp(i, a - coins[i])
 *  dp[i][a] = val += dp(i+1, a)
 */
var change = function(amount, coins) {
    let memo = [...new Array(coins.length+1)].map(a => [...new Array(amount + 1)].fill(-Infinity))

    const dp = (i, a) => {
        if (i >= coins.length) return 0;
        if (a === 0) return 1;
        if (memo[i][a] !== -Infinity) return memo[i][a]
        let val = 0;

        if (a - coins[i] >= 0) {
            val = dp(i, a - coins[i])
        }

        val += dp(i+1, a)
        memo[i][a] = val

        return memo[i][a]
    }
    return dp(0, amount)
};