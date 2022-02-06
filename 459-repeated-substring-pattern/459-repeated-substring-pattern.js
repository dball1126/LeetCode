/**
 * Time: log(n)*2
 * Space: O(1)
 */
var repeatedSubstringPattern = function(s) {
    if (s.length <= 1) return false;
    
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        let sub = s.substring(0, i+1)
        let check = true;
        for (let j = i+1; j < s.length; j += sub.length) {
            let nxSub = s.substring(j, j + sub.length)
            if (sub !== nxSub) check = false;
        }
        if (check) return true;
    }

    return false;
};