/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    let result = []
    const backtrack = (idx, curr, prev, str) => {
        if (idx === num.length) {
            if (curr === target) return result.push(str)
            return
        }
        let v = 0
        for (let i = idx; i < num.length; i++) {
            v = (v * 10) + parseInt(num[i])
            if (i > idx && num[idx] === '0') break;
            if (idx === 0) {
                backtrack(i+1, v, v, str + v)
            } else {
                backtrack(i+1, curr + v, v, str + "+" + v)
                backtrack(i+1, curr - v, -v, str + "-" + v)
                backtrack(i+1, (curr - prev) + prev * v, prev * v, str + "*" + v)
            }
        }
    }
    backtrack(0,0,0,'')
    return result;
};