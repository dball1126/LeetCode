/**
 * @param {number} n
 * @return {string[]}
 */
// Catalan numbers
var generateParenthesis = function(n) {
    let combos = []
    const memo = [...new Array(n+1)]
    const backtrack = (idx) => {
        if (idx === 0) return [""]
        if (idx === 1) return ["()"]
        if (memo[idx] !== undefined){
            console.log("memo")
             return memo[idx]
            }
        let combo = []
        for (let i = 1; i <= idx; i++) {
            let left = [...backtrack(i-1)]
            let right = [...backtrack(idx - i)]

            for (let l of left) {
                for (let r of right) {
                    combo.push("(" + l + ")" + r)
                }
            }
        }
        combos.push(combo)
        memo[idx] = combo
        return combo
    }
    return backtrack(n)
};