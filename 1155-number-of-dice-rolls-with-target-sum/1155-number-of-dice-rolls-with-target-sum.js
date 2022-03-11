/**
 * Sate var: i for idx of n ... end of n, t for target
 *           (stands for num of dice rolls for target sum)
 * Base Case: 0 if out of bounds.
 *            1 if n === 0 & target = 0
 *            0 if n === 0 || target = 0
 * Recurrence Relation:
 *      for i of n
 *          for j of k
 *              if t - k >= 0 && k <= t
 *                  dp(i) += dp(n-1, t- k)
 * Time: O(n * k * t)
 * Space: O(n * t)
 */

var numRollsToTarget = function(n, k, target) {
    const memo = [...new Array(n+1)].map(a => [...new Array(target+1)].fill(-Infinity))

    const dp = (i, t) => {
        if (i < 0 || i > n) return 0;
        if (i === 0 && t === 0) return 1;
        if (n === 0 || t === 0) return 0;
        if (memo[i][t] !== -Infinity) return memo[i][t]
        memo[i][t] = 0

        for (let j = 1; j <= k; j++) {
            if (t - j >= 0 && j <= t) {
                memo[i][t] += dp(i-1, t-j)
            }
        }
        return memo[i][t] = memo[i][t] % (Math.pow(10, 9) + 7)
    }
    return dp(n, target)
};