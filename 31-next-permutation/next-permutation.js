/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let switched = false;
    const reverse = (i, j) => {
        while (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++; j--
        }
    }
    for (let i = nums.length-2; i >= 0; i--) {
        if (nums[i] < nums[i+1]) {
            let j = nums.length -1;
            while (j >= i+1) {
                if (nums[j] > nums[i]) {
                    break
                }
                j--
            }
            [nums[i], nums[j]] = [nums[j], nums[i]];
            reverse(i+1, nums.length-1)
            switched = true;
            break;
        }
    }
    if (!switched){ // do in place reversal
        reverse(0, nums.length-1)
    }
};