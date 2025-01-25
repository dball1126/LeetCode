var lengthOfLongestSubstring = function(s) {
    if (!s) return 0
    let lo = 0, hi = 0, minIdx = 0, maxIdx = 0, map = new Map();
    while (hi < s.length) {
        if (!map.has(s[hi])) map.set(s[hi], 0);
        map.set(s[hi], map.get(s[hi]) + 1);

        while (map.get(s[hi]) > 1) {
            map.set(s[lo], map.get(s[lo]) - 1);
            lo++;
        }
        if ((hi - lo + 1) > (maxIdx - minIdx + 1)) {
            maxIdx = hi; minIdx = lo;
        }
        hi++;
    }
    return (maxIdx - minIdx + 1);
};