/**
 * State var: r, c for idx of row, column
 * Base Case: 0 for out of bounds
 * Recurrence Relation:
 *          val = 0, max = 0
 *      if m[r][c] === 1
 *          val = 1 + Math.min(dp(r-1, c), dp(r-1, c-1), dp(r, c-1))
 *      
 *      max = Math.max(val, max, dp(r-1, c), dp(r, c-1))
 *      return m[r][c] = val
 * Space: O(n)
 * Time: O(1) * (m * n) = O(m * n)
 */
// Bottom Up
var maximalSquare = function(m) {
    const memo = [...new Array(m.length+1)].map(a => [...new Array(m[0].length+1)].fill(0))
    let max = 0;
    for (let r = 0; r < m.length; r++) {
        for (let c = 0; c < m[0].length; c++) {
            let [val, v1, v2 , v3] = [0,0,0,0]

            if (r-1 >= 0) v1 = memo[r-1][c]
            if (r-1 >= 0 && c-1 >= 0) v2 = memo[r-1][c-1]
            if (c-1 >= 0) v3 = memo[r][c-1]

            if (m[r][c] === "1") {
                val = 1 + Math.min(v1,v2,v3)
            }
            max = Math.max(max, val, v1, v3)
            memo[r][c] = val
        }
    }
    return max * max
};