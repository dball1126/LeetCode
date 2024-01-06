/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    let prev = 0
    this.dp = nums.map(a => prev = a +  prev)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let val = left -1 >= 0 ? this.dp[left-1] : 0
    return this.dp[right] - val
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */