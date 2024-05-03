/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {  
    const n = nums.length, subsets = []

    for (let mask = 0; mask < (1 << n); mask++) {
        const set = []
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                set.push(nums[i])
            }
        }
        subsets.push(set)
    }
    return subsets
}