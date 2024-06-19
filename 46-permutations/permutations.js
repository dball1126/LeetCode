/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Backtracking
// Time: O(!n)
// Space: O(n)
var permute = function(nums) {
    const result = [], n = nums.length

    const backtrack = (curr) => {
        if (curr.size === n) {
            return result.push([...Array.from(curr)])
        }
            console.log(curr)
        for (let num of nums) {
            if (!curr.has(num)) {
                curr.add(num)
                backtrack(curr)
                curr.delete(num)
            }
        }
    }
    backtrack(new Set())
    return result;
};