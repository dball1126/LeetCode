/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    
    const n = text1.length, m = text2.length
    const memo = [...new Array(n+1)].map(a => [...new Array(m+1)])

    const dp = (i, j) => {
        if (i >=n || j >= m) return 0
        if (memo[i][j] !== undefined) return memo[i][j]

        let v1 = text1[i] === text2[j] ? 1 + dp(i+1, j+1) : 0
        let v2 = dp(i+1, j), v3 = dp(i, j+1)
        return memo[i][j] = Math.max(v1,v2,v3)
    }
    return dp(0,0)
};