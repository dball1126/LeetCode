/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2, i = 0, j = 0, memo = new Map()) {
    if (i >= text1.length || j >= text2.length) return 0;
    const key = i + '' + j
    if (memo.has(key)) return memo.get(key)

    if (text1[i] === text2[j]) {
        memo.set(key, 1 + longestCommonSubsequence(text1, text2, i+1, j+1, memo))
    } else {
        memo.set(key, Math.max(
            longestCommonSubsequence(text1, text2, i+1, j, memo),
            longestCommonSubsequence(text1, text2, i, j+1, memo),
        ))
    }
    return memo.get(key)
};
