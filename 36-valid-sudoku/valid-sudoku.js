/**
 * @param {character[][]} board
 * @return {boolean}
 */
// Time: O(n)..n being the number of cells
// Space: O(n)
var isValidSudoku = function(board) {
    let rows = new Map(), cols = new Map()
    for (let i = 0; i < 9; i++) {
        rows.set(i, new Set())
        cols.set(i, new Set())
    }

    const validateSudoku = (row, col) => {
        let curr = [...new Array(10)].fill(false);
        for (let r = row; r < row+3; r++) {
            for (let c = col; c < col+3; c++) {
                if (board[r][c] === ".") continue
                let v = parseInt(board[r][c]);
                if (rows.get(r).has(v)) {
                    return false;
                }
                if (cols.get(c).has(v)) {
                    return false;
                }
                if (curr[v]) {
                    return false;
                }
                rows.get(r).add(v)
                cols.get(c).add(v)
                curr[v] = true;
            }
        }
        return true
    }

    for (let i = 0; i < 9; i+=3) {
        for (let j = 0; j < 9; j+=3) {
           if (!validateSudoku(i, j)) {
            return false;
            }
        }
    }
    return true;
};