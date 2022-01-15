/**
 * Sate Var: r for row, c for col
 * Base cases: Infinity if out of bounds
 *             Sum if === r matrix.length-1 and c in bounds
 * Recurrence Relation:
 * memo[r][c] = matrix[r][c] + Math.min(dp(r+1, c-1), dp(r+1, c), dp(r+1, c+1))
 * return Math.min( memo[r][c], dp(r, c+1)  )
 * 
 * @param {number[][]} matrix
 * @return {number}
 */
 var minFallingPathSum = function(matrix) {
    let memo = [...new Array(matrix.length+1)].map(a => [...new Array(matrix[0].length+1)].fill(undefined))
    let min = Infinity

    const dp = (r, c) => {
        if (r >= matrix.length || c >= matrix[0].length ||c < 0 || r < 0) {
            return Infinity
        }
        if (memo[r][c] !== undefined) return memo[r][c]
        if (r === matrix.length-1 && c >= 0 && c < matrix[0].length) return matrix[r][c]

        return memo[r][c] = matrix[r][c] + Math.min(dp(r+1, c-1), dp(r+1, c), dp(r+1, c+1))
    }

    for (let i = 0; i < matrix[0].length; i++) {
        min = Math.min(min, dp(0, i))
    }
    return min
};