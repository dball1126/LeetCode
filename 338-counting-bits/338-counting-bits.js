/**
 * Time O(n) * 32 = O(n)
 * space O(n)
 */
var countBits = function(n) {
    let result = [];
    for (let i = 0; i <= n; i++) {
        let count = 0;
        (i).toString(2).split("").forEach(b => {
            if (b === '1') count++
        })
        result.push(count)
    }
    return result;
};