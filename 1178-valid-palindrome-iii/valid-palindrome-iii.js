/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var isValidPalindrome = function(s, k) {
    let n = s.length;
    let dp = [...new Array(n)].map(a => [...new Array(n)].fill(0));

    for (let i = 1; i < n; i++) {
        for (let j = i-1; j >= 0; j--) {
            let val = s[j] === s[i] ? 0 : 1;
            if (j+1 === i) {
                dp[j][i] = val;
            } else {
                if (val === 0) {
                    dp[j][i] = dp[j+1][i-1]
                } else {
                    dp[j][i] = val + Math.min(dp[j+1][i], dp[j][i-1]);
                }
            }

        }
    }
    return dp[0][n-1] <= k;
};