/************************************************************
 * Dynamic Programming                                      |
 ************************************************************/
/**
 * Use 2D array.
 * State Variables: r for rows, c for columns, s for current sum.
 * 
 * Base Cases: if in bounds return the sum if you reach the bottom right
 *             if out of bounds return Infinity
 *             if the current val memoized is less than or equal to the Sum... Return it.
 * 
 * Recurrence Relation: memo[r][c] = Math.min( dp(r+1, c, grid[r][c] + s), dp(r, c+1, grid[r][c] + s) )
 * Time: O(1) + O(v * e) = O(v * e)
 * Space: O(v * e) for 2d array
 * 
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (grid.length === 1 && grid[0].length === 1) return grid[0][0]

    let memo = [...new Array(grid.length+1)].map(a => [...new Array(grid[0].length+1)].fill(-1))

    const dp = (r, c , s) => {
        if (r >= grid.length || c >= grid[0].length) return Infinity;
        if (r === grid.length-1 && c === grid[0].length-1) return s + grid[r][c];
        if (memo[r][c] !== -1 ) return memo[r][c]
        
        return memo[r][c] = grid[r][c] + Math.min( dp(r+1, c,  s), dp(r, c+1, s) )
    }

    return result = dp(0, 0, 0)
}