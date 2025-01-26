/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let insertIdx = 1, uniqueIdx = 1;
    while (nums[insertIdx-1] !== nums[insertIdx] && insertIdx < nums.length) insertIdx++;
    while (uniqueIdx < nums.length && insertIdx < nums.length) {
        while (nums[uniqueIdx] <= nums[insertIdx-1]  && uniqueIdx < nums.length) uniqueIdx++;
        if (uniqueIdx < nums.length) {
            [nums[insertIdx], nums[uniqueIdx]] = [nums[uniqueIdx], nums[insertIdx]];
            insertIdx++;
        }
    }
    return insertIdx
};