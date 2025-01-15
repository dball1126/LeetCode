var numIslands2 = function(m, n, positions) {
    let root = [...(new Array(m * n).keys())];
    let rank = [...new Array(m * n)].fill(1);
    let grid = [...new Array(m)].map(a => [...new Array(n)].fill(0));
    let result = [];
    let islands = 0;
    const dirs = [[-1,0],[1,0],[0,-1],[0,1]];
    const find = (n) => n === root[n] ? root[n] : find(root[n]);

    const union = (n1, n2) => {
        let p1 = find(n1), p2 = find(n2);
        if (p1 === p2) return;
        islands--;
        if (rank[p1] > rank[p2]) {
            root[p2] = p1;
        } else if (rank[p2] > rank[p1]) {
            root[p1] = p2;
        } else {
            root[p2] = p1
            rank[p1]++
        }
    }

    for (let [x, y] of positions) {
        if (grid[x][y] !== 1) islands++;
        grid[x][y] = 1;

        for (let [r, c] of dirs) {
            let dx = r+x, dy = c  + y;
            if (dx >= 0 && dy >= 0 && dx < m && dy < n && grid[dx] && grid[dx][dy] === 1) {
                union(x * n + y, dx * n + dy);
            }
        }
        result.push(islands)
    }
    return result;
};