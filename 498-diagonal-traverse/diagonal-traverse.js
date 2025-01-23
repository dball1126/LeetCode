/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let diags = new Map();

    for (let r = 0; r < mat.length; r++) {
        for (let c = 0; c < mat[r].length; c++) {
            let k = r + c;
            if (!diags.has(k)) diags.set(k, []);
            diags.get(k).push(mat[r][c]);
        }
    }
    let result = [];
    let order = 'u'
    for (let [k, v] of diags) {
        if (order === 'u') {
            result.push(...v.reverse())
        } else {
            result.push(...v)
        }
        order = order === 'u' ? 'd' : 'u'
    }
    return result;
};