var isNumber = function(s) {
    let seenNum = false, seenDot = false, seenE = false;

    for (let i = 0; i < s.length; i++) {
        let v = s[i];

        if (!isNaN(v)) {
            seenNum = true;
        } else if (v === 'e' || v === 'E') {
            if (seenE || !seenNum) return false;
            seenE = true; seenNum = false;
        } else if (v === ".") {
            if (seenDot || seenE) return false;
            seenDot = true;
        } else if (v === "+" || v === "-") {
            if (i !== 0 && !(s[i-1] === "e" || s[i-1] === "E")) return false;
        } else {
            return false;
        }
    }
    return seenNum;
};