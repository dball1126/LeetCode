/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const sets = [], n = nums.length

    const backtrack = (i, curr) => {
        sets.push([...curr])
        if (i >= n) return []

        for(let j = i; j < n; j++) {
            curr.push(nums[j])
            backtrack(j+1, curr)
            curr.pop()
        }
        return curr;
    }
    backtrack(0, [])
    return sets;
};