/**
 * @param {string} digits
 * @return {string[]}
 */
// Backtracking
// Time & Space: O(4^n)...O(4^9)
var letterCombinations = function(digits) {
    if (!digits.length) return []
    let phoneMap = new Map([["2", "abc"],["3","def"],["4","ghi"],["5","jkl"],["6","mno"]
    ,["7","pqrs"],["8","tuv"],["9","wxyz"]]);
    let result = [], n = digits.length 

    const backtrack = (curr, idx) => {
        if (curr.length === n) return result.push(curr)
        if (idx >= n) return;

        for (let i = idx; i < n; i++) {
            
            let arr = phoneMap.get(digits[i])

            for (let j = 0; j < arr.length; j++) {
                const v = arr[j];
                backtrack( curr + v, i+1)
            }
            
        }
    }
    backtrack("", 0)
    return result;
};