// Time: O(n)..n being the number of cells
// Space: O(n)
var isValidSudoku = function(board) {
    let rows = new Map(), cols = new Map()
    for (let i = 0; i < 9; i++) {
        rows.set(i, 0);
        cols.set(i, 0);
    }
    const hasBit = (n, mask) => (mask & n) >= 1;
    const setBit = (n, mask) => mask | n;
    const validateSudoku = (row, col) => {
        let mask = 0;
        for (let r = row; r < row+3; r++) {
            for (let c = col; c < col+3; c++) {
                if (board[r][c] === ".") continue
                let v = (1 << parseInt(board[r][c]));
                if (hasBit(v, rows.get(r))) return false;
                if (hasBit(v, cols.get(c))) return false;
                if (hasBit(v, mask)) return false
                rows.set(r, setBit(rows.get(r), v));
                cols.set(c, setBit(cols.get(c), v));
                mask = setBit(v, mask);
            }
        }
        return true
    }
    for (let i = 0; i < 9; i+=3) {
        for (let j = 0; j < 9; j+=3) {
           if (!validateSudoku(i, j)) return false;
        }
    }
    return true;
};