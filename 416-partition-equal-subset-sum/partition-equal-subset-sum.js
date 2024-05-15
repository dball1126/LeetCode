/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Top Down Dynamic Programming
// Time and Space: O(n * m)...n for nums in array and m for total sum divided by two
var canPartition = function(nums) {
    let max = nums.reduce((acc, v) => acc + v), n = nums.length;
    if (max & 1) return false;
    max = Math.floor(max / 2)

    const memo = [...new Array(n)].map(a => [...new Array(max)])

    const dp = (idx, curr) => {
        if (curr === max) return true;
        if (curr > max || idx >= n) return false;
        if (nums[idx] + curr === max) return true;
        if (memo[idx][curr] !== undefined) return memo[idx][curr]

        let pos1 = dp(idx+1, curr), pos2 = dp(idx+1, curr + nums[idx])

        return memo[idx][curr] = (pos1 || pos2)
    }
    return dp(0,0)
};