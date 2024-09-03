/**
 * @param {number[]} nums
 * @return {number}
 */
// Longest Increasing Subsequence DP Pattern
// Bottom-Up Dynamic Programming
// Time: O(n^2)
// Space: O(n)
var findNumberOfLIS = function(nums) {
    let n = nums.length, maxLen = 1, maxCnt = 0

    const dpLen = [...new Array(n+1)].fill(1)
    const dpCnt = [...new Array(n+1)].fill(1)

    for(let i = 1; i <= n; i++) {
        let len = 1, c = 0, map = new Map([[1,1]])
        for (let j = i-1; j >= 0; j--) {
            if (nums[i] > nums[j]) {
                if ((dpLen[j] + 1) > len) {
                    len = 1 + dpLen[j]
                    c = dpCnt[j]
                } else if ((dpLen[j] + 1) === len) {
                    c += dpCnt[j]
                }
            }
        }
        if (c === 0) c = 1
        dpLen[i] = len
        dpCnt[i] = c
        maxLen = Math.max(maxLen, len)
    }
    for (let i = 0; i < n; i++) {
        if (dpLen[i] === maxLen) maxCnt += dpCnt[i]
    }

    return maxCnt
};