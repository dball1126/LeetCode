var isNumber = function(s) {
    let seenNum = false, seenE = false, seenDot = false;

    for (let i = 0; i < s.length; i++) {
        let v = s[i];

        if (!isNaN(v)) {
            seenNum = true;
        } else if (v === "e" || v == "E") {
            if (!seenNum || seenE) return false;
            seenE = true; seenNum = false;
        } else if (v === "+" || v === "-") {
if (i !== 0 && !(s[i-1] === "e" || s[i-1] === "E")) return false
        }   else if (v === ".") {
            if (seenE || seenDot) return false;
            seenDot = true;
        } else {
            return false;
        }
    }
    return seenNum;
};