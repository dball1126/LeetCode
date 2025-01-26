var wallsAndGates = function(rooms) {
    let n = rooms.length, m = rooms[0].length;
    let queue = [], inf = 2**31 - 1;
    let visited = new Set();
    const dirs = [[-1,0],[1,0],[0,-1],[0,1]];

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            if (rooms[r][c] === 0) {
                queue.push([r,c,0]);
            }
        }
    }
    while (queue.length) {
        let [r, c, d] = queue.shift();
        if (d !== 0) {
            rooms[r][c] = d;
        }
        for (let [x, y] of dirs) {
            let dx = r+x, dy = c+y;
            let key = dx +":" + dy;
            if (dx >= 0 && dy >= 0 && dx < n && dy < m && !visited.has(key) && rooms[dx][dy] === inf) {
                visited.add(key);
                queue.push([dx,dy,d+1]);
            }
        }
    }
    return rooms;
};