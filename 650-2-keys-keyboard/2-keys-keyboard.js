/**
 * @param {number} n
 * @return {number}
 */
// Top-Down Dynamic Programming
// Time and Space:O(n*2)
var minSteps = function(n) {
    
    const memo = [...new Array(n+1)].map(a => [...new Array(n+1)])

    const dp = (curr, copy) => {
        if ( curr === n) return 0
        if (curr > n || copy > n) return Infinity
        if (memo[curr][copy] !== undefined) return memo[curr][copy]
        let v1 = Infinity, v2 = Infinity
        if (copy !== 0) v1 = dp(curr+copy, copy)
        if (curr !== copy) v2 = dp(curr, curr)

        return memo[curr][copy] = Math.min(v1, v2) + 1
    }
    return dp(1, 0)
};