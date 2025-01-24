/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    if (!grid.length) return 0;
    const n = grid.length, m = grid[0].length;
    const root = [...(new Array(n*m).keys())];
    const rank = [...(new Array(n*m))].fill(1);
    const dist = [...(new Array(n*m))].fill(1);
    const dirs = [[-1,0], [1, 0], [0,1], [0, -1]];
    const findRoot = (n) => n === root[n] ? n : findRoot(root[n]); // path compression
    let max = 1
    const union = (n1, n2) => {
        let p1 = findRoot(n1), p2 = findRoot(n2);

        if (p1 === p2) return;
        let dist1 = dist[p1], dist2 = dist[p2];
        if (rank[p1] > rank[p2]) {
            root[p2] = root[p1];
        } else if (rank[p2] > rank[p1]) {
            root[p1] = root[p2];
        } else {
            rank[p1]++;
            root[p2] = root[p1];
        }
        dist[root[p1]] = dist1 + dist2;
        max = Math.max(max, dist[root[p1]])
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) {
                for (let [x, y] of dirs) {
                    let r = i + x, c = j + y;
                    if (r >= 0 && c >= 0 && r < n && c < m) {
                        if (grid[r][c] === 1) {
                            union(i * m + j,  r * m + c);
                        }
                    }
                }
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 0) {
                let newMax = 1;
                let islands = new Set();
                for (let [x, y] of dirs) {
                    let r = i + x, c = j + y;
                    if (r >= 0 && c >= 0 && r < n && c < m) {
                        if (grid[r][c] === 1) {
                            let parentIdx = findRoot(r * m + c);
                            if (!islands.has(parentIdx)) {
                                newMax += dist[parentIdx];
                                islands.add(parentIdx);
                            }
                        }
                    }
                }
                max = Math.max(max, newMax);
            }
        }
    }
    return max;
};