/**
 * Backtracking: 
 * Time: O(2*n)
 * Space: O(n*2) ....n * n-1 * n-2
 */
var subsets = function(nums) {
    const subsets = [[]]

    const backtrack = (j, curr) => {
        if (j >= nums.length) {
            return
        }
        for (let i = j; i < nums.length; i++) {
            curr.push(nums[i])
            subsets.push([...curr])
            backtrack(i+1, curr)
            curr.pop()
        }
    }
    backtrack(0, [])

    return subsets;
};