
class Node {
    constructor(val, row, col) {
        this.val = val;
        this.row = row;
        this.col = col;
    }
}
var shortestPathBinaryMatrix = function(grid) {
    let n = grid.length, m = grid[0].length;
    if (grid[0][0] !== 0 || grid[n-1][m-1] !== 0) return -1;
    const dirs = [[-1,0],[1,0],[0,-1],[0,1],
                  [-1,-1],[-1,1],[1,1],[1,-1]]
    const visited = new Set();
    const minHeap = new MinPriorityQueue();
    minHeap.enqueue(new Node(1, 0, 0), 1)
    while (!minHeap.isEmpty()) {
        let node = minHeap.dequeue().element;
        if (node.row === n-1 && node.col === m-1) return node.val;
        visited.add(node.row + ":" + node.col);
        for (let [x, y] of dirs) {
            let r = node.row + x, c = node.col + y;
            if (r >= 0 && r < n && c >= 0 && c < m && grid[r][c] === 0) {
                let key = r + ":" + c;
                if (!visited.has(key)) {
                    visited.add(key);
                    minHeap.enqueue(new Node(node.val+ 1, r, c), node.val+ 1);
                }
            }
        }
    }
    return -1;
};