/**
 * @param {number} n
 * @return {string[]}
 */
// Backtracking
// Time: O(2^(n*2))
// Space: O(n*2)
var generateParenthesis = function(n) {
    let result = [];
    const backtrack = (curr, open, close) => {
        if (curr.length === n*2) return result.push(curr)
        
        if (open < n) {
            backtrack(curr + "(", open + 1, close)
        }
        if (close < n && close < open) {
            backtrack(curr + ")", open, close+1)
        }
    }
    backtrack("", 0, 0)
    return result;
};