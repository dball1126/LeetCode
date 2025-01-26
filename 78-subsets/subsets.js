// Backtracking
// Time: O(2^n * n)
// Space: O(n)
var subsets = function(nums) {
    let result = [];
    const backtrack = (idx, curr) => {
        result.push([...curr]); // O(n)
        if (idx >= nums.length) return;
        
        for (let i = idx; i < nums.length; i++) {
            curr.push(nums[i]);
            backtrack(i+1, curr); // exponential
            curr.pop();
        }
    }
    backtrack(0, []);
    return result;
};