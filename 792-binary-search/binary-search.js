/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let high = nums.length-1, low = 0

    while (low < high) {
        let mid = Math.floor((high+low+1)/2)

        if (target < nums[mid]) {
            high = mid - 1
        } else {
            low = mid
        }
    }
    return nums[low] === target ? low : -1
};