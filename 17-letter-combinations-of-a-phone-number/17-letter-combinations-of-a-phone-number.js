/**
 * Backtracking
 * Time and Space: O(n*4)
 */
var letterCombinations = function(digits) {
    if (!digits) return []
    let map = new Map([["2", ["a","b","c"]],["3", ["d","e","f"]],["4", ["g","h","i"]],["5", ["j","k","l"]],["6", ["m","n","o"]],["7", ["p","q","r","s"]],
        ["8", ["t","u","v"]],["9", ["w","x","y","z"]]])

    let result = []

    const backtrack = (i, str) => {
        if (str.length === digits.length) {
            result.push(str)
            return;
        }
        if (i >= digits.length) return;
        map.get(digits[i]).forEach(v => {
            backtrack(i+1, str + v)
        })
    }
    backtrack(0, "");
    return result;
};