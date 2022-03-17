/**
 * Use a new array
 * Time & space: O(n) for nums
 */
var shuffle = function(nums, n) {
    const numbers = [];
    let j = n;
    for (let i = 0; i < n; i++) {
        numbers.push(nums[i], nums[j])
        j++
    }
    return numbers;
};