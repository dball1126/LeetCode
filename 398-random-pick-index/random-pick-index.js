/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!this.numsMap.has(nums[i])) this.numsMap.set(nums[i], []);
        this.numsMap.get(nums[i]).push(i);
    }
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    let arr = this.numsMap.get(target);
    let randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */