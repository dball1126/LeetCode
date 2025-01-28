var isNumber = function(s) {
    let seenNum = false, seenE = false, seenDot = false;

    for (let i = 0; i < s.length; i++) {

        if (!isNaN(s[i])) {
            seenNum = true;
        } else if (s[i] === "e" || s[i] === "E") {
            if (!seenNum || seenE) return false;
            seenNum = false; seenE = true;
        } else if (s[i] === "+" || s[i] === "-") {
            if (i-1 < 0) continue;
            if (s[i-1] === "E" || s[i-1] === "e") continue;
            return false;
        } else if (s[i] === ".") {
            if (seenDot || seenE) return false;
            seenDot = true;
        } else {
            return false
        }
    }
    return seenNum;
};