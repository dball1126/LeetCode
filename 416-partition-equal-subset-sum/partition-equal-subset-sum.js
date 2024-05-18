// Bottom-Up Dynamic Programming
// Time: O(n * m)...n for nums and m for half the sum of all nums
// Space: O(m)
var canPartition = function(nums) {
    let sum = nums.reduce((acc, v) => acc +v)
    if (sum & 1) return false;
    sum = Math.floor(sum / 2)
    const memo = [...new Array(sum+1)].fill(false)
    memo[0] = true;
    
    for (let num of nums) {
        for (let s = sum; s >= num; s--) {
            memo[s] = memo[s] || memo[s - num]
        }
    }
    return memo[sum]
};