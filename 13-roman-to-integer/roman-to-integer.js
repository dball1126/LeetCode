var romanToInt = function(s) {
    let i = 0, total = 0
    const map = new Map([["I", 1], ["V", 5], ["X", 10], ["L", 50],
    ["C", 100], ["D", 500], ["M", 1000], ["IV", 4], ["IX", 9], ["XL", 40], ["XC", 90],
    ["CD", 400], ["CM", 900]]);

    while (i < s.length) {
        let prev = "", next = "";
        if (i-1 >= 0) prev = s[i-1] + s[i];
        if (i+1 < s.length) next = s[i] + s[i+1];

        if (map.has(prev)) {
            total += map.get(prev);
        } else if (!map.has(next)) {
            total += map.get(s[i]);
        }
        i++;
    }
    return total;
}