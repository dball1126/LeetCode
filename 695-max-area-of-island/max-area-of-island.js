/**
 * @param {number[][]} grid
 * @return {number}
 */
// Depth-First-Search
// Time and Space: O(n * m)...rows * columns
var maxAreaOfIsland = function(grid) {
    if (!grid.length) return 0
    let maxArea = 0, rowLen = grid.length, colLen = grid[0].length
    const dirs = [[-1, 0], [1,0], [0,1], [0,-1]]
    const visited = [...new Array(rowLen + 1)].map(a => [...new Array(colLen + 1)].fill(false))

    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= rowLen || c >= colLen || visited[r][c] || grid[r][c] !== 1) return 0
        let islands = 1;
        visited[r][c] = true;
        for (let [x, y] of dirs) {
            let row = r + x, col = c + y
            islands += dfs(row, col)
        }
        return islands
    }

    for (let r = 0; r < rowLen; r++) {
        for (let c = 0; c < colLen; c++) {
            maxArea = Math.max(maxArea, dfs(r, c))
        }
    }
    return maxArea
};