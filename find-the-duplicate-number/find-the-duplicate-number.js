/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    for (let i = 0; i < nums.length-1; i++) {
        const num = nums[i];
        for (let j = i+1; j < nums.length; j++) {
            const num2 = nums[j];
            if (num === num2) return num
        }
    }
};