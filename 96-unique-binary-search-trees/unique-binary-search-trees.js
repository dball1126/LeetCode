/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    
    const memo = [...new Array(n+1)]

    const dp = (num) => {
        if (num <= 1) return 1;
        if (memo[num] !== undefined) return memo[num]
        let v = 0
        for (let i = 1; i <= num; i++) {
            let left = 1, right = 1;
            left = dp(i-1), right = dp(num-i)
            
            v += (left * right)
        }
        return memo[num] = v
    }
    return dp(n)
};