var minWindow = function(s, t) {
    let charMap = new Map(), lo = 0, hi = 0, firstIdx = -Infinity, secondIdx = -Infinity;
    for (let c of t) {
        if (!charMap.has(c)) charMap.set(c, 0);
        charMap.set(c, charMap.get(c) + 1);
    }
    let count = charMap.size;

    while (hi < s.length) {
        if (charMap.has(s[hi])) {
            charMap.set(s[hi], charMap.get(s[hi]) - 1);
            if (charMap.get(s[hi]) === 0) {
                count--;
            }
        }
        while (count === 0) {
            if (firstIdx === -Infinity || ((hi - lo + 1) < (secondIdx - firstIdx + 1))) {
                firstIdx = lo;
                secondIdx = hi;
            }
            if (charMap.has(s[lo])) {
                if (charMap.get(s[lo]) === 0) {
                    count++;
                }
                charMap.set(s[lo], charMap.get(s[lo]) + 1);
            }
            lo++;
        }
        hi++;
    }
    if (firstIdx === -Infinity) return ""
    let result = "";
    while (firstIdx <= secondIdx) {
        result += s[firstIdx];
        firstIdx++;
    }
    return result;
};