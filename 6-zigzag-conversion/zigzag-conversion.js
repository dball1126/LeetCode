var convert = function(s, numRows) {
    if (numRows <= 1) return s
    let grid = [...new Array(numRows + 1)].map(a =>
        [...new Array(s.length+1)].fill(""));
    let result = "";

    let d = 'd', c = 0, r = 0, i = 0;

    while (r < numRows && c < s.length && i < s.length) {
        if (d === 'd') {
            if (grid[r]) grid[r][c] = s[i];

            while (r+1 < numRows) {
                grid[r][c] = s[i];
                r++; i++;
            }
            d = 'diag'
        } else {
            if (grid[r]) grid[r][c] = s[i];

            while (r-1 >= 0 && c+1 < s.length && i < s.length) {
                grid[r][c] = s[i];
                i++; r--; c++;
            } 
            d = 'd'
        }
        if (r === numRows -1 && c === s.length-1) break;
    }
    for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < s.length; c++) {
            result += grid[r][c] || "";
        }
    }
    return result;
};