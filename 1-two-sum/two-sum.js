/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (numMap.has(target - nums[i])) return [i, numMap.get(target - nums[i])];
        if (!numMap.has(nums[i])) numMap.set(nums[i], i);
    }
};