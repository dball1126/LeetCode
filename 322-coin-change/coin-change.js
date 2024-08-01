/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let n = coins.length
    let memo = [...new Array(amount + 1)]
    
    const dp = (i, a) => {
        if (a === amount) return 0
        if (a < 0 || i >= n) return Infinity
        if (memo[a] !== undefined) return memo[a]
        let min = Infinity
        for (let idx = i; idx < n; idx++) {
            const c = coins[idx]
            if (a + c <= amount && a + c > a) {
                min = Math.min(min, 1 + dp(0, a + c))
            }
        }
        return memo[a] = min
    }
    const val = dp(0,0)
    return val === Infinity ? -1 : val
};