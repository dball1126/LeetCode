/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// Top-Down Dynamic Programming
// Time and Space: O(l * n * m)...for length of input and m and n
var findMaxForm = function(strs, m, n) {
    let len = strs.length
    let memo = [...new Array(len+1)].map(a => 
        [...new Array(m+1)].map(a =>
        [...new Array(n+1)]))
    let ones = [...new Array(len+1)].fill(0)
    let zeros = [...new Array(len+1)].fill(0)
    for (let i = 0; i < len; i++) {
        let str = strs[i]
        for (let j = 0; j < str.length; j++ ) {
            if (str[j] === "1") {
                ones[i]++
            } else {
                zeros[i]++
            }
        }
    }

    let dp = (idx, o, z) => {
        if (idx >= len || z === m && n === o) return 0
        if (memo[idx][z][o] !== undefined) return memo[idx][z][o]
        let next = dp(idx+1, o, z)
        let v = 0
        let one = ones[idx], zero = zeros[idx]
        if (o + one <= n && z + zero <= m) {
            v = 1 + dp(idx+1, o+one, z+zero)
        }
        return memo[idx][z][o] = Math.max(v, next)
    }
    return dp(0,0,0)
};