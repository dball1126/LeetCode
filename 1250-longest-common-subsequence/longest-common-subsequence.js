/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// Top-Down Dynamic Programming
// Time and Space: O(n * m)...n for text1 length and m for text2 length
var longestCommonSubsequence = function(text1, text2) {
    let n = text1.length, m = text2.length;
    const memo = [...new Array(n+1)].map(a => [...new Array(m+1)].fill(-Infinity))

    const dp = (i, j) => {
        if (i >= n || j >= m) return 0;
        if (memo[i][j] !== -Infinity) return memo[i][j]
        memo[i][j] = 0
        
        if (text1[i] === text2[j]) {
            return memo[i][j] = 1 + dp(i+1, j+1)
        } else {
            return memo[i][j] = Math.max(dp(i+1, j), dp(i, j+1))
        }
    }
    return dp(0, 0)
};