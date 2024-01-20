/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let prefixSum = 0
    this.dp = nums.map(a => prefixSum += a)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.dp[right] - (left-1 >= 0 ? this.dp[left-1] : 0)
};


/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */