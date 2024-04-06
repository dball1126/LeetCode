/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// Dynamic Programming
// Time and Space: O(n * m)
var longestCommonSubsequence = function(text1, text2) {
    let n = text1.length, m = text2.length
    let memo = [...new Array(n)].map(a => [...new Array(m)])

    const dp = (i, j) => {
        if (i >= n || j >= m) return 0
        if (memo[i][j] !== undefined) return memo[i][j]
        memo[i][j] = 0
        if (text1[i] === text2[j]) {
            return memo[i][j] = 1 + dp(i+1, j+1)
        } else {
            return memo[i][j] = Math.max(dp(i+1, j), dp(i, j+1))
        }
    }
    return dp(0, 0)
};