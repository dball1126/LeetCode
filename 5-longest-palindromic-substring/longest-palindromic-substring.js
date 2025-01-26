var longestPalindrome = function(s) {
    if (!s) return "";
    let minIdx = 0, maxIdx = 0;
    
    const expandAroundCenters = (i, j) =>{
        if (i < 0 || j > s.length) return;
        while (i >= 0 && j < s.length) {
            if (s[i] !== s[j]) return;
            if (i-1 < 0 || j+1 >= s.length) break;
            if (s[i-1] !== s[j+1]) break;
            i--; j++;
        }
        if ((j-i) > (maxIdx - minIdx)) {
            maxIdx = j;
            minIdx = i;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundCenters(i-1, i);
        expandAroundCenters(i, i);
    }
    let result = "";
    while (minIdx <= maxIdx) {
        result += s[minIdx];
        minIdx++;
    }
    return result;
};