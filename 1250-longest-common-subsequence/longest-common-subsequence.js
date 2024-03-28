/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time and Space: O(n * m)...n for text1 length and m for text2 length
var longestCommonSubsequence = function(text1, text2) {
    if (!text1.length || !text2.length) return 0
    let n = text1.length, m = text2.length;
    const memo = [...new Array(n+1)].map(a => [...new Array(m+1)].fill(0))

    for (let i = n-1; i >= 0; i--) {
        for (let j = m-1; j >= 0; j--) {
            if (text1[i] === text2[j]) {
                memo[i][j] = (1 + memo[i+1][j+1])
            } else {
                memo[i][j] = Math.max(memo[i+1][j], memo[i][j+1])
            }
        }
    }
    return memo[0][0]
}