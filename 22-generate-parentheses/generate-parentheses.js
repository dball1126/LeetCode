/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = []

    const backtrack = (o, c, curr) => {
        if (o > n || c > n || c > o) return;
        if (o === n && c === n) return result.push(curr)

        backtrack(o+1, c, curr + "(")

        backtrack(o, c +1, curr + ")")
    }
    backtrack(0, 0, "")

    return result
};