/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
   this.map = new Map()
   this.nums = []
   for (let i = 0; i < nums.length; i++) {
    if (!this.map.has(nums[i])) this.map.set(nums[i], [])
    this.map.get(nums[i]).push(i)
    this.nums.push(nums[i])
   } 
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    let arr = this.map.get(target)
    let n = arr.length
    let randomIdx = Math.floor(Math.random() * n)
    let idx = arr[randomIdx]
    return idx
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */