/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Bottom-Up Dynamic Programming
// Time: O(n * m)...n for nums and m for half the total sum
// Space: O(m)
var canPartition = function(nums) {
    let n = nums.length;
    let sum = nums.reduce((acc, v) => acc + v)
    if (sum & 1) return false;
    sum = Math.floor(sum / 2)
    let memo = [...new Array(sum + 1)].fill(false)
    memo[0] = true

    for (let i = n-1; i >= 0; i--) {
        let c = nums[i]
        for (let s = sum; s >= c; s--) {
            memo[s] = memo[s] || memo[s - c];
        }

    }

    return memo[sum] ? memo[sum] : false
};