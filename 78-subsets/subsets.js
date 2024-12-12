/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = []

    const backtrack = (idx, curr) => {
        result.push([...curr])
        if (idx >= nums.length) return;

        for (let i = idx; i < nums.length; i++) {
            curr.push(nums[i])
            backtrack(i+1, curr)
            curr.pop()
        }
    }

    backtrack(0, [])
    return result;
};