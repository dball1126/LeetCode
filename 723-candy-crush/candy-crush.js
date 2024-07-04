/**
 * @param {number[][]} board
 * @return {number[][]}
 */
 // Matrix Traversal, two-pointer
// Time: O(n^2 * m^2)...n for rows and m for columns
// Space: O(n * m)
var candyCrush = function(board) {
    let crush = true, n = board.length

    const addKey = (r, c, map) => {
        let k = r + ":" + c
        map.set(k, [r, c])
    }
    const getKey = (r, c, map) => {
        return map.get(r + ":" + c)
    }
    while (crush) {
        crush = false;
        let items = new Map()
        
        for (let r = 0; r < n; r++) {
            let m = board[r].length
            for (let c = 0; c < m; c++) {
                let v = board[r][c]
                if (v === 0) continue;
                // Horizontal
                if (c-1 >= 0 && c+1 < m) {
                    if (v === board[r][c-1] && v === board[r][c+1]) {

                        addKey(r, c, items); addKey(r, c-1, items);  addKey(r, c+1, items); 
                        crush = true;
                    }
                }
                // vertical
                if (r-1 >= 0 && r+1 < n) {
                    if (v === board[r-1][c] && v === board[r+1][c]) {
                        addKey(r, c, items); addKey(r-1, c, items); addKey(r+1, c, items); 
                        crush = true;
                    }
                }
             
            }
        }
        if (crush) {
            let cols = new Set()
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < board[i].length; j++) {
                    const key = getKey(i, j, items)
                    if (key !== undefined) {
                        board[i][j] = 0
                        cols.add(j)
                    }
                }
            }

            for (let k of Array.from(cols)) {
                let y1 = n-1, y2 = n-1 

                while (y1 >0 && y2 >= 0) {
                    while (y1 > 0 && board[y1][k] !== 0) {
                        y1--
                    }
                    y2 = y1
                    while (y2 >= 0 && board[y2][k] === 0) {
                        y2--
                    }
                    if (y1 > y2 && y2 >= 0) {
                        [board[y1][k], board[y2][k]] = [board[y2][k], board[y1][k]]
                        y1--
                        y2 = y1
                    }
                }
            }
        }
    }
    return board
};