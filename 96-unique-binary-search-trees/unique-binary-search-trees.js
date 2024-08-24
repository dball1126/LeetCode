/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const memo = [...(new Array(n+1))]

    const dp = (num) => {
        if (num <= 1) return 1;
        if (memo[num] !== undefined) return memo[num]
        let val = 0

        for (let i = 1; i <= num; i++) {
            val += (dp(i-1) * dp(num - i))
        }
        return memo[num] = val;
    }
    return dp(n)
};