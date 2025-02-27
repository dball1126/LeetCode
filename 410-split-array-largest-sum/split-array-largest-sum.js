/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let hi = 0, lo = 0;
    let result = Infinity
    nums.forEach(v => {
        hi += v;
        lo = Math.max(lo, v);
    });

    while (lo <= hi) {
        let sum = Math.floor( (hi +lo) / 2);
        let subs = 0, currSum = 0;

        nums.forEach(v => {
            if (currSum + v > sum) {
                subs++;
                currSum = v;
            } else {
                currSum += v;
            }
        })

        if (subs+1 <= k) {
            hi = sum - 1;
            result = Math.min(sum, result)
        } else {
            lo = sum + 1;
        }
    }
    return result
};