/**
 * Transpose and than reverse
 * Time: O(n)
 * Space: O(1)
 */
 var rotate = function(m) {
    for (let r = 0; r < m.length; r++) {
        for (let c = r; c < m.length; c++) {
            [m[r][c], m[c][r]] = [m[c][r], m[r][c]]
        }
        m[r].reverse();
    }
    return m
};