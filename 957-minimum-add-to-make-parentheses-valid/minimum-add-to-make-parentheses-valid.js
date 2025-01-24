/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let open = 0, total = 0;

    for (let p of s) {
        if (p === "(") {
            open++;
        } else if (p === ")") {
            if (open) {
                open--
            } else {
                total++;
            }
        }
    }
    return total + open;
};