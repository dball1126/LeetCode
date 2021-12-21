/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 1) return 1;
    const dp = nums.map(e => 1);
    let max = 1;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
                max = Math.max(max, dp[i])
            }
        }
    }
    console.log(dp)
    return max;
};