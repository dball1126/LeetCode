/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    const bSearch = (lo, hi, dir) => {
        while (lo < hi) {
            let m = Math.floor((hi + lo) / 2) + 1;

            if (nums[m] > target) {
                hi = m -1;
            } else if (nums[m] < target) {
                lo = m + 1;
            } else {
                if (dir === 'left') {
                    if (nums[m-1] === target) {
                        hi = m -1;
                    } else {
                        return m;
                    }
                } else {
                    if (nums[m+1] === target) {
                        lo = m + 1;
                    } else {
                        return m;
                    }
                }
            }
        }
        return nums[lo] === target ? lo : -1;
    }

    let left = bSearch(0, nums.length-1, 'left');
    if (left === -1) return [-1, -1];
    let right = bSearch(left, nums.length-1, 'right');
    return [left, right]
};