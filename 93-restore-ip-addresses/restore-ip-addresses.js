/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let result = []
    const backtrack = (i, ipAddress, curr, dots) => {
        if (i >= s.length && dots === 4) { 
            return result.push(ipAddress)
        } else if (i >= s.length || dots === 4) {
            return;
        }
        let newCurr = curr + s[i];
        if (newCurr.length > 1 && newCurr[0] === '0') return;
        if (parseInt(newCurr) > 255) return;

        if (dots === 3) {
            backtrack(i+1, ipAddress + newCurr, '', dots + 1)
        } else {
            backtrack(i+1, ipAddress + newCurr + ".", '', dots + 1)
        }
        backtrack(i+1, ipAddress, newCurr, dots)
    }
    backtrack(0, '', '', 0)
    return result;
};