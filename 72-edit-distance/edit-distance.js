/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// Top-Down Dynamic Programming
// Time and Space: O(n * m)
var minDistance = function(word1, word2) {
    let n = word1.length, m = word2.length
    const memo = [...new Array(n+1)].map(a => [...new Array(m+1)])

    const dp = (i, j) => {
        if (i >= n && j >= m) return 0 // base case
        if (i >= n || j >= m) return ((n - i) + (m-j))
        if (memo[i] && memo[i][j] != undefined) return memo[i][j]

        let v1 = Infinity, v2 = Infinity, v3 = Infinity
        if ( word1[i] === word2[j]) {
            v1 = dp(i+1, j+1)
        } 
        let v4 = 1 + dp(i+1, j+1)
        v2 = 1 + dp(i+1, j),  v3 = 1+ dp(i, j+1)
        return memo[i][j] = Math.min(v1,v2,v3, v4)
    }
    return dp(0,0)
};